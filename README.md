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

1. [国乒女团金牌](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%E9%87%91%E7%89%8C%23) `1.1M 🔥` `NEW`
1. [跨越太平洋的青春之桥](https://s.weibo.com/weibo?q=%23%E8%B7%A8%E8%B6%8A%E5%A4%AA%E5%B9%B3%E6%B4%8B%E7%9A%84%E9%9D%92%E6%98%A5%E4%B9%8B%E6%A1%A5%23) `976.5K 🔥` `NEW`
1. [潘展乐责任全在我](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%B1%95%E4%B9%90%E8%B4%A3%E4%BB%BB%E5%85%A8%E5%9C%A8%E6%88%91%23) `929.6K 🔥` `NEW`
1. [四界集体回应余承东](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E7%95%8C%E9%9B%86%E4%BD%93%E5%9B%9E%E5%BA%94%E4%BD%99%E6%89%BF%E4%B8%9C%23) `584.9K 🔥` `NEW`
1. [国羽男团银牌](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E7%BE%BD%E7%94%B7%E5%9B%A2%E9%93%B6%E7%89%8C%23) `556.6K 🔥` `NEW`
1. [谨防双节礼品卡诈骗套路](https://s.weibo.com/weibo?q=%23%E8%B0%A8%E9%98%B2%E5%8F%8C%E8%8A%82%E7%A4%BC%E5%93%81%E5%8D%A1%E8%AF%88%E9%AA%97%E5%A5%97%E8%B7%AF%23) `499.1K 🔥` `NEW`
1. [郑钦文0比2鲍里妮](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%870%E6%AF%942%E9%B2%8D%E9%87%8C%E5%A6%AE%23) `460.8K 🔥` `NEW`
1. [早田希娜招架不住被孙颖莎打笑了](https://s.weibo.com/weibo?q=%23%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E6%8B%9B%E6%9E%B6%E4%B8%8D%E4%BD%8F%E8%A2%AB%E5%AD%99%E9%A2%96%E8%8E%8E%E6%89%93%E7%AC%91%E4%BA%86%23) `438.2K 🔥` `NEW`
1. [美方欢迎仪式](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%96%B9%E6%AC%A2%E8%BF%8E%E4%BB%AA%E5%BC%8F%23) `406.9K 🔥` `NEW`
1. [郑钦文 观众干扰比赛](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%20%E8%A7%82%E4%BC%97%E5%B9%B2%E6%89%B0%E6%AF%94%E8%B5%9B%23) `385.5K 🔥` `NEW`
1. [张本智和放话日本乒乓已超中国](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E6%94%BE%E8%AF%9D%E6%97%A5%E6%9C%AC%E4%B9%92%E4%B9%93%E5%B7%B2%E8%B6%85%E4%B8%AD%E5%9B%BD%23) `385.3K 🔥` `NEW`
1. [王曼昱 扛下压力](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%20%E6%89%9B%E4%B8%8B%E5%8E%8B%E5%8A%9B%23) `384.9K 🔥` `NEW`
1. [特朗普遗憾欢迎宴会座位不够多](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E9%81%97%E6%86%BE%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%E5%BA%A7%E4%BD%8D%E4%B8%8D%E5%A4%9F%E5%A4%9A%23) `349.7K 🔥` `NEW`
1. [花少9熟人局](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%919%E7%86%9F%E4%BA%BA%E5%B1%80%23) `339.6K 🔥` `NEW`
1. [早春晴朗到底赚到了多少](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%88%B0%E5%BA%95%E8%B5%9A%E5%88%B0%E4%BA%86%E5%A4%9A%E5%B0%91%23) `339.4K 🔥` `NEW`
1. [女强人患乳腺癌后要求伤口立刻长好](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%BC%BA%E4%BA%BA%E6%82%A3%E4%B9%B3%E8%85%BA%E7%99%8C%E5%90%8E%E8%A6%81%E6%B1%82%E4%BC%A4%E5%8F%A3%E7%AB%8B%E5%88%BB%E9%95%BF%E5%A5%BD%23) `289.8K 🔥` `NEW`
1. [特朗普在白宫举行欢迎仪式](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9C%A8%E7%99%BD%E5%AE%AB%E4%B8%BE%E8%A1%8C%E6%AC%A2%E8%BF%8E%E4%BB%AA%E5%BC%8F%23) `278.7K 🔥` `NEW`
1. [孙颖莎回应国乒女团金牌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%9E%E5%BA%94%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%E9%87%91%E7%89%8C%23) `278.7K 🔥` `NEW`
1. [国足3比0马尔代夫](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B33%E6%AF%940%E9%A9%AC%E5%B0%94%E4%BB%A3%E5%A4%AB%23) `278.1K 🔥` `NEW`
1. [婆婆退休金一到账就转给儿媳妇](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E9%80%80%E4%BC%91%E9%87%91%E4%B8%80%E5%88%B0%E8%B4%A6%E5%B0%B1%E8%BD%AC%E7%BB%99%E5%84%BF%E5%AA%B3%E5%A6%87%23) `277.8K 🔥` `NEW`
1. [国乒 樊振东](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%20%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `277.6K 🔥` `NEW`
1. [张纯烨谢娜后台唱嗨了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BA%AF%E7%83%A8%E8%B0%A2%E5%A8%9C%E5%90%8E%E5%8F%B0%E5%94%B1%E5%97%A8%E4%BA%86%23) `277.2K 🔥` `NEW`
1. [日本官员在刘国梁面前疯狂庆祝](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%AE%98%E5%91%98%E5%9C%A8%E5%88%98%E5%9B%BD%E6%A2%81%E9%9D%A2%E5%89%8D%E7%96%AF%E7%8B%82%E5%BA%86%E7%A5%9D%23) `276.8K 🔥` `NEW`
1. [邓亚萍谈国乒男团输日本](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E8%B0%88%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E8%BE%93%E6%97%A5%E6%9C%AC%23) `276.3K 🔥` `NEW`
1. [王楚钦回应不敌张本智和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8C%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `276.3K 🔥` `NEW`
1. [白鹿吃面都不敢看镜头了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%90%83%E9%9D%A2%E9%83%BD%E4%B8%8D%E6%95%A2%E7%9C%8B%E9%95%9C%E5%A4%B4%E4%BA%86%23) `275.7K 🔥` `NEW`
1. [刘国梁 日本队](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%A2%81%20%E6%97%A5%E6%9C%AC%E9%98%9F%23) `275.5K 🔥` `NEW`
1. [Angelababy米兰时装周状态](https://s.weibo.com/weibo?q=%23Angelababy%E7%B1%B3%E5%85%B0%E6%97%B6%E8%A3%85%E5%91%A8%E7%8A%B6%E6%80%81%23) `275.2K 🔥` `NEW`
1. [刘国梁 国乒](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%A2%81%20%E5%9B%BD%E4%B9%92%23) `274.7K 🔥` `NEW`
1. [汪苏泷怎么走到哪都被撞头啊](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%80%8E%E4%B9%88%E8%B5%B0%E5%88%B0%E5%93%AA%E9%83%BD%E8%A2%AB%E6%92%9E%E5%A4%B4%E5%95%8A%23) `274.4K 🔥` `NEW`
1. [国乒男团银牌](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E9%93%B6%E7%89%8C%23) `273.6K 🔥` `NEW`
1. [曝南烟斋笔录男二号AI换脸](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%97%E7%83%9F%E6%96%8B%E7%AC%94%E5%BD%95%E7%94%B7%E4%BA%8C%E5%8F%B7AI%E6%8D%A2%E8%84%B8%23) `273.5K 🔥` `NEW`
1. [樊振东中国之壁](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%AD%E5%9B%BD%E4%B9%8B%E5%A3%81%23) `272.8K 🔥` `NEW`
1. [花少9邀请了一个9095的顶流花](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%919%E9%82%80%E8%AF%B7%E4%BA%86%E4%B8%80%E4%B8%AA9095%E7%9A%84%E9%A1%B6%E6%B5%81%E8%8A%B1%23) `272.8K 🔥` `NEW`
1. [国乒女团vs日本](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2vs%E6%97%A5%E6%9C%AC%23) `272.2K 🔥` `NEW`
1. [游本昌点名要吃国际饭店蝴蝶酥](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E6%9C%AC%E6%98%8C%E7%82%B9%E5%90%8D%E8%A6%81%E5%90%83%E5%9B%BD%E9%99%85%E9%A5%AD%E5%BA%97%E8%9D%B4%E8%9D%B6%E9%85%A5%23) `271.8K 🔥` `NEW`
1. [张本智和回应日本男团金牌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E5%9B%9E%E5%BA%94%E6%97%A5%E6%9C%AC%E7%94%B7%E5%9B%A2%E9%87%91%E7%89%8C%23) `271.5K 🔥` `NEW`
1. [王楚钦0比3张本智和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A60%E6%AF%943%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `270.7K 🔥` `NEW`
1. [女性30到45岁最好看](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%80%A730%E5%88%B045%E5%B2%81%E6%9C%80%E5%A5%BD%E7%9C%8B%23) `258.0K 🔥` `NEW`
1. [张本智和说我等了10年](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E6%88%91%E7%AD%89%E4%BA%8610%E5%B9%B4%23) `255.2K 🔥` `NEW`
1. [成毅白发](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%99%BD%E5%8F%91%23) `242.3K 🔥` `NEW`
1. [王楚钦回应国乒男团银牌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%9E%E5%BA%94%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E9%93%B6%E7%89%8C%23) `241.5K 🔥` `NEW`
1. [毛不易I人误入E人世界](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%8D%E6%98%93I%E4%BA%BA%E8%AF%AF%E5%85%A5E%E4%BA%BA%E4%B8%96%E7%95%8C%23) `238.6K 🔥` `NEW`
1. [张本智和说与王楚钦比赛当单打决赛](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E4%B8%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%AF%94%E8%B5%9B%E5%BD%93%E5%8D%95%E6%89%93%E5%86%B3%E8%B5%9B%23) `238.5K 🔥` `NEW`
1. [港媒取的标题也太好笑了](https://s.weibo.com/weibo?q=%23%E6%B8%AF%E5%AA%92%E5%8F%96%E7%9A%84%E6%A0%87%E9%A2%98%E4%B9%9F%E5%A4%AA%E5%A5%BD%E7%AC%91%E4%BA%86%23) `238.0K 🔥` `NEW`
1. [张本智和说以前国乒场下还3位高手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E4%BB%A5%E5%89%8D%E5%9B%BD%E4%B9%92%E5%9C%BA%E4%B8%8B%E8%BF%983%E4%BD%8D%E9%AB%98%E6%89%8B%23) `237.4K 🔥` `NEW`
1. [胡杏儿为一家五口选奕境X9](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%9D%8F%E5%84%BF%E4%B8%BA%E4%B8%80%E5%AE%B6%E4%BA%94%E5%8F%A3%E9%80%89%E5%A5%95%E5%A2%83X9%23) `221.8K 🔥` `NEW`
1. [陈玘谈王楚钦负张本智和](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%8E%98%E8%B0%88%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%B4%9F%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `215.7K 🔥` `NEW`
1. [中美元首华盛顿会晤](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E5%8D%8E%E7%9B%9B%E9%A1%BF%E4%BC%9A%E6%99%A4%23) `1.2M 🔥`
1. [游本昌临终遗言](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E6%9C%AC%E6%98%8C%E4%B8%B4%E7%BB%88%E9%81%97%E8%A8%80%23) `274.0K 🔥`
1. [井柏然刘雯秀场同框照](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%98%E9%9B%AF%E7%A7%80%E5%9C%BA%E5%90%8C%E6%A1%86%E7%85%A7%23) `271.4K 🔥`

Updated at 2026-09-24 23:16:24

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
