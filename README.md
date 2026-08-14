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

1. [蒯曼 搭档林诗栋有点兴奋 (Kuaiman’s partner Lin Shidong is a little excited)](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BC%20%E6%90%AD%E6%A1%A3%E6%9E%97%E8%AF%97%E6%A0%8B%E6%9C%89%E7%82%B9%E5%85%B4%E5%A5%8B%23) `42.9K 🔥` `NEW`
1. [原来共情力强的孩子从小就能看出来](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%85%B1%E6%83%85%E5%8A%9B%E5%BC%BA%E7%9A%84%E5%AD%A9%E5%AD%90%E4%BB%8E%E5%B0%8F%E5%B0%B1%E8%83%BD%E7%9C%8B%E5%87%BA%E6%9D%A5%23) `42.9K 🔥` `NEW`
1. [旺旺集团面临重大经营危机](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E9%9B%86%E5%9B%A2%E9%9D%A2%E4%B8%B4%E9%87%8D%E5%A4%A7%E7%BB%8F%E8%90%A5%E5%8D%B1%E6%9C%BA%23) `565.2K 🔥` `+62%`
1. [台风白海豚 (Typhoon White Dolphin)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `329.1K 🔥` `+63%`
1. [中国汽车开放崛起之路](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B1%BD%E8%BD%A6%E5%BC%80%E6%94%BE%E5%B4%9B%E8%B5%B7%E4%B9%8B%E8%B7%AF%23) `256.7K 🔥` `+58%`
1. [e-tron带你去看球 (e-tron takes you to watch football)](https://s.weibo.com/weibo?q=%23e-tron%E5%B8%A6%E4%BD%A0%E5%8E%BB%E7%9C%8B%E7%90%83%23) `242.0K 🔥` `+278%`
1. [王传君体脂率25.5%](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E4%BD%93%E8%84%82%E7%8E%8725.5%25%23) `234.5K 🔥` `+49%`
1. [中央汇金证金公司集体清仓贵州茅台 (Central Huijin Securities Co., Ltd. collectively liquidates Kweichow Moutai)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%A4%AE%E6%B1%87%E9%87%91%E8%AF%81%E9%87%91%E5%85%AC%E5%8F%B8%E9%9B%86%E4%BD%93%E6%B8%85%E4%BB%93%E8%B4%B5%E5%B7%9E%E8%8C%85%E5%8F%B0%23) `137.0K 🔥` `+77%`
1. [慢性压力导致幻想沉溺 (Chronic stress leads to fantasy addiction)](https://s.weibo.com/weibo?q=%23%E6%85%A2%E6%80%A7%E5%8E%8B%E5%8A%9B%E5%AF%BC%E8%87%B4%E5%B9%BB%E6%83%B3%E6%B2%89%E6%BA%BA%23) `108.0K 🔥` `+45%`
1. [旺旺都不好卖了](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E9%83%BD%E4%B8%8D%E5%A5%BD%E5%8D%96%E4%BA%86%23) `106.5K 🔥` `+99%`
1. [命好的人本质是主体性强 (People with good fortune are essentially strong in subjectivity)](https://s.weibo.com/weibo?q=%23%E5%91%BD%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%9C%AC%E8%B4%A8%E6%98%AF%E4%B8%BB%E4%BD%93%E6%80%A7%E5%BC%BA%23) `81.8K 🔥` `+48%`
1. [Wenbo受伤](https://s.weibo.com/weibo?q=%23Wenbo%E5%8F%97%E4%BC%A4%23) `78.8K 🔥` `+25%`
1. [全民进入纯过日子时代 (The whole people has entered an era of pure living)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%B0%91%E8%BF%9B%E5%85%A5%E7%BA%AF%E8%BF%87%E6%97%A5%E5%AD%90%E6%97%B6%E4%BB%A3%23) `78.6K 🔥` `+44%`
1. [牛来](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%23) `72.8K 🔥` `+33%`
1. [胖东来房东逻辑 (Fat Donglai’s landlord’s logic)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%88%BF%E4%B8%9C%E9%80%BB%E8%BE%91%23) `66.2K 🔥` `+37%`
1. [太湖流域发生流域性较大洪水 (A major flood occurred in the Taihu Basin)](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E6%B9%96%E6%B5%81%E5%9F%9F%E5%8F%91%E7%94%9F%E6%B5%81%E5%9F%9F%E6%80%A7%E8%BE%83%E5%A4%A7%E6%B4%AA%E6%B0%B4%23) `64.9K 🔥` `+150%`
1. [税务部门回应社保实缴问题 (Taxation department responds to social security payment issues)](https://s.weibo.com/weibo?q=%23%E7%A8%8E%E5%8A%A1%E9%83%A8%E9%97%A8%E5%9B%9E%E5%BA%94%E7%A4%BE%E4%BF%9D%E5%AE%9E%E7%BC%B4%E9%97%AE%E9%A2%98%23) `63.5K 🔥` `+91%`
1. [明天起禁用这类塑料制品 (Such plastic products will be banned from tomorrow)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%A4%A9%E8%B5%B7%E7%A6%81%E7%94%A8%E8%BF%99%E7%B1%BB%E5%A1%91%E6%96%99%E5%88%B6%E5%93%81%23) `55.4K 🔥` `+23%`
1. [皇阿玛披哥送考五阿哥 (Brother Huang Amaphi sends the fifth brother to take the exam)](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%98%BF%E7%8E%9B%E6%8A%AB%E5%93%A5%E9%80%81%E8%80%83%E4%BA%94%E9%98%BF%E5%93%A5%23) `49.7K 🔥` `+66%`
1. [喻言 压轴 (metaphor finale)](https://s.weibo.com/weibo?q=%23%E5%96%BB%E8%A8%80%20%E5%8E%8B%E8%BD%B4%23) `49.1K 🔥` `+21%`
1. [日本投降81周年](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8A%95%E9%99%8D81%E5%91%A8%E5%B9%B4%23) `48.7K 🔥` `+55%`
1. [山东童年零食杀疯了](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E7%AB%A5%E5%B9%B4%E9%9B%B6%E9%A3%9F%E6%9D%80%E7%96%AF%E4%BA%86%23) `47.8K 🔥` `+44%`
1. [张雅琪 湖南卫视下场 (Zhang Yaqi’s end at Hunan Satellite TV)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E4%B8%8B%E5%9C%BA%23) `47.5K 🔥` `+43%`
1. [44岁男子脑梗无法进食被一根冰棍救了 (A 44-year-old man had a cerebral infarction and was unable to eat, but was saved by a popsicle)](https://s.weibo.com/weibo?q=%2344%E5%B2%81%E7%94%B7%E5%AD%90%E8%84%91%E6%A2%97%E6%97%A0%E6%B3%95%E8%BF%9B%E9%A3%9F%E8%A2%AB%E4%B8%80%E6%A0%B9%E5%86%B0%E6%A3%8D%E6%95%91%E4%BA%86%23) `47.4K 🔥` `+43%`
1. [房主任女儿发声](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E5%A5%B3%E5%84%BF%E5%8F%91%E5%A3%B0%23) `46.4K 🔥` `+48%`
1. [日本暴雨中国游客无奈地铁站过夜](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%9A%B4%E9%9B%A8%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E6%97%A0%E5%A5%88%E5%9C%B0%E9%93%81%E7%AB%99%E8%BF%87%E5%A4%9C%23) `43.7K 🔥` `+37%`
1. [陈丽君魏哲鸣 祝姑娘 (Chen Lijun Wei Zheming Zhu Miss)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E9%AD%8F%E5%93%B2%E9%B8%A3%20%E7%A5%9D%E5%A7%91%E5%A8%98%23) `43.2K 🔥` `+58%`
1. [林诗栋2比3A勒布伦](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B2%E6%AF%943A%E5%8B%92%E5%B8%83%E4%BC%A6%23) `43.1K 🔥` `+40%`
1. [恋与深空 敷衍](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%20%E6%95%B7%E8%A1%8D%23) `43.1K 🔥` `+30%`
1. [开了自动对焦磨皮美颜但对错人了 (I turned on autofocus for skin resurfacing, but it was the wrong person.)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E4%BA%86%E8%87%AA%E5%8A%A8%E5%AF%B9%E7%84%A6%E7%A3%A8%E7%9A%AE%E7%BE%8E%E9%A2%9C%E4%BD%86%E5%AF%B9%E9%94%99%E4%BA%BA%E4%BA%86%23) `43.1K 🔥` `+40%`
1. [河北民营企业家张田案](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E6%B0%91%E8%90%A5%E4%BC%81%E4%B8%9A%E5%AE%B6%E5%BC%A0%E7%94%B0%E6%A1%88%23) `43.1K 🔥` `+67%`
1. [张桂源回应拔河摔倒 (Zhang Guiyuan fell down in response to tug of war)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E5%9B%9E%E5%BA%94%E6%8B%94%E6%B2%B3%E6%91%94%E5%80%92%23) `43.1K 🔥` `+42%`
1. [刘昊然为王传君拼了 (Liu Haoran fought hard for Wang Chuanjun)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%E4%B8%BA%E7%8E%8B%E4%BC%A0%E5%90%9B%E6%8B%BC%E4%BA%86%23) `43.1K 🔥` `+47%`
1. [网文作者假死复活疑与提现有关 (The author of the online article faked his death and resurrected and it is suspected to be related to cash withdrawals)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%96%87%E4%BD%9C%E8%80%85%E5%81%87%E6%AD%BB%E5%A4%8D%E6%B4%BB%E7%96%91%E4%B8%8E%E6%8F%90%E7%8E%B0%E6%9C%89%E5%85%B3%23) `43.1K 🔥` `+69%`
1. [王橹杰疑似耳返漏电](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%96%91%E4%BC%BC%E8%80%B3%E8%BF%94%E6%BC%8F%E7%94%B5%23) `43.0K 🔥` `+51%`
1. [刘畊宏带全场哥哥跳操](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%95%8A%E5%AE%8F%E5%B8%A6%E5%85%A8%E5%9C%BA%E5%93%A5%E5%93%A5%E8%B7%B3%E6%93%8D%23) `43.0K 🔥` `+69%`
1. [时代少年团MV出道战镜头](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2MV%E5%87%BA%E9%81%93%E6%88%98%E9%95%9C%E5%A4%B4%23) `43.0K 🔥` `+37%`
1. [女子称自己月经持续来了8年](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E8%87%AA%E5%B7%B1%E6%9C%88%E7%BB%8F%E6%8C%81%E7%BB%AD%E6%9D%A5%E4%BA%868%E5%B9%B4%23) `43.0K 🔥` `+29%`
1. [公司该缴的社保 个人承担 (The social security that the company should pay is borne by the individual)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E8%AF%A5%E7%BC%B4%E7%9A%84%E7%A4%BE%E4%BF%9D%20%E4%B8%AA%E4%BA%BA%E6%89%BF%E6%8B%85%23) `43.0K 🔥` `+60%`
1. [沈梦辰漂亮裙子配丑鞋 (Shen Mengchen’s beautiful skirt and ugly shoes)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E6%BC%82%E4%BA%AE%E8%A3%99%E5%AD%90%E9%85%8D%E4%B8%91%E9%9E%8B%23) `43.0K 🔥` `+57%`
1. [欢子情商 (Huanzi emotional intelligence)](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E6%83%85%E5%95%86%23) `43.0K 🔥` `+55%`
1. [EWC 食物中毒 (EWC food poisoning)](https://s.weibo.com/weibo?q=%23EWC%20%E9%A3%9F%E7%89%A9%E4%B8%AD%E6%AF%92%23) `42.9K 🔥` `+57%`
1. [湖州暴雨](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%B7%9E%E6%9A%B4%E9%9B%A8%23) `42.9K 🔥` `+67%`
1. [PEL](https://s.weibo.com/weibo?q=%23PEL%23) `42.9K 🔥` `+66%`
1. [幸福其实很简单 (Happiness is actually very simple)](https://s.weibo.com/weibo?q=%23%E5%B9%B8%E7%A6%8F%E5%85%B6%E5%AE%9E%E5%BE%88%E7%AE%80%E5%8D%95%23) `42.9K 🔥` `+66%`
1. [披荆斩棘官宣马旭东 (Overcoming obstacles, official Xuan Ma Xudong)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%AE%98%E5%AE%A3%E9%A9%AC%E6%97%AD%E4%B8%9C%23) `42.8K 🔥` `+55%`
1. [曾辉帮韩雨彤整理衣服](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E5%B8%AE%E9%9F%A9%E9%9B%A8%E5%BD%A4%E6%95%B4%E7%90%86%E8%A1%A3%E6%9C%8D%23) `85.2K 🔥`
1. [曾辉扛住了内娱镜头 (Zeng Hui held back the domestic entertainment scenes)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%89%9B%E4%BD%8F%E4%BA%86%E5%86%85%E5%A8%B1%E9%95%9C%E5%A4%B4%23) `56.0K 🔥`
1. [文黛黛假死](https://s.weibo.com/weibo?q=%23%E6%96%87%E9%BB%9B%E9%BB%9B%E5%81%87%E6%AD%BB%23) `43.2K 🔥`
1. [一定要远离给你搅局的人 (Be sure to stay away from people who cause trouble for you)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%9A%E8%A6%81%E8%BF%9C%E7%A6%BB%E7%BB%99%E4%BD%A0%E6%90%85%E5%B1%80%E7%9A%84%E4%BA%BA%23) `43.2K 🔥`
1. [披哥最累的是沈梦辰 (Brother Pi is most tired of Shen Mengchen)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A5%E6%9C%80%E7%B4%AF%E7%9A%84%E6%98%AF%E6%B2%88%E6%A2%A6%E8%BE%B0%23) `43.0K 🔥`

Updated at 2026-08-15 06:27:00

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
