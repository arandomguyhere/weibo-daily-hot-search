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

1. [张家齐妈妈原谅张家齐了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E5%8E%9F%E8%B0%85%E5%BC%A0%E5%AE%B6%E9%BD%90%E4%BA%86%23) `648.7K 🔥` `NEW`
1. [李治廷喊你试驾大众8X](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%BB%E5%BB%B7%E5%96%8A%E4%BD%A0%E8%AF%95%E9%A9%BE%E5%A4%A7%E4%BC%978X%23) `201.4K 🔥` `NEW`
1. [孙颖莎 难再战亚运](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%20%E9%9A%BE%E5%86%8D%E6%88%98%E4%BA%9A%E8%BF%90%23) `181.2K 🔥` `NEW`
1. [胖东来九成销售额靠外地游客](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E4%B9%9D%E6%88%90%E9%94%80%E5%94%AE%E9%A2%9D%E9%9D%A0%E5%A4%96%E5%9C%B0%E6%B8%B8%E5%AE%A2%23) `180.7K 🔥` `NEW`
1. [田曦薇的猫像大卡车一样走过来](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%9A%84%E7%8C%AB%E5%83%8F%E5%A4%A7%E5%8D%A1%E8%BD%A6%E4%B8%80%E6%A0%B7%E8%B5%B0%E8%BF%87%E6%9D%A5%23) `175.6K 🔥` `NEW`
1. [罗永浩遭实名举报偷税漏税](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E9%81%AD%E5%AE%9E%E5%90%8D%E4%B8%BE%E6%8A%A5%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E%23) `167.6K 🔥` `NEW`
1. [罗永浩连续3天回应售卖劣质溜溜凳](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%BF%9E%E7%BB%AD3%E5%A4%A9%E5%9B%9E%E5%BA%94%E5%94%AE%E5%8D%96%E5%8A%A3%E8%B4%A8%E6%BA%9C%E6%BA%9C%E5%87%B3%23) `158.6K 🔥` `NEW`
1. [陈妤颉 药检至凌晨五点](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%A4%E9%A2%89%20%E8%8D%AF%E6%A3%80%E8%87%B3%E5%87%8C%E6%99%A8%E4%BA%94%E7%82%B9%23) `113.7K 🔥` `NEW`
1. [LCK选手无缘免服役](https://s.weibo.com/weibo?q=%23LCK%E9%80%89%E6%89%8B%E6%97%A0%E7%BC%98%E5%85%8D%E6%9C%8D%E5%BD%B9%23) `113.7K 🔥` `NEW`
1. [小米18Pro 缓解方案](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%20%E7%BC%93%E8%A7%A3%E6%96%B9%E6%A1%88%23) `103.4K 🔥` `NEW`
1. [程靖淇谈孙颖莎体力透支](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E9%9D%96%E6%B7%87%E8%B0%88%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BD%93%E5%8A%9B%E9%80%8F%E6%94%AF%23) `99.4K 🔥` `NEW`
1. [误会癌细胞了](https://s.weibo.com/weibo?q=%23%E8%AF%AF%E4%BC%9A%E7%99%8C%E7%BB%86%E8%83%9E%E4%BA%86%23) `99.2K 🔥` `NEW`
1. [恐龙生孩子不也灭亡了](https://s.weibo.com/weibo?q=%23%E6%81%90%E9%BE%99%E7%94%9F%E5%AD%A9%E5%AD%90%E4%B8%8D%E4%B9%9F%E7%81%AD%E4%BA%A1%E4%BA%86%23) `98.4K 🔥` `NEW`
1. [德国爆冷0比1希腊](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E7%88%86%E5%86%B70%E6%AF%941%E5%B8%8C%E8%85%8A%23) `96.4K 🔥` `NEW`
1. [14岁少女遭强迫卖淫2主犯已出狱](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%B0%91%E5%A5%B3%E9%81%AD%E5%BC%BA%E8%BF%AB%E5%8D%96%E6%B7%AB2%E4%B8%BB%E7%8A%AF%E5%B7%B2%E5%87%BA%E7%8B%B1%23) `86.3K 🔥` `NEW`
1. [电子竞技 亚运会](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%AD%90%E7%AB%9E%E6%8A%80%20%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `64.7K 🔥` `NEW`
1. [贷款中介集体删除朋友圈](https://s.weibo.com/weibo?q=%23%E8%B4%B7%E6%AC%BE%E4%B8%AD%E4%BB%8B%E9%9B%86%E4%BD%93%E5%88%A0%E9%99%A4%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `814.6K 🔥` `+378%`
1. [中美建立推进贸易理事会等机制](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%BB%BA%E7%AB%8B%E6%8E%A8%E8%BF%9B%E8%B4%B8%E6%98%93%E7%90%86%E4%BA%8B%E4%BC%9A%E7%AD%89%E6%9C%BA%E5%88%B6%23) `540.9K 🔥` `+755%`
1. [智界RX及鸿蒙智行新品发布会](https://s.weibo.com/weibo?q=%23%E6%99%BA%E7%95%8CRX%E5%8F%8A%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%E4%BC%9A%23) `535.6K 🔥` `+750%`
1. [原研药和仿制药买对了吗](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A0%94%E8%8D%AF%E5%92%8C%E4%BB%BF%E5%88%B6%E8%8D%AF%E4%B9%B0%E5%AF%B9%E4%BA%86%E5%90%97%23) `502.9K 🔥` `+773%`
1. [和情绪不稳定的人相处是折磨](https://s.weibo.com/weibo?q=%23%E5%92%8C%E6%83%85%E7%BB%AA%E4%B8%8D%E7%A8%B3%E5%AE%9A%E7%9A%84%E4%BA%BA%E7%9B%B8%E5%A4%84%E6%98%AF%E6%8A%98%E7%A3%A8%23) `486.5K 🔥` `+694%`
1. [电子竞技项目将退出亚运](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%AD%90%E7%AB%9E%E6%8A%80%E9%A1%B9%E7%9B%AE%E5%B0%86%E9%80%80%E5%87%BA%E4%BA%9A%E8%BF%90%23) `407.1K 🔥` `+579%`
1. [兰香如故热度超过长相思](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%83%AD%E5%BA%A6%E8%B6%85%E8%BF%87%E9%95%BF%E7%9B%B8%E6%80%9D%23) `199.3K 🔥` `+225%`
1. [孙千工作室 烦心事够多了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E7%83%A6%E5%BF%83%E4%BA%8B%E5%A4%9F%E5%A4%9A%E4%BA%86%23) `179.7K 🔥` `+194%`
1. [混双赢了冠军都不敢笑也不敢庆祝](https://s.weibo.com/weibo?q=%23%E6%B7%B7%E5%8F%8C%E8%B5%A2%E4%BA%86%E5%86%A0%E5%86%9B%E9%83%BD%E4%B8%8D%E6%95%A2%E7%AC%91%E4%B9%9F%E4%B8%8D%E6%95%A2%E5%BA%86%E7%A5%9D%23) `179.3K 🔥` `+215%`
1. [张家齐妈妈走700米打车觉得狼狈](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%B5%B0700%E7%B1%B3%E6%89%93%E8%BD%A6%E8%A7%89%E5%BE%97%E7%8B%BC%E7%8B%88%23) `178.5K 🔥` `+211%`
1. [王祖贤 复出](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%96%E8%B4%A4%20%E5%A4%8D%E5%87%BA%23) `177.6K 🔥` `+204%`
1. [樊振东跟樊振东吵起来了](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%B7%9F%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%90%B5%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `176.2K 🔥` `+215%`
1. [刘雯 井柏然](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%20%E4%BA%95%E6%9F%8F%E7%84%B6%23) `175.9K 🔥` `+198%`
1. [亚运乒乓女单仅张立成功卫冕](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%B9%92%E4%B9%93%E5%A5%B3%E5%8D%95%E4%BB%85%E5%BC%A0%E7%AB%8B%E6%88%90%E5%8A%9F%E5%8D%AB%E5%86%95%23) `175.2K 🔥` `+211%`
1. [小米18Pro 防窥屏](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%20%E9%98%B2%E7%AA%A5%E5%B1%8F%23) `172.4K 🔥` `+396%`
1. [阿根廷街头著名景点是中国工商银行](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%A1%97%E5%A4%B4%E8%91%97%E5%90%8D%E6%99%AF%E7%82%B9%E6%98%AF%E4%B8%AD%E5%9B%BD%E5%B7%A5%E5%95%86%E9%93%B6%E8%A1%8C%23) `165.4K 🔥` `+351%`
1. [女性很容易慕强择偶](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%80%A7%E5%BE%88%E5%AE%B9%E6%98%93%E6%85%95%E5%BC%BA%E6%8B%A9%E5%81%B6%23) `163.0K 🔥` `+345%`
1. [刘宇宁世赛法拉利](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E4%B8%96%E8%B5%9B%E6%B3%95%E6%8B%89%E5%88%A9%23) `160.3K 🔥` `+362%`
1. [朋友圈乱回祝福被同学问号](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%B9%B1%E5%9B%9E%E7%A5%9D%E7%A6%8F%E8%A2%AB%E5%90%8C%E5%AD%A6%E9%97%AE%E5%8F%B7%23) `144.6K 🔥` `+294%`
1. [微微一笑很倾城AI换脸后](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%BE%AE%E4%B8%80%E7%AC%91%E5%BE%88%E5%80%BE%E5%9F%8EAI%E6%8D%A2%E8%84%B8%E5%90%8E%23) `135.8K 🔥` `+89%`
1. [儿子要倒插门妈妈毫不犹豫同意](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E8%A6%81%E5%80%92%E6%8F%92%E9%97%A8%E5%A6%88%E5%A6%88%E6%AF%AB%E4%B8%8D%E7%8A%B9%E8%B1%AB%E5%90%8C%E6%84%8F%23) `120.3K 🔥` `+243%`
1. [拾荒21年男子领到42万养老金](https://s.weibo.com/weibo?q=%23%E6%8B%BE%E8%8D%9221%E5%B9%B4%E7%94%B7%E5%AD%90%E9%A2%86%E5%88%B042%E4%B8%87%E5%85%BB%E8%80%81%E9%87%91%23) `118.8K 🔥` `+224%`
1. [孙颖莎回应兼3项1金2银](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%9E%E5%BA%94%E5%85%BC3%E9%A1%B91%E9%87%912%E9%93%B6%23) `114.9K 🔥` `+228%`
1. [你起来开一会儿吧我困得撑不住了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%B5%B7%E6%9D%A5%E5%BC%80%E4%B8%80%E4%BC%9A%E5%84%BF%E5%90%A7%E6%88%91%E5%9B%B0%E5%BE%97%E6%92%91%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `114.4K 🔥` `+228%`
1. [孙千](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%23) `91.7K 🔥` `+164%`
1. [金鹰奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%23) `75.4K 🔥` `+117%`
1. [樊振东3比1维东斯霍特](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C3%E6%AF%941%E7%BB%B4%E4%B8%9C%E6%96%AF%E9%9C%8D%E7%89%B9%23) `75.3K 🔥` `+75%`
1. [王曼昱冠军](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%86%A0%E5%86%9B%23) `75.0K 🔥` `+113%`
1. [婚姻更像合伙扛生活轮流当牛马](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A7%BB%E6%9B%B4%E5%83%8F%E5%90%88%E4%BC%99%E6%89%9B%E7%94%9F%E6%B4%BB%E8%BD%AE%E6%B5%81%E5%BD%93%E7%89%9B%E9%A9%AC%23) `74.5K 🔥` `+115%`
1. [林诗栋说拿金牌并不意外](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E8%AF%B4%E6%8B%BF%E9%87%91%E7%89%8C%E5%B9%B6%E4%B8%8D%E6%84%8F%E5%A4%96%23) `71.4K 🔥` `+86%`
1. [刘学义只有两部待播剧了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%8F%AA%E6%9C%89%E4%B8%A4%E9%83%A8%E5%BE%85%E6%92%AD%E5%89%A7%E4%BA%86%23) `70.9K 🔥` `+104%`
1. [陈冠希吴彦祖王祖贤被指圈钱](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%86%A0%E5%B8%8C%E5%90%B4%E5%BD%A6%E7%A5%96%E7%8E%8B%E7%A5%96%E8%B4%A4%E8%A2%AB%E6%8C%87%E5%9C%88%E9%92%B1%23) `70.5K 🔥` `+28%`
1. [王曼昱两夺亚运女单冠军](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E4%B8%A4%E5%A4%BA%E4%BA%9A%E8%BF%90%E5%A5%B3%E5%8D%95%E5%86%A0%E5%86%9B%23) `65.8K 🔥` `+89%`
1. [理工科大学文科是配套设施](https://s.weibo.com/weibo?q=%23%E7%90%86%E5%B7%A5%E7%A7%91%E5%A4%A7%E5%AD%A6%E6%96%87%E7%A7%91%E6%98%AF%E9%85%8D%E5%A5%97%E8%AE%BE%E6%96%BD%23) `63.1K 🔥` `+82%`

Updated at 2026-09-28 07:20:11

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
