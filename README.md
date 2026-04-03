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

1. [张雪专门去查肝 (Zhang Xue went specifically to have his liver checked)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E4%B8%93%E9%97%A8%E5%8E%BB%E6%9F%A5%E8%82%9D%23) `969.6K 🔥` `NEW`
1. [AG对战狼队](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98%E7%8B%BC%E9%98%9F%23) `969.1K 🔥` `NEW`
1. [乘风初舞台直播](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E5%88%9D%E8%88%9E%E5%8F%B0%E7%9B%B4%E6%92%AD%23) `969.1K 🔥` `NEW`
1. [未婚 妇科检查](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%A9%9A%20%E5%A6%87%E7%A7%91%E6%A3%80%E6%9F%A5%23) `253.0K 🔥` `NEW`
1. [凤梨这样削皮有点奢侈了吧](https://s.weibo.com/weibo?q=%23%E5%87%A4%E6%A2%A8%E8%BF%99%E6%A0%B7%E5%89%8A%E7%9A%AE%E6%9C%89%E7%82%B9%E5%A5%A2%E4%BE%88%E4%BA%86%E5%90%A7%23) `252.8K 🔥` `NEW`
1. [韩国遭围殴致死导演儿子目睹全程](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%81%AD%E5%9B%B4%E6%AE%B4%E8%87%B4%E6%AD%BB%E5%AF%BC%E6%BC%94%E5%84%BF%E5%AD%90%E7%9B%AE%E7%9D%B9%E5%85%A8%E7%A8%8B%23) `162.7K 🔥` `NEW`
1. [鞠婧祎优酷平台双破万一番女主](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E4%BC%98%E9%85%B7%E5%B9%B3%E5%8F%B0%E5%8F%8C%E7%A0%B4%E4%B8%87%E4%B8%80%E7%95%AA%E5%A5%B3%E4%B8%BB%23) `124.8K 🔥` `NEW`
1. [老校长回应徒步祭英烈被指没苦硬吃](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%A0%A1%E9%95%BF%E5%9B%9E%E5%BA%94%E5%BE%92%E6%AD%A5%E7%A5%AD%E8%8B%B1%E7%83%88%E8%A2%AB%E6%8C%87%E6%B2%A1%E8%8B%A6%E7%A1%AC%E5%90%83%23) `124.3K 🔥` `NEW`
1. [王橹杰画的咴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%94%BB%E7%9A%84%E5%92%B4%23) `124.1K 🔥` `NEW`
1. [17岁小伙体内藏了根十多年的缝衣针](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%B0%8F%E4%BC%99%E4%BD%93%E5%86%85%E8%97%8F%E4%BA%86%E6%A0%B9%E5%8D%81%E5%A4%9A%E5%B9%B4%E7%9A%84%E7%BC%9D%E8%A1%A3%E9%92%88%23) `122.8K 🔥` `NEW`
1. [优思益称无力售后 (Yousiyi says it is unable to provide after-sales service)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E7%A7%B0%E6%97%A0%E5%8A%9B%E5%94%AE%E5%90%8E%23) `113.8K 🔥` `NEW`
1. [朴志晟泡泡发长文](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%BF%97%E6%99%9F%E6%B3%A1%E6%B3%A1%E5%8F%91%E9%95%BF%E6%96%87%23) `111.9K 🔥` `NEW`
1. [周杰伦演唱会](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `110.0K 🔥` `NEW`
1. [KT战胜GEN](https://s.weibo.com/weibo?q=%23KT%E6%88%98%E8%83%9CGEN%23) `100.8K 🔥` `NEW`
1. [张凌赫因为帅被同学偷拍](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%A0%E4%B8%BA%E5%B8%85%E8%A2%AB%E5%90%8C%E5%AD%A6%E5%81%B7%E6%8B%8D%23) `97.6K 🔥` `NEW`
1. [一只一只往外拿狗炫耀](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8F%AA%E4%B8%80%E5%8F%AA%E5%BE%80%E5%A4%96%E6%8B%BF%E7%8B%97%E7%82%AB%E8%80%80%23) `93.1K 🔥` `NEW`
1. [女子称前夫离世遗产被其兄妹瓜分](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%89%8D%E5%A4%AB%E7%A6%BB%E4%B8%96%E9%81%97%E4%BA%A7%E8%A2%AB%E5%85%B6%E5%85%84%E5%A6%B9%E7%93%9C%E5%88%86%23) `92.2K 🔥` `NEW`
1. [心疼朴志晟](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E6%9C%B4%E5%BF%97%E6%99%9F%23) `92.0K 🔥` `NEW`
1. [司机让行5分钟获上千名学生打招呼](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E8%AE%A9%E8%A1%8C5%E5%88%86%E9%92%9F%E8%8E%B7%E4%B8%8A%E5%8D%83%E5%90%8D%E5%AD%A6%E7%94%9F%E6%89%93%E6%8B%9B%E5%91%BC%23) `85.8K 🔥` `NEW`
1. [中方表态以色列通过死刑法案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E8%A1%A8%E6%80%81%E4%BB%A5%E8%89%B2%E5%88%97%E9%80%9A%E8%BF%87%E6%AD%BB%E5%88%91%E6%B3%95%E6%A1%88%23) `85.6K 🔥` `NEW`
1. [孙俪演的时候也咯噔了一下 (Sun Li also had a slight thump when she acted.)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E6%BC%94%E7%9A%84%E6%97%B6%E5%80%99%E4%B9%9F%E5%92%AF%E5%99%94%E4%BA%86%E4%B8%80%E4%B8%8B%23) `81.7K 🔥` `NEW`
1. [工信部紧急提醒苹果用户](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BF%A1%E9%83%A8%E7%B4%A7%E6%80%A5%E6%8F%90%E9%86%92%E8%8B%B9%E6%9E%9C%E7%94%A8%E6%88%B7%23) `1.0M 🔥` `+175%`
1. [不知道你是谁但知道你为了谁 (I don’t know who you are but I know who you are for)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%9F%A5%E9%81%93%E4%BD%A0%E6%98%AF%E8%B0%81%E4%BD%86%E7%9F%A5%E9%81%93%E4%BD%A0%E4%B8%BA%E4%BA%86%E8%B0%81%23) `976.8K 🔥` `+29%`
1. [云初令全阵容发布](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%88%9D%E4%BB%A4%E5%85%A8%E9%98%B5%E5%AE%B9%E5%8F%91%E5%B8%83%23) `279.2K 🔥` `+64%`
1. [袁泉拍戏真做了胃镜](https://s.weibo.com/weibo?q=%23%E8%A2%81%E6%B3%89%E6%8B%8D%E6%88%8F%E7%9C%9F%E5%81%9A%E4%BA%86%E8%83%83%E9%95%9C%23) `269.0K 🔥` `+154%`
1. [王楚钦vsF勒布伦](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vsF%E5%8B%92%E5%B8%83%E4%BC%A6%23) `253.0K 🔥` `+111%`
1. [鸭嘴钳](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E5%98%B4%E9%92%B3%23) `226.8K 🔥` `+38%`
1. [莫氏鸡煲老板累趴全村动起来了](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E7%B4%AF%E8%B6%B4%E5%85%A8%E6%9D%91%E5%8A%A8%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `189.6K 🔥` `+29%`
1. [原来身份证不是全国统一的 (It turns out that ID cards are not uniform across the country.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BA%AB%E4%BB%BD%E8%AF%81%E4%B8%8D%E6%98%AF%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84%23) `169.2K 🔥`
1. [谢楠让谢娜回去主持](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%A5%A0%E8%AE%A9%E8%B0%A2%E5%A8%9C%E5%9B%9E%E5%8E%BB%E4%B8%BB%E6%8C%81%23) `134.4K 🔥`
1. [TF绝色之夜顶级名利场](https://s.weibo.com/weibo?q=%23TF%E7%BB%9D%E8%89%B2%E4%B9%8B%E5%A4%9C%E9%A1%B6%E7%BA%A7%E5%90%8D%E5%88%A9%E5%9C%BA%23) `132.3K 🔥`
1. [男子发私照让豆包测评身材被封号](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8F%91%E7%A7%81%E7%85%A7%E8%AE%A9%E8%B1%86%E5%8C%85%E6%B5%8B%E8%AF%84%E8%BA%AB%E6%9D%90%E8%A2%AB%E5%B0%81%E5%8F%B7%23) `129.4K 🔥`
1. [曝IU李钟硕分手 (IU and Lee Jong Suk break up revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9DIU%E6%9D%8E%E9%92%9F%E7%A1%95%E5%88%86%E6%89%8B%23) `128.7K 🔥`
1. [李马克解约退团 (Mark Li terminates contract and quits group)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A9%AC%E5%85%8B%E8%A7%A3%E7%BA%A6%E9%80%80%E5%9B%A2%23) `123.8K 🔥`
1. [董宇辉近30天掉粉超14万 (Dong Yuhui lost over 140,000 followers in the past 30 days)](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E8%BF%9130%E5%A4%A9%E6%8E%89%E7%B2%89%E8%B6%8514%E4%B8%87%23) `123.6K 🔥`
1. [时代少年团物料重新上传 (Times Youth League materials re-uploaded)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%89%A9%E6%96%99%E9%87%8D%E6%96%B0%E4%B8%8A%E4%BC%A0%23) `123.4K 🔥`
1. [迪丽热巴素人婚纱模特时期](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%B4%A0%E4%BA%BA%E5%A9%9A%E7%BA%B1%E6%A8%A1%E7%89%B9%E6%97%B6%E6%9C%9F%23) `123.0K 🔥`
1. [曝李马克签了李泳知公司](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E9%A9%AC%E5%85%8B%E7%AD%BE%E4%BA%86%E6%9D%8E%E6%B3%B3%E7%9F%A5%E5%85%AC%E5%8F%B8%23) `122.6K 🔥`
1. [时代峰峻高会声明 (Statement from Times Summit)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%AB%98%E4%BC%9A%E5%A3%B0%E6%98%8E%23) `98.0K 🔥`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `91.0K 🔥`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `90.8K 🔥`
1. [iPhone18Pro深红配色](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%B7%B1%E7%BA%A2%E9%85%8D%E8%89%B2%23) `85.0K 🔥`
1. [马兴瑞被查 (Ma Xingrui was investigated)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%B4%E7%91%9E%E8%A2%AB%E6%9F%A5%23) `1.2M 🔥` `-49%`
1. [优思益发布海外工厂情况声明 (Unisei releases statement on overseas factory conditions)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E5%8F%91%E5%B8%83%E6%B5%B7%E5%A4%96%E5%B7%A5%E5%8E%82%E6%83%85%E5%86%B5%E5%A3%B0%E6%98%8E%23) `288.9K 🔥` `-72%`
1. [红果全面下架桃花簪](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E5%85%A8%E9%9D%A2%E4%B8%8B%E6%9E%B6%E6%A1%83%E8%8A%B1%E7%B0%AA%23) `165.1K 🔥` `-37%`
1. [女子把XXXXL号搁浅皇带鱼推回大海](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8A%8AXXXXL%E5%8F%B7%E6%90%81%E6%B5%85%E7%9A%87%E5%B8%A6%E9%B1%BC%E6%8E%A8%E5%9B%9E%E5%A4%A7%E6%B5%B7%23) `145.0K 🔥` `-42%`
1. [云初令](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%88%9D%E4%BB%A4%23) `122.4K 🔥` `-53%`
1. [方博回应国家队大门敞开](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%8D%9A%E5%9B%9E%E5%BA%94%E5%9B%BD%E5%AE%B6%E9%98%9F%E5%A4%A7%E9%97%A8%E6%95%9E%E5%BC%80%23) `91.7K 🔥` `-31%`
1. [生娃后奶粉要AA女子后悔闪婚 (Woman who asked for AA milk powder after giving birth regrets flash marriage)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%A8%83%E5%90%8E%E5%A5%B6%E7%B2%89%E8%A6%81AA%E5%A5%B3%E5%AD%90%E5%90%8E%E6%82%94%E9%97%AA%E5%A9%9A%23) `88.7K 🔥` `-24%`
1. [虞书欣云初令海报](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BA%91%E5%88%9D%E4%BB%A4%E6%B5%B7%E6%8A%A5%23) `87.3K 🔥` `-26%`

Updated at 2026-04-03 19:48:35

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
