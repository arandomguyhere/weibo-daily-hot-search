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

1. [中方放弃谈判直接抓佤邦副总司令](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E6%94%BE%E5%BC%83%E8%B0%88%E5%88%A4%E7%9B%B4%E6%8E%A5%E6%8A%93%E4%BD%A4%E9%82%A6%E5%89%AF%E6%80%BB%E5%8F%B8%E4%BB%A4%23) `2.0M 🔥` `NEW`
1. [明学昌畏罪自杀身亡照片曝光](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%AD%A6%E6%98%8C%E7%95%8F%E7%BD%AA%E8%87%AA%E6%9D%80%E8%BA%AB%E4%BA%A1%E7%85%A7%E7%89%87%E6%9B%9D%E5%85%89%23) `955.3K 🔥` `NEW`
1. [流动的中国活力拉满](https://s.weibo.com/weibo?q=%23%E6%B5%81%E5%8A%A8%E7%9A%84%E4%B8%AD%E5%9B%BD%E6%B4%BB%E5%8A%9B%E6%8B%89%E6%BB%A1%23) `784.1K 🔥` `NEW`
1. [缅方一直说没有中国人死](https://s.weibo.com/weibo?q=%23%E7%BC%85%E6%96%B9%E4%B8%80%E7%9B%B4%E8%AF%B4%E6%B2%A1%E6%9C%89%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%AD%BB%23) `656.8K 🔥` `NEW`
1. [缅北电诈主犯杀陌生人祭天](https://s.weibo.com/weibo?q=%23%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E4%B8%BB%E7%8A%AF%E6%9D%80%E9%99%8C%E7%94%9F%E4%BA%BA%E7%A5%AD%E5%A4%A9%23) `643.0K 🔥` `NEW`
1. [高芙表示赛后已向孙心然道歉](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%8A%99%E8%A1%A8%E7%A4%BA%E8%B5%9B%E5%90%8E%E5%B7%B2%E5%90%91%E5%AD%99%E5%BF%83%E7%84%B6%E9%81%93%E6%AD%89%23) `488.5K 🔥` `NEW`
1. [十一假期这样吃健康又尽兴](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%80%E5%81%87%E6%9C%9F%E8%BF%99%E6%A0%B7%E5%90%83%E5%81%A5%E5%BA%B7%E5%8F%88%E5%B0%BD%E5%85%B4%23) `488.0K 🔥` `NEW`
1. [蒋欣让谭松韵别看兰香如故大结局](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%E8%AE%A9%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%88%AB%E7%9C%8B%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E5%A4%A7%E7%BB%93%E5%B1%80%23) `452.7K 🔥` `NEW`
1. [重庆盗矿案件7人死亡](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E7%9B%97%E7%9F%BF%E6%A1%88%E4%BB%B67%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `433.9K 🔥` `NEW`
1. [网友称泰山躲雨80元一小时](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%A7%B0%E6%B3%B0%E5%B1%B1%E8%BA%B2%E9%9B%A880%E5%85%83%E4%B8%80%E5%B0%8F%E6%97%B6%23) `432.2K 🔥` `NEW`
1. [冲绳民众质问日本政府](https://s.weibo.com/weibo?q=%23%E5%86%B2%E7%BB%B3%E6%B0%91%E4%BC%97%E8%B4%A8%E9%97%AE%E6%97%A5%E6%9C%AC%E6%94%BF%E5%BA%9C%23) `363.0K 🔥` `NEW`
1. [陈楚生刑事民事重拳追责](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A5%9A%E7%94%9F%E5%88%91%E4%BA%8B%E6%B0%91%E4%BA%8B%E9%87%8D%E6%8B%B3%E8%BF%BD%E8%B4%A3%23) `362.3K 🔥` `NEW`
1. [黄子韬直播回应王鹤棣为人如何](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E7%9B%B4%E6%92%AD%E5%9B%9E%E5%BA%94%E7%8E%8B%E9%B9%A4%E6%A3%A3%E4%B8%BA%E4%BA%BA%E5%A6%82%E4%BD%95%23) `356.8K 🔥` `NEW`
1. [黑泽曾爆料代露娃爱打麻将](https://s.weibo.com/weibo?q=%23%E9%BB%91%E6%B3%BD%E6%9B%BE%E7%88%86%E6%96%99%E4%BB%A3%E9%9C%B2%E5%A8%83%E7%88%B1%E6%89%93%E9%BA%BB%E5%B0%86%23) `334.7K 🔥` `NEW`
1. [李荣浩回复邓紫棋](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E5%9B%9E%E5%A4%8D%E9%82%93%E7%B4%AB%E6%A3%8B%23) `304.6K 🔥` `NEW`
1. [赌博输几千万发朋友圈谈创业心酸](https://s.weibo.com/weibo?q=%23%E8%B5%8C%E5%8D%9A%E8%BE%93%E5%87%A0%E5%8D%83%E4%B8%87%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%B0%88%E5%88%9B%E4%B8%9A%E5%BF%83%E9%85%B8%23) `258.4K 🔥` `NEW`
1. [王一博你到底怎么了开心成这样](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%BD%A0%E5%88%B0%E5%BA%95%E6%80%8E%E4%B9%88%E4%BA%86%E5%BC%80%E5%BF%83%E6%88%90%E8%BF%99%E6%A0%B7%23) `257.0K 🔥` `NEW`
1. [黄仁勋世界巡演](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E4%B8%96%E7%95%8C%E5%B7%A1%E6%BC%94%23) `252.8K 🔥` `NEW`
1. [明珍珍笑着讲述杀人埋尸](https://s.weibo.com/weibo?q=%23%E6%98%8E%E7%8F%8D%E7%8F%8D%E7%AC%91%E7%9D%80%E8%AE%B2%E8%BF%B0%E6%9D%80%E4%BA%BA%E5%9F%8B%E5%B0%B8%23) `249.6K 🔥` `NEW`
1. [博主称已婚宝妈不吃苦是假象](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E7%A7%B0%E5%B7%B2%E5%A9%9A%E5%AE%9D%E5%A6%88%E4%B8%8D%E5%90%83%E8%8B%A6%E6%98%AF%E5%81%87%E8%B1%A1%23) `248.3K 🔥` `NEW`
1. [老人称女儿退休每月拿两万多](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%A7%B0%E5%A5%B3%E5%84%BF%E9%80%80%E4%BC%91%E6%AF%8F%E6%9C%88%E6%8B%BF%E4%B8%A4%E4%B8%87%E5%A4%9A%23) `244.0K 🔥` `NEW`
1. [诺奖得主黑格曼曾为学生怒怼房东](https://s.weibo.com/weibo?q=%23%E8%AF%BA%E5%A5%96%E5%BE%97%E4%B8%BB%E9%BB%91%E6%A0%BC%E6%9B%BC%E6%9B%BE%E4%B8%BA%E5%AD%A6%E7%94%9F%E6%80%92%E6%80%BC%E6%88%BF%E4%B8%9C%23) `242.6K 🔥` `NEW`
1. [中国代表点名警告英澳日等国](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BB%A3%E8%A1%A8%E7%82%B9%E5%90%8D%E8%AD%A6%E5%91%8A%E8%8B%B1%E6%BE%B3%E6%97%A5%E7%AD%89%E5%9B%BD%23) `242.5K 🔥` `NEW`
1. [你身边那个无痕旅游的朋友](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%BA%AB%E8%BE%B9%E9%82%A3%E4%B8%AA%E6%97%A0%E7%97%95%E6%97%85%E6%B8%B8%E7%9A%84%E6%9C%8B%E5%8F%8B%23) `225.3K 🔥` `NEW`
1. [沙玥儿 陈鹤文](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%8E%A5%E5%84%BF%20%E9%99%88%E9%B9%A4%E6%96%87%23) `217.9K 🔥` `NEW`
1. [瑞幸官微下场](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%AE%98%E5%BE%AE%E4%B8%8B%E5%9C%BA%23) `215.8K 🔥` `NEW`
1. [瑞幸发刘亦菲宣传照](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%8F%91%E5%88%98%E4%BA%A6%E8%8F%B2%E5%AE%A3%E4%BC%A0%E7%85%A7%23) `215.4K 🔥` `NEW`
1. [杰伦布朗76人首秀22分](https://s.weibo.com/weibo?q=%23%E6%9D%B0%E4%BC%A6%E5%B8%83%E6%9C%9776%E4%BA%BA%E9%A6%96%E7%A7%8022%E5%88%86%23) `204.6K 🔥` `NEW`
1. [原来人和人的差距从小就有了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%BA%BA%E5%92%8C%E4%BA%BA%E7%9A%84%E5%B7%AE%E8%B7%9D%E4%BB%8E%E5%B0%8F%E5%B0%B1%E6%9C%89%E4%BA%86%23) `186.2K 🔥` `NEW`
1. [湖人vs国王](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BAvs%E5%9B%BD%E7%8E%8B%23) `158.3K 🔥` `NEW`
1. [魅影神捕热度](https://s.weibo.com/weibo?q=%23%E9%AD%85%E5%BD%B1%E7%A5%9E%E6%8D%95%E7%83%AD%E5%BA%A6%23) `154.8K 🔥` `NEW`
1. [辛芷蕾chanel大秀G社生图](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BEchanel%E5%A4%A7%E7%A7%80G%E7%A4%BE%E7%94%9F%E5%9B%BE%23) `154.6K 🔥` `NEW`
1. [崔晋妈妈说李勒优对钱没什么概念](https://s.weibo.com/weibo?q=%23%E5%B4%94%E6%99%8B%E5%A6%88%E5%A6%88%E8%AF%B4%E6%9D%8E%E5%8B%92%E4%BC%98%E5%AF%B9%E9%92%B1%E6%B2%A1%E4%BB%80%E4%B9%88%E6%A6%82%E5%BF%B5%23) `153.1K 🔥` `NEW`
1. [曝詹姆斯直升机通勤开销无需自己支付](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%A9%B9%E5%A7%86%E6%96%AF%E7%9B%B4%E5%8D%87%E6%9C%BA%E9%80%9A%E5%8B%A4%E5%BC%80%E9%94%80%E6%97%A0%E9%9C%80%E8%87%AA%E5%B7%B1%E6%94%AF%E4%BB%98%23) `153.0K 🔥` `NEW`
1. [英航一客机7分钟急坠8230米](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E8%88%AA%E4%B8%80%E5%AE%A2%E6%9C%BA7%E5%88%86%E9%92%9F%E6%80%A5%E5%9D%A08230%E7%B1%B3%23) `150.9K 🔥` `NEW`
1. [恒山悬空寺在科威特火了](https://s.weibo.com/weibo?q=%23%E6%81%92%E5%B1%B1%E6%82%AC%E7%A9%BA%E5%AF%BA%E5%9C%A8%E7%A7%91%E5%A8%81%E7%89%B9%E7%81%AB%E4%BA%86%23) `134.6K 🔥` `NEW`
1. [黄子韬自曝洗澡时被王鹤棣看光](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E8%87%AA%E6%9B%9D%E6%B4%97%E6%BE%A1%E6%97%B6%E8%A2%AB%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%9C%8B%E5%85%89%23) `134.1K 🔥` `NEW`
1. [原来崔晋早就回应过房车和面馆了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%B4%94%E6%99%8B%E6%97%A9%E5%B0%B1%E5%9B%9E%E5%BA%94%E8%BF%87%E6%88%BF%E8%BD%A6%E5%92%8C%E9%9D%A2%E9%A6%86%E4%BA%86%23) `133.3K 🔥` `NEW`
1. [一百万买车预算只剩两万](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%99%BE%E4%B8%87%E4%B9%B0%E8%BD%A6%E9%A2%84%E7%AE%97%E5%8F%AA%E5%89%A9%E4%B8%A4%E4%B8%87%23) `129.3K 🔥` `NEW`
1. [回老家掰苞米感觉世界割裂](https://s.weibo.com/weibo?q=%23%E5%9B%9E%E8%80%81%E5%AE%B6%E6%8E%B0%E8%8B%9E%E7%B1%B3%E6%84%9F%E8%A7%89%E4%B8%96%E7%95%8C%E5%89%B2%E8%A3%82%23) `482.4K 🔥` `+701%`
1. [刘亦菲 掉代言](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%20%E6%8E%89%E4%BB%A3%E8%A8%80%23) `246.4K 🔥` `+29%`
1. [缅甸电诈园区或卷土重来](https://s.weibo.com/weibo?q=%23%E7%BC%85%E7%94%B8%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E6%88%96%E5%8D%B7%E5%9C%9F%E9%87%8D%E6%9D%A5%23) `233.6K 🔥` `+119%`
1. [伦敦冰箱贴竟印着郑州](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E5%86%B0%E7%AE%B1%E8%B4%B4%E7%AB%9F%E5%8D%B0%E7%9D%80%E9%83%91%E5%B7%9E%23) `211.4K 🔥` `+242%`
1. [李勒优现在正在拼豆店打工](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E7%8E%B0%E5%9C%A8%E6%AD%A3%E5%9C%A8%E6%8B%BC%E8%B1%86%E5%BA%97%E6%89%93%E5%B7%A5%23) `176.1K 🔥` `+44%`
1. [男孩买3瓶饮料连中71瓶](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E4%B9%B03%E7%93%B6%E9%A5%AE%E6%96%99%E8%BF%9E%E4%B8%AD71%E7%93%B6%23) `157.2K 🔥` `+84%`
1. [刘学义没对谭松韵用绅士手](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E6%B2%A1%E5%AF%B9%E8%B0%AD%E6%9D%BE%E9%9F%B5%E7%94%A8%E7%BB%85%E5%A3%AB%E6%89%8B%23) `152.0K 🔥` `+109%`
1. [建议大家买房一定要远离公园](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B9%B0%E6%88%BF%E4%B8%80%E5%AE%9A%E8%A6%81%E8%BF%9C%E7%A6%BB%E5%85%AC%E5%9B%AD%23) `157.6K 🔥`
1. [黄金睡眠时长出炉](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%9D%A1%E7%9C%A0%E6%97%B6%E9%95%BF%E5%87%BA%E7%82%89%23) `280.6K 🔥` `-47%`
1. [代露娃不被同情的原因](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E4%B8%8D%E8%A2%AB%E5%90%8C%E6%83%85%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `253.9K 🔥` `-27%`
1. [未来几年能留住现金流最重要](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A5%E5%87%A0%E5%B9%B4%E8%83%BD%E7%95%99%E4%BD%8F%E7%8E%B0%E9%87%91%E6%B5%81%E6%9C%80%E9%87%8D%E8%A6%81%23) `128.7K 🔥` `-62%`

Updated at 2026-10-06 11:05:06

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
