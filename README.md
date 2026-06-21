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

1. [突尼斯vs日本 (Tunisia vs Japan)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E5%B0%BC%E6%96%AFvs%E6%97%A5%E6%9C%AC%23) `1.2M 🔥` `NEW`
1. [Babycare公布甲酰胺检测报告](https://s.weibo.com/weibo?q=%23Babycare%E5%85%AC%E5%B8%83%E7%94%B2%E9%85%B0%E8%83%BA%E6%A3%80%E6%B5%8B%E6%8A%A5%E5%91%8A%23) `832.3K 🔥` `NEW`
1. [网络中国节](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BB%9C%E4%B8%AD%E5%9B%BD%E8%8A%82%23) `809.0K 🔥` `NEW`
1. [谢娜晒跟何宣林聊天记录](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%99%92%E8%B7%9F%E4%BD%95%E5%AE%A3%E6%9E%97%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `803.3K 🔥` `NEW`
1. [情感漠视](https://s.weibo.com/weibo?q=%23%E6%83%85%E6%84%9F%E6%BC%A0%E8%A7%86%23) `791.2K 🔥` `NEW`
1. [BTWE体能赛现场中国风太燃了](https://s.weibo.com/weibo?q=%23BTWE%E4%BD%93%E8%83%BD%E8%B5%9B%E7%8E%B0%E5%9C%BA%E4%B8%AD%E5%9B%BD%E9%A3%8E%E5%A4%AA%E7%87%83%E4%BA%86%23) `746.9K 🔥` `NEW`
1. [蔡磊发布倒计时演讲](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E5%8F%91%E5%B8%83%E5%80%92%E8%AE%A1%E6%97%B6%E6%BC%94%E8%AE%B2%23) `652.9K 🔥` `NEW`
1. [鹿晗喊话五哈节目组](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%96%8A%E8%AF%9D%E4%BA%94%E5%93%88%E8%8A%82%E7%9B%AE%E7%BB%84%23) `614.5K 🔥` `NEW`
1. [第一批用水果做菜的人吃商极高](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E7%94%A8%E6%B0%B4%E6%9E%9C%E5%81%9A%E8%8F%9C%E7%9A%84%E4%BA%BA%E5%90%83%E5%95%86%E6%9E%81%E9%AB%98%23) `606.5K 🔥` `NEW`
1. [外国球迷夸马宁](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E7%90%83%E8%BF%B7%E5%A4%B8%E9%A9%AC%E5%AE%81%23) `593.2K 🔥` `NEW`
1. [关晓彤卸妆完全就是卸掉了灰尘 (Guan Xiaotong's makeup removal completely removes dust)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%8D%B8%E5%A6%86%E5%AE%8C%E5%85%A8%E5%B0%B1%E6%98%AF%E5%8D%B8%E6%8E%89%E4%BA%86%E7%81%B0%E5%B0%98%23) `592.6K 🔥` `NEW`
1. [南派三叔经紫金陈介绍求助1818](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%B4%BE%E4%B8%89%E5%8F%94%E7%BB%8F%E7%B4%AB%E9%87%91%E9%99%88%E4%BB%8B%E7%BB%8D%E6%B1%82%E5%8A%A91818%23) `591.5K 🔥` `NEW`
1. [杨天真复胖](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A4%A9%E7%9C%9F%E5%A4%8D%E8%83%96%23) `590.6K 🔥` `NEW`
1. [井胧 我抱一下我姐怎么了](https://s.weibo.com/weibo?q=%23%E4%BA%95%E8%83%A7%20%E6%88%91%E6%8A%B1%E4%B8%80%E4%B8%8B%E6%88%91%E5%A7%90%E6%80%8E%E4%B9%88%E4%BA%86%23) `589.7K 🔥` `NEW`
1. [被王楚钦潮到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%BD%AE%E5%88%B0%E4%BA%86%23) `588.5K 🔥` `NEW`
1. [梁朝伟老婆没牵手就抠手](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%9C%9D%E4%BC%9F%E8%80%81%E5%A9%86%E6%B2%A1%E7%89%B5%E6%89%8B%E5%B0%B1%E6%8A%A0%E6%89%8B%23) `587.9K 🔥` `NEW`
1. [偏偏宠爱](https://s.weibo.com/weibo?q=%23%E5%81%8F%E5%81%8F%E5%AE%A0%E7%88%B1%23) `545.6K 🔥` `NEW`
1. [特朗普回应伊朗关闭霍尔木兹海峡](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9B%9E%E5%BA%94%E4%BC%8A%E6%9C%97%E5%85%B3%E9%97%AD%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `545.4K 🔥` `NEW`
1. [苹果将涨价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%B0%86%E6%B6%A8%E4%BB%B7%23) `525.5K 🔥` `NEW`
1. [WPS回应被指背刺用户](https://s.weibo.com/weibo?q=%23WPS%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%8C%87%E8%83%8C%E5%88%BA%E7%94%A8%E6%88%B7%23) `493.9K 🔥` `NEW`
1. [独生子小猫出生17天胖成猪咪 (Only child kitten turns into a pig 17 days after birth)](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E7%94%9F%E5%AD%90%E5%B0%8F%E7%8C%AB%E5%87%BA%E7%94%9F17%E5%A4%A9%E8%83%96%E6%88%90%E7%8C%AA%E5%92%AA%23) `475.3K 🔥` `NEW`
1. [紫金陈朋友南派三叔上1818求助](https://s.weibo.com/weibo?q=%23%E7%B4%AB%E9%87%91%E9%99%88%E6%9C%8B%E5%8F%8B%E5%8D%97%E6%B4%BE%E4%B8%89%E5%8F%94%E4%B8%8A1818%E6%B1%82%E5%8A%A9%23) `458.0K 🔥` `NEW`
1. [孙艺珍玄彬体型差](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%89%BA%E7%8F%8D%E7%8E%84%E5%BD%AC%E4%BD%93%E5%9E%8B%E5%B7%AE%23) `439.2K 🔥` `NEW`
1. [日本游客为免票全文背诵岳阳楼记](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B8%B8%E5%AE%A2%E4%B8%BA%E5%85%8D%E7%A5%A8%E5%85%A8%E6%96%87%E8%83%8C%E8%AF%B5%E5%B2%B3%E9%98%B3%E6%A5%BC%E8%AE%B0%23) `438.3K 🔥` `NEW`
1. [浪姐只有江语晨温峥嵘没双人舞台](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%8F%AA%E6%9C%89%E6%B1%9F%E8%AF%AD%E6%99%A8%E6%B8%A9%E5%B3%A5%E5%B5%98%E6%B2%A1%E5%8F%8C%E4%BA%BA%E8%88%9E%E5%8F%B0%23) `406.1K 🔥` `NEW`
1. [辛芷蕾格局](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E6%A0%BC%E5%B1%80%23) `384.9K 🔥` `NEW`
1. [Babycare已报案](https://s.weibo.com/weibo?q=%23Babycare%E5%B7%B2%E6%8A%A5%E6%A1%88%23) `371.5K 🔥` `NEW`
1. [宋威龙登韩趋](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%99%BB%E9%9F%A9%E8%B6%8B%23) `347.9K 🔥` `NEW`
1. [王濛发文回应万千惠淘汰](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%E4%B8%87%E5%8D%83%E6%83%A0%E6%B7%98%E6%B1%B0%23) `341.1K 🔥` `NEW`
1. [金价仍可能重返5000美元](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%BB%8D%E5%8F%AF%E8%83%BD%E9%87%8D%E8%BF%945000%E7%BE%8E%E5%85%83%23) `297.5K 🔥` `NEW`
1. [马宁1分钟2黄 (Ma Ning 2 yellows in 1 minute)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%811%E5%88%86%E9%92%9F2%E9%BB%84%23) `281.0K 🔥` `NEW`
1. [马宁世界杯主哨首秀10分](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%BB%E5%93%A8%E9%A6%96%E7%A7%8010%E5%88%86%23) `274.0K 🔥` `NEW`
1. [侵华日军曾实施输马血人体实验](https://s.weibo.com/weibo?q=%23%E4%BE%B5%E5%8D%8E%E6%97%A5%E5%86%9B%E6%9B%BE%E5%AE%9E%E6%96%BD%E8%BE%93%E9%A9%AC%E8%A1%80%E4%BA%BA%E4%BD%93%E5%AE%9E%E9%AA%8C%23) `251.0K 🔥` `NEW`
1. [成毅的独处仪式感](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%9A%84%E7%8B%AC%E5%A4%84%E4%BB%AA%E5%BC%8F%E6%84%9F%23) `248.7K 🔥` `NEW`
1. [好奇公布甲酰胺检测结果](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A5%87%E5%85%AC%E5%B8%83%E7%94%B2%E9%85%B0%E8%83%BA%E6%A3%80%E6%B5%8B%E7%BB%93%E6%9E%9C%23) `246.4K 🔥` `NEW`
1. [库拉索门将神了](https://s.weibo.com/weibo?q=%23%E5%BA%93%E6%8B%89%E7%B4%A2%E9%97%A8%E5%B0%86%E7%A5%9E%E4%BA%86%23) `243.4K 🔥` `NEW`
1. [辛芷蕾方否认抢C位](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E6%96%B9%E5%90%A6%E8%AE%A4%E6%8A%A2C%E4%BD%8D%23) `228.6K 🔥` `NEW`
1. [莫离这一段堪比滴血认亲](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E8%BF%99%E4%B8%80%E6%AE%B5%E5%A0%AA%E6%AF%94%E6%BB%B4%E8%A1%80%E8%AE%A4%E4%BA%B2%23) `203.3K 🔥` `NEW`
1. [多家纸尿裤品牌晒检测报告](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E7%BA%B8%E5%B0%BF%E8%A3%A4%E5%93%81%E7%89%8C%E6%99%92%E6%A3%80%E6%B5%8B%E6%8A%A5%E5%91%8A%23) `196.8K 🔥` `NEW`
1. [宋亚轩全套爱马仕](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%85%A8%E5%A5%97%E7%88%B1%E9%A9%AC%E4%BB%95%23) `196.6K 🔥` `NEW`
1. [高考季专业城市未来 (The future of professional cities during the college entrance examination season)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%AD%A3%E4%B8%93%E4%B8%9A%E5%9F%8E%E5%B8%82%E6%9C%AA%E6%9D%A5%23) `196.3K 🔥` `NEW`
1. [木子洋道歉](https://s.weibo.com/weibo?q=%23%E6%9C%A8%E5%AD%90%E6%B4%8B%E9%81%93%E6%AD%89%23) `196.3K 🔥` `NEW`
1. [男子碾死2岁幼童潜逃19年获刑6年半](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%A2%BE%E6%AD%BB2%E5%B2%81%E5%B9%BC%E7%AB%A5%E6%BD%9C%E9%80%8319%E5%B9%B4%E8%8E%B7%E5%88%916%E5%B9%B4%E5%8D%8A%23) `196.0K 🔥` `NEW`
1. [白鹿猜中了王鹤棣](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%8C%9C%E4%B8%AD%E4%BA%86%E7%8E%8B%E9%B9%A4%E6%A3%A3%23) `195.8K 🔥` `NEW`
1. [中餐厅10热度](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%8510%E7%83%AD%E5%BA%A6%23) `195.8K 🔥` `NEW`
1. [iPhone18Pro起售价或达1399美元](https://s.weibo.com/weibo?q=%23iPhone18Pro%E8%B5%B7%E5%94%AE%E4%BB%B7%E6%88%96%E8%BE%BE1399%E7%BE%8E%E5%85%83%23) `195.5K 🔥` `NEW`
1. [磷酸铁锂价格翻倍](https://s.weibo.com/weibo?q=%23%E7%A3%B7%E9%85%B8%E9%93%81%E9%94%82%E4%BB%B7%E6%A0%BC%E7%BF%BB%E5%80%8D%23) `195.4K 🔥` `NEW`
1. [苹果被曝区别对待工会员工](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E8%A2%AB%E6%9B%9D%E5%8C%BA%E5%88%AB%E5%AF%B9%E5%BE%85%E5%B7%A5%E4%BC%9A%E5%91%98%E5%B7%A5%23) `195.1K 🔥` `NEW`
1. [日本毫米级门线悬案](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%AF%AB%E7%B1%B3%E7%BA%A7%E9%97%A8%E7%BA%BF%E6%82%AC%E6%A1%88%23) `195.1K 🔥` `NEW`
1. [父亲节 (Father's Day)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E8%8A%82%23) `799.3K 🔥` `+40%`
1. [曝徐艺洋在美国生的孩子](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BE%90%E8%89%BA%E6%B4%8B%E5%9C%A8%E7%BE%8E%E5%9B%BD%E7%94%9F%E7%9A%84%E5%AD%A9%E5%AD%90%23) `263.7K 🔥` `-24%`

Updated at 2026-06-21 13:13:11

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
