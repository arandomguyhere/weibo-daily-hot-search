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

1. [财政部将向中国人寿集团注资350亿](https://s.weibo.com/weibo?q=%23%E8%B4%A2%E6%94%BF%E9%83%A8%E5%B0%86%E5%90%91%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%AF%BF%E9%9B%86%E5%9B%A2%E6%B3%A8%E8%B5%84350%E4%BA%BF%23) `1.2M 🔥` `NEW`
1. [内蒙古婚内强奸案件最新进展](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%92%99%E5%8F%A4%E5%A9%9A%E5%86%85%E5%BC%BA%E5%A5%B8%E6%A1%88%E4%BB%B6%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `863.6K 🔥` `NEW`
1. [本周这些数据值得关注](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E8%BF%99%E4%BA%9B%E6%95%B0%E6%8D%AE%E5%80%BC%E5%BE%97%E5%85%B3%E6%B3%A8%23) `703.4K 🔥` `NEW`
1. [iPhone18Pro 配色](https://s.weibo.com/weibo?q=%23iPhone18Pro%20%E9%85%8D%E8%89%B2%23) `475.1K 🔥` `NEW`
1. [ig离冒泡赛只差一步](https://s.weibo.com/weibo?q=%23ig%E7%A6%BB%E5%86%92%E6%B3%A1%E8%B5%9B%E5%8F%AA%E5%B7%AE%E4%B8%80%E6%AD%A5%23) `347.4K 🔥` `NEW`
1. [iG绝境翻盘WE](https://s.weibo.com/weibo?q=%23iG%E7%BB%9D%E5%A2%83%E7%BF%BB%E7%9B%98WE%23) `254.2K 🔥` `NEW`
1. [郑钦文创大满贯历史纪录](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%88%9B%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%8E%86%E5%8F%B2%E7%BA%AA%E5%BD%95%23) `242.6K 🔥` `NEW`
1. [花少2穿搭](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E7%A9%BF%E6%90%AD%23) `242.2K 🔥` `NEW`
1. [陈妍希和儿子起争执](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%92%8C%E5%84%BF%E5%AD%90%E8%B5%B7%E4%BA%89%E6%89%A7%23) `241.7K 🔥` `NEW`
1. [气温预报图上北方由黄变绿](https://s.weibo.com/weibo?q=%23%E6%B0%94%E6%B8%A9%E9%A2%84%E6%8A%A5%E5%9B%BE%E4%B8%8A%E5%8C%97%E6%96%B9%E7%94%B1%E9%BB%84%E5%8F%98%E7%BB%BF%23) `241.5K 🔥` `NEW`
1. [丁程鑫手伤是断掉了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E6%89%8B%E4%BC%A4%E6%98%AF%E6%96%AD%E6%8E%89%E4%BA%86%23) `240.8K 🔥` `NEW`
1. [锤娜丽莎回应打针减肥质疑](https://s.weibo.com/weibo?q=%23%E9%94%A4%E5%A8%9C%E4%B8%BD%E8%8E%8E%E5%9B%9E%E5%BA%94%E6%89%93%E9%92%88%E5%87%8F%E8%82%A5%E8%B4%A8%E7%96%91%23) `240.4K 🔥` `NEW`
1. [离婚冷静期分居期间遭强奸](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%A9%9A%E5%86%B7%E9%9D%99%E6%9C%9F%E5%88%86%E5%B1%85%E6%9C%9F%E9%97%B4%E9%81%AD%E5%BC%BA%E5%A5%B8%23) `239.8K 🔥` `NEW`
1. [王一博赛车被撞退赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%B5%9B%E8%BD%A6%E8%A2%AB%E6%92%9E%E9%80%80%E8%B5%9B%23) `238.7K 🔥` `NEW`
1. [剧本杀 网贷](https://s.weibo.com/weibo?q=%23%E5%89%A7%E6%9C%AC%E6%9D%80%20%E7%BD%91%E8%B4%B7%23) `238.4K 🔥` `NEW`
1. [张雅琪七个蛋变五个蛋](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E4%B8%83%E4%B8%AA%E8%9B%8B%E5%8F%98%E4%BA%94%E4%B8%AA%E8%9B%8B%23) `237.8K 🔥` `NEW`
1. [这大概就是AI发展的意义](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%A4%A7%E6%A6%82%E5%B0%B1%E6%98%AFAI%E5%8F%91%E5%B1%95%E7%9A%84%E6%84%8F%E4%B9%89%23) `237.2K 🔥` `NEW`
1. [luke姐姐那一脚可以看十遍](https://s.weibo.com/weibo?q=%23luke%E5%A7%90%E5%A7%90%E9%82%A3%E4%B8%80%E8%84%9A%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%8D%81%E9%81%8D%23) `236.9K 🔥` `NEW`
1. [iPhone18Pro售价曝光](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%94%AE%E4%BB%B7%E6%9B%9D%E5%85%89%23) `236.3K 🔥` `NEW`
1. [张纪中妻子备孕5胎](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BA%AA%E4%B8%AD%E5%A6%BB%E5%AD%90%E5%A4%87%E5%AD%955%E8%83%8E%23) `236.1K 🔥` `NEW`
1. [曝白玉兰视后票数很接近](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%90%8E%E7%A5%A8%E6%95%B0%E5%BE%88%E6%8E%A5%E8%BF%91%23) `235.4K 🔥` `NEW`
1. [医生淘洗粪便3小时找到肝吸虫](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%B7%98%E6%B4%97%E7%B2%AA%E4%BE%BF3%E5%B0%8F%E6%97%B6%E6%89%BE%E5%88%B0%E8%82%9D%E5%90%B8%E8%99%AB%23) `234.9K 🔥` `NEW`
1. [解说称王一博赛车事故肯定会受到调查](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E8%AF%B4%E7%A7%B0%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%B5%9B%E8%BD%A6%E4%BA%8B%E6%95%85%E8%82%AF%E5%AE%9A%E4%BC%9A%E5%8F%97%E5%88%B0%E8%B0%83%E6%9F%A5%23) `234.3K 🔥` `NEW`
1. [曝长江国际十八楼搬空了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%95%BF%E6%B1%9F%E5%9B%BD%E9%99%85%E5%8D%81%E5%85%AB%E6%A5%BC%E6%90%AC%E7%A9%BA%E4%BA%86%23) `233.8K 🔥` `NEW`
1. [农行工行合计拟募资不超过2600亿](https://s.weibo.com/weibo?q=%23%E5%86%9C%E8%A1%8C%E5%B7%A5%E8%A1%8C%E5%90%88%E8%AE%A1%E6%8B%9F%E5%8B%9F%E8%B5%84%E4%B8%8D%E8%B6%85%E8%BF%872600%E4%BA%BF%23) `233.6K 🔥` `NEW`
1. [王楚钦林诗栋退赛WTT](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%9E%97%E8%AF%97%E6%A0%8B%E9%80%80%E8%B5%9BWTT%23) `225.9K 🔥` `NEW`
1. [杨超越上台发现全是熟人局](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E4%B8%8A%E5%8F%B0%E5%8F%91%E7%8E%B0%E5%85%A8%E6%98%AF%E7%86%9F%E4%BA%BA%E5%B1%80%23) `212.1K 🔥` `NEW`
1. [井柏然孙千手写感谢信](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E6%89%8B%E5%86%99%E6%84%9F%E8%B0%A2%E4%BF%A1%23) `212.0K 🔥` `NEW`
1. [北京警方认定卖黄金研究生未犯罪](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E8%AD%A6%E6%96%B9%E8%AE%A4%E5%AE%9A%E5%8D%96%E9%BB%84%E9%87%91%E7%A0%94%E7%A9%B6%E7%94%9F%E6%9C%AA%E7%8A%AF%E7%BD%AA%23) `208.2K 🔥` `NEW`
1. [恋陪本 日本牛郎](https://s.weibo.com/weibo?q=%23%E6%81%8B%E9%99%AA%E6%9C%AC%20%E6%97%A5%E6%9C%AC%E7%89%9B%E9%83%8E%23) `203.1K 🔥` `NEW`
1. [早春晴朗太火了](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%A4%AA%E7%81%AB%E4%BA%86%23) `190.4K 🔥` `NEW`
1. [张家齐喜欢王鹤棣有迹可循](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%96%9C%E6%AC%A2%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%9C%89%E8%BF%B9%E5%8F%AF%E5%BE%AA%23) `189.9K 🔥` `NEW`
1. [女童和男童的内裤差别](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%AB%A5%E5%92%8C%E7%94%B7%E7%AB%A5%E7%9A%84%E5%86%85%E8%A3%A4%E5%B7%AE%E5%88%AB%23) `189.0K 🔥` `NEW`
1. [丁程鑫vlog里的张真源](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%ABvlog%E9%87%8C%E7%9A%84%E5%BC%A0%E7%9C%9F%E6%BA%90%23) `188.6K 🔥` `NEW`
1. [雷军感谢各方祝福小米彭程](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%84%9F%E8%B0%A2%E5%90%84%E6%96%B9%E7%A5%9D%E7%A6%8F%E5%B0%8F%E7%B1%B3%E5%BD%AD%E7%A8%8B%23) `181.6K 🔥` `NEW`
1. [顾客店内拆箱调换山姆礼盒水果](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%AE%A2%E5%BA%97%E5%86%85%E6%8B%86%E7%AE%B1%E8%B0%83%E6%8D%A2%E5%B1%B1%E5%A7%86%E7%A4%BC%E7%9B%92%E6%B0%B4%E6%9E%9C%23) `174.4K 🔥` `NEW`
1. [曾辉狂吃孙楠的金陵双臭](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E7%8B%82%E5%90%83%E5%AD%99%E6%A5%A0%E7%9A%84%E9%87%91%E9%99%B5%E5%8F%8C%E8%87%AD%23) `172.6K 🔥` `NEW`
1. [张馨予晒度假视频说不要过多揣测](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E6%99%92%E5%BA%A6%E5%81%87%E8%A7%86%E9%A2%91%E8%AF%B4%E4%B8%8D%E8%A6%81%E8%BF%87%E5%A4%9A%E6%8F%A3%E6%B5%8B%23) `171.8K 🔥` `NEW`
1. [杨毅看郑钦文0比5以为输定了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%AF%85%E7%9C%8B%E9%83%91%E9%92%A6%E6%96%870%E6%AF%945%E4%BB%A5%E4%B8%BA%E8%BE%93%E5%AE%9A%E4%BA%86%23) `158.3K 🔥` `NEW`
1. [陈浚铭生地会考补考](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%9A%E9%93%AD%E7%94%9F%E5%9C%B0%E4%BC%9A%E8%80%83%E8%A1%A5%E8%80%83%23) `149.6K 🔥` `NEW`
1. [纪姿含回应落榜北电](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E5%A7%BF%E5%90%AB%E5%9B%9E%E5%BA%94%E8%90%BD%E6%A6%9C%E5%8C%97%E7%94%B5%23) `149.6K 🔥` `NEW`
1. [AlexandraTrusova](https://s.weibo.com/weibo?q=%23AlexandraTrusova%23) `145.5K 🔥` `NEW`
1. [爷爷提前剪葫芦是给流量的一记耳光](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E6%8F%90%E5%89%8D%E5%89%AA%E8%91%AB%E8%8A%A6%E6%98%AF%E7%BB%99%E6%B5%81%E9%87%8F%E7%9A%84%E4%B8%80%E8%AE%B0%E8%80%B3%E5%85%89%23) `141.2K 🔥` `NEW`
1. [中国人寿注资分析](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%AF%BF%E6%B3%A8%E8%B5%84%E5%88%86%E6%9E%90%23) `136.3K 🔥` `NEW`
1. [教育局回应小学通知家长到校打扫卫生](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E5%B0%8F%E5%AD%A6%E9%80%9A%E7%9F%A5%E5%AE%B6%E9%95%BF%E5%88%B0%E6%A0%A1%E6%89%93%E6%89%AB%E5%8D%AB%E7%94%9F%23) `135.4K 🔥` `NEW`
1. [提前剪掉的7个葫芦讽刺了谁](https://s.weibo.com/weibo?q=%23%E6%8F%90%E5%89%8D%E5%89%AA%E6%8E%89%E7%9A%847%E4%B8%AA%E8%91%AB%E8%8A%A6%E8%AE%BD%E5%88%BA%E4%BA%86%E8%B0%81%23) `310.2K 🔥` `-62%`
1. [陈妍希想要二胎](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%83%B3%E8%A6%81%E4%BA%8C%E8%83%8E%23) `239.2K 🔥` `-66%`
1. [葫芦娃爷爷家附近居民发声](https://s.weibo.com/weibo?q=%23%E8%91%AB%E8%8A%A6%E5%A8%83%E7%88%B7%E7%88%B7%E5%AE%B6%E9%99%84%E8%BF%91%E5%B1%85%E6%B0%91%E5%8F%91%E5%A3%B0%23) `213.6K 🔥` `-38%`
1. [去香港看演唱会被取消低保](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E9%A6%99%E6%B8%AF%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A2%AB%E5%8F%96%E6%B6%88%E4%BD%8E%E4%BF%9D%23) `211.2K 🔥` `-35%`
1. [研究生卖黄金所得12.4万被跨省冻结](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E7%94%9F%E5%8D%96%E9%BB%84%E9%87%91%E6%89%80%E5%BE%9712.4%E4%B8%87%E8%A2%AB%E8%B7%A8%E7%9C%81%E5%86%BB%E7%BB%93%23) `194.1K 🔥` `-64%`

Updated at 2026-09-06 18:58:11

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
