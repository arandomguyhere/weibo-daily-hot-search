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

1. [沈腾演技 (Shen Teng's acting skills)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%BC%94%E6%8A%80%23) `541.1K 🔥` `NEW`
1. [奥德赛](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `405.8K 🔥` `NEW`
1. [情侣平潭翻墙拍日出坠崖](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E5%B9%B3%E6%BD%AD%E7%BF%BB%E5%A2%99%E6%8B%8D%E6%97%A5%E5%87%BA%E5%9D%A0%E5%B4%96%23) `311.9K 🔥` `NEW`
1. [奔驰车主挥杆竞逐高球世界赛席位](https://s.weibo.com/weibo?q=%23%E5%A5%94%E9%A9%B0%E8%BD%A6%E4%B8%BB%E6%8C%A5%E6%9D%86%E7%AB%9E%E9%80%90%E9%AB%98%E7%90%83%E4%B8%96%E7%95%8C%E8%B5%9B%E5%B8%AD%E4%BD%8D%23) `304.7K 🔥` `NEW`
1. [AG对战KSG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98KSG%23) `280.2K 🔥` `NEW`
1. [多方回应低保户背上40万贷款](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E4%BD%8E%E4%BF%9D%E6%88%B7%E8%83%8C%E4%B8%8A40%E4%B8%87%E8%B4%B7%E6%AC%BE%23) `265.9K 🔥` `NEW`
1. [永和豆浆创始人林炳生逝世](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E5%92%8C%E8%B1%86%E6%B5%86%E5%88%9B%E5%A7%8B%E4%BA%BA%E6%9E%97%E7%82%B3%E7%94%9F%E9%80%9D%E4%B8%96%23) `252.0K 🔥` `NEW`
1. [A股存储巨头定增大幅溢价](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%AD%98%E5%82%A8%E5%B7%A8%E5%A4%B4%E5%AE%9A%E5%A2%9E%E5%A4%A7%E5%B9%85%E6%BA%A2%E4%BB%B7%23) `251.6K 🔥` `NEW`
1. [华晨宇兔耳帽](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%85%94%E8%80%B3%E5%B8%BD%23) `250.8K 🔥` `NEW`
1. [白海豚开始发力了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%BC%80%E5%A7%8B%E5%8F%91%E5%8A%9B%E4%BA%86%23) `250.1K 🔥` `NEW`
1. [宋昕冉 拜拜啦这里的夏天 (Song Xinran Goodbye summer here)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%98%95%E5%86%89%20%E6%8B%9C%E6%8B%9C%E5%95%A6%E8%BF%99%E9%87%8C%E7%9A%84%E5%A4%8F%E5%A4%A9%23) `247.7K 🔥` `NEW`
1. [常吃4种食物不易得胃癌](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%90%834%E7%A7%8D%E9%A3%9F%E7%89%A9%E4%B8%8D%E6%98%93%E5%BE%97%E8%83%83%E7%99%8C%23) `246.1K 🔥` `NEW`
1. [虞书欣鬼新娘路透](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%AC%BC%E6%96%B0%E5%A8%98%E8%B7%AF%E9%80%8F%23) `238.8K 🔥` `NEW`
1. [一诺蝉联KWC最受欢迎选手](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E8%9D%89%E8%81%94KWC%E6%9C%80%E5%8F%97%E6%AC%A2%E8%BF%8E%E9%80%89%E6%89%8B%23) `194.5K 🔥` `NEW`
1. [奥利泰国文化交流之夜路透](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E6%B3%B0%E5%9B%BD%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81%E4%B9%8B%E5%A4%9C%E8%B7%AF%E9%80%8F%23) `149.2K 🔥` `NEW`
1. [徐洁云说对仗义执言一直心怀感激](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E4%BA%91%E8%AF%B4%E5%AF%B9%E4%BB%97%E4%B9%89%E6%89%A7%E8%A8%80%E4%B8%80%E7%9B%B4%E5%BF%83%E6%80%80%E6%84%9F%E6%BF%80%23) `148.3K 🔥` `NEW`
1. [胚胎案原配称去年假意配合丈夫旅行](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%8E%9F%E9%85%8D%E7%A7%B0%E5%8E%BB%E5%B9%B4%E5%81%87%E6%84%8F%E9%85%8D%E5%90%88%E4%B8%88%E5%A4%AB%E6%97%85%E8%A1%8C%23) `147.9K 🔥` `NEW`
1. [迪丽热巴刘嘉玲互相谦让](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%88%98%E5%98%89%E7%8E%B2%E4%BA%92%E7%9B%B8%E8%B0%A6%E8%AE%A9%23) `145.6K 🔥` `NEW`
1. [蒯曼4比1早田希娜晋级四强](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BC4%E6%AF%941%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E6%99%8B%E7%BA%A7%E5%9B%9B%E5%BC%BA%23) `140.4K 🔥` `NEW`
1. [西平县刑案嫌犯伤害多名无辜群众](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%B9%B3%E5%8E%BF%E5%88%91%E6%A1%88%E5%AB%8C%E7%8A%AF%E4%BC%A4%E5%AE%B3%E5%A4%9A%E5%90%8D%E6%97%A0%E8%BE%9C%E7%BE%A4%E4%BC%97%23) `808.3K 🔥` `+147%`
1. [西湖突下暴雨游客蹲断桥上躲避 (Tourists squatted on a broken bridge to take shelter from a sudden heavy rain in West Lake)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%B9%96%E7%AA%81%E4%B8%8B%E6%9A%B4%E9%9B%A8%E6%B8%B8%E5%AE%A2%E8%B9%B2%E6%96%AD%E6%A1%A5%E4%B8%8A%E8%BA%B2%E9%81%BF%23) `250.3K 🔥` `+48%`
1. [这榴莲是真嫩啊](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A6%B4%E8%8E%B2%E6%98%AF%E7%9C%9F%E5%AB%A9%E5%95%8A%23) `249.2K 🔥` `+59%`
1. [微博文化交流之夜](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81%E4%B9%8B%E5%A4%9C%23) `245.7K 🔥` `+66%`
1. [台风白海豚](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `1.1M 🔥`
1. [黄土高原上的绿色长征 (The Green Long March on the Loess Plateau)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%9C%9F%E9%AB%98%E5%8E%9F%E4%B8%8A%E7%9A%84%E7%BB%BF%E8%89%B2%E9%95%BF%E5%BE%81%23) `624.2K 🔥`
1. [苹果AI 千问](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CAI%20%E5%8D%83%E9%97%AE%23) `279.9K 🔥`
1. [电影欢迎来龙餐馆口碑 (Movie Welcome to Dragon Restaurant reputation)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%E5%8F%A3%E7%A2%91%23) `278.0K 🔥`
1. [网传张凌赫准备考研了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%87%86%E5%A4%87%E8%80%83%E7%A0%94%E4%BA%86%23) `276.3K 🔥`
1. [西村力演唱会的发言](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E5%8F%91%E8%A8%80%23) `274.9K 🔥`
1. [中国留学生称学校都是印度人](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E7%A7%B0%E5%AD%A6%E6%A0%A1%E9%83%BD%E6%98%AF%E5%8D%B0%E5%BA%A6%E4%BA%BA%23) `273.7K 🔥`
1. [田曦薇开枪wink (Tian Xiwei shoots wink)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%80%E6%9E%AAwink%23) `272.9K 🔥`
1. [SNH48总选](https://s.weibo.com/weibo?q=%23SNH48%E6%80%BB%E9%80%89%23) `271.2K 🔥`
1. [刺激之夜cos](https://s.weibo.com/weibo?q=%23%E5%88%BA%E6%BF%80%E4%B9%8B%E5%A4%9Ccos%23) `270.1K 🔥`
1. [西村力演唱会的状态 (Nishimura Riki's concert status)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E7%8A%B6%E6%80%81%23) `269.5K 🔥`
1. [宇树科技中一签能赚多少](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%AD%E4%B8%80%E7%AD%BE%E8%83%BD%E8%B5%9A%E5%A4%9A%E5%B0%91%23) `267.9K 🔥`
1. [瑞典大满贯 女单签表](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%85%B8%E5%A4%A7%E6%BB%A1%E8%B4%AF%20%E5%A5%B3%E5%8D%95%E7%AD%BE%E8%A1%A8%23) `267.4K 🔥`
1. [小夜灯 性早熟](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%9C%E7%81%AF%20%E6%80%A7%E6%97%A9%E7%86%9F%23) `264.5K 🔥`
1. [SNH48总选排名](https://s.weibo.com/weibo?q=%23SNH48%E6%80%BB%E9%80%89%E6%8E%92%E5%90%8D%23) `264.3K 🔥`
1. [娜扎眼睛问题可能是小时候留的病根](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E7%9C%BC%E7%9D%9B%E9%97%AE%E9%A2%98%E5%8F%AF%E8%83%BD%E6%98%AF%E5%B0%8F%E6%97%B6%E5%80%99%E7%95%99%E7%9A%84%E7%97%85%E6%A0%B9%23) `252.5K 🔥`
1. [成毅黑金西装](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E9%BB%91%E9%87%91%E8%A5%BF%E8%A3%85%23) `251.6K 🔥`
1. [日媒称华为领先日本整整一代](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E7%A7%B0%E5%8D%8E%E4%B8%BA%E9%A2%86%E5%85%88%E6%97%A5%E6%9C%AC%E6%95%B4%E6%95%B4%E4%B8%80%E4%BB%A3%23) `238.9K 🔥`
1. [披荆斩棘给王传君的介绍](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%BB%99%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%9A%84%E4%BB%8B%E7%BB%8D%23) `213.2K 🔥`
1. [香港观众喊迪丽热巴巴爷](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E8%A7%82%E4%BC%97%E5%96%8A%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B7%B4%E7%88%B7%23) `170.1K 🔥`
1. [多家A股公司收到美国退税 (Several A-share companies received U.S. tax refunds)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6A%E8%82%A1%E5%85%AC%E5%8F%B8%E6%94%B6%E5%88%B0%E7%BE%8E%E5%9B%BD%E9%80%80%E7%A8%8E%23) `148.0K 🔥`
1. [女明星在用的蚕丝卫生巾 (Silk sanitary napkins used by female celebrities)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%98%8E%E6%98%9F%E5%9C%A8%E7%94%A8%E7%9A%84%E8%9A%95%E4%B8%9D%E5%8D%AB%E7%94%9F%E5%B7%BE%23) `568.5K 🔥` `-24%`
1. [孙红雷艾特错王玉雯](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E8%89%BE%E7%89%B9%E9%94%99%E7%8E%8B%E7%8E%89%E9%9B%AF%23) `297.0K 🔥` `-21%`
1. [在电影院要小心自己的喝的](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E7%94%B5%E5%BD%B1%E9%99%A2%E8%A6%81%E5%B0%8F%E5%BF%83%E8%87%AA%E5%B7%B1%E7%9A%84%E5%96%9D%E7%9A%84%23) `277.6K 🔥` `-54%`
1. [虞书欣古子成大婚路透 (Yu Shuxin and Gu Zicheng's wedding Reuters)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%8F%A4%E5%AD%90%E6%88%90%E5%A4%A7%E5%A9%9A%E8%B7%AF%E9%80%8F%23) `249.1K 🔥` `-31%`
1. [TF四代突围2 (TF fourth generation breakout 2)](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E7%AA%81%E5%9B%B42%23) `188.0K 🔥` `-25%`
1. [河南西平刑案嫌犯已落网](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E8%A5%BF%E5%B9%B3%E5%88%91%E6%A1%88%E5%AB%8C%E7%8A%AF%E5%B7%B2%E8%90%BD%E7%BD%91%23) `177.8K 🔥` `-79%`
1. [王橹杰7个入选舞台](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B07%E4%B8%AA%E5%85%A5%E9%80%89%E8%88%9E%E5%8F%B0%23) `159.3K 🔥` `-35%`
1. [下班就得直接去健身房 (You have to go directly to the gym after get off work)](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E7%8F%AD%E5%B0%B1%E5%BE%97%E7%9B%B4%E6%8E%A5%E5%8E%BB%E5%81%A5%E8%BA%AB%E6%88%BF%23) `152.8K 🔥` `-38%`

Updated at 2026-08-08 21:38:55

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
