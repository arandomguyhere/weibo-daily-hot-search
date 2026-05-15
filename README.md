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

1. [央视已获世界杯转播权 (CCTV has won the rights to broadcast the World Cup)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E5%B7%B2%E8%8E%B7%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `12.2M 🔥` `NEW`
1. [央视6000万美元拿下世界杯版权](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%866000%E4%B8%87%E7%BE%8E%E5%85%83%E6%8B%BF%E4%B8%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E7%89%88%E6%9D%83%23) `3.8M 🔥` `NEW`
1. [王力宏腾势汽车品牌全球代言人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E8%85%BE%E5%8A%BF%E6%B1%BD%E8%BD%A6%E5%93%81%E7%89%8C%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `1.5M 🔥` `NEW`
1. [鹿晗这就是京圈佛子吗](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%BF%99%E5%B0%B1%E6%98%AF%E4%BA%AC%E5%9C%88%E4%BD%9B%E5%AD%90%E5%90%97%23) `1.4M 🔥` `NEW`
1. [央视一次拿下4届世界杯转播权](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E4%B8%80%E6%AC%A1%E6%8B%BF%E4%B8%8B4%E5%B1%8A%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `846.4K 🔥` `NEW`
1. [迪奥二零二七早春秀](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A5%A5%E4%BA%8C%E9%9B%B6%E4%BA%8C%E4%B8%83%E6%97%A9%E6%98%A5%E7%A7%80%23) `661.1K 🔥` `NEW`
1. [央视感谢全国网友支持](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%84%9F%E8%B0%A2%E5%85%A8%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%94%AF%E6%8C%81%23) `496.8K 🔥` `NEW`
1. [李小冉回应母校玩梗](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%9B%9E%E5%BA%94%E6%AF%8D%E6%A0%A1%E7%8E%A9%E6%A2%97%23) `492.4K 🔥` `NEW`
1. [温岚 败血症](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B2%9A%20%E8%B4%A5%E8%A1%80%E7%97%87%23) `470.8K 🔥` `NEW`
1. [孙颖莎正装](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%AD%A3%E8%A3%85%23) `447.7K 🔥` `NEW`
1. [一只熊吃掉了40磅冰淇淋后昏迷了两天 (Bear comatose for two days after eating 40 pounds of ice cream)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8F%AA%E7%86%8A%E5%90%83%E6%8E%89%E4%BA%8640%E7%A3%85%E5%86%B0%E6%B7%87%E6%B7%8B%E5%90%8E%E6%98%8F%E8%BF%B7%E4%BA%86%E4%B8%A4%E5%A4%A9%23) `425.7K 🔥` `NEW`
1. [李想称有人摸着理想过河](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%83%B3%E7%A7%B0%E6%9C%89%E4%BA%BA%E6%91%B8%E7%9D%80%E7%90%86%E6%83%B3%E8%BF%87%E6%B2%B3%23) `339.6K 🔥` `NEW`
1. [阿雅回应视频抄袭](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%9B%85%E5%9B%9E%E5%BA%94%E8%A7%86%E9%A2%91%E6%8A%84%E8%A2%AD%23) `337.5K 🔥` `NEW`
1. [蒋毅老婆发文喊话蒋毅赵樱子](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AF%85%E8%80%81%E5%A9%86%E5%8F%91%E6%96%87%E5%96%8A%E8%AF%9D%E8%92%8B%E6%AF%85%E8%B5%B5%E6%A8%B1%E5%AD%90%23) `334.7K 🔥` `NEW`
1. [在上海蚊子太多可以打12320](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%B8%8A%E6%B5%B7%E8%9A%8A%E5%AD%90%E5%A4%AA%E5%A4%9A%E5%8F%AF%E4%BB%A5%E6%89%9312320%23) `329.5K 🔥` `NEW`
1. [王楚钦正装贵公子造型](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%AD%A3%E8%A3%85%E8%B4%B5%E5%85%AC%E5%AD%90%E9%80%A0%E5%9E%8B%23) `263.1K 🔥` `NEW`
1. [李纯让马頔求婚避开音乐节](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BA%AF%E8%AE%A9%E9%A9%AC%E9%A0%94%E6%B1%82%E5%A9%9A%E9%81%BF%E5%BC%80%E9%9F%B3%E4%B9%90%E8%8A%82%23) `262.6K 🔥` `NEW`
1. [2025年平均工资出炉](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E5%B9%B3%E5%9D%87%E5%B7%A5%E8%B5%84%E5%87%BA%E7%82%89%23) `223.2K 🔥` `NEW`
1. [中方回应特朗普社媒言论](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E7%A4%BE%E5%AA%92%E8%A8%80%E8%AE%BA%23) `219.8K 🔥` `NEW`
1. [方媛没见过年轻的郭富城](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E6%B2%A1%E8%A7%81%E8%BF%87%E5%B9%B4%E8%BD%BB%E7%9A%84%E9%83%AD%E5%AF%8C%E5%9F%8E%23) `218.0K 🔥` `NEW`
1. [白鹿掀帘子出场美一大跳 (White Deer lifts the curtain and makes a stunning appearance)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%8E%80%E5%B8%98%E5%AD%90%E5%87%BA%E5%9C%BA%E7%BE%8E%E4%B8%80%E5%A4%A7%E8%B7%B3%23) `184.2K 🔥` `NEW`
1. [金莎上车不化妆不照镜子必在生气](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E4%B8%8A%E8%BD%A6%E4%B8%8D%E5%8C%96%E5%A6%86%E4%B8%8D%E7%85%A7%E9%95%9C%E5%AD%90%E5%BF%85%E5%9C%A8%E7%94%9F%E6%B0%94%23) `154.6K 🔥` `NEW`
1. [方媛说自己18岁就经济独立了](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E8%AF%B4%E8%87%AA%E5%B7%B118%E5%B2%81%E5%B0%B1%E7%BB%8F%E6%B5%8E%E7%8B%AC%E7%AB%8B%E4%BA%86%23) `154.3K 🔥` `NEW`
1. [人生能随机到什么程度](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E8%83%BD%E9%9A%8F%E6%9C%BA%E5%88%B0%E4%BB%80%E4%B9%88%E7%A8%8B%E5%BA%A6%23) `153.1K 🔥` `NEW`
1. [白鹿出发邯郸](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%87%BA%E5%8F%91%E9%82%AF%E9%83%B8%23) `150.5K 🔥` `NEW`
1. [智界V9行业首次110时速高速碰撞](https://s.weibo.com/weibo?q=%23%E6%99%BA%E7%95%8CV9%E8%A1%8C%E4%B8%9A%E9%A6%96%E6%AC%A1110%E6%97%B6%E9%80%9F%E9%AB%98%E9%80%9F%E7%A2%B0%E6%92%9E%23) `130.3K 🔥` `NEW`
1. [主角被逼成配角了](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E8%A2%AB%E9%80%BC%E6%88%90%E9%85%8D%E8%A7%92%E4%BA%86%23) `130.0K 🔥` `NEW`
1. [TF四代coverTXT](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3coverTXT%23) `125.9K 🔥` `NEW`
1. [韩国股市熔断后暴跌7%](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E5%B8%82%E7%86%94%E6%96%AD%E5%90%8E%E6%9A%B4%E8%B7%8C7%25%23) `122.2K 🔥` `NEW`
1. [张怡宁为梯队建设选择退役](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%80%A1%E5%AE%81%E4%B8%BA%E6%A2%AF%E9%98%9F%E5%BB%BA%E8%AE%BE%E9%80%89%E6%8B%A9%E9%80%80%E5%BD%B9%23) `118.5K 🔥` `NEW`
1. [跨越太平洋的握手 (A handshake across the Pacific)](https://s.weibo.com/weibo?q=%23%E8%B7%A8%E8%B6%8A%E5%A4%AA%E5%B9%B3%E6%B4%8B%E7%9A%84%E6%8F%A1%E6%89%8B%23) `1.7M 🔥` `+22%`
1. [容易紧张是缺乏主体性](https://s.weibo.com/weibo?q=%23%E5%AE%B9%E6%98%93%E7%B4%A7%E5%BC%A0%E6%98%AF%E7%BC%BA%E4%B9%8F%E4%B8%BB%E4%BD%93%E6%80%A7%23) `483.8K 🔥` `+24%`
1. [二孩家庭买SUV还是买MPV](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E5%AD%A9%E5%AE%B6%E5%BA%AD%E4%B9%B0SUV%E8%BF%98%E6%98%AF%E4%B9%B0MPV%23) `477.3K 🔥` `+125%`
1. [横店的剧组快灭亡了](https://s.weibo.com/weibo?q=%23%E6%A8%AA%E5%BA%97%E7%9A%84%E5%89%A7%E7%BB%84%E5%BF%AB%E7%81%AD%E4%BA%A1%E4%BA%86%23) `461.4K 🔥` `+22%`
1. [特朗普说能待得惯可能都不想走了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E8%83%BD%E5%BE%85%E5%BE%97%E6%83%AF%E5%8F%AF%E8%83%BD%E9%83%BD%E4%B8%8D%E6%83%B3%E8%B5%B0%E4%BA%86%23) `450.5K 🔥` `+103%`
1. [阿雅视频抄袭 (Aya video plagiarism)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%9B%85%E8%A7%86%E9%A2%91%E6%8A%84%E8%A2%AD%23) `437.7K 🔥`
1. [白宫发布中国仪仗队画面](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E5%8F%91%E5%B8%83%E4%B8%AD%E5%9B%BD%E4%BB%AA%E4%BB%97%E9%98%9F%E7%94%BB%E9%9D%A2%23) `421.7K 🔥`
1. [温岚在ICU接受治疗](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B2%9A%E5%9C%A8ICU%E6%8E%A5%E5%8F%97%E6%B2%BB%E7%96%97%23) `329.0K 🔥`
1. [特朗普离京现场的中国军人](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A6%BB%E4%BA%AC%E7%8E%B0%E5%9C%BA%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%86%9B%E4%BA%BA%23) `313.5K 🔥`
1. [特朗普结束访华 (Trump ends visit to China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%BB%93%E6%9D%9F%E8%AE%BF%E5%8D%8E%23) `957.8K 🔥` `-90%`
1. [曝杨幂杨紫白玉兰二选一提名](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%A8%E5%B9%82%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E4%BA%8C%E9%80%89%E4%B8%80%E6%8F%90%E5%90%8D%23) `342.3K 🔥` `-52%`
1. [白玉兰评委名单](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E8%AF%84%E5%A7%94%E5%90%8D%E5%8D%95%23) `242.9K 🔥` `-50%`
1. [中美元首边走边谈 (The heads of state of China and the United States walked and talked)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E8%BE%B9%E8%B5%B0%E8%BE%B9%E8%B0%88%23) `226.9K 🔥` `-87%`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `221.1K 🔥` `-29%`
1. [女子拼死留住的巴掌双胞胎1岁半了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8B%BC%E6%AD%BB%E7%95%99%E4%BD%8F%E7%9A%84%E5%B7%B4%E6%8E%8C%E5%8F%8C%E8%83%9E%E8%83%8E1%E5%B2%81%E5%8D%8A%E4%BA%86%23) `162.1K 🔥` `-52%`
1. [特朗普离京 (Trump leaves Beijing)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A6%BB%E4%BA%AC%23) `140.0K 🔥` `-55%`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `137.9K 🔥` `-61%`
1. [特朗普说中国军人棒极了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%B8%AD%E5%9B%BD%E5%86%9B%E4%BA%BA%E6%A3%92%E6%9E%81%E4%BA%86%23) `131.3K 🔥` `-38%`
1. [毛利兰声优去世 (Mao Lilan voice actor passed away)](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E5%88%A9%E5%85%B0%E5%A3%B0%E4%BC%98%E5%8E%BB%E4%B8%96%23) `121.1K 🔥` `-54%`
1. [张元英无眼妆封面](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E6%97%A0%E7%9C%BC%E5%A6%86%E5%B0%81%E9%9D%A2%23) `118.1K 🔥` `-44%`
1. [痞幼脱鞋与毛巾二叔合照](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E8%84%B1%E9%9E%8B%E4%B8%8E%E6%AF%9B%E5%B7%BE%E4%BA%8C%E5%8F%94%E5%90%88%E7%85%A7%23) `116.3K 🔥` `-63%`
1. [男生偷拍女同学私密视频后校内传播](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E5%81%B7%E6%8B%8D%E5%A5%B3%E5%90%8C%E5%AD%A6%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91%E5%90%8E%E6%A0%A1%E5%86%85%E4%BC%A0%E6%92%AD%23) `113.3K 🔥` `-47%`

Updated at 2026-05-15 18:59:45

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
