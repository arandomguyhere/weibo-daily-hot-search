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

1. [智能科技创新点亮万家生活 (Intelligent technological innovation lights up the lives of thousands of families)](https://s.weibo.com/weibo?q=%23%E6%99%BA%E8%83%BD%E7%A7%91%E6%8A%80%E5%88%9B%E6%96%B0%E7%82%B9%E4%BA%AE%E4%B8%87%E5%AE%B6%E7%94%9F%E6%B4%BB%23) `3.5M 🔥` `NEW`
1. [喝红花郎看央视春晚](https://s.weibo.com/weibo?q=%23%E5%96%9D%E7%BA%A2%E8%8A%B1%E9%83%8E%E7%9C%8B%E5%A4%AE%E8%A7%86%E6%98%A5%E6%99%9A%23) `2.2M 🔥` `NEW`
1. [侯明昊发红包](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%8F%91%E7%BA%A2%E5%8C%85%23) `2.0M 🔥` `NEW`
1. [航天员空间站报年夜饭菜名](https://s.weibo.com/weibo?q=%23%E8%88%AA%E5%A4%A9%E5%91%98%E7%A9%BA%E9%97%B4%E7%AB%99%E6%8A%A5%E5%B9%B4%E5%A4%9C%E9%A5%AD%E8%8F%9C%E5%90%8D%23) `1.9M 🔥` `NEW`
1. [王安宇红包](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E7%BA%A2%E5%8C%85%23) `1.9M 🔥` `NEW`
1. [王楚然红包](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%BA%A2%E5%8C%85%23) `1.8M 🔥` `NEW`
1. [大年初一的电影票在千问上抢疯了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%80%E7%9A%84%E7%94%B5%E5%BD%B1%E7%A5%A8%E5%9C%A8%E5%8D%83%E9%97%AE%E4%B8%8A%E6%8A%A2%E7%96%AF%E4%BA%86%23) `1.7M 🔥` `NEW`
1. [全宇宙最高的年夜饭](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%AE%87%E5%AE%99%E6%9C%80%E9%AB%98%E7%9A%84%E5%B9%B4%E5%A4%9C%E9%A5%AD%23) `1.1M 🔥` `NEW`
1. [卢昱晓发红包时间](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E5%8F%91%E7%BA%A2%E5%8C%85%E6%97%B6%E9%97%B4%23) `1.1M 🔥` `NEW`
1. [江苏提级调查连云港烟花爆竹爆炸](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E6%8F%90%E7%BA%A7%E8%B0%83%E6%9F%A5%E8%BF%9E%E4%BA%91%E6%B8%AF%E7%83%9F%E8%8A%B1%E7%88%86%E7%AB%B9%E7%88%86%E7%82%B8%23) `578.4K 🔥` `NEW`
1. [短道速滑 (short track speed skating)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%23) `407.6K 🔥` `NEW`
1. [豆包科技好礼有春晚同款机器人](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E7%A7%91%E6%8A%80%E5%A5%BD%E7%A4%BC%E6%9C%89%E6%98%A5%E6%99%9A%E5%90%8C%E6%AC%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `353.1K 🔥` `NEW`
1. [成毅的年夜饭](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%9A%84%E5%B9%B4%E5%A4%9C%E9%A5%AD%23) `346.5K 🔥` `NEW`
1. [这样夹头发可以显脸小](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E5%A4%B9%E5%A4%B4%E5%8F%91%E5%8F%AF%E4%BB%A5%E6%98%BE%E8%84%B8%E5%B0%8F%23) `329.7K 🔥` `NEW`
1. [陈星旭红包里有什么秘密](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%E7%BA%A2%E5%8C%85%E9%87%8C%E6%9C%89%E4%BB%80%E4%B9%88%E7%A7%98%E5%AF%86%23) `255.7K 🔥` `NEW`
1. [新年祝福语](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%B9%B4%E7%A5%9D%E7%A6%8F%E8%AF%AD%23) `254.9K 🔥` `NEW`
1. [张远春晚出发图](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E6%98%A5%E6%99%9A%E5%87%BA%E5%8F%91%E5%9B%BE%23) `254.4K 🔥` `NEW`
1. [冬奥短道速滑女子1000米](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%E5%A5%B3%E5%AD%901000%E7%B1%B3%23) `250.0K 🔥` `NEW`
1. [范丞丞首登春晚三个节目](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E9%A6%96%E7%99%BB%E6%98%A5%E6%99%9A%E4%B8%89%E4%B8%AA%E8%8A%82%E7%9B%AE%23) `248.3K 🔥` `NEW`
1. [钟丽缇目睹2人海边溺水身亡](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%87%E7%9B%AE%E7%9D%B92%E4%BA%BA%E6%B5%B7%E8%BE%B9%E6%BA%BA%E6%B0%B4%E8%BA%AB%E4%BA%A1%23) `246.4K 🔥` `NEW`
1. [回家三天定律 (Three days home rule)](https://s.weibo.com/weibo?q=%23%E5%9B%9E%E5%AE%B6%E4%B8%89%E5%A4%A9%E5%AE%9A%E5%BE%8B%23) `219.1K 🔥` `NEW`
1. [好想带李昀锐回家过年](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%83%B3%E5%B8%A6%E6%9D%8E%E6%98%80%E9%94%90%E5%9B%9E%E5%AE%B6%E8%BF%87%E5%B9%B4%23) `219.0K 🔥` `NEW`
1. [年夜饭文案](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%A4%9C%E9%A5%AD%E6%96%87%E6%A1%88%23) `218.9K 🔥` `NEW`
1. [王楚然丞磊同时发红包](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%9E%E7%A3%8A%E5%90%8C%E6%97%B6%E5%8F%91%E7%BA%A2%E5%8C%85%23) `218.9K 🔥` `NEW`
1. [张艺兴 莲池春晚](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E5%85%B4%20%E8%8E%B2%E6%B1%A0%E6%98%A5%E6%99%9A%23) `217.8K 🔥` `NEW`
1. [大年初一谷爱凌决赛](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%80%E8%B0%B7%E7%88%B1%E5%87%8C%E5%86%B3%E8%B5%9B%23) `208.5K 🔥` `NEW`
1. [明星红包](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%23) `18.4M 🔥` `+27%`
1. [春晚节目单 (Spring Festival Gala Program)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E8%8A%82%E7%9B%AE%E5%8D%95%23) `7.5M 🔥` `+36%`
1. [茅台迎新年 家国共团圆](https://s.weibo.com/weibo?q=%23%E8%8C%85%E5%8F%B0%E8%BF%8E%E6%96%B0%E5%B9%B4%20%E5%AE%B6%E5%9B%BD%E5%85%B1%E5%9B%A2%E5%9C%86%23) `6.3M 🔥` `+30%`
1. [敖瑞鹏发红包还有前菜 (Ao Ruipeng gave out red envelopes and appetizers)](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E5%8F%91%E7%BA%A2%E5%8C%85%E8%BF%98%E6%9C%89%E5%89%8D%E8%8F%9C%23) `2.2M 🔥` `+123%`
1. [泰国机场凌晨堵满中国人](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%9C%BA%E5%9C%BA%E5%87%8C%E6%99%A8%E5%A0%B5%E6%BB%A1%E4%B8%AD%E5%9B%BD%E4%BA%BA%23) `2.0M 🔥` `+234%`
1. [除夕 (Lunar New Year's eve)](https://s.weibo.com/weibo?q=%23%E9%99%A4%E5%A4%95%23) `1.9M 🔥` `+41%`
1. [红包 (Red envelope)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `1.8M 🔥` `+25%`
1. [小偷打开门都以为自己穿越了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%81%B7%E6%89%93%E5%BC%80%E9%97%A8%E9%83%BD%E4%BB%A5%E4%B8%BA%E8%87%AA%E5%B7%B1%E7%A9%BF%E8%B6%8A%E4%BA%86%23) `1.8M 🔥` `+385%`
1. [口令红包 (Password red envelope)](https://s.weibo.com/weibo?q=%23%E5%8F%A3%E4%BB%A4%E7%BA%A2%E5%8C%85%23) `1.6M 🔥` `+48%`
1. [迪丽热巴人鱼公主](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BA%BA%E9%B1%BC%E5%85%AC%E4%B8%BB%23) `1.3M 🔥` `+41%`
1. [红包雨](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%E9%9B%A8%23) `1.1M 🔥` `+180%`
1. [孟子义 先发美图再发红包](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%20%E5%85%88%E5%8F%91%E7%BE%8E%E5%9B%BE%E5%86%8D%E5%8F%91%E7%BA%A2%E5%8C%85%23) `587.8K 🔥` `+48%`
1. [孟子义红包](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%BA%A2%E5%8C%85%23) `302.7K 🔥` `+27%`
1. [年夜饭](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%A4%9C%E9%A5%AD%23) `4.2M 🔥`
1. [千问红包 (Qianwen red envelope)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E7%BA%A2%E5%8C%85%23) `2.5M 🔥`
1. [红包分组 (Red envelope grouping)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `1.6M 🔥`
1. [春晚大赏](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%A4%A7%E8%B5%8F%23) `982.4K 🔥`
1. [蹲王星越红包](https://s.weibo.com/weibo?q=%23%E8%B9%B2%E7%8E%8B%E6%98%9F%E8%B6%8A%E7%BA%A2%E5%8C%85%23) `486.5K 🔥`
1. [张凌赫 七个红包](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E4%B8%83%E4%B8%AA%E7%BA%A2%E5%8C%85%23) `343.1K 🔥`
1. [周翊然小号](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%BF%8A%E7%84%B6%E5%B0%8F%E5%8F%B7%23) `324.3K 🔥`
1. [李沁 没抢到但这张图好美 (Li Qin didn’t grab it but this picture is so beautiful)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%81%20%E6%B2%A1%E6%8A%A2%E5%88%B0%E4%BD%86%E8%BF%99%E5%BC%A0%E5%9B%BE%E5%A5%BD%E7%BE%8E%23) `300.7K 🔥`
1. [周翊然红包 (Zhou Yiran red envelope)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%BF%8A%E7%84%B6%E7%BA%A2%E5%8C%85%23) `254.8K 🔥`
1. [大年初一不洗头不煮饭](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%80%E4%B8%8D%E6%B4%97%E5%A4%B4%E4%B8%8D%E7%85%AE%E9%A5%AD%23) `915.6K 🔥` `-33%`
1. [陈都灵红包单包的金额设置好高](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E7%BA%A2%E5%8C%85%E5%8D%95%E5%8C%85%E7%9A%84%E9%87%91%E9%A2%9D%E8%AE%BE%E7%BD%AE%E5%A5%BD%E9%AB%98%23) `878.9K 🔥` `-36%`
1. [李一桐定时红包](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E5%AE%9A%E6%97%B6%E7%BA%A2%E5%8C%85%23) `578.1K 🔥` `-51%`
1. [否认南京大屠杀的日本酒店老板死了](https://s.weibo.com/weibo?q=%23%E5%90%A6%E8%AE%A4%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%E7%9A%84%E6%97%A5%E6%9C%AC%E9%85%92%E5%BA%97%E8%80%81%E6%9D%BF%E6%AD%BB%E4%BA%86%23) `301.4K 🔥` `-24%`

Updated at 2026-02-16 18:09:17

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
