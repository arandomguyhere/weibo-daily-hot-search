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

1. [车企锁电 (Automobile companies lock power)](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%BC%81%E9%94%81%E7%94%B5%23) `1.7M 🔥` `NEW`
1. [给阿嬷的情书剧组穷成这样](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E5%89%A7%E7%BB%84%E7%A9%B7%E6%88%90%E8%BF%99%E6%A0%B7%23) `1.0M 🔥` `NEW`
1. [我国外贸延续良好增长态势](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%A4%96%E8%B4%B8%E5%BB%B6%E7%BB%AD%E8%89%AF%E5%A5%BD%E5%A2%9E%E9%95%BF%E6%80%81%E5%8A%BF%23) `875.8K 🔥` `NEW`
1. [奥迪E7X预售28.98万元起](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%AAE7X%E9%A2%84%E5%94%AE28.98%E4%B8%87%E5%85%83%E8%B5%B7%23) `834.0K 🔥` `NEW`
1. [时代峰峻回应陈奕恒被指抄袭朱志鑫](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9B%9E%E5%BA%94%E9%99%88%E5%A5%95%E6%81%92%E8%A2%AB%E6%8C%87%E6%8A%84%E8%A2%AD%E6%9C%B1%E5%BF%97%E9%91%AB%23) `772.1K 🔥` `NEW`
1. [母亲节礼物](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%82%E7%A4%BC%E7%89%A9%23) `527.1K 🔥` `NEW`
1. [无忧传媒发布王暖暖健康状况声明](https://s.weibo.com/weibo?q=%23%E6%97%A0%E5%BF%A7%E4%BC%A0%E5%AA%92%E5%8F%91%E5%B8%83%E7%8E%8B%E6%9A%96%E6%9A%96%E5%81%A5%E5%BA%B7%E7%8A%B6%E5%86%B5%E5%A3%B0%E6%98%8E%23) `321.3K 🔥` `NEW`
1. [淘宝免单 李小冉](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%85%8D%E5%8D%95%20%E6%9D%8E%E5%B0%8F%E5%86%89%23) `313.1K 🔥` `NEW`
1. [男子贷27万离世银行追债30万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B4%B727%E4%B8%87%E7%A6%BB%E4%B8%96%E9%93%B6%E8%A1%8C%E8%BF%BD%E5%80%BA30%E4%B8%87%23) `306.1K 🔥` `NEW`
1. [汪卓成被好莱坞找去演男主以为是诈骗](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%8D%93%E6%88%90%E8%A2%AB%E5%A5%BD%E8%8E%B1%E5%9D%9E%E6%89%BE%E5%8E%BB%E6%BC%94%E7%94%B7%E4%B8%BB%E4%BB%A5%E4%B8%BA%E6%98%AF%E8%AF%88%E9%AA%97%23) `303.1K 🔥` `NEW`
1. [无忧传媒已暂停王暖暖所有活动 (Wuyou Media has suspended all activities of Wang Nuannuan)](https://s.weibo.com/weibo?q=%23%E6%97%A0%E5%BF%A7%E4%BC%A0%E5%AA%92%E5%B7%B2%E6%9A%82%E5%81%9C%E7%8E%8B%E6%9A%96%E6%9A%96%E6%89%80%E6%9C%89%E6%B4%BB%E5%8A%A8%23) `295.2K 🔥` `NEW`
1. [王暖暖晕倒前一秒还在配合镜头互动](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9A%96%E6%9A%96%E6%99%95%E5%80%92%E5%89%8D%E4%B8%80%E7%A7%92%E8%BF%98%E5%9C%A8%E9%85%8D%E5%90%88%E9%95%9C%E5%A4%B4%E4%BA%92%E5%8A%A8%23) `286.2K 🔥` `NEW`
1. [邓超发际线被打码](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%8F%91%E9%99%85%E7%BA%BF%E8%A2%AB%E6%89%93%E7%A0%81%23) `280.9K 🔥` `NEW`
1. [6岁男童吃生菜后血肿感染寄生虫](https://s.weibo.com/weibo?q=%236%E5%B2%81%E7%94%B7%E7%AB%A5%E5%90%83%E7%94%9F%E8%8F%9C%E5%90%8E%E8%A1%80%E8%82%BF%E6%84%9F%E6%9F%93%E5%AF%84%E7%94%9F%E8%99%AB%23) `274.3K 🔥` `NEW`
1. [女士在河南博物院如厕需经男小便池](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%A3%AB%E5%9C%A8%E6%B2%B3%E5%8D%97%E5%8D%9A%E7%89%A9%E9%99%A2%E5%A6%82%E5%8E%95%E9%9C%80%E7%BB%8F%E7%94%B7%E5%B0%8F%E4%BE%BF%E6%B1%A0%23) `205.3K 🔥` `NEW`
1. [无人机坠入铁路线与高铁相撞](https://s.weibo.com/weibo?q=%23%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%9D%A0%E5%85%A5%E9%93%81%E8%B7%AF%E7%BA%BF%E4%B8%8E%E9%AB%98%E9%93%81%E7%9B%B8%E6%92%9E%23) `195.9K 🔥` `NEW`
1. [问界汽车否认被约谈](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E6%B1%BD%E8%BD%A6%E5%90%A6%E8%AE%A4%E8%A2%AB%E7%BA%A6%E8%B0%88%23) `188.2K 🔥` `NEW`
1. [西方抹黑中国换新词了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%96%B9%E6%8A%B9%E9%BB%91%E4%B8%AD%E5%9B%BD%E6%8D%A2%E6%96%B0%E8%AF%8D%E4%BA%86%23) `186.5K 🔥` `NEW`
1. [给阿嬷的情书](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `178.4K 🔥` `NEW`
1. [唐嫣红裙](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E7%BA%A2%E8%A3%99%23) `171.8K 🔥` `NEW`
1. [陶瓷蛋挞 (Ceramic egg tarts)](https://s.weibo.com/weibo?q=%23%E9%99%B6%E7%93%B7%E8%9B%8B%E6%8C%9E%23) `171.5K 🔥` `NEW`
1. [国际乒联为球台故障焦头烂额](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E4%B9%92%E8%81%94%E4%B8%BA%E7%90%83%E5%8F%B0%E6%95%85%E9%9A%9C%E7%84%A6%E5%A4%B4%E7%83%82%E9%A2%9D%23) `163.8K 🔥` `NEW`
1. [杨幂江山大同跪地哭戏](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%E8%B7%AA%E5%9C%B0%E5%93%AD%E6%88%8F%23) `163.2K 🔥` `NEW`
1. [陈奕恒翻唱Marry](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E7%BF%BB%E5%94%B1Marry%23) `154.5K 🔥` `NEW`
1. [猫就这么乱七八糟地过来了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%B0%B1%E8%BF%99%E4%B9%88%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E5%9C%B0%E8%BF%87%E6%9D%A5%E4%BA%86%23) `140.0K 🔥` `NEW`
1. [西班牙英国发现汉坦病毒疑似病例](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E8%8B%B1%E5%9B%BD%E5%8F%91%E7%8E%B0%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E7%96%91%E4%BC%BC%E7%97%85%E4%BE%8B%23) `135.0K 🔥` `NEW`
1. [有洁癖的人洗小龙虾](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%B4%81%E7%99%96%E7%9A%84%E4%BA%BA%E6%B4%97%E5%B0%8F%E9%BE%99%E8%99%BE%23) `134.5K 🔥` `NEW`
1. [剑桥毕业外籍高管一周虐杀2女子](https://s.weibo.com/weibo?q=%23%E5%89%91%E6%A1%A5%E6%AF%95%E4%B8%9A%E5%A4%96%E7%B1%8D%E9%AB%98%E7%AE%A1%E4%B8%80%E5%91%A8%E8%99%90%E6%9D%802%E5%A5%B3%E5%AD%90%23) `96.4K 🔥` `NEW`
1. [千问眼镜主动智能全球首发 (Qianwen Glasses’ Active Smart World Premiere)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E7%9C%BC%E9%95%9C%E4%B8%BB%E5%8A%A8%E6%99%BA%E8%83%BD%E5%85%A8%E7%90%83%E9%A6%96%E5%8F%91%23) `700.6K 🔥` `+226%`
1. [淘宝免单 (Taobao free order)](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%85%8D%E5%8D%95%23) `443.5K 🔥` `+44%`
1. [法医称马拉多纳逝前遭12小时折磨](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%8C%BB%E7%A7%B0%E9%A9%AC%E6%8B%89%E5%A4%9A%E7%BA%B3%E9%80%9D%E5%89%8D%E9%81%AD12%E5%B0%8F%E6%97%B6%E6%8A%98%E7%A3%A8%23) `327.6K 🔥` `+53%`
1. [内娱嘴亲烂了也没他俩眼神动人](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%98%B4%E4%BA%B2%E7%83%82%E4%BA%86%E4%B9%9F%E6%B2%A1%E4%BB%96%E4%BF%A9%E7%9C%BC%E7%A5%9E%E5%8A%A8%E4%BA%BA%23) `318.9K 🔥` `+26%`
1. [吃过同款皮皮虾食客发声 (Diners who have eaten the same style of Pipi shrimp speak out)](https://s.weibo.com/weibo?q=%23%E5%90%83%E8%BF%87%E5%90%8C%E6%AC%BE%E7%9A%AE%E7%9A%AE%E8%99%BE%E9%A3%9F%E5%AE%A2%E5%8F%91%E5%A3%B0%23) `296.7K 🔥` `+41%`
1. [谁来为无子女老人晚年兜底](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%A5%E4%B8%BA%E6%97%A0%E5%AD%90%E5%A5%B3%E8%80%81%E4%BA%BA%E6%99%9A%E5%B9%B4%E5%85%9C%E5%BA%95%23) `251.9K 🔥` `+25%`
1. [谁敢信这是同一天的杨幂](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%95%A2%E4%BF%A1%E8%BF%99%E6%98%AF%E5%90%8C%E4%B8%80%E5%A4%A9%E7%9A%84%E6%9D%A8%E5%B9%82%23) `277.7K 🔥`
1. [向太说郭碧婷拿捏了公婆的心](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E9%83%AD%E7%A2%A7%E5%A9%B7%E6%8B%BF%E6%8D%8F%E4%BA%86%E5%85%AC%E5%A9%86%E7%9A%84%E5%BF%83%23) `264.7K 🔥`
1. [47岁韩国影后河智苑西湖独自夜跑](https://s.weibo.com/weibo?q=%2347%E5%B2%81%E9%9F%A9%E5%9B%BD%E5%BD%B1%E5%90%8E%E6%B2%B3%E6%99%BA%E8%8B%91%E8%A5%BF%E6%B9%96%E7%8B%AC%E8%87%AA%E5%A4%9C%E8%B7%91%23) `247.8K 🔥`
1. [91岁老人子宫脱垂靠子宫托忍了30年](https://s.weibo.com/weibo?q=%2391%E5%B2%81%E8%80%81%E4%BA%BA%E5%AD%90%E5%AE%AB%E8%84%B1%E5%9E%82%E9%9D%A0%E5%AD%90%E5%AE%AB%E6%89%98%E5%BF%8D%E4%BA%8630%E5%B9%B4%23) `239.6K 🔥`
1. [陌生男子趁女生熟睡潜入卧室留体液](https://s.weibo.com/weibo?q=%23%E9%99%8C%E7%94%9F%E7%94%B7%E5%AD%90%E8%B6%81%E5%A5%B3%E7%94%9F%E7%86%9F%E7%9D%A1%E6%BD%9C%E5%85%A5%E5%8D%A7%E5%AE%A4%E7%95%99%E4%BD%93%E6%B6%B2%23) `206.7K 🔥`
1. [老人疑因地铁座位撕扯女孩 (An old man is suspected of tearing up a girl because of a subway seat)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%96%91%E5%9B%A0%E5%9C%B0%E9%93%81%E5%BA%A7%E4%BD%8D%E6%92%95%E6%89%AF%E5%A5%B3%E5%AD%A9%23) `204.6K 🔥`
1. [有了iPhone还用买大疆吗](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%86iPhone%E8%BF%98%E7%94%A8%E4%B9%B0%E5%A4%A7%E7%96%86%E5%90%97%23) `195.2K 🔥`
1. [奔跑吧回应收视率低 (Run Bar responds to low ratings)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E5%9B%9E%E5%BA%94%E6%94%B6%E8%A7%86%E7%8E%87%E4%BD%8E%23) `799.9K 🔥` `-46%`
1. [世界杯转播权 (World Cup broadcast rights)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `749.5K 🔥` `-77%`
1. [8名中国人赴泰私拍短剧被逮捕](https://s.weibo.com/weibo?q=%238%E5%90%8D%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%B5%B4%E6%B3%B0%E7%A7%81%E6%8B%8D%E7%9F%AD%E5%89%A7%E8%A2%AB%E9%80%AE%E6%8D%95%23) `328.5K 🔥` `-46%`
1. [白鹿主动让C](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%BB%E5%8A%A8%E8%AE%A9C%23) `300.8K 🔥` `-57%`
1. [密室大逃脱 张真源 (Escape Room Zhang Zhenyuan)](https://s.weibo.com/weibo?q=%23%E5%AF%86%E5%AE%A4%E5%A4%A7%E9%80%83%E8%84%B1%20%E5%BC%A0%E7%9C%9F%E6%BA%90%23) `262.8K 🔥` `-45%`
1. [跑男疯狂证明自己](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E7%96%AF%E7%8B%82%E8%AF%81%E6%98%8E%E8%87%AA%E5%B7%B1%23) `197.8K 🔥` `-21%`
1. [文章开酒吧了 (The article opens a bar)](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%AB%A0%E5%BC%80%E9%85%92%E5%90%A7%E4%BA%86%23) `169.6K 🔥` `-30%`
1. [小钰直播了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%92%B0%E7%9B%B4%E6%92%AD%E4%BA%86%23) `155.6K 🔥` `-37%`
1. [尘白禁区退钱](https://s.weibo.com/weibo?q=%23%E5%B0%98%E7%99%BD%E7%A6%81%E5%8C%BA%E9%80%80%E9%92%B1%23) `155.4K 🔥` `-49%`
1. [DeepSeek正式跨入图文交互时代](https://s.weibo.com/weibo?q=%23DeepSeek%E6%AD%A3%E5%BC%8F%E8%B7%A8%E5%85%A5%E5%9B%BE%E6%96%87%E4%BA%A4%E4%BA%92%E6%97%B6%E4%BB%A3%23) `154.9K 🔥` `-39%`
1. [偏偏宠爱 宋威龙包上恩](https://s.weibo.com/weibo?q=%23%E5%81%8F%E5%81%8F%E5%AE%A0%E7%88%B1%20%E5%AE%8B%E5%A8%81%E9%BE%99%E5%8C%85%E4%B8%8A%E6%81%A9%23) `107.7K 🔥` `-47%`

Updated at 2026-05-09 16:44:52

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
