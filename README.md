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

1. [红果短剧自砍摇钱树](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E8%87%AA%E7%A0%8D%E6%91%87%E9%92%B1%E6%A0%91%23) `1.7M 🔥` `NEW`
1. [芭莎盛典红毯](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E8%8E%8E%E7%9B%9B%E5%85%B8%E7%BA%A2%E6%AF%AF%23) `910.9K 🔥` `NEW`
1. [他们走过二万五千里换来今天](https://s.weibo.com/weibo?q=%23%E4%BB%96%E4%BB%AC%E8%B5%B0%E8%BF%87%E4%BA%8C%E4%B8%87%E4%BA%94%E5%8D%83%E9%87%8C%E6%8D%A2%E6%9D%A5%E4%BB%8A%E5%A4%A9%23) `754.7K 🔥` `NEW`
1. [一生断句的中国人](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%94%9F%E6%96%AD%E5%8F%A5%E7%9A%84%E4%B8%AD%E5%9B%BD%E4%BA%BA%23) `608.9K 🔥` `NEW`
1. [香港查获多支尸皮针](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%9F%A5%E8%8E%B7%E5%A4%9A%E6%94%AF%E5%B0%B8%E7%9A%AE%E9%92%88%23) `460.8K 🔥` `NEW`
1. [小城良方收视冲顶](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E6%94%B6%E8%A7%86%E5%86%B2%E9%A1%B6%23) `387.0K 🔥` `NEW`
1. [祝绪丹天选浪漫圣体](https://s.weibo.com/weibo?q=%23%E7%A5%9D%E7%BB%AA%E4%B8%B9%E5%A4%A9%E9%80%89%E6%B5%AA%E6%BC%AB%E5%9C%A3%E4%BD%93%23) `344.8K 🔥` `NEW`
1. [12306回应女子迟到错过检票失控哀求](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E8%BF%9F%E5%88%B0%E9%94%99%E8%BF%87%E6%A3%80%E7%A5%A8%E5%A4%B1%E6%8E%A7%E5%93%80%E6%B1%82%23) `339.0K 🔥` `NEW`
1. [小城良方开播口碑](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%BC%80%E6%92%AD%E5%8F%A3%E7%A2%91%23) `248.2K 🔥` `NEW`
1. [中国驻菲律宾大使馆硬刚](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A9%BB%E8%8F%B2%E5%BE%8B%E5%AE%BE%E5%A4%A7%E4%BD%BF%E9%A6%86%E7%A1%AC%E5%88%9A%23) `247.4K 🔥` `NEW`
1. [宇树发布H2-X功夫传奇](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%8F%91%E5%B8%83H2-X%E5%8A%9F%E5%A4%AB%E4%BC%A0%E5%A5%87%23) `246.6K 🔥` `NEW`
1. [杨幂压轴](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%8E%8B%E8%BD%B4%23) `245.3K 🔥` `NEW`
1. [罗晋和唐嫣讨论女儿画的画](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%99%8B%E5%92%8C%E5%94%90%E5%AB%A3%E8%AE%A8%E8%AE%BA%E5%A5%B3%E5%84%BF%E7%94%BB%E7%9A%84%E7%94%BB%23) `244.5K 🔥` `NEW`
1. [曝自费高定艺人把品牌pr气坏了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%87%AA%E8%B4%B9%E9%AB%98%E5%AE%9A%E8%89%BA%E4%BA%BA%E6%8A%8A%E5%93%81%E7%89%8Cpr%E6%B0%94%E5%9D%8F%E4%BA%86%23) `243.0K 🔥` `NEW`
1. [田曦薇 晋江式演技](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E6%99%8B%E6%B1%9F%E5%BC%8F%E6%BC%94%E6%8A%80%23) `241.7K 🔥` `NEW`
1. [妈妈去世后翻到她学的化学单词](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%8E%BB%E4%B8%96%E5%90%8E%E7%BF%BB%E5%88%B0%E5%A5%B9%E5%AD%A6%E7%9A%84%E5%8C%96%E5%AD%A6%E5%8D%95%E8%AF%8D%23) `241.0K 🔥` `NEW`
1. [ES高定暗夜玫瑰裙](https://s.weibo.com/weibo?q=%23ES%E9%AB%98%E5%AE%9A%E6%9A%97%E5%A4%9C%E7%8E%AB%E7%91%B0%E8%A3%99%23) `240.0K 🔥` `NEW`
1. [国乒男团3比0伊朗](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A23%E6%AF%940%E4%BC%8A%E6%9C%97%23) `238.5K 🔥` `NEW`
1. [京东校园之星陈楚念傩舞舞台](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E6%A0%A1%E5%9B%AD%E4%B9%8B%E6%98%9F%E9%99%88%E6%A5%9A%E5%BF%B5%E5%82%A9%E8%88%9E%E8%88%9E%E5%8F%B0%23) `237.3K 🔥` `NEW`
1. [迪丽热巴代言阿道夫](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BB%A3%E8%A8%80%E9%98%BF%E9%81%93%E5%A4%AB%23) `235.6K 🔥` `NEW`
1. [为什么火车还没开就停止检票了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%81%AB%E8%BD%A6%E8%BF%98%E6%B2%A1%E5%BC%80%E5%B0%B1%E5%81%9C%E6%AD%A2%E6%A3%80%E7%A5%A8%E4%BA%86%23) `235.2K 🔥` `NEW`
1. [芭莎红毯生图](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E8%8E%8E%E7%BA%A2%E6%AF%AF%E7%94%9F%E5%9B%BE%23) `233.5K 🔥` `NEW`
1. [小城良方](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%23) `231.1K 🔥` `NEW`
1. [红果短剧收费担忧](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E6%94%B6%E8%B4%B9%E6%8B%85%E5%BF%A7%23) `230.4K 🔥` `NEW`
1. [祖海高定压轴款](https://s.weibo.com/weibo?q=%23%E7%A5%96%E6%B5%B7%E9%AB%98%E5%AE%9A%E5%8E%8B%E8%BD%B4%E6%AC%BE%23) `229.1K 🔥` `NEW`
1. [广东一小区疑出现大量骨灰房](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E4%B8%80%E5%B0%8F%E5%8C%BA%E7%96%91%E5%87%BA%E7%8E%B0%E5%A4%A7%E9%87%8F%E9%AA%A8%E7%81%B0%E6%88%BF%23) `228.2K 🔥` `NEW`
1. [白鹿开毯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BC%80%E6%AF%AF%23) `227.5K 🔥` `NEW`
1. [官方通报女子迟到错过检票](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E8%BF%9F%E5%88%B0%E9%94%99%E8%BF%87%E6%A3%80%E7%A5%A8%23) `225.3K 🔥` `NEW`
1. [K77赛季报销](https://s.weibo.com/weibo?q=%23K77%E8%B5%9B%E5%AD%A3%E6%8A%A5%E9%94%80%23) `225.1K 🔥` `NEW`
1. [毛不易称结婚越来越不意味着什么](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%8D%E6%98%93%E7%A7%B0%E7%BB%93%E5%A9%9A%E8%B6%8A%E6%9D%A5%E8%B6%8A%E4%B8%8D%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `222.1K 🔥` `NEW`
1. [梅尼耶吐槽妻子身上都是添加剂](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%B0%BC%E8%80%B6%E5%90%90%E6%A7%BD%E5%A6%BB%E5%AD%90%E8%BA%AB%E4%B8%8A%E9%83%BD%E6%98%AF%E6%B7%BB%E5%8A%A0%E5%89%82%23) `221.4K 🔥` `NEW`
1. [白鹿芭莎第二套](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%8A%AD%E8%8E%8E%E7%AC%AC%E4%BA%8C%E5%A5%97%23) `219.7K 🔥` `NEW`
1. [罗晋称呼唐嫣我太太](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%99%8B%E7%A7%B0%E5%91%BC%E5%94%90%E5%AB%A3%E6%88%91%E5%A4%AA%E5%A4%AA%23) `218.5K 🔥` `NEW`
1. [红果短剧回应下架金币功能](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%9B%9E%E5%BA%94%E4%B8%8B%E6%9E%B6%E9%87%91%E5%B8%81%E5%8A%9F%E8%83%BD%23) `218.3K 🔥` `NEW`
1. [甲状腺癌高危因素并非熬夜和压力](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E7%99%8C%E9%AB%98%E5%8D%B1%E5%9B%A0%E7%B4%A0%E5%B9%B6%E9%9D%9E%E7%86%AC%E5%A4%9C%E5%92%8C%E5%8E%8B%E5%8A%9B%23) `214.8K 🔥` `NEW`
1. [张小斐 救场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%20%E6%95%91%E5%9C%BA%23) `212.2K 🔥` `NEW`
1. [蔡琳回应高梓淇新感情](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%90%B3%E5%9B%9E%E5%BA%94%E9%AB%98%E6%A2%93%E6%B7%87%E6%96%B0%E6%84%9F%E6%83%85%23) `201.6K 🔥` `NEW`
1. [三位顶流花芭莎红毯都穿了黑色礼服](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BD%8D%E9%A1%B6%E6%B5%81%E8%8A%B1%E8%8A%AD%E8%8E%8E%E7%BA%A2%E6%AF%AF%E9%83%BD%E7%A9%BF%E4%BA%86%E9%BB%91%E8%89%B2%E7%A4%BC%E6%9C%8D%23) `185.4K 🔥` `NEW`
1. [小城良方开局4集28广](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%BC%80%E5%B1%804%E9%9B%8628%E5%B9%BF%23) `174.9K 🔥` `NEW`
1. [以为拼好床已经够离谱了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E6%8B%BC%E5%A5%BD%E5%BA%8A%E5%B7%B2%E7%BB%8F%E5%A4%9F%E7%A6%BB%E8%B0%B1%E4%BA%86%23) `170.8K 🔥` `NEW`
1. [布伦森19中6](https://s.weibo.com/weibo?q=%23%E5%B8%83%E4%BC%A6%E6%A3%AE19%E4%B8%AD6%23) `166.8K 🔥` `NEW`
1. [梓渝回应演唱会嘉宾田栩宁](https://s.weibo.com/weibo?q=%23%E6%A2%93%E6%B8%9D%E5%9B%9E%E5%BA%94%E6%BC%94%E5%94%B1%E4%BC%9A%E5%98%89%E5%AE%BE%E7%94%B0%E6%A0%A9%E5%AE%81%23) `166.5K 🔥` `NEW`
1. [感觉低精力人设很自摸](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E4%BD%8E%E7%B2%BE%E5%8A%9B%E4%BA%BA%E8%AE%BE%E5%BE%88%E8%87%AA%E6%91%B8%23) `157.1K 🔥` `NEW`
1. [何以笙箫默居然还有售后](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%BB%A5%E7%AC%99%E7%AE%AB%E9%BB%98%E5%B1%85%E7%84%B6%E8%BF%98%E6%9C%89%E5%94%AE%E5%90%8E%23) `140.6K 🔥` `NEW`
1. [Zeka说Zeus打369压力大](https://s.weibo.com/weibo?q=%23Zeka%E8%AF%B4Zeus%E6%89%93369%E5%8E%8B%E5%8A%9B%E5%A4%A7%23) `140.5K 🔥` `NEW`
1. [红果短剧将下线金币功能](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%B0%86%E4%B8%8B%E7%BA%BF%E9%87%91%E5%B8%81%E5%8A%9F%E8%83%BD%23) `140.3K 🔥` `NEW`
1. [武志红李雪互撕商业收入风险](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%BF%97%E7%BA%A2%E6%9D%8E%E9%9B%AA%E4%BA%92%E6%92%95%E5%95%86%E4%B8%9A%E6%94%B6%E5%85%A5%E9%A3%8E%E9%99%A9%23) `140.0K 🔥` `NEW`
1. [陶白白前妻说选择陶白白是她眼光差](https://s.weibo.com/weibo?q=%23%E9%99%B6%E7%99%BD%E7%99%BD%E5%89%8D%E5%A6%BB%E8%AF%B4%E9%80%89%E6%8B%A9%E9%99%B6%E7%99%BD%E7%99%BD%E6%98%AF%E5%A5%B9%E7%9C%BC%E5%85%89%E5%B7%AE%23) `139.8K 🔥` `NEW`
1. [台独给周杰伦扣帽子国台办回应](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E7%8B%AC%E7%BB%99%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%89%A3%E5%B8%BD%E5%AD%90%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%23) `224.0K 🔥` `-81%`
1. [女子迟到错过检票失控哀求工作人员](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%9F%E5%88%B0%E9%94%99%E8%BF%87%E6%A3%80%E7%A5%A8%E5%A4%B1%E6%8E%A7%E5%93%80%E6%B1%82%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%23) `166.0K 🔥` `-63%`

Updated at 2026-10-21 20:48:44

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
