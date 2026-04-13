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

1. [刘冲去了逐玉庆功宴 (Liu Chong went to the Zhuyu celebration banquet)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E5%8E%BB%E4%BA%86%E9%80%90%E7%8E%89%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `785.5K 🔥` `NEW`
1. [洛克王国 补偿](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%20%E8%A1%A5%E5%81%BF%23) `356.4K 🔥` `NEW`
1. [卢洋洋去拍短剧了](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%B4%8B%E6%B4%8B%E5%8E%BB%E6%8B%8D%E7%9F%AD%E5%89%A7%E4%BA%86%23) `237.3K 🔥` `NEW`
1. [张凌赫田曦薇经纪人敬酒](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%95%AC%E9%85%92%23) `182.4K 🔥` `NEW`
1. [迪丽热巴工作室 审美](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E5%AE%A1%E7%BE%8E%23) `181.9K 🔥` `NEW`
1. [中国有哪些技术被全球抢着要](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E6%8A%80%E6%9C%AF%E8%A2%AB%E5%85%A8%E7%90%83%E6%8A%A2%E7%9D%80%E8%A6%81%23) `180.8K 🔥` `NEW`
1. [车圈已经癫成这样了](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E5%9C%88%E5%B7%B2%E7%BB%8F%E7%99%AB%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `180.6K 🔥` `NEW`
1. [仇一代已和解 仇二代请二搭](https://s.weibo.com/weibo?q=%23%E4%BB%87%E4%B8%80%E4%BB%A3%E5%B7%B2%E5%92%8C%E8%A7%A3%20%E4%BB%87%E4%BA%8C%E4%BB%A3%E8%AF%B7%E4%BA%8C%E6%90%AD%23) `180.1K 🔥` `NEW`
1. [瘦肚子超好的行为](https://s.weibo.com/weibo?q=%23%E7%98%A6%E8%82%9A%E5%AD%90%E8%B6%85%E5%A5%BD%E7%9A%84%E8%A1%8C%E4%B8%BA%23) `179.6K 🔥` `NEW`
1. [中国混动油耗打破世界纪录](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B7%B7%E5%8A%A8%E6%B2%B9%E8%80%97%E6%89%93%E7%A0%B4%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `179.3K 🔥` `NEW`
1. [伊朗曾准备稀释450公斤浓缩铀 (Iran had prepared to dilute 450 kilograms of enriched uranium)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9B%BE%E5%87%86%E5%A4%87%E7%A8%80%E9%87%8A450%E5%85%AC%E6%96%A4%E6%B5%93%E7%BC%A9%E9%93%80%23) `178.6K 🔥` `NEW`
1. [杨紫直播](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%9B%B4%E6%92%AD%23) `178.4K 🔥` `NEW`
1. [董力8岁儿子都这么高了](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%8A%9B8%E5%B2%81%E5%84%BF%E5%AD%90%E9%83%BD%E8%BF%99%E4%B9%88%E9%AB%98%E4%BA%86%23) `177.5K 🔥` `NEW`
1. [官俊臣艺考 没报机构](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E8%89%BA%E8%80%83%20%E6%B2%A1%E6%8A%A5%E6%9C%BA%E6%9E%84%23) `177.2K 🔥` `NEW`
1. [向太给儿媳花钱用的是自己零用钱](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E7%BB%99%E5%84%BF%E5%AA%B3%E8%8A%B1%E9%92%B1%E7%94%A8%E7%9A%84%E6%98%AF%E8%87%AA%E5%B7%B1%E9%9B%B6%E7%94%A8%E9%92%B1%23) `167.5K 🔥` `NEW`
1. [女子宫外孕被误诊月经不调痛到晕厥](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AE%AB%E5%A4%96%E5%AD%95%E8%A2%AB%E8%AF%AF%E8%AF%8A%E6%9C%88%E7%BB%8F%E4%B8%8D%E8%B0%83%E7%97%9B%E5%88%B0%E6%99%95%E5%8E%A5%23) `155.7K 🔥` `NEW`
1. [北电艺考的全国前五名](https://s.weibo.com/weibo?q=%23%E5%8C%97%E7%94%B5%E8%89%BA%E8%80%83%E7%9A%84%E5%85%A8%E5%9B%BD%E5%89%8D%E4%BA%94%E5%90%8D%23) `140.8K 🔥` `NEW`
1. [海底捞CEO向贴钱员工致歉](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9ECEO%E5%90%91%E8%B4%B4%E9%92%B1%E5%91%98%E5%B7%A5%E8%87%B4%E6%AD%89%23) `105.4K 🔥` `NEW`
1. [伊朗强硬回应特朗普封锁威胁](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%BC%BA%E7%A1%AC%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E5%B0%81%E9%94%81%E5%A8%81%E8%83%81%23) `78.6K 🔥` `NEW`
1. [微信表情手机端也能上架了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%A1%A8%E6%83%85%E6%89%8B%E6%9C%BA%E7%AB%AF%E4%B9%9F%E8%83%BD%E4%B8%8A%E6%9E%B6%E4%BA%86%23) `78.2K 🔥` `NEW`
1. [被拐后因长相被多次转卖女孩发声 (A girl who was abducted and resold many times because of her appearance speaks out)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%8B%90%E5%90%8E%E5%9B%A0%E9%95%BF%E7%9B%B8%E8%A2%AB%E5%A4%9A%E6%AC%A1%E8%BD%AC%E5%8D%96%E5%A5%B3%E5%AD%A9%E5%8F%91%E5%A3%B0%23) `78.0K 🔥` `NEW`
1. [男子闯黄灯撞死无证闯红灯老人](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%97%AF%E9%BB%84%E7%81%AF%E6%92%9E%E6%AD%BB%E6%97%A0%E8%AF%81%E9%97%AF%E7%BA%A2%E7%81%AF%E8%80%81%E4%BA%BA%23) `225.8K 🔥` `+81%`
1. [患者被吊1小时医院多专利已无效](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%80%85%E8%A2%AB%E5%90%8A1%E5%B0%8F%E6%97%B6%E5%8C%BB%E9%99%A2%E5%A4%9A%E4%B8%93%E5%88%A9%E5%B7%B2%E6%97%A0%E6%95%88%23) `170.3K 🔥` `+54%`
1. [男子无偿献血十年要求免诊查费遭拒](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%97%A0%E5%81%BF%E7%8C%AE%E8%A1%80%E5%8D%81%E5%B9%B4%E8%A6%81%E6%B1%82%E5%85%8D%E8%AF%8A%E6%9F%A5%E8%B4%B9%E9%81%AD%E6%8B%92%23) `1.1M 🔥`
1. [2026世界互联网大会亚太峰会](https://s.weibo.com/weibo?q=%232026%E4%B8%96%E7%95%8C%E4%BA%92%E8%81%94%E7%BD%91%E5%A4%A7%E4%BC%9A%E4%BA%9A%E5%A4%AA%E5%B3%B0%E4%BC%9A%23) `600.4K 🔥`
1. [伊朗总统称准备达成平衡公平协议](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E7%A7%B0%E5%87%86%E5%A4%87%E8%BE%BE%E6%88%90%E5%B9%B3%E8%A1%A1%E5%85%AC%E5%B9%B3%E5%8D%8F%E8%AE%AE%23) `185.2K 🔥`
1. [钟南山妻子正式进入篮球名人堂 (Zhong Nanshan’s wife officially enters Basketball Hall of Fame)](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E5%A6%BB%E5%AD%90%E6%AD%A3%E5%BC%8F%E8%BF%9B%E5%85%A5%E7%AF%AE%E7%90%83%E5%90%8D%E4%BA%BA%E5%A0%82%23) `183.2K 🔥`
1. [楚乔传 全员下场](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E4%B9%94%E4%BC%A0%20%E5%85%A8%E5%91%98%E4%B8%8B%E5%9C%BA%23) `181.6K 🔥`
1. [北京最火饺子馆开始喂AI龙虾 (Beijing’s most popular dumpling restaurant starts feeding AI lobsters)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9C%80%E7%81%AB%E9%A5%BA%E5%AD%90%E9%A6%86%E5%BC%80%E5%A7%8B%E5%96%82AI%E9%BE%99%E8%99%BE%23) `181.3K 🔥`
1. [王晓晨 俞灏明](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%93%E6%99%A8%20%E4%BF%9E%E7%81%8F%E6%98%8E%23) `179.2K 🔥`
1. [Angelababy郑恺陈赫李晨合影](https://s.weibo.com/weibo?q=%23Angelababy%E9%83%91%E6%81%BA%E9%99%88%E8%B5%AB%E6%9D%8E%E6%99%A8%E5%90%88%E5%BD%B1%23) `178.9K 🔥`
1. [眉姐姐斓曦怎么了](https://s.weibo.com/weibo?q=%23%E7%9C%89%E5%A7%90%E5%A7%90%E6%96%93%E6%9B%A6%E6%80%8E%E4%B9%88%E4%BA%86%23) `178.0K 🔥`
1. [1岁宝宝被排队摸脸萌化了 (1-year-old baby turned cute after being touched on the face in line)](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%AE%9D%E5%AE%9D%E8%A2%AB%E6%8E%92%E9%98%9F%E6%91%B8%E8%84%B8%E8%90%8C%E5%8C%96%E4%BA%86%23) `177.8K 🔥`
1. [莫氏鸡煲迎来成群TVB老戏骨](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%BF%8E%E6%9D%A5%E6%88%90%E7%BE%A4TVB%E8%80%81%E6%88%8F%E9%AA%A8%23) `177.4K 🔥`
1. [黄灿灿为防恶剪每天换发型](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E4%B8%BA%E9%98%B2%E6%81%B6%E5%89%AA%E6%AF%8F%E5%A4%A9%E6%8D%A2%E5%8F%91%E5%9E%8B%23) `176.9K 🔥`
1. [王晓晨吃药引发心悸 (Wang Xiaochen's heart palpitations caused by taking medicine)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%93%E6%99%A8%E5%90%83%E8%8D%AF%E5%BC%95%E5%8F%91%E5%BF%83%E6%82%B8%23) `160.4K 🔥`
1. [没认出这是章子怡](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E8%AE%A4%E5%87%BA%E8%BF%99%E6%98%AF%E7%AB%A0%E5%AD%90%E6%80%A1%23) `102.4K 🔥`
1. [孙怡的发量](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%9A%84%E5%8F%91%E9%87%8F%23) `100.7K 🔥`
1. [网友一句提醒外卖小哥查出尿毒症](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E4%B8%80%E5%8F%A5%E6%8F%90%E9%86%92%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A5%E6%9F%A5%E5%87%BA%E5%B0%BF%E6%AF%92%E7%97%87%23) `100.4K 🔥`
1. [没人知道马頔要把家装修成什么样 (No one knows how Ma Di will decorate his home.)](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E4%BA%BA%E7%9F%A5%E9%81%93%E9%A9%AC%E9%A0%94%E8%A6%81%E6%8A%8A%E5%AE%B6%E8%A3%85%E4%BF%AE%E6%88%90%E4%BB%80%E4%B9%88%E6%A0%B7%23) `98.3K 🔥`
1. [大麦崩了 (Barley collapsed)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BA%A6%E5%B4%A9%E4%BA%86%23) `233.9K 🔥` `-71%`
1. [韩国中学生在上海观光廊大声打闹](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%B8%AD%E5%AD%A6%E7%94%9F%E5%9C%A8%E4%B8%8A%E6%B5%B7%E8%A7%82%E5%85%89%E5%BB%8A%E5%A4%A7%E5%A3%B0%E6%89%93%E9%97%B9%23) `182.4K 🔥` `-46%`
1. [长春姐弟俩被遗留在托管班两年 (The Changchun siblings were left in a care class for two years)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%98%A5%E5%A7%90%E5%BC%9F%E4%BF%A9%E8%A2%AB%E9%81%97%E7%95%99%E5%9C%A8%E6%89%98%E7%AE%A1%E7%8F%AD%E4%B8%A4%E5%B9%B4%23) `181.6K 🔥` `-50%`
1. [张凌赫逐玉庆功宴发言](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%80%90%E7%8E%89%E5%BA%86%E5%8A%9F%E5%AE%B4%E5%8F%91%E8%A8%80%23) `180.9K 🔥` `-69%`
1. [迪丽热巴直播](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9B%B4%E6%92%AD%23) `152.0K 🔥` `-21%`
1. [李小冉只是长得年轻](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%8F%AA%E6%98%AF%E9%95%BF%E5%BE%97%E5%B9%B4%E8%BD%BB%23) `101.4K 🔥` `-51%`
1. [中方回应特朗普威胁加征关税 (China responds to Trump's threat to impose tariffs)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E5%A8%81%E8%83%81%E5%8A%A0%E5%BE%81%E5%85%B3%E7%A8%8E%23) `99.3K 🔥` `-27%`
1. [逐玉庆功宴 (Jade Celebration Banquet)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `96.3K 🔥` `-43%`
1. [开发商就喷辣椒水驱散购房人群致歉](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%8F%91%E5%95%86%E5%B0%B1%E5%96%B7%E8%BE%A3%E6%A4%92%E6%B0%B4%E9%A9%B1%E6%95%A3%E8%B4%AD%E6%88%BF%E4%BA%BA%E7%BE%A4%E8%87%B4%E6%AD%89%23) `85.1K 🔥` `-56%`

Updated at 2026-04-13 22:27:05

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
