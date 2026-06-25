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

1. [厄瓜多尔vs德国 (Ecuador vs Germany)](https://s.weibo.com/weibo?q=%23%E5%8E%84%E7%93%9C%E5%A4%9A%E5%B0%94vs%E5%BE%B7%E5%9B%BD%23) `124.0K 🔥` `NEW`
1. [vivo X Fold6](https://s.weibo.com/weibo?q=%23vivo%20X%20Fold6%23) `113.9K 🔥` `NEW`
1. [圣罗兰2027夏季男士时装秀](https://s.weibo.com/weibo?q=%23%E5%9C%A3%E7%BD%97%E5%85%B02027%E5%A4%8F%E5%AD%A3%E7%94%B7%E5%A3%AB%E6%97%B6%E8%A3%85%E7%A7%80%23) `46.9K 🔥` `NEW`
1. [爱情有烟火](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E6%9C%89%E7%83%9F%E7%81%AB%23) `44.1K 🔥` `NEW`
1. [郭京飞状态](https://s.weibo.com/weibo?q=%23%E9%83%AD%E4%BA%AC%E9%A3%9E%E7%8A%B6%E6%80%81%23) `43.4K 🔥` `NEW`
1. [15岁女孩中考后网红景点坠湖身亡](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E5%A5%B3%E5%AD%A9%E4%B8%AD%E8%80%83%E5%90%8E%E7%BD%91%E7%BA%A2%E6%99%AF%E7%82%B9%E5%9D%A0%E6%B9%96%E8%BA%AB%E4%BA%A1%23) `34.8K 🔥` `NEW`
1. [检测机构回应又有纸尿裤检出甲酰胺](https://s.weibo.com/weibo?q=%23%E6%A3%80%E6%B5%8B%E6%9C%BA%E6%9E%84%E5%9B%9E%E5%BA%94%E5%8F%88%E6%9C%89%E7%BA%B8%E5%B0%BF%E8%A3%A4%E6%A3%80%E5%87%BA%E7%94%B2%E9%85%B0%E8%83%BA%23) `34.7K 🔥` `NEW`
1. [多地再被曝冻货偏航事件](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%86%8D%E8%A2%AB%E6%9B%9D%E5%86%BB%E8%B4%A7%E5%81%8F%E8%88%AA%E4%BA%8B%E4%BB%B6%23) `34.6K 🔥` `NEW`
1. [胡歌白玉兰提名晚宴发言](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E6%99%9A%E5%AE%B4%E5%8F%91%E8%A8%80%23) `34.4K 🔥` `NEW`
1. [问心2被打码的医生是谁 (Who is the doctor who was coded in Questioning Heart 2?)](https://s.weibo.com/weibo?q=%23%E9%97%AE%E5%BF%832%E8%A2%AB%E6%89%93%E7%A0%81%E7%9A%84%E5%8C%BB%E7%94%9F%E6%98%AF%E8%B0%81%23) `229.9K 🔥` `-43%`
1. [达沃斯论坛里的中式魅力](https://s.weibo.com/weibo?q=%23%E8%BE%BE%E6%B2%83%E6%96%AF%E8%AE%BA%E5%9D%9B%E9%87%8C%E7%9A%84%E4%B8%AD%E5%BC%8F%E9%AD%85%E5%8A%9B%23) `114.9K 🔥` `-63%`
1. [杨洋晚宴人气 (Yang Yang's dinner party popularity)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%99%9A%E5%AE%B4%E4%BA%BA%E6%B0%94%23) `73.1K 🔥` `-75%`
1. [发现脾胃喜欢一切温和的食物](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E8%84%BE%E8%83%83%E5%96%9C%E6%AC%A2%E4%B8%80%E5%88%87%E6%B8%A9%E5%92%8C%E7%9A%84%E9%A3%9F%E7%89%A9%23) `72.2K 🔥` `-71%`
1. [苹果回应涨价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%9B%9E%E5%BA%94%E6%B6%A8%E4%BB%B7%23) `44.0K 🔥` `-82%`
1. [网传检出甲酰胺的报告已撤回](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%A3%80%E5%87%BA%E7%94%B2%E9%85%B0%E8%83%BA%E7%9A%84%E6%8A%A5%E5%91%8A%E5%B7%B2%E6%92%A4%E5%9B%9E%23) `43.9K 🔥` `-82%`
1. [苹果涨价iPhone未涨](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%B6%A8%E4%BB%B7iPhone%E6%9C%AA%E6%B6%A8%23) `43.9K 🔥` `-82%`
1. [湖南两女子和狗被关笼中游街 (Two Hunan women and their dog were imprisoned and paraded through the streets)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E4%B8%A4%E5%A5%B3%E5%AD%90%E5%92%8C%E7%8B%97%E8%A2%AB%E5%85%B3%E7%AC%BC%E4%B8%AD%E6%B8%B8%E8%A1%97%23) `43.7K 🔥` `-81%`
1. [杨幂牵杨紫上台](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%89%B5%E6%9D%A8%E7%B4%AB%E4%B8%8A%E5%8F%B0%23) `43.6K 🔥` `-81%`
1. [恋与深空新男主上线投诉飙涨万条](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%96%B0%E7%94%B7%E4%B8%BB%E4%B8%8A%E7%BA%BF%E6%8A%95%E8%AF%89%E9%A3%99%E6%B6%A8%E4%B8%87%E6%9D%A1%23) `43.5K 🔥` `-81%`
1. [本科线479考生794分嫌发挥失常](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E7%A7%91%E7%BA%BF479%E8%80%83%E7%94%9F794%E5%88%86%E5%AB%8C%E5%8F%91%E6%8C%A5%E5%A4%B1%E5%B8%B8%23) `43.3K 🔥` `-87%`
1. [梁实第30次高考423分](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%9E%E7%AC%AC30%E6%AC%A1%E9%AB%98%E8%80%83423%E5%88%86%23) `43.2K 🔥` `-81%`
1. [白鹿又去哪进修哭戏了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%88%E5%8E%BB%E5%93%AA%E8%BF%9B%E4%BF%AE%E5%93%AD%E6%88%8F%E4%BA%86%23) `43.0K 🔥` `-69%`
1. [杨幂豪门嫡长姐 (Yang Mi, the eldest sister of a wealthy family)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%B1%AA%E9%97%A8%E5%AB%A1%E9%95%BF%E5%A7%90%23) `43.0K 🔥` `-56%`
1. [毒贩为逃跑把婴儿往地上砸](https://s.weibo.com/weibo?q=%23%E6%AF%92%E8%B4%A9%E4%B8%BA%E9%80%83%E8%B7%91%E6%8A%8A%E5%A9%B4%E5%84%BF%E5%BE%80%E5%9C%B0%E4%B8%8A%E7%A0%B8%23) `41.9K 🔥` `-49%`
1. [苹果涨价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%B6%A8%E4%BB%B7%23) `41.8K 🔥` `-62%`
1. [尊界](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8C%23) `41.7K 🔥` `-48%`
1. [潘玮柏听热巴爱吃眼睛都亮了](https://s.weibo.com/weibo?q=%23%E6%BD%98%E7%8E%AE%E6%9F%8F%E5%90%AC%E7%83%AD%E5%B7%B4%E7%88%B1%E5%90%83%E7%9C%BC%E7%9D%9B%E9%83%BD%E4%BA%AE%E4%BA%86%23) `41.7K 🔥` `-71%`
1. [白玉兰预测](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E9%A2%84%E6%B5%8B%23) `40.9K 🔥` `-83%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `39.4K 🔥` `-64%`
1. [周杰伦演唱会劝退无票歌迷 (Jay Chou's concert persuades fans to leave without tickets)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8A%9D%E9%80%80%E6%97%A0%E7%A5%A8%E6%AD%8C%E8%BF%B7%23) `37.4K 🔥` `-66%`
1. [恋与深空对不起文学](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%AF%B9%E4%B8%8D%E8%B5%B7%E6%96%87%E5%AD%A6%23) `36.3K 🔥` `-59%`
1. [C罗球鞋上印有自己5个孩子名字](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%90%83%E9%9E%8B%E4%B8%8A%E5%8D%B0%E6%9C%89%E8%87%AA%E5%B7%B15%E4%B8%AA%E5%AD%A9%E5%AD%90%E5%90%8D%E5%AD%97%23) `35.1K 🔥` `-56%`
1. [韩国 内讧](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%20%E5%86%85%E8%AE%A7%23) `34.9K 🔥` `-85%`
1. [油车真的崩盘了吗 (Did the oil truck really collapse?)](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E8%BD%A6%E7%9C%9F%E7%9A%84%E5%B4%A9%E7%9B%98%E4%BA%86%E5%90%97%23) `34.8K 🔥` `-57%`
1. [李小冉说小考教室在拆除中](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E8%AF%B4%E5%B0%8F%E8%80%83%E6%95%99%E5%AE%A4%E5%9C%A8%E6%8B%86%E9%99%A4%E4%B8%AD%23) `34.8K 🔥` `-71%`
1. [王欣瑜vs大坂直美](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AC%A3%E7%91%9Cvs%E5%A4%A7%E5%9D%82%E7%9B%B4%E7%BE%8E%23) `34.7K 🔥` `-56%`
1. [逆水寒手游](https://s.weibo.com/weibo?q=%23%E9%80%86%E6%B0%B4%E5%AF%92%E6%89%8B%E6%B8%B8%23) `34.7K 🔥` `-54%`
1. [江苏高考600分以上40931人](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E9%AB%98%E8%80%83600%E5%88%86%E4%BB%A5%E4%B8%8A40931%E4%BA%BA%23) `34.7K 🔥` `-58%`
1. [恋与深空嘴上认错实际行动全无](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%98%B4%E4%B8%8A%E8%AE%A4%E9%94%99%E5%AE%9E%E9%99%85%E8%A1%8C%E5%8A%A8%E5%85%A8%E6%97%A0%23) `34.7K 🔥` `-56%`
1. [女孩感冒服药离世暴露基层药店乱象](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%84%9F%E5%86%92%E6%9C%8D%E8%8D%AF%E7%A6%BB%E4%B8%96%E6%9A%B4%E9%9C%B2%E5%9F%BA%E5%B1%82%E8%8D%AF%E5%BA%97%E4%B9%B1%E8%B1%A1%23) `34.6K 🔥` `-56%`
1. [儿子高考502分收到妈妈幸福一巴掌 (Son received a happy slap from his mother after scoring 502 in the college entrance examination)](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E9%AB%98%E8%80%83502%E5%88%86%E6%94%B6%E5%88%B0%E5%A6%88%E5%A6%88%E5%B9%B8%E7%A6%8F%E4%B8%80%E5%B7%B4%E6%8E%8C%23) `34.6K 🔥` `-56%`
1. [腾讯到白玉兰只干一件事](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%88%B0%E7%99%BD%E7%8E%89%E5%85%B0%E5%8F%AA%E5%B9%B2%E4%B8%80%E4%BB%B6%E4%BA%8B%23) `34.6K 🔥` `-56%`
1. [31个省区市高考分数线均已公布](https://s.weibo.com/weibo?q=%2331%E4%B8%AA%E7%9C%81%E5%8C%BA%E5%B8%82%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%E5%9D%87%E5%B7%B2%E5%85%AC%E5%B8%83%23) `34.6K 🔥` `-57%`
1. [四川高考600分及以上26697人](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E9%AB%98%E8%80%83600%E5%88%86%E5%8F%8A%E4%BB%A5%E4%B8%8A26697%E4%BA%BA%23) `34.5K 🔥` `-56%`
1. [千香定档节奏 (Qianxiang sets the rhythm)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%A6%99%E5%AE%9A%E6%A1%A3%E8%8A%82%E5%A5%8F%23) `34.5K 🔥` `-57%`
1. [工位吃饭羞耻症 (Eating at work station shame syndrome)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%8D%E5%90%83%E9%A5%AD%E7%BE%9E%E8%80%BB%E7%97%87%23) `34.5K 🔥` `-58%`
1. [江西高考600分以上17122人](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%A5%BF%E9%AB%98%E8%80%83600%E5%88%86%E4%BB%A5%E4%B8%8A17122%E4%BA%BA%23) `34.4K 🔥` `-58%`
1. [失联13岁男孩落入坑洞疑靠喝水存活](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E8%81%9413%E5%B2%81%E7%94%B7%E5%AD%A9%E8%90%BD%E5%85%A5%E5%9D%91%E6%B4%9E%E7%96%91%E9%9D%A0%E5%96%9D%E6%B0%B4%E5%AD%98%E6%B4%BB%23) `34.4K 🔥` `-56%`
1. [外网嘲讽韩国队真丢脸](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E5%98%B2%E8%AE%BD%E9%9F%A9%E5%9B%BD%E9%98%9F%E7%9C%9F%E4%B8%A2%E8%84%B8%23) `34.4K 🔥` `-57%`
1. [中国男排VS比利时男排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E6%8E%92VS%E6%AF%94%E5%88%A9%E6%97%B6%E7%94%B7%E6%8E%92%23) `34.4K 🔥` `-58%`

Updated at 2026-06-26 04:02:41

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
