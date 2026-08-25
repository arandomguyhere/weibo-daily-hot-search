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

1. [网络辟谣标签 (Internet rumor refuting tags)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BB%9C%E8%BE%9F%E8%B0%A3%E6%A0%87%E7%AD%BE%23) `728.7K 🔥` `NEW`
1. [阴阳师十周年](https://s.weibo.com/weibo?q=%23%E9%98%B4%E9%98%B3%E5%B8%88%E5%8D%81%E5%91%A8%E5%B9%B4%23) `715.4K 🔥` `NEW`
1. [时代少年团直播](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%9B%B4%E6%92%AD%23) `534.0K 🔥` `NEW`
1. [朱志鑫solo金丝眼镜造型](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%ABsolo%E9%87%91%E4%B8%9D%E7%9C%BC%E9%95%9C%E9%80%A0%E5%9E%8B%23) `531.3K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `497.9K 🔥` `NEW`
1. [男子3个月内4次趴女子家门偷听](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%903%E4%B8%AA%E6%9C%88%E5%86%854%E6%AC%A1%E8%B6%B4%E5%A5%B3%E5%AD%90%E5%AE%B6%E9%97%A8%E5%81%B7%E5%90%AC%23) `486.9K 🔥` `NEW`
1. [韩国愈演愈烈的失踪事件](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%84%88%E6%BC%94%E6%84%88%E7%83%88%E7%9A%84%E5%A4%B1%E8%B8%AA%E4%BA%8B%E4%BB%B6%23) `177.7K 🔥` `NEW`
1. [医生称触胸猥亵是污蔑已提交监控](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%A7%B0%E8%A7%A6%E8%83%B8%E7%8C%A5%E4%BA%B5%E6%98%AF%E6%B1%A1%E8%94%91%E5%B7%B2%E6%8F%90%E4%BA%A4%E7%9B%91%E6%8E%A7%23) `158.6K 🔥` `NEW`
1. [TOP演唱会](https://s.weibo.com/weibo?q=%23TOP%E6%BC%94%E5%94%B1%E4%BC%9A%23) `148.5K 🔥` `NEW`
1. [马云增持阿里港股超6亿港元](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BA%91%E5%A2%9E%E6%8C%81%E9%98%BF%E9%87%8C%E6%B8%AF%E8%82%A1%E8%B6%856%E4%BA%BF%E6%B8%AF%E5%85%83%23) `145.3K 🔥` `NEW`
1. [魏大勋紧身裤界最严厉的父亲 (Wei Daxun is the strictest father in the leggings industry)](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E7%B4%A7%E8%BA%AB%E8%A3%A4%E7%95%8C%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E7%88%B6%E4%BA%B2%23) `144.4K 🔥` `NEW`
1. [多起AI造谣小米案件被侦破](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E8%B5%B7AI%E9%80%A0%E8%B0%A3%E5%B0%8F%E7%B1%B3%E6%A1%88%E4%BB%B6%E8%A2%AB%E4%BE%A6%E7%A0%B4%23) `143.7K 🔥` `NEW`
1. [一架美国军用运输机降落莫斯科](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%9E%B6%E7%BE%8E%E5%9B%BD%E5%86%9B%E7%94%A8%E8%BF%90%E8%BE%93%E6%9C%BA%E9%99%8D%E8%90%BD%E8%8E%AB%E6%96%AF%E7%A7%91%23) `143.4K 🔥` `NEW`
1. [山西铁头涉嫌敲诈被抓](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E9%93%81%E5%A4%B4%E6%B6%89%E5%AB%8C%E6%95%B2%E8%AF%88%E8%A2%AB%E6%8A%93%23) `143.2K 🔥` `NEW`
1. [在韩失联女生已在国内找到工作](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E5%B7%B2%E5%9C%A8%E5%9B%BD%E5%86%85%E6%89%BE%E5%88%B0%E5%B7%A5%E4%BD%9C%23) `1.1M 🔥` `+372%`
1. [原来大家都是这样防止被套话的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E9%98%B2%E6%AD%A2%E8%A2%AB%E5%A5%97%E8%AF%9D%E7%9A%84%23) `805.4K 🔥` `+44%`
1. [阴阳师](https://s.weibo.com/weibo?q=%23%E9%98%B4%E9%98%B3%E5%B8%88%23) `750.3K 🔥` `+75%`
1. [金鹰奖热门男女主掉提名单 (Golden Eagle Awards popular male and female protagonists drop nominations)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E7%83%AD%E9%97%A8%E7%94%B7%E5%A5%B3%E4%B8%BB%E6%8E%89%E6%8F%90%E5%90%8D%E5%8D%95%23) `686.4K 🔥` `+50%`
1. [网传爱情公寓回归季阵容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%9B%9E%E5%BD%92%E5%AD%A3%E9%98%B5%E5%AE%B9%23) `651.0K 🔥` `+39%`
1. [什么行为让你觉得朋友不能深交](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E8%A1%8C%E4%B8%BA%E8%AE%A9%E4%BD%A0%E8%A7%89%E5%BE%97%E6%9C%8B%E5%8F%8B%E4%B8%8D%E8%83%BD%E6%B7%B1%E4%BA%A4%23) `629.8K 🔥` `+119%`
1. [赵丽颖突发身体不适](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%AA%81%E5%8F%91%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%23) `586.0K 🔥` `+30%`
1. [乳房触诊当事医生称已起诉](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A%E5%BD%93%E4%BA%8B%E5%8C%BB%E7%94%9F%E7%A7%B0%E5%B7%B2%E8%B5%B7%E8%AF%89%23) `551.1K 🔥` `+24%`
1. [白鹿未获金鹰奖提名](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9C%AA%E8%8E%B7%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%23) `525.8K 🔥` `+23%`
1. [金价飞涨原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%A3%9E%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `504.6K 🔥` `+33%`
1. [乌尔善再不拍AI都替他拍完了](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%B0%94%E5%96%84%E5%86%8D%E4%B8%8D%E6%8B%8DAI%E9%83%BD%E6%9B%BF%E4%BB%96%E6%8B%8D%E5%AE%8C%E4%BA%86%23) `495.8K 🔥` `+239%`
1. [爱情公寓 王冠](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%20%E7%8E%8B%E5%86%A0%23) `479.2K 🔥` `+54%`
1. [考公女子在星巴克撑伞备考](https://s.weibo.com/weibo?q=%23%E8%80%83%E5%85%AC%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%98%9F%E5%B7%B4%E5%85%8B%E6%92%91%E4%BC%9E%E5%A4%87%E8%80%83%23) `457.3K 🔥` `+39%`
1. [杨幂掉提](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%8E%89%E6%8F%90%23) `445.0K 🔥` `+50%`
1. [乳房触诊20多次后发现结节摸不到](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A20%E5%A4%9A%E6%AC%A1%E5%90%8E%E5%8F%91%E7%8E%B0%E7%BB%93%E8%8A%82%E6%91%B8%E4%B8%8D%E5%88%B0%23) `351.1K 🔥` `+30%`
1. [金鹰奖提名名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `768.5K 🔥`
1. [赵丽颖比任何人都爱惜自己的羽毛 (Zhao Liying cherishes her feathers more than anyone else)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%AF%94%E4%BB%BB%E4%BD%95%E4%BA%BA%E9%83%BD%E7%88%B1%E6%83%9C%E8%87%AA%E5%B7%B1%E7%9A%84%E7%BE%BD%E6%AF%9B%23) `458.8K 🔥`
1. [欢子工作室质问披哥](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%B4%A8%E9%97%AE%E6%8A%AB%E5%93%A5%23) `286.4K 🔥`
1. [乳房触诊当事医生称已提交诊室视频](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A%E5%BD%93%E4%BA%8B%E5%8C%BB%E7%94%9F%E7%A7%B0%E5%B7%B2%E6%8F%90%E4%BA%A4%E8%AF%8A%E5%AE%A4%E8%A7%86%E9%A2%91%23) `169.4K 🔥`
1. [爱情公寓](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%23) `143.0K 🔥`
1. [杨幂生万物最大奖微博QUEEN (Yang Mi wins the biggest prize in all things Weibo QUEEN)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%94%9F%E4%B8%87%E7%89%A9%E6%9C%80%E5%A4%A7%E5%A5%96%E5%BE%AE%E5%8D%9AQUEEN%23) `135.9K 🔥`
1. [警方确认失联中国女生无韩出境记录](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E7%A1%AE%E8%AE%A4%E5%A4%B1%E8%81%94%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E6%97%A0%E9%9F%A9%E5%87%BA%E5%A2%83%E8%AE%B0%E5%BD%95%23) `822.7K 🔥` `-28%`
1. [中国连续17年保持全球第二大进口市场](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%BF%9E%E7%BB%AD17%E5%B9%B4%E4%BF%9D%E6%8C%81%E5%85%A8%E7%90%83%E7%AC%AC%E4%BA%8C%E5%A4%A7%E8%BF%9B%E5%8F%A3%E5%B8%82%E5%9C%BA%23) `811.1K 🔥` `-22%`
1. [多款APP被通报](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%AC%BEAPP%E8%A2%AB%E9%80%9A%E6%8A%A5%23) `515.6K 🔥` `-53%`
1. [女子用3年垃圾桶才发现用错了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A83%E5%B9%B4%E5%9E%83%E5%9C%BE%E6%A1%B6%E6%89%8D%E5%8F%91%E7%8E%B0%E7%94%A8%E9%94%99%E4%BA%86%23) `472.6K 🔥` `-53%`
1. [时代少年团空降评论区](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%A9%BA%E9%99%8D%E8%AF%84%E8%AE%BA%E5%8C%BA%23) `301.7K 🔥` `-31%`
1. [全球首个6nm晶圆级垂直堆叠芯片](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%A6%96%E4%B8%AA6nm%E6%99%B6%E5%9C%86%E7%BA%A7%E5%9E%82%E7%9B%B4%E5%A0%86%E5%8F%A0%E8%8A%AF%E7%89%87%23) `179.0K 🔥` `-58%`
1. [金鹰奖 错别字](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E9%94%99%E5%88%AB%E5%AD%97%23) `174.5K 🔥` `-49%`
1. [鞠婧祎万花世界古董高定](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E5%8F%A4%E8%91%A3%E9%AB%98%E5%AE%9A%23) `172.7K 🔥` `-29%`
1. [德芙文案 翻车](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E8%8A%99%E6%96%87%E6%A1%88%20%E7%BF%BB%E8%BD%A6%23) `153.5K 🔥` `-83%`
1. [朱志鑫二周年内场黄海](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E4%BA%8C%E5%91%A8%E5%B9%B4%E5%86%85%E5%9C%BA%E9%BB%84%E6%B5%B7%23) `150.5K 🔥` `-65%`
1. [张元英安宥真小分队出道](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E5%AE%89%E5%AE%A5%E7%9C%9F%E5%B0%8F%E5%88%86%E9%98%9F%E5%87%BA%E9%81%93%23) `144.9K 🔥` `-40%`
1. [原来不是挂面不好吃](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E6%98%AF%E6%8C%82%E9%9D%A2%E4%B8%8D%E5%A5%BD%E5%90%83%23) `143.9K 🔥` `-36%`
1. [金鹰奖最佳男主](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E4%B8%BB%23) `143.8K 🔥` `-40%`
1. [老人容易在厨房犯哪些错](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%AE%B9%E6%98%93%E5%9C%A8%E5%8E%A8%E6%88%BF%E7%8A%AF%E5%93%AA%E4%BA%9B%E9%94%99%23) `143.5K 🔥` `-26%`
1. [炒菜不开油烟机等于吸二手烟吗](https://s.weibo.com/weibo?q=%23%E7%82%92%E8%8F%9C%E4%B8%8D%E5%BC%80%E6%B2%B9%E7%83%9F%E6%9C%BA%E7%AD%89%E4%BA%8E%E5%90%B8%E4%BA%8C%E6%89%8B%E7%83%9F%E5%90%97%23) `143.1K 🔥` `-30%`

Updated at 2026-08-25 20:36:21

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
