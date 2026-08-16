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

1. [为中国航天点赞 (Thumbs up for China Aerospace)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E7%82%B9%E8%B5%9E%23) `888.8K 🔥` `NEW`
1. [暑期服务消费潜能加速释放](https://s.weibo.com/weibo?q=%23%E6%9A%91%E6%9C%9F%E6%9C%8D%E5%8A%A1%E6%B6%88%E8%B4%B9%E6%BD%9C%E8%83%BD%E5%8A%A0%E9%80%9F%E9%87%8A%E6%94%BE%23) `679.5K 🔥` `NEW`
1. [四代唱刺了](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E4%BB%A3%E5%94%B1%E5%88%BA%E4%BA%86%23) `660.2K 🔥` `NEW`
1. [谷爱凌否认恋情](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%A6%E8%AE%A4%E6%81%8B%E6%83%85%23) `574.1K 🔥` `NEW`
1. [父亲踹女儿路人制止致其轻伤案重审](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E8%B8%B9%E5%A5%B3%E5%84%BF%E8%B7%AF%E4%BA%BA%E5%88%B6%E6%AD%A2%E8%87%B4%E5%85%B6%E8%BD%BB%E4%BC%A4%E6%A1%88%E9%87%8D%E5%AE%A1%23) `417.7K 🔥` `NEW`
1. [鹿晗天资是很残忍的东西](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%A4%A9%E8%B5%84%E6%98%AF%E5%BE%88%E6%AE%8B%E5%BF%8D%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `374.6K 🔥` `NEW`
1. [新领证驾驶人10年减少43%](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%A2%86%E8%AF%81%E9%A9%BE%E9%A9%B6%E4%BA%BA10%E5%B9%B4%E5%87%8F%E5%B0%9143%25%23) `333.1K 🔥` `NEW`
1. [陈奕恒陈思罕Teeth](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E9%99%88%E6%80%9D%E7%BD%95Teeth%23) `332.6K 🔥` `NEW`
1. [陈奕恒摔倒](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E6%91%94%E5%80%92%23) `330.8K 🔥` `NEW`
1. [王艺迪4比2复仇张本美和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E8%BF%AA4%E6%AF%942%E5%A4%8D%E4%BB%87%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `330.5K 🔥` `NEW`
1. [王曼昱4比0蒯曼 (Wang Manyu 4 to 0 Kuai Man)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B14%E6%AF%940%E8%92%AF%E6%9B%BC%23) `328.7K 🔥` `NEW`
1. [严浩翔直播](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9B%B4%E6%92%AD%23) `328.5K 🔥` `NEW`
1. [王俊凯脖子上的蝴蝶](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%84%96%E5%AD%90%E4%B8%8A%E7%9A%84%E8%9D%B4%E8%9D%B6%23) `327.8K 🔥` `NEW`
1. [鞠婧祎方告黑进度更新](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%96%B9%E5%91%8A%E9%BB%91%E8%BF%9B%E5%BA%A6%E6%9B%B4%E6%96%B0%23) `327.4K 🔥` `NEW`
1. [苏新皓牙牙乐](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E7%89%99%E7%89%99%E4%B9%90%23) `313.0K 🔥` `NEW`
1. [WTT](https://s.weibo.com/weibo?q=%23WTT%23) `312.1K 🔥` `NEW`
1. [沈佳润还是藏不住事的年纪](https://s.weibo.com/weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E8%BF%98%E6%98%AF%E8%97%8F%E4%B8%8D%E4%BD%8F%E4%BA%8B%E7%9A%84%E5%B9%B4%E7%BA%AA%23) `311.6K 🔥` `NEW`
1. [数读中国出口含新量含绿量](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E4%B8%AD%E5%9B%BD%E5%87%BA%E5%8F%A3%E5%90%AB%E6%96%B0%E9%87%8F%E5%90%AB%E7%BB%BF%E9%87%8F%23) `276.4K 🔥` `NEW`
1. [张彬彬台风好帅](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BD%AC%E5%BD%AC%E5%8F%B0%E9%A3%8E%E5%A5%BD%E5%B8%85%23) `272.3K 🔥` `NEW`
1. [王艺迪回应4比2张本美和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E8%BF%AA%E5%9B%9E%E5%BA%944%E6%AF%942%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `258.7K 🔥` `NEW`
1. [魏子宸太有杰尼斯味了 (Wei Zichen looks so Johnny-like)](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%A4%AA%E6%9C%89%E6%9D%B0%E5%B0%BC%E6%96%AF%E5%91%B3%E4%BA%86%23) `876.6K 🔥` `+142%`
1. [请3天假连休13天](https://s.weibo.com/weibo?q=%23%E8%AF%B73%E5%A4%A9%E5%81%87%E8%BF%9E%E4%BC%9113%E5%A4%A9%23) `869.7K 🔥` `+70%`
1. [沈佳润白到发光 (Shen Jiarun is so white that she glows)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E7%99%BD%E5%88%B0%E5%8F%91%E5%85%89%23) `843.6K 🔥` `+132%`
1. [龙餐馆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `576.2K 🔥` `+73%`
1. [Alex一雯白分手](https://s.weibo.com/weibo?q=%23Alex%E4%B8%80%E9%9B%AF%E7%99%BD%E5%88%86%E6%89%8B%23) `559.9K 🔥` `+54%`
1. [时代少年团个人能力排名](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%B8%AA%E4%BA%BA%E8%83%BD%E5%8A%9B%E6%8E%92%E5%90%8D%23) `554.3K 🔥` `+53%`
1. [美国女子怀孕八个月却每天吸食芬太尼](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E5%85%AB%E4%B8%AA%E6%9C%88%E5%8D%B4%E6%AF%8F%E5%A4%A9%E5%90%B8%E9%A3%9F%E8%8A%AC%E5%A4%AA%E5%B0%BC%23) `333.6K 🔥` `+101%`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `331.2K 🔥` `+57%`
1. [五公节目单](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%85%AC%E8%8A%82%E7%9B%AE%E5%8D%95%23) `326.8K 🔥` `+31%`
1. [苹果阿里合作新进展](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E9%98%BF%E9%87%8C%E5%90%88%E4%BD%9C%E6%96%B0%E8%BF%9B%E5%B1%95%23) `256.6K 🔥` `+57%`
1. [朱镕基同志遗体18日火化 (Comrade Zhu Rongji’s body was cremated on the 18th)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%81%97%E4%BD%9318%E6%97%A5%E7%81%AB%E5%8C%96%23) `1.0M 🔥`
1. [市民打12345投诉月光太亮影响睡觉 (Citizens called 12345 to complain that the moonlight was too bright and affected their sleep.)](https://s.weibo.com/weibo?q=%23%E5%B8%82%E6%B0%91%E6%89%9312345%E6%8A%95%E8%AF%89%E6%9C%88%E5%85%89%E5%A4%AA%E4%BA%AE%E5%BD%B1%E5%93%8D%E7%9D%A1%E8%A7%89%23) `957.8K 🔥`
1. [王曼昱vs蒯曼 (Wang Manyu vs. Kuai Man)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1vs%E8%92%AF%E6%9B%BC%23) `712.3K 🔥`
1. [王橹杰 上春山](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E4%B8%8A%E6%98%A5%E5%B1%B1%23) `376.3K 🔥`
1. [贺峻霖给严浩翔照片加了美颜 (He Junlin added beauty to Yan Haoxiang's photos)](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%BB%99%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%85%A7%E7%89%87%E5%8A%A0%E4%BA%86%E7%BE%8E%E9%A2%9C%23) `332.4K 🔥`
1. [曝谷爱凌LV三公子恋情 (Gu Ailing’s love affair with LV’s third son revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B0%B7%E7%88%B1%E5%87%8CLV%E4%B8%89%E5%85%AC%E5%AD%90%E6%81%8B%E6%83%85%23) `332.0K 🔥`
1. [什么东西成年了才意识到很贵 (What do you need to realize as an adult that something is expensive?)](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E4%B8%9C%E8%A5%BF%E6%88%90%E5%B9%B4%E4%BA%86%E6%89%8D%E6%84%8F%E8%AF%86%E5%88%B0%E5%BE%88%E8%B4%B5%23) `331.6K 🔥`
1. [虞书欣穿戏服聚会](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%A9%BF%E6%88%8F%E6%9C%8D%E8%81%9A%E4%BC%9A%23) `330.1K 🔥`
1. [段永平1300亿持仓曝光](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E6%B0%B8%E5%B9%B31300%E4%BA%BF%E6%8C%81%E4%BB%93%E6%9B%9D%E5%85%89%23) `329.9K 🔥`
1. [马正阳声音侵权声明 (Ma Zhengyang’s voice infringement statement)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%AD%A3%E9%98%B3%E5%A3%B0%E9%9F%B3%E4%BE%B5%E6%9D%83%E5%A3%B0%E6%98%8E%23) `329.4K 🔥`
1. [披荆斩棘直播](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `329.1K 🔥`
1. [韩网友点评新疆伊犁草原](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E5%8F%8B%E7%82%B9%E8%AF%84%E6%96%B0%E7%96%86%E4%BC%8A%E7%8A%81%E8%8D%89%E5%8E%9F%23) `328.0K 🔥`
1. [王橹杰蓝发](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%93%9D%E5%8F%91%23) `327.0K 🔥`
1. [现在的小学生都进化成这样了吗 (Have all primary school students today evolved like this?)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%B0%8F%E5%AD%A6%E7%94%9F%E9%83%BD%E8%BF%9B%E5%8C%96%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%E5%90%97%23) `323.9K 🔥`
1. [龙餐馆未被采纳的海报 (Dragon Restaurant Unaccepted Poster)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E6%9C%AA%E8%A2%AB%E9%87%87%E7%BA%B3%E7%9A%84%E6%B5%B7%E6%8A%A5%23) `323.1K 🔥`
1. [刘耀文雷霆裤子](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E9%9B%B7%E9%9C%86%E8%A3%A4%E5%AD%90%23) `305.2K 🔥`
1. [王艺迪vs张本美和 (Wang Yidi vs. Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E8%BF%AAvs%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `545.1K 🔥` `-25%`
1. [网红小家电集体吃灰了 (Internet celebrity small home appliances are collectively in ashes)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B0%8F%E5%AE%B6%E7%94%B5%E9%9B%86%E4%BD%93%E5%90%83%E7%81%B0%E4%BA%86%23) `333.6K 🔥` `-25%`
1. [TMEA节目单 (TMEA program list)](https://s.weibo.com/weibo?q=%23TMEA%E8%8A%82%E7%9B%AE%E5%8D%95%23) `264.1K 🔥` `-34%`
1. [以色列高官极端言论震惊国际社会](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%AB%98%E5%AE%98%E6%9E%81%E7%AB%AF%E8%A8%80%E8%AE%BA%E9%9C%87%E6%83%8A%E5%9B%BD%E9%99%85%E7%A4%BE%E4%BC%9A%23) `256.7K 🔥` `-28%`

Updated at 2026-08-16 20:39:38

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
