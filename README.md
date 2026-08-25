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

1. [原来大家都是这样防止被套话的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E9%98%B2%E6%AD%A2%E8%A2%AB%E5%A5%97%E8%AF%9D%E7%9A%84%23) `494.4K 🔥` `NEW`
1. [宇树研发费用或比牧原养猪经费低](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A0%94%E5%8F%91%E8%B4%B9%E7%94%A8%E6%88%96%E6%AF%94%E7%89%A7%E5%8E%9F%E5%85%BB%E7%8C%AA%E7%BB%8F%E8%B4%B9%E4%BD%8E%23) `457.6K 🔥` `NEW`
1. [靳东掉提金鹰奖最佳男主角](https://s.weibo.com/weibo?q=%23%E9%9D%B3%E4%B8%9C%E6%8E%89%E6%8F%90%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E4%B8%BB%E8%A7%92%23) `454.8K 🔥` `NEW`
1. [25岁中国女孩在韩国失踪超4天](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%A9%E5%9C%A8%E9%9F%A9%E5%9B%BD%E5%A4%B1%E8%B8%AA%E8%B6%854%E5%A4%A9%23) `453.7K 🔥` `NEW`
1. [工信部组合拳叫停速成车乱象](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BF%A1%E9%83%A8%E7%BB%84%E5%90%88%E6%8B%B3%E5%8F%AB%E5%81%9C%E9%80%9F%E6%88%90%E8%BD%A6%E4%B9%B1%E8%B1%A1%23) `363.7K 🔥` `NEW`
1. [杨幂环女主提名2.0](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%8E%AF%E5%A5%B3%E4%B8%BB%E6%8F%90%E5%90%8D2.0%23) `332.1K 🔥` `NEW`
1. [9月工资可能有变](https://s.weibo.com/weibo?q=%239%E6%9C%88%E5%B7%A5%E8%B5%84%E5%8F%AF%E8%83%BD%E6%9C%89%E5%8F%98%23) `261.4K 🔥` `NEW`
1. [新加坡新生儿至17岁可获约37万补贴](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%96%B0%E7%94%9F%E5%84%BF%E8%87%B317%E5%B2%81%E5%8F%AF%E8%8E%B7%E7%BA%A637%E4%B8%87%E8%A1%A5%E8%B4%B4%23) `260.5K 🔥` `NEW`
1. [300多只东北虎再次延长轻断食](https://s.weibo.com/weibo?q=%23300%E5%A4%9A%E5%8F%AA%E4%B8%9C%E5%8C%97%E8%99%8E%E5%86%8D%E6%AC%A1%E5%BB%B6%E9%95%BF%E8%BD%BB%E6%96%AD%E9%A3%9F%23) `260.3K 🔥` `NEW`
1. [欢子工作室质问披哥](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%B4%A8%E9%97%AE%E6%8A%AB%E5%93%A5%23) `248.4K 🔥` `NEW`
1. [宗馥莉心腹被免职](https://s.weibo.com/weibo?q=%23%E5%AE%97%E9%A6%A5%E8%8E%89%E5%BF%83%E8%85%B9%E8%A2%AB%E5%85%8D%E8%81%8C%23) `225.7K 🔥` `NEW`
1. [新加坡未来每名孩童可获32万元补助](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%9C%AA%E6%9D%A5%E6%AF%8F%E5%90%8D%E5%AD%A9%E7%AB%A5%E5%8F%AF%E8%8E%B732%E4%B8%87%E5%85%83%E8%A1%A5%E5%8A%A9%23) `209.2K 🔥` `NEW`
1. [男子杀害前女友因有坦白情节被判死缓](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%80%E5%AE%B3%E5%89%8D%E5%A5%B3%E5%8F%8B%E5%9B%A0%E6%9C%89%E5%9D%A6%E7%99%BD%E6%83%85%E8%8A%82%E8%A2%AB%E5%88%A4%E6%AD%BB%E7%BC%93%23) `207.3K 🔥` `NEW`
1. [罗永浩凑10万捐助扶老人被索赔店主](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E5%87%9110%E4%B8%87%E6%8D%90%E5%8A%A9%E6%89%B6%E8%80%81%E4%BA%BA%E8%A2%AB%E7%B4%A2%E8%B5%94%E5%BA%97%E4%B8%BB%23) `206.9K 🔥` `NEW`
1. [周柯宇仅持有中国国籍](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9F%AF%E5%AE%87%E4%BB%85%E6%8C%81%E6%9C%89%E4%B8%AD%E5%9B%BD%E5%9B%BD%E7%B1%8D%23) `198.8K 🔥` `NEW`
1. [乳房触诊当事医生称已提交诊室视频](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A%E5%BD%93%E4%BA%8B%E5%8C%BB%E7%94%9F%E7%A7%B0%E5%B7%B2%E6%8F%90%E4%BA%A4%E8%AF%8A%E5%AE%A4%E8%A7%86%E9%A2%91%23) `152.7K 🔥` `NEW`
1. [演唱会防暑出片两不误](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%E9%98%B2%E6%9A%91%E5%87%BA%E7%89%87%E4%B8%A4%E4%B8%8D%E8%AF%AF%23) `150.7K 🔥` `NEW`
1. [女子用3年垃圾桶才发现用错了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A83%E5%B9%B4%E5%9E%83%E5%9C%BE%E6%A1%B6%E6%89%8D%E5%8F%91%E7%8E%B0%E7%94%A8%E9%94%99%E4%BA%86%23) `746.2K 🔥` `+41%`
1. [宁波致1死4伤车祸司机突发疾病](https://s.weibo.com/weibo?q=%23%E5%AE%81%E6%B3%A2%E8%87%B41%E6%AD%BB4%E4%BC%A4%E8%BD%A6%E7%A5%B8%E5%8F%B8%E6%9C%BA%E7%AA%81%E5%8F%91%E7%96%BE%E7%97%85%23) `499.0K 🔥` `+41%`
1. [孙俪掉提金鹰奖](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E6%8E%89%E6%8F%90%E9%87%91%E9%B9%B0%E5%A5%96%23) `485.9K 🔥` `+42%`
1. [金鹰奖最佳男主](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E4%B8%BB%23) `482.8K 🔥` `+65%`
1. [成都蛋烘糕奶奶被镜头霸凌](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E8%9B%8B%E7%83%98%E7%B3%95%E5%A5%B6%E5%A5%B6%E8%A2%AB%E9%95%9C%E5%A4%B4%E9%9C%B8%E5%87%8C%23) `478.7K 🔥` `+44%`
1. [赵丽颖掉提金鹰奖最佳女主](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%8E%89%E6%8F%90%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%23) `473.4K 🔥` `+45%`
1. [金鹰奖把电视剧编剧打成了编刷](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8A%8A%E7%94%B5%E8%A7%86%E5%89%A7%E7%BC%96%E5%89%A7%E6%89%93%E6%88%90%E4%BA%86%E7%BC%96%E5%88%B7%23) `466.7K 🔥` `+41%`
1. [大众汽车拟裁员5万人 史上最大重组](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%97%E6%B1%BD%E8%BD%A6%E6%8B%9F%E8%A3%81%E5%91%985%E4%B8%87%E4%BA%BA%20%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7%E9%87%8D%E7%BB%84%23) `459.9K 🔥` `+40%`
1. [余秀华希望一百年后人类灭亡](https://s.weibo.com/weibo?q=%23%E4%BD%99%E7%A7%80%E5%8D%8E%E5%B8%8C%E6%9C%9B%E4%B8%80%E7%99%BE%E5%B9%B4%E5%90%8E%E4%BA%BA%E7%B1%BB%E7%81%AD%E4%BA%A1%23) `454.6K 🔥` `+50%`
1. [乳房触诊20多次后发现结节摸不到](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A20%E5%A4%9A%E6%AC%A1%E5%90%8E%E5%8F%91%E7%8E%B0%E7%BB%93%E8%8A%82%E6%91%B8%E4%B8%8D%E5%88%B0%23) `452.4K 🔥` `+50%`
1. [原来不是挂面不好吃](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E6%98%AF%E6%8C%82%E9%9D%A2%E4%B8%8D%E5%A5%BD%E5%90%83%23) `452.4K 🔥` `+50%`
1. [张凌赫母校不请张凌赫因为安保不行](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%AF%8D%E6%A0%A1%E4%B8%8D%E8%AF%B7%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%A0%E4%B8%BA%E5%AE%89%E4%BF%9D%E4%B8%8D%E8%A1%8C%23) `424.6K 🔥` `+25%`
1. [金鹰奖提名名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `3.1M 🔥`
1. [多款APP被通报](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%AC%BEAPP%E8%A2%AB%E9%80%9A%E6%8A%A5%23) `1.1M 🔥`
1. [中国连续17年保持全球第二大进口市场](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%BF%9E%E7%BB%AD17%E5%B9%B4%E4%BF%9D%E6%8C%81%E5%85%A8%E7%90%83%E7%AC%AC%E4%BA%8C%E5%A4%A7%E8%BF%9B%E5%8F%A3%E5%B8%82%E5%9C%BA%23) `843.3K 🔥`
1. [网传爱情公寓回归季阵容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%9B%9E%E5%BD%92%E5%AD%A3%E9%98%B5%E5%AE%B9%23) `835.7K 🔥`
1. [杨幂掉提](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%8E%89%E6%8F%90%23) `800.7K 🔥`
1. [德芙文案 翻车](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E8%8A%99%E6%96%87%E6%A1%88%20%E7%BF%BB%E8%BD%A6%23) `498.5K 🔥`
1. [癌症疫苗来了](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%E6%9D%A5%E4%BA%86%23) `472.0K 🔥`
1. [爱情公寓](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%23) `453.1K 🔥`
1. [曾舜晞跟孟子义吵架会哭](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E8%B7%9F%E5%AD%9F%E5%AD%90%E4%B9%89%E5%90%B5%E6%9E%B6%E4%BC%9A%E5%93%AD%23) `335.7K 🔥`
1. [第一批拒绝上岸的人出现了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E6%8B%92%E7%BB%9D%E4%B8%8A%E5%B2%B8%E7%9A%84%E4%BA%BA%E5%87%BA%E7%8E%B0%E4%BA%86%23) `268.5K 🔥`
1. [85岁爷爷把8岁自闭孙子当正常娃带](https://s.weibo.com/weibo?q=%2385%E5%B2%81%E7%88%B7%E7%88%B7%E6%8A%8A8%E5%B2%81%E8%87%AA%E9%97%AD%E5%AD%99%E5%AD%90%E5%BD%93%E6%AD%A3%E5%B8%B8%E5%A8%83%E5%B8%A6%23) `260.3K 🔥`
1. [曝iPhone18Pro涨幅堪称温和](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18Pro%E6%B6%A8%E5%B9%85%E5%A0%AA%E7%A7%B0%E6%B8%A9%E5%92%8C%23) `235.9K 🔥`
1. [TOP二周年演唱会](https://s.weibo.com/weibo?q=%23TOP%E4%BA%8C%E5%91%A8%E5%B9%B4%E6%BC%94%E5%94%B1%E4%BC%9A%23) `206.6K 🔥`
1. [体育生为爱3次高考女友回应分手](https://s.weibo.com/weibo?q=%23%E4%BD%93%E8%82%B2%E7%94%9F%E4%B8%BA%E7%88%B13%E6%AC%A1%E9%AB%98%E8%80%83%E5%A5%B3%E5%8F%8B%E5%9B%9E%E5%BA%94%E5%88%86%E6%89%8B%23) `176.0K 🔥`
1. [氧化菊删除权志龙签名酒视频](https://s.weibo.com/weibo?q=%23%E6%B0%A7%E5%8C%96%E8%8F%8A%E5%88%A0%E9%99%A4%E6%9D%83%E5%BF%97%E9%BE%99%E7%AD%BE%E5%90%8D%E9%85%92%E8%A7%86%E9%A2%91%23) `220.7K 🔥` `-26%`
1. [监控拍下男子割喉杀害前女友过程](https://s.weibo.com/weibo?q=%23%E7%9B%91%E6%8E%A7%E6%8B%8D%E4%B8%8B%E7%94%B7%E5%AD%90%E5%89%B2%E5%96%89%E6%9D%80%E5%AE%B3%E5%89%8D%E5%A5%B3%E5%8F%8B%E8%BF%87%E7%A8%8B%23) `209.3K 🔥` `-29%`
1. [科比生前最后一张公开照片](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%AF%94%E7%94%9F%E5%89%8D%E6%9C%80%E5%90%8E%E4%B8%80%E5%BC%A0%E5%85%AC%E5%BC%80%E7%85%A7%E7%89%87%23) `208.1K 🔥` `-22%`
1. [自动驾驶状态违法由车企担责](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E7%8A%B6%E6%80%81%E8%BF%9D%E6%B3%95%E7%94%B1%E8%BD%A6%E4%BC%81%E6%8B%85%E8%B4%A3%23) `183.6K 🔥` `-44%`
1. [孙浩评论了刘浩存](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%B5%A9%E8%AF%84%E8%AE%BA%E4%BA%86%E5%88%98%E6%B5%A9%E5%AD%98%23) `163.0K 🔥` `-37%`
1. [A股成交1.83万亿缩量1756亿](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%88%90%E4%BA%A41.83%E4%B8%87%E4%BA%BF%E7%BC%A9%E9%87%8F1756%E4%BA%BF%23) `149.5K 🔥` `-50%`

Updated at 2026-08-25 17:45:33

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
