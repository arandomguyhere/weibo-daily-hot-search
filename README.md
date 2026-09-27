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

1. [智界RX及鸿蒙智行新品发布会](https://s.weibo.com/weibo?q=%23%E6%99%BA%E7%95%8CRX%E5%8F%8A%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%E4%BC%9A%23) `63.0K 🔥` `NEW`
1. [和情绪不稳定的人相处是折磨](https://s.weibo.com/weibo?q=%23%E5%92%8C%E6%83%85%E7%BB%AA%E4%B8%8D%E7%A8%B3%E5%AE%9A%E7%9A%84%E4%BA%BA%E7%9B%B8%E5%A4%84%E6%98%AF%E6%8A%98%E7%A3%A8%23) `61.3K 🔥` `NEW`
1. [电子竞技项目将退出亚运](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%AD%90%E7%AB%9E%E6%8A%80%E9%A1%B9%E7%9B%AE%E5%B0%86%E9%80%80%E5%87%BA%E4%BA%9A%E8%BF%90%23) `60.0K 🔥` `NEW`
1. [亚运乒乓女单仅张立成功卫冕](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%B9%92%E4%B9%93%E5%A5%B3%E5%8D%95%E4%BB%85%E5%BC%A0%E7%AB%8B%E6%88%90%E5%8A%9F%E5%8D%AB%E5%86%95%23) `56.4K 🔥` `NEW`
1. [林诗栋说拿金牌并不意外](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E8%AF%B4%E6%8B%BF%E9%87%91%E7%89%8C%E5%B9%B6%E4%B8%8D%E6%84%8F%E5%A4%96%23) `38.4K 🔥` `NEW`
1. [王曼昱两夺亚运女单冠军](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E4%B8%A4%E5%A4%BA%E4%BA%9A%E8%BF%90%E5%A5%B3%E5%8D%95%E5%86%A0%E5%86%9B%23) `34.7K 🔥` `NEW`
1. [婚姻更像合伙扛生活轮流当牛马](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A7%BB%E6%9B%B4%E5%83%8F%E5%90%88%E4%BC%99%E6%89%9B%E7%94%9F%E6%B4%BB%E8%BD%AE%E6%B5%81%E5%BD%93%E7%89%9B%E9%A9%AC%23) `34.7K 🔥` `NEW`
1. [目击者称杰克辣条无生命危险](https://s.weibo.com/weibo?q=%23%E7%9B%AE%E5%87%BB%E8%80%85%E7%A7%B0%E6%9D%B0%E5%85%8B%E8%BE%A3%E6%9D%A1%E6%97%A0%E7%94%9F%E5%91%BD%E5%8D%B1%E9%99%A9%23) `34.7K 🔥` `NEW`
1. [张家齐和妈妈完全就是一场错位](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%92%8C%E5%A6%88%E5%A6%88%E5%AE%8C%E5%85%A8%E5%B0%B1%E6%98%AF%E4%B8%80%E5%9C%BA%E9%94%99%E4%BD%8D%23) `34.7K 🔥` `NEW`
1. [孙颖莎坦言训练不足](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9D%A6%E8%A8%80%E8%AE%AD%E7%BB%83%E4%B8%8D%E8%B6%B3%23) `34.7K 🔥` `NEW`
1. [孙颖莎 成长磨砺](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%20%E6%88%90%E9%95%BF%E7%A3%A8%E7%A0%BA%23) `34.7K 🔥` `NEW`
1. [孙颖莎展望下一届亚运会](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%B1%95%E6%9C%9B%E4%B8%8B%E4%B8%80%E5%B1%8A%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `34.7K 🔥` `NEW`
1. [贷款中介集体删除朋友圈](https://s.weibo.com/weibo?q=%23%E8%B4%B7%E6%AC%BE%E4%B8%AD%E4%BB%8B%E9%9B%86%E4%BD%93%E5%88%A0%E9%99%A4%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `170.5K 🔥` `-69%`
1. [微微一笑很倾城AI换脸后](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%BE%AE%E4%B8%80%E7%AC%91%E5%BE%88%E5%80%BE%E5%9F%8EAI%E6%8D%A2%E8%84%B8%E5%90%8E%23) `72.0K 🔥` `-62%`
1. [中美建立推进贸易理事会等机制](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%BB%BA%E7%AB%8B%E6%8E%A8%E8%BF%9B%E8%B4%B8%E6%98%93%E7%90%86%E4%BA%8B%E4%BC%9A%E7%AD%89%E6%9C%BA%E5%88%B6%23) `63.3K 🔥` `-73%`
1. [兰香如故热度超过长相思](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%83%AD%E5%BA%A6%E8%B6%85%E8%BF%87%E9%95%BF%E7%9B%B8%E6%80%9D%23) `61.2K 🔥` `-81%`
1. [孙千工作室 烦心事够多了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E7%83%A6%E5%BF%83%E4%BA%8B%E5%A4%9F%E5%A4%9A%E4%BA%86%23) `61.2K 🔥` `-68%`
1. [刘雯 井柏然](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%20%E4%BA%95%E6%9F%8F%E7%84%B6%23) `59.1K 🔥` `-68%`
1. [王祖贤 复出](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%96%E8%B4%A4%20%E5%A4%8D%E5%87%BA%23) `58.5K 🔥` `-67%`
1. [原研药和仿制药买对了吗](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A0%94%E8%8D%AF%E5%92%8C%E4%BB%BF%E5%88%B6%E8%8D%AF%E4%B9%B0%E5%AF%B9%E4%BA%86%E5%90%97%23) `57.6K 🔥` `-66%`
1. [张家齐妈妈走700米打车觉得狼狈](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%B5%B0700%E7%B1%B3%E6%89%93%E8%BD%A6%E8%A7%89%E5%BE%97%E7%8B%BC%E7%8B%88%23) `57.4K 🔥` `-68%`
1. [混双赢了冠军都不敢笑也不敢庆祝](https://s.weibo.com/weibo?q=%23%E6%B7%B7%E5%8F%8C%E8%B5%A2%E4%BA%86%E5%86%A0%E5%86%9B%E9%83%BD%E4%B8%8D%E6%95%A2%E7%AC%91%E4%B9%9F%E4%B8%8D%E6%95%A2%E5%BA%86%E7%A5%9D%23) `56.9K 🔥` `-68%`
1. [樊振东跟樊振东吵起来了](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%B7%9F%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%90%B5%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `55.9K 🔥` `-39%`
1. [刘雯腰细得和普通人大腿一样粗了](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E8%85%B0%E7%BB%86%E5%BE%97%E5%92%8C%E6%99%AE%E9%80%9A%E4%BA%BA%E5%A4%A7%E8%85%BF%E4%B8%80%E6%A0%B7%E7%B2%97%E4%BA%86%23) `55.5K 🔥` `-36%`
1. [陈冠希吴彦祖王祖贤被指圈钱](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%86%A0%E5%B8%8C%E5%90%B4%E5%BD%A6%E7%A5%96%E7%8E%8B%E7%A5%96%E8%B4%A4%E8%A2%AB%E6%8C%87%E5%9C%88%E9%92%B1%23) `55.3K 🔥` `-66%`
1. [樊振东3比1维东斯霍特](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C3%E6%AF%941%E7%BB%B4%E4%B8%9C%E6%96%AF%E9%9C%8D%E7%89%B9%23) `43.0K 🔥` `-77%`
1. [拾荒21年男子领到42万养老金](https://s.weibo.com/weibo?q=%23%E6%8B%BE%E8%8D%9221%E5%B9%B4%E7%94%B7%E5%AD%90%E9%A2%86%E5%88%B042%E4%B8%87%E5%85%BB%E8%80%81%E9%87%91%23) `36.7K 🔥` `-55%`
1. [朋友圈乱回祝福被同学问号](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%B9%B1%E5%9B%9E%E7%A5%9D%E7%A6%8F%E8%A2%AB%E5%90%8C%E5%AD%A6%E9%97%AE%E5%8F%B7%23) `36.7K 🔥` `-76%`
1. [阿根廷街头著名景点是中国工商银行](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%A1%97%E5%A4%B4%E8%91%97%E5%90%8D%E6%99%AF%E7%82%B9%E6%98%AF%E4%B8%AD%E5%9B%BD%E5%B7%A5%E5%95%86%E9%93%B6%E8%A1%8C%23) `36.6K 🔥` `-75%`
1. [女性很容易慕强择偶](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%80%A7%E5%BE%88%E5%AE%B9%E6%98%93%E6%85%95%E5%BC%BA%E6%8B%A9%E5%81%B6%23) `36.6K 🔥` `-75%`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `36.6K 🔥` `-58%`
1. [黄灿灿妈妈是惊讶张家齐妈妈是很得意](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%A6%88%E5%A6%88%E6%98%AF%E6%83%8A%E8%AE%B6%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E6%98%AF%E5%BE%88%E5%BE%97%E6%84%8F%23) `36.5K 🔥` `-75%`
1. [刘学义回复李梦](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%9B%9E%E5%A4%8D%E6%9D%8E%E6%A2%A6%23) `35.4K 🔥` `-82%`
1. [仅退款的风终于吹到了影视界](https://s.weibo.com/weibo?q=%23%E4%BB%85%E9%80%80%E6%AC%BE%E7%9A%84%E9%A3%8E%E7%BB%88%E4%BA%8E%E5%90%B9%E5%88%B0%E4%BA%86%E5%BD%B1%E8%A7%86%E7%95%8C%23) `35.3K 🔥` `-79%`
1. [王曼昱冠军](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%86%A0%E5%86%9B%23) `35.2K 🔥` `-80%`
1. [儿子要倒插门妈妈毫不犹豫同意](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E8%A6%81%E5%80%92%E6%8F%92%E9%97%A8%E5%A6%88%E5%A6%88%E6%AF%AB%E4%B8%8D%E7%8A%B9%E8%B1%AB%E5%90%8C%E6%84%8F%23) `35.1K 🔥` `-67%`
1. [孙颖莎回应兼3项1金2银](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%9E%E5%BA%94%E5%85%BC3%E9%A1%B91%E9%87%912%E9%93%B6%23) `35.0K 🔥` `-62%`
1. [你起来开一会儿吧我困得撑不住了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%B5%B7%E6%9D%A5%E5%BC%80%E4%B8%80%E4%BC%9A%E5%84%BF%E5%90%A7%E6%88%91%E5%9B%B0%E5%BE%97%E6%92%91%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `34.9K 🔥` `-62%`
1. [孙千](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%23) `34.8K 🔥` `-62%`
1. [刘学义只有两部待播剧了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%8F%AA%E6%9C%89%E4%B8%A4%E9%83%A8%E5%BE%85%E6%92%AD%E5%89%A7%E4%BA%86%23) `34.7K 🔥` `-79%`
1. [理工科大学文科是配套设施](https://s.weibo.com/weibo?q=%23%E7%90%86%E5%B7%A5%E7%A7%91%E5%A4%A7%E5%AD%A6%E6%96%87%E7%A7%91%E6%98%AF%E9%85%8D%E5%A5%97%E8%AE%BE%E6%96%BD%23) `34.7K 🔥` `-78%`
1. [金鹰奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%23) `34.7K 🔥` `-61%`
1. [觉得压力大的可以看28年劳动节](https://s.weibo.com/weibo?q=%23%E8%A7%89%E5%BE%97%E5%8E%8B%E5%8A%9B%E5%A4%A7%E7%9A%84%E5%8F%AF%E4%BB%A5%E7%9C%8B28%E5%B9%B4%E5%8A%B3%E5%8A%A8%E8%8A%82%23) `34.7K 🔥` `-74%`
1. [刘宇宁世赛法拉利](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E4%B8%96%E8%B5%9B%E6%B3%95%E6%8B%89%E5%88%A9%23) `34.7K 🔥` `-61%`
1. [国足0比3新西兰](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B30%E6%AF%943%E6%96%B0%E8%A5%BF%E5%85%B0%23) `34.7K 🔥` `-81%`
1. [小米18Pro 防窥屏](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%20%E9%98%B2%E7%AA%A5%E5%B1%8F%23) `34.7K 🔥` `-81%`
1. [樊振东3比0格拉尔多](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C3%E6%AF%940%E6%A0%BC%E6%8B%89%E5%B0%94%E5%A4%9A%23) `34.7K 🔥` `-56%`
1. [难怪黄灿灿妈妈厌烦张家齐妈妈行为](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E9%BB%84%E7%81%BF%E7%81%BF%E5%A6%88%E5%A6%88%E5%8E%8C%E7%83%A6%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%A1%8C%E4%B8%BA%23) `34.7K 🔥` `-59%`
1. [日本五旬女子嫁给女儿同学](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%94%E6%97%AC%E5%A5%B3%E5%AD%90%E5%AB%81%E7%BB%99%E5%A5%B3%E5%84%BF%E5%90%8C%E5%AD%A6%23) `34.7K 🔥` `-59%`
1. [画师自曝偷偷用AI接稿](https://s.weibo.com/weibo?q=%23%E7%94%BB%E5%B8%88%E8%87%AA%E6%9B%9D%E5%81%B7%E5%81%B7%E7%94%A8AI%E6%8E%A5%E7%A8%BF%23) `34.7K 🔥` `-50%`

Updated at 2026-09-28 04:28:03

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
