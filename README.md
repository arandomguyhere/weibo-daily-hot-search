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

1. [C罗状态 (Ronaldo status)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%8A%B6%E6%80%81%23) `1.1M 🔥` `NEW`
1. [英格兰vs克罗地亚](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0vs%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%23) `772.8K 🔥` `NEW`
1. [C罗全场0射正](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%85%A8%E5%9C%BA0%E5%B0%84%E6%AD%A3%23) `430.7K 🔥` `NEW`
1. [C罗 刚果保镖](https://s.weibo.com/weibo?q=%23C%E7%BD%97%20%E5%88%9A%E6%9E%9C%E4%BF%9D%E9%95%96%23) `363.8K 🔥` `NEW`
1. [葡萄牙1比1民主刚果](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%991%E6%AF%941%E6%B0%91%E4%B8%BB%E5%88%9A%E6%9E%9C%23) `266.5K 🔥` `NEW`
1. [海清正大食品品牌代言人](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B8%85%E6%AD%A3%E5%A4%A7%E9%A3%9F%E5%93%81%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `265.2K 🔥` `NEW`
1. [莫德里奇送点](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%BE%B7%E9%87%8C%E5%A5%87%E9%80%81%E7%82%B9%23) `185.6K 🔥` `NEW`
1. [英格兰克罗地亚 好看](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%20%E5%A5%BD%E7%9C%8B%23) `170.9K 🔥` `NEW`
1. [诸神黄昏只有C罗听进去了](https://s.weibo.com/weibo?q=%23%E8%AF%B8%E7%A5%9E%E9%BB%84%E6%98%8F%E5%8F%AA%E6%9C%89C%E7%BD%97%E5%90%AC%E8%BF%9B%E5%8E%BB%E4%BA%86%23) `162.1K 🔥` `NEW`
1. [葡萄牙 西班牙](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%20%E8%A5%BF%E7%8F%AD%E7%89%99%23) `102.8K 🔥` `NEW`
1. [英格兰进球 (England goal)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E8%BF%9B%E7%90%83%23) `98.1K 🔥` `NEW`
1. [葡萄牙 哄睡](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%20%E5%93%84%E7%9D%A1%23) `90.8K 🔥` `NEW`
1. [郑钦文vs吉布森](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E5%90%89%E5%B8%83%E6%A3%AE%23) `80.9K 🔥` `NEW`
1. [克罗地亚再扳平](https://s.weibo.com/weibo?q=%23%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%E5%86%8D%E6%89%B3%E5%B9%B3%23) `73.7K 🔥` `NEW`
1. [凯恩梅开二度](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `70.9K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `68.6K 🔥` `NEW`
1. [佩佩来了](https://s.weibo.com/weibo?q=%23%E4%BD%A9%E4%BD%A9%E6%9D%A5%E4%BA%86%23) `58.4K 🔥` `NEW`
1. [梅西对阿尔及利亚全场数据](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E5%AF%B9%E9%98%BF%E5%B0%94%E5%8F%8A%E5%88%A9%E4%BA%9A%E5%85%A8%E5%9C%BA%E6%95%B0%E6%8D%AE%23) `51.9K 🔥` `NEW`
1. [英格兰半场2比2克罗地亚](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E5%8D%8A%E5%9C%BA2%E6%AF%942%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%23) `50.7K 🔥` `NEW`
1. [民主刚果扳平](https://s.weibo.com/weibo?q=%23%E6%B0%91%E4%B8%BB%E5%88%9A%E6%9E%9C%E6%89%B3%E5%B9%B3%23) `48.9K 🔥` `NEW`
1. [葡萄牙进球 (Portugal goals)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E8%BF%9B%E7%90%83%23) `48.2K 🔥` `NEW`
1. [看C罗](https://s.weibo.com/weibo?q=%23%E7%9C%8BC%E7%BD%97%23) `44.3K 🔥` `NEW`
1. [李娟这段访谈值得看三遍](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%A8%9F%E8%BF%99%E6%AE%B5%E8%AE%BF%E8%B0%88%E5%80%BC%E5%BE%97%E7%9C%8B%E4%B8%89%E9%81%8D%23) `38.3K 🔥` `NEW`
1. [同时养了小金毛和小伯恩山](https://s.weibo.com/weibo?q=%23%E5%90%8C%E6%97%B6%E5%85%BB%E4%BA%86%E5%B0%8F%E9%87%91%E6%AF%9B%E5%92%8C%E5%B0%8F%E4%BC%AF%E6%81%A9%E5%B1%B1%23) `38.3K 🔥` `NEW`
1. [C罗怎么踢](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%80%8E%E4%B9%88%E8%B8%A2%23) `38.3K 🔥` `NEW`
1. [C罗世界杯个人数据](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AA%E4%BA%BA%E6%95%B0%E6%8D%AE%23) `38.2K 🔥` `NEW`
1. [猫妈妈召唤小猫的瞬间](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%A6%88%E5%A6%88%E5%8F%AC%E5%94%A4%E5%B0%8F%E7%8C%AB%E7%9A%84%E7%9E%AC%E9%97%B4%23) `38.2K 🔥` `NEW`
1. [进球献给若塔](https://s.weibo.com/weibo?q=%23%E8%BF%9B%E7%90%83%E7%8C%AE%E7%BB%99%E8%8B%A5%E5%A1%94%23) `38.2K 🔥` `NEW`
1. [猫妈妈接纳孤儿小猫](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%A6%88%E5%A6%88%E6%8E%A5%E7%BA%B3%E5%AD%A4%E5%84%BF%E5%B0%8F%E7%8C%AB%23) `38.2K 🔥` `NEW`
1. [在等一个流行鼻基底凹陷的时代](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E7%AD%89%E4%B8%80%E4%B8%AA%E6%B5%81%E8%A1%8C%E9%BC%BB%E5%9F%BA%E5%BA%95%E5%87%B9%E9%99%B7%E7%9A%84%E6%97%B6%E4%BB%A3%23) `38.2K 🔥` `NEW`
1. [美伊协议全文曝光 (Full text of US-Iran agreement exposed)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%8D%8F%E8%AE%AE%E5%85%A8%E6%96%87%E6%9B%9D%E5%85%89%23) `38.2K 🔥` `NEW`
1. [开局之年看中国奋进陕西谱新篇](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%80%E4%B9%8B%E5%B9%B4%E7%9C%8B%E4%B8%AD%E5%9B%BD%E5%A5%8B%E8%BF%9B%E9%99%95%E8%A5%BF%E8%B0%B1%E6%96%B0%E7%AF%87%23) `557.8K 🔥` `+32%`
1. [葡萄牙vs民主刚果](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99vs%E6%B0%91%E4%B8%BB%E5%88%9A%E6%9E%9C%23) `225.1K 🔥`
1. [美联储](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%23) `207.9K 🔥` `-48%`
1. [宝妈带1岁娃饭店避雨遭拼命驱赶](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E5%B8%A61%E5%B2%81%E5%A8%83%E9%A5%AD%E5%BA%97%E9%81%BF%E9%9B%A8%E9%81%AD%E6%8B%BC%E5%91%BD%E9%A9%B1%E8%B5%B6%23) `50.5K 🔥` `-74%`
1. [特朗普G7峰会迟到后宣告我是老大](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AEG7%E5%B3%B0%E4%BC%9A%E8%BF%9F%E5%88%B0%E5%90%8E%E5%AE%A3%E5%91%8A%E6%88%91%E6%98%AF%E8%80%81%E5%A4%A7%23) `39.0K 🔥` `-69%`
1. [男子与15岁女孩发生冲突被行拘5日](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8E15%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%8F%91%E7%94%9F%E5%86%B2%E7%AA%81%E8%A2%AB%E8%A1%8C%E6%8B%985%E6%97%A5%23) `38.7K 🔥` `-87%`
1. [妻子回应强留脑死亡丈夫被质疑](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%E5%BC%BA%E7%95%99%E8%84%91%E6%AD%BB%E4%BA%A1%E4%B8%88%E5%A4%AB%E8%A2%AB%E8%B4%A8%E7%96%91%23) `38.4K 🔥` `-69%`
1. [已婚男女打工相识同居15年获刑](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E5%A9%9A%E7%94%B7%E5%A5%B3%E6%89%93%E5%B7%A5%E7%9B%B8%E8%AF%86%E5%90%8C%E5%B1%8515%E5%B9%B4%E8%8E%B7%E5%88%91%23) `38.3K 🔥` `-68%`
1. [中国缅甸联合声明](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BC%85%E7%94%B8%E8%81%94%E5%90%88%E5%A3%B0%E6%98%8E%23) `38.3K 🔥` `-50%`
1. [天天来吃面的顾客1天没来店主报警 (The customer who comes to eat noodles every day didn’t come for one day and called the store owner.)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%A4%A9%E6%9D%A5%E5%90%83%E9%9D%A2%E7%9A%84%E9%A1%BE%E5%AE%A21%E5%A4%A9%E6%B2%A1%E6%9D%A5%E5%BA%97%E4%B8%BB%E6%8A%A5%E8%AD%A6%23) `38.3K 🔥` `-63%`
1. [王安宇李昀锐笑妃给哭妃包场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E6%9D%8E%E6%98%80%E9%94%90%E7%AC%91%E5%A6%83%E7%BB%99%E5%93%AD%E5%A6%83%E5%8C%85%E5%9C%BA%23) `38.3K 🔥` `-84%`
1. [富豪伪造8亿存款中标35亿元工程](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E8%B1%AA%E4%BC%AA%E9%80%A08%E4%BA%BF%E5%AD%98%E6%AC%BE%E4%B8%AD%E6%A0%8735%E4%BA%BF%E5%85%83%E5%B7%A5%E7%A8%8B%23) `38.3K 🔥` `-54%`
1. [南部档案](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%23) `38.3K 🔥` `-52%`
1. [去大医院看病总有种无力感](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%A4%A7%E5%8C%BB%E9%99%A2%E7%9C%8B%E7%97%85%E6%80%BB%E6%9C%89%E7%A7%8D%E6%97%A0%E5%8A%9B%E6%84%9F%23) `38.2K 🔥` `-80%`
1. [马宁世界杯工资](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B7%A5%E8%B5%84%23) `38.2K 🔥` `-94%`
1. [胡歌 我不配](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%20%E6%88%91%E4%B8%8D%E9%85%8D%23) `38.2K 🔥` `-81%`
1. [C罗的身材绝对不是P的](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%9A%84%E8%BA%AB%E6%9D%90%E7%BB%9D%E5%AF%B9%E4%B8%8D%E6%98%AFP%E7%9A%84%23) `38.2K 🔥` `-91%`
1. [马宁主哨世界杯](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E4%B8%BB%E5%93%A8%E4%B8%96%E7%95%8C%E6%9D%AF%23) `38.2K 🔥` `-82%`
1. [外卖餐食中有血迹顾客紧急服阻断药](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E9%A4%90%E9%A3%9F%E4%B8%AD%E6%9C%89%E8%A1%80%E8%BF%B9%E9%A1%BE%E5%AE%A2%E7%B4%A7%E6%80%A5%E6%9C%8D%E9%98%BB%E6%96%AD%E8%8D%AF%23) `38.2K 🔥` `-81%`
1. [豆包每天收入不足百万 (Doubao’s daily income is less than one million)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%AF%8F%E5%A4%A9%E6%94%B6%E5%85%A5%E4%B8%8D%E8%B6%B3%E7%99%BE%E4%B8%87%23) `38.2K 🔥` `-95%`

Updated at 2026-06-18 05:24:23

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
