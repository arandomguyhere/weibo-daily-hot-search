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

1. [中国将在哪些方向发力 (In what directions will China exert its efforts?)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%86%E5%9C%A8%E5%93%AA%E4%BA%9B%E6%96%B9%E5%90%91%E5%8F%91%E5%8A%9B%23) `599.8K 🔥` `NEW`
1. [关键词速览政府工作报告](https://s.weibo.com/weibo?q=%23%E5%85%B3%E9%94%AE%E8%AF%8D%E9%80%9F%E8%A7%88%E6%94%BF%E5%BA%9C%E5%B7%A5%E4%BD%9C%E6%8A%A5%E5%91%8A%23) `579.8K 🔥` `NEW`
1. [腾势Z9GT](https://s.weibo.com/weibo?q=%23%E8%85%BE%E5%8A%BFZ9GT%23) `574.1K 🔥` `NEW`
1. [郭艾伦受伤](https://s.weibo.com/weibo?q=%23%E9%83%AD%E8%89%BE%E4%BC%A6%E5%8F%97%E4%BC%A4%23) `564.1K 🔥` `NEW`
1. [腾势Z9GT充电9分钟续航超千公里](https://s.weibo.com/weibo?q=%23%E8%85%BE%E5%8A%BFZ9GT%E5%85%85%E7%94%B59%E5%88%86%E9%92%9F%E7%BB%AD%E8%88%AA%E8%B6%85%E5%8D%83%E5%85%AC%E9%87%8C%23) `531.6K 🔥` `NEW`
1. [33岁女子长相幼态常被认为是小学生](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E5%A5%B3%E5%AD%90%E9%95%BF%E7%9B%B8%E5%B9%BC%E6%80%81%E5%B8%B8%E8%A2%AB%E8%AE%A4%E4%B8%BA%E6%98%AF%E5%B0%8F%E5%AD%A6%E7%94%9F%23) `524.3K 🔥` `NEW`
1. [池昌旭 韩国酵母免疫者](https://s.weibo.com/weibo?q=%23%E6%B1%A0%E6%98%8C%E6%97%AD%20%E9%9F%A9%E5%9B%BD%E9%85%B5%E6%AF%8D%E5%85%8D%E7%96%AB%E8%80%85%23) `524.2K 🔥` `NEW`
1. [伊朗称成功突破以色列七层防御](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E6%88%90%E5%8A%9F%E7%AA%81%E7%A0%B4%E4%BB%A5%E8%89%B2%E5%88%97%E4%B8%83%E5%B1%82%E9%98%B2%E5%BE%A1%23) `524.0K 🔥` `NEW`
1. [田曦薇转圈出场](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%BD%AC%E5%9C%88%E5%87%BA%E5%9C%BA%23) `523.9K 🔥` `NEW`
1. [伊朗反击进入新阶段](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%8D%E5%87%BB%E8%BF%9B%E5%85%A5%E6%96%B0%E9%98%B6%E6%AE%B5%23) `523.6K 🔥` `NEW`
1. [坐飞机时发现邻座是只耶耶 (When I was on a plane, I noticed that the seat next to me was a guy.)](https://s.weibo.com/weibo?q=%23%E5%9D%90%E9%A3%9E%E6%9C%BA%E6%97%B6%E5%8F%91%E7%8E%B0%E9%82%BB%E5%BA%A7%E6%98%AF%E5%8F%AA%E8%80%B6%E8%80%B6%23) `523.3K 🔥` `NEW`
1. [文咏珊像肩膀里塞了个衣架](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%92%8F%E7%8F%8A%E5%83%8F%E8%82%A9%E8%86%80%E9%87%8C%E5%A1%9E%E4%BA%86%E4%B8%AA%E8%A1%A3%E6%9E%B6%23) `523.2K 🔥` `NEW`
1. [这就是未来五年的中国](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E6%9C%AA%E6%9D%A5%E4%BA%94%E5%B9%B4%E7%9A%84%E4%B8%AD%E5%9B%BD%23) `523.1K 🔥` `NEW`
1. [张艺兴直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E5%85%B4%E7%9B%B4%E6%92%AD%23) `522.8K 🔥` `NEW`
1. [叶璇都演婆婆了刘晓庆还在演少女](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E7%92%87%E9%83%BD%E6%BC%94%E5%A9%86%E5%A9%86%E4%BA%86%E5%88%98%E6%99%93%E5%BA%86%E8%BF%98%E5%9C%A8%E6%BC%94%E5%B0%91%E5%A5%B3%23) `522.7K 🔥` `NEW`
1. [女孩3天晒成酱油色回国被要中国护照](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A93%E5%A4%A9%E6%99%92%E6%88%90%E9%85%B1%E6%B2%B9%E8%89%B2%E5%9B%9E%E5%9B%BD%E8%A2%AB%E8%A6%81%E4%B8%AD%E5%9B%BD%E6%8A%A4%E7%85%A7%23) `522.6K 🔥` `NEW`
1. [建议不调休的代表被记者围住了 (The representative who suggested not taking the day off was surrounded by reporters)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%B0%83%E4%BC%91%E7%9A%84%E4%BB%A3%E8%A1%A8%E8%A2%AB%E8%AE%B0%E8%80%85%E5%9B%B4%E4%BD%8F%E4%BA%86%23) `756.1K 🔥` `+153%`
1. [吕严我家那小子录制路透](https://s.weibo.com/weibo?q=%23%E5%90%95%E4%B8%A5%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%E5%BD%95%E5%88%B6%E8%B7%AF%E9%80%8F%23) `592.6K 🔥` `+131%`
1. [两女子相隔7公里长得一模一样](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A5%B3%E5%AD%90%E7%9B%B8%E9%9A%947%E5%85%AC%E9%87%8C%E9%95%BF%E5%BE%97%E4%B8%80%E6%A8%A1%E4%B8%80%E6%A0%B7%23) `589.6K 🔥` `+68%`
1. [王嘉尔世巡多伦多墨西哥双场售罄 (Jackson Wang’s World Tour in Toronto and Mexico sold out)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E4%B8%96%E5%B7%A1%E5%A4%9A%E4%BC%A6%E5%A4%9A%E5%A2%A8%E8%A5%BF%E5%93%A5%E5%8F%8C%E5%9C%BA%E5%94%AE%E7%BD%84%23) `589.6K 🔥` `+82%`
1. [伊朗发射带1吨重弹头导弹打以色列 (Iran launches missile with 1-ton heavy warhead to hit Israel)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B0%84%E5%B8%A61%E5%90%A8%E9%87%8D%E5%BC%B9%E5%A4%B4%E5%AF%BC%E5%BC%B9%E6%89%93%E4%BB%A5%E8%89%B2%E5%88%97%23) `587.2K 🔥` `+43%`
1. [建议优化大学生婚育教育体系 (Suggestions on optimizing the marriage and childbearing education system for college students)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%BC%98%E5%8C%96%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%A9%9A%E8%82%B2%E6%95%99%E8%82%B2%E4%BD%93%E7%B3%BB%23) `583.2K 🔥` `+101%`
1. [伊朗避实就虚打击美军](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%81%BF%E5%AE%9E%E5%B0%B1%E8%99%9A%E6%89%93%E5%87%BB%E7%BE%8E%E5%86%9B%23) `568.2K 🔥` `+140%`
1. [高铁一等座4元二等座8元 (High-speed rail first-class seat 4 yuan, second-class seat 8 yuan)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E4%B8%80%E7%AD%89%E5%BA%A74%E5%85%83%E4%BA%8C%E7%AD%89%E5%BA%A78%E5%85%83%23) `568.0K 🔥` `+105%`
1. [鹤男](https://s.weibo.com/weibo?q=%23%E9%B9%A4%E7%94%B7%23) `556.7K 🔥` `+109%`
1. [代表说农民每月200元养老金太亏了 (Representatives say farmers’ monthly pension of 200 yuan is too much of a loss)](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%A1%A8%E8%AF%B4%E5%86%9C%E6%B0%91%E6%AF%8F%E6%9C%88200%E5%85%83%E5%85%BB%E8%80%81%E9%87%91%E5%A4%AA%E4%BA%8F%E4%BA%86%23) `552.9K 🔥` `+110%`
1. [比亚迪全球首创闪充桩来了](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%85%A8%E7%90%83%E9%A6%96%E5%88%9B%E9%97%AA%E5%85%85%E6%A1%A9%E6%9D%A5%E4%BA%86%23) `544.7K 🔥` `+206%`
1. [比亚迪闪充零下30度12分钟充饱](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E9%97%AA%E5%85%85%E9%9B%B6%E4%B8%8B30%E5%BA%A612%E5%88%86%E9%92%9F%E5%85%85%E9%A5%B1%23) `544.1K 🔥` `+108%`
1. [租房能不能别再开广角拍房子 (When renting a house, can you please stop taking wide-angle shots of the house?)](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E6%88%BF%E8%83%BD%E4%B8%8D%E8%83%BD%E5%88%AB%E5%86%8D%E5%BC%80%E5%B9%BF%E8%A7%92%E6%8B%8D%E6%88%BF%E5%AD%90%23) `535.9K 🔥` `+428%`
1. [现在就出发4](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `525.7K 🔥` `+93%`
1. [比Deepfake更严重的AI出现了](https://s.weibo.com/weibo?q=%23%E6%AF%94Deepfake%E6%9B%B4%E4%B8%A5%E9%87%8D%E7%9A%84AI%E5%87%BA%E7%8E%B0%E4%BA%86%23) `524.4K 🔥` `+235%`
1. [伊朗每天都向以色列发射导弹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AF%8F%E5%A4%A9%E9%83%BD%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%E5%8F%91%E5%B0%84%E5%AF%BC%E5%BC%B9%23) `524.3K 🔥` `+194%`
1. [纯真年代的爱情 烂尾 (Love in the age of innocence ended)](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%20%E7%83%82%E5%B0%BE%23) `524.1K 🔥` `+117%`
1. [攻玉主演 侯明昊鹤男 (Gong Yu starring Hou Minghao and Henan)](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%E4%B8%BB%E6%BC%94%20%E4%BE%AF%E6%98%8E%E6%98%8A%E9%B9%A4%E7%94%B7%23) `524.0K 🔥` `+119%`
1. [伊朗报复美以](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8A%A5%E5%A4%8D%E7%BE%8E%E4%BB%A5%23) `523.8K 🔥` `+115%`
1. [女子收到刮刮乐生日花束刮出80万元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%94%B6%E5%88%B0%E5%88%AE%E5%88%AE%E4%B9%90%E7%94%9F%E6%97%A5%E8%8A%B1%E6%9D%9F%E5%88%AE%E5%87%BA80%E4%B8%87%E5%85%83%23) `523.8K 🔥` `+261%`
1. [薛之谦万兽之王长沙站开启预售](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%B8%87%E5%85%BD%E4%B9%8B%E7%8E%8B%E9%95%BF%E6%B2%99%E7%AB%99%E5%BC%80%E5%90%AF%E9%A2%84%E5%94%AE%23) `523.7K 🔥` `+396%`
1. [真正长大了好像就是这样](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E9%95%BF%E5%A4%A7%E4%BA%86%E5%A5%BD%E5%83%8F%E5%B0%B1%E6%98%AF%E8%BF%99%E6%A0%B7%23) `523.5K 🔥` `+461%`
1. [伊朗称击落一架美军F15战斗机 (Iran says it shot down a US F15 fighter jet)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%87%BB%E8%90%BD%E4%B8%80%E6%9E%B6%E7%BE%8E%E5%86%9BF15%E6%88%98%E6%96%97%E6%9C%BA%23) `523.5K 🔥` `+217%`
1. [王一博巴黎随拍记录 (Wang Yibo Paris shooting record)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%B7%B4%E9%BB%8E%E9%9A%8F%E6%8B%8D%E8%AE%B0%E5%BD%95%23) `523.3K 🔥` `+340%`
1. [1岁9个月宝宝吃花生呛到脑部受损](https://s.weibo.com/weibo?q=%231%E5%B2%819%E4%B8%AA%E6%9C%88%E5%AE%9D%E5%AE%9D%E5%90%83%E8%8A%B1%E7%94%9F%E5%91%9B%E5%88%B0%E8%84%91%E9%83%A8%E5%8F%97%E6%8D%9F%23) `523.1K 🔥` `+249%`
1. [6个月宝宝第一次吃香蕉表情绝了](https://s.weibo.com/weibo?q=%236%E4%B8%AA%E6%9C%88%E5%AE%9D%E5%AE%9D%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%90%83%E9%A6%99%E8%95%89%E8%A1%A8%E6%83%85%E7%BB%9D%E4%BA%86%23) `523.0K 🔥` `+489%`
1. [建议解决公积金看得到用不了难题](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E8%A7%A3%E5%86%B3%E5%85%AC%E7%A7%AF%E9%87%91%E7%9C%8B%E5%BE%97%E5%88%B0%E7%94%A8%E4%B8%8D%E4%BA%86%E9%9A%BE%E9%A2%98%23) `522.9K 🔥` `+264%`
1. [AG爱笑](https://s.weibo.com/weibo?q=%23AG%E7%88%B1%E7%AC%91%23) `522.8K 🔥` `+129%`
1. [WBG对战AL (WBG vs. AL)](https://s.weibo.com/weibo?q=%23WBG%E5%AF%B9%E6%88%98AL%23) `522.5K 🔥` `+139%`
1. [花84万买到的140平步梯顶楼 (The top floor of a 140-square-foot staircase bought for 840,000 yuan)](https://s.weibo.com/weibo?q=%23%E8%8A%B184%E4%B8%87%E4%B9%B0%E5%88%B0%E7%9A%84140%E5%B9%B3%E6%AD%A5%E6%A2%AF%E9%A1%B6%E6%A5%BC%23) `522.4K 🔥` `+462%`
1. [建议短视频凌晨1点至5点深夜静默](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%9F%AD%E8%A7%86%E9%A2%91%E5%87%8C%E6%99%A81%E7%82%B9%E8%87%B35%E7%82%B9%E6%B7%B1%E5%A4%9C%E9%9D%99%E9%BB%98%23) `1.1M 🔥`
1. [全皮层修护真相揭秘 (The truth behind full skin repair)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%9A%AE%E5%B1%82%E4%BF%AE%E6%8A%A4%E7%9C%9F%E7%9B%B8%E6%8F%AD%E7%A7%98%23) `599.5K 🔥`
1. [春假清明连休6天家长称很无奈 (Parents said they were helpless after taking six consecutive days off during the Qingming Festival during the spring break.)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%81%87%E6%B8%85%E6%98%8E%E8%BF%9E%E4%BC%916%E5%A4%A9%E5%AE%B6%E9%95%BF%E7%A7%B0%E5%BE%88%E6%97%A0%E5%A5%88%23) `599.3K 🔥`
1. [WBG战胜AL](https://s.weibo.com/weibo?q=%23WBG%E6%88%98%E8%83%9CAL%23) `551.2K 🔥`
1. [惊蛰无声 (Waking of Insects is silent)](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `524.5K 🔥` `-33%`

Updated at 2026-03-05 22:11:38

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
