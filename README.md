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

1. [奔跑吧回应收视率低 (Run Bar responds to low ratings)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E5%9B%9E%E5%BA%94%E6%94%B6%E8%A7%86%E7%8E%87%E4%BD%8E%23) `2.7M 🔥` `NEW`
1. [王暖暖自曝长期遭MCN公司压榨](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9A%96%E6%9A%96%E8%87%AA%E6%9B%9D%E9%95%BF%E6%9C%9F%E9%81%ADMCN%E5%85%AC%E5%8F%B8%E5%8E%8B%E6%A6%A8%23) `1.3M 🔥` `NEW`
1. [好的营商环境就是生产力](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E7%9A%84%E8%90%A5%E5%95%86%E7%8E%AF%E5%A2%83%E5%B0%B1%E6%98%AF%E7%94%9F%E4%BA%A7%E5%8A%9B%23) `1.3M 🔥` `NEW`
1. [密室大逃脱 张真源](https://s.weibo.com/weibo?q=%23%E5%AF%86%E5%AE%A4%E5%A4%A7%E9%80%83%E8%84%B1%20%E5%BC%A0%E7%9C%9F%E6%BA%90%23) `1.3M 🔥` `NEW`
1. [救救跑男](https://s.weibo.com/weibo?q=%23%E6%95%91%E6%95%91%E8%B7%91%E7%94%B7%23) `1.2M 🔥` `NEW`
1. [淘宝免单](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%85%8D%E5%8D%95%23) `930.1K 🔥` `NEW`
1. [五角大楼公布的UFO画面](https://s.weibo.com/weibo?q=%23%E4%BA%94%E8%A7%92%E5%A4%A7%E6%A5%BC%E5%85%AC%E5%B8%83%E7%9A%84UFO%E7%94%BB%E9%9D%A2%23) `390.3K 🔥` `NEW`
1. [DeepSeek正式跨入图文交互时代](https://s.weibo.com/weibo?q=%23DeepSeek%E6%AD%A3%E5%BC%8F%E8%B7%A8%E5%85%A5%E5%9B%BE%E6%96%87%E4%BA%A4%E4%BA%92%E6%97%B6%E4%BB%A3%23) `344.9K 🔥` `NEW`
1. [皮皮虾事件游客已删除所有爆料内容](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E7%9A%AE%E8%99%BE%E4%BA%8B%E4%BB%B6%E6%B8%B8%E5%AE%A2%E5%B7%B2%E5%88%A0%E9%99%A4%E6%89%80%E6%9C%89%E7%88%86%E6%96%99%E5%86%85%E5%AE%B9%23) `341.2K 🔥` `NEW`
1. [跑男疯狂证明自己](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E7%96%AF%E7%8B%82%E8%AF%81%E6%98%8E%E8%87%AA%E5%B7%B1%23) `337.0K 🔥` `NEW`
1. [刘涛骂哭新人女演员 (Liu Tao scolds and cries new actress)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E9%AA%82%E5%93%AD%E6%96%B0%E4%BA%BA%E5%A5%B3%E6%BC%94%E5%91%98%23) `326.1K 🔥` `NEW`
1. [iPhone18Pro七大升级](https://s.weibo.com/weibo?q=%23iPhone18Pro%E4%B8%83%E5%A4%A7%E5%8D%87%E7%BA%A7%23) `319.7K 🔥` `NEW`
1. [白鹿主动让C](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%BB%E5%8A%A8%E8%AE%A9C%23) `309.1K 🔥` `NEW`
1. [全国首家烧烤学院报名超4千录取30](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E9%A6%96%E5%AE%B6%E7%83%A7%E7%83%A4%E5%AD%A6%E9%99%A2%E6%8A%A5%E5%90%8D%E8%B6%854%E5%8D%83%E5%BD%95%E5%8F%9630%23) `262.1K 🔥` `NEW`
1. [陌生男子趁女生熟睡潜入卧室留体液](https://s.weibo.com/weibo?q=%23%E9%99%8C%E7%94%9F%E7%94%B7%E5%AD%90%E8%B6%81%E5%A5%B3%E7%94%9F%E7%86%9F%E7%9D%A1%E6%BD%9C%E5%85%A5%E5%8D%A7%E5%AE%A4%E7%95%99%E4%BD%93%E6%B6%B2%23) `259.7K 🔥` `NEW`
1. [王暖暖拍摄时突然倒地](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9A%96%E6%9A%96%E6%8B%8D%E6%91%84%E6%97%B6%E7%AA%81%E7%84%B6%E5%80%92%E5%9C%B0%23) `254.9K 🔥` `NEW`
1. [天赐道歉](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%B5%90%E9%81%93%E6%AD%89%23) `246.8K 🔥` `NEW`
1. [偏偏宠爱 宋威龙包上恩](https://s.weibo.com/weibo?q=%23%E5%81%8F%E5%81%8F%E5%AE%A0%E7%88%B1%20%E5%AE%8B%E5%A8%81%E9%BE%99%E5%8C%85%E4%B8%8A%E6%81%A9%23) `239.9K 🔥` `NEW`
1. [香港警方解密湾仔双尸案](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E8%AD%A6%E6%96%B9%E8%A7%A3%E5%AF%86%E6%B9%BE%E4%BB%94%E5%8F%8C%E5%B0%B8%E6%A1%88%23) `237.2K 🔥` `NEW`
1. [李现是张婧仪的站姐吧](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E6%98%AF%E5%BC%A0%E5%A9%A7%E4%BB%AA%E7%9A%84%E7%AB%99%E5%A7%90%E5%90%A7%23) `237.2K 🔥` `NEW`
1. [英伟达新技术翻车 (Nvidia’s new technology rolls over)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%96%B0%E6%8A%80%E6%9C%AF%E7%BF%BB%E8%BD%A6%23) `237.0K 🔥` `NEW`
1. [阿信感谢王俊凯](https://s.weibo.com/weibo?q=%23%E9%98%BF%E4%BF%A1%E6%84%9F%E8%B0%A2%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `236.9K 🔥` `NEW`
1. [王暖暖差点没抢救回来](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9A%96%E6%9A%96%E5%B7%AE%E7%82%B9%E6%B2%A1%E6%8A%A2%E6%95%91%E5%9B%9E%E6%9D%A5%23) `236.8K 🔥` `NEW`
1. [李金铭答应没事多出来互动](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E7%AD%94%E5%BA%94%E6%B2%A1%E4%BA%8B%E5%A4%9A%E5%87%BA%E6%9D%A5%E4%BA%92%E5%8A%A8%23) `232.9K 🔥` `NEW`
1. [浪姐三公已经彩排三次了](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E5%B7%B2%E7%BB%8F%E5%BD%A9%E6%8E%92%E4%B8%89%E6%AC%A1%E4%BA%86%23) `229.5K 🔥` `NEW`
1. [多国网友力挺中国拒世界杯天价转播权](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E7%BD%91%E5%8F%8B%E5%8A%9B%E6%8C%BA%E4%B8%AD%E5%9B%BD%E6%8B%92%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%A9%E4%BB%B7%E8%BD%AC%E6%92%AD%E6%9D%83%23) `224.8K 🔥` `NEW`
1. [尚界Z7挑战世界落差最高山路](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%E6%8C%91%E6%88%98%E4%B8%96%E7%95%8C%E8%90%BD%E5%B7%AE%E6%9C%80%E9%AB%98%E5%B1%B1%E8%B7%AF%23) `223.2K 🔥` `NEW`
1. [时代姐妹花4个人有3个群](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%A7%90%E5%A6%B9%E8%8A%B14%E4%B8%AA%E4%BA%BA%E6%9C%893%E4%B8%AA%E7%BE%A4%23) `222.5K 🔥` `NEW`
1. [马刺vs森林狼](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BAvs%E6%A3%AE%E6%9E%97%E7%8B%BC%23) `207.5K 🔥` `NEW`
1. [商场的镜子会骗人](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%9C%BA%E7%9A%84%E9%95%9C%E5%AD%90%E4%BC%9A%E9%AA%97%E4%BA%BA%23) `203.2K 🔥` `NEW`
1. [中国地铁被谬认为日本还在发生 (China's subway is mistakenly thought to be happening in Japan)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9C%B0%E9%93%81%E8%A2%AB%E8%B0%AC%E8%AE%A4%E4%B8%BA%E6%97%A5%E6%9C%AC%E8%BF%98%E5%9C%A8%E5%8F%91%E7%94%9F%23) `201.0K 🔥` `NEW`
1. [小米高管回应保时捷纽北超越SU7](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%AB%98%E7%AE%A1%E5%9B%9E%E5%BA%94%E4%BF%9D%E6%97%B6%E6%8D%B7%E7%BA%BD%E5%8C%97%E8%B6%85%E8%B6%8ASU7%23) `194.7K 🔥` `NEW`
1. [13岁女孩沉迷二次元花光家里18万](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%B2%89%E8%BF%B7%E4%BA%8C%E6%AC%A1%E5%85%83%E8%8A%B1%E5%85%89%E5%AE%B6%E9%87%8C18%E4%B8%87%23) `191.5K 🔥` `NEW`
1. [男子杀15岁少女弃尸和妻子外出吃饭](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%8015%E5%B2%81%E5%B0%91%E5%A5%B3%E5%BC%83%E5%B0%B8%E5%92%8C%E5%A6%BB%E5%AD%90%E5%A4%96%E5%87%BA%E5%90%83%E9%A5%AD%23) `174.7K 🔥` `NEW`
1. [尘白禁区退钱](https://s.weibo.com/weibo?q=%23%E5%B0%98%E7%99%BD%E7%A6%81%E5%8C%BA%E9%80%80%E9%92%B1%23) `170.0K 🔥` `NEW`
1. [12名农民工遭车位抵薪32万元](https://s.weibo.com/weibo?q=%2312%E5%90%8D%E5%86%9C%E6%B0%91%E5%B7%A5%E9%81%AD%E8%BD%A6%E4%BD%8D%E6%8A%B5%E8%96%AA32%E4%B8%87%E5%85%83%23) `159.3K 🔥` `NEW`
1. [网红七七搭档刘敏涛演戏](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E4%B8%83%E4%B8%83%E6%90%AD%E6%A1%A3%E5%88%98%E6%95%8F%E6%B6%9B%E6%BC%94%E6%88%8F%23) `152.5K 🔥` `NEW`
1. [保罗乔治首节15分全场不得15分啊](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%BD%97%E4%B9%94%E6%B2%BB%E9%A6%96%E8%8A%8215%E5%88%86%E5%85%A8%E5%9C%BA%E4%B8%8D%E5%BE%9715%E5%88%86%E5%95%8A%23) `148.6K 🔥` `NEW`
1. [范丞丞首选白鹿](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E9%A6%96%E9%80%89%E7%99%BD%E9%B9%BF%23) `141.2K 🔥` `NEW`
1. [红场阅兵前普京密集会见外国领导人](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%9C%BA%E9%98%85%E5%85%B5%E5%89%8D%E6%99%AE%E4%BA%AC%E5%AF%86%E9%9B%86%E4%BC%9A%E8%A7%81%E5%A4%96%E5%9B%BD%E9%A2%86%E5%AF%BC%E4%BA%BA%23) `141.0K 🔥` `NEW`
1. [很喜欢登机前的十分钟 (I love the ten minutes before boarding.)](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%96%9C%E6%AC%A2%E7%99%BB%E6%9C%BA%E5%89%8D%E7%9A%84%E5%8D%81%E5%88%86%E9%92%9F%23) `636.8K 🔥`
1. [李金铭发表情回应](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%8F%91%E8%A1%A8%E6%83%85%E5%9B%9E%E5%BA%94%23) `317.1K 🔥`
1. [中国绝不接受当世界杯提款机](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BB%9D%E4%B8%8D%E6%8E%A5%E5%8F%97%E5%BD%93%E4%B8%96%E7%95%8C%E6%9D%AF%E6%8F%90%E6%AC%BE%E6%9C%BA%23) `305.8K 🔥`
1. [南京富豪遇害凶宅68.2万拍出](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%AF%8C%E8%B1%AA%E9%81%87%E5%AE%B3%E5%87%B6%E5%AE%8568.2%E4%B8%87%E6%8B%8D%E5%87%BA%23) `270.1K 🔥`
1. [刘涛妈祖诞辰守夜](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E5%A6%88%E7%A5%96%E8%AF%9E%E8%BE%B0%E5%AE%88%E5%A4%9C%23) `267.4K 🔥`
1. [田曦薇 刘海](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E5%88%98%E6%B5%B7%23) `242.4K 🔥`
1. [同价买奥迪还是买小米](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%BB%B7%E4%B9%B0%E5%A5%A5%E8%BF%AA%E8%BF%98%E6%98%AF%E4%B9%B0%E5%B0%8F%E7%B1%B3%23) `405.6K 🔥` `-41%`
1. [跑男新一期收视率创新低 (The ratings for the new episode of Running Man hit a new low)](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%96%B0%E4%B8%80%E6%9C%9F%E6%94%B6%E8%A7%86%E7%8E%87%E5%88%9B%E6%96%B0%E4%BD%8E%23) `224.0K 🔥` `-90%`
1. [文佳煐第一位95后韩国三大影后 (Moon Ga Young is the first among the top three Korean actresses born in 1995.)](https://s.weibo.com/weibo?q=%23%E6%96%87%E4%BD%B3%E7%85%90%E7%AC%AC%E4%B8%80%E4%BD%8D95%E5%90%8E%E9%9F%A9%E5%9B%BD%E4%B8%89%E5%A4%A7%E5%BD%B1%E5%90%8E%23) `157.5K 🔥` `-43%`
1. [DRG老板道歉](https://s.weibo.com/weibo?q=%23DRG%E8%80%81%E6%9D%BF%E9%81%93%E6%AD%89%23) `142.4K 🔥` `-21%`

Updated at 2026-05-09 12:38:27

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
