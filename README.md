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

1. [一加15T (OnePlus 15T)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8A%A015T%23) `229.6K 🔥` `NEW`
1. [四川天府机场多名老人扶梯上逆行](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%A4%A9%E5%BA%9C%E6%9C%BA%E5%9C%BA%E5%A4%9A%E5%90%8D%E8%80%81%E4%BA%BA%E6%89%B6%E6%A2%AF%E4%B8%8A%E9%80%86%E8%A1%8C%23) `40.9K 🔥` `NEW`
1. [伊朗革命卫队称美国尚未真正认清其实力](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E7%A7%B0%E7%BE%8E%E5%9B%BD%E5%B0%9A%E6%9C%AA%E7%9C%9F%E6%AD%A3%E8%AE%A4%E6%B8%85%E5%85%B6%E5%AE%9E%E5%8A%9B%23) `40.9K 🔥` `NEW`
1. [李卿 内娱金宣虎](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8D%BF%20%E5%86%85%E5%A8%B1%E9%87%91%E5%AE%A3%E8%99%8E%23) `40.9K 🔥` `NEW`
1. [用侯明昊的歌声打开北京春天](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%BE%AF%E6%98%8E%E6%98%8A%E7%9A%84%E6%AD%8C%E5%A3%B0%E6%89%93%E5%BC%80%E5%8C%97%E4%BA%AC%E6%98%A5%E5%A4%A9%23) `40.9K 🔥` `NEW`
1. [迪士尼十周年受害者](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%8D%81%E5%91%A8%E5%B9%B4%E5%8F%97%E5%AE%B3%E8%80%85%23) `229.3K 🔥` `+311%`
1. [对国内成品油价格采取临时调控 (Adopt temporary controls on domestic refined oil prices)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%9B%BD%E5%86%85%E6%88%90%E5%93%81%E6%B2%B9%E4%BB%B7%E6%A0%BC%E9%87%87%E5%8F%96%E4%B8%B4%E6%97%B6%E8%B0%83%E6%8E%A7%23) `393.8K 🔥` `-49%`
1. [20岁女生长期开灯睡觉胖到200斤](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E5%A5%B3%E7%94%9F%E9%95%BF%E6%9C%9F%E5%BC%80%E7%81%AF%E7%9D%A1%E8%A7%89%E8%83%96%E5%88%B0200%E6%96%A4%23) `294.5K 🔥` `-29%`
1. [梦想的接力最燃](https://s.weibo.com/weibo?q=%23%E6%A2%A6%E6%83%B3%E7%9A%84%E6%8E%A5%E5%8A%9B%E6%9C%80%E7%87%83%23) `230.7K 🔥` `-46%`
1. [长期不换社交头像的人](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%B8%8D%E6%8D%A2%E7%A4%BE%E4%BA%A4%E5%A4%B4%E5%83%8F%E7%9A%84%E4%BA%BA%23) `227.9K 🔥` `-43%`
1. [美伊就中东敌对行动解决方案进行对话](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%B0%B1%E4%B8%AD%E4%B8%9C%E6%95%8C%E5%AF%B9%E8%A1%8C%E5%8A%A8%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E8%BF%9B%E8%A1%8C%E5%AF%B9%E8%AF%9D%23) `224.2K 🔥` `-46%`
1. [朝鲜称与日本没什么可谈的 (North Korea says it has nothing to discuss with Japan)](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E7%A7%B0%E4%B8%8E%E6%97%A5%E6%9C%AC%E6%B2%A1%E4%BB%80%E4%B9%88%E5%8F%AF%E8%B0%88%E7%9A%84%23) `220.8K 🔥` `-59%`
1. [以前看小说vs现在看小说 (Reading novels before vs. reading novels now)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%89%8D%E7%9C%8B%E5%B0%8F%E8%AF%B4vs%E7%8E%B0%E5%9C%A8%E7%9C%8B%E5%B0%8F%E8%AF%B4%23) `220.1K 🔥` `-45%`
1. [逐玉浴池戏](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%B5%B4%E6%B1%A0%E6%88%8F%23) `217.5K 🔥` `-47%`
1. [国乒公布伦敦世乒赛初步参赛名单](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%85%AC%E5%B8%83%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%88%9D%E6%AD%A5%E5%8F%82%E8%B5%9B%E5%90%8D%E5%8D%95%23) `213.7K 🔥` `-49%`
1. [金价急跌原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%80%A5%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `213.0K 🔥` `-46%`
1. [阚清子晒近照](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%99%92%E8%BF%91%E7%85%A7%23) `120.8K 🔥` `-51%`
1. [13年来首次油价调控意味着什么](https://s.weibo.com/weibo?q=%2313%E5%B9%B4%E6%9D%A5%E9%A6%96%E6%AC%A1%E6%B2%B9%E4%BB%B7%E8%B0%83%E6%8E%A7%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `76.7K 🔥` `-62%`
1. [开始推理吧4](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A74%23) `73.9K 🔥` `-30%`
1. [男大学生患桃花癫一周挥霍5万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%82%A3%E6%A1%83%E8%8A%B1%E7%99%AB%E4%B8%80%E5%91%A8%E6%8C%A5%E9%9C%8D5%E4%B8%87%23) `72.7K 🔥` `-46%`
1. [大学是离异性最远的阶段](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E6%98%AF%E7%A6%BB%E5%BC%82%E6%80%A7%E6%9C%80%E8%BF%9C%E7%9A%84%E9%98%B6%E6%AE%B5%23) `70.4K 🔥` `-35%`
1. [周杰伦新专辑太阳之子](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E4%B8%93%E8%BE%91%E5%A4%AA%E9%98%B3%E4%B9%8B%E5%AD%90%23) `60.3K 🔥` `-54%`
1. [美股 (US stocks)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `59.7K 🔥` `-59%`
1. [伊朗否认与美国沟通](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%A6%E8%AE%A4%E4%B8%8E%E7%BE%8E%E5%9B%BD%E6%B2%9F%E9%80%9A%23) `57.8K 🔥` `-60%`
1. [14位美企高管来访商务部排排坐](https://s.weibo.com/weibo?q=%2314%E4%BD%8D%E7%BE%8E%E4%BC%81%E9%AB%98%E7%AE%A1%E6%9D%A5%E8%AE%BF%E5%95%86%E5%8A%A1%E9%83%A8%E6%8E%92%E6%8E%92%E5%9D%90%23) `54.2K 🔥` `-86%`
1. [情侣住酒店正亲密时被员工开窗](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E4%BD%8F%E9%85%92%E5%BA%97%E6%AD%A3%E4%BA%B2%E5%AF%86%E6%97%B6%E8%A2%AB%E5%91%98%E5%B7%A5%E5%BC%80%E7%AA%97%23) `53.7K 🔥` `-50%`
1. [鞠婧祎彩排 (Ju Jingyi rehearsal)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%BD%A9%E6%8E%92%23) `53.2K 🔥` `-56%`
1. [范丞丞直播啃玉米](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%9B%B4%E6%92%AD%E5%95%83%E7%8E%89%E7%B1%B3%23) `52.4K 🔥` `-68%`
1. [误会孙女被打爷爷重伤其同学获刑](https://s.weibo.com/weibo?q=%23%E8%AF%AF%E4%BC%9A%E5%AD%99%E5%A5%B3%E8%A2%AB%E6%89%93%E7%88%B7%E7%88%B7%E9%87%8D%E4%BC%A4%E5%85%B6%E5%90%8C%E5%AD%A6%E8%8E%B7%E5%88%91%23) `51.7K 🔥` `-52%`
1. [aespa全员老吃家](https://s.weibo.com/weibo?q=%23aespa%E5%85%A8%E5%91%98%E8%80%81%E5%90%83%E5%AE%B6%23) `41.2K 🔥` `-22%`
1. [以官员称美伊本周将在巴基斯坦会谈](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%AE%98%E5%91%98%E7%A7%B0%E7%BE%8E%E4%BC%8A%E6%9C%AC%E5%91%A8%E5%B0%86%E5%9C%A8%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E4%BC%9A%E8%B0%88%23) `40.9K 🔥` `-37%`
1. [樊振东获伦敦世乒赛直通资格](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%8E%B7%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E7%9B%B4%E9%80%9A%E8%B5%84%E6%A0%BC%23) `40.9K 🔥` `-57%`
1. [特朗普称美伊已对话](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E4%BC%8A%E5%B7%B2%E5%AF%B9%E8%AF%9D%23) `40.9K 🔥` `-51%`
1. [陈锦鸿把自闭症儿子养成青年钢琴家 (Chen Jinhong raised his autistic son to be a young pianist)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%94%A6%E9%B8%BF%E6%8A%8A%E8%87%AA%E9%97%AD%E7%97%87%E5%84%BF%E5%AD%90%E5%85%BB%E6%88%90%E9%9D%92%E5%B9%B4%E9%92%A2%E7%90%B4%E5%AE%B6%23) `40.9K 🔥` `-37%`
1. [伊朗地下设施堆放一排排导弹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%9C%B0%E4%B8%8B%E8%AE%BE%E6%96%BD%E5%A0%86%E6%94%BE%E4%B8%80%E6%8E%92%E6%8E%92%E5%AF%BC%E5%BC%B9%23) `40.9K 🔥` `-22%`
1. [美国纽约机场接连发生事故](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%BA%BD%E7%BA%A6%E6%9C%BA%E5%9C%BA%E6%8E%A5%E8%BF%9E%E5%8F%91%E7%94%9F%E4%BA%8B%E6%95%85%23) `40.9K 🔥` `-28%`
1. [宫脇咲良取关张元英](https://s.weibo.com/weibo?q=%23%E5%AE%AB%E8%84%87%E5%92%B2%E8%89%AF%E5%8F%96%E5%85%B3%E5%BC%A0%E5%85%83%E8%8B%B1%23) `40.9K 🔥` `-37%`
1. [张凌赫出发录开始推理吧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%87%BA%E5%8F%91%E5%BD%95%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A7%23) `40.9K 🔥` `-22%`
1. [伊朗称特朗普推迟袭击表态为心理战](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%89%B9%E6%9C%97%E6%99%AE%E6%8E%A8%E8%BF%9F%E8%A2%AD%E5%87%BB%E8%A1%A8%E6%80%81%E4%B8%BA%E5%BF%83%E7%90%86%E6%88%98%23) `40.9K 🔥` `-22%`
1. [上过跑男的团体都解散了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E8%BF%87%E8%B7%91%E7%94%B7%E7%9A%84%E5%9B%A2%E4%BD%93%E9%83%BD%E8%A7%A3%E6%95%A3%E4%BA%86%23) `40.9K 🔥` `-37%`
1. [杨洋手部又受伤了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%89%8B%E9%83%A8%E5%8F%88%E5%8F%97%E4%BC%A4%E4%BA%86%23) `40.9K 🔥` `-31%`
1. [瞿颖吃火锅挺废人的 (Qu Ying is quite useless when eating hot pot.)](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E5%90%83%E7%81%AB%E9%94%85%E6%8C%BA%E5%BA%9F%E4%BA%BA%E7%9A%84%23) `40.9K 🔥` `-37%`
1. [开始推理吧](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A7%23) `40.9K 🔥` `-36%`
1. [张家齐说直播带货不是天才的陨落](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%AF%B4%E7%9B%B4%E6%92%AD%E5%B8%A6%E8%B4%A7%E4%B8%8D%E6%98%AF%E5%A4%A9%E6%89%8D%E7%9A%84%E9%99%A8%E8%90%BD%23) `40.9K 🔥` `-37%`
1. [猫咪带娃也崩溃 (Cat collapses even with baby)](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E5%B8%A6%E5%A8%83%E4%B9%9F%E5%B4%A9%E6%BA%83%23) `40.9K 🔥` `-22%`
1. [我洗头后三天的头发蓬松程度 (The volume of my hair three days after washing it)](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%B4%97%E5%A4%B4%E5%90%8E%E4%B8%89%E5%A4%A9%E7%9A%84%E5%A4%B4%E5%8F%91%E8%93%AC%E6%9D%BE%E7%A8%8B%E5%BA%A6%23) `40.9K 🔥` `-22%`
1. [左奇函两只小狗](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E4%B8%A4%E5%8F%AA%E5%B0%8F%E7%8B%97%23) `40.9K 🔥` `-22%`
1. [为什么我们要多吃水果 (Why we should eat more fruits)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%91%E4%BB%AC%E8%A6%81%E5%A4%9A%E5%90%83%E6%B0%B4%E6%9E%9C%23) `40.9K 🔥` `-22%`
1. [齐俞 齐煜](https://s.weibo.com/weibo?q=%23%E9%BD%90%E4%BF%9E%20%E9%BD%90%E7%85%9C%23) `40.9K 🔥` `-22%`
1. [老挝1千余辆电动车15天售罄](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%8C%9D1%E5%8D%83%E4%BD%99%E8%BE%86%E7%94%B5%E5%8A%A8%E8%BD%A615%E5%A4%A9%E5%94%AE%E7%BD%84%23) `40.9K 🔥` `-22%`
1. [逐玉第二](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%AC%AC%E4%BA%8C%23) `40.9K 🔥` `-23%`

Updated at 2026-03-24 01:33:10

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
