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

1. [被张雪扔下水县委书记拿到大结果](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%BC%A0%E9%9B%AA%E6%89%94%E4%B8%8B%E6%B0%B4%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%8B%BF%E5%88%B0%E5%A4%A7%E7%BB%93%E6%9E%9C%23) `1.2M 🔥` `NEW`
1. [曝后会友期有个艺人很作](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E6%9C%89%E4%B8%AA%E8%89%BA%E4%BA%BA%E5%BE%88%E4%BD%9C%23) `889.1K 🔥` `NEW`
1. [多项重大水利工程取得重要进展](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%A1%B9%E9%87%8D%E5%A4%A7%E6%B0%B4%E5%88%A9%E5%B7%A5%E7%A8%8B%E5%8F%96%E5%BE%97%E9%87%8D%E8%A6%81%E8%BF%9B%E5%B1%95%23) `676.0K 🔥` `NEW`
1. [安踏品牌全球代言人刘浩存](https://s.weibo.com/weibo?q=%23%E5%AE%89%E8%B8%8F%E5%93%81%E7%89%8C%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%E5%88%98%E6%B5%A9%E5%AD%98%23) `632.8K 🔥` `NEW`
1. [2个衣架轻松收纳大衣](https://s.weibo.com/weibo?q=%232%E4%B8%AA%E8%A1%A3%E6%9E%B6%E8%BD%BB%E6%9D%BE%E6%94%B6%E7%BA%B3%E5%A4%A7%E8%A1%A3%23) `460.3K 🔥` `NEW`
1. [内存条有价无市](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E6%9D%A1%E6%9C%89%E4%BB%B7%E6%97%A0%E5%B8%82%23) `368.0K 🔥` `NEW`
1. [多所高校将通过数字人民币发工资](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%89%80%E9%AB%98%E6%A0%A1%E5%B0%86%E9%80%9A%E8%BF%87%E6%95%B0%E5%AD%97%E4%BA%BA%E6%B0%91%E5%B8%81%E5%8F%91%E5%B7%A5%E8%B5%84%23) `331.9K 🔥` `NEW`
1. [后会友期疑似仅一组和好](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%96%91%E4%BC%BC%E4%BB%85%E4%B8%80%E7%BB%84%E5%92%8C%E5%A5%BD%23) `323.7K 🔥` `NEW`
1. [内存价格出现倒挂](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E4%BB%B7%E6%A0%BC%E5%87%BA%E7%8E%B0%E5%80%92%E6%8C%82%23) `321.3K 🔥` `NEW`
1. [我国风光装机量突破20亿千瓦](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E9%A3%8E%E5%85%89%E8%A3%85%E6%9C%BA%E9%87%8F%E7%AA%81%E7%A0%B420%E4%BA%BF%E5%8D%83%E7%93%A6%23) `311.4K 🔥` `NEW`
1. [长鑫拒绝为苹果降价](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E6%8B%92%E7%BB%9D%E4%B8%BA%E8%8B%B9%E6%9E%9C%E9%99%8D%E4%BB%B7%23) `295.6K 🔥` `NEW`
1. [老干妈日销售额从万元跌至千元](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B9%B2%E5%A6%88%E6%97%A5%E9%94%80%E5%94%AE%E9%A2%9D%E4%BB%8E%E4%B8%87%E5%85%83%E8%B7%8C%E8%87%B3%E5%8D%83%E5%85%83%23) `288.4K 🔥` `NEW`
1. [新款iPadmini发布](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%AC%BEiPadmini%E5%8F%91%E5%B8%83%23) `275.9K 🔥` `NEW`
1. [许飞 你想要我命都给你](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%20%E4%BD%A0%E6%83%B3%E8%A6%81%E6%88%91%E5%91%BD%E9%83%BD%E7%BB%99%E4%BD%A0%23) `271.8K 🔥` `NEW`
1. [沈阳地震](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E5%9C%B0%E9%9C%87%23) `256.0K 🔥` `NEW`
1. [富士康曝苹果为保供放宽质检标准](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E5%A3%AB%E5%BA%B7%E6%9B%9D%E8%8B%B9%E6%9E%9C%E4%B8%BA%E4%BF%9D%E4%BE%9B%E6%94%BE%E5%AE%BD%E8%B4%A8%E6%A3%80%E6%A0%87%E5%87%86%23) `247.3K 🔥` `NEW`
1. [潘展乐100混金牌](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%B1%95%E4%B9%90100%E6%B7%B7%E9%87%91%E7%89%8C%23) `244.7K 🔥` `NEW`
1. [iPhoneDuo折叠挑战后摔坏](https://s.weibo.com/weibo?q=%23iPhoneDuo%E6%8A%98%E5%8F%A0%E6%8C%91%E6%88%98%E5%90%8E%E6%91%94%E5%9D%8F%23) `241.5K 🔥` `NEW`
1. [小城良方 看书想吐真的是病](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%20%E7%9C%8B%E4%B9%A6%E6%83%B3%E5%90%90%E7%9C%9F%E7%9A%84%E6%98%AF%E7%97%85%23) `232.2K 🔥` `NEW`
1. [胖东来公布3起侵犯员工人格尊严案例](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%85%AC%E5%B8%833%E8%B5%B7%E4%BE%B5%E7%8A%AF%E5%91%98%E5%B7%A5%E4%BA%BA%E6%A0%BC%E5%B0%8A%E4%B8%A5%E6%A1%88%E4%BE%8B%23) `211.3K 🔥` `NEW`
1. [上海迪士尼否认起火但现场浓烟弥漫](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%90%A6%E8%AE%A4%E8%B5%B7%E7%81%AB%E4%BD%86%E7%8E%B0%E5%9C%BA%E6%B5%93%E7%83%9F%E5%BC%A5%E6%BC%AB%23) `211.1K 🔥` `NEW`
1. [徐艺洋个人品牌多次使用小海豚元素](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E4%B8%AA%E4%BA%BA%E5%93%81%E7%89%8C%E5%A4%9A%E6%AC%A1%E4%BD%BF%E7%94%A8%E5%B0%8F%E6%B5%B7%E8%B1%9A%E5%85%83%E7%B4%A0%23) `211.1K 🔥` `NEW`
1. [美人心计 我赢了也这么胡说八道](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BA%BA%E5%BF%83%E8%AE%A1%20%E6%88%91%E8%B5%A2%E4%BA%86%E4%B9%9F%E8%BF%99%E4%B9%88%E8%83%A1%E8%AF%B4%E5%85%AB%E9%81%93%23) `210.8K 🔥` `NEW`
1. [大衣哥因频繁被举报回老家种地](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%A1%A3%E5%93%A5%E5%9B%A0%E9%A2%91%E7%B9%81%E8%A2%AB%E4%B8%BE%E6%8A%A5%E5%9B%9E%E8%80%81%E5%AE%B6%E7%A7%8D%E5%9C%B0%23) `210.5K 🔥` `NEW`
1. [韩国真有那么不堪吗](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%9C%9F%E6%9C%89%E9%82%A3%E4%B9%88%E4%B8%8D%E5%A0%AA%E5%90%97%23) `210.4K 🔥` `NEW`
1. [北京对单身女性有多友好](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%AF%B9%E5%8D%95%E8%BA%AB%E5%A5%B3%E6%80%A7%E6%9C%89%E5%A4%9A%E5%8F%8B%E5%A5%BD%23) `210.2K 🔥` `NEW`
1. [建议女生慎买iPhoneDuo](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A5%B3%E7%94%9F%E6%85%8E%E4%B9%B0iPhoneDuo%23) `208.1K 🔥` `NEW`
1. [苹果被疑走向雪崩](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E8%A2%AB%E7%96%91%E8%B5%B0%E5%90%91%E9%9B%AA%E5%B4%A9%23) `202.9K 🔥` `NEW`
1. [新疆网红被热巴娜扎震惊到](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E7%BD%91%E7%BA%A2%E8%A2%AB%E7%83%AD%E5%B7%B4%E5%A8%9C%E6%89%8E%E9%9C%87%E6%83%8A%E5%88%B0%23) `199.3K 🔥` `NEW`
1. [姆巴佩凯恩亚马尔竞逐金球](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%87%AF%E6%81%A9%E4%BA%9A%E9%A9%AC%E5%B0%94%E7%AB%9E%E9%80%90%E9%87%91%E7%90%83%23) `196.5K 🔥` `NEW`
1. [上海男篮vs广东男篮](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B7%E7%AF%AEvs%E5%B9%BF%E4%B8%9C%E7%94%B7%E7%AF%AE%23) `194.3K 🔥` `NEW`
1. [39岁网红查出肝癌到离世只有9个月](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E7%BD%91%E7%BA%A2%E6%9F%A5%E5%87%BA%E8%82%9D%E7%99%8C%E5%88%B0%E7%A6%BB%E4%B8%96%E5%8F%AA%E6%9C%899%E4%B8%AA%E6%9C%88%23) `187.8K 🔥` `NEW`
1. [代入王子璇视角真的力竭了](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E5%85%A5%E7%8E%8B%E5%AD%90%E7%92%87%E8%A7%86%E8%A7%92%E7%9C%9F%E7%9A%84%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `182.5K 🔥` `NEW`
1. [徐若晗文案文笔](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%E6%96%87%E6%A1%88%E6%96%87%E7%AC%94%23) `172.3K 🔥` `NEW`
1. [Duro是Meiko粉丝](https://s.weibo.com/weibo?q=%23Duro%E6%98%AFMeiko%E7%B2%89%E4%B8%9D%23) `153.7K 🔥` `NEW`
1. [年轻时为你写的歌 恐怕你早已忘了吧](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E6%97%B6%E4%B8%BA%E4%BD%A0%E5%86%99%E7%9A%84%E6%AD%8C%20%E6%81%90%E6%80%95%E4%BD%A0%E6%97%A9%E5%B7%B2%E5%BF%98%E4%BA%86%E5%90%A7%23) `134.9K 🔥` `NEW`
1. [卤肉饭不准卖饭当事方成被执行人](https://s.weibo.com/weibo?q=%23%E5%8D%A4%E8%82%89%E9%A5%AD%E4%B8%8D%E5%87%86%E5%8D%96%E9%A5%AD%E5%BD%93%E4%BA%8B%E6%96%B9%E6%88%90%E8%A2%AB%E6%89%A7%E8%A1%8C%E4%BA%BA%23) `134.9K 🔥` `NEW`
1. [8旬老人称因换保姆被女儿冷暴力](https://s.weibo.com/weibo?q=%238%E6%97%AC%E8%80%81%E4%BA%BA%E7%A7%B0%E5%9B%A0%E6%8D%A2%E4%BF%9D%E5%A7%86%E8%A2%AB%E5%A5%B3%E5%84%BF%E5%86%B7%E6%9A%B4%E5%8A%9B%23) `134.9K 🔥` `NEW`
1. [泰山机器狗往山顶运物资](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%B1%B1%E6%9C%BA%E5%99%A8%E7%8B%97%E5%BE%80%E5%B1%B1%E9%A1%B6%E8%BF%90%E7%89%A9%E8%B5%84%23) `134.8K 🔥` `NEW`
1. [马嘉祺 有回声](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%20%E6%9C%89%E5%9B%9E%E5%A3%B0%23) `134.8K 🔥` `NEW`
1. [用港剧配音打开嫁金钗](https://s.weibo.com/weibo?q=%23%E7%94%A8%E6%B8%AF%E5%89%A7%E9%85%8D%E9%9F%B3%E6%89%93%E5%BC%80%E5%AB%81%E9%87%91%E9%92%97%23) `120.6K 🔥` `NEW`
1. [魏娆将皇后拉下马为碧桃报仇](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A8%86%E5%B0%86%E7%9A%87%E5%90%8E%E6%8B%89%E4%B8%8B%E9%A9%AC%E4%B8%BA%E7%A2%A7%E6%A1%83%E6%8A%A5%E4%BB%87%23) `119.3K 🔥` `NEW`
1. [县委书记被扔下水舆论为何一片叫好](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%A2%AB%E6%89%94%E4%B8%8B%E6%B0%B4%E8%88%86%E8%AE%BA%E4%B8%BA%E4%BD%95%E4%B8%80%E7%89%87%E5%8F%AB%E5%A5%BD%23) `118.0K 🔥` `NEW`
1. [安踏FILA特步卖不动了](https://s.weibo.com/weibo?q=%23%E5%AE%89%E8%B8%8FFILA%E7%89%B9%E6%AD%A5%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `118.0K 🔥` `NEW`
1. [皇马管理层送樊振东巴萨官方赠票](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E7%AE%A1%E7%90%86%E5%B1%82%E9%80%81%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%B7%B4%E8%90%A8%E5%AE%98%E6%96%B9%E8%B5%A0%E7%A5%A8%23) `117.3K 🔥` `NEW`
1. [LPL大概率又要内战了](https://s.weibo.com/weibo?q=%23LPL%E5%A4%A7%E6%A6%82%E7%8E%87%E5%8F%88%E8%A6%81%E5%86%85%E6%88%98%E4%BA%86%23) `113.0K 🔥` `NEW`
1. [奥迪中国四环标和字母标正式分家](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%AA%E4%B8%AD%E5%9B%BD%E5%9B%9B%E7%8E%AF%E6%A0%87%E5%92%8C%E5%AD%97%E6%AF%8D%E6%A0%87%E6%AD%A3%E5%BC%8F%E5%88%86%E5%AE%B6%23) `107.5K 🔥` `NEW`
1. [星巴克不欠谁的](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%B7%B4%E5%85%8B%E4%B8%8D%E6%AC%A0%E8%B0%81%E7%9A%84%23) `99.6K 🔥` `NEW`
1. [不去旅游真的会后悔吗](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%8E%BB%E6%97%85%E6%B8%B8%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%90%8E%E6%82%94%E5%90%97%23) `99.6K 🔥` `NEW`

Updated at 2026-10-26 22:11:42

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
