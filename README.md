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

1. [高质量发展看新疆 (High-quality development in Xinjiang)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E7%9C%8B%E6%96%B0%E7%96%86%23) `987.6K 🔥` `NEW`
1. [德国巴拉圭 折磨](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E5%B7%B4%E6%8B%89%E5%9C%AD%20%E6%8A%98%E7%A3%A8%23) `464.2K 🔥` `NEW`
1. [全球芯片巨头史诗级扩产](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%8A%AF%E7%89%87%E5%B7%A8%E5%A4%B4%E5%8F%B2%E8%AF%97%E7%BA%A7%E6%89%A9%E4%BA%A7%23) `241.0K 🔥` `NEW`
1. [恋与深空道歉声明](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E9%81%93%E6%AD%89%E5%A3%B0%E6%98%8E%23) `234.0K 🔥` `NEW`
1. [点球大战](https://s.weibo.com/weibo?q=%23%E7%82%B9%E7%90%83%E5%A4%A7%E6%88%98%23) `214.3K 🔥` `NEW`
1. [韩国球迷凌晨4点接机怒骂主教练](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%90%83%E8%BF%B7%E5%87%8C%E6%99%A84%E7%82%B9%E6%8E%A5%E6%9C%BA%E6%80%92%E9%AA%82%E4%B8%BB%E6%95%99%E7%BB%83%23) `147.4K 🔥` `NEW`
1. [曝娱乐圈大部分明星失业](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A8%B1%E4%B9%90%E5%9C%88%E5%A4%A7%E9%83%A8%E5%88%86%E6%98%8E%E6%98%9F%E5%A4%B1%E4%B8%9A%23) `139.8K 🔥` `NEW`
1. [李准基参加文彩元婚礼](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%87%86%E5%9F%BA%E5%8F%82%E5%8A%A0%E6%96%87%E5%BD%A9%E5%85%83%E5%A9%9A%E7%A4%BC%23) `113.6K 🔥` `NEW`
1. [中国新一轮出口管制直指日本命脉](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E4%B8%80%E8%BD%AE%E5%87%BA%E5%8F%A3%E7%AE%A1%E5%88%B6%E7%9B%B4%E6%8C%87%E6%97%A5%E6%9C%AC%E5%91%BD%E8%84%89%23) `113.1K 🔥` `NEW`
1. [德国巴拉圭加时](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E5%B7%B4%E6%8B%89%E5%9C%AD%E5%8A%A0%E6%97%B6%23) `110.8K 🔥` `NEW`
1. [巴拉圭进球 (Paraguay goals)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD%E8%BF%9B%E7%90%83%23) `105.7K 🔥` `NEW`
1. [三星投资计划](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E6%8A%95%E8%B5%84%E8%AE%A1%E5%88%92%23) `103.6K 🔥` `NEW`
1. [巴西绝杀 (Brazil's buzzer beater)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E7%BB%9D%E6%9D%80%23) `5.0M 🔥` `+115%`
1. [德国vs巴拉圭](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BDvs%E5%B7%B4%E6%8B%89%E5%9C%AD%23) `2.7M 🔥` `+121%`
1. [K90至尊版今晚7点见](https://s.weibo.com/weibo?q=%23K90%E8%87%B3%E5%B0%8A%E7%89%88%E4%BB%8A%E6%99%9A7%E7%82%B9%E8%A7%81%23) `772.9K 🔥` `+255%`
1. [巴西2比1日本](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF2%E6%AF%941%E6%97%A5%E6%9C%AC%23) `667.2K 🔥` `+116%`
1. [马航MH370传来最新消息](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E8%88%AAMH370%E4%BC%A0%E6%9D%A5%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF%23) `620.8K 🔥` `+182%`
1. [王源近几年没有路演了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E8%BF%91%E5%87%A0%E5%B9%B4%E6%B2%A1%E6%9C%89%E8%B7%AF%E6%BC%94%E4%BA%86%23) `485.2K 🔥` `+192%`
1. [檀健次王楚然吻戏看热了](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%90%BB%E6%88%8F%E7%9C%8B%E7%83%AD%E4%BA%86%23) `254.2K 🔥` `+231%`
1. [怕iPhone涨价的用户已紧急换新 (Users who are afraid of rising iPhone prices have urgently replaced them with new ones.)](https://s.weibo.com/weibo?q=%23%E6%80%95iPhone%E6%B6%A8%E4%BB%B7%E7%9A%84%E7%94%A8%E6%88%B7%E5%B7%B2%E7%B4%A7%E6%80%A5%E6%8D%A2%E6%96%B0%23) `252.3K 🔥` `+486%`
1. [女子清吧被陌生人投放伟哥 (Woman was given Viagra by a stranger at a bar)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B8%85%E5%90%A7%E8%A2%AB%E9%99%8C%E7%94%9F%E4%BA%BA%E6%8A%95%E6%94%BE%E4%BC%9F%E5%93%A5%23) `224.9K 🔥` `+74%`
1. [恋与深空回应争议 (Love and Deep Space Responds to Controversy)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9E%E5%BA%94%E4%BA%89%E8%AE%AE%23) `193.3K 🔥` `+41%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `166.6K 🔥` `+98%`
1. [千万不要随便扣肚脐](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E9%9A%8F%E4%BE%BF%E6%89%A3%E8%82%9A%E8%84%90%23) `155.6K 🔥` `+192%`
1. [刘宇宁是去进货了吗 (Did Liu Yuning go to purchase goods?)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%98%AF%E5%8E%BB%E8%BF%9B%E8%B4%A7%E4%BA%86%E5%90%97%23) `153.0K 🔥` `+144%`
1. [杨紫获白玉兰视后为何争议难平 (Why is Yang Zi so controversial after being spotted by Magnolia?)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%8E%B7%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%90%8E%E4%B8%BA%E4%BD%95%E4%BA%89%E8%AE%AE%E9%9A%BE%E5%B9%B3%23) `150.0K 🔥` `+120%`
1. [好像看到了人类带孩子崩溃的样子](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%83%8F%E7%9C%8B%E5%88%B0%E4%BA%86%E4%BA%BA%E7%B1%BB%E5%B8%A6%E5%AD%A9%E5%AD%90%E5%B4%A9%E6%BA%83%E7%9A%84%E6%A0%B7%E5%AD%90%23) `138.3K 🔥` `+121%`
1. [刘宇宁高情商化解谁站C位](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E9%AB%98%E6%83%85%E5%95%86%E5%8C%96%E8%A7%A3%E8%B0%81%E7%AB%99C%E4%BD%8D%23) `117.8K 🔥` `+183%`
1. [免费试吃发差评被店家挂店门避雷](https://s.weibo.com/weibo?q=%23%E5%85%8D%E8%B4%B9%E8%AF%95%E5%90%83%E5%8F%91%E5%B7%AE%E8%AF%84%E8%A2%AB%E5%BA%97%E5%AE%B6%E6%8C%82%E5%BA%97%E9%97%A8%E9%81%BF%E9%9B%B7%23) `113.5K 🔥` `+29%`
1. [科学备孕男女都要上心](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%AD%A6%E5%A4%87%E5%AD%95%E7%94%B7%E5%A5%B3%E9%83%BD%E8%A6%81%E4%B8%8A%E5%BF%83%23) `112.4K 🔥` `+110%`
1. [李在明向韩国两大财阀90度鞠躬 (Lee Jae-myung bowed 90 degrees to South Korea’s two largest chaebols)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E5%90%91%E9%9F%A9%E5%9B%BD%E4%B8%A4%E5%A4%A7%E8%B4%A2%E9%98%8090%E5%BA%A6%E9%9E%A0%E8%BA%AC%23) `111.9K 🔥` `+209%`
1. [花少8要去世界杯举办国 (Hua Shao 8 is going to the country hosting the World Cup)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E8%A6%81%E5%8E%BB%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%BE%E5%8A%9E%E5%9B%BD%23) `111.2K 🔥` `+126%`
1. [日本进球](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%BF%9B%E7%90%83%23) `110.5K 🔥` `+33%`
1. [女子遭家暴逃跑致丈夫身亡二审细节](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%81%AD%E5%AE%B6%E6%9A%B4%E9%80%83%E8%B7%91%E8%87%B4%E4%B8%88%E5%A4%AB%E8%BA%AB%E4%BA%A1%E4%BA%8C%E5%AE%A1%E7%BB%86%E8%8A%82%23) `109.1K 🔥` `+163%`
1. [英语考了145的人竟然教数学](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E8%AF%AD%E8%80%83%E4%BA%86145%E7%9A%84%E4%BA%BA%E7%AB%9F%E7%84%B6%E6%95%99%E6%95%B0%E5%AD%A6%23) `108.3K 🔥` `+117%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `107.8K 🔥` `+88%`
1. [孙兴慜道歉 (Son Heung-min apologizes)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%85%B4%E6%85%9C%E9%81%93%E6%AD%89%23) `107.2K 🔥` `+38%`
1. [恋与深空已删除锅里洗澡文案 (Love and Deep Space has deleted the text "Bathing in a Pot")](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%B7%B2%E5%88%A0%E9%99%A4%E9%94%85%E9%87%8C%E6%B4%97%E6%BE%A1%E6%96%87%E6%A1%88%23) `107.1K 🔥` `+60%`
1. [张碧晨一开口梦回逐玉 (Zhang Bichen opened her mouth and dreamed of chasing jade)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E4%B8%80%E5%BC%80%E5%8F%A3%E6%A2%A6%E5%9B%9E%E9%80%90%E7%8E%89%23) `106.6K 🔥` `+157%`
1. [当我知道豆包有后台审核人员 (When I knew Doubao had backend reviewers)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E7%9F%A5%E9%81%93%E8%B1%86%E5%8C%85%E6%9C%89%E5%90%8E%E5%8F%B0%E5%AE%A1%E6%A0%B8%E4%BA%BA%E5%91%98%23) `104.9K 🔥` `+150%`
1. [不开心就去看三年前的购物订单 (If you are not happy, just look at the shopping orders from three years ago)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BC%80%E5%BF%83%E5%B0%B1%E5%8E%BB%E7%9C%8B%E4%B8%89%E5%B9%B4%E5%89%8D%E7%9A%84%E8%B4%AD%E7%89%A9%E8%AE%A2%E5%8D%95%23) `104.6K 🔥` `+151%`
1. [千香 (Chika)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%A6%99%23) `102.9K 🔥` `+149%`
1. [主人解开狗绳2只狗将路人撕咬致死](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BA%BA%E8%A7%A3%E5%BC%80%E7%8B%97%E7%BB%B32%E5%8F%AA%E7%8B%97%E5%B0%86%E8%B7%AF%E4%BA%BA%E6%92%95%E5%92%AC%E8%87%B4%E6%AD%BB%23) `102.4K 🔥` `+146%`
1. [爱直接对嘴喝饮料的人天塌了 (The sky is falling for people who like to drink directly from mouth to mouth)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%9B%B4%E6%8E%A5%E5%AF%B9%E5%98%B4%E5%96%9D%E9%A5%AE%E6%96%99%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `185.9K 🔥`
1. [詹姆斯 勇士](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%20%E5%8B%87%E5%A3%AB%23) `152.8K 🔥`
1. [巴西vs日本 (Brazil vs Japan)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BFvs%E6%97%A5%E6%9C%AC%23) `109.7K 🔥`
1. [81岁老人被男子买光菜回家车祸去世](https://s.weibo.com/weibo?q=%2381%E5%B2%81%E8%80%81%E4%BA%BA%E8%A2%AB%E7%94%B7%E5%AD%90%E4%B9%B0%E5%85%89%E8%8F%9C%E5%9B%9E%E5%AE%B6%E8%BD%A6%E7%A5%B8%E5%8E%BB%E4%B8%96%23) `109.2K 🔥`
1. [巴西醒醒 这是淘汰赛](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E9%86%92%E9%86%92%20%E8%BF%99%E6%98%AF%E6%B7%98%E6%B1%B0%E8%B5%9B%23) `105.3K 🔥`
1. [徐亮怒斥世界杯踢假球 (Xu Liang angrily denounced World Cup match-fixing)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E4%BA%AE%E6%80%92%E6%96%A5%E4%B8%96%E7%95%8C%E6%9D%AF%E8%B8%A2%E5%81%87%E7%90%83%23) `104.1K 🔥`
1. [日本淘汰 (Japan eliminated)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B7%98%E6%B1%B0%23) `201.3K 🔥` `-36%`
1. [这些7月新规影响你我](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B7%E6%9C%88%E6%96%B0%E8%A7%84%E5%BD%B1%E5%93%8D%E4%BD%A0%E6%88%91%23) `174.8K 🔥` `-64%`

Updated at 2026-06-30 07:30:24

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
