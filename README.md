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

1. [iPhone 18 Pro 新品来袭](https://s.weibo.com/weibo?q=%23iPhone%2018%20Pro%20%E6%96%B0%E5%93%81%E6%9D%A5%E8%A2%AD%23) `841.2K 🔥` `NEW`
1. [许兰香被发卖青楼](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%85%B0%E9%A6%99%E8%A2%AB%E5%8F%91%E5%8D%96%E9%9D%92%E6%A5%BC%23) `816.5K 🔥` `NEW`
1. [特朗普称获格陵兰岛永久安全控制权](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%8E%B7%E6%A0%BC%E9%99%B5%E5%85%B0%E5%B2%9B%E6%B0%B8%E4%B9%85%E5%AE%89%E5%85%A8%E6%8E%A7%E5%88%B6%E6%9D%83%23) `390.7K 🔥` `NEW`
1. [张凯毅官宣离婚](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%AF%E6%AF%85%E5%AE%98%E5%AE%A3%E7%A6%BB%E5%A9%9A%23) `272.9K 🔥` `NEW`
1. [池昌旭林珍娜是关系很铁的好友关系](https://s.weibo.com/weibo?q=%23%E6%B1%A0%E6%98%8C%E6%97%AD%E6%9E%97%E7%8F%8D%E5%A8%9C%E6%98%AF%E5%85%B3%E7%B3%BB%E5%BE%88%E9%93%81%E7%9A%84%E5%A5%BD%E5%8F%8B%E5%85%B3%E7%B3%BB%23) `269.6K 🔥` `NEW`
1. [中国男篮队长胡明轩赛后发声](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E9%98%9F%E9%95%BF%E8%83%A1%E6%98%8E%E8%BD%A9%E8%B5%9B%E5%90%8E%E5%8F%91%E5%A3%B0%23) `268.7K 🔥` `NEW`
1. [王一博嘉人十月刊封面宣发节奏](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%98%89%E4%BA%BA%E5%8D%81%E6%9C%88%E5%88%8A%E5%B0%81%E9%9D%A2%E5%AE%A3%E5%8F%91%E8%8A%82%E5%A5%8F%23) `268.1K 🔥` `NEW`
1. [孙千上过央视春晚哈尔滨分会场](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E4%B8%8A%E8%BF%87%E5%A4%AE%E8%A7%86%E6%98%A5%E6%99%9A%E5%93%88%E5%B0%94%E6%BB%A8%E5%88%86%E4%BC%9A%E5%9C%BA%23) `198.4K 🔥` `NEW`
1. [周翊然问孙怡的腿有没有一米二](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%BF%8A%E7%84%B6%E9%97%AE%E5%AD%99%E6%80%A1%E7%9A%84%E8%85%BF%E6%9C%89%E6%B2%A1%E6%9C%89%E4%B8%80%E7%B1%B3%E4%BA%8C%23) `179.2K 🔥` `NEW`
1. [旧手机格式化也不安全](https://s.weibo.com/weibo?q=%23%E6%97%A7%E6%89%8B%E6%9C%BA%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%B9%9F%E4%B8%8D%E5%AE%89%E5%85%A8%23) `177.9K 🔥` `NEW`
1. [晚上11点是睡眠分水岭](https://s.weibo.com/weibo?q=%23%E6%99%9A%E4%B8%8A11%E7%82%B9%E6%98%AF%E7%9D%A1%E7%9C%A0%E5%88%86%E6%B0%B4%E5%B2%AD%23) `177.8K 🔥` `NEW`
1. [罗永浩评价难吃为何大众不买账了](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%AF%84%E4%BB%B7%E9%9A%BE%E5%90%83%E4%B8%BA%E4%BD%95%E5%A4%A7%E4%BC%97%E4%B8%8D%E4%B9%B0%E8%B4%A6%E4%BA%86%23) `177.6K 🔥` `NEW`
1. [女子咳痰3年竟因洗澡时1个小动作](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%92%B3%E7%97%B03%E5%B9%B4%E7%AB%9F%E5%9B%A0%E6%B4%97%E6%BE%A1%E6%97%B61%E4%B8%AA%E5%B0%8F%E5%8A%A8%E4%BD%9C%23) `177.4K 🔥` `NEW`
1. [田栩宁梓渝生日都是樱桃蛋糕](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%A0%A9%E5%AE%81%E6%A2%93%E6%B8%9D%E7%94%9F%E6%97%A5%E9%83%BD%E6%98%AF%E6%A8%B1%E6%A1%83%E8%9B%8B%E7%B3%95%23) `154.3K 🔥` `NEW`
1. [刘学义对李梦的穿搭欲言又止](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%AF%B9%E6%9D%8E%E6%A2%A6%E7%9A%84%E7%A9%BF%E6%90%AD%E6%AC%B2%E8%A8%80%E5%8F%88%E6%AD%A2%23) `144.3K 🔥` `NEW`
1. [台独分子称大陆室外没有贩卖机](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E7%8B%AC%E5%88%86%E5%AD%90%E7%A7%B0%E5%A4%A7%E9%99%86%E5%AE%A4%E5%A4%96%E6%B2%A1%E6%9C%89%E8%B4%A9%E5%8D%96%E6%9C%BA%23) `133.7K 🔥` `NEW`
1. [吕蕺儿当花魁救了兰香](https://s.weibo.com/weibo?q=%23%E5%90%95%E8%95%BA%E5%84%BF%E5%BD%93%E8%8A%B1%E9%AD%81%E6%95%91%E4%BA%86%E5%85%B0%E9%A6%99%23) `123.2K 🔥` `NEW`
1. [有西藏室友才有的牦牛肉干](https://s.weibo.com/weibo?q=%23%E6%9C%89%E8%A5%BF%E8%97%8F%E5%AE%A4%E5%8F%8B%E6%89%8D%E6%9C%89%E7%9A%84%E7%89%A6%E7%89%9B%E8%82%89%E5%B9%B2%23) `111.5K 🔥` `NEW`
1. [杨鸣观战男篮比赛提前退场](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E9%B8%A3%E8%A7%82%E6%88%98%E7%94%B7%E7%AF%AE%E6%AF%94%E8%B5%9B%E6%8F%90%E5%89%8D%E9%80%80%E5%9C%BA%23) `101.3K 🔥` `NEW`
1. [外国人称鹿晗本可统治KPOP](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E7%A7%B0%E9%B9%BF%E6%99%97%E6%9C%AC%E5%8F%AF%E7%BB%9F%E6%B2%BBKPOP%23) `95.1K 🔥` `NEW`
1. [奥利塞帽子戏法](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E5%A1%9E%E5%B8%BD%E5%AD%90%E6%88%8F%E6%B3%95%23) `92.9K 🔥` `NEW`
1. [切尔西0比3惨败布伦特福德](https://s.weibo.com/weibo?q=%23%E5%88%87%E5%B0%94%E8%A5%BF0%E6%AF%943%E6%83%A8%E8%B4%A5%E5%B8%83%E4%BC%A6%E7%89%B9%E7%A6%8F%E5%BE%B7%23) `89.8K 🔥` `NEW`
1. [车主回应车辆停高铁站近7年](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%B8%BB%E5%9B%9E%E5%BA%94%E8%BD%A6%E8%BE%86%E5%81%9C%E9%AB%98%E9%93%81%E7%AB%99%E8%BF%917%E5%B9%B4%23) `82.1K 🔥` `NEW`
1. [九一八纪念被漠视引批评](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E4%B8%80%E5%85%AB%E7%BA%AA%E5%BF%B5%E8%A2%AB%E6%BC%A0%E8%A7%86%E5%BC%95%E6%89%B9%E8%AF%84%23) `80.0K 🔥` `NEW`
1. [法考 李佳](https://s.weibo.com/weibo?q=%23%E6%B3%95%E8%80%83%20%E6%9D%8E%E4%BD%B3%23) `79.0K 🔥` `NEW`
1. [梅毒越来越困扰年轻人](https://s.weibo.com/weibo?q=%23%E6%A2%85%E6%AF%92%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%9B%B0%E6%89%B0%E5%B9%B4%E8%BD%BB%E4%BA%BA%23) `1.2M 🔥` `+730%`
1. [中国的小偷为何断崖式下降](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9A%84%E5%B0%8F%E5%81%B7%E4%B8%BA%E4%BD%95%E6%96%AD%E5%B4%96%E5%BC%8F%E4%B8%8B%E9%99%8D%23) `903.8K 🔥` `+180%`
1. [斑驳旧物铭刻90多年前不屈抗争](https://s.weibo.com/weibo?q=%23%E6%96%91%E9%A9%B3%E6%97%A7%E7%89%A9%E9%93%AD%E5%88%BB90%E5%A4%9A%E5%B9%B4%E5%89%8D%E4%B8%8D%E5%B1%88%E6%8A%97%E4%BA%89%23) `845.6K 🔥` `+240%`
1. [韩国选手听到朝鲜国歌集体慌乱](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%80%89%E6%89%8B%E5%90%AC%E5%88%B0%E6%9C%9D%E9%B2%9C%E5%9B%BD%E6%AD%8C%E9%9B%86%E4%BD%93%E6%85%8C%E4%B9%B1%23) `523.4K 🔥` `+254%`
1. [亚运组委会致歉](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E7%BB%84%E5%A7%94%E4%BC%9A%E8%87%B4%E6%AD%89%23) `373.6K 🔥` `+479%`
1. [菲船加速冲撞中国海警船现场视频](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E8%88%B9%E5%8A%A0%E9%80%9F%E5%86%B2%E6%92%9E%E4%B8%AD%E5%9B%BD%E6%B5%B7%E8%AD%A6%E8%88%B9%E7%8E%B0%E5%9C%BA%E8%A7%86%E9%A2%91%23) `357.4K 🔥` `+139%`
1. [本届亚运会混乱程度](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%B1%8A%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%B7%B7%E4%B9%B1%E7%A8%8B%E5%BA%A6%23) `333.9K 🔥` `+342%`
1. [郑合惠子没有感情全是演技](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E6%B2%A1%E6%9C%89%E6%84%9F%E6%83%85%E5%85%A8%E6%98%AF%E6%BC%94%E6%8A%80%23) `273.5K 🔥` `+197%`
1. [物业暴力阻拦业主回家](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%B8%9A%E6%9A%B4%E5%8A%9B%E9%98%BB%E6%8B%A6%E4%B8%9A%E4%B8%BB%E5%9B%9E%E5%AE%B6%23) `271.0K 🔥` `+280%`
1. [郭士强 下课](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%A3%AB%E5%BC%BA%20%E4%B8%8B%E8%AF%BE%23) `234.2K 🔥` `+232%`
1. [猫科动物又上新了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%A7%91%E5%8A%A8%E7%89%A9%E5%8F%88%E4%B8%8A%E6%96%B0%E4%BA%86%23) `178.0K 🔥` `+176%`
1. [挑情丑闻](https://s.weibo.com/weibo?q=%23%E6%8C%91%E6%83%85%E4%B8%91%E9%97%BB%23) `174.9K 🔥` `+171%`
1. [好清醒的顶级认知](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%B8%85%E9%86%92%E7%9A%84%E9%A1%B6%E7%BA%A7%E8%AE%A4%E7%9F%A5%23) `171.5K 🔥` `+166%`
1. [中国男篮回应不敌日本队](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8C%E6%97%A5%E6%9C%AC%E9%98%9F%23) `167.9K 🔥` `+39%`
1. [女子称失踪闺蜜托梦暗示尸骸位置](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%A4%B1%E8%B8%AA%E9%97%BA%E8%9C%9C%E6%89%98%E6%A2%A6%E6%9A%97%E7%A4%BA%E5%B0%B8%E9%AA%B8%E4%BD%8D%E7%BD%AE%23) `167.0K 🔥` `+159%`
1. [贾国龙西贝焖面开业4个月倒闭了](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E5%9B%BD%E9%BE%99%E8%A5%BF%E8%B4%9D%E7%84%96%E9%9D%A2%E5%BC%80%E4%B8%9A4%E4%B8%AA%E6%9C%88%E5%80%92%E9%97%AD%E4%BA%86%23) `164.3K 🔥` `+155%`
1. [第一次直观感受到低碳脸的杀伤力](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9B%B4%E8%A7%82%E6%84%9F%E5%8F%97%E5%88%B0%E4%BD%8E%E7%A2%B3%E8%84%B8%E7%9A%84%E6%9D%80%E4%BC%A4%E5%8A%9B%23) `156.1K 🔥` `+142%`
1. [人民网评罗永浩说野人先生难吃](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E7%BD%91%E8%AF%84%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%AF%B4%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E9%9A%BE%E5%90%83%23) `130.4K 🔥` `+102%`
1. [成年人的世界不再是为自己而活](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E4%B8%96%E7%95%8C%E4%B8%8D%E5%86%8D%E6%98%AF%E4%B8%BA%E8%87%AA%E5%B7%B1%E8%80%8C%E6%B4%BB%23) `125.8K 🔥` `+95%`
1. [法考成绩](https://s.weibo.com/weibo?q=%23%E6%B3%95%E8%80%83%E6%88%90%E7%BB%A9%23) `104.0K 🔥` `+61%`
1. [iPhone17Pro和18Pro外观对比](https://s.weibo.com/weibo?q=%23iPhone17Pro%E5%92%8C18Pro%E5%A4%96%E8%A7%82%E5%AF%B9%E6%AF%94%23) `103.3K 🔥` `+60%`
1. [为什么结婚了才叫稳定下来](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%BB%93%E5%A9%9A%E4%BA%86%E6%89%8D%E5%8F%AB%E7%A8%B3%E5%AE%9A%E4%B8%8B%E6%9D%A5%23) `101.1K 🔥` `+57%`
1. [原神](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%23) `87.4K 🔥` `+35%`
1. [亲子鉴定 医保](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%20%E5%8C%BB%E4%BF%9D%23) `85.5K 🔥` `+33%`
1. [池昌旭林珍娜太拼了吧](https://s.weibo.com/weibo?q=%23%E6%B1%A0%E6%98%8C%E6%97%AD%E6%9E%97%E7%8F%8D%E5%A8%9C%E5%A4%AA%E6%8B%BC%E4%BA%86%E5%90%A7%23) `84.3K 🔥`
1. [乒乓球赛事后勤保障争议](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E8%B5%9B%E4%BA%8B%E5%90%8E%E5%8B%A4%E4%BF%9D%E9%9A%9C%E4%BA%89%E8%AE%AE%23) `177.4K 🔥` `-59%`

Updated at 2026-09-19 08:34:42

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
