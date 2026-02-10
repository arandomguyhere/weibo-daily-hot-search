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

1. [王濛快哭了 (Wang Meng is about to cry)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%BF%AB%E5%93%AD%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [小尼谢娜主持首档宝宝春晚](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B0%BC%E8%B0%A2%E5%A8%9C%E4%B8%BB%E6%8C%81%E9%A6%96%E6%A1%A3%E5%AE%9D%E5%AE%9D%E6%98%A5%E6%99%9A%23) `517.9K 🔥` `NEW`
1. [春节返乡要稳不要快](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E8%BF%94%E4%B9%A1%E8%A6%81%E7%A8%B3%E4%B8%8D%E8%A6%81%E5%BF%AB%23) `238.5K 🔥` `NEW`
1. [生命树最讽刺的一幕](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E6%9C%80%E8%AE%BD%E5%88%BA%E7%9A%84%E4%B8%80%E5%B9%95%23) `235.7K 🔥` `NEW`
1. [刘少昂回应混接无缘奖牌](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E5%9B%9E%E5%BA%94%E6%B7%B7%E6%8E%A5%E6%97%A0%E7%BC%98%E5%A5%96%E7%89%8C%23) `192.7K 🔥` `NEW`
1. [印度大一男生求婚遭拒将女生枪杀](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A4%A7%E4%B8%80%E7%94%B7%E7%94%9F%E6%B1%82%E5%A9%9A%E9%81%AD%E6%8B%92%E5%B0%86%E5%A5%B3%E7%94%9F%E6%9E%AA%E6%9D%80%23) `180.1K 🔥` `NEW`
1. [射雕英雄传侠之大者金像奖0提](https://s.weibo.com/weibo?q=%23%E5%B0%84%E9%9B%95%E8%8B%B1%E9%9B%84%E4%BC%A0%E4%BE%A0%E4%B9%8B%E5%A4%A7%E8%80%85%E9%87%91%E5%83%8F%E5%A5%960%E6%8F%90%23) `177.4K 🔥` `NEW`
1. [堂姐介绍已婚男致女子遇害事后失联](https://s.weibo.com/weibo?q=%23%E5%A0%82%E5%A7%90%E4%BB%8B%E7%BB%8D%E5%B7%B2%E5%A9%9A%E7%94%B7%E8%87%B4%E5%A5%B3%E5%AD%90%E9%81%87%E5%AE%B3%E4%BA%8B%E5%90%8E%E5%A4%B1%E8%81%94%23) `177.2K 🔥` `NEW`
1. [武大靖说失误确实不应该](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E9%9D%96%E8%AF%B4%E5%A4%B1%E8%AF%AF%E7%A1%AE%E5%AE%9E%E4%B8%8D%E5%BA%94%E8%AF%A5%23) `176.4K 🔥` `NEW`
1. [日本彻底失控](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BD%BB%E5%BA%95%E5%A4%B1%E6%8E%A7%23) `175.5K 🔥` `NEW`
1. [博主保罗在美国回应妻子状态 (Blogger Paul responded to his wife’s status in the United States)](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E4%BF%9D%E7%BD%97%E5%9C%A8%E7%BE%8E%E5%9B%BD%E5%9B%9E%E5%BA%94%E5%A6%BB%E5%AD%90%E7%8A%B6%E6%80%81%23) `163.9K 🔥` `NEW`
1. [李兰迪生图好美](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%E7%94%9F%E5%9B%BE%E5%A5%BD%E7%BE%8E%23) `135.7K 🔥` `NEW`
1. [孙杨开口以为泳池来水了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BC%80%E5%8F%A3%E4%BB%A5%E4%B8%BA%E6%B3%B3%E6%B1%A0%E6%9D%A5%E6%B0%B4%E4%BA%86%23) `131.6K 🔥` `NEW`
1. [雷军确认第一代SU7停产](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A1%AE%E8%AE%A4%E7%AC%AC%E4%B8%80%E4%BB%A3SU7%E5%81%9C%E4%BA%A7%23) `129.9K 🔥` `NEW`
1. [零下20度逛吃东北早市](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E4%B8%8B20%E5%BA%A6%E9%80%9B%E5%90%83%E4%B8%9C%E5%8C%97%E6%97%A9%E5%B8%82%23) `117.0K 🔥` `NEW`
1. [教师回应被举报强奸学生拐走孩子](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E5%9B%9E%E5%BA%94%E8%A2%AB%E4%B8%BE%E6%8A%A5%E5%BC%BA%E5%A5%B8%E5%AD%A6%E7%94%9F%E6%8B%90%E8%B5%B0%E5%AD%A9%E5%AD%90%23) `113.7K 🔥` `NEW`
1. [遭前男友杀害女护士生前日记本曝光](https://s.weibo.com/weibo?q=%23%E9%81%AD%E5%89%8D%E7%94%B7%E5%8F%8B%E6%9D%80%E5%AE%B3%E5%A5%B3%E6%8A%A4%E5%A3%AB%E7%94%9F%E5%89%8D%E6%97%A5%E8%AE%B0%E6%9C%AC%E6%9B%9D%E5%85%89%23) `112.9K 🔥` `NEW`
1. [短道队多人为孙龙发声](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%98%9F%E5%A4%9A%E4%BA%BA%E4%B8%BA%E5%AD%99%E9%BE%99%E5%8F%91%E5%A3%B0%23) `111.6K 🔥` `NEW`
1. [海外已夸爆Seedance2.0](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%A4%96%E5%B7%B2%E5%A4%B8%E7%88%86Seedance2.0%23) `91.9K 🔥` `NEW`
1. [德云社封箱](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E4%BA%91%E7%A4%BE%E5%B0%81%E7%AE%B1%23) `91.2K 🔥` `NEW`
1. [公俐哭了 (Gong Li cried)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E4%BF%90%E5%93%AD%E4%BA%86%23) `84.8K 🔥` `NEW`
1. [伊朗感谢中方主持公道](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%84%9F%E8%B0%A2%E4%B8%AD%E6%96%B9%E4%B8%BB%E6%8C%81%E5%85%AC%E9%81%93%23) `78.8K 🔥` `NEW`
1. [Peanut和Ruler韩服撞车](https://s.weibo.com/weibo?q=%23Peanut%E5%92%8CRuler%E9%9F%A9%E6%9C%8D%E6%92%9E%E8%BD%A6%23) `72.6K 🔥` `NEW`
1. [谢腾飞长这么大了](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%85%BE%E9%A3%9E%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `71.4K 🔥` `NEW`
1. [生命树](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%23) `288.5K 🔥` `+24%`
1. [12306回应高铁座椅钻出活蜥蜴 (12306 responded to a live lizard emerging from a high-speed rail seat)](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E9%AB%98%E9%93%81%E5%BA%A7%E6%A4%85%E9%92%BB%E5%87%BA%E6%B4%BB%E8%9C%A5%E8%9C%B4%23) `239.8K 🔥` `+62%`
1. [关系再好也不要说的事 (Things you shouldn’t say no matter how good your relationship is)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E7%B3%BB%E5%86%8D%E5%A5%BD%E4%B9%9F%E4%B8%8D%E8%A6%81%E8%AF%B4%E7%9A%84%E4%BA%8B%23) `211.5K 🔥` `+41%`
1. [深圳一公司发巨额年终奖](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E5%85%AC%E5%8F%B8%E5%8F%91%E5%B7%A8%E9%A2%9D%E5%B9%B4%E7%BB%88%E5%A5%96%23) `180.7K 🔥` `+30%`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `164.6K 🔥` `+34%`
1. [特朗普表面祝贺高市私下大发雷霆](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%A1%A8%E9%9D%A2%E7%A5%9D%E8%B4%BA%E9%AB%98%E5%B8%82%E7%A7%81%E4%B8%8B%E5%A4%A7%E5%8F%91%E9%9B%B7%E9%9C%86%23) `158.3K 🔥` `+46%`
1. [中国无人机大山里运腊肠](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%A4%A7%E5%B1%B1%E9%87%8C%E8%BF%90%E8%85%8A%E8%82%A0%23) `653.0K 🔥`
1. [陈星旭 情商 (Chen Xingxu Emotional Intelligence)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%20%E6%83%85%E5%95%86%23) `180.5K 🔥`
1. [井柏然刘雯机场十指紧扣](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%98%E9%9B%AF%E6%9C%BA%E5%9C%BA%E5%8D%81%E6%8C%87%E7%B4%A7%E6%89%A3%23) `179.2K 🔥`
1. [哇唧唧哇年会 (Wow wow wow annual meeting)](https://s.weibo.com/weibo?q=%23%E5%93%87%E5%94%A7%E5%94%A7%E5%93%87%E5%B9%B4%E4%BC%9A%23) `179.1K 🔥`
1. [王曼昱决胜局擦边球尊重裁判](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%86%B3%E8%83%9C%E5%B1%80%E6%93%A6%E8%BE%B9%E7%90%83%E5%B0%8A%E9%87%8D%E8%A3%81%E5%88%A4%23) `178.6K 🔥`
1. [杨洋换风格了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%8D%A2%E9%A3%8E%E6%A0%BC%E4%BA%86%23) `176.4K 🔥`
1. [我们的少年时代2 双男主](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%20%E5%8F%8C%E7%94%B7%E4%B8%BB%23) `175.2K 🔥`
1. [于正回应明星扎堆前往大孤山](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E6%98%8E%E6%98%9F%E6%89%8E%E5%A0%86%E5%89%8D%E5%BE%80%E5%A4%A7%E5%AD%A4%E5%B1%B1%23) `147.9K 🔥`
1. [洪世贤掉到榜二了](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E4%B8%96%E8%B4%A4%E6%8E%89%E5%88%B0%E6%A6%9C%E4%BA%8C%E4%BA%86%23) `139.7K 🔥`
1. [74岁肥猫被医生建议注射药物镇痛](https://s.weibo.com/weibo?q=%2374%E5%B2%81%E8%82%A5%E7%8C%AB%E8%A2%AB%E5%8C%BB%E7%94%9F%E5%BB%BA%E8%AE%AE%E6%B3%A8%E5%B0%84%E8%8D%AF%E7%89%A9%E9%95%87%E7%97%9B%23) `113.1K 🔥`
1. [孙龙失误 (Sun Long made a mistake)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E5%A4%B1%E8%AF%AF%23) `810.5K 🔥` `-52%`
1. [林孝埈捂脸长时间低头](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E6%8D%82%E8%84%B8%E9%95%BF%E6%97%B6%E9%97%B4%E4%BD%8E%E5%A4%B4%23) `512.3K 🔥` `-43%`
1. [中国短道混接无缘奖牌 (China's short track hybrid misses medals)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9F%AD%E9%81%93%E6%B7%B7%E6%8E%A5%E6%97%A0%E7%BC%98%E5%A5%96%E7%89%8C%23) `138.7K 🔥` `-63%`
1. [曲春雨退役](https://s.weibo.com/weibo?q=%23%E6%9B%B2%E6%98%A5%E9%9B%A8%E9%80%80%E5%BD%B9%23) `125.9K 🔥` `-61%`
1. [小年](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B9%B4%23) `105.3K 🔥` `-29%`
1. [白鹿孟子义一起去了大孤山 (Bailu and Meng Ziyi went to Dagushan together)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%80%E8%B5%B7%E5%8E%BB%E4%BA%86%E5%A4%A7%E5%AD%A4%E5%B1%B1%23) `93.9K 🔥` `-30%`
1. [郑则仕因不想终生注射药物开始跑步 (Zheng Zeshi started running because he didn’t want to inject drugs for life)](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%88%99%E4%BB%95%E5%9B%A0%E4%B8%8D%E6%83%B3%E7%BB%88%E7%94%9F%E6%B3%A8%E5%B0%84%E8%8D%AF%E7%89%A9%E5%BC%80%E5%A7%8B%E8%B7%91%E6%AD%A5%23) `93.7K 🔥` `-26%`
1. [爱泼斯坦别墅内老虎标本栩栩如生](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E5%88%AB%E5%A2%85%E5%86%85%E8%80%81%E8%99%8E%E6%A0%87%E6%9C%AC%E6%A0%A9%E6%A0%A9%E5%A6%82%E7%94%9F%23) `90.0K 🔥` `-28%`
1. [薛之谦万兽之王演唱会官宣](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%B8%87%E5%85%BD%E4%B9%8B%E7%8E%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `77.1K 🔥` `-39%`
1. [白敬亭真的拿出手机调静音了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E7%9C%9F%E7%9A%84%E6%8B%BF%E5%87%BA%E6%89%8B%E6%9C%BA%E8%B0%83%E9%9D%99%E9%9F%B3%E4%BA%86%23) `75.4K 🔥` `-47%`

Updated at 2026-02-10 23:19:29

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
