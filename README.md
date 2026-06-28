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

1. [黎家盈在太空健身画面 (Pictures of Li Jiaying exercising in space)](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E5%AE%B6%E7%9B%88%E5%9C%A8%E5%A4%AA%E7%A9%BA%E5%81%A5%E8%BA%AB%E7%94%BB%E9%9D%A2%23) `789.7K 🔥` `NEW`
1. [派出所集体去KTV招异性陪侍](https://s.weibo.com/weibo?q=%23%E6%B4%BE%E5%87%BA%E6%89%80%E9%9B%86%E4%BD%93%E5%8E%BBKTV%E6%8B%9B%E5%BC%82%E6%80%A7%E9%99%AA%E4%BE%8D%23) `697.7K 🔥` `NEW`
1. [恋与深空直播](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E7%9B%B4%E6%92%AD%23) `697.6K 🔥` `NEW`
1. [穿和搭一分开就这样](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E5%92%8C%E6%90%AD%E4%B8%80%E5%88%86%E5%BC%80%E5%B0%B1%E8%BF%99%E6%A0%B7%23) `655.9K 🔥` `NEW`
1. [旅途中做个元气浓人](https://s.weibo.com/weibo?q=%23%E6%97%85%E9%80%94%E4%B8%AD%E5%81%9A%E4%B8%AA%E5%85%83%E6%B0%94%E6%B5%93%E4%BA%BA%23) `655.9K 🔥` `NEW`
1. [豆包和DeepSeek的博弈](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%92%8CDeepSeek%E7%9A%84%E5%8D%9A%E5%BC%88%23) `654.0K 🔥` `NEW`
1. [国乒男单资格赛全军覆没](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E8%B5%84%E6%A0%BC%E8%B5%9B%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1%23) `653.1K 🔥` `NEW`
1. [恋与深空道歉国外玩家评论](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E9%81%93%E6%AD%89%E5%9B%BD%E5%A4%96%E7%8E%A9%E5%AE%B6%E8%AF%84%E8%AE%BA%23) `644.1K 🔥` `NEW`
1. [上海偶遇王一博打高尔夫](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%81%B6%E9%81%87%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%89%93%E9%AB%98%E5%B0%94%E5%A4%AB%23) `641.3K 🔥` `NEW`
1. [Alin大闹金曲奖](https://s.weibo.com/weibo?q=%23Alin%E5%A4%A7%E9%97%B9%E9%87%91%E6%9B%B2%E5%A5%96%23) `540.7K 🔥` `NEW`
1. [穆祉丞直播 (Mu Zhicheng live broadcast)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%9B%B4%E6%92%AD%23) `248.5K 🔥` `NEW`
1. [九尾感谢李九和北笙老师的鞭策](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E6%84%9F%E8%B0%A2%E6%9D%8E%E4%B9%9D%E5%92%8C%E5%8C%97%E7%AC%99%E8%80%81%E5%B8%88%E7%9A%84%E9%9E%AD%E7%AD%96%23) `242.9K 🔥` `NEW`
1. [莫离大结局](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E5%A4%A7%E7%BB%93%E5%B1%80%23) `190.7K 🔥` `NEW`
1. [黄景瑜差点就收到罚单了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E5%B7%AE%E7%82%B9%E5%B0%B1%E6%94%B6%E5%88%B0%E7%BD%9A%E5%8D%95%E4%BA%86%23) `189.3K 🔥` `NEW`
1. [陈瑶涨粉](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E6%B6%A8%E7%B2%89%23) `187.8K 🔥` `NEW`
1. [法德西荷葡绞杀上半区](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%BE%B7%E8%A5%BF%E8%8D%B7%E8%91%A1%E7%BB%9E%E6%9D%80%E4%B8%8A%E5%8D%8A%E5%8C%BA%23) `182.5K 🔥` `NEW`
1. [杨洋参加军艺同学聚会](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%8F%82%E5%8A%A0%E5%86%9B%E8%89%BA%E5%90%8C%E5%AD%A6%E8%81%9A%E4%BC%9A%23) `180.8K 🔥` `NEW`
1. [杨幂白玉兰G社生图](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%99%BD%E7%8E%89%E5%85%B0G%E7%A4%BE%E7%94%9F%E5%9B%BE%23) `177.1K 🔥` `NEW`
1. [陈瑶 瑶妹辛苦了](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%20%E7%91%B6%E5%A6%B9%E8%BE%9B%E8%8B%A6%E4%BA%86%23) `168.4K 🔥` `NEW`
1. [32强集结上咪咕看世界杯淘汰赛](https://s.weibo.com/weibo?q=%2332%E5%BC%BA%E9%9B%86%E7%BB%93%E4%B8%8A%E5%92%AA%E5%92%95%E7%9C%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E6%B7%98%E6%B1%B0%E8%B5%9B%23) `165.9K 🔥` `NEW`
1. [真正厉害的都是长期主义 (What is really powerful is long-termism)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E5%8E%89%E5%AE%B3%E7%9A%84%E9%83%BD%E6%98%AF%E9%95%BF%E6%9C%9F%E4%B8%BB%E4%B9%89%23) `162.9K 🔥` `NEW`
1. [刘烨16岁儿子诺一颜值](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%83%A816%E5%B2%81%E5%84%BF%E5%AD%90%E8%AF%BA%E4%B8%80%E9%A2%9C%E5%80%BC%23) `157.6K 🔥` `NEW`
1. [葡萄牙 死亡半区](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%20%E6%AD%BB%E4%BA%A1%E5%8D%8A%E5%8C%BA%23) `155.0K 🔥` `NEW`
1. [孙颖莎 一日双赛](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%20%E4%B8%80%E6%97%A5%E5%8F%8C%E8%B5%9B%23) `145.7K 🔥` `NEW`
1. [北京WBG对战GR](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%ACWBG%E5%AF%B9%E6%88%98GR%23) `144.6K 🔥` `NEW`
1. [穆祉丞叨叨半天发现没直播成功](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%8F%A8%E5%8F%A8%E5%8D%8A%E5%A4%A9%E5%8F%91%E7%8E%B0%E6%B2%A1%E7%9B%B4%E6%92%AD%E6%88%90%E5%8A%9F%23) `135.8K 🔥` `NEW`
1. [金泰亨太适合红色了](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%B3%B0%E4%BA%A8%E5%A4%AA%E9%80%82%E5%90%88%E7%BA%A2%E8%89%B2%E4%BA%86%23) `119.4K 🔥` `NEW`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `118.3K 🔥` `NEW`
1. [陈妍希生理性恐惧不像演的](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E7%94%9F%E7%90%86%E6%80%A7%E6%81%90%E6%83%A7%E4%B8%8D%E5%83%8F%E6%BC%94%E7%9A%84%23) `113.8K 🔥` `NEW`
1. [伊朗球迷太难了](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%90%83%E8%BF%B7%E5%A4%AA%E9%9A%BE%E4%BA%86%23) `107.6K 🔥` `NEW`
1. [一氧化二氢 伪科普博主 (Dihydrogen monoxide Pseudo-science blogger)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%B0%A7%E5%8C%96%E4%BA%8C%E6%B0%A2%20%E4%BC%AA%E7%A7%91%E6%99%AE%E5%8D%9A%E4%B8%BB%23) `106.8K 🔥` `NEW`
1. [路人教科书式指导助小男孩脱险](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E4%BA%BA%E6%95%99%E7%A7%91%E4%B9%A6%E5%BC%8F%E6%8C%87%E5%AF%BC%E5%8A%A9%E5%B0%8F%E7%94%B7%E5%AD%A9%E8%84%B1%E9%99%A9%23) `106.0K 🔥` `NEW`
1. [章建平豪赚10亿后血亏](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%BB%BA%E5%B9%B3%E8%B1%AA%E8%B5%9A10%E4%BA%BF%E5%90%8E%E8%A1%80%E4%BA%8F%23) `104.4K 🔥` `NEW`
1. [抖音通报网红诋毁袁隆平 (Douyin reports that Internet celebrities slander Yuan Longping)](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E9%80%9A%E6%8A%A5%E7%BD%91%E7%BA%A2%E8%AF%8B%E6%AF%81%E8%A2%81%E9%9A%86%E5%B9%B3%23) `1.1M 🔥` `+45%`
1. [多领域亮眼成果筑牢经济增长底气](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%A2%86%E5%9F%9F%E4%BA%AE%E7%9C%BC%E6%88%90%E6%9E%9C%E7%AD%91%E7%89%A2%E7%BB%8F%E6%B5%8E%E5%A2%9E%E9%95%BF%E5%BA%95%E6%B0%94%23) `706.1K 🔥` `+21%`
1. [诋毁袁隆平成果网红称大不了就进去 (The Internet celebrity who slandered Yuan Longping said he would go in if it was a big deal.)](https://s.weibo.com/weibo?q=%23%E8%AF%8B%E6%AF%81%E8%A2%81%E9%9A%86%E5%B9%B3%E6%88%90%E6%9E%9C%E7%BD%91%E7%BA%A2%E7%A7%B0%E5%A4%A7%E4%B8%8D%E4%BA%86%E5%B0%B1%E8%BF%9B%E5%8E%BB%23) `649.9K 🔥` `+309%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `640.6K 🔥` `+563%`
1. [白玉兰把刘亦菲放进战报](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%8A%8A%E5%88%98%E4%BA%A6%E8%8F%B2%E6%94%BE%E8%BF%9B%E6%88%98%E6%8A%A5%23) `436.5K 🔥` `+79%`
1. [韩国队回国没有接机](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%98%9F%E5%9B%9E%E5%9B%BD%E6%B2%A1%E6%9C%89%E6%8E%A5%E6%9C%BA%23) `248.9K 🔥` `+247%`
1. [苹果芯片成本涨45售价狂加250美元](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E8%8A%AF%E7%89%87%E6%88%90%E6%9C%AC%E6%B6%A845%E5%94%AE%E4%BB%B7%E7%8B%82%E5%8A%A0250%E7%BE%8E%E5%85%83%23) `189.6K 🔥` `+132%`
1. [李现 杨紫](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%20%E6%9D%A8%E7%B4%AB%23) `189.5K 🔥` `+115%`
1. [0败的佛得角vs全胜的阿根廷](https://s.weibo.com/weibo?q=%230%E8%B4%A5%E7%9A%84%E4%BD%9B%E5%BE%97%E8%A7%92vs%E5%85%A8%E8%83%9C%E7%9A%84%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `189.0K 🔥` `+158%`
1. [金饰克价年内大跌460元 (Price of gold jewelry drops by NT$460 per gram during the year)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E5%B9%B4%E5%86%85%E5%A4%A7%E8%B7%8C460%E5%85%83%23) `172.2K 🔥` `+80%`
1. [原来大家都是这么恢复能量的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E4%B9%88%E6%81%A2%E5%A4%8D%E8%83%BD%E9%87%8F%E7%9A%84%23) `153.2K 🔥` `+83%`
1. [大城市本身就是一种情绪价值](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%9F%8E%E5%B8%82%E6%9C%AC%E8%BA%AB%E5%B0%B1%E6%98%AF%E4%B8%80%E7%A7%8D%E6%83%85%E7%BB%AA%E4%BB%B7%E5%80%BC%23) `126.2K 🔥`
1. [玩家回应恋与深空回应](https://s.weibo.com/weibo?q=%23%E7%8E%A9%E5%AE%B6%E5%9B%9E%E5%BA%94%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9E%E5%BA%94%23) `118.6K 🔥`
1. [TF家族运动会](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `112.8K 🔥`
1. [伊朗出局](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%87%BA%E5%B1%80%23) `108.6K 🔥`
1. [黄灿灿回到所有人都在的这一天](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%9B%9E%E5%88%B0%E6%89%80%E6%9C%89%E4%BA%BA%E9%83%BD%E5%9C%A8%E7%9A%84%E8%BF%99%E4%B8%80%E5%A4%A9%23) `105.1K 🔥`
1. [世界杯32强全名单](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF32%E5%BC%BA%E5%85%A8%E5%90%8D%E5%8D%95%23) `646.1K 🔥` `-38%`

Updated at 2026-06-28 19:22:16

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
