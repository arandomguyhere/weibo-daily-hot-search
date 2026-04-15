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

1. [画梦录阵容官宣 (Hua Meng Lu official lineup announcement)](https://s.weibo.com/weibo?q=%23%E7%94%BB%E6%A2%A6%E5%BD%95%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `765.7K 🔥` `NEW`
1. [李昀锐关晓彤牵手剧宣](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%85%B3%E6%99%93%E5%BD%A4%E7%89%B5%E6%89%8B%E5%89%A7%E5%AE%A3%23) `475.0K 🔥` `NEW`
1. [霍尔木兹堵不住中国](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E5%A0%B5%E4%B8%8D%E4%BD%8F%E4%B8%AD%E5%9B%BD%23) `441.5K 🔥` `NEW`
1. [遭班主任猥亵15岁女生讲述经过](https://s.weibo.com/weibo?q=%23%E9%81%AD%E7%8F%AD%E4%B8%BB%E4%BB%BB%E7%8C%A5%E4%BA%B515%E5%B2%81%E5%A5%B3%E7%94%9F%E8%AE%B2%E8%BF%B0%E7%BB%8F%E8%BF%87%23) `412.7K 🔥` `NEW`
1. [全网第一个装植物人的婆婆](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E7%AC%AC%E4%B8%80%E4%B8%AA%E8%A3%85%E6%A4%8D%E7%89%A9%E4%BA%BA%E7%9A%84%E5%A9%86%E5%A9%86%23) `333.6K 🔥` `NEW`
1. [安赛龙宣布退役](https://s.weibo.com/weibo?q=%23%E5%AE%89%E8%B5%9B%E9%BE%99%E5%AE%A3%E5%B8%83%E9%80%80%E5%BD%B9%23) `317.2K 🔥` `NEW`
1. [出生4天被秤砣砸中女婴父亲发声](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%94%9F4%E5%A4%A9%E8%A2%AB%E7%A7%A4%E7%A0%A3%E7%A0%B8%E4%B8%AD%E5%A5%B3%E5%A9%B4%E7%88%B6%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `296.7K 🔥` `NEW`
1. [孙红雷连夜关闭了人脸支付](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E8%BF%9E%E5%A4%9C%E5%85%B3%E9%97%AD%E4%BA%86%E4%BA%BA%E8%84%B8%E6%94%AF%E4%BB%98%23) `223.6K 🔥` `NEW`
1. [魏晨儿子都这么大了](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E5%84%BF%E5%AD%90%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `209.4K 🔥` `NEW`
1. [B太帮扶大山女孩用苹果手机](https://s.weibo.com/weibo?q=%23B%E5%A4%AA%E5%B8%AE%E6%89%B6%E5%A4%A7%E5%B1%B1%E5%A5%B3%E5%AD%A9%E7%94%A8%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%23) `196.5K 🔥` `NEW`
1. [李小冉 舞蹈界失去了一个无关紧要的人 (Li Xiaoran, the dance world has lost an insignificant person)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E8%88%9E%E8%B9%88%E7%95%8C%E5%A4%B1%E5%8E%BB%E4%BA%86%E4%B8%80%E4%B8%AA%E6%97%A0%E5%85%B3%E7%B4%A7%E8%A6%81%E7%9A%84%E4%BA%BA%23) `170.4K 🔥` `NEW`
1. [森碟18岁了](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E7%A2%9F18%E5%B2%81%E4%BA%86%23) `164.1K 🔥` `NEW`
1. [雷军会见阿布扎比王储](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E4%BC%9A%E8%A7%81%E9%98%BF%E5%B8%83%E6%89%8E%E6%AF%94%E7%8E%8B%E5%82%A8%23) `155.5K 🔥` `NEW`
1. [文彩元6月结婚](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%BD%A9%E5%85%836%E6%9C%88%E7%BB%93%E5%A9%9A%23) `154.6K 🔥` `NEW`
1. [班主任开房猥亵学生为何只是行政处罚](https://s.weibo.com/weibo?q=%23%E7%8F%AD%E4%B8%BB%E4%BB%BB%E5%BC%80%E6%88%BF%E7%8C%A5%E4%BA%B5%E5%AD%A6%E7%94%9F%E4%B8%BA%E4%BD%95%E5%8F%AA%E6%98%AF%E8%A1%8C%E6%94%BF%E5%A4%84%E7%BD%9A%23) `133.7K 🔥` `NEW`
1. [男子每天只睡2小时1个月后想轻生](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%AF%8F%E5%A4%A9%E5%8F%AA%E7%9D%A12%E5%B0%8F%E6%97%B61%E4%B8%AA%E6%9C%88%E5%90%8E%E6%83%B3%E8%BD%BB%E7%94%9F%23) `132.9K 🔥` `NEW`
1. [项羽当年是缺创可贴吗](https://s.weibo.com/weibo?q=%23%E9%A1%B9%E7%BE%BD%E5%BD%93%E5%B9%B4%E6%98%AF%E7%BC%BA%E5%88%9B%E5%8F%AF%E8%B4%B4%E5%90%97%23) `126.5K 🔥` `NEW`
1. [阚清子腰伤复发](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E8%85%B0%E4%BC%A4%E5%A4%8D%E5%8F%91%23) `123.9K 🔥` `NEW`
1. [脱口秀演员曝王阳早年遭职场霸凌](https://s.weibo.com/weibo?q=%23%E8%84%B1%E5%8F%A3%E7%A7%80%E6%BC%94%E5%91%98%E6%9B%9D%E7%8E%8B%E9%98%B3%E6%97%A9%E5%B9%B4%E9%81%AD%E8%81%8C%E5%9C%BA%E9%9C%B8%E5%87%8C%23) `122.9K 🔥` `NEW`
1. [阿夫迪亚绝杀太阳](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A4%AB%E8%BF%AA%E4%BA%9A%E7%BB%9D%E6%9D%80%E5%A4%AA%E9%98%B3%23) `117.4K 🔥` `NEW`
1. [原来葡式蛋挞和葡萄没关系 (It turns out that Portuguese egg tarts have nothing to do with grapes)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%91%A1%E5%BC%8F%E8%9B%8B%E6%8C%9E%E5%92%8C%E8%91%A1%E8%90%84%E6%B2%A1%E5%85%B3%E7%B3%BB%23) `117.4K 🔥` `NEW`
1. [女司机飙车险撞人后在车内笑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%8F%B8%E6%9C%BA%E9%A3%99%E8%BD%A6%E9%99%A9%E6%92%9E%E4%BA%BA%E5%90%8E%E5%9C%A8%E8%BD%A6%E5%86%85%E7%AC%91%23) `109.5K 🔥` `NEW`
1. [张凌赫环保纪录片全素颜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%AF%E4%BF%9D%E7%BA%AA%E5%BD%95%E7%89%87%E5%85%A8%E7%B4%A0%E9%A2%9C%23) `85.8K 🔥` `NEW`
1. [伊朗总统质问美国凭什么攻击伊朗](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%B4%A8%E9%97%AE%E7%BE%8E%E5%9B%BD%E5%87%AD%E4%BB%80%E4%B9%88%E6%94%BB%E5%87%BB%E4%BC%8A%E6%9C%97%23) `85.7K 🔥` `NEW`
1. [法国殖民时期掠夺的文物将归还原国](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%AE%96%E6%B0%91%E6%97%B6%E6%9C%9F%E6%8E%A0%E5%A4%BA%E7%9A%84%E6%96%87%E7%89%A9%E5%B0%86%E5%BD%92%E8%BF%98%E5%8E%9F%E5%9B%BD%23) `84.6K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `83.8K 🔥` `NEW`
1. [泼水节不能变成骚扰者的狂欢](https://s.weibo.com/weibo?q=%23%E6%B3%BC%E6%B0%B4%E8%8A%82%E4%B8%8D%E8%83%BD%E5%8F%98%E6%88%90%E9%AA%9A%E6%89%B0%E8%80%85%E7%9A%84%E7%8B%82%E6%AC%A2%23) `83.2K 🔥` `NEW`
1. [王一博杂志](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%9D%82%E5%BF%97%23) `82.0K 🔥` `NEW`
1. [董思成团播](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%80%9D%E6%88%90%E5%9B%A2%E6%92%AD%23) `80.4K 🔥` `NEW`
1. [果然谁都拒绝不了情绪价值](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6%E8%B0%81%E9%83%BD%E6%8B%92%E7%BB%9D%E4%B8%8D%E4%BA%86%E6%83%85%E7%BB%AA%E4%BB%B7%E5%80%BC%23) `76.1K 🔥` `NEW`
1. [为什么凉拌菜不能当减脂餐 (Why can’t salads be used as a fat-reducing meal?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%87%89%E6%8B%8C%E8%8F%9C%E4%B8%8D%E8%83%BD%E5%BD%93%E5%87%8F%E8%84%82%E9%A4%90%23) `73.5K 🔥` `NEW`
1. [婚事谈崩男子杀害怀孕女友一家3口](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E4%BA%8B%E8%B0%88%E5%B4%A9%E7%94%B7%E5%AD%90%E6%9D%80%E5%AE%B3%E6%80%80%E5%AD%95%E5%A5%B3%E5%8F%8B%E4%B8%80%E5%AE%B63%E5%8F%A3%23) `71.8K 🔥` `NEW`
1. [中东生意少了为何中国还能创纪录](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E7%94%9F%E6%84%8F%E5%B0%91%E4%BA%86%E4%B8%BA%E4%BD%95%E4%B8%AD%E5%9B%BD%E8%BF%98%E8%83%BD%E5%88%9B%E7%BA%AA%E5%BD%95%23) `70.9K 🔥` `NEW`
1. [小鸟真的有自己的审美](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B8%9F%E7%9C%9F%E7%9A%84%E6%9C%89%E8%87%AA%E5%B7%B1%E7%9A%84%E5%AE%A1%E7%BE%8E%23) `70.8K 🔥` `NEW`
1. [美军中央司令部称没有船只突破封锁](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E4%B8%AD%E5%A4%AE%E5%8F%B8%E4%BB%A4%E9%83%A8%E7%A7%B0%E6%B2%A1%E6%9C%89%E8%88%B9%E5%8F%AA%E7%AA%81%E7%A0%B4%E5%B0%81%E9%94%81%23) `70.6K 🔥` `NEW`
1. [NewJeans将参加校庆活动](https://s.weibo.com/weibo?q=%23NewJeans%E5%B0%86%E5%8F%82%E5%8A%A0%E6%A0%A1%E5%BA%86%E6%B4%BB%E5%8A%A8%23) `70.5K 🔥` `NEW`
1. [杨幂的这句晚安好梦能听一百遍](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%9A%84%E8%BF%99%E5%8F%A5%E6%99%9A%E5%AE%89%E5%A5%BD%E6%A2%A6%E8%83%BD%E5%90%AC%E4%B8%80%E7%99%BE%E9%81%8D%23) `70.0K 🔥` `NEW`
1. [苹果回应升级iOS系统后耗电快](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%9B%9E%E5%BA%94%E5%8D%87%E7%BA%A7iOS%E7%B3%BB%E7%BB%9F%E5%90%8E%E8%80%97%E7%94%B5%E5%BF%AB%23) `70.0K 🔥` `NEW`
1. [钢铁森林 年度BG](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%20%E5%B9%B4%E5%BA%A6BG%23) `69.9K 🔥` `NEW`
1. [驻外人员嫖娼遭仙人跳出卖国家秘密](https://s.weibo.com/weibo?q=%23%E9%A9%BB%E5%A4%96%E4%BA%BA%E5%91%98%E5%AB%96%E5%A8%BC%E9%81%AD%E4%BB%99%E4%BA%BA%E8%B7%B3%E5%87%BA%E5%8D%96%E5%9B%BD%E5%AE%B6%E7%A7%98%E5%AF%86%23) `1.1M 🔥` `+909%`
1. [蒋奇明这反应不像是演的 (Jiang Qiming’s reaction doesn’t look like he was acting)](https://s.weibo.com/weibo?q=%23%E8%92%8B%E5%A5%87%E6%98%8E%E8%BF%99%E5%8F%8D%E5%BA%94%E4%B8%8D%E5%83%8F%E6%98%AF%E6%BC%94%E7%9A%84%23) `580.6K 🔥` `+47%`
1. [腾势Z9GT首登时尚顶刊 (Denza Z9GT appears in top fashion magazine for the first time)](https://s.weibo.com/weibo?q=%23%E8%85%BE%E5%8A%BFZ9GT%E9%A6%96%E7%99%BB%E6%97%B6%E5%B0%9A%E9%A1%B6%E5%88%8A%23) `401.6K 🔥` `+303%`
1. [全民国家安全教育日](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%B0%91%E5%9B%BD%E5%AE%B6%E5%AE%89%E5%85%A8%E6%95%99%E8%82%B2%E6%97%A5%23) `635.0K 🔥`
1. [你以为吃的是素菜其实全是油脂](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%A5%E4%B8%BA%E5%90%83%E7%9A%84%E6%98%AF%E7%B4%A0%E8%8F%9C%E5%85%B6%E5%AE%9E%E5%85%A8%E6%98%AF%E6%B2%B9%E8%84%82%23) `229.4K 🔥` `-66%`
1. [女子生产坚持不打无痛老公苦苦哀求](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%9F%E4%BA%A7%E5%9D%9A%E6%8C%81%E4%B8%8D%E6%89%93%E6%97%A0%E7%97%9B%E8%80%81%E5%85%AC%E8%8B%A6%E8%8B%A6%E5%93%80%E6%B1%82%23) `150.6K 🔥` `-67%`
1. [神仙肉](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%23) `138.2K 🔥` `-83%`
1. [于正为吴谨言许凯宣传新剧](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E4%B8%BA%E5%90%B4%E8%B0%A8%E8%A8%80%E8%AE%B8%E5%87%AF%E5%AE%A3%E4%BC%A0%E6%96%B0%E5%89%A7%23) `126.6K 🔥` `-52%`
1. [10年前的孟子义](https://s.weibo.com/weibo?q=%2310%E5%B9%B4%E5%89%8D%E7%9A%84%E5%AD%9F%E5%AD%90%E4%B9%89%23) `85.2K 🔥` `-60%`
1. [军工人员疯狂泄密却被开空头支票 (Military workers leaked secrets like crazy but were given bad checks)](https://s.weibo.com/weibo?q=%23%E5%86%9B%E5%B7%A5%E4%BA%BA%E5%91%98%E7%96%AF%E7%8B%82%E6%B3%84%E5%AF%86%E5%8D%B4%E8%A2%AB%E5%BC%80%E7%A9%BA%E5%A4%B4%E6%94%AF%E7%A5%A8%23) `85.0K 🔥` `-92%`
1. [TFBOYS十二周年](https://s.weibo.com/weibo?q=%23TFBOYS%E5%8D%81%E4%BA%8C%E5%91%A8%E5%B9%B4%23) `84.3K 🔥` `-29%`
1. [女子把生姜当水果吃每日1盆](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8A%8A%E7%94%9F%E5%A7%9C%E5%BD%93%E6%B0%B4%E6%9E%9C%E5%90%83%E6%AF%8F%E6%97%A51%E7%9B%86%23) `83.3K 🔥` `-44%`
1. [曝何与辞演神仙肉](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BD%95%E4%B8%8E%E8%BE%9E%E6%BC%94%E7%A5%9E%E4%BB%99%E8%82%89%23) `75.0K 🔥` `-65%`

Updated at 2026-04-15 13:48:46

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
