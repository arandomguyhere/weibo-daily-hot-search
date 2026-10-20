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

1. [王腾说希望雷总放我们一条生路](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E8%AF%B4%E5%B8%8C%E6%9C%9B%E9%9B%B7%E6%80%BB%E6%94%BE%E6%88%91%E4%BB%AC%E4%B8%80%E6%9D%A1%E7%94%9F%E8%B7%AF%23) `1.1M 🔥` `NEW`
1. [工信部称确有部分车企产品验证不充分](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BF%A1%E9%83%A8%E7%A7%B0%E7%A1%AE%E6%9C%89%E9%83%A8%E5%88%86%E8%BD%A6%E4%BC%81%E4%BA%A7%E5%93%81%E9%AA%8C%E8%AF%81%E4%B8%8D%E5%85%85%E5%88%86%23) `797.3K 🔥` `NEW`
1. [90年了我们一直在找你们的名字](https://s.weibo.com/weibo?q=%2390%E5%B9%B4%E4%BA%86%E6%88%91%E4%BB%AC%E4%B8%80%E7%9B%B4%E5%9C%A8%E6%89%BE%E4%BD%A0%E4%BB%AC%E7%9A%84%E5%90%8D%E5%AD%97%23) `642.2K 🔥` `NEW`
1. [钟南山院士才是真正的薄肌90后](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E9%99%A2%E5%A3%AB%E6%89%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84%E8%96%84%E8%82%8C90%E5%90%8E%23) `589.6K 🔥` `NEW`
1. [维密大翅膀代表什么](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%AF%86%E5%A4%A7%E7%BF%85%E8%86%80%E4%BB%A3%E8%A1%A8%E4%BB%80%E4%B9%88%23) `506.3K 🔥` `NEW`
1. [共赴天猫双11星舰狂欢](https://s.weibo.com/weibo?q=%23%E5%85%B1%E8%B5%B4%E5%A4%A9%E7%8C%AB%E5%8F%8C11%E6%98%9F%E8%88%B0%E7%8B%82%E6%AC%A2%23) `403.3K 🔥` `NEW`
1. [国家数据集团成立](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E6%95%B0%E6%8D%AE%E9%9B%86%E5%9B%A2%E6%88%90%E7%AB%8B%23) `399.2K 🔥` `NEW`
1. [新鲜牛肉烫10秒到底够不够](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%B2%9C%E7%89%9B%E8%82%89%E7%83%AB10%E7%A7%92%E5%88%B0%E5%BA%95%E5%A4%9F%E4%B8%8D%E5%A4%9F%23) `327.1K 🔥` `NEW`
1. [27岁宠物爱心博主感染罕见真菌离世](https://s.weibo.com/weibo?q=%2327%E5%B2%81%E5%AE%A0%E7%89%A9%E7%88%B1%E5%BF%83%E5%8D%9A%E4%B8%BB%E6%84%9F%E6%9F%93%E7%BD%95%E8%A7%81%E7%9C%9F%E8%8F%8C%E7%A6%BB%E4%B8%96%23) `300.5K 🔥` `NEW`
1. [钟南山心梗后仍每周运动3次](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E5%BF%83%E6%A2%97%E5%90%8E%E4%BB%8D%E6%AF%8F%E5%91%A8%E8%BF%90%E5%8A%A83%E6%AC%A1%23) `287.0K 🔥` `NEW`
1. [曝湖南台力捧张雅琪原因](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B9%96%E5%8D%97%E5%8F%B0%E5%8A%9B%E6%8D%A7%E5%BC%A0%E9%9B%85%E7%90%AA%E5%8E%9F%E5%9B%A0%23) `286.5K 🔥` `NEW`
1. [闫桉骑行李箱摔了两次](https://s.weibo.com/weibo?q=%23%E9%97%AB%E6%A1%89%E9%AA%91%E8%A1%8C%E6%9D%8E%E7%AE%B1%E6%91%94%E4%BA%86%E4%B8%A4%E6%AC%A1%23) `256.4K 🔥` `NEW`
1. [男子抽关节积液抽出喷泉效果](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8A%BD%E5%85%B3%E8%8A%82%E7%A7%AF%E6%B6%B2%E6%8A%BD%E5%87%BA%E5%96%B7%E6%B3%89%E6%95%88%E6%9E%9C%23) `243.0K 🔥` `NEW`
1. [A2OLITE安可](https://s.weibo.com/weibo?q=%23A2OLITE%E5%AE%89%E5%8F%AF%23) `231.7K 🔥` `NEW`
1. [维密靠大学生翻身](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%AF%86%E9%9D%A0%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%BF%BB%E8%BA%AB%23) `223.4K 🔥` `NEW`
1. [嫁金钗常妈妈临死前说出君黛是假的](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%B8%B8%E5%A6%88%E5%A6%88%E4%B8%B4%E6%AD%BB%E5%89%8D%E8%AF%B4%E5%87%BA%E5%90%9B%E9%BB%9B%E6%98%AF%E5%81%87%E7%9A%84%23) `223.3K 🔥` `NEW`
1. [多地发生网络异常跳转博彩网站事件](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%8F%91%E7%94%9F%E7%BD%91%E7%BB%9C%E5%BC%82%E5%B8%B8%E8%B7%B3%E8%BD%AC%E5%8D%9A%E5%BD%A9%E7%BD%91%E7%AB%99%E4%BA%8B%E4%BB%B6%23) `223.3K 🔥` `NEW`
1. [汽车可靠性测试验证不低于3万公里](https://s.weibo.com/weibo?q=%23%E6%B1%BD%E8%BD%A6%E5%8F%AF%E9%9D%A0%E6%80%A7%E6%B5%8B%E8%AF%95%E9%AA%8C%E8%AF%81%E4%B8%8D%E4%BD%8E%E4%BA%8E3%E4%B8%87%E5%85%AC%E9%87%8C%23) `223.2K 🔥` `NEW`
1. [水煮蛋和螃蟹只差一个老吃家](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E7%85%AE%E8%9B%8B%E5%92%8C%E8%9E%83%E8%9F%B9%E5%8F%AA%E5%B7%AE%E4%B8%80%E4%B8%AA%E8%80%81%E5%90%83%E5%AE%B6%23) `223.1K 🔥` `NEW`
1. [双11论便宜还得是淘宝](https://s.weibo.com/weibo?q=%23%E5%8F%8C11%E8%AE%BA%E4%BE%BF%E5%AE%9C%E8%BF%98%E5%BE%97%E6%98%AF%E6%B7%98%E5%AE%9D%23) `223.1K 🔥` `NEW`
1. [双十一付尾款](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E5%8D%81%E4%B8%80%E4%BB%98%E5%B0%BE%E6%AC%BE%23) `223.0K 🔥` `NEW`
1. [膨胀消费券](https://s.weibo.com/weibo?q=%23%E8%86%A8%E8%83%80%E6%B6%88%E8%B4%B9%E5%88%B8%23) `222.9K 🔥` `NEW`
1. [A2OLITE出道初一位](https://s.weibo.com/weibo?q=%23A2OLITE%E5%87%BA%E9%81%93%E5%88%9D%E4%B8%80%E4%BD%8D%23) `222.8K 🔥` `NEW`
1. [我国没有抽中学历](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%B2%A1%E6%9C%89%E6%8A%BD%E4%B8%AD%E5%AD%A6%E5%8E%86%23) `222.7K 🔥` `NEW`
1. [妈妈怕女儿吃苹果不洗故意裹面粉](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%80%95%E5%A5%B3%E5%84%BF%E5%90%83%E8%8B%B9%E6%9E%9C%E4%B8%8D%E6%B4%97%E6%95%85%E6%84%8F%E8%A3%B9%E9%9D%A2%E7%B2%89%23) `222.7K 🔥` `NEW`
1. [儿童手表封闭社交成常态](https://s.weibo.com/weibo?q=%23%E5%84%BF%E7%AB%A5%E6%89%8B%E8%A1%A8%E5%B0%81%E9%97%AD%E7%A4%BE%E4%BA%A4%E6%88%90%E5%B8%B8%E6%80%81%23) `222.6K 🔥` `NEW`
1. [井柏然120套私服又更新了](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6120%E5%A5%97%E7%A7%81%E6%9C%8D%E5%8F%88%E6%9B%B4%E6%96%B0%E4%BA%86%23) `222.5K 🔥` `NEW`
1. [高卿尘恋综](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8D%BF%E5%B0%98%E6%81%8B%E7%BB%BC%23) `222.4K 🔥` `NEW`
1. [宁艺卓生日会](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E7%94%9F%E6%97%A5%E4%BC%9A%23) `222.4K 🔥` `NEW`
1. [曝iPhoneDuo折痕区来回滑动有波纹](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhoneDuo%E6%8A%98%E7%97%95%E5%8C%BA%E6%9D%A5%E5%9B%9E%E6%BB%91%E5%8A%A8%E6%9C%89%E6%B3%A2%E7%BA%B9%23) `222.3K 🔥` `NEW`
1. [美人余大结局](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BA%BA%E4%BD%99%E5%A4%A7%E7%BB%93%E5%B1%80%23) `222.2K 🔥` `NEW`
1. [到底谁把微信变成工作软件的](https://s.weibo.com/weibo?q=%23%E5%88%B0%E5%BA%95%E8%B0%81%E6%8A%8A%E5%BE%AE%E4%BF%A1%E5%8F%98%E6%88%90%E5%B7%A5%E4%BD%9C%E8%BD%AF%E4%BB%B6%E7%9A%84%23) `222.2K 🔥` `NEW`
1. [oa只比小糯米大一岁](https://s.weibo.com/weibo?q=%23oa%E5%8F%AA%E6%AF%94%E5%B0%8F%E7%B3%AF%E7%B1%B3%E5%A4%A7%E4%B8%80%E5%B2%81%23) `205.0K 🔥` `NEW`
1. [郭宇欣直播打赏退款](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E7%9B%B4%E6%92%AD%E6%89%93%E8%B5%8F%E9%80%80%E6%AC%BE%23) `161.1K 🔥` `NEW`
1. [韩路说小天才手表烂而且极贵](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%B7%AF%E8%AF%B4%E5%B0%8F%E5%A4%A9%E6%89%8D%E6%89%8B%E8%A1%A8%E7%83%82%E8%80%8C%E4%B8%94%E6%9E%81%E8%B4%B5%23) `160.3K 🔥` `NEW`
1. [杨幂小手办](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%B0%8F%E6%89%8B%E5%8A%9E%23) `158.7K 🔥` `NEW`
1. [REM幻宇](https://s.weibo.com/weibo?q=%23REM%E5%B9%BB%E5%AE%87%23) `157.2K 🔥` `NEW`
1. [双十一拿到大结果了](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E5%8D%81%E4%B8%80%E6%8B%BF%E5%88%B0%E5%A4%A7%E7%BB%93%E6%9E%9C%E4%BA%86%23) `155.3K 🔥` `NEW`
1. [烟霾笼罩东南亚空气净化器卖爆了](https://s.weibo.com/weibo?q=%23%E7%83%9F%E9%9C%BE%E7%AC%BC%E7%BD%A9%E4%B8%9C%E5%8D%97%E4%BA%9A%E7%A9%BA%E6%B0%94%E5%87%80%E5%8C%96%E5%99%A8%E5%8D%96%E7%88%86%E4%BA%86%23) `153.6K 🔥` `NEW`
1. [京东iPhone降价](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9CiPhone%E9%99%8D%E4%BB%B7%23) `152.7K 🔥` `NEW`
1. [DeepSeek全面开源DeepInfer](https://s.weibo.com/weibo?q=%23DeepSeek%E5%85%A8%E9%9D%A2%E5%BC%80%E6%BA%90DeepInfer%23) `151.3K 🔥` `NEW`
1. [王一博直播](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%9B%B4%E6%92%AD%23) `148.4K 🔥` `NEW`
1. [张柏芝说养育3个儿子很轻松](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E8%AF%B4%E5%85%BB%E8%82%B23%E4%B8%AA%E5%84%BF%E5%AD%90%E5%BE%88%E8%BD%BB%E6%9D%BE%23) `141.3K 🔥` `NEW`
1. [王文灵](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%96%87%E7%81%B5%23) `137.6K 🔥` `NEW`
1. [杜海涛红包](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E6%B5%B7%E6%B6%9B%E7%BA%A2%E5%8C%85%23) `135.7K 🔥` `NEW`
1. [小城良方新加5广](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E6%96%B0%E5%8A%A05%E5%B9%BF%23) `133.3K 🔥` `NEW`
1. [狼队对战DYG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98DYG%23) `131.5K 🔥` `NEW`
1. [新濠天地REM幻宇开幕盛典](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%BF%A0%E5%A4%A9%E5%9C%B0REM%E5%B9%BB%E5%AE%87%E5%BC%80%E5%B9%95%E7%9B%9B%E5%85%B8%23) `608.0K 🔥`
1. [刘恺威黎纪君承认恋情](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%81%BA%E5%A8%81%E9%BB%8E%E7%BA%AA%E5%90%9B%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `261.8K 🔥` `-23%`
1. [小天才封闭社交倒逼家长购买](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%A9%E6%89%8D%E5%B0%81%E9%97%AD%E7%A4%BE%E4%BA%A4%E5%80%92%E9%80%BC%E5%AE%B6%E9%95%BF%E8%B4%AD%E4%B9%B0%23) `222.5K 🔥` `-89%`

Updated at 2026-10-20 20:16:44

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
