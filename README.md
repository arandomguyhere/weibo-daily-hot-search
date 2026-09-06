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

1. [萨巴伦卡vs汤森德](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1vs%E6%B1%A4%E6%A3%AE%E5%BE%B7%23) `63.2K 🔥` `NEW`
1. [半个娱乐圈明星都去李宇春演唱会](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E4%B8%AA%E5%A8%B1%E4%B9%90%E5%9C%88%E6%98%8E%E6%98%9F%E9%83%BD%E5%8E%BB%E6%9D%8E%E5%AE%87%E6%98%A5%E6%BC%94%E5%94%B1%E4%BC%9A%23) `63.1K 🔥` `NEW`
1. [阿森纳切尔西 互捅局](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%E5%88%87%E5%B0%94%E8%A5%BF%20%E4%BA%92%E6%8D%85%E5%B1%80%23) `62.9K 🔥` `NEW`
1. [腿上冒出小鼓包要注意了](https://s.weibo.com/weibo?q=%23%E8%85%BF%E4%B8%8A%E5%86%92%E5%87%BA%E5%B0%8F%E9%BC%93%E5%8C%85%E8%A6%81%E6%B3%A8%E6%84%8F%E4%BA%86%23) `62.5K 🔥` `NEW`
1. [阿森纳2比1切尔西](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B32%E6%AF%941%E5%88%87%E5%B0%94%E8%A5%BF%23) `62.4K 🔥` `NEW`
1. [熬夜是在点燃全身炎症炸弹](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E6%98%AF%E5%9C%A8%E7%82%B9%E7%87%83%E5%85%A8%E8%BA%AB%E7%82%8E%E7%97%87%E7%82%B8%E5%BC%B9%23) `61.9K 🔥` `NEW`
1. [Tangyuan赛后哽咽感谢IG前辈](https://s.weibo.com/weibo?q=%23Tangyuan%E8%B5%9B%E5%90%8E%E5%93%BD%E5%92%BD%E6%84%9F%E8%B0%A2IG%E5%89%8D%E8%BE%88%23) `60.9K 🔥` `NEW`
1. [以为是偏心没想到是贫穷](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E6%98%AF%E5%81%8F%E5%BF%83%E6%B2%A1%E6%83%B3%E5%88%B0%E6%98%AF%E8%B4%AB%E7%A9%B7%23) `60.8K 🔥` `NEW`
1. [美国71岁老妇在警局开枪被击毙](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD71%E5%B2%81%E8%80%81%E5%A6%87%E5%9C%A8%E8%AD%A6%E5%B1%80%E5%BC%80%E6%9E%AA%E8%A2%AB%E5%87%BB%E6%AF%99%23) `60.5K 🔥` `NEW`
1. [敏感的人往往看不见自己的珍贵](https://s.weibo.com/weibo?q=%23%E6%95%8F%E6%84%9F%E7%9A%84%E4%BA%BA%E5%BE%80%E5%BE%80%E7%9C%8B%E4%B8%8D%E8%A7%81%E8%87%AA%E5%B7%B1%E7%9A%84%E7%8F%8D%E8%B4%B5%23) `60.1K 🔥` `NEW`
1. [埃弗顿绝平曼联](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%BC%97%E9%A1%BF%E7%BB%9D%E5%B9%B3%E6%9B%BC%E8%81%94%23) `59.6K 🔥` `NEW`
1. [单亲妈妈月捐数年无人问停捐后遭催捐](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BA%B2%E5%A6%88%E5%A6%88%E6%9C%88%E6%8D%90%E6%95%B0%E5%B9%B4%E6%97%A0%E4%BA%BA%E9%97%AE%E5%81%9C%E6%8D%90%E5%90%8E%E9%81%AD%E5%82%AC%E6%8D%90%23) `59.2K 🔥` `NEW`
1. [郑钦文美网一天烧掉5万](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%BE%8E%E7%BD%91%E4%B8%80%E5%A4%A9%E7%83%A7%E6%8E%895%E4%B8%87%23) `59.1K 🔥` `NEW`
1. [Tangyuan赛后哽咽](https://s.weibo.com/weibo?q=%23Tangyuan%E8%B5%9B%E5%90%8E%E5%93%BD%E5%92%BD%23) `58.6K 🔥` `NEW`
1. [漳州大水门挡了洪水26小时](https://s.weibo.com/weibo?q=%23%E6%BC%B3%E5%B7%9E%E5%A4%A7%E6%B0%B4%E9%97%A8%E6%8C%A1%E4%BA%86%E6%B4%AA%E6%B0%B426%E5%B0%8F%E6%97%B6%23) `58.2K 🔥` `NEW`
1. [网友曝电视台卖药现状](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%9B%9D%E7%94%B5%E8%A7%86%E5%8F%B0%E5%8D%96%E8%8D%AF%E7%8E%B0%E7%8A%B6%23) `58.2K 🔥` `NEW`
1. [凯斯被郑钦文逆转后双目无光](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%96%AF%E8%A2%AB%E9%83%91%E9%92%A6%E6%96%87%E9%80%86%E8%BD%AC%E5%90%8E%E5%8F%8C%E7%9B%AE%E6%97%A0%E5%85%89%23) `57.9K 🔥` `NEW`
1. [杨舒予个人能力](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%88%92%E4%BA%88%E4%B8%AA%E4%BA%BA%E8%83%BD%E5%8A%9B%23) `57.8K 🔥` `NEW`
1. [工作人员曾反复劝阻女孩赴港看演唱会](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E6%9B%BE%E5%8F%8D%E5%A4%8D%E5%8A%9D%E9%98%BB%E5%A5%B3%E5%AD%A9%E8%B5%B4%E6%B8%AF%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `391.2K 🔥` `-74%`
1. [大家不爱住民宿了吗](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AE%B6%E4%B8%8D%E7%88%B1%E4%BD%8F%E6%B0%91%E5%AE%BF%E4%BA%86%E5%90%97%23) `222.3K 🔥` `-55%`
1. [青春华章向新而行](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E5%8D%8E%E7%AB%A0%E5%90%91%E6%96%B0%E8%80%8C%E8%A1%8C%23) `89.9K 🔥` `-83%`
1. [花少2摄影师曾劝杨洋明天跑吧](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E6%91%84%E5%BD%B1%E5%B8%88%E6%9B%BE%E5%8A%9D%E6%9D%A8%E6%B4%8B%E6%98%8E%E5%A4%A9%E8%B7%91%E5%90%A7%23) `84.0K 🔥` `-61%`
1. [爷爷提前剪葫芦是给流量的一记耳光](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E6%8F%90%E5%89%8D%E5%89%AA%E8%91%AB%E8%8A%A6%E6%98%AF%E7%BB%99%E6%B5%81%E9%87%8F%E7%9A%84%E4%B8%80%E8%AE%B0%E8%80%B3%E5%85%89%23) `65.9K 🔥` `-67%`
1. [交锋](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E9%94%8B%23) `63.2K 🔥` `-64%`
1. [中国女篮大概率小组出线](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%E5%A4%A7%E6%A6%82%E7%8E%87%E5%B0%8F%E7%BB%84%E5%87%BA%E7%BA%BF%23) `63.0K 🔥` `-89%`
1. [婚内强奸案男子性侵妻子拍下视频](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%86%85%E5%BC%BA%E5%A5%B8%E6%A1%88%E7%94%B7%E5%AD%90%E6%80%A7%E4%BE%B5%E5%A6%BB%E5%AD%90%E6%8B%8D%E4%B8%8B%E8%A7%86%E9%A2%91%23) `63.0K 🔥` `-62%`
1. [葫芦娃爷爷 流量暴力](https://s.weibo.com/weibo?q=%23%E8%91%AB%E8%8A%A6%E5%A8%83%E7%88%B7%E7%88%B7%20%E6%B5%81%E9%87%8F%E6%9A%B4%E5%8A%9B%23) `62.8K 🔥` `-61%`
1. [LPL四强出炉](https://s.weibo.com/weibo?q=%23LPL%E5%9B%9B%E5%BC%BA%E5%87%BA%E7%82%89%23) `62.8K 🔥` `-59%`
1. [陈妍希想认林心如女儿做儿媳妇](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%83%B3%E8%AE%A4%E6%9E%97%E5%BF%83%E5%A6%82%E5%A5%B3%E5%84%BF%E5%81%9A%E5%84%BF%E5%AA%B3%E5%A6%87%23) `62.6K 🔥` `-61%`
1. [杨舒予绝平](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%88%92%E4%BA%88%E7%BB%9D%E5%B9%B3%23) `62.5K 🔥` `-61%`
1. [雷军向所有品牌表达感谢](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%90%91%E6%89%80%E6%9C%89%E5%93%81%E7%89%8C%E8%A1%A8%E8%BE%BE%E6%84%9F%E8%B0%A2%23) `62.3K 🔥` `-65%`
1. [中国博主伦敦直播遭外籍青年挑衅殴打](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8D%9A%E4%B8%BB%E4%BC%A6%E6%95%A6%E7%9B%B4%E6%92%AD%E9%81%AD%E5%A4%96%E7%B1%8D%E9%9D%92%E5%B9%B4%E6%8C%91%E8%A1%85%E6%AE%B4%E6%89%93%23) `62.2K 🔥` `-61%`
1. [iPhone18Pro 配色](https://s.weibo.com/weibo?q=%23iPhone18Pro%20%E9%85%8D%E8%89%B2%23) `62.1K 🔥` `-61%`
1. [医生提醒轻微智障有5个表现](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%92%E8%BD%BB%E5%BE%AE%E6%99%BA%E9%9A%9C%E6%9C%895%E4%B8%AA%E8%A1%A8%E7%8E%B0%23) `62.0K 🔥` `-60%`
1. [动物园员工被鳄鱼咬腿1小时身亡](https://s.weibo.com/weibo?q=%23%E5%8A%A8%E7%89%A9%E5%9B%AD%E5%91%98%E5%B7%A5%E8%A2%AB%E9%B3%84%E9%B1%BC%E5%92%AC%E8%85%BF1%E5%B0%8F%E6%97%B6%E8%BA%AB%E4%BA%A1%23) `62.0K 🔥` `-59%`
1. [维斯塔潘](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E6%96%AF%E5%A1%94%E6%BD%98%23) `61.8K 🔥` `-60%`
1. [女儿用豆包抄答案家长只用了一招](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E7%94%A8%E8%B1%86%E5%8C%85%E6%8A%84%E7%AD%94%E6%A1%88%E5%AE%B6%E9%95%BF%E5%8F%AA%E7%94%A8%E4%BA%86%E4%B8%80%E6%8B%9B%23) `61.7K 🔥` `-59%`
1. [中国女篮vs捷克女篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AEvs%E6%8D%B7%E5%85%8B%E5%A5%B3%E7%AF%AE%23) `61.6K 🔥` `-41%`
1. [终南山怪虫](https://s.weibo.com/weibo?q=%23%E7%BB%88%E5%8D%97%E5%B1%B1%E6%80%AA%E8%99%AB%23) `61.4K 🔥` `-42%`
1. [电视台 卖药](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%8F%B0%20%E5%8D%96%E8%8D%AF%23) `61.3K 🔥` `-58%`
1. [财政部将向中国人寿集团注资350亿](https://s.weibo.com/weibo?q=%23%E8%B4%A2%E6%94%BF%E9%83%A8%E5%B0%86%E5%90%91%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%AF%BF%E9%9B%86%E5%9B%A2%E6%B3%A8%E8%B5%84350%E4%BA%BF%23) `61.1K 🔥` `-60%`
1. [无畏年总见](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%B9%B4%E6%80%BB%E8%A7%81%23) `60.5K 🔥` `-50%`
1. [清融 昊昊互动](https://s.weibo.com/weibo?q=%23%E6%B8%85%E8%9E%8D%20%E6%98%8A%E6%98%8A%E4%BA%92%E5%8A%A8%23) `60.2K 🔥` `-50%`
1. [美国男子持刀欲轻生被警方开枪击毙](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%94%B7%E5%AD%90%E6%8C%81%E5%88%80%E6%AC%B2%E8%BD%BB%E7%94%9F%E8%A2%AB%E8%AD%A6%E6%96%B9%E5%BC%80%E6%9E%AA%E5%87%BB%E6%AF%99%23) `60.0K 🔥` `-40%`
1. [中国女篮 一顿瞎传](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%20%E4%B8%80%E9%A1%BF%E7%9E%8E%E4%BC%A0%23) `59.8K 🔥` `-67%`
1. [TTG决赛见](https://s.weibo.com/weibo?q=%23TTG%E5%86%B3%E8%B5%9B%E8%A7%81%23) `59.4K 🔥` `-52%`
1. [王安宇黄子弘凡听到搞旅综的反应](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E5%90%AC%E5%88%B0%E6%90%9E%E6%97%85%E7%BB%BC%E7%9A%84%E5%8F%8D%E5%BA%94%23) `58.9K 🔥` `-62%`
1. [JDG纪录片](https://s.weibo.com/weibo?q=%23JDG%E7%BA%AA%E5%BD%95%E7%89%87%23) `58.8K 🔥` `-44%`
1. [LGD晋级LPL四强](https://s.weibo.com/weibo?q=%23LGD%E6%99%8B%E7%BA%A7LPL%E5%9B%9B%E5%BC%BA%23) `58.4K 🔥` `-65%`

Updated at 2026-09-07 03:02:19

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
