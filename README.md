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

1. [白小纯 青稚](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%20%E9%9D%92%E7%A8%9A%23) `1.1M 🔥` `NEW`
1. [Viper BLG语音](https://s.weibo.com/weibo?q=%23Viper%20BLG%E8%AF%AD%E9%9F%B3%23) `1.1M 🔥` `NEW`
1. [新时代全面从严治党伟大成就](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%97%B6%E4%BB%A3%E5%85%A8%E9%9D%A2%E4%BB%8E%E4%B8%A5%E6%B2%BB%E5%85%9A%E4%BC%9F%E5%A4%A7%E6%88%90%E5%B0%B1%23) `1.1M 🔥` `NEW`
1. [京东健康11.11瓜分百万红包](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%81%A5%E5%BA%B711.11%E7%93%9C%E5%88%86%E7%99%BE%E4%B8%87%E7%BA%A2%E5%8C%85%23) `1.1M 🔥` `NEW`
1. [男子会所按摩睡着遭技师侵犯已立案](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BC%9A%E6%89%80%E6%8C%89%E6%91%A9%E7%9D%A1%E7%9D%80%E9%81%AD%E6%8A%80%E5%B8%88%E4%BE%B5%E7%8A%AF%E5%B7%B2%E7%AB%8B%E6%A1%88%23) `1.1M 🔥` `NEW`
1. [披荆斩棘总决赛妆造](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%80%BB%E5%86%B3%E8%B5%9B%E5%A6%86%E9%80%A0%23) `1.0M 🔥` `NEW`
1. [10月A股收官](https://s.weibo.com/weibo?q=%2310%E6%9C%88A%E8%82%A1%E6%94%B6%E5%AE%98%23) `1.0M 🔥` `NEW`
1. [丢100克黄金寻物启事系引流剧本](https://s.weibo.com/weibo?q=%23%E4%B8%A2100%E5%85%8B%E9%BB%84%E9%87%91%E5%AF%BB%E7%89%A9%E5%90%AF%E4%BA%8B%E7%B3%BB%E5%BC%95%E6%B5%81%E5%89%A7%E6%9C%AC%23) `1.0M 🔥` `NEW`
1. [甲硝唑磨粉治鼻炎医生都懵了](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%A1%9D%E5%94%91%E7%A3%A8%E7%B2%89%E6%B2%BB%E9%BC%BB%E7%82%8E%E5%8C%BB%E7%94%9F%E9%83%BD%E6%87%B5%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [周六福涉事门店经理已被刑拘](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%85%AD%E7%A6%8F%E6%B6%89%E4%BA%8B%E9%97%A8%E5%BA%97%E7%BB%8F%E7%90%86%E5%B7%B2%E8%A2%AB%E5%88%91%E6%8B%98%23) `1.0M 🔥` `NEW`
1. [张萌 原生脸疯狂顶号](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%20%E5%8E%9F%E7%94%9F%E8%84%B8%E7%96%AF%E7%8B%82%E9%A1%B6%E5%8F%B7%23) `997.4K 🔥` `NEW`
1. [一台电车跑46万公里是什么水平](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8F%B0%E7%94%B5%E8%BD%A6%E8%B7%9146%E4%B8%87%E5%85%AC%E9%87%8C%E6%98%AF%E4%BB%80%E4%B9%88%E6%B0%B4%E5%B9%B3%23) `975.7K 🔥` `NEW`
1. [孟子义承认尚公主播出不及预期](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%89%BF%E8%AE%A4%E5%B0%9A%E5%85%AC%E4%B8%BB%E6%92%AD%E5%87%BA%E4%B8%8D%E5%8F%8A%E9%A2%84%E6%9C%9F%23) `961.0K 🔥` `NEW`
1. [厉娜 不扫咋走](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%20%E4%B8%8D%E6%89%AB%E5%92%8B%E8%B5%B0%23) `648.2K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `463.8K 🔥` `NEW`
1. [孙颖莎选择不让分0比0迎战勒布伦](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%80%89%E6%8B%A9%E4%B8%8D%E8%AE%A9%E5%88%860%E6%AF%940%E8%BF%8E%E6%88%98%E5%8B%92%E5%B8%83%E4%BC%A6%23) `382.4K 🔥` `NEW`
1. [陈芋汐成熟的不像21岁](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%8A%8B%E6%B1%90%E6%88%90%E7%86%9F%E7%9A%84%E4%B8%8D%E5%83%8F21%E5%B2%81%23) `343.6K 🔥` `NEW`
1. [华为高管反问干实验为何不是一天](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%AB%98%E7%AE%A1%E5%8F%8D%E9%97%AE%E5%B9%B2%E5%AE%9E%E9%AA%8C%E4%B8%BA%E4%BD%95%E4%B8%8D%E6%98%AF%E4%B8%80%E5%A4%A9%23) `285.7K 🔥` `NEW`
1. [这个双11我为开板花了多少钱](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E5%8F%8C11%E6%88%91%E4%B8%BA%E5%BC%80%E6%9D%BF%E8%8A%B1%E4%BA%86%E5%A4%9A%E5%B0%91%E9%92%B1%23) `262.1K 🔥` `NEW`
1. [姆巴佩曾代言饮品清理剩余库存](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%9B%BE%E4%BB%A3%E8%A8%80%E9%A5%AE%E5%93%81%E6%B8%85%E7%90%86%E5%89%A9%E4%BD%99%E5%BA%93%E5%AD%98%23) `259.8K 🔥` `NEW`
1. [厉娜说喜欢许飞](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E8%AF%B4%E5%96%9C%E6%AC%A2%E8%AE%B8%E9%A3%9E%23) `259.8K 🔥` `NEW`
1. [姜乘澜结婚了](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E7%BB%93%E5%A9%9A%E4%BA%86%23) `259.7K 🔥` `NEW`
1. [宋仲基对二婚妻子称呼那家伙](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BB%B2%E5%9F%BA%E5%AF%B9%E4%BA%8C%E5%A9%9A%E5%A6%BB%E5%AD%90%E7%A7%B0%E5%91%BC%E9%82%A3%E5%AE%B6%E4%BC%99%23) `259.5K 🔥` `NEW`
1. [Lisa自曝被追求者拒绝买单](https://s.weibo.com/weibo?q=%23Lisa%E8%87%AA%E6%9B%9D%E8%A2%AB%E8%BF%BD%E6%B1%82%E8%80%85%E6%8B%92%E7%BB%9D%E4%B9%B0%E5%8D%95%23) `259.5K 🔥` `NEW`
1. [iPhone18Pro今晚8点降价1500元](https://s.weibo.com/weibo?q=%23iPhone18Pro%E4%BB%8A%E6%99%9A8%E7%82%B9%E9%99%8D%E4%BB%B71500%E5%85%83%23) `259.3K 🔥` `NEW`
1. [蔡天凤案有重大进展](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%A4%A9%E5%87%A4%E6%A1%88%E6%9C%89%E9%87%8D%E5%A4%A7%E8%BF%9B%E5%B1%95%23) `259.3K 🔥` `NEW`
1. [今天天猫买手机全年真低价](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E5%A4%A9%E7%8C%AB%E4%B9%B0%E6%89%8B%E6%9C%BA%E5%85%A8%E5%B9%B4%E7%9C%9F%E4%BD%8E%E4%BB%B7%23) `259.1K 🔥` `NEW`
1. [李勒优回应晋妈的恩情](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E5%9B%9E%E5%BA%94%E6%99%8B%E5%A6%88%E7%9A%84%E6%81%A9%E6%83%85%23) `259.1K 🔥` `NEW`
1. [几个糊咖 几十倍杀](https://s.weibo.com/weibo?q=%23%E5%87%A0%E4%B8%AA%E7%B3%8A%E5%92%96%20%E5%87%A0%E5%8D%81%E5%80%8D%E6%9D%80%23) `259.0K 🔥` `NEW`
1. [停药身亡女子每周给AI发1500条信息](https://s.weibo.com/weibo?q=%23%E5%81%9C%E8%8D%AF%E8%BA%AB%E4%BA%A1%E5%A5%B3%E5%AD%90%E6%AF%8F%E5%91%A8%E7%BB%99AI%E5%8F%911500%E6%9D%A1%E4%BF%A1%E6%81%AF%23) `225.1K 🔥` `NEW`
1. [男子回应按摩时熟睡遭女技师猥亵](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E6%8C%89%E6%91%A9%E6%97%B6%E7%86%9F%E7%9D%A1%E9%81%AD%E5%A5%B3%E6%8A%80%E5%B8%88%E7%8C%A5%E4%BA%B5%23) `224.9K 🔥` `NEW`
1. [林依晨老公陪林依晨过生日](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E8%80%81%E5%85%AC%E9%99%AA%E6%9E%97%E4%BE%9D%E6%99%A8%E8%BF%87%E7%94%9F%E6%97%A5%23) `220.5K 🔥` `NEW`
1. [后会友期 后会有妻](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%20%E5%90%8E%E4%BC%9A%E6%9C%89%E5%A6%BB%23) `213.2K 🔥` `NEW`
1. [Crisp开团Daeny](https://s.weibo.com/weibo?q=%23Crisp%E5%BC%80%E5%9B%A2Daeny%23) `194.6K 🔥` `NEW`
1. [嫁金钗优酷断更真相](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E4%BC%98%E9%85%B7%E6%96%AD%E6%9B%B4%E7%9C%9F%E7%9B%B8%23) `171.3K 🔥` `NEW`
1. [坠亡幼童母亲扇了孩子父亲三巴掌](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%B9%BC%E7%AB%A5%E6%AF%8D%E4%BA%B2%E6%89%87%E4%BA%86%E5%AD%A9%E5%AD%90%E7%88%B6%E4%BA%B2%E4%B8%89%E5%B7%B4%E6%8E%8C%23) `170.9K 🔥` `NEW`
1. [A股午后拉起来了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8D%88%E5%90%8E%E6%8B%89%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `170.6K 🔥` `NEW`
1. [披哥备战路透](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A5%E5%A4%87%E6%88%98%E8%B7%AF%E9%80%8F%23) `169.1K 🔥` `NEW`
1. [刘美含剪完瞬间变韩国欧尼](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BE%8E%E5%90%AB%E5%89%AA%E5%AE%8C%E7%9E%AC%E9%97%B4%E5%8F%98%E9%9F%A9%E5%9B%BD%E6%AC%A7%E5%B0%BC%23) `168.8K 🔥` `NEW`
1. [长沙民政职院承认摆拍否认刻字](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E6%B0%91%E6%94%BF%E8%81%8C%E9%99%A2%E6%89%BF%E8%AE%A4%E6%91%86%E6%8B%8D%E5%90%A6%E8%AE%A4%E5%88%BB%E5%AD%97%23) `160.3K 🔥` `NEW`
1. [字是真的丑马是真的好](https://s.weibo.com/weibo?q=%23%E5%AD%97%E6%98%AF%E7%9C%9F%E7%9A%84%E4%B8%91%E9%A9%AC%E6%98%AF%E7%9C%9F%E7%9A%84%E5%A5%BD%23) `147.9K 🔥` `NEW`
1. [爸爸吃掉女儿棒棒糖晚上挨了一巴掌](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%90%83%E6%8E%89%E5%A5%B3%E5%84%BF%E6%A3%92%E6%A3%92%E7%B3%96%E6%99%9A%E4%B8%8A%E6%8C%A8%E4%BA%86%E4%B8%80%E5%B7%B4%E6%8E%8C%23) `132.9K 🔥` `NEW`
1. [BLG或将在2-2组遇HLE](https://s.weibo.com/weibo?q=%23BLG%E6%88%96%E5%B0%86%E5%9C%A82-2%E7%BB%84%E9%81%87HLE%23) `128.3K 🔥` `NEW`
1. [欣旺达回应理想小米自研电池](https://s.weibo.com/weibo?q=%23%E6%AC%A3%E6%97%BA%E8%BE%BE%E5%9B%9E%E5%BA%94%E7%90%86%E6%83%B3%E5%B0%8F%E7%B1%B3%E8%87%AA%E7%A0%94%E7%94%B5%E6%B1%A0%23) `127.7K 🔥` `NEW`
1. [小城良方全员发博要留下小西门](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%85%A8%E5%91%98%E5%8F%91%E5%8D%9A%E8%A6%81%E7%95%99%E4%B8%8B%E5%B0%8F%E8%A5%BF%E9%97%A8%23) `125.8K 🔥` `NEW`
1. [京东黄金今晚8点再降价](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E9%BB%84%E9%87%91%E4%BB%8A%E6%99%9A8%E7%82%B9%E5%86%8D%E9%99%8D%E4%BB%B7%23) `125.7K 🔥` `NEW`
1. [茉莉奶白联名杯全部下架](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E8%81%94%E5%90%8D%E6%9D%AF%E5%85%A8%E9%83%A8%E4%B8%8B%E6%9E%B6%23) `125.7K 🔥` `NEW`
1. [黄子韬 我其实已经淡出娱乐圈很多了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%20%E6%88%91%E5%85%B6%E5%AE%9E%E5%B7%B2%E7%BB%8F%E6%B7%A1%E5%87%BA%E5%A8%B1%E4%B9%90%E5%9C%88%E5%BE%88%E5%A4%9A%E4%BA%86%23) `125.7K 🔥` `NEW`
1. [购物车里提升幸福感的小东西](https://s.weibo.com/weibo?q=%23%E8%B4%AD%E7%89%A9%E8%BD%A6%E9%87%8C%E6%8F%90%E5%8D%87%E5%B9%B8%E7%A6%8F%E6%84%9F%E7%9A%84%E5%B0%8F%E4%B8%9C%E8%A5%BF%23) `124.9K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `962.8K 🔥` `+457%`

Updated at 2026-10-30 16:56:21

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
