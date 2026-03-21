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

1. [重庆大学实验室爆炸1死3伤 (1 killed and 3 injured in Chongqing University laboratory explosion)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%A4%A7%E5%AD%A6%E5%AE%9E%E9%AA%8C%E5%AE%A4%E7%88%86%E7%82%B81%E6%AD%BB3%E4%BC%A4%23) `1.6M 🔥` `NEW`
1. [重庆一高校实验室爆炸现场画面](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E4%B8%80%E9%AB%98%E6%A0%A1%E5%AE%9E%E9%AA%8C%E5%AE%A4%E7%88%86%E7%82%B8%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `226.5K 🔥` `NEW`
1. [梅姨真实照片或在判决后公布](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E7%9C%9F%E5%AE%9E%E7%85%A7%E7%89%87%E6%88%96%E5%9C%A8%E5%88%A4%E5%86%B3%E5%90%8E%E5%85%AC%E5%B8%83%23) `146.4K 🔥` `NEW`
1. [小区旁400万吨垃圾被挖出来了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA%E6%97%81400%E4%B8%87%E5%90%A8%E5%9E%83%E5%9C%BE%E8%A2%AB%E6%8C%96%E5%87%BA%E6%9D%A5%E4%BA%86%23) `140.9K 🔥` `NEW`
1. [梅姨自称有两个女儿](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%87%AA%E7%A7%B0%E6%9C%89%E4%B8%A4%E4%B8%AA%E5%A5%B3%E5%84%BF%23) `89.8K 🔥` `NEW`
1. [孙俪能穿得下童装](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E8%83%BD%E7%A9%BF%E5%BE%97%E4%B8%8B%E7%AB%A5%E8%A3%85%23) `89.6K 🔥` `NEW`
1. [重庆警方回应一高校实验室爆炸](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E4%B8%80%E9%AB%98%E6%A0%A1%E5%AE%9E%E9%AA%8C%E5%AE%A4%E7%88%86%E7%82%B8%23) `88.6K 🔥` `NEW`
1. [你好星期六下期有刘宇宁](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E4%B8%8B%E6%9C%9F%E6%9C%89%E5%88%98%E5%AE%87%E5%AE%81%23) `81.6K 🔥` `NEW`
1. [云南玉昆4比0山东泰山](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E7%8E%89%E6%98%864%E6%AF%940%E5%B1%B1%E4%B8%9C%E6%B3%B0%E5%B1%B1%23) `79.0K 🔥` `NEW`
1. [好面料真的会走秀 (Good fabrics really make a show)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E9%9D%A2%E6%96%99%E7%9C%9F%E7%9A%84%E4%BC%9A%E8%B5%B0%E7%A7%80%23) `461.9K 🔥` `+99%`
1. [GEN对战G2](https://s.weibo.com/weibo?q=%23GEN%E5%AF%B9%E6%88%98G2%23) `198.4K 🔥` `+29%`
1. [美国内部吵成一锅粥 (There is a quarrel within the United States)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%86%85%E9%83%A8%E5%90%B5%E6%88%90%E4%B8%80%E9%94%85%E7%B2%A5%23) `146.9K 🔥` `+63%`
1. [逐玉 泄露 (Zhuyu leaked)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E6%B3%84%E9%9C%B2%23) `10.8M 🔥`
1. [梅姨被逮捕 (Aunt May was arrested)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%A2%AB%E9%80%AE%E6%8D%95%23) `882.7K 🔥`
1. [2026全国寻春地图 (2026 National Spring Search Map)](https://s.weibo.com/weibo?q=%232026%E5%85%A8%E5%9B%BD%E5%AF%BB%E6%98%A5%E5%9C%B0%E5%9B%BE%23) `718.0K 🔥`
1. [狼队战胜AG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E6%88%98%E8%83%9CAG%23) `304.9K 🔥`
1. [季冠霖发文抵制AI (Ji Guanlin issued a letter boycotting AI)](https://s.weibo.com/weibo?q=%23%E5%AD%A3%E5%86%A0%E9%9C%96%E5%8F%91%E6%96%87%E6%8A%B5%E5%88%B6AI%23) `294.7K 🔥`
1. [你好星期六预告 (hello saturday preview)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E9%A2%84%E5%91%8A%23) `175.2K 🔥`
1. [迪丽热巴新经纪人疑似回应入职嘉行](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%96%B0%E7%BB%8F%E7%BA%AA%E4%BA%BA%E7%96%91%E4%BC%BC%E5%9B%9E%E5%BA%94%E5%85%A5%E8%81%8C%E5%98%89%E8%A1%8C%23) `153.1K 🔥`
1. [曝梁小龙去世两个月没下葬将停棺10年](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%A2%81%E5%B0%8F%E9%BE%99%E5%8E%BB%E4%B8%96%E4%B8%A4%E4%B8%AA%E6%9C%88%E6%B2%A1%E4%B8%8B%E8%91%AC%E5%B0%86%E5%81%9C%E6%A3%BA10%E5%B9%B4%23) `147.6K 🔥`
1. [鹿晗 关晓彤 (Lu Han Guan Xiaotong)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E5%85%B3%E6%99%93%E5%BD%A4%23) `144.6K 🔥`
1. [梅姨同居男友都看不到她的身份证 (Even Aunt Mei’s live-in boyfriend can’t see her ID card)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%90%8C%E5%B1%85%E7%94%B7%E5%8F%8B%E9%83%BD%E7%9C%8B%E4%B8%8D%E5%88%B0%E5%A5%B9%E7%9A%84%E8%BA%AB%E4%BB%BD%E8%AF%81%23) `143.2K 🔥`
1. [云旗直播](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E7%9B%B4%E6%92%AD%23) `141.5K 🔥`
1. [曝迪丽热巴新经纪人入职嘉行](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%96%B0%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%85%A5%E8%81%8C%E5%98%89%E8%A1%8C%23) `140.3K 🔥`
1. [金饰价格已下跌超300元 (The price of gold jewelry has dropped by more than 300 yuan)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E5%B7%B2%E4%B8%8B%E8%B7%8C%E8%B6%85300%E5%85%83%23) `125.6K 🔥`
1. [梅姨拐卖的儿童认亲后将母亲拉黑](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E6%8B%90%E5%8D%96%E7%9A%84%E5%84%BF%E7%AB%A5%E8%AE%A4%E4%BA%B2%E5%90%8E%E5%B0%86%E6%AF%8D%E4%BA%B2%E6%8B%89%E9%BB%91%23) `116.5K 🔥`
1. [张凌赫包场冬去春来 (Zhang Linghe reserves the place. Winter is coming and spring is coming.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8C%85%E5%9C%BA%E5%86%AC%E5%8E%BB%E6%98%A5%E6%9D%A5%23) `115.5K 🔥`
1. [黄霄雲 莫挨老子 (Huang Xiaoyun, don’t touch me)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%9C%84%E9%9B%B2%20%E8%8E%AB%E6%8C%A8%E8%80%81%E5%AD%90%23) `106.1K 🔥`
1. [董洁说90斤不敢上称](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%B4%81%E8%AF%B490%E6%96%A4%E4%B8%8D%E6%95%A2%E4%B8%8A%E7%A7%B0%23) `94.3K 🔥`
1. [马斯克为Kimi撑腰](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E4%B8%BAKimi%E6%92%91%E8%85%B0%23) `87.0K 🔥`
1. [痞幼因网红身份被邻居排挤 (A young boy is ostracized by his neighbors because of his status as an internet celebrity)](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E5%9B%A0%E7%BD%91%E7%BA%A2%E8%BA%AB%E4%BB%BD%E8%A2%AB%E9%82%BB%E5%B1%85%E6%8E%92%E6%8C%A4%23) `81.9K 🔥`
1. [逐玉 删戏份 (Chasing Jade deleted scenes)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%88%A0%E6%88%8F%E4%BB%BD%23) `275.1K 🔥` `-23%`
1. [狼队对战AG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98AG%23) `171.0K 🔥` `-62%`
1. [网传B站裁员60%研发集体罢工 (It is reported online that 60% of Bilibili’s layoffs are on R&D collective strike)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0B%E7%AB%99%E8%A3%81%E5%91%9860%25%E7%A0%94%E5%8F%91%E9%9B%86%E4%BD%93%E7%BD%A2%E5%B7%A5%23) `167.4K 🔥` `-39%`
1. [逐玉大结局](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%A4%A7%E7%BB%93%E5%B1%80%23) `164.0K 🔥` `-45%`
1. [云旗走秀造型 (Yunqi catwalk style)](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E8%B5%B0%E7%A7%80%E9%80%A0%E5%9E%8B%23) `160.5K 🔥` `-41%`
1. [11岁男孩脸肿竟是肿瘤骨头断了](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E7%94%B7%E5%AD%A9%E8%84%B8%E8%82%BF%E7%AB%9F%E6%98%AF%E8%82%BF%E7%98%A4%E9%AA%A8%E5%A4%B4%E6%96%AD%E4%BA%86%23) `156.9K 🔥` `-80%`
1. [这段话杀死了我的精神内耗 (This sentence killed my inner spirit)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E6%9D%80%E6%AD%BB%E4%BA%86%E6%88%91%E7%9A%84%E7%B2%BE%E7%A5%9E%E5%86%85%E8%80%97%23) `149.2K 🔥` `-25%`
1. [逐玉 爱奇艺](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E7%88%B1%E5%A5%87%E8%89%BA%23) `145.2K 🔥` `-47%`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `142.3K 🔥` `-48%`
1. [逐玉 一天一集果然会出事](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E4%B8%80%E5%A4%A9%E4%B8%80%E9%9B%86%E6%9E%9C%E7%84%B6%E4%BC%9A%E5%87%BA%E4%BA%8B%23) `140.5K 🔥` `-27%`
1. [警方曾释放梅姨不存在的信号 (The police once released a signal that Aunt May did not exist)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E6%9B%BE%E9%87%8A%E6%94%BE%E6%A2%85%E5%A7%A8%E4%B8%8D%E5%AD%98%E5%9C%A8%E7%9A%84%E4%BF%A1%E5%8F%B7%23) `139.5K 🔥` `-50%`
1. [伊朗手中握有真正的筹码](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%89%8B%E4%B8%AD%E6%8F%A1%E6%9C%89%E7%9C%9F%E6%AD%A3%E7%9A%84%E7%AD%B9%E7%A0%81%23) `122.7K 🔥` `-29%`
1. [梅姨曾与60多岁老人同居2年 (Aunt Mei once lived with an old man in his 60s for 2 years)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E6%9B%BE%E4%B8%8E60%E5%A4%9A%E5%B2%81%E8%80%81%E4%BA%BA%E5%90%8C%E5%B1%852%E5%B9%B4%23) `119.5K 🔥` `-22%`
1. [AG 轮换](https://s.weibo.com/weibo?q=%23AG%20%E8%BD%AE%E6%8D%A2%23) `107.6K 🔥` `-30%`
1. [梅姨同居男友说她不戴首饰 (Aunt Mei’s live-in boyfriend said she doesn’t wear jewelry)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%90%8C%E5%B1%85%E7%94%B7%E5%8F%8B%E8%AF%B4%E5%A5%B9%E4%B8%8D%E6%88%B4%E9%A6%96%E9%A5%B0%23) `99.2K 🔥` `-34%`
1. [JDG战胜DYG (JDG defeated DYG)](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9CDYG%23) `95.3K 🔥` `-37%`
1. [阿娇的邪修减肥法是刷牙](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A8%87%E7%9A%84%E9%82%AA%E4%BF%AE%E5%87%8F%E8%82%A5%E6%B3%95%E6%98%AF%E5%88%B7%E7%89%99%23) `91.5K 🔥` `-26%`
1. [张凌赫男大自拍 (Zhang Linghe male selfie)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B7%E5%A4%A7%E8%87%AA%E6%8B%8D%23) `88.2K 🔥` `-25%`
1. [雷神加速器崩了](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E7%A5%9E%E5%8A%A0%E9%80%9F%E5%99%A8%E5%B4%A9%E4%BA%86%23) `81.5K 🔥` `-47%`
1. [梅姨平时说媒背地里贩卖小孩](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%B9%B3%E6%97%B6%E8%AF%B4%E5%AA%92%E8%83%8C%E5%9C%B0%E9%87%8C%E8%B4%A9%E5%8D%96%E5%B0%8F%E5%AD%A9%23) `74.8K 🔥` `-30%`

Updated at 2026-03-21 22:36:24

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
