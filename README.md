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

1. [全国三夏麦收地图来了 (The map of the three summer wheat harvests across the country is here)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E4%B8%89%E5%A4%8F%E9%BA%A6%E6%94%B6%E5%9C%B0%E5%9B%BE%E6%9D%A5%E4%BA%86%23) `400.3K 🔥` `NEW`
1. [小米17T系列今日发布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B317T%E7%B3%BB%E5%88%97%E4%BB%8A%E6%97%A5%E5%8F%91%E5%B8%83%23) `400.2K 🔥` `NEW`
1. [兹维列夫首夺大满贯冠军](https://s.weibo.com/weibo?q=%23%E5%85%B9%E7%BB%B4%E5%88%97%E5%A4%AB%E9%A6%96%E5%A4%BA%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%86%A0%E5%86%9B%23) `117.9K 🔥` `NEW`
1. [浪姐直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `86.8K 🔥` `NEW`
1. [中国女排3比1波兰女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%923%E6%AF%941%E6%B3%A2%E5%85%B0%E5%A5%B3%E6%8E%92%23) `86.7K 🔥` `NEW`
1. [浪姐四公个喜人气排名 (The popularity rankings of Sister Lang and Si Gong)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%9B%9B%E5%85%AC%E4%B8%AA%E5%96%9C%E4%BA%BA%E6%B0%94%E6%8E%92%E5%90%8D%23) `582.4K 🔥` `+23%`
1. [齐思钧 雷霆雨露俱是天恩](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%80%9D%E9%92%A7%20%E9%9B%B7%E9%9C%86%E9%9B%A8%E9%9C%B2%E4%BF%B1%E6%98%AF%E5%A4%A9%E6%81%A9%23) `382.2K 🔥`
1. [不要擅自回复外星人](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E6%93%85%E8%87%AA%E5%9B%9E%E5%A4%8D%E5%A4%96%E6%98%9F%E4%BA%BA%23) `494.4K 🔥` `-35%`
1. [张月直接离场了 (Zhang Yue left the scene directly)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E7%9B%B4%E6%8E%A5%E7%A6%BB%E5%9C%BA%E4%BA%86%23) `400.1K 🔥` `-74%`
1. [陈瑶 没事我今天就回来了](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%20%E6%B2%A1%E4%BA%8B%E6%88%91%E4%BB%8A%E5%A4%A9%E5%B0%B1%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `118.2K 🔥` `-73%`
1. [喜欢独处的人是这么想的](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E7%8B%AC%E5%A4%84%E7%9A%84%E4%BA%BA%E6%98%AF%E8%BF%99%E4%B9%88%E6%83%B3%E7%9A%84%23) `87.3K 🔥` `-82%`
1. [12306回应火车出发7小时中途折返](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E7%81%AB%E8%BD%A6%E5%87%BA%E5%8F%917%E5%B0%8F%E6%97%B6%E4%B8%AD%E9%80%94%E6%8A%98%E8%BF%94%23) `87.3K 🔥` `-81%`
1. [耐克市值几乎蒸发掉一个阿迪达斯 (Nike's market value has almost evaporated compared to Adidas)](https://s.weibo.com/weibo?q=%23%E8%80%90%E5%85%8B%E5%B8%82%E5%80%BC%E5%87%A0%E4%B9%8E%E8%92%B8%E5%8F%91%E6%8E%89%E4%B8%80%E4%B8%AA%E9%98%BF%E8%BF%AA%E8%BE%BE%E6%96%AF%23) `87.3K 🔥` `-81%`
1. [张月不可置信的看了很久 (Zhang Yue looked at it in disbelief for a long time)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E4%B8%8D%E5%8F%AF%E7%BD%AE%E4%BF%A1%E7%9A%84%E7%9C%8B%E4%BA%86%E5%BE%88%E4%B9%85%23) `87.3K 🔥` `-81%`
1. [懂张若昀了 唐艺昕是明媚的解药](https://s.weibo.com/weibo?q=%23%E6%87%82%E5%BC%A0%E8%8B%A5%E6%98%80%E4%BA%86%20%E5%94%90%E8%89%BA%E6%98%95%E6%98%AF%E6%98%8E%E5%AA%9A%E7%9A%84%E8%A7%A3%E8%8D%AF%23) `87.3K 🔥` `-80%`
1. [孙怡一公队友全部淘汰](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E4%B8%80%E5%85%AC%E9%98%9F%E5%8F%8B%E5%85%A8%E9%83%A8%E6%B7%98%E6%B1%B0%23) `87.2K 🔥` `-80%`
1. [代斯 我再也不唱歌了](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%96%AF%20%E6%88%91%E5%86%8D%E4%B9%9F%E4%B8%8D%E5%94%B1%E6%AD%8C%E4%BA%86%23) `87.2K 🔥` `-80%`
1. [陈瑶一直在哭](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E4%B8%80%E7%9B%B4%E5%9C%A8%E5%93%AD%23) `87.2K 🔥` `-80%`
1. [曾沛慈看到张慧雯淘汰泪崩了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E7%9C%8B%E5%88%B0%E5%BC%A0%E6%85%A7%E9%9B%AF%E6%B7%98%E6%B1%B0%E6%B3%AA%E5%B4%A9%E4%BA%86%23) `87.2K 🔥` `-81%`
1. [中产家族的破产七件套](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BA%A7%E5%AE%B6%E6%97%8F%E7%9A%84%E7%A0%B4%E4%BA%A7%E4%B8%83%E4%BB%B6%E5%A5%97%23) `87.2K 🔥` `-80%`
1. [江苏一考生8点59才发现走错考场](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E4%B8%80%E8%80%83%E7%94%9F8%E7%82%B959%E6%89%8D%E5%8F%91%E7%8E%B0%E8%B5%B0%E9%94%99%E8%80%83%E5%9C%BA%23) `87.2K 🔥` `-80%`
1. [49岁男子在香港至舟山货船上失踪](https://s.weibo.com/weibo?q=%2349%E5%B2%81%E7%94%B7%E5%AD%90%E5%9C%A8%E9%A6%99%E6%B8%AF%E8%87%B3%E8%88%9F%E5%B1%B1%E8%B4%A7%E8%88%B9%E4%B8%8A%E5%A4%B1%E8%B8%AA%23) `87.2K 🔥` `-80%`
1. [九寨沟县发生一起车祸致6死](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E5%8E%BF%E5%8F%91%E7%94%9F%E4%B8%80%E8%B5%B7%E8%BD%A6%E7%A5%B8%E8%87%B46%E6%AD%BB%23) `87.1K 🔥` `-81%`
1. [庄法乘风值倒数第一 (Zhuang Fa Chengfeng ranks last in value)](https://s.weibo.com/weibo?q=%23%E5%BA%84%E6%B3%95%E4%B9%98%E9%A3%8E%E5%80%BC%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%23) `87.1K 🔥` `-80%`
1. [张慧雯孙怡 是妈妈是女儿 (Zhang Huiwen and Sun Yi are mothers and daughters)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E5%AD%99%E6%80%A1%20%E6%98%AF%E5%A6%88%E5%A6%88%E6%98%AF%E5%A5%B3%E5%84%BF%23) `87.1K 🔥` `-80%`
1. [浪姐四公排名 (Ranking of Sister Lang’s Four Young Masters)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%9B%9B%E5%85%AC%E6%8E%92%E5%90%8D%23) `87.1K 🔥` `-81%`
1. [兹维列夫vs科博利](https://s.weibo.com/weibo?q=%23%E5%85%B9%E7%BB%B4%E5%88%97%E5%A4%ABvs%E7%A7%91%E5%8D%9A%E5%88%A9%23) `87.1K 🔥` `-80%`
1. [安崎情商](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E6%83%85%E5%95%86%23) `87.1K 🔥` `-80%`
1. [七根心简2](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%A0%B9%E5%BF%83%E7%AE%802%23) `87.0K 🔥` `-80%`
1. [高考数学](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%95%B0%E5%AD%A6%23) `87.0K 🔥` `-80%`
1. [一定要定期去检查眼睛](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%9A%E8%A6%81%E5%AE%9A%E6%9C%9F%E5%8E%BB%E6%A3%80%E6%9F%A5%E7%9C%BC%E7%9D%9B%23) `87.0K 🔥` `-79%`
1. [关掉朋友圈之后发现自己不爱旅游](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%8E%89%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%B9%8B%E5%90%8E%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E4%B8%8D%E7%88%B1%E6%97%85%E6%B8%B8%23) `87.0K 🔥` `-81%`
1. [法拉利刹车](https://s.weibo.com/weibo?q=%23%E6%B3%95%E6%8B%89%E5%88%A9%E5%88%B9%E8%BD%A6%23) `87.0K 🔥` `-80%`
1. [曾沛慈 残血开大](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E6%AE%8B%E8%A1%80%E5%BC%80%E5%A4%A7%23) `87.0K 🔥` `-79%`
1. [搁浅夯爆了](https://s.weibo.com/weibo?q=%23%E6%90%81%E6%B5%85%E5%A4%AF%E7%88%86%E4%BA%86%23) `86.9K 🔥` `-80%`
1. [谢娜新歌 四川人民不管管吗 (Don’t Sichuan people care about Xie Na’s new song?)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%96%B0%E6%AD%8C%20%E5%9B%9B%E5%B7%9D%E4%BA%BA%E6%B0%91%E4%B8%8D%E7%AE%A1%E7%AE%A1%E5%90%97%23) `86.9K 🔥` `-79%`
1. [周翊然破万神图有了 (Zhou Yiran broke through the Ten Thousand Gods Picture)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%BF%8A%E7%84%B6%E7%A0%B4%E4%B8%87%E7%A5%9E%E5%9B%BE%E6%9C%89%E4%BA%86%23) `86.9K 🔥` `-79%`
1. [安崎问阚清子还会选择那个人吗](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E9%97%AE%E9%98%9A%E6%B8%85%E5%AD%90%E8%BF%98%E4%BC%9A%E9%80%89%E6%8B%A9%E9%82%A3%E4%B8%AA%E4%BA%BA%E5%90%97%23) `86.9K 🔥` `-79%`
1. [朝鲜平壤街头挂起五星红旗 (The five-star red flag hangs on the streets of Pyongyang, North Korea)](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E5%B9%B3%E5%A3%A4%E8%A1%97%E5%A4%B4%E6%8C%82%E8%B5%B7%E4%BA%94%E6%98%9F%E7%BA%A2%E6%97%97%23) `86.9K 🔥` `-80%`
1. [唐艺昕 人怎么能争气成这样](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%20%E4%BA%BA%E6%80%8E%E4%B9%88%E8%83%BD%E4%BA%89%E6%B0%94%E6%88%90%E8%BF%99%E6%A0%B7%23) `86.9K 🔥` `-79%`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `86.8K 🔥` `-79%`
1. [央视曝光小作坊翻新牙刷](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E5%B0%8F%E4%BD%9C%E5%9D%8A%E7%BF%BB%E6%96%B0%E7%89%99%E5%88%B7%23) `86.8K 🔥` `-79%`
1. [被架进考场](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%9E%B6%E8%BF%9B%E8%80%83%E5%9C%BA%23) `86.8K 🔥` `-79%`
1. [陈都灵发了20万红包](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%8F%91%E4%BA%8620%E4%B8%87%E7%BA%A2%E5%8C%85%23) `86.8K 🔥` `-79%`
1. [温峥嵘单膝跪地拉票](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E5%8D%95%E8%86%9D%E8%B7%AA%E5%9C%B0%E6%8B%89%E7%A5%A8%23) `86.8K 🔥` `-80%`
1. [狗子回家高烧三天](https://s.weibo.com/weibo?q=%23%E7%8B%97%E5%AD%90%E5%9B%9E%E5%AE%B6%E9%AB%98%E7%83%A7%E4%B8%89%E5%A4%A9%23) `86.8K 🔥` `-79%`
1. [蔡明为王濛发声](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%98%8E%E4%B8%BA%E7%8E%8B%E6%BF%9B%E5%8F%91%E5%A3%B0%23) `86.7K 🔥` `-79%`
1. [葛军高考数学考了一百零几分 (Ge Jun scored over 100 points in the college entrance examination mathematics test)](https://s.weibo.com/weibo?q=%23%E8%91%9B%E5%86%9B%E9%AB%98%E8%80%83%E6%95%B0%E5%AD%A6%E8%80%83%E4%BA%86%E4%B8%80%E7%99%BE%E9%9B%B6%E5%87%A0%E5%88%86%23) `86.7K 🔥` `-80%`
1. [iPhone用户的崩溃瞬间](https://s.weibo.com/weibo?q=%23iPhone%E7%94%A8%E6%88%B7%E7%9A%84%E5%B4%A9%E6%BA%83%E7%9E%AC%E9%97%B4%23) `86.7K 🔥` `-79%`
1. [我军电子干扰让荷兰军舰变瞎变聋 (Our military's electronic interference caused the Dutch warship to become blind and deaf)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%86%9B%E7%94%B5%E5%AD%90%E5%B9%B2%E6%89%B0%E8%AE%A9%E8%8D%B7%E5%85%B0%E5%86%9B%E8%88%B0%E5%8F%98%E7%9E%8E%E5%8F%98%E8%81%8B%23) `86.7K 🔥` `-79%`
1. [考生体内钢板无法过安检铁骑狂奔补证](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%94%9F%E4%BD%93%E5%86%85%E9%92%A2%E6%9D%BF%E6%97%A0%E6%B3%95%E8%BF%87%E5%AE%89%E6%A3%80%E9%93%81%E9%AA%91%E7%8B%82%E5%A5%94%E8%A1%A5%E8%AF%81%23) `86.6K 🔥` `-80%`

Updated at 2026-06-08 03:09:09

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
