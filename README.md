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

1. [五哈嘉宾名红包 (Wuha guest name red envelope)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%88%E5%98%89%E5%AE%BE%E5%90%8D%E7%BA%A2%E5%8C%85%23) `2.8M 🔥` `NEW`
1. [奥迪全新智慧客厅内饰揭秘](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%AA%E5%85%A8%E6%96%B0%E6%99%BA%E6%85%A7%E5%AE%A2%E5%8E%85%E5%86%85%E9%A5%B0%E6%8F%AD%E7%A7%98%23) `1.1M 🔥` `NEW`
1. [浪姐二公直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BA%8C%E5%85%AC%E7%9B%B4%E6%92%AD%23) `1.1M 🔥` `NEW`
1. [奔跑吧14](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A714%23) `1.0M 🔥` `NEW`
1. [35岁单亲父亲压力大去世留下俩儿子](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%8D%95%E4%BA%B2%E7%88%B6%E4%BA%B2%E5%8E%8B%E5%8A%9B%E5%A4%A7%E5%8E%BB%E4%B8%96%E7%95%99%E4%B8%8B%E4%BF%A9%E5%84%BF%E5%AD%90%23) `1.0M 🔥` `NEW`
1. [弯道之王领克10+和10开启预售](https://s.weibo.com/weibo?q=%23%E5%BC%AF%E9%81%93%E4%B9%8B%E7%8E%8B%E9%A2%86%E5%85%8B10%2B%E5%92%8C10%E5%BC%80%E5%90%AF%E9%A2%84%E5%94%AE%23) `1.0M 🔥` `NEW`
1. [伊朗外长或于今晚抵达巴基斯坦](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E6%88%96%E4%BA%8E%E4%BB%8A%E6%99%9A%E6%8A%B5%E8%BE%BE%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%23) `1.0M 🔥` `NEW`
1. [李现疑似对共享单车粉转黑](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E7%96%91%E4%BC%BC%E5%AF%B9%E5%85%B1%E4%BA%AB%E5%8D%95%E8%BD%A6%E7%B2%89%E8%BD%AC%E9%BB%91%23) `989.1K 🔥` `NEW`
1. [DeepSeekV4 价格屠夫](https://s.weibo.com/weibo?q=%23DeepSeekV4%20%E4%BB%B7%E6%A0%BC%E5%B1%A0%E5%A4%AB%23) `862.2K 🔥` `NEW`
1. [张杰工作室文案](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%96%87%E6%A1%88%23) `499.1K 🔥` `NEW`
1. [宋祖儿素颜上班没有颜值焦虑 (Song Zuer goes to work without makeup, no worries about appearance)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E7%B4%A0%E9%A2%9C%E4%B8%8A%E7%8F%AD%E6%B2%A1%E6%9C%89%E9%A2%9C%E5%80%BC%E7%84%A6%E8%99%91%23) `342.4K 🔥` `NEW`
1. [保安掌掴女子最新回应](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%AE%89%E6%8E%8C%E6%8E%B4%E5%A5%B3%E5%AD%90%E6%9C%80%E6%96%B0%E5%9B%9E%E5%BA%94%23) `335.5K 🔥` `NEW`
1. [金智秀戛纳黑裙](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E6%88%9B%E7%BA%B3%E9%BB%91%E8%A3%99%23) `335.0K 🔥` `NEW`
1. [鞠婧祎粉丝保密协议到期了](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%B2%89%E4%B8%9D%E4%BF%9D%E5%AF%86%E5%8D%8F%E8%AE%AE%E5%88%B0%E6%9C%9F%E4%BA%86%23) `290.7K 🔥` `NEW`
1. [美国女子在印度遭民宿员工下药强奸](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%8D%B0%E5%BA%A6%E9%81%AD%E6%B0%91%E5%AE%BF%E5%91%98%E5%B7%A5%E4%B8%8B%E8%8D%AF%E5%BC%BA%E5%A5%B8%23) `258.1K 🔥` `NEW`
1. [杨博文回学校上课](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E5%9B%9E%E5%AD%A6%E6%A0%A1%E4%B8%8A%E8%AF%BE%23) `258.0K 🔥` `NEW`
1. [五一免单人扎堆涌向一线城市](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%85%8D%E5%8D%95%E4%BA%BA%E6%89%8E%E5%A0%86%E6%B6%8C%E5%90%91%E4%B8%80%E7%BA%BF%E5%9F%8E%E5%B8%82%23) `252.4K 🔥` `NEW`
1. [五一难题被团灭了](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E9%9A%BE%E9%A2%98%E8%A2%AB%E5%9B%A2%E7%81%AD%E4%BA%86%23) `116.8K 🔥` `NEW`
1. [鹿晗 红包 (Luhan red envelope)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E7%BA%A2%E5%8C%85%23) `20.0M 🔥` `+23%`
1. [外国人被上海烘焙店震惊](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E8%A2%AB%E4%B8%8A%E6%B5%B7%E7%83%98%E7%84%99%E5%BA%97%E9%9C%87%E6%83%8A%23) `1.1M 🔥` `+24%`
1. [有一种浪漫叫中国航天](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%B8%80%E7%A7%8D%E6%B5%AA%E6%BC%AB%E5%8F%AB%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%23) `1.1M 🔥` `+50%`
1. [梅毒并非只通过性传播 (Syphilis is not only sexually transmitted)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E6%AF%92%E5%B9%B6%E9%9D%9E%E5%8F%AA%E9%80%9A%E8%BF%87%E6%80%A7%E4%BC%A0%E6%92%AD%23) `1.0M 🔥` `+225%`
1. [牙龈萎缩之后还能再长回来吗](https://s.weibo.com/weibo?q=%23%E7%89%99%E9%BE%88%E8%90%8E%E7%BC%A9%E4%B9%8B%E5%90%8E%E8%BF%98%E8%83%BD%E5%86%8D%E9%95%BF%E5%9B%9E%E6%9D%A5%E5%90%97%23) `1.0M 🔥` `+574%`
1. [郑钦文vs肯宁](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E8%82%AF%E5%AE%81%23) `1.0M 🔥` `+189%`
1. [王者哪吒2联动 (King Nezha 2 linkage)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E5%93%AA%E5%90%922%E8%81%94%E5%8A%A8%23) `988.7K 🔥` `+291%`
1. [黄宗泽 牙龈萎缩](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AE%97%E6%B3%BD%20%E7%89%99%E9%BE%88%E8%90%8E%E7%BC%A9%23) `988.6K 🔥` `+230%`
1. [孙杨 保送再见爱人](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E4%BF%9D%E9%80%81%E5%86%8D%E8%A7%81%E7%88%B1%E4%BA%BA%23) `988.5K 🔥` `+204%`
1. [C罗认为人类喝牛奶不正常 (Cristiano Ronaldo thinks drinking milk is abnormal for humans)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%AE%A4%E4%B8%BA%E4%BA%BA%E7%B1%BB%E5%96%9D%E7%89%9B%E5%A5%B6%E4%B8%8D%E6%AD%A3%E5%B8%B8%23) `895.0K 🔥` `+195%`
1. [黄旭熙 可以爆料了吗 (Huang Xuxi, can you break the news?)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%97%AD%E7%86%99%20%E5%8F%AF%E4%BB%A5%E7%88%86%E6%96%99%E4%BA%86%E5%90%97%23) `860.1K 🔥` `+191%`
1. [沪上阿姨疯涨](https://s.weibo.com/weibo?q=%23%E6%B2%AA%E4%B8%8A%E9%98%BF%E5%A7%A8%E7%96%AF%E6%B6%A8%23) `804.9K 🔥` `+195%`
1. [工程师猝死倒地后工作群还在轰炸 (The work group was still bombing after the engineer died suddenly and fell to the ground)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E7%A8%8B%E5%B8%88%E7%8C%9D%E6%AD%BB%E5%80%92%E5%9C%B0%E5%90%8E%E5%B7%A5%E4%BD%9C%E7%BE%A4%E8%BF%98%E5%9C%A8%E8%BD%B0%E7%82%B8%23) `800.3K 🔥` `+177%`
1. [孙杨 爷们要脸](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E7%88%B7%E4%BB%AC%E8%A6%81%E8%84%B8%23) `675.2K 🔥` `+261%`
1. [泡泡玛特 aespa](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%20aespa%23) `537.7K 🔥` `+88%`
1. [孩子游戏退款后又充5万再退被拒](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E6%B8%B8%E6%88%8F%E9%80%80%E6%AC%BE%E5%90%8E%E5%8F%88%E5%85%855%E4%B8%87%E5%86%8D%E9%80%80%E8%A2%AB%E6%8B%92%23) `524.0K 🔥` `+99%`
1. [跑男](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%23) `516.7K 🔥` `+60%`
1. [掩埋村民现场有多名穿着制服男子 (There were many men in uniform at the scene where the villagers were buried)](https://s.weibo.com/weibo?q=%23%E6%8E%A9%E5%9F%8B%E6%9D%91%E6%B0%91%E7%8E%B0%E5%9C%BA%E6%9C%89%E5%A4%9A%E5%90%8D%E7%A9%BF%E7%9D%80%E5%88%B6%E6%9C%8D%E7%94%B7%E5%AD%90%23) `411.9K 🔥` `+55%`
1. [你为什么不吃呷哺呷哺了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%90%83%E5%91%B7%E5%93%BA%E5%91%B7%E5%93%BA%E4%BA%86%23) `336.6K 🔥` `+83%`
1. [华晨宇演唱会损失](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E6%8D%9F%E5%A4%B1%23) `321.2K 🔥` `+25%`
1. [女摩托车主遭3男子骚扰摸腰崩溃大哭 (Female motorcycle owner collapsed and cried after being harassed by three men and touching her waist)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%91%A9%E6%89%98%E8%BD%A6%E4%B8%BB%E9%81%AD3%E7%94%B7%E5%AD%90%E9%AA%9A%E6%89%B0%E6%91%B8%E8%85%B0%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `273.0K 🔥` `+50%`
1. [北大还行撒贝宁当场破防](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E8%BF%98%E8%A1%8C%E6%92%92%E8%B4%9D%E5%AE%81%E5%BD%93%E5%9C%BA%E7%A0%B4%E9%98%B2%23) `272.8K 🔥` `+71%`
1. [浪姐 (Sister Lang)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `258.0K 🔥` `+89%`
1. [鸭货三巨头只有绝味亏了](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E8%B4%A7%E4%B8%89%E5%B7%A8%E5%A4%B4%E5%8F%AA%E6%9C%89%E7%BB%9D%E5%91%B3%E4%BA%8F%E4%BA%86%23) `253.2K 🔥` `+100%`
1. [张彬彬郑业成KO美人师兄售后](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BD%AC%E5%BD%AC%E9%83%91%E4%B8%9A%E6%88%90KO%E7%BE%8E%E4%BA%BA%E5%B8%88%E5%85%84%E5%94%AE%E5%90%8E%23) `221.8K 🔥` `+21%`
1. [年薪19万放羊全年无休你愿意吗](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%96%AA19%E4%B8%87%E6%94%BE%E7%BE%8A%E5%85%A8%E5%B9%B4%E6%97%A0%E4%BC%91%E4%BD%A0%E6%84%BF%E6%84%8F%E5%90%97%23) `293.4K 🔥`
1. [傅首尔怎么了](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E6%80%8E%E4%B9%88%E4%BA%86%23) `284.8K 🔥`
1. [刘浩存帮同学要宋威龙签名照](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E5%B8%AE%E5%90%8C%E5%AD%A6%E8%A6%81%E5%AE%8B%E5%A8%81%E9%BE%99%E7%AD%BE%E5%90%8D%E7%85%A7%23) `272.7K 🔥`
1. [剪毁刘海意外剪成了人生发型](https://s.weibo.com/weibo?q=%23%E5%89%AA%E6%AF%81%E5%88%98%E6%B5%B7%E6%84%8F%E5%A4%96%E5%89%AA%E6%88%90%E4%BA%86%E4%BA%BA%E7%94%9F%E5%8F%91%E5%9E%8B%23) `116.8K 🔥`
1. [AI在保护AI (AI is protecting AI)](https://s.weibo.com/weibo?q=%23AI%E5%9C%A8%E4%BF%9D%E6%8A%A4AI%23) `796.9K 🔥` `-40%`
1. [月薪1.6万放羊已筛选出2对夫妻 (Sheep herding with a monthly salary of 16,000 has selected 2 couples)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA1.6%E4%B8%87%E6%94%BE%E7%BE%8A%E5%B7%B2%E7%AD%9B%E9%80%89%E5%87%BA2%E5%AF%B9%E5%A4%AB%E5%A6%BB%23) `122.7K 🔥` `-35%`
1. [冰湖重生算扑吗](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E7%AE%97%E6%89%91%E5%90%97%23) `120.4K 🔥` `-49%`
1. [网传新红楼梦演员表](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%96%B0%E7%BA%A2%E6%A5%BC%E6%A2%A6%E6%BC%94%E5%91%98%E8%A1%A8%23) `116.8K 🔥` `-63%`

Updated at 2026-04-24 20:06:50

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
