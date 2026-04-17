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

1. [北影节主持人裙子 吸雨变色 (Beijing Film Festival host's skirt changes color after absorbing rain)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%BD%B1%E8%8A%82%E4%B8%BB%E6%8C%81%E4%BA%BA%E8%A3%99%E5%AD%90%20%E5%90%B8%E9%9B%A8%E5%8F%98%E8%89%B2%23) `1.1M 🔥` `NEW`
1. [雷军回应是否做10万以内车型](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E5%81%9A10%E4%B8%87%E4%BB%A5%E5%86%85%E8%BD%A6%E5%9E%8B%23) `819.9K 🔥` `NEW`
1. [首发首展首秀集中亮相消博会](https://s.weibo.com/weibo?q=%23%E9%A6%96%E5%8F%91%E9%A6%96%E5%B1%95%E9%A6%96%E7%A7%80%E9%9B%86%E4%B8%AD%E4%BA%AE%E7%9B%B8%E6%B6%88%E5%8D%9A%E4%BC%9A%23) `643.4K 🔥` `NEW`
1. [京东携大疆刷新北影节出片新高度](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E6%90%BA%E5%A4%A7%E7%96%86%E5%88%B7%E6%96%B0%E5%8C%97%E5%BD%B1%E8%8A%82%E5%87%BA%E7%89%87%E6%96%B0%E9%AB%98%E5%BA%A6%23) `615.7K 🔥` `NEW`
1. [章若楠片场拍戏走神](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%89%87%E5%9C%BA%E6%8B%8D%E6%88%8F%E8%B5%B0%E7%A5%9E%23) `600.8K 🔥` `NEW`
1. [爸爸 又怎么了我的大小姐](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%20%E5%8F%88%E6%80%8E%E4%B9%88%E4%BA%86%E6%88%91%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%A7%90%23) `500.0K 🔥` `NEW`
1. [中国女生在韩遭男子性骚扰被劝和解](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%9C%A8%E9%9F%A9%E9%81%AD%E7%94%B7%E5%AD%90%E6%80%A7%E9%AA%9A%E6%89%B0%E8%A2%AB%E5%8A%9D%E5%92%8C%E8%A7%A3%23) `277.8K 🔥` `NEW`
1. [LPL星火逐梦破界新生](https://s.weibo.com/weibo?q=%23LPL%E6%98%9F%E7%81%AB%E9%80%90%E6%A2%A6%E7%A0%B4%E7%95%8C%E6%96%B0%E7%94%9F%23) `272.2K 🔥` `NEW`
1. [中国向伊朗提供58吨物资援助](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%90%91%E4%BC%8A%E6%9C%97%E6%8F%90%E4%BE%9B58%E5%90%A8%E7%89%A9%E8%B5%84%E6%8F%B4%E5%8A%A9%23) `257.1K 🔥` `NEW`
1. [幼儿园老师回应睡过头被孩子们叫醒](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E8%80%81%E5%B8%88%E5%9B%9E%E5%BA%94%E7%9D%A1%E8%BF%87%E5%A4%B4%E8%A2%AB%E5%AD%A9%E5%AD%90%E4%BB%AC%E5%8F%AB%E9%86%92%23) `237.4K 🔥` `NEW`
1. [乘风二公真人秀 (Chengfeng Ergong reality show)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E4%BA%8C%E5%85%AC%E7%9C%9F%E4%BA%BA%E7%A7%80%23) `185.7K 🔥` `NEW`
1. [章若楠工作室喊话剧方](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%96%8A%E8%AF%9D%E5%89%A7%E6%96%B9%23) `152.1K 🔥` `NEW`
1. [单依纯王菲 撞造型](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E7%8E%8B%E8%8F%B2%20%E6%92%9E%E9%80%A0%E5%9E%8B%23) `149.1K 🔥` `NEW`
1. [被泼水致冒烟车辆刚买3个月](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%B3%BC%E6%B0%B4%E8%87%B4%E5%86%92%E7%83%9F%E8%BD%A6%E8%BE%86%E5%88%9A%E4%B9%B03%E4%B8%AA%E6%9C%88%23) `148.2K 🔥` `NEW`
1. [鹿晗工作室 躺平](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E8%BA%BA%E5%B9%B3%23) `142.6K 🔥` `NEW`
1. [醉酒男10分钟搭讪女子3次被扇飞眼镜](https://s.weibo.com/weibo?q=%23%E9%86%89%E9%85%92%E7%94%B710%E5%88%86%E9%92%9F%E6%90%AD%E8%AE%AA%E5%A5%B3%E5%AD%903%E6%AC%A1%E8%A2%AB%E6%89%87%E9%A3%9E%E7%9C%BC%E9%95%9C%23) `137.7K 🔥` `NEW`
1. [AG 狂魔哥](https://s.weibo.com/weibo?q=%23AG%20%E7%8B%82%E9%AD%94%E5%93%A5%23) `133.7K 🔥` `NEW`
1. [郑丽文说去了一趟大陆心都定了](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E8%AF%B4%E5%8E%BB%E4%BA%86%E4%B8%80%E8%B6%9F%E5%A4%A7%E9%99%86%E5%BF%83%E9%83%BD%E5%AE%9A%E4%BA%86%23) `131.2K 🔥` `NEW`
1. [以色列剧本被撕了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%89%A7%E6%9C%AC%E8%A2%AB%E6%92%95%E4%BA%86%23) `131.1K 🔥` `NEW`
1. [钟汉良曾被9岁郭晓婷拒绝加好友](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%B1%89%E8%89%AF%E6%9B%BE%E8%A2%AB9%E5%B2%81%E9%83%AD%E6%99%93%E5%A9%B7%E6%8B%92%E7%BB%9D%E5%8A%A0%E5%A5%BD%E5%8F%8B%23) `130.8K 🔥` `NEW`
1. [贝嫂回应与大儿子决裂 (Beckham responds to breakup with eldest son)](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%AB%82%E5%9B%9E%E5%BA%94%E4%B8%8E%E5%A4%A7%E5%84%BF%E5%AD%90%E5%86%B3%E8%A3%82%23) `130.6K 🔥` `NEW`
1. [张若昀从浪姐的全世界路过](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E4%BB%8E%E6%B5%AA%E5%A7%90%E7%9A%84%E5%85%A8%E4%B8%96%E7%95%8C%E8%B7%AF%E8%BF%87%23) `130.6K 🔥` `NEW`
1. [最讨厌男人惹 清清](https://s.weibo.com/weibo?q=%23%E6%9C%80%E8%AE%A8%E5%8E%8C%E7%94%B7%E4%BA%BA%E6%83%B9%20%E6%B8%85%E6%B8%85%23) `129.8K 🔥` `NEW`
1. [原来舒服也是一种科学](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%88%92%E6%9C%8D%E4%B9%9F%E6%98%AF%E4%B8%80%E7%A7%8D%E7%A7%91%E5%AD%A6%23) `128.6K 🔥` `NEW`
1. [全球航班大规模取消](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%88%AA%E7%8F%AD%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%8F%96%E6%B6%88%23) `126.2K 🔥` `NEW`
1. [北影节红毯下车名场面](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%BD%B1%E8%8A%82%E7%BA%A2%E6%AF%AF%E4%B8%8B%E8%BD%A6%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `124.3K 🔥` `NEW`
1. [11.58万拿下30万级高阶辅助驾驶](https://s.weibo.com/weibo?q=%2311.58%E4%B8%87%E6%8B%BF%E4%B8%8B30%E4%B8%87%E7%BA%A7%E9%AB%98%E9%98%B6%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%23) `123.0K 🔥` `NEW`
1. [陈冠希撞脸赵本山](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%86%A0%E5%B8%8C%E6%92%9E%E8%84%B8%E8%B5%B5%E6%9C%AC%E5%B1%B1%23) `121.2K 🔥` `NEW`
1. [包洁仪回应凄惨身世是假的](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%B4%81%E4%BB%AA%E5%9B%9E%E5%BA%94%E5%87%84%E6%83%A8%E8%BA%AB%E4%B8%96%E6%98%AF%E5%81%87%E7%9A%84%23) `119.4K 🔥` `NEW`
1. [已读但不乱回](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E8%AF%BB%E4%BD%86%E4%B8%8D%E4%B9%B1%E5%9B%9E%23) `119.2K 🔥` `NEW`
1. [阿拉蕾长这么高了 (Arale has grown so tall)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%8B%89%E8%95%BE%E9%95%BF%E8%BF%99%E4%B9%88%E9%AB%98%E4%BA%86%23) `118.1K 🔥` `NEW`
1. [理解老一辈送米面油的含金量了](https://s.weibo.com/weibo?q=%23%E7%90%86%E8%A7%A3%E8%80%81%E4%B8%80%E8%BE%88%E9%80%81%E7%B1%B3%E9%9D%A2%E6%B2%B9%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E4%BA%86%23) `114.8K 🔥` `NEW`
1. [房主任两周减重12斤](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E4%B8%A4%E5%91%A8%E5%87%8F%E9%87%8D12%E6%96%A4%23) `111.8K 🔥` `NEW`
1. [12306回应五一开票即候补](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E4%BA%94%E4%B8%80%E5%BC%80%E7%A5%A8%E5%8D%B3%E5%80%99%E8%A1%A5%23) `104.5K 🔥` `NEW`
1. [月鳞绮纪大结局](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E5%A4%A7%E7%BB%93%E5%B1%80%23) `103.7K 🔥` `NEW`
1. [广州越秀公园惊现猫蛇大战](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E8%B6%8A%E7%A7%80%E5%85%AC%E5%9B%AD%E6%83%8A%E7%8E%B0%E7%8C%AB%E8%9B%87%E5%A4%A7%E6%88%98%23) `103.2K 🔥` `NEW`
1. [菠萝鸡排](https://s.weibo.com/weibo?q=%23%E8%8F%A0%E8%90%9D%E9%B8%A1%E6%8E%92%23) `103.2K 🔥` `NEW`
1. [雷军直播](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%9B%B4%E6%92%AD%23) `102.2K 🔥` `NEW`
1. [TF四代 八小只](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%20%E5%85%AB%E5%B0%8F%E5%8F%AA%23) `100.5K 🔥` `NEW`
1. [夫妻俩捡到铁疙瘩一查是文物](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E4%BF%A9%E6%8D%A1%E5%88%B0%E9%93%81%E7%96%99%E7%98%A9%E4%B8%80%E6%9F%A5%E6%98%AF%E6%96%87%E7%89%A9%23) `82.2K 🔥` `NEW`
1. [白玉兰官网放唐嫣C位照 (Magnolia official website releases Tang Yan’s C-position photo)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E5%AE%98%E7%BD%91%E6%94%BE%E5%94%90%E5%AB%A3C%E4%BD%8D%E7%85%A7%23) `81.9K 🔥` `NEW`
1. [张颂文站起来和沈腾打招呼](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A2%82%E6%96%87%E7%AB%99%E8%B5%B7%E6%9D%A5%E5%92%8C%E6%B2%88%E8%85%BE%E6%89%93%E6%8B%9B%E5%91%BC%23) `78.9K 🔥` `NEW`
1. [高反原理](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8F%8D%E5%8E%9F%E7%90%86%23) `77.6K 🔥` `NEW`
1. [刘宇宁下班拐进工作人员休息室](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E4%B8%8B%E7%8F%AD%E6%8B%90%E8%BF%9B%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E4%BC%91%E6%81%AF%E5%AE%A4%23) `76.9K 🔥` `NEW`
1. [教资成绩](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%B5%84%E6%88%90%E7%BB%A9%23) `76.7K 🔥` `NEW`
1. [郝熠然终止代言诚实一口](https://s.weibo.com/weibo?q=%23%E9%83%9D%E7%86%A0%E7%84%B6%E7%BB%88%E6%AD%A2%E4%BB%A3%E8%A8%80%E8%AF%9A%E5%AE%9E%E4%B8%80%E5%8F%A3%23) `132.8K 🔥` `+69%`
1. [曝清清性骚扰 (Qingqing sexual harassment exposed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B8%85%E6%B8%85%E6%80%A7%E9%AA%9A%E6%89%B0%23) `131.0K 🔥`
1. [清清否认性骚扰](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%B8%85%E5%90%A6%E8%AE%A4%E6%80%A7%E9%AA%9A%E6%89%B0%23) `130.8K 🔥`
1. [肺癌成中国女性第一大癌症 (Lung cancer becomes the number one cancer among Chinese women)](https://s.weibo.com/weibo?q=%23%E8%82%BA%E7%99%8C%E6%88%90%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%80%A7%E7%AC%AC%E4%B8%80%E5%A4%A7%E7%99%8C%E7%97%87%23) `155.4K 🔥` `-41%`
1. [诚实一口道歉](https://s.weibo.com/weibo?q=%23%E8%AF%9A%E5%AE%9E%E4%B8%80%E5%8F%A3%E9%81%93%E6%AD%89%23) `139.6K 🔥` `-32%`
1. [四大一线城市房价全涨 (House prices in four major first-tier cities all rose)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%A4%A7%E4%B8%80%E7%BA%BF%E5%9F%8E%E5%B8%82%E6%88%BF%E4%BB%B7%E5%85%A8%E6%B6%A8%23) `127.4K 🔥` `-88%`
1. [清清 指尖](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%B8%85%20%E6%8C%87%E5%B0%96%23) `83.9K 🔥` `-26%`

Updated at 2026-04-17 12:22:45

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
