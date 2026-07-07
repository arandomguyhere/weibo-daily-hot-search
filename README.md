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

1. [裁判 偏心 (referee bias)](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%20%E5%81%8F%E5%BF%83%23) `18.7M 🔥` `NEW`
1. [阿根廷 脏](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E8%84%8F%23) `14.9M 🔥` `NEW`
1. [阿根廷3比2埃及](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B73%E6%AF%942%E5%9F%83%E5%8F%8A%23) `4.1M 🔥` `NEW`
1. [埃及进球取消黄牌取消不了](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E8%BF%9B%E7%90%83%E5%8F%96%E6%B6%88%E9%BB%84%E7%89%8C%E5%8F%96%E6%B6%88%E4%B8%8D%E4%BA%86%23) `3.5M 🔥` `NEW`
1. [阿根廷绝杀埃及](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%BB%9D%E6%9D%80%E5%9F%83%E5%8F%8A%23) `2.3M 🔥` `NEW`
1. [世界杯冠军直接颁给门将吧](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%A0%E5%86%9B%E7%9B%B4%E6%8E%A5%E9%A2%81%E7%BB%99%E9%97%A8%E5%B0%86%E5%90%A7%23) `1.6M 🔥` `NEW`
1. [阿根廷点球被扑](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%82%B9%E7%90%83%E8%A2%AB%E6%89%91%23) `1.5M 🔥` `NEW`
1. [埃及进球被吹](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E8%BF%9B%E7%90%83%E8%A2%AB%E5%90%B9%23) `1.1M 🔥` `NEW`
1. [埃及吃牌吃饱了](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E5%90%83%E7%89%8C%E5%90%83%E9%A5%B1%E4%BA%86%23) `820.3K 🔥` `NEW`
1. [恩佐头球破门](https://s.weibo.com/weibo?q=%23%E6%81%A9%E4%BD%90%E5%A4%B4%E7%90%83%E7%A0%B4%E9%97%A8%23) `500.8K 🔥` `NEW`
1. [阿根廷反超 (Argentina overtakes)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%8F%8D%E8%B6%85%23) `358.9K 🔥` `NEW`
1. [阿根廷醒了](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%86%92%E4%BA%86%23) `355.3K 🔥` `NEW`
1. [阿根廷让二追三](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89%23) `347.7K 🔥` `NEW`
1. [埃及门将神了](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E9%97%A8%E5%B0%86%E7%A5%9E%E4%BA%86%23) `313.6K 🔥` `NEW`
1. [苏醒说阿根廷不一定拿捏埃及](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E8%AF%B4%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%8D%E4%B8%80%E5%AE%9A%E6%8B%BF%E6%8D%8F%E5%9F%83%E5%8F%8A%23) `308.2K 🔥` `NEW`
1. [罗梅罗头球破门](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%A2%85%E7%BD%97%E5%A4%B4%E7%90%83%E7%A0%B4%E9%97%A8%23) `301.9K 🔥` `NEW`
1. [埃及门将法老附身](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E9%97%A8%E5%B0%86%E6%B3%95%E8%80%81%E9%99%84%E8%BA%AB%23) `253.4K 🔥` `NEW`
1. [恩佐醒醒](https://s.weibo.com/weibo?q=%23%E6%81%A9%E4%BD%90%E9%86%92%E9%86%92%23) `222.5K 🔥` `NEW`
1. [埃及又进球了](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E5%8F%88%E8%BF%9B%E7%90%83%E4%BA%86%23) `168.8K 🔥` `NEW`
1. [阿根廷半场0比1埃及](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%8D%8A%E5%9C%BA0%E6%AF%941%E5%9F%83%E5%8F%8A%23) `166.6K 🔥` `NEW`
1. [阿根廷 梦游 (argentina sleepwalking)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E6%A2%A6%E6%B8%B8%23) `166.3K 🔥` `NEW`
1. [埃及率先破门](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E7%8E%87%E5%85%88%E7%A0%B4%E9%97%A8%23) `163.3K 🔥` `NEW`
1. [郭艾伦搞笑预测阿根廷战埃及](https://s.weibo.com/weibo?q=%23%E9%83%AD%E8%89%BE%E4%BC%A6%E6%90%9E%E7%AC%91%E9%A2%84%E6%B5%8B%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%88%98%E5%9F%83%E5%8F%8A%23) `145.6K 🔥` `NEW`
1. [留给阿根廷的时间不多了](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%BB%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%9A%84%E6%97%B6%E9%97%B4%E4%B8%8D%E5%A4%9A%E4%BA%86%23) `131.4K 🔥` `NEW`
1. [感觉江浙沪对于台风反应都很平静](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E6%B1%9F%E6%B5%99%E6%B2%AA%E5%AF%B9%E4%BA%8E%E5%8F%B0%E9%A3%8E%E5%8F%8D%E5%BA%94%E9%83%BD%E5%BE%88%E5%B9%B3%E9%9D%99%23) `128.9K 🔥` `NEW`
1. [埃及 反击](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%20%E5%8F%8D%E5%87%BB%23) `128.8K 🔥` `NEW`
1. [被龙卷风从12楼吸走男子仍在抢救](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%BE%99%E5%8D%B7%E9%A3%8E%E4%BB%8E12%E6%A5%BC%E5%90%B8%E8%B5%B0%E7%94%B7%E5%AD%90%E4%BB%8D%E5%9C%A8%E6%8A%A2%E6%95%91%23) `128.5K 🔥` `NEW`
1. [阿根廷进攻 埃及进球](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%BF%9B%E6%94%BB%20%E5%9F%83%E5%8F%8A%E8%BF%9B%E7%90%83%23) `128.3K 🔥` `NEW`
1. [广西辟谣贵港养蛇场有蛇出逃](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E8%BE%9F%E8%B0%A3%E8%B4%B5%E6%B8%AF%E5%85%BB%E8%9B%87%E5%9C%BA%E6%9C%89%E8%9B%87%E5%87%BA%E9%80%83%23) `128.2K 🔥` `NEW`
1. [阿根廷vs埃及](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7vs%E5%9F%83%E5%8F%8A%23) `15.1M 🔥` `+1686%`
1. [探访三江源 (Visit Sanjiangyuan)](https://s.weibo.com/weibo?q=%23%E6%8E%A2%E8%AE%BF%E4%B8%89%E6%B1%9F%E6%BA%90%23) `4.4M 🔥` `+296%`
1. [脱口秀唐香玉拒不道歉被强执](https://s.weibo.com/weibo?q=%23%E8%84%B1%E5%8F%A3%E7%A7%80%E5%94%90%E9%A6%99%E7%8E%89%E6%8B%92%E4%B8%8D%E9%81%93%E6%AD%89%E8%A2%AB%E5%BC%BA%E6%89%A7%23) `469.9K 🔥`
1. [人一定要频繁大量记录自己 (People must record themselves frequently and extensively)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E9%A2%91%E7%B9%81%E5%A4%A7%E9%87%8F%E8%AE%B0%E5%BD%95%E8%87%AA%E5%B7%B1%23) `277.7K 🔥`
1. [49岁男子招嫖被骗90万气晕妻子](https://s.weibo.com/weibo?q=%2349%E5%B2%81%E7%94%B7%E5%AD%90%E6%8B%9B%E5%AB%96%E8%A2%AB%E9%AA%9790%E4%B8%87%E6%B0%94%E6%99%95%E5%A6%BB%E5%AD%90%23) `215.4K 🔥`
1. [男子父母被卷至百米高空后遇难 (Man's parents died after being swept 100 meters into the air)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%88%B6%E6%AF%8D%E8%A2%AB%E5%8D%B7%E8%87%B3%E7%99%BE%E7%B1%B3%E9%AB%98%E7%A9%BA%E5%90%8E%E9%81%87%E9%9A%BE%23) `292.4K 🔥` `-84%`
1. [西班牙绝杀后C罗不断比手势](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%BB%9D%E6%9D%80%E5%90%8EC%E7%BD%97%E4%B8%8D%E6%96%AD%E6%AF%94%E6%89%8B%E5%8A%BF%23) `178.3K 🔥` `-53%`
1. [台风巴威登陆地点或有变](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E5%9C%B0%E7%82%B9%E6%88%96%E6%9C%89%E5%8F%98%23) `175.9K 🔥` `-82%`
1. [龙卷风](https://s.weibo.com/weibo?q=%23%E9%BE%99%E5%8D%B7%E9%A3%8E%23) `165.6K 🔥` `-85%`
1. [现在就出发4](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `158.9K 🔥` `-86%`
1. [广西灾情为什么严重](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%81%BE%E6%83%85%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%A5%E9%87%8D%23) `158.5K 🔥` `-67%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `158.2K 🔥` `-66%`
1. [装了人工心脏想洗澡怎么办](https://s.weibo.com/weibo?q=%23%E8%A3%85%E4%BA%86%E4%BA%BA%E5%B7%A5%E5%BF%83%E8%84%8F%E6%83%B3%E6%B4%97%E6%BE%A1%E6%80%8E%E4%B9%88%E5%8A%9E%23) `135.1K 🔥` `-53%`
1. [广西的洪水很快要到广东了 (Floods from Guangxi are coming to Guangdong soon)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%9A%84%E6%B4%AA%E6%B0%B4%E5%BE%88%E5%BF%AB%E8%A6%81%E5%88%B0%E5%B9%BF%E4%B8%9C%E4%BA%86%23) `128.9K 🔥` `-50%`
1. [虞书欣张婧仪决战95花现偶之巅](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%86%B3%E6%88%9895%E8%8A%B1%E7%8E%B0%E5%81%B6%E4%B9%8B%E5%B7%85%23) `128.8K 🔥` `-52%`
1. [女儿走失35年竟在路对面的批发市场](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E8%B5%B0%E5%A4%B135%E5%B9%B4%E7%AB%9F%E5%9C%A8%E8%B7%AF%E5%AF%B9%E9%9D%A2%E7%9A%84%E6%89%B9%E5%8F%91%E5%B8%82%E5%9C%BA%23) `128.7K 🔥` `-37%`
1. [阿根廷对阵埃及首发轮换](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%AF%B9%E9%98%B5%E5%9F%83%E5%8F%8A%E9%A6%96%E5%8F%91%E8%BD%AE%E6%8D%A2%23) `128.6K 🔥` `-79%`
1. [中国女子在日遭人为肢解弃尸 (Chinese woman dismembered and abandoned in Japan)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%97%A5%E9%81%AD%E4%BA%BA%E4%B8%BA%E8%82%A2%E8%A7%A3%E5%BC%83%E5%B0%B8%23) `128.6K 🔥` `-42%`
1. [大二女生贷款200万开民宿营收千万](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BA%8C%E5%A5%B3%E7%94%9F%E8%B4%B7%E6%AC%BE200%E4%B8%87%E5%BC%80%E6%B0%91%E5%AE%BF%E8%90%A5%E6%94%B6%E5%8D%83%E4%B8%87%23) `128.5K 🔥` `-49%`
1. [近视眼先享受世界](https://s.weibo.com/weibo?q=%23%E8%BF%91%E8%A7%86%E7%9C%BC%E5%85%88%E4%BA%AB%E5%8F%97%E4%B8%96%E7%95%8C%23) `128.4K 🔥` `-71%`
1. [订书机没想过会在外卖行业发光发热](https://s.weibo.com/weibo?q=%23%E8%AE%A2%E4%B9%A6%E6%9C%BA%E6%B2%A1%E6%83%B3%E8%BF%87%E4%BC%9A%E5%9C%A8%E5%A4%96%E5%8D%96%E8%A1%8C%E4%B8%9A%E5%8F%91%E5%85%89%E5%8F%91%E7%83%AD%23) `128.2K 🔥` `-38%`

Updated at 2026-07-08 02:21:58

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
