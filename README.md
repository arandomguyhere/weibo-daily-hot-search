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

1. [香港首任特首董建华逝世](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E9%A6%96%E4%BB%BB%E7%89%B9%E9%A6%96%E8%91%A3%E5%BB%BA%E5%8D%8E%E9%80%9D%E4%B8%96%23) `1.5M 🔥` `NEW`
1. [iPhone18Pro发布会倒计时](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%8F%91%E5%B8%83%E4%BC%9A%E5%80%92%E8%AE%A1%E6%97%B6%23) `879.9K 🔥` `NEW`
1. [从瑞金到延安的初心奔赴](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E7%91%9E%E9%87%91%E5%88%B0%E5%BB%B6%E5%AE%89%E7%9A%84%E5%88%9D%E5%BF%83%E5%A5%94%E8%B5%B4%23) `873.1K 🔥` `NEW`
1. [毛泽东逝世50周年](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%B3%BD%E4%B8%9C%E9%80%9D%E4%B8%9650%E5%91%A8%E5%B9%B4%23) `615.4K 🔥` `NEW`
1. [小米回应澎程试驾事故](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%9B%9E%E5%BA%94%E6%BE%8E%E7%A8%8B%E8%AF%95%E9%A9%BE%E4%BA%8B%E6%95%85%23) `542.1K 🔥` `NEW`
1. [美股 光通信](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%20%E5%85%89%E9%80%9A%E4%BF%A1%23) `476.2K 🔥` `NEW`
1. [栾念尚之桃重逢擦肩而过](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E5%B0%9A%E4%B9%8B%E6%A1%83%E9%87%8D%E9%80%A2%E6%93%A6%E8%82%A9%E8%80%8C%E8%BF%87%23) `352.2K 🔥` `NEW`
1. [网传虞书欣连开三部](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%BF%9E%E5%BC%80%E4%B8%89%E9%83%A8%23) `351.3K 🔥` `NEW`
1. [张婧仪 宋威龙](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%20%E5%AE%8B%E5%A8%81%E9%BE%99%23) `347.8K 🔥` `NEW`
1. [差点没认出杨洋](https://s.weibo.com/weibo?q=%23%E5%B7%AE%E7%82%B9%E6%B2%A1%E8%AE%A4%E5%87%BA%E6%9D%A8%E6%B4%8B%23) `346.3K 🔥` `NEW`
1. [女子趁49岁男友午睡将其杀害分尸](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B6%8149%E5%B2%81%E7%94%B7%E5%8F%8B%E5%8D%88%E7%9D%A1%E5%B0%86%E5%85%B6%E6%9D%80%E5%AE%B3%E5%88%86%E5%B0%B8%23) `344.5K 🔥` `NEW`
1. [A股散户吐槽美股科技股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%95%A3%E6%88%B7%E5%90%90%E6%A7%BD%E7%BE%8E%E8%82%A1%E7%A7%91%E6%8A%80%E8%82%A1%23) `343.4K 🔥` `NEW`
1. [小米 宁德时代](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%20%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%23) `341.8K 🔥` `NEW`
1. [郑钦文胜率预测13比87莱巴金娜](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%83%9C%E7%8E%87%E9%A2%84%E6%B5%8B13%E6%AF%9487%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%23) `339.6K 🔥` `NEW`
1. [毛主席逝世50周年重温经典语录](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%BB%E5%B8%AD%E9%80%9D%E4%B8%9650%E5%91%A8%E5%B9%B4%E9%87%8D%E6%B8%A9%E7%BB%8F%E5%85%B8%E8%AF%AD%E5%BD%95%23) `337.5K 🔥` `NEW`
1. [井柏然 倪妮](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%20%E5%80%AA%E5%A6%AE%23) `334.1K 🔥` `NEW`
1. [刘雯全球收入第三的超模](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E5%85%A8%E7%90%83%E6%94%B6%E5%85%A5%E7%AC%AC%E4%B8%89%E7%9A%84%E8%B6%85%E6%A8%A1%23) `327.6K 🔥` `NEW`
1. [耐克给郑钦文写的文案](https://s.weibo.com/weibo?q=%23%E8%80%90%E5%85%8B%E7%BB%99%E9%83%91%E9%92%A6%E6%96%87%E5%86%99%E7%9A%84%E6%96%87%E6%A1%88%23) `324.6K 🔥` `NEW`
1. [日本女篮惨败](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E7%AF%AE%E6%83%A8%E8%B4%A5%23) `322.8K 🔥` `NEW`
1. [小米澎程首撞](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E9%A6%96%E6%92%9E%23) `322.1K 🔥` `NEW`
1. [LPL](https://s.weibo.com/weibo?q=%23LPL%23) `317.4K 🔥` `NEW`
1. [成毅待播剧角色热度第一](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E5%BE%85%E6%92%AD%E5%89%A7%E8%A7%92%E8%89%B2%E7%83%AD%E5%BA%A6%E7%AC%AC%E4%B8%80%23) `313.3K 🔥` `NEW`
1. [毛阿敏评价反转](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E9%98%BF%E6%95%8F%E8%AF%84%E4%BB%B7%E5%8F%8D%E8%BD%AC%23) `309.2K 🔥` `NEW`
1. [皇马2比1国际米兰](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC2%E6%AF%941%E5%9B%BD%E9%99%85%E7%B1%B3%E5%85%B0%23) `305.9K 🔥` `NEW`
1. [毛主席逝世50周年缅怀](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%BB%E5%B8%AD%E9%80%9D%E4%B8%9650%E5%91%A8%E5%B9%B4%E7%BC%85%E6%80%80%23) `303.4K 🔥` `NEW`
1. [小学生梦游从7楼坠下砸烂宝马车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E7%94%9F%E6%A2%A6%E6%B8%B8%E4%BB%8E7%E6%A5%BC%E5%9D%A0%E4%B8%8B%E7%A0%B8%E7%83%82%E5%AE%9D%E9%A9%AC%E8%BD%A6%23) `301.4K 🔥` `NEW`
1. [丁禹兮工作室发声明](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E5%A3%B0%E6%98%8E%23) `296.7K 🔥` `NEW`
1. [郑钦文胜率](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%83%9C%E7%8E%87%23) `296.4K 🔥` `NEW`
1. [肩颈疼的时候可以试试这个姿势](https://s.weibo.com/weibo?q=%23%E8%82%A9%E9%A2%88%E7%96%BC%E7%9A%84%E6%97%B6%E5%80%99%E5%8F%AF%E4%BB%A5%E8%AF%95%E8%AF%95%E8%BF%99%E4%B8%AA%E5%A7%BF%E5%8A%BF%23) `293.5K 🔥` `NEW`
1. [日本名古屋强降雨创历史纪录](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%BC%BA%E9%99%8D%E9%9B%A8%E5%88%9B%E5%8E%86%E5%8F%B2%E7%BA%AA%E5%BD%95%23) `291.2K 🔥` `NEW`
1. [张婧仪宋威龙情侣演久了会有夫妻相](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%AE%8B%E5%A8%81%E9%BE%99%E6%83%85%E4%BE%A3%E6%BC%94%E4%B9%85%E4%BA%86%E4%BC%9A%E6%9C%89%E5%A4%AB%E5%A6%BB%E7%9B%B8%23) `289.7K 🔥` `NEW`
1. [早春晴朗火的原因](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E7%81%AB%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `287.7K 🔥` `NEW`
1. [哈兰德梅开二度](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `285.3K 🔥` `NEW`
1. [这样的吃播该全面叫停了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E7%9A%84%E5%90%83%E6%92%AD%E8%AF%A5%E5%85%A8%E9%9D%A2%E5%8F%AB%E5%81%9C%E4%BA%86%23) `869.3K 🔥` `+78%`
1. [双休不一定是休周六周日](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%BC%91%E4%B8%8D%E4%B8%80%E5%AE%9A%E6%98%AF%E4%BC%91%E5%91%A8%E5%85%AD%E5%91%A8%E6%97%A5%23) `349.6K 🔥` `+320%`
1. [印度21岁女运动员因外貌走红](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A621%E5%B2%81%E5%A5%B3%E8%BF%90%E5%8A%A8%E5%91%98%E5%9B%A0%E5%A4%96%E8%B2%8C%E8%B5%B0%E7%BA%A2%23) `337.5K 🔥` `+305%`
1. [我的前半生](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%23) `335.6K 🔥` `+524%`
1. [受资助女孩质问为何没打生活费](https://s.weibo.com/weibo?q=%23%E5%8F%97%E8%B5%84%E5%8A%A9%E5%A5%B3%E5%AD%A9%E8%B4%A8%E9%97%AE%E4%B8%BA%E4%BD%95%E6%B2%A1%E6%89%93%E7%94%9F%E6%B4%BB%E8%B4%B9%23) `332.1K 🔥` `+519%`
1. [什么是人生最顶级的享受](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%98%AF%E4%BA%BA%E7%94%9F%E6%9C%80%E9%A1%B6%E7%BA%A7%E7%9A%84%E4%BA%AB%E5%8F%97%23) `329.6K 🔥` `+513%`
1. [意识到婴儿行为不可预测的猫](https://s.weibo.com/weibo?q=%23%E6%84%8F%E8%AF%86%E5%88%B0%E5%A9%B4%E5%84%BF%E8%A1%8C%E4%B8%BA%E4%B8%8D%E5%8F%AF%E9%A2%84%E6%B5%8B%E7%9A%84%E7%8C%AB%23) `328.0K 🔥` `+105%`
1. [刘畅邓恩熙有牵手戏份](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%95%85%E9%82%93%E6%81%A9%E7%86%99%E6%9C%89%E7%89%B5%E6%89%8B%E6%88%8F%E4%BB%BD%23) `319.7K 🔥` `+538%`
1. [女子吃墨鱼吃出剧毒红斑斗蟹](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%83%E5%A2%A8%E9%B1%BC%E5%90%83%E5%87%BA%E5%89%A7%E6%AF%92%E7%BA%A2%E6%96%91%E6%96%97%E8%9F%B9%23) `319.4K 🔥` `+535%`
1. [医生眼里让大脑休息最好的方法](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%9C%BC%E9%87%8C%E8%AE%A9%E5%A4%A7%E8%84%91%E4%BC%91%E6%81%AF%E6%9C%80%E5%A5%BD%E7%9A%84%E6%96%B9%E6%B3%95%23) `316.2K 🔥` `+79%`
1. [萨巴伦卡抢十险胜6号种子诺斯科娃](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E6%8A%A2%E5%8D%81%E9%99%A9%E8%83%9C6%E5%8F%B7%E7%A7%8D%E5%AD%90%E8%AF%BA%E6%96%AF%E7%A7%91%E5%A8%83%23) `311.1K 🔥` `+519%`
1. [一家三口吃单人锅只点一份大闹餐厅](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%90%83%E5%8D%95%E4%BA%BA%E9%94%85%E5%8F%AA%E7%82%B9%E4%B8%80%E4%BB%BD%E5%A4%A7%E9%97%B9%E9%A4%90%E5%8E%85%23) `307.3K 🔥` `+474%`
1. [金球奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%90%83%E5%A5%96%23) `301.6K 🔥` `+241%`
1. [低保香港演唱会事件 命运捉弄人](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E4%BF%9D%E9%A6%99%E6%B8%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%8B%E4%BB%B6%20%E5%91%BD%E8%BF%90%E6%8D%89%E5%BC%84%E4%BA%BA%23) `299.1K 🔥` `+495%`
1. [腿脚不便大妈来退儿子买给女友衣服](https://s.weibo.com/weibo?q=%23%E8%85%BF%E8%84%9A%E4%B8%8D%E4%BE%BF%E5%A4%A7%E5%A6%88%E6%9D%A5%E9%80%80%E5%84%BF%E5%AD%90%E4%B9%B0%E7%BB%99%E5%A5%B3%E5%8F%8B%E8%A1%A3%E6%9C%8D%23) `292.0K 🔥` `+462%`
1. [这段话杀死了内耗型人格](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E6%9D%80%E6%AD%BB%E4%BA%86%E5%86%85%E8%80%97%E5%9E%8B%E4%BA%BA%E6%A0%BC%23) `871.9K 🔥` `-25%`

Updated at 2026-09-09 08:42:41

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
