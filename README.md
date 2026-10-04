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

1. [超10万份孕妇血样被偷运出境](https://s.weibo.com/weibo?q=%23%E8%B6%8510%E4%B8%87%E4%BB%BD%E5%AD%95%E5%A6%87%E8%A1%80%E6%A0%B7%E8%A2%AB%E5%81%B7%E8%BF%90%E5%87%BA%E5%A2%83%23) `960.8K 🔥` `NEW`
1. [年轻人开始不买景区冤种三件套了](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E4%B8%8D%E4%B9%B0%E6%99%AF%E5%8C%BA%E5%86%A4%E7%A7%8D%E4%B8%89%E4%BB%B6%E5%A5%97%E4%BA%86%23) `688.9K 🔥` `NEW`
1. [中国红闪耀亚运闭幕式](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BA%A2%E9%97%AA%E8%80%80%E4%BA%9A%E8%BF%90%E9%97%AD%E5%B9%95%E5%BC%8F%23) `553.7K 🔥` `NEW`
1. [蔡康永现身台独分子竞选会场](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%E7%8E%B0%E8%BA%AB%E5%8F%B0%E7%8B%AC%E5%88%86%E5%AD%90%E7%AB%9E%E9%80%89%E4%BC%9A%E5%9C%BA%23) `548.6K 🔥` `NEW`
1. [康康 EDG](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E5%BA%B7%20EDG%23) `452.9K 🔥` `NEW`
1. [崔晋 李勒优](https://s.weibo.com/weibo?q=%23%E5%B4%94%E6%99%8B%20%E6%9D%8E%E5%8B%92%E4%BC%98%23) `435.8K 🔥` `NEW`
1. [国庆反向旅游迎来新变化](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E5%8F%8D%E5%90%91%E6%97%85%E6%B8%B8%E8%BF%8E%E6%9D%A5%E6%96%B0%E5%8F%98%E5%8C%96%23) `380.9K 🔥` `NEW`
1. [李勒优说没有一个地方是属于我的归属](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E8%AF%B4%E6%B2%A1%E6%9C%89%E4%B8%80%E4%B8%AA%E5%9C%B0%E6%96%B9%E6%98%AF%E5%B1%9E%E4%BA%8E%E6%88%91%E7%9A%84%E5%BD%92%E5%B1%9E%23) `372.6K 🔥` `NEW`
1. [兰香如故我妻子竟然是我妻子](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E6%88%91%E5%A6%BB%E5%AD%90%E7%AB%9F%E7%84%B6%E6%98%AF%E6%88%91%E5%A6%BB%E5%AD%90%23) `368.8K 🔥` `NEW`
1. [蔡康永 零跑汽车](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%20%E9%9B%B6%E8%B7%91%E6%B1%BD%E8%BD%A6%23) `362.1K 🔥` `NEW`
1. [蔡康永](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%23) `356.6K 🔥` `NEW`
1. [女特警礼貌拒绝老外过于热情的动作](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%89%B9%E8%AD%A6%E7%A4%BC%E8%B2%8C%E6%8B%92%E7%BB%9D%E8%80%81%E5%A4%96%E8%BF%87%E4%BA%8E%E7%83%AD%E6%83%85%E7%9A%84%E5%8A%A8%E4%BD%9C%23) `350.6K 🔥` `NEW`
1. [任嘉伦 红果短剧](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%20%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%23) `280.3K 🔥` `NEW`
1. [国庆景区热度前10被小城包揽](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E6%99%AF%E5%8C%BA%E7%83%AD%E5%BA%A6%E5%89%8D10%E8%A2%AB%E5%B0%8F%E5%9F%8E%E5%8C%85%E6%8F%BD%23) `223.4K 🔥` `NEW`
1. [首尔大规模示威反对李在明](https://s.weibo.com/weibo?q=%23%E9%A6%96%E5%B0%94%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%A4%BA%E5%A8%81%E5%8F%8D%E5%AF%B9%E6%9D%8E%E5%9C%A8%E6%98%8E%23) `222.7K 🔥` `NEW`
1. [胖东来被指招聘性别歧视](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%A2%AB%E6%8C%87%E6%8B%9B%E8%81%98%E6%80%A7%E5%88%AB%E6%AD%A7%E8%A7%86%23) `220.4K 🔥` `NEW`
1. [带小孩不要坐商务座](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E5%B0%8F%E5%AD%A9%E4%B8%8D%E8%A6%81%E5%9D%90%E5%95%86%E5%8A%A1%E5%BA%A7%23) `219.7K 🔥` `NEW`
1. [四川地震](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87%23) `217.6K 🔥` `NEW`
1. [疑似王橹杰B站浏览记录](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%8E%8B%E6%A9%B9%E6%9D%B0B%E7%AB%99%E6%B5%8F%E8%A7%88%E8%AE%B0%E5%BD%95%23) `215.5K 🔥` `NEW`
1. [内娱请停止老头综艺](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E8%AF%B7%E5%81%9C%E6%AD%A2%E8%80%81%E5%A4%B4%E7%BB%BC%E8%89%BA%23) `212.4K 🔥` `NEW`
1. [猴子帮女子摘苍耳一脸嫌弃](https://s.weibo.com/weibo?q=%23%E7%8C%B4%E5%AD%90%E5%B8%AE%E5%A5%B3%E5%AD%90%E6%91%98%E8%8B%8D%E8%80%B3%E4%B8%80%E8%84%B8%E5%AB%8C%E5%BC%83%23) `209.9K 🔥` `NEW`
1. [晋妈称感谢崔晋而非李勒优](https://s.weibo.com/weibo?q=%23%E6%99%8B%E5%A6%88%E7%A7%B0%E6%84%9F%E8%B0%A2%E5%B4%94%E6%99%8B%E8%80%8C%E9%9D%9E%E6%9D%8E%E5%8B%92%E4%BC%98%23) `208.9K 🔥` `NEW`
1. [王祖贤大粉脱粉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%96%E8%B4%A4%E5%A4%A7%E7%B2%89%E8%84%B1%E7%B2%89%23) `207.3K 🔥` `NEW`
1. [高知家庭养出营养不良娃](https://s.weibo.com/weibo?q=%23%E9%AB%98%E7%9F%A5%E5%AE%B6%E5%BA%AD%E5%85%BB%E5%87%BA%E8%90%A5%E5%85%BB%E4%B8%8D%E8%89%AF%E5%A8%83%23) `184.8K 🔥` `NEW`
1. [一诺采访](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E9%87%87%E8%AE%BF%23) `160.4K 🔥` `NEW`
1. [教你一招彻底删除隐私记录](https://s.weibo.com/weibo?q=%23%E6%95%99%E4%BD%A0%E4%B8%80%E6%8B%9B%E5%BD%BB%E5%BA%95%E5%88%A0%E9%99%A4%E9%9A%90%E7%A7%81%E8%AE%B0%E5%BD%95%23) `159.5K 🔥` `NEW`
1. [吴宜泽再夺一冠](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD%E5%86%8D%E5%A4%BA%E4%B8%80%E5%86%A0%23) `158.7K 🔥` `NEW`
1. [德约阻止兹维列夫冲击世界第一](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%BA%A6%E9%98%BB%E6%AD%A2%E5%85%B9%E7%BB%B4%E5%88%97%E5%A4%AB%E5%86%B2%E5%87%BB%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23) `156.1K 🔥` `NEW`
1. [主角被夺舍亲近之人怎会看不出](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E8%A2%AB%E5%A4%BA%E8%88%8D%E4%BA%B2%E8%BF%91%E4%B9%8B%E4%BA%BA%E6%80%8E%E4%BC%9A%E7%9C%8B%E4%B8%8D%E5%87%BA%23) `155.5K 🔥` `NEW`
1. [AG战胜RW](https://s.weibo.com/weibo?q=%23AG%E6%88%98%E8%83%9CRW%23) `153.5K 🔥` `NEW`
1. [男生描述喜欢的女生很少提性格](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%8F%8F%E8%BF%B0%E5%96%9C%E6%AC%A2%E7%9A%84%E5%A5%B3%E7%94%9F%E5%BE%88%E5%B0%91%E6%8F%90%E6%80%A7%E6%A0%BC%23) `152.4K 🔥` `NEW`
1. [高市早苗称已向美国提出强烈抗议](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E7%A7%B0%E5%B7%B2%E5%90%91%E7%BE%8E%E5%9B%BD%E6%8F%90%E5%87%BA%E5%BC%BA%E7%83%88%E6%8A%97%E8%AE%AE%23) `150.7K 🔥` `NEW`
1. [王橹杰B站账号澄清](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0B%E7%AB%99%E8%B4%A6%E5%8F%B7%E6%BE%84%E6%B8%85%23) `149.7K 🔥` `NEW`
1. [江苏惊现日本小镰仓](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E6%83%8A%E7%8E%B0%E6%97%A5%E6%9C%AC%E5%B0%8F%E9%95%B0%E4%BB%93%23) `148.9K 🔥` `NEW`
1. [檀健次生日工作室发文](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%94%9F%E6%97%A5%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E6%96%87%23) `147.7K 🔥` `NEW`
1. [张桂源发了9分钟vlog](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E5%8F%91%E4%BA%869%E5%88%86%E9%92%9Fvlog%23) `147.1K 🔥` `NEW`
1. [研二女生坠楼疑因导师压力](https://s.weibo.com/weibo?q=%23%E7%A0%94%E4%BA%8C%E5%A5%B3%E7%94%9F%E5%9D%A0%E6%A5%BC%E7%96%91%E5%9B%A0%E5%AF%BC%E5%B8%88%E5%8E%8B%E5%8A%9B%23) `141.0K 🔥` `NEW`
1. [跳水金牌榜张家齐排在第四](https://s.weibo.com/weibo?q=%23%E8%B7%B3%E6%B0%B4%E9%87%91%E7%89%8C%E6%A6%9C%E5%BC%A0%E5%AE%B6%E9%BD%90%E6%8E%92%E5%9C%A8%E7%AC%AC%E5%9B%9B%23) `140.6K 🔥` `NEW`
1. [梓渝偶遇](https://s.weibo.com/weibo?q=%23%E6%A2%93%E6%B8%9D%E5%81%B6%E9%81%87%23) `140.3K 🔥` `NEW`
1. [刘雯亮相MiuMiu春夏秀](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E4%BA%AE%E7%9B%B8MiuMiu%E6%98%A5%E5%A4%8F%E7%A7%80%23) `135.8K 🔥` `NEW`
1. [张家齐为我的乳腺负责了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E4%B8%BA%E6%88%91%E7%9A%84%E4%B9%B3%E8%85%BA%E8%B4%9F%E8%B4%A3%E4%BA%86%23) `134.8K 🔥` `NEW`
1. [姚琛部落选了王一博的无感](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E7%90%9B%E9%83%A8%E8%90%BD%E9%80%89%E4%BA%86%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%9A%84%E6%97%A0%E6%84%9F%23) `124.4K 🔥` `NEW`
1. [华伦天奴大秀](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BC%A6%E5%A4%A9%E5%A5%B4%E5%A4%A7%E7%A7%80%23) `121.4K 🔥` `NEW`
1. [一诺艾琳三连决胜](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E8%89%BE%E7%90%B3%E4%B8%89%E8%BF%9E%E5%86%B3%E8%83%9C%23) `120.7K 🔥` `NEW`
1. [韩路称烤串店开业遭遇新型骚扰](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%B7%AF%E7%A7%B0%E7%83%A4%E4%B8%B2%E5%BA%97%E5%BC%80%E4%B8%9A%E9%81%AD%E9%81%87%E6%96%B0%E5%9E%8B%E9%AA%9A%E6%89%B0%23) `99.1K 🔥` `NEW`
1. [长江的鱼多到成为四川景点](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B1%9F%E7%9A%84%E9%B1%BC%E5%A4%9A%E5%88%B0%E6%88%90%E4%B8%BA%E5%9B%9B%E5%B7%9D%E6%99%AF%E7%82%B9%23) `96.6K 🔥` `NEW`
1. [鞠婧祎曾舜晞 七星彩](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%9B%BE%E8%88%9C%E6%99%9E%20%E4%B8%83%E6%98%9F%E5%BD%A9%23) `92.5K 🔥` `NEW`
1. [中国U17男足0比3墨西哥U17](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDU17%E7%94%B7%E8%B6%B30%E6%AF%943%E5%A2%A8%E8%A5%BF%E5%93%A5U17%23) `92.4K 🔥` `NEW`

Updated at 2026-10-05 01:04:13

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
