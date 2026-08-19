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

1. [笔试前13名全淘汰 倒数5名全逆袭 (The top 13 in the written test were all eliminated, and the bottom five were all counterattacked)](https://s.weibo.com/weibo?q=%23%E7%AC%94%E8%AF%95%E5%89%8D13%E5%90%8D%E5%85%A8%E6%B7%98%E6%B1%B0%20%E5%80%92%E6%95%B05%E5%90%8D%E5%85%A8%E9%80%86%E8%A2%AD%23) `1.6M 🔥` `NEW`
1. [给家的七夕情书](https://s.weibo.com/weibo?q=%23%E7%BB%99%E5%AE%B6%E7%9A%84%E4%B8%83%E5%A4%95%E6%83%85%E4%B9%A6%23) `612.5K 🔥` `NEW`
1. [AI吻戏尺度](https://s.weibo.com/weibo?q=%23AI%E5%90%BB%E6%88%8F%E5%B0%BA%E5%BA%A6%23) `333.6K 🔥` `NEW`
1. [苏翊鸣七夕晒9图](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E4%B8%83%E5%A4%95%E6%99%929%E5%9B%BE%23) `333.2K 🔥` `NEW`
1. [刘耀文克罗心耳钉](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%85%8B%E7%BD%97%E5%BF%83%E8%80%B3%E9%92%89%23) `332.9K 🔥` `NEW`
1. [唐嫣罗晋感情时间线](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E7%BD%97%E6%99%8B%E6%84%9F%E6%83%85%E6%97%B6%E9%97%B4%E7%BA%BF%23) `332.6K 🔥` `NEW`
1. [新郎称不共财产不共心](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%83%8E%E7%A7%B0%E4%B8%8D%E5%85%B1%E8%B4%A2%E4%BA%A7%E4%B8%8D%E5%85%B1%E5%BF%83%23) `332.4K 🔥` `NEW`
1. [韩国男子出行轨迹除了上班就是回家](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%94%B7%E5%AD%90%E5%87%BA%E8%A1%8C%E8%BD%A8%E8%BF%B9%E9%99%A4%E4%BA%86%E4%B8%8A%E7%8F%AD%E5%B0%B1%E6%98%AF%E5%9B%9E%E5%AE%B6%23) `332.3K 🔥` `NEW`
1. [旺旺官宣听劝版旺仔牛奶](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E5%AE%98%E5%AE%A3%E5%90%AC%E5%8A%9D%E7%89%88%E6%97%BA%E4%BB%94%E7%89%9B%E5%A5%B6%23) `332.0K 🔥` `NEW`
1. [孔雪儿看汪苏泷演唱会](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E7%9C%8B%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9A%23) `312.5K 🔥` `NEW`
1. [人民日报评酒局事件 (People’s Daily Wine Review Bureau Incident)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%23) `241.3K 🔥` `NEW`
1. [檀健次粤语绕口令念出鸡叫](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%B2%A4%E8%AF%AD%E7%BB%95%E5%8F%A3%E4%BB%A4%E5%BF%B5%E5%87%BA%E9%B8%A1%E5%8F%AB%23) `215.3K 🔥` `NEW`
1. [长这样的5种痣最容易癌变](https://s.weibo.com/weibo?q=%23%E9%95%BF%E8%BF%99%E6%A0%B7%E7%9A%845%E7%A7%8D%E7%97%A3%E6%9C%80%E5%AE%B9%E6%98%93%E7%99%8C%E5%8F%98%23) `215.1K 🔥` `NEW`
1. [张凌赫七夕祝福](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%83%E5%A4%95%E7%A5%9D%E7%A6%8F%23) `205.7K 🔥` `NEW`
1. [婚宴礼金里发现假钞](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%AE%B4%E7%A4%BC%E9%87%91%E9%87%8C%E5%8F%91%E7%8E%B0%E5%81%87%E9%92%9E%23) `179.6K 🔥` `NEW`
1. [公积金此次变化意味着什么 (What does this change to the provident fund mean?)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%AD%A4%E6%AC%A1%E5%8F%98%E5%8C%96%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `1.4M 🔥` `+35%`
1. [亚运礼服同源九牧王星耀系列 (Asian Games dress originates from Jiu Mu Wang Xingyao series)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E7%A4%BC%E6%9C%8D%E5%90%8C%E6%BA%90%E4%B9%9D%E7%89%A7%E7%8E%8B%E6%98%9F%E8%80%80%E7%B3%BB%E5%88%97%23) `1.4M 🔥` `+35%`
1. [黄金 (gold)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `1.4M 🔥` `+35%`
1. [空枪 李嘉诚儿子绑架案](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%20%E6%9D%8E%E5%98%89%E8%AF%9A%E5%84%BF%E5%AD%90%E7%BB%91%E6%9E%B6%E6%A1%88%23) `1.3M 🔥` `+32%`
1. [孟子义没有给cp让路的义务](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%B2%A1%E6%9C%89%E7%BB%99cp%E8%AE%A9%E8%B7%AF%E7%9A%84%E4%B9%89%E5%8A%A1%23) `521.2K 🔥` `+97%`
1. [胆子真是肥嘟嘟的](https://s.weibo.com/weibo?q=%23%E8%83%86%E5%AD%90%E7%9C%9F%E6%98%AF%E8%82%A5%E5%98%9F%E5%98%9F%E7%9A%84%23) `332.9K 🔥` `+77%`
1. [快算算你家的冰箱得房率](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E7%AE%97%E7%AE%97%E4%BD%A0%E5%AE%B6%E7%9A%84%E5%86%B0%E7%AE%B1%E5%BE%97%E6%88%BF%E7%8E%87%23) `216.3K 🔥` `+44%`
1. [12306回应买票占座放零食这座位能让吗](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E8%BF%99%E5%BA%A7%E4%BD%8D%E8%83%BD%E8%AE%A9%E5%90%97%23) `1.5M 🔥`
1. [空枪票房 (empty gun box office)](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%E7%A5%A8%E6%88%BF%23) `333.7K 🔥`
1. [女孩买空座放零食大姐求坐被拒绝](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%B9%B0%E7%A9%BA%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E5%A4%A7%E5%A7%90%E6%B1%82%E5%9D%90%E8%A2%AB%E6%8B%92%E7%BB%9D%23) `333.2K 🔥`
1. [外媒热议我国首次实现火箭陆地回收](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%AA%92%E7%83%AD%E8%AE%AE%E6%88%91%E5%9B%BD%E9%A6%96%E6%AC%A1%E5%AE%9E%E7%8E%B0%E7%81%AB%E7%AE%AD%E9%99%86%E5%9C%B0%E5%9B%9E%E6%94%B6%23) `332.6K 🔥`
1. [弟弟称哥哥刚确诊癌症嫂子就提离婚](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E7%A7%B0%E5%93%A5%E5%93%A5%E5%88%9A%E7%A1%AE%E8%AF%8A%E7%99%8C%E7%97%87%E5%AB%82%E5%AD%90%E5%B0%B1%E6%8F%90%E7%A6%BB%E5%A9%9A%23) `332.2K 🔥`
1. [网传迪丽热巴陈飞宇恋爱依据](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E6%81%8B%E7%88%B1%E4%BE%9D%E6%8D%AE%23) `332.1K 🔥`
1. [情侣领证男生把婚前财产都给女生 (When a couple gets a certificate, the boy gives all his pre-marital property to the girl)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E9%A2%86%E8%AF%81%E7%94%B7%E7%94%9F%E6%8A%8A%E5%A9%9A%E5%89%8D%E8%B4%A2%E4%BA%A7%E9%83%BD%E7%BB%99%E5%A5%B3%E7%94%9F%23) `308.3K 🔥`
1. [桃黑黑宣布暂时休息](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E5%AE%A3%E5%B8%83%E6%9A%82%E6%97%B6%E4%BC%91%E6%81%AF%23) `306.8K 🔥`
1. [女子车内出现死蛇臭了三天才发现](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BD%A6%E5%86%85%E5%87%BA%E7%8E%B0%E6%AD%BB%E8%9B%87%E8%87%AD%E4%BA%86%E4%B8%89%E5%A4%A9%E6%89%8D%E5%8F%91%E7%8E%B0%23) `304.4K 🔥`
1. [七夕 (Chinese Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%23) `262.1K 🔥`
1. [田曦薇 熟女风](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E7%86%9F%E5%A5%B3%E9%A3%8E%23) `220.6K 🔥`
1. [美国宣布扩大长期国债回购操作规模](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%AE%A3%E5%B8%83%E6%89%A9%E5%A4%A7%E9%95%BF%E6%9C%9F%E5%9B%BD%E5%80%BA%E5%9B%9E%E8%B4%AD%E6%93%8D%E4%BD%9C%E8%A7%84%E6%A8%A1%23) `215.1K 🔥`
1. [甲状腺不好常吃两种水果](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E4%B8%8D%E5%A5%BD%E5%B8%B8%E5%90%83%E4%B8%A4%E7%A7%8D%E6%B0%B4%E6%9E%9C%23) `207.3K 🔥`
1. [空枪 (empty gun)](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%23) `174.2K 🔥`
1. [难怪瘦的时候容易觉得疼](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E7%98%A6%E7%9A%84%E6%97%B6%E5%80%99%E5%AE%B9%E6%98%93%E8%A7%89%E5%BE%97%E7%96%BC%23) `641.3K 🔥` `-21%`
1. [七夕 去情人节化 (Chinese Valentine's Day becomes Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%20%E5%8E%BB%E6%83%85%E4%BA%BA%E8%8A%82%E5%8C%96%23) `484.8K 🔥` `-52%`
1. [吉祥空姐的发型](https://s.weibo.com/weibo?q=%23%E5%90%89%E7%A5%A5%E7%A9%BA%E5%A7%90%E7%9A%84%E5%8F%91%E5%9E%8B%23) `333.8K 🔥` `-67%`
1. [七夕但不对劲](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E4%BD%86%E4%B8%8D%E5%AF%B9%E5%8A%B2%23) `333.5K 🔥` `-59%`
1. [Jennie发长文](https://s.weibo.com/weibo?q=%23Jennie%E5%8F%91%E9%95%BF%E6%96%87%23) `333.4K 🔥` `-47%`
1. [左奇函陈奕恒香港路透 (Zuo Qihan Chen Yiheng Hong Kong Reuters)](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E9%99%88%E5%A5%95%E6%81%92%E9%A6%99%E6%B8%AF%E8%B7%AF%E9%80%8F%23) `333.0K 🔥` `-46%`
1. [上海地铁涨价 (Shanghai subway price increases)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E6%B6%A8%E4%BB%B7%23) `331.8K 🔥` `-46%`
1. [孙政吕思瞳直播](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%94%BF%E5%90%95%E6%80%9D%E7%9E%B3%E7%9B%B4%E6%92%AD%23) `251.1K 🔥` `-31%`
1. [孙红雷空降刘宇宁直播间](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E7%A9%BA%E9%99%8D%E5%88%98%E5%AE%87%E5%AE%81%E7%9B%B4%E6%92%AD%E9%97%B4%23) `238.4K 🔥` `-35%`
1. [王者新英雄王维 (King's New Hero Wang Wei)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E6%96%B0%E8%8B%B1%E9%9B%84%E7%8E%8B%E7%BB%B4%23) `236.2K 🔥` `-22%`
1. [山姆苹果干一包就是半个苹果](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E8%8B%B9%E6%9E%9C%E5%B9%B2%E4%B8%80%E5%8C%85%E5%B0%B1%E6%98%AF%E5%8D%8A%E4%B8%AA%E8%8B%B9%E6%9E%9C%23) `182.4K 🔥` `-38%`
1. [丁禹兮工作室道歉 (Ding Yuxi Studio apologizes)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%B7%A5%E4%BD%9C%E5%AE%A4%E9%81%93%E6%AD%89%23) `179.7K 🔥` `-31%`
1. [华系适合年轻人的车来了 (Chinese cars suitable for young people are here)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E7%B3%BB%E9%80%82%E5%90%88%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E8%BD%A6%E6%9D%A5%E4%BA%86%23) `171.8K 🔥` `-35%`
1. [Angelababy拿玫瑰花自拍](https://s.weibo.com/weibo?q=%23Angelababy%E6%8B%BF%E7%8E%AB%E7%91%B0%E8%8A%B1%E8%87%AA%E6%8B%8D%23) `168.6K 🔥` `-23%`

Updated at 2026-08-19 23:14:18

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
