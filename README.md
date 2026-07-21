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

1. [这一秒过火 听劝 (This second is too much. Listen to me.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%20%E5%90%AC%E5%8A%9D%23) `900.7K 🔥` `NEW`
1. [九门](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%23) `613.3K 🔥` `NEW`
1. [开局之年看中国](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%80%E4%B9%8B%E5%B9%B4%E7%9C%8B%E4%B8%AD%E5%9B%BD%23) `558.0K 🔥` `NEW`
1. [NewJeans回归预告](https://s.weibo.com/weibo?q=%23NewJeans%E5%9B%9E%E5%BD%92%E9%A2%84%E5%91%8A%23) `555.3K 🔥` `NEW`
1. [朋友圈和微博的差别belike](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%92%8C%E5%BE%AE%E5%8D%9A%E7%9A%84%E5%B7%AE%E5%88%ABbelike%23) `553.2K 🔥` `NEW`
1. [面试因无证驾驶计算机被拒了](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E5%9B%A0%E6%97%A0%E8%AF%81%E9%A9%BE%E9%A9%B6%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%A2%AB%E6%8B%92%E4%BA%86%23) `536.2K 🔥` `NEW`
1. [买的金针菇忘记吃了成这样了](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%9A%84%E9%87%91%E9%92%88%E8%8F%87%E5%BF%98%E8%AE%B0%E5%90%83%E4%BA%86%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `348.2K 🔥` `NEW`
1. [汪苏泷许嵩徐良演唱会撞档](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E8%AE%B8%E5%B5%A9%E5%BE%90%E8%89%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E6%92%9E%E6%A1%A3%23) `308.7K 🔥` `NEW`
1. [不要用豆包解决人际关系矛盾](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E7%94%A8%E8%B1%86%E5%8C%85%E8%A7%A3%E5%86%B3%E4%BA%BA%E9%99%85%E5%85%B3%E7%B3%BB%E7%9F%9B%E7%9B%BE%23) `307.2K 🔥` `NEW`
1. [德明利跌停爆仓传闻](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E6%98%8E%E5%88%A9%E8%B7%8C%E5%81%9C%E7%88%86%E4%BB%93%E4%BC%A0%E9%97%BB%23) `299.9K 🔥` `NEW`
1. [曝张雅琪已婚 (It is revealed that Zhang Yaqi is married)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E9%9B%85%E7%90%AA%E5%B7%B2%E5%A9%9A%23) `292.8K 🔥` `NEW`
1. [首部AI长剧要来了](https://s.weibo.com/weibo?q=%23%E9%A6%96%E9%83%A8AI%E9%95%BF%E5%89%A7%E8%A6%81%E6%9D%A5%E4%BA%86%23) `283.2K 🔥` `NEW`
1. [韩红基金会回应网传救护车越野](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E5%9B%9E%E5%BA%94%E7%BD%91%E4%BC%A0%E6%95%91%E6%8A%A4%E8%BD%A6%E8%B6%8A%E9%87%8E%23) `283.0K 🔥` `NEW`
1. [丹尼尔呢](https://s.weibo.com/weibo?q=%23%E4%B8%B9%E5%B0%BC%E5%B0%94%E5%91%A2%23) `279.1K 🔥` `NEW`
1. [何运晨维权](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%BF%90%E6%99%A8%E7%BB%B4%E6%9D%83%23) `278.8K 🔥` `NEW`
1. [退钱哥晒世界杯球票账单](https://s.weibo.com/weibo?q=%23%E9%80%80%E9%92%B1%E5%93%A5%E6%99%92%E4%B8%96%E7%95%8C%E6%9D%AF%E7%90%83%E7%A5%A8%E8%B4%A6%E5%8D%95%23) `271.4K 🔥` `NEW`
1. [谁来救救瘦子在夏天的食欲](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%A5%E6%95%91%E6%95%91%E7%98%A6%E5%AD%90%E5%9C%A8%E5%A4%8F%E5%A4%A9%E7%9A%84%E9%A3%9F%E6%AC%B2%23) `271.4K 🔥` `NEW`
1. [小伙背15kg物资赴广西救灾不幸离世](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E8%83%8C15kg%E7%89%A9%E8%B5%84%E8%B5%B4%E5%B9%BF%E8%A5%BF%E6%95%91%E7%81%BE%E4%B8%8D%E5%B9%B8%E7%A6%BB%E4%B8%96%23) `265.6K 🔥` `NEW`
1. [怡颗莓 致癌物](https://s.weibo.com/weibo?q=%23%E6%80%A1%E9%A2%97%E8%8E%93%20%E8%87%B4%E7%99%8C%E7%89%A9%23) `265.5K 🔥` `NEW`
1. [深圳26岁女子体检发现是男性](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B326%E5%B2%81%E5%A5%B3%E5%AD%90%E4%BD%93%E6%A3%80%E5%8F%91%E7%8E%B0%E6%98%AF%E7%94%B7%E6%80%A7%23) `265.5K 🔥` `NEW`
1. [王楚然 职业生涯三把火 (Wang Churan’s three career highlights)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%20%E8%81%8C%E4%B8%9A%E7%94%9F%E6%B6%AF%E4%B8%89%E6%8A%8A%E7%81%AB%23) `265.4K 🔥` `NEW`
1. [花儿与少年8](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B48%23) `230.3K 🔥` `NEW`
1. [你需要大量的无聊](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E9%9C%80%E8%A6%81%E5%A4%A7%E9%87%8F%E7%9A%84%E6%97%A0%E8%81%8A%23) `208.0K 🔥` `NEW`
1. [张凌赫圈内口碑](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9C%88%E5%86%85%E5%8F%A3%E7%A2%91%23) `207.1K 🔥` `NEW`
1. [路人看到辛芷蕾以为去入伍了](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E4%BA%BA%E7%9C%8B%E5%88%B0%E8%BE%9B%E8%8A%B7%E8%95%BE%E4%BB%A5%E4%B8%BA%E5%8E%BB%E5%85%A5%E4%BC%8D%E4%BA%86%23) `206.1K 🔥` `NEW`
1. [主体性强的人会觉得谈恋爱很无聊](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BD%93%E6%80%A7%E5%BC%BA%E7%9A%84%E4%BA%BA%E4%BC%9A%E8%A7%89%E5%BE%97%E8%B0%88%E6%81%8B%E7%88%B1%E5%BE%88%E6%97%A0%E8%81%8A%23) `205.1K 🔥` `NEW`
1. [谢贤一年前已不太认得人](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E4%B8%80%E5%B9%B4%E5%89%8D%E5%B7%B2%E4%B8%8D%E5%A4%AA%E8%AE%A4%E5%BE%97%E4%BA%BA%23) `204.6K 🔥` `NEW`
1. [NewJeans四人组](https://s.weibo.com/weibo?q=%23NewJeans%E5%9B%9B%E4%BA%BA%E7%BB%84%23) `201.9K 🔥` `NEW`
1. [足协杯](https://s.weibo.com/weibo?q=%23%E8%B6%B3%E5%8D%8F%E6%9D%AF%23) `180.8K 🔥` `NEW`
1. [minji好美](https://s.weibo.com/weibo?q=%23minji%E5%A5%BD%E7%BE%8E%23) `176.2K 🔥` `NEW`
1. [陈都灵新剧造型 不符合人设 (Chen Duling’s new drama look doesn’t fit the character)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E6%96%B0%E5%89%A7%E9%80%A0%E5%9E%8B%20%E4%B8%8D%E7%AC%A6%E5%90%88%E4%BA%BA%E8%AE%BE%23) `174.2K 🔥` `NEW`
1. [蛋糕师笑了半天才决定把蛋糕送走](https://s.weibo.com/weibo?q=%23%E8%9B%8B%E7%B3%95%E5%B8%88%E7%AC%91%E4%BA%86%E5%8D%8A%E5%A4%A9%E6%89%8D%E5%86%B3%E5%AE%9A%E6%8A%8A%E8%9B%8B%E7%B3%95%E9%80%81%E8%B5%B0%23) `165.6K 🔥` `NEW`
1. [易梦玲被裁掉的女孩](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%A2%A6%E7%8E%B2%E8%A2%AB%E8%A3%81%E6%8E%89%E7%9A%84%E5%A5%B3%E5%AD%A9%23) `164.3K 🔥` `NEW`
1. [高市早苗发文诉苦](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%8F%91%E6%96%87%E8%AF%89%E8%8B%A6%23) `157.6K 🔥` `NEW`
1. [NewJeans出道四周年](https://s.weibo.com/weibo?q=%23NewJeans%E5%87%BA%E9%81%93%E5%9B%9B%E5%91%A8%E5%B9%B4%23) `156.9K 🔥` `NEW`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `148.1K 🔥` `NEW`
1. [阴阳师](https://s.weibo.com/weibo?q=%23%E9%98%B4%E9%98%B3%E5%B8%88%23) `146.1K 🔥` `NEW`
1. [张雨绮 幼态风](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%A8%E7%BB%AE%20%E5%B9%BC%E6%80%81%E9%A3%8E%23) `144.3K 🔥` `NEW`
1. [国产剧终于不强行圆回来了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E5%89%A7%E7%BB%88%E4%BA%8E%E4%B8%8D%E5%BC%BA%E8%A1%8C%E5%9C%86%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `133.8K 🔥` `NEW`
1. [广州家长因孩子选择中本贯通落泪](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%AE%B6%E9%95%BF%E5%9B%A0%E5%AD%A9%E5%AD%90%E9%80%89%E6%8B%A9%E4%B8%AD%E6%9C%AC%E8%B4%AF%E9%80%9A%E8%90%BD%E6%B3%AA%23) `130.4K 🔥` `NEW`
1. [王源提到了TFBOYS演唱会 (Wang Yuan mentioned the TFBOYS concert)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%8F%90%E5%88%B0%E4%BA%86TFBOYS%E6%BC%94%E5%94%B1%E4%BC%9A%23) `130.0K 🔥` `NEW`
1. [谢霆锋16岁出道半个娱乐圈助阵](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B16%E5%B2%81%E5%87%BA%E9%81%93%E5%8D%8A%E4%B8%AA%E5%A8%B1%E4%B9%90%E5%9C%88%E5%8A%A9%E9%98%B5%23) `127.4K 🔥` `NEW`
1. [Bin暂别赛场](https://s.weibo.com/weibo?q=%23Bin%E6%9A%82%E5%88%AB%E8%B5%9B%E5%9C%BA%23) `124.4K 🔥` `NEW`
1. [这一秒过火替换片头](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E6%9B%BF%E6%8D%A2%E7%89%87%E5%A4%B4%23) `121.7K 🔥` `NEW`
1. [爱在无尽夏 柯淳](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%9C%A8%E6%97%A0%E5%B0%BD%E5%A4%8F%20%E6%9F%AF%E6%B7%B3%23) `108.6K 🔥` `NEW`
1. [宗馥莉上诉许可申请被驳回](https://s.weibo.com/weibo?q=%23%E5%AE%97%E9%A6%A5%E8%8E%89%E4%B8%8A%E8%AF%89%E8%AE%B8%E5%8F%AF%E7%94%B3%E8%AF%B7%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `108.4K 🔥` `NEW`
1. [人工智能 文科生](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%20%E6%96%87%E7%A7%91%E7%94%9F%23) `107.6K 🔥` `NEW`
1. [A股深V反弹原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%B7%B1V%E5%8F%8D%E5%BC%B9%E5%8E%9F%E5%9B%A0%23) `107.0K 🔥` `NEW`
1. [驰援广西离世小伙骨灰已回四川](https://s.weibo.com/weibo?q=%23%E9%A9%B0%E6%8F%B4%E5%B9%BF%E8%A5%BF%E7%A6%BB%E4%B8%96%E5%B0%8F%E4%BC%99%E9%AA%A8%E7%81%B0%E5%B7%B2%E5%9B%9E%E5%9B%9B%E5%B7%9D%23) `106.5K 🔥` `NEW`
1. [因提亲一句玩笑公公送5吨西瓜](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E6%8F%90%E4%BA%B2%E4%B8%80%E5%8F%A5%E7%8E%A9%E7%AC%91%E5%85%AC%E5%85%AC%E9%80%815%E5%90%A8%E8%A5%BF%E7%93%9C%23) `106.0K 🔥` `NEW`

Updated at 2026-07-22 00:41:31

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
