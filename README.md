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

1. [米兰时装周 (milan fashion week)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E6%97%B6%E8%A3%85%E5%91%A8%23) `16.0K 🔥` `NEW`
1. [使领馆将协助中国公民撤离伊朗](https://s.weibo.com/weibo?q=%23%E4%BD%BF%E9%A2%86%E9%A6%86%E5%B0%86%E5%8D%8F%E5%8A%A9%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E6%92%A4%E7%A6%BB%E4%BC%8A%E6%9C%97%23) `15.2K 🔥` `NEW`
1. [23岁研究生胃癌晚期称作息不规律](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E7%A0%94%E7%A9%B6%E7%94%9F%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E7%A7%B0%E4%BD%9C%E6%81%AF%E4%B8%8D%E8%A7%84%E5%BE%8B%23) `37.9K 🔥` `+59%`
1. [政府借厕所遭辱骂男子要求公开道歉](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%BA%9C%E5%80%9F%E5%8E%95%E6%89%80%E9%81%AD%E8%BE%B1%E9%AA%82%E7%94%B7%E5%AD%90%E8%A6%81%E6%B1%82%E5%85%AC%E5%BC%80%E9%81%93%E6%AD%89%23) `26.5K 🔥` `+26%`
1. [21岁女生头晕以为没睡好查出脑梗 (A 21-year-old girl felt dizzy and thought she hadn’t slept well and was diagnosed with cerebral infarction)](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%A5%B3%E7%94%9F%E5%A4%B4%E6%99%95%E4%BB%A5%E4%B8%BA%E6%B2%A1%E7%9D%A1%E5%A5%BD%E6%9F%A5%E5%87%BA%E8%84%91%E6%A2%97%23) `57.2K 🔥`
1. [提醒在伊朗的中国公民尽快撤离](https://s.weibo.com/weibo?q=%23%E6%8F%90%E9%86%92%E5%9C%A8%E4%BC%8A%E6%9C%97%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E5%B0%BD%E5%BF%AB%E6%92%A4%E7%A6%BB%23) `41.8K 🔥`
1. [关注2026全国两会 (Pay attention to the 2026 National Two Sessions)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%B3%A82026%E5%85%A8%E5%9B%BD%E4%B8%A4%E4%BC%9A%23) `38.4K 🔥`
1. [反诈老陈因多次违规被罚](https://s.weibo.com/weibo?q=%23%E5%8F%8D%E8%AF%88%E8%80%81%E9%99%88%E5%9B%A0%E5%A4%9A%E6%AC%A1%E8%BF%9D%E8%A7%84%E8%A2%AB%E7%BD%9A%23) `37.3K 🔥`
1. [有美国入侵伊拉克时的味道了](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BE%8E%E5%9B%BD%E5%85%A5%E4%BE%B5%E4%BC%8A%E6%8B%89%E5%85%8B%E6%97%B6%E7%9A%84%E5%91%B3%E9%81%93%E4%BA%86%23) `32.4K 🔥`
1. [徐福记回应米兰小伙求代购酥心糖](https://s.weibo.com/weibo?q=%23%E5%BE%90%E7%A6%8F%E8%AE%B0%E5%9B%9E%E5%BA%94%E7%B1%B3%E5%85%B0%E5%B0%8F%E4%BC%99%E6%B1%82%E4%BB%A3%E8%B4%AD%E9%85%A5%E5%BF%83%E7%B3%96%23) `25.1K 🔥`
1. [养过小孩的才知道他有多会教](https://s.weibo.com/weibo?q=%23%E5%85%BB%E8%BF%87%E5%B0%8F%E5%AD%A9%E7%9A%84%E6%89%8D%E7%9F%A5%E9%81%93%E4%BB%96%E6%9C%89%E5%A4%9A%E4%BC%9A%E6%95%99%23) `24.3K 🔥`
1. [美国 伊朗 (United States Iran)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%20%E4%BC%8A%E6%9C%97%23) `24.3K 🔥`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `24.2K 🔥`
1. [杨幂谷爱凌合照 好娇啊小幂 (A group photo of Yang Mi, Gu Ailing, so cute, Xiaomi)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%88%E7%85%A7%20%E5%A5%BD%E5%A8%87%E5%95%8A%E5%B0%8F%E5%B9%82%23) `24.1K 🔥`
1. [白宇刘萌萌2014年因戏结缘 (Bai Yu and Liu Mengmeng got to know each other through drama in 2014)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%87%E5%88%98%E8%90%8C%E8%90%8C2014%E5%B9%B4%E5%9B%A0%E6%88%8F%E7%BB%93%E7%BC%98%23) `24.1K 🔥`
1. [奥黛丽厚本正完骨变薄本了 (Audrey's thick book is getting thinner)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E9%BB%9B%E4%B8%BD%E5%8E%9A%E6%9C%AC%E6%AD%A3%E5%AE%8C%E9%AA%A8%E5%8F%98%E8%96%84%E6%9C%AC%E4%BA%86%23) `24.0K 🔥`
1. [杨洋发文回应不让江山争议 (Yang Yang issued an article in response to the controversy about not letting the country go)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%E4%BA%89%E8%AE%AE%23) `23.9K 🔥`
1. [以色列 (Israel)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%23) `23.8K 🔥`
1. [虞书欣父亲起诉索要758万借贷本息](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%88%B6%E4%BA%B2%E8%B5%B7%E8%AF%89%E7%B4%A2%E8%A6%81758%E4%B8%87%E5%80%9F%E8%B4%B7%E6%9C%AC%E6%81%AF%23) `23.7K 🔥`
1. [上一个离开嘉行的是祝绪丹 (The last person to leave Jiaxing was Zhu Xudan)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%B8%80%E4%B8%AA%E7%A6%BB%E5%BC%80%E5%98%89%E8%A1%8C%E7%9A%84%E6%98%AF%E7%A5%9D%E7%BB%AA%E4%B8%B9%23) `23.7K 🔥`
1. [伊朗 (Iran)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%23) `23.6K 🔥`
1. [刘雯好性感](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E5%A5%BD%E6%80%A7%E6%84%9F%23) `23.6K 🔥`
1. [无限期退出娱乐圈除非有商务](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%99%90%E6%9C%9F%E9%80%80%E5%87%BA%E5%A8%B1%E4%B9%90%E5%9C%88%E9%99%A4%E9%9D%9E%E6%9C%89%E5%95%86%E5%8A%A1%23) `23.6K 🔥`
1. [虎跳峡男游客疑因洗杯落水失联](https://s.weibo.com/weibo?q=%23%E8%99%8E%E8%B7%B3%E5%B3%A1%E7%94%B7%E6%B8%B8%E5%AE%A2%E7%96%91%E5%9B%A0%E6%B4%97%E6%9D%AF%E8%90%BD%E6%B0%B4%E5%A4%B1%E8%81%94%23) `21.6K 🔥`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `20.3K 🔥`
1. [高市早苗反对女天皇 (Sanae Takaichi opposes the female emperor)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%8F%8D%E5%AF%B9%E5%A5%B3%E5%A4%A9%E7%9A%87%23) `20.0K 🔥`
1. [Gucci直播 (Gucci live)](https://s.weibo.com/weibo?q=%23Gucci%E7%9B%B4%E6%92%AD%23) `19.8K 🔥`
1. [种地吧 (Farm it)](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `19.2K 🔥`
1. [Gucci大秀](https://s.weibo.com/weibo?q=%23Gucci%E5%A4%A7%E7%A7%80%23) `18.9K 🔥`
1. [纯真年代的爱情](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `17.9K 🔥`
1. [代孕子女落户争议](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E5%AD%95%E5%AD%90%E5%A5%B3%E8%90%BD%E6%88%B7%E4%BA%89%E8%AE%AE%23) `17.4K 🔥`
1. [江湖夜雨十年灯](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B9%96%E5%A4%9C%E9%9B%A8%E5%8D%81%E5%B9%B4%E7%81%AF%23) `16.7K 🔥`
1. [宝可梦风与波 (Pokémon Wind and Waves)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%8F%AF%E6%A2%A6%E9%A3%8E%E4%B8%8E%E6%B3%A2%23) `16.4K 🔥`
1. [美国双航母已就位 (Dual U.S. aircraft carriers are in place)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8F%8C%E8%88%AA%E6%AF%8D%E5%B7%B2%E5%B0%B1%E4%BD%8D%23) `15.8K 🔥`
1. [伊军方将对美侵略予以毁灭性回应 (The Iraqi military will respond with a devastating response to the US aggression)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%86%9B%E6%96%B9%E5%B0%86%E5%AF%B9%E7%BE%8E%E4%BE%B5%E7%95%A5%E4%BA%88%E4%BB%A5%E6%AF%81%E7%81%AD%E6%80%A7%E5%9B%9E%E5%BA%94%23) `15.7K 🔥`
1. [曝敖瑞鹏合约到期不续](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%95%96%E7%91%9E%E9%B9%8F%E5%90%88%E7%BA%A6%E5%88%B0%E6%9C%9F%E4%B8%8D%E7%BB%AD%23) `15.2K 🔥`
1. [中国驻以色列使馆紧急通知 (Urgent notice from the Chinese Embassy in Israel)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A9%BB%E4%BB%A5%E8%89%B2%E5%88%97%E4%BD%BF%E9%A6%86%E7%B4%A7%E6%80%A5%E9%80%9A%E7%9F%A5%23) `15.1K 🔥`
1. [晚5秒多付1700前一辆车免费过了](https://s.weibo.com/weibo?q=%23%E6%99%9A5%E7%A7%92%E5%A4%9A%E4%BB%981700%E5%89%8D%E4%B8%80%E8%BE%86%E8%BD%A6%E5%85%8D%E8%B4%B9%E8%BF%87%E4%BA%86%23) `15.0K 🔥`
1. [有歌第二季](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%AD%8C%E7%AC%AC%E4%BA%8C%E5%AD%A3%23) `15.0K 🔥`
1. [不让江山回应杨洋 (Don’t let Jiangshan respond to Yang Yang)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%E5%9B%9E%E5%BA%94%E6%9D%A8%E6%B4%8B%23) `15.0K 🔥`
1. [六旬老太用花洒灌肠通便直肠破裂 (A 60-year-old woman used a shower enema to relieve her bowels and suffered a ruptured rectum)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E6%97%AC%E8%80%81%E5%A4%AA%E7%94%A8%E8%8A%B1%E6%B4%92%E7%81%8C%E8%82%A0%E9%80%9A%E4%BE%BF%E7%9B%B4%E8%82%A0%E7%A0%B4%E8%A3%82%23) `14.9K 🔥`
1. [吴世勋发合照 (Wu Shixun posted a group photo)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%B8%96%E5%8B%8B%E5%8F%91%E5%90%88%E7%85%A7%23) `14.9K 🔥`
1. [美伊对峙](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%AF%B9%E5%B3%99%23) `14.8K 🔥`
1. [Gucci大秀生图](https://s.weibo.com/weibo?q=%23Gucci%E5%A4%A7%E7%A7%80%E7%94%9F%E5%9B%BE%23) `14.8K 🔥`
1. [当妈妈把欧洲特产蒸了后 (When my mother steamed European specialties)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%A6%88%E5%A6%88%E6%8A%8A%E6%AC%A7%E6%B4%B2%E7%89%B9%E4%BA%A7%E8%92%B8%E4%BA%86%E5%90%8E%23) `26.6K 🔥` `-22%`
1. [张凌赫对着爱奇艺贴脸开大](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%AF%B9%E7%9D%80%E7%88%B1%E5%A5%87%E8%89%BA%E8%B4%B4%E8%84%B8%E5%BC%80%E5%A4%A7%23) `16.0K 🔥` `-33%`
1. [王橹杰路透 (Wang Lujie Reuters)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%B7%AF%E9%80%8F%23) `15.2K 🔥` `-34%`
1. [柳智敏 我喜欢漂亮女人 (Ryu Jimin I like beautiful women)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%20%E6%88%91%E5%96%9C%E6%AC%A2%E6%BC%82%E4%BA%AE%E5%A5%B3%E4%BA%BA%23) `15.1K 🔥` `-24%`

Updated at 2026-02-28 04:46:46

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
