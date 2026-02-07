import { format } from "std/datetime/mod.ts";
import { join } from "std/path/mod.ts";
import { exists } from "std/fs/mod.ts";

import * as utils from "./utils.ts";
import { HotWord } from "./types.ts";

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "Accept":
    "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
};

async function fetchData(): Promise<HotWord[]> {
  const regexp =
    /<a href="(\/weibo\?q=[^"]+)".*?>(.+)<\/a>[\s]+<span>(.+)<\/span>/g;

  // 第一次请求获取 cookies
  const initResponse = await fetch("https://s.weibo.com/top/summary", {
    headers: HEADERS,
    redirect: "manual",
  });
  const cookies = (initResponse.headers.get("set-cookie") || "")
    .split(",")
    .map((c) => c.split(";")[0].trim())
    .filter(Boolean)
    .join("; ");

  console.log(`Initial response: ${initResponse.status}`);
  console.log(`Cookies received: ${cookies ? "yes" : "none"}`);

  // 第二次请求带上 cookies
  const response = await fetch("https://s.weibo.com/top/summary", {
    headers: {
      ...HEADERS,
      "Referer": "https://s.weibo.com/",
      ...(cookies ? { "Cookie": cookies } : {}),
    },
  });

  if (!response.ok) {
    console.error(`Fetch failed: ${response.status} ${response.statusText}`);
    Deno.exit(-1);
  }

  const result = await response.text();
  console.log(`Response length: ${result.length} chars`);

  const matches = result.matchAll(regexp);
  const rank = utils.getCurrentRank();

  const words: HotWord[] = Array.from(matches).map((x) => ({
    url: x[1],
    text: x[2],
    count: Math.round(parseInt(x[3]) * rank),
  }));

  console.log(`Matched ${words.length} trending topics`);

  if (words.length === 0 && result.length > 0) {
    // 输出页面片段用于调试
    const snippet = result.substring(0, 500);
    console.log(`Page snippet: ${snippet}`);
  }

  return words;
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
