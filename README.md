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

1. [苹果回应涨价 (Apple responds to price increase)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%9B%9E%E5%BA%94%E6%B6%A8%E4%BB%B7%23) `1.1M 🔥` `NEW`
1. [Babycare山茶花检出甲酰胺](https://s.weibo.com/weibo?q=%23Babycare%E5%B1%B1%E8%8C%B6%E8%8A%B1%E6%A3%80%E5%87%BA%E7%94%B2%E9%85%B0%E8%83%BA%23) `830.6K 🔥` `NEW`
1. [杨幂牵杨紫上台](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%89%B5%E6%9D%A8%E7%B4%AB%E4%B8%8A%E5%8F%B0%23) `612.6K 🔥` `NEW`
1. [湖南两女子和狗被关笼中游街](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E4%B8%A4%E5%A5%B3%E5%AD%90%E5%92%8C%E7%8B%97%E8%A2%AB%E5%85%B3%E7%AC%BC%E4%B8%AD%E6%B8%B8%E8%A1%97%23) `595.4K 🔥` `NEW`
1. [发现脾胃喜欢一切温和的食物](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E8%84%BE%E8%83%83%E5%96%9C%E6%AC%A2%E4%B8%80%E5%88%87%E6%B8%A9%E5%92%8C%E7%9A%84%E9%A3%9F%E7%89%A9%23) `583.7K 🔥` `NEW`
1. [潘玮柏听热巴爱吃眼睛都亮了](https://s.weibo.com/weibo?q=%23%E6%BD%98%E7%8E%AE%E6%9F%8F%E5%90%AC%E7%83%AD%E5%B7%B4%E7%88%B1%E5%90%83%E7%9C%BC%E7%9D%9B%E9%83%BD%E4%BA%AE%E4%BA%86%23) `567.3K 🔥` `NEW`
1. [有家长自费送检纸尿裤检出甲酰胺](https://s.weibo.com/weibo?q=%23%E6%9C%89%E5%AE%B6%E9%95%BF%E8%87%AA%E8%B4%B9%E9%80%81%E6%A3%80%E7%BA%B8%E5%B0%BF%E8%A3%A4%E6%A3%80%E5%87%BA%E7%94%B2%E9%85%B0%E8%83%BA%23) `403.9K 🔥` `NEW`
1. [腾讯到白玉兰只干一件事](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%88%B0%E7%99%BD%E7%8E%89%E5%85%B0%E5%8F%AA%E5%B9%B2%E4%B8%80%E4%BB%B6%E4%BA%8B%23) `319.6K 🔥` `NEW`
1. [本科线479考生794分嫌发挥失常](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E7%A7%91%E7%BA%BF479%E8%80%83%E7%94%9F794%E5%88%86%E5%AB%8C%E5%8F%91%E6%8C%A5%E5%A4%B1%E5%B8%B8%23) `318.5K 🔥` `NEW`
1. [田曦薇张凌赫 格子衬衫粉色内搭](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E6%A0%BC%E5%AD%90%E8%A1%AC%E8%A1%AB%E7%B2%89%E8%89%B2%E5%86%85%E6%90%AD%23) `317.9K 🔥` `NEW`
1. [美股 (US stocks)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `316.9K 🔥` `NEW`
1. [杨超越 代言口碑](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%20%E4%BB%A3%E8%A8%80%E5%8F%A3%E7%A2%91%23) `316.6K 🔥` `NEW`
1. [三球交易至森林狼](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%90%83%E4%BA%A4%E6%98%93%E8%87%B3%E6%A3%AE%E6%9E%97%E7%8B%BC%23) `315.1K 🔥` `NEW`
1. [男生高考718分照常早起练车](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E9%AB%98%E8%80%83718%E5%88%86%E7%85%A7%E5%B8%B8%E6%97%A9%E8%B5%B7%E7%BB%83%E8%BD%A6%23) `309.1K 🔥` `NEW`
1. [苹果涨价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%B6%A8%E4%BB%B7%23) `305.7K 🔥` `NEW`
1. [闲鱼卖2千元项链被收120元服务费](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%E5%8D%962%E5%8D%83%E5%85%83%E9%A1%B9%E9%93%BE%E8%A2%AB%E6%94%B6120%E5%85%83%E6%9C%8D%E5%8A%A1%E8%B4%B9%23) `300.4K 🔥` `NEW`
1. [苗金凤去世](https://s.weibo.com/weibo?q=%23%E8%8B%97%E9%87%91%E5%87%A4%E5%8E%BB%E4%B8%96%23) `297.7K 🔥` `NEW`
1. [恋与深空对不起文学](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%AF%B9%E4%B8%8D%E8%B5%B7%E6%96%87%E5%AD%A6%23) `293.6K 🔥` `NEW`
1. [13岁脑瘫女孩留遗书跳楼坠亡案后续](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E8%84%91%E7%98%AB%E5%A5%B3%E5%AD%A9%E7%95%99%E9%81%97%E4%B9%A6%E8%B7%B3%E6%A5%BC%E5%9D%A0%E4%BA%A1%E6%A1%88%E5%90%8E%E7%BB%AD%23) `290.0K 🔥` `NEW`
1. [千香定档节奏](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%A6%99%E5%AE%9A%E6%A1%A3%E8%8A%82%E5%A5%8F%23) `286.6K 🔥` `NEW`
1. [长鑫存储年底产能有望超越美光 (Changxin Memory's production capacity is expected to surpass Micron by the end of the year)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E5%AD%98%E5%82%A8%E5%B9%B4%E5%BA%95%E4%BA%A7%E8%83%BD%E6%9C%89%E6%9C%9B%E8%B6%85%E8%B6%8A%E7%BE%8E%E5%85%89%23) `284.4K 🔥` `NEW`
1. [油车真的崩盘了吗](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E8%BD%A6%E7%9C%9F%E7%9A%84%E5%B4%A9%E7%9B%98%E4%BA%86%E5%90%97%23) `282.4K 🔥` `NEW`
1. [苹果涨价iPhone未涨](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%B6%A8%E4%BB%B7iPhone%E6%9C%AA%E6%B6%A8%23) `280.1K 🔥` `NEW`
1. [赵丽颖不进组被认为明智](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%B8%8D%E8%BF%9B%E7%BB%84%E8%A2%AB%E8%AE%A4%E4%B8%BA%E6%98%8E%E6%99%BA%23) `279.1K 🔥` `NEW`
1. [王一博窦靖童香奈儿七夕大片](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%AA%A6%E9%9D%96%E7%AB%A5%E9%A6%99%E5%A5%88%E5%84%BF%E4%B8%83%E5%A4%95%E5%A4%A7%E7%89%87%23) `273.4K 🔥` `NEW`
1. [尊界](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8C%23) `261.7K 🔥` `NEW`
1. [曝童锦程认孩子了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%AB%A5%E9%94%A6%E7%A8%8B%E8%AE%A4%E5%AD%A9%E5%AD%90%E4%BA%86%23) `249.8K 🔥` `NEW`
1. [王橹杰眉眼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%9C%89%E7%9C%BC%23) `247.7K 🔥` `NEW`
1. [女孩感冒服药离世暴露基层药店乱象](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%84%9F%E5%86%92%E6%9C%8D%E8%8D%AF%E7%A6%BB%E4%B8%96%E6%9A%B4%E9%9C%B2%E5%9F%BA%E5%B1%82%E8%8D%AF%E5%BA%97%E4%B9%B1%E8%B1%A1%23) `207.9K 🔥` `NEW`
1. [问心2被打码的医生是谁](https://s.weibo.com/weibo?q=%23%E9%97%AE%E5%BF%832%E8%A2%AB%E6%89%93%E7%A0%81%E7%9A%84%E5%8C%BB%E7%94%9F%E6%98%AF%E8%B0%81%23) `197.9K 🔥` `NEW`
1. [零跑D99价格 (Zero running D99 price)](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E8%B7%91D99%E4%BB%B7%E6%A0%BC%23) `177.6K 🔥` `NEW`
1. [孙颖莎兼项赛程密集](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%85%BC%E9%A1%B9%E8%B5%9B%E7%A8%8B%E5%AF%86%E9%9B%86%23) `161.1K 🔥` `NEW`
1. [网传检出甲酰胺的报告已撤回](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%A3%80%E5%87%BA%E7%94%B2%E9%85%B0%E8%83%BA%E7%9A%84%E6%8A%A5%E5%91%8A%E5%B7%B2%E6%92%A4%E5%9B%9E%23) `153.7K 🔥` `NEW`
1. [尊界V800全球最大MPV](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8CV800%E5%85%A8%E7%90%83%E6%9C%80%E5%A4%A7MPV%23) `141.3K 🔥` `NEW`
1. [马嘉祺钱雷录音室下班](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E9%92%B1%E9%9B%B7%E5%BD%95%E9%9F%B3%E5%AE%A4%E4%B8%8B%E7%8F%AD%23) `138.0K 🔥` `NEW`
1. [影视飓风Tim怎么变成老司机的](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8ETim%E6%80%8E%E4%B9%88%E5%8F%98%E6%88%90%E8%80%81%E5%8F%B8%E6%9C%BA%E7%9A%84%23) `137.2K 🔥` `NEW`
1. [6图看电子商务如何做强做优做大](https://s.weibo.com/weibo?q=%236%E5%9B%BE%E7%9C%8B%E7%94%B5%E5%AD%90%E5%95%86%E5%8A%A1%E5%A6%82%E4%BD%95%E5%81%9A%E5%BC%BA%E5%81%9A%E4%BC%98%E5%81%9A%E5%A4%A7%23) `655.3K 🔥`
1. [白鹿又去哪进修哭戏了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%88%E5%8E%BB%E5%93%AA%E8%BF%9B%E4%BF%AE%E5%93%AD%E6%88%8F%E4%BA%86%23) `295.5K 🔥`
1. [大众点评必吃榜10周年 (Dianping’s must-eat list 10th anniversary)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%97%E7%82%B9%E8%AF%84%E5%BF%85%E5%90%83%E6%A6%9C10%E5%91%A8%E5%B9%B4%23) `642.5K 🔥` `-42%`
1. [韩国 内讧](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%20%E5%86%85%E8%AE%A7%23) `506.4K 🔥` `-21%`
1. [吴谨言 产后发胖受益人 (Wu Jinyan, a beneficiary who gained weight after childbirth)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B0%A8%E8%A8%80%20%E4%BA%A7%E5%90%8E%E5%8F%91%E8%83%96%E5%8F%97%E7%9B%8A%E4%BA%BA%23) `319.4K 🔥` `-52%`
1. [白玉兰预测 (Magnolia Forecast)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E9%A2%84%E6%B5%8B%23) `315.8K 🔥` `-62%`
1. [田曦薇爱豆级别的机场出发图](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%88%B1%E8%B1%86%E7%BA%A7%E5%88%AB%E7%9A%84%E6%9C%BA%E5%9C%BA%E5%87%BA%E5%8F%91%E5%9B%BE%23) `292.2K 🔥` `-52%`
1. [工位吃饭羞耻症 (Eating at work station shame syndrome)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%8D%E5%90%83%E9%A5%AD%E7%BE%9E%E8%80%BB%E7%97%87%23) `236.3K 🔥` `-69%`
1. [白玉兰提名晚宴 (Magnolia Nomination Dinner)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E6%99%9A%E5%AE%B4%23) `202.2K 🔥` `-82%`
1. [吴尊发文控诉国泰航空](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%B0%8A%E5%8F%91%E6%96%87%E6%8E%A7%E8%AF%89%E5%9B%BD%E6%B3%B0%E8%88%AA%E7%A9%BA%23) `194.7K 🔥` `-65%`
1. [学生平时考500多分高考出分考了666](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%94%9F%E5%B9%B3%E6%97%B6%E8%80%83500%E5%A4%9A%E5%88%86%E9%AB%98%E8%80%83%E5%87%BA%E5%88%86%E8%80%83%E4%BA%86666%23) `166.1K 🔥` `-53%`
1. [原来这就是镜头畸变](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E9%95%9C%E5%A4%B4%E7%95%B8%E5%8F%98%23) `150.8K 🔥` `-79%`
1. [印度富二代坠亡系未婚妻和情人推下](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%AF%8C%E4%BA%8C%E4%BB%A3%E5%9D%A0%E4%BA%A1%E7%B3%BB%E6%9C%AA%E5%A9%9A%E5%A6%BB%E5%92%8C%E6%83%85%E4%BA%BA%E6%8E%A8%E4%B8%8B%23) `137.5K 🔥` `-76%`

Updated at 2026-06-25 23:44:31

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
