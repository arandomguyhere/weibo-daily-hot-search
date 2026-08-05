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

1. [梅姨真实姓名首曝光 (Aunt Mei’s real first name revealed)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E7%9C%9F%E5%AE%9E%E5%A7%93%E5%90%8D%E9%A6%96%E6%9B%9D%E5%85%89%23) `1.1M 🔥` `NEW`
1. [李亚鹏向地铁吐血女孩捐99999元](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BA%9A%E9%B9%8F%E5%90%91%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E6%8D%9099999%E5%85%83%23) `652.3K 🔥` `NEW`
1. [跟着大国交通看山河中国](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E5%A4%A7%E5%9B%BD%E4%BA%A4%E9%80%9A%E7%9C%8B%E5%B1%B1%E6%B2%B3%E4%B8%AD%E5%9B%BD%23) `504.0K 🔥` `NEW`
1. [享界G9预售43.98万起](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E7%95%8CG9%E9%A2%84%E5%94%AE43.98%E4%B8%87%E8%B5%B7%23) `502.1K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `499.0K 🔥` `NEW`
1. [卜冠今吓到我了](https://s.weibo.com/weibo?q=%23%E5%8D%9C%E5%86%A0%E4%BB%8A%E5%90%93%E5%88%B0%E6%88%91%E4%BA%86%23) `489.1K 🔥` `NEW`
1. [成年人的体面是把请客说得很自然](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E4%BD%93%E9%9D%A2%E6%98%AF%E6%8A%8A%E8%AF%B7%E5%AE%A2%E8%AF%B4%E5%BE%97%E5%BE%88%E8%87%AA%E7%84%B6%23) `468.6K 🔥` `NEW`
1. [这一秒过火全员be](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%85%A8%E5%91%98be%23) `454.6K 🔥` `NEW`
1. [老祖宗怎么可以聪明成这样](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%A5%96%E5%AE%97%E6%80%8E%E4%B9%88%E5%8F%AF%E4%BB%A5%E8%81%AA%E6%98%8E%E6%88%90%E8%BF%99%E6%A0%B7%23) `417.2K 🔥` `NEW`
1. [费大厨全国小炒肉大王仅凭视频评出](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E5%A4%A7%E5%8E%A8%E5%85%A8%E5%9B%BD%E5%B0%8F%E7%82%92%E8%82%89%E5%A4%A7%E7%8E%8B%E4%BB%85%E5%87%AD%E8%A7%86%E9%A2%91%E8%AF%84%E5%87%BA%23) `410.9K 🔥` `NEW`
1. [柳周cp爆火后参加毛雪汪地球超新鲜 (After Liu Zhou’s CP became popular, he participated in Mao Xue Wang’s Earth Super Fresh)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%91%A8cp%E7%88%86%E7%81%AB%E5%90%8E%E5%8F%82%E5%8A%A0%E6%AF%9B%E9%9B%AA%E6%B1%AA%E5%9C%B0%E7%90%83%E8%B6%85%E6%96%B0%E9%B2%9C%23) `384.7K 🔥` `NEW`
1. [茉莉奶白被茉莉和奶白背刺了](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E8%A2%AB%E8%8C%89%E8%8E%89%E5%92%8C%E5%A5%B6%E7%99%BD%E8%83%8C%E5%88%BA%E4%BA%86%23) `372.8K 🔥` `NEW`
1. [可杰 top](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E6%9D%B0%20top%23) `254.4K 🔥` `NEW`
1. [严浩翔 破音](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%20%E7%A0%B4%E9%9F%B3%23) `254.3K 🔥` `NEW`
1. [王俊凯 南京](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E5%8D%97%E4%BA%AC%23) `254.1K 🔥` `NEW`
1. [婚外胚胎案妻子住址遭恶意曝光](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E4%BD%8F%E5%9D%80%E9%81%AD%E6%81%B6%E6%84%8F%E6%9B%9D%E5%85%89%23) `254.0K 🔥` `NEW`
1. [乌鸦一次带走四块饼干智商绝了](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E9%B8%A6%E4%B8%80%E6%AC%A1%E5%B8%A6%E8%B5%B0%E5%9B%9B%E5%9D%97%E9%A5%BC%E5%B9%B2%E6%99%BA%E5%95%86%E7%BB%9D%E4%BA%86%23) `253.9K 🔥` `NEW`
1. [女儿考上一本出轨父亲拒付学费](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E8%80%83%E4%B8%8A%E4%B8%80%E6%9C%AC%E5%87%BA%E8%BD%A8%E7%88%B6%E4%BA%B2%E6%8B%92%E4%BB%98%E5%AD%A6%E8%B4%B9%23) `253.6K 🔥` `NEW`
1. [登陆少年 徐州](https://s.weibo.com/weibo?q=%23%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4%20%E5%BE%90%E5%B7%9E%23) `253.6K 🔥` `NEW`
1. [王俊凯南京演唱会审批通过](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8D%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%A1%E6%89%B9%E9%80%9A%E8%BF%87%23) `253.4K 🔥` `NEW`
1. [你常吃的兰州拉面要改名了 (The Lanzhou Ramen you often eat is going to be renamed)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%B8%B8%E5%90%83%E7%9A%84%E5%85%B0%E5%B7%9E%E6%8B%89%E9%9D%A2%E8%A6%81%E6%94%B9%E5%90%8D%E4%BA%86%23) `253.2K 🔥` `NEW`
1. [日本女网红自杀过程被完整直播](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E7%BD%91%E7%BA%A2%E8%87%AA%E6%9D%80%E8%BF%87%E7%A8%8B%E8%A2%AB%E5%AE%8C%E6%95%B4%E7%9B%B4%E6%92%AD%23) `253.0K 🔥` `NEW`
1. [孩子吵闹2小时乘客叹气反被家长怼](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%90%B5%E9%97%B92%E5%B0%8F%E6%97%B6%E4%B9%98%E5%AE%A2%E5%8F%B9%E6%B0%94%E5%8F%8D%E8%A2%AB%E5%AE%B6%E9%95%BF%E6%80%BC%23) `252.9K 🔥` `NEW`
1. [王楚然还有三部待播作品](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%BF%98%E6%9C%89%E4%B8%89%E9%83%A8%E5%BE%85%E6%92%AD%E4%BD%9C%E5%93%81%23) `252.8K 🔥` `NEW`
1. [女孩从18楼跳下男友反复修改赔偿金](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%BB%8E18%E6%A5%BC%E8%B7%B3%E4%B8%8B%E7%94%B7%E5%8F%8B%E5%8F%8D%E5%A4%8D%E4%BF%AE%E6%94%B9%E8%B5%94%E5%81%BF%E9%87%91%23) `252.6K 🔥` `NEW`
1. [苹果要求长鑫降价反遭涨价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E8%A6%81%E6%B1%82%E9%95%BF%E9%91%AB%E9%99%8D%E4%BB%B7%E5%8F%8D%E9%81%AD%E6%B6%A8%E4%BB%B7%23) `252.5K 🔥` `NEW`
1. [很多人其实不适合运动](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E4%BA%BA%E5%85%B6%E5%AE%9E%E4%B8%8D%E9%80%82%E5%90%88%E8%BF%90%E5%8A%A8%23) `252.2K 🔥` `NEW`
1. [张凌赫回应这一秒过火大结局](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%A4%A7%E7%BB%93%E5%B1%80%23) `252.1K 🔥` `NEW`
1. [出国帮子女带娃的老人在夹缝中煎熬](https://s.weibo.com/weibo?q=%23%E5%87%BA%E5%9B%BD%E5%B8%AE%E5%AD%90%E5%A5%B3%E5%B8%A6%E5%A8%83%E7%9A%84%E8%80%81%E4%BA%BA%E5%9C%A8%E5%A4%B9%E7%BC%9D%E4%B8%AD%E7%85%8E%E7%86%AC%23) `251.9K 🔥` `NEW`
1. [黄杨钿甜新剧低调开播热度暴跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%9D%A8%E9%92%BF%E7%94%9C%E6%96%B0%E5%89%A7%E4%BD%8E%E8%B0%83%E5%BC%80%E6%92%AD%E7%83%AD%E5%BA%A6%E6%9A%B4%E8%B7%8C%23) `251.8K 🔥` `NEW`
1. [任素素结局 (The ending of Ren Susu)](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E7%B4%A0%E7%B4%A0%E7%BB%93%E5%B1%80%23) `251.7K 🔥` `NEW`
1. [海口港瞒报危险品](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8F%A3%E6%B8%AF%E7%9E%92%E6%8A%A5%E5%8D%B1%E9%99%A9%E5%93%81%23) `251.6K 🔥` `NEW`
1. [戴手链美甲给宝宝打针护士已停职](https://s.weibo.com/weibo?q=%23%E6%88%B4%E6%89%8B%E9%93%BE%E7%BE%8E%E7%94%B2%E7%BB%99%E5%AE%9D%E5%AE%9D%E6%89%93%E9%92%88%E6%8A%A4%E5%A3%AB%E5%B7%B2%E5%81%9C%E8%81%8C%23) `251.4K 🔥` `NEW`
1. [水豚宝宝请问您刚刚生了我们对吗](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E8%B1%9A%E5%AE%9D%E5%AE%9D%E8%AF%B7%E9%97%AE%E6%82%A8%E5%88%9A%E5%88%9A%E7%94%9F%E4%BA%86%E6%88%91%E4%BB%AC%E5%AF%B9%E5%90%97%23) `251.2K 🔥` `NEW`
1. [被泰航拒载中国乘客发声](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%B3%B0%E8%88%AA%E6%8B%92%E8%BD%BD%E4%B8%AD%E5%9B%BD%E4%B9%98%E5%AE%A2%E5%8F%91%E5%A3%B0%23) `251.1K 🔥` `NEW`
1. [男子被判无罪获国赔4年后改判死缓](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E5%88%A4%E6%97%A0%E7%BD%AA%E8%8E%B7%E5%9B%BD%E8%B5%944%E5%B9%B4%E5%90%8E%E6%94%B9%E5%88%A4%E6%AD%BB%E7%BC%93%23) `250.9K 🔥` `NEW`
1. [台风暴雨等4预警齐发](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E6%9A%B4%E9%9B%A8%E7%AD%894%E9%A2%84%E8%AD%A6%E9%BD%90%E5%8F%91%23) `250.8K 🔥` `NEW`
1. [女子因邻车长期压线停车装护栏](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E9%82%BB%E8%BD%A6%E9%95%BF%E6%9C%9F%E5%8E%8B%E7%BA%BF%E5%81%9C%E8%BD%A6%E8%A3%85%E6%8A%A4%E6%A0%8F%23) `250.6K 🔥` `NEW`
1. [iG全员力挺Meiko](https://s.weibo.com/weibo?q=%23iG%E5%85%A8%E5%91%98%E5%8A%9B%E6%8C%BAMeiko%23) `250.5K 🔥` `NEW`
1. [宋亚轩人鱼开嗓](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%BA%BA%E9%B1%BC%E5%BC%80%E5%97%93%23) `250.3K 🔥` `NEW`
1. [曝三星SK海力士测试中国芯片设备 (Samsung SK Hynix exposed to test Chinese chip equipment)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%89%E6%98%9FSK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E6%B5%8B%E8%AF%95%E4%B8%AD%E5%9B%BD%E8%8A%AF%E7%89%87%E8%AE%BE%E5%A4%87%23) `250.1K 🔥` `NEW`
1. [Jiejie回归EDG首战失利](https://s.weibo.com/weibo?q=%23Jiejie%E5%9B%9E%E5%BD%92EDG%E9%A6%96%E6%88%98%E5%A4%B1%E5%88%A9%23) `250.0K 🔥` `NEW`
1. [Meiko力竭了](https://s.weibo.com/weibo?q=%23Meiko%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `249.9K 🔥` `NEW`
1. [河南一男子晒成干的鲫鱼遇水竟复活](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%80%E7%94%B7%E5%AD%90%E6%99%92%E6%88%90%E5%B9%B2%E7%9A%84%E9%B2%AB%E9%B1%BC%E9%81%87%E6%B0%B4%E7%AB%9F%E5%A4%8D%E6%B4%BB%23) `249.8K 🔥` `NEW`
1. [玩具公司签67亿元算力大单](https://s.weibo.com/weibo?q=%23%E7%8E%A9%E5%85%B7%E5%85%AC%E5%8F%B8%E7%AD%BE67%E4%BA%BF%E5%85%83%E7%AE%97%E5%8A%9B%E5%A4%A7%E5%8D%95%23) `249.5K 🔥` `NEW`
1. [一姐姐在肯德基干了30年](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A7%90%E5%A7%90%E5%9C%A8%E8%82%AF%E5%BE%B7%E5%9F%BA%E5%B9%B2%E4%BA%8630%E5%B9%B4%23) `249.4K 🔥` `NEW`
1. [周佑凌晒和柳柳无法分开的一天](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BD%91%E5%87%8C%E6%99%92%E5%92%8C%E6%9F%B3%E6%9F%B3%E6%97%A0%E6%B3%95%E5%88%86%E5%BC%80%E7%9A%84%E4%B8%80%E5%A4%A9%23) `249.2K 🔥` `NEW`
1. [SpaceX火箭残骸撞击月球](https://s.weibo.com/weibo?q=%23SpaceX%E7%81%AB%E7%AE%AD%E6%AE%8B%E9%AA%B8%E6%92%9E%E5%87%BB%E6%9C%88%E7%90%83%23) `249.1K 🔥` `NEW`
1. [沈阳数万只蟾蜍宝宝过马路](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E6%95%B0%E4%B8%87%E5%8F%AA%E8%9F%BE%E8%9C%8D%E5%AE%9D%E5%AE%9D%E8%BF%87%E9%A9%AC%E8%B7%AF%23) `248.9K 🔥` `NEW`
1. [女乘客脱鞋司机闻到异味提醒反被投诉](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B9%98%E5%AE%A2%E8%84%B1%E9%9E%8B%E5%8F%B8%E6%9C%BA%E9%97%BB%E5%88%B0%E5%BC%82%E5%91%B3%E6%8F%90%E9%86%92%E5%8F%8D%E8%A2%AB%E6%8A%95%E8%AF%89%23) `248.8K 🔥` `NEW`
1. [贺峻霖water (He Junlinwater)](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96water%23) `248.7K 🔥` `NEW`

Updated at 2026-08-06 01:09:21

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
