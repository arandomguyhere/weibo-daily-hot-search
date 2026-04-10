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

1. [十日终焉开机 (Will be launched in ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%BC%80%E6%9C%BA%23) `1.2M 🔥` `NEW`
1. [李在明转发以色列士兵虐童视频](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E8%BD%AC%E5%8F%91%E4%BB%A5%E8%89%B2%E5%88%97%E5%A3%AB%E5%85%B5%E8%99%90%E7%AB%A5%E8%A7%86%E9%A2%91%23) `880.0K 🔥` `NEW`
1. [胡先煦官宣十日终焉](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E5%AE%98%E5%AE%A3%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `432.7K 🔥` `NEW`
1. [婆婆得知儿子被海葬状告儿媳孙女](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E5%BE%97%E7%9F%A5%E5%84%BF%E5%AD%90%E8%A2%AB%E6%B5%B7%E8%91%AC%E7%8A%B6%E5%91%8A%E5%84%BF%E5%AA%B3%E5%AD%99%E5%A5%B3%23) `309.8K 🔥` `NEW`
1. [男子杀害22岁前女友藏床底开冷气](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%80%E5%AE%B322%E5%B2%81%E5%89%8D%E5%A5%B3%E5%8F%8B%E8%97%8F%E5%BA%8A%E5%BA%95%E5%BC%80%E5%86%B7%E6%B0%94%23) `295.2K 🔥` `NEW`
1. [看八千里路云和月嗓子眼堵住了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%85%AB%E5%8D%83%E9%87%8C%E8%B7%AF%E4%BA%91%E5%92%8C%E6%9C%88%E5%97%93%E5%AD%90%E7%9C%BC%E5%A0%B5%E4%BD%8F%E4%BA%86%23) `290.2K 🔥` `NEW`
1. [李斌称闪充再快也比换电慢](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%8C%E7%A7%B0%E9%97%AA%E5%85%85%E5%86%8D%E5%BF%AB%E4%B9%9F%E6%AF%94%E6%8D%A2%E7%94%B5%E6%85%A2%23) `259.1K 🔥` `NEW`
1. [浪姐曾邀请孟子义被拒绝了](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%9B%BE%E9%82%80%E8%AF%B7%E5%AD%9F%E5%AD%90%E4%B9%89%E8%A2%AB%E6%8B%92%E7%BB%9D%E4%BA%86%23) `248.7K 🔥` `NEW`
1. [詹姆斯罚球线内一步暴扣](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E7%BD%9A%E7%90%83%E7%BA%BF%E5%86%85%E4%B8%80%E6%AD%A5%E6%9A%B4%E6%89%A3%23) `141.1K 🔥` `NEW`
1. [十日终焉首发阵容](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%A6%96%E5%8F%91%E9%98%B5%E5%AE%B9%23) `132.1K 🔥` `NEW`
1. [医生分析黄子韬嘴唇发紫原因 (Doctor analyzes the cause of Huang Zitao’s purple lips)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%88%86%E6%9E%90%E9%BB%84%E5%AD%90%E9%9F%AC%E5%98%B4%E5%94%87%E5%8F%91%E7%B4%AB%E5%8E%9F%E5%9B%A0%23) `131.7K 🔥` `NEW`
1. [王者荣耀世界开服曲上线](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E4%B8%96%E7%95%8C%E5%BC%80%E6%9C%8D%E6%9B%B2%E4%B8%8A%E7%BA%BF%23) `131.0K 🔥` `NEW`
1. [班费一年三四千还说家长是自愿的](https://s.weibo.com/weibo?q=%23%E7%8F%AD%E8%B4%B9%E4%B8%80%E5%B9%B4%E4%B8%89%E5%9B%9B%E5%8D%83%E8%BF%98%E8%AF%B4%E5%AE%B6%E9%95%BF%E6%98%AF%E8%87%AA%E6%84%BF%E7%9A%84%23) `102.1K 🔥` `NEW`
1. [莫氏鸡煲老板说一天只花20发财没用](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E8%AF%B4%E4%B8%80%E5%A4%A9%E5%8F%AA%E8%8A%B120%E5%8F%91%E8%B4%A2%E6%B2%A1%E7%94%A8%23) `98.9K 🔥` `NEW`
1. [程晓玥回应当年分手](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%99%93%E7%8E%A5%E5%9B%9E%E5%BA%94%E5%BD%93%E5%B9%B4%E5%88%86%E6%89%8B%23) `97.4K 🔥` `NEW`
1. [卫健委回应卫生院工作人员上班化妆](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%A7%94%E5%9B%9E%E5%BA%94%E5%8D%AB%E7%94%9F%E9%99%A2%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E4%B8%8A%E7%8F%AD%E5%8C%96%E5%A6%86%23) `93.6K 🔥` `NEW`
1. [黄景瑜王玉雯是王子奇介绍的吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%98%AF%E7%8E%8B%E5%AD%90%E5%A5%87%E4%BB%8B%E7%BB%8D%E7%9A%84%E5%90%97%23) `93.0K 🔥` `NEW`
1. [初三女生被5名舍友殴打校长被停职](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%89%E5%A5%B3%E7%94%9F%E8%A2%AB5%E5%90%8D%E8%88%8D%E5%8F%8B%E6%AE%B4%E6%89%93%E6%A0%A1%E9%95%BF%E8%A2%AB%E5%81%9C%E8%81%8C%23) `85.0K 🔥` `NEW`
1. [杨紫小夭女性角色热度TOP1](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%B0%8F%E5%A4%AD%E5%A5%B3%E6%80%A7%E8%A7%92%E8%89%B2%E7%83%AD%E5%BA%A6TOP1%23) `82.3K 🔥` `NEW`
1. [单依纯工作室巡演版权说明](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%B7%A1%E6%BC%94%E7%89%88%E6%9D%83%E8%AF%B4%E6%98%8E%23) `82.3K 🔥` `NEW`
1. [新世纪福音战士 (Neon Genesis Evangelion)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%96%E7%BA%AA%E7%A6%8F%E9%9F%B3%E6%88%98%E5%A3%AB%23) `82.1K 🔥` `NEW`
1. [拜登儿子约战特朗普儿子](https://s.weibo.com/weibo?q=%23%E6%8B%9C%E7%99%BB%E5%84%BF%E5%AD%90%E7%BA%A6%E6%88%98%E7%89%B9%E6%9C%97%E6%99%AE%E5%84%BF%E5%AD%90%23) `81.8K 🔥` `NEW`
1. [黄友政2比3普卡](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%8F%8B%E6%94%BF2%E6%AF%943%E6%99%AE%E5%8D%A1%23) `81.7K 🔥` `NEW`
1. [楚乔传](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E4%B9%94%E4%BC%A0%23) `81.5K 🔥` `NEW`
1. [全军第一支常规弹道导弹部队](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%86%9B%E7%AC%AC%E4%B8%80%E6%94%AF%E5%B8%B8%E8%A7%84%E5%BC%B9%E9%81%93%E5%AF%BC%E5%BC%B9%E9%83%A8%E9%98%9F%23) `81.4K 🔥` `NEW`
1. [亲爱的客栈全员晒8年前照片](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E7%88%B1%E7%9A%84%E5%AE%A2%E6%A0%88%E5%85%A8%E5%91%98%E6%99%928%E5%B9%B4%E5%89%8D%E7%85%A7%E7%89%87%23) `80.1K 🔥` `NEW`
1. [官方回应奔驰豪车被当陪葬品](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E5%A5%94%E9%A9%B0%E8%B1%AA%E8%BD%A6%E8%A2%AB%E5%BD%93%E9%99%AA%E8%91%AC%E5%93%81%23) `79.5K 🔥` `NEW`
1. [母亲成植物人获赔116万兄弟起争执](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E6%88%90%E6%A4%8D%E7%89%A9%E4%BA%BA%E8%8E%B7%E8%B5%94116%E4%B8%87%E5%85%84%E5%BC%9F%E8%B5%B7%E4%BA%89%E6%89%A7%23) `79.4K 🔥` `NEW`
1. [两岸同胞同属中华民族](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%B2%B8%E5%90%8C%E8%83%9E%E5%90%8C%E5%B1%9E%E4%B8%AD%E5%8D%8E%E6%B0%91%E6%97%8F%23) `79.4K 🔥` `NEW`
1. [留学生吐槽欧洲比二手烟更严重的问题](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%AD%A6%E7%94%9F%E5%90%90%E6%A7%BD%E6%AC%A7%E6%B4%B2%E6%AF%94%E4%BA%8C%E6%89%8B%E7%83%9F%E6%9B%B4%E4%B8%A5%E9%87%8D%E7%9A%84%E9%97%AE%E9%A2%98%23) `79.4K 🔥` `NEW`
1. [种地吧 (Farm it)](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `69.2K 🔥` `NEW`
1. [伊朗最高领袖发表最新声明](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%8F%91%E8%A1%A8%E6%9C%80%E6%96%B0%E5%A3%B0%E6%98%8E%23) `67.9K 🔥` `NEW`
1. [张凌赫的夯爆时刻还在持续](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E5%A4%AF%E7%88%86%E6%97%B6%E5%88%BB%E8%BF%98%E5%9C%A8%E6%8C%81%E7%BB%AD%23) `65.1K 🔥` `NEW`
1. [A股收复4000点关口](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%94%B6%E5%A4%8D4000%E7%82%B9%E5%85%B3%E5%8F%A3%23) `65.0K 🔥` `NEW`
1. [交警称保时捷车主罚200元记3分](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E8%AD%A6%E7%A7%B0%E4%BF%9D%E6%97%B6%E6%8D%B7%E8%BD%A6%E4%B8%BB%E7%BD%9A200%E5%85%83%E8%AE%B03%E5%88%86%23) `65.0K 🔥` `NEW`
1. [用人民币感受日本物价](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%BA%BA%E6%B0%91%E5%B8%81%E6%84%9F%E5%8F%97%E6%97%A5%E6%9C%AC%E7%89%A9%E4%BB%B7%23) `132.9K 🔥` `+37%`
1. [赏花经济开出四季春](https://s.weibo.com/weibo?q=%23%E8%B5%8F%E8%8A%B1%E7%BB%8F%E6%B5%8E%E5%BC%80%E5%87%BA%E5%9B%9B%E5%AD%A3%E6%98%A5%23) `705.9K 🔥`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `124.7K 🔥`
1. [当你不小心坐了商场按摩椅](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E4%B8%8D%E5%B0%8F%E5%BF%83%E5%9D%90%E4%BA%86%E5%95%86%E5%9C%BA%E6%8C%89%E6%91%A9%E6%A4%85%23) `100.4K 🔥`
1. [马頔说李纯很假](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E8%AF%B4%E6%9D%8E%E7%BA%AF%E5%BE%88%E5%81%87%23) `116.2K 🔥` `-80%`
1. [AI写作年赚200万夫妻被封号 (Couple earns 2 million a year from AI writing but gets banned)](https://s.weibo.com/weibo?q=%23AI%E5%86%99%E4%BD%9C%E5%B9%B4%E8%B5%9A200%E4%B8%87%E5%A4%AB%E5%A6%BB%E8%A2%AB%E5%B0%81%E5%8F%B7%23) `105.4K 🔥` `-90%`
1. [黄子韬最新回应嘴唇发紫 (Huang Zitao’s latest response to purple lips)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%9C%80%E6%96%B0%E5%9B%9E%E5%BA%94%E5%98%B4%E5%94%87%E5%8F%91%E7%B4%AB%23) `104.8K 🔥` `-33%`
1. [刘琳琳回应长得像张凌赫](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%90%B3%E7%90%B3%E5%9B%9E%E5%BA%94%E9%95%BF%E5%BE%97%E5%83%8F%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `95.3K 🔥` `-39%`
1. [夫妻7万买男婴为上户伪造弃婴 (Couple buys baby boy for RMB 70,000 to fake abandoned baby)](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB7%E4%B8%87%E4%B9%B0%E7%94%B7%E5%A9%B4%E4%B8%BA%E4%B8%8A%E6%88%B7%E4%BC%AA%E9%80%A0%E5%BC%83%E5%A9%B4%23) `81.8K 🔥` `-28%`
1. [霍尔木兹海峡完全关闭](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%AE%8C%E5%85%A8%E5%85%B3%E9%97%AD%23) `81.6K 🔥` `-63%`
1. [叶一茜说不如第一季就来浪姐](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E4%B8%80%E8%8C%9C%E8%AF%B4%E4%B8%8D%E5%A6%82%E7%AC%AC%E4%B8%80%E5%AD%A3%E5%B0%B1%E6%9D%A5%E6%B5%AA%E5%A7%90%23) `67.1K 🔥` `-30%`
1. [打击伊朗期间美军消耗约760万杯咖啡](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%E6%9C%9F%E9%97%B4%E7%BE%8E%E5%86%9B%E6%B6%88%E8%80%97%E7%BA%A6760%E4%B8%87%E6%9D%AF%E5%92%96%E5%95%A1%23) `65.1K 🔥` `-58%`
1. [疑似李楷灿恋爱](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%9D%8E%E6%A5%B7%E7%81%BF%E6%81%8B%E7%88%B1%23) `65.0K 🔥` `-45%`
1. [浪姐](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `65.0K 🔥` `-42%`

Updated at 2026-04-10 14:11:27

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
