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

1. [花呗官宣天猫买新iPhone24期免息](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%91%97%E5%AE%98%E5%AE%A3%E5%A4%A9%E7%8C%AB%E4%B9%B0%E6%96%B0iPhone24%E6%9C%9F%E5%85%8D%E6%81%AF%23) `1.4M 🔥` `NEW`
1. [郑钦文复盘惜败莱巴金娜](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%A4%8D%E7%9B%98%E6%83%9C%E8%B4%A5%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%23) `446.2K 🔥` `NEW`
1. [心动的信号](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A8%E7%9A%84%E4%BF%A1%E5%8F%B7%23) `444.7K 🔥` `NEW`
1. [越南女星回应合照被刘亦菲裁掉了](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E5%A5%B3%E6%98%9F%E5%9B%9E%E5%BA%94%E5%90%88%E7%85%A7%E8%A2%AB%E5%88%98%E4%BA%A6%E8%8F%B2%E8%A3%81%E6%8E%89%E4%BA%86%23) `442.9K 🔥` `NEW`
1. [苹果 iPhoneDuo](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%20iPhoneDuo%23) `435.2K 🔥` `NEW`
1. [刘恋曾是奥美创意总监](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%81%8B%E6%9B%BE%E6%98%AF%E5%A5%A5%E7%BE%8E%E5%88%9B%E6%84%8F%E6%80%BB%E7%9B%91%23) `419.5K 🔥` `NEW`
1. [阿信总结苹果发布会](https://s.weibo.com/weibo?q=%23%E9%98%BF%E4%BF%A1%E6%80%BB%E7%BB%93%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%23) `417.4K 🔥` `NEW`
1. [黄金白银大跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E5%A4%A7%E8%B7%8C%23) `415.1K 🔥` `NEW`
1. [杨洋绞尽脑汁的高情商回复](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E7%BB%9E%E5%B0%BD%E8%84%91%E6%B1%81%E7%9A%84%E9%AB%98%E6%83%85%E5%95%86%E5%9B%9E%E5%A4%8D%23) `413.1K 🔥` `NEW`
1. [莱巴金娜vs高芙](https://s.weibo.com/weibo?q=%23%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9Cvs%E9%AB%98%E8%8A%99%23) `412.5K 🔥` `NEW`
1. [井柏然孙千沙发吻花絮](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E6%B2%99%E5%8F%91%E5%90%BB%E8%8A%B1%E7%B5%AE%23) `410.4K 🔥` `NEW`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `407.7K 🔥` `NEW`
1. [何同学上手iPhone18Pro](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%90%8C%E5%AD%A6%E4%B8%8A%E6%89%8BiPhone18Pro%23) `400.3K 🔥` `NEW`
1. [成都华西医院医生提醒](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E5%8D%8E%E8%A5%BF%E5%8C%BB%E9%99%A2%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%92%23) `396.2K 🔥` `NEW`
1. [教师节文案](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E8%8A%82%E6%96%87%E6%A1%88%23) `390.2K 🔥` `NEW`
1. [朴彩英新歌MV用iPhone18Pro拍摄](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%BD%A9%E8%8B%B1%E6%96%B0%E6%AD%8CMV%E7%94%A8iPhone18Pro%E6%8B%8D%E6%91%84%23) `384.9K 🔥` `NEW`
1. [iPhone Duo读音](https://s.weibo.com/weibo?q=%23iPhone%20Duo%E8%AF%BB%E9%9F%B3%23) `380.1K 🔥` `NEW`
1. [不强制大学教师坐班 当成共识](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BC%BA%E5%88%B6%E5%A4%A7%E5%AD%A6%E6%95%99%E5%B8%88%E5%9D%90%E7%8F%AD%20%E5%BD%93%E6%88%90%E5%85%B1%E8%AF%86%23) `377.9K 🔥` `NEW`
1. [司美格鲁肽](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%23) `375.1K 🔥` `NEW`
1. [井柏然孙千被早春晴朗最大尺度吓到](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E8%A2%AB%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E6%9C%80%E5%A4%A7%E5%B0%BA%E5%BA%A6%E5%90%93%E5%88%B0%23) `372.9K 🔥` `NEW`
1. [美财政部周四回购至多60亿美元国债](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%B4%A2%E6%94%BF%E9%83%A8%E5%91%A8%E5%9B%9B%E5%9B%9E%E8%B4%AD%E8%87%B3%E5%A4%9A60%E4%BA%BF%E7%BE%8E%E5%85%83%E5%9B%BD%E5%80%BA%23) `371.5K 🔥` `NEW`
1. [栾念让卢克跟尚之桃走的原因](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E8%AE%A9%E5%8D%A2%E5%85%8B%E8%B7%9F%E5%B0%9A%E4%B9%8B%E6%A1%83%E8%B5%B0%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `365.7K 🔥` `NEW`
1. [一个电话把对面Token烧完了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E7%94%B5%E8%AF%9D%E6%8A%8A%E5%AF%B9%E9%9D%A2Token%E7%83%A7%E5%AE%8C%E4%BA%86%23) `362.3K 🔥` `NEW`
1. [iPhone18Pro价格](https://s.weibo.com/weibo?q=%23iPhone18Pro%E4%BB%B7%E6%A0%BC%23) `16.6M 🔥` `+477%`
1. [iPhoneDuo过渡动画 完美](https://s.weibo.com/weibo?q=%23iPhoneDuo%E8%BF%87%E6%B8%A1%E5%8A%A8%E7%94%BB%20%E5%AE%8C%E7%BE%8E%23) `2.2M 🔥` `+302%`
1. [一图速览2026年服贸会](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%9B%BE%E9%80%9F%E8%A7%882026%E5%B9%B4%E6%9C%8D%E8%B4%B8%E4%BC%9A%23) `1.7M 🔥` `+23%`
1. [教师节](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E8%8A%82%23) `1.4M 🔥` `+426%`
1. [AirPods5 便宜](https://s.weibo.com/weibo?q=%23AirPods5%20%E4%BE%BF%E5%AE%9C%23) `1.2M 🔥` `+516%`
1. [郑钦文美网1比2莱巴金娜](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%BE%8E%E7%BD%911%E6%AF%942%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%23) `576.4K 🔥` `+29%`
1. [郑钦文美网止步八强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%BE%8E%E7%BD%91%E6%AD%A2%E6%AD%A5%E5%85%AB%E5%BC%BA%23) `545.8K 🔥` `+109%`
1. [刘恋想问早春晴朗作者自己是不是原型](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%81%8B%E6%83%B3%E9%97%AE%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E4%BD%9C%E8%80%85%E8%87%AA%E5%B7%B1%E6%98%AF%E4%B8%8D%E6%98%AF%E5%8E%9F%E5%9E%8B%23) `541.9K 🔥` `+303%`
1. [无折痕](https://s.weibo.com/weibo?q=%23%E6%97%A0%E6%8A%98%E7%97%95%23) `440.1K 🔥` `+202%`
1. [苹果回应iPhoneDuo是否有折痕](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%9B%9E%E5%BA%94iPhoneDuo%E6%98%AF%E5%90%A6%E6%9C%89%E6%8A%98%E7%97%95%23) `438.1K 🔥` `+58%`
1. [抖音擦边礼物被下架](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E6%93%A6%E8%BE%B9%E7%A4%BC%E7%89%A9%E8%A2%AB%E4%B8%8B%E6%9E%B6%23) `435.8K 🔥` `+152%`
1. [康康爷爷睡梦中离世](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E5%BA%B7%E7%88%B7%E7%88%B7%E7%9D%A1%E6%A2%A6%E4%B8%AD%E7%A6%BB%E4%B8%96%23) `432.6K 🔥` `+185%`
1. [宁德时代已报警](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `429.9K 🔥` `+323%`
1. [宁德时代市值蒸发超5200亿](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E5%B8%82%E5%80%BC%E8%92%B8%E5%8F%91%E8%B6%855200%E4%BA%BF%23) `428.7K 🔥` `+653%`
1. [爱情公寓超长iPhone18](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E8%B6%85%E9%95%BFiPhone18%23) `425.3K 🔥` `+645%`
1. [Series12 Ultra4](https://s.weibo.com/weibo?q=%23Series12%20Ultra4%23) `423.5K 🔥` `+698%`
1. [苹果发布会](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%23) `405.1K 🔥` `+54%`
1. [在野外看到马刀树尽快远离](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%87%8E%E5%A4%96%E7%9C%8B%E5%88%B0%E9%A9%AC%E5%88%80%E6%A0%91%E5%B0%BD%E5%BF%AB%E8%BF%9C%E7%A6%BB%23) `404.1K 🔥` `+417%`
1. [痞幼说以结婚为目的恋爱是不负责任](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E8%AF%B4%E4%BB%A5%E7%BB%93%E5%A9%9A%E4%B8%BA%E7%9B%AE%E7%9A%84%E6%81%8B%E7%88%B1%E6%98%AF%E4%B8%8D%E8%B4%9F%E8%B4%A3%E4%BB%BB%23) `394.1K 🔥` `+222%`
1. [iPhoneDuo价格](https://s.weibo.com/weibo?q=%23iPhoneDuo%E4%BB%B7%E6%A0%BC%23) `391.8K 🔥` `+38%`
1. [郑钦文回应无缘美网四强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%9B%9E%E5%BA%94%E6%97%A0%E7%BC%98%E7%BE%8E%E7%BD%91%E5%9B%9B%E5%BC%BA%23) `388.0K 🔥` `+187%`
1. [冰川蓝好好看](https://s.weibo.com/weibo?q=%23%E5%86%B0%E5%B7%9D%E8%93%9D%E5%A5%BD%E5%A5%BD%E7%9C%8B%23) `386.2K 🔥` `+396%`
1. [中国女篮 有惊无险进八强](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%20%E6%9C%89%E6%83%8A%E6%97%A0%E9%99%A9%E8%BF%9B%E5%85%AB%E5%BC%BA%23) `382.3K 🔥` `+126%`
1. [抖音礼物 擦边](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E7%A4%BC%E7%89%A9%20%E6%93%A6%E8%BE%B9%23) `368.8K 🔥` `+40%`
1. [早春晴朗好大方的花絮](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%A5%BD%E5%A4%A7%E6%96%B9%E7%9A%84%E8%8A%B1%E7%B5%AE%23) `367.4K 🔥` `+599%`
1. [iPhone18上手评测](https://s.weibo.com/weibo?q=%23iPhone18%E4%B8%8A%E6%89%8B%E8%AF%84%E6%B5%8B%23) `361.5K 🔥` `+124%`
1. [iPhone18Pro颜色](https://s.weibo.com/weibo?q=%23iPhone18Pro%E9%A2%9C%E8%89%B2%23) `399.8K 🔥`
1. [iPhoneDuo 屏下摄像头](https://s.weibo.com/weibo?q=%23iPhoneDuo%20%E5%B1%8F%E4%B8%8B%E6%91%84%E5%83%8F%E5%A4%B4%23) `421.0K 🔥` `-69%`

Updated at 2026-09-10 08:33:11

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
