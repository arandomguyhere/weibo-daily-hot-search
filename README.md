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

1. [西西弗书店是如何盈利的](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%A5%BF%E5%BC%97%E4%B9%A6%E5%BA%97%E6%98%AF%E5%A6%82%E4%BD%95%E7%9B%88%E5%88%A9%E7%9A%84%23) `1.2M 🔥` `NEW`
1. [三甲医生回应喝大水](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E5%96%9D%E5%A4%A7%E6%B0%B4%23) `918.5K 🔥` `NEW`
1. [全国秋粮收获过四成](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E7%A7%8B%E7%B2%AE%E6%94%B6%E8%8E%B7%E8%BF%87%E5%9B%9B%E6%88%90%23) `655.2K 🔥` `NEW`
1. [博主质疑懂车帝刹车测试标准](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E8%B4%A8%E7%96%91%E6%87%82%E8%BD%A6%E5%B8%9D%E5%88%B9%E8%BD%A6%E6%B5%8B%E8%AF%95%E6%A0%87%E5%87%86%23) `593.5K 🔥` `NEW`
1. [素媛案罪犯破坏家中监控](https://s.weibo.com/weibo?q=%23%E7%B4%A0%E5%AA%9B%E6%A1%88%E7%BD%AA%E7%8A%AF%E7%A0%B4%E5%9D%8F%E5%AE%B6%E4%B8%AD%E7%9B%91%E6%8E%A7%23) `491.9K 🔥` `NEW`
1. [开始理解月薪4500的大人们了](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E7%90%86%E8%A7%A3%E6%9C%88%E8%96%AA4500%E7%9A%84%E5%A4%A7%E4%BA%BA%E4%BB%AC%E4%BA%86%23) `444.6K 🔥` `NEW`
1. [终于等到了宋雨琦的二十七](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%AD%89%E5%88%B0%E4%BA%86%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%9A%84%E4%BA%8C%E5%8D%81%E4%B8%83%23) `421.1K 🔥` `NEW`
1. [日本71岁女儿勒死102岁母亲获缓刑](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC71%E5%B2%81%E5%A5%B3%E5%84%BF%E5%8B%92%E6%AD%BB102%E5%B2%81%E6%AF%8D%E4%BA%B2%E8%8E%B7%E7%BC%93%E5%88%91%23) `408.4K 🔥` `NEW`
1. [买的榴莲打开里面是橡皮泥](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%9A%84%E6%A6%B4%E8%8E%B2%E6%89%93%E5%BC%80%E9%87%8C%E9%9D%A2%E6%98%AF%E6%A9%A1%E7%9A%AE%E6%B3%A5%23) `408.4K 🔥` `NEW`
1. [霍启刚见证郭晶晶获授荣誉院士](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%88%9A%E8%A7%81%E8%AF%81%E9%83%AD%E6%99%B6%E6%99%B6%E8%8E%B7%E6%8E%88%E8%8D%A3%E8%AA%89%E9%99%A2%E5%A3%AB%23) `408.4K 🔥` `NEW`
1. [薄肌理论](https://s.weibo.com/weibo?q=%23%E8%96%84%E8%82%8C%E7%90%86%E8%AE%BA%23) `408.3K 🔥` `NEW`
1. [赵丽颖 飞天奖](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%20%E9%A3%9E%E5%A4%A9%E5%A5%96%23) `408.2K 🔥` `NEW`
1. [崔晋李勒优聊天记录](https://s.weibo.com/weibo?q=%23%E5%B4%94%E6%99%8B%E6%9D%8E%E5%8B%92%E4%BC%98%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `408.1K 🔥` `NEW`
1. [新还珠尔康真的帅我一脸](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%BF%98%E7%8F%A0%E5%B0%94%E5%BA%B7%E7%9C%9F%E7%9A%84%E5%B8%85%E6%88%91%E4%B8%80%E8%84%B8%23) `408.1K 🔥` `NEW`
1. [雷军回应小米澎程首销月锁单量](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E9%A6%96%E9%94%80%E6%9C%88%E9%94%81%E5%8D%95%E9%87%8F%23) `408.0K 🔥` `NEW`
1. [麦当劳权志龙](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3%E6%9D%83%E5%BF%97%E9%BE%99%23) `407.9K 🔥` `NEW`
1. [懂车帝设刹车断裂专栏](https://s.weibo.com/weibo?q=%23%E6%87%82%E8%BD%A6%E5%B8%9D%E8%AE%BE%E5%88%B9%E8%BD%A6%E6%96%AD%E8%A3%82%E4%B8%93%E6%A0%8F%23) `407.9K 🔥` `NEW`
1. [俄罗斯肺炎](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E8%82%BA%E7%82%8E%23) `407.8K 🔥` `NEW`
1. [林依晨老公人脉](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E8%80%81%E5%85%AC%E4%BA%BA%E8%84%89%23) `407.7K 🔥` `NEW`
1. [李勒优嫂子](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E5%AB%82%E5%AD%90%23) `407.6K 🔥` `NEW`
1. [外交部回应直呼高市早苗名字](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E7%9B%B4%E5%91%BC%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%90%8D%E5%AD%97%23) `407.6K 🔥` `NEW`
1. [尊界](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8C%23) `407.5K 🔥` `NEW`
1. [向佐喝蛋白粉把肾喝成70岁](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E5%96%9D%E8%9B%8B%E7%99%BD%E7%B2%89%E6%8A%8A%E8%82%BE%E5%96%9D%E6%88%9070%E5%B2%81%23) `407.4K 🔥` `NEW`
1. [鸿蒙智行回应刹车踏板断裂传闻](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E5%9B%9E%E5%BA%94%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%E6%96%AD%E8%A3%82%E4%BC%A0%E9%97%BB%23) `407.4K 🔥` `NEW`
1. [网传懂车帝买三台同款新车封存](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%87%82%E8%BD%A6%E5%B8%9D%E4%B9%B0%E4%B8%89%E5%8F%B0%E5%90%8C%E6%AC%BE%E6%96%B0%E8%BD%A6%E5%B0%81%E5%AD%98%23) `407.3K 🔥` `NEW`
1. [江淮汽车对尊界启动调查和测试](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B7%AE%E6%B1%BD%E8%BD%A6%E5%AF%B9%E5%B0%8A%E7%95%8C%E5%90%AF%E5%8A%A8%E8%B0%83%E6%9F%A5%E5%92%8C%E6%B5%8B%E8%AF%95%23) `407.3K 🔥` `NEW`
1. [韩国召回驻乌克兰大使](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%8F%AC%E5%9B%9E%E9%A9%BB%E4%B9%8C%E5%85%8B%E5%85%B0%E5%A4%A7%E4%BD%BF%23) `405.8K 🔥` `NEW`
1. [尊界V800 第三方检测](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8CV800%20%E7%AC%AC%E4%B8%89%E6%96%B9%E6%A3%80%E6%B5%8B%23) `398.3K 🔥` `NEW`
1. [婚宴14道菜上错7道酒店致歉](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%AE%B414%E9%81%93%E8%8F%9C%E4%B8%8A%E9%94%997%E9%81%93%E9%85%92%E5%BA%97%E8%87%B4%E6%AD%89%23) `389.2K 🔥` `NEW`
1. [周启豪零封张本智和太提气](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%90%AF%E8%B1%AA%E9%9B%B6%E5%B0%81%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E5%A4%AA%E6%8F%90%E6%B0%94%23) `376.6K 🔥` `NEW`
1. [4500N怎么踩到的](https://s.weibo.com/weibo?q=%234500N%E6%80%8E%E4%B9%88%E8%B8%A9%E5%88%B0%E7%9A%84%23) `374.7K 🔥` `NEW`
1. [奚梦瑶全家福戴的金饰不是实心](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%85%A8%E5%AE%B6%E7%A6%8F%E6%88%B4%E7%9A%84%E9%87%91%E9%A5%B0%E4%B8%8D%E6%98%AF%E5%AE%9E%E5%BF%83%23) `336.8K 🔥` `NEW`
1. [余承东尊界品牌危机](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%B0%8A%E7%95%8C%E5%93%81%E7%89%8C%E5%8D%B1%E6%9C%BA%23) `326.2K 🔥` `NEW`
1. [白敬亭婉拒王楚然](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E5%A9%89%E6%8B%92%E7%8E%8B%E6%A5%9A%E7%84%B6%23) `312.3K 🔥` `NEW`
1. [周启豪3比0张本智和](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%90%AF%E8%B1%AA3%E6%AF%940%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `268.2K 🔥` `NEW`
1. [三甲医生称喝大水不等于科学饮水](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E7%A7%B0%E5%96%9D%E5%A4%A7%E6%B0%B4%E4%B8%8D%E7%AD%89%E4%BA%8E%E7%A7%91%E5%AD%A6%E9%A5%AE%E6%B0%B4%23) `261.9K 🔥` `NEW`
1. [皮质醇爆棚的7个迹象](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E8%B4%A8%E9%86%87%E7%88%86%E6%A3%9A%E7%9A%847%E4%B8%AA%E8%BF%B9%E8%B1%A1%23) `261.3K 🔥` `NEW`
1. [老祖宗没骗我北冥有鱼是真的](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%A5%96%E5%AE%97%E6%B2%A1%E9%AA%97%E6%88%91%E5%8C%97%E5%86%A5%E6%9C%89%E9%B1%BC%E6%98%AF%E7%9C%9F%E7%9A%84%23) `255.5K 🔥` `NEW`
1. [国庆节上海售楼经理忙到脚肿](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E8%8A%82%E4%B8%8A%E6%B5%B7%E5%94%AE%E6%A5%BC%E7%BB%8F%E7%90%86%E5%BF%99%E5%88%B0%E8%84%9A%E8%82%BF%23) `197.0K 🔥` `NEW`
1. [小米澎程](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%23) `196.4K 🔥` `NEW`
1. [官方通报早餐店保温柜现死老鼠](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%97%A9%E9%A4%90%E5%BA%97%E4%BF%9D%E6%B8%A9%E6%9F%9C%E7%8E%B0%E6%AD%BB%E8%80%81%E9%BC%A0%23) `194.1K 🔥` `NEW`
1. [懂车老王质疑刹车测试黑盒](https://s.weibo.com/weibo?q=%23%E6%87%82%E8%BD%A6%E8%80%81%E7%8E%8B%E8%B4%A8%E7%96%91%E5%88%B9%E8%BD%A6%E6%B5%8B%E8%AF%95%E9%BB%91%E7%9B%92%23) `193.8K 🔥` `NEW`
1. [巴黎内衣店可试穿内裤](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%86%85%E8%A1%A3%E5%BA%97%E5%8F%AF%E8%AF%95%E7%A9%BF%E5%86%85%E8%A3%A4%23) `190.1K 🔥` `NEW`
1. [江淮汽车](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B7%AE%E6%B1%BD%E8%BD%A6%23) `188.8K 🔥` `NEW`
1. [李一桐剧宣完天塌了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E5%89%A7%E5%AE%A3%E5%AE%8C%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `188.4K 🔥` `NEW`
1. [嫁金钗 爆相](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%20%E7%88%86%E7%9B%B8%23) `187.1K 🔥` `NEW`
1. [缅北电诈园为什么叫人间地狱](https://s.weibo.com/weibo?q=%23%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E5%9B%AD%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%AB%E4%BA%BA%E9%97%B4%E5%9C%B0%E7%8B%B1%23) `179.0K 🔥` `NEW`
1. [何超欣晒何猷君奚梦瑶全家福](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E6%AC%A3%E6%99%92%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%85%A8%E5%AE%B6%E7%A6%8F%23) `171.8K 🔥` `NEW`
1. [小学发现大型马蜂窝停课2天](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E5%8F%91%E7%8E%B0%E5%A4%A7%E5%9E%8B%E9%A9%AC%E8%9C%82%E7%AA%9D%E5%81%9C%E8%AF%BE2%E5%A4%A9%23) `165.9K 🔥` `NEW`
1. [尊界V800刹车踏板支架断裂](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8CV800%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%E6%94%AF%E6%9E%B6%E6%96%AD%E8%A3%82%23) `407.2K 🔥`
1. [疑似崔晋妈妈朋友圈发文](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%B4%94%E6%99%8B%E5%A6%88%E5%A6%88%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%8F%91%E6%96%87%23) `198.9K 🔥` `-66%`

Updated at 2026-10-08 19:23:11

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
