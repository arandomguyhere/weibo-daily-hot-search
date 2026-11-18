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

1. [美国总统特朗普抵达深圳](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%80%BB%E7%BB%9F%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3%23) `2.9M 🔥` `NEW`
1. [迎接特朗普仪式](https://s.weibo.com/weibo?q=%23%E8%BF%8E%E6%8E%A5%E7%89%B9%E6%9C%97%E6%99%AE%E4%BB%AA%E5%BC%8F%23) `1.8M 🔥` `NEW`
1. [APEC多场密集对话释放大量前沿信息](https://s.weibo.com/weibo?q=%23APEC%E5%A4%9A%E5%9C%BA%E5%AF%86%E9%9B%86%E5%AF%B9%E8%AF%9D%E9%87%8A%E6%94%BE%E5%A4%A7%E9%87%8F%E5%89%8D%E6%B2%BF%E4%BF%A1%E6%81%AF%23) `855.8K 🔥` `NEW`
1. [泰国总理回到广东老家格外兴奋](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%80%BB%E7%90%86%E5%9B%9E%E5%88%B0%E5%B9%BF%E4%B8%9C%E8%80%81%E5%AE%B6%E6%A0%BC%E5%A4%96%E5%85%B4%E5%A5%8B%23) `766.3K 🔥` `NEW`
1. [深圳机场一眼望去全是专机](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%9C%BA%E5%9C%BA%E4%B8%80%E7%9C%BC%E6%9C%9B%E5%8E%BB%E5%85%A8%E6%98%AF%E4%B8%93%E6%9C%BA%23) `710.5K 🔥` `NEW`
1. [高市早苗抵达深圳](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3%23) `491.9K 🔥` `NEW`
1. [智利总统在深圳逛水果店](https://s.weibo.com/weibo?q=%23%E6%99%BA%E5%88%A9%E6%80%BB%E7%BB%9F%E5%9C%A8%E6%B7%B1%E5%9C%B3%E9%80%9B%E6%B0%B4%E6%9E%9C%E5%BA%97%23) `471.6K 🔥` `NEW`
1. [小城良方早春晴朗AI后期占比30%](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97AI%E5%90%8E%E6%9C%9F%E5%8D%A0%E6%AF%9430%25%23) `468.1K 🔥` `NEW`
1. [APEC最高级别会议为何叫作非正式](https://s.weibo.com/weibo?q=%23APEC%E6%9C%80%E9%AB%98%E7%BA%A7%E5%88%AB%E4%BC%9A%E8%AE%AE%E4%B8%BA%E4%BD%95%E5%8F%AB%E4%BD%9C%E9%9D%9E%E6%AD%A3%E5%BC%8F%23) `463.7K 🔥` `NEW`
1. [留几手评价后会友期](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E8%AF%84%E4%BB%B7%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%23) `457.5K 🔥` `NEW`
1. [女生当众求婚男生拂袖离开](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%BD%93%E4%BC%97%E6%B1%82%E5%A9%9A%E7%94%B7%E7%94%9F%E6%8B%82%E8%A2%96%E7%A6%BB%E5%BC%80%23) `447.3K 🔥` `NEW`
1. [特朗普今年第二次来华](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E4%BB%8A%E5%B9%B4%E7%AC%AC%E4%BA%8C%E6%AC%A1%E6%9D%A5%E5%8D%8E%23) `443.2K 🔥` `NEW`
1. [许飞的iPhone18Pro摔了](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E7%9A%84iPhone18Pro%E6%91%94%E4%BA%86%23) `437.7K 🔥` `NEW`
1. [高市早苗向中方代表打招呼姿态引热议](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%90%91%E4%B8%AD%E6%96%B9%E4%BB%A3%E8%A1%A8%E6%89%93%E6%8B%9B%E5%91%BC%E5%A7%BF%E6%80%81%E5%BC%95%E7%83%AD%E8%AE%AE%23) `432.2K 🔥` `NEW`
1. [Bin透露冠军皮肤不选鳄鱼原因](https://s.weibo.com/weibo?q=%23Bin%E9%80%8F%E9%9C%B2%E5%86%A0%E5%86%9B%E7%9A%AE%E8%82%A4%E4%B8%8D%E9%80%89%E9%B3%84%E9%B1%BC%E5%8E%9F%E5%9B%A0%23) `426.1K 🔥` `NEW`
1. [GTA6](https://s.weibo.com/weibo?q=%23GTA6%23) `415.7K 🔥` `NEW`
1. [日本网友最羡慕中国的哪一点](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E6%9C%80%E7%BE%A1%E6%85%95%E4%B8%AD%E5%9B%BD%E7%9A%84%E5%93%AA%E4%B8%80%E7%82%B9%23) `388.2K 🔥` `NEW`
1. [宋雨琦秦岚拦着金晨买防猴登山棍](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%A7%A6%E5%B2%9A%E6%8B%A6%E7%9D%80%E9%87%91%E6%99%A8%E4%B9%B0%E9%98%B2%E7%8C%B4%E7%99%BB%E5%B1%B1%E6%A3%8D%23) `362.7K 🔥` `NEW`
1. [陈数说成毅负责两京张皇后负责十五日](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%95%B0%E8%AF%B4%E6%88%90%E6%AF%85%E8%B4%9F%E8%B4%A3%E4%B8%A4%E4%BA%AC%E5%BC%A0%E7%9A%87%E5%90%8E%E8%B4%9F%E8%B4%A3%E5%8D%81%E4%BA%94%E6%97%A5%23) `286.8K 🔥` `NEW`
1. [Tim称苹果整个纽约的服务炸了](https://s.weibo.com/weibo?q=%23Tim%E7%A7%B0%E8%8B%B9%E6%9E%9C%E6%95%B4%E4%B8%AA%E7%BA%BD%E7%BA%A6%E7%9A%84%E6%9C%8D%E5%8A%A1%E7%82%B8%E4%BA%86%23) `286.4K 🔥` `NEW`
1. [印尼总统向迎宾队伍敬礼10秒](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%B0%BC%E6%80%BB%E7%BB%9F%E5%90%91%E8%BF%8E%E5%AE%BE%E9%98%9F%E4%BC%8D%E6%95%AC%E7%A4%BC10%E7%A7%92%23) `286.1K 🔥` `NEW`
1. [内娱第一个把孩子说成是子宫肌瘤的](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%8A%8A%E5%AD%A9%E5%AD%90%E8%AF%B4%E6%88%90%E6%98%AF%E5%AD%90%E5%AE%AB%E8%82%8C%E7%98%A4%E7%9A%84%23) `285.6K 🔥` `NEW`
1. [陆毅女儿贝儿正式出道](https://s.weibo.com/weibo?q=%23%E9%99%86%E6%AF%85%E5%A5%B3%E5%84%BF%E8%B4%9D%E5%84%BF%E6%AD%A3%E5%BC%8F%E5%87%BA%E9%81%93%23) `285.1K 🔥` `NEW`
1. [冯薪朵钟正未婚先孕](https://s.weibo.com/weibo?q=%23%E5%86%AF%E8%96%AA%E6%9C%B5%E9%92%9F%E6%AD%A3%E6%9C%AA%E5%A9%9A%E5%85%88%E5%AD%95%23) `284.5K 🔥` `NEW`
1. [生理性喜欢就是愿意亲嘴](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E5%B0%B1%E6%98%AF%E6%84%BF%E6%84%8F%E4%BA%B2%E5%98%B4%23) `284.0K 🔥` `NEW`
1. [内娱下星二代了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E4%B8%8B%E6%98%9F%E4%BA%8C%E4%BB%A3%E4%BA%86%23) `283.6K 🔥` `NEW`
1. [T1 zeus](https://s.weibo.com/weibo?q=%23T1%20zeus%23) `283.5K 🔥` `NEW`
1. [NBA回应格里姆斯47分10记三分](https://s.weibo.com/weibo?q=%23NBA%E5%9B%9E%E5%BA%94%E6%A0%BC%E9%87%8C%E5%A7%86%E6%96%AF47%E5%88%8610%E8%AE%B0%E4%B8%89%E5%88%86%23) `252.5K 🔥` `NEW`
1. [李嘉格听到冯薪朵生了孩子的反应](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E6%A0%BC%E5%90%AC%E5%88%B0%E5%86%AF%E8%96%AA%E6%9C%B5%E7%94%9F%E4%BA%86%E5%AD%A9%E5%AD%90%E7%9A%84%E5%8F%8D%E5%BA%94%23) `251.3K 🔥` `NEW`
1. [A股成交1.37万亿](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%88%90%E4%BA%A41.37%E4%B8%87%E4%BA%BF%23) `249.8K 🔥` `NEW`
1. [湘雅二院论文尺子1厘米12格](https://s.weibo.com/weibo?q=%23%E6%B9%98%E9%9B%85%E4%BA%8C%E9%99%A2%E8%AE%BA%E6%96%87%E5%B0%BA%E5%AD%901%E5%8E%98%E7%B1%B312%E6%A0%BC%23) `248.9K 🔥` `NEW`
1. [iG爆衣大哥病危进了ICU](https://s.weibo.com/weibo?q=%23iG%E7%88%86%E8%A1%A3%E5%A4%A7%E5%93%A5%E7%97%85%E5%8D%B1%E8%BF%9B%E4%BA%86ICU%23) `230.7K 🔥` `NEW`
1. [突然发现大家都有了过日子的意识](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%9C%89%E4%BA%86%E8%BF%87%E6%97%A5%E5%AD%90%E7%9A%84%E6%84%8F%E8%AF%86%23) `225.9K 🔥` `NEW`
1. [文莱领导人握手中方安保1秒摘手套](https://s.weibo.com/weibo?q=%23%E6%96%87%E8%8E%B1%E9%A2%86%E5%AF%BC%E4%BA%BA%E6%8F%A1%E6%89%8B%E4%B8%AD%E6%96%B9%E5%AE%89%E4%BF%9D1%E7%A7%92%E6%91%98%E6%89%8B%E5%A5%97%23) `210.2K 🔥` `NEW`
1. [智利总统深圳出行的车队排面拉满](https://s.weibo.com/weibo?q=%23%E6%99%BA%E5%88%A9%E6%80%BB%E7%BB%9F%E6%B7%B1%E5%9C%B3%E5%87%BA%E8%A1%8C%E7%9A%84%E8%BD%A6%E9%98%9F%E6%8E%92%E9%9D%A2%E6%8B%89%E6%BB%A1%23) `207.4K 🔥` `NEW`
1. [许飞对刘耀文粉丝的称呼](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%AF%B9%E5%88%98%E8%80%80%E6%96%87%E7%B2%89%E4%B8%9D%E7%9A%84%E7%A7%B0%E5%91%BC%23) `185.0K 🔥` `NEW`
1. [爸爸哭诉幼儿园一年英语口语消失](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%93%AD%E8%AF%89%E5%B9%BC%E5%84%BF%E5%9B%AD%E4%B8%80%E5%B9%B4%E8%8B%B1%E8%AF%AD%E5%8F%A3%E8%AF%AD%E6%B6%88%E5%A4%B1%23) `180.6K 🔥` `NEW`
1. [原来iPhone17ProMax里面真的有黄金](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5iPhone17ProMax%E9%87%8C%E9%9D%A2%E7%9C%9F%E7%9A%84%E6%9C%89%E9%BB%84%E9%87%91%23) `178.6K 🔥` `NEW`
1. [小猫不可以退换因为装不回去](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%B8%8D%E5%8F%AF%E4%BB%A5%E9%80%80%E6%8D%A2%E5%9B%A0%E4%B8%BA%E8%A3%85%E4%B8%8D%E5%9B%9E%E5%8E%BB%23) `171.5K 🔥` `NEW`
1. [杨超越董思成雨中共舞](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E8%91%A3%E6%80%9D%E6%88%90%E9%9B%A8%E4%B8%AD%E5%85%B1%E8%88%9E%23) `167.2K 🔥` `NEW`
1. [烤全羊全是骨架老板名下茶楼经营异常](https://s.weibo.com/weibo?q=%23%E7%83%A4%E5%85%A8%E7%BE%8A%E5%85%A8%E6%98%AF%E9%AA%A8%E6%9E%B6%E8%80%81%E6%9D%BF%E5%90%8D%E4%B8%8B%E8%8C%B6%E6%A5%BC%E7%BB%8F%E8%90%A5%E5%BC%82%E5%B8%B8%23) `166.9K 🔥` `NEW`
1. [美国普通房子的建造质量真离谱](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%99%AE%E9%80%9A%E6%88%BF%E5%AD%90%E7%9A%84%E5%BB%BA%E9%80%A0%E8%B4%A8%E9%87%8F%E7%9C%9F%E7%A6%BB%E8%B0%B1%23) `157.5K 🔥` `NEW`
1. [湖人回应格里姆斯10记三分轰47分](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E5%9B%9E%E5%BA%94%E6%A0%BC%E9%87%8C%E5%A7%86%E6%96%AF10%E8%AE%B0%E4%B8%89%E5%88%86%E8%BD%B047%E5%88%86%23) `145.4K 🔥` `NEW`
1. [毛林林上妆自带压迫感](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%9E%97%E6%9E%97%E4%B8%8A%E5%A6%86%E8%87%AA%E5%B8%A6%E5%8E%8B%E8%BF%AB%E6%84%9F%23) `136.4K 🔥` `NEW`
1. [老外在公园被APEC同款长椅硬控](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E5%9C%A8%E5%85%AC%E5%9B%AD%E8%A2%ABAPEC%E5%90%8C%E6%AC%BE%E9%95%BF%E6%A4%85%E7%A1%AC%E6%8E%A7%23) `135.0K 🔥` `NEW`
1. [智利总统送车厘子礼仪机器人亮了](https://s.weibo.com/weibo?q=%23%E6%99%BA%E5%88%A9%E6%80%BB%E7%BB%9F%E9%80%81%E8%BD%A6%E5%8E%98%E5%AD%90%E7%A4%BC%E4%BB%AA%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BA%AE%E4%BA%86%23) `131.1K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `223.6K 🔥`
1. [难怪郑恺高考成绩可以上复旦](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E9%83%91%E6%81%BA%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%E5%8F%AF%E4%BB%A5%E4%B8%8A%E5%A4%8D%E6%97%A6%23) `200.7K 🔥` `-29%`
1. [郑恺女儿英文水平超过不少大学生了](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E5%A5%B3%E5%84%BF%E8%8B%B1%E6%96%87%E6%B0%B4%E5%B9%B3%E8%B6%85%E8%BF%87%E4%B8%8D%E5%B0%91%E5%A4%A7%E5%AD%A6%E7%94%9F%E4%BA%86%23) `163.1K 🔥` `-51%`
1. [APEC](https://s.weibo.com/weibo?q=%23APEC%23) `138.4K 🔥` `-63%`

Updated at 2026-11-18 17:29:35

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
