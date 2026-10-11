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

1. [郑钦文vs安德列娃](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E5%AE%89%E5%BE%B7%E5%88%97%E5%A8%83%23) `2.1M 🔥` `NEW`
1. [华为被曝将推子品牌星芒](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E8%A2%AB%E6%9B%9D%E5%B0%86%E6%8E%A8%E5%AD%90%E5%93%81%E7%89%8C%E6%98%9F%E8%8A%92%23) `957.8K 🔥` `NEW`
1. [我国经济回升向好态势持续巩固](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%9B%9E%E5%8D%87%E5%90%91%E5%A5%BD%E6%80%81%E5%8A%BF%E6%8C%81%E7%BB%AD%E5%B7%A9%E5%9B%BA%23) `742.2K 🔥` `NEW`
1. [郑钦文决赛状态](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%86%B3%E8%B5%9B%E7%8A%B6%E6%80%81%23) `728.3K 🔥` `NEW`
1. [插队被拒投诉儿科医生的家长已道歉](https://s.weibo.com/weibo?q=%23%E6%8F%92%E9%98%9F%E8%A2%AB%E6%8B%92%E6%8A%95%E8%AF%89%E5%84%BF%E7%A7%91%E5%8C%BB%E7%94%9F%E7%9A%84%E5%AE%B6%E9%95%BF%E5%B7%B2%E9%81%93%E6%AD%89%23) `582.5K 🔥` `NEW`
1. [松岛辉空4比3林昀儒](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA4%E6%AF%943%E6%9E%97%E6%98%80%E5%84%92%23) `546.5K 🔥` `NEW`
1. [7个关于隐翅虫的说法别再信了](https://s.weibo.com/weibo?q=%237%E4%B8%AA%E5%85%B3%E4%BA%8E%E9%9A%90%E7%BF%85%E8%99%AB%E7%9A%84%E8%AF%B4%E6%B3%95%E5%88%AB%E5%86%8D%E4%BF%A1%E4%BA%86%23) `400.5K 🔥` `NEW`
1. [王曼昱夺冠后比出两个1](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%A4%BA%E5%86%A0%E5%90%8E%E6%AF%94%E5%87%BA%E4%B8%A4%E4%B8%AA1%23) `368.4K 🔥` `NEW`
1. [郑钦文化解三个盘点](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%8C%96%E8%A7%A3%E4%B8%89%E4%B8%AA%E7%9B%98%E7%82%B9%23) `326.5K 🔥` `NEW`
1. [2026美好奇妙夜节目单](https://s.weibo.com/weibo?q=%232026%E7%BE%8E%E5%A5%BD%E5%A5%87%E5%A6%99%E5%A4%9C%E8%8A%82%E7%9B%AE%E5%8D%95%23) `304.8K 🔥` `NEW`
1. [靳东为郑钦文决赛挑边](https://s.weibo.com/weibo?q=%23%E9%9D%B3%E4%B8%9C%E4%B8%BA%E9%83%91%E9%92%A6%E6%96%87%E5%86%B3%E8%B5%9B%E6%8C%91%E8%BE%B9%23) `303.9K 🔥` `NEW`
1. [杭州限狗令白天遛狗罚款](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%99%90%E7%8B%97%E4%BB%A4%E7%99%BD%E5%A4%A9%E9%81%9B%E7%8B%97%E7%BD%9A%E6%AC%BE%23) `298.5K 🔥` `NEW`
1. [网传缅北诈骗盯上泰百粉丝](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%BC%85%E5%8C%97%E8%AF%88%E9%AA%97%E7%9B%AF%E4%B8%8A%E6%B3%B0%E7%99%BE%E7%B2%89%E4%B8%9D%23) `296.5K 🔥` `NEW`
1. [身高2.2米巨人网红小玥去世](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E9%AB%982.2%E7%B1%B3%E5%B7%A8%E4%BA%BA%E7%BD%91%E7%BA%A2%E5%B0%8F%E7%8E%A5%E5%8E%BB%E4%B8%96%23) `292.4K 🔥` `NEW`
1. [撒贝宁龙凤胎长这么大了](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%E9%BE%99%E5%87%A4%E8%83%8E%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `291.0K 🔥` `NEW`
1. [突然不羡慕沐言一家了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E4%B8%8D%E7%BE%A1%E6%85%95%E6%B2%90%E8%A8%80%E4%B8%80%E5%AE%B6%E4%BA%86%23) `289.3K 🔥` `NEW`
1. [郭碧婷只在乎向佐和小孩有没有联系](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E5%8F%AA%E5%9C%A8%E4%B9%8E%E5%90%91%E4%BD%90%E5%92%8C%E5%B0%8F%E5%AD%A9%E6%9C%89%E6%B2%A1%E6%9C%89%E8%81%94%E7%B3%BB%23) `287.5K 🔥` `NEW`
1. [郑钦文1比0安德列娃](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%871%E6%AF%940%E5%AE%89%E5%BE%B7%E5%88%97%E5%A8%83%23) `249.0K 🔥` `NEW`
1. [郑钦文安德列娃决赛战术博弈](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%AE%89%E5%BE%B7%E5%88%97%E5%A8%83%E5%86%B3%E8%B5%9B%E6%88%98%E6%9C%AF%E5%8D%9A%E5%BC%88%23) `240.8K 🔥` `NEW`
1. [王安宇王楚然都以为胡图图姓陈](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%83%BD%E4%BB%A5%E4%B8%BA%E8%83%A1%E5%9B%BE%E5%9B%BE%E5%A7%93%E9%99%88%23) `239.2K 🔥` `NEW`
1. [上海小伙看完厕所后租下超小卧室](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%B0%8F%E4%BC%99%E7%9C%8B%E5%AE%8C%E5%8E%95%E6%89%80%E5%90%8E%E7%A7%9F%E4%B8%8B%E8%B6%85%E5%B0%8F%E5%8D%A7%E5%AE%A4%23) `238.0K 🔥` `NEW`
1. [倪妮 今天没洗头](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%20%E4%BB%8A%E5%A4%A9%E6%B2%A1%E6%B4%97%E5%A4%B4%23) `236.5K 🔥` `NEW`
1. [九寨沟偏光镜对比效果太惊艳](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E5%81%8F%E5%85%89%E9%95%9C%E5%AF%B9%E6%AF%94%E6%95%88%E6%9E%9C%E5%A4%AA%E6%83%8A%E8%89%B3%23) `221.6K 🔥` `NEW`
1. [蔡文静被已婚男演员担心过于独立](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E8%A2%AB%E5%B7%B2%E5%A9%9A%E7%94%B7%E6%BC%94%E5%91%98%E6%8B%85%E5%BF%83%E8%BF%87%E4%BA%8E%E7%8B%AC%E7%AB%8B%23) `217.3K 🔥` `NEW`
1. [欧文压哨三分](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%96%87%E5%8E%8B%E5%93%A8%E4%B8%89%E5%88%86%23) `206.4K 🔥` `NEW`
1. [客服把爱猫的阿贝贝寄给客户](https://s.weibo.com/weibo?q=%23%E5%AE%A2%E6%9C%8D%E6%8A%8A%E7%88%B1%E7%8C%AB%E7%9A%84%E9%98%BF%E8%B4%9D%E8%B4%9D%E5%AF%84%E7%BB%99%E5%AE%A2%E6%88%B7%23) `206.2K 🔥` `NEW`
1. [尼泊尔再次暴发严重山洪](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%86%8D%E6%AC%A1%E6%9A%B4%E5%8F%91%E4%B8%A5%E9%87%8D%E5%B1%B1%E6%B4%AA%23) `198.6K 🔥` `NEW`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `189.6K 🔥` `NEW`
1. [周杰伦中国人立场始终如一](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%AB%8B%E5%9C%BA%E5%A7%8B%E7%BB%88%E5%A6%82%E4%B8%80%23) `182.6K 🔥` `NEW`
1. [代露娃白月梵星后接到的角色都是客串](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E7%99%BD%E6%9C%88%E6%A2%B5%E6%98%9F%E5%90%8E%E6%8E%A5%E5%88%B0%E7%9A%84%E8%A7%92%E8%89%B2%E9%83%BD%E6%98%AF%E5%AE%A2%E4%B8%B2%23) `165.7K 🔥` `NEW`
1. [拉夏贝尔偷用素人照片](https://s.weibo.com/weibo?q=%23%E6%8B%89%E5%A4%8F%E8%B4%9D%E5%B0%94%E5%81%B7%E7%94%A8%E7%B4%A0%E4%BA%BA%E7%85%A7%E7%89%87%23) `165.6K 🔥` `NEW`
1. [宋雨琦广州演唱会嘉宾是关晓彤](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E5%B9%BF%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E5%98%89%E5%AE%BE%E6%98%AF%E5%85%B3%E6%99%93%E5%BD%A4%23) `165.4K 🔥` `NEW`
1. [郑钦文挽救三盘点拿下首盘](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%8C%BD%E6%95%91%E4%B8%89%E7%9B%98%E7%82%B9%E6%8B%BF%E4%B8%8B%E9%A6%96%E7%9B%98%23) `165.2K 🔥` `NEW`
1. [狗被柿子砸中怒咬主人](https://s.weibo.com/weibo?q=%23%E7%8B%97%E8%A2%AB%E6%9F%BF%E5%AD%90%E7%A0%B8%E4%B8%AD%E6%80%92%E5%92%AC%E4%B8%BB%E4%BA%BA%23) `164.9K 🔥` `NEW`
1. [谭松韵应该已经哇哇乱叫了](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%BA%94%E8%AF%A5%E5%B7%B2%E7%BB%8F%E5%93%87%E5%93%87%E4%B9%B1%E5%8F%AB%E4%BA%86%23) `164.5K 🔥` `NEW`
1. [老护士辞职后儿科投诉翻倍](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%8A%A4%E5%A3%AB%E8%BE%9E%E8%81%8C%E5%90%8E%E5%84%BF%E7%A7%91%E6%8A%95%E8%AF%89%E7%BF%BB%E5%80%8D%23) `164.2K 🔥` `NEW`
1. [谭松韵晚饭就吃一个蛋吗](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E6%99%9A%E9%A5%AD%E5%B0%B1%E5%90%83%E4%B8%80%E4%B8%AA%E8%9B%8B%E5%90%97%23) `164.0K 🔥` `NEW`
1. [何炅给刘宪华生日送两个花篮](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E7%BB%99%E5%88%98%E5%AE%AA%E5%8D%8E%E7%94%9F%E6%97%A5%E9%80%81%E4%B8%A4%E4%B8%AA%E8%8A%B1%E7%AF%AE%23) `163.9K 🔥` `NEW`
1. [郑钦文中网决赛收视率第一](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%B8%AD%E7%BD%91%E5%86%B3%E8%B5%9B%E6%94%B6%E8%A7%86%E7%8E%87%E7%AC%AC%E4%B8%80%23) `163.4K 🔥` `NEW`
1. [美人余 原配小三强强联手报复渣男](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BA%BA%E4%BD%99%20%E5%8E%9F%E9%85%8D%E5%B0%8F%E4%B8%89%E5%BC%BA%E5%BC%BA%E8%81%94%E6%89%8B%E6%8A%A5%E5%A4%8D%E6%B8%A3%E7%94%B7%23) `163.2K 🔥` `NEW`
1. [丁宁陈梦惊喜现身观战王曼昱决赛](https://s.weibo.com/weibo?q=%23%E4%B8%81%E5%AE%81%E9%99%88%E6%A2%A6%E6%83%8A%E5%96%9C%E7%8E%B0%E8%BA%AB%E8%A7%82%E6%88%98%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%86%B3%E8%B5%9B%23) `161.6K 🔥` `NEW`
1. [中网](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BD%91%23) `159.6K 🔥` `NEW`
1. [林昀儒vs松岛辉空](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%98%80%E5%84%92vs%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `151.0K 🔥` `NEW`
1. [王鹤棣停下让林允先进](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%81%9C%E4%B8%8B%E8%AE%A9%E6%9E%97%E5%85%81%E5%85%88%E8%BF%9B%23) `140.4K 🔥` `NEW`
1. [郑钦文破发安德列娃](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%A0%B4%E5%8F%91%E5%AE%89%E5%BE%B7%E5%88%97%E5%A8%83%23) `138.3K 🔥` `NEW`
1. [周杰伦被介绍为中国著名歌手](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%A2%AB%E4%BB%8B%E7%BB%8D%E4%B8%BA%E4%B8%AD%E5%9B%BD%E8%91%97%E5%90%8D%E6%AD%8C%E6%89%8B%23) `135.9K 🔥` `NEW`
1. [王曼昱重返女单世界第一](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E9%87%8D%E8%BF%94%E5%A5%B3%E5%8D%95%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23) `133.7K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `131.6K 🔥` `NEW`
1. [库克现身广州天环广场](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%85%8B%E7%8E%B0%E8%BA%AB%E5%B9%BF%E5%B7%9E%E5%A4%A9%E7%8E%AF%E5%B9%BF%E5%9C%BA%23) `131.3K 🔥` `NEW`
1. [社保](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%23) `299.8K 🔥`
1. [人民日报评刹车踏板风波](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%E9%A3%8E%E6%B3%A2%23) `163.4K 🔥` `-41%`

Updated at 2026-10-11 21:06:58

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
