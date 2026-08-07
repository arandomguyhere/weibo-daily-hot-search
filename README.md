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

1. [央视网评银行午休 (CCTV online comments on bank lunch break)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BD%91%E8%AF%84%E9%93%B6%E8%A1%8C%E5%8D%88%E4%BC%91%23) `1.8M 🔥` `NEW`
1. [立秋](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E7%A7%8B%23) `1.2M 🔥` `NEW`
1. [买火车票新增新生预约功能](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%81%AB%E8%BD%A6%E7%A5%A8%E6%96%B0%E5%A2%9E%E6%96%B0%E7%94%9F%E9%A2%84%E7%BA%A6%E5%8A%9F%E8%83%BD%23) `950.3K 🔥` `NEW`
1. [三星折叠屏薄到离谱了](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E6%8A%98%E5%8F%A0%E5%B1%8F%E8%96%84%E5%88%B0%E7%A6%BB%E8%B0%B1%E4%BA%86%23) `933.8K 🔥` `NEW`
1. [苍兰诀](https://s.weibo.com/weibo?q=%23%E8%8B%8D%E5%85%B0%E8%AF%80%23) `932.4K 🔥` `NEW`
1. [立秋节气有啥习俗](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E7%A7%8B%E8%8A%82%E6%B0%94%E6%9C%89%E5%95%A5%E4%B9%A0%E4%BF%97%23) `569.6K 🔥` `NEW`
1. [没有中国人能笑着走出冬宫博物馆](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%83%BD%E7%AC%91%E7%9D%80%E8%B5%B0%E5%87%BA%E5%86%AC%E5%AE%AB%E5%8D%9A%E7%89%A9%E9%A6%86%23) `541.1K 🔥` `NEW`
1. [稀物集品牌大使黄星邱鼎杰](https://s.weibo.com/weibo?q=%23%E7%A8%80%E7%89%A9%E9%9B%86%E5%93%81%E7%89%8C%E5%A4%A7%E4%BD%BF%E9%BB%84%E6%98%9F%E9%82%B1%E9%BC%8E%E6%9D%B0%23) `431.4K 🔥` `NEW`
1. [韩国足协7场比赛性贿赂20名裁判](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%B6%B3%E5%8D%8F7%E5%9C%BA%E6%AF%94%E8%B5%9B%E6%80%A7%E8%B4%BF%E8%B5%8220%E5%90%8D%E8%A3%81%E5%88%A4%23) `355.1K 🔥` `NEW`
1. [王俊凯吃了姜妍给的大药丸](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%90%83%E4%BA%86%E5%A7%9C%E5%A6%8D%E7%BB%99%E7%9A%84%E5%A4%A7%E8%8D%AF%E4%B8%B8%23) `198.5K 🔥` `NEW`
1. [曝iPhone18Pro量产遇挑战 (iPhone 18 Pro mass production encounters challenges revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18Pro%E9%87%8F%E4%BA%A7%E9%81%87%E6%8C%91%E6%88%98%23) `193.9K 🔥` `NEW`
1. [徐洁云称有小米用户宠物叫孩go](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E4%BA%91%E7%A7%B0%E6%9C%89%E5%B0%8F%E7%B1%B3%E7%94%A8%E6%88%B7%E5%AE%A0%E7%89%A9%E5%8F%AB%E5%AD%A9go%23) `193.7K 🔥` `NEW`
1. [外网热议Mina参加西村力签售](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E7%83%AD%E8%AE%AEMina%E5%8F%82%E5%8A%A0%E8%A5%BF%E6%9D%91%E5%8A%9B%E7%AD%BE%E5%94%AE%23) `192.7K 🔥` `NEW`
1. [宋亚轩晒时代少年团合照](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%99%92%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%90%88%E7%85%A7%23) `192.5K 🔥` `NEW`
1. [国企拖欠3700万致市政工程停工](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BC%81%E6%8B%96%E6%AC%A03700%E4%B8%87%E8%87%B4%E5%B8%82%E6%94%BF%E5%B7%A5%E7%A8%8B%E5%81%9C%E5%B7%A5%23) `191.7K 🔥` `NEW`
1. [日本网友为Mina发声](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E4%B8%BAMina%E5%8F%91%E5%A3%B0%23) `190.9K 🔥` `NEW`
1. [我对二手烟就丁禹兮这个态度](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AF%B9%E4%BA%8C%E6%89%8B%E7%83%9F%E5%B0%B1%E4%B8%81%E7%A6%B9%E5%85%AE%E8%BF%99%E4%B8%AA%E6%80%81%E5%BA%A6%23) `190.2K 🔥` `NEW`
1. [特朗普对多晶硅加征关税](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%AF%B9%E5%A4%9A%E6%99%B6%E7%A1%85%E5%8A%A0%E5%BE%81%E5%85%B3%E7%A8%8E%23) `189.5K 🔥` `NEW`
1. [汪峰公司因AI从1100人减到400人](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%E5%85%AC%E5%8F%B8%E5%9B%A0AI%E4%BB%8E1100%E4%BA%BA%E5%87%8F%E5%88%B0400%E4%BA%BA%23) `189.1K 🔥` `NEW`
1. [U17国足绝杀勒沃库森](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B3%E7%BB%9D%E6%9D%80%E5%8B%92%E6%B2%83%E5%BA%93%E6%A3%AE%23) `188.4K 🔥` `NEW`
1. [1504岁的小兰花 (1504 year old little orchid)](https://s.weibo.com/weibo?q=%231504%E5%B2%81%E7%9A%84%E5%B0%8F%E5%85%B0%E8%8A%B1%23) `187.4K 🔥` `NEW`
1. [我的鸵鸟先生开播](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E9%B8%B5%E9%B8%9F%E5%85%88%E7%94%9F%E5%BC%80%E6%92%AD%23) `187.1K 🔥` `NEW`
1. [26岁女儿谈47岁妈妈突然产女](https://s.weibo.com/weibo?q=%2326%E5%B2%81%E5%A5%B3%E5%84%BF%E8%B0%8847%E5%B2%81%E5%A6%88%E5%A6%88%E7%AA%81%E7%84%B6%E4%BA%A7%E5%A5%B3%23) `186.4K 🔥` `NEW`
1. [辅警受贿关照40名在押人员获刑1年](https://s.weibo.com/weibo?q=%23%E8%BE%85%E8%AD%A6%E5%8F%97%E8%B4%BF%E5%85%B3%E7%85%A740%E5%90%8D%E5%9C%A8%E6%8A%BC%E4%BA%BA%E5%91%98%E8%8E%B7%E5%88%911%E5%B9%B4%23) `185.5K 🔥` `NEW`
1. [西村力大吧发长文回应](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E5%A4%A7%E5%90%A7%E5%8F%91%E9%95%BF%E6%96%87%E5%9B%9E%E5%BA%94%23) `185.0K 🔥` `NEW`
1. [粉笔公告](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E5%85%AC%E5%91%8A%23) `184.0K 🔥` `NEW`
1. [女子怀孕以为发胖就医后产下第三胎](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E4%BB%A5%E4%B8%BA%E5%8F%91%E8%83%96%E5%B0%B1%E5%8C%BB%E5%90%8E%E4%BA%A7%E4%B8%8B%E7%AC%AC%E4%B8%89%E8%83%8E%23) `183.3K 🔥` `NEW`
1. [Mina轻生前求西村力粉丝别网暴自己](https://s.weibo.com/weibo?q=%23Mina%E8%BD%BB%E7%94%9F%E5%89%8D%E6%B1%82%E8%A5%BF%E6%9D%91%E5%8A%9B%E7%B2%89%E4%B8%9D%E5%88%AB%E7%BD%91%E6%9A%B4%E8%87%AA%E5%B7%B1%23) `182.8K 🔥` `NEW`
1. [西村力 Mina](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%20Mina%23) `182.3K 🔥` `NEW`
1. [女孩只有你自己才是靠山](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%8F%AA%E6%9C%89%E4%BD%A0%E8%87%AA%E5%B7%B1%E6%89%8D%E6%98%AF%E9%9D%A0%E5%B1%B1%23) `181.0K 🔥` `NEW`
1. [宇树科技发行价150.8元 (The issue price of Yushu Technology is 150.8 yuan)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E5%8F%91%E8%A1%8C%E4%BB%B7150.8%E5%85%83%23) `170.3K 🔥` `NEW`
1. [陈伟霆曾舜晞托举配角](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E6%9B%BE%E8%88%9C%E6%99%9E%E6%89%98%E4%B8%BE%E9%85%8D%E8%A7%92%23) `167.9K 🔥` `NEW`
1. [4个孩子2个患自毁容貌综合征](https://s.weibo.com/weibo?q=%234%E4%B8%AA%E5%AD%A9%E5%AD%902%E4%B8%AA%E6%82%A3%E8%87%AA%E6%AF%81%E5%AE%B9%E8%B2%8C%E7%BB%BC%E5%90%88%E5%BE%81%23) `167.0K 🔥` `NEW`
1. [金鹰奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%23) `165.9K 🔥` `NEW`
1. [宋亚轩你不要鼠标了吗](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%BD%A0%E4%B8%8D%E8%A6%81%E9%BC%A0%E6%A0%87%E4%BA%86%E5%90%97%23) `165.5K 🔥` `NEW`
1. [重婚高管丈夫住在妻子出租别墅的小区](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%A9%9A%E9%AB%98%E7%AE%A1%E4%B8%88%E5%A4%AB%E4%BD%8F%E5%9C%A8%E5%A6%BB%E5%AD%90%E5%87%BA%E7%A7%9F%E5%88%AB%E5%A2%85%E7%9A%84%E5%B0%8F%E5%8C%BA%23) `154.5K 🔥` `NEW`
1. [朱洁静患癌没告诉任何人](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E6%B4%81%E9%9D%99%E6%82%A3%E7%99%8C%E6%B2%A1%E5%91%8A%E8%AF%89%E4%BB%BB%E4%BD%95%E4%BA%BA%23) `149.7K 🔥` `NEW`
1. [殷桃46岁绝美身材](https://s.weibo.com/weibo?q=%23%E6%AE%B7%E6%A1%8346%E5%B2%81%E7%BB%9D%E7%BE%8E%E8%BA%AB%E6%9D%90%23) `146.7K 🔥` `NEW`
1. [女子打减肥针暴瘦致多器官受损](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%93%E5%87%8F%E8%82%A5%E9%92%88%E6%9A%B4%E7%98%A6%E8%87%B4%E5%A4%9A%E5%99%A8%E5%AE%98%E5%8F%97%E6%8D%9F%23) `129.6K 🔥` `NEW`
1. [原来王楚然小时候是热舞女郎](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%B0%8F%E6%97%B6%E5%80%99%E6%98%AF%E7%83%AD%E8%88%9E%E5%A5%B3%E9%83%8E%23) `129.0K 🔥` `NEW`
1. [北京人头盖骨下落不明之谜 (The mystery of the missing Beijing Man skull)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E4%BA%BA%E5%A4%B4%E7%9B%96%E9%AA%A8%E4%B8%8B%E8%90%BD%E4%B8%8D%E6%98%8E%E4%B9%8B%E8%B0%9C%23) `127.8K 🔥` `NEW`
1. [有了隔阂说明缘分尽了](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%86%E9%9A%94%E9%98%82%E8%AF%B4%E6%98%8E%E7%BC%98%E5%88%86%E5%B0%BD%E4%BA%86%23) `125.7K 🔥` `NEW`
1. [原来不上班有这么多能做的事](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E4%B8%8A%E7%8F%AD%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E8%83%BD%E5%81%9A%E7%9A%84%E4%BA%8B%23) `120.5K 🔥` `NEW`
1. [第三者明知男方已婚仍育三子获刑](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%89%E8%80%85%E6%98%8E%E7%9F%A5%E7%94%B7%E6%96%B9%E5%B7%B2%E5%A9%9A%E4%BB%8D%E8%82%B2%E4%B8%89%E5%AD%90%E8%8E%B7%E5%88%91%23) `116.9K 🔥` `NEW`
1. [十多年的悔恨在这一刻终于释怀了](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%A4%9A%E5%B9%B4%E7%9A%84%E6%82%94%E6%81%A8%E5%9C%A8%E8%BF%99%E4%B8%80%E5%88%BB%E7%BB%88%E4%BA%8E%E9%87%8A%E6%80%80%E4%BA%86%23) `116.5K 🔥` `NEW`
1. [父亲多次篡改儿子户籍致一人三户口](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%A4%9A%E6%AC%A1%E7%AF%A1%E6%94%B9%E5%84%BF%E5%AD%90%E6%88%B7%E7%B1%8D%E8%87%B4%E4%B8%80%E4%BA%BA%E4%B8%89%E6%88%B7%E5%8F%A3%23) `114.6K 🔥` `NEW`
1. [曝关之琳与新男友相识几天便确定关系](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%85%B3%E4%B9%8B%E7%90%B3%E4%B8%8E%E6%96%B0%E7%94%B7%E5%8F%8B%E7%9B%B8%E8%AF%86%E5%87%A0%E5%A4%A9%E4%BE%BF%E7%A1%AE%E5%AE%9A%E5%85%B3%E7%B3%BB%23) `112.9K 🔥` `NEW`
1. [找到防窥膜的正确用法了](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%88%B0%E9%98%B2%E7%AA%A5%E8%86%9C%E7%9A%84%E6%AD%A3%E7%A1%AE%E7%94%A8%E6%B3%95%E4%BA%86%23) `112.6K 🔥` `NEW`
1. [日本女子买43亿动漫周边后取消](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E5%AD%90%E4%B9%B043%E4%BA%BF%E5%8A%A8%E6%BC%AB%E5%91%A8%E8%BE%B9%E5%90%8E%E5%8F%96%E6%B6%88%23) `111.9K 🔥` `NEW`
1. [曝刺棠9月上开机](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%BA%E6%A3%A09%E6%9C%88%E4%B8%8A%E5%BC%80%E6%9C%BA%23) `111.8K 🔥` `NEW`
1. [用惯拼多多发现很多东西不该这么贵 (I’m used to Pinduoduo and I’ve discovered that many things shouldn’t be so expensive.)](https://s.weibo.com/weibo?q=%23%E7%94%A8%E6%83%AF%E6%8B%BC%E5%A4%9A%E5%A4%9A%E5%8F%91%E7%8E%B0%E5%BE%88%E5%A4%9A%E4%B8%9C%E8%A5%BF%E4%B8%8D%E8%AF%A5%E8%BF%99%E4%B9%88%E8%B4%B5%23) `111.4K 🔥` `NEW`
1. [TF四代青岛演唱会场馆严正声明](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E9%9D%92%E5%B2%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9C%BA%E9%A6%86%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `110.6K 🔥` `NEW`

Updated at 2026-08-07 08:15:12

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
