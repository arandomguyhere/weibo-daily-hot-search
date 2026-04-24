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

1. [鹿晗 红包 (Luhan red envelope)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E7%BA%A2%E5%8C%85%23) `16.2M 🔥` `NEW`
1. [AI在保护AI](https://s.weibo.com/weibo?q=%23AI%E5%9C%A8%E4%BF%9D%E6%8A%A4AI%23) `1.3M 🔥` `NEW`
1. [全新奔驰纯电GLC](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E5%A5%94%E9%A9%B0%E7%BA%AF%E7%94%B5GLC%23) `688.0K 🔥` `NEW`
1. [年薪19万放羊全年无休你愿意吗](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%96%AA19%E4%B8%87%E6%94%BE%E7%BE%8A%E5%85%A8%E5%B9%B4%E6%97%A0%E4%BC%91%E4%BD%A0%E6%84%BF%E6%84%8F%E5%90%97%23) `327.3K 🔥` `NEW`
1. [孙杨 保送再见爱人](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E4%BF%9D%E9%80%81%E5%86%8D%E8%A7%81%E7%88%B1%E4%BA%BA%23) `325.2K 🔥` `NEW`
1. [跑男](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%23) `323.4K 🔥` `NEW`
1. [事业编成绩测试端口被AI抓取](https://s.weibo.com/weibo?q=%23%E4%BA%8B%E4%B8%9A%E7%BC%96%E6%88%90%E7%BB%A9%E6%B5%8B%E8%AF%95%E7%AB%AF%E5%8F%A3%E8%A2%ABAI%E6%8A%93%E5%8F%96%23) `310.6K 🔥` `NEW`
1. [泡泡玛特 aespa](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%20aespa%23) `286.0K 🔥` `NEW`
1. [把家装进MPV有多爽](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E5%AE%B6%E8%A3%85%E8%BF%9BMPV%E6%9C%89%E5%A4%9A%E7%88%BD%23) `277.2K 🔥` `NEW`
1. [福建三明保安与女车主冲突后续](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E4%B8%89%E6%98%8E%E4%BF%9D%E5%AE%89%E4%B8%8E%E5%A5%B3%E8%BD%A6%E4%B8%BB%E5%86%B2%E7%AA%81%E5%90%8E%E7%BB%AD%23) `269.9K 🔥` `NEW`
1. [霍思燕杜江北京车展现场下订 (Huo Siyan and Dujiang place an order on-site at the Beijing Auto Show)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E6%80%9D%E7%87%95%E6%9D%9C%E6%B1%9F%E5%8C%97%E4%BA%AC%E8%BD%A6%E5%B1%95%E7%8E%B0%E5%9C%BA%E4%B8%8B%E8%AE%A2%23) `187.8K 🔥` `NEW`
1. [孙杨 爷们要脸](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E7%88%B7%E4%BB%AC%E8%A6%81%E8%84%B8%23) `187.3K 🔥` `NEW`
1. [时代少年团复刻古早合照](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%A4%8D%E5%88%BB%E5%8F%A4%E6%97%A9%E5%90%88%E7%85%A7%23) `183.1K 🔥` `NEW`
1. [爆米花](https://s.weibo.com/weibo?q=%23%E7%88%86%E7%B1%B3%E8%8A%B1%23) `174.8K 🔥` `NEW`
1. [学位证失效男子称学校提出2个方案](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E4%BD%8D%E8%AF%81%E5%A4%B1%E6%95%88%E7%94%B7%E5%AD%90%E7%A7%B0%E5%AD%A6%E6%A0%A1%E6%8F%90%E5%87%BA2%E4%B8%AA%E6%96%B9%E6%A1%88%23) `169.1K 🔥` `NEW`
1. [印度一猴子幼崽夭折后闯民宅抓走婴儿](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%80%E7%8C%B4%E5%AD%90%E5%B9%BC%E5%B4%BD%E5%A4%AD%E6%8A%98%E5%90%8E%E9%97%AF%E6%B0%91%E5%AE%85%E6%8A%93%E8%B5%B0%E5%A9%B4%E5%84%BF%23) `168.6K 🔥` `NEW`
1. [原来汽车总裁都是e人](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B1%BD%E8%BD%A6%E6%80%BB%E8%A3%81%E9%83%BD%E6%98%AFe%E4%BA%BA%23) `161.5K 🔥` `NEW`
1. [北大还行撒贝宁当场破防](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E8%BF%98%E8%A1%8C%E6%92%92%E8%B4%9D%E5%AE%81%E5%BD%93%E5%9C%BA%E7%A0%B4%E9%98%B2%23) `159.7K 🔥` `NEW`
1. [华晨宇演唱会为何临开场叫停](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%BA%E4%BD%95%E4%B8%B4%E5%BC%80%E5%9C%BA%E5%8F%AB%E5%81%9C%23) `152.1K 🔥` `NEW`
1. [牙龈萎缩之后还能再长回来吗](https://s.weibo.com/weibo?q=%23%E7%89%99%E9%BE%88%E8%90%8E%E7%BC%A9%E4%B9%8B%E5%90%8E%E8%BF%98%E8%83%BD%E5%86%8D%E9%95%BF%E5%9B%9E%E6%9D%A5%E5%90%97%23) `151.0K 🔥` `NEW`
1. [陈奕恒贴身保护左奇函 (Chen Yiheng personally protects Zuo Qihan)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E8%B4%B4%E8%BA%AB%E4%BF%9D%E6%8A%A4%E5%B7%A6%E5%A5%87%E5%87%BD%23) `135.9K 🔥` `NEW`
1. [外国人被上海烘焙店震惊](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E8%A2%AB%E4%B8%8A%E6%B5%B7%E7%83%98%E7%84%99%E5%BA%97%E9%9C%87%E6%83%8A%23) `861.5K 🔥` `+116%`
1. [郑钦文vs肯宁](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E8%82%AF%E5%AE%81%23) `348.9K 🔥` `+23%`
1. [孩子游戏退款后又充5万再退被拒](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E6%B8%B8%E6%88%8F%E9%80%80%E6%AC%BE%E5%90%8E%E5%8F%88%E5%85%855%E4%B8%87%E5%86%8D%E9%80%80%E8%A2%AB%E6%8B%92%23) `263.8K 🔥` `+30%`
1. [有一种浪漫叫中国航天](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%B8%80%E7%A7%8D%E6%B5%AA%E6%BC%AB%E5%8F%AB%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%23) `709.6K 🔥`
1. [你为什么不吃呷哺呷哺了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%90%83%E5%91%B7%E5%93%BA%E5%91%B7%E5%93%BA%E4%BA%86%23) `184.1K 🔥`
1. [浪姐 (Sister Lang)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `136.4K 🔥`
1. [簪花的孟子义](https://s.weibo.com/weibo?q=%23%E7%B0%AA%E8%8A%B1%E7%9A%84%E5%AD%9F%E5%AD%90%E4%B9%89%23) `131.6K 🔥`
1. [今夜喜友秀收官真敢说](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%9C%E5%96%9C%E5%8F%8B%E7%A7%80%E6%94%B6%E5%AE%98%E7%9C%9F%E6%95%A2%E8%AF%B4%23) `324.8K 🔥` `-37%`
1. [梅毒并非只通过性传播](https://s.weibo.com/weibo?q=%23%E6%A2%85%E6%AF%92%E5%B9%B6%E9%9D%9E%E5%8F%AA%E9%80%9A%E8%BF%87%E6%80%A7%E4%BC%A0%E6%92%AD%23) `316.6K 🔥` `-31%`
1. [网传新红楼梦演员表](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%96%B0%E7%BA%A2%E6%A5%BC%E6%A2%A6%E6%BC%94%E5%91%98%E8%A1%A8%23) `313.1K 🔥` `-46%`
1. [C罗认为人类喝牛奶不正常 (Cristiano Ronaldo thinks drinking milk is abnormal for humans)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%AE%A4%E4%B8%BA%E4%BA%BA%E7%B1%BB%E5%96%9D%E7%89%9B%E5%A5%B6%E4%B8%8D%E6%AD%A3%E5%B8%B8%23) `303.7K 🔥` `-40%`
1. [黄宗泽 牙龈萎缩](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AE%97%E6%B3%BD%20%E7%89%99%E9%BE%88%E8%90%8E%E7%BC%A9%23) `299.2K 🔥` `-25%`
1. [黄旭熙 可以爆料了吗 (Huang Xuxi, can you break the news?)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%97%AD%E7%86%99%20%E5%8F%AF%E4%BB%A5%E7%88%86%E6%96%99%E4%BA%86%E5%90%97%23) `295.1K 🔥` `-33%`
1. [工程师猝死倒地后工作群还在轰炸 (The work group was still bombing after the engineer died suddenly and fell to the ground)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E7%A8%8B%E5%B8%88%E7%8C%9D%E6%AD%BB%E5%80%92%E5%9C%B0%E5%90%8E%E5%B7%A5%E4%BD%9C%E7%BE%A4%E8%BF%98%E5%9C%A8%E8%BD%B0%E7%82%B8%23) `289.2K 🔥` `-65%`
1. [傅首尔怎么了](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E6%80%8E%E4%B9%88%E4%BA%86%23) `283.2K 🔥` `-33%`
1. [沪上阿姨疯涨](https://s.weibo.com/weibo?q=%23%E6%B2%AA%E4%B8%8A%E9%98%BF%E5%A7%A8%E7%96%AF%E6%B6%A8%23) `273.2K 🔥` `-22%`
1. [掩埋村民现场有多名穿着制服男子](https://s.weibo.com/weibo?q=%23%E6%8E%A9%E5%9F%8B%E6%9D%91%E6%B0%91%E7%8E%B0%E5%9C%BA%E6%9C%89%E5%A4%9A%E5%90%8D%E7%A9%BF%E7%9D%80%E5%88%B6%E6%9C%8D%E7%94%B7%E5%AD%90%23) `266.1K 🔥` `-41%`
1. [华晨宇演唱会损失](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E6%8D%9F%E5%A4%B1%23) `257.7K 🔥` `-49%`
1. [刘浩存帮同学要宋威龙签名照](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E5%B8%AE%E5%90%8C%E5%AD%A6%E8%A6%81%E5%AE%8B%E5%A8%81%E9%BE%99%E7%AD%BE%E5%90%8D%E7%85%A7%23) `253.4K 🔥` `-33%`
1. [王者哪吒2联动 (King Nezha 2 linkage)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E5%93%AA%E5%90%922%E8%81%94%E5%8A%A8%23) `252.9K 🔥` `-26%`
1. [泫雅近照曝光面部浮肿](https://s.weibo.com/weibo?q=%23%E6%B3%AB%E9%9B%85%E8%BF%91%E7%85%A7%E6%9B%9D%E5%85%89%E9%9D%A2%E9%83%A8%E6%B5%AE%E8%82%BF%23) `250.1K 🔥` `-27%`
1. [冰湖重生算扑吗](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E7%AE%97%E6%89%91%E5%90%97%23) `235.9K 🔥` `-56%`
1. [月薪1.6万放羊已筛选出2对夫妻 (Sheep herding with a monthly salary of 16,000 has selected 2 couples)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA1.6%E4%B8%87%E6%94%BE%E7%BE%8A%E5%B7%B2%E7%AD%9B%E9%80%89%E5%87%BA2%E5%AF%B9%E5%A4%AB%E5%A6%BB%23) `190.0K 🔥` `-37%`
1. [张彬彬郑业成KO美人师兄售后](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BD%AC%E5%BD%AC%E9%83%91%E4%B8%9A%E6%88%90KO%E7%BE%8E%E4%BA%BA%E5%B8%88%E5%85%84%E5%94%AE%E5%90%8E%23) `183.2K 🔥` `-42%`
1. [女摩托车主遭3男子骚扰摸腰崩溃大哭 (Female motorcycle owner collapsed and cried after being harassed by three men and touching her waist)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%91%A9%E6%89%98%E8%BD%A6%E4%B8%BB%E9%81%AD3%E7%94%B7%E5%AD%90%E9%AA%9A%E6%89%B0%E6%91%B8%E8%85%B0%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `181.9K 🔥` `-34%`
1. [曝留几手想复婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%95%99%E5%87%A0%E6%89%8B%E6%83%B3%E5%A4%8D%E5%A9%9A%23) `179.5K 🔥` `-47%`
1. [当年TFBOYS就这样对抗EXO吗](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%B9%B4TFBOYS%E5%B0%B1%E8%BF%99%E6%A0%B7%E5%AF%B9%E6%8A%97EXO%E5%90%97%23) `143.9K 🔥` `-29%`
1. [江语晨女儿颜值](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%A5%B3%E5%84%BF%E9%A2%9C%E5%80%BC%23) `140.7K 🔥` `-41%`
1. [剪毁刘海意外剪成了人生发型](https://s.weibo.com/weibo?q=%23%E5%89%AA%E6%AF%81%E5%88%98%E6%B5%B7%E6%84%8F%E5%A4%96%E5%89%AA%E6%88%90%E4%BA%86%E4%BA%BA%E7%94%9F%E5%8F%91%E5%9E%8B%23) `136.6K 🔥` `-73%`
1. [A股新股中一签赚38.9万元](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%96%B0%E8%82%A1%E4%B8%AD%E4%B8%80%E7%AD%BE%E8%B5%9A38.9%E4%B8%87%E5%85%83%23) `135.5K 🔥` `-32%`
1. [鸭货三巨头只有绝味亏了](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E8%B4%A7%E4%B8%89%E5%B7%A8%E5%A4%B4%E5%8F%AA%E6%9C%89%E7%BB%9D%E5%91%B3%E4%BA%8F%E4%BA%86%23) `126.8K 🔥` `-33%`

Updated at 2026-04-24 19:11:03

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
