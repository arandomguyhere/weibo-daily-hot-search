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

1. [爱奇艺 (iQiyi)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%23) `9.3M 🔥` `NEW`
1. [日本7.4级地震](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.4%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `4.2M 🔥` `NEW`
1. [未授权AI艺人](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%8E%88%E6%9D%83AI%E8%89%BA%E4%BA%BA%23) `2.7M 🔥` `NEW`
1. [2025年我国人均读书8.39本](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E6%88%91%E5%9B%BD%E4%BA%BA%E5%9D%87%E8%AF%BB%E4%B9%A68.39%E6%9C%AC%23) `1.8M 🔥` `NEW`
1. [爱奇艺 穷疯了也得有底线](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%20%E7%A9%B7%E7%96%AF%E4%BA%86%E4%B9%9F%E5%BE%97%E6%9C%89%E5%BA%95%E7%BA%BF%23) `1.5M 🔥` `NEW`
1. [华为Pura90价格](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPura90%E4%BB%B7%E6%A0%BC%23) `967.1K 🔥` `NEW`
1. [微博智搜帮你评论区一键梳理脉络](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%99%BA%E6%90%9C%E5%B8%AE%E4%BD%A0%E8%AF%84%E8%AE%BA%E5%8C%BA%E4%B8%80%E9%94%AE%E6%A2%B3%E7%90%86%E8%84%89%E7%BB%9C%23) `874.2K 🔥` `NEW`
1. [爱奇艺将转型成非中心化社交媒体](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E5%B0%86%E8%BD%AC%E5%9E%8B%E6%88%90%E9%9D%9E%E4%B8%AD%E5%BF%83%E5%8C%96%E7%A4%BE%E4%BA%A4%E5%AA%92%E4%BD%93%23) `544.8K 🔥` `NEW`
1. [华为PuraXMax](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXMax%23) `514.7K 🔥` `NEW`
1. [西双版纳通报女子被围堵泼水事件](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%8F%8C%E7%89%88%E7%BA%B3%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%9B%B4%E5%A0%B5%E6%B3%BC%E6%B0%B4%E4%BA%8B%E4%BB%B6%23) `410.4K 🔥` `NEW`
1. [四川地震 (Sichuan earthquake)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87%23) `400.8K 🔥` `NEW`
1. [爱奇艺十部剧赚了67亿](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E5%8D%81%E9%83%A8%E5%89%A7%E8%B5%9A%E4%BA%8667%E4%BA%BF%23) `399.2K 🔥` `NEW`
1. [温峥嵘听劝回去拍戏了](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E5%90%AC%E5%8A%9D%E5%9B%9E%E5%8E%BB%E6%8B%8D%E6%88%8F%E4%BA%86%23) `399.2K 🔥` `NEW`
1. [华为pura90](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BApura90%23) `397.2K 🔥` `NEW`
1. [美媒承认中国年轻人对美国幻灭了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E6%89%BF%E8%AE%A4%E4%B8%AD%E5%9B%BD%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%AF%B9%E7%BE%8E%E5%9B%BD%E5%B9%BB%E7%81%AD%E4%BA%86%23) `324.5K 🔥` `NEW`
1. [Pura90ProMax超大底2亿长焦](https://s.weibo.com/weibo?q=%23Pura90ProMax%E8%B6%85%E5%A4%A7%E5%BA%952%E4%BA%BF%E9%95%BF%E7%84%A6%23) `324.4K 🔥` `NEW`
1. [1岁男童基因突变患癌症晚期](https://s.weibo.com/weibo?q=%231%E5%B2%81%E7%94%B7%E7%AB%A5%E5%9F%BA%E5%9B%A0%E7%AA%81%E5%8F%98%E6%82%A3%E7%99%8C%E7%97%87%E6%99%9A%E6%9C%9F%23) `324.1K 🔥` `NEW`
1. [张凌赫王楚然剧宣](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%89%A7%E5%AE%A3%23) `323.2K 🔥` `NEW`
1. [华为Pura90超清20倍长焦视频](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPura90%E8%B6%85%E6%B8%8520%E5%80%8D%E9%95%BF%E7%84%A6%E8%A7%86%E9%A2%91%23) `323.1K 🔥` `NEW`
1. [被围堵泼水女子未报警](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%9B%B4%E5%A0%B5%E6%B3%BC%E6%B0%B4%E5%A5%B3%E5%AD%90%E6%9C%AA%E6%8A%A5%E8%AD%A6%23) `322.8K 🔥` `NEW`
1. [白鹿新买的阿贝贝 (Bailu’s new Abeibei)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B0%E4%B9%B0%E7%9A%84%E9%98%BF%E8%B4%9D%E8%B4%9D%23) `322.7K 🔥` `NEW`
1. [重点中学高三生被抓微信零钱20多万](https://s.weibo.com/weibo?q=%23%E9%87%8D%E7%82%B9%E4%B8%AD%E5%AD%A6%E9%AB%98%E4%B8%89%E7%94%9F%E8%A2%AB%E6%8A%93%E5%BE%AE%E4%BF%A1%E9%9B%B6%E9%92%B120%E5%A4%9A%E4%B8%87%23) `322.2K 🔥` `NEW`
1. [男子发现扔烟头处不长草决定戒烟](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8F%91%E7%8E%B0%E6%89%94%E7%83%9F%E5%A4%B4%E5%A4%84%E4%B8%8D%E9%95%BF%E8%8D%89%E5%86%B3%E5%AE%9A%E6%88%92%E7%83%9F%23) `321.9K 🔥` `NEW`
1. [五月天怪兽二胎得子](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%9C%88%E5%A4%A9%E6%80%AA%E5%85%BD%E4%BA%8C%E8%83%8E%E5%BE%97%E5%AD%90%23) `321.7K 🔥` `NEW`
1. [看完你还敢咬指甲吗](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%AE%8C%E4%BD%A0%E8%BF%98%E6%95%A2%E5%92%AC%E6%8C%87%E7%94%B2%E5%90%97%23) `321.6K 🔥` `NEW`
1. [张杰就这么突然搂住了谢娜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%B0%B1%E8%BF%99%E4%B9%88%E7%AA%81%E7%84%B6%E6%90%82%E4%BD%8F%E4%BA%86%E8%B0%A2%E5%A8%9C%23) `305.8K 🔥` `NEW`
1. [卖脸](https://s.weibo.com/weibo?q=%23%E5%8D%96%E8%84%B8%23) `296.5K 🔥` `NEW`
1. [陈哲远对接否认签署AI授权](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E5%AF%B9%E6%8E%A5%E5%90%A6%E8%AE%A4%E7%AD%BE%E7%BD%B2AI%E6%8E%88%E6%9D%83%23) `267.5K 🔥` `NEW`
1. [方博宣布复出](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%8D%9A%E5%AE%A3%E5%B8%83%E5%A4%8D%E5%87%BA%23) `264.0K 🔥` `NEW`
1. [男子进减肥训练营仅3天身亡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BF%9B%E5%87%8F%E8%82%A5%E8%AE%AD%E7%BB%83%E8%90%A5%E4%BB%853%E5%A4%A9%E8%BA%AB%E4%BA%A1%23) `263.7K 🔥` `NEW`
1. [严浩翔7秒的part切了17次分镜 (Yan Haoxiang’s 7-second part was cut 17 times)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%947%E7%A7%92%E7%9A%84part%E5%88%87%E4%BA%8617%E6%AC%A1%E5%88%86%E9%95%9C%23) `223.9K 🔥` `NEW`
1. [女子丧子3年后二宝查出癌症晚期](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%A7%E5%AD%903%E5%B9%B4%E5%90%8E%E4%BA%8C%E5%AE%9D%E6%9F%A5%E5%87%BA%E7%99%8C%E7%97%87%E6%99%9A%E6%9C%9F%23) `218.1K 🔥` `NEW`
1. [刘浩存去了张杰演唱会](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E5%8E%BB%E4%BA%86%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%23) `217.6K 🔥` `NEW`
1. [华为Pura系列新品发布 (Huawei Pura series new products released)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPura%E7%B3%BB%E5%88%97%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%23) `8.1M 🔥` `+1117%`
1. [华为发布会](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `542.3K 🔥` `+27%`
1. [万达电影告别王健林时代](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%BE%BE%E7%94%B5%E5%BD%B1%E5%91%8A%E5%88%AB%E7%8E%8B%E5%81%A5%E6%9E%97%E6%97%B6%E4%BB%A3%23) `322.3K 🔥` `+28%`
1. [低情商演员失业 高情商更多休息](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%83%85%E5%95%86%E6%BC%94%E5%91%98%E5%A4%B1%E4%B8%9A%20%E9%AB%98%E6%83%85%E5%95%86%E6%9B%B4%E5%A4%9A%E4%BC%91%E6%81%AF%23) `406.0K 🔥`
1. [时代峰峻大楼被雷劈了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%A4%A7%E6%A5%BC%E8%A2%AB%E9%9B%B7%E5%8A%88%E4%BA%86%23) `405.7K 🔥`
1. [AI艺人库 自掘坟墓](https://s.weibo.com/weibo?q=%23AI%E8%89%BA%E4%BA%BA%E5%BA%93%20%E8%87%AA%E6%8E%98%E5%9D%9F%E5%A2%93%23) `324.1K 🔥` `-29%`
1. [张若昀工作室 没签过AI授权 (Zhang Ruoyun Studio has not signed an AI authorization)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E6%B2%A1%E7%AD%BE%E8%BF%87AI%E6%8E%88%E6%9D%83%23) `323.7K 🔥` `-29%`
1. [服刑人员遭狱警虐待后身亡 (Inmate dies after being tortured by prison guards)](https://s.weibo.com/weibo?q=%23%E6%9C%8D%E5%88%91%E4%BA%BA%E5%91%98%E9%81%AD%E7%8B%B1%E8%AD%A6%E8%99%90%E5%BE%85%E5%90%8E%E8%BA%AB%E4%BA%A1%23) `323.6K 🔥` `-71%`
1. [陈哲远丞磊曾舜晞入驻爱奇艺AI艺人库](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E4%B8%9E%E7%A3%8A%E6%9B%BE%E8%88%9C%E6%99%9E%E5%85%A5%E9%A9%BB%E7%88%B1%E5%A5%87%E8%89%BAAI%E8%89%BA%E4%BA%BA%E5%BA%93%23) `323.3K 🔥` `-25%`
1. [买点便宜衣服穿就显年轻了](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%82%B9%E4%BE%BF%E5%AE%9C%E8%A1%A3%E6%9C%8D%E7%A9%BF%E5%B0%B1%E6%98%BE%E5%B9%B4%E8%BD%BB%E4%BA%86%23) `321.5K 🔥` `-54%`
1. [这句话让我决定每天多喝水了 (This sentence made me decide to drink more water every day)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%8F%A5%E8%AF%9D%E8%AE%A9%E6%88%91%E5%86%B3%E5%AE%9A%E6%AF%8F%E5%A4%A9%E5%A4%9A%E5%96%9D%E6%B0%B4%E4%BA%86%23) `294.9K 🔥` `-31%`
1. [AI观众](https://s.weibo.com/weibo?q=%23AI%E8%A7%82%E4%BC%97%23) `294.8K 🔥` `-36%`
1. [秦岚少榨点果汁嗓子早好了](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E5%B0%91%E6%A6%A8%E7%82%B9%E6%9E%9C%E6%B1%81%E5%97%93%E5%AD%90%E6%97%A9%E5%A5%BD%E4%BA%86%23) `263.6K 🔥` `-62%`
1. [邓紫棋患地中海贫血](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E6%82%A3%E5%9C%B0%E4%B8%AD%E6%B5%B7%E8%B4%AB%E8%A1%80%23) `240.4K 🔥` `-44%`
1. [女子拆快递误甩美工刀打到同事脖颈](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8B%86%E5%BF%AB%E9%80%92%E8%AF%AF%E7%94%A9%E7%BE%8E%E5%B7%A5%E5%88%80%E6%89%93%E5%88%B0%E5%90%8C%E4%BA%8B%E8%84%96%E9%A2%88%23) `229.6K 🔥` `-46%`
1. [爱奇艺 长剧](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%20%E9%95%BF%E5%89%A7%23) `224.9K 🔥` `-72%`
1. [王橹杰跳伞](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%B7%B3%E4%BC%9E%23) `212.7K 🔥` `-50%`
1. [王一博28分钟连续超6台赛车](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A28%E5%88%86%E9%92%9F%E8%BF%9E%E7%BB%AD%E8%B6%856%E5%8F%B0%E8%B5%9B%E8%BD%A6%23) `209.3K 🔥` `-43%`
1. [黄金跳水暴跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%B3%E6%B0%B4%E6%9A%B4%E8%B7%8C%23) `208.4K 🔥` `-51%`

Updated at 2026-04-20 16:38:31

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
