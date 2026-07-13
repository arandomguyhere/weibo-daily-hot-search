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

1. [施南生去世 (Shi Nansheng passed away)](https://s.weibo.com/weibo?q=%23%E6%96%BD%E5%8D%97%E7%94%9F%E5%8E%BB%E4%B8%96%23) `4.5M 🔥` `NEW`
1. [美人鱼2](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BA%BA%E9%B1%BC2%23) `1.3M 🔥` `NEW`
1. [未来五年这样提高国民健康水平](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A5%E4%BA%94%E5%B9%B4%E8%BF%99%E6%A0%B7%E6%8F%90%E9%AB%98%E5%9B%BD%E6%B0%91%E5%81%A5%E5%BA%B7%E6%B0%B4%E5%B9%B3%23) `990.0K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `969.3K 🔥` `NEW`
1. [中餐厅 张雅琪](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%20%E5%BC%A0%E9%9B%85%E7%90%AA%23) `780.8K 🔥` `NEW`
1. [发现妈妈变老是从东西无法共用开始](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%A6%88%E5%A6%88%E5%8F%98%E8%80%81%E6%98%AF%E4%BB%8E%E4%B8%9C%E8%A5%BF%E6%97%A0%E6%B3%95%E5%85%B1%E7%94%A8%E5%BC%80%E5%A7%8B%23) `736.2K 🔥` `NEW`
1. [南充辟谣有奖发票中奖者全是蒲家人](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%85%85%E8%BE%9F%E8%B0%A3%E6%9C%89%E5%A5%96%E5%8F%91%E7%A5%A8%E4%B8%AD%E5%A5%96%E8%80%85%E5%85%A8%E6%98%AF%E8%92%B2%E5%AE%B6%E4%BA%BA%23) `530.6K 🔥` `NEW`
1. [原来已读不回的人是这样想的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%B7%B2%E8%AF%BB%E4%B8%8D%E5%9B%9E%E7%9A%84%E4%BA%BA%E6%98%AF%E8%BF%99%E6%A0%B7%E6%83%B3%E7%9A%84%23) `499.9K 🔥` `NEW`
1. [姆巴佩或无缘打破世界杯单届13球纪录](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%88%96%E6%97%A0%E7%BC%98%E6%89%93%E7%A0%B4%E4%B8%96%E7%95%8C%E6%9D%AF%E5%8D%95%E5%B1%8A13%E7%90%83%E7%BA%AA%E5%BD%95%23) `357.3K 🔥` `NEW`
1. [超强厄尔尼诺真要来了](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E7%9C%9F%E8%A6%81%E6%9D%A5%E4%BA%86%23) `345.7K 🔥` `NEW`
1. [医院主任受贿2392万名下18套房获刑 (Hospital director jailed for taking bribes worth RMB 23.92 million to buy 18 apartments)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E4%B8%BB%E4%BB%BB%E5%8F%97%E8%B4%BF2392%E4%B8%87%E5%90%8D%E4%B8%8B18%E5%A5%97%E6%88%BF%E8%8E%B7%E5%88%91%23) `304.3K 🔥` `NEW`
1. [曝张雅琪五次法考没过](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E9%9B%85%E7%90%AA%E4%BA%94%E6%AC%A1%E6%B3%95%E8%80%83%E6%B2%A1%E8%BF%87%23) `301.0K 🔥` `NEW`
1. [特朗普称重新封锁伊朗](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E9%87%8D%E6%96%B0%E5%B0%81%E9%94%81%E4%BC%8A%E6%9C%97%23) `294.5K 🔥` `NEW`
1. [白鹿章若楠妆容](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%A6%86%E5%AE%B9%23) `289.7K 🔥` `NEW`
1. [18岁的金莎vs18岁的艾米](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E7%9A%84%E9%87%91%E8%8E%8Evs18%E5%B2%81%E7%9A%84%E8%89%BE%E7%B1%B3%23) `282.9K 🔥` `NEW`
1. [黄瓜这种情况比砒霜还毒](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%93%9C%E8%BF%99%E7%A7%8D%E6%83%85%E5%86%B5%E6%AF%94%E7%A0%92%E9%9C%9C%E8%BF%98%E6%AF%92%23) `279.4K 🔥` `NEW`
1. [内娱硬捧公式失效](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%A1%AC%E6%8D%A7%E5%85%AC%E5%BC%8F%E5%A4%B1%E6%95%88%23) `276.7K 🔥` `NEW`
1. [A股今日大跌原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BB%8A%E6%97%A5%E5%A4%A7%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `265.4K 🔥` `NEW`
1. [迪丽热巴穿钰珑队服走机场](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%A9%BF%E9%92%B0%E7%8F%91%E9%98%9F%E6%9C%8D%E8%B5%B0%E6%9C%BA%E5%9C%BA%23) `256.6K 🔥` `NEW`
1. [仅一家车企达成年度销量50%目标](https://s.weibo.com/weibo?q=%23%E4%BB%85%E4%B8%80%E5%AE%B6%E8%BD%A6%E4%BC%81%E8%BE%BE%E6%88%90%E5%B9%B4%E5%BA%A6%E9%94%80%E9%87%8F50%25%E7%9B%AE%E6%A0%87%23) `248.0K 🔥` `NEW`
1. [世界杯 (world cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `242.1K 🔥` `NEW`
1. [民警丈夫杀害闪婚妻子后被判死缓](https://s.weibo.com/weibo?q=%23%E6%B0%91%E8%AD%A6%E4%B8%88%E5%A4%AB%E6%9D%80%E5%AE%B3%E9%97%AA%E5%A9%9A%E5%A6%BB%E5%AD%90%E5%90%8E%E8%A2%AB%E5%88%A4%E6%AD%BB%E7%BC%93%23) `242.1K 🔥` `NEW`
1. [郭敬明让艾米记得减肥](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E8%AE%A9%E8%89%BE%E7%B1%B3%E8%AE%B0%E5%BE%97%E5%87%8F%E8%82%A5%23) `241.8K 🔥` `NEW`
1. [桂林女子睡觉时被虫咬断一大把头发](https://s.weibo.com/weibo?q=%23%E6%A1%82%E6%9E%97%E5%A5%B3%E5%AD%90%E7%9D%A1%E8%A7%89%E6%97%B6%E8%A2%AB%E8%99%AB%E5%92%AC%E6%96%AD%E4%B8%80%E5%A4%A7%E6%8A%8A%E5%A4%B4%E5%8F%91%23) `241.4K 🔥` `NEW`
1. [宋慧乔 越素越美](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%85%A7%E4%B9%94%20%E8%B6%8A%E7%B4%A0%E8%B6%8A%E7%BE%8E%23) `241.1K 🔥` `NEW`
1. [孔刘晒和金高银合照](https://s.weibo.com/weibo?q=%23%E5%AD%94%E5%88%98%E6%99%92%E5%92%8C%E9%87%91%E9%AB%98%E9%93%B6%E5%90%88%E7%85%A7%23) `241.0K 🔥` `NEW`
1. [为什么工作痛苦但不离职](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B7%A5%E4%BD%9C%E7%97%9B%E8%8B%A6%E4%BD%86%E4%B8%8D%E7%A6%BB%E8%81%8C%23) `237.6K 🔥` `NEW`
1. [这一秒过火](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `236.9K 🔥` `NEW`
1. [小鱼海棠撞脸小英](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B1%BC%E6%B5%B7%E6%A3%A0%E6%92%9E%E8%84%B8%E5%B0%8F%E8%8B%B1%23) `226.6K 🔥` `NEW`
1. [中国自研AI芯片取得架构突破](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%87%AA%E7%A0%94AI%E8%8A%AF%E7%89%87%E5%8F%96%E5%BE%97%E6%9E%B6%E6%9E%84%E7%AA%81%E7%A0%B4%23) `216.2K 🔥` `NEW`
1. [迪丽热巴到杭州了 (Dilireba arrives in Hangzhou)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%88%B0%E6%9D%AD%E5%B7%9E%E4%BA%86%23) `213.5K 🔥` `NEW`
1. [沈阳再次通告全市](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E5%86%8D%E6%AC%A1%E9%80%9A%E5%91%8A%E5%85%A8%E5%B8%82%23) `212.7K 🔥` `NEW`
1. [以为长胖但能减肥的饮食习惯](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E9%95%BF%E8%83%96%E4%BD%86%E8%83%BD%E5%87%8F%E8%82%A5%E7%9A%84%E9%A5%AE%E9%A3%9F%E4%B9%A0%E6%83%AF%23) `193.4K 🔥` `NEW`
1. [突然明白了独居的意义](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%98%8E%E7%99%BD%E4%BA%86%E7%8B%AC%E5%B1%85%E7%9A%84%E6%84%8F%E4%B9%89%23) `190.4K 🔥` `NEW`
1. [沈阳现破纪录大暴雨](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E7%8E%B0%E7%A0%B4%E7%BA%AA%E5%BD%95%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `185.9K 🔥` `NEW`
1. [港姐12强泳装照](https://s.weibo.com/weibo?q=%23%E6%B8%AF%E5%A7%9012%E5%BC%BA%E6%B3%B3%E8%A3%85%E7%85%A7%23) `181.1K 🔥` `NEW`
1. [厄尔尼诺事件将影响我国](https://s.weibo.com/weibo?q=%23%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E4%BA%8B%E4%BB%B6%E5%B0%86%E5%BD%B1%E5%93%8D%E6%88%91%E5%9B%BD%23) `178.7K 🔥` `NEW`
1. [郑钦文vs马内罗](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E9%A9%AC%E5%86%85%E7%BD%97%23) `175.2K 🔥` `NEW`
1. [情侣接吻打翻火锅烫伤女孩最新进展](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E6%8E%A5%E5%90%BB%E6%89%93%E7%BF%BB%E7%81%AB%E9%94%85%E7%83%AB%E4%BC%A4%E5%A5%B3%E5%AD%A9%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `171.7K 🔥` `NEW`
1. [棉被大量仅退款买家被行拘10日](https://s.weibo.com/weibo?q=%23%E6%A3%89%E8%A2%AB%E5%A4%A7%E9%87%8F%E4%BB%85%E9%80%80%E6%AC%BE%E4%B9%B0%E5%AE%B6%E8%A2%AB%E8%A1%8C%E6%8B%9810%E6%97%A5%23) `170.9K 🔥` `NEW`
1. [内娱男星古装降级有多严重 (How serious is the downgrading of domestic entertainment male stars’ costumes?)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%94%B7%E6%98%9F%E5%8F%A4%E8%A3%85%E9%99%8D%E7%BA%A7%E6%9C%89%E5%A4%9A%E4%B8%A5%E9%87%8D%23) `167.4K 🔥` `NEW`
1. [原来路边收X光片是这来做这个的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%B7%AF%E8%BE%B9%E6%94%B6X%E5%85%89%E7%89%87%E6%98%AF%E8%BF%99%E6%9D%A5%E5%81%9A%E8%BF%99%E4%B8%AA%E7%9A%84%23) `152.5K 🔥` `NEW`
1. [苏新皓换手机壁纸了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E6%8D%A2%E6%89%8B%E6%9C%BA%E5%A3%81%E7%BA%B8%E4%BA%86%23) `152.3K 🔥` `NEW`
1. [中国版哈兰德](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%89%88%E5%93%88%E5%85%B0%E5%BE%B7%23) `152.0K 🔥` `NEW`
1. [长期大量阅读的好处](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E5%A4%A7%E9%87%8F%E9%98%85%E8%AF%BB%E7%9A%84%E5%A5%BD%E5%A4%84%23) `150.3K 🔥` `NEW`
1. [施南生作品](https://s.weibo.com/weibo?q=%23%E6%96%BD%E5%8D%97%E7%94%9F%E4%BD%9C%E5%93%81%23) `146.6K 🔥` `NEW`
1. [papi酱团队稳定性](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E5%9B%A2%E9%98%9F%E7%A8%B3%E5%AE%9A%E6%80%A7%23) `146.0K 🔥` `NEW`
1. [AI视频进步有多大](https://s.weibo.com/weibo?q=%23AI%E8%A7%86%E9%A2%91%E8%BF%9B%E6%AD%A5%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `144.9K 🔥` `NEW`
1. [宋威龙张婧仪喊cut后不出戏](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%96%8Acut%E5%90%8E%E4%B8%8D%E5%87%BA%E6%88%8F%23) `144.5K 🔥` `NEW`
1. [蔡依林南昌演唱会](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%8D%97%E6%98%8C%E6%BC%94%E5%94%B1%E4%BC%9A%23) `143.5K 🔥` `NEW`

Updated at 2026-07-14 00:06:27

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
