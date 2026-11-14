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

1. [奔驰女司机借300元加油钱后手机关机](https://s.weibo.com/weibo?q=%23%E5%A5%94%E9%A9%B0%E5%A5%B3%E5%8F%B8%E6%9C%BA%E5%80%9F300%E5%85%83%E5%8A%A0%E6%B2%B9%E9%92%B1%E5%90%8E%E6%89%8B%E6%9C%BA%E5%85%B3%E6%9C%BA%23) `1.1M 🔥` `NEW`
1. [持械入宋](https://s.weibo.com/weibo?q=%23%E6%8C%81%E6%A2%B0%E5%85%A5%E5%AE%8B%23) `801.6K 🔥` `NEW`
1. [一图读懂我国消费市场潜力与活力](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%9B%BE%E8%AF%BB%E6%87%82%E6%88%91%E5%9B%BD%E6%B6%88%E8%B4%B9%E5%B8%82%E5%9C%BA%E6%BD%9C%E5%8A%9B%E4%B8%8E%E6%B4%BB%E5%8A%9B%23) `653.9K 🔥` `NEW`
1. [年轻人又抠又大方的消费观](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%8F%88%E6%8A%A0%E5%8F%88%E5%A4%A7%E6%96%B9%E7%9A%84%E6%B6%88%E8%B4%B9%E8%A7%82%23) `482.2K 🔥` `NEW`
1. [厉娜 不负少年不负卿](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%20%E4%B8%8D%E8%B4%9F%E5%B0%91%E5%B9%B4%E4%B8%8D%E8%B4%9F%E5%8D%BF%23) `284.2K 🔥` `NEW`
1. [无人健身房火了小伙5年开1300家](https://s.weibo.com/weibo?q=%23%E6%97%A0%E4%BA%BA%E5%81%A5%E8%BA%AB%E6%88%BF%E7%81%AB%E4%BA%86%E5%B0%8F%E4%BC%995%E5%B9%B4%E5%BC%801300%E5%AE%B6%23) `279.4K 🔥` `NEW`
1. [KPL十周年特别庆典](https://s.weibo.com/weibo?q=%23KPL%E5%8D%81%E5%91%A8%E5%B9%B4%E7%89%B9%E5%88%AB%E5%BA%86%E5%85%B8%23) `274.7K 🔥` `NEW`
1. [iPhoneDuo45.7万次折叠后铰链明显磨损](https://s.weibo.com/weibo?q=%23iPhoneDuo45.7%E4%B8%87%E6%AC%A1%E6%8A%98%E5%8F%A0%E5%90%8E%E9%93%B0%E9%93%BE%E6%98%8E%E6%98%BE%E7%A3%A8%E6%8D%9F%23) `265.0K 🔥` `NEW`
1. [把孩子塞后备箱被查家长说送给交警](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E5%AD%A9%E5%AD%90%E5%A1%9E%E5%90%8E%E5%A4%87%E7%AE%B1%E8%A2%AB%E6%9F%A5%E5%AE%B6%E9%95%BF%E8%AF%B4%E9%80%81%E7%BB%99%E4%BA%A4%E8%AD%A6%23) `243.9K 🔥` `NEW`
1. [22岁男子确诊糖尿病不敢告诉同事](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E7%94%B7%E5%AD%90%E7%A1%AE%E8%AF%8A%E7%B3%96%E5%B0%BF%E7%97%85%E4%B8%8D%E6%95%A2%E5%91%8A%E8%AF%89%E5%90%8C%E4%BA%8B%23) `240.6K 🔥` `NEW`
1. [大美晒受伤照片](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%BE%8E%E6%99%92%E5%8F%97%E4%BC%A4%E7%85%A7%E7%89%87%23) `238.4K 🔥` `NEW`
1. [曝娱乐圈下周会发生一次世纪大和解](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A8%B1%E4%B9%90%E5%9C%88%E4%B8%8B%E5%91%A8%E4%BC%9A%E5%8F%91%E7%94%9F%E4%B8%80%E6%AC%A1%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%92%8C%E8%A7%A3%23) `230.6K 🔥` `NEW`
1. [曝S16决赛还有重磅官宣](https://s.weibo.com/weibo?q=%23%E6%9B%9DS16%E5%86%B3%E8%B5%9B%E8%BF%98%E6%9C%89%E9%87%8D%E7%A3%85%E5%AE%98%E5%AE%A3%23) `229.2K 🔥` `NEW`
1. [曝娜然怀孕了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A8%9C%E7%84%B6%E6%80%80%E5%AD%95%E4%BA%86%23) `220.6K 🔥` `NEW`
1. [超5万人请愿黄仁勋复职](https://s.weibo.com/weibo?q=%23%E8%B6%855%E4%B8%87%E4%BA%BA%E8%AF%B7%E6%84%BF%E9%BB%84%E4%BB%81%E5%8B%8B%E5%A4%8D%E8%81%8C%23) `216.6K 🔥` `NEW`
1. [范丞丞回复了宋亚轩](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%9B%9E%E5%A4%8D%E4%BA%86%E5%AE%8B%E4%BA%9A%E8%BD%A9%23) `207.5K 🔥` `NEW`
1. [娱乐圈公开撕破脸的艺人](https://s.weibo.com/weibo?q=%23%E5%A8%B1%E4%B9%90%E5%9C%88%E5%85%AC%E5%BC%80%E6%92%95%E7%A0%B4%E8%84%B8%E7%9A%84%E8%89%BA%E4%BA%BA%23) `201.7K 🔥` `NEW`
1. [陈晓楠说青稚的感觉不等于事实](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%99%93%E6%A5%A0%E8%AF%B4%E9%9D%92%E7%A8%9A%E7%9A%84%E6%84%9F%E8%A7%89%E4%B8%8D%E7%AD%89%E4%BA%8E%E4%BA%8B%E5%AE%9E%23) `200.9K 🔥` `NEW`
1. [文班亚马说对格林恶犯不感到惊讶](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E8%AF%B4%E5%AF%B9%E6%A0%BC%E6%9E%97%E6%81%B6%E7%8A%AF%E4%B8%8D%E6%84%9F%E5%88%B0%E6%83%8A%E8%AE%B6%23) `198.5K 🔥` `NEW`
1. [Lisa把钱塞在腰上会不会太帅了](https://s.weibo.com/weibo?q=%23Lisa%E6%8A%8A%E9%92%B1%E5%A1%9E%E5%9C%A8%E8%85%B0%E4%B8%8A%E4%BC%9A%E4%B8%8D%E4%BC%9A%E5%A4%AA%E5%B8%85%E4%BA%86%23) `198.1K 🔥` `NEW`
1. [许飞 不知道厉娜喜欢什么就都准备了](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%20%E4%B8%8D%E7%9F%A5%E9%81%93%E5%8E%89%E5%A8%9C%E5%96%9C%E6%AC%A2%E4%BB%80%E4%B9%88%E5%B0%B1%E9%83%BD%E5%87%86%E5%A4%87%E4%BA%86%23) `197.4K 🔥` `NEW`
1. [二十五到三十岁这五年最值钱](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E5%8D%81%E4%BA%94%E5%88%B0%E4%B8%89%E5%8D%81%E5%B2%81%E8%BF%99%E4%BA%94%E5%B9%B4%E6%9C%80%E5%80%BC%E9%92%B1%23) `196.7K 🔥` `NEW`
1. [TOP登陆少年](https://s.weibo.com/weibo?q=%23TOP%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4%23) `196.2K 🔥` `NEW`
1. [王子璇机场被挤得走不动道](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E6%9C%BA%E5%9C%BA%E8%A2%AB%E6%8C%A4%E5%BE%97%E8%B5%B0%E4%B8%8D%E5%8A%A8%E9%81%93%23) `195.8K 🔥` `NEW`
1. [孔刘宋慧乔 你不是我也不是](https://s.weibo.com/weibo?q=%23%E5%AD%94%E5%88%98%E5%AE%8B%E6%85%A7%E4%B9%94%20%E4%BD%A0%E4%B8%8D%E6%98%AF%E6%88%91%E4%B9%9F%E4%B8%8D%E6%98%AF%23) `195.4K 🔥` `NEW`
1. [男子自己做饭1年逆转糖尿病](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%87%AA%E5%B7%B1%E5%81%9A%E9%A5%AD1%E5%B9%B4%E9%80%86%E8%BD%AC%E7%B3%96%E5%B0%BF%E7%97%85%23) `195.1K 🔥` `NEW`
1. [产妇羊水栓塞母子双亡医院赔119万](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E5%A6%87%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%E6%AF%8D%E5%AD%90%E5%8F%8C%E4%BA%A1%E5%8C%BB%E9%99%A2%E8%B5%94119%E4%B8%87%23) `160.9K 🔥` `NEW`
1. [山姆399元羽绒服鸭绒成本约130元](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86399%E5%85%83%E7%BE%BD%E7%BB%92%E6%9C%8D%E9%B8%AD%E7%BB%92%E6%88%90%E6%9C%AC%E7%BA%A6130%E5%85%83%23) `157.8K 🔥` `NEW`
1. [北京必拉榜第一卫生间](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%BF%85%E6%8B%89%E6%A6%9C%E7%AC%AC%E4%B8%80%E5%8D%AB%E7%94%9F%E9%97%B4%23) `153.9K 🔥` `NEW`
1. [奚梦瑶家里的盘子用的都是爱马仕的](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%AE%B6%E9%87%8C%E7%9A%84%E7%9B%98%E5%AD%90%E7%94%A8%E7%9A%84%E9%83%BD%E6%98%AF%E7%88%B1%E9%A9%AC%E4%BB%95%E7%9A%84%23) `148.4K 🔥` `NEW`
1. [医院里另一种人财两空](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E9%87%8C%E5%8F%A6%E4%B8%80%E7%A7%8D%E4%BA%BA%E8%B4%A2%E4%B8%A4%E7%A9%BA%23) `147.8K 🔥` `NEW`
1. [遇全美停飞中国乘客发声](https://s.weibo.com/weibo?q=%23%E9%81%87%E5%85%A8%E7%BE%8E%E5%81%9C%E9%A3%9E%E4%B8%AD%E5%9B%BD%E4%B9%98%E5%AE%A2%E5%8F%91%E5%A3%B0%23) `144.1K 🔥` `NEW`
1. [4岁女童被副驾气囊撞破十二指肠](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E7%AB%A5%E8%A2%AB%E5%89%AF%E9%A9%BE%E6%B0%94%E5%9B%8A%E6%92%9E%E7%A0%B4%E5%8D%81%E4%BA%8C%E6%8C%87%E8%82%A0%23) `143.9K 🔥` `NEW`
1. [Chovy和Viper相视一笑](https://s.weibo.com/weibo?q=%23Chovy%E5%92%8CViper%E7%9B%B8%E8%A7%86%E4%B8%80%E7%AC%91%23) `141.3K 🔥` `NEW`
1. [大美曝与高迪离婚细节](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%BE%8E%E6%9B%9D%E4%B8%8E%E9%AB%98%E8%BF%AA%E7%A6%BB%E5%A9%9A%E7%BB%86%E8%8A%82%23) `139.4K 🔥` `NEW`
1. [白小纯青稚把对方当家人了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E6%8A%8A%E5%AF%B9%E6%96%B9%E5%BD%93%E5%AE%B6%E4%BA%BA%E4%BA%86%23) `136.0K 🔥` `NEW`
1. [中国证监会主席吴清最新发言](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%AF%81%E7%9B%91%E4%BC%9A%E4%B8%BB%E5%B8%AD%E5%90%B4%E6%B8%85%E6%9C%80%E6%96%B0%E5%8F%91%E8%A8%80%23) `133.3K 🔥` `NEW`
1. [女推3 李一桐](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%8E%A83%20%E6%9D%8E%E4%B8%80%E6%A1%90%23) `130.9K 🔥` `NEW`
1. [百万级抗癌药首次纳入基本医保](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%B8%87%E7%BA%A7%E6%8A%97%E7%99%8C%E8%8D%AF%E9%A6%96%E6%AC%A1%E7%BA%B3%E5%85%A5%E5%9F%BA%E6%9C%AC%E5%8C%BB%E4%BF%9D%23) `126.8K 🔥` `NEW`
1. [田曦薇尖叫之夜官宣节奏](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%B0%96%E5%8F%AB%E4%B9%8B%E5%A4%9C%E5%AE%98%E5%AE%A3%E8%8A%82%E5%A5%8F%23) `118.9K 🔥` `NEW`
1. [许飞成绩](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E6%88%90%E7%BB%A9%23) `115.8K 🔥` `NEW`
1. [白敬亭请现发团吃烤全羊](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E8%AF%B7%E7%8E%B0%E5%8F%91%E5%9B%A2%E5%90%83%E7%83%A4%E5%85%A8%E7%BE%8A%23) `115.8K 🔥` `NEW`
1. [30岁糖尿病男子血糖狂飙20年险丧命](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E7%B3%96%E5%B0%BF%E7%97%85%E7%94%B7%E5%AD%90%E8%A1%80%E7%B3%96%E7%8B%82%E9%A3%9920%E5%B9%B4%E9%99%A9%E4%B8%A7%E5%91%BD%23) `114.1K 🔥` `NEW`
1. [格林恶犯文班亚马](https://s.weibo.com/weibo?q=%23%E6%A0%BC%E6%9E%97%E6%81%B6%E7%8A%AF%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%23) `106.4K 🔥` `NEW`
1. [大暴雪和断崖式降温来了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%9A%B4%E9%9B%AA%E5%92%8C%E6%96%AD%E5%B4%96%E5%BC%8F%E9%99%8D%E6%B8%A9%E6%9D%A5%E4%BA%86%23) `105.4K 🔥` `NEW`
1. [确认出席爱奇艺尖叫之夜的艺人](https://s.weibo.com/weibo?q=%23%E7%A1%AE%E8%AE%A4%E5%87%BA%E5%B8%AD%E7%88%B1%E5%A5%87%E8%89%BA%E5%B0%96%E5%8F%AB%E4%B9%8B%E5%A4%9C%E7%9A%84%E8%89%BA%E4%BA%BA%23) `102.2K 🔥` `NEW`
1. [竞燃之夜阵容官宣](https://s.weibo.com/weibo?q=%23%E7%AB%9E%E7%87%83%E4%B9%8B%E5%A4%9C%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `102.1K 🔥` `NEW`
1. [仙洋为大美发声](https://s.weibo.com/weibo?q=%23%E4%BB%99%E6%B4%8B%E4%B8%BA%E5%A4%A7%E7%BE%8E%E5%8F%91%E5%A3%B0%23) `198.7K 🔥` `+417%`
1. [911后第二次全美停飞](https://s.weibo.com/weibo?q=%23911%E5%90%8E%E7%AC%AC%E4%BA%8C%E6%AC%A1%E5%85%A8%E7%BE%8E%E5%81%9C%E9%A3%9E%23) `249.1K 🔥`
1. [曝魏晨被雪藏的原因](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%AD%8F%E6%99%A8%E8%A2%AB%E9%9B%AA%E8%97%8F%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `197.6K 🔥`
1. [黄仁勋辞职或影响史上最大IPO](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E8%BE%9E%E8%81%8C%E6%88%96%E5%BD%B1%E5%93%8D%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7IPO%23) `151.0K 🔥` `-41%`

Updated at 2026-11-14 15:59:56

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
