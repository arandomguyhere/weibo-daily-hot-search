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

1. [爱奇艺再回应AI艺人库 (iQiyi responds to AI artist library again)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E5%86%8D%E5%9B%9E%E5%BA%94AI%E8%89%BA%E4%BA%BA%E5%BA%93%23) `1.3M 🔥` `NEW`
1. [苹果新任CEO特努斯是谁](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%96%B0%E4%BB%BBCEO%E7%89%B9%E5%8A%AA%E6%96%AF%E6%98%AF%E8%B0%81%23) `861.2K 🔥` `NEW`
1. [第13批在韩志愿军烈士遗骸归国](https://s.weibo.com/weibo?q=%23%E7%AC%AC13%E6%89%B9%E5%9C%A8%E9%9F%A9%E5%BF%97%E6%84%BF%E5%86%9B%E7%83%88%E5%A3%AB%E9%81%97%E9%AA%B8%E5%BD%92%E5%9B%BD%23) `750.4K 🔥` `NEW`
1. [上京东买OPPO演唱会神器抽门票](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%AC%E4%B8%9C%E4%B9%B0OPPO%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%9E%E5%99%A8%E6%8A%BD%E9%97%A8%E7%A5%A8%23) `735.9K 🔥` `NEW`
1. [日本正式允许出口杀伤性武器](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%AD%A3%E5%BC%8F%E5%85%81%E8%AE%B8%E5%87%BA%E5%8F%A3%E6%9D%80%E4%BC%A4%E6%80%A7%E6%AD%A6%E5%99%A8%23) `717.3K 🔥` `NEW`
1. [日本曾给灾民送千纸鹤](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%9B%BE%E7%BB%99%E7%81%BE%E6%B0%91%E9%80%81%E5%8D%83%E7%BA%B8%E9%B9%A4%23) `585.2K 🔥` `NEW`
1. [谁管管虞书欣的剧宣idea](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%AE%A1%E7%AE%A1%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9A%84%E5%89%A7%E5%AE%A3idea%23) `547.3K 🔥` `NEW`
1. [高市早苗向靖国神社供奉祭品](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%90%91%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%E4%BE%9B%E5%A5%89%E7%A5%AD%E5%93%81%23) `546.4K 🔥` `NEW`
1. [女子虐死男友3岁儿子被判死缓](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%99%90%E6%AD%BB%E7%94%B7%E5%8F%8B3%E5%B2%81%E5%84%BF%E5%AD%90%E8%A2%AB%E5%88%A4%E6%AD%BB%E7%BC%93%23) `485.5K 🔥` `NEW`
1. [丁俊晖赵心童回应对决](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96%E8%B5%B5%E5%BF%83%E7%AB%A5%E5%9B%9E%E5%BA%94%E5%AF%B9%E5%86%B3%23) `474.3K 🔥` `NEW`
1. [爱奇艺 观众要看真人 (iQiyi viewers want to see real people)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%20%E8%A7%82%E4%BC%97%E8%A6%81%E7%9C%8B%E7%9C%9F%E4%BA%BA%23) `429.5K 🔥` `NEW`
1. [列车上得知儿子离世大叔孙女未成年](https://s.weibo.com/weibo?q=%23%E5%88%97%E8%BD%A6%E4%B8%8A%E5%BE%97%E7%9F%A5%E5%84%BF%E5%AD%90%E7%A6%BB%E4%B8%96%E5%A4%A7%E5%8F%94%E5%AD%99%E5%A5%B3%E6%9C%AA%E6%88%90%E5%B9%B4%23) `422.6K 🔥` `NEW`
1. [Liz不归还赞助的裤子引发争议](https://s.weibo.com/weibo?q=%23Liz%E4%B8%8D%E5%BD%92%E8%BF%98%E8%B5%9E%E5%8A%A9%E7%9A%84%E8%A3%A4%E5%AD%90%E5%BC%95%E5%8F%91%E4%BA%89%E8%AE%AE%23) `380.4K 🔥` `NEW`
1. [宋旻浩出庭](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%97%BB%E6%B5%A9%E5%87%BA%E5%BA%AD%23) `377.6K 🔥` `NEW`
1. [折叠iPhone手机壳曝光](https://s.weibo.com/weibo?q=%23%E6%8A%98%E5%8F%A0iPhone%E6%89%8B%E6%9C%BA%E5%A3%B3%E6%9B%9D%E5%85%89%23) `371.9K 🔥` `NEW`
1. [曝某艺人需要助理穿袜子](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90%E8%89%BA%E4%BA%BA%E9%9C%80%E8%A6%81%E5%8A%A9%E7%90%86%E7%A9%BF%E8%A2%9C%E5%AD%90%23) `370.5K 🔥` `NEW`
1. [谷爱凌劳伦斯红毯造型](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%8A%B3%E4%BC%A6%E6%96%AF%E7%BA%A2%E6%AF%AF%E9%80%A0%E5%9E%8B%23) `365.1K 🔥` `NEW`
1. [不尊重观众](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%B0%8A%E9%87%8D%E8%A7%82%E4%BC%97%23) `364.7K 🔥` `NEW`
1. [李小冉哭了两晚上](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%93%AD%E4%BA%86%E4%B8%A4%E6%99%9A%E4%B8%8A%23) `364.6K 🔥` `NEW`
1. [骑士2比0猛龙](https://s.weibo.com/weibo?q=%23%E9%AA%91%E5%A3%AB2%E6%AF%940%E7%8C%9B%E9%BE%99%23) `364.6K 🔥` `NEW`
1. [国乒世乒赛出征特别节目 (Special program for National Table Tennis Championships and World Table Tennis Championships)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E4%B8%96%E4%B9%92%E8%B5%9B%E5%87%BA%E5%BE%81%E7%89%B9%E5%88%AB%E8%8A%82%E7%9B%AE%23) `364.6K 🔥` `NEW`
1. [李雨桐疑似回应被行拘](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%A8%E6%A1%90%E7%96%91%E4%BC%BC%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `364.6K 🔥` `NEW`
1. [平台回应女孩公款打赏主播上千万](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%A9%E5%85%AC%E6%AC%BE%E6%89%93%E8%B5%8F%E4%B8%BB%E6%92%AD%E4%B8%8A%E5%8D%83%E4%B8%87%23) `364.6K 🔥` `NEW`
1. [文班亚马最佳防守球员](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E6%9C%80%E4%BD%B3%E9%98%B2%E5%AE%88%E7%90%83%E5%91%98%23) `345.6K 🔥` `NEW`
1. [林子烨评论区](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%E8%AF%84%E8%AE%BA%E5%8C%BA%23) `339.5K 🔥` `NEW`
1. [近70款车集体降价](https://s.weibo.com/weibo?q=%23%E8%BF%9170%E6%AC%BE%E8%BD%A6%E9%9B%86%E4%BD%93%E9%99%8D%E4%BB%B7%23) `310.8K 🔥` `NEW`
1. [黑夜告白定档](https://s.weibo.com/weibo?q=%23%E9%BB%91%E5%A4%9C%E5%91%8A%E7%99%BD%E5%AE%9A%E6%A1%A3%23) `307.0K 🔥` `NEW`
1. [田曦薇给胡一天擦头发镜头](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%BB%99%E8%83%A1%E4%B8%80%E5%A4%A9%E6%93%A6%E5%A4%B4%E5%8F%91%E9%95%9C%E5%A4%B4%23) `231.4K 🔥` `NEW`
1. [蔡康永采访小S](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%E9%87%87%E8%AE%BF%E5%B0%8FS%23) `200.7K 🔥` `NEW`
1. [人的心情是可以突然变好的](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%9A%84%E5%BF%83%E6%83%85%E6%98%AF%E5%8F%AF%E4%BB%A5%E7%AA%81%E7%84%B6%E5%8F%98%E5%A5%BD%E7%9A%84%23) `186.4K 🔥` `NEW`
1. [宋旻浩承认服役缺勤 (Song Minho admits to being absent from duty)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%97%BB%E6%B5%A9%E6%89%BF%E8%AE%A4%E6%9C%8D%E5%BD%B9%E7%BC%BA%E5%8B%A4%23) `172.7K 🔥` `NEW`
1. [喝水后的这些表现是肾病信号](https://s.weibo.com/weibo?q=%23%E5%96%9D%E6%B0%B4%E5%90%8E%E7%9A%84%E8%BF%99%E4%BA%9B%E8%A1%A8%E7%8E%B0%E6%98%AF%E8%82%BE%E7%97%85%E4%BF%A1%E5%8F%B7%23) `160.6K 🔥` `NEW`
1. [警方通报民宿有多个针孔摄像头](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E6%B0%91%E5%AE%BF%E6%9C%89%E5%A4%9A%E4%B8%AA%E9%92%88%E5%AD%94%E6%91%84%E5%83%8F%E5%A4%B4%23) `156.0K 🔥` `NEW`
1. [日本此前预测50年内大地震概率为九成](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%AD%A4%E5%89%8D%E9%A2%84%E6%B5%8B50%E5%B9%B4%E5%86%85%E5%A4%A7%E5%9C%B0%E9%9C%87%E6%A6%82%E7%8E%87%E4%B8%BA%E4%B9%9D%E6%88%90%23) `155.9K 🔥` `NEW`
1. [谷爱凌德约科维奇主持秀中文](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%BE%B7%E7%BA%A6%E7%A7%91%E7%BB%B4%E5%A5%87%E4%B8%BB%E6%8C%81%E7%A7%80%E4%B8%AD%E6%96%87%23) `150.4K 🔥` `NEW`
1. [黑夜告白](https://s.weibo.com/weibo?q=%23%E9%BB%91%E5%A4%9C%E5%91%8A%E7%99%BD%23) `150.1K 🔥` `NEW`
1. [森马可真有一套 (Semir really has a way)](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E9%A9%AC%E5%8F%AF%E7%9C%9F%E6%9C%89%E4%B8%80%E5%A5%97%23) `565.9K 🔥` `+123%`
1. [鹿晗工作室](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `445.5K 🔥` `+104%`
1. [李小冉说我50了根本记不住](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E8%AF%B4%E6%88%9150%E4%BA%86%E6%A0%B9%E6%9C%AC%E8%AE%B0%E4%B8%8D%E4%BD%8F%23) `399.7K 🔥` `+83%`
1. [五一航班大面积取消](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E8%88%AA%E7%8F%AD%E5%A4%A7%E9%9D%A2%E7%A7%AF%E5%8F%96%E6%B6%88%23) `381.7K 🔥` `+75%`
1. [爱奇艺股价从46美元跌到1.4美元 (iQIYI stock price fell from US$46 to US$1.4)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E8%82%A1%E4%BB%B7%E4%BB%8E46%E7%BE%8E%E5%85%83%E8%B7%8C%E5%88%B01.4%E7%BE%8E%E5%85%83%23) `376.4K 🔥` `+72%`
1. [娃坐了6年电瓶车还不知回家的路](https://s.weibo.com/weibo?q=%23%E5%A8%83%E5%9D%90%E4%BA%866%E5%B9%B4%E7%94%B5%E7%93%B6%E8%BD%A6%E8%BF%98%E4%B8%8D%E7%9F%A5%E5%9B%9E%E5%AE%B6%E7%9A%84%E8%B7%AF%23) `374.9K 🔥` `+72%`
1. [郭富城买了让女友痛哭流涕的礼物 (Aaron Kwok bought a gift that made his girlfriend cry)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E4%B9%B0%E4%BA%86%E8%AE%A9%E5%A5%B3%E5%8F%8B%E7%97%9B%E5%93%AD%E6%B5%81%E6%B6%95%E7%9A%84%E7%A4%BC%E7%89%A9%23) `342.3K 🔥` `+57%`
1. [让近视眼更舒服的六个习惯 (Six habits to make myopia more comfortable)](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E8%BF%91%E8%A7%86%E7%9C%BC%E6%9B%B4%E8%88%92%E6%9C%8D%E7%9A%84%E5%85%AD%E4%B8%AA%E4%B9%A0%E6%83%AF%23) `336.6K 🔥` `+55%`
1. [东莞一男子把唇上肿瘤当痘痘挤了8年 (A man in Dongguan has been squeezing a tumor on his lip as a pimple for 8 years)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%8E%9E%E4%B8%80%E7%94%B7%E5%AD%90%E6%8A%8A%E5%94%87%E4%B8%8A%E8%82%BF%E7%98%A4%E5%BD%93%E7%97%98%E7%97%98%E6%8C%A4%E4%BA%868%E5%B9%B4%23) `202.2K 🔥` `+55%`
1. [19岁女孩挪用1700万当榜一大姐](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%8C%AA%E7%94%A81700%E4%B8%87%E5%BD%93%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%A7%90%23) `694.1K 🔥`
1. [伊朗专挑周末打脸美国 (Iran chooses weekends to slap the United States in the face)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%93%E6%8C%91%E5%91%A8%E6%9C%AB%E6%89%93%E8%84%B8%E7%BE%8E%E5%9B%BD%23) `147.5K 🔥`
1. [日本7.7级地震 (Japan magnitude 7.7 earthquake)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.7%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `245.3K 🔥` `-76%`
1. [原来这些都是无意识的控糖行为](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%BA%9B%E9%83%BD%E6%98%AF%E6%97%A0%E6%84%8F%E8%AF%86%E7%9A%84%E6%8E%A7%E7%B3%96%E8%A1%8C%E4%B8%BA%23) `148.5K 🔥` `-32%`
1. [库克不再担任苹果CEO (Cook no longer serves as Apple CEO)](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%85%8B%E4%B8%8D%E5%86%8D%E6%8B%85%E4%BB%BB%E8%8B%B9%E6%9E%9CCEO%23) `133.4K 🔥` `-94%`
1. [2026机器人半马](https://s.weibo.com/weibo?q=%232026%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8D%8A%E9%A9%AC%23) `131.2K 🔥` `-40%`

Updated at 2026-04-21 10:36:50

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
