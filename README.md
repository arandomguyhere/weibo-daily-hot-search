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

1. [安徽造车F4齐聚中国科大](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E9%80%A0%E8%BD%A6F4%E9%BD%90%E8%81%9A%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%A4%A7%23) `1.0M 🔥` `NEW`
1. [刘耀文说错话丁程鑫的表情](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%AF%B4%E9%94%99%E8%AF%9D%E4%B8%81%E7%A8%8B%E9%91%AB%E7%9A%84%E8%A1%A8%E6%83%85%23) `372.5K 🔥` `NEW`
1. [萨巴伦卡美网17连胜](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E7%BE%8E%E7%BD%9117%E8%BF%9E%E8%83%9C%23) `367.0K 🔥` `NEW`
1. [郑钦文重返美网中心球场](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%87%8D%E8%BF%94%E7%BE%8E%E7%BD%91%E4%B8%AD%E5%BF%83%E7%90%83%E5%9C%BA%23) `360.2K 🔥` `NEW`
1. [陈晓陈妍希好体面](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%99%93%E9%99%88%E5%A6%8D%E5%B8%8C%E5%A5%BD%E4%BD%93%E9%9D%A2%23) `355.7K 🔥` `NEW`
1. [井柏然口误](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%8F%A3%E8%AF%AF%23) `345.7K 🔥` `NEW`
1. [毛阿敏工作室早期博文 活人感](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E9%98%BF%E6%95%8F%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%97%A9%E6%9C%9F%E5%8D%9A%E6%96%87%20%E6%B4%BB%E4%BA%BA%E6%84%9F%23) `336.7K 🔥` `NEW`
1. [张家齐一直在被妈妈吐槽](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E4%B8%80%E7%9B%B4%E5%9C%A8%E8%A2%AB%E5%A6%88%E5%A6%88%E5%90%90%E6%A7%BD%23) `332.3K 🔥` `NEW`
1. [王一博赛车被撞调查结果](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%B5%9B%E8%BD%A6%E8%A2%AB%E6%92%9E%E8%B0%83%E6%9F%A5%E7%BB%93%E6%9E%9C%23) `313.1K 🔥` `NEW`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `307.2K 🔥` `NEW`
1. [伊朗将宣布霍尔木兹海峡禁区](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B0%86%E5%AE%A3%E5%B8%83%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E7%A6%81%E5%8C%BA%23) `302.4K 🔥` `NEW`
1. [交锋 尺度大](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E9%94%8B%20%E5%B0%BA%E5%BA%A6%E5%A4%A7%23) `299.4K 🔥` `NEW`
1. [王一博事故调查诉求](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%BA%8B%E6%95%85%E8%B0%83%E6%9F%A5%E8%AF%89%E6%B1%82%23) `293.7K 🔥` `NEW`
1. [白露](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%9C%B2%23) `278.7K 🔥` `NEW`
1. [汪苏泷演唱会被抓伤](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A2%AB%E6%8A%93%E4%BC%A4%23) `229.6K 🔥` `NEW`
1. [张纪中妻子称已进入良性循环](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BA%AA%E4%B8%AD%E5%A6%BB%E5%AD%90%E7%A7%B0%E5%B7%B2%E8%BF%9B%E5%85%A5%E8%89%AF%E6%80%A7%E5%BE%AA%E7%8E%AF%23) `190.0K 🔥` `NEW`
1. [美国女篮3分险胜意大利](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E7%AF%AE3%E5%88%86%E9%99%A9%E8%83%9C%E6%84%8F%E5%A4%A7%E5%88%A9%23) `173.2K 🔥` `NEW`
1. [美网认证郑钦文Queen](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%E8%AE%A4%E8%AF%81%E9%83%91%E9%92%A6%E6%96%87Queen%23) `167.0K 🔥` `NEW`
1. [华为 北方华创](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%20%E5%8C%97%E6%96%B9%E5%8D%8E%E5%88%9B%23) `164.1K 🔥` `NEW`
1. [中秋国庆共4天3倍工资](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E5%9B%BD%E5%BA%86%E5%85%B14%E5%A4%A93%E5%80%8D%E5%B7%A5%E8%B5%84%23) `135.5K 🔥` `NEW`
1. [民宿从一房难求到房间空置](https://s.weibo.com/weibo?q=%23%E6%B0%91%E5%AE%BF%E4%BB%8E%E4%B8%80%E6%88%BF%E9%9A%BE%E6%B1%82%E5%88%B0%E6%88%BF%E9%97%B4%E7%A9%BA%E7%BD%AE%23) `127.5K 🔥` `NEW`
1. [iPhone18Pro 17Pro](https://s.weibo.com/weibo?q=%23iPhone18Pro%2017Pro%23) `112.3K 🔥` `NEW`
1. [当年火得一塌糊涂如今却销声匿迹的东西](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%B9%B4%E7%81%AB%E5%BE%97%E4%B8%80%E5%A1%8C%E7%B3%8A%E6%B6%82%E5%A6%82%E4%BB%8A%E5%8D%B4%E9%94%80%E5%A3%B0%E5%8C%BF%E8%BF%B9%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `104.9K 🔥` `NEW`
1. [韦世豪 河南球迷](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E4%B8%96%E8%B1%AA%20%E6%B2%B3%E5%8D%97%E7%90%83%E8%BF%B7%23) `101.2K 🔥` `NEW`
1. [栾念放卢克跟尚之桃走](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E6%94%BE%E5%8D%A2%E5%85%8B%E8%B7%9F%E5%B0%9A%E4%B9%8B%E6%A1%83%E8%B5%B0%23) `100.3K 🔥` `NEW`
1. [毛阿敏许晴 旅行的意义](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E9%98%BF%E6%95%8F%E8%AE%B8%E6%99%B4%20%E6%97%85%E8%A1%8C%E7%9A%84%E6%84%8F%E4%B9%89%23) `99.4K 🔥` `NEW`
1. [官方回应赴港看演唱会被取消全家低保](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E8%B5%B4%E6%B8%AF%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A2%AB%E5%8F%96%E6%B6%88%E5%85%A8%E5%AE%B6%E4%BD%8E%E4%BF%9D%23) `4.6M 🔥` `+224%`
1. [单亲妈妈月捐数年无人问停捐后遭催捐](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BA%B2%E5%A6%88%E5%A6%88%E6%9C%88%E6%8D%90%E6%95%B0%E5%B9%B4%E6%97%A0%E4%BA%BA%E9%97%AE%E5%81%9C%E6%8D%90%E5%90%8E%E9%81%AD%E5%82%AC%E6%8D%90%23) `1.2M 🔥` `+769%`
1. [小米18Fold今晚7点发布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Fold%E4%BB%8A%E6%99%9A7%E7%82%B9%E5%8F%91%E5%B8%83%23) `994.4K 🔥` `+1194%`
1. [大家不爱住民宿了吗](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AE%B6%E4%B8%8D%E7%88%B1%E4%BD%8F%E6%B0%91%E5%AE%BF%E4%BA%86%E5%90%97%23) `992.9K 🔥` `+89%`
1. [10大含微塑料的日用品](https://s.weibo.com/weibo?q=%2310%E5%A4%A7%E5%90%AB%E5%BE%AE%E5%A1%91%E6%96%99%E7%9A%84%E6%97%A5%E7%94%A8%E5%93%81%23) `569.7K 🔥` `+796%`
1. [为啥大家不穿皮鞋了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%95%A5%E5%A4%A7%E5%AE%B6%E4%B8%8D%E7%A9%BF%E7%9A%AE%E9%9E%8B%E4%BA%86%23) `552.7K 🔥` `+198%`
1. [华为 韬定律](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%20%E9%9F%AC%E5%AE%9A%E5%BE%8B%23) `351.7K 🔥` `+315%`
1. [陈晓妈妈仍会帮陈妍希带孩子](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%99%93%E5%A6%88%E5%A6%88%E4%BB%8D%E4%BC%9A%E5%B8%AE%E9%99%88%E5%A6%8D%E5%B8%8C%E5%B8%A6%E5%AD%A9%E5%AD%90%23) `322.1K 🔥` `+95%`
1. [婚内强奸案男子性侵妻子拍下视频](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%86%85%E5%BC%BA%E5%A5%B8%E6%A1%88%E7%94%B7%E5%AD%90%E6%80%A7%E4%BE%B5%E5%A6%BB%E5%AD%90%E6%8B%8D%E4%B8%8B%E8%A7%86%E9%A2%91%23) `317.9K 🔥` `+262%`
1. [工作人员曾反复劝阻女孩赴港看演唱会](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E6%9B%BE%E5%8F%8D%E5%A4%8D%E5%8A%9D%E9%98%BB%E5%A5%B3%E5%AD%A9%E8%B5%B4%E6%B8%AF%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `301.3K 🔥` `+235%`
1. [医生提醒轻微智障有5个表现](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%92%E8%BD%BB%E5%BE%AE%E6%99%BA%E9%9A%9C%E6%9C%895%E4%B8%AA%E8%A1%A8%E7%8E%B0%23) `280.0K 🔥` `+404%`
1. [爷爷提前剪葫芦是给流量的一记耳光](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E6%8F%90%E5%89%8D%E5%89%AA%E8%91%AB%E8%8A%A6%E6%98%AF%E7%BB%99%E6%B5%81%E9%87%8F%E7%9A%84%E4%B8%80%E8%AE%B0%E8%80%B3%E5%85%89%23) `243.2K 🔥` `+128%`
1. [iPhone18Pro 配色](https://s.weibo.com/weibo?q=%23iPhone18Pro%20%E9%85%8D%E8%89%B2%23) `222.8K 🔥` `+304%`
1. [半个娱乐圈明星都去李宇春演唱会](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E4%B8%AA%E5%A8%B1%E4%B9%90%E5%9C%88%E6%98%8E%E6%98%9F%E9%83%BD%E5%8E%BB%E6%9D%8E%E5%AE%87%E6%98%A5%E6%BC%94%E5%94%B1%E4%BC%9A%23) `194.8K 🔥` `+86%`
1. [中国博主伦敦直播遭外籍青年挑衅殴打](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8D%9A%E4%B8%BB%E4%BC%A6%E6%95%A6%E7%9B%B4%E6%92%AD%E9%81%AD%E5%A4%96%E7%B1%8D%E9%9D%92%E5%B9%B4%E6%8C%91%E8%A1%85%E6%AE%B4%E6%89%93%23) `190.1K 🔥` `+165%`
1. [熬夜是在点燃全身炎症炸弹](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E6%98%AF%E5%9C%A8%E7%82%B9%E7%87%83%E5%85%A8%E8%BA%AB%E7%82%8E%E7%97%87%E7%82%B8%E5%BC%B9%23) `167.6K 🔥` `+209%`
1. [花少2摄影师曾劝杨洋明天跑吧](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E6%91%84%E5%BD%B1%E5%B8%88%E6%9B%BE%E5%8A%9D%E6%9D%A8%E6%B4%8B%E6%98%8E%E5%A4%A9%E8%B7%91%E5%90%A7%23) `129.5K 🔥` `+37%`
1. [女儿用豆包抄答案家长只用了一招](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E7%94%A8%E8%B1%86%E5%8C%85%E6%8A%84%E7%AD%94%E6%A1%88%E5%AE%B6%E9%95%BF%E5%8F%AA%E7%94%A8%E4%BA%86%E4%B8%80%E6%8B%9B%23) `116.2K 🔥` `+109%`
1. [电视台 卖药](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%8F%B0%20%E5%8D%96%E8%8D%AF%23) `114.8K 🔥` `+145%`
1. [敏感的人往往看不见自己的珍贵](https://s.weibo.com/weibo?q=%23%E6%95%8F%E6%84%9F%E7%9A%84%E4%BA%BA%E5%BE%80%E5%BE%80%E7%9C%8B%E4%B8%8D%E8%A7%81%E8%87%AA%E5%B7%B1%E7%9A%84%E7%8F%8D%E8%B4%B5%23) `114.3K 🔥` `+115%`
1. [动物园员工被鳄鱼咬腿1小时身亡](https://s.weibo.com/weibo?q=%23%E5%8A%A8%E7%89%A9%E5%9B%AD%E5%91%98%E5%B7%A5%E8%A2%AB%E9%B3%84%E9%B1%BC%E5%92%AC%E8%85%BF1%E5%B0%8F%E6%97%B6%E8%BA%AB%E4%BA%A1%23) `101.8K 🔥` `+250%`
1. [美国71岁老妇在警局开枪被击毙](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD71%E5%B2%81%E8%80%81%E5%A6%87%E5%9C%A8%E8%AD%A6%E5%B1%80%E5%BC%80%E6%9E%AA%E8%A2%AB%E5%87%BB%E6%AF%99%23) `99.1K 🔥` `+148%`
1. [中国女篮大概率小组出线](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%E5%A4%A7%E6%A6%82%E7%8E%87%E5%B0%8F%E7%BB%84%E5%87%BA%E7%BA%BF%23) `104.7K 🔥` `-21%`

Updated at 2026-09-07 08:44:27

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
