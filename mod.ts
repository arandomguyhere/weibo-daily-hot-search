import { format } from "std/datetime/mod.ts";
import { join } from "std/path/mod.ts";
import { exists } from "std/fs/mod.ts";

import * as utils from "./utils.ts";
import { HotWord } from "./types.ts";

const DESKTOP_HEADERS: Record<string, string> = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  "Accept": "application/json, text/plain, */*",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  "Referer": "https://weibo.com/",
};

const MOBILE_HEADERS: Record<string, string> = {
  "User-Agent":
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
  "Accept": "application/json, text/plain, */*",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  "X-Requested-With": "XMLHttpRequest",
  "Referer": "https://m.weibo.cn/",
};

function normalizeUrl(url: string, text: string): string {
  if (url.startsWith("/weibo?q=")) return url;
  if (url.startsWith("http")) return url;
  if (url.startsWith("#") && url.endsWith("#")) {
    return `/weibo?q=${encodeURIComponent(url)}`;
  }
  return `/weibo?q=${encodeURIComponent("#" + text + "#")}`;
}

// Try multiple API endpoints to fetch hot search data
async function fetchData(): Promise<HotWord[]> {
  const endpoints = [
    {
      url: "https://weibo.com/ajax/side/hotSearch",
      headers: DESKTOP_HEADERS,
      parse: parseAjaxHotSearch,
    },
    {
      url: "https://weibo.com/ajax/statuses/hot_band",
      headers: DESKTOP_HEADERS,
      parse: parseHotBand,
    },
    {
      url: "https://m.weibo.cn/api/container/getIndex?containerid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Drealtimehot",
      headers: MOBILE_HEADERS,
      parse: parseMobileApi,
    },
  ];

  const rank = utils.getCurrentRank();

  for (const endpoint of endpoints) {
    try {
      console.log(`Trying: ${endpoint.url}`);
      const response = await fetch(endpoint.url, { headers: endpoint.headers });

      if (!response.ok) {
        console.log(`  Status: ${response.status}`);
        continue;
      }

      const data = await response.json();
      const words = endpoint.parse(data, rank);

      if (words.length > 0) {
        console.log(`  Found ${words.length} topics`);
        return words;
      }

      console.log(`  Response ok but parsed 0 topics`);
    } catch (e) {
      console.log(`  Error: ${e.message}`);
    }
  }

  console.error("All endpoints failed to return data");
  return [];
}

// deno-lint-ignore no-explicit-any
function parseAjaxHotSearch(data: any, rank: number): HotWord[] {
  const realtime = data?.data?.realtime;
  if (!Array.isArray(realtime)) return [];

  return realtime
    .filter((item: { word?: string; num?: number }) => item.word && item.num)
    .map((item: { word: string; num: number; word_scheme?: string }) => {
      const rawUrl = item.word_scheme ||
        `/weibo?q=${encodeURIComponent("#" + item.word + "#")}`;
      return {
        url: normalizeUrl(rawUrl, item.word),
        text: item.word,
        count: Math.round(item.num * rank),
      };
    });
}

// deno-lint-ignore no-explicit-any
function parseHotBand(data: any, rank: number): HotWord[] {
  const band = data?.data?.band_list;
  if (!Array.isArray(band)) return [];

  return band
    .filter((item: { word?: string; num?: number }) => item.word && item.num)
    .map((item: { word: string; num: number; word_scheme?: string }) => {
      const rawUrl = item.word_scheme ||
        `/weibo?q=${encodeURIComponent("#" + item.word + "#")}`;
      return {
        url: normalizeUrl(rawUrl, item.word),
        text: item.word,
        count: Math.round(item.num * rank),
      };
    });
}

// deno-lint-ignore no-explicit-any
function parseMobileApi(data: any, rank: number): HotWord[] {
  const cards = data?.data?.cards;
  if (!Array.isArray(cards)) return [];

  const items: HotWord[] = [];
  for (const card of cards) {
    const group = card?.card_group;
    if (!Array.isArray(group)) continue;

    for (const item of group) {
      if (item.desc && item.scheme) {
        const count = parseInt(item.desc) || 0;
        if (count > 0) {
          const text = item.desc_extr || item.title_sub || item.desc;
          const rawUrl = item.scheme.replace("https://m.weibo.cn/search?containerid=", "/weibo?q=");
          items.push({
            url: normalizeUrl(rawUrl, text),
            text,
            count: Math.round(count * rank),
          });
        }
      }
    }
  }
  return items;
}

// Merge new fetch with existing data, computing lifecycle metadata
function mergeAndTrack(freshWords: HotWord[], existingWords: HotWord[]): HotWord[] {
  const now = new Date().toISOString();
  const existingMap = new Map<string, HotWord>();
  existingWords.forEach((w) => existingMap.set(w.text, w));

  const freshMap = new Map<string, HotWord>();
  freshWords
    .filter((w) => !w.text.includes("肖战"))
    .forEach((w) => {
      if (!freshMap.has(w.text)) freshMap.set(w.text, w);
    });

  const result = new Map<string, HotWord>();

  // Process fresh topics
  for (const [text, fresh] of freshMap) {
    const existing = existingMap.get(text);

    if (existing) {
      // Topic existed before — update with new count, preserve metadata
      const prevCount = existing.count;
      const newCount = Math.max(fresh.count, existing.count);
      const velocity = prevCount > 0
        ? Math.round(((fresh.count - prevCount) / prevCount) * 100)
        : 100;

      let status: HotWord["status"];
      if (velocity > 20) status = "rising";
      else if (velocity < -20) status = "falling";
      else status = "hot";

      result.set(text, {
        ...fresh,
        textEn: existing.textEn || fresh.textEn,
        count: newCount,
        firstSeen: existing.firstSeen || now,
        peakCount: Math.max(newCount, existing.peakCount || 0),
        prevCount: prevCount,
        velocity,
        status,
      });
    } else {
      // Brand new topic
      result.set(text, {
        ...fresh,
        firstSeen: now,
        peakCount: fresh.count,
        prevCount: 0,
        velocity: 100,
        status: "new",
      });
    }
  }

  // Topics that existed but are no longer in fresh data — mark as "gone"
  for (const [text, existing] of existingMap) {
    if (!freshMap.has(text) && !result.has(text)) {
      result.set(text, {
        ...existing,
        prevCount: existing.count,
        velocity: -100,
        status: "gone",
      });
    }
  }

  // Sort: new and rising first, then by count
  const statusOrder: Record<string, number> = {
    new: 0, rising: 1, hot: 2, falling: 3, gone: 4,
  };

  return Array.from(result.values())
    .sort((a, b) => {
      const sa = statusOrder[a.status || "hot"] ?? 2;
      const sb = statusOrder[b.status || "hot"] ?? 2;
      if (sa !== sb) return sa - sb;
      return b.count - a.count;
    })
    .slice(0, 100);
}

async function translateBatch(texts: string[]): Promise<string[]> {
  try {
    const query = texts.map((t) => `q=${encodeURIComponent(t)}`).join("&");
    const url = `https://translate.googleapis.com/translate_a/t?client=gtx&sl=zh-CN&tl=en&${query}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Status ${response.status}`);
    const result = await response.json();
    if (Array.isArray(result) && Array.isArray(result[0])) {
      return result.map((item: string[]) => item[0]);
    } else if (Array.isArray(result)) {
      return [result[0]];
    }
    return texts;
  } catch (e) {
    console.log(`Translation failed: ${e.message}`);
    return texts;
  }
}

async function addTranslations(words: HotWord[]): Promise<void> {
  const untranslated = words.filter((w) => !w.textEn);
  if (untranslated.length === 0) return;

  for (let i = 0; i < untranslated.length; i += 10) {
    const batch = untranslated.slice(i, i + 10);
    const translations = await translateBatch(batch.map((w) => w.text));
    batch.forEach((w, idx) => {
      w.textEn = translations[idx];
    });
  }
  console.log(`Translated ${untranslated.length} topics`);
}

async function main() {
  const currentDateStr = format(new Date(), "yyyy-MM-dd");
  const rawFilePath = join("raw", `${currentDateStr}.json`);

  const freshWords = await fetchData();
  let existingWords: HotWord[] = [];

  if (await exists(rawFilePath)) {
    try {
      const content = await Deno.readTextFile(rawFilePath);
      existingWords = JSON.parse(content);
    } catch {
      console.error("Failed to parse existing data, starting fresh");
    }
  }

  const hotWords = mergeAndTrack(freshWords, existingWords);

  // Log status summary
  const counts = { new: 0, rising: 0, hot: 0, falling: 0, gone: 0 };
  hotWords.forEach((w) => { if (w.status) counts[w.status]++; });
  console.log(`Status: ${counts.new} new, ${counts.rising} rising, ${counts.hot} hot, ${counts.falling} falling, ${counts.gone} gone`);

  await addTranslations(hotWords);

  await Deno.writeTextFile(rawFilePath, JSON.stringify(hotWords));
  const readme = await utils.genNewReadmeText(hotWords);
  await Deno.writeTextFile("./README.md", readme);
}

await main();
