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

1. [发朋友圈要有滞后性](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%A6%81%E6%9C%89%E6%BB%9E%E5%90%8E%E6%80%A7%23) `474.4K 🔥` `NEW`
1. [野人先生成本](https://s.weibo.com/weibo?q=%23%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E6%88%90%E6%9C%AC%23) `384.8K 🔥` `NEW`
1. [4问4答了解平陆运河为何而建](https://s.weibo.com/weibo?q=%234%E9%97%AE4%E7%AD%94%E4%BA%86%E8%A7%A3%E5%B9%B3%E9%99%86%E8%BF%90%E6%B2%B3%E4%B8%BA%E4%BD%95%E8%80%8C%E5%BB%BA%23) `123.5K 🔥` `NEW`
1. [沈腾范丞丞胡先煦向新乐事出发](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%83%A1%E5%85%88%E7%85%A6%E5%90%91%E6%96%B0%E4%B9%90%E4%BA%8B%E5%87%BA%E5%8F%91%23) `110.6K 🔥` `NEW`
1. [我不得不把才华埋葬在昨天](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8D%E5%BE%97%E4%B8%8D%E6%8A%8A%E6%89%8D%E5%8D%8E%E5%9F%8B%E8%91%AC%E5%9C%A8%E6%98%A8%E5%A4%A9%23) `103.3K 🔥` `NEW`
1. [弟弟离世数周社恐哥哥无法自理死亡](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E7%A6%BB%E4%B8%96%E6%95%B0%E5%91%A8%E7%A4%BE%E6%81%90%E5%93%A5%E5%93%A5%E6%97%A0%E6%B3%95%E8%87%AA%E7%90%86%E6%AD%BB%E4%BA%A1%23) `102.9K 🔥` `NEW`
1. [一劳永逸解决台湾问题](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8A%B3%E6%B0%B8%E9%80%B8%E8%A7%A3%E5%86%B3%E5%8F%B0%E6%B9%BE%E9%97%AE%E9%A2%98%23) `102.2K 🔥` `NEW`
1. [顺丰同城代言人出道秀](https://s.weibo.com/weibo?q=%23%E9%A1%BA%E4%B8%B0%E5%90%8C%E5%9F%8E%E4%BB%A3%E8%A8%80%E4%BA%BA%E5%87%BA%E9%81%93%E7%A7%80%23) `101.4K 🔥` `NEW`
1. [停产了但让你怀念的零食](https://s.weibo.com/weibo?q=%23%E5%81%9C%E4%BA%A7%E4%BA%86%E4%BD%86%E8%AE%A9%E4%BD%A0%E6%80%80%E5%BF%B5%E7%9A%84%E9%9B%B6%E9%A3%9F%23) `75.2K 🔥` `NEW`
1. [兰香如故腾讯今年第四部破万剧](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%85%BE%E8%AE%AF%E4%BB%8A%E5%B9%B4%E7%AC%AC%E5%9B%9B%E9%83%A8%E7%A0%B4%E4%B8%87%E5%89%A7%23) `74.3K 🔥` `NEW`
1. [长剧起名 观众已经学杂了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%89%A7%E8%B5%B7%E5%90%8D%20%E8%A7%82%E4%BC%97%E5%B7%B2%E7%BB%8F%E5%AD%A6%E6%9D%82%E4%BA%86%23) `66.2K 🔥` `NEW`
1. [为什么现在都买电车了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E9%83%BD%E4%B9%B0%E7%94%B5%E8%BD%A6%E4%BA%86%23) `65.7K 🔥` `NEW`
1. [隐翅虫被女生用手掐着玩](https://s.weibo.com/weibo?q=%23%E9%9A%90%E7%BF%85%E8%99%AB%E8%A2%AB%E5%A5%B3%E7%94%9F%E7%94%A8%E6%89%8B%E6%8E%90%E7%9D%80%E7%8E%A9%23) `64.6K 🔥` `NEW`
1. [新能源汽车 燃油车](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%20%E7%87%83%E6%B2%B9%E8%BD%A6%23) `63.0K 🔥` `NEW`
1. [网传刘亦菲陈晓咸雪导演伊峥](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%88%98%E4%BA%A6%E8%8F%B2%E9%99%88%E6%99%93%E5%92%B8%E9%9B%AA%E5%AF%BC%E6%BC%94%E4%BC%8A%E5%B3%A5%23) `62.0K 🔥` `NEW`
1. [产房盼男 病房盼女](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E6%88%BF%E7%9B%BC%E7%94%B7%20%E7%97%85%E6%88%BF%E7%9B%BC%E5%A5%B3%23) `62.0K 🔥` `NEW`
1. [遭醉酒男掌掴女店员近期打算离职](https://s.weibo.com/weibo?q=%23%E9%81%AD%E9%86%89%E9%85%92%E7%94%B7%E6%8E%8C%E6%8E%B4%E5%A5%B3%E5%BA%97%E5%91%98%E8%BF%91%E6%9C%9F%E6%89%93%E7%AE%97%E7%A6%BB%E8%81%8C%23) `62.0K 🔥` `NEW`
1. [网友向杨某媛西班牙学校反映情况](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%90%91%E6%9D%A8%E6%9F%90%E5%AA%9B%E8%A5%BF%E7%8F%AD%E7%89%99%E5%AD%A6%E6%A0%A1%E5%8F%8D%E6%98%A0%E6%83%85%E5%86%B5%23) `62.0K 🔥` `NEW`
1. [优衣库原来是纯狱风](https://s.weibo.com/weibo?q=%23%E4%BC%98%E8%A1%A3%E5%BA%93%E5%8E%9F%E6%9D%A5%E6%98%AF%E7%BA%AF%E7%8B%B1%E9%A3%8E%23) `62.0K 🔥` `NEW`
1. [两次亲子鉴定确认孙子非亡父亲生](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E6%AC%A1%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%E7%A1%AE%E8%AE%A4%E5%AD%99%E5%AD%90%E9%9D%9E%E4%BA%A1%E7%88%B6%E4%BA%B2%E7%94%9F%23) `62.0K 🔥` `NEW`
1. [接到陌生来电请沉默三秒](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E5%88%B0%E9%99%8C%E7%94%9F%E6%9D%A5%E7%94%B5%E8%AF%B7%E6%B2%89%E9%BB%98%E4%B8%89%E7%A7%92%23) `62.0K 🔥` `NEW`
1. [花少3干活统计](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%913%E5%B9%B2%E6%B4%BB%E7%BB%9F%E8%AE%A1%23) `62.0K 🔥` `NEW`
1. [7旬老太入冰棺1天后复活2天又去世](https://s.weibo.com/weibo?q=%237%E6%97%AC%E8%80%81%E5%A4%AA%E5%85%A5%E5%86%B0%E6%A3%BA1%E5%A4%A9%E5%90%8E%E5%A4%8D%E6%B4%BB2%E5%A4%A9%E5%8F%88%E5%8E%BB%E4%B8%96%23) `62.0K 🔥` `NEW`
1. [孙子非亲生案司法鉴定中心被处罚](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E5%8F%B8%E6%B3%95%E9%89%B4%E5%AE%9A%E4%B8%AD%E5%BF%83%E8%A2%AB%E5%A4%84%E7%BD%9A%23) `62.0K 🔥` `NEW`
1. [苹果CEO展示iPhoneDuo时翻车](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CCEO%E5%B1%95%E7%A4%BAiPhoneDuo%E6%97%B6%E7%BF%BB%E8%BD%A6%23) `62.0K 🔥` `NEW`
1. [终于见识到激素的威力了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E8%A7%81%E8%AF%86%E5%88%B0%E6%BF%80%E7%B4%A0%E7%9A%84%E5%A8%81%E5%8A%9B%E4%BA%86%23) `62.0K 🔥` `NEW`
1. [2个亿人民币就能全球无差别生活](https://s.weibo.com/weibo?q=%232%E4%B8%AA%E4%BA%BF%E4%BA%BA%E6%B0%91%E5%B8%81%E5%B0%B1%E8%83%BD%E5%85%A8%E7%90%83%E6%97%A0%E5%B7%AE%E5%88%AB%E7%94%9F%E6%B4%BB%23) `62.0K 🔥` `NEW`
1. [七旬老太入冰棺1天睁眼复活](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%97%AC%E8%80%81%E5%A4%AA%E5%85%A5%E5%86%B0%E6%A3%BA1%E5%A4%A9%E7%9D%81%E7%9C%BC%E5%A4%8D%E6%B4%BB%23) `62.0K 🔥` `NEW`
1. [我国人口总量14.05亿](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E4%BA%BA%E5%8F%A3%E6%80%BB%E9%87%8F14.05%E4%BA%BF%23) `62.0K 🔥` `NEW`
1. [95后宝妈连生4胎终于迎来了女儿](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E5%AE%9D%E5%A6%88%E8%BF%9E%E7%94%9F4%E8%83%8E%E7%BB%88%E4%BA%8E%E8%BF%8E%E6%9D%A5%E4%BA%86%E5%A5%B3%E5%84%BF%23) `62.0K 🔥` `NEW`
1. [小米电视](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E7%94%B5%E8%A7%86%23) `61.9K 🔥` `NEW`
1. [兰香如故又一个意难平男二](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E5%8F%88%E4%B8%80%E4%B8%AA%E6%84%8F%E9%9A%BE%E5%B9%B3%E7%94%B7%E4%BA%8C%23) `61.9K 🔥` `NEW`
1. [Tian开团Wayward](https://s.weibo.com/weibo?q=%23Tian%E5%BC%80%E5%9B%A2Wayward%23) `61.9K 🔥` `NEW`
1. [兰香如故爆款](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%88%86%E6%AC%BE%23) `61.9K 🔥` `NEW`
1. [深圳龙华机场来了](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E9%BE%99%E5%8D%8E%E6%9C%BA%E5%9C%BA%E6%9D%A5%E4%BA%86%23) `61.9K 🔥` `NEW`
1. [北京国安vs浦项铁人](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%9B%BD%E5%AE%89vs%E6%B5%A6%E9%A1%B9%E9%93%81%E4%BA%BA%23) `61.9K 🔥` `NEW`
1. [兰香如故破3万](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%A0%B43%E4%B8%87%23) `61.9K 🔥` `NEW`
1. [华为自造车热议](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E8%87%AA%E9%80%A0%E8%BD%A6%E7%83%AD%E8%AE%AE%23) `61.9K 🔥` `NEW`
1. [本来以为泡泡玛特赚不到我的钱](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E6%9D%A5%E4%BB%A5%E4%B8%BA%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E8%B5%9A%E4%B8%8D%E5%88%B0%E6%88%91%E7%9A%84%E9%92%B1%23) `61.9K 🔥` `NEW`
1. [老人旅游时突然得知女儿去世](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%97%85%E6%B8%B8%E6%97%B6%E7%AA%81%E7%84%B6%E5%BE%97%E7%9F%A5%E5%A5%B3%E5%84%BF%E5%8E%BB%E4%B8%96%23) `61.9K 🔥` `NEW`
1. [女子网购金属衣柜质量太好连买3套](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%BD%91%E8%B4%AD%E9%87%91%E5%B1%9E%E8%A1%A3%E6%9F%9C%E8%B4%A8%E9%87%8F%E5%A4%AA%E5%A5%BD%E8%BF%9E%E4%B9%B03%E5%A5%97%23) `61.9K 🔥` `NEW`
1. [巴基斯坦人在浦东机场偷电脑被驱逐](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E4%BA%BA%E5%9C%A8%E6%B5%A6%E4%B8%9C%E6%9C%BA%E5%9C%BA%E5%81%B7%E7%94%B5%E8%84%91%E8%A2%AB%E9%A9%B1%E9%80%90%23) `61.9K 🔥` `NEW`
1. [亚冠精英联赛](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E5%86%A0%E7%B2%BE%E8%8B%B1%E8%81%94%E8%B5%9B%23) `61.9K 🔥` `NEW`
1. [范丞丞这么多娘家人](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%BF%99%E4%B9%88%E5%A4%9A%E5%A8%98%E5%AE%B6%E4%BA%BA%23) `61.9K 🔥` `NEW`
1. [印度金砖峰会餐饮自称奢华](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%87%91%E7%A0%96%E5%B3%B0%E4%BC%9A%E9%A4%90%E9%A5%AE%E8%87%AA%E7%A7%B0%E5%A5%A2%E5%8D%8E%23) `61.9K 🔥` `NEW`
1. [告别信](https://s.weibo.com/weibo?q=%23%E5%91%8A%E5%88%AB%E4%BF%A1%23) `61.9K 🔥` `NEW`
1. [罗永浩曝钟薛高爱买不买是恶意剪辑](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E6%9B%9D%E9%92%9F%E8%96%9B%E9%AB%98%E7%88%B1%E4%B9%B0%E4%B8%8D%E4%B9%B0%E6%98%AF%E6%81%B6%E6%84%8F%E5%89%AA%E8%BE%91%23) `61.9K 🔥` `NEW`
1. [人一定要为自己的舒适买单](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E4%B8%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E8%88%92%E9%80%82%E4%B9%B0%E5%8D%95%23) `61.9K 🔥` `NEW`
1. [邓为张晚意穿得像两颗瓜子](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E5%BC%A0%E6%99%9A%E6%84%8F%E7%A9%BF%E5%BE%97%E5%83%8F%E4%B8%A4%E9%A2%97%E7%93%9C%E5%AD%90%23) `61.9K 🔥` `NEW`
1. [北京国安3比1浦项铁人](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%9B%BD%E5%AE%893%E6%AF%941%E6%B5%A6%E9%A1%B9%E9%93%81%E4%BA%BA%23) `61.9K 🔥` `NEW`
1. [告别信男主](https://s.weibo.com/weibo?q=%23%E5%91%8A%E5%88%AB%E4%BF%A1%E7%94%B7%E4%B8%BB%23) `61.9K 🔥` `NEW`
1. [国安亚冠开门红](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%89%E4%BA%9A%E5%86%A0%E5%BC%80%E9%97%A8%E7%BA%A2%23) `61.9K 🔥` `NEW`

Updated at 2026-09-16 03:00:43

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
