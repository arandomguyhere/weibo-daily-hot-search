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

1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `1.0M 🔥` `NEW`
1. [假装上班公司有员工月入七八万](https://s.weibo.com/weibo?q=%23%E5%81%87%E8%A3%85%E4%B8%8A%E7%8F%AD%E5%85%AC%E5%8F%B8%E6%9C%89%E5%91%98%E5%B7%A5%E6%9C%88%E5%85%A5%E4%B8%83%E5%85%AB%E4%B8%87%23) `765.9K 🔥` `NEW`
1. [新一批重大外资项目要来了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%80%E6%89%B9%E9%87%8D%E5%A4%A7%E5%A4%96%E8%B5%84%E9%A1%B9%E7%9B%AE%E8%A6%81%E6%9D%A5%E4%BA%86%23) `567.1K 🔥` `NEW`
1. [买橘朵上拼多多好价不用等](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E6%A9%98%E6%9C%B5%E4%B8%8A%E6%8B%BC%E5%A4%9A%E5%A4%9A%E5%A5%BD%E4%BB%B7%E4%B8%8D%E7%94%A8%E7%AD%89%23) `278.6K 🔥` `NEW`
1. [4S店回应拉黑吃饭超260次男子](https://s.weibo.com/weibo?q=%234S%E5%BA%97%E5%9B%9E%E5%BA%94%E6%8B%89%E9%BB%91%E5%90%83%E9%A5%AD%E8%B6%85260%E6%AC%A1%E7%94%B7%E5%AD%90%23) `242.9K 🔥` `NEW`
1. [女子网红店等位3200多桌排到崩溃](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%BD%91%E7%BA%A2%E5%BA%97%E7%AD%89%E4%BD%8D3200%E5%A4%9A%E6%A1%8C%E6%8E%92%E5%88%B0%E5%B4%A9%E6%BA%83%23) `225.6K 🔥` `NEW`
1. [男子遭路虎1分钟恶意别停8次后追尾](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%81%AD%E8%B7%AF%E8%99%8E1%E5%88%86%E9%92%9F%E6%81%B6%E6%84%8F%E5%88%AB%E5%81%9C8%E6%AC%A1%E5%90%8E%E8%BF%BD%E5%B0%BE%23) `225.6K 🔥` `NEW`
1. [伊朗总统证实情报部长遇害](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%AF%81%E5%AE%9E%E6%83%85%E6%8A%A5%E9%83%A8%E9%95%BF%E9%81%87%E5%AE%B3%23) `217.9K 🔥` `NEW`
1. [红糖姜汁](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E7%B3%96%E5%A7%9C%E6%B1%81%23) `202.0K 🔥` `NEW`
1. [女子车祸住院429天371天是挂床](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BD%A6%E7%A5%B8%E4%BD%8F%E9%99%A2429%E5%A4%A9371%E5%A4%A9%E6%98%AF%E6%8C%82%E5%BA%8A%23) `198.4K 🔥` `NEW`
1. [推特崩了 (Twitter crashed)](https://s.weibo.com/weibo?q=%23%E6%8E%A8%E7%89%B9%E5%B4%A9%E4%BA%86%23) `171.4K 🔥` `NEW`
1. [刘冲和迪丽热巴聚餐](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E5%92%8C%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%81%9A%E9%A4%90%23) `171.0K 🔥` `NEW`
1. [徐若晗 挂脸](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%20%E6%8C%82%E8%84%B8%23) `165.0K 🔥` `NEW`
1. [美联储](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%23) `163.6K 🔥` `NEW`
1. [早期田曦薇 真人bjd](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%9C%9F%E7%94%B0%E6%9B%A6%E8%96%87%20%E7%9C%9F%E4%BA%BAbjd%23) `159.6K 🔥` `NEW`
1. [赵丽颖被主持人骗到的反应](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%A2%AB%E4%B8%BB%E6%8C%81%E4%BA%BA%E9%AA%97%E5%88%B0%E7%9A%84%E5%8F%8D%E5%BA%94%23) `156.1K 🔥` `NEW`
1. [放了八年的香蕉](https://s.weibo.com/weibo?q=%23%E6%94%BE%E4%BA%86%E5%85%AB%E5%B9%B4%E7%9A%84%E9%A6%99%E8%95%89%23) `152.1K 🔥` `NEW`
1. [文科生的春天](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%A7%91%E7%94%9F%E7%9A%84%E6%98%A5%E5%A4%A9%23) `151.5K 🔥` `NEW`
1. [无畏的鲁班大师](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E7%9A%84%E9%B2%81%E7%8F%AD%E5%A4%A7%E5%B8%88%23) `139.4K 🔥` `NEW`
1. [半个娱乐圈女艺人安利隐身的名字](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E4%B8%AA%E5%A8%B1%E4%B9%90%E5%9C%88%E5%A5%B3%E8%89%BA%E4%BA%BA%E5%AE%89%E5%88%A9%E9%9A%90%E8%BA%AB%E7%9A%84%E5%90%8D%E5%AD%97%23) `138.1K 🔥` `NEW`
1. [赵丽颖直播 (Zhao Liying live broadcast)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%9B%B4%E6%92%AD%23) `112.9K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `112.8K 🔥` `NEW`
1. [AG对战JDG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98JDG%23) `112.3K 🔥` `NEW`
1. [客服笑了半个小时决定去仓库打人](https://s.weibo.com/weibo?q=%23%E5%AE%A2%E6%9C%8D%E7%AC%91%E4%BA%86%E5%8D%8A%E4%B8%AA%E5%B0%8F%E6%97%B6%E5%86%B3%E5%AE%9A%E5%8E%BB%E4%BB%93%E5%BA%93%E6%89%93%E4%BA%BA%23) `111.7K 🔥` `NEW`
1. [4月1日医保新规落地](https://s.weibo.com/weibo?q=%234%E6%9C%881%E6%97%A5%E5%8C%BB%E4%BF%9D%E6%96%B0%E8%A7%84%E8%90%BD%E5%9C%B0%23) `111.1K 🔥` `NEW`
1. [网友抵制AI演员](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8A%B5%E5%88%B6AI%E6%BC%94%E5%91%98%23) `111.1K 🔥` `NEW`
1. [桃花坞6阵容](https://s.weibo.com/weibo?q=%23%E6%A1%83%E8%8A%B1%E5%9D%9E6%E9%98%B5%E5%AE%B9%23) `110.6K 🔥` `NEW`
1. [BLG对战G2](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98G2%23) `106.4K 🔥` `NEW`
1. [代拍说王一博上下班公认最难拍](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%8B%8D%E8%AF%B4%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B8%8A%E4%B8%8B%E7%8F%AD%E5%85%AC%E8%AE%A4%E6%9C%80%E9%9A%BE%E6%8B%8D%23) `104.6K 🔥` `NEW`
1. [耀客AI演员 赵今麦翟子路](https://s.weibo.com/weibo?q=%23%E8%80%80%E5%AE%A2AI%E6%BC%94%E5%91%98%20%E8%B5%B5%E4%BB%8A%E9%BA%A6%E7%BF%9F%E5%AD%90%E8%B7%AF%23) `100.5K 🔥` `NEW`
1. [全国春捂地图上线 (National spring mask map online)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%98%A5%E6%8D%82%E5%9C%B0%E5%9B%BE%E4%B8%8A%E7%BA%BF%23) `98.0K 🔥` `NEW`
1. [平台获利3.68元被罚30万毫不冤枉](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E8%8E%B7%E5%88%A93.68%E5%85%83%E8%A2%AB%E7%BD%9A30%E4%B8%87%E6%AF%AB%E4%B8%8D%E5%86%A4%E6%9E%89%23) `97.7K 🔥` `NEW`
1. [文淇周柯宇 一觉醒来十五年](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%B7%87%E5%91%A8%E6%9F%AF%E5%AE%87%20%E4%B8%80%E8%A7%89%E9%86%92%E6%9D%A5%E5%8D%81%E4%BA%94%E5%B9%B4%23) `92.9K 🔥` `NEW`
1. [伊说中东三国石油设施成合法打击目标](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%AF%B4%E4%B8%AD%E4%B8%9C%E4%B8%89%E5%9B%BD%E7%9F%B3%E6%B2%B9%E8%AE%BE%E6%96%BD%E6%88%90%E5%90%88%E6%B3%95%E6%89%93%E5%87%BB%E7%9B%AE%E6%A0%87%23) `90.5K 🔥` `NEW`
1. [日本自研AI被扒底层全是中国代码](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%87%AA%E7%A0%94AI%E8%A2%AB%E6%89%92%E5%BA%95%E5%B1%82%E5%85%A8%E6%98%AF%E4%B8%AD%E5%9B%BD%E4%BB%A3%E7%A0%81%23) `81.7K 🔥` `NEW`
1. [伊朗石油工业设施遭袭](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9F%B3%E6%B2%B9%E5%B7%A5%E4%B8%9A%E8%AE%BE%E6%96%BD%E9%81%AD%E8%A2%AD%23) `79.9K 🔥` `NEW`
1. [美国特教女老师1天5次性侵男童](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%89%B9%E6%95%99%E5%A5%B3%E8%80%81%E5%B8%881%E5%A4%A95%E6%AC%A1%E6%80%A7%E4%BE%B5%E7%94%B7%E7%AB%A5%23) `73.5K 🔥` `NEW`
1. [逐玉贺将军下线](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E8%B4%BA%E5%B0%86%E5%86%9B%E4%B8%8B%E7%BA%BF%23) `72.0K 🔥` `NEW`
1. [福建一鸭子活吞41只小鸡](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E4%B8%80%E9%B8%AD%E5%AD%90%E6%B4%BB%E5%90%9E41%E5%8F%AA%E5%B0%8F%E9%B8%A1%23) `69.4K 🔥` `NEW`
1. [齐本宫](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%9C%AC%E5%AE%AB%23) `69.0K 🔥` `NEW`
1. [美团回应北大毕业送外卖 (Meituan responds to Peking University graduates delivering food)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%9B%9E%E5%BA%94%E5%8C%97%E5%A4%A7%E6%AF%95%E4%B8%9A%E9%80%81%E5%A4%96%E5%8D%96%23) `68.1K 🔥` `NEW`
1. [Helper道歉](https://s.weibo.com/weibo?q=%23Helper%E9%81%93%E6%AD%89%23) `65.1K 🔥` `NEW`
1. [TF家族语音](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%AF%AD%E9%9F%B3%23) `64.8K 🔥` `NEW`
1. [杨威回应杨阳洋成绩不好去香港读书](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A8%81%E5%9B%9E%E5%BA%94%E6%9D%A8%E9%98%B3%E6%B4%8B%E6%88%90%E7%BB%A9%E4%B8%8D%E5%A5%BD%E5%8E%BB%E9%A6%99%E6%B8%AF%E8%AF%BB%E4%B9%A6%23) `62.3K 🔥` `NEW`
1. [樊长玉谢征 好孕赘婿](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E9%95%BF%E7%8E%89%E8%B0%A2%E5%BE%81%20%E5%A5%BD%E5%AD%95%E8%B5%98%E5%A9%BF%23) `61.9K 🔥` `NEW`
1. [何穗称模特赛夺冠后4年基本没工作](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E7%A7%B0%E6%A8%A1%E7%89%B9%E8%B5%9B%E5%A4%BA%E5%86%A0%E5%90%8E4%E5%B9%B4%E5%9F%BA%E6%9C%AC%E6%B2%A1%E5%B7%A5%E4%BD%9C%23) `59.7K 🔥` `NEW`
1. [金价跌破4900美元](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E7%A0%B44900%E7%BE%8E%E5%85%83%23) `56.2K 🔥` `NEW`
1. [张翅直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BF%85%E7%9B%B4%E6%92%AD%23) `55.5K 🔥` `NEW`
1. [海贼王漫画1177话](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E8%B4%BC%E7%8E%8B%E6%BC%AB%E7%94%BB1177%E8%AF%9D%23) `54.6K 🔥` `NEW`
1. [容易让人长胖的睡前习惯](https://s.weibo.com/weibo?q=%23%E5%AE%B9%E6%98%93%E8%AE%A9%E4%BA%BA%E9%95%BF%E8%83%96%E7%9A%84%E7%9D%A1%E5%89%8D%E4%B9%A0%E6%83%AF%23) `53.7K 🔥` `NEW`
1. [逐玉预告 (Preview of Chasing Jade)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%A2%84%E5%91%8A%23) `53.5K 🔥` `NEW`

Updated at 2026-03-19 00:04:57

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
