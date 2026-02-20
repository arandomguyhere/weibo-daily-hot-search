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

1. [儿子离家1年母亲在短视频发现踪迹 (One year after her son left home, his mother found traces of him in a short video)](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E7%A6%BB%E5%AE%B61%E5%B9%B4%E6%AF%8D%E4%BA%B2%E5%9C%A8%E7%9F%AD%E8%A7%86%E9%A2%91%E5%8F%91%E7%8E%B0%E8%B8%AA%E8%BF%B9%23) `44.5K 🔥` `NEW`
1. [年轻人装修的厨房有多方便](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E8%A3%85%E4%BF%AE%E7%9A%84%E5%8E%A8%E6%88%BF%E6%9C%89%E5%A4%9A%E6%96%B9%E4%BE%BF%23) `31.2K 🔥` `NEW`
1. [正月初五接财神](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E6%9C%88%E5%88%9D%E4%BA%94%E6%8E%A5%E8%B4%A2%E7%A5%9E%23) `27.9K 🔥` `NEW`
1. [总领馆曾提醒贝加尔湖遍布细微裂缝](https://s.weibo.com/weibo?q=%23%E6%80%BB%E9%A2%86%E9%A6%86%E6%9B%BE%E6%8F%90%E9%86%92%E8%B4%9D%E5%8A%A0%E5%B0%94%E6%B9%96%E9%81%8D%E5%B8%83%E7%BB%86%E5%BE%AE%E8%A3%82%E7%BC%9D%23) `26.9K 🔥` `NEW`
1. [谷爱凌进了第三个决赛](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%BF%9B%E4%BA%86%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%86%B3%E8%B5%9B%23) `90.1K 🔥` `+78%`
1. [将门独后领衔主演杨仕泽姚弛](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E6%9D%A8%E4%BB%95%E6%B3%BD%E5%A7%9A%E5%BC%9B%23) `80.6K 🔥` `+22%`
1. [将门毒后不是大ip是巨ip (After Jiangmen was poisoned, it was not a big IP but a giant IP.)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%E4%B8%8D%E6%98%AF%E5%A4%A7ip%E6%98%AF%E5%B7%A8ip%23) `273.6K 🔥`
1. [方大同去世一周年 (The first anniversary of Fang Datong’s death)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%A4%A7%E5%90%8C%E5%8E%BB%E4%B8%96%E4%B8%80%E5%91%A8%E5%B9%B4%23) `88.5K 🔥`
1. [全世界为什么只有中国人吃炒菜 (Why are only Chinese people eating stir-fried vegetables in the world?)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%AA%E6%9C%89%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%90%83%E7%82%92%E8%8F%9C%23) `55.9K 🔥`
1. [德容速滑女子1500米金牌](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%AE%B9%E9%80%9F%E6%BB%91%E5%A5%B3%E5%AD%901500%E7%B1%B3%E9%87%91%E7%89%8C%23) `33.2K 🔥`
1. [岁月有情时](https://s.weibo.com/weibo?q=%23%E5%B2%81%E6%9C%88%E6%9C%89%E6%83%85%E6%97%B6%23) `26.9K 🔥`
1. [吴佳尼自曝离婚原因](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BD%B3%E5%B0%BC%E8%87%AA%E6%9B%9D%E7%A6%BB%E5%A9%9A%E5%8E%9F%E5%9B%A0%23) `26.9K 🔥`
1. [DK与T1争夺败决席位 (DK and T1 compete for the losing spot)](https://s.weibo.com/weibo?q=%23DK%E4%B8%8ET1%E4%BA%89%E5%A4%BA%E8%B4%A5%E5%86%B3%E5%B8%AD%E4%BD%8D%23) `26.9K 🔥`
1. [迎财神 (Welcome the God of Wealth)](https://s.weibo.com/weibo?q=%23%E8%BF%8E%E8%B4%A2%E7%A5%9E%23) `428.2K 🔥` `-51%`
1. [中国非遗给你亿点点震撼 (China’s intangible cultural heritage will shock you a little bit)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%9D%9E%E9%81%97%E7%BB%99%E4%BD%A0%E4%BA%BF%E7%82%B9%E7%82%B9%E9%9C%87%E6%92%BC%23) `181.4K 🔥` `-48%`
1. [将门独后 天崩开局](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%20%E5%A4%A9%E5%B4%A9%E5%BC%80%E5%B1%80%23) `173.4K 🔥` `-60%`
1. [王心迪夺冠后李天马大喊回家生孩子 (After Wang Xindi won the championship, Li Tianma shouted to go home and have a baby)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BF%83%E8%BF%AA%E5%A4%BA%E5%86%A0%E5%90%8E%E6%9D%8E%E5%A4%A9%E9%A9%AC%E5%A4%A7%E5%96%8A%E5%9B%9E%E5%AE%B6%E7%94%9F%E5%AD%A9%E5%AD%90%23) `158.2K 🔥` `-48%`
1. [世界难度第一人齐广璞 (Qi Guangpu, the world’s most difficult person)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E9%9A%BE%E5%BA%A6%E7%AC%AC%E4%B8%80%E4%BA%BA%E9%BD%90%E5%B9%BF%E7%92%9E%23) `105.2K 🔥` `-46%`
1. [王心迪徐梦桃 金牌夫妻](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BF%83%E8%BF%AA%E5%BE%90%E6%A2%A6%E6%A1%83%20%E9%87%91%E7%89%8C%E5%A4%AB%E5%A6%BB%23) `101.8K 🔥` `-34%`
1. [杨幂无意中摔出来意外的感觉](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%97%A0%E6%84%8F%E4%B8%AD%E6%91%94%E5%87%BA%E6%9D%A5%E6%84%8F%E5%A4%96%E7%9A%84%E6%84%9F%E8%A7%89%23) `101.2K 🔥` `-48%`
1. [王心迪金牌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BF%83%E8%BF%AA%E9%87%91%E7%89%8C%23) `94.1K 🔥` `-48%`
1. [美最高法院裁定特朗普关税违法](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%9C%80%E9%AB%98%E6%B3%95%E9%99%A2%E8%A3%81%E5%AE%9A%E7%89%B9%E6%9C%97%E6%99%AE%E5%85%B3%E7%A8%8E%E8%BF%9D%E6%B3%95%23) `69.7K 🔥` `-29%`
1. [将门独后全阵容官宣](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%85%A8%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `66.1K 🔥` `-43%`
1. [火锅店春节4天赚33.9万全给员工](https://s.weibo.com/weibo?q=%23%E7%81%AB%E9%94%85%E5%BA%97%E6%98%A5%E8%8A%824%E5%A4%A9%E8%B5%9A33.9%E4%B8%87%E5%85%A8%E7%BB%99%E5%91%98%E5%B7%A5%23) `56.0K 🔥` `-35%`
1. [将门独后](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%23) `54.2K 🔥` `-28%`
1. [冬奥会速度滑冰女子1500米](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E4%BC%9A%E9%80%9F%E5%BA%A6%E6%BB%91%E5%86%B0%E5%A5%B3%E5%AD%901500%E7%B1%B3%23) `48.4K 🔥` `-28%`
1. [吴京 绿卡最严厉的父亲](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E7%BB%BF%E5%8D%A1%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E7%88%B6%E4%BA%B2%23) `45.1K 🔥` `-25%`
1. [你敢不敢用一年时间重启自己 (Do you dare to take a year to restart yourself?)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%95%A2%E4%B8%8D%E6%95%A2%E7%94%A8%E4%B8%80%E5%B9%B4%E6%97%B6%E9%97%B4%E9%87%8D%E5%90%AF%E8%87%AA%E5%B7%B1%23) `44.5K 🔥` `-33%`
1. [爸爸回应不许家人打扰儿子睡懒觉](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%9B%9E%E5%BA%94%E4%B8%8D%E8%AE%B8%E5%AE%B6%E4%BA%BA%E6%89%93%E6%89%B0%E5%84%BF%E5%AD%90%E7%9D%A1%E6%87%92%E8%A7%89%23) `44.5K 🔥` `-28%`
1. [王建华 大状师](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BB%BA%E5%8D%8E%20%E5%A4%A7%E7%8A%B6%E5%B8%88%23) `44.5K 🔥` `-31%`
1. [中国游客赴日人数暴跌日媒回应没影响](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E8%B5%B4%E6%97%A5%E4%BA%BA%E6%95%B0%E6%9A%B4%E8%B7%8C%E6%97%A5%E5%AA%92%E5%9B%9E%E5%BA%94%E6%B2%A1%E5%BD%B1%E5%93%8D%23) `40.6K 🔥` `-59%`
1. [张子墨长文](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E5%A2%A8%E9%95%BF%E6%96%87%23) `40.6K 🔥` `-38%`
1. [徐梦桃回应王心迪夺冠 (Xu Mengtao responded to Wang Xindi’s victory)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E5%9B%9E%E5%BA%94%E7%8E%8B%E5%BF%83%E8%BF%AA%E5%A4%BA%E5%86%A0%23) `38.8K 🔥` `-42%`
1. [江苏这个小品敢拍](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E8%BF%99%E4%B8%AA%E5%B0%8F%E5%93%81%E6%95%A2%E6%8B%8D%23) `37.6K 🔥` `-61%`
1. [目击者还原车辆坠贝加尔湖经过](https://s.weibo.com/weibo?q=%23%E7%9B%AE%E5%87%BB%E8%80%85%E8%BF%98%E5%8E%9F%E8%BD%A6%E8%BE%86%E5%9D%A0%E8%B4%9D%E5%8A%A0%E5%B0%94%E6%B9%96%E7%BB%8F%E8%BF%87%23) `34.2K 🔥` `-32%`
1. [新年最无语的烟花出现了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%B9%B4%E6%9C%80%E6%97%A0%E8%AF%AD%E7%9A%84%E7%83%9F%E8%8A%B1%E5%87%BA%E7%8E%B0%E4%BA%86%23) `31.2K 🔥` `-33%`
1. [徐梦桃说王心迪永远是洗袜子的那个](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E8%AF%B4%E7%8E%8B%E5%BF%83%E8%BF%AA%E6%B0%B8%E8%BF%9C%E6%98%AF%E6%B4%97%E8%A2%9C%E5%AD%90%E7%9A%84%E9%82%A3%E4%B8%AA%23) `31.1K 🔥` `-38%`
1. [郭宇欣主演短剧在电视播出](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E4%B8%BB%E6%BC%94%E7%9F%AD%E5%89%A7%E5%9C%A8%E7%94%B5%E8%A7%86%E6%92%AD%E5%87%BA%23) `31.1K 🔥` `-36%`
1. [方家翊整容后小区门禁人脸识别失败 (After Fang Jiayi had plastic surgery, facial recognition failed at the community access control)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AE%B6%E7%BF%8A%E6%95%B4%E5%AE%B9%E5%90%8E%E5%B0%8F%E5%8C%BA%E9%97%A8%E7%A6%81%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB%E5%A4%B1%E8%B4%A5%23) `30.0K 🔥` `-72%`
1. [女子发现网购大衣出现手写名字](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8F%91%E7%8E%B0%E7%BD%91%E8%B4%AD%E5%A4%A7%E8%A1%A3%E5%87%BA%E7%8E%B0%E6%89%8B%E5%86%99%E5%90%8D%E5%AD%97%23) `29.9K 🔥` `-41%`
1. [短剧上星 不匹配电视](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E4%B8%8A%E6%98%9F%20%E4%B8%8D%E5%8C%B9%E9%85%8D%E7%94%B5%E8%A7%86%23) `29.8K 🔥` `-34%`
1. [中国队4金3银5铜](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F4%E9%87%913%E9%93%B65%E9%93%9C%23) `29.7K 🔥` `-33%`
1. [惊蛰无声](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `29.3K 🔥` `-29%`
1. [苏翊鸣昨天刚和徐梦桃王心迪合影](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%98%A8%E5%A4%A9%E5%88%9A%E5%92%8C%E5%BE%90%E6%A2%A6%E6%A1%83%E7%8E%8B%E5%BF%83%E8%BF%AA%E5%90%88%E5%BD%B1%23) `29.2K 🔥` `-56%`
1. [唐宫男女主从赐婚到退婚只用了一集](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E7%94%B7%E5%A5%B3%E4%B8%BB%E4%BB%8E%E8%B5%90%E5%A9%9A%E5%88%B0%E9%80%80%E5%A9%9A%E5%8F%AA%E7%94%A8%E4%BA%86%E4%B8%80%E9%9B%86%23) `28.4K 🔥` `-43%`
1. [吴京争取拍镖人第二部](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E4%BA%89%E5%8F%96%E6%8B%8D%E9%95%96%E4%BA%BA%E7%AC%AC%E4%BA%8C%E9%83%A8%23) `27.7K 🔥` `-29%`
1. [广东地震 (Guangdong earthquake)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%9C%B0%E9%9C%87%23) `27.3K 🔥` `-23%`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `26.9K 🔥` `-45%`
1. [有涉论文代写作者3年内不得晋级](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%B6%89%E8%AE%BA%E6%96%87%E4%BB%A3%E5%86%99%E4%BD%9C%E8%80%853%E5%B9%B4%E5%86%85%E4%B8%8D%E5%BE%97%E6%99%8B%E7%BA%A7%23) `26.9K 🔥` `-25%`
1. [瑞幸 村里 (Luckin village)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%20%E6%9D%91%E9%87%8C%23) `26.8K 🔥` `-41%`

Updated at 2026-02-21 01:59:22

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
