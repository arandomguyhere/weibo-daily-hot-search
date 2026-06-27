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

1. [陈瑶下班哭了 (Chen Yao cried after get off work)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E4%B8%8B%E7%8F%AD%E5%93%AD%E4%BA%86%23) `515.9K 🔥` `NEW`
1. [恋与深空 敷衍](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%20%E6%95%B7%E8%A1%8D%23) `448.9K 🔥` `NEW`
1. [恋与深空郑重承诺](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E9%83%91%E9%87%8D%E6%89%BF%E8%AF%BA%23) `156.7K 🔥` `NEW`
1. [央视曝网络测评翻车](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E7%BD%91%E7%BB%9C%E6%B5%8B%E8%AF%84%E7%BF%BB%E8%BD%A6%23) `115.0K 🔥` `NEW`
1. [恋与深空回应 (Love and deep space response)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9E%E5%BA%94%23) `3.7M 🔥`
1. [年入多少能有这样生活水平](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%85%A5%E5%A4%9A%E5%B0%91%E8%83%BD%E6%9C%89%E8%BF%99%E6%A0%B7%E7%94%9F%E6%B4%BB%E6%B0%B4%E5%B9%B3%23) `253.3K 🔥`
1. [诸暨出租车司机](https://s.weibo.com/weibo?q=%23%E8%AF%B8%E6%9A%A8%E5%87%BA%E7%A7%9F%E8%BD%A6%E5%8F%B8%E6%9C%BA%23) `158.6K 🔥`
1. [毒贩悬赏缉毒警人头一颗200万 (Drug dealers offer reward of 2 million for anti-narcotics police officers’ heads)](https://s.weibo.com/weibo?q=%23%E6%AF%92%E8%B4%A9%E6%82%AC%E8%B5%8F%E7%BC%89%E6%AF%92%E8%AD%A6%E4%BA%BA%E5%A4%B4%E4%B8%80%E9%A2%97200%E4%B8%87%23) `157.0K 🔥`
1. [人一旦染上了早睡才知道有多爽](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E6%9F%93%E4%B8%8A%E4%BA%86%E6%97%A9%E7%9D%A1%E6%89%8D%E7%9F%A5%E9%81%93%E6%9C%89%E5%A4%9A%E7%88%BD%23) `115.7K 🔥`
1. [泰17岁少女遭外国男子谋杀抛裸尸](https://s.weibo.com/weibo?q=%23%E6%B3%B017%E5%B2%81%E5%B0%91%E5%A5%B3%E9%81%AD%E5%A4%96%E5%9B%BD%E7%94%B7%E5%AD%90%E8%B0%8B%E6%9D%80%E6%8A%9B%E8%A3%B8%E5%B0%B8%23) `115.4K 🔥`
1. [欧洲极端高温热死15000人](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%B4%B2%E6%9E%81%E7%AB%AF%E9%AB%98%E6%B8%A9%E7%83%AD%E6%AD%BB15000%E4%BA%BA%23) `113.3K 🔥`
1. [萧蔷 感谢乘风剧组](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%20%E6%84%9F%E8%B0%A2%E4%B9%98%E9%A3%8E%E5%89%A7%E7%BB%84%23) `111.7K 🔥`
1. [张月年度队长 (Zhang Yue captain of the year)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%B9%B4%E5%BA%A6%E9%98%9F%E9%95%BF%23) `111.6K 🔥`
1. [乌兰图雅卡位13](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%E5%8D%A1%E4%BD%8D13%23) `110.2K 🔥`
1. [徐洁儿妥协被换了 (Xu Jieer compromised and was replaced)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E5%A6%A5%E5%8D%8F%E8%A2%AB%E6%8D%A2%E4%BA%86%23) `110.0K 🔥`
1. [去家务化意识](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%AE%B6%E5%8A%A1%E5%8C%96%E6%84%8F%E8%AF%86%23) `109.6K 🔥`
1. [不穿的衣服可以拿来挂耳环](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%A9%BF%E7%9A%84%E8%A1%A3%E6%9C%8D%E5%8F%AF%E4%BB%A5%E6%8B%BF%E6%9D%A5%E6%8C%82%E8%80%B3%E7%8E%AF%23) `109.4K 🔥`
1. [班主任说要解散班级群 (The class teacher said that the class group should be disbanded)](https://s.weibo.com/weibo?q=%23%E7%8F%AD%E4%B8%BB%E4%BB%BB%E8%AF%B4%E8%A6%81%E8%A7%A3%E6%95%A3%E7%8F%AD%E7%BA%A7%E7%BE%A4%23) `109.0K 🔥`
1. [陈情令开播七周年醉戾悔](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%83%85%E4%BB%A4%E5%BC%80%E6%92%AD%E4%B8%83%E5%91%A8%E5%B9%B4%E9%86%89%E6%88%BE%E6%82%94%23) `107.9K 🔥`
1. [高敏感人都去学农吧](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%95%8F%E6%84%9F%E4%BA%BA%E9%83%BD%E5%8E%BB%E5%AD%A6%E5%86%9C%E5%90%A7%23) `107.6K 🔥`
1. [笔趣阁APP](https://s.weibo.com/weibo?q=%23%E7%AC%94%E8%B6%A3%E9%98%81APP%23) `1.6M 🔥` `-42%`
1. [全球企业认准中国完整产业链](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E4%BC%81%E4%B8%9A%E8%AE%A4%E5%87%86%E4%B8%AD%E5%9B%BD%E5%AE%8C%E6%95%B4%E4%BA%A7%E4%B8%9A%E9%93%BE%23) `980.9K 🔥` `-46%`
1. [少了尊重](https://s.weibo.com/weibo?q=%23%E5%B0%91%E4%BA%86%E5%B0%8A%E9%87%8D%23) `800.6K 🔥` `-48%`
1. [老师以为你胖了没敢问](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B8%88%E4%BB%A5%E4%B8%BA%E4%BD%A0%E8%83%96%E4%BA%86%E6%B2%A1%E6%95%A2%E9%97%AE%23) `478.9K 🔥` `-36%`
1. [复习备考状态拉满 (Review preparation status is full)](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E4%B9%A0%E5%A4%87%E8%80%83%E7%8A%B6%E6%80%81%E6%8B%89%E6%BB%A1%23) `472.6K 🔥` `-50%`
1. [蔡依林封后](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%B0%81%E5%90%8E%23) `347.1K 🔥` `-72%`
1. [浪姐成团名单 (Sister Lang's group list)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%88%90%E5%9B%A2%E5%90%8D%E5%8D%95%23) `329.3K 🔥` `-67%`
1. [安崎卡位](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E5%8D%A1%E4%BD%8D%23) `214.4K 🔥` `-25%`
1. [叶一茜票数](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E4%B8%80%E8%8C%9C%E7%A5%A8%E6%95%B0%23) `205.1K 🔥` `-27%`
1. [陈瑶没成团 (Chen Yao did not form a group)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E6%B2%A1%E6%88%90%E5%9B%A2%23) `161.2K 🔥` `-43%`
1. [钟意下首发AG被零封](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%84%8F%E4%B8%8B%E9%A6%96%E5%8F%91AG%E8%A2%AB%E9%9B%B6%E5%B0%81%23) `160.0K 🔥` `-42%`
1. [徐梦洁没成团 (Xu Mengjie did not form a group)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E6%B2%A1%E6%88%90%E5%9B%A2%23) `158.6K 🔥` `-34%`
1. [高考699分女生父亲发声](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83699%E5%88%86%E5%A5%B3%E7%94%9F%E7%88%B6%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `158.6K 🔥` `-41%`
1. [吴艳妮12秒99夺冠](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE12%E7%A7%9299%E5%A4%BA%E5%86%A0%23) `158.0K 🔥` `-45%`
1. [三战高考女孩查分大哭看哭网友](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%88%98%E9%AB%98%E8%80%83%E5%A5%B3%E5%AD%A9%E6%9F%A5%E5%88%86%E5%A4%A7%E5%93%AD%E7%9C%8B%E5%93%AD%E7%BD%91%E5%8F%8B%23) `157.6K 🔥` `-39%`
1. [常石磊单依纯 争气](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E7%9F%B3%E7%A3%8A%E5%8D%95%E4%BE%9D%E7%BA%AF%20%E4%BA%89%E6%B0%94%23) `151.9K 🔥` `-45%`
1. [杨紫粉底液](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%B2%89%E5%BA%95%E6%B6%B2%23) `138.6K 🔥` `-50%`
1. [通过衣服吊牌看成本价的方法 (How to check the cost price through clothing tags)](https://s.weibo.com/weibo?q=%23%E9%80%9A%E8%BF%87%E8%A1%A3%E6%9C%8D%E5%90%8A%E7%89%8C%E7%9C%8B%E6%88%90%E6%9C%AC%E4%BB%B7%E7%9A%84%E6%96%B9%E6%B3%95%23) `126.6K 🔥` `-60%`
1. [王濛李小冉和结婚有什么区别](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%9D%8E%E5%B0%8F%E5%86%89%E5%92%8C%E7%BB%93%E5%A9%9A%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%23) `124.2K 🔥` `-46%`
1. [曾沛慈总冠军](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E6%80%BB%E5%86%A0%E5%86%9B%23) `115.8K 🔥` `-58%`
1. [日方对辽宁舰编队滋扰发生重大变化 (Japan’s harassment of the Liaoning fleet has undergone major changes)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%96%B9%E5%AF%B9%E8%BE%BD%E5%AE%81%E8%88%B0%E7%BC%96%E9%98%9F%E6%BB%8B%E6%89%B0%E5%8F%91%E7%94%9F%E9%87%8D%E5%A4%A7%E5%8F%98%E5%8C%96%23) `114.7K 🔥` `-41%`
1. [李小冉 假拉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E5%81%87%E6%8B%89%23) `114.2K 🔥` `-37%`
1. [浪姐总决赛](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%80%BB%E5%86%B3%E8%B5%9B%23) `114.0K 🔥` `-32%`
1. [盛世天下](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E4%B8%96%E5%A4%A9%E4%B8%8B%23) `113.5K 🔥` `-44%`
1. [金曲奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9B%B2%E5%A5%96%23) `113.0K 🔥` `-50%`
1. [田馥甄金曲奖缅怀演出](https://s.weibo.com/weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E9%87%91%E6%9B%B2%E5%A5%96%E7%BC%85%E6%80%80%E6%BC%94%E5%87%BA%23) `112.4K 🔥` `-24%`
1. [浪姐排名](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `112.0K 🔥` `-51%`
1. [奔驰取消德国9万名员工年终奖](https://s.weibo.com/weibo?q=%23%E5%A5%94%E9%A9%B0%E5%8F%96%E6%B6%88%E5%BE%B7%E5%9B%BD9%E4%B8%87%E5%90%8D%E5%91%98%E5%B7%A5%E5%B9%B4%E7%BB%88%E5%A5%96%23) `111.0K 🔥` `-24%`
1. [金曲奖获奖名单 (Golden Melody Award winners list)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9B%B2%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `110.8K 🔥` `-27%`
1. [北大哲学系主任的毕业致辞火了](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E5%93%B2%E5%AD%A6%E7%B3%BB%E4%B8%BB%E4%BB%BB%E7%9A%84%E6%AF%95%E4%B8%9A%E8%87%B4%E8%BE%9E%E7%81%AB%E4%BA%86%23) `108.6K 🔥` `-57%`
1. [AG被RW零封 (AG was blocked by RW)](https://s.weibo.com/weibo?q=%23AG%E8%A2%ABRW%E9%9B%B6%E5%B0%81%23) `108.2K 🔥` `-70%`

Updated at 2026-06-28 02:48:37

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
