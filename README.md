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

1. [中国留学生因印度高温提前回国 (Chinese students return home early due to high temperature in India)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E5%9B%A0%E5%8D%B0%E5%BA%A6%E9%AB%98%E6%B8%A9%E6%8F%90%E5%89%8D%E5%9B%9E%E5%9B%BD%23) `1.1M 🔥` `NEW`
1. [清华硕士从事纹眉1年最高月入10万](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E7%A1%95%E5%A3%AB%E4%BB%8E%E4%BA%8B%E7%BA%B9%E7%9C%891%E5%B9%B4%E6%9C%80%E9%AB%98%E6%9C%88%E5%85%A510%E4%B8%87%23) `798.6K 🔥` `NEW`
1. [27部门出手对这两类儿童全力守护](https://s.weibo.com/weibo?q=%2327%E9%83%A8%E9%97%A8%E5%87%BA%E6%89%8B%E5%AF%B9%E8%BF%99%E4%B8%A4%E7%B1%BB%E5%84%BF%E7%AB%A5%E5%85%A8%E5%8A%9B%E5%AE%88%E6%8A%A4%23) `626.0K 🔥` `NEW`
1. [618上淘宝买爆款抽888元红包](https://s.weibo.com/weibo?q=%23618%E4%B8%8A%E6%B7%98%E5%AE%9D%E4%B9%B0%E7%88%86%E6%AC%BE%E6%8A%BD888%E5%85%83%E7%BA%A2%E5%8C%85%23) `611.6K 🔥` `NEW`
1. [姜乘澜 眼线膏](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%20%E7%9C%BC%E7%BA%BF%E8%86%8F%23) `607.6K 🔥` `NEW`
1. [考的越难 手在面部的位置越高](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%9A%84%E8%B6%8A%E9%9A%BE%20%E6%89%8B%E5%9C%A8%E9%9D%A2%E9%83%A8%E7%9A%84%E4%BD%8D%E7%BD%AE%E8%B6%8A%E9%AB%98%23) `591.7K 🔥` `NEW`
1. [这是王菲还是俞飞鸿](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E7%8E%8B%E8%8F%B2%E8%BF%98%E6%98%AF%E4%BF%9E%E9%A3%9E%E9%B8%BF%23) `579.1K 🔥` `NEW`
1. [华为感谢美国制裁](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%84%9F%E8%B0%A2%E7%BE%8E%E5%9B%BD%E5%88%B6%E8%A3%81%23) `498.6K 🔥` `NEW`
1. [梁文峰称英伟达显卡没技术](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E5%B3%B0%E7%A7%B0%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%98%BE%E5%8D%A1%E6%B2%A1%E6%8A%80%E6%9C%AF%23) `428.8K 🔥` `NEW`
1. [别要求我体面地老去](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%A6%81%E6%B1%82%E6%88%91%E4%BD%93%E9%9D%A2%E5%9C%B0%E8%80%81%E5%8E%BB%23) `425.0K 🔥` `NEW`
1. [李小冉怎么了 (What happened to Li Xiaoran?)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%80%8E%E4%B9%88%E4%BA%86%23) `422.5K 🔥` `NEW`
1. [姆巴佩遭巴黎球迷辱骂](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%81%AD%E5%B7%B4%E9%BB%8E%E7%90%83%E8%BF%B7%E8%BE%B1%E9%AA%82%23) `420.3K 🔥` `NEW`
1. [时代峰峻辟谣王橹杰恋情](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%BE%9F%E8%B0%A3%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%81%8B%E6%83%85%23) `418.7K 🔥` `NEW`
1. [虞书欣让李登科保护好自己](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%AE%A9%E6%9D%8E%E7%99%BB%E7%A7%91%E4%BF%9D%E6%8A%A4%E5%A5%BD%E8%87%AA%E5%B7%B1%23) `416.0K 🔥` `NEW`
1. [台特种部队格斗表演被嘲没吃早饭](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E7%89%B9%E7%A7%8D%E9%83%A8%E9%98%9F%E6%A0%BC%E6%96%97%E8%A1%A8%E6%BC%94%E8%A2%AB%E5%98%B2%E6%B2%A1%E5%90%83%E6%97%A9%E9%A5%AD%23) `414.3K 🔥` `NEW`
1. [刘德华妻子60岁状态](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BE%B7%E5%8D%8E%E5%A6%BB%E5%AD%9060%E5%B2%81%E7%8A%B6%E6%80%81%23) `412.6K 🔥` `NEW`
1. [白鹿参加跑男收官录制](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%82%E5%8A%A0%E8%B7%91%E7%94%B7%E6%94%B6%E5%AE%98%E5%BD%95%E5%88%B6%23) `409.7K 🔥` `NEW`
1. [马刺4比3雷霆](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BA4%E6%AF%943%E9%9B%B7%E9%9C%86%23) `408.3K 🔥` `NEW`
1. [丁程鑫宋亚轩缺席赛车活动](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%BC%BA%E5%B8%AD%E8%B5%9B%E8%BD%A6%E6%B4%BB%E5%8A%A8%23) `404.5K 🔥` `NEW`
1. [鹿晗五哈下期是寸头](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E4%BA%94%E5%93%88%E4%B8%8B%E6%9C%9F%E6%98%AF%E5%AF%B8%E5%A4%B4%23) `402.9K 🔥` `NEW`
1. [终于知道结婚的意义是什么了 (I finally know what the meaning of marriage is)](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E7%BB%93%E5%A9%9A%E7%9A%84%E6%84%8F%E4%B9%89%E6%98%AF%E4%BB%80%E4%B9%88%E4%BA%86%23) `402.1K 🔥` `NEW`
1. [李现到了广东都变好追了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%88%B0%E4%BA%86%E5%B9%BF%E4%B8%9C%E9%83%BD%E5%8F%98%E5%A5%BD%E8%BF%BD%E4%BA%86%23) `400.0K 🔥` `NEW`
1. [伊能静第一次看到儿子恩利化妆](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E5%88%B0%E5%84%BF%E5%AD%90%E6%81%A9%E5%88%A9%E5%8C%96%E5%A6%86%23) `392.7K 🔥` `NEW`
1. [刘冲模仿刘诗诗 白化摄魂怪](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E6%A8%A1%E4%BB%BF%E5%88%98%E8%AF%97%E8%AF%97%20%E7%99%BD%E5%8C%96%E6%91%84%E9%AD%82%E6%80%AA%23) `391.3K 🔥` `NEW`
1. [京东op4现货充足](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9Cop4%E7%8E%B0%E8%B4%A7%E5%85%85%E8%B6%B3%23) `388.8K 🔥` `NEW`
1. [杨洋一袅楚宫腰](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E4%B8%80%E8%A2%85%E6%A5%9A%E5%AE%AB%E8%85%B0%23) `386.5K 🔥` `NEW`
1. [戚薇当年和男友一起报名我型我秀](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E5%BD%93%E5%B9%B4%E5%92%8C%E7%94%B7%E5%8F%8B%E4%B8%80%E8%B5%B7%E6%8A%A5%E5%90%8D%E6%88%91%E5%9E%8B%E6%88%91%E7%A7%80%23) `385.6K 🔥` `NEW`
1. [牧民家中惊现5只兔狲幼崽萌化了](https://s.weibo.com/weibo?q=%23%E7%89%A7%E6%B0%91%E5%AE%B6%E4%B8%AD%E6%83%8A%E7%8E%B05%E5%8F%AA%E5%85%94%E7%8B%B2%E5%B9%BC%E5%B4%BD%E8%90%8C%E5%8C%96%E4%BA%86%23) `383.1K 🔥` `NEW`
1. [刘诗诗把头纱给刘冲披上了](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E6%8A%8A%E5%A4%B4%E7%BA%B1%E7%BB%99%E5%88%98%E5%86%B2%E6%8A%AB%E4%B8%8A%E4%BA%86%23) `379.7K 🔥` `NEW`
1. [北大退学苏畅称接纳自己是普通人](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E9%80%80%E5%AD%A6%E8%8B%8F%E7%95%85%E7%A7%B0%E6%8E%A5%E7%BA%B3%E8%87%AA%E5%B7%B1%E6%98%AF%E6%99%AE%E9%80%9A%E4%BA%BA%23) `378.6K 🔥` `NEW`
1. [孟子义行程图 (Mencius' itinerary)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `377.3K 🔥` `NEW`
1. [Viper道歉](https://s.weibo.com/weibo?q=%23Viper%E9%81%93%E6%AD%89%23) `373.8K 🔥` `NEW`
1. [文班亚马西决MVP](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E8%A5%BF%E5%86%B3MVP%23) `372.4K 🔥` `NEW`
1. [热熔胶烫伤嘴唇也烫坏家长信任](https://s.weibo.com/weibo?q=%23%E7%83%AD%E7%86%94%E8%83%B6%E7%83%AB%E4%BC%A4%E5%98%B4%E5%94%87%E4%B9%9F%E7%83%AB%E5%9D%8F%E5%AE%B6%E9%95%BF%E4%BF%A1%E4%BB%BB%23) `369.5K 🔥` `NEW`
1. [白鹿行程图](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `368.9K 🔥` `NEW`
1. [俄罗斯等4国总统联合声明](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E7%AD%894%E5%9B%BD%E6%80%BB%E7%BB%9F%E8%81%94%E5%90%88%E5%A3%B0%E6%98%8E%23) `366.8K 🔥` `NEW`
1. [追梦格林为亚历山大发声](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E6%A2%A6%E6%A0%BC%E6%9E%97%E4%B8%BA%E4%BA%9A%E5%8E%86%E5%B1%B1%E5%A4%A7%E5%8F%91%E5%A3%B0%23) `363.6K 🔥` `NEW`
1. [我嗑任敏此沙就关晓彤李昀锐这样](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%97%91%E4%BB%BB%E6%95%8F%E6%AD%A4%E6%B2%99%E5%B0%B1%E5%85%B3%E6%99%93%E5%BD%A4%E6%9D%8E%E6%98%80%E9%94%90%E8%BF%99%E6%A0%B7%23) `362.7K 🔥` `NEW`
1. [杨紫韩东君吻戏](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E9%9F%A9%E4%B8%9C%E5%90%9B%E5%90%BB%E6%88%8F%23) `359.2K 🔥` `NEW`
1. [文班亚马哭了](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E5%93%AD%E4%BA%86%23) `358.1K 🔥` `NEW`
1. [618万元红包雨 (6.18 million yuan red envelope rain)](https://s.weibo.com/weibo?q=%23618%E4%B8%87%E5%85%83%E7%BA%A2%E5%8C%85%E9%9B%A8%23) `356.5K 🔥` `NEW`
1. [小猫假装路过把主人迷的神魂颠倒](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%81%87%E8%A3%85%E8%B7%AF%E8%BF%87%E6%8A%8A%E4%B8%BB%E4%BA%BA%E8%BF%B7%E7%9A%84%E7%A5%9E%E9%AD%82%E9%A2%A0%E5%80%92%23) `353.0K 🔥` `NEW`
1. [谢霆锋王菲跨越25年的爱情](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E7%8E%8B%E8%8F%B2%E8%B7%A8%E8%B6%8A25%E5%B9%B4%E7%9A%84%E7%88%B1%E6%83%85%23) `349.5K 🔥` `NEW`
1. [阚清子小考脱胎换骨](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%B0%8F%E8%80%83%E8%84%B1%E8%83%8E%E6%8D%A2%E9%AA%A8%23) `348.2K 🔥` `NEW`
1. [生理期情绪差不是矫情](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%9C%9F%E6%83%85%E7%BB%AA%E5%B7%AE%E4%B8%8D%E6%98%AF%E7%9F%AB%E6%83%85%23) `344.0K 🔥` `NEW`
1. [侯明昊六月行程图](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%85%AD%E6%9C%88%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `341.6K 🔥` `NEW`
1. [一汽大众携手中石油重磅送福利 (FAW-Volkswagen joins hands with PetroChina to provide generous benefits)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%97%E6%90%BA%E6%89%8B%E4%B8%AD%E7%9F%B3%E6%B2%B9%E9%87%8D%E7%A3%85%E9%80%81%E7%A6%8F%E5%88%A9%23) `543.7K 🔥` `+376%`
1. [陈星旭王玉雯一起去看欧冠了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%E7%8E%8B%E7%8E%89%E9%9B%AF%E4%B8%80%E8%B5%B7%E5%8E%BB%E7%9C%8B%E6%AC%A7%E5%86%A0%E4%BA%86%23) `397.2K 🔥`
1. [老人买基金亏70多万银行承担70% (An elderly person loses more than 700,000 yuan when buying a fund, and the bank bears 70% of it)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E4%B9%B0%E5%9F%BA%E9%87%91%E4%BA%8F70%E5%A4%9A%E4%B8%87%E9%93%B6%E8%A1%8C%E6%89%BF%E6%8B%8570%25%23) `394.3K 🔥`
1. [下周你好星期六快本味 (Hello next week, Saturday Kuaibenwei)](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%91%A8%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E5%BF%AB%E6%9C%AC%E5%91%B3%23) `423.2K 🔥` `-50%`
1. [姆巴佩欧冠金靴](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%AC%A7%E5%86%A0%E9%87%91%E9%9D%B4%23) `354.6K 🔥` `-22%`
1. [马刺vs雷霆](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BAvs%E9%9B%B7%E9%9C%86%23) `344.9K 🔥` `-26%`

Updated at 2026-05-31 13:59:51

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
