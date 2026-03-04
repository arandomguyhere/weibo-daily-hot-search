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

1. [迪丽热巴报平安 (Dilireba says she is safe)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8A%A5%E5%B9%B3%E5%AE%89%23) `9.4M 🔥` `NEW`
1. [十四届全国人大四次会议记者会时间](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%A4%A7%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E8%AE%B0%E8%80%85%E4%BC%9A%E6%97%B6%E9%97%B4%23) `663.0K 🔥` `NEW`
1. [这些中国奇迹太震撼了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E4%B8%AD%E5%9B%BD%E5%A5%87%E8%BF%B9%E5%A4%AA%E9%9C%87%E6%92%BC%E4%BA%86%23) `246.7K 🔥` `NEW`
1. [关键词速览人大会议首场发布会](https://s.weibo.com/weibo?q=%23%E5%85%B3%E9%94%AE%E8%AF%8D%E9%80%9F%E8%A7%88%E4%BA%BA%E5%A4%A7%E4%BC%9A%E8%AE%AE%E9%A6%96%E5%9C%BA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `242.7K 🔥` `NEW`
1. [中国量子计算稳居国际第一方阵](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%87%8F%E5%AD%90%E8%AE%A1%E7%AE%97%E7%A8%B3%E5%B1%85%E5%9B%BD%E9%99%85%E7%AC%AC%E4%B8%80%E6%96%B9%E9%98%B5%23) `208.9K 🔥` `NEW`
1. [弟弟你的相貌很容易让人轻敌啊](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E4%BD%A0%E7%9A%84%E7%9B%B8%E8%B2%8C%E5%BE%88%E5%AE%B9%E6%98%93%E8%AE%A9%E4%BA%BA%E8%BD%BB%E6%95%8C%E5%95%8A%23) `195.7K 🔥` `NEW`
1. [社保迎来第六险](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%E8%BF%8E%E6%9D%A5%E7%AC%AC%E5%85%AD%E9%99%A9%23) `190.1K 🔥` `NEW`
1. [妈妈离世女儿懵懂追问为何手凉](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%A6%BB%E4%B8%96%E5%A5%B3%E5%84%BF%E6%87%B5%E6%87%82%E8%BF%BD%E9%97%AE%E4%B8%BA%E4%BD%95%E6%89%8B%E5%87%89%23) `183.2K 🔥` `NEW`
1. [建议鼓励大学生加入家政行业](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E9%BC%93%E5%8A%B1%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%8A%A0%E5%85%A5%E5%AE%B6%E6%94%BF%E8%A1%8C%E4%B8%9A%23) `174.0K 🔥` `NEW`
1. [预防HPV比你想的更简单](https://s.weibo.com/weibo?q=%23%E9%A2%84%E9%98%B2HPV%E6%AF%94%E4%BD%A0%E6%83%B3%E7%9A%84%E6%9B%B4%E7%AE%80%E5%8D%95%23) `152.9K 🔥` `NEW`
1. [伊朗展开高强度连环反击 (Iran launches high-intensity series of counterattacks)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B1%95%E5%BC%80%E9%AB%98%E5%BC%BA%E5%BA%A6%E8%BF%9E%E7%8E%AF%E5%8F%8D%E5%87%BB%23) `149.0K 🔥` `NEW`
1. [昊铂A800创史上最高最长雪地跳台极限爬坡纪录](https://s.weibo.com/weibo?q=%23%E6%98%8A%E9%93%82A800%E5%88%9B%E5%8F%B2%E4%B8%8A%E6%9C%80%E9%AB%98%E6%9C%80%E9%95%BF%E9%9B%AA%E5%9C%B0%E8%B7%B3%E5%8F%B0%E6%9E%81%E9%99%90%E7%88%AC%E5%9D%A1%E7%BA%AA%E5%BD%95%23) `139.9K 🔥` `NEW`
1. [谈到美国电网中国白发院士笑了](https://s.weibo.com/weibo?q=%23%E8%B0%88%E5%88%B0%E7%BE%8E%E5%9B%BD%E7%94%B5%E7%BD%91%E4%B8%AD%E5%9B%BD%E7%99%BD%E5%8F%91%E9%99%A2%E5%A3%AB%E7%AC%91%E4%BA%86%23) `136.2K 🔥` `NEW`
1. [凭微信转账记录起诉同学还钱被驳回](https://s.weibo.com/weibo?q=%23%E5%87%AD%E5%BE%AE%E4%BF%A1%E8%BD%AC%E8%B4%A6%E8%AE%B0%E5%BD%95%E8%B5%B7%E8%AF%89%E5%90%8C%E5%AD%A6%E8%BF%98%E9%92%B1%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `111.3K 🔥` `NEW`
1. [伊拉克被美以当成打伊朗的免费跳板](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%8B%89%E5%85%8B%E8%A2%AB%E7%BE%8E%E4%BB%A5%E5%BD%93%E6%88%90%E6%89%93%E4%BC%8A%E6%9C%97%E7%9A%84%E5%85%8D%E8%B4%B9%E8%B7%B3%E6%9D%BF%23) `103.6K 🔥` `NEW`
1. [伊朗已发动17轮针对美以的打击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B7%B2%E5%8F%91%E5%8A%A817%E8%BD%AE%E9%92%88%E5%AF%B9%E7%BE%8E%E4%BB%A5%E7%9A%84%E6%89%93%E5%87%BB%23) `103.6K 🔥` `NEW`
1. [中国驻日大使馆再发提醒](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A9%BB%E6%97%A5%E5%A4%A7%E4%BD%BF%E9%A6%86%E5%86%8D%E5%8F%91%E6%8F%90%E9%86%92%23) `103.6K 🔥` `NEW`
1. [十日终焉没女主](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E6%B2%A1%E5%A5%B3%E4%B8%BB%23) `103.6K 🔥` `NEW`
1. [纯真年代的爱情大结局](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%E5%A4%A7%E7%BB%93%E5%B1%80%23) `871.3K 🔥` `+150%`
1. [委员建议00后不要进入加班文化](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E5%BB%BA%E8%AE%AE00%E5%90%8E%E4%B8%8D%E8%A6%81%E8%BF%9B%E5%85%A5%E5%8A%A0%E7%8F%AD%E6%96%87%E5%8C%96%23) `261.5K 🔥` `+26%`
1. [建议废除劳务派遣制度 (It is recommended to abolish the labor dispatch system)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%BA%9F%E9%99%A4%E5%8A%B3%E5%8A%A1%E6%B4%BE%E9%81%A3%E5%88%B6%E5%BA%A6%23) `1.2M 🔥`
1. [IF椰子水严正声明 (IF coconut water solemn statement)](https://s.weibo.com/weibo?q=%23IF%E6%A4%B0%E5%AD%90%E6%B0%B4%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `327.5K 🔥`
1. [伊朗军舰遭袭101人失踪78人伤 (Iranian warship attacked, 101 people missing, 78 injured)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%86%9B%E8%88%B0%E9%81%AD%E8%A2%AD101%E4%BA%BA%E5%A4%B1%E8%B8%AA78%E4%BA%BA%E4%BC%A4%23) `294.9K 🔥`
1. [钟楚曦超绝水光肌](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%A5%9A%E6%9B%A6%E8%B6%85%E7%BB%9D%E6%B0%B4%E5%85%89%E8%82%8C%23) `291.3K 🔥`
1. [热水器不能一开一关 (The water heater cannot be turned on and off at the same time)](https://s.weibo.com/weibo?q=%23%E7%83%AD%E6%B0%B4%E5%99%A8%E4%B8%8D%E8%83%BD%E4%B8%80%E5%BC%80%E4%B8%80%E5%85%B3%23) `241.1K 🔥`
1. [中东局势彻底失控 (The situation in the Middle East is completely out of control)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%B1%80%E5%8A%BF%E5%BD%BB%E5%BA%95%E5%A4%B1%E6%8E%A7%23) `239.3K 🔥`
1. [63岁失独妈妈剖腹产生下健康女婴](https://s.weibo.com/weibo?q=%2363%E5%B2%81%E5%A4%B1%E7%8B%AC%E5%A6%88%E5%A6%88%E5%89%96%E8%85%B9%E4%BA%A7%E7%94%9F%E4%B8%8B%E5%81%A5%E5%BA%B7%E5%A5%B3%E5%A9%B4%23) `218.3K 🔥`
1. [伊朗确定最高领袖候选人](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A1%AE%E5%AE%9A%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%80%99%E9%80%89%E4%BA%BA%23) `152.0K 🔥`
1. [1克拉钻石价格已经1000多了](https://s.weibo.com/weibo?q=%231%E5%85%8B%E6%8B%89%E9%92%BB%E7%9F%B3%E4%BB%B7%E6%A0%BC%E5%B7%B2%E7%BB%8F1000%E5%A4%9A%E4%BA%86%23) `142.4K 🔥`
1. [剑来](https://s.weibo.com/weibo?q=%23%E5%89%91%E6%9D%A5%23) `141.5K 🔥`
1. [伊朗局势最新情况](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B1%80%E5%8A%BF%E6%9C%80%E6%96%B0%E6%83%85%E5%86%B5%23) `138.9K 🔥`
1. [00后去芒果都是大前辈了](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%8E%BB%E8%8A%92%E6%9E%9C%E9%83%BD%E6%98%AF%E5%A4%A7%E5%89%8D%E8%BE%88%E4%BA%86%23) `136.4K 🔥`
1. [伊朗的导弹能用多久](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9A%84%E5%AF%BC%E5%BC%B9%E8%83%BD%E7%94%A8%E5%A4%9A%E4%B9%85%23) `135.4K 🔥`
1. [TTG对战AG (TTG vs. AG)](https://s.weibo.com/weibo?q=%23TTG%E5%AF%B9%E6%88%98AG%23) `128.9K 🔥`
1. [每天早上床头少了一只小猫](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E6%97%A9%E4%B8%8A%E5%BA%8A%E5%A4%B4%E5%B0%91%E4%BA%86%E4%B8%80%E5%8F%AA%E5%B0%8F%E7%8C%AB%23) `103.6K 🔥`
1. [建议推广农村不超过2万彩礼 (It is recommended to promote rural areas to provide gifts of no more than 20,000 yuan)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%8E%A8%E5%B9%BF%E5%86%9C%E6%9D%91%E4%B8%8D%E8%B6%85%E8%BF%872%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `103.6K 🔥`
1. [王楚然大方介绍自己来自中国 (Wang Churan generously introduced that he is from China)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%A4%A7%E6%96%B9%E4%BB%8B%E7%BB%8D%E8%87%AA%E5%B7%B1%E6%9D%A5%E8%87%AA%E4%B8%AD%E5%9B%BD%23) `103.5K 🔥`
1. [宋平同志逝世 (Comrade Song Ping passed away)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%B9%B3%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96%23) `315.9K 🔥` `-64%`
1. [女员工手一抖摔破3000多元飞天茅台](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%91%98%E5%B7%A5%E6%89%8B%E4%B8%80%E6%8A%96%E6%91%94%E7%A0%B43000%E5%A4%9A%E5%85%83%E9%A3%9E%E5%A4%A9%E8%8C%85%E5%8F%B0%23) `229.3K 🔥` `-58%`
1. [委员建议每天下班后投入地玩半小时](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E5%BB%BA%E8%AE%AE%E6%AF%8F%E5%A4%A9%E4%B8%8B%E7%8F%AD%E5%90%8E%E6%8A%95%E5%85%A5%E5%9C%B0%E7%8E%A9%E5%8D%8A%E5%B0%8F%E6%97%B6%23) `155.7K 🔥` `-38%`
1. [纯真年代的爱情 (Love in the Age of Innocence)](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `151.1K 🔥` `-22%`
1. [建议对性侵未成年出狱者电子定位](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%AF%B9%E6%80%A7%E4%BE%B5%E6%9C%AA%E6%88%90%E5%B9%B4%E5%87%BA%E7%8B%B1%E8%80%85%E7%94%B5%E5%AD%90%E5%AE%9A%E4%BD%8D%23) `143.1K 🔥` `-34%`
1. [王励勤回应樊振东归队问题 (Wang Liqin responded to Fan Zhendong’s return to the team)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%B1%E5%8B%A4%E5%9B%9E%E5%BA%94%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BD%92%E9%98%9F%E9%97%AE%E9%A2%98%23) `121.4K 🔥` `-30%`
1. [网传杨超越十日终焉女主](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%9D%A8%E8%B6%85%E8%B6%8A%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%A5%B3%E4%B8%BB%23) `119.0K 🔥` `-48%`
1. [对方撤回了5条QQ消息](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%96%B9%E6%92%A4%E5%9B%9E%E4%BA%865%E6%9D%A1QQ%E6%B6%88%E6%81%AF%23) `114.8K 🔥` `-49%`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `110.8K 🔥` `-35%`
1. [太爷爷摔倒1岁宝宝连滚带爬去扶](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E7%88%B7%E7%88%B7%E6%91%94%E5%80%921%E5%B2%81%E5%AE%9D%E5%AE%9D%E8%BF%9E%E6%BB%9A%E5%B8%A6%E7%88%AC%E5%8E%BB%E6%89%B6%23) `103.6K 🔥` `-23%`
1. [穆祉丞直播 (Mu Zhicheng live broadcast)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%9B%B4%E6%92%AD%23) `103.6K 🔥` `-41%`
1. [牛奶再放个把月就能喝了](https://s.weibo.com/weibo?q=%23%E7%89%9B%E5%A5%B6%E5%86%8D%E6%94%BE%E4%B8%AA%E6%8A%8A%E6%9C%88%E5%B0%B1%E8%83%BD%E5%96%9D%E4%BA%86%23) `103.6K 🔥` `-25%`
1. [十四届全国人大四次会议议程 (Agenda for the Fourth Session of the 14th National People's Congress)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%A4%A7%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E8%AE%AE%E7%A8%8B%23) `103.5K 🔥` `-85%`
1. [促进民营经济发展不能变不会变](https://s.weibo.com/weibo?q=%23%E4%BF%83%E8%BF%9B%E6%B0%91%E8%90%A5%E7%BB%8F%E6%B5%8E%E5%8F%91%E5%B1%95%E4%B8%8D%E8%83%BD%E5%8F%98%E4%B8%8D%E4%BC%9A%E5%8F%98%23) `103.5K 🔥` `-63%`

Updated at 2026-03-04 21:36:50

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
