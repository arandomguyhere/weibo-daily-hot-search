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

1. [巴拉圭门将用球砸姆巴佩 (Paraguay goalkeeper hits Mbappe with ball)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD%E9%97%A8%E5%B0%86%E7%94%A8%E7%90%83%E7%A0%B8%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `1.6M 🔥` `NEW`
1. [蒯曼vs佐藤瞳](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BCvs%E4%BD%90%E8%97%A4%E7%9E%B3%23) `926.8K 🔥` `NEW`
1. [中国人造太阳有重大进展](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E9%80%A0%E5%A4%AA%E9%98%B3%E6%9C%89%E9%87%8D%E5%A4%A7%E8%BF%9B%E5%B1%95%23) `726.2K 🔥` `NEW`
1. [3岁女童被喂到70斤吃播赚流量](https://s.weibo.com/weibo?q=%233%E5%B2%81%E5%A5%B3%E7%AB%A5%E8%A2%AB%E5%96%82%E5%88%B070%E6%96%A4%E5%90%83%E6%92%AD%E8%B5%9A%E6%B5%81%E9%87%8F%23) `725.6K 🔥` `NEW`
1. [原来吃饭要用很多纸巾是感官过载](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%90%83%E9%A5%AD%E8%A6%81%E7%94%A8%E5%BE%88%E5%A4%9A%E7%BA%B8%E5%B7%BE%E6%98%AF%E6%84%9F%E5%AE%98%E8%BF%87%E8%BD%BD%23) `725.4K 🔥` `NEW`
1. [虞书欣张婧仪对打](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%AF%B9%E6%89%93%23) `724.2K 🔥` `NEW`
1. [熬夜精力续航计划](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E7%B2%BE%E5%8A%9B%E7%BB%AD%E8%88%AA%E8%AE%A1%E5%88%92%23) `681.3K 🔥` `NEW`
1. [儿媳妇脾气反常婆婆发现小孙子非亲生](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AA%B3%E5%A6%87%E8%84%BE%E6%B0%94%E5%8F%8D%E5%B8%B8%E5%A9%86%E5%A9%86%E5%8F%91%E7%8E%B0%E5%B0%8F%E5%AD%99%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%23) `608.4K 🔥` `NEW`
1. [姆巴佩 我们也会踢脏球](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%20%E6%88%91%E4%BB%AC%E4%B9%9F%E4%BC%9A%E8%B8%A2%E8%84%8F%E7%90%83%23) `522.1K 🔥` `NEW`
1. [老人月收入2万被判无儿子遗产继承权](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%9C%88%E6%94%B6%E5%85%A52%E4%B8%87%E8%A2%AB%E5%88%A4%E6%97%A0%E5%84%BF%E5%AD%90%E9%81%97%E4%BA%A7%E7%BB%A7%E6%89%BF%E6%9D%83%23) `518.3K 🔥` `NEW`
1. [野狗骨头开播 (Wild Dog Bones launched)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E5%BC%80%E6%92%AD%23) `426.4K 🔥` `NEW`
1. [LV诉茉莉奶白为何胜诉](https://s.weibo.com/weibo?q=%23LV%E8%AF%89%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E4%B8%BA%E4%BD%95%E8%83%9C%E8%AF%89%23) `425.2K 🔥` `NEW`
1. [曝郭宇欣给合作男演员打分](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%83%AD%E5%AE%87%E6%AC%A3%E7%BB%99%E5%90%88%E4%BD%9C%E7%94%B7%E6%BC%94%E5%91%98%E6%89%93%E5%88%86%23) `424.6K 🔥` `NEW`
1. [霉霉婚礼现场照片被泄漏](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E7%8E%B0%E5%9C%BA%E7%85%A7%E7%89%87%E8%A2%AB%E6%B3%84%E6%BC%8F%23) `423.1K 🔥` `NEW`
1. [爱干净的人老了家里长啥样](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%B9%B2%E5%87%80%E7%9A%84%E4%BA%BA%E8%80%81%E4%BA%86%E5%AE%B6%E9%87%8C%E9%95%BF%E5%95%A5%E6%A0%B7%23) `422.1K 🔥` `NEW`
1. [王力宏事故责任人员被调查](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E4%BA%8B%E6%95%85%E8%B4%A3%E4%BB%BB%E4%BA%BA%E5%91%98%E8%A2%AB%E8%B0%83%E6%9F%A5%23) `421.7K 🔥` `NEW`
1. [有线耳机为啥又翻红](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%E4%B8%BA%E5%95%A5%E5%8F%88%E7%BF%BB%E7%BA%A2%23) `420.5K 🔥` `NEW`
1. [iPhone17销量冲击4000万台大关](https://s.weibo.com/weibo?q=%23iPhone17%E9%94%80%E9%87%8F%E5%86%B2%E5%87%BB4000%E4%B8%87%E5%8F%B0%E5%A4%A7%E5%85%B3%23) `419.7K 🔥` `NEW`
1. [藏马熊凌晨闯酒店推开住客房门](https://s.weibo.com/weibo?q=%23%E8%97%8F%E9%A9%AC%E7%86%8A%E5%87%8C%E6%99%A8%E9%97%AF%E9%85%92%E5%BA%97%E6%8E%A8%E5%BC%80%E4%BD%8F%E5%AE%A2%E6%88%BF%E9%97%A8%23) `419.1K 🔥` `NEW`
1. [韩国股民A股买入额大增130%](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E6%B0%91A%E8%82%A1%E4%B9%B0%E5%85%A5%E9%A2%9D%E5%A4%A7%E5%A2%9E130%25%23) `417.9K 🔥` `NEW`
1. [赛琳娜在霉霉婚礼上用手机 (Selena uses mobile phone at Taylor Swift's wedding)](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E7%90%B3%E5%A8%9C%E5%9C%A8%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E4%B8%8A%E7%94%A8%E6%89%8B%E6%9C%BA%23) `417.3K 🔥` `NEW`
1. [姆巴佩真的生气了](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%9C%9F%E7%9A%84%E7%94%9F%E6%B0%94%E4%BA%86%23) `416.8K 🔥` `NEW`
1. [wtt](https://s.weibo.com/weibo?q=%23wtt%23) `363.0K 🔥` `NEW`
1. [灿如繁星开播](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E5%BC%80%E6%92%AD%23) `325.3K 🔥` `NEW`
1. [公安通报未成年人电梯内被掌掴](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%AE%89%E9%80%9A%E6%8A%A5%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E7%94%B5%E6%A2%AF%E5%86%85%E8%A2%AB%E6%8E%8C%E6%8E%B4%23) `318.9K 🔥` `NEW`
1. [央视曝网红儿童乱象](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E7%BD%91%E7%BA%A2%E5%84%BF%E7%AB%A5%E4%B9%B1%E8%B1%A1%23) `318.2K 🔥` `NEW`
1. [TSW对战TES](https://s.weibo.com/weibo?q=%23TSW%E5%AF%B9%E6%88%98TES%23) `289.2K 🔥` `NEW`
1. [虞书欣合作的男主们云包场](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%90%88%E4%BD%9C%E7%9A%84%E7%94%B7%E4%B8%BB%E4%BB%AC%E4%BA%91%E5%8C%85%E5%9C%BA%23) `282.8K 🔥` `NEW`
1. [法国队众星回应巴拉圭脏动作](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%98%9F%E4%BC%97%E6%98%9F%E5%9B%9E%E5%BA%94%E5%B7%B4%E6%8B%89%E5%9C%AD%E8%84%8F%E5%8A%A8%E4%BD%9C%23) `274.8K 🔥` `NEW`
1. [普京与特朗普通话85分钟](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E4%B8%8E%E7%89%B9%E6%9C%97%E6%99%AE%E9%80%9A%E8%AF%9D85%E5%88%86%E9%92%9F%23) `260.7K 🔥` `NEW`
1. [恋与深空 (Love and deep space)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `258.9K 🔥` `NEW`
1. [灿如繁星直播](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E7%9B%B4%E6%92%AD%23) `254.6K 🔥` `NEW`
1. [密逃8连官宣文案都是无限流](https://s.weibo.com/weibo?q=%23%E5%AF%86%E9%80%838%E8%BF%9E%E5%AE%98%E5%AE%A3%E6%96%87%E6%A1%88%E9%83%BD%E6%98%AF%E6%97%A0%E9%99%90%E6%B5%81%23) `250.7K 🔥` `NEW`
1. [莱万质疑FIFA偏袒C罗葡萄牙](https://s.weibo.com/weibo?q=%23%E8%8E%B1%E4%B8%87%E8%B4%A8%E7%96%91FIFA%E5%81%8F%E8%A2%92C%E7%BD%97%E8%91%A1%E8%90%84%E7%89%99%23) `229.8K 🔥` `NEW`
1. [张建鹏 陈奕恒](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BB%BA%E9%B9%8F%20%E9%99%88%E5%A5%95%E6%81%92%23) `229.3K 🔥` `NEW`
1. [女子蹭车对方没开空调把娃热炸毛](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B9%AD%E8%BD%A6%E5%AF%B9%E6%96%B9%E6%B2%A1%E5%BC%80%E7%A9%BA%E8%B0%83%E6%8A%8A%E5%A8%83%E7%83%AD%E7%82%B8%E6%AF%9B%23) `224.2K 🔥` `NEW`
1. [巴拉圭门将说没判点球法国不可能晋级](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD%E9%97%A8%E5%B0%86%E8%AF%B4%E6%B2%A1%E5%88%A4%E7%82%B9%E7%90%83%E6%B3%95%E5%9B%BD%E4%B8%8D%E5%8F%AF%E8%83%BD%E6%99%8B%E7%BA%A7%23) `222.5K 🔥` `NEW`
1. [TF四代突围主题曲疑似AI生成](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E7%AA%81%E5%9B%B4%E4%B8%BB%E9%A2%98%E6%9B%B2%E7%96%91%E4%BC%BCAI%E7%94%9F%E6%88%90%23) `221.1K 🔥` `NEW`
1. [向太看主角追了三天三夜](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E7%9C%8B%E4%B8%BB%E8%A7%92%E8%BF%BD%E4%BA%86%E4%B8%89%E5%A4%A9%E4%B8%89%E5%A4%9C%23) `220.6K 🔥` `NEW`
1. [黄景瑜 一生不踩井盖的东北人](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%20%E4%B8%80%E7%94%9F%E4%B8%8D%E8%B8%A9%E4%BA%95%E7%9B%96%E7%9A%84%E4%B8%9C%E5%8C%97%E4%BA%BA%23) `220.6K 🔥` `NEW`
1. [灿如繁星云包场 (Shining like a starry cloud, private venue)](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E4%BA%91%E5%8C%85%E5%9C%BA%23) `213.6K 🔥` `NEW`
1. [宋威龙演过正常兄妹关系吗](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%BC%94%E8%BF%87%E6%AD%A3%E5%B8%B8%E5%85%84%E5%A6%B9%E5%85%B3%E7%B3%BB%E5%90%97%23) `212.0K 🔥` `NEW`
1. [马宁怒怼巴拉圭教练](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E6%80%92%E6%80%BC%E5%B7%B4%E6%8B%89%E5%9C%AD%E6%95%99%E7%BB%83%23) `202.8K 🔥` `NEW`
1. [野狗骨头连更](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E8%BF%9E%E6%9B%B4%23) `202.7K 🔥` `NEW`
1. [EXO老祖向TFBOYS曾孙道歉](https://s.weibo.com/weibo?q=%23EXO%E8%80%81%E7%A5%96%E5%90%91TFBOYS%E6%9B%BE%E5%AD%99%E9%81%93%E6%AD%89%23) `201.1K 🔥` `NEW`
1. [姆巴佩 无视希尔握手](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%20%E6%97%A0%E8%A7%86%E5%B8%8C%E5%B0%94%E6%8F%A1%E6%89%8B%23) `200.6K 🔥` `NEW`
1. [赛道见证日产电动技术真实力](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E9%81%93%E8%A7%81%E8%AF%81%E6%97%A5%E4%BA%A7%E7%94%B5%E5%8A%A8%E6%8A%80%E6%9C%AF%E7%9C%9F%E5%AE%9E%E5%8A%9B%23) `725.8K 🔥` `+31%`
1. [人一定要去上班](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E5%8E%BB%E4%B8%8A%E7%8F%AD%23) `220.6K 🔥` `+70%`
1. [为找稀土日本开始拆空调了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E6%89%BE%E7%A8%80%E5%9C%9F%E6%97%A5%E6%9C%AC%E5%BC%80%E5%A7%8B%E6%8B%86%E7%A9%BA%E8%B0%83%E4%BA%86%23) `198.0K 🔥` `+31%`
1. [苹果史上最大电池](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7%E7%94%B5%E6%B1%A0%23) `198.7K 🔥`
1. [王力宏缝了39针 (Wang Leehom received 39 stitches)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E7%BC%9D%E4%BA%8639%E9%92%88%23) `426.1K 🔥` `-66%`
1. [巴拉圭法国冲突 (Paraguay France Conflict)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD%E6%B3%95%E5%9B%BD%E5%86%B2%E7%AA%81%23) `256.0K 🔥` `-95%`

Updated at 2026-07-05 12:32:52

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
