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

1. [胖东来搬离后原址所开新商场几乎倒闭](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%90%AC%E7%A6%BB%E5%90%8E%E5%8E%9F%E5%9D%80%E6%89%80%E5%BC%80%E6%96%B0%E5%95%86%E5%9C%BA%E5%87%A0%E4%B9%8E%E5%80%92%E9%97%AD%23) `1.1M 🔥` `NEW`
1. [黎曼猜想](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3%23) `810.4K 🔥` `NEW`
1. [问界M9车主开辅助驾驶熟睡](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%E8%BD%A6%E4%B8%BB%E5%BC%80%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%E7%86%9F%E7%9D%A1%23) `591.3K 🔥` `NEW`
1. [特朗普涉中俄美最新表态](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%B6%89%E4%B8%AD%E4%BF%84%E7%BE%8E%E6%9C%80%E6%96%B0%E8%A1%A8%E6%80%81%23) `456.6K 🔥` `NEW`
1. [比亚迪折叠方向盘能干嘛](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E6%8A%98%E5%8F%A0%E6%96%B9%E5%90%91%E7%9B%98%E8%83%BD%E5%B9%B2%E5%98%9B%23) `348.5K 🔥` `NEW`
1. [父亲把房留给妹妹哥哥搬前打砸诅咒](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E6%8A%8A%E6%88%BF%E7%95%99%E7%BB%99%E5%A6%B9%E5%A6%B9%E5%93%A5%E5%93%A5%E6%90%AC%E5%89%8D%E6%89%93%E7%A0%B8%E8%AF%85%E5%92%92%23) `271.2K 🔥` `NEW`
1. [王天辰郭晓婷开机](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%E9%83%AD%E6%99%93%E5%A9%B7%E5%BC%80%E6%9C%BA%23) `264.5K 🔥` `NEW`
1. [孙芮结婚怀孕](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%8A%AE%E7%BB%93%E5%A9%9A%E6%80%80%E5%AD%95%23) `261.7K 🔥` `NEW`
1. [以前的朱瞻基现在的朱瞻基](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%89%8D%E7%9A%84%E6%9C%B1%E7%9E%BB%E5%9F%BA%E7%8E%B0%E5%9C%A8%E7%9A%84%E6%9C%B1%E7%9E%BB%E5%9F%BA%23) `258.7K 🔥` `NEW`
1. [张萌的大胆穿搭直接吓到孟子义](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E7%9A%84%E5%A4%A7%E8%83%86%E7%A9%BF%E6%90%AD%E7%9B%B4%E6%8E%A5%E5%90%93%E5%88%B0%E5%AD%9F%E5%AD%90%E4%B9%89%23) `257.0K 🔥` `NEW`
1. [美AI科技股崩盘原因](https://s.weibo.com/weibo?q=%23%E7%BE%8EAI%E7%A7%91%E6%8A%80%E8%82%A1%E5%B4%A9%E7%9B%98%E5%8E%9F%E5%9B%A0%23) `251.5K 🔥` `NEW`
1. [孙芮属于军婚](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%8A%AE%E5%B1%9E%E4%BA%8E%E5%86%9B%E5%A9%9A%23) `248.9K 🔥` `NEW`
1. [伊能静介绍了和秦昊在上海的家](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E4%BB%8B%E7%BB%8D%E4%BA%86%E5%92%8C%E7%A7%A6%E6%98%8A%E5%9C%A8%E4%B8%8A%E6%B5%B7%E7%9A%84%E5%AE%B6%23) `246.3K 🔥` `NEW`
1. [一家四口自驾遇落石36岁父亲身亡](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%E8%87%AA%E9%A9%BE%E9%81%87%E8%90%BD%E7%9F%B336%E5%B2%81%E7%88%B6%E4%BA%B2%E8%BA%AB%E4%BA%A1%23) `241.9K 🔥` `NEW`
1. [中美两军在上海举行会议](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E4%B8%A4%E5%86%9B%E5%9C%A8%E4%B8%8A%E6%B5%B7%E4%B8%BE%E8%A1%8C%E4%BC%9A%E8%AE%AE%23) `240.8K 🔥` `NEW`
1. [这段爆破戏疑似AI做的](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E7%88%86%E7%A0%B4%E6%88%8F%E7%96%91%E4%BC%BCAI%E5%81%9A%E7%9A%84%23) `238.1K 🔥` `NEW`
1. [李嫣唱歌太孝顺了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AB%A3%E5%94%B1%E6%AD%8C%E5%A4%AA%E5%AD%9D%E9%A1%BA%E4%BA%86%23) `235.9K 🔥` `NEW`
1. [杨超越和董思成究竟哪里不熟](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E5%92%8C%E8%91%A3%E6%80%9D%E6%88%90%E7%A9%B6%E7%AB%9F%E5%93%AA%E9%87%8C%E4%B8%8D%E7%86%9F%23) `215.1K 🔥` `NEW`
1. [庞众望即将从清华毕业](https://s.weibo.com/weibo?q=%23%E5%BA%9E%E4%BC%97%E6%9C%9B%E5%8D%B3%E5%B0%86%E4%BB%8E%E6%B8%85%E5%8D%8E%E6%AF%95%E4%B8%9A%23) `200.1K 🔥` `NEW`
1. [马天宇当明星后把亲戚接到了北京](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%BD%93%E6%98%8E%E6%98%9F%E5%90%8E%E6%8A%8A%E4%BA%B2%E6%88%9A%E6%8E%A5%E5%88%B0%E4%BA%86%E5%8C%97%E4%BA%AC%23) `195.6K 🔥` `NEW`
1. [特朗普说看看深圳再看看我们](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E7%9C%8B%E7%9C%8B%E6%B7%B1%E5%9C%B3%E5%86%8D%E7%9C%8B%E7%9C%8B%E6%88%91%E4%BB%AC%23) `192.9K 🔥` `NEW`
1. [李嫣喝水都要用口罩遮着](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AB%A3%E5%96%9D%E6%B0%B4%E9%83%BD%E8%A6%81%E7%94%A8%E5%8F%A3%E7%BD%A9%E9%81%AE%E7%9D%80%23) `192.9K 🔥` `NEW`
1. [崔晋 李勒优](https://s.weibo.com/weibo?q=%23%E5%B4%94%E6%99%8B%20%E6%9D%8E%E5%8B%92%E4%BC%98%23) `191.8K 🔥` `NEW`
1. [星芒16G版本全平台售罄](https://s.weibo.com/weibo?q=%23%E6%98%9F%E8%8A%9216G%E7%89%88%E6%9C%AC%E5%85%A8%E5%B9%B3%E5%8F%B0%E5%94%AE%E7%BD%84%23) `139.6K 🔥` `NEW`
1. [炎亚纶汪东城世纪大和解](https://s.weibo.com/weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E6%B1%AA%E4%B8%9C%E5%9F%8E%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%92%8C%E8%A7%A3%23) `135.8K 🔥` `NEW`
1. [后会友期让我不适的part](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E8%AE%A9%E6%88%91%E4%B8%8D%E9%80%82%E7%9A%84part%23) `123.4K 🔥` `NEW`
1. [文吉儿 反向带货](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%20%E5%8F%8D%E5%90%91%E5%B8%A6%E8%B4%A7%23) `122.6K 🔥` `NEW`
1. [华为Logo价格121元](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BALogo%E4%BB%B7%E6%A0%BC121%E5%85%83%23) `122.3K 🔥` `NEW`
1. [凯恩韧带撕裂](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E9%9F%A7%E5%B8%A6%E6%92%95%E8%A3%82%23) `122.1K 🔥` `NEW`
1. [APEC荔枝酒有店铺2小时爆5000单](https://s.weibo.com/weibo?q=%23APEC%E8%8D%94%E6%9E%9D%E9%85%92%E6%9C%89%E5%BA%97%E9%93%BA2%E5%B0%8F%E6%97%B6%E7%88%865000%E5%8D%95%23) `121.5K 🔥` `NEW`
1. [Elk BLG](https://s.weibo.com/weibo?q=%23Elk%20BLG%23) `121.3K 🔥` `NEW`
1. [周也让我眼前一亮](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E8%AE%A9%E6%88%91%E7%9C%BC%E5%89%8D%E4%B8%80%E4%BA%AE%23) `121.0K 🔥` `NEW`
1. [许飞记得找我疑似是即兴发挥](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E8%AE%B0%E5%BE%97%E6%89%BE%E6%88%91%E7%96%91%E4%BC%BC%E6%98%AF%E5%8D%B3%E5%85%B4%E5%8F%91%E6%8C%A5%23) `120.7K 🔥` `NEW`
1. [C罗986球](https://s.weibo.com/weibo?q=%23C%E7%BD%97986%E7%90%83%23) `120.6K 🔥` `NEW`
1. [10岁好友溺亡同伴隐瞒4小时未求救](https://s.weibo.com/weibo?q=%2310%E5%B2%81%E5%A5%BD%E5%8F%8B%E6%BA%BA%E4%BA%A1%E5%90%8C%E4%BC%B4%E9%9A%90%E7%9E%924%E5%B0%8F%E6%97%B6%E6%9C%AA%E6%B1%82%E6%95%91%23) `117.7K 🔥` `NEW`
1. [刘宇宁这一段建议载入综艺史册](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%BF%99%E4%B8%80%E6%AE%B5%E5%BB%BA%E8%AE%AE%E8%BD%BD%E5%85%A5%E7%BB%BC%E8%89%BA%E5%8F%B2%E5%86%8C%23) `114.3K 🔥` `NEW`
1. [厉娜摘掉茶色眼镜了](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E6%91%98%E6%8E%89%E8%8C%B6%E8%89%B2%E7%9C%BC%E9%95%9C%E4%BA%86%23) `107.6K 🔥` `NEW`
1. [闺蜜在韩国的羊排店偶遇帅哥时](https://s.weibo.com/weibo?q=%23%E9%97%BA%E8%9C%9C%E5%9C%A8%E9%9F%A9%E5%9B%BD%E7%9A%84%E7%BE%8A%E6%8E%92%E5%BA%97%E5%81%B6%E9%81%87%E5%B8%85%E5%93%A5%E6%97%B6%23) `106.3K 🔥` `NEW`
1. [APEC盛会效应拉满](https://s.weibo.com/weibo?q=%23APEC%E7%9B%9B%E4%BC%9A%E6%95%88%E5%BA%94%E6%8B%89%E6%BB%A1%23) `670.1K 🔥` `+701%`
1. [张萌回应青稚打听式安慰](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E5%9B%9E%E5%BA%94%E9%9D%92%E7%A8%9A%E6%89%93%E5%90%AC%E5%BC%8F%E5%AE%89%E6%85%B0%23) `335.3K 🔥` `+437%`
1. [深圳人又开始原装出街了](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%BA%BA%E5%8F%88%E5%BC%80%E5%A7%8B%E5%8E%9F%E8%A3%85%E5%87%BA%E8%A1%97%E4%BA%86%23) `262.8K 🔥` `+547%`
1. [DeepSeek付费体验直线上升](https://s.weibo.com/weibo?q=%23DeepSeek%E4%BB%98%E8%B4%B9%E4%BD%93%E9%AA%8C%E7%9B%B4%E7%BA%BF%E4%B8%8A%E5%8D%87%23) `254.6K 🔥` `+135%`
1. [王子璇问马天宇你不会爱上我](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E9%97%AE%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%BD%A0%E4%B8%8D%E4%BC%9A%E7%88%B1%E4%B8%8A%E6%88%91%23) `236.0K 🔥` `+200%`
1. [林更新你怎么什么都敢演](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%9B%B4%E6%96%B0%E4%BD%A0%E6%80%8E%E4%B9%88%E4%BB%80%E4%B9%88%E9%83%BD%E6%95%A2%E6%BC%94%23) `196.0K 🔥` `+349%`
1. [成毅两京十五日演技表现](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E6%BC%94%E6%8A%80%E8%A1%A8%E7%8E%B0%23) `137.6K 🔥` `+224%`
1. [股民集体抛售科技股](https://s.weibo.com/weibo?q=%23%E8%82%A1%E6%B0%91%E9%9B%86%E4%BD%93%E6%8A%9B%E5%94%AE%E7%A7%91%E6%8A%80%E8%82%A1%23) `123.6K 🔥` `+211%`
1. [晋妈给李勒优铺的路是接手面馆](https://s.weibo.com/weibo?q=%23%E6%99%8B%E5%A6%88%E7%BB%99%E6%9D%8E%E5%8B%92%E4%BC%98%E9%93%BA%E7%9A%84%E8%B7%AF%E6%98%AF%E6%8E%A5%E6%89%8B%E9%9D%A2%E9%A6%86%23) `123.2K 🔥` `+70%`
1. [雕稳健不让青稚和主持人握手](https://s.weibo.com/weibo?q=%23%E9%9B%95%E7%A8%B3%E5%81%A5%E4%B8%8D%E8%AE%A9%E9%9D%92%E7%A8%9A%E5%92%8C%E4%B8%BB%E6%8C%81%E4%BA%BA%E6%8F%A1%E6%89%8B%23) `112.8K 🔥` `+183%`
1. [这就是妈](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E5%A6%88%23) `106.1K 🔥` `+165%`
1. [后会友期黄焖鸡事件原声视频](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E9%BB%84%E7%84%96%E9%B8%A1%E4%BA%8B%E4%BB%B6%E5%8E%9F%E5%A3%B0%E8%A7%86%E9%A2%91%23) `122.8K 🔥` `-40%`

Updated at 2026-11-21 10:05:05

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
