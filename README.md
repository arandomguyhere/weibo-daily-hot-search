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

1. [埃及航班行李全部丢失中国乘客发声 (Chinese passengers speak out after all their luggage was lost on Egypt flight)](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E8%88%AA%E7%8F%AD%E8%A1%8C%E6%9D%8E%E5%85%A8%E9%83%A8%E4%B8%A2%E5%A4%B1%E4%B8%AD%E5%9B%BD%E4%B9%98%E5%AE%A2%E5%8F%91%E5%A3%B0%23) `1.1M 🔥` `NEW`
1. [孙颖莎长文总结世界杯](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%95%BF%E6%96%87%E6%80%BB%E7%BB%93%E4%B8%96%E7%95%8C%E6%9D%AF%23) `397.5K 🔥` `NEW`
1. [江山大同杨幂路透](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%E6%9D%A8%E5%B9%82%E8%B7%AF%E9%80%8F%23) `244.9K 🔥` `NEW`
1. [猎罪图鉴](https://s.weibo.com/weibo?q=%23%E7%8C%8E%E7%BD%AA%E5%9B%BE%E9%89%B4%23) `171.6K 🔥` `NEW`
1. [最全的布洛芬品种都在曹操墓前了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%85%A8%E7%9A%84%E5%B8%83%E6%B4%9B%E8%8A%AC%E5%93%81%E7%A7%8D%E9%83%BD%E5%9C%A8%E6%9B%B9%E6%93%8D%E5%A2%93%E5%89%8D%E4%BA%86%23) `115.5K 🔥` `NEW`
1. [王源天津抢票](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%A4%A9%E6%B4%A5%E6%8A%A2%E7%A5%A8%23) `113.4K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `102.1K 🔥` `NEW`
1. [时代峰峻的销冠都在这了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E7%9A%84%E9%94%80%E5%86%A0%E9%83%BD%E5%9C%A8%E8%BF%99%E4%BA%86%23) `96.5K 🔥` `NEW`
1. [本周做什么都顺的星座](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E5%81%9A%E4%BB%80%E4%B9%88%E9%83%BD%E9%A1%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `88.9K 🔥` `NEW`
1. [短发李一桐 芭比娃娃](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%8F%91%E6%9D%8E%E4%B8%80%E6%A1%90%20%E8%8A%AD%E6%AF%94%E5%A8%83%E5%A8%83%23) `88.7K 🔥` `NEW`
1. [卫生巾价格或上涨3%至8% (Sanitary napkin prices may rise by 3% to 8%)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E4%BB%B7%E6%A0%BC%E6%88%96%E4%B8%8A%E6%B6%A83%25%E8%87%B38%25%23) `88.5K 🔥` `NEW`
1. [存在感低 吃瓜体质](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%9C%A8%E6%84%9F%E4%BD%8E%20%E5%90%83%E7%93%9C%E4%BD%93%E8%B4%A8%23) `87.2K 🔥` `NEW`
1. [杜海涛开车接机沈梦辰](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E6%B5%B7%E6%B6%9B%E5%BC%80%E8%BD%A6%E6%8E%A5%E6%9C%BA%E6%B2%88%E6%A2%A6%E8%BE%B0%23) `86.1K 🔥` `NEW`
1. [文淇 真命天子先不要来找我](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%B7%87%20%E7%9C%9F%E5%91%BD%E5%A4%A9%E5%AD%90%E5%85%88%E4%B8%8D%E8%A6%81%E6%9D%A5%E6%89%BE%E6%88%91%23) `85.3K 🔥` `NEW`
1. [被已婚男骗交往女子得知后抑郁](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%B7%B2%E5%A9%9A%E7%94%B7%E9%AA%97%E4%BA%A4%E5%BE%80%E5%A5%B3%E5%AD%90%E5%BE%97%E7%9F%A5%E5%90%8E%E6%8A%91%E9%83%81%23) `70.2K 🔥` `NEW`
1. [月鳞绮纪海外热度](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E6%B5%B7%E5%A4%96%E7%83%AD%E5%BA%A6%23) `66.9K 🔥` `NEW`
1. [果然AI取代不了人类](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6AI%E5%8F%96%E4%BB%A3%E4%B8%8D%E4%BA%86%E4%BA%BA%E7%B1%BB%23) `58.9K 🔥` `NEW`
1. [当我听从自己的身体去吃饭时](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E5%90%AC%E4%BB%8E%E8%87%AA%E5%B7%B1%E7%9A%84%E8%BA%AB%E4%BD%93%E5%8E%BB%E5%90%83%E9%A5%AD%E6%97%B6%23) `55.1K 🔥` `NEW`
1. [黄龙景区回应男童向钙化彩池内小便](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%BE%99%E6%99%AF%E5%8C%BA%E5%9B%9E%E5%BA%94%E7%94%B7%E7%AB%A5%E5%90%91%E9%92%99%E5%8C%96%E5%BD%A9%E6%B1%A0%E5%86%85%E5%B0%8F%E4%BE%BF%23) `55.0K 🔥` `NEW`
1. [iPhone18Pro配色前瞻](https://s.weibo.com/weibo?q=%23iPhone18Pro%E9%85%8D%E8%89%B2%E5%89%8D%E7%9E%BB%23) `818.6K 🔥` `+1165%`
1. [张雪回应陈光标捐款1000万 (Zhang Xue responded to Chen Guangbiao’s donation of 10 million)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%9B%9E%E5%BA%94%E9%99%88%E5%85%89%E6%A0%87%E6%8D%90%E6%AC%BE1000%E4%B8%87%23) `391.9K 🔥` `+361%`
1. [台湾春卷中毒人数增至134人 (Number of spring roll poisoning cases in Taiwan rises to 134)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E6%98%A5%E5%8D%B7%E4%B8%AD%E6%AF%92%E4%BA%BA%E6%95%B0%E5%A2%9E%E8%87%B3134%E4%BA%BA%23) `278.4K 🔥` `+188%`
1. [孕妇在飞纽约航班上高空产子](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E5%9C%A8%E9%A3%9E%E7%BA%BD%E7%BA%A6%E8%88%AA%E7%8F%AD%E4%B8%8A%E9%AB%98%E7%A9%BA%E4%BA%A7%E5%AD%90%23) `241.4K 🔥` `+166%`
1. [林宇辉 猎罪图鉴3不拍了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AE%87%E8%BE%89%20%E7%8C%8E%E7%BD%AA%E5%9B%BE%E9%89%B43%E4%B8%8D%E6%8B%8D%E4%BA%86%23) `204.7K 🔥` `+30%`
1. [桃黑黑道歉 (Taoheihei apologizes)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E9%81%93%E6%AD%89%23) `202.6K 🔥` `+43%`
1. [唐艺昕李小冉都被对方的美貌迷住了](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E6%9D%8E%E5%B0%8F%E5%86%89%E9%83%BD%E8%A2%AB%E5%AF%B9%E6%96%B9%E7%9A%84%E7%BE%8E%E8%B2%8C%E8%BF%B7%E4%BD%8F%E4%BA%86%23) `168.9K 🔥` `+48%`
1. [39岁离异姑姑独自带大5个孩子](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E7%A6%BB%E5%BC%82%E5%A7%91%E5%A7%91%E7%8B%AC%E8%87%AA%E5%B8%A6%E5%A4%A75%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `154.5K 🔥` `+120%`
1. [Angelababy家里摆满了粉丝的礼物](https://s.weibo.com/weibo?q=%23Angelababy%E5%AE%B6%E9%87%8C%E6%91%86%E6%BB%A1%E4%BA%86%E7%B2%89%E4%B8%9D%E7%9A%84%E7%A4%BC%E7%89%A9%23) `108.8K 🔥` `+21%`
1. [2030年的中国什么样](https://s.weibo.com/weibo?q=%232030%E5%B9%B4%E7%9A%84%E4%B8%AD%E5%9B%BD%E4%BB%80%E4%B9%88%E6%A0%B7%23) `650.2K 🔥`
1. [樊振东23岁成就世界杯四冠王](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C23%E5%B2%81%E6%88%90%E5%B0%B1%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%86%A0%E7%8E%8B%23) `195.6K 🔥`
1. [洗衣液是需要反应时间的](https://s.weibo.com/weibo?q=%23%E6%B4%97%E8%A1%A3%E6%B6%B2%E6%98%AF%E9%9C%80%E8%A6%81%E5%8F%8D%E5%BA%94%E6%97%B6%E9%97%B4%E7%9A%84%23) `164.8K 🔥`
1. [郭敬明又拍出了鞠婧祎的神级回首](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E5%8F%88%E6%8B%8D%E5%87%BA%E4%BA%86%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%9A%84%E7%A5%9E%E7%BA%A7%E5%9B%9E%E9%A6%96%23) `94.8K 🔥`
1. [朵朵和陈思诚共用一张脸 (Duoduo and Chen Sicheng share the same face)](https://s.weibo.com/weibo?q=%23%E6%9C%B5%E6%9C%B5%E5%92%8C%E9%99%88%E6%80%9D%E8%AF%9A%E5%85%B1%E7%94%A8%E4%B8%80%E5%BC%A0%E8%84%B8%23) `88.8K 🔥`
1. [田曦薇素颜饭撒](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%B4%A0%E9%A2%9C%E9%A5%AD%E6%92%92%23) `88.0K 🔥`
1. [国内金饰价格大跌](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E5%A4%A7%E8%B7%8C%23) `85.5K 🔥`
1. [张月队完颜团](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%98%9F%E5%AE%8C%E9%A2%9C%E5%9B%A2%23) `74.6K 🔥`
1. [香港飞香港的航班 (flights from Hong Kong to Hong Kong)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E9%A3%9E%E9%A6%99%E6%B8%AF%E7%9A%84%E8%88%AA%E7%8F%AD%23) `425.7K 🔥` `-62%`
1. [王楚钦晒世界杯大合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%99%92%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%A7%E5%90%88%E7%85%A7%23) `206.2K 🔥` `-34%`
1. [美伊停火协议或将于6日生效 (The US-Iran ceasefire agreement may come into effect on the 6th)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E5%8D%8F%E8%AE%AE%E6%88%96%E5%B0%86%E4%BA%8E6%E6%97%A5%E7%94%9F%E6%95%88%23) `189.5K 🔥` `-42%`
1. [王濛练心愿便利贴要疯了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%BB%83%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%E8%A6%81%E7%96%AF%E4%BA%86%23) `91.9K 🔥` `-31%`
1. [当租到烟民退租的房](https://s.weibo.com/weibo?q=%23%E5%BD%93%E7%A7%9F%E5%88%B0%E7%83%9F%E6%B0%91%E9%80%80%E7%A7%9F%E7%9A%84%E6%88%BF%23) `80.7K 🔥` `-54%`
1. [被收养的小猫看见妈妈还在流浪](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%94%B6%E5%85%BB%E7%9A%84%E5%B0%8F%E7%8C%AB%E7%9C%8B%E8%A7%81%E5%A6%88%E5%A6%88%E8%BF%98%E5%9C%A8%E6%B5%81%E6%B5%AA%23) `77.4K 🔥` `-39%`
1. [乘风2026一公选歌组队 (Chengfeng 2026 Yi Gong selects songs to form a team)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%B8%80%E5%85%AC%E9%80%89%E6%AD%8C%E7%BB%84%E9%98%9F%23) `70.1K 🔥` `-28%`
1. [11岁男孩偷拿钥匙开车出车位就撞了](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E7%94%B7%E5%AD%A9%E5%81%B7%E6%8B%BF%E9%92%A5%E5%8C%99%E5%BC%80%E8%BD%A6%E5%87%BA%E8%BD%A6%E4%BD%8D%E5%B0%B1%E6%92%9E%E4%BA%86%23) `66.6K 🔥` `-25%`
1. [红果短剧公告](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%85%AC%E5%91%8A%23) `58.2K 🔥` `-31%`
1. [中国新能源车出口彻底爆发 (China's new energy vehicle exports explode)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E5%87%BA%E5%8F%A3%E5%BD%BB%E5%BA%95%E7%88%86%E5%8F%91%23) `56.8K 🔥` `-25%`
1. [伊朗逼美国做选择](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%80%BC%E7%BE%8E%E5%9B%BD%E5%81%9A%E9%80%89%E6%8B%A9%23) `54.5K 🔥` `-38%`
1. [湖南永州一交通事故致3死3伤](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E6%B0%B8%E5%B7%9E%E4%B8%80%E4%BA%A4%E9%80%9A%E4%BA%8B%E6%95%85%E8%87%B43%E6%AD%BB3%E4%BC%A4%23) `54.4K 🔥` `-69%`
1. [接下来几个月都有假](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E4%B8%8B%E6%9D%A5%E5%87%A0%E4%B8%AA%E6%9C%88%E9%83%BD%E6%9C%89%E5%81%87%23) `53.6K 🔥` `-37%`

Updated at 2026-04-06 18:41:58

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
