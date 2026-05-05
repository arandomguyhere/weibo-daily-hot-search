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

1. [浏阳烟花厂爆炸已致21死61伤 (Explosion at Liuyang Fireworks Factory killed 21 and injured 61)](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E5%8E%82%E7%88%86%E7%82%B8%E5%B7%B2%E8%87%B421%E6%AD%BB61%E4%BC%A4%23) `10.7M 🔥` `NEW`
1. [端午节连休3天不调休](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E5%8D%88%E8%8A%82%E8%BF%9E%E4%BC%913%E5%A4%A9%E4%B8%8D%E8%B0%83%E4%BC%91%23) `1.9M 🔥` `NEW`
1. [数字技术催生文旅新业态](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%97%E6%8A%80%E6%9C%AF%E5%82%AC%E7%94%9F%E6%96%87%E6%97%85%E6%96%B0%E4%B8%9A%E6%80%81%23) `1.6M 🔥` `NEW`
1. [穆祉丞戛纳](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%88%9B%E7%BA%B3%23) `1.1M 🔥` `NEW`
1. [浏阳烟花爆炸企业负责人被控制](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E7%88%86%E7%82%B8%E4%BC%81%E4%B8%9A%E8%B4%9F%E8%B4%A3%E4%BA%BA%E8%A2%AB%E6%8E%A7%E5%88%B6%23) `574.7K 🔥` `NEW`
1. [王俊凯 中餐厅10](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E4%B8%AD%E9%A4%90%E5%8E%8510%23) `566.3K 🔥` `NEW`
1. [吴宜泽父亲卖掉全家唯一住房投资儿子](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD%E7%88%B6%E4%BA%B2%E5%8D%96%E6%8E%89%E5%85%A8%E5%AE%B6%E5%94%AF%E4%B8%80%E4%BD%8F%E6%88%BF%E6%8A%95%E8%B5%84%E5%84%BF%E5%AD%90%23) `532.3K 🔥` `NEW`
1. [栖见 白日梦我](https://s.weibo.com/weibo?q=%23%E6%A0%96%E8%A7%81%20%E7%99%BD%E6%97%A5%E6%A2%A6%E6%88%91%23) `494.8K 🔥` `NEW`
1. [别把男友的隐性贬低当成爱](https://s.weibo.com/weibo?q=%23%E5%88%AB%E6%8A%8A%E7%94%B7%E5%8F%8B%E7%9A%84%E9%9A%90%E6%80%A7%E8%B4%AC%E4%BD%8E%E5%BD%93%E6%88%90%E7%88%B1%23) `461.6K 🔥` `NEW`
1. [红果靠免费起家吸引近2亿用户](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E9%9D%A0%E5%85%8D%E8%B4%B9%E8%B5%B7%E5%AE%B6%E5%90%B8%E5%BC%95%E8%BF%912%E4%BA%BF%E7%94%A8%E6%88%B7%23) `461.4K 🔥` `NEW`
1. [BLACKPINK全员亮相metgala红毯 (All BLACKPINK members appeared on the red carpet at metgala)](https://s.weibo.com/weibo?q=%23BLACKPINK%E5%85%A8%E5%91%98%E4%BA%AE%E7%9B%B8metgala%E7%BA%A2%E6%AF%AF%23) `459.4K 🔥` `NEW`
1. [虞书欣 种地吧](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `455.9K 🔥` `NEW`
1. [谷爱凌的裙子会吹泡泡](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%9A%84%E8%A3%99%E5%AD%90%E4%BC%9A%E5%90%B9%E6%B3%A1%E6%B3%A1%23) `453.7K 🔥` `NEW`
1. [赵心童回应吴宜泽夺世锦赛冠军](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E5%9B%9E%E5%BA%94%E5%90%B4%E5%AE%9C%E6%B3%BD%E5%A4%BA%E4%B8%96%E9%94%A6%E8%B5%9B%E5%86%A0%E5%86%9B%23) `452.6K 🔥` `NEW`
1. [时代少年团演唱会导播致歉](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AF%BC%E6%92%AD%E8%87%B4%E6%AD%89%23) `449.5K 🔥` `NEW`
1. [张凌赫林允45秒吻戏](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%9E%97%E5%85%8145%E7%A7%92%E5%90%BB%E6%88%8F%23) `447.3K 🔥` `NEW`
1. [泽连斯基宣布5月6日起单方面停火](https://s.weibo.com/weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E5%AE%A3%E5%B8%835%E6%9C%886%E6%97%A5%E8%B5%B7%E5%8D%95%E6%96%B9%E9%9D%A2%E5%81%9C%E7%81%AB%23) `444.3K 🔥` `NEW`
1. [吴宜泽父亲打多份零工维持儿子开销](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD%E7%88%B6%E4%BA%B2%E6%89%93%E5%A4%9A%E4%BB%BD%E9%9B%B6%E5%B7%A5%E7%BB%B4%E6%8C%81%E5%84%BF%E5%AD%90%E5%BC%80%E9%94%80%23) `442.1K 🔥` `NEW`
1. [为什么部分女性愿意上周媛的性商课](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E9%83%A8%E5%88%86%E5%A5%B3%E6%80%A7%E6%84%BF%E6%84%8F%E4%B8%8A%E5%91%A8%E5%AA%9B%E7%9A%84%E6%80%A7%E5%95%86%E8%AF%BE%23) `440.1K 🔥` `NEW`
1. [敦煌一厕所走红游客手持卫生纸打卡](https://s.weibo.com/weibo?q=%23%E6%95%A6%E7%85%8C%E4%B8%80%E5%8E%95%E6%89%80%E8%B5%B0%E7%BA%A2%E6%B8%B8%E5%AE%A2%E6%89%8B%E6%8C%81%E5%8D%AB%E7%94%9F%E7%BA%B8%E6%89%93%E5%8D%A1%23) `437.5K 🔥` `NEW`
1. [夫妻住没锁帐篷民宿遭陌生人闯入 (Couple stayed in tent B&B without locking and were broken into by strangers)](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E4%BD%8F%E6%B2%A1%E9%94%81%E5%B8%90%E7%AF%B7%E6%B0%91%E5%AE%BF%E9%81%AD%E9%99%8C%E7%94%9F%E4%BA%BA%E9%97%AF%E5%85%A5%23) `435.5K 🔥` `NEW`
1. [时代少年团辟谣](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%BE%9F%E8%B0%A3%23) `434.9K 🔥` `NEW`
1. [宁艺卓拖尾黑纱裙](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E6%8B%96%E5%B0%BE%E9%BB%91%E7%BA%B1%E8%A3%99%23) `430.8K 🔥` `NEW`
1. [金饰克价跌到1396元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E8%B7%8C%E5%88%B01396%E5%85%83%23) `430.0K 🔥` `NEW`
1. [MetGala红毯](https://s.weibo.com/weibo?q=%23MetGala%E7%BA%A2%E6%AF%AF%23) `426.7K 🔥` `NEW`
1. [中国教练被吴宜泽一杆制胜惊呆了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%95%99%E7%BB%83%E8%A2%AB%E5%90%B4%E5%AE%9C%E6%B3%BD%E4%B8%80%E6%9D%86%E5%88%B6%E8%83%9C%E6%83%8A%E5%91%86%E4%BA%86%23) `425.2K 🔥` `NEW`
1. [穆祉丞高会](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E9%AB%98%E4%BC%9A%23) `422.5K 🔥` `NEW`
1. [G社宁艺卓metgala生图](https://s.weibo.com/weibo?q=%23G%E7%A4%BE%E5%AE%81%E8%89%BA%E5%8D%93metgala%E7%94%9F%E5%9B%BE%23) `420.3K 🔥` `NEW`
1. [metgala主题](https://s.weibo.com/weibo?q=%23metgala%E4%B8%BB%E9%A2%98%23) `417.2K 🔥` `NEW`
1. [新郎敬茶时口误说爸请喝酒](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%83%8E%E6%95%AC%E8%8C%B6%E6%97%B6%E5%8F%A3%E8%AF%AF%E8%AF%B4%E7%88%B8%E8%AF%B7%E5%96%9D%E9%85%92%23) `414.3K 🔥` `NEW`
1. [中餐厅10 (Chinese restaurant 10)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%8510%23) `412.1K 🔥` `NEW`
1. [严浩翔 躲镜头](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%20%E8%BA%B2%E9%95%9C%E5%A4%B4%23) `408.2K 🔥` `NEW`
1. [你根本没意识到自己有多年轻](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%A0%B9%E6%9C%AC%E6%B2%A1%E6%84%8F%E8%AF%86%E5%88%B0%E8%87%AA%E5%B7%B1%E6%9C%89%E5%A4%9A%E5%B9%B4%E8%BD%BB%23) `402.6K 🔥` `NEW`
1. [国乒何时能迎樊振东归来](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E4%BD%95%E6%97%B6%E8%83%BD%E8%BF%8E%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BD%92%E6%9D%A5%23) `400.3K 🔥` `NEW`
1. [预测白玉兰得奖名单](https://s.weibo.com/weibo?q=%23%E9%A2%84%E6%B5%8B%E7%99%BD%E7%8E%89%E5%85%B0%E5%BE%97%E5%A5%96%E5%90%8D%E5%8D%95%23) `398.4K 🔥` `NEW`
1. [立夏](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E5%A4%8F%23) `396.1K 🔥` `NEW`
1. [刘耀文拍肩安慰严浩翔](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%8B%8D%E8%82%A9%E5%AE%89%E6%85%B0%E4%B8%A5%E6%B5%A9%E7%BF%94%23) `394.5K 🔥` `NEW`
1. [墨菲回应吴宜泽世锦赛夺冠](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%8F%B2%E5%9B%9E%E5%BA%94%E5%90%B4%E5%AE%9C%E6%B3%BD%E4%B8%96%E9%94%A6%E8%B5%9B%E5%A4%BA%E5%86%A0%23) `390.6K 🔥` `NEW`
1. [MINJI去了粉丝生咖](https://s.weibo.com/weibo?q=%23MINJI%E5%8E%BB%E4%BA%86%E7%B2%89%E4%B8%9D%E7%94%9F%E5%92%96%23) `390.0K 🔥` `NEW`
1. [没回消息是因为手机死翘翘了吗](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E5%9B%9E%E6%B6%88%E6%81%AF%E6%98%AF%E5%9B%A0%E4%B8%BA%E6%89%8B%E6%9C%BA%E6%AD%BB%E7%BF%98%E7%BF%98%E4%BA%86%E5%90%97%23) `387.2K 🔥` `NEW`
1. [刘雯白色挂脖礼服 (Liu Wen white halterneck dress)](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E7%99%BD%E8%89%B2%E6%8C%82%E8%84%96%E7%A4%BC%E6%9C%8D%23) `384.3K 🔥` `NEW`
1. [景甜也来误闯天家了](https://s.weibo.com/weibo?q=%23%E6%99%AF%E7%94%9C%E4%B9%9F%E6%9D%A5%E8%AF%AF%E9%97%AF%E5%A4%A9%E5%AE%B6%E4%BA%86%23) `382.9K 🔥` `NEW`
1. [首尔睡觉大赛亚军自曝身心透支](https://s.weibo.com/weibo?q=%23%E9%A6%96%E5%B0%94%E7%9D%A1%E8%A7%89%E5%A4%A7%E8%B5%9B%E4%BA%9A%E5%86%9B%E8%87%AA%E6%9B%9D%E8%BA%AB%E5%BF%83%E9%80%8F%E6%94%AF%23) `375.3K 🔥` `NEW`
1. [苹果或与英特尔三星合作](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%88%96%E4%B8%8E%E8%8B%B1%E7%89%B9%E5%B0%94%E4%B8%89%E6%98%9F%E5%90%88%E4%BD%9C%23) `373.2K 🔥` `NEW`
1. [男主播嘲讽女子40码鞋被永久除名](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%B8%BB%E6%92%AD%E5%98%B2%E8%AE%BD%E5%A5%B3%E5%AD%9040%E7%A0%81%E9%9E%8B%E8%A2%AB%E6%B0%B8%E4%B9%85%E9%99%A4%E5%90%8D%23) `410.4K 🔥` `+66%`
1. [红果VIP 付费 (Hongguo VIP paid)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9CVIP%20%E4%BB%98%E8%B4%B9%23) `379.2K 🔥` `+55%`
1. [豆包 付费](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%20%E4%BB%98%E8%B4%B9%23) `371.2K 🔥` `+51%`
1. [吴宜泽夺世锦赛冠军 (Wu Yize wins world championship)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD%E5%A4%BA%E4%B8%96%E9%94%A6%E8%B5%9B%E5%86%A0%E5%86%9B%23) `417.6K 🔥` `-84%`
1. [国乒急需下一个樊振东王楚钦](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E6%80%A5%E9%9C%80%E4%B8%8B%E4%B8%80%E4%B8%AA%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `405.0K 🔥` `-62%`
1. [52岁医生胃癌确诊到离世仅2个月 (The 52-year-old doctor was diagnosed with gastric cancer and died only 2 months ago)](https://s.weibo.com/weibo?q=%2352%E5%B2%81%E5%8C%BB%E7%94%9F%E8%83%83%E7%99%8C%E7%A1%AE%E8%AF%8A%E5%88%B0%E7%A6%BB%E4%B8%96%E4%BB%852%E4%B8%AA%E6%9C%88%23) `380.8K 🔥` `-49%`

Updated at 2026-05-05 11:40:59

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
