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

1. [对国内成品油价格采取临时调控 (Adopt temporary controls on domestic refined oil prices)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%9B%BD%E5%86%85%E6%88%90%E5%93%81%E6%B2%B9%E4%BB%B7%E6%A0%BC%E9%87%87%E5%8F%96%E4%B8%B4%E6%97%B6%E8%B0%83%E6%8E%A7%23) `1.5M 🔥` `NEW`
1. [微厘空间02组卫星发射圆满成功](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8E%98%E7%A9%BA%E9%97%B402%E7%BB%84%E5%8D%AB%E6%98%9F%E5%8F%91%E5%B0%84%E5%9C%86%E6%BB%A1%E6%88%90%E5%8A%9F%23) `691.8K 🔥` `NEW`
1. [华为发布会](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `347.9K 🔥` `NEW`
1. [NBA点赞成金](https://s.weibo.com/weibo?q=%23NBA%E7%82%B9%E8%B5%9E%E6%88%90%E9%87%91%23) `339.9K 🔥` `NEW`
1. [梅姨或判重刑甚至死刑](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E6%88%96%E5%88%A4%E9%87%8D%E5%88%91%E7%94%9A%E8%87%B3%E6%AD%BB%E5%88%91%23) `200.6K 🔥` `NEW`
1. [股灾](https://s.weibo.com/weibo?q=%23%E8%82%A1%E7%81%BE%23) `197.2K 🔥` `NEW`
1. [金价年内涨幅已清零](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%B9%B4%E5%86%85%E6%B6%A8%E5%B9%85%E5%B7%B2%E6%B8%85%E9%9B%B6%23) `193.8K 🔥` `NEW`
1. [逐玉里康婆子的大孙子现实长这样](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%87%8C%E5%BA%B7%E5%A9%86%E5%AD%90%E7%9A%84%E5%A4%A7%E5%AD%99%E5%AD%90%E7%8E%B0%E5%AE%9E%E9%95%BF%E8%BF%99%E6%A0%B7%23) `190.7K 🔥` `NEW`
1. [NX8顶流空间百试可乐](https://s.weibo.com/weibo?q=%23NX8%E9%A1%B6%E6%B5%81%E7%A9%BA%E9%97%B4%E7%99%BE%E8%AF%95%E5%8F%AF%E4%B9%90%23) `181.8K 🔥` `NEW`
1. [胡歌耿超解码中国人自己的高端拉格](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E8%80%BF%E8%B6%85%E8%A7%A3%E7%A0%81%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E9%AB%98%E7%AB%AF%E6%8B%89%E6%A0%BC%23) `180.0K 🔥` `NEW`
1. [学生2死11伤事故肇事司机已被控制 (The driver responsible for the accident that killed 2 students and injured 11 has been controlled)](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%94%9F2%E6%AD%BB11%E4%BC%A4%E4%BA%8B%E6%95%85%E8%82%87%E4%BA%8B%E5%8F%B8%E6%9C%BA%E5%B7%B2%E8%A2%AB%E6%8E%A7%E5%88%B6%23) `180.0K 🔥` `NEW`
1. [金价八连跌抄底大军越买越跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%85%AB%E8%BF%9E%E8%B7%8C%E6%8A%84%E5%BA%95%E5%A4%A7%E5%86%9B%E8%B6%8A%E4%B9%B0%E8%B6%8A%E8%B7%8C%23) `180.0K 🔥` `NEW`
1. [万茜徒手拎起190斤观众](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8C%9C%E5%BE%92%E6%89%8B%E6%8B%8E%E8%B5%B7190%E6%96%A4%E8%A7%82%E4%BC%97%23) `180.0K 🔥` `NEW`
1. [去年没换手机的人后悔了吗](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%B9%B4%E6%B2%A1%E6%8D%A2%E6%89%8B%E6%9C%BA%E7%9A%84%E4%BA%BA%E5%90%8E%E6%82%94%E4%BA%86%E5%90%97%23) `158.7K 🔥` `NEW`
1. [将门毒后](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%23) `155.1K 🔥` `NEW`
1. [国务院挂牌督办贵州赫章交通事故](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8A%A1%E9%99%A2%E6%8C%82%E7%89%8C%E7%9D%A3%E5%8A%9E%E8%B4%B5%E5%B7%9E%E8%B5%AB%E7%AB%A0%E4%BA%A4%E9%80%9A%E4%BA%8B%E6%95%85%23) `144.4K 🔥` `NEW`
1. [华为Mate80风驰版正式发布](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMate80%E9%A3%8E%E9%A9%B0%E7%89%88%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83%23) `134.2K 🔥` `NEW`
1. [金饰价从最高点大跌约340元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E4%BB%8E%E6%9C%80%E9%AB%98%E7%82%B9%E5%A4%A7%E8%B7%8C%E7%BA%A6340%E5%85%83%23) `119.2K 🔥` `NEW`
1. [上证指数跌破3800点](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E8%AF%81%E6%8C%87%E6%95%B0%E8%B7%8C%E7%A0%B43800%E7%82%B9%23) `110.6K 🔥` `NEW`
1. [小酒窝被周也宠成小公主](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E8%A2%AB%E5%91%A8%E4%B9%9F%E5%AE%A0%E6%88%90%E5%B0%8F%E5%85%AC%E4%B8%BB%23) `108.6K 🔥` `NEW`
1. [起底AI骚扰电话灰产后续 (Follow-up to AI harassment calls)](https://s.weibo.com/weibo?q=%23%E8%B5%B7%E5%BA%95AI%E9%AA%9A%E6%89%B0%E7%94%B5%E8%AF%9D%E7%81%B0%E4%BA%A7%E5%90%8E%E7%BB%AD%23) `108.0K 🔥` `NEW`
1. [孙海洋说10年前去过梅姨居住的村庄](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%B5%B7%E6%B4%8B%E8%AF%B410%E5%B9%B4%E5%89%8D%E5%8E%BB%E8%BF%87%E6%A2%85%E5%A7%A8%E5%B1%85%E4%BD%8F%E7%9A%84%E6%9D%91%E5%BA%84%23) `92.0K 🔥` `NEW`
1. [梅姨现被羁押于增城区看守所](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E7%8E%B0%E8%A2%AB%E7%BE%81%E6%8A%BC%E4%BA%8E%E5%A2%9E%E5%9F%8E%E5%8C%BA%E7%9C%8B%E5%AE%88%E6%89%80%23) `91.7K 🔥` `NEW`
1. [中国是国际舞台仅剩的成年人](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%98%AF%E5%9B%BD%E9%99%85%E8%88%9E%E5%8F%B0%E4%BB%85%E5%89%A9%E7%9A%84%E6%88%90%E5%B9%B4%E4%BA%BA%23) `91.6K 🔥` `NEW`
1. [张子萱额头被卷发棒烫伤](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E8%90%B1%E9%A2%9D%E5%A4%B4%E8%A2%AB%E5%8D%B7%E5%8F%91%E6%A3%92%E7%83%AB%E4%BC%A4%23) `88.7K 🔥` `NEW`
1. [东航回应MU5128航班起火](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%88%AA%E5%9B%9E%E5%BA%94MU5128%E8%88%AA%E7%8F%AD%E8%B5%B7%E7%81%AB%23) `85.1K 🔥` `NEW`
1. [人与人之间的羁绊有一个瞬间就够了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%8E%E4%BA%BA%E4%B9%8B%E9%97%B4%E7%9A%84%E7%BE%81%E7%BB%8A%E6%9C%89%E4%B8%80%E4%B8%AA%E7%9E%AC%E9%97%B4%E5%B0%B1%E5%A4%9F%E4%BA%86%23) `76.8K 🔥` `NEW`
1. [弟弟偷抵32万新车哥哥气炸](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E5%81%B7%E6%8A%B532%E4%B8%87%E6%96%B0%E8%BD%A6%E5%93%A5%E5%93%A5%E6%B0%94%E7%82%B8%23) `876.7K 🔥` `+331%`
1. [黄金猴市来了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%8C%B4%E5%B8%82%E6%9D%A5%E4%BA%86%23) `549.6K 🔥` `+260%`
1. [眉姐姐来卖丑衣服了](https://s.weibo.com/weibo?q=%23%E7%9C%89%E5%A7%90%E5%A7%90%E6%9D%A5%E5%8D%96%E4%B8%91%E8%A1%A3%E6%9C%8D%E4%BA%86%23) `340.9K 🔥` `+334%`
1. [股市 (stock market)](https://s.weibo.com/weibo?q=%23%E8%82%A1%E5%B8%82%23) `156.1K 🔥` `+21%`
1. [女子脖子疼一周确诊胃癌已全身转移](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%84%96%E5%AD%90%E7%96%BC%E4%B8%80%E5%91%A8%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E5%B7%B2%E5%85%A8%E8%BA%AB%E8%BD%AC%E7%A7%BB%23) `141.9K 🔥`
1. [金价重回3位数](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%87%8D%E5%9B%9E3%E4%BD%8D%E6%95%B0%23) `103.0K 🔥`
1. [伊朗用升级后的作战系统打击美以](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%94%A8%E5%8D%87%E7%BA%A7%E5%90%8E%E7%9A%84%E4%BD%9C%E6%88%98%E7%B3%BB%E7%BB%9F%E6%89%93%E5%87%BB%E7%BE%8E%E4%BB%A5%23) `87.5K 🔥`
1. [伊朗导弹上写着感谢西班牙首相](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E4%B8%8A%E5%86%99%E7%9D%80%E6%84%9F%E8%B0%A2%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A6%96%E7%9B%B8%23) `331.7K 🔥` `-52%`
1. [老中医离世后儿子上交460g罂粟壳](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%AD%E5%8C%BB%E7%A6%BB%E4%B8%96%E5%90%8E%E5%84%BF%E5%AD%90%E4%B8%8A%E4%BA%A4460g%E7%BD%82%E7%B2%9F%E5%A3%B3%23) `294.2K 🔥` `-58%`
1. [日本教授中国旅游后感叹日本变态](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%95%99%E6%8E%88%E4%B8%AD%E5%9B%BD%E6%97%85%E6%B8%B8%E5%90%8E%E6%84%9F%E5%8F%B9%E6%97%A5%E6%9C%AC%E5%8F%98%E6%80%81%23) `202.4K 🔥` `-71%`
1. [A股行情](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%A1%8C%E6%83%85%23) `196.7K 🔥` `-41%`
1. [郑合惠子将门毒后妆造](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%E5%A6%86%E9%80%A0%23) `188.8K 🔥` `-53%`
1. [长期喝桶装水的人天塌了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E5%96%9D%E6%A1%B6%E8%A3%85%E6%B0%B4%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `184.6K 🔥` `-45%`
1. [央视公布梅姨案细节 (CCTV releases details of Aunt Mei’s case)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E5%85%AC%E5%B8%83%E6%A2%85%E5%A7%A8%E6%A1%88%E7%BB%86%E8%8A%82%23) `181.0K 🔥` `-83%`
1. [逐玉豆瓣6.8 (Zhuyu Douban 6.8)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E8%B1%86%E7%93%A36.8%23) `165.9K 🔥` `-53%`
1. [网传郭晓婷王天辰合作现偶](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E5%90%88%E4%BD%9C%E7%8E%B0%E5%81%B6%23) `158.1K 🔥` `-26%`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `141.0K 🔥` `-58%`
1. [时代少年团 跑男](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E8%B7%91%E7%94%B7%23) `140.0K 🔥` `-33%`
1. [32岁孕妈怀孕后容貌变化明显 (32-year-old pregnant mother’s appearance changed significantly after pregnancy)](https://s.weibo.com/weibo?q=%2332%E5%B2%81%E5%AD%95%E5%A6%88%E6%80%80%E5%AD%95%E5%90%8E%E5%AE%B9%E8%B2%8C%E5%8F%98%E5%8C%96%E6%98%8E%E6%98%BE%23) `128.9K 🔥` `-33%`
1. [张凌赫喜欢浴池吻 好糟糕的原因](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%96%9C%E6%AC%A2%E6%B5%B4%E6%B1%A0%E5%90%BB%20%E5%A5%BD%E7%B3%9F%E7%B3%95%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `122.4K 🔥` `-47%`
1. [熟人羞耻症](https://s.weibo.com/weibo?q=%23%E7%86%9F%E4%BA%BA%E7%BE%9E%E8%80%BB%E7%97%87%23) `122.4K 🔥` `-74%`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `113.2K 🔥` `-26%`
1. [贵州赫章交通事故致学生2死11伤 (Traffic accident in Hezhang, Guizhou kills 2 students and injures 11)](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E8%B5%AB%E7%AB%A0%E4%BA%A4%E9%80%9A%E4%BA%8B%E6%95%85%E8%87%B4%E5%AD%A6%E7%94%9F2%E6%AD%BB11%E4%BC%A4%23) `107.9K 🔥` `-50%`
1. [何润东演的项羽 (Xiang Yu played by Peter Ho)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E6%BC%94%E7%9A%84%E9%A1%B9%E7%BE%BD%23) `84.9K 🔥` `-63%`

Updated at 2026-03-23 15:24:50

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
