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

1. [闲鱼 涉黄](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%20%E6%B6%89%E9%BB%84%23) `10.4M 🔥` `NEW`
1. [万千气象看吉林](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%E7%9C%8B%E5%90%89%E6%9E%97%23) `1.5M 🔥` `NEW`
1. [闲鱼 暗网](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%20%E6%9A%97%E7%BD%91%23) `911.5K 🔥` `NEW`
1. [买聚能环致妻儿死亡男子发声](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%81%9A%E8%83%BD%E7%8E%AF%E8%87%B4%E5%A6%BB%E5%84%BF%E6%AD%BB%E4%BA%A1%E7%94%B7%E5%AD%90%E5%8F%91%E5%A3%B0%23) `731.2K 🔥` `NEW`
1. [闲鱼封了9.8万个涉黄账号](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%E5%B0%81%E4%BA%869.8%E4%B8%87%E4%B8%AA%E6%B6%89%E9%BB%84%E8%B4%A6%E5%8F%B7%23) `669.9K 🔥` `NEW`
1. [用一句诗写完我的十年](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%B8%80%E5%8F%A5%E8%AF%97%E5%86%99%E5%AE%8C%E6%88%91%E7%9A%84%E5%8D%81%E5%B9%B4%23) `609.2K 🔥` `NEW`
1. [盛李豪亚运会破世界纪录夺金](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E6%9D%8E%E8%B1%AA%E4%BA%9A%E8%BF%90%E4%BC%9A%E7%A0%B4%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%E5%A4%BA%E9%87%91%23) `485.9K 🔥` `NEW`
1. [多方回应女子称遭高校硕导性侵](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E7%A7%B0%E9%81%AD%E9%AB%98%E6%A0%A1%E7%A1%95%E5%AF%BC%E6%80%A7%E4%BE%B5%23) `402.9K 🔥` `NEW`
1. [西贝贾国龙现身演讲](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%B4%9D%E8%B4%BE%E5%9B%BD%E9%BE%99%E7%8E%B0%E8%BA%AB%E6%BC%94%E8%AE%B2%23) `277.7K 🔥` `NEW`
1. [自己做饭成本其实很高](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%B7%B1%E5%81%9A%E9%A5%AD%E6%88%90%E6%9C%AC%E5%85%B6%E5%AE%9E%E5%BE%88%E9%AB%98%23) `276.9K 🔥` `NEW`
1. [曝许嵩婚礼没有圈内好友参加](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%AE%B8%E5%B5%A9%E5%A9%9A%E7%A4%BC%E6%B2%A1%E6%9C%89%E5%9C%88%E5%86%85%E5%A5%BD%E5%8F%8B%E5%8F%82%E5%8A%A0%23) `275.2K 🔥` `NEW`
1. [闲鱼 暗语](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%20%E6%9A%97%E8%AF%AD%23) `274.2K 🔥` `NEW`
1. [吸烟 取消学费减免](https://s.weibo.com/weibo?q=%23%E5%90%B8%E7%83%9F%20%E5%8F%96%E6%B6%88%E5%AD%A6%E8%B4%B9%E5%87%8F%E5%85%8D%23) `272.1K 🔥` `NEW`
1. [王俊凯一张图晒出14个王俊凯](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%80%E5%BC%A0%E5%9B%BE%E6%99%92%E5%87%BA14%E4%B8%AA%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `271.6K 🔥` `NEW`
1. [许嵩 冯禧](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%20%E5%86%AF%E7%A6%A7%23) `268.9K 🔥` `NEW`
1. [张家齐经纪人把冰冷的母爱转化成温暖的流量](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%8A%8A%E5%86%B0%E5%86%B7%E7%9A%84%E6%AF%8D%E7%88%B1%E8%BD%AC%E5%8C%96%E6%88%90%E6%B8%A9%E6%9A%96%E7%9A%84%E6%B5%81%E9%87%8F%23) `267.9K 🔥` `NEW`
1. [闲鱼 未成年](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%20%E6%9C%AA%E6%88%90%E5%B9%B4%23) `267.5K 🔥` `NEW`
1. [闲鱼涉黄其他平台也有](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%E6%B6%89%E9%BB%84%E5%85%B6%E4%BB%96%E5%B9%B3%E5%8F%B0%E4%B9%9F%E6%9C%89%23) `265.1K 🔥` `NEW`
1. [孟子义江语晨 假唱](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%B1%9F%E8%AF%AD%E6%99%A8%20%E5%81%87%E5%94%B1%23) `260.4K 🔥` `NEW`
1. [你支持艾滋病纳入婚检并告知配偶吗](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%94%AF%E6%8C%81%E8%89%BE%E6%BB%8B%E7%97%85%E7%BA%B3%E5%85%A5%E5%A9%9A%E6%A3%80%E5%B9%B6%E5%91%8A%E7%9F%A5%E9%85%8D%E5%81%B6%E5%90%97%23) `259.9K 🔥` `NEW`
1. [张家齐父亲隐身](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%88%B6%E4%BA%B2%E9%9A%90%E8%BA%AB%23) `257.2K 🔥` `NEW`
1. [沈鼓](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%BC%93%23) `193.9K 🔥` `NEW`
1. [中国队男子10米气步枪破世界纪录](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%94%B7%E5%AD%9010%E7%B1%B3%E6%B0%94%E6%AD%A5%E6%9E%AA%E7%A0%B4%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `193.3K 🔥` `NEW`
1. [极氪009首发三明治空气悬架座椅](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA009%E9%A6%96%E5%8F%91%E4%B8%89%E6%98%8E%E6%B2%BB%E7%A9%BA%E6%B0%94%E6%82%AC%E6%9E%B6%E5%BA%A7%E6%A4%85%23) `189.7K 🔥` `NEW`
1. [张常鸿盛李豪马思涵破世界纪录](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B8%B8%E9%B8%BF%E7%9B%9B%E6%9D%8E%E8%B1%AA%E9%A9%AC%E6%80%9D%E6%B6%B5%E7%A0%B4%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `187.0K 🔥` `NEW`
1. [看到路人施救小狗勇敢一跃](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%88%B0%E8%B7%AF%E4%BA%BA%E6%96%BD%E6%95%91%E5%B0%8F%E7%8B%97%E5%8B%87%E6%95%A2%E4%B8%80%E8%B7%83%23) `186.8K 🔥` `NEW`
1. [明明睡够8小时 为什么第二天还是累](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%8E%E7%9D%A1%E5%A4%9F8%E5%B0%8F%E6%97%B6%20%E4%B8%BA%E4%BB%80%E4%B9%88%E7%AC%AC%E4%BA%8C%E5%A4%A9%E8%BF%98%E6%98%AF%E7%B4%AF%23) `186.8K 🔥` `NEW`
1. [闲鱼就涉黄致歉](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%E5%B0%B1%E6%B6%89%E9%BB%84%E8%87%B4%E6%AD%89%23) `184.5K 🔥` `NEW`
1. [突然理解了小允子对甄嬛的忠心](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E4%BA%86%E5%B0%8F%E5%85%81%E5%AD%90%E5%AF%B9%E7%94%84%E5%AC%9B%E7%9A%84%E5%BF%A0%E5%BF%83%23) `184.0K 🔥` `NEW`
1. [盛李豪635.4环](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E6%9D%8E%E8%B1%AA635.4%E7%8E%AF%23) `182.3K 🔥` `NEW`
1. [五角大楼附近披萨订单飙升](https://s.weibo.com/weibo?q=%23%E4%BA%94%E8%A7%92%E5%A4%A7%E6%A5%BC%E9%99%84%E8%BF%91%E6%8A%AB%E8%90%A8%E8%AE%A2%E5%8D%95%E9%A3%99%E5%8D%87%23) `182.1K 🔥` `NEW`
1. [袁绍辉开始纳妾生子](https://s.weibo.com/weibo?q=%23%E8%A2%81%E7%BB%8D%E8%BE%89%E5%BC%80%E5%A7%8B%E7%BA%B3%E5%A6%BE%E7%94%9F%E5%AD%90%23) `181.0K 🔥` `NEW`
1. [战争和人阵容官宣](https://s.weibo.com/weibo?q=%23%E6%88%98%E4%BA%89%E5%92%8C%E4%BA%BA%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `180.6K 🔥` `NEW`
1. [小米18Pro原生硬件级防窥](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E5%8E%9F%E7%94%9F%E7%A1%AC%E4%BB%B6%E7%BA%A7%E9%98%B2%E7%AA%A5%23) `175.9K 🔥` `NEW`
1. [盛李豪亚运会首秀](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E6%9D%8E%E8%B1%AA%E4%BA%9A%E8%BF%90%E4%BC%9A%E9%A6%96%E7%A7%80%23) `173.2K 🔥` `NEW`
1. [果葡糖浆跟水果完全没关系](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E8%91%A1%E7%B3%96%E6%B5%86%E8%B7%9F%E6%B0%B4%E6%9E%9C%E5%AE%8C%E5%85%A8%E6%B2%A1%E5%85%B3%E7%B3%BB%23) `172.0K 🔥` `NEW`
1. [秘鲁女候选人遭暗杀身亡现场曝光](https://s.weibo.com/weibo?q=%23%E7%A7%98%E9%B2%81%E5%A5%B3%E5%80%99%E9%80%89%E4%BA%BA%E9%81%AD%E6%9A%97%E6%9D%80%E8%BA%AB%E4%BA%A1%E7%8E%B0%E5%9C%BA%E6%9B%9D%E5%85%89%23) `169.1K 🔥` `NEW`
1. [周也哭戏被嘲](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E5%93%AD%E6%88%8F%E8%A2%AB%E5%98%B2%23) `166.4K 🔥` `NEW`
1. [王楚钦吐槽亚运比分写反](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%90%90%E6%A7%BD%E4%BA%9A%E8%BF%90%E6%AF%94%E5%88%86%E5%86%99%E5%8F%8D%23) `161.9K 🔥` `NEW`
1. [突然发现以前的手机膜都白贴了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E4%BB%A5%E5%89%8D%E7%9A%84%E6%89%8B%E6%9C%BA%E8%86%9C%E9%83%BD%E7%99%BD%E8%B4%B4%E4%BA%86%23) `156.5K 🔥` `NEW`
1. [日本网友吐槽亚运会餐食](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E5%90%90%E6%A7%BD%E4%BA%9A%E8%BF%90%E4%BC%9A%E9%A4%90%E9%A3%9F%23) `149.5K 🔥` `NEW`
1. [被指性侵女子高校硕导已离职](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%8C%87%E6%80%A7%E4%BE%B5%E5%A5%B3%E5%AD%90%E9%AB%98%E6%A0%A1%E7%A1%95%E5%AF%BC%E5%B7%B2%E7%A6%BB%E8%81%8C%23) `145.2K 🔥` `NEW`
1. [王楚钦赢了赢了这下输了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%B5%A2%E4%BA%86%E8%B5%A2%E4%BA%86%E8%BF%99%E4%B8%8B%E8%BE%93%E4%BA%86%23) `144.6K 🔥` `NEW`
1. [娜扎关晓彤挑眉打招呼](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E5%85%B3%E6%99%93%E5%BD%A4%E6%8C%91%E7%9C%89%E6%89%93%E6%8B%9B%E5%91%BC%23) `138.1K 🔥` `NEW`
1. [彩礼18.8万快成全国统一价了](https://s.weibo.com/weibo?q=%23%E5%BD%A9%E7%A4%BC18.8%E4%B8%87%E5%BF%AB%E6%88%90%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E4%BB%B7%E4%BA%86%23) `247.6K 🔥` `+45%`
1. [肯德基 消费者觉得好吃就下架](https://s.weibo.com/weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%20%E6%B6%88%E8%B4%B9%E8%80%85%E8%A7%89%E5%BE%97%E5%A5%BD%E5%90%83%E5%B0%B1%E4%B8%8B%E6%9E%B6%23) `219.7K 🔥` `+130%`
1. [曾舜晞文案尺度](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E6%96%87%E6%A1%88%E5%B0%BA%E5%BA%A6%23) `186.5K 🔥` `+53%`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `169.4K 🔥` `+86%`
1. [把配料表中的白砂糖还给我们](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E9%85%8D%E6%96%99%E8%A1%A8%E4%B8%AD%E7%9A%84%E7%99%BD%E7%A0%82%E7%B3%96%E8%BF%98%E7%BB%99%E6%88%91%E4%BB%AC%23) `1.9M 🔥`
1. [不要找太漂亮的老头演祖父](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E6%89%BE%E5%A4%AA%E6%BC%82%E4%BA%AE%E7%9A%84%E8%80%81%E5%A4%B4%E6%BC%94%E7%A5%96%E7%88%B6%23) `262.2K 🔥`

Updated at 2026-09-21 11:51:10

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
