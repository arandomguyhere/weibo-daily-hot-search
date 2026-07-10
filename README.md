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

1. [比利时替补门将失误 (Belgium substitute goalkeeper makes mistake)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E6%9B%BF%E8%A1%A5%E9%97%A8%E5%B0%86%E5%A4%B1%E8%AF%AF%23) `638.3K 🔥` `NEW`
1. [万茜邀你共赴华为天生会画展](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8C%9C%E9%82%80%E4%BD%A0%E5%85%B1%E8%B5%B4%E5%8D%8E%E4%B8%BA%E5%A4%A9%E7%94%9F%E4%BC%9A%E7%94%BB%E5%B1%95%23) `577.0K 🔥` `NEW`
1. [西班牙2比1比利时](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%992%E6%AF%941%E6%AF%94%E5%88%A9%E6%97%B6%23) `240.2K 🔥` `NEW`
1. [比利时黄金一代落幕](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E9%BB%84%E9%87%91%E4%B8%80%E4%BB%A3%E8%90%BD%E5%B9%95%23) `239.5K 🔥` `NEW`
1. [库尔图瓦 世一门](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%B0%94%E5%9B%BE%E7%93%A6%20%E4%B8%96%E4%B8%80%E9%97%A8%23) `192.4K 🔥` `NEW`
1. [梅里诺连场绝杀](https://s.weibo.com/weibo?q=%23%E6%A2%85%E9%87%8C%E8%AF%BA%E8%BF%9E%E5%9C%BA%E7%BB%9D%E6%9D%80%23) `162.1K 🔥` `NEW`
1. [法国西班牙会师半决赛](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%A5%BF%E7%8F%AD%E7%89%99%E4%BC%9A%E5%B8%88%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `127.6K 🔥` `NEW`
1. [比利时 可惜](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%20%E5%8F%AF%E6%83%9C%23) `115.1K 🔥` `NEW`
1. [差点给德布劳内裤子拽掉了](https://s.weibo.com/weibo?q=%23%E5%B7%AE%E7%82%B9%E7%BB%99%E5%BE%B7%E5%B8%83%E5%8A%B3%E5%86%85%E8%A3%A4%E5%AD%90%E6%8B%BD%E6%8E%89%E4%BA%86%23) `82.2K 🔥` `NEW`
1. [比利时淘汰](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E6%B7%98%E6%B1%B0%23) `69.6K 🔥` `NEW`
1. [再见德布劳内 (Goodbye De Bruyne)](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%A7%81%E5%BE%B7%E5%B8%83%E5%8A%B3%E5%86%85%23) `40.5K 🔥` `NEW`
1. [西班牙VS比利时 (Spain vs Belgium)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99VS%E6%AF%94%E5%88%A9%E6%97%B6%23) `1.1M 🔥` `+43%`
1. [广西贵港教育园区孤岛救援始末 (The whole story of island rescue in Guigang Education Park, Guangxi)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E8%B4%B5%E6%B8%AF%E6%95%99%E8%82%B2%E5%9B%AD%E5%8C%BA%E5%AD%A4%E5%B2%9B%E6%95%91%E6%8F%B4%E5%A7%8B%E6%9C%AB%23) `581.6K 🔥` `+21%`
1. [亚马尔状态](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E7%8A%B6%E6%80%81%23) `274.4K 🔥` `+111%`
1. [库尔图瓦受伤](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%B0%94%E5%9B%BE%E7%93%A6%E5%8F%97%E4%BC%A4%23) `194.6K 🔥` `+64%`
1. [周星驰口碑 (Stephen Chow's reputation)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%8F%A3%E7%A2%91%23) `193.6K 🔥` `+27%`
1. [冉莹颖自曝处在丧偶式婚姻](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E8%87%AA%E6%9B%9D%E5%A4%84%E5%9C%A8%E4%B8%A7%E5%81%B6%E5%BC%8F%E5%A9%9A%E5%A7%BB%23) `104.2K 🔥` `+31%`
1. [范志毅说亚马尔必须要尊重C罗](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%BF%97%E6%AF%85%E8%AF%B4%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%BF%85%E9%A1%BB%E8%A6%81%E5%B0%8A%E9%87%8DC%E7%BD%97%23) `100.4K 🔥` `+38%`
1. [女子因儿时被亲戚性侵自杀母亲发声](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E5%84%BF%E6%97%B6%E8%A2%AB%E4%BA%B2%E6%88%9A%E6%80%A7%E4%BE%B5%E8%87%AA%E6%9D%80%E6%AF%8D%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `64.7K 🔥` `+21%`
1. [工资一样的朋友存款比我多28万](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E8%B5%84%E4%B8%80%E6%A0%B7%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%AD%98%E6%AC%BE%E6%AF%94%E6%88%91%E5%A4%9A28%E4%B8%87%23) `307.5K 🔥`
1. [台风天超市被剩下的方便面 (The instant noodles left in the supermarket during the typhoon day)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%A4%A9%E8%B6%85%E5%B8%82%E8%A2%AB%E5%89%A9%E4%B8%8B%E7%9A%84%E6%96%B9%E4%BE%BF%E9%9D%A2%23) `83.1K 🔥`
1. [台风巴威位置](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E4%BD%8D%E7%BD%AE%23) `76.2K 🔥`
1. [西班牙首次丢球](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A6%96%E6%AC%A1%E4%B8%A2%E7%90%83%23) `69.9K 🔥`
1. [西班牙进球](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E8%BF%9B%E7%90%83%23) `65.0K 🔥`
1. [会打扮是被严重低估的能力 (Being able to dress up is a seriously underestimated ability)](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E6%89%93%E6%89%AE%E6%98%AF%E8%A2%AB%E4%B8%A5%E9%87%8D%E4%BD%8E%E4%BC%B0%E7%9A%84%E8%83%BD%E5%8A%9B%23) `63.2K 🔥`
1. [迪丽热巴这动作把我腿掰折也做不到 (Dilireba can't even break my legs with this move.)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%99%E5%8A%A8%E4%BD%9C%E6%8A%8A%E6%88%91%E8%85%BF%E6%8E%B0%E6%8A%98%E4%B9%9F%E5%81%9A%E4%B8%8D%E5%88%B0%23) `62.2K 🔥`
1. [台风巴威最新研判 (Latest research and judgment on Typhoon Bavi)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E6%9C%80%E6%96%B0%E7%A0%94%E5%88%A4%23) `59.6K 🔥`
1. [建议大家不要失去打扮欲](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B8%8D%E8%A6%81%E5%A4%B1%E5%8E%BB%E6%89%93%E6%89%AE%E6%AC%B2%23) `56.8K 🔥`
1. [歌手排名](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `52.5K 🔥`
1. [德约科维奇vs辛纳](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%BA%A6%E7%A7%91%E7%BB%B4%E5%A5%87vs%E8%BE%9B%E7%BA%B3%23) `48.6K 🔥`
1. [开车喜欢把手这样放因为啥](https://s.weibo.com/weibo?q=%23%E5%BC%80%E8%BD%A6%E5%96%9C%E6%AC%A2%E6%8A%8A%E6%89%8B%E8%BF%99%E6%A0%B7%E6%94%BE%E5%9B%A0%E4%B8%BA%E5%95%A5%23) `48.1K 🔥`
1. [宋威龙工作室有仙人吧](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%9C%89%E4%BB%99%E4%BA%BA%E5%90%A7%23) `46.7K 🔥`
1. [台风巴威降雨最强时段](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E9%99%8D%E9%9B%A8%E6%9C%80%E5%BC%BA%E6%97%B6%E6%AE%B5%23) `45.9K 🔥`
1. [陈楚生庙堂之外](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A5%9A%E7%94%9F%E5%BA%99%E5%A0%82%E4%B9%8B%E5%A4%96%23) `42.5K 🔥`
1. [邓紫棋被歌手弹幕发现了行踪 (Deng Ziqi’s whereabouts were discovered by the singer’s barrage)](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E8%A2%AB%E6%AD%8C%E6%89%8B%E5%BC%B9%E5%B9%95%E5%8F%91%E7%8E%B0%E4%BA%86%E8%A1%8C%E8%B8%AA%23) `41.5K 🔥`
1. [车位被女子霸占业主再发声](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%BD%8D%E8%A2%AB%E5%A5%B3%E5%AD%90%E9%9C%B8%E5%8D%A0%E4%B8%9A%E4%B8%BB%E5%86%8D%E5%8F%91%E5%A3%B0%23) `41.2K 🔥`
1. [火灾鞋厂楼顶蓄水池打捞出多具遗体](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%81%BE%E9%9E%8B%E5%8E%82%E6%A5%BC%E9%A1%B6%E8%93%84%E6%B0%B4%E6%B1%A0%E6%89%93%E6%8D%9E%E5%87%BA%E5%A4%9A%E5%85%B7%E9%81%97%E4%BD%93%23) `40.6K 🔥`
1. [突然意识到所有东西都是我的钱换来的 (Suddenly realized that everything was bought with my money)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E6%89%80%E6%9C%89%E4%B8%9C%E8%A5%BF%E9%83%BD%E6%98%AF%E6%88%91%E7%9A%84%E9%92%B1%E6%8D%A2%E6%9D%A5%E7%9A%84%23) `40.6K 🔥`
1. [万妮达淘汰 (Wan Nida eliminated)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E6%B7%98%E6%B1%B0%23) `40.6K 🔥`
1. [突然意识到没必要焦虑](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E6%B2%A1%E5%BF%85%E8%A6%81%E7%84%A6%E8%99%91%23) `40.6K 🔥`
1. [迪丽热巴大腿肌踢成巨肌了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A4%A7%E8%85%BF%E8%82%8C%E8%B8%A2%E6%88%90%E5%B7%A8%E8%82%8C%E4%BA%86%23) `40.6K 🔥`
1. [哈兰德被小孩摸完大腿一秒变红](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E8%A2%AB%E5%B0%8F%E5%AD%A9%E6%91%B8%E5%AE%8C%E5%A4%A7%E8%85%BF%E4%B8%80%E7%A7%92%E5%8F%98%E7%BA%A2%23) `40.6K 🔥`
1. [巴威在登陆前台风眼消失 (The eye of Typhoon Bavi disappears before landfall)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%9C%A8%E7%99%BB%E9%99%86%E5%89%8D%E5%8F%B0%E9%A3%8E%E7%9C%BC%E6%B6%88%E5%A4%B1%23) `40.5K 🔥`
1. [微信红包转账有新变化](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%BA%A2%E5%8C%85%E8%BD%AC%E8%B4%A6%E6%9C%89%E6%96%B0%E5%8F%98%E5%8C%96%23) `40.5K 🔥`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `40.5K 🔥`
1. [35岁女高管立遗赠千万资产留给小姨 (A 35-year-old female executive created a bequest and left tens of millions of assets to her aunt)](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%A5%B3%E9%AB%98%E7%AE%A1%E7%AB%8B%E9%81%97%E8%B5%A0%E5%8D%83%E4%B8%87%E8%B5%84%E4%BA%A7%E7%95%99%E7%BB%99%E5%B0%8F%E5%A7%A8%23) `40.5K 🔥`
1. [巴威台风眼消失 (Typhoon Bawi's eye disappears)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%8F%B0%E9%A3%8E%E7%9C%BC%E6%B6%88%E5%A4%B1%23) `576.6K 🔥` `-25%`
1. [白鹿每次憋哭就这样](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%AF%8F%E6%AC%A1%E6%86%8B%E5%93%AD%E5%B0%B1%E8%BF%99%E6%A0%B7%23) `68.0K 🔥` `-24%`
1. [北京全市已转移近10万人](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%85%A8%E5%B8%82%E5%B7%B2%E8%BD%AC%E7%A7%BB%E8%BF%9110%E4%B8%87%E4%BA%BA%23) `64.4K 🔥` `-39%`
1. [巴威预计12日凌晨登陆](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E9%A2%84%E8%AE%A112%E6%97%A5%E5%87%8C%E6%99%A8%E7%99%BB%E9%99%86%23) `47.4K 🔥` `-28%`
1. [儿子出轨后婆婆上门硬刚替儿媳讨说法](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%87%BA%E8%BD%A8%E5%90%8E%E5%A9%86%E5%A9%86%E4%B8%8A%E9%97%A8%E7%A1%AC%E5%88%9A%E6%9B%BF%E5%84%BF%E5%AA%B3%E8%AE%A8%E8%AF%B4%E6%B3%95%23) `40.5K 🔥` `-22%`

Updated at 2026-07-11 05:45:29

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
