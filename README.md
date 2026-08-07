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

1. [湖人 詹姆斯 (lakers james)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%20%E8%A9%B9%E5%A7%86%E6%96%AF%23) `1.1M 🔥` `NEW`
1. [喝秋天第一口新上京东外卖](https://s.weibo.com/weibo?q=%23%E5%96%9D%E7%A7%8B%E5%A4%A9%E7%AC%AC%E4%B8%80%E5%8F%A3%E6%96%B0%E4%B8%8A%E4%BA%AC%E4%B8%9C%E5%A4%96%E5%8D%96%23) `621.9K 🔥` `NEW`
1. [黄子弘凡好稳](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E5%A5%BD%E7%A8%B3%23) `604.3K 🔥` `NEW`
1. [立秋不是气象意义上的入秋](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E7%A7%8B%E4%B8%8D%E6%98%AF%E6%B0%94%E8%B1%A1%E6%84%8F%E4%B9%89%E4%B8%8A%E7%9A%84%E5%85%A5%E7%A7%8B%23) `323.3K 🔥` `NEW`
1. [我支持万妮达当歌王](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%94%AF%E6%8C%81%E4%B8%87%E5%A6%AE%E8%BE%BE%E5%BD%93%E6%AD%8C%E7%8E%8B%23) `318.3K 🔥` `NEW`
1. [外国网友也认了中式天庭](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B%E4%B9%9F%E8%AE%A4%E4%BA%86%E4%B8%AD%E5%BC%8F%E5%A4%A9%E5%BA%AD%23) `297.0K 🔥` `NEW`
1. [北京出台房地产新政策](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%87%BA%E5%8F%B0%E6%88%BF%E5%9C%B0%E4%BA%A7%E6%96%B0%E6%94%BF%E7%AD%96%23) `283.9K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `271.6K 🔥` `NEW`
1. [刘浩存红裙跳舞](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E7%BA%A2%E8%A3%99%E8%B7%B3%E8%88%9E%23) `270.0K 🔥` `NEW`
1. [齐豫毛阿敏秒了](https://s.weibo.com/weibo?q=%23%E9%BD%90%E8%B1%AB%E6%AF%9B%E9%98%BF%E6%95%8F%E7%A7%92%E4%BA%86%23) `268.8K 🔥` `NEW`
1. [胡彦斌韩磊 谁帮谁 (Hu Yanbin Han Lei Who helps whom?)](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E9%9F%A9%E7%A3%8A%20%E8%B0%81%E5%B8%AE%E8%B0%81%23) `265.5K 🔥` `NEW`
1. [窦靖童欧阳娜娜 好听](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%20%E5%A5%BD%E5%90%AC%23) `264.5K 🔥` `NEW`
1. [九尾看九门被陈伟霆盯上了](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E7%9C%8B%E4%B9%9D%E9%97%A8%E8%A2%AB%E9%99%88%E4%BC%9F%E9%9C%86%E7%9B%AF%E4%B8%8A%E4%BA%86%23) `263.1K 🔥` `NEW`
1. [大麦拦截恶意请求遭质疑](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BA%A6%E6%8B%A6%E6%88%AA%E6%81%B6%E6%84%8F%E8%AF%B7%E6%B1%82%E9%81%AD%E8%B4%A8%E7%96%91%23) `262.2K 🔥` `NEW`
1. [歌手总决赛 孙燕姿吴青峰太伟大了](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B%20%E5%AD%99%E7%87%95%E5%A7%BF%E5%90%B4%E9%9D%92%E5%B3%B0%E5%A4%AA%E4%BC%9F%E5%A4%A7%E4%BA%86%23) `257.8K 🔥` `NEW`
1. [吴碧霞 国家队就是国家队](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A2%A7%E9%9C%9E%20%E5%9B%BD%E5%AE%B6%E9%98%9F%E5%B0%B1%E6%98%AF%E5%9B%BD%E5%AE%B6%E9%98%9F%23) `256.2K 🔥` `NEW`
1. [李在明向国家暴力受害者道歉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E5%90%91%E5%9B%BD%E5%AE%B6%E6%9A%B4%E5%8A%9B%E5%8F%97%E5%AE%B3%E8%80%85%E9%81%93%E6%AD%89%23) `249.6K 🔥` `NEW`
1. [百花奖开幕式](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E5%BC%80%E5%B9%95%E5%BC%8F%23) `247.1K 🔥` `NEW`
1. [这居然是李行亮](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%85%E7%84%B6%E6%98%AF%E6%9D%8E%E8%A1%8C%E4%BA%AE%23) `244.0K 🔥` `NEW`
1. [河南带薪错峰休假 撤回](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%B8%A6%E8%96%AA%E9%94%99%E5%B3%B0%E4%BC%91%E5%81%87%20%E6%92%A4%E5%9B%9E%23) `242.2K 🔥` `NEW`
1. [程潇复刻古希腊女神 (Cheng Xiao recreates the ancient Greek goddess)](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E5%A4%8D%E5%88%BB%E5%8F%A4%E5%B8%8C%E8%85%8A%E5%A5%B3%E7%A5%9E%23) `233.9K 🔥` `NEW`
1. [理解了孩子平庸就承欢膝下的意义](https://s.weibo.com/weibo?q=%23%E7%90%86%E8%A7%A3%E4%BA%86%E5%AD%A9%E5%AD%90%E5%B9%B3%E5%BA%B8%E5%B0%B1%E6%89%BF%E6%AC%A2%E8%86%9D%E4%B8%8B%E7%9A%84%E6%84%8F%E4%B9%89%23) `227.7K 🔥` `NEW`
1. [宁艺卓钢管舞pose](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E9%92%A2%E7%AE%A1%E8%88%9Epose%23) `223.3K 🔥` `NEW`
1. [非农数据](https://s.weibo.com/weibo?q=%23%E9%9D%9E%E5%86%9C%E6%95%B0%E6%8D%AE%23) `206.6K 🔥` `NEW`
1. [费加罗红毯](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E5%8A%A0%E7%BD%97%E7%BA%A2%E6%AF%AF%23) `182.5K 🔥` `NEW`
1. [中山大学23岁直博生确诊胃癌晚期](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B1%B1%E5%A4%A7%E5%AD%A623%E5%B2%81%E7%9B%B4%E5%8D%9A%E7%94%9F%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%23) `181.6K 🔥` `NEW`
1. [苏新皓饼兔SP](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E9%A5%BC%E5%85%94SP%23) `178.4K 🔥` `NEW`
1. [泉州市委书记张毅恭被查](https://s.weibo.com/weibo?q=%23%E6%B3%89%E5%B7%9E%E5%B8%82%E5%A7%94%E4%B9%A6%E8%AE%B0%E5%BC%A0%E6%AF%85%E6%81%AD%E8%A2%AB%E6%9F%A5%23) `174.5K 🔥` `NEW`
1. [相思](https://s.weibo.com/weibo?q=%23%E7%9B%B8%E6%80%9D%23) `169.7K 🔥` `NEW`
1. [一个没有空调外挂机的城市](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%B2%A1%E6%9C%89%E7%A9%BA%E8%B0%83%E5%A4%96%E6%8C%82%E6%9C%BA%E7%9A%84%E5%9F%8E%E5%B8%82%23) `801.3K 🔥` `+151%`
1. [歌手开场 好听 (The singer's opening is nice)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E5%BC%80%E5%9C%BA%20%E5%A5%BD%E5%90%AC%23) `272.9K 🔥` `+61%`
1. [突然理解了大爷的绝望感](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E4%BA%86%E5%A4%A7%E7%88%B7%E7%9A%84%E7%BB%9D%E6%9C%9B%E6%84%9F%23) `243.7K 🔥` `+36%`
1. [四川高县地震1人死亡](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E9%AB%98%E5%8E%BF%E5%9C%B0%E9%9C%871%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `264.0K 🔥`
1. [iPhone18Pro起售或破万](https://s.weibo.com/weibo?q=%23iPhone18Pro%E8%B5%B7%E5%94%AE%E6%88%96%E7%A0%B4%E4%B8%87%23) `260.3K 🔥`
1. [原来这就是抑郁躯体化](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E6%8A%91%E9%83%81%E8%BA%AF%E4%BD%93%E5%8C%96%23) `258.3K 🔥`
1. [立秋 (beginning of autumn)](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E7%A7%8B%23) `254.8K 🔥`
1. [歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%23) `249.0K 🔥`
1. [毛阿敏 我是大姐](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E9%98%BF%E6%95%8F%20%E6%88%91%E6%98%AF%E5%A4%A7%E5%A7%90%23) `237.6K 🔥`
1. [暑期档票房超80亿 (Summer box office exceeds 8 billion)](https://s.weibo.com/weibo?q=%23%E6%9A%91%E6%9C%9F%E6%A1%A3%E7%A5%A8%E6%88%BF%E8%B6%8580%E4%BA%BF%23) `657.6K 🔥` `-26%`
1. [国乒男单横滨冠军赛全军覆没](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E6%A8%AA%E6%BB%A8%E5%86%A0%E5%86%9B%E8%B5%9B%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1%23) `345.6K 🔥` `-38%`
1. [歌手总决赛](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B%23) `338.2K 🔥` `-89%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `271.7K 🔥` `-83%`
1. [三支一扶作弊案 (Three-support and one-support cheating case)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E4%BD%9C%E5%BC%8A%E6%A1%88%23) `267.3K 🔥` `-37%`
1. [河南三支一扶笔试将重考 (Henan's three-branch and one-support written test will be retaken)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E7%AC%94%E8%AF%95%E5%B0%86%E9%87%8D%E8%80%83%23) `247.8K 🔥` `-68%`
1. [PYL暂停解说LPL (PYL pauses commentary on LPL)](https://s.weibo.com/weibo?q=%23PYL%E6%9A%82%E5%81%9C%E8%A7%A3%E8%AF%B4LPL%23) `237.0K 🔥` `-44%`
1. [飞机免费退改票真的来了](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E6%9C%BA%E5%85%8D%E8%B4%B9%E9%80%80%E6%94%B9%E7%A5%A8%E7%9C%9F%E7%9A%84%E6%9D%A5%E4%BA%86%23) `229.9K 🔥` `-25%`
1. [宋威龙吃了烤冷面夹臭豆腐](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%90%83%E4%BA%86%E7%83%A4%E5%86%B7%E9%9D%A2%E5%A4%B9%E8%87%AD%E8%B1%86%E8%85%90%23) `196.5K 🔥` `-37%`
1. [虞书欣工作室晒小兰花未公开照](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%99%92%E5%B0%8F%E5%85%B0%E8%8A%B1%E6%9C%AA%E5%85%AC%E5%BC%80%E7%85%A7%23) `193.3K 🔥` `-36%`
1. [雪佛兰将停止在华销售](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E4%BD%9B%E5%85%B0%E5%B0%86%E5%81%9C%E6%AD%A2%E5%9C%A8%E5%8D%8E%E9%94%80%E5%94%AE%23) `182.8K 🔥` `-39%`
1. [周渝民说娶自己女儿先拿几千万来](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B8%9D%E6%B0%91%E8%AF%B4%E5%A8%B6%E8%87%AA%E5%B7%B1%E5%A5%B3%E5%84%BF%E5%85%88%E6%8B%BF%E5%87%A0%E5%8D%83%E4%B8%87%E6%9D%A5%23) `172.6K 🔥` `-43%`
1. [D社曝BLACKPINK十周年内幕](https://s.weibo.com/weibo?q=%23D%E7%A4%BE%E6%9B%9DBLACKPINK%E5%8D%81%E5%91%A8%E5%B9%B4%E5%86%85%E5%B9%95%23) `170.0K 🔥` `-44%`
1. [大麦称打击黄牛寸步不让](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BA%A6%E7%A7%B0%E6%89%93%E5%87%BB%E9%BB%84%E7%89%9B%E5%AF%B8%E6%AD%A5%E4%B8%8D%E8%AE%A9%23) `169.7K 🔥` `-22%`

Updated at 2026-08-07 21:48:47

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
