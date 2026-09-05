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

1. [叶润泽淘汰](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E6%B6%A6%E6%B3%BD%E6%B7%98%E6%B1%B0%23) `1.4M 🔥` `NEW`
1. [贵中医二附院被捅伤医生仍在抢救](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E4%B8%AD%E5%8C%BB%E4%BA%8C%E9%99%84%E9%99%A2%E8%A2%AB%E6%8D%85%E4%BC%A4%E5%8C%BB%E7%94%9F%E4%BB%8D%E5%9C%A8%E6%8A%A2%E6%95%91%23) `1.2M 🔥` `NEW`
1. [编制不等于绝对稳定](https://s.weibo.com/weibo?q=%23%E7%BC%96%E5%88%B6%E4%B8%8D%E7%AD%89%E4%BA%8E%E7%BB%9D%E5%AF%B9%E7%A8%B3%E5%AE%9A%23) `930.3K 🔥` `NEW`
1. [披荆斩棘二公团魂在燃烧](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%BA%8C%E5%85%AC%E5%9B%A2%E9%AD%82%E5%9C%A8%E7%87%83%E7%83%A7%23) `820.1K 🔥` `NEW`
1. [郝熠然演唱会](https://s.weibo.com/weibo?q=%23%E9%83%9D%E7%86%A0%E7%84%B6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `818.3K 🔥` `NEW`
1. [郑钦文vs凯斯](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E5%87%AF%E6%96%AF%23) `737.3K 🔥` `NEW`
1. [医生说坚持为了那8%](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%AF%B4%E5%9D%9A%E6%8C%81%E4%B8%BA%E4%BA%86%E9%82%A38%25%23) `537.9K 🔥` `NEW`
1. [蒙娜丽莎的舞蹈呢](https://s.weibo.com/weibo?q=%23%E8%92%99%E5%A8%9C%E4%B8%BD%E8%8E%8E%E7%9A%84%E8%88%9E%E8%B9%88%E5%91%A2%23) `452.6K 🔥` `NEW`
1. [记者讲述驰援吉隆照片背后的故事](https://s.weibo.com/weibo?q=%23%E8%AE%B0%E8%80%85%E8%AE%B2%E8%BF%B0%E9%A9%B0%E6%8F%B4%E5%90%89%E9%9A%86%E7%85%A7%E7%89%87%E8%83%8C%E5%90%8E%E7%9A%84%E6%95%85%E4%BA%8B%23) `449.9K 🔥` `NEW`
1. [取消英语主科 教育公平争议](https://s.weibo.com/weibo?q=%23%E5%8F%96%E6%B6%88%E8%8B%B1%E8%AF%AD%E4%B8%BB%E7%A7%91%20%E6%95%99%E8%82%B2%E5%85%AC%E5%B9%B3%E4%BA%89%E8%AE%AE%23) `447.5K 🔥` `NEW`
1. [汤家凤邀请胡锡进公开辩论](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E5%AE%B6%E5%87%A4%E9%82%80%E8%AF%B7%E8%83%A1%E9%94%A1%E8%BF%9B%E5%85%AC%E5%BC%80%E8%BE%A9%E8%AE%BA%23) `439.9K 🔥` `NEW`
1. [郝熠然](https://s.weibo.com/weibo?q=%23%E9%83%9D%E7%86%A0%E7%84%B6%23) `433.3K 🔥` `NEW`
1. [鞠婧祎扇巴掌给我看爽了](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%89%87%E5%B7%B4%E6%8E%8C%E7%BB%99%E6%88%91%E7%9C%8B%E7%88%BD%E4%BA%86%23) `390.7K 🔥` `NEW`
1. [彭博曝DeepSeek向华为订16万颗芯片](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%8D%9A%E6%9B%9DDeepSeek%E5%90%91%E5%8D%8E%E4%B8%BA%E8%AE%A216%E4%B8%87%E9%A2%97%E8%8A%AF%E7%89%87%23) `375.2K 🔥` `NEW`
1. [获救中国公民爬到了隧道最高处](https://s.weibo.com/weibo?q=%23%E8%8E%B7%E6%95%91%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E7%88%AC%E5%88%B0%E4%BA%86%E9%9A%A7%E9%81%93%E6%9C%80%E9%AB%98%E5%A4%84%23) `371.5K 🔥` `NEW`
1. [拖拉机 不公平](https://s.weibo.com/weibo?q=%23%E6%8B%96%E6%8B%89%E6%9C%BA%20%E4%B8%8D%E5%85%AC%E5%B9%B3%23) `369.5K 🔥` `NEW`
1. [Lisa空降成绩](https://s.weibo.com/weibo?q=%23Lisa%E7%A9%BA%E9%99%8D%E6%88%90%E7%BB%A9%23) `365.1K 🔥` `NEW`
1. [罗云熙穿了润玉的衣服](https://s.weibo.com/weibo?q=%23%E7%BD%97%E4%BA%91%E7%86%99%E7%A9%BF%E4%BA%86%E6%B6%A6%E7%8E%89%E7%9A%84%E8%A1%A3%E6%9C%8D%23) `363.0K 🔥` `NEW`
1. [我一个变态的都觉得变态](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%80%E4%B8%AA%E5%8F%98%E6%80%81%E7%9A%84%E9%83%BD%E8%A7%89%E5%BE%97%E5%8F%98%E6%80%81%23) `361.7K 🔥` `NEW`
1. [贵中医二附院医生被捅伤警方已介入](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E4%B8%AD%E5%8C%BB%E4%BA%8C%E9%99%84%E9%99%A2%E5%8C%BB%E7%94%9F%E8%A2%AB%E6%8D%85%E4%BC%A4%E8%AD%A6%E6%96%B9%E5%B7%B2%E4%BB%8B%E5%85%A5%23) `357.1K 🔥` `NEW`
1. [有氧运动对男性有多重要](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%B0%A7%E8%BF%90%E5%8A%A8%E5%AF%B9%E7%94%B7%E6%80%A7%E6%9C%89%E5%A4%9A%E9%87%8D%E8%A6%81%23) `348.9K 🔥` `NEW`
1. [容易生气背后的深层原因](https://s.weibo.com/weibo?q=%23%E5%AE%B9%E6%98%93%E7%94%9F%E6%B0%94%E8%83%8C%E5%90%8E%E7%9A%84%E6%B7%B1%E5%B1%82%E5%8E%9F%E5%9B%A0%23) `347.0K 🔥` `NEW`
1. [第21届金鹿奖获奖名单](https://s.weibo.com/weibo?q=%23%E7%AC%AC21%E5%B1%8A%E9%87%91%E9%B9%BF%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `344.9K 🔥` `NEW`
1. [宋茜祝fx17周年快乐](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%8C%9C%E7%A5%9Dfx17%E5%91%A8%E5%B9%B4%E5%BF%AB%E4%B9%90%23) `344.2K 🔥` `NEW`
1. [第一次对韩国人做的饭产生食欲](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E9%9F%A9%E5%9B%BD%E4%BA%BA%E5%81%9A%E7%9A%84%E9%A5%AD%E4%BA%A7%E7%94%9F%E9%A3%9F%E6%AC%B2%23) `341.6K 🔥` `NEW`
1. [曾辉还是跑调了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E8%BF%98%E6%98%AF%E8%B7%91%E8%B0%83%E4%BA%86%23) `341.0K 🔥` `NEW`
1. [李一桐正太扭腰](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E6%AD%A3%E5%A4%AA%E6%89%AD%E8%85%B0%23) `337.9K 🔥` `NEW`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `336.4K 🔥` `NEW`
1. [樊振东3比0杜达](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C3%E6%AF%940%E6%9D%9C%E8%BE%BE%23) `335.6K 🔥` `NEW`
1. [NIP横扫JDG](https://s.weibo.com/weibo?q=%23NIP%E6%A8%AA%E6%89%ABJDG%23) `333.8K 🔥` `NEW`
1. [叶润泽rap好听](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E6%B6%A6%E6%B3%BDrap%E5%A5%BD%E5%90%AC%23) `329.5K 🔥` `NEW`
1. [樊振东vs杜达](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9Cvs%E6%9D%9C%E8%BE%BE%23) `327.9K 🔥` `NEW`
1. [刘琳琳被朋友说坏话](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%90%B3%E7%90%B3%E8%A2%AB%E6%9C%8B%E5%8F%8B%E8%AF%B4%E5%9D%8F%E8%AF%9D%23) `325.6K 🔥` `NEW`
1. [越南蝉联美国最大贸易逆差国](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E8%9D%89%E8%81%94%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%A4%A7%E8%B4%B8%E6%98%93%E9%80%86%E5%B7%AE%E5%9B%BD%23) `322.2K 🔥` `NEW`
1. [曝iPhone18Pro灵动岛大瘦身](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18Pro%E7%81%B5%E5%8A%A8%E5%B2%9B%E5%A4%A7%E7%98%A6%E8%BA%AB%23) `321.5K 🔥` `NEW`
1. [曼城vs考文垂](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8Evs%E8%80%83%E6%96%87%E5%9E%82%23) `318.3K 🔥` `NEW`
1. [青春华章](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E5%8D%8E%E7%AB%A0%23) `932.9K 🔥` `+38%`
1. [张雅琪被花少8剪掉了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E8%A2%AB%E8%8A%B1%E5%B0%918%E5%89%AA%E6%8E%89%E4%BA%86%23) `820.6K 🔥` `+27%`
1. [剧本杀 色情服务](https://s.weibo.com/weibo?q=%23%E5%89%A7%E6%9C%AC%E6%9D%80%20%E8%89%B2%E6%83%85%E6%9C%8D%E5%8A%A1%23) `433.9K 🔥` `+45%`
1. [苹果折叠手机价格](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%8A%98%E5%8F%A0%E6%89%8B%E6%9C%BA%E4%BB%B7%E6%A0%BC%23) `376.1K 🔥` `+40%`
1. [普京宣布停止打击基辅3天](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E5%AE%A3%E5%B8%83%E5%81%9C%E6%AD%A2%E6%89%93%E5%87%BB%E5%9F%BA%E8%BE%853%E5%A4%A9%23) `373.6K 🔥` `+83%`
1. [刘雯 避嫌](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%20%E9%81%BF%E5%AB%8C%23) `367.5K 🔥` `+60%`
1. [女子停捐不到一个月被催捐](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%81%9C%E6%8D%90%E4%B8%8D%E5%88%B0%E4%B8%80%E4%B8%AA%E6%9C%88%E8%A2%AB%E5%82%AC%E6%8D%90%23) `366.2K 🔥` `+38%`
1. [美林肯号水兵登陆芭提雅彻底放飞](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%9E%97%E8%82%AF%E5%8F%B7%E6%B0%B4%E5%85%B5%E7%99%BB%E9%99%86%E8%8A%AD%E6%8F%90%E9%9B%85%E5%BD%BB%E5%BA%95%E6%94%BE%E9%A3%9E%23) `359.0K 🔥` `+34%`
1. [小县城的房子买了没人住](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8E%BF%E5%9F%8E%E7%9A%84%E6%88%BF%E5%AD%90%E4%B9%B0%E4%BA%86%E6%B2%A1%E4%BA%BA%E4%BD%8F%23) `356.5K 🔥` `+22%`
1. [杭州给井柏然热得没招了](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%BB%99%E4%BA%95%E6%9F%8F%E7%84%B6%E7%83%AD%E5%BE%97%E6%B2%A1%E6%8B%9B%E4%BA%86%23) `330.9K 🔥` `+27%`
1. [张雪机车德比斯第一回合季军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%BE%B7%E6%AF%94%E6%96%AF%E7%AC%AC%E4%B8%80%E5%9B%9E%E5%90%88%E5%AD%A3%E5%86%9B%23) `324.2K 🔥` `+47%`
1. [启境GX7阔五座智能百变SUV](https://s.weibo.com/weibo?q=%23%E5%90%AF%E5%A2%83GX7%E9%98%94%E4%BA%94%E5%BA%A7%E6%99%BA%E8%83%BD%E7%99%BE%E5%8F%98SUV%23) `932.7K 🔥`
1. [刘雯井柏然是姐夫而不是嫂子](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E4%BA%95%E6%9F%8F%E7%84%B6%E6%98%AF%E5%A7%90%E5%A4%AB%E8%80%8C%E4%B8%8D%E6%98%AF%E5%AB%82%E5%AD%90%23) `350.8K 🔥`
1. [避孕药 血栓](https://s.weibo.com/weibo?q=%23%E9%81%BF%E5%AD%95%E8%8D%AF%20%E8%A1%80%E6%A0%93%23) `908.0K 🔥` `-22%`
1. [才知道陈妍希儿子名字陈睦辰](https://s.weibo.com/weibo?q=%23%E6%89%8D%E7%9F%A5%E9%81%93%E9%99%88%E5%A6%8D%E5%B8%8C%E5%84%BF%E5%AD%90%E5%90%8D%E5%AD%97%E9%99%88%E7%9D%A6%E8%BE%B0%23) `353.8K 🔥` `-36%`
1. [运动手环 皮炎](https://s.weibo.com/weibo?q=%23%E8%BF%90%E5%8A%A8%E6%89%8B%E7%8E%AF%20%E7%9A%AE%E7%82%8E%23) `352.6K 🔥` `-39%`

Updated at 2026-09-05 23:54:06

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
