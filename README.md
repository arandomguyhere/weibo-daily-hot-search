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

1. [刘宇宁京东超市过关斩价](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E4%BA%AC%E4%B8%9C%E8%B6%85%E5%B8%82%E8%BF%87%E5%85%B3%E6%96%A9%E4%BB%B7%23) `207.8K 🔥` `NEW`
1. [许飞四次看厉娜的眼神](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%9B%9B%E6%AC%A1%E7%9C%8B%E5%8E%89%E5%A8%9C%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `89.7K 🔥` `NEW`
1. [成毅推介会压轴登场](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E6%8E%A8%E4%BB%8B%E4%BC%9A%E5%8E%8B%E8%BD%B4%E7%99%BB%E5%9C%BA%23) `89.1K 🔥` `NEW`
1. [刘念被曝要求九一分成被拒](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BF%B5%E8%A2%AB%E6%9B%9D%E8%A6%81%E6%B1%82%E4%B9%9D%E4%B8%80%E5%88%86%E6%88%90%E8%A2%AB%E6%8B%92%23) `86.5K 🔥` `NEW`
1. [欧冠RB莱比锡VS曼城](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0RB%E8%8E%B1%E6%AF%94%E9%94%A1VS%E6%9B%BC%E5%9F%8E%23) `85.4K 🔥` `NEW`
1. [花8万坐月子产后两个月伤口还流脓](https://s.weibo.com/weibo?q=%23%E8%8A%B18%E4%B8%87%E5%9D%90%E6%9C%88%E5%AD%90%E4%BA%A7%E5%90%8E%E4%B8%A4%E4%B8%AA%E6%9C%88%E4%BC%A4%E5%8F%A3%E8%BF%98%E6%B5%81%E8%84%93%23) `84.6K 🔥` `NEW`
1. [脂肪肝是全身代谢紊乱的预警信号](https://s.weibo.com/weibo?q=%23%E8%84%82%E8%82%AA%E8%82%9D%E6%98%AF%E5%85%A8%E8%BA%AB%E4%BB%A3%E8%B0%A2%E7%B4%8A%E4%B9%B1%E7%9A%84%E9%A2%84%E8%AD%A6%E4%BF%A1%E5%8F%B7%23) `82.5K 🔥` `NEW`
1. [民主党重掌美国国会意味着什么](https://s.weibo.com/weibo?q=%23%E6%B0%91%E4%B8%BB%E5%85%9A%E9%87%8D%E6%8E%8C%E7%BE%8E%E5%9B%BD%E5%9B%BD%E4%BC%9A%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `81.6K 🔥` `NEW`
1. [从什么时候发现婆婆不是善茬](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%8F%91%E7%8E%B0%E5%A9%86%E5%A9%86%E4%B8%8D%E6%98%AF%E5%96%84%E8%8C%AC%23) `81.4K 🔥` `NEW`
1. [超7成美国人对现状气炸了](https://s.weibo.com/weibo?q=%23%E8%B6%857%E6%88%90%E7%BE%8E%E5%9B%BD%E4%BA%BA%E5%AF%B9%E7%8E%B0%E7%8A%B6%E6%B0%94%E7%82%B8%E4%BA%86%23) `81.2K 🔥` `NEW`
1. [陕西省教育厅回应延安大学教师离世](https://s.weibo.com/weibo?q=%23%E9%99%95%E8%A5%BF%E7%9C%81%E6%95%99%E8%82%B2%E5%8E%85%E5%9B%9E%E5%BA%94%E5%BB%B6%E5%AE%89%E5%A4%A7%E5%AD%A6%E6%95%99%E5%B8%88%E7%A6%BB%E4%B8%96%23) `81.1K 🔥` `NEW`
1. [沈阳保洁大叔称儿子长相随妈](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E4%BF%9D%E6%B4%81%E5%A4%A7%E5%8F%94%E7%A7%B0%E5%84%BF%E5%AD%90%E9%95%BF%E7%9B%B8%E9%9A%8F%E5%A6%88%23) `73.6K 🔥` `NEW`
1. [听说要上幼儿园真难过听到这个消息](https://s.weibo.com/weibo?q=%23%E5%90%AC%E8%AF%B4%E8%A6%81%E4%B8%8A%E5%B9%BC%E5%84%BF%E5%9B%AD%E7%9C%9F%E9%9A%BE%E8%BF%87%E5%90%AC%E5%88%B0%E8%BF%99%E4%B8%AA%E6%B6%88%E6%81%AF%23) `73.4K 🔥` `NEW`
1. [郭宇欣将起诉叶非夜](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E5%B0%86%E8%B5%B7%E8%AF%89%E5%8F%B6%E9%9D%9E%E5%A4%9C%23) `73.2K 🔥` `NEW`
1. [三甲医生暗示三乙是其分院](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E6%9A%97%E7%A4%BA%E4%B8%89%E4%B9%99%E6%98%AF%E5%85%B6%E5%88%86%E9%99%A2%23) `72.9K 🔥` `NEW`
1. [感情纯度要求高身边人越来越少](https://s.weibo.com/weibo?q=%23%E6%84%9F%E6%83%85%E7%BA%AF%E5%BA%A6%E8%A6%81%E6%B1%82%E9%AB%98%E8%BA%AB%E8%BE%B9%E4%BA%BA%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%B0%91%23) `72.0K 🔥` `NEW`
1. [妈妈不喜欢猫小猫却总跟着她](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E4%B8%8D%E5%96%9C%E6%AC%A2%E7%8C%AB%E5%B0%8F%E7%8C%AB%E5%8D%B4%E6%80%BB%E8%B7%9F%E7%9D%80%E5%A5%B9%23) `71.3K 🔥` `NEW`
1. [上岸第一件先娶意中人](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%B2%B8%E7%AC%AC%E4%B8%80%E4%BB%B6%E5%85%88%E5%A8%B6%E6%84%8F%E4%B8%AD%E4%BA%BA%23) `550.4K 🔥` `+530%`
1. [高市早苗以怪异姿势面见日本天皇](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E4%BB%A5%E6%80%AA%E5%BC%82%E5%A7%BF%E5%8A%BF%E9%9D%A2%E8%A7%81%E6%97%A5%E6%9C%AC%E5%A4%A9%E7%9A%87%23) `393.5K 🔥`
1. [方浩明以亲身经历感知中国](https://s.weibo.com/weibo?q=%23%E6%96%B9%E6%B5%A9%E6%98%8E%E4%BB%A5%E4%BA%B2%E8%BA%AB%E7%BB%8F%E5%8E%86%E6%84%9F%E7%9F%A5%E4%B8%AD%E5%9B%BD%23) `315.3K 🔥`
1. [温瑞博vs王楚钦](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9Avs%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `133.0K 🔥`
1. [没想到脂肪肝和抑郁症有关系](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%83%B3%E5%88%B0%E8%84%82%E8%82%AA%E8%82%9D%E5%92%8C%E6%8A%91%E9%83%81%E7%97%87%E6%9C%89%E5%85%B3%E7%B3%BB%23) `87.7K 🔥`
1. [张雪校招不是傲慢是对现实的忠诚](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%A0%A1%E6%8B%9B%E4%B8%8D%E6%98%AF%E5%82%B2%E6%85%A2%E6%98%AF%E5%AF%B9%E7%8E%B0%E5%AE%9E%E7%9A%84%E5%BF%A0%E8%AF%9A%23) `83.7K 🔥`
1. [原来大家都是这样消除怨气的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E6%B6%88%E9%99%A4%E6%80%A8%E6%B0%94%E7%9A%84%23) `81.7K 🔥`
1. [陈哲远的床单是花开富贵](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E7%9A%84%E5%BA%8A%E5%8D%95%E6%98%AF%E8%8A%B1%E5%BC%80%E5%AF%8C%E8%B4%B5%23) `81.3K 🔥`
1. [女孩说爸爸妈妈都不要我了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%AF%B4%E7%88%B8%E7%88%B8%E5%A6%88%E5%A6%88%E9%83%BD%E4%B8%8D%E8%A6%81%E6%88%91%E4%BA%86%23) `74.1K 🔥`
1. [微信文件过期了用wps能打开](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%96%87%E4%BB%B6%E8%BF%87%E6%9C%9F%E4%BA%86%E7%94%A8wps%E8%83%BD%E6%89%93%E5%BC%80%23) `73.9K 🔥`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `73.5K 🔥`
1. [高市早苗举止怪异被批丢人](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E4%B8%BE%E6%AD%A2%E6%80%AA%E5%BC%82%E8%A2%AB%E6%89%B9%E4%B8%A2%E4%BA%BA%23) `72.9K 🔥`
1. [中国男篮公布世预赛集训名单](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E5%85%AC%E5%B8%83%E4%B8%96%E9%A2%84%E8%B5%9B%E9%9B%86%E8%AE%AD%E5%90%8D%E5%8D%95%23) `72.7K 🔥`
1. [白小纯青稚红V了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E7%BA%A2V%E4%BA%86%23) `72.5K 🔥`
1. [唐嫣杨幂同台被王凯隔开](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E6%9D%A8%E5%B9%82%E5%90%8C%E5%8F%B0%E8%A2%AB%E7%8E%8B%E5%87%AF%E9%9A%94%E5%BC%80%23) `72.4K 🔥`
1. [全国寺院道观财务大检查](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E5%AF%BA%E9%99%A2%E9%81%93%E8%A7%82%E8%B4%A2%E5%8A%A1%E5%A4%A7%E6%A3%80%E6%9F%A5%23) `72.1K 🔥`
1. [许飞看到之后不得迷死啊](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E7%9C%8B%E5%88%B0%E4%B9%8B%E5%90%8E%E4%B8%8D%E5%BE%97%E8%BF%B7%E6%AD%BB%E5%95%8A%23) `194.6K 🔥` `-28%`
1. [嫁金钗忘删AI水印了](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%BF%98%E5%88%A0AI%E6%B0%B4%E5%8D%B0%E4%BA%86%23) `133.8K 🔥` `-79%`
1. [郭士强 中国男篮](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%A3%AB%E5%BC%BA%20%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%23) `89.8K 🔥` `-43%`
1. [韩网吐槽没有年轻人演了吗](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E5%90%90%E6%A7%BD%E6%B2%A1%E6%9C%89%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%BC%94%E4%BA%86%E5%90%97%23) `89.5K 🔥` `-38%`
1. [女儿初潮弄脏沙发爸爸送花安慰](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E5%88%9D%E6%BD%AE%E5%BC%84%E8%84%8F%E6%B2%99%E5%8F%91%E7%88%B8%E7%88%B8%E9%80%81%E8%8A%B1%E5%AE%89%E6%85%B0%23) `89.3K 🔥` `-34%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `89.1K 🔥` `-33%`
1. [叶非夜实名举报郭宇欣偷税漏税](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E9%9D%9E%E5%A4%9C%E5%AE%9E%E5%90%8D%E4%B8%BE%E6%8A%A5%E9%83%AD%E5%AE%87%E6%AC%A3%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E%23) `87.3K 🔥` `-35%`
1. [同学卖上海房回老家引争议](https://s.weibo.com/weibo?q=%23%E5%90%8C%E5%AD%A6%E5%8D%96%E4%B8%8A%E6%B5%B7%E6%88%BF%E5%9B%9E%E8%80%81%E5%AE%B6%E5%BC%95%E4%BA%89%E8%AE%AE%23) `83.2K 🔥` `-26%`
1. [男生代课冒充男友遇上真男友](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E4%BB%A3%E8%AF%BE%E5%86%92%E5%85%85%E7%94%B7%E5%8F%8B%E9%81%87%E4%B8%8A%E7%9C%9F%E7%94%B7%E5%8F%8B%23) `81.5K 🔥` `-27%`
1. [小孩都知道买东西是隐形家务](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A9%E9%83%BD%E7%9F%A5%E9%81%93%E4%B9%B0%E4%B8%9C%E8%A5%BF%E6%98%AF%E9%9A%90%E5%BD%A2%E5%AE%B6%E5%8A%A1%23) `81.5K 🔥` `-25%`
1. [出租屋轻生男子6岁儿子患病长期住院](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%A7%9F%E5%B1%8B%E8%BD%BB%E7%94%9F%E7%94%B7%E5%AD%906%E5%B2%81%E5%84%BF%E5%AD%90%E6%82%A3%E7%97%85%E9%95%BF%E6%9C%9F%E4%BD%8F%E9%99%A2%23) `81.1K 🔥` `-32%`
1. [厉娜已拿下三个商务](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E5%B7%B2%E6%8B%BF%E4%B8%8B%E4%B8%89%E4%B8%AA%E5%95%86%E5%8A%A1%23) `73.8K 🔥` `-64%`
1. [烧伤男生ICU对口型说我不治了](https://s.weibo.com/weibo?q=%23%E7%83%A7%E4%BC%A4%E7%94%B7%E7%94%9FICU%E5%AF%B9%E5%8F%A3%E5%9E%8B%E8%AF%B4%E6%88%91%E4%B8%8D%E6%B2%BB%E4%BA%86%23) `71.8K 🔥` `-52%`
1. [红果时间](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E6%97%B6%E9%97%B4%23) `71.8K 🔥` `-33%`
1. [刘亦菲曾轶可入选破冰名单](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%9B%BE%E8%BD%B6%E5%8F%AF%E5%85%A5%E9%80%89%E7%A0%B4%E5%86%B0%E5%90%8D%E5%8D%95%23) `71.5K 🔥` `-38%`
1. [后会友期第二季呼声TOP10](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%AC%AC%E4%BA%8C%E5%AD%A3%E5%91%BC%E5%A3%B0TOP10%23) `71.1K 🔥` `-65%`

Updated at 2026-11-05 06:46:34

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
