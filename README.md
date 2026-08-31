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

1. [中国男篮vs黎巴嫩男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E9%BB%8E%E5%B7%B4%E5%AB%A9%E7%94%B7%E7%AF%AE%23) `1.7M 🔥` `NEW`
1. [杨瀚森绝杀](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E7%BB%9D%E6%9D%80%23) `1.4M 🔥` `NEW`
1. [多架次直升机驰援吉隆灾区](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%9E%B6%E6%AC%A1%E7%9B%B4%E5%8D%87%E6%9C%BA%E9%A9%B0%E6%8F%B4%E5%90%89%E9%9A%86%E7%81%BE%E5%8C%BA%23) `1.1M 🔥` `NEW`
1. [还我季洁](https://s.weibo.com/weibo?q=%23%E8%BF%98%E6%88%91%E5%AD%A3%E6%B4%81%23) `1.1M 🔥` `NEW`
1. [子涵梓萱的时代已成过去式](https://s.weibo.com/weibo?q=%23%E5%AD%90%E6%B6%B5%E6%A2%93%E8%90%B1%E7%9A%84%E6%97%B6%E4%BB%A3%E5%B7%B2%E6%88%90%E8%BF%87%E5%8E%BB%E5%BC%8F%23) `656.5K 🔥` `NEW`
1. [吉隆口岸唯一能看到的建筑](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%94%AF%E4%B8%80%E8%83%BD%E7%9C%8B%E5%88%B0%E7%9A%84%E5%BB%BA%E7%AD%91%23) `656.1K 🔥` `NEW`
1. [外卖员向配送饮料里加百草枯系谣言](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%91%98%E5%90%91%E9%85%8D%E9%80%81%E9%A5%AE%E6%96%99%E9%87%8C%E5%8A%A0%E7%99%BE%E8%8D%89%E6%9E%AF%E7%B3%BB%E8%B0%A3%E8%A8%80%23) `619.2K 🔥` `NEW`
1. [杨瀚森状态](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E7%8A%B6%E6%80%81%23) `540.8K 🔥` `NEW`
1. [山姆9个月卖了100万个会员](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%869%E4%B8%AA%E6%9C%88%E5%8D%96%E4%BA%86100%E4%B8%87%E4%B8%AA%E4%BC%9A%E5%91%98%23) `372.9K 🔥` `NEW`
1. [中国男篮绝杀黎巴嫩男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E7%BB%9D%E6%9D%80%E9%BB%8E%E5%B7%B4%E5%AB%A9%E7%94%B7%E7%AF%AE%23) `371.1K 🔥` `NEW`
1. [早春晴朗25.6](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%9725.6%23) `367.5K 🔥` `NEW`
1. [两小时演唱会休息了80分钟](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%B0%8F%E6%97%B6%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BC%91%E6%81%AF%E4%BA%8680%E5%88%86%E9%92%9F%23) `367.5K 🔥` `NEW`
1. [网红店回应两块榴莲370元](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%BA%97%E5%9B%9E%E5%BA%94%E4%B8%A4%E5%9D%97%E6%A6%B4%E8%8E%B2370%E5%85%83%23) `367.5K 🔥` `NEW`
1. [重案六组](https://s.weibo.com/weibo?q=%23%E9%87%8D%E6%A1%88%E5%85%AD%E7%BB%84%23) `341.8K 🔥` `NEW`
1. [黄磊回应做饭不好吃](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A%E5%9B%9E%E5%BA%94%E5%81%9A%E9%A5%AD%E4%B8%8D%E5%A5%BD%E5%90%83%23) `330.7K 🔥` `NEW`
1. [对帅有了新的认知](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%B8%85%E6%9C%89%E4%BA%86%E6%96%B0%E7%9A%84%E8%AE%A4%E7%9F%A5%23) `307.9K 🔥` `NEW`
1. [曝科大讯飞公关副总裁被解职](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%A7%91%E5%A4%A7%E8%AE%AF%E9%A3%9E%E5%85%AC%E5%85%B3%E5%89%AF%E6%80%BB%E8%A3%81%E8%A2%AB%E8%A7%A3%E8%81%8C%23) `235.6K 🔥` `NEW`
1. [半是蜜糖半是伤 于中中巅峰](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E6%98%AF%E8%9C%9C%E7%B3%96%E5%8D%8A%E6%98%AF%E4%BC%A4%20%E4%BA%8E%E4%B8%AD%E4%B8%AD%E5%B7%85%E5%B3%B0%23) `227.3K 🔥` `NEW`
1. [华为上半年营收4678亿元](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B8%8A%E5%8D%8A%E5%B9%B4%E8%90%A5%E6%94%B64678%E4%BA%BF%E5%85%83%23) `208.9K 🔥` `NEW`
1. [后西游记](https://s.weibo.com/weibo?q=%23%E5%90%8E%E8%A5%BF%E6%B8%B8%E8%AE%B0%23) `189.7K 🔥` `NEW`
1. [暖阳被WB气到下播](https://s.weibo.com/weibo?q=%23%E6%9A%96%E9%98%B3%E8%A2%ABWB%E6%B0%94%E5%88%B0%E4%B8%8B%E6%92%AD%23) `186.9K 🔥` `NEW`
1. [王鸥回复李小冉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%E5%9B%9E%E5%A4%8D%E6%9D%8E%E5%B0%8F%E5%86%89%23) `186.4K 🔥` `NEW`
1. [九成美考研上岸了](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E6%88%90%E7%BE%8E%E8%80%83%E7%A0%94%E4%B8%8A%E5%B2%B8%E4%BA%86%23) `185.6K 🔥` `NEW`
1. [学院党委书记著作被指抄袭](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E9%99%A2%E5%85%9A%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%91%97%E4%BD%9C%E8%A2%AB%E6%8C%87%E6%8A%84%E8%A2%AD%23) `183.8K 🔥` `NEW`
1. [出生人口 双休落实](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%94%9F%E4%BA%BA%E5%8F%A3%20%E5%8F%8C%E4%BC%91%E8%90%BD%E5%AE%9E%23) `183.0K 🔥` `NEW`
1. [清华美院把航天员画成发面馒头](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E7%BE%8E%E9%99%A2%E6%8A%8A%E8%88%AA%E5%A4%A9%E5%91%98%E7%94%BB%E6%88%90%E5%8F%91%E9%9D%A2%E9%A6%92%E5%A4%B4%23) `182.7K 🔥` `NEW`
1. [王鸥 我目前独自养育一个孩子](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%20%E6%88%91%E7%9B%AE%E5%89%8D%E7%8B%AC%E8%87%AA%E5%85%BB%E8%82%B2%E4%B8%80%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `181.1K 🔥` `NEW`
1. [中国影坛最担心的事来了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%BD%B1%E5%9D%9B%E6%9C%80%E6%8B%85%E5%BF%83%E7%9A%84%E4%BA%8B%E6%9D%A5%E4%BA%86%23) `180.5K 🔥` `NEW`
1. [女子误诊抑郁病治疗3个月暴瘦20斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%AF%AF%E8%AF%8A%E6%8A%91%E9%83%81%E7%97%85%E6%B2%BB%E7%96%973%E4%B8%AA%E6%9C%88%E6%9A%B4%E7%98%A620%E6%96%A4%23) `178.8K 🔥` `NEW`
1. [出生人口连锁反应](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%94%9F%E4%BA%BA%E5%8F%A3%E8%BF%9E%E9%94%81%E5%8F%8D%E5%BA%94%23) `178.7K 🔥` `NEW`
1. [钱存公积金账户可能比银行利息高](https://s.weibo.com/weibo?q=%23%E9%92%B1%E5%AD%98%E5%85%AC%E7%A7%AF%E9%87%91%E8%B4%A6%E6%88%B7%E5%8F%AF%E8%83%BD%E6%AF%94%E9%93%B6%E8%A1%8C%E5%88%A9%E6%81%AF%E9%AB%98%23) `178.6K 🔥` `NEW`
1. [装腔启示录](https://s.weibo.com/weibo?q=%23%E8%A3%85%E8%85%94%E5%90%AF%E7%A4%BA%E5%BD%95%23) `178.5K 🔥` `NEW`
1. [九尾的plog是会动的](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E7%9A%84plog%E6%98%AF%E4%BC%9A%E5%8A%A8%E7%9A%84%23) `178.4K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `178.1K 🔥` `NEW`
1. [峰哥见到黄景瑜的反应](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A5%E8%A7%81%E5%88%B0%E9%BB%84%E6%99%AF%E7%91%9C%E7%9A%84%E5%8F%8D%E5%BA%94%23) `178.1K 🔥` `NEW`
1. [出生人口 教育没变轻松](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%94%9F%E4%BA%BA%E5%8F%A3%20%E6%95%99%E8%82%B2%E6%B2%A1%E5%8F%98%E8%BD%BB%E6%9D%BE%23) `176.6K 🔥` `NEW`
1. [2026芭莎之夜阵容官宣](https://s.weibo.com/weibo?q=%232026%E8%8A%AD%E8%8E%8E%E4%B9%8B%E5%A4%9C%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `164.7K 🔥` `NEW`
1. [巩俐被易烊千玺逗笑](https://s.weibo.com/weibo?q=%23%E5%B7%A9%E4%BF%90%E8%A2%AB%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E9%80%97%E7%AC%91%23) `164.6K 🔥` `NEW`
1. [人一旦决定开始省钱](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E5%86%B3%E5%AE%9A%E5%BC%80%E5%A7%8B%E7%9C%81%E9%92%B1%23) `154.4K 🔥` `NEW`
1. [澳门第四起诬告强奸案](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E9%97%A8%E7%AC%AC%E5%9B%9B%E8%B5%B7%E8%AF%AC%E5%91%8A%E5%BC%BA%E5%A5%B8%E6%A1%88%23) `146.5K 🔥` `NEW`
1. [吉林一事业单位招聘多岗位高分断层](https://s.weibo.com/weibo?q=%23%E5%90%89%E6%9E%97%E4%B8%80%E4%BA%8B%E4%B8%9A%E5%8D%95%E4%BD%8D%E6%8B%9B%E8%81%98%E5%A4%9A%E5%B2%97%E4%BD%8D%E9%AB%98%E5%88%86%E6%96%AD%E5%B1%82%23) `144.3K 🔥` `NEW`
1. [至今不知道杨洋丢失那一晚发生了什么](https://s.weibo.com/weibo?q=%23%E8%87%B3%E4%BB%8A%E4%B8%8D%E7%9F%A5%E9%81%93%E6%9D%A8%E6%B4%8B%E4%B8%A2%E5%A4%B1%E9%82%A3%E4%B8%80%E6%99%9A%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%23) `142.8K 🔥` `NEW`
1. [官方通报事业单位招聘高分断层](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E4%BA%8B%E4%B8%9A%E5%8D%95%E4%BD%8D%E6%8B%9B%E8%81%98%E9%AB%98%E5%88%86%E6%96%AD%E5%B1%82%23) `137.6K 🔥` `NEW`
1. [马嘉祺鸡蛋歌叫冰箱没有鸡蛋](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E9%B8%A1%E8%9B%8B%E6%AD%8C%E5%8F%AB%E5%86%B0%E7%AE%B1%E6%B2%A1%E6%9C%89%E9%B8%A1%E8%9B%8B%23) `132.0K 🔥` `NEW`
1. [EDGM对战WB](https://s.weibo.com/weibo?q=%23EDGM%E5%AF%B9%E6%88%98WB%23) `131.2K 🔥` `NEW`
1. [Jennie参加朋友的婚礼](https://s.weibo.com/weibo?q=%23Jennie%E5%8F%82%E5%8A%A0%E6%9C%8B%E5%8F%8B%E7%9A%84%E5%A9%9A%E7%A4%BC%23) `129.0K 🔥` `NEW`
1. [出生人口 生育补贴](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%94%9F%E4%BA%BA%E5%8F%A3%20%E7%94%9F%E8%82%B2%E8%A1%A5%E8%B4%B4%23) `128.5K 🔥` `NEW`
1. [盘串人最怕的贤惠出现了](https://s.weibo.com/weibo?q=%23%E7%9B%98%E4%B8%B2%E4%BA%BA%E6%9C%80%E6%80%95%E7%9A%84%E8%B4%A4%E6%83%A0%E5%87%BA%E7%8E%B0%E4%BA%86%23) `122.4K 🔥` `NEW`
1. [美国人买中国产播放器被土味歌圈粉](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BA%BA%E4%B9%B0%E4%B8%AD%E5%9B%BD%E4%BA%A7%E6%92%AD%E6%94%BE%E5%99%A8%E8%A2%AB%E5%9C%9F%E5%91%B3%E6%AD%8C%E5%9C%88%E7%B2%89%23) `122.4K 🔥` `NEW`
1. [华为上半年研发投入1213亿元](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B8%8A%E5%8D%8A%E5%B9%B4%E7%A0%94%E5%8F%91%E6%8A%95%E5%85%A51213%E4%BA%BF%E5%85%83%23) `122.4K 🔥` `NEW`
1. [尼泊尔泥石流已致903遇难4247失联](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%B7%B2%E8%87%B4903%E9%81%87%E9%9A%BE4247%E5%A4%B1%E8%81%94%23) `134.8K 🔥` `-96%`

Updated at 2026-08-31 21:48:49

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
