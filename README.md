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

1. [长春姐弟俩被遗留在托管班两年 (The Changchun siblings were left in a care class for two years)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%98%A5%E5%A7%90%E5%BC%9F%E4%BF%A9%E8%A2%AB%E9%81%97%E7%95%99%E5%9C%A8%E6%89%98%E7%AE%A1%E7%8F%AD%E4%B8%A4%E5%B9%B4%23) `1.1M 🔥` `NEW`
1. [莫氏鸡煲迎来成群TVB老戏骨](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%BF%8E%E6%9D%A5%E6%88%90%E7%BE%A4TVB%E8%80%81%E6%88%8F%E9%AA%A8%23) `800.1K 🔥` `NEW`
1. [成都GG 民间队](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BDGG%20%E6%B0%91%E9%97%B4%E9%98%9F%23) `499.3K 🔥` `NEW`
1. [男子无偿献血十年要求免诊查费遭拒](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%97%A0%E5%81%BF%E7%8C%AE%E8%A1%80%E5%8D%81%E5%B9%B4%E8%A6%81%E6%B1%82%E5%85%8D%E8%AF%8A%E6%9F%A5%E8%B4%B9%E9%81%AD%E6%8B%92%23) `390.4K 🔥` `NEW`
1. [成都GG对战Xteam](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BDGG%E5%AF%B9%E6%88%98Xteam%23) `381.5K 🔥` `NEW`
1. [越南综艺 心愿便利贴](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E7%BB%BC%E8%89%BA%20%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%23) `332.5K 🔥` `NEW`
1. [眼睛短短十秒瞎了三次](https://s.weibo.com/weibo?q=%23%E7%9C%BC%E7%9D%9B%E7%9F%AD%E7%9F%AD%E5%8D%81%E7%A7%92%E7%9E%8E%E4%BA%86%E4%B8%89%E6%AC%A1%23) `274.1K 🔥` `NEW`
1. [科大讯飞有员工中奖但非1500万](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%A4%A7%E8%AE%AF%E9%A3%9E%E6%9C%89%E5%91%98%E5%B7%A5%E4%B8%AD%E5%A5%96%E4%BD%86%E9%9D%9E1500%E4%B8%87%23) `195.8K 🔥` `NEW`
1. [王晓晨吃药引发心悸](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%93%E6%99%A8%E5%90%83%E8%8D%AF%E5%BC%95%E5%8F%91%E5%BF%83%E6%82%B8%23) `180.2K 🔥` `NEW`
1. [认人识人是AI智能体的照妖镜](https://s.weibo.com/weibo?q=%23%E8%AE%A4%E4%BA%BA%E8%AF%86%E4%BA%BA%E6%98%AFAI%E6%99%BA%E8%83%BD%E4%BD%93%E7%9A%84%E7%85%A7%E5%A6%96%E9%95%9C%23) `162.3K 🔥` `NEW`
1. [小米18Pro电池设定曝光 (Xiaomi 18 Pro battery settings exposed)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E7%94%B5%E6%B1%A0%E8%AE%BE%E5%AE%9A%E6%9B%9D%E5%85%89%23) `162.2K 🔥` `NEW`
1. [律师解读村民拴绳致男孩气管全断裂](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%A7%A3%E8%AF%BB%E6%9D%91%E6%B0%91%E6%8B%B4%E7%BB%B3%E8%87%B4%E7%94%B7%E5%AD%A9%E6%B0%94%E7%AE%A1%E5%85%A8%E6%96%AD%E8%A3%82%23) `162.1K 🔥` `NEW`
1. [TF五代高会免费](https://s.weibo.com/weibo?q=%23TF%E4%BA%94%E4%BB%A3%E9%AB%98%E4%BC%9A%E5%85%8D%E8%B4%B9%23) `161.8K 🔥` `NEW`
1. [孙怡的发量](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%9A%84%E5%8F%91%E9%87%8F%23) `161.6K 🔥` `NEW`
1. [时代少年团正式官宣广州站](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%AD%A3%E5%BC%8F%E5%AE%98%E5%AE%A3%E5%B9%BF%E5%B7%9E%E7%AB%99%23) `161.5K 🔥` `NEW`
1. [女子做牵引被吊超1小时院方致歉](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%81%9A%E7%89%B5%E5%BC%95%E8%A2%AB%E5%90%8A%E8%B6%851%E5%B0%8F%E6%97%B6%E9%99%A2%E6%96%B9%E8%87%B4%E6%AD%89%23) `161.4K 🔥` `NEW`
1. [李小冉只是长得年轻](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%8F%AA%E6%98%AF%E9%95%BF%E5%BE%97%E5%B9%B4%E8%BD%BB%23) `161.2K 🔥` `NEW`
1. [伊朗称美国人很快会怀念现在的油价](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E5%9B%BD%E4%BA%BA%E5%BE%88%E5%BF%AB%E4%BC%9A%E6%80%80%E5%BF%B5%E7%8E%B0%E5%9C%A8%E7%9A%84%E6%B2%B9%E4%BB%B7%23) `160.9K 🔥` `NEW`
1. [网友一句提醒外卖小哥查出尿毒症](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E4%B8%80%E5%8F%A5%E6%8F%90%E9%86%92%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A5%E6%9F%A5%E5%87%BA%E5%B0%BF%E6%AF%92%E7%97%87%23) `143.9K 🔥` `NEW`
1. [一季度人民币存款增加13.73万亿元](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AD%A3%E5%BA%A6%E4%BA%BA%E6%B0%91%E5%B8%81%E5%AD%98%E6%AC%BE%E5%A2%9E%E5%8A%A013.73%E4%B8%87%E4%BA%BF%E5%85%83%23) `143.1K 🔥` `NEW`
1. [九尾戴上假发了 (Kyuubi puts on a wig)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E6%88%B4%E4%B8%8A%E5%81%87%E5%8F%91%E4%BA%86%23) `107.0K 🔥` `NEW`
1. [半年前体检正常半年后肺癌晚期](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%B9%B4%E5%89%8D%E4%BD%93%E6%A3%80%E6%AD%A3%E5%B8%B8%E5%8D%8A%E5%B9%B4%E5%90%8E%E8%82%BA%E7%99%8C%E6%99%9A%E6%9C%9F%23) `97.6K 🔥` `NEW`
1. [男孩被绳子锁喉肇事方系七旬老人](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E8%A2%AB%E7%BB%B3%E5%AD%90%E9%94%81%E5%96%89%E8%82%87%E4%BA%8B%E6%96%B9%E7%B3%BB%E4%B8%83%E6%97%AC%E8%80%81%E4%BA%BA%23) `96.6K 🔥` `NEW`
1. [给张根硕吓得老了好几岁](https://s.weibo.com/weibo?q=%23%E7%BB%99%E5%BC%A0%E6%A0%B9%E7%A1%95%E5%90%93%E5%BE%97%E8%80%81%E4%BA%86%E5%A5%BD%E5%87%A0%E5%B2%81%23) `90.4K 🔥` `NEW`
1. [在日本汤凉了他们会提供一块热石头](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%97%A5%E6%9C%AC%E6%B1%A4%E5%87%89%E4%BA%86%E4%BB%96%E4%BB%AC%E4%BC%9A%E6%8F%90%E4%BE%9B%E4%B8%80%E5%9D%97%E7%83%AD%E7%9F%B3%E5%A4%B4%23) `85.9K 🔥` `NEW`
1. [独生子小猫出生17天胖成猪咪了](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E7%94%9F%E5%AD%90%E5%B0%8F%E7%8C%AB%E5%87%BA%E7%94%9F17%E5%A4%A9%E8%83%96%E6%88%90%E7%8C%AA%E5%92%AA%E4%BA%86%23) `84.5K 🔥` `NEW`
1. [雨梦四抓](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E6%A2%A6%E5%9B%9B%E6%8A%93%23) `79.7K 🔥` `NEW`
1. [楚乔传剧组低山臭水遇知音](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E4%B9%94%E4%BC%A0%E5%89%A7%E7%BB%84%E4%BD%8E%E5%B1%B1%E8%87%AD%E6%B0%B4%E9%81%87%E7%9F%A5%E9%9F%B3%23) `79.6K 🔥` `NEW`
1. [伊朗总统称准备达成平衡公平协议](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E7%A7%B0%E5%87%86%E5%A4%87%E8%BE%BE%E6%88%90%E5%B9%B3%E8%A1%A1%E5%85%AC%E5%B9%B3%E5%8D%8F%E8%AE%AE%23) `247.0K 🔥` `+116%`
1. [楚乔传 全员下场](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E4%B9%94%E4%BC%A0%20%E5%85%A8%E5%91%98%E4%B8%8B%E5%9C%BA%23) `189.4K 🔥` `+38%`
1. [BLG对战JDG (BLG vs. JDG)](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98JDG%23) `162.5K 🔥` `+81%`
1. [Angelababy郑恺陈赫李晨合影](https://s.weibo.com/weibo?q=%23Angelababy%E9%83%91%E6%81%BA%E9%99%88%E8%B5%AB%E6%9D%8E%E6%99%A8%E5%90%88%E5%BD%B1%23) `161.9K 🔥` `+21%`
1. [逐玉庆功宴 (Jade Celebration Banquet)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `160.8K 🔥` `+31%`
1. [文旅消费迎来新爆发 (Cultural tourism consumption ushered in a new explosion)](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%97%85%E6%B6%88%E8%B4%B9%E8%BF%8E%E6%9D%A5%E6%96%B0%E7%88%86%E5%8F%91%23) `626.4K 🔥`
1. [智美大五座风云T9L全球上市 (Chimei's five-seater Fengyun T9L is launched globally)](https://s.weibo.com/weibo?q=%23%E6%99%BA%E7%BE%8E%E5%A4%A7%E4%BA%94%E5%BA%A7%E9%A3%8E%E4%BA%91T9L%E5%85%A8%E7%90%83%E4%B8%8A%E5%B8%82%23) `363.9K 🔥`
1. [突然觉得小学老师好厉害](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E8%A7%89%E5%BE%97%E5%B0%8F%E5%AD%A6%E8%80%81%E5%B8%88%E5%A5%BD%E5%8E%89%E5%AE%B3%23) `167.4K 🔥`
1. [眉姐姐斓曦怎么了](https://s.weibo.com/weibo?q=%23%E7%9C%89%E5%A7%90%E5%A7%90%E6%96%93%E6%9B%A6%E6%80%8E%E4%B9%88%E4%BA%86%23) `166.8K 🔥`
1. [黄灿灿为防恶剪每天换发型](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E4%B8%BA%E9%98%B2%E6%81%B6%E5%89%AA%E6%AF%8F%E5%A4%A9%E6%8D%A2%E5%8F%91%E5%9E%8B%23) `162.3K 🔥`
1. [女孩被拐后因长相被多次转卖](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%A2%AB%E6%8B%90%E5%90%8E%E5%9B%A0%E9%95%BF%E7%9B%B8%E8%A2%AB%E5%A4%9A%E6%AC%A1%E8%BD%AC%E5%8D%96%23) `161.0K 🔥`
1. [李小冉 北舞已经是上个世纪的事了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E5%8C%97%E8%88%9E%E5%B7%B2%E7%BB%8F%E6%98%AF%E4%B8%8A%E4%B8%AA%E4%B8%96%E7%BA%AA%E7%9A%84%E4%BA%8B%E4%BA%86%23) `148.6K 🔥`
1. [miumiu拍赵今麦 欲扬先抑](https://s.weibo.com/weibo?q=%23miumiu%E6%8B%8D%E8%B5%B5%E4%BB%8A%E9%BA%A6%20%E6%AC%B2%E6%89%AC%E5%85%88%E6%8A%91%23) `142.8K 🔥`
1. [ally整容模版是迪丽热巴 (ally's plastic surgery model is Dilireba)](https://s.weibo.com/weibo?q=%23ally%E6%95%B4%E5%AE%B9%E6%A8%A1%E7%89%88%E6%98%AF%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `125.4K 🔥`
1. [王彦霖 翻红](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BD%A6%E9%9C%96%20%E7%BF%BB%E7%BA%A2%23) `102.4K 🔥`
1. [没认出这是章子怡](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E8%AE%A4%E5%87%BA%E8%BF%99%E6%98%AF%E7%AB%A0%E5%AD%90%E6%80%A1%23) `165.3K 🔥` `-66%`
1. [钟南山妻子正式进入篮球名人堂 (Zhong Nanshan’s wife officially enters Basketball Hall of Fame)](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E5%A6%BB%E5%AD%90%E6%AD%A3%E5%BC%8F%E8%BF%9B%E5%85%A5%E7%AF%AE%E7%90%83%E5%90%8D%E4%BA%BA%E5%A0%82%23) `161.7K 🔥` `-22%`
1. [孙燕姿演唱会官宣六站](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%E5%85%AD%E7%AB%99%23) `161.2K 🔥` `-22%`
1. [中方回应向伊朗提供武器说法](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E5%90%91%E4%BC%8A%E6%9C%97%E6%8F%90%E4%BE%9B%E6%AD%A6%E5%99%A8%E8%AF%B4%E6%B3%95%23) `96.3K 🔥` `-28%`
1. [文章上海面馆价格 (Article Shanghai noodle restaurant prices)](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%AB%A0%E4%B8%8A%E6%B5%B7%E9%9D%A2%E9%A6%86%E4%BB%B7%E6%A0%BC%23) `95.1K 🔥` `-26%`
1. [kimi都这么大了 (Kimi is already so old)](https://s.weibo.com/weibo?q=%23kimi%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `85.6K 🔥` `-33%`
1. [官俊臣 成绩 (Guan Junchen’s results)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%20%E6%88%90%E7%BB%A9%23) `84.2K 🔥` `-21%`
1. [华为PuraXMax](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXMax%23) `79.6K 🔥` `-46%`

Updated at 2026-04-13 19:47:43

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
