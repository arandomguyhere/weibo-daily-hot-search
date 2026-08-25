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

1. [在韩失联女生已遇害 (Missing girl in South Korea has been killed)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E5%B7%B2%E9%81%87%E5%AE%B3%23) `2.9M 🔥` `NEW`
1. [读懂下半年中国经济发力方向](https://s.weibo.com/weibo?q=%23%E8%AF%BB%E6%87%82%E4%B8%8B%E5%8D%8A%E5%B9%B4%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%8F%91%E5%8A%9B%E6%96%B9%E5%90%91%23) `872.1K 🔥` `NEW`
1. [联想AI平板拯救者Y700无极](https://s.weibo.com/weibo?q=%23%E8%81%94%E6%83%B3AI%E5%B9%B3%E6%9D%BF%E6%8B%AF%E6%95%91%E8%80%85Y700%E6%97%A0%E6%9E%81%23) `582.0K 🔥` `NEW`
1. [惠英红撞车戏 朱莉跳楼戏](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E6%92%9E%E8%BD%A6%E6%88%8F%20%E6%9C%B1%E8%8E%89%E8%B7%B3%E6%A5%BC%E6%88%8F%23) `449.2K 🔥` `NEW`
1. [原来只有我上班在乱穿](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%8F%AA%E6%9C%89%E6%88%91%E4%B8%8A%E7%8F%AD%E5%9C%A8%E4%B9%B1%E7%A9%BF%23) `425.4K 🔥` `NEW`
1. [刘亦菲茜茜公主大片](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E8%8C%9C%E8%8C%9C%E5%85%AC%E4%B8%BB%E5%A4%A7%E7%89%87%23) `371.8K 🔥` `NEW`
1. [杭州警方通报女子称在电梯遭骚扰](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%9C%A8%E7%94%B5%E6%A2%AF%E9%81%AD%E9%AA%9A%E6%89%B0%23) `353.8K 🔥` `NEW`
1. [奔驰宝马发短片讽刺速成车](https://s.weibo.com/weibo?q=%23%E5%A5%94%E9%A9%B0%E5%AE%9D%E9%A9%AC%E5%8F%91%E7%9F%AD%E7%89%87%E8%AE%BD%E5%88%BA%E9%80%9F%E6%88%90%E8%BD%A6%23) `293.2K 🔥` `NEW`
1. [国乒WTT中国大满贯名单](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92WTT%E4%B8%AD%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%90%8D%E5%8D%95%23) `276.2K 🔥` `NEW`
1. [张泽禹连震高音](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%BD%E7%A6%B9%E8%BF%9E%E9%9C%87%E9%AB%98%E9%9F%B3%23) `275.7K 🔥` `NEW`
1. [朱志鑫ending倒在花瓣里 (Zhu Zhixin ending fell into the petals)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%ABending%E5%80%92%E5%9C%A8%E8%8A%B1%E7%93%A3%E9%87%8C%23) `274.9K 🔥` `NEW`
1. [总领馆为在韩失联女生提供领事帮助](https://s.weibo.com/weibo?q=%23%E6%80%BB%E9%A2%86%E9%A6%86%E4%B8%BA%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E6%8F%90%E4%BE%9B%E9%A2%86%E4%BA%8B%E5%B8%AE%E5%8A%A9%23) `270.8K 🔥` `NEW`
1. [苏新皓solo编舞](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93solo%E7%BC%96%E8%88%9E%23) `227.0K 🔥` `NEW`
1. [国乒中国大满贯参赛名单](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E4%B8%AD%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%8F%82%E8%B5%9B%E5%90%8D%E5%8D%95%23) `222.8K 🔥` `NEW`
1. [张伟打开还珠格格爱上李晟](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BC%9F%E6%89%93%E5%BC%80%E8%BF%98%E7%8F%A0%E6%A0%BC%E6%A0%BC%E7%88%B1%E4%B8%8A%E6%9D%8E%E6%99%9F%23) `212.6K 🔥` `NEW`
1. [原来这种身材是天选种地人](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E7%A7%8D%E8%BA%AB%E6%9D%90%E6%98%AF%E5%A4%A9%E9%80%89%E7%A7%8D%E5%9C%B0%E4%BA%BA%23) `186.8K 🔥` `NEW`
1. [内娱十年前真的很流行谈恋爱和结婚](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9C%9F%E7%9A%84%E5%BE%88%E6%B5%81%E8%A1%8C%E8%B0%88%E6%81%8B%E7%88%B1%E5%92%8C%E7%BB%93%E5%A9%9A%23) `156.8K 🔥` `NEW`
1. [在韩失联女生姐姐发声](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E5%A7%90%E5%A7%90%E5%8F%91%E5%A3%B0%23) `141.9K 🔥` `NEW`
1. [生万物回应金鹰奖4项提名](https://s.weibo.com/weibo?q=%23%E7%94%9F%E4%B8%87%E7%89%A9%E5%9B%9E%E5%BA%94%E9%87%91%E9%B9%B0%E5%A5%964%E9%A1%B9%E6%8F%90%E5%90%8D%23) `141.5K 🔥` `NEW`
1. [25岁中国女生在韩失联5天家属发声](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%945%E5%A4%A9%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `139.5K 🔥` `NEW`
1. [金鹰奖提名名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `1.1M 🔥` `+40%`
1. [韩国愈演愈烈的失踪事件 (Increasing number of disappearances in South Korea)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%84%88%E6%BC%94%E6%84%88%E7%83%88%E7%9A%84%E5%A4%B1%E8%B8%AA%E4%BA%8B%E4%BB%B6%23) `374.3K 🔥` `+111%`
1. [金鹰奖 错别字](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E9%94%99%E5%88%AB%E5%AD%97%23) `252.5K 🔥` `+45%`
1. [魏大勋紧身裤界最严厉的父亲 (Wei Daxun is the strictest father in the leggings industry)](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E7%B4%A7%E8%BA%AB%E8%A3%A4%E7%95%8C%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E7%88%B6%E4%BA%B2%23) `211.1K 🔥` `+46%`
1. [原来大家都是这样防止被套话的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E9%98%B2%E6%AD%A2%E8%A2%AB%E5%A5%97%E8%AF%9D%E7%9A%84%23) `724.9K 🔥`
1. [医生称触胸猥亵是污蔑已提交监控](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%A7%B0%E8%A7%A6%E8%83%B8%E7%8C%A5%E4%BA%B5%E6%98%AF%E6%B1%A1%E8%94%91%E5%B7%B2%E6%8F%90%E4%BA%A4%E7%9B%91%E6%8E%A7%23) `151.3K 🔥`
1. [张元英安宥真小分队出道](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E5%AE%89%E5%AE%A5%E7%9C%9F%E5%B0%8F%E5%88%86%E9%98%9F%E5%87%BA%E9%81%93%23) `143.1K 🔥`
1. [一架美国军用运输机降落莫斯科](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%9E%B6%E7%BE%8E%E5%9B%BD%E5%86%9B%E7%94%A8%E8%BF%90%E8%BE%93%E6%9C%BA%E9%99%8D%E8%90%BD%E8%8E%AB%E6%96%AF%E7%A7%91%23) `138.9K 🔥`
1. [在韩失联女生已在国内找到工作](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E5%B7%B2%E5%9C%A8%E5%9B%BD%E5%86%85%E6%89%BE%E5%88%B0%E5%B7%A5%E4%BD%9C%23) `832.2K 🔥` `-27%`
1. [警方确认失联中国女生无韩出境记录](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E7%A1%AE%E8%AE%A4%E5%A4%B1%E8%81%94%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E6%97%A0%E9%9F%A9%E5%87%BA%E5%A2%83%E8%AE%B0%E5%BD%95%23) `636.2K 🔥` `-23%`
1. [什么行为让你觉得朋友不能深交](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E8%A1%8C%E4%B8%BA%E8%AE%A9%E4%BD%A0%E8%A7%89%E5%BE%97%E6%9C%8B%E5%8F%8B%E4%B8%8D%E8%83%BD%E6%B7%B1%E4%BA%A4%23) `449.3K 🔥` `-29%`
1. [金鹰奖热门男女主掉提名单 (Golden Eagle Awards popular male and female protagonists drop nominations)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E7%83%AD%E9%97%A8%E7%94%B7%E5%A5%B3%E4%B8%BB%E6%8E%89%E6%8F%90%E5%90%8D%E5%8D%95%23) `385.3K 🔥` `-44%`
1. [赵丽颖突发身体不适](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%AA%81%E5%8F%91%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%23) `382.6K 🔥` `-35%`
1. [乳房触诊当事医生称已起诉](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A%E5%BD%93%E4%BA%8B%E5%8C%BB%E7%94%9F%E7%A7%B0%E5%B7%B2%E8%B5%B7%E8%AF%89%23) `362.5K 🔥` `-34%`
1. [时代少年团直播](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%9B%B4%E6%92%AD%23) `356.2K 🔥` `-33%`
1. [网传爱情公寓回归季阵容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%9B%9E%E5%BD%92%E5%AD%A3%E9%98%B5%E5%AE%B9%23) `340.0K 🔥` `-48%`
1. [考公女子在星巴克撑伞备考](https://s.weibo.com/weibo?q=%23%E8%80%83%E5%85%AC%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%98%9F%E5%B7%B4%E5%85%8B%E6%92%91%E4%BC%9E%E5%A4%87%E8%80%83%23) `274.7K 🔥` `-40%`
1. [爱情公寓 王冠](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%20%E7%8E%8B%E5%86%A0%23) `273.7K 🔥` `-43%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `273.4K 🔥` `-45%`
1. [杨幂掉提](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%8E%89%E6%8F%90%23) `272.6K 🔥` `-39%`
1. [乳房触诊20多次后发现结节摸不到](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A20%E5%A4%9A%E6%AC%A1%E5%90%8E%E5%8F%91%E7%8E%B0%E7%BB%93%E8%8A%82%E6%91%B8%E4%B8%8D%E5%88%B0%23) `271.6K 🔥` `-23%`
1. [赵丽颖比任何人都爱惜自己的羽毛 (Zhao Liying cherishes her feathers more than anyone else)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%AF%94%E4%BB%BB%E4%BD%95%E4%BA%BA%E9%83%BD%E7%88%B1%E6%83%9C%E8%87%AA%E5%B7%B1%E7%9A%84%E7%BE%BD%E6%AF%9B%23) `270.9K 🔥` `-41%`
1. [金价飞涨原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%A3%9E%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `252.8K 🔥` `-50%`
1. [白鹿未获金鹰奖提名](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9C%AA%E8%8E%B7%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%23) `251.5K 🔥` `-52%`
1. [阴阳师 (Onmyoji)](https://s.weibo.com/weibo?q=%23%E9%98%B4%E9%98%B3%E5%B8%88%23) `244.9K 🔥` `-67%`
1. [女子用3年垃圾桶才发现用错了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A83%E5%B9%B4%E5%9E%83%E5%9C%BE%E6%A1%B6%E6%89%8D%E5%8F%91%E7%8E%B0%E7%94%A8%E9%94%99%E4%BA%86%23) `211.0K 🔥` `-55%`
1. [时代少年团空降评论区](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%A9%BA%E9%99%8D%E8%AF%84%E8%AE%BA%E5%8C%BA%23) `211.0K 🔥` `-30%`
1. [欢子工作室质问披哥](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%B4%A8%E9%97%AE%E6%8A%AB%E5%93%A5%23) `209.8K 🔥` `-27%`
1. [朱志鑫solo金丝眼镜造型](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%ABsolo%E9%87%91%E4%B8%9D%E7%9C%BC%E9%95%9C%E9%80%A0%E5%9E%8B%23) `157.9K 🔥` `-70%`
1. [多款APP被通报](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%AC%BEAPP%E8%A2%AB%E9%80%9A%E6%8A%A5%23) `137.5K 🔥` `-73%`

Updated at 2026-08-25 21:32:20

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
