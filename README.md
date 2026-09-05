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

1. [羽衣甘蓝 农药](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E8%A1%A3%E7%94%98%E8%93%9D%20%E5%86%9C%E8%8D%AF%23) `2.1M 🔥` `NEW`
1. [青春华章因创新更燃](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E5%8D%8E%E7%AB%A0%E5%9B%A0%E5%88%9B%E6%96%B0%E6%9B%B4%E7%87%83%23) `1.1M 🔥` `NEW`
1. [张雅琪被花少8剪掉了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E8%A2%AB%E8%8A%B1%E5%B0%918%E5%89%AA%E6%8E%89%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [张家齐13岁赚了81万](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%9013%E5%B2%81%E8%B5%9A%E4%BA%8681%E4%B8%87%23) `1.1M 🔥` `NEW`
1. [设计师称中国客厅已失去意义](https://s.weibo.com/weibo?q=%23%E8%AE%BE%E8%AE%A1%E5%B8%88%E7%A7%B0%E4%B8%AD%E5%9B%BD%E5%AE%A2%E5%8E%85%E5%B7%B2%E5%A4%B1%E5%8E%BB%E6%84%8F%E4%B9%89%23) `774.6K 🔥` `NEW`
1. [运营商晒iPhone18售价](https://s.weibo.com/weibo?q=%23%E8%BF%90%E8%90%A5%E5%95%86%E6%99%92iPhone18%E5%94%AE%E4%BB%B7%23) `627.2K 🔥` `NEW`
1. [女子吃避孕药后久坐旅游患肺栓塞](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%83%E9%81%BF%E5%AD%95%E8%8D%AF%E5%90%8E%E4%B9%85%E5%9D%90%E6%97%85%E6%B8%B8%E6%82%A3%E8%82%BA%E6%A0%93%E5%A1%9E%23) `535.0K 🔥` `NEW`
1. [尼泊尔泥石流灾害一中国公民获救](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%B3%A5%E7%9F%B3%E6%B5%81%E7%81%BE%E5%AE%B3%E4%B8%80%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E8%8E%B7%E6%95%91%23) `431.5K 🔥` `NEW`
1. [卢昱晓瘦成竹竿了](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%98%A6%E6%88%90%E7%AB%B9%E7%AB%BF%E4%BA%86%23) `379.7K 🔥` `NEW`
1. [要不要取消英语主科地位](https://s.weibo.com/weibo?q=%23%E8%A6%81%E4%B8%8D%E8%A6%81%E5%8F%96%E6%B6%88%E8%8B%B1%E8%AF%AD%E4%B8%BB%E7%A7%91%E5%9C%B0%E4%BD%8D%23) `367.6K 🔥` `NEW`
1. [李兰迪 我找凌玲](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%20%E6%88%91%E6%89%BE%E5%87%8C%E7%8E%B2%23) `359.7K 🔥` `NEW`
1. [打雷 拔插头](https://s.weibo.com/weibo?q=%23%E6%89%93%E9%9B%B7%20%E6%8B%94%E6%8F%92%E5%A4%B4%23) `276.4K 🔥` `NEW`
1. [安静公主下沉口碑](https://s.weibo.com/weibo?q=%23%E5%AE%89%E9%9D%99%E5%85%AC%E4%B8%BB%E4%B8%8B%E6%B2%89%E5%8F%A3%E7%A2%91%23) `274.1K 🔥` `NEW`
1. [早春晴朗18集是史诗级别的鬼一集](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%9718%E9%9B%86%E6%98%AF%E5%8F%B2%E8%AF%97%E7%BA%A7%E5%88%AB%E7%9A%84%E9%AC%BC%E4%B8%80%E9%9B%86%23) `225.6K 🔥` `NEW`
1. [官方通报染色莴笋](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%9F%93%E8%89%B2%E8%8E%B4%E7%AC%8B%23) `225.0K 🔥` `NEW`
1. [lululemon承认长城活动致业绩下滑](https://s.weibo.com/weibo?q=%23lululemon%E6%89%BF%E8%AE%A4%E9%95%BF%E5%9F%8E%E6%B4%BB%E5%8A%A8%E8%87%B4%E4%B8%9A%E7%BB%A9%E4%B8%8B%E6%BB%91%23) `223.7K 🔥` `NEW`
1. [刘雯 井柏然](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%20%E4%BA%95%E6%9F%8F%E7%84%B6%23) `222.6K 🔥` `NEW`
1. [邓为的箱子快吐了](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E7%9A%84%E7%AE%B1%E5%AD%90%E5%BF%AB%E5%90%90%E4%BA%86%23) `222.2K 🔥` `NEW`
1. [全链路负责才能筑牢电池安全](https://s.weibo.com/weibo?q=%23%E5%85%A8%E9%93%BE%E8%B7%AF%E8%B4%9F%E8%B4%A3%E6%89%8D%E8%83%BD%E7%AD%91%E7%89%A2%E7%94%B5%E6%B1%A0%E5%AE%89%E5%85%A8%23) `221.6K 🔥` `NEW`
1. [男子高速逆行开远光与85辆车交汇](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%AB%98%E9%80%9F%E9%80%86%E8%A1%8C%E5%BC%80%E8%BF%9C%E5%85%89%E4%B8%8E85%E8%BE%86%E8%BD%A6%E4%BA%A4%E6%B1%87%23) `220.1K 🔥` `NEW`
1. [游客回酒店发现半裸陌生男子躺床上](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E5%9B%9E%E9%85%92%E5%BA%97%E5%8F%91%E7%8E%B0%E5%8D%8A%E8%A3%B8%E9%99%8C%E7%94%9F%E7%94%B7%E5%AD%90%E8%BA%BA%E5%BA%8A%E4%B8%8A%23) `218.8K 🔥` `NEW`
1. [为什么大家不喝猪奶](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%A4%A7%E5%AE%B6%E4%B8%8D%E5%96%9D%E7%8C%AA%E5%A5%B6%23) `218.5K 🔥` `NEW`
1. [买了一堆好看衣服但你住在广东](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E4%BA%86%E4%B8%80%E5%A0%86%E5%A5%BD%E7%9C%8B%E8%A1%A3%E6%9C%8D%E4%BD%86%E4%BD%A0%E4%BD%8F%E5%9C%A8%E5%B9%BF%E4%B8%9C%23) `217.3K 🔥` `NEW`
1. [华晨宇直播](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E7%9B%B4%E6%92%AD%23) `215.9K 🔥` `NEW`
1. [孙千15部女主剧](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%8315%E9%83%A8%E5%A5%B3%E4%B8%BB%E5%89%A7%23) `214.6K 🔥` `NEW`
1. [联合国警告1.5度目标守不住了](https://s.weibo.com/weibo?q=%23%E8%81%94%E5%90%88%E5%9B%BD%E8%AD%A6%E5%91%8A1.5%E5%BA%A6%E7%9B%AE%E6%A0%87%E5%AE%88%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `214.2K 🔥` `NEW`
1. [曝TES明年要解散了](https://s.weibo.com/weibo?q=%23%E6%9B%9DTES%E6%98%8E%E5%B9%B4%E8%A6%81%E8%A7%A3%E6%95%A3%E4%BA%86%23) `213.2K 🔥` `NEW`
1. [杀妻分尸男子称妻子不守妇道](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%A6%BB%E5%88%86%E5%B0%B8%E7%94%B7%E5%AD%90%E7%A7%B0%E5%A6%BB%E5%AD%90%E4%B8%8D%E5%AE%88%E5%A6%87%E9%81%93%23) `211.9K 🔥` `NEW`
1. [井柏然杭州人气](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E6%9D%AD%E5%B7%9E%E4%BA%BA%E6%B0%94%23) `210.6K 🔥` `NEW`
1. [虹猫蓝兔七侠传创作团队发长文](https://s.weibo.com/weibo?q=%23%E8%99%B9%E7%8C%AB%E8%93%9D%E5%85%94%E4%B8%83%E4%BE%A0%E4%BC%A0%E5%88%9B%E4%BD%9C%E5%9B%A2%E9%98%9F%E5%8F%91%E9%95%BF%E6%96%87%23) `210.1K 🔥` `NEW`
1. [中级经济法](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BA%A7%E7%BB%8F%E6%B5%8E%E6%B3%95%23) `209.5K 🔥` `NEW`
1. [男子杀妻称其离家出走6年后露馅](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%80%E5%A6%BB%E7%A7%B0%E5%85%B6%E7%A6%BB%E5%AE%B6%E5%87%BA%E8%B5%B06%E5%B9%B4%E5%90%8E%E9%9C%B2%E9%A6%85%23) `207.6K 🔥` `NEW`
1. [7500万乙肝患者有望告别终身服药](https://s.weibo.com/weibo?q=%237500%E4%B8%87%E4%B9%99%E8%82%9D%E6%82%A3%E8%80%85%E6%9C%89%E6%9C%9B%E5%91%8A%E5%88%AB%E7%BB%88%E8%BA%AB%E6%9C%8D%E8%8D%AF%23) `206.8K 🔥` `NEW`
1. [家务劳动被无偿化](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%8A%A1%E5%8A%B3%E5%8A%A8%E8%A2%AB%E6%97%A0%E5%81%BF%E5%8C%96%23) `204.7K 🔥` `NEW`
1. [苹果多款新品售价曝光](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%A4%9A%E6%AC%BE%E6%96%B0%E5%93%81%E5%94%AE%E4%BB%B7%E6%9B%9D%E5%85%89%23) `203.7K 🔥` `NEW`
1. [建议小学生午休不必强制睡觉](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%8D%88%E4%BC%91%E4%B8%8D%E5%BF%85%E5%BC%BA%E5%88%B6%E7%9D%A1%E8%A7%89%23) `201.8K 🔥` `NEW`
1. [TES对战iG](https://s.weibo.com/weibo?q=%23TES%E5%AF%B9%E6%88%98iG%23) `200.4K 🔥` `NEW`
1. [特斯拉无人驾驶电车内只有座椅和屏幕](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E6%97%A0%E4%BA%BA%E9%A9%BE%E9%A9%B6%E7%94%B5%E8%BD%A6%E5%86%85%E5%8F%AA%E6%9C%89%E5%BA%A7%E6%A4%85%E5%92%8C%E5%B1%8F%E5%B9%95%23) `198.6K 🔥` `NEW`
1. [全球黄金大迁徙](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%BB%84%E9%87%91%E5%A4%A7%E8%BF%81%E5%BE%99%23) `197.1K 🔥` `NEW`
1. [丁禹兮的冠军海棠OOTD](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%9A%84%E5%86%A0%E5%86%9B%E6%B5%B7%E6%A3%A0OOTD%23) `196.5K 🔥` `NEW`
1. [早春晴朗栾念吵架穿情侣装](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E6%A0%BE%E5%BF%B5%E5%90%B5%E6%9E%B6%E7%A9%BF%E6%83%85%E4%BE%A3%E8%A3%85%23) `195.2K 🔥` `NEW`
1. [女子停捐不到一个月被催捐](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%81%9C%E6%8D%90%E4%B8%8D%E5%88%B0%E4%B8%80%E4%B8%AA%E6%9C%88%E8%A2%AB%E5%82%AC%E6%8D%90%23) `194.1K 🔥` `NEW`
1. [启境GX7阔五座智能百变SUV](https://s.weibo.com/weibo?q=%23%E5%90%AF%E5%A2%83GX7%E9%98%94%E4%BA%94%E5%BA%A7%E6%99%BA%E8%83%BD%E7%99%BE%E5%8F%98SUV%23) `1.1M 🔥` `+77%`
1. [张凌赫百丽哪哪都有我的道](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%99%BE%E4%B8%BD%E5%93%AA%E5%93%AA%E9%83%BD%E6%9C%89%E6%88%91%E7%9A%84%E9%81%93%23) `733.3K 🔥` `+52%`
1. [第一批戴运动手环的受害者出现了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E6%88%B4%E8%BF%90%E5%8A%A8%E6%89%8B%E7%8E%AF%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `1.2M 🔥`
1. [剧本杀 色情服务](https://s.weibo.com/weibo?q=%23%E5%89%A7%E6%9C%AC%E6%9D%80%20%E8%89%B2%E6%83%85%E6%9C%8D%E5%8A%A1%23) `392.4K 🔥`
1. [刘雯 避嫌](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%20%E9%81%BF%E5%AB%8C%23) `386.6K 🔥`
1. [王一博2分03秒520](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A2%E5%88%8603%E7%A7%92520%23) `200.9K 🔥`
1. [我好像突然对钱有了概念](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A5%BD%E5%83%8F%E7%AA%81%E7%84%B6%E5%AF%B9%E9%92%B1%E6%9C%89%E4%BA%86%E6%A6%82%E5%BF%B5%23) `393.2K 🔥` `-38%`
1. [安静公主说王俊凯粉丝既要又要](https://s.weibo.com/weibo?q=%23%E5%AE%89%E9%9D%99%E5%85%AC%E4%B8%BB%E8%AF%B4%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%B2%89%E4%B8%9D%E6%97%A2%E8%A6%81%E5%8F%88%E8%A6%81%23) `206.5K 🔥` `-35%`
1. [1岁裸体男童沙漠走失12小时](https://s.weibo.com/weibo?q=%231%E5%B2%81%E8%A3%B8%E4%BD%93%E7%94%B7%E7%AB%A5%E6%B2%99%E6%BC%A0%E8%B5%B0%E5%A4%B112%E5%B0%8F%E6%97%B6%23) `202.9K 🔥` `-77%`
1. [张凌赫卢昱晓进组](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8D%A2%E6%98%B1%E6%99%93%E8%BF%9B%E7%BB%84%23) `198.4K 🔥` `-52%`

Updated at 2026-09-05 17:26:44

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
