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

1. [C罗骗过全世界 (Cristiano Ronaldo deceived the whole world)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E9%AA%97%E8%BF%87%E5%85%A8%E4%B8%96%E7%95%8C%23) `990.7K 🔥` `NEW`
1. [葡萄牙5比0乌兹别克斯坦](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%995%E6%AF%940%E4%B9%8C%E5%85%B9%E5%88%AB%E5%85%8B%E6%96%AF%E5%9D%A6%23) `636.5K 🔥` `NEW`
1. [高考志愿填报遵循9个字](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%BF%97%E6%84%BF%E5%A1%AB%E6%8A%A5%E9%81%B5%E5%BE%AA9%E4%B8%AA%E5%AD%97%23) `607.2K 🔥` `NEW`
1. [C罗成为葡萄牙世界杯射手王](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%88%90%E4%B8%BA%E8%91%A1%E8%90%84%E7%89%99%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B0%84%E6%89%8B%E7%8E%8B%23) `585.2K 🔥` `NEW`
1. [看四渡收获逆风翻盘的勇气](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%9B%9B%E6%B8%A1%E6%94%B6%E8%8E%B7%E9%80%86%E9%A3%8E%E7%BF%BB%E7%9B%98%E7%9A%84%E5%8B%87%E6%B0%94%23) `148.5K 🔥` `NEW`
1. [英格兰vs加纳](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0vs%E5%8A%A0%E7%BA%B3%23) `118.6K 🔥` `NEW`
1. [世界杯已有6队晋级4队出局](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B7%B2%E6%9C%896%E9%98%9F%E6%99%8B%E7%BA%A74%E9%98%9F%E5%87%BA%E5%B1%80%23) `72.0K 🔥` `NEW`
1. [乌兹别克斯坦乌龙球](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%B9%E5%88%AB%E5%85%8B%E6%96%AF%E5%9D%A6%E4%B9%8C%E9%BE%99%E7%90%83%23) `56.6K 🔥` `NEW`
1. [梅开二度 超巨KPI](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%20%E8%B6%85%E5%B7%A8KPI%23) `53.3K 🔥` `NEW`
1. [内马尔美加墨世界杯首秀](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E7%BE%8E%E5%8A%A0%E5%A2%A8%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E7%A7%80%23) `30.3K 🔥` `NEW`
1. [这段话彻底杀死了我的精神内耗 (This passage completely destroyed my spirit.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E5%BD%BB%E5%BA%95%E6%9D%80%E6%AD%BB%E4%BA%86%E6%88%91%E7%9A%84%E7%B2%BE%E7%A5%9E%E5%86%85%E8%80%97%23) `30.3K 🔥` `NEW`
1. [张靓颖清唱被罚款冤不冤](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9D%93%E9%A2%96%E6%B8%85%E5%94%B1%E8%A2%AB%E7%BD%9A%E6%AC%BE%E5%86%A4%E4%B8%8D%E5%86%A4%23) `30.2K 🔥` `NEW`
1. [电梯急坠按下所有楼层按钮不科学](https://s.weibo.com/weibo?q=%23%E7%94%B5%E6%A2%AF%E6%80%A5%E5%9D%A0%E6%8C%89%E4%B8%8B%E6%89%80%E6%9C%89%E6%A5%BC%E5%B1%82%E6%8C%89%E9%92%AE%E4%B8%8D%E7%A7%91%E5%AD%A6%23) `30.2K 🔥` `NEW`
1. [15岁男孩吃外卖熬夜患糖尿病去世](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E7%94%B7%E5%AD%A9%E5%90%83%E5%A4%96%E5%8D%96%E7%86%AC%E5%A4%9C%E6%82%A3%E7%B3%96%E5%B0%BF%E7%97%85%E5%8E%BB%E4%B8%96%23) `30.2K 🔥` `NEW`
1. [C罗梅开二度 (Cristiano Ronaldo scores twice)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `538.3K 🔥` `-89%`
1. [你要知道我很少站老一辈这边的](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%A6%81%E7%9F%A5%E9%81%93%E6%88%91%E5%BE%88%E5%B0%91%E7%AB%99%E8%80%81%E4%B8%80%E8%BE%88%E8%BF%99%E8%BE%B9%E7%9A%84%23) `149.1K 🔥` `-48%`
1. [C罗siu起来了](https://s.weibo.com/weibo?q=%23C%E7%BD%97siu%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `144.5K 🔥` `-64%`
1. [C罗 不吃压力](https://s.weibo.com/weibo?q=%23C%E7%BD%97%20%E4%B8%8D%E5%90%83%E5%8E%8B%E5%8A%9B%23) `81.8K 🔥` `-69%`
1. [葡萄牙vs乌兹别克斯坦](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99vs%E4%B9%8C%E5%85%B9%E5%88%AB%E5%85%8B%E6%96%AF%E5%9D%A6%23) `76.9K 🔥` `-84%`
1. [C罗进球](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%BF%9B%E7%90%83%23) `74.2K 🔥` `-98%`
1. [C罗 法拉利老了还是法拉利](https://s.weibo.com/weibo?q=%23C%E7%BD%97%20%E6%B3%95%E6%8B%89%E5%88%A9%E8%80%81%E4%BA%86%E8%BF%98%E6%98%AF%E6%B3%95%E6%8B%89%E5%88%A9%23) `51.0K 🔥` `-57%`
1. [恋与深空的野心莫透支玩家信任 (Love and Deep Space’s Ambition Don’t Overdraw Players’ Trust)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E7%9A%84%E9%87%8E%E5%BF%83%E8%8E%AB%E9%80%8F%E6%94%AF%E7%8E%A9%E5%AE%B6%E4%BF%A1%E4%BB%BB%23) `46.2K 🔥` `-53%`
1. [突然意识到美术生好牛](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E7%BE%8E%E6%9C%AF%E7%94%9F%E5%A5%BD%E7%89%9B%23) `45.7K 🔥` `-56%`
1. [C罗连续六届世界杯进球](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%BF%9E%E7%BB%AD%E5%85%AD%E5%B1%8A%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BF%9B%E7%90%83%23) `41.2K 🔥` `-90%`
1. [葡萄牙任意球破门](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E4%BB%BB%E6%84%8F%E7%90%83%E7%A0%B4%E9%97%A8%23) `40.8K 🔥` `-78%`
1. [王俊凯首张专辑封面](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%A6%96%E5%BC%A0%E4%B8%93%E8%BE%91%E5%B0%81%E9%9D%A2%23) `37.2K 🔥` `-52%`
1. [C罗母亲无声抗议](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%AF%8D%E4%BA%B2%E6%97%A0%E5%A3%B0%E6%8A%97%E8%AE%AE%23) `36.9K 🔥` `-35%`
1. [敖尹剧情伏笔](https://s.weibo.com/weibo?q=%23%E6%95%96%E5%B0%B9%E5%89%A7%E6%83%85%E4%BC%8F%E7%AC%94%23) `36.0K 🔥` `-42%`
1. [马宁第3次执法来了 (Ma Ning comes to enforce the law for the third time)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E7%AC%AC3%E6%AC%A1%E6%89%A7%E6%B3%95%E6%9D%A5%E4%BA%86%23) `33.5K 🔥` `-61%`
1. [贝克汉姆儿子靠与父母不和赚百万美金](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E5%84%BF%E5%AD%90%E9%9D%A0%E4%B8%8E%E7%88%B6%E6%AF%8D%E4%B8%8D%E5%92%8C%E8%B5%9A%E7%99%BE%E4%B8%87%E7%BE%8E%E9%87%91%23) `32.8K 🔥` `-78%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `32.5K 🔥` `-43%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `30.4K 🔥` `-56%`
1. [葡萄牙首发 (Portugal starts)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E9%A6%96%E5%8F%91%23) `30.3K 🔥` `-64%`
1. [广德致1死2伤司机或3年以下刑期 (The driver who caused 1 death and 2 injuries in Guangde may be sentenced to less than 3 years in prison)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%BE%B7%E8%87%B41%E6%AD%BB2%E4%BC%A4%E5%8F%B8%E6%9C%BA%E6%88%963%E5%B9%B4%E4%BB%A5%E4%B8%8B%E5%88%91%E6%9C%9F%23) `30.3K 🔥` `-47%`
1. [刘国梁女儿惊讶爸爸曾经这么帅](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%A2%81%E5%A5%B3%E5%84%BF%E6%83%8A%E8%AE%B6%E7%88%B8%E7%88%B8%E6%9B%BE%E7%BB%8F%E8%BF%99%E4%B9%88%E5%B8%85%23) `30.3K 🔥` `-45%`
1. [乌兹别克斯坦进球被吹](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%B9%E5%88%AB%E5%85%8B%E6%96%AF%E5%9D%A6%E8%BF%9B%E7%90%83%E8%A2%AB%E5%90%B9%23) `30.3K 🔥` `-49%`
1. [慈母多败咪](https://s.weibo.com/weibo?q=%23%E6%85%88%E6%AF%8D%E5%A4%9A%E8%B4%A5%E5%92%AA%23) `30.3K 🔥` `-47%`
1. [医生回应15岁男孩糖尿病不幸去世](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%9415%E5%B2%81%E7%94%B7%E5%AD%A9%E7%B3%96%E5%B0%BF%E7%97%85%E4%B8%8D%E5%B9%B8%E5%8E%BB%E4%B8%96%23) `30.3K 🔥` `-45%`
1. [姆巴佩哈兰德将正面对决](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%93%88%E5%85%B0%E5%BE%B7%E5%B0%86%E6%AD%A3%E9%9D%A2%E5%AF%B9%E5%86%B3%23) `30.3K 🔥` `-45%`
1. [大疆Pocket4P开售秒没](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4P%E5%BC%80%E5%94%AE%E7%A7%92%E6%B2%A1%23) `30.3K 🔥` `-59%`
1. [女装退货率终于有救了 (The return rate of women’s clothing has finally been saved)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E9%80%80%E8%B4%A7%E7%8E%87%E7%BB%88%E4%BA%8E%E6%9C%89%E6%95%91%E4%BA%86%23) `30.3K 🔥` `-52%`
1. [广德车祸受伤3岁男童最新情况 (The latest situation of a 3-year-old boy injured in a car accident in Guangde)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%BE%B7%E8%BD%A6%E7%A5%B8%E5%8F%97%E4%BC%A43%E5%B2%81%E7%94%B7%E7%AB%A5%E6%9C%80%E6%96%B0%E6%83%85%E5%86%B5%23) `30.2K 🔥` `-65%`
1. [张海楼怎么可能杀张海侠 (How could Zhang Hailou kill Zhang Haixia?)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B5%B7%E6%A5%BC%E6%80%8E%E4%B9%88%E5%8F%AF%E8%83%BD%E6%9D%80%E5%BC%A0%E6%B5%B7%E4%BE%A0%23) `30.2K 🔥` `-51%`
1. [官方回应强制教师凌晨到校验菜](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E5%BC%BA%E5%88%B6%E6%95%99%E5%B8%88%E5%87%8C%E6%99%A8%E5%88%B0%E6%A0%A1%E9%AA%8C%E8%8F%9C%23) `30.2K 🔥` `-45%`
1. [杨幂杨紫白玉兰提名VCR](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8DVCR%23) `30.2K 🔥` `-48%`
1. [印度一天或热死3400人](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%80%E5%A4%A9%E6%88%96%E7%83%AD%E6%AD%BB3400%E4%BA%BA%23) `30.2K 🔥` `-47%`
1. [檀健次直播迟到39分钟 (Tan Jianci was 39 minutes late for the live broadcast)](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%9B%B4%E6%92%AD%E8%BF%9F%E5%88%B039%E5%88%86%E9%92%9F%23) `30.2K 🔥` `-61%`
1. [广德车祸男童母亲无截瘫症状](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%BE%B7%E8%BD%A6%E7%A5%B8%E7%94%B7%E7%AB%A5%E6%AF%8D%E4%BA%B2%E6%97%A0%E6%88%AA%E7%98%AB%E7%97%87%E7%8A%B6%23) `30.2K 🔥` `-45%`
1. [南部档案 三个结局](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%20%E4%B8%89%E4%B8%AA%E7%BB%93%E5%B1%80%23) `30.2K 🔥` `-59%`
1. [开屏广告没了](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%8F%E5%B9%BF%E5%91%8A%E6%B2%A1%E4%BA%86%23) `30.2K 🔥` `-45%`
1. [2025T1冠军皮肤](https://s.weibo.com/weibo?q=%232025T1%E5%86%A0%E5%86%9B%E7%9A%AE%E8%82%A4%23) `30.2K 🔥` `-45%`

Updated at 2026-06-24 04:35:23

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
