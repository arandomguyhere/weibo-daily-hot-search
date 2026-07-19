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

1. [阿根廷世界杯决赛首发 (Argentina World Cup final starter)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E9%A6%96%E5%8F%91%23) `291.8K 🔥` `NEW`
1. [樊振东资深球迷实锤了](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%B5%84%E6%B7%B1%E7%90%83%E8%BF%B7%E5%AE%9E%E9%94%A4%E4%BA%86%23) `116.6K 🔥` `NEW`
1. [西班牙阿根廷 吓醒我](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E5%90%93%E9%86%92%E6%88%91%23) `115.0K 🔥` `NEW`
1. [西班牙决赛首发](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%86%B3%E8%B5%9B%E9%A6%96%E5%8F%91%23) `114.6K 🔥` `NEW`
1. [这一秒过火路透正片对比](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E8%B7%AF%E9%80%8F%E6%AD%A3%E7%89%87%E5%AF%B9%E6%AF%94%23) `55.8K 🔥` `NEW`
1. [世界杯决赛判罚尺度](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E5%88%A4%E7%BD%9A%E5%B0%BA%E5%BA%A6%23) `50.2K 🔥` `NEW`
1. [建议高温天气就别出门了](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E9%AB%98%E6%B8%A9%E5%A4%A9%E6%B0%94%E5%B0%B1%E5%88%AB%E5%87%BA%E9%97%A8%E4%BA%86%23) `50.2K 🔥` `NEW`
1. [西班牙阿根廷决赛首发阵容](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%86%B3%E8%B5%9B%E9%A6%96%E5%8F%91%E9%98%B5%E5%AE%B9%23) `50.2K 🔥` `NEW`
1. [亚马尔连续造险](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E8%BF%9E%E7%BB%AD%E9%80%A0%E9%99%A9%23) `50.2K 🔥` `NEW`
1. [西班牙vs阿根廷 (Spain vs Argentina)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99vs%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `3.5M 🔥` `+1745%`
1. [世界人工智能合作组织重要阶段性进展](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%90%88%E4%BD%9C%E7%BB%84%E7%BB%87%E9%87%8D%E8%A6%81%E9%98%B6%E6%AE%B5%E6%80%A7%E8%BF%9B%E5%B1%95%23) `543.5K 🔥` `+41%`
1. [樊振东展望世界杯决赛 (Fan Zhendong looks forward to the World Cup finals)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%B1%95%E6%9C%9B%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `260.3K 🔥` `+108%`
1. [现在的女装有种大家都不用上班的感觉](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%A5%B3%E8%A3%85%E6%9C%89%E7%A7%8D%E5%A4%A7%E5%AE%B6%E9%83%BD%E4%B8%8D%E7%94%A8%E4%B8%8A%E7%8F%AD%E7%9A%84%E6%84%9F%E8%A7%89%23) `682.4K 🔥`
1. [再诱人也别碰的十大街边小吃](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%AF%B1%E4%BA%BA%E4%B9%9F%E5%88%AB%E7%A2%B0%E7%9A%84%E5%8D%81%E5%A4%A7%E8%A1%97%E8%BE%B9%E5%B0%8F%E5%90%83%23) `149.0K 🔥`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `114.0K 🔥`
1. [男子闪婚后发现妻子吸毒坐牢患梅毒](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%97%AA%E5%A9%9A%E5%90%8E%E5%8F%91%E7%8E%B0%E5%A6%BB%E5%AD%90%E5%90%B8%E6%AF%92%E5%9D%90%E7%89%A2%E6%82%A3%E6%A2%85%E6%AF%92%23) `113.2K 🔥`
1. [很诡异公司的每个女性都在减肥](https://s.weibo.com/weibo?q=%23%E5%BE%88%E8%AF%A1%E5%BC%82%E5%85%AC%E5%8F%B8%E7%9A%84%E6%AF%8F%E4%B8%AA%E5%A5%B3%E6%80%A7%E9%83%BD%E5%9C%A8%E5%87%8F%E8%82%A5%23) `113.2K 🔥`
1. [澎湖海战 撤档](https://s.weibo.com/weibo?q=%23%E6%BE%8E%E6%B9%96%E6%B5%B7%E6%88%98%20%E6%92%A4%E6%A1%A3%23) `153.8K 🔥` `-50%`
1. [劝告大家聊天记录真不能删除 (I advise you not to delete chat history.)](https://s.weibo.com/weibo?q=%23%E5%8A%9D%E5%91%8A%E5%A4%A7%E5%AE%B6%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E7%9C%9F%E4%B8%8D%E8%83%BD%E5%88%A0%E9%99%A4%23) `114.3K 🔥` `-95%`
1. [来不及说我爱你 (Too late to say I love you)](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E4%B8%8D%E5%8F%8A%E8%AF%B4%E6%88%91%E7%88%B1%E4%BD%A0%23) `91.2K 🔥` `-35%`
1. [西班牙阿根廷预测](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%A2%84%E6%B5%8B%23) `84.9K 🔥` `-32%`
1. [TTG涵 小雪 (TTGhan Xiaoxue)](https://s.weibo.com/weibo?q=%23TTG%E6%B6%B5%20%E5%B0%8F%E9%9B%AA%23) `80.4K 🔥` `-57%`
1. [蔡依林唱心引力送给王俊凯](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%94%B1%E5%BF%83%E5%BC%95%E5%8A%9B%E9%80%81%E7%BB%99%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `80.2K 🔥` `-57%`
1. [一诺 守约](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%20%E5%AE%88%E7%BA%A6%23) `69.3K 🔥` `-52%`
1. [九尾 无畏 (Kyuubi fearless)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%20%E6%97%A0%E7%95%8F%23) `66.4K 🔥` `-47%`
1. [为什么不上班反而低精力 (Why does not going to work make you less energetic?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E4%B8%8A%E7%8F%AD%E5%8F%8D%E8%80%8C%E4%BD%8E%E7%B2%BE%E5%8A%9B%23) `66.0K 🔥` `-47%`
1. [王源演唱会上座率](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `59.3K 🔥` `-53%`
1. [曝Bin自己还没考虑清楚 (It was revealed that Bin himself hadn’t thought it through yet.)](https://s.weibo.com/weibo?q=%23%E6%9B%9DBin%E8%87%AA%E5%B7%B1%E8%BF%98%E6%B2%A1%E8%80%83%E8%99%91%E6%B8%85%E6%A5%9A%23) `57.0K 🔥` `-58%`
1. [王俊凯我该哭一下应景吗 (Wang Junkai: Should I cry for the occasion?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%88%91%E8%AF%A5%E5%93%AD%E4%B8%80%E4%B8%8B%E5%BA%94%E6%99%AF%E5%90%97%23) `55.3K 🔥` `-56%`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `54.0K 🔥` `-57%`
1. [陈靖可回应虞书欣化妆](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9D%96%E5%8F%AF%E5%9B%9E%E5%BA%94%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%8C%96%E5%A6%86%23) `52.1K 🔥` `-58%`
1. [蒙淇淇追着这一秒过火杀 (Meng Qiqi went too far chasing this second)](https://s.weibo.com/weibo?q=%23%E8%92%99%E6%B7%87%E6%B7%87%E8%BF%BD%E7%9D%80%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E6%9D%80%23) `50.5K 🔥` `-60%`
1. [马龙许昕男双冠军](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E7%94%B7%E5%8F%8C%E5%86%A0%E5%86%9B%23) `50.2K 🔥` `-60%`
1. [你觉醒了不要向任何人透露](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%A7%89%E9%86%92%E4%BA%86%E4%B8%8D%E8%A6%81%E5%90%91%E4%BB%BB%E4%BD%95%E4%BA%BA%E9%80%8F%E9%9C%B2%23) `50.2K 🔥` `-60%`
1. [丁禹兮忙了一天打开手机天塌了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%BF%99%E4%BA%86%E4%B8%80%E5%A4%A9%E6%89%93%E5%BC%80%E6%89%8B%E6%9C%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `50.2K 🔥` `-60%`
1. [回溯性嫉妒](https://s.weibo.com/weibo?q=%23%E5%9B%9E%E6%BA%AF%E6%80%A7%E5%AB%89%E5%A6%92%23) `50.2K 🔥` `-60%`
1. [外网热议中国KFC卖炸鸡西瓜 (Internet hotly discusses China’s KFC selling fried chicken and watermelon)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E7%83%AD%E8%AE%AE%E4%B8%AD%E5%9B%BDKFC%E5%8D%96%E7%82%B8%E9%B8%A1%E8%A5%BF%E7%93%9C%23) `50.2K 🔥` `-60%`
1. [上海一盒马被淹](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%80%E7%9B%92%E9%A9%AC%E8%A2%AB%E6%B7%B9%23) `50.2K 🔥` `-60%`
1. [在家除了没钱和无聊真的挺爽](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%AE%B6%E9%99%A4%E4%BA%86%E6%B2%A1%E9%92%B1%E5%92%8C%E6%97%A0%E8%81%8A%E7%9C%9F%E7%9A%84%E6%8C%BA%E7%88%BD%23) `50.2K 🔥` `-60%`
1. [狗狗被抱都会摆出理所当然的表情 (Dogs will show a natural expression when being hugged)](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E8%A2%AB%E6%8A%B1%E9%83%BD%E4%BC%9A%E6%91%86%E5%87%BA%E7%90%86%E6%89%80%E5%BD%93%E7%84%B6%E7%9A%84%E8%A1%A8%E6%83%85%23) `50.1K 🔥` `-60%`
1. [功夫女足年度票房第三了 (Kung Fu Women ranks third at the annual box office)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E5%B9%B4%E5%BA%A6%E7%A5%A8%E6%88%BF%E7%AC%AC%E4%B8%89%E4%BA%86%23) `50.1K 🔥` `-60%`
1. [一个关于爱情和救赎的残酷真相 (A cruel truth about love and redemption)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E5%85%B3%E4%BA%8E%E7%88%B1%E6%83%85%E5%92%8C%E6%95%91%E8%B5%8E%E7%9A%84%E6%AE%8B%E9%85%B7%E7%9C%9F%E7%9B%B8%23) `50.1K 🔥` `-60%`
1. [百花杀 副cp](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%20%E5%89%AFcp%23) `50.1K 🔥` `-60%`
1. [许昕说俩孩子都不看他比赛](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E8%AF%B4%E4%BF%A9%E5%AD%A9%E5%AD%90%E9%83%BD%E4%B8%8D%E7%9C%8B%E4%BB%96%E6%AF%94%E8%B5%9B%23) `50.1K 🔥` `-60%`
1. [中国机器人现在有多疯狂](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%8E%B0%E5%9C%A8%E6%9C%89%E5%A4%9A%E7%96%AF%E7%8B%82%23) `50.1K 🔥` `-73%`
1. [莎头 集齐金银铜 (Sha Tou Collect all the gold, silver and copper)](https://s.weibo.com/weibo?q=%23%E8%8E%8E%E5%A4%B4%20%E9%9B%86%E9%BD%90%E9%87%91%E9%93%B6%E9%93%9C%23) `50.1K 🔥` `-60%`
1. [邓亚萍说国乒小将要好好想办法 (Deng Yaping said that the young national table tennis player must think of a solution)](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E8%AF%B4%E5%9B%BD%E4%B9%92%E5%B0%8F%E5%B0%86%E8%A6%81%E5%A5%BD%E5%A5%BD%E6%83%B3%E5%8A%9E%E6%B3%95%23) `50.1K 🔥` `-60%`
1. [功夫女足票房](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%23) `50.1K 🔥` `-60%`
1. [TTG让二追三AG](https://s.weibo.com/weibo?q=%23TTG%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89AG%23) `50.1K 🔥` `-60%`
1. [马龙赛后发微博](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%B5%9B%E5%90%8E%E5%8F%91%E5%BE%AE%E5%8D%9A%23) `50.1K 🔥` `-60%`

Updated at 2026-07-20 03:34:40

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
