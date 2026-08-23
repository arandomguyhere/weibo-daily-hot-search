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

1. [富二代以刑案迫使女主播同意包养](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E4%BA%8C%E4%BB%A3%E4%BB%A5%E5%88%91%E6%A1%88%E8%BF%AB%E4%BD%BF%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%90%8C%E6%84%8F%E5%8C%85%E5%85%BB%23) `521.9K 🔥` `NEW`
1. [武汉一新建天桥台阶开裂还未验收](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E4%B8%80%E6%96%B0%E5%BB%BA%E5%A4%A9%E6%A1%A5%E5%8F%B0%E9%98%B6%E5%BC%80%E8%A3%82%E8%BF%98%E6%9C%AA%E9%AA%8C%E6%94%B6%23) `312.2K 🔥` `NEW`
1. [Angelababy翅膀](https://s.weibo.com/weibo?q=%23Angelababy%E7%BF%85%E8%86%80%23) `219.1K 🔥` `NEW`
1. [老人店内离世店主协商赔偿1.9万元](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%BA%97%E5%86%85%E7%A6%BB%E4%B8%96%E5%BA%97%E4%B8%BB%E5%8D%8F%E5%95%86%E8%B5%94%E5%81%BF1.9%E4%B8%87%E5%85%83%23) `217.7K 🔥` `NEW`
1. [梁伟铿王昶回应决赛发挥](https://s.weibo.com/weibo?q=%23%E6%A2%81%E4%BC%9F%E9%93%BF%E7%8E%8B%E6%98%B6%E5%9B%9E%E5%BA%94%E5%86%B3%E8%B5%9B%E5%8F%91%E6%8C%A5%23) `204.8K 🔥` `NEW`
1. [狼队全胜锁定S1](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%85%A8%E8%83%9C%E9%94%81%E5%AE%9AS1%23) `203.2K 🔥` `NEW`
1. [BLG对战AL](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98AL%23) `158.1K 🔥` `NEW`
1. [美国女记者无法对孩子说中国不好](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E8%AE%B0%E8%80%85%E6%97%A0%E6%B3%95%E5%AF%B9%E5%AD%A9%E5%AD%90%E8%AF%B4%E4%B8%AD%E5%9B%BD%E4%B8%8D%E5%A5%BD%23) `149.1K 🔥` `NEW`
1. [嫦娥七号任务不满足发射条件](https://s.weibo.com/weibo?q=%23%E5%AB%A6%E5%A8%A5%E4%B8%83%E5%8F%B7%E4%BB%BB%E5%8A%A1%E4%B8%8D%E6%BB%A1%E8%B6%B3%E5%8F%91%E5%B0%84%E6%9D%A1%E4%BB%B6%23) `318.8K 🔥` `+32%`
1. [父母离婚后6岁女孩身上长白斑](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E7%A6%BB%E5%A9%9A%E5%90%8E6%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%BA%AB%E4%B8%8A%E9%95%BF%E7%99%BD%E6%96%91%23) `312.0K 🔥` `+68%`
1. [四十多岁女丁克想生孩子](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%8D%81%E5%A4%9A%E5%B2%81%E5%A5%B3%E4%B8%81%E5%85%8B%E6%83%B3%E7%94%9F%E5%AD%A9%E5%AD%90%23) `306.8K 🔥` `+49%`
1. [梁王世锦赛夺冠](https://s.weibo.com/weibo?q=%23%E6%A2%81%E7%8E%8B%E4%B8%96%E9%94%A6%E8%B5%9B%E5%A4%BA%E5%86%A0%23) `1.1M 🔥`
1. [3姐弟太饿报警求助民警上门做饭](https://s.weibo.com/weibo?q=%233%E5%A7%90%E5%BC%9F%E5%A4%AA%E9%A5%BF%E6%8A%A5%E8%AD%A6%E6%B1%82%E5%8A%A9%E6%B0%91%E8%AD%A6%E4%B8%8A%E9%97%A8%E5%81%9A%E9%A5%AD%23) `790.0K 🔥`
1. [2万件中央救灾物资支持广西](https://s.weibo.com/weibo?q=%232%E4%B8%87%E4%BB%B6%E4%B8%AD%E5%A4%AE%E6%95%91%E7%81%BE%E7%89%A9%E8%B5%84%E6%94%AF%E6%8C%81%E5%B9%BF%E8%A5%BF%23) `680.0K 🔥`
1. [张韶涵演唱会突发心脏不适](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E7%AA%81%E5%8F%91%E5%BF%83%E8%84%8F%E4%B8%8D%E9%80%82%23) `677.5K 🔥`
1. [一代人有一代人的隐形家务](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E9%9A%90%E5%BD%A2%E5%AE%B6%E5%8A%A1%23) `663.0K 🔥`
1. [张元英走路姿势](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E8%B5%B0%E8%B7%AF%E5%A7%BF%E5%8A%BF%23) `657.1K 🔥`
1. [原来内向的人都是这样交朋友的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%85%E5%90%91%E7%9A%84%E4%BA%BA%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E4%BA%A4%E6%9C%8B%E5%8F%8B%E7%9A%84%23) `648.3K 🔥`
1. [女主播被以案强迫包养录音5年自保](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B8%BB%E6%92%AD%E8%A2%AB%E4%BB%A5%E6%A1%88%E5%BC%BA%E8%BF%AB%E5%8C%85%E5%85%BB%E5%BD%95%E9%9F%B35%E5%B9%B4%E8%87%AA%E4%BF%9D%23) `610.4K 🔥`
1. [AL虐泉BLG](https://s.weibo.com/weibo?q=%23AL%E8%99%90%E6%B3%89BLG%23) `600.9K 🔥`
1. [傅首尔前夫发文怼留几手](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E5%89%8D%E5%A4%AB%E5%8F%91%E6%96%87%E6%80%BC%E7%95%99%E5%87%A0%E6%89%8B%23) `498.5K 🔥`
1. [从140瘦到了95斤](https://s.weibo.com/weibo?q=%23%E4%BB%8E140%E7%98%A6%E5%88%B0%E4%BA%8695%E6%96%A4%23) `461.8K 🔥`
1. [芒果新人向王一博道歉](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%96%B0%E4%BA%BA%E5%90%91%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%81%93%E6%AD%89%23) `432.4K 🔥`
1. [永康公厕被打女子发声](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E5%BA%B7%E5%85%AC%E5%8E%95%E8%A2%AB%E6%89%93%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `364.9K 🔥`
1. [留几手斥责傅首尔前夫欺软怕硬](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E6%96%A5%E8%B4%A3%E5%82%85%E9%A6%96%E5%B0%94%E5%89%8D%E5%A4%AB%E6%AC%BA%E8%BD%AF%E6%80%95%E7%A1%AC%23) `322.8K 🔥`
1. [矿业大佬预计黄金再涨10倍](https://s.weibo.com/weibo?q=%23%E7%9F%BF%E4%B8%9A%E5%A4%A7%E4%BD%AC%E9%A2%84%E8%AE%A1%E9%BB%84%E9%87%91%E5%86%8D%E6%B6%A810%E5%80%8D%23) `322.2K 🔥`
1. [韩红基金会救护车供应商大门紧闭](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E6%95%91%E6%8A%A4%E8%BD%A6%E4%BE%9B%E5%BA%94%E5%95%86%E5%A4%A7%E9%97%A8%E7%B4%A7%E9%97%AD%23) `315.7K 🔥`
1. [HR笑了半天才给她办入职](https://s.weibo.com/weibo?q=%23HR%E7%AC%91%E4%BA%86%E5%8D%8A%E5%A4%A9%E6%89%8D%E7%BB%99%E5%A5%B9%E5%8A%9E%E5%85%A5%E8%81%8C%23) `291.0K 🔥`
1. [王俊凯北京演唱会获批](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8C%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%E8%8E%B7%E6%89%B9%23) `253.4K 🔥`
1. [董宇辉走后东方甄选扭亏为盈赚5.44亿](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E8%B5%B0%E5%90%8E%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%89%AD%E4%BA%8F%E4%B8%BA%E7%9B%88%E8%B5%9A5.44%E4%BA%BF%23) `244.1K 🔥`
1. [马斯克高度关注中国机器人](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E9%AB%98%E5%BA%A6%E5%85%B3%E6%B3%A8%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `239.3K 🔥`
1. [我的前半生删去原著罗子君女儿](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E5%88%A0%E5%8E%BB%E5%8E%9F%E8%91%97%E7%BD%97%E5%AD%90%E5%90%9B%E5%A5%B3%E5%84%BF%23) `235.2K 🔥`
1. [哈兰德剪头发了](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%89%AA%E5%A4%B4%E5%8F%91%E4%BA%86%23) `219.1K 🔥`
1. [海陆发际线](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E9%99%86%E5%8F%91%E9%99%85%E7%BA%BF%23) `219.0K 🔥`
1. [郭晓东要去给徐良伴舞](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E4%B8%9C%E8%A6%81%E5%8E%BB%E7%BB%99%E5%BE%90%E8%89%AF%E4%BC%B4%E8%88%9E%23) `214.6K 🔥`
1. [全世界人都知道汪苏泷全开麦了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E4%BA%BA%E9%83%BD%E7%9F%A5%E9%81%93%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%85%A8%E5%BC%80%E9%BA%A6%E4%BA%86%23) `204.7K 🔥`
1. [杨幂平地摔](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%B9%B3%E5%9C%B0%E6%91%94%23) `203.9K 🔥`
1. [曝刺棠女频大男主](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%BA%E6%A3%A0%E5%A5%B3%E9%A2%91%E5%A4%A7%E7%94%B7%E4%B8%BB%23) `202.8K 🔥`
1. [唐艺昕写真忘P创可贴了](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%86%99%E7%9C%9F%E5%BF%98P%E5%88%9B%E5%8F%AF%E8%B4%B4%E4%BA%86%23) `193.3K 🔥`
1. [亲密关系和婚育制度绑定太深](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E5%92%8C%E5%A9%9A%E8%82%B2%E5%88%B6%E5%BA%A6%E7%BB%91%E5%AE%9A%E5%A4%AA%E6%B7%B1%23) `162.8K 🔥`
1. [男子乘车时充电宝爆燃扔给司机](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B9%98%E8%BD%A6%E6%97%B6%E5%85%85%E7%94%B5%E5%AE%9D%E7%88%86%E7%87%83%E6%89%94%E7%BB%99%E5%8F%B8%E6%9C%BA%23) `161.2K 🔥`
1. [BLG 运营](https://s.weibo.com/weibo?q=%23BLG%20%E8%BF%90%E8%90%A5%23) `150.4K 🔥`
1. [荣耀闪电2分30秒破人类1500米纪录](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E9%97%AA%E7%94%B52%E5%88%8630%E7%A7%92%E7%A0%B4%E4%BA%BA%E7%B1%BB1500%E7%B1%B3%E7%BA%AA%E5%BD%95%23) `148.6K 🔥`
1. [BLG团灭AL](https://s.weibo.com/weibo?q=%23BLG%E5%9B%A2%E7%81%ADAL%23) `148.3K 🔥`
1. [张韶涵演唱会吸氧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%B8%E6%B0%A7%23) `324.5K 🔥` `-27%`
1. [芒果新人撞脸王一博 (Mango newcomer Wang Yibo meets Wang Yibo)](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%96%B0%E4%BA%BA%E6%92%9E%E8%84%B8%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `318.1K 🔥` `-32%`
1. [小孩哥用麻将搭了个磁悬浮列车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A9%E5%93%A5%E7%94%A8%E9%BA%BB%E5%B0%86%E6%90%AD%E4%BA%86%E4%B8%AA%E7%A3%81%E6%82%AC%E6%B5%AE%E5%88%97%E8%BD%A6%23) `223.1K 🔥` `-54%`
1. [左奇函陈奕恒和肖添仁一起去欢乐谷](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E9%99%88%E5%A5%95%E6%81%92%E5%92%8C%E8%82%96%E6%B7%BB%E4%BB%81%E4%B8%80%E8%B5%B7%E5%8E%BB%E6%AC%A2%E4%B9%90%E8%B0%B7%23) `162.7K 🔥` `-30%`
1. [spirit三冠](https://s.weibo.com/weibo?q=%23spirit%E4%B8%89%E5%86%A0%23) `162.5K 🔥` `-72%`

Updated at 2026-08-23 23:59:16

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
