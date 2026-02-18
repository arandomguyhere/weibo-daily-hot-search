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

1. [朱易发合影祝贺苏翊鸣 (Zhu Yifa took a group photo to congratulate Su Yiming)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E6%98%93%E5%8F%91%E5%90%88%E5%BD%B1%E7%A5%9D%E8%B4%BA%E8%8B%8F%E7%BF%8A%E9%B8%A3%23) `846.8K 🔥` `NEW`
1. [徐梦桃金牌](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E9%87%91%E7%89%8C%23) `717.0K 🔥` `NEW`
1. [00后新兵有啥心愿](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E6%96%B0%E5%85%B5%E6%9C%89%E5%95%A5%E5%BF%83%E6%84%BF%23) `454.9K 🔥` `NEW`
1. [苏翊鸣祝贺徐梦桃](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%A5%9D%E8%B4%BA%E5%BE%90%E6%A2%A6%E6%A1%83%23) `288.2K 🔥` `NEW`
1. [苏翊鸣金牌](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E9%87%91%E7%89%8C%23) `279.6K 🔥` `NEW`
1. [初三一定记得睡懒觉](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%89%E4%B8%80%E5%AE%9A%E8%AE%B0%E5%BE%97%E7%9D%A1%E6%87%92%E8%A7%89%23) `263.9K 🔥` `NEW`
1. [徐梦桃 文能浪姐唱跳武能冬奥夺冠](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%20%E6%96%87%E8%83%BD%E6%B5%AA%E5%A7%90%E5%94%B1%E8%B7%B3%E6%AD%A6%E8%83%BD%E5%86%AC%E5%A5%A5%E5%A4%BA%E5%86%A0%23) `247.6K 🔥` `NEW`
1. [教练说苏翊鸣米兰夺金前不能谈恋爱](https://s.weibo.com/weibo?q=%23%E6%95%99%E7%BB%83%E8%AF%B4%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%B1%B3%E5%85%B0%E5%A4%BA%E9%87%91%E5%89%8D%E4%B8%8D%E8%83%BD%E8%B0%88%E6%81%8B%E7%88%B1%23) `143.4K 🔥` `NEW`
1. [中国队米兰冬奥首金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A6%96%E9%87%91%23) `142.0K 🔥` `NEW`
1. [苏翊鸣想让国歌在全世界面前奏响](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%83%B3%E8%AE%A9%E5%9B%BD%E6%AD%8C%E5%9C%A8%E5%85%A8%E4%B8%96%E7%95%8C%E9%9D%A2%E5%89%8D%E5%A5%8F%E5%93%8D%23) `138.9K 🔥` `NEW`
1. [镖人 对吴京黑转BLACKPINK (The escort turned to BLACKPINK on Wu Jinghei)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%20%E5%AF%B9%E5%90%B4%E4%BA%AC%E9%BB%91%E8%BD%ACBLACKPINK%23) `132.0K 🔥` `NEW`
1. [朱易 苏翊鸣](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E6%98%93%20%E8%8B%8F%E7%BF%8A%E9%B8%A3%23) `127.4K 🔥` `NEW`
1. [曝邓超怒怼项目方维护孙俪](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%82%93%E8%B6%85%E6%80%92%E6%80%BC%E9%A1%B9%E7%9B%AE%E6%96%B9%E7%BB%B4%E6%8A%A4%E5%AD%99%E4%BF%AA%23) `125.0K 🔥` `NEW`
1. [春节档总票房已破22亿](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%A1%A3%E6%80%BB%E7%A5%A8%E6%88%BF%E5%B7%B2%E7%A0%B422%E4%BA%BF%23) `121.4K 🔥` `NEW`
1. [年入35万扛楼小伙回应买车质疑](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%85%A535%E4%B8%87%E6%89%9B%E6%A5%BC%E5%B0%8F%E4%BC%99%E5%9B%9E%E5%BA%94%E4%B9%B0%E8%BD%A6%E8%B4%A8%E7%96%91%23) `116.6K 🔥` `NEW`
1. [飞驰人生3](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%23) `116.4K 🔥` `NEW`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `110.6K 🔥` `NEW`
1. [被冠军妈妈的育儿观狠狠圈粉](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%86%A0%E5%86%9B%E5%A6%88%E5%A6%88%E7%9A%84%E8%82%B2%E5%84%BF%E8%A7%82%E7%8B%A0%E7%8B%A0%E5%9C%88%E7%B2%89%23) `106.3K 🔥` `NEW`
1. [惠英红 姐别累着但也别闲着](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%20%E5%A7%90%E5%88%AB%E7%B4%AF%E7%9D%80%E4%BD%86%E4%B9%9F%E5%88%AB%E9%97%B2%E7%9D%80%23) `102.7K 🔥` `NEW`
1. [众星祝贺苏翊鸣](https://s.weibo.com/weibo?q=%23%E4%BC%97%E6%98%9F%E7%A5%9D%E8%B4%BA%E8%8B%8F%E7%BF%8A%E9%B8%A3%23) `90.9K 🔥` `NEW`
1. [酷滕 双取 (Ku Teng double take)](https://s.weibo.com/weibo?q=%23%E9%85%B7%E6%BB%95%20%E5%8F%8C%E5%8F%96%23) `90.8K 🔥` `NEW`
1. [苏翊鸣回应中国队一天两金](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%9B%9E%E5%BA%94%E4%B8%AD%E5%9B%BD%E9%98%9F%E4%B8%80%E5%A4%A9%E4%B8%A4%E9%87%91%23) `89.2K 🔥` `NEW`
1. [怪不得叫膨胀螺丝](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%8F%AB%E8%86%A8%E8%83%80%E8%9E%BA%E4%B8%9D%23) `88.4K 🔥` `NEW`
1. [中国队赢了就是牛](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E8%B5%A2%E4%BA%86%E5%B0%B1%E6%98%AF%E7%89%9B%23) `87.1K 🔥` `NEW`
1. [祝贺老将徐梦桃](https://s.weibo.com/weibo?q=%23%E7%A5%9D%E8%B4%BA%E8%80%81%E5%B0%86%E5%BE%90%E6%A2%A6%E6%A1%83%23) `86.8K 🔥` `NEW`
1. [5个月宝宝抬头巧变磕头喜提红包](https://s.weibo.com/weibo?q=%235%E4%B8%AA%E6%9C%88%E5%AE%9D%E5%AE%9D%E6%8A%AC%E5%A4%B4%E5%B7%A7%E5%8F%98%E7%A3%95%E5%A4%B4%E5%96%9C%E6%8F%90%E7%BA%A2%E5%8C%85%23) `86.0K 🔥` `NEW`
1. [台湾女子被臭豆腐店熏到焦虑拔头发](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%A5%B3%E5%AD%90%E8%A2%AB%E8%87%AD%E8%B1%86%E8%85%90%E5%BA%97%E7%86%8F%E5%88%B0%E7%84%A6%E8%99%91%E6%8B%94%E5%A4%B4%E5%8F%91%23) `85.5K 🔥` `NEW`
1. [谁把郭富城鞋踩掉了](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%8A%8A%E9%83%AD%E5%AF%8C%E5%9F%8E%E9%9E%8B%E8%B8%A9%E6%8E%89%E4%BA%86%23) `83.8K 🔥` `NEW`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `82.3K 🔥` `NEW`
1. [中储粮平仓机器人问世](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%82%A8%E7%B2%AE%E5%B9%B3%E4%BB%93%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%97%AE%E4%B8%96%23) `78.4K 🔥` `NEW`
1. [徐梦桃说没法冷静 (Xu Mengtao said she couldn’t calm down)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E8%AF%B4%E6%B2%A1%E6%B3%95%E5%86%B7%E9%9D%99%23) `76.7K 🔥` `NEW`
1. [太奶奶实在是上边没人了](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%A5%B6%E5%A5%B6%E5%AE%9E%E5%9C%A8%E6%98%AF%E4%B8%8A%E8%BE%B9%E6%B2%A1%E4%BA%BA%E4%BA%86%23) `76.4K 🔥` `NEW`
1. [星河入梦](https://s.weibo.com/weibo?q=%23%E6%98%9F%E6%B2%B3%E5%85%A5%E6%A2%A6%23) `75.5K 🔥` `NEW`
1. [2026势头最猛的星座](https://s.weibo.com/weibo?q=%232026%E5%8A%BF%E5%A4%B4%E6%9C%80%E7%8C%9B%E7%9A%84%E6%98%9F%E5%BA%A7%23) `72.4K 🔥` `NEW`
1. [飞驰人生3 没有彩蛋](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%20%E6%B2%A1%E6%9C%89%E5%BD%A9%E8%9B%8B%23) `72.3K 🔥` `NEW`
1. [中国香港居民在北海道遇袭](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A6%99%E6%B8%AF%E5%B1%85%E6%B0%91%E5%9C%A8%E5%8C%97%E6%B5%B7%E9%81%93%E9%81%87%E8%A2%AD%23) `71.1K 🔥` `NEW`
1. [网红阿沁直播首次谈前任刘阳](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E9%98%BF%E6%B2%81%E7%9B%B4%E6%92%AD%E9%A6%96%E6%AC%A1%E8%B0%88%E5%89%8D%E4%BB%BB%E5%88%98%E9%98%B3%23) `69.0K 🔥` `NEW`
1. [谷爱凌 顶级狩猎者的眼神](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%20%E9%A1%B6%E7%BA%A7%E7%8B%A9%E7%8C%8E%E8%80%85%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `67.5K 🔥` `NEW`
1. [中国队第二金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%AC%AC%E4%BA%8C%E9%87%91%23) `67.4K 🔥` `NEW`
1. [奖牌榜](https://s.weibo.com/weibo?q=%23%E5%A5%96%E7%89%8C%E6%A6%9C%23) `67.4K 🔥` `NEW`
1. [苏翊鸣教练双膝跪地 (Coach Su Yiming knelt on his knees)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%95%99%E7%BB%83%E5%8F%8C%E8%86%9D%E8%B7%AA%E5%9C%B0%23) `64.7K 🔥` `NEW`
1. [镖人惠英红没打戏好可惜](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E6%83%A0%E8%8B%B1%E7%BA%A2%E6%B2%A1%E6%89%93%E6%88%8F%E5%A5%BD%E5%8F%AF%E6%83%9C%23) `63.3K 🔥` `NEW`
1. [千玺听到粉丝说他总演小苦瓜的反应](https://s.weibo.com/weibo?q=%23%E5%8D%83%E7%8E%BA%E5%90%AC%E5%88%B0%E7%B2%89%E4%B8%9D%E8%AF%B4%E4%BB%96%E6%80%BB%E6%BC%94%E5%B0%8F%E8%8B%A6%E7%93%9C%E7%9A%84%E5%8F%8D%E5%BA%94%23) `60.4K 🔥` `NEW`
1. [汕头烟花](https://s.weibo.com/weibo?q=%23%E6%B1%95%E5%A4%B4%E7%83%9F%E8%8A%B1%23) `57.0K 🔥` `NEW`
1. [云旗郝熠然滑雪](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E9%83%9D%E7%86%A0%E7%84%B6%E6%BB%91%E9%9B%AA%23) `56.9K 🔥` `NEW`
1. [徐梦桃说需要继续保持专注](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E8%AF%B4%E9%9C%80%E8%A6%81%E7%BB%A7%E7%BB%AD%E4%BF%9D%E6%8C%81%E4%B8%93%E6%B3%A8%23) `56.3K 🔥` `NEW`
1. [日本挖到含稀土泥浆的真相来了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8C%96%E5%88%B0%E5%90%AB%E7%A8%80%E5%9C%9F%E6%B3%A5%E6%B5%86%E7%9A%84%E7%9C%9F%E7%9B%B8%E6%9D%A5%E4%BA%86%23) `56.3K 🔥` `NEW`
1. [大年初三](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%89%23) `55.3K 🔥` `NEW`
1. [米卡称爸爸想搬来中国](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%8D%A1%E7%A7%B0%E7%88%B8%E7%88%B8%E6%83%B3%E6%90%AC%E6%9D%A5%E4%B8%AD%E5%9B%BD%23) `53.8K 🔥` `NEW`
1. [短道速滑](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%23) `49.8K 🔥` `NEW`

Updated at 2026-02-19 00:42:15

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
