import { format } from "std/datetime/mod.ts";
import { HotWord } from "./types.ts";

export function normalizeUrl(url: string, text: string): string {
  if (url.startsWith("/weibo?q=")) return url;
  if (url.startsWith("http")) return url;
  if (url.startsWith("#") && url.endsWith("#")) {
    return `/weibo?q=${encodeURIComponent(url)}`;
  }
  return `/weibo?q=${encodeURIComponent("#" + text + "#")}`;
}

function statusBadge(word: HotWord): string {
  switch (word.status) {
    case "new": return " `NEW`";
    case "rising": return ` \`+${word.velocity}%\``;
    case "falling": return ` \`${word.velocity}%\``;
    case "gone": return " `GONE`";
    default: return "";
  }
}

function genDataListString(words: HotWord[]): string {
  return words
    .filter((x) => x.status !== "gone")
    .map((x) => {
      const label = x.textEn && x.textEn !== x.text
        ? `${x.text} (${x.textEn})`
        : x.text;
      const url = normalizeUrl(x.url, x.text);
      return `1. [${label}](https://s.weibo.com${url}) \`${
        getCountStr(x.count)
      } 🔥\`${statusBadge(x)}`;
    })
    .join("\n");
}

export async function genNewReadmeText(words: HotWord[]): Promise<string> {
  const formatedNowTimeStr = format(new Date(), "yyyy-MM-dd HH:mm:ss");
  const readmeTextStr = await Deno.readTextFile("./README.md");

  return readmeTextStr.replace(
    /<!-- BEGIN -->[\W\w]*<!-- END -->/,
    `<!-- BEGIN -->

${genDataListString(words) || "No data available"}

Updated at ${formatedNowTimeStr}

<!-- END -->`,
  );
}

// Format heat count string, e.g. 100.1K
export function getCountStr(num: number): string {
  const countUnit = ["", "K", "M", "B"];
  let idx = 0;

  while (num / 1000 >= 1 && idx < 3) {
    idx++;
    num = num / 1000;
  }

  return num.toFixed(1) + countUnit[idx];
}
