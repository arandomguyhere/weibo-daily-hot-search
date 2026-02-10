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

1. [孙龙失误 (Sun Long made a mistake)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E5%A4%B1%E8%AF%AF%23) `1.7M 🔥` `NEW`
1. [林孝埈捂脸长时间低头](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E6%8D%82%E8%84%B8%E9%95%BF%E6%97%B6%E9%97%B4%E4%BD%8E%E5%A4%B4%23) `898.2K 🔥` `NEW`
1. [中国无人机大山里运腊肠](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%A4%A7%E5%B1%B1%E9%87%8C%E8%BF%90%E8%85%8A%E8%82%A0%23) `755.5K 🔥` `NEW`
1. [兴汉胜境汉风中国年](https://s.weibo.com/weibo?q=%23%E5%85%B4%E6%B1%89%E8%83%9C%E5%A2%83%E6%B1%89%E9%A3%8E%E4%B8%AD%E5%9B%BD%E5%B9%B4%23) `669.1K 🔥` `NEW`
1. [曲春雨退役](https://s.weibo.com/weibo?q=%23%E6%9B%B2%E6%98%A5%E9%9B%A8%E9%80%80%E5%BD%B9%23) `319.2K 🔥` `NEW`
1. [伯希和助力米兰赛场冲刺时刻](https://s.weibo.com/weibo?q=%23%E4%BC%AF%E5%B8%8C%E5%92%8C%E5%8A%A9%E5%8A%9B%E7%B1%B3%E5%85%B0%E8%B5%9B%E5%9C%BA%E5%86%B2%E5%88%BA%E6%97%B6%E5%88%BB%23) `209.6K 🔥` `NEW`
1. [原来GAI早就官宣了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5GAI%E6%97%A9%E5%B0%B1%E5%AE%98%E5%AE%A3%E4%BA%86%23) `152.9K 🔥` `NEW`
1. [哇唧唧哇年会](https://s.weibo.com/weibo?q=%23%E5%93%87%E5%94%A7%E5%94%A7%E5%93%87%E5%B9%B4%E4%BC%9A%23) `151.3K 🔥` `NEW`
1. [杨洋换风格了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%8D%A2%E9%A3%8E%E6%A0%BC%E4%BA%86%23) `149.3K 🔥` `NEW`
1. [宋威龙分享手机里的私藏照片](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%88%86%E4%BA%AB%E6%89%8B%E6%9C%BA%E9%87%8C%E7%9A%84%E7%A7%81%E8%97%8F%E7%85%A7%E7%89%87%23) `148.6K 🔥` `NEW`
1. [12306回应高铁座椅钻出活蜥蜴 (12306 responded to a live lizard emerging from a high-speed rail seat)](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E9%AB%98%E9%93%81%E5%BA%A7%E6%A4%85%E9%92%BB%E5%87%BA%E6%B4%BB%E8%9C%A5%E8%9C%B4%23) `148.1K 🔥` `NEW`
1. [白敬亭真的拿出手机调静音了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E7%9C%9F%E7%9A%84%E6%8B%BF%E5%87%BA%E6%89%8B%E6%9C%BA%E8%B0%83%E9%9D%99%E9%9F%B3%E4%BA%86%23) `143.7K 🔥` `NEW`
1. [深圳一公司发巨额年终奖](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E5%85%AC%E5%8F%B8%E5%8F%91%E5%B7%A8%E9%A2%9D%E5%B9%B4%E7%BB%88%E5%A5%96%23) `138.4K 🔥` `NEW`
1. [74岁肥猫被医生建议注射药物镇痛](https://s.weibo.com/weibo?q=%2374%E5%B2%81%E8%82%A5%E7%8C%AB%E8%A2%AB%E5%8C%BB%E7%94%9F%E5%BB%BA%E8%AE%AE%E6%B3%A8%E5%B0%84%E8%8D%AF%E7%89%A9%E9%95%87%E7%97%9B%23) `135.4K 🔥` `NEW`
1. [微博之夜红毯封神了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%E7%BA%A2%E6%AF%AF%E5%B0%81%E7%A5%9E%E4%BA%86%23) `127.7K 🔥` `NEW`
1. [郑则仕因不想终生注射药物开始跑步](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%88%99%E4%BB%95%E5%9B%A0%E4%B8%8D%E6%83%B3%E7%BB%88%E7%94%9F%E6%B3%A8%E5%B0%84%E8%8D%AF%E7%89%A9%E5%BC%80%E5%A7%8B%E8%B7%91%E6%AD%A5%23) `126.9K 🔥` `NEW`
1. [爱泼斯坦别墅内老虎标本栩栩如生](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E5%88%AB%E5%A2%85%E5%86%85%E8%80%81%E8%99%8E%E6%A0%87%E6%9C%AC%E6%A0%A9%E6%A0%A9%E5%A6%82%E7%94%9F%23) `124.7K 🔥` `NEW`
1. [微博之夜怼脸拍合集](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%E6%80%BC%E8%84%B8%E6%8B%8D%E5%90%88%E9%9B%86%23) `114.6K 🔥` `NEW`
1. [金像奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%23) `112.6K 🔥` `NEW`
1. [特朗普表面祝贺高市私下大发雷霆](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%A1%A8%E9%9D%A2%E7%A5%9D%E8%B4%BA%E9%AB%98%E5%B8%82%E7%A7%81%E4%B8%8B%E5%A4%A7%E5%8F%91%E9%9B%B7%E9%9C%86%23) `108.6K 🔥` `NEW`
1. [张楚桐 交接棒 (Zhang Chutong handing over the baton)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A5%9A%E6%A1%90%20%E4%BA%A4%E6%8E%A5%E6%A3%92%23) `106.4K 🔥` `NEW`
1. [儿子药物过敏女子协商未果怒砸设备](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E8%8D%AF%E7%89%A9%E8%BF%87%E6%95%8F%E5%A5%B3%E5%AD%90%E5%8D%8F%E5%95%86%E6%9C%AA%E6%9E%9C%E6%80%92%E7%A0%B8%E8%AE%BE%E5%A4%87%23) `101.0K 🔥` `NEW`
1. [刘少昂混接赛后安慰队友](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E6%B7%B7%E6%8E%A5%E8%B5%9B%E5%90%8E%E5%AE%89%E6%85%B0%E9%98%9F%E5%8F%8B%23) `100.2K 🔥` `NEW`
1. [OMG战胜EDG](https://s.weibo.com/weibo?q=%23OMG%E6%88%98%E8%83%9CEDG%23) `94.8K 🔥` `NEW`
1. [35岁以上租房族越来越多](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E4%BB%A5%E4%B8%8A%E7%A7%9F%E6%88%BF%E6%97%8F%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%23) `88.9K 🔥` `NEW`
1. [风箫登场三周年发长文](https://s.weibo.com/weibo?q=%23%E9%A3%8E%E7%AE%AB%E7%99%BB%E5%9C%BA%E4%B8%89%E5%91%A8%E5%B9%B4%E5%8F%91%E9%95%BF%E6%96%87%23) `88.9K 🔥` `NEW`
1. [20岁小伙做新郎跟妆师月入2万](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E5%B0%8F%E4%BC%99%E5%81%9A%E6%96%B0%E9%83%8E%E8%B7%9F%E5%A6%86%E5%B8%88%E6%9C%88%E5%85%A52%E4%B8%87%23) `85.3K 🔥` `NEW`
1. [九尾四连胜后的自拍](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E5%9B%9B%E8%BF%9E%E8%83%9C%E5%90%8E%E7%9A%84%E8%87%AA%E6%8B%8D%23) `85.1K 🔥` `NEW`
1. [武大靖解说](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E9%9D%96%E8%A7%A3%E8%AF%B4%23) `85.0K 🔥` `NEW`
1. [生命树](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%23) `233.3K 🔥` `+73%`
1. [关系再好也不要说的事 (Things you shouldn’t say no matter how good your relationship is)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E7%B3%BB%E5%86%8D%E5%A5%BD%E4%B9%9F%E4%B8%8D%E8%A6%81%E8%AF%B4%E7%9A%84%E4%BA%8B%23) `149.5K 🔥` `+49%`
1. [女子年会中4克黄金熔后变白银 (4 grams of gold melted and turned into silver at women's annual party)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B9%B4%E4%BC%9A%E4%B8%AD4%E5%85%8B%E9%BB%84%E9%87%91%E7%86%94%E5%90%8E%E5%8F%98%E7%99%BD%E9%93%B6%23) `194.8K 🔥`
1. [中国短道混接无缘奖牌 (China's short track hybrid misses medals)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9F%AD%E9%81%93%E6%B7%B7%E6%8E%A5%E6%97%A0%E7%BC%98%E5%A5%96%E7%89%8C%23) `379.6K 🔥` `-83%`
1. [武大靖笑得太大声了](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E9%9D%96%E7%AC%91%E5%BE%97%E5%A4%AA%E5%A4%A7%E5%A3%B0%E4%BA%86%23) `200.8K 🔥` `-61%`
1. [央视网络春晚](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BD%91%E7%BB%9C%E6%98%A5%E6%99%9A%23) `173.5K 🔥` `-66%`
1. [韩国申诉未果](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%94%B3%E8%AF%89%E6%9C%AA%E6%9E%9C%23) `159.0K 🔥` `-46%`
1. [陈星旭 情商 (Chen Xingxu Emotional Intelligence)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%20%E6%83%85%E5%95%86%23) `157.2K 🔥` `-68%`
1. [井柏然刘雯机场十指紧扣](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%98%E9%9B%AF%E6%9C%BA%E5%9C%BA%E5%8D%81%E6%8C%87%E7%B4%A7%E6%89%A3%23) `156.5K 🔥` `-66%`
1. [王曼昱决胜局擦边球尊重裁判](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%86%B3%E8%83%9C%E5%B1%80%E6%93%A6%E8%BE%B9%E7%90%83%E5%B0%8A%E9%87%8D%E8%A3%81%E5%88%A4%23) `154.4K 🔥` `-68%`
1. [于正回应明星扎堆前往大孤山](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E6%98%8E%E6%98%9F%E6%89%8E%E5%A0%86%E5%89%8D%E5%BE%80%E5%A4%A7%E5%AD%A4%E5%B1%B1%23) `149.2K 🔥` `-61%`
1. [小年](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B9%B4%23) `148.8K 🔥` `-22%`
1. [我们的少年时代2 双男主](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%20%E5%8F%8C%E7%94%B7%E4%B8%BB%23) `148.3K 🔥` `-38%`
1. [洪世贤掉到榜二了](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E4%B8%96%E8%B4%A4%E6%8E%89%E5%88%B0%E6%A6%9C%E4%BA%8C%E4%BA%86%23) `147.7K 🔥` `-38%`
1. [白鹿孟子义一起去了大孤山 (Bailu and Meng Ziyi went to Dagushan together)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%80%E8%B5%B7%E5%8E%BB%E4%BA%86%E5%A4%A7%E5%AD%A4%E5%B1%B1%23) `133.8K 🔥` `-43%`
1. [米哈游宣布解雇常年法律顾问 (MiHoYo announces the dismissal of its long-term legal advisor)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%93%88%E6%B8%B8%E5%AE%A3%E5%B8%83%E8%A7%A3%E9%9B%87%E5%B8%B8%E5%B9%B4%E6%B3%95%E5%BE%8B%E9%A1%BE%E9%97%AE%23) `131.8K 🔥` `-68%`
1. [瑞幸回应杯套出现错别字](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%9B%9E%E5%BA%94%E6%9D%AF%E5%A5%97%E5%87%BA%E7%8E%B0%E9%94%99%E5%88%AB%E5%AD%97%23) `126.9K 🔥` `-56%`
1. [薛之谦万兽之王演唱会官宣](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%B8%87%E5%85%BD%E4%B9%8B%E7%8E%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `126.9K 🔥` `-41%`
1. [林孝埈晋级](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E6%99%8B%E7%BA%A7%23) `123.6K 🔥` `-61%`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `122.8K 🔥` `-27%`
1. [短道速滑混团接力 (Short track speed skating mixed team relay)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%E6%B7%B7%E5%9B%A2%E6%8E%A5%E5%8A%9B%23) `112.6K 🔥` `-91%`
1. [女子短道速滑500米预赛](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91500%E7%B1%B3%E9%A2%84%E8%B5%9B%23) `112.5K 🔥` `-85%`
1. [汕头4200一晚的亚朵已订满 (The Atour hotel in Shantou that costs 4,200 a night is fully booked)](https://s.weibo.com/weibo?q=%23%E6%B1%95%E5%A4%B44200%E4%B8%80%E6%99%9A%E7%9A%84%E4%BA%9A%E6%9C%B5%E5%B7%B2%E8%AE%A2%E6%BB%A1%23) `106.0K 🔥` `-40%`

Updated at 2026-02-10 22:05:41

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
