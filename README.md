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

1. [天坛的文化与建筑之美 (The cultural and architectural beauty of the Temple of Heaven)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%9D%9B%E7%9A%84%E6%96%87%E5%8C%96%E4%B8%8E%E5%BB%BA%E7%AD%91%E4%B9%8B%E7%BE%8E%23) `1.0M 🔥` `NEW`
1. [建议喜欢熬夜的反复观看](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%96%9C%E6%AC%A2%E7%86%AC%E5%A4%9C%E7%9A%84%E5%8F%8D%E5%A4%8D%E8%A7%82%E7%9C%8B%23) `976.7K 🔥` `NEW`
1. [中国化妆师的工作视频在外网火了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8C%96%E5%A6%86%E5%B8%88%E7%9A%84%E5%B7%A5%E4%BD%9C%E8%A7%86%E9%A2%91%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86%23) `805.3K 🔥` `NEW`
1. [中国国际大学生时装周](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9B%BD%E9%99%85%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%97%B6%E8%A3%85%E5%91%A8%23) `792.7K 🔥` `NEW`
1. [iPhone一年一换比三年一换更省钱](https://s.weibo.com/weibo?q=%23iPhone%E4%B8%80%E5%B9%B4%E4%B8%80%E6%8D%A2%E6%AF%94%E4%B8%89%E5%B9%B4%E4%B8%80%E6%8D%A2%E6%9B%B4%E7%9C%81%E9%92%B1%23) `665.9K 🔥` `NEW`
1. [原来是过敏啊还以为脂肪在燃烧](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%AF%E8%BF%87%E6%95%8F%E5%95%8A%E8%BF%98%E4%BB%A5%E4%B8%BA%E8%84%82%E8%82%AA%E5%9C%A8%E7%87%83%E7%83%A7%23) `612.3K 🔥` `NEW`
1. [曝歌手2026首场9进7](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%AD%8C%E6%89%8B2026%E9%A6%96%E5%9C%BA9%E8%BF%9B7%23) `575.2K 🔥` `NEW`
1. [白玉兰](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `518.4K 🔥` `NEW`
1. [迪丽热巴冰淇淋掉衣服上](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%86%B0%E6%B7%87%E6%B7%8B%E6%8E%89%E8%A1%A3%E6%9C%8D%E4%B8%8A%23) `495.4K 🔥` `NEW`
1. [清华大学1名博士被退学](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A4%A7%E5%AD%A61%E5%90%8D%E5%8D%9A%E5%A3%AB%E8%A2%AB%E9%80%80%E5%AD%A6%23) `486.5K 🔥` `NEW`
1. [内娱歌手集体发文感谢洪涛 (Domestic entertainment singers collectively posted a message thanking Hong Tao)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%AD%8C%E6%89%8B%E9%9B%86%E4%BD%93%E5%8F%91%E6%96%87%E6%84%9F%E8%B0%A2%E6%B4%AA%E6%B6%9B%23) `482.6K 🔥` `NEW`
1. [女生误解医生把饭吃干净点一周胖5斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%AF%AF%E8%A7%A3%E5%8C%BB%E7%94%9F%E6%8A%8A%E9%A5%AD%E5%90%83%E5%B9%B2%E5%87%80%E7%82%B9%E4%B8%80%E5%91%A8%E8%83%965%E6%96%A4%23) `420.9K 🔥` `NEW`
1. [歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%23) `419.6K 🔥` `NEW`
1. [毛巾家族](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E5%B7%BE%E5%AE%B6%E6%97%8F%23) `413.0K 🔥` `NEW`
1. [金鹰奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%23) `409.9K 🔥` `NEW`
1. [黄仁勋库克发声](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%BA%93%E5%85%8B%E5%8F%91%E5%A3%B0%23) `337.8K 🔥` `NEW`
1. [宝莲舞美](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E8%8E%B2%E8%88%9E%E7%BE%8E%23) `257.3K 🔥` `NEW`
1. [国际足联回应央视世界杯版权费](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E5%9B%9E%E5%BA%94%E5%A4%AE%E8%A7%86%E4%B8%96%E7%95%8C%E6%9D%AF%E7%89%88%E6%9D%83%E8%B4%B9%23) `230.5K 🔥` `NEW`
1. [广州暴雨5名小哥狂奔救起摔倒小孩](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E6%9A%B4%E9%9B%A85%E5%90%8D%E5%B0%8F%E5%93%A5%E7%8B%82%E5%A5%94%E6%95%91%E8%B5%B7%E6%91%94%E5%80%92%E5%B0%8F%E5%AD%A9%23) `197.5K 🔥` `NEW`
1. [周涛回应不上春晚](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B6%9B%E5%9B%9E%E5%BA%94%E4%B8%8D%E4%B8%8A%E6%98%A5%E6%99%9A%23) `193.0K 🔥` `NEW`
1. [日本送给普京的秋田犬去世 (Akita dog given to Putin by Japan dies)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%80%81%E7%BB%99%E6%99%AE%E4%BA%AC%E7%9A%84%E7%A7%8B%E7%94%B0%E7%8A%AC%E5%8E%BB%E4%B8%96%23) `185.1K 🔥` `NEW`
1. [鹿晗剃头出现人传人现象](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%89%83%E5%A4%B4%E5%87%BA%E7%8E%B0%E4%BA%BA%E4%BC%A0%E4%BA%BA%E7%8E%B0%E8%B1%A1%23) `185.0K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `175.2K 🔥` `NEW`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `165.9K 🔥` `NEW`
1. [世界杯转播权降价原因](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%E9%99%8D%E4%BB%B7%E5%8E%9F%E5%9B%A0%23) `163.9K 🔥` `NEW`
1. [白鹿丞磊跑男合体](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%9E%E7%A3%8A%E8%B7%91%E7%94%B7%E5%90%88%E4%BD%93%23) `153.9K 🔥` `NEW`
1. [Uzi爆料英雄联盟怀旧服](https://s.weibo.com/weibo?q=%23Uzi%E7%88%86%E6%96%99%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%E6%80%80%E6%97%A7%E6%9C%8D%23) `151.1K 🔥` `NEW`
1. [2026白玉兰奖宣传片有杨紫](https://s.weibo.com/weibo?q=%232026%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%E5%AE%A3%E4%BC%A0%E7%89%87%E6%9C%89%E6%9D%A8%E7%B4%AB%23) `134.3K 🔥` `NEW`
1. [金鹰奖宣传片](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E5%AE%A3%E4%BC%A0%E7%89%87%23) `132.3K 🔥` `NEW`
1. [王橹杰黑白变装](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%BB%91%E7%99%BD%E5%8F%98%E8%A3%85%23) `132.2K 🔥` `NEW`
1. [央视感谢全国网友支持 (CCTV thanks netizens nationwide for their support)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%84%9F%E8%B0%A2%E5%85%A8%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%94%AF%E6%8C%81%23) `1.5M 🔥` `+204%`
1. [特朗普说能待得惯可能都不想走了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E8%83%BD%E5%BE%85%E5%BE%97%E6%83%AF%E5%8F%AF%E8%83%BD%E9%83%BD%E4%B8%8D%E6%83%B3%E8%B5%B0%E4%BA%86%23) `924.0K 🔥` `+105%`
1. [蒋毅老婆发文喊话蒋毅赵樱子](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AF%85%E8%80%81%E5%A9%86%E5%8F%91%E6%96%87%E5%96%8A%E8%AF%9D%E8%92%8B%E6%AF%85%E8%B5%B5%E6%A8%B1%E5%AD%90%23) `420.3K 🔥` `+26%`
1. [方媛没见过年轻的郭富城](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E6%B2%A1%E8%A7%81%E8%BF%87%E5%B9%B4%E8%BD%BB%E7%9A%84%E9%83%AD%E5%AF%8C%E5%9F%8E%23) `373.0K 🔥` `+71%`
1. [TF四代coverTXT](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3coverTXT%23) `204.0K 🔥` `+62%`
1. [温岚 败血症](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B2%9A%20%E8%B4%A5%E8%A1%80%E7%97%87%23) `504.7K 🔥`
1. [孙颖莎正装](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%AD%A3%E8%A3%85%23) `499.8K 🔥`
1. [横店的剧组快灭亡了](https://s.weibo.com/weibo?q=%23%E6%A8%AA%E5%BA%97%E7%9A%84%E5%89%A7%E7%BB%84%E5%BF%AB%E7%81%AD%E4%BA%A1%E4%BA%86%23) `490.0K 🔥`
1. [一只熊吃掉了40磅冰淇淋后昏迷了两天 (Bear comatose for two days after eating 40 pounds of ice cream)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8F%AA%E7%86%8A%E5%90%83%E6%8E%89%E4%BA%8640%E7%A3%85%E5%86%B0%E6%B7%87%E6%B7%8B%E5%90%8E%E6%98%8F%E8%BF%B7%E4%BA%86%E4%B8%A4%E5%A4%A9%23) `431.6K 🔥`
1. [中方回应特朗普社媒言论](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E7%A4%BE%E5%AA%92%E8%A8%80%E8%AE%BA%23) `184.2K 🔥`
1. [央视已获世界杯转播权 (CCTV has won the rights to broadcast the World Cup)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E5%B7%B2%E8%8E%B7%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `1.3M 🔥` `-90%`
1. [王力宏腾势汽车品牌全球代言人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E8%85%BE%E5%8A%BF%E6%B1%BD%E8%BD%A6%E5%93%81%E7%89%8C%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `1.0M 🔥` `-33%`
1. [央视6000万美元拿下世界杯版权 (CCTV acquires World Cup rights for US$60 million)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%866000%E4%B8%87%E7%BE%8E%E5%85%83%E6%8B%BF%E4%B8%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E7%89%88%E6%9D%83%23) `514.9K 🔥` `-87%`
1. [鹿晗这就是京圈佛子吗](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%BF%99%E5%B0%B1%E6%98%AF%E4%BA%AC%E5%9C%88%E4%BD%9B%E5%AD%90%E5%90%97%23) `510.5K 🔥` `-63%`
1. [特朗普结束访华 (Trump ends visit to China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%BB%93%E6%9D%9F%E8%AE%BF%E5%8D%8E%23) `425.1K 🔥` `-56%`
1. [央视一次拿下4届世界杯转播权](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E4%B8%80%E6%AC%A1%E6%8B%BF%E4%B8%8B4%E5%B1%8A%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `328.6K 🔥` `-61%`
1. [阿雅视频抄袭 (Aya video plagiarism)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%9B%85%E8%A7%86%E9%A2%91%E6%8A%84%E8%A2%AD%23) `310.8K 🔥` `-29%`
1. [李小冉回应母校玩梗](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%9B%9E%E5%BA%94%E6%AF%8D%E6%A0%A1%E7%8E%A9%E6%A2%97%23) `226.1K 🔥` `-54%`
1. [阿雅回应视频抄袭](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%9B%85%E5%9B%9E%E5%BA%94%E8%A7%86%E9%A2%91%E6%8A%84%E8%A2%AD%23) `194.1K 🔥` `-42%`
1. [白宫发布中国仪仗队画面](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E5%8F%91%E5%B8%83%E4%B8%AD%E5%9B%BD%E4%BB%AA%E4%BB%97%E9%98%9F%E7%94%BB%E9%9D%A2%23) `174.6K 🔥` `-59%`
1. [曝杨幂杨紫白玉兰二选一提名](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%A8%E5%B9%82%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E4%BA%8C%E9%80%89%E4%B8%80%E6%8F%90%E5%90%8D%23) `172.5K 🔥` `-50%`
1. [特朗普离京现场的中国军人](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A6%BB%E4%BA%AC%E7%8E%B0%E5%9C%BA%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%86%9B%E4%BA%BA%23) `132.2K 🔥` `-58%`

Updated at 2026-05-15 21:01:15

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
