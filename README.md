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

1. [镖人新浪夺镖大作战 (Dartman Sina Dart Seizing Battle)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E6%96%B0%E6%B5%AA%E5%A4%BA%E9%95%96%E5%A4%A7%E4%BD%9C%E6%88%98%23) `272.8K 🔥` `NEW`
1. [全国过年统一姿势](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E8%BF%87%E5%B9%B4%E7%BB%9F%E4%B8%80%E5%A7%BF%E5%8A%BF%23) `217.0K 🔥` `NEW`
1. [陈奕恒看贺峻霖视频](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E7%9C%8B%E8%B4%BA%E5%B3%BB%E9%9C%96%E8%A7%86%E9%A2%91%23) `196.4K 🔥` `NEW`
1. [欧阳娜娜在北疆慢生活](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%9C%A8%E5%8C%97%E7%96%86%E6%85%A2%E7%94%9F%E6%B4%BB%23) `163.2K 🔥` `NEW`
1. [吴京跳刀马刀马](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E8%B7%B3%E5%88%80%E9%A9%AC%E5%88%80%E9%A9%AC%23) `156.1K 🔥` `NEW`
1. [隐瞒死讯骗打赏饲养员发声](https://s.weibo.com/weibo?q=%23%E9%9A%90%E7%9E%92%E6%AD%BB%E8%AE%AF%E9%AA%97%E6%89%93%E8%B5%8F%E9%A5%B2%E5%85%BB%E5%91%98%E5%8F%91%E5%A3%B0%23) `155.0K 🔥` `NEW`
1. [程潇七年后给偶练F班选手评了A](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E4%B8%83%E5%B9%B4%E5%90%8E%E7%BB%99%E5%81%B6%E7%BB%83F%E7%8F%AD%E9%80%89%E6%89%8B%E8%AF%84%E4%BA%86A%23) `149.4K 🔥` `NEW`
1. [沈腾回应让王安宇演自己](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%9B%9E%E5%BA%94%E8%AE%A9%E7%8E%8B%E5%AE%89%E5%AE%87%E6%BC%94%E8%87%AA%E5%B7%B1%23) `148.2K 🔥` `NEW`
1. [演员郑恩宇去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%83%91%E6%81%A9%E5%AE%87%E5%8E%BB%E4%B8%96%23) `143.9K 🔥` `NEW`
1. [吉利高管谈全球研发和验证](https://s.weibo.com/weibo?q=%23%E5%90%89%E5%88%A9%E9%AB%98%E7%AE%A1%E8%B0%88%E5%85%A8%E7%90%83%E7%A0%94%E5%8F%91%E5%92%8C%E9%AA%8C%E8%AF%81%23) `141.2K 🔥` `NEW`
1. [韩官员因称进口女性被开除党籍 (South Korean official expelled from party for saying imported women)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AE%98%E5%91%98%E5%9B%A0%E7%A7%B0%E8%BF%9B%E5%8F%A3%E5%A5%B3%E6%80%A7%E8%A2%AB%E5%BC%80%E9%99%A4%E5%85%9A%E7%B1%8D%23) `132.7K 🔥` `NEW`
1. [终于有人吐槽语音评论了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E5%90%90%E6%A7%BD%E8%AF%AD%E9%9F%B3%E8%AF%84%E8%AE%BA%E4%BA%86%23) `129.3K 🔥` `NEW`
1. [帕梅拉背后必有高人指点](https://s.weibo.com/weibo?q=%23%E5%B8%95%E6%A2%85%E6%8B%89%E8%83%8C%E5%90%8E%E5%BF%85%E6%9C%89%E9%AB%98%E4%BA%BA%E6%8C%87%E7%82%B9%23) `122.9K 🔥` `NEW`
1. [毒皇后扮演者被迪士尼解雇的原因](https://s.weibo.com/weibo?q=%23%E6%AF%92%E7%9A%87%E5%90%8E%E6%89%AE%E6%BC%94%E8%80%85%E8%A2%AB%E8%BF%AA%E5%A3%AB%E5%B0%BC%E8%A7%A3%E9%9B%87%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `100.0K 🔥` `NEW`
1. [黄子华不仅老了帅了还爱上班了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%8D%8E%E4%B8%8D%E4%BB%85%E8%80%81%E4%BA%86%E5%B8%85%E4%BA%86%E8%BF%98%E7%88%B1%E4%B8%8A%E7%8F%AD%E4%BA%86%23) `98.5K 🔥` `NEW`
1. [实测Seedance2.0人人可做AI导演](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E6%B5%8BSeedance2.0%E4%BA%BA%E4%BA%BA%E5%8F%AF%E5%81%9AAI%E5%AF%BC%E6%BC%94%23) `97.2K 🔥` `NEW`
1. [关晓彤全英文采访](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%85%A8%E8%8B%B1%E6%96%87%E9%87%87%E8%AE%BF%23) `94.7K 🔥` `NEW`
1. [多辆陌生车为孤独的婚车陪跑](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E8%BE%86%E9%99%8C%E7%94%9F%E8%BD%A6%E4%B8%BA%E5%AD%A4%E7%8B%AC%E7%9A%84%E5%A9%9A%E8%BD%A6%E9%99%AA%E8%B7%91%23) `87.7K 🔥` `NEW`
1. [女子点外卖点到僵尸店骑手被罚款](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%82%B9%E5%A4%96%E5%8D%96%E7%82%B9%E5%88%B0%E5%83%B5%E5%B0%B8%E5%BA%97%E9%AA%91%E6%89%8B%E8%A2%AB%E7%BD%9A%E6%AC%BE%23) `1.2M 🔥` `+904%`
1. [国台办回应吴克群帮农民卖3万斤菜](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%E5%90%B4%E5%85%8B%E7%BE%A4%E5%B8%AE%E5%86%9C%E6%B0%91%E5%8D%963%E4%B8%87%E6%96%A4%E8%8F%9C%23) `850.5K 🔥` `+493%`
1. [到中国过年成为热潮 (Going to China to celebrate the New Year has become a craze)](https://s.weibo.com/weibo?q=%23%E5%88%B0%E4%B8%AD%E5%9B%BD%E8%BF%87%E5%B9%B4%E6%88%90%E4%B8%BA%E7%83%AD%E6%BD%AE%23) `784.6K 🔥` `+21%`
1. [建行手机银行智简焕新 (CCB Mobile Banking Smart Brief Renewal)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%A1%8C%E6%89%8B%E6%9C%BA%E9%93%B6%E8%A1%8C%E6%99%BA%E7%AE%80%E7%84%95%E6%96%B0%23) `732.5K 🔥` `+87%`
1. [2025年热搜爆了434次](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E7%83%AD%E6%90%9C%E7%88%86%E4%BA%86434%E6%AC%A1%23) `723.3K 🔥` `+267%`
1. [就知道姚安娜舍不得这个刘海](https://s.weibo.com/weibo?q=%23%E5%B0%B1%E7%9F%A5%E9%81%93%E5%A7%9A%E5%AE%89%E5%A8%9C%E8%88%8D%E4%B8%8D%E5%BE%97%E8%BF%99%E4%B8%AA%E5%88%98%E6%B5%B7%23) `481.0K 🔥`
1. [大侦探](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BE%A6%E6%8E%A2%23) `280.9K 🔥`
1. [96岁爷爷为祛老年斑坚持三年医美](https://s.weibo.com/weibo?q=%2396%E5%B2%81%E7%88%B7%E7%88%B7%E4%B8%BA%E7%A5%9B%E8%80%81%E5%B9%B4%E6%96%91%E5%9D%9A%E6%8C%81%E4%B8%89%E5%B9%B4%E5%8C%BB%E7%BE%8E%23) `235.3K 🔥`
1. [爱泼斯坦狱警用假尸体伪装现场](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E7%8B%B1%E8%AD%A6%E7%94%A8%E5%81%87%E5%B0%B8%E4%BD%93%E4%BC%AA%E8%A3%85%E7%8E%B0%E5%9C%BA%23) `199.3K 🔥`
1. [王濛和关晓彤合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%92%8C%E5%85%B3%E6%99%93%E5%BD%A4%E5%90%88%E7%85%A7%23) `184.0K 🔥`
1. [女子出手8公斤金条套现近900万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%BA%E6%89%8B8%E5%85%AC%E6%96%A4%E9%87%91%E6%9D%A1%E5%A5%97%E7%8E%B0%E8%BF%91900%E4%B8%87%23) `156.3K 🔥`
1. [韩国是一个巨大的县城](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%98%AF%E4%B8%80%E4%B8%AA%E5%B7%A8%E5%A4%A7%E7%9A%84%E5%8E%BF%E5%9F%8E%23) `152.8K 🔥`
1. [沈腾找了个最帅的演自己](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%89%BE%E4%BA%86%E4%B8%AA%E6%9C%80%E5%B8%85%E7%9A%84%E6%BC%94%E8%87%AA%E5%B7%B1%23) `150.8K 🔥`
1. [公司刮奖以为中3万结果是30万 (The company scratched the prize and thought it won 30,000, but it turned out to be 300,000.)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E5%88%AE%E5%A5%96%E4%BB%A5%E4%B8%BA%E4%B8%AD3%E4%B8%87%E7%BB%93%E6%9E%9C%E6%98%AF30%E4%B8%87%23) `146.6K 🔥`
1. [徐冬冬 孕相](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%86%AC%E5%86%AC%20%E5%AD%95%E7%9B%B8%23) `145.4K 🔥`
1. [公公丈夫2天相继离世大姑子在ICU](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%85%AC%E4%B8%88%E5%A4%AB2%E5%A4%A9%E7%9B%B8%E7%BB%A7%E7%A6%BB%E4%B8%96%E5%A4%A7%E5%A7%91%E5%AD%90%E5%9C%A8ICU%23) `140.7K 🔥`
1. [妈妈外出3岁宝宝看店卖出一包烟](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%A4%96%E5%87%BA3%E5%B2%81%E5%AE%9D%E5%AE%9D%E7%9C%8B%E5%BA%97%E5%8D%96%E5%87%BA%E4%B8%80%E5%8C%85%E7%83%9F%23) `117.1K 🔥`
1. [千问帮我](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E5%B8%AE%E6%88%91%23) `101.4K 🔥`
1. [医生科普三级撕裂到底是什么概念](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%A7%91%E6%99%AE%E4%B8%89%E7%BA%A7%E6%92%95%E8%A3%82%E5%88%B0%E5%BA%95%E6%98%AF%E4%BB%80%E4%B9%88%E6%A6%82%E5%BF%B5%23) `94.6K 🔥`
1. [杨紫都演妈妈了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E9%83%BD%E6%BC%94%E5%A6%88%E5%A6%88%E4%BA%86%23) `87.8K 🔥`
1. [文班亚马单节25分](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E5%8D%95%E8%8A%8225%E5%88%86%23) `79.7K 🔥`
1. [饲养员娜娜被责令公开道歉 (Breeder Nana ordered to publicly apologize)](https://s.weibo.com/weibo?q=%23%E9%A5%B2%E5%85%BB%E5%91%98%E5%A8%9C%E5%A8%9C%E8%A2%AB%E8%B4%A3%E4%BB%A4%E5%85%AC%E5%BC%80%E9%81%93%E6%AD%89%23) `272.3K 🔥` `-75%`
1. [微信9大更新 (WeChat 9 major updates)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A19%E5%A4%A7%E6%9B%B4%E6%96%B0%23) `239.7K 🔥` `-70%`
1. [孙海洋夫妇将名下公司转给孙卓](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%B5%B7%E6%B4%8B%E5%A4%AB%E5%A6%87%E5%B0%86%E5%90%8D%E4%B8%8B%E5%85%AC%E5%8F%B8%E8%BD%AC%E7%BB%99%E5%AD%99%E5%8D%93%23) `168.6K 🔥` `-29%`
1. [被央妈看上的偶像剧](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%A4%AE%E5%A6%88%E7%9C%8B%E4%B8%8A%E7%9A%84%E5%81%B6%E5%83%8F%E5%89%A7%23) `166.3K 🔥` `-56%`
1. [28岁员工年会饮酒后死亡 (28-year-old employee died after drinking at annual meeting)](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E5%91%98%E5%B7%A5%E5%B9%B4%E4%BC%9A%E9%A5%AE%E9%85%92%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `155.0K 🔥` `-21%`
1. [李佳琦感谢助理旺旺](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E7%90%A6%E6%84%9F%E8%B0%A2%E5%8A%A9%E7%90%86%E6%97%BA%E6%97%BA%23) `115.1K 🔥` `-40%`
1. [易烊千玺 努力超越满江红](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%20%E5%8A%AA%E5%8A%9B%E8%B6%85%E8%B6%8A%E6%BB%A1%E6%B1%9F%E7%BA%A2%23) `105.4K 🔥` `-38%`
1. [大孤山 (Dagushan)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A4%E5%B1%B1%23) `101.0K 🔥` `-30%`
1. [姚安娜古装](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E5%AE%89%E5%A8%9C%E5%8F%A4%E8%A3%85%23) `96.4K 🔥` `-27%`
1. [鹅鸭杀 (Goose and duck killing)](https://s.weibo.com/weibo?q=%23%E9%B9%85%E9%B8%AD%E6%9D%80%23) `93.2K 🔥` `-46%`
1. [第一次见双胞胎不是一个物种](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%8F%8C%E8%83%9E%E8%83%8E%E4%B8%8D%E6%98%AF%E4%B8%80%E4%B8%AA%E7%89%A9%E7%A7%8D%23) `89.6K 🔥` `-66%`
1. [SM对CBX资产扣押 (SM seizes CBX assets)](https://s.weibo.com/weibo?q=%23SM%E5%AF%B9CBX%E8%B5%84%E4%BA%A7%E6%89%A3%E6%8A%BC%23) `87.1K 🔥` `-22%`
1. [火箭回收](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%AE%AD%E5%9B%9E%E6%94%B6%23) `80.0K 🔥` `-49%`

Updated at 2026-02-11 14:44:34

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
