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

1. [金鹰奖获奖名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `207.9K 🔥` `NEW`
1. [芒果的策划又封神了](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E7%9A%84%E7%AD%96%E5%88%92%E5%8F%88%E5%B0%81%E7%A5%9E%E4%BA%86%23) `173.0K 🔥` `NEW`
1. [遵义三日](https://s.weibo.com/weibo?q=%23%E9%81%B5%E4%B9%89%E4%B8%89%E6%97%A5%23) `140.8K 🔥` `NEW`
1. [林大爷死在兰香怀里](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%A4%A7%E7%88%B7%E6%AD%BB%E5%9C%A8%E5%85%B0%E9%A6%99%E6%80%80%E9%87%8C%23) `120.1K 🔥` `NEW`
1. [购房贴息 150万](https://s.weibo.com/weibo?q=%23%E8%B4%AD%E6%88%BF%E8%B4%B4%E6%81%AF%20150%E4%B8%87%23) `110.9K 🔥` `NEW`
1. [赵丽颖身体到底怎么了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%BA%AB%E4%BD%93%E5%88%B0%E5%BA%95%E6%80%8E%E4%B9%88%E4%BA%86%23) `110.3K 🔥` `NEW`
1. [吃糖才会升血糖是误区](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%B3%96%E6%89%8D%E4%BC%9A%E5%8D%87%E8%A1%80%E7%B3%96%E6%98%AF%E8%AF%AF%E5%8C%BA%23) `108.1K 🔥` `NEW`
1. [刘学义不认识杨迪何炅](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E4%B8%8D%E8%AE%A4%E8%AF%86%E6%9D%A8%E8%BF%AA%E4%BD%95%E7%82%85%23) `104.8K 🔥` `NEW`
1. [陈梦福原爱时隔13年再度交手](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A2%A6%E7%A6%8F%E5%8E%9F%E7%88%B1%E6%97%B6%E9%9A%9413%E5%B9%B4%E5%86%8D%E5%BA%A6%E4%BA%A4%E6%89%8B%23) `104.3K 🔥` `NEW`
1. [买新房贷款超一百万可获一万补贴](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E6%96%B0%E6%88%BF%E8%B4%B7%E6%AC%BE%E8%B6%85%E4%B8%80%E7%99%BE%E4%B8%87%E5%8F%AF%E8%8E%B7%E4%B8%80%E4%B8%87%E8%A1%A5%E8%B4%B4%23) `102.8K 🔥` `NEW`
1. [宋佳获奖不会只说她自己](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BD%B3%E8%8E%B7%E5%A5%96%E4%B8%8D%E4%BC%9A%E5%8F%AA%E8%AF%B4%E5%A5%B9%E8%87%AA%E5%B7%B1%23) `101.8K 🔥` `NEW`
1. [张家齐妈妈说不能和男孩子开玩笑](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%AF%B4%E4%B8%8D%E8%83%BD%E5%92%8C%E7%94%B7%E5%AD%A9%E5%AD%90%E5%BC%80%E7%8E%A9%E7%AC%91%23) `101.3K 🔥` `NEW`
1. [张家齐说陈芋汐21岁状态可怕](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%AF%B4%E9%99%88%E8%8A%8B%E6%B1%9021%E5%B2%81%E7%8A%B6%E6%80%81%E5%8F%AF%E6%80%95%23) `100.5K 🔥` `NEW`
1. [邓亚萍直言输球不要找借口](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E7%9B%B4%E8%A8%80%E8%BE%93%E7%90%83%E4%B8%8D%E8%A6%81%E6%89%BE%E5%80%9F%E5%8F%A3%23) `99.5K 🔥` `NEW`
1. [小巷人家 陪跑](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%20%E9%99%AA%E8%B7%91%23) `86.5K 🔥` `NEW`
1. [心动9 脚底板](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A89%20%E8%84%9A%E5%BA%95%E6%9D%BF%23) `74.5K 🔥` `NEW`
1. [周深唱了70首歌](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%94%B1%E4%BA%8670%E9%A6%96%E6%AD%8C%23) `67.4K 🔥` `NEW`
1. [泰国洪灾后大量蛇和鳄鱼出没](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%B4%AA%E7%81%BE%E5%90%8E%E5%A4%A7%E9%87%8F%E8%9B%87%E5%92%8C%E9%B3%84%E9%B1%BC%E5%87%BA%E6%B2%A1%23) `66.6K 🔥` `NEW`
1. [生万物](https://s.weibo.com/weibo?q=%23%E7%94%9F%E4%B8%87%E7%89%A9%23) `66.4K 🔥` `NEW`
1. [迪丽热巴看秀扇扇子这一下](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9C%8B%E7%A7%80%E6%89%87%E6%89%87%E5%AD%90%E8%BF%99%E4%B8%80%E4%B8%8B%23) `66.3K 🔥` `NEW`
1. [陈妤颉领先泰国队0.09秒](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%A4%E9%A2%89%E9%A2%86%E5%85%88%E6%B3%B0%E5%9B%BD%E9%98%9F0.09%E7%A7%92%23) `66.0K 🔥` `NEW`
1. [陈梦福原爱第4次交手](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A2%A6%E7%A6%8F%E5%8E%9F%E7%88%B1%E7%AC%AC4%E6%AC%A1%E4%BA%A4%E6%89%8B%23) `65.7K 🔥` `NEW`
1. [家有儿女小雪刘星合体](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%E5%B0%8F%E9%9B%AA%E5%88%98%E6%98%9F%E5%90%88%E4%BD%93%23) `65.6K 🔥` `NEW`
1. [王鹤棣不吃压力回应](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E4%B8%8D%E5%90%83%E5%8E%8B%E5%8A%9B%E5%9B%9E%E5%BA%94%23) `65.3K 🔥` `NEW`
1. [胡歌闫妮别闹了](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E9%97%AB%E5%A6%AE%E5%88%AB%E9%97%B9%E4%BA%86%23) `65.0K 🔥` `NEW`
1. [男子每天喂鱼把鱼饿死发现鱼粮被拦](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%AF%8F%E5%A4%A9%E5%96%82%E9%B1%BC%E6%8A%8A%E9%B1%BC%E9%A5%BF%E6%AD%BB%E5%8F%91%E7%8E%B0%E9%B1%BC%E7%B2%AE%E8%A2%AB%E6%8B%A6%23) `65.0K 🔥` `NEW`
1. [Dior大秀](https://s.weibo.com/weibo?q=%23Dior%E5%A4%A7%E7%A7%80%23) `59.9K 🔥` `NEW`
1. [孙怡平遥影后](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%B9%B3%E9%81%A5%E5%BD%B1%E5%90%8E%23) `59.9K 🔥` `NEW`
1. [00后员工拒收老板8.8万彩礼](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%91%98%E5%B7%A5%E6%8B%92%E6%94%B6%E8%80%81%E6%9D%BF8.8%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `59.9K 🔥` `NEW`
1. [金价下跌30岁左右年轻人成消费主力](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8B%E8%B7%8C30%E5%B2%81%E5%B7%A6%E5%8F%B3%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%88%90%E6%B6%88%E8%B4%B9%E4%B8%BB%E5%8A%9B%23) `59.8K 🔥` `NEW`
1. [狗熊哆嗦毛示范者是前文旅部司长](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%86%8A%E5%93%86%E5%97%A6%E6%AF%9B%E7%A4%BA%E8%8C%83%E8%80%85%E6%98%AF%E5%89%8D%E6%96%87%E6%97%85%E9%83%A8%E5%8F%B8%E9%95%BF%23) `59.8K 🔥` `NEW`
1. [金智秀Dior待遇](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80Dior%E5%BE%85%E9%81%87%23) `59.8K 🔥` `NEW`
1. [国庆节的前一天是烈士纪念日](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E8%8A%82%E7%9A%84%E5%89%8D%E4%B8%80%E5%A4%A9%E6%98%AF%E7%83%88%E5%A3%AB%E7%BA%AA%E5%BF%B5%E6%97%A5%23) `59.8K 🔥` `NEW`
1. [孙怡发博回应拿影后](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%8F%91%E5%8D%9A%E5%9B%9E%E5%BA%94%E6%8B%BF%E5%BD%B1%E5%90%8E%23) `59.8K 🔥` `NEW`
1. [沙玥儿对陈鹤文的感觉很难回到过去](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%8E%A5%E5%84%BF%E5%AF%B9%E9%99%88%E9%B9%A4%E6%96%87%E7%9A%84%E6%84%9F%E8%A7%89%E5%BE%88%E9%9A%BE%E5%9B%9E%E5%88%B0%E8%BF%87%E5%8E%BB%23) `59.8K 🔥` `NEW`
1. [YSL大秀](https://s.weibo.com/weibo?q=%23YSL%E5%A4%A7%E7%A7%80%23) `59.8K 🔥` `NEW`
1. [圣罗兰大秀](https://s.weibo.com/weibo?q=%23%E5%9C%A3%E7%BD%97%E5%85%B0%E5%A4%A7%E7%A7%80%23) `59.8K 🔥` `NEW`
1. [天安门执勤武警被大橘猫缠绕](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%89%E9%97%A8%E6%89%A7%E5%8B%A4%E6%AD%A6%E8%AD%A6%E8%A2%AB%E5%A4%A7%E6%A9%98%E7%8C%AB%E7%BC%A0%E7%BB%95%23) `59.8K 🔥` `NEW`
1. [何炅点名](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E7%82%B9%E5%90%8D%23) `59.8K 🔥` `NEW`
1. [热巴谷爱凌李昀锐秀场同框](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E8%B0%B7%E7%88%B1%E5%87%8C%E6%9D%8E%E6%98%80%E9%94%90%E7%A7%80%E5%9C%BA%E5%90%8C%E6%A1%86%23) `59.8K 🔥` `NEW`
1. [华晨宇被拽](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E8%A2%AB%E6%8B%BD%23) `59.8K 🔥` `NEW`
1. [王鹤棣 哥们的哥们也很好](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%20%E5%93%A5%E4%BB%AC%E7%9A%84%E5%93%A5%E4%BB%AC%E4%B9%9F%E5%BE%88%E5%A5%BD%23) `59.8K 🔥` `NEW`
1. [飞天奖](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E5%A4%A9%E5%A5%96%23) `59.8K 🔥` `NEW`
1. [陈梦看亚运会感叹球速快](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A2%A6%E7%9C%8B%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%84%9F%E5%8F%B9%E7%90%83%E9%80%9F%E5%BF%AB%23) `59.8K 🔥` `NEW`
1. [被张家齐跳水训练视频戳到](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%B7%B3%E6%B0%B4%E8%AE%AD%E7%BB%83%E8%A7%86%E9%A2%91%E6%88%B3%E5%88%B0%23) `59.8K 🔥` `NEW`
1. [张家齐直播被说好肥啊](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%9B%B4%E6%92%AD%E8%A2%AB%E8%AF%B4%E5%A5%BD%E8%82%A5%E5%95%8A%23) `59.8K 🔥` `NEW`
1. [网传大学生替缺课老师讲课一小时](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%9B%BF%E7%BC%BA%E8%AF%BE%E8%80%81%E5%B8%88%E8%AE%B2%E8%AF%BE%E4%B8%80%E5%B0%8F%E6%97%B6%23) `59.8K 🔥` `NEW`
1. [穆祉丞](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%23) `59.7K 🔥` `NEW`
1. [宋佳二封三大奖](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BD%B3%E4%BA%8C%E5%B0%81%E4%B8%89%E5%A4%A7%E5%A5%96%23) `59.7K 🔥` `NEW`
1. [破坏夫妻关系最大的杀手](https://s.weibo.com/weibo?q=%23%E7%A0%B4%E5%9D%8F%E5%A4%AB%E5%A6%BB%E5%85%B3%E7%B3%BB%E6%9C%80%E5%A4%A7%E7%9A%84%E6%9D%80%E6%89%8B%23) `59.7K 🔥` `NEW`
1. [沈梦辰的鞋穿帮了](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E7%9A%84%E9%9E%8B%E7%A9%BF%E5%B8%AE%E4%BA%86%23) `59.7K 🔥` `NEW`

Updated at 2026-09-30 03:27:57

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
