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

1. [反诈博主徽剑被曝遇害](https://s.weibo.com/weibo?q=%23%E5%8F%8D%E8%AF%88%E5%8D%9A%E4%B8%BB%E5%BE%BD%E5%89%91%E8%A2%AB%E6%9B%9D%E9%81%87%E5%AE%B3%23) `3.4M 🔥` `NEW`
1. [东鹏饮料终止与姆巴佩合作](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%B9%8F%E9%A5%AE%E6%96%99%E7%BB%88%E6%AD%A2%E4%B8%8E%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%90%88%E4%BD%9C%23) `1.3M 🔥` `NEW`
1. [老字号新顶流](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%AD%97%E5%8F%B7%E6%96%B0%E9%A1%B6%E6%B5%81%23) `853.5K 🔥` `NEW`
1. [天猫双11和王安宇打开淘宝出发](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB%E5%8F%8C11%E5%92%8C%E7%8E%8B%E5%AE%89%E5%AE%87%E6%89%93%E5%BC%80%E6%B7%98%E5%AE%9D%E5%87%BA%E5%8F%91%23) `803.2K 🔥` `NEW`
1. [金球奖排名](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%90%83%E5%A5%96%E6%8E%92%E5%90%8D%23) `744.2K 🔥` `NEW`
1. [LPL三个队都输不过AL](https://s.weibo.com/weibo?q=%23LPL%E4%B8%89%E4%B8%AA%E9%98%9F%E9%83%BD%E8%BE%93%E4%B8%8D%E8%BF%87AL%23) `657.7K 🔥` `NEW`
1. [苏州一超市学习胖东来营业额过亿](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E5%B7%9E%E4%B8%80%E8%B6%85%E5%B8%82%E5%AD%A6%E4%B9%A0%E8%83%96%E4%B8%9C%E6%9D%A5%E8%90%A5%E4%B8%9A%E9%A2%9D%E8%BF%87%E4%BA%BF%23) `410.9K 🔥` `NEW`
1. [演技好到突然懂了不搭噶的两个人](https://s.weibo.com/weibo?q=%23%E6%BC%94%E6%8A%80%E5%A5%BD%E5%88%B0%E7%AA%81%E7%84%B6%E6%87%82%E4%BA%86%E4%B8%8D%E6%90%AD%E5%99%B6%E7%9A%84%E4%B8%A4%E4%B8%AA%E4%BA%BA%23) `405.1K 🔥` `NEW`
1. [交警提醒没戴头盔女子前面罚款嘞](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E8%AD%A6%E6%8F%90%E9%86%92%E6%B2%A1%E6%88%B4%E5%A4%B4%E7%9B%94%E5%A5%B3%E5%AD%90%E5%89%8D%E9%9D%A2%E7%BD%9A%E6%AC%BE%E5%98%9E%23) `384.8K 🔥` `NEW`
1. [中资网贷在印度亏七十亿退场](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E8%B5%84%E7%BD%91%E8%B4%B7%E5%9C%A8%E5%8D%B0%E5%BA%A6%E4%BA%8F%E4%B8%83%E5%8D%81%E4%BA%BF%E9%80%80%E5%9C%BA%23) `377.2K 🔥` `NEW`
1. [Hope AL](https://s.weibo.com/weibo?q=%23Hope%20AL%23) `362.8K 🔥` `NEW`
1. [iOS27.2](https://s.weibo.com/weibo?q=%23iOS27.2%23) `349.3K 🔥` `NEW`
1. [徽剑曾举报电诈大佬刘忍](https://s.weibo.com/weibo?q=%23%E5%BE%BD%E5%89%91%E6%9B%BE%E4%B8%BE%E6%8A%A5%E7%94%B5%E8%AF%88%E5%A4%A7%E4%BD%AC%E5%88%98%E5%BF%8D%23) `346.5K 🔥` `NEW`
1. [AL官方赛后致歉](https://s.weibo.com/weibo?q=%23AL%E5%AE%98%E6%96%B9%E8%B5%9B%E5%90%8E%E8%87%B4%E6%AD%89%23) `343.8K 🔥` `NEW`
1. [iOS27.2更新汇总](https://s.weibo.com/weibo?q=%23iOS27.2%E6%9B%B4%E6%96%B0%E6%B1%87%E6%80%BB%23) `321.2K 🔥` `NEW`
1. [管泽元回应AL十六强](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%E5%9B%9E%E5%BA%94AL%E5%8D%81%E5%85%AD%E5%BC%BA%23) `321.0K 🔥` `NEW`
1. [背洗衣机翻雪山的人](https://s.weibo.com/weibo?q=%23%E8%83%8C%E6%B4%97%E8%A1%A3%E6%9C%BA%E7%BF%BB%E9%9B%AA%E5%B1%B1%E7%9A%84%E4%BA%BA%23) `321.0K 🔥` `NEW`
1. [张子萱一见面就扑进陈赫怀里](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E8%90%B1%E4%B8%80%E8%A7%81%E9%9D%A2%E5%B0%B1%E6%89%91%E8%BF%9B%E9%99%88%E8%B5%AB%E6%80%80%E9%87%8C%23) `320.6K 🔥` `NEW`
1. [刚入职叫女领导一个月熊大](https://s.weibo.com/weibo?q=%23%E5%88%9A%E5%85%A5%E8%81%8C%E5%8F%AB%E5%A5%B3%E9%A2%86%E5%AF%BC%E4%B8%80%E4%B8%AA%E6%9C%88%E7%86%8A%E5%A4%A7%23) `320.5K 🔥` `NEW`
1. [孟子义李昀锐分手感](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E5%88%86%E6%89%8B%E6%84%9F%23) `320.2K 🔥` `NEW`
1. [AL史上最差成绩LPL队伍](https://s.weibo.com/weibo?q=%23AL%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%B7%AE%E6%88%90%E7%BB%A9LPL%E9%98%9F%E4%BC%8D%23) `320.0K 🔥` `NEW`
1. [苏醒曾借给王栎鑫100万](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E6%9B%BE%E5%80%9F%E7%BB%99%E7%8E%8B%E6%A0%8E%E9%91%AB100%E4%B8%87%23) `319.9K 🔥` `NEW`
1. [富士康员工曝iPhoneDuo碎屏原因](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E5%A3%AB%E5%BA%B7%E5%91%98%E5%B7%A5%E6%9B%9DiPhoneDuo%E7%A2%8E%E5%B1%8F%E5%8E%9F%E5%9B%A0%23) `319.7K 🔥` `NEW`
1. [每个软件都搞AI太烦了](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E4%B8%AA%E8%BD%AF%E4%BB%B6%E9%83%BD%E6%90%9EAI%E5%A4%AA%E7%83%A6%E4%BA%86%23) `319.6K 🔥` `NEW`
1. [陈赫回应评论男主播可爱](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%9B%9E%E5%BA%94%E8%AF%84%E8%AE%BA%E7%94%B7%E4%B8%BB%E6%92%AD%E5%8F%AF%E7%88%B1%23) `319.4K 🔥` `NEW`
1. [被穷养长大的人有多能忍](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%A9%B7%E5%85%BB%E9%95%BF%E5%A4%A7%E7%9A%84%E4%BA%BA%E6%9C%89%E5%A4%9A%E8%83%BD%E5%BF%8D%23) `319.2K 🔥` `NEW`
1. [凯恩发表获奖感言时亚马尔表情](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E5%8F%91%E8%A1%A8%E8%8E%B7%E5%A5%96%E6%84%9F%E8%A8%80%E6%97%B6%E4%BA%9A%E9%A9%AC%E5%B0%94%E8%A1%A8%E6%83%85%23) `319.0K 🔥` `NEW`
1. [iOS27.2禁止摇一摇跳转](https://s.weibo.com/weibo?q=%23iOS27.2%E7%A6%81%E6%AD%A2%E6%91%87%E4%B8%80%E6%91%87%E8%B7%B3%E8%BD%AC%23) `319.0K 🔥` `NEW`
1. [蒙淇淇称尚公主做剧方向偏了](https://s.weibo.com/weibo?q=%23%E8%92%99%E6%B7%87%E6%B7%87%E7%A7%B0%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%81%9A%E5%89%A7%E6%96%B9%E5%90%91%E5%81%8F%E4%BA%86%23) `307.7K 🔥` `NEW`
1. [iG抽签对阵LYON](https://s.weibo.com/weibo?q=%23iG%E6%8A%BD%E7%AD%BE%E5%AF%B9%E9%98%B5LYON%23) `303.4K 🔥` `NEW`
1. [水晶哥谈AL一号种子十六强](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E6%99%B6%E5%93%A5%E8%B0%88AL%E4%B8%80%E5%8F%B7%E7%A7%8D%E5%AD%90%E5%8D%81%E5%85%AD%E5%BC%BA%23) `278.8K 🔥` `NEW`
1. [多家A股半导体龙头发声](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6A%E8%82%A1%E5%8D%8A%E5%AF%BC%E4%BD%93%E9%BE%99%E5%A4%B4%E5%8F%91%E5%A3%B0%23) `265.6K 🔥` `NEW`
1. [LPL连续两年一号种子止步16强](https://s.weibo.com/weibo?q=%23LPL%E8%BF%9E%E7%BB%AD%E4%B8%A4%E5%B9%B4%E4%B8%80%E5%8F%B7%E7%A7%8D%E5%AD%90%E6%AD%A2%E6%AD%A516%E5%BC%BA%23) `265.0K 🔥` `NEW`
1. [Hope下路对线落后](https://s.weibo.com/weibo?q=%23Hope%E4%B8%8B%E8%B7%AF%E5%AF%B9%E7%BA%BF%E8%90%BD%E5%90%8E%23) `258.4K 🔥` `NEW`
1. [亚马尔失单刀](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%A4%B1%E5%8D%95%E5%88%80%23) `257.3K 🔥` `NEW`
1. [英雄联盟回应AL16强出局](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%E5%9B%9E%E5%BA%94AL16%E5%BC%BA%E5%87%BA%E5%B1%80%23) `257.2K 🔥` `NEW`
1. [郑钦文配樊振东小作文笑点加倍](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%85%8D%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%B0%8F%E4%BD%9C%E6%96%87%E7%AC%91%E7%82%B9%E5%8A%A0%E5%80%8D%23) `254.6K 🔥` `NEW`
1. [李健在朋友婚礼上的发言](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%E5%9C%A8%E6%9C%8B%E5%8F%8B%E5%A9%9A%E7%A4%BC%E4%B8%8A%E7%9A%84%E5%8F%91%E8%A8%80%23) `247.2K 🔥` `NEW`
1. [拜仁简介改为金球奖得主的俱乐部](https://s.weibo.com/weibo?q=%23%E6%8B%9C%E4%BB%81%E7%AE%80%E4%BB%8B%E6%94%B9%E4%B8%BA%E9%87%91%E7%90%83%E5%A5%96%E5%BE%97%E4%B8%BB%E7%9A%84%E4%BF%B1%E4%B9%90%E9%83%A8%23) `234.4K 🔥` `NEW`
1. [租客留277元离开房东退回1177元](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E5%AE%A2%E7%95%99277%E5%85%83%E7%A6%BB%E5%BC%80%E6%88%BF%E4%B8%9C%E9%80%80%E5%9B%9E1177%E5%85%83%23) `228.4K 🔥` `NEW`
1. [张雪机车研发岗涨薪幅度](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%A0%94%E5%8F%91%E5%B2%97%E6%B6%A8%E8%96%AA%E5%B9%85%E5%BA%A6%23) `195.6K 🔥` `NEW`
1. [声生不息第一期歌单](https://s.weibo.com/weibo?q=%23%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%E7%AC%AC%E4%B8%80%E6%9C%9F%E6%AD%8C%E5%8D%95%23) `194.0K 🔥` `NEW`
1. [爱笑 AL](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%AC%91%20AL%23) `192.9K 🔥` `NEW`
1. [城管摇了摊主好了顾客笑了](https://s.weibo.com/weibo?q=%23%E5%9F%8E%E7%AE%A1%E6%91%87%E4%BA%86%E6%91%8A%E4%B8%BB%E5%A5%BD%E4%BA%86%E9%A1%BE%E5%AE%A2%E7%AC%91%E4%BA%86%23) `394.8K 🔥` `+59%`
1. [不刷牙吃早餐vs不刷牙睡觉](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%88%B7%E7%89%99%E5%90%83%E6%97%A9%E9%A4%90vs%E4%B8%8D%E5%88%B7%E7%89%99%E7%9D%A1%E8%A7%89%23) `288.5K 🔥` `+68%`
1. [樊振东用荒诞形容首次诺坎普之旅](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%94%A8%E8%8D%92%E8%AF%9E%E5%BD%A2%E5%AE%B9%E9%A6%96%E6%AC%A1%E8%AF%BA%E5%9D%8E%E6%99%AE%E4%B9%8B%E6%97%85%23) `202.6K 🔥`
1. [老公把我要走了换成出去玩儿啦](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%85%AC%E6%8A%8A%E6%88%91%E8%A6%81%E8%B5%B0%E4%BA%86%E6%8D%A2%E6%88%90%E5%87%BA%E5%8E%BB%E7%8E%A9%E5%84%BF%E5%95%A6%23) `196.9K 🔥`
1. [凯恩获2026年金球奖](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E8%8E%B72026%E5%B9%B4%E9%87%91%E7%90%83%E5%A5%96%23) `447.2K 🔥` `-77%`
1. [金球奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%90%83%E5%A5%96%23) `320.9K 🔥` `-68%`
1. [AL淘汰](https://s.weibo.com/weibo?q=%23AL%E6%B7%98%E6%B1%B0%23) `286.5K 🔥` `-74%`

Updated at 2026-10-27 10:26:54

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
