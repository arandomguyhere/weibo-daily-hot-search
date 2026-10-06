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

1. [诺贝尔物理学奖](https://s.weibo.com/weibo?q=%23%E8%AF%BA%E8%B4%9D%E5%B0%94%E7%89%A9%E7%90%86%E5%AD%A6%E5%A5%96%23) `1.2M 🔥` `NEW`
1. [孩子打印作业开销家长直呼扛不住](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E6%89%93%E5%8D%B0%E4%BD%9C%E4%B8%9A%E5%BC%80%E9%94%80%E5%AE%B6%E9%95%BF%E7%9B%B4%E5%91%BC%E6%89%9B%E4%B8%8D%E4%BD%8F%23) `883.6K 🔥` `NEW`
1. [国庆假期返程天气指南](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E5%81%87%E6%9C%9F%E8%BF%94%E7%A8%8B%E5%A4%A9%E6%B0%94%E6%8C%87%E5%8D%97%23) `647.8K 🔥` `NEW`
1. [代露娃你没试上我进公司了](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E4%BD%A0%E6%B2%A1%E8%AF%95%E4%B8%8A%E6%88%91%E8%BF%9B%E5%85%AC%E5%8F%B8%E4%BA%86%23) `534.7K 🔥` `NEW`
1. [韩国博主在延边破大防](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%8D%9A%E4%B8%BB%E5%9C%A8%E5%BB%B6%E8%BE%B9%E7%A0%B4%E5%A4%A7%E9%98%B2%23) `383.6K 🔥` `NEW`
1. [中国人已经对星巴克祛魅](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%B7%B2%E7%BB%8F%E5%AF%B9%E6%98%9F%E5%B7%B4%E5%85%8B%E7%A5%9B%E9%AD%85%23) `382.0K 🔥` `NEW`
1. [ZUIAN美签被卡原因](https://s.weibo.com/weibo?q=%23ZUIAN%E7%BE%8E%E7%AD%BE%E8%A2%AB%E5%8D%A1%E5%8E%9F%E5%9B%A0%23) `377.0K 🔥` `NEW`
1. [蔡天凤母亲当庭失声痛哭](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%A4%A9%E5%87%A4%E6%AF%8D%E4%BA%B2%E5%BD%93%E5%BA%AD%E5%A4%B1%E5%A3%B0%E7%97%9B%E5%93%AD%23) `374.1K 🔥` `NEW`
1. [丁笑滢不想和代露娃有竞争关系](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%AC%91%E6%BB%A2%E4%B8%8D%E6%83%B3%E5%92%8C%E4%BB%A3%E9%9C%B2%E5%A8%83%E6%9C%89%E7%AB%9E%E4%BA%89%E5%85%B3%E7%B3%BB%23) `372.8K 🔥` `NEW`
1. [缅北电诈头目赚1亿要分3成给明家](https://s.weibo.com/weibo?q=%23%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E5%A4%B4%E7%9B%AE%E8%B5%9A1%E4%BA%BF%E8%A6%81%E5%88%863%E6%88%90%E7%BB%99%E6%98%8E%E5%AE%B6%23) `367.5K 🔥` `NEW`
1. [左航穿越南国旗裤子引争议](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AA%E7%A9%BF%E8%B6%8A%E5%8D%97%E5%9B%BD%E6%97%97%E8%A3%A4%E5%AD%90%E5%BC%95%E4%BA%89%E8%AE%AE%23) `365.6K 🔥` `NEW`
1. [粤J2888T车主抵达景区喜提专属车位](https://s.weibo.com/weibo?q=%23%E7%B2%A4J2888T%E8%BD%A6%E4%B8%BB%E6%8A%B5%E8%BE%BE%E6%99%AF%E5%8C%BA%E5%96%9C%E6%8F%90%E4%B8%93%E5%B1%9E%E8%BD%A6%E4%BD%8D%23) `362.3K 🔥` `NEW`
1. [Lisa关车门这下](https://s.weibo.com/weibo?q=%23Lisa%E5%85%B3%E8%BD%A6%E9%97%A8%E8%BF%99%E4%B8%8B%23) `360.1K 🔥` `NEW`
1. [崔晋妈说李勒优之前很单纯](https://s.weibo.com/weibo?q=%23%E5%B4%94%E6%99%8B%E5%A6%88%E8%AF%B4%E6%9D%8E%E5%8B%92%E4%BC%98%E4%B9%8B%E5%89%8D%E5%BE%88%E5%8D%95%E7%BA%AF%23) `274.1K 🔥` `NEW`
1. [范玮琪陈建州去了大S墓地](https://s.weibo.com/weibo?q=%23%E8%8C%83%E7%8E%AE%E7%90%AA%E9%99%88%E5%BB%BA%E5%B7%9E%E5%8E%BB%E4%BA%86%E5%A4%A7S%E5%A2%93%E5%9C%B0%23) `240.3K 🔥` `NEW`
1. [减肥针抑制食欲靠减慢胃排空](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E9%92%88%E6%8A%91%E5%88%B6%E9%A3%9F%E6%AC%B2%E9%9D%A0%E5%87%8F%E6%85%A2%E8%83%83%E6%8E%92%E7%A9%BA%23) `169.5K 🔥` `NEW`
1. [缅北血手印的主人还活着](https://s.weibo.com/weibo?q=%23%E7%BC%85%E5%8C%97%E8%A1%80%E6%89%8B%E5%8D%B0%E7%9A%84%E4%B8%BB%E4%BA%BA%E8%BF%98%E6%B4%BB%E7%9D%80%23) `160.3K 🔥` `NEW`
1. [粤J2888T战绩全网可查](https://s.weibo.com/weibo?q=%23%E7%B2%A4J2888T%E6%88%98%E7%BB%A9%E5%85%A8%E7%BD%91%E5%8F%AF%E6%9F%A5%23) `155.0K 🔥` `NEW`
1. [全球纯燃油车新车销量占比首次跌破50%](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E7%BA%AF%E7%87%83%E6%B2%B9%E8%BD%A6%E6%96%B0%E8%BD%A6%E9%94%80%E9%87%8F%E5%8D%A0%E6%AF%94%E9%A6%96%E6%AC%A1%E8%B7%8C%E7%A0%B450%25%23) `154.5K 🔥` `NEW`
1. [曝邓紫棋结婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%82%93%E7%B4%AB%E6%A3%8B%E7%BB%93%E5%A9%9A%23) `153.8K 🔥` `NEW`
1. [小S与S妈具俊晔去墓地为大S庆冥诞](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E4%B8%8ES%E5%A6%88%E5%85%B7%E4%BF%8A%E6%99%94%E5%8E%BB%E5%A2%93%E5%9C%B0%E4%B8%BA%E5%A4%A7S%E5%BA%86%E5%86%A5%E8%AF%9E%23) `153.6K 🔥` `NEW`
1. [兰香如故不是亲生终究不一样](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E4%B8%8D%E6%98%AF%E4%BA%B2%E7%94%9F%E7%BB%88%E7%A9%B6%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `152.4K 🔥` `NEW`
1. [JDG对战Hero](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98Hero%23) `152.3K 🔥` `NEW`
1. [房车销量大涨](https://s.weibo.com/weibo?q=%23%E6%88%BF%E8%BD%A6%E9%94%80%E9%87%8F%E5%A4%A7%E6%B6%A8%23) `151.8K 🔥` `NEW`
1. [出差一周精致小狗被爸妈养成海胆](https://s.weibo.com/weibo?q=%23%E5%87%BA%E5%B7%AE%E4%B8%80%E5%91%A8%E7%B2%BE%E8%87%B4%E5%B0%8F%E7%8B%97%E8%A2%AB%E7%88%B8%E5%A6%88%E5%85%BB%E6%88%90%E6%B5%B7%E8%83%86%23) `151.4K 🔥` `NEW`
1. [小S发文纪念大S冥诞](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%8F%91%E6%96%87%E7%BA%AA%E5%BF%B5%E5%A4%A7S%E5%86%A5%E8%AF%9E%23) `150.3K 🔥` `NEW`
1. [农村大姨练瑜伽一年惊艳邻居姐妹](https://s.weibo.com/weibo?q=%23%E5%86%9C%E6%9D%91%E5%A4%A7%E5%A7%A8%E7%BB%83%E7%91%9C%E4%BC%BD%E4%B8%80%E5%B9%B4%E6%83%8A%E8%89%B3%E9%82%BB%E5%B1%85%E5%A7%90%E5%A6%B9%23) `149.9K 🔥` `NEW`
1. [园区已停演60元卖活鸡让野兽撕咬](https://s.weibo.com/weibo?q=%23%E5%9B%AD%E5%8C%BA%E5%B7%B2%E5%81%9C%E6%BC%9460%E5%85%83%E5%8D%96%E6%B4%BB%E9%B8%A1%E8%AE%A9%E9%87%8E%E5%85%BD%E6%92%95%E5%92%AC%23) `148.8K 🔥` `NEW`
1. [邓紫棋已经明示了](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E5%B7%B2%E7%BB%8F%E6%98%8E%E7%A4%BA%E4%BA%86%23) `148.5K 🔥` `NEW`
1. [最佳结婚日一酒店门口摆6个拱门](https://s.weibo.com/weibo?q=%23%E6%9C%80%E4%BD%B3%E7%BB%93%E5%A9%9A%E6%97%A5%E4%B8%80%E9%85%92%E5%BA%97%E9%97%A8%E5%8F%A3%E6%91%866%E4%B8%AA%E6%8B%B1%E9%97%A8%23) `147.1K 🔥` `NEW`
1. [曝张婧仪Burberry转YSL](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E5%A9%A7%E4%BB%AABurberry%E8%BD%ACYSL%23) `146.4K 🔥` `NEW`
1. [评论区已经没什么需要补充了](https://s.weibo.com/weibo?q=%23%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%B7%B2%E7%BB%8F%E6%B2%A1%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E8%A1%A5%E5%85%85%E4%BA%86%23) `145.8K 🔥` `NEW`
1. [陈奕恒泡泡更新](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E6%B3%A1%E6%B3%A1%E6%9B%B4%E6%96%B0%23) `145.8K 🔥` `NEW`
1. [睡眠出现这种问题说明你可能老了](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E7%9C%A0%E5%87%BA%E7%8E%B0%E8%BF%99%E7%A7%8D%E9%97%AE%E9%A2%98%E8%AF%B4%E6%98%8E%E4%BD%A0%E5%8F%AF%E8%83%BD%E8%80%81%E4%BA%86%23) `143.6K 🔥` `NEW`
1. [男子无电诈业绩被打割腕自杀](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%97%A0%E7%94%B5%E8%AF%88%E4%B8%9A%E7%BB%A9%E8%A2%AB%E6%89%93%E5%89%B2%E8%85%95%E8%87%AA%E6%9D%80%23) `143.1K 🔥` `NEW`
1. [崔晋关评论](https://s.weibo.com/weibo?q=%23%E5%B4%94%E6%99%8B%E5%85%B3%E8%AF%84%E8%AE%BA%23) `142.6K 🔥` `NEW`
1. [ZUIAN两次面签未通过](https://s.weibo.com/weibo?q=%23ZUIAN%E4%B8%A4%E6%AC%A1%E9%9D%A2%E7%AD%BE%E6%9C%AA%E9%80%9A%E8%BF%87%23) `139.8K 🔥` `NEW`
1. [当你意识到你正在变老](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E6%84%8F%E8%AF%86%E5%88%B0%E4%BD%A0%E6%AD%A3%E5%9C%A8%E5%8F%98%E8%80%81%23) `133.9K 🔥` `NEW`
1. [梓渝登英语街教材](https://s.weibo.com/weibo?q=%23%E6%A2%93%E6%B8%9D%E7%99%BB%E8%8B%B1%E8%AF%AD%E8%A1%97%E6%95%99%E6%9D%90%23) `127.0K 🔥` `NEW`
1. [王一博说期待回酒店卸妆](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%AF%B4%E6%9C%9F%E5%BE%85%E5%9B%9E%E9%85%92%E5%BA%97%E5%8D%B8%E5%A6%86%23) `122.5K 🔥` `NEW`
1. [陈楚生 Oner](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A5%9A%E7%94%9F%20Oner%23) `119.8K 🔥` `NEW`
1. [TES世界赛首发369](https://s.weibo.com/weibo?q=%23TES%E4%B8%96%E7%95%8C%E8%B5%9B%E9%A6%96%E5%8F%91369%23) `118.8K 🔥` `NEW`
1. [残雪领跑诺贝尔文学奖](https://s.weibo.com/weibo?q=%23%E6%AE%8B%E9%9B%AA%E9%A2%86%E8%B7%91%E8%AF%BA%E8%B4%9D%E5%B0%94%E6%96%87%E5%AD%A6%E5%A5%96%23) `115.6K 🔥` `NEW`
1. [萨巴伦卡说被孙颖莎喜欢受宠若惊](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E8%AF%B4%E8%A2%AB%E5%AD%99%E9%A2%96%E8%8E%8E%E5%96%9C%E6%AC%A2%E5%8F%97%E5%AE%A0%E8%8B%A5%E6%83%8A%23) `115.4K 🔥` `NEW`
1. [明家犯罪集团判决书有18万字](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%AE%B6%E7%8A%AF%E7%BD%AA%E9%9B%86%E5%9B%A2%E5%88%A4%E5%86%B3%E4%B9%A6%E6%9C%8918%E4%B8%87%E5%AD%97%23) `113.7K 🔥` `NEW`
1. [缅北电诈用AK47射击逃跑人员](https://s.weibo.com/weibo?q=%23%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E7%94%A8AK47%E5%B0%84%E5%87%BB%E9%80%83%E8%B7%91%E4%BA%BA%E5%91%98%23) `112.2K 🔥` `NEW`
1. [年轻人开始去网红景区领证](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%8E%BB%E7%BD%91%E7%BA%A2%E6%99%AF%E5%8C%BA%E9%A2%86%E8%AF%81%23) `111.2K 🔥` `NEW`
1. [陈楚生刑事民事重拳追责](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A5%9A%E7%94%9F%E5%88%91%E4%BA%8B%E6%B0%91%E4%BA%8B%E9%87%8D%E6%8B%B3%E8%BF%BD%E8%B4%A3%23) `151.1K 🔥` `-58%`
1. [中方放弃谈判直接抓佤邦副总司令](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E6%94%BE%E5%BC%83%E8%B0%88%E5%88%A4%E7%9B%B4%E6%8E%A5%E6%8A%93%E4%BD%A4%E9%82%A6%E5%89%AF%E6%80%BB%E5%8F%B8%E4%BB%A4%23) `148.0K 🔥` `-92%`

Updated at 2026-10-06 18:10:14

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
