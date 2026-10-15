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

1. [深圳全市全天禁鸣喇叭5年](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%85%A8%E5%B8%82%E5%85%A8%E5%A4%A9%E7%A6%81%E9%B8%A3%E5%96%87%E5%8F%AD5%E5%B9%B4%23) `995.4K 🔥` `NEW`
1. [TES经理回应ZUIAN签证问题](https://s.weibo.com/weibo?q=%23TES%E7%BB%8F%E7%90%86%E5%9B%9E%E5%BA%94ZUIAN%E7%AD%BE%E8%AF%81%E9%97%AE%E9%A2%98%23) `569.3K 🔥` `NEW`
1. [起初他们参加红军只为找条活路](https://s.weibo.com/weibo?q=%23%E8%B5%B7%E5%88%9D%E4%BB%96%E4%BB%AC%E5%8F%82%E5%8A%A0%E7%BA%A2%E5%86%9B%E5%8F%AA%E4%B8%BA%E6%89%BE%E6%9D%A1%E6%B4%BB%E8%B7%AF%23) `457.6K 🔥` `NEW`
1. [一杯奶的要强答案](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%9D%AF%E5%A5%B6%E7%9A%84%E8%A6%81%E5%BC%BA%E7%AD%94%E6%A1%88%23) `456.7K 🔥` `NEW`
1. [曝李昀锐去hi6接孟子义下班](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E6%98%80%E9%94%90%E5%8E%BBhi6%E6%8E%A5%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%8B%E7%8F%AD%23) `452.3K 🔥` `NEW`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `353.4K 🔥` `NEW`
1. [AI射雕英雄传看起来比人演的好](https://s.weibo.com/weibo?q=%23AI%E5%B0%84%E9%9B%95%E8%8B%B1%E9%9B%84%E4%BC%A0%E7%9C%8B%E8%B5%B7%E6%9D%A5%E6%AF%94%E4%BA%BA%E6%BC%94%E7%9A%84%E5%A5%BD%23) `304.0K 🔥` `NEW`
1. [为何年轻人不爱去菜市场](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BD%95%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%8D%E7%88%B1%E5%8E%BB%E8%8F%9C%E5%B8%82%E5%9C%BA%23) `241.0K 🔥` `NEW`
1. [年轻人开始用AI整顿双11了](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E7%94%A8AI%E6%95%B4%E9%A1%BF%E5%8F%8C11%E4%BA%86%23) `240.2K 🔥` `NEW`
1. [大龄读研见老师两面就退学](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BE%84%E8%AF%BB%E7%A0%94%E8%A7%81%E8%80%81%E5%B8%88%E4%B8%A4%E9%9D%A2%E5%B0%B1%E9%80%80%E5%AD%A6%23) `240.0K 🔥` `NEW`
1. [周迅釜山电影节影后](https://s.weibo.com/weibo?q=%23%E5%91%A8%E8%BF%85%E9%87%9C%E5%B1%B1%E7%94%B5%E5%BD%B1%E8%8A%82%E5%BD%B1%E5%90%8E%23) `238.9K 🔥` `NEW`
1. [徐艺洋24年6月的肚子](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B24%E5%B9%B46%E6%9C%88%E7%9A%84%E8%82%9A%E5%AD%90%23) `237.7K 🔥` `NEW`
1. [杨和苏公开女友](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%92%8C%E8%8B%8F%E5%85%AC%E5%BC%80%E5%A5%B3%E5%8F%8B%23) `236.8K 🔥` `NEW`
1. [央企中建七局拖欠农民工工资](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E4%BC%81%E4%B8%AD%E5%BB%BA%E4%B8%83%E5%B1%80%E6%8B%96%E6%AC%A0%E5%86%9C%E6%B0%91%E5%B7%A5%E5%B7%A5%E8%B5%84%23) `236.3K 🔥` `NEW`
1. [李昀锐哄孟子义拍照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%93%84%E5%AD%9F%E5%AD%90%E4%B9%89%E6%8B%8D%E7%85%A7%23) `234.9K 🔥` `NEW`
1. [衣衫不整男孩姥姥发声](https://s.weibo.com/weibo?q=%23%E8%A1%A3%E8%A1%AB%E4%B8%8D%E6%95%B4%E7%94%B7%E5%AD%A9%E5%A7%A5%E5%A7%A5%E5%8F%91%E5%A3%B0%23) `234.5K 🔥` `NEW`
1. [黄子韬谈妻子生理期细节被质疑](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E8%B0%88%E5%A6%BB%E5%AD%90%E7%94%9F%E7%90%86%E6%9C%9F%E7%BB%86%E8%8A%82%E8%A2%AB%E8%B4%A8%E7%96%91%23) `233.7K 🔥` `NEW`
1. [严军曾向严浩翔要1000多万](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%86%9B%E6%9B%BE%E5%90%91%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%A6%811000%E5%A4%9A%E4%B8%87%23) `232.3K 🔥` `NEW`
1. [李嘉诚最新动态](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E8%AF%9A%E6%9C%80%E6%96%B0%E5%8A%A8%E6%80%81%23) `231.5K 🔥` `NEW`
1. [Babycare已起诉靠谱老王](https://s.weibo.com/weibo?q=%23Babycare%E5%B7%B2%E8%B5%B7%E8%AF%89%E9%9D%A0%E8%B0%B1%E8%80%81%E7%8E%8B%23) `230.8K 🔥` `NEW`
1. [昀牵孟绕](https://s.weibo.com/weibo?q=%23%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95%23) `230.2K 🔥` `NEW`
1. [黄子韬徐艺洋之子 正统帽男帽女](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%BE%90%E8%89%BA%E6%B4%8B%E4%B9%8B%E5%AD%90%20%E6%AD%A3%E7%BB%9F%E5%B8%BD%E7%94%B7%E5%B8%BD%E5%A5%B3%23) `229.2K 🔥` `NEW`
1. [被年轻人的装修惊呆了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E8%A3%85%E4%BF%AE%E6%83%8A%E5%91%86%E4%BA%86%23) `228.7K 🔥` `NEW`
1. [乔任梁去世前1天与家人过中秋节](https://s.weibo.com/weibo?q=%23%E4%B9%94%E4%BB%BB%E6%A2%81%E5%8E%BB%E4%B8%96%E5%89%8D1%E5%A4%A9%E4%B8%8E%E5%AE%B6%E4%BA%BA%E8%BF%87%E4%B8%AD%E7%A7%8B%E8%8A%82%23) `228.7K 🔥` `NEW`
1. [隐性高糖的十个信号](https://s.weibo.com/weibo?q=%23%E9%9A%90%E6%80%A7%E9%AB%98%E7%B3%96%E7%9A%84%E5%8D%81%E4%B8%AA%E4%BF%A1%E5%8F%B7%23) `228.6K 🔥` `NEW`
1. [曝明星私生子高额抚养费判决书](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%98%8E%E6%98%9F%E7%A7%81%E7%94%9F%E5%AD%90%E9%AB%98%E9%A2%9D%E6%8A%9A%E5%85%BB%E8%B4%B9%E5%88%A4%E5%86%B3%E4%B9%A6%23) `228.5K 🔥` `NEW`
1. [尚公主](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%23) `228.5K 🔥` `NEW`
1. [好婚姻靠主动不给自己犯错机会](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A9%9A%E5%A7%BB%E9%9D%A0%E4%B8%BB%E5%8A%A8%E4%B8%8D%E7%BB%99%E8%87%AA%E5%B7%B1%E7%8A%AF%E9%94%99%E6%9C%BA%E4%BC%9A%23) `228.4K 🔥` `NEW`
1. [乔任梁离世前连续20天无法入睡](https://s.weibo.com/weibo?q=%23%E4%B9%94%E4%BB%BB%E6%A2%81%E7%A6%BB%E4%B8%96%E5%89%8D%E8%BF%9E%E7%BB%AD20%E5%A4%A9%E6%97%A0%E6%B3%95%E5%85%A5%E7%9D%A1%23) `228.3K 🔥` `NEW`
1. [轿车司机昏迷面包车拦停救人](https://s.weibo.com/weibo?q=%23%E8%BD%BF%E8%BD%A6%E5%8F%B8%E6%9C%BA%E6%98%8F%E8%BF%B7%E9%9D%A2%E5%8C%85%E8%BD%A6%E6%8B%A6%E5%81%9C%E6%95%91%E4%BA%BA%23) `228.3K 🔥` `NEW`
1. [王昭君投票](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%AD%E5%90%9B%E6%8A%95%E7%A5%A8%23) `228.2K 🔥` `NEW`
1. [李秀满俞永镇NeonCHA](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%A7%80%E6%BB%A1%E4%BF%9E%E6%B0%B8%E9%95%87NeonCHA%23) `228.1K 🔥` `NEW`
1. [陈小春爸爸不希望打扰弟弟生活](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E7%88%B8%E7%88%B8%E4%B8%8D%E5%B8%8C%E6%9C%9B%E6%89%93%E6%89%B0%E5%BC%9F%E5%BC%9F%E7%94%9F%E6%B4%BB%23) `228.1K 🔥` `NEW`
1. [王者荣耀投票](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%8A%95%E7%A5%A8%23) `228.0K 🔥` `NEW`
1. [小S说二女儿私下也很像林志玲](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E8%AF%B4%E4%BA%8C%E5%A5%B3%E5%84%BF%E7%A7%81%E4%B8%8B%E4%B9%9F%E5%BE%88%E5%83%8F%E6%9E%97%E5%BF%97%E7%8E%B2%23) `228.0K 🔥` `NEW`
1. [伊藤美诚不在日乒新国家队名单](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%97%A4%E7%BE%8E%E8%AF%9A%E4%B8%8D%E5%9C%A8%E6%97%A5%E4%B9%92%E6%96%B0%E5%9B%BD%E5%AE%B6%E9%98%9F%E5%90%8D%E5%8D%95%23) `227.9K 🔥` `NEW`
1. [向太曝李连杰女儿患抑郁症被高校拒收](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E6%9B%9D%E6%9D%8E%E8%BF%9E%E6%9D%B0%E5%A5%B3%E5%84%BF%E6%82%A3%E6%8A%91%E9%83%81%E7%97%87%E8%A2%AB%E9%AB%98%E6%A0%A1%E6%8B%92%E6%94%B6%23) `227.9K 🔥` `NEW`
1. [虞书欣直播](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9B%B4%E6%92%AD%23) `227.8K 🔥` `NEW`
1. [年轻人猝死往往有两个共同点](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%8C%9D%E6%AD%BB%E5%BE%80%E5%BE%80%E6%9C%89%E4%B8%A4%E4%B8%AA%E5%85%B1%E5%90%8C%E7%82%B9%23) `227.7K 🔥` `NEW`
1. [TTG赛中语音五杀瞬间](https://s.weibo.com/weibo?q=%23TTG%E8%B5%9B%E4%B8%AD%E8%AF%AD%E9%9F%B3%E4%BA%94%E6%9D%80%E7%9E%AC%E9%97%B4%23) `227.7K 🔥` `NEW`
1. [女子撞见朋友老公与另一女子亲密](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%92%9E%E8%A7%81%E6%9C%8B%E5%8F%8B%E8%80%81%E5%85%AC%E4%B8%8E%E5%8F%A6%E4%B8%80%E5%A5%B3%E5%AD%90%E4%BA%B2%E5%AF%86%23) `227.6K 🔥` `NEW`
1. [年轻人称高压锅为核武器](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%A7%B0%E9%AB%98%E5%8E%8B%E9%94%85%E4%B8%BA%E6%A0%B8%E6%AD%A6%E5%99%A8%23) `227.6K 🔥` `NEW`
1. [松岛辉空不再兼项混双专攻男单](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E4%B8%8D%E5%86%8D%E5%85%BC%E9%A1%B9%E6%B7%B7%E5%8F%8C%E4%B8%93%E6%94%BB%E7%94%B7%E5%8D%95%23) `227.6K 🔥` `NEW`
1. [曝佛得角门将遭智利科洛科洛弃用](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E9%81%AD%E6%99%BA%E5%88%A9%E7%A7%91%E6%B4%9B%E7%A7%91%E6%B4%9B%E5%BC%83%E7%94%A8%23) `227.5K 🔥` `NEW`
1. [双十一进入AI外包时代](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E5%8D%81%E4%B8%80%E8%BF%9B%E5%85%A5AI%E5%A4%96%E5%8C%85%E6%97%B6%E4%BB%A3%23) `227.4K 🔥` `NEW`
1. [一诺状态](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E7%8A%B6%E6%80%81%23) `227.4K 🔥` `NEW`
1. [小雪五杀](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%9B%AA%E4%BA%94%E6%9D%80%23) `227.3K 🔥` `NEW`
1. [影视飓风Tim父亲任董事长](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8ETim%E7%88%B6%E4%BA%B2%E4%BB%BB%E8%91%A3%E4%BA%8B%E9%95%BF%23) `227.3K 🔥` `NEW`
1. [WE进决赛了](https://s.weibo.com/weibo?q=%23WE%E8%BF%9B%E5%86%B3%E8%B5%9B%E4%BA%86%23) `227.2K 🔥` `NEW`

Updated at 2026-10-16 00:50:03

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
