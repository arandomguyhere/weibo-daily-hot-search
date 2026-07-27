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

1. [官方回应河南三支一扶成绩争议 (Official response to controversy over Henan’s three-branch and one-support achievement)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E6%88%90%E7%BB%A9%E4%BA%89%E8%AE%AE%23) `1.1M 🔥` `NEW`
1. [长鑫批量造富](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E6%89%B9%E9%87%8F%E9%80%A0%E5%AF%8C%23) `820.0K 🔥` `NEW`
1. [未来五年这样建强公共卫生体系](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A5%E4%BA%94%E5%B9%B4%E8%BF%99%E6%A0%B7%E5%BB%BA%E5%BC%BA%E5%85%AC%E5%85%B1%E5%8D%AB%E7%94%9F%E4%BD%93%E7%B3%BB%23) `663.8K 🔥` `NEW`
1. [DeepSeek说他先去吃饭了](https://s.weibo.com/weibo?q=%23DeepSeek%E8%AF%B4%E4%BB%96%E5%85%88%E5%8E%BB%E5%90%83%E9%A5%AD%E4%BA%86%23) `647.6K 🔥` `NEW`
1. [丁禹兮侯明昊官宣同一场音乐节](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E4%BE%AF%E6%98%8E%E6%98%8A%E5%AE%98%E5%AE%A3%E5%90%8C%E4%B8%80%E5%9C%BA%E9%9F%B3%E4%B9%90%E8%8A%82%23) `572.7K 🔥` `NEW`
1. [逐玉配角第一个飞升的是李卿](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%85%8D%E8%A7%92%E7%AC%AC%E4%B8%80%E4%B8%AA%E9%A3%9E%E5%8D%87%E7%9A%84%E6%98%AF%E6%9D%8E%E5%8D%BF%23) `550.6K 🔥` `NEW`
1. [国际乒联2026年第31周世界排名](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E4%B9%92%E8%81%942026%E5%B9%B4%E7%AC%AC31%E5%91%A8%E4%B8%96%E7%95%8C%E6%8E%92%E5%90%8D%23) `280.6K 🔥` `NEW`
1. [小米澎湃OS4新特性曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E6%B9%83OS4%E6%96%B0%E7%89%B9%E6%80%A7%E6%9B%9D%E5%85%89%23) `278.1K 🔥` `NEW`
1. [虞书欣疑似被AI融脸和声音](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%96%91%E4%BC%BC%E8%A2%ABAI%E8%9E%8D%E8%84%B8%E5%92%8C%E5%A3%B0%E9%9F%B3%23) `275.8K 🔥` `NEW`
1. [张慧雯去黄灿灿超话晒美甲挑衅](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E5%8E%BB%E9%BB%84%E7%81%BF%E7%81%BF%E8%B6%85%E8%AF%9D%E6%99%92%E7%BE%8E%E7%94%B2%E6%8C%91%E8%A1%85%23) `270.5K 🔥` `NEW`
1. [胡杏儿和张凌赫解释 (Myolie Wu and Zhang Linghe explain)](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%9D%8F%E5%84%BF%E5%92%8C%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A7%A3%E9%87%8A%23) `267.0K 🔥` `NEW`
1. [梁文锋打新长鑫浮盈8.27亿](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E9%94%8B%E6%89%93%E6%96%B0%E9%95%BF%E9%91%AB%E6%B5%AE%E7%9B%888.27%E4%BA%BF%23) `265.9K 🔥` `NEW`
1. [吴尊15岁女儿neinei近照](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%B0%8A15%E5%B2%81%E5%A5%B3%E5%84%BFneinei%E8%BF%91%E7%85%A7%23) `265.1K 🔥` `NEW`
1. [九尾英雄池](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E8%8B%B1%E9%9B%84%E6%B1%A0%23) `263.6K 🔥` `NEW`
1. [合肥国资赚了万亿](https://s.weibo.com/weibo?q=%23%E5%90%88%E8%82%A5%E5%9B%BD%E8%B5%84%E8%B5%9A%E4%BA%86%E4%B8%87%E4%BA%BF%23) `261.5K 🔥` `NEW`
1. [台湾青年绝食154小时抗议毒台](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E9%9D%92%E5%B9%B4%E7%BB%9D%E9%A3%9F154%E5%B0%8F%E6%97%B6%E6%8A%97%E8%AE%AE%E6%AF%92%E5%8F%B0%23) `259.0K 🔥` `NEW`
1. [李登科回应被起诉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%B5%B7%E8%AF%89%23) `257.0K 🔥` `NEW`
1. [虞书欣工作室回应AI合成](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%9B%9E%E5%BA%94AI%E5%90%88%E6%88%90%23) `255.0K 🔥` `NEW`
1. [陈牧驰陈冰儿子首曝光](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%89%A7%E9%A9%B0%E9%99%88%E5%86%B0%E5%84%BF%E5%AD%90%E9%A6%96%E6%9B%9D%E5%85%89%23) `250.4K 🔥` `NEW`
1. [陈奕恒cha了拖拉机进行曲](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92cha%E4%BA%86%E6%8B%96%E6%8B%89%E6%9C%BA%E8%BF%9B%E8%A1%8C%E6%9B%B2%23) `250.1K 🔥` `NEW`
1. [冉莹颖让邹市明乖点别作 (Ran Yingying asked Zou Shiming to behave differently)](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E8%AE%A9%E9%82%B9%E5%B8%82%E6%98%8E%E4%B9%96%E7%82%B9%E5%88%AB%E4%BD%9C%23) `248.9K 🔥` `NEW`
1. [860元一晚酒店半夜关空调](https://s.weibo.com/weibo?q=%23860%E5%85%83%E4%B8%80%E6%99%9A%E9%85%92%E5%BA%97%E5%8D%8A%E5%A4%9C%E5%85%B3%E7%A9%BA%E8%B0%83%23) `248.9K 🔥` `NEW`
1. [说一个大家快要遗忘的梗](https://s.weibo.com/weibo?q=%23%E8%AF%B4%E4%B8%80%E4%B8%AA%E5%A4%A7%E5%AE%B6%E5%BF%AB%E8%A6%81%E9%81%97%E5%BF%98%E7%9A%84%E6%A2%97%23) `248.9K 🔥` `NEW`
1. [真有人把AI的照片当成自己](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%9C%89%E4%BA%BA%E6%8A%8AAI%E7%9A%84%E7%85%A7%E7%89%87%E5%BD%93%E6%88%90%E8%87%AA%E5%B7%B1%23) `241.9K 🔥` `NEW`
1. [00后都在装大人](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E9%83%BD%E5%9C%A8%E8%A3%85%E5%A4%A7%E4%BA%BA%23) `227.2K 🔥` `NEW`
1. [缅怀逝友遭辱骂追到线下是留守儿童](https://s.weibo.com/weibo?q=%23%E7%BC%85%E6%80%80%E9%80%9D%E5%8F%8B%E9%81%AD%E8%BE%B1%E9%AA%82%E8%BF%BD%E5%88%B0%E7%BA%BF%E4%B8%8B%E6%98%AF%E7%95%99%E5%AE%88%E5%84%BF%E7%AB%A5%23) `189.2K 🔥` `NEW`
1. [尹锡悦当选韩国总统或无效](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E9%94%A1%E6%82%A6%E5%BD%93%E9%80%89%E9%9F%A9%E5%9B%BD%E6%80%BB%E7%BB%9F%E6%88%96%E6%97%A0%E6%95%88%23) `167.4K 🔥` `NEW`
1. [大肠癌病变周期可达10至15年](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%82%A0%E7%99%8C%E7%97%85%E5%8F%98%E5%91%A8%E6%9C%9F%E5%8F%AF%E8%BE%BE10%E8%87%B315%E5%B9%B4%23) `167.4K 🔥` `NEW`
1. [各个行业被AI取代的概率](https://s.weibo.com/weibo?q=%23%E5%90%84%E4%B8%AA%E8%A1%8C%E4%B8%9A%E8%A2%ABAI%E5%8F%96%E4%BB%A3%E7%9A%84%E6%A6%82%E7%8E%87%23) `167.4K 🔥` `NEW`
1. [感觉又看迪丽热巴演了一部喜剧片](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E5%8F%88%E7%9C%8B%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%BC%94%E4%BA%86%E4%B8%80%E9%83%A8%E5%96%9C%E5%89%A7%E7%89%87%23) `167.4K 🔥` `NEW`
1. [考生连续自杀印度年轻人彻底怒了 (Indian youth are furious after candidates commit suicide one after another)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%94%9F%E8%BF%9E%E7%BB%AD%E8%87%AA%E6%9D%80%E5%8D%B0%E5%BA%A6%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BD%BB%E5%BA%95%E6%80%92%E4%BA%86%23) `158.6K 🔥` `NEW`
1. [陈飞宇张子枫 河清海晏](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E5%BC%A0%E5%AD%90%E6%9E%AB%20%E6%B2%B3%E6%B8%85%E6%B5%B7%E6%99%8F%23) `157.6K 🔥` `NEW`
1. [鹿晗工作室贵阳音乐节出图](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%B4%B5%E9%98%B3%E9%9F%B3%E4%B9%90%E8%8A%82%E5%87%BA%E5%9B%BE%23) `156.7K 🔥` `NEW`
1. [LGDNBW对战TES](https://s.weibo.com/weibo?q=%23LGDNBW%E5%AF%B9%E6%88%98TES%23) `155.4K 🔥` `NEW`
1. [白鹿开到荼蘼原声路透](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%E5%8E%9F%E5%A3%B0%E8%B7%AF%E9%80%8F%23) `154.3K 🔥` `NEW`
1. [爱泼斯坦1亿遗产继承人曝光](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A61%E4%BA%BF%E9%81%97%E4%BA%A7%E7%BB%A7%E6%89%BF%E4%BA%BA%E6%9B%9D%E5%85%89%23) `153.9K 🔥` `NEW`
1. [佛得角门将辟谣](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E8%BE%9F%E8%B0%A3%23) `145.3K 🔥` `NEW`
1. [迪丽热巴VOGUE待遇](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4VOGUE%E5%BE%85%E9%81%87%23) `143.6K 🔥` `NEW`
1. [肠癌很多人发现就是中晚期](https://s.weibo.com/weibo?q=%23%E8%82%A0%E7%99%8C%E5%BE%88%E5%A4%9A%E4%BA%BA%E5%8F%91%E7%8E%B0%E5%B0%B1%E6%98%AF%E4%B8%AD%E6%99%9A%E6%9C%9F%23) `662.5K 🔥` `+60%`
1. [现在就出发4三亚开录](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%E4%B8%89%E4%BA%9A%E5%BC%80%E5%BD%95%23) `279.3K 🔥`
1. [林志颖回应Kimi网上照片 (Jimmy Lin responds to Kimi's online photos)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96%E5%9B%9E%E5%BA%94Kimi%E7%BD%91%E4%B8%8A%E7%85%A7%E7%89%87%23) `274.1K 🔥`
1. [不要和楼下大爷大妈混熟](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%92%8C%E6%A5%BC%E4%B8%8B%E5%A4%A7%E7%88%B7%E5%A4%A7%E5%A6%88%E6%B7%B7%E7%86%9F%23) `269.4K 🔥`
1. [华为苹果媒体机无特调](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E8%8B%B9%E6%9E%9C%E5%AA%92%E4%BD%93%E6%9C%BA%E6%97%A0%E7%89%B9%E8%B0%83%23) `249.1K 🔥`
1. [东野圭吾 最年轻的是今天](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%87%8E%E5%9C%AD%E5%90%BE%20%E6%9C%80%E5%B9%B4%E8%BD%BB%E7%9A%84%E6%98%AF%E4%BB%8A%E5%A4%A9%23) `230.4K 🔥`
1. [东野圭吾遗作](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%87%8E%E5%9C%AD%E5%90%BE%E9%81%97%E4%BD%9C%23) `272.5K 🔥` `-55%`
1. [突然理解一生要出片的女人了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E4%B8%80%E7%94%9F%E8%A6%81%E5%87%BA%E7%89%87%E7%9A%84%E5%A5%B3%E4%BA%BA%E4%BA%86%23) `256.4K 🔥` `-35%`
1. [发现朋友圈没人晒旅游照了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%B2%A1%E4%BA%BA%E6%99%92%E6%97%85%E6%B8%B8%E7%85%A7%E4%BA%86%23) `252.5K 🔥` `-49%`
1. [李现晒他拍的越秀公园](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E6%99%92%E4%BB%96%E6%8B%8D%E7%9A%84%E8%B6%8A%E7%A7%80%E5%85%AC%E5%9B%AD%23) `196.5K 🔥` `-26%`
1. [肠镜检查](https://s.weibo.com/weibo?q=%23%E8%82%A0%E9%95%9C%E6%A3%80%E6%9F%A5%23) `180.8K 🔥` `-43%`
1. [第13号台风白海豚要来了](https://s.weibo.com/weibo?q=%23%E7%AC%AC13%E5%8F%B7%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E8%A6%81%E6%9D%A5%E4%BA%86%23) `144.1K 🔥` `-48%`

Updated at 2026-07-27 21:40:59

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
