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

1. [丰收画卷里的中国味道](https://s.weibo.com/weibo?q=%23%E4%B8%B0%E6%94%B6%E7%94%BB%E5%8D%B7%E9%87%8C%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%91%B3%E9%81%93%23) `237.4K 🔥` `NEW`
1. [美方欢迎仪式](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%96%B9%E6%AC%A2%E8%BF%8E%E4%BB%AA%E5%BC%8F%23) `84.4K 🔥` `NEW`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `83.7K 🔥` `NEW`
1. [王曼昱 扛下压力](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%20%E6%89%9B%E4%B8%8B%E5%8E%8B%E5%8A%9B%23) `81.6K 🔥` `NEW`
1. [邓亚萍说王楚钦很不容易](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E8%AF%B4%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%BE%88%E4%B8%8D%E5%AE%B9%E6%98%93%23) `75.3K 🔥` `NEW`
1. [特朗普说这是一次伟大的会晤](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E8%BF%99%E6%98%AF%E4%B8%80%E6%AC%A1%E4%BC%9F%E5%A4%A7%E7%9A%84%E4%BC%9A%E6%99%A4%23) `73.4K 🔥` `NEW`
1. [女性30到45岁最好看](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%80%A730%E5%88%B045%E5%B2%81%E6%9C%80%E5%A5%BD%E7%9C%8B%23) `61.9K 🔥` `NEW`
1. [养了17年发现儿子非亲生后自缢](https://s.weibo.com/weibo?q=%23%E5%85%BB%E4%BA%8617%E5%B9%B4%E5%8F%91%E7%8E%B0%E5%84%BF%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%90%8E%E8%87%AA%E7%BC%A2%23) `55.0K 🔥` `NEW`
1. [中美元首华盛顿会晤](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E5%8D%8E%E7%9B%9B%E9%A1%BF%E4%BC%9A%E6%99%A4%23) `397.2K 🔥` `+553%`
1. [邀请10万名美国青少年来华交流学习](https://s.weibo.com/weibo?q=%23%E9%82%80%E8%AF%B710%E4%B8%87%E5%90%8D%E7%BE%8E%E5%9B%BD%E9%9D%92%E5%B0%91%E5%B9%B4%E6%9D%A5%E5%8D%8E%E4%BA%A4%E6%B5%81%E5%AD%A6%E4%B9%A0%23) `295.8K 🔥` `+386%`
1. [中秋送名酒上美团闪购](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E9%80%81%E5%90%8D%E9%85%92%E4%B8%8A%E7%BE%8E%E5%9B%A2%E9%97%AA%E8%B4%AD%23) `165.2K 🔥` `+172%`
1. [中秋节](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E8%8A%82%23) `108.5K 🔥` `+79%`
1. [国乒女团金牌](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%E9%87%91%E7%89%8C%23) `89.3K 🔥` `+47%`
1. [中美不必讳言竞争](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E4%B8%8D%E5%BF%85%E8%AE%B3%E8%A8%80%E7%AB%9E%E4%BA%89%23) `88.9K 🔥` `+46%`
1. [亚运会游泳](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%B8%B8%E6%B3%B3%23) `88.4K 🔥` `+46%`
1. [早田希娜招架不住被孙颖莎打笑了](https://s.weibo.com/weibo?q=%23%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E6%8B%9B%E6%9E%B6%E4%B8%8D%E4%BD%8F%E8%A2%AB%E5%AD%99%E9%A2%96%E8%8E%8E%E6%89%93%E7%AC%91%E4%BA%86%23) `87.9K 🔥` `+48%`
1. [孙颖莎回应国乒女团金牌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%9E%E5%BA%94%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%E9%87%91%E7%89%8C%23) `87.3K 🔥` `+44%`
1. [国羽男团银牌](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E7%BE%BD%E7%94%B7%E5%9B%A2%E9%93%B6%E7%89%8C%23) `86.7K 🔥` `+44%`
1. [张本智和说以前国乒场下还3位高手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E4%BB%A5%E5%89%8D%E5%9B%BD%E4%B9%92%E5%9C%BA%E4%B8%8B%E8%BF%983%E4%BD%8D%E9%AB%98%E6%89%8B%23) `86.4K 🔥` `+44%`
1. [港媒取的标题也太好笑了](https://s.weibo.com/weibo?q=%23%E6%B8%AF%E5%AA%92%E5%8F%96%E7%9A%84%E6%A0%87%E9%A2%98%E4%B9%9F%E5%A4%AA%E5%A5%BD%E7%AC%91%E4%BA%86%23) `85.8K 🔥` `+42%`
1. [喝完泰奶差点要见太奶了](https://s.weibo.com/weibo?q=%23%E5%96%9D%E5%AE%8C%E6%B3%B0%E5%A5%B6%E5%B7%AE%E7%82%B9%E8%A6%81%E8%A7%81%E5%A4%AA%E5%A5%B6%E4%BA%86%23) `85.0K 🔥` `+40%`
1. [潘展乐责任全在我](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%B1%95%E4%B9%90%E8%B4%A3%E4%BB%BB%E5%85%A8%E5%9C%A8%E6%88%91%23) `84.1K 🔥` `+39%`
1. [郑钦文 观众干扰比赛](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%20%E8%A7%82%E4%BC%97%E5%B9%B2%E6%89%B0%E6%AF%94%E8%B5%9B%23) `83.0K 🔥` `+37%`
1. [比利简金杯深圳总决赛](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E7%AE%80%E9%87%91%E6%9D%AF%E6%B7%B1%E5%9C%B3%E6%80%BB%E5%86%B3%E8%B5%9B%23) `82.3K 🔥` `+36%`
1. [花少9熟人局](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%919%E7%86%9F%E4%BA%BA%E5%B1%80%23) `81.5K 🔥` `+35%`
1. [王皓回应丢冠](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E5%9B%9E%E5%BA%94%E4%B8%A2%E5%86%A0%23) `80.9K 🔥` `+35%`
1. [饭桌上吃得越少别人越拿不准](https://s.weibo.com/weibo?q=%23%E9%A5%AD%E6%A1%8C%E4%B8%8A%E5%90%83%E5%BE%97%E8%B6%8A%E5%B0%91%E5%88%AB%E4%BA%BA%E8%B6%8A%E6%8B%BF%E4%B8%8D%E5%87%86%23) `80.2K 🔥` `+34%`
1. [国乒 樊振东](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%20%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `79.5K 🔥` `+33%`
1. [邓亚萍谈国乒男团输日本](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E8%B0%88%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E8%BE%93%E6%97%A5%E6%9C%AC%23) `78.9K 🔥` `+32%`
1. [刘国梁 日本队](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%A2%81%20%E6%97%A5%E6%9C%AC%E9%98%9F%23) `78.5K 🔥` `+31%`
1. [花少北复活了](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%8C%97%E5%A4%8D%E6%B4%BB%E4%BA%86%23) `77.6K 🔥` `+29%`
1. [王楚钦评价争议](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%84%E4%BB%B7%E4%BA%89%E8%AE%AE%23) `77.5K 🔥` `+30%`
1. [井柏然刘雯 大大方方](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%98%E9%9B%AF%20%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%23) `76.8K 🔥` `+28%`
1. [国乒男团颁奖后纷纷摘下银牌](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E9%A2%81%E5%A5%96%E5%90%8E%E7%BA%B7%E7%BA%B7%E6%91%98%E4%B8%8B%E9%93%B6%E7%89%8C%23) `76.4K 🔥` `+27%`
1. [中秋福利取消让仇人释怀](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E7%A6%8F%E5%88%A9%E5%8F%96%E6%B6%88%E8%AE%A9%E4%BB%87%E4%BA%BA%E9%87%8A%E6%80%80%23) `75.9K 🔥` `+27%`
1. [王楚钦回应不敌张本智和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8C%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `71.1K 🔥`
1. [井柏然家里剩下的只有刘雯的了](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AE%B6%E9%87%8C%E5%89%A9%E4%B8%8B%E7%9A%84%E5%8F%AA%E6%9C%89%E5%88%98%E9%9B%AF%E7%9A%84%E4%BA%86%23) `68.2K 🔥`
1. [王楚钦0比3张本智和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A60%E6%AF%943%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `67.8K 🔥`
1. [中美元首小范围交流](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E5%B0%8F%E8%8C%83%E5%9B%B4%E4%BA%A4%E6%B5%81%23) `66.6K 🔥`
1. [男性真正的强壮是不恐惧亲密](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%80%A7%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%BC%BA%E5%A3%AE%E6%98%AF%E4%B8%8D%E6%81%90%E6%83%A7%E4%BA%B2%E5%AF%86%23) `61.9K 🔥`
1. [韩网民称日本故意不用正式照片](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E6%B0%91%E7%A7%B0%E6%97%A5%E6%9C%AC%E6%95%85%E6%84%8F%E4%B8%8D%E7%94%A8%E6%AD%A3%E5%BC%8F%E7%85%A7%E7%89%87%23) `60.7K 🔥`
1. [国乒男团 怀念樊振东](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%20%E6%80%80%E5%BF%B5%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `60.6K 🔥`
1. [李现新剧首播反响](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E6%96%B0%E5%89%A7%E9%A6%96%E6%92%AD%E5%8F%8D%E5%93%8D%23) `58.8K 🔥`
1. [Angelababy米兰时装周状态](https://s.weibo.com/weibo?q=%23Angelababy%E7%B1%B3%E5%85%B0%E6%97%B6%E8%A3%85%E5%91%A8%E7%8A%B6%E6%80%81%23) `57.6K 🔥`
1. [樊振东中国之壁](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%AD%E5%9B%BD%E4%B9%8B%E5%A3%81%23) `57.0K 🔥`
1. [张本智和放话日本乒乓已超中国](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E6%94%BE%E8%AF%9D%E6%97%A5%E6%9C%AC%E4%B9%92%E4%B9%93%E5%B7%B2%E8%B6%85%E4%B8%AD%E5%9B%BD%23) `54.9K 🔥`
1. [白鹿吃面都不敢看镜头了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%90%83%E9%9D%A2%E9%83%BD%E4%B8%8D%E6%95%A2%E7%9C%8B%E9%95%9C%E5%A4%B4%E4%BA%86%23) `54.6K 🔥`
1. [日本官员在刘国梁面前疯狂庆祝](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%AE%98%E5%91%98%E5%9C%A8%E5%88%98%E5%9B%BD%E6%A2%81%E9%9D%A2%E5%89%8D%E7%96%AF%E7%8B%82%E5%BA%86%E7%A5%9D%23) `54.6K 🔥`
1. [王楚钦回应国乒男团银牌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%9E%E5%BA%94%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E9%93%B6%E7%89%8C%23) `54.6K 🔥`
1. [王嘉尔回应粉丝追星体验不好](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%9B%9E%E5%BA%94%E7%B2%89%E4%B8%9D%E8%BF%BD%E6%98%9F%E4%BD%93%E9%AA%8C%E4%B8%8D%E5%A5%BD%23) `54.5K 🔥`

Updated at 2026-09-25 06:31:42

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
