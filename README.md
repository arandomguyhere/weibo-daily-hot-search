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

1. [红果这些短剧人气好高](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E8%BF%99%E4%BA%9B%E7%9F%AD%E5%89%A7%E4%BA%BA%E6%B0%94%E5%A5%BD%E9%AB%98%23) `1.2M 🔥` `NEW`
1. [多读书真的会影响三观](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E8%AF%BB%E4%B9%A6%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%BD%B1%E5%93%8D%E4%B8%89%E8%A7%82%23) `840.3K 🔥` `NEW`
1. [数说进博会新亮点](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%B4%E8%BF%9B%E5%8D%9A%E4%BC%9A%E6%96%B0%E4%BA%AE%E7%82%B9%23) `704.2K 🔥` `NEW`
1. [高圆圆随便打扮一下就成法拉利了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%9C%86%E5%9C%86%E9%9A%8F%E4%BE%BF%E6%89%93%E6%89%AE%E4%B8%80%E4%B8%8B%E5%B0%B1%E6%88%90%E6%B3%95%E6%8B%89%E5%88%A9%E4%BA%86%23) `541.5K 🔥` `NEW`
1. [结婚当天离世新郎系心脏压塞死亡](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E5%BD%93%E5%A4%A9%E7%A6%BB%E4%B8%96%E6%96%B0%E9%83%8E%E7%B3%BB%E5%BF%83%E8%84%8F%E5%8E%8B%E5%A1%9E%E6%AD%BB%E4%BA%A1%23) `535.7K 🔥` `NEW`
1. [许飞什么都敢回啊厉娜](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E4%BB%80%E4%B9%88%E9%83%BD%E6%95%A2%E5%9B%9E%E5%95%8A%E5%8E%89%E5%A8%9C%23) `452.2K 🔥` `NEW`
1. [高校通报有人男扮女装进女生宿舍](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%A0%A1%E9%80%9A%E6%8A%A5%E6%9C%89%E4%BA%BA%E7%94%B7%E6%89%AE%E5%A5%B3%E8%A3%85%E8%BF%9B%E5%A5%B3%E7%94%9F%E5%AE%BF%E8%88%8D%23) `372.1K 🔥` `NEW`
1. [后会友期到底找过多少人啊](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E5%88%B0%E5%BA%95%E6%89%BE%E8%BF%87%E5%A4%9A%E5%B0%91%E4%BA%BA%E5%95%8A%23) `345.6K 🔥` `NEW`
1. [巩立姣退役后减重60多斤](https://s.weibo.com/weibo?q=%23%E5%B7%A9%E7%AB%8B%E5%A7%A3%E9%80%80%E5%BD%B9%E5%90%8E%E5%87%8F%E9%87%8D60%E5%A4%9A%E6%96%A4%23) `279.6K 🔥` `NEW`
1. [网约车被围堵事件周边商户发声](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A6%E8%BD%A6%E8%A2%AB%E5%9B%B4%E5%A0%B5%E4%BA%8B%E4%BB%B6%E5%91%A8%E8%BE%B9%E5%95%86%E6%88%B7%E5%8F%91%E5%A3%B0%23) `276.6K 🔥` `NEW`
1. [白小纯怎么敢写训练像坐牢](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%80%8E%E4%B9%88%E6%95%A2%E5%86%99%E8%AE%AD%E7%BB%83%E5%83%8F%E5%9D%90%E7%89%A2%23) `272.5K 🔥` `NEW`
1. [蔡文静爸爸最在乎的是孙子高不高兴](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E7%88%B8%E7%88%B8%E6%9C%80%E5%9C%A8%E4%B9%8E%E7%9A%84%E6%98%AF%E5%AD%99%E5%AD%90%E9%AB%98%E4%B8%8D%E9%AB%98%E5%85%B4%23) `269.6K 🔥` `NEW`
1. [曝许飞没有背刺厉娜](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%AE%B8%E9%A3%9E%E6%B2%A1%E6%9C%89%E8%83%8C%E5%88%BA%E5%8E%89%E5%A8%9C%23) `267.7K 🔥` `NEW`
1. [威少得知球衣退役当场落泪](https://s.weibo.com/weibo?q=%23%E5%A8%81%E5%B0%91%E5%BE%97%E7%9F%A5%E7%90%83%E8%A1%A3%E9%80%80%E5%BD%B9%E5%BD%93%E5%9C%BA%E8%90%BD%E6%B3%AA%23) `266.1K 🔥` `NEW`
1. [特努斯回应iPhoneDuo屏幕问题](https://s.weibo.com/weibo?q=%23%E7%89%B9%E5%8A%AA%E6%96%AF%E5%9B%9E%E5%BA%94iPhoneDuo%E5%B1%8F%E5%B9%95%E9%97%AE%E9%A2%98%23) `264.5K 🔥` `NEW`
1. [这些东西致癌 千万别囤了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E4%B8%9C%E8%A5%BF%E8%87%B4%E7%99%8C%20%E5%8D%83%E4%B8%87%E5%88%AB%E5%9B%A4%E4%BA%86%23) `264.4K 🔥` `NEW`
1. [183很丑170很帅怎么选](https://s.weibo.com/weibo?q=%23183%E5%BE%88%E4%B8%91170%E5%BE%88%E5%B8%85%E6%80%8E%E4%B9%88%E9%80%89%23) `263.4K 🔥` `NEW`
1. [IU边佑锡主演剧成年度最差榜首](https://s.weibo.com/weibo?q=%23IU%E8%BE%B9%E4%BD%91%E9%94%A1%E4%B8%BB%E6%BC%94%E5%89%A7%E6%88%90%E5%B9%B4%E5%BA%A6%E6%9C%80%E5%B7%AE%E6%A6%9C%E9%A6%96%23) `262.7K 🔥` `NEW`
1. [雪豹凌小寒病亡](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E8%B1%B9%E5%87%8C%E5%B0%8F%E5%AF%92%E7%97%85%E4%BA%A1%23) `261.8K 🔥` `NEW`
1. [白小纯青稚 艺德课](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%20%E8%89%BA%E5%BE%B7%E8%AF%BE%23) `261.5K 🔥` `NEW`
1. [武昌一小区爆燃致2死1伤](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%98%8C%E4%B8%80%E5%B0%8F%E5%8C%BA%E7%88%86%E7%87%83%E8%87%B42%E6%AD%BB1%E4%BC%A4%23) `261.0K 🔥` `NEW`
1. [上班摸鱼的最高境界](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E6%91%B8%E9%B1%BC%E7%9A%84%E6%9C%80%E9%AB%98%E5%A2%83%E7%95%8C%23) `256.0K 🔥` `NEW`
1. [马天宇昨天才感谢孙怡今天就要删](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E6%98%A8%E5%A4%A9%E6%89%8D%E6%84%9F%E8%B0%A2%E5%AD%99%E6%80%A1%E4%BB%8A%E5%A4%A9%E5%B0%B1%E8%A6%81%E5%88%A0%23) `243.7K 🔥` `NEW`
1. [光与夜之恋](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%23) `240.0K 🔥` `NEW`
1. [九寨沟老人打人](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E8%80%81%E4%BA%BA%E6%89%93%E4%BA%BA%23) `236.4K 🔥` `NEW`
1. [武汉工商学院通报](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%B7%A5%E5%95%86%E5%AD%A6%E9%99%A2%E9%80%9A%E6%8A%A5%23) `234.9K 🔥` `NEW`
1. [考古王菲和方媛的两段在机场画面](https://s.weibo.com/weibo?q=%23%E8%80%83%E5%8F%A4%E7%8E%8B%E8%8F%B2%E5%92%8C%E6%96%B9%E5%AA%9B%E7%9A%84%E4%B8%A4%E6%AE%B5%E5%9C%A8%E6%9C%BA%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `231.7K 🔥` `NEW`
1. [主动脉夹层被称为死亡的天花板](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E5%8A%A8%E8%84%89%E5%A4%B9%E5%B1%82%E8%A2%AB%E7%A7%B0%E4%B8%BA%E6%AD%BB%E4%BA%A1%E7%9A%84%E5%A4%A9%E8%8A%B1%E6%9D%BF%23) `226.9K 🔥` `NEW`
1. [网友看了红果短剧后的感受](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%9C%8B%E4%BA%86%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%90%8E%E7%9A%84%E6%84%9F%E5%8F%97%23) `221.0K 🔥` `NEW`
1. [调杠杆给临近爆仓账户一线生机](https://s.weibo.com/weibo?q=%23%E8%B0%83%E6%9D%A0%E6%9D%86%E7%BB%99%E4%B8%B4%E8%BF%91%E7%88%86%E4%BB%93%E8%B4%A6%E6%88%B7%E4%B8%80%E7%BA%BF%E7%94%9F%E6%9C%BA%23) `213.0K 🔥` `NEW`
1. [不发朋友圈官宣不代表什么](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%AE%98%E5%AE%A3%E4%B8%8D%E4%BB%A3%E8%A1%A8%E4%BB%80%E4%B9%88%23) `193.4K 🔥` `NEW`
1. [特朗普放话不在乎台海问题](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%94%BE%E8%AF%9D%E4%B8%8D%E5%9C%A8%E4%B9%8E%E5%8F%B0%E6%B5%B7%E9%97%AE%E9%A2%98%23) `191.5K 🔥` `NEW`
1. [政务中心解释补办身份证要带身份证](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%8A%A1%E4%B8%AD%E5%BF%83%E8%A7%A3%E9%87%8A%E8%A1%A5%E5%8A%9E%E8%BA%AB%E4%BB%BD%E8%AF%81%E8%A6%81%E5%B8%A6%E8%BA%AB%E4%BB%BD%E8%AF%81%23) `189.8K 🔥` `NEW`
1. [美军据报袭击伊朗格什姆岛](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%8D%AE%E6%8A%A5%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E6%A0%BC%E4%BB%80%E5%A7%86%E5%B2%9B%23) `189.2K 🔥` `NEW`
1. [实体店抓夹卖69.9元女子直呼老天爷](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E4%BD%93%E5%BA%97%E6%8A%93%E5%A4%B9%E5%8D%9669.9%E5%85%83%E5%A5%B3%E5%AD%90%E7%9B%B4%E5%91%BC%E8%80%81%E5%A4%A9%E7%88%B7%23) `185.1K 🔥` `NEW`
1. [老公跟上媳妇吃饭节奏笑不活了](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%85%AC%E8%B7%9F%E4%B8%8A%E5%AA%B3%E5%A6%87%E5%90%83%E9%A5%AD%E8%8A%82%E5%A5%8F%E7%AC%91%E4%B8%8D%E6%B4%BB%E4%BA%86%23) `172.1K 🔥` `NEW`
1. [汪海林称骂流量是抬咖](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B5%B7%E6%9E%97%E7%A7%B0%E9%AA%82%E6%B5%81%E9%87%8F%E6%98%AF%E6%8A%AC%E5%92%96%23) `158.9K 🔥` `NEW`
1. [沈阳副市长和最帅保洁大叔同框](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E5%89%AF%E5%B8%82%E9%95%BF%E5%92%8C%E6%9C%80%E5%B8%85%E4%BF%9D%E6%B4%81%E5%A4%A7%E5%8F%94%E5%90%8C%E6%A1%86%23) `141.9K 🔥` `NEW`
1. [币安9.5小时被提走46亿美元](https://s.weibo.com/weibo?q=%23%E5%B8%81%E5%AE%899.5%E5%B0%8F%E6%97%B6%E8%A2%AB%E6%8F%90%E8%B5%B046%E4%BA%BF%E7%BE%8E%E5%85%83%23) `130.1K 🔥` `NEW`
1. [新华社追问国乒男队怎么了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8D%8E%E7%A4%BE%E8%BF%BD%E9%97%AE%E5%9B%BD%E4%B9%92%E7%94%B7%E9%98%9F%E6%80%8E%E4%B9%88%E4%BA%86%23) `660.4K 🔥` `+276%`
1. [2027或是最舒服年](https://s.weibo.com/weibo?q=%232027%E6%88%96%E6%98%AF%E6%9C%80%E8%88%92%E6%9C%8D%E5%B9%B4%23) `286.9K 🔥` `+424%`
1. [张雪重庆大学开价被学生嫌弃](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E9%87%8D%E5%BA%86%E5%A4%A7%E5%AD%A6%E5%BC%80%E4%BB%B7%E8%A2%AB%E5%AD%A6%E7%94%9F%E5%AB%8C%E5%BC%83%23) `285.7K 🔥` `+425%`
1. [蔡文静父亲全程偏袒无血缘的孙子](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E7%88%B6%E4%BA%B2%E5%85%A8%E7%A8%8B%E5%81%8F%E8%A2%92%E6%97%A0%E8%A1%80%E7%BC%98%E7%9A%84%E5%AD%99%E5%AD%90%23) `283.4K 🔥` `+404%`
1. [马天宇仅互关评论后的杨幂](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%BB%85%E4%BA%92%E5%85%B3%E8%AF%84%E8%AE%BA%E5%90%8E%E7%9A%84%E6%9D%A8%E5%B9%82%23) `277.0K 🔥` `+396%`
1. [长沙烈士公园穿和服带武士刀拍照](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E7%83%88%E5%A3%AB%E5%85%AC%E5%9B%AD%E7%A9%BF%E5%92%8C%E6%9C%8D%E5%B8%A6%E6%AD%A6%E5%A3%AB%E5%88%80%E6%8B%8D%E7%85%A7%23) `243.6K 🔥` `+353%`
1. [樊振东2年没打WTT仍居第二](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C2%E5%B9%B4%E6%B2%A1%E6%89%93WTT%E4%BB%8D%E5%B1%85%E7%AC%AC%E4%BA%8C%23) `231.9K 🔥` `+393%`
1. [红果短剧刷到天亮](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%88%B7%E5%88%B0%E5%A4%A9%E4%BA%AE%23) `223.1K 🔥` `+304%`
1. [瑞幸新联名放真人被吐槽](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E6%96%B0%E8%81%94%E5%90%8D%E6%94%BE%E7%9C%9F%E4%BA%BA%E8%A2%AB%E5%90%90%E6%A7%BD%23) `176.6K 🔥` `+226%`
1. [超20万人看了一场假乒乓球比赛](https://s.weibo.com/weibo?q=%23%E8%B6%8520%E4%B8%87%E4%BA%BA%E7%9C%8B%E4%BA%86%E4%B8%80%E5%9C%BA%E5%81%87%E4%B9%92%E4%B9%93%E7%90%83%E6%AF%94%E8%B5%9B%23) `144.6K 🔥` `+154%`

Updated at 2026-11-03 09:52:15

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
