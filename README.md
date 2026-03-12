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

1. [第3场部长通道 (Session 3 Ministerial Channel)](https://s.weibo.com/weibo?q=%23%E7%AC%AC3%E5%9C%BA%E9%83%A8%E9%95%BF%E9%80%9A%E9%81%93%23) `541.5K 🔥` `NEW`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `520.5K 🔥` `NEW`
1. [首批能活到1000岁的人或已出生](https://s.weibo.com/weibo?q=%23%E9%A6%96%E6%89%B9%E8%83%BD%E6%B4%BB%E5%88%B01000%E5%B2%81%E7%9A%84%E4%BA%BA%E6%88%96%E5%B7%B2%E5%87%BA%E7%94%9F%23) `520.2K 🔥` `NEW`
1. [建议禁止流量月底清零](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%A6%81%E6%AD%A2%E6%B5%81%E9%87%8F%E6%9C%88%E5%BA%95%E6%B8%85%E9%9B%B6%23) `493.9K 🔥` `NEW`
1. [批准2026年中央预算](https://s.weibo.com/weibo?q=%23%E6%89%B9%E5%87%862026%E5%B9%B4%E4%B8%AD%E5%A4%AE%E9%A2%84%E7%AE%97%23) `225.6K 🔥` `NEW`
1. [王天辰回应生李昀锐](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%E5%9B%9E%E5%BA%94%E7%94%9F%E6%9D%8E%E6%98%80%E9%94%90%23) `120.9K 🔥` `NEW`
1. [孙颖莎时刻保持微笑](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%97%B6%E5%88%BB%E4%BF%9D%E6%8C%81%E5%BE%AE%E7%AC%91%23) `99.1K 🔥` `NEW`
1. [亲妈生病住院后妈忙前忙后照顾](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%A6%88%E7%94%9F%E7%97%85%E4%BD%8F%E9%99%A2%E5%90%8E%E5%A6%88%E5%BF%99%E5%89%8D%E5%BF%99%E5%90%8E%E7%85%A7%E9%A1%BE%23) `98.9K 🔥` `NEW`
1. [爆剧 养老剧](https://s.weibo.com/weibo?q=%23%E7%88%86%E5%89%A7%20%E5%85%BB%E8%80%81%E5%89%A7%23) `98.8K 🔥` `NEW`
1. [BFX下路回应Bin](https://s.weibo.com/weibo?q=%23BFX%E4%B8%8B%E8%B7%AF%E5%9B%9E%E5%BA%94Bin%23) `85.0K 🔥` `NEW`
1. [白敬亭小学同学录 (Bai Jingting Primary School classmates)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E5%B0%8F%E5%AD%A6%E5%90%8C%E5%AD%A6%E5%BD%95%23) `73.0K 🔥` `NEW`
1. [女孩回老家把祖屋改造成雨林民宿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%9B%9E%E8%80%81%E5%AE%B6%E6%8A%8A%E7%A5%96%E5%B1%8B%E6%94%B9%E9%80%A0%E6%88%90%E9%9B%A8%E6%9E%97%E6%B0%91%E5%AE%BF%23) `736.5K 🔥` `+31%`
1. [十四届全国人大四次会议闭幕会](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%A4%A7%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E9%97%AD%E5%B9%95%E4%BC%9A%23) `1.0M 🔥`
1. [3月12日两会日程 (Agenda for the two sessions on March 12)](https://s.weibo.com/weibo?q=%233%E6%9C%8812%E6%97%A5%E4%B8%A4%E4%BC%9A%E6%97%A5%E7%A8%8B%23) `569.7K 🔥`
1. [镖人 第二部](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%20%E7%AC%AC%E4%BA%8C%E9%83%A8%23) `567.8K 🔥`
1. [安理会决议要求伊朗停止打海湾国家](https://s.weibo.com/weibo?q=%23%E5%AE%89%E7%90%86%E4%BC%9A%E5%86%B3%E8%AE%AE%E8%A6%81%E6%B1%82%E4%BC%8A%E6%9C%97%E5%81%9C%E6%AD%A2%E6%89%93%E6%B5%B7%E6%B9%BE%E5%9B%BD%E5%AE%B6%23) `521.8K 🔥`
1. [十五五规划纲要表决通过](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E7%BA%B2%E8%A6%81%E8%A1%A8%E5%86%B3%E9%80%9A%E8%BF%87%23) `474.9K 🔥`
1. [表决通过政府工作报告](https://s.weibo.com/weibo?q=%23%E8%A1%A8%E5%86%B3%E9%80%9A%E8%BF%87%E6%94%BF%E5%BA%9C%E5%B7%A5%E4%BD%9C%E6%8A%A5%E5%91%8A%23) `471.1K 🔥`
1. [大学生4个馒头卖了30000元](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F4%E4%B8%AA%E9%A6%92%E5%A4%B4%E5%8D%96%E4%BA%8630000%E5%85%83%23) `443.0K 🔥`
1. [多邻国绿鸟 离职 (Duolingo Green Bird resigned)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%82%BB%E5%9B%BD%E7%BB%BF%E9%B8%9F%20%E7%A6%BB%E8%81%8C%23) `440.8K 🔥`
1. [来格力寻找真Ai (Come to Gree to find true love)](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E6%A0%BC%E5%8A%9B%E5%AF%BB%E6%89%BE%E7%9C%9FAi%23) `568.2K 🔥` `-22%`
1. [德国选手拒绝与俄中选手合影](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E9%80%89%E6%89%8B%E6%8B%92%E7%BB%9D%E4%B8%8E%E4%BF%84%E4%B8%AD%E9%80%89%E6%89%8B%E5%90%88%E5%BD%B1%23) `299.1K 🔥` `-28%`
1. [张凌赫被田曦薇摸耳朵的反应](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A2%AB%E7%94%B0%E6%9B%A6%E8%96%87%E6%91%B8%E8%80%B3%E6%9C%B5%E7%9A%84%E5%8F%8D%E5%BA%94%23) `275.6K 🔥` `-32%`
1. [辛辛苦苦考了一份辛辛苦苦的工作 (After working hard, I got a hard-working job.)](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%BE%9B%E8%8B%A6%E8%8B%A6%E8%80%83%E4%BA%86%E4%B8%80%E4%BB%BD%E8%BE%9B%E8%BE%9B%E8%8B%A6%E8%8B%A6%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `267.1K 🔥` `-35%`
1. [熊 这辈子吃的最贵的苹果](https://s.weibo.com/weibo?q=%23%E7%86%8A%20%E8%BF%99%E8%BE%88%E5%AD%90%E5%90%83%E7%9A%84%E6%9C%80%E8%B4%B5%E7%9A%84%E8%8B%B9%E6%9E%9C%23) `261.4K 🔥` `-36%`
1. [易梦体质](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%A2%A6%E4%BD%93%E8%B4%A8%23) `233.6K 🔥` `-38%`
1. [伊朗用最强导弹专打以色列](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%94%A8%E6%9C%80%E5%BC%BA%E5%AF%BC%E5%BC%B9%E4%B8%93%E6%89%93%E4%BB%A5%E8%89%B2%E5%88%97%23) `231.5K 🔥` `-39%`
1. [浪姐7 (Lang Jie 7)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%907%23) `227.5K 🔥` `-61%`
1. [杨幂把海洋穿身上了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%8A%8A%E6%B5%B7%E6%B4%8B%E7%A9%BF%E8%BA%AB%E4%B8%8A%E4%BA%86%23) `222.2K 🔥` `-43%`
1. [张凌赫王玉雯 刺棠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E7%8E%89%E9%9B%AF%20%E5%88%BA%E6%A3%A0%23) `218.9K 🔥` `-42%`
1. [吃全麦面包减肥的人天塌了](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%85%A8%E9%BA%A6%E9%9D%A2%E5%8C%85%E5%87%8F%E8%82%A5%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `216.4K 🔥` `-43%`
1. [改剧本 加流量演员](https://s.weibo.com/weibo?q=%23%E6%94%B9%E5%89%A7%E6%9C%AC%20%E5%8A%A0%E6%B5%81%E9%87%8F%E6%BC%94%E5%91%98%23) `198.1K 🔥` `-48%`
1. [王濛官宣参加浪姐7](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%AE%98%E5%AE%A3%E5%8F%82%E5%8A%A0%E6%B5%AA%E5%A7%907%23) `192.6K 🔥` `-50%`
1. [儿媳一怀孕婆婆立马报班学月嫂](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AA%B3%E4%B8%80%E6%80%80%E5%AD%95%E5%A9%86%E5%A9%86%E7%AB%8B%E9%A9%AC%E6%8A%A5%E7%8F%AD%E5%AD%A6%E6%9C%88%E5%AB%82%23) `173.9K 🔥` `-54%`
1. [腾讯视频修改逐玉战报 (Tencent Video Modifies Zhuyu Battle Report)](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91%E4%BF%AE%E6%94%B9%E9%80%90%E7%8E%89%E6%88%98%E6%8A%A5%23) `172.7K 🔥` `-54%`
1. [逐玉 业内](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E4%B8%9A%E5%86%85%23) `158.2K 🔥` `-58%`
1. [美军舰后勤补给港口被炸](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%88%B0%E5%90%8E%E5%8B%A4%E8%A1%A5%E7%BB%99%E6%B8%AF%E5%8F%A3%E8%A2%AB%E7%82%B8%23) `146.5K 🔥` `-63%`
1. [微信语音视频来电能忽略了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%AF%AD%E9%9F%B3%E8%A7%86%E9%A2%91%E6%9D%A5%E7%94%B5%E8%83%BD%E5%BF%BD%E7%95%A5%E4%BA%86%23) `146.0K 🔥` `-74%`
1. [袁姗姗演疯了张维伊演爽了](https://s.weibo.com/weibo?q=%23%E8%A2%81%E5%A7%97%E5%A7%97%E6%BC%94%E7%96%AF%E4%BA%86%E5%BC%A0%E7%BB%B4%E4%BC%8A%E6%BC%94%E7%88%BD%E4%BA%86%23) `138.8K 🔥` `-66%`
1. [微信视频通话终于有锁定功能了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%A7%86%E9%A2%91%E9%80%9A%E8%AF%9D%E7%BB%88%E4%BA%8E%E6%9C%89%E9%94%81%E5%AE%9A%E5%8A%9F%E8%83%BD%E4%BA%86%23) `135.7K 🔥` `-64%`
1. [代表建议取消中考分流 (Representatives suggest canceling the high school entrance exam diversion)](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%A1%A8%E5%BB%BA%E8%AE%AE%E5%8F%96%E6%B6%88%E4%B8%AD%E8%80%83%E5%88%86%E6%B5%81%23) `133.9K 🔥` `-81%`
1. [60斤和110斤互换饮食的一天 (A day of swapping diets between 60 pounds and 110 pounds)](https://s.weibo.com/weibo?q=%2360%E6%96%A4%E5%92%8C110%E6%96%A4%E4%BA%92%E6%8D%A2%E9%A5%AE%E9%A3%9F%E7%9A%84%E4%B8%80%E5%A4%A9%23) `132.0K 🔥` `-65%`
1. [逐玉破万 经纪人亲一个](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%A0%B4%E4%B8%87%20%E7%BB%8F%E7%BA%AA%E4%BA%BA%E4%BA%B2%E4%B8%80%E4%B8%AA%23) `108.1K 🔥` `-71%`
1. [姐妹俩互用化妆品双双查出肾病 (Two sisters were diagnosed with kidney disease after using cosmetics on each other)](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A6%B9%E4%BF%A9%E4%BA%92%E7%94%A8%E5%8C%96%E5%A6%86%E5%93%81%E5%8F%8C%E5%8F%8C%E6%9F%A5%E5%87%BA%E8%82%BE%E7%97%85%23) `100.5K 🔥` `-73%`
1. [吴京 你看又要传绯闻了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E4%BD%A0%E7%9C%8B%E5%8F%88%E8%A6%81%E4%BC%A0%E7%BB%AF%E9%97%BB%E4%BA%86%23) `93.2K 🔥` `-75%`
1. [田曦薇情商](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%83%85%E5%95%86%23) `84.0K 🔥` `-78%`
1. [双胞胎老了后 (When the twins grow old)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%83%9E%E8%83%8E%E8%80%81%E4%BA%86%E5%90%8E%23) `82.6K 🔥` `-78%`
1. [黄婷婷解约后首个综艺](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A9%B7%E5%A9%B7%E8%A7%A3%E7%BA%A6%E5%90%8E%E9%A6%96%E4%B8%AA%E7%BB%BC%E8%89%BA%23) `78.4K 🔥` `-79%`
1. [曝美国国防部长5天花501亿美元 (US Secretary of Defense Spends $50.1 Billion in 5 Days Exposed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%BE%8E%E5%9B%BD%E5%9B%BD%E9%98%B2%E9%83%A8%E9%95%BF5%E5%A4%A9%E8%8A%B1501%E4%BA%BF%E7%BE%8E%E5%85%83%23) `74.3K 🔥` `-80%`
1. [邓凯孔雪儿情人节封面](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E5%AD%94%E9%9B%AA%E5%84%BF%E6%83%85%E4%BA%BA%E8%8A%82%E5%B0%81%E9%9D%A2%23) `71.9K 🔥` `-81%`
1. [代表称老师的职责不该向家长转移](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%A1%A8%E7%A7%B0%E8%80%81%E5%B8%88%E7%9A%84%E8%81%8C%E8%B4%A3%E4%B8%8D%E8%AF%A5%E5%90%91%E5%AE%B6%E9%95%BF%E8%BD%AC%E7%A7%BB%23) `70.2K 🔥` `-82%`

Updated at 2026-03-12 16:04:41

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
