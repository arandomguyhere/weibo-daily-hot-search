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

1. [阿姨称鹅腿已断货15年有余 (The aunt said that goose legs have been out of stock for more than 15 years)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A7%A8%E7%A7%B0%E9%B9%85%E8%85%BF%E5%B7%B2%E6%96%AD%E8%B4%A715%E5%B9%B4%E6%9C%89%E4%BD%99%23) `2.6M 🔥` `NEW`
1. [鹅腿阿姨儿子说不吃滚出去](https://s.weibo.com/weibo?q=%23%E9%B9%85%E8%85%BF%E9%98%BF%E5%A7%A8%E5%84%BF%E5%AD%90%E8%AF%B4%E4%B8%8D%E5%90%83%E6%BB%9A%E5%87%BA%E5%8E%BB%23) `2.1M 🔥` `NEW`
1. [数读数字中国跨越式发展](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E6%95%B0%E5%AD%97%E4%B8%AD%E5%9B%BD%E8%B7%A8%E8%B6%8A%E5%BC%8F%E5%8F%91%E5%B1%95%23) `1.5M 🔥` `NEW`
1. [下周是很善良的一周](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%91%A8%E6%98%AF%E5%BE%88%E5%96%84%E8%89%AF%E7%9A%84%E4%B8%80%E5%91%A8%23) `1.4M 🔥` `NEW`
1. [白鹿心态](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BF%83%E6%80%81%23) `1.1M 🔥` `NEW`
1. [孙千躲张凌赫怀里](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E8%BA%B2%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%80%80%E9%87%8C%23) `816.7K 🔥` `NEW`
1. [天官赐福动画](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%98%E8%B5%90%E7%A6%8F%E5%8A%A8%E7%94%BB%23) `614.0K 🔥` `NEW`
1. [新疆旅游突然在韩国火了起来](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E6%97%85%E6%B8%B8%E7%AA%81%E7%84%B6%E5%9C%A8%E9%9F%A9%E5%9B%BD%E7%81%AB%E4%BA%86%E8%B5%B7%E6%9D%A5%23) `535.1K 🔥` `NEW`
1. [运营商杀熟](https://s.weibo.com/weibo?q=%23%E8%BF%90%E8%90%A5%E5%95%86%E6%9D%80%E7%86%9F%23) `534.8K 🔥` `NEW`
1. [彻底铲除缅北四大家族犯罪集团](https://s.weibo.com/weibo?q=%23%E5%BD%BB%E5%BA%95%E9%93%B2%E9%99%A4%E7%BC%85%E5%8C%97%E5%9B%9B%E5%A4%A7%E5%AE%B6%E6%97%8F%E7%8A%AF%E7%BD%AA%E9%9B%86%E5%9B%A2%23) `532.4K 🔥` `NEW`
1. [梅西赛后被冰岛球员围住了 (Messi was surrounded by Icelandic players after the game)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E8%B5%9B%E5%90%8E%E8%A2%AB%E5%86%B0%E5%B2%9B%E7%90%83%E5%91%98%E5%9B%B4%E4%BD%8F%E4%BA%86%23) `529.7K 🔥` `NEW`
1. [于正为白鹿火力全开](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E4%B8%BA%E7%99%BD%E9%B9%BF%E7%81%AB%E5%8A%9B%E5%85%A8%E5%BC%80%23) `526.2K 🔥` `NEW`
1. [千问高考志愿大模型权威发布](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E9%AB%98%E8%80%83%E5%BF%97%E6%84%BF%E5%A4%A7%E6%A8%A1%E5%9E%8B%E6%9D%83%E5%A8%81%E5%8F%91%E5%B8%83%23) `522.5K 🔥` `NEW`
1. [光伏](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%BC%8F%23) `520.4K 🔥` `NEW`
1. [张凌赫补偿金特殊备注](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A1%A5%E5%81%BF%E9%87%91%E7%89%B9%E6%AE%8A%E5%A4%87%E6%B3%A8%23) `517.7K 🔥` `NEW`
1. [妈妈确诊到离世39天](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%A1%AE%E8%AF%8A%E5%88%B0%E7%A6%BB%E4%B8%9639%E5%A4%A9%23) `516.2K 🔥` `NEW`
1. [奇瑞宣布与杨紫再度携手](https://s.weibo.com/weibo?q=%23%E5%A5%87%E7%91%9E%E5%AE%A3%E5%B8%83%E4%B8%8E%E6%9D%A8%E7%B4%AB%E5%86%8D%E5%BA%A6%E6%90%BA%E6%89%8B%23) `512.7K 🔥` `NEW`
1. [编剧李宗晨问蒙淇淇哪场是你们写的](https://s.weibo.com/weibo?q=%23%E7%BC%96%E5%89%A7%E6%9D%8E%E5%AE%97%E6%99%A8%E9%97%AE%E8%92%99%E6%B7%87%E6%B7%87%E5%93%AA%E5%9C%BA%E6%98%AF%E4%BD%A0%E4%BB%AC%E5%86%99%E7%9A%84%23) `511.3K 🔥` `NEW`
1. [孙颖莎这个defining的含金量](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%BF%99%E4%B8%AAdefining%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `508.9K 🔥` `NEW`
1. [鹅腿阿姨商业版图](https://s.weibo.com/weibo?q=%23%E9%B9%85%E8%85%BF%E9%98%BF%E5%A7%A8%E5%95%86%E4%B8%9A%E7%89%88%E5%9B%BE%23) `506.1K 🔥` `NEW`
1. [陈赫老婆张子萱42岁状态 (Chen He’s wife Zhang Zixuan’s 42-year-old status)](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E8%80%81%E5%A9%86%E5%BC%A0%E5%AD%90%E8%90%B142%E5%B2%81%E7%8A%B6%E6%80%81%23) `500.2K 🔥` `NEW`
1. [鹅腿阿姨 塌房](https://s.weibo.com/weibo?q=%23%E9%B9%85%E8%85%BF%E9%98%BF%E5%A7%A8%20%E5%A1%8C%E6%88%BF%23) `497.7K 🔥` `NEW`
1. [鹅腿阿姨曾称绿色肉是保密配方](https://s.weibo.com/weibo?q=%23%E9%B9%85%E8%85%BF%E9%98%BF%E5%A7%A8%E6%9B%BE%E7%A7%B0%E7%BB%BF%E8%89%B2%E8%82%89%E6%98%AF%E4%BF%9D%E5%AF%86%E9%85%8D%E6%96%B9%23) `495.2K 🔥` `NEW`
1. [章泽天女儿都这么大了](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%B3%BD%E5%A4%A9%E5%A5%B3%E5%84%BF%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `491.5K 🔥` `NEW`
1. [A股全线调整](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%85%A8%E7%BA%BF%E8%B0%83%E6%95%B4%23) `489.2K 🔥` `NEW`
1. [孟佳王霏霏晒宝莲组新合照](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E4%BD%B3%E7%8E%8B%E9%9C%8F%E9%9C%8F%E6%99%92%E5%AE%9D%E8%8E%B2%E7%BB%84%E6%96%B0%E5%90%88%E7%85%A7%23) `484.5K 🔥` `NEW`
1. [于正 蹭人](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%20%E8%B9%AD%E4%BA%BA%23) `483.4K 🔥` `NEW`
1. [警方回应残障老人无薪扛水泥20年](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E6%AE%8B%E9%9A%9C%E8%80%81%E4%BA%BA%E6%97%A0%E8%96%AA%E6%89%9B%E6%B0%B4%E6%B3%A520%E5%B9%B4%23) `481.5K 🔥` `NEW`
1. [当猫想跳上床发现宝宝在床上时](https://s.weibo.com/weibo?q=%23%E5%BD%93%E7%8C%AB%E6%83%B3%E8%B7%B3%E4%B8%8A%E5%BA%8A%E5%8F%91%E7%8E%B0%E5%AE%9D%E5%AE%9D%E5%9C%A8%E5%BA%8A%E4%B8%8A%E6%97%B6%23) `475.1K 🔥` `NEW`
1. [上海市副市长陈宇剑被查](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%B8%82%E5%89%AF%E5%B8%82%E9%95%BF%E9%99%88%E5%AE%87%E5%89%91%E8%A2%AB%E6%9F%A5%23) `474.0K 🔥` `NEW`
1. [J人和P人行李箱的区别 (The difference between J’s and P’s suitcases)](https://s.weibo.com/weibo?q=%23J%E4%BA%BA%E5%92%8CP%E4%BA%BA%E8%A1%8C%E6%9D%8E%E7%AE%B1%E7%9A%84%E5%8C%BA%E5%88%AB%23) `469.6K 🔥` `NEW`
1. [清北 广东录取率](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8C%97%20%E5%B9%BF%E4%B8%9C%E5%BD%95%E5%8F%96%E7%8E%87%23) `468.7K 🔥` `NEW`
1. [20岁黄多多状态](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E9%BB%84%E5%A4%9A%E5%A4%9A%E7%8A%B6%E6%80%81%23) `462.3K 🔥` `NEW`
1. [还我扔垃圾自由](https://s.weibo.com/weibo?q=%23%E8%BF%98%E6%88%91%E6%89%94%E5%9E%83%E5%9C%BE%E8%87%AA%E7%94%B1%23) `460.4K 🔥` `NEW`
1. [莫离编剧纠纷关键不在辛苦](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E7%BC%96%E5%89%A7%E7%BA%A0%E7%BA%B7%E5%85%B3%E9%94%AE%E4%B8%8D%E5%9C%A8%E8%BE%9B%E8%8B%A6%23) `458.5K 🔥` `NEW`
1. [苹果安卓为何总在互相借鉴](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%AE%89%E5%8D%93%E4%B8%BA%E4%BD%95%E6%80%BB%E5%9C%A8%E4%BA%92%E7%9B%B8%E5%80%9F%E9%89%B4%23) `454.5K 🔥` `NEW`
1. [大学生买滑板8月后要退款平台同意](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E4%B9%B0%E6%BB%91%E6%9D%BF8%E6%9C%88%E5%90%8E%E8%A6%81%E9%80%80%E6%AC%BE%E5%B9%B3%E5%8F%B0%E5%90%8C%E6%84%8F%23) `452.8K 🔥` `NEW`
1. [谢娜粉丝](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E7%B2%89%E4%B8%9D%23) `449.2K 🔥` `NEW`
1. [为什么有的癌症一发现就是晚期](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E7%9A%84%E7%99%8C%E7%97%87%E4%B8%80%E5%8F%91%E7%8E%B0%E5%B0%B1%E6%98%AF%E6%99%9A%E6%9C%9F%23) `448.0K 🔥` `NEW`
1. [网红阿梓4年挣200万却净身出户](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E9%98%BF%E6%A2%934%E5%B9%B4%E6%8C%A3200%E4%B8%87%E5%8D%B4%E5%87%80%E8%BA%AB%E5%87%BA%E6%88%B7%23) `443.0K 🔥` `NEW`
1. [关晓彤李昀锐 接二搭 (Guan Xiaotong and Li Yunrui take over the second match)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%9D%8E%E6%98%80%E9%94%90%20%E6%8E%A5%E4%BA%8C%E6%90%AD%23) `440.5K 🔥` `NEW`
1. [丁程鑫哄人只哄两次](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%93%84%E4%BA%BA%E5%8F%AA%E5%93%84%E4%B8%A4%E6%AC%A1%23) `438.2K 🔥` `NEW`
1. [见面真的太重要了](https://s.weibo.com/weibo?q=%23%E8%A7%81%E9%9D%A2%E7%9C%9F%E7%9A%84%E5%A4%AA%E9%87%8D%E8%A6%81%E4%BA%86%23) `434.6K 🔥` `NEW`
1. [DOTA2](https://s.weibo.com/weibo?q=%23DOTA2%23) `432.9K 🔥` `NEW`
1. [金饰克价跌到1283元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E8%B7%8C%E5%88%B01283%E5%85%83%23) `430.5K 🔥` `NEW`
1. [手机拍照不要只会用原相机](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%8B%8D%E7%85%A7%E4%B8%8D%E8%A6%81%E5%8F%AA%E4%BC%9A%E7%94%A8%E5%8E%9F%E7%9B%B8%E6%9C%BA%23) `504.6K 🔥` `+26%`
1. [霍尊 陈露 (Huo Zun Chen Lu)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%8A%20%E9%99%88%E9%9C%B2%23) `492.8K 🔥`
1. [莫离编剧团队打假蒙淇淇](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E7%BC%96%E5%89%A7%E5%9B%A2%E9%98%9F%E6%89%93%E5%81%87%E8%92%99%E6%B7%87%E6%B7%87%23) `479.4K 🔥`
1. [谢娜北京演唱会仅3万人想看](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%8C%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BB%853%E4%B8%87%E4%BA%BA%E6%83%B3%E7%9C%8B%23) `465.0K 🔥`
1. [皮肤好是可以洗出来的](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E8%82%A4%E5%A5%BD%E6%98%AF%E5%8F%AF%E4%BB%A5%E6%B4%97%E5%87%BA%E6%9D%A5%E7%9A%84%23) `444.3K 🔥`
1. [2026高考收官日](https://s.weibo.com/weibo?q=%232026%E9%AB%98%E8%80%83%E6%94%B6%E5%AE%98%E6%97%A5%23) `426.6K 🔥` `-45%`

Updated at 2026-06-10 16:36:20

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
