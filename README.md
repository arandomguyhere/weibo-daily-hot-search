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

1. [店家支付的1.9万元或获补贴返还 (The 19,000 yuan paid by the store may be refunded with subsidies)](https://s.weibo.com/weibo?q=%23%E5%BA%97%E5%AE%B6%E6%94%AF%E4%BB%98%E7%9A%841.9%E4%B8%87%E5%85%83%E6%88%96%E8%8E%B7%E8%A1%A5%E8%B4%B4%E8%BF%94%E8%BF%98%23) `877.0K 🔥` `NEW`
1. [中国好药各有真招](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%BD%E8%8D%AF%E5%90%84%E6%9C%89%E7%9C%9F%E6%8B%9B%23) `685.2K 🔥` `NEW`
1. [卓沅初舞台被叫停](https://s.weibo.com/weibo?q=%23%E5%8D%93%E6%B2%85%E5%88%9D%E8%88%9E%E5%8F%B0%E8%A2%AB%E5%8F%AB%E5%81%9C%23) `457.3K 🔥` `NEW`
1. [王楚钦100周世排第一](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6100%E5%91%A8%E4%B8%96%E6%8E%92%E7%AC%AC%E4%B8%80%23) `386.3K 🔥` `NEW`
1. [张凌赫母校不请张凌赫因为安保不行](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%AF%8D%E6%A0%A1%E4%B8%8D%E8%AF%B7%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%A0%E4%B8%BA%E5%AE%89%E4%BF%9D%E4%B8%8D%E8%A1%8C%23) `340.4K 🔥` `NEW`
1. [曾舜晞跟孟子义吵架会哭](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E8%B7%9F%E5%AD%9F%E5%AD%90%E4%B9%89%E5%90%B5%E6%9E%B6%E4%BC%9A%E5%93%AD%23) `339.3K 🔥` `NEW`
1. [监控拍下男子割喉杀害前女友过程](https://s.weibo.com/weibo?q=%23%E7%9B%91%E6%8E%A7%E6%8B%8D%E4%B8%8B%E7%94%B7%E5%AD%90%E5%89%B2%E5%96%89%E6%9D%80%E5%AE%B3%E5%89%8D%E5%A5%B3%E5%8F%8B%E8%BF%87%E7%A8%8B%23) `339.1K 🔥` `NEW`
1. [刘亦菲回复祝福](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%9B%9E%E5%A4%8D%E7%A5%9D%E7%A6%8F%23) `338.7K 🔥` `NEW`
1. [印度高管赴华签证过审率骤降](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%AB%98%E7%AE%A1%E8%B5%B4%E5%8D%8E%E7%AD%BE%E8%AF%81%E8%BF%87%E5%AE%A1%E7%8E%87%E9%AA%A4%E9%99%8D%23) `337.8K 🔥` `NEW`
1. [85岁爷爷把8岁自闭孙子当正常娃带](https://s.weibo.com/weibo?q=%2385%E5%B2%81%E7%88%B7%E7%88%B7%E6%8A%8A8%E5%B2%81%E8%87%AA%E9%97%AD%E5%AD%99%E5%AD%90%E5%BD%93%E6%AD%A3%E5%B8%B8%E5%A8%83%E5%B8%A6%23) `336.9K 🔥` `NEW`
1. [追觅说明 (Search instructions)](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E8%A7%85%E8%AF%B4%E6%98%8E%23) `271.3K 🔥` `NEW`
1. [谢娜宣传何炅舞蹈新风暴](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%AE%A3%E4%BC%A0%E4%BD%95%E7%82%85%E8%88%9E%E8%B9%88%E6%96%B0%E9%A3%8E%E6%9A%B4%23) `258.4K 🔥` `NEW`
1. [ai也美不过陈都灵](https://s.weibo.com/weibo?q=%23ai%E4%B9%9F%E7%BE%8E%E4%B8%8D%E8%BF%87%E9%99%88%E9%83%BD%E7%81%B5%23) `234.8K 🔥` `NEW`
1. [男生为爱三次高考遗憾分手](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E4%B8%BA%E7%88%B1%E4%B8%89%E6%AC%A1%E9%AB%98%E8%80%83%E9%81%97%E6%86%BE%E5%88%86%E6%89%8B%23) `234.3K 🔥` `NEW`
1. [余秀华希望一百年后人类灭亡](https://s.weibo.com/weibo?q=%23%E4%BD%99%E7%A7%80%E5%8D%8E%E5%B8%8C%E6%9C%9B%E4%B8%80%E7%99%BE%E5%B9%B4%E5%90%8E%E4%BA%BA%E7%B1%BB%E7%81%AD%E4%BA%A1%23) `648.1K 🔥` `+229%`
1. [孙浩评论了刘浩存](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%B5%A9%E8%AF%84%E8%AE%BA%E4%BA%86%E5%88%98%E6%B5%A9%E5%AD%98%23) `339.9K 🔥` `+31%`
1. [自动驾驶状态违法由车企担责](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E7%8A%B6%E6%80%81%E8%BF%9D%E6%B3%95%E7%94%B1%E8%BD%A6%E4%BC%81%E6%8B%85%E8%B4%A3%23) `338.2K 🔥` `+29%`
1. [第一批拒绝上岸的人出现了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E6%8B%92%E7%BB%9D%E4%B8%8A%E5%B2%B8%E7%9A%84%E4%BA%BA%E5%87%BA%E7%8E%B0%E4%BA%86%23) `337.5K 🔥` `+29%`
1. [谁来管管现在的垃圾袋](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%A5%E7%AE%A1%E7%AE%A1%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%9E%83%E5%9C%BE%E8%A2%8B%23) `336.4K 🔥` `+29%`
1. [向太提起施南生鲁豫气得胃疼](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E6%8F%90%E8%B5%B7%E6%96%BD%E5%8D%97%E7%94%9F%E9%B2%81%E8%B1%AB%E6%B0%94%E5%BE%97%E8%83%83%E7%96%BC%23) `318.2K 🔥` `+22%`
1. [官方确认帮扶老人遭索赔店主不担责](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E7%A1%AE%E8%AE%A4%E5%B8%AE%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%94%E5%BA%97%E4%B8%BB%E4%B8%8D%E6%8B%85%E8%B4%A3%23) `461.2K 🔥`
1. [被奈雪这杯酸奶昔治愈了 (Healed by Nayuki’s yogurt smoothie)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%A5%88%E9%9B%AA%E8%BF%99%E6%9D%AF%E9%85%B8%E5%A5%B6%E6%98%94%E6%B2%BB%E6%84%88%E4%BA%86%23) `458.5K 🔥`
1. [房东称帮扶老人店主可能会转让门店](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%9C%E7%A7%B0%E5%B8%AE%E6%89%B6%E8%80%81%E4%BA%BA%E5%BA%97%E4%B8%BB%E5%8F%AF%E8%83%BD%E4%BC%9A%E8%BD%AC%E8%AE%A9%E9%97%A8%E5%BA%97%23) `340.4K 🔥`
1. [成都蛋烘糕奶奶被镜头霸凌](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E8%9B%8B%E7%83%98%E7%B3%95%E5%A5%B6%E5%A5%B6%E8%A2%AB%E9%95%9C%E5%A4%B4%E9%9C%B8%E5%87%8C%23) `339.8K 🔥`
1. [徐克感谢向太为他澄清没有孩子](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%85%8B%E6%84%9F%E8%B0%A2%E5%90%91%E5%A4%AA%E4%B8%BA%E4%BB%96%E6%BE%84%E6%B8%85%E6%B2%A1%E6%9C%89%E5%AD%A9%E5%AD%90%23) `338.5K 🔥`
1. [电影八仙](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%85%AB%E4%BB%99%23) `337.9K 🔥`
1. [于正说周柯宇母语不是中文](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E8%AF%B4%E5%91%A8%E6%9F%AF%E5%AE%87%E6%AF%8D%E8%AF%AD%E4%B8%8D%E6%98%AF%E4%B8%AD%E6%96%87%23) `337.0K 🔥`
1. [鞠婧祎腿好长](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%85%BF%E5%A5%BD%E9%95%BF%23) `336.4K 🔥`
1. [陈瑜林子濠恋情官宣](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%9C%E6%9E%97%E5%AD%90%E6%BF%A0%E6%81%8B%E6%83%85%E5%AE%98%E5%AE%A3%23) `312.0K 🔥`
1. [中国女子曼谷酒店外遭绑跳车自救](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E6%9B%BC%E8%B0%B7%E9%85%92%E5%BA%97%E5%A4%96%E9%81%AD%E7%BB%91%E8%B7%B3%E8%BD%A6%E8%87%AA%E6%95%91%23) `288.3K 🔥`
1. [韩剧史上最好的男主交替场面](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%89%A7%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A5%BD%E7%9A%84%E7%94%B7%E4%B8%BB%E4%BA%A4%E6%9B%BF%E5%9C%BA%E9%9D%A2%23) `283.6K 🔥`
1. [女子7年没拔洗衣机插头引发火灾](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%907%E5%B9%B4%E6%B2%A1%E6%8B%94%E6%B4%97%E8%A1%A3%E6%9C%BA%E6%8F%92%E5%A4%B4%E5%BC%95%E5%8F%91%E7%81%AB%E7%81%BE%23) `281.2K 🔥`
1. [杭州女子电梯遭骚扰反被索赔5000元](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%A5%B3%E5%AD%90%E7%94%B5%E6%A2%AF%E9%81%AD%E9%AA%9A%E6%89%B0%E5%8F%8D%E8%A2%AB%E7%B4%A2%E8%B5%945000%E5%85%83%23) `274.5K 🔥`
1. [不要对每件事都有反应](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%AF%B9%E6%AF%8F%E4%BB%B6%E4%BA%8B%E9%83%BD%E6%9C%89%E5%8F%8D%E5%BA%94%23) `256.8K 🔥`
1. [林子濠是林依轮儿子](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E6%BF%A0%E6%98%AF%E6%9E%97%E4%BE%9D%E8%BD%AE%E5%84%BF%E5%AD%90%23) `243.3K 🔥`
1. [追觅业务发展说明](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E8%A7%85%E4%B8%9A%E5%8A%A1%E5%8F%91%E5%B1%95%E8%AF%B4%E6%98%8E%23) `239.9K 🔥`
1. [老人家属抬遗体堵门涉嫌寻衅滋事](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%AE%B6%E5%B1%9E%E6%8A%AC%E9%81%97%E4%BD%93%E5%A0%B5%E9%97%A8%E6%B6%89%E5%AB%8C%E5%AF%BB%E8%A1%85%E6%BB%8B%E4%BA%8B%23) `237.5K 🔥`
1. [光与夜之恋齐司礼](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%E9%BD%90%E5%8F%B8%E7%A4%BC%23) `236.6K 🔥`
1. [运动可以解决生活中很多问题](https://s.weibo.com/weibo?q=%23%E8%BF%90%E5%8A%A8%E5%8F%AF%E4%BB%A5%E8%A7%A3%E5%86%B3%E7%94%9F%E6%B4%BB%E4%B8%AD%E5%BE%88%E5%A4%9A%E9%97%AE%E9%A2%98%23) `228.4K 🔥`
1. [李佳航回应李金铭娄艺潇邓家佳合体](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E8%88%AA%E5%9B%9E%E5%BA%94%E6%9D%8E%E9%87%91%E9%93%AD%E5%A8%84%E8%89%BA%E6%BD%87%E9%82%93%E5%AE%B6%E4%BD%B3%E5%90%88%E4%BD%93%23) `220.1K 🔥`
1. [一医院改成酒店后走红](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8C%BB%E9%99%A2%E6%94%B9%E6%88%90%E9%85%92%E5%BA%97%E5%90%8E%E8%B5%B0%E7%BA%A2%23) `199.0K 🔥`
1. [德芙文案 翻车](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E8%8A%99%E6%96%87%E6%A1%88%20%E7%BF%BB%E8%BD%A6%23) `1.4M 🔥` `-21%`
1. [神23乘组天宫vlog上新](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E4%B9%98%E7%BB%84%E5%A4%A9%E5%AE%ABvlog%E4%B8%8A%E6%96%B0%23) `686.8K 🔥` `-47%`
1. [双世宠妃男女主现状](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%B8%96%E5%AE%A0%E5%A6%83%E7%94%B7%E5%A5%B3%E4%B8%BB%E7%8E%B0%E7%8A%B6%23) `664.6K 🔥` `-29%`
1. [成都蛋烘糕奶奶儿子已因病去世](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E8%9B%8B%E7%83%98%E7%B3%95%E5%A5%B6%E5%A5%B6%E5%84%BF%E5%AD%90%E5%B7%B2%E5%9B%A0%E7%97%85%E5%8E%BB%E4%B8%96%23) `415.9K 🔥` `-21%`
1. [女子买到长蘑菇柿子已寄给研究所](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B0%E5%88%B0%E9%95%BF%E8%98%91%E8%8F%87%E6%9F%BF%E5%AD%90%E5%B7%B2%E5%AF%84%E7%BB%99%E7%A0%94%E7%A9%B6%E6%89%80%23) `265.3K 🔥` `-35%`
1. [男子求复合遭拒割喉前女友捅数十刀](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%B1%82%E5%A4%8D%E5%90%88%E9%81%AD%E6%8B%92%E5%89%B2%E5%96%89%E5%89%8D%E5%A5%B3%E5%8F%8B%E6%8D%85%E6%95%B0%E5%8D%81%E5%88%80%23) `204.0K 🔥` `-36%`
1. [光与夜之恋](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%23) `195.9K 🔥` `-23%`
1. [孟子义拉不开便利店门](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%8B%89%E4%B8%8D%E5%BC%80%E4%BE%BF%E5%88%A9%E5%BA%97%E9%97%A8%23) `183.3K 🔥` `-25%`
1. [心动的信号](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A8%E7%9A%84%E4%BF%A1%E5%8F%B7%23) `182.1K 🔥` `-29%`

Updated at 2026-08-25 14:37:20

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
