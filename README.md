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

1. [来不及说我爱你 (Too late to say I love you)](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E4%B8%8D%E5%8F%8A%E8%AF%B4%E6%88%91%E7%88%B1%E4%BD%A0%23) `1.1M 🔥` `NEW`
1. [澎湖海战 撤档](https://s.weibo.com/weibo?q=%23%E6%BE%8E%E6%B9%96%E6%B5%B7%E6%88%98%20%E6%92%A4%E6%A1%A3%23) `892.8K 🔥` `NEW`
1. [世界人工智能合作组织重要阶段性进展](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%90%88%E4%BD%9C%E7%BB%84%E7%BB%87%E9%87%8D%E8%A6%81%E9%98%B6%E6%AE%B5%E6%80%A7%E8%BF%9B%E5%B1%95%23) `790.2K 🔥` `NEW`
1. [回溯性嫉妒](https://s.weibo.com/weibo?q=%23%E5%9B%9E%E6%BA%AF%E6%80%A7%E5%AB%89%E5%A6%92%23) `768.7K 🔥` `NEW`
1. [陈靖可回应虞书欣化妆](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9D%96%E5%8F%AF%E5%9B%9E%E5%BA%94%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%8C%96%E5%A6%86%23) `626.6K 🔥` `NEW`
1. [曝Bin自己还没考虑清楚](https://s.weibo.com/weibo?q=%23%E6%9B%9DBin%E8%87%AA%E5%B7%B1%E8%BF%98%E6%B2%A1%E8%80%83%E8%99%91%E6%B8%85%E6%A5%9A%23) `503.4K 🔥` `NEW`
1. [天文台辟谣新疆阿勒泰惊现UFO](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%96%87%E5%8F%B0%E8%BE%9F%E8%B0%A3%E6%96%B0%E7%96%86%E9%98%BF%E5%8B%92%E6%B3%B0%E6%83%8A%E7%8E%B0UFO%23) `494.6K 🔥` `NEW`
1. [一诺 守约](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%20%E5%AE%88%E7%BA%A6%23) `448.3K 🔥` `NEW`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `434.6K 🔥` `NEW`
1. [马龙许昕男双冠军](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E7%94%B7%E5%8F%8C%E5%86%A0%E5%86%9B%23) `393.7K 🔥` `NEW`
1. [九尾 无畏 (Kyuubi fearless)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%20%E6%97%A0%E7%95%8F%23) `356.7K 🔥` `NEW`
1. [张子枫瘦成这样了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E7%98%A6%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `355.7K 🔥` `NEW`
1. [权志龙一下没看住怎么帅成这样了](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99%E4%B8%80%E4%B8%8B%E6%B2%A1%E7%9C%8B%E4%BD%8F%E6%80%8E%E4%B9%88%E5%B8%85%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `354.7K 🔥` `NEW`
1. [TTG涵 小雪](https://s.weibo.com/weibo?q=%23TTG%E6%B6%B5%20%E5%B0%8F%E9%9B%AA%23) `353.6K 🔥` `NEW`
1. [上海一盒马被淹](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%80%E7%9B%92%E9%A9%AC%E8%A2%AB%E6%B7%B9%23) `351.8K 🔥` `NEW`
1. [谁给代露娃做的妆造](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E4%BB%A3%E9%9C%B2%E5%A8%83%E5%81%9A%E7%9A%84%E5%A6%86%E9%80%A0%23) `351.2K 🔥` `NEW`
1. [现在能抄底A股吗](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E8%83%BD%E6%8A%84%E5%BA%95A%E8%82%A1%E5%90%97%23) `349.2K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `347.8K 🔥` `NEW`
1. [西班牙阿根廷预测](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%A2%84%E6%B5%8B%23) `347.4K 🔥` `NEW`
1. [全民共创TIFO刷新吉尼斯纪录](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%B0%91%E5%85%B1%E5%88%9BTIFO%E5%88%B7%E6%96%B0%E5%90%89%E5%B0%BC%E6%96%AF%E7%BA%AA%E5%BD%95%23) `346.0K 🔥` `NEW`
1. [蒙淇淇追着这一秒过火杀 (Meng Qiqi went too far chasing this second)](https://s.weibo.com/weibo?q=%23%E8%92%99%E6%B7%87%E6%B7%87%E8%BF%BD%E7%9D%80%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E6%9D%80%23) `344.3K 🔥` `NEW`
1. [王俊凯我该哭一下应景吗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%88%91%E8%AF%A5%E5%93%AD%E4%B8%80%E4%B8%8B%E5%BA%94%E6%99%AF%E5%90%97%23) `342.5K 🔥` `NEW`
1. [TTG让二追三AG](https://s.weibo.com/weibo?q=%23TTG%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89AG%23) `342.2K 🔥` `NEW`
1. [王橹杰这么敢说还要镜头不](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%BF%99%E4%B9%88%E6%95%A2%E8%AF%B4%E8%BF%98%E8%A6%81%E9%95%9C%E5%A4%B4%E4%B8%8D%23) `341.3K 🔥` `NEW`
1. [赵雨凡wvs](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E9%9B%A8%E5%87%A1wvs%23) `340.5K 🔥` `NEW`
1. [存钱过万一定要办理纸质存单](https://s.weibo.com/weibo?q=%23%E5%AD%98%E9%92%B1%E8%BF%87%E4%B8%87%E4%B8%80%E5%AE%9A%E8%A6%81%E5%8A%9E%E7%90%86%E7%BA%B8%E8%B4%A8%E5%AD%98%E5%8D%95%23) `336.6K 🔥` `NEW`
1. [王俊凯退场卡点失败](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%80%80%E5%9C%BA%E5%8D%A1%E7%82%B9%E5%A4%B1%E8%B4%A5%23) `335.7K 🔥` `NEW`
1. [功夫女足票房](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%23) `331.5K 🔥` `NEW`
1. [马来西亚宣布驱逐所有以色列人](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E5%AE%A3%E5%B8%83%E9%A9%B1%E9%80%90%E6%89%80%E6%9C%89%E4%BB%A5%E8%89%B2%E5%88%97%E4%BA%BA%23) `330.3K 🔥` `NEW`
1. [这样的葡萄别买](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E7%9A%84%E8%91%A1%E8%90%84%E5%88%AB%E4%B9%B0%23) `324.5K 🔥` `NEW`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `318.2K 🔥` `NEW`
1. [律师解读女孩诬告父亲性侵案](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%A7%A3%E8%AF%BB%E5%A5%B3%E5%AD%A9%E8%AF%AC%E5%91%8A%E7%88%B6%E4%BA%B2%E6%80%A7%E4%BE%B5%E6%A1%88%23) `310.9K 🔥` `NEW`
1. [麦琳瘦了后变化好大](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E7%90%B3%E7%98%A6%E4%BA%86%E5%90%8E%E5%8F%98%E5%8C%96%E5%A5%BD%E5%A4%A7%23) `305.7K 🔥` `NEW`
1. [这一秒过火台词好搞笑](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%8F%B0%E8%AF%8D%E5%A5%BD%E6%90%9E%E7%AC%91%23) `302.8K 🔥` `NEW`
1. [莎头 集齐金银铜](https://s.weibo.com/weibo?q=%23%E8%8E%8E%E5%A4%B4%20%E9%9B%86%E9%BD%90%E9%87%91%E9%93%B6%E9%93%9C%23) `294.2K 🔥` `NEW`
1. [丁禹兮忙了一天打开手机天塌了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%BF%99%E4%BA%86%E4%B8%80%E5%A4%A9%E6%89%93%E5%BC%80%E6%89%8B%E6%9C%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `292.7K 🔥` `NEW`
1. [苏醒穿阿根廷球衣支持西班牙](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E7%A9%BF%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E8%A1%A3%E6%94%AF%E6%8C%81%E8%A5%BF%E7%8F%AD%E7%89%99%23) `241.0K 🔥` `NEW`
1. [AG对战TTG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98TTG%23) `227.3K 🔥` `NEW`
1. [这一秒过火强吻好尬](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%BC%BA%E5%90%BB%E5%A5%BD%E5%B0%AC%23) `226.3K 🔥` `NEW`
1. [穆祉丞哭了](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%93%AD%E4%BA%86%23) `225.0K 🔥` `NEW`
1. [外网热议中国KFC卖炸鸡西瓜 (Internet hotly discusses China’s KFC selling fried chicken and watermelon)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E7%83%AD%E8%AE%AE%E4%B8%AD%E5%9B%BDKFC%E5%8D%96%E7%82%B8%E9%B8%A1%E8%A5%BF%E7%93%9C%23) `206.9K 🔥` `NEW`
1. [王一博你让多少人脸红了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%BD%A0%E8%AE%A9%E5%A4%9A%E5%B0%91%E4%BA%BA%E8%84%B8%E7%BA%A2%E4%BA%86%23) `205.2K 🔥` `NEW`
1. [功夫女足年度票房第三了](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E5%B9%B4%E5%BA%A6%E7%A5%A8%E6%88%BF%E7%AC%AC%E4%B8%89%E4%BA%86%23) `197.5K 🔥` `NEW`
1. [一诺达成900胜局](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E8%BE%BE%E6%88%90900%E8%83%9C%E5%B1%80%23) `193.6K 🔥` `NEW`
1. [上海突发强雷暴](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%AA%81%E5%8F%91%E5%BC%BA%E9%9B%B7%E6%9A%B4%23) `176.0K 🔥` `NEW`
1. [haerin机场图](https://s.weibo.com/weibo?q=%23haerin%E6%9C%BA%E5%9C%BA%E5%9B%BE%23) `168.5K 🔥` `NEW`
1. [因交通事故打官司被大厂取消录用](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%BA%A4%E9%80%9A%E4%BA%8B%E6%95%85%E6%89%93%E5%AE%98%E5%8F%B8%E8%A2%AB%E5%A4%A7%E5%8E%82%E5%8F%96%E6%B6%88%E5%BD%95%E7%94%A8%23) `164.8K 🔥` `NEW`
1. [72岁演员刘德凯近况](https://s.weibo.com/weibo?q=%2372%E5%B2%81%E6%BC%94%E5%91%98%E5%88%98%E5%BE%B7%E5%87%AF%E8%BF%91%E5%86%B5%23) `164.2K 🔥` `NEW`
1. [中国四大头部大模型创始人](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9B%9B%E5%A4%A7%E5%A4%B4%E9%83%A8%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%88%9B%E5%A7%8B%E4%BA%BA%23) `159.4K 🔥` `NEW`
1. [高市早苗内阁不支持率超过支持率](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%86%85%E9%98%81%E4%B8%8D%E6%94%AF%E6%8C%81%E7%8E%87%E8%B6%85%E8%BF%87%E6%94%AF%E6%8C%81%E7%8E%87%23) `158.9K 🔥` `NEW`
1. [曺圭贤网红古风女装写真 (Photos of Jo Kyuhyun, Internet celebrity in ancient style women's clothing)](https://s.weibo.com/weibo?q=%23%E6%9B%BA%E5%9C%AD%E8%B4%A4%E7%BD%91%E7%BA%A2%E5%8F%A4%E9%A3%8E%E5%A5%B3%E8%A3%85%E5%86%99%E7%9C%9F%23) `158.8K 🔥` `NEW`

Updated at 2026-07-20 00:13:30

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
