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

1. [雨爱太好听了 (Yuai sounds so good)](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E7%88%B1%E5%A4%AA%E5%A5%BD%E5%90%AC%E4%BA%86%23) `944.7K 🔥` `NEW`
1. [谢娜直播官宣演唱会](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E7%9B%B4%E6%92%AD%E5%AE%98%E5%AE%A3%E6%BC%94%E5%94%B1%E4%BC%9A%23) `636.4K 🔥` `NEW`
1. [雨爱 这才是全开麦](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E7%88%B1%20%E8%BF%99%E6%89%8D%E6%98%AF%E5%85%A8%E5%BC%80%E9%BA%A6%23) `601.0K 🔥` `NEW`
1. [王嘉尔纽约万人演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E7%BA%BD%E7%BA%A6%E4%B8%87%E4%BA%BA%E6%BC%94%E5%94%B1%E4%BC%9A%23) `500.9K 🔥` `NEW`
1. [萧蔷团794票](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%E5%9B%A2794%E7%A5%A8%23) `189.6K 🔥` `NEW`
1. [特朗普称美方开始清理霍尔木兹海峡](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E6%96%B9%E5%BC%80%E5%A7%8B%E6%B8%85%E7%90%86%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `185.9K 🔥` `NEW`
1. [李小冉口误喊赵兆老公](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%8F%A3%E8%AF%AF%E5%96%8A%E8%B5%B5%E5%85%86%E8%80%81%E5%85%AC%23) `184.8K 🔥` `NEW`
1. [理想汽车就被拉踩对比报案](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E6%B1%BD%E8%BD%A6%E5%B0%B1%E8%A2%AB%E6%8B%89%E8%B8%A9%E5%AF%B9%E6%AF%94%E6%8A%A5%E6%A1%88%23) `183.2K 🔥` `NEW`
1. [江语晨胜诉浪姐后台哭成一片](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E8%83%9C%E8%AF%89%E6%B5%AA%E5%A7%90%E5%90%8E%E5%8F%B0%E5%93%AD%E6%88%90%E4%B8%80%E7%89%87%23) `180.7K 🔥` `NEW`
1. [苏超常州vs南通首发名单](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%B8%B8%E5%B7%9Evs%E5%8D%97%E9%80%9A%E9%A6%96%E5%8F%91%E5%90%8D%E5%8D%95%23) `179.2K 🔥` `NEW`
1. [海底捞已通知一千多家门店内部排查 (Haidilao has notified more than a thousand stores for internal inspections)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E5%B7%B2%E9%80%9A%E7%9F%A5%E4%B8%80%E5%8D%83%E5%A4%9A%E5%AE%B6%E9%97%A8%E5%BA%97%E5%86%85%E9%83%A8%E6%8E%92%E6%9F%A5%23) `173.7K 🔥` `NEW`
1. [我英语水平 乌兰图雅](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%8B%B1%E8%AF%AD%E6%B0%B4%E5%B9%B3%20%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%23) `169.9K 🔥` `NEW`
1. [流浪FMVP](https://s.weibo.com/weibo?q=%23%E6%B5%81%E6%B5%AAFMVP%23) `169.7K 🔥` `NEW`
1. [面馆提供宝宝面请妈妈先做自己](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E9%A6%86%E6%8F%90%E4%BE%9B%E5%AE%9D%E5%AE%9D%E9%9D%A2%E8%AF%B7%E5%A6%88%E5%A6%88%E5%85%88%E5%81%9A%E8%87%AA%E5%B7%B1%23) `169.7K 🔥` `NEW`
1. [苏超今年剧本变了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E4%BB%8A%E5%B9%B4%E5%89%A7%E6%9C%AC%E5%8F%98%E4%BA%86%23) `169.7K 🔥` `NEW`
1. [伊朗称已迫使美军驱逐舰返航](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%B7%B2%E8%BF%AB%E4%BD%BF%E7%BE%8E%E5%86%9B%E9%A9%B1%E9%80%90%E8%88%B0%E8%BF%94%E8%88%AA%23) `169.7K 🔥` `NEW`
1. [浪姐 投票标准](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E6%8A%95%E7%A5%A8%E6%A0%87%E5%87%86%23) `169.7K 🔥` `NEW`
1. [35岁是癌症风险关键分水岭](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E6%98%AF%E7%99%8C%E7%97%87%E9%A3%8E%E9%99%A9%E5%85%B3%E9%94%AE%E5%88%86%E6%B0%B4%E5%B2%AD%23) `169.7K 🔥` `NEW`
1. [俩弟弟长得像妈妈哥哥却长得像爸爸](https://s.weibo.com/weibo?q=%23%E4%BF%A9%E5%BC%9F%E5%BC%9F%E9%95%BF%E5%BE%97%E5%83%8F%E5%A6%88%E5%A6%88%E5%93%A5%E5%93%A5%E5%8D%B4%E9%95%BF%E5%BE%97%E5%83%8F%E7%88%B8%E7%88%B8%23) `169.7K 🔥` `NEW`
1. [我听心愿便利贴belike曾沛慈](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%90%AC%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4belike%E6%9B%BE%E6%B2%9B%E6%85%88%23) `169.7K 🔥` `NEW`
1. [SK教练 (Coach SK)](https://s.weibo.com/weibo?q=%23SK%E6%95%99%E7%BB%83%23) `169.7K 🔥` `NEW`
1. [给老师起外号被扇耳光小学生家长发声](https://s.weibo.com/weibo?q=%23%E7%BB%99%E8%80%81%E5%B8%88%E8%B5%B7%E5%A4%96%E5%8F%B7%E8%A2%AB%E6%89%87%E8%80%B3%E5%85%89%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%AE%B6%E9%95%BF%E5%8F%91%E5%A3%B0%23) `169.7K 🔥` `NEW`
1. [永远被浪姐女性间磅礴共情力打动](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BF%9C%E8%A2%AB%E6%B5%AA%E5%A7%90%E5%A5%B3%E6%80%A7%E9%97%B4%E7%A3%85%E7%A4%B4%E5%85%B1%E6%83%85%E5%8A%9B%E6%89%93%E5%8A%A8%23) `169.7K 🔥` `NEW`
1. [迪丽热巴眼窝立体到自带阴影](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9C%BC%E7%AA%9D%E7%AB%8B%E4%BD%93%E5%88%B0%E8%87%AA%E5%B8%A6%E9%98%B4%E5%BD%B1%23) `168.4K 🔥` `NEW`
1. [常州2比0领先南通](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%B7%9E2%E6%AF%940%E9%A2%86%E5%85%88%E5%8D%97%E9%80%9A%23) `164.2K 🔥` `NEW`
1. [一笙三冠辅助](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%99%E4%B8%89%E5%86%A0%E8%BE%85%E5%8A%A9%23) `160.9K 🔥` `NEW`
1. [KSG零封狼队](https://s.weibo.com/weibo?q=%23KSG%E9%9B%B6%E5%B0%81%E7%8B%BC%E9%98%9F%23) `1.4M 🔥` `+92%`
1. [苏超比分](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E6%AF%94%E5%88%86%23) `545.2K 🔥` `+54%`
1. [安崎 天生爱豆](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%20%E5%A4%A9%E7%94%9F%E7%88%B1%E8%B1%86%23) `177.0K 🔥` `+33%`
1. [我国经济一季度交出亮眼答卷](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%BB%8F%E6%B5%8E%E4%B8%80%E5%AD%A3%E5%BA%A6%E4%BA%A4%E5%87%BA%E4%BA%AE%E7%9C%BC%E7%AD%94%E5%8D%B7%23) `676.7K 🔥`
1. [姜贞羽差点高位截瘫 (Jiang Zhenyu almost suffered high paraplegia)](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E8%B4%9E%E7%BE%BD%E5%B7%AE%E7%82%B9%E9%AB%98%E4%BD%8D%E6%88%AA%E7%98%AB%23) `166.5K 🔥`
1. [张予曦毕雯珺合伙人零互动 (Zhang Yuxi, Bi Wenjun, partner, zero interaction)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E6%AF%95%E9%9B%AF%E7%8F%BA%E5%90%88%E4%BC%99%E4%BA%BA%E9%9B%B6%E4%BA%92%E5%8A%A8%23) `162.3K 🔥`
1. [十日终焉长安二十四计海报](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%95%BF%E5%AE%89%E4%BA%8C%E5%8D%81%E5%9B%9B%E8%AE%A1%E6%B5%B7%E6%8A%A5%23) `158.3K 🔥`
1. [常州进球](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%B7%9E%E8%BF%9B%E7%90%83%23) `343.8K 🔥` `-61%`
1. [KSG冠军](https://s.weibo.com/weibo?q=%23KSG%E5%86%A0%E5%86%9B%23) `297.1K 🔥` `-43%`
1. [苏超直播](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E7%9B%B4%E6%92%AD%23) `277.4K 🔥` `-25%`
1. [美媒称数艘美军舰通过霍尔木兹](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E6%95%B0%E8%89%98%E7%BE%8E%E5%86%9B%E8%88%B0%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `264.0K 🔥` `-27%`
1. [李小冉团赢了庄法团](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%9B%A2%E8%B5%A2%E4%BA%86%E5%BA%84%E6%B3%95%E5%9B%A2%23) `253.3K 🔥` `-57%`
1. [浪姐直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `245.2K 🔥` `-34%`
1. [狼队对战KSG (Wolves vs. KSG)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98KSG%23) `220.7K 🔥` `-40%`
1. [我发现心愿便利贴静音特别好听 (I found that the mute sound of Wish Post-it Notes is particularly nice.)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%8F%91%E7%8E%B0%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%E9%9D%99%E9%9F%B3%E7%89%B9%E5%88%AB%E5%A5%BD%E5%90%AC%23) `212.8K 🔥` `-86%`
1. [萧蔷情商](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%E6%83%85%E5%95%86%23) `175.6K 🔥` `-38%`
1. [江语晨前夫](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%89%8D%E5%A4%AB%23) `171.7K 🔥` `-53%`
1. [潮汐车道自动切换太丝滑 (Tidal lane automatic switching is too smooth)](https://s.weibo.com/weibo?q=%23%E6%BD%AE%E6%B1%90%E8%BD%A6%E9%81%93%E8%87%AA%E5%8A%A8%E5%88%87%E6%8D%A2%E5%A4%AA%E4%B8%9D%E6%BB%91%23) `169.7K 🔥` `-53%`
1. [心愿便利贴 不好听但溺爱了 (Wish post-it notes don’t sound good but I love you)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%20%E4%B8%8D%E5%A5%BD%E5%90%AC%E4%BD%86%E6%BA%BA%E7%88%B1%E4%BA%86%23) `169.7K 🔥` `-52%`
1. [杨幂给何泓姗送了蛋糕和花](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%BB%99%E4%BD%95%E6%B3%93%E5%A7%97%E9%80%81%E4%BA%86%E8%9B%8B%E7%B3%95%E5%92%8C%E8%8A%B1%23) `169.7K 🔥` `-52%`
1. [大艺术家](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%89%BA%E6%9C%AF%E5%AE%B6%23) `169.7K 🔥` `-53%`
1. [美伊代表团举行谈判](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E4%BB%A3%E8%A1%A8%E5%9B%A2%E4%B8%BE%E8%A1%8C%E8%B0%88%E5%88%A4%23) `169.7K 🔥` `-42%`
1. [刘芸郑钧回应儿子走路内八](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%8A%B8%E9%83%91%E9%92%A7%E5%9B%9E%E5%BA%94%E5%84%BF%E5%AD%90%E8%B5%B0%E8%B7%AF%E5%86%85%E5%85%AB%23) `169.7K 🔥` `-52%`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `167.7K 🔥` `-36%`
1. [曾沛慈说会在浪姐继续挑战](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E8%AF%B4%E4%BC%9A%E5%9C%A8%E6%B5%AA%E5%A7%90%E7%BB%A7%E7%BB%AD%E6%8C%91%E6%88%98%23) `167.0K 🔥` `-35%`

Updated at 2026-04-11 22:04:15

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
