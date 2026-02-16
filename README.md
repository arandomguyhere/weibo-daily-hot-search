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

1. [机器人全面入侵春晚 (Robots fully invade the Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%85%A8%E9%9D%A2%E5%85%A5%E4%BE%B5%E6%98%A5%E6%99%9A%23) `17.1M 🔥` `NEW`
1. [医师辟谣腰不好就是肾不好](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E5%B8%88%E8%BE%9F%E8%B0%A3%E8%85%B0%E4%B8%8D%E5%A5%BD%E5%B0%B1%E6%98%AF%E8%82%BE%E4%B8%8D%E5%A5%BD%23) `7.3M 🔥` `NEW`
1. [王一博郭富城炸场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%83%AD%E5%AF%8C%E5%9F%8E%E7%82%B8%E5%9C%BA%23) `6.3M 🔥` `NEW`
1. [易烊千玺压得住场](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%8E%8B%E5%BE%97%E4%BD%8F%E5%9C%BA%23) `6.1M 🔥` `NEW`
1. [机器人武术 宇树无敌](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%AD%A6%E6%9C%AF%20%E5%AE%87%E6%A0%91%E6%97%A0%E6%95%8C%23) `4.7M 🔥` `NEW`
1. [喵娲娲红包额度](https://s.weibo.com/weibo?q=%23%E5%96%B5%E5%A8%B2%E5%A8%B2%E7%BA%A2%E5%8C%85%E9%A2%9D%E5%BA%A6%23) `4.2M 🔥` `NEW`
1. [秦岚李沁王楚然美成啥了](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E6%9D%8E%E6%B2%81%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%BE%8E%E6%88%90%E5%95%A5%E4%BA%86%23) `4.1M 🔥` `NEW`
1. [压岁钱](https://s.weibo.com/weibo?q=%23%E5%8E%8B%E5%B2%81%E9%92%B1%23) `3.9M 🔥` `NEW`
1. [千问3.5成本仅为谷歌大模型5%](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE3.5%E6%88%90%E6%9C%AC%E4%BB%85%E4%B8%BA%E8%B0%B7%E6%AD%8C%E5%A4%A7%E6%A8%A1%E5%9E%8B5%25%23) `3.7M 🔥` `NEW`
1. [合肥圆子炸进春晚分会场](https://s.weibo.com/weibo?q=%23%E5%90%88%E8%82%A5%E5%9C%86%E5%AD%90%E7%82%B8%E8%BF%9B%E6%98%A5%E6%99%9A%E5%88%86%E4%BC%9A%E5%9C%BA%23) `3.5M 🔥` `NEW`
1. [蔡明仿生机器人30年返场 (Cai Ming’s bionic robot returns after 30 years)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%98%8E%E4%BB%BF%E7%94%9F%E6%9C%BA%E5%99%A8%E4%BA%BA30%E5%B9%B4%E8%BF%94%E5%9C%BA%23) `3.2M 🔥` `NEW`
1. [烟花](https://s.weibo.com/weibo?q=%23%E7%83%9F%E8%8A%B1%23) `3.2M 🔥` `NEW`
1. [撒贝宁依旧蜡笔小新眉毛](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%E4%BE%9D%E6%97%A7%E8%9C%A1%E7%AC%94%E5%B0%8F%E6%96%B0%E7%9C%89%E6%AF%9B%23) `3.0M 🔥` `NEW`
1. [机器人cos撒贝宁](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BAcos%E6%92%92%E8%B4%9D%E5%AE%81%23) `1.8M 🔥` `NEW`
1. [春晚 机器人统治世界](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%20%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%BB%9F%E6%B2%BB%E4%B8%96%E7%95%8C%23) `1.7M 🔥` `NEW`
1. [义乌震撼出场](https://s.weibo.com/weibo?q=%23%E4%B9%89%E4%B9%8C%E9%9C%87%E6%92%BC%E5%87%BA%E5%9C%BA%23) `1.7M 🔥` `NEW`
1. [大年初一不洗头不煮饭](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%80%E4%B8%8D%E6%B4%97%E5%A4%B4%E4%B8%8D%E7%85%AE%E9%A5%AD%23) `1.6M 🔥` `NEW`
1. [蔡明推出了蔡明](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%98%8E%E6%8E%A8%E5%87%BA%E4%BA%86%E8%94%A1%E6%98%8E%23) `1.6M 🔥` `NEW`
1. [王天放出息了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E6%94%BE%E5%87%BA%E6%81%AF%E4%BA%86%23) `1.5M 🔥` `NEW`
1. [无畏当上叔叔了](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%BD%93%E4%B8%8A%E5%8F%94%E5%8F%94%E4%BA%86%23) `1.4M 🔥` `NEW`
1. [机器人笑声 (robot laughter)](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%AC%91%E5%A3%B0%23) `1.3M 🔥` `NEW`
1. [十二花神 好看](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%8C%E8%8A%B1%E7%A5%9E%20%E5%A5%BD%E7%9C%8B%23) `1.3M 🔥` `NEW`
1. [春晚 好多人啊](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%20%E5%A5%BD%E5%A4%9A%E4%BA%BA%E5%95%8A%23) `1.2M 🔥` `NEW`
1. [张柏浩滑得好](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E6%B5%A9%E6%BB%91%E5%BE%97%E5%A5%BD%23) `1.1M 🔥` `NEW`
1. [让人毫无食欲的过年零食](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E4%BA%BA%E6%AF%AB%E6%97%A0%E9%A3%9F%E6%AC%B2%E7%9A%84%E8%BF%87%E5%B9%B4%E9%9B%B6%E9%A3%9F%23) `986.5K 🔥` `NEW`
1. [易烊千玺9登春晚](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA9%E7%99%BB%E6%98%A5%E6%99%9A%23) `819.0K 🔥` `NEW`
1. [豆包你咋上春晚了](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E4%BD%A0%E5%92%8B%E4%B8%8A%E6%98%A5%E6%99%9A%E4%BA%86%23) `780.3K 🔥` `NEW`
1. [机器人小品 恐怖谷](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%B0%8F%E5%93%81%20%E6%81%90%E6%80%96%E8%B0%B7%23) `638.4K 🔥` `NEW`
1. [春晚 (Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%23) `22.6M 🔥` `+186%`
1. [春晚节目单 (Spring Festival Gala Program)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E8%8A%82%E7%9B%AE%E5%8D%95%23) `13.1M 🔥` `+58%`
1. [迪奥开运红 (Dior Lucky Red)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A5%A5%E5%BC%80%E8%BF%90%E7%BA%A2%23) `10.5M 🔥` `+161%`
1. [陈哲远红包](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E7%BA%A2%E5%8C%85%23) `10.2M 🔥` `+4310%`
1. [除夕祝你万事胜意](https://s.weibo.com/weibo?q=%23%E9%99%A4%E5%A4%95%E7%A5%9D%E4%BD%A0%E4%B8%87%E4%BA%8B%E8%83%9C%E6%84%8F%23) `5.0M 🔥` `+57%`
1. [短道速滑 (short track speed skating)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%23) `4.8M 🔥` `+607%`
1. [新年祝福语 (New Year's greetings)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%B9%B4%E7%A5%9D%E7%A6%8F%E8%AF%AD%23) `4.7M 🔥` `+1773%`
1. [九尾家的年夜饭](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E5%AE%B6%E7%9A%84%E5%B9%B4%E5%A4%9C%E9%A5%AD%23) `4.3M 🔥` `+1989%`
1. [红包雨](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%E9%9B%A8%23) `4.3M 🔥` `+286%`
1. [张凌赫发了好多红包](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%91%E4%BA%86%E5%A5%BD%E5%A4%9A%E7%BA%A2%E5%8C%85%23) `2.4M 🔥` `+1068%`
1. [年夜饭](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%A4%9C%E9%A5%AD%23) `1.8M 🔥` `+102%`
1. [中国短道队男子5000米无缘决赛](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9F%AD%E9%81%93%E9%98%9F%E7%94%B7%E5%AD%905000%E7%B1%B3%E6%97%A0%E7%BC%98%E5%86%B3%E8%B5%9B%23) `1.7M 🔥` `+105%`
1. [春晚后台直播](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%90%8E%E5%8F%B0%E7%9B%B4%E6%92%AD%23) `1.7M 🔥` `+180%`
1. [冬奥短道速滑男子500米预赛](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%E7%94%B7%E5%AD%90500%E7%B1%B3%E9%A2%84%E8%B5%9B%23) `1.2M 🔥` `+155%`
1. [迪丽热巴人鱼公主](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BA%BA%E9%B1%BC%E5%85%AC%E4%B8%BB%23) `1.1M 🔥` `+84%`
1. [红包 (Red envelope)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `1.0M 🔥` `+73%`
1. [田曦薇好萌](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%A5%BD%E8%90%8C%23) `960.7K 🔥` `+279%`
1. [千问红包 (Qianwen red envelope)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E7%BA%A2%E5%8C%85%23) `858.3K 🔥` `+133%`
1. [奥巴马改口了 (Obama changed his tune)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%B7%B4%E9%A9%AC%E6%94%B9%E5%8F%A3%E4%BA%86%23) `830.3K 🔥` `+309%`
1. [除夕 (Lunar New Year's eve)](https://s.weibo.com/weibo?q=%23%E9%99%A4%E5%A4%95%23) `786.7K 🔥` `+364%`
1. [年夜饭文案](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%A4%9C%E9%A5%AD%E6%96%87%E6%A1%88%23) `613.4K 🔥` `+249%`
1. [明星红包](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%23) `15.0M 🔥`
1. [白鹿红包预告 (White Deer Red Envelope Preview)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BA%A2%E5%8C%85%E9%A2%84%E5%91%8A%23) `5.6M 🔥`

Updated at 2026-02-16 20:57:57

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
