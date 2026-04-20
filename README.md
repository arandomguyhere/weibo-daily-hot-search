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

1. [日本7.5级地震 (Japan magnitude 7.5 earthquake)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.5%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `1.9M 🔥` `NEW`
1. [爱奇艺 底线](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%20%E5%BA%95%E7%BA%BF%23) `822.6K 🔥` `NEW`
1. [五花肉里有一块绿色的东西](https://s.weibo.com/weibo?q=%23%E4%BA%94%E8%8A%B1%E8%82%89%E9%87%8C%E6%9C%89%E4%B8%80%E5%9D%97%E7%BB%BF%E8%89%B2%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `795.6K 🔥` `NEW`
1. [五一归汉之旅](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%BD%92%E6%B1%89%E4%B9%8B%E6%97%85%23) `598.6K 🔥` `NEW`
1. [美国发生2024年以来最严重枪击案](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8F%91%E7%94%9F2024%E5%B9%B4%E4%BB%A5%E6%9D%A5%E6%9C%80%E4%B8%A5%E9%87%8D%E6%9E%AA%E5%87%BB%E6%A1%88%23) `396.0K 🔥` `NEW`
1. [华为余承东称手机可能涨价](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%BD%99%E6%89%BF%E4%B8%9C%E7%A7%B0%E6%89%8B%E6%9C%BA%E5%8F%AF%E8%83%BD%E6%B6%A8%E4%BB%B7%23) `280.9K 🔥` `NEW`
1. [曝王楚然早就融了AI](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%97%A9%E5%B0%B1%E8%9E%8D%E4%BA%86AI%23) `242.3K 🔥` `NEW`
1. [演员集体辟谣AI授权](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%9B%86%E4%BD%93%E8%BE%9F%E8%B0%A3AI%E6%8E%88%E6%9D%83%23) `236.7K 🔥` `NEW`
1. [华为星钻手镯表品牌大使刘雯](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%98%9F%E9%92%BB%E6%89%8B%E9%95%AF%E8%A1%A8%E5%93%81%E7%89%8C%E5%A4%A7%E4%BD%BF%E5%88%98%E9%9B%AF%23) `233.7K 🔥` `NEW`
1. [中方回应美国截停中国驶往伊朗油轮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%9B%BD%E6%88%AA%E5%81%9C%E4%B8%AD%E5%9B%BD%E9%A9%B6%E5%BE%80%E4%BC%8A%E6%9C%97%E6%B2%B9%E8%BD%AE%23) `229.9K 🔥` `NEW`
1. [拼多多 (Pinduoduo)](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%23) `229.6K 🔥` `NEW`
1. [在韩骚扰中国女生日籍男子卖惨](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E9%AA%9A%E6%89%B0%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E6%97%A5%E7%B1%8D%E7%94%B7%E5%AD%90%E5%8D%96%E6%83%A8%23) `229.5K 🔥` `NEW`
1. [模仿瘦人的吃饭习惯](https://s.weibo.com/weibo?q=%23%E6%A8%A1%E4%BB%BF%E7%98%A6%E4%BA%BA%E7%9A%84%E5%90%83%E9%A5%AD%E4%B9%A0%E6%83%AF%23) `229.2K 🔥` `NEW`
1. [伊朗发射无人机还击美军舰](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B0%84%E6%97%A0%E4%BA%BA%E6%9C%BA%E8%BF%98%E5%87%BB%E7%BE%8E%E5%86%9B%E8%88%B0%23) `228.6K 🔥` `NEW`
1. [你若酒驾我必改嫁标语令人不适](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%8B%A5%E9%85%92%E9%A9%BE%E6%88%91%E5%BF%85%E6%94%B9%E5%AB%81%E6%A0%87%E8%AF%AD%E4%BB%A4%E4%BA%BA%E4%B8%8D%E9%80%82%23) `197.9K 🔥` `NEW`
1. [爱奇艺top10剧集没有莲花楼](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BAtop10%E5%89%A7%E9%9B%86%E6%B2%A1%E6%9C%89%E8%8E%B2%E8%8A%B1%E6%A5%BC%23) `197.8K 🔥` `NEW`
1. [华为手表业界首发腕上微运动](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%89%8B%E8%A1%A8%E4%B8%9A%E7%95%8C%E9%A6%96%E5%8F%91%E8%85%95%E4%B8%8A%E5%BE%AE%E8%BF%90%E5%8A%A8%23) `192.4K 🔥` `NEW`
1. [小学生遭9人群殴事件暂未刑事立案](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E7%94%9F%E9%81%AD9%E4%BA%BA%E7%BE%A4%E6%AE%B4%E4%BA%8B%E4%BB%B6%E6%9A%82%E6%9C%AA%E5%88%91%E4%BA%8B%E7%AB%8B%E6%A1%88%23) `191.4K 🔥` `NEW`
1. [方博回应代表哈萨克斯坦参赛](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%8D%9A%E5%9B%9E%E5%BA%94%E4%BB%A3%E8%A1%A8%E5%93%88%E8%90%A8%E5%85%8B%E6%96%AF%E5%9D%A6%E5%8F%82%E8%B5%9B%23) `190.8K 🔥` `NEW`
1. [田曦薇双马尾好甜](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%8F%8C%E9%A9%AC%E5%B0%BE%E5%A5%BD%E7%94%9C%23) `190.6K 🔥` `NEW`
1. [华为发布业界最轻AI眼镜 (Huawei releases the industry’s lightest AI glasses)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%8F%91%E5%B8%83%E4%B8%9A%E7%95%8C%E6%9C%80%E8%BD%BBAI%E7%9C%BC%E9%95%9C%23) `190.4K 🔥` `NEW`
1. [女子做无痛人流子宫穿孔致十级伤残](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%81%9A%E6%97%A0%E7%97%9B%E4%BA%BA%E6%B5%81%E5%AD%90%E5%AE%AB%E7%A9%BF%E5%AD%94%E8%87%B4%E5%8D%81%E7%BA%A7%E4%BC%A4%E6%AE%8B%23) `190.3K 🔥` `NEW`
1. [逐玉的成功在于第三集续看率95%](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%9A%84%E6%88%90%E5%8A%9F%E5%9C%A8%E4%BA%8E%E7%AC%AC%E4%B8%89%E9%9B%86%E7%BB%AD%E7%9C%8B%E7%8E%8795%25%23) `190.1K 🔥` `NEW`
1. [华为大阔折登场即炸场](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%A4%A7%E9%98%94%E6%8A%98%E7%99%BB%E5%9C%BA%E5%8D%B3%E7%82%B8%E5%9C%BA%23) `189.9K 🔥` `NEW`
1. [刘嘉玲带梁朝伟回苏州老家](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%98%89%E7%8E%B2%E5%B8%A6%E6%A2%81%E6%9C%9D%E4%BC%9F%E5%9B%9E%E8%8B%8F%E5%B7%9E%E8%80%81%E5%AE%B6%23) `189.3K 🔥` `NEW`
1. [我最想停止的倒计时](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%9C%80%E6%83%B3%E5%81%9C%E6%AD%A2%E7%9A%84%E5%80%92%E8%AE%A1%E6%97%B6%23) `189.3K 🔥` `NEW`
1. [孙颖莎寄快递顺手给人签个名](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%AF%84%E5%BF%AB%E9%80%92%E9%A1%BA%E6%89%8B%E7%BB%99%E4%BA%BA%E7%AD%BE%E4%B8%AA%E5%90%8D%23) `188.6K 🔥` `NEW`
1. [TF四代跳伞降落在粉丝堆里了](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E8%B7%B3%E4%BC%9E%E9%99%8D%E8%90%BD%E5%9C%A8%E7%B2%89%E4%B8%9D%E5%A0%86%E9%87%8C%E4%BA%86%23) `188.0K 🔥` `NEW`
1. [爱奇艺 (iQiyi)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%23) `11.8M 🔥` `+27%`
1. [爱奇艺十部剧赚了67亿](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E5%8D%81%E9%83%A8%E5%89%A7%E8%B5%9A%E4%BA%8667%E4%BA%BF%23) `1.2M 🔥` `+200%`
1. [低情商演员失业 高情商更多休息](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%83%85%E5%95%86%E6%BC%94%E5%91%98%E5%A4%B1%E4%B8%9A%20%E9%AB%98%E6%83%85%E5%95%86%E6%9B%B4%E5%A4%9A%E4%BC%91%E6%81%AF%23) `609.2K 🔥` `+50%`
1. [美媒承认中国年轻人对美国幻灭了 (US media admits that Chinese young people are disillusioned with the United States)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E6%89%BF%E8%AE%A4%E4%B8%AD%E5%9B%BD%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%AF%B9%E7%BE%8E%E5%9B%BD%E5%B9%BB%E7%81%AD%E4%BA%86%23) `355.2K 🔥`
1. [2025年我国人均读书8.39本](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E6%88%91%E5%9B%BD%E4%BA%BA%E5%9D%87%E8%AF%BB%E4%B9%A68.39%E6%9C%AC%23) `832.9K 🔥` `-54%`
1. [华为Pura系列新品发布 (Huawei Pura series new products released)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPura%E7%B3%BB%E5%88%97%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%23) `831.2K 🔥` `-90%`
1. [华为发布会](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `276.4K 🔥` `-49%`
1. [未授权AI艺人](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%8E%88%E6%9D%83AI%E8%89%BA%E4%BA%BA%23) `268.4K 🔥` `-90%`
1. [华为Pura90价格](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPura90%E4%BB%B7%E6%A0%BC%23) `263.8K 🔥` `-73%`
1. [温峥嵘听劝回去拍戏了](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E5%90%AC%E5%8A%9D%E5%9B%9E%E5%8E%BB%E6%8B%8D%E6%88%8F%E4%BA%86%23) `259.1K 🔥` `-35%`
1. [时代峰峻大楼被雷劈了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%A4%A7%E6%A5%BC%E8%A2%AB%E9%9B%B7%E5%8A%88%E4%BA%86%23) `252.9K 🔥` `-38%`
1. [华为PuraXMax](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXMax%23) `247.5K 🔥` `-52%`
1. [重点中学高三生被抓微信零钱20多万](https://s.weibo.com/weibo?q=%23%E9%87%8D%E7%82%B9%E4%B8%AD%E5%AD%A6%E9%AB%98%E4%B8%89%E7%94%9F%E8%A2%AB%E6%8A%93%E5%BE%AE%E4%BF%A1%E9%9B%B6%E9%92%B120%E5%A4%9A%E4%B8%87%23) `228.6K 🔥` `-29%`
1. [张若昀工作室 没签过AI授权 (Zhang Ruoyun Studio has not signed an AI authorization)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E6%B2%A1%E7%AD%BE%E8%BF%87AI%E6%8E%88%E6%9D%83%23) `196.2K 🔥` `-39%`
1. [爱奇艺将转型成非中心化社交媒体](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E5%B0%86%E8%BD%AC%E5%9E%8B%E6%88%90%E9%9D%9E%E4%B8%AD%E5%BF%83%E5%8C%96%E7%A4%BE%E4%BA%A4%E5%AA%92%E4%BD%93%23) `192.5K 🔥` `-65%`
1. [白鹿新买的阿贝贝 (Bailu’s new Abeibei)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B0%E4%B9%B0%E7%9A%84%E9%98%BF%E8%B4%9D%E8%B4%9D%23) `192.3K 🔥` `-40%`
1. [陈哲远对接否认签署AI授权 (Chen Zheyuan denied signing AI authorization)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E5%AF%B9%E6%8E%A5%E5%90%A6%E8%AE%A4%E7%AD%BE%E7%BD%B2AI%E6%8E%88%E6%9D%83%23) `192.0K 🔥` `-28%`
1. [看完你还敢咬指甲吗](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%AE%8C%E4%BD%A0%E8%BF%98%E6%95%A2%E5%92%AC%E6%8C%87%E7%94%B2%E5%90%97%23) `191.8K 🔥` `-40%`
1. [五月天怪兽二胎得子](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%9C%88%E5%A4%A9%E6%80%AA%E5%85%BD%E4%BA%8C%E8%83%8E%E5%BE%97%E5%AD%90%23) `191.5K 🔥` `-40%`
1. [四川地震 (Sichuan earthquake)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87%23) `191.1K 🔥` `-52%`
1. [陈哲远丞磊曾舜晞入驻爱奇艺AI艺人库](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E4%B8%9E%E7%A3%8A%E6%9B%BE%E8%88%9C%E6%99%9E%E5%85%A5%E9%A9%BB%E7%88%B1%E5%A5%87%E8%89%BAAI%E8%89%BA%E4%BA%BA%E5%BA%93%23) `189.6K 🔥` `-41%`
1. [服刑人员遭狱警虐待后身亡 (Inmate dies after being tortured by prison guards)](https://s.weibo.com/weibo?q=%23%E6%9C%8D%E5%88%91%E4%BA%BA%E5%91%98%E9%81%AD%E7%8B%B1%E8%AD%A6%E8%99%90%E5%BE%85%E5%90%8E%E8%BA%AB%E4%BA%A1%23) `189.1K 🔥` `-42%`
1. [方博宣布复出](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%8D%9A%E5%AE%A3%E5%B8%83%E5%A4%8D%E5%87%BA%23) `188.7K 🔥` `-29%`
1. [张凌赫王楚然剧宣](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%89%A7%E5%AE%A3%23) `188.4K 🔥` `-42%`

Updated at 2026-04-20 18:22:38

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
