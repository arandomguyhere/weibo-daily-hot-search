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

1. [支付宝 假APP](https://s.weibo.com/weibo?q=%23%E6%94%AF%E4%BB%98%E5%AE%9D%20%E5%81%87APP%23) `3.1M 🔥` `NEW`
1. [两场展会看中国机遇](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%9C%BA%E5%B1%95%E4%BC%9A%E7%9C%8B%E4%B8%AD%E5%9B%BD%E6%9C%BA%E9%81%87%23) `836.1K 🔥` `NEW`
1. [短剧版左耳女主是黎吧啦](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E7%89%88%E5%B7%A6%E8%80%B3%E5%A5%B3%E4%B8%BB%E6%98%AF%E9%BB%8E%E5%90%A7%E5%95%A6%23) `277.0K 🔥` `NEW`
1. [菲尔兹奖得主称AI与数学正严重错位](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%B0%94%E5%85%B9%E5%A5%96%E5%BE%97%E4%B8%BB%E7%A7%B0AI%E4%B8%8E%E6%95%B0%E5%AD%A6%E6%AD%A3%E4%B8%A5%E9%87%8D%E9%94%99%E4%BD%8D%23) `263.9K 🔥` `NEW`
1. [王一博蓝芩全球品牌代言人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%93%9D%E8%8A%A9%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `218.5K 🔥` `NEW`
1. [黎吧啦许弋二搭演员](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E5%90%A7%E5%95%A6%E8%AE%B8%E5%BC%8B%E4%BA%8C%E6%90%AD%E6%BC%94%E5%91%98%23) `212.9K 🔥` `NEW`
1. [关晓彤新剧里面喝的鸡汤是白开水](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%96%B0%E5%89%A7%E9%87%8C%E9%9D%A2%E5%96%9D%E7%9A%84%E9%B8%A1%E6%B1%A4%E6%98%AF%E7%99%BD%E5%BC%80%E6%B0%B4%23) `212.4K 🔥` `NEW`
1. [姆巴佩称金球奖应颁给特别球员](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%A7%B0%E9%87%91%E7%90%83%E5%A5%96%E5%BA%94%E9%A2%81%E7%BB%99%E7%89%B9%E5%88%AB%E7%90%83%E5%91%98%23) `211.8K 🔥` `NEW`
1. [孙心然超越郑钦文青少年大满贯成绩](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%BF%83%E7%84%B6%E8%B6%85%E8%B6%8A%E9%83%91%E9%92%A6%E6%96%87%E9%9D%92%E5%B0%91%E5%B9%B4%E5%A4%A7%E6%BB%A1%E8%B4%AF%E6%88%90%E7%BB%A9%23) `211.2K 🔥` `NEW`
1. [郭文韬当爸](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%96%87%E9%9F%AC%E5%BD%93%E7%88%B8%23) `210.7K 🔥` `NEW`
1. [文韬全程陪伴佳佳生产vlog](https://s.weibo.com/weibo?q=%23%E6%96%87%E9%9F%AC%E5%85%A8%E7%A8%8B%E9%99%AA%E4%BC%B4%E4%BD%B3%E4%BD%B3%E7%94%9F%E4%BA%A7vlog%23) `210.0K 🔥` `NEW`
1. [泰国网红僧侣已被还俗剥夺僧籍](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E7%BD%91%E7%BA%A2%E5%83%A7%E4%BE%A3%E5%B7%B2%E8%A2%AB%E8%BF%98%E4%BF%97%E5%89%A5%E5%A4%BA%E5%83%A7%E7%B1%8D%23) `209.4K 🔥` `NEW`
1. [LadyGaga疑似代孕](https://s.weibo.com/weibo?q=%23LadyGaga%E7%96%91%E4%BC%BC%E4%BB%A3%E5%AD%95%23) `208.9K 🔥` `NEW`
1. [杨幂上线回复祝福](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E4%B8%8A%E7%BA%BF%E5%9B%9E%E5%A4%8D%E7%A5%9D%E7%A6%8F%23) `208.5K 🔥` `NEW`
1. [华为MateXT2开售即售罄](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMateXT2%E5%BC%80%E5%94%AE%E5%8D%B3%E5%94%AE%E7%BD%84%23) `207.9K 🔥` `NEW`
1. [欧阳娜娜说要把签名签到卖不出去](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E8%AF%B4%E8%A6%81%E6%8A%8A%E7%AD%BE%E5%90%8D%E7%AD%BE%E5%88%B0%E5%8D%96%E4%B8%8D%E5%87%BA%E5%8E%BB%23) `206.7K 🔥` `NEW`
1. [谭维维早春晴朗有些情节倒回去看10遍](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E7%BB%B4%E7%BB%B4%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E6%9C%89%E4%BA%9B%E6%83%85%E8%8A%82%E5%80%92%E5%9B%9E%E5%8E%BB%E7%9C%8B10%E9%81%8D%23) `205.7K 🔥` `NEW`
1. [铁头把打假变生意维权变敲诈](https://s.weibo.com/weibo?q=%23%E9%93%81%E5%A4%B4%E6%8A%8A%E6%89%93%E5%81%87%E5%8F%98%E7%94%9F%E6%84%8F%E7%BB%B4%E6%9D%83%E5%8F%98%E6%95%B2%E8%AF%88%23) `205.4K 🔥` `NEW`
1. [教资](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%B5%84%23) `204.4K 🔥` `NEW`
1. [胃癌逐渐成年轻化的原因](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E9%80%90%E6%B8%90%E6%88%90%E5%B9%B4%E8%BD%BB%E5%8C%96%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `204.3K 🔥` `NEW`
1. [iPhoneDuo分屏不可调整比例](https://s.weibo.com/weibo?q=%23iPhoneDuo%E5%88%86%E5%B1%8F%E4%B8%8D%E5%8F%AF%E8%B0%83%E6%95%B4%E6%AF%94%E4%BE%8B%23) `196.3K 🔥` `NEW`
1. [李凯尔说中国男篮有2人不会说英语](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%87%AF%E5%B0%94%E8%AF%B4%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E6%9C%892%E4%BA%BA%E4%B8%8D%E4%BC%9A%E8%AF%B4%E8%8B%B1%E8%AF%AD%23) `179.5K 🔥` `NEW`
1. [LadyGaga疑似当妈](https://s.weibo.com/weibo?q=%23LadyGaga%E7%96%91%E4%BC%BC%E5%BD%93%E5%A6%88%23) `163.0K 🔥` `NEW`
1. [日本博主暴雨中直播在排水沟洗头](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%8D%9A%E4%B8%BB%E6%9A%B4%E9%9B%A8%E4%B8%AD%E7%9B%B4%E6%92%AD%E5%9C%A8%E6%8E%92%E6%B0%B4%E6%B2%9F%E6%B4%97%E5%A4%B4%23) `163.0K 🔥` `NEW`
1. [一天已经不足24小时了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A4%A9%E5%B7%B2%E7%BB%8F%E4%B8%8D%E8%B6%B324%E5%B0%8F%E6%97%B6%E4%BA%86%23) `162.9K 🔥` `NEW`
1. [胡塞武装缴获大批美制装甲车](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%A1%9E%E6%AD%A6%E8%A3%85%E7%BC%B4%E8%8E%B7%E5%A4%A7%E6%89%B9%E7%BE%8E%E5%88%B6%E8%A3%85%E7%94%B2%E8%BD%A6%23) `162.9K 🔥` `NEW`
1. [刺棠 梁洁](https://s.weibo.com/weibo?q=%23%E5%88%BA%E6%A3%A0%20%E6%A2%81%E6%B4%81%23) `162.8K 🔥` `NEW`
1. [教资作文](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%B5%84%E4%BD%9C%E6%96%87%23) `162.8K 🔥` `NEW`
1. [刺棠阵容官宣](https://s.weibo.com/weibo?q=%23%E5%88%BA%E6%A3%A0%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `162.7K 🔥` `NEW`
1. [教资科一](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%B5%84%E7%A7%91%E4%B8%80%23) `162.6K 🔥` `NEW`
1. [卢昱晓张凌赫身高差](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BA%AB%E9%AB%98%E5%B7%AE%23) `162.6K 🔥` `NEW`
1. [蒋丽莎曝陈浩民曾给前女友买房](https://s.weibo.com/weibo?q=%23%E8%92%8B%E4%B8%BD%E8%8E%8E%E6%9B%9D%E9%99%88%E6%B5%A9%E6%B0%91%E6%9B%BE%E7%BB%99%E5%89%8D%E5%A5%B3%E5%8F%8B%E4%B9%B0%E6%88%BF%23) `162.5K 🔥` `NEW`
1. [有家可回的感觉真的太踏实了](https://s.weibo.com/weibo?q=%23%E6%9C%89%E5%AE%B6%E5%8F%AF%E5%9B%9E%E7%9A%84%E6%84%9F%E8%A7%89%E7%9C%9F%E7%9A%84%E5%A4%AA%E8%B8%8F%E5%AE%9E%E4%BA%86%23) `155.7K 🔥` `NEW`
1. [刺棠](https://s.weibo.com/weibo?q=%23%E5%88%BA%E6%A3%A0%23) `152.0K 🔥` `NEW`
1. [举报后遭轮番查是巧合还是报复](https://s.weibo.com/weibo?q=%23%E4%B8%BE%E6%8A%A5%E5%90%8E%E9%81%AD%E8%BD%AE%E7%95%AA%E6%9F%A5%E6%98%AF%E5%B7%A7%E5%90%88%E8%BF%98%E6%98%AF%E6%8A%A5%E5%A4%8D%23) `137.8K 🔥` `NEW`
1. [张凌赫李卿逐玉后二搭](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%9D%8E%E5%8D%BF%E9%80%90%E7%8E%89%E5%90%8E%E4%BA%8C%E6%90%AD%23) `136.6K 🔥` `NEW`
1. [称遭公职人员性侵女子发声](https://s.weibo.com/weibo?q=%23%E7%A7%B0%E9%81%AD%E5%85%AC%E8%81%8C%E4%BA%BA%E5%91%98%E6%80%A7%E4%BE%B5%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `135.1K 🔥` `NEW`
1. [白鹿红秀九月刊封面](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BA%A2%E7%A7%80%E4%B9%9D%E6%9C%88%E5%88%8A%E5%B0%81%E9%9D%A2%23) `133.0K 🔥` `NEW`
1. [2026KPL夏决首发名单](https://s.weibo.com/weibo?q=%232026KPL%E5%A4%8F%E5%86%B3%E9%A6%96%E5%8F%91%E5%90%8D%E5%8D%95%23) `132.9K 🔥` `NEW`
1. [宜宾警方复核镇干部被指强奸案](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%E8%AD%A6%E6%96%B9%E5%A4%8D%E6%A0%B8%E9%95%87%E5%B9%B2%E9%83%A8%E8%A2%AB%E6%8C%87%E5%BC%BA%E5%A5%B8%E6%A1%88%23) `132.6K 🔥` `NEW`
1. [铁头案宣判现场有人叫嚣老子不服](https://s.weibo.com/weibo?q=%23%E9%93%81%E5%A4%B4%E6%A1%88%E5%AE%A3%E5%88%A4%E7%8E%B0%E5%9C%BA%E6%9C%89%E4%BA%BA%E5%8F%AB%E5%9A%A3%E8%80%81%E5%AD%90%E4%B8%8D%E6%9C%8D%23) `130.9K 🔥` `NEW`
1. [凡人修仙传](https://s.weibo.com/weibo?q=%23%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%23) `128.4K 🔥` `NEW`
1. [刺棠首发概念片](https://s.weibo.com/weibo?q=%23%E5%88%BA%E6%A3%A0%E9%A6%96%E5%8F%91%E6%A6%82%E5%BF%B5%E7%89%87%23) `122.8K 🔥` `NEW`
1. [日本博主在排水沟洗头后高烧尿血](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%8D%9A%E4%B8%BB%E5%9C%A8%E6%8E%92%E6%B0%B4%E6%B2%9F%E6%B4%97%E5%A4%B4%E5%90%8E%E9%AB%98%E7%83%A7%E5%B0%BF%E8%A1%80%23) `122.7K 🔥` `NEW`
1. [法考](https://s.weibo.com/weibo?q=%23%E6%B3%95%E8%80%83%23) `1.1M 🔥` `+418%`
1. [华为展翼三折叠今日开售](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%B1%95%E7%BF%BC%E4%B8%89%E6%8A%98%E5%8F%A0%E4%BB%8A%E6%97%A5%E5%BC%80%E5%94%AE%23) `540.5K 🔥` `+56%`
1. [宁波大学开学典礼突降暴雨校长只讲3句话](https://s.weibo.com/weibo?q=%23%E5%AE%81%E6%B3%A2%E5%A4%A7%E5%AD%A6%E5%BC%80%E5%AD%A6%E5%85%B8%E7%A4%BC%E7%AA%81%E9%99%8D%E6%9A%B4%E9%9B%A8%E6%A0%A1%E9%95%BF%E5%8F%AA%E8%AE%B23%E5%8F%A5%E8%AF%9D%23) `288.6K 🔥` `+56%`
1. [半夜宝爸将宝妈抱摔下床泡奶](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%A4%9C%E5%AE%9D%E7%88%B8%E5%B0%86%E5%AE%9D%E5%A6%88%E6%8A%B1%E6%91%94%E4%B8%8B%E5%BA%8A%E6%B3%A1%E5%A5%B6%23) `207.0K 🔥`
1. [胃病向胃癌发展有5个征兆](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%97%85%E5%90%91%E8%83%83%E7%99%8C%E5%8F%91%E5%B1%95%E6%9C%895%E4%B8%AA%E5%BE%81%E5%85%86%23) `204.1K 🔥`
1. [苹果 小米](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%20%E5%B0%8F%E7%B1%B3%23) `175.9K 🔥`
1. [王俊凯23年长文现在依旧有效](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF23%E5%B9%B4%E9%95%BF%E6%96%87%E7%8E%B0%E5%9C%A8%E4%BE%9D%E6%97%A7%E6%9C%89%E6%95%88%23) `153.1K 🔥`
1. [女演员被指卖韭菜盒子](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E8%A2%AB%E6%8C%87%E5%8D%96%E9%9F%AD%E8%8F%9C%E7%9B%92%E5%AD%90%23) `133.4K 🔥` `-29%`

Updated at 2026-09-12 12:43:21

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
