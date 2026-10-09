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

1. [飞天奖获奖名单](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E5%A4%A9%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `1.8M 🔥` `NEW`
1. [王仁君飞天奖视帝](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BB%81%E5%90%9B%E9%A3%9E%E5%A4%A9%E5%A5%96%E8%A7%86%E5%B8%9D%23) `632.6K 🔥` `NEW`
1. [十五五开局六张网齐铺开](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E5%BC%80%E5%B1%80%E5%85%AD%E5%BC%A0%E7%BD%91%E9%BD%90%E9%93%BA%E5%BC%80%23) `503.2K 🔥` `NEW`
1. [林仲勋申裕斌夺冠](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BB%B2%E5%8B%8B%E7%94%B3%E8%A3%95%E6%96%8C%E5%A4%BA%E5%86%A0%23) `480.4K 🔥` `NEW`
1. [长柏真的高中了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9F%8F%E7%9C%9F%E7%9A%84%E9%AB%98%E4%B8%AD%E4%BA%86%23) `312.7K 🔥` `NEW`
1. [赵丽颖恭喜王仁君](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%81%AD%E5%96%9C%E7%8E%8B%E4%BB%81%E5%90%9B%23) `299.2K 🔥` `NEW`
1. [54岁马化腾罕见露面](https://s.weibo.com/weibo?q=%2354%E5%B2%81%E9%A9%AC%E5%8C%96%E8%85%BE%E7%BD%95%E8%A7%81%E9%9C%B2%E9%9D%A2%23) `253.3K 🔥` `NEW`
1. [超长蛋挞陆续下架](https://s.weibo.com/weibo?q=%23%E8%B6%85%E9%95%BF%E8%9B%8B%E6%8C%9E%E9%99%86%E7%BB%AD%E4%B8%8B%E6%9E%B6%23) `250.5K 🔥` `NEW`
1. [山西一医院保胎药错发成引产药](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%B8%80%E5%8C%BB%E9%99%A2%E4%BF%9D%E8%83%8E%E8%8D%AF%E9%94%99%E5%8F%91%E6%88%90%E5%BC%95%E4%BA%A7%E8%8D%AF%23) `249.5K 🔥` `NEW`
1. [蛋白质对人体有多重要](https://s.weibo.com/weibo?q=%23%E8%9B%8B%E7%99%BD%E8%B4%A8%E5%AF%B9%E4%BA%BA%E4%BD%93%E6%9C%89%E5%A4%9A%E9%87%8D%E8%A6%81%23) `245.1K 🔥` `NEW`
1. [沐言爸爸隐婚生子女儿走红后才公开](https://s.weibo.com/weibo?q=%23%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%E9%9A%90%E5%A9%9A%E7%94%9F%E5%AD%90%E5%A5%B3%E5%84%BF%E8%B5%B0%E7%BA%A2%E5%90%8E%E6%89%8D%E5%85%AC%E5%BC%80%23) `242.4K 🔥` `NEW`
1. [妈妈回应沐言为何没读私立学校](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E6%B2%90%E8%A8%80%E4%B8%BA%E4%BD%95%E6%B2%A1%E8%AF%BB%E7%A7%81%E7%AB%8B%E5%AD%A6%E6%A0%A1%23) `240.5K 🔥` `NEW`
1. [女子仅退款9斤蜜薯称有本事来拿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%85%E9%80%80%E6%AC%BE9%E6%96%A4%E8%9C%9C%E8%96%AF%E7%A7%B0%E6%9C%89%E6%9C%AC%E4%BA%8B%E6%9D%A5%E6%8B%BF%23) `236.1K 🔥` `NEW`
1. [沐言爸爸居然是结巴](https://s.weibo.com/weibo?q=%23%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%E5%B1%85%E7%84%B6%E6%98%AF%E7%BB%93%E5%B7%B4%23) `235.4K 🔥` `NEW`
1. [小巷人家 陪跑](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%20%E9%99%AA%E8%B7%91%23) `232.2K 🔥` `NEW`
1. [金智媛新剧收视率](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E5%AA%9B%E6%96%B0%E5%89%A7%E6%94%B6%E8%A7%86%E7%8E%87%23) `228.5K 🔥` `NEW`
1. [沐言爸爸是游乐王子](https://s.weibo.com/weibo?q=%23%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%E6%98%AF%E6%B8%B8%E4%B9%90%E7%8E%8B%E5%AD%90%23) `225.6K 🔥` `NEW`
1. [养了五年的猫突然开线还能修吗](https://s.weibo.com/weibo?q=%23%E5%85%BB%E4%BA%86%E4%BA%94%E5%B9%B4%E7%9A%84%E7%8C%AB%E7%AA%81%E7%84%B6%E5%BC%80%E7%BA%BF%E8%BF%98%E8%83%BD%E4%BF%AE%E5%90%97%23) `223.8K 🔥` `NEW`
1. [南京三千万豪宅难卖一千五百万](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E4%B8%89%E5%8D%83%E4%B8%87%E8%B1%AA%E5%AE%85%E9%9A%BE%E5%8D%96%E4%B8%80%E5%8D%83%E4%BA%94%E7%99%BE%E4%B8%87%23) `220.8K 🔥` `NEW`
1. [大娘子福气了一门双星](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A8%98%E5%AD%90%E7%A6%8F%E6%B0%94%E4%BA%86%E4%B8%80%E9%97%A8%E5%8F%8C%E6%98%9F%23) `218.6K 🔥` `NEW`
1. [大闸蟹全线崩盘](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%97%B8%E8%9F%B9%E5%85%A8%E7%BA%BF%E5%B4%A9%E7%9B%98%23) `213.2K 🔥` `NEW`
1. [盛家的儿女一个比一个争气](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E5%AE%B6%E7%9A%84%E5%84%BF%E5%A5%B3%E4%B8%80%E4%B8%AA%E6%AF%94%E4%B8%80%E4%B8%AA%E4%BA%89%E6%B0%94%23) `212.9K 🔥` `NEW`
1. [宋佳飞天奖视后](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BD%B3%E9%A3%9E%E5%A4%A9%E5%A5%96%E8%A7%86%E5%90%8E%23) `207.3K 🔥` `NEW`
1. [于和伟 可惜](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E5%92%8C%E4%BC%9F%20%E5%8F%AF%E6%83%9C%23) `197.9K 🔥` `NEW`
1. [妈妈说男的死得比女的早](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E8%AF%B4%E7%94%B7%E7%9A%84%E6%AD%BB%E5%BE%97%E6%AF%94%E5%A5%B3%E7%9A%84%E6%97%A9%23) `175.7K 🔥` `NEW`
1. [刘亦菲 水蜜桃公主](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%20%E6%B0%B4%E8%9C%9C%E6%A1%83%E5%85%AC%E4%B8%BB%23) `167.1K 🔥` `NEW`
1. [中年夫妻十条亲密动作清单](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B9%B4%E5%A4%AB%E5%A6%BB%E5%8D%81%E6%9D%A1%E4%BA%B2%E5%AF%86%E5%8A%A8%E4%BD%9C%E6%B8%85%E5%8D%95%23) `165.9K 🔥` `NEW`
1. [李勒优第一份工资被扣1000](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E7%AC%AC%E4%B8%80%E4%BB%BD%E5%B7%A5%E8%B5%84%E8%A2%AB%E6%89%A31000%23) `163.7K 🔥` `NEW`
1. [开保胎药却取到引产药孕妇发声](https://s.weibo.com/weibo?q=%23%E5%BC%80%E4%BF%9D%E8%83%8E%E8%8D%AF%E5%8D%B4%E5%8F%96%E5%88%B0%E5%BC%95%E4%BA%A7%E8%8D%AF%E5%AD%95%E5%A6%87%E5%8F%91%E5%A3%B0%23) `162.9K 🔥` `NEW`
1. [俄导弹击中基辅大桥猛烈爆炸画面](https://s.weibo.com/weibo?q=%23%E4%BF%84%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E5%9F%BA%E8%BE%85%E5%A4%A7%E6%A1%A5%E7%8C%9B%E7%83%88%E7%88%86%E7%82%B8%E7%94%BB%E9%9D%A2%23) `161.1K 🔥` `NEW`
1. [周杰伦晒与BIGBANG合照](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%99%92%E4%B8%8EBIGBANG%E5%90%88%E7%85%A7%23) `159.7K 🔥` `NEW`
1. [林昀儒郑怡静10比3冠军点遭惊天逆转](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%98%80%E5%84%92%E9%83%91%E6%80%A1%E9%9D%9910%E6%AF%943%E5%86%A0%E5%86%9B%E7%82%B9%E9%81%AD%E6%83%8A%E5%A4%A9%E9%80%86%E8%BD%AC%23) `156.9K 🔥` `NEW`
1. [国色芳华飞天奖优秀电视剧](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%89%B2%E8%8A%B3%E5%8D%8E%E9%A3%9E%E5%A4%A9%E5%A5%96%E4%BC%98%E7%A7%80%E7%94%B5%E8%A7%86%E5%89%A7%23) `156.6K 🔥` `NEW`
1. [崩坏星穹铁道](https://s.weibo.com/weibo?q=%23%E5%B4%A9%E5%9D%8F%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93%23) `153.2K 🔥` `NEW`
1. [JDG战胜DYG](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9CDYG%23) `140.5K 🔥` `NEW`
1. [积英巷盛家满门荣耀](https://s.weibo.com/weibo?q=%23%E7%A7%AF%E8%8B%B1%E5%B7%B7%E7%9B%9B%E5%AE%B6%E6%BB%A1%E9%97%A8%E8%8D%A3%E8%80%80%23) `139.1K 🔥` `NEW`
1. [知否官博又活了](https://s.weibo.com/weibo?q=%23%E7%9F%A5%E5%90%A6%E5%AE%98%E5%8D%9A%E5%8F%88%E6%B4%BB%E4%BA%86%23) `138.1K 🔥` `NEW`
1. [周杰伦转发著名中国歌手](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%BD%AC%E5%8F%91%E8%91%97%E5%90%8D%E4%B8%AD%E5%9B%BD%E6%AD%8C%E6%89%8B%23) `137.2K 🔥` `NEW`
1. [iPhone18Pro卖不动了](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `136.9K 🔥` `NEW`
1. [曝李勒优想和崔晋一家一刀两断](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E5%8B%92%E4%BC%98%E6%83%B3%E5%92%8C%E5%B4%94%E6%99%8B%E4%B8%80%E5%AE%B6%E4%B8%80%E5%88%80%E4%B8%A4%E6%96%AD%23) `132.9K 🔥` `NEW`
1. [清融达成联赛2000击杀](https://s.weibo.com/weibo?q=%23%E6%B8%85%E8%9E%8D%E8%BE%BE%E6%88%90%E8%81%94%E8%B5%9B2000%E5%87%BB%E6%9D%80%23) `129.0K 🔥` `NEW`
1. [宋佳一串三](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BD%B3%E4%B8%80%E4%B8%B2%E4%B8%89%23) `128.4K 🔥` `NEW`
1. [沐言一家冰岛行爆火](https://s.weibo.com/weibo?q=%23%E6%B2%90%E8%A8%80%E4%B8%80%E5%AE%B6%E5%86%B0%E5%B2%9B%E8%A1%8C%E7%88%86%E7%81%AB%23) `124.9K 🔥` `NEW`
1. [林仲勋申裕斌3比2林昀儒郑怡静](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BB%B2%E5%8B%8B%E7%94%B3%E8%A3%95%E6%96%8C3%E6%AF%942%E6%9E%97%E6%98%80%E5%84%92%E9%83%91%E6%80%A1%E9%9D%99%23) `124.7K 🔥` `NEW`
1. [小姐姐拍照被楼上老奶奶拍下](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A7%90%E5%A7%90%E6%8B%8D%E7%85%A7%E8%A2%AB%E6%A5%BC%E4%B8%8A%E8%80%81%E5%A5%B6%E5%A5%B6%E6%8B%8D%E4%B8%8B%23) `124.6K 🔥` `NEW`
1. [Cortis全开麦唱功引热议](https://s.weibo.com/weibo?q=%23Cortis%E5%85%A8%E5%BC%80%E9%BA%A6%E5%94%B1%E5%8A%9F%E5%BC%95%E7%83%AD%E8%AE%AE%23) `106.7K 🔥` `NEW`
1. [肿瘤科医生垫付40万病逝](https://s.weibo.com/weibo?q=%23%E8%82%BF%E7%98%A4%E7%A7%91%E5%8C%BB%E7%94%9F%E5%9E%AB%E4%BB%9840%E4%B8%87%E7%97%85%E9%80%9D%23) `97.0K 🔥` `NEW`
1. [沐言爸妈没办婚礼没拍婚纱照](https://s.weibo.com/weibo?q=%23%E6%B2%90%E8%A8%80%E7%88%B8%E5%A6%88%E6%B2%A1%E5%8A%9E%E5%A9%9A%E7%A4%BC%E6%B2%A1%E6%8B%8D%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `94.4K 🔥` `NEW`
1. [中网女单四强对阵](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BD%91%E5%A5%B3%E5%8D%95%E5%9B%9B%E5%BC%BA%E5%AF%B9%E9%98%B5%23) `93.1K 🔥` `NEW`

Updated at 2026-10-10 00:59:56

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
