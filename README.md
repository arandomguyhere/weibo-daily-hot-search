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

1. [周五晚高疯 (Friday night high)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BA%94%E6%99%9A%E9%AB%98%E7%96%AF%23) `24.8K 🔥` `NEW`
1. [镖人 (escort)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `94.3K 🔥` `-50%`
1. [花呗等网络消费信贷可享受贴息 (Interest discounts are available for online consumer loans such as Huabei)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%91%97%E7%AD%89%E7%BD%91%E7%BB%9C%E6%B6%88%E8%B4%B9%E4%BF%A1%E8%B4%B7%E5%8F%AF%E4%BA%AB%E5%8F%97%E8%B4%B4%E6%81%AF%23) `72.3K 🔥` `-46%`
1. [十五五规划新指标新看点](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E6%96%B0%E6%8C%87%E6%A0%87%E6%96%B0%E7%9C%8B%E7%82%B9%23) `65.0K 🔥` `-39%`
1. [省委书记怒批有点小权就用到极致](https://s.weibo.com/weibo?q=%23%E7%9C%81%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%80%92%E6%89%B9%E6%9C%89%E7%82%B9%E5%B0%8F%E6%9D%83%E5%B0%B1%E7%94%A8%E5%88%B0%E6%9E%81%E8%87%B4%23) `63.1K 🔥` `-39%`
1. [生命树](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%23) `58.3K 🔥` `-41%`
1. [伊朗导弹袭击以色列最大机场](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%E6%9C%80%E5%A4%A7%E6%9C%BA%E5%9C%BA%23) `52.1K 🔥` `-44%`
1. [草莓价格大大大跳水 (Strawberry prices plummet)](https://s.weibo.com/weibo?q=%23%E8%8D%89%E8%8E%93%E4%BB%B7%E6%A0%BC%E5%A4%A7%E5%A4%A7%E5%A4%A7%E8%B7%B3%E6%B0%B4%23) `42.3K 🔥` `-50%`
1. [专家建议女性尽早做生育力评估](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%BB%BA%E8%AE%AE%E5%A5%B3%E6%80%A7%E5%B0%BD%E6%97%A9%E5%81%9A%E7%94%9F%E8%82%B2%E5%8A%9B%E8%AF%84%E4%BC%B0%23) `42.3K 🔥` `-49%`
1. [预计今年GDP增量超6万亿元](https://s.weibo.com/weibo?q=%23%E9%A2%84%E8%AE%A1%E4%BB%8A%E5%B9%B4GDP%E5%A2%9E%E9%87%8F%E8%B6%856%E4%B8%87%E4%BA%BF%E5%85%83%23) `42.2K 🔥` `-46%`
1. [代表说70岁以上老人真干不动农活了 (The representative said that people over 70 years old really can’t do farm work anymore.)](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%A1%A8%E8%AF%B470%E5%B2%81%E4%BB%A5%E4%B8%8A%E8%80%81%E4%BA%BA%E7%9C%9F%E5%B9%B2%E4%B8%8D%E5%8A%A8%E5%86%9C%E6%B4%BB%E4%BA%86%23) `42.1K 🔥` `-43%`
1. [逐玉爆开](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%88%86%E5%BC%80%23) `42.0K 🔥` `-40%`
1. [伊朗大使说250年怎能挑衅3000年历史](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%A7%E4%BD%BF%E8%AF%B4250%E5%B9%B4%E6%80%8E%E8%83%BD%E6%8C%91%E8%A1%853000%E5%B9%B4%E5%8E%86%E5%8F%B2%23) `41.9K 🔥` `-36%`
1. [逐玉 截不到丑图](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E6%88%AA%E4%B8%8D%E5%88%B0%E4%B8%91%E5%9B%BE%23) `41.9K 🔥` `-32%`
1. [美国土安全部长诺姆被解职 (Homeland Security Secretary Noem fired)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%9C%9F%E5%AE%89%E5%85%A8%E9%83%A8%E9%95%BF%E8%AF%BA%E5%A7%86%E8%A2%AB%E8%A7%A3%E8%81%8C%23) `41.8K 🔥` `-21%`
1. [张凌赫 配音](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E9%85%8D%E9%9F%B3%23) `41.6K 🔥` `-29%`
1. [月刊男友](https://s.weibo.com/weibo?q=%23%E6%9C%88%E5%88%8A%E7%94%B7%E5%8F%8B%23) `41.6K 🔥` `-21%`
1. [乒协会尊重樊振东意愿全力保障](https://s.weibo.com/weibo?q=%23%E4%B9%92%E5%8D%8F%E4%BC%9A%E5%B0%8A%E9%87%8D%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%84%8F%E6%84%BF%E5%85%A8%E5%8A%9B%E4%BF%9D%E9%9A%9C%23) `41.5K 🔥` `-27%`
1. [穆祉丞新歌](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%96%B0%E6%AD%8C%23) `36.9K 🔥` `-38%`
1. [逐玉开播](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%BC%80%E6%92%AD%23) `36.0K 🔥` `-37%`
1. [请全球通缉发明这个水枪的天才](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E5%85%A8%E7%90%83%E9%80%9A%E7%BC%89%E5%8F%91%E6%98%8E%E8%BF%99%E4%B8%AA%E6%B0%B4%E6%9E%AA%E7%9A%84%E5%A4%A9%E6%89%8D%23) `36.0K 🔥` `-37%`
1. [Naiyou Jiaqi](https://s.weibo.com/weibo?q=%23Naiyou%20Jiaqi%23) `35.2K 🔥` `-33%`
1. [迪丽热巴包场支持张凌赫新剧 (Dilireba booked the venue to support Zhang Linghe's new drama)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8C%85%E5%9C%BA%E6%94%AF%E6%8C%81%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%96%B0%E5%89%A7%23) `34.4K 🔥` `-35%`
1. [伊朗发射超重型导弹为遇难学生复仇](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B0%84%E8%B6%85%E9%87%8D%E5%9E%8B%E5%AF%BC%E5%BC%B9%E4%B8%BA%E9%81%87%E9%9A%BE%E5%AD%A6%E7%94%9F%E5%A4%8D%E4%BB%87%23) `34.3K 🔥` `-35%`
1. [逐玉 任豪](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E4%BB%BB%E8%B1%AA%23) `31.1K 🔥` `-41%`
1. [董璇名下公司被执行千万](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E5%90%8D%E4%B8%8B%E5%85%AC%E5%8F%B8%E8%A2%AB%E6%89%A7%E8%A1%8C%E5%8D%83%E4%B8%87%23) `28.6K 🔥` `-46%`
1. [伊朗外长说对抗美以已是胜利 (Iran's foreign minister says confrontation with US and Israel is a victory)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E8%AF%B4%E5%AF%B9%E6%8A%97%E7%BE%8E%E4%BB%A5%E5%B7%B2%E6%98%AF%E8%83%9C%E5%88%A9%23) `27.6K 🔥` `-48%`
1. [女子翻老盒子内藏十几张清朝地契 (Woman digs through old box to find dozens of Qing Dynasty land deeds)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%BF%BB%E8%80%81%E7%9B%92%E5%AD%90%E5%86%85%E8%97%8F%E5%8D%81%E5%87%A0%E5%BC%A0%E6%B8%85%E6%9C%9D%E5%9C%B0%E5%A5%91%23) `26.6K 🔥` `-49%`
1. [伊朗打击伊拉克库尔德地区](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%89%93%E5%87%BB%E4%BC%8A%E6%8B%89%E5%85%8B%E5%BA%93%E5%B0%94%E5%BE%B7%E5%9C%B0%E5%8C%BA%23) `26.1K 🔥` `-50%`
1. [女子频繁迟到做事拖沓被确诊ADHD](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%A2%91%E7%B9%81%E8%BF%9F%E5%88%B0%E5%81%9A%E4%BA%8B%E6%8B%96%E6%B2%93%E8%A2%AB%E7%A1%AE%E8%AF%8AADHD%23) `25.9K 🔥` `-51%`
1. [六大未来产业有哪些 (What are the six future industries?)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%A4%A7%E6%9C%AA%E6%9D%A5%E4%BA%A7%E4%B8%9A%E6%9C%89%E5%93%AA%E4%BA%9B%23) `25.2K 🔥` `-52%`
1. [巴黎时装周 (paris fashion week)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E6%97%B6%E8%A3%85%E5%91%A8%23) `24.2K 🔥` `-54%`
1. [周杰伦新歌要来了 (Jay Chou's new song is coming)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E6%AD%8C%E8%A6%81%E6%9D%A5%E4%BA%86%23) `23.9K 🔥` `-55%`
1. [TES上报Naiyou不正当行为](https://s.weibo.com/weibo?q=%23TES%E4%B8%8A%E6%8A%A5Naiyou%E4%B8%8D%E6%AD%A3%E5%BD%93%E8%A1%8C%E4%B8%BA%23) `23.2K 🔥` `-56%`
1. [张予曦毕雯珺 综艺 (Zhang Yuxi Bi Wenjun Variety Show)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E6%AF%95%E9%9B%AF%E7%8F%BA%20%E7%BB%BC%E8%89%BA%23) `22.7K 🔥` `-57%`
1. [女子常熬夜上班压力大查出3种癌 (Woman who often stays up late at work and feels stressed is diagnosed with 3 types of cancer)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B8%B8%E7%86%AC%E5%A4%9C%E4%B8%8A%E7%8F%AD%E5%8E%8B%E5%8A%9B%E5%A4%A7%E6%9F%A5%E5%87%BA3%E7%A7%8D%E7%99%8C%23) `22.7K 🔥` `-57%`
1. [逐玉 真正的男帅女美 (Zhuyu Real handsome men and beautiful women)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E7%9C%9F%E6%AD%A3%E7%9A%84%E7%94%B7%E5%B8%85%E5%A5%B3%E7%BE%8E%23) `22.0K 🔥` `-58%`
1. [你好星期六](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `22.0K 🔥` `-58%`
1. [字节腾讯同日抢人 (Byte and Tencent snatched people on the same day)](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E8%85%BE%E8%AE%AF%E5%90%8C%E6%97%A5%E6%8A%A2%E4%BA%BA%23) `20.5K 🔥` `-61%`
1. [我国初高中学生人数将排浪式达峰 (The number of middle and high school students in my country will reach its peak)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%88%9D%E9%AB%98%E4%B8%AD%E5%AD%A6%E7%94%9F%E4%BA%BA%E6%95%B0%E5%B0%86%E6%8E%92%E6%B5%AA%E5%BC%8F%E8%BE%BE%E5%B3%B0%23) `20.5K 🔥` `-61%`
1. [369 小丑了](https://s.weibo.com/weibo?q=%23369%20%E5%B0%8F%E4%B8%91%E4%BA%86%23) `20.5K 🔥` `-61%`
1. [剩半截身体的鱼经主人照顾奇迹康复](https://s.weibo.com/weibo?q=%23%E5%89%A9%E5%8D%8A%E6%88%AA%E8%BA%AB%E4%BD%93%E7%9A%84%E9%B1%BC%E7%BB%8F%E4%B8%BB%E4%BA%BA%E7%85%A7%E9%A1%BE%E5%A5%87%E8%BF%B9%E5%BA%B7%E5%A4%8D%23) `20.5K 🔥` `-61%`
1. [金智秀新剧开播](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E6%96%B0%E5%89%A7%E5%BC%80%E6%92%AD%23) `20.5K 🔥` `-61%`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `20.5K 🔥` `-61%`
1. [真我](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%88%91%23) `20.5K 🔥` `-48%`
1. [穆祉丞新歌等待一切重来 (Mu Zhicheng’s new song is waiting for everything to come back again)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%96%B0%E6%AD%8C%E7%AD%89%E5%BE%85%E4%B8%80%E5%88%87%E9%87%8D%E6%9D%A5%23) `20.5K 🔥` `-61%`
1. [曾庆杰 升咖](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E5%BA%86%E6%9D%B0%20%E5%8D%87%E5%92%96%23) `20.5K 🔥` `-61%`
1. [Naiyou疑似假赛](https://s.weibo.com/weibo?q=%23Naiyou%E7%96%91%E4%BC%BC%E5%81%87%E8%B5%9B%23) `20.5K 🔥` `-61%`
1. [建议双一流本科扩招优先山河四省](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%8F%8C%E4%B8%80%E6%B5%81%E6%9C%AC%E7%A7%91%E6%89%A9%E6%8B%9B%E4%BC%98%E5%85%88%E5%B1%B1%E6%B2%B3%E5%9B%9B%E7%9C%81%23) `20.5K 🔥` `-61%`
1. [关于短线交易监管的若干规定](https://s.weibo.com/weibo?q=%23%E5%85%B3%E4%BA%8E%E7%9F%AD%E7%BA%BF%E4%BA%A4%E6%98%93%E7%9B%91%E7%AE%A1%E7%9A%84%E8%8B%A5%E5%B9%B2%E8%A7%84%E5%AE%9A%23) `20.5K 🔥` `-61%`

Updated at 2026-03-07 03:08:59

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
