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

1. [世界杯中场秀 (world cup halftime show)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E5%9C%BA%E7%A7%80%23) `4.4M 🔥` `NEW`
1. [预防HPV赢下人生健康赛场](https://s.weibo.com/weibo?q=%23%E9%A2%84%E9%98%B2HPV%E8%B5%A2%E4%B8%8B%E4%BA%BA%E7%94%9F%E5%81%A5%E5%BA%B7%E8%B5%9B%E5%9C%BA%23) `1.8M 🔥` `NEW`
1. [阿根廷 拿不到球](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E6%8B%BF%E4%B8%8D%E5%88%B0%E7%90%83%23) `1.4M 🔥` `NEW`
1. [世界杯中场秀 不转播](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E5%9C%BA%E7%A7%80%20%E4%B8%8D%E8%BD%AC%E6%92%AD%23) `1.1M 🔥` `NEW`
1. [冈萨雷斯干嘛呢](https://s.weibo.com/weibo?q=%23%E5%86%88%E8%90%A8%E9%9B%B7%E6%96%AF%E5%B9%B2%E5%98%9B%E5%91%A2%23) `859.5K 🔥` `NEW`
1. [利马伤退](https://s.weibo.com/weibo?q=%23%E5%88%A9%E9%A9%AC%E4%BC%A4%E9%80%80%23) `466.6K 🔥` `NEW`
1. [西班牙控球好强](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E6%8E%A7%E7%90%83%E5%A5%BD%E5%BC%BA%23) `266.5K 🔥` `NEW`
1. [特朗普摸大力神杯](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%91%B8%E5%A4%A7%E5%8A%9B%E7%A5%9E%E6%9D%AF%23) `265.4K 🔥` `NEW`
1. [裁判这都能忍住不掏牌](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%E8%BF%99%E9%83%BD%E8%83%BD%E5%BF%8D%E4%BD%8F%E4%B8%8D%E6%8E%8F%E7%89%8C%23) `213.2K 🔥` `NEW`
1. [大马丁 门神降临阿根廷](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%A9%AC%E4%B8%81%20%E9%97%A8%E7%A5%9E%E9%99%8D%E4%B8%B4%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `182.6K 🔥` `NEW`
1. [阿根廷上半场0射门 (Argentina scored 0 shots in the first half)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%8A%E5%8D%8A%E5%9C%BA0%E5%B0%84%E9%97%A8%23) `131.9K 🔥` `NEW`
1. [西班牙阿根廷半场犯规16次](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%8D%8A%E5%9C%BA%E7%8A%AF%E8%A7%8416%E6%AC%A1%23) `109.1K 🔥` `NEW`
1. [西班牙阿根廷上半场数据](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%8A%E5%8D%8A%E5%9C%BA%E6%95%B0%E6%8D%AE%23) `79.0K 🔥` `NEW`
1. [西班牙半场0比0阿根廷](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%8D%8A%E5%9C%BA0%E6%AF%940%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `70.9K 🔥` `NEW`
1. [亚马尔小腿被踩](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%B0%8F%E8%85%BF%E8%A2%AB%E8%B8%A9%23) `60.3K 🔥` `NEW`
1. [郎朗看好阿根廷夺冠](https://s.weibo.com/weibo?q=%23%E9%83%8E%E6%9C%97%E7%9C%8B%E5%A5%BD%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%A4%BA%E5%86%A0%23) `47.5K 🔥` `NEW`
1. [西班牙vs阿根廷 (Spain vs Argentina)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99vs%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `9.3M 🔥` `+165%`
1. [世界人工智能合作组织重要阶段性进展](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%90%88%E4%BD%9C%E7%BB%84%E7%BB%87%E9%87%8D%E8%A6%81%E9%98%B6%E6%AE%B5%E6%80%A7%E8%BF%9B%E5%B1%95%23) `1.9M 🔥` `+246%`
1. [西班牙阿根廷 吓醒我](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E5%90%93%E9%86%92%E6%88%91%23) `1.7M 🔥` `+1370%`
1. [世界杯决赛判罚尺度](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E5%88%A4%E7%BD%9A%E5%B0%BA%E5%BA%A6%23) `910.2K 🔥` `+1712%`
1. [劝告大家聊天记录真不能删除 (I advise you not to delete chat history.)](https://s.weibo.com/weibo?q=%23%E5%8A%9D%E5%91%8A%E5%A4%A7%E5%AE%B6%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E7%9C%9F%E4%B8%8D%E8%83%BD%E5%88%A0%E9%99%A4%23) `261.3K 🔥` `+129%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `257.8K 🔥` `+126%`
1. [樊振东资深球迷实锤了 (Fan Zhendong’s senior fans are convinced)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%B5%84%E6%B7%B1%E7%90%83%E8%BF%B7%E5%AE%9E%E9%94%A4%E4%BA%86%23) `256.0K 🔥` `+119%`
1. [男子闪婚后发现妻子吸毒坐牢患梅毒](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%97%AA%E5%A9%9A%E5%90%8E%E5%8F%91%E7%8E%B0%E5%A6%BB%E5%AD%90%E5%90%B8%E6%AF%92%E5%9D%90%E7%89%A2%E6%82%A3%E6%A2%85%E6%AF%92%23) `226.6K 🔥` `+100%`
1. [马龙许昕男双冠军](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E7%94%B7%E5%8F%8C%E5%86%A0%E5%86%9B%23) `71.3K 🔥` `+42%`
1. [樊振东展望世界杯决赛 (Fan Zhendong looks forward to the World Cup finals)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%B1%95%E6%9C%9B%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `222.0K 🔥`
1. [澎湖海战 撤档](https://s.weibo.com/weibo?q=%23%E6%BE%8E%E6%B9%96%E6%B5%B7%E6%88%98%20%E6%92%A4%E6%A1%A3%23) `171.1K 🔥`
1. [再诱人也别碰的十大街边小吃](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%AF%B1%E4%BA%BA%E4%B9%9F%E5%88%AB%E7%A2%B0%E7%9A%84%E5%8D%81%E5%A4%A7%E8%A1%97%E8%BE%B9%E5%B0%8F%E5%90%83%23) `149.3K 🔥`
1. [很诡异公司的每个女性都在减肥](https://s.weibo.com/weibo?q=%23%E5%BE%88%E8%AF%A1%E5%BC%82%E5%85%AC%E5%8F%B8%E7%9A%84%E6%AF%8F%E4%B8%AA%E5%A5%B3%E6%80%A7%E9%83%BD%E5%9C%A8%E5%87%8F%E8%82%A5%23) `101.9K 🔥`
1. [西班牙阿根廷预测](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%A2%84%E6%B5%8B%23) `89.3K 🔥`
1. [蔡依林唱心引力送给王俊凯](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%94%B1%E5%BF%83%E5%BC%95%E5%8A%9B%E9%80%81%E7%BB%99%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `73.9K 🔥`
1. [为什么不上班反而低精力 (Why does not going to work make you less energetic?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E4%B8%8A%E7%8F%AD%E5%8F%8D%E8%80%8C%E4%BD%8E%E7%B2%BE%E5%8A%9B%23) `72.4K 🔥`
1. [王源演唱会上座率](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `67.4K 🔥`
1. [一诺 守约](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%20%E5%AE%88%E7%BA%A6%23) `62.8K 🔥`
1. [曝Bin自己还没考虑清楚 (It was revealed that Bin himself hadn’t thought it through yet.)](https://s.weibo.com/weibo?q=%23%E6%9B%9DBin%E8%87%AA%E5%B7%B1%E8%BF%98%E6%B2%A1%E8%80%83%E8%99%91%E6%B8%85%E6%A5%9A%23) `49.7K 🔥`
1. [王俊凯我该哭一下应景吗 (Wang Junkai: Should I cry for the occasion?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%88%91%E8%AF%A5%E5%93%AD%E4%B8%80%E4%B8%8B%E5%BA%94%E6%99%AF%E5%90%97%23) `49.2K 🔥`
1. [八仙 (the Eight Immortals)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `49.0K 🔥`
1. [建议高温天气就别出门了](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E9%AB%98%E6%B8%A9%E5%A4%A9%E6%B0%94%E5%B0%B1%E5%88%AB%E5%87%BA%E9%97%A8%E4%BA%86%23) `47.5K 🔥`
1. [亚马尔连续造险](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E8%BF%9E%E7%BB%AD%E9%80%A0%E9%99%A9%23) `47.4K 🔥`
1. [外网热议中国KFC卖炸鸡西瓜 (Internet hotly discusses China’s KFC selling fried chicken and watermelon)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E7%83%AD%E8%AE%AE%E4%B8%AD%E5%9B%BDKFC%E5%8D%96%E7%82%B8%E9%B8%A1%E8%A5%BF%E7%93%9C%23) `47.3K 🔥`
1. [狗狗被抱都会摆出理所当然的表情 (Dogs will show a natural expression when being hugged)](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E8%A2%AB%E6%8A%B1%E9%83%BD%E4%BC%9A%E6%91%86%E5%87%BA%E7%90%86%E6%89%80%E5%BD%93%E7%84%B6%E7%9A%84%E8%A1%A8%E6%83%85%23) `47.2K 🔥`
1. [你觉醒了不要向任何人透露](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%A7%89%E9%86%92%E4%BA%86%E4%B8%8D%E8%A6%81%E5%90%91%E4%BB%BB%E4%BD%95%E4%BA%BA%E9%80%8F%E9%9C%B2%23) `47.1K 🔥`
1. [陈靖可回应虞书欣化妆](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9D%96%E5%8F%AF%E5%9B%9E%E5%BA%94%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%8C%96%E5%A6%86%23) `47.1K 🔥`
1. [这一秒过火路透正片对比](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E8%B7%AF%E9%80%8F%E6%AD%A3%E7%89%87%E5%AF%B9%E6%AF%94%23) `47.0K 🔥`
1. [功夫女足票房](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%23) `46.8K 🔥`
1. [现在的女装有种大家都不用上班的感觉](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%A5%B3%E8%A3%85%E6%9C%89%E7%A7%8D%E5%A4%A7%E5%AE%B6%E9%83%BD%E4%B8%8D%E7%94%A8%E4%B8%8A%E7%8F%AD%E7%9A%84%E6%84%9F%E8%A7%89%23) `259.9K 🔥` `-62%`
1. [阿根廷世界杯决赛首发 (Argentina World Cup final starter)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E9%A6%96%E5%8F%91%23) `133.6K 🔥` `-54%`
1. [来不及说我爱你 (Too late to say I love you)](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E4%B8%8D%E5%8F%8A%E8%AF%B4%E6%88%91%E7%88%B1%E4%BD%A0%23) `69.8K 🔥` `-24%`
1. [西班牙决赛首发](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%86%B3%E8%B5%9B%E9%A6%96%E5%8F%91%23) `59.1K 🔥` `-48%`
1. [TTG涵 小雪 (TTGhan Xiaoxue)](https://s.weibo.com/weibo?q=%23TTG%E6%B6%B5%20%E5%B0%8F%E9%9B%AA%23) `56.8K 🔥` `-29%`
1. [九尾 无畏 (Kyuubi fearless)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%20%E6%97%A0%E7%95%8F%23) `50.0K 🔥` `-25%`

Updated at 2026-07-20 04:26:55

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
