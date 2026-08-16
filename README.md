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

1. [许昌店主称胖东来附近店面会很难抢 (A store owner in Xuchang said it would be difficult to grab a store near Fat Dong Lai)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%8C%E5%BA%97%E4%B8%BB%E7%A7%B0%E8%83%96%E4%B8%9C%E6%9D%A5%E9%99%84%E8%BF%91%E5%BA%97%E9%9D%A2%E4%BC%9A%E5%BE%88%E9%9A%BE%E6%8A%A2%23) `450.2K 🔥` `NEW`
1. [你好星期六七夕全员错付](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E4%B8%83%E5%A4%95%E5%85%A8%E5%91%98%E9%94%99%E4%BB%98%23) `410.1K 🔥` `NEW`
1. [带大3个非亲生孙女婆婆哀求留下一个](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E5%A4%A73%E4%B8%AA%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%AD%99%E5%A5%B3%E5%A9%86%E5%A9%86%E5%93%80%E6%B1%82%E7%95%99%E4%B8%8B%E4%B8%80%E4%B8%AA%23) `320.5K 🔥` `NEW`
1. [陈星旭杨超越复刻恶作剧之吻](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%E6%9D%A8%E8%B6%85%E8%B6%8A%E5%A4%8D%E5%88%BB%E6%81%B6%E4%BD%9C%E5%89%A7%E4%B9%8B%E5%90%BB%23) `280.9K 🔥` `NEW`
1. [于东来饭店消费380元支付600元](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E9%A5%AD%E5%BA%97%E6%B6%88%E8%B4%B9380%E5%85%83%E6%94%AF%E4%BB%98600%E5%85%83%23) `280.5K 🔥` `NEW`
1. [王俊凯拿什么输](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%8B%BF%E4%BB%80%E4%B9%88%E8%BE%93%23) `277.8K 🔥` `NEW`
1. [手机涨价何时是个头](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%E4%BD%95%E6%97%B6%E6%98%AF%E4%B8%AA%E5%A4%B4%23) `276.0K 🔥` `NEW`
1. [我们的少年时代2主角设定](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E4%B8%BB%E8%A7%92%E8%AE%BE%E5%AE%9A%23) `269.1K 🔥` `NEW`
1. [他要一辈子喜欢周深了](https://s.weibo.com/weibo?q=%23%E4%BB%96%E8%A6%81%E4%B8%80%E8%BE%88%E5%AD%90%E5%96%9C%E6%AC%A2%E5%91%A8%E6%B7%B1%E4%BA%86%23) `246.4K 🔥` `NEW`
1. [女子产后抑郁自杀生前备忘录曝光](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%A7%E5%90%8E%E6%8A%91%E9%83%81%E8%87%AA%E6%9D%80%E7%94%9F%E5%89%8D%E5%A4%87%E5%BF%98%E5%BD%95%E6%9B%9D%E5%85%89%23) `246.3K 🔥` `NEW`
1. [TOP官宣无畏契约成都表演赛 (TOP Officially Announces Fearless Contract Chengdu Exhibition Tournament)](https://s.weibo.com/weibo?q=%23TOP%E5%AE%98%E5%AE%A3%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E6%88%90%E9%83%BD%E8%A1%A8%E6%BC%94%E8%B5%9B%23) `246.2K 🔥` `NEW`
1. [严查社保实缴会逼企业裁员吗](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%9F%A5%E7%A4%BE%E4%BF%9D%E5%AE%9E%E7%BC%B4%E4%BC%9A%E9%80%BC%E4%BC%81%E4%B8%9A%E8%A3%81%E5%91%98%E5%90%97%23) `174.3K 🔥` `NEW`
1. [于敏诞辰100周年](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%95%8F%E8%AF%9E%E8%BE%B0100%E5%91%A8%E5%B9%B4%23) `172.1K 🔥` `NEW`
1. [开出去开心去](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%87%BA%E5%8E%BB%E5%BC%80%E5%BF%83%E5%8E%BB%23) `171.7K 🔥` `NEW`
1. [国乒围剿张本美和](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%9B%B4%E5%89%BF%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `160.6K 🔥` `NEW`
1. [老人闯高速身亡子女索赔13万](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E9%97%AF%E9%AB%98%E9%80%9F%E8%BA%AB%E4%BA%A1%E5%AD%90%E5%A5%B3%E7%B4%A2%E8%B5%9413%E4%B8%87%23) `799.0K 🔥` `+72%`
1. [被公诉女主播已赔偿榜一大哥200万](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%85%AC%E8%AF%89%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%B7%B2%E8%B5%94%E5%81%BF%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5200%E4%B8%87%23) `393.2K 🔥` `+37%`
1. [曝C罗家人都未出席婚礼](https://s.weibo.com/weibo?q=%23%E6%9B%9DC%E7%BD%97%E5%AE%B6%E4%BA%BA%E9%83%BD%E6%9C%AA%E5%87%BA%E5%B8%AD%E5%A9%9A%E7%A4%BC%23) `207.7K 🔥` `+45%`
1. [长时间没进组的演员](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%97%B6%E9%97%B4%E6%B2%A1%E8%BF%9B%E7%BB%84%E7%9A%84%E6%BC%94%E5%91%98%23) `197.7K 🔥` `+29%`
1. [胖东来将闭门店28个收银口排长龙 (Fat Dong Lai will close its stores and there will be long queues at 28 cashiers.)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%B0%86%E9%97%AD%E9%97%A8%E5%BA%9728%E4%B8%AA%E6%94%B6%E9%93%B6%E5%8F%A3%E6%8E%92%E9%95%BF%E9%BE%99%23) `1.1M 🔥`
1. [进货式游中国火了 (Purchase-style travel to China is popular)](https://s.weibo.com/weibo?q=%23%E8%BF%9B%E8%B4%A7%E5%BC%8F%E6%B8%B8%E4%B8%AD%E5%9B%BD%E7%81%AB%E4%BA%86%23) `668.4K 🔥`
1. [曾辉把炎亚纶炸出来了 (Zeng Hui blew up Yan Yalun)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%8A%8A%E7%82%8E%E4%BA%9A%E7%BA%B6%E7%82%B8%E5%87%BA%E6%9D%A5%E4%BA%86%23) `629.9K 🔥`
1. [中国籍男子在靖国神社附近挥舞国旗](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%B1%8D%E7%94%B7%E5%AD%90%E5%9C%A8%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%E9%99%84%E8%BF%91%E6%8C%A5%E8%88%9E%E5%9B%BD%E6%97%97%23) `539.7K 🔥`
1. [王传君终于原谅爱情公寓了 (Wang Chuanjun finally forgives iPartment)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%BB%88%E4%BA%8E%E5%8E%9F%E8%B0%85%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%BA%86%23) `534.2K 🔥`
1. [四六级 (Level 4 and Level 6)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%23) `439.9K 🔥`
1. [沪上阿姨 蹭流量 (Auntie from Shanghai, using traffic)](https://s.weibo.com/weibo?q=%23%E6%B2%AA%E4%B8%8A%E9%98%BF%E5%A7%A8%20%E8%B9%AD%E6%B5%81%E9%87%8F%23) `439.2K 🔥`
1. [王传君用十年承认了爱情公寓的意义](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%94%A8%E5%8D%81%E5%B9%B4%E6%89%BF%E8%AE%A4%E4%BA%86%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E7%9A%84%E6%84%8F%E4%B9%89%23) `281.7K 🔥`
1. [曝谷爱凌LV三公子恋情](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B0%B7%E7%88%B1%E5%87%8CLV%E4%B8%89%E5%85%AC%E5%AD%90%E6%81%8B%E6%83%85%23) `275.4K 🔥`
1. [菲律宾防长指挥军队抓捕中国工人](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E9%98%B2%E9%95%BF%E6%8C%87%E6%8C%A5%E5%86%9B%E9%98%9F%E6%8A%93%E6%8D%95%E4%B8%AD%E5%9B%BD%E5%B7%A5%E4%BA%BA%23) `275.0K 🔥`
1. [日军在南京每晚一千起强奸案](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%86%9B%E5%9C%A8%E5%8D%97%E4%BA%AC%E6%AF%8F%E6%99%9A%E4%B8%80%E5%8D%83%E8%B5%B7%E5%BC%BA%E5%A5%B8%E6%A1%88%23) `261.9K 🔥`
1. [曹骏披哥席位第一 (Cao Junpi's brother ranks first)](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E6%8A%AB%E5%93%A5%E5%B8%AD%E4%BD%8D%E7%AC%AC%E4%B8%80%23) `255.1K 🔥`
1. [抢着立案 有钱赚](https://s.weibo.com/weibo?q=%23%E6%8A%A2%E7%9D%80%E7%AB%8B%E6%A1%88%20%E6%9C%89%E9%92%B1%E8%B5%9A%23) `221.4K 🔥`
1. [汉奸石平参拜靖国神社 (Traitor Shi Ping visits Yasukuni Shrine)](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A5%B8%E7%9F%B3%E5%B9%B3%E5%8F%82%E6%8B%9C%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%23) `203.5K 🔥`
1. [老板送6只烧鸡于东来提出付2000元](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E9%80%816%E5%8F%AA%E7%83%A7%E9%B8%A1%E4%BA%8E%E4%B8%9C%E6%9D%A5%E6%8F%90%E5%87%BA%E4%BB%982000%E5%85%83%23) `188.3K 🔥`
1. [胖东来闭店裁缝摊称将跟随搬迁](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%97%AD%E5%BA%97%E8%A3%81%E7%BC%9D%E6%91%8A%E7%A7%B0%E5%B0%86%E8%B7%9F%E9%9A%8F%E6%90%AC%E8%BF%81%23) `180.0K 🔥`
1. [王俊凯南京演唱会七夕预售](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8D%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%83%E5%A4%95%E9%A2%84%E5%94%AE%23) `171.7K 🔥`
1. [车银优的近照](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E9%93%B6%E4%BC%98%E7%9A%84%E8%BF%91%E7%85%A7%23) `167.5K 🔥`
1. [龙餐馆 (dragon restaurant)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `153.8K 🔥`
1. [我们的少年时代2青春主场海报](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E9%9D%92%E6%98%A5%E4%B8%BB%E5%9C%BA%E6%B5%B7%E6%8A%A5%23) `459.7K 🔥` `-36%`
1. [王橹杰我们的少年时代2C位](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32C%E4%BD%8D%23) `347.4K 🔥` `-23%`
1. [旺旺晒出无糖低糖新品 (Want Want launches new sugar-free and low-sugar products)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E6%99%92%E5%87%BA%E6%97%A0%E7%B3%96%E4%BD%8E%E7%B3%96%E6%96%B0%E5%93%81%23) `321.8K 🔥` `-27%`
1. [妻子产后抑郁自杀身亡丈夫两度被告](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E4%BA%A7%E5%90%8E%E6%8A%91%E9%83%81%E8%87%AA%E6%9D%80%E8%BA%AB%E4%BA%A1%E4%B8%88%E5%A4%AB%E4%B8%A4%E5%BA%A6%E8%A2%AB%E5%91%8A%23) `279.0K 🔥` `-64%`
1. [金银价格直线跳水 (Gold and silver prices plummet)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E4%BB%B7%E6%A0%BC%E7%9B%B4%E7%BA%BF%E8%B7%B3%E6%B0%B4%23) `278.4K 🔥` `-68%`
1. [蒋奇明的演技已经到了化境](https://s.weibo.com/weibo?q=%23%E8%92%8B%E5%A5%87%E6%98%8E%E7%9A%84%E6%BC%94%E6%8A%80%E5%B7%B2%E7%BB%8F%E5%88%B0%E4%BA%86%E5%8C%96%E5%A2%83%23) `264.4K 🔥` `-26%`
1. [宋亚轩上个音综大合照还是站旁边](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%8A%E4%B8%AA%E9%9F%B3%E7%BB%BC%E5%A4%A7%E5%90%88%E7%85%A7%E8%BF%98%E6%98%AF%E7%AB%99%E6%97%81%E8%BE%B9%23) `220.8K 🔥` `-34%`
1. [大大降低癌症风险的7个习惯](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A4%A7%E9%99%8D%E4%BD%8E%E7%99%8C%E7%97%87%E9%A3%8E%E9%99%A9%E7%9A%847%E4%B8%AA%E4%B9%A0%E6%83%AF%23) `157.4K 🔥` `-31%`
1. [造谣青岛大学旭日旗者被拘 (Those who spread rumors about Qingdao University’s Rising Sun Flag were detained)](https://s.weibo.com/weibo?q=%23%E9%80%A0%E8%B0%A3%E9%9D%92%E5%B2%9B%E5%A4%A7%E5%AD%A6%E6%97%AD%E6%97%A5%E6%97%97%E8%80%85%E8%A2%AB%E6%8B%98%23) `153.6K 🔥` `-29%`
1. [李登科曝带朋友找张凌赫合照被拒](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E6%9B%9D%E5%B8%A6%E6%9C%8B%E5%8F%8B%E6%89%BE%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%88%E7%85%A7%E8%A2%AB%E6%8B%92%23) `153.4K 🔥` `-33%`
1. [刘耀文打假环游世界](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%89%93%E5%81%87%E7%8E%AF%E6%B8%B8%E4%B8%96%E7%95%8C%23) `151.5K 🔥` `-22%`

Updated at 2026-08-16 12:08:18

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
