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

1. [社交平台惊现众多港险销售网红 (Many Hong Kong insurance sales influencers appear on social platforms)](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BA%A4%E5%B9%B3%E5%8F%B0%E6%83%8A%E7%8E%B0%E4%BC%97%E5%A4%9A%E6%B8%AF%E9%99%A9%E9%94%80%E5%94%AE%E7%BD%91%E7%BA%A2%23) `122.7K 🔥` `NEW`
1. [金价连续一周下跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%BF%9E%E7%BB%AD%E4%B8%80%E5%91%A8%E4%B8%8B%E8%B7%8C%23) `122.0K 🔥` `NEW`
1. [外籍男子上车插队被拽下车](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%B1%8D%E7%94%B7%E5%AD%90%E4%B8%8A%E8%BD%A6%E6%8F%92%E9%98%9F%E8%A2%AB%E6%8B%BD%E4%B8%8B%E8%BD%A6%23) `110.0K 🔥` `NEW`
1. [蜂蜜的针 超前](https://s.weibo.com/weibo?q=%23%E8%9C%82%E8%9C%9C%E7%9A%84%E9%92%88%20%E8%B6%85%E5%89%8D%23) `106.6K 🔥` `NEW`
1. [人类器官居然能3D打印了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E5%99%A8%E5%AE%98%E5%B1%85%E7%84%B6%E8%83%BD3D%E6%89%93%E5%8D%B0%E4%BA%86%23) `95.2K 🔥` `NEW`
1. [女性对抗衰老就是力量训练](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%80%A7%E5%AF%B9%E6%8A%97%E8%A1%B0%E8%80%81%E5%B0%B1%E6%98%AF%E5%8A%9B%E9%87%8F%E8%AE%AD%E7%BB%83%23) `87.1K 🔥` `NEW`
1. [梅尼耶曝与女友相识过程](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%B0%BC%E8%80%B6%E6%9B%9D%E4%B8%8E%E5%A5%B3%E5%8F%8B%E7%9B%B8%E8%AF%86%E8%BF%87%E7%A8%8B%23) `83.9K 🔥` `NEW`
1. [WE对战TTG](https://s.weibo.com/weibo?q=%23WE%E5%AF%B9%E6%88%98TTG%23) `82.5K 🔥` `NEW`
1. [爱吃荔枝的人今年天塌了 (People who love lychees are in trouble this year)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E8%8D%94%E6%9E%9D%E7%9A%84%E4%BA%BA%E4%BB%8A%E5%B9%B4%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `1.1M 🔥` `+34%`
1. [律师解读梅姨照片为何暂不公开](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%A7%A3%E8%AF%BB%E6%A2%85%E5%A7%A8%E7%85%A7%E7%89%87%E4%B8%BA%E4%BD%95%E6%9A%82%E4%B8%8D%E5%85%AC%E5%BC%80%23) `752.0K 🔥` `+254%`
1. [田曦薇撅嘴要张凌赫道歉](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%92%85%E5%98%B4%E8%A6%81%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%81%93%E6%AD%89%23) `503.6K 🔥` `+282%`
1. [9组数据见证大国治水生动画卷 (9 sets of data testify to the animation volume of aquatic governance in a great country)](https://s.weibo.com/weibo?q=%239%E7%BB%84%E6%95%B0%E6%8D%AE%E8%A7%81%E8%AF%81%E5%A4%A7%E5%9B%BD%E6%B2%BB%E6%B0%B4%E7%94%9F%E5%8A%A8%E7%94%BB%E5%8D%B7%23) `616.6K 🔥`
1. [苍兰诀 (Cang Lan Jue)](https://s.weibo.com/weibo?q=%23%E8%8B%8D%E5%85%B0%E8%AF%80%23) `597.9K 🔥`
1. [G2对战BLG](https://s.weibo.com/weibo?q=%23G2%E5%AF%B9%E6%88%98BLG%23) `190.7K 🔥`
1. [逐玉直播 (Zhuyu live broadcast)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%9B%B4%E6%92%AD%23) `178.6K 🔥`
1. [双汇王中王火腿肠被曝吃出两根钢钉 (Shuanghui King of Kings ham sausage was exposed to have eaten two steel nails)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E6%B1%87%E7%8E%8B%E4%B8%AD%E7%8E%8B%E7%81%AB%E8%85%BF%E8%82%A0%E8%A2%AB%E6%9B%9D%E5%90%83%E5%87%BA%E4%B8%A4%E6%A0%B9%E9%92%A2%E9%92%89%23) `154.6K 🔥`
1. [23岁女子刚结婚一年就闭经](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E5%A5%B3%E5%AD%90%E5%88%9A%E7%BB%93%E5%A9%9A%E4%B8%80%E5%B9%B4%E5%B0%B1%E9%97%AD%E7%BB%8F%23) `122.2K 🔥`
1. [高市早苗称访美照夸张系因太感动](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E7%A7%B0%E8%AE%BF%E7%BE%8E%E7%85%A7%E5%A4%B8%E5%BC%A0%E7%B3%BB%E5%9B%A0%E5%A4%AA%E6%84%9F%E5%8A%A8%23) `121.0K 🔥`
1. [张真源 青岛](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%20%E9%9D%92%E5%B2%9B%23) `113.1K 🔥`
1. [伊朗发起第74波打击 (Iran launches 74th wave of strikes)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E8%B5%B7%E7%AC%AC74%E6%B3%A2%E6%89%93%E5%87%BB%23) `92.9K 🔥`
1. [薛之谦演唱会 (Joker Xue Concert)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `92.7K 🔥`
1. [白宇演技](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%87%E6%BC%94%E6%8A%80%23) `91.7K 🔥`
1. [穆祉丞 太湖湾音乐节](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E5%A4%AA%E6%B9%96%E6%B9%BE%E9%9F%B3%E4%B9%90%E8%8A%82%23) `85.9K 🔥`
1. [央视曝光活鱼麻醉剂滥用乱象](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E6%B4%BB%E9%B1%BC%E9%BA%BB%E9%86%89%E5%89%82%E6%BB%A5%E7%94%A8%E4%B9%B1%E8%B1%A1%23) `577.9K 🔥` `-46%`
1. [伊朗媒体称伊官员提出停战六项条件](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AA%92%E4%BD%93%E7%A7%B0%E4%BC%8A%E5%AE%98%E5%91%98%E6%8F%90%E5%87%BA%E5%81%9C%E6%88%98%E5%85%AD%E9%A1%B9%E6%9D%A1%E4%BB%B6%23) `149.0K 🔥` `-30%`
1. [张凌赫的撕拉片又被热议了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E6%92%95%E6%8B%89%E7%89%87%E5%8F%88%E8%A2%AB%E7%83%AD%E8%AE%AE%E4%BA%86%23) `148.9K 🔥` `-30%`
1. [张靓颖回应do脸翻车 (Zhang Liangying responded with a do-face and flipped over)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9D%93%E9%A2%96%E5%9B%9E%E5%BA%94do%E8%84%B8%E7%BF%BB%E8%BD%A6%23) `144.6K 🔥` `-32%`
1. [金价上演断崖式下跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8A%E6%BC%94%E6%96%AD%E5%B4%96%E5%BC%8F%E4%B8%8B%E8%B7%8C%23) `140.1K 🔥` `-34%`
1. [李帝努 电子烟 (Li Dinu electronic cigarette)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B8%9D%E5%8A%AA%20%E7%94%B5%E5%AD%90%E7%83%9F%23) `137.5K 🔥` `-35%`
1. [张翅回应请粉丝在家里吃饭](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BF%85%E5%9B%9E%E5%BA%94%E8%AF%B7%E7%B2%89%E4%B8%9D%E5%9C%A8%E5%AE%B6%E9%87%8C%E5%90%83%E9%A5%AD%23) `135.0K 🔥` `-36%`
1. [减内脏脂肪最有效的方法 (The most effective way to reduce visceral fat)](https://s.weibo.com/weibo?q=%23%E5%87%8F%E5%86%85%E8%84%8F%E8%84%82%E8%82%AA%E6%9C%80%E6%9C%89%E6%95%88%E7%9A%84%E6%96%B9%E6%B3%95%23) `131.6K 🔥` `-38%`
1. [Jennie音乐节](https://s.weibo.com/weibo?q=%23Jennie%E9%9F%B3%E4%B9%90%E8%8A%82%23) `127.3K 🔥` `-27%`
1. [伊朗导弹在以本土砸出直径10米深坑 (Iranian missile creates a 10-meter-diameter crater in Israel)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%9C%A8%E4%BB%A5%E6%9C%AC%E5%9C%9F%E7%A0%B8%E5%87%BA%E7%9B%B4%E5%BE%8410%E7%B1%B3%E6%B7%B1%E5%9D%91%23) `125.9K 🔥` `-40%`
1. [香港发生亿元黄金劫案 (Billion dollar gold robbery in Hong Kong)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%8F%91%E7%94%9F%E4%BA%BF%E5%85%83%E9%BB%84%E9%87%91%E5%8A%AB%E6%A1%88%23) `122.7K 🔥` `-42%`
1. [中国石化提示提前错峰加油](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9F%B3%E5%8C%96%E6%8F%90%E7%A4%BA%E6%8F%90%E5%89%8D%E9%94%99%E5%B3%B0%E5%8A%A0%E6%B2%B9%23) `122.6K 🔥` `-42%`
1. [王鸥 何九华](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%20%E4%BD%95%E4%B9%9D%E5%8D%8E%23) `122.5K 🔥` `-42%`
1. [长期运动可以解决生活中很多问题](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E8%BF%90%E5%8A%A8%E5%8F%AF%E4%BB%A5%E8%A7%A3%E5%86%B3%E7%94%9F%E6%B4%BB%E4%B8%AD%E5%BE%88%E5%A4%9A%E9%97%AE%E9%A2%98%23) `122.4K 🔥` `-42%`
1. [周也 毛利兰](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%20%E6%AF%9B%E5%88%A9%E5%85%B0%23) `122.4K 🔥` `-42%`
1. [高以翔前女友BeIIa官宣怀孕 (Godfrey Gao’s ex-girlfriend BeIIa officially announces pregnancy)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BB%A5%E7%BF%94%E5%89%8D%E5%A5%B3%E5%8F%8BBeIIa%E5%AE%98%E5%AE%A3%E6%80%80%E5%AD%95%23) `122.3K 🔥` `-42%`
1. [内娱男流量五官大赏](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%94%B7%E6%B5%81%E9%87%8F%E4%BA%94%E5%AE%98%E5%A4%A7%E8%B5%8F%23) `122.2K 🔥` `-42%`
1. [茂茂你终于结婚生子了](https://s.weibo.com/weibo?q=%23%E8%8C%82%E8%8C%82%E4%BD%A0%E7%BB%88%E4%BA%8E%E7%BB%93%E5%A9%9A%E7%94%9F%E5%AD%90%E4%BA%86%23) `122.1K 🔥` `-42%`
1. [迪丽热巴直播 (Dilireba live broadcast)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9B%B4%E6%92%AD%23) `122.0K 🔥` `-42%`
1. [范世錡直播 (Fan Shiqi live broadcast)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%96%E9%8C%A1%E7%9B%B4%E6%92%AD%23) `121.5K 🔥` `-26%`
1. [谢征受了108鞭](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E5%8F%97%E4%BA%86108%E9%9E%AD%23) `120.6K 🔥` `-33%`
1. [曝伊朗导弹射程可覆盖欧洲多国首都](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%B0%84%E7%A8%8B%E5%8F%AF%E8%A6%86%E7%9B%96%E6%AC%A7%E6%B4%B2%E5%A4%9A%E5%9B%BD%E9%A6%96%E9%83%BD%23) `120.6K 🔥` `-27%`
1. [齐旻从未想过杀掉母妃 (Qi Min never thought of killing his mother and concubine)](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%97%BB%E4%BB%8E%E6%9C%AA%E6%83%B3%E8%BF%87%E6%9D%80%E6%8E%89%E6%AF%8D%E5%A6%83%23) `118.5K 🔥` `-22%`
1. [迪士尼平替把多少县城父母骗惨了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%B9%B3%E6%9B%BF%E6%8A%8A%E5%A4%9A%E5%B0%91%E5%8E%BF%E5%9F%8E%E7%88%B6%E6%AF%8D%E9%AA%97%E6%83%A8%E4%BA%86%23) `106.9K 🔥` `-42%`
1. [G2团灭BLG](https://s.weibo.com/weibo?q=%23G2%E5%9B%A2%E7%81%ADBLG%23) `84.1K 🔥` `-60%`
1. [张展硕冠军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95%E5%86%A0%E5%86%9B%23) `81.1K 🔥` `-31%`
1. [辛芷蕾 多邻国 (Xin Zhilei Duolingo)](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%20%E5%A4%9A%E9%82%BB%E5%9B%BD%23) `79.8K 🔥` `-31%`

Updated at 2026-03-22 23:00:10

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
