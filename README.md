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

1. [Image2 消除AI味儿 (Image2 Eliminate the smell of AI)](https://s.weibo.com/weibo?q=%23Image2%20%E6%B6%88%E9%99%A4AI%E5%91%B3%E5%84%BF%23) `761.8K 🔥` `NEW`
1. [全新一代问界M9系列开启预售](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E4%B8%80%E4%BB%A3%E9%97%AE%E7%95%8CM9%E7%B3%BB%E5%88%97%E5%BC%80%E5%90%AF%E9%A2%84%E5%94%AE%23) `630.3K 🔥` `NEW`
1. [家长向老师索要试卷引发激烈争执](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E5%90%91%E8%80%81%E5%B8%88%E7%B4%A2%E8%A6%81%E8%AF%95%E5%8D%B7%E5%BC%95%E5%8F%91%E6%BF%80%E7%83%88%E4%BA%89%E6%89%A7%23) `592.3K 🔥` `NEW`
1. [华为乾崑赋能阿维塔06T巅峰上市](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E8%B5%8B%E8%83%BD%E9%98%BF%E7%BB%B4%E5%A1%9406T%E5%B7%85%E5%B3%B0%E4%B8%8A%E5%B8%82%23) `571.1K 🔥` `NEW`
1. [小猫吐了一颗小乳牙](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%90%90%E4%BA%86%E4%B8%80%E9%A2%97%E5%B0%8F%E4%B9%B3%E7%89%99%23) `309.7K 🔥` `NEW`
1. [曾沛慈已婚](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%B7%B2%E5%A9%9A%23) `288.1K 🔥` `NEW`
1. [外国人震惊中国水果摊老板开门睡觉](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E9%9C%87%E6%83%8A%E4%B8%AD%E5%9B%BD%E6%B0%B4%E6%9E%9C%E6%91%8A%E8%80%81%E6%9D%BF%E5%BC%80%E9%97%A8%E7%9D%A1%E8%A7%89%23) `259.4K 🔥` `NEW`
1. [宋威龙张凌赫同品牌同姿势](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%8C%E5%93%81%E7%89%8C%E5%90%8C%E5%A7%BF%E5%8A%BF%23) `229.6K 🔥` `NEW`
1. [女子乘高铁被26寸行李箱砸伤头](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%98%E9%AB%98%E9%93%81%E8%A2%AB26%E5%AF%B8%E8%A1%8C%E6%9D%8E%E7%AE%B1%E7%A0%B8%E4%BC%A4%E5%A4%B4%23) `225.6K 🔥` `NEW`
1. [王楚钦独特合照视角](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%8B%AC%E7%89%B9%E5%90%88%E7%85%A7%E8%A7%86%E8%A7%92%23) `225.4K 🔥` `NEW`
1. [何润东和老婆是在夜店认识的 (Peter Ho and his wife met in a nightclub)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E5%92%8C%E8%80%81%E5%A9%86%E6%98%AF%E5%9C%A8%E5%A4%9C%E5%BA%97%E8%AE%A4%E8%AF%86%E7%9A%84%23) `225.0K 🔥` `NEW`
1. [春假11天秋假13天家长直呼受不了](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%81%8711%E5%A4%A9%E7%A7%8B%E5%81%8713%E5%A4%A9%E5%AE%B6%E9%95%BF%E7%9B%B4%E5%91%BC%E5%8F%97%E4%B8%8D%E4%BA%86%23) `221.4K 🔥` `NEW`
1. [女大学生说同房间女生被打得一身血](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%AF%B4%E5%90%8C%E6%88%BF%E9%97%B4%E5%A5%B3%E7%94%9F%E8%A2%AB%E6%89%93%E5%BE%97%E4%B8%80%E8%BA%AB%E8%A1%80%23) `220.9K 🔥` `NEW`
1. [张凌赫田曦薇 假封面](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%20%E5%81%87%E5%B0%81%E9%9D%A2%23) `219.4K 🔥` `NEW`
1. [突然发现事缓则圆可能是真的](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E4%BA%8B%E7%BC%93%E5%88%99%E5%9C%86%E5%8F%AF%E8%83%BD%E6%98%AF%E7%9C%9F%E7%9A%84%23) `219.3K 🔥` `NEW`
1. [第一次感受到相亲的无力感](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%84%9F%E5%8F%97%E5%88%B0%E7%9B%B8%E4%BA%B2%E7%9A%84%E6%97%A0%E5%8A%9B%E6%84%9F%23) `210.3K 🔥` `NEW`
1. [后援会否认李卿恋情](https://s.weibo.com/weibo?q=%23%E5%90%8E%E6%8F%B4%E4%BC%9A%E5%90%A6%E8%AE%A4%E6%9D%8E%E5%8D%BF%E6%81%8B%E6%83%85%23) `204.2K 🔥` `NEW`
1. [杨洋怎么还长十年前的样子](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%80%8E%E4%B9%88%E8%BF%98%E9%95%BF%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9A%84%E6%A0%B7%E5%AD%90%23) `178.6K 🔥` `NEW`
1. [掌掴停车女子保安已停职](https://s.weibo.com/weibo?q=%23%E6%8E%8C%E6%8E%B4%E5%81%9C%E8%BD%A6%E5%A5%B3%E5%AD%90%E4%BF%9D%E5%AE%89%E5%B7%B2%E5%81%9C%E8%81%8C%23) `171.0K 🔥` `NEW`
1. [宫颈粘液栓是什么](https://s.weibo.com/weibo?q=%23%E5%AE%AB%E9%A2%88%E7%B2%98%E6%B6%B2%E6%A0%93%E6%98%AF%E4%BB%80%E4%B9%88%23) `167.3K 🔥` `NEW`
1. [金枕榴莲已大量上市 (Golden pillow durian has been put on the market in large quantities)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9E%95%E6%A6%B4%E8%8E%B2%E5%B7%B2%E5%A4%A7%E9%87%8F%E4%B8%8A%E5%B8%82%23) `161.6K 🔥` `NEW`
1. [不要在自己的身体里运行别人的程序](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%9C%A8%E8%87%AA%E5%B7%B1%E7%9A%84%E8%BA%AB%E4%BD%93%E9%87%8C%E8%BF%90%E8%A1%8C%E5%88%AB%E4%BA%BA%E7%9A%84%E7%A8%8B%E5%BA%8F%23) `139.6K 🔥` `NEW`
1. [伊媒首次发布扣押集装箱船画面](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%AA%92%E9%A6%96%E6%AC%A1%E5%8F%91%E5%B8%83%E6%89%A3%E6%8A%BC%E9%9B%86%E8%A3%85%E7%AE%B1%E8%88%B9%E7%94%BB%E9%9D%A2%23) `116.1K 🔥` `NEW`
1. [家长徒手拔蜱虫致1岁幼儿病危](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E5%BE%92%E6%89%8B%E6%8B%94%E8%9C%B1%E8%99%AB%E8%87%B41%E5%B2%81%E5%B9%BC%E5%84%BF%E7%97%85%E5%8D%B1%23) `116.1K 🔥` `NEW`
1. [员工建600多个工作群离职拒交接](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E5%BB%BA600%E5%A4%9A%E4%B8%AA%E5%B7%A5%E4%BD%9C%E7%BE%A4%E7%A6%BB%E8%81%8C%E6%8B%92%E4%BA%A4%E6%8E%A5%23) `1.1M 🔥` `+100%`
1. [伊称已收到首笔霍尔木兹通行费](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E7%A7%B0%E5%B7%B2%E6%94%B6%E5%88%B0%E9%A6%96%E7%AC%94%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E9%80%9A%E8%A1%8C%E8%B4%B9%23) `586.9K 🔥` `+105%`
1. [神仙肉](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%23) `581.9K 🔥` `+157%`
1. [KPL选手大会](https://s.weibo.com/weibo?q=%23KPL%E9%80%89%E6%89%8B%E5%A4%A7%E4%BC%9A%23) `304.6K 🔥` `+24%`
1. [食物热量越来越极端了](https://s.weibo.com/weibo?q=%23%E9%A3%9F%E7%89%A9%E7%83%AD%E9%87%8F%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%9E%81%E7%AB%AF%E4%BA%86%23) `542.1K 🔥`
1. [刘宇宁否认与宋祖儿恋情](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%90%A6%E8%AE%A4%E4%B8%8E%E5%AE%8B%E7%A5%96%E5%84%BF%E6%81%8B%E6%83%85%23) `276.6K 🔥`
1. [唐艺昕袜子都跳破了 (Tang Yixin’s socks were torn)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E8%A2%9C%E5%AD%90%E9%83%BD%E8%B7%B3%E7%A0%B4%E4%BA%86%23) `236.0K 🔥`
1. [泰国榴莲正在疯狂涌入](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%A6%B4%E8%8E%B2%E6%AD%A3%E5%9C%A8%E7%96%AF%E7%8B%82%E6%B6%8C%E5%85%A5%23) `231.4K 🔥`
1. [1台车7个月狂揽400亿](https://s.weibo.com/weibo?q=%231%E5%8F%B0%E8%BD%A67%E4%B8%AA%E6%9C%88%E7%8B%82%E6%8F%BD400%E4%BA%BF%23) `225.6K 🔥`
1. [普通人一生的收入](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E4%B8%80%E7%94%9F%E7%9A%84%E6%94%B6%E5%85%A5%23) `224.5K 🔥`
1. [金莎线下状态](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E7%BA%BF%E4%B8%8B%E7%8A%B6%E6%80%81%23) `223.6K 🔥`
1. [A股 4100点 (A shares 4100 points)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%204100%E7%82%B9%23) `222.5K 🔥`
1. [陆地cp](https://s.weibo.com/weibo?q=%23%E9%99%86%E5%9C%B0cp%23) `219.7K 🔥`
1. [谢娜在浪姐群发张杰](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9C%A8%E6%B5%AA%E5%A7%90%E7%BE%A4%E5%8F%91%E5%BC%A0%E6%9D%B0%23) `218.1K 🔥`
1. [鹿晗去王勉家带了臭豆腐](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8E%BB%E7%8E%8B%E5%8B%89%E5%AE%B6%E5%B8%A6%E4%BA%86%E8%87%AD%E8%B1%86%E8%85%90%23) `216.9K 🔥`
1. [志愿军烈士遗骸安葬仪式](https://s.weibo.com/weibo?q=%23%E5%BF%97%E6%84%BF%E5%86%9B%E7%83%88%E5%A3%AB%E9%81%97%E9%AA%B8%E5%AE%89%E8%91%AC%E4%BB%AA%E5%BC%8F%23) `632.7K 🔥` `-31%`
1. [花251块买的女装](https://s.weibo.com/weibo?q=%23%E8%8A%B1251%E5%9D%97%E4%B9%B0%E7%9A%84%E5%A5%B3%E8%A3%85%23) `388.0K 🔥` `-26%`
1. [民政局回应马頔李纯结婚证是手写的 (Civil Affairs Bureau responded that Ma Di and Li Chun’s marriage certificate was handwritten)](https://s.weibo.com/weibo?q=%23%E6%B0%91%E6%94%BF%E5%B1%80%E5%9B%9E%E5%BA%94%E9%A9%AC%E9%A0%94%E6%9D%8E%E7%BA%AF%E7%BB%93%E5%A9%9A%E8%AF%81%E6%98%AF%E6%89%8B%E5%86%99%E7%9A%84%23) `245.9K 🔥` `-57%`
1. [崔丽丽案发前年薪120多万元](https://s.weibo.com/weibo?q=%23%E5%B4%94%E4%B8%BD%E4%B8%BD%E6%A1%88%E5%8F%91%E5%89%8D%E5%B9%B4%E8%96%AA120%E5%A4%9A%E4%B8%87%E5%85%83%23) `224.0K 🔥` `-23%`
1. [朴宝剑张元英 演员脸和爱豆脸 (Park Bo Gum, Jang Won Young, actor face and idol face)](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%E5%BC%A0%E5%85%83%E8%8B%B1%20%E6%BC%94%E5%91%98%E8%84%B8%E5%92%8C%E7%88%B1%E8%B1%86%E8%84%B8%23) `223.1K 🔥` `-23%`
1. [何润东 那年花开月正圆](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%20%E9%82%A3%E5%B9%B4%E8%8A%B1%E5%BC%80%E6%9C%88%E6%AD%A3%E5%9C%86%23) `222.4K 🔥` `-23%`
1. [华晨宇演唱会场地开始拆了](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9C%BA%E5%9C%B0%E5%BC%80%E5%A7%8B%E6%8B%86%E4%BA%86%23) `221.6K 🔥` `-65%`
1. [转卖女大学生电诈园要求撤掉报道](https://s.weibo.com/weibo?q=%23%E8%BD%AC%E5%8D%96%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%94%B5%E8%AF%88%E5%9B%AD%E8%A6%81%E6%B1%82%E6%92%A4%E6%8E%89%E6%8A%A5%E9%81%93%23) `220.2K 🔥` `-75%`
1. [医生提醒40至60岁为神经梅毒高发人群](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%9240%E8%87%B360%E5%B2%81%E4%B8%BA%E7%A5%9E%E7%BB%8F%E6%A2%85%E6%AF%92%E9%AB%98%E5%8F%91%E4%BA%BA%E7%BE%A4%23) `170.1K 🔥` `-42%`
1. [曝快手表哥公会签约多名未成年艺人](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BF%AB%E6%89%8B%E8%A1%A8%E5%93%A5%E5%85%AC%E4%BC%9A%E7%AD%BE%E7%BA%A6%E5%A4%9A%E5%90%8D%E6%9C%AA%E6%88%90%E5%B9%B4%E8%89%BA%E4%BA%BA%23) `154.2K 🔥` `-52%`
1. [宋祖儿被指瘦脱相了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E8%A2%AB%E6%8C%87%E7%98%A6%E8%84%B1%E7%9B%B8%E4%BA%86%23) `143.3K 🔥` `-33%`
1. [丁禹兮 范思哲](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%20%E8%8C%83%E6%80%9D%E5%93%B2%23) `137.5K 🔥` `-46%`
1. [李小冉对王濛说大人说话别插嘴](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%AF%B9%E7%8E%8B%E6%BF%9B%E8%AF%B4%E5%A4%A7%E4%BA%BA%E8%AF%B4%E8%AF%9D%E5%88%AB%E6%8F%92%E5%98%B4%23) `118.4K 🔥` `-52%`

Updated at 2026-04-23 19:47:38

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
