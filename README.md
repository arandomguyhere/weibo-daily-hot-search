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

1. [雷军为澎程车主开车门](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E4%B8%BA%E6%BE%8E%E7%A8%8B%E8%BD%A6%E4%B8%BB%E5%BC%80%E8%BD%A6%E9%97%A8%23) `796.2K 🔥` `NEW`
1. [跨国企业看好中国市场机遇](https://s.weibo.com/weibo?q=%23%E8%B7%A8%E5%9B%BD%E4%BC%81%E4%B8%9A%E7%9C%8B%E5%A5%BD%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%E6%9C%BA%E9%81%87%23) `663.6K 🔥` `NEW`
1. [全新一代华为MatePadAir正式开售](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E4%B8%80%E4%BB%A3%E5%8D%8E%E4%B8%BAMatePadAir%E6%AD%A3%E5%BC%8F%E5%BC%80%E5%94%AE%23) `661.4K 🔥` `NEW`
1. [郑佩佩自传里写的花少](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%BD%A9%E4%BD%A9%E8%87%AA%E4%BC%A0%E9%87%8C%E5%86%99%E7%9A%84%E8%8A%B1%E5%B0%91%23) `656.1K 🔥` `NEW`
1. [付航脱口秀1000张黄牛票无法入场](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%88%AA%E8%84%B1%E5%8F%A3%E7%A7%801000%E5%BC%A0%E9%BB%84%E7%89%9B%E7%A5%A8%E6%97%A0%E6%B3%95%E5%85%A5%E5%9C%BA%23) `647.4K 🔥` `NEW`
1. [男孩不爱喝牛奶在早餐店销赃](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E4%B8%8D%E7%88%B1%E5%96%9D%E7%89%9B%E5%A5%B6%E5%9C%A8%E6%97%A9%E9%A4%90%E5%BA%97%E9%94%80%E8%B5%83%23) `428.4K 🔥` `NEW`
1. [台湾空姐鹤岗3万买房半退休](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E7%A9%BA%E5%A7%90%E9%B9%A4%E5%B2%973%E4%B8%87%E4%B9%B0%E6%88%BF%E5%8D%8A%E9%80%80%E4%BC%91%23) `375.6K 🔥` `NEW`
1. [普京称不明白G7为什么还叫大国](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%A7%B0%E4%B8%8D%E6%98%8E%E7%99%BDG7%E4%B8%BA%E4%BB%80%E4%B9%88%E8%BF%98%E5%8F%AB%E5%A4%A7%E5%9B%BD%23) `346.3K 🔥` `NEW`
1. [中国男篮vs巴林男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E5%B7%B4%E6%9E%97%E7%94%B7%E7%AF%AE%23) `340.7K 🔥` `NEW`
1. [名校硕士因第一学历是专科遭大厂拒绝](https://s.weibo.com/weibo?q=%23%E5%90%8D%E6%A0%A1%E7%A1%95%E5%A3%AB%E5%9B%A0%E7%AC%AC%E4%B8%80%E5%AD%A6%E5%8E%86%E6%98%AF%E4%B8%93%E7%A7%91%E9%81%AD%E5%A4%A7%E5%8E%82%E6%8B%92%E7%BB%9D%23) `330.6K 🔥` `NEW`
1. [小酒窝说朵朵转学了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E8%AF%B4%E6%9C%B5%E6%9C%B5%E8%BD%AC%E5%AD%A6%E4%BA%86%23) `321.0K 🔥` `NEW`
1. [女童截肢司机说哪个大货车不超载](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%AB%A5%E6%88%AA%E8%82%A2%E5%8F%B8%E6%9C%BA%E8%AF%B4%E5%93%AA%E4%B8%AA%E5%A4%A7%E8%B4%A7%E8%BD%A6%E4%B8%8D%E8%B6%85%E8%BD%BD%23) `312.7K 🔥` `NEW`
1. [穿婚纱的陈瑶](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E5%A9%9A%E7%BA%B1%E7%9A%84%E9%99%88%E7%91%B6%23) `307.4K 🔥` `NEW`
1. [严浩翔大家很少知道的秘密](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%A4%A7%E5%AE%B6%E5%BE%88%E5%B0%91%E7%9F%A5%E9%81%93%E7%9A%84%E7%A7%98%E5%AF%86%23) `301.5K 🔥` `NEW`
1. [必须查清烧烤店两个月被查15次](https://s.weibo.com/weibo?q=%23%E5%BF%85%E9%A1%BB%E6%9F%A5%E6%B8%85%E7%83%A7%E7%83%A4%E5%BA%97%E4%B8%A4%E4%B8%AA%E6%9C%88%E8%A2%AB%E6%9F%A515%E6%AC%A1%23) `246.7K 🔥` `NEW`
1. [教资科二](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%B5%84%E7%A7%91%E4%BA%8C%23) `242.3K 🔥` `NEW`
1. [iPhoneDuo溢价至79999元](https://s.weibo.com/weibo?q=%23iPhoneDuo%E6%BA%A2%E4%BB%B7%E8%87%B379999%E5%85%83%23) `241.8K 🔥` `NEW`
1. [中介称8万包入职胖东来](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BB%8B%E7%A7%B08%E4%B8%87%E5%8C%85%E5%85%A5%E8%81%8C%E8%83%96%E4%B8%9C%E6%9D%A5%23) `235.5K 🔥` `NEW`
1. [代孕机构13万售卖一本女生卵](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E5%AD%95%E6%9C%BA%E6%9E%8413%E4%B8%87%E5%94%AE%E5%8D%96%E4%B8%80%E6%9C%AC%E5%A5%B3%E7%94%9F%E5%8D%B5%23) `232.8K 🔥` `NEW`
1. [华为展翼三折叠首批用户口碑](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%B1%95%E7%BF%BC%E4%B8%89%E6%8A%98%E5%8F%A0%E9%A6%96%E6%89%B9%E7%94%A8%E6%88%B7%E5%8F%A3%E7%A2%91%23) `224.0K 🔥` `NEW`
1. [国乒男单上次夺冠还是王楚钦新加坡站](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E4%B8%8A%E6%AC%A1%E5%A4%BA%E5%86%A0%E8%BF%98%E6%98%AF%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%96%B0%E5%8A%A0%E5%9D%A1%E7%AB%99%23) `221.7K 🔥` `NEW`
1. [张靓颖深夜电台寻人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9D%93%E9%A2%96%E6%B7%B1%E5%A4%9C%E7%94%B5%E5%8F%B0%E5%AF%BB%E4%BA%BA%23) `217.3K 🔥` `NEW`
1. [最尊重男扮女装的剧](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%B0%8A%E9%87%8D%E7%94%B7%E6%89%AE%E5%A5%B3%E8%A3%85%E7%9A%84%E5%89%A7%23) `214.6K 🔥` `NEW`
1. [邹市明冉莹颖的债快还清了](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E5%86%89%E8%8E%B9%E9%A2%96%E7%9A%84%E5%80%BA%E5%BF%AB%E8%BF%98%E6%B8%85%E4%BA%86%23) `186.5K 🔥` `NEW`
1. [张月浪姐四公直接离场的原因](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E6%B5%AA%E5%A7%90%E5%9B%9B%E5%85%AC%E7%9B%B4%E6%8E%A5%E7%A6%BB%E5%9C%BA%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `182.4K 🔥` `NEW`
1. [儿时生理性喜欢的事就是你的职业天赋](https://s.weibo.com/weibo?q=%23%E5%84%BF%E6%97%B6%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E7%9A%84%E4%BA%8B%E5%B0%B1%E6%98%AF%E4%BD%A0%E7%9A%84%E8%81%8C%E4%B8%9A%E5%A4%A9%E8%B5%8B%23) `179.3K 🔥` `NEW`
1. [时代少年团单飞热度](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%8D%95%E9%A3%9E%E7%83%AD%E5%BA%A6%23) `178.4K 🔥` `NEW`
1. [不建议谈本身就很好的人](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BB%BA%E8%AE%AE%E8%B0%88%E6%9C%AC%E8%BA%AB%E5%B0%B1%E5%BE%88%E5%A5%BD%E7%9A%84%E4%BA%BA%23) `176.6K 🔥` `NEW`
1. [许昕问苏新皓是不是乒乓球校队的](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E9%97%AE%E8%8B%8F%E6%96%B0%E7%9A%93%E6%98%AF%E4%B8%8D%E6%98%AF%E4%B9%92%E4%B9%93%E7%90%83%E6%A0%A1%E9%98%9F%E7%9A%84%23) `176.0K 🔥` `NEW`
1. [上海西岸被三国志战略版承包了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%A5%BF%E5%B2%B8%E8%A2%AB%E4%B8%89%E5%9B%BD%E5%BF%97%E6%88%98%E7%95%A5%E7%89%88%E6%89%BF%E5%8C%85%E4%BA%86%23) `173.5K 🔥` `NEW`
1. [陈妍希怀孕4个月还在拍戏](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%80%80%E5%AD%954%E4%B8%AA%E6%9C%88%E8%BF%98%E5%9C%A8%E6%8B%8D%E6%88%8F%23) `169.8K 🔥` `NEW`
1. [穆祉丞用尽了所有中老年表情包](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%94%A8%E5%B0%BD%E4%BA%86%E6%89%80%E6%9C%89%E4%B8%AD%E8%80%81%E5%B9%B4%E8%A1%A8%E6%83%85%E5%8C%85%23) `166.8K 🔥` `NEW`
1. [小鹿备孕的尽头是旅行](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%BF%E5%A4%87%E5%AD%95%E7%9A%84%E5%B0%BD%E5%A4%B4%E6%98%AF%E6%97%85%E8%A1%8C%23) `165.5K 🔥` `NEW`
1. [台湾女子遭男友杀害弃尸阳明山](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%A5%B3%E5%AD%90%E9%81%AD%E7%94%B7%E5%8F%8B%E6%9D%80%E5%AE%B3%E5%BC%83%E5%B0%B8%E9%98%B3%E6%98%8E%E5%B1%B1%23) `162.8K 🔥` `NEW`
1. [HLE暴打T1](https://s.weibo.com/weibo?q=%23HLE%E6%9A%B4%E6%89%93T1%23) `158.6K 🔥` `NEW`
1. [张凌赫卢昱晓同框对戏](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8D%A2%E6%98%B1%E6%99%93%E5%90%8C%E6%A1%86%E5%AF%B9%E6%88%8F%23) `155.7K 🔥` `NEW`
1. [Angelababy原图王者](https://s.weibo.com/weibo?q=%23Angelababy%E5%8E%9F%E5%9B%BE%E7%8E%8B%E8%80%85%23) `153.6K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `145.7K 🔥` `NEW`
1. [井柏然墨镜自拍](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%A2%A8%E9%95%9C%E8%87%AA%E6%8B%8D%23) `143.6K 🔥` `NEW`
1. [T1绝境翻盘HLE](https://s.weibo.com/weibo?q=%23T1%E7%BB%9D%E5%A2%83%E7%BF%BB%E7%9B%98HLE%23) `140.5K 🔥` `NEW`
1. [iPhoneDuo显示屏成本曝光](https://s.weibo.com/weibo?q=%23iPhoneDuo%E6%98%BE%E7%A4%BA%E5%B1%8F%E6%88%90%E6%9C%AC%E6%9B%9D%E5%85%89%23) `138.0K 🔥` `NEW`
1. [留韩博士AI合成淫秽视频获刑](https://s.weibo.com/weibo?q=%23%E7%95%99%E9%9F%A9%E5%8D%9A%E5%A3%ABAI%E5%90%88%E6%88%90%E6%B7%AB%E7%A7%BD%E8%A7%86%E9%A2%91%E8%8E%B7%E5%88%91%23) `132.9K 🔥` `NEW`
1. [张本智和回应4比1周启豪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E5%9B%9E%E5%BA%944%E6%AF%941%E5%91%A8%E5%90%AF%E8%B1%AA%23) `131.4K 🔥` `NEW`
1. [小鹿决定做试管婴儿](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%BF%E5%86%B3%E5%AE%9A%E5%81%9A%E8%AF%95%E7%AE%A1%E5%A9%B4%E5%84%BF%23) `131.3K 🔥` `NEW`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `1.1M 🔥` `+469%`
1. [郭文韬当爸](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%96%87%E9%9F%AC%E5%BD%93%E7%88%B8%23) `339.1K 🔥` `+61%`
1. [LadyGaga疑似代孕](https://s.weibo.com/weibo?q=%23LadyGaga%E7%96%91%E4%BC%BC%E4%BB%A3%E5%AD%95%23) `319.7K 🔥` `+53%`
1. [日本博主在排水沟洗头后高烧尿血](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%8D%9A%E4%B8%BB%E5%9C%A8%E6%8E%92%E6%B0%B4%E6%B2%9F%E6%B4%97%E5%A4%B4%E5%90%8E%E9%AB%98%E7%83%A7%E5%B0%BF%E8%A1%80%23) `185.6K 🔥` `+51%`
1. [菲尔兹奖得主称AI与数学正严重错位](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%B0%94%E5%85%B9%E5%A5%96%E5%BE%97%E4%B8%BB%E7%A7%B0AI%E4%B8%8E%E6%95%B0%E5%AD%A6%E6%AD%A3%E4%B8%A5%E9%87%8D%E9%94%99%E4%BD%8D%23) `250.0K 🔥`
1. [支付宝 假APP](https://s.weibo.com/weibo?q=%23%E6%94%AF%E4%BB%98%E5%AE%9D%20%E5%81%87APP%23) `655.7K 🔥` `-79%`
1. [文韬全程陪伴佳佳生产vlog](https://s.weibo.com/weibo?q=%23%E6%96%87%E9%9F%AC%E5%85%A8%E7%A8%8B%E9%99%AA%E4%BC%B4%E4%BD%B3%E4%BD%B3%E7%94%9F%E4%BA%A7vlog%23) `159.2K 🔥` `-24%`

Updated at 2026-09-12 16:51:57

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
