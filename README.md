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

1. [2岁儿童就诊才知已有7颗蛀牙 (A 2-year-old child found out he had 7 cavities after seeing a doctor)](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%84%BF%E7%AB%A5%E5%B0%B1%E8%AF%8A%E6%89%8D%E7%9F%A5%E5%B7%B2%E6%9C%897%E9%A2%97%E8%9B%80%E7%89%99%23) `150.3K 🔥` `NEW`
1. [美媒称伊朗军力影响远超中东地区](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E4%BC%8A%E6%9C%97%E5%86%9B%E5%8A%9B%E5%BD%B1%E5%93%8D%E8%BF%9C%E8%B6%85%E4%B8%AD%E4%B8%9C%E5%9C%B0%E5%8C%BA%23) `89.1K 🔥` `NEW`
1. [十年前的韩剧还在我的虐剧TOP1里](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9A%84%E9%9F%A9%E5%89%A7%E8%BF%98%E5%9C%A8%E6%88%91%E7%9A%84%E8%99%90%E5%89%A7TOP1%E9%87%8C%23) `82.1K 🔥` `NEW`
1. [蔡依林酱板鸭小品](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E9%85%B1%E6%9D%BF%E9%B8%AD%E5%B0%8F%E5%93%81%23) `59.9K 🔥` `NEW`
1. [零跑汽车被曝整顿内部贪腐](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E8%B7%91%E6%B1%BD%E8%BD%A6%E8%A2%AB%E6%9B%9D%E6%95%B4%E9%A1%BF%E5%86%85%E9%83%A8%E8%B4%AA%E8%85%90%23) `57.5K 🔥` `NEW`
1. [LCK解说把BLG当韩国队](https://s.weibo.com/weibo?q=%23LCK%E8%A7%A3%E8%AF%B4%E6%8A%8ABLG%E5%BD%93%E9%9F%A9%E5%9B%BD%E9%98%9F%23) `56.7K 🔥` `NEW`
1. [汪顺说下一站冠军赛](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E9%A1%BA%E8%AF%B4%E4%B8%8B%E4%B8%80%E7%AB%99%E5%86%A0%E5%86%9B%E8%B5%9B%23) `55.8K 🔥` `NEW`
1. [i人梦中情岗已有48人报名缴费](https://s.weibo.com/weibo?q=%23i%E4%BA%BA%E6%A2%A6%E4%B8%AD%E6%83%85%E5%B2%97%E5%B7%B2%E6%9C%8948%E4%BA%BA%E6%8A%A5%E5%90%8D%E7%BC%B4%E8%B4%B9%23) `183.9K 🔥` `+24%`
1. [爱吃荔枝的人今年天塌了 (People who love lychees are in trouble this year)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E8%8D%94%E6%9E%9D%E7%9A%84%E4%BA%BA%E4%BB%8A%E5%B9%B4%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `1.0M 🔥`
1. [律师解读梅姨照片为何暂不公开](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%A7%A3%E8%AF%BB%E6%A2%85%E5%A7%A8%E7%85%A7%E7%89%87%E4%B8%BA%E4%BD%95%E6%9A%82%E4%B8%8D%E5%85%AC%E5%BC%80%23) `761.9K 🔥`
1. [迪丽热巴化妆王崇](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8C%96%E5%A6%86%E7%8E%8B%E5%B4%87%23) `160.0K 🔥`
1. [眼睛出现这两类情况要立刻就医 (If these two conditions occur in your eyes, seek medical attention immediately)](https://s.weibo.com/weibo?q=%23%E7%9C%BC%E7%9D%9B%E5%87%BA%E7%8E%B0%E8%BF%99%E4%B8%A4%E7%B1%BB%E6%83%85%E5%86%B5%E8%A6%81%E7%AB%8B%E5%88%BB%E5%B0%B1%E5%8C%BB%23) `144.8K 🔥`
1. [不齐而俞 番外](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E9%BD%90%E8%80%8C%E4%BF%9E%20%E7%95%AA%E5%A4%96%23) `144.8K 🔥`
1. [范世錡直播 (Fan Shiqi live broadcast)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%96%E9%8C%A1%E7%9B%B4%E6%92%AD%23) `124.6K 🔥`
1. [薛之谦演唱会 (Joker Xue Concert)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `88.5K 🔥`
1. [23岁女子刚结婚一年就闭经](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E5%A5%B3%E5%AD%90%E5%88%9A%E7%BB%93%E5%A9%9A%E4%B8%80%E5%B9%B4%E5%B0%B1%E9%97%AD%E7%BB%8F%23) `79.5K 🔥`
1. [齐旻从未想过杀掉母妃 (Qi Min never thought of killing his mother and concubine)](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%97%BB%E4%BB%8E%E6%9C%AA%E6%83%B3%E8%BF%87%E6%9D%80%E6%8E%89%E6%AF%8D%E5%A6%83%23) `78.8K 🔥`
1. [伊朗发起第74波打击 (Iran launches 74th wave of strikes)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E8%B5%B7%E7%AC%AC74%E6%B3%A2%E6%89%93%E5%87%BB%23) `70.4K 🔥`
1. [迪士尼平替把多少县城父母骗惨了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%B9%B3%E6%9B%BF%E6%8A%8A%E5%A4%9A%E5%B0%91%E5%8E%BF%E5%9F%8E%E7%88%B6%E6%AF%8D%E9%AA%97%E6%83%A8%E4%BA%86%23) `66.1K 🔥`
1. [赵樱子无美颜素颜直播](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%A8%B1%E5%AD%90%E6%97%A0%E7%BE%8E%E9%A2%9C%E7%B4%A0%E9%A2%9C%E7%9B%B4%E6%92%AD%23) `60.4K 🔥`
1. [香港发生亿元黄金劫案 (Billion dollar gold robbery in Hong Kong)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%8F%91%E7%94%9F%E4%BA%BF%E5%85%83%E9%BB%84%E9%87%91%E5%8A%AB%E6%A1%88%23) `60.2K 🔥`
1. [9组数据见证大国治水生动画卷 (9 sets of data testify to the animation volume of aquatic governance in a great country)](https://s.weibo.com/weibo?q=%239%E7%BB%84%E6%95%B0%E6%8D%AE%E8%A7%81%E8%AF%81%E5%A4%A7%E5%9B%BD%E6%B2%BB%E6%B0%B4%E7%94%9F%E5%8A%A8%E7%94%BB%E5%8D%B7%23) `610.6K 🔥` `-22%`
1. [苍兰诀 (Cang Lan Jue)](https://s.weibo.com/weibo?q=%23%E8%8B%8D%E5%85%B0%E8%AF%80%23) `561.1K 🔥` `-28%`
1. [G2对战BLG](https://s.weibo.com/weibo?q=%23G2%E5%AF%B9%E6%88%98BLG%23) `214.3K 🔥` `-71%`
1. [逐玉直播 (Zhuyu live broadcast)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%9B%B4%E6%92%AD%23) `203.0K 🔥` `-73%`
1. [接冬去春来迎梦想成真 (Winter turns to spring and dreams come true)](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E5%86%AC%E5%8E%BB%E6%98%A5%E6%9D%A5%E8%BF%8E%E6%A2%A6%E6%83%B3%E6%88%90%E7%9C%9F%23) `201.0K 🔥` `-74%`
1. [高市早苗称访美照夸张系因太感动](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E7%A7%B0%E8%AE%BF%E7%BE%8E%E7%85%A7%E5%A4%B8%E5%BC%A0%E7%B3%BB%E5%9B%A0%E5%A4%AA%E6%84%9F%E5%8A%A8%23) `200.9K 🔥` `-74%`
1. [Jennie音乐节](https://s.weibo.com/weibo?q=%23Jennie%E9%9F%B3%E4%B9%90%E8%8A%82%23) `188.7K 🔥` `-21%`
1. [伊朗导弹绕过以色列拦截弹 (Iranian missile bypasses Israeli interceptor)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E7%BB%95%E8%BF%87%E4%BB%A5%E8%89%B2%E5%88%97%E6%8B%A6%E6%88%AA%E5%BC%B9%23) `186.8K 🔥` `-76%`
1. [观音桥车祸](https://s.weibo.com/weibo?q=%23%E8%A7%82%E9%9F%B3%E6%A1%A5%E8%BD%A6%E7%A5%B8%23) `178.9K 🔥` `-76%`
1. [张凌赫的撕拉片又被热议了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E6%92%95%E6%8B%89%E7%89%87%E5%8F%88%E8%A2%AB%E7%83%AD%E8%AE%AE%E4%BA%86%23) `174.5K 🔥` `-76%`
1. [张靓颖回应do脸翻车 (Zhang Liangying responded with a do-face and flipped over)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9D%93%E9%A2%96%E5%9B%9E%E5%BA%94do%E8%84%B8%E7%BF%BB%E8%BD%A6%23) `170.4K 🔥` `-52%`
1. [减内脏脂肪最有效的方法 (The most effective way to reduce visceral fat)](https://s.weibo.com/weibo?q=%23%E5%87%8F%E5%86%85%E8%84%8F%E8%84%82%E8%82%AA%E6%9C%80%E6%9C%89%E6%95%88%E7%9A%84%E6%96%B9%E6%B3%95%23) `168.1K 🔥` `-43%`
1. [张翅回应请粉丝在家里吃饭 (Zhang Chi responded by asking fans to have dinner at home)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BF%85%E5%9B%9E%E5%BA%94%E8%AF%B7%E7%B2%89%E4%B8%9D%E5%9C%A8%E5%AE%B6%E9%87%8C%E5%90%83%E9%A5%AD%23) `162.4K 🔥` `-42%`
1. [田曦薇撅嘴要张凌赫道歉](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%92%85%E5%98%B4%E8%A6%81%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%81%93%E6%AD%89%23) `148.4K 🔥` `-81%`
1. [外籍男子上车插队被拽下车](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%B1%8D%E7%94%B7%E5%AD%90%E4%B8%8A%E8%BD%A6%E6%8F%92%E9%98%9F%E8%A2%AB%E6%8B%BD%E4%B8%8B%E8%BD%A6%23) `145.3K 🔥` `-31%`
1. [伊朗导弹在以本土砸出直径10米深坑 (Iranian missile creates a 10-meter-diameter crater in Israel)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%9C%A8%E4%BB%A5%E6%9C%AC%E5%9C%9F%E7%A0%B8%E5%87%BA%E7%9B%B4%E5%BE%8410%E7%B1%B3%E6%B7%B1%E5%9D%91%23) `145.2K 🔥` `-30%`
1. [王鸥 何九华](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%20%E4%BD%95%E4%B9%9D%E5%8D%8E%23) `145.2K 🔥` `-29%`
1. [长期运动可以解决生活中很多问题 (Long-term exercise can solve many problems in life)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E8%BF%90%E5%8A%A8%E5%8F%AF%E4%BB%A5%E8%A7%A3%E5%86%B3%E7%94%9F%E6%B4%BB%E4%B8%AD%E5%BE%88%E5%A4%9A%E9%97%AE%E9%A2%98%23) `145.1K 🔥` `-29%`
1. [高以翔前女友BeIIa官宣怀孕 (Godfrey Gao’s ex-girlfriend BeIIa officially announces pregnancy)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BB%A5%E7%BF%94%E5%89%8D%E5%A5%B3%E5%8F%8BBeIIa%E5%AE%98%E5%AE%A3%E6%80%80%E5%AD%95%23) `145.0K 🔥` `-28%`
1. [李帝努 电子烟 (Li Dinu electronic cigarette)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B8%9D%E5%8A%AA%20%E7%94%B5%E5%AD%90%E7%83%9F%23) `145.0K 🔥` `-32%`
1. [双汇王中王火腿肠被曝吃出两根钢钉 (Shuanghui King of Kings ham sausage was exposed to have eaten two steel nails)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E6%B1%87%E7%8E%8B%E4%B8%AD%E7%8E%8B%E7%81%AB%E8%85%BF%E8%82%A0%E8%A2%AB%E6%9B%9D%E5%90%83%E5%87%BA%E4%B8%A4%E6%A0%B9%E9%92%A2%E9%92%89%23) `124.0K 🔥` `-83%`
1. [周也 毛利兰](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%20%E6%AF%9B%E5%88%A9%E5%85%B0%23) `123.9K 🔥` `-27%`
1. [迪丽热巴直播 (Dilireba live broadcast)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9B%B4%E6%92%AD%23) `107.3K 🔥` `-27%`
1. [茂茂你终于结婚生子了](https://s.weibo.com/weibo?q=%23%E8%8C%82%E8%8C%82%E4%BD%A0%E7%BB%88%E4%BA%8E%E7%BB%93%E5%A9%9A%E7%94%9F%E5%AD%90%E4%BA%86%23) `86.8K 🔥` `-22%`
1. [女性对抗衰老就是力量训练](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%80%A7%E5%AF%B9%E6%8A%97%E8%A1%B0%E8%80%81%E5%B0%B1%E6%98%AF%E5%8A%9B%E9%87%8F%E8%AE%AD%E7%BB%83%23) `83.2K 🔥` `-45%`
1. [蜂蜜的针 超前](https://s.weibo.com/weibo?q=%23%E8%9C%82%E8%9C%9C%E7%9A%84%E9%92%88%20%E8%B6%85%E5%89%8D%23) `82.0K 🔥` `-21%`
1. [高铁卫生间遇到这种情况别冲水](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E5%8D%AB%E7%94%9F%E9%97%B4%E9%81%87%E5%88%B0%E8%BF%99%E7%A7%8D%E6%83%85%E5%86%B5%E5%88%AB%E5%86%B2%E6%B0%B4%23) `74.5K 🔥` `-38%`
1. [内娱男流量五官大赏](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%94%B7%E6%B5%81%E9%87%8F%E4%BA%94%E5%AE%98%E5%A4%A7%E8%B5%8F%23) `68.4K 🔥` `-36%`
1. [谢征受了108鞭 (Xie Zheng received 108 lashes)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E5%8F%97%E4%BA%86108%E9%9E%AD%23) `57.4K 🔥` `-27%`
1. [月鳞绮纪 (Moonscale Qiji)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `55.9K 🔥` `-41%`

Updated at 2026-03-22 23:55:44

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
