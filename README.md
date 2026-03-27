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

1. [海南自贸港封关运作100天 (Hainan Free Trade Port closed for 100 days)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8D%97%E8%87%AA%E8%B4%B8%E6%B8%AF%E5%B0%81%E5%85%B3%E8%BF%90%E4%BD%9C100%E5%A4%A9%23) `764.5K 🔥` `NEW`
1. [Naiyou终身禁赛](https://s.weibo.com/weibo?q=%23Naiyou%E7%BB%88%E8%BA%AB%E7%A6%81%E8%B5%9B%23) `710.4K 🔥` `NEW`
1. [相亲型社交](https://s.weibo.com/weibo?q=%23%E7%9B%B8%E4%BA%B2%E5%9E%8B%E7%A4%BE%E4%BA%A4%23) `351.6K 🔥` `NEW`
1. [KPL选手春日竞记](https://s.weibo.com/weibo?q=%23KPL%E9%80%89%E6%89%8B%E6%98%A5%E6%97%A5%E7%AB%9E%E8%AE%B0%23) `347.6K 🔥` `NEW`
1. [乘风2026师姐帮帮唱](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%B8%88%E5%A7%90%E5%B8%AE%E5%B8%AE%E5%94%B1%23) `261.8K 🔥` `NEW`
1. [多位寻亲家长给梅姨同居者下跪](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BD%8D%E5%AF%BB%E4%BA%B2%E5%AE%B6%E9%95%BF%E7%BB%99%E6%A2%85%E5%A7%A8%E5%90%8C%E5%B1%85%E8%80%85%E4%B8%8B%E8%B7%AA%23) `231.3K 🔥` `NEW`
1. [郭麒麟对接回应KTV传闻](https://s.weibo.com/weibo?q=%23%E9%83%AD%E9%BA%92%E9%BA%9F%E5%AF%B9%E6%8E%A5%E5%9B%9E%E5%BA%94KTV%E4%BC%A0%E9%97%BB%23) `226.8K 🔥` `NEW`
1. [曾沛慈终于上浪姐了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E7%BB%88%E4%BA%8E%E4%B8%8A%E6%B5%AA%E5%A7%90%E4%BA%86%23) `199.5K 🔥` `NEW`
1. [社保基金多次在A股大跌时果断加仓](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%E5%9F%BA%E9%87%91%E5%A4%9A%E6%AC%A1%E5%9C%A8A%E8%82%A1%E5%A4%A7%E8%B7%8C%E6%97%B6%E6%9E%9C%E6%96%AD%E5%8A%A0%E4%BB%93%23) `133.0K 🔥` `NEW`
1. [熬夜的人要多吃一类食物](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E7%9A%84%E4%BA%BA%E8%A6%81%E5%A4%9A%E5%90%83%E4%B8%80%E7%B1%BB%E9%A3%9F%E7%89%A9%23) `130.8K 🔥` `NEW`
1. [让魏哲鸣郑合惠子演暗恋的是天才 (Letting Wei Zheming and Zheng Hehui Zi play the secret love is a genius)](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E9%AD%8F%E5%93%B2%E9%B8%A3%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E6%BC%94%E6%9A%97%E6%81%8B%E7%9A%84%E6%98%AF%E5%A4%A9%E6%89%8D%23) `130.6K 🔥` `NEW`
1. [遭外机雷达照射歼10C飞行员以牙还牙](https://s.weibo.com/weibo?q=%23%E9%81%AD%E5%A4%96%E6%9C%BA%E9%9B%B7%E8%BE%BE%E7%85%A7%E5%B0%84%E6%AD%BC10C%E9%A3%9E%E8%A1%8C%E5%91%98%E4%BB%A5%E7%89%99%E8%BF%98%E7%89%99%23) `130.3K 🔥` `NEW`
1. [你们相亲都那么好笑吗](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E7%9B%B8%E4%BA%B2%E9%83%BD%E9%82%A3%E4%B9%88%E5%A5%BD%E7%AC%91%E5%90%97%23) `130.2K 🔥` `NEW`
1. [库拉索首发身价是国足2倍](https://s.weibo.com/weibo?q=%23%E5%BA%93%E6%8B%89%E7%B4%A2%E9%A6%96%E5%8F%91%E8%BA%AB%E4%BB%B7%E6%98%AF%E5%9B%BD%E8%B6%B32%E5%80%8D%23) `129.6K 🔥` `NEW`
1. [国足领先库拉索](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E9%A2%86%E5%85%88%E5%BA%93%E6%8B%89%E7%B4%A2%23) `120.9K 🔥` `NEW`
1. [范玮琪这一次乘风破浪](https://s.weibo.com/weibo?q=%23%E8%8C%83%E7%8E%AE%E7%90%AA%E8%BF%99%E4%B8%80%E6%AC%A1%E4%B9%98%E9%A3%8E%E7%A0%B4%E6%B5%AA%23) `120.4K 🔥` `NEW`
1. [刘海宽拒绝吃陈情令老本](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%B7%E5%AE%BD%E6%8B%92%E7%BB%9D%E5%90%83%E9%99%88%E6%83%85%E4%BB%A4%E8%80%81%E6%9C%AC%23) `117.2K 🔥` `NEW`
1. [库克公开乔布斯临终遗嘱](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%85%8B%E5%85%AC%E5%BC%80%E4%B9%94%E5%B8%83%E6%96%AF%E4%B8%B4%E7%BB%88%E9%81%97%E5%98%B1%23) `106.8K 🔥` `NEW`
1. [张凌赫回应逐玉大结局](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E9%80%90%E7%8E%89%E5%A4%A7%E7%BB%93%E5%B1%80%23) `106.4K 🔥` `NEW`
1. [阚清子乘风2026vlog](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E4%B9%98%E9%A3%8E2026vlog%23) `88.3K 🔥` `NEW`
1. [乌兰图雅 浪姐 (Ulan Tuya Sister Lang)](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%20%E6%B5%AA%E5%A7%90%23) `88.1K 🔥` `NEW`
1. [日本防卫大臣称深感遗憾](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%98%B2%E5%8D%AB%E5%A4%A7%E8%87%A3%E7%A7%B0%E6%B7%B1%E6%84%9F%E9%81%97%E6%86%BE%23) `87.0K 🔥` `NEW`
1. [男子腰疼诊所理疗后四肢瘫痪](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%85%B0%E7%96%BC%E8%AF%8A%E6%89%80%E7%90%86%E7%96%97%E5%90%8E%E5%9B%9B%E8%82%A2%E7%98%AB%E7%97%AA%23) `86.5K 🔥` `NEW`
1. [遭老人撞击后反击男子获刑7个月](https://s.weibo.com/weibo?q=%23%E9%81%AD%E8%80%81%E4%BA%BA%E6%92%9E%E5%87%BB%E5%90%8E%E5%8F%8D%E5%87%BB%E7%94%B7%E5%AD%90%E8%8E%B7%E5%88%917%E4%B8%AA%E6%9C%88%23) `85.4K 🔥` `NEW`
1. [山东女孩种草莓在迪拜卖268一斤](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E5%A5%B3%E5%AD%A9%E7%A7%8D%E8%8D%89%E8%8E%93%E5%9C%A8%E8%BF%AA%E6%8B%9C%E5%8D%96268%E4%B8%80%E6%96%A4%23) `81.8K 🔥` `NEW`
1. [女教师被拖行5.9公里致死家属发声](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E8%A2%AB%E6%8B%96%E8%A1%8C5.9%E5%85%AC%E9%87%8C%E8%87%B4%E6%AD%BB%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `78.3K 🔥` `NEW`
1. [从两只猫身上看出血缘关系](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E4%B8%A4%E5%8F%AA%E7%8C%AB%E8%BA%AB%E4%B8%8A%E7%9C%8B%E5%87%BA%E8%A1%80%E7%BC%98%E5%85%B3%E7%B3%BB%23) `74.0K 🔥` `NEW`
1. [台湾老板免费请我吃饭](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E8%80%81%E6%9D%BF%E5%85%8D%E8%B4%B9%E8%AF%B7%E6%88%91%E5%90%83%E9%A5%AD%23) `73.5K 🔥` `NEW`
1. [乘风2026官宣阵容](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%AE%98%E5%AE%A3%E9%98%B5%E5%AE%B9%23) `1.1M 🔥` `+683%`
1. [国足vs库拉索](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3vs%E5%BA%93%E6%8B%89%E7%B4%A2%23) `826.2K 🔥` `+214%`
1. [余华定居三亚 (Yu Hua settled in Sanya)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E5%8D%8E%E5%AE%9A%E5%B1%85%E4%B8%89%E4%BA%9A%23) `346.4K 🔥` `+157%`
1. [郭晓婷王天辰杂志 离婚跟拍](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E6%9D%82%E5%BF%97%20%E7%A6%BB%E5%A9%9A%E8%B7%9F%E6%8B%8D%23) `204.4K 🔥` `+24%`
1. [霍尔木兹海峡的最后通牒](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E7%9A%84%E6%9C%80%E5%90%8E%E9%80%9A%E7%89%92%23) `228.3K 🔥`
1. [孔雪儿壁纸是cortis](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E5%A3%81%E7%BA%B8%E6%98%AFcortis%23) `208.3K 🔥`
1. [仅退款还得再给你200的程度](https://s.weibo.com/weibo?q=%23%E4%BB%85%E9%80%80%E6%AC%BE%E8%BF%98%E5%BE%97%E5%86%8D%E7%BB%99%E4%BD%A0200%E7%9A%84%E7%A8%8B%E5%BA%A6%23) `204.6K 🔥`
1. [严浩翔新专概念视频](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%96%B0%E4%B8%93%E6%A6%82%E5%BF%B5%E8%A7%86%E9%A2%91%23) `129.6K 🔥`
1. [乘风2026姐来真的](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%A7%90%E6%9D%A5%E7%9C%9F%E7%9A%84%23) `86.2K 🔥`
1. [大侦探 (great detective)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BE%A6%E6%8E%A2%23) `79.4K 🔥`
1. [乘风2026定档 (Chengfeng 2026 scheduled)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%AE%9A%E6%A1%A3%23) `515.7K 🔥` `-51%`
1. [一声老婆45岁离异女打赏男主播61万 (Yiyi’s wife, a 45-year-old divorced woman, rewards a male anchor with RMB 610,000)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A3%B0%E8%80%81%E5%A9%8645%E5%B2%81%E7%A6%BB%E5%BC%82%E5%A5%B3%E6%89%93%E8%B5%8F%E7%94%B7%E4%B8%BB%E6%92%AD61%E4%B8%87%23) `130.8K 🔥` `-23%`
1. [粉底液将军为何会激起群嘲](https://s.weibo.com/weibo?q=%23%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%E4%B8%BA%E4%BD%95%E4%BC%9A%E6%BF%80%E8%B5%B7%E7%BE%A4%E5%98%B2%23) `130.0K 🔥` `-26%`
1. [吴京 水肿](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E6%B0%B4%E8%82%BF%23) `129.8K 🔥` `-30%`
1. [沈南 谢谢你为寒门学子打造梯子 (Shen Nan, thank you for building a ladder for disadvantaged students.)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E5%8D%97%20%E8%B0%A2%E8%B0%A2%E4%BD%A0%E4%B8%BA%E5%AF%92%E9%97%A8%E5%AD%A6%E5%AD%90%E6%89%93%E9%80%A0%E6%A2%AF%E5%AD%90%23) `124.3K 🔥` `-25%`
1. [张凌赫给张杰送花篮](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%BB%99%E5%BC%A0%E6%9D%B0%E9%80%81%E8%8A%B1%E7%AF%AE%23) `120.7K 🔥` `-56%`
1. [罗技短视频组扣除全部绩效 (Logitech short video group deducts all performance)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%8A%80%E7%9F%AD%E8%A7%86%E9%A2%91%E7%BB%84%E6%89%A3%E9%99%A4%E5%85%A8%E9%83%A8%E7%BB%A9%E6%95%88%23) `117.8K 🔥` `-33%`
1. [白日提灯首播5集](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E9%A6%96%E6%92%AD5%E9%9B%86%23) `101.4K 🔥` `-56%`
1. [寿司郎 SIM卡 (Sushilang SIM card)](https://s.weibo.com/weibo?q=%23%E5%AF%BF%E5%8F%B8%E9%83%8E%20SIM%E5%8D%A1%23) `88.3K 🔥` `-89%`
1. [孔刘曾说后悔没亲金高银](https://s.weibo.com/weibo?q=%23%E5%AD%94%E5%88%98%E6%9B%BE%E8%AF%B4%E5%90%8E%E6%82%94%E6%B2%A1%E4%BA%B2%E9%87%91%E9%AB%98%E9%93%B6%23) `86.9K 🔥` `-41%`
1. [县法院副院长与原告同行同吃同拜佛](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E6%B3%95%E9%99%A2%E5%89%AF%E9%99%A2%E9%95%BF%E4%B8%8E%E5%8E%9F%E5%91%8A%E5%90%8C%E8%A1%8C%E5%90%8C%E5%90%83%E5%90%8C%E6%8B%9C%E4%BD%9B%23) `86.1K 🔥` `-23%`
1. [迪丽热巴答应粉丝63张ccd自拍](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AD%94%E5%BA%94%E7%B2%89%E4%B8%9D63%E5%BC%A0ccd%E8%87%AA%E6%8B%8D%23) `85.9K 🔥` `-39%`
1. [好多明星给张杰演唱会送花篮](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E6%98%8E%E6%98%9F%E7%BB%99%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%81%E8%8A%B1%E7%AF%AE%23) `84.9K 🔥` `-51%`

Updated at 2026-03-27 15:49:46

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
