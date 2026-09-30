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

1. [第五人格中国队摘金](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E4%B8%AD%E5%9B%BD%E9%98%9F%E6%91%98%E9%87%91%23) `4.7M 🔥` `NEW`
1. [迪拜航空确认航班发生事故](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E8%88%AA%E7%A9%BA%E7%A1%AE%E8%AE%A4%E8%88%AA%E7%8F%AD%E5%8F%91%E7%94%9F%E4%BA%8B%E6%95%85%23) `1.3M 🔥` `NEW`
1. [100秒看懂如何申办购房贷款贴息](https://s.weibo.com/weibo?q=%23100%E7%A7%92%E7%9C%8B%E6%87%82%E5%A6%82%E4%BD%95%E7%94%B3%E5%8A%9E%E8%B4%AD%E6%88%BF%E8%B4%B7%E6%AC%BE%E8%B4%B4%E6%81%AF%23) `989.2K 🔥` `NEW`
1. [创作官星档案](https://s.weibo.com/weibo?q=%23%E5%88%9B%E4%BD%9C%E5%AE%98%E6%98%9F%E6%A1%A3%E6%A1%88%23) `965.9K 🔥` `NEW`
1. [WTT回应王楚钦林诗栋退赛](https://s.weibo.com/weibo?q=%23WTT%E5%9B%9E%E5%BA%94%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%9E%97%E8%AF%97%E6%A0%8B%E9%80%80%E8%B5%9B%23) `945.2K 🔥` `NEW`
1. [兰香如故为什么停更](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E4%B8%BA%E4%BB%80%E4%B9%88%E5%81%9C%E6%9B%B4%23) `796.7K 🔥` `NEW`
1. [美人余定档](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BA%BA%E4%BD%99%E5%AE%9A%E6%A1%A3%23) `682.9K 🔥` `NEW`
1. [KPL光启定格赛场锋芒](https://s.weibo.com/weibo?q=%23KPL%E5%85%89%E5%90%AF%E5%AE%9A%E6%A0%BC%E8%B5%9B%E5%9C%BA%E9%94%8B%E8%8A%92%23) `630.6K 🔥` `NEW`
1. [穆欣月首位亚运电竞女子冠军](https://s.weibo.com/weibo?q=%23%E7%A9%86%E6%AC%A3%E6%9C%88%E9%A6%96%E4%BD%8D%E4%BA%9A%E8%BF%90%E7%94%B5%E7%AB%9E%E5%A5%B3%E5%AD%90%E5%86%A0%E5%86%9B%23) `552.1K 🔥` `NEW`
1. [为什么不喜欢全民发钱](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%96%9C%E6%AC%A2%E5%85%A8%E6%B0%91%E5%8F%91%E9%92%B1%23) `428.9K 🔥` `NEW`
1. [我家那闺女 剪辑](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%20%E5%89%AA%E8%BE%91%23) `418.5K 🔥` `NEW`
1. [郭晓东道歉](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E4%B8%9C%E9%81%93%E6%AD%89%23) `401.0K 🔥` `NEW`
1. [中科大博士涌向体制内](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%91%E5%A4%A7%E5%8D%9A%E5%A3%AB%E6%B6%8C%E5%90%91%E4%BD%93%E5%88%B6%E5%86%85%23) `396.8K 🔥` `NEW`
1. [只有李一桐有艺名](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E6%9D%8E%E4%B8%80%E6%A1%90%E6%9C%89%E8%89%BA%E5%90%8D%23) `372.7K 🔥` `NEW`
1. [第五人格颁奖](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E9%A2%81%E5%A5%96%23) `370.1K 🔥` `NEW`
1. [陈赫在意大利罗马被抢劫了两次](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%9C%A8%E6%84%8F%E5%A4%A7%E5%88%A9%E7%BD%97%E9%A9%AC%E8%A2%AB%E6%8A%A2%E5%8A%AB%E4%BA%86%E4%B8%A4%E6%AC%A1%23) `361.9K 🔥` `NEW`
1. [林诗栋受伤](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E5%8F%97%E4%BC%A4%23) `350.1K 🔥` `NEW`
1. [电视剧 二婚男主](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%20%E4%BA%8C%E5%A9%9A%E7%94%B7%E4%B8%BB%23) `347.5K 🔥` `NEW`
1. [桃晚安不愧是中国姑娘](https://s.weibo.com/weibo?q=%23%E6%A1%83%E6%99%9A%E5%AE%89%E4%B8%8D%E6%84%A7%E6%98%AF%E4%B8%AD%E5%9B%BD%E5%A7%91%E5%A8%98%23) `310.4K 🔥` `NEW`
1. [中国首位金牌电竞女选手桃晚安](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A6%96%E4%BD%8D%E9%87%91%E7%89%8C%E7%94%B5%E7%AB%9E%E5%A5%B3%E9%80%89%E6%89%8B%E6%A1%83%E6%99%9A%E5%AE%89%23) `307.7K 🔥` `NEW`
1. [荣耀高管回应Magic9销量](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E9%AB%98%E7%AE%A1%E5%9B%9E%E5%BA%94Magic9%E9%94%80%E9%87%8F%23) `305.0K 🔥` `NEW`
1. [当女生频繁做美甲之后](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%A5%B3%E7%94%9F%E9%A2%91%E7%B9%81%E5%81%9A%E7%BE%8E%E7%94%B2%E4%B9%8B%E5%90%8E%23) `304.8K 🔥` `NEW`
1. [这种大大方方真的招人喜欢](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%E7%9C%9F%E7%9A%84%E6%8B%9B%E4%BA%BA%E5%96%9C%E6%AC%A2%23) `304.1K 🔥` `NEW`
1. [昆明地震](https://s.weibo.com/weibo?q=%23%E6%98%86%E6%98%8E%E5%9C%B0%E9%9C%87%23) `301.1K 🔥` `NEW`
1. [迪拜航空客机事故最新画面](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E8%88%AA%E7%A9%BA%E5%AE%A2%E6%9C%BA%E4%BA%8B%E6%95%85%E6%9C%80%E6%96%B0%E7%94%BB%E9%9D%A2%23) `296.6K 🔥` `NEW`
1. [WTT](https://s.weibo.com/weibo?q=%23WTT%23) `288.9K 🔥` `NEW`
1. [沙玥儿 陈鹤文](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%8E%A5%E5%84%BF%20%E9%99%88%E9%B9%A4%E6%96%87%23) `288.8K 🔥` `NEW`
1. [曝利剑玫瑰导演没报飞天奖](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%A9%E5%89%91%E7%8E%AB%E7%91%B0%E5%AF%BC%E6%BC%94%E6%B2%A1%E6%8A%A5%E9%A3%9E%E5%A4%A9%E5%A5%96%23) `285.7K 🔥` `NEW`
1. [Tiffany月饼当事人已解散群聊](https://s.weibo.com/weibo?q=%23Tiffany%E6%9C%88%E9%A5%BC%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%B7%B2%E8%A7%A3%E6%95%A3%E7%BE%A4%E8%81%8A%23) `277.5K 🔥` `NEW`
1. [第五人格亚运会决赛](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%86%B3%E8%B5%9B%23) `246.9K 🔥` `NEW`
1. [王楚钦林诗栋因伤退赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%9E%97%E8%AF%97%E6%A0%8B%E5%9B%A0%E4%BC%A4%E9%80%80%E8%B5%9B%23) `244.9K 🔥` `NEW`
1. [魅影神捕定档](https://s.weibo.com/weibo?q=%23%E9%AD%85%E5%BD%B1%E7%A5%9E%E6%8D%95%E5%AE%9A%E6%A1%A3%23) `220.3K 🔥` `NEW`
1. [WTT中国大满贯2026](https://s.weibo.com/weibo?q=%23WTT%E4%B8%AD%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF2026%23) `182.1K 🔥` `NEW`
1. [胃癌在早期没有明显症状](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E5%9C%A8%E6%97%A9%E6%9C%9F%E6%B2%A1%E6%9C%89%E6%98%8E%E6%98%BE%E7%97%87%E7%8A%B6%23) `174.1K 🔥` `NEW`
1. [陈丽君杨肸子祝姑娘路透](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E6%9D%A8%E8%82%B8%E5%AD%90%E7%A5%9D%E5%A7%91%E5%A8%98%E8%B7%AF%E9%80%8F%23) `172.8K 🔥` `NEW`
1. [林志玲容貌和气质都大不如前了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E7%8E%B2%E5%AE%B9%E8%B2%8C%E5%92%8C%E6%B0%94%E8%B4%A8%E9%83%BD%E5%A4%A7%E4%B8%8D%E5%A6%82%E5%89%8D%E4%BA%86%23) `158.1K 🔥` `NEW`
1. [GR恭喜石祥威卢树嘉](https://s.weibo.com/weibo?q=%23GR%E6%81%AD%E5%96%9C%E7%9F%B3%E7%A5%A5%E5%A8%81%E5%8D%A2%E6%A0%91%E5%98%89%23) `156.0K 🔥` `NEW`
1. [蒋欣为了控制体重好几天没吃主食](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%E4%B8%BA%E4%BA%86%E6%8E%A7%E5%88%B6%E4%BD%93%E9%87%8D%E5%A5%BD%E5%87%A0%E5%A4%A9%E6%B2%A1%E5%90%83%E4%B8%BB%E9%A3%9F%23) `149.0K 🔥` `NEW`
1. [女子学法帮130个遭家内性侵孩子维权](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AD%A6%E6%B3%95%E5%B8%AE130%E4%B8%AA%E9%81%AD%E5%AE%B6%E5%86%85%E6%80%A7%E4%BE%B5%E5%AD%A9%E5%AD%90%E7%BB%B4%E6%9D%83%23) `139.2K 🔥` `NEW`
1. [ivl](https://s.weibo.com/weibo?q=%23ivl%23) `138.4K 🔥` `NEW`
1. [迪拜航空乘客帮助飞行员控制了飞机](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E8%88%AA%E7%A9%BA%E4%B9%98%E5%AE%A2%E5%B8%AE%E5%8A%A9%E9%A3%9E%E8%A1%8C%E5%91%98%E6%8E%A7%E5%88%B6%E4%BA%86%E9%A3%9E%E6%9C%BA%23) `131.4K 🔥` `NEW`
1. [金价跌回8字头年轻人仍攒金](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E5%9B%9E8%E5%AD%97%E5%A4%B4%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%BB%8D%E6%94%92%E9%87%91%23) `130.0K 🔥` `NEW`
1. [王皓回应每一个位置的责任](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E5%9B%9E%E5%BA%94%E6%AF%8F%E4%B8%80%E4%B8%AA%E4%BD%8D%E7%BD%AE%E7%9A%84%E8%B4%A3%E4%BB%BB%23) `129.1K 🔥` `NEW`
1. [兰香如故 团综](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%20%E5%9B%A2%E7%BB%BC%23) `127.7K 🔥` `NEW`
1. [边伯贤泡泡停用](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E4%BC%AF%E8%B4%A4%E6%B3%A1%E6%B3%A1%E5%81%9C%E7%94%A8%23) `122.4K 🔥` `NEW`
1. [兰香如故 停更会出事](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%20%E5%81%9C%E6%9B%B4%E4%BC%9A%E5%87%BA%E4%BA%8B%23) `122.0K 🔥` `NEW`
1. [妈妈拿巨型碗劝2米01儿子好好吃饭](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%8B%BF%E5%B7%A8%E5%9E%8B%E7%A2%97%E5%8A%9D2%E7%B1%B301%E5%84%BF%E5%AD%90%E5%A5%BD%E5%A5%BD%E5%90%83%E9%A5%AD%23) `121.8K 🔥` `NEW`
1. [第五人格竟然有女选手](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E7%AB%9F%E7%84%B6%E6%9C%89%E5%A5%B3%E9%80%89%E6%89%8B%23) `121.4K 🔥` `NEW`
1. [男子用土豆当主食半年瘦25斤](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%94%A8%E5%9C%9F%E8%B1%86%E5%BD%93%E4%B8%BB%E9%A3%9F%E5%8D%8A%E5%B9%B4%E7%98%A625%E6%96%A4%23) `120.4K 🔥` `NEW`
1. [DeepSeek官宣开源升腾基础组件](https://s.weibo.com/weibo?q=%23DeepSeek%E5%AE%98%E5%AE%A3%E5%BC%80%E6%BA%90%E5%8D%87%E8%85%BE%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%23) `120.4K 🔥` `NEW`
1. [飞天奖提名名单](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E5%A4%A9%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `428.0K 🔥`

Updated at 2026-09-30 23:12:18

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
