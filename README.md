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

1. [世界杯出现了真正的预言家 (A real prophet appears in the World Cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%87%BA%E7%8E%B0%E4%BA%86%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%A2%84%E8%A8%80%E5%AE%B6%23) `1.1M 🔥` `NEW`
1. [香蜜沉沉烬如霜宣发期](https://s.weibo.com/weibo?q=%23%E9%A6%99%E8%9C%9C%E6%B2%89%E6%B2%89%E7%83%AC%E5%A6%82%E9%9C%9C%E5%AE%A3%E5%8F%91%E6%9C%9F%23) `777.1K 🔥` `NEW`
1. [大国重器如何照亮微观世界](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%9B%BD%E9%87%8D%E5%99%A8%E5%A6%82%E4%BD%95%E7%85%A7%E4%BA%AE%E5%BE%AE%E8%A7%82%E4%B8%96%E7%95%8C%23) `712.4K 🔥` `NEW`
1. [今天京东秒杀爆品1元 大牌低至五折](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E4%BA%AC%E4%B8%9C%E7%A7%92%E6%9D%80%E7%88%86%E5%93%811%E5%85%83%20%E5%A4%A7%E7%89%8C%E4%BD%8E%E8%87%B3%E4%BA%94%E6%8A%98%23) `712.4K 🔥` `NEW`
1. [王俊凯憋不住了张若昀还在加料](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%86%8B%E4%B8%8D%E4%BD%8F%E4%BA%86%E5%BC%A0%E8%8B%A5%E6%98%80%E8%BF%98%E5%9C%A8%E5%8A%A0%E6%96%99%23) `712.2K 🔥` `NEW`
1. [男子去世欠49万房贷父母放弃继承](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8E%BB%E4%B8%96%E6%AC%A049%E4%B8%87%E6%88%BF%E8%B4%B7%E7%88%B6%E6%AF%8D%E6%94%BE%E5%BC%83%E7%BB%A7%E6%89%BF%23) `703.8K 🔥` `NEW`
1. [当我以为熬夜对我没有影响时](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E4%BB%A5%E4%B8%BA%E7%86%AC%E5%A4%9C%E5%AF%B9%E6%88%91%E6%B2%A1%E6%9C%89%E5%BD%B1%E5%93%8D%E6%97%B6%23) `671.7K 🔥` `NEW`
1. [白鹿手臂居然是自己咬的](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%89%8B%E8%87%82%E5%B1%85%E7%84%B6%E6%98%AF%E8%87%AA%E5%B7%B1%E5%92%AC%E7%9A%84%23) `649.2K 🔥` `NEW`
1. [汉密尔顿法拉利生涯首冠](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%AF%86%E5%B0%94%E9%A1%BF%E6%B3%95%E6%8B%89%E5%88%A9%E7%94%9F%E6%B6%AF%E9%A6%96%E5%86%A0%23) `384.9K 🔥` `NEW`
1. [拍照没网感的原因找到了](https://s.weibo.com/weibo?q=%23%E6%8B%8D%E7%85%A7%E6%B2%A1%E7%BD%91%E6%84%9F%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `380.1K 🔥` `NEW`
1. [Jackeylove刷新LPL亚军纪录 (Jackeylove breaks LPL runner-up record)](https://s.weibo.com/weibo?q=%23Jackeylove%E5%88%B7%E6%96%B0LPL%E4%BA%9A%E5%86%9B%E7%BA%AA%E5%BD%95%23) `380.0K 🔥` `NEW`
1. [网友说陈坤被替换了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E8%AF%B4%E9%99%88%E5%9D%A4%E8%A2%AB%E6%9B%BF%E6%8D%A2%E4%BA%86%23) `379.6K 🔥` `NEW`
1. [诺伊尔首发出战](https://s.weibo.com/weibo?q=%23%E8%AF%BA%E4%BC%8A%E5%B0%94%E9%A6%96%E5%8F%91%E5%87%BA%E6%88%98%23) `379.5K 🔥` `NEW`
1. [沈腾以为神级救场 结果全漏了](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E4%BB%A5%E4%B8%BA%E7%A5%9E%E7%BA%A7%E6%95%91%E5%9C%BA%20%E7%BB%93%E6%9E%9C%E5%85%A8%E6%BC%8F%E4%BA%86%23) `379.2K 🔥` `NEW`
1. [王俊凯刘昊然吴磊8年前合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%88%98%E6%98%8A%E7%84%B6%E5%90%B4%E7%A3%8A8%E5%B9%B4%E5%89%8D%E5%90%88%E7%85%A7%23) `378.9K 🔥` `NEW`
1. [唐僧要是被他抓了孙悟空都来不及救](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%83%A7%E8%A6%81%E6%98%AF%E8%A2%AB%E4%BB%96%E6%8A%93%E4%BA%86%E5%AD%99%E6%82%9F%E7%A9%BA%E9%83%BD%E6%9D%A5%E4%B8%8D%E5%8F%8A%E6%95%91%23) `378.7K 🔥` `NEW`
1. [杨紫琼哭了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%90%BC%E5%93%AD%E4%BA%86%23) `378.4K 🔥` `NEW`
1. [陈坤 我还活着呢](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%9D%A4%20%E6%88%91%E8%BF%98%E6%B4%BB%E7%9D%80%E5%91%A2%23) `378.4K 🔥` `NEW`
1. [女子患上美女病严重者可导致瘫痪](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%82%A3%E4%B8%8A%E7%BE%8E%E5%A5%B3%E7%97%85%E4%B8%A5%E9%87%8D%E8%80%85%E5%8F%AF%E5%AF%BC%E8%87%B4%E7%98%AB%E7%97%AA%23) `373.1K 🔥` `NEW`
1. [赵今麦吉娜合照](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E5%90%89%E5%A8%9C%E5%90%88%E7%85%A7%23) `370.4K 🔥` `NEW`
1. [10家A股公司退市 超25万股民踩雷 (10 A-share companies delisted, over 250,000 shareholders were shocked)](https://s.weibo.com/weibo?q=%2310%E5%AE%B6A%E8%82%A1%E5%85%AC%E5%8F%B8%E9%80%80%E5%B8%82%20%E8%B6%8525%E4%B8%87%E8%82%A1%E6%B0%91%E8%B8%A9%E9%9B%B7%23) `357.6K 🔥` `NEW`
1. [刘耀文头发压扁了也能出神图](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%A4%B4%E5%8F%91%E5%8E%8B%E6%89%81%E4%BA%86%E4%B9%9F%E8%83%BD%E5%87%BA%E7%A5%9E%E5%9B%BE%23) `353.3K 🔥` `NEW`
1. [孙怡胸口怎么了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%83%B8%E5%8F%A3%E6%80%8E%E4%B9%88%E4%BA%86%23) `327.4K 🔥` `NEW`
1. [超能消毒液不能与洗衣液同用](https://s.weibo.com/weibo?q=%23%E8%B6%85%E8%83%BD%E6%B6%88%E6%AF%92%E6%B6%B2%E4%B8%8D%E8%83%BD%E4%B8%8E%E6%B4%97%E8%A1%A3%E6%B6%B2%E5%90%8C%E7%94%A8%23) `285.0K 🔥` `NEW`
1. [吴磊 没有女朋友](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%20%E6%B2%A1%E6%9C%89%E5%A5%B3%E6%9C%8B%E5%8F%8B%23) `273.1K 🔥` `NEW`
1. [张真源小张盲盒](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%B0%8F%E5%BC%A0%E7%9B%B2%E7%9B%92%23) `249.5K 🔥` `NEW`
1. [爸爸嫌弃爷爷做饭难吃被6岁闺女说哭](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%AB%8C%E5%BC%83%E7%88%B7%E7%88%B7%E5%81%9A%E9%A5%AD%E9%9A%BE%E5%90%83%E8%A2%AB6%E5%B2%81%E9%97%BA%E5%A5%B3%E8%AF%B4%E5%93%AD%23) `249.3K 🔥` `NEW`
1. [阿嬷的情书 全家人都爱你们](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E5%85%A8%E5%AE%B6%E4%BA%BA%E9%83%BD%E7%88%B1%E4%BD%A0%E4%BB%AC%23) `249.3K 🔥` `NEW`
1. [伊朗称将就贝鲁特遭袭报复以色列](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%B0%86%E5%B0%B1%E8%B4%9D%E9%B2%81%E7%89%B9%E9%81%AD%E8%A2%AD%E6%8A%A5%E5%A4%8D%E4%BB%A5%E8%89%B2%E5%88%97%23) `242.3K 🔥` `NEW`
1. [炽夏](https://s.weibo.com/weibo?q=%23%E7%82%BD%E5%A4%8F%23) `236.1K 🔥` `NEW`
1. [台公开解放军无侦10影像疑似在壮胆 (Taiwan releases PLA Undetected 10 video, suspected to be emboldening)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E5%85%AC%E5%BC%80%E8%A7%A3%E6%94%BE%E5%86%9B%E6%97%A0%E4%BE%A610%E5%BD%B1%E5%83%8F%E7%96%91%E4%BC%BC%E5%9C%A8%E5%A3%AE%E8%83%86%23) `232.9K 🔥` `NEW`
1. [我是演员董子健 最近很空](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%98%AF%E6%BC%94%E5%91%98%E8%91%A3%E5%AD%90%E5%81%A5%20%E6%9C%80%E8%BF%91%E5%BE%88%E7%A9%BA%23) `231.9K 🔥` `NEW`
1. [沈腾和昨天是一个人吗](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%92%8C%E6%98%A8%E5%A4%A9%E6%98%AF%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%90%97%23) `206.3K 🔥` `NEW`
1. [LV回应9万元包疑似展销品](https://s.weibo.com/weibo?q=%23LV%E5%9B%9E%E5%BA%949%E4%B8%87%E5%85%83%E5%8C%85%E7%96%91%E4%BC%BC%E5%B1%95%E9%94%80%E5%93%81%23) `199.5K 🔥` `NEW`
1. [莫离站内热度破28000](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E7%AB%99%E5%86%85%E7%83%AD%E5%BA%A6%E7%A0%B428000%23) `198.8K 🔥` `NEW`
1. [王菲免费唱过的歌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%85%8D%E8%B4%B9%E5%94%B1%E8%BF%87%E7%9A%84%E6%AD%8C%23) `191.6K 🔥` `NEW`
1. [上海还是太超前了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%BF%98%E6%98%AF%E5%A4%AA%E8%B6%85%E5%89%8D%E4%BA%86%23) `191.4K 🔥` `NEW`
1. [王骁 耳骨钉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%AA%81%20%E8%80%B3%E9%AA%A8%E9%92%89%23) `191.4K 🔥` `NEW`
1. [张凌赫活动证件上用的真名](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%B4%BB%E5%8A%A8%E8%AF%81%E4%BB%B6%E4%B8%8A%E7%94%A8%E7%9A%84%E7%9C%9F%E5%90%8D%23) `177.8K 🔥` `NEW`
1. [张雪机车第9位完赛](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%AC%AC9%E4%BD%8D%E5%AE%8C%E8%B5%9B%23) `157.5K 🔥` `NEW`
1. [奢侈金表沦为炼金原料 (Luxury gold watches become alchemical raw materials)](https://s.weibo.com/weibo?q=%23%E5%A5%A2%E4%BE%88%E9%87%91%E8%A1%A8%E6%B2%A6%E4%B8%BA%E7%82%BC%E9%87%91%E5%8E%9F%E6%96%99%23) `149.5K 🔥` `NEW`
1. [黄渤 黄晓明终于变成了黄博](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B8%A4%20%E9%BB%84%E6%99%93%E6%98%8E%E7%BB%88%E4%BA%8E%E5%8F%98%E6%88%90%E4%BA%86%E9%BB%84%E5%8D%9A%23) `142.6K 🔥` `NEW`
1. [97岁网红刘老太离世](https://s.weibo.com/weibo?q=%2397%E5%B2%81%E7%BD%91%E7%BA%A2%E5%88%98%E8%80%81%E5%A4%AA%E7%A6%BB%E4%B8%96%23) `135.9K 🔥` `NEW`
1. [大学里最被劝退的专业 它排第一](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E9%87%8C%E6%9C%80%E8%A2%AB%E5%8A%9D%E9%80%80%E7%9A%84%E4%B8%93%E4%B8%9A%20%E5%AE%83%E6%8E%92%E7%AC%AC%E4%B8%80%23) `134.4K 🔥` `NEW`
1. [小S和许雅钧合拍手势舞](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%92%8C%E8%AE%B8%E9%9B%85%E9%92%A7%E5%90%88%E6%8B%8D%E6%89%8B%E5%8A%BF%E8%88%9E%23) `133.4K 🔥` `NEW`
1. [离婚开庭前男子当街抢走4岁女儿](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%A9%9A%E5%BC%80%E5%BA%AD%E5%89%8D%E7%94%B7%E5%AD%90%E5%BD%93%E8%A1%97%E6%8A%A2%E8%B5%B04%E5%B2%81%E5%A5%B3%E5%84%BF%23) `132.3K 🔥` `NEW`
1. [孙怡张若昀聊啥呢这么开心](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%BC%A0%E8%8B%A5%E6%98%80%E8%81%8A%E5%95%A5%E5%91%A2%E8%BF%99%E4%B9%88%E5%BC%80%E5%BF%83%23) `131.6K 🔥` `NEW`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `131.3K 🔥` `NEW`
1. [WTT萨格勒布站决赛](https://s.weibo.com/weibo?q=%23WTT%E8%90%A8%E6%A0%BC%E5%8B%92%E5%B8%83%E7%AB%99%E5%86%B3%E8%B5%9B%23) `129.8K 🔥` `NEW`
1. [特朗普说非常接近达成美伊协议](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E9%9D%9E%E5%B8%B8%E6%8E%A5%E8%BF%91%E8%BE%BE%E6%88%90%E7%BE%8E%E4%BC%8A%E5%8D%8F%E8%AE%AE%23) `128.9K 🔥` `NEW`
1. [雷军收到YU7车主送的蒜鸟玩偶 (Lei Jun received a garlic bird doll from the owner of YU7)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%94%B6%E5%88%B0YU7%E8%BD%A6%E4%B8%BB%E9%80%81%E7%9A%84%E8%92%9C%E9%B8%9F%E7%8E%A9%E5%81%B6%23) `127.8K 🔥` `NEW`

Updated at 2026-06-15 00:12:48

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
