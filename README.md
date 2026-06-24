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

1. [曝马宁不再担任世界杯主裁 (It is revealed that Ma Ning will no longer serve as World Cup referee)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%A9%AC%E5%AE%81%E4%B8%8D%E5%86%8D%E6%8B%85%E4%BB%BB%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%BB%E8%A3%81%23) `3.6M 🔥` `NEW`
1. [江苏高考分数线](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `1.1M 🔥` `NEW`
1. [恋与深空 敖尹](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%20%E6%95%96%E5%B0%B9%23) `366.6K 🔥` `NEW`
1. [丈夫以为妻子是蛇打斗至27楼](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E4%BB%A5%E4%B8%BA%E5%A6%BB%E5%AD%90%E6%98%AF%E8%9B%87%E6%89%93%E6%96%97%E8%87%B327%E6%A5%BC%23) `366.0K 🔥` `NEW`
1. [高考专业黄金赛道规划](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E4%B8%93%E4%B8%9A%E9%BB%84%E9%87%91%E8%B5%9B%E9%81%93%E8%A7%84%E5%88%92%23) `365.2K 🔥` `NEW`
1. [三体2官宣](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BD%932%E5%AE%98%E5%AE%A3%23) `364.9K 🔥` `NEW`
1. [原来游泳减肥容易变成带鱼身材](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B8%B8%E6%B3%B3%E5%87%8F%E8%82%A5%E5%AE%B9%E6%98%93%E5%8F%98%E6%88%90%E5%B8%A6%E9%B1%BC%E8%BA%AB%E6%9D%90%23) `363.2K 🔥` `NEW`
1. [辽宁分数线](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E5%88%86%E6%95%B0%E7%BA%BF%23) `363.0K 🔥` `NEW`
1. [心疼文科生](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E6%96%87%E7%A7%91%E7%94%9F%23) `356.0K 🔥` `NEW`
1. [2026年高考分数线汇总](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%E6%B1%87%E6%80%BB%23) `351.0K 🔥` `NEW`
1. [周也的美甲是芭蕾舞鞋 (Zhou Ye’s manicure is ballet shoes)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E7%9A%84%E7%BE%8E%E7%94%B2%E6%98%AF%E8%8A%AD%E8%95%BE%E8%88%9E%E9%9E%8B%23) `350.2K 🔥` `NEW`
1. [王橹杰穆祉丞带妆彩排后台](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%A9%86%E7%A5%89%E4%B8%9E%E5%B8%A6%E5%A6%86%E5%BD%A9%E6%8E%92%E5%90%8E%E5%8F%B0%23) `345.6K 🔥` `NEW`
1. [普京说忍了8年才对乌动手](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AF%B4%E5%BF%8D%E4%BA%868%E5%B9%B4%E6%89%8D%E5%AF%B9%E4%B9%8C%E5%8A%A8%E6%89%8B%23) `341.9K 🔥` `NEW`
1. [iPhone18Pro三大核心升级](https://s.weibo.com/weibo?q=%23iPhone18Pro%E4%B8%89%E5%A4%A7%E6%A0%B8%E5%BF%83%E5%8D%87%E7%BA%A7%23) `340.3K 🔥` `NEW`
1. [杨毅想看C罗最后一场球](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%AF%85%E6%83%B3%E7%9C%8BC%E7%BD%97%E6%9C%80%E5%90%8E%E4%B8%80%E5%9C%BA%E7%90%83%23) `335.1K 🔥` `NEW`
1. [监管部门调查动物园将狗染成熊猫色](https://s.weibo.com/weibo?q=%23%E7%9B%91%E7%AE%A1%E9%83%A8%E9%97%A8%E8%B0%83%E6%9F%A5%E5%8A%A8%E7%89%A9%E5%9B%AD%E5%B0%86%E7%8B%97%E6%9F%93%E6%88%90%E7%86%8A%E7%8C%AB%E8%89%B2%23) `333.8K 🔥` `NEW`
1. [官俊臣高考成绩在预估范围内](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%E5%9C%A8%E9%A2%84%E4%BC%B0%E8%8C%83%E5%9B%B4%E5%86%85%23) `326.0K 🔥` `NEW`
1. [河南分数线 还不出](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%88%86%E6%95%B0%E7%BA%BF%20%E8%BF%98%E4%B8%8D%E5%87%BA%23) `322.5K 🔥` `NEW`
1. [王嘉尔亲吻粉丝](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E4%BA%B2%E5%90%BB%E7%B2%89%E4%B8%9D%23) `320.7K 🔥` `NEW`
1. [白衣公卿](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%A1%A3%E5%85%AC%E5%8D%BF%23) `315.4K 🔥` `NEW`
1. [这届年轻人减肥现状 (The current situation of weight loss among young people this year)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%8A%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%87%8F%E8%82%A5%E7%8E%B0%E7%8A%B6%23) `311.8K 🔥` `NEW`
1. [红舞鞋](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E8%88%9E%E9%9E%8B%23) `310.6K 🔥` `NEW`
1. [半导体新股暴涨900%](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%AF%BC%E4%BD%93%E6%96%B0%E8%82%A1%E6%9A%B4%E6%B6%A8900%25%23) `308.4K 🔥` `NEW`
1. [重庆分数线发布](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%88%86%E6%95%B0%E7%BA%BF%E5%8F%91%E5%B8%83%23) `306.5K 🔥` `NEW`
1. [杨紫皮肤 以为开了磨皮](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%9A%AE%E8%82%A4%20%E4%BB%A5%E4%B8%BA%E5%BC%80%E4%BA%86%E7%A3%A8%E7%9A%AE%23) `305.9K 🔥` `NEW`
1. [檀健次裸上身泳照](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E8%A3%B8%E4%B8%8A%E8%BA%AB%E6%B3%B3%E7%85%A7%23) `305.1K 🔥` `NEW`
1. [流量退去后莫氏鸡煲日销不足20只](https://s.weibo.com/weibo?q=%23%E6%B5%81%E9%87%8F%E9%80%80%E5%8E%BB%E5%90%8E%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E6%97%A5%E9%94%80%E4%B8%8D%E8%B6%B320%E5%8F%AA%23) `293.5K 🔥` `NEW`
1. [玛丽莲梦露自杀现场或系伪造](https://s.weibo.com/weibo?q=%23%E7%8E%9B%E4%B8%BD%E8%8E%B2%E6%A2%A6%E9%9C%B2%E8%87%AA%E6%9D%80%E7%8E%B0%E5%9C%BA%E6%88%96%E7%B3%BB%E4%BC%AA%E9%80%A0%23) `291.9K 🔥` `NEW`
1. [千万不要买结构复杂的水杯](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E4%B9%B0%E7%BB%93%E6%9E%84%E5%A4%8D%E6%9D%82%E7%9A%84%E6%B0%B4%E6%9D%AF%23) `289.6K 🔥` `NEW`
1. [我确定王俊凯是天使](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%A1%AE%E5%AE%9A%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%98%AF%E5%A4%A9%E4%BD%BF%23) `281.6K 🔥` `NEW`
1. [C罗梅开二度创历史 (Cristiano Ronaldo scores twice to create history)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%E5%88%9B%E5%8E%86%E5%8F%B2%23) `270.1K 🔥` `NEW`
1. [郑晓龙选的藏海传名场面](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%99%93%E9%BE%99%E9%80%89%E7%9A%84%E8%97%8F%E6%B5%B7%E4%BC%A0%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `269.6K 🔥` `NEW`
1. [原来我们小时候就吃过必吃榜](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%88%91%E4%BB%AC%E5%B0%8F%E6%97%B6%E5%80%99%E5%B0%B1%E5%90%83%E8%BF%87%E5%BF%85%E5%90%83%E6%A6%9C%23) `264.2K 🔥` `NEW`
1. [入职丑公司感到非常痛苦](https://s.weibo.com/weibo?q=%23%E5%85%A5%E8%81%8C%E4%B8%91%E5%85%AC%E5%8F%B8%E6%84%9F%E5%88%B0%E9%9D%9E%E5%B8%B8%E7%97%9B%E8%8B%A6%23) `264.1K 🔥` `NEW`
1. [学医不考研有什么就业方向](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E5%8C%BB%E4%B8%8D%E8%80%83%E7%A0%94%E6%9C%89%E4%BB%80%E4%B9%88%E5%B0%B1%E4%B8%9A%E6%96%B9%E5%90%91%23) `264.0K 🔥` `NEW`
1. [大冰说普通人家的孩子别卷没用的东西](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E8%AF%B4%E6%99%AE%E9%80%9A%E4%BA%BA%E5%AE%B6%E7%9A%84%E5%AD%A9%E5%AD%90%E5%88%AB%E5%8D%B7%E6%B2%A1%E7%94%A8%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `264.0K 🔥` `NEW`
1. [瑶一瑶穿8厘米高跟鞋](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E7%A9%BF8%E5%8E%98%E7%B1%B3%E9%AB%98%E8%B7%9F%E9%9E%8B%23) `232.2K 🔥` `NEW`
1. [19岁男子脱发严重查出梅毒](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E7%94%B7%E5%AD%90%E8%84%B1%E5%8F%91%E4%B8%A5%E9%87%8D%E6%9F%A5%E5%87%BA%E6%A2%85%E6%AF%92%23) `213.4K 🔥` `NEW`
1. [赢风 黄景瑜](https://s.weibo.com/weibo?q=%23%E8%B5%A2%E9%A3%8E%20%E9%BB%84%E6%99%AF%E7%91%9C%23) `213.2K 🔥` `NEW`
1. [美联储加息3次金价或跌至3800](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%E5%8A%A0%E6%81%AF3%E6%AC%A1%E9%87%91%E4%BB%B7%E6%88%96%E8%B7%8C%E8%87%B33800%23) `213.0K 🔥` `NEW`
1. [为啥高德地图的广告没了 (Why are the ads on Amap gone?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%95%A5%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BE%E7%9A%84%E5%B9%BF%E5%91%8A%E6%B2%A1%E4%BA%86%23) `212.7K 🔥` `NEW`
1. [陈哲远圣罗兰看秀生图](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E5%9C%A3%E7%BD%97%E5%85%B0%E7%9C%8B%E7%A7%80%E7%94%9F%E5%9B%BE%23) `212.5K 🔥` `NEW`
1. [赵美延清潭国际高中3主演](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E7%BE%8E%E5%BB%B6%E6%B8%85%E6%BD%AD%E5%9B%BD%E9%99%85%E9%AB%98%E4%B8%AD3%E4%B8%BB%E6%BC%94%23) `212.4K 🔥` `NEW`
1. [暴雨模式避险指南](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E6%A8%A1%E5%BC%8F%E9%81%BF%E9%99%A9%E6%8C%87%E5%8D%97%23) `876.6K 🔥`
1. [高考分数线 (College Entrance Examination Score Cutoff)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `403.3K 🔥` `-72%`
1. [8月份双休的人有福了](https://s.weibo.com/weibo?q=%238%E6%9C%88%E4%BB%BD%E5%8F%8C%E4%BC%91%E7%9A%84%E4%BA%BA%E6%9C%89%E7%A6%8F%E4%BA%86%23) `364.7K 🔥` `-62%`
1. [官俊臣高考成绩](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%23) `360.7K 🔥` `-53%`
1. [李金铭农村婆婆发声 (Li Jinming’s rural mother-in-law speaks out)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%86%9C%E6%9D%91%E5%A9%86%E5%A9%86%E5%8F%91%E5%A3%B0%23) `356.9K 🔥` `-56%`
1. [河北高考分数线 (Hebei college entrance examination score line)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `331.4K 🔥` `-81%`
1. [Lisa确认分手](https://s.weibo.com/weibo?q=%23Lisa%E7%A1%AE%E8%AE%A4%E5%88%86%E6%89%8B%23) `330.0K 🔥` `-24%`
1. [哈兰德 恋与深空](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%20%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `264.7K 🔥` `-68%`

Updated at 2026-06-24 19:15:09

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
