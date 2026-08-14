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

1. [林诗栋2比3A勒布伦 (Lin Shidong 2-3A Lebrun)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B2%E6%AF%943A%E5%8B%92%E5%B8%83%E4%BC%A6%23) `1.2M 🔥` `NEW`
1. [支付宝送题车来上海整活儿了](https://s.weibo.com/weibo?q=%23%E6%94%AF%E4%BB%98%E5%AE%9D%E9%80%81%E9%A2%98%E8%BD%A6%E6%9D%A5%E4%B8%8A%E6%B5%B7%E6%95%B4%E6%B4%BB%E5%84%BF%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [天官赐福广播剧第四季](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%98%E8%B5%90%E7%A6%8F%E5%B9%BF%E6%92%AD%E5%89%A7%E7%AC%AC%E5%9B%9B%E5%AD%A3%23) `707.6K 🔥` `NEW`
1. [河南一传染病医院被淹](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%80%E4%BC%A0%E6%9F%93%E7%97%85%E5%8C%BB%E9%99%A2%E8%A2%AB%E6%B7%B9%23) `365.3K 🔥` `NEW`
1. [全民进入纯过日子时代](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%B0%91%E8%BF%9B%E5%85%A5%E7%BA%AF%E8%BF%87%E6%97%A5%E5%AD%90%E6%97%B6%E4%BB%A3%23) `344.0K 🔥` `NEW`
1. [皇阿玛披哥送考五阿哥](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%98%BF%E7%8E%9B%E6%8A%AB%E5%93%A5%E9%80%81%E8%80%83%E4%BA%94%E9%98%BF%E5%93%A5%23) `330.8K 🔥` `NEW`
1. [日本暴雨中国游客无奈地铁站过夜](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%9A%B4%E9%9B%A8%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E6%97%A0%E5%A5%88%E5%9C%B0%E9%93%81%E7%AB%99%E8%BF%87%E5%A4%9C%23) `322.9K 🔥` `NEW`
1. [张桂源拔河摔倒](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E6%8B%94%E6%B2%B3%E6%91%94%E5%80%92%23) `251.9K 🔥` `NEW`
1. [贵州茅台上半年净利润445.17亿](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E8%8C%85%E5%8F%B0%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%87%80%E5%88%A9%E6%B6%A6445.17%E4%BA%BF%23) `249.4K 🔥` `NEW`
1. [曾辉扛住了内娱镜头](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%89%9B%E4%BD%8F%E4%BA%86%E5%86%85%E5%A8%B1%E9%95%9C%E5%A4%B4%23) `220.5K 🔥` `NEW`
1. [旺旺都不好卖了 (It’s hard to sell even if it’s prosperous)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E9%83%BD%E4%B8%8D%E5%A5%BD%E5%8D%96%E4%BA%86%23) `218.1K 🔥` `NEW`
1. [孙楠只有128斤](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%A5%A0%E5%8F%AA%E6%9C%89128%E6%96%A4%23) `216.9K 🔥` `NEW`
1. [广州寿司郎道歉](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%AF%BF%E5%8F%B8%E9%83%8E%E9%81%93%E6%AD%89%23) `214.2K 🔥` `NEW`
1. [无锡市区积水齐腰深](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%94%A1%E5%B8%82%E5%8C%BA%E7%A7%AF%E6%B0%B4%E9%BD%90%E8%85%B0%E6%B7%B1%23) `186.2K 🔥` `NEW`
1. [陈思罕怼脸大屏](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E7%BD%95%E6%80%BC%E8%84%B8%E5%A4%A7%E5%B1%8F%23) `185.1K 🔥` `NEW`
1. [SK海力士警告明年芯片荒加剧](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E8%AD%A6%E5%91%8A%E6%98%8E%E5%B9%B4%E8%8A%AF%E7%89%87%E8%8D%92%E5%8A%A0%E5%89%A7%23) `174.3K 🔥` `NEW`
1. [曹骏好瘦](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%A5%BD%E7%98%A6%23) `358.2K 🔥` `+93%`
1. [历史未走远吾辈当自强 (History has not gone far, we should strengthen ourselves)](https://s.weibo.com/weibo?q=%23%E5%8E%86%E5%8F%B2%E6%9C%AA%E8%B5%B0%E8%BF%9C%E5%90%BE%E8%BE%88%E5%BD%93%E8%87%AA%E5%BC%BA%23) `198.7K 🔥` `+41%`
1. [披荆斩棘直播事故 (Overcoming obstacles and live broadcasting accidents)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%E4%BA%8B%E6%95%85%23) `4.2M 🔥`
1. [前7月我国邮政寄递量超1200亿件](https://s.weibo.com/weibo?q=%23%E5%89%8D7%E6%9C%88%E6%88%91%E5%9B%BD%E9%82%AE%E6%94%BF%E5%AF%84%E9%80%92%E9%87%8F%E8%B6%851200%E4%BA%BF%E4%BB%B6%23) `1.1M 🔥`
1. [王橹杰陈思罕合唱黑苹果](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%99%88%E6%80%9D%E7%BD%95%E5%90%88%E5%94%B1%E9%BB%91%E8%8B%B9%E6%9E%9C%23) `999.5K 🔥`
1. [张雅琪发12宫格](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E5%8F%9112%E5%AE%AB%E6%A0%BC%23) `726.1K 🔥`
1. [迪丽热巴又心软撤诉了 (Dilireba relents and withdraws lawsuit)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8F%88%E5%BF%83%E8%BD%AF%E6%92%A4%E8%AF%89%E4%BA%86%23) `378.0K 🔥`
1. [胖东来闭店员工称全员去新店 (The employees of Pang Dong Lai’s closed store said that all employees would go to the new store)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%97%AD%E5%BA%97%E5%91%98%E5%B7%A5%E7%A7%B0%E5%85%A8%E5%91%98%E5%8E%BB%E6%96%B0%E5%BA%97%23) `301.8K 🔥`
1. [张雅琪 湖南卫视下场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E4%B8%8B%E5%9C%BA%23) `296.9K 🔥`
1. [夫妻分房睡的真实原因找到了](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E5%88%86%E6%88%BF%E7%9D%A1%E7%9A%84%E7%9C%9F%E5%AE%9E%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `263.7K 🔥`
1. [宋雨琦纹身](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%BA%B9%E8%BA%AB%23) `259.8K 🔥`
1. [陈奕恒英文rap](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E8%8B%B1%E6%96%87rap%23) `216.3K 🔥`
1. [杨博文 妆造](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%20%E5%A6%86%E9%80%A0%23) `188.7K 🔥`
1. [胖东来房东逻辑](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%88%BF%E4%B8%9C%E9%80%BB%E8%BE%91%23) `1.1M 🔥` `-26%`
1. [恋与深空 敷衍](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%20%E6%95%B7%E8%A1%8D%23) `660.1K 🔥` `-29%`
1. [披哥选手体脂率](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A5%E9%80%89%E6%89%8B%E4%BD%93%E8%84%82%E7%8E%87%23) `638.5K 🔥` `-24%`
1. [无锡暴雨](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%94%A1%E6%9A%B4%E9%9B%A8%23) `531.3K 🔥` `-25%`
1. [地铁站也能办结婚证了 (You can also apply for a marriage certificate at the subway station)](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E7%AB%99%E4%B9%9F%E8%83%BD%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `378.2K 🔥` `-38%`
1. [公司该缴的社保 个人承担 (The social security that the company should pay is borne by the individual)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E8%AF%A5%E7%BC%B4%E7%9A%84%E7%A4%BE%E4%BF%9D%20%E4%B8%AA%E4%BA%BA%E6%89%BF%E6%8B%85%23) `354.3K 🔥` `-37%`
1. [关晓彤彩排也戴着负重手环](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%BD%A9%E6%8E%92%E4%B9%9F%E6%88%B4%E7%9D%80%E8%B4%9F%E9%87%8D%E6%89%8B%E7%8E%AF%23) `342.2K 🔥` `-36%`
1. [朋友圈永远不会有二次编辑功能](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%B0%B8%E8%BF%9C%E4%B8%8D%E4%BC%9A%E6%9C%89%E4%BA%8C%E6%AC%A1%E7%BC%96%E8%BE%91%E5%8A%9F%E8%83%BD%23) `321.0K 🔥` `-47%`
1. [张桂源腹肌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E8%85%B9%E8%82%8C%23) `314.7K 🔥` `-48%`
1. [曝王嘉尔宋雨琦恋情 (Wang Jiaer and Song Yuqi's romance revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%81%8B%E6%83%85%23) `305.8K 🔥` `-26%`
1. [曾辉镜头签](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E9%95%9C%E5%A4%B4%E7%AD%BE%23) `292.7K 🔥` `-51%`
1. [明年或出现最严重存储荒 (The most serious storage shortage may occur next year)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%B9%B4%E6%88%96%E5%87%BA%E7%8E%B0%E6%9C%80%E4%B8%A5%E9%87%8D%E5%AD%98%E5%82%A8%E8%8D%92%23) `238.2K 🔥` `-47%`
1. [郭德纲 现挂](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%BE%B7%E7%BA%B2%20%E7%8E%B0%E6%8C%82%23) `230.9K 🔥` `-52%`
1. [沈梦辰漂亮裙子配丑鞋](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E6%BC%82%E4%BA%AE%E8%A3%99%E5%AD%90%E9%85%8D%E4%B8%91%E9%9E%8B%23) `224.4K 🔥` `-51%`
1. [猫猫不小心亲到死对头](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%8C%AB%E4%B8%8D%E5%B0%8F%E5%BF%83%E4%BA%B2%E5%88%B0%E6%AD%BB%E5%AF%B9%E5%A4%B4%23) `221.4K 🔥` `-23%`
1. [小沈阳腰闪了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E8%85%B0%E9%97%AA%E4%BA%86%23) `219.3K 🔥` `-26%`
1. [披荆斩棘直播 (Overcoming obstacles live broadcast)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `209.9K 🔥` `-38%`
1. [小酒窝房间简直是我小时候的梦中情房 (The dimple room is simply my dream room when I was a kid)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E6%88%BF%E9%97%B4%E7%AE%80%E7%9B%B4%E6%98%AF%E6%88%91%E5%B0%8F%E6%97%B6%E5%80%99%E7%9A%84%E6%A2%A6%E4%B8%AD%E6%83%85%E6%88%BF%23) `197.2K 🔥` `-31%`
1. [魏子宸好会饭撒](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%A5%BD%E4%BC%9A%E9%A5%AD%E6%92%92%23) `185.0K 🔥` `-39%`
1. [世界杯决赛西班牙犯规 (Spain foul in World Cup final)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E8%A5%BF%E7%8F%AD%E7%89%99%E7%8A%AF%E8%A7%84%23) `180.7K 🔥` `-41%`
1. [左奇函杨博文调查中对唱 (Zuo Qi's duet with Yang Bowen during the investigation)](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E6%9D%A8%E5%8D%9A%E6%96%87%E8%B0%83%E6%9F%A5%E4%B8%AD%E5%AF%B9%E5%94%B1%23) `179.3K 🔥` `-41%`
1. [瑞幸回应被指七夕联名素人情侣](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%8C%87%E4%B8%83%E5%A4%95%E8%81%94%E5%90%8D%E7%B4%A0%E4%BA%BA%E6%83%85%E4%BE%A3%23) `176.8K 🔥` `-62%`
1. [34岁女子肾衰透析8年意外怀孕](https://s.weibo.com/weibo?q=%2334%E5%B2%81%E5%A5%B3%E5%AD%90%E8%82%BE%E8%A1%B0%E9%80%8F%E6%9E%908%E5%B9%B4%E6%84%8F%E5%A4%96%E6%80%80%E5%AD%95%23) `172.9K 🔥` `-43%`

Updated at 2026-08-14 22:46:03

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
