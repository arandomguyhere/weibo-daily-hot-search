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

1. [曼联vs沙巴巴库](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E8%81%94vs%E6%B2%99%E5%B7%B4%E5%B7%B4%E5%BA%93%23) `71.6K 🔥` `NEW`
1. [多邻国 iPhone的duo是我的多](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%82%BB%E5%9B%BD%20iPhone%E7%9A%84duo%E6%98%AF%E6%88%91%E7%9A%84%E5%A4%9A%23) `60.2K 🔥` `NEW`
1. [俄罗斯称有权使用核武器](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E7%A7%B0%E6%9C%89%E6%9D%83%E4%BD%BF%E7%94%A8%E6%A0%B8%E6%AD%A6%E5%99%A8%23) `38.0K 🔥` `NEW`
1. [中国人心目中神仙的样子在外网火爆了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%BF%83%E7%9B%AE%E4%B8%AD%E7%A5%9E%E4%BB%99%E7%9A%84%E6%A0%B7%E5%AD%90%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E7%88%86%E4%BA%86%23) `36.5K 🔥` `NEW`
1. [91岁太姥骑车带2岁重孙女买零食](https://s.weibo.com/weibo?q=%2391%E5%B2%81%E5%A4%AA%E5%A7%A5%E9%AA%91%E8%BD%A6%E5%B8%A62%E5%B2%81%E9%87%8D%E5%AD%99%E5%A5%B3%E4%B9%B0%E9%9B%B6%E9%A3%9F%23) `36.5K 🔥` `NEW`
1. [女生爬峨眉山还原功夫熊猫名场面](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E7%88%AC%E5%B3%A8%E7%9C%89%E5%B1%B1%E8%BF%98%E5%8E%9F%E5%8A%9F%E5%A4%AB%E7%86%8A%E7%8C%AB%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `36.4K 🔥` `NEW`
1. [人为什么要读书最好的答案](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E8%AF%BB%E4%B9%A6%E6%9C%80%E5%A5%BD%E7%9A%84%E7%AD%94%E6%A1%88%23) `409.7K 🔥` `+310%`
1. [青岛货轮火灾25人遇难](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E8%B4%A7%E8%BD%AE%E7%81%AB%E7%81%BE25%E4%BA%BA%E9%81%87%E9%9A%BE%23) `294.6K 🔥` `+497%`
1. [我国成功发射一箭六星](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%88%90%E5%8A%9F%E5%8F%91%E5%B0%84%E4%B8%80%E7%AE%AD%E5%85%AD%E6%98%9F%23) `244.5K 🔥` `+312%`
1. [建议大家把内裤袜子丢洗衣机洗](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E6%8A%8A%E5%86%85%E8%A3%A4%E8%A2%9C%E5%AD%90%E4%B8%A2%E6%B4%97%E8%A1%A3%E6%9C%BA%E6%B4%97%23) `231.6K 🔥` `+326%`
1. [2岁女孩逛故宫指着文物让爸爸买](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%80%9B%E6%95%85%E5%AE%AB%E6%8C%87%E7%9D%80%E6%96%87%E7%89%A9%E8%AE%A9%E7%88%B8%E7%88%B8%E4%B9%B0%23) `150.2K 🔥` `+275%`
1. [舍不得十岁老狗放弃更好大学](https://s.weibo.com/weibo?q=%23%E8%88%8D%E4%B8%8D%E5%BE%97%E5%8D%81%E5%B2%81%E8%80%81%E7%8B%97%E6%94%BE%E5%BC%83%E6%9B%B4%E5%A5%BD%E5%A4%A7%E5%AD%A6%23) `148.9K 🔥` `+182%`
1. [教育界迎来了最严厉的父母](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E7%95%8C%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E7%88%B6%E6%AF%8D%23) `111.2K 🔥` `+113%`
1. [10天不吃糖身体变化有多大](https://s.weibo.com/weibo?q=%2310%E5%A4%A9%E4%B8%8D%E5%90%83%E7%B3%96%E8%BA%AB%E4%BD%93%E5%8F%98%E5%8C%96%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `68.4K 🔥` `+53%`
1. [女子独自骑马去新疆遇大爷骚扰](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%8B%AC%E8%87%AA%E9%AA%91%E9%A9%AC%E5%8E%BB%E6%96%B0%E7%96%86%E9%81%87%E5%A4%A7%E7%88%B7%E9%AA%9A%E6%89%B0%23) `67.6K 🔥` `+78%`
1. [4次考公失败后花2万2旅行6国](https://s.weibo.com/weibo?q=%234%E6%AC%A1%E8%80%83%E5%85%AC%E5%A4%B1%E8%B4%A5%E5%90%8E%E8%8A%B12%E4%B8%872%E6%97%85%E8%A1%8C6%E5%9B%BD%23) `65.8K 🔥` `+69%`
1. [马来亚大学回应称将会采取必要措施](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%A5%E4%BA%9A%E5%A4%A7%E5%AD%A6%E5%9B%9E%E5%BA%94%E7%A7%B0%E5%B0%86%E4%BC%9A%E9%87%87%E5%8F%96%E5%BF%85%E8%A6%81%E6%8E%AA%E6%96%BD%23) `65.7K 🔥` `+75%`
1. [华为Mate90 定价](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMate90%20%E5%AE%9A%E4%BB%B7%23) `63.4K 🔥` `+142%`
1. [不买不招35岁员工的公司产品](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%B9%B0%E4%B8%8D%E6%8B%9B35%E5%B2%81%E5%91%98%E5%B7%A5%E7%9A%84%E5%85%AC%E5%8F%B8%E4%BA%A7%E5%93%81%23) `62.7K 🔥` `+74%`
1. [青岛货轮火灾造成重大人员伤亡](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E8%B4%A7%E8%BD%AE%E7%81%AB%E7%81%BE%E9%80%A0%E6%88%90%E9%87%8D%E5%A4%A7%E4%BA%BA%E5%91%98%E4%BC%A4%E4%BA%A1%23) `61.8K 🔥` `+100%`
1. [花少8一分钟就把选房解决了](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E4%B8%80%E5%88%86%E9%92%9F%E5%B0%B1%E6%8A%8A%E9%80%89%E6%88%BF%E8%A7%A3%E5%86%B3%E4%BA%86%23) `59.7K 🔥` `+80%`
1. [感情真的会跟着环境走](https://s.weibo.com/weibo?q=%23%E6%84%9F%E6%83%85%E7%9C%9F%E7%9A%84%E4%BC%9A%E8%B7%9F%E7%9D%80%E7%8E%AF%E5%A2%83%E8%B5%B0%23) `55.5K 🔥` `+24%`
1. [日本梅毒暴发与三个一有关](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%A2%85%E6%AF%92%E6%9A%B4%E5%8F%91%E4%B8%8E%E4%B8%89%E4%B8%AA%E4%B8%80%E6%9C%89%E5%85%B3%23) `53.4K 🔥` `+49%`
1. [晚上走路45分钟](https://s.weibo.com/weibo?q=%23%E6%99%9A%E4%B8%8A%E8%B5%B0%E8%B7%AF45%E5%88%86%E9%92%9F%23) `53.1K 🔥` `+96%`
1. [这种情况建议手洗内裤](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E6%83%85%E5%86%B5%E5%BB%BA%E8%AE%AE%E6%89%8B%E6%B4%97%E5%86%85%E8%A3%A4%23) `53.0K 🔥` `+96%`
1. [iPhone17Pro线下降价](https://s.weibo.com/weibo?q=%23iPhone17Pro%E7%BA%BF%E4%B8%8B%E9%99%8D%E4%BB%B7%23) `52.5K 🔥` `+100%`
1. [糖摄入过多身体的11个表现](https://s.weibo.com/weibo?q=%23%E7%B3%96%E6%91%84%E5%85%A5%E8%BF%87%E5%A4%9A%E8%BA%AB%E4%BD%93%E7%9A%8411%E4%B8%AA%E8%A1%A8%E7%8E%B0%23) `50.9K 🔥` `+95%`
1. [iPhone18Pro价格](https://s.weibo.com/weibo?q=%23iPhone18Pro%E4%BB%B7%E6%A0%BC%23) `49.6K 🔥` `+90%`
1. [刘翔职业生涯高光时刻](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E8%81%8C%E4%B8%9A%E7%94%9F%E6%B6%AF%E9%AB%98%E5%85%89%E6%97%B6%E5%88%BB%23) `47.2K 🔥` `+77%`
1. [告诉你一个不受伤的方法](https://s.weibo.com/weibo?q=%23%E5%91%8A%E8%AF%89%E4%BD%A0%E4%B8%80%E4%B8%AA%E4%B8%8D%E5%8F%97%E4%BC%A4%E7%9A%84%E6%96%B9%E6%B3%95%23) `41.0K 🔥` `+57%`
1. [翻篇是人生最重要的能力之一](https://s.weibo.com/weibo?q=%23%E7%BF%BB%E7%AF%87%E6%98%AF%E4%BA%BA%E7%94%9F%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E8%83%BD%E5%8A%9B%E4%B9%8B%E4%B8%80%23) `40.7K 🔥` `+72%`
1. [幼儿高烧昏厥父亲踹坏电梯被困](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E9%AB%98%E7%83%A7%E6%98%8F%E5%8E%A5%E7%88%B6%E4%BA%B2%E8%B8%B9%E5%9D%8F%E7%94%B5%E6%A2%AF%E8%A2%AB%E5%9B%B0%23) `38.9K 🔥` `+48%`
1. [中国女篮29分不敌法国](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE29%E5%88%86%E4%B8%8D%E6%95%8C%E6%B3%95%E5%9B%BD%23) `38.1K 🔥` `+87%`
1. [特朗普给近百万美国人发500美元](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%BB%99%E8%BF%91%E7%99%BE%E4%B8%87%E7%BE%8E%E5%9B%BD%E4%BA%BA%E5%8F%91500%E7%BE%8E%E5%85%83%23) `38.1K 🔥` `+46%`
1. [哥哥拿英歌棍打妹妹膝盖妈妈砸他茶杯](https://s.weibo.com/weibo?q=%23%E5%93%A5%E5%93%A5%E6%8B%BF%E8%8B%B1%E6%AD%8C%E6%A3%8D%E6%89%93%E5%A6%B9%E5%A6%B9%E8%86%9D%E7%9B%96%E5%A6%88%E5%A6%88%E7%A0%B8%E4%BB%96%E8%8C%B6%E6%9D%AF%23) `38.1K 🔥` `+46%`
1. [孙怡被说妆前一个人妆后一个人](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%A2%AB%E8%AF%B4%E5%A6%86%E5%89%8D%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%A6%86%E5%90%8E%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `38.0K 🔥` `+65%`
1. [苹果 安卓](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%20%E5%AE%89%E5%8D%93%23) `36.5K 🔥` `+39%`
1. [女子小区兼职代丢垃圾1次3元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%8F%E5%8C%BA%E5%85%BC%E8%81%8C%E4%BB%A3%E4%B8%A2%E5%9E%83%E5%9C%BE1%E6%AC%A13%E5%85%83%23) `36.5K 🔥` `+79%`
1. [三星回应多邻国开撕](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E5%9B%9E%E5%BA%94%E5%A4%9A%E9%82%BB%E5%9B%BD%E5%BC%80%E6%92%95%23) `36.5K 🔥` `+33%`
1. [娄艺潇iPhone18预言被京东接住了](https://s.weibo.com/weibo?q=%23%E5%A8%84%E8%89%BA%E6%BD%87iPhone18%E9%A2%84%E8%A8%80%E8%A2%AB%E4%BA%AC%E4%B8%9C%E6%8E%A5%E4%BD%8F%E4%BA%86%23) `36.5K 🔥` `+79%`
1. [iPhoneDuo真机长这样](https://s.weibo.com/weibo?q=%23iPhoneDuo%E7%9C%9F%E6%9C%BA%E9%95%BF%E8%BF%99%E6%A0%B7%23) `36.5K 🔥` `+34%`
1. [中国女篮无缘世界杯四强](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%E6%97%A0%E7%BC%98%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%BC%BA%23) `36.4K 🔥` `+41%`
1. [欧洲央行加息25个基点](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%B4%B2%E5%A4%AE%E8%A1%8C%E5%8A%A0%E6%81%AF25%E4%B8%AA%E5%9F%BA%E7%82%B9%23) `36.4K 🔥` `+79%`
1. [中国女篮止步世界杯八强](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%E6%AD%A2%E6%AD%A5%E4%B8%96%E7%95%8C%E6%9D%AF%E5%85%AB%E5%BC%BA%23) `36.4K 🔥` `+41%`
1. [邻居说梅姨拍照时下意识挡脸](https://s.weibo.com/weibo?q=%23%E9%82%BB%E5%B1%85%E8%AF%B4%E6%A2%85%E5%A7%A8%E6%8B%8D%E7%85%A7%E6%97%B6%E4%B8%8B%E6%84%8F%E8%AF%86%E6%8C%A1%E8%84%B8%23) `36.4K 🔥` `+77%`
1. [教师节](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E8%8A%82%23) `36.4K 🔥` `+75%`
1. [赵昭仪录节目突发哮喘](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%98%AD%E4%BB%AA%E5%BD%95%E8%8A%82%E7%9B%AE%E7%AA%81%E5%8F%91%E5%93%AE%E5%96%98%23) `36.4K 🔥` `+40%`
1. [中国女篮VS法国女篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AEVS%E6%B3%95%E5%9B%BD%E5%A5%B3%E7%AF%AE%23) `36.4K 🔥` `+40%`
1. [上海28元一份馄饨只有两颗](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B728%E5%85%83%E4%B8%80%E4%BB%BD%E9%A6%84%E9%A5%A8%E5%8F%AA%E6%9C%89%E4%B8%A4%E9%A2%97%23) `81.3K 🔥`
1. [花少8全员有嘴](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E5%85%A8%E5%91%98%E6%9C%89%E5%98%B4%23) `36.4K 🔥` `-61%`

Updated at 2026-09-11 06:26:24

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
