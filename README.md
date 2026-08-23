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

1. [男子一年内两台车被路过司机排泄](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%80%E5%B9%B4%E5%86%85%E4%B8%A4%E5%8F%B0%E8%BD%A6%E8%A2%AB%E8%B7%AF%E8%BF%87%E5%8F%B8%E6%9C%BA%E6%8E%92%E6%B3%84%23) `29.3K 🔥` `NEW`
1. [杜海涛来看汪苏泷演唱会了](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E6%B5%B7%E6%B6%9B%E6%9D%A5%E7%9C%8B%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%86%23) `29.3K 🔥` `NEW`
1. [2万件中央救灾物资支持广西](https://s.weibo.com/weibo?q=%232%E4%B8%87%E4%BB%B6%E4%B8%AD%E5%A4%AE%E6%95%91%E7%81%BE%E7%89%A9%E8%B5%84%E6%94%AF%E6%8C%81%E5%B9%BF%E8%A5%BF%23) `102.8K 🔥` `+21%`
1. [买票占座规则明确了然后呢](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E8%A7%84%E5%88%99%E6%98%8E%E7%A1%AE%E4%BA%86%E7%84%B6%E5%90%8E%E5%91%A2%23) `73.8K 🔥` `+27%`
1. [韩红基金会救护车供应商大门紧闭](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E6%95%91%E6%8A%A4%E8%BD%A6%E4%BE%9B%E5%BA%94%E5%95%86%E5%A4%A7%E9%97%A8%E7%B4%A7%E9%97%AD%23) `105.9K 🔥`
1. [张韶涵演唱会突发心脏不适](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E7%AA%81%E5%8F%91%E5%BF%83%E8%84%8F%E4%B8%8D%E9%80%82%23) `92.5K 🔥`
1. [张元英走路姿势](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E8%B5%B0%E8%B7%AF%E5%A7%BF%E5%8A%BF%23) `81.9K 🔥`
1. [破产姐妹史上最长售后](https://s.weibo.com/weibo?q=%23%E7%A0%B4%E4%BA%A7%E5%A7%90%E5%A6%B9%E5%8F%B2%E4%B8%8A%E6%9C%80%E9%95%BF%E5%94%AE%E5%90%8E%23) `80.6K 🔥`
1. [公厕被殴案施暴男子已出狱](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8E%95%E8%A2%AB%E6%AE%B4%E6%A1%88%E6%96%BD%E6%9A%B4%E7%94%B7%E5%AD%90%E5%B7%B2%E5%87%BA%E7%8B%B1%23) `69.7K 🔥`
1. [一代人有一代人的隐形家务](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E9%9A%90%E5%BD%A2%E5%AE%B6%E5%8A%A1%23) `64.1K 🔥`
1. [一定要珍惜你身体里尚存的欲望](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%9A%E8%A6%81%E7%8F%8D%E6%83%9C%E4%BD%A0%E8%BA%AB%E4%BD%93%E9%87%8C%E5%B0%9A%E5%AD%98%E7%9A%84%E6%AC%B2%E6%9C%9B%23) `61.6K 🔥`
1. [父亲直播目睹儿子篮球赛倒地后离世](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E7%9B%B4%E6%92%AD%E7%9B%AE%E7%9D%B9%E5%84%BF%E5%AD%90%E7%AF%AE%E7%90%83%E8%B5%9B%E5%80%92%E5%9C%B0%E5%90%8E%E7%A6%BB%E4%B8%96%23) `58.6K 🔥`
1. [从140瘦到了95斤](https://s.weibo.com/weibo?q=%23%E4%BB%8E140%E7%98%A6%E5%88%B0%E4%BA%8695%E6%96%A4%23) `58.4K 🔥`
1. [芒果新人向王一博道歉](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%96%B0%E4%BA%BA%E5%90%91%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%81%93%E6%AD%89%23) `55.9K 🔥`
1. [原来内向的人都是这样交朋友的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%85%E5%90%91%E7%9A%84%E4%BA%BA%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E4%BA%A4%E6%9C%8B%E5%8F%8B%E7%9A%84%23) `53.1K 🔥`
1. [梁王世锦赛夺冠](https://s.weibo.com/weibo?q=%23%E6%A2%81%E7%8E%8B%E4%B8%96%E9%94%A6%E8%B5%9B%E5%A4%BA%E5%86%A0%23) `45.3K 🔥`
1. [永康公厕被打女子发声](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E5%BA%B7%E5%85%AC%E5%8E%95%E8%A2%AB%E6%89%93%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `43.2K 🔥`
1. [老人店内离世店主协商赔偿1.9万元](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%BA%97%E5%86%85%E7%A6%BB%E4%B8%96%E5%BA%97%E4%B8%BB%E5%8D%8F%E5%95%86%E8%B5%94%E5%81%BF1.9%E4%B8%87%E5%85%83%23) `41.7K 🔥`
1. [留几手回应傅首尔瘦了](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E5%9B%9E%E5%BA%94%E5%82%85%E9%A6%96%E5%B0%94%E7%98%A6%E4%BA%86%23) `37.3K 🔥`
1. [芒果新人撞脸王一博](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%96%B0%E4%BA%BA%E6%92%9E%E8%84%B8%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `36.1K 🔥`
1. [金季酒店老板娘发声](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%A3%E9%85%92%E5%BA%97%E8%80%81%E6%9D%BF%E5%A8%98%E5%8F%91%E5%A3%B0%23) `35.4K 🔥`
1. [四十多岁女丁克想生孩子](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%8D%81%E5%A4%9A%E5%B2%81%E5%A5%B3%E4%B8%81%E5%85%8B%E6%83%B3%E7%94%9F%E5%AD%A9%E5%AD%90%23) `34.9K 🔥`
1. [父母离婚后6岁女孩身上长白斑](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E7%A6%BB%E5%A9%9A%E5%90%8E6%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%BA%AB%E4%B8%8A%E9%95%BF%E7%99%BD%E6%96%91%23) `34.7K 🔥`
1. [亲密关系和婚育制度绑定太深](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E5%92%8C%E5%A9%9A%E8%82%B2%E5%88%B6%E5%BA%A6%E7%BB%91%E5%AE%9A%E5%A4%AA%E6%B7%B1%23) `161.3K 🔥` `-22%`
1. [淘宝天猫服饰品牌大使娜扎](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%A4%A9%E7%8C%AB%E6%9C%8D%E9%A5%B0%E5%93%81%E7%89%8C%E5%A4%A7%E4%BD%BF%E5%A8%9C%E6%89%8E%23) `79.6K 🔥` `-40%`
1. [打赏要求陪睡案女主播合租室友发声](https://s.weibo.com/weibo?q=%23%E6%89%93%E8%B5%8F%E8%A6%81%E6%B1%82%E9%99%AA%E7%9D%A1%E6%A1%88%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%90%88%E7%A7%9F%E5%AE%A4%E5%8F%8B%E5%8F%91%E5%A3%B0%23) `33.1K 🔥` `-21%`
1. [无畏契约上海全球冠军赛](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E4%B8%8A%E6%B5%B7%E5%85%A8%E7%90%83%E5%86%A0%E5%86%9B%E8%B5%9B%23) `32.4K 🔥` `-22%`
1. [陈星旭王玉雯好浓的姐狗味](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%A5%BD%E6%B5%93%E7%9A%84%E5%A7%90%E7%8B%97%E5%91%B3%23) `31.2K 🔥` `-26%`
1. [超强台风沙德尔不到24小时连跳2级](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94%E4%B8%8D%E5%88%B024%E5%B0%8F%E6%97%B6%E8%BF%9E%E8%B7%B32%E7%BA%A7%23) `31.0K 🔥` `-25%`
1. [HR笑了半天才给她办入职](https://s.weibo.com/weibo?q=%23HR%E7%AC%91%E4%BA%86%E5%8D%8A%E5%A4%A9%E6%89%8D%E7%BB%99%E5%A5%B9%E5%8A%9E%E5%85%A5%E8%81%8C%23) `30.5K 🔥` `-27%`
1. [我的前半生删去原著罗子君女儿](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E5%88%A0%E5%8E%BB%E5%8E%9F%E8%91%97%E7%BD%97%E5%AD%90%E5%90%9B%E5%A5%B3%E5%84%BF%23) `30.4K 🔥` `-25%`
1. [曝刺棠女频大男主](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%BA%E6%A3%A0%E5%A5%B3%E9%A2%91%E5%A4%A7%E7%94%B7%E4%B8%BB%23) `29.7K 🔥` `-30%`
1. [中国男孩和小黄鸭在外网火了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%A9%E5%92%8C%E5%B0%8F%E9%BB%84%E9%B8%AD%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86%23) `29.3K 🔥` `-30%`
1. [美国女记者无法对孩子说中国不好](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E8%AE%B0%E8%80%85%E6%97%A0%E6%B3%95%E5%AF%B9%E5%AD%A9%E5%AD%90%E8%AF%B4%E4%B8%AD%E5%9B%BD%E4%B8%8D%E5%A5%BD%23) `29.3K 🔥` `-29%`
1. [全世界人都知道汪苏泷全开麦了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E4%BA%BA%E9%83%BD%E7%9F%A5%E9%81%93%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%85%A8%E5%BC%80%E9%BA%A6%E4%BA%86%23) `29.3K 🔥` `-30%`
1. [张韶涵演唱会吸氧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%B8%E6%B0%A7%23) `29.3K 🔥` `-29%`
1. [唐师曾生前病床上握相机称是我的AK47](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%B8%88%E6%9B%BE%E7%94%9F%E5%89%8D%E7%97%85%E5%BA%8A%E4%B8%8A%E6%8F%A1%E7%9B%B8%E6%9C%BA%E7%A7%B0%E6%98%AF%E6%88%91%E7%9A%84AK47%23) `29.3K 🔥` `-29%`
1. [F1荷兰大奖赛正赛](https://s.weibo.com/weibo?q=%23F1%E8%8D%B7%E5%85%B0%E5%A4%A7%E5%A5%96%E8%B5%9B%E6%AD%A3%E8%B5%9B%23) `29.3K 🔥` `-29%`
1. [vctcn出征上海全球冠军赛](https://s.weibo.com/weibo?q=%23vctcn%E5%87%BA%E5%BE%81%E4%B8%8A%E6%B5%B7%E5%85%A8%E7%90%83%E5%86%A0%E5%86%9B%E8%B5%9B%23) `29.3K 🔥` `-29%`
1. [AL虐泉BLG](https://s.weibo.com/weibo?q=%23AL%E8%99%90%E6%B3%89BLG%23) `29.3K 🔥` `-30%`
1. [辽宁文旅女厅长湖南乡音发言火了](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E6%96%87%E6%97%85%E5%A5%B3%E5%8E%85%E9%95%BF%E6%B9%96%E5%8D%97%E4%B9%A1%E9%9F%B3%E5%8F%91%E8%A8%80%E7%81%AB%E4%BA%86%23) `29.3K 🔥` `-29%`
1. [哈兰德剪头发了](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%89%AA%E5%A4%B4%E5%8F%91%E4%BA%86%23) `29.3K 🔥` `-29%`
1. [3姐弟太饿报警求助民警上门做饭](https://s.weibo.com/weibo?q=%233%E5%A7%90%E5%BC%9F%E5%A4%AA%E9%A5%BF%E6%8A%A5%E8%AD%A6%E6%B1%82%E5%8A%A9%E6%B0%91%E8%AD%A6%E4%B8%8A%E9%97%A8%E5%81%9A%E9%A5%AD%23) `29.3K 🔥` `-29%`
1. [巴西连颅女婴分离手术后相继去世](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E8%BF%9E%E9%A2%85%E5%A5%B3%E5%A9%B4%E5%88%86%E7%A6%BB%E6%89%8B%E6%9C%AF%E5%90%8E%E7%9B%B8%E7%BB%A7%E5%8E%BB%E4%B8%96%23) `29.3K 🔥` `-30%`
1. [梁伟铿王昶回应决赛发挥](https://s.weibo.com/weibo?q=%23%E6%A2%81%E4%BC%9F%E9%93%BF%E7%8E%8B%E6%98%B6%E5%9B%9E%E5%BA%94%E5%86%B3%E8%B5%9B%E5%8F%91%E6%8C%A5%23) `29.3K 🔥` `-29%`
1. [杨幂平地摔](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%B9%B3%E5%9C%B0%E6%91%94%23) `29.3K 🔥` `-29%`
1. [嫦娥七号任务不能在今年预定窗口实施](https://s.weibo.com/weibo?q=%23%E5%AB%A6%E5%A8%A5%E4%B8%83%E5%8F%B7%E4%BB%BB%E5%8A%A1%E4%B8%8D%E8%83%BD%E5%9C%A8%E4%BB%8A%E5%B9%B4%E9%A2%84%E5%AE%9A%E7%AA%97%E5%8F%A3%E5%AE%9E%E6%96%BD%23) `29.3K 🔥` `-30%`
1. [spirit三冠](https://s.weibo.com/weibo?q=%23spirit%E4%B8%89%E5%86%A0%23) `29.3K 🔥` `-28%`
1. [狼队全胜锁定S1](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%85%A8%E8%83%9C%E9%94%81%E5%AE%9AS1%23) `29.3K 🔥` `-87%`
1. [BLG团灭AL](https://s.weibo.com/weibo?q=%23BLG%E5%9B%A2%E7%81%ADAL%23) `29.3K 🔥` `-28%`

Updated at 2026-08-24 03:52:41

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
