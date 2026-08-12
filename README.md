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

1. [喜欢穿洞洞鞋的人天塌了 (People who like to wear Crocs are in trouble)](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E7%A9%BF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `383.0K 🔥` `NEW`
1. [贾冰否认私人饭局爆粗口](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E5%86%B0%E5%90%A6%E8%AE%A4%E7%A7%81%E4%BA%BA%E9%A5%AD%E5%B1%80%E7%88%86%E7%B2%97%E5%8F%A3%23) `361.8K 🔥` `NEW`
1. [虞书欣张昊玥事件时间线](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BC%A0%E6%98%8A%E7%8E%A5%E4%BA%8B%E4%BB%B6%E6%97%B6%E9%97%B4%E7%BA%BF%23) `353.1K 🔥` `NEW`
1. [张雅琪 中餐厅存在感](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E4%B8%AD%E9%A4%90%E5%8E%85%E5%AD%98%E5%9C%A8%E6%84%9F%23) `314.3K 🔥` `NEW`
1. [喻言帮沈月捡到了三万块钱的耳夹](https://s.weibo.com/weibo?q=%23%E5%96%BB%E8%A8%80%E5%B8%AE%E6%B2%88%E6%9C%88%E6%8D%A1%E5%88%B0%E4%BA%86%E4%B8%89%E4%B8%87%E5%9D%97%E9%92%B1%E7%9A%84%E8%80%B3%E5%A4%B9%23) `312.8K 🔥` `NEW`
1. [瑞幸联名洞洞鞋滞销](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E8%81%94%E5%90%8D%E6%B4%9E%E6%B4%9E%E9%9E%8B%E6%BB%9E%E9%94%80%23) `305.6K 🔥` `NEW`
1. [华为秋季发布会或定档9月23日](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E7%A7%8B%E5%AD%A3%E5%8F%91%E5%B8%83%E4%BC%9A%E6%88%96%E5%AE%9A%E6%A1%A39%E6%9C%8823%E6%97%A5%23) `287.5K 🔥` `NEW`
1. [全球首款机器人手机今日发布](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%A6%96%E6%AC%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%89%8B%E6%9C%BA%E4%BB%8A%E6%97%A5%E5%8F%91%E5%B8%83%23) `268.3K 🔥` `NEW`
1. [20岁的林徽因在北京真实样貌](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E7%9A%84%E6%9E%97%E5%BE%BD%E5%9B%A0%E5%9C%A8%E5%8C%97%E4%BA%AC%E7%9C%9F%E5%AE%9E%E6%A0%B7%E8%B2%8C%23) `220.5K 🔥` `NEW`
1. [沈腾吃瓜贾冰聚会](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%90%83%E7%93%9C%E8%B4%BE%E5%86%B0%E8%81%9A%E4%BC%9A%23) `220.2K 🔥` `NEW`
1. [TF四代五公有家长等候区 (TF four generations and five adults have a waiting area for parents)](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%E6%9C%89%E5%AE%B6%E9%95%BF%E7%AD%89%E5%80%99%E5%8C%BA%23) `202.1K 🔥` `NEW`
1. [武大靖 2030冬奥会](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E9%9D%96%202030%E5%86%AC%E5%A5%A5%E4%BC%9A%23) `187.3K 🔥` `NEW`
1. [曝李宁将签约姆巴佩](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E5%AE%81%E5%B0%86%E7%AD%BE%E7%BA%A6%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `150.8K 🔥` `NEW`
1. [BLG距S16只差一步](https://s.weibo.com/weibo?q=%23BLG%E8%B7%9DS16%E5%8F%AA%E5%B7%AE%E4%B8%80%E6%AD%A5%23) `145.2K 🔥` `NEW`
1. [曝十个勤天杭州站午场取消](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E6%9D%AD%E5%B7%9E%E7%AB%99%E5%8D%88%E5%9C%BA%E5%8F%96%E6%B6%88%23) `137.9K 🔥` `NEW`
1. [为什么方便面又好卖了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%96%B9%E4%BE%BF%E9%9D%A2%E5%8F%88%E5%A5%BD%E5%8D%96%E4%BA%86%23) `137.9K 🔥` `NEW`
1. [空调外机还能穿鞋](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%83%E5%A4%96%E6%9C%BA%E8%BF%98%E8%83%BD%E7%A9%BF%E9%9E%8B%23) `137.8K 🔥` `NEW`
1. [龙餐馆差评被批文化殖民心态](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E5%B7%AE%E8%AF%84%E8%A2%AB%E6%89%B9%E6%96%87%E5%8C%96%E6%AE%96%E6%B0%91%E5%BF%83%E6%80%81%23) `847.2K 🔥` `+24%`
1. [日全食 (total solar eclipse)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%85%A8%E9%A3%9F%23) `579.8K 🔥` `+130%`
1. [C罗宣布结婚 (Cristiano Ronaldo announces marriage)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%AE%A3%E5%B8%83%E7%BB%93%E5%A9%9A%23) `1.1M 🔥`
1. [原来姚安娜是艺名](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A7%9A%E5%AE%89%E5%A8%9C%E6%98%AF%E8%89%BA%E5%90%8D%23) `562.3K 🔥`
1. [网传龙餐馆原本是徐峥的饼](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E9%BE%99%E9%A4%90%E9%A6%86%E5%8E%9F%E6%9C%AC%E6%98%AF%E5%BE%90%E5%B3%A5%E7%9A%84%E9%A5%BC%23) `275.9K 🔥`
1. [商务部启动应急响应保障灾区物资供应 (Ministry of Commerce launches emergency response to ensure material supply in disaster areas)](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%8A%A1%E9%83%A8%E5%90%AF%E5%8A%A8%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94%E4%BF%9D%E9%9A%9C%E7%81%BE%E5%8C%BA%E7%89%A9%E8%B5%84%E4%BE%9B%E5%BA%94%23) `672.3K 🔥` `-28%`
1. [B级满配家轿海豹06上市9.99万起 (B-class fully equipped family sedan Seal 06 launched starting at 99,900)](https://s.weibo.com/weibo?q=%23B%E7%BA%A7%E6%BB%A1%E9%85%8D%E5%AE%B6%E8%BD%BF%E6%B5%B7%E8%B1%B906%E4%B8%8A%E5%B8%829.99%E4%B8%87%E8%B5%B7%23) `661.1K 🔥` `-24%`
1. [邵兵 退赛](https://s.weibo.com/weibo?q=%23%E9%82%B5%E5%85%B5%20%E9%80%80%E8%B5%9B%23) `650.7K 🔥` `-21%`
1. [武大靖出任中国短道速滑队主教练 (Wu Dajing appointed as head coach of Chinese short track speed skating team)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E9%9D%96%E5%87%BA%E4%BB%BB%E4%B8%AD%E5%9B%BD%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%E9%98%9F%E4%B8%BB%E6%95%99%E7%BB%83%23) `475.7K 🔥` `-55%`
1. [股民称中签宇树不敢发朋友圈](https://s.weibo.com/weibo?q=%23%E8%82%A1%E6%B0%91%E7%A7%B0%E4%B8%AD%E7%AD%BE%E5%AE%87%E6%A0%91%E4%B8%8D%E6%95%A2%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `430.3K 🔥` `-36%`
1. [小米SU7七月销量21044辆](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3SU7%E4%B8%83%E6%9C%88%E9%94%80%E9%87%8F21044%E8%BE%86%23) `365.5K 🔥` `-45%`
1. [时代峰峻在招聘了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9C%A8%E6%8B%9B%E8%81%98%E4%BA%86%23) `360.3K 🔥` `-45%`
1. [被刺19岁辅警摩托车噪音达110分贝](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%88%BA19%E5%B2%81%E8%BE%85%E8%AD%A6%E6%91%A9%E6%89%98%E8%BD%A6%E5%99%AA%E9%9F%B3%E8%BE%BE110%E5%88%86%E8%B4%9D%23) `357.4K 🔥` `-46%`
1. [黑尾酱疑似再婚](https://s.weibo.com/weibo?q=%23%E9%BB%91%E5%B0%BE%E9%85%B1%E7%96%91%E4%BC%BC%E5%86%8D%E5%A9%9A%23) `348.2K 🔥` `-45%`
1. [男子殴打女友致死被判误杀](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%AE%B4%E6%89%93%E5%A5%B3%E5%8F%8B%E8%87%B4%E6%AD%BB%E8%A2%AB%E5%88%A4%E8%AF%AF%E6%9D%80%23) `318.7K 🔥` `-47%`
1. [卫诗雅回应一个人抱着奖杯离场](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E8%AF%97%E9%9B%85%E5%9B%9E%E5%BA%94%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%8A%B1%E7%9D%80%E5%A5%96%E6%9D%AF%E7%A6%BB%E5%9C%BA%23) `282.6K 🔥` `-42%`
1. [华人加密币大亨在巴拉圭全裸坠亡](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BA%BA%E5%8A%A0%E5%AF%86%E5%B8%81%E5%A4%A7%E4%BA%A8%E5%9C%A8%E5%B7%B4%E6%8B%89%E5%9C%AD%E5%85%A8%E8%A3%B8%E5%9D%A0%E4%BA%A1%23) `263.1K 🔥` `-35%`
1. [iPhone20Pro爆料 (iPhone20Pro revealed)](https://s.weibo.com/weibo?q=%23iPhone20Pro%E7%88%86%E6%96%99%23) `256.8K 🔥` `-42%`
1. [高价洞洞鞋为什么卖不动了 (Why can’t high-priced Crocs be sold anymore?)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BB%B7%E6%B4%9E%E6%B4%9E%E9%9E%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `250.0K 🔥` `-63%`
1. [辛芷蕾又拿大奖了 (Xin Zhilei won the grand prize again)](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%8F%88%E6%8B%BF%E5%A4%A7%E5%A5%96%E4%BA%86%23) `240.9K 🔥` `-56%`
1. [再见朋友](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%A7%81%E6%9C%8B%E5%8F%8B%23) `230.5K 🔥` `-48%`
1. [发达国家的冰激凌的量居然也这么大](https://s.weibo.com/weibo?q=%23%E5%8F%91%E8%BE%BE%E5%9B%BD%E5%AE%B6%E7%9A%84%E5%86%B0%E6%BF%80%E5%87%8C%E7%9A%84%E9%87%8F%E5%B1%85%E7%84%B6%E4%B9%9F%E8%BF%99%E4%B9%88%E5%A4%A7%23) `222.3K 🔥` `-40%`
1. [蜜雪冰城星巴克](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E%E6%98%9F%E5%B7%B4%E5%85%8B%23) `220.6K 🔥` `-26%`
1. [河南暴雨](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%9A%B4%E9%9B%A8%23) `202.9K 🔥` `-70%`
1. [经常熬夜的人多吃3类食物](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E5%B8%B8%E7%86%AC%E5%A4%9C%E7%9A%84%E4%BA%BA%E5%A4%9A%E5%90%833%E7%B1%BB%E9%A3%9F%E7%89%A9%23) `202.1K 🔥` `-32%`
1. [维嘉吴昕仿妆把何炅吓到挂电话](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%98%89%E5%90%B4%E6%98%95%E4%BB%BF%E5%A6%86%E6%8A%8A%E4%BD%95%E7%82%85%E5%90%93%E5%88%B0%E6%8C%82%E7%94%B5%E8%AF%9D%23) `160.3K 🔥` `-55%`
1. [小猫没进来之前我以为能有多大呢](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E6%B2%A1%E8%BF%9B%E6%9D%A5%E4%B9%8B%E5%89%8D%E6%88%91%E4%BB%A5%E4%B8%BA%E8%83%BD%E6%9C%89%E5%A4%9A%E5%A4%A7%E5%91%A2%23) `154.9K 🔥` `-34%`
1. [男子被炸街吵醒刺死骑行辅警](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E7%82%B8%E8%A1%97%E5%90%B5%E9%86%92%E5%88%BA%E6%AD%BB%E9%AA%91%E8%A1%8C%E8%BE%85%E8%AD%A6%23) `154.6K 🔥` `-42%`
1. [抗癌网红江小鱼去世 (Anti-cancer internet celebrity Jiang Xiaoyu dies)](https://s.weibo.com/weibo?q=%23%E6%8A%97%E7%99%8C%E7%BD%91%E7%BA%A2%E6%B1%9F%E5%B0%8F%E9%B1%BC%E5%8E%BB%E4%B8%96%23) `146.5K 🔥` `-26%`
1. [Angelababy马尔代夫游客照](https://s.weibo.com/weibo?q=%23Angelababy%E9%A9%AC%E5%B0%94%E4%BB%A3%E5%A4%AB%E6%B8%B8%E5%AE%A2%E7%85%A7%23) `145.9K 🔥` `-78%`
1. [陈奕恒本名叫ChanJonathanYiheng (Chen Yiheng’s real name is ChanJonathanYiheng)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E6%9C%AC%E5%90%8D%E5%8F%ABChanJonathanYiheng%23) `145.1K 🔥` `-43%`
1. [李现王真儿李泽锋合照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E7%8E%8B%E7%9C%9F%E5%84%BF%E6%9D%8E%E6%B3%BD%E9%94%8B%E5%90%88%E7%85%A7%23) `145.1K 🔥` `-54%`
1. [朋友圈先私密几天再公开 (Keep your circle of friends private for a few days before making it public)](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%85%88%E7%A7%81%E5%AF%86%E5%87%A0%E5%A4%A9%E5%86%8D%E5%85%AC%E5%BC%80%23) `137.9K 🔥` `-47%`
1. [高钾晚餐可以让人睡得更香 (A high-potassium dinner can help people sleep more soundly)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%92%BE%E6%99%9A%E9%A4%90%E5%8F%AF%E4%BB%A5%E8%AE%A9%E4%BA%BA%E7%9D%A1%E5%BE%97%E6%9B%B4%E9%A6%99%23) `137.9K 🔥` `-72%`

Updated at 2026-08-12 16:53:20

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
