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

1. [王皓质问林诗栋](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E8%B4%A8%E9%97%AE%E6%9E%97%E8%AF%97%E6%A0%8B%23) `749.8K 🔥` `NEW`
1. [王楚钦谈林诗栋不敌16岁小将](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%B0%88%E6%9E%97%E8%AF%97%E6%A0%8B%E4%B8%8D%E6%95%8C16%E5%B2%81%E5%B0%8F%E5%B0%86%23) `489.1K 🔥` `NEW`
1. [高质量发展中国行](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E4%B8%AD%E5%9B%BD%E8%A1%8C%23) `411.9K 🔥` `NEW`
1. [小米18Pro系列今日发布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E7%B3%BB%E5%88%97%E4%BB%8A%E6%97%A5%E5%8F%91%E5%B8%83%23) `399.7K 🔥` `NEW`
1. [苹果不建议给iPhone贴膜](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E4%B8%8D%E5%BB%BA%E8%AE%AE%E7%BB%99iPhone%E8%B4%B4%E8%86%9C%23) `398.4K 🔥` `NEW`
1. [汪顺400混的含金量](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E9%A1%BA400%E6%B7%B7%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `319.6K 🔥` `NEW`
1. [林诗栋称输球是自己问题](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E7%A7%B0%E8%BE%93%E7%90%83%E6%98%AF%E8%87%AA%E5%B7%B1%E9%97%AE%E9%A2%98%23) `263.1K 🔥` `NEW`
1. [吉利AI智充](https://s.weibo.com/weibo?q=%23%E5%90%89%E5%88%A9AI%E6%99%BA%E5%85%85%23) `258.7K 🔥` `NEW`
1. [13岁女孩遭强奸案闺蜜被认定为共犯](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%81%AD%E5%BC%BA%E5%A5%B8%E6%A1%88%E9%97%BA%E8%9C%9C%E8%A2%AB%E8%AE%A4%E5%AE%9A%E4%B8%BA%E5%85%B1%E7%8A%AF%23) `231.4K 🔥` `NEW`
1. [喜人奇妙夜](https://s.weibo.com/weibo?q=%23%E5%96%9C%E4%BA%BA%E5%A5%87%E5%A6%99%E5%A4%9C%23) `195.0K 🔥` `NEW`
1. [老人心梗打5次120医院说没接到](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%BF%83%E6%A2%97%E6%89%935%E6%AC%A1120%E5%8C%BB%E9%99%A2%E8%AF%B4%E6%B2%A1%E6%8E%A5%E5%88%B0%23) `194.9K 🔥` `NEW`
1. [黄子弘凡 声幻奇境音乐节](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%20%E5%A3%B0%E5%B9%BB%E5%A5%87%E5%A2%83%E9%9F%B3%E4%B9%90%E8%8A%82%23) `194.6K 🔥` `NEW`
1. [杨幂回复李现](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%9B%9E%E5%A4%8D%E6%9D%8E%E7%8E%B0%23) `194.4K 🔥` `NEW`
1. [迪丽热巴男粉握手后捂脸跑下台](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%94%B7%E7%B2%89%E6%8F%A1%E6%89%8B%E5%90%8E%E6%8D%82%E8%84%B8%E8%B7%91%E4%B8%8B%E5%8F%B0%23) `194.1K 🔥` `NEW`
1. [张家齐妈妈拒绝返还存款涉嫌违法](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E6%8B%92%E7%BB%9D%E8%BF%94%E8%BF%98%E5%AD%98%E6%AC%BE%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%23) `193.6K 🔥` `NEW`
1. [王玉雯化的这个妆据说要好几万](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%8C%96%E7%9A%84%E8%BF%99%E4%B8%AA%E5%A6%86%E6%8D%AE%E8%AF%B4%E8%A6%81%E5%A5%BD%E5%87%A0%E4%B8%87%23) `193.5K 🔥` `NEW`
1. [张家齐说我们的关系其实不太纯洁](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%AF%B4%E6%88%91%E4%BB%AC%E7%9A%84%E5%85%B3%E7%B3%BB%E5%85%B6%E5%AE%9E%E4%B8%8D%E5%A4%AA%E7%BA%AF%E6%B4%81%23) `193.2K 🔥` `NEW`
1. [4国房价泡沫见底时间每次都一样](https://s.weibo.com/weibo?q=%234%E5%9B%BD%E6%88%BF%E4%BB%B7%E6%B3%A1%E6%B2%AB%E8%A7%81%E5%BA%95%E6%97%B6%E9%97%B4%E6%AF%8F%E6%AC%A1%E9%83%BD%E4%B8%80%E6%A0%B7%23) `192.8K 🔥` `NEW`
1. [为什么建议35岁就要开始控糖](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BB%BA%E8%AE%AE35%E5%B2%81%E5%B0%B1%E8%A6%81%E5%BC%80%E5%A7%8B%E6%8E%A7%E7%B3%96%23) `192.7K 🔥` `NEW`
1. [杨幂李现Prada秀场同框](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9D%8E%E7%8E%B0Prada%E7%A7%80%E5%9C%BA%E5%90%8C%E6%A1%86%23) `192.5K 🔥` `NEW`
1. [王玉雯有触觉防御症](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%9C%89%E8%A7%A6%E8%A7%89%E9%98%B2%E5%BE%A1%E7%97%87%23) `192.0K 🔥` `NEW`
1. [S16全球总决赛](https://s.weibo.com/weibo?q=%23S16%E5%85%A8%E7%90%83%E6%80%BB%E5%86%B3%E8%B5%9B%23) `191.8K 🔥` `NEW`
1. [他不认识兰香但兰香记得退婚书每个字](https://s.weibo.com/weibo?q=%23%E4%BB%96%E4%B8%8D%E8%AE%A4%E8%AF%86%E5%85%B0%E9%A6%99%E4%BD%86%E5%85%B0%E9%A6%99%E8%AE%B0%E5%BE%97%E9%80%80%E5%A9%9A%E4%B9%A6%E6%AF%8F%E4%B8%AA%E5%AD%97%23) `191.6K 🔥` `NEW`
1. [浪姐8拟邀名单](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%908%E6%8B%9F%E9%82%80%E5%90%8D%E5%8D%95%23) `191.3K 🔥` `NEW`
1. [盛夏晴朗 井柏然孙千](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E5%A4%8F%E6%99%B4%E6%9C%97%20%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%23) `191.2K 🔥` `NEW`
1. [工位上一定要有一个显眼的东西](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%8D%E4%B8%8A%E4%B8%80%E5%AE%9A%E8%A6%81%E6%9C%89%E4%B8%80%E4%B8%AA%E6%98%BE%E7%9C%BC%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `190.4K 🔥` `NEW`
1. [事实证明女儿颜值由爸爸决定](https://s.weibo.com/weibo?q=%23%E4%BA%8B%E5%AE%9E%E8%AF%81%E6%98%8E%E5%A5%B3%E5%84%BF%E9%A2%9C%E5%80%BC%E7%94%B1%E7%88%B8%E7%88%B8%E5%86%B3%E5%AE%9A%23) `189.3K 🔥` `NEW`
1. [原来穷的叮当响是这个意思](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%A9%B7%E7%9A%84%E5%8F%AE%E5%BD%93%E5%93%8D%E6%98%AF%E8%BF%99%E4%B8%AA%E6%84%8F%E6%80%9D%23) `188.6K 🔥` `NEW`
1. [兰香如故 卡在大婚](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%20%E5%8D%A1%E5%9C%A8%E5%A4%A7%E5%A9%9A%23) `187.4K 🔥` `NEW`
1. [故意让小孩难堪的大人有多恶毒](https://s.weibo.com/weibo?q=%23%E6%95%85%E6%84%8F%E8%AE%A9%E5%B0%8F%E5%AD%A9%E9%9A%BE%E5%A0%AA%E7%9A%84%E5%A4%A7%E4%BA%BA%E6%9C%89%E5%A4%9A%E6%81%B6%E6%AF%92%23) `186.3K 🔥` `NEW`
1. [小米18Pro系列](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E7%B3%BB%E5%88%97%23) `185.9K 🔥` `NEW`
1. [张展硕1500自由泳金牌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%951500%E8%87%AA%E7%94%B1%E6%B3%B3%E9%87%91%E7%89%8C%23) `184.9K 🔥` `NEW`
1. [张真源](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%23) `184.0K 🔥` `NEW`
1. [迪丽热巴伴手礼一个座位都摆不下](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BC%B4%E6%89%8B%E7%A4%BC%E4%B8%80%E4%B8%AA%E5%BA%A7%E4%BD%8D%E9%83%BD%E6%91%86%E4%B8%8D%E4%B8%8B%23) `183.0K 🔥` `NEW`
1. [我要是HR必须招来面试](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%A6%81%E6%98%AFHR%E5%BF%85%E9%A1%BB%E6%8B%9B%E6%9D%A5%E9%9D%A2%E8%AF%95%23) `182.3K 🔥` `NEW`
1. [是吕蕺儿告诉林兰香真相的](https://s.weibo.com/weibo?q=%23%E6%98%AF%E5%90%95%E8%95%BA%E5%84%BF%E5%91%8A%E8%AF%89%E6%9E%97%E5%85%B0%E9%A6%99%E7%9C%9F%E7%9B%B8%E7%9A%84%23) `181.9K 🔥` `NEW`
1. [日本女排颁奖礼全员黑脸](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E6%8E%92%E9%A2%81%E5%A5%96%E7%A4%BC%E5%85%A8%E5%91%98%E9%BB%91%E8%84%B8%23) `181.5K 🔥` `NEW`
1. [刘学义回复谭松韵](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%9B%9E%E5%A4%8D%E8%B0%AD%E6%9D%BE%E9%9F%B5%23) `180.9K 🔥` `NEW`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `180.5K 🔥` `NEW`
1. [左奇函 墨尔本](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%20%E5%A2%A8%E5%B0%94%E6%9C%AC%23) `180.0K 🔥` `NEW`
1. [白鹿朝玉阶官宣发布节奏](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9C%9D%E7%8E%89%E9%98%B6%E5%AE%98%E5%AE%A3%E5%8F%91%E5%B8%83%E8%8A%82%E5%A5%8F%23) `178.8K 🔥` `NEW`
1. [家长不给孩子打流感疫苗的顾虑是什么](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E4%B8%8D%E7%BB%99%E5%AD%A9%E5%AD%90%E6%89%93%E6%B5%81%E6%84%9F%E7%96%AB%E8%8B%97%E7%9A%84%E9%A1%BE%E8%99%91%E6%98%AF%E4%BB%80%E4%B9%88%23) `178.8K 🔥` `NEW`
1. [退钱哥说日本女排球迷气的直接离场](https://s.weibo.com/weibo?q=%23%E9%80%80%E9%92%B1%E5%93%A5%E8%AF%B4%E6%97%A5%E6%9C%AC%E5%A5%B3%E6%8E%92%E7%90%83%E8%BF%B7%E6%B0%94%E7%9A%84%E7%9B%B4%E6%8E%A5%E7%A6%BB%E5%9C%BA%23) `178.2K 🔥` `NEW`
1. [俄军凌晨大规模打击乌克兰](https://s.weibo.com/weibo?q=%23%E4%BF%84%E5%86%9B%E5%87%8C%E6%99%A8%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%89%93%E5%87%BB%E4%B9%8C%E5%85%8B%E5%85%B0%23) `177.6K 🔥` `NEW`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `176.9K 🔥` `NEW`
1. [网民造谣6名男子强奸女子被行拘](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%B0%91%E9%80%A0%E8%B0%A36%E5%90%8D%E7%94%B7%E5%AD%90%E5%BC%BA%E5%A5%B8%E5%A5%B3%E5%AD%90%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `176.4K 🔥` `NEW`
1. [重庆市委书记赴张雪机车调研](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B8%82%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%B5%B4%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%B0%83%E7%A0%94%23) `176.1K 🔥` `NEW`
1. [傅园慧爸爸说生活全部围绕傅园慧转](https://s.weibo.com/weibo?q=%23%E5%82%85%E5%9B%AD%E6%85%A7%E7%88%B8%E7%88%B8%E8%AF%B4%E7%94%9F%E6%B4%BB%E5%85%A8%E9%83%A8%E5%9B%B4%E7%BB%95%E5%82%85%E5%9B%AD%E6%85%A7%E8%BD%AC%23) `175.5K 🔥` `NEW`
1. [张家齐项链 金价](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E9%A1%B9%E9%93%BE%20%E9%87%91%E4%BB%B7%23) `175.2K 🔥` `NEW`
1. [蔡康永确认和小S有新节目](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%E7%A1%AE%E8%AE%A4%E5%92%8C%E5%B0%8FS%E6%9C%89%E6%96%B0%E8%8A%82%E7%9B%AE%23) `174.6K 🔥` `NEW`
1. [中国女排3连冠](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%923%E8%BF%9E%E5%86%A0%23) `173.8K 🔥` `NEW`

Updated at 2026-09-23 00:58:51

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
