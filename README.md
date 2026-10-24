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

1. [iG战胜TSW](https://s.weibo.com/weibo?q=%23iG%E6%88%98%E8%83%9CTSW%23) `884.2K 🔥` `NEW`
1. [iG拿下LPL在S16外战首胜](https://s.weibo.com/weibo?q=%23iG%E6%8B%BF%E4%B8%8BLPL%E5%9C%A8S16%E5%A4%96%E6%88%98%E9%A6%96%E8%83%9C%23) `329.9K 🔥` `NEW`
1. [HLE GEN](https://s.weibo.com/weibo?q=%23HLE%20GEN%23) `199.2K 🔥` `NEW`
1. [英雄联盟](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%23) `129.4K 🔥` `NEW`
1. [儿媳愿出钱但不与婆婆同住](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AA%B3%E6%84%BF%E5%87%BA%E9%92%B1%E4%BD%86%E4%B8%8D%E4%B8%8E%E5%A9%86%E5%A9%86%E5%90%8C%E4%BD%8F%23) `124.2K 🔥` `NEW`
1. [被状告后高铁宁波站撤掉禁烟标志](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%8A%B6%E5%91%8A%E5%90%8E%E9%AB%98%E9%93%81%E5%AE%81%E6%B3%A2%E7%AB%99%E6%92%A4%E6%8E%89%E7%A6%81%E7%83%9F%E6%A0%87%E5%BF%97%23) `119.6K 🔥` `NEW`
1. [祖海态度](https://s.weibo.com/weibo?q=%23%E7%A5%96%E6%B5%B7%E6%80%81%E5%BA%A6%23) `108.5K 🔥` `NEW`
1. [真的建议大家要注意用脑卫生](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%A6%81%E6%B3%A8%E6%84%8F%E7%94%A8%E8%84%91%E5%8D%AB%E7%94%9F%23) `104.0K 🔥` `NEW`
1. [女生拒绝表白后照片被发在色情软件](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%8B%92%E7%BB%9D%E8%A1%A8%E7%99%BD%E5%90%8E%E7%85%A7%E7%89%87%E8%A2%AB%E5%8F%91%E5%9C%A8%E8%89%B2%E6%83%85%E8%BD%AF%E4%BB%B6%23) `104.0K 🔥` `NEW`
1. [TheShy奎桑提团战发力](https://s.weibo.com/weibo?q=%23TheShy%E5%A5%8E%E6%A1%91%E6%8F%90%E5%9B%A2%E6%88%98%E5%8F%91%E5%8A%9B%23) `104.0K 🔥` `NEW`
1. [朱婷助科内利亚诺超级杯夺冠](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%A9%B7%E5%8A%A9%E7%A7%91%E5%86%85%E5%88%A9%E4%BA%9A%E8%AF%BA%E8%B6%85%E7%BA%A7%E6%9D%AF%E5%A4%BA%E5%86%A0%23) `104.0K 🔥` `NEW`
1. [Meiko回应iG阵容选择及前期失误](https://s.weibo.com/weibo?q=%23Meiko%E5%9B%9E%E5%BA%94iG%E9%98%B5%E5%AE%B9%E9%80%89%E6%8B%A9%E5%8F%8A%E5%89%8D%E6%9C%9F%E5%A4%B1%E8%AF%AF%23) `104.0K 🔥` `NEW`
1. [al](https://s.weibo.com/weibo?q=%23al%23) `96.2K 🔥` `NEW`
1. [TheShy回应S16外战首胜](https://s.weibo.com/weibo?q=%23TheShy%E5%9B%9E%E5%BA%94S16%E5%A4%96%E6%88%98%E9%A6%96%E8%83%9C%23) `86.6K 🔥` `NEW`
1. [上海转移避险群众超6万人](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%BD%AC%E7%A7%BB%E9%81%BF%E9%99%A9%E7%BE%A4%E4%BC%97%E8%B6%856%E4%B8%87%E4%BA%BA%23) `72.3K 🔥` `NEW`
1. [女子在冰箱装摄像头查老公偷吃](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%86%B0%E7%AE%B1%E8%A3%85%E6%91%84%E5%83%8F%E5%A4%B4%E6%9F%A5%E8%80%81%E5%85%AC%E5%81%B7%E5%90%83%23) `72.3K 🔥` `NEW`
1. [三十万以内的车能让我放下尊严](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%8D%81%E4%B8%87%E4%BB%A5%E5%86%85%E7%9A%84%E8%BD%A6%E8%83%BD%E8%AE%A9%E6%88%91%E6%94%BE%E4%B8%8B%E5%B0%8A%E4%B8%A5%23) `64.0K 🔥` `NEW`
1. [朱一龙刘浩存刘雯吉娜同框](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E5%88%98%E6%B5%A9%E5%AD%98%E5%88%98%E9%9B%AF%E5%90%89%E5%A8%9C%E5%90%8C%E6%A1%86%23) `62.2K 🔥` `NEW`
1. [继承父母小生意少受委屈](https://s.weibo.com/weibo?q=%23%E7%BB%A7%E6%89%BF%E7%88%B6%E6%AF%8D%E5%B0%8F%E7%94%9F%E6%84%8F%E5%B0%91%E5%8F%97%E5%A7%94%E5%B1%88%23) `59.5K 🔥` `NEW`
1. [男子33克金项链被老鼠拖走筑巢](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9033%E5%85%8B%E9%87%91%E9%A1%B9%E9%93%BE%E8%A2%AB%E8%80%81%E9%BC%A0%E6%8B%96%E8%B5%B0%E7%AD%91%E5%B7%A2%23) `59.4K 🔥` `NEW`
1. [女生不要谈太久的恋爱](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E4%B8%8D%E8%A6%81%E8%B0%88%E5%A4%AA%E4%B9%85%E7%9A%84%E6%81%8B%E7%88%B1%23) `646.6K 🔥` `+422%`
1. [渝昆高铁全线铺轨完成](https://s.weibo.com/weibo?q=%23%E6%B8%9D%E6%98%86%E9%AB%98%E9%93%81%E5%85%A8%E7%BA%BF%E9%93%BA%E8%BD%A8%E5%AE%8C%E6%88%90%23) `512.5K 🔥` `+452%`
1. [TES拿下LPL在S16首胜](https://s.weibo.com/weibo?q=%23TES%E6%8B%BF%E4%B8%8BLPL%E5%9C%A8S16%E9%A6%96%E8%83%9C%23) `252.0K 🔥` `+53%`
1. [鸡蛋别放冰箱门格子里](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E8%9B%8B%E5%88%AB%E6%94%BE%E5%86%B0%E7%AE%B1%E9%97%A8%E6%A0%BC%E5%AD%90%E9%87%8C%23) `205.9K 🔥` `+427%`
1. [小城良方 辽宁养蚂蚁骗局](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%20%E8%BE%BD%E5%AE%81%E5%85%BB%E8%9A%82%E8%9A%81%E9%AA%97%E5%B1%80%23) `183.7K 🔥` `+517%`
1. [小说里为什么没有广东霸总](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%AF%B4%E9%87%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B2%A1%E6%9C%89%E5%B9%BF%E4%B8%9C%E9%9C%B8%E6%80%BB%23) `128.0K 🔥` `+158%`
1. [毛不易婚礼发言引网友争议](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E5%8F%91%E8%A8%80%E5%BC%95%E7%BD%91%E5%8F%8B%E4%BA%89%E8%AE%AE%23) `121.9K 🔥` `+172%`
1. [迪丽热巴蝴蝶飞走是巧合](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%9D%B4%E8%9D%B6%E9%A3%9E%E8%B5%B0%E6%98%AF%E5%B7%A7%E5%90%88%23) `115.4K 🔥` `+195%`
1. [曝刘学义张予曦差点结婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E5%AD%A6%E4%B9%89%E5%BC%A0%E4%BA%88%E6%9B%A6%E5%B7%AE%E7%82%B9%E7%BB%93%E5%A9%9A%23) `107.4K 🔥` `+141%`
1. [乒乓球亚锦赛男单四强](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E4%BA%9A%E9%94%A6%E8%B5%9B%E7%94%B7%E5%8D%95%E5%9B%9B%E5%BC%BA%23) `104.0K 🔥` `+167%`
1. [新郎新娘回应毛不易婚礼发言](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%83%8E%E6%96%B0%E5%A8%98%E5%9B%9E%E5%BA%94%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E5%8F%91%E8%A8%80%23) `104.0K 🔥` `+166%`
1. [徐嘉余50米仰泳破世界纪录](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%98%89%E4%BD%9950%E7%B1%B3%E4%BB%B0%E6%B3%B3%E7%A0%B4%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `104.0K 🔥` `+166%`
1. [曝手机平板产品线将停更](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%89%8B%E6%9C%BA%E5%B9%B3%E6%9D%BF%E4%BA%A7%E5%93%81%E7%BA%BF%E5%B0%86%E5%81%9C%E6%9B%B4%23) `104.0K 🔥` `+84%`
1. [女子怀孕前骨瘦如柴](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E5%89%8D%E9%AA%A8%E7%98%A6%E5%A6%82%E6%9F%B4%23) `104.0K 🔥` `+167%`
1. [曝刘学义张予曦曾在一起三年多](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E5%AD%A6%E4%B9%89%E5%BC%A0%E4%BA%88%E6%9B%A6%E6%9B%BE%E5%9C%A8%E4%B8%80%E8%B5%B7%E4%B8%89%E5%B9%B4%E5%A4%9A%23) `104.0K 🔥` `+166%`
1. [iPhoneDuo破发](https://s.weibo.com/weibo?q=%23iPhoneDuo%E7%A0%B4%E5%8F%91%23) `104.0K 🔥` `+167%`
1. [没想到何超莲是真的在打电话](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%83%B3%E5%88%B0%E4%BD%95%E8%B6%85%E8%8E%B2%E6%98%AF%E7%9C%9F%E7%9A%84%E5%9C%A8%E6%89%93%E7%94%B5%E8%AF%9D%23) `104.0K 🔥` `+166%`
1. [镜头转到李昀锐真的好清秀帅气啊](https://s.weibo.com/weibo?q=%23%E9%95%9C%E5%A4%B4%E8%BD%AC%E5%88%B0%E6%9D%8E%E6%98%80%E9%94%90%E7%9C%9F%E7%9A%84%E5%A5%BD%E6%B8%85%E7%A7%80%E5%B8%85%E6%B0%94%E5%95%8A%23) `104.0K 🔥` `+166%`
1. [沈阳一商场保洁大叔凭高颜值出圈](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E4%B8%80%E5%95%86%E5%9C%BA%E4%BF%9D%E6%B4%81%E5%A4%A7%E5%8F%94%E5%87%AD%E9%AB%98%E9%A2%9C%E5%80%BC%E5%87%BA%E5%9C%88%23) `104.0K 🔥` `+188%`
1. [前空姐回应空姐月薪四五万传闻](https://s.weibo.com/weibo?q=%23%E5%89%8D%E7%A9%BA%E5%A7%90%E5%9B%9E%E5%BA%94%E7%A9%BA%E5%A7%90%E6%9C%88%E8%96%AA%E5%9B%9B%E4%BA%94%E4%B8%87%E4%BC%A0%E9%97%BB%23) `81.4K 🔥` `+119%`
1. [何超欣发了和奚梦瑶的合照](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E6%AC%A3%E5%8F%91%E4%BA%86%E5%92%8C%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%9A%84%E5%90%88%E7%85%A7%23) `80.1K 🔥` `+161%`
1. [女子因丈夫翻垃圾大吵一架](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E4%B8%88%E5%A4%AB%E7%BF%BB%E5%9E%83%E5%9C%BE%E5%A4%A7%E5%90%B5%E4%B8%80%E6%9E%B6%23) `77.5K 🔥` `+193%`
1. [功夫女足烂番茄0分开局](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%83%82%E7%95%AA%E8%8C%840%E5%88%86%E5%BC%80%E5%B1%80%23) `77.3K 🔥` `+110%`
1. [虞书欣侯明昊行程](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BE%AF%E6%98%8E%E6%98%8A%E8%A1%8C%E7%A8%8B%23) `75.2K 🔥` `+108%`
1. [丁程鑫 听马哥怎么说](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%20%E5%90%AC%E9%A9%AC%E5%93%A5%E6%80%8E%E4%B9%88%E8%AF%B4%23) `73.6K 🔥` `+189%`
1. [国考83个职位无人报](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%80%8383%E4%B8%AA%E8%81%8C%E4%BD%8D%E6%97%A0%E4%BA%BA%E6%8A%A5%23) `72.5K 🔥` `+125%`
1. [婚姻是强者的游戏不是弱者的避风港](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A7%BB%E6%98%AF%E5%BC%BA%E8%80%85%E7%9A%84%E6%B8%B8%E6%88%8F%E4%B8%8D%E6%98%AF%E5%BC%B1%E8%80%85%E7%9A%84%E9%81%BF%E9%A3%8E%E6%B8%AF%23) `66.0K 🔥` `+95%`
1. [反复跟咪咪说我们要走了](https://s.weibo.com/weibo?q=%23%E5%8F%8D%E5%A4%8D%E8%B7%9F%E5%92%AA%E5%92%AA%E8%AF%B4%E6%88%91%E4%BB%AC%E8%A6%81%E8%B5%B0%E4%BA%86%23) `62.7K 🔥` `+84%`
1. [许飞厉娜 再见爱人](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%8E%89%E5%A8%9C%20%E5%86%8D%E8%A7%81%E7%88%B1%E4%BA%BA%23) `62.5K 🔥` `+38%`
1. [al再败就止步16强](https://s.weibo.com/weibo?q=%23al%E5%86%8D%E8%B4%A5%E5%B0%B1%E6%AD%A2%E6%AD%A516%E5%BC%BA%23) `61.2K 🔥` `+57%`

Updated at 2026-10-25 07:40:02

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
