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

1. [红包分组 (Red envelope grouping)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `2.6M 🔥` `NEW`
1. [春晚节目单](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E8%8A%82%E7%9B%AE%E5%8D%95%23) `2.4M 🔥` `NEW`
1. [献给汽修工人李尚国](https://s.weibo.com/weibo?q=%23%E7%8C%AE%E7%BB%99%E6%B1%BD%E4%BF%AE%E5%B7%A5%E4%BA%BA%E6%9D%8E%E5%B0%9A%E5%9B%BD%23) `2.2M 🔥` `NEW`
1. [今天又要集体洗头了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E5%8F%88%E8%A6%81%E9%9B%86%E4%BD%93%E6%B4%97%E5%A4%B4%E4%BA%86%23) `551.6K 🔥` `NEW`
1. [金色朋友圈怎么弄](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%89%B2%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%80%8E%E4%B9%88%E5%BC%84%23) `245.8K 🔥` `NEW`
1. [官方辟谣趵突泉景区免门票](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E8%B6%B5%E7%AA%81%E6%B3%89%E6%99%AF%E5%8C%BA%E5%85%8D%E9%97%A8%E7%A5%A8%23) `214.3K 🔥` `NEW`
1. [狗 你放心睡我给你拦着](https://s.weibo.com/weibo?q=%23%E7%8B%97%20%E4%BD%A0%E6%94%BE%E5%BF%83%E7%9D%A1%E6%88%91%E7%BB%99%E4%BD%A0%E6%8B%A6%E7%9D%80%23) `204.6K 🔥` `NEW`
1. [南方局地降温10摄氏度](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E5%B1%80%E5%9C%B0%E9%99%8D%E6%B8%A910%E6%91%84%E6%B0%8F%E5%BA%A6%23) `183.9K 🔥` `NEW`
1. [明星红包](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%23) `183.2K 🔥` `NEW`
1. [春晚大赏](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%A4%A7%E8%B5%8F%23) `183.2K 🔥` `NEW`
1. [今年除夕为啥不是年三十 (Why is this New Year’s Eve not New Year’s Eve?)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E9%99%A4%E5%A4%95%E4%B8%BA%E5%95%A5%E4%B8%8D%E6%98%AF%E5%B9%B4%E4%B8%89%E5%8D%81%23) `179.4K 🔥` `NEW`
1. [等白鹿红包](https://s.weibo.com/weibo?q=%23%E7%AD%89%E7%99%BD%E9%B9%BF%E7%BA%A2%E5%8C%85%23) `154.9K 🔥` `NEW`
1. [祝绪丹口令红包](https://s.weibo.com/weibo?q=%23%E7%A5%9D%E7%BB%AA%E4%B8%B9%E5%8F%A3%E4%BB%A4%E7%BA%A2%E5%8C%85%23) `142.5K 🔥` `NEW`
1. [韩聪哽咽回应晋级自由滑](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%81%AA%E5%93%BD%E5%92%BD%E5%9B%9E%E5%BA%94%E6%99%8B%E7%BA%A7%E8%87%AA%E7%94%B1%E6%BB%91%23) `121.3K 🔥` `NEW`
1. [陈星旭的红包](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%E7%9A%84%E7%BA%A2%E5%8C%85%23) `120.1K 🔥` `NEW`
1. [楼晚](https://s.weibo.com/weibo?q=%23%E6%A5%BC%E6%99%9A%23) `119.1K 🔥` `NEW`
1. [文班亚马拯救全明星](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E6%8B%AF%E6%95%91%E5%85%A8%E6%98%8E%E6%98%9F%23) `117.7K 🔥` `NEW`
1. [白鹿红包没门槛](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BA%A2%E5%8C%85%E6%B2%A1%E9%97%A8%E6%A7%9B%23) `115.6K 🔥` `NEW`
1. [李亚鹏饮酒后83岁母亲开车接其回家](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BA%9A%E9%B9%8F%E9%A5%AE%E9%85%92%E5%90%8E83%E5%B2%81%E6%AF%8D%E4%BA%B2%E5%BC%80%E8%BD%A6%E6%8E%A5%E5%85%B6%E5%9B%9E%E5%AE%B6%23) `113.3K 🔥` `NEW`
1. [春晚大赏明星红包](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%A4%A7%E8%B5%8F%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%23) `111.6K 🔥` `NEW`
1. [奥巴马称外星人的确存在 (Obama says aliens do exist)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%B7%B4%E9%A9%AC%E7%A7%B0%E5%A4%96%E6%98%9F%E4%BA%BA%E7%9A%84%E7%A1%AE%E5%AD%98%E5%9C%A8%23) `111.0K 🔥` `NEW`
1. [几杯辟谣去世](https://s.weibo.com/weibo?q=%23%E5%87%A0%E6%9D%AF%E8%BE%9F%E8%B0%A3%E5%8E%BB%E4%B8%96%23) `108.5K 🔥` `NEW`
1. [租对象除夕回家一天1500元](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E5%AF%B9%E8%B1%A1%E9%99%A4%E5%A4%95%E5%9B%9E%E5%AE%B6%E4%B8%80%E5%A4%A91500%E5%85%83%23) `107.5K 🔥` `NEW`
1. [杨迪除夕红包](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%BF%AA%E9%99%A4%E5%A4%95%E7%BA%A2%E5%8C%85%23) `104.8K 🔥` `NEW`
1. [21年老店因帅儿子逆袭](https://s.weibo.com/weibo?q=%2321%E5%B9%B4%E8%80%81%E5%BA%97%E5%9B%A0%E5%B8%85%E5%84%BF%E5%AD%90%E9%80%86%E8%A2%AD%23) `104.6K 🔥` `NEW`
1. [古人抽象的过年方式](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E4%BA%BA%E6%8A%BD%E8%B1%A1%E7%9A%84%E8%BF%87%E5%B9%B4%E6%96%B9%E5%BC%8F%23) `94.0K 🔥` `NEW`
1. [父亲去世母亲手术14岁男孩摆摊卖对联](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%8E%BB%E4%B8%96%E6%AF%8D%E4%BA%B2%E6%89%8B%E6%9C%AF14%E5%B2%81%E7%94%B7%E5%AD%A9%E6%91%86%E6%91%8A%E5%8D%96%E5%AF%B9%E8%81%94%23) `76.8K 🔥` `NEW`
1. [米兰冬奥会16日看点](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E4%BC%9A16%E6%97%A5%E7%9C%8B%E7%82%B9%23) `73.0K 🔥` `NEW`
1. [李子柒真诚](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AD%90%E6%9F%92%E7%9C%9F%E8%AF%9A%23) `71.6K 🔥` `NEW`
1. [沪上阿姨鞠婧祎红包封面](https://s.weibo.com/weibo?q=%23%E6%B2%AA%E4%B8%8A%E9%98%BF%E5%A7%A8%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%BA%A2%E5%8C%85%E5%B0%81%E9%9D%A2%23) `71.0K 🔥` `NEW`
1. [今天你洗头了吗 (Have you washed your hair today?)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E4%BD%A0%E6%B4%97%E5%A4%B4%E4%BA%86%E5%90%97%23) `63.6K 🔥` `NEW`
1. [樊振东朝达科撒娇](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%9C%9D%E8%BE%BE%E7%A7%91%E6%92%92%E5%A8%87%23) `62.0K 🔥` `NEW`
1. [李现四登央视春晚](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%9B%9B%E7%99%BB%E5%A4%AE%E8%A7%86%E6%98%A5%E6%99%9A%23) `60.2K 🔥` `NEW`
1. [初二起寒潮基本结束](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%BA%8C%E8%B5%B7%E5%AF%92%E6%BD%AE%E5%9F%BA%E6%9C%AC%E7%BB%93%E6%9D%9F%23) `54.5K 🔥` `NEW`
1. [长大后终于成为了自己讨厌的亲戚](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E5%90%8E%E7%BB%88%E4%BA%8E%E6%88%90%E4%B8%BA%E4%BA%86%E8%87%AA%E5%B7%B1%E8%AE%A8%E5%8E%8C%E7%9A%84%E4%BA%B2%E6%88%9A%23) `52.5K 🔥` `NEW`
1. [古特雷斯呼吁发达国家效法中国](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E7%89%B9%E9%9B%B7%E6%96%AF%E5%91%BC%E5%90%81%E5%8F%91%E8%BE%BE%E5%9B%BD%E5%AE%B6%E6%95%88%E6%B3%95%E4%B8%AD%E5%9B%BD%23) `51.5K 🔥` `NEW`
1. [抢红包手气最佳的科学解释](https://s.weibo.com/weibo?q=%23%E6%8A%A2%E7%BA%A2%E5%8C%85%E6%89%8B%E6%B0%94%E6%9C%80%E4%BD%B3%E7%9A%84%E7%A7%91%E5%AD%A6%E8%A7%A3%E9%87%8A%23) `49.6K 🔥` `NEW`
1. [伦纳德全明星单节31分](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E7%BA%B3%E5%BE%B7%E5%85%A8%E6%98%8E%E6%98%9F%E5%8D%95%E8%8A%8231%E5%88%86%23) `48.4K 🔥` `NEW`
1. [张杰马年贺岁单曲策马](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E9%A9%AC%E5%B9%B4%E8%B4%BA%E5%B2%81%E5%8D%95%E6%9B%B2%E7%AD%96%E9%A9%AC%23) `48.1K 🔥` `NEW`
1. [骏马贺新春电子贺卡 (Horse Happy New Year e-card)](https://s.weibo.com/weibo?q=%23%E9%AA%8F%E9%A9%AC%E8%B4%BA%E6%96%B0%E6%98%A5%E7%94%B5%E5%AD%90%E8%B4%BA%E5%8D%A1%23) `2.2M 🔥` `+254%`
1. [红包 (Red envelope)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `2.1M 🔥` `+97%`
1. [除夕文案](https://s.weibo.com/weibo?q=%23%E9%99%A4%E5%A4%95%E6%96%87%E6%A1%88%23) `200.2K 🔥` `+23%`
1. [辣目洋子这么瘦了 (Yoko Lame is so thin)](https://s.weibo.com/weibo?q=%23%E8%BE%A3%E7%9B%AE%E6%B4%8B%E5%AD%90%E8%BF%99%E4%B9%88%E7%98%A6%E4%BA%86%23) `97.3K 🔥` `+41%`
1. [王菲还未唱已带火你我经历的一刻 (The moment Faye Wong has already made you and I popular even before she sings)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E8%BF%98%E6%9C%AA%E5%94%B1%E5%B7%B2%E5%B8%A6%E7%81%AB%E4%BD%A0%E6%88%91%E7%BB%8F%E5%8E%86%E7%9A%84%E4%B8%80%E5%88%BB%23) `93.9K 🔥`
1. [杜海涛晒与沈梦辰情人节约会照](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E6%B5%B7%E6%B6%9B%E6%99%92%E4%B8%8E%E6%B2%88%E6%A2%A6%E8%BE%B0%E6%83%85%E4%BA%BA%E8%8A%82%E7%BA%A6%E4%BC%9A%E7%85%A7%23) `77.0K 🔥`
1. [5种炎症时间长了可能会变癌症](https://s.weibo.com/weibo?q=%235%E7%A7%8D%E7%82%8E%E7%97%87%E6%97%B6%E9%97%B4%E9%95%BF%E4%BA%86%E5%8F%AF%E8%83%BD%E4%BC%9A%E5%8F%98%E7%99%8C%E7%97%87%23) `64.2K 🔥`
1. [田曦薇首登央视春晚](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%A6%96%E7%99%BB%E5%A4%AE%E8%A7%86%E6%98%A5%E6%99%9A%23) `57.4K 🔥`
1. [除夕 (Lunar New Year's eve)](https://s.weibo.com/weibo?q=%23%E9%99%A4%E5%A4%95%23) `213.3K 🔥` `-73%`
1. [学术界 仅退款 (Academia Refunds Only)](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E6%9C%AF%E7%95%8C%20%E4%BB%85%E9%80%80%E6%AC%BE%23) `95.6K 🔥` `-26%`
1. [男子录下与妻子共舞不速之客加入](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BD%95%E4%B8%8B%E4%B8%8E%E5%A6%BB%E5%AD%90%E5%85%B1%E8%88%9E%E4%B8%8D%E9%80%9F%E4%B9%8B%E5%AE%A2%E5%8A%A0%E5%85%A5%23) `77.1K 🔥` `-65%`
1. [升温后有东北人500斤年货无处安放 (After the temperature rises, a Northeasterner has nowhere to put 500 kilograms of new year’s goods.)](https://s.weibo.com/weibo?q=%23%E5%8D%87%E6%B8%A9%E5%90%8E%E6%9C%89%E4%B8%9C%E5%8C%97%E4%BA%BA500%E6%96%A4%E5%B9%B4%E8%B4%A7%E6%97%A0%E5%A4%84%E5%AE%89%E6%94%BE%23) `52.5K 🔥` `-72%`
1. [黄子弘凡爸爸事件中图兰朵计划是啥](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E7%88%B8%E7%88%B8%E4%BA%8B%E4%BB%B6%E4%B8%AD%E5%9B%BE%E5%85%B0%E6%9C%B5%E8%AE%A1%E5%88%92%E6%98%AF%E5%95%A5%23) `52.4K 🔥` `-24%`

Updated at 2026-02-16 11:15:18

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
