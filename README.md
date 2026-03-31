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

1. [未发现鞠婧祎涉税问题 (No tax-related issues with Ju Jingyi were found)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%8F%91%E7%8E%B0%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%B6%89%E7%A8%8E%E9%97%AE%E9%A2%98%23) `808.3K 🔥` `NEW`
1. [瑞幸 紫椰子](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%20%E7%B4%AB%E6%A4%B0%E5%AD%90%23) `589.1K 🔥` `NEW`
1. [十五五规划背后的90后力量](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E8%83%8C%E5%90%8E%E7%9A%8490%E5%90%8E%E5%8A%9B%E9%87%8F%23) `466.5K 🔥` `NEW`
1. [抗癌博主朱明月去世其女发声](https://s.weibo.com/weibo?q=%23%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E6%9C%B1%E6%98%8E%E6%9C%88%E5%8E%BB%E4%B8%96%E5%85%B6%E5%A5%B3%E5%8F%91%E5%A3%B0%23) `205.4K 🔥` `NEW`
1. [美国军人向脱衣舞女泄露部署计划](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%86%9B%E4%BA%BA%E5%90%91%E8%84%B1%E8%A1%A3%E8%88%9E%E5%A5%B3%E6%B3%84%E9%9C%B2%E9%83%A8%E7%BD%B2%E8%AE%A1%E5%88%92%23) `182.7K 🔥` `NEW`
1. [伊朗称将沙特视为兄弟国家](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%B0%86%E6%B2%99%E7%89%B9%E8%A7%86%E4%B8%BA%E5%85%84%E5%BC%9F%E5%9B%BD%E5%AE%B6%23) `154.8K 🔥` `NEW`
1. [重庆辟谣张飞古道重开](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E8%BE%9F%E8%B0%A3%E5%BC%A0%E9%A3%9E%E5%8F%A4%E9%81%93%E9%87%8D%E5%BC%80%23) `154.7K 🔥` `NEW`
1. [曝雷军押注的中年人泡泡玛特将上市](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9B%B7%E5%86%9B%E6%8A%BC%E6%B3%A8%E7%9A%84%E4%B8%AD%E5%B9%B4%E4%BA%BA%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E5%B0%86%E4%B8%8A%E5%B8%82%23) `153.2K 🔥` `NEW`
1. [中国无人机蜂群突击铺天盖地](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%97%A0%E4%BA%BA%E6%9C%BA%E8%9C%82%E7%BE%A4%E7%AA%81%E5%87%BB%E9%93%BA%E5%A4%A9%E7%9B%96%E5%9C%B0%23) `148.9K 🔥` `NEW`
1. [羊水栓塞产妇昏迷30天后苏醒](https://s.weibo.com/weibo?q=%23%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%E4%BA%A7%E5%A6%87%E6%98%8F%E8%BF%B730%E5%A4%A9%E5%90%8E%E8%8B%8F%E9%86%92%23) `147.5K 🔥` `NEW`
1. [南派三叔 群像无罪 (The third uncle of the Southern School group portrait is innocent)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%B4%BE%E4%B8%89%E5%8F%94%20%E7%BE%A4%E5%83%8F%E6%97%A0%E7%BD%AA%23) `134.3K 🔥` `NEW`
1. [站姐团建](https://s.weibo.com/weibo?q=%23%E7%AB%99%E5%A7%90%E5%9B%A2%E5%BB%BA%23) `134.2K 🔥` `NEW`
1. [愚人节](https://s.weibo.com/weibo?q=%23%E6%84%9A%E4%BA%BA%E8%8A%82%23) `134.1K 🔥` `NEW`
1. [香港开往上海高铁车厢出现大量蚊虫](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%BC%80%E5%BE%80%E4%B8%8A%E6%B5%B7%E9%AB%98%E9%93%81%E8%BD%A6%E5%8E%A2%E5%87%BA%E7%8E%B0%E5%A4%A7%E9%87%8F%E8%9A%8A%E8%99%AB%23) `133.8K 🔥` `NEW`
1. [鞠婧祎 此身分明了](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%20%E6%AD%A4%E8%BA%AB%E5%88%86%E6%98%8E%E4%BA%86%23) `133.7K 🔥` `NEW`
1. [单依纯拉黑网友](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%8B%89%E9%BB%91%E7%BD%91%E5%8F%8B%23) `133.4K 🔥` `NEW`
1. [何凯文回归](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%87%AF%E6%96%87%E5%9B%9E%E5%BD%92%23) `133.3K 🔥` `NEW`
1. [NCTWISH 最尊重愚人节的团](https://s.weibo.com/weibo?q=%23NCTWISH%20%E6%9C%80%E5%B0%8A%E9%87%8D%E6%84%9A%E4%BA%BA%E8%8A%82%E7%9A%84%E5%9B%A2%23) `124.3K 🔥` `NEW`
1. [杨紫也被女装背刺了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%B9%9F%E8%A2%AB%E5%A5%B3%E8%A3%85%E8%83%8C%E5%88%BA%E4%BA%86%23) `118.1K 🔥` `NEW`
1. [运动员退役后从146斤暴涨至523斤](https://s.weibo.com/weibo?q=%23%E8%BF%90%E5%8A%A8%E5%91%98%E9%80%80%E5%BD%B9%E5%90%8E%E4%BB%8E146%E6%96%A4%E6%9A%B4%E6%B6%A8%E8%87%B3523%E6%96%A4%23) `110.8K 🔥` `NEW`
1. [陈飞宇 陈凯歌基因显化中 (Chen Feiyu and Chen Kaige’s genes are manifesting)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%20%E9%99%88%E5%87%AF%E6%AD%8C%E5%9F%BA%E5%9B%A0%E6%98%BE%E5%8C%96%E4%B8%AD%23) `110.4K 🔥` `NEW`
1. [en王翊恩回应离过婚](https://s.weibo.com/weibo?q=%23en%E7%8E%8B%E7%BF%8A%E6%81%A9%E5%9B%9E%E5%BA%94%E7%A6%BB%E8%BF%87%E5%A9%9A%23) `109.7K 🔥` `NEW`
1. [妻子5次试管成功同年丈夫与情人生子](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%905%E6%AC%A1%E8%AF%95%E7%AE%A1%E6%88%90%E5%8A%9F%E5%90%8C%E5%B9%B4%E4%B8%88%E5%A4%AB%E4%B8%8E%E6%83%85%E4%BA%BA%E7%94%9F%E5%AD%90%23) `107.7K 🔥` `NEW`
1. [宋雨琦对接回应不录跑男](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E5%AF%B9%E6%8E%A5%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%BD%95%E8%B7%91%E7%94%B7%23) `107.0K 🔥` `NEW`
1. [徐明浩跳catchcatch](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%98%8E%E6%B5%A9%E8%B7%B3catchcatch%23) `106.2K 🔥` `NEW`
1. [张雪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `104.5K 🔥` `NEW`
1. [en王翊恩 结婚但没同居](https://s.weibo.com/weibo?q=%23en%E7%8E%8B%E7%BF%8A%E6%81%A9%20%E7%BB%93%E5%A9%9A%E4%BD%86%E6%B2%A1%E5%90%8C%E5%B1%85%23) `103.4K 🔥` `NEW`
1. [唐艺昕人气](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E4%BA%BA%E6%B0%94%23) `103.3K 🔥` `NEW`
1. [黄金六轮史诗级跳水](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%85%AD%E8%BD%AE%E5%8F%B2%E8%AF%97%E7%BA%A7%E8%B7%B3%E6%B0%B4%23) `102.0K 🔥` `NEW`
1. [网红小徐自曝财产](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B0%8F%E5%BE%90%E8%87%AA%E6%9B%9D%E8%B4%A2%E4%BA%A7%23) `101.2K 🔥` `NEW`
1. [NCTWISH](https://s.weibo.com/weibo?q=%23NCTWISH%23) `99.0K 🔥` `NEW`
1. [Ruler可能面临禁赛](https://s.weibo.com/weibo?q=%23Ruler%E5%8F%AF%E8%83%BD%E9%9D%A2%E4%B8%B4%E7%A6%81%E8%B5%9B%23) `87.9K 🔥` `NEW`
1. [俄方拒绝给日本供油](https://s.weibo.com/weibo?q=%23%E4%BF%84%E6%96%B9%E6%8B%92%E7%BB%9D%E7%BB%99%E6%97%A5%E6%9C%AC%E4%BE%9B%E6%B2%B9%23) `81.8K 🔥` `NEW`
1. [妻子14岁起陪张雪白手起家](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%9014%E5%B2%81%E8%B5%B7%E9%99%AA%E5%BC%A0%E9%9B%AA%E7%99%BD%E6%89%8B%E8%B5%B7%E5%AE%B6%23) `79.9K 🔥` `NEW`
1. [王者荣耀返场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E8%BF%94%E5%9C%BA%23) `79.8K 🔥` `NEW`
1. [TES 369](https://s.weibo.com/weibo?q=%23TES%20369%23) `77.7K 🔥` `NEW`
1. [浪姐](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `77.2K 🔥` `NEW`
1. [女子回应获3亿遗产引丈夫子女不满](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E8%8E%B73%E4%BA%BF%E9%81%97%E4%BA%A7%E5%BC%95%E4%B8%88%E5%A4%AB%E5%AD%90%E5%A5%B3%E4%B8%8D%E6%BB%A1%23) `75.4K 🔥` `NEW`
1. [郭敬明终于能睡着了](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E7%BB%88%E4%BA%8E%E8%83%BD%E7%9D%A1%E7%9D%80%E4%BA%86%23) `72.9K 🔥` `NEW`
1. [陶昕然人气](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E4%BA%BA%E6%B0%94%23) `67.5K 🔥` `NEW`
1. [提升减肥成功率的小技巧 (Tips to improve your weight loss success rate)](https://s.weibo.com/weibo?q=%23%E6%8F%90%E5%8D%87%E5%87%8F%E8%82%A5%E6%88%90%E5%8A%9F%E7%8E%87%E7%9A%84%E5%B0%8F%E6%8A%80%E5%B7%A7%23) `67.0K 🔥` `NEW`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `65.7K 🔥` `NEW`
1. [孙艺珍庆祝与玄彬结婚四周年](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%89%BA%E7%8F%8D%E5%BA%86%E7%A5%9D%E4%B8%8E%E7%8E%84%E5%BD%AC%E7%BB%93%E5%A9%9A%E5%9B%9B%E5%91%A8%E5%B9%B4%23) `63.4K 🔥` `NEW`
1. [十二星座4月月运](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%8C%E6%98%9F%E5%BA%A74%E6%9C%88%E6%9C%88%E8%BF%90%23) `62.3K 🔥` `NEW`
1. [甄嬛传姐妹为孙俪新剧宣传](https://s.weibo.com/weibo?q=%23%E7%94%84%E5%AC%9B%E4%BC%A0%E5%A7%90%E5%A6%B9%E4%B8%BA%E5%AD%99%E4%BF%AA%E6%96%B0%E5%89%A7%E5%AE%A3%E4%BC%A0%23) `61.3K 🔥` `NEW`
1. [宋雨琦 跑男](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%20%E8%B7%91%E7%94%B7%23) `59.9K 🔥` `NEW`
1. [盗墓笔记](https://s.weibo.com/weibo?q=%23%E7%9B%97%E5%A2%93%E7%AC%94%E8%AE%B0%23) `57.4K 🔥` `NEW`
1. [四川一知名小学周边小区不能入读](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E4%B8%80%E7%9F%A5%E5%90%8D%E5%B0%8F%E5%AD%A6%E5%91%A8%E8%BE%B9%E5%B0%8F%E5%8C%BA%E4%B8%8D%E8%83%BD%E5%85%A5%E8%AF%BB%23) `56.4K 🔥` `NEW`
1. [时代少年团 录播](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%BD%95%E6%92%AD%23) `56.3K 🔥` `NEW`
1. [美军进攻伊朗岛屿将变成活靶子](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%BF%9B%E6%94%BB%E4%BC%8A%E6%9C%97%E5%B2%9B%E5%B1%BF%E5%B0%86%E5%8F%98%E6%88%90%E6%B4%BB%E9%9D%B6%E5%AD%90%23) `54.6K 🔥` `NEW`
1. [Jiwoo大吧 豆包 (Jiwoo Daba Bean Bao)](https://s.weibo.com/weibo?q=%23Jiwoo%E5%A4%A7%E5%90%A7%20%E8%B1%86%E5%8C%85%23) `54.2K 🔥` `NEW`

Updated at 2026-04-01 00:39:07

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
