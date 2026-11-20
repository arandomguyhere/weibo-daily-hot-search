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

1. [后会友期黄焖鸡事件原声视频](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E9%BB%84%E7%84%96%E9%B8%A1%E4%BA%8B%E4%BB%B6%E5%8E%9F%E5%A3%B0%E8%A7%86%E9%A2%91%23) `204.9K 🔥` `NEW`
1. [DeepSeek付费体验直线上升](https://s.weibo.com/weibo?q=%23DeepSeek%E4%BB%98%E8%B4%B9%E4%BD%93%E9%AA%8C%E7%9B%B4%E7%BA%BF%E4%B8%8A%E5%8D%87%23) `108.5K 🔥` `NEW`
1. [APEC盛会效应拉满](https://s.weibo.com/weibo?q=%23APEC%E7%9B%9B%E4%BC%9A%E6%95%88%E5%BA%94%E6%8B%89%E6%BB%A1%23) `83.7K 🔥` `NEW`
1. [享界V8开启全国交付](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E7%95%8CV8%E5%BC%80%E5%90%AF%E5%85%A8%E5%9B%BD%E4%BA%A4%E4%BB%98%23) `82.7K 🔥` `NEW`
1. [王子璇问马天宇你不会爱上我](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E9%97%AE%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%BD%A0%E4%B8%8D%E4%BC%9A%E7%88%B1%E4%B8%8A%E6%88%91%23) `78.5K 🔥` `NEW`
1. [金价罕见大跌原因找到了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E7%BD%95%E8%A7%81%E5%A4%A7%E8%B7%8C%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `72.8K 🔥` `NEW`
1. [晋妈给李勒优铺的路是接手面馆](https://s.weibo.com/weibo?q=%23%E6%99%8B%E5%A6%88%E7%BB%99%E6%9D%8E%E5%8B%92%E4%BC%98%E9%93%BA%E7%9A%84%E8%B7%AF%E6%98%AF%E6%8E%A5%E6%89%8B%E9%9D%A2%E9%A6%86%23) `72.5K 🔥` `NEW`
1. [AI证明黎曼猜想传闻](https://s.weibo.com/weibo?q=%23AI%E8%AF%81%E6%98%8E%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3%E4%BC%A0%E9%97%BB%23) `65.9K 🔥` `NEW`
1. [张萌回应青稚打听式安慰](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E5%9B%9E%E5%BA%94%E9%9D%92%E7%A8%9A%E6%89%93%E5%90%AC%E5%BC%8F%E5%AE%89%E6%85%B0%23) `62.4K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `56.2K 🔥` `NEW`
1. [余承东称现在L2开车不能睡觉](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E7%A7%B0%E7%8E%B0%E5%9C%A8L2%E5%BC%80%E8%BD%A6%E4%B8%8D%E8%83%BD%E7%9D%A1%E8%A7%89%23) `44.2K 🔥` `NEW`
1. [林更新你怎么什么都敢演](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%9B%B4%E6%96%B0%E4%BD%A0%E6%80%8E%E4%B9%88%E4%BB%80%E4%B9%88%E9%83%BD%E6%95%A2%E6%BC%94%23) `43.7K 🔥` `NEW`
1. [白小纯淘汰33](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%B7%98%E6%B1%B033%23) `42.6K 🔥` `NEW`
1. [成毅两京十五日演技表现](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E6%BC%94%E6%8A%80%E8%A1%A8%E7%8E%B0%23) `42.4K 🔥` `NEW`
1. [曝青稚妈妈讨厌后会友期的原因](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9D%92%E7%A8%9A%E5%A6%88%E5%A6%88%E8%AE%A8%E5%8E%8C%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `40.9K 🔥` `NEW`
1. [杨超越一开口就是满分作文](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E4%B8%80%E5%BC%80%E5%8F%A3%E5%B0%B1%E6%98%AF%E6%BB%A1%E5%88%86%E4%BD%9C%E6%96%87%23) `40.7K 🔥` `NEW`
1. [文吉儿袜子塞沙发底下](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E8%A2%9C%E5%AD%90%E5%A1%9E%E6%B2%99%E5%8F%91%E5%BA%95%E4%B8%8B%23) `40.7K 🔥` `NEW`
1. [深圳人又开始原装出街了](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%BA%BA%E5%8F%88%E5%BC%80%E5%A7%8B%E5%8E%9F%E8%A3%85%E5%87%BA%E8%A1%97%E4%BA%86%23) `40.6K 🔥` `NEW`
1. [U17国足0比5西班牙U17](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B30%E6%AF%945%E8%A5%BF%E7%8F%AD%E7%89%99U17%23) `40.5K 🔥` `NEW`
1. [青稚巅峰挑战赛淘汰榜第五](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E5%B7%85%E5%B3%B0%E6%8C%91%E6%88%98%E8%B5%9B%E6%B7%98%E6%B1%B0%E6%A6%9C%E7%AC%AC%E4%BA%94%23) `40.5K 🔥` `NEW`
1. [苗苗生病后郑恺在家做了8个人的饭](https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E7%94%9F%E7%97%85%E5%90%8E%E9%83%91%E6%81%BA%E5%9C%A8%E5%AE%B6%E5%81%9A%E4%BA%868%E4%B8%AA%E4%BA%BA%E7%9A%84%E9%A5%AD%23) `40.4K 🔥` `NEW`
1. [选伴侣最牛的思路](https://s.weibo.com/weibo?q=%23%E9%80%89%E4%BC%B4%E4%BE%A3%E6%9C%80%E7%89%9B%E7%9A%84%E6%80%9D%E8%B7%AF%23) `40.4K 🔥` `NEW`
1. [不要跟任何同事说你的事](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E8%B7%9F%E4%BB%BB%E4%BD%95%E5%90%8C%E4%BA%8B%E8%AF%B4%E4%BD%A0%E7%9A%84%E4%BA%8B%23) `40.3K 🔥` `NEW`
1. [马天宇家丑不可外扬](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%AE%B6%E4%B8%91%E4%B8%8D%E5%8F%AF%E5%A4%96%E6%89%AC%23) `40.3K 🔥` `NEW`
1. [童家堡](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E5%AE%B6%E5%A0%A1%23) `40.2K 🔥` `NEW`
1. [两京十五日收视率](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E6%94%B6%E8%A7%86%E7%8E%87%23) `40.2K 🔥` `NEW`
1. [MAMA获奖名单](https://s.weibo.com/weibo?q=%23MAMA%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `40.2K 🔥` `NEW`
1. [华为首款鸿蒙AI手机](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%A6%96%E6%AC%BE%E9%B8%BF%E8%92%99AI%E6%89%8B%E6%9C%BA%23) `40.1K 🔥` `NEW`
1. [男子清理死亡现场一单收3万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%B8%85%E7%90%86%E6%AD%BB%E4%BA%A1%E7%8E%B0%E5%9C%BA%E4%B8%80%E5%8D%95%E6%94%B63%E4%B8%87%23) `40.1K 🔥` `NEW`
1. [这就是妈](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E5%A6%88%23) `40.1K 🔥` `NEW`
1. [U17国足vs西班牙U17](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B3vs%E8%A5%BF%E7%8F%AD%E7%89%99U17%23) `40.0K 🔥` `NEW`
1. [奚梦瑶的孩子以为何猷君还能长高](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%9A%84%E5%AD%A9%E5%AD%90%E4%BB%A5%E4%B8%BA%E4%BD%95%E7%8C%B7%E5%90%9B%E8%BF%98%E8%83%BD%E9%95%BF%E9%AB%98%23) `40.0K 🔥` `NEW`
1. [文吉儿 陈晓楠](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%20%E9%99%88%E6%99%93%E6%A5%A0%23) `39.9K 🔥` `NEW`
1. [雕稳健不让青稚和主持人握手](https://s.weibo.com/weibo?q=%23%E9%9B%95%E7%A8%B3%E5%81%A5%E4%B8%8D%E8%AE%A9%E9%9D%92%E7%A8%9A%E5%92%8C%E4%B8%BB%E6%8C%81%E4%BA%BA%E6%8F%A1%E6%89%8B%23) `39.9K 🔥` `NEW`
1. [Gucci晚宴](https://s.weibo.com/weibo?q=%23Gucci%E6%99%9A%E5%AE%B4%23) `39.9K 🔥` `NEW`
1. [詹俊谈U17国足0比5西班牙](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E4%BF%8A%E8%B0%88U17%E5%9B%BD%E8%B6%B30%E6%AF%945%E8%A5%BF%E7%8F%AD%E7%89%99%23) `39.8K 🔥` `NEW`
1. [ON直播力挺Viper](https://s.weibo.com/weibo?q=%23ON%E7%9B%B4%E6%92%AD%E5%8A%9B%E6%8C%BAViper%23) `39.8K 🔥` `NEW`
1. [许飞 全是巧思](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%20%E5%85%A8%E6%98%AF%E5%B7%A7%E6%80%9D%23) `39.8K 🔥` `NEW`
1. [股民集体抛售科技股](https://s.weibo.com/weibo?q=%23%E8%82%A1%E6%B0%91%E9%9B%86%E4%BD%93%E6%8A%9B%E5%94%AE%E7%A7%91%E6%8A%80%E8%82%A1%23) `39.7K 🔥` `NEW`
1. [Delight DK](https://s.weibo.com/weibo?q=%23Delight%20DK%23) `39.7K 🔥` `NEW`
1. [特朗普刚返美就发重大预告](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%88%9A%E8%BF%94%E7%BE%8E%E5%B0%B1%E5%8F%91%E9%87%8D%E5%A4%A7%E9%A2%84%E5%91%8A%23) `39.7K 🔥` `NEW`
1. [中国唱将](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%94%B1%E5%B0%86%23) `39.6K 🔥` `NEW`
1. [老了留短发只是因为不用服美役了](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%86%E7%95%99%E7%9F%AD%E5%8F%91%E5%8F%AA%E6%98%AF%E5%9B%A0%E4%B8%BA%E4%B8%8D%E7%94%A8%E6%9C%8D%E7%BE%8E%E5%BD%B9%E4%BA%86%23) `39.6K 🔥` `NEW`
1. [U17世界杯](https://s.weibo.com/weibo?q=%23U17%E4%B8%96%E7%95%8C%E6%9D%AF%23) `39.6K 🔥` `NEW`
1. [余承东强调开车不能睡觉](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%BC%BA%E8%B0%83%E5%BC%80%E8%BD%A6%E4%B8%8D%E8%83%BD%E7%9D%A1%E8%A7%89%23) `39.5K 🔥` `NEW`
1. [李亚鹏想为李嫣窦靖童王菲和声被拒](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BA%9A%E9%B9%8F%E6%83%B3%E4%B8%BA%E6%9D%8E%E5%AB%A3%E7%AA%A6%E9%9D%96%E7%AB%A5%E7%8E%8B%E8%8F%B2%E5%92%8C%E5%A3%B0%E8%A2%AB%E6%8B%92%23) `39.5K 🔥` `NEW`
1. [无畏契约](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%23) `39.4K 🔥` `NEW`
1. [女子用手账的方式记录每天喝的咖啡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A8%E6%89%8B%E8%B4%A6%E7%9A%84%E6%96%B9%E5%BC%8F%E8%AE%B0%E5%BD%95%E6%AF%8F%E5%A4%A9%E5%96%9D%E7%9A%84%E5%92%96%E5%95%A1%23) `39.4K 🔥` `NEW`
1. [于和伟说突然不会演戏了](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E5%92%8C%E4%BC%9F%E8%AF%B4%E7%AA%81%E7%84%B6%E4%B8%8D%E4%BC%9A%E6%BC%94%E6%88%8F%E4%BA%86%23) `39.3K 🔥` `NEW`
1. [张萌翻白眼](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E7%BF%BB%E7%99%BD%E7%9C%BC%23) `39.3K 🔥` `NEW`
1. [U17国足对阵西班牙U17战绩对比](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B3%E5%AF%B9%E9%98%B5%E8%A5%BF%E7%8F%AD%E7%89%99U17%E6%88%98%E7%BB%A9%E5%AF%B9%E6%AF%94%23) `39.3K 🔥` `NEW`

Updated at 2026-11-21 04:59:27

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
