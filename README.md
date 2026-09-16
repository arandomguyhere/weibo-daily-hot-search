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

1. [南方医科大学跳楼](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E5%8C%BB%E7%A7%91%E5%A4%A7%E5%AD%A6%E8%B7%B3%E6%A5%BC%23) `18.9M 🔥` `NEW`
1. [警方调查南方医科大学跳楼](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E8%B0%83%E6%9F%A5%E5%8D%97%E6%96%B9%E5%8C%BB%E7%A7%91%E5%A4%A7%E5%AD%A6%E8%B7%B3%E6%A5%BC%23) `5.6M 🔥` `NEW`
1. [一组数看我国经济澎湃动能](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%BB%84%E6%95%B0%E7%9C%8B%E6%88%91%E5%9B%BD%E7%BB%8F%E6%B5%8E%E6%BE%8E%E6%B9%83%E5%8A%A8%E8%83%BD%23) `1.2M 🔥` `NEW`
1. [京东ZARA全球同步上新](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9CZARA%E5%85%A8%E7%90%83%E5%90%8C%E6%AD%A5%E4%B8%8A%E6%96%B0%23) `1.2M 🔥` `NEW`
1. [南方医科大学工作人员回应](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E5%8C%BB%E7%A7%91%E5%A4%A7%E5%AD%A6%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%9B%9E%E5%BA%94%23) `1.2M 🔥` `NEW`
1. [韩国尸皮针价格](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%B0%B8%E7%9A%AE%E9%92%88%E4%BB%B7%E6%A0%BC%23) `1.0M 🔥` `NEW`
1. [领衔主演傅诗淇](https://s.weibo.com/weibo?q=%23%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E5%82%85%E8%AF%97%E6%B7%87%23) `836.7K 🔥` `NEW`
1. [张凌赫安克品牌代言人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%AE%89%E5%85%8B%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `821.0K 🔥` `NEW`
1. [退休副省长家丢了243万元茅台名酒](https://s.weibo.com/weibo?q=%23%E9%80%80%E4%BC%91%E5%89%AF%E7%9C%81%E9%95%BF%E5%AE%B6%E4%B8%A2%E4%BA%86243%E4%B8%87%E5%85%83%E8%8C%85%E5%8F%B0%E5%90%8D%E9%85%92%23) `776.2K 🔥` `NEW`
1. [早春晴朗2原班人马](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%972%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%23) `649.8K 🔥` `NEW`
1. [优酷首个官宣告别信](https://s.weibo.com/weibo?q=%23%E4%BC%98%E9%85%B7%E9%A6%96%E4%B8%AA%E5%AE%98%E5%AE%A3%E5%91%8A%E5%88%AB%E4%BF%A1%23) `576.1K 🔥` `NEW`
1. [南方医科大学电话始终无人接通](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E5%8C%BB%E7%A7%91%E5%A4%A7%E5%AD%A6%E7%94%B5%E8%AF%9D%E5%A7%8B%E7%BB%88%E6%97%A0%E4%BA%BA%E6%8E%A5%E9%80%9A%23) `560.6K 🔥` `NEW`
1. [曝许嵩冯禧结婚了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%AE%B8%E5%B5%A9%E5%86%AF%E7%A6%A7%E7%BB%93%E5%A9%9A%E4%BA%86%23) `537.7K 🔥` `NEW`
1. [南方医科大学 导师权力](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E5%8C%BB%E7%A7%91%E5%A4%A7%E5%AD%A6%20%E5%AF%BC%E5%B8%88%E6%9D%83%E5%8A%9B%23) `527.1K 🔥` `NEW`
1. [陈建州突发心梗小S吓哭](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BB%BA%E5%B7%9E%E7%AA%81%E5%8F%91%E5%BF%83%E6%A2%97%E5%B0%8FS%E5%90%93%E5%93%AD%23) `495.4K 🔥` `NEW`
1. [南方医大 医学生培养压力](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E5%8C%BB%E5%A4%A7%20%E5%8C%BB%E5%AD%A6%E7%94%9F%E5%9F%B9%E5%85%BB%E5%8E%8B%E5%8A%9B%23) `481.3K 🔥` `NEW`
1. [曝赛力斯每卖一辆车车价10%归华为](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B5%9B%E5%8A%9B%E6%96%AF%E6%AF%8F%E5%8D%96%E4%B8%80%E8%BE%86%E8%BD%A6%E8%BD%A6%E4%BB%B710%25%E5%BD%92%E5%8D%8E%E4%B8%BA%23) `474.3K 🔥` `NEW`
1. [南方医科大学导师被曝压迫学生](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E5%8C%BB%E7%A7%91%E5%A4%A7%E5%AD%A6%E5%AF%BC%E5%B8%88%E8%A2%AB%E6%9B%9D%E5%8E%8B%E8%BF%AB%E5%AD%A6%E7%94%9F%23) `471.8K 🔥` `NEW`
1. [恋人](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%BA%BA%23) `458.9K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `457.9K 🔥` `NEW`
1. [鹿晗轻锋少年感](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%BD%BB%E9%94%8B%E5%B0%91%E5%B9%B4%E6%84%9F%23) `454.4K 🔥` `NEW`
1. [DeepSeek工程师回应爆火文章](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B7%A5%E7%A8%8B%E5%B8%88%E5%9B%9E%E5%BA%94%E7%88%86%E7%81%AB%E6%96%87%E7%AB%A0%23) `447.7K 🔥` `NEW`
1. [戒网瘾机构把家长当客户孩子当产品](https://s.weibo.com/weibo?q=%23%E6%88%92%E7%BD%91%E7%98%BE%E6%9C%BA%E6%9E%84%E6%8A%8A%E5%AE%B6%E9%95%BF%E5%BD%93%E5%AE%A2%E6%88%B7%E5%AD%A9%E5%AD%90%E5%BD%93%E4%BA%A7%E5%93%81%23) `438.9K 🔥` `NEW`
1. [问界](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%23) `434.5K 🔥` `NEW`
1. [中国女子首尔商场出手打白人](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E9%A6%96%E5%B0%94%E5%95%86%E5%9C%BA%E5%87%BA%E6%89%8B%E6%89%93%E7%99%BD%E4%BA%BA%23) `430.8K 🔥` `NEW`
1. [南方医科大学 令人心动的offer](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E5%8C%BB%E7%A7%91%E5%A4%A7%E5%AD%A6%20%E4%BB%A4%E4%BA%BA%E5%BF%83%E5%8A%A8%E7%9A%84offer%23) `429.9K 🔥` `NEW`
1. [优酷2027年度片单](https://s.weibo.com/weibo?q=%23%E4%BC%98%E9%85%B72027%E5%B9%B4%E5%BA%A6%E7%89%87%E5%8D%95%23) `429.5K 🔥` `NEW`
1. [雪迷宫2](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E8%BF%B7%E5%AE%AB2%23) `424.2K 🔥` `NEW`
1. [美联储议息会议加息预期](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%E8%AE%AE%E6%81%AF%E4%BC%9A%E8%AE%AE%E5%8A%A0%E6%81%AF%E9%A2%84%E6%9C%9F%23) `422.6K 🔥` `NEW`
1. [平陆运河今起通航](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E9%99%86%E8%BF%90%E6%B2%B3%E4%BB%8A%E8%B5%B7%E9%80%9A%E8%88%AA%23) `418.5K 🔥` `NEW`
1. [台湾有学生不理解桃园三结义](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E6%9C%89%E5%AD%A6%E7%94%9F%E4%B8%8D%E7%90%86%E8%A7%A3%E6%A1%83%E5%9B%AD%E4%B8%89%E7%BB%93%E4%B9%89%23) `416.1K 🔥` `NEW`
1. [盛夏晴朗选角](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E5%A4%8F%E6%99%B4%E6%9C%97%E9%80%89%E8%A7%92%23) `411.8K 🔥` `NEW`
1. [南方医科大学导师](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E5%8C%BB%E7%A7%91%E5%A4%A7%E5%AD%A6%E5%AF%BC%E5%B8%88%23) `411.0K 🔥` `NEW`
1. [盛夏晴朗早春晴朗续篇](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E5%A4%8F%E6%99%B4%E6%9C%97%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E7%BB%AD%E7%AF%87%23) `390.9K 🔥` `NEW`
1. [多方回应南方医科大学跳楼](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%8D%97%E6%96%B9%E5%8C%BB%E7%A7%91%E5%A4%A7%E5%AD%A6%E8%B7%B3%E6%A5%BC%23) `335.7K 🔥` `NEW`
1. [导师 老板](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E5%B8%88%20%E8%80%81%E6%9D%BF%23) `297.9K 🔥` `NEW`
1. [湖南卫视中秋之夜官宣阵容](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E4%B8%AD%E7%A7%8B%E4%B9%8B%E5%A4%9C%E5%AE%98%E5%AE%A3%E9%98%B5%E5%AE%B9%23) `289.7K 🔥` `NEW`
1. [惠英红田曦薇合作](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E7%94%B0%E6%9B%A6%E8%96%87%E5%90%88%E4%BD%9C%23) `276.2K 🔥` `NEW`
1. [平陆运河](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E9%99%86%E8%BF%90%E6%B2%B3%23) `271.0K 🔥` `NEW`
1. [一部剧凑齐四位天花板级狠人](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%83%A8%E5%89%A7%E5%87%91%E9%BD%90%E5%9B%9B%E4%BD%8D%E5%A4%A9%E8%8A%B1%E6%9D%BF%E7%BA%A7%E7%8B%A0%E4%BA%BA%23) `269.6K 🔥` `NEW`
1. [长剧主角被群像写没了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%89%A7%E4%B8%BB%E8%A7%92%E8%A2%AB%E7%BE%A4%E5%83%8F%E5%86%99%E6%B2%A1%E4%BA%86%23) `269.5K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `269.5K 🔥` `NEW`
1. [首位自导自演95花](https://s.weibo.com/weibo?q=%23%E9%A6%96%E4%BD%8D%E8%87%AA%E5%AF%BC%E8%87%AA%E6%BC%9495%E8%8A%B1%23) `269.3K 🔥` `NEW`
1. [陈建州服用治疗胸闷药不适感加剧](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BB%BA%E5%B7%9E%E6%9C%8D%E7%94%A8%E6%B2%BB%E7%96%97%E8%83%B8%E9%97%B7%E8%8D%AF%E4%B8%8D%E9%80%82%E6%84%9F%E5%8A%A0%E5%89%A7%23) `267.8K 🔥` `NEW`
1. [黄仁勋表示中国没人谈AI末日论](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E8%A1%A8%E7%A4%BA%E4%B8%AD%E5%9B%BD%E6%B2%A1%E4%BA%BA%E8%B0%88AI%E6%9C%AB%E6%97%A5%E8%AE%BA%23) `264.2K 🔥` `NEW`
1. [美国歌手遭枪杀车辆被打成马蜂窝](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%AD%8C%E6%89%8B%E9%81%AD%E6%9E%AA%E6%9D%80%E8%BD%A6%E8%BE%86%E8%A2%AB%E6%89%93%E6%88%90%E9%A9%AC%E8%9C%82%E7%AA%9D%23) `261.9K 🔥` `NEW`
1. [张凌赫和安克的蓝牙配对成功了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%92%8C%E5%AE%89%E5%85%8B%E7%9A%84%E8%93%9D%E7%89%99%E9%85%8D%E5%AF%B9%E6%88%90%E5%8A%9F%E4%BA%86%23) `261.6K 🔥` `NEW`
1. [范丞丞被爱豆身份顶号了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%A2%AB%E7%88%B1%E8%B1%86%E8%BA%AB%E4%BB%BD%E9%A1%B6%E5%8F%B7%E4%BA%86%23) `259.4K 🔥` `NEW`
1. [男子30年前存一万定期忘取](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9030%E5%B9%B4%E5%89%8D%E5%AD%98%E4%B8%80%E4%B8%87%E5%AE%9A%E6%9C%9F%E5%BF%98%E5%8F%96%23) `1.5M 🔥` `+798%`
1. [早睡真的可以改命](https://s.weibo.com/weibo?q=%23%E6%97%A9%E7%9D%A1%E7%9C%9F%E7%9A%84%E5%8F%AF%E4%BB%A5%E6%94%B9%E5%91%BD%23) `306.7K 🔥` `+93%`
1. [女律师被砸身亡凶手曾多次高空抛物](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%BE%8B%E5%B8%88%E8%A2%AB%E7%A0%B8%E8%BA%AB%E4%BA%A1%E5%87%B6%E6%89%8B%E6%9B%BE%E5%A4%9A%E6%AC%A1%E9%AB%98%E7%A9%BA%E6%8A%9B%E7%89%A9%23) `265.2K 🔥` `+79%`
1. [发朋友圈要有滞后性](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%A6%81%E6%9C%89%E6%BB%9E%E5%90%8E%E6%80%A7%23) `336.1K 🔥` `-43%`

Updated at 2026-09-16 12:57:48

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
