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

1. [今天全国助残日 (Today is National Disability Day)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E5%85%A8%E5%9B%BD%E5%8A%A9%E6%AE%8B%E6%97%A5%23) `954.3K 🔥` `NEW`
1. [电脑微信会惩罚每一个恋旧的人](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%84%91%E5%BE%AE%E4%BF%A1%E4%BC%9A%E6%83%A9%E7%BD%9A%E6%AF%8F%E4%B8%80%E4%B8%AA%E6%81%8B%E6%97%A7%E7%9A%84%E4%BA%BA%23) `903.2K 🔥` `NEW`
1. [窦靖童没到30岁应让母亲陪同参赛](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%B2%A1%E5%88%B030%E5%B2%81%E5%BA%94%E8%AE%A9%E6%AF%8D%E4%BA%B2%E9%99%AA%E5%90%8C%E5%8F%82%E8%B5%9B%23) `750.4K 🔥` `NEW`
1. [麦辣鸡腿堡 拉肚子](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E8%BE%A3%E9%B8%A1%E8%85%BF%E5%A0%A1%20%E6%8B%89%E8%82%9A%E5%AD%90%23) `373.9K 🔥` `NEW`
1. [金宣虎高允真情侣手机壳](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AE%A3%E8%99%8E%E9%AB%98%E5%85%81%E7%9C%9F%E6%83%85%E4%BE%A3%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `369.9K 🔥` `NEW`
1. [起个日本名一听就是天津人](https://s.weibo.com/weibo?q=%23%E8%B5%B7%E4%B8%AA%E6%97%A5%E6%9C%AC%E5%90%8D%E4%B8%80%E5%90%AC%E5%B0%B1%E6%98%AF%E5%A4%A9%E6%B4%A5%E4%BA%BA%23) `367.6K 🔥` `NEW`
1. [姜乘澜 这化妆技术还说啥了](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%20%E8%BF%99%E5%8C%96%E5%A6%86%E6%8A%80%E6%9C%AF%E8%BF%98%E8%AF%B4%E5%95%A5%E4%BA%86%23) `360.3K 🔥` `NEW`
1. [杨紫回复黄晓明](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%9B%9E%E5%A4%8D%E9%BB%84%E6%99%93%E6%98%8E%23) `349.7K 🔥` `NEW`
1. [中国连续接待安理会四常领导人](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%BF%9E%E7%BB%AD%E6%8E%A5%E5%BE%85%E5%AE%89%E7%90%86%E4%BC%9A%E5%9B%9B%E5%B8%B8%E9%A2%86%E5%AF%BC%E4%BA%BA%23) `341.6K 🔥` `NEW`
1. [骗爸妈上班在楼顶的一天](https://s.weibo.com/weibo?q=%23%E9%AA%97%E7%88%B8%E5%A6%88%E4%B8%8A%E7%8F%AD%E5%9C%A8%E6%A5%BC%E9%A1%B6%E7%9A%84%E4%B8%80%E5%A4%A9%23) `335.1K 🔥` `NEW`
1. [老人领免费手机每月话费500元 (Elderly people receive free mobile phones with a monthly phone bill of NT$500)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E9%A2%86%E5%85%8D%E8%B4%B9%E6%89%8B%E6%9C%BA%E6%AF%8F%E6%9C%88%E8%AF%9D%E8%B4%B9500%E5%85%83%23) `265.5K 🔥` `NEW`
1. [Gucci纽约大秀](https://s.weibo.com/weibo?q=%23Gucci%E7%BA%BD%E7%BA%A6%E5%A4%A7%E7%A7%80%23) `237.8K 🔥` `NEW`
1. [给阿嬷的情书 删减片段](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E5%88%A0%E5%87%8F%E7%89%87%E6%AE%B5%23) `233.0K 🔥` `NEW`
1. [沈梦辰对杜海涛说过最重的话](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E5%AF%B9%E6%9D%9C%E6%B5%B7%E6%B6%9B%E8%AF%B4%E8%BF%87%E6%9C%80%E9%87%8D%E7%9A%84%E8%AF%9D%23) `230.1K 🔥` `NEW`
1. [张嘉益别让五旬老人干这个](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%98%89%E7%9B%8A%E5%88%AB%E8%AE%A9%E4%BA%94%E6%97%AC%E8%80%81%E4%BA%BA%E5%B9%B2%E8%BF%99%E4%B8%AA%23) `227.3K 🔥` `NEW`
1. [重庆划桨板人员落水致1死](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%88%92%E6%A1%A8%E6%9D%BF%E4%BA%BA%E5%91%98%E8%90%BD%E6%B0%B4%E8%87%B41%E6%AD%BB%23) `224.9K 🔥` `NEW`
1. [直击Gucci大秀现场](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E5%87%BBGucci%E5%A4%A7%E7%A7%80%E7%8E%B0%E5%9C%BA%23) `223.7K 🔥` `NEW`
1. [小米部分机型可换更大容量电池](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%83%A8%E5%88%86%E6%9C%BA%E5%9E%8B%E5%8F%AF%E6%8D%A2%E6%9B%B4%E5%A4%A7%E5%AE%B9%E9%87%8F%E7%94%B5%E6%B1%A0%23) `221.1K 🔥` `NEW`
1. [银行是不是在调整信用卡业务](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E6%98%AF%E4%B8%8D%E6%98%AF%E5%9C%A8%E8%B0%83%E6%95%B4%E4%BF%A1%E7%94%A8%E5%8D%A1%E4%B8%9A%E5%8A%A1%23) `194.5K 🔥` `NEW`
1. [七旬老人买菜路上被拉去纹眉割眼袋](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%97%AC%E8%80%81%E4%BA%BA%E4%B9%B0%E8%8F%9C%E8%B7%AF%E4%B8%8A%E8%A2%AB%E6%8B%89%E5%8E%BB%E7%BA%B9%E7%9C%89%E5%89%B2%E7%9C%BC%E8%A2%8B%23) `192.6K 🔥` `NEW`
1. [戛纳电影节红毯G社生图 (Cannes Film Festival red carpet G social photos)](https://s.weibo.com/weibo?q=%23%E6%88%9B%E7%BA%B3%E7%94%B5%E5%BD%B1%E8%8A%82%E7%BA%A2%E6%AF%AFG%E7%A4%BE%E7%94%9F%E5%9B%BE%23) `184.2K 🔥` `NEW`
1. [女游客景区坠亡没有监控](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%B8%B8%E5%AE%A2%E6%99%AF%E5%8C%BA%E5%9D%A0%E4%BA%A1%E6%B2%A1%E6%9C%89%E7%9B%91%E6%8E%A7%23) `1.2M 🔥` `+291%`
1. [黄仁勋同款](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%90%8C%E6%AC%BE%23) `359.2K 🔥` `+207%`
1. [委内瑞拉驱逐马杜罗亲信](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%86%85%E7%91%9E%E6%8B%89%E9%A9%B1%E9%80%90%E9%A9%AC%E6%9D%9C%E7%BD%97%E4%BA%B2%E4%BF%A1%23) `300.8K 🔥` `+157%`
1. [甜馨晒自己化的新妆容](https://s.weibo.com/weibo?q=%23%E7%94%9C%E9%A6%A8%E6%99%92%E8%87%AA%E5%B7%B1%E5%8C%96%E7%9A%84%E6%96%B0%E5%A6%86%E5%AE%B9%23) `299.9K 🔥` `+26%`
1. [阚清子乍瘦](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E4%B9%8D%E7%98%A6%23) `363.2K 🔥`
1. [北电看到了杨幂的毕业论文](https://s.weibo.com/weibo?q=%23%E5%8C%97%E7%94%B5%E7%9C%8B%E5%88%B0%E4%BA%86%E6%9D%A8%E5%B9%82%E7%9A%84%E6%AF%95%E4%B8%9A%E8%AE%BA%E6%96%87%23) `356.0K 🔥`
1. [台舆论称特朗普不许台独视美为靠山](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E8%88%86%E8%AE%BA%E7%A7%B0%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%8D%E8%AE%B8%E5%8F%B0%E7%8B%AC%E8%A7%86%E7%BE%8E%E4%B8%BA%E9%9D%A0%E5%B1%B1%23) `353.6K 🔥`
1. [樊振东和勒布伦兄弟争冠](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%92%8C%E5%8B%92%E5%B8%83%E4%BC%A6%E5%85%84%E5%BC%9F%E4%BA%89%E5%86%A0%23) `346.5K 🔥`
1. [樊振东被莫雷加德又搂又抱](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%A2%AB%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E5%8F%88%E6%90%82%E5%8F%88%E6%8A%B1%23) `345.9K 🔥`
1. [郭富城陪方媛奔丧 (Aaron Kwok accompanied Fang Yuan to the funeral)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E9%99%AA%E6%96%B9%E5%AA%9B%E5%A5%94%E4%B8%A7%23) `340.3K 🔥`
1. [疑似张元英抢金智媛C位](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%BC%A0%E5%85%83%E8%8B%B1%E6%8A%A2%E9%87%91%E6%99%BA%E5%AA%9BC%E4%BD%8D%23) `336.2K 🔥`
1. [TF五代陈璟翊公开](https://s.weibo.com/weibo?q=%23TF%E4%BA%94%E4%BB%A3%E9%99%88%E7%92%9F%E7%BF%8A%E5%85%AC%E5%BC%80%23) `332.3K 🔥`
1. [Angelababy看到小朋友下意识护住](https://s.weibo.com/weibo?q=%23Angelababy%E7%9C%8B%E5%88%B0%E5%B0%8F%E6%9C%8B%E5%8F%8B%E4%B8%8B%E6%84%8F%E8%AF%86%E6%8A%A4%E4%BD%8F%23) `316.0K 🔥`
1. [何超蕸追悼会](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%95%B8%E8%BF%BD%E6%82%BC%E4%BC%9A%23) `311.7K 🔥`
1. [广东暴雨天蟑螂成群出动](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E6%9A%B4%E9%9B%A8%E5%A4%A9%E8%9F%91%E8%9E%82%E6%88%90%E7%BE%A4%E5%87%BA%E5%8A%A8%23) `300.3K 🔥`
1. [霍启刚郭晶晶现身何超蕸追悼会](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%88%9A%E9%83%AD%E6%99%B6%E6%99%B6%E7%8E%B0%E8%BA%AB%E4%BD%95%E8%B6%85%E8%95%B8%E8%BF%BD%E6%82%BC%E4%BC%9A%23) `250.9K 🔥`
1. [现在记住了你又不高兴](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E8%AE%B0%E4%BD%8F%E4%BA%86%E4%BD%A0%E5%8F%88%E4%B8%8D%E9%AB%98%E5%85%B4%23) `219.9K 🔥`
1. [卢昱晓道歉 (Lu Yuxiao apologizes)](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E9%81%93%E6%AD%89%23) `3.7M 🔥` `-66%`
1. [给阿嬷的情书 屏摄](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E5%B1%8F%E6%91%84%23) `836.9K 🔥` `-34%`
1. [咬壳吃荔枝 不上火](https://s.weibo.com/weibo?q=%23%E5%92%AC%E5%A3%B3%E5%90%83%E8%8D%94%E6%9E%9D%20%E4%B8%8D%E4%B8%8A%E7%81%AB%23) `481.7K 🔥` `-39%`
1. [罕见病确诊 这才是互联网的意义 (Diagnosis of rare diseases: This is the meaning of the Internet)](https://s.weibo.com/weibo?q=%23%E7%BD%95%E8%A7%81%E7%97%85%E7%A1%AE%E8%AF%8A%20%E8%BF%99%E6%89%8D%E6%98%AF%E4%BA%92%E8%81%94%E7%BD%91%E7%9A%84%E6%84%8F%E4%B9%89%23) `414.2K 🔥` `-40%`
1. [特朗普警告台独 (Trump warns Taiwan independence)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AD%A6%E5%91%8A%E5%8F%B0%E7%8B%AC%23) `373.6K 🔥` `-82%`
1. [猫的树我找到你的新女主了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%9A%84%E6%A0%91%E6%88%91%E6%89%BE%E5%88%B0%E4%BD%A0%E7%9A%84%E6%96%B0%E5%A5%B3%E4%B8%BB%E4%BA%86%23) `311.3K 🔥` `-38%`
1. [给阿嬷的情书 (A love letter to grandma)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `288.3K 🔥` `-69%`
1. [全智贤 千颂伊附体](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%99%BA%E8%B4%A4%20%E5%8D%83%E9%A2%82%E4%BC%8A%E9%99%84%E4%BD%93%23) `232.6K 🔥` `-24%`
1. [央视追踪四川大摆荡坠亡事件](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%BF%BD%E8%B8%AA%E5%9B%9B%E5%B7%9D%E5%A4%A7%E6%91%86%E8%8D%A1%E5%9D%A0%E4%BA%A1%E4%BA%8B%E4%BB%B6%23) `231.7K 🔥` `-36%`
1. [苹果华为小米集体降价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8D%8E%E4%B8%BA%E5%B0%8F%E7%B1%B3%E9%9B%86%E4%BD%93%E9%99%8D%E4%BB%B7%23) `205.4K 🔥` `-35%`
1. [陈泽综艺又没了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B3%BD%E7%BB%BC%E8%89%BA%E5%8F%88%E6%B2%A1%E4%BA%86%23) `197.6K 🔥` `-35%`
1. [王橹杰iPad上面视频是心理问题 (The video on Wang Lujie’s iPad is a psychological issue)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0iPad%E4%B8%8A%E9%9D%A2%E8%A7%86%E9%A2%91%E6%98%AF%E5%BF%83%E7%90%86%E9%97%AE%E9%A2%98%23) `190.8K 🔥` `-37%`

Updated at 2026-05-17 17:15:29

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
