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

1. [第一批穿德训鞋的受害者出现了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E7%A9%BF%E5%BE%B7%E8%AE%AD%E9%9E%8B%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `299.0K 🔥` `NEW`
1. [曝国乒落地名古屋被困机场](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%9B%BD%E4%B9%92%E8%90%BD%E5%9C%B0%E5%90%8D%E5%8F%A4%E5%B1%8B%E8%A2%AB%E5%9B%B0%E6%9C%BA%E5%9C%BA%23) `241.4K 🔥` `NEW`
1. [9图读懂平陆运河核心看点](https://s.weibo.com/weibo?q=%239%E5%9B%BE%E8%AF%BB%E6%87%82%E5%B9%B3%E9%99%86%E8%BF%90%E6%B2%B3%E6%A0%B8%E5%BF%83%E7%9C%8B%E7%82%B9%23) `163.9K 🔥` `NEW`
1. [华为Ultimate2新色正式开售](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAUltimate2%E6%96%B0%E8%89%B2%E6%AD%A3%E5%BC%8F%E5%BC%80%E5%94%AE%23) `163.9K 🔥` `NEW`
1. [iPhone18Pro炫光](https://s.weibo.com/weibo?q=%23iPhone18Pro%E7%82%AB%E5%85%89%23) `162.1K 🔥` `NEW`
1. [iPhone18Duo评测](https://s.weibo.com/weibo?q=%23iPhone18Duo%E8%AF%84%E6%B5%8B%23) `136.9K 🔥` `NEW`
1. [南医大坠亡事件导师学生聊天记录](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%8C%BB%E5%A4%A7%E5%9D%A0%E4%BA%A1%E4%BA%8B%E4%BB%B6%E5%AF%BC%E5%B8%88%E5%AD%A6%E7%94%9F%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `130.2K 🔥` `NEW`
1. [13.28万起阿尔法T7再超预期](https://s.weibo.com/weibo?q=%2313.28%E4%B8%87%E8%B5%B7%E9%98%BF%E5%B0%94%E6%B3%95T7%E5%86%8D%E8%B6%85%E9%A2%84%E6%9C%9F%23) `128.3K 🔥` `NEW`
1. [连休13天大学汇总](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BC%9113%E5%A4%A9%E5%A4%A7%E5%AD%A6%E6%B1%87%E6%80%BB%23) `123.4K 🔥` `NEW`
1. [美联储今晚声明五大看点](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%E4%BB%8A%E6%99%9A%E5%A3%B0%E6%98%8E%E4%BA%94%E5%A4%A7%E7%9C%8B%E7%82%B9%23) `112.9K 🔥` `NEW`
1. [性格决定命运这句话太残忍了](https://s.weibo.com/weibo?q=%23%E6%80%A7%E6%A0%BC%E5%86%B3%E5%AE%9A%E5%91%BD%E8%BF%90%E8%BF%99%E5%8F%A5%E8%AF%9D%E5%A4%AA%E6%AE%8B%E5%BF%8D%E4%BA%86%23) `87.3K 🔥` `NEW`
1. [孟子义柯淳爱在无尽夏拥抱路透](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9F%AF%E6%B7%B3%E7%88%B1%E5%9C%A8%E6%97%A0%E5%B0%BD%E5%A4%8F%E6%8B%A5%E6%8A%B1%E8%B7%AF%E9%80%8F%23) `84.9K 🔥` `NEW`
1. [玻尿酸科普](https://s.weibo.com/weibo?q=%23%E7%8E%BB%E5%B0%BF%E9%85%B8%E7%A7%91%E6%99%AE%23) `84.7K 🔥` `NEW`
1. [坠亡学生姐姐发声](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%AD%A6%E7%94%9F%E5%A7%90%E5%A7%90%E5%8F%91%E5%A3%B0%23) `84.7K 🔥` `NEW`
1. [一直对月薪3万没概念直到换成天](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E5%AF%B9%E6%9C%88%E8%96%AA3%E4%B8%87%E6%B2%A1%E6%A6%82%E5%BF%B5%E7%9B%B4%E5%88%B0%E6%8D%A2%E6%88%90%E5%A4%A9%23) `84.7K 🔥` `NEW`
1. [小伙记录母亲最后14天的视频火了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E8%AE%B0%E5%BD%95%E6%AF%8D%E4%BA%B2%E6%9C%80%E5%90%8E14%E5%A4%A9%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `84.4K 🔥` `NEW`
1. [南医大事件涉事导师门诊已约满](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%8C%BB%E5%A4%A7%E4%BA%8B%E4%BB%B6%E6%B6%89%E4%BA%8B%E5%AF%BC%E5%B8%88%E9%97%A8%E8%AF%8A%E5%B7%B2%E7%BA%A6%E6%BB%A1%23) `84.3K 🔥` `NEW`
1. [谭松韵演出生理性恐惧](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E6%BC%94%E5%87%BA%E7%94%9F%E7%90%86%E6%80%A7%E6%81%90%E6%83%A7%23) `83.0K 🔥` `NEW`
1. [幼童坠亡事发房间监控未插电](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E7%AB%A5%E5%9D%A0%E4%BA%A1%E4%BA%8B%E5%8F%91%E6%88%BF%E9%97%B4%E7%9B%91%E6%8E%A7%E6%9C%AA%E6%8F%92%E7%94%B5%23) `78.5K 🔥` `NEW`
1. [多国亚运代表队落地名古屋被困机场](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E4%BA%9A%E8%BF%90%E4%BB%A3%E8%A1%A8%E9%98%9F%E8%90%BD%E5%9C%B0%E5%90%8D%E5%8F%A4%E5%B1%8B%E8%A2%AB%E5%9B%B0%E6%9C%BA%E5%9C%BA%23) `78.2K 🔥` `NEW`
1. [每天处理猫咪跟小小人类纠纷](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%A4%84%E7%90%86%E7%8C%AB%E5%92%AA%E8%B7%9F%E5%B0%8F%E5%B0%8F%E4%BA%BA%E7%B1%BB%E7%BA%A0%E7%BA%B7%23) `67.5K 🔥` `NEW`
1. [上海干湿垃圾还在分吗](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%B9%B2%E6%B9%BF%E5%9E%83%E5%9C%BE%E8%BF%98%E5%9C%A8%E5%88%86%E5%90%97%23) `67.3K 🔥` `NEW`
1. [一点点 威胁员工](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%82%B9%E7%82%B9%20%E5%A8%81%E8%83%81%E5%91%98%E5%B7%A5%23) `67.1K 🔥` `NEW`
1. [女演员成植物人5年后康复回归拍戏](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E6%88%90%E6%A4%8D%E7%89%A9%E4%BA%BA5%E5%B9%B4%E5%90%8E%E5%BA%B7%E5%A4%8D%E5%9B%9E%E5%BD%92%E6%8B%8D%E6%88%8F%23) `66.8K 🔥` `NEW`
1. [iPhone18ProMax充电速度](https://s.weibo.com/weibo?q=%23iPhone18ProMax%E5%85%85%E7%94%B5%E9%80%9F%E5%BA%A6%23) `66.4K 🔥` `NEW`
1. [人生自取其辱十件套](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E8%87%AA%E5%8F%96%E5%85%B6%E8%BE%B1%E5%8D%81%E4%BB%B6%E5%A5%97%23) `66.3K 🔥` `NEW`
1. [国乒被困亚运机场只给水不给饭](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E8%A2%AB%E5%9B%B0%E4%BA%9A%E8%BF%90%E6%9C%BA%E5%9C%BA%E5%8F%AA%E7%BB%99%E6%B0%B4%E4%B8%8D%E7%BB%99%E9%A5%AD%23) `66.0K 🔥` `NEW`
1. [美股在利率决议前高开](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E5%9C%A8%E5%88%A9%E7%8E%87%E5%86%B3%E8%AE%AE%E5%89%8D%E9%AB%98%E5%BC%80%23) `65.1K 🔥` `NEW`
1. [田曦薇出演雪粒镇](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%87%BA%E6%BC%94%E9%9B%AA%E7%B2%92%E9%95%87%23) `64.2K 🔥` `NEW`
1. [兰香如故这段完全get到官配了](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%BF%99%E6%AE%B5%E5%AE%8C%E5%85%A8get%E5%88%B0%E5%AE%98%E9%85%8D%E4%BA%86%23) `63.5K 🔥` `NEW`
1. [心动的信号9节目组被吐槽](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A8%E7%9A%84%E4%BF%A1%E5%8F%B79%E8%8A%82%E7%9B%AE%E7%BB%84%E8%A2%AB%E5%90%90%E6%A7%BD%23) `63.4K 🔥` `NEW`
1. [中国体操队在机场等了6小时](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BD%93%E6%93%8D%E9%98%9F%E5%9C%A8%E6%9C%BA%E5%9C%BA%E7%AD%89%E4%BA%866%E5%B0%8F%E6%97%B6%23) `63.4K 🔥` `NEW`
1. [男生坠亡前发生了什么](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E5%9D%A0%E4%BA%A1%E5%89%8D%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%23) `63.3K 🔥` `NEW`
1. [父亲遛狗2岁幼童从18楼坠亡](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E9%81%9B%E7%8B%972%E5%B2%81%E5%B9%BC%E7%AB%A5%E4%BB%8E18%E6%A5%BC%E5%9D%A0%E4%BA%A1%23) `63.2K 🔥` `NEW`
1. [坠亡幼童父亲被妻子打后扬言要报警](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%B9%BC%E7%AB%A5%E7%88%B6%E4%BA%B2%E8%A2%AB%E5%A6%BB%E5%AD%90%E6%89%93%E5%90%8E%E6%89%AC%E8%A8%80%E8%A6%81%E6%8A%A5%E8%AD%A6%23) `63.2K 🔥` `NEW`
1. [TES变阵](https://s.weibo.com/weibo?q=%23TES%E5%8F%98%E9%98%B5%23) `63.1K 🔥` `NEW`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `63.1K 🔥` `NEW`
1. [朋友在国外呆了8年没回国](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%A8%E5%9B%BD%E5%A4%96%E5%91%86%E4%BA%868%E5%B9%B4%E6%B2%A1%E5%9B%9E%E5%9B%BD%23) `63.0K 🔥` `NEW`
1. [盛夏晴朗](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E5%A4%8F%E6%99%B4%E6%9C%97%23) `62.9K 🔥` `NEW`
1. [LPL冒泡赛首发名单](https://s.weibo.com/weibo?q=%23LPL%E5%86%92%E6%B3%A1%E8%B5%9B%E9%A6%96%E5%8F%91%E5%90%8D%E5%8D%95%23) `62.9K 🔥` `NEW`
1. [突然一下就搞明白函数了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E4%B8%80%E4%B8%8B%E5%B0%B1%E6%90%9E%E6%98%8E%E7%99%BD%E5%87%BD%E6%95%B0%E4%BA%86%23) `62.8K 🔥` `NEW`
1. [曝TES法务反击](https://s.weibo.com/weibo?q=%23%E6%9B%9DTES%E6%B3%95%E5%8A%A1%E5%8F%8D%E5%87%BB%23) `62.7K 🔥` `NEW`
1. [中国男乒五战全败](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E4%B9%92%E4%BA%94%E6%88%98%E5%85%A8%E8%B4%A5%23) `62.7K 🔥` `NEW`
1. [导师曾给坠亡医学生转账2.2万](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E5%B8%88%E6%9B%BE%E7%BB%99%E5%9D%A0%E4%BA%A1%E5%8C%BB%E5%AD%A6%E7%94%9F%E8%BD%AC%E8%B4%A62.2%E4%B8%87%23) `62.7K 🔥` `NEW`
1. [钟文泽评测iPhone 18 Pro](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%96%87%E6%B3%BD%E8%AF%84%E6%B5%8BiPhone%2018%20Pro%23) `62.6K 🔥` `NEW`
1. [孙子无血缘再审听证会奶奶当场晕倒](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AD%90%E6%97%A0%E8%A1%80%E7%BC%98%E5%86%8D%E5%AE%A1%E5%90%AC%E8%AF%81%E4%BC%9A%E5%A5%B6%E5%A5%B6%E5%BD%93%E5%9C%BA%E6%99%95%E5%80%92%23) `62.5K 🔥` `NEW`
1. [小胖说打完年总回狼队](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%83%96%E8%AF%B4%E6%89%93%E5%AE%8C%E5%B9%B4%E6%80%BB%E5%9B%9E%E7%8B%BC%E9%98%9F%23) `62.5K 🔥` `NEW`
1. [方程SGT](https://s.weibo.com/weibo?q=%23%E6%96%B9%E7%A8%8BSGT%23) `62.4K 🔥` `NEW`
1. [市委书记说前人欠债凭啥我还](https://s.weibo.com/weibo?q=%23%E5%B8%82%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%AF%B4%E5%89%8D%E4%BA%BA%E6%AC%A0%E5%80%BA%E5%87%AD%E5%95%A5%E6%88%91%E8%BF%98%23) `62.3K 🔥` `NEW`
1. [大学毕业生举报资助人是间谍](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E6%AF%95%E4%B8%9A%E7%94%9F%E4%B8%BE%E6%8A%A5%E8%B5%84%E5%8A%A9%E4%BA%BA%E6%98%AF%E9%97%B4%E8%B0%8D%23) `62.3K 🔥` `NEW`
1. [田曦薇 雪粒镇](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E9%9B%AA%E7%B2%92%E9%95%87%23) `62.2K 🔥` `NEW`
1. [井柏然给栾念做的PPT](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E7%BB%99%E6%A0%BE%E5%BF%B5%E5%81%9A%E7%9A%84PPT%23) `62.1K 🔥` `NEW`

Updated at 2026-09-17 02:17:17

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
