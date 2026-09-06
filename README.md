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

1. [工作人员曾反复劝阻女孩赴港看演唱会](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E6%9B%BE%E5%8F%8D%E5%A4%8D%E5%8A%9D%E9%98%BB%E5%A5%B3%E5%AD%A9%E8%B5%B4%E6%B8%AF%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `1.5M 🔥` `NEW`
1. [中国女篮大概率小组出线](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%E5%A4%A7%E6%A6%82%E7%8E%87%E5%B0%8F%E7%BB%84%E5%87%BA%E7%BA%BF%23) `597.7K 🔥` `NEW`
1. [青春华章向新而行](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E5%8D%8E%E7%AB%A0%E5%90%91%E6%96%B0%E8%80%8C%E8%A1%8C%23) `531.6K 🔥` `NEW`
1. [小米18Fold今晚7点发布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Fold%E4%BB%8A%E6%99%9A7%E7%82%B9%E5%8F%91%E5%B8%83%23) `495.5K 🔥` `NEW`
1. [大家不爱住民宿了吗](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AE%B6%E4%B8%8D%E7%88%B1%E4%BD%8F%E6%B0%91%E5%AE%BF%E4%BA%86%E5%90%97%23) `492.8K 🔥` `NEW`
1. [花少2摄影师曾劝杨洋明天跑吧](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E6%91%84%E5%BD%B1%E5%B8%88%E6%9B%BE%E5%8A%9D%E6%9D%A8%E6%B4%8B%E6%98%8E%E5%A4%A9%E8%B7%91%E5%90%A7%23) `213.5K 🔥` `NEW`
1. [爷爷提前剪葫芦是给流量的一记耳光](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E6%8F%90%E5%89%8D%E5%89%AA%E8%91%AB%E8%8A%A6%E6%98%AF%E7%BB%99%E6%B5%81%E9%87%8F%E7%9A%84%E4%B8%80%E8%AE%B0%E8%80%B3%E5%85%89%23) `200.0K 🔥` `NEW`
1. [许昕喊你减重就要轻松上场](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E5%96%8A%E4%BD%A0%E5%87%8F%E9%87%8D%E5%B0%B1%E8%A6%81%E8%BD%BB%E6%9D%BE%E4%B8%8A%E5%9C%BA%23) `197.3K 🔥` `NEW`
1. [中国女篮 一顿瞎传](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%20%E4%B8%80%E9%A1%BF%E7%9E%8E%E4%BC%A0%23) `182.2K 🔥` `NEW`
1. [雷军向所有品牌表达感谢](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%90%91%E6%89%80%E6%9C%89%E5%93%81%E7%89%8C%E8%A1%A8%E8%BE%BE%E6%84%9F%E8%B0%A2%23) `179.0K 🔥` `NEW`
1. [交锋](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E9%94%8B%23) `173.6K 🔥` `NEW`
1. [LGD晋级LPL四强](https://s.weibo.com/weibo?q=%23LGD%E6%99%8B%E7%BA%A7LPL%E5%9B%9B%E5%BC%BA%23) `165.2K 🔥` `NEW`
1. [陈晓妈妈仍会帮陈妍希带孩子](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%99%93%E5%A6%88%E5%A6%88%E4%BB%8D%E4%BC%9A%E5%B8%AE%E9%99%88%E5%A6%8D%E5%B8%8C%E5%B8%A6%E5%AD%A9%E5%AD%90%23) `164.9K 🔥` `NEW`
1. [婚内强奸案男子性侵妻子拍下视频](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%86%85%E5%BC%BA%E5%A5%B8%E6%A1%88%E7%94%B7%E5%AD%90%E6%80%A7%E4%BE%B5%E5%A6%BB%E5%AD%90%E6%8B%8D%E4%B8%8B%E8%A7%86%E9%A2%91%23) `164.8K 🔥` `NEW`
1. [杨舒予绝平](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%88%92%E4%BA%88%E7%BB%9D%E5%B9%B3%23) `161.4K 🔥` `NEW`
1. [丁程鑫手伤是断掉了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E6%89%8B%E4%BC%A4%E6%98%AF%E6%96%AD%E6%8E%89%E4%BA%86%23) `161.4K 🔥` `NEW`
1. [葫芦娃爷爷 流量暴力](https://s.weibo.com/weibo?q=%23%E8%91%AB%E8%8A%A6%E5%A8%83%E7%88%B7%E7%88%B7%20%E6%B5%81%E9%87%8F%E6%9A%B4%E5%8A%9B%23) `160.7K 🔥` `NEW`
1. [锤娜丽莎回应打针减肥质疑](https://s.weibo.com/weibo?q=%23%E9%94%A4%E5%A8%9C%E4%B8%BD%E8%8E%8E%E5%9B%9E%E5%BA%94%E6%89%93%E9%92%88%E5%87%8F%E8%82%A5%E8%B4%A8%E7%96%91%23) `159.5K 🔥` `NEW`
1. [中国博主伦敦直播遭外籍青年挑衅殴打](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8D%9A%E4%B8%BB%E4%BC%A6%E6%95%A6%E7%9B%B4%E6%92%AD%E9%81%AD%E5%A4%96%E7%B1%8D%E9%9D%92%E5%B9%B4%E6%8C%91%E8%A1%85%E6%AE%B4%E6%89%93%23) `159.1K 🔥` `NEW`
1. [陈妍希想认林心如女儿做儿媳妇](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%83%B3%E8%AE%A4%E6%9E%97%E5%BF%83%E5%A6%82%E5%A5%B3%E5%84%BF%E5%81%9A%E5%84%BF%E5%AA%B3%E5%A6%87%23) `158.6K 🔥` `NEW`
1. [玄戒O3 高通](https://s.weibo.com/weibo?q=%23%E7%8E%84%E6%88%92O3%20%E9%AB%98%E9%80%9A%23) `157.6K 🔥` `NEW`
1. [iPhone18Pro 配色](https://s.weibo.com/weibo?q=%23iPhone18Pro%20%E9%85%8D%E8%89%B2%23) `157.5K 🔥` `NEW`
1. [医生提醒轻微智障有5个表现](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%92%E8%BD%BB%E5%BE%AE%E6%99%BA%E9%9A%9C%E6%9C%895%E4%B8%AA%E8%A1%A8%E7%8E%B0%23) `157.0K 🔥` `NEW`
1. [曝白玉兰杨幂0票](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E7%8E%89%E5%85%B0%E6%9D%A8%E5%B9%820%E7%A5%A8%23) `156.1K 🔥` `NEW`
1. [维斯塔潘](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E6%96%AF%E5%A1%94%E6%BD%98%23) `155.7K 🔥` `NEW`
1. [王一博赛车被撞退赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%B5%9B%E8%BD%A6%E8%A2%AB%E6%92%9E%E9%80%80%E8%B5%9B%23) `155.4K 🔥` `NEW`
1. [LPL四强出炉](https://s.weibo.com/weibo?q=%23LPL%E5%9B%9B%E5%BC%BA%E5%87%BA%E7%82%89%23) `154.8K 🔥` `NEW`
1. [王安宇黄子弘凡听到搞旅综的反应](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E5%90%AC%E5%88%B0%E6%90%9E%E6%97%85%E7%BB%BC%E7%9A%84%E5%8F%8D%E5%BA%94%23) `153.3K 🔥` `NEW`
1. [财政部将向中国人寿集团注资350亿](https://s.weibo.com/weibo?q=%23%E8%B4%A2%E6%94%BF%E9%83%A8%E5%B0%86%E5%90%91%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%AF%BF%E9%9B%86%E5%9B%A2%E6%B3%A8%E8%B5%84350%E4%BA%BF%23) `153.1K 🔥` `NEW`
1. [5人聚餐后全部确诊肝吸虫病](https://s.weibo.com/weibo?q=%235%E4%BA%BA%E8%81%9A%E9%A4%90%E5%90%8E%E5%85%A8%E9%83%A8%E7%A1%AE%E8%AF%8A%E8%82%9D%E5%90%B8%E8%99%AB%E7%97%85%23) `152.2K 🔥` `NEW`
1. [动物园员工被鳄鱼咬腿1小时身亡](https://s.weibo.com/weibo?q=%23%E5%8A%A8%E7%89%A9%E5%9B%AD%E5%91%98%E5%B7%A5%E8%A2%AB%E9%B3%84%E9%B1%BC%E5%92%AC%E8%85%BF1%E5%B0%8F%E6%97%B6%E8%BA%AB%E4%BA%A1%23) `152.2K 🔥` `NEW`
1. [女儿用豆包抄答案家长只用了一招](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E7%94%A8%E8%B1%86%E5%8C%85%E6%8A%84%E7%AD%94%E6%A1%88%E5%AE%B6%E9%95%BF%E5%8F%AA%E7%94%A8%E4%BA%86%E4%B8%80%E6%8B%9B%23) `149.7K 🔥` `NEW`
1. [电视台 卖药](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%8F%B0%20%E5%8D%96%E8%8D%AF%23) `147.6K 🔥` `NEW`
1. [丁程鑫痛得发抖](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E7%97%9B%E5%BE%97%E5%8F%91%E6%8A%96%23) `139.7K 🔥` `NEW`
1. [扫把星男主](https://s.weibo.com/weibo?q=%23%E6%89%AB%E6%8A%8A%E6%98%9F%E7%94%B7%E4%B8%BB%23) `125.7K 🔥` `NEW`
1. [TTG决赛见](https://s.weibo.com/weibo?q=%23TTG%E5%86%B3%E8%B5%9B%E8%A7%81%23) `123.9K 🔥` `NEW`
1. [无畏年总见](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%B9%B4%E6%80%BB%E8%A7%81%23) `120.7K 🔥` `NEW`
1. [清融 昊昊互动](https://s.weibo.com/weibo?q=%23%E6%B8%85%E8%9E%8D%20%E6%98%8A%E6%98%8A%E4%BA%92%E5%8A%A8%23) `120.6K 🔥` `NEW`
1. [孙海洋追讨42万赔偿无需重新打官司](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%B5%B7%E6%B4%8B%E8%BF%BD%E8%AE%A842%E4%B8%87%E8%B5%94%E5%81%BF%E6%97%A0%E9%9C%80%E9%87%8D%E6%96%B0%E6%89%93%E5%AE%98%E5%8F%B8%23) `117.4K 🔥` `NEW`
1. [NIP对战LGD](https://s.weibo.com/weibo?q=%23NIP%E5%AF%B9%E6%88%98LGD%23) `115.1K 🔥` `NEW`
1. [追逐JDG共同期待的那场雨](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E9%80%90JDG%E5%85%B1%E5%90%8C%E6%9C%9F%E5%BE%85%E7%9A%84%E9%82%A3%E5%9C%BA%E9%9B%A8%23) `110.1K 🔥` `NEW`
1. [一年级导演否认马皓轩传言](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B9%B4%E7%BA%A7%E5%AF%BC%E6%BC%94%E5%90%A6%E8%AE%A4%E9%A9%AC%E7%9A%93%E8%BD%A9%E4%BC%A0%E8%A8%80%23) `106.0K 🔥` `NEW`
1. [终南山怪虫](https://s.weibo.com/weibo?q=%23%E7%BB%88%E5%8D%97%E5%B1%B1%E6%80%AA%E8%99%AB%23) `106.0K 🔥` `NEW`
1. [JDG纪录片](https://s.weibo.com/weibo?q=%23JDG%E7%BA%AA%E5%BD%95%E7%89%87%23) `105.8K 🔥` `NEW`
1. [中国女篮vs捷克女篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AEvs%E6%8D%B7%E5%85%8B%E5%A5%B3%E7%AF%AE%23) `103.7K 🔥` `NEW`
1. [摇粒绒 微塑料](https://s.weibo.com/weibo?q=%23%E6%91%87%E7%B2%92%E7%BB%92%20%E5%BE%AE%E5%A1%91%E6%96%99%23) `101.2K 🔥` `NEW`
1. [侯明昊唱撤退发狠了忘情了](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%94%B1%E6%92%A4%E9%80%80%E5%8F%91%E7%8B%A0%E4%BA%86%E5%BF%98%E6%83%85%E4%BA%86%23) `101.1K 🔥` `NEW`
1. [王安宇说田曦薇3秒冲出去](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%AF%B4%E7%94%B0%E6%9B%A6%E8%96%873%E7%A7%92%E5%86%B2%E5%87%BA%E5%8E%BB%23) `100.7K 🔥` `NEW`
1. [美国男子持刀欲轻生被警方开枪击毙](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%94%B7%E5%AD%90%E6%8C%81%E5%88%80%E6%AC%B2%E8%BD%BB%E7%94%9F%E8%A2%AB%E8%AD%A6%E6%96%B9%E5%BC%80%E6%9E%AA%E5%87%BB%E6%AF%99%23) `100.5K 🔥` `NEW`
1. [aespa被嘲巴西演唱会空场](https://s.weibo.com/weibo?q=%23aespa%E8%A2%AB%E5%98%B2%E5%B7%B4%E8%A5%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A9%BA%E5%9C%BA%23) `100.2K 🔥` `NEW`

Updated at 2026-09-07 00:59:54

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
