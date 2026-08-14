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

1. [河南暴雨 (Heavy rain in Henan)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%9A%B4%E9%9B%A8%23) `474.4K 🔥` `NEW`
1. [曝王嘉尔纹身是宋雨琦粉丝名](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E7%BA%B9%E8%BA%AB%E6%98%AF%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%B2%89%E4%B8%9D%E5%90%8D%23) `131.4K 🔥` `NEW`
1. [周启豪2比3松岛辉空](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%90%AF%E8%B1%AA2%E6%AF%943%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `129.7K 🔥` `NEW`
1. [沈腾的沈精兵来支持龙餐馆了](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E7%9A%84%E6%B2%88%E7%B2%BE%E5%85%B5%E6%9D%A5%E6%94%AF%E6%8C%81%E9%BE%99%E9%A4%90%E9%A6%86%E4%BA%86%23) `118.7K 🔥` `NEW`
1. [猝死前24小时身体发出的提醒](https://s.weibo.com/weibo?q=%23%E7%8C%9D%E6%AD%BB%E5%89%8D24%E5%B0%8F%E6%97%B6%E8%BA%AB%E4%BD%93%E5%8F%91%E5%87%BA%E7%9A%84%E6%8F%90%E9%86%92%23) `92.4K 🔥` `NEW`
1. [王赫野情商](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%B5%AB%E9%87%8E%E6%83%85%E5%95%86%23) `78.6K 🔥` `NEW`
1. [旺旺集团面临重大经营危机](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E9%9B%86%E5%9B%A2%E9%9D%A2%E4%B8%B4%E9%87%8D%E5%A4%A7%E7%BB%8F%E8%90%A5%E5%8D%B1%E6%9C%BA%23) `1.7M 🔥` `+43%`
1. [母女被拐卖父亲被骗无偿工作11年 (Mother and daughter were trafficked and father was deceived into working for free for 11 years)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E5%A5%B3%E8%A2%AB%E6%8B%90%E5%8D%96%E7%88%B6%E4%BA%B2%E8%A2%AB%E9%AA%97%E6%97%A0%E5%81%BF%E5%B7%A5%E4%BD%9C11%E5%B9%B4%23) `1.2M 🔥` `+58%`
1. [国乒男单无缘八强](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E6%97%A0%E7%BC%98%E5%85%AB%E5%BC%BA%23) `641.3K 🔥` `+57%`
1. [慢性压力导致幻想沉溺 (Chronic stress leads to fantasy addiction)](https://s.weibo.com/weibo?q=%23%E6%85%A2%E6%80%A7%E5%8E%8B%E5%8A%9B%E5%AF%BC%E8%87%B4%E5%B9%BB%E6%83%B3%E6%B2%89%E6%BA%BA%23) `429.0K 🔥` `+72%`
1. [王传君体脂率25.5%](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E4%BD%93%E8%84%82%E7%8E%8725.5%25%23) `267.0K 🔥` `+36%`
1. [曾辉帮韩雨彤整理衣服](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E5%B8%AE%E9%9F%A9%E9%9B%A8%E5%BD%A4%E6%95%B4%E7%90%86%E8%A1%A3%E6%9C%8D%23) `137.2K 🔥` `+59%`
1. [朋友圈永远不会有二次编辑功能 (Moments will never have a secondary editing function)](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%B0%B8%E8%BF%9C%E4%B8%8D%E4%BC%9A%E6%9C%89%E4%BA%8C%E6%AC%A1%E7%BC%96%E8%BE%91%E5%8A%9F%E8%83%BD%23) `136.2K 🔥` `+53%`
1. [曝王嘉尔宋雨琦恋情 (Wang Jiaer and Song Yuqi's romance revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%81%8B%E6%83%85%23) `135.3K 🔥` `+52%`
1. [章若楠王鹤棣杨洋三张建模脸 (Three modeling faces of Zhang Ruonan, Wang Hedi and Yang Yang)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%9D%A8%E6%B4%8B%E4%B8%89%E5%BC%A0%E5%BB%BA%E6%A8%A1%E8%84%B8%23) `134.0K 🔥` `+51%`
1. [山东童年零食杀疯了](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E7%AB%A5%E5%B9%B4%E9%9B%B6%E9%A3%9F%E6%9D%80%E7%96%AF%E4%BA%86%23) `133.6K 🔥` `+51%`
1. [张雅琪 湖南卫视下场 (Zhang Yaqi’s end at Hunan Satellite TV)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E4%B8%8B%E5%9C%BA%23) `132.3K 🔥` `+50%`
1. [Wenbo受伤](https://s.weibo.com/weibo?q=%23Wenbo%E5%8F%97%E4%BC%A4%23) `132.3K 🔥` `+50%`
1. [女子称自己月经持续来了8年 (Woman says she has been menstruating for 8 years)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E8%87%AA%E5%B7%B1%E6%9C%88%E7%BB%8F%E6%8C%81%E7%BB%AD%E6%9D%A5%E4%BA%868%E5%B9%B4%23) `121.9K 🔥` `+177%`
1. [全景相机影石大疆谁更强](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%99%AF%E7%9B%B8%E6%9C%BA%E5%BD%B1%E7%9F%B3%E5%A4%A7%E7%96%86%E8%B0%81%E6%9B%B4%E5%BC%BA%23) `116.5K 🔥` `+34%`
1. [日本暴雨中国游客无奈地铁站过夜](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%9A%B4%E9%9B%A8%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E6%97%A0%E5%A5%88%E5%9C%B0%E9%93%81%E7%AB%99%E8%BF%87%E5%A4%9C%23) `115.5K 🔥` `+32%`
1. [谁给小沈阳化的妆](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E5%B0%8F%E6%B2%88%E9%98%B3%E5%8C%96%E7%9A%84%E5%A6%86%23) `115.0K 🔥` `+33%`
1. [被曹骏出场气场拿捏住 (Captured by Cao Jun's aura when he appeared)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%9B%B9%E9%AA%8F%E5%87%BA%E5%9C%BA%E6%B0%94%E5%9C%BA%E6%8B%BF%E6%8D%8F%E4%BD%8F%23) `112.8K 🔥` `+26%`
1. [税务部门回应社保实缴问题 (Taxation department responds to social security payment issues)](https://s.weibo.com/weibo?q=%23%E7%A8%8E%E5%8A%A1%E9%83%A8%E9%97%A8%E5%9B%9E%E5%BA%94%E7%A4%BE%E4%BF%9D%E5%AE%9E%E7%BC%B4%E9%97%AE%E9%A2%98%23) `110.9K 🔥` `+25%`
1. [明天起禁用这类塑料制品 (Such plastic products will be banned from tomorrow)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%A4%A9%E8%B5%B7%E7%A6%81%E7%94%A8%E8%BF%99%E7%B1%BB%E5%A1%91%E6%96%99%E5%88%B6%E5%93%81%23) `105.7K 🔥` `+45%`
1. [44岁男子脑梗无法进食被一根冰棍救了 (A 44-year-old man had a cerebral infarction and was unable to eat, but was saved by a popsicle)](https://s.weibo.com/weibo?q=%2344%E5%B2%81%E7%94%B7%E5%AD%90%E8%84%91%E6%A2%97%E6%97%A0%E6%B3%95%E8%BF%9B%E9%A3%9F%E8%A2%AB%E4%B8%80%E6%A0%B9%E5%86%B0%E6%A3%8D%E6%95%91%E4%BA%86%23) `105.3K 🔥` `+21%`
1. [披哥最累的是沈梦辰 (Brother Pi is most tired of Shen Mengchen)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A5%E6%9C%80%E7%B4%AF%E7%9A%84%E6%98%AF%E6%B2%88%E6%A2%A6%E8%BE%B0%23) `100.9K 🔥` `+22%`
1. [文黛黛假死 (Wen Daidai faked death)](https://s.weibo.com/weibo?q=%23%E6%96%87%E9%BB%9B%E9%BB%9B%E5%81%87%E6%AD%BB%23) `87.6K 🔥` `+21%`
1. [曾辉扛住了内娱镜头 (Zeng Hui held back the domestic entertainment scenes)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%89%9B%E4%BD%8F%E4%BA%86%E5%86%85%E5%A8%B1%E9%95%9C%E5%A4%B4%23) `83.1K 🔥` `+33%`
1. [英一主持人前空翻跳水胸部重拍水面](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%B8%80%E4%B8%BB%E6%8C%81%E4%BA%BA%E5%89%8D%E7%A9%BA%E7%BF%BB%E8%B7%B3%E6%B0%B4%E8%83%B8%E9%83%A8%E9%87%8D%E6%8B%8D%E6%B0%B4%E9%9D%A2%23) `81.5K 🔥` `+30%`
1. [刘昊然为王传君拼了 (Liu Haoran fought hard for Wang Chuanjun)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%E4%B8%BA%E7%8E%8B%E4%BC%A0%E5%90%9B%E6%8B%BC%E4%BA%86%23) `80.7K 🔥` `+21%`
1. [时代少年团MV出道战镜头 (Era Youth Group MV Debut Battle Scenes)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2MV%E5%87%BA%E9%81%93%E6%88%98%E9%95%9C%E5%A4%B4%23) `77.7K 🔥` `+37%`
1. [当AI汽车长了双灵眸大眼](https://s.weibo.com/weibo?q=%23%E5%BD%93AI%E6%B1%BD%E8%BD%A6%E9%95%BF%E4%BA%86%E5%8F%8C%E7%81%B5%E7%9C%B8%E5%A4%A7%E7%9C%BC%23) `74.6K 🔥` `+33%`
1. [致敬生态保护者 (Tribute to ecological protectors)](https://s.weibo.com/weibo?q=%23%E8%87%B4%E6%95%AC%E7%94%9F%E6%80%81%E4%BF%9D%E6%8A%A4%E8%80%85%23) `712.5K 🔥`
1. [台风白海豚 (Typhoon White Dolphin)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `544.5K 🔥`
1. [中央汇金证金公司集体清仓贵州茅台 (Central Huijin Securities Co., Ltd. collectively liquidates Kweichow Moutai)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%A4%AE%E6%B1%87%E9%87%91%E8%AF%81%E9%87%91%E5%85%AC%E5%8F%B8%E9%9B%86%E4%BD%93%E6%B8%85%E4%BB%93%E8%B4%B5%E5%B7%9E%E8%8C%85%E5%8F%B0%23) `381.9K 🔥`
1. [牛来](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%23) `180.5K 🔥`
1. [全民进入纯过日子时代 (The whole people has entered an era of pure living)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%B0%91%E8%BF%9B%E5%85%A5%E7%BA%AF%E8%BF%87%E6%97%A5%E5%AD%90%E6%97%B6%E4%BB%A3%23) `178.8K 🔥`
1. [王楚然一看手机天又塌了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%80%E7%9C%8B%E6%89%8B%E6%9C%BA%E5%A4%A9%E5%8F%88%E5%A1%8C%E4%BA%86%23) `170.2K 🔥`
1. [北京暴雨 (Heavy rain in Beijing)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9A%B4%E9%9B%A8%23) `160.8K 🔥`
1. [张凌赫工作室公开逐玉战报](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%85%AC%E5%BC%80%E9%80%90%E7%8E%89%E6%88%98%E6%8A%A5%23) `154.7K 🔥`
1. [太湖流域发生流域性较大洪水 (A major flood occurred in the Taihu Basin)](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E6%B9%96%E6%B5%81%E5%9F%9F%E5%8F%91%E7%94%9F%E6%B5%81%E5%9F%9F%E6%80%A7%E8%BE%83%E5%A4%A7%E6%B4%AA%E6%B0%B4%23) `152.6K 🔥`
1. [命好的人本质是主体性强 (People with good fortune are essentially strong in subjectivity)](https://s.weibo.com/weibo?q=%23%E5%91%BD%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%9C%AC%E8%B4%A8%E6%98%AF%E4%B8%BB%E4%BD%93%E6%80%A7%E5%BC%BA%23) `151.8K 🔥`
1. [日本投降81周年](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8A%95%E9%99%8D81%E5%91%A8%E5%B9%B4%23) `103.5K 🔥`
1. [皇阿玛披哥送考五阿哥 (Brother Huang Amaphi sends the fifth brother to take the exam)](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%98%BF%E7%8E%9B%E6%8A%AB%E5%93%A5%E9%80%81%E8%80%83%E4%BA%94%E9%98%BF%E5%93%A5%23) `83.5K 🔥`
1. [开了自动对焦磨皮美颜但对错人了 (I turned on autofocus for skin resurfacing, but it was the wrong person.)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E4%BA%86%E8%87%AA%E5%8A%A8%E5%AF%B9%E7%84%A6%E7%A3%A8%E7%9A%AE%E7%BE%8E%E9%A2%9C%E4%BD%86%E5%AF%B9%E9%94%99%E4%BA%BA%E4%BA%86%23) `78.5K 🔥`
1. [旺旺都不好卖了](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E9%83%BD%E4%B8%8D%E5%A5%BD%E5%8D%96%E4%BA%86%23) `169.2K 🔥` `-45%`
1. [胖东来房东逻辑 (Fat Donglai’s landlord’s logic)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%88%BF%E4%B8%9C%E9%80%BB%E8%BE%91%23) `98.7K 🔥` `-22%`
1. [迪丽热巴又心软撤诉了 (Dilireba relents and withdraws lawsuit)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8F%88%E5%BF%83%E8%BD%AF%E6%92%A4%E8%AF%89%E4%BA%86%23) `74.9K 🔥` `-79%`

Updated at 2026-08-15 07:59:35

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
