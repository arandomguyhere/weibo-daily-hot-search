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

1. [白玉兰不舒服提名 (Magnolia Uncomfortable Nomination)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E4%B8%8D%E8%88%92%E6%9C%8D%E6%8F%90%E5%90%8D%23) `3.1M 🔥` `NEW`
1. [三体公司原CEO许垚被执行死刑](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BD%93%E5%85%AC%E5%8F%B8%E5%8E%9FCEO%E8%AE%B8%E5%9E%9A%E8%A2%AB%E6%89%A7%E8%A1%8C%E6%AD%BB%E5%88%91%23) `1.1M 🔥` `NEW`
1. [王鹤棣王安宇 泼水](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%8E%8B%E5%AE%89%E5%AE%87%20%E6%B3%BC%E6%B0%B4%23) `872.7K 🔥` `NEW`
1. [白玉兰入围名单](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E5%85%A5%E5%9B%B4%E5%90%8D%E5%8D%95%23) `865.1K 🔥` `NEW`
1. [老板投资400万最后亲手砸店](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E6%8A%95%E8%B5%84400%E4%B8%87%E6%9C%80%E5%90%8E%E4%BA%B2%E6%89%8B%E7%A0%B8%E5%BA%97%23) `794.4K 🔥` `NEW`
1. [原来很多人把阈值读成阀值](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%BE%88%E5%A4%9A%E4%BA%BA%E6%8A%8A%E9%98%88%E5%80%BC%E8%AF%BB%E6%88%90%E9%98%80%E5%80%BC%23) `643.5K 🔥` `NEW`
1. [米切尔鼓舞士气无人回应](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%88%87%E5%B0%94%E9%BC%93%E8%88%9E%E5%A3%AB%E6%B0%94%E6%97%A0%E4%BA%BA%E5%9B%9E%E5%BA%94%23) `642.0K 🔥` `NEW`
1. [梅西恢复或需10到14天](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E6%81%A2%E5%A4%8D%E6%88%96%E9%9C%8010%E5%88%B014%E5%A4%A9%23) `637.5K 🔥` `NEW`
1. [京东AI静音口罩工位k歌神器](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9CAI%E9%9D%99%E9%9F%B3%E5%8F%A3%E7%BD%A9%E5%B7%A5%E4%BD%8Dk%E6%AD%8C%E7%A5%9E%E5%99%A8%23) `636.1K 🔥` `NEW`
1. [王星越说有女朋友了拒加微信](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%B6%8A%E8%AF%B4%E6%9C%89%E5%A5%B3%E6%9C%8B%E5%8F%8B%E4%BA%86%E6%8B%92%E5%8A%A0%E5%BE%AE%E4%BF%A1%23) `632.4K 🔥` `NEW`
1. [温岚在ICU抢救了10天 (Wen Lan spent 10 days in ICU)](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B2%9A%E5%9C%A8ICU%E6%8A%A2%E6%95%91%E4%BA%8610%E5%A4%A9%23) `629.6K 🔥` `NEW`
1. [学校已报警将追究造谣者责任](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E6%A0%A1%E5%B7%B2%E6%8A%A5%E8%AD%A6%E5%B0%86%E8%BF%BD%E7%A9%B6%E9%80%A0%E8%B0%A3%E8%80%85%E8%B4%A3%E4%BB%BB%23) `626.9K 🔥` `NEW`
1. [西班牙主帅回应无皇马球员入选](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E4%B8%BB%E5%B8%85%E5%9B%9E%E5%BA%94%E6%97%A0%E7%9A%87%E9%A9%AC%E7%90%83%E5%91%98%E5%85%A5%E9%80%89%23) `624.6K 🔥` `NEW`
1. [粉丝给沈月送只是沈月奖](https://s.weibo.com/weibo?q=%23%E7%B2%89%E4%B8%9D%E7%BB%99%E6%B2%88%E6%9C%88%E9%80%81%E5%8F%AA%E6%98%AF%E6%B2%88%E6%9C%88%E5%A5%96%23) `620.6K 🔥` `NEW`
1. [人民日报评豆包付费](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E8%B1%86%E5%8C%85%E4%BB%98%E8%B4%B9%23) `618.4K 🔥` `NEW`
1. [樱桃 虫子](https://s.weibo.com/weibo?q=%23%E6%A8%B1%E6%A1%83%20%E8%99%AB%E5%AD%90%23) `613.4K 🔥` `NEW`
1. [印度热到接近50度](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%83%AD%E5%88%B0%E6%8E%A5%E8%BF%9150%E5%BA%A6%23) `611.9K 🔥` `NEW`
1. [中国妇女报为戴耳环女干部发声](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A6%87%E5%A5%B3%E6%8A%A5%E4%B8%BA%E6%88%B4%E8%80%B3%E7%8E%AF%E5%A5%B3%E5%B9%B2%E9%83%A8%E5%8F%91%E5%A3%B0%23) `608.4K 🔥` `NEW`
1. [藏海传回应白玉兰6项提名](https://s.weibo.com/weibo?q=%23%E8%97%8F%E6%B5%B7%E4%BC%A0%E5%9B%9E%E5%BA%94%E7%99%BD%E7%8E%89%E5%85%B06%E9%A1%B9%E6%8F%90%E5%90%8D%23) `603.5K 🔥` `NEW`
1. [张子墨新歌 抄袭](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E5%A2%A8%E6%96%B0%E6%AD%8C%20%E6%8A%84%E8%A2%AD%23) `600.0K 🔥` `NEW`
1. [盒马粉木耳擦边别把道歉当公关 (Hema powder and fungus are on the sidelines, don’t treat apology as public relations)](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%AC%E7%B2%89%E6%9C%A8%E8%80%B3%E6%93%A6%E8%BE%B9%E5%88%AB%E6%8A%8A%E9%81%93%E6%AD%89%E5%BD%93%E5%85%AC%E5%85%B3%23) `599.6K 🔥` `NEW`
1. [韩国群众要求废弃21世纪大君夫人](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BE%A4%E4%BC%97%E8%A6%81%E6%B1%82%E5%BA%9F%E5%BC%8321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `596.8K 🔥` `NEW`
1. [赵丽颖未入围](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%9C%AA%E5%85%A5%E5%9B%B4%23) `591.9K 🔥` `NEW`
1. [女子说花生过敏饭店加花生油被抢救](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%AF%B4%E8%8A%B1%E7%94%9F%E8%BF%87%E6%95%8F%E9%A5%AD%E5%BA%97%E5%8A%A0%E8%8A%B1%E7%94%9F%E6%B2%B9%E8%A2%AB%E6%8A%A2%E6%95%91%23) `588.0K 🔥` `NEW`
1. [迪丽热巴白玉兰未提名](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%99%BD%E7%8E%89%E5%85%B0%E6%9C%AA%E6%8F%90%E5%90%8D%23) `584.3K 🔥` `NEW`
1. [杨紫 每朵玉兰都有自己的花期](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%20%E6%AF%8F%E6%9C%B5%E7%8E%89%E5%85%B0%E9%83%BD%E6%9C%89%E8%87%AA%E5%B7%B1%E7%9A%84%E8%8A%B1%E6%9C%9F%23) `581.8K 🔥` `NEW`
1. [郑钦文需要从资格赛开始打起](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%9C%80%E8%A6%81%E4%BB%8E%E8%B5%84%E6%A0%BC%E8%B5%9B%E5%BC%80%E5%A7%8B%E6%89%93%E8%B5%B7%23) `578.7K 🔥` `NEW`
1. [法国银行高管强迫女友向487人卖淫](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%93%B6%E8%A1%8C%E9%AB%98%E7%AE%A1%E5%BC%BA%E8%BF%AB%E5%A5%B3%E5%8F%8B%E5%90%91487%E4%BA%BA%E5%8D%96%E6%B7%AB%23) `578.0K 🔥` `NEW`
1. [武契奇遗憾没学会中文](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E9%81%97%E6%86%BE%E6%B2%A1%E5%AD%A6%E4%BC%9A%E4%B8%AD%E6%96%87%23) `573.2K 🔥` `NEW`
1. [本届白玉兰意难平](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%B1%8A%E7%99%BD%E7%8E%89%E5%85%B0%E6%84%8F%E9%9A%BE%E5%B9%B3%23) `570.5K 🔥` `NEW`
1. [3个部位发麻可能是脑梗先兆 (Numbness in 3 parts may be a sign of cerebral infarction)](https://s.weibo.com/weibo?q=%233%E4%B8%AA%E9%83%A8%E4%BD%8D%E5%8F%91%E9%BA%BB%E5%8F%AF%E8%83%BD%E6%98%AF%E8%84%91%E6%A2%97%E5%85%88%E5%85%86%23) `566.1K 🔥` `NEW`
1. [永川村民称只要命在其他不重要](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E5%B7%9D%E6%9D%91%E6%B0%91%E7%A7%B0%E5%8F%AA%E8%A6%81%E5%91%BD%E5%9C%A8%E5%85%B6%E4%BB%96%E4%B8%8D%E9%87%8D%E8%A6%81%23) `564.8K 🔥` `NEW`
1. [利特](https://s.weibo.com/weibo?q=%23%E5%88%A9%E7%89%B9%23) `556.9K 🔥` `NEW`
1. [800多克黄金被扣36年申请国赔被驳回](https://s.weibo.com/weibo?q=%23800%E5%A4%9A%E5%85%8B%E9%BB%84%E9%87%91%E8%A2%AB%E6%89%A336%E5%B9%B4%E7%94%B3%E8%AF%B7%E5%9B%BD%E8%B5%94%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `554.0K 🔥` `NEW`
1. [朱媛媛白玉兰最佳女配提名](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%AA%9B%E5%AA%9B%E7%99%BD%E7%8E%89%E5%85%B0%E6%9C%80%E4%BD%B3%E5%A5%B3%E9%85%8D%E6%8F%90%E5%90%8D%23) `547.3K 🔥` `NEW`
1. [霸总来广东13天也支棱不起来](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E6%80%BB%E6%9D%A5%E5%B9%BF%E4%B8%9C13%E5%A4%A9%E4%B9%9F%E6%94%AF%E6%A3%B1%E4%B8%8D%E8%B5%B7%E6%9D%A5%23) `546.4K 🔥` `NEW`
1. [被家暴致死女子哥哥怒问为何娶她](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%AE%B6%E6%9A%B4%E8%87%B4%E6%AD%BB%E5%A5%B3%E5%AD%90%E5%93%A5%E5%93%A5%E6%80%92%E9%97%AE%E4%B8%BA%E4%BD%95%E5%A8%B6%E5%A5%B9%23) `542.9K 🔥` `NEW`
1. [孙俪八次提名白玉兰奖](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%85%AB%E6%AC%A1%E6%8F%90%E5%90%8D%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%23) `538.0K 🔥` `NEW`
1. [三体回应许垚被执行死刑](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BD%93%E5%9B%9E%E5%BA%94%E8%AE%B8%E5%9E%9A%E8%A2%AB%E6%89%A7%E8%A1%8C%E6%AD%BB%E5%88%91%23) `536.6K 🔥` `NEW`
1. [安妮海瑟薇左眼有10年基本看不见](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%A6%AE%E6%B5%B7%E7%91%9F%E8%96%87%E5%B7%A6%E7%9C%BC%E6%9C%8910%E5%B9%B4%E5%9F%BA%E6%9C%AC%E7%9C%8B%E4%B8%8D%E8%A7%81%23) `529.5K 🔥` `NEW`
1. [杨幂85花唯一提名最佳女主角 (Yang Mi is the only 85-year-old actress nominated for Best Actress)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%8285%E8%8A%B1%E5%94%AF%E4%B8%80%E6%8F%90%E5%90%8D%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E8%A7%92%23) `526.1K 🔥` `NEW`
1. [没有姥姥我可能活不到现在](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E5%A7%A5%E5%A7%A5%E6%88%91%E5%8F%AF%E8%83%BD%E6%B4%BB%E4%B8%8D%E5%88%B0%E7%8E%B0%E5%9C%A8%23) `523.5K 🔥` `NEW`
1. [德国跨国迷奸案查出大量儿童色情](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E8%B7%A8%E5%9B%BD%E8%BF%B7%E5%A5%B8%E6%A1%88%E6%9F%A5%E5%87%BA%E5%A4%A7%E9%87%8F%E5%84%BF%E7%AB%A5%E8%89%B2%E6%83%85%23) `517.2K 🔥` `NEW`
1. [丞磊沈羽洁新剧开机](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E6%B2%88%E7%BE%BD%E6%B4%81%E6%96%B0%E5%89%A7%E5%BC%80%E6%9C%BA%23) `512.1K 🔥` `NEW`
1. [网警公布5起打击整治网络谣言案例](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%AD%A6%E5%85%AC%E5%B8%835%E8%B5%B7%E6%89%93%E5%87%BB%E6%95%B4%E6%B2%BB%E7%BD%91%E7%BB%9C%E8%B0%A3%E8%A8%80%E6%A1%88%E4%BE%8B%23) `893.4K 🔥` `+74%`
1. [王鹤棣掉粉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%8E%89%E7%B2%89%23) `561.2K 🔥`
1. [刘诗诗 热红温了还在问用的什么腮红](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%20%E7%83%AD%E7%BA%A2%E6%B8%A9%E4%BA%86%E8%BF%98%E5%9C%A8%E9%97%AE%E7%94%A8%E7%9A%84%E4%BB%80%E4%B9%88%E8%85%AE%E7%BA%A2%23) `550.6K 🔥`
1. [影视飓风是不是中国最酷的公司](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E6%98%AF%E4%B8%8D%E6%98%AF%E4%B8%AD%E5%9B%BD%E6%9C%80%E9%85%B7%E7%9A%84%E5%85%AC%E5%8F%B8%23) `515.4K 🔥`
1. [法拉利史上首款电动车亮相](https://s.weibo.com/weibo?q=%23%E6%B3%95%E6%8B%89%E5%88%A9%E5%8F%B2%E4%B8%8A%E9%A6%96%E6%AC%BE%E7%94%B5%E5%8A%A8%E8%BD%A6%E4%BA%AE%E7%9B%B8%23) `532.7K 🔥` `-33%`
1. [杨汝晴回复杨丞琳](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B1%9D%E6%99%B4%E5%9B%9E%E5%A4%8D%E6%9D%A8%E4%B8%9E%E7%90%B3%23) `519.3K 🔥` `-41%`

Updated at 2026-05-26 14:17:22

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
