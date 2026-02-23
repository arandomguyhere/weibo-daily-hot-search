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

1. [谷爱凌炸完赛场炸秀场 (Gu Ailing blew up the show after finishing the game)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%82%B8%E5%AE%8C%E8%B5%9B%E5%9C%BA%E7%82%B8%E7%A7%80%E5%9C%BA%23) `1.1M 🔥` `NEW`
1. [谷爱凌晒奶奶戴奖牌合照](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%99%92%E5%A5%B6%E5%A5%B6%E6%88%B4%E5%A5%96%E7%89%8C%E5%90%88%E7%85%A7%23) `791.4K 🔥` `NEW`
1. [谷爱凌回应100%拿牌率](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9B%9E%E5%BA%94100%25%E6%8B%BF%E7%89%8C%E7%8E%87%23) `361.0K 🔥` `NEW`
1. [中国最大高速收费站迎返程高峰](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%80%E5%A4%A7%E9%AB%98%E9%80%9F%E6%94%B6%E8%B4%B9%E7%AB%99%E8%BF%8E%E8%BF%94%E7%A8%8B%E9%AB%98%E5%B3%B0%23) `344.0K 🔥` `NEW`
1. [女子深陷迷你贷400元分36期](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B7%B1%E9%99%B7%E8%BF%B7%E4%BD%A0%E8%B4%B7400%E5%85%83%E5%88%8636%E6%9C%9F%23) `311.7K 🔥` `NEW`
1. [印尼突发7.0级地震](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%B0%BC%E7%AA%81%E5%8F%917.0%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `227.3K 🔥` `NEW`
1. [神仙肉女主人设](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%E5%A5%B3%E4%B8%BB%E4%BA%BA%E8%AE%BE%23) `224.7K 🔥` `NEW`
1. [四川女婿黄子韬在家也得穿省服](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%A5%B3%E5%A9%BF%E9%BB%84%E5%AD%90%E9%9F%AC%E5%9C%A8%E5%AE%B6%E4%B9%9F%E5%BE%97%E7%A9%BF%E7%9C%81%E6%9C%8D%23) `219.7K 🔥` `NEW`
1. [苏新皓给妈妈换了一部新手机](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E7%BB%99%E5%A6%88%E5%A6%88%E6%8D%A2%E4%BA%86%E4%B8%80%E9%83%A8%E6%96%B0%E6%89%8B%E6%9C%BA%23) `151.6K 🔥` `NEW`
1. [徐梦桃王心迪回应被催生](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E7%8E%8B%E5%BF%83%E8%BF%AA%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%82%AC%E7%94%9F%23) `138.0K 🔥` `NEW`
1. [水贝买金火爆商家忙到没时间吃饭 (Buying gold in Shuibei is so popular that merchants are so busy that they have no time to eat)](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E8%B4%9D%E4%B9%B0%E9%87%91%E7%81%AB%E7%88%86%E5%95%86%E5%AE%B6%E5%BF%99%E5%88%B0%E6%B2%A1%E6%97%B6%E9%97%B4%E5%90%83%E9%A5%AD%23) `125.5K 🔥` `NEW`
1. [陈妍希说林心如女儿长的太好看了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E8%AF%B4%E6%9E%97%E5%BF%83%E5%A6%82%E5%A5%B3%E5%84%BF%E9%95%BF%E7%9A%84%E5%A4%AA%E5%A5%BD%E7%9C%8B%E4%BA%86%23) `98.2K 🔥` `NEW`
1. [俄罗斯遭导弹袭击](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E9%81%AD%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%23) `97.5K 🔥` `NEW`
1. [那艺娜账号被禁止关注](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%89%BA%E5%A8%9C%E8%B4%A6%E5%8F%B7%E8%A2%AB%E7%A6%81%E6%AD%A2%E5%85%B3%E6%B3%A8%23) `96.8K 🔥` `NEW`
1. [原来正月初七是人的生日](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%AD%A3%E6%9C%88%E5%88%9D%E4%B8%83%E6%98%AF%E4%BA%BA%E7%9A%84%E7%94%9F%E6%97%A5%23) `94.9K 🔥` `NEW`
1. [马来西亚近海发生7.1级地震](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E8%BF%91%E6%B5%B7%E5%8F%91%E7%94%9F7.1%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `93.3K 🔥` `NEW`
1. [沈月这段没有不笑的义务](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E8%BF%99%E6%AE%B5%E6%B2%A1%E6%9C%89%E4%B8%8D%E7%AC%91%E7%9A%84%E4%B9%89%E5%8A%A1%23) `93.0K 🔥` `NEW`
1. [提前返程的聪明人连饭都带了](https://s.weibo.com/weibo?q=%23%E6%8F%90%E5%89%8D%E8%BF%94%E7%A8%8B%E7%9A%84%E8%81%AA%E6%98%8E%E4%BA%BA%E8%BF%9E%E9%A5%AD%E9%83%BD%E5%B8%A6%E4%BA%86%23) `85.5K 🔥` `NEW`
1. [李克勤演唱会用捞网收红包](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%8B%E5%8B%A4%E6%BC%94%E5%94%B1%E4%BC%9A%E7%94%A8%E6%8D%9E%E7%BD%91%E6%94%B6%E7%BA%A2%E5%8C%85%23) `85.0K 🔥` `NEW`
1. [一个人一旦学会了观察自己](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%B8%80%E6%97%A6%E5%AD%A6%E4%BC%9A%E4%BA%86%E8%A7%82%E5%AF%9F%E8%87%AA%E5%B7%B1%23) `84.0K 🔥` `NEW`
1. [王楚钦心软软给小朋友签名 (Wang Chuqin tenderly signed autographs for the children)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%BF%83%E8%BD%AF%E8%BD%AF%E7%BB%99%E5%B0%8F%E6%9C%8B%E5%8F%8B%E7%AD%BE%E5%90%8D%23) `84.0K 🔥` `NEW`
1. [陈飞宇你这么演李峋知道吗](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E4%BD%A0%E8%BF%99%E4%B9%88%E6%BC%94%E6%9D%8E%E5%B3%8B%E7%9F%A5%E9%81%93%E5%90%97%23) `83.9K 🔥` `NEW`
1. [大年初七是人日](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%83%E6%98%AF%E4%BA%BA%E6%97%A5%23) `81.3K 🔥` `NEW`
1. [小猫吃虾被烫到当场暴打大虾](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%90%83%E8%99%BE%E8%A2%AB%E7%83%AB%E5%88%B0%E5%BD%93%E5%9C%BA%E6%9A%B4%E6%89%93%E5%A4%A7%E8%99%BE%23) `80.6K 🔥` `NEW`
1. [神仙肉](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%23) `68.3K 🔥` `NEW`
1. [镖人美人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E7%BE%8E%E4%BA%BA%23) `64.4K 🔥` `NEW`
1. [吴京回应镖人票房逆袭](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E5%9B%9E%E5%BA%94%E9%95%96%E4%BA%BA%E7%A5%A8%E6%88%BF%E9%80%86%E8%A2%AD%23) `63.9K 🔥` `NEW`
1. [猫总能找到最显尊贵的地方躲着](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E6%80%BB%E8%83%BD%E6%89%BE%E5%88%B0%E6%9C%80%E6%98%BE%E5%B0%8A%E8%B4%B5%E7%9A%84%E5%9C%B0%E6%96%B9%E8%BA%B2%E7%9D%80%23) `60.7K 🔥` `NEW`
1. [三亚直飞成都机票近万元](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E7%9B%B4%E9%A3%9E%E6%88%90%E9%83%BD%E6%9C%BA%E7%A5%A8%E8%BF%91%E4%B8%87%E5%85%83%23) `57.4K 🔥` `NEW`
1. [终于见识到什么叫武林世家了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E8%A7%81%E8%AF%86%E5%88%B0%E4%BB%80%E4%B9%88%E5%8F%AB%E6%AD%A6%E6%9E%97%E4%B8%96%E5%AE%B6%E4%BA%86%23) `56.4K 🔥` `NEW`
1. [周深 王一博老师什么不火呀 (Zhou Shen, why is Teacher Wang Yibo not popular?)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%20%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%80%81%E5%B8%88%E4%BB%80%E4%B9%88%E4%B8%8D%E7%81%AB%E5%91%80%23) `134.0K 🔥` `+67%`
1. [白鹿曾舜晞梁永棋陈鹤一韩国逛街 (White Deer Zeng Shun Xi Liang Yongqi Chen Heyi Shopping in Korea)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9B%BE%E8%88%9C%E6%99%9E%E6%A2%81%E6%B0%B8%E6%A3%8B%E9%99%88%E9%B9%A4%E4%B8%80%E9%9F%A9%E5%9B%BD%E9%80%9B%E8%A1%97%23) `99.4K 🔥` `+43%`
1. [曝iPhone18Pro正测试深红色 (It is revealed that iPhone 18 Pro is testing dark red color)](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18Pro%E6%AD%A3%E6%B5%8B%E8%AF%95%E6%B7%B1%E7%BA%A2%E8%89%B2%23) `74.7K 🔥` `+59%`
1. [镖人 (escort)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `70.8K 🔥` `+70%`
1. [返程前的告别看泪目了 (I cried when I said goodbye before returning home)](https://s.weibo.com/weibo?q=%23%E8%BF%94%E7%A8%8B%E5%89%8D%E7%9A%84%E5%91%8A%E5%88%AB%E7%9C%8B%E6%B3%AA%E7%9B%AE%E4%BA%86%23) `629.6K 🔥`
1. [女子动车厕所冲走50g金手链](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8A%A8%E8%BD%A6%E5%8E%95%E6%89%80%E5%86%B2%E8%B5%B050g%E9%87%91%E6%89%8B%E9%93%BE%23) `156.0K 🔥`
1. [贾玲剧组 女演员可以坐箱子 (Jia Ling crew actress can sit on the box)](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E7%8E%B2%E5%89%A7%E7%BB%84%20%E5%A5%B3%E6%BC%94%E5%91%98%E5%8F%AF%E4%BB%A5%E5%9D%90%E7%AE%B1%E5%AD%90%23) `86.6K 🔥`
1. [此时的观众还不知跑男将会有多爆火](https://s.weibo.com/weibo?q=%23%E6%AD%A4%E6%97%B6%E7%9A%84%E8%A7%82%E4%BC%97%E8%BF%98%E4%B8%8D%E7%9F%A5%E8%B7%91%E7%94%B7%E5%B0%86%E4%BC%9A%E6%9C%89%E5%A4%9A%E7%88%86%E7%81%AB%23) `75.7K 🔥`
1. [父亲遇3岁儿子坠楼下意识伸手接 (Father subconsciously reaches out to catch his 3-year-old son after he falls downstairs)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E9%81%873%E5%B2%81%E5%84%BF%E5%AD%90%E5%9D%A0%E6%A5%BC%E4%B8%8B%E6%84%8F%E8%AF%86%E4%BC%B8%E6%89%8B%E6%8E%A5%23) `74.5K 🔥`
1. [本周做什么都顺的星座](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E5%81%9A%E4%BB%80%E4%B9%88%E9%83%BD%E9%A1%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `72.0K 🔥`
1. [赵心童球员锦标赛夺冠 (Zhao Xintong wins Players Championship)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E7%90%83%E5%91%98%E9%94%A6%E6%A0%87%E8%B5%9B%E5%A4%BA%E5%86%A0%23) `67.1K 🔥`
1. [90位外嫁女集体回村过年当事人发声 (90 married women collectively returned to the village to celebrate the New Year. The client spoke out)](https://s.weibo.com/weibo?q=%2390%E4%BD%8D%E5%A4%96%E5%AB%81%E5%A5%B3%E9%9B%86%E4%BD%93%E5%9B%9E%E6%9D%91%E8%BF%87%E5%B9%B4%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `63.8K 🔥`
1. [中国队的镜头好长](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%9A%84%E9%95%9C%E5%A4%B4%E5%A5%BD%E9%95%BF%23) `57.1K 🔥`
1. [半夜出发的大聪明全堵在高速上了 (The smart guy who set out in the middle of the night was stuck on the highway.)](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%A4%9C%E5%87%BA%E5%8F%91%E7%9A%84%E5%A4%A7%E8%81%AA%E6%98%8E%E5%85%A8%E5%A0%B5%E5%9C%A8%E9%AB%98%E9%80%9F%E4%B8%8A%E4%BA%86%23) `351.5K 🔥` `-66%`
1. [镖人连续4天票房逆跌 (The box office of Daredevil fell for 4 consecutive days)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E8%BF%9E%E7%BB%AD4%E5%A4%A9%E7%A5%A8%E6%88%BF%E9%80%86%E8%B7%8C%23) `259.6K 🔥` `-65%`
1. [王濛刘翔真是几十年难遇](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%88%98%E7%BF%94%E7%9C%9F%E6%98%AF%E5%87%A0%E5%8D%81%E5%B9%B4%E9%9A%BE%E9%81%87%23) `122.2K 🔥` `-47%`
1. [意大利把闭幕式办成文旅宣传片](https://s.weibo.com/weibo?q=%23%E6%84%8F%E5%A4%A7%E5%88%A9%E6%8A%8A%E9%97%AD%E5%B9%95%E5%BC%8F%E5%8A%9E%E6%88%90%E6%96%87%E6%97%85%E5%AE%A3%E4%BC%A0%E7%89%87%23) `109.0K 🔥` `-44%`
1. [女子跟男友回老家看到木棍梯子惊呆](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B7%9F%E7%94%B7%E5%8F%8B%E5%9B%9E%E8%80%81%E5%AE%B6%E7%9C%8B%E5%88%B0%E6%9C%A8%E6%A3%8D%E6%A2%AF%E5%AD%90%E6%83%8A%E5%91%86%23) `103.7K 🔥` `-30%`
1. [苏翊鸣手持五星红旗入场 (Su Yiming entered the venue holding a five-star red flag)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%89%8B%E6%8C%81%E4%BA%94%E6%98%9F%E7%BA%A2%E6%97%97%E5%85%A5%E5%9C%BA%23) `73.1K 🔥` `-62%`

Updated at 2026-02-23 10:23:18

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
