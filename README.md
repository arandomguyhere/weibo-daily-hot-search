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

1. [今天二十四扫房子 (Clean the house today on the 24th)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E4%BA%8C%E5%8D%81%E5%9B%9B%E6%89%AB%E6%88%BF%E5%AD%90%23) `615.8K 🔥` `NEW`
1. [享界样过马年](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E7%95%8C%E6%A0%B7%E8%BF%87%E9%A9%AC%E5%B9%B4%23) `368.1K 🔥` `NEW`
1. [大孤山 大师](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A4%E5%B1%B1%20%E5%A4%A7%E5%B8%88%23) `324.4K 🔥` `NEW`
1. [看飞驰人生3接人生飞驰](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%E6%8E%A5%E4%BA%BA%E7%94%9F%E9%A3%9E%E9%A9%B0%23) `279.1K 🔥` `NEW`
1. [绝意 K甲](https://s.weibo.com/weibo?q=%23%E7%BB%9D%E6%84%8F%20K%E7%94%B2%23) `218.1K 🔥` `NEW`
1. [自曝出轨冬奥铜牌选手想挽回女友](https://s.weibo.com/weibo?q=%23%E8%87%AA%E6%9B%9D%E5%87%BA%E8%BD%A8%E5%86%AC%E5%A5%A5%E9%93%9C%E7%89%8C%E9%80%89%E6%89%8B%E6%83%B3%E6%8C%BD%E5%9B%9E%E5%A5%B3%E5%8F%8B%23) `217.5K 🔥` `NEW`
1. [爱泼斯坦羞辱性展示女孩视频曝光](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E7%BE%9E%E8%BE%B1%E6%80%A7%E5%B1%95%E7%A4%BA%E5%A5%B3%E5%AD%A9%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `214.7K 🔥` `NEW`
1. [余茵否认模仿白鹿](https://s.weibo.com/weibo?q=%23%E4%BD%99%E8%8C%B5%E5%90%A6%E8%AE%A4%E6%A8%A1%E4%BB%BF%E7%99%BD%E9%B9%BF%23) `209.8K 🔥` `NEW`
1. [微博之夜台下也这么精彩](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%E5%8F%B0%E4%B8%8B%E4%B9%9F%E8%BF%99%E4%B9%88%E7%B2%BE%E5%BD%A9%23) `201.1K 🔥` `NEW`
1. [王男的剑南春被王广嚯嚯了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%94%B7%E7%9A%84%E5%89%91%E5%8D%97%E6%98%A5%E8%A2%AB%E7%8E%8B%E5%B9%BF%E5%9A%AF%E5%9A%AF%E4%BA%86%23) `192.9K 🔥` `NEW`
1. [14万房子涨到180万等20年才拿回 (It took 20 years to get the house back from 140,000 to 1.8 million)](https://s.weibo.com/weibo?q=%2314%E4%B8%87%E6%88%BF%E5%AD%90%E6%B6%A8%E5%88%B0180%E4%B8%87%E7%AD%8920%E5%B9%B4%E6%89%8D%E6%8B%BF%E5%9B%9E%23) `190.1K 🔥` `NEW`
1. [网红沐言感染合胞病毒](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%B2%90%E8%A8%80%E6%84%9F%E6%9F%93%E5%90%88%E8%83%9E%E7%97%85%E6%AF%92%23) `182.9K 🔥` `NEW`
1. [花2800办VIP通道发现是原座](https://s.weibo.com/weibo?q=%23%E8%8A%B12800%E5%8A%9EVIP%E9%80%9A%E9%81%93%E5%8F%91%E7%8E%B0%E6%98%AF%E5%8E%9F%E5%BA%A7%23) `173.3K 🔥` `NEW`
1. [望台湾方面取消两岸航空不合理限制](https://s.weibo.com/weibo?q=%23%E6%9C%9B%E5%8F%B0%E6%B9%BE%E6%96%B9%E9%9D%A2%E5%8F%96%E6%B6%88%E4%B8%A4%E5%B2%B8%E8%88%AA%E7%A9%BA%E4%B8%8D%E5%90%88%E7%90%86%E9%99%90%E5%88%B6%23) `135.1K 🔥` `NEW`
1. [坐高铁买到了特等座](https://s.weibo.com/weibo?q=%23%E5%9D%90%E9%AB%98%E9%93%81%E4%B9%B0%E5%88%B0%E4%BA%86%E7%89%B9%E7%AD%89%E5%BA%A7%23) `134.0K 🔥` `NEW`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `115.5K 🔥` `NEW`
1. [赵今麦宋威龙情人节物料花絮](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E5%AE%8B%E5%A8%81%E9%BE%99%E6%83%85%E4%BA%BA%E8%8A%82%E7%89%A9%E6%96%99%E8%8A%B1%E7%B5%AE%23) `111.6K 🔥` `NEW`
1. [江湖夜雨十年灯定档视频](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B9%96%E5%A4%9C%E9%9B%A8%E5%8D%81%E5%B9%B4%E7%81%AF%E5%AE%9A%E6%A1%A3%E8%A7%86%E9%A2%91%23) `103.3K 🔥` `NEW`
1. [肖凯文谈和王楚钦一起生活的十年](https://s.weibo.com/weibo?q=%23%E8%82%96%E5%87%AF%E6%96%87%E8%B0%88%E5%92%8C%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%80%E8%B5%B7%E7%94%9F%E6%B4%BB%E7%9A%84%E5%8D%81%E5%B9%B4%23) `100.4K 🔥` `NEW`
1. [穆祉丞楼外玩这么大](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%A5%BC%E5%A4%96%E7%8E%A9%E8%BF%99%E4%B9%88%E5%A4%A7%23) `91.3K 🔥` `NEW`
1. [丹麦用户大量转用中国软件 (Danish users are switching to Chinese software in large numbers)](https://s.weibo.com/weibo?q=%23%E4%B8%B9%E9%BA%A6%E7%94%A8%E6%88%B7%E5%A4%A7%E9%87%8F%E8%BD%AC%E7%94%A8%E4%B8%AD%E5%9B%BD%E8%BD%AF%E4%BB%B6%23) `88.5K 🔥` `NEW`
1. [东北第一霸总给员工发40亿红包](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E7%AC%AC%E4%B8%80%E9%9C%B8%E6%80%BB%E7%BB%99%E5%91%98%E5%B7%A5%E5%8F%9140%E4%BA%BF%E7%BA%A2%E5%8C%85%23) `87.1K 🔥` `NEW`
1. [李昀锐的回旋镖飞了7年](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E7%9A%84%E5%9B%9E%E6%97%8B%E9%95%96%E9%A3%9E%E4%BA%867%E5%B9%B4%23) `87.0K 🔥` `NEW`
1. [猫 我记得刚刚给过你脸了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E6%88%91%E8%AE%B0%E5%BE%97%E5%88%9A%E5%88%9A%E7%BB%99%E8%BF%87%E4%BD%A0%E8%84%B8%E4%BA%86%23) `86.5K 🔥` `NEW`
1. [胡意旋演了个A市来的追星女](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%84%8F%E6%97%8B%E6%BC%94%E4%BA%86%E4%B8%AAA%E5%B8%82%E6%9D%A5%E7%9A%84%E8%BF%BD%E6%98%9F%E5%A5%B3%23) `86.1K 🔥` `NEW`
1. [双高胎 鹅鸭杀](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E9%AB%98%E8%83%8E%20%E9%B9%85%E9%B8%AD%E6%9D%80%23) `80.7K 🔥` `NEW`
1. [吴京跳刀马刀马](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E8%B7%B3%E5%88%80%E9%A9%AC%E5%88%80%E9%A9%AC%23) `302.0K 🔥` `+93%`
1. [终于有人吐槽语音评论了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E5%90%90%E6%A7%BD%E8%AF%AD%E9%9F%B3%E8%AF%84%E8%AE%BA%E4%BA%86%23) `299.1K 🔥` `+131%`
1. [沈腾回应让王安宇演自己](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%9B%9E%E5%BA%94%E8%AE%A9%E7%8E%8B%E5%AE%89%E5%AE%87%E6%BC%94%E8%87%AA%E5%B7%B1%23) `219.4K 🔥` `+48%`
1. [关晓彤全英文采访](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%85%A8%E8%8B%B1%E6%96%87%E9%87%87%E8%AE%BF%23) `204.9K 🔥` `+116%`
1. [演员郑恩宇去世 (Actor Jung Eun-woo passes away)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%83%91%E6%81%A9%E5%AE%87%E5%8E%BB%E4%B8%96%23) `188.1K 🔥` `+31%`
1. [韩国是一个巨大的县城](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%98%AF%E4%B8%80%E4%B8%AA%E5%B7%A8%E5%A4%A7%E7%9A%84%E5%8E%BF%E5%9F%8E%23) `186.3K 🔥` `+22%`
1. [公司刮奖以为中3万结果是30万 (The company scratched the prize and thought it won 30,000, but it turned out to be 300,000.)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E5%88%AE%E5%A5%96%E4%BB%A5%E4%B8%BA%E4%B8%AD3%E4%B8%87%E7%BB%93%E6%9E%9C%E6%98%AF30%E4%B8%87%23) `183.8K 🔥` `+25%`
1. [程潇七年后给偶练F班选手评了A](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E4%B8%83%E5%B9%B4%E5%90%8E%E7%BB%99%E5%81%B6%E7%BB%83F%E7%8F%AD%E9%80%89%E6%89%8B%E8%AF%84%E4%BA%86A%23) `180.8K 🔥` `+21%`
1. [女子点外卖点到僵尸店骑手被罚款](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%82%B9%E5%A4%96%E5%8D%96%E7%82%B9%E5%88%B0%E5%83%B5%E5%B0%B8%E5%BA%97%E9%AA%91%E6%89%8B%E8%A2%AB%E7%BD%9A%E6%AC%BE%23) `1.1M 🔥`
1. [2025年热搜爆了434次](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E7%83%AD%E6%90%9C%E7%88%86%E4%BA%86434%E6%AC%A1%23) `804.5K 🔥`
1. [全国过年统一姿势](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E8%BF%87%E5%B9%B4%E7%BB%9F%E4%B8%80%E5%A7%BF%E5%8A%BF%23) `206.4K 🔥`
1. [爱泼斯坦狱警用假尸体伪装现场](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E7%8B%B1%E8%AD%A6%E7%94%A8%E5%81%87%E5%B0%B8%E4%BD%93%E4%BC%AA%E8%A3%85%E7%8E%B0%E5%9C%BA%23) `197.1K 🔥`
1. [陈奕恒看贺峻霖视频](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E7%9C%8B%E8%B4%BA%E5%B3%BB%E9%9C%96%E8%A7%86%E9%A2%91%23) `192.9K 🔥`
1. [沈腾找了个最帅的演自己](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%89%BE%E4%BA%86%E4%B8%AA%E6%9C%80%E5%B8%85%E7%9A%84%E6%BC%94%E8%87%AA%E5%B7%B1%23) `166.0K 🔥`
1. [大孤山 (Dagushan)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A4%E5%B1%B1%23) `84.4K 🔥`
1. [国台办回应吴克群帮农民卖3万斤菜](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%E5%90%B4%E5%85%8B%E7%BE%A4%E5%B8%AE%E5%86%9C%E6%B0%91%E5%8D%963%E4%B8%87%E6%96%A4%E8%8F%9C%23) `275.9K 🔥` `-68%`
1. [就知道姚安娜舍不得这个刘海 (I know Anna Yao can’t bear to have these bangs)](https://s.weibo.com/weibo?q=%23%E5%B0%B1%E7%9F%A5%E9%81%93%E5%A7%9A%E5%AE%89%E5%A8%9C%E8%88%8D%E4%B8%8D%E5%BE%97%E8%BF%99%E4%B8%AA%E5%88%98%E6%B5%B7%23) `194.0K 🔥` `-60%`
1. [大侦探](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BE%A6%E6%8E%A2%23) `146.0K 🔥` `-48%`
1. [96岁爷爷为祛老年斑坚持三年医美](https://s.weibo.com/weibo?q=%2396%E5%B2%81%E7%88%B7%E7%88%B7%E4%B8%BA%E7%A5%9B%E8%80%81%E5%B9%B4%E6%96%91%E5%9D%9A%E6%8C%81%E4%B8%89%E5%B9%B4%E5%8C%BB%E7%BE%8E%23) `138.8K 🔥` `-41%`
1. [饲养员娜娜被责令公开道歉 (Breeder Nana ordered to publicly apologize)](https://s.weibo.com/weibo?q=%23%E9%A5%B2%E5%85%BB%E5%91%98%E5%A8%9C%E5%A8%9C%E8%A2%AB%E8%B4%A3%E4%BB%A4%E5%85%AC%E5%BC%80%E9%81%93%E6%AD%89%23) `131.4K 🔥` `-52%`
1. [微信9大更新 (WeChat 9 major updates)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A19%E5%A4%A7%E6%9B%B4%E6%96%B0%23) `109.8K 🔥` `-54%`
1. [被央妈看上的偶像剧](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%A4%AE%E5%A6%88%E7%9C%8B%E4%B8%8A%E7%9A%84%E5%81%B6%E5%83%8F%E5%89%A7%23) `86.9K 🔥` `-48%`
1. [孙海洋夫妇将名下公司转给孙卓](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%B5%B7%E6%B4%8B%E5%A4%AB%E5%A6%87%E5%B0%86%E5%90%8D%E4%B8%8B%E5%85%AC%E5%8F%B8%E8%BD%AC%E7%BB%99%E5%AD%99%E5%8D%93%23) `86.6K 🔥` `-49%`
1. [欧阳娜娜在北疆慢生活](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%9C%A8%E5%8C%97%E7%96%86%E6%85%A2%E7%94%9F%E6%B4%BB%23) `86.6K 🔥` `-47%`
1. [徐冬冬 孕相](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%86%AC%E5%86%AC%20%E5%AD%95%E7%9B%B8%23) `86.6K 🔥` `-40%`
1. [公公丈夫2天相继离世大姑子在ICU](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%85%AC%E4%B8%88%E5%A4%AB2%E5%A4%A9%E7%9B%B8%E7%BB%A7%E7%A6%BB%E4%B8%96%E5%A4%A7%E5%A7%91%E5%AD%90%E5%9C%A8ICU%23) `83.2K 🔥` `-41%`

Updated at 2026-02-11 15:42:28

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
