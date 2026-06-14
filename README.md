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

1. [神23乘组要在太空过端午了 (The Shen-23 crew will celebrate the Dragon Boat Festival in space)](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E4%B9%98%E7%BB%84%E8%A6%81%E5%9C%A8%E5%A4%AA%E7%A9%BA%E8%BF%87%E7%AB%AF%E5%8D%88%E4%BA%86%23) `864.7K 🔥` `NEW`
1. [这就是专业人士的适应能力](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E4%B8%93%E4%B8%9A%E4%BA%BA%E5%A3%AB%E7%9A%84%E9%80%82%E5%BA%94%E8%83%BD%E5%8A%9B%23) `853.4K 🔥` `NEW`
1. [沈腾和昨天是一个人吗](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%92%8C%E6%98%A8%E5%A4%A9%E6%98%AF%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%90%97%23) `841.6K 🔥` `NEW`
1. [上海还是太超前了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%BF%98%E6%98%AF%E5%A4%AA%E8%B6%85%E5%89%8D%E4%BA%86%23) `826.7K 🔥` `NEW`
1. [王俊凯P领口](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AFP%E9%A2%86%E5%8F%A3%23) `810.2K 🔥` `NEW`
1. [吴宇恒喊你试10000000份天猫小样](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%87%E6%81%92%E5%96%8A%E4%BD%A0%E8%AF%9510000000%E4%BB%BD%E5%A4%A9%E7%8C%AB%E5%B0%8F%E6%A0%B7%23) `803.9K 🔥` `NEW`
1. [上班这件事不要本末倒置](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E8%BF%99%E4%BB%B6%E4%BA%8B%E4%B8%8D%E8%A6%81%E6%9C%AC%E6%9C%AB%E5%80%92%E7%BD%AE%23) `801.0K 🔥` `NEW`
1. [养猫人才知道小猫这一脚的含金量](https://s.weibo.com/weibo?q=%23%E5%85%BB%E7%8C%AB%E4%BA%BA%E6%89%8D%E7%9F%A5%E9%81%93%E5%B0%8F%E7%8C%AB%E8%BF%99%E4%B8%80%E8%84%9A%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `307.5K 🔥` `NEW`
1. [微博电影之夜内场](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E7%94%B5%E5%BD%B1%E4%B9%8B%E5%A4%9C%E5%86%85%E5%9C%BA%23) `293.7K 🔥` `NEW`
1. [BLG横扫TES](https://s.weibo.com/weibo?q=%23BLG%E6%A8%AA%E6%89%ABTES%23) `266.3K 🔥` `NEW`
1. [大鱼海棠导演说王菲要求多报价贵 (The director of Big Fish and Begonia said that Faye Wong’s request for a higher price would be too expensive)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%B1%BC%E6%B5%B7%E6%A3%A0%E5%AF%BC%E6%BC%94%E8%AF%B4%E7%8E%8B%E8%8F%B2%E8%A6%81%E6%B1%82%E5%A4%9A%E6%8A%A5%E4%BB%B7%E8%B4%B5%23) `265.5K 🔥` `NEW`
1. [迪丽热巴手机壳从销量2涨到3000多](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%89%8B%E6%9C%BA%E5%A3%B3%E4%BB%8E%E9%94%80%E9%87%8F2%E6%B6%A8%E5%88%B03000%E5%A4%9A%23) `265.1K 🔥` `NEW`
1. [小米工程师谈某大模型重新出山](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%B7%A5%E7%A8%8B%E5%B8%88%E8%B0%88%E6%9F%90%E5%A4%A7%E6%A8%A1%E5%9E%8B%E9%87%8D%E6%96%B0%E5%87%BA%E5%B1%B1%23) `264.3K 🔥` `NEW`
1. [沈腾最好的医美是马丽](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%9C%80%E5%A5%BD%E7%9A%84%E5%8C%BB%E7%BE%8E%E6%98%AF%E9%A9%AC%E4%B8%BD%23) `263.0K 🔥` `NEW`
1. [压力给到了日本](https://s.weibo.com/weibo?q=%23%E5%8E%8B%E5%8A%9B%E7%BB%99%E5%88%B0%E4%BA%86%E6%97%A5%E6%9C%AC%23) `259.7K 🔥` `NEW`
1. [Lisa鼻子怎么了](https://s.weibo.com/weibo?q=%23Lisa%E9%BC%BB%E5%AD%90%E6%80%8E%E4%B9%88%E4%BA%86%23) `258.3K 🔥` `NEW`
1. [39岁女子1天3杯奶茶喝出牛奶血](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E5%A5%B3%E5%AD%901%E5%A4%A93%E6%9D%AF%E5%A5%B6%E8%8C%B6%E5%96%9D%E5%87%BA%E7%89%9B%E5%A5%B6%E8%A1%80%23) `258.1K 🔥` `NEW`
1. [大理一敞篷车落入农田7人受伤](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%90%86%E4%B8%80%E6%95%9E%E7%AF%B7%E8%BD%A6%E8%90%BD%E5%85%A5%E5%86%9C%E7%94%B07%E4%BA%BA%E5%8F%97%E4%BC%A4%23) `256.8K 🔥` `NEW`
1. [三星家电退出中国现在能捡漏吗](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E5%AE%B6%E7%94%B5%E9%80%80%E5%87%BA%E4%B8%AD%E5%9B%BD%E7%8E%B0%E5%9C%A8%E8%83%BD%E6%8D%A1%E6%BC%8F%E5%90%97%23) `255.9K 🔥` `NEW`
1. [张元英签售扔掉头饰](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E7%AD%BE%E5%94%AE%E6%89%94%E6%8E%89%E5%A4%B4%E9%A5%B0%23) `255.0K 🔥` `NEW`
1. [97岁网红刘老太离世 (Internet celebrity Mrs. Liu passed away at the age of 97)](https://s.weibo.com/weibo?q=%2397%E5%B2%81%E7%BD%91%E7%BA%A2%E5%88%98%E8%80%81%E5%A4%AA%E7%A6%BB%E4%B8%96%23) `254.7K 🔥` `NEW`
1. [黄晓明问王俊凯去不去周杰伦演唱会](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E9%97%AE%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8E%BB%E4%B8%8D%E5%8E%BB%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `252.7K 🔥` `NEW`
1. [美伊将举行视频会议并签署协议](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%B0%86%E4%B8%BE%E8%A1%8C%E8%A7%86%E9%A2%91%E4%BC%9A%E8%AE%AE%E5%B9%B6%E7%AD%BE%E7%BD%B2%E5%8D%8F%E8%AE%AE%23) `251.2K 🔥` `NEW`
1. [风都偏爱李思潼](https://s.weibo.com/weibo?q=%23%E9%A3%8E%E9%83%BD%E5%81%8F%E7%88%B1%E6%9D%8E%E6%80%9D%E6%BD%BC%23) `250.9K 🔥` `NEW`
1. [布伦森回应FMVP](https://s.weibo.com/weibo?q=%23%E5%B8%83%E4%BC%A6%E6%A3%AE%E5%9B%9E%E5%BA%94FMVP%23) `250.2K 🔥` `NEW`
1. [王毅抵达蒙古国现场画面](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E6%8A%B5%E8%BE%BE%E8%92%99%E5%8F%A4%E5%9B%BD%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `249.4K 🔥` `NEW`
1. [王濛戒酒吧我求你](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%88%92%E9%85%92%E5%90%A7%E6%88%91%E6%B1%82%E4%BD%A0%23) `246.5K 🔥` `NEW`
1. [曝井川里予新恋情](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BA%95%E5%B7%9D%E9%87%8C%E4%BA%88%E6%96%B0%E6%81%8B%E6%83%85%23) `245.3K 🔥` `NEW`
1. [王橹杰北京](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%8C%97%E4%BA%AC%23) `244.0K 🔥` `NEW`
1. [李思潼走红毯也穿工服](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%80%9D%E6%BD%BC%E8%B5%B0%E7%BA%A2%E6%AF%AF%E4%B9%9F%E7%A9%BF%E5%B7%A5%E6%9C%8D%23) `243.2K 🔥` `NEW`
1. [TES对战BLG (TES vs. BLG)](https://s.weibo.com/weibo?q=%23TES%E5%AF%B9%E6%88%98BLG%23) `239.3K 🔥` `NEW`
1. [世界上少了撕拉片但多了angelababy神图](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B8%8A%E5%B0%91%E4%BA%86%E6%92%95%E6%8B%89%E7%89%87%E4%BD%86%E5%A4%9A%E4%BA%86angelababy%E7%A5%9E%E5%9B%BE%23) `237.1K 🔥` `NEW`
1. [宁艺卓被微博大眼美颜功能惊到](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E8%A2%AB%E5%BE%AE%E5%8D%9A%E5%A4%A7%E7%9C%BC%E7%BE%8E%E9%A2%9C%E5%8A%9F%E8%83%BD%E6%83%8A%E5%88%B0%23) `236.6K 🔥` `NEW`
1. [白露生病了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%9C%B2%E7%94%9F%E7%97%85%E4%BA%86%23) `219.5K 🔥` `NEW`
1. [微博电影之夜](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E7%94%B5%E5%BD%B1%E4%B9%8B%E5%A4%9C%23) `193.6K 🔥` `NEW`
1. [T1对战GEN](https://s.weibo.com/weibo?q=%23T1%E5%AF%B9%E6%88%98GEN%23) `188.8K 🔥` `NEW`
1. [日本网民称邻居投诉空调外机太吵](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E6%B0%91%E7%A7%B0%E9%82%BB%E5%B1%85%E6%8A%95%E8%AF%89%E7%A9%BA%E8%B0%83%E5%A4%96%E6%9C%BA%E5%A4%AA%E5%90%B5%23) `185.4K 🔥` `NEW`
1. [盛世天下女帝篇破百万销量](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E4%B8%96%E5%A4%A9%E4%B8%8B%E5%A5%B3%E5%B8%9D%E7%AF%87%E7%A0%B4%E7%99%BE%E4%B8%87%E9%94%80%E9%87%8F%23) `180.5K 🔥` `NEW`
1. [巴西女子蹦极坠亡前曾戏谑发文](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E5%A5%B3%E5%AD%90%E8%B9%A6%E6%9E%81%E5%9D%A0%E4%BA%A1%E5%89%8D%E6%9B%BE%E6%88%8F%E8%B0%91%E5%8F%91%E6%96%87%23) `180.4K 🔥` `NEW`
1. [黄大炜去世](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%A7%E7%82%9C%E5%8E%BB%E4%B8%96%23) `881.8K 🔥` `+158%`
1. [女子两小时试40多件衣服买33件 (Woman tried on more than 40 clothes and bought 33 in two hours)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%A4%E5%B0%8F%E6%97%B6%E8%AF%9540%E5%A4%9A%E4%BB%B6%E8%A1%A3%E6%9C%8D%E4%B9%B033%E4%BB%B6%23) `261.1K 🔥` `+30%`
1. [男子攀登火山口坠入高温硫磺湖身亡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%94%80%E7%99%BB%E7%81%AB%E5%B1%B1%E5%8F%A3%E5%9D%A0%E5%85%A5%E9%AB%98%E6%B8%A9%E7%A1%AB%E7%A3%BA%E6%B9%96%E8%BA%AB%E4%BA%A1%23) `260.4K 🔥`
1. [疑似苏翊鸣新恋情](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%96%B0%E6%81%8B%E6%83%85%23) `253.2K 🔥`
1. [曝赵樱子有孩子了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B5%B5%E6%A8%B1%E5%AD%90%E6%9C%89%E5%AD%A9%E5%AD%90%E4%BA%86%23) `248.2K 🔥`
1. [苏翊鸣 朱易 (Su Yiming Zhu Yi)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%20%E6%9C%B1%E6%98%93%23) `244.2K 🔥`
1. [大疆影石法庭死磕产品最高降2500元](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86%E5%BD%B1%E7%9F%B3%E6%B3%95%E5%BA%AD%E6%AD%BB%E7%A3%95%E4%BA%A7%E5%93%81%E6%9C%80%E9%AB%98%E9%99%8D2500%E5%85%83%23) `182.9K 🔥`
1. [小县城取消中考选拔全员直升高中 (The small county canceled the high school entrance examination and selected all students to go directly to high school.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8E%BF%E5%9F%8E%E5%8F%96%E6%B6%88%E4%B8%AD%E8%80%83%E9%80%89%E6%8B%94%E5%85%A8%E5%91%98%E7%9B%B4%E5%8D%87%E9%AB%98%E4%B8%AD%23) `1.3M 🔥` `-57%`
1. [等等太帅了 (Wait, he's so handsome)](https://s.weibo.com/weibo?q=%23%E7%AD%89%E7%AD%89%E5%A4%AA%E5%B8%85%E4%BA%86%23) `261.9K 🔥` `-24%`
1. [人一定要主动主动再主动](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E4%B8%BB%E5%8A%A8%E4%B8%BB%E5%8A%A8%E5%86%8D%E4%B8%BB%E5%8A%A8%23) `247.1K 🔥` `-27%`
1. [曾沛慈买了520套孙怡杂志](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B9%B0%E4%BA%86520%E5%A5%97%E5%AD%99%E6%80%A1%E6%9D%82%E5%BF%97%23) `214.2K 🔥` `-36%`
1. [微博电影之夜红毯](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E7%94%B5%E5%BD%B1%E4%B9%8B%E5%A4%9C%E7%BA%A2%E6%AF%AF%23) `187.7K 🔥` `-55%`
1. [机器人伴侣仅限成人购买](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BC%B4%E4%BE%A3%E4%BB%85%E9%99%90%E6%88%90%E4%BA%BA%E8%B4%AD%E4%B9%B0%23) `185.9K 🔥` `-45%`

Updated at 2026-06-14 18:31:28

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
