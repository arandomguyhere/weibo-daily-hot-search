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

1. [樊振东若不参赛机会或给温瑞博 (If Fan Zhendong does not have the chance to participate, he may give Wen Ruibo)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%8B%A5%E4%B8%8D%E5%8F%82%E8%B5%9B%E6%9C%BA%E4%BC%9A%E6%88%96%E7%BB%99%E6%B8%A9%E7%91%9E%E5%8D%9A%23) `1.0M 🔥` `NEW`
1. [罗技回应发布侮辱性广告](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%8A%80%E5%9B%9E%E5%BA%94%E5%8F%91%E5%B8%83%E4%BE%AE%E8%BE%B1%E6%80%A7%E5%B9%BF%E5%91%8A%23) `866.7K 🔥` `NEW`
1. [2026中国网络媒体论坛](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E5%AA%92%E4%BD%93%E8%AE%BA%E5%9D%9B%23) `584.3K 🔥` `NEW`
1. [伊朗回应美国提出的停火协议](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%9B%BD%E6%8F%90%E5%87%BA%E7%9A%84%E5%81%9C%E7%81%AB%E5%8D%8F%E8%AE%AE%23) `325.8K 🔥` `NEW`
1. [游客因拍照设备太专业被景区驱赶](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E5%9B%A0%E6%8B%8D%E7%85%A7%E8%AE%BE%E5%A4%87%E5%A4%AA%E4%B8%93%E4%B8%9A%E8%A2%AB%E6%99%AF%E5%8C%BA%E9%A9%B1%E8%B5%B6%23) `250.4K 🔥` `NEW`
1. [千金不换 撤档](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%87%91%E4%B8%8D%E6%8D%A2%20%E6%92%A4%E6%A1%A3%23) `221.0K 🔥` `NEW`
1. [LPL进入大回归时代](https://s.weibo.com/weibo?q=%23LPL%E8%BF%9B%E5%85%A5%E5%A4%A7%E5%9B%9E%E5%BD%92%E6%97%B6%E4%BB%A3%23) `204.0K 🔥` `NEW`
1. [奥运女子比赛仅限生理女性](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%90%E5%A5%B3%E5%AD%90%E6%AF%94%E8%B5%9B%E4%BB%85%E9%99%90%E7%94%9F%E7%90%86%E5%A5%B3%E6%80%A7%23) `195.5K 🔥` `NEW`
1. [孟子义李昀锐装不熟](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E8%A3%85%E4%B8%8D%E7%86%9F%23) `190.8K 🔥` `NEW`
1. [央视新闻夸了张凌赫雉鸡翎造型](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%96%B0%E9%97%BB%E5%A4%B8%E4%BA%86%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%9B%89%E9%B8%A1%E7%BF%8E%E9%80%A0%E5%9E%8B%23) `135.3K 🔥` `NEW`
1. [韩国垃圾袋一袋难求 (It’s hard to find a garbage bag in Korea)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%9E%83%E5%9C%BE%E8%A2%8B%E4%B8%80%E8%A2%8B%E9%9A%BE%E6%B1%82%23) `132.1K 🔥` `NEW`
1. [逐玉最好的售后](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%9C%80%E5%A5%BD%E7%9A%84%E5%94%AE%E5%90%8E%23) `126.9K 🔥` `NEW`
1. [医院回应女婴刚出生一天没有肛门](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%A9%B4%E5%88%9A%E5%87%BA%E7%94%9F%E4%B8%80%E5%A4%A9%E6%B2%A1%E6%9C%89%E8%82%9B%E9%97%A8%23) `125.3K 🔥` `NEW`
1. [38岁教培创始人突发心梗后怕不已](https://s.weibo.com/weibo?q=%2338%E5%B2%81%E6%95%99%E5%9F%B9%E5%88%9B%E5%A7%8B%E4%BA%BA%E7%AA%81%E5%8F%91%E5%BF%83%E6%A2%97%E5%90%8E%E6%80%95%E4%B8%8D%E5%B7%B2%23) `109.4K 🔥` `NEW`
1. [名创优品店员抓小偷还手被拒委屈奖](https://s.weibo.com/weibo?q=%23%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%E5%BA%97%E5%91%98%E6%8A%93%E5%B0%8F%E5%81%B7%E8%BF%98%E6%89%8B%E8%A2%AB%E6%8B%92%E5%A7%94%E5%B1%88%E5%A5%96%23) `100.4K 🔥` `NEW`
1. [一笑随歌](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%91%E9%9A%8F%E6%AD%8C%23) `99.0K 🔥` `NEW`
1. [患者没挂上号医生蹲在地上看CT片](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%80%85%E6%B2%A1%E6%8C%82%E4%B8%8A%E5%8F%B7%E5%8C%BB%E7%94%9F%E8%B9%B2%E5%9C%A8%E5%9C%B0%E4%B8%8A%E7%9C%8BCT%E7%89%87%23) `89.5K 🔥` `NEW`
1. [李卿片场三次翻车被导演保留](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8D%BF%E7%89%87%E5%9C%BA%E4%B8%89%E6%AC%A1%E7%BF%BB%E8%BD%A6%E8%A2%AB%E5%AF%BC%E6%BC%94%E4%BF%9D%E7%95%99%23) `88.8K 🔥` `NEW`
1. [重庆一小区租户高空抛撒大量现金](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E4%B8%80%E5%B0%8F%E5%8C%BA%E7%A7%9F%E6%88%B7%E9%AB%98%E7%A9%BA%E6%8A%9B%E6%92%92%E5%A4%A7%E9%87%8F%E7%8E%B0%E9%87%91%23) `87.1K 🔥` `NEW`
1. [白敬亭郑合惠子的cp有多火](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E7%9A%84cp%E6%9C%89%E5%A4%9A%E7%81%AB%23) `84.5K 🔥` `NEW`
1. [薛之谦演唱会ProMax版舞台 (Joker Xue’s concert ProMax version stage)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9AProMax%E7%89%88%E8%88%9E%E5%8F%B0%23) `78.0K 🔥` `NEW`
1. [婺源江岭油菜花美成一片](https://s.weibo.com/weibo?q=%23%E5%A9%BA%E6%BA%90%E6%B1%9F%E5%B2%AD%E6%B2%B9%E8%8F%9C%E8%8A%B1%E7%BE%8E%E6%88%90%E4%B8%80%E7%89%87%23) `76.6K 🔥` `NEW`
1. [警犬明明看见人类摸我了](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E7%8A%AC%E6%98%8E%E6%98%8E%E7%9C%8B%E8%A7%81%E4%BA%BA%E7%B1%BB%E6%91%B8%E6%88%91%E4%BA%86%23) `76.5K 🔥` `NEW`
1. [村民搬家时发现91年前红军借据](https://s.weibo.com/weibo?q=%23%E6%9D%91%E6%B0%91%E6%90%AC%E5%AE%B6%E6%97%B6%E5%8F%91%E7%8E%B091%E5%B9%B4%E5%89%8D%E7%BA%A2%E5%86%9B%E5%80%9F%E6%8D%AE%23) `76.5K 🔥` `NEW`
1. [呷哺呷哺2025年亏损2.96亿](https://s.weibo.com/weibo?q=%23%E5%91%B7%E5%93%BA%E5%91%B7%E5%93%BA2025%E5%B9%B4%E4%BA%8F%E6%8D%9F2.96%E4%BA%BF%23) `76.3K 🔥` `NEW`
1. [张柏芝杨超越同框](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E6%9D%A8%E8%B6%85%E8%B6%8A%E5%90%8C%E6%A1%86%23) `76.2K 🔥` `NEW`
1. [复活吧颜值夫妇](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E6%B4%BB%E5%90%A7%E9%A2%9C%E5%80%BC%E5%A4%AB%E5%A6%87%23) `75.9K 🔥` `NEW`
1. [18岁小伙醉酒后从酒店5楼坠亡](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E5%B0%8F%E4%BC%99%E9%86%89%E9%85%92%E5%90%8E%E4%BB%8E%E9%85%92%E5%BA%975%E6%A5%BC%E5%9D%A0%E4%BA%A1%23) `75.8K 🔥` `NEW`
1. [陈丽君短发造型也太帅了吧](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E7%9F%AD%E5%8F%91%E9%80%A0%E5%9E%8B%E4%B9%9F%E5%A4%AA%E5%B8%85%E4%BA%86%E5%90%A7%23) `75.7K 🔥` `NEW`
1. [隐身的名字](https://s.weibo.com/weibo?q=%23%E9%9A%90%E8%BA%AB%E7%9A%84%E5%90%8D%E5%AD%97%23) `75.7K 🔥` `NEW`
1. [日网痛批日本小学午餐 (Japanese network slams Japanese elementary school lunches)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E7%BD%91%E7%97%9B%E6%89%B9%E6%97%A5%E6%9C%AC%E5%B0%8F%E5%AD%A6%E5%8D%88%E9%A4%90%23) `180.3K 🔥` `+88%`
1. [郭敬明需要避谶](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E9%9C%80%E8%A6%81%E9%81%BF%E8%B0%B6%23) `123.4K 🔥` `+78%`
1. [洛克王国世界全平台正式上线](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%E4%B8%96%E7%95%8C%E5%85%A8%E5%B9%B3%E5%8F%B0%E6%AD%A3%E5%BC%8F%E4%B8%8A%E7%BA%BF%23) `244.0K 🔥`
1. [林俊杰称自己生命的沙漏加速了 (JJ Lin said the hourglass of his life has accelerated)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E7%A7%B0%E8%87%AA%E5%B7%B1%E7%94%9F%E5%91%BD%E7%9A%84%E6%B2%99%E6%BC%8F%E5%8A%A0%E9%80%9F%E4%BA%86%23) `178.1K 🔥`
1. [逐玉大结局 (Chasing Jade Finale)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%A4%A7%E7%BB%93%E5%B1%80%23) `105.4K 🔥`
1. [王俊凯卡点521](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8D%A1%E7%82%B9521%23) `76.0K 🔥`
1. [白敬亭郑合惠子互动](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E4%BA%92%E5%8A%A8%23) `307.0K 🔥` `-26%`
1. [伊朗导弹2小时内4次密集砸向以本土](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B92%E5%B0%8F%E6%97%B6%E5%86%854%E6%AC%A1%E5%AF%86%E9%9B%86%E7%A0%B8%E5%90%91%E4%BB%A5%E6%9C%AC%E5%9C%9F%23) `197.0K 🔥` `-43%`
1. [罗技侮辱消费者](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%8A%80%E4%BE%AE%E8%BE%B1%E6%B6%88%E8%B4%B9%E8%80%85%23) `187.5K 🔥` `-44%`
1. [梁祯元 李羲承](https://s.weibo.com/weibo?q=%23%E6%A2%81%E7%A5%AF%E5%85%83%20%E6%9D%8E%E7%BE%B2%E6%89%BF%23) `175.0K 🔥` `-48%`
1. [罗技 像狗一样跑过来](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%8A%80%20%E5%83%8F%E7%8B%97%E4%B8%80%E6%A0%B7%E8%B7%91%E8%BF%87%E6%9D%A5%23) `143.7K 🔥` `-46%`
1. [留几手发文暗讽被全网炮轰](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E5%8F%91%E6%96%87%E6%9A%97%E8%AE%BD%E8%A2%AB%E5%85%A8%E7%BD%91%E7%82%AE%E8%BD%B0%23) `142.5K 🔥` `-25%`
1. [谢征樊长玉被窝戏删掉了 (The scene where Xie Zheng and Fan Changyu were in bed was deleted)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%A8%8A%E9%95%BF%E7%8E%89%E8%A2%AB%E7%AA%9D%E6%88%8F%E5%88%A0%E6%8E%89%E4%BA%86%23) `124.4K 🔥` `-63%`
1. [早期心血管病可能反映在脸上 (Early cardiovascular disease may be reflected on the face)](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%9C%9F%E5%BF%83%E8%A1%80%E7%AE%A1%E7%97%85%E5%8F%AF%E8%83%BD%E5%8F%8D%E6%98%A0%E5%9C%A8%E8%84%B8%E4%B8%8A%23) `115.3K 🔥` `-89%`
1. [田曦薇张凌赫 二搭 (Tian Xiwei Zhang Linghe second partner)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E4%BA%8C%E6%90%AD%23) `113.7K 🔥` `-41%`
1. [王一博 乐华](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E4%B9%90%E5%8D%8E%23) `96.8K 🔥` `-28%`
1. [女子买24元卤菜顺走40块钱大肠头 (Woman buys braised vegetables for 24 yuan and walks away with large intestines for 40 yuan)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B024%E5%85%83%E5%8D%A4%E8%8F%9C%E9%A1%BA%E8%B5%B040%E5%9D%97%E9%92%B1%E5%A4%A7%E8%82%A0%E5%A4%B4%23) `77.8K 🔥` `-43%`
1. [因抢玩具殴打2岁女童女子被行拘](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E6%8A%A2%E7%8E%A9%E5%85%B7%E6%AE%B4%E6%89%932%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%A5%B3%E5%AD%90%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `76.6K 🔥` `-77%`
1. [王俊凯 演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E6%BC%94%E5%94%B1%E4%BC%9A%23) `76.4K 🔥` `-24%`
1. [43岁不健身和61岁健身的区别](https://s.weibo.com/weibo?q=%2343%E5%B2%81%E4%B8%8D%E5%81%A5%E8%BA%AB%E5%92%8C61%E5%B2%81%E5%81%A5%E8%BA%AB%E7%9A%84%E5%8C%BA%E5%88%AB%23) `76.2K 🔥` `-62%`
1. [中国无人飞枪曝光](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%97%A0%E4%BA%BA%E9%A3%9E%E6%9E%AA%E6%9B%9D%E5%85%89%23) `76.1K 🔥` `-78%`

Updated at 2026-03-26 23:42:13

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
