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

1. [中国邮政回应已叫停相关线下活动 (China Post responded that it has suspended relevant offline activities.)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%82%AE%E6%94%BF%E5%9B%9E%E5%BA%94%E5%B7%B2%E5%8F%AB%E5%81%9C%E7%9B%B8%E5%85%B3%E7%BA%BF%E4%B8%8B%E6%B4%BB%E5%8A%A8%23) `404.5K 🔥` `NEW`
1. [镖人 一代大蠕](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%20%E4%B8%80%E4%BB%A3%E5%A4%A7%E8%A0%95%23) `272.1K 🔥` `NEW`
1. [中国男篮vs日本男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E6%97%A5%E6%9C%AC%E7%94%B7%E7%AF%AE%23) `243.0K 🔥` `NEW`
1. [伊朗](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%23) `234.1K 🔥` `NEW`
1. [发1.8亿年终奖公司开工3天爆单](https://s.weibo.com/weibo?q=%23%E5%8F%911.8%E4%BA%BF%E5%B9%B4%E7%BB%88%E5%A5%96%E5%85%AC%E5%8F%B8%E5%BC%80%E5%B7%A53%E5%A4%A9%E7%88%86%E5%8D%95%23) `211.4K 🔥` `NEW`
1. [等Gucci大秀一场](https://s.weibo.com/weibo?q=%23%E7%AD%89Gucci%E5%A4%A7%E7%A7%80%E4%B8%80%E5%9C%BA%23) `191.9K 🔥` `NEW`
1. [日本把宇树机器人改成僧侣](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8A%8A%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%94%B9%E6%88%90%E5%83%A7%E4%BE%A3%23) `190.8K 🔥` `NEW`
1. [一点点资助男孩公益活动引争议](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%82%B9%E7%82%B9%E8%B5%84%E5%8A%A9%E7%94%B7%E5%AD%A9%E5%85%AC%E7%9B%8A%E6%B4%BB%E5%8A%A8%E5%BC%95%E4%BA%89%E8%AE%AE%23) `172.9K 🔥` `NEW`
1. [30岁女子眼皮耷拉确诊罕见病](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%A5%B3%E5%AD%90%E7%9C%BC%E7%9A%AE%E8%80%B7%E6%8B%89%E7%A1%AE%E8%AF%8A%E7%BD%95%E8%A7%81%E7%97%85%23) `156.5K 🔥` `NEW`
1. [Prada外网只认领了柳智敏](https://s.weibo.com/weibo?q=%23Prada%E5%A4%96%E7%BD%91%E5%8F%AA%E8%AE%A4%E9%A2%86%E4%BA%86%E6%9F%B3%E6%99%BA%E6%95%8F%23) `155.9K 🔥` `NEW`
1. [迪丽热巴已成立个人独资工作室 (Dilireba has established a sole proprietorship studio)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B7%B2%E6%88%90%E7%AB%8B%E4%B8%AA%E4%BA%BA%E7%8B%AC%E8%B5%84%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `154.6K 🔥` `NEW`
1. [女教师因调皮男生怕开学暴瘦10多斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E5%9B%A0%E8%B0%83%E7%9A%AE%E7%94%B7%E7%94%9F%E6%80%95%E5%BC%80%E5%AD%A6%E6%9A%B4%E7%98%A610%E5%A4%9A%E6%96%A4%23) `137.7K 🔥` `NEW`
1. [郑业成新剧只能看见赵晴](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%9A%E6%88%90%E6%96%B0%E5%89%A7%E5%8F%AA%E8%83%BD%E7%9C%8B%E8%A7%81%E8%B5%B5%E6%99%B4%23) `133.8K 🔥` `NEW`
1. [儿媳继承446万拆迁款后拒养公爹](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AA%B3%E7%BB%A7%E6%89%BF446%E4%B8%87%E6%8B%86%E8%BF%81%E6%AC%BE%E5%90%8E%E6%8B%92%E5%85%BB%E5%85%AC%E7%88%B9%23) `131.3K 🔥` `NEW`
1. [时代少年团非去不可宣传片](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E9%9D%9E%E5%8E%BB%E4%B8%8D%E5%8F%AF%E5%AE%A3%E4%BC%A0%E7%89%87%23) `130.1K 🔥` `NEW`
1. [女孩给妈妈买金手链反被指责爆哭](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%BB%99%E5%A6%88%E5%A6%88%E4%B9%B0%E9%87%91%E6%89%8B%E9%93%BE%E5%8F%8D%E8%A2%AB%E6%8C%87%E8%B4%A3%E7%88%86%E5%93%AD%23) `126.5K 🔥` `NEW`
1. [薛之谦推荐买便宜的价位](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%8E%A8%E8%8D%90%E4%B9%B0%E4%BE%BF%E5%AE%9C%E7%9A%84%E4%BB%B7%E4%BD%8D%23) `126.1K 🔥` `NEW`
1. [聂玮辰 时代峰峻最夸张的老钱](https://s.weibo.com/weibo?q=%23%E8%81%82%E7%8E%AE%E8%BE%B0%20%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%9C%80%E5%A4%B8%E5%BC%A0%E7%9A%84%E8%80%81%E9%92%B1%23) `119.9K 🔥` `NEW`
1. [黄子韬五年之约到了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E4%BA%94%E5%B9%B4%E4%B9%8B%E7%BA%A6%E5%88%B0%E4%BA%86%23) `119.9K 🔥` `NEW`
1. [德国总理看机器人格斗满脸惊讶](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E6%80%BB%E7%90%86%E7%9C%8B%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%A0%BC%E6%96%97%E6%BB%A1%E8%84%B8%E6%83%8A%E8%AE%B6%23) `116.4K 🔥` `NEW`
1. [霍金遗属发声 (Hawking's family speaks out)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E9%87%91%E9%81%97%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `103.4K 🔥` `NEW`
1. [德国工业界半壁江山来杭州了](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E5%B7%A5%E4%B8%9A%E7%95%8C%E5%8D%8A%E5%A3%81%E6%B1%9F%E5%B1%B1%E6%9D%A5%E6%9D%AD%E5%B7%9E%E4%BA%86%23) `98.4K 🔥` `NEW`
1. [日本网民称日本确实存在撞人族](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E6%B0%91%E7%A7%B0%E6%97%A5%E6%9C%AC%E7%A1%AE%E5%AE%9E%E5%AD%98%E5%9C%A8%E6%92%9E%E4%BA%BA%E6%97%8F%23) `837.7K 🔥` `+95%`
1. [爱泼斯坦私密储物柜曝光](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E7%A7%81%E5%AF%86%E5%82%A8%E7%89%A9%E6%9F%9C%E6%9B%9D%E5%85%89%23) `230.9K 🔥` `+61%`
1. [JDG对战AL](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98AL%23) `140.0K 🔥` `+54%`
1. [手机 涨价](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%20%E6%B6%A8%E4%BB%B7%23) `1.2M 🔥`
1. [银发经济市场规模有望达30万亿元 (The size of the silver economy market is expected to reach 30 trillion yuan)](https://s.weibo.com/weibo?q=%23%E9%93%B6%E5%8F%91%E7%BB%8F%E6%B5%8E%E5%B8%82%E5%9C%BA%E8%A7%84%E6%A8%A1%E6%9C%89%E6%9C%9B%E8%BE%BE30%E4%B8%87%E4%BA%BF%E5%85%83%23) `653.9K 🔥`
1. [杨紫允许自己绕个弯](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%85%81%E8%AE%B8%E8%87%AA%E5%B7%B1%E7%BB%95%E4%B8%AA%E5%BC%AF%23) `278.6K 🔥`
1. [欠款1000万亿当事人这次真要逾期了 (The party who owes 1000 trillion yuan is really going to be overdue this time)](https://s.weibo.com/weibo?q=%23%E6%AC%A0%E6%AC%BE1000%E4%B8%87%E4%BA%BF%E5%BD%93%E4%BA%8B%E4%BA%BA%E8%BF%99%E6%AC%A1%E7%9C%9F%E8%A6%81%E9%80%BE%E6%9C%9F%E4%BA%86%23) `278.6K 🔥`
1. [全球首部防窥屏手机](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%A6%96%E9%83%A8%E9%98%B2%E7%AA%A5%E5%B1%8F%E6%89%8B%E6%9C%BA%23) `190.8K 🔥`
1. [坐顺风车排泄后失联男子被封号](https://s.weibo.com/weibo?q=%23%E5%9D%90%E9%A1%BA%E9%A3%8E%E8%BD%A6%E6%8E%92%E6%B3%84%E5%90%8E%E5%A4%B1%E8%81%94%E7%94%B7%E5%AD%90%E8%A2%AB%E5%B0%81%E5%8F%B7%23) `163.0K 🔥`
1. [Uzi说Light太任性了](https://s.weibo.com/weibo?q=%23Uzi%E8%AF%B4Light%E5%A4%AA%E4%BB%BB%E6%80%A7%E4%BA%86%23) `152.3K 🔥`
1. [刘亦菲最接近本人的一张图 (Liu Yifei’s closest picture to herself)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%9C%80%E6%8E%A5%E8%BF%91%E6%9C%AC%E4%BA%BA%E7%9A%84%E4%B8%80%E5%BC%A0%E5%9B%BE%23) `150.8K 🔥`
1. [向佑不满遗产分配直喊不公平](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%91%E4%B8%8D%E6%BB%A1%E9%81%97%E4%BA%A7%E5%88%86%E9%85%8D%E7%9B%B4%E5%96%8A%E4%B8%8D%E5%85%AC%E5%B9%B3%23) `146.6K 🔥`
1. [曝迪丽热巴与嘉行合约到期 (It is revealed that Dilireba’s contract with Jiaxing has expired)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B8%8E%E5%98%89%E8%A1%8C%E5%90%88%E7%BA%A6%E5%88%B0%E6%9C%9F%23) `139.6K 🔥`
1. [郭富城三岁的时候岳父出生了](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E4%B8%89%E5%B2%81%E7%9A%84%E6%97%B6%E5%80%99%E5%B2%B3%E7%88%B6%E5%87%BA%E7%94%9F%E4%BA%86%23) `139.5K 🔥`
1. [小S曾说田馥甄周杰伦不可能在一起](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E6%9B%BE%E8%AF%B4%E7%94%B0%E9%A6%A5%E7%94%84%E5%91%A8%E6%9D%B0%E4%BC%A6%E4%B8%8D%E5%8F%AF%E8%83%BD%E5%9C%A8%E4%B8%80%E8%B5%B7%23) `135.9K 🔥`
1. [杨幂米兰allblack看秀](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%B1%B3%E5%85%B0allblack%E7%9C%8B%E7%A7%80%23) `128.4K 🔥`
1. [美伊冲突](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%86%B2%E7%AA%81%23) `120.2K 🔥`
1. [疱疹病毒一旦感染会终身复发](https://s.weibo.com/weibo?q=%23%E7%96%B1%E7%96%B9%E7%97%85%E6%AF%92%E4%B8%80%E6%97%A6%E6%84%9F%E6%9F%93%E4%BC%9A%E7%BB%88%E8%BA%AB%E5%A4%8D%E5%8F%91%23) `106.5K 🔥`
1. [杨洋对接回应复工](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%AF%B9%E6%8E%A5%E5%9B%9E%E5%BA%94%E5%A4%8D%E5%B7%A5%23) `101.6K 🔥`
1. [周杰伦结婚田馥甄有了讽刺的情书](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%BB%93%E5%A9%9A%E7%94%B0%E9%A6%A5%E7%94%84%E6%9C%89%E4%BA%86%E8%AE%BD%E5%88%BA%E7%9A%84%E6%83%85%E4%B9%A6%23) `99.0K 🔥`
1. [一点点资助男孩被曝戴千元手表 (Little by little boy was exposed wearing a thousand-yuan watch)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%82%B9%E7%82%B9%E8%B5%84%E5%8A%A9%E7%94%B7%E5%AD%A9%E8%A2%AB%E6%9B%9D%E6%88%B4%E5%8D%83%E5%85%83%E6%89%8B%E8%A1%A8%23) `318.4K 🔥` `-63%`
1. [薛之谦开票](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%BC%80%E7%A5%A8%23) `280.6K 🔥` `-54%`
1. [160万江景房被父母堆成废品站 (The 1.6 million river view house was piled into a scrapyard by parents)](https://s.weibo.com/weibo?q=%23160%E4%B8%87%E6%B1%9F%E6%99%AF%E6%88%BF%E8%A2%AB%E7%88%B6%E6%AF%8D%E5%A0%86%E6%88%90%E5%BA%9F%E5%93%81%E7%AB%99%23) `265.1K 🔥` `-32%`
1. [林俊杰作曲方文山作词](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E4%BD%9C%E6%9B%B2%E6%96%B9%E6%96%87%E5%B1%B1%E4%BD%9C%E8%AF%8D%23) `197.9K 🔥` `-31%`
1. [千元lululemon外套仅穿一次就起球](https://s.weibo.com/weibo?q=%23%E5%8D%83%E5%85%83lululemon%E5%A4%96%E5%A5%97%E4%BB%85%E7%A9%BF%E4%B8%80%E6%AC%A1%E5%B0%B1%E8%B5%B7%E7%90%83%23) `119.9K 🔥` `-60%`
1. [微信能看图片使用次数了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%83%BD%E7%9C%8B%E5%9B%BE%E7%89%87%E4%BD%BF%E7%94%A8%E6%AC%A1%E6%95%B0%E4%BA%86%23) `115.5K 🔥` `-41%`
1. [逐玉请来了林俊杰唱OST (Zhuyu invited Lin JJ to sing the OST)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E8%AF%B7%E6%9D%A5%E4%BA%86%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%94%B1OST%23) `108.4K 🔥` `-21%`
1. [小猫守家26天在主人床上拉满便便](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%AE%88%E5%AE%B626%E5%A4%A9%E5%9C%A8%E4%B8%BB%E4%BA%BA%E5%BA%8A%E4%B8%8A%E6%8B%89%E6%BB%A1%E4%BE%BF%E4%BE%BF%23) `100.6K 🔥` `-42%`

Updated at 2026-02-26 19:02:42

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
