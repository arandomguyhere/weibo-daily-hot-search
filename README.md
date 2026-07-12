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

1. [灿如繁星热度未破8000 (Bright as Stars, the popularity has not exceeded 8000)](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E7%83%AD%E5%BA%A6%E6%9C%AA%E7%A0%B48000%23) `781.4K 🔥` `NEW`
1. [Desire4合体直播股东大会](https://s.weibo.com/weibo?q=%23Desire4%E5%90%88%E4%BD%93%E7%9B%B4%E6%92%AD%E8%82%A1%E4%B8%9C%E5%A4%A7%E4%BC%9A%23) `735.0K 🔥` `NEW`
1. [百花杀暑期档黑马](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E6%9A%91%E6%9C%9F%E6%A1%A3%E9%BB%91%E9%A9%AC%23) `627.2K 🔥` `NEW`
1. [功夫女足票房破5亿](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%E7%A0%B45%E4%BA%BF%23) `347.2K 🔥` `NEW`
1. [Xun要碎了](https://s.weibo.com/weibo?q=%23Xun%E8%A6%81%E7%A2%8E%E4%BA%86%23) `297.3K 🔥` `NEW`
1. [曾沛慈一场下来步数3万步](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%80%E5%9C%BA%E4%B8%8B%E6%9D%A5%E6%AD%A5%E6%95%B03%E4%B8%87%E6%AD%A5%23) `295.1K 🔥` `NEW`
1. [巴威发威青岛巨浪滔天](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%8F%91%E5%A8%81%E9%9D%92%E5%B2%9B%E5%B7%A8%E6%B5%AA%E6%BB%94%E5%A4%A9%23) `290.3K 🔥` `NEW`
1. [16岁高中生被捅杀警方立案](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E9%AB%98%E4%B8%AD%E7%94%9F%E8%A2%AB%E6%8D%85%E6%9D%80%E8%AD%A6%E6%96%B9%E7%AB%8B%E6%A1%88%23) `287.6K 🔥` `NEW`
1. [泰州地震](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%B7%9E%E5%9C%B0%E9%9C%87%23) `286.5K 🔥` `NEW`
1. [四川最近的现状](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E6%9C%80%E8%BF%91%E7%9A%84%E7%8E%B0%E7%8A%B6%23) `285.1K 🔥` `NEW`
1. [鹿晗意外英格兰还留在世界杯 (Lu Han unexpectedly revealed that England still remains in the World Cup)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%84%8F%E5%A4%96%E8%8B%B1%E6%A0%BC%E5%85%B0%E8%BF%98%E7%95%99%E5%9C%A8%E4%B8%96%E7%95%8C%E6%9D%AF%23) `243.6K 🔥` `NEW`
1. [骑手2元买意外险被撞后保险拒赔](https://s.weibo.com/weibo?q=%23%E9%AA%91%E6%89%8B2%E5%85%83%E4%B9%B0%E6%84%8F%E5%A4%96%E9%99%A9%E8%A2%AB%E6%92%9E%E5%90%8E%E4%BF%9D%E9%99%A9%E6%8B%92%E8%B5%94%23) `241.9K 🔥` `NEW`
1. [中国女排2比3意大利女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%922%E6%AF%943%E6%84%8F%E5%A4%A7%E5%88%A9%E5%A5%B3%E6%8E%92%23) `230.1K 🔥` `NEW`
1. [周深现场把伴舞开了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E7%8E%B0%E5%9C%BA%E6%8A%8A%E4%BC%B4%E8%88%9E%E5%BC%80%E4%BA%86%23) `224.1K 🔥` `NEW`
1. [恩博洛假摔看懵甲亢哥](https://s.weibo.com/weibo?q=%23%E6%81%A9%E5%8D%9A%E6%B4%9B%E5%81%87%E6%91%94%E7%9C%8B%E6%87%B5%E7%94%B2%E4%BA%A2%E5%93%A5%23) `222.2K 🔥` `NEW`
1. [侯明昊金莎接住了对方的戏](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E9%87%91%E8%8E%8E%E6%8E%A5%E4%BD%8F%E4%BA%86%E5%AF%B9%E6%96%B9%E7%9A%84%E6%88%8F%23) `222.1K 🔥` `NEW`
1. [包文婧想让饺子考985](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E6%83%B3%E8%AE%A9%E9%A5%BA%E5%AD%90%E8%80%83985%23) `217.7K 🔥` `NEW`
1. [郭涵煜组合温网女双冠军](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%B6%B5%E7%85%9C%E7%BB%84%E5%90%88%E6%B8%A9%E7%BD%91%E5%A5%B3%E5%8F%8C%E5%86%A0%E5%86%9B%23) `214.6K 🔥` `NEW`
1. [王楚然陈星旭 快把我老板带走](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%99%88%E6%98%9F%E6%97%AD%20%E5%BF%AB%E6%8A%8A%E6%88%91%E8%80%81%E6%9D%BF%E5%B8%A6%E8%B5%B0%23) `211.7K 🔥` `NEW`
1. [Xun燃尽了](https://s.weibo.com/weibo?q=%23Xun%E7%87%83%E5%B0%BD%E4%BA%86%23) `167.3K 🔥` `NEW`
1. [折叠屏iPhone订单被传上调至千万级 (Folding screen iPhone orders are rumored to have been raised to tens of millions)](https://s.weibo.com/weibo?q=%23%E6%8A%98%E5%8F%A0%E5%B1%8FiPhone%E8%AE%A2%E5%8D%95%E8%A2%AB%E4%BC%A0%E4%B8%8A%E8%B0%83%E8%87%B3%E5%8D%83%E4%B8%87%E7%BA%A7%23) `166.6K 🔥` `NEW`
1. [Xun决赛状态](https://s.weibo.com/weibo?q=%23Xun%E5%86%B3%E8%B5%9B%E7%8A%B6%E6%80%81%23) `165.8K 🔥` `NEW`
1. [Viper赛后采访](https://s.weibo.com/weibo?q=%23Viper%E8%B5%9B%E5%90%8E%E9%87%87%E8%AE%BF%23) `164.8K 🔥` `NEW`
1. [功夫女足 浙江票仓](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%20%E6%B5%99%E6%B1%9F%E7%A5%A8%E4%BB%93%23) `1.1M 🔥` `+212%`
1. [国产动力舟桥抗洪有多硬核](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E5%8A%A8%E5%8A%9B%E8%88%9F%E6%A1%A5%E6%8A%97%E6%B4%AA%E6%9C%89%E5%A4%9A%E7%A1%AC%E6%A0%B8%23) `908.1K 🔥` `+21%`
1. [中国女生在韩国救下一车人](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%9C%A8%E9%9F%A9%E5%9B%BD%E6%95%91%E4%B8%8B%E4%B8%80%E8%BD%A6%E4%BA%BA%23) `760.5K 🔥` `+120%`
1. [董事长遭女儿女婿联手提议罢免](https://s.weibo.com/weibo?q=%23%E8%91%A3%E4%BA%8B%E9%95%BF%E9%81%AD%E5%A5%B3%E5%84%BF%E5%A5%B3%E5%A9%BF%E8%81%94%E6%89%8B%E6%8F%90%E8%AE%AE%E7%BD%A2%E5%85%8D%23) `698.4K 🔥` `+102%`
1. [樊振东将解说世界杯决赛 (Fan Zhendong will commentate on the World Cup final)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%B0%86%E8%A7%A3%E8%AF%B4%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `1.5M 🔥`
1. [火鸡面被台风孤立了](https://s.weibo.com/weibo?q=%23%E7%81%AB%E9%B8%A1%E9%9D%A2%E8%A2%AB%E5%8F%B0%E9%A3%8E%E5%AD%A4%E7%AB%8B%E4%BA%86%23) `884.3K 🔥`
1. [新能源车平均车龄仅1.8年](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E5%B9%B3%E5%9D%87%E8%BD%A6%E9%BE%84%E4%BB%851.8%E5%B9%B4%23) `299.4K 🔥`
1. [鹿晗范志毅直播](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%8C%83%E5%BF%97%E6%AF%85%E7%9B%B4%E6%92%AD%23) `299.0K 🔥`
1. [Bin回应不敌HLE (Bin's response was defeated by HLE)](https://s.weibo.com/weibo?q=%23Bin%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8CHLE%23) `290.0K 🔥`
1. [明明天权与孙东旭合开公司](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%8E%E5%A4%A9%E6%9D%83%E4%B8%8E%E5%AD%99%E4%B8%9C%E6%97%AD%E5%90%88%E5%BC%80%E5%85%AC%E5%8F%B8%23) `288.7K 🔥`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `287.9K 🔥`
1. [长期不换社交头像的人](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%B8%8D%E6%8D%A2%E7%A4%BE%E4%BA%A4%E5%A4%B4%E5%83%8F%E7%9A%84%E4%BA%BA%23) `286.9K 🔥`
1. [BLG赛后众生相](https://s.weibo.com/weibo?q=%23BLG%E8%B5%9B%E5%90%8E%E4%BC%97%E7%94%9F%E7%9B%B8%23) `286.6K 🔥`
1. [Bin被打成了BLG的最大弱点](https://s.weibo.com/weibo?q=%23Bin%E8%A2%AB%E6%89%93%E6%88%90%E4%BA%86BLG%E7%9A%84%E6%9C%80%E5%A4%A7%E5%BC%B1%E7%82%B9%23) `286.1K 🔥`
1. [季节说誓约打胎](https://s.weibo.com/weibo?q=%23%E5%AD%A3%E8%8A%82%E8%AF%B4%E8%AA%93%E7%BA%A6%E6%89%93%E8%83%8E%23) `285.6K 🔥`
1. [赛力斯预计半年净亏损15至18亿元](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E5%8A%9B%E6%96%AF%E9%A2%84%E8%AE%A1%E5%8D%8A%E5%B9%B4%E5%87%80%E4%BA%8F%E6%8D%9F15%E8%87%B318%E4%BA%BF%E5%85%83%23) `282.7K 🔥`
1. [这两场焦点战范大将军坐不住了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%A4%E5%9C%BA%E7%84%A6%E7%82%B9%E6%88%98%E8%8C%83%E5%A4%A7%E5%B0%86%E5%86%9B%E5%9D%90%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `282.3K 🔥`
1. [太原理工大学CUBAL冠军](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6CUBAL%E5%86%A0%E5%86%9B%23) `282.2K 🔥`
1. [突然感觉大家对精致生活祛魅了 (Suddenly I feel like everyone has become disenchanted with exquisite life.)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%9F%E8%A7%89%E5%A4%A7%E5%AE%B6%E5%AF%B9%E7%B2%BE%E8%87%B4%E7%94%9F%E6%B4%BB%E7%A5%9B%E9%AD%85%E4%BA%86%23) `252.9K 🔥`
1. [陈星旭又成周也王玉雯的桌子了 (Chen Xingxu becomes Zhou Ye and Wang Yuwen’s desk again)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%E5%8F%88%E6%88%90%E5%91%A8%E4%B9%9F%E7%8E%8B%E7%8E%89%E9%9B%AF%E7%9A%84%E6%A1%8C%E5%AD%90%E4%BA%86%23) `243.9K 🔥`
1. [中华人民共和国外交部郑重声明 (Solemn Statement from the Ministry of Foreign Affairs of the People's Republic of China)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E5%A4%96%E4%BA%A4%E9%83%A8%E9%83%91%E9%87%8D%E5%A3%B0%E6%98%8E%23) `291.4K 🔥` `-74%`
1. [英格兰派出了贝林哄哈兰德](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E6%B4%BE%E5%87%BA%E4%BA%86%E8%B4%9D%E6%9E%97%E5%93%84%E5%93%88%E5%85%B0%E5%BE%B7%23) `291.4K 🔥` `-49%`
1. [功夫女足豆瓣6.6票房却杀疯了 (Kung Fu Girls Douban’s box office is 6.6 but it’s crazy)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E8%B1%86%E7%93%A36.6%E7%A5%A8%E6%88%BF%E5%8D%B4%E6%9D%80%E7%96%AF%E4%BA%86%23) `291.2K 🔥` `-53%`
1. [一直以为取卡针的作用只有换电话卡 (I always thought that the purpose of the card removal pin is only to change phone cards.)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E4%BB%A5%E4%B8%BA%E5%8F%96%E5%8D%A1%E9%92%88%E7%9A%84%E4%BD%9C%E7%94%A8%E5%8F%AA%E6%9C%89%E6%8D%A2%E7%94%B5%E8%AF%9D%E5%8D%A1%23) `289.5K 🔥` `-59%`
1. [BLG 失望 (BLG disappointed)](https://s.weibo.com/weibo?q=%23BLG%20%E5%A4%B1%E6%9C%9B%23) `270.9K 🔥` `-22%`
1. [Bin 团队意识](https://s.weibo.com/weibo?q=%23Bin%20%E5%9B%A2%E9%98%9F%E6%84%8F%E8%AF%86%23) `264.8K 🔥` `-22%`
1. [晚晚孕肚好明显](https://s.weibo.com/weibo?q=%23%E6%99%9A%E6%99%9A%E5%AD%95%E8%82%9A%E5%A5%BD%E6%98%8E%E6%98%BE%23) `194.7K 🔥` `-37%`
1. [庄达菲刘耀文 妙塘往事](https://s.weibo.com/weibo?q=%23%E5%BA%84%E8%BE%BE%E8%8F%B2%E5%88%98%E8%80%80%E6%96%87%20%E5%A6%99%E5%A1%98%E5%BE%80%E4%BA%8B%23) `167.2K 🔥` `-53%`

Updated at 2026-07-12 23:28:34

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
