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

1. [中美元首会晤情况和共识 (Situation and consensus of the meeting between the heads of state of China and the United States)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4%E6%83%85%E5%86%B5%E5%92%8C%E5%85%B1%E8%AF%86%23) `1.1M 🔥` `NEW`
1. [华为手表非凡大师星钻绽放开售](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%89%8B%E8%A1%A8%E9%9D%9E%E5%87%A1%E5%A4%A7%E5%B8%88%E6%98%9F%E9%92%BB%E7%BB%BD%E6%94%BE%E5%BC%80%E5%94%AE%23) `935.6K 🔥` `NEW`
1. [罗永浩怒怼保时捷被抄袭无奈论](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E6%80%92%E6%80%BC%E4%BF%9D%E6%97%B6%E6%8D%B7%E8%A2%AB%E6%8A%84%E8%A2%AD%E6%97%A0%E5%A5%88%E8%AE%BA%23) `825.5K 🔥` `NEW`
1. [欢迎宁光临肯德基](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E5%AE%81%E5%85%89%E4%B8%B4%E8%82%AF%E5%BE%B7%E5%9F%BA%23) `696.9K 🔥` `NEW`
1. [我记得教师以前是份体面工作啊](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%AE%B0%E5%BE%97%E6%95%99%E5%B8%88%E4%BB%A5%E5%89%8D%E6%98%AF%E4%BB%BD%E4%BD%93%E9%9D%A2%E5%B7%A5%E4%BD%9C%E5%95%8A%23) `689.1K 🔥` `NEW`
1. [王楚钦个人捐款20万](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%AA%E4%BA%BA%E6%8D%90%E6%AC%BE20%E4%B8%87%23) `409.1K 🔥` `NEW`
1. [乐道L80价格一步到位夯爆了](https://s.weibo.com/weibo?q=%23%E4%B9%90%E9%81%93L80%E4%BB%B7%E6%A0%BC%E4%B8%80%E6%AD%A5%E5%88%B0%E4%BD%8D%E5%A4%AF%E7%88%86%E4%BA%86%23) `397.8K 🔥` `NEW`
1. [精心筹备婚礼还没敬酒宾客已散场](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E5%BF%83%E7%AD%B9%E5%A4%87%E5%A9%9A%E7%A4%BC%E8%BF%98%E6%B2%A1%E6%95%AC%E9%85%92%E5%AE%BE%E5%AE%A2%E5%B7%B2%E6%95%A3%E5%9C%BA%23) `395.4K 🔥` `NEW`
1. [曝蒋毅离婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%92%8B%E6%AF%85%E7%A6%BB%E5%A9%9A%23) `393.6K 🔥` `NEW`
1. [刘浩存好长好直的腿](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E5%A5%BD%E9%95%BF%E5%A5%BD%E7%9B%B4%E7%9A%84%E8%85%BF%23) `390.6K 🔥` `NEW`
1. [赵樱子回应蒋毅妻子喊话 (Zhao Yingzi responded to Jiang Yi’s wife’s call)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%A8%B1%E5%AD%90%E5%9B%9E%E5%BA%94%E8%92%8B%E6%AF%85%E5%A6%BB%E5%AD%90%E5%96%8A%E8%AF%9D%23) `388.1K 🔥` `NEW`
1. [李川锤锤乐道发布会硬控李斌](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B7%9D%E9%94%A4%E9%94%A4%E4%B9%90%E9%81%93%E5%8F%91%E5%B8%83%E4%BC%9A%E7%A1%AC%E6%8E%A7%E6%9D%8E%E6%96%8C%23) `387.2K 🔥` `NEW`
1. [原来表达能力是这么练出来的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%A1%A8%E8%BE%BE%E8%83%BD%E5%8A%9B%E6%98%AF%E8%BF%99%E4%B9%88%E7%BB%83%E5%87%BA%E6%9D%A5%E7%9A%84%23) `385.7K 🔥` `NEW`
1. [给阿嬷的情书](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `384.4K 🔥` `NEW`
1. [巨力索具被证监会立案](https://s.weibo.com/weibo?q=%23%E5%B7%A8%E5%8A%9B%E7%B4%A2%E5%85%B7%E8%A2%AB%E8%AF%81%E7%9B%91%E4%BC%9A%E7%AB%8B%E6%A1%88%23) `351.6K 🔥` `NEW`
1. [女子从174斤减到95斤判若两人](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%8E174%E6%96%A4%E5%87%8F%E5%88%B095%E6%96%A4%E5%88%A4%E8%8B%A5%E4%B8%A4%E4%BA%BA%23) `333.8K 🔥` `NEW`
1. [21世纪大君夫人](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `270.7K 🔥` `NEW`
1. [方媛掉粉](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E6%8E%89%E7%B2%89%23) `270.2K 🔥` `NEW`
1. [金鹰奖投票](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8A%95%E7%A5%A8%23) `242.0K 🔥` `NEW`
1. [毛巾少爷曾说父亲爷爷不愿其接班](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E5%B7%BE%E5%B0%91%E7%88%B7%E6%9B%BE%E8%AF%B4%E7%88%B6%E4%BA%B2%E7%88%B7%E7%88%B7%E4%B8%8D%E6%84%BF%E5%85%B6%E6%8E%A5%E7%8F%AD%23) `231.2K 🔥` `NEW`
1. [杨梅商贩辩称未用添加剂现场遭打脸 (Bayberry vendor was slapped in the face after he argued that no additives were used)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%A2%85%E5%95%86%E8%B4%A9%E8%BE%A9%E7%A7%B0%E6%9C%AA%E7%94%A8%E6%B7%BB%E5%8A%A0%E5%89%82%E7%8E%B0%E5%9C%BA%E9%81%AD%E6%89%93%E8%84%B8%23) `228.9K 🔥` `NEW`
1. [孙颖莎王楚钦登上杂志封面](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%99%BB%E4%B8%8A%E6%9D%82%E5%BF%97%E5%B0%81%E9%9D%A2%23) `222.9K 🔥` `NEW`
1. [新娘回应婚礼没敬酒宾客已散场](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E5%9B%9E%E5%BA%94%E5%A9%9A%E7%A4%BC%E6%B2%A1%E6%95%AC%E9%85%92%E5%AE%BE%E5%AE%A2%E5%B7%B2%E6%95%A3%E5%9C%BA%23) `199.2K 🔥` `NEW`
1. [迪丽热巴直播生图](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9B%B4%E6%92%AD%E7%94%9F%E5%9B%BE%23) `198.4K 🔥` `NEW`
1. [中美元首互动相处近9小时](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E4%BA%92%E5%8A%A8%E7%9B%B8%E5%A4%84%E8%BF%919%E5%B0%8F%E6%97%B6%23) `183.9K 🔥` `NEW`
1. [张雪机车夺得超级杆位赛第三名](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%BE%97%E8%B6%85%E7%BA%A7%E6%9D%86%E4%BD%8D%E8%B5%9B%E7%AC%AC%E4%B8%89%E5%90%8D%23) `179.8K 🔥` `NEW`
1. [原来是过敏啊还以为脂肪在燃烧](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%AF%E8%BF%87%E6%95%8F%E5%95%8A%E8%BF%98%E4%BB%A5%E4%B8%BA%E8%84%82%E8%82%AA%E5%9C%A8%E7%87%83%E7%83%A7%23) `922.8K 🔥` `+51%`
1. [国际足联回应央视世界杯版权费](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E5%9B%9E%E5%BA%94%E5%A4%AE%E8%A7%86%E4%B8%96%E7%95%8C%E6%9D%AF%E7%89%88%E6%9D%83%E8%B4%B9%23) `326.2K 🔥` `+42%`
1. [特朗普说能待得惯可能都不想走了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E8%83%BD%E5%BE%85%E5%BE%97%E6%83%AF%E5%8F%AF%E8%83%BD%E9%83%BD%E4%B8%8D%E6%83%B3%E8%B5%B0%E4%BA%86%23) `983.7K 🔥`
1. [天坛的文化与建筑之美 (The cultural and architectural beauty of the Temple of Heaven)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%9D%9B%E7%9A%84%E6%96%87%E5%8C%96%E4%B8%8E%E5%BB%BA%E7%AD%91%E4%B9%8B%E7%BE%8E%23) `944.9K 🔥`
1. [内娱歌手集体发文感谢洪涛 (Domestic entertainment singers collectively posted a message thanking Hong Tao)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%AD%8C%E6%89%8B%E9%9B%86%E4%BD%93%E5%8F%91%E6%96%87%E6%84%9F%E8%B0%A2%E6%B4%AA%E6%B6%9B%23) `512.6K 🔥`
1. [鹿晗这就是京圈佛子吗](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%BF%99%E5%B0%B1%E6%98%AF%E4%BA%AC%E5%9C%88%E4%BD%9B%E5%AD%90%E5%90%97%23) `406.6K 🔥`
1. [温岚 败血症 (Wen Lan sepsis)](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B2%9A%20%E8%B4%A5%E8%A1%80%E7%97%87%23) `405.1K 🔥`
1. [横店的剧组快灭亡了](https://s.weibo.com/weibo?q=%23%E6%A8%AA%E5%BA%97%E7%9A%84%E5%89%A7%E7%BB%84%E5%BF%AB%E7%81%AD%E4%BA%A1%E4%BA%86%23) `401.7K 🔥`
1. [黄仁勋库克发声](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%BA%93%E5%85%8B%E5%8F%91%E5%A3%B0%23) `401.4K 🔥`
1. [迪丽热巴冰淇淋掉衣服上](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%86%B0%E6%B7%87%E6%B7%8B%E6%8E%89%E8%A1%A3%E6%9C%8D%E4%B8%8A%23) `394.2K 🔥`
1. [鹿晗剃头出现人传人现象](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%89%83%E5%A4%B4%E5%87%BA%E7%8E%B0%E4%BA%BA%E4%BC%A0%E4%BA%BA%E7%8E%B0%E8%B1%A1%23) `216.4K 🔥`
1. [宝莲舞美](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E8%8E%B2%E8%88%9E%E7%BE%8E%23) `214.1K 🔥`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `197.2K 🔥`
1. [建议喜欢熬夜的反复观看](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%96%9C%E6%AC%A2%E7%86%AC%E5%A4%9C%E7%9A%84%E5%8F%8D%E5%A4%8D%E8%A7%82%E7%9C%8B%23) `774.7K 🔥` `-21%`
1. [央视感谢全国网友支持 (CCTV thanks netizens nationwide for their support)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%84%9F%E8%B0%A2%E5%85%A8%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%94%AF%E6%8C%81%23) `696.9K 🔥` `-54%`
1. [曝歌手2026首场9进7](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%AD%8C%E6%89%8B2026%E9%A6%96%E5%9C%BA9%E8%BF%9B7%23) `409.5K 🔥` `-29%`
1. [央视6000万美元拿下世界杯版权 (CCTV acquires World Cup rights for US$60 million)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%866000%E4%B8%87%E7%BE%8E%E5%85%83%E6%8B%BF%E4%B8%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E7%89%88%E6%9D%83%23) `403.4K 🔥` `-22%`
1. [中国化妆师的工作视频在外网火了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8C%96%E5%A6%86%E5%B8%88%E7%9A%84%E5%B7%A5%E4%BD%9C%E8%A7%86%E9%A2%91%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86%23) `398.8K 🔥` `-50%`
1. [iPhone一年一换比三年一换更省钱 (It saves money to replace an iPhone once a year rather than every three years)](https://s.weibo.com/weibo?q=%23iPhone%E4%B8%80%E5%B9%B4%E4%B8%80%E6%8D%A2%E6%AF%94%E4%B8%89%E5%B9%B4%E4%B8%80%E6%8D%A2%E6%9B%B4%E7%9C%81%E9%92%B1%23) `391.5K 🔥` `-41%`
1. [清华大学1名博士被退学](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A4%A7%E5%AD%A61%E5%90%8D%E5%8D%9A%E5%A3%AB%E8%A2%AB%E9%80%80%E5%AD%A6%23) `379.0K 🔥` `-22%`
1. [孙颖莎正装](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%AD%A3%E8%A3%85%23) `339.8K 🔥` `-32%`
1. [特朗普结束访华 (Trump ends visit to China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%BB%93%E6%9D%9F%E8%AE%BF%E5%8D%8E%23) `265.1K 🔥` `-38%`
1. [蒋毅老婆发文喊话蒋毅赵樱子](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AF%85%E8%80%81%E5%A9%86%E5%8F%91%E6%96%87%E5%96%8A%E8%AF%9D%E8%92%8B%E6%AF%85%E8%B5%B5%E6%A8%B1%E5%AD%90%23) `261.5K 🔥` `-38%`
1. [毛巾家族](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E5%B7%BE%E5%AE%B6%E6%97%8F%23) `246.1K 🔥` `-40%`
1. [方媛没见过年轻的郭富城](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E6%B2%A1%E8%A7%81%E8%BF%87%E5%B9%B4%E8%BD%BB%E7%9A%84%E9%83%AD%E5%AF%8C%E5%9F%8E%23) `227.8K 🔥` `-39%`
1. [白玉兰](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `183.3K 🔥` `-65%`

Updated at 2026-05-15 23:25:02

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
