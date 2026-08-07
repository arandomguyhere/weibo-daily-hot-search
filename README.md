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

1. [iPhone18Pro十二大升级 (Twelve major upgrades to iPhone 18 Pro)](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%8D%81%E4%BA%8C%E5%A4%A7%E5%8D%87%E7%BA%A7%23) `1.8M 🔥` `NEW`
1. [秋天第1个节气](https://s.weibo.com/weibo?q=%23%E7%A7%8B%E5%A4%A9%E7%AC%AC1%E4%B8%AA%E8%8A%82%E6%B0%94%23) `937.7K 🔥` `NEW`
1. [南昌大悦城 巨型高达空降](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%98%8C%E5%A4%A7%E6%82%A6%E5%9F%8E%20%E5%B7%A8%E5%9E%8B%E9%AB%98%E8%BE%BE%E7%A9%BA%E9%99%8D%23) `897.4K 🔥` `NEW`
1. [伊能静自曝不太想录妻旅](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E8%87%AA%E6%9B%9D%E4%B8%8D%E5%A4%AA%E6%83%B3%E5%BD%95%E5%A6%BB%E6%97%85%23) `815.5K 🔥` `NEW`
1. [结婚8年3娃非亲生司法鉴定已出](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A8%E5%B9%B43%E5%A8%83%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%8F%B8%E6%B3%95%E9%89%B4%E5%AE%9A%E5%B7%B2%E5%87%BA%23) `716.9K 🔥` `NEW`
1. [今年是闭眼秋](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E6%98%AF%E9%97%AD%E7%9C%BC%E7%A7%8B%23) `668.0K 🔥` `NEW`
1. [1岁宝宝碰坏纸巾盒三亚酒店索赔924元](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%AE%9D%E5%AE%9D%E7%A2%B0%E5%9D%8F%E7%BA%B8%E5%B7%BE%E7%9B%92%E4%B8%89%E4%BA%9A%E9%85%92%E5%BA%97%E7%B4%A2%E8%B5%94924%E5%85%83%23) `646.8K 🔥` `NEW`
1. [于适 平儿都长这么大了](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E9%80%82%20%E5%B9%B3%E5%84%BF%E9%83%BD%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `633.6K 🔥` `NEW`
1. [粉笔 公关话术](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%20%E5%85%AC%E5%85%B3%E8%AF%9D%E6%9C%AF%23) `482.3K 🔥` `NEW`
1. [王楚钦还是个起名天才](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%BF%98%E6%98%AF%E4%B8%AA%E8%B5%B7%E5%90%8D%E5%A4%A9%E6%89%8D%23) `335.0K 🔥` `NEW`
1. [Mina同学发声 (Mina classmate speaks out)](https://s.weibo.com/weibo?q=%23Mina%E5%90%8C%E5%AD%A6%E5%8F%91%E5%A3%B0%23) `334.8K 🔥` `NEW`
1. [粉笔公告自曝决策失误](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E5%85%AC%E5%91%8A%E8%87%AA%E6%9B%9D%E5%86%B3%E7%AD%96%E5%A4%B1%E8%AF%AF%23) `333.7K 🔥` `NEW`
1. [王垲智向侯卓成致歉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%9E%B2%E6%99%BA%E5%90%91%E4%BE%AF%E5%8D%93%E6%88%90%E8%87%B4%E6%AD%89%23) `332.6K 🔥` `NEW`
1. [两儿子同患自毁容貌症妈妈说天塌了](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%84%BF%E5%AD%90%E5%90%8C%E6%82%A3%E8%87%AA%E6%AF%81%E5%AE%B9%E8%B2%8C%E7%97%87%E5%A6%88%E5%A6%88%E8%AF%B4%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `332.3K 🔥` `NEW`
1. [到底谁才是爱豆](https://s.weibo.com/weibo?q=%23%E5%88%B0%E5%BA%95%E8%B0%81%E6%89%8D%E6%98%AF%E7%88%B1%E8%B1%86%23) `331.6K 🔥` `NEW`
1. [女子开一天一夜空调后二氧化碳中毒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BC%80%E4%B8%80%E5%A4%A9%E4%B8%80%E5%A4%9C%E7%A9%BA%E8%B0%83%E5%90%8E%E4%BA%8C%E6%B0%A7%E5%8C%96%E7%A2%B3%E4%B8%AD%E6%AF%92%23) `330.5K 🔥` `NEW`
1. [TF五代见面会官宣](https://s.weibo.com/weibo?q=%23TF%E4%BA%94%E4%BB%A3%E8%A7%81%E9%9D%A2%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `329.3K 🔥` `NEW`
1. [部分银行房贷利率降至2字头](https://s.weibo.com/weibo?q=%23%E9%83%A8%E5%88%86%E9%93%B6%E8%A1%8C%E6%88%BF%E8%B4%B7%E5%88%A9%E7%8E%87%E9%99%8D%E8%87%B32%E5%AD%97%E5%A4%B4%23) `328.7K 🔥` `NEW`
1. [张凌赫请你喝秋天第一杯](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%AF%B7%E4%BD%A0%E5%96%9D%E7%A7%8B%E5%A4%A9%E7%AC%AC%E4%B8%80%E6%9D%AF%23) `327.7K 🔥` `NEW`
1. [吃上时代少年团请的肯德基](https://s.weibo.com/weibo?q=%23%E5%90%83%E4%B8%8A%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%AF%B7%E7%9A%84%E8%82%AF%E5%BE%B7%E5%9F%BA%23) `327.0K 🔥` `NEW`
1. [汪峰阻止14岁女儿买大牌 (Wang Feng prevents his 14-year-old daughter from buying big-name brands)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%E9%98%BB%E6%AD%A214%E5%B2%81%E5%A5%B3%E5%84%BF%E4%B9%B0%E5%A4%A7%E7%89%8C%23) `324.4K 🔥` `NEW`
1. [王俊凯靳梦佳好舒服的一段对话](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%9D%B3%E6%A2%A6%E4%BD%B3%E5%A5%BD%E8%88%92%E6%9C%8D%E7%9A%84%E4%B8%80%E6%AE%B5%E5%AF%B9%E8%AF%9D%23) `278.0K 🔥` `NEW`
1. [东契奇前未婚妻索要5000万和解金](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%A5%91%E5%A5%87%E5%89%8D%E6%9C%AA%E5%A9%9A%E5%A6%BB%E7%B4%A2%E8%A6%815000%E4%B8%87%E5%92%8C%E8%A7%A3%E9%87%91%23) `276.6K 🔥` `NEW`
1. [人活着是为了感受幸福的](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B4%BB%E7%9D%80%E6%98%AF%E4%B8%BA%E4%BA%86%E6%84%9F%E5%8F%97%E5%B9%B8%E7%A6%8F%E7%9A%84%23) `272.7K 🔥` `NEW`
1. [美火箭残骸撞击月球对比图](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%81%AB%E7%AE%AD%E6%AE%8B%E9%AA%B8%E6%92%9E%E5%87%BB%E6%9C%88%E7%90%83%E5%AF%B9%E6%AF%94%E5%9B%BE%23) `266.3K 🔥` `NEW`
1. [Lisa 十周年见面会](https://s.weibo.com/weibo?q=%23Lisa%20%E5%8D%81%E5%91%A8%E5%B9%B4%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `265.9K 🔥` `NEW`
1. [徐洁云 孩go](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E4%BA%91%20%E5%AD%A9go%23) `255.8K 🔥` `NEW`
1. [男子采完菌才发现手刚掠过五步蛇](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%87%87%E5%AE%8C%E8%8F%8C%E6%89%8D%E5%8F%91%E7%8E%B0%E6%89%8B%E5%88%9A%E6%8E%A0%E8%BF%87%E4%BA%94%E6%AD%A5%E8%9B%87%23) `222.3K 🔥` `NEW`
1. [辛芷蕾要回去做上班儿的大人了](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E8%A6%81%E5%9B%9E%E5%8E%BB%E5%81%9A%E4%B8%8A%E7%8F%AD%E5%84%BF%E7%9A%84%E5%A4%A7%E4%BA%BA%E4%BA%86%23) `206.6K 🔥` `NEW`
1. [47岁母亲产女全家心态发生巨大反转](https://s.weibo.com/weibo?q=%2347%E5%B2%81%E6%AF%8D%E4%BA%B2%E4%BA%A7%E5%A5%B3%E5%85%A8%E5%AE%B6%E5%BF%83%E6%80%81%E5%8F%91%E7%94%9F%E5%B7%A8%E5%A4%A7%E5%8F%8D%E8%BD%AC%23) `184.9K 🔥` `NEW`
1. [张真源发时代少年团合照 (Zhang Zhenyuan posted a group photo of the Youth League)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%8F%91%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%90%88%E7%85%A7%23) `175.8K 🔥` `NEW`
1. [西村力大吧给Mina找的争议点](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E5%A4%A7%E5%90%A7%E7%BB%99Mina%E6%89%BE%E7%9A%84%E4%BA%89%E8%AE%AE%E7%82%B9%23) `163.4K 🔥` `NEW`
1. [DeepSeek没读图skill急得团团转](https://s.weibo.com/weibo?q=%23DeepSeek%E6%B2%A1%E8%AF%BB%E5%9B%BEskill%E6%80%A5%E5%BE%97%E5%9B%A2%E5%9B%A2%E8%BD%AC%23) `162.2K 🔥` `NEW`
1. [mina曾为西村力剪波波头](https://s.weibo.com/weibo?q=%23mina%E6%9B%BE%E4%B8%BA%E8%A5%BF%E6%9D%91%E5%8A%9B%E5%89%AA%E6%B3%A2%E6%B3%A2%E5%A4%B4%23) `162.2K 🔥` `NEW`
1. [张帅0比2萨巴伦卡](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B8%850%E6%AF%942%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%23) `162.0K 🔥` `NEW`
1. [Ning说TheShy贾克斯不如Bin](https://s.weibo.com/weibo?q=%23Ning%E8%AF%B4TheShy%E8%B4%BE%E5%85%8B%E6%96%AF%E4%B8%8D%E5%A6%82Bin%23) `161.8K 🔥` `NEW`
1. [网红自杀案在韩国引发很大冲击](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E8%87%AA%E6%9D%80%E6%A1%88%E5%9C%A8%E9%9F%A9%E5%9B%BD%E5%BC%95%E5%8F%91%E5%BE%88%E5%A4%A7%E5%86%B2%E5%87%BB%23) `141.6K 🔥` `NEW`
1. [中餐厅赞助品牌隐藏张雅琪单人视频](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%E8%B5%9E%E5%8A%A9%E5%93%81%E7%89%8C%E9%9A%90%E8%97%8F%E5%BC%A0%E9%9B%85%E7%90%AA%E5%8D%95%E4%BA%BA%E8%A7%86%E9%A2%91%23) `139.9K 🔥` `NEW`
1. [沃什将准备在9月加息](https://s.weibo.com/weibo?q=%23%E6%B2%83%E4%BB%80%E5%B0%86%E5%87%86%E5%A4%87%E5%9C%A89%E6%9C%88%E5%8A%A0%E6%81%AF%23) `139.1K 🔥` `NEW`
1. [稀物集品牌大使黄星邱鼎杰](https://s.weibo.com/weibo?q=%23%E7%A8%80%E7%89%A9%E9%9B%86%E5%93%81%E7%89%8C%E5%A4%A7%E4%BD%BF%E9%BB%84%E6%98%9F%E9%82%B1%E9%BC%8E%E6%9D%B0%23) `655.5K 🔥` `+52%`
1. [西村力大吧发长文回应 (Nishimuralidaba posted a long response)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E5%A4%A7%E5%90%A7%E5%8F%91%E9%95%BF%E6%96%87%E5%9B%9E%E5%BA%94%23) `327.9K 🔥` `+77%`
1. [26岁女儿谈47岁妈妈突然产女](https://s.weibo.com/weibo?q=%2326%E5%B2%81%E5%A5%B3%E5%84%BF%E8%B0%8847%E5%B2%81%E5%A6%88%E5%A6%88%E7%AA%81%E7%84%B6%E4%BA%A7%E5%A5%B3%23) `326.5K 🔥` `+75%`
1. [女子怀孕以为发胖就医后产下第三胎](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E4%BB%A5%E4%B8%BA%E5%8F%91%E8%83%96%E5%B0%B1%E5%8C%BB%E5%90%8E%E4%BA%A7%E4%B8%8B%E7%AC%AC%E4%B8%89%E8%83%8E%23) `280.8K 🔥` `+53%`
1. [日本网友为Mina发声](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E4%B8%BAMina%E5%8F%91%E5%A3%B0%23) `251.2K 🔥` `+32%`
1. [央视网评银行午休 (CCTV online comments on bank lunch break)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BD%91%E8%AF%84%E9%93%B6%E8%A1%8C%E5%8D%88%E4%BC%91%23) `1.5M 🔥`
1. [外网热议Mina参加西村力签售](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E7%83%AD%E8%AE%AEMina%E5%8F%82%E5%8A%A0%E8%A5%BF%E6%9D%91%E5%8A%9B%E7%AD%BE%E5%94%AE%23) `220.0K 🔥`
1. [我对二手烟就丁禹兮这个态度](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AF%B9%E4%BA%8C%E6%89%8B%E7%83%9F%E5%B0%B1%E4%B8%81%E7%A6%B9%E5%85%AE%E8%BF%99%E4%B8%AA%E6%80%81%E5%BA%A6%23) `161.5K 🔥`
1. [Mina轻生前求西村力粉丝别网暴自己](https://s.weibo.com/weibo?q=%23Mina%E8%BD%BB%E7%94%9F%E5%89%8D%E6%B1%82%E8%A5%BF%E6%9D%91%E5%8A%9B%E7%B2%89%E4%B8%9D%E5%88%AB%E7%BD%91%E6%9A%B4%E8%87%AA%E5%B7%B1%23) `151.3K 🔥`
1. [粉笔公告](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E5%85%AC%E5%91%8A%23) `151.1K 🔥`
1. [立秋](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E7%A7%8B%23) `333.7K 🔥` `-72%`
1. [苍兰诀](https://s.weibo.com/weibo?q=%23%E8%8B%8D%E5%85%B0%E8%AF%80%23) `329.9K 🔥` `-65%`
1. [韩国足协7场比赛性贿赂20名裁判 (The Korean Football Association sexually bribed 20 referees in 7 games)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%B6%B3%E5%8D%8F7%E5%9C%BA%E6%AF%94%E8%B5%9B%E6%80%A7%E8%B4%BF%E8%B5%8220%E5%90%8D%E8%A3%81%E5%88%A4%23) `156.9K 🔥` `-56%`

Updated at 2026-08-07 11:19:22

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
