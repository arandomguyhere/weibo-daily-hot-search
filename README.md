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

1. [曝月鳞绮纪又撤档了 (Moonscale Qiji has been withdrawn again)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E5%8F%88%E6%92%A4%E6%A1%A3%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [小哥爬7楼送外卖看到牌匾瞬间愣住](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%93%A5%E7%88%AC7%E6%A5%BC%E9%80%81%E5%A4%96%E5%8D%96%E7%9C%8B%E5%88%B0%E7%89%8C%E5%8C%BE%E7%9E%AC%E9%97%B4%E6%84%A3%E4%BD%8F%23) `764.3K 🔥` `NEW`
1. [我国成功发射四维高景二号0506星](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%88%90%E5%8A%9F%E5%8F%91%E5%B0%84%E5%9B%9B%E7%BB%B4%E9%AB%98%E6%99%AF%E4%BA%8C%E5%8F%B70506%E6%98%9F%23) `621.9K 🔥` `NEW`
1. [伊朗开出停战5个条件](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%BC%80%E5%87%BA%E5%81%9C%E6%88%985%E4%B8%AA%E6%9D%A1%E4%BB%B6%23) `582.0K 🔥` `NEW`
1. [汪苏泷明日世界演唱会官宣](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%98%8E%E6%97%A5%E4%B8%96%E7%95%8C%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `375.1K 🔥` `NEW`
1. [医院突增跑友检查心脏](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E7%AA%81%E5%A2%9E%E8%B7%91%E5%8F%8B%E6%A3%80%E6%9F%A5%E5%BF%83%E8%84%8F%23) `284.3K 🔥` `NEW`
1. [历史知识](https://s.weibo.com/weibo?q=%23%E5%8E%86%E5%8F%B2%E7%9F%A5%E8%AF%86%23) `276.7K 🔥` `NEW`
1. [王俊凯新歌上线](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%96%B0%E6%AD%8C%E4%B8%8A%E7%BA%BF%23) `223.1K 🔥` `NEW`
1. [常规体检难覆盖心血管病筛查需求](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E8%A7%84%E4%BD%93%E6%A3%80%E9%9A%BE%E8%A6%86%E7%9B%96%E5%BF%83%E8%A1%80%E7%AE%A1%E7%97%85%E7%AD%9B%E6%9F%A5%E9%9C%80%E6%B1%82%23) `215.8K 🔥` `NEW`
1. [中国机器狼群巷战画面首次公开](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E7%8B%BC%E7%BE%A4%E5%B7%B7%E6%88%98%E7%94%BB%E9%9D%A2%E9%A6%96%E6%AC%A1%E5%85%AC%E5%BC%80%23) `215.6K 🔥` `NEW`
1. [张雪峰谈为何突然跑步 (Zhang Xuefeng talks about why he suddenly ran)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E8%B0%88%E4%B8%BA%E4%BD%95%E7%AA%81%E7%84%B6%E8%B7%91%E6%AD%A5%23) `214.6K 🔥` `NEW`
1. [伊朗官媒发炸毁自由女神像AI视频](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AE%98%E5%AA%92%E5%8F%91%E7%82%B8%E6%AF%81%E8%87%AA%E7%94%B1%E5%A5%B3%E7%A5%9E%E5%83%8FAI%E8%A7%86%E9%A2%91%23) `213.6K 🔥` `NEW`
1. [吴柳芳谈擦边风波](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%9F%B3%E8%8A%B3%E8%B0%88%E6%93%A6%E8%BE%B9%E9%A3%8E%E6%B3%A2%23) `213.1K 🔥` `NEW`
1. [偶遇谢娜夜骑给张杰送花](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E8%B0%A2%E5%A8%9C%E5%A4%9C%E9%AA%91%E7%BB%99%E5%BC%A0%E6%9D%B0%E9%80%81%E8%8A%B1%23) `212.0K 🔥` `NEW`
1. [张凌赫登了贴吧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%99%BB%E4%BA%86%E8%B4%B4%E5%90%A7%23) `210.1K 🔥` `NEW`
1. [晋江副总裁称开发票是魔法攻击](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E5%89%AF%E6%80%BB%E8%A3%81%E7%A7%B0%E5%BC%80%E5%8F%91%E7%A5%A8%E6%98%AF%E9%AD%94%E6%B3%95%E6%94%BB%E5%87%BB%23) `209.0K 🔥` `NEW`
1. [张雪峰丧事不设追思会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E4%B8%A7%E4%BA%8B%E4%B8%8D%E8%AE%BE%E8%BF%BD%E6%80%9D%E4%BC%9A%23) `207.4K 🔥` `NEW`
1. [白鹿留洋大小姐造型](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%95%99%E6%B4%8B%E5%A4%A7%E5%B0%8F%E5%A7%90%E9%80%A0%E5%9E%8B%23) `206.6K 🔥` `NEW`
1. [奔跑吧路透](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E8%B7%AF%E9%80%8F%23) `205.5K 🔥` `NEW`
1. [逐玉灵魂名场面没了](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%81%B5%E9%AD%82%E5%90%8D%E5%9C%BA%E9%9D%A2%E6%B2%A1%E4%BA%86%23) `170.6K 🔥` `NEW`
1. [颖儿进组前做热玛吉 (Yinger made Thermage before joining the group)](https://s.weibo.com/weibo?q=%23%E9%A2%96%E5%84%BF%E8%BF%9B%E7%BB%84%E5%89%8D%E5%81%9A%E7%83%AD%E7%8E%9B%E5%90%89%23) `167.2K 🔥` `NEW`
1. [吴柳芳退役费全给家里买房凑首付](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%9F%B3%E8%8A%B3%E9%80%80%E5%BD%B9%E8%B4%B9%E5%85%A8%E7%BB%99%E5%AE%B6%E9%87%8C%E4%B9%B0%E6%88%BF%E5%87%91%E9%A6%96%E4%BB%98%23) `144.9K 🔥` `NEW`
1. [Mark给Uzi道歉](https://s.weibo.com/weibo?q=%23Mark%E7%BB%99Uzi%E9%81%93%E6%AD%89%23) `144.2K 🔥` `NEW`
1. [霍启刚谈对郭晶晶第一印象](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%88%9A%E8%B0%88%E5%AF%B9%E9%83%AD%E6%99%B6%E6%99%B6%E7%AC%AC%E4%B8%80%E5%8D%B0%E8%B1%A1%23) `136.7K 🔥` `NEW`
1. [加快建立长期护理保险制度](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E5%BF%AB%E5%BB%BA%E7%AB%8B%E9%95%BF%E6%9C%9F%E6%8A%A4%E7%90%86%E4%BF%9D%E9%99%A9%E5%88%B6%E5%BA%A6%23) `133.4K 🔥` `NEW`
1. [饭店将当日剩菜1元卖给深夜骑手](https://s.weibo.com/weibo?q=%23%E9%A5%AD%E5%BA%97%E5%B0%86%E5%BD%93%E6%97%A5%E5%89%A9%E8%8F%9C1%E5%85%83%E5%8D%96%E7%BB%99%E6%B7%B1%E5%A4%9C%E9%AA%91%E6%89%8B%23) `130.9K 🔥` `NEW`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `121.6K 🔥` `NEW`
1. [雷军祝贺金山办公团队](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A5%9D%E8%B4%BA%E9%87%91%E5%B1%B1%E5%8A%9E%E5%85%AC%E5%9B%A2%E9%98%9F%23) `114.4K 🔥` `NEW`
1. [历届浪姐翻红名单](https://s.weibo.com/weibo?q=%23%E5%8E%86%E5%B1%8A%E6%B5%AA%E5%A7%90%E7%BF%BB%E7%BA%A2%E5%90%8D%E5%8D%95%23) `111.2K 🔥` `NEW`
1. [冯巩在人民日报撰文](https://s.weibo.com/weibo?q=%23%E5%86%AF%E5%B7%A9%E5%9C%A8%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E6%92%B0%E6%96%87%23) `108.7K 🔥` `NEW`
1. [樊长玉进门是簪花将军出门是京城贵女 (Fan Changyu is a general with a hairpin when he enters the house, and he is a noble lady of the capital when he goes out.)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E9%95%BF%E7%8E%89%E8%BF%9B%E9%97%A8%E6%98%AF%E7%B0%AA%E8%8A%B1%E5%B0%86%E5%86%9B%E5%87%BA%E9%97%A8%E6%98%AF%E4%BA%AC%E5%9F%8E%E8%B4%B5%E5%A5%B3%23) `97.2K 🔥` `NEW`
1. [女导演上网搜自己才知道获国际大奖](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AF%BC%E6%BC%94%E4%B8%8A%E7%BD%91%E6%90%9C%E8%87%AA%E5%B7%B1%E6%89%8D%E7%9F%A5%E9%81%93%E8%8E%B7%E5%9B%BD%E9%99%85%E5%A4%A7%E5%A5%96%23) `95.1K 🔥` `NEW`
1. [你的意外险可能不保猝死](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E6%84%8F%E5%A4%96%E9%99%A9%E5%8F%AF%E8%83%BD%E4%B8%8D%E4%BF%9D%E7%8C%9D%E6%AD%BB%23) `93.0K 🔥` `NEW`
1. [心源性猝死院外抢救99%失败](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%BA%90%E6%80%A7%E7%8C%9D%E6%AD%BB%E9%99%A2%E5%A4%96%E6%8A%A2%E6%95%9199%25%E5%A4%B1%E8%B4%A5%23) `92.7K 🔥` `NEW`
1. [宁艺卓自由至上](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E8%87%AA%E7%94%B1%E8%87%B3%E4%B8%8A%23) `91.8K 🔥` `NEW`
1. [金价上演V型反转](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8A%E6%BC%94V%E5%9E%8B%E5%8F%8D%E8%BD%AC%23) `91.2K 🔥` `NEW`
1. [崩坏星穹铁道超话](https://s.weibo.com/weibo?q=%23%E5%B4%A9%E5%9D%8F%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93%E8%B6%85%E8%AF%9D%23) `89.1K 🔥` `NEW`
1. [张函瑞高会超陈浚铭](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E9%AB%98%E4%BC%9A%E8%B6%85%E9%99%88%E6%B5%9A%E9%93%AD%23) `89.0K 🔥` `NEW`
1. [孟子义复古港风](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%A4%8D%E5%8F%A4%E6%B8%AF%E9%A3%8E%23) `89.0K 🔥` `NEW`
1. [洛克王国世界马年国风精灵](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%E4%B8%96%E7%95%8C%E9%A9%AC%E5%B9%B4%E5%9B%BD%E9%A3%8E%E7%B2%BE%E7%81%B5%23) `89.0K 🔥` `NEW`
1. [问界M7车主还没提车就变老款 (Wenjie M7 owners have turned out to be old models before they even picked up the car.)](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM7%E8%BD%A6%E4%B8%BB%E8%BF%98%E6%B2%A1%E6%8F%90%E8%BD%A6%E5%B0%B1%E5%8F%98%E8%80%81%E6%AC%BE%23) `89.0K 🔥` `NEW`
1. [40岁程序员熬夜一周连跑10公里心梗](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E7%A8%8B%E5%BA%8F%E5%91%98%E7%86%AC%E5%A4%9C%E4%B8%80%E5%91%A8%E8%BF%9E%E8%B7%9110%E5%85%AC%E9%87%8C%E5%BF%83%E6%A2%97%23) `86.6K 🔥` `NEW`
1. [左奇函高会](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E9%AB%98%E4%BC%9A%23) `84.6K 🔥` `NEW`
1. [张凌赫旧照发言被挖出来](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%97%A7%E7%85%A7%E5%8F%91%E8%A8%80%E8%A2%AB%E6%8C%96%E5%87%BA%E6%9D%A5%23) `83.5K 🔥` `NEW`
1. [今天是龙凤双吉旺运日](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E6%98%AF%E9%BE%99%E5%87%A4%E5%8F%8C%E5%90%89%E6%97%BA%E8%BF%90%E6%97%A5%23) `82.9K 🔥` `NEW`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `82.8K 🔥` `NEW`
1. [男子切到手晕血边晕边爬去医院 (The man's hands were bleeding after being cut, and he fainted and crawled to the hospital.)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%88%87%E5%88%B0%E6%89%8B%E6%99%95%E8%A1%80%E8%BE%B9%E6%99%95%E8%BE%B9%E7%88%AC%E5%8E%BB%E5%8C%BB%E9%99%A2%23) `269.0K 🔥` `+46%`
1. [医生谈颜如晶一年减重2.9斤 (Doctor talks about Yan Rujing losing 2.9 pounds in one year)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%B0%88%E9%A2%9C%E5%A6%82%E6%99%B6%E4%B8%80%E5%B9%B4%E5%87%8F%E9%87%8D2.9%E6%96%A4%23) `208.7K 🔥` `+47%`
1. [熬夜不是猝死的第一杀手 (Staying up late is not the number one killer of sudden death)](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E4%B8%8D%E6%98%AF%E7%8C%9D%E6%AD%BB%E7%9A%84%E7%AC%AC%E4%B8%80%E6%9D%80%E6%89%8B%23) `172.5K 🔥` `+25%`
1. [洛克王国世界开服](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%E4%B8%96%E7%95%8C%E5%BC%80%E6%9C%8D%23) `97.8K 🔥` `+37%`
1. [剧版哈利波特首支预告](https://s.weibo.com/weibo?q=%23%E5%89%A7%E7%89%88%E5%93%88%E5%88%A9%E6%B3%A2%E7%89%B9%E9%A6%96%E6%94%AF%E9%A2%84%E5%91%8A%23) `92.4K 🔥` `+64%`

Updated at 2026-03-26 11:23:55

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
