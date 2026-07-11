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

1. [台风巴威又睁眼了 (Typhoon Bavi opens its eyes again)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%8F%88%E7%9D%81%E7%9C%BC%E4%BA%86%23) `12.7M 🔥` `NEW`
1. [难看](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E7%9C%8B%23) `3.2M 🔥` `NEW`
1. [看广西洪灾中的救援硬核科技](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%B9%BF%E8%A5%BF%E6%B4%AA%E7%81%BE%E4%B8%AD%E7%9A%84%E6%95%91%E6%8F%B4%E7%A1%AC%E6%A0%B8%E7%A7%91%E6%8A%80%23) `1.7M 🔥` `NEW`
1. [功夫女足票房](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%23) `1.4M 🔥` `NEW`
1. [电视剧公主官宣](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%E5%85%AC%E4%B8%BB%E5%AE%98%E5%AE%A3%23) `899.2K 🔥` `NEW`
1. [第一次被同事带的饭震惊到](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A2%AB%E5%90%8C%E4%BA%8B%E5%B8%A6%E7%9A%84%E9%A5%AD%E9%9C%87%E6%83%8A%E5%88%B0%23) `784.4K 🔥` `NEW`
1. [10省市大暴雨特大暴雨](https://s.weibo.com/weibo?q=%2310%E7%9C%81%E5%B8%82%E5%A4%A7%E6%9A%B4%E9%9B%A8%E7%89%B9%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `567.1K 🔥` `NEW`
1. [C罗更新葡萄牙欧洲杯夺冠照](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%9B%B4%E6%96%B0%E8%91%A1%E8%90%84%E7%89%99%E6%AC%A7%E6%B4%B2%E6%9D%AF%E5%A4%BA%E5%86%A0%E7%85%A7%23) `486.4K 🔥` `NEW`
1. [哈兰德和偷拍者互拍](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%92%8C%E5%81%B7%E6%8B%8D%E8%80%85%E4%BA%92%E6%8B%8D%23) `323.1K 🔥` `NEW`
1. [李钟硕恋爱期间与女生双手插兜](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%92%9F%E7%A1%95%E6%81%8B%E7%88%B1%E6%9C%9F%E9%97%B4%E4%B8%8E%E5%A5%B3%E7%94%9F%E5%8F%8C%E6%89%8B%E6%8F%92%E5%85%9C%23) `320.4K 🔥` `NEW`
1. [孟子义你要毁了张真源吗 (Meng Ziyi, are you going to destroy Zhang Zhenyuan?)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E4%BD%A0%E8%A6%81%E6%AF%81%E4%BA%86%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%90%97%23) `313.9K 🔥` `NEW`
1. [台风巴威七级风圈开始影响浙江](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E4%B8%83%E7%BA%A7%E9%A3%8E%E5%9C%88%E5%BC%80%E5%A7%8B%E5%BD%B1%E5%93%8D%E6%B5%99%E6%B1%9F%23) `310.3K 🔥` `NEW`
1. [冉莹颖三个儿子不同姓](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E4%B8%89%E4%B8%AA%E5%84%BF%E5%AD%90%E4%B8%8D%E5%90%8C%E5%A7%93%23) `309.0K 🔥` `NEW`
1. [小米痛斥澎程被批量抹黑](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E7%97%9B%E6%96%A5%E6%BE%8E%E7%A8%8B%E8%A2%AB%E6%89%B9%E9%87%8F%E6%8A%B9%E9%BB%91%23) `306.1K 🔥` `NEW`
1. [欧盟拿北京鸭开刀](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E7%9B%9F%E6%8B%BF%E5%8C%97%E4%BA%AC%E9%B8%AD%E5%BC%80%E5%88%80%23) `305.5K 🔥` `NEW`
1. [怪兽充电弹出游戏没有退出键](https://s.weibo.com/weibo?q=%23%E6%80%AA%E5%85%BD%E5%85%85%E7%94%B5%E5%BC%B9%E5%87%BA%E6%B8%B8%E6%88%8F%E6%B2%A1%E6%9C%89%E9%80%80%E5%87%BA%E9%94%AE%23) `303.2K 🔥` `NEW`
1. [杨迪打断王俊凯](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%BF%AA%E6%89%93%E6%96%AD%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `301.3K 🔥` `NEW`
1. [巴威预计凌晨在浙江登陆](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E9%A2%84%E8%AE%A1%E5%87%8C%E6%99%A8%E5%9C%A8%E6%B5%99%E6%B1%9F%E7%99%BB%E9%99%86%23) `299.9K 🔥` `NEW`
1. [陈艾米侯明昊按姓氏笔画排序](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%89%BE%E7%B1%B3%E4%BE%AF%E6%98%8E%E6%98%8A%E6%8C%89%E5%A7%93%E6%B0%8F%E7%AC%94%E7%94%BB%E6%8E%92%E5%BA%8F%23) `297.1K 🔥` `NEW`
1. [迪丽热巴三个月体脂率降到14%](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B8%89%E4%B8%AA%E6%9C%88%E4%BD%93%E8%84%82%E7%8E%87%E9%99%8D%E5%88%B014%25%23) `296.8K 🔥` `NEW`
1. [巴威直奔浙江 (Bawe went straight to Zhejiang)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E7%9B%B4%E5%A5%94%E6%B5%99%E6%B1%9F%23) `294.2K 🔥` `NEW`
1. [王俊凯裤子脏成这样](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%A3%A4%E5%AD%90%E8%84%8F%E6%88%90%E8%BF%99%E6%A0%B7%23) `293.3K 🔥` `NEW`
1. [飞机舷窗炸裂男子头部被吸出窗外](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E6%9C%BA%E8%88%B7%E7%AA%97%E7%82%B8%E8%A3%82%E7%94%B7%E5%AD%90%E5%A4%B4%E9%83%A8%E8%A2%AB%E5%90%B8%E5%87%BA%E7%AA%97%E5%A4%96%23) `291.4K 🔥` `NEW`
1. [李钟硕曾公开隐晦告白IU](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%92%9F%E7%A1%95%E6%9B%BE%E5%85%AC%E5%BC%80%E9%9A%90%E6%99%A6%E5%91%8A%E7%99%BDIU%23) `288.4K 🔥` `NEW`
1. [西班牙绝杀比利时](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%BB%9D%E6%9D%80%E6%AF%94%E5%88%A9%E6%97%B6%23) `288.1K 🔥` `NEW`
1. [女子马上挪车就能解决为何闹大](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%A9%AC%E4%B8%8A%E6%8C%AA%E8%BD%A6%E5%B0%B1%E8%83%BD%E8%A7%A3%E5%86%B3%E4%B8%BA%E4%BD%95%E9%97%B9%E5%A4%A7%23) `285.5K 🔥` `NEW`
1. [陆虎工作室否认送花篮](https://s.weibo.com/weibo?q=%23%E9%99%86%E8%99%8E%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%90%A6%E8%AE%A4%E9%80%81%E8%8A%B1%E7%AF%AE%23) `284.1K 🔥` `NEW`
1. [亚马尔两次0球0助当选最佳](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E4%B8%A4%E6%AC%A10%E7%90%830%E5%8A%A9%E5%BD%93%E9%80%89%E6%9C%80%E4%BD%B3%23) `283.4K 🔥` `NEW`
1. [瓜农2200斤西瓜收瓜贩仅出价20元](https://s.weibo.com/weibo?q=%23%E7%93%9C%E5%86%9C2200%E6%96%A4%E8%A5%BF%E7%93%9C%E6%94%B6%E7%93%9C%E8%B4%A9%E4%BB%85%E5%87%BA%E4%BB%B720%E5%85%83%23) `281.7K 🔥` `NEW`
1. [阿根廷主帅回应裁判偏袒](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%BB%E5%B8%85%E5%9B%9E%E5%BA%94%E8%A3%81%E5%88%A4%E5%81%8F%E8%A2%92%23) `280.9K 🔥` `NEW`
1. [艾米宣完你的宣你的 (Amy declares yours and declares yours)](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E5%AE%A3%E5%AE%8C%E4%BD%A0%E7%9A%84%E5%AE%A3%E4%BD%A0%E7%9A%84%23) `278.7K 🔥` `NEW`
1. [迪丽热巴颠球颠到脚腕肿得像馒头](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%A2%A0%E7%90%83%E9%A2%A0%E5%88%B0%E8%84%9A%E8%85%95%E8%82%BF%E5%BE%97%E5%83%8F%E9%A6%92%E5%A4%B4%23) `277.2K 🔥` `NEW`
1. [周深对选手说您别生气](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%AF%B9%E9%80%89%E6%89%8B%E8%AF%B4%E6%82%A8%E5%88%AB%E7%94%9F%E6%B0%94%23) `273.9K 🔥` `NEW`
1. [电影功夫女足今日上映](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E4%BB%8A%E6%97%A5%E4%B8%8A%E6%98%A0%23) `273.4K 🔥` `NEW`
1. [佛得角球员辟谣裁判照顾阿根廷](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E7%90%83%E5%91%98%E8%BE%9F%E8%B0%A3%E8%A3%81%E5%88%A4%E7%85%A7%E9%A1%BE%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `271.2K 🔥` `NEW`
1. [白鹿出道十年跑男占六年](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%87%BA%E9%81%93%E5%8D%81%E5%B9%B4%E8%B7%91%E7%94%B7%E5%8D%A0%E5%85%AD%E5%B9%B4%23) `269.4K 🔥` `NEW`
1. [宋亚轩助理工作能力](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%8A%A9%E7%90%86%E5%B7%A5%E4%BD%9C%E8%83%BD%E5%8A%9B%23) `268.7K 🔥` `NEW`
1. [中央考核巡查组连说6个乱](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%A4%AE%E8%80%83%E6%A0%B8%E5%B7%A1%E6%9F%A5%E7%BB%84%E8%BF%9E%E8%AF%B46%E4%B8%AA%E4%B9%B1%23) `266.5K 🔥` `NEW`
1. [日本拉面店倒闭潮原因](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8B%89%E9%9D%A2%E5%BA%97%E5%80%92%E9%97%AD%E6%BD%AE%E5%8E%9F%E5%9B%A0%23) `265.2K 🔥` `NEW`
1. [冉莹颖曾是央视财经双语主持人](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E6%9B%BE%E6%98%AF%E5%A4%AE%E8%A7%86%E8%B4%A2%E7%BB%8F%E5%8F%8C%E8%AF%AD%E4%B8%BB%E6%8C%81%E4%BA%BA%23) `264.5K 🔥` `NEW`
1. [杨丞琳说自己是劝离不劝和的人 (Rainie Yang said that she is someone who encourages divorce but not reconciliation.)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E4%B8%9E%E7%90%B3%E8%AF%B4%E8%87%AA%E5%B7%B1%E6%98%AF%E5%8A%9D%E7%A6%BB%E4%B8%8D%E5%8A%9D%E5%92%8C%E7%9A%84%E4%BA%BA%23) `262.3K 🔥` `NEW`
1. [阿德巴约希罗冲突](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%BE%B7%E5%B7%B4%E7%BA%A6%E5%B8%8C%E7%BD%97%E5%86%B2%E7%AA%81%23) `260.9K 🔥` `NEW`
1. [周深为生米对酱油下手了 (Zhou Shen took action on soy sauce to make rice.)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E4%B8%BA%E7%94%9F%E7%B1%B3%E5%AF%B9%E9%85%B1%E6%B2%B9%E4%B8%8B%E6%89%8B%E4%BA%86%23) `580.2K 🔥`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `320.7K 🔥`
1. [工资一样的朋友存款比我多28万](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E8%B5%84%E4%B8%80%E6%A0%B7%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%AD%98%E6%AC%BE%E6%AF%94%E6%88%91%E5%A4%9A28%E4%B8%87%23) `345.4K 🔥` `-75%`
1. [巴威直奔山东](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E7%9B%B4%E5%A5%94%E5%B1%B1%E4%B8%9C%23) `315.5K 🔥` `-78%`
1. [黄晓明在田曦薇素人时期刷过礼物](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%9C%A8%E7%94%B0%E6%9B%A6%E8%96%87%E7%B4%A0%E4%BA%BA%E6%97%B6%E6%9C%9F%E5%88%B7%E8%BF%87%E7%A4%BC%E7%89%A9%23) `311.3K 🔥` `-46%`
1. [周星驰口碑 (Stephen Chow's reputation)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%8F%A3%E7%A2%91%23) `308.1K 🔥` `-67%`
1. [女儿女婿自杀后妈妈投身防性侵宣传 (Mother joins sexual assault prevention campaign after daughter and son-in-law commit suicide)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E5%A5%B3%E5%A9%BF%E8%87%AA%E6%9D%80%E5%90%8E%E5%A6%88%E5%A6%88%E6%8A%95%E8%BA%AB%E9%98%B2%E6%80%A7%E4%BE%B5%E5%AE%A3%E4%BC%A0%23) `301.8K 🔥` `-51%`
1. [广西救援无人机炸机半天修好](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%95%91%E6%8F%B4%E6%97%A0%E4%BA%BA%E6%9C%BA%E7%82%B8%E6%9C%BA%E5%8D%8A%E5%A4%A9%E4%BF%AE%E5%A5%BD%23) `290.5K 🔥` `-28%`
1. [台风巴威实时路径](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%AE%9E%E6%97%B6%E8%B7%AF%E5%BE%84%23) `276.4K 🔥` `-53%`

Updated at 2026-07-11 12:27:55

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
