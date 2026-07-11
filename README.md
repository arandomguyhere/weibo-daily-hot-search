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

1. [温州台风 (Wenzhou Typhoon)](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B7%9E%E5%8F%B0%E9%A3%8E%23) `1.7M 🔥` `NEW`
1. [迪丽热巴拍功夫女足同一时期长这样](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8B%8D%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E5%90%8C%E4%B8%80%E6%97%B6%E6%9C%9F%E9%95%BF%E8%BF%99%E6%A0%B7%23) `1.1M 🔥` `NEW`
1. [侯明昊叫卢昱晓晓晓](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%8F%AB%E5%8D%A2%E6%98%B1%E6%99%93%E6%99%93%E6%99%93%23) `586.4K 🔥` `NEW`
1. [台风巴威已登陆](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%B7%B2%E7%99%BB%E9%99%86%23) `586.0K 🔥` `NEW`
1. [BW](https://s.weibo.com/weibo?q=%23BW%23) `566.6K 🔥` `NEW`
1. [巴威对江苏影响要变大了](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%AF%B9%E6%B1%9F%E8%8B%8F%E5%BD%B1%E5%93%8D%E8%A6%81%E5%8F%98%E5%A4%A7%E4%BA%86%23) `546.5K 🔥` `NEW`
1. [王俊凯把你的小脏手从脸上拿开](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%8A%8A%E4%BD%A0%E7%9A%84%E5%B0%8F%E8%84%8F%E6%89%8B%E4%BB%8E%E8%84%B8%E4%B8%8A%E6%8B%BF%E5%BC%80%23) `543.7K 🔥` `NEW`
1. [晋江崩了](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E5%B4%A9%E4%BA%86%23) `533.5K 🔥` `NEW`
1. [印度女法学生弑母只为接班当公务员](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A5%B3%E6%B3%95%E5%AD%A6%E7%94%9F%E5%BC%91%E6%AF%8D%E5%8F%AA%E4%B8%BA%E6%8E%A5%E7%8F%AD%E5%BD%93%E5%85%AC%E5%8A%A1%E5%91%98%23) `529.5K 🔥` `NEW`
1. [多地出现宠物狗使用公共直饮水](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%87%BA%E7%8E%B0%E5%AE%A0%E7%89%A9%E7%8B%97%E4%BD%BF%E7%94%A8%E5%85%AC%E5%85%B1%E7%9B%B4%E9%A5%AE%E6%B0%B4%23) `527.7K 🔥` `NEW`
1. [女孩遭前男友杀害被逼每日视频8次 (A girl was killed by her ex-boyfriend and forced to videotape her 8 times a day)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%81%AD%E5%89%8D%E7%94%B7%E5%8F%8B%E6%9D%80%E5%AE%B3%E8%A2%AB%E9%80%BC%E6%AF%8F%E6%97%A5%E8%A7%86%E9%A2%918%E6%AC%A1%23) `524.0K 🔥` `NEW`
1. [贵港动物园灾后最新画面](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E6%B8%AF%E5%8A%A8%E7%89%A9%E5%9B%AD%E7%81%BE%E5%90%8E%E6%9C%80%E6%96%B0%E7%94%BB%E9%9D%A2%23) `521.1K 🔥` `NEW`
1. [甘肃造价945万乡村学校烂尾6年](https://s.weibo.com/weibo?q=%23%E7%94%98%E8%82%83%E9%80%A0%E4%BB%B7945%E4%B8%87%E4%B9%A1%E6%9D%91%E5%AD%A6%E6%A0%A1%E7%83%82%E5%B0%BE6%E5%B9%B4%23) `519.7K 🔥` `NEW`
1. [原来疯狂吃零食的日子只有十年](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%83%E9%9B%B6%E9%A3%9F%E7%9A%84%E6%97%A5%E5%AD%90%E5%8F%AA%E6%9C%89%E5%8D%81%E5%B9%B4%23) `512.0K 🔥` `NEW`
1. [李小冉真成大vocal了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%9C%9F%E6%88%90%E5%A4%A7vocal%E4%BA%86%23) `490.1K 🔥` `NEW`
1. [中国女排1比3多米尼加女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%921%E6%AF%943%E5%A4%9A%E7%B1%B3%E5%B0%BC%E5%8A%A0%E5%A5%B3%E6%8E%92%23) `487.9K 🔥` `NEW`
1. [朴灿烈发微博了](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E7%81%BF%E7%83%88%E5%8F%91%E5%BE%AE%E5%8D%9A%E4%BA%86%23) `485.1K 🔥` `NEW`
1. [救援期间冒雨吃饭消防员来自广东](https://s.weibo.com/weibo?q=%23%E6%95%91%E6%8F%B4%E6%9C%9F%E9%97%B4%E5%86%92%E9%9B%A8%E5%90%83%E9%A5%AD%E6%B6%88%E9%98%B2%E5%91%98%E6%9D%A5%E8%87%AA%E5%B9%BF%E4%B8%9C%23) `474.8K 🔥` `NEW`
1. [台风巴威登陆点范围再缩小](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E7%82%B9%E8%8C%83%E5%9B%B4%E5%86%8D%E7%BC%A9%E5%B0%8F%23) `463.7K 🔥` `NEW`
1. [丁程鑫说王俊凯太能存钱了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%AF%B4%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%A4%AA%E8%83%BD%E5%AD%98%E9%92%B1%E4%BA%86%23) `459.4K 🔥` `NEW`
1. [王橹杰人气分 (Wang Lujie popularity points)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E4%BA%BA%E6%B0%94%E5%88%86%23) `450.4K 🔥` `NEW`
1. [雀骨](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%23) `446.9K 🔥` `NEW`
1. [巴威最新位置 (Bawe latest location)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E6%9C%80%E6%96%B0%E4%BD%8D%E7%BD%AE%23) `2.7M 🔥` `+26%`
1. [台风来袭科学避险完整指南 (A complete guide to scientific risk avoidance when a typhoon hits)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E6%9D%A5%E8%A2%AD%E7%A7%91%E5%AD%A6%E9%81%BF%E9%99%A9%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%23) `1.8M 🔥` `+27%`
1. [海水倒灌](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B0%B4%E5%80%92%E7%81%8C%23) `1.8M 🔥` `+42%`
1. [上海台风 (Shanghai Typhoon)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%8F%B0%E9%A3%8E%23) `3.0M 🔥`
1. [启境GT7提车即享华为乾崑ADS5 (Qijing GT7 can enjoy Huawei Qiankun ADS5 when you pick up the car.)](https://s.weibo.com/weibo?q=%23%E5%90%AF%E5%A2%83GT7%E6%8F%90%E8%BD%A6%E5%8D%B3%E4%BA%AB%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91ADS5%23) `1.8M 🔥`
1. [台风巴威1小时走30到50公里 (Typhoon Bavi travels 30 to 50 kilometers in one hour)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%811%E5%B0%8F%E6%97%B6%E8%B5%B030%E5%88%B050%E5%85%AC%E9%87%8C%23) `1.4M 🔥`
1. [手麻脚麻真的要赶紧进医院](https://s.weibo.com/weibo?q=%23%E6%89%8B%E9%BA%BB%E8%84%9A%E9%BA%BB%E7%9C%9F%E7%9A%84%E8%A6%81%E8%B5%B6%E7%B4%A7%E8%BF%9B%E5%8C%BB%E9%99%A2%23) `1.4M 🔥`
1. [上海中心千吨阻尼器开始摆动](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%AD%E5%BF%83%E5%8D%83%E5%90%A8%E9%98%BB%E5%B0%BC%E5%99%A8%E5%BC%80%E5%A7%8B%E6%91%86%E5%8A%A8%23) `533.5K 🔥`
1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `509.1K 🔥`
1. [长沙市体育局干部彭某某被停职](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E5%B8%82%E4%BD%93%E8%82%B2%E5%B1%80%E5%B9%B2%E9%83%A8%E5%BD%AD%E6%9F%90%E6%9F%90%E8%A2%AB%E5%81%9C%E8%81%8C%23) `506.6K 🔥`
1. [迪丽热巴路演未修原图](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B7%AF%E6%BC%94%E6%9C%AA%E4%BF%AE%E5%8E%9F%E5%9B%BE%23) `505.1K 🔥`
1. [杭州 台风 (Hangzhou Typhoon)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%20%E5%8F%B0%E9%A3%8E%23) `500.7K 🔥`
1. [巴威 (Bawe)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%23) `495.6K 🔥`
1. [洗衣机聊天记录](https://s.weibo.com/weibo?q=%23%E6%B4%97%E8%A1%A3%E6%9C%BA%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `493.2K 🔥`
1. [功夫女足开分9.4](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E5%BC%80%E5%88%869.4%23) `484.3K 🔥`
1. [桃黑黑回应洗衣机事件](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E5%9B%9E%E5%BA%94%E6%B4%97%E8%A1%A3%E6%9C%BA%E4%BA%8B%E4%BB%B6%23) `479.8K 🔥`
1. [台风巴威将经过江苏 (Typhoon Bavi will pass through Jiangsu)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%B0%86%E7%BB%8F%E8%BF%87%E6%B1%9F%E8%8B%8F%23) `478.9K 🔥`
1. [南非国脚世界杯后自杀身亡](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%9D%9E%E5%9B%BD%E8%84%9A%E4%B8%96%E7%95%8C%E6%9D%AF%E5%90%8E%E8%87%AA%E6%9D%80%E8%BA%AB%E4%BA%A1%23) `472.6K 🔥`
1. [白鹿发了16张照片](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%91%E4%BA%8616%E5%BC%A0%E7%85%A7%E7%89%87%23) `469.9K 🔥`
1. [你好星期六预告](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E9%A2%84%E5%91%8A%23) `468.1K 🔥`
1. [段奥娟这么瘦了](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E5%A5%A5%E5%A8%9F%E8%BF%99%E4%B9%88%E7%98%A6%E4%BA%86%23) `461.8K 🔥`
1. [小米澎程起售价预测 (Xiaomi Pengcheng starting price forecast)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E8%B5%B7%E5%94%AE%E4%BB%B7%E9%A2%84%E6%B5%8B%23) `457.8K 🔥`
1. [日媒拆台日本火箭只飞了11米 (Japanese media debunked the Japanese rocket that only flew 11 meters)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E6%8B%86%E5%8F%B0%E6%97%A5%E6%9C%AC%E7%81%AB%E7%AE%AD%E5%8F%AA%E9%A3%9E%E4%BA%8611%E7%B1%B3%23) `453.4K 🔥`
1. [杭州地铁停运](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%9C%B0%E9%93%81%E5%81%9C%E8%BF%90%23) `451.2K 🔥`
1. [南非25岁世界杯参赛球员去世](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%9D%9E25%E5%B2%81%E4%B8%96%E7%95%8C%E6%9D%AF%E5%8F%82%E8%B5%9B%E7%90%83%E5%91%98%E5%8E%BB%E4%B8%96%23) `802.2K 🔥` `-23%`
1. [周星驰官宣星女郎雪野](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%AE%98%E5%AE%A3%E6%98%9F%E5%A5%B3%E9%83%8E%E9%9B%AA%E9%87%8E%23) `557.9K 🔥` `-37%`
1. [章若楠直播摘假发片](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%9B%B4%E6%92%AD%E6%91%98%E5%81%87%E5%8F%91%E7%89%87%23) `516.9K 🔥` `-51%`
1. [沐言误喝过期六个月的药](https://s.weibo.com/weibo?q=%23%E6%B2%90%E8%A8%80%E8%AF%AF%E5%96%9D%E8%BF%87%E6%9C%9F%E5%85%AD%E4%B8%AA%E6%9C%88%E7%9A%84%E8%8D%AF%23) `514.2K 🔥` `-30%`
1. [桃黑黑直播回应 (Taoheihei live broadcast response)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E7%9B%B4%E6%92%AD%E5%9B%9E%E5%BA%94%23) `499.7K 🔥` `-51%`

Updated at 2026-07-11 23:39:29

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
