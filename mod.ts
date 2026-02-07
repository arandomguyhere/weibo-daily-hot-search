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
    .map((item: { word: string; num: number; word_scheme?: string }) => ({
      url: item.word_scheme ||
        `/weibo?q=${encodeURIComponent("#" + item.word + "#")}`,
      text: item.word,
      count: Math.round(item.num * rank),
    }));
}

// deno-lint-ignore no-explicit-any
function parseHotBand(data: any, rank: number): HotWord[] {
  const band = data?.data?.band_list;
  if (!Array.isArray(band)) return [];

  return band
    .filter((item: { word?: string; num?: number }) => item.word && item.num)
    .map((item: { word: string; num: number; word_scheme?: string }) => ({
      url: item.word_scheme ||
        `/weibo?q=${encodeURIComponent("#" + item.word + "#")}`,
      text: item.word,
      count: Math.round(item.num * rank),
    }));
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
          items.push({
            url: item.scheme.replace("https://m.weibo.cn/search?containerid=", "/weibo?q="),
            text: item.desc_extr || item.title_sub || item.desc,
            count: Math.round(count * rank),
          });
        }
      }
    }
  }
  return items;
}

/**
 * 处理源数据，包括去重、关键词过滤、排序、切割
 * @param words 源数据
 */
function handleRawData(rawWords: HotWord[]) {
  const wordTextSet: Set<string> = new Set();
  const words: HotWord[] = [];

  /** 去重 */
  rawWords
    .sort((a, b) => b.count - a.count)
    .filter((w) => !w.text.includes("肖战"))
    .forEach((t) => {
      if (!wordTextSet.has(t.text)) {
        wordTextSet.add(t.text);
        words.push(t);
      }
    });

  return words.slice(0, 50);
}

async function main() {
  const currentDateStr = format(new Date(), "yyyy-MM-dd");
  const rawFilePath = join("raw", `${currentDateStr}.json`);

  const rawHotWords = await fetchData();
  let todayRawData: HotWord[] = [];

  if (await exists(rawFilePath)) {
    try {
      const content = await Deno.readTextFile(rawFilePath);
      todayRawData = JSON.parse(content);
    } catch {
      console.error("Failed to parse existing data, starting fresh");
    }
  }

  const hotWords = handleRawData(rawHotWords.concat(todayRawData));

  // 保存原始数据
  await Deno.writeTextFile(rawFilePath, JSON.stringify(hotWords));

  // 更新 README.md
  const readme = await utils.genNewReadmeText(hotWords);
  await Deno.writeTextFile("./README.md", readme);
}

await main();
