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

1. [县委书记拒绝张雪为家乡打广告](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%8B%92%E7%BB%9D%E5%BC%A0%E9%9B%AA%E4%B8%BA%E5%AE%B6%E4%B9%A1%E6%89%93%E5%B9%BF%E5%91%8A%23) `1.4M 🔥` `NEW`
1. [全国总人口面临跌破14亿](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%80%BB%E4%BA%BA%E5%8F%A3%E9%9D%A2%E4%B8%B4%E8%B7%8C%E7%A0%B414%E4%BA%BF%23) `1.0M 🔥` `NEW`
1. [向英雄致敬迎英雄回家](https://s.weibo.com/weibo?q=%23%E5%90%91%E8%8B%B1%E9%9B%84%E8%87%B4%E6%95%AC%E8%BF%8E%E8%8B%B1%E9%9B%84%E5%9B%9E%E5%AE%B6%23) `945.1K 🔥` `NEW`
1. [深圳水贝被挤爆](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%B0%B4%E8%B4%9D%E8%A2%AB%E6%8C%A4%E7%88%86%23) `881.5K 🔥` `NEW`
1. [江苏姑娘网购鹤岗房搬进去后傻眼](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E5%A7%91%E5%A8%98%E7%BD%91%E8%B4%AD%E9%B9%A4%E5%B2%97%E6%88%BF%E6%90%AC%E8%BF%9B%E5%8E%BB%E5%90%8E%E5%82%BB%E7%9C%BC%23) `787.8K 🔥` `NEW`
1. [多名女性被发色情软件都接触过同一人](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E5%A5%B3%E6%80%A7%E8%A2%AB%E5%8F%91%E8%89%B2%E6%83%85%E8%BD%AF%E4%BB%B6%E9%83%BD%E6%8E%A5%E8%A7%A6%E8%BF%87%E5%90%8C%E4%B8%80%E4%BA%BA%23) `692.5K 🔥` `NEW`
1. [唐诡五六季一起拍80集](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%AF%A1%E4%BA%94%E5%85%AD%E5%AD%A3%E4%B8%80%E8%B5%B7%E6%8B%8D80%E9%9B%86%23) `555.1K 🔥` `NEW`
1. [高市早苗点名要看抹黑中国日剧](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E7%82%B9%E5%90%8D%E8%A6%81%E7%9C%8B%E6%8A%B9%E9%BB%91%E4%B8%AD%E5%9B%BD%E6%97%A5%E5%89%A7%23) `482.9K 🔥` `NEW`
1. [178平房改6个套间楼下邻居崩溃](https://s.weibo.com/weibo?q=%23178%E5%B9%B3%E6%88%BF%E6%94%B96%E4%B8%AA%E5%A5%97%E9%97%B4%E6%A5%BC%E4%B8%8B%E9%82%BB%E5%B1%85%E5%B4%A9%E6%BA%83%23) `321.7K 🔥` `NEW`
1. [2025年出生人口男孩多于女孩](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E5%87%BA%E7%94%9F%E4%BA%BA%E5%8F%A3%E7%94%B7%E5%AD%A9%E5%A4%9A%E4%BA%8E%E5%A5%B3%E5%AD%A9%23) `317.5K 🔥` `NEW`
1. [迪丽热巴全平台爆出圈](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%85%A8%E5%B9%B3%E5%8F%B0%E7%88%86%E5%87%BA%E5%9C%88%23) `316.6K 🔥` `NEW`
1. [香港中环偶遇虞书欣](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E4%B8%AD%E7%8E%AF%E5%81%B6%E9%81%87%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `314.7K 🔥` `NEW`
1. [日剧Vivant抹黑中国](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%89%A7Vivant%E6%8A%B9%E9%BB%91%E4%B8%AD%E5%9B%BD%23) `245.2K 🔥` `NEW`
1. [电诈分子盯上了医院](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%AF%88%E5%88%86%E5%AD%90%E7%9B%AF%E4%B8%8A%E4%BA%86%E5%8C%BB%E9%99%A2%23) `239.6K 🔥` `NEW`
1. [唐朝诡事录](https://s.weibo.com/weibo?q=%23%E5%94%90%E6%9C%9D%E8%AF%A1%E4%BA%8B%E5%BD%95%23) `233.3K 🔥` `NEW`
1. [花少8全员上车](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E5%85%A8%E5%91%98%E4%B8%8A%E8%BD%A6%23) `222.3K 🔥` `NEW`
1. [S16瑞士轮1-1组死亡之组出炉](https://s.weibo.com/weibo?q=%23S16%E7%91%9E%E5%A3%AB%E8%BD%AE1-1%E7%BB%84%E6%AD%BB%E4%BA%A1%E4%B9%8B%E7%BB%84%E5%87%BA%E7%82%89%23) `221.4K 🔥` `NEW`
1. [iPhoneDuo王者荣耀黑边](https://s.weibo.com/weibo?q=%23iPhoneDuo%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E9%BB%91%E8%BE%B9%23) `221.4K 🔥` `NEW`
1. [金饰价格跳水了](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E8%B7%B3%E6%B0%B4%E4%BA%86%23) `220.7K 🔥` `NEW`
1. [突然发财后卖房带父母去陌生城市](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E8%B4%A2%E5%90%8E%E5%8D%96%E6%88%BF%E5%B8%A6%E7%88%B6%E6%AF%8D%E5%8E%BB%E9%99%8C%E7%94%9F%E5%9F%8E%E5%B8%82%23) `220.6K 🔥` `NEW`
1. [刘学义 张予曦](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%20%E5%BC%A0%E4%BA%88%E6%9B%A6%23) `220.0K 🔥` `NEW`
1. [被猫砸死概率很小但不为零](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%8C%AB%E7%A0%B8%E6%AD%BB%E6%A6%82%E7%8E%87%E5%BE%88%E5%B0%8F%E4%BD%86%E4%B8%8D%E4%B8%BA%E9%9B%B6%23) `219.7K 🔥` `NEW`
1. [堺雅人遭抵制](https://s.weibo.com/weibo?q=%23%E5%A0%BA%E9%9B%85%E4%BA%BA%E9%81%AD%E6%8A%B5%E5%88%B6%23) `219.5K 🔥` `NEW`
1. [可拆卸胸垫有多反人类](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E6%8B%86%E5%8D%B8%E8%83%B8%E5%9E%AB%E6%9C%89%E5%A4%9A%E5%8F%8D%E4%BA%BA%E7%B1%BB%23) `218.8K 🔥` `NEW`
1. [王鹤棣说哥们的哥们也好得很疑似被剪](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%AF%B4%E5%93%A5%E4%BB%AC%E7%9A%84%E5%93%A5%E4%BB%AC%E4%B9%9F%E5%A5%BD%E5%BE%97%E5%BE%88%E7%96%91%E4%BC%BC%E8%A2%AB%E5%89%AA%23) `209.9K 🔥` `NEW`
1. [张雪刷新吉尼斯纪录](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%88%B7%E6%96%B0%E5%90%89%E5%B0%BC%E6%96%AF%E7%BA%AA%E5%BD%95%23) `203.7K 🔥` `NEW`
1. [李艺彤黄婷婷be原因](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%89%BA%E5%BD%A4%E9%BB%84%E5%A9%B7%E5%A9%B7be%E5%8E%9F%E5%9B%A0%23) `191.6K 🔥` `NEW`
1. [今天好好吃](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E5%A5%BD%E5%A5%BD%E5%90%83%23) `186.9K 🔥` `NEW`
1. [茉莉雨](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E9%9B%A8%23) `186.4K 🔥` `NEW`
1. [玉簟秋 咬脖吻](https://s.weibo.com/weibo?q=%23%E7%8E%89%E7%B0%9F%E7%A7%8B%20%E5%92%AC%E8%84%96%E5%90%BB%23) `184.7K 🔥` `NEW`
1. [迪丽热巴红毯同款粉底断货](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BA%A2%E6%AF%AF%E5%90%8C%E6%AC%BE%E7%B2%89%E5%BA%95%E6%96%AD%E8%B4%A7%23) `167.6K 🔥` `NEW`
1. [终于知道冰箱贴的受众是谁了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E5%86%B0%E7%AE%B1%E8%B4%B4%E7%9A%84%E5%8F%97%E4%BC%97%E6%98%AF%E8%B0%81%E4%BA%86%23) `166.4K 🔥` `NEW`
1. [惠英红张小斐杨幂 全场都被你们镇住](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E5%BC%A0%E5%B0%8F%E6%96%90%E6%9D%A8%E5%B9%82%20%E5%85%A8%E5%9C%BA%E9%83%BD%E8%A2%AB%E4%BD%A0%E4%BB%AC%E9%95%87%E4%BD%8F%23) `165.8K 🔥` `NEW`
1. [嫁金钗韩辽设计强娶魏娆](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E9%9F%A9%E8%BE%BD%E8%AE%BE%E8%AE%A1%E5%BC%BA%E5%A8%B6%E9%AD%8F%E5%A8%86%23) `161.2K 🔥` `NEW`
1. [蔡文静颈椎反弓导致全身不能动](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E9%A2%88%E6%A4%8E%E5%8F%8D%E5%BC%93%E5%AF%BC%E8%87%B4%E5%85%A8%E8%BA%AB%E4%B8%8D%E8%83%BD%E5%8A%A8%23) `158.0K 🔥` `NEW`
1. [明日方舟](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%23) `157.9K 🔥` `NEW`
1. [中国台湾博主劝大陆别优待台湾人](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8F%B0%E6%B9%BE%E5%8D%9A%E4%B8%BB%E5%8A%9D%E5%A4%A7%E9%99%86%E5%88%AB%E4%BC%98%E5%BE%85%E5%8F%B0%E6%B9%BE%E4%BA%BA%23) `146.0K 🔥` `NEW`
1. [李昀锐主动邀孟子义二搭](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%BB%E5%8A%A8%E9%82%80%E5%AD%9F%E5%AD%90%E4%B9%89%E4%BA%8C%E6%90%AD%23) `141.9K 🔥` `NEW`
1. [特别爱看互相装傻的聊天记录](https://s.weibo.com/weibo?q=%23%E7%89%B9%E5%88%AB%E7%88%B1%E7%9C%8B%E4%BA%92%E7%9B%B8%E8%A3%85%E5%82%BB%E7%9A%84%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `141.4K 🔥` `NEW`
1. [柯淳李柯以短剧顶流首搭](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E6%B7%B3%E6%9D%8E%E6%9F%AF%E4%BB%A5%E7%9F%AD%E5%89%A7%E9%A1%B6%E6%B5%81%E9%A6%96%E6%90%AD%23) `140.7K 🔥` `NEW`
1. [小城良方再闹叶文洁按按钮了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%86%8D%E9%97%B9%E5%8F%B6%E6%96%87%E6%B4%81%E6%8C%89%E6%8C%89%E9%92%AE%E4%BA%86%23) `138.3K 🔥` `NEW`
1. [虞书欣今天好好吃上班](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BB%8A%E5%A4%A9%E5%A5%BD%E5%A5%BD%E5%90%83%E4%B8%8A%E7%8F%AD%23) `137.0K 🔥` `NEW`
1. [张雪妻子骑4天摩托回麻阳加油](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%A6%BB%E5%AD%90%E9%AA%914%E5%A4%A9%E6%91%A9%E6%89%98%E5%9B%9E%E9%BA%BB%E9%98%B3%E5%8A%A0%E6%B2%B9%23) `134.7K 🔥` `NEW`
1. [VOGUE女艺人子弹时间](https://s.weibo.com/weibo?q=%23VOGUE%E5%A5%B3%E8%89%BA%E4%BA%BA%E5%AD%90%E5%BC%B9%E6%97%B6%E9%97%B4%23) `133.9K 🔥` `NEW`
1. [蔡天凤碎尸案化验师发声](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%A4%A9%E5%87%A4%E7%A2%8E%E5%B0%B8%E6%A1%88%E5%8C%96%E9%AA%8C%E5%B8%88%E5%8F%91%E5%A3%B0%23) `129.3K 🔥` `NEW`
1. [王腾谈iPhoneDuo破发](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E8%B0%88iPhoneDuo%E7%A0%B4%E5%8F%91%23) `128.5K 🔥` `NEW`
1. [双11上淘宝王者好物加倍值得](https://s.weibo.com/weibo?q=%23%E5%8F%8C11%E4%B8%8A%E6%B7%98%E5%AE%9D%E7%8E%8B%E8%80%85%E5%A5%BD%E7%89%A9%E5%8A%A0%E5%80%8D%E5%80%BC%E5%BE%97%23) `938.1K 🔥` `+965%`
1. [易梦玲回应瘦得夸张](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%A2%A6%E7%8E%B2%E5%9B%9E%E5%BA%94%E7%98%A6%E5%BE%97%E5%A4%B8%E5%BC%A0%23) `188.1K 🔥` `+32%`
1. [毛不易婚礼发言引网友争议](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E5%8F%91%E8%A8%80%E5%BC%95%E7%BD%91%E5%8F%8B%E4%BA%89%E8%AE%AE%23) `307.9K 🔥`
1. [李雪健已无法说话](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E5%81%A5%E5%B7%B2%E6%97%A0%E6%B3%95%E8%AF%B4%E8%AF%9D%23) `225.1K 🔥`
1. [这是中国台湾省](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E4%B8%AD%E5%9B%BD%E5%8F%B0%E6%B9%BE%E7%9C%81%23) `167.7K 🔥` `-39%`

Updated at 2026-10-25 14:54:28

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
