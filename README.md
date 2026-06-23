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

1. [C罗梅开二度 (Cristiano Ronaldo scores twice)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `5.0M 🔥` `NEW`
1. [C罗进球](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%BF%9B%E7%90%83%23) `4.0M 🔥` `NEW`
1. [葡萄牙vs乌兹别克斯坦](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99vs%E4%B9%8C%E5%85%B9%E5%88%AB%E5%85%8B%E6%96%AF%E5%9D%A6%23) `488.6K 🔥` `NEW`
1. [C罗连续六届世界杯进球](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%BF%9E%E7%BB%AD%E5%85%AD%E5%B1%8A%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BF%9B%E7%90%83%23) `414.3K 🔥` `NEW`
1. [C罗siu起来了](https://s.weibo.com/weibo?q=%23C%E7%BD%97siu%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `402.9K 🔥` `NEW`
1. [C罗 不吃压力](https://s.weibo.com/weibo?q=%23C%E7%BD%97%20%E4%B8%8D%E5%90%83%E5%8E%8B%E5%8A%9B%23) `265.0K 🔥` `NEW`
1. [葡萄牙任意球破门](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E4%BB%BB%E6%84%8F%E7%90%83%E7%A0%B4%E9%97%A8%23) `184.5K 🔥` `NEW`
1. [贝克汉姆儿子靠与父母不和赚百万美金](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E5%84%BF%E5%AD%90%E9%9D%A0%E4%B8%8E%E7%88%B6%E6%AF%8D%E4%B8%8D%E5%92%8C%E8%B5%9A%E7%99%BE%E4%B8%87%E7%BE%8E%E9%87%91%23) `146.3K 🔥` `NEW`
1. [C罗 法拉利老了还是法拉利](https://s.weibo.com/weibo?q=%23C%E7%BD%97%20%E6%B3%95%E6%8B%89%E5%88%A9%E8%80%81%E4%BA%86%E8%BF%98%E6%98%AF%E6%B3%95%E6%8B%89%E5%88%A9%23) `117.4K 🔥` `NEW`
1. [突然意识到美术生好牛](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E7%BE%8E%E6%9C%AF%E7%94%9F%E5%A5%BD%E7%89%9B%23) `103.1K 🔥` `NEW`
1. [张海楼怎么可能杀张海侠 (How could Zhang Hailou kill Zhang Haixia?)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B5%B7%E6%A5%BC%E6%80%8E%E4%B9%88%E5%8F%AF%E8%83%BD%E6%9D%80%E5%BC%A0%E6%B5%B7%E4%BE%A0%23) `61.9K 🔥` `NEW`
1. [乌兹别克斯坦进球被吹](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%B9%E5%88%AB%E5%85%8B%E6%96%AF%E5%9D%A6%E8%BF%9B%E7%90%83%E8%A2%AB%E5%90%B9%23) `59.5K 🔥` `NEW`
1. [慈母多败咪](https://s.weibo.com/weibo?q=%23%E6%85%88%E6%AF%8D%E5%A4%9A%E8%B4%A5%E5%92%AA%23) `57.2K 🔥` `NEW`
1. [姆巴佩哈兰德将正面对决](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%93%88%E5%85%B0%E5%BE%B7%E5%B0%86%E6%AD%A3%E9%9D%A2%E5%AF%B9%E5%86%B3%23) `55.0K 🔥` `NEW`
1. [官方回应强制教师凌晨到校验菜](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E5%BC%BA%E5%88%B6%E6%95%99%E5%B8%88%E5%87%8C%E6%99%A8%E5%88%B0%E6%A0%A1%E9%AA%8C%E8%8F%9C%23) `55.0K 🔥` `NEW`
1. [南派三叔我恨你](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%B4%BE%E4%B8%89%E5%8F%94%E6%88%91%E6%81%A8%E4%BD%A0%23) `55.0K 🔥` `NEW`
1. [广德车祸男童母亲无截瘫症状](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%BE%B7%E8%BD%A6%E7%A5%B8%E7%94%B7%E7%AB%A5%E6%AF%8D%E4%BA%B2%E6%97%A0%E6%88%AA%E7%98%AB%E7%97%87%E7%8A%B6%23) `55.0K 🔥` `NEW`
1. [医生回应15岁男孩糖尿病不幸去世](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%9415%E5%B2%81%E7%94%B7%E5%AD%A9%E7%B3%96%E5%B0%BF%E7%97%85%E4%B8%8D%E5%B9%B8%E5%8E%BB%E4%B8%96%23) `55.0K 🔥` `NEW`
1. [丁禹兮演技](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%BC%94%E6%8A%80%23) `55.0K 🔥` `NEW`
1. [徐洁儿说双人秀是内投结果](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E8%AF%B4%E5%8F%8C%E4%BA%BA%E7%A7%80%E6%98%AF%E5%86%85%E6%8A%95%E7%BB%93%E6%9E%9C%23) `55.0K 🔥` `NEW`
1. [全链条扩大汽车消费再推新举措 (New measures to expand automobile consumption across the entire chain)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E9%93%BE%E6%9D%A1%E6%89%A9%E5%A4%A7%E6%B1%BD%E8%BD%A6%E6%B6%88%E8%B4%B9%E5%86%8D%E6%8E%A8%E6%96%B0%E4%B8%BE%E6%8E%AA%23) `1.1M 🔥` `+122%`
1. [你要知道我很少站老一辈这边的](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%A6%81%E7%9F%A5%E9%81%93%E6%88%91%E5%BE%88%E5%B0%91%E7%AB%99%E8%80%81%E4%B8%80%E8%BE%88%E8%BF%99%E8%BE%B9%E7%9A%84%23) `288.5K 🔥` `-44%`
1. [C罗首发](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E9%A6%96%E5%8F%91%23) `122.3K 🔥` `-61%`
1. [恋与深空的野心莫透支玩家信任](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E7%9A%84%E9%87%8E%E5%BF%83%E8%8E%AB%E9%80%8F%E6%94%AF%E7%8E%A9%E5%AE%B6%E4%BF%A1%E4%BB%BB%23) `98.8K 🔥` `-34%`
1. [广德车祸受伤3岁男童最新情况 (The latest situation of a 3-year-old boy injured in a car accident in Guangde)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%BE%B7%E8%BD%A6%E7%A5%B8%E5%8F%97%E4%BC%A43%E5%B2%81%E7%94%B7%E7%AB%A5%E6%9C%80%E6%96%B0%E6%83%85%E5%86%B5%23) `86.8K 🔥` `-52%`
1. [马宁第3次执法来了 (Ma Ning comes to enforce the law for the third time)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E7%AC%AC3%E6%AC%A1%E6%89%A7%E6%B3%95%E6%9D%A5%E4%BA%86%23) `85.2K 🔥` `-41%`
1. [葡萄牙首发 (Portugal starts)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E9%A6%96%E5%8F%91%23) `85.2K 🔥` `-90%`
1. [C罗再进两球将创葡足历史](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%86%8D%E8%BF%9B%E4%B8%A4%E7%90%83%E5%B0%86%E5%88%9B%E8%91%A1%E8%B6%B3%E5%8E%86%E5%8F%B2%23) `84.7K 🔥` `-62%`
1. [王俊凯首张专辑封面](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%A6%96%E5%BC%A0%E4%B8%93%E8%BE%91%E5%B0%81%E9%9D%A2%23) `78.2K 🔥` `-49%`
1. [檀健次直播迟到39分钟](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%9B%B4%E6%92%AD%E8%BF%9F%E5%88%B039%E5%88%86%E9%92%9F%23) `77.1K 🔥` `-71%`
1. [大疆Pocket4P开售秒没](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4P%E5%BC%80%E5%94%AE%E7%A7%92%E6%B2%A1%23) `73.5K 🔥` `-33%`
1. [南部档案 三个结局](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%20%E4%B8%89%E4%B8%AA%E7%BB%93%E5%B1%80%23) `73.2K 🔥` `-76%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `68.6K 🔥` `-62%`
1. [女装退货率终于有救了 (The return rate of women’s clothing has finally been saved)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E9%80%80%E8%B4%A7%E7%8E%87%E7%BB%88%E4%BA%8E%E6%9C%89%E6%95%91%E4%BA%86%23) `62.6K 🔥` `-88%`
1. [敖尹剧情伏笔](https://s.weibo.com/weibo?q=%23%E6%95%96%E5%B0%B9%E5%89%A7%E6%83%85%E4%BC%8F%E7%AC%94%23) `61.9K 🔥` `-38%`
1. [杨幂杨紫白玉兰提名VCR](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8DVCR%23) `58.0K 🔥` `-68%`
1. [广德致1死2伤司机或3年以下刑期](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%BE%B7%E8%87%B41%E6%AD%BB2%E4%BC%A4%E5%8F%B8%E6%9C%BA%E6%88%963%E5%B9%B4%E4%BB%A5%E4%B8%8B%E5%88%91%E6%9C%9F%23) `57.4K 🔥` `-52%`
1. [印度一天或热死3400人](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%80%E5%A4%A9%E6%88%96%E7%83%AD%E6%AD%BB3400%E4%BA%BA%23) `57.2K 🔥` `-63%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `57.1K 🔥` `-82%`
1. [C罗母亲无声抗议](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%AF%8D%E4%BA%B2%E6%97%A0%E5%A3%B0%E6%8A%97%E8%AE%AE%23) `57.0K 🔥` `-52%`
1. [理想L8价格](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3L8%E4%BB%B7%E6%A0%BC%23) `55.0K 🔥` `-91%`
1. [2025T1冠军皮肤](https://s.weibo.com/weibo?q=%232025T1%E5%86%A0%E5%86%9B%E7%9A%AE%E8%82%A4%23) `55.0K 🔥` `-78%`
1. [田曦薇魏大勋赢家拍摄90天](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%AD%8F%E5%A4%A7%E5%8B%8B%E8%B5%A2%E5%AE%B6%E6%8B%8D%E6%91%8490%E5%A4%A9%23) `55.0K 🔥` `-55%`
1. [霍尔木兹海峡已免费开放 (The Strait of Hormuz is open for free)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%B7%B2%E5%85%8D%E8%B4%B9%E5%BC%80%E6%94%BE%23) `55.0K 🔥` `-57%`
1. [开屏广告没了](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%8F%E5%B9%BF%E5%91%8A%E6%B2%A1%E4%BA%86%23) `55.0K 🔥` `-73%`
1. [刘国梁女儿惊讶爸爸曾经这么帅](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%A2%81%E5%A5%B3%E5%84%BF%E6%83%8A%E8%AE%B6%E7%88%B8%E7%88%B8%E6%9B%BE%E7%BB%8F%E8%BF%99%E4%B9%88%E5%B8%85%23) `55.0K 🔥` `-50%`
1. [ENC大名单](https://s.weibo.com/weibo?q=%23ENC%E5%A4%A7%E5%90%8D%E5%8D%95%23) `55.0K 🔥` `-49%`
1. [在图书馆被紫外消毒灯照了12个小时](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%9B%BE%E4%B9%A6%E9%A6%86%E8%A2%AB%E7%B4%AB%E5%A4%96%E6%B6%88%E6%AF%92%E7%81%AF%E7%85%A7%E4%BA%8612%E4%B8%AA%E5%B0%8F%E6%97%B6%23) `55.0K 🔥` `-63%`
1. [高考成绩](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%23) `55.0K 🔥` `-74%`
1. [谢可寅演技](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%8F%AF%E5%AF%85%E6%BC%94%E6%8A%80%23) `55.0K 🔥` `-47%`

Updated at 2026-06-24 02:28:12

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
