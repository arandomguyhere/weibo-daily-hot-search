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

1. [孙铭阳退出国家队 (Sun Mingyang retires from the national team)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%93%AD%E9%98%B3%E9%80%80%E5%87%BA%E5%9B%BD%E5%AE%B6%E9%98%9F%23) `1.3M 🔥` `NEW`
1. [月壤用拔丝地瓜手法做成纤维](https://s.weibo.com/weibo?q=%23%E6%9C%88%E5%A3%A4%E7%94%A8%E6%8B%94%E4%B8%9D%E5%9C%B0%E7%93%9C%E6%89%8B%E6%B3%95%E5%81%9A%E6%88%90%E7%BA%A4%E7%BB%B4%23) `1.3M 🔥` `NEW`
1. [阿云嘎发视频道歉](https://s.weibo.com/weibo?q=%23%E9%98%BF%E4%BA%91%E5%98%8E%E5%8F%91%E8%A7%86%E9%A2%91%E9%81%93%E6%AD%89%23) `1.3M 🔥` `NEW`
1. [怎么现在不垃圾分类了](https://s.weibo.com/weibo?q=%23%E6%80%8E%E4%B9%88%E7%8E%B0%E5%9C%A8%E4%B8%8D%E5%9E%83%E5%9C%BE%E5%88%86%E7%B1%BB%E4%BA%86%23) `1.2M 🔥` `NEW`
1. [李小冉知道自己笑起来像森碟](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E7%AC%91%E8%B5%B7%E6%9D%A5%E5%83%8F%E6%A3%AE%E7%A2%9F%23) `1.2M 🔥` `NEW`
1. [江苏税务正处理偷拍男生拟录资格](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E7%A8%8E%E5%8A%A1%E6%AD%A3%E5%A4%84%E7%90%86%E5%81%B7%E6%8B%8D%E7%94%B7%E7%94%9F%E6%8B%9F%E5%BD%95%E8%B5%84%E6%A0%BC%23) `847.6K 🔥` `NEW`
1. [黄仁勋年薪约2.47亿元](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%B9%B4%E8%96%AA%E7%BA%A62.47%E4%BA%BF%E5%85%83%23) `633.0K 🔥` `NEW`
1. [小米17Max来了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B317Max%E6%9D%A5%E4%BA%86%23) `419.6K 🔥` `NEW`
1. [于正回应白鹿争议](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E7%99%BD%E9%B9%BF%E4%BA%89%E8%AE%AE%23) `410.8K 🔥` `NEW`
1. [南京偷拍男拟录用公务员公示期已过](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%81%B7%E6%8B%8D%E7%94%B7%E6%8B%9F%E5%BD%95%E7%94%A8%E5%85%AC%E5%8A%A1%E5%91%98%E5%85%AC%E7%A4%BA%E6%9C%9F%E5%B7%B2%E8%BF%87%23) `407.5K 🔥` `NEW`
1. [LA迪士尼偶遇刘亦菲 (Encounter with Liu Yifei at LA Disneyland)](https://s.weibo.com/weibo?q=%23LA%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%81%B6%E9%81%87%E5%88%98%E4%BA%A6%E8%8F%B2%23) `390.9K 🔥` `NEW`
1. [王俊凯黄晓明昆凌中餐厅同框](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%BB%84%E6%99%93%E6%98%8E%E6%98%86%E5%87%8C%E4%B8%AD%E9%A4%90%E5%8E%85%E5%90%8C%E6%A1%86%23) `381.9K 🔥` `NEW`
1. [追觅创始人俞浩回应崩老头](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E8%A7%85%E5%88%9B%E5%A7%8B%E4%BA%BA%E4%BF%9E%E6%B5%A9%E5%9B%9E%E5%BA%94%E5%B4%A9%E8%80%81%E5%A4%B4%23) `357.3K 🔥` `NEW`
1. [520用晶钻加满桃花运](https://s.weibo.com/weibo?q=%23520%E7%94%A8%E6%99%B6%E9%92%BB%E5%8A%A0%E6%BB%A1%E6%A1%83%E8%8A%B1%E8%BF%90%23) `346.6K 🔥` `NEW`
1. [黄仁勋搭空军一号随特朗普访华](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E6%90%AD%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E9%9A%8F%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%23) `329.4K 🔥` `NEW`
1. [杨洋章若楠方逸伦换头像](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E7%AB%A0%E8%8B%A5%E6%A5%A0%E6%96%B9%E9%80%B8%E4%BC%A6%E6%8D%A2%E5%A4%B4%E5%83%8F%23) `323.3K 🔥` `NEW`
1. [若曦原来在浣衣局洗衣服洗了8年](https://s.weibo.com/weibo?q=%23%E8%8B%A5%E6%9B%A6%E5%8E%9F%E6%9D%A5%E5%9C%A8%E6%B5%A3%E8%A1%A3%E5%B1%80%E6%B4%97%E8%A1%A3%E6%9C%8D%E6%B4%97%E4%BA%868%E5%B9%B4%23) `302.3K 🔥` `NEW`
1. [只对喜欢的人才会做的事](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E5%AF%B9%E5%96%9C%E6%AC%A2%E7%9A%84%E4%BA%BA%E6%89%8D%E4%BC%9A%E5%81%9A%E7%9A%84%E4%BA%8B%23) `289.8K 🔥` `NEW`
1. [周慧敏的猫去世了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%85%A7%E6%95%8F%E7%9A%84%E7%8C%AB%E5%8E%BB%E4%B8%96%E4%BA%86%23) `289.1K 🔥` `NEW`
1. [蔡徐坤 林里](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%20%E6%9E%97%E9%87%8C%23) `287.7K 🔥` `NEW`
1. [给阿嬷的情书消失的人 秦岭淮河线 (The man whose love letter to grandma disappeared Qinling-Huaihe River Line)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E6%B6%88%E5%A4%B1%E7%9A%84%E4%BA%BA%20%E7%A7%A6%E5%B2%AD%E6%B7%AE%E6%B2%B3%E7%BA%BF%23) `286.9K 🔥` `NEW`
1. [第一个想到这么赚零花钱的是个天才](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%83%B3%E5%88%B0%E8%BF%99%E4%B9%88%E8%B5%9A%E9%9B%B6%E8%8A%B1%E9%92%B1%E7%9A%84%E6%98%AF%E4%B8%AA%E5%A4%A9%E6%89%8D%23) `283.6K 🔥` `NEW`
1. [穆祉丞 舒客](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E8%88%92%E5%AE%A2%23) `282.2K 🔥` `NEW`
1. [韩寒希望给阿嬷的情书票房破10亿](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AF%92%E5%B8%8C%E6%9C%9B%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%A5%A8%E6%88%BF%E7%A0%B410%E4%BA%BF%23) `278.4K 🔥` `NEW`
1. [雨霖铃首播4集](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E9%9C%96%E9%93%83%E9%A6%96%E6%92%AD4%E9%9B%86%23) `278.3K 🔥` `NEW`
1. [黄雅琼拟入职衢州职业技术学院](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%9B%85%E7%90%BC%E6%8B%9F%E5%85%A5%E8%81%8C%E8%A1%A2%E5%B7%9E%E8%81%8C%E4%B8%9A%E6%8A%80%E6%9C%AF%E5%AD%A6%E9%99%A2%23) `276.3K 🔥` `NEW`
1. [开榴莲开到音响了](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%A6%B4%E8%8E%B2%E5%BC%80%E5%88%B0%E9%9F%B3%E5%93%8D%E4%BA%86%23) `274.0K 🔥` `NEW`
1. [马刺3比2森林狼](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BA3%E6%AF%942%E6%A3%AE%E6%9E%97%E7%8B%BC%23) `269.9K 🔥` `NEW`
1. [电力股狂掀涨停潮](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%8A%9B%E8%82%A1%E7%8B%82%E6%8E%80%E6%B6%A8%E5%81%9C%E6%BD%AE%23) `269.0K 🔥` `NEW`
1. [在夜市买了一只很可爱的小狗](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%A4%9C%E5%B8%82%E4%B9%B0%E4%BA%86%E4%B8%80%E5%8F%AA%E5%BE%88%E5%8F%AF%E7%88%B1%E7%9A%84%E5%B0%8F%E7%8B%97%23) `267.5K 🔥` `NEW`
1. [何卓佳祝福孙铭阳 (He Zhuojia wishes Sun Mingyang)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%8D%93%E4%BD%B3%E7%A5%9D%E7%A6%8F%E5%AD%99%E9%93%AD%E9%98%B3%23) `266.6K 🔥` `NEW`
1. [煎饼果仔澄清收入问题](https://s.weibo.com/weibo?q=%23%E7%85%8E%E9%A5%BC%E6%9E%9C%E4%BB%94%E6%BE%84%E6%B8%85%E6%94%B6%E5%85%A5%E9%97%AE%E9%A2%98%23) `265.5K 🔥` `NEW`
1. [便宜冰箱和贵的比差在哪](https://s.weibo.com/weibo?q=%23%E4%BE%BF%E5%AE%9C%E5%86%B0%E7%AE%B1%E5%92%8C%E8%B4%B5%E7%9A%84%E6%AF%94%E5%B7%AE%E5%9C%A8%E5%93%AA%23) `260.1K 🔥` `NEW`
1. [给阿嬷的情书 戛纳](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E6%88%9B%E7%BA%B3%23) `258.4K 🔥` `NEW`
1. [ENEMY单集付费8.8元](https://s.weibo.com/weibo?q=%23ENEMY%E5%8D%95%E9%9B%86%E4%BB%98%E8%B4%B98.8%E5%85%83%23) `257.5K 🔥` `NEW`
1. [马斯克点赞宇树机甲](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%82%B9%E8%B5%9E%E5%AE%87%E6%A0%91%E6%9C%BA%E7%94%B2%23) `256.4K 🔥` `NEW`
1. [小猫主宰我 626](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%B8%BB%E5%AE%B0%E6%88%91%20626%23) `254.9K 🔥` `NEW`
1. [碎叫叫向商家道歉](https://s.weibo.com/weibo?q=%23%E7%A2%8E%E5%8F%AB%E5%8F%AB%E5%90%91%E5%95%86%E5%AE%B6%E9%81%93%E6%AD%89%23) `252.9K 🔥` `NEW`
1. [520送礼上淘宝现货叠券7.3折起 (520 gifts on Taobao spot stack coupons starting at 23% off)](https://s.weibo.com/weibo?q=%23520%E9%80%81%E7%A4%BC%E4%B8%8A%E6%B7%98%E5%AE%9D%E7%8E%B0%E8%B4%A7%E5%8F%A0%E5%88%B87.3%E6%8A%98%E8%B5%B7%23) `1.3M 🔥` `+558%`
1. [揭秘HBN亚洲有效抗老 (Revealing the secret of HBN Asia’s effective anti-aging effect)](https://s.weibo.com/weibo?q=%23%E6%8F%AD%E7%A7%98HBN%E4%BA%9A%E6%B4%B2%E6%9C%89%E6%95%88%E6%8A%97%E8%80%81%23) `885.0K 🔥` `+154%`
1. [任何关系都是阶段性陪伴](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E4%BD%95%E5%85%B3%E7%B3%BB%E9%83%BD%E6%98%AF%E9%98%B6%E6%AE%B5%E6%80%A7%E9%99%AA%E4%BC%B4%23) `427.7K 🔥` `+52%`
1. [一天内2个NBA球员去世](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A4%A9%E5%86%852%E4%B8%AANBA%E7%90%83%E5%91%98%E5%8E%BB%E4%B8%96%23) `361.9K 🔥` `+86%`
1. [特朗普访华 (Trump's visit to China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%23) `3.1M 🔥`
1. [网红糖果掺超高剂量伟哥](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%B3%96%E6%9E%9C%E6%8E%BA%E8%B6%85%E9%AB%98%E5%89%82%E9%87%8F%E4%BC%9F%E5%93%A5%23) `280.7K 🔥`
1. [阿娇 短剧](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A8%87%20%E7%9F%AD%E5%89%A7%23) `393.1K 🔥` `-25%`
1. [迪士尼优速通](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A3%AB%E5%B0%BC%E4%BC%98%E9%80%9F%E9%80%9A%23) `383.4K 🔥` `-63%`
1. [白鹿也被泼水了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B9%9F%E8%A2%AB%E6%B3%BC%E6%B0%B4%E4%BA%86%23) `383.3K 🔥` `-30%`
1. [郑业成不知道佳偶天成被配音](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%9A%E6%88%90%E4%B8%8D%E7%9F%A5%E9%81%93%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%E8%A2%AB%E9%85%8D%E9%9F%B3%23) `284.8K 🔥` `-70%`
1. [中国明星戛纳生图 (Chinese celebrities born in Cannes)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%98%8E%E6%98%9F%E6%88%9B%E7%BA%B3%E7%94%9F%E5%9B%BE%23) `275.2K 🔥` `-35%`
1. [巩俐中文宣布戛纳开幕](https://s.weibo.com/weibo?q=%23%E5%B7%A9%E4%BF%90%E4%B8%AD%E6%96%87%E5%AE%A3%E5%B8%83%E6%88%9B%E7%BA%B3%E5%BC%80%E5%B9%95%23) `271.2K 🔥` `-67%`
1. [跟你们不爱健身的说不清楚](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E4%BD%A0%E4%BB%AC%E4%B8%8D%E7%88%B1%E5%81%A5%E8%BA%AB%E7%9A%84%E8%AF%B4%E4%B8%8D%E6%B8%85%E6%A5%9A%23) `263.7K 🔥` `-36%`
1. [贾跃亭宣布转战机器人业务](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E8%B7%83%E4%BA%AD%E5%AE%A3%E5%B8%83%E8%BD%AC%E6%88%98%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%B8%9A%E5%8A%A1%23) `261.3K 🔥` `-55%`

Updated at 2026-05-13 13:01:41

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
