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

1. [BBA集体大降价 (BBA collective big price reduction)](https://s.weibo.com/weibo?q=%23BBA%E9%9B%86%E4%BD%93%E5%A4%A7%E9%99%8D%E4%BB%B7%23) `979.1K 🔥` `NEW`
1. [游泳 腺病毒](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E6%B3%B3%20%E8%85%BA%E7%97%85%E6%AF%92%23) `966.6K 🔥` `NEW`
1. [中1签赚55万](https://s.weibo.com/weibo?q=%23%E4%B8%AD1%E7%AD%BE%E8%B5%9A55%E4%B8%87%23) `790.3K 🔥` `NEW`
1. [觉醒开机](https://s.weibo.com/weibo?q=%23%E8%A7%89%E9%86%92%E5%BC%80%E6%9C%BA%23) `476.7K 🔥` `NEW`
1. [卖129单108单差评被迫闭店](https://s.weibo.com/weibo?q=%23%E5%8D%96129%E5%8D%95108%E5%8D%95%E5%B7%AE%E8%AF%84%E8%A2%AB%E8%BF%AB%E9%97%AD%E5%BA%97%23) `457.0K 🔥` `NEW`
1. [西咸文旅挪用上亿棚改专项债债券](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%92%B8%E6%96%87%E6%97%85%E6%8C%AA%E7%94%A8%E4%B8%8A%E4%BA%BF%E6%A3%9A%E6%94%B9%E4%B8%93%E9%A1%B9%E5%80%BA%E5%80%BA%E5%88%B8%23) `455.3K 🔥` `NEW`
1. [大厂程序员辞职在宁夏用AI养羊](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%8E%82%E7%A8%8B%E5%BA%8F%E5%91%98%E8%BE%9E%E8%81%8C%E5%9C%A8%E5%AE%81%E5%A4%8F%E7%94%A8AI%E5%85%BB%E7%BE%8A%23) `451.9K 🔥` `NEW`
1. [哈尔滨成韩国网络热词](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E6%88%90%E9%9F%A9%E5%9B%BD%E7%BD%91%E7%BB%9C%E7%83%AD%E8%AF%8D%23) `438.1K 🔥` `NEW`
1. [睡前9分钟清除皮质醇的废物](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E5%89%8D9%E5%88%86%E9%92%9F%E6%B8%85%E9%99%A4%E7%9A%AE%E8%B4%A8%E9%86%87%E7%9A%84%E5%BA%9F%E7%89%A9%23) `427.7K 🔥` `NEW`
1. [赵凌爱惨了傅庭芸](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%87%8C%E7%88%B1%E6%83%A8%E4%BA%86%E5%82%85%E5%BA%AD%E8%8A%B8%23) `412.1K 🔥` `NEW`
1. [瑞幸联名 随份子 (Luckin co-branded Sui Laizi)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E8%81%94%E5%90%8D%20%E9%9A%8F%E4%BB%BD%E5%AD%90%23) `408.6K 🔥` `NEW`
1. [顶替案哥哥称妈妈更偏心弟弟](https://s.weibo.com/weibo?q=%23%E9%A1%B6%E6%9B%BF%E6%A1%88%E5%93%A5%E5%93%A5%E7%A7%B0%E5%A6%88%E5%A6%88%E6%9B%B4%E5%81%8F%E5%BF%83%E5%BC%9F%E5%BC%9F%23) `407.6K 🔥` `NEW`
1. [刘亦菲高定是工作防晒衣是生活](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E9%AB%98%E5%AE%9A%E6%98%AF%E5%B7%A5%E4%BD%9C%E9%98%B2%E6%99%92%E8%A1%A3%E6%98%AF%E7%94%9F%E6%B4%BB%23) `404.5K 🔥` `NEW`
1. [邓超孙俪带娃逛街](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%AD%99%E4%BF%AA%E5%B8%A6%E5%A8%83%E9%80%9B%E8%A1%97%23) `402.4K 🔥` `NEW`
1. [刘亦菲素颜穿79.8元防晒衣](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%B4%A0%E9%A2%9C%E7%A9%BF79.8%E5%85%83%E9%98%B2%E6%99%92%E8%A1%A3%23) `391.9K 🔥` `NEW`
1. [巴基斯坦博主看欢迎来龙餐馆不适](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E5%8D%9A%E4%B8%BB%E7%9C%8B%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%E4%B8%8D%E9%80%82%23) `389.0K 🔥` `NEW`
1. [前7个月国民经济总体平稳向新向优 (In the first seven months, the national economy has generally been stable and improving.)](https://s.weibo.com/weibo?q=%23%E5%89%8D7%E4%B8%AA%E6%9C%88%E5%9B%BD%E6%B0%91%E7%BB%8F%E6%B5%8E%E6%80%BB%E4%BD%93%E5%B9%B3%E7%A8%B3%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%23) `983.8K 🔥` `+60%`
1. [京东推出首家医用个护店 (JD.com launches first medical personal care store)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E6%8E%A8%E5%87%BA%E9%A6%96%E5%AE%B6%E5%8C%BB%E7%94%A8%E4%B8%AA%E6%8A%A4%E5%BA%97%23) `506.0K 🔥` `+83%`
1. [天安门下半旗悼念朱镕基同志 (Flags flown at half-mast in Tiananmen Square to mourn Comrade Zhu Rongji)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%89%E9%97%A8%E4%B8%8B%E5%8D%8A%E6%97%97%E6%82%BC%E5%BF%B5%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%23) `1.0M 🔥`
1. [12345 滥用](https://s.weibo.com/weibo?q=%2312345%20%E6%BB%A5%E7%94%A8%23) `1.0M 🔥`
1. [印度教授发中国街景称被印媒骗惨了](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%95%99%E6%8E%88%E5%8F%91%E4%B8%AD%E5%9B%BD%E8%A1%97%E6%99%AF%E7%A7%B0%E8%A2%AB%E5%8D%B0%E5%AA%92%E9%AA%97%E6%83%A8%E4%BA%86%23) `479.9K 🔥`
1. [重器 流氓罪死刑 (Heavy weapon, death penalty for hooliganism)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%99%A8%20%E6%B5%81%E6%B0%93%E7%BD%AA%E6%AD%BB%E5%88%91%23) `477.0K 🔥`
1. [3孩非亲生女方认为男方理应养孩子](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B3%E6%96%B9%E8%AE%A4%E4%B8%BA%E7%94%B7%E6%96%B9%E7%90%86%E5%BA%94%E5%85%BB%E5%AD%A9%E5%AD%90%23) `473.9K 🔥`
1. [易立竞当面拆穿蓝盈莹](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%AB%8B%E7%AB%9E%E5%BD%93%E9%9D%A2%E6%8B%86%E7%A9%BF%E8%93%9D%E7%9B%88%E8%8E%B9%23) `470.9K 🔥`
1. [李嫣几乎看不见唇腭裂修复痕迹 (Li Yan’s cleft lip and palate repair traces are almost invisible)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AB%A3%E5%87%A0%E4%B9%8E%E7%9C%8B%E4%B8%8D%E8%A7%81%E5%94%87%E8%85%AD%E8%A3%82%E4%BF%AE%E5%A4%8D%E7%97%95%E8%BF%B9%23) `468.1K 🔥`
1. [招商蛇口总部开展调查 (China Merchants Shekou Headquarters launches investigation)](https://s.weibo.com/weibo?q=%23%E6%8B%9B%E5%95%86%E8%9B%87%E5%8F%A3%E6%80%BB%E9%83%A8%E5%BC%80%E5%B1%95%E8%B0%83%E6%9F%A5%23) `466.3K 🔥`
1. [贺涵PPT做得太丑了](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E6%B6%B5PPT%E5%81%9A%E5%BE%97%E5%A4%AA%E4%B8%91%E4%BA%86%23) `463.5K 🔥`
1. [时代峰峻半夜发招聘](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%8D%8A%E5%A4%9C%E5%8F%91%E6%8B%9B%E8%81%98%23) `461.0K 🔥`
1. [杭州酒局事件受害女子家人回应](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%E5%8F%97%E5%AE%B3%E5%A5%B3%E5%AD%90%E5%AE%B6%E4%BA%BA%E5%9B%9E%E5%BA%94%23) `458.9K 🔥`
1. [张若昀白客玩蔡徐坤梗 (Zhang Ruoyun plays with Cai Xukun)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E7%99%BD%E5%AE%A2%E7%8E%A9%E8%94%A1%E5%BE%90%E5%9D%A4%E6%A2%97%23) `449.5K 🔥`
1. [桃黑黑一天掉粉近4万 (Taoheihei lost nearly 40,000 followers in one day)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E4%B8%80%E5%A4%A9%E6%8E%89%E7%B2%89%E8%BF%914%E4%B8%87%23) `449.0K 🔥`
1. [赵海峰酒局 拿地潜规则](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%B5%B7%E5%B3%B0%E9%85%92%E5%B1%80%20%E6%8B%BF%E5%9C%B0%E6%BD%9C%E8%A7%84%E5%88%99%23) `446.6K 🔥`
1. [BBA大降价 宝马5系跌至28万](https://s.weibo.com/weibo?q=%23BBA%E5%A4%A7%E9%99%8D%E4%BB%B7%20%E5%AE%9D%E9%A9%AC5%E7%B3%BB%E8%B7%8C%E8%87%B328%E4%B8%87%23) `442.9K 🔥`
1. [赵海峰 酒桌文化](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%B5%B7%E5%B3%B0%20%E9%85%92%E6%A1%8C%E6%96%87%E5%8C%96%23) `442.0K 🔥`
1. [龙餐馆 现挂 (Dragon Restaurant now available)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%20%E7%8E%B0%E6%8C%82%23) `436.3K 🔥`
1. [桃黑黑说真的挺不好意思 (Taoheihei is really embarrassed to say)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E8%AF%B4%E7%9C%9F%E7%9A%84%E6%8C%BA%E4%B8%8D%E5%A5%BD%E6%84%8F%E6%80%9D%23) `432.2K 🔥`
1. [哈佛麻省理工造了83亿AI人 (Harvard and MIT created 8.3 billion AI people)](https://s.weibo.com/weibo?q=%23%E5%93%88%E4%BD%9B%E9%BA%BB%E7%9C%81%E7%90%86%E5%B7%A5%E9%80%A0%E4%BA%8683%E4%BA%BFAI%E4%BA%BA%23) `430.9K 🔥`
1. [在华18年日本人参拜靖国神社](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%8D%8E18%E5%B9%B4%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%8F%82%E6%8B%9C%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%23) `424.9K 🔥`
1. [李嫣6岁举办了人生第一场画展](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AB%A36%E5%B2%81%E4%B8%BE%E5%8A%9E%E4%BA%86%E4%BA%BA%E7%94%9F%E7%AC%AC%E4%B8%80%E5%9C%BA%E7%94%BB%E5%B1%95%23) `424.2K 🔥`
1. [卡戴珊汉密尔顿热恋秀恩爱](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E6%88%B4%E7%8F%8A%E6%B1%89%E5%AF%86%E5%B0%94%E9%A1%BF%E7%83%AD%E6%81%8B%E7%A7%80%E6%81%A9%E7%88%B1%23) `421.6K 🔥`
1. [黄圣依离婚后首次带儿子安麟出镜 (Huang Shengyi brought his son An Lin to the scene for the first time after his divorce)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%9C%A3%E4%BE%9D%E7%A6%BB%E5%A9%9A%E5%90%8E%E9%A6%96%E6%AC%A1%E5%B8%A6%E5%84%BF%E5%AD%90%E5%AE%89%E9%BA%9F%E5%87%BA%E9%95%9C%23) `418.4K 🔥`
1. [学籍顶替案母亲称弟弟当公务员后飘了](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%B1%8D%E9%A1%B6%E6%9B%BF%E6%A1%88%E6%AF%8D%E4%BA%B2%E7%A7%B0%E5%BC%9F%E5%BC%9F%E5%BD%93%E5%85%AC%E5%8A%A1%E5%91%98%E5%90%8E%E9%A3%98%E4%BA%86%23) `416.2K 🔥`
1. [被容嬷嬷凶相骗了近30年](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%AE%B9%E5%AC%B7%E5%AC%B7%E5%87%B6%E7%9B%B8%E9%AA%97%E4%BA%86%E8%BF%9130%E5%B9%B4%23) `415.2K 🔥`
1. [许家印崩了东北富二代42个亿 (Xu Jiayin lost 4.2 billion to the rich second generation of Northeast China)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%AE%B6%E5%8D%B0%E5%B4%A9%E4%BA%86%E4%B8%9C%E5%8C%97%E5%AF%8C%E4%BA%8C%E4%BB%A342%E4%B8%AA%E4%BA%BF%23) `401.2K 🔥`
1. [现在泡面都进化成这样了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E6%B3%A1%E9%9D%A2%E9%83%BD%E8%BF%9B%E5%8C%96%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `397.3K 🔥`
1. [蓝盈莹承认恋情](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `395.8K 🔥`
1. [不要允许人一边使用你一边否定你](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%85%81%E8%AE%B8%E4%BA%BA%E4%B8%80%E8%BE%B9%E4%BD%BF%E7%94%A8%E4%BD%A0%E4%B8%80%E8%BE%B9%E5%90%A6%E5%AE%9A%E4%BD%A0%23) `394.3K 🔥`
1. [双胞胎上恋综忽悠男嘉宾](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%83%9E%E8%83%8E%E4%B8%8A%E6%81%8B%E7%BB%BC%E5%BF%BD%E6%82%A0%E7%94%B7%E5%98%89%E5%AE%BE%23) `385.9K 🔥`
1. [泡面巨头靠涨价赚翻了](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E9%9D%A2%E5%B7%A8%E5%A4%B4%E9%9D%A0%E6%B6%A8%E4%BB%B7%E8%B5%9A%E7%BF%BB%E4%BA%86%23) `383.6K 🔥`
1. [高考只差一分却过上了两种人生](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%8F%AA%E5%B7%AE%E4%B8%80%E5%88%86%E5%8D%B4%E8%BF%87%E4%B8%8A%E4%BA%86%E4%B8%A4%E7%A7%8D%E4%BA%BA%E7%94%9F%23) `481.3K 🔥` `-22%`

Updated at 2026-08-18 13:21:02

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
