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

1. [全新奔驰纯电GLC (All-new Mercedes-Benz pure electric GLC)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E5%A5%94%E9%A9%B0%E7%BA%AF%E7%94%B5GLC%23) `311.9K 🔥` `NEW`
1. [埃及两球领先阿根廷](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E4%B8%A4%E7%90%83%E9%A2%86%E5%85%88%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `65.7K 🔥` `NEW`
1. [瑞士vs哥伦比亚](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%A3%ABvs%E5%93%A5%E4%BC%A6%E6%AF%94%E4%BA%9A%23) `275.0K 🔥` `+104%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `74.7K 🔥` `+37%`
1. [感觉江浙沪对于台风反应都很平静](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E6%B1%9F%E6%B5%99%E6%B2%AA%E5%AF%B9%E4%BA%8E%E5%8F%B0%E9%A3%8E%E5%8F%8D%E5%BA%94%E9%83%BD%E5%BE%88%E5%B9%B3%E9%9D%99%23) `74.6K 🔥` `+38%`
1. [被龙卷风从12楼吸走男子仍在抢救](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%BE%99%E5%8D%B7%E9%A3%8E%E4%BB%8E12%E6%A5%BC%E5%90%B8%E8%B5%B0%E7%94%B7%E5%AD%90%E4%BB%8D%E5%9C%A8%E6%8A%A2%E6%95%91%23) `71.8K 🔥` `+54%`
1. [女儿走失35年竟在路对面的批发市场 (Daughter who had been missing for 35 years was found in the wholesale market across the road)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E8%B5%B0%E5%A4%B135%E5%B9%B4%E7%AB%9F%E5%9C%A8%E8%B7%AF%E5%AF%B9%E9%9D%A2%E7%9A%84%E6%89%B9%E5%8F%91%E5%B8%82%E5%9C%BA%23) `70.6K 🔥` `+35%`
1. [大二女生贷款200万开民宿营收千万](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BA%8C%E5%A5%B3%E7%94%9F%E8%B4%B7%E6%AC%BE200%E4%B8%87%E5%BC%80%E6%B0%91%E5%AE%BF%E8%90%A5%E6%94%B6%E5%8D%83%E4%B8%87%23) `70.3K 🔥` `+71%`
1. [装了人工心脏想洗澡怎么办](https://s.weibo.com/weibo?q=%23%E8%A3%85%E4%BA%86%E4%BA%BA%E5%B7%A5%E5%BF%83%E8%84%8F%E6%83%B3%E6%B4%97%E6%BE%A1%E6%80%8E%E4%B9%88%E5%8A%9E%23) `70.2K 🔥` `+57%`
1. [广西灾情为什么严重](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%81%BE%E6%83%85%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%A5%E9%87%8D%23) `69.8K 🔥` `+49%`
1. [广西的洪水很快要到广东了 (Floods from Guangxi are coming to Guangdong soon)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%9A%84%E6%B4%AA%E6%B0%B4%E5%BE%88%E5%BF%AB%E8%A6%81%E5%88%B0%E5%B9%BF%E4%B8%9C%E4%BA%86%23) `69.7K 🔥` `+42%`
1. [横州已有多个毒蛇咬伤民间互助群](https://s.weibo.com/weibo?q=%23%E6%A8%AA%E5%B7%9E%E5%B7%B2%E6%9C%89%E5%A4%9A%E4%B8%AA%E6%AF%92%E8%9B%87%E5%92%AC%E4%BC%A4%E6%B0%91%E9%97%B4%E4%BA%92%E5%8A%A9%E7%BE%A4%23) `69.5K 🔥` `+29%`
1. [现在就出发4 (Let's go now 4)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `69.3K 🔥` `+38%`
1. [台风巴威登陆地点或有变 (Typhoon Bavi’s landfall location may change)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E5%9C%B0%E7%82%B9%E6%88%96%E6%9C%89%E5%8F%98%23) `69.2K 🔥` `+72%`
1. [中国女子在日遭人为肢解弃尸 (Chinese woman dismembered and abandoned in Japan)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%97%A5%E9%81%AD%E4%BA%BA%E4%B8%BA%E8%82%A2%E8%A7%A3%E5%BC%83%E5%B0%B8%23) `68.4K 🔥` `+71%`
1. [埃及 反击](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%20%E5%8F%8D%E5%87%BB%23) `67.7K 🔥` `+23%`
1. [世界杯大V说](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%A7V%E8%AF%B4%23) `67.5K 🔥` `+27%`
1. [阿根廷落后埃及](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%90%BD%E5%90%8E%E5%9F%83%E5%8F%8A%23) `67.3K 🔥` `+73%`
1. [埃及门将法老附身](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E9%97%A8%E5%B0%86%E6%B3%95%E8%80%81%E9%99%84%E8%BA%AB%23) `67.1K 🔥` `+73%`
1. [阿根廷半场0比1埃及](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%8D%8A%E5%9C%BA0%E6%AF%941%E5%9F%83%E5%8F%8A%23) `66.7K 🔥` `+62%`
1. [阿根廷反超 (Argentina overtakes)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%8F%8D%E8%B6%85%23) `66.3K 🔥` `+31%`
1. [阿根廷进攻 埃及进球](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%BF%9B%E6%94%BB%20%E5%9F%83%E5%8F%8A%E8%BF%9B%E7%90%83%23) `66.1K 🔥` `+23%`
1. [埃及又进球了](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E5%8F%88%E8%BF%9B%E7%90%83%E4%BA%86%23) `65.9K 🔥` `+50%`
1. [虞书欣张婧仪决战95花现偶之巅](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%86%B3%E6%88%9895%E8%8A%B1%E7%8E%B0%E5%81%B6%E4%B9%8B%E5%B7%85%23) `65.6K 🔥` `+70%`
1. [埃及门将神了](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E9%97%A8%E5%B0%86%E7%A5%9E%E4%BA%86%23) `65.3K 🔥` `+57%`
1. [阿根廷 脏 (argentina dirty)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E8%84%8F%23) `1.2M 🔥`
1. [阿根廷3比2埃及](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B73%E6%AF%942%E5%9F%83%E5%8F%8A%23) `378.5K 🔥`
1. [世界杯冠军直接颁给门将吧](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%A0%E5%86%9B%E7%9B%B4%E6%8E%A5%E9%A2%81%E7%BB%99%E9%97%A8%E5%B0%86%E5%90%A7%23) `165.3K 🔥`
1. [男子父母被卷至百米高空后遇难 (Man's parents died after being swept 100 meters into the air)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%88%B6%E6%AF%8D%E8%A2%AB%E5%8D%B7%E8%87%B3%E7%99%BE%E7%B1%B3%E9%AB%98%E7%A9%BA%E5%90%8E%E9%81%87%E9%9A%BE%23) `129.1K 🔥`
1. [阿根廷让二追三](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89%23) `80.6K 🔥`
1. [49岁男子招嫖被骗90万气晕妻子](https://s.weibo.com/weibo?q=%2349%E5%B2%81%E7%94%B7%E5%AD%90%E6%8B%9B%E5%AB%96%E8%A2%AB%E9%AA%9790%E4%B8%87%E6%B0%94%E6%99%95%E5%A6%BB%E5%AD%90%23) `80.3K 🔥`
1. [龙卷风](https://s.weibo.com/weibo?q=%23%E9%BE%99%E5%8D%B7%E9%A3%8E%23) `80.1K 🔥`
1. [阿根廷点球被扑](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%82%B9%E7%90%83%E8%A2%AB%E6%89%91%23) `71.7K 🔥`
1. [人一定要频繁大量记录自己 (People must record themselves frequently and extensively)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E9%A2%91%E7%B9%81%E5%A4%A7%E9%87%8F%E8%AE%B0%E5%BD%95%E8%87%AA%E5%B7%B1%23) `71.1K 🔥`
1. [苏醒说阿根廷不一定拿捏埃及](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E8%AF%B4%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%8D%E4%B8%80%E5%AE%9A%E6%8B%BF%E6%8D%8F%E5%9F%83%E5%8F%8A%23) `70.7K 🔥`
1. [恩佐头球破门](https://s.weibo.com/weibo?q=%23%E6%81%A9%E4%BD%90%E5%A4%B4%E7%90%83%E7%A0%B4%E9%97%A8%23) `69.0K 🔥`
1. [阿根廷醒了 (Argentina wakes up)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%86%92%E4%BA%86%23) `68.5K 🔥`
1. [罗梅罗头球破门](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%A2%85%E7%BD%97%E5%A4%B4%E7%90%83%E7%A0%B4%E9%97%A8%23) `68.1K 🔥`
1. [恩佐醒醒 (Enzo wake up)](https://s.weibo.com/weibo?q=%23%E6%81%A9%E4%BD%90%E9%86%92%E9%86%92%23) `68.0K 🔥`
1. [埃及率先破门](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E7%8E%87%E5%85%88%E7%A0%B4%E9%97%A8%23) `66.5K 🔥`
1. [探访三江源 (Visit Sanjiangyuan)](https://s.weibo.com/weibo?q=%23%E6%8E%A2%E8%AE%BF%E4%B8%89%E6%B1%9F%E6%BA%90%23) `312.2K 🔥` `-34%`
1. [埃及抗议裁判判罚 (Egypt protests against referee decision)](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E6%8A%97%E8%AE%AE%E8%A3%81%E5%88%A4%E5%88%A4%E7%BD%9A%23) `307.1K 🔥` `-53%`
1. [埃及进球取消黄牌取消不了](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E8%BF%9B%E7%90%83%E5%8F%96%E6%B6%88%E9%BB%84%E7%89%8C%E5%8F%96%E6%B6%88%E4%B8%8D%E4%BA%86%23) `185.6K 🔥` `-51%`
1. [裁判 忘穿阿根廷球衣了](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%20%E5%BF%98%E7%A9%BF%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E8%A1%A3%E4%BA%86%23) `136.6K 🔥` `-55%`
1. [脱口秀唐香玉拒不道歉被强执](https://s.weibo.com/weibo?q=%23%E8%84%B1%E5%8F%A3%E7%A7%80%E5%94%90%E9%A6%99%E7%8E%89%E6%8B%92%E4%B8%8D%E9%81%93%E6%AD%89%E8%A2%AB%E5%BC%BA%E6%89%A7%23) `80.5K 🔥` `-28%`
1. [阿根廷vs埃及 (Argentina vs Egypt)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7vs%E5%9F%83%E5%8F%8A%23) `76.3K 🔥` `-33%`
1. [阿根廷绝杀埃及](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%BB%9D%E6%9D%80%E5%9F%83%E5%8F%8A%23) `71.6K 🔥` `-31%`
1. [裁判 偏心 (referee bias)](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%20%E5%81%8F%E5%BF%83%23) `71.4K 🔥` `-75%`
1. [埃及吃牌吃饱了](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E5%90%83%E7%89%8C%E5%90%83%E9%A5%B1%E4%BA%86%23) `70.8K 🔥` `-32%`
1. [埃及进球被吹](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E8%BF%9B%E7%90%83%E8%A2%AB%E5%90%B9%23) `68.8K 🔥` `-22%`
1. [请为广西镇龙乡扩散全乡仍失联](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E4%B8%BA%E5%B9%BF%E8%A5%BF%E9%95%87%E9%BE%99%E4%B9%A1%E6%89%A9%E6%95%A3%E5%85%A8%E4%B9%A1%E4%BB%8D%E5%A4%B1%E8%81%94%23) `66.9K 🔥` `-69%`

Updated at 2026-07-08 05:49:50

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
