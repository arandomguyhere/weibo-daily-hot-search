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

1. [田曦薇化的妆被质疑 (Tian Xiwei’s makeup was questioned)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%8C%96%E7%9A%84%E5%A6%86%E8%A2%AB%E8%B4%A8%E7%96%91%23) `1.1M 🔥` `NEW`
1. [2026王者荣耀电竞世俱杯](https://s.weibo.com/weibo?q=%232026%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E7%94%B5%E7%AB%9E%E4%B8%96%E4%BF%B1%E6%9D%AF%23) `589.4K 🔥` `NEW`
1. [丁禹兮红包](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%BA%A2%E5%8C%85%23) `496.4K 🔥` `NEW`
1. [这种手机壳可能是医疗垃圾做的](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E6%89%8B%E6%9C%BA%E5%A3%B3%E5%8F%AF%E8%83%BD%E6%98%AF%E5%8C%BB%E7%96%97%E5%9E%83%E5%9C%BE%E5%81%9A%E7%9A%84%23) `493.1K 🔥` `NEW`
1. [市监部门介入沙琪玛疑似有假牙事件](https://s.weibo.com/weibo?q=%23%E5%B8%82%E7%9B%91%E9%83%A8%E9%97%A8%E4%BB%8B%E5%85%A5%E6%B2%99%E7%90%AA%E7%8E%9B%E7%96%91%E4%BC%BC%E6%9C%89%E5%81%87%E7%89%99%E4%BA%8B%E4%BB%B6%23) `482.3K 🔥` `NEW`
1. [马航飞行员疑在开飞机时吸毒](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E8%88%AA%E9%A3%9E%E8%A1%8C%E5%91%98%E7%96%91%E5%9C%A8%E5%BC%80%E9%A3%9E%E6%9C%BA%E6%97%B6%E5%90%B8%E6%AF%92%23) `424.6K 🔥` `NEW`
1. [搜救队推测嫌犯靠吃玉米生存](https://s.weibo.com/weibo?q=%23%E6%90%9C%E6%95%91%E9%98%9F%E6%8E%A8%E6%B5%8B%E5%AB%8C%E7%8A%AF%E9%9D%A0%E5%90%83%E7%8E%89%E7%B1%B3%E7%94%9F%E5%AD%98%23) `411.6K 🔥` `NEW`
1. [孙政拉二胡](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%94%BF%E6%8B%89%E4%BA%8C%E8%83%A1%23) `390.1K 🔥` `NEW`
1. [田曦薇COS和平精英甜包](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87COS%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%E7%94%9C%E5%8C%85%23) `292.5K 🔥` `NEW`
1. [多家A股公司收到美国退税](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6A%E8%82%A1%E5%85%AC%E5%8F%B8%E6%94%B6%E5%88%B0%E7%BE%8E%E5%9B%BD%E9%80%80%E7%A8%8E%23) `287.7K 🔥` `NEW`
1. [晚晚疑似怀孕 (Wanwan is suspected to be pregnant)](https://s.weibo.com/weibo?q=%23%E6%99%9A%E6%99%9A%E7%96%91%E4%BC%BC%E6%80%80%E5%AD%95%23) `286.1K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `272.1K 🔥` `NEW`
1. [孟子义回应加入好6团](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%9B%9E%E5%BA%94%E5%8A%A0%E5%85%A5%E5%A5%BD6%E5%9B%A2%23) `271.8K 🔥` `NEW`
1. [永旺超市鳕鱼肠内发现疑似刀片异物](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E6%97%BA%E8%B6%85%E5%B8%82%E9%B3%95%E9%B1%BC%E8%82%A0%E5%86%85%E5%8F%91%E7%8E%B0%E7%96%91%E4%BC%BC%E5%88%80%E7%89%87%E5%BC%82%E7%89%A9%23) `270.4K 🔥` `NEW`
1. [曾辉韩雨彤红毯状态](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E9%9F%A9%E9%9B%A8%E5%BD%A4%E7%BA%A2%E6%AF%AF%E7%8A%B6%E6%80%81%23) `270.2K 🔥` `NEW`
1. [钟意状态](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%84%8F%E7%8A%B6%E6%80%81%23) `262.3K 🔥` `NEW`
1. [阿森纳官宣吉马良斯加盟](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%E5%AE%98%E5%AE%A3%E5%90%89%E9%A9%AC%E8%89%AF%E6%96%AF%E5%8A%A0%E7%9B%9F%23) `258.9K 🔥` `NEW`
1. [孙政吕思瞳互相写名字](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%94%BF%E5%90%95%E6%80%9D%E7%9E%B3%E4%BA%92%E7%9B%B8%E5%86%99%E5%90%8D%E5%AD%97%23) `243.9K 🔥` `NEW`
1. [小伙睡梦翻身把隐翅虫碾进内裤](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E7%9D%A1%E6%A2%A6%E7%BF%BB%E8%BA%AB%E6%8A%8A%E9%9A%90%E7%BF%85%E8%99%AB%E7%A2%BE%E8%BF%9B%E5%86%85%E8%A3%A4%23) `222.2K 🔥` `NEW`
1. [微博文化之夜之这是谁](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%B9%8B%E5%A4%9C%E4%B9%8B%E8%BF%99%E6%98%AF%E8%B0%81%23) `599.5K 🔥` `+41%`
1. [情侣平潭翻墙拍日出坠崖 (Couple climbs over wall in Pingtan to take photos of sunrise and falls off cliff)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E5%B9%B3%E6%BD%AD%E7%BF%BB%E5%A2%99%E6%8B%8D%E6%97%A5%E5%87%BA%E5%9D%A0%E5%B4%96%23) `551.4K 🔥` `+37%`
1. [AG对战KSG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98KSG%23) `548.4K 🔥` `+31%`
1. [苹果AI 千问](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CAI%20%E5%8D%83%E9%97%AE%23) `546.8K 🔥` `+32%`
1. [敖瑞鹏王玉雯正太扭腰来了](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%AD%A3%E5%A4%AA%E6%89%AD%E8%85%B0%E6%9D%A5%E4%BA%86%23) `541.5K 🔥` `+37%`
1. [网传张凌赫准备考研了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%87%86%E5%A4%87%E8%80%83%E7%A0%94%E4%BA%86%23) `539.8K 🔥` `+32%`
1. [白海豚开始发力了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%BC%80%E5%A7%8B%E5%8F%91%E5%8A%9B%E4%BA%86%23) `536.2K 🔥` `+37%`
1. [王源 巡演看一场少一场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%20%E5%B7%A1%E6%BC%94%E7%9C%8B%E4%B8%80%E5%9C%BA%E5%B0%91%E4%B8%80%E5%9C%BA%23) `517.2K 🔥` `+59%`
1. [A股存储巨头定增大幅溢价 (A-share storage giant plans to increase price at a substantial premium)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%AD%98%E5%82%A8%E5%B7%A8%E5%A4%B4%E5%AE%9A%E5%A2%9E%E5%A4%A7%E5%B9%85%E6%BA%A2%E4%BB%B7%23) `501.7K 🔥` `+52%`
1. [日媒称华为领先日本整整一代](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E7%A7%B0%E5%8D%8E%E4%B8%BA%E9%A2%86%E5%85%88%E6%97%A5%E6%9C%AC%E6%95%B4%E6%95%B4%E4%B8%80%E4%BB%A3%23) `497.6K 🔥` `+51%`
1. [胚胎案原配称去年假意配合丈夫旅行](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%8E%9F%E9%85%8D%E7%A7%B0%E5%8E%BB%E5%B9%B4%E5%81%87%E6%84%8F%E9%85%8D%E5%90%88%E4%B8%88%E5%A4%AB%E6%97%85%E8%A1%8C%23) `489.7K 🔥` `+49%`
1. [小夜灯 性早熟](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%9C%E7%81%AF%20%E6%80%A7%E6%97%A9%E7%86%9F%23) `473.6K 🔥` `+35%`
1. [王玉雯COS和平精英樱桃泡泡 (Wang Yuwen COS Peace Elite Cherry Bubble)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AFCOS%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%E6%A8%B1%E6%A1%83%E6%B3%A1%E6%B3%A1%23) `469.6K 🔥` `+23%`
1. [宋茜COS黯羽织刑唱跳舞台](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%8C%9CCOS%E9%BB%AF%E7%BE%BD%E7%BB%87%E5%88%91%E5%94%B1%E8%B7%B3%E8%88%9E%E5%8F%B0%23) `452.5K 🔥` `+38%`
1. [常吃4种食物不易得胃癌](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%90%834%E7%A7%8D%E9%A3%9F%E7%89%A9%E4%B8%8D%E6%98%93%E5%BE%97%E8%83%83%E7%99%8C%23) `438.8K 🔥` `+53%`
1. [西湖突下暴雨游客蹲断桥上躲避 (Tourists squatted on a broken bridge to take shelter from a sudden heavy rain in West Lake)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%B9%96%E7%AA%81%E4%B8%8B%E6%9A%B4%E9%9B%A8%E6%B8%B8%E5%AE%A2%E8%B9%B2%E6%96%AD%E6%A1%A5%E4%B8%8A%E8%BA%B2%E9%81%BF%23) `432.4K 🔥` `+75%`
1. [黄土高原上的绿色长征 (The Green Long March on the Loess Plateau)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%9C%9F%E9%AB%98%E5%8E%9F%E4%B8%8A%E7%9A%84%E7%BB%BF%E8%89%B2%E9%95%BF%E5%BE%81%23) `641.2K 🔥`
1. [只有小时候发烧才有这种感觉 (I only felt like this when I had a fever when I was a child)](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E5%B0%8F%E6%97%B6%E5%80%99%E5%8F%91%E7%83%A7%E6%89%8D%E6%9C%89%E8%BF%99%E7%A7%8D%E6%84%9F%E8%A7%89%23) `600.0K 🔥`
1. [沈腾演技 (Shen Teng's acting skills)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%BC%94%E6%8A%80%23) `600.0K 🔥`
1. [张凌赫参加阿维塔07L上市发布会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%82%E5%8A%A0%E9%98%BF%E7%BB%B4%E5%A1%9407L%E4%B8%8A%E5%B8%82%E5%8F%91%E5%B8%83%E4%BC%9A%23) `462.7K 🔥`
1. [西村力演唱会的发言](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E5%8F%91%E8%A8%80%23) `460.5K 🔥`
1. [爷爷不泡茶 店员打人](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%8D%E6%B3%A1%E8%8C%B6%20%E5%BA%97%E5%91%98%E6%89%93%E4%BA%BA%23) `400.5K 🔥`
1. [任嘉伦红毯气场全开](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%E7%BA%A2%E6%AF%AF%E6%B0%94%E5%9C%BA%E5%85%A8%E5%BC%80%23) `384.0K 🔥`
1. [中国留学生称学校都是印度人](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E7%A7%B0%E5%AD%A6%E6%A0%A1%E9%83%BD%E6%98%AF%E5%8D%B0%E5%BA%A6%E4%BA%BA%23) `334.1K 🔥`
1. [SNH48总选排名](https://s.weibo.com/weibo?q=%23SNH48%E6%80%BB%E9%80%89%E6%8E%92%E5%90%8D%23) `272.6K 🔥`
1. [娜扎眼睛问题可能是小时候留的病根](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E7%9C%BC%E7%9D%9B%E9%97%AE%E9%A2%98%E5%8F%AF%E8%83%BD%E6%98%AF%E5%B0%8F%E6%97%B6%E5%80%99%E7%95%99%E7%9A%84%E7%97%85%E6%A0%B9%23) `256.9K 🔥`
1. [奥德赛 (Odyssey)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `830.8K 🔥` `-27%`
1. [台风白海豚](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `553.8K 🔥` `-33%`
1. [陈伟霆说我还以为去了成毅的演唱会](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E8%AF%B4%E6%88%91%E8%BF%98%E4%BB%A5%E4%B8%BA%E5%8E%BB%E4%BA%86%E6%88%90%E6%AF%85%E7%9A%84%E6%BC%94%E5%94%B1%E4%BC%9A%23) `533.2K 🔥` `-26%`
1. [田曦薇开枪wink (Tian Xiwei shoots wink)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%80%E6%9E%AAwink%23) `270.9K 🔥` `-25%`
1. [西村力演唱会的状态 (Nishimura Riki's concert status)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E7%8A%B6%E6%80%81%23) `218.0K 🔥` `-25%`
1. [奥利淑元生图](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E6%B7%91%E5%85%83%E7%94%9F%E5%9B%BE%23) `202.6K 🔥` `-38%`

Updated at 2026-08-08 22:53:34

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
