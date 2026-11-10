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

1. [金鸡奖获奖名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B8%A1%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `1.6M 🔥` `NEW`
1. [学龄人口达峰 幼儿园小学初中资源优化](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E9%BE%84%E4%BA%BA%E5%8F%A3%E8%BE%BE%E5%B3%B0%20%E5%B9%BC%E5%84%BF%E5%9B%AD%E5%B0%8F%E5%AD%A6%E5%88%9D%E4%B8%AD%E8%B5%84%E6%BA%90%E4%BC%98%E5%8C%96%23) `1.6M 🔥` `NEW`
1. [进博会到APEC见证中国开放纵深](https://s.weibo.com/weibo?q=%23%E8%BF%9B%E5%8D%9A%E4%BC%9A%E5%88%B0APEC%E8%A7%81%E8%AF%81%E4%B8%AD%E5%9B%BD%E5%BC%80%E6%94%BE%E7%BA%B5%E6%B7%B1%23) `1.6M 🔥` `NEW`
1. [华为手机金鸡盛典追星神器](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%89%8B%E6%9C%BA%E9%87%91%E9%B8%A1%E7%9B%9B%E5%85%B8%E8%BF%BD%E6%98%9F%E7%A5%9E%E5%99%A8%23) `1.6M 🔥` `NEW`
1. [高叶愣了几秒哭了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8F%B6%E6%84%A3%E4%BA%86%E5%87%A0%E7%A7%92%E5%93%AD%E4%BA%86%23) `1.6M 🔥` `NEW`
1. [金鸡影帝影后 实至名归](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B8%A1%E5%BD%B1%E5%B8%9D%E5%BD%B1%E5%90%8E%20%E5%AE%9E%E8%87%B3%E5%90%8D%E5%BD%92%23) `1.6M 🔥` `NEW`
1. [白鹿听到画地为牢的反应](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%90%AC%E5%88%B0%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%E7%9A%84%E5%8F%8D%E5%BA%94%23) `1.6M 🔥` `NEW`
1. [男子肛门藏冰毒入境被抓](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%82%9B%E9%97%A8%E8%97%8F%E5%86%B0%E6%AF%92%E5%85%A5%E5%A2%83%E8%A2%AB%E6%8A%93%23) `1.6M 🔥` `NEW`
1. [戴假睫毛月嫂工资一天580元](https://s.weibo.com/weibo?q=%23%E6%88%B4%E5%81%87%E7%9D%AB%E6%AF%9B%E6%9C%88%E5%AB%82%E5%B7%A5%E8%B5%84%E4%B8%80%E5%A4%A9580%E5%85%83%23) `1.5M 🔥` `NEW`
1. [领克900L首发亮相](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B900L%E9%A6%96%E5%8F%91%E4%BA%AE%E7%9B%B8%23) `1.5M 🔥` `NEW`
1. [花坛藏尸案庭审现场画面](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%9D%9B%E8%97%8F%E5%B0%B8%E6%A1%88%E5%BA%AD%E5%AE%A1%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `1.5M 🔥` `NEW`
1. [金鸡最佳导演 爆冷](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B8%A1%E6%9C%80%E4%BD%B3%E5%AF%BC%E6%BC%94%20%E7%88%86%E5%86%B7%23) `1.5M 🔥` `NEW`
1. [白小纯对着摄像头撒谎](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%AF%B9%E7%9D%80%E6%91%84%E5%83%8F%E5%A4%B4%E6%92%92%E8%B0%8E%23) `1.5M 🔥` `NEW`
1. [高叶金鸡影后](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8F%B6%E9%87%91%E9%B8%A1%E5%BD%B1%E5%90%8E%23) `1.5M 🔥` `NEW`
1. [梁家辉影史第二位三金影帝](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E5%BD%B1%E5%8F%B2%E7%AC%AC%E4%BA%8C%E4%BD%8D%E4%B8%89%E9%87%91%E5%BD%B1%E5%B8%9D%23) `1.2M 🔥` `NEW`
1. [女子补缴社保个人承担不到10万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A1%A5%E7%BC%B4%E7%A4%BE%E4%BF%9D%E4%B8%AA%E4%BA%BA%E6%89%BF%E6%8B%85%E4%B8%8D%E5%88%B010%E4%B8%87%23) `1.1M 🔥` `NEW`
1. [金子涵妹妹回复网友](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%A6%B9%E5%A6%B9%E5%9B%9E%E5%A4%8D%E7%BD%91%E5%8F%8B%23) `1.0M 🔥` `NEW`
1. [何炅甚至唱得比许飞好](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E7%94%9A%E8%87%B3%E5%94%B1%E5%BE%97%E6%AF%94%E8%AE%B8%E9%A3%9E%E5%A5%BD%23) `929.0K 🔥` `NEW`
1. [外国人高铁车厢抽烟引质疑](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E9%AB%98%E9%93%81%E8%BD%A6%E5%8E%A2%E6%8A%BD%E7%83%9F%E5%BC%95%E8%B4%A8%E7%96%91%23) `928.3K 🔥` `NEW`
1. [老人趴在炕上突然炕炸了](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E8%B6%B4%E5%9C%A8%E7%82%95%E4%B8%8A%E7%AA%81%E7%84%B6%E7%82%95%E7%82%B8%E4%BA%86%23) `923.9K 🔥` `NEW`
1. [美国10月CPI公布](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD10%E6%9C%88CPI%E5%85%AC%E5%B8%83%23) `920.9K 🔥` `NEW`
1. [乌鲁木齐大风现场画面](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E5%A4%A7%E9%A3%8E%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `915.2K 🔥` `NEW`
1. [刘耀文天猫双11疯狂好六夜](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%A4%A9%E7%8C%AB%E5%8F%8C11%E7%96%AF%E7%8B%82%E5%A5%BD%E5%85%AD%E5%A4%9C%23) `912.9K 🔥` `NEW`
1. [朱一龙哽咽恭喜高叶](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E5%93%BD%E5%92%BD%E6%81%AD%E5%96%9C%E9%AB%98%E5%8F%B6%23) `909.0K 🔥` `NEW`
1. [许飞说很久没在这么漂亮的舞台表演了](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E8%AF%B4%E5%BE%88%E4%B9%85%E6%B2%A1%E5%9C%A8%E8%BF%99%E4%B9%88%E6%BC%82%E4%BA%AE%E7%9A%84%E8%88%9E%E5%8F%B0%E8%A1%A8%E6%BC%94%E4%BA%86%23) `689.9K 🔥` `NEW`
1. [梁家辉金鸡影帝](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E9%87%91%E9%B8%A1%E5%BD%B1%E5%B8%9D%23) `587.6K 🔥` `NEW`
1. [奶奶说选不喜欢的孩子养老不心疼](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E8%AF%B4%E9%80%89%E4%B8%8D%E5%96%9C%E6%AC%A2%E7%9A%84%E5%AD%A9%E5%AD%90%E5%85%BB%E8%80%81%E4%B8%8D%E5%BF%83%E7%96%BC%23) `554.7K 🔥` `NEW`
1. [生理性喜欢 vs 生理性厌恶](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%20vs%20%E7%94%9F%E7%90%86%E6%80%A7%E5%8E%8C%E6%81%B6%23) `501.0K 🔥` `NEW`
1. [儿媳流产婆婆不照料还称其是报应](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AA%B3%E6%B5%81%E4%BA%A7%E5%A9%86%E5%A9%86%E4%B8%8D%E7%85%A7%E6%96%99%E8%BF%98%E7%A7%B0%E5%85%B6%E6%98%AF%E6%8A%A5%E5%BA%94%23) `465.0K 🔥` `NEW`
1. [EDG官宣Smoggy离队](https://s.weibo.com/weibo?q=%23EDG%E5%AE%98%E5%AE%A3Smoggy%E7%A6%BB%E9%98%9F%23) `412.1K 🔥` `NEW`
1. [杨紫玉兰花开君再来预告片](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%8E%89%E5%85%B0%E8%8A%B1%E5%BC%80%E5%90%9B%E5%86%8D%E6%9D%A5%E9%A2%84%E5%91%8A%E7%89%87%23) `381.9K 🔥` `NEW`
1. [严浩翔给瞿颖递玫瑰前扭这几下](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%BB%99%E7%9E%BF%E9%A2%96%E9%80%92%E7%8E%AB%E7%91%B0%E5%89%8D%E6%89%AD%E8%BF%99%E5%87%A0%E4%B8%8B%23) `332.2K 🔥` `NEW`
1. [时代少年团山河图舞台](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B1%B1%E6%B2%B3%E5%9B%BE%E8%88%9E%E5%8F%B0%23) `330.3K 🔥` `NEW`
1. [白鹿看孟子义唱歌的表情](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9C%8B%E5%AD%9F%E5%AD%90%E4%B9%89%E5%94%B1%E6%AD%8C%E7%9A%84%E8%A1%A8%E6%83%85%23) `293.5K 🔥` `NEW`
1. [芒果喊话撒贝宁厉娜](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E5%96%8A%E8%AF%9D%E6%92%92%E8%B4%9D%E5%AE%81%E5%8E%89%E5%A8%9C%23) `275.6K 🔥` `NEW`
1. [一位韩国TheShy粉丝想说的话](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BD%8D%E9%9F%A9%E5%9B%BDTheShy%E7%B2%89%E4%B8%9D%E6%83%B3%E8%AF%B4%E7%9A%84%E8%AF%9D%23) `268.6K 🔥` `NEW`
1. [花坛藏尸案凶手审讯画面首度公开](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%9D%9B%E8%97%8F%E5%B0%B8%E6%A1%88%E5%87%B6%E6%89%8B%E5%AE%A1%E8%AE%AF%E7%94%BB%E9%9D%A2%E9%A6%96%E5%BA%A6%E5%85%AC%E5%BC%80%23) `264.6K 🔥` `NEW`
1. [体育照亮未来](https://s.weibo.com/weibo?q=%23%E4%BD%93%E8%82%B2%E7%85%A7%E4%BA%AE%E6%9C%AA%E6%9D%A5%23) `263.1K 🔥` `NEW`
1. [尚公主言尚晚摇圆房](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E8%A8%80%E5%B0%9A%E6%99%9A%E6%91%87%E5%9C%86%E6%88%BF%23) `263.1K 🔥` `NEW`
1. [我的初中同学黄景瑜](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%88%9D%E4%B8%AD%E5%90%8C%E5%AD%A6%E9%BB%84%E6%99%AF%E7%91%9C%23) `263.0K 🔥` `NEW`
1. [那英大喊马嘉祺](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E5%A4%A7%E5%96%8A%E9%A9%AC%E5%98%89%E7%A5%BA%23) `263.0K 🔥` `NEW`
1. [CPI](https://s.weibo.com/weibo?q=%23CPI%23) `263.0K 🔥` `NEW`
1. [iPhoneDuo不用抢了](https://s.weibo.com/weibo?q=%23iPhoneDuo%E4%B8%8D%E7%94%A8%E6%8A%A2%E4%BA%86%23) `263.0K 🔥` `NEW`
1. [青稚允许你说不舒服了](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E5%85%81%E8%AE%B8%E4%BD%A0%E8%AF%B4%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `262.9K 🔥` `NEW`
1. [朱一龙看梁家辉获奖后的反应](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E7%9C%8B%E6%A2%81%E5%AE%B6%E8%BE%89%E8%8E%B7%E5%A5%96%E5%90%8E%E7%9A%84%E5%8F%8D%E5%BA%94%23) `262.9K 🔥` `NEW`
1. [i茅台将从抢购转为日常售卖](https://s.weibo.com/weibo?q=%23i%E8%8C%85%E5%8F%B0%E5%B0%86%E4%BB%8E%E6%8A%A2%E8%B4%AD%E8%BD%AC%E4%B8%BA%E6%97%A5%E5%B8%B8%E5%94%AE%E5%8D%96%23) `262.9K 🔥` `NEW`
1. [双11AI家电销量逆势上涨](https://s.weibo.com/weibo?q=%23%E5%8F%8C11AI%E5%AE%B6%E7%94%B5%E9%94%80%E9%87%8F%E9%80%86%E5%8A%BF%E4%B8%8A%E6%B6%A8%23) `262.8K 🔥` `NEW`
1. [易烊千玺是金鸡奖最佳导演颁奖嘉宾](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%98%AF%E9%87%91%E9%B8%A1%E5%A5%96%E6%9C%80%E4%BD%B3%E5%AF%BC%E6%BC%94%E9%A2%81%E5%A5%96%E5%98%89%E5%AE%BE%23) `262.8K 🔥` `NEW`
1. [返乡女孩用垃圾袋制华服走秀出圈](https://s.weibo.com/weibo?q=%23%E8%BF%94%E4%B9%A1%E5%A5%B3%E5%AD%A9%E7%94%A8%E5%9E%83%E5%9C%BE%E8%A2%8B%E5%88%B6%E5%8D%8E%E6%9C%8D%E8%B5%B0%E7%A7%80%E5%87%BA%E5%9C%88%23) `262.8K 🔥` `NEW`
1. [阿里宣布平头哥赴港上市](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E5%AE%A3%E5%B8%83%E5%B9%B3%E5%A4%B4%E5%93%A5%E8%B5%B4%E6%B8%AF%E4%B8%8A%E5%B8%82%23) `262.7K 🔥` `NEW`
1. [李泽楷公司卖出全球最贵人寿保单](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B3%BD%E6%A5%B7%E5%85%AC%E5%8F%B8%E5%8D%96%E5%87%BA%E5%85%A8%E7%90%83%E6%9C%80%E8%B4%B5%E4%BA%BA%E5%AF%BF%E4%BF%9D%E5%8D%95%23) `262.7K 🔥` `NEW`

Updated at 2026-11-10 23:40:13

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
