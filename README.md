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

1. [安徽广德车祸家属称两名小孩已去世 (The family members of the car accident in Guangde, Anhui said that two children have died)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E5%B9%BF%E5%BE%B7%E8%BD%A6%E7%A5%B8%E5%AE%B6%E5%B1%9E%E7%A7%B0%E4%B8%A4%E5%90%8D%E5%B0%8F%E5%AD%A9%E5%B7%B2%E5%8E%BB%E4%B8%96%23) `1.9M 🔥` `NEW`
1. [伊朗队在洛杉矶更衣室留下感谢信](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%98%9F%E5%9C%A8%E6%B4%9B%E6%9D%89%E7%9F%B6%E6%9B%B4%E8%A1%A3%E5%AE%A4%E7%95%99%E4%B8%8B%E6%84%9F%E8%B0%A2%E4%BF%A1%23) `927.2K 🔥` `NEW`
1. [长三角地区进出口规模再创新高](https://s.weibo.com/weibo?q=%23%E9%95%BF%E4%B8%89%E8%A7%92%E5%9C%B0%E5%8C%BA%E8%BF%9B%E5%87%BA%E5%8F%A3%E8%A7%84%E6%A8%A1%E5%86%8D%E5%88%9B%E6%96%B0%E9%AB%98%23) `912.0K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `898.5K 🔥` `NEW`
1. [男子没开空调工作一天肾坏了](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%B2%A1%E5%BC%80%E7%A9%BA%E8%B0%83%E5%B7%A5%E4%BD%9C%E4%B8%80%E5%A4%A9%E8%82%BE%E5%9D%8F%E4%BA%86%23) `408.1K 🔥` `NEW`
1. [突然理解小孩子为什么吵闹了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E5%B0%8F%E5%AD%A9%E5%AD%90%E4%B8%BA%E4%BB%80%E4%B9%88%E5%90%B5%E9%97%B9%E4%BA%86%23) `407.5K 🔥` `NEW`
1. [轻断食一天喝了6斤牛奶](https://s.weibo.com/weibo?q=%23%E8%BD%BB%E6%96%AD%E9%A3%9F%E4%B8%80%E5%A4%A9%E5%96%9D%E4%BA%866%E6%96%A4%E7%89%9B%E5%A5%B6%23) `406.4K 🔥` `NEW`
1. [地铁老人强拽女孩让座和家长扭打](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E8%80%81%E4%BA%BA%E5%BC%BA%E6%8B%BD%E5%A5%B3%E5%AD%A9%E8%AE%A9%E5%BA%A7%E5%92%8C%E5%AE%B6%E9%95%BF%E6%89%AD%E6%89%93%23) `405.8K 🔥` `NEW`
1. [恋与深空突击直播](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E7%AA%81%E5%87%BB%E7%9B%B4%E6%92%AD%23) `405.8K 🔥` `NEW`
1. [李金铭农村综艺那家人居然还在发她](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%86%9C%E6%9D%91%E7%BB%BC%E8%89%BA%E9%82%A3%E5%AE%B6%E4%BA%BA%E5%B1%85%E7%84%B6%E8%BF%98%E5%9C%A8%E5%8F%91%E5%A5%B9%23) `377.9K 🔥` `NEW`
1. [时代峰峻辟谣朱志鑫苏新皓恋情 (Shi Fengjun refutes rumors that Zhu Zhixin and Su Xinhao are in love)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%BE%9F%E8%B0%A3%E6%9C%B1%E5%BF%97%E9%91%AB%E8%8B%8F%E6%96%B0%E7%9A%93%E6%81%8B%E6%83%85%23) `368.1K 🔥` `NEW`
1. [iPhone18标准版神似17Pro](https://s.weibo.com/weibo?q=%23iPhone18%E6%A0%87%E5%87%86%E7%89%88%E7%A5%9E%E4%BC%BC17Pro%23) `348.5K 🔥` `NEW`
1. [张凌赫女主](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A5%B3%E4%B8%BB%23) `329.6K 🔥` `NEW`
1. [应采儿公关 拉好感](https://s.weibo.com/weibo?q=%23%E5%BA%94%E9%87%87%E5%84%BF%E5%85%AC%E5%85%B3%20%E6%8B%89%E5%A5%BD%E6%84%9F%23) `308.0K 🔥` `NEW`
1. [英国首相斯塔默宣布辞职](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E9%A6%96%E7%9B%B8%E6%96%AF%E5%A1%94%E9%BB%98%E5%AE%A3%E5%B8%83%E8%BE%9E%E8%81%8C%23) `282.7K 🔥` `NEW`
1. [乌拉圭临时抱佛脚起效](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E6%8B%89%E5%9C%AD%E4%B8%B4%E6%97%B6%E6%8A%B1%E4%BD%9B%E8%84%9A%E8%B5%B7%E6%95%88%23) `282.6K 🔥` `NEW`
1. [爱情有烟火藏了3年是为了世界杯吧](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E6%9C%89%E7%83%9F%E7%81%AB%E8%97%8F%E4%BA%863%E5%B9%B4%E6%98%AF%E4%B8%BA%E4%BA%86%E4%B8%96%E7%95%8C%E6%9D%AF%E5%90%A7%23) `282.6K 🔥` `NEW`
1. [蔡磊回应倾家荡产救自己被称自私](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E5%9B%9E%E5%BA%94%E5%80%BE%E5%AE%B6%E8%8D%A1%E4%BA%A7%E6%95%91%E8%87%AA%E5%B7%B1%E8%A2%AB%E7%A7%B0%E8%87%AA%E7%A7%81%23) `282.6K 🔥` `NEW`
1. [假助农营销作秀1个月收割1000万](https://s.weibo.com/weibo?q=%23%E5%81%87%E5%8A%A9%E5%86%9C%E8%90%A5%E9%94%80%E4%BD%9C%E7%A7%801%E4%B8%AA%E6%9C%88%E6%94%B6%E5%89%B21000%E4%B8%87%23) `282.5K 🔥` `NEW`
1. [滴露的致歉声明里满是甩锅](https://s.weibo.com/weibo?q=%23%E6%BB%B4%E9%9C%B2%E7%9A%84%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%E9%87%8C%E6%BB%A1%E6%98%AF%E7%94%A9%E9%94%85%23) `282.5K 🔥` `NEW`
1. [钟美美入学波士顿大学 (Meimei Zhong enrolls at Boston University)](https://s.weibo.com/weibo?q=%23%E9%92%9F%E7%BE%8E%E7%BE%8E%E5%85%A5%E5%AD%A6%E6%B3%A2%E5%A3%AB%E9%A1%BF%E5%A4%A7%E5%AD%A6%23) `282.4K 🔥` `NEW`
1. [沈梦辰 全身涂粉底液](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%20%E5%85%A8%E8%BA%AB%E6%B6%82%E7%B2%89%E5%BA%95%E6%B6%B2%23) `282.3K 🔥` `NEW`
1. [建议大家把消极口癖戒掉](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E6%8A%8A%E6%B6%88%E6%9E%81%E5%8F%A3%E7%99%96%E6%88%92%E6%8E%89%23) `282.3K 🔥` `NEW`
1. [李金铭曾回应那家人没有伤害她](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E6%9B%BE%E5%9B%9E%E5%BA%94%E9%82%A3%E5%AE%B6%E4%BA%BA%E6%B2%A1%E6%9C%89%E4%BC%A4%E5%AE%B3%E5%A5%B9%23) `282.3K 🔥` `NEW`
1. [复联5 泄露](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E8%81%945%20%E6%B3%84%E9%9C%B2%23) `282.2K 🔥` `NEW`
1. [日本旭日旗现身世界杯看台韩网友痛批](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%97%AD%E6%97%A5%E6%97%97%E7%8E%B0%E8%BA%AB%E4%B8%96%E7%95%8C%E6%9D%AF%E7%9C%8B%E5%8F%B0%E9%9F%A9%E7%BD%91%E5%8F%8B%E7%97%9B%E6%89%B9%23) `282.2K 🔥` `NEW`
1. [白玉兰预测](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E9%A2%84%E6%B5%8B%23) `282.1K 🔥` `NEW`
1. [真人短剧播不过AI剧了](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E4%BA%BA%E7%9F%AD%E5%89%A7%E6%92%AD%E4%B8%8D%E8%BF%87AI%E5%89%A7%E4%BA%86%23) `275.2K 🔥` `NEW`
1. [官方回应纸尿裤甲酰胺报道](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E7%BA%B8%E5%B0%BF%E8%A3%A4%E7%94%B2%E9%85%B0%E8%83%BA%E6%8A%A5%E9%81%93%23) `267.4K 🔥` `NEW`
1. [上戏体重管得也太严格了吧](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%88%8F%E4%BD%93%E9%87%8D%E7%AE%A1%E5%BE%97%E4%B9%9F%E5%A4%AA%E4%B8%A5%E6%A0%BC%E4%BA%86%E5%90%A7%23) `266.4K 🔥` `NEW`
1. [滴露发声明致歉 (Dettol issues statement to apologize)](https://s.weibo.com/weibo?q=%23%E6%BB%B4%E9%9C%B2%E5%8F%91%E5%A3%B0%E6%98%8E%E8%87%B4%E6%AD%89%23) `251.5K 🔥` `NEW`
1. [钟美美致歉](https://s.weibo.com/weibo?q=%23%E9%92%9F%E7%BE%8E%E7%BE%8E%E8%87%B4%E6%AD%89%23) `250.8K 🔥` `NEW`
1. [黄景瑜自行车](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E8%87%AA%E8%A1%8C%E8%BD%A6%23) `247.0K 🔥` `NEW`
1. [日方舰艇飞机挑衅辽宁舰编队](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%96%B9%E8%88%B0%E8%89%87%E9%A3%9E%E6%9C%BA%E6%8C%91%E8%A1%85%E8%BE%BD%E5%AE%81%E8%88%B0%E7%BC%96%E9%98%9F%23) `240.2K 🔥` `NEW`
1. [关晓彤确认出演红掌](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%A1%AE%E8%AE%A4%E5%87%BA%E6%BC%94%E7%BA%A2%E6%8E%8C%23) `237.8K 🔥` `NEW`
1. [小米回应为什么要无人驾驶跑纽北](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E6%97%A0%E4%BA%BA%E9%A9%BE%E9%A9%B6%E8%B7%91%E7%BA%BD%E5%8C%97%23) `235.4K 🔥` `NEW`
1. [多家医院开始自主定价飞刀费](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E5%8C%BB%E9%99%A2%E5%BC%80%E5%A7%8B%E8%87%AA%E4%B8%BB%E5%AE%9A%E4%BB%B7%E9%A3%9E%E5%88%80%E8%B4%B9%23) `232.3K 🔥` `NEW`
1. [咖啡店贴店内可吸烟宣传牌引争议](https://s.weibo.com/weibo?q=%23%E5%92%96%E5%95%A1%E5%BA%97%E8%B4%B4%E5%BA%97%E5%86%85%E5%8F%AF%E5%90%B8%E7%83%9F%E5%AE%A3%E4%BC%A0%E7%89%8C%E5%BC%95%E4%BA%89%E8%AE%AE%23) `231.9K 🔥` `NEW`
1. [中央空调为什么总被说是电费刺客](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%A4%AE%E7%A9%BA%E8%B0%83%E4%B8%BA%E4%BB%80%E4%B9%88%E6%80%BB%E8%A2%AB%E8%AF%B4%E6%98%AF%E7%94%B5%E8%B4%B9%E5%88%BA%E5%AE%A2%23) `228.5K 🔥` `NEW`
1. [纸尿裤甲酰胺风波罕见一幕](https://s.weibo.com/weibo?q=%23%E7%BA%B8%E5%B0%BF%E8%A3%A4%E7%94%B2%E9%85%B0%E8%83%BA%E9%A3%8E%E6%B3%A2%E7%BD%95%E8%A7%81%E4%B8%80%E5%B9%95%23) `223.8K 🔥` `NEW`
1. [李羲承出道 (Li Xicheng makes his debut)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E5%87%BA%E9%81%93%23) `223.8K 🔥` `NEW`
1. [易梦玲瘦成皮包骨了](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%A2%A6%E7%8E%B2%E7%98%A6%E6%88%90%E7%9A%AE%E5%8C%85%E9%AA%A8%E4%BA%86%23) `215.2K 🔥` `NEW`
1. [职场里听过最有水平的一句话](https://s.weibo.com/weibo?q=%23%E8%81%8C%E5%9C%BA%E9%87%8C%E5%90%AC%E8%BF%87%E6%9C%80%E6%9C%89%E6%B0%B4%E5%B9%B3%E7%9A%84%E4%B8%80%E5%8F%A5%E8%AF%9D%23) `201.2K 🔥` `NEW`
1. [Angelababy韩系鬼塑千金](https://s.weibo.com/weibo?q=%23Angelababy%E9%9F%A9%E7%B3%BB%E9%AC%BC%E5%A1%91%E5%8D%83%E9%87%91%23) `201.1K 🔥` `NEW`
1. [券商股暴涨4大原因](https://s.weibo.com/weibo?q=%23%E5%88%B8%E5%95%86%E8%82%A1%E6%9A%B4%E6%B6%A84%E5%A4%A7%E5%8E%9F%E5%9B%A0%23) `167.0K 🔥` `NEW`
1. [真正重视你的人是什么样的](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E9%87%8D%E8%A7%86%E4%BD%A0%E7%9A%84%E4%BA%BA%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%23) `166.6K 🔥` `NEW`
1. [白鹿音乐会门票二开秒罄](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%9F%B3%E4%B9%90%E4%BC%9A%E9%97%A8%E7%A5%A8%E4%BA%8C%E5%BC%80%E7%A7%92%E7%BD%84%23) `164.8K 🔥` `NEW`
1. [建议炽夏耀眼翘楚换乘男主](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%82%BD%E5%A4%8F%E8%80%80%E7%9C%BC%E7%BF%98%E6%A5%9A%E6%8D%A2%E4%B9%98%E7%94%B7%E4%B8%BB%23) `162.1K 🔥` `NEW`
1. [生日朋友圈发了三天了](https://s.weibo.com/weibo?q=%23%E7%94%9F%E6%97%A5%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%8F%91%E4%BA%86%E4%B8%89%E5%A4%A9%E4%BA%86%23) `407.6K 🔥`
1. [恋与深空 第六个男主](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%20%E7%AC%AC%E5%85%AD%E4%B8%AA%E7%94%B7%E4%B8%BB%23) `259.1K 🔥` `-84%`

Updated at 2026-06-22 19:17:11

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
