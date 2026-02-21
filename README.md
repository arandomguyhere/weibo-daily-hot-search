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

1. [马年春节新三样 (Three new things for the Spring Festival in the Year of the Horse)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%98%A5%E8%8A%82%E6%96%B0%E4%B8%89%E6%A0%B7%23) `642.4K 🔥` `NEW`
1. [刘涛演妈祖 三次圣杯](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E6%BC%94%E5%A6%88%E7%A5%96%20%E4%B8%89%E6%AC%A1%E5%9C%A3%E6%9D%AF%23) `453.0K 🔥` `NEW`
1. [王濛别嗦了蜜了换衣服去比赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%88%AB%E5%97%A6%E4%BA%86%E8%9C%9C%E4%BA%86%E6%8D%A2%E8%A1%A3%E6%9C%8D%E5%8E%BB%E6%AF%94%E8%B5%9B%23) `245.5K 🔥` `NEW`
1. [大爷编造商家卖假爆竹谣言被罚](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E7%BC%96%E9%80%A0%E5%95%86%E5%AE%B6%E5%8D%96%E5%81%87%E7%88%86%E7%AB%B9%E8%B0%A3%E8%A8%80%E8%A2%AB%E7%BD%9A%23) `227.4K 🔥` `NEW`
1. [中韩体坛最唯美的爱情](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%9F%A9%E4%BD%93%E5%9D%9B%E6%9C%80%E5%94%AF%E7%BE%8E%E7%9A%84%E7%88%B1%E6%83%85%23) `180.7K 🔥` `NEW`
1. [姐姐回应22岁小伙烫大波浪被质疑](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E5%9B%9E%E5%BA%9422%E5%B2%81%E5%B0%8F%E4%BC%99%E7%83%AB%E5%A4%A7%E6%B3%A2%E6%B5%AA%E8%A2%AB%E8%B4%A8%E7%96%91%23) `159.6K 🔥` `NEW`
1. [特朗普访华时间](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%97%B6%E9%97%B4%23) `125.4K 🔥` `NEW`
1. [曝那艺娜偷税漏税](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%82%A3%E8%89%BA%E5%A8%9C%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E%23) `125.0K 🔥` `NEW`
1. [姚晨丢掉妈妈过期药品被骂了3天](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E6%99%A8%E4%B8%A2%E6%8E%89%E5%A6%88%E5%A6%88%E8%BF%87%E6%9C%9F%E8%8D%AF%E5%93%81%E8%A2%AB%E9%AA%82%E4%BA%863%E5%A4%A9%23) `124.8K 🔥` `NEW`
1. [医院回应女子死亡系自身过敏](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E6%AD%BB%E4%BA%A1%E7%B3%BB%E8%87%AA%E8%BA%AB%E8%BF%87%E6%95%8F%23) `123.7K 🔥` `NEW`
1. [不让江山官宣杨洋 (Don’t let Jiangshan officials announce Yang Yang)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%E5%AE%98%E5%AE%A3%E6%9D%A8%E6%B4%8B%23) `123.1K 🔥` `NEW`
1. [阿勒泰 刘耀文宋亚轩](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%8B%92%E6%B3%B0%20%E5%88%98%E8%80%80%E6%96%87%E5%AE%8B%E4%BA%9A%E8%BD%A9%23) `122.0K 🔥` `NEW`
1. [牢A解释中国人游泳夺冠美国人破防](https://s.weibo.com/weibo?q=%23%E7%89%A2A%E8%A7%A3%E9%87%8A%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B8%B8%E6%B3%B3%E5%A4%BA%E5%86%A0%E7%BE%8E%E5%9B%BD%E4%BA%BA%E7%A0%B4%E9%98%B2%23) `122.0K 🔥` `NEW`
1. [闭眼睡不着算熬夜吗](https://s.weibo.com/weibo?q=%23%E9%97%AD%E7%9C%BC%E7%9D%A1%E4%B8%8D%E7%9D%80%E7%AE%97%E7%86%AC%E5%A4%9C%E5%90%97%23) `122.0K 🔥` `NEW`
1. [大年初五为啥叫破五](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%BA%94%E4%B8%BA%E5%95%A5%E5%8F%AB%E7%A0%B4%E4%BA%94%23) `121.8K 🔥` `NEW`
1. [齐天大圣烟花](https://s.weibo.com/weibo?q=%23%E9%BD%90%E5%A4%A9%E5%A4%A7%E5%9C%A3%E7%83%9F%E8%8A%B1%23) `99.9K 🔥` `NEW`
1. [古言三巨头](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E8%A8%80%E4%B8%89%E5%B7%A8%E5%A4%B4%23) `99.9K 🔥` `NEW`
1. [关晓彤我长大了不能被骗了](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%88%91%E9%95%BF%E5%A4%A7%E4%BA%86%E4%B8%8D%E8%83%BD%E8%A2%AB%E9%AA%97%E4%BA%86%23) `99.9K 🔥` `NEW`
1. [王心迪追徐梦桃很有韧劲](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BF%83%E8%BF%AA%E8%BF%BD%E5%BE%90%E6%A2%A6%E6%A1%83%E5%BE%88%E6%9C%89%E9%9F%A7%E5%8A%B2%23) `98.3K 🔥` `NEW`
1. [黄晓明红包](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E7%BA%A2%E5%8C%85%23) `85.4K 🔥` `NEW`
1. [慈母多败咪 (A loving mother often fails)](https://s.weibo.com/weibo?q=%23%E6%85%88%E6%AF%8D%E5%A4%9A%E8%B4%A5%E5%92%AA%23) `84.0K 🔥` `NEW`
1. [人形机器人](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `68.1K 🔥` `NEW`
1. [你以为的洁癖vs真正的洁癖](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%A5%E4%B8%BA%E7%9A%84%E6%B4%81%E7%99%96vs%E7%9C%9F%E6%AD%A3%E7%9A%84%E6%B4%81%E7%99%96%23) `67.8K 🔥` `NEW`
1. [本届冬奥最戏剧的一场比赛](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%B1%8A%E5%86%AC%E5%A5%A5%E6%9C%80%E6%88%8F%E5%89%A7%E7%9A%84%E4%B8%80%E5%9C%BA%E6%AF%94%E8%B5%9B%23) `61.7K 🔥` `NEW`
1. [过年剩菜万能公式](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E5%89%A9%E8%8F%9C%E4%B8%87%E8%83%BD%E5%85%AC%E5%BC%8F%23) `61.4K 🔥` `NEW`
1. [原来小时候学英语用的百年老方](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%B0%8F%E6%97%B6%E5%80%99%E5%AD%A6%E8%8B%B1%E8%AF%AD%E7%94%A8%E7%9A%84%E7%99%BE%E5%B9%B4%E8%80%81%E6%96%B9%23) `59.4K 🔥` `NEW`
1. [王濛说签生死状复出 (Wang Meng said he would sign a life and death certificate to come back)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E8%AF%B4%E7%AD%BE%E7%94%9F%E6%AD%BB%E7%8A%B6%E5%A4%8D%E5%87%BA%23) `1.1M 🔥` `+36%`
1. [飞驰人生3五天破20亿](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%E4%BA%94%E5%A4%A9%E7%A0%B420%E4%BA%BF%23) `125.6K 🔥` `+39%`
1. [泡泡玛特创始人送小酒窝盲盒](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E5%88%9B%E5%A7%8B%E4%BA%BA%E9%80%81%E5%B0%8F%E9%85%92%E7%AA%9D%E7%9B%B2%E7%9B%92%23) `124.2K 🔥` `+35%`
1. [中国代表重申日本没资格要求入常](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BB%A3%E8%A1%A8%E9%87%8D%E7%94%B3%E6%97%A5%E6%9C%AC%E6%B2%A1%E8%B5%84%E6%A0%BC%E8%A6%81%E6%B1%82%E5%85%A5%E5%B8%B8%23) `82.5K 🔥`
1. [王濛直播](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%9B%B4%E6%92%AD%23) `71.2K 🔥`
1. [不让江山 (Don't give way to the country)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%23) `69.2K 🔥`
1. [迎财神 (Welcome the God of Wealth)](https://s.weibo.com/weibo?q=%23%E8%BF%8E%E8%B4%A2%E7%A5%9E%23) `799.5K 🔥` `-28%`
1. [那艺娜劣迹艺人 (Na Yina's evil artist)](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%89%BA%E5%A8%9C%E5%8A%A3%E8%BF%B9%E8%89%BA%E4%BA%BA%23) `237.0K 🔥` `-63%`
1. [王濛现场观赛生气了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%8E%B0%E5%9C%BA%E8%A7%82%E8%B5%9B%E7%94%9F%E6%B0%94%E4%BA%86%23) `180.5K 🔥` `-69%`
1. [一觉醒来特朗普改新打法了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%A7%89%E9%86%92%E6%9D%A5%E7%89%B9%E6%9C%97%E6%99%AE%E6%94%B9%E6%96%B0%E6%89%93%E6%B3%95%E4%BA%86%23) `123.9K 🔥` `-52%`
1. [正月初五接财神 (Receive the God of Wealth on the fifth day of the first lunar month)](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E6%9C%88%E5%88%9D%E4%BA%94%E6%8E%A5%E8%B4%A2%E7%A5%9E%23) `122.8K 🔥` `-64%`
1. [方大同才二十三MV](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%A4%A7%E5%90%8C%E6%89%8D%E4%BA%8C%E5%8D%81%E4%B8%89MV%23) `122.3K 🔥` `-54%`
1. [苏翊鸣回复徐梦桃小鸣酱随500](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%9B%9E%E5%A4%8D%E5%BE%90%E6%A2%A6%E6%A1%83%E5%B0%8F%E9%B8%A3%E9%85%B1%E9%9A%8F500%23) `122.1K 🔥` `-48%`
1. [金度勋疑似骚扰女艺人](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%BA%A6%E5%8B%8B%E7%96%91%E4%BC%BC%E9%AA%9A%E6%89%B0%E5%A5%B3%E8%89%BA%E4%BA%BA%23) `108.8K 🔥` `-21%`
1. [沈娇娇是个眼圆脸圆的甜妹](https://s.weibo.com/weibo?q=%23%E6%B2%88%E5%A8%87%E5%A8%87%E6%98%AF%E4%B8%AA%E7%9C%BC%E5%9C%86%E8%84%B8%E5%9C%86%E7%9A%84%E7%94%9C%E5%A6%B9%23) `107.3K 🔥` `-61%`
1. [霍启刚还是忍不住秀恩爱](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%88%9A%E8%BF%98%E6%98%AF%E5%BF%8D%E4%B8%8D%E4%BD%8F%E7%A7%80%E6%81%A9%E7%88%B1%23) `96.9K 🔥` `-66%`
1. [当我问亲戚们存了多少钱](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E9%97%AE%E4%BA%B2%E6%88%9A%E4%BB%AC%E5%AD%98%E4%BA%86%E5%A4%9A%E5%B0%91%E9%92%B1%23) `93.6K 🔥` `-38%`
1. [将门毒后不是大ip是巨ip (After Jiangmen was poisoned, it was not a big IP but a giant IP.)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%E4%B8%8D%E6%98%AF%E5%A4%A7ip%E6%98%AF%E5%B7%A8ip%23) `84.8K 🔥` `-36%`
1. [老一辈起情侣名没轻没重](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%80%E8%BE%88%E8%B5%B7%E6%83%85%E4%BE%A3%E5%90%8D%E6%B2%A1%E8%BD%BB%E6%B2%A1%E9%87%8D%23) `75.7K 🔥` `-73%`
1. [这种致癌物在春节很常见 (This carcinogen is very common during the Spring Festival)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E8%87%B4%E7%99%8C%E7%89%A9%E5%9C%A8%E6%98%A5%E8%8A%82%E5%BE%88%E5%B8%B8%E8%A7%81%23) `72.1K 🔥` `-47%`
1. [巧克力生煎](https://s.weibo.com/weibo?q=%23%E5%B7%A7%E5%85%8B%E5%8A%9B%E7%94%9F%E7%85%8E%23) `63.6K 🔥` `-47%`
1. [林孝埈接受韩媒采访回应无奖牌](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E6%8E%A5%E5%8F%97%E9%9F%A9%E5%AA%92%E9%87%87%E8%AE%BF%E5%9B%9E%E5%BA%94%E6%97%A0%E5%A5%96%E7%89%8C%23) `59.5K 🔥` `-62%`
1. [谷爱凌李方慧等U型场地冲金](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%9D%8E%E6%96%B9%E6%85%A7%E7%AD%89U%E5%9E%8B%E5%9C%BA%E5%9C%B0%E5%86%B2%E9%87%91%23) `58.9K 🔥` `-45%`
1. [五路财神](https://s.weibo.com/weibo?q=%23%E4%BA%94%E8%B7%AF%E8%B4%A2%E7%A5%9E%23) `58.4K 🔥` `-32%`
1. [财神壁纸](https://s.weibo.com/weibo?q=%23%E8%B4%A2%E7%A5%9E%E5%A3%81%E7%BA%B8%23) `57.9K 🔥` `-55%`

Updated at 2026-02-21 12:19:28

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
