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

1. [金饰价格跌回2025年 (Gold jewelery prices fall back to 2025)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E8%B7%8C%E5%9B%9E2025%E5%B9%B4%23) `158.1K 🔥` `NEW`
1. [温峥嵘上台前摔倒](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E4%B8%8A%E5%8F%B0%E5%89%8D%E6%91%94%E5%80%92%23) `157.2K 🔥` `NEW`
1. [孕检全正常宝宝11个月突失明](https://s.weibo.com/weibo?q=%23%E5%AD%95%E6%A3%80%E5%85%A8%E6%AD%A3%E5%B8%B8%E5%AE%9D%E5%AE%9D11%E4%B8%AA%E6%9C%88%E7%AA%81%E5%A4%B1%E6%98%8E%23) `156.1K 🔥` `NEW`
1. [医保个人账户的钱活了](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E4%BF%9D%E4%B8%AA%E4%BA%BA%E8%B4%A6%E6%88%B7%E7%9A%84%E9%92%B1%E6%B4%BB%E4%BA%86%23) `154.0K 🔥` `NEW`
1. [阿纳尔迪退出法网半决赛](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%BA%B3%E5%B0%94%E8%BF%AA%E9%80%80%E5%87%BA%E6%B3%95%E7%BD%91%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `153.3K 🔥` `NEW`
1. [窦靖童回应帮唱一句没唱](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%9B%9E%E5%BA%94%E5%B8%AE%E5%94%B1%E4%B8%80%E5%8F%A5%E6%B2%A1%E5%94%B1%23) `152.5K 🔥` `NEW`
1. [瑞幸称去冰不补液是正常操作](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E7%A7%B0%E5%8E%BB%E5%86%B0%E4%B8%8D%E8%A1%A5%E6%B6%B2%E6%98%AF%E6%AD%A3%E5%B8%B8%E6%93%8D%E4%BD%9C%23) `151.8K 🔥` `NEW`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `150.4K 🔥` `NEW`
1. [何超盈祝福奚梦瑶何猷君](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E7%9B%88%E7%A5%9D%E7%A6%8F%E5%A5%9A%E6%A2%A6%E7%91%B6%E4%BD%95%E7%8C%B7%E5%90%9B%23) `145.9K 🔥` `NEW`
1. [杨幂芒种晒水果和小猫](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%8A%92%E7%A7%8D%E6%99%92%E6%B0%B4%E6%9E%9C%E5%92%8C%E5%B0%8F%E7%8C%AB%23) `143.2K 🔥` `NEW`
1. [豆包客服回应付费后月活减少610万 (Doubao customer service responded that monthly activity decreased by 6.1 million after payment)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%94%E4%BB%98%E8%B4%B9%E5%90%8E%E6%9C%88%E6%B4%BB%E5%87%8F%E5%B0%91610%E4%B8%87%23) `140.0K 🔥` `NEW`
1. [范丞丞问张真源前两期干嘛去了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E9%97%AE%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%89%8D%E4%B8%A4%E6%9C%9F%E5%B9%B2%E5%98%9B%E5%8E%BB%E4%BA%86%23) `139.1K 🔥` `NEW`
1. [奚梦瑶儿子盼何猷君追平身高](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%84%BF%E5%AD%90%E7%9B%BC%E4%BD%95%E7%8C%B7%E5%90%9B%E8%BF%BD%E5%B9%B3%E8%BA%AB%E9%AB%98%23) `137.5K 🔥` `NEW`
1. [歌手工作人员录入数据失误](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%BD%95%E5%85%A5%E6%95%B0%E6%8D%AE%E5%A4%B1%E8%AF%AF%23) `136.7K 🔥` `NEW`
1. [女子被孩子撞伤左胸面临切除](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%AD%A9%E5%AD%90%E6%92%9E%E4%BC%A4%E5%B7%A6%E8%83%B8%E9%9D%A2%E4%B8%B4%E5%88%87%E9%99%A4%23) `136.4K 🔥` `NEW`
1. [自称海上漂7天6夜男子已转普通病房](https://s.weibo.com/weibo?q=%23%E8%87%AA%E7%A7%B0%E6%B5%B7%E4%B8%8A%E6%BC%827%E5%A4%A96%E5%A4%9C%E7%94%B7%E5%AD%90%E5%B7%B2%E8%BD%AC%E6%99%AE%E9%80%9A%E7%97%85%E6%88%BF%23) `134.6K 🔥` `NEW`
1. [借过一下](https://s.weibo.com/weibo?q=%23%E5%80%9F%E8%BF%87%E4%B8%80%E4%B8%8B%23) `134.2K 🔥` `NEW`
1. [兹维列夫再进法网决赛](https://s.weibo.com/weibo?q=%23%E5%85%B9%E7%BB%B4%E5%88%97%E5%A4%AB%E5%86%8D%E8%BF%9B%E6%B3%95%E7%BD%91%E5%86%B3%E8%B5%9B%23) `132.6K 🔥` `NEW`
1. [红果3类短剧禁拍13类受限](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C3%E7%B1%BB%E7%9F%AD%E5%89%A7%E7%A6%81%E6%8B%8D13%E7%B1%BB%E5%8F%97%E9%99%90%23) `1.8M 🔥` `+104%`
1. [男子胸痛挂号13分钟医生出现](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%83%B8%E7%97%9B%E6%8C%82%E5%8F%B713%E5%88%86%E9%92%9F%E5%8C%BB%E7%94%9F%E5%87%BA%E7%8E%B0%23) `965.3K 🔥` `+158%`
1. [卫星影像记录中国生态巨变 (Satellite images document China’s dramatic ecological changes)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E6%98%9F%E5%BD%B1%E5%83%8F%E8%AE%B0%E5%BD%95%E4%B8%AD%E5%9B%BD%E7%94%9F%E6%80%81%E5%B7%A8%E5%8F%98%23) `769.2K 🔥` `+75%`
1. [黄灿灿发文道歉 (Huang Cancan issued an apology)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%8F%91%E6%96%87%E9%81%93%E6%AD%89%23) `709.4K 🔥` `+83%`
1. [以后真要把细菌当衣服穿了 (I really want to wear bacteria as clothes from now on)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E7%9C%9F%E8%A6%81%E6%8A%8A%E7%BB%86%E8%8F%8C%E5%BD%93%E8%A1%A3%E6%9C%8D%E7%A9%BF%E4%BA%86%23) `333.0K 🔥` `+178%`
1. [范丞丞在帮白鹿解围 (Fan Chengcheng is helping Bailu out of trouble)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%9C%A8%E5%B8%AE%E7%99%BD%E9%B9%BF%E8%A7%A3%E5%9B%B4%23) `331.3K 🔥` `+180%`
1. [完美解决了吃碳水会晕的问题 (Perfectly solves the problem of dizziness caused by eating carbohydrates)](https://s.weibo.com/weibo?q=%23%E5%AE%8C%E7%BE%8E%E8%A7%A3%E5%86%B3%E4%BA%86%E5%90%83%E7%A2%B3%E6%B0%B4%E4%BC%9A%E6%99%95%E7%9A%84%E9%97%AE%E9%A2%98%23) `240.6K 🔥` `+96%`
1. [看得出来老师是第一次带毕业班](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%BE%97%E5%87%BA%E6%9D%A5%E8%80%81%E5%B8%88%E6%98%AF%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%B8%A6%E6%AF%95%E4%B8%9A%E7%8F%AD%23) `193.5K 🔥` `+50%`
1. [世界杯 (world cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `159.8K 🔥` `+105%`
1. [唐艺昕假发掉了](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%81%87%E5%8F%91%E6%8E%89%E4%BA%86%23) `156.5K 🔥` `+34%`
1. [情侣3次在家分娩产子首胎夭折](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A33%E6%AC%A1%E5%9C%A8%E5%AE%B6%E5%88%86%E5%A8%A9%E4%BA%A7%E5%AD%90%E9%A6%96%E8%83%8E%E5%A4%AD%E6%8A%98%23) `155.3K 🔥` `+34%`
1. [曾沛慈谢楠看到902票懵了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E8%B0%A2%E6%A5%A0%E7%9C%8B%E5%88%B0902%E7%A5%A8%E6%87%B5%E4%BA%86%23) `152.7K 🔥` `+28%`
1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `150.5K 🔥` `+23%`
1. [丞磊帮白鹿擦嘴 (Cheng Lei helps Bai Lu wipe his mouth)](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E5%B8%AE%E7%99%BD%E9%B9%BF%E6%93%A6%E5%98%B4%23) `149.5K 🔥` `+93%`
1. [潇洒小姐排名第一 (The dashing lady ranks first)](https://s.weibo.com/weibo?q=%23%E6%BD%87%E6%B4%92%E5%B0%8F%E5%A7%90%E6%8E%92%E5%90%8D%E7%AC%AC%E4%B8%80%23) `148.5K 🔥` `+26%`
1. [日本宅男去世满屋收藏变垃圾](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%AE%85%E7%94%B7%E5%8E%BB%E4%B8%96%E6%BB%A1%E5%B1%8B%E6%94%B6%E8%97%8F%E5%8F%98%E5%9E%83%E5%9C%BE%23) `147.7K 🔥` `+129%`
1. [窦靖童帮唱一句没唱](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%B8%AE%E5%94%B1%E4%B8%80%E5%8F%A5%E6%B2%A1%E5%94%B1%23) `147.3K 🔥` `+128%`
1. [36岁女子辞去财务工作参加高考](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E5%A5%B3%E5%AD%90%E8%BE%9E%E5%8E%BB%E8%B4%A2%E5%8A%A1%E5%B7%A5%E4%BD%9C%E5%8F%82%E5%8A%A0%E9%AB%98%E8%80%83%23) `146.2K 🔥` `+156%`
1. [黄灿灿失误 (Huang Cancan made a mistake)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%A4%B1%E8%AF%AF%23) `145.1K 🔥` `+77%`
1. [东部战区回应荷兰军舰过航台湾海峡](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E5%9B%9E%E5%BA%94%E8%8D%B7%E5%85%B0%E5%86%9B%E8%88%B0%E8%BF%87%E8%88%AA%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%23) `144.4K 🔥` `+153%`
1. [心疼范玮琪 (Feeling sorry for Weiqi Fan)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E8%8C%83%E7%8E%AE%E7%90%AA%23) `142.6K 🔥` `+120%`
1. [沈阳一地路边现大量幼猫无人看管](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E4%B8%80%E5%9C%B0%E8%B7%AF%E8%BE%B9%E7%8E%B0%E5%A4%A7%E9%87%8F%E5%B9%BC%E7%8C%AB%E6%97%A0%E4%BA%BA%E7%9C%8B%E7%AE%A1%23) `142.2K 🔥` `+149%`
1. [歌手回应排名 (Singer response ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E5%9B%9E%E5%BA%94%E6%8E%92%E5%90%8D%23) `140.8K 🔥` `+144%`
1. [王哲林夺冠夜29分15篮板](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%93%B2%E6%9E%97%E5%A4%BA%E5%86%A0%E5%A4%9C29%E5%88%8615%E7%AF%AE%E6%9D%BF%23) `138.7K 🔥` `+143%`
1. [韩国丈夫偷拍并嘲笑孕晚期妻子](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%B8%88%E5%A4%AB%E5%81%B7%E6%8B%8D%E5%B9%B6%E5%98%B2%E7%AC%91%E5%AD%95%E6%99%9A%E6%9C%9F%E5%A6%BB%E5%AD%90%23) `135.5K 🔥` `+111%`
1. [阚清子 叶琳大小姐回归](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%20%E5%8F%B6%E7%90%B3%E5%A4%A7%E5%B0%8F%E5%A7%90%E5%9B%9E%E5%BD%92%23) `133.6K 🔥` `+134%`
1. [温峥嵘自己玩上了](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E8%87%AA%E5%B7%B1%E7%8E%A9%E4%B8%8A%E4%BA%86%23) `131.6K 🔥` `+131%`
1. [浪姐排名 (Sister Lang ranking)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `131.2K 🔥` `+130%`
1. [U19国足1比0哥伦比亚U19 (U19 national football team 1-0 Colombia U19)](https://s.weibo.com/weibo?q=%23U19%E5%9B%BD%E8%B6%B31%E6%AF%940%E5%93%A5%E4%BC%A6%E6%AF%94%E4%BA%9AU19%23) `130.7K 🔥` `+129%`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `159.2K 🔥` `-78%`
1. [李晨好大一个白眼](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E5%A5%BD%E5%A4%A7%E4%B8%80%E4%B8%AA%E7%99%BD%E7%9C%BC%23) `158.5K 🔥` `-63%`
1. [王源线下皮肤状态 (Wang Yuan's offline skin status)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E7%BA%BF%E4%B8%8B%E7%9A%AE%E8%82%A4%E7%8A%B6%E6%80%81%23) `141.3K 🔥` `-76%`

Updated at 2026-06-06 08:01:35

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
