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

1. [郑钦文首胜普丁塞娃](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%A6%96%E8%83%9C%E6%99%AE%E4%B8%81%E5%A1%9E%E5%A8%83%23) `848.4K 🔥` `NEW`
1. [神行者8以28.99万再定义豪华旗舰](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%A1%8C%E8%80%858%E4%BB%A528.99%E4%B8%87%E5%86%8D%E5%AE%9A%E4%B9%89%E8%B1%AA%E5%8D%8E%E6%97%97%E8%88%B0%23) `644.4K 🔥` `NEW`
1. [武大大可不必等86页PDF逼出来](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E5%A4%A7%E5%8F%AF%E4%B8%8D%E5%BF%85%E7%AD%8986%E9%A1%B5PDF%E9%80%BC%E5%87%BA%E6%9D%A5%23) `637.5K 🔥` `NEW`
1. [小米手环11](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%89%8B%E7%8E%AF11%23) `591.4K 🔥` `NEW`
1. [吉隆口岸淤泥里发现警服](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%B7%A4%E6%B3%A5%E9%87%8C%E5%8F%91%E7%8E%B0%E8%AD%A6%E6%9C%8D%23) `557.6K 🔥` `NEW`
1. [林俊杰张凌赫逐玉的缘分](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%80%90%E7%8E%89%E7%9A%84%E7%BC%98%E5%88%86%23) `292.7K 🔥` `NEW`
1. [谢贤前女友Coco直播高情商回应](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E5%89%8D%E5%A5%B3%E5%8F%8BCoco%E7%9B%B4%E6%92%AD%E9%AB%98%E6%83%85%E5%95%86%E5%9B%9E%E5%BA%94%23) `276.7K 🔥` `NEW`
1. [易烊千玺工作室真的太能藏了](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%9C%9F%E7%9A%84%E5%A4%AA%E8%83%BD%E8%97%8F%E4%BA%86%23) `275.0K 🔥` `NEW`
1. [专家称纪委书记执纪违纪属从重情节](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E7%BA%AA%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%89%A7%E7%BA%AA%E8%BF%9D%E7%BA%AA%E5%B1%9E%E4%BB%8E%E9%87%8D%E6%83%85%E8%8A%82%23) `245.6K 🔥` `NEW`
1. [郑钦文vs凯斯](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E5%87%AF%E6%96%AF%23) `234.7K 🔥` `NEW`
1. [借5000万还1亿多还要还2100万](https://s.weibo.com/weibo?q=%23%E5%80%9F5000%E4%B8%87%E8%BF%981%E4%BA%BF%E5%A4%9A%E8%BF%98%E8%A6%81%E8%BF%982100%E4%B8%87%23) `234.1K 🔥` `NEW`
1. [郑钦文对手气得摔拍子](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%AF%B9%E6%89%8B%E6%B0%94%E5%BE%97%E6%91%94%E6%8B%8D%E5%AD%90%23) `233.3K 🔥` `NEW`
1. [GPT6正式发布](https://s.weibo.com/weibo?q=%23GPT6%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83%23) `233.1K 🔥` `NEW`
1. [中国审美失去下颌角已经很久了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%AE%A1%E7%BE%8E%E5%A4%B1%E5%8E%BB%E4%B8%8B%E9%A2%8C%E8%A7%92%E5%B7%B2%E7%BB%8F%E5%BE%88%E4%B9%85%E4%BA%86%23) `232.1K 🔥` `NEW`
1. [刘雯点赞井柏然国贸大片](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E7%82%B9%E8%B5%9E%E4%BA%95%E6%9F%8F%E7%84%B6%E5%9B%BD%E8%B4%B8%E5%A4%A7%E7%89%87%23) `231.3K 🔥` `NEW`
1. [最开始主动出击想靠花2翻红的是谁](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%BC%80%E5%A7%8B%E4%B8%BB%E5%8A%A8%E5%87%BA%E5%87%BB%E6%83%B3%E9%9D%A0%E8%8A%B12%E7%BF%BB%E7%BA%A2%E7%9A%84%E6%98%AF%E8%B0%81%23) `219.9K 🔥` `NEW`
1. [小米18Fold定价](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Fold%E5%AE%9A%E4%BB%B7%23) `216.3K 🔥` `NEW`
1. [杨洋贯穿了毛阿敏许晴全过程](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E8%B4%AF%E7%A9%BF%E4%BA%86%E6%AF%9B%E9%98%BF%E6%95%8F%E8%AE%B8%E6%99%B4%E5%85%A8%E8%BF%87%E7%A8%8B%23) `206.0K 🔥` `NEW`
1. [美军为何对伊朗大打出手](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E4%B8%BA%E4%BD%95%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%A4%A7%E6%89%93%E5%87%BA%E6%89%8B%23) `201.6K 🔥` `NEW`
1. [朴时宇给中国菜打低分](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E6%97%B6%E5%AE%87%E7%BB%99%E4%B8%AD%E5%9B%BD%E8%8F%9C%E6%89%93%E4%BD%8E%E5%88%86%23) `201.6K 🔥` `NEW`
1. [郑钦文50秒三记Ace](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%8750%E7%A7%92%E4%B8%89%E8%AE%B0Ace%23) `183.5K 🔥` `NEW`
1. [三胞胎迎接退役军爸被一把抱起](https://s.weibo.com/weibo?q=%23%E4%B8%89%E8%83%9E%E8%83%8E%E8%BF%8E%E6%8E%A5%E9%80%80%E5%BD%B9%E5%86%9B%E7%88%B8%E8%A2%AB%E4%B8%80%E6%8A%8A%E6%8A%B1%E8%B5%B7%23) `182.5K 🔥` `NEW`
1. [郑钦文收获170积分29万美元奖金](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%94%B6%E8%8E%B7170%E7%A7%AF%E5%88%8629%E4%B8%87%E7%BE%8E%E5%85%83%E5%A5%96%E9%87%91%23) `156.7K 🔥` `NEW`
1. [井柏然夸刘雯素颜张艺凡震惊](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%A4%B8%E5%88%98%E9%9B%AF%E7%B4%A0%E9%A2%9C%E5%BC%A0%E8%89%BA%E5%87%A1%E9%9C%87%E6%83%8A%23) `152.4K 🔥` `NEW`
1. [医院拒提供抱错女子同期新生儿信息](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E6%8B%92%E6%8F%90%E4%BE%9B%E6%8A%B1%E9%94%99%E5%A5%B3%E5%AD%90%E5%90%8C%E6%9C%9F%E6%96%B0%E7%94%9F%E5%84%BF%E4%BF%A1%E6%81%AF%23) `141.0K 🔥` `NEW`
1. [花少8实则是花少2第二部](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E5%AE%9E%E5%88%99%E6%98%AF%E8%8A%B1%E5%B0%912%E7%AC%AC%E4%BA%8C%E9%83%A8%23) `140.7K 🔥` `NEW`
1. [曝时代峰峻下半年将资源重整](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E4%B8%8B%E5%8D%8A%E5%B9%B4%E5%B0%86%E8%B5%84%E6%BA%90%E9%87%8D%E6%95%B4%23) `140.1K 🔥` `NEW`
1. [郑钦文2比1普丁塞娃](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%872%E6%AF%941%E6%99%AE%E4%B8%81%E5%A1%9E%E5%A8%83%23) `124.1K 🔥` `NEW`
1. [为救母发现非亲生女子发声](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E6%95%91%E6%AF%8D%E5%8F%91%E7%8E%B0%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `122.7K 🔥` `NEW`
1. [人人影视变正版了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%BA%BA%E5%BD%B1%E8%A7%86%E5%8F%98%E6%AD%A3%E7%89%88%E4%BA%86%23) `1.1M 🔥` `+222%`
1. [中埃两大文明双向奔赴](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9F%83%E4%B8%A4%E5%A4%A7%E6%96%87%E6%98%8E%E5%8F%8C%E5%90%91%E5%A5%94%E8%B5%B4%23) `644.8K 🔥` `+205%`
1. [没有人会教你真正核心的东西](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E4%BA%BA%E4%BC%9A%E6%95%99%E4%BD%A0%E7%9C%9F%E6%AD%A3%E6%A0%B8%E5%BF%83%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `463.6K 🔥` `+82%`
1. [普通人没必要追求电子产品顶配](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E6%B2%A1%E5%BF%85%E8%A6%81%E8%BF%BD%E6%B1%82%E7%94%B5%E5%AD%90%E4%BA%A7%E5%93%81%E9%A1%B6%E9%85%8D%23) `349.7K 🔥` `+471%`
1. [宁静内涵花少2有人干涉剪辑](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%E5%86%85%E6%B6%B5%E8%8A%B1%E5%B0%912%E6%9C%89%E4%BA%BA%E5%B9%B2%E6%B6%89%E5%89%AA%E8%BE%91%23) `332.6K 🔥` `+99%`
1. [剖宫产身亡3名涉事医生停职7至9个月](https://s.weibo.com/weibo?q=%23%E5%89%96%E5%AE%AB%E4%BA%A7%E8%BA%AB%E4%BA%A13%E5%90%8D%E6%B6%89%E4%BA%8B%E5%8C%BB%E7%94%9F%E5%81%9C%E8%81%8C7%E8%87%B39%E4%B8%AA%E6%9C%88%23) `282.7K 🔥` `+465%`
1. [许家印律师欲提120万港元被拒](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%AE%B6%E5%8D%B0%E5%BE%8B%E5%B8%88%E6%AC%B2%E6%8F%90120%E4%B8%87%E6%B8%AF%E5%85%83%E8%A2%AB%E6%8B%92%23) `232.8K 🔥` `+347%`
1. [一年级 陈学冬综艺](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B9%B4%E7%BA%A7%20%E9%99%88%E5%AD%A6%E5%86%AC%E7%BB%BC%E8%89%BA%23) `232.6K 🔥` `+365%`
1. [人总是下意识地忽略自己的珍贵](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%80%BB%E6%98%AF%E4%B8%8B%E6%84%8F%E8%AF%86%E5%9C%B0%E5%BF%BD%E7%95%A5%E8%87%AA%E5%B7%B1%E7%9A%84%E7%8F%8D%E8%B4%B5%23) `232.0K 🔥` `+199%`
1. [长生 退役](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9F%20%E9%80%80%E5%BD%B9%23) `212.3K 🔥` `+157%`
1. [花少哪一季才是观众心中天花板](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%93%AA%E4%B8%80%E5%AD%A3%E6%89%8D%E6%98%AF%E8%A7%82%E4%BC%97%E5%BF%83%E4%B8%AD%E5%A4%A9%E8%8A%B1%E6%9D%BF%23) `201.7K 🔥` `+304%`
1. [宁静解释花少2频繁被消音](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%E8%A7%A3%E9%87%8A%E8%8A%B1%E5%B0%912%E9%A2%91%E7%B9%81%E8%A2%AB%E6%B6%88%E9%9F%B3%23) `201.6K 🔥` `+305%`
1. [3岁男童长期吃隔夜菜中毒住进PICU](https://s.weibo.com/weibo?q=%233%E5%B2%81%E7%94%B7%E7%AB%A5%E9%95%BF%E6%9C%9F%E5%90%83%E9%9A%94%E5%A4%9C%E8%8F%9C%E4%B8%AD%E6%AF%92%E4%BD%8F%E8%BF%9BPICU%23) `175.0K 🔥` `+245%`
1. [14岁男孩和妈妈吵架点燃床铺后离家](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E7%94%B7%E5%AD%A9%E5%92%8C%E5%A6%88%E5%A6%88%E5%90%B5%E6%9E%B6%E7%82%B9%E7%87%83%E5%BA%8A%E9%93%BA%E5%90%8E%E7%A6%BB%E5%AE%B6%23) `149.9K 🔥` `+200%`
1. [山东一产妇剖宫产身亡](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E4%B8%80%E4%BA%A7%E5%A6%87%E5%89%96%E5%AE%AB%E4%BA%A7%E8%BA%AB%E4%BA%A1%23) `143.9K 🔥` `+189%`
1. [特斯拉预告新时代即将到来](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E9%A2%84%E5%91%8A%E6%96%B0%E6%97%B6%E4%BB%A3%E5%8D%B3%E5%B0%86%E5%88%B0%E6%9D%A5%23) `136.7K 🔥` `+175%`
1. [美国癌症治疗](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%99%8C%E7%97%87%E6%B2%BB%E7%96%97%23) `136.1K 🔥` `+164%`
1. [心疼一诺](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E4%B8%80%E8%AF%BA%23) `129.6K 🔥` `+161%`
1. [上帝视角带你看离岸流有多可怕](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%B8%9D%E8%A7%86%E8%A7%92%E5%B8%A6%E4%BD%A0%E7%9C%8B%E7%A6%BB%E5%B2%B8%E6%B5%81%E6%9C%89%E5%A4%9A%E5%8F%AF%E6%80%95%23) `128.9K 🔥` `+159%`
1. [一家三口吃水洗鸡蛋后集体中毒](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%90%83%E6%B0%B4%E6%B4%97%E9%B8%A1%E8%9B%8B%E5%90%8E%E9%9B%86%E4%BD%93%E4%B8%AD%E6%AF%92%23) `123.0K 🔥` `+146%`
1. [花少8变着法儿复刻花少2](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E5%8F%98%E7%9D%80%E6%B3%95%E5%84%BF%E5%A4%8D%E5%88%BB%E8%8A%B1%E5%B0%912%23) `122.7K 🔥` `+147%`
1. [江学勤说要向中国人民道歉](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%AD%A6%E5%8B%A4%E8%AF%B4%E8%A6%81%E5%90%91%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E9%81%93%E6%AD%89%23) `122.7K 🔥` `+147%`

Updated at 2026-09-04 08:09:18

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
