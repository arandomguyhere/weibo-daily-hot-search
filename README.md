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

1. [佛得角门将收不续约通知 (Cape Verde goalkeeper receives notice of non-renewal of contract)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E6%94%B6%E4%B8%8D%E7%BB%AD%E7%BA%A6%E9%80%9A%E7%9F%A5%23) `2.8M 🔥` `NEW`
1. [外国游客讽刺中国人不洗澡引众怒](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E6%B8%B8%E5%AE%A2%E8%AE%BD%E5%88%BA%E4%B8%AD%E5%9B%BD%E4%BA%BA%E4%B8%8D%E6%B4%97%E6%BE%A1%E5%BC%95%E4%BC%97%E6%80%92%23) `2.1M 🔥` `NEW`
1. [明天起高考成绩陆续公布](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%A4%A9%E8%B5%B7%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%E9%99%86%E7%BB%AD%E5%85%AC%E5%B8%83%23) `1.6M 🔥` `NEW`
1. [恋与深空 第六个男主](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%20%E7%AC%AC%E5%85%AD%E4%B8%AA%E7%94%B7%E4%B8%BB%23) `1.6M 🔥` `NEW`
1. [TF练习生全新证件照](https://s.weibo.com/weibo?q=%23TF%E7%BB%83%E4%B9%A0%E7%94%9F%E5%85%A8%E6%96%B0%E8%AF%81%E4%BB%B6%E7%85%A7%23) `1.6M 🔥` `NEW`
1. [佛得角门将世界杯前告别球队](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E4%B8%96%E7%95%8C%E6%9D%AF%E5%89%8D%E5%91%8A%E5%88%AB%E7%90%83%E9%98%9F%23) `1.0M 🔥` `NEW`
1. [周星驰功夫女足演员表](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E6%BC%94%E5%91%98%E8%A1%A8%23) `988.9K 🔥` `NEW`
1. [NBA交易](https://s.weibo.com/weibo?q=%23NBA%E4%BA%A4%E6%98%93%23) `670.5K 🔥` `NEW`
1. [迪丽热巴8号球员钰珑](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B48%E5%8F%B7%E7%90%83%E5%91%98%E9%92%B0%E7%8F%91%23) `666.8K 🔥` `NEW`
1. [小米创首个纽北自动驾驶圈速纪录](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%88%9B%E9%A6%96%E4%B8%AA%E7%BA%BD%E5%8C%97%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E5%9C%88%E9%80%9F%E7%BA%AA%E5%BD%95%23) `663.5K 🔥` `NEW`
1. [韩女要嚼烂宋威龙护照 (Korean woman wants to chew up Song Weilong’s passport)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%A5%B3%E8%A6%81%E5%9A%BC%E7%83%82%E5%AE%8B%E5%A8%81%E9%BE%99%E6%8A%A4%E7%85%A7%23) `653.6K 🔥` `NEW`
1. [杨超越 其实我本人挺好看的放心哈](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%20%E5%85%B6%E5%AE%9E%E6%88%91%E6%9C%AC%E4%BA%BA%E6%8C%BA%E5%A5%BD%E7%9C%8B%E7%9A%84%E6%94%BE%E5%BF%83%E5%93%88%23) `645.6K 🔥` `NEW`
1. [小时候的暑假有种很诡异的感觉](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E7%9A%84%E6%9A%91%E5%81%87%E6%9C%89%E7%A7%8D%E5%BE%88%E8%AF%A1%E5%BC%82%E7%9A%84%E6%84%9F%E8%A7%89%23) `645.6K 🔥` `NEW`
1. [天天192了](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%A4%A9192%E4%BA%86%23) `617.5K 🔥` `NEW`
1. [白鹿叶璃演技口碑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%B6%E7%92%83%E6%BC%94%E6%8A%80%E5%8F%A3%E7%A2%91%23) `555.6K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `455.3K 🔥` `NEW`
1. [南派三叔质疑南部档案热度](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%B4%BE%E4%B8%89%E5%8F%94%E8%B4%A8%E7%96%91%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%E7%83%AD%E5%BA%A6%23) `452.6K 🔥` `NEW`
1. [Prada米兰男装秀场](https://s.weibo.com/weibo?q=%23Prada%E7%B1%B3%E5%85%B0%E7%94%B7%E8%A3%85%E7%A7%80%E5%9C%BA%23) `451.3K 🔥` `NEW`
1. [曾接住坠楼女童的男子又跳海救女孩](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%8E%A5%E4%BD%8F%E5%9D%A0%E6%A5%BC%E5%A5%B3%E7%AB%A5%E7%9A%84%E7%94%B7%E5%AD%90%E5%8F%88%E8%B7%B3%E6%B5%B7%E6%95%91%E5%A5%B3%E5%AD%A9%23) `445.8K 🔥` `NEW`
1. [国产呼吸机比进口便宜8成仍卖不动](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E5%91%BC%E5%90%B8%E6%9C%BA%E6%AF%94%E8%BF%9B%E5%8F%A3%E4%BE%BF%E5%AE%9C8%E6%88%90%E4%BB%8D%E5%8D%96%E4%B8%8D%E5%8A%A8%23) `444.5K 🔥` `NEW`
1. [张亮天天共用一张脸 (Zhang Liang shares the same face every day)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%AE%E5%A4%A9%E5%A4%A9%E5%85%B1%E7%94%A8%E4%B8%80%E5%BC%A0%E8%84%B8%23) `438.9K 🔥` `NEW`
1. [女子未婚生女后被生父诉要抚养费](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9C%AA%E5%A9%9A%E7%94%9F%E5%A5%B3%E5%90%8E%E8%A2%AB%E7%94%9F%E7%88%B6%E8%AF%89%E8%A6%81%E6%8A%9A%E5%85%BB%E8%B4%B9%23) `436.7K 🔥` `NEW`
1. [向太和向佑和解归功于向佐](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E5%92%8C%E5%90%91%E4%BD%91%E5%92%8C%E8%A7%A3%E5%BD%92%E5%8A%9F%E4%BA%8E%E5%90%91%E4%BD%90%23) `434.9K 🔥` `NEW`
1. [张凌赫上早班没睡醒](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%8A%E6%97%A9%E7%8F%AD%E6%B2%A1%E7%9D%A1%E9%86%92%23) `391.9K 🔥` `NEW`
1. [金价暴跌黄金该买还是该卖](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%9A%B4%E8%B7%8C%E9%BB%84%E9%87%91%E8%AF%A5%E4%B9%B0%E8%BF%98%E6%98%AF%E8%AF%A5%E5%8D%96%23) `367.9K 🔥` `NEW`
1. [白鹿丞磊莫离分手文案](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%9E%E7%A3%8A%E8%8E%AB%E7%A6%BB%E5%88%86%E6%89%8B%E6%96%87%E6%A1%88%23) `367.8K 🔥` `NEW`
1. [生日朋友圈发了三天了](https://s.weibo.com/weibo?q=%23%E7%94%9F%E6%97%A5%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%8F%91%E4%BA%86%E4%B8%89%E5%A4%A9%E4%BA%86%23) `359.7K 🔥` `NEW`
1. [王濛万千惠聊天记录](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E4%B8%87%E5%8D%83%E6%83%A0%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `352.4K 🔥` `NEW`
1. [佛得角逼平两个世界冠军](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%80%BC%E5%B9%B3%E4%B8%A4%E4%B8%AA%E4%B8%96%E7%95%8C%E5%86%A0%E5%86%9B%23) `344.0K 🔥` `NEW`
1. [王俊凯听到黄晓明要男女混住就这样](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%90%AC%E5%88%B0%E9%BB%84%E6%99%93%E6%98%8E%E8%A6%81%E7%94%B7%E5%A5%B3%E6%B7%B7%E4%BD%8F%E5%B0%B1%E8%BF%99%E6%A0%B7%23) `343.4K 🔥` `NEW`
1. [男子拖欠16万抚养费直至女儿病逝 (Man defaulted on 160,000 yuan in child support until his daughter died of illness)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8B%96%E6%AC%A016%E4%B8%87%E6%8A%9A%E5%85%BB%E8%B4%B9%E7%9B%B4%E8%87%B3%E5%A5%B3%E5%84%BF%E7%97%85%E9%80%9D%23) `342.9K 🔥` `NEW`
1. [周星驰功夫女足7月上映](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B37%E6%9C%88%E4%B8%8A%E6%98%A0%23) `342.1K 🔥` `NEW`
1. [我不知道您是怎么了](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8D%E7%9F%A5%E9%81%93%E6%82%A8%E6%98%AF%E6%80%8E%E4%B9%88%E4%BA%86%23) `314.1K 🔥` `NEW`
1. [排队给西班牙道歉](https://s.weibo.com/weibo?q=%23%E6%8E%92%E9%98%9F%E7%BB%99%E8%A5%BF%E7%8F%AD%E7%89%99%E9%81%93%E6%AD%89%23) `304.1K 🔥` `NEW`
1. [向佑回复向太想你爱你](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%91%E5%9B%9E%E5%A4%8D%E5%90%91%E5%A4%AA%E6%83%B3%E4%BD%A0%E7%88%B1%E4%BD%A0%23) `295.1K 🔥` `NEW`
1. [王晓慧不进演艺圈的原因](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%93%E6%85%A7%E4%B8%8D%E8%BF%9B%E6%BC%94%E8%89%BA%E5%9C%88%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `290.5K 🔥` `NEW`
1. [陆毅鲍蕾一家四口复刻旧照](https://s.weibo.com/weibo?q=%23%E9%99%86%E6%AF%85%E9%B2%8D%E8%95%BE%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%E5%A4%8D%E5%88%BB%E6%97%A7%E7%85%A7%23) `288.5K 🔥` `NEW`
1. [汪苏泷明日世界十首完整呈现](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%98%8E%E6%97%A5%E4%B8%96%E7%95%8C%E5%8D%81%E9%A6%96%E5%AE%8C%E6%95%B4%E5%91%88%E7%8E%B0%23) `287.1K 🔥` `NEW`
1. [乌拉圭门将超巨失误](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E6%8B%89%E5%9C%AD%E9%97%A8%E5%B0%86%E8%B6%85%E5%B7%A8%E5%A4%B1%E8%AF%AF%23) `286.6K 🔥` `NEW`
1. [哪个男人劈腿是因为小三做饭好吃](https://s.weibo.com/weibo?q=%23%E5%93%AA%E4%B8%AA%E7%94%B7%E4%BA%BA%E5%8A%88%E8%85%BF%E6%98%AF%E5%9B%A0%E4%B8%BA%E5%B0%8F%E4%B8%89%E5%81%9A%E9%A5%AD%E5%A5%BD%E5%90%83%23) `285.0K 🔥` `NEW`
1. [成年人的见面真的很贵 (Adult meetings are really expensive)](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E8%A7%81%E9%9D%A2%E7%9C%9F%E7%9A%84%E5%BE%88%E8%B4%B5%23) `257.7K 🔥` `NEW`
1. [高考出分前偷偷改密码](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%87%BA%E5%88%86%E5%89%8D%E5%81%B7%E5%81%B7%E6%94%B9%E5%AF%86%E7%A0%81%23) `250.2K 🔥` `NEW`
1. [金榜题名红包雨](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%A6%9C%E9%A2%98%E5%90%8D%E7%BA%A2%E5%8C%85%E9%9B%A8%23) `249.4K 🔥` `NEW`
1. [雪中悍刀行人物建模曝光](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E4%B8%AD%E6%82%8D%E5%88%80%E8%A1%8C%E4%BA%BA%E7%89%A9%E5%BB%BA%E6%A8%A1%E6%9B%9D%E5%85%89%23) `244.8K 🔥` `NEW`
1. [王橹杰证件照四年成长史](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%AF%81%E4%BB%B6%E7%85%A7%E5%9B%9B%E5%B9%B4%E6%88%90%E9%95%BF%E5%8F%B2%23) `239.2K 🔥` `NEW`
1. [半熟恋人5](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E7%86%9F%E6%81%8B%E4%BA%BA5%23) `204.3K 🔥` `NEW`
1. [小鹏MONA首款SUV命名L03](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONA%E9%A6%96%E6%AC%BESUV%E5%91%BD%E5%90%8DL03%23) `202.3K 🔥` `NEW`
1. [李想称汽车业进入不服就直播状态](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%83%B3%E7%A7%B0%E6%B1%BD%E8%BD%A6%E4%B8%9A%E8%BF%9B%E5%85%A5%E4%B8%8D%E6%9C%8D%E5%B0%B1%E7%9B%B4%E6%92%AD%E7%8A%B6%E6%80%81%23) `200.2K 🔥` `NEW`
1. [港股智谱总市值突破1万亿港元](https://s.weibo.com/weibo?q=%23%E6%B8%AF%E8%82%A1%E6%99%BA%E8%B0%B1%E6%80%BB%E5%B8%82%E5%80%BC%E7%AA%81%E7%A0%B41%E4%B8%87%E4%BA%BF%E6%B8%AF%E5%85%83%23) `196.2K 🔥` `NEW`
1. [红魔平板居然有水冷 (The Red Magic Tablet actually has water cooling)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E9%AD%94%E5%B9%B3%E6%9D%BF%E5%B1%85%E7%84%B6%E6%9C%89%E6%B0%B4%E5%86%B7%23) `1.6M 🔥` `+871%`

Updated at 2026-06-22 13:30:46

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
