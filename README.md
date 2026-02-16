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

1. [过年好 (Happy New Year)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E5%A5%BD%23) `10.2M 🔥` `NEW`
1. [谁给迪丽热巴化的妆](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8C%96%E7%9A%84%E5%A6%86%23) `7.0M 🔥` `NEW`
1. [马丽单飞了 沈腾怎么办](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%B8%BD%E5%8D%95%E9%A3%9E%E4%BA%86%20%E6%B2%88%E8%85%BE%E6%80%8E%E4%B9%88%E5%8A%9E%23) `3.5M 🔥` `NEW`
1. [春晚分会场上大分](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%88%86%E4%BC%9A%E5%9C%BA%E4%B8%8A%E5%A4%A7%E5%88%86%23) `2.8M 🔥` `NEW`
1. [春晚](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%23) `2.7M 🔥` `NEW`
1. [刘浩存实在美丽](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E5%AE%9E%E5%9C%A8%E7%BE%8E%E4%B8%BD%23) `2.4M 🔥` `NEW`
1. [范丞丞王安宇同台](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%8E%8B%E5%AE%89%E5%AE%87%E5%90%8C%E5%8F%B0%23) `1.6M 🔥` `NEW`
1. [战马邀你马年寻马](https://s.weibo.com/weibo?q=%23%E6%88%98%E9%A9%AC%E9%82%80%E4%BD%A0%E9%A9%AC%E5%B9%B4%E5%AF%BB%E9%A9%AC%23) `1.5M 🔥` `NEW`
1. [张万森 下机器人了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%87%E6%A3%AE%20%E4%B8%8B%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BA%86%23) `1.5M 🔥` `NEW`
1. [王菲接了李谷一的班](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%8E%A5%E4%BA%86%E6%9D%8E%E8%B0%B7%E4%B8%80%E7%9A%84%E7%8F%AD%23) `1.3M 🔥` `NEW`
1. [机器人摔倒 (Robot fell down)](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%91%94%E5%80%92%23) `1.2M 🔥` `NEW`
1. [豆包红包](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E7%BA%A2%E5%8C%85%23) `1.2M 🔥` `NEW`
1. [宇树科技股票](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E8%82%A1%E7%A5%A8%23) `1.2M 🔥` `NEW`
1. [新年文案](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%B9%B4%E6%96%87%E6%A1%88%23) `1.2M 🔥` `NEW`
1. [刘少昂赛后道歉](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E8%B5%9B%E5%90%8E%E9%81%93%E6%AD%89%23) `1.2M 🔥` `NEW`
1. [新年祝福语](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%B9%B4%E7%A5%9D%E7%A6%8F%E8%AF%AD%23) `1.1M 🔥` `NEW`
1. [合肥分会场排面最尊](https://s.weibo.com/weibo?q=%23%E5%90%88%E8%82%A5%E5%88%86%E4%BC%9A%E5%9C%BA%E6%8E%92%E9%9D%A2%E6%9C%80%E5%B0%8A%23) `1.1M 🔥` `NEW`
1. [刘浩存 北舞严选](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%20%E5%8C%97%E8%88%9E%E4%B8%A5%E9%80%89%23) `1.1M 🔥` `NEW`
1. [爷爷奶奶也爱用豆包](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E5%A5%B6%E5%A5%B6%E4%B9%9F%E7%88%B1%E7%94%A8%E8%B1%86%E5%8C%85%23) `1.1M 🔥` `NEW`
1. [张凌赫发了好多红包](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%91%E4%BA%86%E5%A5%BD%E5%A4%9A%E7%BA%A2%E5%8C%85%23) `1.1M 🔥` `NEW`
1. [花海晚上直播发红包 (Huahai live broadcast at night to give out red envelopes)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%B5%B7%E6%99%9A%E4%B8%8A%E7%9B%B4%E6%92%AD%E5%8F%91%E7%BA%A2%E5%8C%85%23) `1.1M 🔥` `NEW`
1. [春晚收视率](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E6%94%B6%E8%A7%86%E7%8E%87%23) `1.1M 🔥` `NEW`
1. [王菲水滴耳环](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%B0%B4%E6%BB%B4%E8%80%B3%E7%8E%AF%23) `959.6K 🔥` `NEW`
1. [撒贝宁领嗑沈马](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%E9%A2%86%E5%97%91%E6%B2%88%E9%A9%AC%23) `836.7K 🔥` `NEW`
1. [烟花](https://s.weibo.com/weibo?q=%23%E7%83%9F%E8%8A%B1%23) `785.3K 🔥` `NEW`
1. [支付宝口令红包](https://s.weibo.com/weibo?q=%23%E6%94%AF%E4%BB%98%E5%AE%9D%E5%8F%A3%E4%BB%A4%E7%BA%A2%E5%8C%85%23) `784.8K 🔥` `NEW`
1. [邓超妈妈](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%A6%88%E5%A6%88%23) `784.2K 🔥` `NEW`
1. [陈哲远 你的运气额度省下来了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%20%E4%BD%A0%E7%9A%84%E8%BF%90%E6%B0%94%E9%A2%9D%E5%BA%A6%E7%9C%81%E4%B8%8B%E6%9D%A5%E4%BA%86%23) `780.0K 🔥` `NEW`
1. [王一博郭富城炸场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%83%AD%E5%AF%8C%E5%9F%8E%E7%82%B8%E5%9C%BA%23) `712.6K 🔥` `NEW`
1. [大年初一不洗头不煮饭](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%80%E4%B8%8D%E6%B4%97%E5%A4%B4%E4%B8%8D%E7%85%AE%E9%A5%AD%23) `682.4K 🔥` `NEW`
1. [谷爱凌大年初一凌晨争金 (Gu Ailing competes for gold in the early morning of New Year's Day)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%80%E5%87%8C%E6%99%A8%E4%BA%89%E9%87%91%23) `669.6K 🔥` `NEW`
1. [快乐小马对我眼睛很友好](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E4%B9%90%E5%B0%8F%E9%A9%AC%E5%AF%B9%E6%88%91%E7%9C%BC%E7%9D%9B%E5%BE%88%E5%8F%8B%E5%A5%BD%23) `660.9K 🔥` `NEW`
1. [春晚导演 米莱狄](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%AF%BC%E6%BC%94%20%E7%B1%B3%E8%8E%B1%E7%8B%84%23) `643.0K 🔥` `NEW`
1. [魔术 比小品好笑](https://s.weibo.com/weibo?q=%23%E9%AD%94%E6%9C%AF%20%E6%AF%94%E5%B0%8F%E5%93%81%E5%A5%BD%E7%AC%91%23) `638.8K 🔥` `NEW`
1. [沈腾马丽 嗑晕了](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E9%A9%AC%E4%B8%BD%20%E5%97%91%E6%99%95%E4%BA%86%23) `636.5K 🔥` `NEW`
1. [年夜饭](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%A4%9C%E9%A5%AD%23) `527.6K 🔥` `NEW`
1. [秦岚李沁王楚然美成啥了](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E6%9D%8E%E6%B2%81%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%BE%8E%E6%88%90%E5%95%A5%E4%BA%86%23) `525.6K 🔥` `NEW`
1. [易烊千玺压得住场](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%8E%8B%E5%BE%97%E4%BD%8F%E5%9C%BA%23) `417.4K 🔥` `NEW`
1. [李昀锐内娱舒肤佳](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%86%85%E5%A8%B1%E8%88%92%E8%82%A4%E4%BD%B3%23) `388.0K 🔥` `NEW`
1. [短道速滑](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%23) `383.4K 🔥` `NEW`
1. [春晚 台湾回家 (Spring Festival Gala Taiwan Homecoming)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%20%E5%8F%B0%E6%B9%BE%E5%9B%9E%E5%AE%B6%23) `378.9K 🔥` `NEW`
1. [白鹿 陈哲远951](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E9%99%88%E5%93%B2%E8%BF%9C951%23) `364.3K 🔥` `NEW`
1. [魏晨站山顶](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E7%AB%99%E5%B1%B1%E9%A1%B6%23) `350.2K 🔥` `NEW`
1. [李健开净化了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%E5%BC%80%E5%87%80%E5%8C%96%E4%BA%86%23) `343.3K 🔥` `NEW`
1. [合肥分会场](https://s.weibo.com/weibo?q=%23%E5%90%88%E8%82%A5%E5%88%86%E4%BC%9A%E5%9C%BA%23) `331.5K 🔥` `NEW`
1. [孙千红裙芭蕾](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E7%BA%A2%E8%A3%99%E8%8A%AD%E8%95%BE%23) `248.1K 🔥` `NEW`
1. [李一桐红包](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E7%BA%A2%E5%8C%85%23) `247.7K 🔥` `NEW`
1. [春晚小品这个帅哥是谁](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%B0%8F%E5%93%81%E8%BF%99%E4%B8%AA%E5%B8%85%E5%93%A5%E6%98%AF%E8%B0%81%23) `234.5K 🔥` `NEW`
1. [张杰魏晨相视一笑](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E9%AD%8F%E6%99%A8%E7%9B%B8%E8%A7%86%E4%B8%80%E7%AC%91%23) `231.6K 🔥` `NEW`
1. [压岁钱](https://s.weibo.com/weibo?q=%23%E5%8E%8B%E5%B2%81%E9%92%B1%23) `225.3K 🔥` `NEW`

Updated at 2026-02-17 00:36:49

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
