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

1. [金鹰奖获奖名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `5.9M 🔥` `NEW`
1. [宋佳金鹰视后](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BD%B3%E9%87%91%E9%B9%B0%E8%A7%86%E5%90%8E%23) `2.9M 🔥` `NEW`
1. [遵义三日](https://s.weibo.com/weibo?q=%23%E9%81%B5%E4%B9%89%E4%B8%89%E6%97%A5%23) `1.6M 🔥` `NEW`
1. [十一反向游热门小镇](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%80%E5%8F%8D%E5%90%91%E6%B8%B8%E7%83%AD%E9%97%A8%E5%B0%8F%E9%95%87%23) `1.5M 🔥` `NEW`
1. [购房贴息 150万](https://s.weibo.com/weibo?q=%23%E8%B4%AD%E6%88%BF%E8%B4%B4%E6%81%AF%20150%E4%B8%87%23) `1.5M 🔥` `NEW`
1. [金鹰奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%23) `970.4K 🔥` `NEW`
1. [家有儿女小雪刘星合体](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%E5%B0%8F%E9%9B%AA%E5%88%98%E6%98%9F%E5%90%88%E4%BD%93%23) `963.3K 🔥` `NEW`
1. [NBA城市挑战赛宜宾站超燃收官](https://s.weibo.com/weibo?q=%23NBA%E5%9F%8E%E5%B8%82%E6%8C%91%E6%88%98%E8%B5%9B%E5%AE%9C%E5%AE%BE%E7%AB%99%E8%B6%85%E7%87%83%E6%94%B6%E5%AE%98%23) `958.0K 🔥` `NEW`
1. [Dior大秀](https://s.weibo.com/weibo?q=%23Dior%E5%A4%A7%E7%A7%80%23) `832.2K 🔥` `NEW`
1. [陈妤颉极限反超](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%A4%E9%A2%89%E6%9E%81%E9%99%90%E5%8F%8D%E8%B6%85%23) `677.3K 🔥` `NEW`
1. [4x100米混合接力中国队夺金](https://s.weibo.com/weibo?q=%234x100%E7%B1%B3%E6%B7%B7%E5%90%88%E6%8E%A5%E5%8A%9B%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%A4%BA%E9%87%91%23) `483.7K 🔥` `NEW`
1. [泰国洪灾后大量蛇和鳄鱼出没](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%B4%AA%E7%81%BE%E5%90%8E%E5%A4%A7%E9%87%8F%E8%9B%87%E5%92%8C%E9%B3%84%E9%B1%BC%E5%87%BA%E6%B2%A1%23) `420.4K 🔥` `NEW`
1. [赵丽颖身体到底怎么了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%BA%AB%E4%BD%93%E5%88%B0%E5%BA%95%E6%80%8E%E4%B9%88%E4%BA%86%23) `419.9K 🔥` `NEW`
1. [于和伟金鹰视帝](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E5%92%8C%E4%BC%9F%E9%87%91%E9%B9%B0%E8%A7%86%E5%B8%9D%23) `419.0K 🔥` `NEW`
1. [吴星颖孙柏涵官宣](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%98%9F%E9%A2%96%E5%AD%99%E6%9F%8F%E6%B6%B5%E5%AE%98%E5%AE%A3%23) `418.1K 🔥` `NEW`
1. [金智秀 Dior公主](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%20Dior%E5%85%AC%E4%B8%BB%23) `417.6K 🔥` `NEW`
1. [网传大学生替缺课老师讲课一小时](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%9B%BF%E7%BC%BA%E8%AF%BE%E8%80%81%E5%B8%88%E8%AE%B2%E8%AF%BE%E4%B8%80%E5%B0%8F%E6%97%B6%23) `417.0K 🔥` `NEW`
1. [直击Dior秀场](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E5%87%BBDior%E7%A7%80%E5%9C%BA%23) `416.8K 🔥` `NEW`
1. [孙怡平遥影后](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%B9%B3%E9%81%A5%E5%BD%B1%E5%90%8E%23) `416.6K 🔥` `NEW`
1. [蒋欣 可惜](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%20%E5%8F%AF%E6%83%9C%23) `416.2K 🔥` `NEW`
1. [华为Mate90全系配置曝光](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMate90%E5%85%A8%E7%B3%BB%E9%85%8D%E7%BD%AE%E6%9B%9D%E5%85%89%23) `416.2K 🔥` `NEW`
1. [陈妤颉真的好有梗](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%A4%E9%A2%89%E7%9C%9F%E7%9A%84%E5%A5%BD%E6%9C%89%E6%A2%97%23) `415.8K 🔥` `NEW`
1. [刘学义不认识杨迪何炅](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E4%B8%8D%E8%AE%A4%E8%AF%86%E6%9D%A8%E8%BF%AA%E4%BD%95%E7%82%85%23) `415.5K 🔥` `NEW`
1. [迪丽热巴 明艳美人](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E6%98%8E%E8%89%B3%E7%BE%8E%E4%BA%BA%23) `415.2K 🔥` `NEW`
1. [王鹤棣 哥们的哥们也很好](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%20%E5%93%A5%E4%BB%AC%E7%9A%84%E5%93%A5%E4%BB%AC%E4%B9%9F%E5%BE%88%E5%A5%BD%23) `414.9K 🔥` `NEW`
1. [KPL16支战队齐聚iQOO发布会](https://s.weibo.com/weibo?q=%23KPL16%E6%94%AF%E6%88%98%E9%98%9F%E9%BD%90%E8%81%9AiQOO%E5%8F%91%E5%B8%83%E4%BC%9A%23) `414.7K 🔥` `NEW`
1. [梦泪在iQOO梦回韩信](https://s.weibo.com/weibo?q=%23%E6%A2%A6%E6%B3%AA%E5%9C%A8iQOO%E6%A2%A6%E5%9B%9E%E9%9F%A9%E4%BF%A1%23) `414.4K 🔥` `NEW`
1. [破坏夫妻关系最大的杀手](https://s.weibo.com/weibo?q=%23%E7%A0%B4%E5%9D%8F%E5%A4%AB%E5%A6%BB%E5%85%B3%E7%B3%BB%E6%9C%80%E5%A4%A7%E7%9A%84%E6%9D%80%E6%89%8B%23) `414.2K 🔥` `NEW`
1. [心动9 脚底板](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A89%20%E8%84%9A%E5%BA%95%E6%9D%BF%23) `410.0K 🔥` `NEW`
1. [iQOO发布会刷屏了整个电竞圈](https://s.weibo.com/weibo?q=%23iQOO%E5%8F%91%E5%B8%83%E4%BC%9A%E5%88%B7%E5%B1%8F%E4%BA%86%E6%95%B4%E4%B8%AA%E7%94%B5%E7%AB%9E%E5%9C%88%23) `408.2K 🔥` `NEW`
1. [周深直播](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E7%9B%B4%E6%92%AD%23) `408.0K 🔥` `NEW`
1. [中国4x100米混接金牌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD4x100%E7%B1%B3%E6%B7%B7%E6%8E%A5%E9%87%91%E7%89%8C%23) `405.5K 🔥` `NEW`
1. [谁懂iQOO这张合照的含金量](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%87%82iQOO%E8%BF%99%E5%BC%A0%E5%90%88%E7%85%A7%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `404.2K 🔥` `NEW`
1. [朱亚文金鹰奖最佳男配](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%BA%9A%E6%96%87%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E9%85%8D%23) `404.0K 🔥` `NEW`
1. [中国男排vs韩国男排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E6%8E%92vs%E9%9F%A9%E5%9B%BD%E7%94%B7%E6%8E%92%23) `401.8K 🔥` `NEW`
1. [王鹤棣不吃压力回应](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E4%B8%8D%E5%90%83%E5%8E%8B%E5%8A%9B%E5%9B%9E%E5%BA%94%23) `401.3K 🔥` `NEW`
1. [锤娜丽莎秒删](https://s.weibo.com/weibo?q=%23%E9%94%A4%E5%A8%9C%E4%B8%BD%E8%8E%8E%E7%A7%92%E5%88%A0%23) `396.2K 🔥` `NEW`
1. [陈梦看亚运会感叹球速快](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A2%A6%E7%9C%8B%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%84%9F%E5%8F%B9%E7%90%83%E9%80%9F%E5%BF%AB%23) `392.4K 🔥` `NEW`
1. [梅婷金鹰奖最佳女配](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A9%B7%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E9%85%8D%23) `392.0K 🔥` `NEW`
1. [没有金鹰女神](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E9%87%91%E9%B9%B0%E5%A5%B3%E7%A5%9E%23) `372.5K 🔥` `NEW`
1. [朱亚文获奖宋佳哭了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%BA%9A%E6%96%87%E8%8E%B7%E5%A5%96%E5%AE%8B%E4%BD%B3%E5%93%AD%E4%BA%86%23) `369.1K 🔥` `NEW`
1. [迪丽热巴迪奥红玫瑰](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%AA%E5%A5%A5%E7%BA%A2%E7%8E%AB%E7%91%B0%23) `367.8K 🔥` `NEW`
1. [胡歌闫妮别闹了](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E9%97%AB%E5%A6%AE%E5%88%AB%E9%97%B9%E4%BA%86%23) `366.5K 🔥` `NEW`
1. [热量不高但饱腹感很强的食物](https://s.weibo.com/weibo?q=%23%E7%83%AD%E9%87%8F%E4%B8%8D%E9%AB%98%E4%BD%86%E9%A5%B1%E8%85%B9%E6%84%9F%E5%BE%88%E5%BC%BA%E7%9A%84%E9%A3%9F%E7%89%A9%23) `364.9K 🔥` `NEW`
1. [沙玥儿谈选择赵希伦原因](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%8E%A5%E5%84%BF%E8%B0%88%E9%80%89%E6%8B%A9%E8%B5%B5%E5%B8%8C%E4%BC%A6%E5%8E%9F%E5%9B%A0%23) `363.6K 🔥` `NEW`
1. [华晨宇被拽](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E8%A2%AB%E6%8B%BD%23) `363.1K 🔥` `NEW`
1. [全红婵伤病](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E4%BC%A4%E7%97%85%23) `354.3K 🔥` `NEW`
1. [华人岳父母连开数枪杀女婿](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BA%BA%E5%B2%B3%E7%88%B6%E6%AF%8D%E8%BF%9E%E5%BC%80%E6%95%B0%E6%9E%AA%E6%9D%80%E5%A5%B3%E5%A9%BF%23) `349.9K 🔥` `NEW`
1. [网传画师被骗四万离世](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%94%BB%E5%B8%88%E8%A2%AB%E9%AA%97%E5%9B%9B%E4%B8%87%E7%A6%BB%E4%B8%96%23) `339.2K 🔥` `NEW`
1. [国庆节的前一天是烈士纪念日](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E8%8A%82%E7%9A%84%E5%89%8D%E4%B8%80%E5%A4%A9%E6%98%AF%E7%83%88%E5%A3%AB%E7%BA%AA%E5%BF%B5%E6%97%A5%23) `334.7K 🔥` `NEW`
1. [买车的底层逻辑变了](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%BD%A6%E7%9A%84%E5%BA%95%E5%B1%82%E9%80%BB%E8%BE%91%E5%8F%98%E4%BA%86%23) `324.5K 🔥` `NEW`

Updated at 2026-09-29 22:15:37

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
