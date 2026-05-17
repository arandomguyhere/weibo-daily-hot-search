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

1. [卢昱晓道歉 (Lu Yuxiao apologizes)](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E9%81%93%E6%AD%89%23) `11.1M 🔥` `NEW`
1. [103号硬核汽油来了](https://s.weibo.com/weibo?q=%23103%E5%8F%B7%E7%A1%AC%E6%A0%B8%E6%B1%BD%E6%B2%B9%E6%9D%A5%E4%BA%86%23) `1.7M 🔥` `NEW`
1. [陈数欧文共鉴昊铂S600今日预售](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%95%B0%E6%AC%A7%E6%96%87%E5%85%B1%E9%89%B4%E6%98%8A%E9%93%82S600%E4%BB%8A%E6%97%A5%E9%A2%84%E5%94%AE%23) `1.5M 🔥` `NEW`
1. [给阿嬷的情书 屏摄](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E5%B1%8F%E6%91%84%23) `1.3M 🔥` `NEW`
1. [咬壳吃荔枝 不上火](https://s.weibo.com/weibo?q=%23%E5%92%AC%E5%A3%B3%E5%90%83%E8%8D%94%E6%9E%9D%20%E4%B8%8D%E4%B8%8A%E7%81%AB%23) `789.5K 🔥` `NEW`
1. [罕见病确诊 这才是互联网的意义](https://s.weibo.com/weibo?q=%23%E7%BD%95%E8%A7%81%E7%97%85%E7%A1%AE%E8%AF%8A%20%E8%BF%99%E6%89%8D%E6%98%AF%E4%BA%92%E8%81%94%E7%BD%91%E7%9A%84%E6%84%8F%E4%B9%89%23) `688.1K 🔥` `NEW`
1. [猫的树我找到你的新女主了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%9A%84%E6%A0%91%E6%88%91%E6%89%BE%E5%88%B0%E4%BD%A0%E7%9A%84%E6%96%B0%E5%A5%B3%E4%B8%BB%E4%BA%86%23) `503.9K 🔥` `NEW`
1. [央视追踪四川大摆荡坠亡事件](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%BF%BD%E8%B8%AA%E5%9B%9B%E5%B7%9D%E5%A4%A7%E6%91%86%E8%8D%A1%E5%9D%A0%E4%BA%A1%E4%BA%8B%E4%BB%B6%23) `364.4K 🔥` `NEW`
1. [樊振东和勒布伦兄弟争冠](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%92%8C%E5%8B%92%E5%B8%83%E4%BC%A6%E5%85%84%E5%BC%9F%E4%BA%89%E5%86%A0%23) `325.6K 🔥` `NEW`
1. [阚清子乍瘦](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E4%B9%8D%E7%98%A6%23) `313.0K 🔥` `NEW`
1. [承德车内强奸案被告母亲发声 (The mother of the defendant in the Chengde car rape case speaks out)](https://s.weibo.com/weibo?q=%23%E6%89%BF%E5%BE%B7%E8%BD%A6%E5%86%85%E5%BC%BA%E5%A5%B8%E6%A1%88%E8%A2%AB%E5%91%8A%E6%AF%8D%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `307.0K 🔥` `NEW`
1. [北电看到了杨幂的毕业论文](https://s.weibo.com/weibo?q=%23%E5%8C%97%E7%94%B5%E7%9C%8B%E5%88%B0%E4%BA%86%E6%9D%A8%E5%B9%82%E7%9A%84%E6%AF%95%E4%B8%9A%E8%AE%BA%E6%96%87%23) `307.0K 🔥` `NEW`
1. [成毅直播](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%9B%B4%E6%92%AD%23) `306.7K 🔥` `NEW`
1. [何超蕸追悼会](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%95%B8%E8%BF%BD%E6%82%BC%E4%BC%9A%23) `306.6K 🔥` `NEW`
1. [陈泽综艺又没了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B3%BD%E7%BB%BC%E8%89%BA%E5%8F%88%E6%B2%A1%E4%BA%86%23) `306.1K 🔥` `NEW`
1. [AI微短剧会替代真人剧吗](https://s.weibo.com/weibo?q=%23AI%E5%BE%AE%E7%9F%AD%E5%89%A7%E4%BC%9A%E6%9B%BF%E4%BB%A3%E7%9C%9F%E4%BA%BA%E5%89%A7%E5%90%97%23) `306.0K 🔥` `NEW`
1. [承德车内强奸案被告已上诉](https://s.weibo.com/weibo?q=%23%E6%89%BF%E5%BE%B7%E8%BD%A6%E5%86%85%E5%BC%BA%E5%A5%B8%E6%A1%88%E8%A2%AB%E5%91%8A%E5%B7%B2%E4%B8%8A%E8%AF%89%23) `305.8K 🔥` `NEW`
1. [美国记者在北京登长城吃烧麦](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%AE%B0%E8%80%85%E5%9C%A8%E5%8C%97%E4%BA%AC%E7%99%BB%E9%95%BF%E5%9F%8E%E5%90%83%E7%83%A7%E9%BA%A6%23) `305.7K 🔥` `NEW`
1. [女游客景区坠亡没有监控](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%B8%B8%E5%AE%A2%E6%99%AF%E5%8C%BA%E5%9D%A0%E4%BA%A1%E6%B2%A1%E6%9C%89%E7%9B%91%E6%8E%A7%23) `305.3K 🔥` `NEW`
1. [郭富城陪方媛奔丧](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E9%99%AA%E6%96%B9%E5%AA%9B%E5%A5%94%E4%B8%A7%23) `305.2K 🔥` `NEW`
1. [王橹杰iPad上面视频是心理问题 (The video on Wang Lujie’s iPad is a psychological issue)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0iPad%E4%B8%8A%E9%9D%A2%E8%A7%86%E9%A2%91%E6%98%AF%E5%BF%83%E7%90%86%E9%97%AE%E9%A2%98%23) `304.9K 🔥` `NEW`
1. [全智贤 千颂伊附体](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%99%BA%E8%B4%A4%20%E5%8D%83%E9%A2%82%E4%BC%8A%E9%99%84%E4%BD%93%23) `304.5K 🔥` `NEW`
1. [中国男子举报澳洲肉厂安全问题被辞](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%90%E4%B8%BE%E6%8A%A5%E6%BE%B3%E6%B4%B2%E8%82%89%E5%8E%82%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98%E8%A2%AB%E8%BE%9E%23) `304.2K 🔥` `NEW`
1. [TF五代陈璟翊公开](https://s.weibo.com/weibo?q=%23TF%E4%BA%94%E4%BB%A3%E9%99%88%E7%92%9F%E7%BF%8A%E5%85%AC%E5%BC%80%23) `304.0K 🔥` `NEW`
1. [樊振东被莫雷加德又搂又抱](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%A2%AB%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E5%8F%88%E6%90%82%E5%8F%88%E6%8A%B1%23) `303.9K 🔥` `NEW`
1. [Angelababy看到小朋友下意识护住](https://s.weibo.com/weibo?q=%23Angelababy%E7%9C%8B%E5%88%B0%E5%B0%8F%E6%9C%8B%E5%8F%8B%E4%B8%8B%E6%84%8F%E8%AF%86%E6%8A%A4%E4%BD%8F%23) `303.7K 🔥` `NEW`
1. [方媛外公离世](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E5%A4%96%E5%85%AC%E7%A6%BB%E4%B8%96%23) `282.2K 🔥` `NEW`
1. [霍启刚郭晶晶现身何超蕸追悼会](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%88%9A%E9%83%AD%E6%99%B6%E6%99%B6%E7%8E%B0%E8%BA%AB%E4%BD%95%E8%B6%85%E8%95%B8%E8%BF%BD%E6%82%BC%E4%BC%9A%23) `278.0K 🔥` `NEW`
1. [甜馨晒自己化的新妆容](https://s.weibo.com/weibo?q=%23%E7%94%9C%E9%A6%A8%E6%99%92%E8%87%AA%E5%B7%B1%E5%8C%96%E7%9A%84%E6%96%B0%E5%A6%86%E5%AE%B9%23) `238.7K 🔥` `NEW`
1. [现在记住了你又不高兴](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E8%AE%B0%E4%BD%8F%E4%BA%86%E4%BD%A0%E5%8F%88%E4%B8%8D%E9%AB%98%E5%85%B4%23) `202.6K 🔥` `NEW`
1. [张凌赫被这一秒过火英文名震惊 (Zhang Linghe was shocked by the excessive English name in this second)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A2%AB%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E8%8B%B1%E6%96%87%E5%90%8D%E9%9C%87%E6%83%8A%23) `202.5K 🔥` `NEW`
1. [免费退改机票申请改签被要求付差价](https://s.weibo.com/weibo?q=%23%E5%85%8D%E8%B4%B9%E9%80%80%E6%94%B9%E6%9C%BA%E7%A5%A8%E7%94%B3%E8%AF%B7%E6%94%B9%E7%AD%BE%E8%A2%AB%E8%A6%81%E6%B1%82%E4%BB%98%E5%B7%AE%E4%BB%B7%23) `200.1K 🔥` `NEW`
1. [范丞丞评刘耀文大宽肩](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%AF%84%E5%88%98%E8%80%80%E6%96%87%E5%A4%A7%E5%AE%BD%E8%82%A9%23) `199.5K 🔥` `NEW`
1. [侯明昊落泪神图](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E8%90%BD%E6%B3%AA%E7%A5%9E%E5%9B%BE%23) `198.8K 🔥` `NEW`
1. [李小冉 谢娜管不了我](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E8%B0%A2%E5%A8%9C%E7%AE%A1%E4%B8%8D%E4%BA%86%E6%88%91%23) `198.0K 🔥` `NEW`
1. [何猷君奚梦瑶现身何超蕸追思会](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%8E%B0%E8%BA%AB%E4%BD%95%E8%B6%85%E8%95%B8%E8%BF%BD%E6%80%9D%E4%BC%9A%23) `156.6K 🔥` `NEW`
1. [张凌赫 给纽约一些东方骨相的震撼](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E7%BB%99%E7%BA%BD%E7%BA%A6%E4%B8%80%E4%BA%9B%E4%B8%9C%E6%96%B9%E9%AA%A8%E7%9B%B8%E7%9A%84%E9%9C%87%E6%92%BC%23) `143.9K 🔥` `NEW`
1. [委内瑞拉驱逐马杜罗亲信](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%86%85%E7%91%9E%E6%8B%89%E9%A9%B1%E9%80%90%E9%A9%AC%E6%9D%9C%E7%BD%97%E4%BA%B2%E4%BF%A1%23) `117.0K 🔥` `NEW`
1. [黄仁勋同款](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%90%8C%E6%AC%BE%23) `117.0K 🔥` `NEW`
1. [特朗普警告台独 (Trump warns Taiwan independence)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AD%A6%E5%91%8A%E5%8F%B0%E7%8B%AC%23) `2.1M 🔥` `+53%`
1. [广东暴雨天蟑螂成群出动](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E6%9A%B4%E9%9B%A8%E5%A4%A9%E8%9F%91%E8%9E%82%E6%88%90%E7%BE%A4%E5%87%BA%E5%8A%A8%23) `304.9K 🔥` `+21%`
1. [叔侄将溺亡男子藏家不涉嫌侮辱尸体罪 (The uncle and nephew who hid the man who drowned are not charged with the crime of indignity to a corpse)](https://s.weibo.com/weibo?q=%23%E5%8F%94%E4%BE%84%E5%B0%86%E6%BA%BA%E4%BA%A1%E7%94%B7%E5%AD%90%E8%97%8F%E5%AE%B6%E4%B8%8D%E6%B6%89%E5%AB%8C%E4%BE%AE%E8%BE%B1%E5%B0%B8%E4%BD%93%E7%BD%AA%23) `184.0K 🔥` `+22%`
1. [疑似张元英抢金智媛C位](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%BC%A0%E5%85%83%E8%8B%B1%E6%8A%A2%E9%87%91%E6%99%BA%E5%AA%9BC%E4%BD%8D%23) `315.6K 🔥`
1. [丝芭给黄婷婷剧组发警告函](https://s.weibo.com/weibo?q=%23%E4%B8%9D%E8%8A%AD%E7%BB%99%E9%BB%84%E5%A9%B7%E5%A9%B7%E5%89%A7%E7%BB%84%E5%8F%91%E8%AD%A6%E5%91%8A%E5%87%BD%23) `304.4K 🔥`
1. [苹果华为小米集体降价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8D%8E%E4%B8%BA%E5%B0%8F%E7%B1%B3%E9%9B%86%E4%BD%93%E9%99%8D%E4%BB%B7%23) `316.4K 🔥` `-46%`
1. [台舆论称特朗普不许台独视美为靠山](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E8%88%86%E8%AE%BA%E7%A7%B0%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%8D%E8%AE%B8%E5%8F%B0%E7%8B%AC%E8%A7%86%E7%BE%8E%E4%B8%BA%E9%9D%A0%E5%B1%B1%23) `306.4K 🔥` `-51%`
1. [香蜜最后一帧原来是家业 (The last frame of Xiangmi turns out to be a family business)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E8%9C%9C%E6%9C%80%E5%90%8E%E4%B8%80%E5%B8%A7%E5%8E%9F%E6%9D%A5%E6%98%AF%E5%AE%B6%E4%B8%9A%23) `275.3K 🔥` `-68%`
1. [陈伟霆钟楚曦 荔湾广场](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E9%92%9F%E6%A5%9A%E6%9B%A6%20%E8%8D%94%E6%B9%BE%E5%B9%BF%E5%9C%BA%23) `200.3K 🔥` `-31%`
1. [摄影师称摆拍女孩确为盲人](https://s.weibo.com/weibo?q=%23%E6%91%84%E5%BD%B1%E5%B8%88%E7%A7%B0%E6%91%86%E6%8B%8D%E5%A5%B3%E5%AD%A9%E7%A1%AE%E4%B8%BA%E7%9B%B2%E4%BA%BA%23) `198.5K 🔥` `-69%`
1. [千户苗寨偶遇Angelababy (Encountering Angelababy in Qianhu Miao Village)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E6%88%B7%E8%8B%97%E5%AF%A8%E5%81%B6%E9%81%87Angelababy%23) `167.4K 🔥` `-52%`
1. [小米YU7全系新增火山灰车漆](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7%E5%85%A8%E7%B3%BB%E6%96%B0%E5%A2%9E%E7%81%AB%E5%B1%B1%E7%81%B0%E8%BD%A6%E6%BC%86%23) `166.7K 🔥` `-32%`

Updated at 2026-05-17 15:17:31

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
