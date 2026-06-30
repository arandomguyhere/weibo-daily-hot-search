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

1. [马宁怒怼巴拉圭教练组 (Manin angrily criticizes Paraguay coaching staff)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E6%80%92%E6%80%BC%E5%B7%B4%E6%8B%89%E5%9C%AD%E6%95%99%E7%BB%83%E7%BB%84%23) `1.1M 🔥` `NEW`
1. [智界V9共赴人生V时刻](https://s.weibo.com/weibo?q=%23%E6%99%BA%E7%95%8CV9%E5%85%B1%E8%B5%B4%E4%BA%BA%E7%94%9FV%E6%97%B6%E5%88%BB%23) `1.0M 🔥` `NEW`
1. [现在就出发4](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `1.0M 🔥` `NEW`
1. [法国教育部长誓不装空调声援学校](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%95%99%E8%82%B2%E9%83%A8%E9%95%BF%E8%AA%93%E4%B8%8D%E8%A3%85%E7%A9%BA%E8%B0%83%E5%A3%B0%E6%8F%B4%E5%AD%A6%E6%A0%A1%23) `1.0M 🔥` `NEW`
1. [瑞幸多邻国官宣生子](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%A4%9A%E9%82%BB%E5%9B%BD%E5%AE%98%E5%AE%A3%E7%94%9F%E5%AD%90%23) `1.0M 🔥` `NEW`
1. [想进圈先过年中这关](https://s.weibo.com/weibo?q=%23%E6%83%B3%E8%BF%9B%E5%9C%88%E5%85%88%E8%BF%87%E5%B9%B4%E4%B8%AD%E8%BF%99%E5%85%B3%23) `980.8K 🔥` `NEW`
1. [虞书欣念相思蚌精妆造](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BF%B5%E7%9B%B8%E6%80%9D%E8%9A%8C%E7%B2%BE%E5%A6%86%E9%80%A0%23) `910.9K 🔥` `NEW`
1. [日本在外网翻车](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%A8%E5%A4%96%E7%BD%91%E7%BF%BB%E8%BD%A6%23) `817.1K 🔥` `NEW`
1. [内马尔记仇](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E8%AE%B0%E4%BB%87%23) `816.9K 🔥` `NEW`
1. [傅首尔泳装身材](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E6%B3%B3%E8%A3%85%E8%BA%AB%E6%9D%90%23) `812.7K 🔥` `NEW`
1. [番位新规 马伯骞本名叫美国 (New rules for ranking: Ma Boqian’s real name is the United States)](https://s.weibo.com/weibo?q=%23%E7%95%AA%E4%BD%8D%E6%96%B0%E8%A7%84%20%E9%A9%AC%E4%BC%AF%E9%AA%9E%E6%9C%AC%E5%90%8D%E5%8F%AB%E7%BE%8E%E5%9B%BD%23) `811.3K 🔥` `NEW`
1. [恋与深空将引狼入室浪漫化不可取](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%B0%86%E5%BC%95%E7%8B%BC%E5%85%A5%E5%AE%A4%E6%B5%AA%E6%BC%AB%E5%8C%96%E4%B8%8D%E5%8F%AF%E5%8F%96%23) `810.5K 🔥` `NEW`
1. [Angelababy 我保证她是天使](https://s.weibo.com/weibo?q=%23Angelababy%20%E6%88%91%E4%BF%9D%E8%AF%81%E5%A5%B9%E6%98%AF%E5%A4%A9%E4%BD%BF%23) `809.1K 🔥` `NEW`
1. [沈梦辰晒张凌赫何炅拍的自己](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E6%99%92%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BD%95%E7%82%85%E6%8B%8D%E7%9A%84%E8%87%AA%E5%B7%B1%23) `751.5K 🔥` `NEW`
1. [女子开腹手术后才知脂肪是保命符](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BC%80%E8%85%B9%E6%89%8B%E6%9C%AF%E5%90%8E%E6%89%8D%E7%9F%A5%E8%84%82%E8%82%AA%E6%98%AF%E4%BF%9D%E5%91%BD%E7%AC%A6%23) `746.0K 🔥` `NEW`
1. [优必选超仿生机器人](https://s.weibo.com/weibo?q=%23%E4%BC%98%E5%BF%85%E9%80%89%E8%B6%85%E4%BB%BF%E7%94%9F%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `739.1K 🔥` `NEW`
1. [青岛阿勒泰网红草地遭越野车队碾轧](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E9%98%BF%E5%8B%92%E6%B3%B0%E7%BD%91%E7%BA%A2%E8%8D%89%E5%9C%B0%E9%81%AD%E8%B6%8A%E9%87%8E%E8%BD%A6%E9%98%9F%E7%A2%BE%E8%BD%A7%23) `729.9K 🔥` `NEW`
1. [法国生态部长问装空调有啥用](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E7%94%9F%E6%80%81%E9%83%A8%E9%95%BF%E9%97%AE%E8%A3%85%E7%A9%BA%E8%B0%83%E6%9C%89%E5%95%A5%E7%94%A8%23) `727.1K 🔥` `NEW`
1. [曝大肚女生跑到剧组找男演员负责](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A4%A7%E8%82%9A%E5%A5%B3%E7%94%9F%E8%B7%91%E5%88%B0%E5%89%A7%E7%BB%84%E6%89%BE%E7%94%B7%E6%BC%94%E5%91%98%E8%B4%9F%E8%B4%A3%23) `715.1K 🔥` `NEW`
1. [黄灿灿工作室把账号当朋友圈发](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%8A%8A%E8%B4%A6%E5%8F%B7%E5%BD%93%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%8F%91%23) `710.7K 🔥` `NEW`
1. [金饰价格崩了 (Gold jewelery prices collapsed)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E5%B4%A9%E4%BA%86%23) `574.2K 🔥` `NEW`
1. [李九领证](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B9%9D%E9%A2%86%E8%AF%81%23) `423.1K 🔥` `NEW`
1. [侯明昊念相思出妆](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%BF%B5%E7%9B%B8%E6%80%9D%E5%87%BA%E5%A6%86%23) `403.7K 🔥` `NEW`
1. [穆祉丞发演唱会大合照](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%8F%91%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A4%A7%E5%90%88%E7%85%A7%23) `391.8K 🔥` `NEW`
1. [未来5年孩子上学有这些变化](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A55%E5%B9%B4%E5%AD%A9%E5%AD%90%E4%B8%8A%E5%AD%A6%E6%9C%89%E8%BF%99%E4%BA%9B%E5%8F%98%E5%8C%96%23) `387.7K 🔥` `NEW`
1. [男人互相叫爸被视为权力玩笑](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%BA%BA%E4%BA%92%E7%9B%B8%E5%8F%AB%E7%88%B8%E8%A2%AB%E8%A7%86%E4%B8%BA%E6%9D%83%E5%8A%9B%E7%8E%A9%E7%AC%91%23) `387.4K 🔥` `NEW`
1. [长生骨 念相思](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9F%E9%AA%A8%20%E5%BF%B5%E7%9B%B8%E6%80%9D%23) `386.0K 🔥` `NEW`
1. [恋与深空不能既要红利又甩锅](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E4%B8%8D%E8%83%BD%E6%97%A2%E8%A6%81%E7%BA%A2%E5%88%A9%E5%8F%88%E7%94%A9%E9%94%85%23) `380.9K 🔥` `NEW`
1. [蒋龙 现在就出发4](https://s.weibo.com/weibo?q=%23%E8%92%8B%E9%BE%99%20%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `335.0K 🔥` `NEW`
1. [美的油烟机致歉玩梗张杰](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%9A%84%E6%B2%B9%E7%83%9F%E6%9C%BA%E8%87%B4%E6%AD%89%E7%8E%A9%E6%A2%97%E5%BC%A0%E6%9D%B0%23) `279.2K 🔥` `NEW`
1. [现在就出发确定范丞丞王楚然黄景瑜 (Set out now to confirm Fan Chengcheng, Wang Churan, Huang Jingyu)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%E7%A1%AE%E5%AE%9A%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%BB%84%E6%99%AF%E7%91%9C%23) `247.7K 🔥` `NEW`
1. [穆祉丞合照 厂牌调色](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%90%88%E7%85%A7%20%E5%8E%82%E7%89%8C%E8%B0%83%E8%89%B2%23) `247.6K 🔥` `NEW`
1. [华表奖](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%A1%A8%E5%A5%96%23) `247.4K 🔥` `NEW`
1. [办公室空调怎么统一温度](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E5%85%AC%E5%AE%A4%E7%A9%BA%E8%B0%83%E6%80%8E%E4%B9%88%E7%BB%9F%E4%B8%80%E6%B8%A9%E5%BA%A6%23) `247.4K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `247.2K 🔥` `NEW`
1. [酒吧宣传80岁大爷可免费与女生拼桌](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%90%A7%E5%AE%A3%E4%BC%A080%E5%B2%81%E5%A4%A7%E7%88%B7%E5%8F%AF%E5%85%8D%E8%B4%B9%E4%B8%8E%E5%A5%B3%E7%94%9F%E6%8B%BC%E6%A1%8C%23) `230.1K 🔥` `NEW`
1. [金价走势大反转](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B5%B0%E5%8A%BF%E5%A4%A7%E5%8F%8D%E8%BD%AC%23) `226.6K 🔥` `NEW`
1. [卢昱晓电影](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%94%B5%E5%BD%B1%23) `212.3K 🔥` `NEW`
1. [女子拒与相亲男继续接触遭对方砸头](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8B%92%E4%B8%8E%E7%9B%B8%E4%BA%B2%E7%94%B7%E7%BB%A7%E7%BB%AD%E6%8E%A5%E8%A7%A6%E9%81%AD%E5%AF%B9%E6%96%B9%E7%A0%B8%E5%A4%B4%23) `196.2K 🔥` `NEW`
1. [小嗷道歉](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%97%B7%E9%81%93%E6%AD%89%23) `195.8K 🔥` `NEW`
1. [小米辟谣账号上线 (Xiaomi’s rumor refuting account goes online)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%BE%9F%E8%B0%A3%E8%B4%A6%E5%8F%B7%E4%B8%8A%E7%BA%BF%23) `192.7K 🔥` `NEW`
1. [金鹰奖最佳女主角候选](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E8%A7%92%E5%80%99%E9%80%89%23) `1.8M 🔥` `+182%`
1. [中国共产党党员总数为10128.6万名](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%B1%E4%BA%A7%E5%85%9A%E5%85%9A%E5%91%98%E6%80%BB%E6%95%B0%E4%B8%BA10128.6%E4%B8%87%E5%90%8D%23) `1.0M 🔥` `+141%`
1. [死亡之组快死完了](https://s.weibo.com/weibo?q=%23%E6%AD%BB%E4%BA%A1%E4%B9%8B%E7%BB%84%E5%BF%AB%E6%AD%BB%E5%AE%8C%E4%BA%86%23) `815.3K 🔥` `+23%`
1. [iPhone18ProMax银灰色 (iPhone18ProMax silver gray)](https://s.weibo.com/weibo?q=%23iPhone18ProMax%E9%93%B6%E7%81%B0%E8%89%B2%23) `719.0K 🔥`
1. [曝女明星请家教不给钱](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A5%B3%E6%98%8E%E6%98%9F%E8%AF%B7%E5%AE%B6%E6%95%99%E4%B8%8D%E7%BB%99%E9%92%B1%23) `450.4K 🔥`
1. [要有多高认知才能说出这话](https://s.weibo.com/weibo?q=%23%E8%A6%81%E6%9C%89%E5%A4%9A%E9%AB%98%E8%AE%A4%E7%9F%A5%E6%89%8D%E8%83%BD%E8%AF%B4%E5%87%BA%E8%BF%99%E8%AF%9D%23) `742.5K 🔥` `-23%`
1. [对张凌赫190身高有了实感](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%BC%A0%E5%87%8C%E8%B5%AB190%E8%BA%AB%E9%AB%98%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `459.8K 🔥` `-28%`
1. [荷兰淘汰 (Netherlands eliminated)](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E6%B7%98%E6%B1%B0%23) `247.9K 🔥` `-96%`
1. [一栗小莎子最后一次化疗](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E6%9C%80%E5%90%8E%E4%B8%80%E6%AC%A1%E5%8C%96%E7%96%97%23) `244.8K 🔥` `-55%`
1. [恋与深空承认犯错就那么难吗](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%89%BF%E8%AE%A4%E7%8A%AF%E9%94%99%E5%B0%B1%E9%82%A3%E4%B9%88%E9%9A%BE%E5%90%97%23) `229.4K 🔥` `-42%`
1. [金鹰奖投票用了迪丽热巴全名](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8A%95%E7%A5%A8%E7%94%A8%E4%BA%86%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%85%A8%E5%90%8D%23) `209.5K 🔥` `-76%`

Updated at 2026-06-30 16:56:49

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
