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

1. [中国China成为潮流 (China China has become a trend)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDChina%E6%88%90%E4%B8%BA%E6%BD%AE%E6%B5%81%23) `761.1K 🔥` `NEW`
1. [日本 拜鬼](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%20%E6%8B%9C%E9%AC%BC%23) `752.4K 🔥` `NEW`
1. [路易吉正式认罪](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E6%98%93%E5%90%89%E6%AD%A3%E5%BC%8F%E8%AE%A4%E7%BD%AA%23) `417.5K 🔥` `NEW`
1. [王嘉尔吃自己的瓜](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%90%83%E8%87%AA%E5%B7%B1%E7%9A%84%E7%93%9C%23) `332.8K 🔥` `NEW`
1. [历史未走远吾辈当自强](https://s.weibo.com/weibo?q=%23%E5%8E%86%E5%8F%B2%E6%9C%AA%E8%B5%B0%E8%BF%9C%E5%90%BE%E8%BE%88%E5%BD%93%E8%87%AA%E5%BC%BA%23) `306.9K 🔥` `NEW`
1. [曝时代少年团加开演唱会](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%8A%A0%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `299.2K 🔥` `NEW`
1. [印尼7.7级地震引发海啸](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%B0%BC7.7%E7%BA%A7%E5%9C%B0%E9%9C%87%E5%BC%95%E5%8F%91%E6%B5%B7%E5%95%B8%23) `291.6K 🔥` `NEW`
1. [金价银价油价都涨了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%93%B6%E4%BB%B7%E6%B2%B9%E4%BB%B7%E9%83%BD%E6%B6%A8%E4%BA%86%23) `277.4K 🔥` `NEW`
1. [比尔盖茨女儿被曝涉嫌电信欺诈](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E5%A5%B3%E5%84%BF%E8%A2%AB%E6%9B%9D%E6%B6%89%E5%AB%8C%E7%94%B5%E4%BF%A1%E6%AC%BA%E8%AF%88%23) `222.4K 🔥` `NEW`
1. [答应保姆涨薪后反手让她带薪休假](https://s.weibo.com/weibo?q=%23%E7%AD%94%E5%BA%94%E4%BF%9D%E5%A7%86%E6%B6%A8%E8%96%AA%E5%90%8E%E5%8F%8D%E6%89%8B%E8%AE%A9%E5%A5%B9%E5%B8%A6%E8%96%AA%E4%BC%91%E5%81%87%23) `178.9K 🔥` `NEW`
1. [isa原生家庭 (isa’s original family)](https://s.weibo.com/weibo?q=%23isa%E5%8E%9F%E7%94%9F%E5%AE%B6%E5%BA%AD%23) `177.5K 🔥` `NEW`
1. [女孩停用网红面霜后成激素脸](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%81%9C%E7%94%A8%E7%BD%91%E7%BA%A2%E9%9D%A2%E9%9C%9C%E5%90%8E%E6%88%90%E6%BF%80%E7%B4%A0%E8%84%B8%23) `176.1K 🔥` `NEW`
1. [C罗追平世界纪录](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%BF%BD%E5%B9%B3%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `172.1K 🔥` `NEW`
1. [北京 冰雹](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%20%E5%86%B0%E9%9B%B9%23) `171.1K 🔥` `NEW`
1. [61岁乘客被吸出飞机窗外](https://s.weibo.com/weibo?q=%2361%E5%B2%81%E4%B9%98%E5%AE%A2%E8%A2%AB%E5%90%B8%E5%87%BA%E9%A3%9E%E6%9C%BA%E7%AA%97%E5%A4%96%23) `169.4K 🔥` `NEW`
1. [郭宇欣新剧清醒到让人心疼](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E6%96%B0%E5%89%A7%E6%B8%85%E9%86%92%E5%88%B0%E8%AE%A9%E4%BA%BA%E5%BF%83%E7%96%BC%23) `163.4K 🔥` `NEW`
1. [东契奇称湖人现有阵容能冲冠](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%A5%91%E5%A5%87%E7%A7%B0%E6%B9%96%E4%BA%BA%E7%8E%B0%E6%9C%89%E9%98%B5%E5%AE%B9%E8%83%BD%E5%86%B2%E5%86%A0%23) `161.5K 🔥` `NEW`
1. [岚图追光S大回环被疑AI](https://s.weibo.com/weibo?q=%23%E5%B2%9A%E5%9B%BE%E8%BF%BD%E5%85%89S%E5%A4%A7%E5%9B%9E%E7%8E%AF%E8%A2%AB%E7%96%91AI%23) `146.2K 🔥` `NEW`
1. [旺旺最大的对手竟是糖](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E6%9C%80%E5%A4%A7%E7%9A%84%E5%AF%B9%E6%89%8B%E7%AB%9F%E6%98%AF%E7%B3%96%23) `1.7M 🔥` `+66%`
1. [网友集体呼吁旺旺减糖](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%9B%86%E4%BD%93%E5%91%BC%E5%90%81%E6%97%BA%E6%97%BA%E5%87%8F%E7%B3%96%23) `482.7K 🔥` `+121%`
1. [牛来 (Niu Lai)](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%23) `334.0K 🔥` `+23%`
1. [要被关晓彤这双腿给晃晕了 (I'm going to be stunned by Guan Xiaotong's legs.)](https://s.weibo.com/weibo?q=%23%E8%A6%81%E8%A2%AB%E5%85%B3%E6%99%93%E5%BD%A4%E8%BF%99%E5%8F%8C%E8%85%BF%E7%BB%99%E6%99%83%E6%99%95%E4%BA%86%23) `320.1K 🔥` `+37%`
1. [路虎BBA保时捷价格大跳水](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E8%99%8EBBA%E4%BF%9D%E6%97%B6%E6%8D%B7%E4%BB%B7%E6%A0%BC%E5%A4%A7%E8%B7%B3%E6%B0%B4%23) `297.2K 🔥` `+23%`
1. [王传君体脂率25.5%](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E4%BD%93%E8%84%82%E7%8E%8725.5%25%23) `603.9K 🔥`
1. [母亲出轨女儿带父亲找到第三者](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E5%87%BA%E8%BD%A8%E5%A5%B3%E5%84%BF%E5%B8%A6%E7%88%B6%E4%BA%B2%E6%89%BE%E5%88%B0%E7%AC%AC%E4%B8%89%E8%80%85%23) `322.2K 🔥`
1. [谢霆锋二儿子近照曝光](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E4%BA%8C%E5%84%BF%E5%AD%90%E8%BF%91%E7%85%A7%E6%9B%9D%E5%85%89%23) `312.2K 🔥`
1. [喻言 体面](https://s.weibo.com/weibo?q=%23%E5%96%BB%E8%A8%80%20%E4%BD%93%E9%9D%A2%23) `299.3K 🔥`
1. [曝王嘉尔纹身是宋雨琦粉丝名](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E7%BA%B9%E8%BA%AB%E6%98%AF%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%B2%89%E4%B8%9D%E5%90%8D%23) `283.1K 🔥`
1. [北京暴雨 (Heavy rain in Beijing)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9A%B4%E9%9B%A8%23) `268.7K 🔥`
1. [张雅琪 湖南卫视下场 (Zhang Yaqi’s end at Hunan Satellite TV)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E4%B8%8B%E5%9C%BA%23) `259.7K 🔥`
1. [猝死前24小时身体发出的提醒](https://s.weibo.com/weibo?q=%23%E7%8C%9D%E6%AD%BB%E5%89%8D24%E5%B0%8F%E6%97%B6%E8%BA%AB%E4%BD%93%E5%8F%91%E5%87%BA%E7%9A%84%E6%8F%90%E9%86%92%23) `254.4K 🔥`
1. [河南暴雨 (Heavy rain in Henan)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%9A%B4%E9%9B%A8%23) `253.6K 🔥`
1. [摊贩希望胖东来再跟房东切磋切磋](https://s.weibo.com/weibo?q=%23%E6%91%8A%E8%B4%A9%E5%B8%8C%E6%9C%9B%E8%83%96%E4%B8%9C%E6%9D%A5%E5%86%8D%E8%B7%9F%E6%88%BF%E4%B8%9C%E5%88%87%E7%A3%8B%E5%88%87%E7%A3%8B%23) `173.1K 🔥`
1. [旺旺集团面临重大经营危机](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E9%9B%86%E5%9B%A2%E9%9D%A2%E4%B8%B4%E9%87%8D%E5%A4%A7%E7%BB%8F%E8%90%A5%E5%8D%B1%E6%9C%BA%23) `927.5K 🔥` `-52%`
1. [国乒男单无缘八强 (National table tennis men's singles missed the quarterfinals)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E6%97%A0%E7%BC%98%E5%85%AB%E5%BC%BA%23) `461.8K 🔥` `-27%`
1. [印尼7.7级地震](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%B0%BC7.7%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `453.0K 🔥` `-43%`
1. [特朗普称将宣布霍尔木兹海峡为美领土 (Trump says he will declare Strait of Hormuz as US territory)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%B0%86%E5%AE%A3%E5%B8%83%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E4%B8%BA%E7%BE%8E%E9%A2%86%E5%9C%9F%23) `329.1K 🔥` `-76%`
1. [母女被拐卖父亲被骗无偿工作11年 (Mother and daughter were trafficked and father was deceived into working for free for 11 years)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E5%A5%B3%E8%A2%AB%E6%8B%90%E5%8D%96%E7%88%B6%E4%BA%B2%E8%A2%AB%E9%AA%97%E6%97%A0%E5%81%BF%E5%B7%A5%E4%BD%9C11%E5%B9%B4%23) `315.1K 🔥` `-62%`
1. [慢性压力导致幻想沉溺 (Chronic stress leads to fantasy addiction)](https://s.weibo.com/weibo?q=%23%E6%85%A2%E6%80%A7%E5%8E%8B%E5%8A%9B%E5%AF%BC%E8%87%B4%E5%B9%BB%E6%83%B3%E6%B2%89%E6%BA%BA%23) `272.4K 🔥` `-54%`
1. [沈梦辰回应披哥最累的是沈梦辰](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E5%9B%9E%E5%BA%94%E6%8A%AB%E5%93%A5%E6%9C%80%E7%B4%AF%E7%9A%84%E6%98%AF%E6%B2%88%E6%A2%A6%E8%BE%B0%23) `180.0K 🔥` `-25%`
1. [王楚然一看手机天又塌了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%80%E7%9C%8B%E6%89%8B%E6%9C%BA%E5%A4%A9%E5%8F%88%E5%A1%8C%E4%BA%86%23) `178.4K 🔥` `-30%`
1. [旺旺都不好卖了](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E9%83%BD%E4%B8%8D%E5%A5%BD%E5%8D%96%E4%BA%86%23) `174.8K 🔥` `-30%`
1. [日本防相小泉进次郎参拜靖国神社](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%98%B2%E7%9B%B8%E5%B0%8F%E6%B3%89%E8%BF%9B%E6%AC%A1%E9%83%8E%E5%8F%82%E6%8B%9C%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%23) `168.2K 🔥` `-31%`
1. [44岁男子脑梗无法进食被一根冰棍救了 (A 44-year-old man had a cerebral infarction and was unable to eat, but was saved by a popsicle)](https://s.weibo.com/weibo?q=%2344%E5%B2%81%E7%94%B7%E5%AD%90%E8%84%91%E6%A2%97%E6%97%A0%E6%B3%95%E8%BF%9B%E9%A3%9F%E8%A2%AB%E4%B8%80%E6%A0%B9%E5%86%B0%E6%A3%8D%E6%95%91%E4%BA%86%23) `167.9K 🔥` `-25%`
1. [女子称自己月经持续来了8年 (Woman says she has been menstruating for 8 years)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E8%87%AA%E5%B7%B1%E6%9C%88%E7%BB%8F%E6%8C%81%E7%BB%AD%E6%9D%A5%E4%BA%868%E5%B9%B4%23) `160.7K 🔥` `-24%`
1. [谁给小沈阳化的妆](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E5%B0%8F%E6%B2%88%E9%98%B3%E5%8C%96%E7%9A%84%E5%A6%86%23) `160.3K 🔥` `-30%`
1. [邓紫棋发型十五分钟就淋直了](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E5%8F%91%E5%9E%8B%E5%8D%81%E4%BA%94%E5%88%86%E9%92%9F%E5%B0%B1%E6%B7%8B%E7%9B%B4%E4%BA%86%23) `159.1K 🔥` `-28%`
1. [82岁老人高速被撞身亡家属索赔13万](https://s.weibo.com/weibo?q=%2382%E5%B2%81%E8%80%81%E4%BA%BA%E9%AB%98%E9%80%9F%E8%A2%AB%E6%92%9E%E8%BA%AB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E7%B4%A2%E8%B5%9413%E4%B8%87%23) `153.2K 🔥` `-29%`
1. [陈思罕都痛得快要蜷缩了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E7%BD%95%E9%83%BD%E7%97%9B%E5%BE%97%E5%BF%AB%E8%A6%81%E8%9C%B7%E7%BC%A9%E4%BA%86%23) `147.9K 🔥` `-31%`
1. [张凌赫工作室公开逐玉战报 (Zhang Linghe's studio released the jade battle report)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%85%AC%E5%BC%80%E9%80%90%E7%8E%89%E6%88%98%E6%8A%A5%23) `146.1K 🔥` `-35%`

Updated at 2026-08-15 10:38:53

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
