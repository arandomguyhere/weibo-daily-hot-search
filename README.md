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

1. [保安扇女子耳光事件完整监控曝光 (Complete surveillance video of security guard slapping woman in the face exposed)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%AE%89%E6%89%87%E5%A5%B3%E5%AD%90%E8%80%B3%E5%85%89%E4%BA%8B%E4%BB%B6%E5%AE%8C%E6%95%B4%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23) `1.4M 🔥` `NEW`
1. [转卖女大学生电诈园要求撤掉报道](https://s.weibo.com/weibo?q=%23%E8%BD%AC%E5%8D%96%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%94%B5%E8%AF%88%E5%9B%AD%E8%A6%81%E6%B1%82%E6%92%A4%E6%8E%89%E6%8A%A5%E9%81%93%23) `874.2K 🔥` `NEW`
1. [宁德时代神行超充满电六分钟](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E7%A5%9E%E8%A1%8C%E8%B6%85%E5%85%85%E6%BB%A1%E7%94%B5%E5%85%AD%E5%88%86%E9%92%9F%23) `654.0K 🔥` `NEW`
1. [华晨宇演唱会场地开始拆了](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9C%BA%E5%9C%B0%E5%BC%80%E5%A7%8B%E6%8B%86%E4%BA%86%23) `626.3K 🔥` `NEW`
1. [iPhone18ProMax金属机模](https://s.weibo.com/weibo?q=%23iPhone18ProMax%E9%87%91%E5%B1%9E%E6%9C%BA%E6%A8%A1%23) `574.6K 🔥` `NEW`
1. [唐艺昕袜子都跳破了](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E8%A2%9C%E5%AD%90%E9%83%BD%E8%B7%B3%E7%A0%B4%E4%BA%86%23) `291.5K 🔥` `NEW`
1. [崔丽丽案发前年薪120多万元](https://s.weibo.com/weibo?q=%23%E5%B4%94%E4%B8%BD%E4%B8%BD%E6%A1%88%E5%8F%91%E5%89%8D%E5%B9%B4%E8%96%AA120%E5%A4%9A%E4%B8%87%E5%85%83%23) `290.3K 🔥` `NEW`
1. [何润东 那年花开月正圆](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%20%E9%82%A3%E5%B9%B4%E8%8A%B1%E5%BC%80%E6%9C%88%E6%AD%A3%E5%9C%86%23) `287.7K 🔥` `NEW`
1. [伊称已收到首笔霍尔木兹通行费](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E7%A7%B0%E5%B7%B2%E6%94%B6%E5%88%B0%E9%A6%96%E7%AC%94%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E9%80%9A%E8%A1%8C%E8%B4%B9%23) `286.0K 🔥` `NEW`
1. [张予曦和荣耀闪电百米赛跑](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E5%92%8C%E8%8D%A3%E8%80%80%E9%97%AA%E7%94%B5%E7%99%BE%E7%B1%B3%E8%B5%9B%E8%B7%91%23) `283.9K 🔥` `NEW`
1. [听说千万级顶流要来北京车展 (I heard that tens of millions of top celebrities are coming to the Beijing Auto Show)](https://s.weibo.com/weibo?q=%23%E5%90%AC%E8%AF%B4%E5%8D%83%E4%B8%87%E7%BA%A7%E9%A1%B6%E6%B5%81%E8%A6%81%E6%9D%A5%E5%8C%97%E4%BA%AC%E8%BD%A6%E5%B1%95%23) `281.7K 🔥` `NEW`
1. [被掌掴女子耳膜穿孔保安应担何责](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%8E%8C%E6%8E%B4%E5%A5%B3%E5%AD%90%E8%80%B3%E8%86%9C%E7%A9%BF%E5%AD%94%E4%BF%9D%E5%AE%89%E5%BA%94%E6%8B%85%E4%BD%95%E8%B4%A3%23) `279.3K 🔥` `NEW`
1. [女大学生被困电诈园据称只进不出](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%A2%AB%E5%9B%B0%E7%94%B5%E8%AF%88%E5%9B%AD%E6%8D%AE%E7%A7%B0%E5%8F%AA%E8%BF%9B%E4%B8%8D%E5%87%BA%23) `278.9K 🔥` `NEW`
1. [金莎线下状态](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E7%BA%BF%E4%B8%8B%E7%8A%B6%E6%80%81%23) `273.5K 🔥` `NEW`
1. [谢娜在浪姐群发张杰](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9C%A8%E6%B5%AA%E5%A7%90%E7%BE%A4%E5%8F%91%E5%BC%A0%E6%9D%B0%23) `270.6K 🔥` `NEW`
1. [丁禹兮 范思哲](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%20%E8%8C%83%E6%80%9D%E5%93%B2%23) `255.9K 🔥` `NEW`
1. [常华森范思哲品牌大使](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%8D%8E%E6%A3%AE%E8%8C%83%E6%80%9D%E5%93%B2%E5%93%81%E7%89%8C%E5%A4%A7%E4%BD%BF%23) `248.8K 🔥` `NEW`
1. [鹿晗去王勉家带了臭豆腐](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8E%BB%E7%8E%8B%E5%8B%89%E5%AE%B6%E5%B8%A6%E4%BA%86%E8%87%AD%E8%B1%86%E8%85%90%23) `247.2K 🔥` `NEW`
1. [KPL选手大会](https://s.weibo.com/weibo?q=%23KPL%E9%80%89%E6%89%8B%E5%A4%A7%E4%BC%9A%23) `246.3K 🔥` `NEW`
1. [东皇太一bug已修复](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E7%9A%87%E5%A4%AA%E4%B8%80bug%E5%B7%B2%E4%BF%AE%E5%A4%8D%23) `245.9K 🔥` `NEW`
1. [15岁少女酒吧误饮致命毒水身亡 (15-year-old girl dies after drinking deadly poison in bar)](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E5%B0%91%E5%A5%B3%E9%85%92%E5%90%A7%E8%AF%AF%E9%A5%AE%E8%87%B4%E5%91%BD%E6%AF%92%E6%B0%B4%E8%BA%AB%E4%BA%A1%23) `245.4K 🔥` `NEW`
1. [白日提灯今日收官](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E4%BB%8A%E6%97%A5%E6%94%B6%E5%AE%98%23) `245.3K 🔥` `NEW`
1. [美团副总裁夏华夏正式离职](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%89%AF%E6%80%BB%E8%A3%81%E5%A4%8F%E5%8D%8E%E5%A4%8F%E6%AD%A3%E5%BC%8F%E7%A6%BB%E8%81%8C%23) `242.2K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `239.9K 🔥` `NEW`
1. [神行电池超充1000次容量仍超90%](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%A1%8C%E7%94%B5%E6%B1%A0%E8%B6%85%E5%85%851000%E6%AC%A1%E5%AE%B9%E9%87%8F%E4%BB%8D%E8%B6%8590%25%23) `234.2K 🔥` `NEW`
1. [神仙肉](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%23) `226.8K 🔥` `NEW`
1. [樊振东冠军目光永远聚焦顶级较量](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%86%A0%E5%86%9B%E7%9B%AE%E5%85%89%E6%B0%B8%E8%BF%9C%E8%81%9A%E7%84%A6%E9%A1%B6%E7%BA%A7%E8%BE%83%E9%87%8F%23) `223.7K 🔥` `NEW`
1. [宋祖儿被指瘦脱相了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E8%A2%AB%E6%8C%87%E7%98%A6%E8%84%B1%E7%9B%B8%E4%BA%86%23) `213.9K 🔥` `NEW`
1. [花251块买的女装](https://s.weibo.com/weibo?q=%23%E8%8A%B1251%E5%9D%97%E4%B9%B0%E7%9A%84%E5%A5%B3%E8%A3%85%23) `526.8K 🔥` `+61%`
1. [朴宝剑张元英 演员脸和爱豆脸 (Park Bo Gum, Jang Won Young, actor face and idol face)](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%E5%BC%A0%E5%85%83%E8%8B%B1%20%E6%BC%94%E5%91%98%E8%84%B8%E5%92%8C%E7%88%B1%E8%B1%86%E8%84%B8%23) `289.3K 🔥` `+33%`
1. [乒乓球机器人打败日本顶尖选手](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%89%93%E8%B4%A5%E6%97%A5%E6%9C%AC%E9%A1%B6%E5%B0%96%E9%80%89%E6%89%8B%23) `246.5K 🔥` `+24%`
1. [白鹿让张真源出去 (Bai Lu asked Zhang Zhenyuan to go out)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%AE%A9%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%87%BA%E5%8E%BB%23) `246.2K 🔥` `+25%`
1. [第六届亚洲沙滩运动会在三亚开幕](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E5%85%AD%E5%B1%8A%E4%BA%9A%E6%B4%B2%E6%B2%99%E6%BB%A9%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%9C%A8%E4%B8%89%E4%BA%9A%E5%BC%80%E5%B9%95%23) `730.1K 🔥`
1. [食物热量越来越极端了](https://s.weibo.com/weibo?q=%23%E9%A3%9F%E7%89%A9%E7%83%AD%E9%87%8F%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%9E%81%E7%AB%AF%E4%BA%86%23) `643.6K 🔥`
1. [民政局回应马頔李纯结婚证是手写的](https://s.weibo.com/weibo?q=%23%E6%B0%91%E6%94%BF%E5%B1%80%E5%9B%9E%E5%BA%94%E9%A9%AC%E9%A0%94%E6%9D%8E%E7%BA%AF%E7%BB%93%E5%A9%9A%E8%AF%81%E6%98%AF%E6%89%8B%E5%86%99%E7%9A%84%23) `576.8K 🔥`
1. [宝曼兰朵悦彩之境](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%9B%BC%E5%85%B0%E6%9C%B5%E6%82%A6%E5%BD%A9%E4%B9%8B%E5%A2%83%23) `575.6K 🔥`
1. [刘宇宁否认与宋祖儿恋情](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%90%A6%E8%AE%A4%E4%B8%8E%E5%AE%8B%E7%A5%96%E5%84%BF%E6%81%8B%E6%83%85%23) `294.4K 🔥`
1. [普通人一生的收入](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E4%B8%80%E7%94%9F%E7%9A%84%E6%94%B6%E5%85%A5%23) `276.6K 🔥`
1. [陆地cp](https://s.weibo.com/weibo?q=%23%E9%99%86%E5%9C%B0cp%23) `274.8K 🔥`
1. [1台车7个月狂揽400亿](https://s.weibo.com/weibo?q=%231%E5%8F%B0%E8%BD%A67%E4%B8%AA%E6%9C%88%E7%8B%82%E6%8F%BD400%E4%BA%BF%23) `247.4K 🔥`
1. [A股 4100点 (A shares 4100 points)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%204100%E7%82%B9%23) `247.1K 🔥`
1. [林俊杰什么时候开演唱会](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `235.0K 🔥`
1. [iPhoneUltra金属机模 (iPhoneUltra metal mold)](https://s.weibo.com/weibo?q=%23iPhoneUltra%E9%87%91%E5%B1%9E%E6%9C%BA%E6%A8%A1%23) `229.2K 🔥`
1. [孙颖莎三冠王特辑](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%89%E5%86%A0%E7%8E%8B%E7%89%B9%E8%BE%91%23) `219.5K 🔥`
1. [王楚钦孙颖莎亮相世乒赛GOAT纪录片](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BA%AE%E7%9B%B8%E4%B8%96%E4%B9%92%E8%B5%9BGOAT%E7%BA%AA%E5%BD%95%E7%89%87%23) `217.2K 🔥`
1. [布克救球砸到对手被吹技犯](https://s.weibo.com/weibo?q=%23%E5%B8%83%E5%85%8B%E6%95%91%E7%90%83%E7%A0%B8%E5%88%B0%E5%AF%B9%E6%89%8B%E8%A2%AB%E5%90%B9%E6%8A%80%E7%8A%AF%23) `215.5K 🔥`
1. [员工建600多个工作群离职拒交接](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E5%BB%BA600%E5%A4%9A%E4%B8%AA%E5%B7%A5%E4%BD%9C%E7%BE%A4%E7%A6%BB%E8%81%8C%E6%8B%92%E4%BA%A4%E6%8E%A5%23) `539.6K 🔥` `-30%`
1. [医生提醒40至60岁为神经梅毒高发人群](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%9240%E8%87%B360%E5%B2%81%E4%B8%BA%E7%A5%9E%E7%BB%8F%E6%A2%85%E6%AF%92%E9%AB%98%E5%8F%91%E4%BA%BA%E7%BE%A4%23) `294.7K 🔥` `-29%`
1. [泰国榴莲正在疯狂涌入](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%A6%B4%E8%8E%B2%E6%AD%A3%E5%9C%A8%E7%96%AF%E7%8B%82%E6%B6%8C%E5%85%A5%23) `272.2K 🔥` `-38%`
1. [李小冉对王濛说大人说话别插嘴](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%AF%B9%E7%8E%8B%E6%BF%9B%E8%AF%B4%E5%A4%A7%E4%BA%BA%E8%AF%B4%E8%AF%9D%E5%88%AB%E6%8F%92%E5%98%B4%23) `247.0K 🔥` `-24%`
1. [华策影视大涨](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E7%AD%96%E5%BD%B1%E8%A7%86%E5%A4%A7%E6%B6%A8%23) `245.5K 🔥` `-21%`
1. [伊能静说孙杨不靠谱](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E8%AF%B4%E5%AD%99%E6%9D%A8%E4%B8%8D%E9%9D%A0%E8%B0%B1%23) `230.2K 🔥` `-27%`

Updated at 2026-04-23 18:46:24

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
