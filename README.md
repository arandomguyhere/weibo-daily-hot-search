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

1. [中国体操女团时隔20年夺冠](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BD%93%E6%93%8D%E5%A5%B3%E5%9B%A2%E6%97%B6%E9%9A%9420%E5%B9%B4%E5%A4%BA%E5%86%A0%23) `1.1M 🔥` `NEW`
1. [这台世界顶尖大科学装置首次出光](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%8F%B0%E4%B8%96%E7%95%8C%E9%A1%B6%E5%B0%96%E5%A4%A7%E7%A7%91%E5%AD%A6%E8%A3%85%E7%BD%AE%E9%A6%96%E6%AC%A1%E5%87%BA%E5%85%89%23) `617.8K 🔥` `NEW`
1. [邱祺缘 体操世锦赛](https://s.weibo.com/weibo?q=%23%E9%82%B1%E7%A5%BA%E7%BC%98%20%E4%BD%93%E6%93%8D%E4%B8%96%E9%94%A6%E8%B5%9B%23) `349.2K 🔥` `NEW`
1. [中国体操女团12套全顺](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BD%93%E6%93%8D%E5%A5%B3%E5%9B%A212%E5%A5%97%E5%85%A8%E9%A1%BA%23) `228.5K 🔥` `NEW`
1. [皇马VS莱比锡](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%ACVS%E8%8E%B1%E6%AF%94%E9%94%A1%23) `228.1K 🔥` `NEW`
1. [周杰伦说我是中国人有什么可讨论的](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%AF%B4%E6%88%91%E6%98%AF%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%9C%89%E4%BB%80%E4%B9%88%E5%8F%AF%E8%AE%A8%E8%AE%BA%E7%9A%84%23) `225.9K 🔥` `NEW`
1. [盛艾敬妈妈疑似涉嫌诈骗](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E5%A6%88%E5%A6%88%E7%96%91%E4%BC%BC%E6%B6%89%E5%AB%8C%E8%AF%88%E9%AA%97%23) `225.4K 🔥` `NEW`
1. [拜仁2比2阿森纳](https://s.weibo.com/weibo?q=%23%E6%8B%9C%E4%BB%812%E6%AF%942%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `224.7K 🔥` `NEW`
1. [宁德时代崩跌原因](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E5%B4%A9%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `223.7K 🔥` `NEW`
1. [宇树机器人展示举起汽车救人](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%B1%95%E7%A4%BA%E4%B8%BE%E8%B5%B7%E6%B1%BD%E8%BD%A6%E6%95%91%E4%BA%BA%23) `221.1K 🔥` `NEW`
1. [武志红李雪被指缺乏爱的体验](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%BF%97%E7%BA%A2%E6%9D%8E%E9%9B%AA%E8%A2%AB%E6%8C%87%E7%BC%BA%E4%B9%8F%E7%88%B1%E7%9A%84%E4%BD%93%E9%AA%8C%23) `201.5K 🔥` `NEW`
1. [车澈 李嘉格](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E6%BE%88%20%E6%9D%8E%E5%98%89%E6%A0%BC%23) `180.9K 🔥` `NEW`
1. [别人一眼看出是当老师的](https://s.weibo.com/weibo?q=%23%E5%88%AB%E4%BA%BA%E4%B8%80%E7%9C%BC%E7%9C%8B%E5%87%BA%E6%98%AF%E5%BD%93%E8%80%81%E5%B8%88%E7%9A%84%23) `154.5K 🔥` `NEW`
1. [33岁女子南太行徒步失联身亡](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E5%A5%B3%E5%AD%90%E5%8D%97%E5%A4%AA%E8%A1%8C%E5%BE%92%E6%AD%A5%E5%A4%B1%E8%81%94%E8%BA%AB%E4%BA%A1%23) `136.8K 🔥` `NEW`
1. [李雪发文反讽武志红](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E5%8F%91%E6%96%87%E5%8F%8D%E8%AE%BD%E6%AD%A6%E5%BF%97%E7%BA%A2%23) `98.9K 🔥` `NEW`
1. [小城良方开播成绩](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%BC%80%E6%92%AD%E6%88%90%E7%BB%A9%23) `98.3K 🔥` `NEW`
1. [小米成立独立汽车安全研究中心](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%88%90%E7%AB%8B%E7%8B%AC%E7%AB%8B%E6%B1%BD%E8%BD%A6%E5%AE%89%E5%85%A8%E7%A0%94%E7%A9%B6%E4%B8%AD%E5%BF%83%23) `96.5K 🔥` `NEW`
1. [小城良方全网曝光5.54亿](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%85%A8%E7%BD%91%E6%9B%9D%E5%85%895.54%E4%BA%BF%23) `96.0K 🔥` `NEW`
1. [卢旺达抄作业连面相都抄了](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%97%BA%E8%BE%BE%E6%8A%84%E4%BD%9C%E4%B8%9A%E8%BF%9E%E9%9D%A2%E7%9B%B8%E9%83%BD%E6%8A%84%E4%BA%86%23) `89.7K 🔥` `NEW`
1. [张清颖平衡木15.066分](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B8%85%E9%A2%96%E5%B9%B3%E8%A1%A1%E6%9C%A815.066%E5%88%86%23) `88.5K 🔥` `NEW`
1. [凯恩点球命中拜仁反超](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E7%82%B9%E7%90%83%E5%91%BD%E4%B8%AD%E6%8B%9C%E4%BB%81%E5%8F%8D%E8%B6%85%23) `86.2K 🔥` `NEW`
1. [曝陈天润恋情](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%99%88%E5%A4%A9%E6%B6%A6%E6%81%8B%E6%83%85%23) `85.3K 🔥` `NEW`
1. [杨幂王嘉尔牵手下台](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%8E%8B%E5%98%89%E5%B0%94%E7%89%B5%E6%89%8B%E4%B8%8B%E5%8F%B0%23) `81.3K 🔥` `NEW`
1. [红果短剧自砍摇钱树](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E8%87%AA%E7%A0%8D%E6%91%87%E9%92%B1%E6%A0%91%23) `791.1K 🔥` `+587%`
1. [长生 AG](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9F%20AG%23) `234.8K 🔥` `+356%`
1. [印度男子谋杀39岁中国女子终身监禁](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%90%E8%B0%8B%E6%9D%8039%E5%B2%81%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E7%BB%88%E8%BA%AB%E7%9B%91%E7%A6%81%23) `227.8K 🔥` `+535%`
1. [和女同事相处真的要小心分寸](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%A5%B3%E5%90%8C%E4%BA%8B%E7%9B%B8%E5%A4%84%E7%9C%9F%E7%9A%84%E8%A6%81%E5%B0%8F%E5%BF%83%E5%88%86%E5%AF%B8%23) `227.2K 🔥` `+340%`
1. [曝自费高定艺人名字](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%87%AA%E8%B4%B9%E9%AB%98%E5%AE%9A%E8%89%BA%E4%BA%BA%E5%90%8D%E5%AD%97%23) `226.8K 🔥` `+337%`
1. [体操世锦赛女团决赛](https://s.weibo.com/weibo?q=%23%E4%BD%93%E6%93%8D%E4%B8%96%E9%94%A6%E8%B5%9B%E5%A5%B3%E5%9B%A2%E5%86%B3%E8%B5%9B%23) `226.1K 🔥` `+55%`
1. [张小斐 救场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%20%E6%95%91%E5%9C%BA%23) `225.1K 🔥` `+334%`
1. [原来明星租一次高定这么贵啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%8E%E6%98%9F%E7%A7%9F%E4%B8%80%E6%AC%A1%E9%AB%98%E5%AE%9A%E8%BF%99%E4%B9%88%E8%B4%B5%E5%95%8A%23) `224.3K 🔥` `+332%`
1. [泽连斯基愿保留75%领土以达和平](https://s.weibo.com/weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E6%84%BF%E4%BF%9D%E7%95%9975%25%E9%A2%86%E5%9C%9F%E4%BB%A5%E8%BE%BE%E5%92%8C%E5%B9%B3%23) `223.2K 🔥` `+331%`
1. [料酒去腥的惊天骗局](https://s.weibo.com/weibo?q=%23%E6%96%99%E9%85%92%E5%8E%BB%E8%85%A5%E7%9A%84%E6%83%8A%E5%A4%A9%E9%AA%97%E5%B1%80%23) `223.1K 🔥` `+528%`
1. [刘铮亮父亲冬泳溺亡](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%93%AE%E4%BA%AE%E7%88%B6%E4%BA%B2%E5%86%AC%E6%B3%B3%E6%BA%BA%E4%BA%A1%23) `222.7K 🔥` `+531%`
1. [影视飓风iPhoneDuo评测](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8EiPhoneDuo%E8%AF%84%E6%B5%8B%23) `222.1K 🔥` `+530%`
1. [网友物理推导问界M9车速](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%89%A9%E7%90%86%E6%8E%A8%E5%AF%BC%E9%97%AE%E7%95%8CM9%E8%BD%A6%E9%80%9F%23) `221.9K 🔥` `+462%`
1. [芭莎 有人在后台不出来](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E8%8E%8E%20%E6%9C%89%E4%BA%BA%E5%9C%A8%E5%90%8E%E5%8F%B0%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `221.3K 🔥` `+328%`
1. [祖海高定压轴款](https://s.weibo.com/weibo?q=%23%E7%A5%96%E6%B5%B7%E9%AB%98%E5%AE%9A%E5%8E%8B%E8%BD%B4%E6%AC%BE%23) `170.6K 🔥` `+317%`
1. [问界辟谣网传电池爆燃智驾撞击](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E8%BE%9F%E8%B0%A3%E7%BD%91%E4%BC%A0%E7%94%B5%E6%B1%A0%E7%88%86%E7%87%83%E6%99%BA%E9%A9%BE%E6%92%9E%E5%87%BB%23) `161.8K 🔥` `+422%`
1. [上海婚纱店认领祖海高定](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A9%9A%E7%BA%B1%E5%BA%97%E8%AE%A4%E9%A2%86%E7%A5%96%E6%B5%B7%E9%AB%98%E5%AE%9A%23) `159.6K 🔥` `+401%`
1. [本年度最会怼人的网友出现了](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%B9%B4%E5%BA%A6%E6%9C%80%E4%BC%9A%E6%80%BC%E4%BA%BA%E7%9A%84%E7%BD%91%E5%8F%8B%E5%87%BA%E7%8E%B0%E4%BA%86%23) `150.5K 🔥` `+380%`
1. [蔡文静在张小斐之前走完红毯了](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E5%9C%A8%E5%BC%A0%E5%B0%8F%E6%96%90%E4%B9%8B%E5%89%8D%E8%B5%B0%E5%AE%8C%E7%BA%A2%E6%AF%AF%E4%BA%86%23) `142.2K 🔥` `+177%`
1. [女孩回应撞脸大S](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%9B%9E%E5%BA%94%E6%92%9E%E8%84%B8%E5%A4%A7S%23) `125.4K 🔥` `+143%`
1. [杨幂压轴](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%8E%8B%E8%BD%B4%23) `111.4K 🔥` `+192%`
1. [AG 退役](https://s.weibo.com/weibo?q=%23AG%20%E9%80%80%E5%BD%B9%23) `94.1K 🔥` `+162%`
1. [罗晋称呼唐嫣我太太](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%99%8B%E7%A7%B0%E5%91%BC%E5%94%90%E5%AB%A3%E6%88%91%E5%A4%AA%E5%A4%AA%23) `93.7K 🔥` `+269%`
1. [白鹿开毯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BC%80%E6%AF%AF%23) `84.8K 🔥` `+142%`
1. [妈妈染上AI短剧后无法自拔](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%9F%93%E4%B8%8AAI%E7%9F%AD%E5%89%A7%E5%90%8E%E6%97%A0%E6%B3%95%E8%87%AA%E6%8B%94%23) `82.7K 🔥` `-36%`

Updated at 2026-10-22 07:54:02

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
