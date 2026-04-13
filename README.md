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

1. [大麦崩了 (Barley collapsed)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BA%A6%E5%B4%A9%E4%BA%86%23) `803.5K 🔥` `NEW`
1. [2026世界互联网大会亚太峰会](https://s.weibo.com/weibo?q=%232026%E4%B8%96%E7%95%8C%E4%BA%92%E8%81%94%E7%BD%91%E5%A4%A7%E4%BC%9A%E4%BA%9A%E5%A4%AA%E5%B3%B0%E4%BC%9A%23) `644.2K 🔥` `NEW`
1. [大眼音乐节要来了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%9C%BC%E9%9F%B3%E4%B9%90%E8%8A%82%E8%A6%81%E6%9D%A5%E4%BA%86%23) `608.1K 🔥` `NEW`
1. [张凌赫逐玉庆功宴发言](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%80%90%E7%8E%89%E5%BA%86%E5%8A%9F%E5%AE%B4%E5%8F%91%E8%A8%80%23) `574.8K 🔥` `NEW`
1. [韩国中学生在上海观光廊大声打闹](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%B8%AD%E5%AD%A6%E7%94%9F%E5%9C%A8%E4%B8%8A%E6%B5%B7%E8%A7%82%E5%85%89%E5%BB%8A%E5%A4%A7%E5%A3%B0%E6%89%93%E9%97%B9%23) `335.0K 🔥` `NEW`
1. [何与探秘润百颜ECM](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8E%E6%8E%A2%E7%A7%98%E6%B6%A6%E7%99%BE%E9%A2%9CECM%23) `321.2K 🔥` `NEW`
1. [JDG让一追二BLG](https://s.weibo.com/weibo?q=%23JDG%E8%AE%A9%E4%B8%80%E8%BF%BD%E4%BA%8CBLG%23) `194.1K 🔥` `NEW`
1. [迪丽热巴直播](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9B%B4%E6%92%AD%23) `193.4K 🔥` `NEW`
1. [张凌赫哽咽](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%93%BD%E5%92%BD%23) `193.4K 🔥` `NEW`
1. [开发商就喷辣椒水驱散购房人群致歉](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%8F%91%E5%95%86%E5%B0%B1%E5%96%B7%E8%BE%A3%E6%A4%92%E6%B0%B4%E9%A9%B1%E6%95%A3%E8%B4%AD%E6%88%BF%E4%BA%BA%E7%BE%A4%E8%87%B4%E6%AD%89%23) `193.3K 🔥` `NEW`
1. [北京最火饺子馆开始喂AI龙虾 (Beijing’s most popular dumpling restaurant starts feeding AI lobsters)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9C%80%E7%81%AB%E9%A5%BA%E5%AD%90%E9%A6%86%E5%BC%80%E5%A7%8B%E5%96%82AI%E9%BE%99%E8%99%BE%23) `181.6K 🔥` `NEW`
1. [二次开腹致新生儿脑瘫医生系副院长](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%AC%A1%E5%BC%80%E8%85%B9%E8%87%B4%E6%96%B0%E7%94%9F%E5%84%BF%E8%84%91%E7%98%AB%E5%8C%BB%E7%94%9F%E7%B3%BB%E5%89%AF%E9%99%A2%E9%95%BF%23) `176.6K 🔥` `NEW`
1. [王晓晨 俞灏明](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%93%E6%99%A8%20%E4%BF%9E%E7%81%8F%E6%98%8E%23) `172.4K 🔥` `NEW`
1. [1岁宝宝被排队摸脸萌化了](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%AE%9D%E5%AE%9D%E8%A2%AB%E6%8E%92%E9%98%9F%E6%91%B8%E8%84%B8%E8%90%8C%E5%8C%96%E4%BA%86%23) `168.4K 🔥` `NEW`
1. [陶喆上海场抢票](https://s.weibo.com/weibo?q=%23%E9%99%B6%E5%96%86%E4%B8%8A%E6%B5%B7%E5%9C%BA%E6%8A%A2%E7%A5%A8%23) `154.3K 🔥` `NEW`
1. [美国越谈伊朗越疑](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%B6%8A%E8%B0%88%E4%BC%8A%E6%9C%97%E8%B6%8A%E7%96%91%23) `141.2K 🔥` `NEW`
1. [油价六连涨换油混还是继续扛](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E5%85%AD%E8%BF%9E%E6%B6%A8%E6%8D%A2%E6%B2%B9%E6%B7%B7%E8%BF%98%E6%98%AF%E7%BB%A7%E7%BB%AD%E6%89%9B%23) `141.0K 🔥` `NEW`
1. [中方回应特朗普威胁加征关税](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E5%A8%81%E8%83%81%E5%8A%A0%E5%BE%81%E5%85%B3%E7%A8%8E%23) `135.7K 🔥` `NEW`
1. [黄星邱鼎杰方辟谣聊天记录](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%98%9F%E9%82%B1%E9%BC%8E%E6%9D%B0%E6%96%B9%E8%BE%9F%E8%B0%A3%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `134.5K 🔥` `NEW`
1. [男子闯黄灯撞死无证闯红灯老人](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%97%AF%E9%BB%84%E7%81%AF%E6%92%9E%E6%AD%BB%E6%97%A0%E8%AF%81%E9%97%AF%E7%BA%A2%E7%81%AF%E8%80%81%E4%BA%BA%23) `124.5K 🔥` `NEW`
1. [没人知道马頔要把家装修成什么样 (No one knows how Ma Di will decorate his home.)](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E4%BA%BA%E7%9F%A5%E9%81%93%E9%A9%AC%E9%A0%94%E8%A6%81%E6%8A%8A%E5%AE%B6%E8%A3%85%E4%BF%AE%E6%88%90%E4%BB%80%E4%B9%88%E6%A0%B7%23) `122.2K 🔥` `NEW`
1. [患者被吊1小时医院多专利已无效](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%80%85%E8%A2%AB%E5%90%8A1%E5%B0%8F%E6%97%B6%E5%8C%BB%E9%99%A2%E5%A4%9A%E4%B8%93%E5%88%A9%E5%B7%B2%E6%97%A0%E6%95%88%23) `110.5K 🔥` `NEW`
1. [张继科现身上海](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E7%8E%B0%E8%BA%AB%E4%B8%8A%E6%B5%B7%23) `81.2K 🔥` `NEW`
1. [Rookie未归队](https://s.weibo.com/weibo?q=%23Rookie%E6%9C%AA%E5%BD%92%E9%98%9F%23) `72.1K 🔥` `NEW`
1. [金价持续拉扯](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%8C%81%E7%BB%AD%E6%8B%89%E6%89%AF%23) `71.6K 🔥` `NEW`
1. [男子无偿献血十年要求免诊查费遭拒](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%97%A0%E5%81%BF%E7%8C%AE%E8%A1%80%E5%8D%81%E5%B9%B4%E8%A6%81%E6%B1%82%E5%85%8D%E8%AF%8A%E6%9F%A5%E8%B4%B9%E9%81%AD%E6%8B%92%23) `1.1M 🔥` `+178%`
1. [李小冉只是长得年轻](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%8F%AA%E6%98%AF%E9%95%BF%E5%BE%97%E5%B9%B4%E8%BD%BB%23) `205.9K 🔥` `+28%`
1. [眼睛短短十秒瞎了三次](https://s.weibo.com/weibo?q=%23%E7%9C%BC%E7%9D%9B%E7%9F%AD%E7%9F%AD%E5%8D%81%E7%A7%92%E7%9E%8E%E4%BA%86%E4%B8%89%E6%AC%A1%23) `315.2K 🔥`
1. [钟南山妻子正式进入篮球名人堂 (Zhong Nanshan’s wife officially enters Basketball Hall of Fame)](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E5%A6%BB%E5%AD%90%E6%AD%A3%E5%BC%8F%E8%BF%9B%E5%85%A5%E7%AF%AE%E7%90%83%E5%90%8D%E4%BA%BA%E5%A0%82%23) `193.4K 🔥`
1. [楚乔传 全员下场](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E4%B9%94%E4%BC%A0%20%E5%85%A8%E5%91%98%E4%B8%8B%E5%9C%BA%23) `193.3K 🔥`
1. [眉姐姐斓曦怎么了](https://s.weibo.com/weibo?q=%23%E7%9C%89%E5%A7%90%E5%A7%90%E6%96%93%E6%9B%A6%E6%80%8E%E4%B9%88%E4%BA%86%23) `193.1K 🔥`
1. [王晓晨吃药引发心悸 (Wang Xiaochen's heart palpitations caused by taking medicine)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%93%E6%99%A8%E5%90%83%E8%8D%AF%E5%BC%95%E5%8F%91%E5%BF%83%E6%82%B8%23) `188.9K 🔥`
1. [Angelababy郑恺陈赫李晨合影](https://s.weibo.com/weibo?q=%23Angelababy%E9%83%91%E6%81%BA%E9%99%88%E8%B5%AB%E6%9D%8E%E6%99%A8%E5%90%88%E5%BD%B1%23) `173.3K 🔥`
1. [逐玉庆功宴 (Jade Celebration Banquet)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `168.2K 🔥`
1. [黄灿灿为防恶剪每天换发型](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E4%B8%BA%E9%98%B2%E6%81%B6%E5%89%AA%E6%AF%8F%E5%A4%A9%E6%8D%A2%E5%8F%91%E5%9E%8B%23) `166.6K 🔥`
1. [TF五代高会免费](https://s.weibo.com/weibo?q=%23TF%E4%BA%94%E4%BB%A3%E9%AB%98%E4%BC%9A%E5%85%8D%E8%B4%B9%23) `131.5K 🔥`
1. [官俊臣 成绩 (Guan Junchen’s results)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%20%E6%88%90%E7%BB%A9%23) `76.3K 🔥`
1. [长春姐弟俩被遗留在托管班两年 (The Changchun siblings were left in a care class for two years)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%98%A5%E5%A7%90%E5%BC%9F%E4%BF%A9%E8%A2%AB%E9%81%97%E7%95%99%E5%9C%A8%E6%89%98%E7%AE%A1%E7%8F%AD%E4%B8%A4%E5%B9%B4%23) `360.3K 🔥` `-67%`
1. [伊朗总统称准备达成平衡公平协议](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E7%A7%B0%E5%87%86%E5%A4%87%E8%BE%BE%E6%88%90%E5%B9%B3%E8%A1%A1%E5%85%AC%E5%B9%B3%E5%8D%8F%E8%AE%AE%23) `192.7K 🔥` `-22%`
1. [越南综艺 心愿便利贴](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E7%BB%BC%E8%89%BA%20%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%23) `188.3K 🔥` `-43%`
1. [莫氏鸡煲迎来成群TVB老戏骨](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%BF%8E%E6%9D%A5%E6%88%90%E7%BE%A4TVB%E8%80%81%E6%88%8F%E9%AA%A8%23) `162.4K 🔥` `-80%`
1. [孙燕姿演唱会官宣六站](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%E5%85%AD%E7%AB%99%23) `117.3K 🔥` `-27%`
1. [没认出这是章子怡](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E8%AE%A4%E5%87%BA%E8%BF%99%E6%98%AF%E7%AB%A0%E5%AD%90%E6%80%A1%23) `110.2K 🔥` `-33%`
1. [科大讯飞有员工中奖但非1500万](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%A4%A7%E8%AE%AF%E9%A3%9E%E6%9C%89%E5%91%98%E5%B7%A5%E4%B8%AD%E5%A5%96%E4%BD%86%E9%9D%9E1500%E4%B8%87%23) `104.2K 🔥` `-47%`
1. [内娱开始反向播剧了 (Domestic entertainment begins to broadcast dramas in reverse)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%BC%80%E5%A7%8B%E5%8F%8D%E5%90%91%E6%92%AD%E5%89%A7%E4%BA%86%23) `103.5K 🔥` `-25%`
1. [时代少年团正式官宣广州站](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%AD%A3%E5%BC%8F%E5%AE%98%E5%AE%A3%E5%B9%BF%E5%B7%9E%E7%AB%99%23) `101.4K 🔥` `-37%`
1. [网友一句提醒外卖小哥查出尿毒症](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E4%B8%80%E5%8F%A5%E6%8F%90%E9%86%92%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A5%E6%9F%A5%E5%87%BA%E5%B0%BF%E6%AF%92%E7%97%87%23) `100.2K 🔥` `-30%`
1. [ally整容模版是迪丽热巴 (ally's plastic surgery model is Dilireba)](https://s.weibo.com/weibo?q=%23ally%E6%95%B4%E5%AE%B9%E6%A8%A1%E7%89%88%E6%98%AF%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `99.4K 🔥` `-21%`
1. [孙怡的发量](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%9A%84%E5%8F%91%E9%87%8F%23) `95.9K 🔥` `-41%`
1. [miumiu拍赵今麦 欲扬先抑](https://s.weibo.com/weibo?q=%23miumiu%E6%8B%8D%E8%B5%B5%E4%BB%8A%E9%BA%A6%20%E6%AC%B2%E6%89%AC%E5%85%88%E6%8A%91%23) `80.3K 🔥` `-44%`
1. [成都GG 民间队](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BDGG%20%E6%B0%91%E9%97%B4%E9%98%9F%23) `78.7K 🔥` `-84%`
1. [小米18Pro电池设定曝光 (Xiaomi 18 Pro battery settings exposed)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E7%94%B5%E6%B1%A0%E8%AE%BE%E5%AE%9A%E6%9B%9D%E5%85%89%23) `73.4K 🔥` `-55%`

Updated at 2026-04-13 20:51:02

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
