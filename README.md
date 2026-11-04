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

1. [女子凌晨被陌生人钻被窝贴脸窥探](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%8C%E6%99%A8%E8%A2%AB%E9%99%8C%E7%94%9F%E4%BA%BA%E9%92%BB%E8%A2%AB%E7%AA%9D%E8%B4%B4%E8%84%B8%E7%AA%A5%E6%8E%A2%23) `1.5M 🔥` `NEW`
1. [TES对战IG比赛暂停](https://s.weibo.com/weibo?q=%23TES%E5%AF%B9%E6%88%98IG%E6%AF%94%E8%B5%9B%E6%9A%82%E5%81%9C%23) `1.4M 🔥` `NEW`
1. [2026中国广播电视精品创作大会](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E5%B9%BF%E6%92%AD%E7%94%B5%E8%A7%86%E7%B2%BE%E5%93%81%E5%88%9B%E4%BD%9C%E5%A4%A7%E4%BC%9A%23) `714.7K 🔥` `NEW`
1. [小鹏MONA L05火热提车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONA%20L05%E7%81%AB%E7%83%AD%E6%8F%90%E8%BD%A6%23) `713.2K 🔥` `NEW`
1. [红果短剧到底有多离谱](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E7%A6%BB%E8%B0%B1%23) `712.2K 🔥` `NEW`
1. [S16首个长暂停](https://s.weibo.com/weibo?q=%23S16%E9%A6%96%E4%B8%AA%E9%95%BF%E6%9A%82%E5%81%9C%23) `593.7K 🔥` `NEW`
1. [苹果天气突现-32](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%A4%A9%E6%B0%94%E7%AA%81%E7%8E%B0-32%23) `418.5K 🔥` `NEW`
1. [红果历史短剧有点出乎意料](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E5%8E%86%E5%8F%B2%E7%9F%AD%E5%89%A7%E6%9C%89%E7%82%B9%E5%87%BA%E4%B9%8E%E6%84%8F%E6%96%99%23) `418.3K 🔥` `NEW`
1. [ZUIAN来了吗](https://s.weibo.com/weibo?q=%23ZUIAN%E6%9D%A5%E4%BA%86%E5%90%97%23) `417.4K 🔥` `NEW`
1. [苹果客服回应天气离谱](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%94%E5%A4%A9%E6%B0%94%E7%A6%BB%E8%B0%B1%23) `416.1K 🔥` `NEW`
1. [易烊千玺和于适粉丝都发了澄清](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%92%8C%E4%BA%8E%E9%80%82%E7%B2%89%E4%B8%9D%E9%83%BD%E5%8F%91%E4%BA%86%E6%BE%84%E6%B8%85%23) `415.6K 🔥` `NEW`
1. [网友自称是厉娜接私活告密当事人](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E8%87%AA%E7%A7%B0%E6%98%AF%E5%8E%89%E5%A8%9C%E6%8E%A5%E7%A7%81%E6%B4%BB%E5%91%8A%E5%AF%86%E5%BD%93%E4%BA%8B%E4%BA%BA%23) `415.3K 🔥` `NEW`
1. [Wei杰斯好强](https://s.weibo.com/weibo?q=%23Wei%E6%9D%B0%E6%96%AF%E5%A5%BD%E5%BC%BA%23) `414.4K 🔥` `NEW`
1. [李钟硕新剧尺度](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%92%9F%E7%A1%95%E6%96%B0%E5%89%A7%E5%B0%BA%E5%BA%A6%23) `413.8K 🔥` `NEW`
1. [TES极限翻盘iG](https://s.weibo.com/weibo?q=%23TES%E6%9E%81%E9%99%90%E7%BF%BB%E7%9B%98iG%23) `413.5K 🔥` `NEW`
1. [黄子弘凡方辟谣已婚](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E6%96%B9%E8%BE%9F%E8%B0%A3%E5%B7%B2%E5%A9%9A%23) `412.8K 🔥` `NEW`
1. [气象局回应苹果天气APP预报极端天气](https://s.weibo.com/weibo?q=%23%E6%B0%94%E8%B1%A1%E5%B1%80%E5%9B%9E%E5%BA%94%E8%8B%B9%E6%9E%9C%E5%A4%A9%E6%B0%94APP%E9%A2%84%E6%8A%A5%E6%9E%81%E7%AB%AF%E5%A4%A9%E6%B0%94%23) `411.8K 🔥` `NEW`
1. [模仿李小龙的男孩10年后长不高了](https://s.weibo.com/weibo?q=%23%E6%A8%A1%E4%BB%BF%E6%9D%8E%E5%B0%8F%E9%BE%99%E7%9A%84%E7%94%B7%E5%AD%A910%E5%B9%B4%E5%90%8E%E9%95%BF%E4%B8%8D%E9%AB%98%E4%BA%86%23) `411.1K 🔥` `NEW`
1. [何炅 我画地为牢啊撒贝宁](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%20%E6%88%91%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%E5%95%8A%E6%92%92%E8%B4%9D%E5%AE%81%23) `410.4K 🔥` `NEW`
1. [TES对战IG](https://s.weibo.com/weibo?q=%23TES%E5%AF%B9%E6%88%98IG%23) `409.4K 🔥` `NEW`
1. [徐艺洋原本打算将罗正礼金全部退回](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E5%8E%9F%E6%9C%AC%E6%89%93%E7%AE%97%E5%B0%86%E7%BD%97%E6%AD%A3%E7%A4%BC%E9%87%91%E5%85%A8%E9%83%A8%E9%80%80%E5%9B%9E%23) `408.4K 🔥` `NEW`
1. [杨幂曾偷偷观察唐嫣](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9B%BE%E5%81%B7%E5%81%B7%E8%A7%82%E5%AF%9F%E5%94%90%E5%AB%A3%23) `407.7K 🔥` `NEW`
1. [iG打TES拿到赛点](https://s.weibo.com/weibo?q=%23iG%E6%89%93TES%E6%8B%BF%E5%88%B0%E8%B5%9B%E7%82%B9%23) `407.2K 🔥` `NEW`
1. [认知高的人一个明显信号](https://s.weibo.com/weibo?q=%23%E8%AE%A4%E7%9F%A5%E9%AB%98%E7%9A%84%E4%BA%BA%E4%B8%80%E4%B8%AA%E6%98%8E%E6%98%BE%E4%BF%A1%E5%8F%B7%23) `406.7K 🔥` `NEW`
1. [亚洲首富又换人](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%B4%B2%E9%A6%96%E5%AF%8C%E5%8F%88%E6%8D%A2%E4%BA%BA%23) `406.1K 🔥` `NEW`
1. [广州规定房东不得加收水电费](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E8%A7%84%E5%AE%9A%E6%88%BF%E4%B8%9C%E4%B8%8D%E5%BE%97%E5%8A%A0%E6%94%B6%E6%B0%B4%E7%94%B5%E8%B4%B9%23) `405.3K 🔥` `NEW`
1. [盛李豪说出乎意料地顺利](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E6%9D%8E%E8%B1%AA%E8%AF%B4%E5%87%BA%E4%B9%8E%E6%84%8F%E6%96%99%E5%9C%B0%E9%A1%BA%E5%88%A9%23) `405.0K 🔥` `NEW`
1. [尚公主被偷数据](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E8%A2%AB%E5%81%B7%E6%95%B0%E6%8D%AE%23) `403.5K 🔥` `NEW`
1. [媳妇规定的卫生间使用流程火了](https://s.weibo.com/weibo?q=%23%E5%AA%B3%E5%A6%87%E8%A7%84%E5%AE%9A%E7%9A%84%E5%8D%AB%E7%94%9F%E9%97%B4%E4%BD%BF%E7%94%A8%E6%B5%81%E7%A8%8B%E7%81%AB%E4%BA%86%23) `321.7K 🔥` `NEW`
1. [LPL](https://s.weibo.com/weibo?q=%23LPL%23) `321.7K 🔥` `NEW`
1. [二胎一般不会抑郁因为世界有秩序](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E8%83%8E%E4%B8%80%E8%88%AC%E4%B8%8D%E4%BC%9A%E6%8A%91%E9%83%81%E5%9B%A0%E4%B8%BA%E4%B8%96%E7%95%8C%E6%9C%89%E7%A7%A9%E5%BA%8F%23) `319.0K 🔥` `NEW`
1. [iG VN](https://s.weibo.com/weibo?q=%23iG%20VN%23) `231.2K 🔥` `NEW`
1. [红果短剧虚拟正义](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E8%99%9A%E6%8B%9F%E6%AD%A3%E4%B9%89%23) `227.8K 🔥` `NEW`
1. [法国已经有人三个人吃一个菜](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%B7%B2%E7%BB%8F%E6%9C%89%E4%BA%BA%E4%B8%89%E4%B8%AA%E4%BA%BA%E5%90%83%E4%B8%80%E4%B8%AA%E8%8F%9C%23) `219.3K 🔥` `NEW`
1. [许飞震惊到瞳孔放大](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E9%9C%87%E6%83%8A%E5%88%B0%E7%9E%B3%E5%AD%94%E6%94%BE%E5%A4%A7%23) `211.5K 🔥` `NEW`
1. [369画地为牢](https://s.weibo.com/weibo?q=%23369%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%23) `200.7K 🔥` `NEW`
1. [你说这是76岁的刘晓庆](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%AF%B4%E8%BF%99%E6%98%AF76%E5%B2%81%E7%9A%84%E5%88%98%E6%99%93%E5%BA%86%23) `199.4K 🔥` `NEW`
1. [TES对战iG暂停疑因服务器故障](https://s.weibo.com/weibo?q=%23TES%E5%AF%B9%E6%88%98iG%E6%9A%82%E5%81%9C%E7%96%91%E5%9B%A0%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%95%85%E9%9A%9C%23) `198.3K 🔥` `NEW`
1. [TheShy上单薇恩关键失误](https://s.weibo.com/weibo?q=%23TheShy%E4%B8%8A%E5%8D%95%E8%96%87%E6%81%A9%E5%85%B3%E9%94%AE%E5%A4%B1%E8%AF%AF%23) `193.0K 🔥` `NEW`
1. [陆濯娆儿这段拍得太隐晦](https://s.weibo.com/weibo?q=%23%E9%99%86%E6%BF%AF%E5%A8%86%E5%84%BF%E8%BF%99%E6%AE%B5%E6%8B%8D%E5%BE%97%E5%A4%AA%E9%9A%90%E6%99%A6%23) `172.9K 🔥` `NEW`
1. [米勒解说](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%8B%92%E8%A7%A3%E8%AF%B4%23) `170.5K 🔥` `NEW`
1. [女生刷到另一个自己竟是双胞胎](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%88%B7%E5%88%B0%E5%8F%A6%E4%B8%80%E4%B8%AA%E8%87%AA%E5%B7%B1%E7%AB%9F%E6%98%AF%E5%8F%8C%E8%83%9E%E8%83%8E%23) `553.8K 🔥` `+91%`
1. [中了乐事大奖怎么花](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BA%86%E4%B9%90%E4%BA%8B%E5%A4%A7%E5%A5%96%E6%80%8E%E4%B9%88%E8%8A%B1%23) `518.6K 🔥` `+82%`
1. [杂交水稻专家邓国富被开除党籍](https://s.weibo.com/weibo?q=%23%E6%9D%82%E4%BA%A4%E6%B0%B4%E7%A8%BB%E4%B8%93%E5%AE%B6%E9%82%93%E5%9B%BD%E5%AF%8C%E8%A2%AB%E5%BC%80%E9%99%A4%E5%85%9A%E7%B1%8D%23) `416.9K 🔥` `+480%`
1. [许飞经纪人 去找厉娜](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E7%BB%8F%E7%BA%AA%E4%BA%BA%20%E5%8E%BB%E6%89%BE%E5%8E%89%E5%A8%9C%23) `412.2K 🔥` `+355%`
1. [终于知道大家搬离高层的原因](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E5%A4%A7%E5%AE%B6%E6%90%AC%E7%A6%BB%E9%AB%98%E5%B1%82%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `409.7K 🔥` `+446%`
1. [清华父亲211妻子孩子没考上高中](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E7%88%B6%E4%BA%B2211%E5%A6%BB%E5%AD%90%E5%AD%A9%E5%AD%90%E6%B2%A1%E8%80%83%E4%B8%8A%E9%AB%98%E4%B8%AD%23) `404.3K 🔥` `+469%`
1. [iPhone天气下周五温差](https://s.weibo.com/weibo?q=%23iPhone%E5%A4%A9%E6%B0%94%E4%B8%8B%E5%91%A8%E4%BA%94%E6%B8%A9%E5%B7%AE%23) `404.0K 🔥` `+159%`
1. [苹果天气](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%A4%A9%E6%B0%94%23) `402.5K 🔥` `+476%`
1. [李钟硕新剧回春了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%92%9F%E7%A1%95%E6%96%B0%E5%89%A7%E5%9B%9E%E6%98%A5%E4%BA%86%23) `228.8K 🔥` `+132%`
1. [原来大家都是这样恢复心气的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E6%81%A2%E5%A4%8D%E5%BF%83%E6%B0%94%E7%9A%84%23) `170.4K 🔥` `+144%`

Updated at 2026-11-04 10:14:28

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
