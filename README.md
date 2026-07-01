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

1. [凯恩梅开二度 (Kane scores twice)](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `486.3K 🔥` `NEW`
1. [英格兰 不是点球](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%20%E4%B8%8D%E6%98%AF%E7%82%B9%E7%90%83%23) `359.8K 🔥` `NEW`
1. [8位七一勋章获得者](https://s.weibo.com/weibo?q=%238%E4%BD%8D%E4%B8%83%E4%B8%80%E5%8B%8B%E7%AB%A0%E8%8E%B7%E5%BE%97%E8%80%85%23) `345.3K 🔥` `NEW`
1. [胃癌晚期特效药99万一针多活2.43个月](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E7%89%B9%E6%95%88%E8%8D%AF99%E4%B8%87%E4%B8%80%E9%92%88%E5%A4%9A%E6%B4%BB2.43%E4%B8%AA%E6%9C%88%23) `345.2K 🔥` `NEW`
1. [英格兰2比1民主刚果](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B02%E6%AF%941%E6%B0%91%E4%B8%BB%E5%88%9A%E6%9E%9C%23) `344.8K 🔥` `NEW`
1. [陈晓被打耳光路透](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%99%93%E8%A2%AB%E6%89%93%E8%80%B3%E5%85%89%E8%B7%AF%E9%80%8F%23) `336.9K 🔥` `NEW`
1. [英格兰被漏判点球](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E8%A2%AB%E6%BC%8F%E5%88%A4%E7%82%B9%E7%90%83%23) `305.2K 🔥` `NEW`
1. [赖斯燃尽了](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%96%AF%E7%87%83%E5%B0%BD%E4%BA%86%23) `218.9K 🔥` `NEW`
1. [英格兰](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `158.1K 🔥` `NEW`
1. [拉什福德在干什么](https://s.weibo.com/weibo?q=%23%E6%8B%89%E4%BB%80%E7%A6%8F%E5%BE%B7%E5%9C%A8%E5%B9%B2%E4%BB%80%E4%B9%88%23) `148.8K 🔥` `NEW`
1. [伪强队 (Pseudo strong team)](https://s.weibo.com/weibo?q=%23%E4%BC%AA%E5%BC%BA%E9%98%9F%23) `148.6K 🔥` `NEW`
1. [图赫尔 给凯恩磕一个](https://s.weibo.com/weibo?q=%23%E5%9B%BE%E8%B5%AB%E5%B0%94%20%E7%BB%99%E5%87%AF%E6%81%A9%E7%A3%95%E4%B8%80%E4%B8%AA%23) `148.0K 🔥` `NEW`
1. [儿子嫌饭难吃扬言杀全家被父砍伤](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%AB%8C%E9%A5%AD%E9%9A%BE%E5%90%83%E6%89%AC%E8%A8%80%E6%9D%80%E5%85%A8%E5%AE%B6%E8%A2%AB%E7%88%B6%E7%A0%8D%E4%BC%A4%23) `143.6K 🔥` `NEW`
1. [英格兰vs民主刚果](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0vs%E6%B0%91%E4%B8%BB%E5%88%9A%E6%9E%9C%23) `132.6K 🔥` `NEW`
1. [凯恩头球扳平](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E5%A4%B4%E7%90%83%E6%89%B3%E5%B9%B3%23) `117.0K 🔥` `NEW`
1. [刚果金门将超神](https://s.weibo.com/weibo?q=%23%E5%88%9A%E6%9E%9C%E9%87%91%E9%97%A8%E5%B0%86%E8%B6%85%E7%A5%9E%23) `115.7K 🔥` `NEW`
1. [人工智能冲击婚纱影楼](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%86%B2%E5%87%BB%E5%A9%9A%E7%BA%B1%E5%BD%B1%E6%A5%BC%23) `112.7K 🔥` `NEW`
1. [湖人交易得到凯斯勒](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E4%BA%A4%E6%98%93%E5%BE%97%E5%88%B0%E5%87%AF%E6%96%AF%E5%8B%92%23) `110.1K 🔥` `NEW`
1. [丁禹兮 姜珮瑶](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%20%E5%A7%9C%E7%8F%AE%E7%91%B6%23) `106.3K 🔥` `NEW`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `102.7K 🔥` `NEW`
1. [刚果金进球 (Congolese goal)](https://s.weibo.com/weibo?q=%23%E5%88%9A%E6%9E%9C%E9%87%91%E8%BF%9B%E7%90%83%23) `91.4K 🔥` `NEW`
1. [曾志伟婉拒了成毅粉丝](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E5%BF%97%E4%BC%9F%E5%A9%89%E6%8B%92%E4%BA%86%E6%88%90%E6%AF%85%E7%B2%89%E4%B8%9D%23) `90.4K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `81.6K 🔥` `NEW`
1. [真实的乡镇公务员是这样的](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E5%AE%9E%E7%9A%84%E4%B9%A1%E9%95%87%E5%85%AC%E5%8A%A1%E5%91%98%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `81.6K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `81.4K 🔥` `NEW`
1. [小狗理发被剪成芒果核](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E7%90%86%E5%8F%91%E8%A2%AB%E5%89%AA%E6%88%90%E8%8A%92%E6%9E%9C%E6%A0%B8%23) `81.3K 🔥` `NEW`
1. [王濛解说阿根廷对战佛得角](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E8%A7%A3%E8%AF%B4%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%AF%B9%E6%88%98%E4%BD%9B%E5%BE%97%E8%A7%92%23) `81.2K 🔥` `NEW`
1. [野狗骨头](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `81.1K 🔥` `NEW`
1. [韩国自杀女消防员平均每月1.6次酒局](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%87%AA%E6%9D%80%E5%A5%B3%E6%B6%88%E9%98%B2%E5%91%98%E5%B9%B3%E5%9D%87%E6%AF%8F%E6%9C%881.6%E6%AC%A1%E9%85%92%E5%B1%80%23) `81.0K 🔥` `NEW`
1. [今年我国首个台风来了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E6%88%91%E5%9B%BD%E9%A6%96%E4%B8%AA%E5%8F%B0%E9%A3%8E%E6%9D%A5%E4%BA%86%23) `80.9K 🔥` `NEW`
1. [恋与深空价值观偏差是病灶 (Love and deep space value deviation are the focus)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E4%BB%B7%E5%80%BC%E8%A7%82%E5%81%8F%E5%B7%AE%E6%98%AF%E7%97%85%E7%81%B6%23) `80.8K 🔥` `NEW`
1. [恋与深空问题从来不在敖尹角色本身](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E9%97%AE%E9%A2%98%E4%BB%8E%E6%9D%A5%E4%B8%8D%E5%9C%A8%E6%95%96%E5%B0%B9%E8%A7%92%E8%89%B2%E6%9C%AC%E8%BA%AB%23) `80.6K 🔥` `NEW`
1. [什么是文科能力](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%98%AF%E6%96%87%E7%A7%91%E8%83%BD%E5%8A%9B%23) `80.5K 🔥` `NEW`
1. [世界杯最新对阵图](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%80%E6%96%B0%E5%AF%B9%E9%98%B5%E5%9B%BE%23) `80.4K 🔥` `NEW`
1. [你们都显老到什么程度了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E9%83%BD%E6%98%BE%E8%80%81%E5%88%B0%E4%BB%80%E4%B9%88%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `80.3K 🔥` `NEW`
1. [虞书欣给剧本包书皮](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%BB%99%E5%89%A7%E6%9C%AC%E5%8C%85%E4%B9%A6%E7%9A%AE%23) `80.2K 🔥` `NEW`
1. [机器人伴侣你会买吗](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BC%B4%E4%BE%A3%E4%BD%A0%E4%BC%9A%E4%B9%B0%E5%90%97%23) `80.1K 🔥` `NEW`
1. [绿源电动车 擦边](https://s.weibo.com/weibo?q=%23%E7%BB%BF%E6%BA%90%E7%94%B5%E5%8A%A8%E8%BD%A6%20%E6%93%A6%E8%BE%B9%23) `80.0K 🔥` `NEW`
1. [冯建宇说姆巴佩超级巨星效应](https://s.weibo.com/weibo?q=%23%E5%86%AF%E5%BB%BA%E5%AE%87%E8%AF%B4%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%B6%85%E7%BA%A7%E5%B7%A8%E6%98%9F%E6%95%88%E5%BA%94%23) `79.9K 🔥` `NEW`
1. [德国足球也反腐扫黑了](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E8%B6%B3%E7%90%83%E4%B9%9F%E5%8F%8D%E8%85%90%E6%89%AB%E9%BB%91%E4%BA%86%23) `79.8K 🔥` `NEW`
1. [我好不好惹与你无关 (It has nothing to do with you whether I mess with you or not)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A5%BD%E4%B8%8D%E5%A5%BD%E6%83%B9%E4%B8%8E%E4%BD%A0%E6%97%A0%E5%85%B3%23) `79.7K 🔥` `NEW`
1. [丽江一狗咖数十只哈士奇遭遗弃](https://s.weibo.com/weibo?q=%23%E4%B8%BD%E6%B1%9F%E4%B8%80%E7%8B%97%E5%92%96%E6%95%B0%E5%8D%81%E5%8F%AA%E5%93%88%E5%A3%AB%E5%A5%87%E9%81%AD%E9%81%97%E5%BC%83%23) `79.5K 🔥` `NEW`
1. [小公司硕士不招](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%85%AC%E5%8F%B8%E7%A1%95%E5%A3%AB%E4%B8%8D%E6%8B%9B%23) `79.5K 🔥` `NEW`
1. [哈兰德每天摄入6000卡热量](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%AF%8F%E5%A4%A9%E6%91%84%E5%85%A56000%E5%8D%A1%E7%83%AD%E9%87%8F%23) `79.4K 🔥` `NEW`
1. [日本防相竟放话要中国给理由](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%98%B2%E7%9B%B8%E7%AB%9F%E6%94%BE%E8%AF%9D%E8%A6%81%E4%B8%AD%E5%9B%BD%E7%BB%99%E7%90%86%E7%94%B1%23) `79.2K 🔥` `NEW`
1. [A股将取消5%涨跌停板](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B0%86%E5%8F%96%E6%B6%885%25%E6%B6%A8%E8%B7%8C%E5%81%9C%E6%9D%BF%23) `79.2K 🔥` `NEW`
1. [恋与深空全平台7天掉粉123万](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%85%A8%E5%B9%B3%E5%8F%B07%E5%A4%A9%E6%8E%89%E7%B2%89123%E4%B8%87%23) `79.0K 🔥` `NEW`
1. [AI漫剧 降维打击](https://s.weibo.com/weibo?q=%23AI%E6%BC%AB%E5%89%A7%20%E9%99%8D%E7%BB%B4%E6%89%93%E5%87%BB%23) `78.9K 🔥` `NEW`
1. [詹姆斯抢手](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E6%8A%A2%E6%89%8B%23) `78.8K 🔥` `NEW`
1. [WB对战LGDNBW](https://s.weibo.com/weibo?q=%23WB%E5%AF%B9%E6%88%98LGDNBW%23) `78.7K 🔥` `NEW`

Updated at 2026-07-02 03:01:05

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
