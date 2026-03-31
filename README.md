# Weibo Signal Tracker

Narrative signal monitoring system that tracks Weibo trending search data with velocity analysis and lifecycle detection.

## Live Demo

**[https://arandomguyhere.github.io/weibo-daily-hot-search](https://arandomguyhere.github.io/weibo-daily-hot-search)**

Browse historical trending data with status badges, velocity indicators, and category filters.

## Features

- **Signal tracking**: Scrapes Weibo trending every 5 minutes, tracks up to 100 topics per day
- **Lifecycle detection**: Each topic tagged as `NEW`, `RISING`, `HOT`, `FALLING`, or `GONE`
- **Velocity analysis**: Percentage change between scrapes shows acceleration/deceleration
- **Suppression detection**: Topics that disappear from the feed are marked as `GONE`
- **English translations**: Auto-translated via Google Translate for non-Chinese readers
- **Dark mode + filters**: Filter by status category, search by Chinese or English text
- **Engagement metrics**: Top topics enriched with likes, comments, and reposts from related posts

## Today's Hot Searches

<!-- BEGIN -->

1. [AI短剧 偷脸 (AI short drama Stealing faces)](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%20%E5%81%B7%E8%84%B8%23) `1.1M 🔥` `NEW`
1. [张雪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `794.6K 🔥` `NEW`
1. [伊朗通过霍尔木兹海峡管理方案](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E7%AE%A1%E7%90%86%E6%96%B9%E6%A1%88%23) `599.9K 🔥` `NEW`
1. [重庆一隧道爆炸致4死9伤](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E4%B8%80%E9%9A%A7%E9%81%93%E7%88%86%E7%82%B8%E8%87%B44%E6%AD%BB9%E4%BC%A4%23) `424.1K 🔥` `NEW`
1. [张凌赫赵今麦要做下一对昀牵孟绕吗](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%A6%81%E5%81%9A%E4%B8%8B%E4%B8%80%E5%AF%B9%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95%E5%90%97%23) `417.7K 🔥` `NEW`
1. [特朗普再就停火威胁伊朗](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%86%8D%E5%B0%B1%E5%81%9C%E7%81%AB%E5%A8%81%E8%83%81%E4%BC%8A%E6%9C%97%23) `372.3K 🔥` `NEW`
1. [何洁曾说她们公司就靠跳楼机活着](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B4%81%E6%9B%BE%E8%AF%B4%E5%A5%B9%E4%BB%AC%E5%85%AC%E5%8F%B8%E5%B0%B1%E9%9D%A0%E8%B7%B3%E6%A5%BC%E6%9C%BA%E6%B4%BB%E7%9D%80%23) `249.9K 🔥` `NEW`
1. [常石磊编曲](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E7%9F%B3%E7%A3%8A%E7%BC%96%E6%9B%B2%23) `241.3K 🔥` `NEW`
1. [上海地铁延误](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E5%BB%B6%E8%AF%AF%23) `178.0K 🔥` `NEW`
1. [李子柒纪录片备案](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AD%90%E6%9F%92%E7%BA%AA%E5%BD%95%E7%89%87%E5%A4%87%E6%A1%88%23) `122.3K 🔥` `NEW`
1. [这些豆腐其实不含豆 (These tofu actually don’t contain beans)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E8%B1%86%E8%85%90%E5%85%B6%E5%AE%9E%E4%B8%8D%E5%90%AB%E8%B1%86%23) `112.0K 🔥` `NEW`
1. [连休3天高速免费](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BC%913%E5%A4%A9%E9%AB%98%E9%80%9F%E5%85%8D%E8%B4%B9%23) `103.2K 🔥` `NEW`
1. [iPhone18Pro灵动岛挖孔或迎瘦身](https://s.weibo.com/weibo?q=%23iPhone18Pro%E7%81%B5%E5%8A%A8%E5%B2%9B%E6%8C%96%E5%AD%94%E6%88%96%E8%BF%8E%E7%98%A6%E8%BA%AB%23) `102.5K 🔥` `NEW`
1. [女子离世后被结婚遗产未被侵占](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A6%BB%E4%B8%96%E5%90%8E%E8%A2%AB%E7%BB%93%E5%A9%9A%E9%81%97%E4%BA%A7%E6%9C%AA%E8%A2%AB%E4%BE%B5%E5%8D%A0%23) `98.7K 🔥` `NEW`
1. [特朗普希望4月6日前与伊达成协议](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%B8%8C%E6%9C%9B4%E6%9C%886%E6%97%A5%E5%89%8D%E4%B8%8E%E4%BC%8A%E8%BE%BE%E6%88%90%E5%8D%8F%E8%AE%AE%23) `90.6K 🔥` `NEW`
1. [跳楼机](https://s.weibo.com/weibo?q=%23%E8%B7%B3%E6%A5%BC%E6%9C%BA%23) `74.7K 🔥` `NEW`
1. [重庆两江新区为张雪机车规划新基地](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E4%B8%A4%E6%B1%9F%E6%96%B0%E5%8C%BA%E4%B8%BA%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%A7%84%E5%88%92%E6%96%B0%E5%9F%BA%E5%9C%B0%23) `72.8K 🔥` `NEW`
1. [浙江宣传谈李白之争](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%AE%A3%E4%BC%A0%E8%B0%88%E6%9D%8E%E7%99%BD%E4%B9%8B%E4%BA%89%23) `70.5K 🔥` `NEW`
1. [房利美大涨51%](https://s.weibo.com/weibo?q=%23%E6%88%BF%E5%88%A9%E7%BE%8E%E5%A4%A7%E6%B6%A851%25%23) `70.2K 🔥` `NEW`
1. [接下来的三个月每个月都有假](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E4%B8%8B%E6%9D%A5%E7%9A%84%E4%B8%89%E4%B8%AA%E6%9C%88%E6%AF%8F%E4%B8%AA%E6%9C%88%E9%83%BD%E6%9C%89%E5%81%87%23) `69.7K 🔥` `NEW`
1. [国行版苹果AI (National Bank version of Apple AI)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%A1%8C%E7%89%88%E8%8B%B9%E6%9E%9CAI%23) `247.4K 🔥` `+352%`
1. [汪峰 旭日阳刚](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%20%E6%97%AD%E6%97%A5%E9%98%B3%E5%88%9A%23) `245.1K 🔥` `+93%`
1. [身份证有效期和年龄有关](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E6%9C%89%E6%95%88%E6%9C%9F%E5%92%8C%E5%B9%B4%E9%BE%84%E6%9C%89%E5%85%B3%23) `238.7K 🔥` `+38%`
1. [严浩翔高会更新](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E9%AB%98%E4%BC%9A%E6%9B%B4%E6%96%B0%23) `238.2K 🔥` `+94%`
1. [李荣浩杨丞琳相爱11年结婚6年](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E6%9D%A8%E4%B8%9E%E7%90%B3%E7%9B%B8%E7%88%B111%E5%B9%B4%E7%BB%93%E5%A9%9A6%E5%B9%B4%23) `237.6K 🔥` `+122%`
1. [张雪称将吃掉国际大牌超50%份额 (Zhang Xue said that he will take over 50% of the share of international big brands)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E7%A7%B0%E5%B0%86%E5%90%83%E6%8E%89%E5%9B%BD%E9%99%85%E5%A4%A7%E7%89%8C%E8%B6%8550%25%E4%BB%BD%E9%A2%9D%23) `236.6K 🔥` `+90%`
1. [内存条一天一个价商家直呼亏麻了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E6%9D%A1%E4%B8%80%E5%A4%A9%E4%B8%80%E4%B8%AA%E4%BB%B7%E5%95%86%E5%AE%B6%E7%9B%B4%E5%91%BC%E4%BA%8F%E9%BA%BB%E4%BA%86%23) `161.4K 🔥` `+166%`
1. [檀健次说只能唱一句再唱就要版权 (Tan Jianci said that if he can only sing one line and then sings again, he will need copyright.)](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E8%AF%B4%E5%8F%AA%E8%83%BD%E5%94%B1%E4%B8%80%E5%8F%A5%E5%86%8D%E5%94%B1%E5%B0%B1%E8%A6%81%E7%89%88%E6%9D%83%23) `107.7K 🔥` `+37%`
1. [朱媛媛去世近一年辛柏青露面](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%AA%9B%E5%AA%9B%E5%8E%BB%E4%B8%96%E8%BF%91%E4%B8%80%E5%B9%B4%E8%BE%9B%E6%9F%8F%E9%9D%92%E9%9C%B2%E9%9D%A2%23) `92.6K 🔥` `+30%`
1. [王俊凯怎么哪里都有你](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%80%8E%E4%B9%88%E5%93%AA%E9%87%8C%E9%83%BD%E6%9C%89%E4%BD%A0%23) `76.9K 🔥` `+22%`
1. [战友背起邱少云遗骨想带他回家 (Comrades carried Qiu Shaoyun's remains and wanted to take him home)](https://s.weibo.com/weibo?q=%23%E6%88%98%E5%8F%8B%E8%83%8C%E8%B5%B7%E9%82%B1%E5%B0%91%E4%BA%91%E9%81%97%E9%AA%A8%E6%83%B3%E5%B8%A6%E4%BB%96%E5%9B%9E%E5%AE%B6%23) `631.5K 🔥`
1. [央视调查烧秸秆屡禁不止 (CCTV investigates repeated bans on straw burning)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%B0%83%E6%9F%A5%E7%83%A7%E7%A7%B8%E7%A7%86%E5%B1%A1%E7%A6%81%E4%B8%8D%E6%AD%A2%23) `294.6K 🔥`
1. [午睡是一场真正的豪赌 (Napping is a real gamble)](https://s.weibo.com/weibo?q=%23%E5%8D%88%E7%9D%A1%E6%98%AF%E4%B8%80%E5%9C%BA%E7%9C%9F%E6%AD%A3%E7%9A%84%E8%B1%AA%E8%B5%8C%23) `256.9K 🔥`
1. [田曦薇晒与张凌赫头纱合照](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%99%92%E4%B8%8E%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%B4%E7%BA%B1%E5%90%88%E7%85%A7%23) `182.8K 🔥`
1. [刘宇宁版权意识Max (Liu Yuning’s Copyright Awareness Max)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%89%88%E6%9D%83%E6%84%8F%E8%AF%86Max%23) `176.1K 🔥`
1. [粉丝称黄霄雲侵权华晨宇](https://s.weibo.com/weibo?q=%23%E7%B2%89%E4%B8%9D%E7%A7%B0%E9%BB%84%E9%9C%84%E9%9B%B2%E4%BE%B5%E6%9D%83%E5%8D%8E%E6%99%A8%E5%AE%87%23) `110.1K 🔥`
1. [迪丽热巴也闯进好凉赛道了 (Di Lieba also broke into the cool track)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B9%9F%E9%97%AF%E8%BF%9B%E5%A5%BD%E5%87%89%E8%B5%9B%E9%81%93%E4%BA%86%23) `99.3K 🔥`
1. [网友买安眠药后收到注销驾驶证短信 (Netizen receives driver’s license cancellation text message after buying sleeping pills)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E4%B9%B0%E5%AE%89%E7%9C%A0%E8%8D%AF%E5%90%8E%E6%94%B6%E5%88%B0%E6%B3%A8%E9%94%80%E9%A9%BE%E9%A9%B6%E8%AF%81%E7%9F%AD%E4%BF%A1%23) `466.0K 🔥` `-42%`
1. [跳楼机原唱实在是忍不下去了 (The original singer of "Jumping Machine" is really unbearable.)](https://s.weibo.com/weibo?q=%23%E8%B7%B3%E6%A5%BC%E6%9C%BA%E5%8E%9F%E5%94%B1%E5%AE%9E%E5%9C%A8%E6%98%AF%E5%BF%8D%E4%B8%8D%E4%B8%8B%E5%8E%BB%E4%BA%86%23) `254.4K 🔥` `-77%`
1. [西班牙对袭击伊朗军机关闭领空 (Spain closes airspace over attack on Iranian military aircraft)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%AF%B9%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E5%86%9B%E6%9C%BA%E5%85%B3%E9%97%AD%E9%A2%86%E7%A9%BA%23) `186.4K 🔥` `-34%`
1. [周深没搞定版权清唱一句戛然而止 (Zhou Shen failed to get the copyright and the a cappella song stopped abruptly)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%B2%A1%E6%90%9E%E5%AE%9A%E7%89%88%E6%9D%83%E6%B8%85%E5%94%B1%E4%B8%80%E5%8F%A5%E6%88%9B%E7%84%B6%E8%80%8C%E6%AD%A2%23) `180.8K 🔥` `-34%`
1. [孟子义 从全世界的战斗中路过 (Mencius passing through battles all over the world)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%20%E4%BB%8E%E5%85%A8%E4%B8%96%E7%95%8C%E7%9A%84%E6%88%98%E6%96%97%E4%B8%AD%E8%B7%AF%E8%BF%87%23) `126.5K 🔥` `-24%`
1. [单依纯演唱会退票 (Shan Yichun concert refund)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%80%E7%A5%A8%23) `96.7K 🔥` `-44%`
1. [美以伊地面战一触即发](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E4%BC%8A%E5%9C%B0%E9%9D%A2%E6%88%98%E4%B8%80%E8%A7%A6%E5%8D%B3%E5%8F%91%23) `94.1K 🔥` `-65%`
1. [太原暴走团凌晨四点播放音乐扰民 (Taiyuan riot group played music at 4 a.m. to disturb the residents)](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E6%9A%B4%E8%B5%B0%E5%9B%A2%E5%87%8C%E6%99%A8%E5%9B%9B%E7%82%B9%E6%92%AD%E6%94%BE%E9%9F%B3%E4%B9%90%E6%89%B0%E6%B0%91%23) `84.3K 🔥` `-34%`
1. [茅台发布重大事项公告 (Moutai releases announcement on major events)](https://s.weibo.com/weibo?q=%23%E8%8C%85%E5%8F%B0%E5%8F%91%E5%B8%83%E9%87%8D%E5%A4%A7%E4%BA%8B%E9%A1%B9%E5%85%AC%E5%91%8A%23) `79.9K 🔥` `-79%`
1. [澳大利亚惊现末日红](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E6%83%8A%E7%8E%B0%E6%9C%AB%E6%97%A5%E7%BA%A2%23) `78.5K 🔥` `-54%`
1. [女子花上万办卡被按摩到癌细胞扩散 (Woman spent tens of thousands to get massage card until cancer cells spread)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%8A%B1%E4%B8%8A%E4%B8%87%E5%8A%9E%E5%8D%A1%E8%A2%AB%E6%8C%89%E6%91%A9%E5%88%B0%E7%99%8C%E7%BB%86%E8%83%9E%E6%89%A9%E6%95%A3%23) `74.5K 🔥` `-24%`
1. [东鹏特饮押宝张雪机车赢麻了 (Dongpeng Special Drink bets on Zhang Xue’s motorcycle and wins)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%B9%8F%E7%89%B9%E9%A5%AE%E6%8A%BC%E5%AE%9D%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%B5%A2%E9%BA%BB%E4%BA%86%23) `68.4K 🔥` `-37%`

Updated at 2026-03-31 09:18:15

<!-- END -->

## Data Reference

### Directory Structure

```
├── raw/                    # Raw JSON data
│   └── YYYY-MM-DD.json     # Daily hot search data
├── index.html              # GitHub Pages frontend
├── mod.ts                  # Scraping script (Deno)
├── bridge.py               # Data bridge to WeiboInsight/MongoDB
└── WeiboInsight/           # Submodule: Playwright-based deep analysis
```

### Data Format

Daily JSON format (`raw/YYYY-MM-DD.json`):

```json
[
  {
    "url": "/weibo?q=%23Topic%23",
    "text": "Topic",
    "textEn": "Topic in English",
    "count": 1234567,
    "firstSeen": "2026-02-07T08:15:00.000Z",
    "peakCount": 1500000,
    "prevCount": 900000,
    "status": "rising",
    "velocity": 37,
    "engagement": { "posts": 15, "likes": 45200, "comments": 3100, "reposts": 8900 }
  }
]
```

| Field | Description |
|-------|-------------|
| `url` | Weibo search link path |
| `text` | Trending topic text (Chinese) |
| `textEn` | English translation (optional) |
| `count` | Heat value from Weibo API |
| `firstSeen` | ISO timestamp when topic first appeared today |
| `peakCount` | Highest count recorded for this topic today |
| `prevCount` | Count from previous scrape cycle |
| `status` | Lifecycle stage: `new`, `rising`, `hot`, `falling`, `gone` |
| `velocity` | Percentage change from previous scrape |
| `engagement` | Post engagement metrics (top 10 topics): posts, likes, comments, reposts |

## Tech Stack

- **Runtime**: [Deno](https://deno.land/)
- **Automation**: GitHub Actions (cron)
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Hosting**: GitHub Pages

## Local Development

```bash
# Install Deno
curl -fsSL https://deno.land/install.sh | sh

# Run the scraper
deno run --allow-net --allow-read --allow-write --import-map=import_map.json mod.ts
```

## WeiboInsight Integration

This project includes [WeiboInsight](https://github.com/arandomguyhere/WeiboInsight) as a submodule for deep NLP analysis of trending topics.

**What each project does:**
- **weibo-daily-hot-search** — Lightweight Deno scraper that tracks trending topics every 5 min via JSON APIs, with lifecycle/velocity analysis
- **WeiboInsight** — Python/Playwright-based scraper with Scrapy pipelines, MongoDB storage, Jieba segmentation, LDA topic modeling, and K-Means clustering

**How they connect:**
1. This scraper collects trending topics + engagement data every 5 minutes
2. `bridge.py` imports the JSON data into MongoDB with text segmentation
3. WeiboInsight's `analyze_weibo_data.py` runs NLP analysis on the imported data

```bash
# Setup
git submodule update --init
cd WeiboInsight && pip install -r requirements.txt && cd ..
pip install pymongo jieba

# Import data into MongoDB
python bridge.py --all

# Run NLP analysis
cd WeiboInsight/scrapy_project
python analyze_weibo_data.py
```

## Related Projects

- [WeiboInsight](https://github.com/arandomguyhere/WeiboInsight) — Playwright-based Weibo CTI analysis
- [V2EX Daily Hot Topics](https://github.com/boojack/v2ex-daily-hot-topic)
- [jackylee1/weibo-daily-hot-search](https://github.com/jackylee1/weibo-daily-hot-search) — Original project

## License

MIT
