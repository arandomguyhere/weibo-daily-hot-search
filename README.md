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

1. [T1大概率抽到LPL](https://s.weibo.com/weibo?q=%23T1%E5%A4%A7%E6%A6%82%E7%8E%87%E6%8A%BD%E5%88%B0LPL%23) `149.8K 🔥` `NEW`
1. [来自ON的神钩一锤定音](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E8%87%AAON%E7%9A%84%E7%A5%9E%E9%92%A9%E4%B8%80%E9%94%A4%E5%AE%9A%E9%9F%B3%23) `65.5K 🔥` `NEW`
1. [外媒聚焦二十届五中全会](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%AA%92%E8%81%9A%E7%84%A6%E4%BA%8C%E5%8D%81%E5%B1%8A%E4%BA%94%E4%B8%AD%E5%85%A8%E4%BC%9A%23) `56.7K 🔥` `NEW`
1. [享界V8重新定义家用车安全](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E7%95%8CV8%E9%87%8D%E6%96%B0%E5%AE%9A%E4%B9%89%E5%AE%B6%E7%94%A8%E8%BD%A6%E5%AE%89%E5%85%A8%23) `56.3K 🔥` `NEW`
1. [樊振东国家德比观后感](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%9B%BD%E5%AE%B6%E5%BE%B7%E6%AF%94%E8%A7%82%E5%90%8E%E6%84%9F%23) `53.6K 🔥` `NEW`
1. [CFO对战T1](https://s.weibo.com/weibo?q=%23CFO%E5%AF%B9%E6%88%98T1%23) `53.4K 🔥` `NEW`
1. [樊振东分享观赛西班牙国家德比](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%88%86%E4%BA%AB%E8%A7%82%E8%B5%9B%E8%A5%BF%E7%8F%AD%E7%89%99%E5%9B%BD%E5%AE%B6%E5%BE%B7%E6%AF%94%23) `43.5K 🔥` `NEW`
1. [Keria两波完美先手](https://s.weibo.com/weibo?q=%23Keria%E4%B8%A4%E6%B3%A2%E5%AE%8C%E7%BE%8E%E5%85%88%E6%89%8B%23) `43.4K 🔥` `NEW`
1. [被张雪扔下水县委书记拿到大结果](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%BC%A0%E9%9B%AA%E6%89%94%E4%B8%8B%E6%B0%B4%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%8B%BF%E5%88%B0%E5%A4%A7%E7%BB%93%E6%9E%9C%23) `41.0K 🔥` `NEW`
1. [LPL大概率又要内战了](https://s.weibo.com/weibo?q=%23LPL%E5%A4%A7%E6%A6%82%E7%8E%87%E5%8F%88%E8%A6%81%E5%86%85%E6%88%98%E4%BA%86%23) `39.6K 🔥` `NEW`
1. [2个衣架轻松收纳大衣](https://s.weibo.com/weibo?q=%232%E4%B8%AA%E8%A1%A3%E6%9E%B6%E8%BD%BB%E6%9D%BE%E6%94%B6%E7%BA%B3%E5%A4%A7%E8%A1%A3%23) `38.3K 🔥` `NEW`
1. [老公把我要走了换成出去玩儿啦](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%85%AC%E6%8A%8A%E6%88%91%E8%A6%81%E8%B5%B0%E4%BA%86%E6%8D%A2%E6%88%90%E5%87%BA%E5%8E%BB%E7%8E%A9%E5%84%BF%E5%95%A6%23) `37.9K 🔥` `NEW`
1. [iPad mini](https://s.weibo.com/weibo?q=%23iPad%20mini%23) `37.6K 🔥` `NEW`
1. [樊振东用荒诞形容首次诺坎普之旅](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%94%A8%E8%8D%92%E8%AF%9E%E5%BD%A2%E5%AE%B9%E9%A6%96%E6%AC%A1%E8%AF%BA%E5%9D%8E%E6%99%AE%E4%B9%8B%E6%97%85%23) `37.3K 🔥` `NEW`
1. [新款iPadmini发布](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%AC%BEiPadmini%E5%8F%91%E5%B8%83%23) `36.8K 🔥` `NEW`
1. [后会友期 臭鱼烂虾爱看的节目](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%20%E8%87%AD%E9%B1%BC%E7%83%82%E8%99%BE%E7%88%B1%E7%9C%8B%E7%9A%84%E8%8A%82%E7%9B%AE%23) `36.3K 🔥` `NEW`
1. [iPhoneDuo折叠挑战后摔坏](https://s.weibo.com/weibo?q=%23iPhoneDuo%E6%8A%98%E5%8F%A0%E6%8C%91%E6%88%98%E5%90%8E%E6%91%94%E5%9D%8F%23) `35.9K 🔥` `NEW`
1. [老干妈日销售额从万元跌至千元](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B9%B2%E5%A6%88%E6%97%A5%E9%94%80%E5%94%AE%E9%A2%9D%E4%BB%8E%E4%B8%87%E5%85%83%E8%B7%8C%E8%87%B3%E5%8D%83%E5%85%83%23) `35.3K 🔥` `NEW`
1. [凯恩造81球本世纪金球得主排第4](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E9%80%A081%E7%90%83%E6%9C%AC%E4%B8%96%E7%BA%AA%E9%87%91%E7%90%83%E5%BE%97%E4%B8%BB%E6%8E%92%E7%AC%AC4%23) `32.4K 🔥` `NEW`
1. [玉簟秋](https://s.weibo.com/weibo?q=%23%E7%8E%89%E7%B0%9F%E7%A7%8B%23) `31.2K 🔥` `NEW`
1. [别对需要独居的人谈弊端](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%AF%B9%E9%9C%80%E8%A6%81%E7%8B%AC%E5%B1%85%E7%9A%84%E4%BA%BA%E8%B0%88%E5%BC%8A%E7%AB%AF%23) `31.1K 🔥` `NEW`
1. [欧阳娜娜在娣娣面前姐感好强](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%9C%A8%E5%A8%A3%E5%A8%A3%E9%9D%A2%E5%89%8D%E5%A7%90%E6%84%9F%E5%A5%BD%E5%BC%BA%23) `31.0K 🔥` `NEW`
1. [徐艺洋个人品牌多次使用小海豚元素](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E4%B8%AA%E4%BA%BA%E5%93%81%E7%89%8C%E5%A4%9A%E6%AC%A1%E4%BD%BF%E7%94%A8%E5%B0%8F%E6%B5%B7%E8%B1%9A%E5%85%83%E7%B4%A0%23) `30.9K 🔥` `NEW`
1. [你花钱多的地方常常是你的创伤所在](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%8A%B1%E9%92%B1%E5%A4%9A%E7%9A%84%E5%9C%B0%E6%96%B9%E5%B8%B8%E5%B8%B8%E6%98%AF%E4%BD%A0%E7%9A%84%E5%88%9B%E4%BC%A4%E6%89%80%E5%9C%A8%23) `30.8K 🔥` `NEW`
1. [韩国真有那么不堪吗](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%9C%9F%E6%9C%89%E9%82%A3%E4%B9%88%E4%B8%8D%E5%A0%AA%E5%90%97%23) `30.8K 🔥` `NEW`
1. [建议女生慎买iPhoneDuo](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A5%B3%E7%94%9F%E6%85%8E%E4%B9%B0iPhoneDuo%23) `30.7K 🔥` `NEW`
1. [朋友为去世猫咪找同款猫](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E4%B8%BA%E5%8E%BB%E4%B8%96%E7%8C%AB%E5%92%AA%E6%89%BE%E5%90%8C%E6%AC%BE%E7%8C%AB%23) `30.6K 🔥` `NEW`
1. [苹果被疑走向雪崩](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E8%A2%AB%E7%96%91%E8%B5%B0%E5%90%91%E9%9B%AA%E5%B4%A9%23) `30.5K 🔥` `NEW`
1. [后会友期工作人员爆料](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E7%88%86%E6%96%99%23) `30.4K 🔥` `NEW`
1. [县委书记被扔下水没必要尬吹硬捧](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%A2%AB%E6%89%94%E4%B8%8B%E6%B0%B4%E6%B2%A1%E5%BF%85%E8%A6%81%E5%B0%AC%E5%90%B9%E7%A1%AC%E6%8D%A7%23) `30.4K 🔥` `NEW`
1. [城管摇了摊主好了顾客笑了](https://s.weibo.com/weibo?q=%23%E5%9F%8E%E7%AE%A1%E6%91%87%E4%BA%86%E6%91%8A%E4%B8%BB%E5%A5%BD%E4%BA%86%E9%A1%BE%E5%AE%A2%E7%AC%91%E4%BA%86%23) `30.2K 🔥` `NEW`
1. [采耳后感觉脑子都被抽空了](https://s.weibo.com/weibo?q=%23%E9%87%87%E8%80%B3%E5%90%8E%E6%84%9F%E8%A7%89%E8%84%91%E5%AD%90%E9%83%BD%E8%A2%AB%E6%8A%BD%E7%A9%BA%E4%BA%86%23) `30.2K 🔥` `NEW`
1. [FNC悼念Cyanide](https://s.weibo.com/weibo?q=%23FNC%E6%82%BC%E5%BF%B5Cyanide%23) `30.1K 🔥` `NEW`
1. [瑞幸联名王者KPL](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E8%81%94%E5%90%8D%E7%8E%8B%E8%80%85KPL%23) `30.0K 🔥` `NEW`
1. [内存条有价无市](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E6%9D%A1%E6%9C%89%E4%BB%B7%E6%97%A0%E5%B8%82%23) `29.8K 🔥` `NEW`
1. [新疆网红被热巴娜扎震惊到](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E7%BD%91%E7%BA%A2%E8%A2%AB%E7%83%AD%E5%B7%B4%E5%A8%9C%E6%89%8E%E9%9C%87%E6%83%8A%E5%88%B0%23) `29.2K 🔥` `NEW`
1. [可算知道奇形怪状的快递盒哪来的了](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E7%AE%97%E7%9F%A5%E9%81%93%E5%A5%87%E5%BD%A2%E6%80%AA%E7%8A%B6%E7%9A%84%E5%BF%AB%E9%80%92%E7%9B%92%E5%93%AA%E6%9D%A5%E7%9A%84%E4%BA%86%23) `28.3K 🔥` `NEW`
1. [职场同事原话能有多刻薄](https://s.weibo.com/weibo?q=%23%E8%81%8C%E5%9C%BA%E5%90%8C%E4%BA%8B%E5%8E%9F%E8%AF%9D%E8%83%BD%E6%9C%89%E5%A4%9A%E5%88%BB%E8%96%84%23) `26.2K 🔥` `NEW`
1. [焦虑的p人在这里集合](https://s.weibo.com/weibo?q=%23%E7%84%A6%E8%99%91%E7%9A%84p%E4%BA%BA%E5%9C%A8%E8%BF%99%E9%87%8C%E9%9B%86%E5%90%88%23) `25.5K 🔥` `NEW`
1. [韩女子被男友殴打身亡监控曝光](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%A5%B3%E5%AD%90%E8%A2%AB%E7%94%B7%E5%8F%8B%E6%AE%B4%E6%89%93%E8%BA%AB%E4%BA%A1%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23) `24.9K 🔥` `NEW`
1. [内存价格出现倒挂](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E4%BB%B7%E6%A0%BC%E5%87%BA%E7%8E%B0%E5%80%92%E6%8C%82%23) `24.5K 🔥` `NEW`
1. [许飞 你想要我命都给你](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%20%E4%BD%A0%E6%83%B3%E8%A6%81%E6%88%91%E5%91%BD%E9%83%BD%E7%BB%99%E4%BD%A0%23) `24.4K 🔥` `NEW`
1. [国企欠款上千万元称先给十万八万](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BC%81%E6%AC%A0%E6%AC%BE%E4%B8%8A%E5%8D%83%E4%B8%87%E5%85%83%E7%A7%B0%E5%85%88%E7%BB%99%E5%8D%81%E4%B8%87%E5%85%AB%E4%B8%87%23) `24.1K 🔥` `NEW`
1. [尚公主能逆风翻盘吗](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E8%83%BD%E9%80%86%E9%A3%8E%E7%BF%BB%E7%9B%98%E5%90%97%23) `24.0K 🔥` `NEW`
1. [美人心计 我赢了也这么胡说八道](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BA%BA%E5%BF%83%E8%AE%A1%20%E6%88%91%E8%B5%A2%E4%BA%86%E4%B9%9F%E8%BF%99%E4%B9%88%E8%83%A1%E8%AF%B4%E5%85%AB%E9%81%93%23) `23.1K 🔥` `NEW`
1. [尚公主开播三日云合走势](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%BC%80%E6%92%AD%E4%B8%89%E6%97%A5%E4%BA%91%E5%90%88%E8%B5%B0%E5%8A%BF%23) `22.8K 🔥` `NEW`
1. [JackeyLove世界赛总击杀数排名](https://s.weibo.com/weibo?q=%23JackeyLove%E4%B8%96%E7%95%8C%E8%B5%9B%E6%80%BB%E5%87%BB%E6%9D%80%E6%95%B0%E6%8E%92%E5%90%8D%23) `22.7K 🔥` `NEW`
1. [县委书记被扔下水是干群的互相成全](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%A2%AB%E6%89%94%E4%B8%8B%E6%B0%B4%E6%98%AF%E5%B9%B2%E7%BE%A4%E7%9A%84%E4%BA%92%E7%9B%B8%E6%88%90%E5%85%A8%23) `22.7K 🔥` `NEW`
1. [潘展乐100混金牌](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%B1%95%E4%B9%90100%E6%B7%B7%E9%87%91%E7%89%8C%23) `22.7K 🔥` `NEW`

Updated at 2026-10-27 03:57:37

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
