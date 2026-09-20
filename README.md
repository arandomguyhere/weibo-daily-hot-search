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

1. [被快递员看光女子称事发后长期失眠](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%BF%AB%E9%80%92%E5%91%98%E7%9C%8B%E5%85%89%E5%A5%B3%E5%AD%90%E7%A7%B0%E4%BA%8B%E5%8F%91%E5%90%8E%E9%95%BF%E6%9C%9F%E5%A4%B1%E7%9C%A0%23) `2.0M 🔥` `NEW`
1. [小米18Pro系列定档23日发布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E7%B3%BB%E5%88%97%E5%AE%9A%E6%A1%A323%E6%97%A5%E5%8F%91%E5%B8%83%23) `1.0M 🔥` `NEW`
1. [国乒被曝禁用1号球台](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E8%A2%AB%E6%9B%9D%E7%A6%81%E7%94%A81%E5%8F%B7%E7%90%83%E5%8F%B0%23) `1.0M 🔥` `NEW`
1. [教育局回应护学岗加重双职工负担](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E6%8A%A4%E5%AD%A6%E5%B2%97%E5%8A%A0%E9%87%8D%E5%8F%8C%E8%81%8C%E5%B7%A5%E8%B4%9F%E6%8B%85%23) `537.7K 🔥` `NEW`
1. [中国队2026亚运首金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F2026%E4%BA%9A%E8%BF%90%E9%A6%96%E9%87%91%23) `520.0K 🔥` `NEW`
1. [许嵩冯禧婚礼](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%E5%86%AF%E7%A6%A7%E5%A9%9A%E7%A4%BC%23) `291.5K 🔥` `NEW`
1. [西贝 公关](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%B4%9D%20%E5%85%AC%E5%85%B3%23) `290.9K 🔥` `NEW`
1. [易烊千玺短信](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%9F%AD%E4%BF%A1%23) `289.0K 🔥` `NEW`
1. [西贝倒闭责任争议](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%B4%9D%E5%80%92%E9%97%AD%E8%B4%A3%E4%BB%BB%E4%BA%89%E8%AE%AE%23) `285.9K 🔥` `NEW`
1. [迪丽热巴见面会伴手礼](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A7%81%E9%9D%A2%E4%BC%9A%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `283.6K 🔥` `NEW`
1. [周也演技](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E6%BC%94%E6%8A%80%23) `282.8K 🔥` `NEW`
1. [中国代表团亚运首金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BB%A3%E8%A1%A8%E5%9B%A2%E4%BA%9A%E8%BF%90%E9%A6%96%E9%87%91%23) `279.9K 🔥` `NEW`
1. [郑合惠子居然是这么直接和刚的性格](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E5%B1%85%E7%84%B6%E6%98%AF%E8%BF%99%E4%B9%88%E7%9B%B4%E6%8E%A5%E5%92%8C%E5%88%9A%E7%9A%84%E6%80%A7%E6%A0%BC%23) `275.9K 🔥` `NEW`
1. [周杰伦太宠王俊凯了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%A4%AA%E5%AE%A0%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%BA%86%23) `269.9K 🔥` `NEW`
1. [池昌旭挑情丑闻 替身](https://s.weibo.com/weibo?q=%23%E6%B1%A0%E6%98%8C%E6%97%AD%E6%8C%91%E6%83%85%E4%B8%91%E9%97%BB%20%E6%9B%BF%E8%BA%AB%23) `256.9K 🔥` `NEW`
1. [钟南山提醒家长警惕秋冬合胞病毒高发](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E6%8F%90%E9%86%92%E5%AE%B6%E9%95%BF%E8%AD%A6%E6%83%95%E7%A7%8B%E5%86%AC%E5%90%88%E8%83%9E%E7%97%85%E6%AF%92%E9%AB%98%E5%8F%91%23) `192.8K 🔥` `NEW`
1. [金秀贤复出](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E5%A4%8D%E5%87%BA%23) `192.6K 🔥` `NEW`
1. [黄子弘凡解约后一句道歉够吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E8%A7%A3%E7%BA%A6%E5%90%8E%E4%B8%80%E5%8F%A5%E9%81%93%E6%AD%89%E5%A4%9F%E5%90%97%23) `192.1K 🔥` `NEW`
1. [易烊千玺 二巡](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%20%E4%BA%8C%E5%B7%A1%23) `175.4K 🔥` `NEW`
1. [爱情公寓让娄艺潇唱第一句的简直是天才](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E8%AE%A9%E5%A8%84%E8%89%BA%E6%BD%87%E5%94%B1%E7%AC%AC%E4%B8%80%E5%8F%A5%E7%9A%84%E7%AE%80%E7%9B%B4%E6%98%AF%E5%A4%A9%E6%89%8D%23) `171.1K 🔥` `NEW`
1. [报告显示农户彩礼均值降至3.86万](https://s.weibo.com/weibo?q=%23%E6%8A%A5%E5%91%8A%E6%98%BE%E7%A4%BA%E5%86%9C%E6%88%B7%E5%BD%A9%E7%A4%BC%E5%9D%87%E5%80%BC%E9%99%8D%E8%87%B33.86%E4%B8%87%23) `158.2K 🔥` `NEW`
1. [沙特拦截弹即将耗尽](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%89%B9%E6%8B%A6%E6%88%AA%E5%BC%B9%E5%8D%B3%E5%B0%86%E8%80%97%E5%B0%BD%23) `157.8K 🔥` `NEW`
1. [iG庆功宴](https://s.weibo.com/weibo?q=%23iG%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `139.4K 🔥` `NEW`
1. [米卡三公 边缘化](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%8D%A1%E4%B8%89%E5%85%AC%20%E8%BE%B9%E7%BC%98%E5%8C%96%23) `137.1K 🔥` `NEW`
1. [花少北恋情风波](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%8C%97%E6%81%8B%E6%83%85%E9%A3%8E%E6%B3%A2%23) `134.4K 🔥` `NEW`
1. [猫耳 肉包不吃肉](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E8%80%B3%20%E8%82%89%E5%8C%85%E4%B8%8D%E5%90%83%E8%82%89%23) `116.7K 🔥` `NEW`
1. [披荆斩棘三公排名](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%89%E5%85%AC%E6%8E%92%E5%90%8D%23) `116.4K 🔥` `NEW`
1. [苹果闹钟终于响了](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E9%97%B9%E9%92%9F%E7%BB%88%E4%BA%8E%E5%93%8D%E4%BA%86%23) `113.2K 🔥` `NEW`
1. [长期不工作的人会失去什么](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%B8%8D%E5%B7%A5%E4%BD%9C%E7%9A%84%E4%BA%BA%E4%BC%9A%E5%A4%B1%E5%8E%BB%E4%BB%80%E4%B9%88%23) `2.6M 🔥` `+145%`
1. [前8月全国铁路发送旅客超33亿人次](https://s.weibo.com/weibo?q=%23%E5%89%8D8%E6%9C%88%E5%85%A8%E5%9B%BD%E9%93%81%E8%B7%AF%E5%8F%91%E9%80%81%E6%97%85%E5%AE%A2%E8%B6%8533%E4%BA%BF%E4%BA%BA%E6%AC%A1%23) `1.1M 🔥` `+122%`
1. [周也你这演技我看得也很痛苦](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E4%BD%A0%E8%BF%99%E6%BC%94%E6%8A%80%E6%88%91%E7%9C%8B%E5%BE%97%E4%B9%9F%E5%BE%88%E7%97%9B%E8%8B%A6%23) `928.3K 🔥` `+91%`
1. [王源演唱会结束打开手机一看天塌了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%BC%94%E5%94%B1%E4%BC%9A%E7%BB%93%E6%9D%9F%E6%89%93%E5%BC%80%E6%89%8B%E6%9C%BA%E4%B8%80%E7%9C%8B%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `530.4K 🔥` `+278%`
1. [护学岗4人全是高龄老人最大67岁](https://s.weibo.com/weibo?q=%23%E6%8A%A4%E5%AD%A6%E5%B2%974%E4%BA%BA%E5%85%A8%E6%98%AF%E9%AB%98%E9%BE%84%E8%80%81%E4%BA%BA%E6%9C%80%E5%A4%A767%E5%B2%81%23) `323.2K 🔥` `+179%`
1. [承接别人情绪的聊天技巧](https://s.weibo.com/weibo?q=%23%E6%89%BF%E6%8E%A5%E5%88%AB%E4%BA%BA%E6%83%85%E7%BB%AA%E7%9A%84%E8%81%8A%E5%A4%A9%E6%8A%80%E5%B7%A7%23) `293.0K 🔥` `+108%`
1. [何炅冲浪真的快](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E5%86%B2%E6%B5%AA%E7%9C%9F%E7%9A%84%E5%BF%AB%23) `278.2K 🔥` `+165%`
1. [开机进直播一键看电视](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%9C%BA%E8%BF%9B%E7%9B%B4%E6%92%AD%E4%B8%80%E9%94%AE%E7%9C%8B%E7%94%B5%E8%A7%86%23) `274.5K 🔥` `+385%`
1. [许嵩冯禧官宣结婚](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%E5%86%AF%E7%A6%A7%E5%AE%98%E5%AE%A3%E7%BB%93%E5%A9%9A%23) `272.2K 🔥` `+247%`
1. [不需要找关系就能进的好工作](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%BE%E5%85%B3%E7%B3%BB%E5%B0%B1%E8%83%BD%E8%BF%9B%E7%9A%84%E5%A5%BD%E5%B7%A5%E4%BD%9C%23) `271.5K 🔥` `+246%`
1. [司美格鲁肽成变质回流药重灾区](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E6%88%90%E5%8F%98%E8%B4%A8%E5%9B%9E%E6%B5%81%E8%8D%AF%E9%87%8D%E7%81%BE%E5%8C%BA%23) `222.1K 🔥` `+99%`
1. [2026湾区升明月主持人](https://s.weibo.com/weibo?q=%232026%E6%B9%BE%E5%8C%BA%E5%8D%87%E6%98%8E%E6%9C%88%E4%B8%BB%E6%8C%81%E4%BA%BA%23) `222.1K 🔥` `+121%`
1. [名古屋亚运会吉祥物吓到观众](https://s.weibo.com/weibo?q=%23%E5%90%8D%E5%8F%A4%E5%B1%8B%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%90%89%E7%A5%A5%E7%89%A9%E5%90%93%E5%88%B0%E8%A7%82%E4%BC%97%23) `201.7K 🔥` `+247%`
1. [林锦岐临走前不顾一切强吻了兰香](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%94%A6%E5%B2%90%E4%B8%B4%E8%B5%B0%E5%89%8D%E4%B8%8D%E9%A1%BE%E4%B8%80%E5%88%87%E5%BC%BA%E5%90%BB%E4%BA%86%E5%85%B0%E9%A6%99%23) `199.0K 🔥` `+112%`
1. [爱情公寓 别试探了有市场](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%20%E5%88%AB%E8%AF%95%E6%8E%A2%E4%BA%86%E6%9C%89%E5%B8%82%E5%9C%BA%23) `197.4K 🔥` `+161%`
1. [家长给孩子全班买超长蛋挞](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E7%BB%99%E5%AD%A9%E5%AD%90%E5%85%A8%E7%8F%AD%E4%B9%B0%E8%B6%85%E9%95%BF%E8%9B%8B%E6%8C%9E%23) `177.6K 🔥` `+214%`
1. [挑情丑闻](https://s.weibo.com/weibo?q=%23%E6%8C%91%E6%83%85%E4%B8%91%E9%97%BB%23) `157.1K 🔥` `+153%`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `130.0K 🔥` `+94%`
1. [大熊猫居然能蹲成正方形](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%B1%85%E7%84%B6%E8%83%BD%E8%B9%B2%E6%88%90%E6%AD%A3%E6%96%B9%E5%BD%A2%23) `118.7K 🔥` `+87%`
1. [孙颖莎 亚运女团](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%20%E4%BA%9A%E8%BF%90%E5%A5%B3%E5%9B%A2%23) `114.7K 🔥` `+103%`
1. [三巨头终于有一个结婚了](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%B7%A8%E5%A4%B4%E7%BB%88%E4%BA%8E%E6%9C%89%E4%B8%80%E4%B8%AA%E7%BB%93%E5%A9%9A%E4%BA%86%23) `222.1K 🔥`
1. [于正承认秦岚是延禧攻略女主](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E6%89%BF%E8%AE%A4%E7%A7%A6%E5%B2%9A%E6%98%AF%E5%BB%B6%E7%A6%A7%E6%94%BB%E7%95%A5%E5%A5%B3%E4%B8%BB%23) `148.6K 🔥` `-31%`
1. [池昌旭身材](https://s.weibo.com/weibo?q=%23%E6%B1%A0%E6%98%8C%E6%97%AD%E8%BA%AB%E6%9D%90%23) `125.9K 🔥` `-30%`

Updated at 2026-09-20 09:02:55

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
