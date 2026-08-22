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

1. [F1 时代峰峻 (F1 era peaks)](https://s.weibo.com/weibo?q=%23F1%20%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%23) `566.3K 🔥` `NEW`
1. [电影大唐妖探今日上映](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%A4%A7%E5%94%90%E5%A6%96%E6%8E%A2%E4%BB%8A%E6%97%A5%E4%B8%8A%E6%98%A0%23) `479.0K 🔥` `NEW`
1. [重庆网友自发清理追星涂鸦](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E7%BD%91%E5%8F%8B%E8%87%AA%E5%8F%91%E6%B8%85%E7%90%86%E8%BF%BD%E6%98%9F%E6%B6%82%E9%B8%A6%23) `327.1K 🔥` `NEW`
1. [癌症疫苗](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%23) `272.9K 🔥` `NEW`
1. [猥亵骑马游客的教练已离岗](https://s.weibo.com/weibo?q=%23%E7%8C%A5%E4%BA%B5%E9%AA%91%E9%A9%AC%E6%B8%B8%E5%AE%A2%E7%9A%84%E6%95%99%E7%BB%83%E5%B7%B2%E7%A6%BB%E5%B2%97%23) `208.8K 🔥` `NEW`
1. [探秘统一老坛酸菜的诞生](https://s.weibo.com/weibo?q=%23%E6%8E%A2%E7%A7%98%E7%BB%9F%E4%B8%80%E8%80%81%E5%9D%9B%E9%85%B8%E8%8F%9C%E7%9A%84%E8%AF%9E%E7%94%9F%23) `196.0K 🔥` `NEW`
1. [早春晴朗1分钟亲了13次](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%971%E5%88%86%E9%92%9F%E4%BA%B2%E4%BA%8613%E6%AC%A1%23) `189.6K 🔥` `NEW`
1. [曾辉开始到处上大师课了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E5%BC%80%E5%A7%8B%E5%88%B0%E5%A4%84%E4%B8%8A%E5%A4%A7%E5%B8%88%E8%AF%BE%E4%BA%86%23) `154.7K 🔥` `NEW`
1. [鞠婧祎PORT九月刊封面](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8EPORT%E4%B9%9D%E6%9C%88%E5%88%8A%E5%B0%81%E9%9D%A2%23) `146.1K 🔥` `NEW`
1. [偶遇宋雨琦打卡自己海报](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%89%93%E5%8D%A1%E8%87%AA%E5%B7%B1%E6%B5%B7%E6%8A%A5%23) `143.5K 🔥` `NEW`
1. [减肥最大的受害人来了 (The biggest victim of weight loss is here)](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E6%9C%80%E5%A4%A7%E7%9A%84%E5%8F%97%E5%AE%B3%E4%BA%BA%E6%9D%A5%E4%BA%86%23) `102.8K 🔥` `NEW`
1. [特朗普称若输掉中期选举将被弹劾](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%8B%A5%E8%BE%93%E6%8E%89%E4%B8%AD%E6%9C%9F%E9%80%89%E4%B8%BE%E5%B0%86%E8%A2%AB%E5%BC%B9%E5%8A%BE%23) `102.6K 🔥` `NEW`
1. [动漫仲夏狂欢季](https://s.weibo.com/weibo?q=%23%E5%8A%A8%E6%BC%AB%E4%BB%B2%E5%A4%8F%E7%8B%82%E6%AC%A2%E5%AD%A3%23) `83.7K 🔥` `NEW`
1. [机器人跑步神似章若楠](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B7%91%E6%AD%A5%E7%A5%9E%E4%BC%BC%E7%AB%A0%E8%8B%A5%E6%A5%A0%23) `81.7K 🔥` `NEW`
1. [55元捡漏1.41万项链女子获5元补偿](https://s.weibo.com/weibo?q=%2355%E5%85%83%E6%8D%A1%E6%BC%8F1.41%E4%B8%87%E9%A1%B9%E9%93%BE%E5%A5%B3%E5%AD%90%E8%8E%B75%E5%85%83%E8%A1%A5%E5%81%BF%23) `1.3M 🔥` `+776%`
1. [榜一大哥称逼急了让我老婆告我 (Brother No. 1 on the list said he wanted my wife to sue me because I was in a hurry.)](https://s.weibo.com/weibo?q=%23%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%E7%A7%B0%E9%80%BC%E6%80%A5%E4%BA%86%E8%AE%A9%E6%88%91%E8%80%81%E5%A9%86%E5%91%8A%E6%88%91%23) `874.3K 🔥` `+561%`
1. [艾滋病 配偶知情权](https://s.weibo.com/weibo?q=%23%E8%89%BE%E6%BB%8B%E7%97%85%20%E9%85%8D%E5%81%B6%E7%9F%A5%E6%83%85%E6%9D%83%23) `547.1K 🔥` `+49%`
1. [第一次见外国人出来打假北欧硬面包](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%A4%96%E5%9B%BD%E4%BA%BA%E5%87%BA%E6%9D%A5%E6%89%93%E5%81%87%E5%8C%97%E6%AC%A7%E7%A1%AC%E9%9D%A2%E5%8C%85%23) `404.5K 🔥` `+55%`
1. [九门只死了一只鸟](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%8F%AA%E6%AD%BB%E4%BA%86%E4%B8%80%E5%8F%AA%E9%B8%9F%23) `394.6K 🔥` `+227%`
1. [厚本新剧美成这样了 (Houben’s new drama is so beautiful)](https://s.weibo.com/weibo?q=%23%E5%8E%9A%E6%9C%AC%E6%96%B0%E5%89%A7%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `386.8K 🔥` `+23%`
1. [女星穿香奈儿无底鞋脚掌变黑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%98%9F%E7%A9%BF%E9%A6%99%E5%A5%88%E5%84%BF%E6%97%A0%E5%BA%95%E9%9E%8B%E8%84%9A%E6%8E%8C%E5%8F%98%E9%BB%91%23) `377.5K 🔥` `+66%`
1. [欢子 退赛](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%20%E9%80%80%E8%B5%9B%23) `374.3K 🔥` `+65%`
1. [董璇让粉丝不要总是给小酒窝买盲盒了 (Dong Xuan asks fans not to always buy blind boxes for Xiaodimple)](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E8%AE%A9%E7%B2%89%E4%B8%9D%E4%B8%8D%E8%A6%81%E6%80%BB%E6%98%AF%E7%BB%99%E5%B0%8F%E9%85%92%E7%AA%9D%E4%B9%B0%E7%9B%B2%E7%9B%92%E4%BA%86%23) `364.2K 🔥` `+60%`
1. [一斤鸭脖能买一斤牛肉一斤排骨](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%96%A4%E9%B8%AD%E8%84%96%E8%83%BD%E4%B9%B0%E4%B8%80%E6%96%A4%E7%89%9B%E8%82%89%E4%B8%80%E6%96%A4%E6%8E%92%E9%AA%A8%23) `362.8K 🔥` `+60%`
1. [曾辉手机壳是跟韩雨彤的合照](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%89%8B%E6%9C%BA%E5%A3%B3%E6%98%AF%E8%B7%9F%E9%9F%A9%E9%9B%A8%E5%BD%A4%E7%9A%84%E5%90%88%E7%85%A7%23) `359.1K 🔥` `+58%`
1. [陈柏霖当庭认罪 (Chen Bolin pleads guilty in court)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%9F%8F%E9%9C%96%E5%BD%93%E5%BA%AD%E8%AE%A4%E7%BD%AA%23) `347.3K 🔥` `+53%`
1. [王橹杰成都外出弟弟同行](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%88%90%E9%83%BD%E5%A4%96%E5%87%BA%E5%BC%9F%E5%BC%9F%E5%90%8C%E8%A1%8C%23) `303.0K 🔥` `+93%`
1. [女生暗恋被拒5年收到一箱青春档案](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%9A%97%E6%81%8B%E8%A2%AB%E6%8B%925%E5%B9%B4%E6%94%B6%E5%88%B0%E4%B8%80%E7%AE%B1%E9%9D%92%E6%98%A5%E6%A1%A3%E6%A1%88%23) `272.6K 🔥` `+26%`
1. [印度少年为要手机致一家三口坠崖](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%B0%91%E5%B9%B4%E4%B8%BA%E8%A6%81%E6%89%8B%E6%9C%BA%E8%87%B4%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%9D%A0%E5%B4%96%23) `271.7K 🔥` `+29%`
1. [居家办公都发展成这样了](https://s.weibo.com/weibo?q=%23%E5%B1%85%E5%AE%B6%E5%8A%9E%E5%85%AC%E9%83%BD%E5%8F%91%E5%B1%95%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `203.1K 🔥` `+85%`
1. [1个视频看懂公积金提取新规 (1 video to understand the new rules for withdrawing provident funds)](https://s.weibo.com/weibo?q=%231%E4%B8%AA%E8%A7%86%E9%A2%91%E7%9C%8B%E6%87%82%E5%85%AC%E7%A7%AF%E9%87%91%E6%8F%90%E5%8F%96%E6%96%B0%E8%A7%84%23) `711.4K 🔥`
1. [特步双旗舰问鼎世界 (Xtep’s dual flagships strive to dominate the world)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%AD%A5%E5%8F%8C%E6%97%97%E8%88%B0%E9%97%AE%E9%BC%8E%E4%B8%96%E7%95%8C%23) `570.7K 🔥`
1. [张俪辞退修图师反转 (Zhang Li fires retoucher and reverses course)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BF%AA%E8%BE%9E%E9%80%80%E4%BF%AE%E5%9B%BE%E5%B8%88%E5%8F%8D%E8%BD%AC%23) `201.6K 🔥`
1. [94岁老战士穿外骨骼感觉年轻了](https://s.weibo.com/weibo?q=%2394%E5%B2%81%E8%80%81%E6%88%98%E5%A3%AB%E7%A9%BF%E5%A4%96%E9%AA%A8%E9%AA%BC%E6%84%9F%E8%A7%89%E5%B9%B4%E8%BD%BB%E4%BA%86%23) `183.2K 🔥`
1. [大妈骑车戴三级头震惊辅警 (The aunt wearing a three-level headgear while riding a bicycle shocked the auxiliary police)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A6%88%E9%AA%91%E8%BD%A6%E6%88%B4%E4%B8%89%E7%BA%A7%E5%A4%B4%E9%9C%87%E6%83%8A%E8%BE%85%E8%AD%A6%23) `181.8K 🔥`
1. [美国偶遇田亮叶一茜森碟](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%81%B6%E9%81%87%E7%94%B0%E4%BA%AE%E5%8F%B6%E4%B8%80%E8%8C%9C%E6%A3%AE%E7%A2%9F%23) `181.3K 🔥`
1. [霸总开着劳斯莱斯吃路边小馆](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E6%80%BB%E5%BC%80%E7%9D%80%E5%8A%B3%E6%96%AF%E8%8E%B1%E6%96%AF%E5%90%83%E8%B7%AF%E8%BE%B9%E5%B0%8F%E9%A6%86%23) `179.1K 🔥`
1. [游客玉佩落水被锦鲤衔住 (Tourist's jade pendant fell into the water and was caught by a koi fish)](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E7%8E%89%E4%BD%A9%E8%90%BD%E6%B0%B4%E8%A2%AB%E9%94%A6%E9%B2%A4%E8%A1%94%E4%BD%8F%23) `170.7K 🔥`
1. [2026年亚运会](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `167.6K 🔥`
1. [鸭货为何不好卖了 (Why are duck products so hard to sell?)](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E8%B4%A7%E4%B8%BA%E4%BD%95%E4%B8%8D%E5%A5%BD%E5%8D%96%E4%BA%86%23) `144.2K 🔥`
1. [黑灯 弹壳](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%81%AF%20%E5%BC%B9%E5%A3%B3%23) `143.8K 🔥`
1. [丈夫拍妻子出轨却因妨害隐私获刑](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E6%8B%8D%E5%A6%BB%E5%AD%90%E5%87%BA%E8%BD%A8%E5%8D%B4%E5%9B%A0%E5%A6%A8%E5%AE%B3%E9%9A%90%E7%A7%81%E8%8E%B7%E5%88%91%23) `133.6K 🔥`
1. [女子用口罩完美复刻香奈儿无底鞋](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A8%E5%8F%A3%E7%BD%A9%E5%AE%8C%E7%BE%8E%E5%A4%8D%E5%88%BB%E9%A6%99%E5%A5%88%E5%84%BF%E6%97%A0%E5%BA%95%E9%9E%8B%23) `105.6K 🔥`
1. [你好星期六全员斗智斗勇](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E5%85%A8%E5%91%98%E6%96%97%E6%99%BA%E6%96%97%E5%8B%87%23) `82.1K 🔥`
1. [外国网友怀疑中国农村是AI (Foreign netizens suspect that China’s rural areas are caused by AI)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%80%80%E7%96%91%E4%B8%AD%E5%9B%BD%E5%86%9C%E6%9D%91%E6%98%AFAI%23) `482.9K 🔥` `-56%`
1. [妻子未提供精卵不享有胚胎处置权](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E6%9C%AA%E6%8F%90%E4%BE%9B%E7%B2%BE%E5%8D%B5%E4%B8%8D%E4%BA%AB%E6%9C%89%E8%83%9A%E8%83%8E%E5%A4%84%E7%BD%AE%E6%9D%83%23) `399.0K 🔥` `-48%`
1. [无法对小时候的杯子祛魅](https://s.weibo.com/weibo?q=%23%E6%97%A0%E6%B3%95%E5%AF%B9%E5%B0%8F%E6%97%B6%E5%80%99%E7%9A%84%E6%9D%AF%E5%AD%90%E7%A5%9B%E9%AD%85%23) `226.3K 🔥` `-42%`
1. [全球首例为蟒蛇实施人类癌症疗法](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%A6%96%E4%BE%8B%E4%B8%BA%E8%9F%92%E8%9B%87%E5%AE%9E%E6%96%BD%E4%BA%BA%E7%B1%BB%E7%99%8C%E7%97%87%E7%96%97%E6%B3%95%23) `177.5K 🔥` `-22%`
1. [陈妍希怼恶评 (Michelle Chen responds to negative comments)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%80%BC%E6%81%B6%E8%AF%84%23) `133.4K 🔥` `-25%`
1. [浮生杀青](https://s.weibo.com/weibo?q=%23%E6%B5%AE%E7%94%9F%E6%9D%80%E9%9D%92%23) `112.1K 🔥` `-30%`
1. [女婴被遗弃在福州福利院门口 (Baby girl abandoned at the door of Fuzhou welfare home)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%A9%B4%E8%A2%AB%E9%81%97%E5%BC%83%E5%9C%A8%E7%A6%8F%E5%B7%9E%E7%A6%8F%E5%88%A9%E9%99%A2%E9%97%A8%E5%8F%A3%23) `107.2K 🔥` `-25%`

Updated at 2026-08-22 12:44:01

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
