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

1. [西藏地震已致16死46伤](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%9C%B0%E9%9C%87%E5%B7%B2%E8%87%B416%E6%AD%BB46%E4%BC%A4%23) `2.4M 🔥` `NEW`
1. [奔赴香港假日狂欢](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B5%B4%E9%A6%99%E6%B8%AF%E5%81%87%E6%97%A5%E7%8B%82%E6%AC%A2%23) `469.7K 🔥` `NEW`
1. [美股科技股大跌](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E7%A7%91%E6%8A%80%E8%82%A1%E5%A4%A7%E8%B7%8C%23) `379.5K 🔥` `NEW`
1. [西藏地震亲历者说腿发抖被吓哭](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%9C%B0%E9%9C%87%E4%BA%B2%E5%8E%86%E8%80%85%E8%AF%B4%E8%85%BF%E5%8F%91%E6%8A%96%E8%A2%AB%E5%90%93%E5%93%AD%23) `348.7K 🔥` `NEW`
1. [骚扰来电不接和挂断区别很大](https://s.weibo.com/weibo?q=%23%E9%AA%9A%E6%89%B0%E6%9D%A5%E7%94%B5%E4%B8%8D%E6%8E%A5%E5%92%8C%E6%8C%82%E6%96%AD%E5%8C%BA%E5%88%AB%E5%BE%88%E5%A4%A7%23) `348.4K 🔥` `NEW`
1. [两女生投150万开无烟酒吧倒闭](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A5%B3%E7%94%9F%E6%8A%95150%E4%B8%87%E5%BC%80%E6%97%A0%E7%83%9F%E9%85%92%E5%90%A7%E5%80%92%E9%97%AD%23) `347.0K 🔥` `NEW`
1. [盛艾敬被批不尊重前辈只顾着自己跳舞](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E8%A2%AB%E6%89%B9%E4%B8%8D%E5%B0%8A%E9%87%8D%E5%89%8D%E8%BE%88%E5%8F%AA%E9%A1%BE%E7%9D%80%E8%87%AA%E5%B7%B1%E8%B7%B3%E8%88%9E%23) `345.0K 🔥` `NEW`
1. [林舒晴道歉澄清](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%88%92%E6%99%B4%E9%81%93%E6%AD%89%E6%BE%84%E6%B8%85%23) `339.5K 🔥` `NEW`
1. [厉娜说许飞背刺带来人生至暗时刻](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E8%AF%B4%E8%AE%B8%E9%A3%9E%E8%83%8C%E5%88%BA%E5%B8%A6%E6%9D%A5%E4%BA%BA%E7%94%9F%E8%87%B3%E6%9A%97%E6%97%B6%E5%88%BB%23) `281.8K 🔥` `NEW`
1. [霜降](https://s.weibo.com/weibo?q=%23%E9%9C%9C%E9%99%8D%23) `276.7K 🔥` `NEW`
1. [姜妍小城良方下沉市场口碑](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%A6%8D%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E5%8F%A3%E7%A2%91%23) `275.1K 🔥` `NEW`
1. [霜降时节注意三防五不冻](https://s.weibo.com/weibo?q=%23%E9%9C%9C%E9%99%8D%E6%97%B6%E8%8A%82%E6%B3%A8%E6%84%8F%E4%B8%89%E9%98%B2%E4%BA%94%E4%B8%8D%E5%86%BB%23) `236.7K 🔥` `NEW`
1. [西藏地震](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%9C%B0%E9%9C%87%23) `218.3K 🔥` `NEW`
1. [张萌马天宇不是商量好一起上节目](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%B8%8D%E6%98%AF%E5%95%86%E9%87%8F%E5%A5%BD%E4%B8%80%E8%B5%B7%E4%B8%8A%E8%8A%82%E7%9B%AE%23) `188.2K 🔥` `NEW`
1. [西藏地震途经列车紧急扣停](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%9C%B0%E9%9C%87%E9%80%94%E7%BB%8F%E5%88%97%E8%BD%A6%E7%B4%A7%E6%80%A5%E6%89%A3%E5%81%9C%23) `186.4K 🔥` `NEW`
1. [骑士vs76人](https://s.weibo.com/weibo?q=%23%E9%AA%91%E5%A3%ABvs76%E4%BA%BA%23) `177.6K 🔥` `NEW`
1. [周芙终于相信阿丑是魏娆](https://s.weibo.com/weibo?q=%23%E5%91%A8%E8%8A%99%E7%BB%88%E4%BA%8E%E7%9B%B8%E4%BF%A1%E9%98%BF%E4%B8%91%E6%98%AF%E9%AD%8F%E5%A8%86%23) `167.9K 🔥` `NEW`
1. [高嘉瑜称台湾路人都比张凌赫帅](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%98%89%E7%91%9C%E7%A7%B0%E5%8F%B0%E6%B9%BE%E8%B7%AF%E4%BA%BA%E9%83%BD%E6%AF%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B8%85%23) `165.1K 🔥` `NEW`
1. [维密合照里的刘雯奚梦瑶](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%AF%86%E5%90%88%E7%85%A7%E9%87%8C%E7%9A%84%E5%88%98%E9%9B%AF%E5%A5%9A%E6%A2%A6%E7%91%B6%23) `155.5K 🔥` `NEW`
1. [嫁金钗单更的原因](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%8D%95%E6%9B%B4%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `151.4K 🔥` `NEW`
1. [成毅纪录至今无人打破](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%BA%AA%E5%BD%95%E8%87%B3%E4%BB%8A%E6%97%A0%E4%BA%BA%E6%89%93%E7%A0%B4%23) `139.4K 🔥` `NEW`
1. [李雪健听不见说不了的无声表演](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E5%81%A5%E5%90%AC%E4%B8%8D%E8%A7%81%E8%AF%B4%E4%B8%8D%E4%BA%86%E7%9A%84%E6%97%A0%E5%A3%B0%E8%A1%A8%E6%BC%94%23) `127.0K 🔥` `NEW`
1. [阿信发文致谢刘宇宁](https://s.weibo.com/weibo?q=%23%E9%98%BF%E4%BF%A1%E5%8F%91%E6%96%87%E8%87%B4%E8%B0%A2%E5%88%98%E5%AE%87%E5%AE%81%23) `126.7K 🔥` `NEW`
1. [美股科技巨头全线崩盘](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E7%A7%91%E6%8A%80%E5%B7%A8%E5%A4%B4%E5%85%A8%E7%BA%BF%E5%B4%A9%E7%9B%98%23) `123.4K 🔥` `NEW`
1. [李昀锐孟子义尚公主总冠名](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B0%9A%E5%85%AC%E4%B8%BB%E6%80%BB%E5%86%A0%E5%90%8D%23) `119.0K 🔥` `NEW`
1. [西藏7级地震](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F7%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `1.8M 🔥` `+289%`
1. [长征是刻在大国重器上的信仰](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%81%E6%98%AF%E5%88%BB%E5%9C%A8%E5%A4%A7%E5%9B%BD%E9%87%8D%E5%99%A8%E4%B8%8A%E7%9A%84%E4%BF%A1%E4%BB%B0%23) `1.4M 🔥` `+725%`
1. [在星巴克开会1小时被提醒点单5次](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%98%9F%E5%B7%B4%E5%85%8B%E5%BC%80%E4%BC%9A1%E5%B0%8F%E6%97%B6%E8%A2%AB%E6%8F%90%E9%86%92%E7%82%B9%E5%8D%955%E6%AC%A1%23) `1.2M 🔥` `+1353%`
1. [国乒女团2比3日本女团](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A22%E6%AF%943%E6%97%A5%E6%9C%AC%E5%A5%B3%E5%9B%A2%23) `595.9K 🔥` `+173%`
1. [苹果内屏磨砂膜能徒手撕下](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%86%85%E5%B1%8F%E7%A3%A8%E7%A0%82%E8%86%9C%E8%83%BD%E5%BE%92%E6%89%8B%E6%92%95%E4%B8%8B%23) `497.9K 🔥` `+503%`
1. [国乒男团夺亚锦赛第26冠](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%A4%BA%E4%BA%9A%E9%94%A6%E8%B5%9B%E7%AC%AC26%E5%86%A0%23) `458.2K 🔥` `+527%`
1. [后会友期 想请不敢请的都放观察室了](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%20%E6%83%B3%E8%AF%B7%E4%B8%8D%E6%95%A2%E8%AF%B7%E7%9A%84%E9%83%BD%E6%94%BE%E8%A7%82%E5%AF%9F%E5%AE%A4%E4%BA%86%23) `419.3K 🔥` `+335%`
1. [婚礼发言说虽然不是我的妻子](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E7%A4%BC%E5%8F%91%E8%A8%80%E8%AF%B4%E8%99%BD%E7%84%B6%E4%B8%8D%E6%98%AF%E6%88%91%E7%9A%84%E5%A6%BB%E5%AD%90%23) `341.1K 🔥` `+402%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `337.6K 🔥` `+399%`
1. [41岁女子存百万后去世](https://s.weibo.com/weibo?q=%2341%E5%B2%81%E5%A5%B3%E5%AD%90%E5%AD%98%E7%99%BE%E4%B8%87%E5%90%8E%E5%8E%BB%E4%B8%96%23) `337.0K 🔥` `+405%`
1. [马天宇低谷期找杨幂谈心](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%BD%8E%E8%B0%B7%E6%9C%9F%E6%89%BE%E6%9D%A8%E5%B9%82%E8%B0%88%E5%BF%83%23) `325.7K 🔥` `+294%`
1. [女子称惠州海景房跌剩一千八](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E6%83%A0%E5%B7%9E%E6%B5%B7%E6%99%AF%E6%88%BF%E8%B7%8C%E5%89%A9%E4%B8%80%E5%8D%83%E5%85%AB%23) `272.1K 🔥` `+630%`
1. [人民日报评张凌赫申请赴台遭拒](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B3%E8%AF%B7%E8%B5%B4%E5%8F%B0%E9%81%AD%E6%8B%92%23) `231.1K 🔥` `+511%`
1. [张家齐和妈妈的关系触痛网友](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%92%8C%E5%A6%88%E5%A6%88%E7%9A%84%E5%85%B3%E7%B3%BB%E8%A7%A6%E7%97%9B%E7%BD%91%E5%8F%8B%23) `225.0K 🔥` `+348%`
1. [在北京没有社交的原因](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%8C%97%E4%BA%AC%E6%B2%A1%E6%9C%89%E7%A4%BE%E4%BA%A4%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `197.4K 🔥` `+504%`
1. [女子讲述妈妈56岁为何得老年痴呆](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%AE%B2%E8%BF%B0%E5%A6%88%E5%A6%8856%E5%B2%81%E4%B8%BA%E4%BD%95%E5%BE%97%E8%80%81%E5%B9%B4%E7%97%B4%E5%91%86%23) `173.1K 🔥` `+365%`
1. [坠亡幼童父亲回应扔掉孩子遗物](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%B9%BC%E7%AB%A5%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E6%89%94%E6%8E%89%E5%AD%A9%E5%AD%90%E9%81%97%E7%89%A9%23) `168.1K 🔥` `+191%`
1. [A股 科技股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%20%E7%A7%91%E6%8A%80%E8%82%A1%23) `156.2K 🔥` `+295%`
1. [直击西藏那曲7.0级地震](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E5%87%BB%E8%A5%BF%E8%97%8F%E9%82%A3%E6%9B%B27.0%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `141.7K 🔥` `+72%`
1. [虞书欣怎么笑成这样](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%80%8E%E4%B9%88%E7%AC%91%E6%88%90%E8%BF%99%E6%A0%B7%23) `133.8K 🔥` `+275%`
1. [国乒女团 桥本帆乃香](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%20%E6%A1%A5%E6%9C%AC%E5%B8%86%E4%B9%83%E9%A6%99%23) `129.6K 🔥` `+291%`
1. [月嫂说宝宝只有两件衣服](https://s.weibo.com/weibo?q=%23%E6%9C%88%E5%AB%82%E8%AF%B4%E5%AE%9D%E5%AE%9D%E5%8F%AA%E6%9C%89%E4%B8%A4%E4%BB%B6%E8%A1%A3%E6%9C%8D%23) `114.1K 🔥` `+207%`
1. [最隐蔽的贫穷可能是没有犯错的余地](https://s.weibo.com/weibo?q=%23%E6%9C%80%E9%9A%90%E8%94%BD%E7%9A%84%E8%B4%AB%E7%A9%B7%E5%8F%AF%E8%83%BD%E6%98%AF%E6%B2%A1%E6%9C%89%E7%8A%AF%E9%94%99%E7%9A%84%E4%BD%99%E5%9C%B0%23) `110.0K 🔥` `+271%`
1. [刘宇宁 薄肌变大胸](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%20%E8%96%84%E8%82%8C%E5%8F%98%E5%A4%A7%E8%83%B8%23) `110.0K 🔥` `+325%`

Updated at 2026-10-23 08:20:53

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
