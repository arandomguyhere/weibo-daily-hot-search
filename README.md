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

1. [上班后没了叔叔阿姨 (I lost my uncle and aunt after going to work.)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E5%90%8E%E6%B2%A1%E4%BA%86%E5%8F%94%E5%8F%94%E9%98%BF%E5%A7%A8%23) `1.1M 🔥` `NEW`
1. [法国队对季军赛毫无动力](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%98%9F%E5%AF%B9%E5%AD%A3%E5%86%9B%E8%B5%9B%E6%AF%AB%E6%97%A0%E5%8A%A8%E5%8A%9B%23) `771.0K 🔥` `NEW`
1. [第1次见女主怀孕相亲](https://s.weibo.com/weibo?q=%23%E7%AC%AC1%E6%AC%A1%E8%A7%81%E5%A5%B3%E4%B8%BB%E6%80%80%E5%AD%95%E7%9B%B8%E4%BA%B2%23) `524.5K 🔥` `NEW`
1. [小鹏MONAL03全球发布会](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONAL03%E5%85%A8%E7%90%83%E5%8F%91%E5%B8%83%E4%BC%9A%23) `346.6K 🔥` `NEW`
1. [何瑞贤化妆技术比化妆师还好](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%91%9E%E8%B4%A4%E5%8C%96%E5%A6%86%E6%8A%80%E6%9C%AF%E6%AF%94%E5%8C%96%E5%A6%86%E5%B8%88%E8%BF%98%E5%A5%BD%23) `326.7K 🔥` `NEW`
1. [LV老板被追缴巨额税款](https://s.weibo.com/weibo?q=%23LV%E8%80%81%E6%9D%BF%E8%A2%AB%E8%BF%BD%E7%BC%B4%E5%B7%A8%E9%A2%9D%E7%A8%8E%E6%AC%BE%23) `256.0K 🔥` `NEW`
1. [穆祉丞的身体状况](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%9A%84%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `250.8K 🔥` `NEW`
1. [小鹏发布会](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8F%E5%8F%91%E5%B8%83%E4%BC%9A%23) `246.7K 🔥` `NEW`
1. [八仙子集体丑照](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E5%AD%90%E9%9B%86%E4%BD%93%E4%B8%91%E7%85%A7%23) `242.6K 🔥` `NEW`
1. [杨博文张桂源摔跤](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E5%BC%A0%E6%A1%82%E6%BA%90%E6%91%94%E8%B7%A4%23) `239.5K 🔥` `NEW`
1. [黑狗咬人被主人卖掉吓得眼神呆滞 (The black dog bit someone and was sold by his owner, so scared that his eyes were dull)](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%8B%97%E5%92%AC%E4%BA%BA%E8%A2%AB%E4%B8%BB%E4%BA%BA%E5%8D%96%E6%8E%89%E5%90%93%E5%BE%97%E7%9C%BC%E7%A5%9E%E5%91%86%E6%BB%9E%23) `235.9K 🔥` `NEW`
1. [A股画风又变了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%94%BB%E9%A3%8E%E5%8F%88%E5%8F%98%E4%BA%86%23) `235.8K 🔥` `NEW`
1. [傅首尔自曝做医美](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E8%87%AA%E6%9B%9D%E5%81%9A%E5%8C%BB%E7%BE%8E%23) `235.3K 🔥` `NEW`
1. [三伏天这么做反而伤身](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BC%8F%E5%A4%A9%E8%BF%99%E4%B9%88%E5%81%9A%E5%8F%8D%E8%80%8C%E4%BC%A4%E8%BA%AB%23) `235.0K 🔥` `NEW`
1. [40度高温欧洲医院快扛不住了](https://s.weibo.com/weibo?q=%2340%E5%BA%A6%E9%AB%98%E6%B8%A9%E6%AC%A7%E6%B4%B2%E5%8C%BB%E9%99%A2%E5%BF%AB%E6%89%9B%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `234.7K 🔥` `NEW`
1. [零跑开启10万级800V时代](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E8%B7%91%E5%BC%80%E5%90%AF10%E4%B8%87%E7%BA%A7800V%E6%97%B6%E4%BB%A3%23) `234.3K 🔥` `NEW`
1. [邹市明2亿理财亏损始末](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E2%E4%BA%BF%E7%90%86%E8%B4%A2%E4%BA%8F%E6%8D%9F%E5%A7%8B%E6%9C%AB%23) `234.0K 🔥` `NEW`
1. [新一代理想L6售价24.98万元](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%80%E4%BB%A3%E7%90%86%E6%83%B3L6%E5%94%AE%E4%BB%B724.98%E4%B8%87%E5%85%83%23) `233.3K 🔥` `NEW`
1. [何同学的理想是L6](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%90%8C%E5%AD%A6%E7%9A%84%E7%90%86%E6%83%B3%E6%98%AFL6%23) `232.7K 🔥` `NEW`
1. [JDG对战TTG](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98TTG%23) `232.4K 🔥` `NEW`
1. [全球健身女王帕梅拉种草MONAL03 (Global fitness queen Pamela grows grass MONAL03)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E5%81%A5%E8%BA%AB%E5%A5%B3%E7%8E%8B%E5%B8%95%E6%A2%85%E6%8B%89%E7%A7%8D%E8%8D%89MONAL03%23) `227.0K 🔥` `NEW`
1. [周星驰3个问号回应被偷票房](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B03%E4%B8%AA%E9%97%AE%E5%8F%B7%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%81%B7%E7%A5%A8%E6%88%BF%23) `227.0K 🔥` `NEW`
1. [原来饥饿大多都是假性食欲](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%A5%A5%E9%A5%BF%E5%A4%A7%E5%A4%9A%E9%83%BD%E6%98%AF%E5%81%87%E6%80%A7%E9%A3%9F%E6%AC%B2%23) `223.1K 🔥` `NEW`
1. [LV热门包二手价跳水](https://s.weibo.com/weibo?q=%23LV%E7%83%AD%E9%97%A8%E5%8C%85%E4%BA%8C%E6%89%8B%E4%BB%B7%E8%B7%B3%E6%B0%B4%23) `209.6K 🔥` `NEW`
1. [恩利当面蛐蛐孟子义](https://s.weibo.com/weibo?q=%23%E6%81%A9%E5%88%A9%E5%BD%93%E9%9D%A2%E8%9B%90%E8%9B%90%E5%AD%9F%E5%AD%90%E4%B9%89%23) `188.1K 🔥` `NEW`
1. [李想说L6补齐三个短板](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%83%B3%E8%AF%B4L6%E8%A1%A5%E9%BD%90%E4%B8%89%E4%B8%AA%E7%9F%AD%E6%9D%BF%23) `185.2K 🔥` `NEW`
1. [贝克汉姆看台掩面落泪](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E7%9C%8B%E5%8F%B0%E6%8E%A9%E9%9D%A2%E8%90%BD%E6%B3%AA%23) `184.2K 🔥` `NEW`
1. [单删不是很正常吗](https://s.weibo.com/weibo?q=%23%E5%8D%95%E5%88%A0%E4%B8%8D%E6%98%AF%E5%BE%88%E6%AD%A3%E5%B8%B8%E5%90%97%23) `180.5K 🔥` `NEW`
1. [三尺讲台的青春接力 (Youth relay on the three-foot podium)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%B0%BA%E8%AE%B2%E5%8F%B0%E7%9A%84%E9%9D%92%E6%98%A5%E6%8E%A5%E5%8A%9B%23) `1.2M 🔥` `+63%`
1. [以后快递地址只写到小区](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E5%BF%AB%E9%80%92%E5%9C%B0%E5%9D%80%E5%8F%AA%E5%86%99%E5%88%B0%E5%B0%8F%E5%8C%BA%23) `1.1M 🔥` `+61%`
1. [与赵丽颖共探纪梵希缎光艺境 (Exploring the artistic realm of Givenchy’s satin finish with Zhao Liying)](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%85%B1%E6%8E%A2%E7%BA%AA%E6%A2%B5%E5%B8%8C%E7%BC%8E%E5%85%89%E8%89%BA%E5%A2%83%23) `1.1M 🔥` `+28%`
1. [阿根廷的最后十分钟怎么了](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%9A%84%E6%9C%80%E5%90%8E%E5%8D%81%E5%88%86%E9%92%9F%E6%80%8E%E4%B9%88%E4%BA%86%23) `1.2M 🔥`
1. [最绝望的英法大战出现了 (The most desperate war between Britain and France emerged)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E7%BB%9D%E6%9C%9B%E7%9A%84%E8%8B%B1%E6%B3%95%E5%A4%A7%E6%88%98%E5%87%BA%E7%8E%B0%E4%BA%86%23) `389.4K 🔥`
1. [白鹿经纪人朋友圈](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `386.9K 🔥`
1. [艾米手机壳上是侯明昊家的小狗](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E6%89%8B%E6%9C%BA%E5%A3%B3%E4%B8%8A%E6%98%AF%E4%BE%AF%E6%98%8E%E6%98%8A%E5%AE%B6%E7%9A%84%E5%B0%8F%E7%8B%97%23) `232.9K 🔥`
1. [realme手机退出中国市场 (realme mobile phone withdraws from Chinese market)](https://s.weibo.com/weibo?q=%23realme%E6%89%8B%E6%9C%BA%E9%80%80%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%23) `1.2M 🔥` `-29%`
1. [盒马因受害咪连夜改冬瓜图 (Hema changed the picture of winter melon overnight due to victimization)](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%AC%E5%9B%A0%E5%8F%97%E5%AE%B3%E5%92%AA%E8%BF%9E%E5%A4%9C%E6%94%B9%E5%86%AC%E7%93%9C%E5%9B%BE%23) `553.0K 🔥` `-21%`
1. [王橹杰把穆祉丞拉过来](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%8A%8A%E7%A9%86%E7%A5%89%E4%B8%9E%E6%8B%89%E8%BF%87%E6%9D%A5%23) `379.0K 🔥` `-23%`
1. [朱志鑫哭了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E5%93%AD%E4%BA%86%23) `320.2K 🔥` `-23%`
1. [韩国股民从暴富到一夜归零](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E6%B0%91%E4%BB%8E%E6%9A%B4%E5%AF%8C%E5%88%B0%E4%B8%80%E5%A4%9C%E5%BD%92%E9%9B%B6%23) `306.1K 🔥` `-22%`
1. [呵呵回应白鹿告别欢娱](https://s.weibo.com/weibo?q=%23%E5%91%B5%E5%91%B5%E5%9B%9E%E5%BA%94%E7%99%BD%E9%B9%BF%E5%91%8A%E5%88%AB%E6%AC%A2%E5%A8%B1%23) `305.0K 🔥` `-30%`
1. [宋亚轩最想删掉的真的被删掉了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%9C%80%E6%83%B3%E5%88%A0%E6%8E%89%E7%9A%84%E7%9C%9F%E7%9A%84%E8%A2%AB%E5%88%A0%E6%8E%89%E4%BA%86%23) `303.9K 🔥` `-24%`
1. [马龙妻子儿子现场观赛](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E5%A6%BB%E5%AD%90%E5%84%BF%E5%AD%90%E7%8E%B0%E5%9C%BA%E8%A7%82%E8%B5%9B%23) `261.2K 🔥` `-32%`
1. [金靖回应虞书欣](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E5%9B%9E%E5%BA%94%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `261.1K 🔥` `-49%`
1. [朱志鑫疑似小腿受伤出血了 (Zhu Zhixin is suspected of having a calf injury and bleeding)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E7%96%91%E4%BC%BC%E5%B0%8F%E8%85%BF%E5%8F%97%E4%BC%A4%E5%87%BA%E8%A1%80%E4%BA%86%23) `250.1K 🔥` `-46%`
1. [冉莹颖侃侃而谈邹市明心如死灰](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E4%BE%83%E4%BE%83%E8%80%8C%E8%B0%88%E9%82%B9%E5%B8%82%E6%98%8E%E5%BF%83%E5%A6%82%E6%AD%BB%E7%81%B0%23) `233.7K 🔥` `-41%`
1. [毕业后朋友圈现状](https://s.weibo.com/weibo?q=%23%E6%AF%95%E4%B8%9A%E5%90%8E%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%8E%B0%E7%8A%B6%23) `228.2K 🔥` `-64%`
1. [电影八仙口碑](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%85%AB%E4%BB%99%E5%8F%A3%E7%A2%91%23) `227.0K 🔥` `-42%`
1. [苏新皓颈部不慎扭伤 (Su Xinhao accidentally sprained his neck)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E9%A2%88%E9%83%A8%E4%B8%8D%E6%85%8E%E6%89%AD%E4%BC%A4%23) `227.0K 🔥` `-45%`
1. [我已经吹不了25度的空调了 (I can no longer blow the air conditioner at 25 degrees Celsius)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B7%B2%E7%BB%8F%E5%90%B9%E4%B8%8D%E4%BA%8625%E5%BA%A6%E7%9A%84%E7%A9%BA%E8%B0%83%E4%BA%86%23) `182.1K 🔥` `-47%`

Updated at 2026-07-16 22:49:47

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
