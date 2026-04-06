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

1. [香港飞香港的航班 (flights from Hong Kong to Hong Kong)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E9%A3%9E%E9%A6%99%E6%B8%AF%E7%9A%84%E8%88%AA%E7%8F%AD%23) `1.2M 🔥` `NEW`
1. [樊振东23岁成就世界杯四冠王](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C23%E5%B2%81%E6%88%90%E5%B0%B1%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%86%A0%E7%8E%8B%23) `847.8K 🔥` `NEW`
1. [王濛练心愿便利贴要疯了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%BB%83%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%E8%A6%81%E7%96%AF%E4%BA%86%23) `391.6K 🔥` `NEW`
1. [伊朗逼美国做选择](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%80%BC%E7%BE%8E%E5%9B%BD%E5%81%9A%E9%80%89%E6%8B%A9%23) `389.6K 🔥` `NEW`
1. [洗衣液是需要反应时间的](https://s.weibo.com/weibo?q=%23%E6%B4%97%E8%A1%A3%E6%B6%B2%E6%98%AF%E9%9C%80%E8%A6%81%E5%8F%8D%E5%BA%94%E6%97%B6%E9%97%B4%E7%9A%84%23) `389.6K 🔥` `NEW`
1. [96岁姐弟恋夫妻77年没吵过架](https://s.weibo.com/weibo?q=%2396%E5%B2%81%E5%A7%90%E5%BC%9F%E6%81%8B%E5%A4%AB%E5%A6%BB77%E5%B9%B4%E6%B2%A1%E5%90%B5%E8%BF%87%E6%9E%B6%23) `215.6K 🔥` `NEW`
1. [李小冉想补偿唐艺昕](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%83%B3%E8%A1%A5%E5%81%BF%E5%94%90%E8%89%BA%E6%98%95%23) `151.3K 🔥` `NEW`
1. [结婚登记当日得知女友患精神分裂](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0%E5%BD%93%E6%97%A5%E5%BE%97%E7%9F%A5%E5%A5%B3%E5%8F%8B%E6%82%A3%E7%B2%BE%E7%A5%9E%E5%88%86%E8%A3%82%23) `151.1K 🔥` `NEW`
1. [伊朗军方公布战果](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%86%9B%E6%96%B9%E5%85%AC%E5%B8%83%E6%88%98%E6%9E%9C%23) `151.0K 🔥` `NEW`
1. [俄罗斯伊朗外长通电话](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E9%80%9A%E7%94%B5%E8%AF%9D%23) `130.5K 🔥` `NEW`
1. [美航天局长称外星人存在几率相当高 (US space chief says chances of alien existence are high)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%88%AA%E5%A4%A9%E5%B1%80%E9%95%BF%E7%A7%B0%E5%A4%96%E6%98%9F%E4%BA%BA%E5%AD%98%E5%9C%A8%E5%87%A0%E7%8E%87%E7%9B%B8%E5%BD%93%E9%AB%98%23) `125.2K 🔥` `NEW`
1. [伊朗称霍尔木兹海峡再也回不到从前](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%86%8D%E4%B9%9F%E5%9B%9E%E4%B8%8D%E5%88%B0%E4%BB%8E%E5%89%8D%23) `122.1K 🔥` `NEW`
1. [美军炸毁运输机地点已成打卡点](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E7%82%B8%E6%AF%81%E8%BF%90%E8%BE%93%E6%9C%BA%E5%9C%B0%E7%82%B9%E5%B7%B2%E6%88%90%E6%89%93%E5%8D%A1%E7%82%B9%23) `110.6K 🔥` `NEW`
1. [食客打差评鸡煲店老板更开心](https://s.weibo.com/weibo?q=%23%E9%A3%9F%E5%AE%A2%E6%89%93%E5%B7%AE%E8%AF%84%E9%B8%A1%E7%85%B2%E5%BA%97%E8%80%81%E6%9D%BF%E6%9B%B4%E5%BC%80%E5%BF%83%23) `106.1K 🔥` `NEW`
1. [李昀锐差点摔下马](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%B7%AE%E7%82%B9%E6%91%94%E4%B8%8B%E9%A9%AC%23) `102.1K 🔥` `NEW`
1. [我们的少年时代2开播倒计时](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E5%BC%80%E6%92%AD%E5%80%92%E8%AE%A1%E6%97%B6%23) `101.2K 🔥` `NEW`
1. [填补了馒头没有毒的空白](https://s.weibo.com/weibo?q=%23%E5%A1%AB%E8%A1%A5%E4%BA%86%E9%A6%92%E5%A4%B4%E6%B2%A1%E6%9C%89%E6%AF%92%E7%9A%84%E7%A9%BA%E7%99%BD%23) `100.3K 🔥` `NEW`
1. [杨幂宋祖儿周也王楚然 全女穿越](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%AE%8B%E7%A5%96%E5%84%BF%E5%91%A8%E4%B9%9F%E7%8E%8B%E6%A5%9A%E7%84%B6%20%E5%85%A8%E5%A5%B3%E7%A9%BF%E8%B6%8A%23) `96.2K 🔥` `NEW`
1. [刘诗雯晒与孙颖莎王曼昱等合照](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E9%9B%AF%E6%99%92%E4%B8%8E%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%9B%BC%E6%98%B1%E7%AD%89%E5%90%88%E7%85%A7%23) `95.1K 🔥` `NEW`
1. [被收养的小猫看见妈妈还在流浪](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%94%B6%E5%85%BB%E7%9A%84%E5%B0%8F%E7%8C%AB%E7%9C%8B%E8%A7%81%E5%A6%88%E5%A6%88%E8%BF%98%E5%9C%A8%E6%B5%81%E6%B5%AA%23) `85.6K 🔥` `NEW`
1. [美伊停火协议或将于6日生效 (The US-Iran ceasefire agreement may come into effect on the 6th)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E5%8D%8F%E8%AE%AE%E6%88%96%E5%B0%86%E4%BA%8E6%E6%97%A5%E7%94%9F%E6%95%88%23) `83.4K 🔥` `NEW`
1. [捡的海螺可能是本地人吃剩的](https://s.weibo.com/weibo?q=%23%E6%8D%A1%E7%9A%84%E6%B5%B7%E8%9E%BA%E5%8F%AF%E8%83%BD%E6%98%AF%E6%9C%AC%E5%9C%B0%E4%BA%BA%E5%90%83%E5%89%A9%E7%9A%84%23) `77.7K 🔥` `NEW`
1. [美媒称调解方正争取美伊停火45天](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E8%B0%83%E8%A7%A3%E6%96%B9%E6%AD%A3%E4%BA%89%E5%8F%96%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB45%E5%A4%A9%23) `76.0K 🔥` `NEW`
1. [把椰奶当作冰袋扔了](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E6%A4%B0%E5%A5%B6%E5%BD%93%E4%BD%9C%E5%86%B0%E8%A2%8B%E6%89%94%E4%BA%86%23) `74.1K 🔥` `NEW`
1. [我国又解决一项世界级难题](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%8F%88%E8%A7%A3%E5%86%B3%E4%B8%80%E9%A1%B9%E4%B8%96%E7%95%8C%E7%BA%A7%E9%9A%BE%E9%A2%98%23) `70.4K 🔥` `NEW`
1. [当租到烟民退租的房](https://s.weibo.com/weibo?q=%23%E5%BD%93%E7%A7%9F%E5%88%B0%E7%83%9F%E6%B0%91%E9%80%80%E7%A7%9F%E7%9A%84%E6%88%BF%23) `69.4K 🔥` `NEW`
1. [莫氏鸡煲老板跳舞视频曝光](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E8%B7%B3%E8%88%9E%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `67.4K 🔥` `NEW`
1. [粉丝否认周杰伦3小时只唱了90分钟](https://s.weibo.com/weibo?q=%23%E7%B2%89%E4%B8%9D%E5%90%A6%E8%AE%A4%E5%91%A8%E6%9D%B0%E4%BC%A63%E5%B0%8F%E6%97%B6%E5%8F%AA%E5%94%B1%E4%BA%8690%E5%88%86%E9%92%9F%23) `65.9K 🔥` `NEW`
1. [汪顺管晨辰兄妹合照上新](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E9%A1%BA%E7%AE%A1%E6%99%A8%E8%BE%B0%E5%85%84%E5%A6%B9%E5%90%88%E7%85%A7%E4%B8%8A%E6%96%B0%23) `61.6K 🔥` `NEW`
1. [医院专家一小时接诊6个心梗患者](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E4%B8%93%E5%AE%B6%E4%B8%80%E5%B0%8F%E6%97%B6%E6%8E%A5%E8%AF%8A6%E4%B8%AA%E5%BF%83%E6%A2%97%E6%82%A3%E8%80%85%23) `61.3K 🔥` `NEW`
1. [小时候睡觉前都要关机 (When I was a kid, I had to turn off my phone before going to bed.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E7%9D%A1%E8%A7%89%E5%89%8D%E9%83%BD%E8%A6%81%E5%85%B3%E6%9C%BA%23) `162.1K 🔥` `+75%`
1. [4月草木中都是思念](https://s.weibo.com/weibo?q=%234%E6%9C%88%E8%8D%89%E6%9C%A8%E4%B8%AD%E9%83%BD%E6%98%AF%E6%80%9D%E5%BF%B5%23) `685.8K 🔥`
1. [知情人透露郭艾伦被骗细节](https://s.weibo.com/weibo?q=%23%E7%9F%A5%E6%83%85%E4%BA%BA%E9%80%8F%E9%9C%B2%E9%83%AD%E8%89%BE%E4%BC%A6%E8%A2%AB%E9%AA%97%E7%BB%86%E8%8A%82%23) `198.7K 🔥`
1. [桃黑黑道歉 (Taoheihei apologizes)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E9%81%93%E6%AD%89%23) `151.2K 🔥`
1. [乘风2026一公选歌组队 (Chengfeng 2026 Yi Gong selects songs to form a team)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%B8%80%E5%85%AC%E9%80%89%E6%AD%8C%E7%BB%84%E9%98%9F%23) `148.9K 🔥`
1. [媒体人称郭艾伦被骗似有隐情 (Media people said that Guo Ailun was deceived and seemed to have a hidden secret)](https://s.weibo.com/weibo?q=%23%E5%AA%92%E4%BD%93%E4%BA%BA%E7%A7%B0%E9%83%AD%E8%89%BE%E4%BC%A6%E8%A2%AB%E9%AA%97%E4%BC%BC%E6%9C%89%E9%9A%90%E6%83%85%23) `78.9K 🔥`
1. [正午阳光首部正统武侠剧雨霖铃](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%E9%A6%96%E9%83%A8%E6%AD%A3%E7%BB%9F%E6%AD%A6%E4%BE%A0%E5%89%A7%E9%9B%A8%E9%9C%96%E9%93%83%23) `151.2K 🔥` `-86%`
1. [温峥嵘爆灯被拒](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E7%88%86%E7%81%AF%E8%A2%AB%E6%8B%92%23) `151.0K 🔥` `-36%`
1. [伊朗5名教授60多名大学生遭袭身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%975%E5%90%8D%E6%95%99%E6%8E%8860%E5%A4%9A%E5%90%8D%E5%A4%A7%E5%AD%A6%E7%94%9F%E9%81%AD%E8%A2%AD%E8%BA%AB%E4%BA%A1%23) `141.6K 🔥` `-40%`
1. [李小冉拒绝万千惠 (Li Xiaoran refuses thousands of benefits)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%8B%92%E7%BB%9D%E4%B8%87%E5%8D%83%E6%83%A0%23) `140.6K 🔥` `-59%`
1. [王楚钦夺冠彻底撕碎依赖队友标签](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A4%BA%E5%86%A0%E5%BD%BB%E5%BA%95%E6%92%95%E7%A2%8E%E4%BE%9D%E8%B5%96%E9%98%9F%E5%8F%8B%E6%A0%87%E7%AD%BE%23) `123.0K 🔥` `-43%`
1. [女子住酒店发现装饰画后是门 (A woman staying in a hotel found a door behind a decorative painting)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%8F%E9%85%92%E5%BA%97%E5%8F%91%E7%8E%B0%E8%A3%85%E9%A5%B0%E7%94%BB%E5%90%8E%E6%98%AF%E9%97%A8%23) `111.3K 🔥` `-85%`
1. [TEN李永钦不续约](https://s.weibo.com/weibo?q=%23TEN%E6%9D%8E%E6%B0%B8%E9%92%A6%E4%B8%8D%E7%BB%AD%E7%BA%A6%23) `107.6K 🔥` `-41%`
1. [王濛真要唱心愿便利贴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%9C%9F%E8%A6%81%E5%94%B1%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%23) `88.4K 🔥` `-44%`
1. [两个魔丸生了个灵珠](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%B8%AA%E9%AD%94%E4%B8%B8%E7%94%9F%E4%BA%86%E4%B8%AA%E7%81%B5%E7%8F%A0%23) `87.0K 🔥` `-63%`
1. [赵丽颖高月香的舞蹈训练图 (Dance training pictures of Zhao Liying and Gao Yuexiang)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%AB%98%E6%9C%88%E9%A6%99%E7%9A%84%E8%88%9E%E8%B9%88%E8%AE%AD%E7%BB%83%E5%9B%BE%23) `80.3K 🔥` `-33%`
1. [伊能静说还想再生一个 (Yi Nengjing said she wants to have another child)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E8%AF%B4%E8%BF%98%E6%83%B3%E5%86%8D%E7%94%9F%E4%B8%80%E4%B8%AA%23) `68.6K 🔥` `-59%`
1. [SuperJunior致歉](https://s.weibo.com/weibo?q=%23SuperJunior%E8%87%B4%E6%AD%89%23) `64.6K 🔥` `-58%`
1. [岳云鹏已经瘦了8斤了](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E4%BA%91%E9%B9%8F%E5%B7%B2%E7%BB%8F%E7%98%A6%E4%BA%868%E6%96%A4%E4%BA%86%23) `61.5K 🔥` `-49%`
1. [机票高铁双双涨价](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E7%A5%A8%E9%AB%98%E9%93%81%E5%8F%8C%E5%8F%8C%E6%B6%A8%E4%BB%B7%23) `59.5K 🔥` `-60%`

Updated at 2026-04-06 16:07:22

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
