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

1. [美国军人向脱衣舞女泄露部署计划 (US military leaks deployment plans to strippers)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%86%9B%E4%BA%BA%E5%90%91%E8%84%B1%E8%A1%A3%E8%88%9E%E5%A5%B3%E6%B3%84%E9%9C%B2%E9%83%A8%E7%BD%B2%E8%AE%A1%E5%88%92%23) `336.2K 🔥` `NEW`
1. [南派三叔 群像无罪](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%B4%BE%E4%B8%89%E5%8F%94%20%E7%BE%A4%E5%83%8F%E6%97%A0%E7%BD%AA%23) `235.7K 🔥` `NEW`
1. [宋雨琦对接回应不录跑男](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E5%AF%B9%E6%8E%A5%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%BD%95%E8%B7%91%E7%94%B7%23) `213.6K 🔥` `NEW`
1. [抗癌博主朱明月去世其女发声](https://s.weibo.com/weibo?q=%23%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E6%9C%B1%E6%98%8E%E6%9C%88%E5%8E%BB%E4%B8%96%E5%85%B6%E5%A5%B3%E5%8F%91%E5%A3%B0%23) `210.7K 🔥` `NEW`
1. [单依纯拉黑网友](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%8B%89%E9%BB%91%E7%BD%91%E5%8F%8B%23) `161.2K 🔥` `NEW`
1. [愚人节](https://s.weibo.com/weibo?q=%23%E6%84%9A%E4%BA%BA%E8%8A%82%23) `156.0K 🔥` `NEW`
1. [妻子14岁起陪张雪白手起家](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%9014%E5%B2%81%E8%B5%B7%E9%99%AA%E5%BC%A0%E9%9B%AA%E7%99%BD%E6%89%8B%E8%B5%B7%E5%AE%B6%23) `149.4K 🔥` `NEW`
1. [官方通报纯牛奶倒出透明苦水](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E7%BA%AF%E7%89%9B%E5%A5%B6%E5%80%92%E5%87%BA%E9%80%8F%E6%98%8E%E8%8B%A6%E6%B0%B4%23) `149.3K 🔥` `NEW`
1. [en王翊恩回应离过婚](https://s.weibo.com/weibo?q=%23en%E7%8E%8B%E7%BF%8A%E6%81%A9%E5%9B%9E%E5%BA%94%E7%A6%BB%E8%BF%87%E5%A9%9A%23) `149.0K 🔥` `NEW`
1. [NCTWISH 最尊重愚人节的团](https://s.weibo.com/weibo?q=%23NCTWISH%20%E6%9C%80%E5%B0%8A%E9%87%8D%E6%84%9A%E4%BA%BA%E8%8A%82%E7%9A%84%E5%9B%A2%23) `148.7K 🔥` `NEW`
1. [站姐团建](https://s.weibo.com/weibo?q=%23%E7%AB%99%E5%A7%90%E5%9B%A2%E5%BB%BA%23) `145.2K 🔥` `NEW`
1. [中国无人机蜂群突击铺天盖地](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%97%A0%E4%BA%BA%E6%9C%BA%E8%9C%82%E7%BE%A4%E7%AA%81%E5%87%BB%E9%93%BA%E5%A4%A9%E7%9B%96%E5%9C%B0%23) `130.0K 🔥` `NEW`
1. [提升减肥成功率的小技巧](https://s.weibo.com/weibo?q=%23%E6%8F%90%E5%8D%87%E5%87%8F%E8%82%A5%E6%88%90%E5%8A%9F%E7%8E%87%E7%9A%84%E5%B0%8F%E6%8A%80%E5%B7%A7%23) `129.2K 🔥` `NEW`
1. [陶昕然人气](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E4%BA%BA%E6%B0%94%23) `127.8K 🔥` `NEW`
1. [90后女子被叫奶奶痛下决心减肥](https://s.weibo.com/weibo?q=%2390%E5%90%8E%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%8F%AB%E5%A5%B6%E5%A5%B6%E7%97%9B%E4%B8%8B%E5%86%B3%E5%BF%83%E5%87%8F%E8%82%A5%23) `120.1K 🔥` `NEW`
1. [en王翊恩 结婚但没同居](https://s.weibo.com/weibo?q=%23en%E7%8E%8B%E7%BF%8A%E6%81%A9%20%E7%BB%93%E5%A9%9A%E4%BD%86%E6%B2%A1%E5%90%8C%E5%B1%85%23) `114.0K 🔥` `NEW`
1. [羊水栓塞产妇昏迷30天后苏醒](https://s.weibo.com/weibo?q=%23%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%E4%BA%A7%E5%A6%87%E6%98%8F%E8%BF%B730%E5%A4%A9%E5%90%8E%E8%8B%8F%E9%86%92%23) `112.1K 🔥` `NEW`
1. [iPhone13半价换电池没货](https://s.weibo.com/weibo?q=%23iPhone13%E5%8D%8A%E4%BB%B7%E6%8D%A2%E7%94%B5%E6%B1%A0%E6%B2%A1%E8%B4%A7%23) `104.4K 🔥` `NEW`
1. [中东局势引发全球蝴蝶效应](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%B1%80%E5%8A%BF%E5%BC%95%E5%8F%91%E5%85%A8%E7%90%83%E8%9D%B4%E8%9D%B6%E6%95%88%E5%BA%94%23) `104.2K 🔥` `NEW`
1. [老人6万元卖粮钱被孙女打赏](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA6%E4%B8%87%E5%85%83%E5%8D%96%E7%B2%AE%E9%92%B1%E8%A2%AB%E5%AD%99%E5%A5%B3%E6%89%93%E8%B5%8F%23) `104.1K 🔥` `NEW`
1. [黄金六轮史诗级跳水 (Golden six rounds of epic diving)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%85%AD%E8%BD%AE%E5%8F%B2%E8%AF%97%E7%BA%A7%E8%B7%B3%E6%B0%B4%23) `104.1K 🔥` `NEW`
1. [郭敬明终于能睡着了](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E7%BB%88%E4%BA%8E%E8%83%BD%E7%9D%A1%E7%9D%80%E4%BA%86%23) `102.2K 🔥` `NEW`
1. [张凌赫拍照金靖一秒摆pose](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8B%8D%E7%85%A7%E9%87%91%E9%9D%96%E4%B8%80%E7%A7%92%E6%91%86pose%23) `96.0K 🔥` `NEW`
1. [盗墓笔记](https://s.weibo.com/weibo?q=%23%E7%9B%97%E5%A2%93%E7%AC%94%E8%AE%B0%23) `93.6K 🔥` `NEW`
1. [DYG晋级败者组第三轮](https://s.weibo.com/weibo?q=%23DYG%E6%99%8B%E7%BA%A7%E8%B4%A5%E8%80%85%E7%BB%84%E7%AC%AC%E4%B8%89%E8%BD%AE%23) `92.0K 🔥` `NEW`
1. [这是张雪的飞驰人生](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E5%BC%A0%E9%9B%AA%E7%9A%84%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F%23) `92.0K 🔥` `NEW`
1. [吴慷仁口音淡了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%85%B7%E4%BB%81%E5%8F%A3%E9%9F%B3%E6%B7%A1%E4%BA%86%23) `90.5K 🔥` `NEW`
1. [香港开往上海高铁车厢出现大量蚊虫](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%BC%80%E5%BE%80%E4%B8%8A%E6%B5%B7%E9%AB%98%E9%93%81%E8%BD%A6%E5%8E%A2%E5%87%BA%E7%8E%B0%E5%A4%A7%E9%87%8F%E8%9A%8A%E8%99%AB%23) `818.3K 🔥` `+248%`
1. [一汽大众35周年重磅上新 (FAW-Volkswagen launches new products for 35th anniversary)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%9735%E5%91%A8%E5%B9%B4%E9%87%8D%E7%A3%85%E4%B8%8A%E6%96%B0%23) `463.8K 🔥`
1. [瑞幸 紫椰子 (Luckin Purple Coconut)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%20%E7%B4%AB%E6%A4%B0%E5%AD%90%23) `291.7K 🔥`
1. [张雪 (Zhang Xue)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `165.5K 🔥`
1. [运动员退役后从146斤暴涨至523斤](https://s.weibo.com/weibo?q=%23%E8%BF%90%E5%8A%A8%E5%91%98%E9%80%80%E5%BD%B9%E5%90%8E%E4%BB%8E146%E6%96%A4%E6%9A%B4%E6%B6%A8%E8%87%B3523%E6%96%A4%23) `159.3K 🔥`
1. [未发现鞠婧祎涉税问题 (No tax-related issues with Ju Jingyi were found)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%8F%91%E7%8E%B0%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%B6%89%E7%A8%8E%E9%97%AE%E9%A2%98%23) `1.2M 🔥` `-61%`
1. [十五五规划背后的90后力量 (The post-90s generation behind the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E8%83%8C%E5%90%8E%E7%9A%8490%E5%90%8E%E5%8A%9B%E9%87%8F%23) `663.3K 🔥` `-24%`
1. [曝雷军押注的中年人泡泡玛特将上市](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9B%B7%E5%86%9B%E6%8A%BC%E6%B3%A8%E7%9A%84%E4%B8%AD%E5%B9%B4%E4%BA%BA%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E5%B0%86%E4%B8%8A%E5%B8%82%23) `212.0K 🔥` `-80%`
1. [鞠婧祎 此身分明了 (Ju Jingyi’s identity is clear)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%20%E6%AD%A4%E8%BA%AB%E5%88%86%E6%98%8E%E4%BA%86%23) `163.4K 🔥` `-27%`
1. [陈飞宇 陈凯歌基因显化中](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%20%E9%99%88%E5%87%AF%E6%AD%8C%E5%9F%BA%E5%9B%A0%E6%98%BE%E5%8C%96%E4%B8%AD%23) `151.1K 🔥` `-31%`
1. [俄方拒绝给日本供油](https://s.weibo.com/weibo?q=%23%E4%BF%84%E6%96%B9%E6%8B%92%E7%BB%9D%E7%BB%99%E6%97%A5%E6%9C%AC%E4%BE%9B%E6%B2%B9%23) `149.9K 🔥` `-55%`
1. [杨紫也被女装背刺了 (Yang Zi was also stabbed in the back while dressed as a woman)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%B9%9F%E8%A2%AB%E5%A5%B3%E8%A3%85%E8%83%8C%E5%88%BA%E4%BA%86%23) `149.8K 🔥` `-31%`
1. [唐艺昕人气](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E4%BA%BA%E6%B0%94%23) `149.6K 🔥` `-69%`
1. [网红小徐自曝财产](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B0%8F%E5%BE%90%E8%87%AA%E6%9B%9D%E8%B4%A2%E4%BA%A7%23) `148.9K 🔥` `-33%`
1. [妻子5次试管成功同年丈夫与情人生子](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%905%E6%AC%A1%E8%AF%95%E7%AE%A1%E6%88%90%E5%8A%9F%E5%90%8C%E5%B9%B4%E4%B8%88%E5%A4%AB%E4%B8%8E%E6%83%85%E4%BA%BA%E7%94%9F%E5%AD%90%23) `148.8K 🔥` `-29%`
1. [TES 369](https://s.weibo.com/weibo?q=%23TES%20369%23) `147.5K 🔥` `-58%`
1. [孙艺珍庆祝与玄彬结婚四周年](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%89%BA%E7%8F%8D%E5%BA%86%E7%A5%9D%E4%B8%8E%E7%8E%84%E5%BD%AC%E7%BB%93%E5%A9%9A%E5%9B%9B%E5%91%A8%E5%B9%B4%23) `138.4K 🔥` `-36%`
1. [宋雨琦 跑男 (Song Yuqi Running Man)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%20%E8%B7%91%E7%94%B7%23) `126.0K 🔥` `-25%`
1. [等电梯时这个习惯可能会要命](https://s.weibo.com/weibo?q=%23%E7%AD%89%E7%94%B5%E6%A2%AF%E6%97%B6%E8%BF%99%E4%B8%AA%E4%B9%A0%E6%83%AF%E5%8F%AF%E8%83%BD%E4%BC%9A%E8%A6%81%E5%91%BD%23) `120.4K 🔥` `-23%`
1. [十日终焉 (End of ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `110.7K 🔥` `-21%`
1. [女子回应获3亿遗产引丈夫子女不满](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E8%8E%B73%E4%BA%BF%E9%81%97%E4%BA%A7%E5%BC%95%E4%B8%88%E5%A4%AB%E5%AD%90%E5%A5%B3%E4%B8%8D%E6%BB%A1%23) `104.5K 🔥` `-38%`
1. [王者荣耀返场 (King of Glory returns)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E8%BF%94%E5%9C%BA%23) `101.5K 🔥` `-24%`
1. [炎症变成癌症要多久 (How long does it take for inflammation to turn into cancer?)](https://s.weibo.com/weibo?q=%23%E7%82%8E%E7%97%87%E5%8F%98%E6%88%90%E7%99%8C%E7%97%87%E8%A6%81%E5%A4%9A%E4%B9%85%23) `92.0K 🔥` `-48%`
1. [时代少年团 录播](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%BD%95%E6%92%AD%23) `90.4K 🔥` `-57%`

Updated at 2026-03-31 23:37:57

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
