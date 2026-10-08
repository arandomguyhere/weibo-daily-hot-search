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

1. [多方回应客厅楼板上方埋男童尸体](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%AE%A2%E5%8E%85%E6%A5%BC%E6%9D%BF%E4%B8%8A%E6%96%B9%E5%9F%8B%E7%94%B7%E7%AB%A5%E5%B0%B8%E4%BD%93%23) `1.4M 🔥` `NEW`
1. [彭玉去世](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E7%8E%89%E5%8E%BB%E4%B8%96%23) `1.1M 🔥` `NEW`
1. [长春大冬会火炬发布](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%98%A5%E5%A4%A7%E5%86%AC%E4%BC%9A%E7%81%AB%E7%82%AC%E5%8F%91%E5%B8%83%23) `1.1M 🔥` `NEW`
1. [刹车踏板国标](https://s.weibo.com/weibo?q=%23%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%E5%9B%BD%E6%A0%87%23) `1.1M 🔥` `NEW`
1. [俄不明原因肺炎死亡女子同学回应](https://s.weibo.com/weibo?q=%23%E4%BF%84%E4%B8%8D%E6%98%8E%E5%8E%9F%E5%9B%A0%E8%82%BA%E7%82%8E%E6%AD%BB%E4%BA%A1%E5%A5%B3%E5%AD%90%E5%90%8C%E5%AD%A6%E5%9B%9E%E5%BA%94%23) `1.0M 🔥` `NEW`
1. [懂车帝 脚力](https://s.weibo.com/weibo?q=%23%E6%87%82%E8%BD%A6%E5%B8%9D%20%E8%84%9A%E5%8A%9B%23) `867.9K 🔥` `NEW`
1. [江淮汽车被砸跌停](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B7%AE%E6%B1%BD%E8%BD%A6%E8%A2%AB%E7%A0%B8%E8%B7%8C%E5%81%9C%23) `665.8K 🔥` `NEW`
1. [羊剃毛前以为要死了](https://s.weibo.com/weibo?q=%23%E7%BE%8A%E5%89%83%E6%AF%9B%E5%89%8D%E4%BB%A5%E4%B8%BA%E8%A6%81%E6%AD%BB%E4%BA%86%23) `624.9K 🔥` `NEW`
1. [安踏集团的板块也太大了](https://s.weibo.com/weibo?q=%23%E5%AE%89%E8%B8%8F%E9%9B%86%E5%9B%A2%E7%9A%84%E6%9D%BF%E5%9D%97%E4%B9%9F%E5%A4%AA%E5%A4%A7%E4%BA%86%23) `624.9K 🔥` `NEW`
1. [缅北电诈逃脱者被出租车司机出卖](https://s.weibo.com/weibo?q=%23%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E9%80%83%E8%84%B1%E8%80%85%E8%A2%AB%E5%87%BA%E7%A7%9F%E8%BD%A6%E5%8F%B8%E6%9C%BA%E5%87%BA%E5%8D%96%23) `608.0K 🔥` `NEW`
1. [李一桐原ID换不回来了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E5%8E%9FID%E6%8D%A2%E4%B8%8D%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `592.3K 🔥` `NEW`
1. [疑似崔晋妈妈朋友圈发文](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%B4%94%E6%99%8B%E5%A6%88%E5%A6%88%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%8F%91%E6%96%87%23) `585.4K 🔥` `NEW`
1. [俄向世卫通报不明原因肺炎进展](https://s.weibo.com/weibo?q=%23%E4%BF%84%E5%90%91%E4%B8%96%E5%8D%AB%E9%80%9A%E6%8A%A5%E4%B8%8D%E6%98%8E%E5%8E%9F%E5%9B%A0%E8%82%BA%E7%82%8E%E8%BF%9B%E5%B1%95%23) `560.3K 🔥` `NEW`
1. [刘学义果然人火了脸就清晰了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E6%9E%9C%E7%84%B6%E4%BA%BA%E7%81%AB%E4%BA%86%E8%84%B8%E5%B0%B1%E6%B8%85%E6%99%B0%E4%BA%86%23) `493.5K 🔥` `NEW`
1. [缅北明家11人被执行死刑](https://s.weibo.com/weibo?q=%23%E7%BC%85%E5%8C%97%E6%98%8E%E5%AE%B611%E4%BA%BA%E8%A2%AB%E6%89%A7%E8%A1%8C%E6%AD%BB%E5%88%91%23) `480.6K 🔥` `NEW`
1. [嫁金钗启宣](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%90%AF%E5%AE%A3%23) `476.3K 🔥` `NEW`
1. [赵今麦魏大勋无可替代网飞全球第七](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E9%AD%8F%E5%A4%A7%E5%8B%8B%E6%97%A0%E5%8F%AF%E6%9B%BF%E4%BB%A3%E7%BD%91%E9%A3%9E%E5%85%A8%E7%90%83%E7%AC%AC%E4%B8%83%23) `474.2K 🔥` `NEW`
1. [文旅局长给游客铺床后续](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%97%85%E5%B1%80%E9%95%BF%E7%BB%99%E6%B8%B8%E5%AE%A2%E9%93%BA%E5%BA%8A%E5%90%8E%E7%BB%AD%23) `473.0K 🔥` `NEW`
1. [太仓卫健跟进别墅代孕机构举报](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E4%BB%93%E5%8D%AB%E5%81%A5%E8%B7%9F%E8%BF%9B%E5%88%AB%E5%A2%85%E4%BB%A3%E5%AD%95%E6%9C%BA%E6%9E%84%E4%B8%BE%E6%8A%A5%23) `472.5K 🔥` `NEW`
1. [李一桐Q](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90Q%23) `472.3K 🔥` `NEW`
1. [尊界 懂车帝](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8C%20%E6%87%82%E8%BD%A6%E5%B8%9D%23) `441.6K 🔥` `NEW`
1. [玉簟秋](https://s.weibo.com/weibo?q=%23%E7%8E%89%E7%B0%9F%E7%A7%8B%23) `401.9K 🔥` `NEW`
1. [尊界V800刹车踏板支架断裂](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8CV800%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%E6%94%AF%E6%9E%B6%E6%96%AD%E8%A3%82%23) `399.9K 🔥` `NEW`
1. [杨瀚森 上场机会](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%20%E4%B8%8A%E5%9C%BA%E6%9C%BA%E4%BC%9A%23) `387.5K 🔥` `NEW`
1. [水贝金镯子卖断货了](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E8%B4%9D%E9%87%91%E9%95%AF%E5%AD%90%E5%8D%96%E6%96%AD%E8%B4%A7%E4%BA%86%23) `372.2K 🔥` `NEW`
1. [曝本届飞天奖有90后演员获奖](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9C%AC%E5%B1%8A%E9%A3%9E%E5%A4%A9%E5%A5%96%E6%9C%8990%E5%90%8E%E6%BC%94%E5%91%98%E8%8E%B7%E5%A5%96%23) `364.1K 🔥` `NEW`
1. [酸奶最伟大的吃法出现了](https://s.weibo.com/weibo?q=%23%E9%85%B8%E5%A5%B6%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E5%90%83%E6%B3%95%E5%87%BA%E7%8E%B0%E4%BA%86%23) `353.8K 🔥` `NEW`
1. [崔晋妈妈投诉网友](https://s.weibo.com/weibo?q=%23%E5%B4%94%E6%99%8B%E5%A6%88%E5%A6%88%E6%8A%95%E8%AF%89%E7%BD%91%E5%8F%8B%23) `349.4K 🔥` `NEW`
1. [俞承豪林世珠恋爱6年](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%89%BF%E8%B1%AA%E6%9E%97%E4%B8%96%E7%8F%A0%E6%81%8B%E7%88%B16%E5%B9%B4%23) `342.8K 🔥` `NEW`
1. [九个舅舅染不同发色参加外甥女婚礼](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E4%B8%AA%E8%88%85%E8%88%85%E6%9F%93%E4%B8%8D%E5%90%8C%E5%8F%91%E8%89%B2%E5%8F%82%E5%8A%A0%E5%A4%96%E7%94%A5%E5%A5%B3%E5%A9%9A%E7%A4%BC%23) `316.0K 🔥` `NEW`
1. [估计没和他握手的车模肠子都悔青了](https://s.weibo.com/weibo?q=%23%E4%BC%B0%E8%AE%A1%E6%B2%A1%E5%92%8C%E4%BB%96%E6%8F%A1%E6%89%8B%E7%9A%84%E8%BD%A6%E6%A8%A1%E8%82%A0%E5%AD%90%E9%83%BD%E6%82%94%E9%9D%92%E4%BA%86%23) `311.6K 🔥` `NEW`
1. [林大爷不救吕蕺儿的伏笔埋得那么长](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%A4%A7%E7%88%B7%E4%B8%8D%E6%95%91%E5%90%95%E8%95%BA%E5%84%BF%E7%9A%84%E4%BC%8F%E7%AC%94%E5%9F%8B%E5%BE%97%E9%82%A3%E4%B9%88%E9%95%BF%23) `309.7K 🔥` `NEW`
1. [余承东亲自为霍英东集团总裁交车](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E4%BA%B2%E8%87%AA%E4%B8%BA%E9%9C%8D%E8%8B%B1%E4%B8%9C%E9%9B%86%E5%9B%A2%E6%80%BB%E8%A3%81%E4%BA%A4%E8%BD%A6%23) `298.4K 🔥` `NEW`
1. [俞承豪承认恋情](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%89%BF%E8%B1%AA%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `294.3K 🔥` `NEW`
1. [荣耀称Magic9系列稳居安卓旗舰第一](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E7%A7%B0Magic9%E7%B3%BB%E5%88%97%E7%A8%B3%E5%B1%85%E5%AE%89%E5%8D%93%E6%97%97%E8%88%B0%E7%AC%AC%E4%B8%80%23) `291.0K 🔥` `NEW`
1. [机票大跳水比高铁还便宜](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E7%A5%A8%E5%A4%A7%E8%B7%B3%E6%B0%B4%E6%AF%94%E9%AB%98%E9%93%81%E8%BF%98%E4%BE%BF%E5%AE%9C%23) `287.9K 🔥` `NEW`
1. [恋与深空沈星回愿得此瞬PV](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%B2%88%E6%98%9F%E5%9B%9E%E6%84%BF%E5%BE%97%E6%AD%A4%E7%9E%ACPV%23) `263.0K 🔥` `NEW`
1. [玉簟秋预告](https://s.weibo.com/weibo?q=%23%E7%8E%89%E7%B0%9F%E7%A7%8B%E9%A2%84%E5%91%8A%23) `261.5K 🔥` `NEW`
1. [巴黎时装周最有生命感的单品](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E6%97%B6%E8%A3%85%E5%91%A8%E6%9C%80%E6%9C%89%E7%94%9F%E5%91%BD%E6%84%9F%E7%9A%84%E5%8D%95%E5%93%81%23) `258.6K 🔥` `NEW`
1. [最后一批返程车主都是大聪明](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%90%8E%E4%B8%80%E6%89%B9%E8%BF%94%E7%A8%8B%E8%BD%A6%E4%B8%BB%E9%83%BD%E6%98%AF%E5%A4%A7%E8%81%AA%E6%98%8E%23) `258.6K 🔥` `NEW`
1. [邓紫棋为什么会看上Mark](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E7%9C%8B%E4%B8%8AMark%23) `232.5K 🔥` `NEW`
1. [迪丽热巴时装十月封面](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%97%B6%E8%A3%85%E5%8D%81%E6%9C%88%E5%B0%81%E9%9D%A2%23) `221.0K 🔥` `NEW`
1. [恋与深空沈星回生日PV](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%B2%88%E6%98%9F%E5%9B%9E%E7%94%9F%E6%97%A5PV%23) `216.0K 🔥` `NEW`
1. [上官正义举报地下代孕机构](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%AE%98%E6%AD%A3%E4%B9%89%E4%B8%BE%E6%8A%A5%E5%9C%B0%E4%B8%8B%E4%BB%A3%E5%AD%95%E6%9C%BA%E6%9E%84%23) `209.1K 🔥` `NEW`
1. [周迅奚美娟自然衰老好美](https://s.weibo.com/weibo?q=%23%E5%91%A8%E8%BF%85%E5%A5%9A%E7%BE%8E%E5%A8%9F%E8%87%AA%E7%84%B6%E8%A1%B0%E8%80%81%E5%A5%BD%E7%BE%8E%23) `201.3K 🔥` `NEW`
1. [梁靖崑向鹏无缘男双4强](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E5%90%91%E9%B9%8F%E6%97%A0%E7%BC%98%E7%94%B7%E5%8F%8C4%E5%BC%BA%23) `181.2K 🔥` `NEW`
1. [方媛怀三胎的时候没有告诉郭富城](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E6%80%80%E4%B8%89%E8%83%8E%E7%9A%84%E6%97%B6%E5%80%99%E6%B2%A1%E6%9C%89%E5%91%8A%E8%AF%89%E9%83%AD%E5%AF%8C%E5%9F%8E%23) `179.2K 🔥` `NEW`
1. [张韶涵演唱会砸烂苹果](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A0%B8%E7%83%82%E8%8B%B9%E6%9E%9C%23) `811.2K 🔥` `+330%`
1. [网红小四爷 缅北](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B0%8F%E5%9B%9B%E7%88%B7%20%E7%BC%85%E5%8C%97%23) `562.8K 🔥` `+193%`
1. [重庆李子坝地下33米藏着一亿现钞](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E6%9D%8E%E5%AD%90%E5%9D%9D%E5%9C%B0%E4%B8%8B33%E7%B1%B3%E8%97%8F%E7%9D%80%E4%B8%80%E4%BA%BF%E7%8E%B0%E9%92%9E%23) `372.4K 🔥` `+122%`

Updated at 2026-10-08 12:11:10

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
