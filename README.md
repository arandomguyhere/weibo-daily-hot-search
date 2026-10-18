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

1. [法国民众这次真急了](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%B0%91%E4%BC%97%E8%BF%99%E6%AC%A1%E7%9C%9F%E6%80%A5%E4%BA%86%23) `1.2M 🔥` `NEW`
1. [法国骚乱百年市政厅被烧毁](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%AA%9A%E4%B9%B1%E7%99%BE%E5%B9%B4%E5%B8%82%E6%94%BF%E5%8E%85%E8%A2%AB%E7%83%A7%E6%AF%81%23) `973.4K 🔥` `NEW`
1. [文化中国行九九重阳节](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%8C%96%E4%B8%AD%E5%9B%BD%E8%A1%8C%E4%B9%9D%E4%B9%9D%E9%87%8D%E9%98%B3%E8%8A%82%23) `668.8K 🔥` `NEW`
1. [林诗栋家人回应餐馆质疑](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E5%AE%B6%E4%BA%BA%E5%9B%9E%E5%BA%94%E9%A4%90%E9%A6%86%E8%B4%A8%E7%96%91%23) `350.9K 🔥` `NEW`
1. [开封水下菊花全网刷屏](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B0%81%E6%B0%B4%E4%B8%8B%E8%8F%8A%E8%8A%B1%E5%85%A8%E7%BD%91%E5%88%B7%E5%B1%8F%23) `337.4K 🔥` `NEW`
1. [张凌赫风柔棉小屋初雪之约](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%A3%8E%E6%9F%94%E6%A3%89%E5%B0%8F%E5%B1%8B%E5%88%9D%E9%9B%AA%E4%B9%8B%E7%BA%A6%23) `326.6K 🔥` `NEW`
1. [田曦薇摘面具神级镜头](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%91%98%E9%9D%A2%E5%85%B7%E7%A5%9E%E7%BA%A7%E9%95%9C%E5%A4%B4%23) `322.4K 🔥` `NEW`
1. [莫斯科大学调查中国留学生披旭日旗](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%96%AF%E7%A7%91%E5%A4%A7%E5%AD%A6%E8%B0%83%E6%9F%A5%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E6%8A%AB%E6%97%AD%E6%97%A5%E6%97%97%23) `311.8K 🔥` `NEW`
1. [张家齐妈妈无工作爸爸是自由职业](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E6%97%A0%E5%B7%A5%E4%BD%9C%E7%88%B8%E7%88%B8%E6%98%AF%E8%87%AA%E7%94%B1%E8%81%8C%E4%B8%9A%23) `311.7K 🔥` `NEW`
1. [法考主观题难度](https://s.weibo.com/weibo?q=%23%E6%B3%95%E8%80%83%E4%B8%BB%E8%A7%82%E9%A2%98%E9%9A%BE%E5%BA%A6%23) `311.5K 🔥` `NEW`
1. [韩国网友要求盛艾敬退团](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E8%A6%81%E6%B1%82%E7%9B%9B%E8%89%BE%E6%95%AC%E9%80%80%E5%9B%A2%23) `311.5K 🔥` `NEW`
1. [Angelababy回应被说显老](https://s.weibo.com/weibo?q=%23Angelababy%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%AF%B4%E6%98%BE%E8%80%81%23) `311.3K 🔥` `NEW`
1. [刘丁硕称绝对没有笑樊振东落后](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E7%A7%B0%E7%BB%9D%E5%AF%B9%E6%B2%A1%E6%9C%89%E7%AC%91%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%90%BD%E5%90%8E%23) `311.1K 🔥` `NEW`
1. [樊振东绝地反击刘丁硕表情亮了](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%BB%9D%E5%9C%B0%E5%8F%8D%E5%87%BB%E5%88%98%E4%B8%81%E7%A1%95%E8%A1%A8%E6%83%85%E4%BA%AE%E4%BA%86%23) `310.9K 🔥` `NEW`
1. [黄宣官宣当爸](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AE%A3%E5%AE%98%E5%AE%A3%E5%BD%93%E7%88%B8%23) `310.7K 🔥` `NEW`
1. [特斯拉飞行汽车在美国引发一连串疑问](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E9%A3%9E%E8%A1%8C%E6%B1%BD%E8%BD%A6%E5%9C%A8%E7%BE%8E%E5%9B%BD%E5%BC%95%E5%8F%91%E4%B8%80%E8%BF%9E%E4%B8%B2%E7%96%91%E9%97%AE%23) `310.7K 🔥` `NEW`
1. [阿根廷3女子误搭毒贩车被杀害](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B73%E5%A5%B3%E5%AD%90%E8%AF%AF%E6%90%AD%E6%AF%92%E8%B4%A9%E8%BD%A6%E8%A2%AB%E6%9D%80%E5%AE%B3%23) `310.5K 🔥` `NEW`
1. [柯蓝才是内娱真正的家世天花板](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E8%93%9D%E6%89%8D%E6%98%AF%E5%86%85%E5%A8%B1%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%AE%B6%E4%B8%96%E5%A4%A9%E8%8A%B1%E6%9D%BF%23) `310.3K 🔥` `NEW`
1. [弟弟缺氧严重姐姐网上找免费救援](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E7%BC%BA%E6%B0%A7%E4%B8%A5%E9%87%8D%E5%A7%90%E5%A7%90%E7%BD%91%E4%B8%8A%E6%89%BE%E5%85%8D%E8%B4%B9%E6%95%91%E6%8F%B4%23) `310.2K 🔥` `NEW`
1. [律师称AI广告无标注涉嫌消费欺诈](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E7%A7%B0AI%E5%B9%BF%E5%91%8A%E6%97%A0%E6%A0%87%E6%B3%A8%E6%B6%89%E5%AB%8C%E6%B6%88%E8%B4%B9%E6%AC%BA%E8%AF%88%23) `310.1K 🔥` `NEW`
1. [校方通报中国留学生课上披旭日旗](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E6%96%B9%E9%80%9A%E6%8A%A5%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E8%AF%BE%E4%B8%8A%E6%8A%AB%E6%97%AD%E6%97%A5%E6%97%97%23) `309.8K 🔥` `NEW`
1. [难怪北京没有穿搭焦虑哈哈](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E5%8C%97%E4%BA%AC%E6%B2%A1%E6%9C%89%E7%A9%BF%E6%90%AD%E7%84%A6%E8%99%91%E5%93%88%E5%93%88%23) `309.7K 🔥` `NEW`
1. [沈月工作室改名了](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%94%B9%E5%90%8D%E4%BA%86%23) `309.7K 🔥` `NEW`
1. [竹内亮在巴黎遭遇骚乱](https://s.weibo.com/weibo?q=%23%E7%AB%B9%E5%86%85%E4%BA%AE%E5%9C%A8%E5%B7%B4%E9%BB%8E%E9%81%AD%E9%81%87%E9%AA%9A%E4%B9%B1%23) `262.1K 🔥` `NEW`
1. [乳糖不耐受最直观的表现](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E7%B3%96%E4%B8%8D%E8%80%90%E5%8F%97%E6%9C%80%E7%9B%B4%E8%A7%82%E7%9A%84%E8%A1%A8%E7%8E%B0%23) `252.7K 🔥` `NEW`
1. [AI仿冒吴越带货账号已永久封禁](https://s.weibo.com/weibo?q=%23AI%E4%BB%BF%E5%86%92%E5%90%B4%E8%B6%8A%E5%B8%A6%E8%B4%A7%E8%B4%A6%E5%8F%B7%E5%B7%B2%E6%B0%B8%E4%B9%85%E5%B0%81%E7%A6%81%23) `248.4K 🔥` `NEW`
1. [多位明星自曝炒股巨亏](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BD%8D%E6%98%8E%E6%98%9F%E8%87%AA%E6%9B%9D%E7%82%92%E8%82%A1%E5%B7%A8%E4%BA%8F%23) `245.8K 🔥` `NEW`
1. [法国抗议活动大量商店遭洗劫](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%8A%97%E8%AE%AE%E6%B4%BB%E5%8A%A8%E5%A4%A7%E9%87%8F%E5%95%86%E5%BA%97%E9%81%AD%E6%B4%97%E5%8A%AB%23) `239.5K 🔥` `NEW`
1. [白敬亭被王楚然可爱到了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E8%A2%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%8F%AF%E7%88%B1%E5%88%B0%E4%BA%86%23) `236.6K 🔥` `NEW`
1. [法国人开始在奢侈品店0元购](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%9C%A8%E5%A5%A2%E4%BE%88%E5%93%81%E5%BA%970%E5%85%83%E8%B4%AD%23) `222.3K 🔥` `NEW`
1. [时代少年团营业入驻平台粉丝统计](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%90%A5%E4%B8%9A%E5%85%A5%E9%A9%BB%E5%B9%B3%E5%8F%B0%E7%B2%89%E4%B8%9D%E7%BB%9F%E8%AE%A1%23) `178.0K 🔥` `NEW`
1. [张家齐妈妈说我是一个傻子一个笨蛋](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%AF%B4%E6%88%91%E6%98%AF%E4%B8%80%E4%B8%AA%E5%82%BB%E5%AD%90%E4%B8%80%E4%B8%AA%E7%AC%A8%E8%9B%8B%23) `162.2K 🔥` `NEW`
1. [法国骚乱超150名警察受伤](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%AA%9A%E4%B9%B1%E8%B6%85150%E5%90%8D%E8%AD%A6%E5%AF%9F%E5%8F%97%E4%BC%A4%23) `156.2K 🔥` `NEW`
1. [看脚以为是小熊没想到这么大只](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E8%84%9A%E4%BB%A5%E4%B8%BA%E6%98%AF%E5%B0%8F%E7%86%8A%E6%B2%A1%E6%83%B3%E5%88%B0%E8%BF%99%E4%B9%88%E5%A4%A7%E5%8F%AA%23) `146.4K 🔥` `NEW`
1. [Zuian现身TES出征照](https://s.weibo.com/weibo?q=%23Zuian%E7%8E%B0%E8%BA%ABTES%E5%87%BA%E5%BE%81%E7%85%A7%23) `145.0K 🔥` `NEW`
1. [女子打砸酒铺五粮液等多款名酒被砸](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%93%E7%A0%B8%E9%85%92%E9%93%BA%E4%BA%94%E7%B2%AE%E6%B6%B2%E7%AD%89%E5%A4%9A%E6%AC%BE%E5%90%8D%E9%85%92%E8%A2%AB%E7%A0%B8%23) `144.1K 🔥` `NEW`
1. [淡淡妈妈谈女儿分手哭了](https://s.weibo.com/weibo?q=%23%E6%B7%A1%E6%B7%A1%E5%A6%88%E5%A6%88%E8%B0%88%E5%A5%B3%E5%84%BF%E5%88%86%E6%89%8B%E5%93%AD%E4%BA%86%23) `143.6K 🔥` `NEW`
1. [刘卓说的是谁](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%8D%93%E8%AF%B4%E7%9A%84%E6%98%AF%E8%B0%81%23) `141.5K 🔥` `NEW`
1. [除遗传外胰腺癌90%是偶发性](https://s.weibo.com/weibo?q=%23%E9%99%A4%E9%81%97%E4%BC%A0%E5%A4%96%E8%83%B0%E8%85%BA%E7%99%8C90%25%E6%98%AF%E5%81%B6%E5%8F%91%E6%80%A7%23) `137.1K 🔥` `NEW`
1. [王楚然现发第一期恐高第二期高反](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%8E%B0%E5%8F%91%E7%AC%AC%E4%B8%80%E6%9C%9F%E6%81%90%E9%AB%98%E7%AC%AC%E4%BA%8C%E6%9C%9F%E9%AB%98%E5%8F%8D%23) `136.8K 🔥` `NEW`
1. [奔跑吧站姐给偶遇结婚新人拍出神图](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E7%AB%99%E5%A7%90%E7%BB%99%E5%81%B6%E9%81%87%E7%BB%93%E5%A9%9A%E6%96%B0%E4%BA%BA%E6%8B%8D%E5%87%BA%E7%A5%9E%E5%9B%BE%23) `130.2K 🔥` `NEW`
1. [曝TES邀请JDG教练支援](https://s.weibo.com/weibo?q=%23%E6%9B%9DTES%E9%82%80%E8%AF%B7JDG%E6%95%99%E7%BB%83%E6%94%AF%E6%8F%B4%23) `122.5K 🔥` `NEW`
1. [法国抗议者称实在负担不起油费](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%8A%97%E8%AE%AE%E8%80%85%E7%A7%B0%E5%AE%9E%E5%9C%A8%E8%B4%9F%E6%8B%85%E4%B8%8D%E8%B5%B7%E6%B2%B9%E8%B4%B9%23) `116.4K 🔥` `NEW`
1. [酒馆老板回应小姑娘砸店损失30万](https://s.weibo.com/weibo?q=%23%E9%85%92%E9%A6%86%E8%80%81%E6%9D%BF%E5%9B%9E%E5%BA%94%E5%B0%8F%E5%A7%91%E5%A8%98%E7%A0%B8%E5%BA%97%E6%8D%9F%E5%A4%B130%E4%B8%87%23) `114.2K 🔥` `NEW`
1. [艾热孙楠儿女和邵子恒是同学](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%83%AD%E5%AD%99%E6%A5%A0%E5%84%BF%E5%A5%B3%E5%92%8C%E9%82%B5%E5%AD%90%E6%81%92%E6%98%AF%E5%90%8C%E5%AD%A6%23) `111.1K 🔥` `NEW`
1. [徐艺洋弟弟发文](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E5%BC%9F%E5%BC%9F%E5%8F%91%E6%96%87%23) `310.9K 🔥` `+38%`
1. [长期喝牛奶vs从来不喝牛奶](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E5%96%9D%E7%89%9B%E5%A5%B6vs%E4%BB%8E%E6%9D%A5%E4%B8%8D%E5%96%9D%E7%89%9B%E5%A5%B6%23) `309.9K 🔥` `+43%`
1. [吴越质问花姐骗了多少钱](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B6%8A%E8%B4%A8%E9%97%AE%E8%8A%B1%E5%A7%90%E9%AA%97%E4%BA%86%E5%A4%9A%E5%B0%91%E9%92%B1%23) `311.3K 🔥`
1. [白鹿奔跑吧合照C位](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%A5%94%E8%B7%91%E5%90%A7%E5%90%88%E7%85%A7C%E4%BD%8D%23) `215.6K 🔥` `-64%`
1. [法国多地LV门店被洗劫一空](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%A4%9A%E5%9C%B0LV%E9%97%A8%E5%BA%97%E8%A2%AB%E6%B4%97%E5%8A%AB%E4%B8%80%E7%A9%BA%23) `157.1K 🔥` `-26%`

Updated at 2026-10-18 17:08:55

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
