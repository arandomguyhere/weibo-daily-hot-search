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

1. [韩版衣服中国造国内搜不到](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%89%88%E8%A1%A3%E6%9C%8D%E4%B8%AD%E5%9B%BD%E9%80%A0%E5%9B%BD%E5%86%85%E6%90%9C%E4%B8%8D%E5%88%B0%23) `1.5M 🔥` `NEW`
1. [高端养老院报价让家庭望而却步](https://s.weibo.com/weibo?q=%23%E9%AB%98%E7%AB%AF%E5%85%BB%E8%80%81%E9%99%A2%E6%8A%A5%E4%BB%B7%E8%AE%A9%E5%AE%B6%E5%BA%AD%E6%9C%9B%E8%80%8C%E5%8D%B4%E6%AD%A5%23) `993.5K 🔥` `NEW`
1. [大国工程重器进度条刷新](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%9B%BD%E5%B7%A5%E7%A8%8B%E9%87%8D%E5%99%A8%E8%BF%9B%E5%BA%A6%E6%9D%A1%E5%88%B7%E6%96%B0%23) `735.9K 🔥` `NEW`
1. [看完AI短剧只想说真人短剧完了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%AE%8CAI%E7%9F%AD%E5%89%A7%E5%8F%AA%E6%83%B3%E8%AF%B4%E7%9C%9F%E4%BA%BA%E7%9F%AD%E5%89%A7%E5%AE%8C%E4%BA%86%23) `705.4K 🔥` `NEW`
1. [女子美容院灌肠肠子被捅破](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%BE%8E%E5%AE%B9%E9%99%A2%E7%81%8C%E8%82%A0%E8%82%A0%E5%AD%90%E8%A2%AB%E6%8D%85%E7%A0%B4%23) `643.7K 🔥` `NEW`
1. [太平轮后周家蔡家对比明显](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B3%E8%BD%AE%E5%90%8E%E5%91%A8%E5%AE%B6%E8%94%A1%E5%AE%B6%E5%AF%B9%E6%AF%94%E6%98%8E%E6%98%BE%23) `555.9K 🔥` `NEW`
1. [张真源被陈哲远口气熏yue了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E8%A2%AB%E9%99%88%E5%93%B2%E8%BF%9C%E5%8F%A3%E6%B0%94%E7%86%8Fyue%E4%BA%86%23) `548.5K 🔥` `NEW`
1. [柬埔寨太子集团头目陈志真容](https://s.weibo.com/weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E5%A4%AA%E5%AD%90%E9%9B%86%E5%9B%A2%E5%A4%B4%E7%9B%AE%E9%99%88%E5%BF%97%E7%9C%9F%E5%AE%B9%23) `532.3K 🔥` `NEW`
1. [白俄女模特因高薪工作被骗缅甸园区](https://s.weibo.com/weibo?q=%23%E7%99%BD%E4%BF%84%E5%A5%B3%E6%A8%A1%E7%89%B9%E5%9B%A0%E9%AB%98%E8%96%AA%E5%B7%A5%E4%BD%9C%E8%A2%AB%E9%AA%97%E7%BC%85%E7%94%B8%E5%9B%AD%E5%8C%BA%23) `459.6K 🔥` `NEW`
1. [iPhoneDuo 强制适配](https://s.weibo.com/weibo?q=%23iPhoneDuo%20%E5%BC%BA%E5%88%B6%E9%80%82%E9%85%8D%23) `406.8K 🔥` `NEW`
1. [冯禧和许嵩婚后首条动态](https://s.weibo.com/weibo?q=%23%E5%86%AF%E7%A6%A7%E5%92%8C%E8%AE%B8%E5%B5%A9%E5%A9%9A%E5%90%8E%E9%A6%96%E6%9D%A1%E5%8A%A8%E6%80%81%23) `394.3K 🔥` `NEW`
1. [我不是NPC预告音轨与逐玉高度相似](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8D%E6%98%AFNPC%E9%A2%84%E5%91%8A%E9%9F%B3%E8%BD%A8%E4%B8%8E%E9%80%90%E7%8E%89%E9%AB%98%E5%BA%A6%E7%9B%B8%E4%BC%BC%23) `369.4K 🔥` `NEW`
1. [炎亚纶评论汪东城车祸舞台视频](https://s.weibo.com/weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E8%AF%84%E8%AE%BA%E6%B1%AA%E4%B8%9C%E5%9F%8E%E8%BD%A6%E7%A5%B8%E8%88%9E%E5%8F%B0%E8%A7%86%E9%A2%91%23) `363.0K 🔥` `NEW`
1. [朝鲜人民的真旗舰手机](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E4%BA%BA%E6%B0%91%E7%9A%84%E7%9C%9F%E6%97%97%E8%88%B0%E6%89%8B%E6%9C%BA%23) `348.9K 🔥` `NEW`
1. [俄罗斯鼠疫](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E9%BC%A0%E7%96%AB%23) `339.4K 🔥` `NEW`
1. [田作之赫](https://s.weibo.com/weibo?q=%23%E7%94%B0%E4%BD%9C%E4%B9%8B%E8%B5%AB%23) `332.3K 🔥` `NEW`
1. [小莲扮演者是被亲生父母遗弃的](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8E%B2%E6%89%AE%E6%BC%94%E8%80%85%E6%98%AF%E8%A2%AB%E4%BA%B2%E7%94%9F%E7%88%B6%E6%AF%8D%E9%81%97%E5%BC%83%E7%9A%84%23) `331.6K 🔥` `NEW`
1. [张馨予字迹也会长大](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E5%AD%97%E8%BF%B9%E4%B9%9F%E4%BC%9A%E9%95%BF%E5%A4%A7%23) `322.5K 🔥` `NEW`
1. [李玉刚万疆永久免费](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%89%E5%88%9A%E4%B8%87%E7%96%86%E6%B0%B8%E4%B9%85%E5%85%8D%E8%B4%B9%23) `312.2K 🔥` `NEW`
1. [5个好习惯减掉内脏脂肪](https://s.weibo.com/weibo?q=%235%E4%B8%AA%E5%A5%BD%E4%B9%A0%E6%83%AF%E5%87%8F%E6%8E%89%E5%86%85%E8%84%8F%E8%84%82%E8%82%AA%23) `307.4K 🔥` `NEW`
1. [提前1天返程凌晨3点半高速全是车](https://s.weibo.com/weibo?q=%23%E6%8F%90%E5%89%8D1%E5%A4%A9%E8%BF%94%E7%A8%8B%E5%87%8C%E6%99%A83%E7%82%B9%E5%8D%8A%E9%AB%98%E9%80%9F%E5%85%A8%E6%98%AF%E8%BD%A6%23) `293.6K 🔥` `NEW`
1. [老辈子朋友圈都是现做的](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%BE%88%E5%AD%90%E6%9C%8B%E5%8F%8B%E5%9C%88%E9%83%BD%E6%98%AF%E7%8E%B0%E5%81%9A%E7%9A%84%23) `290.9K 🔥` `NEW`
1. [老人给4个女儿签了遗嘱儿子不知情](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%BB%994%E4%B8%AA%E5%A5%B3%E5%84%BF%E7%AD%BE%E4%BA%86%E9%81%97%E5%98%B1%E5%84%BF%E5%AD%90%E4%B8%8D%E7%9F%A5%E6%83%85%23) `274.9K 🔥` `NEW`
1. [大S墓前一片粉色海洋](https://s.weibo.com/weibo?q=%23%E5%A4%A7S%E5%A2%93%E5%89%8D%E4%B8%80%E7%89%87%E7%B2%89%E8%89%B2%E6%B5%B7%E6%B4%8B%23) `271.5K 🔥` `NEW`
1. [刘学义买双洞洞鞋600](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E4%B9%B0%E5%8F%8C%E6%B4%9E%E6%B4%9E%E9%9E%8B600%23) `263.2K 🔥` `NEW`
1. [曝余文乐和王棠云离婚后仍同居](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BD%99%E6%96%87%E4%B9%90%E5%92%8C%E7%8E%8B%E6%A3%A0%E4%BA%91%E7%A6%BB%E5%A9%9A%E5%90%8E%E4%BB%8D%E5%90%8C%E5%B1%85%23) `261.6K 🔥` `NEW`
1. [诈骗园区头目吃着饭被抓](https://s.weibo.com/weibo?q=%23%E8%AF%88%E9%AA%97%E5%9B%AD%E5%8C%BA%E5%A4%B4%E7%9B%AE%E5%90%83%E7%9D%80%E9%A5%AD%E8%A2%AB%E6%8A%93%23) `259.5K 🔥` `NEW`
1. [钟丽缇女儿解释没有考上大学的原因](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%87%E5%A5%B3%E5%84%BF%E8%A7%A3%E9%87%8A%E6%B2%A1%E6%9C%89%E8%80%83%E4%B8%8A%E5%A4%A7%E5%AD%A6%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `259.3K 🔥` `NEW`
1. [换董事长头像骗财务转账1700万](https://s.weibo.com/weibo?q=%23%E6%8D%A2%E8%91%A3%E4%BA%8B%E9%95%BF%E5%A4%B4%E5%83%8F%E9%AA%97%E8%B4%A2%E5%8A%A1%E8%BD%AC%E8%B4%A61700%E4%B8%87%23) `251.4K 🔥` `NEW`
1. [大冰教穷人家孩子做小生意](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E6%95%99%E7%A9%B7%E4%BA%BA%E5%AE%B6%E5%AD%A9%E5%AD%90%E5%81%9A%E5%B0%8F%E7%94%9F%E6%84%8F%23) `241.8K 🔥` `NEW`
1. [见家长给2000红包算重视吗](https://s.weibo.com/weibo?q=%23%E8%A7%81%E5%AE%B6%E9%95%BF%E7%BB%992000%E7%BA%A2%E5%8C%85%E7%AE%97%E9%87%8D%E8%A7%86%E5%90%97%23) `241.1K 🔥` `NEW`
1. [热苏斯回应C罗声明](https://s.weibo.com/weibo?q=%23%E7%83%AD%E8%8B%8F%E6%96%AF%E5%9B%9E%E5%BA%94C%E7%BD%97%E5%A3%B0%E6%98%8E%23) `224.9K 🔥` `NEW`
1. [龙餐馆冲击奥斯卡](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E5%86%B2%E5%87%BB%E5%A5%A5%E6%96%AF%E5%8D%A1%23) `222.6K 🔥` `NEW`
1. [乡村媒婆今年一单没成](https://s.weibo.com/weibo?q=%23%E4%B9%A1%E6%9D%91%E5%AA%92%E5%A9%86%E4%BB%8A%E5%B9%B4%E4%B8%80%E5%8D%95%E6%B2%A1%E6%88%90%23) `179.7K 🔥` `NEW`
1. [时代少年团用去年的宣传视频](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%94%A8%E5%8E%BB%E5%B9%B4%E7%9A%84%E5%AE%A3%E4%BC%A0%E8%A7%86%E9%A2%91%23) `179.3K 🔥` `NEW`
1. [大S儿女特意举办法会为妈妈祈福](https://s.weibo.com/weibo?q=%23%E5%A4%A7S%E5%84%BF%E5%A5%B3%E7%89%B9%E6%84%8F%E4%B8%BE%E5%8A%9E%E6%B3%95%E4%BC%9A%E4%B8%BA%E5%A6%88%E5%A6%88%E7%A5%88%E7%A6%8F%23) `172.9K 🔥` `NEW`
1. [阿根廷队长收到主裁判送的红黄牌](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E9%95%BF%E6%94%B6%E5%88%B0%E4%B8%BB%E8%A3%81%E5%88%A4%E9%80%81%E7%9A%84%E7%BA%A2%E9%BB%84%E7%89%8C%23) `163.7K 🔥` `NEW`
1. [邓紫棋 Mark](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%20Mark%23) `159.5K 🔥` `NEW`
1. [梁靖崑1比3郭冠宏](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%911%E6%AF%943%E9%83%AD%E5%86%A0%E5%AE%8F%23) `158.2K 🔥` `NEW`
1. [白俄女模特独自通关无强迫迹象](https://s.weibo.com/weibo?q=%23%E7%99%BD%E4%BF%84%E5%A5%B3%E6%A8%A1%E7%89%B9%E7%8B%AC%E8%87%AA%E9%80%9A%E5%85%B3%E6%97%A0%E5%BC%BA%E8%BF%AB%E8%BF%B9%E8%B1%A1%23) `153.6K 🔥` `NEW`
1. [一些让人惊掉下巴的冷知识](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%9B%E8%AE%A9%E4%BA%BA%E6%83%8A%E6%8E%89%E4%B8%8B%E5%B7%B4%E7%9A%84%E5%86%B7%E7%9F%A5%E8%AF%86%23) `152.6K 🔥` `NEW`
1. [黄仁勋女婿被传接班英伟达](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%A5%B3%E5%A9%BF%E8%A2%AB%E4%BC%A0%E6%8E%A5%E7%8F%AD%E8%8B%B1%E4%BC%9F%E8%BE%BE%23) `146.4K 🔥` `NEW`
1. [黄渤那句马骑人是一语三关](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B8%A4%E9%82%A3%E5%8F%A5%E9%A9%AC%E9%AA%91%E4%BA%BA%E6%98%AF%E4%B8%80%E8%AF%AD%E4%B8%89%E5%85%B3%23) `140.1K 🔥` `NEW`
1. [张本智和3比2朴康贤](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C3%E6%AF%942%E6%9C%B4%E5%BA%B7%E8%B4%A4%23) `138.5K 🔥` `NEW`
1. [梁靖崑爆冷出局](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E7%88%86%E5%86%B7%E5%87%BA%E5%B1%80%23) `137.9K 🔥` `NEW`
1. [余承东称华为基本摆脱美国技术依赖](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E7%A7%B0%E5%8D%8E%E4%B8%BA%E5%9F%BA%E6%9C%AC%E6%91%86%E8%84%B1%E7%BE%8E%E5%9B%BD%E6%8A%80%E6%9C%AF%E4%BE%9D%E8%B5%96%23) `136.3K 🔥` `NEW`
1. [电诈头目佘智江被捕时十分嚣张](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%AF%88%E5%A4%B4%E7%9B%AE%E4%BD%98%E6%99%BA%E6%B1%9F%E8%A2%AB%E6%8D%95%E6%97%B6%E5%8D%81%E5%88%86%E5%9A%A3%E5%BC%A0%23) `134.4K 🔥` `NEW`
1. [吴奇隆 不赚钱也是这个立场](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%A5%87%E9%9A%86%20%E4%B8%8D%E8%B5%9A%E9%92%B1%E4%B9%9F%E6%98%AF%E8%BF%99%E4%B8%AA%E7%AB%8B%E5%9C%BA%23) `381.3K 🔥` `+38%`
1. [曝邓紫棋结婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%82%93%E7%B4%AB%E6%A3%8B%E7%BB%93%E5%A9%9A%23) `246.3K 🔥`
1. [曝VOGUE盛典集齐了四大流量花](https://s.weibo.com/weibo?q=%23%E6%9B%9DVOGUE%E7%9B%9B%E5%85%B8%E9%9B%86%E9%BD%90%E4%BA%86%E5%9B%9B%E5%A4%A7%E6%B5%81%E9%87%8F%E8%8A%B1%23) `174.1K 🔥` `-50%`

Updated at 2026-10-07 14:37:40

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
