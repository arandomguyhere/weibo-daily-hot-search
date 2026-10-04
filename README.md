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

1. [大冰直播回应男子想挽回离婚妻子](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E7%9B%B4%E6%92%AD%E5%9B%9E%E5%BA%94%E7%94%B7%E5%AD%90%E6%83%B3%E6%8C%BD%E5%9B%9E%E7%A6%BB%E5%A9%9A%E5%A6%BB%E5%AD%90%23) `116.2K 🔥` `NEW`
1. [24岁女生吃2小时自助餐被送急诊](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E7%94%9F%E5%90%832%E5%B0%8F%E6%97%B6%E8%87%AA%E5%8A%A9%E9%A4%90%E8%A2%AB%E9%80%81%E6%80%A5%E8%AF%8A%23) `79.4K 🔥` `NEW`
1. [中网](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BD%91%23) `79.0K 🔥` `NEW`
1. [李勒优 接受一切事与愿违](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%20%E6%8E%A5%E5%8F%97%E4%B8%80%E5%88%87%E4%BA%8B%E4%B8%8E%E6%84%BF%E8%BF%9D%23) `78.6K 🔥` `NEW`
1. [闪身步都火到国外了](https://s.weibo.com/weibo?q=%23%E9%97%AA%E8%BA%AB%E6%AD%A5%E9%83%BD%E7%81%AB%E5%88%B0%E5%9B%BD%E5%A4%96%E4%BA%86%23) `78.4K 🔥` `NEW`
1. [一诺达成联赛3600击杀](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E8%BE%BE%E6%88%90%E8%81%94%E8%B5%9B3600%E5%87%BB%E6%9D%80%23) `78.2K 🔥` `NEW`
1. [网友称联系朋友只为找优越感](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%A7%B0%E8%81%94%E7%B3%BB%E6%9C%8B%E5%8F%8B%E5%8F%AA%E4%B8%BA%E6%89%BE%E4%BC%98%E8%B6%8A%E6%84%9F%23) `78.1K 🔥` `NEW`
1. [德约科维奇中网神仙球](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%BA%A6%E7%A7%91%E7%BB%B4%E5%A5%87%E4%B8%AD%E7%BD%91%E7%A5%9E%E4%BB%99%E7%90%83%23) `78.0K 🔥` `NEW`
1. [长江的鱼多到成为四川景点](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B1%9F%E7%9A%84%E9%B1%BC%E5%A4%9A%E5%88%B0%E6%88%90%E4%B8%BA%E5%9B%9B%E5%B7%9D%E6%99%AF%E7%82%B9%23) `78.6K 🔥`
1. [鞠婧祎曾舜晞 七星彩](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%9B%BE%E8%88%9C%E6%99%9E%20%E4%B8%83%E6%98%9F%E5%BD%A9%23) `78.3K 🔥`
1. [年轻人开始不买景区冤种三件套了](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E4%B8%8D%E4%B9%B0%E6%99%AF%E5%8C%BA%E5%86%A4%E7%A7%8D%E4%B8%89%E4%BB%B6%E5%A5%97%E4%BA%86%23) `278.6K 🔥` `-60%`
1. [超10万份孕妇血样被偷运出境](https://s.weibo.com/weibo?q=%23%E8%B6%8510%E4%B8%87%E4%BB%BD%E5%AD%95%E5%A6%87%E8%A1%80%E6%A0%B7%E8%A2%AB%E5%81%B7%E8%BF%90%E5%87%BA%E5%A2%83%23) `183.9K 🔥` `-81%`
1. [中国红闪耀亚运闭幕式](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BA%A2%E9%97%AA%E8%80%80%E4%BA%9A%E8%BF%90%E9%97%AD%E5%B9%95%E5%BC%8F%23) `142.3K 🔥` `-74%`
1. [蔡康永现身台独分子竞选会场](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%E7%8E%B0%E8%BA%AB%E5%8F%B0%E7%8B%AC%E5%88%86%E5%AD%90%E7%AB%9E%E9%80%89%E4%BC%9A%E5%9C%BA%23) `134.9K 🔥` `-75%`
1. [崔晋 李勒优](https://s.weibo.com/weibo?q=%23%E5%B4%94%E6%99%8B%20%E6%9D%8E%E5%8B%92%E4%BC%98%23) `92.7K 🔥` `-79%`
1. [兰香如故我妻子竟然是我妻子](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E6%88%91%E5%A6%BB%E5%AD%90%E7%AB%9F%E7%84%B6%E6%98%AF%E6%88%91%E5%A6%BB%E5%AD%90%23) `87.9K 🔥` `-76%`
1. [李勒优说没有一个地方是属于我的归属](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E8%AF%B4%E6%B2%A1%E6%9C%89%E4%B8%80%E4%B8%AA%E5%9C%B0%E6%96%B9%E6%98%AF%E5%B1%9E%E4%BA%8E%E6%88%91%E7%9A%84%E5%BD%92%E5%B1%9E%23) `87.9K 🔥` `-76%`
1. [国庆反向旅游迎来新变化](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E5%8F%8D%E5%90%91%E6%97%85%E6%B8%B8%E8%BF%8E%E6%9D%A5%E6%96%B0%E5%8F%98%E5%8C%96%23) `87.3K 🔥` `-77%`
1. [高市早苗称已向美国提出强烈抗议](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E7%A7%B0%E5%B7%B2%E5%90%91%E7%BE%8E%E5%9B%BD%E6%8F%90%E5%87%BA%E5%BC%BA%E7%83%88%E6%8A%97%E8%AE%AE%23) `86.9K 🔥` `-42%`
1. [教你一招彻底删除隐私记录](https://s.weibo.com/weibo?q=%23%E6%95%99%E4%BD%A0%E4%B8%80%E6%8B%9B%E5%BD%BB%E5%BA%95%E5%88%A0%E9%99%A4%E9%9A%90%E7%A7%81%E8%AE%B0%E5%BD%95%23) `85.4K 🔥` `-46%`
1. [蔡康永 零跑汽车](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%20%E9%9B%B6%E8%B7%91%E6%B1%BD%E8%BD%A6%23) `84.1K 🔥` `-77%`
1. [蔡康永](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%23) `83.4K 🔥` `-77%`
1. [女特警礼貌拒绝老外过于热情的动作](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%89%B9%E8%AD%A6%E7%A4%BC%E8%B2%8C%E6%8B%92%E7%BB%9D%E8%80%81%E5%A4%96%E8%BF%87%E4%BA%8E%E7%83%AD%E6%83%85%E7%9A%84%E5%8A%A8%E4%BD%9C%23) `82.7K 🔥` `-76%`
1. [康康 EDG](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E5%BA%B7%20EDG%23) `79.6K 🔥` `-82%`
1. [研二女生坠楼疑因导师压力](https://s.weibo.com/weibo?q=%23%E7%A0%94%E4%BA%8C%E5%A5%B3%E7%94%9F%E5%9D%A0%E6%A5%BC%E7%96%91%E5%9B%A0%E5%AF%BC%E5%B8%88%E5%8E%8B%E5%8A%9B%23) `79.6K 🔥` `-44%`
1. [王祖贤大粉脱粉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%96%E8%B4%A4%E5%A4%A7%E7%B2%89%E8%84%B1%E7%B2%89%23) `79.5K 🔥` `-62%`
1. [带小孩不要坐商务座](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E5%B0%8F%E5%AD%A9%E4%B8%8D%E8%A6%81%E5%9D%90%E5%95%86%E5%8A%A1%E5%BA%A7%23) `79.5K 🔥` `-64%`
1. [晋妈称感谢崔晋而非李勒优](https://s.weibo.com/weibo?q=%23%E6%99%8B%E5%A6%88%E7%A7%B0%E6%84%9F%E8%B0%A2%E5%B4%94%E6%99%8B%E8%80%8C%E9%9D%9E%E6%9D%8E%E5%8B%92%E4%BC%98%23) `79.4K 🔥` `-62%`
1. [疑似王橹杰B站浏览记录](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%8E%8B%E6%A9%B9%E6%9D%B0B%E7%AB%99%E6%B5%8F%E8%A7%88%E8%AE%B0%E5%BD%95%23) `79.3K 🔥` `-63%`
1. [任嘉伦 红果短剧](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%20%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%23) `79.3K 🔥` `-72%`
1. [内娱请停止老头综艺](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E8%AF%B7%E5%81%9C%E6%AD%A2%E8%80%81%E5%A4%B4%E7%BB%BC%E8%89%BA%23) `79.3K 🔥` `-63%`
1. [男生描述喜欢的女生很少提性格](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%8F%8F%E8%BF%B0%E5%96%9C%E6%AC%A2%E7%9A%84%E5%A5%B3%E7%94%9F%E5%BE%88%E5%B0%91%E6%8F%90%E6%80%A7%E6%A0%BC%23) `79.2K 🔥` `-48%`
1. [跳水金牌榜张家齐排在第四](https://s.weibo.com/weibo?q=%23%E8%B7%B3%E6%B0%B4%E9%87%91%E7%89%8C%E6%A6%9C%E5%BC%A0%E5%AE%B6%E9%BD%90%E6%8E%92%E5%9C%A8%E7%AC%AC%E5%9B%9B%23) `79.1K 🔥` `-44%`
1. [江苏惊现日本小镰仓](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E6%83%8A%E7%8E%B0%E6%97%A5%E6%9C%AC%E5%B0%8F%E9%95%B0%E4%BB%93%23) `79.1K 🔥` `-47%`
1. [高知家庭养出营养不良娃](https://s.weibo.com/weibo?q=%23%E9%AB%98%E7%9F%A5%E5%AE%B6%E5%BA%AD%E5%85%BB%E5%87%BA%E8%90%A5%E5%85%BB%E4%B8%8D%E8%89%AF%E5%A8%83%23) `79.1K 🔥` `-57%`
1. [猴子帮女子摘苍耳一脸嫌弃](https://s.weibo.com/weibo?q=%23%E7%8C%B4%E5%AD%90%E5%B8%AE%E5%A5%B3%E5%AD%90%E6%91%98%E8%8B%8D%E8%80%B3%E4%B8%80%E8%84%B8%E5%AB%8C%E5%BC%83%23) `79.0K 🔥` `-62%`
1. [AG战胜RW](https://s.weibo.com/weibo?q=%23AG%E6%88%98%E8%83%9CRW%23) `78.9K 🔥` `-49%`
1. [王橹杰B站账号澄清](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0B%E7%AB%99%E8%B4%A6%E5%8F%B7%E6%BE%84%E6%B8%85%23) `78.8K 🔥` `-47%`
1. [主角被夺舍亲近之人怎会看不出](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E8%A2%AB%E5%A4%BA%E8%88%8D%E4%BA%B2%E8%BF%91%E4%B9%8B%E4%BA%BA%E6%80%8E%E4%BC%9A%E7%9C%8B%E4%B8%8D%E5%87%BA%23) `78.8K 🔥` `-49%`
1. [张家齐为我的乳腺负责了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E4%B8%BA%E6%88%91%E7%9A%84%E4%B9%B3%E8%85%BA%E8%B4%9F%E8%B4%A3%E4%BA%86%23) `78.7K 🔥` `-42%`
1. [华伦天奴大秀](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BC%A6%E5%A4%A9%E5%A5%B4%E5%A4%A7%E7%A7%80%23) `78.7K 🔥` `-35%`
1. [刘雯亮相MiuMiu春夏秀](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E4%BA%AE%E7%9B%B8MiuMiu%E6%98%A5%E5%A4%8F%E7%A7%80%23) `78.5K 🔥` `-42%`
1. [韩路称烤串店开业遭遇新型骚扰](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%B7%AF%E7%A7%B0%E7%83%A4%E4%B8%B2%E5%BA%97%E5%BC%80%E4%B8%9A%E9%81%AD%E9%81%87%E6%96%B0%E5%9E%8B%E9%AA%9A%E6%89%B0%23) `78.5K 🔥` `-21%`
1. [胖东来被指招聘性别歧视](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%A2%AB%E6%8C%87%E6%8B%9B%E8%81%98%E6%80%A7%E5%88%AB%E6%AD%A7%E8%A7%86%23) `78.4K 🔥` `-64%`
1. [一诺艾琳三连决胜](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E8%89%BE%E7%90%B3%E4%B8%89%E8%BF%9E%E5%86%B3%E8%83%9C%23) `78.4K 🔥` `-35%`
1. [檀健次生日工作室发文](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%94%9F%E6%97%A5%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E6%96%87%23) `78.2K 🔥` `-47%`
1. [四川地震](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87%23) `78.1K 🔥` `-64%`
1. [吴宜泽再夺一冠](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD%E5%86%8D%E5%A4%BA%E4%B8%80%E5%86%A0%23) `78.0K 🔥` `-51%`

Updated at 2026-10-05 04:06:07

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
