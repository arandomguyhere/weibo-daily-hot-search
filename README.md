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

1. [红包 (Red envelope)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `1.1M 🔥` `NEW`
1. [真正的魔术 押中春晚魔术](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%AD%94%E6%9C%AF%20%E6%8A%BC%E4%B8%AD%E6%98%A5%E6%99%9A%E9%AD%94%E6%9C%AF%23) `829.0K 🔥` `NEW`
1. [问界M9祝您新年手到福来](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%E7%A5%9D%E6%82%A8%E6%96%B0%E5%B9%B4%E6%89%8B%E5%88%B0%E7%A6%8F%E6%9D%A5%23) `634.1K 🔥` `NEW`
1. [王一博郭富城 坚持手搓](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%83%AD%E5%AF%8C%E5%9F%8E%20%E5%9D%9A%E6%8C%81%E6%89%8B%E6%90%93%23) `582.0K 🔥` `NEW`
1. [马宝宝出生](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%9D%E5%AE%9D%E5%87%BA%E7%94%9F%23) `298.4K 🔥` `NEW`
1. [春晚总导演回应机器人浓度高](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E6%80%BB%E5%AF%BC%E6%BC%94%E5%9B%9E%E5%BA%94%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%B5%93%E5%BA%A6%E9%AB%98%23) `298.4K 🔥` `NEW`
1. [很好的人都是淡淡的](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A5%BD%E7%9A%84%E4%BA%BA%E9%83%BD%E6%98%AF%E6%B7%A1%E6%B7%A1%E7%9A%84%23) `248.4K 🔥` `NEW`
1. [男生回应春节上门喂猫爆赚16万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E5%9B%9E%E5%BA%94%E6%98%A5%E8%8A%82%E4%B8%8A%E9%97%A8%E5%96%82%E7%8C%AB%E7%88%86%E8%B5%9A16%E4%B8%87%23) `248.3K 🔥` `NEW`
1. [央妈不会找王一博赔地板吧](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E5%A6%88%E4%B8%8D%E4%BC%9A%E6%89%BE%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%B5%94%E5%9C%B0%E6%9D%BF%E5%90%A7%23) `247.8K 🔥` `NEW`
1. [义乌春晚震撼出圈](https://s.weibo.com/weibo?q=%23%E4%B9%89%E4%B9%8C%E6%98%A5%E6%99%9A%E9%9C%87%E6%92%BC%E5%87%BA%E5%9C%88%23) `247.2K 🔥` `NEW`
1. [中国国家队祝贺隋文静韩聪 (The Chinese national team congratulates Sui Wenjing and Han Cong)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E9%98%9F%E7%A5%9D%E8%B4%BA%E9%9A%8B%E6%96%87%E9%9D%99%E9%9F%A9%E8%81%AA%23) `246.8K 🔥` `NEW`
1. [沈腾说错词白鹿宋威龙憋笑](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E8%AF%B4%E9%94%99%E8%AF%8D%E7%99%BD%E9%B9%BF%E5%AE%8B%E5%A8%81%E9%BE%99%E6%86%8B%E7%AC%91%23) `246.5K 🔥` `NEW`
1. [刘浩存的小马就这么飞出去了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E7%9A%84%E5%B0%8F%E9%A9%AC%E5%B0%B1%E8%BF%99%E4%B9%88%E9%A3%9E%E5%87%BA%E5%8E%BB%E4%BA%86%23) `246.1K 🔥` `NEW`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `245.4K 🔥` `NEW`
1. [惊蛰无声](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `245.2K 🔥` `NEW`
1. [钟意](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%84%8F%23) `244.8K 🔥` `NEW`
1. [窦靖童 挖嘞个亲娘](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%20%E6%8C%96%E5%98%9E%E4%B8%AA%E4%BA%B2%E5%A8%98%23) `244.6K 🔥` `NEW`
1. [大年初一记得别扫地别泼水](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%80%E8%AE%B0%E5%BE%97%E5%88%AB%E6%89%AB%E5%9C%B0%E5%88%AB%E6%B3%BC%E6%B0%B4%23) `243.9K 🔥` `NEW`
1. [明星红包](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%23) `239.4K 🔥` `NEW`
1. [北京台春晚官宣节目单](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%8F%B0%E6%98%A5%E6%99%9A%E5%AE%98%E5%AE%A3%E8%8A%82%E7%9B%AE%E5%8D%95%23) `232.3K 🔥` `NEW`
1. [白鹿收到了沙溢的红包 (Bailu received a red envelope from Sha Yi)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%94%B6%E5%88%B0%E4%BA%86%E6%B2%99%E6%BA%A2%E7%9A%84%E7%BA%A2%E5%8C%85%23) `219.6K 🔥` `NEW`
1. [客服回应春晚同款机器人85000元](https://s.weibo.com/weibo?q=%23%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%94%E6%98%A5%E6%99%9A%E5%90%8C%E6%AC%BE%E6%9C%BA%E5%99%A8%E4%BA%BA85000%E5%85%83%23) `214.3K 🔥` `NEW`
1. [刘浩存这个空翻和控腿力度](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E8%BF%99%E4%B8%AA%E7%A9%BA%E7%BF%BB%E5%92%8C%E6%8E%A7%E8%85%BF%E5%8A%9B%E5%BA%A6%23) `170.0K 🔥` `NEW`
1. [春节档](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%A1%A3%23) `163.2K 🔥` `NEW`
1. [樊振东新年接祝福](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%96%B0%E5%B9%B4%E6%8E%A5%E7%A5%9D%E7%A6%8F%23) `130.0K 🔥` `NEW`
1. [马年用X7接福好运机](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E7%94%A8X7%E6%8E%A5%E7%A6%8F%E5%A5%BD%E8%BF%90%E6%9C%BA%23) `126.8K 🔥` `NEW`
1. [飞驰人生3](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%23) `125.0K 🔥` `NEW`
1. [汪苏泷长李现笑点上了吧](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E9%95%BF%E6%9D%8E%E7%8E%B0%E7%AC%91%E7%82%B9%E4%B8%8A%E4%BA%86%E5%90%A7%23) `123.4K 🔥` `NEW`
1. [林孝埈500米突出重围](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88500%E7%B1%B3%E7%AA%81%E5%87%BA%E9%87%8D%E5%9B%B4%23) `122.0K 🔥` `NEW`
1. [春晚最惊艳的明星](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E6%9C%80%E6%83%8A%E8%89%B3%E7%9A%84%E6%98%8E%E6%98%9F%23) `120.7K 🔥` `NEW`
1. [隋文静韩聪最想说的是感谢 (What Sui Wenjing and Han Cong want to say most is thank you)](https://s.weibo.com/weibo?q=%23%E9%9A%8B%E6%96%87%E9%9D%99%E9%9F%A9%E8%81%AA%E6%9C%80%E6%83%B3%E8%AF%B4%E7%9A%84%E6%98%AF%E6%84%9F%E8%B0%A2%23) `112.9K 🔥` `NEW`
1. [李沁春晚穿的是非遗花罗](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%81%E6%98%A5%E6%99%9A%E7%A9%BF%E7%9A%84%E6%98%AF%E9%9D%9E%E9%81%97%E8%8A%B1%E7%BD%97%23) `111.5K 🔥` `NEW`
1. [苹果3月举办发布会](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C3%E6%9C%88%E4%B8%BE%E5%8A%9E%E5%8F%91%E5%B8%83%E4%BC%9A%23) `105.0K 🔥` `NEW`
1. [看飞驰人生接美的好风 (Watch the beautiful scenery of flying life)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F%E6%8E%A5%E7%BE%8E%E7%9A%84%E5%A5%BD%E9%A3%8E%23) `298.0K 🔥` `+199%`
1. [春晚拍出了王楚然的人生镜头](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E6%8B%8D%E5%87%BA%E4%BA%86%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%9A%84%E4%BA%BA%E7%94%9F%E9%95%9C%E5%A4%B4%23) `247.7K 🔥` `+211%`
1. [宇树科技股票 (Yushu Technology Stock)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E8%82%A1%E7%A5%A8%23) `247.0K 🔥` `+60%`
1. [谁给迪丽热巴化的妆 (Who put makeup on Dilireba?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8C%96%E7%9A%84%E5%A6%86%23) `244.3K 🔥` `+72%`
1. [TFBOYS怎么变四个人了](https://s.weibo.com/weibo?q=%23TFBOYS%E6%80%8E%E4%B9%88%E5%8F%98%E5%9B%9B%E4%B8%AA%E4%BA%BA%E4%BA%86%23) `243.8K 🔥` `+135%`
1. [过年好 (Happy New Year)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E5%A5%BD%23) `232.3K 🔥` `+23%`
1. [左肩有你](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%82%A9%E6%9C%89%E4%BD%A0%23) `166.7K 🔥` `+131%`
1. [谷爱凌刘梦婷大跳台决赛 (Gu Ailing, Liu Mengting, big platform finals)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%88%98%E6%A2%A6%E5%A9%B7%E5%A4%A7%E8%B7%B3%E5%8F%B0%E5%86%B3%E8%B5%9B%23) `153.5K 🔥` `+28%`
1. [田曦薇宋威龙 谁来递个本子](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%AE%8B%E5%A8%81%E9%BE%99%20%E8%B0%81%E6%9D%A5%E9%80%92%E4%B8%AA%E6%9C%AC%E5%AD%90%23) `153.4K 🔥` `+33%`
1. [春晚分会场上大分 (Spring Festival Gala Branch Venue Oita)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%88%86%E4%BC%9A%E5%9C%BA%E4%B8%8A%E5%A4%A7%E5%88%86%23) `663.4K 🔥`
1. [春晚 (Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%23) `298.0K 🔥`
1. [谷爱凌创造自由式滑雪奖牌纪录](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%88%9B%E9%80%A0%E8%87%AA%E7%94%B1%E5%BC%8F%E6%BB%91%E9%9B%AA%E5%A5%96%E7%89%8C%E7%BA%AA%E5%BD%95%23) `245.7K 🔥`
1. [王菲水滴耳环 (Faye Wong drop earrings)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%B0%B4%E6%BB%B4%E8%80%B3%E7%8E%AF%23) `111.9K 🔥`
1. [邓超妈妈](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%A6%88%E5%A6%88%23) `103.1K 🔥`
1. [谷爱凌大跳台银牌 (Gu Ailing silver medal in big platform)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%A7%E8%B7%B3%E5%8F%B0%E9%93%B6%E7%89%8C%23) `297.4K 🔥` `-72%`
1. [沈腾 说错词 (Shen Teng said the wrong word)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%20%E8%AF%B4%E9%94%99%E8%AF%8D%23) `211.2K 🔥` `-57%`
1. [大年初一 (New Year's Day)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%80%23) `167.3K 🔥` `-78%`
1. [短剧上春晚了 (The short play was on the Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E4%B8%8A%E6%98%A5%E6%99%9A%E4%BA%86%23) `115.1K 🔥` `-45%`

Updated at 2026-02-17 10:53:41

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
