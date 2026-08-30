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

1. [吉隆泥石流已致16人遇难546人失联](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%B7%B2%E8%87%B416%E4%BA%BA%E9%81%87%E9%9A%BE546%E4%BA%BA%E5%A4%B1%E8%81%94%23) `1.5M 🔥` `NEW`
1. [尼泊尔山洪已致675死2498失联](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E5%B7%B2%E8%87%B4675%E6%AD%BB2498%E5%A4%B1%E8%81%94%23) `891.7K 🔥` `NEW`
1. [南极水银释放量激增550%](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%9E%81%E6%B0%B4%E9%93%B6%E9%87%8A%E6%94%BE%E9%87%8F%E6%BF%80%E5%A2%9E550%25%23) `714.7K 🔥` `NEW`
1. [男子编造发布抓杀人犯虚假视频被罚](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BC%96%E9%80%A0%E5%8F%91%E5%B8%83%E6%8A%93%E6%9D%80%E4%BA%BA%E7%8A%AF%E8%99%9A%E5%81%87%E8%A7%86%E9%A2%91%E8%A2%AB%E7%BD%9A%23) `515.4K 🔥` `NEW`
1. [尚之桃栾念分手](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E4%B9%8B%E6%A1%83%E6%A0%BE%E5%BF%B5%E5%88%86%E6%89%8B%23) `436.8K 🔥` `NEW`
1. [王一博征服西欧最高峰](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%BE%81%E6%9C%8D%E8%A5%BF%E6%AC%A7%E6%9C%80%E9%AB%98%E5%B3%B0%23) `409.8K 🔥` `NEW`
1. [金价暴跌之前有人直接清仓](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%9A%B4%E8%B7%8C%E4%B9%8B%E5%89%8D%E6%9C%89%E4%BA%BA%E7%9B%B4%E6%8E%A5%E6%B8%85%E4%BB%93%23) `390.3K 🔥` `NEW`
1. [5岁女儿被前妻当街抢走藏匿失联](https://s.weibo.com/weibo?q=%235%E5%B2%81%E5%A5%B3%E5%84%BF%E8%A2%AB%E5%89%8D%E5%A6%BB%E5%BD%93%E8%A1%97%E6%8A%A2%E8%B5%B0%E8%97%8F%E5%8C%BF%E5%A4%B1%E8%81%94%23) `307.1K 🔥` `NEW`
1. [47岁的王阳让我眼前一亮](https://s.weibo.com/weibo?q=%2347%E5%B2%81%E7%9A%84%E7%8E%8B%E9%98%B3%E8%AE%A9%E6%88%91%E7%9C%BC%E5%89%8D%E4%B8%80%E4%BA%AE%23) `290.6K 🔥` `NEW`
1. [吉隆泥石流灾害原因查明](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E7%81%BE%E5%AE%B3%E5%8E%9F%E5%9B%A0%E6%9F%A5%E6%98%8E%23) `247.5K 🔥` `NEW`
1. [TOP演唱会疑似抄袭王源间奏](https://s.weibo.com/weibo?q=%23TOP%E6%BC%94%E5%94%B1%E4%BC%9A%E7%96%91%E4%BC%BC%E6%8A%84%E8%A2%AD%E7%8E%8B%E6%BA%90%E9%97%B4%E5%A5%8F%23) `207.9K 🔥` `NEW`
1. [现实版爷爷和7个葫芦娃火了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%AE%9E%E7%89%88%E7%88%B7%E7%88%B7%E5%92%8C7%E4%B8%AA%E8%91%AB%E8%8A%A6%E5%A8%83%E7%81%AB%E4%BA%86%23) `190.1K 🔥` `NEW`
1. [蔡依林回应7点关机9点半睡觉](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%9B%9E%E5%BA%947%E7%82%B9%E5%85%B3%E6%9C%BA9%E7%82%B9%E5%8D%8A%E7%9D%A1%E8%A7%89%23) `166.4K 🔥` `NEW`
1. [西藏吉隆泥石流新闻发布会](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E6%96%B0%E9%97%BB%E5%8F%91%E5%B8%83%E4%BC%9A%23) `158.4K 🔥` `NEW`
1. [吉隆口岸救援挖掘机履带没入急流](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%95%91%E6%8F%B4%E6%8C%96%E6%8E%98%E6%9C%BA%E5%B1%A5%E5%B8%A6%E6%B2%A1%E5%85%A5%E6%80%A5%E6%B5%81%23) `152.3K 🔥` `NEW`
1. [尼泊尔6岁女童泥浆中被救](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%946%E5%B2%81%E5%A5%B3%E7%AB%A5%E6%B3%A5%E6%B5%86%E4%B8%AD%E8%A2%AB%E6%95%91%23) `152.1K 🔥` `NEW`
1. [刺棠 不开机](https://s.weibo.com/weibo?q=%23%E5%88%BA%E6%A3%A0%20%E4%B8%8D%E5%BC%80%E6%9C%BA%23) `152.0K 🔥` `NEW`
1. [左航的眼泪像断了线的珍珠](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AA%E7%9A%84%E7%9C%BC%E6%B3%AA%E5%83%8F%E6%96%AD%E4%BA%86%E7%BA%BF%E7%9A%84%E7%8F%8D%E7%8F%A0%23) `141.9K 🔥` `NEW`
1. [尼泊尔山洪 民众误判](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%20%E6%B0%91%E4%BC%97%E8%AF%AF%E5%88%A4%23) `137.3K 🔥` `NEW`
1. [面馆偶遇王菲李嫣](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E9%A6%86%E5%81%B6%E9%81%87%E7%8E%8B%E8%8F%B2%E6%9D%8E%E5%AB%A3%23) `123.5K 🔥` `NEW`
1. [丽江胁迫游客消费导游被行拘](https://s.weibo.com/weibo?q=%23%E4%B8%BD%E6%B1%9F%E8%83%81%E8%BF%AB%E6%B8%B8%E5%AE%A2%E6%B6%88%E8%B4%B9%E5%AF%BC%E6%B8%B8%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `122.7K 🔥` `NEW`
1. [赵心童恭喜常冰玉](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E6%81%AD%E5%96%9C%E5%B8%B8%E5%86%B0%E7%8E%89%23) `118.0K 🔥` `NEW`
1. [14家央国企将开放超60亿条高价值数据](https://s.weibo.com/weibo?q=%2314%E5%AE%B6%E5%A4%AE%E5%9B%BD%E4%BC%81%E5%B0%86%E5%BC%80%E6%94%BE%E8%B6%8560%E4%BA%BF%E6%9D%A1%E9%AB%98%E4%BB%B7%E5%80%BC%E6%95%B0%E6%8D%AE%23) `113.1K 🔥` `NEW`
1. [印度男子被两人当街砍死](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%90%E8%A2%AB%E4%B8%A4%E4%BA%BA%E5%BD%93%E8%A1%97%E7%A0%8D%E6%AD%BB%23) `111.9K 🔥` `NEW`
1. [AI赋能新电商发展](https://s.weibo.com/weibo?q=%23AI%E8%B5%8B%E8%83%BD%E6%96%B0%E7%94%B5%E5%95%86%E5%8F%91%E5%B1%95%23) `796.4K 🔥` `+82%`
1. [长大后先对什么祛魅了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E5%90%8E%E5%85%88%E5%AF%B9%E4%BB%80%E4%B9%88%E7%A5%9B%E9%AD%85%E4%BA%86%23) `787.1K 🔥` `+93%`
1. [小说男女主照进现实了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%AF%B4%E7%94%B7%E5%A5%B3%E4%B8%BB%E7%85%A7%E8%BF%9B%E7%8E%B0%E5%AE%9E%E4%BA%86%23) `530.9K 🔥` `+151%`
1. [户上隼辅回应3比2樊振东 (Hayasuke Togami responded 3 to 2 Fan Zhendong)](https://s.weibo.com/weibo?q=%23%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%E5%9B%9E%E5%BA%943%E6%AF%942%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `490.0K 🔥` `+149%`
1. [被井柏然吻技演技迷住了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%BA%95%E6%9F%8F%E7%84%B6%E5%90%BB%E6%8A%80%E6%BC%94%E6%8A%80%E8%BF%B7%E4%BD%8F%E4%BA%86%23) `428.3K 🔥` `+145%`
1. [医生回应女孩游泳后全身长20多个疣](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%A9%E6%B8%B8%E6%B3%B3%E5%90%8E%E5%85%A8%E8%BA%AB%E9%95%BF20%E5%A4%9A%E4%B8%AA%E7%96%A3%23) `420.0K 🔥` `+141%`
1. [吉隆口岸沿途挂满衣物碎片](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%B2%BF%E9%80%94%E6%8C%82%E6%BB%A1%E8%A1%A3%E7%89%A9%E7%A2%8E%E7%89%87%23) `308.6K 🔥` `+77%`
1. [女乘客航班上遭邻座暴力殴打](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B9%98%E5%AE%A2%E8%88%AA%E7%8F%AD%E4%B8%8A%E9%81%AD%E9%82%BB%E5%BA%A7%E6%9A%B4%E5%8A%9B%E6%AE%B4%E6%89%93%23) `200.2K 🔥`
1. [小米18Fold](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Fold%23) `195.5K 🔥`
1. [黄景瑜疯狂拥抱宋亚东](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E7%96%AF%E7%8B%82%E6%8B%A5%E6%8A%B1%E5%AE%8B%E4%BA%9A%E4%B8%9C%23) `179.2K 🔥`
1. [这5种常见蔬菜是抗炎高手](https://s.weibo.com/weibo?q=%23%E8%BF%995%E7%A7%8D%E5%B8%B8%E8%A7%81%E8%94%AC%E8%8F%9C%E6%98%AF%E6%8A%97%E7%82%8E%E9%AB%98%E6%89%8B%23) `170.4K 🔥`
1. [李嫣窦靖童宋妍霏再次同框](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AB%A3%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%AE%8B%E5%A6%8D%E9%9C%8F%E5%86%8D%E6%AC%A1%E5%90%8C%E6%A1%86%23) `155.5K 🔥`
1. [白敬亭孙千待播剧](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E5%AD%99%E5%8D%83%E5%BE%85%E6%92%AD%E5%89%A7%23) `152.3K 🔥`
1. [伊朗发了一个嘲讽美国的神视频](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E4%BA%86%E4%B8%80%E4%B8%AA%E5%98%B2%E8%AE%BD%E7%BE%8E%E5%9B%BD%E7%9A%84%E7%A5%9E%E8%A7%86%E9%A2%91%23) `152.2K 🔥`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `152.0K 🔥`
1. [剧里看到朴允浩整容成柳俊烈](https://s.weibo.com/weibo?q=%23%E5%89%A7%E9%87%8C%E7%9C%8B%E5%88%B0%E6%9C%B4%E5%85%81%E6%B5%A9%E6%95%B4%E5%AE%B9%E6%88%90%E6%9F%B3%E4%BF%8A%E7%83%88%23) `146.6K 🔥`
1. [全球第99高峰一半冰层坠入山谷](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E7%AC%AC99%E9%AB%98%E5%B3%B0%E4%B8%80%E5%8D%8A%E5%86%B0%E5%B1%82%E5%9D%A0%E5%85%A5%E5%B1%B1%E8%B0%B7%23) `143.4K 🔥`
1. [是我妈在发帖吗](https://s.weibo.com/weibo?q=%23%E6%98%AF%E6%88%91%E5%A6%88%E5%9C%A8%E5%8F%91%E5%B8%96%E5%90%97%23) `139.7K 🔥`
1. [肯德基最离谱的联名来了](https://s.weibo.com/weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%E6%9C%80%E7%A6%BB%E8%B0%B1%E7%9A%84%E8%81%94%E5%90%8D%E6%9D%A5%E4%BA%86%23) `138.0K 🔥`
1. [吉隆口岸小邬警官确认平安](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%B0%8F%E9%82%AC%E8%AD%A6%E5%AE%98%E7%A1%AE%E8%AE%A4%E5%B9%B3%E5%AE%89%23) `514.6K 🔥` `-31%`
1. [樊振东2比3户上隼辅](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C2%E6%AF%943%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23) `191.9K 🔥` `-65%`
1. [萨摩耶坐飞机超重都不耶了](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%91%A9%E8%80%B6%E5%9D%90%E9%A3%9E%E6%9C%BA%E8%B6%85%E9%87%8D%E9%83%BD%E4%B8%8D%E8%80%B6%E4%BA%86%23) `133.4K 🔥` `-22%`
1. [常冰玉击败赵心童夺冠](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%86%B0%E7%8E%89%E5%87%BB%E8%B4%A5%E8%B5%B5%E5%BF%83%E7%AB%A5%E5%A4%BA%E5%86%A0%23) `127.1K 🔥` `-27%`
1. [尼泊尔幸存者称根本来不及逃生](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B9%B8%E5%AD%98%E8%80%85%E7%A7%B0%E6%A0%B9%E6%9C%AC%E6%9D%A5%E4%B8%8D%E5%8F%8A%E9%80%83%E7%94%9F%23) `119.1K 🔥` `-31%`
1. [女孩咳了一个月肺里竟取出1颗牙 (A girl had a tooth removed from her lung after coughing for a month)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%92%B3%E4%BA%86%E4%B8%80%E4%B8%AA%E6%9C%88%E8%82%BA%E9%87%8C%E7%AB%9F%E5%8F%96%E5%87%BA1%E9%A2%97%E7%89%99%23) `114.1K 🔥` `-33%`
1. [田曦薇顶级出装一套比一套美](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%A1%B6%E7%BA%A7%E5%87%BA%E8%A3%85%E4%B8%80%E5%A5%97%E6%AF%94%E4%B8%80%E5%A5%97%E7%BE%8E%23) `109.5K 🔥` `-36%`
1. [王菲躲镜头](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E8%BA%B2%E9%95%9C%E5%A4%B4%23) `108.2K 🔥` `-37%`

Updated at 2026-08-30 09:25:21

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
