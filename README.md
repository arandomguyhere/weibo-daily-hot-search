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

1. [张家齐的奖金呢](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%9A%84%E5%A5%96%E9%87%91%E5%91%A2%23) `1.4M 🔥` `NEW`
1. [月饼 卖不动](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%A5%BC%20%E5%8D%96%E4%B8%8D%E5%8A%A8%23) `1.4M 🔥` `NEW`
1. [这一嗓子漫瀚调唱出了团结](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E5%97%93%E5%AD%90%E6%BC%AB%E7%80%9A%E8%B0%83%E5%94%B1%E5%87%BA%E4%BA%86%E5%9B%A2%E7%BB%93%23) `916.9K 🔥` `NEW`
1. [张家齐今年上节目的生活质量明显下降](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E4%BB%8A%E5%B9%B4%E4%B8%8A%E8%8A%82%E7%9B%AE%E7%9A%84%E7%94%9F%E6%B4%BB%E8%B4%A8%E9%87%8F%E6%98%8E%E6%98%BE%E4%B8%8B%E9%99%8D%23) `822.8K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `638.3K 🔥` `NEW`
1. [美团 按摩](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%20%E6%8C%89%E6%91%A9%23) `624.6K 🔥` `NEW`
1. [全新QQ3摩登版让快乐更有型](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0QQ3%E6%91%A9%E7%99%BB%E7%89%88%E8%AE%A9%E5%BF%AB%E4%B9%90%E6%9B%B4%E6%9C%89%E5%9E%8B%23) `620.2K 🔥` `NEW`
1. [张家齐职业生涯收入盘点](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%81%8C%E4%B8%9A%E7%94%9F%E6%B6%AF%E6%94%B6%E5%85%A5%E7%9B%98%E7%82%B9%23) `600.0K 🔥` `NEW`
1. [小众但很省钱的旅游方式](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%97%E4%BD%86%E5%BE%88%E7%9C%81%E9%92%B1%E7%9A%84%E6%97%85%E6%B8%B8%E6%96%B9%E5%BC%8F%23) `559.1K 🔥` `NEW`
1. [怪不得我们都喜欢睡觉盖被子](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E6%88%91%E4%BB%AC%E9%83%BD%E5%96%9C%E6%AC%A2%E7%9D%A1%E8%A7%89%E7%9B%96%E8%A2%AB%E5%AD%90%23) `551.7K 🔥` `NEW`
1. [华为中国民企500强排名第4](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B8%AD%E5%9B%BD%E6%B0%91%E4%BC%81500%E5%BC%BA%E6%8E%92%E5%90%8D%E7%AC%AC4%23) `507.8K 🔥` `NEW`
1. [张家齐的存款大概率被爸妈花完了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%9A%84%E5%AD%98%E6%AC%BE%E5%A4%A7%E6%A6%82%E7%8E%87%E8%A2%AB%E7%88%B8%E5%A6%88%E8%8A%B1%E5%AE%8C%E4%BA%86%23) `500.7K 🔥` `NEW`
1. [王玉雯 杨玏](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%20%E6%9D%A8%E7%8E%8F%23) `496.9K 🔥` `NEW`
1. [张家齐疑似住串串房](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%96%91%E4%BC%BC%E4%BD%8F%E4%B8%B2%E4%B8%B2%E6%88%BF%23) `491.7K 🔥` `NEW`
1. [不打折的山姆月饼反而卖爆了](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%89%93%E6%8A%98%E7%9A%84%E5%B1%B1%E5%A7%86%E6%9C%88%E9%A5%BC%E5%8F%8D%E8%80%8C%E5%8D%96%E7%88%86%E4%BA%86%23) `483.1K 🔥` `NEW`
1. [盛夏晴朗原班人马](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E5%A4%8F%E6%99%B4%E6%9C%97%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%23) `400.6K 🔥` `NEW`
1. [雷军现在只能偷偷吃早餐](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%8E%B0%E5%9C%A8%E5%8F%AA%E8%83%BD%E5%81%B7%E5%81%B7%E5%90%83%E6%97%A9%E9%A4%90%23) `353.8K 🔥` `NEW`
1. [校方称逃避军训男生正在办理退学](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E6%96%B9%E7%A7%B0%E9%80%83%E9%81%BF%E5%86%9B%E8%AE%AD%E7%94%B7%E7%94%9F%E6%AD%A3%E5%9C%A8%E5%8A%9E%E7%90%86%E9%80%80%E5%AD%A6%23) `331.9K 🔥` `NEW`
1. [朴信惠二胎产女](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E4%BF%A1%E6%83%A0%E4%BA%8C%E8%83%8E%E4%BA%A7%E5%A5%B3%23) `319.0K 🔥` `NEW`
1. [易烊千玺审美天才设计天才创意天才](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%AE%A1%E7%BE%8E%E5%A4%A9%E6%89%8D%E8%AE%BE%E8%AE%A1%E5%A4%A9%E6%89%8D%E5%88%9B%E6%84%8F%E5%A4%A9%E6%89%8D%23) `308.2K 🔥` `NEW`
1. [超格向粉笔致歉](https://s.weibo.com/weibo?q=%23%E8%B6%85%E6%A0%BC%E5%90%91%E7%B2%89%E7%AC%94%E8%87%B4%E6%AD%89%23) `299.5K 🔥` `NEW`
1. [曝王玉雯杨玏曾结婚又离婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%9D%A8%E7%8E%8F%E6%9B%BE%E7%BB%93%E5%A9%9A%E5%8F%88%E7%A6%BB%E5%A9%9A%23) `292.7K 🔥` `NEW`
1. [疑似李乃文一家三口同框](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%9D%8E%E4%B9%83%E6%96%87%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%90%8C%E6%A1%86%23) `291.2K 🔥` `NEW`
1. [停车费一年近万不肯骑电驴](https://s.weibo.com/weibo?q=%23%E5%81%9C%E8%BD%A6%E8%B4%B9%E4%B8%80%E5%B9%B4%E8%BF%91%E4%B8%87%E4%B8%8D%E8%82%AF%E9%AA%91%E7%94%B5%E9%A9%B4%23) `290.6K 🔥` `NEW`
1. [谢金燕51岁身材](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%87%91%E7%87%9551%E5%B2%81%E8%BA%AB%E6%9D%90%23) `283.3K 🔥` `NEW`
1. [边牧暗示金毛帮忙吃剩菜笑翻](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E7%89%A7%E6%9A%97%E7%A4%BA%E9%87%91%E6%AF%9B%E5%B8%AE%E5%BF%99%E5%90%83%E5%89%A9%E8%8F%9C%E7%AC%91%E7%BF%BB%23) `282.4K 🔥` `NEW`
1. [逃避军训男生道歉](https://s.weibo.com/weibo?q=%23%E9%80%83%E9%81%BF%E5%86%9B%E8%AE%AD%E7%94%B7%E7%94%9F%E9%81%93%E6%AD%89%23) `279.2K 🔥` `NEW`
1. [过度依赖AI的后果有多严重](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E4%BE%9D%E8%B5%96AI%E7%9A%84%E5%90%8E%E6%9E%9C%E6%9C%89%E5%A4%9A%E4%B8%A5%E9%87%8D%23) `265.6K 🔥` `NEW`
1. [迪丽热巴模仿第一次试镜场景](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%A8%A1%E4%BB%BF%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%AF%95%E9%95%9C%E5%9C%BA%E6%99%AF%23) `257.2K 🔥` `NEW`
1. [张博恒这枚金牌让日本媒体沉默了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%8D%9A%E6%81%92%E8%BF%99%E6%9E%9A%E9%87%91%E7%89%8C%E8%AE%A9%E6%97%A5%E6%9C%AC%E5%AA%92%E4%BD%93%E6%B2%89%E9%BB%98%E4%BA%86%23) `233.7K 🔥` `NEW`
1. [于正回复吴谨言什么时候离婚](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%A4%8D%E5%90%B4%E8%B0%A8%E8%A8%80%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E7%A6%BB%E5%A9%9A%23) `232.3K 🔥` `NEW`
1. [相亲被说像一匹冷漠的马](https://s.weibo.com/weibo?q=%23%E7%9B%B8%E4%BA%B2%E8%A2%AB%E8%AF%B4%E5%83%8F%E4%B8%80%E5%8C%B9%E5%86%B7%E6%BC%A0%E7%9A%84%E9%A9%AC%23) `223.6K 🔥` `NEW`
1. [光靠干饭就打破了世界纪录](https://s.weibo.com/weibo?q=%23%E5%85%89%E9%9D%A0%E5%B9%B2%E9%A5%AD%E5%B0%B1%E6%89%93%E7%A0%B4%E4%BA%86%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `217.0K 🔥` `NEW`
1. [盛李豪太牛了](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E6%9D%8E%E8%B1%AA%E5%A4%AA%E7%89%9B%E4%BA%86%23) `195.0K 🔥` `NEW`
1. [理记](https://s.weibo.com/weibo?q=%23%E7%90%86%E8%AE%B0%23) `193.9K 🔥` `NEW`
1. [官方通报山西明长城损毁事件](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%B1%B1%E8%A5%BF%E6%98%8E%E9%95%BF%E5%9F%8E%E6%8D%9F%E6%AF%81%E4%BA%8B%E4%BB%B6%23) `181.1K 🔥` `NEW`
1. [女孩出生即持股月领4千却拒绝躺平](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%87%BA%E7%94%9F%E5%8D%B3%E6%8C%81%E8%82%A1%E6%9C%88%E9%A2%864%E5%8D%83%E5%8D%B4%E6%8B%92%E7%BB%9D%E8%BA%BA%E5%B9%B3%23) `180.2K 🔥` `NEW`
1. [西贝被曝后厨用漏勺通下水道](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%B4%9D%E8%A2%AB%E6%9B%9D%E5%90%8E%E5%8E%A8%E7%94%A8%E6%BC%8F%E5%8B%BA%E9%80%9A%E4%B8%8B%E6%B0%B4%E9%81%93%23) `178.4K 🔥` `NEW`
1. [跳水冠军妈妈没给项链却怪不戴](https://s.weibo.com/weibo?q=%23%E8%B7%B3%E6%B0%B4%E5%86%A0%E5%86%9B%E5%A6%88%E5%A6%88%E6%B2%A1%E7%BB%99%E9%A1%B9%E9%93%BE%E5%8D%B4%E6%80%AA%E4%B8%8D%E6%88%B4%23) `175.2K 🔥` `NEW`
1. [果然人在打电话的时候给什么都会接](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6%E4%BA%BA%E5%9C%A8%E6%89%93%E7%94%B5%E8%AF%9D%E7%9A%84%E6%97%B6%E5%80%99%E7%BB%99%E4%BB%80%E4%B9%88%E9%83%BD%E4%BC%9A%E6%8E%A5%23) `170.9K 🔥` `NEW`
1. [华为Mate90系列价格曝光](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMate90%E7%B3%BB%E5%88%97%E4%BB%B7%E6%A0%BC%E6%9B%9D%E5%85%89%23) `169.2K 🔥` `NEW`
1. [小雪否认张百乔万宁不合](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%9B%AA%E5%90%A6%E8%AE%A4%E5%BC%A0%E7%99%BE%E4%B9%94%E4%B8%87%E5%AE%81%E4%B8%8D%E5%90%88%23) `163.0K 🔥` `NEW`
1. [微信朋友圈内测私密发表](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%86%85%E6%B5%8B%E7%A7%81%E5%AF%86%E5%8F%91%E8%A1%A8%23) `162.1K 🔥` `NEW`
1. [汪顺说金牌被我蹭上了](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E9%A1%BA%E8%AF%B4%E9%87%91%E7%89%8C%E8%A2%AB%E6%88%91%E8%B9%AD%E4%B8%8A%E4%BA%86%23) `161.3K 🔥` `NEW`
1. [田栩宁宁波活动人气](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%A0%A9%E5%AE%81%E5%AE%81%E6%B3%A2%E6%B4%BB%E5%8A%A8%E4%BA%BA%E6%B0%94%23) `159.5K 🔥` `NEW`
1. [王一博怎么把以纯穿的这么高级](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%80%8E%E4%B9%88%E6%8A%8A%E4%BB%A5%E7%BA%AF%E7%A9%BF%E7%9A%84%E8%BF%99%E4%B9%88%E9%AB%98%E7%BA%A7%23) `156.8K 🔥` `NEW`
1. [大半个音乐圈都来无锡了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%8D%8A%E4%B8%AA%E9%9F%B3%E4%B9%90%E5%9C%88%E9%83%BD%E6%9D%A5%E6%97%A0%E9%94%A1%E4%BA%86%23) `156.8K 🔥` `NEW`
1. [医生不推荐的早餐搭配](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E4%B8%8D%E6%8E%A8%E8%8D%90%E7%9A%84%E6%97%A9%E9%A4%90%E6%90%AD%E9%85%8D%23) `156.8K 🔥` `NEW`
1. [保持健康的最好方法几乎不花钱](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%8C%81%E5%81%A5%E5%BA%B7%E7%9A%84%E6%9C%80%E5%A5%BD%E6%96%B9%E6%B3%95%E5%87%A0%E4%B9%8E%E4%B8%8D%E8%8A%B1%E9%92%B1%23) `150.6K 🔥` `NEW`

Updated at 2026-09-22 14:50:46

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
