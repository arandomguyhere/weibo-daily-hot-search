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

1. [风雨终将过去守护永不退场 (The storm will eventually pass, the guardian will never leave)](https://s.weibo.com/weibo?q=%23%E9%A3%8E%E9%9B%A8%E7%BB%88%E5%B0%86%E8%BF%87%E5%8E%BB%E5%AE%88%E6%8A%A4%E6%B0%B8%E4%B8%8D%E9%80%80%E5%9C%BA%23) `1.0M 🔥` `NEW`
1. [HLE冠军](https://s.weibo.com/weibo?q=%23HLE%E5%86%A0%E5%86%9B%23) `1.0M 🔥` `NEW`
1. [BLG 失望](https://s.weibo.com/weibo?q=%23BLG%20%E5%A4%B1%E6%9C%9B%23) `1.0M 🔥` `NEW`
1. [Bin 团队意识](https://s.weibo.com/weibo?q=%23Bin%20%E5%9B%A2%E9%98%9F%E6%84%8F%E8%AF%86%23) `1.0M 🔥` `NEW`
1. [HLE战胜BLG](https://s.weibo.com/weibo?q=%23HLE%E6%88%98%E8%83%9CBLG%23) `732.6K 🔥` `NEW`
1. [季节说誓约打胎](https://s.weibo.com/weibo?q=%23%E5%AD%A3%E8%8A%82%E8%AF%B4%E8%AA%93%E7%BA%A6%E6%89%93%E8%83%8E%23) `728.7K 🔥` `NEW`
1. [Bin好急啊](https://s.weibo.com/weibo?q=%23Bin%E5%A5%BD%E6%80%A5%E5%95%8A%23) `724.7K 🔥` `NEW`
1. [Zeus大满贯](https://s.weibo.com/weibo?q=%23Zeus%E5%A4%A7%E6%BB%A1%E8%B4%AF%23) `712.0K 🔥` `NEW`
1. [赛力斯预计半年净亏损15至18亿元](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E5%8A%9B%E6%96%AF%E9%A2%84%E8%AE%A1%E5%8D%8A%E5%B9%B4%E5%87%80%E4%BA%8F%E6%8D%9F15%E8%87%B318%E4%BA%BF%E5%85%83%23) `705.2K 🔥` `NEW`
1. [BLG亚军](https://s.weibo.com/weibo?q=%23BLG%E4%BA%9A%E5%86%9B%23) `701.4K 🔥` `NEW`
1. [杨毅嘲讽瑞士球员假摔 (Yang Yi mocked Swiss players for diving)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%AF%85%E5%98%B2%E8%AE%BD%E7%91%9E%E5%A3%AB%E7%90%83%E5%91%98%E5%81%87%E6%91%94%23) `700.0K 🔥` `NEW`
1. [TOP抢票](https://s.weibo.com/weibo?q=%23TOP%E6%8A%A2%E7%A5%A8%23) `670.5K 🔥` `NEW`
1. [火鸡面被台风孤立了](https://s.weibo.com/weibo?q=%23%E7%81%AB%E9%B8%A1%E9%9D%A2%E8%A2%AB%E5%8F%B0%E9%A3%8E%E5%AD%A4%E7%AB%8B%E4%BA%86%23) `658.8K 🔥` `NEW`
1. [何炜晴去世](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%9C%E6%99%B4%E5%8E%BB%E4%B8%96%23) `656.7K 🔥` `NEW`
1. [Bin肾上腺素爆发疯狂抖动](https://s.weibo.com/weibo?q=%23Bin%E8%82%BE%E4%B8%8A%E8%85%BA%E7%B4%A0%E7%88%86%E5%8F%91%E7%96%AF%E7%8B%82%E6%8A%96%E5%8A%A8%23) `634.5K 🔥` `NEW`
1. [安徽也要迎战台风了](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E4%B9%9F%E8%A6%81%E8%BF%8E%E6%88%98%E5%8F%B0%E9%A3%8E%E4%BA%86%23) `619.0K 🔥` `NEW`
1. [Zeus就是世一上](https://s.weibo.com/weibo?q=%23Zeus%E5%B0%B1%E6%98%AF%E4%B8%96%E4%B8%80%E4%B8%8A%23) `615.7K 🔥` `NEW`
1. [雀骨](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%23) `613.7K 🔥` `NEW`
1. [村民家进银环蛇靠比划向救援队求助](https://s.weibo.com/weibo?q=%23%E6%9D%91%E6%B0%91%E5%AE%B6%E8%BF%9B%E9%93%B6%E7%8E%AF%E8%9B%87%E9%9D%A0%E6%AF%94%E5%88%92%E5%90%91%E6%95%91%E6%8F%B4%E9%98%9F%E6%B1%82%E5%8A%A9%23) `597.1K 🔥` `NEW`
1. [太空摄像头记录巴威最新画面](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E7%A9%BA%E6%91%84%E5%83%8F%E5%A4%B4%E8%AE%B0%E5%BD%95%E5%B7%B4%E5%A8%81%E6%9C%80%E6%96%B0%E7%94%BB%E9%9D%A2%23) `589.5K 🔥` `NEW`
1. [中华人民共和国外交部郑重声明 (Solemn Statement from the Ministry of Foreign Affairs of the People's Republic of China)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E5%A4%96%E4%BA%A4%E9%83%A8%E9%83%91%E9%87%8D%E5%A3%B0%E6%98%8E%23) `1.6M 🔥` `+131%`
1. [一直以为取卡针的作用只有换电话卡 (I always thought that the purpose of the card removal pin is only to change phone cards.)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E4%BB%A5%E4%B8%BA%E5%8F%96%E5%8D%A1%E9%92%88%E7%9A%84%E4%BD%9C%E7%94%A8%E5%8F%AA%E6%9C%89%E6%8D%A2%E7%94%B5%E8%AF%9D%E5%8D%A1%23) `1.0M 🔥` `+81%`
1. [功夫女足豆瓣6.6票房却杀疯了 (Kung Fu Girls Douban’s box office is 6.6 but it’s crazy)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E8%B1%86%E7%93%A36.6%E7%A5%A8%E6%88%BF%E5%8D%B4%E6%9D%80%E7%96%AF%E4%BA%86%23) `881.4K 🔥` `+141%`
1. [庄达菲刘耀文 妙塘往事](https://s.weibo.com/weibo?q=%23%E5%BA%84%E8%BE%BE%E8%8F%B2%E5%88%98%E8%80%80%E6%96%87%20%E5%A6%99%E5%A1%98%E5%BE%80%E4%BA%8B%23) `736.2K 🔥` `+116%`
1. [汪苏泷原本打算开30分钟后退票](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%8E%9F%E6%9C%AC%E6%89%93%E7%AE%97%E5%BC%8030%E5%88%86%E9%92%9F%E5%90%8E%E9%80%80%E7%A5%A8%23) `718.9K 🔥` `+130%`
1. [BLG对战HLE](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98HLE%23) `716.0K 🔥` `+71%`
1. [新能源车平均车龄仅1.8年](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E5%B9%B3%E5%9D%87%E8%BD%A6%E9%BE%84%E4%BB%851.8%E5%B9%B4%23) `708.4K 🔥` `+161%`
1. [长期不换社交头像的人](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%B8%8D%E6%8D%A2%E7%A4%BE%E4%BA%A4%E5%A4%B4%E5%83%8F%E7%9A%84%E4%BA%BA%23) `695.0K 🔥` `+148%`
1. [一栗小莎子抗癌结疗](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E6%8A%97%E7%99%8C%E7%BB%93%E7%96%97%23) `690.0K 🔥` `+159%`
1. [郑州一排污口被居民当游泳池戏水](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%B7%9E%E4%B8%80%E6%8E%92%E6%B1%A1%E5%8F%A3%E8%A2%AB%E5%B1%85%E6%B0%91%E5%BD%93%E6%B8%B8%E6%B3%B3%E6%B1%A0%E6%88%8F%E6%B0%B4%23) `687.0K 🔥` `+65%`
1. [晚晚孕肚好明显](https://s.weibo.com/weibo?q=%23%E6%99%9A%E6%99%9A%E5%AD%95%E8%82%9A%E5%A5%BD%E6%98%8E%E6%98%BE%23) `683.7K 🔥` `+125%`
1. [突然感觉大家对精致生活祛魅了 (Suddenly I feel like everyone has become disenchanted with exquisite life.)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%9F%E8%A7%89%E5%A4%A7%E5%AE%B6%E5%AF%B9%E7%B2%BE%E8%87%B4%E7%94%9F%E6%B4%BB%E7%A5%9B%E9%AD%85%E4%BA%86%23) `680.8K 🔥` `+144%`
1. [长鑫科技中签率](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E4%B8%AD%E7%AD%BE%E7%8E%87%23) `675.6K 🔥` `+121%`
1. [在迪丽热巴身上看到了郭京飞的影子 (I saw the shadow of Guo Jingfei in Dilraba)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BA%AB%E4%B8%8A%E7%9C%8B%E5%88%B0%E4%BA%86%E9%83%AD%E4%BA%AC%E9%A3%9E%E7%9A%84%E5%BD%B1%E5%AD%90%23) `672.5K 🔥` `+116%`
1. [女子为炫耀自动泊车下车把狗留驾驶位](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%BA%E7%82%AB%E8%80%80%E8%87%AA%E5%8A%A8%E6%B3%8A%E8%BD%A6%E4%B8%8B%E8%BD%A6%E6%8A%8A%E7%8B%97%E7%95%99%E9%A9%BE%E9%A9%B6%E4%BD%8D%23) `667.4K 🔥` `+154%`
1. [百花杀](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%23) `664.2K 🔥` `+166%`
1. [人是怎么发现猫有这种小众癖好的](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%98%AF%E6%80%8E%E4%B9%88%E5%8F%91%E7%8E%B0%E7%8C%AB%E6%9C%89%E8%BF%99%E7%A7%8D%E5%B0%8F%E4%BC%97%E7%99%96%E5%A5%BD%E7%9A%84%23) `653.2K 🔥` `+152%`
1. [哈兰德说我现在已经彻底累垮了 (Haaland said I am completely exhausted now)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E8%AF%B4%E6%88%91%E7%8E%B0%E5%9C%A8%E5%B7%B2%E7%BB%8F%E5%BD%BB%E5%BA%95%E7%B4%AF%E5%9E%AE%E4%BA%86%23) `647.8K 🔥` `+136%`
1. [房间里爱放谷子和手办的天塌了](https://s.weibo.com/weibo?q=%23%E6%88%BF%E9%97%B4%E9%87%8C%E7%88%B1%E6%94%BE%E8%B0%B7%E5%AD%90%E5%92%8C%E6%89%8B%E5%8A%9E%E7%9A%84%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `645.9K 🔥` `+61%`
1. [台风巴威已到江苏](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%B7%B2%E5%88%B0%E6%B1%9F%E8%8B%8F%23) `639.9K 🔥` `+126%`
1. [周杰伦宣传功夫女足](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%AE%A3%E4%BC%A0%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `636.7K 🔥` `+130%`
1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `629.7K 🔥` `+145%`
1. [刘宇宁紧急避谶](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%B4%A7%E6%80%A5%E9%81%BF%E8%B0%B6%23) `627.0K 🔥` `+130%`
1. [阿姨绝经7年异常出血查出双子宫](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A7%A8%E7%BB%9D%E7%BB%8F7%E5%B9%B4%E5%BC%82%E5%B8%B8%E5%87%BA%E8%A1%80%E6%9F%A5%E5%87%BA%E5%8F%8C%E5%AD%90%E5%AE%AB%23) `624.3K 🔥` `+135%`
1. [C罗社媒仅关注4名队友](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%A4%BE%E5%AA%92%E4%BB%85%E5%85%B3%E6%B3%A84%E5%90%8D%E9%98%9F%E5%8F%8B%23) `607.2K 🔥` `+133%`
1. [谈着谈着就变成陪我了 (As we talked, we became companions with me.)](https://s.weibo.com/weibo?q=%23%E8%B0%88%E7%9D%80%E8%B0%88%E7%9D%80%E5%B0%B1%E5%8F%98%E6%88%90%E9%99%AA%E6%88%91%E4%BA%86%23) `604.2K 🔥` `+126%`
1. [中国将诞生多家市值十万亿上市企业](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%86%E8%AF%9E%E7%94%9F%E5%A4%9A%E5%AE%B6%E5%B8%82%E5%80%BC%E5%8D%81%E4%B8%87%E4%BA%BF%E4%B8%8A%E5%B8%82%E4%BC%81%E4%B8%9A%23) `601.9K 🔥` `+145%`
1. [这两场焦点战范大将军坐不住了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%A4%E5%9C%BA%E7%84%A6%E7%82%B9%E6%88%98%E8%8C%83%E5%A4%A7%E5%B0%86%E5%86%9B%E5%9D%90%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `593.8K 🔥` `+144%`
1. [台风巴威对山东发力了 (Typhoon Bavi hits Shandong)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%AF%B9%E5%B1%B1%E4%B8%9C%E5%8F%91%E5%8A%9B%E4%BA%86%23) `733.1K 🔥`
1. [英格兰派出了贝林哄哈兰德](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E6%B4%BE%E5%87%BA%E4%BA%86%E8%B4%9D%E6%9E%97%E5%93%84%E5%93%88%E5%85%B0%E5%BE%B7%23) `1.0M 🔥` `-28%`

Updated at 2026-07-12 20:42:50

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
