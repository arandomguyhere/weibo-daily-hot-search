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

1. [警方通报黄子韬违停 (Police notified Huang Zitao of illegal parking)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E9%BB%84%E5%AD%90%E9%9F%AC%E8%BF%9D%E5%81%9C%23) `1.2M 🔥` `NEW`
1. [韩国门将巨大失误](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%97%A8%E5%B0%86%E5%B7%A8%E5%A4%A7%E5%A4%B1%E8%AF%AF%23) `816.1K 🔥` `NEW`
1. [文化中国行看端午仪式感](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%8C%96%E4%B8%AD%E5%9B%BD%E8%A1%8C%E7%9C%8B%E7%AB%AF%E5%8D%88%E4%BB%AA%E5%BC%8F%E6%84%9F%23) `693.9K 🔥` `NEW`
1. [重新定义了5到6k](https://s.weibo.com/weibo?q=%23%E9%87%8D%E6%96%B0%E5%AE%9A%E4%B9%89%E4%BA%865%E5%88%B06k%23) `677.3K 🔥` `NEW`
1. [孙兴慜被嘲讽踢得像韩国女星](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%85%B4%E6%85%9C%E8%A2%AB%E5%98%B2%E8%AE%BD%E8%B8%A2%E5%BE%97%E5%83%8F%E9%9F%A9%E5%9B%BD%E5%A5%B3%E6%98%9F%23) `657.0K 🔥` `NEW`
1. [导演称没要求周冬雨背词](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E6%BC%94%E7%A7%B0%E6%B2%A1%E8%A6%81%E6%B1%82%E5%91%A8%E5%86%AC%E9%9B%A8%E8%83%8C%E8%AF%8D%23) `651.0K 🔥` `NEW`
1. [电影抓特务温暖上映](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%8A%93%E7%89%B9%E5%8A%A1%E6%B8%A9%E6%9A%96%E4%B8%8A%E6%98%A0%23) `636.1K 🔥` `NEW`
1. [补办身份证发现根本没丢](https://s.weibo.com/weibo?q=%23%E8%A1%A5%E5%8A%9E%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8F%91%E7%8E%B0%E6%A0%B9%E6%9C%AC%E6%B2%A1%E4%B8%A2%23) `624.9K 🔥` `NEW`
1. [婴儿体内测出甲酰胺内容已搜不到](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E4%BD%93%E5%86%85%E6%B5%8B%E5%87%BA%E7%94%B2%E9%85%B0%E8%83%BA%E5%86%85%E5%AE%B9%E5%B7%B2%E6%90%9C%E4%B8%8D%E5%88%B0%23) `586.4K 🔥` `NEW`
1. [端午红包](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E5%8D%88%E7%BA%A2%E5%8C%85%23) `580.8K 🔥` `NEW`
1. [多位周冬雨话剧观众喊话退票 (Many viewers of Zhou Dongyu's drama called for refunds)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BD%8D%E5%91%A8%E5%86%AC%E9%9B%A8%E8%AF%9D%E5%89%A7%E8%A7%82%E4%BC%97%E5%96%8A%E8%AF%9D%E9%80%80%E7%A5%A8%23) `577.4K 🔥` `NEW`
1. [张凌赫吃粽子蘸白糖](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%83%E7%B2%BD%E5%AD%90%E8%98%B8%E7%99%BD%E7%B3%96%23) `571.4K 🔥` `NEW`
1. [广东暴雨我真的没内裤陪你闹了](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E6%9A%B4%E9%9B%A8%E6%88%91%E7%9C%9F%E7%9A%84%E6%B2%A1%E5%86%85%E8%A3%A4%E9%99%AA%E4%BD%A0%E9%97%B9%E4%BA%86%23) `564.8K 🔥` `NEW`
1. [孙兴慜真成亚洲一哥们了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%85%B4%E6%85%9C%E7%9C%9F%E6%88%90%E4%BA%9A%E6%B4%B2%E4%B8%80%E5%93%A5%E4%BB%AC%E4%BA%86%23) `555.8K 🔥` `NEW`
1. [MOKA终止dm](https://s.weibo.com/weibo?q=%23MOKA%E7%BB%88%E6%AD%A2dm%23) `547.6K 🔥` `NEW`
1. [奶茶粽](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E8%8C%B6%E7%B2%BD%23) `544.5K 🔥` `NEW`
1. [温州商人助佛得角门将家人赴美](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B7%9E%E5%95%86%E4%BA%BA%E5%8A%A9%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E5%AE%B6%E4%BA%BA%E8%B5%B4%E7%BE%8E%23) `528.8K 🔥` `NEW`
1. [男子20万买小鹏离车泊车时撞坏挡杆](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9020%E4%B8%87%E4%B9%B0%E5%B0%8F%E9%B9%8F%E7%A6%BB%E8%BD%A6%E6%B3%8A%E8%BD%A6%E6%97%B6%E6%92%9E%E5%9D%8F%E6%8C%A1%E6%9D%86%23) `524.8K 🔥` `NEW`
1. [中泰美联手查获近5吨冰毒](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%B3%B0%E7%BE%8E%E8%81%94%E6%89%8B%E6%9F%A5%E8%8E%B7%E8%BF%915%E5%90%A8%E5%86%B0%E6%AF%92%23) `521.3K 🔥` `NEW`
1. [深圳步锐科技 甲酰胺](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%AD%A5%E9%94%90%E7%A7%91%E6%8A%80%20%E7%94%B2%E9%85%B0%E8%83%BA%23) `515.4K 🔥` `NEW`
1. [美伊会谈取消 (US-Iran talks canceled)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E4%BC%9A%E8%B0%88%E5%8F%96%E6%B6%88%23) `501.7K 🔥` `NEW`
1. [时代少年团 洛阳](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E6%B4%9B%E9%98%B3%23) `499.8K 🔥` `NEW`
1. [曾沛慈 希望大家语气上能多一点包容](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E5%B8%8C%E6%9C%9B%E5%A4%A7%E5%AE%B6%E8%AF%AD%E6%B0%94%E4%B8%8A%E8%83%BD%E5%A4%9A%E4%B8%80%E7%82%B9%E5%8C%85%E5%AE%B9%23) `497.7K 🔥` `NEW`
1. [韩国男团嘲讽孙兴慜](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%94%B7%E5%9B%A2%E5%98%B2%E8%AE%BD%E5%AD%99%E5%85%B4%E6%85%9C%23) `373.6K 🔥` `NEW`
1. [李钟硕怎么又肿了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%92%9F%E7%A1%95%E6%80%8E%E4%B9%88%E5%8F%88%E8%82%BF%E4%BA%86%23) `335.1K 🔥` `NEW`
1. [深圳偶遇刘浩存买粽子](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%81%B6%E9%81%87%E5%88%98%E6%B5%A9%E5%AD%98%E4%B9%B0%E7%B2%BD%E5%AD%90%23) `317.2K 🔥` `NEW`
1. [甲酰胺纸尿裤](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%85%B0%E8%83%BA%E7%BA%B8%E5%B0%BF%E8%A3%A4%23) `311.3K 🔥` `NEW`
1. [曾沛慈就脏辫造型回应粉丝](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%B0%B1%E8%84%8F%E8%BE%AB%E9%80%A0%E5%9E%8B%E5%9B%9E%E5%BA%94%E7%B2%89%E4%B8%9D%23) `301.3K 🔥` `NEW`
1. [云旗郝熠然巴黎高定周](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E9%83%9D%E7%86%A0%E7%84%B6%E5%B7%B4%E9%BB%8E%E9%AB%98%E5%AE%9A%E5%91%A8%23) `285.1K 🔥` `NEW`
1. [真正厉害的人如何选择人生伴侣](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E5%8E%89%E5%AE%B3%E7%9A%84%E4%BA%BA%E5%A6%82%E4%BD%95%E9%80%89%E6%8B%A9%E4%BA%BA%E7%94%9F%E4%BC%B4%E4%BE%A3%23) `275.5K 🔥` `NEW`
1. [王俊凯一次拎了50斤大米 (Wang Junkai carried 50 kilograms of rice at a time)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%80%E6%AC%A1%E6%8B%8E%E4%BA%8650%E6%96%A4%E5%A4%A7%E7%B1%B3%23) `274.7K 🔥` `NEW`
1. [孙颖莎粽子自拍](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%B2%BD%E5%AD%90%E8%87%AA%E6%8B%8D%23) `273.6K 🔥` `NEW`
1. [女子退租遭房东索要688元月子红包](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%80%80%E7%A7%9F%E9%81%AD%E6%88%BF%E4%B8%9C%E7%B4%A2%E8%A6%81688%E5%85%83%E6%9C%88%E5%AD%90%E7%BA%A2%E5%8C%85%23) `272.0K 🔥` `NEW`
1. [王玉雯别说了王安宇破碎了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%88%AB%E8%AF%B4%E4%BA%86%E7%8E%8B%E5%AE%89%E5%AE%87%E7%A0%B4%E7%A2%8E%E4%BA%86%23) `271.2K 🔥` `NEW`
1. [端午假期12个安全提示](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E5%8D%88%E5%81%87%E6%9C%9F12%E4%B8%AA%E5%AE%89%E5%85%A8%E6%8F%90%E7%A4%BA%23) `266.6K 🔥` `NEW`
1. [王源吻戏会不会翻面](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%90%BB%E6%88%8F%E4%BC%9A%E4%B8%8D%E4%BC%9A%E7%BF%BB%E9%9D%A2%23) `264.9K 🔥` `NEW`
1. [十个勤天把禾伙人送上天了](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E6%8A%8A%E7%A6%BE%E4%BC%99%E4%BA%BA%E9%80%81%E4%B8%8A%E5%A4%A9%E4%BA%86%23) `251.0K 🔥` `NEW`
1. [马頔谈婚前婚后变化](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E8%B0%88%E5%A9%9A%E5%89%8D%E5%A9%9A%E5%90%8E%E5%8F%98%E5%8C%96%23) `245.2K 🔥` `NEW`
1. [老龙口瀑布观景台一驴友坠崖失联](https://s.weibo.com/weibo?q=%23%E8%80%81%E9%BE%99%E5%8F%A3%E7%80%91%E5%B8%83%E8%A7%82%E6%99%AF%E5%8F%B0%E4%B8%80%E9%A9%B4%E5%8F%8B%E5%9D%A0%E5%B4%96%E5%A4%B1%E8%81%94%23) `245.1K 🔥` `NEW`
1. [女子孕19周胎儿小脚外露险掉出](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AD%9519%E5%91%A8%E8%83%8E%E5%84%BF%E5%B0%8F%E8%84%9A%E5%A4%96%E9%9C%B2%E9%99%A9%E6%8E%89%E5%87%BA%23) `245.1K 🔥` `NEW`
1. [张凌赫说最值钱的就是这张脸 (Zhang Linghe said that the most valuable thing is this face)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%AF%B4%E6%9C%80%E5%80%BC%E9%92%B1%E7%9A%84%E5%B0%B1%E6%98%AF%E8%BF%99%E5%BC%A0%E8%84%B8%23) `244.2K 🔥` `NEW`
1. [唐嫣端午图美成啥了](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E7%AB%AF%E5%8D%88%E5%9B%BE%E7%BE%8E%E6%88%90%E5%95%A5%E4%BA%86%23) `238.8K 🔥` `NEW`
1. [孙颖莎端午祝福](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%AB%AF%E5%8D%88%E7%A5%9D%E7%A6%8F%23) `238.2K 🔥` `NEW`
1. [贾乃亮自曝无戏可拍](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E4%B9%83%E4%BA%AE%E8%87%AA%E6%9B%9D%E6%97%A0%E6%88%8F%E5%8F%AF%E6%8B%8D%23) `238.0K 🔥` `NEW`
1. [MOKA活动暂停](https://s.weibo.com/weibo?q=%23MOKA%E6%B4%BB%E5%8A%A8%E6%9A%82%E5%81%9C%23) `220.9K 🔥` `NEW`
1. [万斯警告以色列别不知好歹](https://s.weibo.com/weibo?q=%23%E4%B8%87%E6%96%AF%E8%AD%A6%E5%91%8A%E4%BB%A5%E8%89%B2%E5%88%97%E5%88%AB%E4%B8%8D%E7%9F%A5%E5%A5%BD%E6%AD%B9%23) `218.5K 🔥` `NEW`
1. [李钟硕 韩国空气里到底有什么](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%92%9F%E7%A1%95%20%E9%9F%A9%E5%9B%BD%E7%A9%BA%E6%B0%94%E9%87%8C%E5%88%B0%E5%BA%95%E6%9C%89%E4%BB%80%E4%B9%88%23) `216.4K 🔥` `NEW`
1. [中国大模型技术三大主线](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%A7%E6%A8%A1%E5%9E%8B%E6%8A%80%E6%9C%AF%E4%B8%89%E5%A4%A7%E4%B8%BB%E7%BA%BF%23) `204.1K 🔥` `NEW`
1. [神行者8首发限定版一眼心动](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%A1%8C%E8%80%858%E9%A6%96%E5%8F%91%E9%99%90%E5%AE%9A%E7%89%88%E4%B8%80%E7%9C%BC%E5%BF%83%E5%8A%A8%23) `199.7K 🔥` `NEW`
1. [吴倩自曝演赵默笙被骂到害怕演戏](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%80%A9%E8%87%AA%E6%9B%9D%E6%BC%94%E8%B5%B5%E9%BB%98%E7%AC%99%E8%A2%AB%E9%AA%82%E5%88%B0%E5%AE%B3%E6%80%95%E6%BC%94%E6%88%8F%23) `558.2K 🔥` `+149%`
1. [追觅大调整 (Looking for big adjustments)](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E8%A7%85%E5%A4%A7%E8%B0%83%E6%95%B4%23) `535.9K 🔥` `+133%`
1. [尚界H5焕新上市15.98万元起 (Shangjie H5 is newly launched, starting from 159,800 yuan)](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CH5%E7%84%95%E6%96%B0%E4%B8%8A%E5%B8%8215.98%E4%B8%87%E5%85%83%E8%B5%B7%23) `693.4K 🔥`

Updated at 2026-06-19 15:22:45

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
