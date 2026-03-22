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

1. [黄金白银开涨了 (Gold and silver opened higher)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E5%BC%80%E6%B6%A8%E4%BA%86%23) `285.1K 🔥` `NEW`
1. [齐旻死在了俞浅浅爱上他的那一刻](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%97%BB%E6%AD%BB%E5%9C%A8%E4%BA%86%E4%BF%9E%E6%B5%85%E6%B5%85%E7%88%B1%E4%B8%8A%E4%BB%96%E7%9A%84%E9%82%A3%E4%B8%80%E5%88%BB%23) `219.2K 🔥` `NEW`
1. [Elk BLG](https://s.weibo.com/weibo?q=%23Elk%20BLG%23) `108.9K 🔥` `NEW`
1. [夫妻结婚22年水电费分摊有零有整](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E7%BB%93%E5%A9%9A22%E5%B9%B4%E6%B0%B4%E7%94%B5%E8%B4%B9%E5%88%86%E6%91%8A%E6%9C%89%E9%9B%B6%E6%9C%89%E6%95%B4%23) `100.2K 🔥` `NEW`
1. [本周做什么都顺的星座](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E5%81%9A%E4%BB%80%E4%B9%88%E9%83%BD%E9%A1%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `75.5K 🔥` `NEW`
1. [患者用笔做成花束医生们一拥而上](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%80%85%E7%94%A8%E7%AC%94%E5%81%9A%E6%88%90%E8%8A%B1%E6%9D%9F%E5%8C%BB%E7%94%9F%E4%BB%AC%E4%B8%80%E6%8B%A5%E8%80%8C%E4%B8%8A%23) `75.2K 🔥` `NEW`
1. [苍兰诀当年的出圈程度](https://s.weibo.com/weibo?q=%23%E8%8B%8D%E5%85%B0%E8%AF%80%E5%BD%93%E5%B9%B4%E7%9A%84%E5%87%BA%E5%9C%88%E7%A8%8B%E5%BA%A6%23) `74.1K 🔥` `NEW`
1. [东北虎吃完保险公司买单](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E8%99%8E%E5%90%83%E5%AE%8C%E4%BF%9D%E9%99%A9%E5%85%AC%E5%8F%B8%E4%B9%B0%E5%8D%95%23) `70.9K 🔥` `NEW`
1. [伊朗回应特朗普威胁言论](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E5%A8%81%E8%83%81%E8%A8%80%E8%AE%BA%23) `69.6K 🔥` `NEW`
1. [男子拿130万买黄金刚买68万就遇跌](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8B%BF130%E4%B8%87%E4%B9%B0%E9%BB%84%E9%87%91%E5%88%9A%E4%B9%B068%E4%B8%87%E5%B0%B1%E9%81%87%E8%B7%8C%23) `62.1K 🔥` `NEW`
1. [钎城 带我节奏有完没完了 (Doucheng, take me to the rhythm, will it be over?)](https://s.weibo.com/weibo?q=%23%E9%92%8E%E5%9F%8E%20%E5%B8%A6%E6%88%91%E8%8A%82%E5%A5%8F%E6%9C%89%E5%AE%8C%E6%B2%A1%E5%AE%8C%E4%BA%86%23) `55.5K 🔥` `NEW`
1. [梅姨每交易1名儿童拿1000元介绍费 (Aunt Mei gets an introduction fee of 1,000 yuan for every child she trades.)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E6%AF%8F%E4%BA%A4%E6%98%931%E5%90%8D%E5%84%BF%E7%AB%A5%E6%8B%BF1000%E5%85%83%E4%BB%8B%E7%BB%8D%E8%B4%B9%23) `1.0M 🔥` `+67%`
1. [9组数据见证大国治水生动画卷 (9 sets of data testify to the animation volume of aquatic governance in a great country)](https://s.weibo.com/weibo?q=%239%E7%BB%84%E6%95%B0%E6%8D%AE%E8%A7%81%E8%AF%81%E5%A4%A7%E5%9B%BD%E6%B2%BB%E6%B0%B4%E7%94%9F%E5%8A%A8%E7%94%BB%E5%8D%B7%23) `578.3K 🔥` `+24%`
1. [华为春季全场景新品发布会 (Huawei spring full-scenario new product launch conference)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%98%A5%E5%AD%A3%E5%85%A8%E5%9C%BA%E6%99%AF%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%E4%BC%9A%23) `474.7K 🔥` `+85%`
1. [你好1983 (hello1983)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD1983%23) `444.3K 🔥` `+34%`
1. [对酒当歌燕京A10深度解析 (An in-depth analysis of Jiudangge Yanjing A10)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E9%85%92%E5%BD%93%E6%AD%8C%E7%87%95%E4%BA%ACA10%E6%B7%B1%E5%BA%A6%E8%A7%A3%E6%9E%90%23) `250.2K 🔥` `+399%`
1. [Bin是世一上](https://s.weibo.com/weibo?q=%23Bin%E6%98%AF%E4%B8%96%E4%B8%80%E4%B8%8A%23) `235.2K 🔥` `+34%`
1. [原来贾玲旁边的是瞿颖啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%B4%BE%E7%8E%B2%E6%97%81%E8%BE%B9%E7%9A%84%E6%98%AF%E7%9E%BF%E9%A2%96%E5%95%8A%23) `216.5K 🔥` `+149%`
1. [伊朗导弹绕过以色列拦截弹 (Iranian missile bypasses Israeli interceptor)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E7%BB%95%E8%BF%87%E4%BB%A5%E8%89%B2%E5%88%97%E6%8B%A6%E6%88%AA%E5%BC%B9%23) `209.2K 🔥` `+31%`
1. [5种炎症可能变成癌症 (5 types of inflammation that can turn into cancer)](https://s.weibo.com/weibo?q=%235%E7%A7%8D%E7%82%8E%E7%97%87%E5%8F%AF%E8%83%BD%E5%8F%98%E6%88%90%E7%99%8C%E7%97%87%23) `208.9K 🔥` `+75%`
1. [张凌赫的撕拉片又被热议了 (Zhang Linghe’s tear-off film is hotly discussed again)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E6%92%95%E6%8B%89%E7%89%87%E5%8F%88%E8%A2%AB%E7%83%AD%E8%AE%AE%E4%BA%86%23) `207.3K 🔥` `+77%`
1. [苍兰诀](https://s.weibo.com/weibo?q=%23%E8%8B%8D%E5%85%B0%E8%AF%80%23) `181.9K 🔥` `+22%`
1. [女护士被男友杀害男方家属发文道歉](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%8A%A4%E5%A3%AB%E8%A2%AB%E7%94%B7%E5%8F%8B%E6%9D%80%E5%AE%B3%E7%94%B7%E6%96%B9%E5%AE%B6%E5%B1%9E%E5%8F%91%E6%96%87%E9%81%93%E6%AD%89%23) `135.7K 🔥` `+206%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `128.7K 🔥` `+61%`
1. [王鸥 何九华 (Wang Ou He Jiuhua)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%20%E4%BD%95%E4%B9%9D%E5%8D%8E%23) `100.6K 🔥` `+28%`
1. [田曦薇撅嘴要张凌赫道歉 (Tian Xiwei pouted and asked Zhang Linghe to apologize)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%92%85%E5%98%B4%E8%A6%81%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%81%93%E6%AD%89%23) `100.1K 🔥` `+29%`
1. [长期运动可以解决生活中很多问题 (Long-term exercise can solve many problems in life)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E8%BF%90%E5%8A%A8%E5%8F%AF%E4%BB%A5%E8%A7%A3%E5%86%B3%E7%94%9F%E6%B4%BB%E4%B8%AD%E5%BE%88%E5%A4%9A%E9%97%AE%E9%A2%98%23) `99.8K 🔥` `+26%`
1. [注意用脑卫生](https://s.weibo.com/weibo?q=%23%E6%B3%A8%E6%84%8F%E7%94%A8%E8%84%91%E5%8D%AB%E7%94%9F%23) `99.4K 🔥` `+116%`
1. [美媒称伊朗军力影响远超中东地区 (US media says Iran’s military influence far exceeds the Middle East)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E4%BC%8A%E6%9C%97%E5%86%9B%E5%8A%9B%E5%BD%B1%E5%93%8D%E8%BF%9C%E8%B6%85%E4%B8%AD%E4%B8%9C%E5%9C%B0%E5%8C%BA%23) `98.9K 🔥` `+29%`
1. [郑钦文1比1凯斯](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%871%E6%AF%941%E5%87%AF%E6%96%AF%23) `75.5K 🔥` `+33%`
1. [59岁工地大叔随性起舞走红](https://s.weibo.com/weibo?q=%2359%E5%B2%81%E5%B7%A5%E5%9C%B0%E5%A4%A7%E5%8F%94%E9%9A%8F%E6%80%A7%E8%B5%B7%E8%88%9E%E8%B5%B0%E7%BA%A2%23) `55.5K 🔥` `+25%`
1. [眼睛出现这两类情况要立刻就医 (If these two conditions occur in your eyes, seek medical attention immediately)](https://s.weibo.com/weibo?q=%23%E7%9C%BC%E7%9D%9B%E5%87%BA%E7%8E%B0%E8%BF%99%E4%B8%A4%E7%B1%BB%E6%83%85%E5%86%B5%E8%A6%81%E7%AB%8B%E5%88%BB%E5%B0%B1%E5%8C%BB%23) `54.2K 🔥` `+22%`
1. [皇马3比2马竞 (Real Madrid 3-2 Atletico Madrid)](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC3%E6%AF%942%E9%A9%AC%E7%AB%9E%23) `53.9K 🔥` `+21%`
1. [央视曝活鱼被人为麻醉乱象 (CCTV exposed live fish being artificially anesthetized)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E6%B4%BB%E9%B1%BC%E8%A2%AB%E4%BA%BA%E4%B8%BA%E9%BA%BB%E9%86%89%E4%B9%B1%E8%B1%A1%23) `742.7K 🔥`
1. [BLG夺冠 (BLG wins the championship)](https://s.weibo.com/weibo?q=%23BLG%E5%A4%BA%E5%86%A0%23) `456.5K 🔥`
1. [迪士尼平替把多少县城父母骗惨了 (How many county parents have been deceived by Disney’s replacement?)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%B9%B3%E6%9B%BF%E6%8A%8A%E5%A4%9A%E5%B0%91%E5%8E%BF%E5%9F%8E%E7%88%B6%E6%AF%8D%E9%AA%97%E6%83%A8%E4%BA%86%23) `119.1K 🔥`
1. [曼城是冠军](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8E%E6%98%AF%E5%86%A0%E5%86%9B%23) `111.3K 🔥`
1. [迪丽热巴化妆王崇 (Dilireba makeup Wang Chong)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8C%96%E5%A6%86%E7%8E%8B%E5%B4%87%23) `110.4K 🔥`
1. [减内脏脂肪最有效的方法](https://s.weibo.com/weibo?q=%23%E5%87%8F%E5%86%85%E8%84%8F%E8%84%82%E8%82%AA%E6%9C%80%E6%9C%89%E6%95%88%E7%9A%84%E6%96%B9%E6%B3%95%23) `100.9K 🔥`
1. [女性对抗衰老就是力量训练 (Women's anti-aging strategy is strength training)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%80%A7%E5%AF%B9%E6%8A%97%E8%A1%B0%E8%80%81%E5%B0%B1%E6%98%AF%E5%8A%9B%E9%87%8F%E8%AE%AD%E7%BB%83%23) `79.6K 🔥`
1. [张靓颖回应do脸翻车](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9D%93%E9%A2%96%E5%9B%9E%E5%BA%94do%E8%84%B8%E7%BF%BB%E8%BD%A6%23) `78.1K 🔥`
1. [Bin FMVP](https://s.weibo.com/weibo?q=%23Bin%20FMVP%23) `76.4K 🔥`
1. [BLG队史首个国际赛冠军 (BLG’s first international championship in team history)](https://s.weibo.com/weibo?q=%23BLG%E9%98%9F%E5%8F%B2%E9%A6%96%E4%B8%AA%E5%9B%BD%E9%99%85%E8%B5%9B%E5%86%A0%E5%86%9B%23) `75.7K 🔥`
1. [茂茂你终于结婚生子了 (Maomao, you finally got married and had children.)](https://s.weibo.com/weibo?q=%23%E8%8C%82%E8%8C%82%E4%BD%A0%E7%BB%88%E4%BA%8E%E7%BB%93%E5%A9%9A%E7%94%9F%E5%AD%90%E4%BA%86%23) `67.1K 🔥`
1. [内娱男流量五官大赏](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%94%B7%E6%B5%81%E9%87%8F%E4%BA%94%E5%AE%98%E5%A4%A7%E8%B5%8F%23) `60.6K 🔥`
1. [阿森纳0比2曼城](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B30%E6%AF%942%E6%9B%BC%E5%9F%8E%23) `59.5K 🔥`
1. [伊朗发起第74波打击 (Iran launches 74th wave of strikes)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E8%B5%B7%E7%AC%AC74%E6%B3%A2%E6%89%93%E5%87%BB%23) `59.4K 🔥`
1. [爱吃荔枝的人今年天塌了 (People who love lychees are in trouble this year)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E8%8D%94%E6%9E%9D%E7%9A%84%E4%BA%BA%E4%BB%8A%E5%B9%B4%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `57.5K 🔥`
1. [十年前的韩剧还在我的虐剧TOP1里](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9A%84%E9%9F%A9%E5%89%A7%E8%BF%98%E5%9C%A8%E6%88%91%E7%9A%84%E8%99%90%E5%89%A7TOP1%E9%87%8C%23) `56.3K 🔥`
1. [i人梦中情岗已有48人报名缴费 (48 people have signed up and paid for irenmengzhongqinggang)](https://s.weibo.com/weibo?q=%23i%E4%BA%BA%E6%A2%A6%E4%B8%AD%E6%83%85%E5%B2%97%E5%B7%B2%E6%9C%8948%E4%BA%BA%E6%8A%A5%E5%90%8D%E7%BC%B4%E8%B4%B9%23) `54.4K 🔥`
1. [齐旻从未想过杀掉母妃 (Qi Min never thought of killing his mother and concubine)](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%97%BB%E4%BB%8E%E6%9C%AA%E6%83%B3%E8%BF%87%E6%9D%80%E6%8E%89%E6%AF%8D%E5%A6%83%23) `53.3K 🔥`
1. [律师解读梅姨照片为何暂不公开 (Lawyer explains why Aunt Mei’s photos are not released yet)](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%A7%A3%E8%AF%BB%E6%A2%85%E5%A7%A8%E7%85%A7%E7%89%87%E4%B8%BA%E4%BD%95%E6%9A%82%E4%B8%8D%E5%85%AC%E5%BC%80%23) `47.4K 🔥`

Updated at 2026-03-23 07:53:34

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
