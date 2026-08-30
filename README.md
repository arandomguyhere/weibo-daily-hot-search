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

1. [华为新三折叠](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%96%B0%E4%B8%89%E6%8A%98%E5%8F%A0%23) `1.1M 🔥` `NEW`
1. [尼泊尔山洪已致675遇难2498失联](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E5%B7%B2%E8%87%B4675%E9%81%87%E9%9A%BE2498%E5%A4%B1%E8%81%94%23) `997.7K 🔥` `NEW`
1. [这三天请假难度堪比美国签证](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%89%E5%A4%A9%E8%AF%B7%E5%81%87%E9%9A%BE%E5%BA%A6%E5%A0%AA%E6%AF%94%E7%BE%8E%E5%9B%BD%E7%AD%BE%E8%AF%81%23) `901.5K 🔥` `NEW`
1. [金牌幼师嫁给了二级厨师](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%89%8C%E5%B9%BC%E5%B8%88%E5%AB%81%E7%BB%99%E4%BA%86%E4%BA%8C%E7%BA%A7%E5%8E%A8%E5%B8%88%23) `537.6K 🔥` `NEW`
1. [王菲一嗓子把李嫣吓一跳](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E4%B8%80%E5%97%93%E5%AD%90%E6%8A%8A%E6%9D%8E%E5%AB%A3%E5%90%93%E4%B8%80%E8%B7%B3%23) `396.9K 🔥` `NEW`
1. [风云T7犀牛电池600km续航超能跑](https://s.weibo.com/weibo?q=%23%E9%A3%8E%E4%BA%91T7%E7%8A%80%E7%89%9B%E7%94%B5%E6%B1%A0600km%E7%BB%AD%E8%88%AA%E8%B6%85%E8%83%BD%E8%B7%91%23) `292.7K 🔥` `NEW`
1. [初中孩子更需要父母接送上下学](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%AD%E5%AD%A9%E5%AD%90%E6%9B%B4%E9%9C%80%E8%A6%81%E7%88%B6%E6%AF%8D%E6%8E%A5%E9%80%81%E4%B8%8A%E4%B8%8B%E5%AD%A6%23) `256.1K 🔥` `NEW`
1. [吉隆口岸约0.7平方公里被夷为平地](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E7%BA%A60.7%E5%B9%B3%E6%96%B9%E5%85%AC%E9%87%8C%E8%A2%AB%E5%A4%B7%E4%B8%BA%E5%B9%B3%E5%9C%B0%23) `249.3K 🔥` `NEW`
1. [孙千送包](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E9%80%81%E5%8C%85%23) `246.6K 🔥` `NEW`
1. [樊振东赛后情绪低落](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%B5%9B%E5%90%8E%E6%83%85%E7%BB%AA%E4%BD%8E%E8%90%BD%23) `246.3K 🔥` `NEW`
1. [男子被冤摸女子臀部妻子气愤](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E5%86%A4%E6%91%B8%E5%A5%B3%E5%AD%90%E8%87%80%E9%83%A8%E5%A6%BB%E5%AD%90%E6%B0%94%E6%84%A4%23) `245.0K 🔥` `NEW`
1. [TOP回应抄袭王源间奏](https://s.weibo.com/weibo?q=%23TOP%E5%9B%9E%E5%BA%94%E6%8A%84%E8%A2%AD%E7%8E%8B%E6%BA%90%E9%97%B4%E5%A5%8F%23) `242.8K 🔥` `NEW`
1. [葛晓倩说张雨绮跟影视圈无缘了](https://s.weibo.com/weibo?q=%23%E8%91%9B%E6%99%93%E5%80%A9%E8%AF%B4%E5%BC%A0%E9%9B%A8%E7%BB%AE%E8%B7%9F%E5%BD%B1%E8%A7%86%E5%9C%88%E6%97%A0%E7%BC%98%E4%BA%86%23) `242.1K 🔥` `NEW`
1. [栾念分手没仅退款](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E5%88%86%E6%89%8B%E6%B2%A1%E4%BB%85%E9%80%80%E6%AC%BE%23) `239.9K 🔥` `NEW`
1. [便利店事件男子和妻子第二天又到店里](https://s.weibo.com/weibo?q=%23%E4%BE%BF%E5%88%A9%E5%BA%97%E4%BA%8B%E4%BB%B6%E7%94%B7%E5%AD%90%E5%92%8C%E5%A6%BB%E5%AD%90%E7%AC%AC%E4%BA%8C%E5%A4%A9%E5%8F%88%E5%88%B0%E5%BA%97%E9%87%8C%23) `238.5K 🔥` `NEW`
1. [方桃子登COSMO封面引争议](https://s.weibo.com/weibo?q=%23%E6%96%B9%E6%A1%83%E5%AD%90%E7%99%BBCOSMO%E5%B0%81%E9%9D%A2%E5%BC%95%E4%BA%89%E8%AE%AE%23) `235.8K 🔥` `NEW`
1. [冉莹颖爸爸再婚三次为生儿子](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E7%88%B8%E7%88%B8%E5%86%8D%E5%A9%9A%E4%B8%89%E6%AC%A1%E4%B8%BA%E7%94%9F%E5%84%BF%E5%AD%90%23) `234.3K 🔥` `NEW`
1. [15岁少年因大面积文身无法入学](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E5%B0%91%E5%B9%B4%E5%9B%A0%E5%A4%A7%E9%9D%A2%E7%A7%AF%E6%96%87%E8%BA%AB%E6%97%A0%E6%B3%95%E5%85%A5%E5%AD%A6%23) `231.9K 🔥` `NEW`
1. [吴敬平回应樊振东输户上隼辅](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%95%AC%E5%B9%B3%E5%9B%9E%E5%BA%94%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%BE%93%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23) `231.7K 🔥` `NEW`
1. [无绳蹦极 跳楼](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%BB%B3%E8%B9%A6%E6%9E%81%20%E8%B7%B3%E6%A5%BC%23) `229.6K 🔥` `NEW`
1. [尼泊尔冰崩是因为全球变暖吗](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%86%B0%E5%B4%A9%E6%98%AF%E5%9B%A0%E4%B8%BA%E5%85%A8%E7%90%83%E5%8F%98%E6%9A%96%E5%90%97%23) `227.7K 🔥` `NEW`
1. [鬼鬼女儿都这么大了](https://s.weibo.com/weibo?q=%23%E9%AC%BC%E9%AC%BC%E5%A5%B3%E5%84%BF%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `226.5K 🔥` `NEW`
1. [王菲教窦靖童social](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%95%99%E7%AA%A6%E9%9D%96%E7%AB%A5social%23) `225.7K 🔥` `NEW`
1. [便利店事件女子责怪店主害她报警](https://s.weibo.com/weibo?q=%23%E4%BE%BF%E5%88%A9%E5%BA%97%E4%BA%8B%E4%BB%B6%E5%A5%B3%E5%AD%90%E8%B4%A3%E6%80%AA%E5%BA%97%E4%B8%BB%E5%AE%B3%E5%A5%B9%E6%8A%A5%E8%AD%A6%23) `224.4K 🔥` `NEW`
1. [国家动物博物馆强烈谴责](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8A%A8%E7%89%A9%E5%8D%9A%E7%89%A9%E9%A6%86%E5%BC%BA%E7%83%88%E8%B0%B4%E8%B4%A3%23) `221.2K 🔥` `NEW`
1. [刘翔 上海体育局](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%20%E4%B8%8A%E6%B5%B7%E4%BD%93%E8%82%B2%E5%B1%80%23) `215.2K 🔥` `NEW`
1. [印度15人家庭飞机上聚餐引热议](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A615%E4%BA%BA%E5%AE%B6%E5%BA%AD%E9%A3%9E%E6%9C%BA%E4%B8%8A%E8%81%9A%E9%A4%90%E5%BC%95%E7%83%AD%E8%AE%AE%23) `173.7K 🔥` `NEW`
1. [早春晴朗追剧日历](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E8%BF%BD%E5%89%A7%E6%97%A5%E5%8E%86%23) `161.1K 🔥` `NEW`
1. [医生回应女子卵巢长100斤肿瘤](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E5%8D%B5%E5%B7%A2%E9%95%BF100%E6%96%A4%E8%82%BF%E7%98%A4%23) `161.0K 🔥` `NEW`
1. [祖海高定](https://s.weibo.com/weibo?q=%23%E7%A5%96%E6%B5%B7%E9%AB%98%E5%AE%9A%23) `158.7K 🔥` `NEW`
1. [白鹿顶级高定首穿](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%A1%B6%E7%BA%A7%E9%AB%98%E5%AE%9A%E9%A6%96%E7%A9%BF%23) `156.6K 🔥` `NEW`
1. [韩警方又找到遇害中国女生部分遗体](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%AD%A6%E6%96%B9%E5%8F%88%E6%89%BE%E5%88%B0%E9%81%87%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E9%83%A8%E5%88%86%E9%81%97%E4%BD%93%23) `154.5K 🔥` `NEW`
1. [井柏然包上恩 京洛再无佳人](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%8C%85%E4%B8%8A%E6%81%A9%20%E4%BA%AC%E6%B4%9B%E5%86%8D%E6%97%A0%E4%BD%B3%E4%BA%BA%23) `152.3K 🔥` `NEW`
1. [员工加班一小时害上司被批](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E5%8A%A0%E7%8F%AD%E4%B8%80%E5%B0%8F%E6%97%B6%E5%AE%B3%E4%B8%8A%E5%8F%B8%E8%A2%AB%E6%89%B9%23) `141.6K 🔥` `NEW`
1. [京洛再无佳人女主](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E6%B4%9B%E5%86%8D%E6%97%A0%E4%BD%B3%E4%BA%BA%E5%A5%B3%E4%B8%BB%23) `141.3K 🔥` `NEW`
1. [有钱的家庭该如何富养孩子](https://s.weibo.com/weibo?q=%23%E6%9C%89%E9%92%B1%E7%9A%84%E5%AE%B6%E5%BA%AD%E8%AF%A5%E5%A6%82%E4%BD%95%E5%AF%8C%E5%85%BB%E5%AD%A9%E5%AD%90%23) `140.9K 🔥` `NEW`
1. [无绳蹦极](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%BB%B3%E8%B9%A6%E6%9E%81%23) `139.2K 🔥` `NEW`
1. [长期坚持的诀窍](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E5%9D%9A%E6%8C%81%E7%9A%84%E8%AF%80%E7%AA%8D%23) `135.9K 🔥` `NEW`
1. [电动自行车调速成灰产](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%8A%A8%E8%87%AA%E8%A1%8C%E8%BD%A6%E8%B0%83%E9%80%9F%E6%88%90%E7%81%B0%E4%BA%A7%23) `135.1K 🔥` `NEW`
1. [千里江山图 梁家辉辱追朱一龙](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%87%8C%E6%B1%9F%E5%B1%B1%E5%9B%BE%20%E6%A2%81%E5%AE%B6%E8%BE%89%E8%BE%B1%E8%BF%BD%E6%9C%B1%E4%B8%80%E9%BE%99%23) `134.9K 🔥` `NEW`
1. [iG进世界赛的难度增大了](https://s.weibo.com/weibo?q=%23iG%E8%BF%9B%E4%B8%96%E7%95%8C%E8%B5%9B%E7%9A%84%E9%9A%BE%E5%BA%A6%E5%A2%9E%E5%A4%A7%E4%BA%86%23) `134.5K 🔥` `NEW`
1. [虞书欣快闪店统筹被质疑](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BF%AB%E9%97%AA%E5%BA%97%E7%BB%9F%E7%AD%B9%E8%A2%AB%E8%B4%A8%E7%96%91%23) `134.3K 🔥` `NEW`
1. [比葱姜水打馅更好吃的饺子馅](https://s.weibo.com/weibo?q=%23%E6%AF%94%E8%91%B1%E5%A7%9C%E6%B0%B4%E6%89%93%E9%A6%85%E6%9B%B4%E5%A5%BD%E5%90%83%E7%9A%84%E9%A5%BA%E5%AD%90%E9%A6%85%23) `129.0K 🔥` `NEW`
1. [青春芒果夜节目单](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E8%8A%92%E6%9E%9C%E5%A4%9C%E8%8A%82%E7%9B%AE%E5%8D%95%23) `123.5K 🔥` `NEW`
1. [时代少年团舞台](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%88%9E%E5%8F%B0%23) `115.4K 🔥` `NEW`
1. [为救狗把女儿吊下高架桥夹缝](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E6%95%91%E7%8B%97%E6%8A%8A%E5%A5%B3%E5%84%BF%E5%90%8A%E4%B8%8B%E9%AB%98%E6%9E%B6%E6%A1%A5%E5%A4%B9%E7%BC%9D%23) `113.9K 🔥` `NEW`
1. [伊能静介绍了自己在台北的家](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E4%BB%8B%E7%BB%8D%E4%BA%86%E8%87%AA%E5%B7%B1%E5%9C%A8%E5%8F%B0%E5%8C%97%E7%9A%84%E5%AE%B6%23) `110.8K 🔥` `NEW`
1. [李国庆卖掉当当股份](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9B%BD%E5%BA%86%E5%8D%96%E6%8E%89%E5%BD%93%E5%BD%93%E8%82%A1%E4%BB%BD%23) `106.8K 🔥` `NEW`
1. [韩警方称或难找齐遇害女生全部遗体](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%AD%A6%E6%96%B9%E7%A7%B0%E6%88%96%E9%9A%BE%E6%89%BE%E9%BD%90%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E5%85%A8%E9%83%A8%E9%81%97%E4%BD%93%23) `105.7K 🔥` `NEW`
1. [西藏吉隆泥石流新闻发布会](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E6%96%B0%E9%97%BB%E5%8F%91%E5%B8%83%E4%BC%9A%23) `927.1K 🔥` `+485%`
1. [金价暴跌之前有人直接清仓](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%9A%B4%E8%B7%8C%E4%B9%8B%E5%89%8D%E6%9C%89%E4%BA%BA%E7%9B%B4%E6%8E%A5%E6%B8%85%E4%BB%93%23) `237.6K 🔥` `-39%`

Updated at 2026-08-30 15:08:30

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
