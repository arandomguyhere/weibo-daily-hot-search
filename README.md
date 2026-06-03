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

1. [男童被机器人踢中腹部痛苦倒地 (Boy was kicked in the abdomen by robot and fell to the ground in pain)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E8%A2%AB%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B8%A2%E4%B8%AD%E8%85%B9%E9%83%A8%E7%97%9B%E8%8B%A6%E5%80%92%E5%9C%B0%23) `1.2M 🔥` `NEW`
1. [公司烧不起token了](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E7%83%A7%E4%B8%8D%E8%B5%B7token%E4%BA%86%23) `886.8K 🔥` `NEW`
1. [稳住心态更要守住防线](https://s.weibo.com/weibo?q=%23%E7%A8%B3%E4%BD%8F%E5%BF%83%E6%80%81%E6%9B%B4%E8%A6%81%E5%AE%88%E4%BD%8F%E9%98%B2%E7%BA%BF%23) `677.5K 🔥` `NEW`
1. [AI脸 生理性厌恶](https://s.weibo.com/weibo?q=%23AI%E8%84%B8%20%E7%94%9F%E7%90%86%E6%80%A7%E5%8E%8C%E6%81%B6%23) `644.8K 🔥` `NEW`
1. [耳机是一个很私密的物件](https://s.weibo.com/weibo?q=%23%E8%80%B3%E6%9C%BA%E6%98%AF%E4%B8%80%E4%B8%AA%E5%BE%88%E7%A7%81%E5%AF%86%E7%9A%84%E7%89%A9%E4%BB%B6%23) `591.6K 🔥` `NEW`
1. [穿洞洞鞋得了角化型脚气](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E5%BE%97%E4%BA%86%E8%A7%92%E5%8C%96%E5%9E%8B%E8%84%9A%E6%B0%94%23) `517.7K 🔥` `NEW`
1. [房东问了豆包后打算给我涨租](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%9C%E9%97%AE%E4%BA%86%E8%B1%86%E5%8C%85%E5%90%8E%E6%89%93%E7%AE%97%E7%BB%99%E6%88%91%E6%B6%A8%E7%A7%9F%23) `473.7K 🔥` `NEW`
1. [张凌赫叫王玉雯雯](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%AB%E7%8E%8B%E7%8E%89%E9%9B%AF%E9%9B%AF%23) `462.4K 🔥` `NEW`
1. [白鹿丞磊这个肤色差](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%9E%E7%A3%8A%E8%BF%99%E4%B8%AA%E8%82%A4%E8%89%B2%E5%B7%AE%23) `376.3K 🔥` `NEW`
1. [樊振东已到杜塞尔多夫训练](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%B7%B2%E5%88%B0%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB%E8%AE%AD%E7%BB%83%23) `375.8K 🔥` `NEW`
1. [演员钟景辉去世 (Actor Chung King Fai passes away)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%92%9F%E6%99%AF%E8%BE%89%E5%8E%BB%E4%B8%96%23) `372.8K 🔥` `NEW`
1. [金饰克价已大降300元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E5%B7%B2%E5%A4%A7%E9%99%8D300%E5%85%83%23) `370.9K 🔥` `NEW`
1. [多家银行下架3年期5年期定期存款](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E9%93%B6%E8%A1%8C%E4%B8%8B%E6%9E%B63%E5%B9%B4%E6%9C%9F5%E5%B9%B4%E6%9C%9F%E5%AE%9A%E6%9C%9F%E5%AD%98%E6%AC%BE%23) `367.1K 🔥` `NEW`
1. [看起来不体面的工作能有多挣钱](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E8%B5%B7%E6%9D%A5%E4%B8%8D%E4%BD%93%E9%9D%A2%E7%9A%84%E5%B7%A5%E4%BD%9C%E8%83%BD%E6%9C%89%E5%A4%9A%E6%8C%A3%E9%92%B1%23) `365.9K 🔥` `NEW`
1. [何猷君晒妈妈在婚礼上的照片](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E6%99%92%E5%A6%88%E5%A6%88%E5%9C%A8%E5%A9%9A%E7%A4%BC%E4%B8%8A%E7%9A%84%E7%85%A7%E7%89%87%23) `362.8K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `360.2K 🔥` `NEW`
1. [1290万人报名2026高考](https://s.weibo.com/weibo?q=%231290%E4%B8%87%E4%BA%BA%E6%8A%A5%E5%90%8D2026%E9%AB%98%E8%80%83%23) `358.0K 🔥` `NEW`
1. [国乒四大队长任职时世界冠军统计](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%9B%9B%E5%A4%A7%E9%98%9F%E9%95%BF%E4%BB%BB%E8%81%8C%E6%97%B6%E4%B8%96%E7%95%8C%E5%86%A0%E5%86%9B%E7%BB%9F%E8%AE%A1%23) `355.2K 🔥` `NEW`
1. [95花暑期档大女主剧对打](https://s.weibo.com/weibo?q=%2395%E8%8A%B1%E6%9A%91%E6%9C%9F%E6%A1%A3%E5%A4%A7%E5%A5%B3%E4%B8%BB%E5%89%A7%E5%AF%B9%E6%89%93%23) `352.8K 🔥` `NEW`
1. [妈妈回应孩子被机器人踢中腹部](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E5%AD%A9%E5%AD%90%E8%A2%AB%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B8%A2%E4%B8%AD%E8%85%B9%E9%83%A8%23) `351.8K 🔥` `NEW`
1. [职业退款人月入过万黑产曝光 (A professional refunder whose monthly income exceeds RMB 10,000 is revealed.)](https://s.weibo.com/weibo?q=%23%E8%81%8C%E4%B8%9A%E9%80%80%E6%AC%BE%E4%BA%BA%E6%9C%88%E5%85%A5%E8%BF%87%E4%B8%87%E9%BB%91%E4%BA%A7%E6%9B%9D%E5%85%89%23) `347.3K 🔥` `NEW`
1. [迪丽热巴让张馨予先上车并安全报备](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%AE%A9%E5%BC%A0%E9%A6%A8%E4%BA%88%E5%85%88%E4%B8%8A%E8%BD%A6%E5%B9%B6%E5%AE%89%E5%85%A8%E6%8A%A5%E5%A4%87%23) `345.5K 🔥` `NEW`
1. [美院毕业生手绘被误认为印刷品](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%99%A2%E6%AF%95%E4%B8%9A%E7%94%9F%E6%89%8B%E7%BB%98%E8%A2%AB%E8%AF%AF%E8%AE%A4%E4%B8%BA%E5%8D%B0%E5%88%B7%E5%93%81%23) `342.5K 🔥` `NEW`
1. [问界回应浙江台州M9事故](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E5%9B%9E%E5%BA%94%E6%B5%99%E6%B1%9F%E5%8F%B0%E5%B7%9EM9%E4%BA%8B%E6%95%85%23) `340.8K 🔥` `NEW`
1. [陈学冬是唯一受邀的圈内挚友](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%AD%A6%E5%86%AC%E6%98%AF%E5%94%AF%E4%B8%80%E5%8F%97%E9%82%80%E7%9A%84%E5%9C%88%E5%86%85%E6%8C%9A%E5%8F%8B%23) `339.1K 🔥` `NEW`
1. [女子捡12斤大鱼吃掉后请失主吃火锅](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8D%A112%E6%96%A4%E5%A4%A7%E9%B1%BC%E5%90%83%E6%8E%89%E5%90%8E%E8%AF%B7%E5%A4%B1%E4%B8%BB%E5%90%83%E7%81%AB%E9%94%85%23) `337.4K 🔥` `NEW`
1. [孙一宁曝医美骗局](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%B8%80%E5%AE%81%E6%9B%9D%E5%8C%BB%E7%BE%8E%E9%AA%97%E5%B1%80%23) `332.6K 🔥` `NEW`
1. [丁程鑫不敢想结婚](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%8D%E6%95%A2%E6%83%B3%E7%BB%93%E5%A9%9A%23) `314.3K 🔥` `NEW`
1. [莲花CEO称超过1.8吨就是菜车](https://s.weibo.com/weibo?q=%23%E8%8E%B2%E8%8A%B1CEO%E7%A7%B0%E8%B6%85%E8%BF%871.8%E5%90%A8%E5%B0%B1%E6%98%AF%E8%8F%9C%E8%BD%A6%23) `286.3K 🔥` `NEW`
1. [你好星期六辟谣李小冉录制节目受伤](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E8%BE%9F%E8%B0%A3%E6%9D%8E%E5%B0%8F%E5%86%89%E5%BD%95%E5%88%B6%E8%8A%82%E7%9B%AE%E5%8F%97%E4%BC%A4%23) `284.1K 🔥` `NEW`
1. [迪丽热巴热转区 (Dilireba hot transfer area)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%83%AD%E8%BD%AC%E5%8C%BA%23) `284.0K 🔥` `NEW`
1. [丁程鑫被NPC亲脸](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%A2%ABNPC%E4%BA%B2%E8%84%B8%23) `279.0K 🔥` `NEW`
1. [贺峻霖公示期已过](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%85%AC%E7%A4%BA%E6%9C%9F%E5%B7%B2%E8%BF%87%23) `266.3K 🔥` `NEW`
1. [3岁孩子被过度保护只会说3个字](https://s.weibo.com/weibo?q=%233%E5%B2%81%E5%AD%A9%E5%AD%90%E8%A2%AB%E8%BF%87%E5%BA%A6%E4%BF%9D%E6%8A%A4%E5%8F%AA%E4%BC%9A%E8%AF%B43%E4%B8%AA%E5%AD%97%23) `256.2K 🔥` `NEW`
1. [李小冉疑似录制节目受伤](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%96%91%E4%BC%BC%E5%BD%95%E5%88%B6%E8%8A%82%E7%9B%AE%E5%8F%97%E4%BC%A4%23) `247.2K 🔥` `NEW`
1. [文彩元婚纱照](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%BD%A9%E5%85%83%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `246.5K 🔥` `NEW`
1. [男子买34层房收房得知只盖到32层](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B9%B034%E5%B1%82%E6%88%BF%E6%94%B6%E6%88%BF%E5%BE%97%E7%9F%A5%E5%8F%AA%E7%9B%96%E5%88%B032%E5%B1%82%23) `236.7K 🔥` `NEW`
1. [奚梦瑶何猷君儿女腿长](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E4%BD%95%E7%8C%B7%E5%90%9B%E5%84%BF%E5%A5%B3%E8%85%BF%E9%95%BF%23) `206.3K 🔥` `NEW`
1. [白云机场回应滑行久等三大投诉](https://s.weibo.com/weibo?q=%23%E7%99%BD%E4%BA%91%E6%9C%BA%E5%9C%BA%E5%9B%9E%E5%BA%94%E6%BB%91%E8%A1%8C%E4%B9%85%E7%AD%89%E4%B8%89%E5%A4%A7%E6%8A%95%E8%AF%89%23) `205.6K 🔥` `NEW`
1. [AI删光2.8万行代码还给自己写表扬信](https://s.weibo.com/weibo?q=%23AI%E5%88%A0%E5%85%892.8%E4%B8%87%E8%A1%8C%E4%BB%A3%E7%A0%81%E8%BF%98%E7%BB%99%E8%87%AA%E5%B7%B1%E5%86%99%E8%A1%A8%E6%89%AC%E4%BF%A1%23) `205.4K 🔥` `NEW`
1. [被仅退款后商家抱娃跨省追债 (After being given a refund, the merchant went to other provinces to pursue debt collection)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%BB%85%E9%80%80%E6%AC%BE%E5%90%8E%E5%95%86%E5%AE%B6%E6%8A%B1%E5%A8%83%E8%B7%A8%E7%9C%81%E8%BF%BD%E5%80%BA%23) `205.3K 🔥` `NEW`
1. [11岁男童深山走失13天靠野果存活](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E7%94%B7%E7%AB%A5%E6%B7%B1%E5%B1%B1%E8%B5%B0%E5%A4%B113%E5%A4%A9%E9%9D%A0%E9%87%8E%E6%9E%9C%E5%AD%98%E6%B4%BB%23) `205.3K 🔥` `NEW`
1. [网友称吃饭遇王祖蓝进店被清场](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%A7%B0%E5%90%83%E9%A5%AD%E9%81%87%E7%8E%8B%E7%A5%96%E8%93%9D%E8%BF%9B%E5%BA%97%E8%A2%AB%E6%B8%85%E5%9C%BA%23) `190.8K 🔥` `NEW`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `176.2K 🔥` `NEW`
1. [骑士总冠军的含金量还在上升](https://s.weibo.com/weibo?q=%23%E9%AA%91%E5%A3%AB%E6%80%BB%E5%86%A0%E5%86%9B%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `175.7K 🔥` `NEW`
1. [梅西C罗首秀场次](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BFC%E7%BD%97%E9%A6%96%E7%A7%80%E5%9C%BA%E6%AC%A1%23) `175.4K 🔥` `NEW`
1. [打个麻将把小朋友吓坏了](https://s.weibo.com/weibo?q=%23%E6%89%93%E4%B8%AA%E9%BA%BB%E5%B0%86%E6%8A%8A%E5%B0%8F%E6%9C%8B%E5%8F%8B%E5%90%93%E5%9D%8F%E4%BA%86%23) `174.2K 🔥` `NEW`
1. [减脂期想吃什么要立刻去吃](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%84%82%E6%9C%9F%E6%83%B3%E5%90%83%E4%BB%80%E4%B9%88%E8%A6%81%E7%AB%8B%E5%88%BB%E5%8E%BB%E5%90%83%23) `174.1K 🔥` `NEW`
1. [豆包不会做馒头 (Bean buns will not make steamed buns)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E4%B8%8D%E4%BC%9A%E5%81%9A%E9%A6%92%E5%A4%B4%23) `283.6K 🔥` `-80%`
1. [国内金价跌破980元每克](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E9%87%91%E4%BB%B7%E8%B7%8C%E7%A0%B4980%E5%85%83%E6%AF%8F%E5%85%8B%23) `175.1K 🔥` `-56%`

Updated at 2026-06-03 15:06:19

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
