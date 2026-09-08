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

1. [苹果用户换华为](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E7%94%A8%E6%88%B7%E6%8D%A2%E5%8D%8E%E4%B8%BA%23) `1.5M 🔥` `NEW`
1. [华为 备用机](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%20%E5%A4%87%E7%94%A8%E6%9C%BA%23) `917.0K 🔥` `NEW`
1. [我国进出口连续4个月保持两位数增长](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E8%BF%9B%E5%87%BA%E5%8F%A3%E8%BF%9E%E7%BB%AD4%E4%B8%AA%E6%9C%88%E4%BF%9D%E6%8C%81%E4%B8%A4%E4%BD%8D%E6%95%B0%E5%A2%9E%E9%95%BF%23) `704.3K 🔥` `NEW`
1. [医生眼里让大脑休息最好的方法](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%9C%BC%E9%87%8C%E8%AE%A9%E5%A4%A7%E8%84%91%E4%BC%91%E6%81%AF%E6%9C%80%E5%A5%BD%E7%9A%84%E6%96%B9%E6%B3%95%23) `689.7K 🔥` `NEW`
1. [栾念为了见尚之桃飞西北20次](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E4%B8%BA%E4%BA%86%E8%A7%81%E5%B0%9A%E4%B9%8B%E6%A1%83%E9%A3%9E%E8%A5%BF%E5%8C%9720%E6%AC%A1%23) `524.9K 🔥` `NEW`
1. [金鹰节公告](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E8%8A%82%E5%85%AC%E5%91%8A%23) `357.9K 🔥` `NEW`
1. [混动XT5搭载满血辅助驾驶25.99万](https://s.weibo.com/weibo?q=%23%E6%B7%B7%E5%8A%A8XT5%E6%90%AD%E8%BD%BD%E6%BB%A1%E8%A1%80%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B625.99%E4%B8%87%23) `356.7K 🔥` `NEW`
1. [旅行青蛙](https://s.weibo.com/weibo?q=%23%E6%97%85%E8%A1%8C%E9%9D%92%E8%9B%99%23) `356.3K 🔥` `NEW`
1. [iG晋级LPL败决](https://s.weibo.com/weibo?q=%23iG%E6%99%8B%E7%BA%A7LPL%E8%B4%A5%E5%86%B3%23) `353.0K 🔥` `NEW`
1. [LPL官方回应iG锁定S赛资格赛](https://s.weibo.com/weibo?q=%23LPL%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94iG%E9%94%81%E5%AE%9AS%E8%B5%9B%E8%B5%84%E6%A0%BC%E8%B5%9B%23) `347.6K 🔥` `NEW`
1. [iG战胜LGD](https://s.weibo.com/weibo?q=%23iG%E6%88%98%E8%83%9CLGD%23) `343.4K 🔥` `NEW`
1. [女子还不起房贷喊话前男友收回](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%98%E4%B8%8D%E8%B5%B7%E6%88%BF%E8%B4%B7%E5%96%8A%E8%AF%9D%E5%89%8D%E7%94%B7%E5%8F%8B%E6%94%B6%E5%9B%9E%23) `340.3K 🔥` `NEW`
1. [刘浩存 大码女装](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%20%E5%A4%A7%E7%A0%81%E5%A5%B3%E8%A3%85%23) `334.8K 🔥` `NEW`
1. [低保香港演唱会事件 命运捉弄人](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E4%BF%9D%E9%A6%99%E6%B8%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%8B%E4%BB%B6%20%E5%91%BD%E8%BF%90%E6%8D%89%E5%BC%84%E4%BA%BA%23) `328.9K 🔥` `NEW`
1. [孙柏涵提前表白](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9F%8F%E6%B6%B5%E6%8F%90%E5%89%8D%E8%A1%A8%E7%99%BD%23) `328.4K 🔥` `NEW`
1. [吃播已成吃人的流量赛道](https://s.weibo.com/weibo?q=%23%E5%90%83%E6%92%AD%E5%B7%B2%E6%88%90%E5%90%83%E4%BA%BA%E7%9A%84%E6%B5%81%E9%87%8F%E8%B5%9B%E9%81%93%23) `320.6K 🔥` `NEW`
1. [韩国 汉字教育](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%20%E6%B1%89%E5%AD%97%E6%95%99%E8%82%B2%23) `313.5K 🔥` `NEW`
1. [郑钦文下轮取胜将刷新美网最佳](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%B8%8B%E8%BD%AE%E5%8F%96%E8%83%9C%E5%B0%86%E5%88%B7%E6%96%B0%E7%BE%8E%E7%BD%91%E6%9C%80%E4%BD%B3%23) `311.6K 🔥` `NEW`
1. [倪妮黑裙踩井盖](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%E9%BB%91%E8%A3%99%E8%B8%A9%E4%BA%95%E7%9B%96%23) `307.3K 🔥` `NEW`
1. [受资助女孩质问为何没打生活费](https://s.weibo.com/weibo?q=%23%E5%8F%97%E8%B5%84%E5%8A%A9%E5%A5%B3%E5%AD%A9%E8%B4%A8%E9%97%AE%E4%B8%BA%E4%BD%95%E6%B2%A1%E6%89%93%E7%94%9F%E6%B4%BB%E8%B4%B9%23) `306.4K 🔥` `NEW`
1. [虞书欣工作排到明年了](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B7%A5%E4%BD%9C%E6%8E%92%E5%88%B0%E6%98%8E%E5%B9%B4%E4%BA%86%23) `304.3K 🔥` `NEW`
1. [打了21个耳洞的耳朵](https://s.weibo.com/weibo?q=%23%E6%89%93%E4%BA%8621%E4%B8%AA%E8%80%B3%E6%B4%9E%E7%9A%84%E8%80%B3%E6%9C%B5%23) `301.9K 🔥` `NEW`
1. [蔡依林刘亦菲合照](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%88%98%E4%BA%A6%E8%8F%B2%E5%90%88%E7%85%A7%23) `300.4K 🔥` `NEW`
1. [麻辣王子内含陌生人表白卡](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E8%BE%A3%E7%8E%8B%E5%AD%90%E5%86%85%E5%90%AB%E9%99%8C%E7%94%9F%E4%BA%BA%E8%A1%A8%E7%99%BD%E5%8D%A1%23) `299.8K 🔥` `NEW`
1. [刘雯在国外的知名度真的不一般](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E5%9C%A8%E5%9B%BD%E5%A4%96%E7%9A%84%E7%9F%A5%E5%90%8D%E5%BA%A6%E7%9C%9F%E7%9A%84%E4%B8%8D%E4%B8%80%E8%88%AC%23) `293.3K 🔥` `NEW`
1. [星宇股份找了个已离任的人免职](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E6%89%BE%E4%BA%86%E4%B8%AA%E5%B7%B2%E7%A6%BB%E4%BB%BB%E7%9A%84%E4%BA%BA%E5%85%8D%E8%81%8C%23) `291.3K 🔥` `NEW`
1. [快乐星球还在追着马嘉祺跑](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E4%B9%90%E6%98%9F%E7%90%83%E8%BF%98%E5%9C%A8%E8%BF%BD%E7%9D%80%E9%A9%AC%E5%98%89%E7%A5%BA%E8%B7%91%23) `290.3K 🔥` `NEW`
1. [贺涵花好几万买一条鱼](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E6%B6%B5%E8%8A%B1%E5%A5%BD%E5%87%A0%E4%B8%87%E4%B9%B0%E4%B8%80%E6%9D%A1%E9%B1%BC%23) `283.7K 🔥` `NEW`
1. [整个英语体系没有比这个更完整的了](https://s.weibo.com/weibo?q=%23%E6%95%B4%E4%B8%AA%E8%8B%B1%E8%AF%AD%E4%BD%93%E7%B3%BB%E6%B2%A1%E6%9C%89%E6%AF%94%E8%BF%99%E4%B8%AA%E6%9B%B4%E5%AE%8C%E6%95%B4%E7%9A%84%E4%BA%86%23) `281.4K 🔥` `NEW`
1. [LPL冒泡赛名额已全部确定](https://s.weibo.com/weibo?q=%23LPL%E5%86%92%E6%B3%A1%E8%B5%9B%E5%90%8D%E9%A2%9D%E5%B7%B2%E5%85%A8%E9%83%A8%E7%A1%AE%E5%AE%9A%23) `207.4K 🔥` `NEW`
1. [卢昱晓苏落薇眼妆](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E8%8B%8F%E8%90%BD%E8%96%87%E7%9C%BC%E5%A6%86%23) `196.1K 🔥` `NEW`
1. [TheShy赛后拥抱Crisp](https://s.weibo.com/weibo?q=%23TheShy%E8%B5%9B%E5%90%8E%E6%8B%A5%E6%8A%B1Crisp%23) `183.2K 🔥` `NEW`
1. [00后现状怎么做到全国统一的](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E7%8E%B0%E7%8A%B6%E6%80%8E%E4%B9%88%E5%81%9A%E5%88%B0%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84%23) `176.4K 🔥` `NEW`
1. [唐国强问赖冠霖有家庭了吗](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%9B%BD%E5%BC%BA%E9%97%AE%E8%B5%96%E5%86%A0%E9%9C%96%E6%9C%89%E5%AE%B6%E5%BA%AD%E4%BA%86%E5%90%97%23) `172.9K 🔥` `NEW`
1. [井柏然谈很少拍偶像剧原因](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E8%B0%88%E5%BE%88%E5%B0%91%E6%8B%8D%E5%81%B6%E5%83%8F%E5%89%A7%E5%8E%9F%E5%9B%A0%23) `168.8K 🔥` `NEW`
1. [剖宫产身亡产妇丈夫称很绝望](https://s.weibo.com/weibo?q=%23%E5%89%96%E5%AE%AB%E4%BA%A7%E8%BA%AB%E4%BA%A1%E4%BA%A7%E5%A6%87%E4%B8%88%E5%A4%AB%E7%A7%B0%E5%BE%88%E7%BB%9D%E6%9C%9B%23) `168.6K 🔥` `NEW`
1. [白鹿跳选择失忆手势舞](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%B7%B3%E9%80%89%E6%8B%A9%E5%A4%B1%E5%BF%86%E6%89%8B%E5%8A%BF%E8%88%9E%23) `168.6K 🔥` `NEW`
1. [时代少年团没发的物料](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%B2%A1%E5%8F%91%E7%9A%84%E7%89%A9%E6%96%99%23) `148.6K 🔥` `NEW`
1. [井柏然孙千的杀青戏是哭戏](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E7%9A%84%E6%9D%80%E9%9D%92%E6%88%8F%E6%98%AF%E5%93%AD%E6%88%8F%23) `148.5K 🔥` `NEW`
1. [高中生入选中国男足](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E5%85%A5%E9%80%89%E4%B8%AD%E5%9B%BD%E7%94%B7%E8%B6%B3%23) `148.4K 🔥` `NEW`
1. [TF四代陪看我们的少年时代2](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E9%99%AA%E7%9C%8B%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `148.4K 🔥` `NEW`
1. [王一博赛车成绩表](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%B5%9B%E8%BD%A6%E6%88%90%E7%BB%A9%E8%A1%A8%23) `144.5K 🔥` `NEW`
1. [A股站在田里](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%AB%99%E5%9C%A8%E7%94%B0%E9%87%8C%23) `130.5K 🔥` `NEW`
1. [原来人可以这样对抗虚无](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%BA%BA%E5%8F%AF%E4%BB%A5%E8%BF%99%E6%A0%B7%E5%AF%B9%E6%8A%97%E8%99%9A%E6%97%A0%23) `127.1K 🔥` `NEW`
1. [孙艺洲1天瘦3.9斤](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%89%BA%E6%B4%B21%E5%A4%A9%E7%98%A63.9%E6%96%A4%23) `125.4K 🔥` `NEW`
1. [太子奶](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%AD%90%E5%A5%B6%23) `339.2K 🔥`
1. [手机集体涨价原因找到了](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E9%9B%86%E4%BD%93%E6%B6%A8%E4%BB%B7%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `326.5K 🔥`
1. [尚雯婕公司起诉曾舜晞](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E9%9B%AF%E5%A9%95%E5%85%AC%E5%8F%B8%E8%B5%B7%E8%AF%89%E6%9B%BE%E8%88%9C%E6%99%9E%23) `279.1K 🔥`
1. [小米澎程SUV现已开售](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BSUV%E7%8E%B0%E5%B7%B2%E5%BC%80%E5%94%AE%23) `703.0K 🔥` `-42%`
1. [太子奶创始人李途纯去世](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%AD%90%E5%A5%B6%E5%88%9B%E5%A7%8B%E4%BA%BA%E6%9D%8E%E9%80%94%E7%BA%AF%E5%8E%BB%E4%B8%96%23) `287.2K 🔥` `-65%`
1. [迅猛龙给75级粉丝办答谢宴](https://s.weibo.com/weibo?q=%23%E8%BF%85%E7%8C%9B%E9%BE%99%E7%BB%9975%E7%BA%A7%E7%B2%89%E4%B8%9D%E5%8A%9E%E7%AD%94%E8%B0%A2%E5%AE%B4%23) `193.9K 🔥` `-41%`
1. [张婧仪宋威龙 行程](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%AE%8B%E5%A8%81%E9%BE%99%20%E8%A1%8C%E7%A8%8B%23) `182.1K 🔥` `-47%`

Updated at 2026-09-08 21:54:52

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
