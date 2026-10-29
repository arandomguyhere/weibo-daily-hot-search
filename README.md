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

1. [三丽鸥致歉](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%B8%BD%E9%B8%A5%E8%87%B4%E6%AD%89%23) `2.0M 🔥` `NEW`
1. [第140届广交会第二期圆满收官](https://s.weibo.com/weibo?q=%23%E7%AC%AC140%E5%B1%8A%E5%B9%BF%E4%BA%A4%E4%BC%9A%E7%AC%AC%E4%BA%8C%E6%9C%9F%E5%9C%86%E6%BB%A1%E6%94%B6%E5%AE%98%23) `768.1K 🔥` `NEW`
1. [美联储主席宣布将减少议息频次](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%E4%B8%BB%E5%B8%AD%E5%AE%A3%E5%B8%83%E5%B0%86%E5%87%8F%E5%B0%91%E8%AE%AE%E6%81%AF%E9%A2%91%E6%AC%A1%23) `377.5K 🔥` `NEW`
1. [LYON对战IG](https://s.weibo.com/weibo?q=%23LYON%E5%AF%B9%E6%88%98IG%23) `373.5K 🔥` `NEW`
1. [王腾今日宜休发布会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E4%BB%8A%E6%97%A5%E5%AE%9C%E4%BC%91%E5%8F%91%E5%B8%83%E4%BC%9A%23) `363.8K 🔥` `NEW`
1. [苹果发布会](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%23) `352.3K 🔥` `NEW`
1. [厉娜怒吼许飞我所有的经济损失呢](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E6%80%92%E5%90%BC%E8%AE%B8%E9%A3%9E%E6%88%91%E6%89%80%E6%9C%89%E7%9A%84%E7%BB%8F%E6%B5%8E%E6%8D%9F%E5%A4%B1%E5%91%A2%23) `307.8K 🔥` `NEW`
1. [姆巴佩恐面临天文数字赔偿](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%81%90%E9%9D%A2%E4%B8%B4%E5%A4%A9%E6%96%87%E6%95%B0%E5%AD%97%E8%B5%94%E5%81%BF%23) `293.4K 🔥` `NEW`
1. [原来演唱会门票是这样抢的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%BC%94%E5%94%B1%E4%BC%9A%E9%97%A8%E7%A5%A8%E6%98%AF%E8%BF%99%E6%A0%B7%E6%8A%A2%E7%9A%84%23) `280.2K 🔥` `NEW`
1. [德国与日本将加强军事合作](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E4%B8%8E%E6%97%A5%E6%9C%AC%E5%B0%86%E5%8A%A0%E5%BC%BA%E5%86%9B%E4%BA%8B%E5%90%88%E4%BD%9C%23) `234.3K 🔥` `NEW`
1. [看完工作责任心锐减了百分之五十](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%AE%8C%E5%B7%A5%E4%BD%9C%E8%B4%A3%E4%BB%BB%E5%BF%83%E9%94%90%E5%87%8F%E4%BA%86%E7%99%BE%E5%88%86%E4%B9%8B%E4%BA%94%E5%8D%81%23) `227.0K 🔥` `NEW`
1. [开拓者将杨瀚森下放至G联盟混音队](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8B%93%E8%80%85%E5%B0%86%E6%9D%A8%E7%80%9A%E6%A3%AE%E4%B8%8B%E6%94%BE%E8%87%B3G%E8%81%94%E7%9B%9F%E6%B7%B7%E9%9F%B3%E9%98%9F%23) `196.3K 🔥` `NEW`
1. [曝天娱资源未向李宇春倾斜](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A4%A9%E5%A8%B1%E8%B5%84%E6%BA%90%E6%9C%AA%E5%90%91%E6%9D%8E%E5%AE%87%E6%98%A5%E5%80%BE%E6%96%9C%23) `192.3K 🔥` `NEW`
1. [张若昀全面进入大导演男主阶段](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E5%85%A8%E9%9D%A2%E8%BF%9B%E5%85%A5%E5%A4%A7%E5%AF%BC%E6%BC%94%E7%94%B7%E4%B8%BB%E9%98%B6%E6%AE%B5%23) `182.3K 🔥` `NEW`
1. [电视剧铁证](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%E9%93%81%E8%AF%81%23) `179.3K 🔥` `NEW`
1. [心眼多本质是智力的代偿](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%9C%BC%E5%A4%9A%E6%9C%AC%E8%B4%A8%E6%98%AF%E6%99%BA%E5%8A%9B%E7%9A%84%E4%BB%A3%E5%81%BF%23) `179.0K 🔥` `NEW`
1. [吴磊这一声剑来太权威了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E8%BF%99%E4%B8%80%E5%A3%B0%E5%89%91%E6%9D%A5%E5%A4%AA%E6%9D%83%E5%A8%81%E4%BA%86%23) `164.1K 🔥` `NEW`
1. [孟子义王鹤棣将门独后预告](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E9%A2%84%E5%91%8A%23) `144.8K 🔥` `NEW`
1. [T1晋级S16八强](https://s.weibo.com/weibo?q=%23T1%E6%99%8B%E7%BA%A7S16%E5%85%AB%E5%BC%BA%23) `144.6K 🔥` `NEW`
1. [触控版苹果笔记本真机长这样](https://s.weibo.com/weibo?q=%23%E8%A7%A6%E6%8E%A7%E7%89%88%E8%8B%B9%E6%9E%9C%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%9C%9F%E6%9C%BA%E9%95%BF%E8%BF%99%E6%A0%B7%23) `138.9K 🔥` `NEW`
1. [腾讯招商大会剧集站内热度](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E6%8B%9B%E5%95%86%E5%A4%A7%E4%BC%9A%E5%89%A7%E9%9B%86%E7%AB%99%E5%86%85%E7%83%AD%E5%BA%A6%23) `133.1K 🔥` `NEW`
1. [王彦霖回复姜妍我牌子狗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BD%A6%E9%9C%96%E5%9B%9E%E5%A4%8D%E5%A7%9C%E5%A6%8D%E6%88%91%E7%89%8C%E5%AD%90%E7%8B%97%23) `131.5K 🔥` `NEW`
1. [谷歌三季度营收不及预期盘后暴跌](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E6%AD%8C%E4%B8%89%E5%AD%A3%E5%BA%A6%E8%90%A5%E6%94%B6%E4%B8%8D%E5%8F%8A%E9%A2%84%E6%9C%9F%E7%9B%98%E5%90%8E%E6%9A%B4%E8%B7%8C%23) `131.3K 🔥` `NEW`
1. [管泽元说TheShy太关键了](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%E8%AF%B4TheShy%E5%A4%AA%E5%85%B3%E9%94%AE%E4%BA%86%23) `127.4K 🔥` `NEW`
1. [offer8大家都以为是芒果的综艺](https://s.weibo.com/weibo?q=%23offer8%E5%A4%A7%E5%AE%B6%E9%83%BD%E4%BB%A5%E4%B8%BA%E6%98%AF%E8%8A%92%E6%9E%9C%E7%9A%84%E7%BB%BC%E8%89%BA%23) `127.0K 🔥` `NEW`
1. [许飞 姐姐我等你](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%20%E5%A7%90%E5%A7%90%E6%88%91%E7%AD%89%E4%BD%A0%23) `125.0K 🔥` `NEW`
1. [62岁健身阿姨用状态重新定义年龄](https://s.weibo.com/weibo?q=%2362%E5%B2%81%E5%81%A5%E8%BA%AB%E9%98%BF%E5%A7%A8%E7%94%A8%E7%8A%B6%E6%80%81%E9%87%8D%E6%96%B0%E5%AE%9A%E4%B9%89%E5%B9%B4%E9%BE%84%23) `121.8K 🔥` `NEW`
1. [今天好好吃](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E5%A5%BD%E5%A5%BD%E5%90%83%23) `113.1K 🔥` `NEW`
1. [中年人心血管体检性价比最高](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B9%B4%E4%BA%BA%E5%BF%83%E8%A1%80%E7%AE%A1%E4%BD%93%E6%A3%80%E6%80%A7%E4%BB%B7%E6%AF%94%E6%9C%80%E9%AB%98%23) `106.4K 🔥` `NEW`
1. [T1无压力拿下MKOI](https://s.weibo.com/weibo?q=%23T1%E6%97%A0%E5%8E%8B%E5%8A%9B%E6%8B%BF%E4%B8%8BMKOI%23) `98.3K 🔥` `NEW`
1. [西班牙列车事故幸存者发声](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%88%97%E8%BD%A6%E4%BA%8B%E6%95%85%E5%B9%B8%E5%AD%98%E8%80%85%E5%8F%91%E5%A3%B0%23) `97.8K 🔥` `NEW`
1. [NEON编舞师情商](https://s.weibo.com/weibo?q=%23NEON%E7%BC%96%E8%88%9E%E5%B8%88%E6%83%85%E5%95%86%23) `95.9K 🔥` `NEW`
1. [西班牙列车相撞已致68死](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%88%97%E8%BD%A6%E7%9B%B8%E6%92%9E%E5%B7%B2%E8%87%B468%E6%AD%BB%23) `960.7K 🔥` `+1524%`
1. [上淘宝0.01元抽独家惊喜盒](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B7%98%E5%AE%9D0.01%E5%85%83%E6%8A%BD%E7%8B%AC%E5%AE%B6%E6%83%8A%E5%96%9C%E7%9B%92%23) `732.4K 🔥` `+1280%`
1. [女子欠1700元被限高公开照片](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%AC%A01700%E5%85%83%E8%A2%AB%E9%99%90%E9%AB%98%E5%85%AC%E5%BC%80%E7%85%A7%E7%89%87%23) `676.6K 🔥` `+554%`
1. [劣迹网红换号复活暴露平台监管漏洞](https://s.weibo.com/weibo?q=%23%E5%8A%A3%E8%BF%B9%E7%BD%91%E7%BA%A2%E6%8D%A2%E5%8F%B7%E5%A4%8D%E6%B4%BB%E6%9A%B4%E9%9C%B2%E5%B9%B3%E5%8F%B0%E7%9B%91%E7%AE%A1%E6%BC%8F%E6%B4%9E%23) `321.5K 🔥` `+820%`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `312.3K 🔥` `+756%`
1. [巴基斯坦对台湾航司关闭领空](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E5%AF%B9%E5%8F%B0%E6%B9%BE%E8%88%AA%E5%8F%B8%E5%85%B3%E9%97%AD%E9%A2%86%E7%A9%BA%23) `309.9K 🔥` `+504%`
1. [三丽鸥将与抹黑中国日剧再次联名](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%B8%BD%E9%B8%A5%E5%B0%86%E4%B8%8E%E6%8A%B9%E9%BB%91%E4%B8%AD%E5%9B%BD%E6%97%A5%E5%89%A7%E5%86%8D%E6%AC%A1%E8%81%94%E5%90%8D%23) `296.1K 🔥` `+744%`
1. [已故演员高秀敏被印上祭祀用品](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E6%95%85%E6%BC%94%E5%91%98%E9%AB%98%E7%A7%80%E6%95%8F%E8%A2%AB%E5%8D%B0%E4%B8%8A%E7%A5%AD%E7%A5%80%E7%94%A8%E5%93%81%23) `280.4K 🔥` `+706%`
1. [剑来](https://s.weibo.com/weibo?q=%23%E5%89%91%E6%9D%A5%23) `220.4K 🔥` `+527%`
1. [每天吃四个鸡蛋一个月血脂会怎样](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%90%83%E5%9B%9B%E4%B8%AA%E9%B8%A1%E8%9B%8B%E4%B8%80%E4%B8%AA%E6%9C%88%E8%A1%80%E8%84%82%E4%BC%9A%E6%80%8E%E6%A0%B7%23) `190.8K 🔥` `+574%`
1. [刘旸 TOP](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%97%B8%20TOP%23) `184.8K 🔥` `+553%`
1. [王一博怕冰淇淋球掉小抗议了一下](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%80%95%E5%86%B0%E6%B7%87%E6%B7%8B%E7%90%83%E6%8E%89%E5%B0%8F%E6%8A%97%E8%AE%AE%E4%BA%86%E4%B8%80%E4%B8%8B%23) `176.5K 🔥` `+526%`
1. [坠亡幼童父亲曾两次网购窗户安全锁](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%B9%BC%E7%AB%A5%E7%88%B6%E4%BA%B2%E6%9B%BE%E4%B8%A4%E6%AC%A1%E7%BD%91%E8%B4%AD%E7%AA%97%E6%88%B7%E5%AE%89%E5%85%A8%E9%94%81%23) `166.9K 🔥` `+379%`
1. [西班牙宣布全国哀悼3天](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%AE%A3%E5%B8%83%E5%85%A8%E5%9B%BD%E5%93%80%E6%82%BC3%E5%A4%A9%23) `144.3K 🔥` `+418%`
1. [现在就出发5 金晨](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%915%20%E9%87%91%E6%99%A8%23) `132.8K 🔥` `+279%`
1. [开始推理吧官宣第五季](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A7%E5%AE%98%E5%AE%A3%E7%AC%AC%E4%BA%94%E5%AD%A3%23) `131.6K 🔥` `+286%`
1. [皇马在1.8亿粉平台发布道歉](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E5%9C%A81.8%E4%BA%BF%E7%B2%89%E5%B9%B3%E5%8F%B0%E5%8F%91%E5%B8%83%E9%81%93%E6%AD%89%23) `125.0K 🔥` `+342%`
1. [三甲医生回应女子被蜱虫咬伤后瘫痪](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E8%A2%AB%E8%9C%B1%E8%99%AB%E5%92%AC%E4%BC%A4%E5%90%8E%E7%98%AB%E7%97%AA%23) `115.3K 🔥` `+200%`
1. [樊振东说很荣幸走进棒球世界](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%AF%B4%E5%BE%88%E8%8D%A3%E5%B9%B8%E8%B5%B0%E8%BF%9B%E6%A3%92%E7%90%83%E4%B8%96%E7%95%8C%23) `104.5K 🔥` `+269%`

Updated at 2026-10-29 08:20:05

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
