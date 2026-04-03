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

1. [浪姐今晚不淘汰 (Sister Lang will not be eliminated tonight)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BB%8A%E6%99%9A%E4%B8%8D%E6%B7%98%E6%B1%B0%23) `1.1M 🔥` `NEW`
1. [与辉同行宣布全额退款](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E8%BE%89%E5%90%8C%E8%A1%8C%E5%AE%A3%E5%B8%83%E5%85%A8%E9%A2%9D%E9%80%80%E6%AC%BE%23) `826.3K 🔥` `NEW`
1. [赏花踏青特色主题专列来了](https://s.weibo.com/weibo?q=%23%E8%B5%8F%E8%8A%B1%E8%B8%8F%E9%9D%92%E7%89%B9%E8%89%B2%E4%B8%BB%E9%A2%98%E4%B8%93%E5%88%97%E6%9D%A5%E4%BA%86%23) `618.9K 🔥` `NEW`
1. [优思益称无力售后](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E7%A7%B0%E6%97%A0%E5%8A%9B%E5%94%AE%E5%90%8E%23) `213.1K 🔥` `NEW`
1. [马兴瑞被查](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%B4%E7%91%9E%E8%A2%AB%E6%9F%A5%23) `210.9K 🔥` `NEW`
1. [浪姐改赛制](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%94%B9%E8%B5%9B%E5%88%B6%23) `206.6K 🔥` `NEW`
1. [工信部紧急提醒苹果用户](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BF%A1%E9%83%A8%E7%B4%A7%E6%80%A5%E6%8F%90%E9%86%92%E8%8B%B9%E6%9E%9C%E7%94%A8%E6%88%B7%23) `202.0K 🔥` `NEW`
1. [当你过午不食六个月](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E8%BF%87%E5%8D%88%E4%B8%8D%E9%A3%9F%E5%85%AD%E4%B8%AA%E6%9C%88%23) `195.6K 🔥` `NEW`
1. [以色列铁穹被伊朗击穿](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%93%81%E7%A9%B9%E8%A2%AB%E4%BC%8A%E6%9C%97%E5%87%BB%E7%A9%BF%23) `193.1K 🔥` `NEW`
1. [没有一诺的AG](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E4%B8%80%E8%AF%BA%E7%9A%84AG%23) `186.0K 🔥` `NEW`
1. [浪姐排名 (Sister Lang ranking)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `181.5K 🔥` `NEW`
1. [张若昀发唐艺昕直拍](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E5%8F%91%E5%94%90%E8%89%BA%E6%98%95%E7%9B%B4%E6%8B%8D%23) `177.8K 🔥` `NEW`
1. [金昊已被执行死刑](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%98%8A%E5%B7%B2%E8%A2%AB%E6%89%A7%E8%A1%8C%E6%AD%BB%E5%88%91%23) `170.4K 🔥` `NEW`
1. [黄灿灿赢了何宣林](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E8%B5%A2%E4%BA%86%E4%BD%95%E5%AE%A3%E6%9E%97%23) `165.4K 🔥` `NEW`
1. [何宣林 黑马](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%20%E9%BB%91%E9%A9%AC%23) `158.5K 🔥` `NEW`
1. [cpb减肥法](https://s.weibo.com/weibo?q=%23cpb%E5%87%8F%E8%82%A5%E6%B3%95%23) `157.3K 🔥` `NEW`
1. [唐艺昕因皮肤原因4年未拍戏](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%9B%A0%E7%9A%AE%E8%82%A4%E5%8E%9F%E5%9B%A04%E5%B9%B4%E6%9C%AA%E6%8B%8D%E6%88%8F%23) `145.6K 🔥` `NEW`
1. [阚清子 尊重游戏规则](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%20%E5%B0%8A%E9%87%8D%E6%B8%B8%E6%88%8F%E8%A7%84%E5%88%99%23) `143.5K 🔥` `NEW`
1. [男子发私照让豆包测评身材被封号](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8F%91%E7%A7%81%E7%85%A7%E8%AE%A9%E8%B1%86%E5%8C%85%E6%B5%8B%E8%AF%84%E8%BA%AB%E6%9D%90%E8%A2%AB%E5%B0%81%E5%8F%B7%23) `117.8K 🔥` `NEW`
1. [兰州大学惊现虐猫房车](https://s.weibo.com/weibo?q=%23%E5%85%B0%E5%B7%9E%E5%A4%A7%E5%AD%A6%E6%83%8A%E7%8E%B0%E8%99%90%E7%8C%AB%E6%88%BF%E8%BD%A6%23) `111.2K 🔥` `NEW`
1. [何宣林 给短人争气 (He Xuanlin gives credit to the short man)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%20%E7%BB%99%E7%9F%AD%E4%BA%BA%E4%BA%89%E6%B0%94%23) `107.8K 🔥` `NEW`
1. [谁来救救代斯](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%A5%E6%95%91%E6%95%91%E4%BB%A3%E6%96%AF%23) `106.7K 🔥` `NEW`
1. [东部战区发布海报为了这个省](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E5%8F%91%E5%B8%83%E6%B5%B7%E6%8A%A5%E4%B8%BA%E4%BA%86%E8%BF%99%E4%B8%AA%E7%9C%81%23) `100.8K 🔥` `NEW`
1. [阚清子唱哭了](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%94%B1%E5%93%AD%E4%BA%86%23) `100.1K 🔥` `NEW`
1. [优思益发布海外工厂情况声明](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E5%8F%91%E5%B8%83%E6%B5%B7%E5%A4%96%E5%B7%A5%E5%8E%82%E6%83%85%E5%86%B5%E5%A3%B0%E6%98%8E%23) `94.0K 🔥` `NEW`
1. [温峥嵘 二重唱](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%20%E4%BA%8C%E9%87%8D%E5%94%B1%23) `93.8K 🔥` `NEW`
1. [王俊凯东方公子](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%9C%E6%96%B9%E5%85%AC%E5%AD%90%23) `93.1K 🔥` `NEW`
1. [王楚钦说不应该因比赛成绩嘲笑运动员](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E4%B8%8D%E5%BA%94%E8%AF%A5%E5%9B%A0%E6%AF%94%E8%B5%9B%E6%88%90%E7%BB%A9%E5%98%B2%E7%AC%91%E8%BF%90%E5%8A%A8%E5%91%98%23) `92.8K 🔥` `NEW`
1. [孙怡 好美的洋娃娃](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E5%A5%BD%E7%BE%8E%E7%9A%84%E6%B4%8B%E5%A8%83%E5%A8%83%23) `91.8K 🔥` `NEW`
1. [张凌赫因为帅被同学偷拍](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%A0%E4%B8%BA%E5%B8%85%E8%A2%AB%E5%90%8C%E5%AD%A6%E5%81%B7%E6%8B%8D%23) `90.0K 🔥` `NEW`
1. [被指抄袭的日本奶茶用中国制茶工艺 (Japanese milk tea accused of plagiarism uses Chinese tea making process)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%8C%87%E6%8A%84%E8%A2%AD%E7%9A%84%E6%97%A5%E6%9C%AC%E5%A5%B6%E8%8C%B6%E7%94%A8%E4%B8%AD%E5%9B%BD%E5%88%B6%E8%8C%B6%E5%B7%A5%E8%89%BA%23) `88.1K 🔥` `NEW`
1. [乌兰图雅骑着马上台接受采访](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%E9%AA%91%E7%9D%80%E9%A9%AC%E4%B8%8A%E5%8F%B0%E6%8E%A5%E5%8F%97%E9%87%87%E8%AE%BF%23) `87.3K 🔥` `NEW`
1. [谢娜李小冉亲了](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%9D%8E%E5%B0%8F%E5%86%89%E4%BA%B2%E4%BA%86%23) `86.2K 🔥` `NEW`
1. [AG对战狼队](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98%E7%8B%BC%E9%98%9F%23) `84.1K 🔥` `NEW`
1. [王橹杰画的咴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%94%BB%E7%9A%84%E5%92%B4%23) `84.0K 🔥` `NEW`
1. [周杰伦演唱会](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `84.0K 🔥` `NEW`
1. [王楚钦11比13F勒布伦](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A611%E6%AF%9413F%E5%8B%92%E5%B8%83%E4%BC%A6%23) `83.9K 🔥` `NEW`
1. [王楚钦直言0比2落后真没机会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%9B%B4%E8%A8%800%E6%AF%942%E8%90%BD%E5%90%8E%E7%9C%9F%E6%B2%A1%E6%9C%BA%E4%BC%9A%23) `83.1K 🔥` `NEW`
1. [孩子一张口身份证掉出来了](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E4%B8%80%E5%BC%A0%E5%8F%A3%E8%BA%AB%E4%BB%BD%E8%AF%81%E6%8E%89%E5%87%BA%E6%9D%A5%E4%BA%86%23) `81.7K 🔥` `NEW`
1. [李马克解约退团](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A9%AC%E5%85%8B%E8%A7%A3%E7%BA%A6%E9%80%80%E5%9B%A2%23) `78.1K 🔥` `NEW`
1. [石明鑫脑王 (Shi Mingxin Brain King)](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E6%98%8E%E9%91%AB%E8%84%91%E7%8E%8B%23) `76.7K 🔥` `NEW`
1. [女生午睡5小时被领导警告发视频哭诉](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%8D%88%E7%9D%A15%E5%B0%8F%E6%97%B6%E8%A2%AB%E9%A2%86%E5%AF%BC%E8%AD%A6%E5%91%8A%E5%8F%91%E8%A7%86%E9%A2%91%E5%93%AD%E8%AF%89%23) `73.5K 🔥` `NEW`
1. [范玮琪416票](https://s.weibo.com/weibo?q=%23%E8%8C%83%E7%8E%AE%E7%90%AA416%E7%A5%A8%23) `70.6K 🔥` `NEW`
1. [美证实一架战斗机在伊境内被击落](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%AF%81%E5%AE%9E%E4%B8%80%E6%9E%B6%E6%88%98%E6%96%97%E6%9C%BA%E5%9C%A8%E4%BC%8A%E5%A2%83%E5%86%85%E8%A2%AB%E5%87%BB%E8%90%BD%23) `69.6K 🔥` `NEW`
1. [宋雨琦迪士尼公主](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%85%AC%E4%B8%BB%23) `68.5K 🔥` `NEW`
1. [女子称猫咪被卡自动猫砂盆死亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E7%8C%AB%E5%92%AA%E8%A2%AB%E5%8D%A1%E8%87%AA%E5%8A%A8%E7%8C%AB%E7%A0%82%E7%9B%86%E6%AD%BB%E4%BA%A1%23) `65.7K 🔥` `NEW`
1. [油价突然暴涨原因](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E7%AA%81%E7%84%B6%E6%9A%B4%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `64.4K 🔥` `NEW`
1. [赵本山女儿回应被骂网络乞丐](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9C%AC%E5%B1%B1%E5%A5%B3%E5%84%BF%E5%9B%9E%E5%BA%94%E8%A2%AB%E9%AA%82%E7%BD%91%E7%BB%9C%E4%B9%9E%E4%B8%90%23) `63.9K 🔥` `NEW`
1. [老爸评测涉多起纠纷](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B8%E8%AF%84%E6%B5%8B%E6%B6%89%E5%A4%9A%E8%B5%B7%E7%BA%A0%E7%BA%B7%23) `63.7K 🔥` `NEW`

Updated at 2026-04-04 00:01:09

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
