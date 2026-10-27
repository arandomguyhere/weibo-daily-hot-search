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

1. [事后道歉救不了姆巴佩](https://s.weibo.com/weibo?q=%23%E4%BA%8B%E5%90%8E%E9%81%93%E6%AD%89%E6%95%91%E4%B8%8D%E4%BA%86%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `281.2K 🔥` `NEW`
1. [中国新晋女首富身家1270亿](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E6%99%8B%E5%A5%B3%E9%A6%96%E5%AF%8C%E8%BA%AB%E5%AE%B61270%E4%BA%BF%23) `266.5K 🔥` `NEW`
1. [我国产业结构向新向优向好升级](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E4%BA%A7%E4%B8%9A%E7%BB%93%E6%9E%84%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%E5%90%91%E5%A5%BD%E5%8D%87%E7%BA%A7%23) `117.1K 🔥` `NEW`
1. [盲盒抽到大结果了](https://s.weibo.com/weibo?q=%23%E7%9B%B2%E7%9B%92%E6%8A%BD%E5%88%B0%E5%A4%A7%E7%BB%93%E6%9E%9C%E4%BA%86%23) `108.6K 🔥` `NEW`
1. [中国足协与皇马俱乐部严正交涉](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%B3%E5%8D%8F%E4%B8%8E%E7%9A%87%E9%A9%AC%E4%BF%B1%E4%B9%90%E9%83%A8%E4%B8%A5%E6%AD%A3%E4%BA%A4%E6%B6%89%23) `100.2K 🔥` `NEW`
1. [小城良方高开颠走](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E9%AB%98%E5%BC%80%E9%A2%A0%E8%B5%B0%23) `72.4K 🔥` `NEW`
1. [姆巴佩们别想从中国市场挣走一分钱](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%BB%AC%E5%88%AB%E6%83%B3%E4%BB%8E%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%E6%8C%A3%E8%B5%B0%E4%B8%80%E5%88%86%E9%92%B1%23) `69.5K 🔥` `NEW`
1. [iQOO Neo12新品发布](https://s.weibo.com/weibo?q=%23iQOO%20Neo12%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%23) `69.4K 🔥` `NEW`
1. [婚恋关系唯一重要的是你舒服](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E6%81%8B%E5%85%B3%E7%B3%BB%E5%94%AF%E4%B8%80%E9%87%8D%E8%A6%81%E7%9A%84%E6%98%AF%E4%BD%A0%E8%88%92%E6%9C%8D%23) `69.3K 🔥` `NEW`
1. [外交部回应姆巴佩涉华不当言论](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%B6%89%E5%8D%8E%E4%B8%8D%E5%BD%93%E8%A8%80%E8%AE%BA%23) `67.9K 🔥` `NEW`
1. [麒麟9050峰值仅A20Pro一半](https://s.weibo.com/weibo?q=%23%E9%BA%92%E9%BA%9F9050%E5%B3%B0%E5%80%BC%E4%BB%85A20Pro%E4%B8%80%E5%8D%8A%23) `66.5K 🔥` `NEW`
1. [红米K100提前发布](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E7%B1%B3K100%E6%8F%90%E5%89%8D%E5%8F%91%E5%B8%83%23) `64.1K 🔥` `NEW`
1. [姆巴佩遭媒体痛批](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%81%AD%E5%AA%92%E4%BD%93%E7%97%9B%E6%89%B9%23) `63.3K 🔥` `NEW`
1. [北京动物园通报萌兰身体状态](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%8A%A8%E7%89%A9%E5%9B%AD%E9%80%9A%E6%8A%A5%E8%90%8C%E5%85%B0%E8%BA%AB%E4%BD%93%E7%8A%B6%E6%80%81%23) `61.6K 🔥` `NEW`
1. [厉娜这些年赚不到钱的原因](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E8%BF%99%E4%BA%9B%E5%B9%B4%E8%B5%9A%E4%B8%8D%E5%88%B0%E9%92%B1%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `60.4K 🔥` `NEW`
1. [饲养员多次呼唤萌兰无响应](https://s.weibo.com/weibo?q=%23%E9%A5%B2%E5%85%BB%E5%91%98%E5%A4%9A%E6%AC%A1%E5%91%BC%E5%94%A4%E8%90%8C%E5%85%B0%E6%97%A0%E5%93%8D%E5%BA%94%23) `52.9K 🔥` `NEW`
1. [你吃的烤肠可能是鸡脖子做的](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%90%83%E7%9A%84%E7%83%A4%E8%82%A0%E5%8F%AF%E8%83%BD%E6%98%AF%E9%B8%A1%E8%84%96%E5%AD%90%E5%81%9A%E7%9A%84%23) `52.9K 🔥` `NEW`
1. [坠亡幼童父亲说孩子3岁前没记忆](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%B9%BC%E7%AB%A5%E7%88%B6%E4%BA%B2%E8%AF%B4%E5%AD%A9%E5%AD%903%E5%B2%81%E5%89%8D%E6%B2%A1%E8%AE%B0%E5%BF%86%23) `52.9K 🔥` `NEW`
1. [卢昱晓田嘉瑞 我欲乘风](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%94%B0%E5%98%89%E7%91%9E%20%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `52.9K 🔥` `NEW`
1. [疑似新毒株腹痛只能硬熬](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%96%B0%E6%AF%92%E6%A0%AA%E8%85%B9%E7%97%9B%E5%8F%AA%E8%83%BD%E7%A1%AC%E7%86%AC%23) `52.9K 🔥` `NEW`
1. [K100双11真香机](https://s.weibo.com/weibo?q=%23K100%E5%8F%8C11%E7%9C%9F%E9%A6%99%E6%9C%BA%23) `52.9K 🔥` `NEW`
1. [鸡脖鸡骨架打成肉泥变成烤肠](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E8%84%96%E9%B8%A1%E9%AA%A8%E6%9E%B6%E6%89%93%E6%88%90%E8%82%89%E6%B3%A5%E5%8F%98%E6%88%90%E7%83%A4%E8%82%A0%23) `52.8K 🔥` `NEW`
1. [李沁张晚意当上皇帝皇后了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%81%E5%BC%A0%E6%99%9A%E6%84%8F%E5%BD%93%E4%B8%8A%E7%9A%87%E5%B8%9D%E7%9A%87%E5%90%8E%E4%BA%86%23) `52.8K 🔥` `NEW`
1. [看到熊猫烧香病毒感觉年轻了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%88%B0%E7%86%8A%E7%8C%AB%E7%83%A7%E9%A6%99%E7%97%85%E6%AF%92%E6%84%9F%E8%A7%89%E5%B9%B4%E8%BD%BB%E4%BA%86%23) `52.8K 🔥` `NEW`
1. [皇马沉默难消涉华争议](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E6%B2%89%E9%BB%98%E9%9A%BE%E6%B6%88%E6%B6%89%E5%8D%8E%E4%BA%89%E8%AE%AE%23) `52.8K 🔥` `NEW`
1. [普通人千万要带娃去广东见世面](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E5%8D%83%E4%B8%87%E8%A6%81%E5%B8%A6%E5%A8%83%E5%8E%BB%E5%B9%BF%E4%B8%9C%E8%A7%81%E4%B8%96%E9%9D%A2%23) `52.8K 🔥` `NEW`
1. [郭晓婷王天辰三搭](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E4%B8%89%E6%90%AD%23) `51.9K 🔥` `NEW`
1. [皇马反复碰触国人情感红线](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E5%8F%8D%E5%A4%8D%E7%A2%B0%E8%A7%A6%E5%9B%BD%E4%BA%BA%E6%83%85%E6%84%9F%E7%BA%A2%E7%BA%BF%23) `51.8K 🔥` `NEW`
1. [原来刘亦菲走红毯的时候雨这么大](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%88%98%E4%BA%A6%E8%8F%B2%E8%B5%B0%E7%BA%A2%E6%AF%AF%E7%9A%84%E6%97%B6%E5%80%99%E9%9B%A8%E8%BF%99%E4%B9%88%E5%A4%A7%23) `46.5K 🔥` `NEW`
1. [中国新闻网呸姆巴佩](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E9%97%BB%E7%BD%91%E5%91%B8%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `45.5K 🔥` `NEW`
1. [李彩演因翻跳NEON泡泡道歉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%BD%A9%E6%BC%94%E5%9B%A0%E7%BF%BB%E8%B7%B3NEON%E6%B3%A1%E6%B3%A1%E9%81%93%E6%AD%89%23) `43.5K 🔥` `NEW`
1. [建议秋冬多喝这种饮品](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%A7%8B%E5%86%AC%E5%A4%9A%E5%96%9D%E8%BF%99%E7%A7%8D%E9%A5%AE%E5%93%81%23) `40.4K 🔥` `NEW`
1. [以后度假可以只带丝巾不带衣服了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E5%BA%A6%E5%81%87%E5%8F%AF%E4%BB%A5%E5%8F%AA%E5%B8%A6%E4%B8%9D%E5%B7%BE%E4%B8%8D%E5%B8%A6%E8%A1%A3%E6%9C%8D%E4%BA%86%23) `40.3K 🔥` `NEW`
1. [环球时报评姆巴佩事件](https://s.weibo.com/weibo?q=%23%E7%8E%AF%E7%90%83%E6%97%B6%E6%8A%A5%E8%AF%84%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%BA%8B%E4%BB%B6%23) `40.2K 🔥` `NEW`
1. [薛之谦12年歌迷被骗钱又遭取关](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A612%E5%B9%B4%E6%AD%8C%E8%BF%B7%E8%A2%AB%E9%AA%97%E9%92%B1%E5%8F%88%E9%81%AD%E5%8F%96%E5%85%B3%23) `40.0K 🔥` `NEW`
1. [Hope爆料AL井盖工作内容](https://s.weibo.com/weibo?q=%23Hope%E7%88%86%E6%96%99AL%E4%BA%95%E7%9B%96%E5%B7%A5%E4%BD%9C%E5%86%85%E5%AE%B9%23) `40.0K 🔥` `NEW`
1. [姆巴佩涉华不当言论引众怒](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%B6%89%E5%8D%8E%E4%B8%8D%E5%BD%93%E8%A8%80%E8%AE%BA%E5%BC%95%E4%BC%97%E6%80%92%23) `39.6K 🔥` `NEW`
1. [睡前9分钟修复皮质醇](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E5%89%8D9%E5%88%86%E9%92%9F%E4%BF%AE%E5%A4%8D%E7%9A%AE%E8%B4%A8%E9%86%87%23) `39.2K 🔥` `NEW`
1. [姆巴佩造成的伤害不会因道歉烟消云散](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%80%A0%E6%88%90%E7%9A%84%E4%BC%A4%E5%AE%B3%E4%B8%8D%E4%BC%9A%E5%9B%A0%E9%81%93%E6%AD%89%E7%83%9F%E6%B6%88%E4%BA%91%E6%95%A3%23) `38.5K 🔥` `NEW`
1. [小城良方 76位医学顾问](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%2076%E4%BD%8D%E5%8C%BB%E5%AD%A6%E9%A1%BE%E9%97%AE%23) `36.0K 🔥` `NEW`
1. [西甲致歉](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%94%B2%E8%87%B4%E6%AD%89%23) `35.9K 🔥` `NEW`
1. [人类一天三顿饭很累](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E4%B8%80%E5%A4%A9%E4%B8%89%E9%A1%BF%E9%A5%AD%E5%BE%88%E7%B4%AF%23) `35.2K 🔥` `NEW`
1. [字节跳动赚麻了](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8%E8%B5%9A%E9%BA%BB%E4%BA%86%23) `35.0K 🔥` `NEW`
1. [等风热吻你官宣](https://s.weibo.com/weibo?q=%23%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%E5%AE%98%E5%AE%A3%23) `33.4K 🔥` `NEW`
1. [魏娆猜出是皇帝对皇子们的考验](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A8%86%E7%8C%9C%E5%87%BA%E6%98%AF%E7%9A%87%E5%B8%9D%E5%AF%B9%E7%9A%87%E5%AD%90%E4%BB%AC%E7%9A%84%E8%80%83%E9%AA%8C%23) `31.7K 🔥` `NEW`
1. [JDG晋级年总胜者组半决赛](https://s.weibo.com/weibo?q=%23JDG%E6%99%8B%E7%BA%A7%E5%B9%B4%E6%80%BB%E8%83%9C%E8%80%85%E7%BB%84%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `29.8K 🔥` `NEW`
1. [邓超Angelababy合体比心](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85Angelababy%E5%90%88%E4%BD%93%E6%AF%94%E5%BF%83%23) `29.4K 🔥` `NEW`
1. [范丞丞璀璨之上](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%92%80%E7%92%A8%E4%B9%8B%E4%B8%8A%23) `29.1K 🔥` `NEW`
1. [杨洋终于回归现偶了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E7%BB%88%E4%BA%8E%E5%9B%9E%E5%BD%92%E7%8E%B0%E5%81%B6%E4%BA%86%23) `28.9K 🔥` `NEW`
1. [极客湾](https://s.weibo.com/weibo?q=%23%E6%9E%81%E5%AE%A2%E6%B9%BE%23) `28.1K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `28.0K 🔥` `NEW`
1. [WTT蒙彼利埃女单32强赛](https://s.weibo.com/weibo?q=%23WTT%E8%92%99%E5%BD%BC%E5%88%A9%E5%9F%83%E5%A5%B3%E5%8D%9532%E5%BC%BA%E8%B5%9B%23) `27.9K 🔥` `NEW`

Updated at 2026-10-28 03:39:13

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
