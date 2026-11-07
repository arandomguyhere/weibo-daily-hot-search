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

1. [8省份大到暴雪](https://s.weibo.com/weibo?q=%238%E7%9C%81%E4%BB%BD%E5%A4%A7%E5%88%B0%E6%9A%B4%E9%9B%AA%23) `76.4K 🔥` `NEW`
1. [Rookie说iG可以打开LPL的时代](https://s.weibo.com/weibo?q=%23Rookie%E8%AF%B4iG%E5%8F%AF%E4%BB%A5%E6%89%93%E5%BC%80LPL%E7%9A%84%E6%97%B6%E4%BB%A3%23) `75.3K 🔥` `NEW`
1. [共赴APEC之约](https://s.weibo.com/weibo?q=%23%E5%85%B1%E8%B5%B4APEC%E4%B9%8B%E7%BA%A6%23) `74.8K 🔥` `NEW`
1. [张彬彬的盐值在京东厨房保住了吗](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BD%AC%E5%BD%AC%E7%9A%84%E7%9B%90%E5%80%BC%E5%9C%A8%E4%BA%AC%E4%B8%9C%E5%8E%A8%E6%88%BF%E4%BF%9D%E4%BD%8F%E4%BA%86%E5%90%97%23) `74.4K 🔥` `NEW`
1. [陈幸同2比4张本美和](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B9%B8%E5%90%8C2%E6%AF%944%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `73.2K 🔥` `NEW`
1. [嫁金钗最好嗑的一个视频出现了](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E6%9C%80%E5%A5%BD%E5%97%91%E7%9A%84%E4%B8%80%E4%B8%AA%E8%A7%86%E9%A2%91%E5%87%BA%E7%8E%B0%E4%BA%86%23) `72.8K 🔥` `NEW`
1. [马天宇和张萌被审判](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%92%8C%E5%BC%A0%E8%90%8C%E8%A2%AB%E5%AE%A1%E5%88%A4%23) `71.4K 🔥` `NEW`
1. [女子自编停车场惊魂剧本博流量](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%87%AA%E7%BC%96%E5%81%9C%E8%BD%A6%E5%9C%BA%E6%83%8A%E9%AD%82%E5%89%A7%E6%9C%AC%E5%8D%9A%E6%B5%81%E9%87%8F%23) `70.7K 🔥` `NEW`
1. [爸爸去哪儿3重聚为康康庆生](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%8E%BB%E5%93%AA%E5%84%BF3%E9%87%8D%E8%81%9A%E4%B8%BA%E5%BA%B7%E5%BA%B7%E5%BA%86%E7%94%9F%23) `70.6K 🔥` `NEW`
1. [鹿晗投资天霸至今没拿过分红](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%8A%95%E8%B5%84%E5%A4%A9%E9%9C%B8%E8%87%B3%E4%BB%8A%E6%B2%A1%E6%8B%BF%E8%BF%87%E5%88%86%E7%BA%A2%23) `68.9K 🔥` `NEW`
1. [厉娜当年完全疯子来的](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E5%BD%93%E5%B9%B4%E5%AE%8C%E5%85%A8%E7%96%AF%E5%AD%90%E6%9D%A5%E7%9A%84%23) `68.3K 🔥` `NEW`
1. [温瑞博0比4林昀儒](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A0%E6%AF%944%E6%9E%97%E6%98%80%E5%84%92%23) `66.3K 🔥` `NEW`
1. [马天宇 李明德](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%20%E6%9D%8E%E6%98%8E%E5%BE%B7%23) `65.7K 🔥` `NEW`
1. [今何在](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E4%BD%95%E5%9C%A8%23) `64.5K 🔥` `NEW`
1. [博主私信发现两人偷情对话](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E7%A7%81%E4%BF%A1%E5%8F%91%E7%8E%B0%E4%B8%A4%E4%BA%BA%E5%81%B7%E6%83%85%E5%AF%B9%E8%AF%9D%23) `62.9K 🔥` `NEW`
1. [孩子不在家夫妻还需要在一起吗](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E4%B8%8D%E5%9C%A8%E5%AE%B6%E5%A4%AB%E5%A6%BB%E8%BF%98%E9%9C%80%E8%A6%81%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%90%97%23) `62.0K 🔥` `NEW`
1. [多平台下架推不倒戒指](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%B9%B3%E5%8F%B0%E4%B8%8B%E6%9E%B6%E6%8E%A8%E4%B8%8D%E5%80%92%E6%88%92%E6%8C%87%23) `61.2K 🔥` `NEW`
1. [炎亚纶这次我真得站你这边了](https://s.weibo.com/weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E8%BF%99%E6%AC%A1%E6%88%91%E7%9C%9F%E5%BE%97%E7%AB%99%E4%BD%A0%E8%BF%99%E8%BE%B9%E4%BA%86%23) `59.6K 🔥` `NEW`
1. [李一桐疑似内涵芒果](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E7%96%91%E4%BC%BC%E5%86%85%E6%B6%B5%E8%8A%92%E6%9E%9C%23) `59.5K 🔥` `NEW`
1. [两千万粉博主称不投流卖三万](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%8D%83%E4%B8%87%E7%B2%89%E5%8D%9A%E4%B8%BB%E7%A7%B0%E4%B8%8D%E6%8A%95%E6%B5%81%E5%8D%96%E4%B8%89%E4%B8%87%23) `57.9K 🔥` `NEW`
1. [国乒男单6站冠军赛仅1次晋级决赛](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%956%E7%AB%99%E5%86%A0%E5%86%9B%E8%B5%9B%E4%BB%851%E6%AC%A1%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `55.8K 🔥` `NEW`
1. [国乒男单法兰克福无缘四强](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E6%B3%95%E5%85%B0%E5%85%8B%E7%A6%8F%E6%97%A0%E7%BC%98%E5%9B%9B%E5%BC%BA%23) `55.7K 🔥` `NEW`
1. [芒果有条通天路你走不走](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%9C%89%E6%9D%A1%E9%80%9A%E5%A4%A9%E8%B7%AF%E4%BD%A0%E8%B5%B0%E4%B8%8D%E8%B5%B0%23) `55.7K 🔥` `NEW`
1. [火树是最懂白小纯青稚的人](https://s.weibo.com/weibo?q=%23%E7%81%AB%E6%A0%91%E6%98%AF%E6%9C%80%E6%87%82%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E7%9A%84%E4%BA%BA%23) `47.9K 🔥` `NEW`
1. [iPhone20外观](https://s.weibo.com/weibo?q=%23iPhone20%E5%A4%96%E8%A7%82%23) `46.0K 🔥` `NEW`
1. [刘丹透露小糯米在英国读书](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%B9%E9%80%8F%E9%9C%B2%E5%B0%8F%E7%B3%AF%E7%B1%B3%E5%9C%A8%E8%8B%B1%E5%9B%BD%E8%AF%BB%E4%B9%A6%23) `45.3K 🔥` `NEW`
1. [王子璇回答白小纯后被消音](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E5%9B%9E%E7%AD%94%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%90%8E%E8%A2%AB%E6%B6%88%E9%9F%B3%23) `44.8K 🔥` `NEW`
1. [提纯提白小纯啊](https://s.weibo.com/weibo?q=%23%E6%8F%90%E7%BA%AF%E6%8F%90%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%95%8A%23) `42.0K 🔥` `NEW`
1. [江南 今何在](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%8D%97%20%E4%BB%8A%E4%BD%95%E5%9C%A8%23) `40.9K 🔥` `NEW`
1. [大S剥虾论八年后被读懂](https://s.weibo.com/weibo?q=%23%E5%A4%A7S%E5%89%A5%E8%99%BE%E8%AE%BA%E5%85%AB%E5%B9%B4%E5%90%8E%E8%A2%AB%E8%AF%BB%E6%87%82%23) `40.3K 🔥` `NEW`
1. [已读不回就能收获180个鸡蛋](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E8%AF%BB%E4%B8%8D%E5%9B%9E%E5%B0%B1%E8%83%BD%E6%94%B6%E8%8E%B7180%E4%B8%AA%E9%B8%A1%E8%9B%8B%23) `39.4K 🔥` `NEW`
1. [网友后会友期观察室嘉宾换人提名](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E8%A7%82%E5%AF%9F%E5%AE%A4%E5%98%89%E5%AE%BE%E6%8D%A2%E4%BA%BA%E6%8F%90%E5%90%8D%23) `39.3K 🔥` `NEW`
1. [王楚然表白完黄景瑜愣住了两秒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%A1%A8%E7%99%BD%E5%AE%8C%E9%BB%84%E6%99%AF%E7%91%9C%E6%84%A3%E4%BD%8F%E4%BA%86%E4%B8%A4%E7%A7%92%23) `39.1K 🔥` `NEW`
1. [朋友竟是欠租三年的租客](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E7%AB%9F%E6%98%AF%E6%AC%A0%E7%A7%9F%E4%B8%89%E5%B9%B4%E7%9A%84%E7%A7%9F%E5%AE%A2%23) `39.0K 🔥` `NEW`
1. [五毒之人碰到纯阳之体](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%AF%92%E4%B9%8B%E4%BA%BA%E7%A2%B0%E5%88%B0%E7%BA%AF%E9%98%B3%E4%B9%8B%E4%BD%93%23) `38.7K 🔥` `NEW`
1. [梁文锋DeepSeek不止国运级](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E9%94%8BDeepSeek%E4%B8%8D%E6%AD%A2%E5%9B%BD%E8%BF%90%E7%BA%A7%23) `37.9K 🔥` `NEW`
1. [初见面时厉娜看了两次许飞的戒指](https://s.weibo.com/weibo?q=%23%E5%88%9D%E8%A7%81%E9%9D%A2%E6%97%B6%E5%8E%89%E5%A8%9C%E7%9C%8B%E4%BA%86%E4%B8%A4%E6%AC%A1%E8%AE%B8%E9%A3%9E%E7%9A%84%E6%88%92%E6%8C%87%23) `35.8K 🔥` `NEW`
1. [北京的雪有多大](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E7%9A%84%E9%9B%AA%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `34.8K 🔥` `NEW`
1. [康康诺一完美复刻了军烨的身高差](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E5%BA%B7%E8%AF%BA%E4%B8%80%E5%AE%8C%E7%BE%8E%E5%A4%8D%E5%88%BB%E4%BA%86%E5%86%9B%E7%83%A8%E7%9A%84%E8%BA%AB%E9%AB%98%E5%B7%AE%23) `34.5K 🔥` `NEW`
1. [白小纯破防的原因](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%A0%B4%E9%98%B2%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `33.9K 🔥` `NEW`
1. [曝90剧花美国待产](https://s.weibo.com/weibo?q=%23%E6%9B%9D90%E5%89%A7%E8%8A%B1%E7%BE%8E%E5%9B%BD%E5%BE%85%E4%BA%A7%23) `33.2K 🔥` `NEW`
1. [大爷让买流量我买成榴莲](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E8%AE%A9%E4%B9%B0%E6%B5%81%E9%87%8F%E6%88%91%E4%B9%B0%E6%88%90%E6%A6%B4%E8%8E%B2%23) `31.8K 🔥` `NEW`
1. [原来许飞发疯是这样](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%AE%B8%E9%A3%9E%E5%8F%91%E7%96%AF%E6%98%AF%E8%BF%99%E6%A0%B7%23) `31.6K 🔥` `NEW`
1. [战国宝珠酷似蓝色星球](https://s.weibo.com/weibo?q=%23%E6%88%98%E5%9B%BD%E5%AE%9D%E7%8F%A0%E9%85%B7%E4%BC%BC%E8%93%9D%E8%89%B2%E6%98%9F%E7%90%83%23) `31.4K 🔥` `NEW`
1. [程靖淇谈张本美和4比2陈幸同](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E9%9D%96%E6%B7%87%E8%B0%88%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C4%E6%AF%942%E9%99%88%E5%B9%B8%E5%90%8C%23) `31.4K 🔥` `NEW`
1. [Meiko力挺JiaQi](https://s.weibo.com/weibo?q=%23Meiko%E5%8A%9B%E6%8C%BAJiaQi%23) `31.3K 🔥` `NEW`
1. [Crisp谈BLG对阵T1和iG对阵GEN](https://s.weibo.com/weibo?q=%23Crisp%E8%B0%88BLG%E5%AF%B9%E9%98%B5T1%E5%92%8CiG%E5%AF%B9%E9%98%B5GEN%23) `31.3K 🔥` `NEW`
1. [S16半决赛宣传片](https://s.weibo.com/weibo?q=%23S16%E5%8D%8A%E5%86%B3%E8%B5%9B%E5%AE%A3%E4%BC%A0%E7%89%87%23) `31.3K 🔥` `NEW`
1. [F1圣保罗大奖赛三练](https://s.weibo.com/weibo?q=%23F1%E5%9C%A3%E4%BF%9D%E7%BD%97%E5%A4%A7%E5%A5%96%E8%B5%9B%E4%B8%89%E7%BB%83%23) `31.3K 🔥` `NEW`
1. [chinagt中国超级跑车锦标赛](https://s.weibo.com/weibo?q=%23chinagt%E4%B8%AD%E5%9B%BD%E8%B6%85%E7%BA%A7%E8%B7%91%E8%BD%A6%E9%94%A6%E6%A0%87%E8%B5%9B%23) `31.3K 🔥` `NEW`
1. [伊朗取消导弹射程限制](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%96%E6%B6%88%E5%AF%BC%E5%BC%B9%E5%B0%84%E7%A8%8B%E9%99%90%E5%88%B6%23) `31.3K 🔥` `NEW`
1. [张本智和回应4比0邱党](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E5%9B%9E%E5%BA%944%E6%AF%940%E9%82%B1%E5%85%9A%23) `31.3K 🔥` `NEW`

Updated at 2026-11-08 04:00:42

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
