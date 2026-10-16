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

1. [天水幼儿血铅案一审宣判](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B0%B4%E5%B9%BC%E5%84%BF%E8%A1%80%E9%93%85%E6%A1%88%E4%B8%80%E5%AE%A1%E5%AE%A3%E5%88%A4%23) `1.5M 🔥` `NEW`
1. [香港名媛碎尸案庭审曝惊人场面](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%90%8D%E5%AA%9B%E7%A2%8E%E5%B0%B8%E6%A1%88%E5%BA%AD%E5%AE%A1%E6%9B%9D%E6%83%8A%E4%BA%BA%E5%9C%BA%E9%9D%A2%23) `1.2M 🔥` `NEW`
1. [第140届广交会有哪些新亮点](https://s.weibo.com/weibo?q=%23%E7%AC%AC140%E5%B1%8A%E5%B9%BF%E4%BA%A4%E4%BC%9A%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E4%BA%AE%E7%82%B9%23) `697.2K 🔥` `NEW`
1. [MONA L05预售价16.98万元起](https://s.weibo.com/weibo?q=%23MONA%20L05%E9%A2%84%E5%94%AE%E4%BB%B716.98%E4%B8%87%E5%85%83%E8%B5%B7%23) `571.8K 🔥` `NEW`
1. [老师被家长举报要求保证不怀孕](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B8%88%E8%A2%AB%E5%AE%B6%E9%95%BF%E4%B8%BE%E6%8A%A5%E8%A6%81%E6%B1%82%E4%BF%9D%E8%AF%81%E4%B8%8D%E6%80%80%E5%AD%95%23) `507.2K 🔥` `NEW`
1. [孙颖莎火炬手](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%81%AB%E7%82%AC%E6%89%8B%23) `469.8K 🔥` `NEW`
1. [李斌给特斯拉点赞](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%8C%E7%BB%99%E7%89%B9%E6%96%AF%E6%8B%89%E7%82%B9%E8%B5%9E%23) `392.8K 🔥` `NEW`
1. [周翊然唐狮品牌代言人](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%BF%8A%E7%84%B6%E5%94%90%E7%8B%AE%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `373.7K 🔥` `NEW`
1. [乡政府拖欠工程款5000万称无力偿还](https://s.weibo.com/weibo?q=%23%E4%B9%A1%E6%94%BF%E5%BA%9C%E6%8B%96%E6%AC%A0%E5%B7%A5%E7%A8%8B%E6%AC%BE5000%E4%B8%87%E7%A7%B0%E6%97%A0%E5%8A%9B%E5%81%BF%E8%BF%98%23) `342.8K 🔥` `NEW`
1. [存款利率普遍上调了](https://s.weibo.com/weibo?q=%23%E5%AD%98%E6%AC%BE%E5%88%A9%E7%8E%87%E6%99%AE%E9%81%8D%E4%B8%8A%E8%B0%83%E4%BA%86%23) `315.5K 🔥` `NEW`
1. [Tarzan谈被LNG解约](https://s.weibo.com/weibo?q=%23Tarzan%E8%B0%88%E8%A2%ABLNG%E8%A7%A3%E7%BA%A6%23) `311.5K 🔥` `NEW`
1. [甘肃天水幼儿园铅中毒案1人无期](https://s.weibo.com/weibo?q=%23%E7%94%98%E8%82%83%E5%A4%A9%E6%B0%B4%E5%B9%BC%E5%84%BF%E5%9B%AD%E9%93%85%E4%B8%AD%E6%AF%92%E6%A1%881%E4%BA%BA%E6%97%A0%E6%9C%9F%23) `311.1K 🔥` `NEW`
1. [黄子韬儿子国籍](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%84%BF%E5%AD%90%E5%9B%BD%E7%B1%8D%23) `310.7K 🔥` `NEW`
1. [徐艺洋 孩子是我自己生的](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%20%E5%AD%A9%E5%AD%90%E6%98%AF%E6%88%91%E8%87%AA%E5%B7%B1%E7%94%9F%E7%9A%84%23) `310.6K 🔥` `NEW`
1. [曝何穗面试维密被拒](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BD%95%E7%A9%97%E9%9D%A2%E8%AF%95%E7%BB%B4%E5%AF%86%E8%A2%AB%E6%8B%92%23) `309.8K 🔥` `NEW`
1. [公司因单休招不到人改成双休](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E5%9B%A0%E5%8D%95%E4%BC%91%E6%8B%9B%E4%B8%8D%E5%88%B0%E4%BA%BA%E6%94%B9%E6%88%90%E5%8F%8C%E4%BC%91%23) `309.6K 🔥` `NEW`
1. [日本误报9.9级地震](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%AF%AF%E6%8A%A59.9%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `308.9K 🔥` `NEW`
1. [小城良方出圈梗](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%87%BA%E5%9C%88%E6%A2%97%23) `307.9K 🔥` `NEW`
1. [王一博这个镜头40w](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%BF%99%E4%B8%AA%E9%95%9C%E5%A4%B440w%23) `307.5K 🔥` `NEW`
1. [男子中1000万不到一月仅剩28元](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%AD1000%E4%B8%87%E4%B8%8D%E5%88%B0%E4%B8%80%E6%9C%88%E4%BB%85%E5%89%A928%E5%85%83%23) `307.2K 🔥` `NEW`
1. [有车之后心态突然就变了](https://s.weibo.com/weibo?q=%23%E6%9C%89%E8%BD%A6%E4%B9%8B%E5%90%8E%E5%BF%83%E6%80%81%E7%AA%81%E7%84%B6%E5%B0%B1%E5%8F%98%E4%BA%86%23) `306.5K 🔥` `NEW`
1. [黄子韬绣红旗人设被质疑割裂](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E7%BB%A3%E7%BA%A2%E6%97%97%E4%BA%BA%E8%AE%BE%E8%A2%AB%E8%B4%A8%E7%96%91%E5%89%B2%E8%A3%82%23) `306.3K 🔥` `NEW`
1. [菲律宾应该庆幸有中国这样的邻居](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E5%BA%94%E8%AF%A5%E5%BA%86%E5%B9%B8%E6%9C%89%E4%B8%AD%E5%9B%BD%E8%BF%99%E6%A0%B7%E7%9A%84%E9%82%BB%E5%B1%85%23) `305.7K 🔥` `NEW`
1. [9.9级地震远超智利9.5](https://s.weibo.com/weibo?q=%239.9%E7%BA%A7%E5%9C%B0%E9%9C%87%E8%BF%9C%E8%B6%85%E6%99%BA%E5%88%A99.5%23) `305.4K 🔥` `NEW`
1. [庾澄庆说不会和伊能静同框](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E8%AF%B4%E4%B8%8D%E4%BC%9A%E5%92%8C%E4%BC%8A%E8%83%BD%E9%9D%99%E5%90%8C%E6%A1%86%23) `305.2K 🔥` `NEW`
1. [凯迪拉克](https://s.weibo.com/weibo?q=%23%E5%87%AF%E8%BF%AA%E6%8B%89%E5%85%8B%23) `285.9K 🔥` `NEW`
1. [谢娜用AI视频为赵丽颖庆生](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E7%94%A8AI%E8%A7%86%E9%A2%91%E4%B8%BA%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%BA%86%E7%94%9F%23) `280.2K 🔥` `NEW`
1. [伊藤美诚的ins删掉了乒乓球所有相关](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%97%A4%E7%BE%8E%E8%AF%9A%E7%9A%84ins%E5%88%A0%E6%8E%89%E4%BA%86%E4%B9%92%E4%B9%93%E7%90%83%E6%89%80%E6%9C%89%E7%9B%B8%E5%85%B3%23) `218.3K 🔥` `NEW`
1. [手机掉进地铁缝连播16小时短剧](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%8E%89%E8%BF%9B%E5%9C%B0%E9%93%81%E7%BC%9D%E8%BF%9E%E6%92%AD16%E5%B0%8F%E6%97%B6%E7%9F%AD%E5%89%A7%23) `205.9K 🔥` `NEW`
1. [马斯克表情](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E8%A1%A8%E6%83%85%23) `199.7K 🔥` `NEW`
1. [双11纸尿裤或将迎来井喷式消费](https://s.weibo.com/weibo?q=%23%E5%8F%8C11%E7%BA%B8%E5%B0%BF%E8%A3%A4%E6%88%96%E5%B0%86%E8%BF%8E%E6%9D%A5%E4%BA%95%E5%96%B7%E5%BC%8F%E6%B6%88%E8%B4%B9%23) `199.4K 🔥` `NEW`
1. [汕头12人死亡重大火灾事故调查报告](https://s.weibo.com/weibo?q=%23%E6%B1%95%E5%A4%B412%E4%BA%BA%E6%AD%BB%E4%BA%A1%E9%87%8D%E5%A4%A7%E7%81%AB%E7%81%BE%E4%BA%8B%E6%95%85%E8%B0%83%E6%9F%A5%E6%8A%A5%E5%91%8A%23) `199.4K 🔥` `NEW`
1. [39万人涌入Babycare直播间](https://s.weibo.com/weibo?q=%2339%E4%B8%87%E4%BA%BA%E6%B6%8C%E5%85%A5Babycare%E7%9B%B4%E6%92%AD%E9%97%B4%23) `187.5K 🔥` `NEW`
1. [不会穿搭的建议反复观看](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BC%9A%E7%A9%BF%E6%90%AD%E7%9A%84%E5%BB%BA%E8%AE%AE%E5%8F%8D%E5%A4%8D%E8%A7%82%E7%9C%8B%23) `184.1K 🔥` `NEW`
1. [小城良方的广告位是抢下来的](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E7%9A%84%E5%B9%BF%E5%91%8A%E4%BD%8D%E6%98%AF%E6%8A%A2%E4%B8%8B%E6%9D%A5%E7%9A%84%23) `178.5K 🔥` `NEW`
1. [股民看不懂A股跳水](https://s.weibo.com/weibo?q=%23%E8%82%A1%E6%B0%91%E7%9C%8B%E4%B8%8D%E6%87%82A%E8%82%A1%E8%B7%B3%E6%B0%B4%23) `170.3K 🔥` `NEW`
1. [顾客不用公筷擅自夹老板午饭惹反感](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%AE%A2%E4%B8%8D%E7%94%A8%E5%85%AC%E7%AD%B7%E6%93%85%E8%87%AA%E5%A4%B9%E8%80%81%E6%9D%BF%E5%8D%88%E9%A5%AD%E6%83%B9%E5%8F%8D%E6%84%9F%23) `165.3K 🔥` `NEW`
1. [折叠屏买对不买贵](https://s.weibo.com/weibo?q=%23%E6%8A%98%E5%8F%A0%E5%B1%8F%E4%B9%B0%E5%AF%B9%E4%B8%8D%E4%B9%B0%E8%B4%B5%23) `164.5K 🔥` `NEW`
1. [随身消毒卡宣称除菌99.99%实测翻车](https://s.weibo.com/weibo?q=%23%E9%9A%8F%E8%BA%AB%E6%B6%88%E6%AF%92%E5%8D%A1%E5%AE%A3%E7%A7%B0%E9%99%A4%E8%8F%8C99.99%25%E5%AE%9E%E6%B5%8B%E7%BF%BB%E8%BD%A6%23) `163.8K 🔥` `NEW`
1. [胡锡进谈特斯拉Roadster会飞](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E8%B0%88%E7%89%B9%E6%96%AF%E6%8B%89Roadster%E4%BC%9A%E9%A3%9E%23) `163.8K 🔥` `NEW`
1. [没想到集齐了五颜六色的白](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%83%B3%E5%88%B0%E9%9B%86%E9%BD%90%E4%BA%86%E4%BA%94%E9%A2%9C%E5%85%AD%E8%89%B2%E7%9A%84%E7%99%BD%23) `156.2K 🔥` `NEW`
1. [孙颖莎梁靖崑参加省运会开幕式](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%A2%81%E9%9D%96%E5%B4%91%E5%8F%82%E5%8A%A0%E7%9C%81%E8%BF%90%E4%BC%9A%E5%BC%80%E5%B9%95%E5%BC%8F%23) `155.3K 🔥` `NEW`
1. [moka回来了](https://s.weibo.com/weibo?q=%23moka%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `146.9K 🔥` `NEW`
1. [传国玉玺五代后失踪](https://s.weibo.com/weibo?q=%23%E4%BC%A0%E5%9B%BD%E7%8E%89%E7%8E%BA%E4%BA%94%E4%BB%A3%E5%90%8E%E5%A4%B1%E8%B8%AA%23) `137.6K 🔥` `NEW`
1. [嫁金钗开播](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%BC%80%E6%92%AD%23) `371.4K 🔥` `+58%`
1. [徐艺洋曾试图提前公关](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E6%9B%BE%E8%AF%95%E5%9B%BE%E6%8F%90%E5%89%8D%E5%85%AC%E5%85%B3%23) `308.2K 🔥`
1. [特斯拉Roadster真的会飞](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89Roadster%E7%9C%9F%E7%9A%84%E4%BC%9A%E9%A3%9E%23) `236.8K 🔥`
1. [嫁金钗](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%23) `258.0K 🔥` `-32%`
1. [特斯拉Roadster2](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89Roadster2%23) `149.2K 🔥` `-39%`
1. [中国汽车与特斯拉差距](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B1%BD%E8%BD%A6%E4%B8%8E%E7%89%B9%E6%96%AF%E6%8B%89%E5%B7%AE%E8%B7%9D%23) `146.7K 🔥` `-42%`

Updated at 2026-10-16 18:41:16

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
