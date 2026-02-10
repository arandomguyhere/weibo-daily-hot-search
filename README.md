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

1. [中国短道混接无缘奖牌 (China's short track hybrid misses medals)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9F%AD%E9%81%93%E6%B7%B7%E6%8E%A5%E6%97%A0%E7%BC%98%E5%A5%96%E7%89%8C%23) `2.2M 🔥` `NEW`
1. [中国短道队混接进决赛](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9F%AD%E9%81%93%E9%98%9F%E6%B7%B7%E6%8E%A5%E8%BF%9B%E5%86%B3%E8%B5%9B%23) `1.4M 🔥` `NEW`
1. [2025年被AI改变的打工人](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E8%A2%ABAI%E6%94%B9%E5%8F%98%E7%9A%84%E6%89%93%E5%B7%A5%E4%BA%BA%23) `1.3M 🔥` `NEW`
1. [博物馆里的马元素](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E7%89%A9%E9%A6%86%E9%87%8C%E7%9A%84%E9%A9%AC%E5%85%83%E7%B4%A0%23) `919.6K 🔥` `NEW`
1. [韩国队无缘短道混接决赛](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%98%9F%E6%97%A0%E7%BC%98%E7%9F%AD%E9%81%93%E6%B7%B7%E6%8E%A5%E5%86%B3%E8%B5%9B%23) `825.4K 🔥` `NEW`
1. [央视网络春晚](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BD%91%E7%BB%9C%E6%98%A5%E6%99%9A%23) `516.2K 🔥` `NEW`
1. [武大靖笑得太大声了](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E9%9D%96%E7%AC%91%E5%BE%97%E5%A4%AA%E5%A4%A7%E5%A3%B0%E4%BA%86%23) `509.0K 🔥` `NEW`
1. [井柏然刘雯机场十指紧扣](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%98%E9%9B%AF%E6%9C%BA%E5%9C%BA%E5%8D%81%E6%8C%87%E7%B4%A7%E6%89%A3%23) `460.7K 🔥` `NEW`
1. [微博之夜像素画](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%E5%83%8F%E7%B4%A0%E7%94%BB%23) `393.4K 🔥` `NEW`
1. [韩国申诉未果](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%94%B3%E8%AF%89%E6%9C%AA%E6%9E%9C%23) `294.3K 🔥` `NEW`
1. [手术中面罩掉落砸眼致视力严重下降 (During the operation, the mask fell and hit the eye, causing severe vision loss.)](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%AF%E4%B8%AD%E9%9D%A2%E7%BD%A9%E6%8E%89%E8%90%BD%E7%A0%B8%E7%9C%BC%E8%87%B4%E8%A7%86%E5%8A%9B%E4%B8%A5%E9%87%8D%E4%B8%8B%E9%99%8D%23) `243.1K 🔥` `NEW`
1. [女子年会中4克黄金熔后变白银](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B9%B4%E4%BC%9A%E4%B8%AD4%E5%85%8B%E9%BB%84%E9%87%91%E7%86%94%E5%90%8E%E5%8F%98%E7%99%BD%E9%93%B6%23) `232.0K 🔥` `NEW`
1. [豆包将上春晚发10万份科技好礼](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%B0%86%E4%B8%8A%E6%98%A5%E6%99%9A%E5%8F%9110%E4%B8%87%E4%BB%BD%E7%A7%91%E6%8A%80%E5%A5%BD%E7%A4%BC%23) `220.6K 🔥` `NEW`
1. [任子威说你还求上了](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AD%90%E5%A8%81%E8%AF%B4%E4%BD%A0%E8%BF%98%E6%B1%82%E4%B8%8A%E4%BA%86%23) `215.5K 🔥` `NEW`
1. [特朗普称自己犯了大错](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%87%AA%E5%B7%B1%E7%8A%AF%E4%BA%86%E5%A4%A7%E9%94%99%23) `187.9K 🔥` `NEW`
1. [张楚桐500米顺利晋级](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A5%9A%E6%A1%90500%E7%B1%B3%E9%A1%BA%E5%88%A9%E6%99%8B%E7%BA%A7%23) `145.4K 🔥` `NEW`
1. [王濛现场观看短道速滑](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%8E%B0%E5%9C%BA%E8%A7%82%E7%9C%8B%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%23) `141.2K 🔥` `NEW`
1. [生命树](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%23) `134.8K 🔥` `NEW`
1. [林孝埈1000米被对手犯规](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%881000%E7%B1%B3%E8%A2%AB%E5%AF%B9%E6%89%8B%E7%8A%AF%E8%A7%84%23) `125.9K 🔥` `NEW`
1. [花999元找人磕头还不如打个视频](https://s.weibo.com/weibo?q=%23%E8%8A%B1999%E5%85%83%E6%89%BE%E4%BA%BA%E7%A3%95%E5%A4%B4%E8%BF%98%E4%B8%8D%E5%A6%82%E6%89%93%E4%B8%AA%E8%A7%86%E9%A2%91%23) `122.8K 🔥` `NEW`
1. [王濛现身米兰被中外观众围堵 (Wang Meng appeared in Milan and was mobbed by Chinese and foreign audiences)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%8E%B0%E8%BA%AB%E7%B1%B3%E5%85%B0%E8%A2%AB%E4%B8%AD%E5%A4%96%E8%A7%82%E4%BC%97%E5%9B%B4%E5%A0%B5%23) `114.7K 🔥` `NEW`
1. [范可新拼太猛把牙咬碎了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%8F%AF%E6%96%B0%E6%8B%BC%E5%A4%AA%E7%8C%9B%E6%8A%8A%E7%89%99%E5%92%AC%E7%A2%8E%E4%BA%86%23) `114.4K 🔥` `NEW`
1. [任子威说冲击首金是短道速滑队传统](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AD%90%E5%A8%81%E8%AF%B4%E5%86%B2%E5%87%BB%E9%A6%96%E9%87%91%E6%98%AF%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%E9%98%9F%E4%BC%A0%E7%BB%9F%23) `97.9K 🔥` `NEW`
1. [春晚](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%23) `97.3K 🔥` `NEW`
1. [刘少昂1000米顺利晋级](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%821000%E7%B1%B3%E9%A1%BA%E5%88%A9%E6%99%8B%E7%BA%A7%23) `96.6K 🔥` `NEW`
1. [2026丝路春晚](https://s.weibo.com/weibo?q=%232026%E4%B8%9D%E8%B7%AF%E6%98%A5%E6%99%9A%23) `1.3M 🔥` `+98%`
1. [短道速滑混团接力 (Short track speed skating mixed team relay)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%E6%B7%B7%E5%9B%A2%E6%8E%A5%E5%8A%9B%23) `1.3M 🔥` `+55%`
1. [孙龙1000米顺利晋级 (Sun Long successfully advanced to 1,000 meters)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%991000%E7%B1%B3%E9%A1%BA%E5%88%A9%E6%99%8B%E7%BA%A7%23) `1.1M 🔥` `+1049%`
1. [女子短道速滑500米预赛](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91500%E7%B1%B3%E9%A2%84%E8%B5%9B%23) `733.6K 🔥` `+99%`
1. [陈星旭 情商 (Chen Xingxu Emotional Intelligence)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%20%E6%83%85%E5%95%86%23) `494.7K 🔥` `+163%`
1. [王曼昱决胜局擦边球尊重裁判](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%86%B3%E8%83%9C%E5%B1%80%E6%93%A6%E8%BE%B9%E7%90%83%E5%B0%8A%E9%87%8D%E8%A3%81%E5%88%A4%23) `479.5K 🔥` `+91%`
1. [米哈游宣布解雇常年法律顾问](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%93%88%E6%B8%B8%E5%AE%A3%E5%B8%83%E8%A7%A3%E9%9B%87%E5%B8%B8%E5%B9%B4%E6%B3%95%E5%BE%8B%E9%A1%BE%E9%97%AE%23) `415.8K 🔥` `+185%`
1. [于正回应明星扎堆前往大孤山](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E6%98%8E%E6%98%9F%E6%89%8E%E5%A0%86%E5%89%8D%E5%BE%80%E5%A4%A7%E5%AD%A4%E5%B1%B1%23) `384.1K 🔥` `+109%`
1. [范可新哭了 (Fan Kexin cried)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%8F%AF%E6%96%B0%E5%93%AD%E4%BA%86%23) `237.8K 🔥` `+58%`
1. [白鹿孟子义一起去了大孤山 (Bailu and Meng Ziyi went to Dagushan together)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%80%E8%B5%B7%E5%8E%BB%E4%BA%86%E5%A4%A7%E5%AD%A4%E5%B1%B1%23) `235.1K 🔥` `+33%`
1. [男子短道速滑1000米预赛 (Men's short track speed skating 1000m preliminaries)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%911000%E7%B1%B3%E9%A2%84%E8%B5%9B%23) `922.6K 🔥`
1. [我们的少年时代2 双男主](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%20%E5%8F%8C%E7%94%B7%E4%B8%BB%23) `240.5K 🔥`
1. [洪世贤掉到榜二了](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E4%B8%96%E8%B4%A4%E6%8E%89%E5%88%B0%E6%A6%9C%E4%BA%8C%E4%BA%86%23) `239.2K 🔥`
1. [小年](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B9%B4%23) `190.8K 🔥`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `168.0K 🔥`
1. [关晓彤观赛中国短道速滑](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E8%A7%82%E8%B5%9B%E4%B8%AD%E5%9B%BD%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%23) `144.6K 🔥`
1. [不二之臣直播](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BA%8C%E4%B9%8B%E8%87%A3%E7%9B%B4%E6%92%AD%23) `111.1K 🔥`
1. [林孝埈晋级](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E6%99%8B%E7%BA%A7%23) `320.1K 🔥` `-31%`
1. [瑞幸回应杯套出现错别字](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%9B%9E%E5%BA%94%E6%9D%AF%E5%A5%97%E5%87%BA%E7%8E%B0%E9%94%99%E5%88%AB%E5%AD%97%23) `288.7K 🔥` `-31%`
1. [薛之谦万兽之王演唱会官宣](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%B8%87%E5%85%BD%E4%B9%8B%E7%8E%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `216.8K 🔥` `-24%`
1. [汕头4200一晚的亚朵已订满 (The Atour hotel in Shantou that costs 4,200 a night is fully booked)](https://s.weibo.com/weibo?q=%23%E6%B1%95%E5%A4%B44200%E4%B8%80%E6%99%9A%E7%9A%84%E4%BA%9A%E6%9C%B5%E5%B7%B2%E8%AE%A2%E6%BB%A1%23) `176.3K 🔥` `-32%`
1. [任子威解说](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AD%90%E5%A8%81%E8%A7%A3%E8%AF%B4%23) `161.5K 🔥` `-28%`
1. [黄子弘凡TF四代cha无想](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1TF%E5%9B%9B%E4%BB%A3cha%E6%97%A0%E6%83%B3%23) `148.1K 🔥` `-37%`
1. [小年夜](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B9%B4%E5%A4%9C%23) `120.4K 🔥` `-36%`
1. [爱泼斯坦案出现一名9岁受害者 (A 9-year-old victim emerges in Epstein case)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E5%87%BA%E7%8E%B0%E4%B8%80%E5%90%8D9%E5%B2%81%E5%8F%97%E5%AE%B3%E8%80%85%23) `106.9K 🔥` `-37%`
1. [瑞幸 错别字 (Luckin typo)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%20%E9%94%99%E5%88%AB%E5%AD%97%23) `103.3K 🔥` `-43%`
1. [关系再好也不要说的事 (Things you shouldn’t say no matter how good your relationship is)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E7%B3%BB%E5%86%8D%E5%A5%BD%E4%B9%9F%E4%B8%8D%E8%A6%81%E8%AF%B4%E7%9A%84%E4%BA%8B%23) `100.5K 🔥` `-75%`

Updated at 2026-02-10 20:35:17

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
