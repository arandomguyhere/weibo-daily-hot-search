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

1. [短道速滑混团接力 (Short track speed skating mixed team relay)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%E6%B7%B7%E5%9B%A2%E6%8E%A5%E5%8A%9B%23) `810.3K 🔥` `NEW`
1. [2026丝路春晚](https://s.weibo.com/weibo?q=%232026%E4%B8%9D%E8%B7%AF%E6%98%A5%E6%99%9A%23) `655.6K 🔥` `NEW`
1. [林孝埈晋级](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E6%99%8B%E7%BA%A7%23) `462.8K 🔥` `NEW`
1. [中国短道队混接晋级](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9F%AD%E9%81%93%E9%98%9F%E6%B7%B7%E6%8E%A5%E6%99%8B%E7%BA%A7%23) `319.9K 🔥` `NEW`
1. [王曼昱决胜局擦边球尊重裁判](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%86%B3%E8%83%9C%E5%B1%80%E6%93%A6%E8%BE%B9%E7%90%83%E5%B0%8A%E9%87%8D%E8%A3%81%E5%88%A4%23) `251.1K 🔥` `NEW`
1. [任子威解说](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AD%90%E5%A8%81%E8%A7%A3%E8%AF%B4%23) `225.9K 🔥` `NEW`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `191.5K 🔥` `NEW`
1. [身边人均十多张免单卡的含金量](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E8%BE%B9%E4%BA%BA%E5%9D%87%E5%8D%81%E5%A4%9A%E5%BC%A0%E5%85%8D%E5%8D%95%E5%8D%A1%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `189.3K 🔥` `NEW`
1. [没红包你还会用AI软件吗](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E7%BA%A2%E5%8C%85%E4%BD%A0%E8%BF%98%E4%BC%9A%E7%94%A8AI%E8%BD%AF%E4%BB%B6%E5%90%97%23) `188.6K 🔥` `NEW`
1. [小年夜](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B9%B4%E5%A4%9C%23) `188.6K 🔥` `NEW`
1. [陈星旭 情商 (Chen Xingxu Emotional Intelligence)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%20%E6%83%85%E5%95%86%23) `188.0K 🔥` `NEW`
1. [于正回应明星扎堆前往大孤山](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E6%98%8E%E6%98%9F%E6%89%8E%E5%A0%86%E5%89%8D%E5%BE%80%E5%A4%A7%E5%AD%A4%E5%B1%B1%23) `183.9K 🔥` `NEW`
1. [关晓彤观赛中国短道速滑](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E8%A7%82%E8%B5%9B%E4%B8%AD%E5%9B%BD%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%23) `170.4K 🔥` `NEW`
1. [范可新哭了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%8F%AF%E6%96%B0%E5%93%AD%E4%BA%86%23) `150.6K 🔥` `NEW`
1. [关晓彤晒冬奥会现场照](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%99%92%E5%86%AC%E5%A5%A5%E4%BC%9A%E7%8E%B0%E5%9C%BA%E7%85%A7%23) `149.1K 🔥` `NEW`
1. [米哈游宣布解雇常年法律顾问](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%93%88%E6%B8%B8%E5%AE%A3%E5%B8%83%E8%A7%A3%E9%9B%87%E5%B8%B8%E5%B9%B4%E6%B3%95%E5%BE%8B%E9%A1%BE%E9%97%AE%23) `146.1K 🔥` `NEW`
1. [不二之臣直播](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BA%8C%E4%B9%8B%E8%87%A3%E7%9B%B4%E6%92%AD%23) `137.3K 🔥` `NEW`
1. [就这样握到了娜扎的手](https://s.weibo.com/weibo?q=%23%E5%B0%B1%E8%BF%99%E6%A0%B7%E6%8F%A1%E5%88%B0%E4%BA%86%E5%A8%9C%E6%89%8E%E7%9A%84%E6%89%8B%23) `98.3K 🔥` `NEW`
1. [王橹杰饰演徐安博](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%A5%B0%E6%BC%94%E5%BE%90%E5%AE%89%E5%8D%9A%23) `97.6K 🔥` `NEW`
1. [seedance2.0爆火网友担忧身份冒用](https://s.weibo.com/weibo?q=%23seedance2.0%E7%88%86%E7%81%AB%E7%BD%91%E5%8F%8B%E6%8B%85%E5%BF%A7%E8%BA%AB%E4%BB%BD%E5%86%92%E7%94%A8%23) `96.2K 🔥` `NEW`
1. [孙龙1000米顺利晋级 (Sun Long successfully advanced to 1,000 meters)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%991000%E7%B1%B3%E9%A1%BA%E5%88%A9%E6%99%8B%E7%BA%A7%23) `95.0K 🔥` `NEW`
1. [千问接入大麦](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E6%8E%A5%E5%85%A5%E5%A4%A7%E9%BA%A6%23) `94.9K 🔥` `NEW`
1. [今年春节还回家吃饭吗](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E6%98%A5%E8%8A%82%E8%BF%98%E5%9B%9E%E5%AE%B6%E5%90%83%E9%A5%AD%E5%90%97%23) `94.0K 🔥` `NEW`
1. [年少有为](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%B0%91%E6%9C%89%E4%B8%BA%23) `93.8K 🔥` `NEW`
1. [第一个拒绝宋雨琦的人出现了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%8B%92%E7%BB%9D%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%9A%84%E4%BA%BA%E5%87%BA%E7%8E%B0%E4%BA%86%23) `92.9K 🔥` `NEW`
1. [切角蛋糕价格](https://s.weibo.com/weibo?q=%23%E5%88%87%E8%A7%92%E8%9B%8B%E7%B3%95%E4%BB%B7%E6%A0%BC%23) `92.9K 🔥` `NEW`
1. [米哈游法务部发布声明](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%93%88%E6%B8%B8%E6%B3%95%E5%8A%A1%E9%83%A8%E5%8F%91%E5%B8%83%E5%A3%B0%E6%98%8E%23) `92.0K 🔥` `NEW`
1. [汕头4200一晚的亚朵已订满](https://s.weibo.com/weibo?q=%23%E6%B1%95%E5%A4%B44200%E4%B8%80%E6%99%9A%E7%9A%84%E4%BA%9A%E6%9C%B5%E5%B7%B2%E8%AE%A2%E6%BB%A1%23) `260.3K 🔥` `+177%`
1. [黄子弘凡TF四代cha无想](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1TF%E5%9B%9B%E4%BB%A3cha%E6%97%A0%E6%83%B3%23) `233.9K 🔥` `+123%`
1. [瑞幸 错别字 (Luckin typo)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%20%E9%94%99%E5%88%AB%E5%AD%97%23) `180.2K 🔥` `+72%`
1. [白鹿孟子义一起去了大孤山 (Bailu and Meng Ziyi went to Dagushan together)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%80%E8%B5%B7%E5%8E%BB%E4%BA%86%E5%A4%A7%E5%AD%A4%E5%B1%B1%23) `176.2K 🔥` `+68%`
1. [男子短道速滑1000米预赛 (Men's short track speed skating 1000m preliminaries)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%911000%E7%B1%B3%E9%A2%84%E8%B5%9B%23) `1.1M 🔥`
1. [瑞幸回应杯套出现错别字](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%9B%9E%E5%BA%94%E6%9D%AF%E5%A5%97%E5%87%BA%E7%8E%B0%E9%94%99%E5%88%AB%E5%AD%97%23) `415.5K 🔥`
1. [关系再好也不要说的事 (Things you shouldn’t say no matter how good your relationship is)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E7%B3%BB%E5%86%8D%E5%A5%BD%E4%B9%9F%E4%B8%8D%E8%A6%81%E8%AF%B4%E7%9A%84%E4%BA%8B%23) `396.7K 🔥`
1. [中国高端新能源汽车的星光时刻](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%AB%98%E7%AB%AF%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%E7%9A%84%E6%98%9F%E5%85%89%E6%97%B6%E5%88%BB%23) `383.3K 🔥`
1. [我们的少年时代2 双男主](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%20%E5%8F%8C%E7%94%B7%E4%B8%BB%23) `244.9K 🔥`
1. [小年](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B9%B4%23) `235.2K 🔥`
1. [爱泼斯坦案出现一名9岁受害者 (A 9-year-old victim emerges in Epstein case)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E5%87%BA%E7%8E%B0%E4%B8%80%E5%90%8D9%E5%B2%81%E5%8F%97%E5%AE%B3%E8%80%85%23) `169.6K 🔥`
1. [易烊千玺严迪分手记得改密码](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E4%B8%A5%E8%BF%AA%E5%88%86%E6%89%8B%E8%AE%B0%E5%BE%97%E6%94%B9%E5%AF%86%E7%A0%81%23) `146.2K 🔥`
1. [女生拔牙自行吃止痛药进ICU](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%8B%94%E7%89%99%E8%87%AA%E8%A1%8C%E5%90%83%E6%AD%A2%E7%97%9B%E8%8D%AF%E8%BF%9BICU%23) `100.2K 🔥`
1. [千万粉丝网红晒妻子生产过程遭质疑 (Internet celebrity with millions of fans exposed his wife’s birth process and was questioned)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E7%B2%89%E4%B8%9D%E7%BD%91%E7%BA%A2%E6%99%92%E5%A6%BB%E5%AD%90%E7%94%9F%E4%BA%A7%E8%BF%87%E7%A8%8B%E9%81%AD%E8%B4%A8%E7%96%91%23) `92.6K 🔥`
1. [我拍的王一博 (I photographed Wang Yibo)](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%8B%8D%E7%9A%84%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `92.4K 🔥`
1. [女子短道速滑500米预赛](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91500%E7%B1%B3%E9%A2%84%E8%B5%9B%23) `369.4K 🔥` `-54%`
1. [薛之谦万兽之王演唱会官宣](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%B8%87%E5%85%BD%E4%B9%8B%E7%8E%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `283.8K 🔥` `-24%`
1. [洪世贤掉到榜二了](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E4%B8%96%E8%B4%A4%E6%8E%89%E5%88%B0%E6%A6%9C%E4%BA%8C%E4%BA%86%23) `248.3K 🔥` `-60%`
1. [短道速滑 紧张](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%20%E7%B4%A7%E5%BC%A0%23) `213.4K 🔥` `-23%`
1. [浙江省坚决拥护党中央决定 (Zhejiang Province firmly supports the decision of the Party Central Committee)](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E7%9C%81%E5%9D%9A%E5%86%B3%E6%8B%A5%E6%8A%A4%E5%85%9A%E4%B8%AD%E5%A4%AE%E5%86%B3%E5%AE%9A%23) `164.7K 🔥` `-25%`
1. [元宝微信发红包 (Yuanbao sends red envelopes via WeChat)](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E5%BE%AE%E4%BF%A1%E5%8F%91%E7%BA%A2%E5%8C%85%23) `162.8K 🔥` `-58%`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `130.9K 🔥` `-63%`
1. [金像奖最佳女配角提名](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E9%85%8D%E8%A7%92%E6%8F%90%E5%90%8D%23) `100.0K 🔥` `-54%`
1. [陈星旭 没提前让我背稿 (Chen Xingxu didn’t ask me to memorize the draft in advance)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%20%E6%B2%A1%E6%8F%90%E5%89%8D%E8%AE%A9%E6%88%91%E8%83%8C%E7%A8%BF%23) `95.4K 🔥` `-58%`

Updated at 2026-02-10 19:36:04

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
