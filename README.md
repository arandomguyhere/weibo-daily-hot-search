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

1. [浪姐排名 (Sister Lang ranking)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `857.1K 🔥` `NEW`
1. [男子微信群多次侮辱全红婵被拘](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BE%AE%E4%BF%A1%E7%BE%A4%E5%A4%9A%E6%AC%A1%E4%BE%AE%E8%BE%B1%E5%85%A8%E7%BA%A2%E5%A9%B5%E8%A2%AB%E6%8B%98%23) `626.1K 🔥` `NEW`
1. [我国海水直接制氢取得研究新突破](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%B5%B7%E6%B0%B4%E7%9B%B4%E6%8E%A5%E5%88%B6%E6%B0%A2%E5%8F%96%E5%BE%97%E7%A0%94%E7%A9%B6%E6%96%B0%E7%AA%81%E7%A0%B4%23) `474.3K 🔥` `NEW`
1. [李小冉拉王濛起来被甩开](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%8B%89%E7%8E%8B%E6%BF%9B%E8%B5%B7%E6%9D%A5%E8%A2%AB%E7%94%A9%E5%BC%80%23) `354.3K 🔥` `NEW`
1. [这些品牌竟然都是假洋牌](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E5%93%81%E7%89%8C%E7%AB%9F%E7%84%B6%E9%83%BD%E6%98%AF%E5%81%87%E6%B4%8B%E7%89%8C%23) `215.0K 🔥` `NEW`
1. [孙怡爆哭](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%88%86%E5%93%AD%23) `212.0K 🔥` `NEW`
1. [婴儿出生9斤一个月瘦到7斤](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E5%87%BA%E7%94%9F9%E6%96%A4%E4%B8%80%E4%B8%AA%E6%9C%88%E7%98%A6%E5%88%B07%E6%96%A4%23) `183.0K 🔥` `NEW`
1. [中国科学家揭示左撇子真相](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E5%AE%B6%E6%8F%AD%E7%A4%BA%E5%B7%A6%E6%92%87%E5%AD%90%E7%9C%9F%E7%9B%B8%23) `182.3K 🔥` `NEW`
1. [伦敦世乒赛种子位参赛名单](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E7%A7%8D%E5%AD%90%E4%BD%8D%E5%8F%82%E8%B5%9B%E5%90%8D%E5%8D%95%23) `181.7K 🔥` `NEW`
1. [莫氏鸡煲公开秘方](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%85%AC%E5%BC%80%E7%A7%98%E6%96%B9%23) `180.9K 🔥` `NEW`
1. [夸克 海外剧 (Quark overseas drama)](https://s.weibo.com/weibo?q=%23%E5%A4%B8%E5%85%8B%20%E6%B5%B7%E5%A4%96%E5%89%A7%23) `180.5K 🔥` `NEW`
1. [阚清子团比孙怡团票数高](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%9B%A2%E6%AF%94%E5%AD%99%E6%80%A1%E5%9B%A2%E7%A5%A8%E6%95%B0%E9%AB%98%23) `179.7K 🔥` `NEW`
1. [以军当学生面打死加沙小女孩](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%BD%93%E5%AD%A6%E7%94%9F%E9%9D%A2%E6%89%93%E6%AD%BB%E5%8A%A0%E6%B2%99%E5%B0%8F%E5%A5%B3%E5%AD%A9%23) `179.5K 🔥` `NEW`
1. [温峥嵘](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%23) `179.2K 🔥` `NEW`
1. [txt](https://s.weibo.com/weibo?q=%23txt%23) `178.5K 🔥` `NEW`
1. [张雪机车拍卖98次出价记录](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8B%8D%E5%8D%9698%E6%AC%A1%E5%87%BA%E4%BB%B7%E8%AE%B0%E5%BD%95%23) `178.2K 🔥` `NEW`
1. [赵子琪淘汰](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E6%B7%98%E6%B1%B0%23) `177.5K 🔥` `NEW`
1. [网红一栗小莎子因癌症剃光头](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E5%9B%A0%E7%99%8C%E7%97%87%E5%89%83%E5%85%89%E5%A4%B4%23) `176.8K 🔥` `NEW`
1. [被害女医学生母亲频繁吐血](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%AE%B3%E5%A5%B3%E5%8C%BB%E5%AD%A6%E7%94%9F%E6%AF%8D%E4%BA%B2%E9%A2%91%E7%B9%81%E5%90%90%E8%A1%80%23) `175.8K 🔥` `NEW`
1. [运钞车加塞别车司机被批评处罚](https://s.weibo.com/weibo?q=%23%E8%BF%90%E9%92%9E%E8%BD%A6%E5%8A%A0%E5%A1%9E%E5%88%AB%E8%BD%A6%E5%8F%B8%E6%9C%BA%E8%A2%AB%E6%89%B9%E8%AF%84%E5%A4%84%E7%BD%9A%23) `175.1K 🔥` `NEW`
1. [穆祉丞 我爱杰哥 (Mu Zhicheng I love Brother Jie)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E6%88%91%E7%88%B1%E6%9D%B0%E5%93%A5%23) `174.6K 🔥` `NEW`
1. [赵丽颖工作室疑似表达对捆绑的不满](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%96%91%E4%BC%BC%E8%A1%A8%E8%BE%BE%E5%AF%B9%E6%8D%86%E7%BB%91%E7%9A%84%E4%B8%8D%E6%BB%A1%23) `174.3K 🔥` `NEW`
1. [交警回应私家车遭运钞车别车](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E8%AD%A6%E5%9B%9E%E5%BA%94%E7%A7%81%E5%AE%B6%E8%BD%A6%E9%81%AD%E8%BF%90%E9%92%9E%E8%BD%A6%E5%88%AB%E8%BD%A6%23) `155.7K 🔥` `NEW`
1. [周杰伦方回应演唱会划水](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E6%BC%94%E5%94%B1%E4%BC%9A%E5%88%92%E6%B0%B4%23) `145.7K 🔥` `NEW`
1. [阚清子换气声](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%8D%A2%E6%B0%94%E5%A3%B0%23) `139.9K 🔥` `NEW`
1. [男子杀害女儿5个月前买了意外险](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%80%E5%AE%B3%E5%A5%B3%E5%84%BF5%E4%B8%AA%E6%9C%88%E5%89%8D%E4%B9%B0%E4%BA%86%E6%84%8F%E5%A4%96%E9%99%A9%23) `137.1K 🔥` `NEW`
1. [孙千晒和刘诗诗王安宇朴宝剑合照](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E6%99%92%E5%92%8C%E5%88%98%E8%AF%97%E8%AF%97%E7%8E%8B%E5%AE%89%E5%AE%87%E6%9C%B4%E5%AE%9D%E5%89%91%E5%90%88%E7%85%A7%23) `135.5K 🔥` `NEW`
1. [田曦薇这肌肉居然不是p的](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%BF%99%E8%82%8C%E8%82%89%E5%B1%85%E7%84%B6%E4%B8%8D%E6%98%AFp%E7%9A%84%23) `118.3K 🔥` `NEW`
1. [JDG战胜AL](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9CAL%23) `115.7K 🔥` `NEW`
1. [伊斯兰堡已进入红色警戒](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%96%AF%E5%85%B0%E5%A0%A1%E5%B7%B2%E8%BF%9B%E5%85%A5%E7%BA%A2%E8%89%B2%E8%AD%A6%E6%88%92%23) `114.6K 🔥` `NEW`
1. [虞书欣Ins更新 (Yu Shuxin Ins update)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3Ins%E6%9B%B4%E6%96%B0%23) `114.2K 🔥` `NEW`
1. [IU新剧开播](https://s.weibo.com/weibo?q=%23IU%E6%96%B0%E5%89%A7%E5%BC%80%E6%92%AD%23) `112.2K 🔥` `NEW`
1. [黄瓜拌菠萝火了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%93%9C%E6%8B%8C%E8%8F%A0%E8%90%9D%E7%81%AB%E4%BA%86%23) `107.9K 🔥` `NEW`
1. [冰湖重生官微删博](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E5%AE%98%E5%BE%AE%E5%88%A0%E5%8D%9A%23) `107.7K 🔥` `NEW`
1. [张杰在张杰演唱会上看张杰](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%9C%A8%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E7%9C%8B%E5%BC%A0%E6%9D%B0%23) `107.0K 🔥` `NEW`
1. [警方通报父母离婚不接年幼乘客](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%88%B6%E6%AF%8D%E7%A6%BB%E5%A9%9A%E4%B8%8D%E6%8E%A5%E5%B9%B4%E5%B9%BC%E4%B9%98%E5%AE%A2%23) `90.6K 🔥` `NEW`
1. [孔刘老了](https://s.weibo.com/weibo?q=%23%E5%AD%94%E5%88%98%E8%80%81%E4%BA%86%23) `89.5K 🔥` `NEW`
1. [EXO开场唱MAMA](https://s.weibo.com/weibo?q=%23EXO%E5%BC%80%E5%9C%BA%E5%94%B1MAMA%23) `89.5K 🔥` `NEW`
1. [为什么穿睡衣那么显瘦](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%A9%BF%E7%9D%A1%E8%A1%A3%E9%82%A3%E4%B9%88%E6%98%BE%E7%98%A6%23) `89.1K 🔥` `NEW`
1. [浪姐哭完你的哭你的](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%93%AD%E5%AE%8C%E4%BD%A0%E7%9A%84%E5%93%AD%E4%BD%A0%E7%9A%84%23) `88.9K 🔥` `NEW`
1. [快乐家族在张杰演唱会团建 (Happy family team building at Zhang Jie's concert)](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E4%B9%90%E5%AE%B6%E6%97%8F%E5%9C%A8%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9B%A2%E5%BB%BA%23) `88.8K 🔥` `NEW`
1. [95后女生回村养6万条蛇年入百万](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E5%A5%B3%E7%94%9F%E5%9B%9E%E6%9D%91%E5%85%BB6%E4%B8%87%E6%9D%A1%E8%9B%87%E5%B9%B4%E5%85%A5%E7%99%BE%E4%B8%87%23) `88.8K 🔥` `NEW`
1. [魏大勋胡先煦十日终焉开机照](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E8%83%A1%E5%85%88%E7%85%A6%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%BC%80%E6%9C%BA%E7%85%A7%23) `88.7K 🔥` `NEW`
1. [奔跑吧ins取关TWS](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7ins%E5%8F%96%E5%85%B3TWS%23) `88.7K 🔥` `NEW`
1. [发现了辛苦了这句话的最佳回复](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E4%BA%86%E8%BE%9B%E8%8B%A6%E4%BA%86%E8%BF%99%E5%8F%A5%E8%AF%9D%E7%9A%84%E6%9C%80%E4%BD%B3%E5%9B%9E%E5%A4%8D%23) `88.6K 🔥` `NEW`
1. [4岁女童遭生父溺亡家属发声](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E7%AB%A5%E9%81%AD%E7%94%9F%E7%88%B6%E6%BA%BA%E4%BA%A1%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `88.5K 🔥` `NEW`
1. [美国海滩连环命案华人男尸身着女装](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%B5%B7%E6%BB%A9%E8%BF%9E%E7%8E%AF%E5%91%BD%E6%A1%88%E5%8D%8E%E4%BA%BA%E7%94%B7%E5%B0%B8%E8%BA%AB%E7%9D%80%E5%A5%B3%E8%A3%85%23) `88.4K 🔥` `NEW`
1. [运钞车高架上加塞别车司机已找到](https://s.weibo.com/weibo?q=%23%E8%BF%90%E9%92%9E%E8%BD%A6%E9%AB%98%E6%9E%B6%E4%B8%8A%E5%8A%A0%E5%A1%9E%E5%88%AB%E8%BD%A6%E5%8F%B8%E6%9C%BA%E5%B7%B2%E6%89%BE%E5%88%B0%23) `88.4K 🔥` `NEW`
1. [鸡煲老板遇撞脸刘雨鑫记者场面失控](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E9%81%87%E6%92%9E%E8%84%B8%E5%88%98%E9%9B%A8%E9%91%AB%E8%AE%B0%E8%80%85%E5%9C%BA%E9%9D%A2%E5%A4%B1%E6%8E%A7%23) `88.3K 🔥` `NEW`
1. [华为Pura90系列配色](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPura90%E7%B3%BB%E5%88%97%E9%85%8D%E8%89%B2%23) `88.2K 🔥` `NEW`

Updated at 2026-04-11 00:32:05

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
