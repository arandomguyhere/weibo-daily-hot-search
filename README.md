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

1. [LPL与LCK瑞士轮现状](https://s.weibo.com/weibo?q=%23LPL%E4%B8%8ELCK%E7%91%9E%E5%A3%AB%E8%BD%AE%E7%8E%B0%E7%8A%B6%23) `113.7K 🔥` `NEW`
1. [TES战胜AL取首胜](https://s.weibo.com/weibo?q=%23TES%E6%88%98%E8%83%9CAL%E5%8F%96%E9%A6%96%E8%83%9C%23) `106.7K 🔥` `NEW`
1. [九成美称官司已开庭待判决](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E6%88%90%E7%BE%8E%E7%A7%B0%E5%AE%98%E5%8F%B8%E5%B7%B2%E5%BC%80%E5%BA%AD%E5%BE%85%E5%88%A4%E5%86%B3%23) `93.2K 🔥` `NEW`
1. [369狼母三切Hope](https://s.weibo.com/weibo?q=%23369%E7%8B%BC%E6%AF%8D%E4%B8%89%E5%88%87Hope%23) `88.3K 🔥` `NEW`
1. [女子因丈夫翻垃圾大吵一架](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E4%B8%88%E5%A4%AB%E7%BF%BB%E5%9E%83%E5%9C%BE%E5%A4%A7%E5%90%B5%E4%B8%80%E6%9E%B6%23) `79.6K 🔥` `NEW`
1. [2026全国游泳锦标赛25米](https://s.weibo.com/weibo?q=%232026%E5%85%A8%E5%9B%BD%E6%B8%B8%E6%B3%B3%E9%94%A6%E6%A0%87%E8%B5%9B25%E7%B1%B3%23) `71.6K 🔥` `NEW`
1. [沈阳一商场保洁大叔凭高颜值出圈](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E4%B8%80%E5%95%86%E5%9C%BA%E4%BF%9D%E6%B4%81%E5%A4%A7%E5%8F%94%E5%87%AD%E9%AB%98%E9%A2%9C%E5%80%BC%E5%87%BA%E5%9C%88%23) `71.0K 🔥` `NEW`
1. [AL对战TES](https://s.weibo.com/weibo?q=%23AL%E5%AF%B9%E6%88%98TES%23) `70.8K 🔥` `NEW`
1. [镜头转到李昀锐真的好清秀帅气啊](https://s.weibo.com/weibo?q=%23%E9%95%9C%E5%A4%B4%E8%BD%AC%E5%88%B0%E6%9D%8E%E6%98%80%E9%94%90%E7%9C%9F%E7%9A%84%E5%A5%BD%E6%B8%85%E7%A7%80%E5%B8%85%E6%B0%94%E5%95%8A%23) `70.5K 🔥` `NEW`
1. [国考83个职位无人报](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%80%8383%E4%B8%AA%E8%81%8C%E4%BD%8D%E6%97%A0%E4%BA%BA%E6%8A%A5%23) `70.3K 🔥` `NEW`
1. [米勒回应TES瑞士轮首胜](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%8B%92%E5%9B%9E%E5%BA%94TES%E7%91%9E%E5%A3%AB%E8%BD%AE%E9%A6%96%E8%83%9C%23) `70.1K 🔥` `NEW`
1. [毛林林在直播中说田曦薇七十多斤](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%9E%97%E6%9E%97%E5%9C%A8%E7%9B%B4%E6%92%AD%E4%B8%AD%E8%AF%B4%E7%94%B0%E6%9B%A6%E8%96%87%E4%B8%83%E5%8D%81%E5%A4%9A%E6%96%A4%23) `69.3K 🔥` `NEW`
1. [点进李昀锐直播间都懵了](https://s.weibo.com/weibo?q=%23%E7%82%B9%E8%BF%9B%E6%9D%8E%E6%98%80%E9%94%90%E7%9B%B4%E6%92%AD%E9%97%B4%E9%83%BD%E6%87%B5%E4%BA%86%23) `62.1K 🔥` `NEW`
1. [反复跟咪咪说我们要走了](https://s.weibo.com/weibo?q=%23%E5%8F%8D%E5%A4%8D%E8%B7%9F%E5%92%AA%E5%92%AA%E8%AF%B4%E6%88%91%E4%BB%AC%E8%A6%81%E8%B5%B0%E4%BA%86%23) `59.3K 🔥` `NEW`
1. [al再败就止步16强](https://s.weibo.com/weibo?q=%23al%E5%86%8D%E8%B4%A5%E5%B0%B1%E6%AD%A2%E6%AD%A516%E5%BC%BA%23) `49.1K 🔥` `NEW`
1. [张雪峰妈妈听受助学子怀念儿子哭了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%A6%88%E5%A6%88%E5%90%AC%E5%8F%97%E5%8A%A9%E5%AD%A6%E5%AD%90%E6%80%80%E5%BF%B5%E5%84%BF%E5%AD%90%E5%93%AD%E4%BA%86%23) `47.8K 🔥` `NEW`
1. [女生不要谈太久的恋爱](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E4%B8%8D%E8%A6%81%E8%B0%88%E5%A4%AA%E4%B9%85%E7%9A%84%E6%81%8B%E7%88%B1%23) `303.9K 🔥` `-74%`
1. [小说里为什么没有广东霸总](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%AF%B4%E9%87%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B2%A1%E6%9C%89%E5%B9%BF%E4%B8%9C%E9%9C%B8%E6%80%BB%23) `121.9K 🔥` `-80%`
1. [以信心汇聚力量以合作破解难题](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%BF%A1%E5%BF%83%E6%B1%87%E8%81%9A%E5%8A%9B%E9%87%8F%E4%BB%A5%E5%90%88%E4%BD%9C%E7%A0%B4%E8%A7%A3%E9%9A%BE%E9%A2%98%23) `114.0K 🔥` `-77%`
1. [许飞厉娜 再见爱人](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%8E%89%E5%A8%9C%20%E5%86%8D%E8%A7%81%E7%88%B1%E4%BA%BA%23) `109.2K 🔥` `-30%`
1. [毛不易婚礼发言引网友争议](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E5%8F%91%E8%A8%80%E5%BC%95%E7%BD%91%E5%8F%8B%E4%BA%89%E8%AE%AE%23) `108.4K 🔥` `-39%`
1. [没想到何超莲是真的在打电话](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%83%B3%E5%88%B0%E4%BD%95%E8%B6%85%E8%8E%B2%E6%98%AF%E7%9C%9F%E7%9A%84%E5%9C%A8%E6%89%93%E7%94%B5%E8%AF%9D%23) `108.3K 🔥` `-35%`
1. [内娱这种瘦成骷髅的风气可以停止了吗](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E8%BF%99%E7%A7%8D%E7%98%A6%E6%88%90%E9%AA%B7%E9%AB%85%E7%9A%84%E9%A3%8E%E6%B0%94%E5%8F%AF%E4%BB%A5%E5%81%9C%E6%AD%A2%E4%BA%86%E5%90%97%23) `104.5K 🔥` `-39%`
1. [曝刘学义张予曦差点结婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E5%AD%A6%E4%B9%89%E5%BC%A0%E4%BA%88%E6%9B%A6%E5%B7%AE%E7%82%B9%E7%BB%93%E5%A9%9A%23) `92.8K 🔥` `-48%`
1. [迪丽热巴蝴蝶飞走是巧合](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%9D%B4%E8%9D%B6%E9%A3%9E%E8%B5%B0%E6%98%AF%E5%B7%A7%E5%90%88%23) `91.4K 🔥` `-48%`
1. [新郎新娘回应毛不易婚礼发言](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%83%8E%E6%96%B0%E5%A8%98%E5%9B%9E%E5%BA%94%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E5%8F%91%E8%A8%80%23) `91.0K 🔥` `-48%`
1. [虞书欣侯明昊行程](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BE%AF%E6%98%8E%E6%98%8A%E8%A1%8C%E7%A8%8B%23) `89.6K 🔥` `-49%`
1. [丁程鑫 听马哥怎么说](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%20%E5%90%AC%E9%A9%AC%E5%93%A5%E6%80%8E%E4%B9%88%E8%AF%B4%23) `89.0K 🔥` `-47%`
1. [鸡蛋别放冰箱门格子里](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E8%9B%8B%E5%88%AB%E6%94%BE%E5%86%B0%E7%AE%B1%E9%97%A8%E6%A0%BC%E5%AD%90%E9%87%8C%23) `87.6K 🔥` `-49%`
1. [徐嘉余50米仰泳破世界纪录](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%98%89%E4%BD%9950%E7%B1%B3%E4%BB%B0%E6%B3%B3%E7%A0%B4%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `87.1K 🔥` `-58%`
1. [乒乓球亚锦赛男单四强](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E4%BA%9A%E9%94%A6%E8%B5%9B%E7%94%B7%E5%8D%95%E5%9B%9B%E5%BC%BA%23) `86.4K 🔥` `-58%`
1. [国考报名人数突破330万](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%80%83%E6%8A%A5%E5%90%8D%E4%BA%BA%E6%95%B0%E7%AA%81%E7%A0%B4330%E4%B8%87%23) `84.4K 🔥` `-53%`
1. [曝刘学义张予曦曾在一起三年多](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E5%AD%A6%E4%B9%89%E5%BC%A0%E4%BA%88%E6%9B%A6%E6%9B%BE%E5%9C%A8%E4%B8%80%E8%B5%B7%E4%B8%89%E5%B9%B4%E5%A4%9A%23) `83.3K 🔥` `-52%`
1. [iPhoneDuo破发](https://s.weibo.com/weibo?q=%23iPhoneDuo%E7%A0%B4%E5%8F%91%23) `83.0K 🔥` `-53%`
1. [功夫女足烂番茄0分开局](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%83%82%E7%95%AA%E8%8C%840%E5%88%86%E5%BC%80%E5%B1%80%23) `81.3K 🔥` `-52%`
1. [王俊凯 甲乙丙丁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E7%94%B2%E4%B9%99%E4%B8%99%E4%B8%81%23) `80.3K 🔥` `-59%`
1. [胡歌直播刘涛惊喜出镜](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E7%9B%B4%E6%92%AD%E5%88%98%E6%B6%9B%E6%83%8A%E5%96%9C%E5%87%BA%E9%95%9C%23) `78.8K 🔥` `-78%`
1. [婚姻是强者的游戏不是弱者的避风港](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A7%BB%E6%98%AF%E5%BC%BA%E8%80%85%E7%9A%84%E6%B8%B8%E6%88%8F%E4%B8%8D%E6%98%AF%E5%BC%B1%E8%80%85%E7%9A%84%E9%81%BF%E9%A3%8E%E6%B8%AF%23) `71.6K 🔥` `-41%`
1. [38岁产妇催产时突发羊水栓塞至今未醒](https://s.weibo.com/weibo?q=%2338%E5%B2%81%E4%BA%A7%E5%A6%87%E5%82%AC%E4%BA%A7%E6%97%B6%E7%AA%81%E5%8F%91%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%E8%87%B3%E4%BB%8A%E6%9C%AA%E9%86%92%23) `71.3K 🔥` `-59%`
1. [女子怀孕前骨瘦如柴](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E5%89%8D%E9%AA%A8%E7%98%A6%E5%A6%82%E6%9F%B4%23) `66.6K 🔥` `-28%`
1. [前空姐回应空姐月薪四五万传闻](https://s.weibo.com/weibo?q=%23%E5%89%8D%E7%A9%BA%E5%A7%90%E5%9B%9E%E5%BA%94%E7%A9%BA%E5%A7%90%E6%9C%88%E8%96%AA%E5%9B%9B%E4%BA%94%E4%B8%87%E4%BC%A0%E9%97%BB%23) `56.6K 🔥` `-65%`
1. [曝手机平板产品线将停更](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%89%8B%E6%9C%BA%E5%B9%B3%E6%9D%BF%E4%BA%A7%E5%93%81%E7%BA%BF%E5%B0%86%E5%81%9C%E6%9B%B4%23) `56.4K 🔥` `-67%`
1. [黄多多14岁就开始健身了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A14%E5%B2%81%E5%B0%B1%E5%BC%80%E5%A7%8B%E5%81%A5%E8%BA%AB%E4%BA%86%23) `56.1K 🔥` `-54%`
1. [尚公主编剧水平](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E7%BC%96%E5%89%A7%E6%B0%B4%E5%B9%B3%23) `54.9K 🔥` `-78%`
1. [杨超越的情商](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E7%9A%84%E6%83%85%E5%95%86%23) `52.0K 🔥` `-54%`
1. [小城良方 辽宁养蚂蚁骗局](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%20%E8%BE%BD%E5%AE%81%E5%85%BB%E8%9A%82%E8%9A%81%E9%AA%97%E5%B1%80%23) `51.8K 🔥` `-71%`
1. [金智媛居然跳了说出你的愿望](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E5%AA%9B%E5%B1%85%E7%84%B6%E8%B7%B3%E4%BA%86%E8%AF%B4%E5%87%BA%E4%BD%A0%E7%9A%84%E6%84%BF%E6%9C%9B%23) `51.6K 🔥` `-58%`
1. [尚公主被指人抬剧](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E8%A2%AB%E6%8C%87%E4%BA%BA%E6%8A%AC%E5%89%A7%23) `48.8K 🔥` `-60%`
1. [功夫小猫爆红全网](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%B0%8F%E7%8C%AB%E7%88%86%E7%BA%A2%E5%85%A8%E7%BD%91%23) `48.4K 🔥` `-52%`
1. [突然get到了杨超越毫不费力的绝美](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6get%E5%88%B0%E4%BA%86%E6%9D%A8%E8%B6%85%E8%B6%8A%E6%AF%AB%E4%B8%8D%E8%B4%B9%E5%8A%9B%E7%9A%84%E7%BB%9D%E7%BE%8E%23) `48.1K 🔥` `-61%`

Updated at 2026-10-25 03:03:08

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
