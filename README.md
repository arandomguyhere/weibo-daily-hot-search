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

1. [披荆斩棘直播 (Overcoming obstacles live broadcast)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `1.1M 🔥` `NEW`
1. [前7月我国邮政寄递量超1200亿件](https://s.weibo.com/weibo?q=%23%E5%89%8D7%E6%9C%88%E6%88%91%E5%9B%BD%E9%82%AE%E6%94%BF%E5%AF%84%E9%80%92%E9%87%8F%E8%B6%851200%E4%BA%BF%E4%BB%B6%23) `914.1K 🔥` `NEW`
1. [张雅琪发12宫格](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E5%8F%9112%E5%AE%AB%E6%A0%BC%23) `826.7K 🔥` `NEW`
1. [无锡暴雨](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%94%A1%E6%9A%B4%E9%9B%A8%23) `815.6K 🔥` `NEW`
1. [杨博文 妆造](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%20%E5%A6%86%E9%80%A0%23) `761.5K 🔥` `NEW`
1. [胖东来房东逻辑](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%88%BF%E4%B8%9C%E9%80%BB%E8%BE%91%23) `532.6K 🔥` `NEW`
1. [郭德纲 现挂](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%BE%B7%E7%BA%B2%20%E7%8E%B0%E6%8C%82%23) `294.7K 🔥` `NEW`
1. [魏子宸好会饭撒](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%A5%BD%E4%BC%9A%E9%A5%AD%E6%92%92%23) `282.4K 🔥` `NEW`
1. [刘耀文又被偶遇办签证](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%8F%88%E8%A2%AB%E5%81%B6%E9%81%87%E5%8A%9E%E7%AD%BE%E8%AF%81%23) `276.2K 🔥` `NEW`
1. [有何不可](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BD%95%E4%B8%8D%E5%8F%AF%23) `235.6K 🔥` `NEW`
1. [国乒 积累经验比输赢重要 (National table tennis: Accumulating experience is more important than winning or losing)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%20%E7%A7%AF%E7%B4%AF%E7%BB%8F%E9%AA%8C%E6%AF%94%E8%BE%93%E8%B5%A2%E9%87%8D%E8%A6%81%23) `235.4K 🔥` `NEW`
1. [SK海力士警告明年芯片荒加剧](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E8%AD%A6%E5%91%8A%E6%98%8E%E5%B9%B4%E8%8A%AF%E7%89%87%E8%8D%92%E5%8A%A0%E5%89%A7%23) `234.9K 🔥` `NEW`
1. [太湖将发生流域性较大洪水](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E6%B9%96%E5%B0%86%E5%8F%91%E7%94%9F%E6%B5%81%E5%9F%9F%E6%80%A7%E8%BE%83%E5%A4%A7%E6%B4%AA%E6%B0%B4%23) `234.6K 🔥` `NEW`
1. [汪苏泷鸟巢上座率](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E9%B8%9F%E5%B7%A2%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `234.5K 🔥` `NEW`
1. [王橹杰东方骨国风美人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E4%B8%9C%E6%96%B9%E9%AA%A8%E5%9B%BD%E9%A3%8E%E7%BE%8E%E4%BA%BA%23) `212.3K 🔥` `NEW`
1. [五公节目单](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%85%AC%E8%8A%82%E7%9B%AE%E5%8D%95%23) `187.5K 🔥` `NEW`
1. [关晓彤彩排也戴着负重手环](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%BD%A9%E6%8E%92%E4%B9%9F%E6%88%B4%E7%9D%80%E8%B4%9F%E9%87%8D%E6%89%8B%E7%8E%AF%23) `172.5K 🔥` `NEW`
1. [一代人有一代人的家电观](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E5%AE%B6%E7%94%B5%E8%A7%82%23) `171.5K 🔥` `NEW`
1. [致敬生态保护者](https://s.weibo.com/weibo?q=%23%E8%87%B4%E6%95%AC%E7%94%9F%E6%80%81%E4%BF%9D%E6%8A%A4%E8%80%85%23) `171.1K 🔥` `NEW`
1. [邓为迪奥惊艳派对558](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E8%BF%AA%E5%A5%A5%E6%83%8A%E8%89%B3%E6%B4%BE%E5%AF%B9558%23) `170.8K 🔥` `NEW`
1. [历史未走远吾辈当自强 (History has not gone far, we should strengthen ourselves)](https://s.weibo.com/weibo?q=%23%E5%8E%86%E5%8F%B2%E6%9C%AA%E8%B5%B0%E8%BF%9C%E5%90%BE%E8%BE%88%E5%BD%93%E8%87%AA%E5%BC%BA%23) `169.2K 🔥` `NEW`
1. [陈浚铭摇曳首秀](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%9A%E9%93%AD%E6%91%87%E6%9B%B3%E9%A6%96%E7%A7%80%23) `162.3K 🔥` `NEW`
1. [WE战胜TES](https://s.weibo.com/weibo?q=%23WE%E6%88%98%E8%83%9CTES%23) `154.8K 🔥` `NEW`
1. [地铁站也能办结婚证了](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E7%AB%99%E4%B9%9F%E8%83%BD%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `1.3M 🔥` `+257%`
1. [华为WATCH GT 7今日开售](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAWATCH%20GT%207%E4%BB%8A%E6%97%A5%E5%BC%80%E5%94%AE%23) `868.7K 🔥` `+67%`
1. [王者联动电影八仙](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%81%94%E5%8A%A8%E7%94%B5%E5%BD%B1%E5%85%AB%E4%BB%99%23) `478.3K 🔥` `+48%`
1. [空枪好多影帝影后](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%E5%A5%BD%E5%A4%9A%E5%BD%B1%E5%B8%9D%E5%BD%B1%E5%90%8E%23) `303.2K 🔥` `+47%`
1. [34岁女子肾衰透析8年意外怀孕](https://s.weibo.com/weibo?q=%2334%E5%B2%81%E5%A5%B3%E5%AD%90%E8%82%BE%E8%A1%B0%E9%80%8F%E6%9E%908%E5%B9%B4%E6%84%8F%E5%A4%96%E6%80%80%E5%AD%95%23) `234.8K 🔥` `+69%`
1. [刷到司机猝死视频发现主角是自己](https://s.weibo.com/weibo?q=%23%E5%88%B7%E5%88%B0%E5%8F%B8%E6%9C%BA%E7%8C%9D%E6%AD%BB%E8%A7%86%E9%A2%91%E5%8F%91%E7%8E%B0%E4%B8%BB%E8%A7%92%E6%98%AF%E8%87%AA%E5%B7%B1%23) `172.5K 🔥` `+30%`
1. [古天乐喝古井天天乐 (Louis Koo drinks Gujing Tiantianle)](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%A4%A9%E4%B9%90%E5%96%9D%E5%8F%A4%E4%BA%95%E5%A4%A9%E5%A4%A9%E4%B9%90%23) `553.2K 🔥`
1. [Lisa道歉](https://s.weibo.com/weibo?q=%23Lisa%E9%81%93%E6%AD%89%23) `300.9K 🔥`
1. [小酒窝房间简直是我小时候的梦中情房 (The dimple room is simply my dream room when I was a kid)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E6%88%BF%E9%97%B4%E7%AE%80%E7%9B%B4%E6%98%AF%E6%88%91%E5%B0%8F%E6%97%B6%E5%80%99%E7%9A%84%E6%A2%A6%E4%B8%AD%E6%83%85%E6%88%BF%23) `292.3K 🔥`
1. [公司该缴的社保 个人承担](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E8%AF%A5%E7%BC%B4%E7%9A%84%E7%A4%BE%E4%BF%9D%20%E4%B8%AA%E4%BA%BA%E6%89%BF%E6%8B%85%23) `287.7K 🔥`
1. [方芳 地狱笑话](https://s.weibo.com/weibo?q=%23%E6%96%B9%E8%8A%B3%20%E5%9C%B0%E7%8B%B1%E7%AC%91%E8%AF%9D%23) `285.6K 🔥`
1. [明年或出现最严重存储荒 (The most serious storage shortage may occur next year)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%B9%B4%E6%88%96%E5%87%BA%E7%8E%B0%E6%9C%80%E4%B8%A5%E9%87%8D%E5%AD%98%E5%82%A8%E8%8D%92%23) `279.7K 🔥`
1. [曝王嘉尔宋雨琦恋情 (Wang Jiaer and Song Yuqi's romance revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%81%8B%E6%83%85%23) `269.2K 🔥`
1. [张雅琪 湖南卫视下场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E4%B8%8B%E5%9C%BA%23) `264.9K 🔥`
1. [世界杯决赛西班牙犯规 (Spain foul in World Cup final)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E8%A5%BF%E7%8F%AD%E7%89%99%E7%8A%AF%E8%A7%84%23) `260.7K 🔥`
1. [晋江作品尺度新规 (Jinjiang’s New Regulations on Work Scales)](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E4%BD%9C%E5%93%81%E5%B0%BA%E5%BA%A6%E6%96%B0%E8%A7%84%23) `260.1K 🔥`
1. [宋雨琦纹身](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%BA%B9%E8%BA%AB%23) `235.2K 🔥`
1. [夫妻分房睡的真实原因找到了](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E5%88%86%E6%88%BF%E7%9D%A1%E7%9A%84%E7%9C%9F%E5%AE%9E%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `212.7K 🔥`
1. [朋友圈永远不会有二次编辑功能](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%B0%B8%E8%BF%9C%E4%B8%8D%E4%BC%9A%E6%9C%89%E4%BA%8C%E6%AC%A1%E7%BC%96%E8%BE%91%E5%8A%9F%E8%83%BD%23) `306.3K 🔥` `-27%`
1. [胖东来涨租房东不种地摘果子](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%B6%A8%E7%A7%9F%E6%88%BF%E4%B8%9C%E4%B8%8D%E7%A7%8D%E5%9C%B0%E6%91%98%E6%9E%9C%E5%AD%90%23) `299.2K 🔥` `-74%`
1. [3到5年内社保走向全额实缴 (Social security will be paid in full within 3 to 5 years)](https://s.weibo.com/weibo?q=%233%E5%88%B05%E5%B9%B4%E5%86%85%E7%A4%BE%E4%BF%9D%E8%B5%B0%E5%90%91%E5%85%A8%E9%A2%9D%E5%AE%9E%E7%BC%B4%23) `271.2K 🔥` `-25%`
1. [龙餐馆否认偷票房](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E5%90%A6%E8%AE%A4%E5%81%B7%E7%A5%A8%E6%88%BF%23) `220.1K 🔥` `-32%`
1. [商务局回应胖东来生活广场涨租闭店](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%8A%A1%E5%B1%80%E5%9B%9E%E5%BA%94%E8%83%96%E4%B8%9C%E6%9D%A5%E7%94%9F%E6%B4%BB%E5%B9%BF%E5%9C%BA%E6%B6%A8%E7%A7%9F%E9%97%AD%E5%BA%97%23) `205.0K 🔥` `-37%`
1. [朱一龙空枪海报C位 (Zhu Yilong empty gun poster C position)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E7%A9%BA%E6%9E%AA%E6%B5%B7%E6%8A%A5C%E4%BD%8D%23) `200.5K 🔥` `-37%`
1. [首款折叠iPhone](https://s.weibo.com/weibo?q=%23%E9%A6%96%E6%AC%BE%E6%8A%98%E5%8F%A0iPhone%23) `181.0K 🔥` `-26%`
1. [空枪 极限定档](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%20%E6%9E%81%E9%99%90%E5%AE%9A%E6%A1%A3%23) `177.0K 🔥` `-28%`
1. [朱志鑫示意TOP队员起立](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E7%A4%BA%E6%84%8FTOP%E9%98%9F%E5%91%98%E8%B5%B7%E7%AB%8B%23) `168.8K 🔥` `-27%`
1. [段永平抛出1亿元十年之约 (Duan Yongping offers NT$100 million for ten-year contract)](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E6%B0%B8%E5%B9%B3%E6%8A%9B%E5%87%BA1%E4%BA%BF%E5%85%83%E5%8D%81%E5%B9%B4%E4%B9%8B%E7%BA%A6%23) `162.8K 🔥` `-23%`

Updated at 2026-08-14 20:25:09

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
