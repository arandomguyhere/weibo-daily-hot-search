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

1. [国际足联希望中国队能参与世界杯 (FIFA hopes the Chinese team can participate in the World Cup)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E5%B8%8C%E6%9C%9B%E4%B8%AD%E5%9B%BD%E9%98%9F%E8%83%BD%E5%8F%82%E4%B8%8E%E4%B8%96%E7%95%8C%E6%9D%AF%23) `1.5M 🔥` `NEW`
1. [天舟十号货运飞船发射任务全回顾](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%88%9F%E5%8D%81%E5%8F%B7%E8%B4%A7%E8%BF%90%E9%A3%9E%E8%88%B9%E5%8F%91%E5%B0%84%E4%BB%BB%E5%8A%A1%E5%85%A8%E5%9B%9E%E9%A1%BE%23) `1.3M 🔥` `NEW`
1. [上淘宝抢618直播红包0元付定](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B7%98%E5%AE%9D%E6%8A%A2618%E7%9B%B4%E6%92%AD%E7%BA%A2%E5%8C%850%E5%85%83%E4%BB%98%E5%AE%9A%23) `921.6K 🔥` `NEW`
1. [马化腾回应AI掉队](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%8C%96%E8%85%BE%E5%9B%9E%E5%BA%94AI%E6%8E%89%E9%98%9F%23) `610.8K 🔥` `NEW`
1. [小米四款新车曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%9B%9B%E6%AC%BE%E6%96%B0%E8%BD%A6%E6%9B%9D%E5%85%89%23) `488.8K 🔥` `NEW`
1. [张本智和说王楚钦实力高出一筹](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AE%9E%E5%8A%9B%E9%AB%98%E5%87%BA%E4%B8%80%E7%AD%B9%23) `485.7K 🔥` `NEW`
1. [刘炜珊退出国家队](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%82%9C%E7%8F%8A%E9%80%80%E5%87%BA%E5%9B%BD%E5%AE%B6%E9%98%9F%23) `477.0K 🔥` `NEW`
1. [何炅演唱会没通知何炅](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E6%BC%94%E5%94%B1%E4%BC%9A%E6%B2%A1%E9%80%9A%E7%9F%A5%E4%BD%95%E7%82%85%23) `472.8K 🔥` `NEW`
1. [金晨 眼泪把面膜冲没了](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%20%E7%9C%BC%E6%B3%AA%E6%8A%8A%E9%9D%A2%E8%86%9C%E5%86%B2%E6%B2%A1%E4%BA%86%23) `471.9K 🔥` `NEW`
1. [曝某古装剧组恶意炒cp](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90%E5%8F%A4%E8%A3%85%E5%89%A7%E7%BB%84%E6%81%B6%E6%84%8F%E7%82%92cp%23) `463.7K 🔥` `NEW`
1. [月薪1.6万放羊已有两对夫妻试岗 (With a monthly salary of 16,000 yuan, two couples have tried out for sheep herding.)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA1.6%E4%B8%87%E6%94%BE%E7%BE%8A%E5%B7%B2%E6%9C%89%E4%B8%A4%E5%AF%B9%E5%A4%AB%E5%A6%BB%E8%AF%95%E5%B2%97%23) `460.2K 🔥` `NEW`
1. [广东白蚁大爆发](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E7%99%BD%E8%9A%81%E5%A4%A7%E7%88%86%E5%8F%91%23) `368.7K 🔥` `NEW`
1. [又一艘邮轮疑似暴发疫情1人死亡](https://s.weibo.com/weibo?q=%23%E5%8F%88%E4%B8%80%E8%89%98%E9%82%AE%E8%BD%AE%E7%96%91%E4%BC%BC%E6%9A%B4%E5%8F%91%E7%96%AB%E6%83%851%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `368.1K 🔥` `NEW`
1. [虞书欣工作室出图](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%87%BA%E5%9B%BE%23) `362.7K 🔥` `NEW`
1. [中国人疯狂追求奶茶面包超进化](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%96%AF%E7%8B%82%E8%BF%BD%E6%B1%82%E5%A5%B6%E8%8C%B6%E9%9D%A2%E5%8C%85%E8%B6%85%E8%BF%9B%E5%8C%96%23) `338.5K 🔥` `NEW`
1. [67岁产女妈妈现已卧床](https://s.weibo.com/weibo?q=%2367%E5%B2%81%E4%BA%A7%E5%A5%B3%E5%A6%88%E5%A6%88%E7%8E%B0%E5%B7%B2%E5%8D%A7%E5%BA%8A%23) `223.5K 🔥` `NEW`
1. [檀健次车裂戏](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E8%BD%A6%E8%A3%82%E6%88%8F%23) `217.8K 🔥` `NEW`
1. [雨霖铃杨洋演技](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E9%9C%96%E9%93%83%E6%9D%A8%E6%B4%8B%E6%BC%94%E6%8A%80%23) `209.3K 🔥` `NEW`
1. [尼坤又瘦回来了](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%9D%A4%E5%8F%88%E7%98%A6%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `209.1K 🔥` `NEW`
1. [此人的气血强度恐怕在我之上](https://s.weibo.com/weibo?q=%23%E6%AD%A4%E4%BA%BA%E7%9A%84%E6%B0%94%E8%A1%80%E5%BC%BA%E5%BA%A6%E6%81%90%E6%80%95%E5%9C%A8%E6%88%91%E4%B9%8B%E4%B8%8A%23) `209.0K 🔥` `NEW`
1. [小米增程SUV车头logo曝光 (Xiaomi extended range SUV front logo exposed)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%A2%9E%E7%A8%8BSUV%E8%BD%A6%E5%A4%B4logo%E6%9B%9D%E5%85%89%23) `202.7K 🔥` `NEW`
1. [田曦薇告别低智商犯罪](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%91%8A%E5%88%AB%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%23) `198.9K 🔥` `NEW`
1. [网传刘宪华不来歌手2026了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%88%98%E5%AE%AA%E5%8D%8E%E4%B8%8D%E6%9D%A5%E6%AD%8C%E6%89%8B2026%E4%BA%86%23) `190.9K 🔥` `NEW`
1. [小米挖孔机盖案法院认定存夸大宣传](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%8C%96%E5%AD%94%E6%9C%BA%E7%9B%96%E6%A1%88%E6%B3%95%E9%99%A2%E8%AE%A4%E5%AE%9A%E5%AD%98%E5%A4%B8%E5%A4%A7%E5%AE%A3%E4%BC%A0%23) `183.2K 🔥` `NEW`
1. [严浩翔请工作人员喝咖啡](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%AF%B7%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%96%9D%E5%92%96%E5%95%A1%23) `177.2K 🔥` `NEW`
1. [六旬保洁离职手写千字辞职信](https://s.weibo.com/weibo?q=%23%E5%85%AD%E6%97%AC%E4%BF%9D%E6%B4%81%E7%A6%BB%E8%81%8C%E6%89%8B%E5%86%99%E5%8D%83%E5%AD%97%E8%BE%9E%E8%81%8C%E4%BF%A1%23) `173.8K 🔥` `NEW`
1. [苏新皓预告发新歌](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E9%A2%84%E5%91%8A%E5%8F%91%E6%96%B0%E6%AD%8C%23) `140.9K 🔥` `NEW`
1. [狼队挺进败者组半决赛](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E6%8C%BA%E8%BF%9B%E8%B4%A5%E8%80%85%E7%BB%84%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `139.2K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `138.2K 🔥` `NEW`
1. [宋祖儿凌晨四点起来吃零食](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E5%87%8C%E6%99%A8%E5%9B%9B%E7%82%B9%E8%B5%B7%E6%9D%A5%E5%90%83%E9%9B%B6%E9%A3%9F%23) `133.9K 🔥` `NEW`
1. [广厦男篮vs山西男篮 (Guangsha Men’s Basketball vs Shanxi Men’s Basketball)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%8E%A6%E7%94%B7%E7%AF%AEvs%E5%B1%B1%E8%A5%BF%E7%94%B7%E7%AF%AE%23) `127.2K 🔥` `NEW`
1. [拖米为清清发声](https://s.weibo.com/weibo?q=%23%E6%8B%96%E7%B1%B3%E4%B8%BA%E6%B8%85%E6%B8%85%E5%8F%91%E5%A3%B0%23) `120.4K 🔥` `NEW`
1. [日本爆发大规模反战抗议活动](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%88%86%E5%8F%91%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%8F%8D%E6%88%98%E6%8A%97%E8%AE%AE%E6%B4%BB%E5%8A%A8%23) `483.3K 🔥` `+71%`
1. [雨霖铃](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E9%9C%96%E9%93%83%23) `479.6K 🔥` `+28%`
1. [特朗普访问中国现场画面](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E9%97%AE%E4%B8%AD%E5%9B%BD%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `468.6K 🔥` `+67%`
1. [张元英雷霆平底鞋](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E9%9B%B7%E9%9C%86%E5%B9%B3%E5%BA%95%E9%9E%8B%23) `467.1K 🔥` `+67%`
1. [柳岩停更时间线](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B2%A9%E5%81%9C%E6%9B%B4%E6%97%B6%E9%97%B4%E7%BA%BF%23) `459.4K 🔥` `+66%`
1. [特朗普走出机舱](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%B5%B0%E5%87%BA%E6%9C%BA%E8%88%B1%23) `374.8K 🔥` `+35%`
1. [豆包 我不敢动饶雪漫这四个字](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%20%E6%88%91%E4%B8%8D%E6%95%A2%E5%8A%A8%E9%A5%B6%E9%9B%AA%E6%BC%AB%E8%BF%99%E5%9B%9B%E4%B8%AA%E5%AD%97%23) `367.8K 🔥` `+35%`
1. [低智商犯罪](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%23) `487.2K 🔥`
1. [天猫礼遇大使周翊然 (Tmall courtesy ambassador Zhou Yiran)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB%E7%A4%BC%E9%81%87%E5%A4%A7%E4%BD%BF%E5%91%A8%E7%BF%8A%E7%84%B6%23) `486.2K 🔥`
1. [自助餐没吃几口就饱的元凶 (The culprit of feeling full after just a few bites at the buffet)](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%8A%A9%E9%A4%90%E6%B2%A1%E5%90%83%E5%87%A0%E5%8F%A3%E5%B0%B1%E9%A5%B1%E7%9A%84%E5%85%83%E5%87%B6%23) `370.5K 🔥`
1. [于正回应白鹿争议 (Yu Zheng responds to the Bailu controversy)](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E7%99%BD%E9%B9%BF%E4%BA%89%E8%AE%AE%23) `319.3K 🔥`
1. [杨幂烫伤 演员和角色命运共振](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%83%AB%E4%BC%A4%20%E6%BC%94%E5%91%98%E5%92%8C%E8%A7%92%E8%89%B2%E5%91%BD%E8%BF%90%E5%85%B1%E6%8C%AF%23) `318.8K 🔥`
1. [宋雨琦bobo头造型](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6bobo%E5%A4%B4%E9%80%A0%E5%9E%8B%23) `208.9K 🔥`
1. [虞书欣直播](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9B%B4%E6%92%AD%23) `163.4K 🔥`
1. [特朗普抵京 (Trump arrives in Beijing)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%B5%E4%BA%AC%23) `7.2M 🔥` `-80%`
1. [欢迎特朗普访问中国](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E9%97%AE%E4%B8%AD%E5%9B%BD%23) `209.3K 🔥` `-24%`
1. [夏天了迪丽热巴还在穿毛衣](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A4%A9%E4%BA%86%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%98%E5%9C%A8%E7%A9%BF%E6%AF%9B%E8%A1%A3%23) `209.2K 🔥` `-23%`
1. [网传柳岩疑似怀孕](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%9F%B3%E5%B2%A9%E7%96%91%E4%BC%BC%E6%80%80%E5%AD%95%23) `208.9K 🔥` `-23%`
1. [A股存储芯片全线爆发](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E5%85%A8%E7%BA%BF%E7%88%86%E5%8F%91%23) `177.4K 🔥` `-37%`
1. [低智商犯罪热度破万](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%E7%83%AD%E5%BA%A6%E7%A0%B4%E4%B8%87%23) `125.0K 🔥` `-54%`

Updated at 2026-05-13 23:33:00

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
