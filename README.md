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

1. [洁丽雅已报案 (Jie Liya has reported the crime)](https://s.weibo.com/weibo?q=%23%E6%B4%81%E4%B8%BD%E9%9B%85%E5%B7%B2%E6%8A%A5%E6%A1%88%23) `3.7M 🔥` `NEW`
1. [周深演唱会试听装](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%BC%94%E5%94%B1%E4%BC%9A%E8%AF%95%E5%90%AC%E8%A3%85%23) `1.6M 🔥` `NEW`
1. [姚晨方回应](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E6%99%A8%E6%96%B9%E5%9B%9E%E5%BA%94%23) `1.5M 🔥` `NEW`
1. [长这么大终于听懂了商鞅变法](https://s.weibo.com/weibo?q=%23%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E7%BB%88%E4%BA%8E%E5%90%AC%E6%87%82%E4%BA%86%E5%95%86%E9%9E%85%E5%8F%98%E6%B3%95%23) `992.2K 🔥` `NEW`
1. [王安宇一手拉田曦薇一手拉黄明昊](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E4%B8%80%E6%89%8B%E6%8B%89%E7%94%B0%E6%9B%A6%E8%96%87%E4%B8%80%E6%89%8B%E6%8B%89%E9%BB%84%E6%98%8E%E6%98%8A%23) `967.8K 🔥` `NEW`
1. [女孩盲道被撞系摆拍](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E7%B3%BB%E6%91%86%E6%8B%8D%23) `965.3K 🔥` `NEW`
1. [给阿嬷的情书 暴走老奶](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E6%9A%B4%E8%B5%B0%E8%80%81%E5%A5%B6%23) `842.6K 🔥` `NEW`
1. [天津高空跳伞项目发生事故两人遇难](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E9%AB%98%E7%A9%BA%E8%B7%B3%E4%BC%9E%E9%A1%B9%E7%9B%AE%E5%8F%91%E7%94%9F%E4%BA%8B%E6%95%85%E4%B8%A4%E4%BA%BA%E9%81%87%E9%9A%BE%23) `696.2K 🔥` `NEW`
1. [唐艺昕9年了妆还没卸干净](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%959%E5%B9%B4%E4%BA%86%E5%A6%86%E8%BF%98%E6%B2%A1%E5%8D%B8%E5%B9%B2%E5%87%80%23) `571.8K 🔥` `NEW`
1. [湖南石门县强降雨1死2失联](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E7%9F%B3%E9%97%A8%E5%8E%BF%E5%BC%BA%E9%99%8D%E9%9B%A81%E6%AD%BB2%E5%A4%B1%E8%81%94%23) `560.2K 🔥` `NEW`
1. [汤唯手机壳 (Tang Wei mobile phone case)](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E5%94%AF%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `536.5K 🔥` `NEW`
1. [手机店老板称线下基本不卖新机了](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E5%BA%97%E8%80%81%E6%9D%BF%E7%A7%B0%E7%BA%BF%E4%B8%8B%E5%9F%BA%E6%9C%AC%E4%B8%8D%E5%8D%96%E6%96%B0%E6%9C%BA%E4%BA%86%23) `530.4K 🔥` `NEW`
1. [武汉一村庄585人62人患癌](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E4%B8%80%E6%9D%91%E5%BA%84585%E4%BA%BA62%E4%BA%BA%E6%82%A3%E7%99%8C%23) `521.4K 🔥` `NEW`
1. [杨子家族疯狂套现超28亿](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%AD%90%E5%AE%B6%E6%97%8F%E7%96%AF%E7%8B%82%E5%A5%97%E7%8E%B0%E8%B6%8528%E4%BA%BF%23) `510.5K 🔥` `NEW`
1. [WTT美国大满贯参赛名单公布](https://s.weibo.com/weibo?q=%23WTT%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%8F%82%E8%B5%9B%E5%90%8D%E5%8D%95%E5%85%AC%E5%B8%83%23) `504.1K 🔥` `NEW`
1. [洁丽雅靠八卦营销终成烫手山芋](https://s.weibo.com/weibo?q=%23%E6%B4%81%E4%B8%BD%E9%9B%85%E9%9D%A0%E5%85%AB%E5%8D%A6%E8%90%A5%E9%94%80%E7%BB%88%E6%88%90%E7%83%AB%E6%89%8B%E5%B1%B1%E8%8A%8B%23) `502.6K 🔥` `NEW`
1. [鸿蒙智行法务公示多自媒体账号被处理](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E6%B3%95%E5%8A%A1%E5%85%AC%E7%A4%BA%E5%A4%9A%E8%87%AA%E5%AA%92%E4%BD%93%E8%B4%A6%E5%8F%B7%E8%A2%AB%E5%A4%84%E7%90%86%23) `500.8K 🔥` `NEW`
1. [湖南石门吊桥10秒被洪水冲断](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E7%9F%B3%E9%97%A8%E5%90%8A%E6%A1%A510%E7%A7%92%E8%A2%AB%E6%B4%AA%E6%B0%B4%E5%86%B2%E6%96%AD%23) `499.0K 🔥` `NEW`
1. [天津高空跳伞事故遇难女子年仅24岁](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E9%AB%98%E7%A9%BA%E8%B7%B3%E4%BC%9E%E4%BA%8B%E6%95%85%E9%81%87%E9%9A%BE%E5%A5%B3%E5%AD%90%E5%B9%B4%E4%BB%8524%E5%B2%81%23) `495.9K 🔥` `NEW`
1. [特朗普访华整晚都在谈台湾问题](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%95%B4%E6%99%9A%E9%83%BD%E5%9C%A8%E8%B0%88%E5%8F%B0%E6%B9%BE%E9%97%AE%E9%A2%98%23) `494.7K 🔥` `NEW`
1. [娜扎混血妆 (Nazha mixed race makeup)](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E6%B7%B7%E8%A1%80%E5%A6%86%23) `489.4K 🔥` `NEW`
1. [Gemini精准算中Offer](https://s.weibo.com/weibo?q=%23Gemini%E7%B2%BE%E5%87%86%E7%AE%97%E4%B8%ADOffer%23) `486.9K 🔥` `NEW`
1. [何老师也接受不了vip抢先看](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%80%81%E5%B8%88%E4%B9%9F%E6%8E%A5%E5%8F%97%E4%B8%8D%E4%BA%86vip%E6%8A%A2%E5%85%88%E7%9C%8B%23) `486.1K 🔥` `NEW`
1. [全村62人患癌多名村民发声](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%9D%9162%E4%BA%BA%E6%82%A3%E7%99%8C%E5%A4%9A%E5%90%8D%E6%9D%91%E6%B0%91%E5%8F%91%E5%A3%B0%23) `438.3K 🔥` `NEW`
1. [白宫发特朗普访华回顾视频](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E5%8F%91%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E5%9B%9E%E9%A1%BE%E8%A7%86%E9%A2%91%23) `349.4K 🔥` `NEW`
1. [柳州地震的原因找到了](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `332.6K 🔥` `NEW`
1. [本周做什么都顺的星座TOP4](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E5%81%9A%E4%BB%80%E4%B9%88%E9%83%BD%E9%A1%BA%E7%9A%84%E6%98%9F%E5%BA%A7TOP4%23) `322.1K 🔥` `NEW`
1. [真有人在豆包预约餐厅](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%9C%89%E4%BA%BA%E5%9C%A8%E8%B1%86%E5%8C%85%E9%A2%84%E7%BA%A6%E9%A4%90%E5%8E%85%23) `265.7K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `265.6K 🔥` `NEW`
1. [高圆圆为照顾母亲接戏不离开北京](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%9C%86%E5%9C%86%E4%B8%BA%E7%85%A7%E9%A1%BE%E6%AF%8D%E4%BA%B2%E6%8E%A5%E6%88%8F%E4%B8%8D%E7%A6%BB%E5%BC%80%E5%8C%97%E4%BA%AC%23) `253.9K 🔥` `NEW`
1. [衣服越来越多完全是负担 (More and more clothes are a total burden)](https://s.weibo.com/weibo?q=%23%E8%A1%A3%E6%9C%8D%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%E5%AE%8C%E5%85%A8%E6%98%AF%E8%B4%9F%E6%8B%85%23) `227.7K 🔥` `NEW`
1. [巨力索具股价一年狂飙600%](https://s.weibo.com/weibo?q=%23%E5%B7%A8%E5%8A%9B%E7%B4%A2%E5%85%B7%E8%82%A1%E4%BB%B7%E4%B8%80%E5%B9%B4%E7%8B%82%E9%A3%99600%25%23) `224.9K 🔥` `NEW`
1. [女子店门口放熊猫摆件被索赔10万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BA%97%E9%97%A8%E5%8F%A3%E6%94%BE%E7%86%8A%E7%8C%AB%E6%91%86%E4%BB%B6%E8%A2%AB%E7%B4%A2%E8%B5%9410%E4%B8%87%23) `222.0K 🔥` `NEW`
1. [给阿嬷的情书](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `221.9K 🔥` `NEW`
1. [老乡杯](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B9%A1%E6%9D%AF%23) `220.8K 🔥` `NEW`
1. [阿嬷的陈楚生来看陈楚生了](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%AC%B7%E7%9A%84%E9%99%88%E6%A5%9A%E7%94%9F%E6%9D%A5%E7%9C%8B%E9%99%88%E6%A5%9A%E7%94%9F%E4%BA%86%23) `211.7K 🔥` `NEW`
1. [徐洁儿直播找工作](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E7%9B%B4%E6%92%AD%E6%89%BE%E5%B7%A5%E4%BD%9C%23) `204.8K 🔥` `NEW`
1. [家业](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%23) `199.2K 🔥` `NEW`
1. [帕梅拉夏天减肥法](https://s.weibo.com/weibo?q=%23%E5%B8%95%E6%A2%85%E6%8B%89%E5%A4%8F%E5%A4%A9%E5%87%8F%E8%82%A5%E6%B3%95%23) `192.1K 🔥` `NEW`
1. [杨紫家业招商情况](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%AE%B6%E4%B8%9A%E6%8B%9B%E5%95%86%E6%83%85%E5%86%B5%23) `192.0K 🔥` `NEW`
1. [李思潼将成为00花一番票房最高 (Li Sitong will become the highest-grossing movie in 00 Flowers)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%80%9D%E6%BD%BC%E5%B0%86%E6%88%90%E4%B8%BA00%E8%8A%B1%E4%B8%80%E7%95%AA%E7%A5%A8%E6%88%BF%E6%9C%80%E9%AB%98%23) `186.1K 🔥` `NEW`
1. [特朗普连发15张图分享中国记忆 (Trump posts 15 pictures to share memories of China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%BF%9E%E5%8F%9115%E5%BC%A0%E5%9B%BE%E5%88%86%E4%BA%AB%E4%B8%AD%E5%9B%BD%E8%AE%B0%E5%BF%86%23) `1.9M 🔥` `+26%`
1. [2026中国网络文明大会](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E6%96%87%E6%98%8E%E5%A4%A7%E4%BC%9A%23) `1.7M 🔥` `+136%`
1. [王濛瘦成鹿晗了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%98%A6%E6%88%90%E9%B9%BF%E6%99%97%E4%BA%86%23) `556.9K 🔥` `+43%`
1. [周冬雨 刘昊然](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%20%E5%88%98%E6%98%8A%E7%84%B6%23) `491.5K 🔥` `+42%`
1. [98岁奶奶拿出了她当年的嫁妆](https://s.weibo.com/weibo?q=%2398%E5%B2%81%E5%A5%B6%E5%A5%B6%E6%8B%BF%E5%87%BA%E4%BA%86%E5%A5%B9%E5%BD%93%E5%B9%B4%E7%9A%84%E5%AB%81%E5%A6%86%23) `578.1K 🔥`
1. [上海交大通报学生私吞竞赛奖金](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%BA%A4%E5%A4%A7%E9%80%9A%E6%8A%A5%E5%AD%A6%E7%94%9F%E7%A7%81%E5%90%9E%E7%AB%9E%E8%B5%9B%E5%A5%96%E9%87%91%23) `457.6K 🔥`
1. [麦琳瘦成唐嫣了 (Mai Lin lost weight and looked like Tang Yan)](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E7%90%B3%E7%98%A6%E6%88%90%E5%94%90%E5%AB%A3%E4%BA%86%23) `412.3K 🔥`
1. [姜乘澜被执行1119万](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E8%A2%AB%E6%89%A7%E8%A1%8C1119%E4%B8%87%23) `346.3K 🔥`
1. [IU边佑锡发文道歉](https://s.weibo.com/weibo?q=%23IU%E8%BE%B9%E4%BD%91%E9%94%A1%E5%8F%91%E6%96%87%E9%81%93%E6%AD%89%23) `226.3K 🔥` `-39%`
1. [洁丽雅](https://s.weibo.com/weibo?q=%23%E6%B4%81%E4%B8%BD%E9%9B%85%23) `204.7K 🔥` `-41%`
1. [张元英 贝微微](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%20%E8%B4%9D%E5%BE%AE%E5%BE%AE%23) `197.4K 🔥` `-37%`

Updated at 2026-05-18 21:43:43

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
