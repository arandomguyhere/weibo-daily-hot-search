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

1. [张豆豆制止孙杨 (Zhang Doudou stops Sun Yang)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B1%86%E8%B1%86%E5%88%B6%E6%AD%A2%E5%AD%99%E6%9D%A8%23) `227.2K 🔥` `NEW`
1. [我在微博聊电影](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9C%A8%E5%BE%AE%E5%8D%9A%E8%81%8A%E7%94%B5%E5%BD%B1%23) `224.0K 🔥` `NEW`
1. [宇树双臂人形机器人价格](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%8F%8C%E8%87%82%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BB%B7%E6%A0%BC%23) `223.7K 🔥` `NEW`
1. [孙杨玩游戏真打了范明一耳光](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E7%8E%A9%E6%B8%B8%E6%88%8F%E7%9C%9F%E6%89%93%E4%BA%86%E8%8C%83%E6%98%8E%E4%B8%80%E8%80%B3%E5%85%89%23) `203.2K 🔥` `NEW`
1. [北京国际车展](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%9B%BD%E9%99%85%E8%BD%A6%E5%B1%95%23) `194.8K 🔥` `NEW`
1. [五一](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%23) `193.8K 🔥` `NEW`
1. [孙杨点了八杯热茶](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E7%82%B9%E4%BA%86%E5%85%AB%E6%9D%AF%E7%83%AD%E8%8C%B6%23) `177.1K 🔥` `NEW`
1. [小狗体检肚子duang一下弹出来了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E4%BD%93%E6%A3%80%E8%82%9A%E5%AD%90duang%E4%B8%80%E4%B8%8B%E5%BC%B9%E5%87%BA%E6%9D%A5%E4%BA%86%23) `177.0K 🔥` `NEW`
1. [妻子的浪漫旅行一顿饭吃了一万五](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E7%9A%84%E6%B5%AA%E6%BC%AB%E6%97%85%E8%A1%8C%E4%B8%80%E9%A1%BF%E9%A5%AD%E5%90%83%E4%BA%86%E4%B8%80%E4%B8%87%E4%BA%94%23) `176.9K 🔥` `NEW`
1. [初代跑男是不是在商量重组](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%BB%A3%E8%B7%91%E7%94%B7%E6%98%AF%E4%B8%8D%E6%98%AF%E5%9C%A8%E5%95%86%E9%87%8F%E9%87%8D%E7%BB%84%23) `176.8K 🔥` `NEW`
1. [多艘伊朗超级油轮在美军封锁线内集结 (Multiple Iranian supertankers massed within the U.S. blockade)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E8%89%98%E4%BC%8A%E6%9C%97%E8%B6%85%E7%BA%A7%E6%B2%B9%E8%BD%AE%E5%9C%A8%E7%BE%8E%E5%86%9B%E5%B0%81%E9%94%81%E7%BA%BF%E5%86%85%E9%9B%86%E7%BB%93%23) `176.7K 🔥` `NEW`
1. [十个勤天 最后一次合体巡演](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%20%E6%9C%80%E5%90%8E%E4%B8%80%E6%AC%A1%E5%90%88%E4%BD%93%E5%B7%A1%E6%BC%94%23) `176.7K 🔥` `NEW`
1. [河北大姨赴意大利看孙子走红](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E5%A4%A7%E5%A7%A8%E8%B5%B4%E6%84%8F%E5%A4%A7%E5%88%A9%E7%9C%8B%E5%AD%99%E5%AD%90%E8%B5%B0%E7%BA%A2%23) `173.9K 🔥` `NEW`
1. [5月最吸金的星座](https://s.weibo.com/weibo?q=%235%E6%9C%88%E6%9C%80%E5%90%B8%E9%87%91%E7%9A%84%E6%98%9F%E5%BA%A7%23) `173.6K 🔥` `NEW`
1. [香奈儿无底鞋89%网友讨厌](https://s.weibo.com/weibo?q=%23%E9%A6%99%E5%A5%88%E5%84%BF%E6%97%A0%E5%BA%95%E9%9E%8B89%25%E7%BD%91%E5%8F%8B%E8%AE%A8%E5%8E%8C%23) `162.0K 🔥` `NEW`
1. [咪 空气一会香一会臭](https://s.weibo.com/weibo?q=%23%E5%92%AA%20%E7%A9%BA%E6%B0%94%E4%B8%80%E4%BC%9A%E9%A6%99%E4%B8%80%E4%BC%9A%E8%87%AD%23) `134.3K 🔥` `NEW`
1. [吴宜泽6比2领先艾伦](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD6%E6%AF%942%E9%A2%86%E5%85%88%E8%89%BE%E4%BC%A6%23) `122.1K 🔥` `NEW`
1. [陶昕然否认与芒果闹僵](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E5%90%A6%E8%AE%A4%E4%B8%8E%E8%8A%92%E6%9E%9C%E9%97%B9%E5%83%B5%23) `100.6K 🔥` `NEW`
1. [王毅同美国国务卿鲁比奥通电话](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E5%90%8C%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%8A%A1%E5%8D%BF%E9%B2%81%E6%AF%94%E5%A5%A5%E9%80%9A%E7%94%B5%E8%AF%9D%23) `100.5K 🔥` `NEW`
1. [男子突遭重大变故车内连睡7天](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%AA%81%E9%81%AD%E9%87%8D%E5%A4%A7%E5%8F%98%E6%95%85%E8%BD%A6%E5%86%85%E8%BF%9E%E7%9D%A17%E5%A4%A9%23) `90.1K 🔥` `NEW`
1. [国防部称不必大惊小怪过度解读 (Ministry of National Defense says there is no need to make a fuss over interpretation)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%98%B2%E9%83%A8%E7%A7%B0%E4%B8%8D%E5%BF%85%E5%A4%A7%E6%83%8A%E5%B0%8F%E6%80%AA%E8%BF%87%E5%BA%A6%E8%A7%A3%E8%AF%BB%23) `86.6K 🔥` `NEW`
1. [湖北荆州市监利市3.7级地震](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E8%8D%86%E5%B7%9E%E5%B8%82%E7%9B%91%E5%88%A9%E5%B8%823.7%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `84.4K 🔥` `NEW`
1. [罗永浩自曝可能误伤西门子](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%87%AA%E6%9B%9D%E5%8F%AF%E8%83%BD%E8%AF%AF%E4%BC%A4%E8%A5%BF%E9%97%A8%E5%AD%90%23) `83.5K 🔥` `NEW`
1. [收货地址不该成为被歧视的理由](https://s.weibo.com/weibo?q=%23%E6%94%B6%E8%B4%A7%E5%9C%B0%E5%9D%80%E4%B8%8D%E8%AF%A5%E6%88%90%E4%B8%BA%E8%A2%AB%E6%AD%A7%E8%A7%86%E7%9A%84%E7%90%86%E7%94%B1%23) `1.0M 🔥` `+55%`
1. [天津发布房地产新政 (Tianjin releases new real estate policy)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E5%8F%91%E5%B8%83%E6%88%BF%E5%9C%B0%E4%BA%A7%E6%96%B0%E6%94%BF%23) `776.6K 🔥` `+1057%`
1. [1071项国标5月1日起实施 (1,071 national standards will be implemented on May 1)](https://s.weibo.com/weibo?q=%231071%E9%A1%B9%E5%9B%BD%E6%A0%875%E6%9C%881%E6%97%A5%E8%B5%B7%E5%AE%9E%E6%96%BD%23) `621.2K 🔥` `+42%`
1. [李晨怀念跑男老成员 (Li Chen misses the old members of Running Man)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E6%80%80%E5%BF%B5%E8%B7%91%E7%94%B7%E8%80%81%E6%88%90%E5%91%98%23) `580.9K 🔥` `+33%`
1. [幻月新游戏 (Huanyuexin Games)](https://s.weibo.com/weibo?q=%23%E5%B9%BB%E6%9C%88%E6%96%B0%E6%B8%B8%E6%88%8F%23) `204.1K 🔥` `+152%`
1. [曝Angelababy爱发朋友圈 (It is revealed that Angelababy loves to post on Moments)](https://s.weibo.com/weibo?q=%23%E6%9B%9DAngelababy%E7%88%B1%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `201.3K 🔥` `+51%`
1. [中国女孩拍摄靖国神社内部 (Chinese girl photographs the interior of Yasukuni Shrine)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%A9%E6%8B%8D%E6%91%84%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%E5%86%85%E9%83%A8%23) `200.1K 🔥` `+48%`
1. [金靖瘦到认不出来](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E7%98%A6%E5%88%B0%E8%AE%A4%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `198.9K 🔥` `+47%`
1. [罗永浩采访颠覆了我对蔡康永的认知](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E9%87%87%E8%AE%BF%E9%A2%A0%E8%A6%86%E4%BA%86%E6%88%91%E5%AF%B9%E8%94%A1%E5%BA%B7%E6%B0%B8%E7%9A%84%E8%AE%A4%E7%9F%A5%23) `197.8K 🔥` `+47%`
1. [美对伊战5月1日面临红线 (The U.S.’s war with Iraq faces a red line on May 1)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AF%B9%E4%BC%8A%E6%88%985%E6%9C%881%E6%97%A5%E9%9D%A2%E4%B8%B4%E7%BA%A2%E7%BA%BF%23) `197.4K 🔥` `+46%`
1. [DeepSeek思考过程好萌](https://s.weibo.com/weibo?q=%23DeepSeek%E6%80%9D%E8%80%83%E8%BF%87%E7%A8%8B%E5%A5%BD%E8%90%8C%23) `195.2K 🔥` `+193%`
1. [保洁误拿快递脑溢血身亡家属发声 (Family member of cleaning lady who mistakenly took express delivery and died of cerebral hemorrhage speaks out)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%B4%81%E8%AF%AF%E6%8B%BF%E5%BF%AB%E9%80%92%E8%84%91%E6%BA%A2%E8%A1%80%E8%BA%AB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `177.1K 🔥` `+32%`
1. [曝孟美岐主动放弃公司资源](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%AD%9F%E7%BE%8E%E5%B2%90%E4%B8%BB%E5%8A%A8%E6%94%BE%E5%BC%83%E5%85%AC%E5%8F%B8%E8%B5%84%E6%BA%90%23) `177.1K 🔥` `+36%`
1. [王俊凯工作室 他拍比自拍好看](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E4%BB%96%E6%8B%8D%E6%AF%94%E8%87%AA%E6%8B%8D%E5%A5%BD%E7%9C%8B%23) `177.0K 🔥` `+33%`
1. [台男子车站性侵女游客被判5年](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E7%94%B7%E5%AD%90%E8%BD%A6%E7%AB%99%E6%80%A7%E4%BE%B5%E5%A5%B3%E6%B8%B8%E5%AE%A2%E8%A2%AB%E5%88%A45%E5%B9%B4%23) `176.8K 🔥` `+104%`
1. [华为送时代少年团花篮 (Huawei sends flower baskets to Times Youth League)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%80%81%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%8A%B1%E7%AF%AE%23) `108.3K 🔥` `+61%`
1. [分手了你俩开始暧昧了](https://s.weibo.com/weibo?q=%23%E5%88%86%E6%89%8B%E4%BA%86%E4%BD%A0%E4%BF%A9%E5%BC%80%E5%A7%8B%E6%9A%A7%E6%98%A7%E4%BA%86%23) `90.8K 🔥` `+36%`
1. [每天准时来接孩子的狗叔](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%87%86%E6%97%B6%E6%9D%A5%E6%8E%A5%E5%AD%A9%E5%AD%90%E7%9A%84%E7%8B%97%E5%8F%94%23) `86.1K 🔥` `+28%`
1. [命运托举你的方式很意外 (The way fate has lifted you up is surprising)](https://s.weibo.com/weibo?q=%23%E5%91%BD%E8%BF%90%E6%89%98%E4%B8%BE%E4%BD%A0%E7%9A%84%E6%96%B9%E5%BC%8F%E5%BE%88%E6%84%8F%E5%A4%96%23) `330.5K 🔥`
1. [曝孟美岐雪藏了两年才离开乐华](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%AD%9F%E7%BE%8E%E5%B2%90%E9%9B%AA%E8%97%8F%E4%BA%86%E4%B8%A4%E5%B9%B4%E6%89%8D%E7%A6%BB%E5%BC%80%E4%B9%90%E5%8D%8E%23) `176.9K 🔥`
1. [辛辛苦苦种了三个多月的胡萝卜](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%BE%9B%E8%8B%A6%E8%8B%A6%E7%A7%8D%E4%BA%86%E4%B8%89%E4%B8%AA%E5%A4%9A%E6%9C%88%E7%9A%84%E8%83%A1%E8%90%9D%E5%8D%9C%23) `222.7K 🔥` `-33%`
1. [13点起床才是性价比最高的 (Getting up at 13 o'clock is the most cost-effective time)](https://s.weibo.com/weibo?q=%2313%E7%82%B9%E8%B5%B7%E5%BA%8A%E6%89%8D%E6%98%AF%E6%80%A7%E4%BB%B7%E6%AF%94%E6%9C%80%E9%AB%98%E7%9A%84%23) `204.9K 🔥` `-28%`
1. [新能源车换个后视镜花了近6000元](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E6%8D%A2%E4%B8%AA%E5%90%8E%E8%A7%86%E9%95%9C%E8%8A%B1%E4%BA%86%E8%BF%916000%E5%85%83%23) `176.9K 🔥` `-63%`
1. [白鹿手写的行程图 (Bailu's handwritten itinerary)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%89%8B%E5%86%99%E7%9A%84%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `140.9K 🔥` `-39%`
1. [女演员李心艾暴瘦80斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E6%9D%8E%E5%BF%83%E8%89%BE%E6%9A%B4%E7%98%A680%E6%96%A4%23) `100.7K 🔥` `-55%`
1. [宗师 AG (Grandmaster AG)](https://s.weibo.com/weibo?q=%23%E5%AE%97%E5%B8%88%20AG%23) `100.5K 🔥` `-23%`
1. [为什么有的人从来不内耗 (Why do some people never experience internal friction?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E7%9A%84%E4%BA%BA%E4%BB%8E%E6%9D%A5%E4%B8%8D%E5%86%85%E8%80%97%23) `96.5K 🔥` `-28%`
1. [孟子义给丁程鑫张真源送花篮 (Meng Ziyi sent flower baskets to Ding Chengxin and Zhang Zhenyuan)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%BB%99%E4%B8%81%E7%A8%8B%E9%91%AB%E5%BC%A0%E7%9C%9F%E6%BA%90%E9%80%81%E8%8A%B1%E7%AF%AE%23) `89.1K 🔥` `-54%`

Updated at 2026-05-01 08:08:18

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
