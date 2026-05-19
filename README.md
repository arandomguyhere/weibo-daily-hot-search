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

1. [医保个账新规来了 (New rules for medical insurance accounts are coming)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E4%BF%9D%E4%B8%AA%E8%B4%A6%E6%96%B0%E8%A7%84%E6%9D%A5%E4%BA%86%23) `2.0M 🔥` `NEW`
1. [62人患癌村工厂承认有人通风报信](https://s.weibo.com/weibo?q=%2362%E4%BA%BA%E6%82%A3%E7%99%8C%E6%9D%91%E5%B7%A5%E5%8E%82%E6%89%BF%E8%AE%A4%E6%9C%89%E4%BA%BA%E9%80%9A%E9%A3%8E%E6%8A%A5%E4%BF%A1%23) `1.8M 🔥` `NEW`
1. [我没病 只是浑身不得劲](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%B2%A1%E7%97%85%20%E5%8F%AA%E6%98%AF%E6%B5%91%E8%BA%AB%E4%B8%8D%E5%BE%97%E5%8A%B2%23) `945.5K 🔥` `NEW`
1. [丈夫想做亲子鉴定妻子称孩子会恨你](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E6%83%B3%E5%81%9A%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%E5%A6%BB%E5%AD%90%E7%A7%B0%E5%AD%A9%E5%AD%90%E4%BC%9A%E6%81%A8%E4%BD%A0%23) `936.2K 🔥` `NEW`
1. [倪萍让给阿嬷的情书男女主别乱接片](https://s.weibo.com/weibo?q=%23%E5%80%AA%E8%90%8D%E8%AE%A9%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%94%B7%E5%A5%B3%E4%B8%BB%E5%88%AB%E4%B9%B1%E6%8E%A5%E7%89%87%23) `920.5K 🔥` `NEW`
1. [孙杨发火这段疑似被剪了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%8F%91%E7%81%AB%E8%BF%99%E6%AE%B5%E7%96%91%E4%BC%BC%E8%A2%AB%E5%89%AA%E4%BA%86%23) `525.4K 🔥` `NEW`
1. [魏牌V9X上市34.98万元起](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E7%89%8CV9X%E4%B8%8A%E5%B8%8234.98%E4%B8%87%E5%85%83%E8%B5%B7%23) `462.3K 🔥` `NEW`
1. [普京第25次到访中国](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%AC%AC25%E6%AC%A1%E5%88%B0%E8%AE%BF%E4%B8%AD%E5%9B%BD%23) `230.0K 🔥` `NEW`
1. [普京发表访华视频讲话](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E5%8F%91%E8%A1%A8%E8%AE%BF%E5%8D%8E%E8%A7%86%E9%A2%91%E8%AE%B2%E8%AF%9D%23) `228.6K 🔥` `NEW`
1. [内马尔得知入选超激动](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E5%BE%97%E7%9F%A5%E5%85%A5%E9%80%89%E8%B6%85%E6%BF%80%E5%8A%A8%23) `225.7K 🔥` `NEW`
1. [王者荣耀 (King of Glory)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `224.0K 🔥` `NEW`
1. [iOS27或6月发布](https://s.weibo.com/weibo?q=%23iOS27%E6%88%966%E6%9C%88%E5%8F%91%E5%B8%83%23) `220.0K 🔥` `NEW`
1. [俄中友谊不针对第三方](https://s.weibo.com/weibo?q=%23%E4%BF%84%E4%B8%AD%E5%8F%8B%E8%B0%8A%E4%B8%8D%E9%92%88%E5%AF%B9%E7%AC%AC%E4%B8%89%E6%96%B9%23) `219.5K 🔥` `NEW`
1. [幼儿园回应2岁宝宝被老师坐断腿](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E5%9B%9E%E5%BA%942%E5%B2%81%E5%AE%9D%E5%AE%9D%E8%A2%AB%E8%80%81%E5%B8%88%E5%9D%90%E6%96%AD%E8%85%BF%23) `218.2K 🔥` `NEW`
1. [给阿嬷的情书正确读音](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E6%AD%A3%E7%A1%AE%E8%AF%BB%E9%9F%B3%23) `217.1K 🔥` `NEW`
1. [曝神仙肉男主在谈侯明昊](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%A5%9E%E4%BB%99%E8%82%89%E7%94%B7%E4%B8%BB%E5%9C%A8%E8%B0%88%E4%BE%AF%E6%98%8E%E6%98%8A%23) `216.3K 🔥` `NEW`
1. [特朗普称推迟攻击伊朗](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E6%8E%A8%E8%BF%9F%E6%94%BB%E5%87%BB%E4%BC%8A%E6%9C%97%23) `216.1K 🔥` `NEW`
1. [马刺vs雷霆](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BAvs%E9%9B%B7%E9%9C%86%23) `215.6K 🔥` `NEW`
1. [洁丽雅风波意外带火同行](https://s.weibo.com/weibo?q=%23%E6%B4%81%E4%B8%BD%E9%9B%85%E9%A3%8E%E6%B3%A2%E6%84%8F%E5%A4%96%E5%B8%A6%E7%81%AB%E5%90%8C%E8%A1%8C%23) `214.8K 🔥` `NEW`
1. [化妆品是惹到你了吗](https://s.weibo.com/weibo?q=%23%E5%8C%96%E5%A6%86%E5%93%81%E6%98%AF%E6%83%B9%E5%88%B0%E4%BD%A0%E4%BA%86%E5%90%97%23) `199.0K 🔥` `NEW`
1. [樊振东的心情都在脸上了 (Fan Zhendong's mood is reflected on his face)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%9A%84%E5%BF%83%E6%83%85%E9%83%BD%E5%9C%A8%E8%84%B8%E4%B8%8A%E4%BA%86%23) `198.7K 🔥` `NEW`
1. [已婚男收女友170万交付19根假金条](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E5%A9%9A%E7%94%B7%E6%94%B6%E5%A5%B3%E5%8F%8B170%E4%B8%87%E4%BA%A4%E4%BB%9819%E6%A0%B9%E5%81%87%E9%87%91%E6%9D%A1%23) `196.8K 🔥` `NEW`
1. [安切洛蒂回应内马尔入选](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%88%87%E6%B4%9B%E8%92%82%E5%9B%9E%E5%BA%94%E5%86%85%E9%A9%AC%E5%B0%94%E5%85%A5%E9%80%89%23) `154.2K 🔥` `NEW`
1. [内马尔第四次征战世界杯](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E7%AC%AC%E5%9B%9B%E6%AC%A1%E5%BE%81%E6%88%98%E4%B8%96%E7%95%8C%E6%9D%AF%23) `117.5K 🔥` `NEW`
1. [台湾星二代孙安佐因制作武器被抓](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E6%98%9F%E4%BA%8C%E4%BB%A3%E5%AD%99%E5%AE%89%E4%BD%90%E5%9B%A0%E5%88%B6%E4%BD%9C%E6%AD%A6%E5%99%A8%E8%A2%AB%E6%8A%93%23) `110.9K 🔥` `NEW`
1. [苹果WWDC26邀请函](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CWWDC26%E9%82%80%E8%AF%B7%E5%87%BD%23) `108.2K 🔥` `NEW`
1. [2026中国网络文明大会 (2026 China Internet Civilization Conference)](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E6%96%87%E6%98%8E%E5%A4%A7%E4%BC%9A%23) `949.6K 🔥` `+43%`
1. [王者520皮肤爆料](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85520%E7%9A%AE%E8%82%A4%E7%88%86%E6%96%99%23) `451.1K 🔥` `+143%`
1. [感觉AI治好了我多年的老花眼](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89AI%E6%B2%BB%E5%A5%BD%E4%BA%86%E6%88%91%E5%A4%9A%E5%B9%B4%E7%9A%84%E8%80%81%E8%8A%B1%E7%9C%BC%23) `230.9K 🔥` `+23%`
1. [预制菜已经进化到开展会了 (Prepared dishes have evolved into a party)](https://s.weibo.com/weibo?q=%23%E9%A2%84%E5%88%B6%E8%8F%9C%E5%B7%B2%E7%BB%8F%E8%BF%9B%E5%8C%96%E5%88%B0%E5%BC%80%E5%B1%95%E4%BC%9A%E4%BA%86%23) `227.4K 🔥` `+24%`
1. [真有人在豆包预约餐厅 (Someone really made a restaurant reservation at Doubao)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%9C%89%E4%BA%BA%E5%9C%A8%E8%B1%86%E5%8C%85%E9%A2%84%E7%BA%A6%E9%A4%90%E5%8E%85%23) `226.2K 🔥` `+21%`
1. [为什么领导总是那么精力充沛 (Why are leaders always so energetic?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E9%A2%86%E5%AF%BC%E6%80%BB%E6%98%AF%E9%82%A3%E4%B9%88%E7%B2%BE%E5%8A%9B%E5%85%85%E6%B2%9B%23) `220.4K 🔥` `+105%`
1. [五月天向柳州地震捐助100万元](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%9C%88%E5%A4%A9%E5%90%91%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E6%8D%90%E5%8A%A9100%E4%B8%87%E5%85%83%23) `217.7K 🔥` `+31%`
1. [羊怕小朋友力气不够还知道搭把手](https://s.weibo.com/weibo?q=%23%E7%BE%8A%E6%80%95%E5%B0%8F%E6%9C%8B%E5%8F%8B%E5%8A%9B%E6%B0%94%E4%B8%8D%E5%A4%9F%E8%BF%98%E7%9F%A5%E9%81%93%E6%90%AD%E6%8A%8A%E6%89%8B%23) `208.4K 🔥` `+25%`
1. [荣耀600 (Honor 600)](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80600%23) `106.9K 🔥` `+432%`
1. [孙杨曾致电马云寻求人生方向 (Sun Yang once called Jack Ma to seek direction in life)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E6%9B%BE%E8%87%B4%E7%94%B5%E9%A9%AC%E4%BA%91%E5%AF%BB%E6%B1%82%E4%BA%BA%E7%94%9F%E6%96%B9%E5%90%91%23) `222.2K 🔥`
1. [唐艺昕 这下妆卸干净了](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%20%E8%BF%99%E4%B8%8B%E5%A6%86%E5%8D%B8%E5%B9%B2%E5%87%80%E4%BA%86%23) `220.7K 🔥`
1. [曝阿娇没有去阿Sa的婚礼](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%98%BF%E5%A8%87%E6%B2%A1%E6%9C%89%E5%8E%BB%E9%98%BFSa%E7%9A%84%E5%A9%9A%E7%A4%BC%23) `219.6K 🔥`
1. [周杰伦昆凌大女儿长这么大了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%98%86%E5%87%8C%E5%A4%A7%E5%A5%B3%E5%84%BF%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `219.1K 🔥`
1. [唐艺昕9年了妆还没卸干净](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%959%E5%B9%B4%E4%BA%86%E5%A6%86%E8%BF%98%E6%B2%A1%E5%8D%B8%E5%B9%B2%E5%87%80%23) `218.3K 🔥`
1. [男子酒后多次骚扰女童被打索赔36万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%85%92%E5%90%8E%E5%A4%9A%E6%AC%A1%E9%AA%9A%E6%89%B0%E5%A5%B3%E7%AB%A5%E8%A2%AB%E6%89%93%E7%B4%A2%E8%B5%9436%E4%B8%87%23) `217.1K 🔥`
1. [全村62人患癌多名村民发声 (62 people in the village are suffering from cancer, many villagers speak out)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%9D%9162%E4%BA%BA%E6%82%A3%E7%99%8C%E5%A4%9A%E5%90%8D%E6%9D%91%E6%B0%91%E5%8F%91%E5%A3%B0%23) `215.5K 🔥`
1. [王濛瘦成鹿晗了 (Wang Meng lost weight and became Lu Han)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%98%A6%E6%88%90%E9%B9%BF%E6%99%97%E4%BA%86%23) `189.7K 🔥`
1. [柳州地震的原因找到了](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `149.8K 🔥`
1. [王安宇一手拉田曦薇一手拉黄明昊 (Wang Anyu holds Tian Xiwei in one hand and Huang Minghao in the other)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E4%B8%80%E6%89%8B%E6%8B%89%E7%94%B0%E6%9B%A6%E8%96%87%E4%B8%80%E6%89%8B%E6%8B%89%E9%BB%84%E6%98%8E%E6%98%8A%23) `147.7K 🔥`
1. [特朗普访华整晚都在谈台湾问题 (Trump spent the whole night talking about Taiwan during his visit to China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%95%B4%E6%99%9A%E9%83%BD%E5%9C%A8%E8%B0%88%E5%8F%B0%E6%B9%BE%E9%97%AE%E9%A2%98%23) `133.4K 🔥`
1. [老人恶意划车被拍车主报警](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%81%B6%E6%84%8F%E5%88%92%E8%BD%A6%E8%A2%AB%E6%8B%8D%E8%BD%A6%E4%B8%BB%E6%8A%A5%E8%AD%A6%23) `127.8K 🔥`
1. [巴西队世界杯26人名单 (Brazil's 26-man World Cup roster)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E9%98%9F%E4%B8%96%E7%95%8C%E6%9D%AF26%E4%BA%BA%E5%90%8D%E5%8D%95%23) `381.5K 🔥` `-62%`
1. [特朗普连发15张图分享中国记忆 (Trump posts 15 pictures to share memories of China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%BF%9E%E5%8F%9115%E5%BC%A0%E5%9B%BE%E5%88%86%E4%BA%AB%E4%B8%AD%E5%9B%BD%E8%AE%B0%E5%BF%86%23) `221.3K 🔥` `-69%`
1. [以防你没见过遛大型犬](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E9%98%B2%E4%BD%A0%E6%B2%A1%E8%A7%81%E8%BF%87%E9%81%9B%E5%A4%A7%E5%9E%8B%E7%8A%AC%23) `139.9K 🔥` `-25%`
1. [杨紫曹磊对手戏](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%9B%B9%E7%A3%8A%E5%AF%B9%E6%89%8B%E6%88%8F%23) `122.3K 🔥` `-37%`
1. [刘宇宁警官造型路透 (Police officer Liu Yuning style Reuters)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AD%A6%E5%AE%98%E9%80%A0%E5%9E%8B%E8%B7%AF%E9%80%8F%23) `109.6K 🔥` `-34%`

Updated at 2026-05-19 09:50:36

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
