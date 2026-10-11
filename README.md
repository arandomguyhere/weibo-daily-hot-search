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

1. [京东11.11月黑风高1元拿手机](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C11.11%E6%9C%88%E9%BB%91%E9%A3%8E%E9%AB%981%E5%85%83%E6%8B%BF%E6%89%8B%E6%9C%BA%23) `134.3K 🔥` `NEW`
1. [郑钦文晒图庆祝夺冠](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%99%92%E5%9B%BE%E5%BA%86%E7%A5%9D%E5%A4%BA%E5%86%A0%23) `128.9K 🔥` `NEW`
1. [李现在希尔顿住出别样新意](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%9C%A8%E5%B8%8C%E5%B0%94%E9%A1%BF%E4%BD%8F%E5%87%BA%E5%88%AB%E6%A0%B7%E6%96%B0%E6%84%8F%23) `84.9K 🔥` `NEW`
1. [利物浦0比3曼城](https://s.weibo.com/weibo?q=%23%E5%88%A9%E7%89%A9%E6%B5%A60%E6%AF%943%E6%9B%BC%E5%9F%8E%23) `47.5K 🔥` `NEW`
1. [中网终于迎来属于中国自己的女单冠军](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BD%91%E7%BB%88%E4%BA%8E%E8%BF%8E%E6%9D%A5%E5%B1%9E%E4%BA%8E%E4%B8%AD%E5%9B%BD%E8%87%AA%E5%B7%B1%E7%9A%84%E5%A5%B3%E5%8D%95%E5%86%A0%E5%86%9B%23) `45.3K 🔥` `NEW`
1. [郑钦文奖杯的重量是梦想的重量](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%A5%96%E6%9D%AF%E7%9A%84%E9%87%8D%E9%87%8F%E6%98%AF%E6%A2%A6%E6%83%B3%E7%9A%84%E9%87%8D%E9%87%8F%23) `42.3K 🔥` `NEW`
1. [龚俊F1采访](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8AF1%E9%87%87%E8%AE%BF%23) `39.9K 🔥` `NEW`
1. [女孩去马来西亚高薪工作后失联](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%8E%BB%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E9%AB%98%E8%96%AA%E5%B7%A5%E4%BD%9C%E5%90%8E%E5%A4%B1%E8%81%94%23) `37.5K 🔥` `NEW`
1. [恋爱要找大方的男朋友](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%88%B1%E8%A6%81%E6%89%BE%E5%A4%A7%E6%96%B9%E7%9A%84%E7%94%B7%E6%9C%8B%E5%8F%8B%23) `34.4K 🔥` `NEW`
1. [婚姻不是年龄到了就该结](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A7%BB%E4%B8%8D%E6%98%AF%E5%B9%B4%E9%BE%84%E5%88%B0%E4%BA%86%E5%B0%B1%E8%AF%A5%E7%BB%93%23) `34.2K 🔥` `NEW`
1. [AG战胜TES](https://s.weibo.com/weibo?q=%23AG%E6%88%98%E8%83%9CTES%23) `34.1K 🔥` `NEW`
1. [iPhone18Pro卖不动了](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `31.6K 🔥` `NEW`
1. [谁能扛得住檀健次的舞台](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%83%BD%E6%89%9B%E5%BE%97%E4%BD%8F%E6%AA%80%E5%81%A5%E6%AC%A1%E7%9A%84%E8%88%9E%E5%8F%B0%23) `31.5K 🔥` `NEW`
1. [沐言爸爸就是命最好的人](https://s.weibo.com/weibo?q=%23%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%E5%B0%B1%E6%98%AF%E5%91%BD%E6%9C%80%E5%A5%BD%E7%9A%84%E4%BA%BA%23) `30.5K 🔥` `NEW`
1. [2026中网](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E7%BD%91%23) `30.3K 🔥` `NEW`
1. [梦的光点](https://s.weibo.com/weibo?q=%23%E6%A2%A6%E7%9A%84%E5%85%89%E7%82%B9%23) `29.2K 🔥` `NEW`
1. [成熟后才知道品味毫无意义](https://s.weibo.com/weibo?q=%23%E6%88%90%E7%86%9F%E5%90%8E%E6%89%8D%E7%9F%A5%E9%81%93%E5%93%81%E5%91%B3%E6%AF%AB%E6%97%A0%E6%84%8F%E4%B9%89%23) `28.6K 🔥` `NEW`
1. [张盛解说漏掉李娜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9B%9B%E8%A7%A3%E8%AF%B4%E6%BC%8F%E6%8E%89%E6%9D%8E%E5%A8%9C%23) `27.3K 🔥` `NEW`
1. [金智媛口碑](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E5%AA%9B%E5%8F%A3%E7%A2%91%23) `27.0K 🔥` `NEW`
1. [宋雨琦关晓彤是从跑男认识的](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E5%85%B3%E6%99%93%E5%BD%A4%E6%98%AF%E4%BB%8E%E8%B7%91%E7%94%B7%E8%AE%A4%E8%AF%86%E7%9A%84%23) `26.9K 🔥` `NEW`
1. [记者暗访有偿陪伴服务](https://s.weibo.com/weibo?q=%23%E8%AE%B0%E8%80%85%E6%9A%97%E8%AE%BF%E6%9C%89%E5%81%BF%E9%99%AA%E4%BC%B4%E6%9C%8D%E5%8A%A1%23) `177.4K 🔥` `+76%`
1. [霸王茶姬买一送一](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E4%B9%B0%E4%B8%80%E9%80%81%E4%B8%80%23) `240.2K 🔥` `-76%`
1. [本周这些数据值得关注](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E8%BF%99%E4%BA%9B%E6%95%B0%E6%8D%AE%E5%80%BC%E5%BE%97%E5%85%B3%E6%B3%A8%23) `141.4K 🔥` `-50%`
1. [李娜 郑钦文](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%A8%9C%20%E9%83%91%E9%92%A6%E6%96%87%23) `90.4K 🔥` `-68%`
1. [身高2.2米巨人网红小玥去世](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E9%AB%982.2%E7%B1%B3%E5%B7%A8%E4%BA%BA%E7%BD%91%E7%BA%A2%E5%B0%8F%E7%8E%A5%E5%8E%BB%E4%B8%96%23) `88.6K 🔥` `-62%`
1. [关晓彤回应去宋雨琦演唱会](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%9B%9E%E5%BA%94%E5%8E%BB%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `65.6K 🔥` `-50%`
1. [郑钦文就差一个大满贯冠军了](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%B0%B1%E5%B7%AE%E4%B8%80%E4%B8%AA%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%86%A0%E5%86%9B%E4%BA%86%23) `64.5K 🔥` `-78%`
1. [央视曝投资1.2亿项目仅建5个棚](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E6%8A%95%E8%B5%841.2%E4%BA%BF%E9%A1%B9%E7%9B%AE%E4%BB%85%E5%BB%BA5%E4%B8%AA%E6%A3%9A%23) `60.8K 🔥` `-52%`
1. [老护士辞职后儿科投诉翻倍](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%8A%A4%E5%A3%AB%E8%BE%9E%E8%81%8C%E5%90%8E%E5%84%BF%E7%A7%91%E6%8A%95%E8%AF%89%E7%BF%BB%E5%80%8D%23) `59.9K 🔥` `-33%`
1. [社保](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%23) `59.9K 🔥` `-55%`
1. [郑钦文收获明年澳网的种子席位](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%94%B6%E8%8E%B7%E6%98%8E%E5%B9%B4%E6%BE%B3%E7%BD%91%E7%9A%84%E7%A7%8D%E5%AD%90%E5%B8%AD%E4%BD%8D%23) `59.9K 🔥` `-78%`
1. [网传缅北诈骗盯上泰百粉丝](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%BC%85%E5%8C%97%E8%AF%88%E9%AA%97%E7%9B%AF%E4%B8%8A%E6%B3%B0%E7%99%BE%E7%B2%89%E4%B8%9D%23) `59.9K 🔥` `-47%`
1. [中国女性传统坐姿松弛张扬](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%80%A7%E4%BC%A0%E7%BB%9F%E5%9D%90%E5%A7%BF%E6%9D%BE%E5%BC%9B%E5%BC%A0%E6%89%AC%23) `51.5K 🔥` `-62%`
1. [郑钦文中网夺冠捧杯时刻](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%B8%AD%E7%BD%91%E5%A4%BA%E5%86%A0%E6%8D%A7%E6%9D%AF%E6%97%B6%E5%88%BB%23) `47.5K 🔥` `-38%`
1. [中网奖金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BD%91%E5%A5%96%E9%87%91%23) `47.4K 🔥` `-61%`
1. [郑钦文爸爸妈妈现场见证女儿夺冠](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%88%B8%E7%88%B8%E5%A6%88%E5%A6%88%E7%8E%B0%E5%9C%BA%E8%A7%81%E8%AF%81%E5%A5%B3%E5%84%BF%E5%A4%BA%E5%86%A0%23) `46.2K 🔥` `-39%`
1. [李九 AG](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B9%9D%20AG%23) `44.4K 🔥` `-65%`
1. [被骗缅北女孩遭遇惨不忍睹](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%AA%97%E7%BC%85%E5%8C%97%E5%A5%B3%E5%AD%A9%E9%81%AD%E9%81%87%E6%83%A8%E4%B8%8D%E5%BF%8D%E7%9D%B9%23) `43.5K 🔥` `-58%`
1. [身上出现这样的红点要警惕](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%B8%8A%E5%87%BA%E7%8E%B0%E8%BF%99%E6%A0%B7%E7%9A%84%E7%BA%A2%E7%82%B9%E8%A6%81%E8%AD%A6%E6%83%95%23) `43.2K 🔥` `-58%`
1. [郑钦文代言](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%BB%A3%E8%A8%80%23) `41.3K 🔥` `-62%`
1. [梅尼耶妻子手臂瘦得吓人](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%B0%BC%E8%80%B6%E5%A6%BB%E5%AD%90%E6%89%8B%E8%87%82%E7%98%A6%E5%BE%97%E5%90%93%E4%BA%BA%23) `38.4K 🔥` `-37%`
1. [郑钦文中网女单夺冠](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%B8%AD%E7%BD%91%E5%A5%B3%E5%8D%95%E5%A4%BA%E5%86%A0%23) `37.9K 🔥` `-61%`
1. [李思潼妆前妆后变化好大](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%80%9D%E6%BD%BC%E5%A6%86%E5%89%8D%E5%A6%86%E5%90%8E%E5%8F%98%E5%8C%96%E5%A5%BD%E5%A4%A7%23) `35.8K 🔥` `-79%`
1. [刘学义林锦岐告别兰香](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E6%9E%97%E9%94%A6%E5%B2%90%E5%91%8A%E5%88%AB%E5%85%B0%E9%A6%99%23) `34.6K 🔥` `-54%`
1. [印度男同事女友是六边形战士](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%90%8C%E4%BA%8B%E5%A5%B3%E5%8F%8B%E6%98%AF%E5%85%AD%E8%BE%B9%E5%BD%A2%E6%88%98%E5%A3%AB%23) `34.4K 🔥` `-61%`
1. [松岛辉空启蒙教练是中国顶级球员](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E5%90%AF%E8%92%99%E6%95%99%E7%BB%83%E6%98%AF%E4%B8%AD%E5%9B%BD%E9%A1%B6%E7%BA%A7%E7%90%83%E5%91%98%23) `32.0K 🔥` `-50%`
1. [中国人时隔14年再夺1000赛冠军](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%97%B6%E9%9A%9414%E5%B9%B4%E5%86%8D%E5%A4%BA1000%E8%B5%9B%E5%86%A0%E5%86%9B%23) `30.7K 🔥` `-76%`
1. [周鸿祎攀岩从3米高处摔下](https://s.weibo.com/weibo?q=%23%E5%91%A8%E9%B8%BF%E7%A5%8E%E6%94%80%E5%B2%A9%E4%BB%8E3%E7%B1%B3%E9%AB%98%E5%A4%84%E6%91%94%E4%B8%8B%23) `29.3K 🔥` `-58%`
1. [2.2米去世女网红小玥曾被查出脑瘤](https://s.weibo.com/weibo?q=%232.2%E7%B1%B3%E5%8E%BB%E4%B8%96%E5%A5%B3%E7%BD%91%E7%BA%A2%E5%B0%8F%E7%8E%A5%E6%9B%BE%E8%A2%AB%E6%9F%A5%E5%87%BA%E8%84%91%E7%98%A4%23) `27.0K 🔥` `-61%`
1. [李九说AG轮换是填错名单](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B9%9D%E8%AF%B4AG%E8%BD%AE%E6%8D%A2%E6%98%AF%E5%A1%AB%E9%94%99%E5%90%8D%E5%8D%95%23) `26.9K 🔥` `-68%`
1. [姐姐给老弟煮六包线面在外网火了](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E7%BB%99%E8%80%81%E5%BC%9F%E7%85%AE%E5%85%AD%E5%8C%85%E7%BA%BF%E9%9D%A2%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86%23) `26.9K 🔥` `-72%`
1. [安德列娃说知道自己叫小米辣](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%B7%E5%88%97%E5%A8%83%E8%AF%B4%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E5%8F%AB%E5%B0%8F%E7%B1%B3%E8%BE%A3%23) `26.9K 🔥` `-70%`

Updated at 2026-10-12 05:50:53

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
