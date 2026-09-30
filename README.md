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

1. [东航回应网传空姐跪地道歉](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%88%AA%E5%9B%9E%E5%BA%94%E7%BD%91%E4%BC%A0%E7%A9%BA%E5%A7%90%E8%B7%AA%E5%9C%B0%E9%81%93%E6%AD%89%23) `1.8M 🔥` `NEW`
1. [空姐跪地道歉事件目击者发声](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E5%A7%90%E8%B7%AA%E5%9C%B0%E9%81%93%E6%AD%89%E4%BA%8B%E4%BB%B6%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23) `1.3M 🔥` `NEW`
1. [2026世界互联网大会乌镇峰会时间](https://s.weibo.com/weibo?q=%232026%E4%B8%96%E7%95%8C%E4%BA%92%E8%81%94%E7%BD%91%E5%A4%A7%E4%BC%9A%E4%B9%8C%E9%95%87%E5%B3%B0%E4%BC%9A%E6%97%B6%E9%97%B4%23) `778.5K 🔥` `NEW`
1. [董子健看孙怡获奖的眼神](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AD%90%E5%81%A5%E7%9C%8B%E5%AD%99%E6%80%A1%E8%8E%B7%E5%A5%96%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `774.9K 🔥` `NEW`
1. [金价跌的有多夸张](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E7%9A%84%E6%9C%89%E5%A4%9A%E5%A4%B8%E5%BC%A0%23) `755.3K 🔥` `NEW`
1. [博主嘻嘻徐宝胃癌去世年仅26岁](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E5%98%BB%E5%98%BB%E5%BE%90%E5%AE%9D%E8%83%83%E7%99%8C%E5%8E%BB%E4%B8%96%E5%B9%B4%E4%BB%8526%E5%B2%81%23) `750.7K 🔥` `NEW`
1. [2026天津车展](https://s.weibo.com/weibo?q=%232026%E5%A4%A9%E6%B4%A5%E8%BD%A6%E5%B1%95%23) `737.4K 🔥` `NEW`
1. [妙瓦底电诈园区公开招募成员](https://s.weibo.com/weibo?q=%23%E5%A6%99%E7%93%A6%E5%BA%95%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E5%85%AC%E5%BC%80%E6%8B%9B%E5%8B%9F%E6%88%90%E5%91%98%23) `724.7K 🔥` `NEW`
1. [康奈尔大学禁止遭轮奸女生离校治疗](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E5%A5%88%E5%B0%94%E5%A4%A7%E5%AD%A6%E7%A6%81%E6%AD%A2%E9%81%AD%E8%BD%AE%E5%A5%B8%E5%A5%B3%E7%94%9F%E7%A6%BB%E6%A0%A1%E6%B2%BB%E7%96%97%23) `614.7K 🔥` `NEW`
1. [女生遭轮奸美国名校拒公布嫌犯身份](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E9%81%AD%E8%BD%AE%E5%A5%B8%E7%BE%8E%E5%9B%BD%E5%90%8D%E6%A0%A1%E6%8B%92%E5%85%AC%E5%B8%83%E5%AB%8C%E7%8A%AF%E8%BA%AB%E4%BB%BD%23) `431.6K 🔥` `NEW`
1. [油价暴跌黄金飙涨](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E6%9A%B4%E8%B7%8C%E9%BB%84%E9%87%91%E9%A3%99%E6%B6%A8%23) `410.3K 🔥` `NEW`
1. [金鹰奖最佳男女配角双双爆冷](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E5%A5%B3%E9%85%8D%E8%A7%92%E5%8F%8C%E5%8F%8C%E7%88%86%E5%86%B7%23) `392.6K 🔥` `NEW`
1. [张家齐直播直接登上了生鲜榜榜一](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%9B%B4%E6%92%AD%E7%9B%B4%E6%8E%A5%E7%99%BB%E4%B8%8A%E4%BA%86%E7%94%9F%E9%B2%9C%E6%A6%9C%E6%A6%9C%E4%B8%80%23) `383.3K 🔥` `NEW`
1. [游本昌遗体告别仪式今日举行](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E6%9C%AC%E6%98%8C%E9%81%97%E4%BD%93%E5%91%8A%E5%88%AB%E4%BB%AA%E5%BC%8F%E4%BB%8A%E6%97%A5%E4%B8%BE%E8%A1%8C%23) `381.7K 🔥` `NEW`
1. [邓亚萍说输球不可以人身攻击](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E8%AF%B4%E8%BE%93%E7%90%83%E4%B8%8D%E5%8F%AF%E4%BB%A5%E4%BA%BA%E8%BA%AB%E6%94%BB%E5%87%BB%23) `377.7K 🔥` `NEW`
1. [詹姆斯下班乘直升机回家](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E4%B8%8B%E7%8F%AD%E4%B9%98%E7%9B%B4%E5%8D%87%E6%9C%BA%E5%9B%9E%E5%AE%B6%23) `333.5K 🔥` `NEW`
1. [夫妻亲热时啪一声男子下体爆胎](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E4%BA%B2%E7%83%AD%E6%97%B6%E5%95%AA%E4%B8%80%E5%A3%B0%E7%94%B7%E5%AD%90%E4%B8%8B%E4%BD%93%E7%88%86%E8%83%8E%23) `325.6K 🔥` `NEW`
1. [现在的女装都要上防拆带了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%A5%B3%E8%A3%85%E9%83%BD%E8%A6%81%E4%B8%8A%E9%98%B2%E6%8B%86%E5%B8%A6%E4%BA%86%23) `321.2K 🔥` `NEW`
1. [井柏然早春晴朗穿的卫衣是刘雯的](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E7%A9%BF%E7%9A%84%E5%8D%AB%E8%A1%A3%E6%98%AF%E5%88%98%E9%9B%AF%E7%9A%84%23) `308.3K 🔥` `NEW`
1. [瑞幸2个月内两次联名惹争议](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B82%E4%B8%AA%E6%9C%88%E5%86%85%E4%B8%A4%E6%AC%A1%E8%81%94%E5%90%8D%E6%83%B9%E4%BA%89%E8%AE%AE%23) `303.2K 🔥` `NEW`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `301.0K 🔥` `NEW`
1. [奚梦瑶美到都没注意后面的人是方圆](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%BE%8E%E5%88%B0%E9%83%BD%E6%B2%A1%E6%B3%A8%E6%84%8F%E5%90%8E%E9%9D%A2%E7%9A%84%E4%BA%BA%E6%98%AF%E6%96%B9%E5%9C%86%23) `297.4K 🔥` `NEW`
1. [中国人一放假全世界都知道](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E4%B8%80%E6%94%BE%E5%81%87%E5%85%A8%E4%B8%96%E7%95%8C%E9%83%BD%E7%9F%A5%E9%81%93%23) `287.5K 🔥` `NEW`
1. [金智秀张元英待遇](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E5%BC%A0%E5%85%83%E8%8B%B1%E5%BE%85%E9%81%87%23) `280.2K 🔥` `NEW`
1. [AI漫剧要拍真人版了](https://s.weibo.com/weibo?q=%23AI%E6%BC%AB%E5%89%A7%E8%A6%81%E6%8B%8D%E7%9C%9F%E4%BA%BA%E7%89%88%E4%BA%86%23) `280.1K 🔥` `NEW`
1. [迪丽热巴迪奥专车入场](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%AA%E5%A5%A5%E4%B8%93%E8%BD%A6%E5%85%A5%E5%9C%BA%23) `271.7K 🔥` `NEW`
1. [亚运MVP将获25000美元奖金](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90MVP%E5%B0%86%E8%8E%B725000%E7%BE%8E%E5%85%83%E5%A5%96%E9%87%91%23) `270.8K 🔥` `NEW`
1. [十月行程图](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%9C%88%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `267.8K 🔥` `NEW`
1. [游本昌孙女现身追悼会现场](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E6%9C%AC%E6%98%8C%E5%AD%99%E5%A5%B3%E7%8E%B0%E8%BA%AB%E8%BF%BD%E6%82%BC%E4%BC%9A%E7%8E%B0%E5%9C%BA%23) `249.7K 🔥` `NEW`
1. [沙玥儿长文](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%8E%A5%E5%84%BF%E9%95%BF%E6%96%87%23) `240.6K 🔥` `NEW`
1. [迪丽热巴应援色车牌](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%BA%94%E6%8F%B4%E8%89%B2%E8%BD%A6%E7%89%8C%23) `217.6K 🔥` `NEW`
1. [亚运会今日决出22金](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%BB%8A%E6%97%A5%E5%86%B3%E5%87%BA22%E9%87%91%23) `197.9K 🔥` `NEW`
1. [国乒需要一个内心充盈的王楚钦](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E9%9C%80%E8%A6%81%E4%B8%80%E4%B8%AA%E5%86%85%E5%BF%83%E5%85%85%E7%9B%88%E7%9A%84%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `197.4K 🔥` `NEW`
1. [李一桐小时候就学闪身步](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E5%B0%8F%E6%97%B6%E5%80%99%E5%B0%B1%E5%AD%A6%E9%97%AA%E8%BA%AB%E6%AD%A5%23) `193.4K 🔥` `NEW`
1. [许嵩冯禧婚后首现身](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%E5%86%AF%E7%A6%A7%E5%A9%9A%E5%90%8E%E9%A6%96%E7%8E%B0%E8%BA%AB%23) `191.1K 🔥` `NEW`
1. [曼城 英超](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8E%20%E8%8B%B1%E8%B6%85%23) `187.9K 🔥` `NEW`
1. [金价半小时下跌50元顾客急坏了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%8D%8A%E5%B0%8F%E6%97%B6%E4%B8%8B%E8%B7%8C50%E5%85%83%E9%A1%BE%E5%AE%A2%E6%80%A5%E5%9D%8F%E4%BA%86%23) `183.0K 🔥` `NEW`
1. [AG运营](https://s.weibo.com/weibo?q=%23AG%E8%BF%90%E8%90%A5%23) `181.1K 🔥` `NEW`
1. [GPT6.1Sol](https://s.weibo.com/weibo?q=%23GPT6.1Sol%23) `173.9K 🔥` `NEW`
1. [最强厄尔尼诺将影响我国秋冬](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%BC%BA%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E5%B0%86%E5%BD%B1%E5%93%8D%E6%88%91%E5%9B%BD%E7%A7%8B%E5%86%AC%23) `419.4K 🔥` `+36%`
1. [孙怡发博回应拿影后](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%8F%91%E5%8D%9A%E5%9B%9E%E5%BA%94%E6%8B%BF%E5%BD%B1%E5%90%8E%23) `415.3K 🔥` `+417%`
1. [赵丽颖身体到底怎么了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%BA%AB%E4%BD%93%E5%88%B0%E5%BA%95%E6%80%8E%E4%B9%88%E4%BA%86%23) `411.6K 🔥` `+235%`
1. [邓亚萍直言输球不要找借口](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E7%9B%B4%E8%A8%80%E8%BE%93%E7%90%83%E4%B8%8D%E8%A6%81%E6%89%BE%E5%80%9F%E5%8F%A3%23) `308.0K 🔥` `+151%`
1. [小巷人家 陪跑](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%20%E9%99%AA%E8%B7%91%23) `282.2K 🔥` `+79%`
1. [泰国洪灾后大量蛇和鳄鱼出没](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%B4%AA%E7%81%BE%E5%90%8E%E5%A4%A7%E9%87%8F%E8%9B%87%E5%92%8C%E9%B3%84%E9%B1%BC%E5%87%BA%E6%B2%A1%23) `280.3K 🔥` `+249%`
1. [林大爷死在兰香怀里](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%A4%A7%E7%88%B7%E6%AD%BB%E5%9C%A8%E5%85%B0%E9%A6%99%E6%80%80%E9%87%8C%23) `270.6K 🔥` `+119%`
1. [张家齐说陈芋汐21岁状态可怕](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%AF%B4%E9%99%88%E8%8A%8B%E6%B1%9021%E5%B2%81%E7%8A%B6%E6%80%81%E5%8F%AF%E6%80%95%23) `267.9K 🔥` `+119%`
1. [陈梦福原爱第4次交手](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A2%A6%E7%A6%8F%E5%8E%9F%E7%88%B1%E7%AC%AC4%E6%AC%A1%E4%BA%A4%E6%89%8B%23) `200.3K 🔥` `+132%`
1. [购房贴息 150万](https://s.weibo.com/weibo?q=%23%E8%B4%AD%E6%88%BF%E8%B4%B4%E6%81%AF%20150%E4%B8%87%23) `174.9K 🔥` `+41%`
1. [芒果的策划又封神了](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E7%9A%84%E7%AD%96%E5%88%92%E5%8F%88%E5%B0%81%E7%A5%9E%E4%BA%86%23) `458.3K 🔥`
1. [金鹰奖获奖名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `411.6K 🔥` `-43%`

Updated at 2026-09-30 10:06:15

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
