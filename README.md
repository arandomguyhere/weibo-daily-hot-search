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

1. [北大图灵班](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E5%9B%BE%E7%81%B5%E7%8F%AD%23) `1.2M 🔥` `NEW`
1. [胖东来新员工实行四年合同制](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%96%B0%E5%91%98%E5%B7%A5%E5%AE%9E%E8%A1%8C%E5%9B%9B%E5%B9%B4%E5%90%88%E5%90%8C%E5%88%B6%23) `829.5K 🔥` `NEW`
1. [为什么金砖国家合作对全球发展举足轻重](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E9%87%91%E7%A0%96%E5%9B%BD%E5%AE%B6%E5%90%88%E4%BD%9C%E5%AF%B9%E5%85%A8%E7%90%83%E5%8F%91%E5%B1%95%E4%B8%BE%E8%B6%B3%E8%BD%BB%E9%87%8D%23) `645.5K 🔥` `NEW`
1. [当老妈知道我工资1260后](https://s.weibo.com/weibo?q=%23%E5%BD%93%E8%80%81%E5%A6%88%E7%9F%A5%E9%81%93%E6%88%91%E5%B7%A5%E8%B5%841260%E5%90%8E%23) `640.5K 🔥` `NEW`
1. [陈妍希儿子谢楠儿子见面就打](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%84%BF%E5%AD%90%E8%B0%A2%E6%A5%A0%E5%84%BF%E5%AD%90%E8%A7%81%E9%9D%A2%E5%B0%B1%E6%89%93%23) `625.9K 🔥` `NEW`
1. [迪丽热巴在斯维诗的镜头里好美](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%9C%A8%E6%96%AF%E7%BB%B4%E8%AF%97%E7%9A%84%E9%95%9C%E5%A4%B4%E9%87%8C%E5%A5%BD%E7%BE%8E%23) `564.4K 🔥` `NEW`
1. [突然意识到双休一年104天](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E5%8F%8C%E4%BC%91%E4%B8%80%E5%B9%B4104%E5%A4%A9%23) `499.4K 🔥` `NEW`
1. [剧组副导演吼黄灿灿妈妈](https://s.weibo.com/weibo?q=%23%E5%89%A7%E7%BB%84%E5%89%AF%E5%AF%BC%E6%BC%94%E5%90%BC%E9%BB%84%E7%81%BF%E7%81%BF%E5%A6%88%E5%A6%88%23) `388.6K 🔥` `NEW`
1. [你以为没事其实很危险的行为](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%A5%E4%B8%BA%E6%B2%A1%E4%BA%8B%E5%85%B6%E5%AE%9E%E5%BE%88%E5%8D%B1%E9%99%A9%E7%9A%84%E8%A1%8C%E4%B8%BA%23) `293.1K 🔥` `NEW`
1. [BLG对战AL](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98AL%23) `292.9K 🔥` `NEW`
1. [井柏然孙千偷偷牵手](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E5%81%B7%E5%81%B7%E7%89%B5%E6%89%8B%23) `291.4K 🔥` `NEW`
1. [野人先生回应罗永浩说难吃](https://s.weibo.com/weibo?q=%23%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E5%9B%9E%E5%BA%94%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%AF%B4%E9%9A%BE%E5%90%83%23) `289.9K 🔥` `NEW`
1. [演唱会被推开男生本人现身称已分手](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A2%AB%E6%8E%A8%E5%BC%80%E7%94%B7%E7%94%9F%E6%9C%AC%E4%BA%BA%E7%8E%B0%E8%BA%AB%E7%A7%B0%E5%B7%B2%E5%88%86%E6%89%8B%23) `288.8K 🔥` `NEW`
1. [泰国警方没收僧侣情事餐桌](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E8%AD%A6%E6%96%B9%E6%B2%A1%E6%94%B6%E5%83%A7%E4%BE%A3%E6%83%85%E4%BA%8B%E9%A4%90%E6%A1%8C%23) `285.4K 🔥` `NEW`
1. [马斯克支持减速AI发展](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%94%AF%E6%8C%81%E5%87%8F%E9%80%9FAI%E5%8F%91%E5%B1%95%23) `284.6K 🔥` `NEW`
1. [央视发布敬一丹主持集锦](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E5%8F%91%E5%B8%83%E6%95%AC%E4%B8%80%E4%B8%B9%E4%B8%BB%E6%8C%81%E9%9B%86%E9%94%A6%23) `283.5K 🔥` `NEW`
1. [收手吧外面全是领克](https://s.weibo.com/weibo?q=%23%E6%94%B6%E6%89%8B%E5%90%A7%E5%A4%96%E9%9D%A2%E5%85%A8%E6%98%AF%E9%A2%86%E5%85%8B%23) `281.5K 🔥` `NEW`
1. [三国志战略版直送1000抽](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%9B%BD%E5%BF%97%E6%88%98%E7%95%A5%E7%89%88%E7%9B%B4%E9%80%811000%E6%8A%BD%23) `280.8K 🔥` `NEW`
1. [莫雷加德4比3张本智和](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B74%E6%AF%943%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `279.1K 🔥` `NEW`
1. [官方通报烧烤店主举报文物失踪](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E7%83%A7%E7%83%A4%E5%BA%97%E4%B8%BB%E4%B8%BE%E6%8A%A5%E6%96%87%E7%89%A9%E5%A4%B1%E8%B8%AA%23) `277.8K 🔥` `NEW`
1. [孙千哭了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E5%93%AD%E4%BA%86%23) `276.2K 🔥` `NEW`
1. [女选手失禁夺冠评价两极分化](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%80%89%E6%89%8B%E5%A4%B1%E7%A6%81%E5%A4%BA%E5%86%A0%E8%AF%84%E4%BB%B7%E4%B8%A4%E6%9E%81%E5%88%86%E5%8C%96%23) `275.6K 🔥` `NEW`
1. [北方 隐翅虫](https://s.weibo.com/weibo?q=%23%E5%8C%97%E6%96%B9%20%E9%9A%90%E7%BF%85%E8%99%AB%23) `274.3K 🔥` `NEW`
1. [早春晴朗见面会](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `273.4K 🔥` `NEW`
1. [黄灿灿妈妈探班被剧组赶走](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%A6%88%E5%A6%88%E6%8E%A2%E7%8F%AD%E8%A2%AB%E5%89%A7%E7%BB%84%E8%B5%B6%E8%B5%B0%23) `271.3K 🔥` `NEW`
1. [法医删强奸案DNA只为保绩效](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%8C%BB%E5%88%A0%E5%BC%BA%E5%A5%B8%E6%A1%88DNA%E5%8F%AA%E4%B8%BA%E4%BF%9D%E7%BB%A9%E6%95%88%23) `270.5K 🔥` `NEW`
1. [脑出血头痛会让人突然惊叫](https://s.weibo.com/weibo?q=%23%E8%84%91%E5%87%BA%E8%A1%80%E5%A4%B4%E7%97%9B%E4%BC%9A%E8%AE%A9%E4%BA%BA%E7%AA%81%E7%84%B6%E6%83%8A%E5%8F%AB%23) `268.9K 🔥` `NEW`
1. [葫芦爷爷一顿饭被叫出去10次](https://s.weibo.com/weibo?q=%23%E8%91%AB%E8%8A%A6%E7%88%B7%E7%88%B7%E4%B8%80%E9%A1%BF%E9%A5%AD%E8%A2%AB%E5%8F%AB%E5%87%BA%E5%8E%BB10%E6%AC%A1%23) `266.6K 🔥` `NEW`
1. [GEN夺冠](https://s.weibo.com/weibo?q=%23GEN%E5%A4%BA%E5%86%A0%23) `265.3K 🔥` `NEW`
1. [男子与女同事发生不正当关系成植物人](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8E%E5%A5%B3%E5%90%8C%E4%BA%8B%E5%8F%91%E7%94%9F%E4%B8%8D%E6%AD%A3%E5%BD%93%E5%85%B3%E7%B3%BB%E6%88%90%E6%A4%8D%E7%89%A9%E4%BA%BA%23) `264.0K 🔥` `NEW`
1. [曝Lisa不被允许见爷爷最后一面](https://s.weibo.com/weibo?q=%23%E6%9B%9DLisa%E4%B8%8D%E8%A2%AB%E5%85%81%E8%AE%B8%E8%A7%81%E7%88%B7%E7%88%B7%E6%9C%80%E5%90%8E%E4%B8%80%E9%9D%A2%23) `263.2K 🔥` `NEW`
1. [沈梦辰说酱排骨甜到嫁不了张凌赫](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E8%AF%B4%E9%85%B1%E6%8E%92%E9%AA%A8%E7%94%9C%E5%88%B0%E5%AB%81%E4%B8%8D%E4%BA%86%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `261.2K 🔥` `NEW`
1. [拼多多iPhone18Pro直降1000元](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9AiPhone18Pro%E7%9B%B4%E9%99%8D1000%E5%85%83%23) `260.3K 🔥` `NEW`
1. [偶遇贺峻霖去考雅思](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%8E%BB%E8%80%83%E9%9B%85%E6%80%9D%23) `259.2K 🔥` `NEW`
1. [2026LPL总决赛](https://s.weibo.com/weibo?q=%232026LPL%E6%80%BB%E5%86%B3%E8%B5%9B%23) `257.6K 🔥` `NEW`
1. [旅行了很多次才知道的事](https://s.weibo.com/weibo?q=%23%E6%97%85%E8%A1%8C%E4%BA%86%E5%BE%88%E5%A4%9A%E6%AC%A1%E6%89%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B%23) `256.0K 🔥` `NEW`
1. [唐嫣好高贵的黑天鹅](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E5%A5%BD%E9%AB%98%E8%B4%B5%E7%9A%84%E9%BB%91%E5%A4%A9%E9%B9%85%23) `254.8K 🔥` `NEW`
1. [莫雷加德称张本智和极难击败](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E7%A7%B0%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E6%9E%81%E9%9A%BE%E5%87%BB%E8%B4%A5%23) `253.3K 🔥` `NEW`
1. [芭莎阵容调整](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E8%8E%8E%E9%98%B5%E5%AE%B9%E8%B0%83%E6%95%B4%23) `252.4K 🔥` `NEW`
1. [罗永浩说野人先生难吃](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%AF%B4%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E9%9A%BE%E5%90%83%23) `250.4K 🔥` `NEW`
1. [吴磊一开口全想起来了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E4%B8%80%E5%BC%80%E5%8F%A3%E5%85%A8%E6%83%B3%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `249.9K 🔥` `NEW`
1. [兰香如故 好看](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%20%E5%A5%BD%E7%9C%8B%23) `248.6K 🔥` `NEW`
1. [911后翻找遗骸者几乎无人知晓](https://s.weibo.com/weibo?q=%23911%E5%90%8E%E7%BF%BB%E6%89%BE%E9%81%97%E9%AA%B8%E8%80%85%E5%87%A0%E4%B9%8E%E6%97%A0%E4%BA%BA%E7%9F%A5%E6%99%93%23) `246.6K 🔥` `NEW`
1. [莫雷加德回应击败张本智和](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E5%9B%9E%E5%BA%94%E5%87%BB%E8%B4%A5%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `245.3K 🔥` `NEW`
1. [妈妈说张家齐边界感好差的](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E8%AF%B4%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%BE%B9%E7%95%8C%E6%84%9F%E5%A5%BD%E5%B7%AE%E7%9A%84%23) `243.8K 🔥` `NEW`
1. [兰香如故 长剧市场还有救](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%20%E9%95%BF%E5%89%A7%E5%B8%82%E5%9C%BA%E8%BF%98%E6%9C%89%E6%95%91%23) `243.2K 🔥` `NEW`
1. [杨澜发文悼念敬一丹](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%BE%9C%E5%8F%91%E6%96%87%E6%82%BC%E5%BF%B5%E6%95%AC%E4%B8%80%E4%B8%B9%23) `242.0K 🔥` `NEW`
1. [网友晒出自家卫生间设计思路](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%99%92%E5%87%BA%E8%87%AA%E5%AE%B6%E5%8D%AB%E7%94%9F%E9%97%B4%E8%AE%BE%E8%AE%A1%E6%80%9D%E8%B7%AF%23) `240.3K 🔥` `NEW`
1. [小七龄童去世](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%B8%83%E9%BE%84%E7%AB%A5%E5%8E%BB%E4%B8%96%23) `602.5K 🔥`
1. [祝绪丹 杨幂](https://s.weibo.com/weibo?q=%23%E7%A5%9D%E7%BB%AA%E4%B8%B9%20%E6%9D%A8%E5%B9%82%23) `287.0K 🔥` `-45%`
1. [男生考上北大后第2天就说要复读](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E8%80%83%E4%B8%8A%E5%8C%97%E5%A4%A7%E5%90%8E%E7%AC%AC2%E5%A4%A9%E5%B0%B1%E8%AF%B4%E8%A6%81%E5%A4%8D%E8%AF%BB%23) `268.1K 🔥` `-85%`

Updated at 2026-09-13 17:44:32

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
