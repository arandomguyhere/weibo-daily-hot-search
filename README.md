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

1. [王毅向日本发出灵魂4问 (Wang Yi sends 4 soul questions to Japan)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E5%90%91%E6%97%A5%E6%9C%AC%E5%8F%91%E5%87%BA%E7%81%B5%E9%AD%824%E9%97%AE%23) `371.4K 🔥`
1. [伊朗称击毁4部美军萨德系统雷达 (Iran says it destroyed 4 US military THAAD radars)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%87%BB%E6%AF%814%E9%83%A8%E7%BE%8E%E5%86%9B%E8%90%A8%E5%BE%B7%E7%B3%BB%E7%BB%9F%E9%9B%B7%E8%BE%BE%23) `64.8K 🔥`
1. [樊长玉家 猪猪痛屋](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E9%95%BF%E7%8E%89%E5%AE%B6%20%E7%8C%AA%E7%8C%AA%E7%97%9B%E5%B1%8B%23) `46.1K 🔥`
1. [伊朗发起第28波攻势](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E8%B5%B7%E7%AC%AC28%E6%B3%A2%E6%94%BB%E5%8A%BF%23) `45.6K 🔥`
1. [Bin获FMVP](https://s.weibo.com/weibo?q=%23Bin%E8%8E%B7FMVP%23) `45.6K 🔥`
1. [多架美军机相继离开韩国基地](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%9E%B6%E7%BE%8E%E5%86%9B%E6%9C%BA%E7%9B%B8%E7%BB%A7%E7%A6%BB%E5%BC%80%E9%9F%A9%E5%9B%BD%E5%9F%BA%E5%9C%B0%23) `45.6K 🔥`
1. [恋综史上最明艳的出场](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%BB%BC%E5%8F%B2%E4%B8%8A%E6%9C%80%E6%98%8E%E8%89%B3%E7%9A%84%E5%87%BA%E5%9C%BA%23) `45.5K 🔥`
1. [很喜欢用嘿嘿这两个字](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%96%9C%E6%AC%A2%E7%94%A8%E5%98%BF%E5%98%BF%E8%BF%99%E4%B8%A4%E4%B8%AA%E5%AD%97%23) `45.5K 🔥`
1. [逐玉 认养一头牛](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E8%AE%A4%E5%85%BB%E4%B8%80%E5%A4%B4%E7%89%9B%23) `45.5K 🔥`
1. [回避型差评需要一个引导型商家](https://s.weibo.com/weibo?q=%23%E5%9B%9E%E9%81%BF%E5%9E%8B%E5%B7%AE%E8%AF%84%E9%9C%80%E8%A6%81%E4%B8%80%E4%B8%AA%E5%BC%95%E5%AF%BC%E5%9E%8B%E5%95%86%E5%AE%B6%23) `45.4K 🔥`
1. [设计师演我见到王一博](https://s.weibo.com/weibo?q=%23%E8%AE%BE%E8%AE%A1%E5%B8%88%E6%BC%94%E6%88%91%E8%A7%81%E5%88%B0%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `45.4K 🔥`
1. [伊朗宣布将采用全新攻击方式 (Iran announces new attack method)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AE%A3%E5%B8%83%E5%B0%86%E9%87%87%E7%94%A8%E5%85%A8%E6%96%B0%E6%94%BB%E5%87%BB%E6%96%B9%E5%BC%8F%23) `45.4K 🔥`
1. [金智秀新剧韩趋第一 (Kim Ji-soo's new drama ranks No. 1 in Korea)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E6%96%B0%E5%89%A7%E9%9F%A9%E8%B6%8B%E7%AC%AC%E4%B8%80%23) `45.4K 🔥`
1. [女子糖尿病不忌口8年变尿毒症 (A woman with diabetes develops uremia in 8 years without tabooing food)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%B3%96%E5%B0%BF%E7%97%85%E4%B8%8D%E5%BF%8C%E5%8F%A38%E5%B9%B4%E5%8F%98%E5%B0%BF%E6%AF%92%E7%97%87%23) `45.3K 🔥`
1. [王一博看完你的看你的 (Wang Yibo, after reading yours, I will read yours)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%9C%8B%E5%AE%8C%E4%BD%A0%E7%9A%84%E7%9C%8B%E4%BD%A0%E7%9A%84%23) `45.3K 🔥`
1. [英雄联盟全球先锋赛](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%E5%85%A8%E7%90%83%E5%85%88%E9%94%8B%E8%B5%9B%23) `45.3K 🔥`
1. [杨紫罗马时装周](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%BD%97%E9%A9%AC%E6%97%B6%E8%A3%85%E5%91%A8%23) `45.3K 🔥`
1. [时代少年团广州演唱会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B9%BF%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `45.3K 🔥`
1. [退出APP显示残忍离开到底谁发明的](https://s.weibo.com/weibo?q=%23%E9%80%80%E5%87%BAAPP%E6%98%BE%E7%A4%BA%E6%AE%8B%E5%BF%8D%E7%A6%BB%E5%BC%80%E5%88%B0%E5%BA%95%E8%B0%81%E5%8F%91%E6%98%8E%E7%9A%84%23) `45.2K 🔥`
1. [98岁爷爷在西湖边火了](https://s.weibo.com/weibo?q=%2398%E5%B2%81%E7%88%B7%E7%88%B7%E5%9C%A8%E8%A5%BF%E6%B9%96%E8%BE%B9%E7%81%AB%E4%BA%86%23) `45.2K 🔥`
1. [OpenAI多位负责人抗议辞职](https://s.weibo.com/weibo?q=%23OpenAI%E5%A4%9A%E4%BD%8D%E8%B4%9F%E8%B4%A3%E4%BA%BA%E6%8A%97%E8%AE%AE%E8%BE%9E%E8%81%8C%23) `45.2K 🔥`
1. [童禹坤直播](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E7%A6%B9%E5%9D%A4%E7%9B%B4%E6%92%AD%23) `45.2K 🔥`
1. [在北京穿了将近半年的羽绒服 (Down jacket that I wore in Beijing for nearly half a year)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%8C%97%E4%BA%AC%E7%A9%BF%E4%BA%86%E5%B0%86%E8%BF%91%E5%8D%8A%E5%B9%B4%E7%9A%84%E7%BE%BD%E7%BB%92%E6%9C%8D%23) `45.1K 🔥`
1. [徐杰当选全明星MVP (Xu Jie was elected All-Star MVP)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%9D%B0%E5%BD%93%E9%80%89%E5%85%A8%E6%98%8E%E6%98%9FMVP%23) `45.1K 🔥`
1. [JDG战胜狼队](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9C%E7%8B%BC%E9%98%9F%23) `264.4K 🔥` `-49%`
1. [从海底1万米到距地球4300万公里](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E6%B5%B7%E5%BA%951%E4%B8%87%E7%B1%B3%E5%88%B0%E8%B7%9D%E5%9C%B0%E7%90%834300%E4%B8%87%E5%85%AC%E9%87%8C%23) `205.1K 🔥` `-33%`
1. [狂飙 (hurricane)](https://s.weibo.com/weibo?q=%23%E7%8B%82%E9%A3%99%23) `187.4K 🔥` `-31%`
1. [多家黄金品牌宣布调价](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E9%BB%84%E9%87%91%E5%93%81%E7%89%8C%E5%AE%A3%E5%B8%83%E8%B0%83%E4%BB%B7%23) `182.4K 🔥` `-31%`
1. [伊朗最高权力平稳过渡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E6%9D%83%E5%8A%9B%E5%B9%B3%E7%A8%B3%E8%BF%87%E6%B8%A1%23) `160.0K 🔥` `-23%`
1. [武大食堂4元熬夜水日销百斤 (Wuhan University cafeteria sells 100 kilograms of water for staying up late for 4 yuan a day)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E9%A3%9F%E5%A0%824%E5%85%83%E7%86%AC%E5%A4%9C%E6%B0%B4%E6%97%A5%E9%94%80%E7%99%BE%E6%96%A4%23) `77.6K 🔥` `-23%`
1. [张凌赫田曦薇cp感](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87cp%E6%84%9F%23) `73.1K 🔥` `-64%`
1. [中国式现代化圈粉全球](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%BC%8F%E7%8E%B0%E4%BB%A3%E5%8C%96%E5%9C%88%E7%B2%89%E5%85%A8%E7%90%83%23) `72.4K 🔥` `-62%`
1. [AI对老师的影响](https://s.weibo.com/weibo?q=%23AI%E5%AF%B9%E8%80%81%E5%B8%88%E7%9A%84%E5%BD%B1%E5%93%8D%23) `71.2K 🔥` `-62%`
1. [逐玉 出圈梗 (Zhuyu out of the circle stalks)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%87%BA%E5%9C%88%E6%A2%97%23) `68.9K 🔥` `-62%`
1. [王祉怡获全英赛女单冠军](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%89%E6%80%A1%E8%8E%B7%E5%85%A8%E8%8B%B1%E8%B5%9B%E5%A5%B3%E5%8D%95%E5%86%A0%E5%86%9B%23) `67.7K 🔥` `-61%`
1. [逐玉播放量超过狂飙](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%92%AD%E6%94%BE%E9%87%8F%E8%B6%85%E8%BF%87%E7%8B%82%E9%A3%99%23) `65.6K 🔥` `-60%`
1. [逐玉 帅哥 (Zhuyu handsome guy)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%B8%85%E5%93%A5%23) `63.8K 🔥` `-41%`
1. [两艘万吨大驱亮相](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E8%89%98%E4%B8%87%E5%90%A8%E5%A4%A7%E9%A9%B1%E4%BA%AE%E7%9B%B8%23) `62.6K 🔥` `-68%`
1. [无畏 赵怀真](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%20%E8%B5%B5%E6%80%80%E7%9C%9F%23) `57.1K 🔥` `-36%`
1. [湖南卫视妇女节视频设计好天才啊 (Hunan Satellite TV’s Women’s Day video design is so genius)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E5%A6%87%E5%A5%B3%E8%8A%82%E8%A7%86%E9%A2%91%E8%AE%BE%E8%AE%A1%E5%A5%BD%E5%A4%A9%E6%89%8D%E5%95%8A%23) `54.4K 🔥` `-45%`
1. [我妈以为的早熟vs实际上的早熟 (What my mother thought was precocious vs. what she actually was)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A6%88%E4%BB%A5%E4%B8%BA%E7%9A%84%E6%97%A9%E7%86%9Fvs%E5%AE%9E%E9%99%85%E4%B8%8A%E7%9A%84%E6%97%A9%E7%86%9F%23) `51.1K 🔥` `-27%`
1. [金晨孙阳偏偏喜欢你2杀青捧花](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E5%AD%99%E9%98%B3%E5%81%8F%E5%81%8F%E5%96%9C%E6%AC%A2%E4%BD%A02%E6%9D%80%E9%9D%92%E6%8D%A7%E8%8A%B1%23) `48.3K 🔥` `-51%`
1. [严屹宽一出场皇帝瞬间被衬成公公 (As soon as Yan Yikuan appeared, the emperor was instantly transformed into a father-in-law)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%B1%B9%E5%AE%BD%E4%B8%80%E5%87%BA%E5%9C%BA%E7%9A%87%E5%B8%9D%E7%9E%AC%E9%97%B4%E8%A2%AB%E8%A1%AC%E6%88%90%E5%85%AC%E5%85%AC%23) `47.8K 🔥` `-42%`
1. [王一博 巴黎也有回南天](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E5%B7%B4%E9%BB%8E%E4%B9%9F%E6%9C%89%E5%9B%9E%E5%8D%97%E5%A4%A9%23) `47.3K 🔥` `-36%`
1. [27岁女子挤痘痘后确诊2型糖尿病 (27-year-old woman diagnosed with type 2 diabetes after popping acne)](https://s.weibo.com/weibo?q=%2327%E5%B2%81%E5%A5%B3%E5%AD%90%E6%8C%A4%E7%97%98%E7%97%98%E5%90%8E%E7%A1%AE%E8%AF%8A2%E5%9E%8B%E7%B3%96%E5%B0%BF%E7%97%85%23) `46.8K 🔥` `-41%`
1. [伊朗亮底线 (Iran shows bottom line)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BA%AE%E5%BA%95%E7%BA%BF%23) `46.6K 🔥` `-36%`
1. [伊朗选出新最高领袖](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%80%89%E5%87%BA%E6%96%B0%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%23) `45.9K 🔥` `-62%`
1. [王毅回应两岸统一时间表 (Wang Yi responded to the timetable for cross-Strait reunification)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E5%9B%9E%E5%BA%94%E4%B8%A4%E5%B2%B8%E7%BB%9F%E4%B8%80%E6%97%B6%E9%97%B4%E8%A1%A8%23) `45.6K 🔥` `-46%`
1. [美军战斗力成谜](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%88%98%E6%96%97%E5%8A%9B%E6%88%90%E8%B0%9C%23) `45.5K 🔥` `-22%`
1. [时代少年团直播](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%9B%B4%E6%92%AD%23) `45.1K 🔥` `-49%`

Updated at 2026-03-09 01:41:17

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
