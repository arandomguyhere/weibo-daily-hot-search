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

1. [土耳其球员急哭了 (Turkish players cried anxiously)](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%E7%90%83%E5%91%98%E6%80%A5%E5%93%AD%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [世界杯 假4K](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%20%E5%81%874K%23) `809.8K 🔥` `NEW`
1. [多地景区迎来客流高峰](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E6%99%AF%E5%8C%BA%E8%BF%8E%E6%9D%A5%E5%AE%A2%E6%B5%81%E9%AB%98%E5%B3%B0%23) `805.1K 🔥` `NEW`
1. [虞书欣长生骨第一天定妆](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%95%BF%E7%94%9F%E9%AA%A8%E7%AC%AC%E4%B8%80%E5%A4%A9%E5%AE%9A%E5%A6%86%23) `804.7K 🔥` `NEW`
1. [等你年纪大了就知道原因了](https://s.weibo.com/weibo?q=%23%E7%AD%89%E4%BD%A0%E5%B9%B4%E7%BA%AA%E5%A4%A7%E4%BA%86%E5%B0%B1%E7%9F%A5%E9%81%93%E5%8E%9F%E5%9B%A0%E4%BA%86%23) `804.0K 🔥` `NEW`
1. [土耳其球迷暴怒](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%E7%90%83%E8%BF%B7%E6%9A%B4%E6%80%92%23) `703.9K 🔥` `NEW`
1. [孙怡一出场就是白月光](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E4%B8%80%E5%87%BA%E5%9C%BA%E5%B0%B1%E6%98%AF%E7%99%BD%E6%9C%88%E5%85%89%23) `697.6K 🔥` `NEW`
1. [李一桐曾舜晞邓为都是艺名](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E6%9B%BE%E8%88%9C%E6%99%9E%E9%82%93%E4%B8%BA%E9%83%BD%E6%98%AF%E8%89%BA%E5%90%8D%23) `695.8K 🔥` `NEW`
1. [土耳其黄金一代耻辱出局](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%E9%BB%84%E9%87%91%E4%B8%80%E4%BB%A3%E8%80%BB%E8%BE%B1%E5%87%BA%E5%B1%80%23) `582.6K 🔥` `NEW`
1. [长生骨男主](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9F%E9%AA%A8%E7%94%B7%E4%B8%BB%23) `467.7K 🔥` `NEW`
1. [广东的湿度有多夸张 (How exaggerated is the humidity in Guangdong?)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E7%9A%84%E6%B9%BF%E5%BA%A6%E6%9C%89%E5%A4%9A%E5%A4%B8%E5%BC%A0%23) `435.9K 🔥` `NEW`
1. [阚清子秒删](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E7%A7%92%E5%88%A0%23) `422.2K 🔥` `NEW`
1. [苏醒长文谈与何炅搭档主持歌手](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E9%95%BF%E6%96%87%E8%B0%88%E4%B8%8E%E4%BD%95%E7%82%85%E6%90%AD%E6%A1%A3%E4%B8%BB%E6%8C%81%E6%AD%8C%E6%89%8B%23) `417.4K 🔥` `NEW`
1. [散光千万不要用深色主题](https://s.weibo.com/weibo?q=%23%E6%95%A3%E5%85%89%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E7%94%A8%E6%B7%B1%E8%89%B2%E4%B8%BB%E9%A2%98%23) `293.8K 🔥` `NEW`
1. [陈奕迅豪掷1.82亿港币购入超级豪宅](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E8%BF%85%E8%B1%AA%E6%8E%B71.82%E4%BA%BF%E6%B8%AF%E5%B8%81%E8%B4%AD%E5%85%A5%E8%B6%85%E7%BA%A7%E8%B1%AA%E5%AE%85%23) `293.2K 🔥` `NEW`
1. [纸尿裤罗生门](https://s.weibo.com/weibo?q=%23%E7%BA%B8%E5%B0%BF%E8%A3%A4%E7%BD%97%E7%94%9F%E9%97%A8%23) `279.4K 🔥` `NEW`
1. [人与人沟通也是要消耗token的](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%8E%E4%BA%BA%E6%B2%9F%E9%80%9A%E4%B9%9F%E6%98%AF%E8%A6%81%E6%B6%88%E8%80%97token%E7%9A%84%23) `272.0K 🔥` `NEW`
1. [珍稀新物种大别山脊蛇现身六安](https://s.weibo.com/weibo?q=%23%E7%8F%8D%E7%A8%80%E6%96%B0%E7%89%A9%E7%A7%8D%E5%A4%A7%E5%88%AB%E5%B1%B1%E8%84%8A%E8%9B%87%E7%8E%B0%E8%BA%AB%E5%85%AD%E5%AE%89%23) `269.4K 🔥` `NEW`
1. [当AI开始自己造AI](https://s.weibo.com/weibo?q=%23%E5%BD%93AI%E5%BC%80%E5%A7%8B%E8%87%AA%E5%B7%B1%E9%80%A0AI%23) `266.8K 🔥` `NEW`
1. [毒纸尿裤事件反转再反转](https://s.weibo.com/weibo?q=%23%E6%AF%92%E7%BA%B8%E5%B0%BF%E8%A3%A4%E4%BA%8B%E4%BB%B6%E5%8F%8D%E8%BD%AC%E5%86%8D%E5%8F%8D%E8%BD%AC%23) `265.4K 🔥` `NEW`
1. [上海女生3900月租阁楼房活出生活品质 (Shanghai girl rents a loft room for 3,900 monthly to live a quality life)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A5%B3%E7%94%9F3900%E6%9C%88%E7%A7%9F%E9%98%81%E6%A5%BC%E6%88%BF%E6%B4%BB%E5%87%BA%E7%94%9F%E6%B4%BB%E5%93%81%E8%B4%A8%23) `263.5K 🔥` `NEW`
1. [网传黄子韬徐艺洋产子时间线](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E9%BB%84%E5%AD%90%E9%9F%AC%E5%BE%90%E8%89%BA%E6%B4%8B%E4%BA%A7%E5%AD%90%E6%97%B6%E9%97%B4%E7%BA%BF%23) `262.7K 🔥` `NEW`
1. [怪不得练普拉提都是请私教](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E7%BB%83%E6%99%AE%E6%8B%89%E6%8F%90%E9%83%BD%E6%98%AF%E8%AF%B7%E7%A7%81%E6%95%99%23) `261.1K 🔥` `NEW`
1. [被心理医生点醒的瞬间](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%BF%83%E7%90%86%E5%8C%BB%E7%94%9F%E7%82%B9%E9%86%92%E7%9A%84%E7%9E%AC%E9%97%B4%23) `259.4K 🔥` `NEW`
1. [张庭儿子女儿颜值](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BA%AD%E5%84%BF%E5%AD%90%E5%A5%B3%E5%84%BF%E9%A2%9C%E5%80%BC%23) `257.1K 🔥` `NEW`
1. [时代少年团体验赛车](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%BD%93%E9%AA%8C%E8%B5%9B%E8%BD%A6%23) `257.0K 🔥` `NEW`
1. [很容易分辨出人群中热爱生活的那个](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%AE%B9%E6%98%93%E5%88%86%E8%BE%A8%E5%87%BA%E4%BA%BA%E7%BE%A4%E4%B8%AD%E7%83%AD%E7%88%B1%E7%94%9F%E6%B4%BB%E7%9A%84%E9%82%A3%E4%B8%AA%23) `255.5K 🔥` `NEW`
1. [田嘉瑞被猴子强吻](https://s.weibo.com/weibo?q=%23%E7%94%B0%E5%98%89%E7%91%9E%E8%A2%AB%E7%8C%B4%E5%AD%90%E5%BC%BA%E5%90%BB%23) `254.5K 🔥` `NEW`
1. [蔷倒众人推](https://s.weibo.com/weibo?q=%23%E8%94%B7%E5%80%92%E4%BC%97%E4%BA%BA%E6%8E%A8%23) `251.4K 🔥` `NEW`
1. [iPhone18Pro或上涨200美元](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%88%96%E4%B8%8A%E6%B6%A8200%E7%BE%8E%E5%85%83%23) `230.6K 🔥` `NEW`
1. [长生骨 (Immortal bone)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9F%E9%AA%A8%23) `224.1K 🔥` `NEW`
1. [张凌赫粉丝这一秒过火云包场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%B2%89%E4%B8%9D%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E4%BA%91%E5%8C%85%E5%9C%BA%23) `196.6K 🔥` `NEW`
1. [王一博这些转场太绝了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%BF%99%E4%BA%9B%E8%BD%AC%E5%9C%BA%E5%A4%AA%E7%BB%9D%E4%BA%86%23) `168.2K 🔥` `NEW`
1. [滴露消毒液广告被指物化女性](https://s.weibo.com/weibo?q=%23%E6%BB%B4%E9%9C%B2%E6%B6%88%E6%AF%92%E6%B6%B2%E5%B9%BF%E5%91%8A%E8%A2%AB%E6%8C%87%E7%89%A9%E5%8C%96%E5%A5%B3%E6%80%A7%23) `160.1K 🔥` `NEW`
1. [孙杨妈妈哭了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%A6%88%E5%A6%88%E5%93%AD%E4%BA%86%23) `155.8K 🔥` `NEW`
1. [TF四代突围2定档](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E7%AA%81%E5%9B%B42%E5%AE%9A%E6%A1%A3%23) `142.7K 🔥` `NEW`
1. [土耳其两战62脚射门0进球](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%E4%B8%A4%E6%88%9862%E8%84%9A%E5%B0%84%E9%97%A80%E8%BF%9B%E7%90%83%23) `135.9K 🔥` `NEW`
1. [土耳其小组出局](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%E5%B0%8F%E7%BB%84%E5%87%BA%E5%B1%80%23) `134.7K 🔥` `NEW`
1. [最适合我的眼镜出现了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E9%80%82%E5%90%88%E6%88%91%E7%9A%84%E7%9C%BC%E9%95%9C%E5%87%BA%E7%8E%B0%E4%BA%86%23) `134.0K 🔥` `NEW`
1. [美股存储芯片持续暴涨](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E6%8C%81%E7%BB%AD%E6%9A%B4%E6%B6%A8%23) `133.5K 🔥` `NEW`
1. [鹿晗鞠躬感谢10年老粉 (Lu Han bows to thank his 10-year-old fan)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E9%9E%A0%E8%BA%AC%E6%84%9F%E8%B0%A210%E5%B9%B4%E8%80%81%E7%B2%89%23) `133.4K 🔥` `NEW`
1. [女友肝衰竭男子想领证结婚被拒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%8F%8B%E8%82%9D%E8%A1%B0%E7%AB%AD%E7%94%B7%E5%AD%90%E6%83%B3%E9%A2%86%E8%AF%81%E7%BB%93%E5%A9%9A%E8%A2%AB%E6%8B%92%23) `273.0K 🔥`
1. [多国领导人劝和特朗普与高市早苗](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E9%A2%86%E5%AF%BC%E4%BA%BA%E5%8A%9D%E5%92%8C%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%8E%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%23) `270.6K 🔥`
1. [曝徐艺洋在美国生的孩子 (Exposed Xu Yiyang’s child born in the United States)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BE%90%E8%89%BA%E6%B4%8B%E5%9C%A8%E7%BE%8E%E5%9B%BD%E7%94%9F%E7%9A%84%E5%AD%A9%E5%AD%90%23) `267.7K 🔥`
1. [苹果全面涨价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%85%A8%E9%9D%A2%E6%B6%A8%E4%BB%B7%23) `264.7K 🔥`
1. [美国的谈判桌被以色列炸碎了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%9A%84%E8%B0%88%E5%88%A4%E6%A1%8C%E8%A2%AB%E4%BB%A5%E8%89%B2%E5%88%97%E7%82%B8%E7%A2%8E%E4%BA%86%23) `258.8K 🔥`
1. [世界杯 不让捂嘴](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%20%E4%B8%8D%E8%AE%A9%E6%8D%82%E5%98%B4%23) `168.9K 🔥`
1. [与凤行番位](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E5%87%A4%E8%A1%8C%E7%95%AA%E4%BD%8D%23) `291.5K 🔥` `-74%`
1. [巴拉圭捂嘴说话红牌 (Paraguay gets red card for covering mouth while talking)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD%E6%8D%82%E5%98%B4%E8%AF%B4%E8%AF%9D%E7%BA%A2%E7%89%8C%23) `273.5K 🔥` `-96%`
1. [你好星期六看得出她是公主](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E7%9C%8B%E5%BE%97%E5%87%BA%E5%A5%B9%E6%98%AF%E5%85%AC%E4%B8%BB%23) `161.5K 🔥` `-84%`
1. [热巴开卫士 (Reba Kai Guards)](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E5%BC%80%E5%8D%AB%E5%A3%AB%23) `153.6K 🔥` `-57%`

Updated at 2026-06-20 16:05:15

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
