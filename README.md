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

1. [乒乓球男单](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E7%94%B7%E5%8D%95%23) `1.1M 🔥` `NEW`
1. [中美八点成果共识公布](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%AB%E7%82%B9%E6%88%90%E6%9E%9C%E5%85%B1%E8%AF%86%E5%85%AC%E5%B8%83%23) `998.8K 🔥` `NEW`
1. [孙颖莎回应不敌林诗栋蒯曼](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8C%E6%9E%97%E8%AF%97%E6%A0%8B%E8%92%AF%E6%9B%BC%23) `925.1K 🔥` `NEW`
1. [张本智和回应爆冷出局](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E5%9B%9E%E5%BA%94%E7%88%86%E5%86%B7%E5%87%BA%E5%B1%80%23) `924.4K 🔥` `NEW`
1. [周深雨中唱响我爱你中国好震撼](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E9%9B%A8%E4%B8%AD%E5%94%B1%E5%93%8D%E6%88%91%E7%88%B1%E4%BD%A0%E4%B8%AD%E5%9B%BD%E5%A5%BD%E9%9C%87%E6%92%BC%23) `718.6K 🔥` `NEW`
1. [张继科谈樊振东](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%B0%88%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `668.8K 🔥` `NEW`
1. [林诗栋称4比0确实没想到](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E7%A7%B04%E6%AF%940%E7%A1%AE%E5%AE%9E%E6%B2%A1%E6%83%B3%E5%88%B0%23) `534.8K 🔥` `NEW`
1. [中美建立推进贸易理事会等机制](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%BB%BA%E7%AB%8B%E6%8E%A8%E8%BF%9B%E8%B4%B8%E6%98%93%E7%90%86%E4%BA%8B%E4%BC%9A%E7%AD%89%E6%9C%BA%E5%88%B6%23) `533.3K 🔥` `NEW`
1. [刘欢出生那年的男性期望寿命](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%87%BA%E7%94%9F%E9%82%A3%E5%B9%B4%E7%9A%84%E7%94%B7%E6%80%A7%E6%9C%9F%E6%9C%9B%E5%AF%BF%E5%91%BD%23) `527.4K 🔥` `NEW`
1. [曝素媛原型成为医生](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%B4%A0%E5%AA%9B%E5%8E%9F%E5%9E%8B%E6%88%90%E4%B8%BA%E5%8C%BB%E7%94%9F%23) `524.3K 🔥` `NEW`
1. [有人建议男女同龄退休](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E5%BB%BA%E8%AE%AE%E7%94%B7%E5%A5%B3%E5%90%8C%E9%BE%84%E9%80%80%E4%BC%91%23) `519.8K 🔥` `NEW`
1. [兰香如故破33000](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%A0%B433000%23) `519.7K 🔥` `NEW`
1. [刘欢的遗憾](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E7%9A%84%E9%81%97%E6%86%BE%23) `464.3K 🔥` `NEW`
1. [北京暴雨](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9A%B4%E9%9B%A8%23) `454.2K 🔥` `NEW`
1. [张本智和被淘汰日本电视台立刻换节目](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%A2%AB%E6%B7%98%E6%B1%B0%E6%97%A5%E6%9C%AC%E7%94%B5%E8%A7%86%E5%8F%B0%E7%AB%8B%E5%88%BB%E6%8D%A2%E8%8A%82%E7%9B%AE%23) `431.3K 🔥` `NEW`
1. [一部iPhone到底有多贵](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%83%A8iPhone%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E8%B4%B5%23) `431.1K 🔥` `NEW`
1. [刘欢在春晚留下的那些经典舞台](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%9C%A8%E6%98%A5%E6%99%9A%E7%95%99%E4%B8%8B%E7%9A%84%E9%82%A3%E4%BA%9B%E7%BB%8F%E5%85%B8%E8%88%9E%E5%8F%B0%23) `431.1K 🔥` `NEW`
1. [女子咳嗽老不好掀开木地板吓坏](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%92%B3%E5%97%BD%E8%80%81%E4%B8%8D%E5%A5%BD%E6%8E%80%E5%BC%80%E6%9C%A8%E5%9C%B0%E6%9D%BF%E5%90%93%E5%9D%8F%23) `431.1K 🔥` `NEW`
1. [乒乓球混双决赛](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E6%B7%B7%E5%8F%8C%E5%86%B3%E8%B5%9B%23) `414.1K 🔥` `NEW`
1. [王楚钦感谢孙颖莎一起守住了混双金牌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%84%9F%E8%B0%A2%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%80%E8%B5%B7%E5%AE%88%E4%BD%8F%E4%BA%86%E6%B7%B7%E5%8F%8C%E9%87%91%E7%89%8C%23) `410.7K 🔥` `NEW`
1. [杀人犯问豆包最后反转了](https://s.weibo.com/weibo?q=%23%E6%9D%80%E4%BA%BA%E7%8A%AF%E9%97%AE%E8%B1%86%E5%8C%85%E6%9C%80%E5%90%8E%E5%8F%8D%E8%BD%AC%E4%BA%86%23) `406.7K 🔥` `NEW`
1. [吴艳妮13秒18](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE13%E7%A7%9218%23) `393.8K 🔥` `NEW`
1. [井柏然看热搜](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E7%9C%8B%E7%83%AD%E6%90%9C%23) `391.0K 🔥` `NEW`
1. [女儿知道欧洲游花了30万后](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E7%9F%A5%E9%81%93%E6%AC%A7%E6%B4%B2%E6%B8%B8%E8%8A%B1%E4%BA%8630%E4%B8%87%E5%90%8E%23) `386.1K 🔥` `NEW`
1. [兰香如故腾讯第五部破33000剧集](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%85%BE%E8%AE%AF%E7%AC%AC%E4%BA%94%E9%83%A8%E7%A0%B433000%E5%89%A7%E9%9B%86%23) `352.6K 🔥` `NEW`
1. [EDG对阵LOUD](https://s.weibo.com/weibo?q=%23EDG%E5%AF%B9%E9%98%B5LOUD%23) `345.7K 🔥` `NEW`
1. [刘欢去世后对外经贸学生播放我和你](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%8E%BB%E4%B8%96%E5%90%8E%E5%AF%B9%E5%A4%96%E7%BB%8F%E8%B4%B8%E5%AD%A6%E7%94%9F%E6%92%AD%E6%94%BE%E6%88%91%E5%92%8C%E4%BD%A0%23) `341.0K 🔥` `NEW`
1. [田曦薇在米兰送的签名被秒卖](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%9C%A8%E7%B1%B3%E5%85%B0%E9%80%81%E7%9A%84%E7%AD%BE%E5%90%8D%E8%A2%AB%E7%A7%92%E5%8D%96%23) `320.5K 🔥` `NEW`
1. [娶到了我的人生上限](https://s.weibo.com/weibo?q=%23%E5%A8%B6%E5%88%B0%E4%BA%86%E6%88%91%E7%9A%84%E4%BA%BA%E7%94%9F%E4%B8%8A%E9%99%90%23) `284.4K 🔥` `NEW`
1. [张杰 刘欢老师一路走好](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%20%E5%88%98%E6%AC%A2%E8%80%81%E5%B8%88%E4%B8%80%E8%B7%AF%E8%B5%B0%E5%A5%BD%23) `284.4K 🔥` `NEW`
1. [EDG首战不敌LOUD](https://s.weibo.com/weibo?q=%23EDG%E9%A6%96%E6%88%98%E4%B8%8D%E6%95%8CLOUD%23) `280.2K 🔥` `NEW`
1. [张一山演争吵戏面相都变了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%80%E5%B1%B1%E6%BC%94%E4%BA%89%E5%90%B5%E6%88%8F%E9%9D%A2%E7%9B%B8%E9%83%BD%E5%8F%98%E4%BA%86%23) `274.6K 🔥` `NEW`
1. [婆婆大笑引来了婆婆大闹](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E5%A4%A7%E7%AC%91%E5%BC%95%E6%9D%A5%E4%BA%86%E5%A9%86%E5%A9%86%E5%A4%A7%E9%97%B9%23) `273.2K 🔥` `NEW`
1. [同卵双胞胎失散六十年一高一矮](https://s.weibo.com/weibo?q=%23%E5%90%8C%E5%8D%B5%E5%8F%8C%E8%83%9E%E8%83%8E%E5%A4%B1%E6%95%A3%E5%85%AD%E5%8D%81%E5%B9%B4%E4%B8%80%E9%AB%98%E4%B8%80%E7%9F%AE%23) `250.6K 🔥` `NEW`
1. [马未都讲述刘欢生平](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9C%AA%E9%83%BD%E8%AE%B2%E8%BF%B0%E5%88%98%E6%AC%A2%E7%94%9F%E5%B9%B3%23) `250.0K 🔥` `NEW`
1. [郑钧称刘欢是了不起的人](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A7%E7%A7%B0%E5%88%98%E6%AC%A2%E6%98%AF%E4%BA%86%E4%B8%8D%E8%B5%B7%E7%9A%84%E4%BA%BA%23) `244.3K 🔥` `NEW`
1. [独生子女中年危机是父母突然失能](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E7%94%9F%E5%AD%90%E5%A5%B3%E4%B8%AD%E5%B9%B4%E5%8D%B1%E6%9C%BA%E6%98%AF%E7%88%B6%E6%AF%8D%E7%AA%81%E7%84%B6%E5%A4%B1%E8%83%BD%23) `224.6K 🔥` `NEW`
1. [二妹妹谢昭第二次擦肩而过](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E5%A6%B9%E5%A6%B9%E8%B0%A2%E6%98%AD%E7%AC%AC%E4%BA%8C%E6%AC%A1%E6%93%A6%E8%82%A9%E8%80%8C%E8%BF%87%23) `211.7K 🔥` `NEW`
1. [雪饼猴妈妈卖4元烤肠被质疑吃相难看](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E9%A5%BC%E7%8C%B4%E5%A6%88%E5%A6%88%E5%8D%964%E5%85%83%E7%83%A4%E8%82%A0%E8%A2%AB%E8%B4%A8%E7%96%91%E5%90%83%E7%9B%B8%E9%9A%BE%E7%9C%8B%23) `207.4K 🔥` `NEW`
1. [松岛辉空赞扬林诗栋](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E8%B5%9E%E6%89%AC%E6%9E%97%E8%AF%97%E6%A0%8B%23) `202.5K 🔥` `NEW`
1. [华晨宇撑伞落泪](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%92%91%E4%BC%9E%E8%90%BD%E6%B3%AA%23) `200.8K 🔥` `NEW`
1. [问界成本降低或降价](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E6%88%90%E6%9C%AC%E9%99%8D%E4%BD%8E%E6%88%96%E9%99%8D%E4%BB%B7%23) `197.7K 🔥` `NEW`
1. [中美达成300亿美元对等降税安排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E8%BE%BE%E6%88%90300%E4%BA%BF%E7%BE%8E%E5%85%83%E5%AF%B9%E7%AD%89%E9%99%8D%E7%A8%8E%E5%AE%89%E6%8E%92%23) `1.1M 🔥` `+195%`
1. [奕境X9上市24小时大定突破9157台](https://s.weibo.com/weibo?q=%23%E5%A5%95%E5%A2%83X9%E4%B8%8A%E5%B8%8224%E5%B0%8F%E6%97%B6%E5%A4%A7%E5%AE%9A%E7%AA%81%E7%A0%B49157%E5%8F%B0%23) `995.1K 🔥` `+66%`
1. [现在的消费需求越来越清晰了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E6%B6%88%E8%B4%B9%E9%9C%80%E6%B1%82%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%B8%85%E6%99%B0%E4%BA%86%23) `984.6K 🔥` `+27%`
1. [刘欢妻子发文我永远的爱永远的痛](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%A6%BB%E5%AD%90%E5%8F%91%E6%96%87%E6%88%91%E6%B0%B8%E8%BF%9C%E7%9A%84%E7%88%B1%E6%B0%B8%E8%BF%9C%E7%9A%84%E7%97%9B%23) `451.0K 🔥`
1. [刘欢去世](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%8E%BB%E4%B8%96%23) `339.7K 🔥`
1. [崔雪莉这真的是人类能承受的文字吗](https://s.weibo.com/weibo?q=%23%E5%B4%94%E9%9B%AA%E8%8E%89%E8%BF%99%E7%9C%9F%E7%9A%84%E6%98%AF%E4%BA%BA%E7%B1%BB%E8%83%BD%E6%89%BF%E5%8F%97%E7%9A%84%E6%96%87%E5%AD%97%E5%90%97%23) `255.4K 🔥` `-24%`
1. [林诗栋王皓疯狂庆祝](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E7%8E%8B%E7%9A%93%E7%96%AF%E7%8B%82%E5%BA%86%E7%A5%9D%23) `250.0K 🔥` `-71%`
1. [张本智和淘汰](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E6%B7%98%E6%B1%B0%23) `220.8K 🔥` `-97%`

Updated at 2026-09-26 22:56:39

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
