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

1. [南部档案 三个结局 (Southern Files three endings)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%20%E4%B8%89%E4%B8%AA%E7%BB%93%E5%B1%80%23) `615.4K 🔥` `NEW`
1. [中国男篮vs荷兰男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E8%8D%B7%E5%85%B0%E7%94%B7%E7%AF%AE%23) `366.0K 🔥` `NEW`
1. [华莱士奥特曼联名太对味了](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%8E%B1%E5%A3%AB%E5%A5%A5%E7%89%B9%E6%9B%BC%E8%81%94%E5%90%8D%E5%A4%AA%E5%AF%B9%E5%91%B3%E4%BA%86%23) `364.1K 🔥` `NEW`
1. [C罗再进两球将创葡足历史](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%86%8D%E8%BF%9B%E4%B8%A4%E7%90%83%E5%B0%86%E5%88%9B%E8%91%A1%E8%B6%B3%E5%8E%86%E5%8F%B2%23) `275.4K 🔥` `NEW`
1. [阿根廷状态拉满提前出线](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%8A%B6%E6%80%81%E6%8B%89%E6%BB%A1%E6%8F%90%E5%89%8D%E5%87%BA%E7%BA%BF%23) `274.4K 🔥` `NEW`
1. [多名艺人痛失艺名](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E8%89%BA%E4%BA%BA%E7%97%9B%E5%A4%B1%E8%89%BA%E5%90%8D%23) `264.9K 🔥` `NEW`
1. [理想称增程的尽头是5C增程](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E7%A7%B0%E5%A2%9E%E7%A8%8B%E7%9A%84%E5%B0%BD%E5%A4%B4%E6%98%AF5C%E5%A2%9E%E7%A8%8B%23) `250.6K 🔥` `NEW`
1. [宋亚轩晒毕业照](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%99%92%E6%AF%95%E4%B8%9A%E7%85%A7%23) `245.3K 🔥` `NEW`
1. [理想L8发布会](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3L8%E5%8F%91%E5%B8%83%E4%BC%9A%23) `232.3K 🔥` `NEW`
1. [全球资产全线下跌](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%B5%84%E4%BA%A7%E5%85%A8%E7%BA%BF%E4%B8%8B%E8%B7%8C%23) `232.1K 🔥` `NEW`
1. [卡纳瓦罗想不通国足为何无缘世界杯 (Cannavaro can't figure out why the national football team missed the World Cup)](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E7%BA%B3%E7%93%A6%E7%BD%97%E6%83%B3%E4%B8%8D%E9%80%9A%E5%9B%BD%E8%B6%B3%E4%B8%BA%E4%BD%95%E6%97%A0%E7%BC%98%E4%B8%96%E7%95%8C%E6%9D%AF%23) `231.0K 🔥` `NEW`
1. [特朗普表示允许海峡保持开放](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%A1%A8%E7%A4%BA%E5%85%81%E8%AE%B8%E6%B5%B7%E5%B3%A1%E4%BF%9D%E6%8C%81%E5%BC%80%E6%94%BE%23) `229.7K 🔥` `NEW`
1. [杨紫行程 真脚不着地了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%A1%8C%E7%A8%8B%20%E7%9C%9F%E8%84%9A%E4%B8%8D%E7%9D%80%E5%9C%B0%E4%BA%86%23) `228.7K 🔥` `NEW`
1. [这段话彻底杀死了我的精神内耗](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E5%BD%BB%E5%BA%95%E6%9D%80%E6%AD%BB%E4%BA%86%E6%88%91%E7%9A%84%E7%B2%BE%E7%A5%9E%E5%86%85%E8%80%97%23) `227.8K 🔥` `NEW`
1. [黄多多 电影脸](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%20%E7%94%B5%E5%BD%B1%E8%84%B8%23) `226.6K 🔥` `NEW`
1. [檀健次直播迟到39分钟](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%9B%B4%E6%92%AD%E8%BF%9F%E5%88%B039%E5%88%86%E9%92%9F%23) `225.2K 🔥` `NEW`
1. [龚俊工作室富有但小气](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%AF%8C%E6%9C%89%E4%BD%86%E5%B0%8F%E6%B0%94%23) `224.6K 🔥` `NEW`
1. [葡萄牙主帅回应C罗是否首发](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E4%B8%BB%E5%B8%85%E5%9B%9E%E5%BA%94C%E7%BD%97%E6%98%AF%E5%90%A6%E9%A6%96%E5%8F%91%23) `223.2K 🔥` `NEW`
1. [2026天津高考分数线](https://s.weibo.com/weibo?q=%232026%E5%A4%A9%E6%B4%A5%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `222.6K 🔥` `NEW`
1. [理想L8首创联排双零重力座椅](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3L8%E9%A6%96%E5%88%9B%E8%81%94%E6%8E%92%E5%8F%8C%E9%9B%B6%E9%87%8D%E5%8A%9B%E5%BA%A7%E6%A4%85%23) `220.5K 🔥` `NEW`
1. [陈哲远 这邓为还挺高冷 (Chen Zheyuan, this Deng Wei is quite aloof.)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%20%E8%BF%99%E9%82%93%E4%B8%BA%E8%BF%98%E6%8C%BA%E9%AB%98%E5%86%B7%23) `219.4K 🔥` `NEW`
1. [夏奇拉儿子太黏人](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A5%87%E6%8B%89%E5%84%BF%E5%AD%90%E5%A4%AA%E9%BB%8F%E4%BA%BA%23) `218.5K 🔥` `NEW`
1. [张海楼 ooc](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B5%B7%E6%A5%BC%20ooc%23) `216.7K 🔥` `NEW`
1. [田曦薇魏大勋赢家拍摄90天](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%AD%8F%E5%A4%A7%E5%8B%8B%E8%B5%A2%E5%AE%B6%E6%8B%8D%E6%91%8490%E5%A4%A9%23) `212.4K 🔥` `NEW`
1. [编造孩童失踪直播带货2人被拘](https://s.weibo.com/weibo?q=%23%E7%BC%96%E9%80%A0%E5%AD%A9%E7%AB%A5%E5%A4%B1%E8%B8%AA%E7%9B%B4%E6%92%AD%E5%B8%A6%E8%B4%A72%E4%BA%BA%E8%A2%AB%E6%8B%98%23) `211.5K 🔥` `NEW`
1. [马宁出任挪威vs法国第四官员](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E5%87%BA%E4%BB%BB%E6%8C%AA%E5%A8%81vs%E6%B3%95%E5%9B%BD%E7%AC%AC%E5%9B%9B%E5%AE%98%E5%91%98%23) `210.4K 🔥` `NEW`
1. [詹俊相信C罗能破进球荒](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E4%BF%8A%E7%9B%B8%E4%BF%A1C%E7%BD%97%E8%83%BD%E7%A0%B4%E8%BF%9B%E7%90%83%E8%8D%92%23) `209.8K 🔥` `NEW`
1. [王橹杰 你觉得怎么样](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E4%BD%A0%E8%A7%89%E5%BE%97%E6%80%8E%E4%B9%88%E6%A0%B7%23) `208.5K 🔥` `NEW`
1. [男子进面包店连喝八杯水店员送面包](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BF%9B%E9%9D%A2%E5%8C%85%E5%BA%97%E8%BF%9E%E5%96%9D%E5%85%AB%E6%9D%AF%E6%B0%B4%E5%BA%97%E5%91%98%E9%80%81%E9%9D%A2%E5%8C%85%23) `206.5K 🔥` `NEW`
1. [张桂源唇钉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E5%94%87%E9%92%89%23) `202.6K 🔥` `NEW`
1. [女装退货率终于有救了 (The return rate of women’s clothing has finally been saved)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E9%80%80%E8%B4%A7%E7%8E%87%E7%BB%88%E4%BA%8E%E6%9C%89%E6%95%91%E4%BA%86%23) `714.2K 🔥` `+64%`
1. [开屏广告没了 (Open screen ads are gone)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%8F%E5%B9%BF%E5%91%8A%E6%B2%A1%E4%BA%86%23) `1.5M 🔥`
1. [万千气象看重庆](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%E7%9C%8B%E9%87%8D%E5%BA%86%23) `722.4K 🔥`
1. [在图书馆被紫外消毒灯照了12个小时](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%9B%BE%E4%B9%A6%E9%A6%86%E8%A2%AB%E7%B4%AB%E5%A4%96%E6%B6%88%E6%AF%92%E7%81%AF%E7%85%A7%E4%BA%8612%E4%B8%AA%E5%B0%8F%E6%97%B6%23) `345.0K 🔥`
1. [恋与深空 (Love and deep space)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `217.9K 🔥`
1. [南派三叔我恨你](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%B4%BE%E4%B8%89%E5%8F%94%E6%88%91%E6%81%A8%E4%BD%A0%23) `213.1K 🔥`
1. [黄金 (gold)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `201.7K 🔥`
1. [高考成绩 (College Entrance Examination Results)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%23) `868.3K 🔥` `-27%`
1. [终于懂韩国人看我们吃西瓜的感觉了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%87%82%E9%9F%A9%E5%9B%BD%E4%BA%BA%E7%9C%8B%E6%88%91%E4%BB%AC%E5%90%83%E8%A5%BF%E7%93%9C%E7%9A%84%E6%84%9F%E8%A7%89%E4%BA%86%23) `355.1K 🔥` `-27%`
1. [南部档案be](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88be%23) `340.7K 🔥` `-35%`
1. [李金铭回应](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%9B%9E%E5%BA%94%23) `308.7K 🔥` `-23%`
1. [乔欣变样了 (Qiao Xin has changed)](https://s.weibo.com/weibo?q=%23%E4%B9%94%E6%AC%A3%E5%8F%98%E6%A0%B7%E4%BA%86%23) `235.8K 🔥` `-30%`
1. [上海高考分数线公布](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%E5%85%AC%E5%B8%83%23) `221.9K 🔥` `-61%`
1. [马嘉祺22级中戏男生第一](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA22%E7%BA%A7%E4%B8%AD%E6%88%8F%E7%94%B7%E7%94%9F%E7%AC%AC%E4%B8%80%23) `215.7K 🔥` `-28%`
1. [微信迎史上最大更新 (WeChat welcomes biggest update in history)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%BF%8E%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7%E6%9B%B4%E6%96%B0%23) `214.9K 🔥` `-28%`
1. [王鹤棣给王彦霖女儿寄了六十多件衣服](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%BB%99%E7%8E%8B%E5%BD%A6%E9%9C%96%E5%A5%B3%E5%84%BF%E5%AF%84%E4%BA%86%E5%85%AD%E5%8D%81%E5%A4%9A%E4%BB%B6%E8%A1%A3%E6%9C%8D%23) `207.3K 🔥` `-42%`
1. [蔡依林天津演唱会取消 (Jolin Tsai's Tianjin concert canceled)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%A4%A9%E6%B4%A5%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%96%E6%B6%88%23) `205.7K 🔥` `-31%`
1. [南部档案 南派三叔](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%20%E5%8D%97%E6%B4%BE%E4%B8%89%E5%8F%94%23) `204.3K 🔥` `-30%`
1. [叫全名是一件很微妙的事](https://s.weibo.com/weibo?q=%23%E5%8F%AB%E5%85%A8%E5%90%8D%E6%98%AF%E4%B8%80%E4%BB%B6%E5%BE%88%E5%BE%AE%E5%A6%99%E7%9A%84%E4%BA%8B%23) `203.6K 🔥` `-50%`
1. [李金铭假婆婆事件暴露三大核心问题](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%81%87%E5%A9%86%E5%A9%86%E4%BA%8B%E4%BB%B6%E6%9A%B4%E9%9C%B2%E4%B8%89%E5%A4%A7%E6%A0%B8%E5%BF%83%E9%97%AE%E9%A2%98%23) `199.9K 🔥` `-33%`

Updated at 2026-06-23 22:02:15

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
