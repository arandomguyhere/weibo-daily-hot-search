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

1. [法国队对季军赛毫无动力 (France has no motivation for third-place match)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%98%9F%E5%AF%B9%E5%AD%A3%E5%86%9B%E8%B5%9B%E6%AF%AB%E6%97%A0%E5%8A%A8%E5%8A%9B%23) `1.5M 🔥` `NEW`
1. [realme手机退出中国市场](https://s.weibo.com/weibo?q=%23realme%E6%89%8B%E6%9C%BA%E9%80%80%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%23) `1.1M 🔥` `NEW`
1. [三尺讲台的青春接力](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%B0%BA%E8%AE%B2%E5%8F%B0%E7%9A%84%E9%9D%92%E6%98%A5%E6%8E%A5%E5%8A%9B%23) `901.5K 🔥` `NEW`
1. [京东超市水饮节送高温补贴](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E8%B6%85%E5%B8%82%E6%B0%B4%E9%A5%AE%E8%8A%82%E9%80%81%E9%AB%98%E6%B8%A9%E8%A1%A5%E8%B4%B4%23) `888.5K 🔥` `NEW`
1. [以后快递地址只写到小区](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E5%BF%AB%E9%80%92%E5%9C%B0%E5%9D%80%E5%8F%AA%E5%86%99%E5%88%B0%E5%B0%8F%E5%8C%BA%23) `865.6K 🔥` `NEW`
1. [长沙人是瞒着我们进化了吗](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E4%BA%BA%E6%98%AF%E7%9E%92%E7%9D%80%E6%88%91%E4%BB%AC%E8%BF%9B%E5%8C%96%E4%BA%86%E5%90%97%23) `840.0K 🔥` `NEW`
1. [周星驰3个问号回应被偷票房](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B03%E4%B8%AA%E9%97%AE%E5%8F%B7%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%81%B7%E7%A5%A8%E6%88%BF%23) `813.1K 🔥` `NEW`
1. [上班后没了叔叔阿姨](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E5%90%8E%E6%B2%A1%E4%BA%86%E5%8F%94%E5%8F%94%E9%98%BF%E5%A7%A8%23) `602.1K 🔥` `NEW`
1. [第1次见女主怀孕相亲](https://s.weibo.com/weibo?q=%23%E7%AC%AC1%E6%AC%A1%E8%A7%81%E5%A5%B3%E4%B8%BB%E6%80%80%E5%AD%95%E7%9B%B8%E4%BA%B2%23) `458.6K 🔥` `NEW`
1. [阿根廷的最后十分钟怎么了](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%9A%84%E6%9C%80%E5%90%8E%E5%8D%81%E5%88%86%E9%92%9F%E6%80%8E%E4%B9%88%E4%BA%86%23) `401.4K 🔥` `NEW`
1. [白鹿新公司名 (Bailu new company name)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B0%E5%85%AC%E5%8F%B8%E5%90%8D%23) `397.6K 🔥` `NEW`
1. [何瑞贤化妆技术比化妆师还好](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%91%9E%E8%B4%A4%E5%8C%96%E5%A6%86%E6%8A%80%E6%9C%AF%E6%AF%94%E5%8C%96%E5%A6%86%E5%B8%88%E8%BF%98%E5%A5%BD%23) `393.1K 🔥` `NEW`
1. [小鹏MONAL03价格杀疯了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONAL03%E4%BB%B7%E6%A0%BC%E6%9D%80%E7%96%AF%E4%BA%86%23) `387.6K 🔥` `NEW`
1. [TF家族运动会Day1大合影](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9ADay1%E5%A4%A7%E5%90%88%E5%BD%B1%23) `337.3K 🔥` `NEW`
1. [盒马因受害咪连夜改冬瓜图](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%AC%E5%9B%A0%E5%8F%97%E5%AE%B3%E5%92%AA%E8%BF%9E%E5%A4%9C%E6%94%B9%E5%86%AC%E7%93%9C%E5%9B%BE%23) `286.4K 🔥` `NEW`
1. [LV热门包二手价跳水](https://s.weibo.com/weibo?q=%23LV%E7%83%AD%E9%97%A8%E5%8C%85%E4%BA%8C%E6%89%8B%E4%BB%B7%E8%B7%B3%E6%B0%B4%23) `201.8K 🔥` `NEW`
1. [白鹿经纪人朋友圈](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `198.0K 🔥` `NEW`
1. [宋亚轩忙一天打开手机天塌了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%BF%99%E4%B8%80%E5%A4%A9%E6%89%93%E5%BC%80%E6%89%8B%E6%9C%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `197.3K 🔥` `NEW`
1. [最绝望的英法大战出现了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E7%BB%9D%E6%9C%9B%E7%9A%84%E8%8B%B1%E6%B3%95%E5%A4%A7%E6%88%98%E5%87%BA%E7%8E%B0%E4%BA%86%23) `196.9K 🔥` `NEW`
1. [韩国股民从暴富到一夜归零](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E6%B0%91%E4%BB%8E%E6%9A%B4%E5%AF%8C%E5%88%B0%E4%B8%80%E5%A4%9C%E5%BD%92%E9%9B%B6%23) `193.5K 🔥` `NEW`
1. [王橹杰把穆祉丞拉过来 (Wang Lujie pulled Mu Zhicheng over)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%8A%8A%E7%A9%86%E7%A5%89%E4%B8%9E%E6%8B%89%E8%BF%87%E6%9D%A5%23) `193.2K 🔥` `NEW`
1. [砸穿民宅陨石携带外星生命催化剂](https://s.weibo.com/weibo?q=%23%E7%A0%B8%E7%A9%BF%E6%B0%91%E5%AE%85%E9%99%A8%E7%9F%B3%E6%90%BA%E5%B8%A6%E5%A4%96%E6%98%9F%E7%94%9F%E5%91%BD%E5%82%AC%E5%8C%96%E5%89%82%23) `192.9K 🔥` `NEW`
1. [关晓彤被风吹的这一下](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E8%A2%AB%E9%A3%8E%E5%90%B9%E7%9A%84%E8%BF%99%E4%B8%80%E4%B8%8B%23) `192.8K 🔥` `NEW`
1. [朱志鑫哭了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E5%93%AD%E4%BA%86%23) `192.4K 🔥` `NEW`
1. [黑狗咬人被主人卖掉吓得眼神呆滞](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%8B%97%E5%92%AC%E4%BA%BA%E8%A2%AB%E4%B8%BB%E4%BA%BA%E5%8D%96%E6%8E%89%E5%90%93%E5%BE%97%E7%9C%BC%E7%A5%9E%E5%91%86%E6%BB%9E%23) `191.8K 🔥` `NEW`
1. [邹市明2亿理财亏损始末](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E2%E4%BA%BF%E7%90%86%E8%B4%A2%E4%BA%8F%E6%8D%9F%E5%A7%8B%E6%9C%AB%23) `191.7K 🔥` `NEW`
1. [穆祉丞心率挑战直接挂脸](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%BF%83%E7%8E%87%E6%8C%91%E6%88%98%E7%9B%B4%E6%8E%A5%E6%8C%82%E8%84%B8%23) `191.3K 🔥` `NEW`
1. [单删不是很正常吗](https://s.weibo.com/weibo?q=%23%E5%8D%95%E5%88%A0%E4%B8%8D%E6%98%AF%E5%BE%88%E6%AD%A3%E5%B8%B8%E5%90%97%23) `190.9K 🔥` `NEW`
1. [金靖回应虞书欣](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E5%9B%9E%E5%BA%94%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `190.7K 🔥` `NEW`
1. [三伏天这么做反而伤身](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BC%8F%E5%A4%A9%E8%BF%99%E4%B9%88%E5%81%9A%E5%8F%8D%E8%80%8C%E4%BC%A4%E8%BA%AB%23) `190.4K 🔥` `NEW`
1. [傅首尔自曝做医美 (Fu Seoul revealed that he does medical beauty)](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E8%87%AA%E6%9B%9D%E5%81%9A%E5%8C%BB%E7%BE%8E%23) `190.0K 🔥` `NEW`
1. [一代人有一代人的漂亮饭](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E6%BC%82%E4%BA%AE%E9%A5%AD%23) `189.2K 🔥` `NEW`
1. [官俊臣运动会睡着了](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E8%BF%90%E5%8A%A8%E4%BC%9A%E7%9D%A1%E7%9D%80%E4%BA%86%23) `188.7K 🔥` `NEW`
1. [新一代理想L6售价24.98万元](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%80%E4%BB%A3%E7%90%86%E6%83%B3L6%E5%94%AE%E4%BB%B724.98%E4%B8%87%E5%85%83%23) `187.9K 🔥` `NEW`
1. [朱志鑫疑似小腿受伤出血了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E7%96%91%E4%BC%BC%E5%B0%8F%E8%85%BF%E5%8F%97%E4%BC%A4%E5%87%BA%E8%A1%80%E4%BA%86%23) `187.7K 🔥` `NEW`
1. [贝克汉姆看台掩面落泪](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E7%9C%8B%E5%8F%B0%E6%8E%A9%E9%9D%A2%E8%90%BD%E6%B3%AA%23) `175.8K 🔥` `NEW`
1. [恩利当面蛐蛐孟子义](https://s.weibo.com/weibo?q=%23%E6%81%A9%E5%88%A9%E5%BD%93%E9%9D%A2%E8%9B%90%E8%9B%90%E5%AD%9F%E5%AD%90%E4%B9%89%23) `173.3K 🔥` `NEW`
1. [试衣服的时候天塌了](https://s.weibo.com/weibo?q=%23%E8%AF%95%E8%A1%A3%E6%9C%8D%E7%9A%84%E6%97%B6%E5%80%99%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `172.6K 🔥` `NEW`
1. [蔡徐坤演唱会想看人数](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E6%BC%94%E5%94%B1%E4%BC%9A%E6%83%B3%E7%9C%8B%E4%BA%BA%E6%95%B0%23) `171.1K 🔥` `NEW`
1. [我已经吹不了25度的空调了](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B7%B2%E7%BB%8F%E5%90%B9%E4%B8%8D%E4%BA%8625%E5%BA%A6%E7%9A%84%E7%A9%BA%E8%B0%83%E4%BA%86%23) `167.1K 🔥` `NEW`
1. [25岁民警与持刀歹徒搏斗牺牲 (25-year-old policeman died fighting with knife-wielding gangster)](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E6%B0%91%E8%AD%A6%E4%B8%8E%E6%8C%81%E5%88%80%E6%AD%B9%E5%BE%92%E6%90%8F%E6%96%97%E7%89%BA%E7%89%B2%23) `163.1K 🔥` `NEW`
1. [冉莹颖侃侃而谈邹市明心如死灰](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E4%BE%83%E4%BE%83%E8%80%8C%E8%B0%88%E9%82%B9%E5%B8%82%E6%98%8E%E5%BF%83%E5%A6%82%E6%AD%BB%E7%81%B0%23) `159.7K 🔥` `NEW`
1. [马龙妻子儿子现场观赛](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E5%A6%BB%E5%AD%90%E5%84%BF%E5%AD%90%E7%8E%B0%E5%9C%BA%E8%A7%82%E8%B5%9B%23) `153.1K 🔥` `NEW`
1. [TTG夏季赛零封JDG](https://s.weibo.com/weibo?q=%23TTG%E5%A4%8F%E5%AD%A3%E8%B5%9B%E9%9B%B6%E5%B0%81JDG%23) `153.1K 🔥` `NEW`
1. [杨博文张桂源摔跤](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E5%BC%A0%E6%A1%82%E6%BA%90%E6%91%94%E8%B7%A4%23) `149.9K 🔥` `NEW`
1. [吕洞宾建模 杨洋](https://s.weibo.com/weibo?q=%23%E5%90%95%E6%B4%9E%E5%AE%BE%E5%BB%BA%E6%A8%A1%20%E6%9D%A8%E6%B4%8B%23) `146.7K 🔥` `NEW`
1. [小鹏MONAL03全球发布会](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONAL03%E5%85%A8%E7%90%83%E5%8F%91%E5%B8%83%E4%BC%9A%23) `137.3K 🔥` `NEW`
1. [艾米手机壳上是侯明昊家的小狗](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E6%89%8B%E6%9C%BA%E5%A3%B3%E4%B8%8A%E6%98%AF%E4%BE%AF%E6%98%8E%E6%98%8A%E5%AE%B6%E7%9A%84%E5%B0%8F%E7%8B%97%23) `135.3K 🔥` `NEW`
1. [A股画风又变了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%94%BB%E9%A3%8E%E5%8F%88%E5%8F%98%E4%BA%86%23) `135.1K 🔥` `NEW`
1. [李想说L6补齐三个短板](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%83%B3%E8%AF%B4L6%E8%A1%A5%E9%BD%90%E4%B8%89%E4%B8%AA%E7%9F%AD%E6%9D%BF%23) `134.9K 🔥` `NEW`

Updated at 2026-07-17 00:06:26

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
