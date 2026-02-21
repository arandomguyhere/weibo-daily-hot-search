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

1. [曝齐思钧刘梦章分手 (It is revealed that Qi Sijun and Liu Mengzhang broke up)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%BD%90%E6%80%9D%E9%92%A7%E5%88%98%E6%A2%A6%E7%AB%A0%E5%88%86%E6%89%8B%23) `6.7M 🔥` `NEW`
1. [白鹿去看idle演唱会](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8E%BB%E7%9C%8Bidle%E6%BC%94%E5%94%B1%E4%BC%9A%23) `437.7K 🔥` `NEW`
1. [徐梦桃笑称这是第一枚奥运铜牌](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E7%AC%91%E7%A7%B0%E8%BF%99%E6%98%AF%E7%AC%AC%E4%B8%80%E6%9E%9A%E5%A5%A5%E8%BF%90%E9%93%9C%E7%89%8C%23) `293.6K 🔥` `NEW`
1. [辽宁春晚最大黑马小品以貌取人](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E6%98%A5%E6%99%9A%E6%9C%80%E5%A4%A7%E9%BB%91%E9%A9%AC%E5%B0%8F%E5%93%81%E4%BB%A5%E8%B2%8C%E5%8F%96%E4%BA%BA%23) `293.0K 🔥` `NEW`
1. [演了4集男女主还没对齐颗粒度](https://s.weibo.com/weibo?q=%23%E6%BC%94%E4%BA%864%E9%9B%86%E7%94%B7%E5%A5%B3%E4%B8%BB%E8%BF%98%E6%B2%A1%E5%AF%B9%E9%BD%90%E9%A2%97%E7%B2%92%E5%BA%A6%23) `254.1K 🔥` `NEW`
1. [瑞士女选手仅得44.37分获得银牌](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%A3%AB%E5%A5%B3%E9%80%89%E6%89%8B%E4%BB%85%E5%BE%9744.37%E5%88%86%E8%8E%B7%E5%BE%97%E9%93%B6%E7%89%8C%23) `247.3K 🔥` `NEW`
1. [心疼李天马](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E6%9D%8E%E5%A4%A9%E9%A9%AC%23) `158.3K 🔥` `NEW`
1. [陈飞宇发了49999红包](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E5%8F%91%E4%BA%8649999%E7%BA%A2%E5%8C%85%23) `157.4K 🔥` `NEW`
1. [上门喂猫不让人走](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E9%97%A8%E5%96%82%E7%8C%AB%E4%B8%8D%E8%AE%A9%E4%BA%BA%E8%B5%B0%23) `156.0K 🔥` `NEW`
1. [游客挤到悔不当初不如在家刷手机](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E6%8C%A4%E5%88%B0%E6%82%94%E4%B8%8D%E5%BD%93%E5%88%9D%E4%B8%8D%E5%A6%82%E5%9C%A8%E5%AE%B6%E5%88%B7%E6%89%8B%E6%9C%BA%23) `133.6K 🔥` `NEW`
1. [哈尔滨游客到胖东来为妻子买金镯 (Harbin tourists go to Pangdonglai to buy gold bracelets for their wives)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E6%B8%B8%E5%AE%A2%E5%88%B0%E8%83%96%E4%B8%9C%E6%9D%A5%E4%B8%BA%E5%A6%BB%E5%AD%90%E4%B9%B0%E9%87%91%E9%95%AF%23) `126.1K 🔥` `NEW`
1. [女子将900克黄金遗忘动车当场吓晕](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%86900%E5%85%8B%E9%BB%84%E9%87%91%E9%81%97%E5%BF%98%E5%8A%A8%E8%BD%A6%E5%BD%93%E5%9C%BA%E5%90%93%E6%99%95%23) `126.0K 🔥` `NEW`
1. [宋雨琦用中文介绍跑男团](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%94%A8%E4%B8%AD%E6%96%87%E4%BB%8B%E7%BB%8D%E8%B7%91%E7%94%B7%E5%9B%A2%23) `125.3K 🔥` `NEW`
1. [谷爱凌称收到过死亡威胁](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%A7%B0%E6%94%B6%E5%88%B0%E8%BF%87%E6%AD%BB%E4%BA%A1%E5%A8%81%E8%83%81%23) `125.1K 🔥` `NEW`
1. [烟花突然爆炸7户邻居玻璃被震碎](https://s.weibo.com/weibo?q=%23%E7%83%9F%E8%8A%B1%E7%AA%81%E7%84%B6%E7%88%86%E7%82%B87%E6%88%B7%E9%82%BB%E5%B1%85%E7%8E%BB%E7%92%83%E8%A2%AB%E9%9C%87%E7%A2%8E%23) `124.4K 🔥` `NEW`
1. [十个勤天其他八个人可以闹了](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E5%85%B6%E4%BB%96%E5%85%AB%E4%B8%AA%E4%BA%BA%E5%8F%AF%E4%BB%A5%E9%97%B9%E4%BA%86%23) `124.1K 🔥` `NEW`
1. [身体5个表现说明需要除湿了](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%935%E4%B8%AA%E8%A1%A8%E7%8E%B0%E8%AF%B4%E6%98%8E%E9%9C%80%E8%A6%81%E9%99%A4%E6%B9%BF%E4%BA%86%23) `123.5K 🔥` `NEW`
1. [欧阳震华暴瘦引热议](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E9%9C%87%E5%8D%8E%E6%9A%B4%E7%98%A6%E5%BC%95%E7%83%AD%E8%AE%AE%23) `120.2K 🔥` `NEW`
1. [叶舒华solo舞台](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E8%88%92%E5%8D%8Esolo%E8%88%9E%E5%8F%B0%23) `117.4K 🔥` `NEW`
1. [香奈儿完全新人美时期](https://s.weibo.com/weibo?q=%23%E9%A6%99%E5%A5%88%E5%84%BF%E5%AE%8C%E5%85%A8%E6%96%B0%E4%BA%BA%E7%BE%8E%E6%97%B6%E6%9C%9F%23) `113.9K 🔥` `NEW`
1. [徐梦桃颁奖要笑的吉祥物 (Xu Mengtao presents the mascot that makes you laugh)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E9%A2%81%E5%A5%96%E8%A6%81%E7%AC%91%E7%9A%84%E5%90%89%E7%A5%A5%E7%89%A9%23) `95.2K 🔥` `NEW`
1. [关智斌称阿娇肥过瘦过没丑过](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%BA%E6%96%8C%E7%A7%B0%E9%98%BF%E5%A8%87%E8%82%A5%E8%BF%87%E7%98%A6%E8%BF%87%E6%B2%A1%E4%B8%91%E8%BF%87%23) `95.2K 🔥` `NEW`
1. [人类幼崽拜年主打一个出其不意](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E5%B9%BC%E5%B4%BD%E6%8B%9C%E5%B9%B4%E4%B8%BB%E6%89%93%E4%B8%80%E4%B8%AA%E5%87%BA%E5%85%B6%E4%B8%8D%E6%84%8F%23) `93.8K 🔥` `NEW`
1. [李天马哭了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%A4%A9%E9%A9%AC%E5%93%AD%E4%BA%86%23) `91.0K 🔥` `NEW`
1. [杨博文cha赛马娘手势舞](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87cha%E8%B5%9B%E9%A9%AC%E5%A8%98%E6%89%8B%E5%8A%BF%E8%88%9E%23) `90.8K 🔥` `NEW`
1. [孙千红包](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E7%BA%A2%E5%8C%85%23) `89.7K 🔥` `NEW`
1. [徐梦桃集齐金银铜奖牌](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E9%9B%86%E9%BD%90%E9%87%91%E9%93%B6%E9%93%9C%E5%A5%96%E7%89%8C%23) `78.0K 🔥` `NEW`
1. [现在就出发 (Let's go now)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `1.1M 🔥` `+207%`
1. [刘涛回应妈祖照被设为屏保](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E5%9B%9E%E5%BA%94%E5%A6%88%E7%A5%96%E7%85%A7%E8%A2%AB%E8%AE%BE%E4%B8%BA%E5%B1%8F%E4%BF%9D%23) `157.9K 🔥` `+28%`
1. [宋雨琦中韩人脉这一块](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E4%B8%AD%E9%9F%A9%E4%BA%BA%E8%84%89%E8%BF%99%E4%B8%80%E5%9D%97%23) `152.1K 🔥` `+23%`
1. [镖人票房还有救吗](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E7%A5%A8%E6%88%BF%E8%BF%98%E6%9C%89%E6%95%91%E5%90%97%23) `124.8K 🔥` `+45%`
1. [多地气温断崖式下跌 (Temperatures plummeted in many places)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E6%B0%94%E6%B8%A9%E6%96%AD%E5%B4%96%E5%BC%8F%E4%B8%8B%E8%B7%8C%23) `634.5K 🔥`
1. [京东健康祝天下父母身体健康 (JD Health wishes parents all over the world good health)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%81%A5%E5%BA%B7%E7%A5%9D%E5%A4%A9%E4%B8%8B%E7%88%B6%E6%AF%8D%E8%BA%AB%E4%BD%93%E5%81%A5%E5%BA%B7%23) `603.0K 🔥`
1. [白鹿发了37张照片 (Bailu posted 37 photos)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%91%E4%BA%8637%E5%BC%A0%E7%85%A7%E7%89%87%23) `144.5K 🔥`
1. [刘宇宁直播](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%9B%B4%E6%92%AD%23) `123.2K 🔥`
1. [林孝埈谈黄大宪](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E8%B0%88%E9%BB%84%E5%A4%A7%E5%AE%AA%23) `114.9K 🔥`
1. [六金郑元松分手 (Liu Jin Zheng Yuansong broke up)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E9%87%91%E9%83%91%E5%85%83%E6%9D%BE%E5%88%86%E6%89%8B%23) `108.7K 🔥`
1. [中国队空中技巧混团铜牌 (Chinese team aerials mixed team bronze medal)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%A9%BA%E4%B8%AD%E6%8A%80%E5%B7%A7%E6%B7%B7%E5%9B%A2%E9%93%9C%E7%89%8C%23) `805.4K 🔥` `-31%`
1. [这位粤C车主你的鸭子掉了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BD%8D%E7%B2%A4C%E8%BD%A6%E4%B8%BB%E4%BD%A0%E7%9A%84%E9%B8%AD%E5%AD%90%E6%8E%89%E4%BA%86%23) `264.5K 🔥` `-40%`
1. [精装朋友圈的苦](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E8%A3%85%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%9A%84%E8%8B%A6%23) `129.4K 🔥` `-34%`
1. [教练说苏翊鸣夺金后一直想吐 (The coach said that Su Yiming felt like vomiting after winning the gold medal.)](https://s.weibo.com/weibo?q=%23%E6%95%99%E7%BB%83%E8%AF%B4%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%A4%BA%E9%87%91%E5%90%8E%E4%B8%80%E7%9B%B4%E6%83%B3%E5%90%90%23) `126.5K 🔥` `-57%`
1. [idle演唱会](https://s.weibo.com/weibo?q=%23idle%E6%BC%94%E5%94%B1%E4%BC%9A%23) `123.8K 🔥` `-48%`
1. [王濛批评短道合理吗 (Is it reasonable for Wang Meng to criticize short tracks?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%89%B9%E8%AF%84%E7%9F%AD%E9%81%93%E5%90%88%E7%90%86%E5%90%97%23) `117.5K 🔥` `-38%`
1. [我家那小子 (That boy of mine)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%23) `117.3K 🔥` `-39%`
1. [徐梦桃王心迪李天马出战混团 (Xu Mengtao, Wang Xindi and Li Tianma join the mixed group)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E7%8E%8B%E5%BF%83%E8%BF%AA%E6%9D%8E%E5%A4%A9%E9%A9%AC%E5%87%BA%E6%88%98%E6%B7%B7%E5%9B%A2%23) `94.0K 🔥` `-75%`
1. [舅舅送外甥女30斤银砖当压岁钱 (Uncle gives niece 30 kilograms of silver bricks as lucky money)](https://s.weibo.com/weibo?q=%23%E8%88%85%E8%88%85%E9%80%81%E5%A4%96%E7%94%A5%E5%A5%B330%E6%96%A4%E9%93%B6%E7%A0%96%E5%BD%93%E5%8E%8B%E5%B2%81%E9%92%B1%23) `93.3K 🔥` `-66%`
1. [黄晓明曝艺人红毯上假摔 (Huang Xiaoming revealed that an artist flopped on the red carpet)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E6%9B%9D%E8%89%BA%E4%BA%BA%E7%BA%A2%E6%AF%AF%E4%B8%8A%E5%81%87%E6%91%94%23) `92.6K 🔥` `-71%`
1. [刘涛演妈祖 三次圣杯 (Liu Tao plays Mazu in Three Holy Grails)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E6%BC%94%E5%A6%88%E7%A5%96%20%E4%B8%89%E6%AC%A1%E5%9C%A3%E6%9D%AF%23) `91.9K 🔥` `-69%`
1. [秦昊伊能静在沈阳逛街](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E4%BC%8A%E8%83%BD%E9%9D%99%E5%9C%A8%E6%B2%88%E9%98%B3%E9%80%9B%E8%A1%97%23) `91.4K 🔥` `-25%`
1. [王心迪第二跳失误](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BF%83%E8%BF%AA%E7%AC%AC%E4%BA%8C%E8%B7%B3%E5%A4%B1%E8%AF%AF%23) `84.6K 🔥` `-72%`
1. [徐梦桃第二跳96.59分 (Xu Mengtao’s second jump scored 96.59 points)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E7%AC%AC%E4%BA%8C%E8%B7%B396.59%E5%88%86%23) `74.6K 🔥` `-33%`

Updated at 2026-02-21 21:08:45

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
