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

1. [爱情公寓 王冠](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%20%E7%8E%8B%E5%86%A0%23) `581.4K 🔥` `NEW`
1. [赵丽颖突发身体不适](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%AA%81%E5%8F%91%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%23) `562.3K 🔥` `NEW`
1. [张元英安宥真小分队出道](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E5%AE%89%E5%AE%A5%E7%9C%9F%E5%B0%8F%E5%88%86%E9%98%9F%E5%87%BA%E9%81%93%23) `556.9K 🔥` `NEW`
1. [为什么亲戚越来越不亲了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BA%B2%E6%88%9A%E8%B6%8A%E6%9D%A5%E8%B6%8A%E4%B8%8D%E4%BA%B2%E4%BA%86%23) `555.3K 🔥` `NEW`
1. [赵丽颖缺席直播](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%BC%BA%E5%B8%AD%E7%9B%B4%E6%92%AD%23) `553.6K 🔥` `NEW`
1. [藏海传回应提名](https://s.weibo.com/weibo?q=%23%E8%97%8F%E6%B5%B7%E4%BC%A0%E5%9B%9E%E5%BA%94%E6%8F%90%E5%90%8D%23) `550.8K 🔥` `NEW`
1. [白鹿未获金鹰奖提名](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9C%AA%E8%8E%B7%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%23) `549.6K 🔥` `NEW`
1. [全球首个6nm晶圆级垂直堆叠芯片](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%A6%96%E4%B8%AA6nm%E6%99%B6%E5%9C%86%E7%BA%A7%E5%9E%82%E7%9B%B4%E5%A0%86%E5%8F%A0%E8%8A%AF%E7%89%87%23) `333.5K 🔥` `NEW`
1. [金价飞涨原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%A3%9E%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `332.8K 🔥` `NEW`
1. [百万人围观的AI翻车现场](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%B8%87%E4%BA%BA%E5%9B%B4%E8%A7%82%E7%9A%84AI%E7%BF%BB%E8%BD%A6%E7%8E%B0%E5%9C%BA%23) `168.1K 🔥` `NEW`
1. [魏子宸颌面](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E9%A2%8C%E9%9D%A2%23) `148.1K 🔥` `NEW`
1. [警方确认失联中国女生无韩出境记录](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E7%A1%AE%E8%AE%A4%E5%A4%B1%E8%81%94%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E6%97%A0%E9%9F%A9%E5%87%BA%E5%A2%83%E8%AE%B0%E5%BD%95%23) `138.0K 🔥` `NEW`
1. [老人做一顿饭烧了两次厨房](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%81%9A%E4%B8%80%E9%A1%BF%E9%A5%AD%E7%83%A7%E4%BA%86%E4%B8%A4%E6%AC%A1%E5%8E%A8%E6%88%BF%23) `135.8K 🔥` `NEW`
1. [原来大家都是这样防止被套话的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E9%98%B2%E6%AD%A2%E8%A2%AB%E5%A5%97%E8%AF%9D%E7%9A%84%23) `596.2K 🔥` `+21%`
1. [宇树研发费用或比牧原养猪经费低](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A0%94%E5%8F%91%E8%B4%B9%E7%94%A8%E6%88%96%E6%AF%94%E7%89%A7%E5%8E%9F%E5%85%BB%E7%8C%AA%E7%BB%8F%E8%B4%B9%E4%BD%8E%23) `564.7K 🔥` `+23%`
1. [工信部组合拳叫停速成车乱象](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BF%A1%E9%83%A8%E7%BB%84%E5%90%88%E6%8B%B3%E5%8F%AB%E5%81%9C%E9%80%9F%E6%88%90%E8%BD%A6%E4%B9%B1%E8%B1%A1%23) `559.9K 🔥` `+54%`
1. [新加坡未来每名孩童可获32万元补助](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%9C%AA%E6%9D%A5%E6%AF%8F%E5%90%8D%E5%AD%A9%E7%AB%A5%E5%8F%AF%E8%8E%B732%E4%B8%87%E5%85%83%E8%A1%A5%E5%8A%A9%23) `552.5K 🔥` `+164%`
1. [乳房触诊20多次后发现结节摸不到](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A20%E5%A4%9A%E6%AC%A1%E5%90%8E%E5%8F%91%E7%8E%B0%E7%BB%93%E8%8A%82%E6%91%B8%E4%B8%8D%E5%88%B0%23) `549.7K 🔥` `+22%`
1. [乳房触诊当事医生称已提交诊室视频](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A%E5%BD%93%E4%BA%8B%E5%8C%BB%E7%94%9F%E7%A7%B0%E5%B7%B2%E6%8F%90%E4%BA%A4%E8%AF%8A%E5%AE%A4%E8%A7%86%E9%A2%91%23) `362.3K 🔥` `+137%`
1. [欢子工作室质问披哥](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%B4%A8%E9%97%AE%E6%8A%AB%E5%93%A5%23) `342.1K 🔥` `+38%`
1. [多款APP被通报](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%AC%BEAPP%E8%A2%AB%E9%80%9A%E6%8A%A5%23) `1.0M 🔥`
1. [中国连续17年保持全球第二大进口市场](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%BF%9E%E7%BB%AD17%E5%B9%B4%E4%BF%9D%E6%8C%81%E5%85%A8%E7%90%83%E7%AC%AC%E4%BA%8C%E5%A4%A7%E8%BF%9B%E5%8F%A3%E5%B8%82%E5%9C%BA%23) `798.3K 🔥`
1. [网传爱情公寓回归季阵容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%9B%9E%E5%BD%92%E5%AD%A3%E9%98%B5%E5%AE%B9%23) `784.8K 🔥`
1. [杨幂掉提](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%8E%89%E6%8F%90%23) `703.3K 🔥`
1. [德芙文案 翻车](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E8%8A%99%E6%96%87%E6%A1%88%20%E7%BF%BB%E8%BD%A6%23) `563.6K 🔥`
1. [金鹰奖最佳男主](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E4%B8%BB%23) `561.1K 🔥`
1. [宁波致1死4伤车祸司机突发疾病](https://s.weibo.com/weibo?q=%23%E5%AE%81%E6%B3%A2%E8%87%B41%E6%AD%BB4%E4%BC%A4%E8%BD%A6%E7%A5%B8%E5%8F%B8%E6%9C%BA%E7%AA%81%E5%8F%91%E7%96%BE%E7%97%85%23) `557.9K 🔥`
1. [原来不是挂面不好吃](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E6%98%AF%E6%8C%82%E9%9D%A2%E4%B8%8D%E5%A5%BD%E5%90%83%23) `365.5K 🔥`
1. [杨幂环女主提名2.0](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%8E%AF%E5%A5%B3%E4%B8%BB%E6%8F%90%E5%90%8D2.0%23) `313.8K 🔥`
1. [周柯宇仅持有中国国籍](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9F%AF%E5%AE%87%E4%BB%85%E6%8C%81%E6%9C%89%E4%B8%AD%E5%9B%BD%E5%9B%BD%E7%B1%8D%23) `167.7K 🔥`
1. [金鹰奖提名名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `2.4M 🔥` `-21%`
1. [女子用3年垃圾桶才发现用错了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A83%E5%B9%B4%E5%9E%83%E5%9C%BE%E6%A1%B6%E6%89%8D%E5%8F%91%E7%8E%B0%E7%94%A8%E9%94%99%E4%BA%86%23) `564.8K 🔥` `-24%`
1. [孙俪掉提金鹰奖](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E6%8E%89%E6%8F%90%E9%87%91%E9%B9%B0%E5%A5%96%23) `364.9K 🔥` `-25%`
1. [金鹰奖把电视剧编剧打成了编刷](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8A%8A%E7%94%B5%E8%A7%86%E5%89%A7%E7%BC%96%E5%89%A7%E6%89%93%E6%88%90%E4%BA%86%E7%BC%96%E5%88%B7%23) `358.0K 🔥` `-23%`
1. [余秀华希望一百年后人类灭亡](https://s.weibo.com/weibo?q=%23%E4%BD%99%E7%A7%80%E5%8D%8E%E5%B8%8C%E6%9C%9B%E4%B8%80%E7%99%BE%E5%B9%B4%E5%90%8E%E4%BA%BA%E7%B1%BB%E7%81%AD%E4%BA%A1%23) `332.5K 🔥` `-27%`
1. [靳东掉提金鹰奖最佳男主角](https://s.weibo.com/weibo?q=%23%E9%9D%B3%E4%B8%9C%E6%8E%89%E6%8F%90%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E4%B8%BB%E8%A7%92%23) `332.4K 🔥` `-27%`
1. [成都蛋烘糕奶奶被镜头霸凌](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E8%9B%8B%E7%83%98%E7%B3%95%E5%A5%B6%E5%A5%B6%E8%A2%AB%E9%95%9C%E5%A4%B4%E9%9C%B8%E5%87%8C%23) `319.7K 🔥` `-33%`
1. [张凌赫母校不请张凌赫因为安保不行](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%AF%8D%E6%A0%A1%E4%B8%8D%E8%AF%B7%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%A0%E4%B8%BA%E5%AE%89%E4%BF%9D%E4%B8%8D%E8%A1%8C%23) `285.1K 🔥` `-33%`
1. [癌症疫苗来了](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%E6%9D%A5%E4%BA%86%23) `219.0K 🔥` `-54%`
1. [曾舜晞跟孟子义吵架会哭](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E8%B7%9F%E5%AD%9F%E5%AD%90%E4%B9%89%E5%90%B5%E6%9E%B6%E4%BC%9A%E5%93%AD%23) `205.7K 🔥` `-39%`
1. [爱情公寓](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%23) `200.7K 🔥` `-56%`
1. [85岁爷爷把8岁自闭孙子当正常娃带](https://s.weibo.com/weibo?q=%2385%E5%B2%81%E7%88%B7%E7%88%B7%E6%8A%8A8%E5%B2%81%E8%87%AA%E9%97%AD%E5%AD%99%E5%AD%90%E5%BD%93%E6%AD%A3%E5%B8%B8%E5%A8%83%E5%B8%A6%23) `178.7K 🔥` `-31%`
1. [第一批拒绝上岸的人出现了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E6%8B%92%E7%BB%9D%E4%B8%8A%E5%B2%B8%E7%9A%84%E4%BA%BA%E5%87%BA%E7%8E%B0%E4%BA%86%23) `177.1K 🔥` `-34%`
1. [曝iPhone18Pro涨幅堪称温和](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18Pro%E6%B6%A8%E5%B9%85%E5%A0%AA%E7%A7%B0%E6%B8%A9%E5%92%8C%23) `170.6K 🔥` `-28%`
1. [TOP二周年演唱会](https://s.weibo.com/weibo?q=%23TOP%E4%BA%8C%E5%91%A8%E5%B9%B4%E6%BC%94%E5%94%B1%E4%BC%9A%23) `154.6K 🔥` `-25%`
1. [科比生前最后一张公开照片](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%AF%94%E7%94%9F%E5%89%8D%E6%9C%80%E5%90%8E%E4%B8%80%E5%BC%A0%E5%85%AC%E5%BC%80%E7%85%A7%E7%89%87%23) `148.3K 🔥` `-29%`
1. [氧化菊删除权志龙签名酒视频](https://s.weibo.com/weibo?q=%23%E6%B0%A7%E5%8C%96%E8%8F%8A%E5%88%A0%E9%99%A4%E6%9D%83%E5%BF%97%E9%BE%99%E7%AD%BE%E5%90%8D%E9%85%92%E8%A7%86%E9%A2%91%23) `148.2K 🔥` `-33%`
1. [监控拍下男子割喉杀害前女友过程](https://s.weibo.com/weibo?q=%23%E7%9B%91%E6%8E%A7%E6%8B%8D%E4%B8%8B%E7%94%B7%E5%AD%90%E5%89%B2%E5%96%89%E6%9D%80%E5%AE%B3%E5%89%8D%E5%A5%B3%E5%8F%8B%E8%BF%87%E7%A8%8B%23) `146.7K 🔥` `-30%`
1. [体育生为爱3次高考女友回应分手](https://s.weibo.com/weibo?q=%23%E4%BD%93%E8%82%B2%E7%94%9F%E4%B8%BA%E7%88%B13%E6%AC%A1%E9%AB%98%E8%80%83%E5%A5%B3%E5%8F%8B%E5%9B%9E%E5%BA%94%E5%88%86%E6%89%8B%23) `136.3K 🔥` `-23%`

Updated at 2026-08-25 18:15:19

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
