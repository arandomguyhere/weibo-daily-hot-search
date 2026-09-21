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

1. [张博恒金牌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%8D%9A%E6%81%92%E9%87%91%E7%89%8C%23) `1.7M 🔥` `NEW`
1. [钟南山团队发现肺结节发病新趋势](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E5%9B%A2%E9%98%9F%E5%8F%91%E7%8E%B0%E8%82%BA%E7%BB%93%E8%8A%82%E5%8F%91%E7%97%85%E6%96%B0%E8%B6%8B%E5%8A%BF%23) `991.9K 🔥` `NEW`
1. [未来5年我国文化蓝图来了](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A55%E5%B9%B4%E6%88%91%E5%9B%BD%E6%96%87%E5%8C%96%E8%93%9D%E5%9B%BE%E6%9D%A5%E4%BA%86%23) `746.1K 🔥` `NEW`
1. [张博恒绝杀两名日本奥运冠军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%8D%9A%E6%81%92%E7%BB%9D%E6%9D%80%E4%B8%A4%E5%90%8D%E6%97%A5%E6%9C%AC%E5%A5%A5%E8%BF%90%E5%86%A0%E5%86%9B%23) `670.8K 🔥` `NEW`
1. [闲鱼快成黄鱼了](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%E5%BF%AB%E6%88%90%E9%BB%84%E9%B1%BC%E4%BA%86%23) `598.4K 🔥` `NEW`
1. [第一学历歧视](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E5%AD%A6%E5%8E%86%E6%AD%A7%E8%A7%86%23) `554.5K 🔥` `NEW`
1. [注射司美格鲁肽的人后来怎样了](https://s.weibo.com/weibo?q=%23%E6%B3%A8%E5%B0%84%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E7%9A%84%E4%BA%BA%E5%90%8E%E6%9D%A5%E6%80%8E%E6%A0%B7%E4%BA%86%23) `463.4K 🔥` `NEW`
1. [张家齐替妈妈向路人道歉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E6%9B%BF%E5%A6%88%E5%A6%88%E5%90%91%E8%B7%AF%E4%BA%BA%E9%81%93%E6%AD%89%23) `431.9K 🔥` `NEW`
1. [徐嘉余第2金](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%98%89%E4%BD%99%E7%AC%AC2%E9%87%91%23) `388.4K 🔥` `NEW`
1. [李梦耍大牌事件](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%A2%A6%E8%80%8D%E5%A4%A7%E7%89%8C%E4%BA%8B%E4%BB%B6%23) `381.8K 🔥` `NEW`
1. [失踪七年女子尸骸在闺蜜梦境泥地寻获](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E8%B8%AA%E4%B8%83%E5%B9%B4%E5%A5%B3%E5%AD%90%E5%B0%B8%E9%AA%B8%E5%9C%A8%E9%97%BA%E8%9C%9C%E6%A2%A6%E5%A2%83%E6%B3%A5%E5%9C%B0%E5%AF%BB%E8%8E%B7%23) `377.3K 🔥` `NEW`
1. [stayc 解散](https://s.weibo.com/weibo?q=%23stayc%20%E8%A7%A3%E6%95%A3%23) `375.5K 🔥` `NEW`
1. [王源易烊千玺给王俊凯的祝福](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%BB%99%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%9A%84%E7%A5%9D%E7%A6%8F%23) `371.1K 🔥` `NEW`
1. [秦牛正威回应当年不承认与男顶流恋情](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E7%89%9B%E6%AD%A3%E5%A8%81%E5%9B%9E%E5%BA%94%E5%BD%93%E5%B9%B4%E4%B8%8D%E6%89%BF%E8%AE%A4%E4%B8%8E%E7%94%B7%E9%A1%B6%E6%B5%81%E6%81%8B%E6%83%85%23) `366.6K 🔥` `NEW`
1. [于子迪200混夺冠](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E5%AD%90%E8%BF%AA200%E6%B7%B7%E5%A4%BA%E5%86%A0%23) `362.5K 🔥` `NEW`
1. [宝格丽 宁艺卓张元英柳智敏](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%A0%BC%E4%B8%BD%20%E5%AE%81%E8%89%BA%E5%8D%93%E5%BC%A0%E5%85%83%E8%8B%B1%E6%9F%B3%E6%99%BA%E6%95%8F%23) `357.5K 🔥` `NEW`
1. [谭松韵不敢离戒碳水的刘学义太近](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E4%B8%8D%E6%95%A2%E7%A6%BB%E6%88%92%E7%A2%B3%E6%B0%B4%E7%9A%84%E5%88%98%E5%AD%A6%E4%B9%89%E5%A4%AA%E8%BF%91%23) `351.8K 🔥` `NEW`
1. [科技新一称小米18Pro防窥效果太牛](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E6%96%B0%E4%B8%80%E7%A7%B0%E5%B0%8F%E7%B1%B318Pro%E9%98%B2%E7%AA%A5%E6%95%88%E6%9E%9C%E5%A4%AA%E7%89%9B%23) `350.5K 🔥` `NEW`
1. [iPhone20Pro配置曝光](https://s.weibo.com/weibo?q=%23iPhone20Pro%E9%85%8D%E7%BD%AE%E6%9B%9D%E5%85%89%23) `349.8K 🔥` `NEW`
1. [每天喝牛奶身体会发生的变化](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%96%9D%E7%89%9B%E5%A5%B6%E8%BA%AB%E4%BD%93%E4%BC%9A%E5%8F%91%E7%94%9F%E7%9A%84%E5%8F%98%E5%8C%96%23) `348.8K 🔥` `NEW`
1. [坚持喝牛奶vs从不喝牛奶](https://s.weibo.com/weibo?q=%23%E5%9D%9A%E6%8C%81%E5%96%9D%E7%89%9B%E5%A5%B6vs%E4%BB%8E%E4%B8%8D%E5%96%9D%E7%89%9B%E5%A5%B6%23) `347.2K 🔥` `NEW`
1. [许嵩粉丝发文](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%E7%B2%89%E4%B8%9D%E5%8F%91%E6%96%87%23) `344.9K 🔥` `NEW`
1. [超过30岁请停止忽视这些食物](https://s.weibo.com/weibo?q=%23%E8%B6%85%E8%BF%8730%E5%B2%81%E8%AF%B7%E5%81%9C%E6%AD%A2%E5%BF%BD%E8%A7%86%E8%BF%99%E4%BA%9B%E9%A3%9F%E7%89%A9%23) `344.4K 🔥` `NEW`
1. [时速300公里赛车这么拍帅到了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E9%80%9F300%E5%85%AC%E9%87%8C%E8%B5%9B%E8%BD%A6%E8%BF%99%E4%B9%88%E6%8B%8D%E5%B8%85%E5%88%B0%E4%BA%86%23) `338.6K 🔥` `NEW`
1. [第33届金鹰奖](https://s.weibo.com/weibo?q=%23%E7%AC%AC33%E5%B1%8A%E9%87%91%E9%B9%B0%E5%A5%96%23) `337.3K 🔥` `NEW`
1. [最直白最不绕弯子的豆包上车了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E7%9B%B4%E7%99%BD%E6%9C%80%E4%B8%8D%E7%BB%95%E5%BC%AF%E5%AD%90%E7%9A%84%E8%B1%86%E5%8C%85%E4%B8%8A%E8%BD%A6%E4%BA%86%23) `285.6K 🔥` `NEW`
1. [13岁于子迪亚运第2金](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E4%BA%8E%E5%AD%90%E8%BF%AA%E4%BA%9A%E8%BF%90%E7%AC%AC2%E9%87%91%23) `275.2K 🔥` `NEW`
1. [闲鱼回应涉黄](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%E5%9B%9E%E5%BA%94%E6%B6%89%E9%BB%84%23) `273.1K 🔥` `NEW`
1. [王祖贤隐退22年后首个访谈](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%96%E8%B4%A4%E9%9A%90%E9%80%8022%E5%B9%B4%E5%90%8E%E9%A6%96%E4%B8%AA%E8%AE%BF%E8%B0%88%23) `272.5K 🔥` `NEW`
1. [外交部介绍访美安排](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E4%BB%8B%E7%BB%8D%E8%AE%BF%E7%BE%8E%E5%AE%89%E6%8E%92%23) `267.4K 🔥` `NEW`
1. [宝格丽官宣宁艺卓](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%A0%BC%E4%B8%BD%E5%AE%98%E5%AE%A3%E5%AE%81%E8%89%BA%E5%8D%93%23) `266.4K 🔥` `NEW`
1. [董志豪100蛙金牌](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%BF%97%E8%B1%AA100%E8%9B%99%E9%87%91%E7%89%8C%23) `256.1K 🔥` `NEW`
1. [湾区升明月 观众替晚会筛选答案](https://s.weibo.com/weibo?q=%23%E6%B9%BE%E5%8C%BA%E5%8D%87%E6%98%8E%E6%9C%88%20%E8%A7%82%E4%BC%97%E6%9B%BF%E6%99%9A%E4%BC%9A%E7%AD%9B%E9%80%89%E7%AD%94%E6%A1%88%23) `226.6K 🔥` `NEW`
1. [盛李豪微博全是冠军](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E6%9D%8E%E8%B1%AA%E5%BE%AE%E5%8D%9A%E5%85%A8%E6%98%AF%E5%86%A0%E5%86%9B%23) `195.7K 🔥` `NEW`
1. [中国女排vs泰国女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92vs%E6%B3%B0%E5%9B%BD%E5%A5%B3%E6%8E%92%23) `187.7K 🔥` `NEW`
1. [冯禧素颜好好看有点像汤唯](https://s.weibo.com/weibo?q=%23%E5%86%AF%E7%A6%A7%E7%B4%A0%E9%A2%9C%E5%A5%BD%E5%A5%BD%E7%9C%8B%E6%9C%89%E7%82%B9%E5%83%8F%E6%B1%A4%E5%94%AF%23) `186.4K 🔥` `NEW`
1. [17岁女生开学首日宿舍楼坠亡](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%A5%B3%E7%94%9F%E5%BC%80%E5%AD%A6%E9%A6%96%E6%97%A5%E5%AE%BF%E8%88%8D%E6%A5%BC%E5%9D%A0%E4%BA%A1%23) `179.6K 🔥` `NEW`
1. [A股玄学来了华字股涨疯了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%8E%84%E5%AD%A6%E6%9D%A5%E4%BA%86%E5%8D%8E%E5%AD%97%E8%82%A1%E6%B6%A8%E7%96%AF%E4%BA%86%23) `164.5K 🔥` `NEW`
1. [SUHO感叹EXO成员变动](https://s.weibo.com/weibo?q=%23SUHO%E6%84%9F%E5%8F%B9EXO%E6%88%90%E5%91%98%E5%8F%98%E5%8A%A8%23) `159.5K 🔥` `NEW`
1. [粉笔 到底是谁受了委屈](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%20%E5%88%B0%E5%BA%95%E6%98%AF%E8%B0%81%E5%8F%97%E4%BA%86%E5%A7%94%E5%B1%88%23) `141.0K 🔥` `NEW`
1. [生13孩子的父亲称政府帮建了楼](https://s.weibo.com/weibo?q=%23%E7%94%9F13%E5%AD%A9%E5%AD%90%E7%9A%84%E7%88%B6%E4%BA%B2%E7%A7%B0%E6%94%BF%E5%BA%9C%E5%B8%AE%E5%BB%BA%E4%BA%86%E6%A5%BC%23) `140.9K 🔥` `NEW`
1. [李梦炒鸡蛋给谭松韵吃吐了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%A2%A6%E7%82%92%E9%B8%A1%E8%9B%8B%E7%BB%99%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%90%83%E5%90%90%E4%BA%86%23) `140.6K 🔥` `NEW`
1. [王者亚运会皮肤](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E4%BA%9A%E8%BF%90%E4%BC%9A%E7%9A%AE%E8%82%A4%23) `135.1K 🔥` `NEW`
1. [闲鱼 美团](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%20%E7%BE%8E%E5%9B%A2%23) `128.7K 🔥` `NEW`
1. [媳妇化成灰我都认识化了妆不行](https://s.weibo.com/weibo?q=%23%E5%AA%B3%E5%A6%87%E5%8C%96%E6%88%90%E7%81%B0%E6%88%91%E9%83%BD%E8%AE%A4%E8%AF%86%E5%8C%96%E4%BA%86%E5%A6%86%E4%B8%8D%E8%A1%8C%23) `128.2K 🔥` `NEW`
1. [长期碎片化睡眠的危害是全身性的](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E7%A2%8E%E7%89%87%E5%8C%96%E7%9D%A1%E7%9C%A0%E7%9A%84%E5%8D%B1%E5%AE%B3%E6%98%AF%E5%85%A8%E8%BA%AB%E6%80%A7%E7%9A%84%23) `124.9K 🔥` `NEW`
1. [曝UNCHILD将解散](https://s.weibo.com/weibo?q=%23%E6%9B%9DUNCHILD%E5%B0%86%E8%A7%A3%E6%95%A3%23) `118.1K 🔥` `NEW`
1. [中国女足为什么值得被看见](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E8%B6%B3%E4%B8%BA%E4%BB%80%E4%B9%88%E5%80%BC%E5%BE%97%E8%A2%AB%E7%9C%8B%E8%A7%81%23) `545.4K 🔥` `+61%`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `385.3K 🔥` `+127%`
1. [吸烟 取消学费减免](https://s.weibo.com/weibo?q=%23%E5%90%B8%E7%83%9F%20%E5%8F%96%E6%B6%88%E5%AD%A6%E8%B4%B9%E5%87%8F%E5%85%8D%23) `352.4K 🔥` `+29%`
1. [自己做饭成本其实很高](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%B7%B1%E5%81%9A%E9%A5%AD%E6%88%90%E6%9C%AC%E5%85%B6%E5%AE%9E%E5%BE%88%E9%AB%98%23) `137.0K 🔥` `-51%`

Updated at 2026-09-21 17:24:37

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
