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

1. [柬埔寨一园区围殴中国人致1死3伤 (A Chinese man was beaten up in a park in Cambodia, killing one and injuring three others.)](https://s.weibo.com/weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E4%B8%80%E5%9B%AD%E5%8C%BA%E5%9B%B4%E6%AE%B4%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%87%B41%E6%AD%BB3%E4%BC%A4%23) `665.3K 🔥` `NEW`
1. [网民造谣中山出现洪汛被查](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%B0%91%E9%80%A0%E8%B0%A3%E4%B8%AD%E5%B1%B1%E5%87%BA%E7%8E%B0%E6%B4%AA%E6%B1%9B%E8%A2%AB%E6%9F%A5%23) `564.0K 🔥` `NEW`
1. [国乒围剿张本美和](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%9B%B4%E5%89%BF%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `513.8K 🔥` `NEW`
1. [成毅扔伞和粉丝一起淋雨](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E6%89%94%E4%BC%9E%E5%92%8C%E7%B2%89%E4%B8%9D%E4%B8%80%E8%B5%B7%E6%B7%8B%E9%9B%A8%23) `477.5K 🔥` `NEW`
1. [河南三支一扶成绩全部作废公平吗](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E6%88%90%E7%BB%A9%E5%85%A8%E9%83%A8%E4%BD%9C%E5%BA%9F%E5%85%AC%E5%B9%B3%E5%90%97%23) `444.8K 🔥` `NEW`
1. [福建沿海掀起数层楼高巨浪](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E6%B2%BF%E6%B5%B7%E6%8E%80%E8%B5%B7%E6%95%B0%E5%B1%82%E6%A5%BC%E9%AB%98%E5%B7%A8%E6%B5%AA%23) `425.7K 🔥` `NEW`
1. [武契奇回应泽连斯基首次来访](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E5%9B%9E%E5%BA%94%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E9%A6%96%E6%AC%A1%E6%9D%A5%E8%AE%BF%23) `261.7K 🔥` `NEW`
1. [吴磊刺激之夜剑来联动舞台](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E5%88%BA%E6%BF%80%E4%B9%8B%E5%A4%9C%E5%89%91%E6%9D%A5%E8%81%94%E5%8A%A8%E8%88%9E%E5%8F%B0%23) `229.8K 🔥` `NEW`
1. [和平精英年度返场](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%E5%B9%B4%E5%BA%A6%E8%BF%94%E5%9C%BA%23) `216.4K 🔥` `NEW`
1. [牛津大学一纸声明甩不了锅](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%B4%A5%E5%A4%A7%E5%AD%A6%E4%B8%80%E7%BA%B8%E5%A3%B0%E6%98%8E%E7%94%A9%E4%B8%8D%E4%BA%86%E9%94%85%23) `210.4K 🔥` `NEW`
1. [白海豚降水强度将大于巴威 (The intensity of precipitation in White Dolphin will be greater than that in Bawe)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E9%99%8D%E6%B0%B4%E5%BC%BA%E5%BA%A6%E5%B0%86%E5%A4%A7%E4%BA%8E%E5%B7%B4%E5%A8%81%23) `202.9K 🔥` `NEW`
1. [44岁父亲苦读5个月上岸985研究生](https://s.weibo.com/weibo?q=%2344%E5%B2%81%E7%88%B6%E4%BA%B2%E8%8B%A6%E8%AF%BB5%E4%B8%AA%E6%9C%88%E4%B8%8A%E5%B2%B8985%E7%A0%94%E7%A9%B6%E7%94%9F%23) `191.4K 🔥` `NEW`
1. [迪丽热巴香港造型](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%A6%99%E6%B8%AF%E9%80%A0%E5%9E%8B%23) `191.1K 🔥` `NEW`
1. [20岁中国男子在泰国被刺多刀身亡](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%90%E5%9C%A8%E6%B3%B0%E5%9B%BD%E8%A2%AB%E5%88%BA%E5%A4%9A%E5%88%80%E8%BA%AB%E4%BA%A1%23) `180.7K 🔥` `NEW`
1. [AI帮你开发以前要花钱的功能](https://s.weibo.com/weibo?q=%23AI%E5%B8%AE%E4%BD%A0%E5%BC%80%E5%8F%91%E4%BB%A5%E5%89%8D%E8%A6%81%E8%8A%B1%E9%92%B1%E7%9A%84%E5%8A%9F%E8%83%BD%23) `178.7K 🔥` `NEW`
1. [做AI短剧后期被逼成导演](https://s.weibo.com/weibo?q=%23%E5%81%9AAI%E7%9F%AD%E5%89%A7%E5%90%8E%E6%9C%9F%E8%A2%AB%E9%80%BC%E6%88%90%E5%AF%BC%E6%BC%94%23) `177.6K 🔥` `NEW`
1. [田曦薇化的妆被质疑 (Tian Xiwei’s makeup was questioned)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%8C%96%E7%9A%84%E5%A6%86%E8%A2%AB%E8%B4%A8%E7%96%91%23) `1.4M 🔥` `+27%`
1. [微博文化之夜之这是谁](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%B9%8B%E5%A4%9C%E4%B9%8B%E8%BF%99%E6%98%AF%E8%B0%81%23) `891.6K 🔥` `+49%`
1. [女明星在用的蚕丝卫生巾 (Silk sanitary napkins used by female celebrities)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%98%8E%E6%98%9F%E5%9C%A8%E7%94%A8%E7%9A%84%E8%9A%95%E4%B8%9D%E5%8D%AB%E7%94%9F%E5%B7%BE%23) `721.3K 🔥` `+27%`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `488.1K 🔥` `+79%`
1. [曾辉韩雨彤红毯状态](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E9%9F%A9%E9%9B%A8%E5%BD%A4%E7%BA%A2%E6%AF%AF%E7%8A%B6%E6%80%81%23) `440.8K 🔥` `+63%`
1. [田曦薇COS和平精英甜包](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87COS%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%E7%94%9C%E5%8C%85%23) `440.6K 🔥` `+51%`
1. [晚晚疑似怀孕 (Wanwan is suspected to be pregnant)](https://s.weibo.com/weibo?q=%23%E6%99%9A%E6%99%9A%E7%96%91%E4%BC%BC%E6%80%80%E5%AD%95%23) `425.3K 🔥` `+49%`
1. [黄土高原上的绿色长征 (The Green Long March on the Loess Plateau)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%9C%9F%E9%AB%98%E5%8E%9F%E4%B8%8A%E7%9A%84%E7%BB%BF%E8%89%B2%E9%95%BF%E5%BE%81%23) `722.2K 🔥`
1. [只有小时候发烧才有这种感觉 (I only felt like this when I had a fever when I was a child)](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E5%B0%8F%E6%97%B6%E5%80%99%E5%8F%91%E7%83%A7%E6%89%8D%E6%9C%89%E8%BF%99%E7%A7%8D%E6%84%9F%E8%A7%89%23) `720.9K 🔥`
1. [沈腾演技 (Shen Teng's acting skills)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%BC%94%E6%8A%80%23) `598.4K 🔥`
1. [台风白海豚 (Typhoon White Dolphin)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `518.4K 🔥`
1. [敖瑞鹏王玉雯正太扭腰来了](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%AD%A3%E5%A4%AA%E6%89%AD%E8%85%B0%E6%9D%A5%E4%BA%86%23) `458.6K 🔥`
1. [情侣平潭翻墙拍日出坠崖 (Couple climbs over wall in Pingtan to take photos of sunrise and falls off cliff)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E5%B9%B3%E6%BD%AD%E7%BF%BB%E5%A2%99%E6%8B%8D%E6%97%A5%E5%87%BA%E5%9D%A0%E5%B4%96%23) `457.3K 🔥`
1. [网传张凌赫准备考研了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%87%86%E5%A4%87%E8%80%83%E7%A0%94%E4%BA%86%23) `454.5K 🔥`
1. [苹果AI 千问](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CAI%20%E5%8D%83%E9%97%AE%23) `451.1K 🔥`
1. [A股存储巨头定增大幅溢价 (A-share storage giant plans to increase price at a substantial premium)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%AD%98%E5%82%A8%E5%B7%A8%E5%A4%B4%E5%AE%9A%E5%A2%9E%E5%A4%A7%E5%B9%85%E6%BA%A2%E4%BB%B7%23) `448.3K 🔥`
1. [日媒称华为领先日本整整一代](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E7%A7%B0%E5%8D%8E%E4%B8%BA%E9%A2%86%E5%85%88%E6%97%A5%E6%9C%AC%E6%95%B4%E6%95%B4%E4%B8%80%E4%BB%A3%23) `440.9K 🔥`
1. [小夜灯 性早熟](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%9C%E7%81%AF%20%E6%80%A7%E6%97%A9%E7%86%9F%23) `435.5K 🔥`
1. [王源 巡演看一场少一场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%20%E5%B7%A1%E6%BC%94%E7%9C%8B%E4%B8%80%E5%9C%BA%E5%B0%91%E4%B8%80%E5%9C%BA%23) `420.2K 🔥`
1. [这种手机壳可能是医疗垃圾做的](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E6%89%8B%E6%9C%BA%E5%A3%B3%E5%8F%AF%E8%83%BD%E6%98%AF%E5%8C%BB%E7%96%97%E5%9E%83%E5%9C%BE%E5%81%9A%E7%9A%84%23) `398.1K 🔥`
1. [西村力演唱会的发言](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E5%8F%91%E8%A8%80%23) `386.1K 🔥`
1. [SNH48总选排名](https://s.weibo.com/weibo?q=%23SNH48%E6%80%BB%E9%80%89%E6%8E%92%E5%90%8D%23) `224.4K 🔥`
1. [田曦薇开枪wink (Tian Xiwei shoots wink)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%80%E6%9E%AAwink%23) `223.5K 🔥`
1. [西村力演唱会的状态 (Nishimura Riki's concert status)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E7%8A%B6%E6%80%81%23) `177.1K 🔥`
1. [奥德赛 (Odyssey)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `515.8K 🔥` `-38%`
1. [陈伟霆说我还以为去了成毅的演唱会 (William Chan said I thought I went to Cheng Yi’s concert)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E8%AF%B4%E6%88%91%E8%BF%98%E4%BB%A5%E4%B8%BA%E5%8E%BB%E4%BA%86%E6%88%90%E6%AF%85%E7%9A%84%E6%BC%94%E5%94%B1%E4%BC%9A%23) `348.9K 🔥` `-35%`
1. [常吃4种食物不易得胃癌](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%90%834%E7%A7%8D%E9%A3%9F%E7%89%A9%E4%B8%8D%E6%98%93%E5%BE%97%E8%83%83%E7%99%8C%23) `280.1K 🔥` `-36%`
1. [孙政拉二胡](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%94%BF%E6%8B%89%E4%BA%8C%E8%83%A1%23) `275.8K 🔥` `-29%`
1. [白海豚开始发力了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%BC%80%E5%A7%8B%E5%8F%91%E5%8A%9B%E4%BA%86%23) `259.6K 🔥` `-52%`
1. [爷爷不泡茶 店员打人](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%8D%E6%B3%A1%E8%8C%B6%20%E5%BA%97%E5%91%98%E6%89%93%E4%BA%BA%23) `259.0K 🔥` `-35%`
1. [任嘉伦红毯气场全开](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%E7%BA%A2%E6%AF%AF%E6%B0%94%E5%9C%BA%E5%85%A8%E5%BC%80%23) `258.2K 🔥` `-33%`
1. [丁禹兮红包](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%BA%A2%E5%8C%85%23) `254.8K 🔥` `-49%`
1. [AG对战KSG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98KSG%23) `227.6K 🔥` `-58%`
1. [王玉雯COS和平精英樱桃泡泡 (Wang Yuwen COS Peace Elite Cherry Bubble)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AFCOS%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%E6%A8%B1%E6%A1%83%E6%B3%A1%E6%B3%A1%23) `176.4K 🔥` `-62%`
1. [张凌赫参加阿维塔07L上市发布会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%82%E5%8A%A0%E9%98%BF%E7%BB%B4%E5%A1%9407L%E4%B8%8A%E5%B8%82%E5%8F%91%E5%B8%83%E4%BC%9A%23) `173.6K 🔥` `-62%`
1. [宋茜COS黯羽织刑唱跳舞台](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%8C%9CCOS%E9%BB%AF%E7%BE%BD%E7%BB%87%E5%88%91%E5%94%B1%E8%B7%B3%E8%88%9E%E5%8F%B0%23) `170.2K 🔥` `-62%`

Updated at 2026-08-08 23:25:02

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
