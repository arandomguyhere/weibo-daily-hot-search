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

1. [郭德纲事件处罚通报](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%BE%B7%E7%BA%B2%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%BD%9A%E9%80%9A%E6%8A%A5%23) `4.6M 🔥` `NEW`
1. [别让低保女生赴港追星争议撕裂舆论](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%AE%A9%E4%BD%8E%E4%BF%9D%E5%A5%B3%E7%94%9F%E8%B5%B4%E6%B8%AF%E8%BF%BD%E6%98%9F%E4%BA%89%E8%AE%AE%E6%92%95%E8%A3%82%E8%88%86%E8%AE%BA%23) `1.3M 🔥` `NEW`
1. [在祖国大地上书写新时代青春答卷](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E7%A5%96%E5%9B%BD%E5%A4%A7%E5%9C%B0%E4%B8%8A%E4%B9%A6%E5%86%99%E6%96%B0%E6%97%B6%E4%BB%A3%E9%9D%92%E6%98%A5%E7%AD%94%E5%8D%B7%23) `1.2M 🔥` `NEW`
1. [在三国志战略版偶遇张靓颖](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%B8%89%E5%9B%BD%E5%BF%97%E6%88%98%E7%95%A5%E7%89%88%E5%81%B6%E9%81%87%E5%BC%A0%E9%9D%93%E9%A2%96%23) `1.2M 🔥` `NEW`
1. [身体缺钾的五个信号](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E7%BC%BA%E9%92%BE%E7%9A%84%E4%BA%94%E4%B8%AA%E4%BF%A1%E5%8F%B7%23) `1.2M 🔥` `NEW`
1. [长期低钾 心脏骤停](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%BD%8E%E9%92%BE%20%E5%BF%83%E8%84%8F%E9%AA%A4%E5%81%9C%23) `1.2M 🔥` `NEW`
1. [赵昭仪被问和花少5还有联系吗](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%98%AD%E4%BB%AA%E8%A2%AB%E9%97%AE%E5%92%8C%E8%8A%B1%E5%B0%915%E8%BF%98%E6%9C%89%E8%81%94%E7%B3%BB%E5%90%97%23) `638.3K 🔥` `NEW`
1. [雷军称内存实在太贵](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A7%B0%E5%86%85%E5%AD%98%E5%AE%9E%E5%9C%A8%E5%A4%AA%E8%B4%B5%23) `628.7K 🔥` `NEW`
1. [华为PuraXView价格](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXView%E4%BB%B7%E6%A0%BC%23) `596.7K 🔥` `NEW`
1. [华为MateXT2价格](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMateXT2%E4%BB%B7%E6%A0%BC%23) `524.0K 🔥` `NEW`
1. [早春晴朗孙远翥跳楼了](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%AD%99%E8%BF%9C%E7%BF%A5%E8%B7%B3%E6%A5%BC%E4%BA%86%23) `523.7K 🔥` `NEW`
1. [南宁铁路通报男子跳轨身亡](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%AE%81%E9%93%81%E8%B7%AF%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90%E8%B7%B3%E8%BD%A8%E8%BA%AB%E4%BA%A1%23) `520.9K 🔥` `NEW`
1. [吃播网红干饭莹莹去世年仅24岁](https://s.weibo.com/weibo?q=%23%E5%90%83%E6%92%AD%E7%BD%91%E7%BA%A2%E5%B9%B2%E9%A5%AD%E8%8E%B9%E8%8E%B9%E5%8E%BB%E4%B8%96%E5%B9%B4%E4%BB%8524%E5%B2%81%23) `518.6K 🔥` `NEW`
1. [余承东发布会现场连喊3个Super](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%8F%91%E5%B8%83%E4%BC%9A%E7%8E%B0%E5%9C%BA%E8%BF%9E%E5%96%8A3%E4%B8%AASuper%23) `513.9K 🔥` `NEW`
1. [张靓颖玩游戏被叫兄弟](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9D%93%E9%A2%96%E7%8E%A9%E6%B8%B8%E6%88%8F%E8%A2%AB%E5%8F%AB%E5%85%84%E5%BC%9F%23) `513.3K 🔥` `NEW`
1. [鹿晗躲过了花少2](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%BA%B2%E8%BF%87%E4%BA%86%E8%8A%B1%E5%B0%912%23) `511.8K 🔥` `NEW`
1. [飞机上一拳打没全家美国签证](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E6%9C%BA%E4%B8%8A%E4%B8%80%E6%8B%B3%E6%89%93%E6%B2%A1%E5%85%A8%E5%AE%B6%E7%BE%8E%E5%9B%BD%E7%AD%BE%E8%AF%81%23) `506.6K 🔥` `NEW`
1. [贫困生追星错在哪](https://s.weibo.com/weibo?q=%23%E8%B4%AB%E5%9B%B0%E7%94%9F%E8%BF%BD%E6%98%9F%E9%94%99%E5%9C%A8%E5%93%AA%23) `502.3K 🔥` `NEW`
1. [整船黑色物质倒入长江仅用10秒](https://s.weibo.com/weibo?q=%23%E6%95%B4%E8%88%B9%E9%BB%91%E8%89%B2%E7%89%A9%E8%B4%A8%E5%80%92%E5%85%A5%E9%95%BF%E6%B1%9F%E4%BB%85%E7%94%A810%E7%A7%92%23) `488.1K 🔥` `NEW`
1. [郑钦文教练里巴的采访](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%95%99%E7%BB%83%E9%87%8C%E5%B7%B4%E7%9A%84%E9%87%87%E8%AE%BF%23) `481.8K 🔥` `NEW`
1. [猪肾续命9个月等来了人肾](https://s.weibo.com/weibo?q=%23%E7%8C%AA%E8%82%BE%E7%BB%AD%E5%91%BD9%E4%B8%AA%E6%9C%88%E7%AD%89%E6%9D%A5%E4%BA%86%E4%BA%BA%E8%82%BE%23) `474.6K 🔥` `NEW`
1. [才知道井柏然是刘雯初恋](https://s.weibo.com/weibo?q=%23%E6%89%8D%E7%9F%A5%E9%81%93%E4%BA%95%E6%9F%8F%E7%84%B6%E6%98%AF%E5%88%98%E9%9B%AF%E5%88%9D%E6%81%8B%23) `467.7K 🔥` `NEW`
1. [华为展翼三折叠首发第三代红枫影像](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%B1%95%E7%BF%BC%E4%B8%89%E6%8A%98%E5%8F%A0%E9%A6%96%E5%8F%91%E7%AC%AC%E4%B8%89%E4%BB%A3%E7%BA%A2%E6%9E%AB%E5%BD%B1%E5%83%8F%23) `461.6K 🔥` `NEW`
1. [看张家齐妈妈聊天记录窒息了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E7%AA%92%E6%81%AF%E4%BA%86%23) `456.3K 🔥` `NEW`
1. [一个爱试吃的人天塌了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E7%88%B1%E8%AF%95%E5%90%83%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `456.3K 🔥` `NEW`
1. [赵昭仪提到北斗七行哭了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%98%AD%E4%BB%AA%E6%8F%90%E5%88%B0%E5%8C%97%E6%96%97%E4%B8%83%E8%A1%8C%E5%93%AD%E4%BA%86%23) `451.9K 🔥` `NEW`
1. [全新一代华为MatePadAir正式发布](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E4%B8%80%E4%BB%A3%E5%8D%8E%E4%B8%BAMatePadAir%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83%23) `445.8K 🔥` `NEW`
1. [华为再发布高性能芯片](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%86%8D%E5%8F%91%E5%B8%83%E9%AB%98%E6%80%A7%E8%83%BD%E8%8A%AF%E7%89%87%23) `439.8K 🔥` `NEW`
1. [吃低保当然不能出境看演唱会](https://s.weibo.com/weibo?q=%23%E5%90%83%E4%BD%8E%E4%BF%9D%E5%BD%93%E7%84%B6%E4%B8%8D%E8%83%BD%E5%87%BA%E5%A2%83%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `438.5K 🔥` `NEW`
1. [南阳禁行老头乐能产能卖不能开](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%98%B3%E7%A6%81%E8%A1%8C%E8%80%81%E5%A4%B4%E4%B9%90%E8%83%BD%E4%BA%A7%E8%83%BD%E5%8D%96%E4%B8%8D%E8%83%BD%E5%BC%80%23) `435.8K 🔥` `NEW`
1. [华为麒麟9050Pro](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%BA%92%E9%BA%9F9050Pro%23) `429.4K 🔥` `NEW`
1. [原来雪姨出轨事发当天有这么多事](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%9B%AA%E5%A7%A8%E5%87%BA%E8%BD%A8%E4%BA%8B%E5%8F%91%E5%BD%93%E5%A4%A9%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E4%BA%8B%23) `428.5K 🔥` `NEW`
1. [阿里前员工死在加州路边](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E5%89%8D%E5%91%98%E5%B7%A5%E6%AD%BB%E5%9C%A8%E5%8A%A0%E5%B7%9E%E8%B7%AF%E8%BE%B9%23) `401.0K 🔥` `NEW`
1. [郭涛儿子石头考了两年北电](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%B6%9B%E5%84%BF%E5%AD%90%E7%9F%B3%E5%A4%B4%E8%80%83%E4%BA%86%E4%B8%A4%E5%B9%B4%E5%8C%97%E7%94%B5%23) `377.7K 🔥` `NEW`
1. [王一博说到95你就笑成这样](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%AF%B4%E5%88%B095%E4%BD%A0%E5%B0%B1%E7%AC%91%E6%88%90%E8%BF%99%E6%A0%B7%23) `370.9K 🔥` `NEW`
1. [胡锡进说不会与汤家凤对线](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E8%AF%B4%E4%B8%8D%E4%BC%9A%E4%B8%8E%E6%B1%A4%E5%AE%B6%E5%87%A4%E5%AF%B9%E7%BA%BF%23) `314.8K 🔥` `NEW`
1. [鸿蒙应用体验进入成熟好用阶段](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E5%BA%94%E7%94%A8%E4%BD%93%E9%AA%8C%E8%BF%9B%E5%85%A5%E6%88%90%E7%86%9F%E5%A5%BD%E7%94%A8%E9%98%B6%E6%AE%B5%23) `267.7K 🔥` `NEW`
1. [古巨基爆了关我何书桓什么事](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%B7%A8%E5%9F%BA%E7%88%86%E4%BA%86%E5%85%B3%E6%88%91%E4%BD%95%E4%B9%A6%E6%A1%93%E4%BB%80%E4%B9%88%E4%BA%8B%23) `263.9K 🔥` `NEW`
1. [王一博直播](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%9B%B4%E6%92%AD%23) `263.3K 🔥` `NEW`
1. [华为发布会](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `262.5K 🔥` `NEW`
1. [网传艺人和时代峰峻三七分成](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%89%BA%E4%BA%BA%E5%92%8C%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E4%B8%89%E4%B8%83%E5%88%86%E6%88%90%23) `260.8K 🔥` `NEW`
1. [汕头通报潮阳化妆品制假售假问题](https://s.weibo.com/weibo?q=%23%E6%B1%95%E5%A4%B4%E9%80%9A%E6%8A%A5%E6%BD%AE%E9%98%B3%E5%8C%96%E5%A6%86%E5%93%81%E5%88%B6%E5%81%87%E5%94%AE%E5%81%87%E9%97%AE%E9%A2%98%23) `259.0K 🔥` `NEW`
1. [大男主剧扑的原因](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%94%B7%E4%B8%BB%E5%89%A7%E6%89%91%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `257.0K 🔥` `NEW`
1. [尼泊尔泥石流中国幸存者获救瞬间曝光](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%B3%A5%E7%9F%B3%E6%B5%81%E4%B8%AD%E5%9B%BD%E5%B9%B8%E5%AD%98%E8%80%85%E8%8E%B7%E6%95%91%E7%9E%AC%E9%97%B4%E6%9B%9D%E5%85%89%23) `253.6K 🔥` `NEW`
1. [雷军2小时45分钟演讲](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B2%E5%B0%8F%E6%97%B645%E5%88%86%E9%92%9F%E6%BC%94%E8%AE%B2%23) `250.3K 🔥` `NEW`
1. [444分殡葬专业男生想运营账号变现](https://s.weibo.com/weibo?q=%23444%E5%88%86%E6%AE%A1%E8%91%AC%E4%B8%93%E4%B8%9A%E7%94%B7%E7%94%9F%E6%83%B3%E8%BF%90%E8%90%A5%E8%B4%A6%E5%8F%B7%E5%8F%98%E7%8E%B0%23) `249.7K 🔥` `NEW`
1. [麒麟9050Pro 逻辑折叠](https://s.weibo.com/weibo?q=%23%E9%BA%92%E9%BA%9F9050Pro%20%E9%80%BB%E8%BE%91%E6%8A%98%E5%8F%A0%23) `247.8K 🔥` `NEW`
1. [曝井柏然刘雯结婚了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%98%E9%9B%AF%E7%BB%93%E5%A9%9A%E4%BA%86%23) `517.9K 🔥`
1. [网红Tiny泰国手术失败去世](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2Tiny%E6%B3%B0%E5%9B%BD%E6%89%8B%E6%9C%AF%E5%A4%B1%E8%B4%A5%E5%8E%BB%E4%B8%96%23) `447.3K 🔥`
1. [才知道郑佩佩去世后捐赠了大脑](https://s.weibo.com/weibo?q=%23%E6%89%8D%E7%9F%A5%E9%81%93%E9%83%91%E4%BD%A9%E4%BD%A9%E5%8E%BB%E4%B8%96%E5%90%8E%E6%8D%90%E8%B5%A0%E4%BA%86%E5%A4%A7%E8%84%91%23) `425.6K 🔥`
1. [身体的炎症全部消失的方法](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E7%9A%84%E7%82%8E%E7%97%87%E5%85%A8%E9%83%A8%E6%B6%88%E5%A4%B1%E7%9A%84%E6%96%B9%E6%B3%95%23) `294.8K 🔥` `-33%`

Updated at 2026-09-07 18:28:20

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
