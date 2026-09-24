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

1. [中美元首华盛顿再次见面](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E5%8D%8E%E7%9B%9B%E9%A1%BF%E5%86%8D%E6%AC%A1%E8%A7%81%E9%9D%A2%23) `1.1M 🔥` `NEW`
1. [腾讯龙虾宣布停运](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E9%BE%99%E8%99%BE%E5%AE%A3%E5%B8%83%E5%81%9C%E8%BF%90%23) `805.6K 🔥` `NEW`
1. [卫星互联网低轨26组卫星成功发射](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E6%98%9F%E4%BA%92%E8%81%94%E7%BD%91%E4%BD%8E%E8%BD%A826%E7%BB%84%E5%8D%AB%E6%98%9F%E6%88%90%E5%8A%9F%E5%8F%91%E5%B0%84%23) `721.8K 🔥` `NEW`
1. [小米18Pro系列正式开售](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E7%B3%BB%E5%88%97%E6%AD%A3%E5%BC%8F%E5%BC%80%E5%94%AE%23) `720.9K 🔥` `NEW`
1. [特朗普夫人说美方要拿出最高礼遇](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A4%AB%E4%BA%BA%E8%AF%B4%E7%BE%8E%E6%96%B9%E8%A6%81%E6%8B%BF%E5%87%BA%E6%9C%80%E9%AB%98%E7%A4%BC%E9%81%87%23) `719.1K 🔥` `NEW`
1. [丈夫回应女儿去世49天妻子怀二胎](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%84%BF%E5%8E%BB%E4%B8%9649%E5%A4%A9%E5%A6%BB%E5%AD%90%E6%80%80%E4%BA%8C%E8%83%8E%23) `715.8K 🔥` `NEW`
1. [国羽女团金牌](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E7%BE%BD%E5%A5%B3%E5%9B%A2%E9%87%91%E7%89%8C%23) `603.9K 🔥` `NEW`
1. [诺贝尔奖好像能保研](https://s.weibo.com/weibo?q=%23%E8%AF%BA%E8%B4%9D%E5%B0%94%E5%A5%96%E5%A5%BD%E5%83%8F%E8%83%BD%E4%BF%9D%E7%A0%94%23) `400.8K 🔥` `NEW`
1. [特朗普说各领域领军人物都想来欢迎宴会](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E5%90%84%E9%A2%86%E5%9F%9F%E9%A2%86%E5%86%9B%E4%BA%BA%E7%89%A9%E9%83%BD%E6%83%B3%E6%9D%A5%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%23) `319.9K 🔥` `NEW`
1. [特朗普表示这是一个伟大的时刻](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%A1%A8%E7%A4%BA%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E4%BC%9F%E5%A4%A7%E7%9A%84%E6%97%B6%E5%88%BB%23) `319.7K 🔥` `NEW`
1. [王祉怡逆转山口茜](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%89%E6%80%A1%E9%80%86%E8%BD%AC%E5%B1%B1%E5%8F%A3%E8%8C%9C%23) `319.2K 🔥` `NEW`
1. [美团 抽成](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%20%E6%8A%BD%E6%88%90%23) `319.1K 🔥` `NEW`
1. [郭宇欣否认违约](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E5%90%A6%E8%AE%A4%E8%BF%9D%E7%BA%A6%23) `318.3K 🔥` `NEW`
1. [NBA中国赛2026](https://s.weibo.com/weibo?q=%23NBA%E4%B8%AD%E5%9B%BD%E8%B5%9B2026%23) `318.3K 🔥` `NEW`
1. [谁来管管现在的中秋福利](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%A5%E7%AE%A1%E7%AE%A1%E7%8E%B0%E5%9C%A8%E7%9A%84%E4%B8%AD%E7%A7%8B%E7%A6%8F%E5%88%A9%23) `317.7K 🔥` `NEW`
1. [张家齐6岁时爸妈就先后辞职了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%906%E5%B2%81%E6%97%B6%E7%88%B8%E5%A6%88%E5%B0%B1%E5%85%88%E5%90%8E%E8%BE%9E%E8%81%8C%E4%BA%86%23) `317.4K 🔥` `NEW`
1. [郭宇欣公司长期拖欠演艺报酬](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E5%85%AC%E5%8F%B8%E9%95%BF%E6%9C%9F%E6%8B%96%E6%AC%A0%E6%BC%94%E8%89%BA%E6%8A%A5%E9%85%AC%23) `316.7K 🔥` `NEW`
1. [重庆艾滋病告知配偶成法定义务](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E8%89%BE%E6%BB%8B%E7%97%85%E5%91%8A%E7%9F%A5%E9%85%8D%E5%81%B6%E6%88%90%E6%B3%95%E5%AE%9A%E4%B9%89%E5%8A%A1%23) `290.8K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `264.8K 🔥` `NEW`
1. [油价](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%23) `264.4K 🔥` `NEW`
1. [游本昌去世](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E6%9C%AC%E6%98%8C%E5%8E%BB%E4%B8%96%23) `263.4K 🔥` `NEW`
1. [众星悼念游本昌](https://s.weibo.com/weibo?q=%23%E4%BC%97%E6%98%9F%E6%82%BC%E5%BF%B5%E6%B8%B8%E6%9C%AC%E6%98%8C%23) `262.2K 🔥` `NEW`
1. [豆包在最后一刻也不装了](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%9C%A8%E6%9C%80%E5%90%8E%E4%B8%80%E5%88%BB%E4%B9%9F%E4%B8%8D%E8%A3%85%E4%BA%86%23) `261.4K 🔥` `NEW`
1. [宝总的爷叔走了](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%80%BB%E7%9A%84%E7%88%B7%E5%8F%94%E8%B5%B0%E4%BA%86%23) `261.3K 🔥` `NEW`
1. [易患脑梗的人有8大共性](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%82%A3%E8%84%91%E6%A2%97%E7%9A%84%E4%BA%BA%E6%9C%898%E5%A4%A7%E5%85%B1%E6%80%A7%23) `260.1K 🔥` `NEW`
1. [袁绍辉纳妾](https://s.weibo.com/weibo?q=%23%E8%A2%81%E7%BB%8D%E8%BE%89%E7%BA%B3%E5%A6%BE%23) `259.7K 🔥` `NEW`
1. [胡歌游本昌 忘年交](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E6%B8%B8%E6%9C%AC%E6%98%8C%20%E5%BF%98%E5%B9%B4%E4%BA%A4%23) `259.1K 🔥` `NEW`
1. [全靠姓氏拯救的名字](https://s.weibo.com/weibo?q=%23%E5%85%A8%E9%9D%A0%E5%A7%93%E6%B0%8F%E6%8B%AF%E6%95%91%E7%9A%84%E5%90%8D%E5%AD%97%23) `258.2K 🔥` `NEW`
1. [我文化水平看完觉得学海无涯](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%96%87%E5%8C%96%E6%B0%B4%E5%B9%B3%E7%9C%8B%E5%AE%8C%E8%A7%89%E5%BE%97%E5%AD%A6%E6%B5%B7%E6%97%A0%E6%B6%AF%23) `257.7K 🔥` `NEW`
1. [让关系长久的不是分享欲和深度沟通](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E5%85%B3%E7%B3%BB%E9%95%BF%E4%B9%85%E7%9A%84%E4%B8%8D%E6%98%AF%E5%88%86%E4%BA%AB%E6%AC%B2%E5%92%8C%E6%B7%B1%E5%BA%A6%E6%B2%9F%E9%80%9A%23) `251.9K 🔥` `NEW`
1. [袁湘琴和江直树的这个小动作](https://s.weibo.com/weibo?q=%23%E8%A2%81%E6%B9%98%E7%90%B4%E5%92%8C%E6%B1%9F%E7%9B%B4%E6%A0%91%E7%9A%84%E8%BF%99%E4%B8%AA%E5%B0%8F%E5%8A%A8%E4%BD%9C%23) `229.9K 🔥` `NEW`
1. [李一桐你早该演这种了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E4%BD%A0%E6%97%A9%E8%AF%A5%E6%BC%94%E8%BF%99%E7%A7%8D%E4%BA%86%23) `226.5K 🔥` `NEW`
1. [月饼名字是把配料表抄上去了吗](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%A5%BC%E5%90%8D%E5%AD%97%E6%98%AF%E6%8A%8A%E9%85%8D%E6%96%99%E8%A1%A8%E6%8A%84%E4%B8%8A%E5%8E%BB%E4%BA%86%E5%90%97%23) `226.2K 🔥` `NEW`
1. [王亚飞属于是巧妇遇到了五常大米了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BA%9A%E9%A3%9E%E5%B1%9E%E4%BA%8E%E6%98%AF%E5%B7%A7%E5%A6%87%E9%81%87%E5%88%B0%E4%BA%86%E4%BA%94%E5%B8%B8%E5%A4%A7%E7%B1%B3%E4%BA%86%23) `223.1K 🔥` `NEW`
1. [繁花 爷叔](https://s.weibo.com/weibo?q=%23%E7%B9%81%E8%8A%B1%20%E7%88%B7%E5%8F%94%23) `215.9K 🔥` `NEW`
1. [男生问夸女同事身材算性骚扰吗](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E9%97%AE%E5%A4%B8%E5%A5%B3%E5%90%8C%E4%BA%8B%E8%BA%AB%E6%9D%90%E7%AE%97%E6%80%A7%E9%AA%9A%E6%89%B0%E5%90%97%23) `207.6K 🔥` `NEW`
1. [马伊琍新剧这出是要迷死谁](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BC%8A%E7%90%8D%E6%96%B0%E5%89%A7%E8%BF%99%E5%87%BA%E6%98%AF%E8%A6%81%E8%BF%B7%E6%AD%BB%E8%B0%81%23) `206.5K 🔥` `NEW`
1. [陈雨菲vs宫崎友花](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9B%A8%E8%8F%B2vs%E5%AE%AB%E5%B4%8E%E5%8F%8B%E8%8A%B1%23) `199.0K 🔥` `NEW`
1. [鸭子要主人先试毒才吃饭](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E5%AD%90%E8%A6%81%E4%B8%BB%E4%BA%BA%E5%85%88%E8%AF%95%E6%AF%92%E6%89%8D%E5%90%83%E9%A5%AD%23) `195.7K 🔥` `NEW`
1. [张家齐妈妈0秒就把自己哄好了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%880%E7%A7%92%E5%B0%B1%E6%8A%8A%E8%87%AA%E5%B7%B1%E5%93%84%E5%A5%BD%E4%BA%86%23) `190.7K 🔥` `NEW`
1. [诺贝尔奖保不了研的梗荒诞在哪儿](https://s.weibo.com/weibo?q=%23%E8%AF%BA%E8%B4%9D%E5%B0%94%E5%A5%96%E4%BF%9D%E4%B8%8D%E4%BA%86%E7%A0%94%E7%9A%84%E6%A2%97%E8%8D%92%E8%AF%9E%E5%9C%A8%E5%93%AA%E5%84%BF%23) `184.9K 🔥` `NEW`
1. [一笑倾城](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%91%E5%80%BE%E5%9F%8E%23) `184.9K 🔥` `NEW`
1. [热干面养出来的世界冠军](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B9%B2%E9%9D%A2%E5%85%BB%E5%87%BA%E6%9D%A5%E7%9A%84%E4%B8%96%E7%95%8C%E5%86%A0%E5%86%9B%23) `184.6K 🔥` `NEW`
1. [朋友公司的中秋福利](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%85%AC%E5%8F%B8%E7%9A%84%E4%B8%AD%E7%A7%8B%E7%A6%8F%E5%88%A9%23) `183.8K 🔥` `NEW`
1. [总结婚姻经验有多心酸](https://s.weibo.com/weibo?q=%23%E6%80%BB%E7%BB%93%E5%A9%9A%E5%A7%BB%E7%BB%8F%E9%AA%8C%E6%9C%89%E5%A4%9A%E5%BF%83%E9%85%B8%23) `183.5K 🔥` `NEW`
1. [女生在日本点大份被劝点小份](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%9C%A8%E6%97%A5%E6%9C%AC%E7%82%B9%E5%A4%A7%E4%BB%BD%E8%A2%AB%E5%8A%9D%E7%82%B9%E5%B0%8F%E4%BB%BD%23) `174.3K 🔥` `NEW`
1. [杨幂骗了全网](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E9%AA%97%E4%BA%86%E5%85%A8%E7%BD%91%23) `263.1K 🔥` `+50%`
1. [专家称美国总统接机非常罕见](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E7%BE%8E%E5%9B%BD%E6%80%BB%E7%BB%9F%E6%8E%A5%E6%9C%BA%E9%9D%9E%E5%B8%B8%E7%BD%95%E8%A7%81%23) `196.1K 🔥` `-23%`
1. [林诗栋 打疯了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%20%E6%89%93%E7%96%AF%E4%BA%86%23) `184.6K 🔥` `-52%`
1. [豆包员工感慨豆包成边缘产品](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%91%98%E5%B7%A5%E6%84%9F%E6%85%A8%E8%B1%86%E5%8C%85%E6%88%90%E8%BE%B9%E7%BC%98%E4%BA%A7%E5%93%81%23) `176.0K 🔥` `-51%`

Updated at 2026-09-24 13:22:51

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
