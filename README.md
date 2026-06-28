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

1. [伊朗队队长怒斥国际足联 (Iran captain lashes out at FIFA)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%98%9F%E9%98%9F%E9%95%BF%E6%80%92%E6%96%A5%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%23) `1.1M 🔥` `NEW`
1. [国产高性能碳纤维再迎产能重大突破](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E9%AB%98%E6%80%A7%E8%83%BD%E7%A2%B3%E7%BA%A4%E7%BB%B4%E5%86%8D%E8%BF%8E%E4%BA%A7%E8%83%BD%E9%87%8D%E5%A4%A7%E7%AA%81%E7%A0%B4%23) `794.7K 🔥` `NEW`
1. [秦彻穿了围裙](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%BD%BB%E7%A9%BF%E4%BA%86%E5%9B%B4%E8%A3%99%23) `768.2K 🔥` `NEW`
1. [复习备考状态拉满](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E4%B9%A0%E5%A4%87%E8%80%83%E7%8A%B6%E6%80%81%E6%8B%89%E6%BB%A1%23) `622.2K 🔥` `NEW`
1. [女子被骗500万丈夫自杀身亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E9%AA%97500%E4%B8%87%E4%B8%88%E5%A4%AB%E8%87%AA%E6%9D%80%E8%BA%AB%E4%BA%A1%23) `615.1K 🔥` `NEW`
1. [灿如繁星定档节奏](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E5%AE%9A%E6%A1%A3%E8%8A%82%E5%A5%8F%23) `516.1K 🔥` `NEW`
1. [穆祉丞哭了](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%93%AD%E4%BA%86%23) `511.6K 🔥` `NEW`
1. [立陶宛生变](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E9%99%B6%E5%AE%9B%E7%94%9F%E5%8F%98%23) `491.0K 🔥` `NEW`
1. [李圣经 金永大](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A3%E7%BB%8F%20%E9%87%91%E6%B0%B8%E5%A4%A7%23) `473.1K 🔥` `NEW`
1. [白玉兰口碑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E5%8F%A3%E7%A2%91%23) `472.2K 🔥` `NEW`
1. [向佐向佑聊天记录 (Xiang Zuo Xiangyou chat history)](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E5%90%91%E4%BD%91%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `414.5K 🔥` `NEW`
1. [唐艺昕女儿接唐艺昕回家](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%A5%B3%E5%84%BF%E6%8E%A5%E5%94%90%E8%89%BA%E6%98%95%E5%9B%9E%E5%AE%B6%23) `383.8K 🔥` `NEW`
1. [孙中山后人谈祖国统一](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%B8%AD%E5%B1%B1%E5%90%8E%E4%BA%BA%E8%B0%88%E7%A5%96%E5%9B%BD%E7%BB%9F%E4%B8%80%23) `383.4K 🔥` `NEW`
1. [律师解读网红诋毁袁隆平育种技术](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%A7%A3%E8%AF%BB%E7%BD%91%E7%BA%A2%E8%AF%8B%E6%AF%81%E8%A2%81%E9%9A%86%E5%B9%B3%E8%82%B2%E7%A7%8D%E6%8A%80%E6%9C%AF%23) `383.1K 🔥` `NEW`
1. [男子上坟被老鹰突袭3次](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8A%E5%9D%9F%E8%A2%AB%E8%80%81%E9%B9%B0%E7%AA%81%E8%A2%AD3%E6%AC%A1%23) `382.3K 🔥` `NEW`
1. [曾沛慈直播](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E7%9B%B4%E6%92%AD%23) `382.1K 🔥` `NEW`
1. [唐艺昕张若昀都用小马宝莉的车](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%BC%A0%E8%8B%A5%E6%98%80%E9%83%BD%E7%94%A8%E5%B0%8F%E9%A9%AC%E5%AE%9D%E8%8E%89%E7%9A%84%E8%BD%A6%23) `381.8K 🔥` `NEW`
1. [刘宇宁还没原谅现偶吗](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%BF%98%E6%B2%A1%E5%8E%9F%E8%B0%85%E7%8E%B0%E5%81%B6%E5%90%97%23) `366.1K 🔥` `NEW`
1. [明天A股怎么走](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%A4%A9A%E8%82%A1%E6%80%8E%E4%B9%88%E8%B5%B0%23) `310.8K 🔥` `NEW`
1. [周杰伦北京演唱会中餐厅团建](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%8C%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%AD%E9%A4%90%E5%8E%85%E5%9B%A2%E5%BB%BA%23) `310.4K 🔥` `NEW`
1. [韩国队差旅费亏麻了 (The Korean team lost money on travel expenses)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%98%9F%E5%B7%AE%E6%97%85%E8%B4%B9%E4%BA%8F%E9%BA%BB%E4%BA%86%23) `309.9K 🔥` `NEW`
1. [女子替7户邻居交了17年电费](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9B%BF7%E6%88%B7%E9%82%BB%E5%B1%85%E4%BA%A4%E4%BA%8617%E5%B9%B4%E7%94%B5%E8%B4%B9%23) `301.8K 🔥` `NEW`
1. [恋与深空家园有厨房了](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%AE%B6%E5%9B%AD%E6%9C%89%E5%8E%A8%E6%88%BF%E4%BA%86%23) `246.5K 🔥` `NEW`
1. [杨紫经纪人差点被保镖拦着](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%B7%AE%E7%82%B9%E8%A2%AB%E4%BF%9D%E9%95%96%E6%8B%A6%E7%9D%80%23) `240.8K 🔥` `NEW`
1. [快乐老家6个人100张嘴](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E4%B9%90%E8%80%81%E5%AE%B66%E4%B8%AA%E4%BA%BA100%E5%BC%A0%E5%98%B4%23) `237.3K 🔥` `NEW`
1. [小区电线错接致女子替邻居交17年电费](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA%E7%94%B5%E7%BA%BF%E9%94%99%E6%8E%A5%E8%87%B4%E5%A5%B3%E5%AD%90%E6%9B%BF%E9%82%BB%E5%B1%85%E4%BA%A417%E5%B9%B4%E7%94%B5%E8%B4%B9%23) `236.8K 🔥` `NEW`
1. [时团不去运动会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%9B%A2%E4%B8%8D%E5%8E%BB%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `223.5K 🔥` `NEW`
1. [韩国主教练已被全民拉黑](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%B8%BB%E6%95%99%E7%BB%83%E5%B7%B2%E8%A2%AB%E5%85%A8%E6%B0%91%E6%8B%89%E9%BB%91%23) `208.3K 🔥` `NEW`
1. [腾讯回应做独立支付APP](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%9B%9E%E5%BA%94%E5%81%9A%E7%8B%AC%E7%AB%8B%E6%94%AF%E4%BB%98APP%23) `206.3K 🔥` `NEW`
1. [大六座SUV进入黄金时代](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%85%AD%E5%BA%A7SUV%E8%BF%9B%E5%85%A5%E9%BB%84%E9%87%91%E6%97%B6%E4%BB%A3%23) `205.7K 🔥` `NEW`
1. [韩国队出局李在明怒了 (Lee Jae-myung was angry when South Korea was eliminated)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%98%9F%E5%87%BA%E5%B1%80%E6%9D%8E%E5%9C%A8%E6%98%8E%E6%80%92%E4%BA%86%23) `205.6K 🔥` `NEW`
1. [女子被骗500万丈夫自杀骗子获刑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E9%AA%97500%E4%B8%87%E4%B8%88%E5%A4%AB%E8%87%AA%E6%9D%80%E9%AA%97%E5%AD%90%E8%8E%B7%E5%88%91%23) `842.8K 🔥` `+27%`
1. [原来衣着打扮会影响对自己的感知](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%A1%A3%E7%9D%80%E6%89%93%E6%89%AE%E4%BC%9A%E5%BD%B1%E5%93%8D%E5%AF%B9%E8%87%AA%E5%B7%B1%E7%9A%84%E6%84%9F%E7%9F%A5%23) `776.4K 🔥` `+29%`
1. [恋与深空文案又被指娱乐化刑事案件](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%96%87%E6%A1%88%E5%8F%88%E8%A2%AB%E6%8C%87%E5%A8%B1%E4%B9%90%E5%8C%96%E5%88%91%E4%BA%8B%E6%A1%88%E4%BB%B6%23) `458.5K 🔥` `+44%`
1. [妈妈用玄学治好了暴躁的我](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%94%A8%E7%8E%84%E5%AD%A6%E6%B2%BB%E5%A5%BD%E4%BA%86%E6%9A%B4%E8%BA%81%E7%9A%84%E6%88%91%23) `378.9K 🔥` `+47%`
1. [立陶宛为挑衅中国付出代价 (Lithuania pays the price for provoking China)](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E9%99%B6%E5%AE%9B%E4%B8%BA%E6%8C%91%E8%A1%85%E4%B8%AD%E5%9B%BD%E4%BB%98%E5%87%BA%E4%BB%A3%E4%BB%B7%23) `374.0K 🔥` `+68%`
1. [男子吃半根变苦黄瓜致肝衰竭](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%90%83%E5%8D%8A%E6%A0%B9%E5%8F%98%E8%8B%A6%E9%BB%84%E7%93%9C%E8%87%B4%E8%82%9D%E8%A1%B0%E7%AB%AD%23) `264.6K 🔥` `+41%`
1. [3000块街舞课狗狗学了2900](https://s.weibo.com/weibo?q=%233000%E5%9D%97%E8%A1%97%E8%88%9E%E8%AF%BE%E7%8B%97%E7%8B%97%E5%AD%A6%E4%BA%862900%23) `622.6K 🔥`
1. [卢昱晓误触](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E8%AF%AF%E8%A7%A6%23) `432.1K 🔥`
1. [刘烨16岁儿子诺一颜值](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%83%A816%E5%B2%81%E5%84%BF%E5%AD%90%E8%AF%BA%E4%B8%80%E9%A2%9C%E5%80%BC%23) `382.6K 🔥`
1. [李现 杨紫](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%20%E6%9D%A8%E7%B4%AB%23) `303.5K 🔥`
1. [国乒男单资格赛全军覆没 (The National Table Tennis Men’s Singles Qualifying Tournament was wiped out)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E8%B5%84%E6%A0%BC%E8%B5%9B%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1%23) `620.7K 🔥` `-57%`
1. [豆包和DeepSeek的博弈](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%92%8CDeepSeek%E7%9A%84%E5%8D%9A%E5%BC%88%23) `384.1K 🔥` `-58%`
1. [Alin大闹金曲奖](https://s.weibo.com/weibo?q=%23Alin%E5%A4%A7%E9%97%B9%E9%87%91%E6%9B%B2%E5%A5%96%23) `315.7K 🔥` `-49%`
1. [阚清子意难平](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%84%8F%E9%9A%BE%E5%B9%B3%23) `267.5K 🔥` `-39%`
1. [恋与深空6.0版本万籁俱起 (Love and Deep Space version 6.0 is ready)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA6.0%E7%89%88%E6%9C%AC%E4%B8%87%E7%B1%81%E4%BF%B1%E8%B5%B7%23) `261.2K 🔥` `-66%`
1. [恋与深空 (Love and deep space)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `257.8K 🔥` `-38%`
1. [真正厉害的都是长期主义 (What is really powerful is long-termism)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E5%8E%89%E5%AE%B3%E7%9A%84%E9%83%BD%E6%98%AF%E9%95%BF%E6%9C%9F%E4%B8%BB%E4%B9%89%23) `236.8K 🔥` `-22%`
1. [穆祉丞 你们就是我的恋人](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E4%BD%A0%E4%BB%AC%E5%B0%B1%E6%98%AF%E6%88%91%E7%9A%84%E6%81%8B%E4%BA%BA%23) `229.9K 🔥` `-69%`
1. [恋与深空道歉国外玩家评论](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E9%81%93%E6%AD%89%E5%9B%BD%E5%A4%96%E7%8E%A9%E5%AE%B6%E8%AF%84%E8%AE%BA%23) `229.7K 🔥` `-38%`
1. [三星电子海力士将发布大规模投资计划](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E7%94%B5%E5%AD%90%E6%B5%B7%E5%8A%9B%E5%A3%AB%E5%B0%86%E5%8F%91%E5%B8%83%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%8A%95%E8%B5%84%E8%AE%A1%E5%88%92%23) `205.8K 🔥` `-46%`

Updated at 2026-06-28 22:43:24

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
