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

1. [侯明昊歌声和脸一样能打 (Hou Minghao’s singing voice is as impressive as his face)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%AD%8C%E5%A3%B0%E5%92%8C%E8%84%B8%E4%B8%80%E6%A0%B7%E8%83%BD%E6%89%93%23) `13.6M 🔥` `NEW`
1. [歌手排名](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `4.1M 🔥` `NEW`
1. [各地端午民俗](https://s.weibo.com/weibo?q=%23%E5%90%84%E5%9C%B0%E7%AB%AF%E5%8D%88%E6%B0%91%E4%BF%97%23) `2.5M 🔥` `NEW`
1. [张月团928票](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%9B%A2928%E7%A5%A8%23) `2.1M 🔥` `NEW`
1. [EDG八番战PRX](https://s.weibo.com/weibo?q=%23EDG%E5%85%AB%E7%95%AA%E6%88%98PRX%23) `2.1M 🔥` `NEW`
1. [心引力开场 灾难](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%BC%95%E5%8A%9B%E5%BC%80%E5%9C%BA%20%E7%81%BE%E9%9A%BE%23) `2.1M 🔥` `NEW`
1. [特朗普和高市早苗因珍珠港发生争吵](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%92%8C%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%9B%A0%E7%8F%8D%E7%8F%A0%E6%B8%AF%E5%8F%91%E7%94%9F%E4%BA%89%E5%90%B5%23) `2.1M 🔥` `NEW`
1. [林诗栋1比3宇田幸矢](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B1%E6%AF%943%E5%AE%87%E7%94%B0%E5%B9%B8%E7%9F%A2%23) `2.1M 🔥` `NEW`
1. [杨坤淘汰](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%9D%A4%E6%B7%98%E6%B1%B0%23) `2.1M 🔥` `NEW`
1. [半裸救人被质疑不穿上衣贴近女性](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E8%A3%B8%E6%95%91%E4%BA%BA%E8%A2%AB%E8%B4%A8%E7%96%91%E4%B8%8D%E7%A9%BF%E4%B8%8A%E8%A1%A3%E8%B4%B4%E8%BF%91%E5%A5%B3%E6%80%A7%23) `2.0M 🔥` `NEW`
1. [侯明昊晋级 (Hou Minghao advanced)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%99%8B%E7%BA%A7%23) `2.0M 🔥` `NEW`
1. [张远 刘美含](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%20%E5%88%98%E7%BE%8E%E5%90%AB%23) `2.0M 🔥` `NEW`
1. [歌手 误入KTV](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%20%E8%AF%AF%E5%85%A5KTV%23) `2.0M 🔥` `NEW`
1. [心引力编曲 拉完了](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%BC%95%E5%8A%9B%E7%BC%96%E6%9B%B2%20%E6%8B%89%E5%AE%8C%E4%BA%86%23) `2.0M 🔥` `NEW`
1. [端午假期第一天2.4亿人次跨区域流动](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E5%8D%88%E5%81%87%E6%9C%9F%E7%AC%AC%E4%B8%80%E5%A4%A92.4%E4%BA%BF%E4%BA%BA%E6%AC%A1%E8%B7%A8%E5%8C%BA%E5%9F%9F%E6%B5%81%E5%8A%A8%23) `2.0M 🔥` `NEW`
1. [河南正阳介入调查河水污染农作物](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%AD%A3%E9%98%B3%E4%BB%8B%E5%85%A5%E8%B0%83%E6%9F%A5%E6%B2%B3%E6%B0%B4%E6%B1%A1%E6%9F%93%E5%86%9C%E4%BD%9C%E7%89%A9%23) `2.0M 🔥` `NEW`
1. [那时雨 一会好听一会难听](https://s.weibo.com/weibo?q=%23%E9%82%A3%E6%97%B6%E9%9B%A8%20%E4%B8%80%E4%BC%9A%E5%A5%BD%E5%90%AC%E4%B8%80%E4%BC%9A%E9%9A%BE%E5%90%AC%23) `1.9M 🔥` `NEW`
1. [AG对战KSG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98KSG%23) `1.9M 🔥` `NEW`
1. [孙怡何宣林看到分数震惊了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E4%BD%95%E5%AE%A3%E6%9E%97%E7%9C%8B%E5%88%B0%E5%88%86%E6%95%B0%E9%9C%87%E6%83%8A%E4%BA%86%23) `1.9M 🔥` `NEW`
1. [苏醒手怎么了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E6%89%8B%E6%80%8E%E4%B9%88%E4%BA%86%23) `1.9M 🔥` `NEW`
1. [越南前女首富爱马仕包拍出44万美元 (Hermès bag sold by Vietnam’s former richest woman for $440,000 at auction)](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E5%89%8D%E5%A5%B3%E9%A6%96%E5%AF%8C%E7%88%B1%E9%A9%AC%E4%BB%95%E5%8C%85%E6%8B%8D%E5%87%BA44%E4%B8%87%E7%BE%8E%E5%85%83%23) `1.9M 🔥` `NEW`
1. [世界杯韩国还没出局但转播商破产了](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E9%9F%A9%E5%9B%BD%E8%BF%98%E6%B2%A1%E5%87%BA%E5%B1%80%E4%BD%86%E8%BD%AC%E6%92%AD%E5%95%86%E7%A0%B4%E4%BA%A7%E4%BA%86%23) `1.9M 🔥` `NEW`
1. [法国女排vs中国女排](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%A5%B3%E6%8E%92vs%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92%23) `1.9M 🔥` `NEW`
1. [机场能不能开个洗头店](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%9C%BA%E8%83%BD%E4%B8%8D%E8%83%BD%E5%BC%80%E4%B8%AA%E6%B4%97%E5%A4%B4%E5%BA%97%23) `1.9M 🔥` `NEW`
1. [杨坤把齐豫都唱老了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%9D%A4%E6%8A%8A%E9%BD%90%E8%B1%AB%E9%83%BD%E5%94%B1%E8%80%81%E4%BA%86%23) `1.8M 🔥` `NEW`
1. [陈瑶好A](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E5%A5%BDA%23) `1.8M 🔥` `NEW`
1. [浪姐排名](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `1.8M 🔥` `NEW`
1. [黄灿灿七rap一](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E4%B8%83rap%E4%B8%80%23) `1.8M 🔥` `NEW`
1. [女子外出次日情夫车内发现其遗体](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%A4%96%E5%87%BA%E6%AC%A1%E6%97%A5%E6%83%85%E5%A4%AB%E8%BD%A6%E5%86%85%E5%8F%91%E7%8E%B0%E5%85%B6%E9%81%97%E4%BD%93%23) `1.8M 🔥` `NEW`
1. [杨坤 跑调](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%9D%A4%20%E8%B7%91%E8%B0%83%23) `1.8M 🔥` `NEW`
1. [王传君到王鹤棣家做饭 (Wang Chuanjun went to Wang Hedi's house to cook)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E5%88%B0%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AE%B6%E5%81%9A%E9%A5%AD%23) `1.8M 🔥` `NEW`
1. [伊朗小学遭袭调查报告恐被封存](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B0%8F%E5%AD%A6%E9%81%AD%E8%A2%AD%E8%B0%83%E6%9F%A5%E6%8A%A5%E5%91%8A%E6%81%90%E8%A2%AB%E5%B0%81%E5%AD%98%23) `1.8M 🔥` `NEW`
1. [王濛一个人念叨啥呢](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%BF%B5%E5%8F%A8%E5%95%A5%E5%91%A2%23) `1.8M 🔥` `NEW`
1. [土耳其父亲托举女儿15年成长变化图](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%E7%88%B6%E4%BA%B2%E6%89%98%E4%B8%BE%E5%A5%B3%E5%84%BF15%E5%B9%B4%E6%88%90%E9%95%BF%E5%8F%98%E5%8C%96%E5%9B%BE%23) `1.7M 🔥` `NEW`
1. [浪姐别为难老奶行吗](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%88%AB%E4%B8%BA%E9%9A%BE%E8%80%81%E5%A5%B6%E8%A1%8C%E5%90%97%23) `1.7M 🔥` `NEW`
1. [刘惜君 音色的神](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%83%9C%E5%90%9B%20%E9%9F%B3%E8%89%B2%E7%9A%84%E7%A5%9E%23) `1.7M 🔥` `NEW`
1. [万妮达 留下来](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%20%E7%95%99%E4%B8%8B%E6%9D%A5%23) `1.7M 🔥` `NEW`
1. [AG剧透](https://s.weibo.com/weibo?q=%23AG%E5%89%A7%E9%80%8F%23) `1.7M 🔥` `NEW`
1. [张远戏腔](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E6%88%8F%E8%85%94%23) `1.7M 🔥` `NEW`
1. [线上极速达害了山姆](https://s.weibo.com/weibo?q=%23%E7%BA%BF%E4%B8%8A%E6%9E%81%E9%80%9F%E8%BE%BE%E5%AE%B3%E4%BA%86%E5%B1%B1%E5%A7%86%23) `1.7M 🔥` `NEW`
1. [阿尔及利亚申诉梅西逃红牌 (Algeria complains that Messi escaped red card)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%B0%94%E5%8F%8A%E5%88%A9%E4%BA%9A%E7%94%B3%E8%AF%89%E6%A2%85%E8%A5%BF%E9%80%83%E7%BA%A2%E7%89%8C%23) `1.6M 🔥` `NEW`
1. [京东超市请客看电影 (Jingdong supermarket treats guests to watch movies)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E8%B6%85%E5%B8%82%E8%AF%B7%E5%AE%A2%E7%9C%8B%E7%94%B5%E5%BD%B1%23) `2.2M 🔥` `+382%`
1. [C罗球迷攻陷内维斯女友社媒](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%90%83%E8%BF%B7%E6%94%BB%E9%99%B7%E5%86%85%E7%BB%B4%E6%96%AF%E5%A5%B3%E5%8F%8B%E7%A4%BE%E5%AA%92%23) `2.1M 🔥` `+370%`
1. [深圳机场 sorry (shenzhen airport sorry)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%9C%BA%E5%9C%BA%20sorry%23) `2.1M 🔥` `+77%`
1. [歌手直播](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%23) `2.0M 🔥` `+346%`
1. [直观感受到了气质的重要性](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E8%A7%82%E6%84%9F%E5%8F%97%E5%88%B0%E4%BA%86%E6%B0%94%E8%B4%A8%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7%23) `2.0M 🔥` `+339%`
1. [浪姐直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `2.0M 🔥` `+255%`
1. [20周年版iPhone被曝独享台积电制程](https://s.weibo.com/weibo?q=%2320%E5%91%A8%E5%B9%B4%E7%89%88iPhone%E8%A2%AB%E6%9B%9D%E7%8B%AC%E4%BA%AB%E5%8F%B0%E7%A7%AF%E7%94%B5%E5%88%B6%E7%A8%8B%23) `1.9M 🔥` `+335%`
1. [男生有大事之前先别理发](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%9C%89%E5%A4%A7%E4%BA%8B%E4%B9%8B%E5%89%8D%E5%85%88%E5%88%AB%E7%90%86%E5%8F%91%23) `1.8M 🔥` `+231%`
1. [中国造纸学会回应纸尿裤事件](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%80%A0%E7%BA%B8%E5%AD%A6%E4%BC%9A%E5%9B%9E%E5%BA%94%E7%BA%B8%E5%B0%BF%E8%A3%A4%E4%BA%8B%E4%BB%B6%23) `1.7M 🔥` `+346%`
1. [卡布里蓝是什么味道 (What does capri blue taste like?)](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E5%B8%83%E9%87%8C%E8%93%9D%E6%98%AF%E4%BB%80%E4%B9%88%E5%91%B3%E9%81%93%23) `1.7M 🔥` `+284%`

Updated at 2026-06-19 22:31:10

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
