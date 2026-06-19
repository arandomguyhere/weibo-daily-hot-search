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

1. [深圳机场 sorry (shenzhen airport sorry)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%9C%BA%E5%9C%BA%20sorry%23) `1.2M 🔥` `NEW`
1. [孙杨拿到最后一张决赛门票](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E6%8B%BF%E5%88%B0%E6%9C%80%E5%90%8E%E4%B8%80%E5%BC%A0%E5%86%B3%E8%B5%9B%E9%97%A8%E7%A5%A8%23) `826.3K 🔥` `NEW`
1. [纸尿裤 检测设备](https://s.weibo.com/weibo?q=%23%E7%BA%B8%E5%B0%BF%E8%A3%A4%20%E6%A3%80%E6%B5%8B%E8%AE%BE%E5%A4%87%23) `595.0K 🔥` `NEW`
1. [KPL 解说](https://s.weibo.com/weibo?q=%23KPL%20%E8%A7%A3%E8%AF%B4%23) `571.3K 🔥` `NEW`
1. [浪姐直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `551.0K 🔥` `NEW`
1. [吃鸡给我吃好的呀](https://s.weibo.com/weibo?q=%23%E5%90%83%E9%B8%A1%E7%BB%99%E6%88%91%E5%90%83%E5%A5%BD%E7%9A%84%E5%91%80%23) `551.0K 🔥` `NEW`
1. [男生有大事之前先别理发](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%9C%89%E5%A4%A7%E4%BA%8B%E4%B9%8B%E5%89%8D%E5%85%88%E5%88%AB%E7%90%86%E5%8F%91%23) `550.4K 🔥` `NEW`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `546.7K 🔥` `NEW`
1. [直观感受到了气质的重要性](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E8%A7%82%E6%84%9F%E5%8F%97%E5%88%B0%E4%BA%86%E6%B0%94%E8%B4%A8%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7%23) `458.3K 🔥` `NEW`
1. [歌手直播](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%23) `457.6K 🔥` `NEW`
1. [小马云要当爸爸了 (Little Ma Yun is going to be a father)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%A9%AC%E4%BA%91%E8%A6%81%E5%BD%93%E7%88%B8%E7%88%B8%E4%BA%86%23) `455.5K 🔥` `NEW`
1. [邓超 签名接力](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%20%E7%AD%BE%E5%90%8D%E6%8E%A5%E5%8A%9B%23) `452.6K 🔥` `NEW`
1. [黄子韬方道歉](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%96%B9%E9%81%93%E6%AD%89%23) `450.6K 🔥` `NEW`
1. [C罗球迷攻陷内维斯女友社媒](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%90%83%E8%BF%B7%E6%94%BB%E9%99%B7%E5%86%85%E7%BB%B4%E6%96%AF%E5%A5%B3%E5%8F%8B%E7%A4%BE%E5%AA%92%23) `447.2K 🔥` `NEW`
1. [鞠婧祎脸快比粽子小了](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%84%B8%E5%BF%AB%E6%AF%94%E7%B2%BD%E5%AD%90%E5%B0%8F%E4%BA%86%23) `444.5K 🔥` `NEW`
1. [桑葚和桑树活在地球是有点屈才了](https://s.weibo.com/weibo?q=%23%E6%A1%91%E8%91%9A%E5%92%8C%E6%A1%91%E6%A0%91%E6%B4%BB%E5%9C%A8%E5%9C%B0%E7%90%83%E6%98%AF%E6%9C%89%E7%82%B9%E5%B1%88%E6%89%8D%E4%BA%86%23) `444.0K 🔥` `NEW`
1. [对澳大利亚进口牛肉加征55%关税](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E8%BF%9B%E5%8F%A3%E7%89%9B%E8%82%89%E5%8A%A0%E5%BE%8155%25%E5%85%B3%E7%A8%8E%23) `440.9K 🔥` `NEW`
1. [时代峰峻卖TFBOYS十周年联名T恤](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%8D%96TFBOYS%E5%8D%81%E5%91%A8%E5%B9%B4%E8%81%94%E5%90%8DT%E6%81%A4%23) `439.8K 🔥` `NEW`
1. [20周年版iPhone被曝独享台积电制程](https://s.weibo.com/weibo?q=%2320%E5%91%A8%E5%B9%B4%E7%89%88iPhone%E8%A2%AB%E6%9B%9D%E7%8B%AC%E4%BA%AB%E5%8F%B0%E7%A7%AF%E7%94%B5%E5%88%B6%E7%A8%8B%23) `436.0K 🔥` `NEW`
1. [男子花38万娶媳妇仅29天人财两空](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%8A%B138%E4%B8%87%E5%A8%B6%E5%AA%B3%E5%A6%87%E4%BB%8529%E5%A4%A9%E4%BA%BA%E8%B4%A2%E4%B8%A4%E7%A9%BA%23) `434.2K 🔥` `NEW`
1. [卡布里蓝是什么味道 (What does capri blue taste like?)](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E5%B8%83%E9%87%8C%E8%93%9D%E6%98%AF%E4%BB%80%E4%B9%88%E5%91%B3%E9%81%93%23) `433.2K 🔥` `NEW`
1. [表妹万福海报宋祖儿真名](https://s.weibo.com/weibo?q=%23%E8%A1%A8%E5%A6%B9%E4%B8%87%E7%A6%8F%E6%B5%B7%E6%8A%A5%E5%AE%8B%E7%A5%96%E5%84%BF%E7%9C%9F%E5%90%8D%23) `430.4K 🔥` `NEW`
1. [周冬雨在金鸡奖念稿式颁奖](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%E5%9C%A8%E9%87%91%E9%B8%A1%E5%A5%96%E5%BF%B5%E7%A8%BF%E5%BC%8F%E9%A2%81%E5%A5%96%23) `429.0K 🔥` `NEW`
1. [LGDNBW律师函](https://s.weibo.com/weibo?q=%23LGDNBW%E5%BE%8B%E5%B8%88%E5%87%BD%23) `426.8K 🔥` `NEW`
1. [刘丹曝刘恺威李晓峰分手](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%B9%E6%9B%9D%E5%88%98%E6%81%BA%E5%A8%81%E6%9D%8E%E6%99%93%E5%B3%B0%E5%88%86%E6%89%8B%23) `422.4K 🔥` `NEW`
1. [中国造纸学会称在售纸尿裤安全可控](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%80%A0%E7%BA%B8%E5%AD%A6%E4%BC%9A%E7%A7%B0%E5%9C%A8%E5%94%AE%E7%BA%B8%E5%B0%BF%E8%A3%A4%E5%AE%89%E5%85%A8%E5%8F%AF%E6%8E%A7%23) `419.9K 🔥` `NEW`
1. [黄灿灿今天我将不会露出笑容](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E4%BB%8A%E5%A4%A9%E6%88%91%E5%B0%86%E4%B8%8D%E4%BC%9A%E9%9C%B2%E5%87%BA%E7%AC%91%E5%AE%B9%23) `416.7K 🔥` `NEW`
1. [曾沛慈粉丝 亲爱的华研](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E7%B2%89%E4%B8%9D%20%E4%BA%B2%E7%88%B1%E7%9A%84%E5%8D%8E%E7%A0%94%23) `413.7K 🔥` `NEW`
1. [原来读书真的会影响潜意识](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%AF%BB%E4%B9%A6%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%BD%B1%E5%93%8D%E6%BD%9C%E6%84%8F%E8%AF%86%23) `412.2K 🔥` `NEW`
1. [李现被聘为世界杯开球嘉宾](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E8%A2%AB%E8%81%98%E4%B8%BA%E4%B8%96%E7%95%8C%E6%9D%AF%E5%BC%80%E7%90%83%E5%98%89%E5%AE%BE%23) `411.1K 🔥` `NEW`
1. [周大福老凤祥老庙金价又跌了 (Gold prices at Chow Tai Fook Lao Feng Xiang Temple fell again)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%A4%A7%E7%A6%8F%E8%80%81%E5%87%A4%E7%A5%A5%E8%80%81%E5%BA%99%E9%87%91%E4%BB%B7%E5%8F%88%E8%B7%8C%E4%BA%86%23) `407.7K 🔥` `NEW`
1. [周冬雨话剧口碑反转](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%E8%AF%9D%E5%89%A7%E5%8F%A3%E7%A2%91%E5%8F%8D%E8%BD%AC%23) `404.1K 🔥` `NEW`
1. [浪姐](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `399.0K 🔥` `NEW`
1. [宋威龙到釜山了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%88%B0%E9%87%9C%E5%B1%B1%E4%BA%86%23) `396.3K 🔥` `NEW`
1. [胡歌和媳妇都想和冯小刚再合作](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E5%92%8C%E5%AA%B3%E5%A6%87%E9%83%BD%E6%83%B3%E5%92%8C%E5%86%AF%E5%B0%8F%E5%88%9A%E5%86%8D%E5%90%88%E4%BD%9C%23) `394.8K 🔥` `NEW`
1. [伽罗星典藏皮肤](https://s.weibo.com/weibo?q=%23%E4%BC%BD%E7%BD%97%E6%98%9F%E5%85%B8%E8%97%8F%E7%9A%AE%E8%82%A4%23) `392.5K 🔥` `NEW`
1. [半裸救人被质疑厨师无需自证清白](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E8%A3%B8%E6%95%91%E4%BA%BA%E8%A2%AB%E8%B4%A8%E7%96%91%E5%8E%A8%E5%B8%88%E6%97%A0%E9%9C%80%E8%87%AA%E8%AF%81%E6%B8%85%E7%99%BD%23) `389.8K 🔥` `NEW`
1. [王俊凯说这是中餐厅不是花少](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%AF%B4%E8%BF%99%E6%98%AF%E4%B8%AD%E9%A4%90%E5%8E%85%E4%B8%8D%E6%98%AF%E8%8A%B1%E5%B0%91%23) `389.1K 🔥` `NEW`
1. [陈都灵被榴莲馅粽子打了](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E8%A2%AB%E6%A6%B4%E8%8E%B2%E9%A6%85%E7%B2%BD%E5%AD%90%E6%89%93%E4%BA%86%23) `386.3K 🔥` `NEW`
1. [中国造纸学会回应纸尿裤事件](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%80%A0%E7%BA%B8%E5%AD%A6%E4%BC%9A%E5%9B%9E%E5%BA%94%E7%BA%B8%E5%B0%BF%E8%A3%A4%E4%BA%8B%E4%BB%B6%23) `384.9K 🔥` `NEW`
1. [关晓彤逆天比例 (Guan Xiaotong's incredible proportions)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E9%80%86%E5%A4%A9%E6%AF%94%E4%BE%8B%23) `379.1K 🔥` `NEW`
1. [哈尔滨 最尊重端午节的城市](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%20%E6%9C%80%E5%B0%8A%E9%87%8D%E7%AB%AF%E5%8D%88%E8%8A%82%E7%9A%84%E5%9F%8E%E5%B8%82%23) `377.8K 🔥` `NEW`
1. [韩国股市大涨后跳水](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E5%B8%82%E5%A4%A7%E6%B6%A8%E5%90%8E%E8%B7%B3%E6%B0%B4%23) `376.0K 🔥` `NEW`
1. [如果短剧演员也用真名](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E7%9F%AD%E5%89%A7%E6%BC%94%E5%91%98%E4%B9%9F%E7%94%A8%E7%9C%9F%E5%90%8D%23) `373.7K 🔥` `NEW`
1. [黄灿灿造型幻视宋雨琦](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E9%80%A0%E5%9E%8B%E5%B9%BB%E8%A7%86%E5%AE%8B%E9%9B%A8%E7%90%A6%23) `371.5K 🔥` `NEW`
1. [韩国男团嘲讽孙兴慜](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%94%B7%E5%9B%A2%E5%98%B2%E8%AE%BD%E5%AD%99%E5%85%B4%E6%85%9C%23) `453.3K 🔥` `+21%`
1. [中国大模型技术三大主线](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%A7%E6%A8%A1%E5%9E%8B%E6%8A%80%E6%9C%AF%E4%B8%89%E5%A4%A7%E4%B8%BB%E7%BA%BF%23) `420.7K 🔥` `+106%`
1. [文化中国行看端午仪式感](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%8C%96%E4%B8%AD%E5%9B%BD%E8%A1%8C%E7%9C%8B%E7%AB%AF%E5%8D%88%E4%BB%AA%E5%BC%8F%E6%84%9F%23) `690.8K 🔥`
1. [警方通报黄子韬违停 (Police notified Huang Zitao of illegal parking)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E9%BB%84%E5%AD%90%E9%9F%AC%E8%BF%9D%E5%81%9C%23) `405.5K 🔥` `-65%`
1. [婴儿体内测出甲酰胺内容已搜不到](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E4%BD%93%E5%86%85%E6%B5%8B%E5%87%BA%E7%94%B2%E9%85%B0%E8%83%BA%E5%86%85%E5%AE%B9%E5%B7%B2%E6%90%9C%E4%B8%8D%E5%88%B0%23) `402.3K 🔥` `-31%`
1. [张凌赫吃粽子蘸白糖](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%83%E7%B2%BD%E5%AD%90%E8%98%B8%E7%99%BD%E7%B3%96%23) `380.7K 🔥` `-33%`

Updated at 2026-06-19 19:46:15

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
