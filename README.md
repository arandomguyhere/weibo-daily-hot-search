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

1. [韩林杉退赛 (Han Linshan withdrew from the competition)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%9E%97%E6%9D%89%E9%80%80%E8%B5%9B%23) `1.1M 🔥` `NEW`
1. [京东年货节送到村还能马上装](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%B9%B4%E8%B4%A7%E8%8A%82%E9%80%81%E5%88%B0%E6%9D%91%E8%BF%98%E8%83%BD%E9%A9%AC%E4%B8%8A%E8%A3%85%23) `520.1K 🔥` `NEW`
1. [马上有乾崑](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%B8%8A%E6%9C%89%E4%B9%BE%E5%B4%91%23) `220.2K 🔥` `NEW`
1. [刘梦婷完成决赛首滑](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%A2%A6%E5%A9%B7%E5%AE%8C%E6%88%90%E5%86%B3%E8%B5%9B%E9%A6%96%E6%BB%91%23) `189.5K 🔥` `NEW`
1. [谷爱凌第一跳86.58分](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%B8%80%E8%B7%B386.58%E5%88%86%23) `189.5K 🔥` `NEW`
1. [谷爱凌把要强写在骨子里](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%8A%8A%E8%A6%81%E5%BC%BA%E5%86%99%E5%9C%A8%E9%AA%A8%E5%AD%90%E9%87%8C%23) `189.4K 🔥` `NEW`
1. [丝芭学历最高的人出现了](https://s.weibo.com/weibo?q=%23%E4%B8%9D%E8%8A%AD%E5%AD%A6%E5%8E%86%E6%9C%80%E9%AB%98%E7%9A%84%E4%BA%BA%E5%87%BA%E7%8E%B0%E4%BA%86%23) `189.4K 🔥` `NEW`
1. [宁艺卓到底丑在哪了](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%88%B0%E5%BA%95%E4%B8%91%E5%9C%A8%E5%93%AA%E4%BA%86%23) `158.8K 🔥` `NEW`
1. [Kimi建议网友先用DeepSeek](https://s.weibo.com/weibo?q=%23Kimi%E5%BB%BA%E8%AE%AE%E7%BD%91%E5%8F%8B%E5%85%88%E7%94%A8DeepSeek%23) `133.3K 🔥` `NEW`
1. [刘耀文后援会送票](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%90%8E%E6%8F%B4%E4%BC%9A%E9%80%81%E7%A5%A8%23) `111.2K 🔥` `NEW`
1. [爱泼斯坦被爆可能没死 (Epstein may not be dead after being exposed)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E8%A2%AB%E7%88%86%E5%8F%AF%E8%83%BD%E6%B2%A1%E6%AD%BB%23) `108.9K 🔥` `NEW`
1. [王楚然古装好美](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%8F%A4%E8%A3%85%E5%A5%BD%E7%BE%8E%23) `95.4K 🔥` `NEW`
1. [易烊千玺连续七年用领养之家台历](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E8%BF%9E%E7%BB%AD%E4%B8%83%E5%B9%B4%E7%94%A8%E9%A2%86%E5%85%BB%E4%B9%8B%E5%AE%B6%E5%8F%B0%E5%8E%86%23) `95.2K 🔥` `NEW`
1. [千家人AI购物实录](https://s.weibo.com/weibo?q=%23%E5%8D%83%E5%AE%B6%E4%BA%BAAI%E8%B4%AD%E7%89%A9%E5%AE%9E%E5%BD%95%23) `93.3K 🔥` `NEW`
1. [马来西亚7名警察勒索中国游客被捕](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A7%E5%90%8D%E8%AD%A6%E5%AF%9F%E5%8B%92%E7%B4%A2%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E8%A2%AB%E6%8D%95%23) `93.1K 🔥` `NEW`
1. [千问提醒免单卡除了奶茶还能买年货](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E6%8F%90%E9%86%92%E5%85%8D%E5%8D%95%E5%8D%A1%E9%99%A4%E4%BA%86%E5%A5%B6%E8%8C%B6%E8%BF%98%E8%83%BD%E4%B9%B0%E5%B9%B4%E8%B4%A7%23) `91.3K 🔥` `NEW`
1. [狼人杀抽象天花板](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E4%BA%BA%E6%9D%80%E6%8A%BD%E8%B1%A1%E5%A4%A9%E8%8A%B1%E6%9D%BF%23) `80.4K 🔥` `NEW`
1. [王鹤棣在嘴里炒了盘川菜](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%9C%A8%E5%98%B4%E9%87%8C%E7%82%92%E4%BA%86%E7%9B%98%E5%B7%9D%E8%8F%9C%23) `77.5K 🔥` `NEW`
1. [上班时间抽空过个年](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E6%97%B6%E9%97%B4%E6%8A%BD%E7%A9%BA%E8%BF%87%E4%B8%AA%E5%B9%B4%23) `76.6K 🔥` `NEW`
1. [沈腾范丞丞现场赛车解说](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%8E%B0%E5%9C%BA%E8%B5%9B%E8%BD%A6%E8%A7%A3%E8%AF%B4%23) `76.1K 🔥` `NEW`
1. [生命树 (tree of life)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%23) `75.6K 🔥` `NEW`
1. [网球](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%90%83%23) `74.5K 🔥` `NEW`
1. [谷爱凌决赛 (Gu Ailing finals)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%86%B3%E8%B5%9B%23) `2.4M 🔥` `+113%`
1. [李兰迪敖瑞鹏 马场婚礼](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%E6%95%96%E7%91%9E%E9%B9%8F%20%E9%A9%AC%E5%9C%BA%E5%A9%9A%E7%A4%BC%23) `326.3K 🔥` `+71%`
1. [台团体不敢用ChineseNewYear](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E5%9B%A2%E4%BD%93%E4%B8%8D%E6%95%A2%E7%94%A8ChineseNewYear%23) `303.1K 🔥` `+53%`
1. [女子自由式滑雪坡面障碍技巧决赛](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%87%AA%E7%94%B1%E5%BC%8F%E6%BB%91%E9%9B%AA%E5%9D%A1%E9%9D%A2%E9%9A%9C%E7%A2%8D%E6%8A%80%E5%B7%A7%E5%86%B3%E8%B5%9B%23) `221.6K 🔥` `+190%`
1. [外交部回应加拿大公民死刑判决被推翻](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%85%AC%E6%B0%91%E6%AD%BB%E5%88%91%E5%88%A4%E5%86%B3%E8%A2%AB%E6%8E%A8%E7%BF%BB%23) `219.8K 🔥` `+43%`
1. [张元英 镜头](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%20%E9%95%9C%E5%A4%B4%23) `189.3K 🔥` `+36%`
1. [35年前的工资单长这样](https://s.weibo.com/weibo?q=%2335%E5%B9%B4%E5%89%8D%E7%9A%84%E5%B7%A5%E8%B5%84%E5%8D%95%E9%95%BF%E8%BF%99%E6%A0%B7%23) `187.7K 🔥` `+23%`
1. [黄明昊 表哥表弟星途璀璨](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%98%8E%E6%98%8A%20%E8%A1%A8%E5%93%A5%E8%A1%A8%E5%BC%9F%E6%98%9F%E9%80%94%E7%92%80%E7%92%A8%23) `187.0K 🔥` `+42%`
1. [官方通报僧人欲跳江被劝止](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%83%A7%E4%BA%BA%E6%AC%B2%E8%B7%B3%E6%B1%9F%E8%A2%AB%E5%8A%9D%E6%AD%A2%23) `184.7K 🔥` `+21%`
1. [杨洋吸血鬼伯爵 (Count Yang Yang vampire)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%90%B8%E8%A1%80%E9%AC%BC%E4%BC%AF%E7%88%B5%23) `181.8K 🔥` `+43%`
1. [吴彤经历了一次病危](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BD%A4%E7%BB%8F%E5%8E%86%E4%BA%86%E4%B8%80%E6%AC%A1%E7%97%85%E5%8D%B1%23) `179.0K 🔥` `+46%`
1. [河南拆迁时发现乾隆年间雕花木梁](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%8B%86%E8%BF%81%E6%97%B6%E5%8F%91%E7%8E%B0%E4%B9%BE%E9%9A%86%E5%B9%B4%E9%97%B4%E9%9B%95%E8%8A%B1%E6%9C%A8%E6%A2%81%23) `177.8K 🔥` `+24%`
1. [为挣10万假离婚让丈夫跟他人结婚](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E6%8C%A310%E4%B8%87%E5%81%87%E7%A6%BB%E5%A9%9A%E8%AE%A9%E4%B8%88%E5%A4%AB%E8%B7%9F%E4%BB%96%E4%BA%BA%E7%BB%93%E5%A9%9A%23) `170.7K 🔥` `+27%`
1. [带年货乘火车实用指南 (A Practical Guide to Taking New Year’s Goods by Train)](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E5%B9%B4%E8%B4%A7%E4%B9%98%E7%81%AB%E8%BD%A6%E5%AE%9E%E7%94%A8%E6%8C%87%E5%8D%97%23) `766.7K 🔥`
1. [周一请假和周五请假的区别](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B8%80%E8%AF%B7%E5%81%87%E5%92%8C%E5%91%A8%E4%BA%94%E8%AF%B7%E5%81%87%E7%9A%84%E5%8C%BA%E5%88%AB%23) `189.3K 🔥`
1. [老人连续7年用冥币买遍半条街](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E8%BF%9E%E7%BB%AD7%E5%B9%B4%E7%94%A8%E5%86%A5%E5%B8%81%E4%B9%B0%E9%81%8D%E5%8D%8A%E6%9D%A1%E8%A1%97%23) `181.3K 🔥`
1. [买139999元黄金手机壳送iPhone (Buy a gold phone case for 139,999 yuan and get an iPhone for free)](https://s.weibo.com/weibo?q=%23%E4%B9%B0139999%E5%85%83%E9%BB%84%E9%87%91%E6%89%8B%E6%9C%BA%E5%A3%B3%E9%80%81iPhone%23) `151.0K 🔥`
1. [时代峰峻只包1场](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%8F%AA%E5%8C%851%E5%9C%BA%23) `126.3K 🔥`
1. [这个加码方式太香了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E5%8A%A0%E7%A0%81%E6%96%B9%E5%BC%8F%E5%A4%AA%E9%A6%99%E4%BA%86%23) `114.1K 🔥`
1. [瑶一瑶小肉包1分钟视频报价45万 (Yao Yiyao's 1-minute video of small meat buns is priced at 450,000)](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E5%B0%8F%E8%82%89%E5%8C%851%E5%88%86%E9%92%9F%E8%A7%86%E9%A2%91%E6%8A%A5%E4%BB%B745%E4%B8%87%23) `113.5K 🔥`
1. [难以想象苏有朋比他们大了20岁](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E4%BB%A5%E6%83%B3%E8%B1%A1%E8%8B%8F%E6%9C%89%E6%9C%8B%E6%AF%94%E4%BB%96%E4%BB%AC%E5%A4%A7%E4%BA%8620%E5%B2%81%23) `97.3K 🔥`
1. [迪丽热巴2025年热搜上榜1174次](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B42025%E5%B9%B4%E7%83%AD%E6%90%9C%E4%B8%8A%E6%A6%9C1174%E6%AC%A1%23) `77.9K 🔥`
1. [专家建议所有旅客直接上12306买票 (Experts recommend that all passengers buy tickets directly at 12306)](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%BB%BA%E8%AE%AE%E6%89%80%E6%9C%89%E6%97%85%E5%AE%A2%E7%9B%B4%E6%8E%A5%E4%B8%8A12306%E4%B9%B0%E7%A5%A8%23) `189.5K 🔥` `-77%`
1. [seedance 2.0](https://s.weibo.com/weibo?q=%23seedance%202.0%23) `133.9K 🔥` `-37%`
1. [中方回应高市赢得选举](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E9%AB%98%E5%B8%82%E8%B5%A2%E5%BE%97%E9%80%89%E4%B8%BE%23) `129.2K 🔥` `-38%`
1. [大连地震 (Dalian earthquake)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%BF%9E%E5%9C%B0%E9%9C%87%23) `117.2K 🔥` `-24%`
1. [爱泼斯坦曾订购大量硫酸](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%9B%BE%E8%AE%A2%E8%B4%AD%E5%A4%A7%E9%87%8F%E7%A1%AB%E9%85%B8%23) `107.1K 🔥` `-24%`
1. [河南一摊贩当街摔死多只兔子 (A street vendor in Henan killed several rabbits on the street)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%80%E6%91%8A%E8%B4%A9%E5%BD%93%E8%A1%97%E6%91%94%E6%AD%BB%E5%A4%9A%E5%8F%AA%E5%85%94%E5%AD%90%23) `106.9K 🔥` `-29%`
1. [权珉娥医美后毁容](https://s.weibo.com/weibo?q=%23%E6%9D%83%E7%8F%89%E5%A8%A5%E5%8C%BB%E7%BE%8E%E5%90%8E%E6%AF%81%E5%AE%B9%23) `91.2K 🔥` `-21%`
1. [拼多多上体面又好吃的坚果礼盒](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E4%B8%8A%E4%BD%93%E9%9D%A2%E5%8F%88%E5%A5%BD%E5%90%83%E7%9A%84%E5%9D%9A%E6%9E%9C%E7%A4%BC%E7%9B%92%23) `74.4K 🔥` `-51%`

Updated at 2026-02-09 20:06:54

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
