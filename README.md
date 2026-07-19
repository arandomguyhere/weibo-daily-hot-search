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

1. [西班牙冠军 (spanish champion)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%86%A0%E5%86%9B%23) `18.6M 🔥` `NEW`
1. [劳塔罗不上了](https://s.weibo.com/weibo?q=%23%E5%8A%B3%E5%A1%94%E7%BD%97%E4%B8%8D%E4%B8%8A%E4%BA%86%23) `3.7M 🔥` `NEW`
1. [西班牙阿根廷加时赛](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%8A%A0%E6%97%B6%E8%B5%9B%23) `1.6M 🔥` `NEW`
1. [西班牙1比0阿根廷](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%991%E6%AF%940%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `1.0M 🔥` `NEW`
1. [阿根廷亚军](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%BA%9A%E5%86%9B%23) `427.6K 🔥` `NEW`
1. [大马丁](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%A9%AC%E4%B8%81%23) `403.4K 🔥` `NEW`
1. [费兰加时赛破门](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E5%85%B0%E5%8A%A0%E6%97%B6%E8%B5%9B%E7%A0%B4%E9%97%A8%23) `364.4K 🔥` `NEW`
1. [美国打伊朗越打越尴尬](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%89%93%E4%BC%8A%E6%9C%97%E8%B6%8A%E6%89%93%E8%B6%8A%E5%B0%B4%E5%B0%AC%23) `294.3K 🔥` `NEW`
1. [西班牙进球被吹](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E8%BF%9B%E7%90%83%E8%A2%AB%E5%90%B9%23) `292.3K 🔥` `NEW`
1. [觉得压力大的可以看看大马丁](https://s.weibo.com/weibo?q=%23%E8%A7%89%E5%BE%97%E5%8E%8B%E5%8A%9B%E5%A4%A7%E7%9A%84%E5%8F%AF%E4%BB%A5%E7%9C%8B%E7%9C%8B%E5%A4%A7%E9%A9%AC%E4%B8%81%23) `269.1K 🔥` `NEW`
1. [大马丁 手指骨折带伤参赛 (Big Martin competes with broken finger and injury)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%A9%AC%E4%B8%81%20%E6%89%8B%E6%8C%87%E9%AA%A8%E6%8A%98%E5%B8%A6%E4%BC%A4%E5%8F%82%E8%B5%9B%23) `179.2K 🔥` `NEW`
1. [樊振东评世界杯最佳阵容](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%AF%84%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%80%E4%BD%B3%E9%98%B5%E5%AE%B9%23) `69.1K 🔥` `NEW`
1. [西班牙vs阿根廷 (Spain vs Argentina)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99vs%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `11.1M 🔥` `+27%`
1. [走读汕头的侨乡家国情](https://s.weibo.com/weibo?q=%23%E8%B5%B0%E8%AF%BB%E6%B1%95%E5%A4%B4%E7%9A%84%E4%BE%A8%E4%B9%A1%E5%AE%B6%E5%9B%BD%E6%83%85%23) `6.2M 🔥` `+52%`
1. [恩佐两黄变一红](https://s.weibo.com/weibo?q=%23%E6%81%A9%E4%BD%90%E4%B8%A4%E9%BB%84%E5%8F%98%E4%B8%80%E7%BA%A2%23) `5.5M 🔥` `+39%`
1. [大马丁 门神降临阿根廷](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%A9%AC%E4%B8%81%20%E9%97%A8%E7%A5%9E%E9%99%8D%E4%B8%B4%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `2.6M 🔥` `+31%`
1. [阿根廷 拿不到球 (Argentina can't get the ball)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E6%8B%BF%E4%B8%8D%E5%88%B0%E7%90%83%23) `1.6M 🔥` `+99%`
1. [西班牙阿根廷冲突](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%86%B2%E7%AA%81%23) `1.1M 🔥` `+89%`
1. [西班牙玄学 对手伤退](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%8E%84%E5%AD%A6%20%E5%AF%B9%E6%89%8B%E4%BC%A4%E9%80%80%23) `736.5K 🔥` `+64%`
1. [阿根廷90分钟0射门](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B790%E5%88%86%E9%92%9F0%E5%B0%84%E9%97%A8%23) `703.8K 🔥` `+93%`
1. [特朗普摸大力神杯](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%91%B8%E5%A4%A7%E5%8A%9B%E7%A5%9E%E6%9D%AF%23) `663.5K 🔥` `+52%`
1. [帕雷德斯黄牌](https://s.weibo.com/weibo?q=%23%E5%B8%95%E9%9B%B7%E5%BE%B7%E6%96%AF%E9%BB%84%E7%89%8C%23) `461.3K 🔥` `+161%`
1. [劝告大家聊天记录真不能删除 (I advise you not to delete chat history.)](https://s.weibo.com/weibo?q=%23%E5%8A%9D%E5%91%8A%E5%A4%A7%E5%AE%B6%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E7%9C%9F%E4%B8%8D%E8%83%BD%E5%88%A0%E9%99%A4%23) `426.4K 🔥` `+41%`
1. [世界杯 (world cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `369.3K 🔥` `+46%`
1. [利马伤退](https://s.weibo.com/weibo?q=%23%E5%88%A9%E9%A9%AC%E4%BC%A4%E9%80%80%23) `367.9K 🔥` `+21%`
1. [樊振东资深球迷实锤了 (Fan Zhendong’s senior fans are convinced)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%B5%84%E6%B7%B1%E7%90%83%E8%BF%B7%E5%AE%9E%E9%94%A4%E4%BA%86%23) `314.2K 🔥` `+48%`
1. [马龙许昕男双冠军](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E7%94%B7%E5%8F%8C%E5%86%A0%E5%86%9B%23) `300.6K 🔥` `+115%`
1. [西班牙阿根廷预测](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%A2%84%E6%B5%8B%23) `286.9K 🔥` `+77%`
1. [男子闪婚后发现妻子吸毒坐牢患梅毒](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%97%AA%E5%A9%9A%E5%90%8E%E5%8F%91%E7%8E%B0%E5%A6%BB%E5%AD%90%E5%90%B8%E6%AF%92%E5%9D%90%E7%89%A2%E6%82%A3%E6%A2%85%E6%AF%92%23) `262.4K 🔥` `+111%`
1. [BTS世界杯中场秀](https://s.weibo.com/weibo?q=%23BTS%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E5%9C%BA%E7%A7%80%23) `240.4K 🔥` `+21%`
1. [澎湖海战 撤档](https://s.weibo.com/weibo?q=%23%E6%BE%8E%E6%B9%96%E6%B5%B7%E6%88%98%20%E6%92%A4%E6%A1%A3%23) `151.2K 🔥` `+55%`
1. [再诱人也别碰的十大街边小吃](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%AF%B1%E4%BA%BA%E4%B9%9F%E5%88%AB%E7%A2%B0%E7%9A%84%E5%8D%81%E5%A4%A7%E8%A1%97%E8%BE%B9%E5%B0%8F%E5%90%83%23) `144.2K 🔥` `+36%`
1. [亚马尔小腿被踩](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%B0%8F%E8%85%BF%E8%A2%AB%E8%B8%A9%23) `134.2K 🔥` `+37%`
1. [来不及说我爱你 (Too late to say I love you)](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E4%B8%8D%E5%8F%8A%E8%AF%B4%E6%88%91%E7%88%B1%E4%BD%A0%23) `98.1K 🔥` `+49%`
1. [亚马尔连续造险](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E8%BF%9E%E7%BB%AD%E9%80%A0%E9%99%A9%23) `94.9K 🔥` `+72%`
1. [王源演唱会上座率 (Wang Yuan’s concert attendance rate)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `69.1K 🔥` `+23%`
1. [阿根廷被西班牙压着打](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%A2%AB%E8%A5%BF%E7%8F%AD%E7%89%99%E5%8E%8B%E7%9D%80%E6%89%93%23) `977.1K 🔥`
1. [裁判这都能忍住不掏牌](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%E8%BF%99%E9%83%BD%E8%83%BD%E5%BF%8D%E4%BD%8F%E4%B8%8D%E6%8E%8F%E7%89%8C%23) `732.7K 🔥`
1. [现在的女装有种大家都不用上班的感觉](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%A5%B3%E8%A3%85%E6%9C%89%E7%A7%8D%E5%A4%A7%E5%AE%B6%E9%83%BD%E4%B8%8D%E7%94%A8%E4%B8%8A%E7%8F%AD%E7%9A%84%E6%84%9F%E8%A7%89%23) `236.7K 🔥`
1. [樊振东展望世界杯决赛 (Fan Zhendong looks forward to the World Cup finals)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%B1%95%E6%9C%9B%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `85.3K 🔥`
1. [很诡异公司的每个女性都在减肥](https://s.weibo.com/weibo?q=%23%E5%BE%88%E8%AF%A1%E5%BC%82%E5%85%AC%E5%8F%B8%E7%9A%84%E6%AF%8F%E4%B8%AA%E5%A5%B3%E6%80%A7%E9%83%BD%E5%9C%A8%E5%87%8F%E8%82%A5%23) `69.1K 🔥`
1. [世界杯中场秀 不转播](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E5%9C%BA%E7%A7%80%20%E4%B8%8D%E8%BD%AC%E6%92%AD%23) `2.2M 🔥` `-29%`
1. [世界杯中场秀 (world cup halftime show)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E5%9C%BA%E7%A7%80%23) `690.5K 🔥` `-70%`
1. [西班牙阿根廷 吓醒我](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E5%90%93%E9%86%92%E6%88%91%23) `478.7K 🔥` `-54%`
1. [世界杯决赛判罚尺度](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E5%88%A4%E7%BD%9A%E5%B0%BA%E5%BA%A6%23) `427.3K 🔥` `-49%`
1. [阿根廷用完换人名额](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%94%A8%E5%AE%8C%E6%8D%A2%E4%BA%BA%E5%90%8D%E9%A2%9D%23) `333.1K 🔥` `-31%`
1. [阿根廷拿球最多的是门将 (It is the goalkeeper who gets the most ball in Argentina)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%8B%BF%E7%90%83%E6%9C%80%E5%A4%9A%E7%9A%84%E6%98%AF%E9%97%A8%E5%B0%86%23) `194.9K 🔥` `-21%`
1. [西班牙阿根廷半场犯规16次](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%8D%8A%E5%9C%BA%E7%8A%AF%E8%A7%8416%E6%AC%A1%23) `174.8K 🔥` `-26%`
1. [冈萨雷斯干嘛呢 (What is Gonzalez doing?)](https://s.weibo.com/weibo?q=%23%E5%86%88%E8%90%A8%E9%9B%B7%E6%96%AF%E5%B9%B2%E5%98%9B%E5%91%A2%23) `159.5K 🔥` `-43%`
1. [西班牙控球好强](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E6%8E%A7%E7%90%83%E5%A5%BD%E5%BC%BA%23) `77.5K 🔥` `-29%`

Updated at 2026-07-20 06:27:04

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
