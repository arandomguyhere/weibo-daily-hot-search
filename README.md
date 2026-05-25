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

1. [王鹤棣经纪人朋友圈 (Wang Hedi’s agent’s circle of friends)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `14.8M 🔥` `NEW`
1. [看不到女干部救灾累哑却盯着金耳环](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E4%B8%8D%E5%88%B0%E5%A5%B3%E5%B9%B2%E9%83%A8%E6%95%91%E7%81%BE%E7%B4%AF%E5%93%91%E5%8D%B4%E7%9B%AF%E7%9D%80%E9%87%91%E8%80%B3%E7%8E%AF%23) `1.5M 🔥` `NEW`
1. [山西煤矿爆炸瞬间监控曝光](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E7%88%86%E7%82%B8%E7%9E%AC%E9%97%B4%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23) `1.4M 🔥` `NEW`
1. [长三角外贸交出亮眼成绩单](https://s.weibo.com/weibo?q=%23%E9%95%BF%E4%B8%89%E8%A7%92%E5%A4%96%E8%B4%B8%E4%BA%A4%E5%87%BA%E4%BA%AE%E7%9C%BC%E6%88%90%E7%BB%A9%E5%8D%95%23) `896.2K 🔥` `NEW`
1. [鹿晗舒肤佳适配度](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%88%92%E8%82%A4%E4%BD%B3%E9%80%82%E9%85%8D%E5%BA%A6%23) `875.3K 🔥` `NEW`
1. [曝沙溢高反开车正片剪掉了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B2%99%E6%BA%A2%E9%AB%98%E5%8F%8D%E5%BC%80%E8%BD%A6%E6%AD%A3%E7%89%87%E5%89%AA%E6%8E%89%E4%BA%86%23) `870.7K 🔥` `NEW`
1. [第一个想到用小票当壁纸的是天才](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%83%B3%E5%88%B0%E7%94%A8%E5%B0%8F%E7%A5%A8%E5%BD%93%E5%A3%81%E7%BA%B8%E7%9A%84%E6%98%AF%E5%A4%A9%E6%89%8D%23) `748.1K 🔥` `NEW`
1. [地球online遇到史前大危机](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83online%E9%81%87%E5%88%B0%E5%8F%B2%E5%89%8D%E5%A4%A7%E5%8D%B1%E6%9C%BA%23) `431.4K 🔥` `NEW`
1. [天选好面康师傅护航中国航天](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E9%80%89%E5%A5%BD%E9%9D%A2%E5%BA%B7%E5%B8%88%E5%82%85%E6%8A%A4%E8%88%AA%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%23) `422.7K 🔥` `NEW`
1. [马刺2比2雷霆](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BA2%E6%AF%942%E9%9B%B7%E9%9C%86%23) `401.5K 🔥` `NEW`
1. [张月三公个喜第一 (Mr. Zhang Yue is the first to be happy)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E4%B8%89%E5%85%AC%E4%B8%AA%E5%96%9C%E7%AC%AC%E4%B8%80%23) `395.2K 🔥` `NEW`
1. [华为高管回应半导体领域新突破](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%AB%98%E7%AE%A1%E5%9B%9E%E5%BA%94%E5%8D%8A%E5%AF%BC%E4%BD%93%E9%A2%86%E5%9F%9F%E6%96%B0%E7%AA%81%E7%A0%B4%23) `394.7K 🔥` `NEW`
1. [万千惠 乌兰图雅](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%20%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%23) `389.8K 🔥` `NEW`
1. [当你买到一个公摊面积很小的西瓜](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E4%B9%B0%E5%88%B0%E4%B8%80%E4%B8%AA%E5%85%AC%E6%91%8A%E9%9D%A2%E7%A7%AF%E5%BE%88%E5%B0%8F%E7%9A%84%E8%A5%BF%E7%93%9C%23) `388.1K 🔥` `NEW`
1. [演员的脸到底有多小](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%9A%84%E8%84%B8%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E5%B0%8F%23) `387.2K 🔥` `NEW`
1. [水族馆的男美人鱼竟然是吴磊](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E6%97%8F%E9%A6%86%E7%9A%84%E7%94%B7%E7%BE%8E%E4%BA%BA%E9%B1%BC%E7%AB%9F%E7%84%B6%E6%98%AF%E5%90%B4%E7%A3%8A%23) `384.6K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `380.9K 🔥` `NEW`
1. [京东采销说今天买手机无敌便宜](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E9%87%87%E9%94%80%E8%AF%B4%E4%BB%8A%E5%A4%A9%E4%B9%B0%E6%89%8B%E6%9C%BA%E6%97%A0%E6%95%8C%E4%BE%BF%E5%AE%9C%23) `379.9K 🔥` `NEW`
1. [重庆永川城区水位退下淤泥过脚背](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E6%B0%B8%E5%B7%9D%E5%9F%8E%E5%8C%BA%E6%B0%B4%E4%BD%8D%E9%80%80%E4%B8%8B%E6%B7%A4%E6%B3%A5%E8%BF%87%E8%84%9A%E8%83%8C%23) `377.3K 🔥` `NEW`
1. [京东明星红包](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%23) `375.4K 🔥` `NEW`
1. [12岁女孩为领免费小说被诈骗15万 (12-year-old girl was defrauded of 150,000 yuan for free novel)](https://s.weibo.com/weibo?q=%2312%E5%B2%81%E5%A5%B3%E5%AD%A9%E4%B8%BA%E9%A2%86%E5%85%8D%E8%B4%B9%E5%B0%8F%E8%AF%B4%E8%A2%AB%E8%AF%88%E9%AA%9715%E4%B8%87%23) `372.8K 🔥` `NEW`
1. [于东来直播称条件允许将建小区](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E7%9B%B4%E6%92%AD%E7%A7%B0%E6%9D%A1%E4%BB%B6%E5%85%81%E8%AE%B8%E5%B0%86%E5%BB%BA%E5%B0%8F%E5%8C%BA%23) `371.6K 🔥` `NEW`
1. [王鹤棣情绪不是一天累积起来的](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%83%85%E7%BB%AA%E4%B8%8D%E6%98%AF%E4%B8%80%E5%A4%A9%E7%B4%AF%E7%A7%AF%E8%B5%B7%E6%9D%A5%E7%9A%84%23) `370.6K 🔥` `NEW`
1. [坠亡女童米粒妈妈怀3胎](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%A5%B3%E7%AB%A5%E7%B1%B3%E7%B2%92%E5%A6%88%E5%A6%88%E6%80%803%E8%83%8E%23) `367.2K 🔥` `NEW`
1. [浪姐三公个喜前三](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E4%B8%AA%E5%96%9C%E5%89%8D%E4%B8%89%23) `364.3K 🔥` `NEW`
1. [这些习惯正在悄悄伤害你的甲状腺](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E4%B9%A0%E6%83%AF%E6%AD%A3%E5%9C%A8%E6%82%84%E6%82%84%E4%BC%A4%E5%AE%B3%E4%BD%A0%E7%9A%84%E7%94%B2%E7%8A%B6%E8%85%BA%23) `361.3K 🔥` `NEW`
1. [KPL运动会](https://s.weibo.com/weibo?q=%23KPL%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `359.5K 🔥` `NEW`
1. [油价大跌了](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E5%A4%A7%E8%B7%8C%E4%BA%86%23) `358.8K 🔥` `NEW`
1. [留神峪煤矿爆炸井口现冲击波](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E7%88%86%E7%82%B8%E4%BA%95%E5%8F%A3%E7%8E%B0%E5%86%B2%E5%87%BB%E6%B3%A2%23) `356.6K 🔥` `NEW`
1. [棣月系](https://s.weibo.com/weibo?q=%23%E6%A3%A3%E6%9C%88%E7%B3%BB%23) `354.3K 🔥` `NEW`
1. [21岁小苹果好漂亮 (21-year-old little apple is so beautiful)](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%B0%8F%E8%8B%B9%E6%9E%9C%E5%A5%BD%E6%BC%82%E4%BA%AE%23) `352.4K 🔥` `NEW`
1. [985博士被间谍策反偷拍航天机密](https://s.weibo.com/weibo?q=%23985%E5%8D%9A%E5%A3%AB%E8%A2%AB%E9%97%B4%E8%B0%8D%E7%AD%96%E5%8F%8D%E5%81%B7%E6%8B%8D%E8%88%AA%E5%A4%A9%E6%9C%BA%E5%AF%86%23) `346.8K 🔥` `NEW`
1. [浪7 姐姐从主体变客体](https://s.weibo.com/weibo?q=%23%E6%B5%AA7%20%E5%A7%90%E5%A7%90%E4%BB%8E%E4%B8%BB%E4%BD%93%E5%8F%98%E5%AE%A2%E4%BD%93%23) `345.8K 🔥` `NEW`
1. [玉兰花开君再来全阵容](https://s.weibo.com/weibo?q=%23%E7%8E%89%E5%85%B0%E8%8A%B1%E5%BC%80%E5%90%9B%E5%86%8D%E6%9D%A5%E5%85%A8%E9%98%B5%E5%AE%B9%23) `344.0K 🔥` `NEW`
1. [30岁男子患癌后想凭意念消除癌细胞](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E7%94%B7%E5%AD%90%E6%82%A3%E7%99%8C%E5%90%8E%E6%83%B3%E5%87%AD%E6%84%8F%E5%BF%B5%E6%B6%88%E9%99%A4%E7%99%8C%E7%BB%86%E8%83%9E%23) `341.5K 🔥` `NEW`
1. [李登科说迪丽热巴没整容](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E8%AF%B4%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%B2%A1%E6%95%B4%E5%AE%B9%23) `340.1K 🔥` `NEW`
1. [田亮叶一茜14岁儿子颜值](https://s.weibo.com/weibo?q=%23%E7%94%B0%E4%BA%AE%E5%8F%B6%E4%B8%80%E8%8C%9C14%E5%B2%81%E5%84%BF%E5%AD%90%E9%A2%9C%E5%80%BC%23) `338.3K 🔥` `NEW`
1. [养殖骗局包技术包回收包你血本无归](https://s.weibo.com/weibo?q=%23%E5%85%BB%E6%AE%96%E9%AA%97%E5%B1%80%E5%8C%85%E6%8A%80%E6%9C%AF%E5%8C%85%E5%9B%9E%E6%94%B6%E5%8C%85%E4%BD%A0%E8%A1%80%E6%9C%AC%E6%97%A0%E5%BD%92%23) `335.6K 🔥` `NEW`
1. [爽到以为杨洋演短剧了](https://s.weibo.com/weibo?q=%23%E7%88%BD%E5%88%B0%E4%BB%A5%E4%B8%BA%E6%9D%A8%E6%B4%8B%E6%BC%94%E7%9F%AD%E5%89%A7%E4%BA%86%23) `333.1K 🔥` `NEW`
1. [李在明手撕韩国涉华假新闻](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E6%89%8B%E6%92%95%E9%9F%A9%E5%9B%BD%E6%B6%89%E5%8D%8E%E5%81%87%E6%96%B0%E9%97%BB%23) `332.6K 🔥` `NEW`
1. [文班亚马半场压哨三分 (Bunyama's three-pointer at the half-time buzzer)](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E5%8D%8A%E5%9C%BA%E5%8E%8B%E5%93%A8%E4%B8%89%E5%88%86%23) `329.5K 🔥` `NEW`
1. [体面分手有个弊端是容易造成误会](https://s.weibo.com/weibo?q=%23%E4%BD%93%E9%9D%A2%E5%88%86%E6%89%8B%E6%9C%89%E4%B8%AA%E5%BC%8A%E7%AB%AF%E6%98%AF%E5%AE%B9%E6%98%93%E9%80%A0%E6%88%90%E8%AF%AF%E4%BC%9A%23) `328.8K 🔥` `NEW`
1. [曝梅西受伤离场](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%A2%85%E8%A5%BF%E5%8F%97%E4%BC%A4%E7%A6%BB%E5%9C%BA%23) `326.4K 🔥` `NEW`
1. [网传歌手第一期否了30首歌](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%AD%8C%E6%89%8B%E7%AC%AC%E4%B8%80%E6%9C%9F%E5%90%A6%E4%BA%8630%E9%A6%96%E6%AD%8C%23) `324.9K 🔥` `NEW`
1. [曾沛慈 受伤](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E5%8F%97%E4%BC%A4%23) `322.6K 🔥` `NEW`
1. [nova16全新配色好夏天](https://s.weibo.com/weibo?q=%23nova16%E5%85%A8%E6%96%B0%E9%85%8D%E8%89%B2%E5%A5%BD%E5%A4%8F%E5%A4%A9%23) `320.2K 🔥` `NEW`
1. [于正谈给阿嬷的情书](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E8%B0%88%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `318.5K 🔥` `NEW`
1. [王健林又背上超30亿债务](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%81%A5%E6%9E%97%E5%8F%88%E8%83%8C%E4%B8%8A%E8%B6%8530%E4%BA%BF%E5%80%BA%E5%8A%A1%23) `412.0K 🔥` `+28%`
1. [白鹿的跑男热度](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9A%84%E8%B7%91%E7%94%B7%E7%83%AD%E5%BA%A6%23) `365.1K 🔥`
1. [汪峰晒与四个孩子合照](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%E6%99%92%E4%B8%8E%E5%9B%9B%E4%B8%AA%E5%AD%A9%E5%AD%90%E5%90%88%E7%85%A7%23) `348.3K 🔥`
1. [洪涛回应歌手淘汰庾澄庆 (Hong Tao responded to the singer’s elimination of Yu Chengqing)](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E6%B6%9B%E5%9B%9E%E5%BA%94%E6%AD%8C%E6%89%8B%E6%B7%98%E6%B1%B0%E5%BA%BE%E6%BE%84%E5%BA%86%23) `382.3K 🔥` `-40%`
1. [专家说小猫上床是不脏的](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E8%AF%B4%E5%B0%8F%E7%8C%AB%E4%B8%8A%E5%BA%8A%E6%98%AF%E4%B8%8D%E8%84%8F%E7%9A%84%23) `350.4K 🔥` `-32%`

Updated at 2026-05-25 12:55:41

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
