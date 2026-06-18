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

1. [加拿大vs卡塔尔 (Canada vs Qatar)](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7vs%E5%8D%A1%E5%A1%94%E5%B0%94%23) `471.7K 🔥` `NEW`
1. [端午出行重点提示](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E5%8D%88%E5%87%BA%E8%A1%8C%E9%87%8D%E7%82%B9%E6%8F%90%E7%A4%BA%23) `382.3K 🔥` `NEW`
1. [日本女护士杀人解压](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E6%8A%A4%E5%A3%AB%E6%9D%80%E4%BA%BA%E8%A7%A3%E5%8E%8B%23) `99.0K 🔥` `NEW`
1. [你买空调会在意铝制还是铜制吗](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%B9%B0%E7%A9%BA%E8%B0%83%E4%BC%9A%E5%9C%A8%E6%84%8F%E9%93%9D%E5%88%B6%E8%BF%98%E6%98%AF%E9%93%9C%E5%88%B6%E5%90%97%23) `98.6K 🔥` `NEW`
1. [Midjourney要开水疗中心](https://s.weibo.com/weibo?q=%23Midjourney%E8%A6%81%E5%BC%80%E6%B0%B4%E7%96%97%E4%B8%AD%E5%BF%83%23) `90.5K 🔥` `NEW`
1. [投资黄金不如投资健康](https://s.weibo.com/weibo?q=%23%E6%8A%95%E8%B5%84%E9%BB%84%E9%87%91%E4%B8%8D%E5%A6%82%E6%8A%95%E8%B5%84%E5%81%A5%E5%BA%B7%23) `89.7K 🔥` `NEW`
1. [瑞士vs波黑 (Switzerland vs Bosnia and Herzegovina)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%A3%ABvs%E6%B3%A2%E9%BB%91%23) `672.2K 🔥` `+195%`
1. [端午节](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E5%8D%88%E8%8A%82%23) `194.8K 🔥` `+420%`
1. [越长大越看不得杂技表演](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E9%95%BF%E5%A4%A7%E8%B6%8A%E7%9C%8B%E4%B8%8D%E5%BE%97%E6%9D%82%E6%8A%80%E8%A1%A8%E6%BC%94%23) `109.5K 🔥` `+172%`
1. [诬告强奸赔偿2000 (2000 compensation for false rape accusation)](https://s.weibo.com/weibo?q=%23%E8%AF%AC%E5%91%8A%E5%BC%BA%E5%A5%B8%E8%B5%94%E5%81%BF2000%23) `109.1K 🔥` `+209%`
1. [袁咏仪香港小姐的含金量还在上升](https://s.weibo.com/weibo?q=%23%E8%A2%81%E5%92%8F%E4%BB%AA%E9%A6%99%E6%B8%AF%E5%B0%8F%E5%A7%90%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `108.3K 🔥` `+224%`
1. [已买Babycare纸尿裤两年家长发声](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E4%B9%B0Babycare%E7%BA%B8%E5%B0%BF%E8%A3%A4%E4%B8%A4%E5%B9%B4%E5%AE%B6%E9%95%BF%E5%8F%91%E5%A3%B0%23) `107.4K 🔥` `+198%`
1. [内马尔确认无缘小组赛次轮 (Neymar confirmed to miss out on second round of group stage)](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E7%A1%AE%E8%AE%A4%E6%97%A0%E7%BC%98%E5%B0%8F%E7%BB%84%E8%B5%9B%E6%AC%A1%E8%BD%AE%23) `106.6K 🔥` `+199%`
1. [葡萄牙丢球后C罗质问本队门将 (Cristiano Ronaldo questioned his team's goalkeeper after Portugal conceded a goal)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E4%B8%A2%E7%90%83%E5%90%8EC%E7%BD%97%E8%B4%A8%E9%97%AE%E6%9C%AC%E9%98%9F%E9%97%A8%E5%B0%86%23) `105.9K 🔥` `+195%`
1. [好奇客服回应纸尿裤检出甲酰胺](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A5%87%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%94%E7%BA%B8%E5%B0%BF%E8%A3%A4%E6%A3%80%E5%87%BA%E7%94%B2%E9%85%B0%E8%83%BA%23) `105.7K 🔥` `+197%`
1. [小朋友背着小小朋友的身影太暖了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%9C%8B%E5%8F%8B%E8%83%8C%E7%9D%80%E5%B0%8F%E5%B0%8F%E6%9C%8B%E5%8F%8B%E7%9A%84%E8%BA%AB%E5%BD%B1%E5%A4%AA%E6%9A%96%E4%BA%86%23) `105.1K 🔥` `+227%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `104.5K 🔥` `+192%`
1. [周冬雨掉粉](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%E6%8E%89%E7%B2%89%23) `104.3K 🔥` `+193%`
1. [日本焚烧炉中炼出7000多克黄金 (More than 7,000 grams of gold recovered from Japanese incinerator)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%84%9A%E7%83%A7%E7%82%89%E4%B8%AD%E7%82%BC%E5%87%BA7000%E5%A4%9A%E5%85%8B%E9%BB%84%E9%87%91%23) `103.5K 🔥` `+187%`
1. [要不要带孩子检查甲酰胺](https://s.weibo.com/weibo?q=%23%E8%A6%81%E4%B8%8D%E8%A6%81%E5%B8%A6%E5%AD%A9%E5%AD%90%E6%A3%80%E6%9F%A5%E7%94%B2%E9%85%B0%E8%83%BA%23) `103.0K 🔥` `+190%`
1. [食欲旺盛本质的原因](https://s.weibo.com/weibo?q=%23%E9%A3%9F%E6%AC%B2%E6%97%BA%E7%9B%9B%E6%9C%AC%E8%B4%A8%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `102.8K 🔥` `+198%`
1. [甲酰胺 致癌](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%85%B0%E8%83%BA%20%E8%87%B4%E7%99%8C%23) `102.3K 🔥` `+194%`
1. [捷克vs南非 (Czech Republic vs South Africa)](https://s.weibo.com/weibo?q=%23%E6%8D%B7%E5%85%8Bvs%E5%8D%97%E9%9D%9E%23) `102.1K 🔥` `+120%`
1. [宝妈李佳琦直播间买到毒纸尿裤](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E6%9D%8E%E4%BD%B3%E7%90%A6%E7%9B%B4%E6%92%AD%E9%97%B4%E4%B9%B0%E5%88%B0%E6%AF%92%E7%BA%B8%E5%B0%BF%E8%A3%A4%23) `101.2K 🔥` `+198%`
1. [男童被父亲女友伤害致死母亲发声](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E8%A2%AB%E7%88%B6%E4%BA%B2%E5%A5%B3%E5%8F%8B%E4%BC%A4%E5%AE%B3%E8%87%B4%E6%AD%BB%E6%AF%8D%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `100.8K 🔥` `+213%`
1. [四川发现罕见巨型萤火虫 (Rare giant fireflies discovered in Sichuan)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%8F%91%E7%8E%B0%E7%BD%95%E8%A7%81%E5%B7%A8%E5%9E%8B%E8%90%A4%E7%81%AB%E8%99%AB%23) `100.3K 🔥` `+211%`
1. [白鹿丞磊莫离居然一见钟情](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%9E%E7%A3%8A%E8%8E%AB%E7%A6%BB%E5%B1%85%E7%84%B6%E4%B8%80%E8%A7%81%E9%92%9F%E6%83%85%23) `99.8K 🔥` `+210%`
1. [张凌赫金靖都说了打弟弟要趁早](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%87%91%E9%9D%96%E9%83%BD%E8%AF%B4%E4%BA%86%E6%89%93%E5%BC%9F%E5%BC%9F%E8%A6%81%E8%B6%81%E6%97%A9%23) `99.7K 🔥` `+209%`
1. [成年猫咪对主人的依赖程度](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E7%8C%AB%E5%92%AA%E5%AF%B9%E4%B8%BB%E4%BA%BA%E7%9A%84%E4%BE%9D%E8%B5%96%E7%A8%8B%E5%BA%A6%23) `98.3K 🔥` `+187%`
1. [高敏感就适合去看世界](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%95%8F%E6%84%9F%E5%B0%B1%E9%80%82%E5%90%88%E5%8E%BB%E7%9C%8B%E4%B8%96%E7%95%8C%23) `97.7K 🔥` `+70%`
1. [香港机场发生黄金大劫案 (Gold robbery at Hong Kong Airport)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%9C%BA%E5%9C%BA%E5%8F%91%E7%94%9F%E9%BB%84%E9%87%91%E5%A4%A7%E5%8A%AB%E6%A1%88%23) `97.1K 🔥` `+201%`
1. [纸尿裤检出甲酰胺 要不要带孩子检查](https://s.weibo.com/weibo?q=%23%E7%BA%B8%E5%B0%BF%E8%A3%A4%E6%A3%80%E5%87%BA%E7%94%B2%E9%85%B0%E8%83%BA%20%E8%A6%81%E4%B8%8D%E8%A6%81%E5%B8%A6%E5%AD%A9%E5%AD%90%E6%A3%80%E6%9F%A5%23) `96.9K 🔥` `+202%`
1. [92岁父亲房产全留女儿后称此生无憾](https://s.weibo.com/weibo?q=%2392%E5%B2%81%E7%88%B6%E4%BA%B2%E6%88%BF%E4%BA%A7%E5%85%A8%E7%95%99%E5%A5%B3%E5%84%BF%E5%90%8E%E7%A7%B0%E6%AD%A4%E7%94%9F%E6%97%A0%E6%86%BE%23) `96.3K 🔥` `+173%`
1. [毒纸尿裤涉事品牌 (The brand involved in poisonous diapers)](https://s.weibo.com/weibo?q=%23%E6%AF%92%E7%BA%B8%E5%B0%BF%E8%A3%A4%E6%B6%89%E4%BA%8B%E5%93%81%E7%89%8C%23) `95.7K 🔥` `+198%`
1. [东北人应该被禁止给景点起名](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E4%BA%BA%E5%BA%94%E8%AF%A5%E8%A2%AB%E7%A6%81%E6%AD%A2%E7%BB%99%E6%99%AF%E7%82%B9%E8%B5%B7%E5%90%8D%23) `95.5K 🔥` `+189%`
1. [好奇纸尿裤声明](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A5%87%E7%BA%B8%E5%B0%BF%E8%A3%A4%E5%A3%B0%E6%98%8E%23) `94.8K 🔥` `+195%`
1. [白鹿一口气发了32张照片](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%80%E5%8F%A3%E6%B0%94%E5%8F%91%E4%BA%8632%E5%BC%A0%E7%85%A7%E7%89%87%23) `94.4K 🔥` `+193%`
1. [凡人修仙传严正声明 (A solemn statement from Mortal Cultivation of Immortality)](https://s.weibo.com/weibo?q=%23%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `94.1K 🔥` `+192%`
1. [田曦薇好一个肌肉花仙子 (Tian Xiwei is such a muscular flower fairy)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%A5%BD%E4%B8%80%E4%B8%AA%E8%82%8C%E8%82%89%E8%8A%B1%E4%BB%99%E5%AD%90%23) `93.6K 🔥` `+191%`
1. [葡萄牙队回应C罗发文](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E9%98%9F%E5%9B%9E%E5%BA%94C%E7%BD%97%E5%8F%91%E6%96%87%23) `93.1K 🔥` `+186%`
1. [炽夏 (blazing summer)](https://s.weibo.com/weibo?q=%23%E7%82%BD%E5%A4%8F%23) `92.7K 🔥` `+188%`
1. [哈兰德和女友一起逛纽约](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%92%8C%E5%A5%B3%E5%8F%8B%E4%B8%80%E8%B5%B7%E9%80%9B%E7%BA%BD%E7%BA%A6%23) `92.1K 🔥` `+186%`
1. [孙怡花少8面试](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%8A%B1%E5%B0%918%E9%9D%A2%E8%AF%95%23) `91.9K 🔥` `+46%`
1. [中餐厅](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%23) `91.3K 🔥` `+184%`
1. [盛世天下](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E4%B8%96%E5%A4%A9%E4%B8%8B%23) `90.7K 🔥` `+182%`
1. [卢昱晓或将进组刺棠](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E6%88%96%E5%B0%86%E8%BF%9B%E7%BB%84%E5%88%BA%E6%A3%A0%23) `89.4K 🔥` `+178%`
1. [捷克1比1南非](https://s.weibo.com/weibo?q=%23%E6%8D%B7%E5%85%8B1%E6%AF%941%E5%8D%97%E9%9D%9E%23) `108.8K 🔥`
1. [建议大家对钱要有概念](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%AF%B9%E9%92%B1%E8%A6%81%E6%9C%89%E6%A6%82%E5%BF%B5%23) `356.7K 🔥` `-47%`
1. [佛得角门将 (cape verde goalkeeper)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%23) `107.0K 🔥` `-45%`

Updated at 2026-06-19 07:08:51

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
