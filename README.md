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

1. [女子常来病房摸17岁离世儿子名字 (A woman often comes to the ward to touch the name of her son who died at the age of 17)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B8%B8%E6%9D%A5%E7%97%85%E6%88%BF%E6%91%B817%E5%B2%81%E7%A6%BB%E4%B8%96%E5%84%BF%E5%AD%90%E5%90%8D%E5%AD%97%23) `123.2K 🔥` `NEW`
1. [杨幂拼豆庆祝绿苑二十周年](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%8B%BC%E8%B1%86%E5%BA%86%E7%A5%9D%E7%BB%BF%E8%8B%91%E4%BA%8C%E5%8D%81%E5%91%A8%E5%B9%B4%23) `47.6K 🔥` `NEW`
1. [张元英跳复仇摇](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E8%B7%B3%E5%A4%8D%E4%BB%87%E6%91%87%23) `47.2K 🔥` `NEW`
1. [周冬雨亮相马思纯新片首映](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%E4%BA%AE%E7%9B%B8%E9%A9%AC%E6%80%9D%E7%BA%AF%E6%96%B0%E7%89%87%E9%A6%96%E6%98%A0%23) `45.7K 🔥` `NEW`
1. [特朗普希望4月6日前与伊朗签协议](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%B8%8C%E6%9C%9B4%E6%9C%886%E6%97%A5%E5%89%8D%E4%B8%8E%E4%BC%8A%E6%9C%97%E7%AD%BE%E5%8D%8F%E8%AE%AE%23) `43.6K 🔥` `NEW`
1. [刚刚愚人节活动](https://s.weibo.com/weibo?q=%23%E5%88%9A%E5%88%9A%E6%84%9A%E4%BA%BA%E8%8A%82%E6%B4%BB%E5%8A%A8%23) `42.8K 🔥` `NEW`
1. [韩国向武汉居民发放十年签](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%90%91%E6%AD%A6%E6%B1%89%E5%B1%85%E6%B0%91%E5%8F%91%E6%94%BE%E5%8D%81%E5%B9%B4%E7%AD%BE%23) `40.6K 🔥` `NEW`
1. [19岁的张雪](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E7%9A%84%E5%BC%A0%E9%9B%AA%23) `39.8K 🔥` `NEW`
1. [伊朗警告打击地区美高科技相关企业](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AD%A6%E5%91%8A%E6%89%93%E5%87%BB%E5%9C%B0%E5%8C%BA%E7%BE%8E%E9%AB%98%E7%A7%91%E6%8A%80%E7%9B%B8%E5%85%B3%E4%BC%81%E4%B8%9A%23) `35.3K 🔥` `NEW`
1. [曝雷军押注的中年人泡泡玛特将上市](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9B%B7%E5%86%9B%E6%8A%BC%E6%B3%A8%E7%9A%84%E4%B8%AD%E5%B9%B4%E4%BA%BA%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E5%B0%86%E4%B8%8A%E5%B8%82%23) `270.3K 🔥` `+76%`
1. [十二星座4月月运 (Twelve zodiac signs in April)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%8C%E6%98%9F%E5%BA%A74%E6%9C%88%E6%9C%88%E8%BF%90%23) `238.5K 🔥` `+283%`
1. [甄嬛传姐妹为孙俪新剧宣传](https://s.weibo.com/weibo?q=%23%E7%94%84%E5%AC%9B%E4%BC%A0%E5%A7%90%E5%A6%B9%E4%B8%BA%E5%AD%99%E4%BF%AA%E6%96%B0%E5%89%A7%E5%AE%A3%E4%BC%A0%23) `59.1K 🔥`
1. [未发现鞠婧祎涉税问题 (No tax-related issues with Ju Jingyi were found)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%8F%91%E7%8E%B0%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%B6%89%E7%A8%8E%E9%97%AE%E9%A2%98%23) `383.4K 🔥` `-53%`
1. [十五五规划背后的90后力量](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E8%83%8C%E5%90%8E%E7%9A%8490%E5%90%8E%E5%8A%9B%E9%87%8F%23) `240.5K 🔥` `-48%`
1. [伊朗称将沙特视为兄弟国家](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%B0%86%E6%B2%99%E7%89%B9%E8%A7%86%E4%B8%BA%E5%85%84%E5%BC%9F%E5%9B%BD%E5%AE%B6%23) `110.8K 🔥` `-28%`
1. [美国军人向脱衣舞女泄露部署计划](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%86%9B%E4%BA%BA%E5%90%91%E8%84%B1%E8%A1%A3%E8%88%9E%E5%A5%B3%E6%B3%84%E9%9C%B2%E9%83%A8%E7%BD%B2%E8%AE%A1%E5%88%92%23) `85.6K 🔥` `-53%`
1. [何凯文回归](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%87%AF%E6%96%87%E5%9B%9E%E5%BD%92%23) `76.3K 🔥` `-43%`
1. [抗癌博主朱明月去世其女发声](https://s.weibo.com/weibo?q=%23%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E6%9C%B1%E6%98%8E%E6%9C%88%E5%8E%BB%E4%B8%96%E5%85%B6%E5%A5%B3%E5%8F%91%E5%A3%B0%23) `73.5K 🔥` `-64%`
1. [瑞幸 紫椰子](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%20%E7%B4%AB%E6%A4%B0%E5%AD%90%23) `62.2K 🔥` `-89%`
1. [站姐团建](https://s.weibo.com/weibo?q=%23%E7%AB%99%E5%A7%90%E5%9B%A2%E5%BB%BA%23) `62.2K 🔥` `-54%`
1. [愚人节](https://s.weibo.com/weibo?q=%23%E6%84%9A%E4%BA%BA%E8%8A%82%23) `61.8K 🔥` `-54%`
1. [鞠婧祎 此身分明了 (Ju Jingyi’s identity is clear)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%20%E6%AD%A4%E8%BA%AB%E5%88%86%E6%98%8E%E4%BA%86%23) `61.7K 🔥` `-54%`
1. [单依纯拉黑网友](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%8B%89%E9%BB%91%E7%BD%91%E5%8F%8B%23) `61.3K 🔥` `-54%`
1. [陈飞宇 陈凯歌基因显化中 (Chen Feiyu and Chen Kaige’s genes are manifesting)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%20%E9%99%88%E5%87%AF%E6%AD%8C%E5%9F%BA%E5%9B%A0%E6%98%BE%E5%8C%96%E4%B8%AD%23) `61.1K 🔥` `-45%`
1. [杨紫也被女装背刺了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%B9%9F%E8%A2%AB%E5%A5%B3%E8%A3%85%E8%83%8C%E5%88%BA%E4%BA%86%23) `60.8K 🔥` `-49%`
1. [香港开往上海高铁车厢出现大量蚊虫](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%BC%80%E5%BE%80%E4%B8%8A%E6%B5%B7%E9%AB%98%E9%93%81%E8%BD%A6%E5%8E%A2%E5%87%BA%E7%8E%B0%E5%A4%A7%E9%87%8F%E8%9A%8A%E8%99%AB%23) `60.8K 🔥` `-55%`
1. [南派三叔 群像无罪 (The third uncle of the Southern School group portrait is innocent)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%B4%BE%E4%B8%89%E5%8F%94%20%E7%BE%A4%E5%83%8F%E6%97%A0%E7%BD%AA%23) `55.8K 🔥` `-58%`
1. [张雪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `47.7K 🔥` `-54%`
1. [en王翊恩 结婚但没同居](https://s.weibo.com/weibo?q=%23en%E7%8E%8B%E7%BF%8A%E6%81%A9%20%E7%BB%93%E5%A9%9A%E4%BD%86%E6%B2%A1%E5%90%8C%E5%B1%85%23) `47.6K 🔥` `-54%`
1. [网红小徐自曝财产](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B0%8F%E5%BE%90%E8%87%AA%E6%9B%9D%E8%B4%A2%E4%BA%A7%23) `47.5K 🔥` `-53%`
1. [妻子5次试管成功同年丈夫与情人生子](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%905%E6%AC%A1%E8%AF%95%E7%AE%A1%E6%88%90%E5%8A%9F%E5%90%8C%E5%B9%B4%E4%B8%88%E5%A4%AB%E4%B8%8E%E6%83%85%E4%BA%BA%E7%94%9F%E5%AD%90%23) `47.4K 🔥` `-56%`
1. [浪姐](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `47.2K 🔥` `-39%`
1. [徐明浩跳catchcatch](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%98%8E%E6%B5%A9%E8%B7%B3catchcatch%23) `45.5K 🔥` `-57%`
1. [王者荣耀返场 (King of Glory returns)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E8%BF%94%E5%9C%BA%23) `44.2K 🔥` `-45%`
1. [中国无人机蜂群突击铺天盖地](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%97%A0%E4%BA%BA%E6%9C%BA%E8%9C%82%E7%BE%A4%E7%AA%81%E5%87%BB%E9%93%BA%E5%A4%A9%E7%9B%96%E5%9C%B0%23) `43.8K 🔥` `-71%`
1. [NCTWISH 最尊重愚人节的团](https://s.weibo.com/weibo?q=%23NCTWISH%20%E6%9C%80%E5%B0%8A%E9%87%8D%E6%84%9A%E4%BA%BA%E8%8A%82%E7%9A%84%E5%9B%A2%23) `43.5K 🔥` `-65%`
1. [女子回应获3亿遗产引丈夫子女不满](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E8%8E%B73%E4%BA%BF%E9%81%97%E4%BA%A7%E5%BC%95%E4%B8%88%E5%A4%AB%E5%AD%90%E5%A5%B3%E4%B8%8D%E6%BB%A1%23) `42.9K 🔥` `-43%`
1. [运动员退役后从146斤暴涨至523斤](https://s.weibo.com/weibo?q=%23%E8%BF%90%E5%8A%A8%E5%91%98%E9%80%80%E5%BD%B9%E5%90%8E%E4%BB%8E146%E6%96%A4%E6%9A%B4%E6%B6%A8%E8%87%B3523%E6%96%A4%23) `42.1K 🔥` `-62%`
1. [TES 369](https://s.weibo.com/weibo?q=%23TES%20369%23) `40.6K 🔥` `-48%`
1. [宋雨琦对接回应不录跑男](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E5%AF%B9%E6%8E%A5%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%BD%95%E8%B7%91%E7%94%B7%23) `40.1K 🔥` `-63%`
1. [en王翊恩回应离过婚](https://s.weibo.com/weibo?q=%23en%E7%8E%8B%E7%BF%8A%E6%81%A9%E5%9B%9E%E5%BA%94%E7%A6%BB%E8%BF%87%E5%A9%9A%23) `39.4K 🔥` `-64%`
1. [黄金六轮史诗级跳水](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%85%AD%E8%BD%AE%E5%8F%B2%E8%AF%97%E7%BA%A7%E8%B7%B3%E6%B0%B4%23) `39.1K 🔥` `-62%`
1. [俄方拒绝给日本供油](https://s.weibo.com/weibo?q=%23%E4%BF%84%E6%96%B9%E6%8B%92%E7%BB%9D%E7%BB%99%E6%97%A5%E6%9C%AC%E4%BE%9B%E6%B2%B9%23) `38.0K 🔥` `-54%`
1. [Ruler可能面临禁赛 (Ruler could face ban)](https://s.weibo.com/weibo?q=%23Ruler%E5%8F%AF%E8%83%BD%E9%9D%A2%E4%B8%B4%E7%A6%81%E8%B5%9B%23) `36.2K 🔥` `-59%`
1. [唐艺昕人气](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E4%BA%BA%E6%B0%94%23) `35.3K 🔥` `-66%`
1. [羊水栓塞产妇昏迷30天后苏醒](https://s.weibo.com/weibo?q=%23%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%E4%BA%A7%E5%A6%87%E6%98%8F%E8%BF%B730%E5%A4%A9%E5%90%8E%E8%8B%8F%E9%86%92%23) `34.1K 🔥` `-77%`
1. [NCTWISH](https://s.weibo.com/weibo?q=%23NCTWISH%23) `34.0K 🔥` `-66%`
1. [四川一知名小学周边小区不能入读](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E4%B8%80%E7%9F%A5%E5%90%8D%E5%B0%8F%E5%AD%A6%E5%91%A8%E8%BE%B9%E5%B0%8F%E5%8C%BA%E4%B8%8D%E8%83%BD%E5%85%A5%E8%AF%BB%23) `33.8K 🔥` `-40%`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `33.8K 🔥` `-49%`
1. [郭敬明终于能睡着了](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E7%BB%88%E4%BA%8E%E8%83%BD%E7%9D%A1%E7%9D%80%E4%BA%86%23) `33.8K 🔥` `-54%`

Updated at 2026-04-01 01:40:13

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
