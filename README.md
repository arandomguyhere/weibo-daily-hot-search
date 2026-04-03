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

1. [马兴瑞被查 (Ma Xingrui was investigated)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%B4%E7%91%9E%E8%A2%AB%E6%9F%A5%23) `2.3M 🔥` `NEW`
1. [工信部紧急提醒苹果用户](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BF%A1%E9%83%A8%E7%B4%A7%E6%80%A5%E6%8F%90%E9%86%92%E8%8B%B9%E6%9E%9C%E7%94%A8%E6%88%B7%23) `378.5K 🔥` `NEW`
1. [云初令](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%88%9D%E4%BB%A4%23) `257.8K 🔥` `NEW`
1. [云初令全阵容发布](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%88%9D%E4%BB%A4%E5%85%A8%E9%98%B5%E5%AE%B9%E5%8F%91%E5%B8%83%23) `170.8K 🔥` `NEW`
1. [姆巴佩说梅西强的可怕](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%AF%B4%E6%A2%85%E8%A5%BF%E5%BC%BA%E7%9A%84%E5%8F%AF%E6%80%95%23) `167.7K 🔥` `NEW`
1. [鸭嘴钳](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E5%98%B4%E9%92%B3%23) `164.5K 🔥` `NEW`
1. [莫氏鸡煲老板累趴全村动起来了](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E7%B4%AF%E8%B6%B4%E5%85%A8%E6%9D%91%E5%8A%A8%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `147.1K 🔥` `NEW`
1. [谢楠让谢娜回去主持](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%A5%A0%E8%AE%A9%E8%B0%A2%E5%A8%9C%E5%9B%9E%E5%8E%BB%E4%B8%BB%E6%8C%81%23) `145.6K 🔥` `NEW`
1. [TF绝色之夜顶级名利场](https://s.weibo.com/weibo?q=%23TF%E7%BB%9D%E8%89%B2%E4%B9%8B%E5%A4%9C%E9%A1%B6%E7%BA%A7%E5%90%8D%E5%88%A9%E5%9C%BA%23) `120.9K 🔥` `NEW`
1. [曝IU李钟硕分手](https://s.weibo.com/weibo?q=%23%E6%9B%9DIU%E6%9D%8E%E9%92%9F%E7%A1%95%E5%88%86%E6%89%8B%23) `120.9K 🔥` `NEW`
1. [时代少年团物料重新上传 (Times Youth League materials re-uploaded)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%89%A9%E6%96%99%E9%87%8D%E6%96%B0%E4%B8%8A%E4%BC%A0%23) `120.4K 🔥` `NEW`
1. [王楚钦vsF勒布伦](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vsF%E5%8B%92%E5%B8%83%E4%BC%A6%23) `120.1K 🔥` `NEW`
1. [男子发私照让豆包测评身材被封号](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8F%91%E7%A7%81%E7%85%A7%E8%AE%A9%E8%B1%86%E5%8C%85%E6%B5%8B%E8%AF%84%E8%BA%AB%E6%9D%90%E8%A2%AB%E5%B0%81%E5%8F%B7%23) `119.5K 🔥` `NEW`
1. [虞书欣云初令海报](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BA%91%E5%88%9D%E4%BB%A4%E6%B5%B7%E6%8A%A5%23) `118.7K 🔥` `NEW`
1. [TOP崔胜铉新专辑](https://s.weibo.com/weibo?q=%23TOP%E5%B4%94%E8%83%9C%E9%93%89%E6%96%B0%E4%B8%93%E8%BE%91%23) `117.7K 🔥` `NEW`
1. [生娃后奶粉要AA女子后悔闪婚](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%A8%83%E5%90%8E%E5%A5%B6%E7%B2%89%E8%A6%81AA%E5%A5%B3%E5%AD%90%E5%90%8E%E6%82%94%E9%97%AA%E5%A9%9A%23) `116.5K 🔥` `NEW`
1. [3岁女儿确诊孤独症父亲关掉公司陪伴](https://s.weibo.com/weibo?q=%233%E5%B2%81%E5%A5%B3%E5%84%BF%E7%A1%AE%E8%AF%8A%E5%AD%A4%E7%8B%AC%E7%97%87%E7%88%B6%E4%BA%B2%E5%85%B3%E6%8E%89%E5%85%AC%E5%8F%B8%E9%99%AA%E4%BC%B4%23) `108.6K 🔥` `NEW`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `106.3K 🔥` `NEW`
1. [袁泉拍戏真做了胃镜](https://s.weibo.com/weibo?q=%23%E8%A2%81%E6%B3%89%E6%8B%8D%E6%88%8F%E7%9C%9F%E5%81%9A%E4%BA%86%E8%83%83%E9%95%9C%23) `105.8K 🔥` `NEW`
1. [耳帝谈苏运莹](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%E8%B0%88%E8%8B%8F%E8%BF%90%E8%8E%B9%23) `89.7K 🔥` `NEW`
1. [6秒致辞县委书记清华毕业要求去基层 (Speech in 6 seconds: County Party Committee Secretary requested to go to the grassroots level after graduating from Tsinghua University)](https://s.weibo.com/weibo?q=%236%E7%A7%92%E8%87%B4%E8%BE%9E%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%B8%85%E5%8D%8E%E6%AF%95%E4%B8%9A%E8%A6%81%E6%B1%82%E5%8E%BB%E5%9F%BA%E5%B1%82%23) `88.3K 🔥` `NEW`
1. [工作忙到这种程度](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%BF%99%E5%88%B0%E8%BF%99%E7%A7%8D%E7%A8%8B%E5%BA%A6%23) `77.3K 🔥` `NEW`
1. [达人带货保健品佣金高至80%](https://s.weibo.com/weibo?q=%23%E8%BE%BE%E4%BA%BA%E5%B8%A6%E8%B4%A7%E4%BF%9D%E5%81%A5%E5%93%81%E4%BD%A3%E9%87%91%E9%AB%98%E8%87%B380%25%23) `76.4K 🔥` `NEW`
1. [伊朗800公斤弹头砸向美军基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97800%E5%85%AC%E6%96%A4%E5%BC%B9%E5%A4%B4%E7%A0%B8%E5%90%91%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%23) `157.3K 🔥` `+46%`
1. [优思益发布海外工厂情况声明 (Unisei releases statement on overseas factory conditions)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E5%8F%91%E5%B8%83%E6%B5%B7%E5%A4%96%E5%B7%A5%E5%8E%82%E6%83%85%E5%86%B5%E5%A3%B0%E6%98%8E%23) `1.0M 🔥`
1. [不知道你是谁但知道你为了谁 (I don’t know who you are but I know who you are for)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%9F%A5%E9%81%93%E4%BD%A0%E6%98%AF%E8%B0%81%E4%BD%86%E7%9F%A5%E9%81%93%E4%BD%A0%E4%B8%BA%E4%BA%86%E8%B0%81%23) `758.3K 🔥`
1. [欧阳娜娜同款小鹏MONA起售价11.98万](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%90%8C%E6%AC%BE%E5%B0%8F%E9%B9%8FMONA%E8%B5%B7%E5%94%AE%E4%BB%B711.98%E4%B8%87%23) `659.5K 🔥`
1. [红果全面下架桃花簪](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E5%85%A8%E9%9D%A2%E4%B8%8B%E6%9E%B6%E6%A1%83%E8%8A%B1%E7%B0%AA%23) `263.8K 🔥`
1. [原来身份证不是全国统一的 (It turns out that ID cards are not uniform across the country.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BA%AB%E4%BB%BD%E8%AF%81%E4%B8%8D%E6%98%AF%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84%23) `179.9K 🔥`
1. [特步二公主生娃 (Princess Xtep gives birth to baby)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%AD%A5%E4%BA%8C%E5%85%AC%E4%B8%BB%E7%94%9F%E5%A8%83%23) `151.9K 🔥`
1. [方博回应国家队大门敞开](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%8D%9A%E5%9B%9E%E5%BA%94%E5%9B%BD%E5%AE%B6%E9%98%9F%E5%A4%A7%E9%97%A8%E6%95%9E%E5%BC%80%23) `133.0K 🔥`
1. [爆火鸡煲店的鸡最多还能吃2个月](https://s.weibo.com/weibo?q=%23%E7%88%86%E7%81%AB%E9%B8%A1%E7%85%B2%E5%BA%97%E7%9A%84%E9%B8%A1%E6%9C%80%E5%A4%9A%E8%BF%98%E8%83%BD%E5%90%832%E4%B8%AA%E6%9C%88%23) `120.7K 🔥`
1. [李马克解约退团 (Mark Li terminates contract and quits group)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A9%AC%E5%85%8B%E8%A7%A3%E7%BA%A6%E9%80%80%E5%9B%A2%23) `120.5K 🔥`
1. [迪丽热巴素人婚纱模特时期](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%B4%A0%E4%BA%BA%E5%A9%9A%E7%BA%B1%E6%A8%A1%E7%89%B9%E6%97%B6%E6%9C%9F%23) `119.7K 🔥`
1. [时代峰峻高会声明 (Statement from Times Summit)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%AB%98%E4%BC%9A%E5%A3%B0%E6%98%8E%23) `119.7K 🔥`
1. [曝李马克签了李泳知公司](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E9%A9%AC%E5%85%8B%E7%AD%BE%E4%BA%86%E6%9D%8E%E6%B3%B3%E7%9F%A5%E5%85%AC%E5%8F%B8%23) `118.8K 🔥`
1. [董宇辉近30天掉粉超14万 (Dong Yuhui lost over 140,000 followers in the past 30 days)](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E8%BF%9130%E5%A4%A9%E6%8E%89%E7%B2%89%E8%B6%8514%E4%B8%87%23) `118.1K 🔥`
1. [娱乐圈姓李的有点说法](https://s.weibo.com/weibo?q=%23%E5%A8%B1%E4%B9%90%E5%9C%88%E5%A7%93%E6%9D%8E%E7%9A%84%E6%9C%89%E7%82%B9%E8%AF%B4%E6%B3%95%23) `117.3K 🔥`
1. [金道英发长文](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%81%93%E8%8B%B1%E5%8F%91%E9%95%BF%E6%96%87%23) `110.1K 🔥`
1. [iPhone18Pro深红配色](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%B7%B1%E7%BA%A2%E9%85%8D%E8%89%B2%23) `106.1K 🔥`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `106.0K 🔥`
1. [美国博主中国游后抵达印度被惊呆](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8D%9A%E4%B8%BB%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%90%8E%E6%8A%B5%E8%BE%BE%E5%8D%B0%E5%BA%A6%E8%A2%AB%E6%83%8A%E5%91%86%23) `87.5K 🔥`
1. [女子把XXXXL号搁浅皇带鱼推回大海](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8A%8AXXXXL%E5%8F%B7%E6%90%81%E6%B5%85%E7%9A%87%E5%B8%A6%E9%B1%BC%E6%8E%A8%E5%9B%9E%E5%A4%A7%E6%B5%B7%23) `251.7K 🔥` `-69%`
1. [中方不认同伊朗对海合会国家攻击 (China does not agree with Iran’s attacks on GCC countries)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E4%B8%8D%E8%AE%A4%E5%90%8C%E4%BC%8A%E6%9C%97%E5%AF%B9%E6%B5%B7%E5%90%88%E4%BC%9A%E5%9B%BD%E5%AE%B6%E6%94%BB%E5%87%BB%23) `148.7K 🔥` `-55%`
1. [女演员裙子着火一路奔跑跳进水中](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E8%A3%99%E5%AD%90%E7%9D%80%E7%81%AB%E4%B8%80%E8%B7%AF%E5%A5%94%E8%B7%91%E8%B7%B3%E8%BF%9B%E6%B0%B4%E4%B8%AD%23) `136.2K 🔥` `-50%`
1. [霸王茶姬疑似被日本抄袭](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E7%96%91%E4%BC%BC%E8%A2%AB%E6%97%A5%E6%9C%AC%E6%8A%84%E8%A2%AD%23) `129.5K 🔥` `-26%`
1. [国乒男线仅剩王楚钦 (Only Wang Chuqin remains in the national table tennis men’s line)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E7%BA%BF%E4%BB%85%E5%89%A9%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `118.8K 🔥` `-29%`
1. [陈都灵5万红包](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B55%E4%B8%87%E7%BA%A2%E5%8C%85%23) `116.1K 🔥` `-61%`
1. [我许可 性教育科普 (I give permission for sex education)](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%AE%B8%E5%8F%AF%20%E6%80%A7%E6%95%99%E8%82%B2%E7%A7%91%E6%99%AE%23) `107.8K 🔥` `-29%`
1. [伊朗媒体发布美国F35残骸照](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AA%92%E4%BD%93%E5%8F%91%E5%B8%83%E7%BE%8E%E5%9B%BDF35%E6%AE%8B%E9%AA%B8%E7%85%A7%23) `90.6K 🔥` `-43%`
1. [张凌赫待播剧一个是医生一个是草根](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BE%85%E6%92%AD%E5%89%A7%E4%B8%80%E4%B8%AA%E6%98%AF%E5%8C%BB%E7%94%9F%E4%B8%80%E4%B8%AA%E6%98%AF%E8%8D%89%E6%A0%B9%23) `76.3K 🔥` `-25%`

Updated at 2026-04-03 19:00:26

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
