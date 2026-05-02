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

1. [东航通报飞机与廊桥局部碰擦 (China Eastern Airlines reported a partial collision between the aircraft and the bridge)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%88%AA%E9%80%9A%E6%8A%A5%E9%A3%9E%E6%9C%BA%E4%B8%8E%E5%BB%8A%E6%A1%A5%E5%B1%80%E9%83%A8%E7%A2%B0%E6%93%A6%23) `1.1M 🔥` `NEW`
1. [网警发布五一AI防骗指南](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%AD%A6%E5%8F%91%E5%B8%83%E4%BA%94%E4%B8%80AI%E9%98%B2%E9%AA%97%E6%8C%87%E5%8D%97%23) `657.5K 🔥` `NEW`
1. [何炅回应王鹤棣情绪失控](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E5%9B%9E%E5%BA%94%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `621.8K 🔥` `NEW`
1. [余华辅导儿子语文后考试不及格](https://s.weibo.com/weibo?q=%23%E4%BD%99%E5%8D%8E%E8%BE%85%E5%AF%BC%E5%84%BF%E5%AD%90%E8%AF%AD%E6%96%87%E5%90%8E%E8%80%83%E8%AF%95%E4%B8%8D%E5%8F%8A%E6%A0%BC%23) `495.3K 🔥` `NEW`
1. [东航 虹桥](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%88%AA%20%E8%99%B9%E6%A1%A5%23) `430.5K 🔥` `NEW`
1. [云深不知梦新PV夯爆了](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%B7%B1%E4%B8%8D%E7%9F%A5%E6%A2%A6%E6%96%B0PV%E5%A4%AF%E7%88%86%E4%BA%86%23) `430.4K 🔥` `NEW`
1. [江语晨 浪姐厕女一](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%20%E6%B5%AA%E5%A7%90%E5%8E%95%E5%A5%B3%E4%B8%80%23) `426.1K 🔥` `NEW`
1. [湖人淘汰火箭](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E6%B7%98%E6%B1%B0%E7%81%AB%E7%AE%AD%23) `336.4K 🔥` `NEW`
1. [惊鸿一面](https://s.weibo.com/weibo?q=%23%E6%83%8A%E9%B8%BF%E4%B8%80%E9%9D%A2%23) `332.8K 🔥` `NEW`
1. [鹿晗叫李小冉姐姐](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8F%AB%E6%9D%8E%E5%B0%8F%E5%86%89%E5%A7%90%E5%A7%90%23) `326.5K 🔥` `NEW`
1. [有人为吃蜜雪9元圣代碗排队5小时 (Someone queued for 5 hours for a $9 Michelle sundae bowl)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E4%B8%BA%E5%90%83%E8%9C%9C%E9%9B%AA9%E5%85%83%E5%9C%A3%E4%BB%A3%E7%A2%97%E6%8E%92%E9%98%9F5%E5%B0%8F%E6%97%B6%23) `326.4K 🔥` `NEW`
1. [躺平阴谋](https://s.weibo.com/weibo?q=%23%E8%BA%BA%E5%B9%B3%E9%98%B4%E8%B0%8B%23) `238.3K 🔥` `NEW`
1. [Claude画的DeepSeek蓝胖鱼](https://s.weibo.com/weibo?q=%23Claude%E7%94%BB%E7%9A%84DeepSeek%E8%93%9D%E8%83%96%E9%B1%BC%23) `233.5K 🔥` `NEW`
1. [时隔五年我用AI复活了父亲](https://s.weibo.com/weibo?q=%23%E6%97%B6%E9%9A%94%E4%BA%94%E5%B9%B4%E6%88%91%E7%94%A8AI%E5%A4%8D%E6%B4%BB%E4%BA%86%E7%88%B6%E4%BA%B2%23) `229.6K 🔥` `NEW`
1. [西安上空现不明物](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%8A%E7%A9%BA%E7%8E%B0%E4%B8%8D%E6%98%8E%E7%89%A9%23) `222.7K 🔥` `NEW`
1. [东北早市被俄罗斯游客包场](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E6%97%A9%E5%B8%82%E8%A2%AB%E4%BF%84%E7%BD%97%E6%96%AF%E6%B8%B8%E5%AE%A2%E5%8C%85%E5%9C%BA%23) `219.8K 🔥` `NEW`
1. [Ming说这是在eStar的最后一个赛季](https://s.weibo.com/weibo?q=%23Ming%E8%AF%B4%E8%BF%99%E6%98%AF%E5%9C%A8eStar%E7%9A%84%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E8%B5%9B%E5%AD%A3%23) `216.0K 🔥` `NEW`
1. [对自己不好的事别到处说](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E8%87%AA%E5%B7%B1%E4%B8%8D%E5%A5%BD%E7%9A%84%E4%BA%8B%E5%88%AB%E5%88%B0%E5%A4%84%E8%AF%B4%23) `214.5K 🔥` `NEW`
1. [我的猫终于干了我一直觉得她会干的事](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E7%8C%AB%E7%BB%88%E4%BA%8E%E5%B9%B2%E4%BA%86%E6%88%91%E4%B8%80%E7%9B%B4%E8%A7%89%E5%BE%97%E5%A5%B9%E4%BC%9A%E5%B9%B2%E7%9A%84%E4%BA%8B%23) `211.7K 🔥` `NEW`
1. [11岁女孩频繁呕吐确诊肾衰竭](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%A2%91%E7%B9%81%E5%91%95%E5%90%90%E7%A1%AE%E8%AF%8A%E8%82%BE%E8%A1%B0%E7%AB%AD%23) `194.9K 🔥` `NEW`
1. [曾沛慈团三公小考第一 (Tsang Pei Ci Tuan San Gong ranked first in the quiz)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%A2%E4%B8%89%E5%85%AC%E5%B0%8F%E8%80%83%E7%AC%AC%E4%B8%80%23) `174.5K 🔥` `NEW`
1. [美国人正在逃离美国](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BA%BA%E6%AD%A3%E5%9C%A8%E9%80%83%E7%A6%BB%E7%BE%8E%E5%9B%BD%23) `163.6K 🔥` `NEW`
1. [孙怡阚清子一对视就跑调](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%98%9A%E6%B8%85%E5%AD%90%E4%B8%80%E5%AF%B9%E8%A7%86%E5%B0%B1%E8%B7%91%E8%B0%83%23) `162.1K 🔥` `NEW`
1. [曾沛慈团谁来了都得脱稿](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%A2%E8%B0%81%E6%9D%A5%E4%BA%86%E9%83%BD%E5%BE%97%E8%84%B1%E7%A8%BF%23) `146.3K 🔥` `NEW`
1. [胖东来再次回应249元毛巾事件](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%86%8D%E6%AC%A1%E5%9B%9E%E5%BA%94249%E5%85%83%E6%AF%9B%E5%B7%BE%E4%BA%8B%E4%BB%B6%23) `134.3K 🔥` `NEW`
1. [极氪月交付量创历史新高](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA%E6%9C%88%E4%BA%A4%E4%BB%98%E9%87%8F%E5%88%9B%E5%8E%86%E5%8F%B2%E6%96%B0%E9%AB%98%23) `130.1K 🔥` `NEW`
1. [詹姆斯单节得分超火箭全队](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%8D%95%E8%8A%82%E5%BE%97%E5%88%86%E8%B6%85%E7%81%AB%E7%AE%AD%E5%85%A8%E9%98%9F%23) `126.8K 🔥` `NEW`
1. [金价今年或跌回4000美元](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%BB%8A%E5%B9%B4%E6%88%96%E8%B7%8C%E5%9B%9E4000%E7%BE%8E%E5%85%83%23) `122.9K 🔥` `NEW`
1. [一个bug是bug 一堆bug能work](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AAbug%E6%98%AFbug%20%E4%B8%80%E5%A0%86bug%E8%83%BDwork%23) `326.7K 🔥` `+85%`
1. [杨幂脸上烫伤还没好](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%84%B8%E4%B8%8A%E7%83%AB%E4%BC%A4%E8%BF%98%E6%B2%A1%E5%A5%BD%23) `326.7K 🔥` `+68%`
1. [西安上空现不明物持续一小时后消失 (Unidentified object appears in the sky over Xi'an and disappears after one hour)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%8A%E7%A9%BA%E7%8E%B0%E4%B8%8D%E6%98%8E%E7%89%A9%E6%8C%81%E7%BB%AD%E4%B8%80%E5%B0%8F%E6%97%B6%E5%90%8E%E6%B6%88%E5%A4%B1%23) `326.6K 🔥` `+58%`
1. [时代峰峻回应严浩翔家庭事宜](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9B%9E%E5%BA%94%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%AE%B6%E5%BA%AD%E4%BA%8B%E5%AE%9C%23) `326.3K 🔥` `+57%`
1. [戚薇也在嗑张凌赫田曦薇](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E4%B9%9F%E5%9C%A8%E5%97%91%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%23) `326.2K 🔥` `+82%`
1. [DeepSeek 现在我是你爹了](https://s.weibo.com/weibo?q=%23DeepSeek%20%E7%8E%B0%E5%9C%A8%E6%88%91%E6%98%AF%E4%BD%A0%E7%88%B9%E4%BA%86%23) `326.1K 🔥` `+59%`
1. [小狗身体太软把主人弄得手忙脚乱的](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E8%BA%AB%E4%BD%93%E5%A4%AA%E8%BD%AF%E6%8A%8A%E4%B8%BB%E4%BA%BA%E5%BC%84%E5%BE%97%E6%89%8B%E5%BF%99%E8%84%9A%E4%B9%B1%E7%9A%84%23) `285.9K 🔥` `+68%`
1. [何洁听跳楼机还没到副歌就直接关掉了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B4%81%E5%90%AC%E8%B7%B3%E6%A5%BC%E6%9C%BA%E8%BF%98%E6%B2%A1%E5%88%B0%E5%89%AF%E6%AD%8C%E5%B0%B1%E7%9B%B4%E6%8E%A5%E5%85%B3%E6%8E%89%E4%BA%86%23) `271.8K 🔥` `+32%`
1. [张雪回应820RR赛道熄火](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%9B%9E%E5%BA%94820RR%E8%B5%9B%E9%81%93%E7%86%84%E7%81%AB%23) `236.2K 🔥` `+130%`
1. [用AI把我家猫养在了电脑上](https://s.weibo.com/weibo?q=%23%E7%94%A8AI%E6%8A%8A%E6%88%91%E5%AE%B6%E7%8C%AB%E5%85%BB%E5%9C%A8%E4%BA%86%E7%94%B5%E8%84%91%E4%B8%8A%23) `223.6K 🔥` `+125%`
1. [疑似严浩翔妈妈发博](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%A6%88%E5%A6%88%E5%8F%91%E5%8D%9A%23) `221.7K 🔥` `+22%`
1. [DeepSeek拟人 哇呀啧呜哇](https://s.weibo.com/weibo?q=%23DeepSeek%E6%8B%9F%E4%BA%BA%20%E5%93%87%E5%91%80%E5%95%A7%E5%91%9C%E5%93%87%23) `134.2K 🔥` `+32%`
1. [日本战犯竟称侵华是为了管教兄弟 (Japanese war criminals claimed that they invaded China to discipline their brothers)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%88%98%E7%8A%AF%E7%AB%9F%E7%A7%B0%E4%BE%B5%E5%8D%8E%E6%98%AF%E4%B8%BA%E4%BA%86%E7%AE%A1%E6%95%99%E5%85%84%E5%BC%9F%23) `243.2K 🔥`
1. [乘风三公小考](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E4%B8%89%E5%85%AC%E5%B0%8F%E8%80%83%23) `214.1K 🔥`
1. [承诺买房送69万黄金开发商久不兑现](https://s.weibo.com/weibo?q=%23%E6%89%BF%E8%AF%BA%E4%B9%B0%E6%88%BF%E9%80%8169%E4%B8%87%E9%BB%84%E9%87%91%E5%BC%80%E5%8F%91%E5%95%86%E4%B9%85%E4%B8%8D%E5%85%91%E7%8E%B0%23) `208.6K 🔥`
1. [刘晓庆回应和王婆互动冷淡](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E5%BA%86%E5%9B%9E%E5%BA%94%E5%92%8C%E7%8E%8B%E5%A9%86%E4%BA%92%E5%8A%A8%E5%86%B7%E6%B7%A1%23) `207.0K 🔥`
1. [胖东来正式起诉博主惊梦人](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%AD%A3%E5%BC%8F%E8%B5%B7%E8%AF%89%E5%8D%9A%E4%B8%BB%E6%83%8A%E6%A2%A6%E4%BA%BA%23) `820.3K 🔥` `-28%`
1. [严军发了一家四口照 (Yan Jun posted a photo of his family of four)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%86%9B%E5%8F%91%E4%BA%86%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%E7%85%A7%23) `241.8K 🔥` `-99%`
1. [王鹤棣第一次情绪失控](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `241.5K 🔥` `-69%`
1. [王濛张月抢同一首歌是为了同一个人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%BC%A0%E6%9C%88%E6%8A%A2%E5%90%8C%E4%B8%80%E9%A6%96%E6%AD%8C%E6%98%AF%E4%B8%BA%E4%BA%86%E5%90%8C%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `217.9K 🔥` `-60%`
1. [突然就懂了朋友和好朋友的区别](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%B0%B1%E6%87%82%E4%BA%86%E6%9C%8B%E5%8F%8B%E5%92%8C%E5%A5%BD%E6%9C%8B%E5%8F%8B%E7%9A%84%E5%8C%BA%E5%88%AB%23) `165.4K 🔥` `-41%`
1. [霸王茶姬水银门当事人称是对象下单](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E6%B0%B4%E9%93%B6%E9%97%A8%E5%BD%93%E4%BA%8B%E4%BA%BA%E7%A7%B0%E6%98%AF%E5%AF%B9%E8%B1%A1%E4%B8%8B%E5%8D%95%23) `158.1K 🔥` `-47%`
1. [巴雷特绝杀骑士](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%9B%B7%E7%89%B9%E7%BB%9D%E6%9D%80%E9%AA%91%E5%A3%AB%23) `125.6K 🔥` `-52%`

Updated at 2026-05-02 14:26:54

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
