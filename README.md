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

1. [贝加尔湖遇难中国游客身份全部确认 (All identities of Chinese tourists killed in Lake Baikal confirmed)](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%8A%A0%E5%B0%94%E6%B9%96%E9%81%87%E9%9A%BE%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E8%BA%AB%E4%BB%BD%E5%85%A8%E9%83%A8%E7%A1%AE%E8%AE%A4%23) `176.1K 🔥` `NEW`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `127.4K 🔥` `NEW`
1. [结婚五金起步价迈入10万元大关](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E4%BA%94%E9%87%91%E8%B5%B7%E6%AD%A5%E4%BB%B7%E8%BF%88%E5%85%A510%E4%B8%87%E5%85%83%E5%A4%A7%E5%85%B3%23) `126.6K 🔥` `NEW`
1. [中国足协主席最新表态](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%B3%E5%8D%8F%E4%B8%BB%E5%B8%AD%E6%9C%80%E6%96%B0%E8%A1%A8%E6%80%81%23) `111.1K 🔥` `NEW`
1. [刘浩存初五迎财神自拍](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E5%88%9D%E4%BA%94%E8%BF%8E%E8%B4%A2%E7%A5%9E%E8%87%AA%E6%8B%8D%23) `109.8K 🔥` `NEW`
1. [黄景瑜第一次演这么苦的角色](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%BC%94%E8%BF%99%E4%B9%88%E8%8B%A6%E7%9A%84%E8%A7%92%E8%89%B2%23) `96.7K 🔥` `NEW`
1. [陈丽君连续三年春节期间爆](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E8%BF%9E%E7%BB%AD%E4%B8%89%E5%B9%B4%E6%98%A5%E8%8A%82%E6%9C%9F%E9%97%B4%E7%88%86%23) `91.4K 🔥` `NEW`
1. [徐梦桃王心迪李天马回应铜牌](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E7%8E%8B%E5%BF%83%E8%BF%AA%E6%9D%8E%E5%A4%A9%E9%A9%AC%E5%9B%9E%E5%BA%94%E9%93%9C%E7%89%8C%23) `82.6K 🔥` `NEW`
1. [杨博文cha赛马娘手势舞](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87cha%E8%B5%9B%E9%A9%AC%E5%A8%98%E6%89%8B%E5%8A%BF%E8%88%9E%23) `81.8K 🔥` `NEW`
1. [九尾 不打老乡杯](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%20%E4%B8%8D%E6%89%93%E8%80%81%E4%B9%A1%E6%9D%AF%23) `80.0K 🔥` `NEW`
1. [前方无厕所无烤肠无茶叶蛋 (No toilet ahead, no sausages, no tea eggs)](https://s.weibo.com/weibo?q=%23%E5%89%8D%E6%96%B9%E6%97%A0%E5%8E%95%E6%89%80%E6%97%A0%E7%83%A4%E8%82%A0%E6%97%A0%E8%8C%B6%E5%8F%B6%E8%9B%8B%23) `1.2M 🔥` `+51%`
1. [陈丽君李云霄 避嫌避到一部电影里 (Chen Lijun and Li Yunxiao avoided suspicion and went to a movie)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E6%9D%8E%E4%BA%91%E9%9C%84%20%E9%81%BF%E5%AB%8C%E9%81%BF%E5%88%B0%E4%B8%80%E9%83%A8%E7%94%B5%E5%BD%B1%E9%87%8C%23) `845.3K 🔥` `+359%`
1. [游客挤到悔不当初不如在家刷手机](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E6%8C%A4%E5%88%B0%E6%82%94%E4%B8%8D%E5%BD%93%E5%88%9D%E4%B8%8D%E5%A6%82%E5%9C%A8%E5%AE%B6%E5%88%B7%E6%89%8B%E6%9C%BA%23) `377.5K 🔥` `+23%`
1. [北京沙尘暴致大兴机场多趟航班备降](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%B2%99%E5%B0%98%E6%9A%B4%E8%87%B4%E5%A4%A7%E5%85%B4%E6%9C%BA%E5%9C%BA%E5%A4%9A%E8%B6%9F%E8%88%AA%E7%8F%AD%E5%A4%87%E9%99%8D%23) `114.2K 🔥` `+21%`
1. [热气腾腾的中国年](https://s.weibo.com/weibo?q=%23%E7%83%AD%E6%B0%94%E8%85%BE%E8%85%BE%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%B9%B4%23) `637.2K 🔥`
1. [白鹿 我家923](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E6%88%91%E5%AE%B6923%23) `612.1K 🔥`
1. [李晨发跑男团idle合照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E5%8F%91%E8%B7%91%E7%94%B7%E5%9B%A2idle%E5%90%88%E7%85%A7%23) `377.3K 🔥`
1. [辽宁春晚最大黑马小品以貌取人](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E6%98%A5%E6%99%9A%E6%9C%80%E5%A4%A7%E9%BB%91%E9%A9%AC%E5%B0%8F%E5%93%81%E4%BB%A5%E8%B2%8C%E5%8F%96%E4%BA%BA%23) `376.3K 🔥`
1. [徐梦桃安慰李天马王心迪吃醋](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E5%AE%89%E6%85%B0%E6%9D%8E%E5%A4%A9%E9%A9%AC%E7%8E%8B%E5%BF%83%E8%BF%AA%E5%90%83%E9%86%8B%23) `206.1K 🔥`
1. [上门喂猫不让人走](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E9%97%A8%E5%96%82%E7%8C%AB%E4%B8%8D%E8%AE%A9%E4%BA%BA%E8%B5%B0%23) `183.5K 🔥`
1. [刘涛回应妈祖照被设为屏保](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E5%9B%9E%E5%BA%94%E5%A6%88%E7%A5%96%E7%85%A7%E8%A2%AB%E8%AE%BE%E4%B8%BA%E5%B1%8F%E4%BF%9D%23) `181.4K 🔥`
1. [女生扶摔倒老人被索赔22万对方已撤诉 (A girl who helped an elderly man who fell was sued for RMB 220,000 but the other party has withdrawn the lawsuit)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%89%B6%E6%91%94%E5%80%92%E8%80%81%E4%BA%BA%E8%A2%AB%E7%B4%A2%E8%B5%9422%E4%B8%87%E5%AF%B9%E6%96%B9%E5%B7%B2%E6%92%A4%E8%AF%89%23) `178.9K 🔥`
1. [宋雨琦用中文介绍跑男团](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%94%A8%E4%B8%AD%E6%96%87%E4%BB%8B%E7%BB%8D%E8%B7%91%E7%94%B7%E5%9B%A2%23) `171.2K 🔥`
1. [烟花突然爆炸7户邻居玻璃被震碎](https://s.weibo.com/weibo?q=%23%E7%83%9F%E8%8A%B1%E7%AA%81%E7%84%B6%E7%88%86%E7%82%B87%E6%88%B7%E9%82%BB%E5%B1%85%E7%8E%BB%E7%92%83%E8%A2%AB%E9%9C%87%E7%A2%8E%23) `170.2K 🔥`
1. [将门毒后](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%23) `167.9K 🔥`
1. [这位粤C车主你的鸭子掉了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BD%8D%E7%B2%A4C%E8%BD%A6%E4%B8%BB%E4%BD%A0%E7%9A%84%E9%B8%AD%E5%AD%90%E6%8E%89%E4%BA%86%23) `165.4K 🔥`
1. [女子将900克黄金遗忘动车当场吓晕](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%86900%E5%85%8B%E9%BB%84%E9%87%91%E9%81%97%E5%BF%98%E5%8A%A8%E8%BD%A6%E5%BD%93%E5%9C%BA%E5%90%93%E6%99%95%23) `157.1K 🔥`
1. [中国队空中技巧混团铜牌 (Chinese team aerials mixed team bronze medal)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%A9%BA%E4%B8%AD%E6%8A%80%E5%B7%A7%E6%B7%B7%E5%9B%A2%E9%93%9C%E7%89%8C%23) `128.4K 🔥`
1. [曝齐思钧刘梦章分手 (It is revealed that Qi Sijun and Liu Mengzhang broke up)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%BD%90%E6%80%9D%E9%92%A7%E5%88%98%E6%A2%A6%E7%AB%A0%E5%88%86%E6%89%8B%23) `127.7K 🔥`
1. [宋雨琦吊台登场完全女王](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E5%90%8A%E5%8F%B0%E7%99%BB%E5%9C%BA%E5%AE%8C%E5%85%A8%E5%A5%B3%E7%8E%8B%23) `125.5K 🔥`
1. [刘梦章称不存在出轨](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%A2%A6%E7%AB%A0%E7%A7%B0%E4%B8%8D%E5%AD%98%E5%9C%A8%E5%87%BA%E8%BD%A8%23) `124.6K 🔥`
1. [谷爱凌称收到过死亡威胁](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%A7%B0%E6%94%B6%E5%88%B0%E8%BF%87%E6%AD%BB%E4%BA%A1%E5%A8%81%E8%83%81%23) `124.0K 🔥`
1. [徐璐透露目前体重为96斤 (Xu Lu revealed that her current weight is 96 pounds)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E7%92%90%E9%80%8F%E9%9C%B2%E7%9B%AE%E5%89%8D%E4%BD%93%E9%87%8D%E4%B8%BA96%E6%96%A4%23) `122.9K 🔥`
1. [idle演唱会](https://s.weibo.com/weibo?q=%23idle%E6%BC%94%E5%94%B1%E4%BC%9A%23) `122.7K 🔥`
1. [镖人票房还有救吗 (Is there any salvation for the Escort box office?)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E7%A5%A8%E6%88%BF%E8%BF%98%E6%9C%89%E6%95%91%E5%90%97%23) `113.3K 🔥`
1. [欧阳震华暴瘦引热议](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E9%9C%87%E5%8D%8E%E6%9A%B4%E7%98%A6%E5%BC%95%E7%83%AD%E8%AE%AE%23) `113.2K 🔥`
1. [身体5个表现说明需要除湿了](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%935%E4%B8%AA%E8%A1%A8%E7%8E%B0%E8%AF%B4%E6%98%8E%E9%9C%80%E8%A6%81%E9%99%A4%E6%B9%BF%E4%BA%86%23) `112.2K 🔥`
1. [吴谨言洪尧海南度假](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B0%A8%E8%A8%80%E6%B4%AA%E5%B0%A7%E6%B5%B7%E5%8D%97%E5%BA%A6%E5%81%87%23) `106.6K 🔥`
1. [精装朋友圈的苦](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E8%A3%85%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%9A%84%E8%8B%A6%23) `104.5K 🔥`
1. [刘宇宁直播](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%9B%B4%E6%92%AD%23) `92.0K 🔥`
1. [教练说苏翊鸣夺金后一直想吐 (The coach said that Su Yiming felt like vomiting after winning the gold medal.)](https://s.weibo.com/weibo?q=%23%E6%95%99%E7%BB%83%E8%AF%B4%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%A4%BA%E9%87%91%E5%90%8E%E4%B8%80%E7%9B%B4%E6%83%B3%E5%90%90%23) `91.4K 🔥`
1. [平顶山被打女孩家属称未获道歉](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E9%A1%B6%E5%B1%B1%E8%A2%AB%E6%89%93%E5%A5%B3%E5%AD%A9%E5%AE%B6%E5%B1%9E%E7%A7%B0%E6%9C%AA%E8%8E%B7%E9%81%93%E6%AD%89%23) `90.3K 🔥`
1. [我家那小子 (That boy of mine)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%23) `84.7K 🔥`
1. [当我竟然在12点前睡觉](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E7%AB%9F%E7%84%B6%E5%9C%A812%E7%82%B9%E5%89%8D%E7%9D%A1%E8%A7%89%23) `79.9K 🔥`
1. [徐梦桃笑称这是第一枚奥运铜牌 (Xu Mengtao laughed and said this was the first Olympic bronze medal)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E7%AC%91%E7%A7%B0%E8%BF%99%E6%98%AF%E7%AC%AC%E4%B8%80%E6%9E%9A%E5%A5%A5%E8%BF%90%E9%93%9C%E7%89%8C%23) `236.4K 🔥` `-34%`
1. [现在就出发 (Let's go now)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `175.2K 🔥` `-84%`
1. [瑞士女选手仅得44.37分获得银牌](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%A3%AB%E5%A5%B3%E9%80%89%E6%89%8B%E4%BB%85%E5%BE%9744.37%E5%88%86%E8%8E%B7%E5%BE%97%E9%93%B6%E7%89%8C%23) `126.0K 🔥` `-25%`
1. [叶舒华solo舞台](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E8%88%92%E5%8D%8Esolo%E8%88%9E%E5%8F%B0%23) `84.3K 🔥` `-25%`
1. [初中生扶老人被索赔22万双方和解 (A junior high school student who helped an elderly man was sued for RMB 220,000 and both parties settled)](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%AD%E7%94%9F%E6%89%B6%E8%80%81%E4%BA%BA%E8%A2%AB%E7%B4%A2%E8%B5%9422%E4%B8%87%E5%8F%8C%E6%96%B9%E5%92%8C%E8%A7%A3%23) `83.4K 🔥` `-45%`
1. [十个勤天其他八个人可以闹了](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E5%85%B6%E4%BB%96%E5%85%AB%E4%B8%AA%E4%BA%BA%E5%8F%AF%E4%BB%A5%E9%97%B9%E4%BA%86%23) `83.1K 🔥` `-29%`

Updated at 2026-02-21 22:19:49

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
