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

1. [日本已彻底撕掉伪装 (Japan has completely shed its disguise)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%B7%B2%E5%BD%BB%E5%BA%95%E6%92%95%E6%8E%89%E4%BC%AA%E8%A3%85%23) `700.7K 🔥` `NEW`
1. [宿迁vs南京](https://s.weibo.com/weibo?q=%23%E5%AE%BF%E8%BF%81vs%E5%8D%97%E4%BA%AC%23) `420.6K 🔥` `NEW`
1. [生态文旅激活消费新活力](https://s.weibo.com/weibo?q=%23%E7%94%9F%E6%80%81%E6%96%87%E6%97%85%E6%BF%80%E6%B4%BB%E6%B6%88%E8%B4%B9%E6%96%B0%E6%B4%BB%E5%8A%9B%23) `346.8K 🔥` `NEW`
1. [陈紫函不上浪姐的原因](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%B4%AB%E5%87%BD%E4%B8%8D%E4%B8%8A%E6%B5%AA%E5%A7%90%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `336.8K 🔥` `NEW`
1. [朱孝天上节目被打](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%AD%9D%E5%A4%A9%E4%B8%8A%E8%8A%82%E7%9B%AE%E8%A2%AB%E6%89%93%23) `319.9K 🔥` `NEW`
1. [中国城市宜居水平排行榜](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9F%8E%E5%B8%82%E5%AE%9C%E5%B1%85%E6%B0%B4%E5%B9%B3%E6%8E%92%E8%A1%8C%E6%A6%9C%23) `282.0K 🔥` `NEW`
1. [日本在马关条约签订日闯入台海](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%A8%E9%A9%AC%E5%85%B3%E6%9D%A1%E7%BA%A6%E7%AD%BE%E8%AE%A2%E6%97%A5%E9%97%AF%E5%85%A5%E5%8F%B0%E6%B5%B7%23) `278.8K 🔥` `NEW`
1. [咪豆音乐节](https://s.weibo.com/weibo?q=%23%E5%92%AA%E8%B1%86%E9%9F%B3%E4%B9%90%E8%8A%82%23) `269.7K 🔥` `NEW`
1. [张雪机车为什么被罚](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%E7%BD%9A%23) `254.5K 🔥` `NEW`
1. [姜贞羽淘汰](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E8%B4%9E%E7%BE%BD%E6%B7%98%E6%B1%B0%23) `253.1K 🔥` `NEW`
1. [听障女孩回应美得像假人 (Hearing-impaired girl responds that she is as beautiful as a dummy)](https://s.weibo.com/weibo?q=%23%E5%90%AC%E9%9A%9C%E5%A5%B3%E5%AD%A9%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%BE%97%E5%83%8F%E5%81%87%E4%BA%BA%23) `252.1K 🔥` `NEW`
1. [萧蔷翻温峥嵘白眼](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%E7%BF%BB%E6%B8%A9%E5%B3%A5%E5%B5%98%E7%99%BD%E7%9C%BC%23) `248.6K 🔥` `NEW`
1. [王源被粉丝表白打断了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E8%A2%AB%E7%B2%89%E4%B8%9D%E8%A1%A8%E7%99%BD%E6%89%93%E6%96%AD%E4%BA%86%23) `246.7K 🔥` `NEW`
1. [谢娜录了时代少年团直拍](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%BD%95%E4%BA%86%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%9B%B4%E6%8B%8D%23) `245.7K 🔥` `NEW`
1. [泰国泼水节疑有人向人嘴里射毒水](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%B3%BC%E6%B0%B4%E8%8A%82%E7%96%91%E6%9C%89%E4%BA%BA%E5%90%91%E4%BA%BA%E5%98%B4%E9%87%8C%E5%B0%84%E6%AF%92%E6%B0%B4%23) `234.9K 🔥` `NEW`
1. [通勤最辛苦城市](https://s.weibo.com/weibo?q=%23%E9%80%9A%E5%8B%A4%E6%9C%80%E8%BE%9B%E8%8B%A6%E5%9F%8E%E5%B8%82%23) `207.3K 🔥` `NEW`
1. [解放军凌晨四点管控日舰过航台湾海峡](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E5%87%8C%E6%99%A8%E5%9B%9B%E7%82%B9%E7%AE%A1%E6%8E%A7%E6%97%A5%E8%88%B0%E8%BF%87%E8%88%AA%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%23) `198.0K 🔥` `NEW`
1. [李小冉玩梗心愿便利贴](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%8E%A9%E6%A2%97%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%23) `196.8K 🔥` `NEW`
1. [日媒集体噤声](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E9%9B%86%E4%BD%93%E5%99%A4%E5%A3%B0%23) `193.4K 🔥` `NEW`
1. [宿迁2比0南京](https://s.weibo.com/weibo?q=%23%E5%AE%BF%E8%BF%812%E6%AF%940%E5%8D%97%E4%BA%AC%23) `191.8K 🔥` `NEW`
1. [五一航班大面积取消 (Widespread cancellation of May Day flights)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E8%88%AA%E7%8F%AD%E5%A4%A7%E9%9D%A2%E7%A7%AF%E5%8F%96%E6%B6%88%23) `189.4K 🔥` `NEW`
1. [解放军护卫舰已随时准备开火](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E6%8A%A4%E5%8D%AB%E8%88%B0%E5%B7%B2%E9%9A%8F%E6%97%B6%E5%87%86%E5%A4%87%E5%BC%80%E7%81%AB%23) `188.4K 🔥` `NEW`
1. [内耗人的终极解药](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%80%97%E4%BA%BA%E7%9A%84%E7%BB%88%E6%9E%81%E8%A7%A3%E8%8D%AF%23) `185.1K 🔥` `NEW`
1. [小学生春游到自己家要求赔10元车费](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E7%94%9F%E6%98%A5%E6%B8%B8%E5%88%B0%E8%87%AA%E5%B7%B1%E5%AE%B6%E8%A6%81%E6%B1%82%E8%B5%9410%E5%85%83%E8%BD%A6%E8%B4%B9%23) `184.9K 🔥` `NEW`
1. [日本赌国运老毛病又犯了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%B5%8C%E5%9B%BD%E8%BF%90%E8%80%81%E6%AF%9B%E7%97%85%E5%8F%88%E7%8A%AF%E4%BA%86%23) `184.4K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `184.1K 🔥` `NEW`
1. [男子养龙虾月赔10万破防抑郁](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%85%BB%E9%BE%99%E8%99%BE%E6%9C%88%E8%B5%9410%E4%B8%87%E7%A0%B4%E9%98%B2%E6%8A%91%E9%83%81%23) `183.8K 🔥` `NEW`
1. [六位数的狗坐在七位数的车里](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%BD%8D%E6%95%B0%E7%9A%84%E7%8B%97%E5%9D%90%E5%9C%A8%E4%B8%83%E4%BD%8D%E6%95%B0%E7%9A%84%E8%BD%A6%E9%87%8C%23) `183.6K 🔥` `NEW`
1. [女子机场两次拒绝帮陌生人带行李](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9C%BA%E5%9C%BA%E4%B8%A4%E6%AC%A1%E6%8B%92%E7%BB%9D%E5%B8%AE%E9%99%8C%E7%94%9F%E4%BA%BA%E5%B8%A6%E8%A1%8C%E6%9D%8E%23) `183.1K 🔥` `NEW`
1. [龚俊拍了刘宇宁唱天问](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E6%8B%8D%E4%BA%86%E5%88%98%E5%AE%87%E5%AE%81%E5%94%B1%E5%A4%A9%E9%97%AE%23) `183.0K 🔥` `NEW`
1. [张杰演唱会偶遇马嘉祺丁程鑫贺峻霖 (Zhang Jie met Ma Jiaqi, Ding Chengxin, He Junlin at the concert)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E5%81%B6%E9%81%87%E9%A9%AC%E5%98%89%E7%A5%BA%E4%B8%81%E7%A8%8B%E9%91%AB%E8%B4%BA%E5%B3%BB%E9%9C%96%23) `182.5K 🔥` `NEW`
1. [樊振东波尔日内瓦旅行](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%B3%A2%E5%B0%94%E6%97%A5%E5%86%85%E7%93%A6%E6%97%85%E8%A1%8C%23) `182.2K 🔥` `NEW`
1. [张小斐被虫子吓得弹起来了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E8%A2%AB%E8%99%AB%E5%AD%90%E5%90%93%E5%BE%97%E5%BC%B9%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `181.4K 🔥` `NEW`
1. [李小冉 你吃过麻辣拌吗](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E4%BD%A0%E5%90%83%E8%BF%87%E9%BA%BB%E8%BE%A3%E6%8B%8C%E5%90%97%23) `181.1K 🔥` `NEW`
1. [日本骑行新规真把日本人当日本人整](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%AA%91%E8%A1%8C%E6%96%B0%E8%A7%84%E7%9C%9F%E6%8A%8A%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%BD%93%E6%97%A5%E6%9C%AC%E4%BA%BA%E6%95%B4%23) `180.8K 🔥` `NEW`
1. [日本迫切出兵海外](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%BF%AB%E5%88%87%E5%87%BA%E5%85%B5%E6%B5%B7%E5%A4%96%23) `180.6K 🔥` `NEW`
1. [校方通报家长与麻辣烫摊主纠纷](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E6%96%B9%E9%80%9A%E6%8A%A5%E5%AE%B6%E9%95%BF%E4%B8%8E%E9%BA%BB%E8%BE%A3%E7%83%AB%E6%91%8A%E4%B8%BB%E7%BA%A0%E7%BA%B7%23) `180.1K 🔥` `NEW`
1. [中国已不是131年前的中国](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B7%B2%E4%B8%8D%E6%98%AF131%E5%B9%B4%E5%89%8D%E7%9A%84%E4%B8%AD%E5%9B%BD%23) `179.9K 🔥` `NEW`
1. [张雪机车](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `179.4K 🔥` `NEW`
1. [56岁雷军连续直播15小时](https://s.weibo.com/weibo?q=%2356%E5%B2%81%E9%9B%B7%E5%86%9B%E8%BF%9E%E7%BB%AD%E7%9B%B4%E6%92%AD15%E5%B0%8F%E6%97%B6%23) `178.9K 🔥` `NEW`
1. [这些可能是早期肺癌警示性症状 (These may be early warning symptoms of lung cancer)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E5%8F%AF%E8%83%BD%E6%98%AF%E6%97%A9%E6%9C%9F%E8%82%BA%E7%99%8C%E8%AD%A6%E7%A4%BA%E6%80%A7%E7%97%87%E7%8A%B6%23) `178.6K 🔥` `NEW`
1. [深圳一小学老师批改作业时崩溃大哭](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E5%B0%8F%E5%AD%A6%E8%80%81%E5%B8%88%E6%89%B9%E6%94%B9%E4%BD%9C%E4%B8%9A%E6%97%B6%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `178.4K 🔥` `NEW`
1. [苏超徐州队3比0泰州队](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%BE%90%E5%B7%9E%E9%98%9F3%E6%AF%940%E6%B3%B0%E5%B7%9E%E9%98%9F%23) `177.9K 🔥` `NEW`
1. [日本囤分离钚足够造约5500枚核弹头](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9B%A4%E5%88%86%E7%A6%BB%E9%92%9A%E8%B6%B3%E5%A4%9F%E9%80%A0%E7%BA%A65500%E6%9E%9A%E6%A0%B8%E5%BC%B9%E5%A4%B4%23) `177.6K 🔥` `NEW`
1. [亚马逊创始人与56岁妻子正积极备孕](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E9%80%8A%E5%88%9B%E5%A7%8B%E4%BA%BA%E4%B8%8E56%E5%B2%81%E5%A6%BB%E5%AD%90%E6%AD%A3%E7%A7%AF%E6%9E%81%E5%A4%87%E5%AD%95%23) `177.2K 🔥` `NEW`
1. [周深现场首唱吉量](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E7%8E%B0%E5%9C%BA%E9%A6%96%E5%94%B1%E5%90%89%E9%87%8F%23) `177.1K 🔥` `NEW`
1. [张雪机车首回合第4](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E9%A6%96%E5%9B%9E%E5%90%88%E7%AC%AC4%23) `176.5K 🔥` `NEW`
1. [伊朗恢复对霍尔木兹海峡的控制](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%81%A2%E5%A4%8D%E5%AF%B9%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E7%9A%84%E6%8E%A7%E5%88%B6%23) `176.3K 🔥` `NEW`
1. [长大告诉孩子是轮胎生的](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E5%91%8A%E8%AF%89%E5%AD%A9%E5%AD%90%E6%98%AF%E8%BD%AE%E8%83%8E%E7%94%9F%E7%9A%84%23) `176.0K 🔥` `NEW`

Updated at 2026-04-19 01:20:20

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
