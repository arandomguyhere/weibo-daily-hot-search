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

1. [官方通报男子编造女生催资助](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90%E7%BC%96%E9%80%A0%E5%A5%B3%E7%94%9F%E5%82%AC%E8%B5%84%E5%8A%A9%23) `1.1M 🔥` `NEW`
1. [编造停捐遭威胁男子曾多次被执行](https://s.weibo.com/weibo?q=%23%E7%BC%96%E9%80%A0%E5%81%9C%E6%8D%90%E9%81%AD%E5%A8%81%E8%83%81%E7%94%B7%E5%AD%90%E6%9B%BE%E5%A4%9A%E6%AC%A1%E8%A2%AB%E6%89%A7%E8%A1%8C%23) `794.4K 🔥` `NEW`
1. [数读三农乡村振兴新图景](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E4%B8%89%E5%86%9C%E4%B9%A1%E6%9D%91%E6%8C%AF%E5%85%B4%E6%96%B0%E5%9B%BE%E6%99%AF%23) `608.2K 🔥` `NEW`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `572.1K 🔥` `NEW`
1. [突然理解了一生爱出片的女人](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E4%BA%86%E4%B8%80%E7%94%9F%E7%88%B1%E5%87%BA%E7%89%87%E7%9A%84%E5%A5%B3%E4%BA%BA%23) `398.5K 🔥` `NEW`
1. [王俊凯综艺打歌舞台](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%BB%BC%E8%89%BA%E6%89%93%E6%AD%8C%E8%88%9E%E5%8F%B0%23) `370.9K 🔥` `NEW`
1. [全新一代智己LS6欢迎登机20.99万起](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E4%B8%80%E4%BB%A3%E6%99%BA%E5%B7%B1LS6%E6%AC%A2%E8%BF%8E%E7%99%BB%E6%9C%BA20.99%E4%B8%87%E8%B5%B7%23) `323.2K 🔥` `NEW`
1. [被罩和衣服一起洗belike](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%BD%A9%E5%92%8C%E8%A1%A3%E6%9C%8D%E4%B8%80%E8%B5%B7%E6%B4%97belike%23) `247.8K 🔥` `NEW`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `247.6K 🔥` `NEW`
1. [太子奶案](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%AD%90%E5%A5%B6%E6%A1%88%23) `242.5K 🔥` `NEW`
1. [SM练习生李松河10年未出道](https://s.weibo.com/weibo?q=%23SM%E7%BB%83%E4%B9%A0%E7%94%9F%E6%9D%8E%E6%9D%BE%E6%B2%B310%E5%B9%B4%E6%9C%AA%E5%87%BA%E9%81%93%23) `239.2K 🔥` `NEW`
1. [曝TF四代出道必须成年](https://s.weibo.com/weibo?q=%23%E6%9B%9DTF%E5%9B%9B%E4%BB%A3%E5%87%BA%E9%81%93%E5%BF%85%E9%A1%BB%E6%88%90%E5%B9%B4%23) `236.9K 🔥` `NEW`
1. [美国8月CPI](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD8%E6%9C%88CPI%23) `236.3K 🔥` `NEW`
1. [心动的信号9](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A8%E7%9A%84%E4%BF%A1%E5%8F%B79%23) `234.2K 🔥` `NEW`
1. [偶遇倪妮考科目二](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%80%AA%E5%A6%AE%E8%80%83%E7%A7%91%E7%9B%AE%E4%BA%8C%23) `230.5K 🔥` `NEW`
1. [男子投150万开火锅店4个多月赔光](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8A%95150%E4%B8%87%E5%BC%80%E7%81%AB%E9%94%85%E5%BA%974%E4%B8%AA%E5%A4%9A%E6%9C%88%E8%B5%94%E5%85%89%23) `230.0K 🔥` `NEW`
1. [Apple Watch S12上手体验](https://s.weibo.com/weibo?q=%23Apple%20Watch%20S12%E4%B8%8A%E6%89%8B%E4%BD%93%E9%AA%8C%23) `230.0K 🔥` `NEW`
1. [时代峰峻也逃不过Prada魔咒](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E4%B9%9F%E9%80%83%E4%B8%8D%E8%BF%87Prada%E9%AD%94%E5%92%92%23) `229.5K 🔥` `NEW`
1. [张凌赫走了一条很笨的路](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%B5%B0%E4%BA%86%E4%B8%80%E6%9D%A1%E5%BE%88%E7%AC%A8%E7%9A%84%E8%B7%AF%23) `229.3K 🔥` `NEW`
1. [泰国一男子猥亵锦鲤被捕](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E4%B8%80%E7%94%B7%E5%AD%90%E7%8C%A5%E4%BA%B5%E9%94%A6%E9%B2%A4%E8%A2%AB%E6%8D%95%23) `228.6K 🔥` `NEW`
1. [iPhoneDuo图标三合一引争议](https://s.weibo.com/weibo?q=%23iPhoneDuo%E5%9B%BE%E6%A0%87%E4%B8%89%E5%90%88%E4%B8%80%E5%BC%95%E4%BA%89%E8%AE%AE%23) `228.1K 🔥` `NEW`
1. [孙燕姿演唱会摔倒](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E6%91%94%E5%80%92%23) `227.9K 🔥` `NEW`
1. [张杰演唱会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%23) `227.8K 🔥` `NEW`
1. [其实一个人保持体面真的很不容易](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%BF%9D%E6%8C%81%E4%BD%93%E9%9D%A2%E7%9C%9F%E7%9A%84%E5%BE%88%E4%B8%8D%E5%AE%B9%E6%98%93%23) `227.5K 🔥` `NEW`
1. [李兰迪涂了蓝色防晒泥](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%E6%B6%82%E4%BA%86%E8%93%9D%E8%89%B2%E9%98%B2%E6%99%92%E6%B3%A5%23) `227.3K 🔥` `NEW`
1. [小米澎程汽车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E6%B1%BD%E8%BD%A6%23) `218.7K 🔥` `NEW`
1. [日企联名辱华IP还公然选918发售](https://s.weibo.com/weibo?q=%23%E6%97%A5%E4%BC%81%E8%81%94%E5%90%8D%E8%BE%B1%E5%8D%8EIP%E8%BF%98%E5%85%AC%E7%84%B6%E9%80%89918%E5%8F%91%E5%94%AE%23) `218.1K 🔥` `NEW`
1. [张若昀谭松韵居然是同学](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%B1%85%E7%84%B6%E6%98%AF%E5%90%8C%E5%AD%A6%23) `217.9K 🔥` `NEW`
1. [时代峰峻连锁反应](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%BF%9E%E9%94%81%E5%8F%8D%E5%BA%94%23) `217.6K 🔥` `NEW`
1. [强烈建议大家日常一定要把AI用起来](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E7%83%88%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E6%97%A5%E5%B8%B8%E4%B8%80%E5%AE%9A%E8%A6%81%E6%8A%8AAI%E7%94%A8%E8%B5%B7%E6%9D%A5%23) `196.9K 🔥` `NEW`
1. [肖宇梁 纯元瓶](https://s.weibo.com/weibo?q=%23%E8%82%96%E5%AE%87%E6%A2%81%20%E7%BA%AF%E5%85%83%E7%93%B6%23) `182.5K 🔥` `NEW`
1. [京城大师赛](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E5%9F%8E%E5%A4%A7%E5%B8%88%E8%B5%9B%23) `177.3K 🔥` `NEW`
1. [倪妮晒学车照](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%E6%99%92%E5%AD%A6%E8%BD%A6%E7%85%A7%23) `177.2K 🔥` `NEW`
1. [阿信苹果发布会立场争议](https://s.weibo.com/weibo?q=%23%E9%98%BF%E4%BF%A1%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%E7%AB%8B%E5%9C%BA%E4%BA%89%E8%AE%AE%23) `176.7K 🔥` `NEW`
1. [美国8月CPI加息预期升温](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD8%E6%9C%88CPI%E5%8A%A0%E6%81%AF%E9%A2%84%E6%9C%9F%E5%8D%87%E6%B8%A9%23) `166.4K 🔥` `NEW`
1. [王俊凯给内娱舞台打个样](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%BB%99%E5%86%85%E5%A8%B1%E8%88%9E%E5%8F%B0%E6%89%93%E4%B8%AA%E6%A0%B7%23) `163.8K 🔥` `NEW`
1. [韩律师称将郑昌盛引渡回中国不可能](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%BE%8B%E5%B8%88%E7%A7%B0%E5%B0%86%E9%83%91%E6%98%8C%E7%9B%9B%E5%BC%95%E6%B8%A1%E5%9B%9E%E4%B8%AD%E5%9B%BD%E4%B8%8D%E5%8F%AF%E8%83%BD%23) `161.2K 🔥` `NEW`
1. [刘雯主要收入来自顶奢代言与广告](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E4%B8%BB%E8%A6%81%E6%94%B6%E5%85%A5%E6%9D%A5%E8%87%AA%E9%A1%B6%E5%A5%A2%E4%BB%A3%E8%A8%80%E4%B8%8E%E5%B9%BF%E5%91%8A%23) `161.1K 🔥` `NEW`
1. [任嘉伦谭松韵对打](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%AF%B9%E6%89%93%23) `155.7K 🔥` `NEW`
1. [台湾医生造谣迪士尼惹上地表最强法务](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%8C%BB%E7%94%9F%E9%80%A0%E8%B0%A3%E8%BF%AA%E5%A3%AB%E5%B0%BC%E6%83%B9%E4%B8%8A%E5%9C%B0%E8%A1%A8%E6%9C%80%E5%BC%BA%E6%B3%95%E5%8A%A1%23) `153.8K 🔥` `NEW`
1. [偶遇肖宇梁去盗笔鬼屋](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E8%82%96%E5%AE%87%E6%A2%81%E5%8E%BB%E7%9B%97%E7%AC%94%E9%AC%BC%E5%B1%8B%23) `152.1K 🔥` `NEW`
1. [太湖湾音乐节](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E6%B9%96%E6%B9%BE%E9%9F%B3%E4%B9%90%E8%8A%82%23) `142.3K 🔥` `NEW`
1. [见识到中国女足的厉害了](https://s.weibo.com/weibo?q=%23%E8%A7%81%E8%AF%86%E5%88%B0%E4%B8%AD%E5%9B%BD%E5%A5%B3%E8%B6%B3%E7%9A%84%E5%8E%89%E5%AE%B3%E4%BA%86%23) `130.9K 🔥` `NEW`
1. [亚运会国乒男双报项组合](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8F%8C%E6%8A%A5%E9%A1%B9%E7%BB%84%E5%90%88%23) `125.1K 🔥` `NEW`
1. [张家界天梯在ins上火了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E7%95%8C%E5%A4%A9%E6%A2%AF%E5%9C%A8ins%E4%B8%8A%E7%81%AB%E4%BA%86%23) `124.9K 🔥` `NEW`
1. [打假网红铁头一审获刑8年](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%81%87%E7%BD%91%E7%BA%A2%E9%93%81%E5%A4%B4%E4%B8%80%E5%AE%A1%E8%8E%B7%E5%88%918%E5%B9%B4%23) `302.8K 🔥` `-73%`
1. [罚了51.79亿携程为何还在杀熟](https://s.weibo.com/weibo?q=%23%E7%BD%9A%E4%BA%8651.79%E4%BA%BF%E6%90%BA%E7%A8%8B%E4%B8%BA%E4%BD%95%E8%BF%98%E5%9C%A8%E6%9D%80%E7%86%9F%23) `243.9K 🔥` `-67%`
1. [iPhone17Pro史上最低价](https://s.weibo.com/weibo?q=%23iPhone17Pro%E5%8F%B2%E4%B8%8A%E6%9C%80%E4%BD%8E%E4%BB%B7%23) `228.9K 🔥` `-21%`
1. [男子编造停捐遭威胁事件被抓](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BC%96%E9%80%A0%E5%81%9C%E6%8D%90%E9%81%AD%E5%A8%81%E8%83%81%E4%BA%8B%E4%BB%B6%E8%A2%AB%E6%8A%93%23) `218.2K 🔥` `-75%`
1. [艾特孙千结果井柏然回复了](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%89%B9%E5%AD%99%E5%8D%83%E7%BB%93%E6%9E%9C%E4%BA%95%E6%9F%8F%E7%84%B6%E5%9B%9E%E5%A4%8D%E4%BA%86%23) `183.4K 🔥` `-53%`

Updated at 2026-09-11 21:46:53

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
