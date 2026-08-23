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

1. [支付宝答题全国统考正式开始](https://s.weibo.com/weibo?q=%23%E6%94%AF%E4%BB%98%E5%AE%9D%E7%AD%94%E9%A2%98%E5%85%A8%E5%9B%BD%E7%BB%9F%E8%80%83%E6%AD%A3%E5%BC%8F%E5%BC%80%E5%A7%8B%23) `263.2K 🔥` `NEW`
1. [健康不要盲目追求低体脂](https://s.weibo.com/weibo?q=%23%E5%81%A5%E5%BA%B7%E4%B8%8D%E8%A6%81%E7%9B%B2%E7%9B%AE%E8%BF%BD%E6%B1%82%E4%BD%8E%E4%BD%93%E8%84%82%23) `242.4K 🔥` `NEW`
1. [一代人有一代人的隐形家务](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E9%9A%90%E5%BD%A2%E5%AE%B6%E5%8A%A1%23) `269.9K 🔥`
1. [张韶涵演唱会突发心脏不适](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E7%AA%81%E5%8F%91%E5%BF%83%E8%84%8F%E4%B8%8D%E9%80%82%23) `257.1K 🔥`
1. [破产姐妹史上最长售后](https://s.weibo.com/weibo?q=%23%E7%A0%B4%E4%BA%A7%E5%A7%90%E5%A6%B9%E5%8F%B2%E4%B8%8A%E6%9C%80%E9%95%BF%E5%94%AE%E5%90%8E%23) `253.6K 🔥`
1. [张元英走路姿势](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E8%B5%B0%E8%B7%AF%E5%A7%BF%E5%8A%BF%23) `242.9K 🔥`
1. [原来内向的人都是这样交朋友的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%85%E5%90%91%E7%9A%84%E4%BA%BA%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E4%BA%A4%E6%9C%8B%E5%8F%8B%E7%9A%84%23) `202.3K 🔥`
1. [一定要珍惜你身体里尚存的欲望](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%9A%E8%A6%81%E7%8F%8D%E6%83%9C%E4%BD%A0%E8%BA%AB%E4%BD%93%E9%87%8C%E5%B0%9A%E5%AD%98%E7%9A%84%E6%AC%B2%E6%9C%9B%23) `193.2K 🔥`
1. [梁王世锦赛夺冠](https://s.weibo.com/weibo?q=%23%E6%A2%81%E7%8E%8B%E4%B8%96%E9%94%A6%E8%B5%9B%E5%A4%BA%E5%86%A0%23) `192.2K 🔥`
1. [从140瘦到了95斤](https://s.weibo.com/weibo?q=%23%E4%BB%8E140%E7%98%A6%E5%88%B0%E4%BA%8695%E6%96%A4%23) `192.1K 🔥`
1. [父亲直播目睹儿子篮球赛倒地后离世](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E7%9B%B4%E6%92%AD%E7%9B%AE%E7%9D%B9%E5%84%BF%E5%AD%90%E7%AF%AE%E7%90%83%E8%B5%9B%E5%80%92%E5%9C%B0%E5%90%8E%E7%A6%BB%E4%B8%96%23) `191.7K 🔥`
1. [韩红基金会救护车供应商大门紧闭](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E6%95%91%E6%8A%A4%E8%BD%A6%E4%BE%9B%E5%BA%94%E5%95%86%E5%A4%A7%E9%97%A8%E7%B4%A7%E9%97%AD%23) `356.2K 🔥` `-24%`
1. [2万件中央救灾物资支持广西](https://s.weibo.com/weibo?q=%232%E4%B8%87%E4%BB%B6%E4%B8%AD%E5%A4%AE%E6%95%91%E7%81%BE%E7%89%A9%E8%B5%84%E6%94%AF%E6%8C%81%E5%B9%BF%E8%A5%BF%23) `265.0K 🔥` `-21%`
1. [亲密关系和婚育制度绑定太深](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E5%92%8C%E5%A9%9A%E8%82%B2%E5%88%B6%E5%BA%A6%E7%BB%91%E5%AE%9A%E5%A4%AA%E6%B7%B1%23) `242.2K 🔥` `-31%`
1. [芒果新人向王一博道歉](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%96%B0%E4%BA%BA%E5%90%91%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%81%93%E6%AD%89%23) `159.2K 🔥` `-32%`
1. [老人店内离世店主协商赔偿1.9万元](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%BA%97%E5%86%85%E7%A6%BB%E4%B8%96%E5%BA%97%E4%B8%BB%E5%8D%8F%E5%95%86%E8%B5%94%E5%81%BF1.9%E4%B8%87%E5%85%83%23) `146.4K 🔥` `-37%`
1. [永康公厕被打女子发声](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E5%BA%B7%E5%85%AC%E5%8E%95%E8%A2%AB%E6%89%93%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `134.8K 🔥` `-43%`
1. [曝刺棠女频大男主](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%BA%E6%A3%A0%E5%A5%B3%E9%A2%91%E5%A4%A7%E7%94%B7%E4%B8%BB%23) `116.8K 🔥` `-50%`
1. [全世界人都知道汪苏泷全开麦了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E4%BA%BA%E9%83%BD%E7%9F%A5%E9%81%93%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%85%A8%E5%BC%80%E9%BA%A6%E4%BA%86%23) `116.2K 🔥` `-51%`
1. [芒果新人撞脸王一博](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%96%B0%E4%BA%BA%E6%92%9E%E8%84%B8%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `114.2K 🔥` `-51%`
1. [陈星旭王玉雯好浓的姐狗味](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%A5%BD%E6%B5%93%E7%9A%84%E5%A7%90%E7%8B%97%E5%91%B3%23) `107.2K 🔥` `-54%`
1. [3姐弟太饿报警求助民警上门做饭](https://s.weibo.com/weibo?q=%233%E5%A7%90%E5%BC%9F%E5%A4%AA%E9%A5%BF%E6%8A%A5%E8%AD%A6%E6%B1%82%E5%8A%A9%E6%B0%91%E8%AD%A6%E4%B8%8A%E9%97%A8%E5%81%9A%E9%A5%AD%23) `96.4K 🔥` `-59%`
1. [四十多岁女丁克想生孩子](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%8D%81%E5%A4%9A%E5%B2%81%E5%A5%B3%E4%B8%81%E5%85%8B%E6%83%B3%E7%94%9F%E5%AD%A9%E5%AD%90%23) `95.5K 🔥` `-59%`
1. [父母离婚后6岁女孩身上长白斑](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E7%A6%BB%E5%A9%9A%E5%90%8E6%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%BA%AB%E4%B8%8A%E9%95%BF%E7%99%BD%E6%96%91%23) `94.8K 🔥` `-59%`
1. [HR笑了半天才给她办入职](https://s.weibo.com/weibo?q=%23HR%E7%AC%91%E4%BA%86%E5%8D%8A%E5%A4%A9%E6%89%8D%E7%BB%99%E5%A5%B9%E5%8A%9E%E5%85%A5%E8%81%8C%23) `92.9K 🔥` `-60%`
1. [公厕被殴案施暴男子已出狱](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8E%95%E8%A2%AB%E6%AE%B4%E6%A1%88%E6%96%BD%E6%9A%B4%E7%94%B7%E5%AD%90%E5%B7%B2%E5%87%BA%E7%8B%B1%23) `92.8K 🔥` `-60%`
1. [我的前半生删去原著罗子君女儿](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E5%88%A0%E5%8E%BB%E5%8E%9F%E8%91%97%E7%BD%97%E5%AD%90%E5%90%9B%E5%A5%B3%E5%84%BF%23) `92.7K 🔥` `-60%`
1. [金季酒店老板娘发声](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%A3%E9%85%92%E5%BA%97%E8%80%81%E6%9D%BF%E5%A8%98%E5%8F%91%E5%A3%B0%23) `92.5K 🔥` `-59%`
1. [AL虐泉BLG](https://s.weibo.com/weibo?q=%23AL%E8%99%90%E6%B3%89BLG%23) `92.4K 🔥` `-60%`
1. [买票占座规则明确了然后呢](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E8%A7%84%E5%88%99%E6%98%8E%E7%A1%AE%E4%BA%86%E7%84%B6%E5%90%8E%E5%91%A2%23) `92.1K 🔥` `-60%`
1. [超强台风沙德尔不到24小时连跳2级](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94%E4%B8%8D%E5%88%B024%E5%B0%8F%E6%97%B6%E8%BF%9E%E8%B7%B32%E7%BA%A7%23) `91.8K 🔥` `-60%`
1. [小孩哥用麻将搭了个磁悬浮列车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A9%E5%93%A5%E7%94%A8%E9%BA%BB%E5%B0%86%E6%90%AD%E4%BA%86%E4%B8%AA%E7%A3%81%E6%82%AC%E6%B5%AE%E5%88%97%E8%BD%A6%23) `91.6K 🔥` `-60%`
1. [中国男孩和小黄鸭在外网火了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%A9%E5%92%8C%E5%B0%8F%E9%BB%84%E9%B8%AD%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86%23) `91.4K 🔥` `-60%`
1. [哈兰德剪头发了](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%89%AA%E5%A4%B4%E5%8F%91%E4%BA%86%23) `91.4K 🔥` `-61%`
1. [spirit三冠](https://s.weibo.com/weibo?q=%23spirit%E4%B8%89%E5%86%A0%23) `91.1K 🔥` `-60%`
1. [唐师曾生前病床上握相机称是我的AK47](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%B8%88%E6%9B%BE%E7%94%9F%E5%89%8D%E7%97%85%E5%BA%8A%E4%B8%8A%E6%8F%A1%E7%9B%B8%E6%9C%BA%E7%A7%B0%E6%98%AF%E6%88%91%E7%9A%84AK47%23) `91.0K 🔥` `-60%`
1. [BLG 运营](https://s.weibo.com/weibo?q=%23BLG%20%E8%BF%90%E8%90%A5%23) `90.8K 🔥` `-61%`
1. [美国女记者无法对孩子说中国不好](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E8%AE%B0%E8%80%85%E6%97%A0%E6%B3%95%E5%AF%B9%E5%AD%A9%E5%AD%90%E8%AF%B4%E4%B8%AD%E5%9B%BD%E4%B8%8D%E5%A5%BD%23) `90.5K 🔥` `-60%`
1. [张韶涵演唱会吸氧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%B8%E6%B0%A7%23) `90.3K 🔥` `-61%`
1. [BLG对战AL](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98AL%23) `90.1K 🔥` `-60%`
1. [梁伟铿王昶回应决赛发挥](https://s.weibo.com/weibo?q=%23%E6%A2%81%E4%BC%9F%E9%93%BF%E7%8E%8B%E6%98%B6%E5%9B%9E%E5%BA%94%E5%86%B3%E8%B5%9B%E5%8F%91%E6%8C%A5%23) `89.7K 🔥` `-61%`
1. [辽宁文旅女厅长湖南乡音发言火了](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E6%96%87%E6%97%85%E5%A5%B3%E5%8E%85%E9%95%BF%E6%B9%96%E5%8D%97%E4%B9%A1%E9%9F%B3%E5%8F%91%E8%A8%80%E7%81%AB%E4%BA%86%23) `89.6K 🔥` `-60%`
1. [BLG团灭AL](https://s.weibo.com/weibo?q=%23BLG%E5%9B%A2%E7%81%ADAL%23) `89.3K 🔥` `-61%`
1. [杨幂平地摔](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%B9%B3%E5%9C%B0%E6%91%94%23) `89.2K 🔥` `-61%`
1. [郭晓东要去给徐良伴舞](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E4%B8%9C%E8%A6%81%E5%8E%BB%E7%BB%99%E5%BE%90%E8%89%AF%E4%BC%B4%E8%88%9E%23) `88.9K 🔥` `-61%`
1. [无畏契约上海全球冠军赛](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E4%B8%8A%E6%B5%B7%E5%85%A8%E7%90%83%E5%86%A0%E5%86%9B%E8%B5%9B%23) `88.7K 🔥` `-61%`
1. [男子乘车时充电宝爆燃扔给司机](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B9%98%E8%BD%A6%E6%97%B6%E5%85%85%E7%94%B5%E5%AE%9D%E7%88%86%E7%87%83%E6%89%94%E7%BB%99%E5%8F%B8%E6%9C%BA%23) `88.6K 🔥` `-61%`
1. [矿业大佬预计黄金再涨10倍](https://s.weibo.com/weibo?q=%23%E7%9F%BF%E4%B8%9A%E5%A4%A7%E4%BD%AC%E9%A2%84%E8%AE%A1%E9%BB%84%E9%87%91%E5%86%8D%E6%B6%A810%E5%80%8D%23) `88.3K 🔥` `-61%`
1. [刘耀文蹲下来和杨幂聊天](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%B9%B2%E4%B8%8B%E6%9D%A5%E5%92%8C%E6%9D%A8%E5%B9%82%E8%81%8A%E5%A4%A9%23) `88.1K 🔥` `-61%`
1. [难道樊振东是暑期档又一黑马](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E9%81%93%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%98%AF%E6%9A%91%E6%9C%9F%E6%A1%A3%E5%8F%88%E4%B8%80%E9%BB%91%E9%A9%AC%23) `88.1K 🔥` `-61%`
1. [董宇辉走后东方甄选扭亏为盈赚5.44亿](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E8%B5%B0%E5%90%8E%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%89%AD%E4%BA%8F%E4%B8%BA%E7%9B%88%E8%B5%9A5.44%E4%BA%BF%23) `87.8K 🔥` `-44%`

Updated at 2026-08-24 01:48:27

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
