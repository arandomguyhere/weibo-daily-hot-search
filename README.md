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

1. [王鹤棣回旋镖 (Wang Hedi boomerang)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%9B%9E%E6%97%8B%E9%95%96%23) `14.5M 🔥` `NEW`
1. [沈月向王鹤棣道歉](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E5%90%91%E7%8E%8B%E9%B9%A4%E6%A3%A3%E9%81%93%E6%AD%89%23) `11.2M 🔥` `NEW`
1. [留神峪煤矿事故超50人遇难](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E8%B6%8550%E4%BA%BA%E9%81%87%E9%9A%BE%23) `1.3M 🔥` `NEW`
1. [曝iPhone18Pro配色大换血](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18Pro%E9%85%8D%E8%89%B2%E5%A4%A7%E6%8D%A2%E8%A1%80%23) `1.2M 🔥` `NEW`
1. [马刺雷霆打架](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BA%E9%9B%B7%E9%9C%86%E6%89%93%E6%9E%B6%23) `669.4K 🔥` `NEW`
1. [吴泽林语气](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%B3%BD%E6%9E%97%E8%AF%AD%E6%B0%94%23) `668.5K 🔥` `NEW`
1. [原来十年前的拼豆长这样](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9A%84%E6%8B%BC%E8%B1%86%E9%95%BF%E8%BF%99%E6%A0%B7%23) `665.7K 🔥` `NEW`
1. [留神峪煤矿事故82人遇难](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%8582%E4%BA%BA%E9%81%87%E9%9A%BE%23) `663.8K 🔥` `NEW`
1. [留神峪煤矿事故企业负责人被控制](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E4%BC%81%E4%B8%9A%E8%B4%9F%E8%B4%A3%E4%BA%BA%E8%A2%AB%E6%8E%A7%E5%88%B6%23) `660.9K 🔥` `NEW`
1. [老板一个滚字赔了员工近16万元](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E4%B8%80%E4%B8%AA%E6%BB%9A%E5%AD%97%E8%B5%94%E4%BA%86%E5%91%98%E5%B7%A5%E8%BF%9116%E4%B8%87%E5%85%83%23) `657.6K 🔥` `NEW`
1. [曝沈月小群不是录制期间那个 (It was revealed that Shen Yue’s group was not the one during the recording)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B2%88%E6%9C%88%E5%B0%8F%E7%BE%A4%E4%B8%8D%E6%98%AF%E5%BD%95%E5%88%B6%E6%9C%9F%E9%97%B4%E9%82%A3%E4%B8%AA%23) `651.7K 🔥` `NEW`
1. [山西煤矿事故造成重大人员伤亡](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E9%80%A0%E6%88%90%E9%87%8D%E5%A4%A7%E4%BA%BA%E5%91%98%E4%BC%A4%E4%BA%A1%23) `647.5K 🔥` `NEW`
1. [棣月系粉丝现状](https://s.weibo.com/weibo?q=%23%E6%A3%A3%E6%9C%88%E7%B3%BB%E7%B2%89%E4%B8%9D%E7%8E%B0%E7%8A%B6%23) `645.9K 🔥` `NEW`
1. [侯宇发长文](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%AE%87%E5%8F%91%E9%95%BF%E6%96%87%23) `642.7K 🔥` `NEW`
1. [夏天 苍蝇卵](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A4%A9%20%E8%8B%8D%E8%9D%87%E5%8D%B5%23) `636.8K 🔥` `NEW`
1. [棣月系be了](https://s.weibo.com/weibo?q=%23%E6%A3%A3%E6%9C%88%E7%B3%BBbe%E4%BA%86%23) `634.3K 🔥` `NEW`
1. [联想集团暴涨](https://s.weibo.com/weibo?q=%23%E8%81%94%E6%83%B3%E9%9B%86%E5%9B%A2%E6%9A%B4%E6%B6%A8%23) `630.1K 🔥` `NEW`
1. [范丞丞喊李晨老头](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%96%8A%E6%9D%8E%E6%99%A8%E8%80%81%E5%A4%B4%23) `628.3K 🔥` `NEW`
1. [马刺全场喊亚历山大假摔](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BA%E5%85%A8%E5%9C%BA%E5%96%8A%E4%BA%9A%E5%8E%86%E5%B1%B1%E5%A4%A7%E5%81%87%E6%91%94%23) `623.8K 🔥` `NEW`
1. [包上恩24岁是公主](https://s.weibo.com/weibo?q=%23%E5%8C%85%E4%B8%8A%E6%81%A924%E5%B2%81%E6%98%AF%E5%85%AC%E4%B8%BB%23) `620.8K 🔥` `NEW`
1. [谢娜回应又被黄灿灿踩裙子了 (Xie Na responded that Huang Cancan stepped on her skirt again)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9B%9E%E5%BA%94%E5%8F%88%E8%A2%AB%E9%BB%84%E7%81%BF%E7%81%BF%E8%B8%A9%E8%A3%99%E5%AD%90%E4%BA%86%23) `618.2K 🔥` `NEW`
1. [4名在泰失联中国公民已被找到](https://s.weibo.com/weibo?q=%234%E5%90%8D%E5%9C%A8%E6%B3%B0%E5%A4%B1%E8%81%94%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E5%B7%B2%E8%A2%AB%E6%89%BE%E5%88%B0%23) `610.6K 🔥` `NEW`
1. [Uzi回应送老婆贵重礼物](https://s.weibo.com/weibo?q=%23Uzi%E5%9B%9E%E5%BA%94%E9%80%81%E8%80%81%E5%A9%86%E8%B4%B5%E9%87%8D%E7%A4%BC%E7%89%A9%23) `593.8K 🔥` `NEW`
1. [庾澄庆 春泥](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%20%E6%98%A5%E6%B3%A5%23) `588.0K 🔥` `NEW`
1. [非洲大蜗牛](https://s.weibo.com/weibo?q=%23%E9%9D%9E%E6%B4%B2%E5%A4%A7%E8%9C%97%E7%89%9B%23) `584.3K 🔥` `NEW`
1. [交警回应时速不到60被抓拍121](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E8%AD%A6%E5%9B%9E%E5%BA%94%E6%97%B6%E9%80%9F%E4%B8%8D%E5%88%B060%E8%A2%AB%E6%8A%93%E6%8B%8D121%23) `582.3K 🔥` `NEW`
1. [宋亚轩是成龙大哥的队长](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%98%AF%E6%88%90%E9%BE%99%E5%A4%A7%E5%93%A5%E7%9A%84%E9%98%9F%E9%95%BF%23) `579.8K 🔥` `NEW`
1. [雷霆2比1马刺](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E9%9C%862%E6%AF%941%E9%A9%AC%E5%88%BA%23) `573.9K 🔥` `NEW`
1. [女子日服800粒减肥丸致肠道无法蠕动](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%97%A5%E6%9C%8D800%E7%B2%92%E5%87%8F%E8%82%A5%E4%B8%B8%E8%87%B4%E8%82%A0%E9%81%93%E6%97%A0%E6%B3%95%E8%A0%95%E5%8A%A8%23) `570.9K 🔥` `NEW`
1. [黎家盈是一名香港警司](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E5%AE%B6%E7%9B%88%E6%98%AF%E4%B8%80%E5%90%8D%E9%A6%99%E6%B8%AF%E8%AD%A6%E5%8F%B8%23) `567.6K 🔥` `NEW`
1. [李若彤回应未婚无子人生不完整 (Li Ruotong responded that life is incomplete if she is unmarried and has no children.)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8B%A5%E5%BD%A4%E5%9B%9E%E5%BA%94%E6%9C%AA%E5%A9%9A%E6%97%A0%E5%AD%90%E4%BA%BA%E7%94%9F%E4%B8%8D%E5%AE%8C%E6%95%B4%23) `561.6K 🔥` `NEW`
1. [文班亚马回应雷霆2比1马刺](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E5%9B%9E%E5%BA%94%E9%9B%B7%E9%9C%862%E6%AF%941%E9%A9%AC%E5%88%BA%23) `560.4K 🔥` `NEW`
1. [这是我的西游2全员直播](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E6%88%91%E7%9A%84%E8%A5%BF%E6%B8%B82%E5%85%A8%E5%91%98%E7%9B%B4%E6%92%AD%23) `551.8K 🔥` `NEW`
1. [高松任北京大学校长](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%9D%BE%E4%BB%BB%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E6%A0%A1%E9%95%BF%23) `549.4K 🔥` `NEW`
1. [此处禁止停猫](https://s.weibo.com/weibo?q=%23%E6%AD%A4%E5%A4%84%E7%A6%81%E6%AD%A2%E5%81%9C%E7%8C%AB%23) `545.7K 🔥` `NEW`
1. [当我在重要的日子化妆打扮](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E5%9C%A8%E9%87%8D%E8%A6%81%E7%9A%84%E6%97%A5%E5%AD%90%E5%8C%96%E5%A6%86%E6%89%93%E6%89%AE%23) `541.6K 🔥` `NEW`
1. [贺峻霖宋亚轩十年前就住一起](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%8D%81%E5%B9%B4%E5%89%8D%E5%B0%B1%E4%BD%8F%E4%B8%80%E8%B5%B7%23) `538.4K 🔥` `NEW`
1. [英法德意发表联合声明](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%B3%95%E5%BE%B7%E6%84%8F%E5%8F%91%E8%A1%A8%E8%81%94%E5%90%88%E5%A3%B0%E6%98%8E%23) `532.1K 🔥` `NEW`
1. [神23航天员简历](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E8%88%AA%E5%A4%A9%E5%91%98%E7%AE%80%E5%8E%86%23) `529.3K 🔥` `NEW`
1. [我66岁能不能像惠英红这样](https://s.weibo.com/weibo?q=%23%E6%88%9166%E5%B2%81%E8%83%BD%E4%B8%8D%E8%83%BD%E5%83%8F%E6%83%A0%E8%8B%B1%E7%BA%A2%E8%BF%99%E6%A0%B7%23) `527.7K 🔥` `NEW`
1. [神23任务发布会 (God 23 mission press conference)](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E4%BB%BB%E5%8A%A1%E5%8F%91%E5%B8%83%E4%BC%9A%23) `1.1M 🔥` `+168%`
1. [极狐贝塔S3惊喜上市5.98万元起 (Jihu Beta S3 surprisingly launched, starting from 59,800 yuan)](https://s.weibo.com/weibo?q=%23%E6%9E%81%E7%8B%90%E8%B4%9D%E5%A1%94S3%E6%83%8A%E5%96%9C%E4%B8%8A%E5%B8%825.98%E4%B8%87%E5%85%83%E8%B5%B7%23) `668.2K 🔥` `+255%`
1. [中国官宣第4位女航天员](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%AE%98%E5%AE%A3%E7%AC%AC4%E4%BD%8D%E5%A5%B3%E8%88%AA%E5%A4%A9%E5%91%98%23) `607.2K 🔥` `+73%`
1. [庾澄庆脸色](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E8%84%B8%E8%89%B2%23) `606.8K 🔥` `+53%`
1. [女孩吃流产药后长期卧床腰臀长疮](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%90%83%E6%B5%81%E4%BA%A7%E8%8D%AF%E5%90%8E%E9%95%BF%E6%9C%9F%E5%8D%A7%E5%BA%8A%E8%85%B0%E8%87%80%E9%95%BF%E7%96%AE%23) `597.6K 🔥` `+59%`
1. [窦靖童把窦颖摇来了 (Dou Jingtong brought Dou Ying here)](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%8A%8A%E7%AA%A6%E9%A2%96%E6%91%87%E6%9D%A5%E4%BA%86%23) `576.3K 🔥` `+47%`
1. [洛克王国世界](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%E4%B8%96%E7%95%8C%23) `557.7K 🔥` `+65%`
1. [美联储预期加息25个基点](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%E9%A2%84%E6%9C%9F%E5%8A%A0%E6%81%AF25%E4%B8%AA%E5%9F%BA%E7%82%B9%23) `595.0K 🔥`
1. [史上颜值巅峰iPhone要来了](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E9%A2%9C%E5%80%BC%E5%B7%85%E5%B3%B0iPhone%E8%A6%81%E6%9D%A5%E4%BA%86%23) `614.0K 🔥` `-48%`
1. [曝红果短剧收益断崖式下跌 (It is revealed that the revenue of Hongguo short drama has plummeted)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E6%94%B6%E7%9B%8A%E6%96%AD%E5%B4%96%E5%BC%8F%E4%B8%8B%E8%B7%8C%23) `542.9K 🔥` `-55%`

Updated at 2026-05-23 13:08:57

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
