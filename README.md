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

1. [黄渤谈父母患老年痴呆](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B8%A4%E8%B0%88%E7%88%B6%E6%AF%8D%E6%82%A3%E8%80%81%E5%B9%B4%E7%97%B4%E5%91%86%23) `827.1K 🔥` `NEW`
1. [第九届进博会亮点扎堆](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B9%9D%E5%B1%8A%E8%BF%9B%E5%8D%9A%E4%BC%9A%E4%BA%AE%E7%82%B9%E6%89%8E%E5%A0%86%23) `679.3K 🔥` `NEW`
1. [美股史诗级暴涨](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E5%8F%B2%E8%AF%97%E7%BA%A7%E6%9A%B4%E6%B6%A8%23) `433.9K 🔥` `NEW`
1. [Chovy不同意了](https://s.weibo.com/weibo?q=%23Chovy%E4%B8%8D%E5%90%8C%E6%84%8F%E4%BA%86%23) `340.3K 🔥` `NEW`
1. [许飞只是来告别](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%8F%AA%E6%98%AF%E6%9D%A5%E5%91%8A%E5%88%AB%23) `331.3K 🔥` `NEW`
1. [东风奕派M8天元激光版正式上市](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%A3%8E%E5%A5%95%E6%B4%BEM8%E5%A4%A9%E5%85%83%E6%BF%80%E5%85%89%E7%89%88%E6%AD%A3%E5%BC%8F%E4%B8%8A%E5%B8%82%23) `322.5K 🔥` `NEW`
1. [英雄联盟回应GEN晋级](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%E5%9B%9E%E5%BA%94GEN%E6%99%8B%E7%BA%A7%23) `316.9K 🔥` `NEW`
1. [金价急涨买还是卖](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%80%A5%E6%B6%A8%E4%B9%B0%E8%BF%98%E6%98%AF%E5%8D%96%23) `307.1K 🔥` `NEW`
1. [深圳禁鸣喇叭后司机花式鸣笛](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E7%A6%81%E9%B8%A3%E5%96%87%E5%8F%AD%E5%90%8E%E5%8F%B8%E6%9C%BA%E8%8A%B1%E5%BC%8F%E9%B8%A3%E7%AC%9B%23) `278.7K 🔥` `NEW`
1. [小城良方的大结局是真实的人生](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E7%9A%84%E5%A4%A7%E7%BB%93%E5%B1%80%E6%98%AF%E7%9C%9F%E5%AE%9E%E7%9A%84%E4%BA%BA%E7%94%9F%23) `277.5K 🔥` `NEW`
1. [大学生无偿代跑拒绝供出同学](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%97%A0%E5%81%BF%E4%BB%A3%E8%B7%91%E6%8B%92%E7%BB%9D%E4%BE%9B%E5%87%BA%E5%90%8C%E5%AD%A6%23) `275.1K 🔥` `NEW`
1. [厉娜三个前任都防着许飞](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E4%B8%89%E4%B8%AA%E5%89%8D%E4%BB%BB%E9%83%BD%E9%98%B2%E7%9D%80%E8%AE%B8%E9%A3%9E%23) `270.8K 🔥` `NEW`
1. [延安大学](https://s.weibo.com/weibo?q=%23%E5%BB%B6%E5%AE%89%E5%A4%A7%E5%AD%A6%23) `266.6K 🔥` `NEW`
1. [丞磊被问理想型就差把名字说出来了](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E8%A2%AB%E9%97%AE%E7%90%86%E6%83%B3%E5%9E%8B%E5%B0%B1%E5%B7%AE%E6%8A%8A%E5%90%8D%E5%AD%97%E8%AF%B4%E5%87%BA%E6%9D%A5%E4%BA%86%23) `264.2K 🔥` `NEW`
1. [网传马嘉祺饰演飞驰人生张雪少年时期](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E9%A9%AC%E5%98%89%E7%A5%BA%E9%A5%B0%E6%BC%94%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F%E5%BC%A0%E9%9B%AA%E5%B0%91%E5%B9%B4%E6%97%B6%E6%9C%9F%23) `257.7K 🔥` `NEW`
1. [大家都不接陌生电话不是好事](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AE%B6%E9%83%BD%E4%B8%8D%E6%8E%A5%E9%99%8C%E7%94%9F%E7%94%B5%E8%AF%9D%E4%B8%8D%E6%98%AF%E5%A5%BD%E4%BA%8B%23) `254.1K 🔥` `NEW`
1. [油价重挫原因](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E9%87%8D%E6%8C%AB%E5%8E%9F%E5%9B%A0%23) `252.8K 🔥` `NEW`
1. [董宇辉官宣自营品牌禾与春时](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E5%AE%98%E5%AE%A3%E8%87%AA%E8%90%A5%E5%93%81%E7%89%8C%E7%A6%BE%E4%B8%8E%E6%98%A5%E6%97%B6%23) `250.5K 🔥` `NEW`
1. [富保罗称詹姆斯在76人比湖人快乐](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E4%BF%9D%E7%BD%97%E7%A7%B0%E8%A9%B9%E5%A7%86%E6%96%AF%E5%9C%A876%E4%BA%BA%E6%AF%94%E6%B9%96%E4%BA%BA%E5%BF%AB%E4%B9%90%23) `246.6K 🔥` `NEW`
1. [76人活塞爆发冲突](https://s.weibo.com/weibo?q=%2376%E4%BA%BA%E6%B4%BB%E5%A1%9E%E7%88%86%E5%8F%91%E5%86%B2%E7%AA%81%23) `242.3K 🔥` `NEW`
1. [这是人类可以承受的文字吗](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E4%BA%BA%E7%B1%BB%E5%8F%AF%E4%BB%A5%E6%89%BF%E5%8F%97%E7%9A%84%E6%96%87%E5%AD%97%E5%90%97%23) `240.8K 🔥` `NEW`
1. [内存涨价就是为了做这些东西吗](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E6%B6%A8%E4%BB%B7%E5%B0%B1%E6%98%AF%E4%B8%BA%E4%BA%86%E5%81%9A%E8%BF%99%E4%BA%9B%E4%B8%9C%E8%A5%BF%E5%90%97%23) `235.7K 🔥` `NEW`
1. [张萌真的是一个很有眼光的妙人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E7%9C%9F%E7%9A%84%E6%98%AF%E4%B8%80%E4%B8%AA%E5%BE%88%E6%9C%89%E7%9C%BC%E5%85%89%E7%9A%84%E5%A6%99%E4%BA%BA%23) `233.6K 🔥` `NEW`
1. [上厕所被偷拍受害者发声](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8E%95%E6%89%80%E8%A2%AB%E5%81%B7%E6%8B%8D%E5%8F%97%E5%AE%B3%E8%80%85%E5%8F%91%E5%A3%B0%23) `230.2K 🔥` `NEW`
1. [马兴瑞被提起公诉](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%B4%E7%91%9E%E8%A2%AB%E6%8F%90%E8%B5%B7%E5%85%AC%E8%AF%89%23) `229.0K 🔥` `NEW`
1. [外国网友被中国留学生牛肉面馋到](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B%E8%A2%AB%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E7%89%9B%E8%82%89%E9%9D%A2%E9%A6%8B%E5%88%B0%23) `226.0K 🔥` `NEW`
1. [向太回应孙子孙女财产分配](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E5%9B%9E%E5%BA%94%E5%AD%99%E5%AD%90%E5%AD%99%E5%A5%B3%E8%B4%A2%E4%BA%A7%E5%88%86%E9%85%8D%23) `225.5K 🔥` `NEW`
1. [控Kong聊天记录曝光](https://s.weibo.com/weibo?q=%23%E6%8E%A7Kong%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E6%9B%9D%E5%85%89%23) `219.9K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `211.0K 🔥` `NEW`
1. [Ruler谈iG](https://s.weibo.com/weibo?q=%23Ruler%E8%B0%88iG%23) `209.4K 🔥` `NEW`
1. [后会友期排期好崩溃](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E6%8E%92%E6%9C%9F%E5%A5%BD%E5%B4%A9%E6%BA%83%23) `205.7K 🔥` `NEW`
1. [民主党拟结束伊朗战争](https://s.weibo.com/weibo?q=%23%E6%B0%91%E4%B8%BB%E5%85%9A%E6%8B%9F%E7%BB%93%E6%9D%9F%E4%BC%8A%E6%9C%97%E6%88%98%E4%BA%89%23) `192.8K 🔥` `NEW`
1. [得了脂肪肝咋办](https://s.weibo.com/weibo?q=%23%E5%BE%97%E4%BA%86%E8%84%82%E8%82%AA%E8%82%9D%E5%92%8B%E5%8A%9E%23) `180.2K 🔥` `NEW`
1. [向芷蹦着踩脸向佐都不带生气的](https://s.weibo.com/weibo?q=%23%E5%90%91%E8%8A%B7%E8%B9%A6%E7%9D%80%E8%B8%A9%E8%84%B8%E5%90%91%E4%BD%90%E9%83%BD%E4%B8%8D%E5%B8%A6%E7%94%9F%E6%B0%94%E7%9A%84%23) `180.1K 🔥` `NEW`
1. [后会友期还没录完](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E8%BF%98%E6%B2%A1%E5%BD%95%E5%AE%8C%23) `177.4K 🔥` `NEW`
1. [乡干部伤人潜逃15年吃空饷140余万元](https://s.weibo.com/weibo?q=%23%E4%B9%A1%E5%B9%B2%E9%83%A8%E4%BC%A4%E4%BA%BA%E6%BD%9C%E9%80%8315%E5%B9%B4%E5%90%83%E7%A9%BA%E9%A5%B7140%E4%BD%99%E4%B8%87%E5%85%83%23) `170.8K 🔥` `NEW`
1. [网传厉娜和经纪人谈了8年](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%8E%89%E5%A8%9C%E5%92%8C%E7%BB%8F%E7%BA%AA%E4%BA%BA%E8%B0%88%E4%BA%868%E5%B9%B4%23) `170.7K 🔥` `NEW`
1. [LYON不敌GEN后台画面曝光](https://s.weibo.com/weibo?q=%23LYON%E4%B8%8D%E6%95%8CGEN%E5%90%8E%E5%8F%B0%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `169.4K 🔥` `NEW`
1. [黄子韬出差徐艺洋的独居vlog](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%87%BA%E5%B7%AE%E5%BE%90%E8%89%BA%E6%B4%8B%E7%9A%84%E7%8B%AC%E5%B1%85vlog%23) `168.3K 🔥` `NEW`
1. [张萌不愧是音乐世家出身](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E4%B8%8D%E6%84%A7%E6%98%AF%E9%9F%B3%E4%B9%90%E4%B8%96%E5%AE%B6%E5%87%BA%E8%BA%AB%23) `166.8K 🔥` `NEW`
1. [有人把手机密码设成手机生日](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E6%8A%8A%E6%89%8B%E6%9C%BA%E5%AF%86%E7%A0%81%E8%AE%BE%E6%88%90%E6%89%8B%E6%9C%BA%E7%94%9F%E6%97%A5%23) `165.9K 🔥` `NEW`
1. [进博会见证中国开放动能](https://s.weibo.com/weibo?q=%23%E8%BF%9B%E5%8D%9A%E4%BC%9A%E8%A7%81%E8%AF%81%E4%B8%AD%E5%9B%BD%E5%BC%80%E6%94%BE%E5%8A%A8%E8%83%BD%23) `165.6K 🔥` `NEW`
1. [后会友期把观众急成计算器了](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E6%8A%8A%E8%A7%82%E4%BC%97%E6%80%A5%E6%88%90%E8%AE%A1%E7%AE%97%E5%99%A8%E4%BA%86%23) `161.3K 🔥` `NEW`
1. [LYON没帮iG打出东西](https://s.weibo.com/weibo?q=%23LYON%E6%B2%A1%E5%B8%AEiG%E6%89%93%E5%87%BA%E4%B8%9C%E8%A5%BF%23) `156.4K 🔥` `NEW`
1. [树直径500米是什么概念](https://s.weibo.com/weibo?q=%23%E6%A0%91%E7%9B%B4%E5%BE%84500%E7%B1%B3%E6%98%AF%E4%BB%80%E4%B9%88%E6%A6%82%E5%BF%B5%23) `152.8K 🔥` `NEW`
1. [上岸第一件先娶意中人](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%B2%B8%E7%AC%AC%E4%B8%80%E4%BB%B6%E5%85%88%E5%A8%B6%E6%84%8F%E4%B8%AD%E4%BA%BA%23) `1.2M 🔥` `+109%`
1. [女儿初潮弄脏沙发爸爸送花安慰](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E5%88%9D%E6%BD%AE%E5%BC%84%E8%84%8F%E6%B2%99%E5%8F%91%E7%88%B8%E7%88%B8%E9%80%81%E8%8A%B1%E5%AE%89%E6%85%B0%23) `261.7K 🔥` `+193%`
1. [同学卖上海房回老家引争议](https://s.weibo.com/weibo?q=%23%E5%90%8C%E5%AD%A6%E5%8D%96%E4%B8%8A%E6%B5%B7%E6%88%BF%E5%9B%9E%E8%80%81%E5%AE%B6%E5%BC%95%E4%BA%89%E8%AE%AE%23) `205.7K 🔥` `+147%`
1. [嫁金钗忘删AI水印了](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%BF%98%E5%88%A0AI%E6%B0%B4%E5%8D%B0%E4%BA%86%23) `179.5K 🔥` `+34%`
1. [高市早苗以怪异姿势面见日本天皇](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E4%BB%A5%E6%80%AA%E5%BC%82%E5%A7%BF%E5%8A%BF%E9%9D%A2%E8%A7%81%E6%97%A5%E6%9C%AC%E5%A4%A9%E7%9A%87%23) `193.1K 🔥` `-51%`

Updated at 2026-11-05 10:53:01

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
