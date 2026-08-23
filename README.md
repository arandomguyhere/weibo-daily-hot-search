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

1. [张元英走路姿势](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E8%B5%B0%E8%B7%AF%E5%A7%BF%E5%8A%BF%23) `844.1K 🔥` `NEW`
1. [曝刺棠明天定妆](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%BA%E6%A3%A0%E6%98%8E%E5%A4%A9%E5%AE%9A%E5%A6%86%23) `338.5K 🔥` `NEW`
1. [DOTA2](https://s.weibo.com/weibo?q=%23DOTA2%23) `299.0K 🔥` `NEW`
1. [马斯克高度关注中国机器人](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E9%AB%98%E5%BA%A6%E5%85%B3%E6%B3%A8%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `264.0K 🔥` `NEW`
1. [曝苏新皓舞台缺失](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%8B%8F%E6%96%B0%E7%9A%93%E8%88%9E%E5%8F%B0%E7%BC%BA%E5%A4%B1%23) `235.5K 🔥` `NEW`
1. [荣耀闪电2分30秒破人类1500米纪录](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E9%97%AA%E7%94%B52%E5%88%8630%E7%A7%92%E7%A0%B4%E4%BA%BA%E7%B1%BB1500%E7%B1%B3%E7%BA%AA%E5%BD%95%23) `228.5K 🔥` `NEW`
1. [小孩哥用麻将搭了个磁悬浮列车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A9%E5%93%A5%E7%94%A8%E9%BA%BB%E5%B0%86%E6%90%AD%E4%BA%86%E4%B8%AA%E7%A3%81%E6%82%AC%E6%B5%AE%E5%88%97%E8%BD%A6%23) `225.0K 🔥` `NEW`
1. [spirit三冠](https://s.weibo.com/weibo?q=%23spirit%E4%B8%89%E5%86%A0%23) `207.4K 🔥` `NEW`
1. [齐齐哈尔一涮肉店被拍到自来水加汤](https://s.weibo.com/weibo?q=%23%E9%BD%90%E9%BD%90%E5%93%88%E5%B0%94%E4%B8%80%E6%B6%AE%E8%82%89%E5%BA%97%E8%A2%AB%E6%8B%8D%E5%88%B0%E8%87%AA%E6%9D%A5%E6%B0%B4%E5%8A%A0%E6%B1%A4%23) `177.8K 🔥` `NEW`
1. [市监回应韩红基金会救护车采购争议](https://s.weibo.com/weibo?q=%23%E5%B8%82%E7%9B%91%E5%9B%9E%E5%BA%94%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E6%95%91%E6%8A%A4%E8%BD%A6%E9%87%87%E8%B4%AD%E4%BA%89%E8%AE%AE%23) `172.6K 🔥` `NEW`
1. [矿业大佬预计黄金再涨10倍](https://s.weibo.com/weibo?q=%23%E7%9F%BF%E4%B8%9A%E5%A4%A7%E4%BD%AC%E9%A2%84%E8%AE%A1%E9%BB%84%E9%87%91%E5%86%8D%E6%B6%A810%E5%80%8D%23) `156.7K 🔥` `NEW`
1. [官方将检测冷库白菜出具无甲醛证明](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%B0%86%E6%A3%80%E6%B5%8B%E5%86%B7%E5%BA%93%E7%99%BD%E8%8F%9C%E5%87%BA%E5%85%B7%E6%97%A0%E7%94%B2%E9%86%9B%E8%AF%81%E6%98%8E%23) `156.6K 🔥` `NEW`
1. [刘宇宁对王玉雯心服口服](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%AF%B9%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%BF%83%E6%9C%8D%E5%8F%A3%E6%9C%8D%23) `156.6K 🔥` `NEW`
1. [张真源山西游玩记录](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%B1%B1%E8%A5%BF%E6%B8%B8%E7%8E%A9%E8%AE%B0%E5%BD%95%23) `153.7K 🔥` `NEW`
1. [梁王世锦赛夺冠](https://s.weibo.com/weibo?q=%23%E6%A2%81%E7%8E%8B%E4%B8%96%E9%94%A6%E8%B5%9B%E5%A4%BA%E5%86%A0%23) `1.7M 🔥` `+46%`
1. [2万件中央救灾物资支持广西](https://s.weibo.com/weibo?q=%232%E4%B8%87%E4%BB%B6%E4%B8%AD%E5%A4%AE%E6%95%91%E7%81%BE%E7%89%A9%E8%B5%84%E6%94%AF%E6%8C%81%E5%B9%BF%E8%A5%BF%23) `885.8K 🔥` `+37%`
1. [一代人有一代人的隐形家务](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E9%9A%90%E5%BD%A2%E5%AE%B6%E5%8A%A1%23) `805.1K 🔥` `+26%`
1. [原来内向的人都是这样交朋友的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%85%E5%90%91%E7%9A%84%E4%BA%BA%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E4%BA%A4%E6%9C%8B%E5%8F%8B%E7%9A%84%23) `751.0K 🔥` `+57%`
1. [张韶涵演唱会吸氧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%B8%E6%B0%A7%23) `720.3K 🔥` `+165%`
1. [留几手斥责傅首尔前夫欺软怕硬](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E6%96%A5%E8%B4%A3%E5%82%85%E9%A6%96%E5%B0%94%E5%89%8D%E5%A4%AB%E6%AC%BA%E8%BD%AF%E6%80%95%E7%A1%AC%23) `272.1K 🔥` `+24%`
1. [唐艺昕写真忘P创可贴了](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%86%99%E7%9C%9F%E5%BF%98P%E5%88%9B%E5%8F%AF%E8%B4%B4%E4%BA%86%23) `215.5K 🔥` `+21%`
1. [3姐弟太饿报警求助民警上门做饭](https://s.weibo.com/weibo?q=%233%E5%A7%90%E5%BC%9F%E5%A4%AA%E9%A5%BF%E6%8A%A5%E8%AD%A6%E6%B1%82%E5%8A%A9%E6%B0%91%E8%AD%A6%E4%B8%8A%E9%97%A8%E5%81%9A%E9%A5%AD%23) `900.8K 🔥`
1. [夏英杰下线](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E8%8B%B1%E6%9D%B0%E4%B8%8B%E7%BA%BF%23) `298.8K 🔥`
1. [傅首尔前夫发文怼留几手](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E5%89%8D%E5%A4%AB%E5%8F%91%E6%96%87%E6%80%BC%E7%95%99%E5%87%A0%E6%89%8B%23) `291.8K 🔥`
1. [永康公厕被打女子发声](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E5%BA%B7%E5%85%AC%E5%8E%95%E8%A2%AB%E6%89%93%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `290.8K 🔥`
1. [芒果新人撞脸王一博 (Mango newcomer Wang Yibo meets Wang Yibo)](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%96%B0%E4%BA%BA%E6%92%9E%E8%84%B8%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `284.9K 🔥`
1. [HR笑了半天才给她办入职](https://s.weibo.com/weibo?q=%23HR%E7%AC%91%E4%BA%86%E5%8D%8A%E5%A4%A9%E6%89%8D%E7%BB%99%E5%A5%B9%E5%8A%9E%E5%85%A5%E8%81%8C%23) `282.4K 🔥`
1. [哈兰德剪头发了](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%89%AA%E5%A4%B4%E5%8F%91%E4%BA%86%23) `277.6K 🔥`
1. [长江存储月赚100多亿](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B1%9F%E5%AD%98%E5%82%A8%E6%9C%88%E8%B5%9A100%E5%A4%9A%E4%BA%BF%23) `260.5K 🔥`
1. [唐师曾去世前白血球几乎为零](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%B8%88%E6%9B%BE%E5%8E%BB%E4%B8%96%E5%89%8D%E7%99%BD%E8%A1%80%E7%90%83%E5%87%A0%E4%B9%8E%E4%B8%BA%E9%9B%B6%23) `257.9K 🔥`
1. [难怪进郭敬明剧组瘦一圈](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E8%BF%9B%E9%83%AD%E6%95%AC%E6%98%8E%E5%89%A7%E7%BB%84%E7%98%A6%E4%B8%80%E5%9C%88%23) `253.1K 🔥`
1. [爷爷中风2岁宝宝哭着挨个去邻居家求救](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%AD%E9%A3%8E2%E5%B2%81%E5%AE%9D%E5%AE%9D%E5%93%AD%E7%9D%80%E6%8C%A8%E4%B8%AA%E5%8E%BB%E9%82%BB%E5%B1%85%E5%AE%B6%E6%B1%82%E6%95%91%23) `248.0K 🔥`
1. [杨幂平地摔](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%B9%B3%E5%9C%B0%E6%91%94%23) `243.8K 🔥`
1. [董宇辉走后东方甄选扭亏为盈赚5.44亿](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E8%B5%B0%E5%90%8E%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%89%AD%E4%BA%8F%E4%B8%BA%E7%9B%88%E8%B5%9A5.44%E4%BA%BF%23) `226.4K 🔥`
1. [维斯塔潘发生事故](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E6%96%AF%E5%A1%94%E6%BD%98%E5%8F%91%E7%94%9F%E4%BA%8B%E6%95%85%23) `221.2K 🔥`
1. [嫦娥七号任务不满足发射条件](https://s.weibo.com/weibo?q=%23%E5%AB%A6%E5%A8%A5%E4%B8%83%E5%8F%B7%E4%BB%BB%E5%8A%A1%E4%B8%8D%E6%BB%A1%E8%B6%B3%E5%8F%91%E5%B0%84%E6%9D%A1%E4%BB%B6%23) `218.7K 🔥`
1. [我的前半生删去原著罗子君女儿](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E5%88%A0%E5%8E%BB%E5%8E%9F%E8%91%97%E7%BD%97%E5%AD%90%E5%90%9B%E5%A5%B3%E5%84%BF%23) `210.7K 🔥`
1. [万茜腰臀比](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8C%9C%E8%85%B0%E8%87%80%E6%AF%94%23) `206.8K 🔥`
1. [终于懂为什么大家对容貌有执念了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%87%82%E4%B8%BA%E4%BB%80%E4%B9%88%E5%A4%A7%E5%AE%B6%E5%AF%B9%E5%AE%B9%E8%B2%8C%E6%9C%89%E6%89%A7%E5%BF%B5%E4%BA%86%23) `190.0K 🔥`
1. [刘宇宁林一已发现长得高的坏处](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%9E%97%E4%B8%80%E5%B7%B2%E5%8F%91%E7%8E%B0%E9%95%BF%E5%BE%97%E9%AB%98%E7%9A%84%E5%9D%8F%E5%A4%84%23) `171.4K 🔥`
1. [TI2026决赛日](https://s.weibo.com/weibo?q=%23TI2026%E5%86%B3%E8%B5%9B%E6%97%A5%23) `168.8K 🔥`
1. [刘耀文蹲下来和杨幂聊天](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%B9%B2%E4%B8%8B%E6%9D%A5%E5%92%8C%E6%9D%A8%E5%B9%82%E8%81%8A%E5%A4%A9%23) `168.7K 🔥`
1. [芒果新人向王一博道歉](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%96%B0%E4%BA%BA%E5%90%91%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%81%93%E6%AD%89%23) `249.5K 🔥` `-60%`
1. [梁伟铿王昶 决赛战谢苏](https://s.weibo.com/weibo?q=%23%E6%A2%81%E4%BC%9F%E9%93%BF%E7%8E%8B%E6%98%B6%20%E5%86%B3%E8%B5%9B%E6%88%98%E8%B0%A2%E8%8B%8F%23) `214.0K 🔥` `-48%`
1. [张睿家里是开烧烤店的](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E5%AE%B6%E9%87%8C%E6%98%AF%E5%BC%80%E7%83%A7%E7%83%A4%E5%BA%97%E7%9A%84%23) `193.9K 🔥` `-26%`
1. [海陆发际线](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E9%99%86%E5%8F%91%E9%99%85%E7%BA%BF%23) `189.9K 🔥` `-29%`
1. [花开锦绣](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%23) `183.8K 🔥` `-35%`
1. [重器](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%99%A8%23) `165.6K 🔥` `-29%`

Updated at 2026-08-23 22:30:30

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
