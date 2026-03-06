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

1. [上飞猪抢梦龙乐队演唱会一起摇滚 (Rock out together at Feizhu Dream Dragon's concert)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E9%A3%9E%E7%8C%AA%E6%8A%A2%E6%A2%A6%E9%BE%99%E4%B9%90%E9%98%9F%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%80%E8%B5%B7%E6%91%87%E6%BB%9A%23) `878.1K 🔥` `NEW`
1. [王一博巴黎时装周大片](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%B7%B4%E9%BB%8E%E6%97%B6%E8%A3%85%E5%91%A8%E5%A4%A7%E7%89%87%23) `185.1K 🔥` `NEW`
1. [白鹿春节后首个活动](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%98%A5%E8%8A%82%E5%90%8E%E9%A6%96%E4%B8%AA%E6%B4%BB%E5%8A%A8%23) `145.8K 🔥` `NEW`
1. [逐玉反馈](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%8F%8D%E9%A6%88%23) `145.5K 🔥` `NEW`
1. [中国女足亚洲杯晋级八强](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E8%B6%B3%E4%BA%9A%E6%B4%B2%E6%9D%AF%E6%99%8B%E7%BA%A7%E5%85%AB%E5%BC%BA%23) `145.3K 🔥` `NEW`
1. [剩半截身体的鱼经主人照顾奇迹康复](https://s.weibo.com/weibo?q=%23%E5%89%A9%E5%8D%8A%E6%88%AA%E8%BA%AB%E4%BD%93%E7%9A%84%E9%B1%BC%E7%BB%8F%E4%B8%BB%E4%BA%BA%E7%85%A7%E9%A1%BE%E5%A5%87%E8%BF%B9%E5%BA%B7%E5%A4%8D%23) `145.2K 🔥` `NEW`
1. [喜人真的升咖了](https://s.weibo.com/weibo?q=%23%E5%96%9C%E4%BA%BA%E7%9C%9F%E7%9A%84%E5%8D%87%E5%92%96%E4%BA%86%23) `139.2K 🔥` `NEW`
1. [逐玉直播](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%9B%B4%E6%92%AD%23) `132.9K 🔥` `NEW`
1. [王楚钦孙颖莎缺席WTT太原挑战赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E7%BC%BA%E5%B8%ADWTT%E5%A4%AA%E5%8E%9F%E6%8C%91%E6%88%98%E8%B5%9B%23) `120.3K 🔥` `NEW`
1. [伊朗导弹袭击以色列最大机场](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%E6%9C%80%E5%A4%A7%E6%9C%BA%E5%9C%BA%23) `108.9K 🔥` `NEW`
1. [李一桐支持田曦薇逐玉 (Li Yitong supports Tian Xiwei's pursuit of jade)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E6%94%AF%E6%8C%81%E7%94%B0%E6%9B%A6%E8%96%87%E9%80%90%E7%8E%89%23) `107.4K 🔥` `NEW`
1. [女子常熬夜上班压力大查出3种癌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B8%B8%E7%86%AC%E5%A4%9C%E4%B8%8A%E7%8F%AD%E5%8E%8B%E5%8A%9B%E5%A4%A7%E6%9F%A5%E5%87%BA3%E7%A7%8D%E7%99%8C%23) `96.7K 🔥` `NEW`
1. [周恺放弃参加第一阶段选拔赛](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%81%BA%E6%94%BE%E5%BC%83%E5%8F%82%E5%8A%A0%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5%E9%80%89%E6%8B%94%E8%B5%9B%23) `96.5K 🔥` `NEW`
1. [双一流高校本科扩招10万人以上](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%B8%80%E6%B5%81%E9%AB%98%E6%A0%A1%E6%9C%AC%E7%A7%91%E6%89%A9%E6%8B%9B10%E4%B8%87%E4%BA%BA%E4%BB%A5%E4%B8%8A%23) `1.0M 🔥` `+35%`
1. [视频速览十五五20项主要指标 (Video quick overview of 20 major indicators of the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E8%A7%86%E9%A2%91%E9%80%9F%E8%A7%88%E5%8D%81%E4%BA%94%E4%BA%9420%E9%A1%B9%E4%B8%BB%E8%A6%81%E6%8C%87%E6%A0%87%23) `991.7K 🔥` `+62%`
1. [耿爽履新中国人民外交学会副会长 (Geng Shuang assumes new post as Vice President of Chinese People's Institute of Foreign Affairs)](https://s.weibo.com/weibo?q=%23%E8%80%BF%E7%88%BD%E5%B1%A5%E6%96%B0%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E5%A4%96%E4%BA%A4%E5%AD%A6%E4%BC%9A%E5%89%AF%E4%BC%9A%E9%95%BF%23) `970.3K 🔥` `+99%`
1. [央行今年将降准降息](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A1%8C%E4%BB%8A%E5%B9%B4%E5%B0%86%E9%99%8D%E5%87%86%E9%99%8D%E6%81%AF%23) `890.6K 🔥` `+114%`
1. [逐玉热度](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%83%AD%E5%BA%A6%23) `889.8K 🔥` `+121%`
1. [伊朗一儿童游乐场遭袭 (A children's playground in Iran was attacked)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%80%E5%84%BF%E7%AB%A5%E6%B8%B8%E4%B9%90%E5%9C%BA%E9%81%AD%E8%A2%AD%23) `859.7K 🔥` `+114%`
1. [千问妇女节活动](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E5%A6%87%E5%A5%B3%E8%8A%82%E6%B4%BB%E5%8A%A8%23) `765.2K 🔥` `+300%`
1. [这位人大代表坚守乡村小学40年](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BD%8D%E4%BA%BA%E5%A4%A7%E4%BB%A3%E8%A1%A8%E5%9D%9A%E5%AE%88%E4%B9%A1%E6%9D%91%E5%B0%8F%E5%AD%A640%E5%B9%B4%23) `725.5K 🔥` `+81%`
1. [破5亿播放AI短剧成本仅3000](https://s.weibo.com/weibo?q=%23%E7%A0%B45%E4%BA%BF%E6%92%AD%E6%94%BEAI%E7%9F%AD%E5%89%A7%E6%88%90%E6%9C%AC%E4%BB%853000%23) `660.4K 🔥` `+407%`
1. [贾国龙卸任西贝CEO](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E5%9B%BD%E9%BE%99%E5%8D%B8%E4%BB%BB%E8%A5%BF%E8%B4%9DCEO%23) `620.5K 🔥` `+55%`
1. [TES上报Naiyou不正当行为 (TES reports Naiyou’s improper behavior)](https://s.weibo.com/weibo?q=%23TES%E4%B8%8A%E6%8A%A5Naiyou%E4%B8%8D%E6%AD%A3%E5%BD%93%E8%A1%8C%E4%B8%BA%23) `552.5K 🔥` `+38%`
1. [滨寿司员工餐 (Hamazushi staff meal)](https://s.weibo.com/weibo?q=%23%E6%BB%A8%E5%AF%BF%E5%8F%B8%E5%91%98%E5%B7%A5%E9%A4%90%23) `500.6K 🔥` `+25%`
1. [369 小丑了](https://s.weibo.com/weibo?q=%23369%20%E5%B0%8F%E4%B8%91%E4%BA%86%23) `492.9K 🔥` `+23%`
1. [千问AI一句话下单无门槛立减](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AEAI%E4%B8%80%E5%8F%A5%E8%AF%9D%E4%B8%8B%E5%8D%95%E6%97%A0%E9%97%A8%E6%A7%9B%E7%AB%8B%E5%87%8F%23) `446.4K 🔥` `+261%`
1. [罗意威大秀](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%84%8F%E5%A8%81%E5%A4%A7%E7%A7%80%23) `379.5K 🔥` `+62%`
1. [专家建议女性尽早做生育力评估](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%BB%BA%E8%AE%AE%E5%A5%B3%E6%80%A7%E5%B0%BD%E6%97%A9%E5%81%9A%E7%94%9F%E8%82%B2%E5%8A%9B%E8%AF%84%E4%BC%B0%23) `145.4K 🔥` `+33%`
1. [广西壮族自治区党委书记陈刚亮家丑 (Chen Gangliang, Secretary of the Party Committee of Guangxi Zhuang Autonomous Region, has a family scandal)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%A3%AE%E6%97%8F%E8%87%AA%E6%B2%BB%E5%8C%BA%E5%85%9A%E5%A7%94%E4%B9%A6%E8%AE%B0%E9%99%88%E5%88%9A%E4%BA%AE%E5%AE%B6%E4%B8%91%23) `131.2K 🔥` `+40%`
1. [妇女节 放假](https://s.weibo.com/weibo?q=%23%E5%A6%87%E5%A5%B3%E8%8A%82%20%E6%94%BE%E5%81%87%23) `1.1M 🔥`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `438.3K 🔥`
1. [逐玉开播](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%BC%80%E6%92%AD%23) `417.3K 🔥`
1. [建议艾滋感染者1个月内告知配偶](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E8%89%BE%E6%BB%8B%E6%84%9F%E6%9F%93%E8%80%851%E4%B8%AA%E6%9C%88%E5%86%85%E5%91%8A%E7%9F%A5%E9%85%8D%E5%81%B6%23) `331.2K 🔥`
1. [4岁女孩高血压就诊发现竟是男孩](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%AB%98%E8%A1%80%E5%8E%8B%E5%B0%B1%E8%AF%8A%E5%8F%91%E7%8E%B0%E7%AB%9F%E6%98%AF%E7%94%B7%E5%AD%A9%23) `179.3K 🔥`
1. [董璇张维伊婚礼策划倒闭了 (Dong Xuan and Zhang Weiyi’s wedding planning went bankrupt)](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E5%BC%A0%E7%BB%B4%E4%BC%8A%E5%A9%9A%E7%A4%BC%E7%AD%96%E5%88%92%E5%80%92%E9%97%AD%E4%BA%86%23) `146.0K 🔥`
1. [美以袭击已致1332名伊朗人死亡 (US-Israeli strikes kill 1,332 Iranians)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E5%B7%B2%E8%87%B41332%E5%90%8D%E4%BC%8A%E6%9C%97%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `145.9K 🔥`
1. [白鹿跳水了 (The white deer dives)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%B7%B3%E6%B0%B4%E4%BA%86%23) `117.9K 🔥`
1. [女子频繁迟到做事拖沓被确诊ADHD](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%A2%91%E7%B9%81%E8%BF%9F%E5%88%B0%E5%81%9A%E4%BA%8B%E6%8B%96%E6%B2%93%E8%A2%AB%E7%A1%AE%E8%AF%8AADHD%23) `107.8K 🔥`
1. [斯里兰卡营救遭击沉伊朗军舰画面](https://s.weibo.com/weibo?q=%23%E6%96%AF%E9%87%8C%E5%85%B0%E5%8D%A1%E8%90%A5%E6%95%91%E9%81%AD%E5%87%BB%E6%B2%89%E4%BC%8A%E6%9C%97%E5%86%9B%E8%88%B0%E7%94%BB%E9%9D%A2%23) `107.3K 🔥`
1. [真我 暂停新机研发](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%88%91%20%E6%9A%82%E5%81%9C%E6%96%B0%E6%9C%BA%E7%A0%94%E5%8F%91%23) `96.7K 🔥`
1. [长玉 给男人花钱天打雷劈](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%8E%89%20%E7%BB%99%E7%94%B7%E4%BA%BA%E8%8A%B1%E9%92%B1%E5%A4%A9%E6%89%93%E9%9B%B7%E5%8A%88%23) `96.6K 🔥`
1. [字节跳动启动最大规模转正实习生招聘](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8%E5%90%AF%E5%8A%A8%E6%9C%80%E5%A4%A7%E8%A7%84%E6%A8%A1%E8%BD%AC%E6%AD%A3%E5%AE%9E%E4%B9%A0%E7%94%9F%E6%8B%9B%E8%81%98%23) `96.5K 🔥`
1. [逐玉 顶级待遇](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E9%A1%B6%E7%BA%A7%E5%BE%85%E9%81%87%23) `307.7K 🔥` `-23%`
1. [逐玉云包场](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E4%BA%91%E5%8C%85%E5%9C%BA%23) `160.8K 🔥` `-27%`
1. [金智秀新剧开播](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E6%96%B0%E5%89%A7%E5%BC%80%E6%92%AD%23) `123.8K 🔥` `-22%`
1. [钎九不清冰合照](https://s.weibo.com/weibo?q=%23%E9%92%8E%E4%B9%9D%E4%B8%8D%E6%B8%85%E5%86%B0%E5%90%88%E7%85%A7%23) `104.3K 🔥` `-24%`
1. [最有钱的时候买了最没用的东西 (When I had the most money, I bought the most useless things.)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E6%9C%89%E9%92%B1%E7%9A%84%E6%97%B6%E5%80%99%E4%B9%B0%E4%BA%86%E6%9C%80%E6%B2%A1%E7%94%A8%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `98.3K 🔥` `-22%`
1. [唐家三少口碑因晋江女频翻盘 (The reputation of the third young master of the Tang family has been reversed due to Jinjiang female pornographic videos)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%B6%E4%B8%89%E5%B0%91%E5%8F%A3%E7%A2%91%E5%9B%A0%E6%99%8B%E6%B1%9F%E5%A5%B3%E9%A2%91%E7%BF%BB%E7%9B%98%23) `96.6K 🔥` `-26%`
1. [孩子大了后要帮孩子完成社会化](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%A4%A7%E4%BA%86%E5%90%8E%E8%A6%81%E5%B8%AE%E5%AD%A9%E5%AD%90%E5%AE%8C%E6%88%90%E7%A4%BE%E4%BC%9A%E5%8C%96%23) `96.6K 🔥` `-38%`

Updated at 2026-03-06 19:41:09

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
