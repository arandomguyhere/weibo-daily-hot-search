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

1. [张雪峰 (Zhang Xuefeng)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%23) `4.8M 🔥` `NEW`
1. [助理回应张雪峰心脏骤停抢救传闻](https://s.weibo.com/weibo?q=%23%E5%8A%A9%E7%90%86%E5%9B%9E%E5%BA%94%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%BF%83%E8%84%8F%E9%AA%A4%E5%81%9C%E6%8A%A2%E6%95%91%E4%BC%A0%E9%97%BB%23) `3.9M 🔥` `NEW`
1. [外交部回应日方拟将中日关系降级](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E6%97%A5%E6%96%B9%E6%8B%9F%E5%B0%86%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%E9%99%8D%E7%BA%A7%23) `213.6K 🔥` `NEW`
1. [A股大反攻原因找到了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%A4%A7%E5%8F%8D%E6%94%BB%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `203.5K 🔥` `NEW`
1. [地铁吐血女孩一天打三份工赚三四百](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E4%B8%80%E5%A4%A9%E6%89%93%E4%B8%89%E4%BB%BD%E5%B7%A5%E8%B5%9A%E4%B8%89%E5%9B%9B%E7%99%BE%23) `180.8K 🔥` `NEW`
1. [95后回村用拼多多爆改40年老房](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E5%9B%9E%E6%9D%91%E7%94%A8%E6%8B%BC%E5%A4%9A%E5%A4%9A%E7%88%86%E6%94%B940%E5%B9%B4%E8%80%81%E6%88%BF%23) `179.6K 🔥` `NEW`
1. [迪丽热巴原声台词夯爆了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8E%9F%E5%A3%B0%E5%8F%B0%E8%AF%8D%E5%A4%AF%E7%88%86%E4%BA%86%23) `179.2K 🔥` `NEW`
1. [孩子一提上学就窒息家长以为装病](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E4%B8%80%E6%8F%90%E4%B8%8A%E5%AD%A6%E5%B0%B1%E7%AA%92%E6%81%AF%E5%AE%B6%E9%95%BF%E4%BB%A5%E4%B8%BA%E8%A3%85%E7%97%85%23) `178.0K 🔥` `NEW`
1. [搞不到尿素愁坏印度](https://s.weibo.com/weibo?q=%23%E6%90%9E%E4%B8%8D%E5%88%B0%E5%B0%BF%E7%B4%A0%E6%84%81%E5%9D%8F%E5%8D%B0%E5%BA%A6%23) `177.2K 🔥` `NEW`
1. [产妇街头发作扒开服装店门求助](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E5%A6%87%E8%A1%97%E5%A4%B4%E5%8F%91%E4%BD%9C%E6%89%92%E5%BC%80%E6%9C%8D%E8%A3%85%E5%BA%97%E9%97%A8%E6%B1%82%E5%8A%A9%23) `176.4K 🔥` `NEW`
1. [合伙人回应张雪峰心脏骤停抢救传闻 (Partners respond to rumors about Zhang Xuefeng’s cardiac arrest rescue)](https://s.weibo.com/weibo?q=%23%E5%90%88%E4%BC%99%E4%BA%BA%E5%9B%9E%E5%BA%94%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%BF%83%E8%84%8F%E9%AA%A4%E5%81%9C%E6%8A%A2%E6%95%91%E4%BC%A0%E9%97%BB%23) `166.1K 🔥` `NEW`
1. [启境汽车公司正式更名](https://s.weibo.com/weibo?q=%23%E5%90%AF%E5%A2%83%E6%B1%BD%E8%BD%A6%E5%85%AC%E5%8F%B8%E6%AD%A3%E5%BC%8F%E6%9B%B4%E5%90%8D%23) `152.1K 🔥` `NEW`
1. [周杰伦太阳之子MV](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%A4%AA%E9%98%B3%E4%B9%8B%E5%AD%90MV%23) `149.9K 🔥` `NEW`
1. [王者S43新赛季即将开启](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85S43%E6%96%B0%E8%B5%9B%E5%AD%A3%E5%8D%B3%E5%B0%86%E5%BC%80%E5%90%AF%23) `139.5K 🔥` `NEW`
1. [李圣经来北京了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A3%E7%BB%8F%E6%9D%A5%E5%8C%97%E4%BA%AC%E4%BA%86%23) `133.7K 🔥` `NEW`
1. [小米2025年净利润392亿](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B32025%E5%B9%B4%E5%87%80%E5%88%A9%E6%B6%A6392%E4%BA%BF%23) `125.2K 🔥` `NEW`
1. [王玉雯开推造型](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%BC%80%E6%8E%A8%E9%80%A0%E5%9E%8B%23) `125.1K 🔥` `NEW`
1. [以总统刚开完发布会火箭弹击中附近](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%80%BB%E7%BB%9F%E5%88%9A%E5%BC%80%E5%AE%8C%E5%8F%91%E5%B8%83%E4%BC%9A%E7%81%AB%E7%AE%AD%E5%BC%B9%E5%87%BB%E4%B8%AD%E9%99%84%E8%BF%91%23) `124.8K 🔥` `NEW`
1. [雷军回应小米2025年净利润391.7亿](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E5%B0%8F%E7%B1%B32025%E5%B9%B4%E5%87%80%E5%88%A9%E6%B6%A6391.7%E4%BA%BF%23) `124.8K 🔥` `NEW`
1. [霸王茶姬杯贴](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E6%9D%AF%E8%B4%B4%23) `119.0K 🔥` `NEW`
1. [小米2025年财报 (Xiaomi 2025 financial report)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B32025%E5%B9%B4%E8%B4%A2%E6%8A%A5%23) `116.9K 🔥` `NEW`
1. [宝格丽高级珠宝发布会](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%A0%BC%E4%B8%BD%E9%AB%98%E7%BA%A7%E7%8F%A0%E5%AE%9D%E5%8F%91%E5%B8%83%E4%BC%9A%23) `101.8K 🔥` `NEW`
1. [特朗普说美防长第一个提议对伊动武](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E7%BE%8E%E9%98%B2%E9%95%BF%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%8F%90%E8%AE%AE%E5%AF%B9%E4%BC%8A%E5%8A%A8%E6%AD%A6%23) `99.8K 🔥` `NEW`
1. [金价下跌打乱金饰涨价计划](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8B%E8%B7%8C%E6%89%93%E4%B9%B1%E9%87%91%E9%A5%B0%E6%B6%A8%E4%BB%B7%E8%AE%A1%E5%88%92%23) `98.8K 🔥` `NEW`
1. [老铺黄金涨超16%](https://s.weibo.com/weibo?q=%23%E8%80%81%E9%93%BA%E9%BB%84%E9%87%91%E6%B6%A8%E8%B6%8516%25%23) `97.7K 🔥` `NEW`
1. [打卡春天里的大美中国](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%8D%A1%E6%98%A5%E5%A4%A9%E9%87%8C%E7%9A%84%E5%A4%A7%E7%BE%8E%E4%B8%AD%E5%9B%BD%23) `1.1M 🔥` `+81%`
1. [问界M8焕新升级首发评测](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM8%E7%84%95%E6%96%B0%E5%8D%87%E7%BA%A7%E9%A6%96%E5%8F%91%E8%AF%84%E6%B5%8B%23) `990.6K 🔥` `+263%`
1. [4岁女童就诊177次患者是母亲](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%B0%B1%E8%AF%8A177%E6%AC%A1%E6%82%A3%E8%80%85%E6%98%AF%E6%AF%8D%E4%BA%B2%23) `717.7K 🔥` `+28%`
1. [53岁独身女子去世留下600万遗产](https://s.weibo.com/weibo?q=%2353%E5%B2%81%E7%8B%AC%E8%BA%AB%E5%A5%B3%E5%AD%90%E5%8E%BB%E4%B8%96%E7%95%99%E4%B8%8B600%E4%B8%87%E9%81%97%E4%BA%A7%23) `351.2K 🔥` `+331%`
1. [张凌赫陈哲远将军造型对比](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%99%88%E5%93%B2%E8%BF%9C%E5%B0%86%E5%86%9B%E9%80%A0%E5%9E%8B%E5%AF%B9%E6%AF%94%23) `183.0K 🔥` `+60%`
1. [以色列被打穿了 (Israel is penetrated)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%A2%AB%E6%89%93%E7%A9%BF%E4%BA%86%23) `371.6K 🔥`
1. [少年因恐吓致失禁离世时仍穿尿不湿 (Teenager died wearing diaper after becoming incontinent due to threats)](https://s.weibo.com/weibo?q=%23%E5%B0%91%E5%B9%B4%E5%9B%A0%E6%81%90%E5%90%93%E8%87%B4%E5%A4%B1%E7%A6%81%E7%A6%BB%E4%B8%96%E6%97%B6%E4%BB%8D%E7%A9%BF%E5%B0%BF%E4%B8%8D%E6%B9%BF%23) `182.3K 🔥`
1. [日本](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%23) `181.6K 🔥`
1. [面筋哥女儿自曝遭继父持续4年性骚扰](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E7%AD%8B%E5%93%A5%E5%A5%B3%E5%84%BF%E8%87%AA%E6%9B%9D%E9%81%AD%E7%BB%A7%E7%88%B6%E6%8C%81%E7%BB%AD4%E5%B9%B4%E6%80%A7%E9%AA%9A%E6%89%B0%23) `180.4K 🔥`
1. [美国5名顶尖科学家接连失踪死亡](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD5%E5%90%8D%E9%A1%B6%E5%B0%96%E7%A7%91%E5%AD%A6%E5%AE%B6%E6%8E%A5%E8%BF%9E%E5%A4%B1%E8%B8%AA%E6%AD%BB%E4%BA%A1%23) `176.0K 🔥`
1. [恭喜你发明了劳务派遣](https://s.weibo.com/weibo?q=%23%E6%81%AD%E5%96%9C%E4%BD%A0%E5%8F%91%E6%98%8E%E4%BA%86%E5%8A%B3%E5%8A%A1%E6%B4%BE%E9%81%A3%23) `165.3K 🔥`
1. [邓凯 鲁迅美院](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%20%E9%B2%81%E8%BF%85%E7%BE%8E%E9%99%A2%23) `162.5K 🔥`
1. [张凌赫知道热巴白宇退出开推的反应](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9F%A5%E9%81%93%E7%83%AD%E5%B7%B4%E7%99%BD%E5%AE%87%E9%80%80%E5%87%BA%E5%BC%80%E6%8E%A8%E7%9A%84%E5%8F%8D%E5%BA%94%23) `161.6K 🔥`
1. [婚礼迎来了最严厉的新娘](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E7%A4%BC%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E6%96%B0%E5%A8%98%23) `157.4K 🔥`
1. [难听 (ugly)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E5%90%AC%23) `157.0K 🔥`
1. [王俊凯 有人在吗WJK在](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E6%9C%89%E4%BA%BA%E5%9C%A8%E5%90%97WJK%E5%9C%A8%23) `144.7K 🔥`
1. [郭敬明改笔名](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E6%94%B9%E7%AC%94%E5%90%8D%23) `139.3K 🔥`
1. [伊朗最高领袖顾问重申结束战争条件 (Adviser to Iran's supreme leader reiterates conditions for ending war)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E9%A1%BE%E9%97%AE%E9%87%8D%E7%94%B3%E7%BB%93%E6%9D%9F%E6%88%98%E4%BA%89%E6%9D%A1%E4%BB%B6%23) `138.6K 🔥`
1. [周杰伦斥资一亿手搓vsAI续作 (Jay Chou spends 100 million on hand rubbing vs. AI sequel)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%A5%E8%B5%84%E4%B8%80%E4%BA%BF%E6%89%8B%E6%90%93vsAI%E7%BB%AD%E4%BD%9C%23) `136.2K 🔥`
1. [各地文旅给千问上了波强度 (Cultural tourism from all over the country has made waves for Qianwen)](https://s.weibo.com/weibo?q=%23%E5%90%84%E5%9C%B0%E6%96%87%E6%97%85%E7%BB%99%E5%8D%83%E9%97%AE%E4%B8%8A%E4%BA%86%E6%B3%A2%E5%BC%BA%E5%BA%A6%23) `124.9K 🔥`
1. [一日本人威胁要杀中国外交人员](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%A8%81%E8%83%81%E8%A6%81%E6%9D%80%E4%B8%AD%E5%9B%BD%E5%A4%96%E4%BA%A4%E4%BA%BA%E5%91%98%23) `381.8K 🔥` `-27%`
1. [田曦薇簪花将军转场](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%B0%AA%E8%8A%B1%E5%B0%86%E5%86%9B%E8%BD%AC%E5%9C%BA%23) `183.5K 🔥` `-29%`
1. [迪士尼 物价](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A3%AB%E5%B0%BC%20%E7%89%A9%E4%BB%B7%23) `116.1K 🔥` `-89%`
1. [专家建议26岁高卿尘立遗嘱](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%BB%BA%E8%AE%AE26%E5%B2%81%E9%AB%98%E5%8D%BF%E5%B0%98%E7%AB%8B%E9%81%97%E5%98%B1%23) `107.7K 🔥` `-61%`
1. [第一批丁克家庭现状曝光 (Current status of the first batch of DINK families exposed)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E4%B8%81%E5%85%8B%E5%AE%B6%E5%BA%AD%E7%8E%B0%E7%8A%B6%E6%9B%9D%E5%85%89%23) `107.0K 🔥` `-26%`
1. [王鹤棣将门独后骑马路透](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E9%AA%91%E9%A9%AC%E8%B7%AF%E9%80%8F%23) `97.7K 🔥` `-29%`

Updated at 2026-03-24 18:29:28

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
