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

1. [晋江鞋厂火灾已致28死 (Jinjiang shoe factory fire kills 28)](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E9%9E%8B%E5%8E%82%E7%81%AB%E7%81%BE%E5%B7%B2%E8%87%B428%E6%AD%BB%23) `2.3M 🔥` `NEW`
1. [中办国办印发关于全力做好防汛抗旱工作的通知](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%8A%9E%E5%9B%BD%E5%8A%9E%E5%8D%B0%E5%8F%91%E5%85%B3%E4%BA%8E%E5%85%A8%E5%8A%9B%E5%81%9A%E5%A5%BD%E9%98%B2%E6%B1%9B%E6%8A%97%E6%97%B1%E5%B7%A5%E4%BD%9C%E7%9A%84%E9%80%9A%E7%9F%A5%23) `1.3M 🔥` `NEW`
1. [百花杀 九重紫](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%20%E4%B9%9D%E9%87%8D%E7%B4%AB%23) `1.3M 🔥` `NEW`
1. [拼多多在上海陆家嘴买了一栋楼](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E5%9C%A8%E4%B8%8A%E6%B5%B7%E9%99%86%E5%AE%B6%E5%98%B4%E4%B9%B0%E4%BA%86%E4%B8%80%E6%A0%8B%E6%A5%BC%23) `1.2M 🔥` `NEW`
1. [母亲葬身花坛儿子受访崩溃痛哭](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%91%AC%E8%BA%AB%E8%8A%B1%E5%9D%9B%E5%84%BF%E5%AD%90%E5%8F%97%E8%AE%BF%E5%B4%A9%E6%BA%83%E7%97%9B%E5%93%AD%23) `940.4K 🔥` `NEW`
1. [Bin 兄弟们决赛也要加油](https://s.weibo.com/weibo?q=%23Bin%20%E5%85%84%E5%BC%9F%E4%BB%AC%E5%86%B3%E8%B5%9B%E4%B9%9F%E8%A6%81%E5%8A%A0%E6%B2%B9%23) `385.5K 🔥` `NEW`
1. [宋威龙赵今麦素颜聚餐](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%B5%B5%E4%BB%8A%E9%BA%A6%E7%B4%A0%E9%A2%9C%E8%81%9A%E9%A4%90%23) `384.5K 🔥` `NEW`
1. [张元英嘴唇变化](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E5%98%B4%E5%94%87%E5%8F%98%E5%8C%96%23) `382.4K 🔥` `NEW`
1. [孙怡素颜肤色](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%B4%A0%E9%A2%9C%E8%82%A4%E8%89%B2%23) `379.7K 🔥` `NEW`
1. [海关证实一家4口乘机入境检疫异常](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%85%B3%E8%AF%81%E5%AE%9E%E4%B8%80%E5%AE%B64%E5%8F%A3%E4%B9%98%E6%9C%BA%E5%85%A5%E5%A2%83%E6%A3%80%E7%96%AB%E5%BC%82%E5%B8%B8%23) `377.1K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `376.0K 🔥` `NEW`
1. [李贤在 暗恋](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%B4%A4%E5%9C%A8%20%E6%9A%97%E6%81%8B%23) `373.8K 🔥` `NEW`
1. [德国华人性侵案受害者首次发声](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E5%8D%8E%E4%BA%BA%E6%80%A7%E4%BE%B5%E6%A1%88%E5%8F%97%E5%AE%B3%E8%80%85%E9%A6%96%E6%AC%A1%E5%8F%91%E5%A3%B0%23) `370.8K 🔥` `NEW`
1. [李斌回应自定义灯光代写热梗](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%8C%E5%9B%9E%E5%BA%94%E8%87%AA%E5%AE%9A%E4%B9%89%E7%81%AF%E5%85%89%E4%BB%A3%E5%86%99%E7%83%AD%E6%A2%97%23) `369.2K 🔥` `NEW`
1. [女子霸占车位8天宁赔500也不愿道歉](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%9C%B8%E5%8D%A0%E8%BD%A6%E4%BD%8D8%E5%A4%A9%E5%AE%81%E8%B5%94500%E4%B9%9F%E4%B8%8D%E6%84%BF%E9%81%93%E6%AD%89%23) `364.3K 🔥` `NEW`
1. [龙麦](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%BA%A6%23) `358.4K 🔥` `NEW`
1. [官方回应晋江鞋厂火灾](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E6%99%8B%E6%B1%9F%E9%9E%8B%E5%8E%82%E7%81%AB%E7%81%BE%23) `353.3K 🔥` `NEW`
1. [BLG战胜HLE](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CHLE%23) `350.7K 🔥` `NEW`
1. [百花杀 大女主爽剧](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%20%E5%A4%A7%E5%A5%B3%E4%B8%BB%E7%88%BD%E5%89%A7%23) `348.5K 🔥` `NEW`
1. [台风巴威体型扩至约140万平方公里](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E4%BD%93%E5%9E%8B%E6%89%A9%E8%87%B3%E7%BA%A6140%E4%B8%87%E5%B9%B3%E6%96%B9%E5%85%AC%E9%87%8C%23) `346.9K 🔥` `NEW`
1. [多方回应一家四口乘机入境检疫异常 (Many parties responded to the abnormal quarantine of a family of four entering the country by air)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%E4%B9%98%E6%9C%BA%E5%85%A5%E5%A2%83%E6%A3%80%E7%96%AB%E5%BC%82%E5%B8%B8%23) `343.9K 🔥` `NEW`
1. [如何让SUV装载收纳更得体](https://s.weibo.com/weibo?q=%23%E5%A6%82%E4%BD%95%E8%AE%A9SUV%E8%A3%85%E8%BD%BD%E6%94%B6%E7%BA%B3%E6%9B%B4%E5%BE%97%E4%BD%93%23) `339.3K 🔥` `NEW`
1. [超强台风巴威将进入48小时警戒线](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%B0%86%E8%BF%9B%E5%85%A548%E5%B0%8F%E6%97%B6%E8%AD%A6%E6%88%92%E7%BA%BF%23) `334.3K 🔥` `NEW`
1. [宁波大学回应研究员被指孕期出轨](https://s.weibo.com/weibo?q=%23%E5%AE%81%E6%B3%A2%E5%A4%A7%E5%AD%A6%E5%9B%9E%E5%BA%94%E7%A0%94%E7%A9%B6%E5%91%98%E8%A2%AB%E6%8C%87%E5%AD%95%E6%9C%9F%E5%87%BA%E8%BD%A8%23) `332.9K 🔥` `NEW`
1. [百花杀滤镜](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E6%BB%A4%E9%95%9C%23) `327.4K 🔥` `NEW`
1. [深入排查整治各类风险隐患](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%85%A5%E6%8E%92%E6%9F%A5%E6%95%B4%E6%B2%BB%E5%90%84%E7%B1%BB%E9%A3%8E%E9%99%A9%E9%9A%90%E6%82%A3%23) `324.3K 🔥` `NEW`
1. [阿根廷教练带飞训练中途离奇跳机](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%95%99%E7%BB%83%E5%B8%A6%E9%A3%9E%E8%AE%AD%E7%BB%83%E4%B8%AD%E9%80%94%E7%A6%BB%E5%A5%87%E8%B7%B3%E6%9C%BA%23) `321.4K 🔥` `NEW`
1. [日本3人介绍患者到柬活体肾移植被捕](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC3%E4%BA%BA%E4%BB%8B%E7%BB%8D%E6%82%A3%E8%80%85%E5%88%B0%E6%9F%AC%E6%B4%BB%E4%BD%93%E8%82%BE%E7%A7%BB%E6%A4%8D%E8%A2%AB%E6%8D%95%23) `318.4K 🔥` `NEW`
1. [台风巴威又改路线了 (Typhoon Bavi changes its route again)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%8F%88%E6%94%B9%E8%B7%AF%E7%BA%BF%E4%BA%86%23) `4.0M 🔥` `+60%`
1. [SkyNomad小米澎程 (SkyNomad Xiaomi Pengcheng)](https://s.weibo.com/weibo?q=%23SkyNomad%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%23) `1.3M 🔥` `+54%`
1. [广西捕蛇者称累计抓获两三千条蛇](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%8D%95%E8%9B%87%E8%80%85%E7%A7%B0%E7%B4%AF%E8%AE%A1%E6%8A%93%E8%8E%B7%E4%B8%A4%E4%B8%89%E5%8D%83%E6%9D%A1%E8%9B%87%23) `549.3K 🔥` `+82%`
1. [全浙江最尊重台风之人](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%B5%99%E6%B1%9F%E6%9C%80%E5%B0%8A%E9%87%8D%E5%8F%B0%E9%A3%8E%E4%B9%8B%E4%BA%BA%23) `951.0K 🔥`
1. [蔚来ES8大五座版上市 (NIO ES8 large five-seater version launched)](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5ES8%E5%A4%A7%E4%BA%94%E5%BA%A7%E7%89%88%E4%B8%8A%E5%B8%82%23) `946.7K 🔥`
1. [百花杀热度](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E7%83%AD%E5%BA%A6%23) `387.1K 🔥`
1. [陈翔 江铠同](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%BF%94%20%E6%B1%9F%E9%93%A0%E5%90%8C%23) `363.9K 🔥`
1. [上班可以带瓶牛奶](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E5%8F%AF%E4%BB%A5%E5%B8%A6%E7%93%B6%E7%89%9B%E5%A5%B6%23) `359.8K 🔥`
1. [百花杀](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%23) `355.6K 🔥`
1. [赵子琪女儿秀场晕倒](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E5%A5%B3%E5%84%BF%E7%A7%80%E5%9C%BA%E6%99%95%E5%80%92%23) `345.9K 🔥`
1. [老外在中国企业上班是什么体验 (What is it like for a foreigner to work in a Chinese company?)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E5%9C%A8%E4%B8%AD%E5%9B%BD%E4%BC%81%E4%B8%9A%E4%B8%8A%E7%8F%AD%E6%98%AF%E4%BB%80%E4%B9%88%E4%BD%93%E9%AA%8C%23) `342.0K 🔥`
1. [洪灾已致广西39死9失联 (Floods have killed 39 in Guangxi and left 9 missing)](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E7%81%BE%E5%B7%B2%E8%87%B4%E5%B9%BF%E8%A5%BF39%E6%AD%BB9%E5%A4%B1%E8%81%94%23) `337.3K 🔥`
1. [陈翔 苍天饶过谁 (Chen Xiang Who will God spare?)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%BF%94%20%E8%8B%8D%E5%A4%A9%E9%A5%B6%E8%BF%87%E8%B0%81%23) `332.2K 🔥`
1. [无限暖暖](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%99%90%E6%9A%96%E6%9A%96%23) `329.2K 🔥`
1. [薛之谦演唱会杭州站](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9A%E6%9D%AD%E5%B7%9E%E7%AB%99%23) `323.2K 🔥`
1. [AI预测法国夺冠概率居首](https://s.weibo.com/weibo?q=%23AI%E9%A2%84%E6%B5%8B%E6%B3%95%E5%9B%BD%E5%A4%BA%E5%86%A0%E6%A6%82%E7%8E%87%E5%B1%85%E9%A6%96%23) `317.8K 🔥`
1. [福建晋江鞋厂火灾](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E6%99%8B%E6%B1%9F%E9%9E%8B%E5%8E%82%E7%81%AB%E7%81%BE%23) `381.1K 🔥` `-67%`
1. [第38届百花奖提名名单 (Nomination List for the 38th Hundred Flowers Awards)](https://s.weibo.com/weibo?q=%23%E7%AC%AC38%E5%B1%8A%E7%99%BE%E8%8A%B1%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `371.5K 🔥` `-33%`
1. [超强台风巴威闭眼了 (Super Typhoon Bavi closed its eyes)](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E9%97%AD%E7%9C%BC%E4%BA%86%23) `366.4K 🔥` `-66%`
1. [多名艺人发声讨债](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E8%89%BA%E4%BA%BA%E5%8F%91%E5%A3%B0%E8%AE%A8%E5%80%BA%23) `361.2K 🔥` `-26%`
1. [陈都灵给宋威龙张婧仪拍照](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E7%BB%99%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%8B%8D%E7%85%A7%23) `354.0K 🔥` `-27%`
1. [救援航母已抵达广西贵港](https://s.weibo.com/weibo?q=%23%E6%95%91%E6%8F%B4%E8%88%AA%E6%AF%8D%E5%B7%B2%E6%8A%B5%E8%BE%BE%E5%B9%BF%E8%A5%BF%E8%B4%B5%E6%B8%AF%23) `340.7K 🔥` `-75%`
1. [百花奖](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%23) `325.3K 🔥` `-74%`
1. [HLE对战BLG](https://s.weibo.com/weibo?q=%23HLE%E5%AF%B9%E6%88%98BLG%23) `314.9K 🔥` `-35%`

Updated at 2026-07-09 22:15:58

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
