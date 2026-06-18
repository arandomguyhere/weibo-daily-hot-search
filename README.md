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

1. [葡萄牙丢球后C罗质问本队门将 (Cristiano Ronaldo questioned his team's goalkeeper after Portugal conceded a goal)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E4%B8%A2%E7%90%83%E5%90%8EC%E7%BD%97%E8%B4%A8%E9%97%AE%E6%9C%AC%E9%98%9F%E9%97%A8%E5%B0%86%23) `1.3M 🔥` `NEW`
1. [香港机场发生黄金大劫案](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%9C%BA%E5%9C%BA%E5%8F%91%E7%94%9F%E9%BB%84%E9%87%91%E5%A4%A7%E5%8A%AB%E6%A1%88%23) `877.5K 🔥` `NEW`
1. [我国又一千亿级产业刷屏](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%8F%88%E4%B8%80%E5%8D%83%E4%BA%BF%E7%BA%A7%E4%BA%A7%E4%B8%9A%E5%88%B7%E5%B1%8F%23) `649.6K 🔥` `NEW`
1. [尚界H5焕新上市15.98万元起](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CH5%E7%84%95%E6%96%B0%E4%B8%8A%E5%B8%8215.98%E4%B8%87%E5%85%83%E8%B5%B7%23) `649.1K 🔥` `NEW`
1. [建议大家对钱要有概念](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%AF%B9%E9%92%B1%E8%A6%81%E6%9C%89%E6%A6%82%E5%BF%B5%23) `633.9K 🔥` `NEW`
1. [捷克vs南非](https://s.weibo.com/weibo?q=%23%E6%8D%B7%E5%85%8Bvs%E5%8D%97%E9%9D%9E%23) `422.7K 🔥` `NEW`
1. [葡萄牙队回应C罗发文](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E9%98%9F%E5%9B%9E%E5%BA%94C%E7%BD%97%E5%8F%91%E6%96%87%23) `386.7K 🔥` `NEW`
1. [袁咏仪香港小姐的含金量还在上升](https://s.weibo.com/weibo?q=%23%E8%A2%81%E5%92%8F%E4%BB%AA%E9%A6%99%E6%B8%AF%E5%B0%8F%E5%A7%90%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `377.2K 🔥` `NEW`
1. [要不要带孩子检查甲酰胺](https://s.weibo.com/weibo?q=%23%E8%A6%81%E4%B8%8D%E8%A6%81%E5%B8%A6%E5%AD%A9%E5%AD%90%E6%A3%80%E6%9F%A5%E7%94%B2%E9%85%B0%E8%83%BA%23) `309.1K 🔥` `NEW`
1. [毛晓彤为了剧宣五问赵又廷](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E5%BD%A4%E4%B8%BA%E4%BA%86%E5%89%A7%E5%AE%A3%E4%BA%94%E9%97%AE%E8%B5%B5%E5%8F%88%E5%BB%B7%23) `293.9K 🔥` `NEW`
1. [炽夏 (blazing summer)](https://s.weibo.com/weibo?q=%23%E7%82%BD%E5%A4%8F%23) `252.8K 🔥` `NEW`
1. [已买Babycare纸尿裤两年家长发声](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E4%B9%B0Babycare%E7%BA%B8%E5%B0%BF%E8%A3%A4%E4%B8%A4%E5%B9%B4%E5%AE%B6%E9%95%BF%E5%8F%91%E5%A3%B0%23) `252.3K 🔥` `NEW`
1. [张凌赫田曦薇 深夜散步糖](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%20%E6%B7%B1%E5%A4%9C%E6%95%A3%E6%AD%A5%E7%B3%96%23) `251.8K 🔥` `NEW`
1. [宝妈李佳琦直播间买到毒纸尿裤](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E6%9D%8E%E4%BD%B3%E7%90%A6%E7%9B%B4%E6%92%AD%E9%97%B4%E4%B9%B0%E5%88%B0%E6%AF%92%E7%BA%B8%E5%B0%BF%E8%A3%A4%23) `251.1K 🔥` `NEW`
1. [陈建斌儿子比陈建斌高一个头](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BB%BA%E6%96%8C%E5%84%BF%E5%AD%90%E6%AF%94%E9%99%88%E5%BB%BA%E6%96%8C%E9%AB%98%E4%B8%80%E4%B8%AA%E5%A4%B4%23) `249.9K 🔥` `NEW`
1. [徐璐办完终身卡美容院倒闭了](https://s.weibo.com/weibo?q=%23%E5%BE%90%E7%92%90%E5%8A%9E%E5%AE%8C%E7%BB%88%E8%BA%AB%E5%8D%A1%E7%BE%8E%E5%AE%B9%E9%99%A2%E5%80%92%E9%97%AD%E4%BA%86%23) `249.3K 🔥` `NEW`
1. [东北人应该被禁止给景点起名](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E4%BA%BA%E5%BA%94%E8%AF%A5%E8%A2%AB%E7%A6%81%E6%AD%A2%E7%BB%99%E6%99%AF%E7%82%B9%E8%B5%B7%E5%90%8D%23) `248.2K 🔥` `NEW`
1. [陈都灵请鞠婧祎剧组喝人参花茶](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E8%AF%B7%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%89%A7%E7%BB%84%E5%96%9D%E4%BA%BA%E5%8F%82%E8%8A%B1%E8%8C%B6%23) `247.3K 🔥` `NEW`
1. [金价上下乱跳](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8A%E4%B8%8B%E4%B9%B1%E8%B7%B3%23) `246.9K 🔥` `NEW`
1. [因AI翻译意外爆红的帖子](https://s.weibo.com/weibo?q=%23%E5%9B%A0AI%E7%BF%BB%E8%AF%91%E6%84%8F%E5%A4%96%E7%88%86%E7%BA%A2%E7%9A%84%E5%B8%96%E5%AD%90%23) `245.7K 🔥` `NEW`
1. [8万多办婚礼现场视频出现别人老公 (More than 80,000 weddings were held in a live video showing someone else’s husband)](https://s.weibo.com/weibo?q=%238%E4%B8%87%E5%A4%9A%E5%8A%9E%E5%A9%9A%E7%A4%BC%E7%8E%B0%E5%9C%BA%E8%A7%86%E9%A2%91%E5%87%BA%E7%8E%B0%E5%88%AB%E4%BA%BA%E8%80%81%E5%85%AC%23) `245.1K 🔥` `NEW`
1. [吴倩被爸爸打掉牙齿不敢吐出来](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%80%A9%E8%A2%AB%E7%88%B8%E7%88%B8%E6%89%93%E6%8E%89%E7%89%99%E9%BD%BF%E4%B8%8D%E6%95%A2%E5%90%90%E5%87%BA%E6%9D%A5%23) `244.6K 🔥` `NEW`
1. [问心2陈昊宇角色下线](https://s.weibo.com/weibo?q=%23%E9%97%AE%E5%BF%832%E9%99%88%E6%98%8A%E5%AE%87%E8%A7%92%E8%89%B2%E4%B8%8B%E7%BA%BF%23) `243.8K 🔥` `NEW`
1. [食欲旺盛本质的原因](https://s.weibo.com/weibo?q=%23%E9%A3%9F%E6%AC%B2%E6%97%BA%E7%9B%9B%E6%9C%AC%E8%B4%A8%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `243.0K 🔥` `NEW`
1. [九尾 解说](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%20%E8%A7%A3%E8%AF%B4%23) `241.8K 🔥` `NEW`
1. [穆祉丞自拍瘦了好多](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E8%87%AA%E6%8B%8D%E7%98%A6%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `241.2K 🔥` `NEW`
1. [鹿晗 护照届最严厉的父亲](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E6%8A%A4%E7%85%A7%E5%B1%8A%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E7%88%B6%E4%BA%B2%23) `240.1K 🔥` `NEW`
1. [甲酰胺 致癌](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%85%B0%E8%83%BA%20%E8%87%B4%E7%99%8C%23) `239.9K 🔥` `NEW`
1. [孙怡花少8面试](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%8A%B1%E5%B0%918%E9%9D%A2%E8%AF%95%23) `239.2K 🔥` `NEW`
1. [A股市值版图迎来历史性重塑](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B8%82%E5%80%BC%E7%89%88%E5%9B%BE%E8%BF%8E%E6%9D%A5%E5%8E%86%E5%8F%B2%E6%80%A7%E9%87%8D%E5%A1%91%23) `221.6K 🔥` `NEW`
1. [毒纸尿裤涉事品牌 (The brand involved in poisonous diapers)](https://s.weibo.com/weibo?q=%23%E6%AF%92%E7%BA%B8%E5%B0%BF%E8%A3%A4%E6%B6%89%E4%BA%8B%E5%93%81%E7%89%8C%23) `220.2K 🔥` `NEW`
1. [盛世天下](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E4%B8%96%E5%A4%A9%E4%B8%8B%23) `220.2K 🔥` `NEW`
1. [李大奔严浩翔合照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%A4%A7%E5%A5%94%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%90%88%E7%85%A7%23) `196.6K 🔥` `NEW`
1. [爱情有烟火](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E6%9C%89%E7%83%9F%E7%81%AB%23) `193.7K 🔥` `NEW`
1. [好奇纸尿裤声明](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A5%87%E7%BA%B8%E5%B0%BF%E8%A3%A4%E5%A3%B0%E6%98%8E%23) `191.6K 🔥` `NEW`
1. [肯德基又换标志](https://s.weibo.com/weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%E5%8F%88%E6%8D%A2%E6%A0%87%E5%BF%97%23) `191.5K 🔥` `NEW`
1. [刘亦菲两次认出20年老粉主动握手致谢](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E4%B8%A4%E6%AC%A1%E8%AE%A4%E5%87%BA20%E5%B9%B4%E8%80%81%E7%B2%89%E4%B8%BB%E5%8A%A8%E6%8F%A1%E6%89%8B%E8%87%B4%E8%B0%A2%23) `177.0K 🔥` `NEW`
1. [白鹿一口气发了32张照片](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%80%E5%8F%A3%E6%B0%94%E5%8F%91%E4%BA%8632%E5%BC%A0%E7%85%A7%E7%89%87%23) `172.4K 🔥` `NEW`
1. [凡人修仙传严正声明](https://s.weibo.com/weibo?q=%23%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `169.1K 🔥` `NEW`
1. [TF家族洛天依](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E6%B4%9B%E5%A4%A9%E4%BE%9D%23) `166.3K 🔥` `NEW`
1. [原来父爱也可以这么直接 (It turns out that fatherly love can be so direct)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%88%B6%E7%88%B1%E4%B9%9F%E5%8F%AF%E4%BB%A5%E8%BF%99%E4%B9%88%E7%9B%B4%E6%8E%A5%23) `160.0K 🔥` `NEW`
1. [卢昱晓或将进组刺棠](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E6%88%96%E5%B0%86%E8%BF%9B%E7%BB%84%E5%88%BA%E6%A3%A0%23) `158.9K 🔥` `NEW`
1. [时代少年团上海站连开四场](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%B8%8A%E6%B5%B7%E7%AB%99%E8%BF%9E%E5%BC%80%E5%9B%9B%E5%9C%BA%23) `146.4K 🔥` `NEW`
1. [刘建宏说C罗在沙特踢都有些吃力](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BB%BA%E5%AE%8F%E8%AF%B4C%E7%BD%97%E5%9C%A8%E6%B2%99%E7%89%B9%E8%B8%A2%E9%83%BD%E6%9C%89%E4%BA%9B%E5%90%83%E5%8A%9B%23) `125.8K 🔥` `NEW`
1. [SANA解释衣服争议](https://s.weibo.com/weibo?q=%23SANA%E8%A7%A3%E9%87%8A%E8%A1%A3%E6%9C%8D%E4%BA%89%E8%AE%AE%23) `124.7K 🔥` `NEW`
1. [四川发现罕见巨型萤火虫](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%8F%91%E7%8E%B0%E7%BD%95%E8%A7%81%E5%B7%A8%E5%9E%8B%E8%90%A4%E7%81%AB%E8%99%AB%23) `123.5K 🔥` `NEW`
1. [心引力repo](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%BC%95%E5%8A%9Brepo%23) `122.5K 🔥` `NEW`
1. [张月亲妹妹催更黄灿灿vlog](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E4%BA%B2%E5%A6%B9%E5%A6%B9%E5%82%AC%E6%9B%B4%E9%BB%84%E7%81%BF%E7%81%BFvlog%23) `115.0K 🔥` `NEW`
1. [日本焚烧炉中炼出7000多克黄金](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%84%9A%E7%83%A7%E7%82%89%E4%B8%AD%E7%82%BC%E5%87%BA7000%E5%A4%9A%E5%85%8B%E9%BB%84%E9%87%91%23) `108.1K 🔥` `NEW`
1. [车企敢用高管做质检才是真安全](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%BC%81%E6%95%A2%E7%94%A8%E9%AB%98%E7%AE%A1%E5%81%9A%E8%B4%A8%E6%A3%80%E6%89%8D%E6%98%AF%E7%9C%9F%E5%AE%89%E5%85%A8%23) `108.1K 🔥` `NEW`

Updated at 2026-06-19 00:17:36

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
