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

1. [高考英语 (College Entrance Examination English)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E8%8B%B1%E8%AF%AD%23) `9.0M 🔥` `NEW`
1. [朝方礼宾车队护卫驶过凯旋门](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E6%96%B9%E7%A4%BC%E5%AE%BE%E8%BD%A6%E9%98%9F%E6%8A%A4%E5%8D%AB%E9%A9%B6%E8%BF%87%E5%87%AF%E6%97%8B%E9%97%A8%23) `2.7M 🔥` `NEW`
1. [英语作文](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E8%AF%AD%E4%BD%9C%E6%96%87%23) `2.5M 🔥` `NEW`
1. [高考作文 给阿嬷的情书](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%20%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `1.7M 🔥` `NEW`
1. [李小冉团张月团撞选歌](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%9B%A2%E5%BC%A0%E6%9C%88%E5%9B%A2%E6%92%9E%E9%80%89%E6%AD%8C%23) `1.6M 🔥` `NEW`
1. [林更新的溯源挑战](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%9B%B4%E6%96%B0%E7%9A%84%E6%BA%AF%E6%BA%90%E6%8C%91%E6%88%98%23) `1.5M 🔥` `NEW`
1. [陕西致62人死亡失踪高速桥梁垮塌细节](https://s.weibo.com/weibo?q=%23%E9%99%95%E8%A5%BF%E8%87%B462%E4%BA%BA%E6%AD%BB%E4%BA%A1%E5%A4%B1%E8%B8%AA%E9%AB%98%E9%80%9F%E6%A1%A5%E6%A2%81%E5%9E%AE%E5%A1%8C%E7%BB%86%E8%8A%82%23) `1.5M 🔥` `NEW`
1. [奔跑吧称已关注到网友关切问题](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E7%A7%B0%E5%B7%B2%E5%85%B3%E6%B3%A8%E5%88%B0%E7%BD%91%E5%8F%8B%E5%85%B3%E5%88%87%E9%97%AE%E9%A2%98%23) `1.2M 🔥` `NEW`
1. [iPhone18ProMax电池容量](https://s.weibo.com/weibo?q=%23iPhone18ProMax%E7%94%B5%E6%B1%A0%E5%AE%B9%E9%87%8F%23) `495.5K 🔥` `NEW`
1. [Doinb用豆包玩英雄联盟](https://s.weibo.com/weibo?q=%23Doinb%E7%94%A8%E8%B1%86%E5%8C%85%E7%8E%A9%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%23) `494.5K 🔥` `NEW`
1. [李小冉 我不配 (Li Xiaoran I don’t deserve it)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E6%88%91%E4%B8%8D%E9%85%8D%23) `491.1K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `490.1K 🔥` `NEW`
1. [养了蝾螈才知道自己有多歹毒](https://s.weibo.com/weibo?q=%23%E5%85%BB%E4%BA%86%E8%9D%BE%E8%9E%88%E6%89%8D%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E6%9C%89%E5%A4%9A%E6%AD%B9%E6%AF%92%23) `486.4K 🔥` `NEW`
1. [当有人问你不谈恋爱每天都在干什么](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%9C%89%E4%BA%BA%E9%97%AE%E4%BD%A0%E4%B8%8D%E8%B0%88%E6%81%8B%E7%88%B1%E6%AF%8F%E5%A4%A9%E9%83%BD%E5%9C%A8%E5%B9%B2%E4%BB%80%E4%B9%88%23) `485.5K 🔥` `NEW`
1. [久酷](https://s.weibo.com/weibo?q=%23%E4%B9%85%E9%85%B7%23) `481.4K 🔥` `NEW`
1. [去面试被公司留下吃午饭了](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E9%9D%A2%E8%AF%95%E8%A2%AB%E5%85%AC%E5%8F%B8%E7%95%99%E4%B8%8B%E5%90%83%E5%8D%88%E9%A5%AD%E4%BA%86%23) `478.9K 🔥` `NEW`
1. [乘风五公双人合作曲限时推荐](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E4%BA%94%E5%85%AC%E5%8F%8C%E4%BA%BA%E5%90%88%E4%BD%9C%E6%9B%B2%E9%99%90%E6%97%B6%E6%8E%A8%E8%8D%90%23) `476.6K 🔥` `NEW`
1. [小米17T系列售价](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B317T%E7%B3%BB%E5%88%97%E5%94%AE%E4%BB%B7%23) `474.6K 🔥` `NEW`
1. [6分钱一支脏牙刷主要供给民宿](https://s.weibo.com/weibo?q=%236%E5%88%86%E9%92%B1%E4%B8%80%E6%94%AF%E8%84%8F%E7%89%99%E5%88%B7%E4%B8%BB%E8%A6%81%E4%BE%9B%E7%BB%99%E6%B0%91%E5%AE%BF%23) `473.0K 🔥` `NEW`
1. [北京高考英语作文又见李华](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E9%AB%98%E8%80%83%E8%8B%B1%E8%AF%AD%E4%BD%9C%E6%96%87%E5%8F%88%E8%A7%81%E6%9D%8E%E5%8D%8E%23) `471.2K 🔥` `NEW`
1. [曾沛慈快起床选歌 (Zeng Peici, get up quickly and choose a song)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%BF%AB%E8%B5%B7%E5%BA%8A%E9%80%89%E6%AD%8C%23) `467.7K 🔥` `NEW`
1. [存子生图眼睛比精修大](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%AD%90%E7%94%9F%E5%9B%BE%E7%9C%BC%E7%9D%9B%E6%AF%94%E7%B2%BE%E4%BF%AE%E5%A4%A7%23) `466.7K 🔥` `NEW`
1. [豆包凌晨吓醒我](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%87%8C%E6%99%A8%E5%90%93%E9%86%92%E6%88%91%23) `464.0K 🔥` `NEW`
1. [何润东参加苏超没有收文旅出场费](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E5%8F%82%E5%8A%A0%E8%8B%8F%E8%B6%85%E6%B2%A1%E6%9C%89%E6%94%B6%E6%96%87%E6%97%85%E5%87%BA%E5%9C%BA%E8%B4%B9%23) `461.5K 🔥` `NEW`
1. [菲律宾7.9级地震现场画面](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE7.9%E7%BA%A7%E5%9C%B0%E9%9C%87%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `458.5K 🔥` `NEW`
1. [关晓彤20年前拍摄现场照片](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A420%E5%B9%B4%E5%89%8D%E6%8B%8D%E6%91%84%E7%8E%B0%E5%9C%BA%E7%85%A7%E7%89%87%23) `455.2K 🔥` `NEW`
1. [不要把照片视频存到U盘](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E6%8A%8A%E7%85%A7%E7%89%87%E8%A7%86%E9%A2%91%E5%AD%98%E5%88%B0U%E7%9B%98%23) `452.5K 🔥` `NEW`
1. [吴磊被河南的菜量惊到了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E8%A2%AB%E6%B2%B3%E5%8D%97%E7%9A%84%E8%8F%9C%E9%87%8F%E6%83%8A%E5%88%B0%E4%BA%86%23) `450.3K 🔥` `NEW`
1. [杨紫四海为家 到哪都是欢迎回家](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%9B%9B%E6%B5%B7%E4%B8%BA%E5%AE%B6%20%E5%88%B0%E5%93%AA%E9%83%BD%E6%98%AF%E6%AC%A2%E8%BF%8E%E5%9B%9E%E5%AE%B6%23) `447.6K 🔥` `NEW`
1. [陈坤体验一山四季](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%9D%A4%E4%BD%93%E9%AA%8C%E4%B8%80%E5%B1%B1%E5%9B%9B%E5%AD%A3%23) `444.3K 🔥` `NEW`
1. [女子因金价忽涨忽跌出现躯体化症状 (Woman develops somatization symptoms due to sudden rise and fall in gold prices)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E9%87%91%E4%BB%B7%E5%BF%BD%E6%B6%A8%E5%BF%BD%E8%B7%8C%E5%87%BA%E7%8E%B0%E8%BA%AF%E4%BD%93%E5%8C%96%E7%97%87%E7%8A%B6%23) `441.6K 🔥` `NEW`
1. [西安一考生物理增加23分钟作答时间](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%80%E8%80%83%E7%94%9F%E7%89%A9%E7%90%86%E5%A2%9E%E5%8A%A023%E5%88%86%E9%92%9F%E4%BD%9C%E7%AD%94%E6%97%B6%E9%97%B4%23) `440.5K 🔥` `NEW`
1. [张月团 梦一场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%9B%A2%20%E6%A2%A6%E4%B8%80%E5%9C%BA%23) `436.7K 🔥` `NEW`
1. [浪姐选歌](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E9%80%89%E6%AD%8C%23) `434.5K 🔥` `NEW`
1. [孙怡 想要一直很安静](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E6%83%B3%E8%A6%81%E4%B8%80%E7%9B%B4%E5%BE%88%E5%AE%89%E9%9D%99%23) `429.6K 🔥` `NEW`
1. [陈都灵完全不吃压力](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%AE%8C%E5%85%A8%E4%B8%8D%E5%90%83%E5%8E%8B%E5%8A%9B%23) `424.9K 🔥` `NEW`
1. [特朗普摔麦离场原因曝光](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%91%94%E9%BA%A6%E7%A6%BB%E5%9C%BA%E5%8E%9F%E5%9B%A0%E6%9B%9D%E5%85%89%23) `421.9K 🔥` `NEW`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `421.4K 🔥` `NEW`
1. [被AI盗脸后我失业了](https://s.weibo.com/weibo?q=%23%E8%A2%ABAI%E7%9B%97%E8%84%B8%E5%90%8E%E6%88%91%E5%A4%B1%E4%B8%9A%E4%BA%86%23) `417.9K 🔥` `NEW`
1. [避孕套销售缩水25%](https://s.weibo.com/weibo?q=%23%E9%81%BF%E5%AD%95%E5%A5%97%E9%94%80%E5%94%AE%E7%BC%A9%E6%B0%B425%25%23) `413.1K 🔥` `NEW`
1. [被人喜欢和被人尊重是两种活法 (Being liked and respected are two ways to live.)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%BA%BA%E5%96%9C%E6%AC%A2%E5%92%8C%E8%A2%AB%E4%BA%BA%E5%B0%8A%E9%87%8D%E6%98%AF%E4%B8%A4%E7%A7%8D%E6%B4%BB%E6%B3%95%23) `411.6K 🔥` `NEW`
1. [粉丝怎么认出王一博的](https://s.weibo.com/weibo?q=%23%E7%B2%89%E4%B8%9D%E6%80%8E%E4%B9%88%E8%AE%A4%E5%87%BA%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%9A%84%23) `406.6K 🔥` `NEW`
1. [中国基建上新要编织六张网 (China’s new infrastructure needs to weave six networks)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9F%BA%E5%BB%BA%E4%B8%8A%E6%96%B0%E8%A6%81%E7%BC%96%E7%BB%87%E5%85%AD%E5%BC%A0%E7%BD%91%23) `2.5M 🔥` `+216%`
1. [霍思燕爱犬在意大利夺冠](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E6%80%9D%E7%87%95%E7%88%B1%E7%8A%AC%E5%9C%A8%E6%84%8F%E5%A4%A7%E5%88%A9%E5%A4%BA%E5%86%A0%23) `454.4K 🔥` `+57%`
1. [高考物理](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E7%89%A9%E7%90%86%23) `415.5K 🔥` `+51%`
1. [金秀贤重启活动](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E9%87%8D%E5%90%AF%E6%B4%BB%E5%8A%A8%23) `399.6K 🔥` `+38%`
1. [朱珠法网曝光vivo新折叠](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E6%B3%95%E7%BD%91%E6%9B%9D%E5%85%89vivo%E6%96%B0%E6%8A%98%E5%8F%A0%23) `409.5K 🔥`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `403.9K 🔥`
1. [2026KPL夏季赛大名单 (2026KPL Summer Split Roster)](https://s.weibo.com/weibo?q=%232026KPL%E5%A4%8F%E5%AD%A3%E8%B5%9B%E5%A4%A7%E5%90%8D%E5%8D%95%23) `401.0K 🔥`
1. [高考历史](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%8E%86%E5%8F%B2%23) `432.0K 🔥` `-51%`
1. [跑男](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%23) `426.6K 🔥` `-59%`

Updated at 2026-06-08 17:24:26

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
