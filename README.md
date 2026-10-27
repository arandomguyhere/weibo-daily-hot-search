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

1. [姆巴佩深知被羞辱的滋味却不懂尊重](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%B7%B1%E7%9F%A5%E8%A2%AB%E7%BE%9E%E8%BE%B1%E7%9A%84%E6%BB%8B%E5%91%B3%E5%8D%B4%E4%B8%8D%E6%87%82%E5%B0%8A%E9%87%8D%23) `10.5M 🔥` `NEW`
1. [央视叫停涉姆巴佩赛事和广告播出](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E5%8F%AB%E5%81%9C%E6%B6%89%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%B5%9B%E4%BA%8B%E5%92%8C%E5%B9%BF%E5%91%8A%E6%92%AD%E5%87%BA%23) `8.7M 🔥` `NEW`
1. [AL Hope](https://s.weibo.com/weibo?q=%23AL%20Hope%23) `2.2M 🔥` `NEW`
1. [我国能源绿色转型成绩单](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E8%83%BD%E6%BA%90%E7%BB%BF%E8%89%B2%E8%BD%AC%E5%9E%8B%E6%88%90%E7%BB%A9%E5%8D%95%23) `1.8M 🔥` `NEW`
1. [电诈头目刘忍被押解回国画面曝光](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%AF%88%E5%A4%B4%E7%9B%AE%E5%88%98%E5%BF%8D%E8%A2%AB%E6%8A%BC%E8%A7%A3%E5%9B%9E%E5%9B%BD%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `1.7M 🔥` `NEW`
1. [姆巴佩多平台被禁言](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%A4%9A%E5%B9%B3%E5%8F%B0%E8%A2%AB%E7%A6%81%E8%A8%80%23) `1.7M 🔥` `NEW`
1. [这群聊是我能进的吗](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%BE%A4%E8%81%8A%E6%98%AF%E6%88%91%E8%83%BD%E8%BF%9B%E7%9A%84%E5%90%97%23) `1.7M 🔥` `NEW`
1. [小米首个住宅小区开售](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%A6%96%E4%B8%AA%E4%BD%8F%E5%AE%85%E5%B0%8F%E5%8C%BA%E5%BC%80%E5%94%AE%23) `1.7M 🔥` `NEW`
1. [声生不息宝岛季2首发阵容](https://s.weibo.com/weibo?q=%23%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%E5%AE%9D%E5%B2%9B%E5%AD%A32%E9%A6%96%E5%8F%91%E9%98%B5%E5%AE%B9%23) `1.6M 🔥` `NEW`
1. [孩子们心中的英雄有了模样](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E4%BB%AC%E5%BF%83%E4%B8%AD%E7%9A%84%E8%8B%B1%E9%9B%84%E6%9C%89%E4%BA%86%E6%A8%A1%E6%A0%B7%23) `1.6M 🔥` `NEW`
1. [AI短剧演技比真人还好](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%E6%BC%94%E6%8A%80%E6%AF%94%E7%9C%9F%E4%BA%BA%E8%BF%98%E5%A5%BD%23) `1.5M 🔥` `NEW`
1. [皇马大吧声明](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E5%A4%A7%E5%90%A7%E5%A3%B0%E6%98%8E%23) `1.5M 🔥` `NEW`
1. [新娘回应参加婚礼吃了一桌外卖](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E5%9B%9E%E5%BA%94%E5%8F%82%E5%8A%A0%E5%A9%9A%E7%A4%BC%E5%90%83%E4%BA%86%E4%B8%80%E6%A1%8C%E5%A4%96%E5%8D%96%23) `1.4M 🔥` `NEW`
1. [姆巴佩践踏红线](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%B7%B5%E8%B8%8F%E7%BA%A2%E7%BA%BF%23) `1.4M 🔥` `NEW`
1. [支付宝微信日本满减像送钱](https://s.weibo.com/weibo?q=%23%E6%94%AF%E4%BB%98%E5%AE%9D%E5%BE%AE%E4%BF%A1%E6%97%A5%E6%9C%AC%E6%BB%A1%E5%87%8F%E5%83%8F%E9%80%81%E9%92%B1%23) `1.4M 🔥` `NEW`
1. [西甲](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%94%B2%23) `1.3M 🔥` `NEW`
1. [A股基本面底盘愈发坚实](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%9F%BA%E6%9C%AC%E9%9D%A2%E5%BA%95%E7%9B%98%E6%84%88%E5%8F%91%E5%9D%9A%E5%AE%9E%23) `1.3M 🔥` `NEW`
1. [迪奥下架姆巴佩内容](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A5%A5%E4%B8%8B%E6%9E%B6%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%86%85%E5%AE%B9%23) `1.3M 🔥` `NEW`
1. [参加婚礼吃了一桌子外卖](https://s.weibo.com/weibo?q=%23%E5%8F%82%E5%8A%A0%E5%A9%9A%E7%A4%BC%E5%90%83%E4%BA%86%E4%B8%80%E6%A1%8C%E5%AD%90%E5%A4%96%E5%8D%96%23) `1.3M 🔥` `NEW`
1. [多个品牌终止与姆巴佩合作](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%B8%AA%E5%93%81%E7%89%8C%E7%BB%88%E6%AD%A2%E4%B8%8E%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%90%88%E4%BD%9C%23) `1.3M 🔥` `NEW`
1. [厉娜许飞 华妃端妃](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E8%AE%B8%E9%A3%9E%20%E5%8D%8E%E5%A6%83%E7%AB%AF%E5%A6%83%23) `1.2M 🔥` `NEW`
1. [徽剑被夹掉指甲用枯草蔽体遗弃荒山](https://s.weibo.com/weibo?q=%23%E5%BE%BD%E5%89%91%E8%A2%AB%E5%A4%B9%E6%8E%89%E6%8C%87%E7%94%B2%E7%94%A8%E6%9E%AF%E8%8D%89%E8%94%BD%E4%BD%93%E9%81%97%E5%BC%83%E8%8D%92%E5%B1%B1%23) `1.2M 🔥` `NEW`
1. [蒋欣被男设计师亲了脖子](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%E8%A2%AB%E7%94%B7%E8%AE%BE%E8%AE%A1%E5%B8%88%E4%BA%B2%E4%BA%86%E8%84%96%E5%AD%90%23) `685.6K 🔥` `NEW`
1. [小红书发布姆巴佩相关声明](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%BA%A2%E4%B9%A6%E5%8F%91%E5%B8%83%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%9B%B8%E5%85%B3%E5%A3%B0%E6%98%8E%23) `393.1K 🔥` `NEW`
1. [懂球帝对姆巴佩不当发言不翻译不接受](https://s.weibo.com/weibo?q=%23%E6%87%82%E7%90%83%E5%B8%9D%E5%AF%B9%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%B8%8D%E5%BD%93%E5%8F%91%E8%A8%80%E4%B8%8D%E7%BF%BB%E8%AF%91%E4%B8%8D%E6%8E%A5%E5%8F%97%23) `351.0K 🔥` `NEW`
1. [蒙牛终止与姆巴佩合作](https://s.weibo.com/weibo?q=%23%E8%92%99%E7%89%9B%E7%BB%88%E6%AD%A2%E4%B8%8E%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%90%88%E4%BD%9C%23) `259.4K 🔥` `NEW`
1. [金鸡奖提名最佳女主的哭戏](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B8%A1%E5%A5%96%E6%8F%90%E5%90%8D%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E7%9A%84%E5%93%AD%E6%88%8F%23) `249.7K 🔥` `NEW`
1. [网友把黄多多和吴彦祖老婆的礼服互换](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8A%8A%E9%BB%84%E5%A4%9A%E5%A4%9A%E5%92%8C%E5%90%B4%E5%BD%A6%E7%A5%96%E8%80%81%E5%A9%86%E7%9A%84%E7%A4%BC%E6%9C%8D%E4%BA%92%E6%8D%A2%23) `247.0K 🔥` `NEW`
1. [李健毛不易婚礼致辞被对比](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E8%87%B4%E8%BE%9E%E8%A2%AB%E5%AF%B9%E6%AF%94%23) `212.9K 🔥` `NEW`
1. [徽剑案社会危害性极大法院驳回上诉](https://s.weibo.com/weibo?q=%23%E5%BE%BD%E5%89%91%E6%A1%88%E7%A4%BE%E4%BC%9A%E5%8D%B1%E5%AE%B3%E6%80%A7%E6%9E%81%E5%A4%A7%E6%B3%95%E9%99%A2%E9%A9%B3%E5%9B%9E%E4%B8%8A%E8%AF%89%23) `191.7K 🔥` `NEW`
1. [有线电视不得播放开机广告](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BA%BF%E7%94%B5%E8%A7%86%E4%B8%8D%E5%BE%97%E6%92%AD%E6%94%BE%E5%BC%80%E6%9C%BA%E5%B9%BF%E5%91%8A%23) `180.7K 🔥` `NEW`
1. [三个外宾点男模听儿歌](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%B8%AA%E5%A4%96%E5%AE%BE%E7%82%B9%E7%94%B7%E6%A8%A1%E5%90%AC%E5%84%BF%E6%AD%8C%23) `179.7K 🔥` `NEW`
1. [姥姥介意被叫外婆](https://s.weibo.com/weibo?q=%23%E5%A7%A5%E5%A7%A5%E4%BB%8B%E6%84%8F%E8%A2%AB%E5%8F%AB%E5%A4%96%E5%A9%86%23) `176.0K 🔥` `NEW`
1. [就算魏娆再娶了戚将军](https://s.weibo.com/weibo?q=%23%E5%B0%B1%E7%AE%97%E9%AD%8F%E5%A8%86%E5%86%8D%E5%A8%B6%E4%BA%86%E6%88%9A%E5%B0%86%E5%86%9B%23) `171.6K 🔥` `NEW`
1. [张子萱陈赫一家四口回京只能住酒店](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E8%90%B1%E9%99%88%E8%B5%AB%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%E5%9B%9E%E4%BA%AC%E5%8F%AA%E8%83%BD%E4%BD%8F%E9%85%92%E5%BA%97%23) `171.4K 🔥` `NEW`
1. [小城良方追剧团](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E8%BF%BD%E5%89%A7%E5%9B%A2%23) `166.3K 🔥` `NEW`
1. [星巴克改革后大厅直接空了](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%B7%B4%E5%85%8B%E6%94%B9%E9%9D%A9%E5%90%8E%E5%A4%A7%E5%8E%85%E7%9B%B4%E6%8E%A5%E7%A9%BA%E4%BA%86%23) `166.0K 🔥` `NEW`
1. [田曦薇蹦蹦跳跳上班了](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%B9%A6%E8%B9%A6%E8%B7%B3%E8%B7%B3%E4%B8%8A%E7%8F%AD%E4%BA%86%23) `154.1K 🔥` `NEW`
1. [韩国股市涨到熔断](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E5%B8%82%E6%B6%A8%E5%88%B0%E7%86%94%E6%96%AD%23) `128.9K 🔥` `NEW`
1. [曾沛慈声生不息直播](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%E7%9B%B4%E6%92%AD%23) `127.1K 🔥` `NEW`
1. [笑死雨衣咋就不能做成这样](https://s.weibo.com/weibo?q=%23%E7%AC%91%E6%AD%BB%E9%9B%A8%E8%A1%A3%E5%92%8B%E5%B0%B1%E4%B8%8D%E8%83%BD%E5%81%9A%E6%88%90%E8%BF%99%E6%A0%B7%23) `124.5K 🔥` `NEW`
1. [被母子虐杀小猫由小区居民轮流喂养](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%AF%8D%E5%AD%90%E8%99%90%E6%9D%80%E5%B0%8F%E7%8C%AB%E7%94%B1%E5%B0%8F%E5%8C%BA%E5%B1%85%E6%B0%91%E8%BD%AE%E6%B5%81%E5%96%82%E5%85%BB%23) `123.3K 🔥` `NEW`
1. [一彩民花10元中682万大奖](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BD%A9%E6%B0%91%E8%8A%B110%E5%85%83%E4%B8%AD682%E4%B8%87%E5%A4%A7%E5%A5%96%23) `117.7K 🔥` `NEW`
1. [声生不息宝岛季2直播](https://s.weibo.com/weibo?q=%23%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%E5%AE%9D%E5%B2%9B%E5%AD%A32%E7%9B%B4%E6%92%AD%23) `117.4K 🔥` `NEW`
1. [一诺时差手势舞](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E6%97%B6%E5%B7%AE%E6%89%8B%E5%8A%BF%E8%88%9E%23) `113.5K 🔥` `NEW`
1. [陈意礼do鼻子](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%84%8F%E7%A4%BCdo%E9%BC%BB%E5%AD%90%23) `111.7K 🔥` `NEW`
1. [天猫品质羽绒服比国标还严格](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB%E5%93%81%E8%B4%A8%E7%BE%BD%E7%BB%92%E6%9C%8D%E6%AF%94%E5%9B%BD%E6%A0%87%E8%BF%98%E4%B8%A5%E6%A0%BC%23) `111.3K 🔥` `NEW`
1. [天猫双11和王安宇打开淘宝出发](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB%E5%8F%8C11%E5%92%8C%E7%8E%8B%E5%AE%89%E5%AE%87%E6%89%93%E5%BC%80%E6%B7%98%E5%AE%9D%E5%87%BA%E5%8F%91%23) `5.5M 🔥` `+589%`
1. [张子萱一见面就扑进陈赫怀里](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E8%90%B1%E4%B8%80%E8%A7%81%E9%9D%A2%E5%B0%B1%E6%89%91%E8%BF%9B%E9%99%88%E8%B5%AB%E6%80%80%E9%87%8C%23) `376.4K 🔥`
1. [东鹏饮料终止与姆巴佩合作](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%B9%8F%E9%A5%AE%E6%96%99%E7%BB%88%E6%AD%A2%E4%B8%8E%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%90%88%E4%BD%9C%23) `692.3K 🔥` `-47%`

Updated at 2026-10-27 16:16:53

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
