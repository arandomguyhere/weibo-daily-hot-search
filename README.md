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

1. [手机涨价 卖不动](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%20%E5%8D%96%E4%B8%8D%E5%8A%A8%23) `680.1K 🔥` `NEW`
1. [张一山演技](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%80%E5%B1%B1%E6%BC%94%E6%8A%80%23) `477.9K 🔥` `NEW`
1. [上合示范区释放区域经贸合作新动能](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%90%88%E7%A4%BA%E8%8C%83%E5%8C%BA%E9%87%8A%E6%94%BE%E5%8C%BA%E5%9F%9F%E7%BB%8F%E8%B4%B8%E5%90%88%E4%BD%9C%E6%96%B0%E5%8A%A8%E8%83%BD%23) `431.9K 🔥` `NEW`
1. [花少2](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%23) `404.6K 🔥` `NEW`
1. [那个用防窥屏的朋友](https://s.weibo.com/weibo?q=%23%E9%82%A3%E4%B8%AA%E7%94%A8%E9%98%B2%E7%AA%A5%E5%B1%8F%E7%9A%84%E6%9C%8B%E5%8F%8B%23) `272.3K 🔥` `NEW`
1. [深圳校服为什么引发网友共鸣](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%A0%A1%E6%9C%8D%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BC%95%E5%8F%91%E7%BD%91%E5%8F%8B%E5%85%B1%E9%B8%A3%23) `209.6K 🔥` `NEW`
1. [花少2分析](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E5%88%86%E6%9E%90%23) `157.8K 🔥` `NEW`
1. [才知道老一辈做饭比我们更狠](https://s.weibo.com/weibo?q=%23%E6%89%8D%E7%9F%A5%E9%81%93%E8%80%81%E4%B8%80%E8%BE%88%E5%81%9A%E9%A5%AD%E6%AF%94%E6%88%91%E4%BB%AC%E6%9B%B4%E7%8B%A0%23) `150.3K 🔥` `NEW`
1. [女性内衣加抗癌药紫杉醇成分引争议](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%80%A7%E5%86%85%E8%A1%A3%E5%8A%A0%E6%8A%97%E7%99%8C%E8%8D%AF%E7%B4%AB%E6%9D%89%E9%86%87%E6%88%90%E5%88%86%E5%BC%95%E4%BA%89%E8%AE%AE%23) `149.1K 🔥` `NEW`
1. [杨洋花少口碑](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E8%8A%B1%E5%B0%91%E5%8F%A3%E7%A2%91%23) `147.2K 🔥` `NEW`
1. [宁静回应花少2分析](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%E5%9B%9E%E5%BA%94%E8%8A%B1%E5%B0%912%E5%88%86%E6%9E%90%23) `147.2K 🔥` `NEW`
1. [皇马 中国西藏](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%20%E4%B8%AD%E5%9B%BD%E8%A5%BF%E8%97%8F%23) `147.2K 🔥` `NEW`
1. [网传花少2许晴是来救场的](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%8A%B1%E5%B0%912%E8%AE%B8%E6%99%B4%E6%98%AF%E6%9D%A5%E6%95%91%E5%9C%BA%E7%9A%84%23) `147.1K 🔥` `NEW`
1. [皇马将西藏与尼泊尔并列拒绝改正](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E5%B0%86%E8%A5%BF%E8%97%8F%E4%B8%8E%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B9%B6%E5%88%97%E6%8B%92%E7%BB%9D%E6%94%B9%E6%AD%A3%23) `147.1K 🔥` `NEW`
1. [断亲潮 八成年轻人一年只联系一两次](https://s.weibo.com/weibo?q=%23%E6%96%AD%E4%BA%B2%E6%BD%AE%20%E5%85%AB%E6%88%90%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%80%E5%B9%B4%E5%8F%AA%E8%81%94%E7%B3%BB%E4%B8%80%E4%B8%A4%E6%AC%A1%23) `147.0K 🔥` `NEW`
1. [孟子义丁禹兮拥吻路透](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%81%E7%A6%B9%E5%85%AE%E6%8B%A5%E5%90%BB%E8%B7%AF%E9%80%8F%23) `147.0K 🔥` `NEW`
1. [黄金白银快速下跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E5%BF%AB%E9%80%9F%E4%B8%8B%E8%B7%8C%23) `146.9K 🔥` `NEW`
1. [曝赵樱子得抑郁症了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B5%B5%E6%A8%B1%E5%AD%90%E5%BE%97%E6%8A%91%E9%83%81%E7%97%87%E4%BA%86%23) `146.8K 🔥` `NEW`
1. [深圳一婴儿早产116天出生仅330克](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E5%A9%B4%E5%84%BF%E6%97%A9%E4%BA%A7116%E5%A4%A9%E5%87%BA%E7%94%9F%E4%BB%85330%E5%85%8B%23) `146.8K 🔥` `NEW`
1. [女装半片毛衣卖128元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E5%8D%8A%E7%89%87%E6%AF%9B%E8%A1%A3%E5%8D%96128%E5%85%83%23) `146.7K 🔥` `NEW`
1. [徐州12345涌入万件演唱会诉求](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%B7%9E12345%E6%B6%8C%E5%85%A5%E4%B8%87%E4%BB%B6%E6%BC%94%E5%94%B1%E4%BC%9A%E8%AF%89%E6%B1%82%23) `146.6K 🔥` `NEW`
1. [奥利否认恋情](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E5%90%A6%E8%AE%A4%E6%81%8B%E6%83%85%23) `146.6K 🔥` `NEW`
1. [杭州电梯事件女方公司被扒](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%94%B5%E6%A2%AF%E4%BA%8B%E4%BB%B6%E5%A5%B3%E6%96%B9%E5%85%AC%E5%8F%B8%E8%A2%AB%E6%89%92%23) `146.5K 🔥` `NEW`
1. [井柏然的吻戏是弯腰往上亲](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E7%9A%84%E5%90%BB%E6%88%8F%E6%98%AF%E5%BC%AF%E8%85%B0%E5%BE%80%E4%B8%8A%E4%BA%B2%23) `146.5K 🔥` `NEW`
1. [可可里小姐闭店 女装退货率](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E5%8F%AF%E9%87%8C%E5%B0%8F%E5%A7%90%E9%97%AD%E5%BA%97%20%E5%A5%B3%E8%A3%85%E9%80%80%E8%B4%A7%E7%8E%87%23) `146.4K 🔥` `NEW`
1. [年轻人断亲潮](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%96%AD%E4%BA%B2%E6%BD%AE%23) `146.4K 🔥` `NEW`
1. [找了29年的人已离世24年男子崩溃大哭](https://s.weibo.com/weibo?q=%23%E6%89%BE%E4%BA%8629%E5%B9%B4%E7%9A%84%E4%BA%BA%E5%B7%B2%E7%A6%BB%E4%B8%9624%E5%B9%B4%E7%94%B7%E5%AD%90%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `146.3K 🔥` `NEW`
1. [为啥AI客服不受待见](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%95%A5AI%E5%AE%A2%E6%9C%8D%E4%B8%8D%E5%8F%97%E5%BE%85%E8%A7%81%23) `146.3K 🔥` `NEW`
1. [印度一24岁员工被喷嘴击中头部身亡](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%8024%E5%B2%81%E5%91%98%E5%B7%A5%E8%A2%AB%E5%96%B7%E5%98%B4%E5%87%BB%E4%B8%AD%E5%A4%B4%E9%83%A8%E8%BA%AB%E4%BA%A1%23) `146.2K 🔥` `NEW`
1. [中方回应俄愿将免签制度转为永久性](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E4%BF%84%E6%84%BF%E5%B0%86%E5%85%8D%E7%AD%BE%E5%88%B6%E5%BA%A6%E8%BD%AC%E4%B8%BA%E6%B0%B8%E4%B9%85%E6%80%A7%23) `146.1K 🔥` `NEW`
1. [被父母全力托举的孩子会不会被养废](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%88%B6%E6%AF%8D%E5%85%A8%E5%8A%9B%E6%89%98%E4%B8%BE%E7%9A%84%E5%AD%A9%E5%AD%90%E4%BC%9A%E4%B8%8D%E4%BC%9A%E8%A2%AB%E5%85%BB%E5%BA%9F%23) `146.1K 🔥` `NEW`
1. [苹果或将下架11款设备](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%88%96%E5%B0%86%E4%B8%8B%E6%9E%B611%E6%AC%BE%E8%AE%BE%E5%A4%87%23) `146.1K 🔥` `NEW`
1. [白鹿掌管挂脖的神](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%8E%8C%E7%AE%A1%E6%8C%82%E8%84%96%E7%9A%84%E7%A5%9E%23) `127.2K 🔥` `NEW`
1. [手机涨价](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%23) `120.6K 🔥` `NEW`
1. [西藏4万平方米搜寻两遍意味着什么](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F4%E4%B8%87%E5%B9%B3%E6%96%B9%E7%B1%B3%E6%90%9C%E5%AF%BB%E4%B8%A4%E9%81%8D%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `116.5K 🔥` `NEW`
1. [家长撕孩子作业老师怎么回复](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E6%92%95%E5%AD%A9%E5%AD%90%E4%BD%9C%E4%B8%9A%E8%80%81%E5%B8%88%E6%80%8E%E4%B9%88%E5%9B%9E%E5%A4%8D%23) `113.6K 🔥` `NEW`
1. [iPhoneUltra黄牛溢价](https://s.weibo.com/weibo?q=%23iPhoneUltra%E9%BB%84%E7%89%9B%E6%BA%A2%E4%BB%B7%23) `113.3K 🔥` `NEW`
1. [皇马应向中国公众诚恳道歉](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E5%BA%94%E5%90%91%E4%B8%AD%E5%9B%BD%E5%85%AC%E4%BC%97%E8%AF%9A%E6%81%B3%E9%81%93%E6%AD%89%23) `105.2K 🔥` `NEW`
1. [一个狗狗找不到主人的视频火了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E7%8B%97%E7%8B%97%E6%89%BE%E4%B8%8D%E5%88%B0%E4%B8%BB%E4%BA%BA%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `93.8K 🔥` `NEW`
1. [曼城1.2亿镑报价恩佐](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8E1.2%E4%BA%BF%E9%95%91%E6%8A%A5%E4%BB%B7%E6%81%A9%E4%BD%90%23) `91.5K 🔥` `NEW`
1. [虎跳峡4分钟山体滑坡画面曝光](https://s.weibo.com/weibo?q=%23%E8%99%8E%E8%B7%B3%E5%B3%A14%E5%88%86%E9%92%9F%E5%B1%B1%E4%BD%93%E6%BB%91%E5%9D%A1%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `90.9K 🔥` `NEW`
1. [胡巴妈](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%B7%B4%E5%A6%88%23) `83.8K 🔥` `NEW`
1. [香港大药房不仅是骗财更是害人](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%A4%A7%E8%8D%AF%E6%88%BF%E4%B8%8D%E4%BB%85%E6%98%AF%E9%AA%97%E8%B4%A2%E6%9B%B4%E6%98%AF%E5%AE%B3%E4%BA%BA%23) `83.0K 🔥` `NEW`
1. [36岁女子求职被HR脑补有孩子](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E5%A5%B3%E5%AD%90%E6%B1%82%E8%81%8C%E8%A2%ABHR%E8%84%91%E8%A1%A5%E6%9C%89%E5%AD%A9%E5%AD%90%23) `82.9K 🔥` `NEW`
1. [栾念哭给我狠狠哭](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E5%93%AD%E7%BB%99%E6%88%91%E7%8B%A0%E7%8B%A0%E5%93%AD%23) `82.1K 🔥` `NEW`
1. [李杰灵870万买了个离海只有30米的房子](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9D%B0%E7%81%B5870%E4%B8%87%E4%B9%B0%E4%BA%86%E4%B8%AA%E7%A6%BB%E6%B5%B7%E5%8F%AA%E6%9C%8930%E7%B1%B3%E7%9A%84%E6%88%BF%E5%AD%90%23) `74.4K 🔥` `NEW`
1. [生逢其时定档](https://s.weibo.com/weibo?q=%23%E7%94%9F%E9%80%A2%E5%85%B6%E6%97%B6%E5%AE%9A%E6%A1%A3%23) `67.4K 🔥` `NEW`
1. [欧豪演技](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E8%B1%AA%E6%BC%94%E6%8A%80%23) `65.1K 🔥` `NEW`
1. [砸杨瀚森球迷已被批评教育](https://s.weibo.com/weibo?q=%23%E7%A0%B8%E6%9D%A8%E7%80%9A%E6%A3%AE%E7%90%83%E8%BF%B7%E5%B7%B2%E8%A2%AB%E6%89%B9%E8%AF%84%E6%95%99%E8%82%B2%23) `60.3K 🔥` `NEW`
1. [开学第一课](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%AD%A6%E7%AC%AC%E4%B8%80%E8%AF%BE%23) `60.0K 🔥` `NEW`

Updated at 2026-09-02 00:58:45

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
