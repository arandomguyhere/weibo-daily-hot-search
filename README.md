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

1. [黄仁勋复职原因](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%A4%8D%E8%81%8C%E5%8E%9F%E5%9B%A0%23) `2.6M 🔥` `NEW`
1. [白小纯直播的礼物](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%9B%B4%E6%92%AD%E7%9A%84%E7%A4%BC%E7%89%A9%23) `1.0M 🔥` `NEW`
1. [E法同行向上向海](https://s.weibo.com/weibo?q=%23E%E6%B3%95%E5%90%8C%E8%A1%8C%E5%90%91%E4%B8%8A%E5%90%91%E6%B5%B7%23) `867.9K 🔥` `NEW`
1. [黄仁勋重返公司没有穿黑色皮衣](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E9%87%8D%E8%BF%94%E5%85%AC%E5%8F%B8%E6%B2%A1%E6%9C%89%E7%A9%BF%E9%BB%91%E8%89%B2%E7%9A%AE%E8%A1%A3%23) `839.1K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `803.8K 🔥` `NEW`
1. [猝死女教师每天在校超15个小时](https://s.weibo.com/weibo?q=%23%E7%8C%9D%E6%AD%BB%E5%A5%B3%E6%95%99%E5%B8%88%E6%AF%8F%E5%A4%A9%E5%9C%A8%E6%A0%A1%E8%B6%8515%E4%B8%AA%E5%B0%8F%E6%97%B6%23) `744.8K 🔥` `NEW`
1. [文吉儿只是说话直白](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E5%8F%AA%E6%98%AF%E8%AF%B4%E8%AF%9D%E7%9B%B4%E7%99%BD%23) `687.9K 🔥` `NEW`
1. [特朗普把抵达深圳照片打印出来了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%8A%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3%E7%85%A7%E7%89%87%E6%89%93%E5%8D%B0%E5%87%BA%E6%9D%A5%E4%BA%86%23) `583.4K 🔥` `NEW`
1. [黄仁勋恢复英伟达CEO职务](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E6%81%A2%E5%A4%8D%E8%8B%B1%E4%BC%9F%E8%BE%BECEO%E8%81%8C%E5%8A%A1%23) `418.9K 🔥` `NEW`
1. [复联5版复仇者集结](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E8%81%945%E7%89%88%E5%A4%8D%E4%BB%87%E8%80%85%E9%9B%86%E7%BB%93%23) `411.7K 🔥` `NEW`
1. [白小纯真的交了很多好朋友](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%9C%9F%E7%9A%84%E4%BA%A4%E4%BA%86%E5%BE%88%E5%A4%9A%E5%A5%BD%E6%9C%8B%E5%8F%8B%23) `407.7K 🔥` `NEW`
1. [陈伟霆尺度太大只能选在澳门了](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E5%B0%BA%E5%BA%A6%E5%A4%AA%E5%A4%A7%E5%8F%AA%E8%83%BD%E9%80%89%E5%9C%A8%E6%BE%B3%E9%97%A8%E4%BA%86%23) `394.3K 🔥` `NEW`
1. [李雪琴居然这么瘦了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E7%90%B4%E5%B1%85%E7%84%B6%E8%BF%99%E4%B9%88%E7%98%A6%E4%BA%86%23) `390.0K 🔥` `NEW`
1. [出红毯千万不能站在两个笑星中间](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%BA%A2%E6%AF%AF%E5%8D%83%E4%B8%87%E4%B8%8D%E8%83%BD%E7%AB%99%E5%9C%A8%E4%B8%A4%E4%B8%AA%E7%AC%91%E6%98%9F%E4%B8%AD%E9%97%B4%23) `375.6K 🔥` `NEW`
1. [网购裤子扯出内裤平台仅退款](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%B4%AD%E8%A3%A4%E5%AD%90%E6%89%AF%E5%87%BA%E5%86%85%E8%A3%A4%E5%B9%B3%E5%8F%B0%E4%BB%85%E9%80%80%E6%AC%BE%23) `375.1K 🔥` `NEW`
1. [U17国足第99分钟被绝平](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B3%E7%AC%AC99%E5%88%86%E9%92%9F%E8%A2%AB%E7%BB%9D%E5%B9%B3%23) `343.1K 🔥` `NEW`
1. [王菲牵李嫣就像牵公主一样](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E7%89%B5%E6%9D%8E%E5%AB%A3%E5%B0%B1%E5%83%8F%E7%89%B5%E5%85%AC%E4%B8%BB%E4%B8%80%E6%A0%B7%23) `320.5K 🔥` `NEW`
1. [成毅选了一条不讨巧的路](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E9%80%89%E4%BA%86%E4%B8%80%E6%9D%A1%E4%B8%8D%E8%AE%A8%E5%B7%A7%E7%9A%84%E8%B7%AF%23) `310.3K 🔥` `NEW`
1. [黄仁勋重回英伟达现场视频](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E9%87%8D%E5%9B%9E%E8%8B%B1%E4%BC%9F%E8%BE%BE%E7%8E%B0%E5%9C%BA%E8%A7%86%E9%A2%91%23) `256.6K 🔥` `NEW`
1. [作者称丑狐寒心脸灵感来自工作](https://s.weibo.com/weibo?q=%23%E4%BD%9C%E8%80%85%E7%A7%B0%E4%B8%91%E7%8B%90%E5%AF%92%E5%BF%83%E8%84%B8%E7%81%B5%E6%84%9F%E6%9D%A5%E8%87%AA%E5%B7%A5%E4%BD%9C%23) `252.7K 🔥` `NEW`
1. [老师称现在早恋尺度大](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B8%88%E7%A7%B0%E7%8E%B0%E5%9C%A8%E6%97%A9%E6%81%8B%E5%B0%BA%E5%BA%A6%E5%A4%A7%23) `252.2K 🔥` `NEW`
1. [自己借钱还钱买房名义上妈妈买的](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%B7%B1%E5%80%9F%E9%92%B1%E8%BF%98%E9%92%B1%E4%B9%B0%E6%88%BF%E5%90%8D%E4%B9%89%E4%B8%8A%E5%A6%88%E5%A6%88%E4%B9%B0%E7%9A%84%23) `251.6K 🔥` `NEW`
1. [美股芯片股涨疯了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E8%8A%AF%E7%89%87%E8%82%A1%E6%B6%A8%E7%96%AF%E4%BA%86%23) `251.3K 🔥` `NEW`
1. [神24任务发布会](https://s.weibo.com/weibo?q=%23%E7%A5%9E24%E4%BB%BB%E5%8A%A1%E5%8F%91%E5%B8%83%E4%BC%9A%23) `242.4K 🔥` `NEW`
1. [英伟达空头单日预亏122亿美元](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E7%A9%BA%E5%A4%B4%E5%8D%95%E6%97%A5%E9%A2%84%E4%BA%8F122%E4%BA%BF%E7%BE%8E%E5%85%83%23) `236.5K 🔥` `NEW`
1. [脂肪肝的危害或许被低估了](https://s.weibo.com/weibo?q=%23%E8%84%82%E8%82%AA%E8%82%9D%E7%9A%84%E5%8D%B1%E5%AE%B3%E6%88%96%E8%AE%B8%E8%A2%AB%E4%BD%8E%E4%BC%B0%E4%BA%86%23) `218.0K 🔥` `NEW`
1. [PEL给白小纯送礼物的竞男](https://s.weibo.com/weibo?q=%23PEL%E7%BB%99%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%80%81%E7%A4%BC%E7%89%A9%E7%9A%84%E7%AB%9E%E7%94%B7%23) `198.1K 🔥` `NEW`
1. [刘恺威为小19岁女友黎纪君庆生](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%81%BA%E5%A8%81%E4%B8%BA%E5%B0%8F19%E5%B2%81%E5%A5%B3%E5%8F%8B%E9%BB%8E%E7%BA%AA%E5%90%9B%E5%BA%86%E7%94%9F%23) `196.6K 🔥` `NEW`
1. [山东连续5天现海滋奇观](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E8%BF%9E%E7%BB%AD5%E5%A4%A9%E7%8E%B0%E6%B5%B7%E6%BB%8B%E5%A5%87%E8%A7%82%23) `190.3K 🔥` `NEW`
1. [文吉儿风波的导火索](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E9%A3%8E%E6%B3%A2%E7%9A%84%E5%AF%BC%E7%81%AB%E7%B4%A2%23) `178.0K 🔥` `NEW`
1. [中国各省面积差距原来这么大](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%90%84%E7%9C%81%E9%9D%A2%E7%A7%AF%E5%B7%AE%E8%B7%9D%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B9%88%E5%A4%A7%23) `174.3K 🔥` `NEW`
1. [终于见识到镜头有多苛刻了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E8%A7%81%E8%AF%86%E5%88%B0%E9%95%9C%E5%A4%B4%E6%9C%89%E5%A4%9A%E8%8B%9B%E5%88%BB%E4%BA%86%23) `170.0K 🔥` `NEW`
1. [青稚一直道歉的原因](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E4%B8%80%E7%9B%B4%E9%81%93%E6%AD%89%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `166.2K 🔥` `NEW`
1. [县委书记走访红糖厂家说捡点渣渣吃](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%B5%B0%E8%AE%BF%E7%BA%A2%E7%B3%96%E5%8E%82%E5%AE%B6%E8%AF%B4%E6%8D%A1%E7%82%B9%E6%B8%A3%E6%B8%A3%E5%90%83%23) `163.0K 🔥` `NEW`
1. [欧阳娜娜和董思成共同跳过kickback](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%92%8C%E8%91%A3%E6%80%9D%E6%88%90%E5%85%B1%E5%90%8C%E8%B7%B3%E8%BF%87kickback%23) `159.0K 🔥` `NEW`
1. [女子嫌对面楼老旧自费7.3万刷漆](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AB%8C%E5%AF%B9%E9%9D%A2%E6%A5%BC%E8%80%81%E6%97%A7%E8%87%AA%E8%B4%B97.3%E4%B8%87%E5%88%B7%E6%BC%86%23) `153.8K 🔥` `NEW`
1. [黄仁勋感谢家人的爱和支持](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E6%84%9F%E8%B0%A2%E5%AE%B6%E4%BA%BA%E7%9A%84%E7%88%B1%E5%92%8C%E6%94%AF%E6%8C%81%23) `145.6K 🔥` `NEW`
1. [浮嶋敏回应被绝平](https://s.weibo.com/weibo?q=%23%E6%B5%AE%E5%B6%8B%E6%95%8F%E5%9B%9E%E5%BA%94%E8%A2%AB%E7%BB%9D%E5%B9%B3%23) `139.1K 🔥` `NEW`
1. [祝启慧3比1松岛美空](https://s.weibo.com/weibo?q=%23%E7%A5%9D%E5%90%AF%E6%85%A73%E6%AF%941%E6%9D%BE%E5%B2%9B%E7%BE%8E%E7%A9%BA%23) `136.8K 🔥` `NEW`
1. [褪黑素](https://s.weibo.com/weibo?q=%23%E8%A4%AA%E9%BB%91%E7%B4%A0%23) `136.0K 🔥` `NEW`
1. [张凌赫田曦薇接棒胡歌陈丽君](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E6%8E%A5%E6%A3%92%E8%83%A1%E6%AD%8C%E9%99%88%E4%B8%BD%E5%90%9B%23) `136.0K 🔥` `NEW`
1. [舒淇得奖冯德伦反应](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E5%BE%97%E5%A5%96%E5%86%AF%E5%BE%B7%E4%BC%A6%E5%8F%8D%E5%BA%94%23) `128.2K 🔥` `NEW`
1. [芒果赶紧放母带还文吉儿清白](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E8%B5%B6%E7%B4%A7%E6%94%BE%E6%AF%8D%E5%B8%A6%E8%BF%98%E6%96%87%E5%90%89%E5%84%BF%E6%B8%85%E7%99%BD%23) `126.6K 🔥` `NEW`
1. [詹俊评U17国足被绝平](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E4%BF%8A%E8%AF%84U17%E5%9B%BD%E8%B6%B3%E8%A2%AB%E7%BB%9D%E5%B9%B3%23) `119.3K 🔥` `NEW`
1. [纯稚 顶流](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%A8%9A%20%E9%A1%B6%E6%B5%81%23) `115.7K 🔥` `NEW`
1. [8岁男孩55斤查出脂肪肝](https://s.weibo.com/weibo?q=%238%E5%B2%81%E7%94%B7%E5%AD%A955%E6%96%A4%E6%9F%A5%E5%87%BA%E8%84%82%E8%82%AA%E8%82%9D%23) `112.4K 🔥` `NEW`
1. [英伟达董事会主席6天内态度大反转](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E8%91%A3%E4%BA%8B%E4%BC%9A%E4%B8%BB%E5%B8%AD6%E5%A4%A9%E5%86%85%E6%80%81%E5%BA%A6%E5%A4%A7%E5%8F%8D%E8%BD%AC%23) `106.9K 🔥` `NEW`
1. [美国一议员向上翻眼球被质疑非人类](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E8%AE%AE%E5%91%98%E5%90%91%E4%B8%8A%E7%BF%BB%E7%9C%BC%E7%90%83%E8%A2%AB%E8%B4%A8%E7%96%91%E9%9D%9E%E4%BA%BA%E7%B1%BB%23) `103.1K 🔥` `NEW`
1. [AI 黎曼猜想](https://s.weibo.com/weibo?q=%23AI%20%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3%23) `100.7K 🔥` `NEW`

Updated at 2026-11-24 08:21:08

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
