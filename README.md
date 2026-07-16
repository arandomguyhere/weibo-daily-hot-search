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

1. [三尺讲台的青春接力 (Youth relay on the three-foot podium)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%B0%BA%E8%AE%B2%E5%8F%B0%E7%9A%84%E9%9D%92%E6%98%A5%E6%8E%A5%E5%8A%9B%23) `708.4K 🔥` `NEW`
1. [以后快递地址只写到小区](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E5%BF%AB%E9%80%92%E5%9C%B0%E5%9D%80%E5%8F%AA%E5%86%99%E5%88%B0%E5%B0%8F%E5%8C%BA%23) `702.7K 🔥` `NEW`
1. [马龙许昕全锦赛开门红](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E5%85%A8%E9%94%A6%E8%B5%9B%E5%BC%80%E9%97%A8%E7%BA%A2%23) `638.2K 🔥` `NEW`
1. [毕业后朋友圈现状](https://s.weibo.com/weibo?q=%23%E6%AF%95%E4%B8%9A%E5%90%8E%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%8E%B0%E7%8A%B6%23) `630.6K 🔥` `NEW`
1. [两京十五日](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%23) `506.6K 🔥` `NEW`
1. [王橹杰把穆祉丞拉过来](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%8A%8A%E7%A9%86%E7%A5%89%E4%B8%9E%E6%8B%89%E8%BF%87%E6%9D%A5%23) `491.9K 🔥` `NEW`
1. [最绝望的英法大战出现了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E7%BB%9D%E6%9C%9B%E7%9A%84%E8%8B%B1%E6%B3%95%E5%A4%A7%E6%88%98%E5%87%BA%E7%8E%B0%E4%BA%86%23) `476.2K 🔥` `NEW`
1. [数读产业转型升级新动能](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E4%BA%A7%E4%B8%9A%E8%BD%AC%E5%9E%8B%E5%8D%87%E7%BA%A7%E6%96%B0%E5%8A%A8%E8%83%BD%23) `466.3K 🔥` `NEW`
1. [朱志鑫疑似小腿受伤出血了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E7%96%91%E4%BC%BC%E5%B0%8F%E8%85%BF%E5%8F%97%E4%BC%A4%E5%87%BA%E8%A1%80%E4%BA%86%23) `459.9K 🔥` `NEW`
1. [晋江火灾](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E7%81%AB%E7%81%BE%23) `425.9K 🔥` `NEW`
1. [苏新皓颈部不慎扭伤 (Su Xinhao accidentally sprained his neck)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E9%A2%88%E9%83%A8%E4%B8%8D%E6%85%8E%E6%89%AD%E4%BC%A4%23) `411.3K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `404.8K 🔥` `NEW`
1. [宋亚轩最想删掉的真的被删掉了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%9C%80%E6%83%B3%E5%88%A0%E6%8E%89%E7%9A%84%E7%9C%9F%E7%9A%84%E8%A2%AB%E5%88%A0%E6%8E%89%E4%BA%86%23) `397.7K 🔥` `NEW`
1. [冉莹颖侃侃而谈邹市明心如死灰](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E4%BE%83%E4%BE%83%E8%80%8C%E8%B0%88%E9%82%B9%E5%B8%82%E6%98%8E%E5%BF%83%E5%A6%82%E6%AD%BB%E7%81%B0%23) `396.9K 🔥` `NEW`
1. [韩国股民从暴富到一夜归零](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E6%B0%91%E4%BB%8E%E6%9A%B4%E5%AF%8C%E5%88%B0%E4%B8%80%E5%A4%9C%E5%BD%92%E9%9B%B6%23) `392.9K 🔥` `NEW`
1. [电影八仙口碑](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%85%AB%E4%BB%99%E5%8F%A3%E7%A2%91%23) `389.4K 🔥` `NEW`
1. [马龙妻子儿子现场观赛](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E5%A6%BB%E5%AD%90%E5%84%BF%E5%AD%90%E7%8E%B0%E5%9C%BA%E8%A7%82%E8%B5%9B%23) `386.1K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `384.8K 🔥` `NEW`
1. [理想发布会](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E5%8F%91%E5%B8%83%E4%BC%9A%23) `297.0K 🔥` `NEW`
1. [艾米手机壳上是侯明昊家的小狗](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E6%89%8B%E6%9C%BA%E5%A3%B3%E4%B8%8A%E6%98%AF%E4%BE%AF%E6%98%8E%E6%98%8A%E5%AE%B6%E7%9A%84%E5%B0%8F%E7%8B%97%23) `274.2K 🔥` `NEW`
1. [何小鹏首次全程英文演讲 (He Xiaopeng gave his first full English speech)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%B0%8F%E9%B9%8F%E9%A6%96%E6%AC%A1%E5%85%A8%E7%A8%8B%E8%8B%B1%E6%96%87%E6%BC%94%E8%AE%B2%23) `263.3K 🔥` `NEW`
1. [男子做胃肠镜突发心脏骤停成植物人](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%81%9A%E8%83%83%E8%82%A0%E9%95%9C%E7%AA%81%E5%8F%91%E5%BF%83%E8%84%8F%E9%AA%A4%E5%81%9C%E6%88%90%E6%A4%8D%E7%89%A9%E4%BA%BA%23) `249.1K 🔥` `NEW`
1. [怪不得吃斑斓糕老拉肚子](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%90%83%E6%96%91%E6%96%93%E7%B3%95%E8%80%81%E6%8B%89%E8%82%9A%E5%AD%90%23) `242.2K 🔥` `NEW`
1. [阿根廷计划有变准备再次夺冠](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%AE%A1%E5%88%92%E6%9C%89%E5%8F%98%E5%87%86%E5%A4%87%E5%86%8D%E6%AC%A1%E5%A4%BA%E5%86%A0%23) `211.5K 🔥` `NEW`
1. [TF五代新歌拜托拜托](https://s.weibo.com/weibo?q=%23TF%E4%BA%94%E4%BB%A3%E6%96%B0%E6%AD%8C%E6%8B%9C%E6%89%98%E6%8B%9C%E6%89%98%23) `210.5K 🔥` `NEW`
1. [幼童澡盆溺水姑姑忘拄拐一把捞起](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E7%AB%A5%E6%BE%A1%E7%9B%86%E6%BA%BA%E6%B0%B4%E5%A7%91%E5%A7%91%E5%BF%98%E6%8B%84%E6%8B%90%E4%B8%80%E6%8A%8A%E6%8D%9E%E8%B5%B7%23) `205.0K 🔥` `NEW`
1. [黄灿灿把炒饭留给妈妈](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%8A%8A%E7%82%92%E9%A5%AD%E7%95%99%E7%BB%99%E5%A6%88%E5%A6%88%23) `204.6K 🔥` `NEW`
1. [豆包手机外观](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%89%8B%E6%9C%BA%E5%A4%96%E8%A7%82%23) `186.1K 🔥` `NEW`
1. [eStar对战DYG](https://s.weibo.com/weibo?q=%23eStar%E5%AF%B9%E6%88%98DYG%23) `175.1K 🔥` `NEW`
1. [阿根廷的最后十分钟怎么了](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%9A%84%E6%9C%80%E5%90%8E%E5%8D%81%E5%88%86%E9%92%9F%E6%80%8E%E4%B9%88%E4%BA%86%23) `1.2M 🔥` `+175%`
1. [盒马因受害咪连夜改冬瓜图 (Hema changed the picture of winter melon overnight due to victimization)](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%AC%E5%9B%A0%E5%8F%97%E5%AE%B3%E5%92%AA%E8%BF%9E%E5%A4%9C%E6%94%B9%E5%86%AC%E7%93%9C%E5%9B%BE%23) `697.1K 🔥` `+44%`
1. [金靖回应虞书欣](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E5%9B%9E%E5%BA%94%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `512.8K 🔥` `+24%`
1. [realme手机退出中国市场 (realme mobile phone withdraws from Chinese market)](https://s.weibo.com/weibo?q=%23realme%E6%89%8B%E6%9C%BA%E9%80%80%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%23) `1.7M 🔥`
1. [辽宁一橡皮艇闪爆致7死1失联](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E4%B8%80%E6%A9%A1%E7%9A%AE%E8%89%87%E9%97%AA%E7%88%86%E8%87%B47%E6%AD%BB1%E5%A4%B1%E8%81%94%23) `657.6K 🔥`
1. [BLG战胜T1](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CT1%23) `504.1K 🔥`
1. [白鹿经纪人朋友圈](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `481.5K 🔥`
1. [穆祉丞心率挑战直接挂脸](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%BF%83%E7%8E%87%E6%8C%91%E6%88%98%E7%9B%B4%E6%8E%A5%E6%8C%82%E8%84%B8%23) `451.0K 🔥`
1. [A股 (A shares)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `439.7K 🔥`
1. [蔡徐坤演唱会官宣开票时间](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%E5%BC%80%E7%A5%A8%E6%97%B6%E9%97%B4%23) `436.6K 🔥`
1. [呵呵回应白鹿告别欢娱](https://s.weibo.com/weibo?q=%23%E5%91%B5%E5%91%B5%E5%9B%9E%E5%BA%94%E7%99%BD%E9%B9%BF%E5%91%8A%E5%88%AB%E6%AC%A2%E5%A8%B1%23) `434.1K 🔥`
1. [朱志鑫哭了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E5%93%AD%E4%BA%86%23) `413.8K 🔥`
1. [小鹏MONA L03今晚全球上市 (Xpeng MONA L03 will be launched globally tonight)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONA%20L03%E4%BB%8A%E6%99%9A%E5%85%A8%E7%90%83%E4%B8%8A%E5%B8%82%23) `706.2K 🔥` `-77%`
1. [突然觉得有车真的很方便](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E8%A7%89%E5%BE%97%E6%9C%89%E8%BD%A6%E7%9C%9F%E7%9A%84%E5%BE%88%E6%96%B9%E4%BE%BF%23) `381.7K 🔥` `-59%`
1. [我已经吹不了25度的空调了 (I can no longer blow the air conditioner at 25 degrees Celsius)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B7%B2%E7%BB%8F%E5%90%B9%E4%B8%8D%E4%BA%8625%E5%BA%A6%E7%9A%84%E7%A9%BA%E8%B0%83%E4%BA%86%23) `344.3K 🔥` `-24%`
1. [不要在空调房里做旅行规划 (Don’t plan your trip in an air-conditioned room)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%9C%A8%E7%A9%BA%E8%B0%83%E6%88%BF%E9%87%8C%E5%81%9A%E6%97%85%E8%A1%8C%E8%A7%84%E5%88%92%23) `335.3K 🔥` `-31%`
1. [左奇函心率170](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E5%BF%83%E7%8E%87170%23) `261.8K 🔥` `-43%`
1. [迪丽热巴现在走路一步三摇了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%8E%B0%E5%9C%A8%E8%B5%B0%E8%B7%AF%E4%B8%80%E6%AD%A5%E4%B8%89%E6%91%87%E4%BA%86%23) `237.7K 🔥` `-44%`
1. [中国夫妇印尼溺亡水下画面曝光](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%AB%E5%A6%87%E5%8D%B0%E5%B0%BC%E6%BA%BA%E4%BA%A1%E6%B0%B4%E4%B8%8B%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `223.5K 🔥` `-53%`
1. [柳智敏父亲服役引争议](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E7%88%B6%E4%BA%B2%E6%9C%8D%E5%BD%B9%E5%BC%95%E4%BA%89%E8%AE%AE%23) `206.1K 🔥` `-53%`
1. [苏新皓看到粉丝说喜欢他两千天哭了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E7%9C%8B%E5%88%B0%E7%B2%89%E4%B8%9D%E8%AF%B4%E5%96%9C%E6%AC%A2%E4%BB%96%E4%B8%A4%E5%8D%83%E5%A4%A9%E5%93%AD%E4%BA%86%23) `198.7K 🔥` `-56%`
1. [为什么方媛炒菜还背着包 (Why is Fang Yuan still carrying a bag when cooking?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%96%B9%E5%AA%9B%E7%82%92%E8%8F%9C%E8%BF%98%E8%83%8C%E7%9D%80%E5%8C%85%23) `175.4K 🔥` `-60%`

Updated at 2026-07-16 20:48:32

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
