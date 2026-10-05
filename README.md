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

1. [五天爬完五岳](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%A4%A9%E7%88%AC%E5%AE%8C%E4%BA%94%E5%B2%B3%23) `1.1M 🔥` `NEW`
1. [女子被缅北电诈血本无归投河自尽](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E8%A1%80%E6%9C%AC%E6%97%A0%E5%BD%92%E6%8A%95%E6%B2%B3%E8%87%AA%E5%B0%BD%23) `928.6K 🔥` `NEW`
1. [十一假期返程安全提示](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%80%E5%81%87%E6%9C%9F%E8%BF%94%E7%A8%8B%E5%AE%89%E5%85%A8%E6%8F%90%E7%A4%BA%23) `720.1K 🔥` `NEW`
1. [刘美含买超点发现戏份都被剪](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BE%8E%E5%90%AB%E4%B9%B0%E8%B6%85%E7%82%B9%E5%8F%91%E7%8E%B0%E6%88%8F%E4%BB%BD%E9%83%BD%E8%A2%AB%E5%89%AA%23) `681.9K 🔥` `NEW`
1. [飞天奖](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E5%A4%A9%E5%A5%96%23) `484.1K 🔥` `NEW`
1. [孙颖莎重回世界第一](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%87%8D%E5%9B%9E%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23) `451.6K 🔥` `NEW`
1. [郑钦文vs布兹科娃](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E5%B8%83%E5%85%B9%E7%A7%91%E5%A8%83%23) `411.2K 🔥` `NEW`
1. [沈腾说王楚然翻白眼教科书来了](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E8%AF%B4%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%BF%BB%E7%99%BD%E7%9C%BC%E6%95%99%E7%A7%91%E4%B9%A6%E6%9D%A5%E4%BA%86%23) `410.4K 🔥` `NEW`
1. [国乒28年来首次无人进男单世界前三](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%9228%E5%B9%B4%E6%9D%A5%E9%A6%96%E6%AC%A1%E6%97%A0%E4%BA%BA%E8%BF%9B%E7%94%B7%E5%8D%95%E4%B8%96%E7%95%8C%E5%89%8D%E4%B8%89%23) `398.1K 🔥` `NEW`
1. [中国警方抓捕缅北四大家族成员现场](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%AD%A6%E6%96%B9%E6%8A%93%E6%8D%95%E7%BC%85%E5%8C%97%E5%9B%9B%E5%A4%A7%E5%AE%B6%E6%97%8F%E6%88%90%E5%91%98%E7%8E%B0%E5%9C%BA%23) `390.9K 🔥` `NEW`
1. [蔡康永说是市长邀请自己去的](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%E8%AF%B4%E6%98%AF%E5%B8%82%E9%95%BF%E9%82%80%E8%AF%B7%E8%87%AA%E5%B7%B1%E5%8E%BB%E7%9A%84%23) `383.0K 🔥` `NEW`
1. [李勒优 崔晋](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%20%E5%B4%94%E6%99%8B%23) `378.4K 🔥` `NEW`
1. [2025年中国居民死亡原因TOP20](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E4%B8%AD%E5%9B%BD%E5%B1%85%E6%B0%91%E6%AD%BB%E4%BA%A1%E5%8E%9F%E5%9B%A0TOP20%23) `371.7K 🔥` `NEW`
1. [曝代露娃家破产母亲做月嫂供其追梦](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BB%A3%E9%9C%B2%E5%A8%83%E5%AE%B6%E7%A0%B4%E4%BA%A7%E6%AF%8D%E4%BA%B2%E5%81%9A%E6%9C%88%E5%AB%82%E4%BE%9B%E5%85%B6%E8%BF%BD%E6%A2%A6%23) `364.1K 🔥` `NEW`
1. [曝李梦有孩子了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E6%A2%A6%E6%9C%89%E5%AD%A9%E5%AD%90%E4%BA%86%23) `325.1K 🔥` `NEW`
1. [缅北电诈头目的钱多到发霉](https://s.weibo.com/weibo?q=%23%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E5%A4%B4%E7%9B%AE%E7%9A%84%E9%92%B1%E5%A4%9A%E5%88%B0%E5%8F%91%E9%9C%89%23) `305.3K 🔥` `NEW`
1. [蔡康永 太平轮沉船](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%20%E5%A4%AA%E5%B9%B3%E8%BD%AE%E6%B2%89%E8%88%B9%23) `304.3K 🔥` `NEW`
1. [高通将收购华为部分专利](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9A%E5%B0%86%E6%94%B6%E8%B4%AD%E5%8D%8E%E4%B8%BA%E9%83%A8%E5%88%86%E4%B8%93%E5%88%A9%23) `302.9K 🔥` `NEW`
1. [代露娃称差点退圈全靠长相思](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E7%A7%B0%E5%B7%AE%E7%82%B9%E9%80%80%E5%9C%88%E5%85%A8%E9%9D%A0%E9%95%BF%E7%9B%B8%E6%80%9D%23) `264.2K 🔥` `NEW`
1. [黄灿灿没有争取到进组的工作](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%B2%A1%E6%9C%89%E4%BA%89%E5%8F%96%E5%88%B0%E8%BF%9B%E7%BB%84%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `254.9K 🔥` `NEW`
1. [旅行上厕所最听劝的人出现了](https://s.weibo.com/weibo?q=%23%E6%97%85%E8%A1%8C%E4%B8%8A%E5%8E%95%E6%89%80%E6%9C%80%E5%90%AC%E5%8A%9D%E7%9A%84%E4%BA%BA%E5%87%BA%E7%8E%B0%E4%BA%86%23) `254.6K 🔥` `NEW`
1. [崔晋说妈妈收养李勒优没和他商量](https://s.weibo.com/weibo?q=%23%E5%B4%94%E6%99%8B%E8%AF%B4%E5%A6%88%E5%A6%88%E6%94%B6%E5%85%BB%E6%9D%8E%E5%8B%92%E4%BC%98%E6%B2%A1%E5%92%8C%E4%BB%96%E5%95%86%E9%87%8F%23) `253.0K 🔥` `NEW`
1. [38岁体制内干部求助大冰](https://s.weibo.com/weibo?q=%2338%E5%B2%81%E4%BD%93%E5%88%B6%E5%86%85%E5%B9%B2%E9%83%A8%E6%B1%82%E5%8A%A9%E5%A4%A7%E5%86%B0%23) `251.6K 🔥` `NEW`
1. [华为高通](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%AB%98%E9%80%9A%23) `251.3K 🔥` `NEW`
1. [重庆网红落地签太危险了](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E7%BD%91%E7%BA%A2%E8%90%BD%E5%9C%B0%E7%AD%BE%E5%A4%AA%E5%8D%B1%E9%99%A9%E4%BA%86%23) `250.5K 🔥` `NEW`
1. [吃个肯德基还吃出恒星所有权了](https://s.weibo.com/weibo?q=%23%E5%90%83%E4%B8%AA%E8%82%AF%E5%BE%B7%E5%9F%BA%E8%BF%98%E5%90%83%E5%87%BA%E6%81%92%E6%98%9F%E6%89%80%E6%9C%89%E6%9D%83%E4%BA%86%23) `247.4K 🔥` `NEW`
1. [37岁有房有车无贷生活](https://s.weibo.com/weibo?q=%2337%E5%B2%81%E6%9C%89%E6%88%BF%E6%9C%89%E8%BD%A6%E6%97%A0%E8%B4%B7%E7%94%9F%E6%B4%BB%23) `242.5K 🔥` `NEW`
1. [任嘉伦方喊话红果](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%E6%96%B9%E5%96%8A%E8%AF%9D%E7%BA%A2%E6%9E%9C%23) `242.4K 🔥` `NEW`
1. [孙怡唐艺昕退让者幸存了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%94%90%E8%89%BA%E6%98%95%E9%80%80%E8%AE%A9%E8%80%85%E5%B9%B8%E5%AD%98%E4%BA%86%23) `237.4K 🔥` `NEW`
1. [央视调查重庆落地签背后隐患](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%B0%83%E6%9F%A5%E9%87%8D%E5%BA%86%E8%90%BD%E5%9C%B0%E7%AD%BE%E8%83%8C%E5%90%8E%E9%9A%90%E6%82%A3%23) `234.4K 🔥` `NEW`
1. [张家齐妈妈看了四次张家齐的金项链](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E7%9C%8B%E4%BA%86%E5%9B%9B%E6%AC%A1%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%9A%84%E9%87%91%E9%A1%B9%E9%93%BE%23) `234.2K 🔥` `NEW`
1. [曝9999元旗舰手机被砍](https://s.weibo.com/weibo?q=%23%E6%9B%9D9999%E5%85%83%E6%97%97%E8%88%B0%E6%89%8B%E6%9C%BA%E8%A2%AB%E7%A0%8D%23) `233.9K 🔥` `NEW`
1. [10万人涌进5万人口县城](https://s.weibo.com/weibo?q=%2310%E4%B8%87%E4%BA%BA%E6%B6%8C%E8%BF%9B5%E4%B8%87%E4%BA%BA%E5%8F%A3%E5%8E%BF%E5%9F%8E%23) `233.6K 🔥` `NEW`
1. [恒大威尼斯房子跌到十三四万](https://s.weibo.com/weibo?q=%23%E6%81%92%E5%A4%A7%E5%A8%81%E5%B0%BC%E6%96%AF%E6%88%BF%E5%AD%90%E8%B7%8C%E5%88%B0%E5%8D%81%E4%B8%89%E5%9B%9B%E4%B8%87%23) `219.7K 🔥` `NEW`
1. [代露娃高考分数](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%23) `217.1K 🔥` `NEW`
1. [中方曾三次约见缅北四大家族代表](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E6%9B%BE%E4%B8%89%E6%AC%A1%E7%BA%A6%E8%A7%81%E7%BC%85%E5%8C%97%E5%9B%9B%E5%A4%A7%E5%AE%B6%E6%97%8F%E4%BB%A3%E8%A1%A8%23) `216.2K 🔥` `NEW`
1. [电诈头目临刑前仍叫嚣狼生来要吃肉](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%AF%88%E5%A4%B4%E7%9B%AE%E4%B8%B4%E5%88%91%E5%89%8D%E4%BB%8D%E5%8F%AB%E5%9A%A3%E7%8B%BC%E7%94%9F%E6%9D%A5%E8%A6%81%E5%90%83%E8%82%89%23) `213.5K 🔥` `NEW`
1. [晋妈送李勒优的房子价值7位数](https://s.weibo.com/weibo?q=%23%E6%99%8B%E5%A6%88%E9%80%81%E6%9D%8E%E5%8B%92%E4%BC%98%E7%9A%84%E6%88%BF%E5%AD%90%E4%BB%B7%E5%80%BC7%E4%BD%8D%E6%95%B0%23) `208.6K 🔥` `NEW`
1. [陈飞宇 转告我老子我爱他](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%20%E8%BD%AC%E5%91%8A%E6%88%91%E8%80%81%E5%AD%90%E6%88%91%E7%88%B1%E4%BB%96%23) `207.5K 🔥` `NEW`
1. [井川里予在二手平台卖穿过的泳衣](https://s.weibo.com/weibo?q=%23%E4%BA%95%E5%B7%9D%E9%87%8C%E4%BA%88%E5%9C%A8%E4%BA%8C%E6%89%8B%E5%B9%B3%E5%8F%B0%E5%8D%96%E7%A9%BF%E8%BF%87%E7%9A%84%E6%B3%B3%E8%A1%A3%23) `187.8K 🔥` `NEW`
1. [义乌1700万天价商铺生意如何](https://s.weibo.com/weibo?q=%23%E4%B9%89%E4%B9%8C1700%E4%B8%87%E5%A4%A9%E4%BB%B7%E5%95%86%E9%93%BA%E7%94%9F%E6%84%8F%E5%A6%82%E4%BD%95%23) `186.9K 🔥` `NEW`
1. [婆婆自述高考未被中科大录取](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E8%87%AA%E8%BF%B0%E9%AB%98%E8%80%83%E6%9C%AA%E8%A2%AB%E4%B8%AD%E7%A7%91%E5%A4%A7%E5%BD%95%E5%8F%96%23) `186.1K 🔥` `NEW`
1. [佤邦联合军副总司令鲍军峰抓捕现场](https://s.weibo.com/weibo?q=%23%E4%BD%A4%E9%82%A6%E8%81%94%E5%90%88%E5%86%9B%E5%89%AF%E6%80%BB%E5%8F%B8%E4%BB%A4%E9%B2%8D%E5%86%9B%E5%B3%B0%E6%8A%93%E6%8D%95%E7%8E%B0%E5%9C%BA%23) `175.7K 🔥` `NEW`
1. [林诗栋快掉出世排前十了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E5%BF%AB%E6%8E%89%E5%87%BA%E4%B8%96%E6%8E%92%E5%89%8D%E5%8D%81%E4%BA%86%23) `161.4K 🔥` `NEW`
1. [飞莎儿发博回应](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E8%8E%8E%E5%84%BF%E5%8F%91%E5%8D%9A%E5%9B%9E%E5%BA%94%23) `160.9K 🔥` `NEW`
1. [素颜是一个男演员爆火的敲门砖](https://s.weibo.com/weibo?q=%23%E7%B4%A0%E9%A2%9C%E6%98%AF%E4%B8%80%E4%B8%AA%E7%94%B7%E6%BC%94%E5%91%98%E7%88%86%E7%81%AB%E7%9A%84%E6%95%B2%E9%97%A8%E7%A0%96%23) `159.0K 🔥` `NEW`
1. [室友自称重生拦我们上早八](https://s.weibo.com/weibo?q=%23%E5%AE%A4%E5%8F%8B%E8%87%AA%E7%A7%B0%E9%87%8D%E7%94%9F%E6%8B%A6%E6%88%91%E4%BB%AC%E4%B8%8A%E6%97%A9%E5%85%AB%23) `155.0K 🔥` `NEW`
1. [李一桐称这辈子不会再借钱给别人](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E7%A7%B0%E8%BF%99%E8%BE%88%E5%AD%90%E4%B8%8D%E4%BC%9A%E5%86%8D%E5%80%9F%E9%92%B1%E7%BB%99%E5%88%AB%E4%BA%BA%23) `150.2K 🔥` `NEW`
1. [司机称高速免费是车免费拒退乘客钱](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E7%A7%B0%E9%AB%98%E9%80%9F%E5%85%8D%E8%B4%B9%E6%98%AF%E8%BD%A6%E5%85%8D%E8%B4%B9%E6%8B%92%E9%80%80%E4%B9%98%E5%AE%A2%E9%92%B1%23) `138.7K 🔥` `NEW`

Updated at 2026-10-05 16:31:45

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
