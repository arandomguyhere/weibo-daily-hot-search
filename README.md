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

1. [孙颖莎vs王曼昱](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E7%8E%8B%E6%9B%BC%E6%98%B1%23) `13.0M 🔥` `NEW`
1. [王曼昱冠军](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%86%A0%E5%86%9B%23) `7.1M 🔥` `NEW`
1. [吴艳妮铜牌](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE%E9%93%9C%E7%89%8C%23) `2.2M 🔥` `NEW`
1. [中国队昂扬向上的精神太动人](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E6%98%82%E6%89%AC%E5%90%91%E4%B8%8A%E7%9A%84%E7%B2%BE%E7%A5%9E%E5%A4%AA%E5%8A%A8%E4%BA%BA%23) `1.7M 🔥` `NEW`
1. [严子怡破亚运会纪录](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%AD%90%E6%80%A1%E7%A0%B4%E4%BA%9A%E8%BF%90%E4%BC%9A%E7%BA%AA%E5%BD%95%23) `1.3M 🔥` `NEW`
1. [孙颖莎亚军](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BA%9A%E5%86%9B%23) `1.2M 🔥` `NEW`
1. [陈圆将110米栏金牌](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%9C%86%E5%B0%86110%E7%B1%B3%E6%A0%8F%E9%87%91%E7%89%8C%23) `711.6K 🔥` `NEW`
1. [金鹰奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%23) `669.2K 🔥` `NEW`
1. [樊振东vs格拉尔多](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9Cvs%E6%A0%BC%E6%8B%89%E5%B0%94%E5%A4%9A%23) `557.1K 🔥` `NEW`
1. [合肥地震](https://s.weibo.com/weibo?q=%23%E5%90%88%E8%82%A5%E5%9C%B0%E9%9C%87%23) `532.6K 🔥` `NEW`
1. [爱奇艺广告 请勿眨眼](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E5%B9%BF%E5%91%8A%20%E8%AF%B7%E5%8B%BF%E7%9C%A8%E7%9C%BC%23) `519.6K 🔥` `NEW`
1. [仅退款的风终于吹到了影视界](https://s.weibo.com/weibo?q=%23%E4%BB%85%E9%80%80%E6%AC%BE%E7%9A%84%E9%A3%8E%E7%BB%88%E4%BA%8E%E5%90%B9%E5%88%B0%E4%BA%86%E5%BD%B1%E8%A7%86%E7%95%8C%23) `513.0K 🔥` `NEW`
1. [陈妤颉说200米摘银是教训](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%A4%E9%A2%89%E8%AF%B4200%E7%B1%B3%E6%91%98%E9%93%B6%E6%98%AF%E6%95%99%E8%AE%AD%23) `511.1K 🔥` `NEW`
1. [黄友政林诗栋金牌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%8F%8B%E6%94%BF%E6%9E%97%E8%AF%97%E6%A0%8B%E9%87%91%E7%89%8C%23) `506.2K 🔥` `NEW`
1. [樊振东票房破361万](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%A5%A8%E6%88%BF%E7%A0%B4361%E4%B8%87%23) `488.2K 🔥` `NEW`
1. [严子怡亚运金牌](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%AD%90%E6%80%A1%E4%BA%9A%E8%BF%90%E9%87%91%E7%89%8C%23) `480.4K 🔥` `NEW`
1. [张家齐妈妈聊天记录](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `457.4K 🔥` `NEW`
1. [陈妤颉200米摘银](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%A4%E9%A2%89200%E7%B1%B3%E6%91%98%E9%93%B6%23) `420.6K 🔥` `NEW`
1. [小米18Pro防窥屏用户认可](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E9%98%B2%E7%AA%A5%E5%B1%8F%E7%94%A8%E6%88%B7%E8%AE%A4%E5%8F%AF%23) `420.4K 🔥` `NEW`
1. [严子怡太强了](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%AD%90%E6%80%A1%E5%A4%AA%E5%BC%BA%E4%BA%86%23) `418.1K 🔥` `NEW`
1. [兰香如故 二爷](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%20%E4%BA%8C%E7%88%B7%23) `417.9K 🔥` `NEW`
1. [张家齐妈妈让她用工资给自己买生日礼物](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%AE%A9%E5%A5%B9%E7%94%A8%E5%B7%A5%E8%B5%84%E7%BB%99%E8%87%AA%E5%B7%B1%E4%B9%B0%E7%94%9F%E6%97%A5%E7%A4%BC%E7%89%A9%23) `416.3K 🔥` `NEW`
1. [罗永浩留言俞敏洪问退款吗](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E7%95%99%E8%A8%80%E4%BF%9E%E6%95%8F%E6%B4%AA%E9%97%AE%E9%80%80%E6%AC%BE%E5%90%97%23) `414.9K 🔥` `NEW`
1. [林诗栋第2金](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E7%AC%AC2%E9%87%91%23) `414.2K 🔥` `NEW`
1. [樊振东3比0格拉尔多](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C3%E6%AF%940%E6%A0%BC%E6%8B%89%E5%B0%94%E5%A4%9A%23) `413.0K 🔥` `NEW`
1. [张继科在模仿什么](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E5%9C%A8%E6%A8%A1%E4%BB%BF%E4%BB%80%E4%B9%88%23) `408.9K 🔥` `NEW`
1. [刘雯被粉丝叮嘱少上网多务工](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E8%A2%AB%E7%B2%89%E4%B8%9D%E5%8F%AE%E5%98%B1%E5%B0%91%E4%B8%8A%E7%BD%91%E5%A4%9A%E5%8A%A1%E5%B7%A5%23) `397.2K 🔥` `NEW`
1. [难怪黄灿灿妈妈厌烦张家齐妈妈行为](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E9%BB%84%E7%81%BF%E7%81%BF%E5%A6%88%E5%A6%88%E5%8E%8C%E7%83%A6%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%A1%8C%E4%B8%BA%23) `364.2K 🔥` `NEW`
1. [张家齐让妈妈住酒店](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%AE%A9%E5%A6%88%E5%A6%88%E4%BD%8F%E9%85%92%E5%BA%97%23) `352.3K 🔥` `NEW`
1. [淡淡得了原位宫颈癌](https://s.weibo.com/weibo?q=%23%E6%B7%A1%E6%B7%A1%E5%BE%97%E4%BA%86%E5%8E%9F%E4%BD%8D%E5%AE%AB%E9%A2%88%E7%99%8C%23) `350.4K 🔥` `NEW`
1. [觉得压力大的可以看28年劳动节](https://s.weibo.com/weibo?q=%23%E8%A7%89%E5%BE%97%E5%8E%8B%E5%8A%9B%E5%A4%A7%E7%9A%84%E5%8F%AF%E4%BB%A5%E7%9C%8B28%E5%B9%B4%E5%8A%B3%E5%8A%A8%E8%8A%82%23) `350.1K 🔥` `NEW`
1. [吴艳妮夺铜牌后哭了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE%E5%A4%BA%E9%93%9C%E7%89%8C%E5%90%8E%E5%93%AD%E4%BA%86%23) `323.1K 🔥` `NEW`
1. [难怪张家齐觉得她妈妈不爱她](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%A7%89%E5%BE%97%E5%A5%B9%E5%A6%88%E5%A6%88%E4%B8%8D%E7%88%B1%E5%A5%B9%23) `292.6K 🔥` `NEW`
1. [张家齐看到妈妈哭的反应](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%9C%8B%E5%88%B0%E5%A6%88%E5%A6%88%E5%93%AD%E7%9A%84%E5%8F%8D%E5%BA%94%23) `280.1K 🔥` `NEW`
1. [兰香如故林二爷下线](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E6%9E%97%E4%BA%8C%E7%88%B7%E4%B8%8B%E7%BA%BF%23) `265.2K 🔥` `NEW`
1. [国足vs新西兰](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3vs%E6%96%B0%E8%A5%BF%E5%85%B0%23) `264.8K 🔥` `NEW`
1. [早春晴朗怎么好端端的能闹成这样](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E6%80%8E%E4%B9%88%E5%A5%BD%E7%AB%AF%E7%AB%AF%E7%9A%84%E8%83%BD%E9%97%B9%E6%88%90%E8%BF%99%E6%A0%B7%23) `240.0K 🔥` `NEW`
1. [吴艳妮摘铜拉林雨薇共披国旗庆祝](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE%E6%91%98%E9%93%9C%E6%8B%89%E6%9E%97%E9%9B%A8%E8%96%87%E5%85%B1%E6%8A%AB%E5%9B%BD%E6%97%97%E5%BA%86%E7%A5%9D%23) `239.1K 🔥` `NEW`
1. [边伯贤林俊杰合唱交换余生](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E4%BC%AF%E8%B4%A4%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%90%88%E5%94%B1%E4%BA%A4%E6%8D%A2%E4%BD%99%E7%94%9F%23) `230.8K 🔥` `NEW`
1. [杨健谈陈圆将110米栏金牌](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%81%A5%E8%B0%88%E9%99%88%E5%9C%86%E5%B0%86110%E7%B1%B3%E6%A0%8F%E9%87%91%E7%89%8C%23) `227.5K 🔥` `NEW`
1. [工作人员将液体面料喷向模特](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%B0%86%E6%B6%B2%E4%BD%93%E9%9D%A2%E6%96%99%E5%96%B7%E5%90%91%E6%A8%A1%E7%89%B9%23) `226.8K 🔥` `NEW`
1. [国足半场0比2新西兰](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E5%8D%8A%E5%9C%BA0%E6%AF%942%E6%96%B0%E8%A5%BF%E5%85%B0%23) `217.7K 🔥` `NEW`
1. [谭松韵流量花争议](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E6%B5%81%E9%87%8F%E8%8A%B1%E4%BA%89%E8%AE%AE%23) `217.1K 🔥` `NEW`
1. [王曼昱亚运会第5金](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E4%BA%9A%E8%BF%90%E4%BC%9A%E7%AC%AC5%E9%87%91%23) `214.8K 🔥` `NEW`
1. [张本智和回应不敌林诗栋黄友政](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8C%E6%9E%97%E8%AF%97%E6%A0%8B%E9%BB%84%E5%8F%8B%E6%94%BF%23) `211.3K 🔥` `NEW`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `210.8K 🔥` `NEW`
1. [陈妤颉称错失金牌上了宝贵的一课](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%A4%E9%A2%89%E7%A7%B0%E9%94%99%E5%A4%B1%E9%87%91%E7%89%8C%E4%B8%8A%E4%BA%86%E5%AE%9D%E8%B4%B5%E7%9A%84%E4%B8%80%E8%AF%BE%23) `204.5K 🔥` `NEW`
1. [辣条被做成衣服卖十万](https://s.weibo.com/weibo?q=%23%E8%BE%A3%E6%9D%A1%E8%A2%AB%E5%81%9A%E6%88%90%E8%A1%A3%E6%9C%8D%E5%8D%96%E5%8D%81%E4%B8%87%23) `186.9K 🔥` `NEW`
1. [标枪决赛](https://s.weibo.com/weibo?q=%23%E6%A0%87%E6%9E%AA%E5%86%B3%E8%B5%9B%23) `179.1K 🔥` `NEW`
1. [拾荒21年男子领到42万养老金](https://s.weibo.com/weibo?q=%23%E6%8B%BE%E8%8D%9221%E5%B9%B4%E7%94%B7%E5%AD%90%E9%A2%86%E5%88%B042%E4%B8%87%E5%85%BB%E8%80%81%E9%87%91%23) `166.1K 🔥` `NEW`

Updated at 2026-09-27 21:15:04

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
