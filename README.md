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

1. [台风巴威又改路线了 (Typhoon Bavi changes its route again)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%8F%88%E6%94%B9%E8%B7%AF%E7%BA%BF%E4%BA%86%23) `2.5M 🔥` `NEW`
1. [福建晋江鞋厂火灾](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E6%99%8B%E6%B1%9F%E9%9E%8B%E5%8E%82%E7%81%AB%E7%81%BE%23) `1.2M 🔥` `NEW`
1. [超强台风巴威闭眼了](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E9%97%AD%E7%9C%BC%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [全浙江最尊重台风之人](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%B5%99%E6%B1%9F%E6%9C%80%E5%B0%8A%E9%87%8D%E5%8F%B0%E9%A3%8E%E4%B9%8B%E4%BA%BA%23) `1.1M 🔥` `NEW`
1. [一家四口乘机腹泻不止弄脏座椅](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%E4%B9%98%E6%9C%BA%E8%85%B9%E6%B3%BB%E4%B8%8D%E6%AD%A2%E5%BC%84%E8%84%8F%E5%BA%A7%E6%A4%85%23) `666.6K 🔥` `NEW`
1. [陈都灵给宋威龙张婧仪拍照](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E7%BB%99%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%8B%8D%E7%85%A7%23) `485.9K 🔥` `NEW`
1. [百花杀热度](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E7%83%AD%E5%BA%A6%23) `473.8K 🔥` `NEW`
1. [天塌下来有刘亦菲的鼻子顶着](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%A1%8C%E4%B8%8B%E6%9D%A5%E6%9C%89%E5%88%98%E4%BA%A6%E8%8F%B2%E7%9A%84%E9%BC%BB%E5%AD%90%E9%A1%B6%E7%9D%80%23) `424.2K 🔥` `NEW`
1. [上班可以带瓶牛奶](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E5%8F%AF%E4%BB%A5%E5%B8%A6%E7%93%B6%E7%89%9B%E5%A5%B6%23) `308.0K 🔥` `NEW`
1. [张凌赫超过瘾名场面](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%B6%85%E8%BF%87%E7%98%BE%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `306.9K 🔥` `NEW`
1. [大疆称免费维修参与救援无人机 (DJI says it will repair drones participating in rescue operations for free)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86%E7%A7%B0%E5%85%8D%E8%B4%B9%E7%BB%B4%E4%BF%AE%E5%8F%82%E4%B8%8E%E6%95%91%E6%8F%B4%E6%97%A0%E4%BA%BA%E6%9C%BA%23) `306.1K 🔥` `NEW`
1. [百花杀](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%23) `304.2K 🔥` `NEW`
1. [广西捕蛇者称累计抓获两三千条蛇](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%8D%95%E8%9B%87%E8%80%85%E7%A7%B0%E7%B4%AF%E8%AE%A1%E6%8A%93%E8%8E%B7%E4%B8%A4%E4%B8%89%E5%8D%83%E6%9D%A1%E8%9B%87%23) `302.5K 🔥` `NEW`
1. [孟子义何与发开播红包](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E4%BD%95%E4%B8%8E%E5%8F%91%E5%BC%80%E6%92%AD%E7%BA%A2%E5%8C%85%23) `299.9K 🔥` `NEW`
1. [暑假已经变味了](https://s.weibo.com/weibo?q=%23%E6%9A%91%E5%81%87%E5%B7%B2%E7%BB%8F%E5%8F%98%E5%91%B3%E4%BA%86%23) `299.5K 🔥` `NEW`
1. [书源公孙离打野](https://s.weibo.com/weibo?q=%23%E4%B9%A6%E6%BA%90%E5%85%AC%E5%AD%99%E7%A6%BB%E6%89%93%E9%87%8E%23) `296.0K 🔥` `NEW`
1. [鹿晗将去范志毅直播间](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%B0%86%E5%8E%BB%E8%8C%83%E5%BF%97%E6%AF%85%E7%9B%B4%E6%92%AD%E9%97%B4%23) `294.7K 🔥` `NEW`
1. [广西加油](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%8A%A0%E6%B2%B9%23) `293.4K 🔥` `NEW`
1. [孟子义回复白鹿](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%9B%9E%E5%A4%8D%E7%99%BD%E9%B9%BF%23) `291.3K 🔥` `NEW`
1. [此沙 百花奖](https://s.weibo.com/weibo?q=%23%E6%AD%A4%E6%B2%99%20%E7%99%BE%E8%8A%B1%E5%A5%96%23) `291.1K 🔥` `NEW`
1. [老外在中国企业上班是什么体验 (What is it like for a foreigner to work in a Chinese company?)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E5%9C%A8%E4%B8%AD%E5%9B%BD%E4%BC%81%E4%B8%9A%E4%B8%8A%E7%8F%AD%E6%98%AF%E4%BB%80%E4%B9%88%E4%BD%93%E9%AA%8C%23) `289.9K 🔥` `NEW`
1. [赵子琪女儿秀场晕倒](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E5%A5%B3%E5%84%BF%E7%A7%80%E5%9C%BA%E6%99%95%E5%80%92%23) `289.2K 🔥` `NEW`
1. [王橹杰脸上贴爱心](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%84%B8%E4%B8%8A%E8%B4%B4%E7%88%B1%E5%BF%83%23) `287.3K 🔥` `NEW`
1. [上班才是真正的健康杀手](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E6%89%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%81%A5%E5%BA%B7%E6%9D%80%E6%89%8B%23) `286.3K 🔥` `NEW`
1. [薛之谦演唱会杭州站](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9A%E6%9D%AD%E5%B7%9E%E7%AB%99%23) `284.9K 🔥` `NEW`
1. [MSI](https://s.weibo.com/weibo?q=%23MSI%23) `283.9K 🔥` `NEW`
1. [易烊千玺提名百花最佳男主](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%8F%90%E5%90%8D%E7%99%BE%E8%8A%B1%E6%9C%80%E4%BD%B3%E7%94%B7%E4%B8%BB%23) `282.3K 🔥` `NEW`
1. [小米澎程上市时间](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E4%B8%8A%E5%B8%82%E6%97%B6%E9%97%B4%23) `280.9K 🔥` `NEW`
1. [救援航母已抵达广西贵港](https://s.weibo.com/weibo?q=%23%E6%95%91%E6%8F%B4%E8%88%AA%E6%AF%8D%E5%B7%B2%E6%8A%B5%E8%BE%BE%E5%B9%BF%E8%A5%BF%E8%B4%B5%E6%B8%AF%23) `1.4M 🔥` `+194%`
1. [百花奖](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%23) `1.2M 🔥` `+198%`
1. [e-tron带你去看球 (e-tron takes you to watch football)](https://s.weibo.com/weibo?q=%23e-tron%E5%B8%A6%E4%BD%A0%E5%8E%BB%E7%9C%8B%E7%90%83%23) `1.2M 🔥` `+43%`
1. [迷奸案主犯带男子性侵未婚妻 (The main suspect in the rape case brought a man to sexually assault his fiancée)](https://s.weibo.com/weibo?q=%23%E8%BF%B7%E5%A5%B8%E6%A1%88%E4%B8%BB%E7%8A%AF%E5%B8%A6%E7%94%B7%E5%AD%90%E6%80%A7%E4%BE%B5%E6%9C%AA%E5%A9%9A%E5%A6%BB%23) `301.8K 🔥` `+100%`
1. [陈翔 苍天饶过谁 (Chen Xiang Who will God spare?)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%BF%94%20%E8%8B%8D%E5%A4%A9%E9%A5%B6%E8%BF%87%E8%B0%81%23) `298.5K 🔥` `+30%`
1. [AI预测法国夺冠概率居首](https://s.weibo.com/weibo?q=%23AI%E9%A2%84%E6%B5%8B%E6%B3%95%E5%9B%BD%E5%A4%BA%E5%86%A0%E6%A6%82%E7%8E%87%E5%B1%85%E9%A6%96%23) `297.7K 🔥` `+88%`
1. [医学博士涉迷奸案受害未婚妻拒绝作证](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E5%AD%A6%E5%8D%9A%E5%A3%AB%E6%B6%89%E8%BF%B7%E5%A5%B8%E6%A1%88%E5%8F%97%E5%AE%B3%E6%9C%AA%E5%A9%9A%E5%A6%BB%E6%8B%92%E7%BB%9D%E4%BD%9C%E8%AF%81%23) `296.9K 🔥` `+49%`
1. [洪灾已致广西39死9失联 (Floods have killed 39 in Guangxi and left 9 missing)](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E7%81%BE%E5%B7%B2%E8%87%B4%E5%B9%BF%E8%A5%BF39%E6%AD%BB9%E5%A4%B1%E8%81%94%23) `292.7K 🔥` `+53%`
1. [蔚来ES8大五座版上市](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5ES8%E5%A4%A7%E4%BA%94%E5%BA%A7%E7%89%88%E4%B8%8A%E5%B8%82%23) `901.7K 🔥`
1. [多名艺人发声讨债](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E8%89%BA%E4%BA%BA%E5%8F%91%E5%A3%B0%E8%AE%A8%E5%80%BA%23) `486.1K 🔥`
1. [陈翔 江铠同](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%BF%94%20%E6%B1%9F%E9%93%A0%E5%90%8C%23) `303.6K 🔥`
1. [每天只睡6小时的身体变化](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%8F%AA%E7%9D%A16%E5%B0%8F%E6%97%B6%E7%9A%84%E8%BA%AB%E4%BD%93%E5%8F%98%E5%8C%96%23) `288.2K 🔥`
1. [曝火箭少女将重组](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%81%AB%E7%AE%AD%E5%B0%91%E5%A5%B3%E5%B0%86%E9%87%8D%E7%BB%84%23) `285.3K 🔥`
1. [小米澎程](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%23) `281.6K 🔥`
1. [无限暖暖](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%99%90%E6%9A%96%E6%9A%96%23) `279.6K 🔥`
1. [第38届百花奖提名名单 (Nomination List for the 38th Hundred Flowers Awards)](https://s.weibo.com/weibo?q=%23%E7%AC%AC38%E5%B1%8A%E7%99%BE%E8%8A%B1%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `550.9K 🔥` `-76%`
1. [FIFA认定阿根廷进球判罚正确 (FIFA confirms Argentina's goal call was correct)](https://s.weibo.com/weibo?q=%23FIFA%E8%AE%A4%E5%AE%9A%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%BF%9B%E7%90%83%E5%88%A4%E7%BD%9A%E6%AD%A3%E7%A1%AE%23) `490.1K 🔥` `-66%`
1. [HLE对战BLG](https://s.weibo.com/weibo?q=%23HLE%E5%AF%B9%E6%88%98BLG%23) `486.1K 🔥` `-67%`
1. [微信头像 第一印象](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F%20%E7%AC%AC%E4%B8%80%E5%8D%B0%E8%B1%A1%23) `485.6K 🔥` `-45%`
1. [花呗致歉](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%91%97%E8%87%B4%E6%AD%89%23) `307.3K 🔥` `-52%`
1. [蚝油瓶是我用过最好用的瓶子](https://s.weibo.com/weibo?q=%23%E8%9A%9D%E6%B2%B9%E7%93%B6%E6%98%AF%E6%88%91%E7%94%A8%E8%BF%87%E6%9C%80%E5%A5%BD%E7%94%A8%E7%9A%84%E7%93%B6%E5%AD%90%23) `304.8K 🔥` `-26%`
1. [娄艺潇等嘉宾宣布自费成合伙人](https://s.weibo.com/weibo?q=%23%E5%A8%84%E8%89%BA%E6%BD%87%E7%AD%89%E5%98%89%E5%AE%BE%E5%AE%A3%E5%B8%83%E8%87%AA%E8%B4%B9%E6%88%90%E5%90%88%E4%BC%99%E4%BA%BA%23) `300.9K 🔥` `-27%`
1. [峰哥全仓再次上车](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A5%E5%85%A8%E4%BB%93%E5%86%8D%E6%AC%A1%E4%B8%8A%E8%BD%A6%23) `293.7K 🔥` `-51%`
1. [台风巴威最新路径来了](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E6%9C%80%E6%96%B0%E8%B7%AF%E5%BE%84%E6%9D%A5%E4%BA%86%23) `282.9K 🔥` `-82%`

Updated at 2026-07-09 19:39:13

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
