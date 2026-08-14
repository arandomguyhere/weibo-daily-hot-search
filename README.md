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

1. [台风白海豚 (Typhoon White Dolphin)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `1.2M 🔥` `NEW`
1. [旺旺都不好卖了](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E9%83%BD%E4%B8%8D%E5%A5%BD%E5%8D%96%E4%BA%86%23) `971.7K 🔥` `NEW`
1. [中国汽车开放崛起之路](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B1%BD%E8%BD%A6%E5%BC%80%E6%94%BE%E5%B4%9B%E8%B5%B7%E4%B9%8B%E8%B7%AF%23) `753.4K 🔥` `NEW`
1. [e-tron带你去看球](https://s.weibo.com/weibo?q=%23e-tron%E5%B8%A6%E4%BD%A0%E5%8E%BB%E7%9C%8B%E7%90%83%23) `742.4K 🔥` `NEW`
1. [王传君体脂率25.5%](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E4%BD%93%E8%84%82%E7%8E%8725.5%25%23) `736.7K 🔥` `NEW`
1. [旺旺集团面临重大经营危机](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E9%9B%86%E5%9B%A2%E9%9D%A2%E4%B8%B4%E9%87%8D%E5%A4%A7%E7%BB%8F%E8%90%A5%E5%8D%B1%E6%9C%BA%23) `709.0K 🔥` `NEW`
1. [曾辉扛住了内娱镜头](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%89%9B%E4%BD%8F%E4%BA%86%E5%86%85%E5%A8%B1%E9%95%9C%E5%A4%B4%23) `698.0K 🔥` `NEW`
1. [EWC 食物中毒](https://s.weibo.com/weibo?q=%23EWC%20%E9%A3%9F%E7%89%A9%E4%B8%AD%E6%AF%92%23) `660.9K 🔥` `NEW`
1. [Wenbo受伤](https://s.weibo.com/weibo?q=%23Wenbo%E5%8F%97%E4%BC%A4%23) `452.6K 🔥` `NEW`
1. [胖东来房东逻辑](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%88%BF%E4%B8%9C%E9%80%BB%E8%BE%91%23) `380.9K 🔥` `NEW`
1. [PEL](https://s.weibo.com/weibo?q=%23PEL%23) `369.7K 🔥` `NEW`
1. [全民进入纯过日子时代](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%B0%91%E8%BF%9B%E5%85%A5%E7%BA%AF%E8%BF%87%E6%97%A5%E5%AD%90%E6%97%B6%E4%BB%A3%23) `367.5K 🔥` `NEW`
1. [曾辉帮韩雨彤整理衣服](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E5%B8%AE%E9%9F%A9%E9%9B%A8%E5%BD%A4%E6%95%B4%E7%90%86%E8%A1%A3%E6%9C%8D%23) `366.5K 🔥` `NEW`
1. [文黛黛假死](https://s.weibo.com/weibo?q=%23%E6%96%87%E9%BB%9B%E9%BB%9B%E5%81%87%E6%AD%BB%23) `363.0K 🔥` `NEW`
1. [魏子宸妆造](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%A6%86%E9%80%A0%23) `361.7K 🔥` `NEW`
1. [税务部门回应社保实缴问题](https://s.weibo.com/weibo?q=%23%E7%A8%8E%E5%8A%A1%E9%83%A8%E9%97%A8%E5%9B%9E%E5%BA%94%E7%A4%BE%E4%BF%9D%E5%AE%9E%E7%BC%B4%E9%97%AE%E9%A2%98%23) `359.9K 🔥` `NEW`
1. [迪丽热巴又心软撤诉了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8F%88%E5%BF%83%E8%BD%AF%E6%92%A4%E8%AF%89%E4%BA%86%23) `357.4K 🔥` `NEW`
1. [日本投降81周年](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8A%95%E9%99%8D81%E5%91%A8%E5%B9%B4%23) `356.0K 🔥` `NEW`
1. [喻言 压轴](https://s.weibo.com/weibo?q=%23%E5%96%BB%E8%A8%80%20%E5%8E%8B%E8%BD%B4%23) `350.4K 🔥` `NEW`
1. [披哥最累的是沈梦辰](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A5%E6%9C%80%E7%B4%AF%E7%9A%84%E6%98%AF%E6%B2%88%E6%A2%A6%E8%BE%B0%23) `349.5K 🔥` `NEW`
1. [英伟达CPO交换机全面量产 (NVIDIA CPO switches enter full mass production)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BECPO%E4%BA%A4%E6%8D%A2%E6%9C%BA%E5%85%A8%E9%9D%A2%E9%87%8F%E4%BA%A7%23) `345.6K 🔥` `NEW`
1. [曝王嘉尔宋雨琦恋情](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%81%8B%E6%83%85%23) `340.9K 🔥` `NEW`
1. [张雅琪 湖南卫视下场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E4%B8%8B%E5%9C%BA%23) `338.9K 🔥` `NEW`
1. [中央汇金证金公司集体清仓贵州茅台](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%A4%AE%E6%B1%87%E9%87%91%E8%AF%81%E9%87%91%E5%85%AC%E5%8F%B8%E9%9B%86%E4%BD%93%E6%B8%85%E4%BB%93%E8%B4%B5%E5%B7%9E%E8%8C%85%E5%8F%B0%23) `335.9K 🔥` `NEW`
1. [曹骏好瘦](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%A5%BD%E7%98%A6%23) `334.4K 🔥` `NEW`
1. [牛来](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%23) `331.6K 🔥` `NEW`
1. [湖州暴雨](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%B7%9E%E6%9A%B4%E9%9B%A8%23) `323.7K 🔥` `NEW`
1. [宋雨琦纹身](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%BA%B9%E8%BA%AB%23) `318.9K 🔥` `NEW`
1. [刘昊然为王传君拼了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%E4%B8%BA%E7%8E%8B%E4%BC%A0%E5%90%9B%E6%8B%BC%E4%BA%86%23) `310.1K 🔥` `NEW`
1. [林诗栋2比3A勒布伦](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B2%E6%AF%943A%E5%8B%92%E5%B8%83%E4%BC%A6%23) `294.6K 🔥` `NEW`
1. [公司该缴的社保 个人承担 (The social security that the company should pay is borne by the individual)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E8%AF%A5%E7%BC%B4%E7%9A%84%E7%A4%BE%E4%BF%9D%20%E4%B8%AA%E4%BA%BA%E6%89%BF%E6%8B%85%23) `286.5K 🔥` `NEW`
1. [皇阿玛披哥送考五阿哥](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%98%BF%E7%8E%9B%E6%8A%AB%E5%93%A5%E9%80%81%E8%80%83%E4%BA%94%E9%98%BF%E5%93%A5%23) `262.0K 🔥` `NEW`
1. [恋与深空 敷衍](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%20%E6%95%B7%E8%A1%8D%23) `257.9K 🔥` `NEW`
1. [王橹杰陈思罕合唱黑苹果](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%99%88%E6%80%9D%E7%BD%95%E5%90%88%E5%94%B1%E9%BB%91%E8%8B%B9%E6%9E%9C%23) `257.6K 🔥` `NEW`
1. [张雅琪发12宫格](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E5%8F%9112%E5%AE%AB%E6%A0%BC%23) `257.0K 🔥` `NEW`
1. [明天起禁用这类塑料制品](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%A4%A9%E8%B5%B7%E7%A6%81%E7%94%A8%E8%BF%99%E7%B1%BB%E5%A1%91%E6%96%99%E5%88%B6%E5%93%81%23) `254.1K 🔥` `NEW`
1. [女子称自己月经持续来了8年](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E8%87%AA%E5%B7%B1%E6%9C%88%E7%BB%8F%E6%8C%81%E7%BB%AD%E6%9D%A5%E4%BA%868%E5%B9%B4%23) `252.0K 🔥` `NEW`
1. [沈腾路演泪崩](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E8%B7%AF%E6%BC%94%E6%B3%AA%E5%B4%A9%23) `248.7K 🔥` `NEW`
1. [关晓彤彩排也戴着负重手环](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%BD%A9%E6%8E%92%E4%B9%9F%E6%88%B4%E7%9D%80%E8%B4%9F%E9%87%8D%E6%89%8B%E7%8E%AF%23) `238.3K 🔥` `NEW`
1. [一起告慰抗战先烈](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%B5%B7%E5%91%8A%E6%85%B0%E6%8A%97%E6%88%98%E5%85%88%E7%83%88%23) `217.8K 🔥` `NEW`
1. [天魔 黑苹果 (Demon Black Apple)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E9%AD%94%20%E9%BB%91%E8%8B%B9%E6%9E%9C%23) `215.6K 🔥` `NEW`
1. [沈梦辰漂亮裙子配丑鞋](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E6%BC%82%E4%BA%AE%E8%A3%99%E5%AD%90%E9%85%8D%E4%B8%91%E9%9E%8B%23) `206.1K 🔥` `NEW`
1. [日本暴雨中国游客无奈地铁站过夜](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%9A%B4%E9%9B%A8%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E6%97%A0%E5%A5%88%E5%9C%B0%E9%93%81%E7%AB%99%E8%BF%87%E5%A4%9C%23) `199.1K 🔥` `NEW`
1. [张桂源杨博文互相比心](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E6%9D%A8%E5%8D%9A%E6%96%87%E4%BA%92%E7%9B%B8%E6%AF%94%E5%BF%83%23) `192.9K 🔥` `NEW`
1. [张彬彬问孙楠我们能一屋吗](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BD%AC%E5%BD%AC%E9%97%AE%E5%AD%99%E6%A5%A0%E6%88%91%E4%BB%AC%E8%83%BD%E4%B8%80%E5%B1%8B%E5%90%97%23) `172.6K 🔥` `NEW`
1. [44岁男子脑梗无法进食被一根冰棍救了](https://s.weibo.com/weibo?q=%2344%E5%B2%81%E7%94%B7%E5%AD%90%E8%84%91%E6%A2%97%E6%97%A0%E6%B3%95%E8%BF%9B%E9%A3%9F%E8%A2%AB%E4%B8%80%E6%A0%B9%E5%86%B0%E6%A3%8D%E6%95%91%E4%BA%86%23) `156.6K 🔥` `NEW`
1. [披哥选手体脂率](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A5%E9%80%89%E6%89%8B%E4%BD%93%E8%84%82%E7%8E%87%23) `156.3K 🔥` `NEW`
1. [郭德纲 现挂](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%BE%B7%E7%BA%B2%20%E7%8E%B0%E6%8C%82%23) `155.7K 🔥` `NEW`
1. [无锡暴雨](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%94%A1%E6%9A%B4%E9%9B%A8%23) `146.1K 🔥` `NEW`
1. [明年或出现最严重存储荒](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%B9%B4%E6%88%96%E5%87%BA%E7%8E%B0%E6%9C%80%E4%B8%A5%E9%87%8D%E5%AD%98%E5%82%A8%E8%8D%92%23) `129.4K 🔥` `NEW`

Updated at 2026-08-15 00:29:28

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
