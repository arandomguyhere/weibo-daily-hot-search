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

1. [开屏广告没了 (Open screen ads are gone)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%8F%E5%B9%BF%E5%91%8A%E6%B2%A1%E4%BA%86%23) `1.7M 🔥` `NEW`
1. [第四届链博会四大亮点](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E5%9B%9B%E5%B1%8A%E9%93%BE%E5%8D%9A%E4%BC%9A%E5%9B%9B%E5%A4%A7%E4%BA%AE%E7%82%B9%23) `716.5K 🔥` `NEW`
1. [上海高考分数线公布](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%E5%85%AC%E5%B8%83%23) `566.1K 🔥` `NEW`
1. [不准问价的网红卤菜店已闭店](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%87%86%E9%97%AE%E4%BB%B7%E7%9A%84%E7%BD%91%E7%BA%A2%E5%8D%A4%E8%8F%9C%E5%BA%97%E5%B7%B2%E9%97%AD%E5%BA%97%23) `544.0K 🔥` `NEW`
1. [南部档案be](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88be%23) `524.3K 🔥` `NEW`
1. [女装退货率终于有救了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E9%80%80%E8%B4%A7%E7%8E%87%E7%BB%88%E4%BA%8E%E6%9C%89%E6%95%91%E4%BA%86%23) `435.3K 🔥` `NEW`
1. [叫全名是一件很微妙的事](https://s.weibo.com/weibo?q=%23%E5%8F%AB%E5%85%A8%E5%90%8D%E6%98%AF%E4%B8%80%E4%BB%B6%E5%BE%88%E5%BE%AE%E5%A6%99%E7%9A%84%E4%BA%8B%23) `407.4K 🔥` `NEW`
1. [南部档案大结局](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%E5%A4%A7%E7%BB%93%E5%B1%80%23) `405.1K 🔥` `NEW`
1. [李金铭回应](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%9B%9E%E5%BA%94%23) `401.4K 🔥` `NEW`
1. [王鹤棣给王彦霖女儿寄了六十多件衣服](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%BB%99%E7%8E%8B%E5%BD%A6%E9%9C%96%E5%A5%B3%E5%84%BF%E5%AF%84%E4%BA%86%E5%85%AD%E5%8D%81%E5%A4%9A%E4%BB%B6%E8%A1%A3%E6%9C%8D%23) `359.7K 🔥` `NEW`
1. [TF家族开通ins (TF family opens ins)](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E5%BC%80%E9%80%9Ains%23) `305.3K 🔥` `NEW`
1. [在图书馆被紫外消毒灯照了12个小时](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%9B%BE%E4%B9%A6%E9%A6%86%E8%A2%AB%E7%B4%AB%E5%A4%96%E6%B6%88%E6%AF%92%E7%81%AF%E7%85%A7%E4%BA%8612%E4%B8%AA%E5%B0%8F%E6%97%B6%23) `298.0K 🔥` `NEW`
1. [葡萄牙主教练力挺C罗](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E4%B8%BB%E6%95%99%E7%BB%83%E5%8A%9B%E6%8C%BAC%E7%BD%97%23) `298.0K 🔥` `NEW`
1. [刘宇宁不经意叫宝宝](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E4%B8%8D%E7%BB%8F%E6%84%8F%E5%8F%AB%E5%AE%9D%E5%AE%9D%23) `297.9K 🔥` `NEW`
1. [库拉索允许球员与伴侣同住](https://s.weibo.com/weibo?q=%23%E5%BA%93%E6%8B%89%E7%B4%A2%E5%85%81%E8%AE%B8%E7%90%83%E5%91%98%E4%B8%8E%E4%BC%B4%E4%BE%A3%E5%90%8C%E4%BD%8F%23) `297.9K 🔥` `NEW`
1. [马嘉祺22级中戏男生第一](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA22%E7%BA%A7%E4%B8%AD%E6%88%8F%E7%94%B7%E7%94%9F%E7%AC%AC%E4%B8%80%23) `297.9K 🔥` `NEW`
1. [李金铭假婆婆事件暴露三大核心问题](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%81%87%E5%A9%86%E5%A9%86%E4%BA%8B%E4%BB%B6%E6%9A%B4%E9%9C%B2%E4%B8%89%E5%A4%A7%E6%A0%B8%E5%BF%83%E9%97%AE%E9%A2%98%23) `297.9K 🔥` `NEW`
1. [恋与深空F5海报存档](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BAF5%E6%B5%B7%E6%8A%A5%E5%AD%98%E6%A1%A3%23) `297.8K 🔥` `NEW`
1. [蔡依林天津演唱会取消](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%A4%A9%E6%B4%A5%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%96%E6%B6%88%23) `296.9K 🔥` `NEW`
1. [陈奕恒 多做你们喜欢的发型](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%20%E5%A4%9A%E5%81%9A%E4%BD%A0%E4%BB%AC%E5%96%9C%E6%AC%A2%E7%9A%84%E5%8F%91%E5%9E%8B%23) `296.1K 🔥` `NEW`
1. [网红卤菜店生客消费要看身份证 (Internet celebrity braised vegetable restaurant requires strangers to see their ID cards when making purchases)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%8D%A4%E8%8F%9C%E5%BA%97%E7%94%9F%E5%AE%A2%E6%B6%88%E8%B4%B9%E8%A6%81%E7%9C%8B%E8%BA%AB%E4%BB%BD%E8%AF%81%23) `295.1K 🔥` `NEW`
1. [南部档案 南派三叔](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%20%E5%8D%97%E6%B4%BE%E4%B8%89%E5%8F%94%23) `290.4K 🔥` `NEW`
1. [美存储芯片光通信盘前暴跌](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E5%85%89%E9%80%9A%E4%BF%A1%E7%9B%98%E5%89%8D%E6%9A%B4%E8%B7%8C%23) `283.0K 🔥` `NEW`
1. [向太谈郭碧婷缺点](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%B0%88%E9%83%AD%E7%A2%A7%E5%A9%B7%E7%BC%BA%E7%82%B9%23) `282.7K 🔥` `NEW`
1. [恋与深空新男主评论区太好笑了](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%96%B0%E7%94%B7%E4%B8%BB%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%A4%AA%E5%A5%BD%E7%AC%91%E4%BA%86%23) `270.3K 🔥` `NEW`
1. [张海侠下线](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B5%B7%E4%BE%A0%E4%B8%8B%E7%BA%BF%23) `263.9K 🔥` `NEW`
1. [时代峰峻伙食](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E4%BC%99%E9%A3%9F%23) `244.0K 🔥` `NEW`
1. [请把眼镜焊在王楚钦脸上](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%8A%8A%E7%9C%BC%E9%95%9C%E7%84%8A%E5%9C%A8%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%84%B8%E4%B8%8A%23) `233.1K 🔥` `NEW`
1. [陈哲远两次认错邓为](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E4%B8%A4%E6%AC%A1%E8%AE%A4%E9%94%99%E9%82%93%E4%B8%BA%23) `232.5K 🔥` `NEW`
1. [张海侠被张海楼杀死](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B5%B7%E4%BE%A0%E8%A2%AB%E5%BC%A0%E6%B5%B7%E6%A5%BC%E6%9D%80%E6%AD%BB%23) `206.8K 🔥` `NEW`
1. [执法人员开公车收礼被监控拍下 (Law enforcement officers driving a bus to accept gifts were caught on camera)](https://s.weibo.com/weibo?q=%23%E6%89%A7%E6%B3%95%E4%BA%BA%E5%91%98%E5%BC%80%E5%85%AC%E8%BD%A6%E6%94%B6%E7%A4%BC%E8%A2%AB%E7%9B%91%E6%8E%A7%E6%8B%8D%E4%B8%8B%23) `204.7K 🔥` `NEW`
1. [南派三叔我恨你](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%B4%BE%E4%B8%89%E5%8F%94%E6%88%91%E6%81%A8%E4%BD%A0%23) `203.3K 🔥` `NEW`
1. [何宣林方否认换角](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E6%96%B9%E5%90%A6%E8%AE%A4%E6%8D%A2%E8%A7%92%23) `183.4K 🔥` `NEW`
1. [穆祉丞巡演嘉宾不是张峻豪张子墨](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%B7%A1%E6%BC%94%E5%98%89%E5%AE%BE%E4%B8%8D%E6%98%AF%E5%BC%A0%E5%B3%BB%E8%B1%AA%E5%BC%A0%E5%AD%90%E5%A2%A8%23) `182.0K 🔥` `NEW`
1. [莫离](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%23) `177.0K 🔥` `NEW`
1. [王俊凯预告新专辑](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%A2%84%E5%91%8A%E6%96%B0%E4%B8%93%E8%BE%91%23) `176.6K 🔥` `NEW`
1. [谁给杨博文戴耳钉的](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E6%9D%A8%E5%8D%9A%E6%96%87%E6%88%B4%E8%80%B3%E9%92%89%E7%9A%84%23) `173.6K 🔥` `NEW`
1. [开屏广告](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%8F%E5%B9%BF%E5%91%8A%23) `171.7K 🔥` `NEW`
1. [终于懂韩国人看我们吃西瓜的感觉了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%87%82%E9%9F%A9%E5%9B%BD%E4%BA%BA%E7%9C%8B%E6%88%91%E4%BB%AC%E5%90%83%E8%A5%BF%E7%93%9C%E7%9A%84%E6%84%9F%E8%A7%89%E4%BA%86%23) `486.0K 🔥` `+23%`
1. [金价狂泻30%](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E7%8B%82%E6%B3%BB30%25%23) `376.9K 🔥`
1. [乔欣变样了 (Qiao Xin has changed)](https://s.weibo.com/weibo?q=%23%E4%B9%94%E6%AC%A3%E5%8F%98%E6%A0%B7%E4%BA%86%23) `336.1K 🔥`
1. [公司开始上四休三了但降工资](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E5%BC%80%E5%A7%8B%E4%B8%8A%E5%9B%9B%E4%BC%91%E4%B8%89%E4%BA%86%E4%BD%86%E9%99%8D%E5%B7%A5%E8%B5%84%23) `319.9K 🔥`
1. [女孩中考查分查到隐藏款](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%B8%AD%E8%80%83%E6%9F%A5%E5%88%86%E6%9F%A5%E5%88%B0%E9%9A%90%E8%97%8F%E6%AC%BE%23) `298.0K 🔥`
1. [高考成绩 (College Entrance Examination Results)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%23) `1.2M 🔥` `-31%`
1. [微信迎史上最大更新 (WeChat welcomes biggest update in history)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%BF%8E%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7%E6%9B%B4%E6%96%B0%23) `297.9K 🔥` `-90%`
1. [恋与深空 (Love and deep space)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `257.6K 🔥` `-68%`
1. [马嘉祺宋亚轩没拍毕业合照](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%B2%A1%E6%8B%8D%E6%AF%95%E4%B8%9A%E5%90%88%E7%85%A7%23) `226.7K 🔥` `-41%`
1. [A4纸.zip](https://s.weibo.com/weibo?q=%23A4%E7%BA%B8.zip%23) `182.6K 🔥` `-51%`
1. [黄金 (gold)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `176.8K 🔥` `-54%`
1. [迪丽热巴利剑玫瑰8.1掉到6.4](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%88%A9%E5%89%91%E7%8E%AB%E7%91%B08.1%E6%8E%89%E5%88%B06.4%23) `170.0K 🔥` `-73%`

Updated at 2026-06-23 19:32:59

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
