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

1. [手机涨价](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%23) `1.6M 🔥` `NEW`
1. [砸杨瀚森球迷已被批评教育](https://s.weibo.com/weibo?q=%23%E7%A0%B8%E6%9D%A8%E7%80%9A%E6%A3%AE%E7%90%83%E8%BF%B7%E5%B7%B2%E8%A2%AB%E6%89%B9%E8%AF%84%E6%95%99%E8%82%B2%23) `895.3K 🔥` `NEW`
1. [吉隆新增12座应急基站](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E6%96%B0%E5%A2%9E12%E5%BA%A7%E5%BA%94%E6%80%A5%E5%9F%BA%E7%AB%99%23) `710.3K 🔥` `NEW`
1. [那个用防窥屏的朋友](https://s.weibo.com/weibo?q=%23%E9%82%A3%E4%B8%AA%E7%94%A8%E9%98%B2%E7%AA%A5%E5%B1%8F%E7%9A%84%E6%9C%8B%E5%8F%8B%23) `672.8K 🔥` `NEW`
1. [生逢其时定档](https://s.weibo.com/weibo?q=%23%E7%94%9F%E9%80%A2%E5%85%B6%E6%97%B6%E5%AE%9A%E6%A1%A3%23) `470.8K 🔥` `NEW`
1. [GEN送T1进世界赛](https://s.weibo.com/weibo?q=%23GEN%E9%80%81T1%E8%BF%9B%E4%B8%96%E7%95%8C%E8%B5%9B%23) `430.6K 🔥` `NEW`
1. [开学第一天打卡](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%AD%A6%E7%AC%AC%E4%B8%80%E5%A4%A9%E6%89%93%E5%8D%A1%23) `421.8K 🔥` `NEW`
1. [全校第一个生娃的00后清华女大](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%A0%A1%E7%AC%AC%E4%B8%80%E4%B8%AA%E7%94%9F%E5%A8%83%E7%9A%8400%E5%90%8E%E6%B8%85%E5%8D%8E%E5%A5%B3%E5%A4%A7%23) `420.6K 🔥` `NEW`
1. [于东来晒胖东来业绩](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E6%99%92%E8%83%96%E4%B8%9C%E6%9D%A5%E4%B8%9A%E7%BB%A9%23) `411.3K 🔥` `NEW`
1. [T1晋级S16全球总决赛](https://s.weibo.com/weibo?q=%23T1%E6%99%8B%E7%BA%A7S16%E5%85%A8%E7%90%83%E6%80%BB%E5%86%B3%E8%B5%9B%23) `258.9K 🔥` `NEW`
1. [陈丽君主演首部电视剧要来了](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E4%B8%BB%E6%BC%94%E9%A6%96%E9%83%A8%E7%94%B5%E8%A7%86%E5%89%A7%E8%A6%81%E6%9D%A5%E4%BA%86%23) `216.9K 🔥` `NEW`
1. [家长撕孩子作业老师怎么回复](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E6%92%95%E5%AD%A9%E5%AD%90%E4%BD%9C%E4%B8%9A%E8%80%81%E5%B8%88%E6%80%8E%E4%B9%88%E5%9B%9E%E5%A4%8D%23) `216.7K 🔥` `NEW`
1. [年轻人断亲潮](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%96%AD%E4%BA%B2%E6%BD%AE%23) `214.4K 🔥` `NEW`
1. [妹妹被扔土崖致死姐姐靠吃药入睡](https://s.weibo.com/weibo?q=%23%E5%A6%B9%E5%A6%B9%E8%A2%AB%E6%89%94%E5%9C%9F%E5%B4%96%E8%87%B4%E6%AD%BB%E5%A7%90%E5%A7%90%E9%9D%A0%E5%90%83%E8%8D%AF%E5%85%A5%E7%9D%A1%23) `213.1K 🔥` `NEW`
1. [李敏镐回春了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%95%8F%E9%95%90%E5%9B%9E%E6%98%A5%E4%BA%86%23) `212.7K 🔥` `NEW`
1. [李杰灵870万买了个离海只有30米的房子](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9D%B0%E7%81%B5870%E4%B8%87%E4%B9%B0%E4%BA%86%E4%B8%AA%E7%A6%BB%E6%B5%B7%E5%8F%AA%E6%9C%8930%E7%B1%B3%E7%9A%84%E6%88%BF%E5%AD%90%23) `210.7K 🔥` `NEW`
1. [孙千你好辣](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E4%BD%A0%E5%A5%BD%E8%BE%A3%23) `209.3K 🔥` `NEW`
1. [吉隆口岸陆上通道即将打通](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E9%99%86%E4%B8%8A%E9%80%9A%E9%81%93%E5%8D%B3%E5%B0%86%E6%89%93%E9%80%9A%23) `208.2K 🔥` `NEW`
1. [周也董璇合照好像P的](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E8%91%A3%E7%92%87%E5%90%88%E7%85%A7%E5%A5%BD%E5%83%8FP%E7%9A%84%23) `206.7K 🔥` `NEW`
1. [周奇在无畏直播间互动](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%A5%87%E5%9C%A8%E6%97%A0%E7%95%8F%E7%9B%B4%E6%92%AD%E9%97%B4%E4%BA%92%E5%8A%A8%23) `205.2K 🔥` `NEW`
1. [可可里小姐闭店 女装退货率](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E5%8F%AF%E9%87%8C%E5%B0%8F%E5%A7%90%E9%97%AD%E5%BA%97%20%E5%A5%B3%E8%A3%85%E9%80%80%E8%B4%A7%E7%8E%87%23) `201.7K 🔥` `NEW`
1. [Angelababy15岁写真](https://s.weibo.com/weibo?q=%23Angelababy15%E5%B2%81%E5%86%99%E7%9C%9F%23) `199.3K 🔥` `NEW`
1. [土崖杀妻案](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E5%B4%96%E6%9D%80%E5%A6%BB%E6%A1%88%23) `198.5K 🔥` `NEW`
1. [林孝埈晒新华字典开学氛围拉满](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E6%99%92%E6%96%B0%E5%8D%8E%E5%AD%97%E5%85%B8%E5%BC%80%E5%AD%A6%E6%B0%9B%E5%9B%B4%E6%8B%89%E6%BB%A1%23) `197.2K 🔥` `NEW`
1. [胡锡进称劳动仲裁要硬起来](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E7%A7%B0%E5%8A%B3%E5%8A%A8%E4%BB%B2%E8%A3%81%E8%A6%81%E7%A1%AC%E8%B5%B7%E6%9D%A5%23) `196.2K 🔥` `NEW`
1. [穆祉丞打耳洞了](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%89%93%E8%80%B3%E6%B4%9E%E4%BA%86%23) `195.7K 🔥` `NEW`
1. [白鹿白裙蘑菇头](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%99%BD%E8%A3%99%E8%98%91%E8%8F%87%E5%A4%B4%23) `195.2K 🔥` `NEW`
1. [32岁女子反复流产查出体内镉超标](https://s.weibo.com/weibo?q=%2332%E5%B2%81%E5%A5%B3%E5%AD%90%E5%8F%8D%E5%A4%8D%E6%B5%81%E4%BA%A7%E6%9F%A5%E5%87%BA%E4%BD%93%E5%86%85%E9%95%89%E8%B6%85%E6%A0%87%23) `194.6K 🔥` `NEW`
1. [苏州一学校初一超90个班](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E5%B7%9E%E4%B8%80%E5%AD%A6%E6%A0%A1%E5%88%9D%E4%B8%80%E8%B6%8590%E4%B8%AA%E7%8F%AD%23) `193.9K 🔥` `NEW`
1. [开学第一课](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%AD%A6%E7%AC%AC%E4%B8%80%E8%AF%BE%23) `193.1K 🔥` `NEW`
1. [TOP发布会员违约处理公告](https://s.weibo.com/weibo?q=%23TOP%E5%8F%91%E5%B8%83%E4%BC%9A%E5%91%98%E8%BF%9D%E7%BA%A6%E5%A4%84%E7%90%86%E5%85%AC%E5%91%8A%23) `192.7K 🔥` `NEW`
1. [钎城给无畏送礼物](https://s.weibo.com/weibo?q=%23%E9%92%8E%E5%9F%8E%E7%BB%99%E6%97%A0%E7%95%8F%E9%80%81%E7%A4%BC%E7%89%A9%23) `191.3K 🔥` `NEW`
1. [曝赵樱子得抑郁症了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B5%B5%E6%A8%B1%E5%AD%90%E5%BE%97%E6%8A%91%E9%83%81%E7%97%87%E4%BA%86%23) `189.7K 🔥` `NEW`
1. [时尚COSMO金九内页](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%B0%9ACOSMO%E9%87%91%E4%B9%9D%E5%86%85%E9%A1%B5%23) `189.1K 🔥` `NEW`
1. [RW对战AG](https://s.weibo.com/weibo?q=%23RW%E5%AF%B9%E6%88%98AG%23) `183.4K 🔥` `NEW`
1. [高圆圆和赵又廷讨论过谁先离开](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%9C%86%E5%9C%86%E5%92%8C%E8%B5%B5%E5%8F%88%E5%BB%B7%E8%AE%A8%E8%AE%BA%E8%BF%87%E8%B0%81%E5%85%88%E7%A6%BB%E5%BC%80%23) `182.9K 🔥` `NEW`
1. [一个狗狗找不到主人的视频火了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E7%8B%97%E7%8B%97%E6%89%BE%E4%B8%8D%E5%88%B0%E4%B8%BB%E4%BA%BA%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `182.1K 🔥` `NEW`
1. [用洗碗机洗家里的老古董](https://s.weibo.com/weibo?q=%23%E7%94%A8%E6%B4%97%E7%A2%97%E6%9C%BA%E6%B4%97%E5%AE%B6%E9%87%8C%E7%9A%84%E8%80%81%E5%8F%A4%E8%91%A3%23) `171.7K 🔥` `NEW`
1. [女孩被踢出845个工作群无奈离职](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%A2%AB%E8%B8%A2%E5%87%BA845%E4%B8%AA%E5%B7%A5%E4%BD%9C%E7%BE%A4%E6%97%A0%E5%A5%88%E7%A6%BB%E8%81%8C%23) `171.5K 🔥` `NEW`
1. [印度16岁少女被骗上卧铺大巴遭轮奸](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A616%E5%B2%81%E5%B0%91%E5%A5%B3%E8%A2%AB%E9%AA%97%E4%B8%8A%E5%8D%A7%E9%93%BA%E5%A4%A7%E5%B7%B4%E9%81%AD%E8%BD%AE%E5%A5%B8%23) `170.5K 🔥` `NEW`
1. [老人回应拒绝谅解孙女多次偷拿财物](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%9B%9E%E5%BA%94%E6%8B%92%E7%BB%9D%E8%B0%85%E8%A7%A3%E5%AD%99%E5%A5%B3%E5%A4%9A%E6%AC%A1%E5%81%B7%E6%8B%BF%E8%B4%A2%E7%89%A9%23) `160.8K 🔥` `NEW`
1. [苹果否认新iPhone附赠充电头有线耳机](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%90%A6%E8%AE%A4%E6%96%B0iPhone%E9%99%84%E8%B5%A0%E5%85%85%E7%94%B5%E5%A4%B4%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%23) `160.3K 🔥` `NEW`
1. [丁程鑫拍的100张拍立得](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E6%8B%8D%E7%9A%84100%E5%BC%A0%E6%8B%8D%E7%AB%8B%E5%BE%97%23) `144.5K 🔥` `NEW`
1. [李云霄首部古装女主剧开机](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BA%91%E9%9C%84%E9%A6%96%E9%83%A8%E5%8F%A4%E8%A3%85%E5%A5%B3%E4%B8%BB%E5%89%A7%E5%BC%80%E6%9C%BA%23) `124.6K 🔥` `NEW`
1. [享受家务外包带来的便利](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E5%8F%97%E5%AE%B6%E5%8A%A1%E5%A4%96%E5%8C%85%E5%B8%A6%E6%9D%A5%E7%9A%84%E4%BE%BF%E5%88%A9%23) `115.4K 🔥` `NEW`
1. [罗永浩吐槽车企AI大模型太垃圾](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E5%90%90%E6%A7%BD%E8%BD%A6%E4%BC%81AI%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%A4%AA%E5%9E%83%E5%9C%BE%23) `114.5K 🔥` `NEW`
1. [谷爱凌13岁开始读育儿手册](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C13%E5%B2%81%E5%BC%80%E5%A7%8B%E8%AF%BB%E8%82%B2%E5%84%BF%E6%89%8B%E5%86%8C%23) `113.7K 🔥` `NEW`
1. [2027国际乒乓球赛历公布](https://s.weibo.com/weibo?q=%232027%E5%9B%BD%E9%99%85%E4%B9%92%E4%B9%93%E7%90%83%E8%B5%9B%E5%8E%86%E5%85%AC%E5%B8%83%23) `107.9K 🔥` `NEW`
1. [井柏然栾念被后背吻的表情](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E6%A0%BE%E5%BF%B5%E8%A2%AB%E5%90%8E%E8%83%8C%E5%90%BB%E7%9A%84%E8%A1%A8%E6%83%85%23) `191.5K 🔥` `+28%`
1. [深圳校服真香](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%A0%A1%E6%9C%8D%E7%9C%9F%E9%A6%99%23) `204.4K 🔥` `-87%`
1. [井柏然的吻戏是弯腰往上亲](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E7%9A%84%E5%90%BB%E6%88%8F%E6%98%AF%E5%BC%AF%E8%85%B0%E5%BE%80%E4%B8%8A%E4%BA%B2%23) `201.3K 🔥` `-70%`

Updated at 2026-09-01 20:45:43

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
