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

1. [白海豚突然大拐弯 (White dolphin suddenly makes a sharp turn)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E7%AA%81%E7%84%B6%E5%A4%A7%E6%8B%90%E5%BC%AF%23) `2.3M 🔥` `NEW`
1. [这个暑期解锁宝藏中国](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E6%9A%91%E6%9C%9F%E8%A7%A3%E9%94%81%E5%AE%9D%E8%97%8F%E4%B8%AD%E5%9B%BD%23) `1.6M 🔥` `NEW`
1. [杨幂五穿祖海高定](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E4%BA%94%E7%A9%BF%E7%A5%96%E6%B5%B7%E9%AB%98%E5%AE%9A%23) `1.1M 🔥` `NEW`
1. [原来90后这么小众](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A590%E5%90%8E%E8%BF%99%E4%B9%88%E5%B0%8F%E4%BC%97%23) `881.6K 🔥` `NEW`
1. [张伟丽给K100Pro系列上强度](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BC%9F%E4%B8%BD%E7%BB%99K100Pro%E7%B3%BB%E5%88%97%E4%B8%8A%E5%BC%BA%E5%BA%A6%23) `803.5K 🔥` `NEW`
1. [百花奖造型出图](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E9%80%A0%E5%9E%8B%E5%87%BA%E5%9B%BE%23) `790.7K 🔥` `NEW`
1. [阿维塔不认为和华为合作是必要项](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%BB%B4%E5%A1%94%E4%B8%8D%E8%AE%A4%E4%B8%BA%E5%92%8C%E5%8D%8E%E4%B8%BA%E5%90%88%E4%BD%9C%E6%98%AF%E5%BF%85%E8%A6%81%E9%A1%B9%23) `460.4K 🔥` `NEW`
1. [台风致上海严重内涝](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E8%87%B4%E4%B8%8A%E6%B5%B7%E4%B8%A5%E9%87%8D%E5%86%85%E6%B6%9D%23) `454.2K 🔥` `NEW`
1. [Ning爆料Bin彻底不打了](https://s.weibo.com/weibo?q=%23Ning%E7%88%86%E6%96%99Bin%E5%BD%BB%E5%BA%95%E4%B8%8D%E6%89%93%E4%BA%86%23) `341.9K 🔥` `NEW`
1. [寿司郎误将已付款顾客当逃单报警](https://s.weibo.com/weibo?q=%23%E5%AF%BF%E5%8F%B8%E9%83%8E%E8%AF%AF%E5%B0%86%E5%B7%B2%E4%BB%98%E6%AC%BE%E9%A1%BE%E5%AE%A2%E5%BD%93%E9%80%83%E5%8D%95%E6%8A%A5%E8%AD%A6%23) `341.8K 🔥` `NEW`
1. [中式生活清单刷屏海外社交媒体 (Chinese lifestyle list dominates overseas social media)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%BC%8F%E7%94%9F%E6%B4%BB%E6%B8%85%E5%8D%95%E5%88%B7%E5%B1%8F%E6%B5%B7%E5%A4%96%E7%A4%BE%E4%BA%A4%E5%AA%92%E4%BD%93%23) `341.7K 🔥` `NEW`
1. [立秋后突然就不热了](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E7%A7%8B%E5%90%8E%E7%AA%81%E7%84%B6%E5%B0%B1%E4%B8%8D%E7%83%AD%E4%BA%86%23) `341.6K 🔥` `NEW`
1. [孔雪儿自曝拒绝浪姐邀请](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E8%87%AA%E6%9B%9D%E6%8B%92%E7%BB%9D%E6%B5%AA%E5%A7%90%E9%82%80%E8%AF%B7%23) `341.4K 🔥` `NEW`
1. [眼见为实的时代已然过去](https://s.weibo.com/weibo?q=%23%E7%9C%BC%E8%A7%81%E4%B8%BA%E5%AE%9E%E7%9A%84%E6%97%B6%E4%BB%A3%E5%B7%B2%E7%84%B6%E8%BF%87%E5%8E%BB%23) `341.1K 🔥` `NEW`
1. [欧阳娜娜天猫七夕氧气少女感](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%A4%A9%E7%8C%AB%E4%B8%83%E5%A4%95%E6%B0%A7%E6%B0%94%E5%B0%91%E5%A5%B3%E6%84%9F%23) `341.1K 🔥` `NEW`
1. [第一批用AI租房的受益者出现了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E7%94%A8AI%E7%A7%9F%E6%88%BF%E7%9A%84%E5%8F%97%E7%9B%8A%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `341.0K 🔥` `NEW`
1. [百花奖闭幕式嘉宾阵容](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E9%97%AD%E5%B9%95%E5%BC%8F%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `340.9K 🔥` `NEW`
1. [迪丽热巴曾靠玉米茶叶蛋熬过追梦期](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9B%BE%E9%9D%A0%E7%8E%89%E7%B1%B3%E8%8C%B6%E5%8F%B6%E8%9B%8B%E7%86%AC%E8%BF%87%E8%BF%BD%E6%A2%A6%E6%9C%9F%23) `340.8K 🔥` `NEW`
1. [电影惊蛰无声](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `340.7K 🔥` `NEW`
1. [深圳APEC峰会倒计时100天](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3APEC%E5%B3%B0%E4%BC%9A%E5%80%92%E8%AE%A1%E6%97%B6100%E5%A4%A9%23) `340.6K 🔥` `NEW`
1. [广岛长崎的昨日未必不会是日本的明天 (Hiroshima and Nagasaki’s yesterday may not be Japan’s tomorrow)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B2%9B%E9%95%BF%E5%B4%8E%E7%9A%84%E6%98%A8%E6%97%A5%E6%9C%AA%E5%BF%85%E4%B8%8D%E4%BC%9A%E6%98%AF%E6%97%A5%E6%9C%AC%E7%9A%84%E6%98%8E%E5%A4%A9%23) `333.5K 🔥` `NEW`
1. [金智秀北京](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E5%8C%97%E4%BA%AC%23) `330.5K 🔥` `NEW`
1. [韩国人吃泡菜量大降](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%BA%BA%E5%90%83%E6%B3%A1%E8%8F%9C%E9%87%8F%E5%A4%A7%E9%99%8D%23) `323.0K 🔥` `NEW`
1. [刘耀文百花奖双奢造型](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E7%99%BE%E8%8A%B1%E5%A5%96%E5%8F%8C%E5%A5%A2%E9%80%A0%E5%9E%8B%23) `322.8K 🔥` `NEW`
1. [刘耀文银花](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E9%93%B6%E8%8A%B1%23) `312.5K 🔥` `NEW`
1. [无罪释放后负债3000万国赔仅41万](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%BD%AA%E9%87%8A%E6%94%BE%E5%90%8E%E8%B4%9F%E5%80%BA3000%E4%B8%87%E5%9B%BD%E8%B5%94%E4%BB%8541%E4%B8%87%23) `312.3K 🔥` `NEW`
1. [罗子君凌玲押送陈俊生](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%AD%90%E5%90%9B%E5%87%8C%E7%8E%B2%E6%8A%BC%E9%80%81%E9%99%88%E4%BF%8A%E7%94%9F%23) `270.8K 🔥` `NEW`
1. [路虎卫士宣布限时降价](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E8%99%8E%E5%8D%AB%E5%A3%AB%E5%AE%A3%E5%B8%83%E9%99%90%E6%97%B6%E9%99%8D%E4%BB%B7%23) `226.7K 🔥` `NEW`
1. [台风白海豚移入江西上饶](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E7%A7%BB%E5%85%A5%E6%B1%9F%E8%A5%BF%E4%B8%8A%E9%A5%B6%23) `225.9K 🔥` `NEW`
1. [金智秀北京活动人气](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E5%8C%97%E4%BA%AC%E6%B4%BB%E5%8A%A8%E4%BA%BA%E6%B0%94%23) `220.9K 🔥` `NEW`
1. [易烊千玺喝的是热水 (Yi Yang Qianxi drinks hot water)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%96%9D%E7%9A%84%E6%98%AF%E7%83%AD%E6%B0%B4%23) `184.3K 🔥` `NEW`
1. [Shanji谈Flandre加入BLG原因](https://s.weibo.com/weibo?q=%23Shanji%E8%B0%88Flandre%E5%8A%A0%E5%85%A5BLG%E5%8E%9F%E5%9B%A0%23) `180.2K 🔥` `NEW`
1. [演员秦焰去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%A7%A6%E7%84%B0%E5%8E%BB%E4%B8%96%23) `3.7M 🔥` `+462%`
1. [无锡 内涝](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%94%A1%20%E5%86%85%E6%B6%9D%23) `341.5K 🔥`
1. [大疆错失宇树 (DJI misses Yushu)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86%E9%94%99%E5%A4%B1%E5%AE%87%E6%A0%91%23) `341.2K 🔥`
1. [我们都低估了时间的力量](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E9%83%BD%E4%BD%8E%E4%BC%B0%E4%BA%86%E6%97%B6%E9%97%B4%E7%9A%84%E5%8A%9B%E9%87%8F%23) `340.8K 🔥`
1. [张本兄妹同时夺冠国乒怎么了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E5%85%84%E5%A6%B9%E5%90%8C%E6%97%B6%E5%A4%BA%E5%86%A0%E5%9B%BD%E4%B9%92%E6%80%8E%E4%B9%88%E4%BA%86%23) `338.0K 🔥`
1. [偶像来了 重启回归 (Idol is here, reboot and return)](https://s.weibo.com/weibo?q=%23%E5%81%B6%E5%83%8F%E6%9D%A5%E4%BA%86%20%E9%87%8D%E5%90%AF%E5%9B%9E%E5%BD%92%23) `1.3M 🔥` `-49%`
1. [迪丽热巴拍照被认出仓皇跑到车上](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8B%8D%E7%85%A7%E8%A2%AB%E8%AE%A4%E5%87%BA%E4%BB%93%E7%9A%87%E8%B7%91%E5%88%B0%E8%BD%A6%E4%B8%8A%23) `341.7K 🔥` `-47%`
1. [费大厨撤下全国小炒肉大王称号](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E5%A4%A7%E5%8E%A8%E6%92%A4%E4%B8%8B%E5%85%A8%E5%9B%BD%E5%B0%8F%E7%82%92%E8%82%89%E5%A4%A7%E7%8E%8B%E7%A7%B0%E5%8F%B7%23) `341.4K 🔥` `-52%`
1. [物业费的欠费原因 (Reasons for property fee arrears)](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%B8%9A%E8%B4%B9%E7%9A%84%E6%AC%A0%E8%B4%B9%E5%8E%9F%E5%9B%A0%23) `341.3K 🔥` `-70%`
1. [白海豚 北京](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%20%E5%8C%97%E4%BA%AC%23) `336.4K 🔥` `-49%`
1. [从热词迭代读懂鲜活中国 (Understand the vivid China through iteration of hot words)](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E7%83%AD%E8%AF%8D%E8%BF%AD%E4%BB%A3%E8%AF%BB%E6%87%82%E9%B2%9C%E6%B4%BB%E4%B8%AD%E5%9B%BD%23) `331.0K 🔥` `-75%`
1. [业内称成毅被投资人疯抢](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E7%A7%B0%E6%88%90%E6%AF%85%E8%A2%AB%E6%8A%95%E8%B5%84%E4%BA%BA%E7%96%AF%E6%8A%A2%23) `324.8K 🔥` `-45%`
1. [我们来了2026嘉宾 (Here are our 2026 guests)](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E6%9D%A5%E4%BA%862026%E5%98%89%E5%AE%BE%23) `312.3K 🔥` `-53%`
1. [白海豚 (white dolphin)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `244.3K 🔥` `-26%`
1. [79年出了三个魔丸](https://s.weibo.com/weibo?q=%2379%E5%B9%B4%E5%87%BA%E4%BA%86%E4%B8%89%E4%B8%AA%E9%AD%94%E4%B8%B8%23) `225.5K 🔥` `-40%`
1. [古茗排队](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E8%8C%97%E6%8E%92%E9%98%9F%23) `210.5K 🔥` `-51%`
1. [西村力风波后首次直播](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E9%A3%8E%E6%B3%A2%E5%90%8E%E9%A6%96%E6%AC%A1%E7%9B%B4%E6%92%AD%23) `210.5K 🔥` `-49%`
1. [C罗婚礼闹乌龙](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%A9%9A%E7%A4%BC%E9%97%B9%E4%B9%8C%E9%BE%99%23) `178.4K 🔥` `-73%`
1. [后来她没有再游泳而是当了特种兵](https://s.weibo.com/weibo?q=%23%E5%90%8E%E6%9D%A5%E5%A5%B9%E6%B2%A1%E6%9C%89%E5%86%8D%E6%B8%B8%E6%B3%B3%E8%80%8C%E6%98%AF%E5%BD%93%E4%BA%86%E7%89%B9%E7%A7%8D%E5%85%B5%23) `178.3K 🔥` `-21%`

Updated at 2026-08-10 16:46:20

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
