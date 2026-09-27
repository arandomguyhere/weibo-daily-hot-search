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

1. [贷款中介集体删除朋友圈](https://s.weibo.com/weibo?q=%23%E8%B4%B7%E6%AC%BE%E4%B8%AD%E4%BB%8B%E9%9B%86%E4%BD%93%E5%88%A0%E9%99%A4%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `554.9K 🔥` `NEW`
1. [兰香如故热度超过长相思](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%83%AD%E5%BA%A6%E8%B6%85%E8%BF%87%E9%95%BF%E7%9B%B8%E6%80%9D%23) `316.4K 🔥` `NEW`
1. [中美建立推进贸易理事会等机制](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%BB%BA%E7%AB%8B%E6%8E%A8%E8%BF%9B%E8%B4%B8%E6%98%93%E7%90%86%E4%BA%8B%E4%BC%9A%E7%AD%89%E6%9C%BA%E5%88%B6%23) `234.1K 🔥` `NEW`
1. [NBA新赛季为主队爆灯](https://s.weibo.com/weibo?q=%23NBA%E6%96%B0%E8%B5%9B%E5%AD%A3%E4%B8%BA%E4%B8%BB%E9%98%9F%E7%88%86%E7%81%AF%23) `233.4K 🔥` `NEW`
1. [刘学义回复李梦](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%9B%9E%E5%A4%8D%E6%9D%8E%E6%A2%A6%23) `195.3K 🔥` `NEW`
1. [微微一笑很倾城AI换脸后](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%BE%AE%E4%B8%80%E7%AC%91%E5%BE%88%E5%80%BE%E5%9F%8EAI%E6%8D%A2%E8%84%B8%E5%90%8E%23) `189.1K 🔥` `NEW`
1. [孙千工作室 烦心事够多了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E7%83%A6%E5%BF%83%E4%BA%8B%E5%A4%9F%E5%A4%9A%E4%BA%86%23) `189.0K 🔥` `NEW`
1. [猛士X700搭载全栈华为乾崑](https://s.weibo.com/weibo?q=%23%E7%8C%9B%E5%A3%ABX700%E6%90%AD%E8%BD%BD%E5%85%A8%E6%A0%88%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%23) `186.2K 🔥` `NEW`
1. [刘雯 井柏然](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%20%E4%BA%95%E6%9F%8F%E7%84%B6%23) `185.6K 🔥` `NEW`
1. [樊振东3比1维东斯霍特](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C3%E6%AF%941%E7%BB%B4%E4%B8%9C%E6%96%AF%E9%9C%8D%E7%89%B9%23) `184.5K 🔥` `NEW`
1. [小米18Pro 防窥屏](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%20%E9%98%B2%E7%AA%A5%E5%B1%8F%23) `182.9K 🔥` `NEW`
1. [国足0比3新西兰](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B30%E6%AF%943%E6%96%B0%E8%A5%BF%E5%85%B0%23) `181.4K 🔥` `NEW`
1. [张家齐妈妈走700米打车觉得狼狈](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%B5%B0700%E7%B1%B3%E6%89%93%E8%BD%A6%E8%A7%89%E5%BE%97%E7%8B%BC%E7%8B%88%23) `179.4K 🔥` `NEW`
1. [混双赢了冠军都不敢笑也不敢庆祝](https://s.weibo.com/weibo?q=%23%E6%B7%B7%E5%8F%8C%E8%B5%A2%E4%BA%86%E5%86%A0%E5%86%9B%E9%83%BD%E4%B8%8D%E6%95%A2%E7%AC%91%E4%B9%9F%E4%B8%8D%E6%95%A2%E5%BA%86%E7%A5%9D%23) `176.9K 🔥` `NEW`
1. [王祖贤 复出](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%96%E8%B4%A4%20%E5%A4%8D%E5%87%BA%23) `175.1K 🔥` `NEW`
1. [王曼昱冠军](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%86%A0%E5%86%9B%23) `173.5K 🔥` `NEW`
1. [原研药和仿制药买对了吗](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A0%94%E8%8D%AF%E5%92%8C%E4%BB%BF%E5%88%B6%E8%8D%AF%E4%B9%B0%E5%AF%B9%E4%BA%86%E5%90%97%23) `171.4K 🔥` `NEW`
1. [仅退款的风终于吹到了影视界](https://s.weibo.com/weibo?q=%23%E4%BB%85%E9%80%80%E6%AC%BE%E7%9A%84%E9%A3%8E%E7%BB%88%E4%BA%8E%E5%90%B9%E5%88%B0%E4%BA%86%E5%BD%B1%E8%A7%86%E7%95%8C%23) `170.0K 🔥` `NEW`
1. [刘学义只有两部待播剧了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%8F%AA%E6%9C%89%E4%B8%A4%E9%83%A8%E5%BE%85%E6%92%AD%E5%89%A7%E4%BA%86%23) `168.3K 🔥` `NEW`
1. [陈冠希吴彦祖王祖贤被指圈钱](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%86%A0%E5%B8%8C%E5%90%B4%E5%BD%A6%E7%A5%96%E7%8E%8B%E7%A5%96%E8%B4%A4%E8%A2%AB%E6%8C%87%E5%9C%88%E9%92%B1%23) `160.5K 🔥` `NEW`
1. [陈瑶告别我家那闺女](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E5%91%8A%E5%88%AB%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%23) `159.0K 🔥` `NEW`
1. [理工科大学文科是配套设施](https://s.weibo.com/weibo?q=%23%E7%90%86%E5%B7%A5%E7%A7%91%E5%A4%A7%E5%AD%A6%E6%96%87%E7%A7%91%E6%98%AF%E9%85%8D%E5%A5%97%E8%AE%BE%E6%96%BD%23) `156.1K 🔥` `NEW`
1. [朋友圈乱回祝福被同学问号](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%B9%B1%E5%9B%9E%E7%A5%9D%E7%A6%8F%E8%A2%AB%E5%90%8C%E5%AD%A6%E9%97%AE%E5%8F%B7%23) `151.6K 🔥` `NEW`
1. [阿根廷街头著名景点是中国工商银行](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%A1%97%E5%A4%B4%E8%91%97%E5%90%8D%E6%99%AF%E7%82%B9%E6%98%AF%E4%B8%AD%E5%9B%BD%E5%B7%A5%E5%95%86%E9%93%B6%E8%A1%8C%23) `149.4K 🔥` `NEW`
1. [女性很容易慕强择偶](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%80%A7%E5%BE%88%E5%AE%B9%E6%98%93%E6%85%95%E5%BC%BA%E6%8B%A9%E5%81%B6%23) `144.6K 🔥` `NEW`
1. [黄灿灿妈妈是惊讶张家齐妈妈是很得意](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%A6%88%E5%A6%88%E6%98%AF%E6%83%8A%E8%AE%B6%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E6%98%AF%E5%BE%88%E5%BE%97%E6%84%8F%23) `143.7K 🔥` `NEW`
1. [觉得压力大的可以看28年劳动节](https://s.weibo.com/weibo?q=%23%E8%A7%89%E5%BE%97%E5%8E%8B%E5%8A%9B%E5%A4%A7%E7%9A%84%E5%8F%AF%E4%BB%A5%E7%9C%8B28%E5%B9%B4%E5%8A%B3%E5%8A%A8%E8%8A%82%23) `134.7K 🔥` `NEW`
1. [儿子要倒插门妈妈毫不犹豫同意](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E8%A6%81%E5%80%92%E6%8F%92%E9%97%A8%E5%A6%88%E5%A6%88%E6%AF%AB%E4%B8%8D%E7%8A%B9%E8%B1%AB%E5%90%8C%E6%84%8F%23) `105.1K 🔥` `NEW`
1. [150万人看田曦薇素颜直播吃饭](https://s.weibo.com/weibo?q=%23150%E4%B8%87%E4%BA%BA%E7%9C%8B%E7%94%B0%E6%9B%A6%E8%96%87%E7%B4%A0%E9%A2%9C%E7%9B%B4%E6%92%AD%E5%90%83%E9%A5%AD%23) `104.5K 🔥` `NEW`
1. [张家齐问妈妈带陈瑶能长成喜欢的样子吗](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E9%97%AE%E5%A6%88%E5%A6%88%E5%B8%A6%E9%99%88%E7%91%B6%E8%83%BD%E9%95%BF%E6%88%90%E5%96%9C%E6%AC%A2%E7%9A%84%E6%A0%B7%E5%AD%90%E5%90%97%23) `94.0K 🔥` `NEW`
1. [倪妮在米兰又踩井盖了](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%E5%9C%A8%E7%B1%B3%E5%85%B0%E5%8F%88%E8%B8%A9%E4%BA%95%E7%9B%96%E4%BA%86%23) `92.7K 🔥` `NEW`
1. [孙颖莎回应兼3项1金2银](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%9E%E5%BA%94%E5%85%BC3%E9%A1%B91%E9%87%912%E9%93%B6%23) `92.5K 🔥` `NEW`
1. [樊振东跟樊振东吵起来了](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%B7%9F%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%90%B5%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `91.9K 🔥` `NEW`
1. [孙千](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%23) `91.6K 🔥` `NEW`
1. [你起来开一会儿吧我困得撑不住了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%B5%B7%E6%9D%A5%E5%BC%80%E4%B8%80%E4%BC%9A%E5%84%BF%E5%90%A7%E6%88%91%E5%9B%B0%E5%BE%97%E6%92%91%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `90.7K 🔥` `NEW`
1. [国乒丢首金后夺4金](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E4%B8%A2%E9%A6%96%E9%87%91%E5%90%8E%E5%A4%BA4%E9%87%91%23) `90.1K 🔥` `NEW`
1. [刘宇宁世赛法拉利](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E4%B8%96%E8%B5%9B%E6%B3%95%E6%8B%89%E5%88%A9%23) `89.9K 🔥` `NEW`
1. [金鹰奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%23) `89.2K 🔥` `NEW`
1. [原来明星一顿饭只吃几口是真的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%8E%E6%98%9F%E4%B8%80%E9%A1%BF%E9%A5%AD%E5%8F%AA%E5%90%83%E5%87%A0%E5%8F%A3%E6%98%AF%E7%9C%9F%E7%9A%84%23) `89.2K 🔥` `NEW`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `86.9K 🔥` `NEW`
1. [刘雯腰细得和普通人大腿一样粗了](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E8%85%B0%E7%BB%86%E5%BE%97%E5%92%8C%E6%99%AE%E9%80%9A%E4%BA%BA%E5%A4%A7%E8%85%BF%E4%B8%80%E6%A0%B7%E7%B2%97%E4%BA%86%23) `86.3K 🔥` `NEW`
1. [4AM秋季赛夺冠](https://s.weibo.com/weibo?q=%234AM%E7%A7%8B%E5%AD%A3%E8%B5%9B%E5%A4%BA%E5%86%A0%23) `86.2K 🔥` `NEW`
1. [日本五旬女子嫁给女儿同学](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%94%E6%97%AC%E5%A5%B3%E5%AD%90%E5%AB%81%E7%BB%99%E5%A5%B3%E5%84%BF%E5%90%8C%E5%AD%A6%23) `85.7K 🔥` `NEW`
1. [难怪黄灿灿妈妈厌烦张家齐妈妈行为](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E9%BB%84%E7%81%BF%E7%81%BF%E5%A6%88%E5%A6%88%E5%8E%8C%E7%83%A6%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%A1%8C%E4%B8%BA%23) `85.0K 🔥` `NEW`
1. [卢昱晓工作室 策划](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E7%AD%96%E5%88%92%23) `85.0K 🔥` `NEW`
1. [拾荒21年男子领到42万养老金](https://s.weibo.com/weibo?q=%23%E6%8B%BE%E8%8D%9221%E5%B9%B4%E7%94%B7%E5%AD%90%E9%A2%86%E5%88%B042%E4%B8%87%E5%85%BB%E8%80%81%E9%87%91%23) `80.7K 🔥` `NEW`
1. [樊振东3比0格拉尔多](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C3%E6%AF%940%E6%A0%BC%E6%8B%89%E5%B0%94%E5%A4%9A%23) `79.4K 🔥` `NEW`
1. [巴黎偶遇迪丽热巴拿着玩偶出街](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%81%B6%E9%81%87%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8B%BF%E7%9D%80%E7%8E%A9%E5%81%B6%E5%87%BA%E8%A1%97%23) `78.2K 🔥` `NEW`
1. [兰香如故林二爷下线](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E6%9E%97%E4%BA%8C%E7%88%B7%E4%B8%8B%E7%BA%BF%23) `74.9K 🔥` `NEW`
1. [画师自曝偷偷用AI接稿](https://s.weibo.com/weibo?q=%23%E7%94%BB%E5%B8%88%E8%87%AA%E6%9B%9D%E5%81%B7%E5%81%B7%E7%94%A8AI%E6%8E%A5%E7%A8%BF%23) `69.4K 🔥` `NEW`
1. [兰香如故热度](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%83%AD%E5%BA%A6%23) `68.3K 🔥` `NEW`
1. [上海BM门店取消试衣间](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7BM%E9%97%A8%E5%BA%97%E5%8F%96%E6%B6%88%E8%AF%95%E8%A1%A3%E9%97%B4%23) `67.9K 🔥` `NEW`

Updated at 2026-09-28 01:48:18

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
