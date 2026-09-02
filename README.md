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

1. [美国银行副总裁时代广场被刺身亡](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%93%B6%E8%A1%8C%E5%89%AF%E6%80%BB%E8%A3%81%E6%97%B6%E4%BB%A3%E5%B9%BF%E5%9C%BA%E8%A2%AB%E5%88%BA%E8%BA%AB%E4%BA%A1%23) `1.9M 🔥` `NEW`
1. [老款手机集体涨价](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%AC%BE%E6%89%8B%E6%9C%BA%E9%9B%86%E4%BD%93%E6%B6%A8%E4%BB%B7%23) `945.4K 🔥` `NEW`
1. [吉隆口岸上游堰塞湖已完全泄洪](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E4%B8%8A%E6%B8%B8%E5%A0%B0%E5%A1%9E%E6%B9%96%E5%B7%B2%E5%AE%8C%E5%85%A8%E6%B3%84%E6%B4%AA%23) `742.6K 🔥` `NEW`
1. [花少2被爆料大量未播细节](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E8%A2%AB%E7%88%86%E6%96%99%E5%A4%A7%E9%87%8F%E6%9C%AA%E6%92%AD%E7%BB%86%E8%8A%82%23) `719.3K 🔥` `NEW`
1. [曼城1.46亿欧元签下恩佐](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8E1.46%E4%BA%BF%E6%AC%A7%E5%85%83%E7%AD%BE%E4%B8%8B%E6%81%A9%E4%BD%90%23) `420.8K 🔥` `NEW`
1. [曝花少2没有母带了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%8A%B1%E5%B0%912%E6%B2%A1%E6%9C%89%E6%AF%8D%E5%B8%A6%E4%BA%86%23) `412.7K 🔥` `NEW`
1. [你今天好好吃饭了吗](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%8A%E5%A4%A9%E5%A5%BD%E5%A5%BD%E5%90%83%E9%A5%AD%E4%BA%86%E5%90%97%23) `397.9K 🔥` `NEW`
1. [毛阿敏 许晴](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E9%98%BF%E6%95%8F%20%E8%AE%B8%E6%99%B4%23) `257.8K 🔥` `NEW`
1. [女子当街被殴打扒裤警方已介入](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BD%93%E8%A1%97%E8%A2%AB%E6%AE%B4%E6%89%93%E6%89%92%E8%A3%A4%E8%AD%A6%E6%96%B9%E5%B7%B2%E4%BB%8B%E5%85%A5%23) `250.8K 🔥` `NEW`
1. [深圳校服火了背后是教育边界问题](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%A0%A1%E6%9C%8D%E7%81%AB%E4%BA%86%E8%83%8C%E5%90%8E%E6%98%AF%E6%95%99%E8%82%B2%E8%BE%B9%E7%95%8C%E9%97%AE%E9%A2%98%23) `235.8K 🔥` `NEW`
1. [网传花少2原嘉宾阵容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%8A%B1%E5%B0%912%E5%8E%9F%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `233.6K 🔥` `NEW`
1. [iPhoneUltra 首发溢价](https://s.weibo.com/weibo?q=%23iPhoneUltra%20%E9%A6%96%E5%8F%91%E6%BA%A2%E4%BB%B7%23) `150.7K 🔥` `NEW`
1. [郑钦文缺席中网海报引争议](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%BC%BA%E5%B8%AD%E4%B8%AD%E7%BD%91%E6%B5%B7%E6%8A%A5%E5%BC%95%E4%BA%89%E8%AE%AE%23) `147.0K 🔥` `NEW`
1. [关晓彤新剧央一定档](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%96%B0%E5%89%A7%E5%A4%AE%E4%B8%80%E5%AE%9A%E6%A1%A3%23) `144.9K 🔥` `NEW`
1. [包装 镉超标](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%A3%85%20%E9%95%89%E8%B6%85%E6%A0%87%23) `135.7K 🔥` `NEW`
1. [宁静花少里该做的一点没少](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%E8%8A%B1%E5%B0%91%E9%87%8C%E8%AF%A5%E5%81%9A%E7%9A%84%E4%B8%80%E7%82%B9%E6%B2%A1%E5%B0%91%23) `134.6K 🔥` `NEW`
1. [小S回应娱乐百分百翻红](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%9B%9E%E5%BA%94%E5%A8%B1%E4%B9%90%E7%99%BE%E5%88%86%E7%99%BE%E7%BF%BB%E7%BA%A2%23) `133.7K 🔥` `NEW`
1. [猫砂企业请了48个猫员工](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%A0%82%E4%BC%81%E4%B8%9A%E8%AF%B7%E4%BA%8648%E4%B8%AA%E7%8C%AB%E5%91%98%E5%B7%A5%23) `132.8K 🔥` `NEW`
1. [美网](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%23) `131.6K 🔥` `NEW`
1. [中介称星宇有争议舆论不好招人](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BB%8B%E7%A7%B0%E6%98%9F%E5%AE%87%E6%9C%89%E4%BA%89%E8%AE%AE%E8%88%86%E8%AE%BA%E4%B8%8D%E5%A5%BD%E6%8B%9B%E4%BA%BA%23) `130.9K 🔥` `NEW`
1. [伊朗一婚礼因美军袭击4死50伤](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%80%E5%A9%9A%E7%A4%BC%E5%9B%A0%E7%BE%8E%E5%86%9B%E8%A2%AD%E5%87%BB4%E6%AD%BB50%E4%BC%A4%23) `129.3K 🔥` `NEW`
1. [北京真的有栾念](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E7%9C%9F%E7%9A%84%E6%9C%89%E6%A0%BE%E5%BF%B5%23) `129.2K 🔥` `NEW`
1. [等发新机老款降价结果更贵](https://s.weibo.com/weibo?q=%23%E7%AD%89%E5%8F%91%E6%96%B0%E6%9C%BA%E8%80%81%E6%AC%BE%E9%99%8D%E4%BB%B7%E7%BB%93%E6%9E%9C%E6%9B%B4%E8%B4%B5%23) `129.1K 🔥` `NEW`
1. [这猫是正规渠道认识的吗](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%8C%AB%E6%98%AF%E6%AD%A3%E8%A7%84%E6%B8%A0%E9%81%93%E8%AE%A4%E8%AF%86%E7%9A%84%E5%90%97%23) `128.7K 🔥` `NEW`
1. [韩庚卢靖姗女儿这么大了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%BA%9A%E5%8D%A2%E9%9D%96%E5%A7%97%E5%A5%B3%E5%84%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `127.9K 🔥` `NEW`
1. [井柏然对花少2每个人的点评](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AF%B9%E8%8A%B1%E5%B0%912%E6%AF%8F%E4%B8%AA%E4%BA%BA%E7%9A%84%E7%82%B9%E8%AF%84%23) `119.1K 🔥` `NEW`
1. [重案六组开播满屏呼唤王茜版季洁](https://s.weibo.com/weibo?q=%23%E9%87%8D%E6%A1%88%E5%85%AD%E7%BB%84%E5%BC%80%E6%92%AD%E6%BB%A1%E5%B1%8F%E5%91%BC%E5%94%A4%E7%8E%8B%E8%8C%9C%E7%89%88%E5%AD%A3%E6%B4%81%23) `91.4K 🔥` `NEW`
1. [知道非洲人为什么热衷于钢丝头发型了](https://s.weibo.com/weibo?q=%23%E7%9F%A5%E9%81%93%E9%9D%9E%E6%B4%B2%E4%BA%BA%E4%B8%BA%E4%BB%80%E4%B9%88%E7%83%AD%E8%A1%B7%E4%BA%8E%E9%92%A2%E4%B8%9D%E5%A4%B4%E5%8F%91%E5%9E%8B%E4%BA%86%23) `91.2K 🔥` `NEW`
1. [谭松韵刘学义兰香如故上下部备播](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%88%98%E5%AD%A6%E4%B9%89%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E4%B8%8A%E4%B8%8B%E9%83%A8%E5%A4%87%E6%92%AD%23) `84.6K 🔥` `NEW`
1. [全麦面包 染色](https://s.weibo.com/weibo?q=%23%E5%85%A8%E9%BA%A6%E9%9D%A2%E5%8C%85%20%E6%9F%93%E8%89%B2%23) `84.1K 🔥` `NEW`
1. [男子盘手串包浆后被妻子用刷子搓干净](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%9B%98%E6%89%8B%E4%B8%B2%E5%8C%85%E6%B5%86%E5%90%8E%E8%A2%AB%E5%A6%BB%E5%AD%90%E7%94%A8%E5%88%B7%E5%AD%90%E6%90%93%E5%B9%B2%E5%87%80%23) `330.1K 🔥` `+889%`
1. [张一山演技](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%80%E5%B1%B1%E6%BC%94%E6%8A%80%23) `317.4K 🔥` `+33%`
1. [美国遭遇股债汇三杀](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%81%AD%E9%81%87%E8%82%A1%E5%80%BA%E6%B1%87%E4%B8%89%E6%9D%80%23) `265.9K 🔥` `+518%`
1. [皇马将西藏与尼泊尔并列拒绝改正](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E5%B0%86%E8%A5%BF%E8%97%8F%E4%B8%8E%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B9%B6%E5%88%97%E6%8B%92%E7%BB%9D%E6%94%B9%E6%AD%A3%23) `262.1K 🔥` `+441%`
1. [被父母全力托举的孩子会不会被养废](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%88%B6%E6%AF%8D%E5%85%A8%E5%8A%9B%E6%89%98%E4%B8%BE%E7%9A%84%E5%AD%A9%E5%AD%90%E4%BC%9A%E4%B8%8D%E4%BC%9A%E8%A2%AB%E5%85%BB%E5%BA%9F%23) `244.9K 🔥` `+408%`
1. [宁静回应花少2分析](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%E5%9B%9E%E5%BA%94%E8%8A%B1%E5%B0%912%E5%88%86%E6%9E%90%23) `238.7K 🔥` `+62%`
1. [苹果CEO特努斯入驻微博](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CCEO%E7%89%B9%E5%8A%AA%E6%96%AF%E5%85%A5%E9%A9%BB%E5%BE%AE%E5%8D%9A%23) `235.4K 🔥` `+321%`
1. [皇马 中国西藏](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%20%E4%B8%AD%E5%9B%BD%E8%A5%BF%E8%97%8F%23) `187.5K 🔥` `+294%`
1. [灵活的走位可以避免绝大多数的伤害](https://s.weibo.com/weibo?q=%23%E7%81%B5%E6%B4%BB%E7%9A%84%E8%B5%B0%E4%BD%8D%E5%8F%AF%E4%BB%A5%E9%81%BF%E5%85%8D%E7%BB%9D%E5%A4%A7%E5%A4%9A%E6%95%B0%E7%9A%84%E4%BC%A4%E5%AE%B3%23) `154.9K 🔥` `+417%`
1. [徐州12345涌入万件演唱会诉求](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%B7%9E12345%E6%B6%8C%E5%85%A5%E4%B8%87%E4%BB%B6%E6%BC%94%E5%94%B1%E4%BC%9A%E8%AF%89%E6%B1%82%23) `154.5K 🔥` `+302%`
1. [杭州电梯事件女方公司被扒](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%94%B5%E6%A2%AF%E4%BA%8B%E4%BB%B6%E5%A5%B3%E6%96%B9%E5%85%AC%E5%8F%B8%E8%A2%AB%E6%89%92%23) `153.8K 🔥` `+300%`
1. [身体比人们预期的更能宽恕](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E6%AF%94%E4%BA%BA%E4%BB%AC%E9%A2%84%E6%9C%9F%E7%9A%84%E6%9B%B4%E8%83%BD%E5%AE%BD%E6%81%95%23) `153.7K 🔥` `+359%`
1. [阿联酋小女孩豪掷290万拍白猎鹰](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%81%94%E9%85%8B%E5%B0%8F%E5%A5%B3%E5%AD%A9%E8%B1%AA%E6%8E%B7290%E4%B8%87%E6%8B%8D%E7%99%BD%E7%8C%8E%E9%B9%B0%23) `127.3K 🔥` `+288%`
1. [杨洋花少口碑](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E8%8A%B1%E5%B0%91%E5%8F%A3%E7%A2%91%23) `124.4K 🔥` `+112%`
1. [妈妈又没说不给你买](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%8F%88%E6%B2%A1%E8%AF%B4%E4%B8%8D%E7%BB%99%E4%BD%A0%E4%B9%B0%23) `104.5K 🔥` `+119%`
1. [花少2分析](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E5%88%86%E6%9E%90%23) `101.4K 🔥` `+97%`
1. [那个用防窥屏的朋友](https://s.weibo.com/weibo?q=%23%E9%82%A3%E4%B8%AA%E7%94%A8%E9%98%B2%E7%AA%A5%E5%B1%8F%E7%9A%84%E6%9C%8B%E5%8F%8B%23) `96.9K 🔥` `+50%`
1. [手机涨价](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%23) `90.4K 🔥` `+86%`
1. [深圳校服为什么引发网友共鸣](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%A0%A1%E6%9C%8D%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BC%95%E5%8F%91%E7%BD%91%E5%8F%8B%E5%85%B1%E9%B8%A3%23) `88.9K 🔥` `+159%`
1. [36岁女子求职被HR脑补有孩子](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E5%A5%B3%E5%AD%90%E6%B1%82%E8%81%8C%E8%A2%ABHR%E8%84%91%E8%A1%A5%E6%9C%89%E5%AD%A9%E5%AD%90%23) `86.3K 🔥` `+85%`
1. [手机涨价 卖不动](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%20%E5%8D%96%E4%B8%8D%E5%8A%A8%23) `372.6K 🔥`

Updated at 2026-09-02 08:14:07

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
