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

1. [王鹤棣方已取证报警](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%96%B9%E5%B7%B2%E5%8F%96%E8%AF%81%E6%8A%A5%E8%AD%A6%23) `10.7M 🔥` `NEW`
1. [一点点 威胁员工](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%82%B9%E7%82%B9%20%E5%A8%81%E8%83%81%E5%91%98%E5%B7%A5%23) `4.9M 🔥` `NEW`
1. [南博受赠文物事件处理结果公布](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%8D%9A%E5%8F%97%E8%B5%A0%E6%96%87%E7%89%A9%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E7%BB%93%E6%9E%9C%E5%85%AC%E5%B8%83%23) `1.7M 🔥` `NEW`
1. [公积金扩围撬动万亿消费新活力](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%89%A9%E5%9B%B4%E6%92%AC%E5%8A%A8%E4%B8%87%E4%BA%BF%E6%B6%88%E8%B4%B9%E6%96%B0%E6%B4%BB%E5%8A%9B%23) `1.3M 🔥` `NEW`
1. [韩国美容针 尸皮针](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BE%8E%E5%AE%B9%E9%92%88%20%E5%B0%B8%E7%9A%AE%E9%92%88%23) `1.1M 🔥` `NEW`
1. [知情人称南医大事件部分网传不属实](https://s.weibo.com/weibo?q=%23%E7%9F%A5%E6%83%85%E4%BA%BA%E7%A7%B0%E5%8D%97%E5%8C%BB%E5%A4%A7%E4%BA%8B%E4%BB%B6%E9%83%A8%E5%88%86%E7%BD%91%E4%BC%A0%E4%B8%8D%E5%B1%9E%E5%AE%9E%23) `1.0M 🔥` `NEW`
1. [井柏然孙千 二搭](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%20%E4%BA%8C%E6%90%AD%23) `779.9K 🔥` `NEW`
1. [优酷2027有30档综艺](https://s.weibo.com/weibo?q=%23%E4%BC%98%E9%85%B72027%E6%9C%8930%E6%A1%A3%E7%BB%BC%E8%89%BA%23) `748.5K 🔥` `NEW`
1. [同门回应坠亡学生与导师批假是否有关](https://s.weibo.com/weibo?q=%23%E5%90%8C%E9%97%A8%E5%9B%9E%E5%BA%94%E5%9D%A0%E4%BA%A1%E5%AD%A6%E7%94%9F%E4%B8%8E%E5%AF%BC%E5%B8%88%E6%89%B9%E5%81%87%E6%98%AF%E5%90%A6%E6%9C%89%E5%85%B3%23) `745.0K 🔥` `NEW`
1. [钟薛高复活售价跳水](https://s.weibo.com/weibo?q=%23%E9%92%9F%E8%96%9B%E9%AB%98%E5%A4%8D%E6%B4%BB%E5%94%AE%E4%BB%B7%E8%B7%B3%E6%B0%B4%23) `554.9K 🔥` `NEW`
1. [硕士考试第一名因专升本被取消资格](https://s.weibo.com/weibo?q=%23%E7%A1%95%E5%A3%AB%E8%80%83%E8%AF%95%E7%AC%AC%E4%B8%80%E5%90%8D%E5%9B%A0%E4%B8%93%E5%8D%87%E6%9C%AC%E8%A2%AB%E5%8F%96%E6%B6%88%E8%B5%84%E6%A0%BC%23) `471.1K 🔥` `NEW`
1. [早春晴朗2 话痨小姐](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%972%20%E8%AF%9D%E7%97%A8%E5%B0%8F%E5%A7%90%23) `466.7K 🔥` `NEW`
1. [央媒定性低保户赴港看演出](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E5%AA%92%E5%AE%9A%E6%80%A7%E4%BD%8E%E4%BF%9D%E6%88%B7%E8%B5%B4%E6%B8%AF%E7%9C%8B%E6%BC%94%E5%87%BA%23) `454.1K 🔥` `NEW`
1. [网红姜乘澜带货能力太恐怖](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%A7%9C%E4%B9%98%E6%BE%9C%E5%B8%A6%E8%B4%A7%E8%83%BD%E5%8A%9B%E5%A4%AA%E6%81%90%E6%80%96%23) `447.7K 🔥` `NEW`
1. [女子怀孕5次均流产妇科检查却正常](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%955%E6%AC%A1%E5%9D%87%E6%B5%81%E4%BA%A7%E5%A6%87%E7%A7%91%E6%A3%80%E6%9F%A5%E5%8D%B4%E6%AD%A3%E5%B8%B8%23) `432.3K 🔥` `NEW`
1. [博主绒耳卷向王鹤棣道歉](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E7%BB%92%E8%80%B3%E5%8D%B7%E5%90%91%E7%8E%8B%E9%B9%A4%E6%A3%A3%E9%81%93%E6%AD%89%23) `429.7K 🔥` `NEW`
1. [易烊千玺最近到底经历了什么](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%9C%80%E8%BF%91%E5%88%B0%E5%BA%95%E7%BB%8F%E5%8E%86%E4%BA%86%E4%BB%80%E4%B9%88%23) `423.5K 🔥` `NEW`
1. [6000元选豆包手机还是其他](https://s.weibo.com/weibo?q=%236000%E5%85%83%E9%80%89%E8%B1%86%E5%8C%85%E6%89%8B%E6%9C%BA%E8%BF%98%E6%98%AF%E5%85%B6%E4%BB%96%23) `419.2K 🔥` `NEW`
1. [优酷](https://s.weibo.com/weibo?q=%23%E4%BC%98%E9%85%B7%23) `419.0K 🔥` `NEW`
1. [栾念官宣](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E5%AE%98%E5%AE%A3%23) `418.9K 🔥` `NEW`
1. [豆包是怎么忍住不对人类起杀心的](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%98%AF%E6%80%8E%E4%B9%88%E5%BF%8D%E4%BD%8F%E4%B8%8D%E5%AF%B9%E4%BA%BA%E7%B1%BB%E8%B5%B7%E6%9D%80%E5%BF%83%E7%9A%84%23) `418.9K 🔥` `NEW`
1. [全家打赏650万申请退款同时仍在打赏](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%AE%B6%E6%89%93%E8%B5%8F650%E4%B8%87%E7%94%B3%E8%AF%B7%E9%80%80%E6%AC%BE%E5%90%8C%E6%97%B6%E4%BB%8D%E5%9C%A8%E6%89%93%E8%B5%8F%23) `286.5K 🔥` `NEW`
1. [国台办回应五月天阿信立场争议](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%E4%BA%94%E6%9C%88%E5%A4%A9%E9%98%BF%E4%BF%A1%E7%AB%8B%E5%9C%BA%E4%BA%89%E8%AE%AE%23) `266.8K 🔥` `NEW`
1. [沈腾的网速还是太慢了](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E7%9A%84%E7%BD%91%E9%80%9F%E8%BF%98%E6%98%AF%E5%A4%AA%E6%85%A2%E4%BA%86%23) `266.5K 🔥` `NEW`
1. [知情人回应坠亡原因与导师批假有关](https://s.weibo.com/weibo?q=%23%E7%9F%A5%E6%83%85%E4%BA%BA%E5%9B%9E%E5%BA%94%E5%9D%A0%E4%BA%A1%E5%8E%9F%E5%9B%A0%E4%B8%8E%E5%AF%BC%E5%B8%88%E6%89%B9%E5%81%87%E6%9C%89%E5%85%B3%23) `266.5K 🔥` `NEW`
1. [第一批穿德训鞋的受害者出现了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E7%A9%BF%E5%BE%B7%E8%AE%AD%E9%9E%8B%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `266.4K 🔥` `NEW`
1. [一家三口打赏650万赖到女儿身上](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E6%89%93%E8%B5%8F650%E4%B8%87%E8%B5%96%E5%88%B0%E5%A5%B3%E5%84%BF%E8%BA%AB%E4%B8%8A%23) `247.5K 🔥` `NEW`
1. [南方医科大学坠亡事件责任划分](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E5%8C%BB%E7%A7%91%E5%A4%A7%E5%AD%A6%E5%9D%A0%E4%BA%A1%E4%BA%8B%E4%BB%B6%E8%B4%A3%E4%BB%BB%E5%88%92%E5%88%86%23) `235.4K 🔥` `NEW`
1. [钟薛高 皇家小虎](https://s.weibo.com/weibo?q=%23%E9%92%9F%E8%96%9B%E9%AB%98%20%E7%9A%87%E5%AE%B6%E5%B0%8F%E8%99%8E%23) `235.3K 🔥` `NEW`
1. [享界G9是移动的Loft](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E7%95%8CG9%E6%98%AF%E7%A7%BB%E5%8A%A8%E7%9A%84Loft%23) `234.1K 🔥` `NEW`
1. [倪妮付辛博 夜旅人](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%E4%BB%98%E8%BE%9B%E5%8D%9A%20%E5%A4%9C%E6%97%85%E4%BA%BA%23) `234.0K 🔥` `NEW`
1. [周柯宇新手司机历险记](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9F%AF%E5%AE%87%E6%96%B0%E6%89%8B%E5%8F%B8%E6%9C%BA%E5%8E%86%E9%99%A9%E8%AE%B0%23) `233.3K 🔥` `NEW`
1. [姜乘澜直播套组二手平台溢价近百元](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E7%9B%B4%E6%92%AD%E5%A5%97%E7%BB%84%E4%BA%8C%E6%89%8B%E5%B9%B3%E5%8F%B0%E6%BA%A2%E4%BB%B7%E8%BF%91%E7%99%BE%E5%85%83%23) `232.7K 🔥` `NEW`
1. [办公室里长满了戴耳机的打工人](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E5%85%AC%E5%AE%A4%E9%87%8C%E9%95%BF%E6%BB%A1%E4%BA%86%E6%88%B4%E8%80%B3%E6%9C%BA%E7%9A%84%E6%89%93%E5%B7%A5%E4%BA%BA%23) `232.5K 🔥` `NEW`
1. [井柏然早春晴朗收官文](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E6%94%B6%E5%AE%98%E6%96%87%23) `231.7K 🔥` `NEW`
1. [小米18Pro真机首曝](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E7%9C%9F%E6%9C%BA%E9%A6%96%E6%9B%9D%23) `231.5K 🔥` `NEW`
1. [vivo微博首发8KLive](https://s.weibo.com/weibo?q=%23vivo%E5%BE%AE%E5%8D%9A%E9%A6%96%E5%8F%918KLive%23) `230.8K 🔥` `NEW`
1. [陈建州心梗前误判](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BB%BA%E5%B7%9E%E5%BF%83%E6%A2%97%E5%89%8D%E8%AF%AF%E5%88%A4%23) `230.6K 🔥` `NEW`
1. [未来北京飞上海或只需半小时](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A5%E5%8C%97%E4%BA%AC%E9%A3%9E%E4%B8%8A%E6%B5%B7%E6%88%96%E5%8F%AA%E9%9C%80%E5%8D%8A%E5%B0%8F%E6%97%B6%23) `229.9K 🔥` `NEW`
1. [补路后拉绳致人死亡司机被批捕](https://s.weibo.com/weibo?q=%23%E8%A1%A5%E8%B7%AF%E5%90%8E%E6%8B%89%E7%BB%B3%E8%87%B4%E4%BA%BA%E6%AD%BB%E4%BA%A1%E5%8F%B8%E6%9C%BA%E8%A2%AB%E6%89%B9%E6%8D%95%23) `229.3K 🔥` `NEW`
1. [律师称祖父母无权申请亲子鉴定](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E7%A7%B0%E7%A5%96%E7%88%B6%E6%AF%8D%E6%97%A0%E6%9D%83%E7%94%B3%E8%AF%B7%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%23) `229.1K 🔥` `NEW`
1. [小马云拍吻戏了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%A9%AC%E4%BA%91%E6%8B%8D%E5%90%BB%E6%88%8F%E4%BA%86%23) `228.3K 🔥` `NEW`
1. [中国男篮被沙特反超](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E8%A2%AB%E6%B2%99%E7%89%B9%E5%8F%8D%E8%B6%85%23) `224.1K 🔥` `NEW`
1. [许嵩冯禧男才女貌具象化了](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%E5%86%AF%E7%A6%A7%E7%94%B7%E6%89%8D%E5%A5%B3%E8%B2%8C%E5%85%B7%E8%B1%A1%E5%8C%96%E4%BA%86%23) `220.5K 🔥` `NEW`
1. [田小娟我要辞职了登顶Melon](https://s.weibo.com/weibo?q=%23%E7%94%B0%E5%B0%8F%E5%A8%9F%E6%88%91%E8%A6%81%E8%BE%9E%E8%81%8C%E4%BA%86%E7%99%BB%E9%A1%B6Melon%23) `219.2K 🔥` `NEW`
1. [韩国法院判朝鲜赔446亿韩元](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%B3%95%E9%99%A2%E5%88%A4%E6%9C%9D%E9%B2%9C%E8%B5%94446%E4%BA%BF%E9%9F%A9%E5%85%83%23) `219.0K 🔥` `NEW`
1. [大学毕业生举报资助人是间谍](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E6%AF%95%E4%B8%9A%E7%94%9F%E4%B8%BE%E6%8A%A5%E8%B5%84%E5%8A%A9%E4%BA%BA%E6%98%AF%E9%97%B4%E8%B0%8D%23) `218.9K 🔥` `NEW`
1. [廖三宁30分](https://s.weibo.com/weibo?q=%23%E5%BB%96%E4%B8%89%E5%AE%8130%E5%88%86%23) `217.0K 🔥` `NEW`
1. [京东ZARA全球同步上新](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9CZARA%E5%85%A8%E7%90%83%E5%90%8C%E6%AD%A5%E4%B8%8A%E6%96%B0%23) `1.1M 🔥`
1. [曝许嵩冯禧结婚了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%AE%B8%E5%B5%A9%E5%86%AF%E7%A6%A7%E7%BB%93%E5%A9%9A%E4%BA%86%23) `442.8K 🔥`
1. [早春晴朗2原班人马](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%972%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%23) `234.8K 🔥` `-64%`
1. [退休副省长家丢了243万元茅台名酒](https://s.weibo.com/weibo?q=%23%E9%80%80%E4%BC%91%E5%89%AF%E7%9C%81%E9%95%BF%E5%AE%B6%E4%B8%A2%E4%BA%86243%E4%B8%87%E5%85%83%E8%8C%85%E5%8F%B0%E5%90%8D%E9%85%92%23) `228.2K 🔥` `-71%`

Updated at 2026-09-16 17:49:25

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
