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

1. [怡颗莓 致癌物 (Yikeberry carcinogen)](https://s.weibo.com/weibo?q=%23%E6%80%A1%E9%A2%97%E8%8E%93%20%E8%87%B4%E7%99%8C%E7%89%A9%23) `4.0M 🔥` `NEW`
1. [高考684分进了双非院校女生发声](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83684%E5%88%86%E8%BF%9B%E4%BA%86%E5%8F%8C%E9%9D%9E%E9%99%A2%E6%A0%A1%E5%A5%B3%E7%94%9F%E5%8F%91%E5%A3%B0%23) `1.7M 🔥` `NEW`
1. [中国科技这3组数字真提气](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A7%91%E6%8A%80%E8%BF%993%E7%BB%84%E6%95%B0%E5%AD%97%E7%9C%9F%E6%8F%90%E6%B0%94%23) `1.2M 🔥` `NEW`
1. [买了一套七个阳台的奇葩房子](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E4%BA%86%E4%B8%80%E5%A5%97%E4%B8%83%E4%B8%AA%E9%98%B3%E5%8F%B0%E7%9A%84%E5%A5%87%E8%91%A9%E6%88%BF%E5%AD%90%23) `1.1M 🔥` `NEW`
1. [高考684分进双非女生原计划上央财](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83684%E5%88%86%E8%BF%9B%E5%8F%8C%E9%9D%9E%E5%A5%B3%E7%94%9F%E5%8E%9F%E8%AE%A1%E5%88%92%E4%B8%8A%E5%A4%AE%E8%B4%A2%23) `1.0M 🔥` `NEW`
1. [西班牙机长向乘客广播阿根廷夺冠](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E6%9C%BA%E9%95%BF%E5%90%91%E4%B9%98%E5%AE%A2%E5%B9%BF%E6%92%AD%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%A4%BA%E5%86%A0%23) `888.1K 🔥` `NEW`
1. [一念江南开机](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E5%BC%80%E6%9C%BA%23) `592.7K 🔥` `NEW`
1. [年会不能停2预告](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E4%BC%9A%E4%B8%8D%E8%83%BD%E5%81%9C2%E9%A2%84%E5%91%8A%23) `376.2K 🔥` `NEW`
1. [影视飓风去年参保人数为122人](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E5%8E%BB%E5%B9%B4%E5%8F%82%E4%BF%9D%E4%BA%BA%E6%95%B0%E4%B8%BA122%E4%BA%BA%23) `352.5K 🔥` `NEW`
1. [房东觉得房子卖亏了报复买家](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%9C%E8%A7%89%E5%BE%97%E6%88%BF%E5%AD%90%E5%8D%96%E4%BA%8F%E4%BA%86%E6%8A%A5%E5%A4%8D%E4%B9%B0%E5%AE%B6%23) `340.9K 🔥` `NEW`
1. [赵今麦郭俊辰三搭了 (Zhao Jinmai and Guo Junchen had a threesome)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E9%83%AD%E4%BF%8A%E8%BE%B0%E4%B8%89%E6%90%AD%E4%BA%86%23) `338.8K 🔥` `NEW`
1. [西班牙夺冠中式碳水立大功](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%A4%BA%E5%86%A0%E4%B8%AD%E5%BC%8F%E7%A2%B3%E6%B0%B4%E7%AB%8B%E5%A4%A7%E5%8A%9F%23) `328.1K 🔥` `NEW`
1. [李宇春辛芷蕾高叶倪妮合照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E8%BE%9B%E8%8A%B7%E8%95%BE%E9%AB%98%E5%8F%B6%E5%80%AA%E5%A6%AE%E5%90%88%E7%85%A7%23) `324.9K 🔥` `NEW`
1. [王心凌代言丰田铂智7](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BF%83%E5%87%8C%E4%BB%A3%E8%A8%80%E4%B8%B0%E7%94%B0%E9%93%82%E6%99%BA7%23) `315.6K 🔥` `NEW`
1. [谢贤曾辟谣不喜欢王菲](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E6%9B%BE%E8%BE%9F%E8%B0%A3%E4%B8%8D%E5%96%9C%E6%AC%A2%E7%8E%8B%E8%8F%B2%23) `309.3K 🔥` `NEW`
1. [冉莹颖抛下邹市明去朋友桌敬酒](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E6%8A%9B%E4%B8%8B%E9%82%B9%E5%B8%82%E6%98%8E%E5%8E%BB%E6%9C%8B%E5%8F%8B%E6%A1%8C%E6%95%AC%E9%85%92%23) `303.8K 🔥` `NEW`
1. [女儿女婿逼宫董事长母亲失败](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E5%A5%B3%E5%A9%BF%E9%80%BC%E5%AE%AB%E8%91%A3%E4%BA%8B%E9%95%BF%E6%AF%8D%E4%BA%B2%E5%A4%B1%E8%B4%A5%23) `302.8K 🔥` `NEW`
1. [工作后大家的朋友圈都变样了](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%90%8E%E5%A4%A7%E5%AE%B6%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%9C%88%E9%83%BD%E5%8F%98%E6%A0%B7%E4%BA%86%23) `302.1K 🔥` `NEW`
1. [闪婚女子称曾试管生子为已故弟弟留后](https://s.weibo.com/weibo?q=%23%E9%97%AA%E5%A9%9A%E5%A5%B3%E5%AD%90%E7%A7%B0%E6%9B%BE%E8%AF%95%E7%AE%A1%E7%94%9F%E5%AD%90%E4%B8%BA%E5%B7%B2%E6%95%85%E5%BC%9F%E5%BC%9F%E7%95%99%E5%90%8E%23) `300.1K 🔥` `NEW`
1. [鸭子眼里这和见鬼了没区别](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E5%AD%90%E7%9C%BC%E9%87%8C%E8%BF%99%E5%92%8C%E8%A7%81%E9%AC%BC%E4%BA%86%E6%B2%A1%E5%8C%BA%E5%88%AB%23) `295.3K 🔥` `NEW`
1. [维尼修斯整容了 (Vinicius had plastic surgery)](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%B0%BC%E4%BF%AE%E6%96%AF%E6%95%B4%E5%AE%B9%E4%BA%86%23) `294.3K 🔥` `NEW`
1. [Jennie新歌MV男主](https://s.weibo.com/weibo?q=%23Jennie%E6%96%B0%E6%AD%8CMV%E7%94%B7%E4%B8%BB%23) `291.6K 🔥` `NEW`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `291.0K 🔥` `NEW`
1. [幼童溺亡遗体在下游找到](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E7%AB%A5%E6%BA%BA%E4%BA%A1%E9%81%97%E4%BD%93%E5%9C%A8%E4%B8%8B%E6%B8%B8%E6%89%BE%E5%88%B0%23) `284.6K 🔥` `NEW`
1. [漫威掏出传世家底了](https://s.weibo.com/weibo?q=%23%E6%BC%AB%E5%A8%81%E6%8E%8F%E5%87%BA%E4%BC%A0%E4%B8%96%E5%AE%B6%E5%BA%95%E4%BA%86%23) `253.1K 🔥` `NEW`
1. [西班牙夺冠狂欢酿悲剧](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%A4%BA%E5%86%A0%E7%8B%82%E6%AC%A2%E9%85%BF%E6%82%B2%E5%89%A7%23) `247.3K 🔥` `NEW`
1. [猫把掉落的黑胡子留给主人](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E6%8A%8A%E6%8E%89%E8%90%BD%E7%9A%84%E9%BB%91%E8%83%A1%E5%AD%90%E7%95%99%E7%BB%99%E4%B8%BB%E4%BA%BA%23) `245.8K 🔥` `NEW`
1. [野狗骨头把死亡拍得好具体](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%8A%8A%E6%AD%BB%E4%BA%A1%E6%8B%8D%E5%BE%97%E5%A5%BD%E5%85%B7%E4%BD%93%23) `243.6K 🔥` `NEW`
1. [赵丽颖27岁演的16岁花千骨](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%9627%E5%B2%81%E6%BC%94%E7%9A%8416%E5%B2%81%E8%8A%B1%E5%8D%83%E9%AA%A8%23) `231.2K 🔥` `NEW`
1. [美国拟限制中国开源AI模型](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%8B%9F%E9%99%90%E5%88%B6%E4%B8%AD%E5%9B%BD%E5%BC%80%E6%BA%90AI%E6%A8%A1%E5%9E%8B%23) `203.9K 🔥` `NEW`
1. [赵今麦王安宇一念江南官宣节奏 (Zhao Jinmai and Wang Anyu thought about the official announcement rhythm of Jiangnan)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E7%8E%8B%E5%AE%89%E5%AE%87%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E5%AE%98%E5%AE%A3%E8%8A%82%E5%A5%8F%23) `202.3K 🔥` `NEW`
1. [白冰特别出演一念江南](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%86%B0%E7%89%B9%E5%88%AB%E5%87%BA%E6%BC%94%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%23) `195.6K 🔥` `NEW`
1. [樊振东缺席乒超联赛](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%BC%BA%E5%B8%AD%E4%B9%92%E8%B6%85%E8%81%94%E8%B5%9B%23) `172.7K 🔥` `NEW`
1. [29岁小伙广西救灾离世生前最后画面](https://s.weibo.com/weibo?q=%2329%E5%B2%81%E5%B0%8F%E4%BC%99%E5%B9%BF%E8%A5%BF%E6%95%91%E7%81%BE%E7%A6%BB%E4%B8%96%E7%94%9F%E5%89%8D%E6%9C%80%E5%90%8E%E7%94%BB%E9%9D%A2%23) `170.7K 🔥` `NEW`
1. [叠纸心意新品设计敷衍](https://s.weibo.com/weibo?q=%23%E5%8F%A0%E7%BA%B8%E5%BF%83%E6%84%8F%E6%96%B0%E5%93%81%E8%AE%BE%E8%AE%A1%E6%95%B7%E8%A1%8D%23) `170.5K 🔥` `NEW`
1. [郑恺苗苗带儿女过暑假](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E8%8B%97%E8%8B%97%E5%B8%A6%E5%84%BF%E5%A5%B3%E8%BF%87%E6%9A%91%E5%81%87%23) `165.4K 🔥` `NEW`
1. [卖一辆10万元新车仅赚1500元](https://s.weibo.com/weibo?q=%23%E5%8D%96%E4%B8%80%E8%BE%8610%E4%B8%87%E5%85%83%E6%96%B0%E8%BD%A6%E4%BB%85%E8%B5%9A1500%E5%85%83%23) `163.8K 🔥` `NEW`
1. [西班牙夺冠合影特朗普被裁掉](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%A4%BA%E5%86%A0%E5%90%88%E5%BD%B1%E7%89%B9%E6%9C%97%E6%99%AE%E8%A2%AB%E8%A3%81%E6%8E%89%23) `163.8K 🔥` `NEW`
1. [张凌赫王楚然情头有了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%83%85%E5%A4%B4%E6%9C%89%E4%BA%86%23) `147.6K 🔥` `NEW`
1. [旭旭宝宝还原风波完整经过](https://s.weibo.com/weibo?q=%23%E6%97%AD%E6%97%AD%E5%AE%9D%E5%AE%9D%E8%BF%98%E5%8E%9F%E9%A3%8E%E6%B3%A2%E5%AE%8C%E6%95%B4%E7%BB%8F%E8%BF%87%23) `147.1K 🔥` `NEW`
1. [侧睡真的很舒服 (It’s really comfortable to sleep on your side)](https://s.weibo.com/weibo?q=%23%E4%BE%A7%E7%9D%A1%E7%9C%9F%E7%9A%84%E5%BE%88%E8%88%92%E6%9C%8D%23) `144.9K 🔥` `NEW`
1. [颖儿离婚这段演到青筋暴起](https://s.weibo.com/weibo?q=%23%E9%A2%96%E5%84%BF%E7%A6%BB%E5%A9%9A%E8%BF%99%E6%AE%B5%E6%BC%94%E5%88%B0%E9%9D%92%E7%AD%8B%E6%9A%B4%E8%B5%B7%23) `143.7K 🔥` `NEW`
1. [手把手教你关掉藏在手机里的耳朵](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%85%B3%E6%8E%89%E8%97%8F%E5%9C%A8%E6%89%8B%E6%9C%BA%E9%87%8C%E7%9A%84%E8%80%B3%E6%9C%B5%23) `142.2K 🔥` `NEW`
1. [王源官宣南京连开两场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%AE%98%E5%AE%A3%E5%8D%97%E4%BA%AC%E8%BF%9E%E5%BC%80%E4%B8%A4%E5%9C%BA%23) `141.6K 🔥` `NEW`
1. [女生高考684分花3000元咨询进双非](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E9%AB%98%E8%80%83684%E5%88%86%E8%8A%B13000%E5%85%83%E5%92%A8%E8%AF%A2%E8%BF%9B%E5%8F%8C%E9%9D%9E%23) `986.4K 🔥` `+437%`
1. [从小坚持的睡前刷牙居然是错的 (I've been insisting on brushing my teeth before going to bed since I was a child, but it's actually wrong)](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E5%B0%8F%E5%9D%9A%E6%8C%81%E7%9A%84%E7%9D%A1%E5%89%8D%E5%88%B7%E7%89%99%E5%B1%85%E7%84%B6%E6%98%AF%E9%94%99%E7%9A%84%23) `296.9K 🔥` `+52%`
1. [影视飓风回怼博主恶意解读](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E5%9B%9E%E6%80%BC%E5%8D%9A%E4%B8%BB%E6%81%B6%E6%84%8F%E8%A7%A3%E8%AF%BB%23) `272.0K 🔥` `+51%`
1. [谢贤进ICU后一心要等谢霆锋回香港 (After being admitted to the ICU, Nicholas Tse was determined to wait for Nicholas Tse to return to Hong Kong.)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E8%BF%9BICU%E5%90%8E%E4%B8%80%E5%BF%83%E8%A6%81%E7%AD%89%E8%B0%A2%E9%9C%86%E9%94%8B%E5%9B%9E%E9%A6%99%E6%B8%AF%23) `351.1K 🔥`
1. [一个治驼背的办法](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%B2%BB%E9%A9%BC%E8%83%8C%E7%9A%84%E5%8A%9E%E6%B3%95%23) `200.3K 🔥`
1. [Zara阔腿裤存安全隐患](https://s.weibo.com/weibo?q=%23Zara%E9%98%94%E8%85%BF%E8%A3%A4%E5%AD%98%E5%AE%89%E5%85%A8%E9%9A%90%E6%82%A3%23) `151.9K 🔥` `-87%`

Updated at 2026-07-21 12:27:16

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
