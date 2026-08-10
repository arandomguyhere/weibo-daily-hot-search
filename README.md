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

1. [王宝强0票 (Wang Baoqiang0 votes)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%9D%E5%BC%BA0%E7%A5%A8%23) `3.8M 🔥` `NEW`
1. [百花奖获奖名单](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `1.2M 🔥` `NEW`
1. [中国黑科技圈粉老外](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%BB%91%E7%A7%91%E6%8A%80%E5%9C%88%E7%B2%89%E8%80%81%E5%A4%96%23) `900.7K 🔥` `NEW`
1. [陈思诚在家里气哭了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E8%AF%9A%E5%9C%A8%E5%AE%B6%E9%87%8C%E6%B0%94%E5%93%AD%E4%BA%86%23) `875.7K 🔥` `NEW`
1. [泰国 电诈园区](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%20%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%23) `870.3K 🔥` `NEW`
1. [刘耀文看到易烊千玺拿影帝的反应](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E7%9C%8B%E5%88%B0%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%8B%BF%E5%BD%B1%E5%B8%9D%E7%9A%84%E5%8F%8D%E5%BA%94%23) `861.3K 🔥` `NEW`
1. [白海豚突然大拐弯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E7%AA%81%E7%84%B6%E5%A4%A7%E6%8B%90%E5%BC%AF%23) `843.5K 🔥` `NEW`
1. [旅游发朋友圈为什么要带定位](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%B8%A6%E5%AE%9A%E4%BD%8D%23) `824.8K 🔥` `NEW`
1. [原来这才是金项链的正确戴法](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E6%89%8D%E6%98%AF%E9%87%91%E9%A1%B9%E9%93%BE%E7%9A%84%E6%AD%A3%E7%A1%AE%E6%88%B4%E6%B3%95%23) `489.9K 🔥` `NEW`
1. [iPhone18Pro等7款新品彻底泄密](https://s.weibo.com/weibo?q=%23iPhone18Pro%E7%AD%897%E6%AC%BE%E6%96%B0%E5%93%81%E5%BD%BB%E5%BA%95%E6%B3%84%E5%AF%86%23) `415.5K 🔥` `NEW`
1. [沈腾最大的奖 微博King (Shen Teng’s biggest award Weibo King)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%9C%80%E5%A4%A7%E7%9A%84%E5%A5%96%20%E5%BE%AE%E5%8D%9AKing%23) `414.3K 🔥` `NEW`
1. [无冕影帝](https://s.weibo.com/weibo?q=%23%E6%97%A0%E5%86%95%E5%BD%B1%E5%B8%9D%23) `414.2K 🔥` `NEW`
1. [中星4B卫星发射失利](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%98%9F4B%E5%8D%AB%E6%98%9F%E5%8F%91%E5%B0%84%E5%A4%B1%E5%88%A9%23) `412.9K 🔥` `NEW`
1. [以后救市别求沈腾王宝强了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E6%95%91%E5%B8%82%E5%88%AB%E6%B1%82%E6%B2%88%E8%85%BE%E7%8E%8B%E5%AE%9D%E5%BC%BA%E4%BA%86%23) `411.0K 🔥` `NEW`
1. [梁家辉安慰马丽不要哭](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E5%AE%89%E6%85%B0%E9%A9%AC%E4%B8%BD%E4%B8%8D%E8%A6%81%E5%93%AD%23) `409.5K 🔥` `NEW`
1. [哥伦比亚发生7.5级地震](https://s.weibo.com/weibo?q=%23%E5%93%A5%E4%BC%A6%E6%AF%94%E4%BA%9A%E5%8F%91%E7%94%9F7.5%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `408.5K 🔥` `NEW`
1. [男乒世界前十仅2名中国选手](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%B9%92%E4%B8%96%E7%95%8C%E5%89%8D%E5%8D%81%E4%BB%852%E5%90%8D%E4%B8%AD%E5%9B%BD%E9%80%89%E6%89%8B%23) `408.1K 🔥` `NEW`
1. [ai漫剧顶流已经出了8季了](https://s.weibo.com/weibo?q=%23ai%E6%BC%AB%E5%89%A7%E9%A1%B6%E6%B5%81%E5%B7%B2%E7%BB%8F%E5%87%BA%E4%BA%868%E5%AD%A3%E4%BA%86%23) `405.9K 🔥` `NEW`
1. [卫诗雅百花奖最佳女主](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E8%AF%97%E9%9B%85%E7%99%BE%E8%8A%B1%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%23) `405.3K 🔥` `NEW`
1. [泰国旅游 失联](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%97%85%E6%B8%B8%20%E5%A4%B1%E8%81%94%23) `404.5K 🔥` `NEW`
1. [易烊千玺百花奖最佳男主 (Yi Yang Qianxi Hundred Flowers Award for Best Actor)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%99%BE%E8%8A%B1%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E4%B8%BB%23) `402.9K 🔥` `NEW`
1. [小小的我导演0票](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B0%8F%E7%9A%84%E6%88%91%E5%AF%BC%E6%BC%940%E7%A5%A8%23) `401.7K 🔥` `NEW`
1. [炸鸡店爆单一人店员忙到窒息](https://s.weibo.com/weibo?q=%23%E7%82%B8%E9%B8%A1%E5%BA%97%E7%88%86%E5%8D%95%E4%B8%80%E4%BA%BA%E5%BA%97%E5%91%98%E5%BF%99%E5%88%B0%E7%AA%92%E6%81%AF%23) `400.5K 🔥` `NEW`
1. [竟然不是高叶](https://s.weibo.com/weibo?q=%23%E7%AB%9F%E7%84%B6%E4%B8%8D%E6%98%AF%E9%AB%98%E5%8F%B6%23) `399.1K 🔥` `NEW`
1. [杨幂百花奖24票](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%99%BE%E8%8A%B1%E5%A5%9624%E7%A5%A8%23) `397.8K 🔥` `NEW`
1. [泰国被接机女生疑遭带走](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E8%A2%AB%E6%8E%A5%E6%9C%BA%E5%A5%B3%E7%94%9F%E7%96%91%E9%81%AD%E5%B8%A6%E8%B5%B0%23) `397.1K 🔥` `NEW`
1. [易烊千玺忍眼泪](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%BF%8D%E7%9C%BC%E6%B3%AA%23) `396.0K 🔥` `NEW`
1. [经常旅游的人都有一个共性](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E5%B8%B8%E6%97%85%E6%B8%B8%E7%9A%84%E4%BA%BA%E9%83%BD%E6%9C%89%E4%B8%80%E4%B8%AA%E5%85%B1%E6%80%A7%23) `394.4K 🔥` `NEW`
1. [原来去茶卡盐湖要穿鞋套](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%8E%BB%E8%8C%B6%E5%8D%A1%E7%9B%90%E6%B9%96%E8%A6%81%E7%A9%BF%E9%9E%8B%E5%A5%97%23) `392.8K 🔥` `NEW`
1. [韩国大妈切西瓜真有一套](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%A4%A7%E5%A6%88%E5%88%87%E8%A5%BF%E7%93%9C%E7%9C%9F%E6%9C%89%E4%B8%80%E5%A5%97%23) `391.6K 🔥` `NEW`
1. [申奥获得艺谋奖 (Bid for Olympic Games and won Yimou Award)](https://s.weibo.com/weibo?q=%23%E7%94%B3%E5%A5%A5%E8%8E%B7%E5%BE%97%E8%89%BA%E8%B0%8B%E5%A5%96%23) `390.4K 🔥` `NEW`
1. [王骁拿奖王馥荔眼睛红了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%AA%81%E6%8B%BF%E5%A5%96%E7%8E%8B%E9%A6%A5%E8%8D%94%E7%9C%BC%E7%9D%9B%E7%BA%A2%E4%BA%86%23) `390.3K 🔥` `NEW`
1. [高铁双人座被免票儿童挤成3人座](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E5%8F%8C%E4%BA%BA%E5%BA%A7%E8%A2%AB%E5%85%8D%E7%A5%A8%E5%84%BF%E7%AB%A5%E6%8C%A4%E6%88%903%E4%BA%BA%E5%BA%A7%23) `370.0K 🔥` `NEW`
1. [微博之夜含金量](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%E5%90%AB%E9%87%91%E9%87%8F%23) `351.1K 🔥` `NEW`
1. [刘耀文票数](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E7%A5%A8%E6%95%B0%23) `331.2K 🔥` `NEW`
1. [河南大暴雨特大暴雨](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%A4%A7%E6%9A%B4%E9%9B%A8%E7%89%B9%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `328.8K 🔥` `NEW`
1. [李云霄看陈丽君拿奖的眼神](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BA%91%E9%9C%84%E7%9C%8B%E9%99%88%E4%B8%BD%E5%90%9B%E6%8B%BF%E5%A5%96%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `327.3K 🔥` `NEW`
1. [百花奖影后和白玉兰视后同框](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E5%BD%B1%E5%90%8E%E5%92%8C%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%90%8E%E5%90%8C%E6%A1%86%23) `298.3K 🔥` `NEW`
1. [白海豚 洗衣凝珠视角](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%20%E6%B4%97%E8%A1%A3%E5%87%9D%E7%8F%A0%E8%A7%86%E8%A7%92%23) `298.2K 🔥` `NEW`
1. [百花奖](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%23) `298.1K 🔥` `NEW`
1. [大鹏最佳导演 (Dapeng Best Director)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%B9%8F%E6%9C%80%E4%BD%B3%E5%AF%BC%E6%BC%94%23) `298.0K 🔥` `NEW`
1. [白海豚](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `297.9K 🔥` `NEW`
1. [喜剧人 拿奖难](https://s.weibo.com/weibo?q=%23%E5%96%9C%E5%89%A7%E4%BA%BA%20%E6%8B%BF%E5%A5%96%E9%9A%BE%23) `297.8K 🔥` `NEW`
1. [高叶票数](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8F%B6%E7%A5%A8%E6%95%B0%23) `297.7K 🔥` `NEW`
1. [深圳已经这么科幻了](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%B7%B2%E7%BB%8F%E8%BF%99%E4%B9%88%E7%A7%91%E5%B9%BB%E4%BA%86%23) `297.6K 🔥` `NEW`
1. [女演员炒股亏70万靠年迈母亲接济](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E7%82%92%E8%82%A1%E4%BA%8F70%E4%B8%87%E9%9D%A0%E5%B9%B4%E8%BF%88%E6%AF%8D%E4%BA%B2%E6%8E%A5%E6%B5%8E%23) `297.4K 🔥` `NEW`
1. [TheShy还是太权威了](https://s.weibo.com/weibo?q=%23TheShy%E8%BF%98%E6%98%AF%E5%A4%AA%E6%9D%83%E5%A8%81%E4%BA%86%23) `297.3K 🔥` `NEW`
1. [哥伦比亚强震已致超20死](https://s.weibo.com/weibo?q=%23%E5%93%A5%E4%BC%A6%E6%AF%94%E4%BA%9A%E5%BC%BA%E9%9C%87%E5%B7%B2%E8%87%B4%E8%B6%8520%E6%AD%BB%23) `297.2K 🔥` `NEW`
1. [朱雀三号](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%9B%80%E4%B8%89%E5%8F%B7%23) `297.0K 🔥` `NEW`
1. [武汉天桥商贩称涉事摊贩平时脾气还好](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%A4%A9%E6%A1%A5%E5%95%86%E8%B4%A9%E7%A7%B0%E6%B6%89%E4%BA%8B%E6%91%8A%E8%B4%A9%E5%B9%B3%E6%97%B6%E8%84%BE%E6%B0%94%E8%BF%98%E5%A5%BD%23) `297.0K 🔥` `NEW`

Updated at 2026-08-11 00:32:14

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
