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

1. [浪姐倒数第一竞争太激烈了 (The competition between Sister Lang and the last one is too fierce.)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%E7%AB%9E%E4%BA%89%E5%A4%AA%E6%BF%80%E7%83%88%E4%BA%86%23) `647.1K 🔥` `NEW`
1. [35岁程序员转行摆摊卖肉蛋堡月入5万](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E7%A8%8B%E5%BA%8F%E5%91%98%E8%BD%AC%E8%A1%8C%E6%91%86%E6%91%8A%E5%8D%96%E8%82%89%E8%9B%8B%E5%A0%A1%E6%9C%88%E5%85%A55%E4%B8%87%23) `457.4K 🔥` `NEW`
1. [清明假期文旅成绩单出炉](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E5%81%87%E6%9C%9F%E6%96%87%E6%97%85%E6%88%90%E7%BB%A9%E5%8D%95%E5%87%BA%E7%82%89%23) `360.9K 🔥` `NEW`
1. [伊媒称伊朗或因黎遭袭结束临时停火](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%AA%92%E7%A7%B0%E4%BC%8A%E6%9C%97%E6%88%96%E5%9B%A0%E9%BB%8E%E9%81%AD%E8%A2%AD%E7%BB%93%E6%9D%9F%E4%B8%B4%E6%97%B6%E5%81%9C%E7%81%AB%23) `315.0K 🔥` `NEW`
1. [以色列空袭黎首都](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E7%A9%BA%E8%A2%AD%E9%BB%8E%E9%A6%96%E9%83%BD%23) `249.2K 🔥` `NEW`
1. [不假唱 不怯场 不做作 不好听](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%81%87%E5%94%B1%20%E4%B8%8D%E6%80%AF%E5%9C%BA%20%E4%B8%8D%E5%81%9A%E4%BD%9C%20%E4%B8%8D%E5%A5%BD%E5%90%AC%23) `243.4K 🔥` `NEW`
1. [长城的第1000次评车会](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%9F%8E%E7%9A%84%E7%AC%AC1000%E6%AC%A1%E8%AF%84%E8%BD%A6%E4%BC%9A%23) `227.9K 🔥` `NEW`
1. [楚乔传](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E4%B9%94%E4%BC%A0%23) `140.2K 🔥` `NEW`
1. [樊振东放弃伦敦世乒赛资格](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%94%BE%E5%BC%83%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E8%B5%84%E6%A0%BC%23) `129.8K 🔥` `NEW`
1. [中方回应朝鲜连续2天发射弹道导弹](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E6%9C%9D%E9%B2%9C%E8%BF%9E%E7%BB%AD2%E5%A4%A9%E5%8F%91%E5%B0%84%E5%BC%B9%E9%81%93%E5%AF%BC%E5%BC%B9%23) `127.1K 🔥` `NEW`
1. [多地有10级雷暴大风 (Category 10 thunderstorms and strong winds hit many places)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E6%9C%8910%E7%BA%A7%E9%9B%B7%E6%9A%B4%E5%A4%A7%E9%A3%8E%23) `124.6K 🔥` `NEW`
1. [金靖说明显感觉到张凌赫太火了](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E8%AF%B4%E6%98%8E%E6%98%BE%E6%84%9F%E8%A7%89%E5%88%B0%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%AA%E7%81%AB%E4%BA%86%23) `120.8K 🔥` `NEW`
1. [李佳琦说可能缺席两个季度直播](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E7%90%A6%E8%AF%B4%E5%8F%AF%E8%83%BD%E7%BC%BA%E5%B8%AD%E4%B8%A4%E4%B8%AA%E5%AD%A3%E5%BA%A6%E7%9B%B4%E6%92%AD%23) `119.3K 🔥` `NEW`
1. [以色列希望战事再持续至少1个月](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%B8%8C%E6%9C%9B%E6%88%98%E4%BA%8B%E5%86%8D%E6%8C%81%E7%BB%AD%E8%87%B3%E5%B0%911%E4%B8%AA%E6%9C%88%23) `115.5K 🔥` `NEW`
1. [浪姐白买版权](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%99%BD%E4%B9%B0%E7%89%88%E6%9D%83%23) `113.5K 🔥` `NEW`
1. [NCT](https://s.weibo.com/weibo?q=%23NCT%23) `110.1K 🔥` `NEW`
1. [失业的人可以从大冰这个角度找到机会](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E4%B8%9A%E7%9A%84%E4%BA%BA%E5%8F%AF%E4%BB%A5%E4%BB%8E%E5%A4%A7%E5%86%B0%E8%BF%99%E4%B8%AA%E8%A7%92%E5%BA%A6%E6%89%BE%E5%88%B0%E6%9C%BA%E4%BC%9A%23) `108.0K 🔥` `NEW`
1. [徐若晗拍的沈月](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%E6%8B%8D%E7%9A%84%E6%B2%88%E6%9C%88%23) `107.5K 🔥` `NEW`
1. [美伊都宣称赢了那谁输了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E9%83%BD%E5%AE%A3%E7%A7%B0%E8%B5%A2%E4%BA%86%E9%82%A3%E8%B0%81%E8%BE%93%E4%BA%86%23) `106.5K 🔥` `NEW`
1. [日本73岁老人来中国求职](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC73%E5%B2%81%E8%80%81%E4%BA%BA%E6%9D%A5%E4%B8%AD%E5%9B%BD%E6%B1%82%E8%81%8C%23) `105.3K 🔥` `NEW`
1. [小狗近视主人花800元给定制眼镜 (Myopic puppy’s owner spends 800 yuan on customized glasses)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E8%BF%91%E8%A7%86%E4%B8%BB%E4%BA%BA%E8%8A%B1800%E5%85%83%E7%BB%99%E5%AE%9A%E5%88%B6%E7%9C%BC%E9%95%9C%23) `103.2K 🔥` `NEW`
1. [金子涵说的是谁](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E8%AF%B4%E7%9A%84%E6%98%AF%E8%B0%81%23) `100.4K 🔥` `NEW`
1. [田曦薇活动发言](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%B4%BB%E5%8A%A8%E5%8F%91%E8%A8%80%23) `99.3K 🔥` `NEW`
1. [婆媳长期一起生活接连患乳腺癌](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%AA%B3%E9%95%BF%E6%9C%9F%E4%B8%80%E8%B5%B7%E7%94%9F%E6%B4%BB%E6%8E%A5%E8%BF%9E%E6%82%A3%E4%B9%B3%E8%85%BA%E7%99%8C%23) `92.7K 🔥` `NEW`
1. [NCT十周年预告](https://s.weibo.com/weibo?q=%23NCT%E5%8D%81%E5%91%A8%E5%B9%B4%E9%A2%84%E5%91%8A%23) `90.6K 🔥` `NEW`
1. [江语晨 抚养权官司](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%20%E6%8A%9A%E5%85%BB%E6%9D%83%E5%AE%98%E5%8F%B8%23) `75.2K 🔥` `NEW`
1. [黄金涨跌逻辑变了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E6%B6%A8%E8%B7%8C%E9%80%BB%E8%BE%91%E5%8F%98%E4%BA%86%23) `67.6K 🔥` `NEW`
1. [时代峰峻声明](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%A3%B0%E6%98%8E%23) `62.4K 🔥` `NEW`
1. [赵丽颖版楚乔传](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%89%88%E6%A5%9A%E4%B9%94%E4%BC%A0%23) `54.9K 🔥` `NEW`
1. [女子海景房择菜听到了鲸鱼叫](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B5%B7%E6%99%AF%E6%88%BF%E6%8B%A9%E8%8F%9C%E5%90%AC%E5%88%B0%E4%BA%86%E9%B2%B8%E9%B1%BC%E5%8F%AB%23) `52.4K 🔥` `NEW`
1. [五哈6口碑 (Wuha 6 word of mouth)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%886%E5%8F%A3%E7%A2%91%23) `51.9K 🔥` `NEW`
1. [美国一女副市长被枪杀](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E5%A5%B3%E5%89%AF%E5%B8%82%E9%95%BF%E8%A2%AB%E6%9E%AA%E6%9D%80%23) `51.2K 🔥` `NEW`
1. [蔡依林听了连夜收回版权](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%90%AC%E4%BA%86%E8%BF%9E%E5%A4%9C%E6%94%B6%E5%9B%9E%E7%89%88%E6%9D%83%23) `49.9K 🔥` `NEW`
1. [十日终焉官微 用户1231](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%AE%98%E5%BE%AE%20%E7%94%A8%E6%88%B71231%23) `48.6K 🔥` `NEW`
1. [吃了会肠胃胀气的食物](https://s.weibo.com/weibo?q=%23%E5%90%83%E4%BA%86%E4%BC%9A%E8%82%A0%E8%83%83%E8%83%80%E6%B0%94%E7%9A%84%E9%A3%9F%E7%89%A9%23) `47.3K 🔥` `NEW`
1. [王安宇去音综了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E5%8E%BB%E9%9F%B3%E7%BB%BC%E4%BA%86%23) `46.1K 🔥` `NEW`
1. [晒娃被网友催赶紧去医院宝妈发声](https://s.weibo.com/weibo?q=%23%E6%99%92%E5%A8%83%E8%A2%AB%E7%BD%91%E5%8F%8B%E5%82%AC%E8%B5%B6%E7%B4%A7%E5%8E%BB%E5%8C%BB%E9%99%A2%E5%AE%9D%E5%A6%88%E5%8F%91%E5%A3%B0%23) `44.8K 🔥` `NEW`
1. [浪姐](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `44.4K 🔥` `NEW`
1. [周杰伦给王俊凯杨迪变魔术](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%BB%99%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%9D%A8%E8%BF%AA%E5%8F%98%E9%AD%94%E6%9C%AF%23) `44.3K 🔥` `NEW`
1. [国际油价暴跌](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E6%B2%B9%E4%BB%B7%E6%9A%B4%E8%B7%8C%23) `43.5K 🔥` `NEW`
1. [优思益翻车假洋货热卖真责任谁来担 (Who is responsible for Usiyi's overturning of fake foreign goods selling well?)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E7%BF%BB%E8%BD%A6%E5%81%87%E6%B4%8B%E8%B4%A7%E7%83%AD%E5%8D%96%E7%9C%9F%E8%B4%A3%E4%BB%BB%E8%B0%81%E6%9D%A5%E6%8B%85%23) `41.9K 🔥` `NEW`
1. [杨幂冯湮儿路透](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%86%AF%E6%B9%AE%E5%84%BF%E8%B7%AF%E9%80%8F%23) `41.9K 🔥` `NEW`
1. [中俄提出霍尔木兹海峡问题决议草案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E6%8F%90%E5%87%BA%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E9%97%AE%E9%A2%98%E5%86%B3%E8%AE%AE%E8%8D%89%E6%A1%88%23) `40.8K 🔥` `NEW`
1. [大麦发了王俊凯](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BA%A6%E5%8F%91%E4%BA%86%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `40.8K 🔥` `NEW`
1. [长大后才意识到父母有多厉害](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E5%90%8E%E6%89%8D%E6%84%8F%E8%AF%86%E5%88%B0%E7%88%B6%E6%AF%8D%E6%9C%89%E5%A4%9A%E5%8E%89%E5%AE%B3%23) `40.6K 🔥` `NEW`
1. [白鹿美食博主](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BE%8E%E9%A3%9F%E5%8D%9A%E4%B8%BB%23) `39.5K 🔥` `NEW`
1. [康师傅再来一瓶被指无法兑奖](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E5%B8%88%E5%82%85%E5%86%8D%E6%9D%A5%E4%B8%80%E7%93%B6%E8%A2%AB%E6%8C%87%E6%97%A0%E6%B3%95%E5%85%91%E5%A5%96%23) `39.0K 🔥` `NEW`
1. [汪苏泷世巡旅行日记](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E4%B8%96%E5%B7%A1%E6%97%85%E8%A1%8C%E6%97%A5%E8%AE%B0%23) `39.0K 🔥` `NEW`
1. [上报78亿实际到账不足1亿](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%8A%A578%E4%BA%BF%E5%AE%9E%E9%99%85%E5%88%B0%E8%B4%A6%E4%B8%8D%E8%B6%B31%E4%BA%BF%23) `37.7K 🔥` `NEW`
1. [王皓希望王楚钦凝聚队魂](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E5%B8%8C%E6%9C%9B%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%87%9D%E8%81%9A%E9%98%9F%E9%AD%82%23) `37.5K 🔥` `NEW`

Updated at 2026-04-09 00:54:20

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
