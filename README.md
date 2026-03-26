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

1. [内存条降价 (Memory module price reduction)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E6%9D%A1%E9%99%8D%E4%BB%B7%23) `736.3K 🔥` `NEW`
1. [恋与深空短信](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E7%9F%AD%E4%BF%A1%23) `239.4K 🔥` `NEW`
1. [中国无人飞枪曝光](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%97%A0%E4%BA%BA%E9%A3%9E%E6%9E%AA%E6%9B%9D%E5%85%89%23) `239.3K 🔥` `NEW`
1. [逐玉大结局](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%A4%A7%E7%BB%93%E5%B1%80%23) `239.1K 🔥` `NEW`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `239.0K 🔥` `NEW`
1. [张雪峰谈体制内混得好的人特点](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E8%B0%88%E4%BD%93%E5%88%B6%E5%86%85%E6%B7%B7%E5%BE%97%E5%A5%BD%E7%9A%84%E4%BA%BA%E7%89%B9%E7%82%B9%23) `238.2K 🔥` `NEW`
1. [43岁不健身和61岁健身的区别](https://s.weibo.com/weibo?q=%2343%E5%B2%81%E4%B8%8D%E5%81%A5%E8%BA%AB%E5%92%8C61%E5%B2%81%E5%81%A5%E8%BA%AB%E7%9A%84%E5%8C%BA%E5%88%AB%23) `238.1K 🔥` `NEW`
1. [什么意思和啥意思是有区别的](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D%E5%92%8C%E5%95%A5%E6%84%8F%E6%80%9D%E6%98%AF%E6%9C%89%E5%8C%BA%E5%88%AB%E7%9A%84%23) `237.1K 🔥` `NEW`
1. [张远真去做了魏哲鸣的嘉宾](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E7%9C%9F%E5%8E%BB%E5%81%9A%E4%BA%86%E9%AD%8F%E5%93%B2%E9%B8%A3%E7%9A%84%E5%98%89%E5%AE%BE%23) `121.0K 🔥` `NEW`
1. [宋慧乔首谈离婚原因](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%85%A7%E4%B9%94%E9%A6%96%E8%B0%88%E7%A6%BB%E5%A9%9A%E5%8E%9F%E5%9B%A0%23) `119.4K 🔥` `NEW`
1. [小猫一气之下怒吃了两口冻干 (The kitten ate two bites of freeze-dried food in anger.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%B8%80%E6%B0%94%E4%B9%8B%E4%B8%8B%E6%80%92%E5%90%83%E4%BA%86%E4%B8%A4%E5%8F%A3%E5%86%BB%E5%B9%B2%23) `116.9K 🔥` `NEW`
1. [王艺迪成为世乒赛参赛候选人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E8%BF%AA%E6%88%90%E4%B8%BA%E4%B8%96%E4%B9%92%E8%B5%9B%E5%8F%82%E8%B5%9B%E5%80%99%E9%80%89%E4%BA%BA%23) `115.8K 🔥` `NEW`
1. [Gumayusi预测HLE夺冠](https://s.weibo.com/weibo?q=%23Gumayusi%E9%A2%84%E6%B5%8BHLE%E5%A4%BA%E5%86%A0%23) `111.5K 🔥` `NEW`
1. [女乒第三次选拔王艺迪夺冠](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B9%92%E7%AC%AC%E4%B8%89%E6%AC%A1%E9%80%89%E6%8B%94%E7%8E%8B%E8%89%BA%E8%BF%AA%E5%A4%BA%E5%86%A0%23) `98.8K 🔥` `NEW`
1. [苏新皓痛失韩国市场](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E7%97%9B%E5%A4%B1%E9%9F%A9%E5%9B%BD%E5%B8%82%E5%9C%BA%23) `98.6K 🔥` `NEW`
1. [网约车司机车内挂牌诅咒投诉乘客](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A6%E8%BD%A6%E5%8F%B8%E6%9C%BA%E8%BD%A6%E5%86%85%E6%8C%82%E7%89%8C%E8%AF%85%E5%92%92%E6%8A%95%E8%AF%89%E4%B9%98%E5%AE%A2%23) `98.4K 🔥` `NEW`
1. [华晨宇排队吃烤鱼](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%8E%92%E9%98%9F%E5%90%83%E7%83%A4%E9%B1%BC%23) `98.0K 🔥` `NEW`
1. [清清 联盟说还没原谅我](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%B8%85%20%E8%81%94%E7%9B%9F%E8%AF%B4%E8%BF%98%E6%B2%A1%E5%8E%9F%E8%B0%85%E6%88%91%23) `78.4K 🔥` `NEW`
1. [原来半大小子吃穷老子是真的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%8D%8A%E5%A4%A7%E5%B0%8F%E5%AD%90%E5%90%83%E7%A9%B7%E8%80%81%E5%AD%90%E6%98%AF%E7%9C%9F%E7%9A%84%23) `78.3K 🔥` `NEW`
1. [踢世界杯每人先交1.5万美元](https://s.weibo.com/weibo?q=%23%E8%B8%A2%E4%B8%96%E7%95%8C%E6%9D%AF%E6%AF%8F%E4%BA%BA%E5%85%88%E4%BA%A41.5%E4%B8%87%E7%BE%8E%E5%85%83%23) `77.3K 🔥` `NEW`
1. [早期心血管病可能反映在脸上 (Early cardiovascular disease may be reflected on the face)](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%9C%9F%E5%BF%83%E8%A1%80%E7%AE%A1%E7%97%85%E5%8F%AF%E8%83%BD%E5%8F%8D%E6%98%A0%E5%9C%A8%E8%84%B8%E4%B8%8A%23) `1.0M 🔥` `+574%`
1. [董子健 我以前也是东北女婿](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AD%90%E5%81%A5%20%E6%88%91%E4%BB%A5%E5%89%8D%E4%B9%9F%E6%98%AF%E4%B8%9C%E5%8C%97%E5%A5%B3%E5%A9%BF%23) `238.7K 🔥` `+123%`
1. [孟子义差点上到李昀锐车上 (Meng Ziyi almost got on Li Yunrui’s car)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B7%AE%E7%82%B9%E4%B8%8A%E5%88%B0%E6%9D%8E%E6%98%80%E9%94%90%E8%BD%A6%E4%B8%8A%23) `238.6K 🔥` `+23%`
1. [以后将只在周二网购](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E5%B0%86%E5%8F%AA%E5%9C%A8%E5%91%A8%E4%BA%8C%E7%BD%91%E8%B4%AD%23) `238.4K 🔥` `+55%`
1. [孟子义腰比名牌细](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E8%85%B0%E6%AF%94%E5%90%8D%E7%89%8C%E7%BB%86%23) `236.9K 🔥` `+33%`
1. [拼多多新拼姆一期150亿品牌自营](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E6%96%B0%E6%8B%BC%E5%A7%86%E4%B8%80%E6%9C%9F150%E4%BA%BF%E5%93%81%E7%89%8C%E8%87%AA%E8%90%A5%23) `219.0K 🔥` `+28%`
1. [中方回应是否禁止Manus两高管离境](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E7%A6%81%E6%AD%A2Manus%E4%B8%A4%E9%AB%98%E7%AE%A1%E7%A6%BB%E5%A2%83%23) `212.3K 🔥` `+45%`
1. [女子买24元卤菜顺走40块钱大肠头](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B024%E5%85%83%E5%8D%A4%E8%8F%9C%E9%A1%BA%E8%B5%B040%E5%9D%97%E9%92%B1%E5%A4%A7%E8%82%A0%E5%A4%B4%23) `120.4K 🔥` `+61%`
1. [七彩云南万千气象](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%BD%A9%E4%BA%91%E5%8D%97%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%23) `572.8K 🔥`
1. [伊朗伊斯兰革命卫队海军指挥官身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BC%8A%E6%96%AF%E5%85%B0%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E6%B5%B7%E5%86%9B%E6%8C%87%E6%8C%A5%E5%AE%98%E8%BA%AB%E4%BA%A1%23) `239.0K 🔥`
1. [卧床35年女子顺利产下健康宝宝](https://s.weibo.com/weibo?q=%23%E5%8D%A7%E5%BA%8A35%E5%B9%B4%E5%A5%B3%E5%AD%90%E9%A1%BA%E5%88%A9%E4%BA%A7%E4%B8%8B%E5%81%A5%E5%BA%B7%E5%AE%9D%E5%AE%9D%23) `123.8K 🔥`
1. [佛山电翰自曝收入 (Foshan Dianhan reveals his income)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%B1%B1%E7%94%B5%E7%BF%B0%E8%87%AA%E6%9B%9D%E6%94%B6%E5%85%A5%23) `122.4K 🔥`
1. [郭敬明需要避谶](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E9%9C%80%E8%A6%81%E9%81%BF%E8%B0%B6%23) `121.5K 🔥`
1. [留几手发文暗讽被全网炮轰](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E5%8F%91%E6%96%87%E6%9A%97%E8%AE%BD%E8%A2%AB%E5%85%A8%E7%BD%91%E7%82%AE%E8%BD%B0%23) `119.3K 🔥`
1. [2026最吸金的星座](https://s.weibo.com/weibo?q=%232026%E6%9C%80%E5%90%B8%E9%87%91%E7%9A%84%E6%98%9F%E5%BA%A7%23) `118.7K 🔥`
1. [王一博 乐华](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E4%B9%90%E5%8D%8E%23) `118.0K 🔥`
1. [黄晓明回应没考上博士](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%9B%9E%E5%BA%94%E6%B2%A1%E8%80%83%E4%B8%8A%E5%8D%9A%E5%A3%AB%23) `117.4K 🔥`
1. [陈思罕又被星探看上了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E7%BD%95%E5%8F%88%E8%A2%AB%E6%98%9F%E6%8E%A2%E7%9C%8B%E4%B8%8A%E4%BA%86%23) `116.7K 🔥`
1. [刘慧严重违纪违法被开除党籍](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%85%A7%E4%B8%A5%E9%87%8D%E8%BF%9D%E7%BA%AA%E8%BF%9D%E6%B3%95%E8%A2%AB%E5%BC%80%E9%99%A4%E5%85%9A%E7%B1%8D%23) `116.2K 🔥`
1. [妹妹说赞成刘晓庆把遗产捐给国家](https://s.weibo.com/weibo?q=%23%E5%A6%B9%E5%A6%B9%E8%AF%B4%E8%B5%9E%E6%88%90%E5%88%98%E6%99%93%E5%BA%86%E6%8A%8A%E9%81%97%E4%BA%A7%E6%8D%90%E7%BB%99%E5%9B%BD%E5%AE%B6%23) `109.7K 🔥`
1. [鹿晗校草时期 现实版流星花园](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%A0%A1%E8%8D%89%E6%97%B6%E6%9C%9F%20%E7%8E%B0%E5%AE%9E%E7%89%88%E6%B5%81%E6%98%9F%E8%8A%B1%E5%9B%AD%23) `92.0K 🔥`
1. [张凌赫 张家玮 (Zhang Linghe Zhang Jiawei)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E5%BC%A0%E5%AE%B6%E7%8E%AE%23) `80.9K 🔥`
1. [埃安N60盲订开启 (Aian N60 blind order starts)](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%AE%89N60%E7%9B%B2%E8%AE%A2%E5%BC%80%E5%90%AF%23) `386.1K 🔥` `-50%`
1. [王俊凯 演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E6%BC%94%E5%94%B1%E4%BC%9A%23) `171.6K 🔥` `-25%`
1. [心疼清融](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E6%B8%85%E8%9E%8D%23) `126.7K 🔥` `-35%`
1. [妈妈重回案发现场洗刷儿子血迹](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E9%87%8D%E5%9B%9E%E6%A1%88%E5%8F%91%E7%8E%B0%E5%9C%BA%E6%B4%97%E5%88%B7%E5%84%BF%E5%AD%90%E8%A1%80%E8%BF%B9%23) `122.5K 🔥` `-31%`
1. [我们一直把苹果放反了](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E4%B8%80%E7%9B%B4%E6%8A%8A%E8%8B%B9%E6%9E%9C%E6%94%BE%E5%8F%8D%E4%BA%86%23) `120.2K 🔥` `-46%`
1. [王俊凯卡点521](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8D%A1%E7%82%B9521%23) `115.8K 🔥` `-31%`
1. [朴敏英瘦成这样](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E6%95%8F%E8%8B%B1%E7%98%A6%E6%88%90%E8%BF%99%E6%A0%B7%23) `99.1K 🔥` `-22%`
1. [每天一顿重口外卖影响有多大](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E4%B8%80%E9%A1%BF%E9%87%8D%E5%8F%A3%E5%A4%96%E5%8D%96%E5%BD%B1%E5%93%8D%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `98.1K 🔥` `-47%`
1. [无畏 领奖](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%20%E9%A2%86%E5%A5%96%23) `82.0K 🔥` `-52%`
1. [阚清子和老公一同现身机场 (Kan Qingzi and her husband appeared at the airport together)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%92%8C%E8%80%81%E5%85%AC%E4%B8%80%E5%90%8C%E7%8E%B0%E8%BA%AB%E6%9C%BA%E5%9C%BA%23) `80.2K 🔥` `-23%`

Updated at 2026-03-26 19:35:18

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
