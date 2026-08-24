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

1. [世界人形机器人运动会现场画面](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%BF%90%E5%8A%A8%E4%BC%9A%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `903.6K 🔥` `NEW`
1. [敌敌畏消杀涉绿茶餐厅](https://s.weibo.com/weibo?q=%23%E6%95%8C%E6%95%8C%E7%95%8F%E6%B6%88%E6%9D%80%E6%B6%89%E7%BB%BF%E8%8C%B6%E9%A4%90%E5%8E%85%23) `612.5K 🔥` `NEW`
1. [427万辆召回 没有一款油车](https://s.weibo.com/weibo?q=%23427%E4%B8%87%E8%BE%86%E5%8F%AC%E5%9B%9E%20%E6%B2%A1%E6%9C%89%E4%B8%80%E6%AC%BE%E6%B2%B9%E8%BD%A6%23) `542.1K 🔥` `NEW`
1. [你常去的餐厅可能用过敌敌畏消杀](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%B8%B8%E5%8E%BB%E7%9A%84%E9%A4%90%E5%8E%85%E5%8F%AF%E8%83%BD%E7%94%A8%E8%BF%87%E6%95%8C%E6%95%8C%E7%95%8F%E6%B6%88%E6%9D%80%23) `347.0K 🔥` `NEW`
1. [不愿换座女生称读书必须给你让座吗](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%84%BF%E6%8D%A2%E5%BA%A7%E5%A5%B3%E7%94%9F%E7%A7%B0%E8%AF%BB%E4%B9%A6%E5%BF%85%E9%A1%BB%E7%BB%99%E4%BD%A0%E8%AE%A9%E5%BA%A7%E5%90%97%23) `338.6K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `337.2K 🔥` `NEW`
1. [丁程鑫机场被点名](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E6%9C%BA%E5%9C%BA%E8%A2%AB%E7%82%B9%E5%90%8D%23) `336.5K 🔥` `NEW`
1. [主角剧宣时韩沛颖对刘浩存的态度](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E5%89%A7%E5%AE%A3%E6%97%B6%E9%9F%A9%E6%B2%9B%E9%A2%96%E5%AF%B9%E5%88%98%E6%B5%A9%E5%AD%98%E7%9A%84%E6%80%81%E5%BA%A6%23) `331.9K 🔥` `NEW`
1. [楚嘉禾 加戏](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E5%98%89%E7%A6%BE%20%E5%8A%A0%E6%88%8F%23) `329.1K 🔥` `NEW`
1. [扶老人遭索赔10万牌馆已停业](https://s.weibo.com/weibo?q=%23%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%9410%E4%B8%87%E7%89%8C%E9%A6%86%E5%B7%B2%E5%81%9C%E4%B8%9A%23) `326.9K 🔥` `NEW`
1. [官方提出补贴帮扶老人遭索赔店家](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E6%8F%90%E5%87%BA%E8%A1%A5%E8%B4%B4%E5%B8%AE%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%94%E5%BA%97%E5%AE%B6%23) `324.1K 🔥` `NEW`
1. [张子枫好薄的一片](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E5%A5%BD%E8%96%84%E7%9A%84%E4%B8%80%E7%89%87%23) `322.9K 🔥` `NEW`
1. [26岁销售员验DNA成了比利时王子](https://s.weibo.com/weibo?q=%2326%E5%B2%81%E9%94%80%E5%94%AE%E5%91%98%E9%AA%8CDNA%E6%88%90%E4%BA%86%E6%AF%94%E5%88%A9%E6%97%B6%E7%8E%8B%E5%AD%90%23) `317.9K 🔥` `NEW`
1. [国铁回应为何不能托管儿童](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%93%81%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BD%95%E4%B8%8D%E8%83%BD%E6%89%98%E7%AE%A1%E5%84%BF%E7%AB%A5%23) `311.0K 🔥` `NEW`
1. [页岩气开采 地震](https://s.weibo.com/weibo?q=%23%E9%A1%B5%E5%B2%A9%E6%B0%94%E5%BC%80%E9%87%87%20%E5%9C%B0%E9%9C%87%23) `309.2K 🔥` `NEW`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `307.8K 🔥` `NEW`
1. [爸爸拉一车西瓜带女儿进藏自驾游](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E6%8B%89%E4%B8%80%E8%BD%A6%E8%A5%BF%E7%93%9C%E5%B8%A6%E5%A5%B3%E5%84%BF%E8%BF%9B%E8%97%8F%E8%87%AA%E9%A9%BE%E6%B8%B8%23) `303.7K 🔥` `NEW`
1. [沪上阿姨小程序崩了](https://s.weibo.com/weibo?q=%23%E6%B2%AA%E4%B8%8A%E9%98%BF%E5%A7%A8%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%B4%A9%E4%BA%86%23) `301.8K 🔥` `NEW`
1. [苹果发布会预计时间](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%E9%A2%84%E8%AE%A1%E6%97%B6%E9%97%B4%23) `296.4K 🔥` `NEW`
1. [孙珍妮艾米合照](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%8F%8D%E5%A6%AE%E8%89%BE%E7%B1%B3%E5%90%88%E7%85%A7%23) `292.4K 🔥` `NEW`
1. [Daeny力挺Flandre](https://s.weibo.com/weibo?q=%23Daeny%E5%8A%9B%E6%8C%BAFlandre%23) `288.1K 🔥` `NEW`
1. [两外籍男子印尼袭击美甲店被游街](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A4%96%E7%B1%8D%E7%94%B7%E5%AD%90%E5%8D%B0%E5%B0%BC%E8%A2%AD%E5%87%BB%E7%BE%8E%E7%94%B2%E5%BA%97%E8%A2%AB%E6%B8%B8%E8%A1%97%23) `286.8K 🔥` `NEW`
1. [曝刺棠女主是镶边的角色](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%BA%E6%A3%A0%E5%A5%B3%E4%B8%BB%E6%98%AF%E9%95%B6%E8%BE%B9%E7%9A%84%E8%A7%92%E8%89%B2%23) `286.0K 🔥` `NEW`
1. [梁伟铿王昶世锦赛夺冠憋了很久](https://s.weibo.com/weibo?q=%23%E6%A2%81%E4%BC%9F%E9%93%BF%E7%8E%8B%E6%98%B6%E4%B8%96%E9%94%A6%E8%B5%9B%E5%A4%BA%E5%86%A0%E6%86%8B%E4%BA%86%E5%BE%88%E4%B9%85%23) `283.9K 🔥` `NEW`
1. [派出所回应扶老人被索赔10万事件](https://s.weibo.com/weibo?q=%23%E6%B4%BE%E5%87%BA%E6%89%80%E5%9B%9E%E5%BA%94%E6%89%B6%E8%80%81%E4%BA%BA%E8%A2%AB%E7%B4%A2%E8%B5%9410%E4%B8%87%E4%BA%8B%E4%BB%B6%23) `3.4M 🔥` `+1381%`
1. [105岁老妈说85岁儿子这辈子完了](https://s.weibo.com/weibo?q=%23105%E5%B2%81%E8%80%81%E5%A6%88%E8%AF%B485%E5%B2%81%E5%84%BF%E5%AD%90%E8%BF%99%E8%BE%88%E5%AD%90%E5%AE%8C%E4%BA%86%23) `862.6K 🔥` `+46%`
1. [千万不要冲动买养老房](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%86%B2%E5%8A%A8%E4%B9%B0%E5%85%BB%E8%80%81%E6%88%BF%23) `332.4K 🔥` `+44%`
1. [四十多岁女丁克想生孩子](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%8D%81%E5%A4%9A%E5%B2%81%E5%A5%B3%E4%B8%81%E5%85%8B%E6%83%B3%E7%94%9F%E5%AD%A9%E5%AD%90%23) `327.0K 🔥` `+41%`
1. [官方回应长宁地震预警偏差](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E9%95%BF%E5%AE%81%E5%9C%B0%E9%9C%87%E9%A2%84%E8%AD%A6%E5%81%8F%E5%B7%AE%23) `320.5K 🔥` `+39%`
1. [白鹿曾买了835张宋雨琦数字专辑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9B%BE%E4%B9%B0%E4%BA%86835%E5%BC%A0%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%95%B0%E5%AD%97%E4%B8%93%E8%BE%91%23) `319.6K 🔥` `+41%`
1. [从140瘦到了95斤](https://s.weibo.com/weibo?q=%23%E4%BB%8E140%E7%98%A6%E5%88%B0%E4%BA%8695%E6%96%A4%23) `315.7K 🔥` `+37%`
1. [金晨瘦成这样居然还有肌肉](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E7%98%A6%E6%88%90%E8%BF%99%E6%A0%B7%E5%B1%85%E7%84%B6%E8%BF%98%E6%9C%89%E8%82%8C%E8%82%89%23) `314.9K 🔥` `+43%`
1. [早春晴朗will选刘畅好对味](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97will%E9%80%89%E5%88%98%E7%95%85%E5%A5%BD%E5%AF%B9%E5%91%B3%23) `312.6K 🔥` `+36%`
1. [李登科聊金晨退圈](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E8%81%8A%E9%87%91%E6%99%A8%E9%80%80%E5%9C%88%23) `306.9K 🔥` `+67%`
1. [六级 写译我讨厌你](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%20%E5%86%99%E8%AF%91%E6%88%91%E8%AE%A8%E5%8E%8C%E4%BD%A0%23) `305.5K 🔥` `+41%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `299.5K 🔥` `+32%`
1. [阿信抓到李现章若楠爬墙](https://s.weibo.com/weibo?q=%23%E9%98%BF%E4%BF%A1%E6%8A%93%E5%88%B0%E6%9D%8E%E7%8E%B0%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%88%AC%E5%A2%99%23) `294.9K 🔥` `+28%`
1. [羞答答的机器人跑了第一](https://s.weibo.com/weibo?q=%23%E7%BE%9E%E7%AD%94%E7%AD%94%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B7%91%E4%BA%86%E7%AC%AC%E4%B8%80%23) `293.6K 🔥` `+27%`
1. [阿尔瓦雷斯 彻底闹掰](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%B0%94%E7%93%A6%E9%9B%B7%E6%96%AF%20%E5%BD%BB%E5%BA%95%E9%97%B9%E6%8E%B0%23) `289.9K 🔥` `+27%`
1. [无座票为何和二等座同价](https://s.weibo.com/weibo?q=%23%E6%97%A0%E5%BA%A7%E7%A5%A8%E4%B8%BA%E4%BD%95%E5%92%8C%E4%BA%8C%E7%AD%89%E5%BA%A7%E5%90%8C%E4%BB%B7%23) `1.1M 🔥`
1. [破产姐妹史上最长售后](https://s.weibo.com/weibo?q=%23%E7%A0%B4%E4%BA%A7%E5%A7%90%E5%A6%B9%E5%8F%B2%E4%B8%8A%E6%9C%80%E9%95%BF%E5%94%AE%E5%90%8E%23) `299.0K 🔥`
1. [这些叫不出来的东西真有名字](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E5%8F%AB%E4%B8%8D%E5%87%BA%E6%9D%A5%E7%9A%84%E4%B8%9C%E8%A5%BF%E7%9C%9F%E6%9C%89%E5%90%8D%E5%AD%97%23) `573.7K 🔥` `-48%`
1. [四川长宁地震](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E9%95%BF%E5%AE%81%E5%9C%B0%E9%9C%87%23) `351.4K 🔥` `-83%`
1. [花开锦绣女主被指双标](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E5%A5%B3%E4%B8%BB%E8%A2%AB%E6%8C%87%E5%8F%8C%E6%A0%87%23) `350.1K 🔥` `-44%`
1. [张韶涵演唱会突发心脏不适](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E7%AA%81%E5%8F%91%E5%BF%83%E8%84%8F%E4%B8%8D%E9%80%82%23) `349.5K 🔥` `-38%`
1. [韩沛颖让王晓晨道歉](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B2%9B%E9%A2%96%E8%AE%A9%E7%8E%8B%E6%99%93%E6%99%A8%E9%81%93%E6%AD%89%23) `346.1K 🔥` `-36%`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `343.3K 🔥` `-36%`
1. [四六级成绩](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%E6%88%90%E7%BB%A9%23) `342.2K 🔥` `-33%`
1. [宋亚轩 得物账号](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%20%E5%BE%97%E7%89%A9%E8%B4%A6%E5%8F%B7%23) `341.6K 🔥` `-35%`
1. [张韶涵因心脏病找母亲要医疗费未果](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E5%9B%A0%E5%BF%83%E8%84%8F%E7%97%85%E6%89%BE%E6%AF%8D%E4%BA%B2%E8%A6%81%E5%8C%BB%E7%96%97%E8%B4%B9%E6%9C%AA%E6%9E%9C%23) `333.8K 🔥` `-35%`

Updated at 2026-08-24 11:14:54

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
