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

1. [朝方在机场热情迎接 (North Korea warmly welcomed them at the airport)](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E6%96%B9%E5%9C%A8%E6%9C%BA%E5%9C%BA%E7%83%AD%E6%83%85%E8%BF%8E%E6%8E%A5%23) `1.0M 🔥` `NEW`
1. [跑男](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%23) `1.0M 🔥` `NEW`
1. [连续16年送考这份坚守令人动容](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E7%BB%AD16%E5%B9%B4%E9%80%81%E8%80%83%E8%BF%99%E4%BB%BD%E5%9D%9A%E5%AE%88%E4%BB%A4%E4%BA%BA%E5%8A%A8%E5%AE%B9%23) `887.0K 🔥` `NEW`
1. [高考历史](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%8E%86%E5%8F%B2%23) `878.1K 🔥` `NEW`
1. [李思潼的第一个红毯要来了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%80%9D%E6%BD%BC%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E7%BA%A2%E6%AF%AF%E8%A6%81%E6%9D%A5%E4%BA%86%23) `788.0K 🔥` `NEW`
1. [高考物理 选拔牛顿接班人](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E7%89%A9%E7%90%86%20%E9%80%89%E6%8B%94%E7%89%9B%E9%A1%BF%E6%8E%A5%E7%8F%AD%E4%BA%BA%23) `747.9K 🔥` `NEW`
1. [买BBA油车还是电车](https://s.weibo.com/weibo?q=%23%E4%B9%B0BBA%E6%B2%B9%E8%BD%A6%E8%BF%98%E6%98%AF%E7%94%B5%E8%BD%A6%23) `670.5K 🔥` `NEW`
1. [历史二卷 盲人摸象](https://s.weibo.com/weibo?q=%23%E5%8E%86%E5%8F%B2%E4%BA%8C%E5%8D%B7%20%E7%9B%B2%E4%BA%BA%E6%91%B8%E8%B1%A1%23) `647.4K 🔥` `NEW`
1. [让AI做高考数学题](https://s.weibo.com/weibo?q=%23%E8%AE%A9AI%E5%81%9A%E9%AB%98%E8%80%83%E6%95%B0%E5%AD%A6%E9%A2%98%23) `578.3K 🔥` `NEW`
1. [新能源车变胖让老司机都犯愁](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E5%8F%98%E8%83%96%E8%AE%A9%E8%80%81%E5%8F%B8%E6%9C%BA%E9%83%BD%E7%8A%AF%E6%84%81%23) `535.4K 🔥` `NEW`
1. [2026KPL夏季赛大名单 (2026KPL Summer Split Roster)](https://s.weibo.com/weibo?q=%232026KPL%E5%A4%8F%E5%AD%A3%E8%B5%9B%E5%A4%A7%E5%90%8D%E5%8D%95%23) `395.3K 🔥` `NEW`
1. [张慧雯原来是哭着跳完的](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E5%8E%9F%E6%9D%A5%E6%98%AF%E5%93%AD%E7%9D%80%E8%B7%B3%E5%AE%8C%E7%9A%84%23) `395.0K 🔥` `NEW`
1. [朱珠法网曝光vivo新折叠](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E6%B3%95%E7%BD%91%E6%9B%9D%E5%85%89vivo%E6%96%B0%E6%8A%98%E5%8F%A0%23) `392.9K 🔥` `NEW`
1. [历史一卷 创新题给我创飞了](https://s.weibo.com/weibo?q=%23%E5%8E%86%E5%8F%B2%E4%B8%80%E5%8D%B7%20%E5%88%9B%E6%96%B0%E9%A2%98%E7%BB%99%E6%88%91%E5%88%9B%E9%A3%9E%E4%BA%86%23) `392.2K 🔥` `NEW`
1. [王源裸上身淋浴戏](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E8%A3%B8%E4%B8%8A%E8%BA%AB%E6%B7%8B%E6%B5%B4%E6%88%8F%23) `391.0K 🔥` `NEW`
1. [奚梦瑶婚礼后去看法网](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E7%A4%BC%E5%90%8E%E5%8E%BB%E7%9C%8B%E6%B3%95%E7%BD%91%23) `390.0K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `388.7K 🔥` `NEW`
1. [曾沛慈团 心引力](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%A2%20%E5%BF%83%E5%BC%95%E5%8A%9B%23) `379.2K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `375.6K 🔥` `NEW`
1. [33岁已婚男隔空猥亵12岁少女](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E5%B7%B2%E5%A9%9A%E7%94%B7%E9%9A%94%E7%A9%BA%E7%8C%A5%E4%BA%B512%E5%B2%81%E5%B0%91%E5%A5%B3%23) `372.3K 🔥` `NEW`
1. [相信什么就会吸引什么 (What you believe in will attract what you believe in)](https://s.weibo.com/weibo?q=%23%E7%9B%B8%E4%BF%A1%E4%BB%80%E4%B9%88%E5%B0%B1%E4%BC%9A%E5%90%B8%E5%BC%95%E4%BB%80%E4%B9%88%23) `293.6K 🔥` `NEW`
1. [菲律宾强震或引发日本海啸](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E5%BC%BA%E9%9C%87%E6%88%96%E5%BC%95%E5%8F%91%E6%97%A5%E6%9C%AC%E6%B5%B7%E5%95%B8%23) `292.9K 🔥` `NEW`
1. [一架飞往美国飞机在多米尼加坠毁](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%9E%B6%E9%A3%9E%E5%BE%80%E7%BE%8E%E5%9B%BD%E9%A3%9E%E6%9C%BA%E5%9C%A8%E5%A4%9A%E7%B1%B3%E5%B0%BC%E5%8A%A0%E5%9D%A0%E6%AF%81%23) `291.4K 🔥` `NEW`
1. [霍思燕爱犬在意大利夺冠](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E6%80%9D%E7%87%95%E7%88%B1%E7%8A%AC%E5%9C%A8%E6%84%8F%E5%A4%A7%E5%88%A9%E5%A4%BA%E5%86%A0%23) `289.9K 🔥` `NEW`
1. [金秀贤重启活动](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E9%87%8D%E5%90%AF%E6%B4%BB%E5%8A%A8%23) `289.1K 🔥` `NEW`
1. [现在的年轻人竞争压力太大](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%AB%9E%E4%BA%89%E5%8E%8B%E5%8A%9B%E5%A4%AA%E5%A4%A7%23) `288.0K 🔥` `NEW`
1. [央视新闻发的白鹿](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%96%B0%E9%97%BB%E5%8F%91%E7%9A%84%E7%99%BD%E9%B9%BF%23) `285.8K 🔥` `NEW`
1. [洪洋杨紫李现是北影的同一届同学](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E6%B4%8B%E6%9D%A8%E7%B4%AB%E6%9D%8E%E7%8E%B0%E6%98%AF%E5%8C%97%E5%BD%B1%E7%9A%84%E5%90%8C%E4%B8%80%E5%B1%8A%E5%90%8C%E5%AD%A6%23) `284.1K 🔥` `NEW`
1. [女孩考完数学自信估分149到150](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%80%83%E5%AE%8C%E6%95%B0%E5%AD%A6%E8%87%AA%E4%BF%A1%E4%BC%B0%E5%88%86149%E5%88%B0150%23) `283.9K 🔥` `NEW`
1. [麦琳带货口条好清晰](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E7%90%B3%E5%B8%A6%E8%B4%A7%E5%8F%A3%E6%9D%A1%E5%A5%BD%E6%B8%85%E6%99%B0%23) `282.3K 🔥` `NEW`
1. [演员杨雪回应结婚原因 (Actor Yang Xue responds to reasons for marriage)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E6%9D%A8%E9%9B%AA%E5%9B%9E%E5%BA%94%E7%BB%93%E5%A9%9A%E5%8E%9F%E5%9B%A0%23) `281.0K 🔥` `NEW`
1. [物理一卷考哭了](https://s.weibo.com/weibo?q=%23%E7%89%A9%E7%90%86%E4%B8%80%E5%8D%B7%E8%80%83%E5%93%AD%E4%BA%86%23) `279.1K 🔥` `NEW`
1. [高考物理](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E7%89%A9%E7%90%86%23) `275.8K 🔥` `NEW`
1. [马年考商鞅变法](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E8%80%83%E5%95%86%E9%9E%85%E5%8F%98%E6%B3%95%23) `274.7K 🔥` `NEW`
1. [律师谈牙医偷拍黄子韬](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%B0%88%E7%89%99%E5%8C%BB%E5%81%B7%E6%8B%8D%E9%BB%84%E5%AD%90%E9%9F%AC%23) `274.2K 🔥` `NEW`
1. [骂对方小孩没家教遭暴打男子发声](https://s.weibo.com/weibo?q=%23%E9%AA%82%E5%AF%B9%E6%96%B9%E5%B0%8F%E5%AD%A9%E6%B2%A1%E5%AE%B6%E6%95%99%E9%81%AD%E6%9A%B4%E6%89%93%E7%94%B7%E5%AD%90%E5%8F%91%E5%A3%B0%23) `272.5K 🔥` `NEW`
1. [A股行情](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%A1%8C%E6%83%85%23) `270.5K 🔥` `NEW`
1. [王源留胡渣了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E7%95%99%E8%83%A1%E6%B8%A3%E4%BA%86%23) `268.8K 🔥` `NEW`
1. [张月全程一直黑脸](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%85%A8%E7%A8%8B%E4%B8%80%E7%9B%B4%E9%BB%91%E8%84%B8%23) `267.8K 🔥` `NEW`
1. [高考数学 前面一加一后面造飞机](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%95%B0%E5%AD%A6%20%E5%89%8D%E9%9D%A2%E4%B8%80%E5%8A%A0%E4%B8%80%E5%90%8E%E9%9D%A2%E9%80%A0%E9%A3%9E%E6%9C%BA%23) `266.7K 🔥` `NEW`
1. [黄灿灿四公个喜第19 (Huang Cancan’s four happy birthdays are No. 19)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%9B%9B%E5%85%AC%E4%B8%AA%E5%96%9C%E7%AC%AC19%23) `265.7K 🔥` `NEW`
1. [菲律宾群岛7.9级地震](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E7%BE%A4%E5%B2%9B7.9%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `263.8K 🔥` `NEW`
1. [江语晨黑脸](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E9%BB%91%E8%84%B8%23) `262.7K 🔥` `NEW`
1. [登贝莱要求姆巴佩多防守](https://s.weibo.com/weibo?q=%23%E7%99%BB%E8%B4%9D%E8%8E%B1%E8%A6%81%E6%B1%82%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%A4%9A%E9%98%B2%E5%AE%88%23) `260.9K 🔥` `NEW`
1. [听到讨厌的人过生日就这态度](https://s.weibo.com/weibo?q=%23%E5%90%AC%E5%88%B0%E8%AE%A8%E5%8E%8C%E7%9A%84%E4%BA%BA%E8%BF%87%E7%94%9F%E6%97%A5%E5%B0%B1%E8%BF%99%E6%80%81%E5%BA%A6%23) `259.9K 🔥` `NEW`
1. [NBA](https://s.weibo.com/weibo?q=%23NBA%23) `258.7K 🔥` `NEW`
1. [高圆圆穿搭还是杨桃那味儿](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%9C%86%E5%9C%86%E7%A9%BF%E6%90%AD%E8%BF%98%E6%98%AF%E6%9D%A8%E6%A1%83%E9%82%A3%E5%91%B3%E5%84%BF%23) `256.8K 🔥` `NEW`
1. [苹果新CEO现身WWDC晚宴](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%96%B0CEO%E7%8E%B0%E8%BA%ABWWDC%E6%99%9A%E5%AE%B4%23) `256.0K 🔥` `NEW`
1. [为什么出租房家电能耗都这么高](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%87%BA%E7%A7%9F%E6%88%BF%E5%AE%B6%E7%94%B5%E8%83%BD%E8%80%97%E9%83%BD%E8%BF%99%E4%B9%88%E9%AB%98%23) `254.8K 🔥` `NEW`
1. [一周不洗的床单上有什么](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%91%A8%E4%B8%8D%E6%B4%97%E7%9A%84%E5%BA%8A%E5%8D%95%E4%B8%8A%E6%9C%89%E4%BB%80%E4%B9%88%23) `252.6K 🔥` `NEW`
1. [张月直接离场了 (Zhang Yue left the scene directly)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E7%9B%B4%E6%8E%A5%E7%A6%BB%E5%9C%BA%E4%BA%86%23) `277.6K 🔥` `-89%`

Updated at 2026-06-08 12:55:43

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
