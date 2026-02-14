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

1. [谷爱凌大跳台第一位登场 (Gu Ailing debuts first on the big platform)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%A7%E8%B7%B3%E5%8F%B0%E7%AC%AC%E4%B8%80%E4%BD%8D%E7%99%BB%E5%9C%BA%23) `98.2K 🔥` `NEW`
1. [霍启刚三兄弟飞米兰为父庆生 (Huo Qigang's three brothers flew to Milan to celebrate their father's birthday)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%88%9A%E4%B8%89%E5%85%84%E5%BC%9F%E9%A3%9E%E7%B1%B3%E5%85%B0%E4%B8%BA%E7%88%B6%E5%BA%86%E7%94%9F%23) `66.7K 🔥` `+47%`
1. [CORTIS新单YCC引发热议](https://s.weibo.com/weibo?q=%23CORTIS%E6%96%B0%E5%8D%95YCC%E5%BC%95%E5%8F%91%E7%83%AD%E8%AE%AE%23) `82.6K 🔥`
1. [四川大学](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%A4%A7%E5%AD%A6%23) `54.8K 🔥`
1. [杨博文高会](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E9%AB%98%E4%BC%9A%23) `44.0K 🔥`
1. [刘一手承认欠款2000万](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%80%E6%89%8B%E6%89%BF%E8%AE%A4%E6%AC%A0%E6%AC%BE2000%E4%B8%87%23) `35.9K 🔥`
1. [中国2银2铜暂列冬奥奖牌榜第18](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD2%E9%93%B62%E9%93%9C%E6%9A%82%E5%88%97%E5%86%AC%E5%A5%A5%E5%A5%96%E7%89%8C%E6%A6%9C%E7%AC%AC18%23) `32.1K 🔥`
1. [王一博人鱼演职表更新](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%BA%BA%E9%B1%BC%E6%BC%94%E8%81%8C%E8%A1%A8%E6%9B%B4%E6%96%B0%23) `30.5K 🔥`
1. [王者荣耀崩了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%B4%A9%E4%BA%86%23) `462.9K 🔥` `-28%`
1. [河南春晚 没有主持人和舞台 (Henan Spring Festival Gala has no host or stage)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%98%A5%E6%99%9A%20%E6%B2%A1%E6%9C%89%E4%B8%BB%E6%8C%81%E4%BA%BA%E5%92%8C%E8%88%9E%E5%8F%B0%23) `142.0K 🔥` `-49%`
1. [一杯热水暖了几十年归途 (A cup of hot water warms the way home after decades)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%9D%AF%E7%83%AD%E6%B0%B4%E6%9A%96%E4%BA%86%E5%87%A0%E5%8D%81%E5%B9%B4%E5%BD%92%E9%80%94%23) `109.8K 🔥` `-49%`
1. [美团外卖送金马啦 (Meituan Food Delivery to Golden Horse)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%E9%80%81%E9%87%91%E9%A9%AC%E5%95%A6%23) `108.3K 🔥` `-59%`
1. [千问红包](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E7%BA%A2%E5%8C%85%23) `100.8K 🔥` `-38%`
1. [关晓彤 青鸟神女](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%20%E9%9D%92%E9%B8%9F%E7%A5%9E%E5%A5%B3%23) `91.8K 🔥` `-37%`
1. [高亭宇奥运纪录被打破 (Gao Tingyu’s Olympic record was broken)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BA%AD%E5%AE%87%E5%A5%A5%E8%BF%90%E7%BA%AA%E5%BD%95%E8%A2%AB%E6%89%93%E7%A0%B4%23) `91.1K 🔥` `-44%`
1. [红包](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `82.5K 🔥` `-25%`
1. [林孝埈短道速滑1500米加油](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%911500%E7%B1%B3%E5%8A%A0%E6%B2%B9%23) `73.9K 🔥` `-44%`
1. [黄子韬回应扇了徐艺洋](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%9B%9E%E5%BA%94%E6%89%87%E4%BA%86%E5%BE%90%E8%89%BA%E6%B4%8B%23) `72.4K 🔥` `-25%`
1. [红包分组 (Red envelope grouping)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `64.0K 🔥` `-26%`
1. [河南春晚 大量广告里穿插了少量节目](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%98%A5%E6%99%9A%20%E5%A4%A7%E9%87%8F%E5%B9%BF%E5%91%8A%E9%87%8C%E7%A9%BF%E6%8F%92%E4%BA%86%E5%B0%91%E9%87%8F%E8%8A%82%E7%9B%AE%23) `62.0K 🔥` `-36%`
1. [宁艺卓 曼谷 (Ning Yizhuo Bangkok)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%20%E6%9B%BC%E8%B0%B7%23) `49.2K 🔥` `-38%`
1. [王橹杰高会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%AB%98%E4%BC%9A%23) `47.0K 🔥` `-32%`
1. [王毅就中日关系重申严正立场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E5%B0%B1%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%E9%87%8D%E7%94%B3%E4%B8%A5%E6%AD%A3%E7%AB%8B%E5%9C%BA%23) `41.8K 🔥` `-31%`
1. [高亭宇滑出34秒47](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BA%AD%E5%AE%87%E6%BB%91%E5%87%BA34%E7%A7%9247%23) `38.3K 🔥` `-67%`
1. [曝黄子弘凡爸爸诈骗学生 (Exposed Huang Zihongfan’s father defrauded students)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E7%88%B8%E7%88%B8%E8%AF%88%E9%AA%97%E5%AD%A6%E7%94%9F%23) `38.1K 🔥` `-29%`
1. [迪丽热巴作品豆瓣评分](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BD%9C%E5%93%81%E8%B1%86%E7%93%A3%E8%AF%84%E5%88%86%23) `37.9K 🔥` `-29%`
1. [医院回应男童吃猪脚被卡喉去世](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E5%9B%9E%E5%BA%94%E7%94%B7%E7%AB%A5%E5%90%83%E7%8C%AA%E8%84%9A%E8%A2%AB%E5%8D%A1%E5%96%89%E5%8E%BB%E4%B8%96%23) `37.4K 🔥` `-30%`
1. [白鹿虞书欣同款剧宣姿势 (Bailu Yu Shuxin's same drama promotional pose)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%90%8C%E6%AC%BE%E5%89%A7%E5%AE%A3%E5%A7%BF%E5%8A%BF%23) `37.3K 🔥` `-30%`
1. [从疲劳到癌症只有4步 (There are only 4 steps from fatigue to cancer)](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E7%96%B2%E5%8A%B3%E5%88%B0%E7%99%8C%E7%97%87%E5%8F%AA%E6%9C%894%E6%AD%A5%23) `37.0K 🔥` `-30%`
1. [黄子弘凡工作室辟谣](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%BE%9F%E8%B0%A3%23) `36.5K 🔥` `-31%`
1. [56岁阿姨长期情绪失控痛哭右眼失明 (A 56-year-old aunt loses sight in her right eye after losing control of her emotions for a long time and crying bitterly)](https://s.weibo.com/weibo?q=%2356%E5%B2%81%E9%98%BF%E5%A7%A8%E9%95%BF%E6%9C%9F%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%E7%97%9B%E5%93%AD%E5%8F%B3%E7%9C%BC%E5%A4%B1%E6%98%8E%23) `36.5K 🔥` `-31%`
1. [千问口令](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E5%8F%A3%E4%BB%A4%23) `34.5K 🔥` `-26%`
1. [张凌赫空降超话](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%A9%BA%E9%99%8D%E8%B6%85%E8%AF%9D%23) `32.0K 🔥` `-51%`
1. [朱志鑫来真的](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E6%9D%A5%E7%9C%9F%E7%9A%84%23) `31.9K 🔥` `-29%`
1. [情人节发现男朋友联系高中女同学 (On Valentine’s Day, I discovered that my boyfriend was contacting a female high school classmate.)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%E5%8F%91%E7%8E%B0%E7%94%B7%E6%9C%8B%E5%8F%8B%E8%81%94%E7%B3%BB%E9%AB%98%E4%B8%AD%E5%A5%B3%E5%90%8C%E5%AD%A6%23) `31.5K 🔥` `-21%`
1. [马君妍宣布二胎宝宝已有30周](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%90%9B%E5%A6%8D%E5%AE%A3%E5%B8%83%E4%BA%8C%E8%83%8E%E5%AE%9D%E5%AE%9D%E5%B7%B2%E6%9C%8930%E5%91%A8%23) `31.5K 🔥` `-42%`
1. [河南卫视春晚](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%23) `29.0K 🔥` `-27%`
1. [檀健次也太欲太会钓了](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E4%B9%9F%E5%A4%AA%E6%AC%B2%E5%A4%AA%E4%BC%9A%E9%92%93%E4%BA%86%23) `28.3K 🔥` `-22%`
1. [田曦薇现身央视春晚备播录制](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%8E%B0%E8%BA%AB%E5%A4%AE%E8%A7%86%E6%98%A5%E6%99%9A%E5%A4%87%E6%92%AD%E5%BD%95%E5%88%B6%23) `28.0K 🔥` `-23%`
1. [女子染发头皮溃烂过年只能光头](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9F%93%E5%8F%91%E5%A4%B4%E7%9A%AE%E6%BA%83%E7%83%82%E8%BF%87%E5%B9%B4%E5%8F%AA%E8%83%BD%E5%85%89%E5%A4%B4%23) `27.0K 🔥` `-26%`
1. [高亭宇男子500米 (Gao Tingyu Men's 500m)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BA%AD%E5%AE%87%E7%94%B7%E5%AD%90500%E7%B1%B3%23) `26.8K 🔥` `-41%`
1. [黄金还能买吗 (Can I still buy gold?)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%BF%98%E8%83%BD%E4%B9%B0%E5%90%97%23) `26.8K 🔥` `-26%`
1. [明星红包 (Celebrity red envelope)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%23) `26.6K 🔥` `-29%`
1. [情人节的朋友圈比春晚还热闹 (The circle of friends on Valentine’s Day is more lively than the Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%AF%94%E6%98%A5%E6%99%9A%E8%BF%98%E7%83%AD%E9%97%B9%23) `26.6K 🔥` `-27%`
1. [千问补发免单卡 (Qianwen reissues free single card)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E8%A1%A5%E5%8F%91%E5%85%8D%E5%8D%95%E5%8D%A1%23) `26.6K 🔥` `-27%`
1. [生命树多杰死因反转](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%A4%9A%E6%9D%B0%E6%AD%BB%E5%9B%A0%E5%8F%8D%E8%BD%AC%23) `26.6K 🔥` `-27%`
1. [张函瑞高会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E9%AB%98%E4%BC%9A%23) `26.6K 🔥` `-31%`
1. [高亭宇男子500米第7](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BA%AD%E5%AE%87%E7%94%B7%E5%AD%90500%E7%B1%B3%E7%AC%AC7%23) `26.6K 🔥` `-27%`
1. [石凯钓鱼 (Shikai fishing)](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E5%87%AF%E9%92%93%E9%B1%BC%23) `26.6K 🔥` `-31%`
1. [钢架雪车](https://s.weibo.com/weibo?q=%23%E9%92%A2%E6%9E%B6%E9%9B%AA%E8%BD%A6%23) `26.6K 🔥` `-41%`
1. [林孝埈术后康复影像首次曝光 (Lin Xiaojun's post-operative recovery images exposed for the first time)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E6%9C%AF%E5%90%8E%E5%BA%B7%E5%A4%8D%E5%BD%B1%E5%83%8F%E9%A6%96%E6%AC%A1%E6%9B%9D%E5%85%89%23) `26.6K 🔥` `-44%`

Updated at 2026-02-15 02:36:31

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
