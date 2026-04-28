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

1. [腾讯客服回应朋友圈排版变了 (Tencent customer service responded that the layout of Moments has changed)](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%94%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%8E%92%E7%89%88%E5%8F%98%E4%BA%86%23) `829.3K 🔥` `NEW`
1. [五一全社会流动预计超15亿人次](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%85%A8%E7%A4%BE%E4%BC%9A%E6%B5%81%E5%8A%A8%E9%A2%84%E8%AE%A1%E8%B6%8515%E4%BA%BF%E4%BA%BA%E6%AC%A1%23) `653.2K 🔥` `NEW`
1. [铁证 刘宇宁](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%AF%81%20%E5%88%98%E5%AE%87%E5%AE%81%23) `599.3K 🔥` `NEW`
1. [伪装 这都用炽阳神光吗](https://s.weibo.com/weibo?q=%23%E4%BC%AA%E8%A3%85%20%E8%BF%99%E9%83%BD%E7%94%A8%E7%82%BD%E9%98%B3%E7%A5%9E%E5%85%89%E5%90%97%23) `390.9K 🔥` `NEW`
1. [黄子弘凡 银河左岸出场顺序](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%20%E9%93%B6%E6%B2%B3%E5%B7%A6%E5%B2%B8%E5%87%BA%E5%9C%BA%E9%A1%BA%E5%BA%8F%23) `387.8K 🔥` `NEW`
1. [宗师正脸](https://s.weibo.com/weibo?q=%23%E5%AE%97%E5%B8%88%E6%AD%A3%E8%84%B8%23) `371.6K 🔥` `NEW`
1. [还以为重播何以笙箫默了](https://s.weibo.com/weibo?q=%23%E8%BF%98%E4%BB%A5%E4%B8%BA%E9%87%8D%E6%92%AD%E4%BD%95%E4%BB%A5%E7%AC%99%E7%AE%AB%E9%BB%98%E4%BA%86%23) `320.1K 🔥` `NEW`
1. [订婚强奸案男子母亲说带他回归正常生活](https://s.weibo.com/weibo?q=%23%E8%AE%A2%E5%A9%9A%E5%BC%BA%E5%A5%B8%E6%A1%88%E7%94%B7%E5%AD%90%E6%AF%8D%E4%BA%B2%E8%AF%B4%E5%B8%A6%E4%BB%96%E5%9B%9E%E5%BD%92%E6%AD%A3%E5%B8%B8%E7%94%9F%E6%B4%BB%23) `315.5K 🔥` `NEW`
1. [爱情没有神话 秦雯](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E6%B2%A1%E6%9C%89%E7%A5%9E%E8%AF%9D%20%E7%A7%A6%E9%9B%AF%23) `312.6K 🔥` `NEW`
1. [李小冉清唱惊鸿一面](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%B8%85%E5%94%B1%E6%83%8A%E9%B8%BF%E4%B8%80%E9%9D%A2%23) `310.3K 🔥` `NEW`
1. [玉龙雪山景区报警 (Jade Dragon Snow Mountain Scenic Area Alarm)](https://s.weibo.com/weibo?q=%23%E7%8E%89%E9%BE%99%E9%9B%AA%E5%B1%B1%E6%99%AF%E5%8C%BA%E6%8A%A5%E8%AD%A6%23) `307.5K 🔥` `NEW`
1. [官方通报老师批语你的字和你一样丑](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E8%80%81%E5%B8%88%E6%89%B9%E8%AF%AD%E4%BD%A0%E7%9A%84%E5%AD%97%E5%92%8C%E4%BD%A0%E4%B8%80%E6%A0%B7%E4%B8%91%23) `307.4K 🔥` `NEW`
1. [易烊千玺画的直立行走](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%94%BB%E7%9A%84%E7%9B%B4%E7%AB%8B%E8%A1%8C%E8%B5%B0%23) `306.3K 🔥` `NEW`
1. [韩汶栩 第四个嫂子](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B1%B6%E6%A0%A9%20%E7%AC%AC%E5%9B%9B%E4%B8%AA%E5%AB%82%E5%AD%90%23) `305.2K 🔥` `NEW`
1. [于文文被蔡卓妍结婚吓一跳](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%96%87%E6%96%87%E8%A2%AB%E8%94%A1%E5%8D%93%E5%A6%8D%E7%BB%93%E5%A9%9A%E5%90%93%E4%B8%80%E8%B7%B3%23) `304.7K 🔥` `NEW`
1. [中国大五座SUV空间奇迹](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%A7%E4%BA%94%E5%BA%A7SUV%E7%A9%BA%E9%97%B4%E5%A5%87%E8%BF%B9%23) `304.2K 🔥` `NEW`
1. [男子许诺3万包养费骗4人发生关系](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AE%B8%E8%AF%BA3%E4%B8%87%E5%8C%85%E5%85%BB%E8%B4%B9%E9%AA%974%E4%BA%BA%E5%8F%91%E7%94%9F%E5%85%B3%E7%B3%BB%23) `303.1K 🔥` `NEW`
1. [张慧雯逆袭](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E9%80%86%E8%A2%AD%23) `303.1K 🔥` `NEW`
1. [律师回应Rookie道歉](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E5%9B%9E%E5%BA%94Rookie%E9%81%93%E6%AD%89%23) `302.2K 🔥` `NEW`
1. [何穗一把拉住易梦玲的手](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E4%B8%80%E6%8A%8A%E6%8B%89%E4%BD%8F%E6%98%93%E6%A2%A6%E7%8E%B2%E7%9A%84%E6%89%8B%23) `254.8K 🔥` `NEW`
1. [孙艺珍儿子像翻版小玄彬 (Son Ye-jin’s son looks like a replica of Hyun Bin)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%89%BA%E7%8F%8D%E5%84%BF%E5%AD%90%E5%83%8F%E7%BF%BB%E7%89%88%E5%B0%8F%E7%8E%84%E5%BD%AC%23) `254.4K 🔥` `NEW`
1. [员工厕所玩手机照片被发400人群](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E5%8E%95%E6%89%80%E7%8E%A9%E6%89%8B%E6%9C%BA%E7%85%A7%E7%89%87%E8%A2%AB%E5%8F%91400%E4%BA%BA%E7%BE%A4%23) `234.8K 🔥` `NEW`
1. [妹妹冒用双胞胎姐姐证件](https://s.weibo.com/weibo?q=%23%E5%A6%B9%E5%A6%B9%E5%86%92%E7%94%A8%E5%8F%8C%E8%83%9E%E8%83%8E%E5%A7%90%E5%A7%90%E8%AF%81%E4%BB%B6%23) `228.8K 🔥` `NEW`
1. [高德地图登顶台湾APP下载榜](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BE%E7%99%BB%E9%A1%B6%E5%8F%B0%E6%B9%BEAPP%E4%B8%8B%E8%BD%BD%E6%A6%9C%23) `228.4K 🔥` `NEW`
1. [张凌赫开朗一次换来终生内向](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BC%80%E6%9C%97%E4%B8%80%E6%AC%A1%E6%8D%A2%E6%9D%A5%E7%BB%88%E7%94%9F%E5%86%85%E5%90%91%23) `228.4K 🔥` `NEW`
1. [普通人长见识最快的方式](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E9%95%BF%E8%A7%81%E8%AF%86%E6%9C%80%E5%BF%AB%E7%9A%84%E6%96%B9%E5%BC%8F%23) `215.2K 🔥` `NEW`
1. [孟子义和檀健次换C位失败](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%92%8C%E6%AA%80%E5%81%A5%E6%AC%A1%E6%8D%A2C%E4%BD%8D%E5%A4%B1%E8%B4%A5%23) `187.8K 🔥` `NEW`
1. [一笙报案](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%99%E6%8A%A5%E6%A1%88%23) `180.6K 🔥` `NEW`
1. [男子为娶情人逼妻子堕胎遭拒后杀妻](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%BA%E5%A8%B6%E6%83%85%E4%BA%BA%E9%80%BC%E5%A6%BB%E5%AD%90%E5%A0%95%E8%83%8E%E9%81%AD%E6%8B%92%E5%90%8E%E6%9D%80%E5%A6%BB%23) `171.3K 🔥` `NEW`
1. [女子砍1元后发现是人力车夫又加价](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A0%8D1%E5%85%83%E5%90%8E%E5%8F%91%E7%8E%B0%E6%98%AF%E4%BA%BA%E5%8A%9B%E8%BD%A6%E5%A4%AB%E5%8F%88%E5%8A%A0%E4%BB%B7%23) `170.0K 🔥` `NEW`
1. [乐道L80 (Letao L80)](https://s.weibo.com/weibo?q=%23%E4%B9%90%E9%81%93L80%23) `167.8K 🔥` `NEW`
1. [领克900大五座上市限时25.48万起](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B900%E5%A4%A7%E4%BA%94%E5%BA%A7%E4%B8%8A%E5%B8%82%E9%99%90%E6%97%B625.48%E4%B8%87%E8%B5%B7%23) `6.9M 🔥` `+1177%`
1. [阿联酋退出石油输出国组织](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%81%94%E9%85%8B%E9%80%80%E5%87%BA%E7%9F%B3%E6%B2%B9%E8%BE%93%E5%87%BA%E5%9B%BD%E7%BB%84%E7%BB%87%23) `1.1M 🔥` `+115%`
1. [副校长在工作群发亲密信息后撤回](https://s.weibo.com/weibo?q=%23%E5%89%AF%E6%A0%A1%E9%95%BF%E5%9C%A8%E5%B7%A5%E4%BD%9C%E7%BE%A4%E5%8F%91%E4%BA%B2%E5%AF%86%E4%BF%A1%E6%81%AF%E5%90%8E%E6%92%A4%E5%9B%9E%23) `305.9K 🔥` `+30%`
1. [单亲爸爸因长相血型查出儿子非亲生 (Single father discovers his son is not biological due to appearance and blood type)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BA%B2%E7%88%B8%E7%88%B8%E5%9B%A0%E9%95%BF%E7%9B%B8%E8%A1%80%E5%9E%8B%E6%9F%A5%E5%87%BA%E5%84%BF%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%23) `270.6K 🔥` `+55%`
1. [情绪压力对一个人体态的影响](https://s.weibo.com/weibo?q=%23%E6%83%85%E7%BB%AA%E5%8E%8B%E5%8A%9B%E5%AF%B9%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%BD%93%E6%80%81%E7%9A%84%E5%BD%B1%E5%93%8D%23) `270.1K 🔥` `+75%`
1. [印度男挖出亡姐遗骸扛到银行取款](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E6%8C%96%E5%87%BA%E4%BA%A1%E5%A7%90%E9%81%97%E9%AA%B8%E6%89%9B%E5%88%B0%E9%93%B6%E8%A1%8C%E5%8F%96%E6%AC%BE%23) `257.5K 🔥` `+51%`
1. [京东首发了一款皮薄馅大的冰箱 (JD.com debuts a refrigerator with thin skin and large fillings)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E9%A6%96%E5%8F%91%E4%BA%86%E4%B8%80%E6%AC%BE%E7%9A%AE%E8%96%84%E9%A6%85%E5%A4%A7%E7%9A%84%E5%86%B0%E7%AE%B1%23) `639.2K 🔥`
1. [变形计农村主人公丽姐港大研学](https://s.weibo.com/weibo?q=%23%E5%8F%98%E5%BD%A2%E8%AE%A1%E5%86%9C%E6%9D%91%E4%B8%BB%E4%BA%BA%E5%85%AC%E4%B8%BD%E5%A7%90%E6%B8%AF%E5%A4%A7%E7%A0%94%E5%AD%A6%23) `308.0K 🔥`
1. [Rookie道歉 (Rookie apologizes)](https://s.weibo.com/weibo?q=%23Rookie%E9%81%93%E6%AD%89%23) `7.5M 🔥` `-42%`
1. [断崖式垮脸其实就是水毒](https://s.weibo.com/weibo?q=%23%E6%96%AD%E5%B4%96%E5%BC%8F%E5%9E%AE%E8%84%B8%E5%85%B6%E5%AE%9E%E5%B0%B1%E6%98%AF%E6%B0%B4%E6%AF%92%23) `320.8K 🔥` `-41%`
1. [任敏被粉丝催着减肥](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E8%A2%AB%E7%B2%89%E4%B8%9D%E5%82%AC%E7%9D%80%E5%87%8F%E8%82%A5%23) `319.3K 🔥` `-36%`
1. [小钰回应谣言](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%92%B0%E5%9B%9E%E5%BA%94%E8%B0%A3%E8%A8%80%23) `316.6K 🔥` `-37%`
1. [迪奥副总裁亲自迎接迪丽热巴 (Dior Vice President personally welcomes Di Lieba)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A5%A5%E5%89%AF%E6%80%BB%E8%A3%81%E4%BA%B2%E8%87%AA%E8%BF%8E%E6%8E%A5%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `314.2K 🔥` `-33%`
1. [阿联酋](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%81%94%E9%85%8B%23) `311.6K 🔥` `-34%`
1. [韩汶栩 ZXY雨](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B1%B6%E6%A0%A9%20ZXY%E9%9B%A8%23) `307.0K 🔥` `-35%`
1. [任敏回应胖了](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E5%9B%9E%E5%BA%94%E8%83%96%E4%BA%86%23) `303.7K 🔥` `-35%`
1. [建议亲人去世一两个月后主动查负债 (It is recommended that you proactively check your debts one or two months after the death of a loved one.)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%BA%B2%E4%BA%BA%E5%8E%BB%E4%B8%96%E4%B8%80%E4%B8%A4%E4%B8%AA%E6%9C%88%E5%90%8E%E4%B8%BB%E5%8A%A8%E6%9F%A5%E8%B4%9F%E5%80%BA%23) `302.2K 🔥` `-63%`
1. [孙颖莎 红包](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%20%E7%BA%A2%E5%8C%85%23) `230.8K 🔥` `-53%`
1. [王亚飞 迪丽热巴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BA%9A%E9%A3%9E%20%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `191.4K 🔥` `-38%`
1. [黄金跌透了吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E9%80%8F%E4%BA%86%E5%90%97%23) `158.7K 🔥` `-23%`
1. [张桂源 吉隆坡](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%20%E5%90%89%E9%9A%86%E5%9D%A1%23) `156.7K 🔥` `-66%`

Updated at 2026-04-28 23:31:25

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
