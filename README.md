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

1. [呸走不顺接全家健康 (The health of the whole family will be improved if the baht is gone)](https://s.weibo.com/weibo?q=%23%E5%91%B8%E8%B5%B0%E4%B8%8D%E9%A1%BA%E6%8E%A5%E5%85%A8%E5%AE%B6%E5%81%A5%E5%BA%B7%23) `609.1K 🔥` `NEW`
1. [朋友圈跳赞](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%B7%B3%E8%B5%9E%23) `363.7K 🔥` `NEW`
1. [星河入梦预售开启锁定入梦席位](https://s.weibo.com/weibo?q=%23%E6%98%9F%E6%B2%B3%E5%85%A5%E6%A2%A6%E9%A2%84%E5%94%AE%E5%BC%80%E5%90%AF%E9%94%81%E5%AE%9A%E5%85%A5%E6%A2%A6%E5%B8%AD%E4%BD%8D%23) `359.8K 🔥` `NEW`
1. [时代少年团 假睫毛](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%81%87%E7%9D%AB%E6%AF%9B%23) `159.9K 🔥` `NEW`
1. [刘雨昕Dior温柔序曲](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%A8%E6%98%95Dior%E6%B8%A9%E6%9F%94%E5%BA%8F%E6%9B%B2%23) `155.4K 🔥` `NEW`
1. [章昊赖伟明刚认识就出去玩了](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%98%8A%E8%B5%96%E4%BC%9F%E6%98%8E%E5%88%9A%E8%AE%A4%E8%AF%86%E5%B0%B1%E5%87%BA%E5%8E%BB%E7%8E%A9%E4%BA%86%23) `151.8K 🔥` `NEW`
1. [王楚然剧宣送黄金](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%89%A7%E5%AE%A3%E9%80%81%E9%BB%84%E9%87%91%23) `151.2K 🔥` `NEW`
1. [A股行情](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%A1%8C%E6%83%85%23) `150.9K 🔥` `NEW`
1. [6个中国人在太空聚餐烧烤](https://s.weibo.com/weibo?q=%236%E4%B8%AA%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%9C%A8%E5%A4%AA%E7%A9%BA%E8%81%9A%E9%A4%90%E7%83%A7%E7%83%A4%23) `133.6K 🔥` `NEW`
1. [BTS免费开演唱会](https://s.weibo.com/weibo?q=%23BTS%E5%85%8D%E8%B4%B9%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `132.0K 🔥` `NEW`
1. [王鹤棣宋茜又跳了屋顶着火 (Wang Hedi and Song Qian jumped off the roof again and caught fire)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AE%8B%E8%8C%9C%E5%8F%88%E8%B7%B3%E4%BA%86%E5%B1%8B%E9%A1%B6%E7%9D%80%E7%81%AB%23) `129.8K 🔥` `NEW`
1. [遛了一天狗微信步数为0](https://s.weibo.com/weibo?q=%23%E9%81%9B%E4%BA%86%E4%B8%80%E5%A4%A9%E7%8B%97%E5%BE%AE%E4%BF%A1%E6%AD%A5%E6%95%B0%E4%B8%BA0%23) `106.4K 🔥` `NEW`
1. [海清 不要再卷孩子有本事卷自己](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B8%85%20%E4%B8%8D%E8%A6%81%E5%86%8D%E5%8D%B7%E5%AD%A9%E5%AD%90%E6%9C%89%E6%9C%AC%E4%BA%8B%E5%8D%B7%E8%87%AA%E5%B7%B1%23) `105.7K 🔥` `NEW`
1. [年后辞职我都不敢这么演](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%90%8E%E8%BE%9E%E8%81%8C%E6%88%91%E9%83%BD%E4%B8%8D%E6%95%A2%E8%BF%99%E4%B9%88%E6%BC%94%23) `102.7K 🔥` `NEW`
1. [情人节礼物已进入物流决赛圈](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%E7%A4%BC%E7%89%A9%E5%B7%B2%E8%BF%9B%E5%85%A5%E7%89%A9%E6%B5%81%E5%86%B3%E8%B5%9B%E5%9C%88%23) `88.0K 🔥` `NEW`
1. [惊蛰无声](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `87.9K 🔥` `NEW`
1. [谁家好人这么拍吻戏啊](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%AE%B6%E5%A5%BD%E4%BA%BA%E8%BF%99%E4%B9%88%E6%8B%8D%E5%90%BB%E6%88%8F%E5%95%8A%23) `83.7K 🔥` `NEW`
1. [和手机分房睡](https://s.weibo.com/weibo?q=%23%E5%92%8C%E6%89%8B%E6%9C%BA%E5%88%86%E6%88%BF%E7%9D%A1%23) `82.5K 🔥` `NEW`
1. [恋爱脑的我31岁被骗贷30万](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%88%B1%E8%84%91%E7%9A%84%E6%88%9131%E5%B2%81%E8%A2%AB%E9%AA%97%E8%B4%B730%E4%B8%87%23) `80.3K 🔥` `NEW`
1. [花9毛9做测试3分钟被确诊抑郁症](https://s.weibo.com/weibo?q=%23%E8%8A%B19%E6%AF%9B9%E5%81%9A%E6%B5%8B%E8%AF%953%E5%88%86%E9%92%9F%E8%A2%AB%E7%A1%AE%E8%AF%8A%E6%8A%91%E9%83%81%E7%97%87%23) `79.7K 🔥` `NEW`
1. [店员 要是腿能呼吸就好了 (Store clerk, it would be nice if my legs could breathe.)](https://s.weibo.com/weibo?q=%23%E5%BA%97%E5%91%98%20%E8%A6%81%E6%98%AF%E8%85%BF%E8%83%BD%E5%91%BC%E5%90%B8%E5%B0%B1%E5%A5%BD%E4%BA%86%23) `74.6K 🔥` `NEW`
1. [乌克兰正式开始出售无人机](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E6%AD%A3%E5%BC%8F%E5%BC%80%E5%A7%8B%E5%87%BA%E5%94%AE%E6%97%A0%E4%BA%BA%E6%9C%BA%23) `73.2K 🔥` `NEW`
1. [超级碗 (super bowl)](https://s.weibo.com/weibo?q=%23%E8%B6%85%E7%BA%A7%E7%A2%97%23) `1.1M 🔥` `+285%`
1. [特朗普大骂美国冬奥运动员](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A4%A7%E9%AA%82%E7%BE%8E%E5%9B%BD%E5%86%AC%E5%A5%A5%E8%BF%90%E5%8A%A8%E5%91%98%23) `593.6K 🔥` `+535%`
1. [黑诊所放血疗法地面血流成泊](https://s.weibo.com/weibo?q=%23%E9%BB%91%E8%AF%8A%E6%89%80%E6%94%BE%E8%A1%80%E7%96%97%E6%B3%95%E5%9C%B0%E9%9D%A2%E8%A1%80%E6%B5%81%E6%88%90%E6%B3%8A%23) `364.8K 🔥` `+100%`
1. [空气炸锅半年清洗一次](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E5%8D%8A%E5%B9%B4%E6%B8%85%E6%B4%97%E4%B8%80%E6%AC%A1%23) `292.6K 🔥` `+43%`
1. [迪丽热巴给粉丝点了奶茶面包鸡汤](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BB%99%E7%B2%89%E4%B8%9D%E7%82%B9%E4%BA%86%E5%A5%B6%E8%8C%B6%E9%9D%A2%E5%8C%85%E9%B8%A1%E6%B1%A4%23) `184.0K 🔥` `+113%`
1. [中国特警vs美国特警 (Chinese SWAT vs American SWAT)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%89%B9%E8%AD%A6vs%E7%BE%8E%E5%9B%BD%E7%89%B9%E8%AD%A6%23) `179.5K 🔥` `+51%`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `152.4K 🔥` `+23%`
1. [我每天有人陪过得挺好的](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%AF%8F%E5%A4%A9%E6%9C%89%E4%BA%BA%E9%99%AA%E8%BF%87%E5%BE%97%E6%8C%BA%E5%A5%BD%E7%9A%84%23) `140.0K 🔥` `+44%`
1. [自嗨锅濒临破产](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%97%A8%E9%94%85%E6%BF%92%E4%B8%B4%E7%A0%B4%E4%BA%A7%23) `807.8K 🔥`
1. [2026央视新春走基层](https://s.weibo.com/weibo?q=%232026%E5%A4%AE%E8%A7%86%E6%96%B0%E6%98%A5%E8%B5%B0%E5%9F%BA%E5%B1%82%23) `650.9K 🔥`
1. [瑶一瑶摆拍后一年掉粉近120万 (Yao Yiyao lost nearly 1.2 million followers in one year after posing for photos)](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E6%91%86%E6%8B%8D%E5%90%8E%E4%B8%80%E5%B9%B4%E6%8E%89%E7%B2%89%E8%BF%91120%E4%B8%87%23) `185.9K 🔥`
1. [都暻秀 奶茶也太好喝了 (Do Kyungsoo’s milk tea is so delicious too)](https://s.weibo.com/weibo?q=%23%E9%83%BD%E6%9A%BB%E7%A7%80%20%E5%A5%B6%E8%8C%B6%E4%B9%9F%E5%A4%AA%E5%A5%BD%E5%96%9D%E4%BA%86%23) `173.3K 🔥`
1. [赵樱子曝娜扎打游戏很厉害](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%A8%B1%E5%AD%90%E6%9B%9D%E5%A8%9C%E6%89%8E%E6%89%93%E6%B8%B8%E6%88%8F%E5%BE%88%E5%8E%89%E5%AE%B3%23) `170.5K 🔥`
1. [跟张晚意林允希林娜依高唱跳全场](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E5%BC%A0%E6%99%9A%E6%84%8F%E6%9E%97%E5%85%81%E5%B8%8C%E6%9E%97%E5%A8%9C%E4%BE%9D%E9%AB%98%E5%94%B1%E8%B7%B3%E5%85%A8%E5%9C%BA%23) `166.2K 🔥`
1. [爱泼斯坦案秘密照片曝光 (Secret photos from Epstein case revealed)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E7%A7%98%E5%AF%86%E7%85%A7%E7%89%87%E6%9B%9D%E5%85%89%23) `164.4K 🔥`
1. [明日方舟 (Arknights)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%23) `82.6K 🔥`
1. [山航很着急为您服务](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%88%AA%E5%BE%88%E7%9D%80%E6%80%A5%E4%B8%BA%E6%82%A8%E6%9C%8D%E5%8A%A1%23) `77.5K 🔥`
1. [贺娇龙抢救前还在安排工作 (He Jiaolong was still arranging work before the rescue)](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%A8%87%E9%BE%99%E6%8A%A2%E6%95%91%E5%89%8D%E8%BF%98%E5%9C%A8%E5%AE%89%E6%8E%92%E5%B7%A5%E4%BD%9C%23) `358.7K 🔥` `-67%`
1. [女装牛仔裤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E7%89%9B%E4%BB%94%E8%A3%A4%23) `192.8K 🔥` `-52%`
1. [美国牙医称自己差点掉入斩杀线](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%89%99%E5%8C%BB%E7%A7%B0%E8%87%AA%E5%B7%B1%E5%B7%AE%E7%82%B9%E6%8E%89%E5%85%A5%E6%96%A9%E6%9D%80%E7%BA%BF%23) `188.6K 🔥` `-41%`
1. [贺娇龙坠马后坐起说头有点疼](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%A8%87%E9%BE%99%E5%9D%A0%E9%A9%AC%E5%90%8E%E5%9D%90%E8%B5%B7%E8%AF%B4%E5%A4%B4%E6%9C%89%E7%82%B9%E7%96%BC%23) `152.7K 🔥` `-25%`
1. [爱吃桃酥的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E6%A1%83%E9%85%A5%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `152.1K 🔥` `-21%`
1. [孟子义微博之夜带走了四盒饼干](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%E5%B8%A6%E8%B5%B0%E4%BA%86%E5%9B%9B%E7%9B%92%E9%A5%BC%E5%B9%B2%23) `150.5K 🔥` `-26%`
1. [成龙沈佳润合唱](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%BE%99%E6%B2%88%E4%BD%B3%E6%B6%A6%E5%90%88%E5%94%B1%23) `150.3K 🔥` `-54%`
1. [老外来中国过年的订单爆了 (Orders from foreigners coming to China to celebrate the New Year are booming)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E6%9D%A5%E4%B8%AD%E5%9B%BD%E8%BF%87%E5%B9%B4%E7%9A%84%E8%AE%A2%E5%8D%95%E7%88%86%E4%BA%86%23) `132.2K 🔥` `-36%`
1. [警方通报男子祭祖误触捕猎装置身亡 (Police report man worshiping ancestors accidentally hit hunting device and died)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90%E7%A5%AD%E7%A5%96%E8%AF%AF%E8%A7%A6%E6%8D%95%E7%8C%8E%E8%A3%85%E7%BD%AE%E8%BA%AB%E4%BA%A1%23) `86.5K 🔥` `-58%`
1. [龙麦娇兰](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%BA%A6%E5%A8%87%E5%85%B0%23) `85.6K 🔥` `-58%`
1. [对尺寸有了清晰的概念](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%B0%BA%E5%AF%B8%E6%9C%89%E4%BA%86%E6%B8%85%E6%99%B0%E7%9A%84%E6%A6%82%E5%BF%B5%23) `83.4K 🔥` `-29%`
1. [白鹿女装牛仔裤](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%A5%B3%E8%A3%85%E7%89%9B%E4%BB%94%E8%A3%A4%23) `83.3K 🔥` `-40%`
1. [唐宫奇案第10集32分40秒](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%E7%AC%AC10%E9%9B%8632%E5%88%8640%E7%A7%92%23) `79.6K 🔥` `-54%`

Updated at 2026-02-09 14:18:00

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
