import { format } from "std/datetime/mod.ts";
import { dailyHours } from "./consts.ts";
import { HotWord } from "./types.ts";

function genDataListString(words: HotWord[]): string {
  return words
    .map((x) => {
      const label = x.textEn && x.textEn !== x.text
        ? `${x.text} (${x.textEn})`
        : x.text;
      return `1. [${label}](https://s.weibo.com${x.url}) \`${
        getCountStr(x.count)
      } 🔥\``;
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

// Get heat value weight based on current hour
export function getCurrentRank(): number {
  const currentHours = (new Date()).getHours();

  // NOTE: values may need further tuning
  if (dailyHours.night.includes(currentHours)) {
    return 0.5;
  } else if (dailyHours.morning.includes(currentHours)) {
    return 0.8;
  } else if (dailyHours.peak.includes(currentHours)) {
    return 1.2;
  }

  return 1;
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
