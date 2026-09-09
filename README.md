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

1. [抢iPhone18Pro首发认准京东](https://s.weibo.com/weibo?q=%23%E6%8A%A2iPhone18Pro%E9%A6%96%E5%8F%91%E8%AE%A4%E5%87%86%E4%BA%AC%E4%B8%9C%23) `1.4M 🔥` `NEW`
1. [iPhoneDuo过渡动画 完美](https://s.weibo.com/weibo?q=%23iPhoneDuo%E8%BF%87%E6%B8%A1%E5%8A%A8%E7%94%BB%20%E5%AE%8C%E7%BE%8E%23) `559.7K 🔥` `NEW`
1. [高芙vs安德列娃](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%8A%99vs%E5%AE%89%E5%BE%B7%E5%88%97%E5%A8%83%23) `108.7K 🔥` `NEW`
1. [美网前四种子会师四强](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%E5%89%8D%E5%9B%9B%E7%A7%8D%E5%AD%90%E4%BC%9A%E5%B8%88%E5%9B%9B%E5%BC%BA%23) `90.2K 🔥` `NEW`
1. [在野外看到马刀树尽快远离](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%87%8E%E5%A4%96%E7%9C%8B%E5%88%B0%E9%A9%AC%E5%88%80%E6%A0%91%E5%B0%BD%E5%BF%AB%E8%BF%9C%E7%A6%BB%23) `78.1K 🔥` `NEW`
1. [郑钦文下一站比利简金杯](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%B8%8B%E4%B8%80%E7%AB%99%E6%AF%94%E5%88%A9%E7%AE%80%E9%87%91%E6%9D%AF%23) `77.7K 🔥` `NEW`
1. [女篮世界杯](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%AF%AE%E4%B8%96%E7%95%8C%E6%9D%AF%23) `59.8K 🔥` `NEW`
1. [中国女篮将对阵法国女篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%E5%B0%86%E5%AF%B9%E9%98%B5%E6%B3%95%E5%9B%BD%E5%A5%B3%E7%AF%AE%23) `59.4K 🔥` `NEW`
1. [莱巴金娜锁定世界第一](https://s.weibo.com/weibo?q=%23%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E9%94%81%E5%AE%9A%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23) `54.2K 🔥` `NEW`
1. [郑钦文 找回了自己](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%20%E6%89%BE%E5%9B%9E%E4%BA%86%E8%87%AA%E5%B7%B1%23) `52.5K 🔥` `NEW`
1. [郑钦文总结美网表现](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%80%BB%E7%BB%93%E7%BE%8E%E7%BD%91%E8%A1%A8%E7%8E%B0%23) `52.5K 🔥` `NEW`
1. [郑钦文即将开启中国赛季](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%8D%B3%E5%B0%86%E5%BC%80%E5%90%AF%E4%B8%AD%E5%9B%BD%E8%B5%9B%E5%AD%A3%23) `52.5K 🔥` `NEW`
1. [巴萨5比1大胜费耶诺德](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A85%E6%AF%941%E5%A4%A7%E8%83%9C%E8%B4%B9%E8%80%B6%E8%AF%BA%E5%BE%B7%23) `52.5K 🔥` `NEW`
1. [iPhone18Pro价格](https://s.weibo.com/weibo?q=%23iPhone18Pro%E4%BB%B7%E6%A0%BC%23) `2.9M 🔥` `+76%`
1. [被取消资助女生愿换掉苹果手机](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%8F%96%E6%B6%88%E8%B5%84%E5%8A%A9%E5%A5%B3%E7%94%9F%E6%84%BF%E6%8D%A2%E6%8E%89%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%23) `1.7M 🔥` `+229%`
1. [一图速览2026年服贸会](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%9B%BE%E9%80%9F%E8%A7%882026%E5%B9%B4%E6%9C%8D%E8%B4%B8%E4%BC%9A%23) `1.4M 🔥` `+106%`
1. [iPhoneDuo 屏下摄像头](https://s.weibo.com/weibo?q=%23iPhoneDuo%20%E5%B1%8F%E4%B8%8B%E6%91%84%E5%83%8F%E5%A4%B4%23) `1.4M 🔥` `+44%`
1. [郑钦文美网1比2莱巴金娜](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%BE%8E%E7%BD%911%E6%AF%942%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%23) `447.5K 🔥` `+75%`
1. [iPhone18Pro颜色](https://s.weibo.com/weibo?q=%23iPhone18Pro%E9%A2%9C%E8%89%B2%23) `390.6K 🔥` `+42%`
1. [苹果回应iPhoneDuo是否有折痕](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%9B%9E%E5%BA%94iPhoneDuo%E6%98%AF%E5%90%A6%E6%9C%89%E6%8A%98%E7%97%95%23) `276.9K 🔥` `+50%`
1. [教师节](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E8%8A%82%23) `263.2K 🔥` `+362%`
1. [抖音礼物 擦边](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E7%A4%BC%E7%89%A9%20%E6%93%A6%E8%BE%B9%23) `263.0K 🔥` `+43%`
1. [郑钦文美网止步八强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%BE%8E%E7%BD%91%E6%AD%A2%E6%AD%A5%E5%85%AB%E5%BC%BA%23) `261.5K 🔥` `+65%`
1. [抖音擦边礼物被下架](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E6%93%A6%E8%BE%B9%E7%A4%BC%E7%89%A9%E8%A2%AB%E4%B8%8B%E6%9E%B6%23) `172.6K 🔥` `+31%`
1. [中国女篮 有惊无险进八强](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%20%E6%9C%89%E6%83%8A%E6%97%A0%E9%99%A9%E8%BF%9B%E5%85%AB%E5%BC%BA%23) `168.8K 🔥` `+70%`
1. [iPhone18上手评测](https://s.weibo.com/weibo?q=%23iPhone18%E4%B8%8A%E6%89%8B%E8%AF%84%E6%B5%8B%23) `161.3K 🔥` `+100%`
1. [康康爷爷睡梦中离世](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E5%BA%B7%E7%88%B7%E7%88%B7%E7%9D%A1%E6%A2%A6%E4%B8%AD%E7%A6%BB%E4%B8%96%23) `151.9K 🔥` `+89%`
1. [无折痕](https://s.weibo.com/weibo?q=%23%E6%97%A0%E6%8A%98%E7%97%95%23) `145.7K 🔥` `+43%`
1. [郑钦文回应无缘美网四强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%9B%9E%E5%BA%94%E6%97%A0%E7%BC%98%E7%BE%8E%E7%BD%91%E5%9B%9B%E5%BC%BA%23) `135.1K 🔥` `+119%`
1. [又要低人一等了](https://s.weibo.com/weibo?q=%23%E5%8F%88%E8%A6%81%E4%BD%8E%E4%BA%BA%E4%B8%80%E7%AD%89%E4%BA%86%23) `135.0K 🔥` `+45%`
1. [痞幼说以结婚为目的恋爱是不负责任](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E8%AF%B4%E4%BB%A5%E7%BB%93%E5%A9%9A%E4%B8%BA%E7%9B%AE%E7%9A%84%E6%81%8B%E7%88%B1%E6%98%AF%E4%B8%8D%E8%B4%9F%E8%B4%A3%E4%BB%BB%23) `122.5K 🔥` `+103%`
1. [宁德时代已报警](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `101.6K 🔥` `+53%`
1. [中国女篮vs波多黎各女篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AEvs%E6%B3%A2%E5%A4%9A%E9%BB%8E%E5%90%84%E5%A5%B3%E7%AF%AE%23) `92.6K 🔥` `+33%`
1. [苹果发布会有何亮点](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%E6%9C%89%E4%BD%95%E4%BA%AE%E7%82%B9%23) `88.6K 🔥` `+43%`
1. [订了间700块的房间进门被震惊到了](https://s.weibo.com/weibo?q=%23%E8%AE%A2%E4%BA%86%E9%97%B4700%E5%9D%97%E7%9A%84%E6%88%BF%E9%97%B4%E8%BF%9B%E9%97%A8%E8%A2%AB%E9%9C%87%E6%83%8A%E5%88%B0%E4%BA%86%23) `78.0K 🔥` `+37%`
1. [冰川蓝好好看](https://s.weibo.com/weibo?q=%23%E5%86%B0%E5%B7%9D%E8%93%9D%E5%A5%BD%E5%A5%BD%E7%9C%8B%23) `77.8K 🔥` `+28%`
1. [以为iPhone和多邻国联名了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BAiPhone%E5%92%8C%E5%A4%9A%E9%82%BB%E5%9B%BD%E8%81%94%E5%90%8D%E4%BA%86%23) `77.7K 🔥` `+28%`
1. [女篮](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%AF%AE%23) `74.1K 🔥` `+30%`
1. [iPhoneDuo价格](https://s.weibo.com/weibo?q=%23iPhoneDuo%E4%BB%B7%E6%A0%BC%23) `284.9K 🔥`
1. [苹果发布会](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%23) `262.7K 🔥`
1. [刘恋想问早春晴朗作者自己是不是原型](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%81%8B%E6%83%B3%E9%97%AE%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E4%BD%9C%E8%80%85%E8%87%AA%E5%B7%B1%E6%98%AF%E4%B8%8D%E6%98%AF%E5%8E%9F%E5%9E%8B%23) `134.6K 🔥`
1. [低保户 空调](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E4%BF%9D%E6%88%B7%20%E7%A9%BA%E8%B0%83%23) `76.7K 🔥`
1. [终于吃上教师资格证的红利了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E5%90%83%E4%B8%8A%E6%95%99%E5%B8%88%E8%B5%84%E6%A0%BC%E8%AF%81%E7%9A%84%E7%BA%A2%E5%88%A9%E4%BA%86%23) `60.9K 🔥`
1. [早春晴朗好大方的花絮](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%A5%BD%E5%A4%A7%E6%96%B9%E7%9A%84%E8%8A%B1%E7%B5%AE%23) `52.5K 🔥`
1. [AirPods5 便宜](https://s.weibo.com/weibo?q=%23AirPods5%20%E4%BE%BF%E5%AE%9C%23) `190.3K 🔥` `-37%`
1. [郑钦文vs莱巴金娜](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%23) `78.1K 🔥` `-22%`
1. [iPhone18Pro 充电速度](https://s.weibo.com/weibo?q=%23iPhone18Pro%20%E5%85%85%E7%94%B5%E9%80%9F%E5%BA%A6%23) `63.9K 🔥` `-56%`
1. [iPhone18Pro 勃艮第红](https://s.weibo.com/weibo?q=%23iPhone18Pro%20%E5%8B%83%E8%89%AE%E7%AC%AC%E7%BA%A2%23) `63.1K 🔥` `-45%`
1. [iPhone Duo](https://s.weibo.com/weibo?q=%23iPhone%20Duo%23) `53.9K 🔥` `-30%`
1. [Series12 Ultra4](https://s.weibo.com/weibo?q=%23Series12%20Ultra4%23) `53.1K 🔥` `-23%`
1. [结婚40年丈夫把第三者藏家里储藏室](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A40%E5%B9%B4%E4%B8%88%E5%A4%AB%E6%8A%8A%E7%AC%AC%E4%B8%89%E8%80%85%E8%97%8F%E5%AE%B6%E9%87%8C%E5%82%A8%E8%97%8F%E5%AE%A4%23) `52.5K 🔥` `-62%`

Updated at 2026-09-10 06:34:01

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
