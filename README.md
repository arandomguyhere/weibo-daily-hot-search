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

1. [爱马仕称中国市场目前很困难](https://s.weibo.com/weibo?q=%23%E7%88%B1%E9%A9%AC%E4%BB%95%E7%A7%B0%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%E7%9B%AE%E5%89%8D%E5%BE%88%E5%9B%B0%E9%9A%BE%23) `495.4K 🔥` `NEW`
1. [DK世界赛翻盘T1](https://s.weibo.com/weibo?q=%23DK%E4%B8%96%E7%95%8C%E8%B5%9B%E7%BF%BB%E7%9B%98T1%23) `409.5K 🔥` `NEW`
1. [厉娜 许飞](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%20%E8%AE%B8%E9%A3%9E%23) `395.3K 🔥` `NEW`
1. [东部战区发布台湾光复纪念日海报](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E5%8F%91%E5%B8%83%E5%8F%B0%E6%B9%BE%E5%85%89%E5%A4%8D%E7%BA%AA%E5%BF%B5%E6%97%A5%E6%B5%B7%E6%8A%A5%23) `298.5K 🔥` `NEW`
1. [BLG对战TL](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98TL%23) `278.0K 🔥` `NEW`
1. [嫁金钗 魏家家风](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%20%E9%AD%8F%E5%AE%B6%E5%AE%B6%E9%A3%8E%23) `277.6K 🔥` `NEW`
1. [这是中国台湾省](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E4%B8%AD%E5%9B%BD%E5%8F%B0%E6%B9%BE%E7%9C%81%23) `275.3K 🔥` `NEW`
1. [宋慧乔从出现开始就美得在发光](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%85%A7%E4%B9%94%E4%BB%8E%E5%87%BA%E7%8E%B0%E5%BC%80%E5%A7%8B%E5%B0%B1%E7%BE%8E%E5%BE%97%E5%9C%A8%E5%8F%91%E5%85%89%23) `274.3K 🔥` `NEW`
1. [李雪健已无法说话](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E5%81%A5%E5%B7%B2%E6%97%A0%E6%B3%95%E8%AF%B4%E8%AF%9D%23) `273.9K 🔥` `NEW`
1. [微信被指在苹果折叠屏上公摊面积过大](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%A2%AB%E6%8C%87%E5%9C%A8%E8%8B%B9%E6%9E%9C%E6%8A%98%E5%8F%A0%E5%B1%8F%E4%B8%8A%E5%85%AC%E6%91%8A%E9%9D%A2%E7%A7%AF%E8%BF%87%E5%A4%A7%23) `272.6K 🔥` `NEW`
1. [小酒窝捐的旧衣服都是新的](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E6%8D%90%E7%9A%84%E6%97%A7%E8%A1%A3%E6%9C%8D%E9%83%BD%E6%98%AF%E6%96%B0%E7%9A%84%23) `271.4K 🔥` `NEW`
1. [不能让车企随便整活儿了](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%83%BD%E8%AE%A9%E8%BD%A6%E4%BC%81%E9%9A%8F%E4%BE%BF%E6%95%B4%E6%B4%BB%E5%84%BF%E4%BA%86%23) `206.8K 🔥` `NEW`
1. [老师你玩不起就别玩](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B8%88%E4%BD%A0%E7%8E%A9%E4%B8%8D%E8%B5%B7%E5%B0%B1%E5%88%AB%E7%8E%A9%23) `205.4K 🔥` `NEW`
1. [sakee 郭德纲](https://s.weibo.com/weibo?q=%23sakee%20%E9%83%AD%E5%BE%B7%E7%BA%B2%23) `200.5K 🔥` `NEW`
1. [BLG战胜TL](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CTL%23) `143.7K 🔥` `NEW`
1. [易梦玲回应瘦得夸张](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%A2%A6%E7%8E%B2%E5%9B%9E%E5%BA%94%E7%98%A6%E5%BE%97%E5%A4%B8%E5%BC%A0%23) `142.2K 🔥` `NEW`
1. [发现AI已经到了前所未有的高度](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0AI%E5%B7%B2%E7%BB%8F%E5%88%B0%E4%BA%86%E5%89%8D%E6%89%80%E6%9C%AA%E6%9C%89%E7%9A%84%E9%AB%98%E5%BA%A6%23) `137.9K 🔥` `NEW`
1. [热火vs黄蜂](https://s.weibo.com/weibo?q=%23%E7%83%AD%E7%81%ABvs%E9%BB%84%E8%9C%82%23) `136.3K 🔥` `NEW`
1. [李昀锐说站在孟子义身边的只会是我](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%AF%B4%E7%AB%99%E5%9C%A8%E5%AD%9F%E5%AD%90%E4%B9%89%E8%BA%AB%E8%BE%B9%E7%9A%84%E5%8F%AA%E4%BC%9A%E6%98%AF%E6%88%91%23) `136.1K 🔥` `NEW`
1. [别和高中生闹脾气](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%92%8C%E9%AB%98%E4%B8%AD%E7%94%9F%E9%97%B9%E8%84%BE%E6%B0%94%23) `133.9K 🔥` `NEW`
1. [鸡蛋别放冰箱门格子里](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E8%9B%8B%E5%88%AB%E6%94%BE%E5%86%B0%E7%AE%B1%E9%97%A8%E6%A0%BC%E5%AD%90%E9%87%8C%23) `1.1M 🔥` `+442%`
1. [女生拒绝表白后照片被发在色情软件](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%8B%92%E7%BB%9D%E8%A1%A8%E7%99%BD%E5%90%8E%E7%85%A7%E7%89%87%E8%A2%AB%E5%8F%91%E5%9C%A8%E8%89%B2%E6%83%85%E8%BD%AF%E4%BB%B6%23) `833.4K 🔥` `+702%`
1. [HLE GEN](https://s.weibo.com/weibo?q=%23HLE%20GEN%23) `278.1K 🔥` `+40%`
1. [儿媳愿出钱但不与婆婆同住](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AA%B3%E6%84%BF%E5%87%BA%E9%92%B1%E4%BD%86%E4%B8%8D%E4%B8%8E%E5%A9%86%E5%A9%86%E5%90%8C%E4%BD%8F%23) `277.1K 🔥` `+123%`
1. [毛不易婚礼发言引网友争议](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E5%8F%91%E8%A8%80%E5%BC%95%E7%BD%91%E5%8F%8B%E4%BA%89%E8%AE%AE%23) `276.3K 🔥` `+127%`
1. [祖海态度](https://s.weibo.com/weibo?q=%23%E7%A5%96%E6%B5%B7%E6%80%81%E5%BA%A6%23) `275.9K 🔥` `+154%`
1. [被状告后高铁宁波站撤掉禁烟标志](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%8A%B6%E5%91%8A%E5%90%8E%E9%AB%98%E9%93%81%E5%AE%81%E6%B3%A2%E7%AB%99%E6%92%A4%E6%8E%89%E7%A6%81%E7%83%9F%E6%A0%87%E5%BF%97%23) `275.0K 🔥` `+130%`
1. [曝刘学义张予曦曾在一起三年多](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E5%AD%A6%E4%B9%89%E5%BC%A0%E4%BA%88%E6%9B%A6%E6%9B%BE%E5%9C%A8%E4%B8%80%E8%B5%B7%E4%B8%89%E5%B9%B4%E5%A4%9A%23) `273.3K 🔥` `+163%`
1. [新郎新娘回应毛不易婚礼发言](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%83%8E%E6%96%B0%E5%A8%98%E5%9B%9E%E5%BA%94%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E5%8F%91%E8%A8%80%23) `273.1K 🔥` `+163%`
1. [迪丽热巴蝴蝶飞走是巧合](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%9D%B4%E8%9D%B6%E9%A3%9E%E8%B5%B0%E6%98%AF%E5%B7%A7%E5%90%88%23) `271.5K 🔥` `+135%`
1. [国考83个职位无人报](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%80%8383%E4%B8%AA%E8%81%8C%E4%BD%8D%E6%97%A0%E4%BA%BA%E6%8A%A5%23) `267.4K 🔥` `+269%`
1. [iPhoneDuo破发](https://s.weibo.com/weibo?q=%23iPhoneDuo%E7%A0%B4%E5%8F%91%23) `228.7K 🔥` `+120%`
1. [没想到何超莲是真的在打电话](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%83%B3%E5%88%B0%E4%BD%95%E8%B6%85%E8%8E%B2%E6%98%AF%E7%9C%9F%E7%9A%84%E5%9C%A8%E6%89%93%E7%94%B5%E8%AF%9D%23) `220.4K 🔥` `+112%`
1. [女子怀孕前骨瘦如柴](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E5%89%8D%E9%AA%A8%E7%98%A6%E5%A6%82%E6%9F%B4%23) `217.5K 🔥` `+109%`
1. [曝刘学义张予曦差点结婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E5%AD%A6%E4%B9%89%E5%BC%A0%E4%BA%88%E6%9B%A6%E5%B7%AE%E7%82%B9%E7%BB%93%E5%A9%9A%23) `199.2K 🔥` `+86%`
1. [真的建议大家要注意用脑卫生](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%A6%81%E6%B3%A8%E6%84%8F%E7%94%A8%E8%84%91%E5%8D%AB%E7%94%9F%23) `179.1K 🔥` `+72%`
1. [镜头转到李昀锐真的好清秀帅气啊](https://s.weibo.com/weibo?q=%23%E9%95%9C%E5%A4%B4%E8%BD%AC%E5%88%B0%E6%9D%8E%E6%98%80%E9%94%90%E7%9C%9F%E7%9A%84%E5%A5%BD%E6%B8%85%E7%A7%80%E5%B8%85%E6%B0%94%E5%95%8A%23) `157.4K 🔥` `+51%`
1. [继承父母小生意少受委屈](https://s.weibo.com/weibo?q=%23%E7%BB%A7%E6%89%BF%E7%88%B6%E6%AF%8D%E5%B0%8F%E7%94%9F%E6%84%8F%E5%B0%91%E5%8F%97%E5%A7%94%E5%B1%88%23) `135.3K 🔥` `+127%`
1. [沈阳一商场保洁大叔凭高颜值出圈](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E4%B8%80%E5%95%86%E5%9C%BA%E4%BF%9D%E6%B4%81%E5%A4%A7%E5%8F%94%E5%87%AD%E9%AB%98%E9%A2%9C%E5%80%BC%E5%87%BA%E5%9C%88%23) `134.1K 🔥` `+29%`
1. [前空姐回应空姐月薪四五万传闻](https://s.weibo.com/weibo?q=%23%E5%89%8D%E7%A9%BA%E5%A7%90%E5%9B%9E%E5%BA%94%E7%A9%BA%E5%A7%90%E6%9C%88%E8%96%AA%E5%9B%9B%E4%BA%94%E4%B8%87%E4%BC%A0%E9%97%BB%23) `124.2K 🔥` `+53%`
1. [渝昆高铁全线铺轨完成](https://s.weibo.com/weibo?q=%23%E6%B8%9D%E6%98%86%E9%AB%98%E9%93%81%E5%85%A8%E7%BA%BF%E9%93%BA%E8%BD%A8%E5%AE%8C%E6%88%90%23) `617.0K 🔥`
1. [小城良方 辽宁养蚂蚁骗局](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%20%E8%BE%BD%E5%AE%81%E5%85%BB%E8%9A%82%E8%9A%81%E9%AA%97%E5%B1%80%23) `154.8K 🔥`
1. [英雄联盟](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%23) `135.1K 🔥`
1. [al](https://s.weibo.com/weibo?q=%23al%23) `114.8K 🔥`
1. [小说里为什么没有广东霸总](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%AF%B4%E9%87%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B2%A1%E6%9C%89%E5%B9%BF%E4%B8%9C%E9%9C%B8%E6%80%BB%23) `112.8K 🔥`
1. [女生不要谈太久的恋爱](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E4%B8%8D%E8%A6%81%E8%B0%88%E5%A4%AA%E4%B9%85%E7%9A%84%E6%81%8B%E7%88%B1%23) `272.2K 🔥` `-58%`
1. [iG战胜TSW](https://s.weibo.com/weibo?q=%23iG%E6%88%98%E8%83%9CTSW%23) `270.9K 🔥` `-69%`
1. [iG拿下LPL在S16外战首胜](https://s.weibo.com/weibo?q=%23iG%E6%8B%BF%E4%B8%8BLPL%E5%9C%A8S16%E5%A4%96%E6%88%98%E9%A6%96%E8%83%9C%23) `246.9K 🔥` `-25%`
1. [TES拿下LPL在S16首胜](https://s.weibo.com/weibo?q=%23TES%E6%8B%BF%E4%B8%8BLPL%E5%9C%A8S16%E9%A6%96%E8%83%9C%23) `126.7K 🔥` `-50%`

Updated at 2026-10-25 09:40:33

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
