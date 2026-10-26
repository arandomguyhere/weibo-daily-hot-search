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

1. [凯恩获2026年金球奖](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E8%8E%B72026%E5%B9%B4%E9%87%91%E7%90%83%E5%A5%96%23) `2.0M 🔥` `NEW`
1. [AL一号种子16强](https://s.weibo.com/weibo?q=%23AL%E4%B8%80%E5%8F%B7%E7%A7%8D%E5%AD%9016%E5%BC%BA%23) `1.8M 🔥` `NEW`
1. [数说中国外贸澎湃动能](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%B4%E4%B8%AD%E5%9B%BD%E5%A4%96%E8%B4%B8%E6%BE%8E%E6%B9%83%E5%8A%A8%E8%83%BD%23) `1.3M 🔥` `NEW`
1. [AL淘汰](https://s.weibo.com/weibo?q=%23AL%E6%B7%98%E6%B1%B0%23) `1.1M 🔥` `NEW`
1. [金球奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%90%83%E5%A5%96%23) `1.0M 🔥` `NEW`
1. [TLAW对战AL](https://s.weibo.com/weibo?q=%23TLAW%E5%AF%B9%E6%88%98AL%23) `420.8K 🔥` `NEW`
1. [金球揭晓时间](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%90%83%E6%8F%AD%E6%99%93%E6%97%B6%E9%97%B4%23) `351.7K 🔥` `NEW`
1. [TLAW战胜AL](https://s.weibo.com/weibo?q=%23TLAW%E6%88%98%E8%83%9CAL%23) `204.2K 🔥` `NEW`
1. [亚马尔三连获科帕奖](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E4%B8%89%E8%BF%9E%E8%8E%B7%E7%A7%91%E5%B8%95%E5%A5%96%23) `186.7K 🔥` `NEW`
1. [凯恩回应获金球奖](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E5%9B%9E%E5%BA%94%E8%8E%B7%E9%87%91%E7%90%83%E5%A5%96%23) `171.8K 🔥` `NEW`
1. [金球奖前十](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%90%83%E5%A5%96%E5%89%8D%E5%8D%81%23) `171.7K 🔥` `NEW`
1. [女子险遭保安性侵后酒店竟涨价](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%99%A9%E9%81%AD%E4%BF%9D%E5%AE%89%E6%80%A7%E4%BE%B5%E5%90%8E%E9%85%92%E5%BA%97%E7%AB%9F%E6%B6%A8%E4%BB%B7%23) `171.6K 🔥` `NEW`
1. [不刷牙吃早餐vs不刷牙睡觉](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%88%B7%E7%89%99%E5%90%83%E6%97%A9%E9%A4%90vs%E4%B8%8D%E5%88%B7%E7%89%99%E7%9D%A1%E8%A7%89%23) `171.5K 🔥` `NEW`
1. [魏娆的座位仅次于皇后](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A8%86%E7%9A%84%E5%BA%A7%E4%BD%8D%E4%BB%85%E6%AC%A1%E4%BA%8E%E7%9A%87%E5%90%8E%23) `105.2K 🔥` `NEW`
1. [BLG拿下S16瑞士轮两连胜](https://s.weibo.com/weibo?q=%23BLG%E6%8B%BF%E4%B8%8BS16%E7%91%9E%E5%A3%AB%E8%BD%AE%E4%B8%A4%E8%BF%9E%E8%83%9C%23) `102.0K 🔥` `NEW`
1. [过度缺爱滋生的补偿性满足](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E7%BC%BA%E7%88%B1%E6%BB%8B%E7%94%9F%E7%9A%84%E8%A1%A5%E5%81%BF%E6%80%A7%E6%BB%A1%E8%B6%B3%23) `99.3K 🔥` `NEW`
1. [吴迪自曝口腔纤维化](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%BF%AA%E8%87%AA%E6%9B%9D%E5%8F%A3%E8%85%94%E7%BA%A4%E7%BB%B4%E5%8C%96%23) `95.3K 🔥` `NEW`
1. [众解说看BLG战胜KC反应](https://s.weibo.com/weibo?q=%23%E4%BC%97%E8%A7%A3%E8%AF%B4%E7%9C%8BBLG%E6%88%98%E8%83%9CKC%E5%8F%8D%E5%BA%94%23) `75.2K 🔥` `NEW`
1. [乙肝治愈新药获FDA批准上市](https://s.weibo.com/weibo?q=%23%E4%B9%99%E8%82%9D%E6%B2%BB%E6%84%88%E6%96%B0%E8%8D%AF%E8%8E%B7FDA%E6%89%B9%E5%87%86%E4%B8%8A%E5%B8%82%23) `69.4K 🔥` `NEW`
1. [山东人连稍微一等都倒装](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E4%BA%BA%E8%BF%9E%E7%A8%8D%E5%BE%AE%E4%B8%80%E7%AD%89%E9%83%BD%E5%80%92%E8%A3%85%23) `62.8K 🔥` `NEW`
1. [方媛晒一家五口合照为郭富城庆生](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E6%99%92%E4%B8%80%E5%AE%B6%E4%BA%94%E5%8F%A3%E5%90%88%E7%85%A7%E4%B8%BA%E9%83%AD%E5%AF%8C%E5%9F%8E%E5%BA%86%E7%94%9F%23) `59.4K 🔥` `NEW`
1. [李昀锐尚公主当着情敌的面出轨](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%BD%93%E7%9D%80%E6%83%85%E6%95%8C%E7%9A%84%E9%9D%A2%E5%87%BA%E8%BD%A8%23) `58.1K 🔥` `NEW`
1. [金球奖评选标准](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%90%83%E5%A5%96%E8%AF%84%E9%80%89%E6%A0%87%E5%87%86%23) `54.2K 🔥` `NEW`
1. [天冷就得吃点热乎的](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%86%B7%E5%B0%B1%E5%BE%97%E5%90%83%E7%82%B9%E7%83%AD%E4%B9%8E%E7%9A%84%23) `51.8K 🔥` `NEW`
1. [城管摇了摊主好了顾客笑了](https://s.weibo.com/weibo?q=%23%E5%9F%8E%E7%AE%A1%E6%91%87%E4%BA%86%E6%91%8A%E4%B8%BB%E5%A5%BD%E4%BA%86%E9%A1%BE%E5%AE%A2%E7%AC%91%E4%BA%86%23) `247.8K 🔥` `+720%`
1. [凯恩造81球本世纪金球得主排第4](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E9%80%A081%E7%90%83%E6%9C%AC%E4%B8%96%E7%BA%AA%E9%87%91%E7%90%83%E5%BE%97%E4%B8%BB%E6%8E%92%E7%AC%AC4%23) `243.4K 🔥` `+652%`
1. [老公把我要走了换成出去玩儿啦](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%85%AC%E6%8A%8A%E6%88%91%E8%A6%81%E8%B5%B0%E4%BA%86%E6%8D%A2%E6%88%90%E5%87%BA%E5%8E%BB%E7%8E%A9%E5%84%BF%E5%95%A6%23) `203.4K 🔥` `+437%`
1. [县委书记被扔下水没必要尬吹硬捧](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%A2%AB%E6%89%94%E4%B8%8B%E6%B0%B4%E6%B2%A1%E5%BF%85%E8%A6%81%E5%B0%AC%E5%90%B9%E7%A1%AC%E6%8D%A7%23) `193.8K 🔥` `+538%`
1. [国企欠款上千万元称先给十万八万](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BC%81%E6%AC%A0%E6%AC%BE%E4%B8%8A%E5%8D%83%E4%B8%87%E5%85%83%E7%A7%B0%E5%85%88%E7%BB%99%E5%8D%81%E4%B8%87%E5%85%AB%E4%B8%87%23) `181.1K 🔥` `+651%`
1. [樊振东用荒诞形容首次诺坎普之旅](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%94%A8%E8%8D%92%E8%AF%9E%E5%BD%A2%E5%AE%B9%E9%A6%96%E6%AC%A1%E8%AF%BA%E5%9D%8E%E6%99%AE%E4%B9%8B%E6%97%85%23) `171.8K 🔥` `+360%`
1. [新款iPadmini发布](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%AC%BEiPadmini%E5%8F%91%E5%B8%83%23) `171.7K 🔥` `+366%`
1. [玉簟秋](https://s.weibo.com/weibo?q=%23%E7%8E%89%E7%B0%9F%E7%A7%8B%23) `171.6K 🔥` `+449%`
1. [欧阳娜娜在娣娣面前姐感好强](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%9C%A8%E5%A8%A3%E5%A8%A3%E9%9D%A2%E5%89%8D%E5%A7%90%E6%84%9F%E5%A5%BD%E5%BC%BA%23) `171.4K 🔥` `+453%`
1. [韩国真有那么不堪吗](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%9C%9F%E6%9C%89%E9%82%A3%E4%B9%88%E4%B8%8D%E5%A0%AA%E5%90%97%23) `160.4K 🔥` `+421%`
1. [你花钱多的地方常常是你的创伤所在](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%8A%B1%E9%92%B1%E5%A4%9A%E7%9A%84%E5%9C%B0%E6%96%B9%E5%B8%B8%E5%B8%B8%E6%98%AF%E4%BD%A0%E7%9A%84%E5%88%9B%E4%BC%A4%E6%89%80%E5%9C%A8%23) `116.9K 🔥` `+279%`
1. [建议女生慎买iPhoneDuo](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A5%B3%E7%94%9F%E6%85%8E%E4%B9%B0iPhoneDuo%23) `108.0K 🔥` `+252%`
1. [2个衣架轻松收纳大衣](https://s.weibo.com/weibo?q=%232%E4%B8%AA%E8%A1%A3%E6%9E%B6%E8%BD%BB%E6%9D%BE%E6%94%B6%E7%BA%B3%E5%A4%A7%E8%A1%A3%23) `104.8K 🔥` `+174%`
1. [可算知道奇形怪状的快递盒哪来的了](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E7%AE%97%E7%9F%A5%E9%81%93%E5%A5%87%E5%BD%A2%E6%80%AA%E7%8A%B6%E7%9A%84%E5%BF%AB%E9%80%92%E7%9B%92%E5%93%AA%E6%9D%A5%E7%9A%84%E4%BA%86%23) `99.4K 🔥` `+251%`
1. [被张雪扔下水县委书记拿到大结果](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%BC%A0%E9%9B%AA%E6%89%94%E4%B8%8B%E6%B0%B4%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%8B%BF%E5%88%B0%E5%A4%A7%E7%BB%93%E6%9E%9C%23) `93.5K 🔥` `+128%`
1. [iPad mini](https://s.weibo.com/weibo?q=%23iPad%20mini%23) `86.5K 🔥` `+130%`
1. [CFO对战T1](https://s.weibo.com/weibo?q=%23CFO%E5%AF%B9%E6%88%98T1%23) `78.7K 🔥` `+47%`
1. [苹果被疑走向雪崩](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E8%A2%AB%E7%96%91%E8%B5%B0%E5%90%91%E9%9B%AA%E5%B4%A9%23) `73.4K 🔥` `+140%`
1. [别对需要独居的人谈弊端](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%AF%B9%E9%9C%80%E8%A6%81%E7%8B%AC%E5%B1%85%E7%9A%84%E4%BA%BA%E8%B0%88%E5%BC%8A%E7%AB%AF%23) `72.4K 🔥` `+133%`
1. [职场同事原话能有多刻薄](https://s.weibo.com/weibo?q=%23%E8%81%8C%E5%9C%BA%E5%90%8C%E4%BA%8B%E5%8E%9F%E8%AF%9D%E8%83%BD%E6%9C%89%E5%A4%9A%E5%88%BB%E8%96%84%23) `65.4K 🔥` `+150%`
1. [樊振东分享观赛西班牙国家德比](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%88%86%E4%BA%AB%E8%A7%82%E8%B5%9B%E8%A5%BF%E7%8F%AD%E7%89%99%E5%9B%BD%E5%AE%B6%E5%BE%B7%E6%AF%94%23) `59.9K 🔥` `+38%`
1. [美人心计 我赢了也这么胡说八道](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BA%BA%E5%BF%83%E8%AE%A1%20%E6%88%91%E8%B5%A2%E4%BA%86%E4%B9%9F%E8%BF%99%E4%B9%88%E8%83%A1%E8%AF%B4%E5%85%AB%E9%81%93%23) `51.9K 🔥` `+125%`
1. [iPhoneDuo折叠挑战后摔坏](https://s.weibo.com/weibo?q=%23iPhoneDuo%E6%8A%98%E5%8F%A0%E6%8C%91%E6%88%98%E5%90%8E%E6%91%94%E5%9D%8F%23) `51.9K 🔥` `+44%`
1. [T1大概率抽到LPL](https://s.weibo.com/weibo?q=%23T1%E5%A4%A7%E6%A6%82%E7%8E%87%E6%8A%BD%E5%88%B0LPL%23) `119.8K 🔥`
1. [樊振东国家德比观后感](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%9B%BD%E5%AE%B6%E5%BE%B7%E6%AF%94%E8%A7%82%E5%90%8E%E6%84%9F%23) `52.1K 🔥`

Updated at 2026-10-27 07:43:04

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
