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

1. [女子回应5岁女儿病历上被医生标注刁蛮](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%945%E5%B2%81%E5%A5%B3%E5%84%BF%E7%97%85%E5%8E%86%E4%B8%8A%E8%A2%AB%E5%8C%BB%E7%94%9F%E6%A0%87%E6%B3%A8%E5%88%81%E8%9B%AE%23) `444.0K 🔥` `NEW`
1. [郑钦文vs斯瓦泰克](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E6%96%AF%E7%93%A6%E6%B3%B0%E5%85%8B%23) `272.9K 🔥` `NEW`
1. [披荆斩棘三公分组](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%89%E5%85%AC%E5%88%86%E7%BB%84%23) `211.0K 🔥` `NEW`
1. [冉莹颖给爸爸三婚妻子塞钱](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E7%BB%99%E7%88%B8%E7%88%B8%E4%B8%89%E5%A9%9A%E5%A6%BB%E5%AD%90%E5%A1%9E%E9%92%B1%23) `194.9K 🔥` `NEW`
1. [小学靠吼初中靠忍高中靠哄大学靠钱](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E9%9D%A0%E5%90%BC%E5%88%9D%E4%B8%AD%E9%9D%A0%E5%BF%8D%E9%AB%98%E4%B8%AD%E9%9D%A0%E5%93%84%E5%A4%A7%E5%AD%A6%E9%9D%A0%E9%92%B1%23) `184.2K 🔥` `NEW`
1. [栾念看到前男友气到嚼冰块](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E7%9C%8B%E5%88%B0%E5%89%8D%E7%94%B7%E5%8F%8B%E6%B0%94%E5%88%B0%E5%9A%BC%E5%86%B0%E5%9D%97%23) `155.7K 🔥` `NEW`
1. [披荆斩棘排名](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%8E%92%E5%90%8D%23) `145.0K 🔥` `NEW`
1. [周杰伦回应郑钦文惊天大逆转](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%9B%9E%E5%BA%94%E9%83%91%E9%92%A6%E6%96%87%E6%83%8A%E5%A4%A9%E5%A4%A7%E9%80%86%E8%BD%AC%23) `142.9K 🔥` `NEW`
1. [美军袭击三艘伊朗油轮](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%A2%AD%E5%87%BB%E4%B8%89%E8%89%98%E4%BC%8A%E6%9C%97%E6%B2%B9%E8%BD%AE%23) `141.2K 🔥` `NEW`
1. [辽宁处长被枪击案唯一目击证人发声](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E5%A4%84%E9%95%BF%E8%A2%AB%E6%9E%AA%E5%87%BB%E6%A1%88%E5%94%AF%E4%B8%80%E7%9B%AE%E5%87%BB%E8%AF%81%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `140.6K 🔥` `NEW`
1. [美网](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%23) `140.2K 🔥` `NEW`
1. [心动的信号](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A8%E7%9A%84%E4%BF%A1%E5%8F%B7%23) `139.5K 🔥` `NEW`
1. [泽连斯基称将停止袭击莫斯科三天](https://s.weibo.com/weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E7%A7%B0%E5%B0%86%E5%81%9C%E6%AD%A2%E8%A2%AD%E5%87%BB%E8%8E%AB%E6%96%AF%E7%A7%91%E4%B8%89%E5%A4%A9%23) `138.1K 🔥` `NEW`
1. [童锦程不情愿给抚养费](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E9%94%A6%E7%A8%8B%E4%B8%8D%E6%83%85%E6%84%BF%E7%BB%99%E6%8A%9A%E5%85%BB%E8%B4%B9%23) `136.5K 🔥` `NEW`
1. [取消英语主科利弊](https://s.weibo.com/weibo?q=%23%E5%8F%96%E6%B6%88%E8%8B%B1%E8%AF%AD%E4%B8%BB%E7%A7%91%E5%88%A9%E5%BC%8A%23) `135.8K 🔥` `NEW`
1. [凯斯赛后坦言心理恐慌](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%96%AF%E8%B5%9B%E5%90%8E%E5%9D%A6%E8%A8%80%E5%BF%83%E7%90%86%E6%81%90%E6%85%8C%23) `134.2K 🔥` `NEW`
1. [担心游客安全爷爷把7个葫芦收回家](https://s.weibo.com/weibo?q=%23%E6%8B%85%E5%BF%83%E6%B8%B8%E5%AE%A2%E5%AE%89%E5%85%A8%E7%88%B7%E7%88%B7%E6%8A%8A7%E4%B8%AA%E8%91%AB%E8%8A%A6%E6%94%B6%E5%9B%9E%E5%AE%B6%23) `134.1K 🔥` `NEW`
1. [8个动作赶走脂肪肝](https://s.weibo.com/weibo?q=%238%E4%B8%AA%E5%8A%A8%E4%BD%9C%E8%B5%B6%E8%B5%B0%E8%84%82%E8%82%AA%E8%82%9D%23) `132.9K 🔥` `NEW`
1. [郑钦文逆转球迷换台](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%80%86%E8%BD%AC%E7%90%83%E8%BF%B7%E6%8D%A2%E5%8F%B0%23) `132.8K 🔥` `NEW`
1. [刘雯 避嫌](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%20%E9%81%BF%E5%AB%8C%23) `130.7K 🔥` `NEW`
1. [刘琳琳金哥对质](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%90%B3%E7%90%B3%E9%87%91%E5%93%A5%E5%AF%B9%E8%B4%A8%23) `129.8K 🔥` `NEW`
1. [郝熠然](https://s.weibo.com/weibo?q=%23%E9%83%9D%E7%86%A0%E7%84%B6%23) `128.9K 🔥` `NEW`
1. [吴君如陈可辛没有分开过一个月](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%90%9B%E5%A6%82%E9%99%88%E5%8F%AF%E8%BE%9B%E6%B2%A1%E6%9C%89%E5%88%86%E5%BC%80%E8%BF%87%E4%B8%80%E4%B8%AA%E6%9C%88%23) `126.6K 🔥` `NEW`
1. [OpenAI新模型能直接操作电脑](https://s.weibo.com/weibo?q=%23OpenAI%E6%96%B0%E6%A8%A1%E5%9E%8B%E8%83%BD%E7%9B%B4%E6%8E%A5%E6%93%8D%E4%BD%9C%E7%94%B5%E8%84%91%23) `124.8K 🔥` `NEW`
1. [郑钦文美网惊天逆转](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%BE%8E%E7%BD%91%E6%83%8A%E5%A4%A9%E9%80%86%E8%BD%AC%23) `1.3M 🔥` `+196%`
1. [葫芦娃爷爷把葫芦剪掉了目击者发声](https://s.weibo.com/weibo?q=%23%E8%91%AB%E8%8A%A6%E5%A8%83%E7%88%B7%E7%88%B7%E6%8A%8A%E8%91%AB%E8%8A%A6%E5%89%AA%E6%8E%89%E4%BA%86%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23) `779.3K 🔥` `+238%`
1. [青春华章](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E5%8D%8E%E7%AB%A0%23) `636.0K 🔥` `+255%`
1. [编制不等于绝对稳定](https://s.weibo.com/weibo?q=%23%E7%BC%96%E5%88%B6%E4%B8%8D%E7%AD%89%E4%BA%8E%E7%BB%9D%E5%AF%B9%E7%A8%B3%E5%AE%9A%23) `456.8K 🔥` `+271%`
1. [樊振东德甲输掉的全都赢回来了](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BE%B7%E7%94%B2%E8%BE%93%E6%8E%89%E7%9A%84%E5%85%A8%E9%83%BD%E8%B5%A2%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `351.5K 🔥` `+246%`
1. [美网官推称郑钦文是奇迹本迹](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%E5%AE%98%E6%8E%A8%E7%A7%B0%E9%83%91%E9%92%A6%E6%96%87%E6%98%AF%E5%A5%87%E8%BF%B9%E6%9C%AC%E8%BF%B9%23) `278.3K 🔥` `+730%`
1. [鞠婧祎扇巴掌给我看爽了](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%89%87%E5%B7%B4%E6%8E%8C%E7%BB%99%E6%88%91%E7%9C%8B%E7%88%BD%E4%BA%86%23) `263.0K 🔥` `+486%`
1. [叶润泽淘汰](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E6%B6%A6%E6%B3%BD%E6%B7%98%E6%B1%B0%23) `213.1K 🔥` `+215%`
1. [贵中医二附院被捅伤医生仍在抢救](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E4%B8%AD%E5%8C%BB%E4%BA%8C%E9%99%84%E9%99%A2%E8%A2%AB%E6%8D%85%E4%BC%A4%E5%8C%BB%E7%94%9F%E4%BB%8D%E5%9C%A8%E6%8A%A2%E6%95%91%23) `212.7K 🔥` `+238%`
1. [获救中国公民爬到了隧道最高处](https://s.weibo.com/weibo?q=%23%E8%8E%B7%E6%95%91%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E7%88%AC%E5%88%B0%E4%BA%86%E9%9A%A7%E9%81%93%E6%9C%80%E9%AB%98%E5%A4%84%23) `211.9K 🔥` `+222%`
1. [汤家凤对历史不计入中考总分深感痛心](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E5%AE%B6%E5%87%A4%E5%AF%B9%E5%8E%86%E5%8F%B2%E4%B8%8D%E8%AE%A1%E5%85%A5%E4%B8%AD%E8%80%83%E6%80%BB%E5%88%86%E6%B7%B1%E6%84%9F%E7%97%9B%E5%BF%83%23) `201.4K 🔥` `+395%`
1. [苹果折叠手机价格](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%8A%98%E5%8F%A0%E6%89%8B%E6%9C%BA%E4%BB%B7%E6%A0%BC%23) `144.8K 🔥` `+337%`
1. [医生说坚持为了那8%](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%AF%B4%E5%9D%9A%E6%8C%81%E4%B8%BA%E4%BA%86%E9%82%A38%25%23) `144.3K 🔥` `+110%`
1. [取消英语主科 教育公平争议](https://s.weibo.com/weibo?q=%23%E5%8F%96%E6%B6%88%E8%8B%B1%E8%AF%AD%E4%B8%BB%E7%A7%91%20%E6%95%99%E8%82%B2%E5%85%AC%E5%B9%B3%E4%BA%89%E8%AE%AE%23) `143.6K 🔥` `+237%`
1. [容易生气背后的深层原因](https://s.weibo.com/weibo?q=%23%E5%AE%B9%E6%98%93%E7%94%9F%E6%B0%94%E8%83%8C%E5%90%8E%E7%9A%84%E6%B7%B1%E5%B1%82%E5%8E%9F%E5%9B%A0%23) `142.3K 🔥` `+237%`
1. [第21届金鹿奖获奖名单](https://s.weibo.com/weibo?q=%23%E7%AC%AC21%E5%B1%8A%E9%87%91%E9%B9%BF%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `139.2K 🔥` `+320%`
1. [严子怡68米42夺冠](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%AD%90%E6%80%A168%E7%B1%B342%E5%A4%BA%E5%86%A0%23) `137.9K 🔥` `+192%`
1. [小县城的房子买了没人住](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8E%BF%E5%9F%8E%E7%9A%84%E6%88%BF%E5%AD%90%E4%B9%B0%E4%BA%86%E6%B2%A1%E4%BA%BA%E4%BD%8F%23) `137.1K 🔥` `+183%`
1. [有氧运动对男性有多重要](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%B0%A7%E8%BF%90%E5%8A%A8%E5%AF%B9%E7%94%B7%E6%80%A7%E6%9C%89%E5%A4%9A%E9%87%8D%E8%A6%81%23) `134.8K 🔥` `+228%`
1. [前阿里高管在美失联身亡警方介入](https://s.weibo.com/weibo?q=%23%E5%89%8D%E9%98%BF%E9%87%8C%E9%AB%98%E7%AE%A1%E5%9C%A8%E7%BE%8E%E5%A4%B1%E8%81%94%E8%BA%AB%E4%BA%A1%E8%AD%A6%E6%96%B9%E4%BB%8B%E5%85%A5%23) `131.7K 🔥` `+185%`
1. [剧本杀 色情服务](https://s.weibo.com/weibo?q=%23%E5%89%A7%E6%9C%AC%E6%9D%80%20%E8%89%B2%E6%83%85%E6%9C%8D%E5%8A%A1%23) `131.4K 🔥` `+141%`
1. [避孕药 血栓](https://s.weibo.com/weibo?q=%23%E9%81%BF%E5%AD%95%E8%8D%AF%20%E8%A1%80%E6%A0%93%23) `129.2K 🔥` `+57%`
1. [蒙娜丽莎的舞蹈呢](https://s.weibo.com/weibo?q=%23%E8%92%99%E5%A8%9C%E4%B8%BD%E8%8E%8E%E7%9A%84%E8%88%9E%E8%B9%88%E5%91%A2%23) `128.3K 🔥` `+278%`
1. [尼泊尔官员回应中国公民获救原因](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%AE%98%E5%91%98%E5%9B%9E%E5%BA%94%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E8%8E%B7%E6%95%91%E5%8E%9F%E5%9B%A0%23) `127.7K 🔥` `+283%`
1. [罗云熙穿了润玉的衣服](https://s.weibo.com/weibo?q=%23%E7%BD%97%E4%BA%91%E7%86%99%E7%A9%BF%E4%BA%86%E6%B6%A6%E7%8E%89%E7%9A%84%E8%A1%A3%E6%9C%8D%23) `126.4K 🔥` `+174%`
1. [曝iPhone18Pro灵动岛大瘦身](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18Pro%E7%81%B5%E5%8A%A8%E5%B2%9B%E5%A4%A7%E7%98%A6%E8%BA%AB%23) `125.8K 🔥` `+279%`

Updated at 2026-09-06 07:47:08

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
