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

1. [只有小时候发烧才有这种感觉 (I only felt like this when I had a fever when I was a child)](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E5%B0%8F%E6%97%B6%E5%80%99%E5%8F%91%E7%83%A7%E6%89%8D%E6%9C%89%E8%BF%99%E7%A7%8D%E6%84%9F%E8%A7%89%23) `725.4K 🔥` `NEW`
1. [陈伟霆说我还以为去了成毅的演唱会](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E8%AF%B4%E6%88%91%E8%BF%98%E4%BB%A5%E4%B8%BA%E5%8E%BB%E4%BA%86%E6%88%90%E6%AF%85%E7%9A%84%E6%BC%94%E5%94%B1%E4%BC%9A%23) `725.1K 🔥` `NEW`
1. [汪汪队大电影3孩子开心家长放心](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B1%AA%E9%98%9F%E5%A4%A7%E7%94%B5%E5%BD%B13%E5%AD%A9%E5%AD%90%E5%BC%80%E5%BF%83%E5%AE%B6%E9%95%BF%E6%94%BE%E5%BF%83%23) `593.7K 🔥` `NEW`
1. [微博文化之夜之这是谁](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%B9%8B%E5%A4%9C%E4%B9%8B%E8%BF%99%E6%98%AF%E8%B0%81%23) `426.4K 🔥` `NEW`
1. [爷爷不泡茶 店员打人](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%8D%E6%B3%A1%E8%8C%B6%20%E5%BA%97%E5%91%98%E6%89%93%E4%BA%BA%23) `425.8K 🔥` `NEW`
1. [张凌赫参加阿维塔07L上市发布会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%82%E5%8A%A0%E9%98%BF%E7%BB%B4%E5%A1%9407L%E4%B8%8A%E5%B8%82%E5%8F%91%E5%B8%83%E4%BC%9A%23) `406.1K 🔥` `NEW`
1. [敖瑞鹏王玉雯正太扭腰来了](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%AD%A3%E5%A4%AA%E6%89%AD%E8%85%B0%E6%9D%A5%E4%BA%86%23) `394.4K 🔥` `NEW`
1. [王玉雯COS和平精英樱桃泡泡](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AFCOS%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%E6%A8%B1%E6%A1%83%E6%B3%A1%E6%B3%A1%23) `383.2K 🔥` `NEW`
1. [罗云熙演唱会好贵](https://s.weibo.com/weibo?q=%23%E7%BD%97%E4%BA%91%E7%86%99%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A5%BD%E8%B4%B5%23) `374.4K 🔥` `NEW`
1. [律师称费大厨宣传语主体归属模糊](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E7%A7%B0%E8%B4%B9%E5%A4%A7%E5%8E%A8%E5%AE%A3%E4%BC%A0%E8%AF%AD%E4%B8%BB%E4%BD%93%E5%BD%92%E5%B1%9E%E6%A8%A1%E7%B3%8A%23) `372.0K 🔥` `NEW`
1. [新西兰涉华声明没达成 (New Zealand’s China-related statement not reached)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%A5%BF%E5%85%B0%E6%B6%89%E5%8D%8E%E5%A3%B0%E6%98%8E%E6%B2%A1%E8%BE%BE%E6%88%90%23) `367.2K 🔥` `NEW`
1. [江中边骂边救人博主又救一人](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E4%B8%AD%E8%BE%B9%E9%AA%82%E8%BE%B9%E6%95%91%E4%BA%BA%E5%8D%9A%E4%B8%BB%E5%8F%88%E6%95%91%E4%B8%80%E4%BA%BA%23) `362.1K 🔥` `NEW`
1. [奥利淑元生图](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E6%B7%91%E5%85%83%E7%94%9F%E5%9B%BE%23) `329.4K 🔥` `NEW`
1. [宋茜COS黯羽织刑唱跳舞台](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%8C%9CCOS%E9%BB%AF%E7%BE%BD%E7%BB%87%E5%88%91%E5%94%B1%E8%B7%B3%E8%88%9E%E5%8F%B0%23) `327.3K 🔥` `NEW`
1. [任嘉伦红毯气场全开](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%E7%BA%A2%E6%AF%AF%E6%B0%94%E5%9C%BA%E5%85%A8%E5%BC%80%23) `326.6K 🔥` `NEW`
1. [王源 巡演看一场少一场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%20%E5%B7%A1%E6%BC%94%E7%9C%8B%E4%B8%80%E5%9C%BA%E5%B0%91%E4%B8%80%E5%9C%BA%23) `326.2K 🔥` `NEW`
1. [严浩翔说听完Yamy的歌想回家了](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%AF%B4%E5%90%AC%E5%AE%8CYamy%E7%9A%84%E6%AD%8C%E6%83%B3%E5%9B%9E%E5%AE%B6%E4%BA%86%23) `236.5K 🔥` `NEW`
1. [酒店花洒现排泄物住客索赔遭拒](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%BA%97%E8%8A%B1%E6%B4%92%E7%8E%B0%E6%8E%92%E6%B3%84%E7%89%A9%E4%BD%8F%E5%AE%A2%E7%B4%A2%E8%B5%94%E9%81%AD%E6%8B%92%23) `229.5K 🔥` `NEW`
1. [AI帮你开发以前要花钱的功能](https://s.weibo.com/weibo?q=%23AI%E5%B8%AE%E4%BD%A0%E5%BC%80%E5%8F%91%E4%BB%A5%E5%89%8D%E8%A6%81%E8%8A%B1%E9%92%B1%E7%9A%84%E5%8A%9F%E8%83%BD%23) `222.8K 🔥` `NEW`
1. [何昶希何衍朝红毯生图](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%98%B6%E5%B8%8C%E4%BD%95%E8%A1%8D%E6%9C%9D%E7%BA%A2%E6%AF%AF%E7%94%9F%E5%9B%BE%23) `220.4K 🔥` `NEW`
1. [王源演唱会秒变澡堂 (Wang Yuan’s concert turns into a bathhouse instantly)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A7%92%E5%8F%98%E6%BE%A1%E5%A0%82%23) `214.6K 🔥` `NEW`
1. [奥德赛](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `1.1M 🔥` `+180%`
1. [舒蕾王星越达成长效合作 (Shulei Wangxing achieves long-term cooperation)](https://s.weibo.com/weibo?q=%23%E8%88%92%E8%95%BE%E7%8E%8B%E6%98%9F%E8%B6%8A%E8%BE%BE%E6%88%90%E9%95%BF%E6%95%88%E5%90%88%E4%BD%9C%23) `725.4K 🔥` `+21%`
1. [沈腾演技 (Shen Teng's acting skills)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%BC%94%E6%8A%80%23) `725.4K 🔥` `+34%`
1. [AG对战KSG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98KSG%23) `417.2K 🔥` `+49%`
1. [苹果AI 千问](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CAI%20%E5%8D%83%E9%97%AE%23) `414.1K 🔥` `+48%`
1. [网传张凌赫准备考研了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%87%86%E5%A4%87%E8%80%83%E7%A0%94%E4%BA%86%23) `410.5K 🔥` `+49%`
1. [情侣平潭翻墙拍日出坠崖](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E5%B9%B3%E6%BD%AD%E7%BF%BB%E5%A2%99%E6%8B%8D%E6%97%A5%E5%87%BA%E5%9D%A0%E5%B4%96%23) `401.3K 🔥` `+29%`
1. [白海豚开始发力了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%BC%80%E5%A7%8B%E5%8F%91%E5%8A%9B%E4%BA%86%23) `391.5K 🔥` `+57%`
1. [西村力演唱会的发言](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E5%8F%91%E8%A8%80%23) `387.8K 🔥` `+41%`
1. [田曦薇开枪wink (Tian Xiwei shoots wink)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%80%E6%9E%AAwink%23) `360.0K 🔥` `+32%`
1. [小夜灯 性早熟](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%9C%E7%81%AF%20%E6%80%A7%E6%97%A9%E7%86%9F%23) `350.3K 🔥` `+32%`
1. [SNH48总选排名](https://s.weibo.com/weibo?q=%23SNH48%E6%80%BB%E9%80%89%E6%8E%92%E5%90%8D%23) `333.4K 🔥` `+26%`
1. [A股存储巨头定增大幅溢价 (A-share storage giant plans to increase price at a substantial premium)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%AD%98%E5%82%A8%E5%B7%A8%E5%A4%B4%E5%AE%9A%E5%A2%9E%E5%A4%A7%E5%B9%85%E6%BA%A2%E4%BB%B7%23) `329.1K 🔥` `+31%`
1. [日媒称华为领先日本整整一代](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E7%A7%B0%E5%8D%8E%E4%B8%BA%E9%A2%86%E5%85%88%E6%97%A5%E6%9C%AC%E6%95%B4%E6%95%B4%E4%B8%80%E4%BB%A3%23) `328.7K 🔥` `+38%`
1. [胚胎案原配称去年假意配合丈夫旅行](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%8E%9F%E9%85%8D%E7%A7%B0%E5%8E%BB%E5%B9%B4%E5%81%87%E6%84%8F%E9%85%8D%E5%90%88%E4%B8%88%E5%A4%AB%E6%97%85%E8%A1%8C%23) `327.9K 🔥` `+122%`
1. [徐洁云说对仗义执言一直心怀感激](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E4%BA%91%E8%AF%B4%E5%AF%B9%E4%BB%97%E4%B9%89%E6%89%A7%E8%A8%80%E4%B8%80%E7%9B%B4%E5%BF%83%E6%80%80%E6%84%9F%E6%BF%80%23) `217.6K 🔥` `+47%`
1. [黄土高原上的绿色长征 (The Green Long March on the Loess Plateau)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%9C%9F%E9%AB%98%E5%8E%9F%E4%B8%8A%E7%9A%84%E7%BB%BF%E8%89%B2%E9%95%BF%E5%BE%81%23) `725.7K 🔥`
1. [中国留学生称学校都是印度人](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E7%A7%B0%E5%AD%A6%E6%A0%A1%E9%83%BD%E6%98%AF%E5%8D%B0%E5%BA%A6%E4%BA%BA%23) `326.2K 🔥`
1. [西村力演唱会的状态 (Nishimura Riki's concert status)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E7%8A%B6%E6%80%81%23) `292.6K 🔥`
1. [常吃4种食物不易得胃癌](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%90%834%E7%A7%8D%E9%A3%9F%E7%89%A9%E4%B8%8D%E6%98%93%E5%BE%97%E8%83%83%E7%99%8C%23) `287.1K 🔥`
1. [娜扎眼睛问题可能是小时候留的病根](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E7%9C%BC%E7%9D%9B%E9%97%AE%E9%A2%98%E5%8F%AF%E8%83%BD%E6%98%AF%E5%B0%8F%E6%97%B6%E5%80%99%E7%95%99%E7%9A%84%E7%97%85%E6%A0%B9%23) `281.8K 🔥`
1. [微博文化交流之夜](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81%E4%B9%8B%E5%A4%9C%23) `281.4K 🔥`
1. [成毅黑金西装](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E9%BB%91%E9%87%91%E8%A5%BF%E8%A3%85%23) `272.7K 🔥`
1. [西湖突下暴雨游客蹲断桥上躲避 (Tourists squatted on a broken bridge to take shelter from a sudden heavy rain in West Lake)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%B9%96%E7%AA%81%E4%B8%8B%E6%9A%B4%E9%9B%A8%E6%B8%B8%E5%AE%A2%E8%B9%B2%E6%96%AD%E6%A1%A5%E4%B8%8A%E8%BA%B2%E9%81%BF%23) `246.6K 🔥`
1. [SNH48总选](https://s.weibo.com/weibo?q=%23SNH48%E6%80%BB%E9%80%89%23) `228.3K 🔥`
1. [瑞典大满贯 女单签表 (Swedish Grand Slam Women’s Singles Draw)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%85%B8%E5%A4%A7%E6%BB%A1%E8%B4%AF%20%E5%A5%B3%E5%8D%95%E7%AD%BE%E8%A1%A8%23) `227.4K 🔥`
1. [一诺蝉联KWC最受欢迎选手](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E8%9D%89%E8%81%94KWC%E6%9C%80%E5%8F%97%E6%AC%A2%E8%BF%8E%E9%80%89%E6%89%8B%23) `225.8K 🔥`
1. [宇树科技中一签能赚多少](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%AD%E4%B8%80%E7%AD%BE%E8%83%BD%E8%B5%9A%E5%A4%9A%E5%B0%91%23) `216.4K 🔥`
1. [宋昕冉 拜拜啦这里的夏天 (Song Xinran Goodbye summer here)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%98%95%E5%86%89%20%E6%8B%9C%E6%8B%9C%E5%95%A6%E8%BF%99%E9%87%8C%E7%9A%84%E5%A4%8F%E5%A4%A9%23) `211.1K 🔥`
1. [台风白海豚](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `826.7K 🔥` `-26%`
1. [西平县刑案嫌犯伤害多名无辜群众](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%B9%B3%E5%8E%BF%E5%88%91%E6%A1%88%E5%AB%8C%E7%8A%AF%E4%BC%A4%E5%AE%B3%E5%A4%9A%E5%90%8D%E6%97%A0%E8%BE%9C%E7%BE%A4%E4%BC%97%23) `328.4K 🔥` `-59%`

Updated at 2026-08-08 22:17:31

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
