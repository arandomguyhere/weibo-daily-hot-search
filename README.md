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

1. [女子心跳骤停因美甲无法探测血氧值 (Woman's heart stopped and her blood oxygen level couldn't be detected due to manicure)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BF%83%E8%B7%B3%E9%AA%A4%E5%81%9C%E5%9B%A0%E7%BE%8E%E7%94%B2%E6%97%A0%E6%B3%95%E6%8E%A2%E6%B5%8B%E8%A1%80%E6%B0%A7%E5%80%BC%23) `795.5K 🔥` `NEW`
1. [考研](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%23) `225.5K 🔥` `NEW`
1. [王天辰郭晓婷床戏](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%E9%83%AD%E6%99%93%E5%A9%B7%E5%BA%8A%E6%88%8F%23) `223.6K 🔥` `NEW`
1. [夫妻晚5秒错过免费高速付1700余元](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E6%99%9A5%E7%A7%92%E9%94%99%E8%BF%87%E5%85%8D%E8%B4%B9%E9%AB%98%E9%80%9F%E4%BB%981700%E4%BD%99%E5%85%83%23) `203.4K 🔥` `NEW`
1. [女子疑丈夫出轨闺蜜花9千雇人追踪](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%96%91%E4%B8%88%E5%A4%AB%E5%87%BA%E8%BD%A8%E9%97%BA%E8%9C%9C%E8%8A%B19%E5%8D%83%E9%9B%87%E4%BA%BA%E8%BF%BD%E8%B8%AA%23) `202.2K 🔥` `NEW`
1. [男顾客发57条信息骚扰女骑手](https://s.weibo.com/weibo?q=%23%E7%94%B7%E9%A1%BE%E5%AE%A2%E5%8F%9157%E6%9D%A1%E4%BF%A1%E6%81%AF%E9%AA%9A%E6%89%B0%E5%A5%B3%E9%AA%91%E6%89%8B%23) `199.5K 🔥` `NEW`
1. [女子5.5克黄金戒指换新只剩下2克](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%905.5%E5%85%8B%E9%BB%84%E9%87%91%E6%88%92%E6%8C%87%E6%8D%A2%E6%96%B0%E5%8F%AA%E5%89%A9%E4%B8%8B2%E5%85%8B%23) `185.5K 🔥` `NEW`
1. [谷爱凌晒照纪念奶奶](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%99%92%E7%85%A7%E7%BA%AA%E5%BF%B5%E5%A5%B6%E5%A5%B6%23) `118.2K 🔥` `NEW`
1. [FENDI大秀明星阵容](https://s.weibo.com/weibo?q=%23FENDI%E5%A4%A7%E7%A7%80%E6%98%8E%E6%98%9F%E9%98%B5%E5%AE%B9%23) `94.4K 🔥` `NEW`
1. [镖人人生可以不必是旷野](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E4%BA%BA%E7%94%9F%E5%8F%AF%E4%BB%A5%E4%B8%8D%E5%BF%85%E6%98%AF%E6%97%B7%E9%87%8E%23) `85.2K 🔥` `NEW`
1. [成何体统结局拍出唐晓天人生镜头 (What a decent ending that captures the footage of Tang Xiaotian’s life)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E7%BB%93%E5%B1%80%E6%8B%8D%E5%87%BA%E5%94%90%E6%99%93%E5%A4%A9%E4%BA%BA%E7%94%9F%E9%95%9C%E5%A4%B4%23) `85.0K 🔥` `NEW`
1. [课间15分钟在全国所有省份部署推开](https://s.weibo.com/weibo?q=%23%E8%AF%BE%E9%97%B415%E5%88%86%E9%92%9F%E5%9C%A8%E5%85%A8%E5%9B%BD%E6%89%80%E6%9C%89%E7%9C%81%E4%BB%BD%E9%83%A8%E7%BD%B2%E6%8E%A8%E5%BC%80%23) `82.0K 🔥` `NEW`
1. [虞书欣云初暗夜奔跑](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BA%91%E5%88%9D%E6%9A%97%E5%A4%9C%E5%A5%94%E8%B7%91%23) `81.8K 🔥` `NEW`
1. [丞磊成何体统收官长文](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E6%94%B6%E5%AE%98%E9%95%BF%E6%96%87%23) `81.7K 🔥` `NEW`
1. [王楚然长文告别庾晚音](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%95%BF%E6%96%87%E5%91%8A%E5%88%AB%E5%BA%BE%E6%99%9A%E9%9F%B3%23) `81.3K 🔥` `NEW`
1. [于东来在老家卖甘蔗边吃边叫卖](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E5%9C%A8%E8%80%81%E5%AE%B6%E5%8D%96%E7%94%98%E8%94%97%E8%BE%B9%E5%90%83%E8%BE%B9%E5%8F%AB%E5%8D%96%23) `81.2K 🔥` `NEW`
1. [HYBE拒绝闵熙珍的提议](https://s.weibo.com/weibo?q=%23HYBE%E6%8B%92%E7%BB%9D%E9%97%B5%E7%86%99%E7%8F%8D%E7%9A%84%E6%8F%90%E8%AE%AE%23) `81.1K 🔥` `NEW`
1. [女子在胖东来1小时消费15万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E8%83%96%E4%B8%9C%E6%9D%A51%E5%B0%8F%E6%97%B6%E6%B6%88%E8%B4%B915%E4%B8%87%23) `1.1M 🔥` `+175%`
1. [魅族 (Meizu)](https://s.weibo.com/weibo?q=%23%E9%AD%85%E6%97%8F%23) `360.1K 🔥` `+23%`
1. [iPhone可添加门禁卡可写入加密](https://s.weibo.com/weibo?q=%23iPhone%E5%8F%AF%E6%B7%BB%E5%8A%A0%E9%97%A8%E7%A6%81%E5%8D%A1%E5%8F%AF%E5%86%99%E5%85%A5%E5%8A%A0%E5%AF%86%23) `196.5K 🔥` `+28%`
1. [春节假期多项数据创历史新高](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E5%81%87%E6%9C%9F%E5%A4%9A%E9%A1%B9%E6%95%B0%E6%8D%AE%E5%88%9B%E5%8E%86%E5%8F%B2%E6%96%B0%E9%AB%98%23) `632.4K 🔥`
1. [谷爱凌在美国遭大规模网暴 (Gu Ailing suffered massive online violence in the United States)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9C%A8%E7%BE%8E%E5%9B%BD%E9%81%AD%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%BD%91%E6%9A%B4%23) `322.4K 🔥`
1. [金价高的已经推出红绳戒指了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%AB%98%E7%9A%84%E5%B7%B2%E7%BB%8F%E6%8E%A8%E5%87%BA%E7%BA%A2%E7%BB%B3%E6%88%92%E6%8C%87%E4%BA%86%23) `322.2K 🔥`
1. [代露娃 短剧](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%20%E7%9F%AD%E5%89%A7%23) `319.8K 🔥`
1. [尘白禁区 中国邮政](https://s.weibo.com/weibo?q=%23%E5%B0%98%E7%99%BD%E7%A6%81%E5%8C%BA%20%E4%B8%AD%E5%9B%BD%E9%82%AE%E6%94%BF%23) `317.8K 🔥`
1. [白鹿忘记自己会说韩语了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BF%98%E8%AE%B0%E8%87%AA%E5%B7%B1%E4%BC%9A%E8%AF%B4%E9%9F%A9%E8%AF%AD%E4%BA%86%23) `217.2K 🔥`
1. [拍谢娜双胞胎儿女的狗仔涉嫌违法](https://s.weibo.com/weibo?q=%23%E6%8B%8D%E8%B0%A2%E5%A8%9C%E5%8F%8C%E8%83%9E%E8%83%8E%E5%84%BF%E5%A5%B3%E7%9A%84%E7%8B%97%E4%BB%94%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%23) `208.6K 🔥`
1. [墨宝非宝宣布离婚](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E5%AE%9D%E9%9D%9E%E5%AE%9D%E5%AE%A3%E5%B8%83%E7%A6%BB%E5%A9%9A%23) `199.3K 🔥`
1. [一家4口上山妻子死亡失联时神情恐惧 (Family of 4 looked frightened when wife died and lost contact while going up mountain)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B64%E5%8F%A3%E4%B8%8A%E5%B1%B1%E5%A6%BB%E5%AD%90%E6%AD%BB%E4%BA%A1%E5%A4%B1%E8%81%94%E6%97%B6%E7%A5%9E%E6%83%85%E6%81%90%E6%83%A7%23) `198.7K 🔥`
1. [杨洋不让江山复工 (Yang Yang won’t let Jiangshan resume work)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%E5%A4%8D%E5%B7%A5%23) `170.8K 🔥`
1. [靠爱不能维持一辈子的婚姻](https://s.weibo.com/weibo?q=%23%E9%9D%A0%E7%88%B1%E4%B8%8D%E8%83%BD%E7%BB%B4%E6%8C%81%E4%B8%80%E8%BE%88%E5%AD%90%E7%9A%84%E5%A9%9A%E5%A7%BB%23) `141.9K 🔥`
1. [俄罗斯外交部声明](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%A4%96%E4%BA%A4%E9%83%A8%E5%A3%B0%E6%98%8E%23) `88.8K 🔥`
1. [亲爱的客栈](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E7%88%B1%E7%9A%84%E5%AE%A2%E6%A0%88%23) `87.6K 🔥`
1. [孙颖莎黄牌 (Sun Yingsha yellow card)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%BB%84%E7%89%8C%23) `323.9K 🔥` `-71%`
1. [王橹杰壁纸 (Wang Lujie wallpaper)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%A3%81%E7%BA%B8%23) `222.4K 🔥` `-27%`
1. [福建喊话回归台湾回复收到](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E5%96%8A%E8%AF%9D%E5%9B%9E%E5%BD%92%E5%8F%B0%E6%B9%BE%E5%9B%9E%E5%A4%8D%E6%94%B6%E5%88%B0%23) `220.9K 🔥` `-46%`
1. [刘晓庆短剧吻戏](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E5%BA%86%E7%9F%AD%E5%89%A7%E5%90%BB%E6%88%8F%23) `219.8K 🔥` `-23%`
1. [19岁女生因经济舱综合征心脏骤停](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E5%A5%B3%E7%94%9F%E5%9B%A0%E7%BB%8F%E6%B5%8E%E8%88%B1%E7%BB%BC%E5%90%88%E5%BE%81%E5%BF%83%E8%84%8F%E9%AA%A4%E5%81%9C%23) `209.3K 🔥` `-44%`
1. [偏偏宠爱女主](https://s.weibo.com/weibo?q=%23%E5%81%8F%E5%81%8F%E5%AE%A0%E7%88%B1%E5%A5%B3%E4%B8%BB%23) `197.4K 🔥` `-49%`
1. [张杰声援谢娜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%A3%B0%E6%8F%B4%E8%B0%A2%E5%A8%9C%23) `197.2K 🔥` `-31%`
1. [孙颖莎不是我的分我坚决不要](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%8D%E6%98%AF%E6%88%91%E7%9A%84%E5%88%86%E6%88%91%E5%9D%9A%E5%86%B3%E4%B8%8D%E8%A6%81%23) `190.4K 🔥` `-77%`
1. [魅族手机3月正式退市](https://s.weibo.com/weibo?q=%23%E9%AD%85%E6%97%8F%E6%89%8B%E6%9C%BA3%E6%9C%88%E6%AD%A3%E5%BC%8F%E9%80%80%E5%B8%82%23) `135.1K 🔥` `-46%`
1. [陶喆最终五站官宣 (Tao Zhe’s final five stops are officially announced)](https://s.weibo.com/weibo?q=%23%E9%99%B6%E5%96%86%E6%9C%80%E7%BB%88%E4%BA%94%E7%AB%99%E5%AE%98%E5%AE%A3%23) `126.5K 🔥` `-44%`
1. [方穆静瞿桦 做恨](https://s.weibo.com/weibo?q=%23%E6%96%B9%E7%A9%86%E9%9D%99%E7%9E%BF%E6%A1%A6%20%E5%81%9A%E6%81%A8%23) `122.5K 🔥` `-23%`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `121.8K 🔥` `-46%`
1. [双轨 (Double track)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%BD%A8%23) `117.8K 🔥` `-25%`
1. [包上恩演技](https://s.weibo.com/weibo?q=%23%E5%8C%85%E4%B8%8A%E6%81%A9%E6%BC%94%E6%8A%80%23) `87.8K 🔥` `-31%`
1. [半夜候补1700元旅客没在12306购票](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%A4%9C%E5%80%99%E8%A1%A51700%E5%85%83%E6%97%85%E5%AE%A2%E6%B2%A1%E5%9C%A812306%E8%B4%AD%E7%A5%A8%23) `85.1K 🔥` `-63%`
1. [钱枫近况 (Qian Feng's recent situation)](https://s.weibo.com/weibo?q=%23%E9%92%B1%E6%9E%AB%E8%BF%91%E5%86%B5%23) `84.4K 🔥` `-56%`
1. [司机高速上睡着致后方堵车12公里](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E9%AB%98%E9%80%9F%E4%B8%8A%E7%9D%A1%E7%9D%80%E8%87%B4%E5%90%8E%E6%96%B9%E5%A0%B5%E8%BD%A612%E5%85%AC%E9%87%8C%23) `81.4K 🔥` `-49%`

Updated at 2026-02-25 22:36:27

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
