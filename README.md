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

1. [奔跑吧 (run)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `1.1M 🔥` `NEW`
1. [李昌钰曾用一束紫光揭穿克林顿谎言](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E6%9B%BE%E7%94%A8%E4%B8%80%E6%9D%9F%E7%B4%AB%E5%85%89%E6%8F%AD%E7%A9%BF%E5%85%8B%E6%9E%97%E9%A1%BF%E8%B0%8E%E8%A8%80%23) `786.0K 🔥` `NEW`
1. [20条负面清单让基础教育回归本真](https://s.weibo.com/weibo?q=%2320%E6%9D%A1%E8%B4%9F%E9%9D%A2%E6%B8%85%E5%8D%95%E8%AE%A9%E5%9F%BA%E7%A1%80%E6%95%99%E8%82%B2%E5%9B%9E%E5%BD%92%E6%9C%AC%E7%9C%9F%23) `611.6K 🔥` `NEW`
1. [徐良删除汪苏泷后会无期作词作曲](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E5%88%A0%E9%99%A4%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%90%8E%E4%BC%9A%E6%97%A0%E6%9C%9F%E4%BD%9C%E8%AF%8D%E4%BD%9C%E6%9B%B2%23) `582.1K 🔥` `NEW`
1. [高市早苗对强闯中使馆事件沉默](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%AF%B9%E5%BC%BA%E9%97%AF%E4%B8%AD%E4%BD%BF%E9%A6%86%E4%BA%8B%E4%BB%B6%E6%B2%89%E9%BB%98%23) `490.0K 🔥` `NEW`
1. [李昌钰除了眼睛所有器官都捐出](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E9%99%A4%E4%BA%86%E7%9C%BC%E7%9D%9B%E6%89%80%E6%9C%89%E5%99%A8%E5%AE%98%E9%83%BD%E6%8D%90%E5%87%BA%23) `465.4K 🔥` `NEW`
1. [第一次对年假有了实感](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E5%B9%B4%E5%81%87%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `413.4K 🔥` `NEW`
1. [腾讯给白日提灯99999份一日追剧卡](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E7%BB%99%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF99999%E4%BB%BD%E4%B8%80%E6%97%A5%E8%BF%BD%E5%89%A7%E5%8D%A1%23) `401.7K 🔥` `NEW`
1. [杨瀚森杀死比赛](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E6%9D%80%E6%AD%BB%E6%AF%94%E8%B5%9B%23) `385.1K 🔥` `NEW`
1. [伊朗首都巨大爆炸](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A6%96%E9%83%BD%E5%B7%A8%E5%A4%A7%E7%88%86%E7%82%B8%23) `364.2K 🔥` `NEW`
1. [张子萱42岁状态 (Zhang Zixuan’s 42-year-old status)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E8%90%B142%E5%B2%81%E7%8A%B6%E6%80%81%23) `347.0K 🔥` `NEW`
1. [孙俪让浪姐节目组把陶昕然吊起来](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E8%AE%A9%E6%B5%AA%E5%A7%90%E8%8A%82%E7%9B%AE%E7%BB%84%E6%8A%8A%E9%99%B6%E6%98%95%E7%84%B6%E5%90%8A%E8%B5%B7%E6%9D%A5%23) `342.5K 🔥` `NEW`
1. [不给彩礼就不结婚或成违法行为](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%BB%99%E5%BD%A9%E7%A4%BC%E5%B0%B1%E4%B8%8D%E7%BB%93%E5%A9%9A%E6%88%96%E6%88%90%E8%BF%9D%E6%B3%95%E8%A1%8C%E4%B8%BA%23) `297.3K 🔥` `NEW`
1. [医生你真的叫叶绿素吗](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E4%BD%A0%E7%9C%9F%E7%9A%84%E5%8F%AB%E5%8F%B6%E7%BB%BF%E7%B4%A0%E5%90%97%23) `211.0K 🔥` `NEW`
1. [63岁女子脑出血偏瘫2个月后收获奇迹](https://s.weibo.com/weibo?q=%2363%E5%B2%81%E5%A5%B3%E5%AD%90%E8%84%91%E5%87%BA%E8%A1%80%E5%81%8F%E7%98%AB2%E4%B8%AA%E6%9C%88%E5%90%8E%E6%94%B6%E8%8E%B7%E5%A5%87%E8%BF%B9%23) `170.8K 🔥` `NEW`
1. [狗为了赢面相都变了](https://s.weibo.com/weibo?q=%23%E7%8B%97%E4%B8%BA%E4%BA%86%E8%B5%A2%E9%9D%A2%E7%9B%B8%E9%83%BD%E5%8F%98%E4%BA%86%23) `147.2K 🔥` `NEW`
1. [张凌赫多年前发文抨击影视圈](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%9A%E5%B9%B4%E5%89%8D%E5%8F%91%E6%96%87%E6%8A%A8%E5%87%BB%E5%BD%B1%E8%A7%86%E5%9C%88%23) `144.0K 🔥` `NEW`
1. [中方对168名女童遇难深感震惊](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%AF%B9168%E5%90%8D%E5%A5%B3%E7%AB%A5%E9%81%87%E9%9A%BE%E6%B7%B1%E6%84%9F%E9%9C%87%E6%83%8A%23) `121.5K 🔥` `NEW`
1. [鬼见了周冬雨都得低头](https://s.weibo.com/weibo?q=%23%E9%AC%BC%E8%A7%81%E4%BA%86%E5%91%A8%E5%86%AC%E9%9B%A8%E9%83%BD%E5%BE%97%E4%BD%8E%E5%A4%B4%23) `121.5K 🔥` `NEW`
1. [小米SU7Ultra新增暮光玫瑰车漆](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3SU7Ultra%E6%96%B0%E5%A2%9E%E6%9A%AE%E5%85%89%E7%8E%AB%E7%91%B0%E8%BD%A6%E6%BC%86%23) `121.1K 🔥` `NEW`
1. [代斯回复白鹿 (Dais replied to Bailu)](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%96%AF%E5%9B%9E%E5%A4%8D%E7%99%BD%E9%B9%BF%23) `120.1K 🔥` `NEW`
1. [伊朗不再局限于以牙还牙](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%8D%E5%86%8D%E5%B1%80%E9%99%90%E4%BA%8E%E4%BB%A5%E7%89%99%E8%BF%98%E7%89%99%23) `115.6K 🔥` `NEW`
1. [自制张凌赫杯贴爆火已紧急暂停](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%88%B6%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%9D%AF%E8%B4%B4%E7%88%86%E7%81%AB%E5%B7%B2%E7%B4%A7%E6%80%A5%E6%9A%82%E5%81%9C%23) `106.0K 🔥` `NEW`
1. [美股七巨头市值蒸发超8500亿美元](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E4%B8%83%E5%B7%A8%E5%A4%B4%E5%B8%82%E5%80%BC%E8%92%B8%E5%8F%91%E8%B6%858500%E4%BA%BF%E7%BE%8E%E5%85%83%23) `105.1K 🔥` `NEW`
1. [种地吧](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `104.3K 🔥` `NEW`
1. [喜临门紧急冻结9亿元账户](https://s.weibo.com/weibo?q=%23%E5%96%9C%E4%B8%B4%E9%97%A8%E7%B4%A7%E6%80%A5%E5%86%BB%E7%BB%939%E4%BA%BF%E5%85%83%E8%B4%A6%E6%88%B7%23) `102.4K 🔥` `NEW`
1. [第一次见甲方对乙方恭恭敬敬](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E7%94%B2%E6%96%B9%E5%AF%B9%E4%B9%99%E6%96%B9%E6%81%AD%E6%81%AD%E6%95%AC%E6%95%AC%23) `98.9K 🔥` `NEW`
1. [何晟铭说与徐麒雯恋爱曾被于正阻拦](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%99%9F%E9%93%AD%E8%AF%B4%E4%B8%8E%E5%BE%90%E9%BA%92%E9%9B%AF%E6%81%8B%E7%88%B1%E6%9B%BE%E8%A2%AB%E4%BA%8E%E6%AD%A3%E9%98%BB%E6%8B%A6%23) `94.9K 🔥` `NEW`
1. [杜华前有韩庚后有王一博](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E5%89%8D%E6%9C%89%E9%9F%A9%E5%BA%9A%E5%90%8E%E6%9C%89%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `89.6K 🔥` `NEW`
1. [单休我都不敢出门你竟然出国](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BC%91%E6%88%91%E9%83%BD%E4%B8%8D%E6%95%A2%E5%87%BA%E9%97%A8%E4%BD%A0%E7%AB%9F%E7%84%B6%E5%87%BA%E5%9B%BD%23) `83.1K 🔥` `NEW`
1. [刘敏涛你先别回烟台我害怕 (Liu Mintao, don’t go back to Yantai yet. I’m afraid.)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%95%8F%E6%B6%9B%E4%BD%A0%E5%85%88%E5%88%AB%E5%9B%9E%E7%83%9F%E5%8F%B0%E6%88%91%E5%AE%B3%E6%80%95%23) `81.6K 🔥` `NEW`
1. [橘猫的基因能有多强大](https://s.weibo.com/weibo?q=%23%E6%A9%98%E7%8C%AB%E7%9A%84%E5%9F%BA%E5%9B%A0%E8%83%BD%E6%9C%89%E5%A4%9A%E5%BC%BA%E5%A4%A7%23) `78.6K 🔥` `NEW`
1. [逐玉怎么好看又不好看](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%80%8E%E4%B9%88%E5%A5%BD%E7%9C%8B%E5%8F%88%E4%B8%8D%E5%A5%BD%E7%9C%8B%23) `78.2K 🔥` `NEW`
1. [王俊凯手写无人乐园歌词](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%89%8B%E5%86%99%E6%97%A0%E4%BA%BA%E4%B9%90%E5%9B%AD%E6%AD%8C%E8%AF%8D%23) `76.0K 🔥` `NEW`
1. [一顿早餐达到年夜饭标准了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%A1%BF%E6%97%A9%E9%A4%90%E8%BE%BE%E5%88%B0%E5%B9%B4%E5%A4%9C%E9%A5%AD%E6%A0%87%E5%87%86%E4%BA%86%23) `73.4K 🔥` `NEW`
1. [乐华娱乐续约王一博股价大涨](https://s.weibo.com/weibo?q=%23%E4%B9%90%E5%8D%8E%E5%A8%B1%E4%B9%90%E7%BB%AD%E7%BA%A6%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%82%A1%E4%BB%B7%E5%A4%A7%E6%B6%A8%23) `71.2K 🔥` `NEW`
1. [伦纳德绝杀步行者](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E7%BA%B3%E5%BE%B7%E7%BB%9D%E6%9D%80%E6%AD%A5%E8%A1%8C%E8%80%85%23) `69.7K 🔥` `NEW`
1. [薛之谦广州演唱会](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%B9%BF%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `69.7K 🔥` `NEW`
1. [猫 想摸就摸何必偷偷摸摸](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E6%83%B3%E6%91%B8%E5%B0%B1%E6%91%B8%E4%BD%95%E5%BF%85%E5%81%B7%E5%81%B7%E6%91%B8%E6%91%B8%23) `67.2K 🔥` `NEW`
1. [我国芯片研发重要成果发布](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E8%8A%AF%E7%89%87%E7%A0%94%E5%8F%91%E9%87%8D%E8%A6%81%E6%88%90%E6%9E%9C%E5%8F%91%E5%B8%83%23) `67.2K 🔥` `NEW`
1. [深蓝汽车第100万台电驱下线 (Deep Blue Auto’s 1 millionth electric drive rolls off the assembly line)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E8%93%9D%E6%B1%BD%E8%BD%A6%E7%AC%AC100%E4%B8%87%E5%8F%B0%E7%94%B5%E9%A9%B1%E4%B8%8B%E7%BA%BF%23) `602.1K 🔥`
1. [李昌钰去世 (Li Changyu passed away)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E5%8E%BB%E4%B8%96%23) `487.5K 🔥` `-52%`
1. [祝绪丹 虞书欣 (Zhu Xudan Yu Shuxin)](https://s.weibo.com/weibo?q=%23%E7%A5%9D%E7%BB%AA%E4%B8%B9%20%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `383.3K 🔥` `-28%`
1. [竹林四侠彻底be了 (The Four Heroes of the Bamboo Forest are completely bereft)](https://s.weibo.com/weibo?q=%23%E7%AB%B9%E6%9E%97%E5%9B%9B%E4%BE%A0%E5%BD%BB%E5%BA%95be%E4%BA%86%23) `291.8K 🔥` `-56%`
1. [演员李尚宝去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E6%9D%8E%E5%B0%9A%E5%AE%9D%E5%8E%BB%E4%B8%96%23) `290.5K 🔥` `-70%`
1. [将军可以帅但不能没杀气](https://s.weibo.com/weibo?q=%23%E5%B0%86%E5%86%9B%E5%8F%AF%E4%BB%A5%E5%B8%85%E4%BD%86%E4%B8%8D%E8%83%BD%E6%B2%A1%E6%9D%80%E6%B0%94%23) `134.3K 🔥` `-87%`
1. [舒畅还有剧压了16年才播](https://s.weibo.com/weibo?q=%23%E8%88%92%E7%95%85%E8%BF%98%E6%9C%89%E5%89%A7%E5%8E%8B%E4%BA%8616%E5%B9%B4%E6%89%8D%E6%92%AD%23) `121.4K 🔥` `-79%`
1. [男子结婚月余遭家暴身高1米8不敢回家](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BB%93%E5%A9%9A%E6%9C%88%E4%BD%99%E9%81%AD%E5%AE%B6%E6%9A%B4%E8%BA%AB%E9%AB%981%E7%B1%B38%E4%B8%8D%E6%95%A2%E5%9B%9E%E5%AE%B6%23) `95.8K 🔥` `-76%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `79.4K 🔥` `-28%`
1. [花少导演回应神一季鬼一季](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%AF%BC%E6%BC%94%E5%9B%9E%E5%BA%94%E7%A5%9E%E4%B8%80%E5%AD%A3%E9%AC%BC%E4%B8%80%E5%AD%A3%23) `72.0K 🔥` `-55%`
1. [郭麒麟对接](https://s.weibo.com/weibo?q=%23%E9%83%AD%E9%BA%92%E9%BA%9F%E5%AF%B9%E6%8E%A5%23) `69.0K 🔥` `-53%`

Updated at 2026-03-28 11:40:31

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
