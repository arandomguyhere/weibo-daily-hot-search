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

1. [纪念江泽民同志诞辰100周年大会 (Conference to commemorate the 100th anniversary of the birth of Comrade Jiang Zemin)](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E5%BF%B5%E6%B1%9F%E6%B3%BD%E6%B0%91%E5%90%8C%E5%BF%97%E8%AF%9E%E8%BE%B0100%E5%91%A8%E5%B9%B4%E5%A4%A7%E4%BC%9A%23) `1.2M 🔥` `NEW`
1. [欢天喜地七仙女凡间造型](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%A4%A9%E5%96%9C%E5%9C%B0%E4%B8%83%E4%BB%99%E5%A5%B3%E5%87%A1%E9%97%B4%E9%80%A0%E5%9E%8B%23) `1.1M 🔥` `NEW`
1. [暴雨天留心4个风险点](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E5%A4%A9%E7%95%99%E5%BF%834%E4%B8%AA%E9%A3%8E%E9%99%A9%E7%82%B9%23) `1.1M 🔥` `NEW`
1. [建议这类手机壳赶紧扔掉](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E8%BF%99%E7%B1%BB%E6%89%8B%E6%9C%BA%E5%A3%B3%E8%B5%B6%E7%B4%A7%E6%89%94%E6%8E%89%23) `1.1M 🔥` `NEW`
1. [披荆斩棘一公组队](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%80%E5%85%AC%E7%BB%84%E9%98%9F%23) `651.9K 🔥` `NEW`
1. [李荣浩给杨丞琳送花篮落款先生](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E7%BB%99%E6%9D%A8%E4%B8%9E%E7%90%B3%E9%80%81%E8%8A%B1%E7%AF%AE%E8%90%BD%E6%AC%BE%E5%85%88%E7%94%9F%23) `423.2K 🔥` `NEW`
1. [3孩非亲生男方开庭提出四项诉求](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E7%94%B7%E6%96%B9%E5%BC%80%E5%BA%AD%E6%8F%90%E5%87%BA%E5%9B%9B%E9%A1%B9%E8%AF%89%E6%B1%82%23) `394.9K 🔥` `NEW`
1. [灵活就业人数越来越多怎么破解](https://s.weibo.com/weibo?q=%23%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E4%BA%BA%E6%95%B0%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%E6%80%8E%E4%B9%88%E7%A0%B4%E8%A7%A3%23) `389.3K 🔥` `NEW`
1. [瑞幸联名漫画 抄袭](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E8%81%94%E5%90%8D%E6%BC%AB%E7%94%BB%20%E6%8A%84%E8%A2%AD%23) `384.9K 🔥` `NEW`
1. [王楚钦三线作战](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%89%E7%BA%BF%E4%BD%9C%E6%88%98%23) `377.6K 🔥` `NEW`
1. [对瘦女淡饭产生了逆反心理 (I have a rebellious attitude toward thin women.)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E7%98%A6%E5%A5%B3%E6%B7%A1%E9%A5%AD%E4%BA%A7%E7%94%9F%E4%BA%86%E9%80%86%E5%8F%8D%E5%BF%83%E7%90%86%23) `344.5K 🔥` `NEW`
1. [曝虞书欣补偿一念江南换角亏损](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%A1%A5%E5%81%BF%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E6%8D%A2%E8%A7%92%E4%BA%8F%E6%8D%9F%23) `281.1K 🔥` `NEW`
1. [兰州拉面集体更名的背后](https://s.weibo.com/weibo?q=%23%E5%85%B0%E5%B7%9E%E6%8B%89%E9%9D%A2%E9%9B%86%E4%BD%93%E6%9B%B4%E5%90%8D%E7%9A%84%E8%83%8C%E5%90%8E%23) `265.8K 🔥` `NEW`
1. [iPhone17或全球涨价](https://s.weibo.com/weibo?q=%23iPhone17%E6%88%96%E5%85%A8%E7%90%83%E6%B6%A8%E4%BB%B7%23) `264.6K 🔥` `NEW`
1. [有种缘分就到这的感觉了](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%A7%8D%E7%BC%98%E5%88%86%E5%B0%B1%E5%88%B0%E8%BF%99%E7%9A%84%E6%84%9F%E8%A7%89%E4%BA%86%23) `262.1K 🔥` `NEW`
1. [电影数到三定档](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%95%B0%E5%88%B0%E4%B8%89%E5%AE%9A%E6%A1%A3%23) `261.1K 🔥` `NEW`
1. [四个儿子争着养95岁老母亲](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E4%B8%AA%E5%84%BF%E5%AD%90%E4%BA%89%E7%9D%80%E5%85%BB95%E5%B2%81%E8%80%81%E6%AF%8D%E4%BA%B2%23) `260.1K 🔥` `NEW`
1. [花开锦绣](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%23) `246.9K 🔥` `NEW`
1. [王奕关注沈梦瑶](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A5%95%E5%85%B3%E6%B3%A8%E6%B2%88%E6%A2%A6%E7%91%B6%23) `243.5K 🔥` `NEW`
1. [王一博杂志开售](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%9D%82%E5%BF%97%E5%BC%80%E5%94%AE%23) `241.7K 🔥` `NEW`
1. [人生不只有考公考研两条路 (There are not only two paths in life: public examination and postgraduate examination.)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E4%B8%8D%E5%8F%AA%E6%9C%89%E8%80%83%E5%85%AC%E8%80%83%E7%A0%94%E4%B8%A4%E6%9D%A1%E8%B7%AF%23) `1.1M 🔥` `+42%`
1. [龙餐馆原型说当时做饭很难吃](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E5%8E%9F%E5%9E%8B%E8%AF%B4%E5%BD%93%E6%97%B6%E5%81%9A%E9%A5%AD%E5%BE%88%E9%9A%BE%E5%90%83%23) `397.2K 🔥` `+65%`
1. [特朗普发文欢迎中东各国自保](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%91%E6%96%87%E6%AC%A2%E8%BF%8E%E4%B8%AD%E4%B8%9C%E5%90%84%E5%9B%BD%E8%87%AA%E4%BF%9D%23) `278.7K 🔥` `+38%`
1. [张元英水晶凉鞋](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E6%B0%B4%E6%99%B6%E5%87%89%E9%9E%8B%23) `276.6K 🔥` `+21%`
1. [娜扎刚起床的素颜](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E5%88%9A%E8%B5%B7%E5%BA%8A%E7%9A%84%E7%B4%A0%E9%A2%9C%23) `276.2K 🔥` `+27%`
1. [韩汶栩与女友合照](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B1%B6%E6%A0%A9%E4%B8%8E%E5%A5%B3%E5%8F%8B%E5%90%88%E7%85%A7%23) `272.8K 🔥` `+37%`
1. [丁程鑫从不遮掩自己农村家庭背景 (Ding Chengxin never hides his rural family background)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%BB%8E%E4%B8%8D%E9%81%AE%E6%8E%A9%E8%87%AA%E5%B7%B1%E5%86%9C%E6%9D%91%E5%AE%B6%E5%BA%AD%E8%83%8C%E6%99%AF%23) `271.4K 🔥` `+24%`
1. [3孩非亲生男子愿意放弃30万赔偿](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E7%94%B7%E5%AD%90%E6%84%BF%E6%84%8F%E6%94%BE%E5%BC%8330%E4%B8%87%E8%B5%94%E5%81%BF%23) `256.1K 🔥` `+21%`
1. [首个被AI老板开除的人类员工 (The first human employee fired by an AI boss)](https://s.weibo.com/weibo?q=%23%E9%A6%96%E4%B8%AA%E8%A2%ABAI%E8%80%81%E6%9D%BF%E5%BC%80%E9%99%A4%E7%9A%84%E4%BA%BA%E7%B1%BB%E5%91%98%E5%B7%A5%23) `246.5K 🔥` `+26%`
1. [DeepSeek正式涨价](https://s.weibo.com/weibo?q=%23DeepSeek%E6%AD%A3%E5%BC%8F%E6%B6%A8%E4%BB%B7%23) `282.7K 🔥`
1. [杨丞琳回复陈妍希爱你 (Rainie Yang replies to Michelle Chen, I love you)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E4%B8%9E%E7%90%B3%E5%9B%9E%E5%A4%8D%E9%99%88%E5%A6%8D%E5%B8%8C%E7%88%B1%E4%BD%A0%23) `263.0K 🔥`
1. [41岁妈妈和23岁女儿同年生娃](https://s.weibo.com/weibo?q=%2341%E5%B2%81%E5%A6%88%E5%A6%88%E5%92%8C23%E5%B2%81%E5%A5%B3%E5%84%BF%E5%90%8C%E5%B9%B4%E7%94%9F%E5%A8%83%23) `257.5K 🔥`
1. [披荆斩棘排名 (Ranking through all obstacles)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%8E%92%E5%90%8D%23) `253.5K 🔥`
1. [睡不好的人调整一下洗漱时间](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E4%B8%8D%E5%A5%BD%E7%9A%84%E4%BA%BA%E8%B0%83%E6%95%B4%E4%B8%80%E4%B8%8B%E6%B4%97%E6%BC%B1%E6%97%B6%E9%97%B4%23) `253.2K 🔥`
1. [李小冉肚子痛还熬夜录节目 (Li Xiaoran had a stomachache and stayed up late to record the show)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E8%82%9A%E5%AD%90%E7%97%9B%E8%BF%98%E7%86%AC%E5%A4%9C%E5%BD%95%E8%8A%82%E7%9B%AE%23) `251.3K 🔥`
1. [内马尔握手遭无视](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E6%8F%A1%E6%89%8B%E9%81%AD%E6%97%A0%E8%A7%86%23) `250.5K 🔥`
1. [苏新皓辟谣穿丝袜](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E8%BE%9F%E8%B0%A3%E7%A9%BF%E4%B8%9D%E8%A2%9C%23) `244.6K 🔥`
1. [胖东来被涨租逼走却从不涨商户租](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%A2%AB%E6%B6%A8%E7%A7%9F%E9%80%BC%E8%B5%B0%E5%8D%B4%E4%BB%8E%E4%B8%8D%E6%B6%A8%E5%95%86%E6%88%B7%E7%A7%9F%23) `474.0K 🔥` `-71%`
1. [档案袋被外婆拆了好崩溃 (The file bag was opened by my grandma and I was so devastated.)](https://s.weibo.com/weibo?q=%23%E6%A1%A3%E6%A1%88%E8%A2%8B%E8%A2%AB%E5%A4%96%E5%A9%86%E6%8B%86%E4%BA%86%E5%A5%BD%E5%B4%A9%E6%BA%83%23) `380.9K 🔥` `-55%`
1. [手机壳 医疗垃圾](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E5%A3%B3%20%E5%8C%BB%E7%96%97%E5%9E%83%E5%9C%BE%23) `332.2K 🔥` `-43%`
1. [居民存款7月又少了6300亿 (Resident deposits fell by another 630 billion in July)](https://s.weibo.com/weibo?q=%23%E5%B1%85%E6%B0%91%E5%AD%98%E6%AC%BE7%E6%9C%88%E5%8F%88%E5%B0%91%E4%BA%866300%E4%BA%BF%23) `301.7K 🔥` `-49%`
1. [劣迹艺人那艺娜活动被当场叫停](https://s.weibo.com/weibo?q=%23%E5%8A%A3%E8%BF%B9%E8%89%BA%E4%BA%BA%E9%82%A3%E8%89%BA%E5%A8%9C%E6%B4%BB%E5%8A%A8%E8%A2%AB%E5%BD%93%E5%9C%BA%E5%8F%AB%E5%81%9C%23) `285.7K 🔥` `-51%`
1. [唐九洲凭高考647分加入乐华](https://s.weibo.com/weibo?q=%23%E5%94%90%E4%B9%9D%E6%B4%B2%E5%87%AD%E9%AB%98%E8%80%83647%E5%88%86%E5%8A%A0%E5%85%A5%E4%B9%90%E5%8D%8E%23) `283.2K 🔥` `-60%`
1. [王一博的手部特写](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%9A%84%E6%89%8B%E9%83%A8%E7%89%B9%E5%86%99%23) `280.2K 🔥` `-22%`
1. [辟谣恋情都按谷爱凌这个标准来 (To refute rumors about love affairs, follow Gu Ailing’s standards)](https://s.weibo.com/weibo?q=%23%E8%BE%9F%E8%B0%A3%E6%81%8B%E6%83%85%E9%83%BD%E6%8C%89%E8%B0%B7%E7%88%B1%E5%87%8C%E8%BF%99%E4%B8%AA%E6%A0%87%E5%87%86%E6%9D%A5%23) `274.6K 🔥` `-53%`
1. [王俊凯妈妈给粉丝送伴手礼 (Wang Junkai’s mother sends souvenirs to fans)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%A6%88%E5%A6%88%E7%BB%99%E7%B2%89%E4%B8%9D%E9%80%81%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `270.2K 🔥` `-64%`
1. [小沈阳口碑](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E5%8F%A3%E7%A2%91%23) `268.4K 🔥` `-47%`
1. [儿科医生杨国辉去世妻子发声](https://s.weibo.com/weibo?q=%23%E5%84%BF%E7%A7%91%E5%8C%BB%E7%94%9F%E6%9D%A8%E5%9B%BD%E8%BE%89%E5%8E%BB%E4%B8%96%E5%A6%BB%E5%AD%90%E5%8F%91%E5%A3%B0%23) `267.0K 🔥` `-71%`
1. [王曼昱夺冠后比1庆祝 (Wang Manyu celebrated with a score of 1 after winning the championship)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%A4%BA%E5%86%A0%E5%90%8E%E6%AF%941%E5%BA%86%E7%A5%9D%23) `255.9K 🔥` `-29%`
1. [龙餐馆原型称每天都可能被死神点名](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E5%8E%9F%E5%9E%8B%E7%A7%B0%E6%AF%8F%E5%A4%A9%E9%83%BD%E5%8F%AF%E8%83%BD%E8%A2%AB%E6%AD%BB%E7%A5%9E%E7%82%B9%E5%90%8D%23) `248.1K 🔥` `-31%`

Updated at 2026-08-17 11:08:24

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
