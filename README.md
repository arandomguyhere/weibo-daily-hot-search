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

1. [易烊千玺百花奖最佳男主 (Yi Yang Qianxi Hundred Flowers Award for Best Actor)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%99%BE%E8%8A%B1%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E4%B8%BB%23) `23.1M 🔥` `NEW`
1. [深圳向世界展示中国开放活力](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%90%91%E4%B8%96%E7%95%8C%E5%B1%95%E7%A4%BA%E4%B8%AD%E5%9B%BD%E5%BC%80%E6%94%BE%E6%B4%BB%E5%8A%9B%23) `1.7M 🔥` `NEW`
1. [815京东家电周年庆 享8.15折](https://s.weibo.com/weibo?q=%23815%E4%BA%AC%E4%B8%9C%E5%AE%B6%E7%94%B5%E5%91%A8%E5%B9%B4%E5%BA%86%20%E4%BA%AB8.15%E6%8A%98%23) `1.7M 🔥` `NEW`
1. [泰国 电诈园区](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%20%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%23) `1.6M 🔥` `NEW`
1. [KPL六个电竞少年的限定之旅](https://s.weibo.com/weibo?q=%23KPL%E5%85%AD%E4%B8%AA%E7%94%B5%E7%AB%9E%E5%B0%91%E5%B9%B4%E7%9A%84%E9%99%90%E5%AE%9A%E4%B9%8B%E6%97%85%23) `837.0K 🔥` `NEW`
1. [AppleWatch产品线重大调整](https://s.weibo.com/weibo?q=%23AppleWatch%E4%BA%A7%E5%93%81%E7%BA%BF%E9%87%8D%E5%A4%A7%E8%B0%83%E6%95%B4%23) `836.3K 🔥` `NEW`
1. [卫诗雅百花奖最佳女主](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E8%AF%97%E9%9B%85%E7%99%BE%E8%8A%B1%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%23) `835.3K 🔥` `NEW`
1. [泰国旅游 失联](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%97%85%E6%B8%B8%20%E5%A4%B1%E8%81%94%23) `834.6K 🔥` `NEW`
1. [易烊千玺身上没有展示位了](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E8%BA%AB%E4%B8%8A%E6%B2%A1%E6%9C%89%E5%B1%95%E7%A4%BA%E4%BD%8D%E4%BA%86%23) `833.3K 🔥` `NEW`
1. [百花奖获奖名单](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `832.5K 🔥` `NEW`
1. [王宝强0票 (Wang Baoqiang0 votes)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%9D%E5%BC%BA0%E7%A5%A8%23) `829.9K 🔥` `NEW`
1. [杨幂百花奖24票](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%99%BE%E8%8A%B1%E5%A5%9624%E7%A5%A8%23) `829.4K 🔥` `NEW`
1. [百花奖影后和白玉兰视后同框](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E5%BD%B1%E5%90%8E%E5%92%8C%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%90%8E%E5%90%8C%E6%A1%86%23) `826.6K 🔥` `NEW`
1. [教师拉架致人轻伤被降岗降薪处分](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E6%8B%89%E6%9E%B6%E8%87%B4%E4%BA%BA%E8%BD%BB%E4%BC%A4%E8%A2%AB%E9%99%8D%E5%B2%97%E9%99%8D%E8%96%AA%E5%A4%84%E5%88%86%23) `823.7K 🔥` `NEW`
1. [太原龙潭公园数名男子捞起大鱼就跑](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E9%BE%99%E6%BD%AD%E5%85%AC%E5%9B%AD%E6%95%B0%E5%90%8D%E7%94%B7%E5%AD%90%E6%8D%9E%E8%B5%B7%E5%A4%A7%E9%B1%BC%E5%B0%B1%E8%B7%91%23) `822.2K 🔥` `NEW`
1. [萨日娜最佳女配](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%97%A5%E5%A8%9C%E6%9C%80%E4%BD%B3%E5%A5%B3%E9%85%8D%23) `821.3K 🔥` `NEW`
1. [梁家辉安慰马丽不要哭](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E5%AE%89%E6%85%B0%E9%A9%AC%E4%B8%BD%E4%B8%8D%E8%A6%81%E5%93%AD%23) `820.4K 🔥` `NEW`
1. [陈丽君最佳新人](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E6%9C%80%E4%BD%B3%E6%96%B0%E4%BA%BA%23) `813.3K 🔥` `NEW`
1. [王骁百花奖最佳男配](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%AA%81%E7%99%BE%E8%8A%B1%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E9%85%8D%23) `812.4K 🔥` `NEW`
1. [破地狱](https://s.weibo.com/weibo?q=%23%E7%A0%B4%E5%9C%B0%E7%8B%B1%23) `811.7K 🔥` `NEW`
1. [炸鸡店爆单一人店员忙到窒息 (A single employee at a fried chicken restaurant was so busy that he suffocated)](https://s.weibo.com/weibo?q=%23%E7%82%B8%E9%B8%A1%E5%BA%97%E7%88%86%E5%8D%95%E4%B8%80%E4%BA%BA%E5%BA%97%E5%91%98%E5%BF%99%E5%88%B0%E7%AA%92%E6%81%AF%23) `810.5K 🔥` `NEW`
1. [竟然不是高叶](https://s.weibo.com/weibo?q=%23%E7%AB%9F%E7%84%B6%E4%B8%8D%E6%98%AF%E9%AB%98%E5%8F%B6%23) `809.9K 🔥` `NEW`
1. [刘耀文票数](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E7%A5%A8%E6%95%B0%23) `809.2K 🔥` `NEW`
1. [王骁拿奖王馥荔眼睛红了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%AA%81%E6%8B%BF%E5%A5%96%E7%8E%8B%E9%A6%A5%E8%8D%94%E7%9C%BC%E7%9D%9B%E7%BA%A2%E4%BA%86%23) `591.8K 🔥` `NEW`
1. [喜剧人 拿奖难](https://s.weibo.com/weibo?q=%23%E5%96%9C%E5%89%A7%E4%BA%BA%20%E6%8B%BF%E5%A5%96%E9%9A%BE%23) `476.6K 🔥` `NEW`
1. [女子南太行遇难事发地非收费景区](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8D%97%E5%A4%AA%E8%A1%8C%E9%81%87%E9%9A%BE%E4%BA%8B%E5%8F%91%E5%9C%B0%E9%9D%9E%E6%94%B6%E8%B4%B9%E6%99%AF%E5%8C%BA%23) `464.7K 🔥` `NEW`
1. [高叶票数](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8F%B6%E7%A5%A8%E6%95%B0%23) `454.2K 🔥` `NEW`
1. [长征七号甲](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%81%E4%B8%83%E5%8F%B7%E7%94%B2%23) `387.8K 🔥` `NEW`
1. [TheShy还是太权威了](https://s.weibo.com/weibo?q=%23TheShy%E8%BF%98%E6%98%AF%E5%A4%AA%E6%9D%83%E5%A8%81%E4%BA%86%23) `384.9K 🔥` `NEW`
1. [男乒世界前十仅2名中国选手](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%B9%92%E4%B8%96%E7%95%8C%E5%89%8D%E5%8D%81%E4%BB%852%E5%90%8D%E4%B8%AD%E5%9B%BD%E9%80%89%E6%89%8B%23) `382.4K 🔥` `NEW`
1. [百花奖闭幕式 (Hundred Flowers Awards Closing Ceremony)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E9%97%AD%E5%B9%95%E5%BC%8F%23) `6.8M 🔥` `+78%`
1. [原来这才是金项链的正确戴法 (It turns out that this is the correct way to wear a gold necklace)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E6%89%8D%E6%98%AF%E9%87%91%E9%A1%B9%E9%93%BE%E7%9A%84%E6%AD%A3%E7%A1%AE%E6%88%B4%E6%B3%95%23) `837.7K 🔥` `+214%`
1. [ai漫剧顶流已经出了8季了](https://s.weibo.com/weibo?q=%23ai%E6%BC%AB%E5%89%A7%E9%A1%B6%E6%B5%81%E5%B7%B2%E7%BB%8F%E5%87%BA%E4%BA%868%E5%AD%A3%E4%BA%86%23) `825.2K 🔥` `+208%`
1. [百花奖](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%23) `822.6K 🔥` `+40%`
1. [经常旅游的人都有一个共性 (People who travel frequently have one thing in common)](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E5%B8%B8%E6%97%85%E6%B8%B8%E7%9A%84%E4%BA%BA%E9%83%BD%E6%9C%89%E4%B8%80%E4%B8%AA%E5%85%B1%E6%80%A7%23) `819.1K 🔥` `+213%`
1. [韩国女性怒斥AA制结婚 (Korean women angrily criticize the AA marriage system)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%A5%B3%E6%80%A7%E6%80%92%E6%96%A5AA%E5%88%B6%E7%BB%93%E5%A9%9A%23) `814.8K 🔥` `+205%`
1. [14元麻辣烫自助男子夹出半人高菜球](https://s.weibo.com/weibo?q=%2314%E5%85%83%E9%BA%BB%E8%BE%A3%E7%83%AB%E8%87%AA%E5%8A%A9%E7%94%B7%E5%AD%90%E5%A4%B9%E5%87%BA%E5%8D%8A%E4%BA%BA%E9%AB%98%E8%8F%9C%E7%90%83%23) `742.8K 🔥` `+205%`
1. [百花奖造型出图](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E9%80%A0%E5%9E%8B%E5%87%BA%E5%9B%BE%23) `388.3K 🔥` `+46%`
1. [Bin与圣枪哥将有一人无缘enc](https://s.weibo.com/weibo?q=%23Bin%E4%B8%8E%E5%9C%A3%E6%9E%AA%E5%93%A5%E5%B0%86%E6%9C%89%E4%B8%80%E4%BA%BA%E6%97%A0%E7%BC%98enc%23) `380.7K 🔥` `+61%`
1. [炸鸡店爆单 店员呼吸性碱中毒](https://s.weibo.com/weibo?q=%23%E7%82%B8%E9%B8%A1%E5%BA%97%E7%88%86%E5%8D%95%20%E5%BA%97%E5%91%98%E5%91%BC%E5%90%B8%E6%80%A7%E7%A2%B1%E4%B8%AD%E6%AF%92%23) `378.4K 🔥` `+42%`
1. [张伟丽给K100Pro系列上强度](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BC%9F%E4%B8%BD%E7%BB%99K100Pro%E7%B3%BB%E5%88%97%E4%B8%8A%E5%BC%BA%E5%BA%A6%23) `837.1K 🔥`
1. [白海豚 洗衣凝珠视角](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%20%E6%B4%97%E8%A1%A3%E5%87%9D%E7%8F%A0%E8%A7%86%E8%A7%92%23) `827.8K 🔥`
1. [女演员炒股亏70万靠年迈母亲接济](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E7%82%92%E8%82%A1%E4%BA%8F70%E4%B8%87%E9%9D%A0%E5%B9%B4%E8%BF%88%E6%AF%8D%E4%BA%B2%E6%8E%A5%E6%B5%8E%23) `825.8K 🔥`
1. [刘耀文大C位 (Liu Yaowen big C position)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%A4%A7C%E4%BD%8D%23) `817.9K 🔥`
1. [杨幂现场换发型了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%8E%B0%E5%9C%BA%E6%8D%A2%E5%8F%91%E5%9E%8B%E4%BA%86%23) `741.4K 🔥`
1. [白海豚突然大拐弯 (White dolphin suddenly makes a sharp turn)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E7%AA%81%E7%84%B6%E5%A4%A7%E6%8B%90%E5%BC%AF%23) `1.7M 🔥` `-36%`
1. [河南大暴雨特大暴雨](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%A4%A7%E6%9A%B4%E9%9B%A8%E7%89%B9%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `831.3K 🔥` `-22%`
1. [世界小姐雅典娜确认遇害细节公开](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E5%B0%8F%E5%A7%90%E9%9B%85%E5%85%B8%E5%A8%9C%E7%A1%AE%E8%AE%A4%E9%81%87%E5%AE%B3%E7%BB%86%E8%8A%82%E5%85%AC%E5%BC%80%23) `817.3K 🔥` `-62%`
1. [演员秦焰去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%A7%A6%E7%84%B0%E5%8E%BB%E4%B8%96%23) `816.1K 🔥` `-25%`
1. [女孩南太行失联14天后遗体被找到](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%8D%97%E5%A4%AA%E8%A1%8C%E5%A4%B1%E8%81%9414%E5%A4%A9%E5%90%8E%E9%81%97%E4%BD%93%E8%A2%AB%E6%89%BE%E5%88%B0%23) `517.0K 🔥` `-34%`
1. [百花奖内场座位图 (Hundred Flowers Awards infield seating map)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E5%86%85%E5%9C%BA%E5%BA%A7%E4%BD%8D%E5%9B%BE%23) `453.9K 🔥` `-56%`
1. [泰国被接机女生疑遭带走](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E8%A2%AB%E6%8E%A5%E6%9C%BA%E5%A5%B3%E7%94%9F%E7%96%91%E9%81%AD%E5%B8%A6%E8%B5%B0%23) `389.5K 🔥` `-47%`

Updated at 2026-08-10 21:37:49

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
