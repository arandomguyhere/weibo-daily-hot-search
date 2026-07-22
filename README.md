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

1. [活力中国调研行 (Dynamic China Research Institute)](https://s.weibo.com/weibo?q=%23%E6%B4%BB%E5%8A%9B%E4%B8%AD%E5%9B%BD%E8%B0%83%E7%A0%94%E8%A1%8C%23) `1.3M 🔥` `NEW`
1. [垃圾袋七分满就扔](https://s.weibo.com/weibo?q=%23%E5%9E%83%E5%9C%BE%E8%A2%8B%E4%B8%83%E5%88%86%E6%BB%A1%E5%B0%B1%E6%89%94%23) `1.1M 🔥` `NEW`
1. [Faker从警](https://s.weibo.com/weibo?q=%23Faker%E4%BB%8E%E8%AD%A6%23) `834.9K 🔥` `NEW`
1. [曝功夫女足票房流失金额超4亿](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%E6%B5%81%E5%A4%B1%E9%87%91%E9%A2%9D%E8%B6%854%E4%BA%BF%23) `767.1K 🔥` `NEW`
1. [第一次相亲适合吃烤肉](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9B%B8%E4%BA%B2%E9%80%82%E5%90%88%E5%90%83%E7%83%A4%E8%82%89%23) `600.1K 🔥` `NEW`
1. [曝iPhone18退出秋季发布会阵容](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18%E9%80%80%E5%87%BA%E7%A7%8B%E5%AD%A3%E5%8F%91%E5%B8%83%E4%BC%9A%E9%98%B5%E5%AE%B9%23) `473.1K 🔥` `NEW`
1. [汤唯二胎儿子出生](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E5%94%AF%E4%BA%8C%E8%83%8E%E5%84%BF%E5%AD%90%E5%87%BA%E7%94%9F%23) `425.1K 🔥` `NEW`
1. [十日终焉书粉发声](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E4%B9%A6%E7%B2%89%E5%8F%91%E5%A3%B0%23) `420.0K 🔥` `NEW`
1. [BLG Flandre](https://s.weibo.com/weibo?q=%23BLG%20Flandre%23) `402.0K 🔥` `NEW`
1. [王楚然回复张凌赫](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%9B%9E%E5%A4%8D%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `397.4K 🔥` `NEW`
1. [滔搏巨震 (Great earthquake)](https://s.weibo.com/weibo?q=%23%E6%BB%94%E6%90%8F%E5%B7%A8%E9%9C%87%23) `315.5K 🔥` `NEW`
1. [TF四代 五公](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%20%E4%BA%94%E5%85%AC%23) `299.0K 🔥` `NEW`
1. [滔博耐克直播间现状](https://s.weibo.com/weibo?q=%23%E6%BB%94%E5%8D%9A%E8%80%90%E5%85%8B%E7%9B%B4%E6%92%AD%E9%97%B4%E7%8E%B0%E7%8A%B6%23) `290.2K 🔥` `NEW`
1. [AL官宣Breathe加入](https://s.weibo.com/weibo?q=%23AL%E5%AE%98%E5%AE%A3Breathe%E5%8A%A0%E5%85%A5%23) `285.4K 🔥` `NEW`
1. [曝谢婷婷主要获得珠宝藏品](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B0%A2%E5%A9%B7%E5%A9%B7%E4%B8%BB%E8%A6%81%E8%8E%B7%E5%BE%97%E7%8F%A0%E5%AE%9D%E8%97%8F%E5%93%81%23) `277.4K 🔥` `NEW`
1. [留几手称邹市明抄他剧本](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E7%A7%B0%E9%82%B9%E5%B8%82%E6%98%8E%E6%8A%84%E4%BB%96%E5%89%A7%E6%9C%AC%23) `262.0K 🔥` `NEW`
1. [TF五代一公获批](https://s.weibo.com/weibo?q=%23TF%E4%BA%94%E4%BB%A3%E4%B8%80%E5%85%AC%E8%8E%B7%E6%89%B9%23) `261.3K 🔥` `NEW`
1. [金靖说张凌赫长得贵](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E8%AF%B4%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%95%BF%E5%BE%97%E8%B4%B5%23) `251.8K 🔥` `NEW`
1. [陈都灵 校花学姐](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%20%E6%A0%A1%E8%8A%B1%E5%AD%A6%E5%A7%90%23) `251.3K 🔥` `NEW`
1. [刘亦菲刘宇宁或演咸雪](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%88%98%E5%AE%87%E5%AE%81%E6%88%96%E6%BC%94%E5%92%B8%E9%9B%AA%23) `249.0K 🔥` `NEW`
1. [马宁回应阿根廷队小动作 (Maning responds to Argentina team's small move)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E5%9B%9E%E5%BA%94%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E5%B0%8F%E5%8A%A8%E4%BD%9C%23) `223.1K 🔥` `NEW`
1. [17岁男生遭冒充警察殴打案进展](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E7%94%B7%E7%94%9F%E9%81%AD%E5%86%92%E5%85%85%E8%AD%A6%E5%AF%9F%E6%AE%B4%E6%89%93%E6%A1%88%E8%BF%9B%E5%B1%95%23) `223.1K 🔥` `NEW`
1. [终于有人看到离婚女性户口问题了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E7%9C%8B%E5%88%B0%E7%A6%BB%E5%A9%9A%E5%A5%B3%E6%80%A7%E6%88%B7%E5%8F%A3%E9%97%AE%E9%A2%98%E4%BA%86%23) `223.0K 🔥` `NEW`
1. [身高差十厘米的视觉冲击力有多强](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E9%AB%98%E5%B7%AE%E5%8D%81%E5%8E%98%E7%B1%B3%E7%9A%84%E8%A7%86%E8%A7%89%E5%86%B2%E5%87%BB%E5%8A%9B%E6%9C%89%E5%A4%9A%E5%BC%BA%23) `223.0K 🔥` `NEW`
1. [王者公孙离星传说皮肤](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E5%85%AC%E5%AD%99%E7%A6%BB%E6%98%9F%E4%BC%A0%E8%AF%B4%E7%9A%AE%E8%82%A4%23) `223.0K 🔥` `NEW`
1. [披荆斩棘2026](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%982026%23) `220.0K 🔥` `NEW`
1. [韩剧鬼谜东宫 中国风](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%89%A7%E9%AC%BC%E8%B0%9C%E4%B8%9C%E5%AE%AB%20%E4%B8%AD%E5%9B%BD%E9%A3%8E%23) `214.0K 🔥` `NEW`
1. [今年首个50度出现了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E9%A6%96%E4%B8%AA50%E5%BA%A6%E5%87%BA%E7%8E%B0%E4%BA%86%23) `210.8K 🔥` `NEW`
1. [王鸥演少女违和感](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%E6%BC%94%E5%B0%91%E5%A5%B3%E8%BF%9D%E5%92%8C%E6%84%9F%23) `209.7K 🔥` `NEW`
1. [十日终焉辟谣余念安选角](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E8%BE%9F%E8%B0%A3%E4%BD%99%E5%BF%B5%E5%AE%89%E9%80%89%E8%A7%92%23) `209.5K 🔥` `NEW`
1. [好想把领导放聊天框置底 (I really want to put the leader at the bottom of the chat box)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%83%B3%E6%8A%8A%E9%A2%86%E5%AF%BC%E6%94%BE%E8%81%8A%E5%A4%A9%E6%A1%86%E7%BD%AE%E5%BA%95%23) `208.2K 🔥` `NEW`
1. [AL经理食言](https://s.weibo.com/weibo?q=%23AL%E7%BB%8F%E7%90%86%E9%A3%9F%E8%A8%80%23) `207.7K 🔥` `NEW`
1. [日本鼓励男性穿短裤上班被质疑](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%BC%93%E5%8A%B1%E7%94%B7%E6%80%A7%E7%A9%BF%E7%9F%AD%E8%A3%A4%E4%B8%8A%E7%8F%AD%E8%A2%AB%E8%B4%A8%E7%96%91%23) `200.7K 🔥` `NEW`
1. [范丞丞集齐时代少年团](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E9%9B%86%E9%BD%90%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%23) `197.1K 🔥` `NEW`
1. [继留子文学之后又一力作商人孩子文学](https://s.weibo.com/weibo?q=%23%E7%BB%A7%E7%95%99%E5%AD%90%E6%96%87%E5%AD%A6%E4%B9%8B%E5%90%8E%E5%8F%88%E4%B8%80%E5%8A%9B%E4%BD%9C%E5%95%86%E4%BA%BA%E5%AD%A9%E5%AD%90%E6%96%87%E5%AD%A6%23) `196.0K 🔥` `NEW`
1. [哪个暑假工做的雪糕](https://s.weibo.com/weibo?q=%23%E5%93%AA%E4%B8%AA%E6%9A%91%E5%81%87%E5%B7%A5%E5%81%9A%E7%9A%84%E9%9B%AA%E7%B3%95%23) `173.8K 🔥` `NEW`
1. [马嘉祺字体选的也很有考究](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%AD%97%E4%BD%93%E9%80%89%E7%9A%84%E4%B9%9F%E5%BE%88%E6%9C%89%E8%80%83%E7%A9%B6%23) `172.8K 🔥` `NEW`
1. [领导开始研究不涨薪留住人才](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%AF%BC%E5%BC%80%E5%A7%8B%E7%A0%94%E7%A9%B6%E4%B8%8D%E6%B6%A8%E8%96%AA%E7%95%99%E4%BD%8F%E4%BA%BA%E6%89%8D%23) `171.4K 🔥` `NEW`
1. [两个AI演员比内娱待爆艺人都火](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%B8%AAAI%E6%BC%94%E5%91%98%E6%AF%94%E5%86%85%E5%A8%B1%E5%BE%85%E7%88%86%E8%89%BA%E4%BA%BA%E9%83%BD%E7%81%AB%23) `2.6M 🔥` `+220%`
1. [耐克将清退中国数千家在线经销商 (Nike will remove thousands of online dealers in China)](https://s.weibo.com/weibo?q=%23%E8%80%90%E5%85%8B%E5%B0%86%E6%B8%85%E9%80%80%E4%B8%AD%E5%9B%BD%E6%95%B0%E5%8D%83%E5%AE%B6%E5%9C%A8%E7%BA%BF%E7%BB%8F%E9%94%80%E5%95%86%23) `1.6M 🔥` `+39%`
1. [女子还剩几小时退休差点多等11年](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%98%E5%89%A9%E5%87%A0%E5%B0%8F%E6%97%B6%E9%80%80%E4%BC%91%E5%B7%AE%E7%82%B9%E5%A4%9A%E7%AD%8911%E5%B9%B4%23) `485.5K 🔥` `-34%`
1. [刘宇宁方发声明 (Liu Yuning issued a statement)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%96%B9%E5%8F%91%E5%A3%B0%E6%98%8E%23) `446.4K 🔥` `-47%`
1. [突然不羡慕中小学老师了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E4%B8%8D%E7%BE%A1%E6%85%95%E4%B8%AD%E5%B0%8F%E5%AD%A6%E8%80%81%E5%B8%88%E4%BA%86%23) `434.4K 🔥` `-46%`
1. [社会对30岁太苛刻了](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BC%9A%E5%AF%B930%E5%B2%81%E5%A4%AA%E8%8B%9B%E5%88%BB%E4%BA%86%23) `403.6K 🔥` `-42%`
1. [影视飓风](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%23) `262.7K 🔥` `-63%`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `251.9K 🔥` `-66%`
1. [央视曝光救助流浪狗直播骗局](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E6%95%91%E5%8A%A9%E6%B5%81%E6%B5%AA%E7%8B%97%E7%9B%B4%E6%92%AD%E9%AA%97%E5%B1%80%23) `223.1K 🔥` `-68%`
1. [上海牛马才是真正的游牧民族](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%89%9B%E9%A9%AC%E6%89%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84%E6%B8%B8%E7%89%A7%E6%B0%91%E6%97%8F%23) `222.7K 🔥` `-72%`
1. [aespa明天回归](https://s.weibo.com/weibo?q=%23aespa%E6%98%8E%E5%A4%A9%E5%9B%9E%E5%BD%92%23) `191.5K 🔥` `-75%`
1. [雷军3问](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B3%E9%97%AE%23) `160.4K 🔥` `-79%`

Updated at 2026-07-22 17:59:44

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
