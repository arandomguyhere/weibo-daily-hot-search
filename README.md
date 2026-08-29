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

1. [吉隆口岸大楼只剩钢筋骨架](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%A4%A7%E6%A5%BC%E5%8F%AA%E5%89%A9%E9%92%A2%E7%AD%8B%E9%AA%A8%E6%9E%B6%23) `1.5M 🔥` `NEW`
1. [刘国梁参加国际乒联会议](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%A2%81%E5%8F%82%E5%8A%A0%E5%9B%BD%E9%99%85%E4%B9%92%E8%81%94%E4%BC%9A%E8%AE%AE%23) `876.0K 🔥` `NEW`
1. [还以为姜妍生娃了](https://s.weibo.com/weibo?q=%23%E8%BF%98%E4%BB%A5%E4%B8%BA%E5%A7%9C%E5%A6%8D%E7%94%9F%E5%A8%83%E4%BA%86%23) `868.7K 🔥` `NEW`
1. [爸妈给的十二斤水果被我扔车站了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E5%A6%88%E7%BB%99%E7%9A%84%E5%8D%81%E4%BA%8C%E6%96%A4%E6%B0%B4%E6%9E%9C%E8%A2%AB%E6%88%91%E6%89%94%E8%BD%A6%E7%AB%99%E4%BA%86%23) `864.9K 🔥` `NEW`
1. [井柏然栾念在娱乐圈的资源](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E6%A0%BE%E5%BF%B5%E5%9C%A8%E5%A8%B1%E4%B9%90%E5%9C%88%E7%9A%84%E8%B5%84%E6%BA%90%23) `844.7K 🔥` `NEW`
1. [古茗爆单](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E8%8C%97%E7%88%86%E5%8D%95%23) `391.6K 🔥` `NEW`
1. [吉隆口岸搜救设备暂未探到生命信号](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%90%9C%E6%95%91%E8%AE%BE%E5%A4%87%E6%9A%82%E6%9C%AA%E6%8E%A2%E5%88%B0%E7%94%9F%E5%91%BD%E4%BF%A1%E5%8F%B7%23) `345.8K 🔥` `NEW`
1. [樊振东vs莫维利亚努](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9Cvs%E8%8E%AB%E7%BB%B4%E5%88%A9%E4%BA%9A%E5%8A%AA%23) `336.0K 🔥` `NEW`
1. [所有感情好的情侣都有一个共同点](https://s.weibo.com/weibo?q=%23%E6%89%80%E6%9C%89%E6%84%9F%E6%83%85%E5%A5%BD%E7%9A%84%E6%83%85%E4%BE%A3%E9%83%BD%E6%9C%89%E4%B8%80%E4%B8%AA%E5%85%B1%E5%90%8C%E7%82%B9%23) `303.4K 🔥` `NEW`
1. [长鑫存储](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E5%AD%98%E5%82%A8%23) `302.5K 🔥` `NEW`
1. [孙千腰以下全是腿](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E8%85%B0%E4%BB%A5%E4%B8%8B%E5%85%A8%E6%98%AF%E8%85%BF%23) `301.9K 🔥` `NEW`
1. [王俊凯南京场把彩带放进伴手礼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8D%97%E4%BA%AC%E5%9C%BA%E6%8A%8A%E5%BD%A9%E5%B8%A6%E6%94%BE%E8%BF%9B%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `301.2K 🔥` `NEW`
1. [吉隆灾后72小时](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E7%81%BE%E5%90%8E72%E5%B0%8F%E6%97%B6%23) `301.0K 🔥` `NEW`
1. [长鑫LPDDR6量产](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%ABLPDDR6%E9%87%8F%E4%BA%A7%23) `300.7K 🔥` `NEW`
1. [以为迪丽热巴要媚原来衣服挂到了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A6%81%E5%AA%9A%E5%8E%9F%E6%9D%A5%E8%A1%A3%E6%9C%8D%E6%8C%82%E5%88%B0%E4%BA%86%23) `284.3K 🔥` `NEW`
1. [李荣浩包场早春晴朗](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E5%8C%85%E5%9C%BA%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `255.3K 🔥` `NEW`
1. [尼泊尔泥石流2426人失联](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%B3%A5%E7%9F%B3%E6%B5%812426%E4%BA%BA%E5%A4%B1%E8%81%94%23) `222.8K 🔥` `NEW`
1. [官方回应建议取消ETC设备使用](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E5%BB%BA%E8%AE%AE%E5%8F%96%E6%B6%88ETC%E8%AE%BE%E5%A4%87%E4%BD%BF%E7%94%A8%23) `219.0K 🔥` `NEW`
1. [女子偷用超市脱毛仪现场脱腋毛](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%81%B7%E7%94%A8%E8%B6%85%E5%B8%82%E8%84%B1%E6%AF%9B%E4%BB%AA%E7%8E%B0%E5%9C%BA%E8%84%B1%E8%85%8B%E6%AF%9B%23) `218.7K 🔥` `NEW`
1. [西藏泥石流](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `218.7K 🔥` `NEW`
1. [包贝尔 包文婧](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%20%E5%8C%85%E6%96%87%E5%A9%A7%23) `218.7K 🔥` `NEW`
1. [余承东上手华为全新三折叠](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E4%B8%8A%E6%89%8B%E5%8D%8E%E4%B8%BA%E5%85%A8%E6%96%B0%E4%B8%89%E6%8A%98%E5%8F%A0%23) `215.9K 🔥` `NEW`
1. [白鹿更改简介](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9B%B4%E6%94%B9%E7%AE%80%E4%BB%8B%23) `215.9K 🔥` `NEW`
1. [刘翔 安置](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%20%E5%AE%89%E7%BD%AE%23) `215.5K 🔥` `NEW`
1. [现在的月饼都这么卷了吗](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E6%9C%88%E9%A5%BC%E9%83%BD%E8%BF%99%E4%B9%88%E5%8D%B7%E4%BA%86%E5%90%97%23) `209.6K 🔥` `NEW`
1. [俩李飞都去看TOP演唱会了](https://s.weibo.com/weibo?q=%23%E4%BF%A9%E6%9D%8E%E9%A3%9E%E9%83%BD%E5%8E%BB%E7%9C%8BTOP%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%86%23) `197.0K 🔥` `NEW`
1. [长鑫存储起诉五角大楼](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E5%AD%98%E5%82%A8%E8%B5%B7%E8%AF%89%E4%BA%94%E8%A7%92%E5%A4%A7%E6%A5%BC%23) `186.0K 🔥` `NEW`
1. [突然意识到自己上年纪的瞬间](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E8%87%AA%E5%B7%B1%E4%B8%8A%E5%B9%B4%E7%BA%AA%E7%9A%84%E7%9E%AC%E9%97%B4%23) `182.1K 🔥` `NEW`
1. [管泽元或无缘世界赛](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%E6%88%96%E6%97%A0%E7%BC%98%E4%B8%96%E7%95%8C%E8%B5%9B%23) `173.1K 🔥` `NEW`
1. [上海用纸片买面包太超前了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%A8%E7%BA%B8%E7%89%87%E4%B9%B0%E9%9D%A2%E5%8C%85%E5%A4%AA%E8%B6%85%E5%89%8D%E4%BA%86%23) `168.0K 🔥` `NEW`
1. [虞书欣帮粉丝挡胳膊肉](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B8%AE%E7%B2%89%E4%B8%9D%E6%8C%A1%E8%83%B3%E8%86%8A%E8%82%89%23) `167.4K 🔥` `NEW`
1. [距离尼泊尔洪水现场最近的实拍影像](https://s.weibo.com/weibo?q=%23%E8%B7%9D%E7%A6%BB%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%B4%AA%E6%B0%B4%E7%8E%B0%E5%9C%BA%E6%9C%80%E8%BF%91%E7%9A%84%E5%AE%9E%E6%8B%8D%E5%BD%B1%E5%83%8F%23) `166.7K 🔥` `NEW`
1. [吉隆口岸几乎变成一片废墟](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%87%A0%E4%B9%8E%E5%8F%98%E6%88%90%E4%B8%80%E7%89%87%E5%BA%9F%E5%A2%9F%23) `164.0K 🔥` `NEW`
1. [日常抗炎饮食与作息心得](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%B8%B8%E6%8A%97%E7%82%8E%E9%A5%AE%E9%A3%9F%E4%B8%8E%E4%BD%9C%E6%81%AF%E5%BF%83%E5%BE%97%23) `161.7K 🔥` `NEW`
1. [用这种微信头像或被封号](https://s.weibo.com/weibo?q=%23%E7%94%A8%E8%BF%99%E7%A7%8D%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F%E6%88%96%E8%A2%AB%E5%B0%81%E5%8F%B7%23) `153.0K 🔥` `NEW`
1. [老钱风见多了第一次见老田风](https://s.weibo.com/weibo?q=%23%E8%80%81%E9%92%B1%E9%A3%8E%E8%A7%81%E5%A4%9A%E4%BA%86%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E8%80%81%E7%94%B0%E9%A3%8E%23) `148.5K 🔥` `NEW`
1. [一觉醒来金价快速下跌](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%A7%89%E9%86%92%E6%9D%A5%E9%87%91%E4%BB%B7%E5%BF%AB%E9%80%9F%E4%B8%8B%E8%B7%8C%23) `146.7K 🔥` `NEW`
1. [邓家佳聊和娄艺潇李金铭聚会](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%AE%B6%E4%BD%B3%E8%81%8A%E5%92%8C%E5%A8%84%E8%89%BA%E6%BD%87%E6%9D%8E%E9%87%91%E9%93%AD%E8%81%9A%E4%BC%9A%23) `143.0K 🔥` `NEW`
1. [录音的基本原理](https://s.weibo.com/weibo?q=%23%E5%BD%95%E9%9F%B3%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86%23) `129.9K 🔥` `NEW`
1. [奇瑞魔性回应速成车](https://s.weibo.com/weibo?q=%23%E5%A5%87%E7%91%9E%E9%AD%94%E6%80%A7%E5%9B%9E%E5%BA%94%E9%80%9F%E6%88%90%E8%BD%A6%23) `129.6K 🔥` `NEW`
1. [早春晴朗破万](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E7%A0%B4%E4%B8%87%23) `128.3K 🔥` `NEW`
1. [张予曦给颜安道歉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E7%BB%99%E9%A2%9C%E5%AE%89%E9%81%93%E6%AD%89%23) `126.3K 🔥` `NEW`
1. [郑丽文向西藏灾区捐款200万新台币](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E5%90%91%E8%A5%BF%E8%97%8F%E7%81%BE%E5%8C%BA%E6%8D%90%E6%AC%BE200%E4%B8%87%E6%96%B0%E5%8F%B0%E5%B8%81%23) `125.5K 🔥` `NEW`
1. [那英说汪苏泷婚纱造型太时髦](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E8%AF%B4%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%A9%9A%E7%BA%B1%E9%80%A0%E5%9E%8B%E5%A4%AA%E6%97%B6%E9%AB%A6%23) `124.5K 🔥` `NEW`
1. [全国中小学将完成新教材全部替换](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E4%B8%AD%E5%B0%8F%E5%AD%A6%E5%B0%86%E5%AE%8C%E6%88%90%E6%96%B0%E6%95%99%E6%9D%90%E5%85%A8%E9%83%A8%E6%9B%BF%E6%8D%A2%23) `123.5K 🔥` `NEW`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `222.3K 🔥` `+316%`
1. [第六届中国新电商大会](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E5%85%AD%E5%B1%8A%E4%B8%AD%E5%9B%BD%E6%96%B0%E7%94%B5%E5%95%86%E5%A4%A7%E4%BC%9A%23) `869.2K 🔥`
1. [新生儿792万 性别比改善](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%94%9F%E5%84%BF792%E4%B8%87%20%E6%80%A7%E5%88%AB%E6%AF%94%E6%94%B9%E5%96%84%23) `199.4K 🔥` `-74%`
1. [谷爱凌线下活动路透](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%BA%BF%E4%B8%8B%E6%B4%BB%E5%8A%A8%E8%B7%AF%E9%80%8F%23) `145.8K 🔥` `-80%`

Updated at 2026-08-29 18:28:31

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
