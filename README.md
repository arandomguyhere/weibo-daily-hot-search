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

1. [户上隼辅回应3比2樊振东 (Hayasuke Togami responded 3 to 2 Fan Zhendong)](https://s.weibo.com/weibo?q=%23%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%E5%9B%9E%E5%BA%943%E6%AF%942%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `196.6K 🔥` `NEW`
1. [胡军李乃文做助理陈丽君很忐忑](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%86%9B%E6%9D%8E%E4%B9%83%E6%96%87%E5%81%9A%E5%8A%A9%E7%90%86%E9%99%88%E4%B8%BD%E5%90%9B%E5%BE%88%E5%BF%90%E5%BF%91%23) `174.6K 🔥` `NEW`
1. [医生回应女孩游泳后全身长20多个疣](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%A9%E6%B8%B8%E6%B3%B3%E5%90%8E%E5%85%A8%E8%BA%AB%E9%95%BF20%E5%A4%9A%E4%B8%AA%E7%96%A3%23) `174.5K 🔥` `NEW`
1. [吉隆口岸两张照片只剩一颗树](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E4%B8%A4%E5%BC%A0%E7%85%A7%E7%89%87%E5%8F%AA%E5%89%A9%E4%B8%80%E9%A2%97%E6%A0%91%23) `174.1K 🔥` `NEW`
1. [全球第99高峰一半冰层坠入山谷](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E7%AC%AC99%E9%AB%98%E5%B3%B0%E4%B8%80%E5%8D%8A%E5%86%B0%E5%B1%82%E5%9D%A0%E5%85%A5%E5%B1%B1%E8%B0%B7%23) `173.6K 🔥` `NEW`
1. [苏新皓深夜发文](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E6%B7%B1%E5%A4%9C%E5%8F%91%E6%96%87%23) `173.4K 🔥` `NEW`
1. [李嫣窦靖童宋妍霏再次同框](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AB%A3%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%AE%8B%E5%A6%8D%E9%9C%8F%E5%86%8D%E6%AC%A1%E5%90%8C%E6%A1%86%23) `173.2K 🔥` `NEW`
1. [白敬亭孙千待播剧](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E5%AD%99%E5%8D%83%E5%BE%85%E6%92%AD%E5%89%A7%23) `172.6K 🔥` `NEW`
1. [广东一女婴带着比头大的寄生胎出生](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E4%B8%80%E5%A5%B3%E5%A9%B4%E5%B8%A6%E7%9D%80%E6%AF%94%E5%A4%B4%E5%A4%A7%E7%9A%84%E5%AF%84%E7%94%9F%E8%83%8E%E5%87%BA%E7%94%9F%23) `172.2K 🔥` `NEW`
1. [中日会谈持续两小时期间发生激烈交锋](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%97%A5%E4%BC%9A%E8%B0%88%E6%8C%81%E7%BB%AD%E4%B8%A4%E5%B0%8F%E6%97%B6%E6%9C%9F%E9%97%B4%E5%8F%91%E7%94%9F%E6%BF%80%E7%83%88%E4%BA%A4%E9%94%8B%23) `172.1K 🔥` `NEW`
1. [女孩咳了一个月肺里竟取出1颗牙 (A girl had a tooth removed from her lung after coughing for a month)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%92%B3%E4%BA%86%E4%B8%80%E4%B8%AA%E6%9C%88%E8%82%BA%E9%87%8C%E7%AB%9F%E5%8F%96%E5%87%BA1%E9%A2%97%E7%89%99%23) `171.4K 🔥` `NEW`
1. [云旗老吃家了](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E8%80%81%E5%90%83%E5%AE%B6%E4%BA%86%23) `171.4K 🔥` `NEW`
1. [河南红旗区将全面清除道路隐患](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E7%BA%A2%E6%97%97%E5%8C%BA%E5%B0%86%E5%85%A8%E9%9D%A2%E6%B8%85%E9%99%A4%E9%81%93%E8%B7%AF%E9%9A%90%E6%82%A3%23) `170.9K 🔥` `NEW`
1. [汪苏泷嘉宾周兴哲](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%98%89%E5%AE%BE%E5%91%A8%E5%85%B4%E5%93%B2%23) `170.0K 🔥` `NEW`
1. [吉隆口岸小邬警官确认平安](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%B0%8F%E9%82%AC%E8%AD%A6%E5%AE%98%E7%A1%AE%E8%AE%A4%E5%B9%B3%E5%AE%89%23) `750.0K 🔥` `+790%`
1. [樊振东2比3户上隼辅](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C2%E6%AF%943%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23) `545.4K 🔥` `+718%`
1. [AI赋能新电商发展](https://s.weibo.com/weibo?q=%23AI%E8%B5%8B%E8%83%BD%E6%96%B0%E7%94%B5%E5%95%86%E5%8F%91%E5%B1%95%23) `436.7K 🔥` `+411%`
1. [长大后先对什么祛魅了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E5%90%8E%E5%85%88%E5%AF%B9%E4%BB%80%E4%B9%88%E7%A5%9B%E9%AD%85%E4%BA%86%23) `407.3K 🔥` `+200%`
1. [小说男女主照进现实了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%AF%B4%E7%94%B7%E5%A5%B3%E4%B8%BB%E7%85%A7%E8%BF%9B%E7%8E%B0%E5%AE%9E%E4%BA%86%23) `211.7K 🔥` `+131%`
1. [官方通报博主称拔钉被以扬尘叫停](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%8D%9A%E4%B8%BB%E7%A7%B0%E6%8B%94%E9%92%89%E8%A2%AB%E4%BB%A5%E6%89%AC%E5%B0%98%E5%8F%AB%E5%81%9C%23) `178.5K 🔥` `+213%`
1. [黄景瑜疯狂拥抱宋亚东](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E7%96%AF%E7%8B%82%E6%8B%A5%E6%8A%B1%E5%AE%8B%E4%BA%9A%E4%B8%9C%23) `174.8K 🔥` `+170%`
1. [被井柏然吻技演技迷住了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%BA%95%E6%9F%8F%E7%84%B6%E5%90%BB%E6%8A%80%E6%BC%94%E6%8A%80%E8%BF%B7%E4%BD%8F%E4%BA%86%23) `174.8K 🔥` `+206%`
1. [金价1小时连降4次](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B71%E5%B0%8F%E6%97%B6%E8%BF%9E%E9%99%8D4%E6%AC%A1%23) `174.5K 🔥` `+193%`
1. [吉隆口岸沿途挂满衣物碎片](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%B2%BF%E9%80%94%E6%8C%82%E6%BB%A1%E8%A1%A3%E7%89%A9%E7%A2%8E%E7%89%87%23) `174.3K 🔥` `+188%`
1. [吉隆口岸入警1年樊乐乐失联](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%85%A5%E8%AD%A61%E5%B9%B4%E6%A8%8A%E4%B9%90%E4%B9%90%E5%A4%B1%E8%81%94%23) `174.2K 🔥` `+198%`
1. [常冰玉击败赵心童夺冠](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%86%B0%E7%8E%89%E5%87%BB%E8%B4%A5%E8%B5%B5%E5%BF%83%E7%AB%A5%E5%A4%BA%E5%86%A0%23) `174.0K 🔥` `+207%`
1. [女乘客航班上遭邻座暴力殴打](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B9%98%E5%AE%A2%E8%88%AA%E7%8F%AD%E4%B8%8A%E9%81%AD%E9%82%BB%E5%BA%A7%E6%9A%B4%E5%8A%9B%E6%AE%B4%E6%89%93%23) `173.9K 🔥` `+190%`
1. [剧里看到朴允浩整容成柳俊烈](https://s.weibo.com/weibo?q=%23%E5%89%A7%E9%87%8C%E7%9C%8B%E5%88%B0%E6%9C%B4%E5%85%81%E6%B5%A9%E6%95%B4%E5%AE%B9%E6%88%90%E6%9F%B3%E4%BF%8A%E7%83%88%23) `173.7K 🔥` `+162%`
1. [小米18Fold](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Fold%23) `173.5K 🔥` `+205%`
1. [这5种常见蔬菜是抗炎高手](https://s.weibo.com/weibo?q=%23%E8%BF%995%E7%A7%8D%E5%B8%B8%E8%A7%81%E8%94%AC%E8%8F%9C%E6%98%AF%E6%8A%97%E7%82%8E%E9%AB%98%E6%89%8B%23) `173.3K 🔥` `+203%`
1. [户上隼辅首胜樊振东官网都崩了](https://s.weibo.com/weibo?q=%23%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%E9%A6%96%E8%83%9C%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%AE%98%E7%BD%91%E9%83%BD%E5%B4%A9%E4%BA%86%23) `172.9K 🔥` `+193%`
1. [肯德基最离谱的联名来了](https://s.weibo.com/weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%E6%9C%80%E7%A6%BB%E8%B0%B1%E7%9A%84%E8%81%94%E5%90%8D%E6%9D%A5%E4%BA%86%23) `172.9K 🔥` `+203%`
1. [女子分享自己怀孕后的唯一收入方式](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%88%86%E4%BA%AB%E8%87%AA%E5%B7%B1%E6%80%80%E5%AD%95%E5%90%8E%E7%9A%84%E5%94%AF%E4%B8%80%E6%94%B6%E5%85%A5%E6%96%B9%E5%BC%8F%23) `172.8K 🔥` `+202%`
1. [伊朗发了一个嘲讽美国的神视频](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E4%BA%86%E4%B8%80%E4%B8%AA%E5%98%B2%E8%AE%BD%E7%BE%8E%E5%9B%BD%E7%9A%84%E7%A5%9E%E8%A7%86%E9%A2%91%23) `172.6K 🔥` `+203%`
1. [房子薄成这样原来真的有人住在里面](https://s.weibo.com/weibo?q=%23%E6%88%BF%E5%AD%90%E8%96%84%E6%88%90%E8%BF%99%E6%A0%B7%E5%8E%9F%E6%9D%A5%E7%9C%9F%E7%9A%84%E6%9C%89%E4%BA%BA%E4%BD%8F%E5%9C%A8%E9%87%8C%E9%9D%A2%23) `172.4K 🔥` `+202%`
1. [尼泊尔幸存者称根本来不及逃生](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B9%B8%E5%AD%98%E8%80%85%E7%A7%B0%E6%A0%B9%E6%9C%AC%E6%9D%A5%E4%B8%8D%E5%8F%8A%E9%80%83%E7%94%9F%23) `172.3K 🔥` `+194%`
1. [王菲躲镜头](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E8%BA%B2%E9%95%9C%E5%A4%B4%23) `172.0K 🔥` `+204%`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `171.9K 🔥` `+202%`
1. [是我妈在发帖吗](https://s.weibo.com/weibo?q=%23%E6%98%AF%E6%88%91%E5%A6%88%E5%9C%A8%E5%8F%91%E5%B8%96%E5%90%97%23) `171.7K 🔥` `+202%`
1. [冲锋衣选颜色邪修大法](https://s.weibo.com/weibo?q=%23%E5%86%B2%E9%94%8B%E8%A1%A3%E9%80%89%E9%A2%9C%E8%89%B2%E9%82%AA%E4%BF%AE%E5%A4%A7%E6%B3%95%23) `171.6K 🔥` `+170%`
1. [比包贝尔回应先来的是他新剧](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%8C%85%E8%B4%9D%E5%B0%94%E5%9B%9E%E5%BA%94%E5%85%88%E6%9D%A5%E7%9A%84%E6%98%AF%E4%BB%96%E6%96%B0%E5%89%A7%23) `171.2K 🔥` `+195%`
1. [常冰玉10比7赵心童](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%86%B0%E7%8E%8910%E6%AF%947%E8%B5%B5%E5%BF%83%E7%AB%A5%23) `171.1K 🔥` `+203%`
1. [萨摩耶坐飞机超重都不耶了](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%91%A9%E8%80%B6%E5%9D%90%E9%A3%9E%E6%9C%BA%E8%B6%85%E9%87%8D%E9%83%BD%E4%B8%8D%E8%80%B6%E4%BA%86%23) `171.1K 🔥` `+188%`
1. [樊振东无缘德国杯8强](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%97%A0%E7%BC%98%E5%BE%B7%E5%9B%BD%E6%9D%AF8%E5%BC%BA%23) `170.8K 🔥` `+199%`
1. [田曦薇顶级出装一套比一套美](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%A1%B6%E7%BA%A7%E5%87%BA%E8%A3%85%E4%B8%80%E5%A5%97%E6%AF%94%E4%B8%80%E5%A5%97%E7%BE%8E%23) `170.7K 🔥` `+200%`
1. [此人的舞蹈功底恐怕在我之上](https://s.weibo.com/weibo?q=%23%E6%AD%A4%E4%BA%BA%E7%9A%84%E8%88%9E%E8%B9%88%E5%8A%9F%E5%BA%95%E6%81%90%E6%80%95%E5%9C%A8%E6%88%91%E4%B9%8B%E4%B8%8A%23) `170.6K 🔥` `+200%`
1. [宋亚东KO乌马尔](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E4%B8%9CKO%E4%B9%8C%E9%A9%AC%E5%B0%94%23) `170.4K 🔥` `+195%`
1. [中国半导体两个好消息](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8D%8A%E5%AF%BC%E4%BD%93%E4%B8%A4%E4%B8%AA%E5%A5%BD%E6%B6%88%E6%81%AF%23) `170.4K 🔥` `+202%`
1. [男子婚后第三天自愿给房子加妻子名字](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%A9%9A%E5%90%8E%E7%AC%AC%E4%B8%89%E5%A4%A9%E8%87%AA%E6%84%BF%E7%BB%99%E6%88%BF%E5%AD%90%E5%8A%A0%E5%A6%BB%E5%AD%90%E5%90%8D%E5%AD%97%23) `170.2K 🔥` `+198%`
1. [金价为什么又跌了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%88%E8%B7%8C%E4%BA%86%23) `170.1K 🔥` `+200%`

Updated at 2026-08-30 07:23:19

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
