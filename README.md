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

1. [孙颖莎黄牌 (Sun Yingsha yellow card)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%BB%84%E7%89%8C%23) `1.1M 🔥` `NEW`
1. [孙颖莎不是我的分我坚决不要](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%8D%E6%98%AF%E6%88%91%E7%9A%84%E5%88%86%E6%88%91%E5%9D%9A%E5%86%B3%E4%B8%8D%E8%A6%81%23) `812.9K 🔥` `NEW`
1. [春节假期多项数据创历史新高](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E5%81%87%E6%9C%9F%E5%A4%9A%E9%A1%B9%E6%95%B0%E6%8D%AE%E5%88%9B%E5%8E%86%E5%8F%B2%E6%96%B0%E9%AB%98%23) `626.6K 🔥` `NEW`
1. [女子在胖东来1小时消费15万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E8%83%96%E4%B8%9C%E6%9D%A51%E5%B0%8F%E6%97%B6%E6%B6%88%E8%B4%B915%E4%B8%87%23) `408.0K 🔥` `NEW`
1. [福建喊话回归台湾回复收到](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E5%96%8A%E8%AF%9D%E5%9B%9E%E5%BD%92%E5%8F%B0%E6%B9%BE%E5%9B%9E%E5%A4%8D%E6%94%B6%E5%88%B0%23) `407.7K 🔥` `NEW`
1. [金价高的已经推出红绳戒指了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%AB%98%E7%9A%84%E5%B7%B2%E7%BB%8F%E6%8E%A8%E5%87%BA%E7%BA%A2%E7%BB%B3%E6%88%92%E6%8C%87%E4%BA%86%23) `404.2K 🔥` `NEW`
1. [谷爱凌在美国遭大规模网暴](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9C%A8%E7%BE%8E%E5%9B%BD%E9%81%AD%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%BD%91%E6%9A%B4%23) `402.0K 🔥` `NEW`
1. [偏偏宠爱女主](https://s.weibo.com/weibo?q=%23%E5%81%8F%E5%81%8F%E5%AE%A0%E7%88%B1%E5%A5%B3%E4%B8%BB%23) `388.9K 🔥` `NEW`
1. [19岁女生因经济舱综合征心脏骤停](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E5%A5%B3%E7%94%9F%E5%9B%A0%E7%BB%8F%E6%B5%8E%E8%88%B1%E7%BB%BC%E5%90%88%E5%BE%81%E5%BF%83%E8%84%8F%E9%AA%A4%E5%81%9C%23) `376.6K 🔥` `NEW`
1. [王橹杰壁纸](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%A3%81%E7%BA%B8%23) `303.1K 🔥` `NEW`
1. [魅族 (Meizu)](https://s.weibo.com/weibo?q=%23%E9%AD%85%E6%97%8F%23) `292.4K 🔥` `NEW`
1. [官方通报游客打车9折让司机贴钱](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%B8%B8%E5%AE%A2%E6%89%93%E8%BD%A69%E6%8A%98%E8%AE%A9%E5%8F%B8%E6%9C%BA%E8%B4%B4%E9%92%B1%23) `287.7K 🔥` `NEW`
1. [刘晓庆短剧吻戏](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E5%BA%86%E7%9F%AD%E5%89%A7%E5%90%BB%E6%88%8F%23) `287.2K 🔥` `NEW`
1. [尘白禁区 中国邮政](https://s.weibo.com/weibo?q=%23%E5%B0%98%E7%99%BD%E7%A6%81%E5%8C%BA%20%E4%B8%AD%E5%9B%BD%E9%82%AE%E6%94%BF%23) `285.7K 🔥` `NEW`
1. [魅族手机3月正式退市](https://s.weibo.com/weibo?q=%23%E9%AD%85%E6%97%8F%E6%89%8B%E6%9C%BA3%E6%9C%88%E6%AD%A3%E5%BC%8F%E9%80%80%E5%B8%82%23) `248.9K 🔥` `NEW`
1. [白鹿忘记自己会说韩语了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BF%98%E8%AE%B0%E8%87%AA%E5%B7%B1%E4%BC%9A%E8%AF%B4%E9%9F%A9%E8%AF%AD%E4%BA%86%23) `235.0K 🔥` `NEW`
1. [半夜候补1700元旅客没在12306购票](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%A4%9C%E5%80%99%E8%A1%A51700%E5%85%83%E6%97%85%E5%AE%A2%E6%B2%A1%E5%9C%A812306%E8%B4%AD%E7%A5%A8%23) `228.1K 🔥` `NEW`
1. [失踪20多年母亲被砌进花坛](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E8%B8%AA20%E5%A4%9A%E5%B9%B4%E6%AF%8D%E4%BA%B2%E8%A2%AB%E7%A0%8C%E8%BF%9B%E8%8A%B1%E5%9D%9B%23) `227.6K 🔥` `NEW`
1. [拍谢娜双胞胎儿女的狗仔涉嫌违法](https://s.weibo.com/weibo?q=%23%E6%8B%8D%E8%B0%A2%E5%A8%9C%E5%8F%8C%E8%83%9E%E8%83%8E%E5%84%BF%E5%A5%B3%E7%9A%84%E7%8B%97%E4%BB%94%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%23) `225.9K 🔥` `NEW`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `225.6K 🔥` `NEW`
1. [陶喆最终五站官宣 (Tao Zhe’s final five stops are officially announced)](https://s.weibo.com/weibo?q=%23%E9%99%B6%E5%96%86%E6%9C%80%E7%BB%88%E4%BA%94%E7%AB%99%E5%AE%98%E5%AE%A3%23) `225.1K 🔥` `NEW`
1. [司机高速上睡着致后方堵车12公里](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E9%AB%98%E9%80%9F%E4%B8%8A%E7%9D%A1%E7%9D%80%E8%87%B4%E5%90%8E%E6%96%B9%E5%A0%B5%E8%BD%A612%E5%85%AC%E9%87%8C%23) `160.9K 🔥` `NEW`
1. [端王是世界上第一个接触EXO概念的](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E7%8E%8B%E6%98%AF%E4%B8%96%E7%95%8C%E4%B8%8A%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%8E%A5%E8%A7%A6EXO%E6%A6%82%E5%BF%B5%E7%9A%84%23) `160.0K 🔥` `NEW`
1. [方穆静瞿桦 做恨](https://s.weibo.com/weibo?q=%23%E6%96%B9%E7%A9%86%E9%9D%99%E7%9E%BF%E6%A1%A6%20%E5%81%9A%E6%81%A8%23) `159.1K 🔥` `NEW`
1. [剑来](https://s.weibo.com/weibo?q=%23%E5%89%91%E6%9D%A5%23) `158.1K 🔥` `NEW`
1. [双轨](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%BD%A8%23) `157.1K 🔥` `NEW`
1. [iPhone可添加门禁卡可写入加密](https://s.weibo.com/weibo?q=%23iPhone%E5%8F%AF%E6%B7%BB%E5%8A%A0%E9%97%A8%E7%A6%81%E5%8D%A1%E5%8F%AF%E5%86%99%E5%85%A5%E5%8A%A0%E5%AF%86%23) `153.4K 🔥` `NEW`
1. [靠爱不能维持一辈子的婚姻](https://s.weibo.com/weibo?q=%23%E9%9D%A0%E7%88%B1%E4%B8%8D%E8%83%BD%E7%BB%B4%E6%8C%81%E4%B8%80%E8%BE%88%E5%AD%90%E7%9A%84%E5%A9%9A%E5%A7%BB%23) `136.3K 🔥` `NEW`
1. [包上恩演技](https://s.weibo.com/weibo?q=%23%E5%8C%85%E4%B8%8A%E6%81%A9%E6%BC%94%E6%8A%80%23) `126.5K 🔥` `NEW`
1. [俄罗斯外交部声明](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%A4%96%E4%BA%A4%E9%83%A8%E5%A3%B0%E6%98%8E%23) `96.1K 🔥` `NEW`
1. [大鹅挂后备箱返程遇追尾被夹死 (The big goose hung in the trunk and was caught in a rear-end collision on its way back.)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%B9%85%E6%8C%82%E5%90%8E%E5%A4%87%E7%AE%B1%E8%BF%94%E7%A8%8B%E9%81%87%E8%BF%BD%E5%B0%BE%E8%A2%AB%E5%A4%B9%E6%AD%BB%23) `93.8K 🔥` `NEW`
1. [薛之谦广州演唱会座位分布好合理](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%B9%BF%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E5%BA%A7%E4%BD%8D%E5%88%86%E5%B8%83%E5%A5%BD%E5%90%88%E7%90%86%23) `93.7K 🔥` `NEW`
1. [昆凌成周杰伦的防伪标识](https://s.weibo.com/weibo?q=%23%E6%98%86%E5%87%8C%E6%88%90%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%9A%84%E9%98%B2%E4%BC%AA%E6%A0%87%E8%AF%86%23) `93.7K 🔥` `NEW`
1. [女子称每天用水都是13吨多](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E6%AF%8F%E5%A4%A9%E7%94%A8%E6%B0%B4%E9%83%BD%E6%98%AF13%E5%90%A8%E5%A4%9A%23) `93.7K 🔥` `NEW`
1. [孙颖莎问对手你不挑战吗](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%97%AE%E5%AF%B9%E6%89%8B%E4%BD%A0%E4%B8%8D%E6%8C%91%E6%88%98%E5%90%97%23) `90.4K 🔥` `NEW`
1. [赵丽颖曾两次恳请别把镜头对准孩子](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%9B%BE%E4%B8%A4%E6%AC%A1%E6%81%B3%E8%AF%B7%E5%88%AB%E6%8A%8A%E9%95%9C%E5%A4%B4%E5%AF%B9%E5%87%86%E5%AD%A9%E5%AD%90%23) `89.4K 🔥` `NEW`
1. [亲爱的客栈](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E7%88%B1%E7%9A%84%E5%AE%A2%E6%A0%88%23) `89.2K 🔥` `NEW`
1. [孙颖莎3比1萨马拉](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E3%E6%AF%941%E8%90%A8%E9%A9%AC%E6%8B%89%23) `87.0K 🔥` `NEW`
1. [张杰声援谢娜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%A3%B0%E6%8F%B4%E8%B0%A2%E5%A8%9C%23) `286.7K 🔥` `+49%`
1. [墨宝非宝宣布离婚](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E5%AE%9D%E9%9D%9E%E5%AE%9D%E5%AE%A3%E5%B8%83%E7%A6%BB%E5%A9%9A%23) `226.5K 🔥`
1. [钱枫近况 (Qian Feng's recent situation)](https://s.weibo.com/weibo?q=%23%E9%92%B1%E6%9E%AB%E8%BF%91%E5%86%B5%23) `193.6K 🔥`
1. [张杰发未成年人保护法](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%8F%91%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E4%BF%9D%E6%8A%A4%E6%B3%95%23) `115.2K 🔥`
1. [代露娃 短剧](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%20%E7%9F%AD%E5%89%A7%23) `304.9K 🔥` `-23%`
1. [一家4口上山妻子死亡失联时神情恐惧 (Family of 4 looked frightened when wife died and lost contact while going up mountain)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B64%E5%8F%A3%E4%B8%8A%E5%B1%B1%E5%A6%BB%E5%AD%90%E6%AD%BB%E4%BA%A1%E5%A4%B1%E8%81%94%E6%97%B6%E7%A5%9E%E6%83%85%E6%81%90%E6%83%A7%23) `227.3K 🔥` `-57%`
1. [杨洋不让江山复工 (Yang Yang won’t let Jiangshan resume work)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%E5%A4%8D%E5%B7%A5%23) `158.0K 🔥` `-21%`
1. [偏偏宠爱 陈飞宇 (I just love Chen Feiyu)](https://s.weibo.com/weibo?q=%23%E5%81%8F%E5%81%8F%E5%AE%A0%E7%88%B1%20%E9%99%88%E9%A3%9E%E5%AE%87%23) `151.9K 🔥` `-69%`
1. [纯真年代的爱情](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `148.1K 🔥` `-26%`
1. [元宝骂人](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E9%AA%82%E4%BA%BA%23) `90.1K 🔥` `-53%`
1. [中秋请3天假堪比春节 (Taking 3 days off during the Mid-Autumn Festival is comparable to the Spring Festival)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E8%AF%B73%E5%A4%A9%E5%81%87%E5%A0%AA%E6%AF%94%E6%98%A5%E8%8A%82%23) `89.3K 🔥` `-92%`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `85.9K 🔥` `-30%`

Updated at 2026-02-25 21:39:04

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
