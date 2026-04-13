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

1. [醉酒男子叫代驾到村口留置车内死亡 (Drunk man died after asking a driver to leave his car at the entrance of the village)](https://s.weibo.com/weibo?q=%23%E9%86%89%E9%85%92%E7%94%B7%E5%AD%90%E5%8F%AB%E4%BB%A3%E9%A9%BE%E5%88%B0%E6%9D%91%E5%8F%A3%E7%95%99%E7%BD%AE%E8%BD%A6%E5%86%85%E6%AD%BB%E4%BA%A1%23) `1.1M 🔥` `NEW`
1. [文旅消费迎来新爆发](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%97%85%E6%B6%88%E8%B4%B9%E8%BF%8E%E6%9D%A5%E6%96%B0%E7%88%86%E5%8F%91%23) `703.1K 🔥` `NEW`
1. [三代禁学计算机](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BB%A3%E7%A6%81%E5%AD%A6%E8%AE%A1%E7%AE%97%E6%9C%BA%23) `651.5K 🔥` `NEW`
1. [突然觉得小学老师好厉害](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E8%A7%89%E5%BE%97%E5%B0%8F%E5%AD%A6%E8%80%81%E5%B8%88%E5%A5%BD%E5%8E%89%E5%AE%B3%23) `370.2K 🔥` `NEW`
1. [肠胃不好的人吃早餐belike](https://s.weibo.com/weibo?q=%23%E8%82%A0%E8%83%83%E4%B8%8D%E5%A5%BD%E7%9A%84%E4%BA%BA%E5%90%83%E6%97%A9%E9%A4%90belike%23) `306.5K 🔥` `NEW`
1. [外交部回应美伊未达成协议](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E7%BE%8E%E4%BC%8A%E6%9C%AA%E8%BE%BE%E6%88%90%E5%8D%8F%E8%AE%AE%23) `154.4K 🔥` `NEW`
1. [楚乔传 全员下场](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E4%B9%94%E4%BC%A0%20%E5%85%A8%E5%91%98%E4%B8%8B%E5%9C%BA%23) `153.8K 🔥` `NEW`
1. [黄灿灿为防恶剪每天换发型](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E4%B8%BA%E9%98%B2%E6%81%B6%E5%89%AA%E6%AF%8F%E5%A4%A9%E6%8D%A2%E5%8F%91%E5%9E%8B%23) `152.9K 🔥` `NEW`
1. [西班牙首相试坐小米汽车](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A6%96%E7%9B%B8%E8%AF%95%E5%9D%90%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%23) `152.8K 🔥` `NEW`
1. [伊朗对美国发出新警告](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%B9%E7%BE%8E%E5%9B%BD%E5%8F%91%E5%87%BA%E6%96%B0%E8%AD%A6%E5%91%8A%23) `150.2K 🔥` `NEW`
1. [1991年跳舞的李小冉 (Li Xiaoran dancing in 1991)](https://s.weibo.com/weibo?q=%231991%E5%B9%B4%E8%B7%B3%E8%88%9E%E7%9A%84%E6%9D%8E%E5%B0%8F%E5%86%89%23) `149.7K 🔥` `NEW`
1. [医院回应患者被吊仪器上1小时无人管](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E5%9B%9E%E5%BA%94%E6%82%A3%E8%80%85%E8%A2%AB%E5%90%8A%E4%BB%AA%E5%99%A8%E4%B8%8A1%E5%B0%8F%E6%97%B6%E6%97%A0%E4%BA%BA%E7%AE%A1%23) `147.7K 🔥` `NEW`
1. [被绳锁喉男孩成绩全校前三](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%BB%B3%E9%94%81%E5%96%89%E7%94%B7%E5%AD%A9%E6%88%90%E7%BB%A9%E5%85%A8%E6%A0%A1%E5%89%8D%E4%B8%89%23) `146.6K 🔥` `NEW`
1. [宿迁真给何润东请来了](https://s.weibo.com/weibo?q=%23%E5%AE%BF%E8%BF%81%E7%9C%9F%E7%BB%99%E4%BD%95%E6%B6%A6%E4%B8%9C%E8%AF%B7%E6%9D%A5%E4%BA%86%23) `145.7K 🔥` `NEW`
1. [小S给林志玲擦泪](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E7%BB%99%E6%9E%97%E5%BF%97%E7%8E%B2%E6%93%A6%E6%B3%AA%23) `144.1K 🔥` `NEW`
1. [继EXO的E不发音后陈也不发音](https://s.weibo.com/weibo?q=%23%E7%BB%A7EXO%E7%9A%84E%E4%B8%8D%E5%8F%91%E9%9F%B3%E5%90%8E%E9%99%88%E4%B9%9F%E4%B8%8D%E5%8F%91%E9%9F%B3%23) `143.3K 🔥` `NEW`
1. [西宁一面馆标语是对女性的直接冒犯](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%81%E4%B8%80%E9%9D%A2%E9%A6%86%E6%A0%87%E8%AF%AD%E6%98%AF%E5%AF%B9%E5%A5%B3%E6%80%A7%E7%9A%84%E7%9B%B4%E6%8E%A5%E5%86%92%E7%8A%AF%23) `141.8K 🔥` `NEW`
1. [老师承诺爷爷离世后会抚养9岁男孩](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B8%88%E6%89%BF%E8%AF%BA%E7%88%B7%E7%88%B7%E7%A6%BB%E4%B8%96%E5%90%8E%E4%BC%9A%E6%8A%9A%E5%85%BB9%E5%B2%81%E7%94%B7%E5%AD%A9%23) `141.1K 🔥` `NEW`
1. [美军舰距离被彻底摧毁仅差数分钟](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%88%B0%E8%B7%9D%E7%A6%BB%E8%A2%AB%E5%BD%BB%E5%BA%95%E6%91%A7%E6%AF%81%E4%BB%85%E5%B7%AE%E6%95%B0%E5%88%86%E9%92%9F%23) `139.2K 🔥` `NEW`
1. [匈牙利选举结果的国际影响](https://s.weibo.com/weibo?q=%23%E5%8C%88%E7%89%99%E5%88%A9%E9%80%89%E4%B8%BE%E7%BB%93%E6%9E%9C%E7%9A%84%E5%9B%BD%E9%99%85%E5%BD%B1%E5%93%8D%23) `138.2K 🔥` `NEW`
1. [男子结婚3年不公开关系称母亲反对 (Man kept his relationship secret for 3 years after being married, saying his mother opposed it)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BB%93%E5%A9%9A3%E5%B9%B4%E4%B8%8D%E5%85%AC%E5%BC%80%E5%85%B3%E7%B3%BB%E7%A7%B0%E6%AF%8D%E4%BA%B2%E5%8F%8D%E5%AF%B9%23) `137.6K 🔥` `NEW`
1. [陆俊昊北电表演专业全国第一](https://s.weibo.com/weibo?q=%23%E9%99%86%E4%BF%8A%E6%98%8A%E5%8C%97%E7%94%B5%E8%A1%A8%E6%BC%94%E4%B8%93%E4%B8%9A%E5%85%A8%E5%9B%BD%E7%AC%AC%E4%B8%80%23) `136.6K 🔥` `NEW`
1. [黄景瑜徒手抓蛇路透](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E5%BE%92%E6%89%8B%E6%8A%93%E8%9B%87%E8%B7%AF%E9%80%8F%23) `135.7K 🔥` `NEW`
1. [西安149平住宅1元起拍后撤回](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89149%E5%B9%B3%E4%BD%8F%E5%AE%851%E5%85%83%E8%B5%B7%E6%8B%8D%E5%90%8E%E6%92%A4%E5%9B%9E%23) `135.1K 🔥` `NEW`
1. [权志龙状态太顶了](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99%E7%8A%B6%E6%80%81%E5%A4%AA%E9%A1%B6%E4%BA%86%23) `132.7K 🔥` `NEW`
1. [3岁男童每晚睡前补营养体重仅21斤](https://s.weibo.com/weibo?q=%233%E5%B2%81%E7%94%B7%E7%AB%A5%E6%AF%8F%E6%99%9A%E7%9D%A1%E5%89%8D%E8%A1%A5%E8%90%A5%E5%85%BB%E4%BD%93%E9%87%8D%E4%BB%8521%E6%96%A4%23) `132.1K 🔥` `NEW`
1. [医生回应2天吃1斤蓝莓胃堵成石墙](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%942%E5%A4%A9%E5%90%831%E6%96%A4%E8%93%9D%E8%8E%93%E8%83%83%E5%A0%B5%E6%88%90%E7%9F%B3%E5%A2%99%23) `131.1K 🔥` `NEW`
1. [多方资本领投涉黄AI软件](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E8%B5%84%E6%9C%AC%E9%A2%86%E6%8A%95%E6%B6%89%E9%BB%84AI%E8%BD%AF%E4%BB%B6%23) `130.5K 🔥` `NEW`
1. [楚乔传 冰湖重生](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E4%B9%94%E4%BC%A0%20%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%23) `129.3K 🔥` `NEW`
1. [钟南山妻子正式进入篮球名人堂](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E5%A6%BB%E5%AD%90%E6%AD%A3%E5%BC%8F%E8%BF%9B%E5%85%A5%E7%AF%AE%E7%90%83%E5%90%8D%E4%BA%BA%E5%A0%82%23) `763.2K 🔥` `+669%`
1. [智美大五座风云T9L全球上市 (Chimei's five-seater Fengyun T9L is launched globally)](https://s.weibo.com/weibo?q=%23%E6%99%BA%E7%BE%8E%E5%A4%A7%E4%BA%94%E5%BA%A7%E9%A3%8E%E4%BA%91T9L%E5%85%A8%E7%90%83%E4%B8%8A%E5%B8%82%23) `315.0K 🔥` `+180%`
1. [kimi都这么大了 (Kimi is already so old)](https://s.weibo.com/weibo?q=%23kimi%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `147.2K 🔥` `+31%`
1. [陈赫 短剧](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%20%E7%9F%AD%E5%89%A7%23) `140.9K 🔥` `+27%`
1. [白鹿打方向盘 老公姐](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%89%93%E6%96%B9%E5%90%91%E7%9B%98%20%E8%80%81%E5%85%AC%E5%A7%90%23) `131.7K 🔥` `+23%`
1. [李小冉 北舞已经是上个世纪的事了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E5%8C%97%E8%88%9E%E5%B7%B2%E7%BB%8F%E6%98%AF%E4%B8%8A%E4%B8%AA%E4%B8%96%E7%BA%AA%E7%9A%84%E4%BA%8B%E4%BA%86%23) `319.8K 🔥` `-57%`
1. [车上放香皂](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%B8%8A%E6%94%BE%E9%A6%99%E7%9A%82%23) `200.6K 🔥` `-51%`
1. [逐玉庆功宴 (Jade Celebration Banquet)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `154.8K 🔥` `-85%`
1. [Angelababy郑恺陈赫李晨合影](https://s.weibo.com/weibo?q=%23Angelababy%E9%83%91%E6%81%BA%E9%99%88%E8%B5%AB%E6%9D%8E%E6%99%A8%E5%90%88%E5%BD%B1%23) `151.6K 🔥` `-36%`
1. [文章上海面馆价格 (Article Shanghai noodle restaurant prices)](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%AB%A0%E4%B8%8A%E6%B5%B7%E9%9D%A2%E9%A6%86%E4%BB%B7%E6%A0%BC%23) `151.4K 🔥` `-35%`
1. [杨瀚森NBA首个赛季数据](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AENBA%E9%A6%96%E4%B8%AA%E8%B5%9B%E5%AD%A3%E6%95%B0%E6%8D%AE%23) `149.0K 🔥` `-38%`
1. [华为PuraXMax](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXMax%23) `148.4K 🔥` `-29%`
1. [官俊臣 成绩](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%20%E6%88%90%E7%BB%A9%23) `145.1K 🔥` `-38%`
1. [产妇遭医院擅自二次开腹致女儿脑瘫](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E5%A6%87%E9%81%AD%E5%8C%BB%E9%99%A2%E6%93%85%E8%87%AA%E4%BA%8C%E6%AC%A1%E5%BC%80%E8%85%B9%E8%87%B4%E5%A5%B3%E5%84%BF%E8%84%91%E7%98%AB%23) `144.6K 🔥` `-37%`
1. [BIGBANG科切拉 (BIGBANG Coachella)](https://s.weibo.com/weibo?q=%23BIGBANG%E7%A7%91%E5%88%87%E6%8B%89%23) `142.4K 🔥` `-61%`
1. [徐洁儿一公倒数第一 (Xu Jieer is ranked last)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E4%B8%80%E5%85%AC%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%23) `139.9K 🔥` `-34%`
1. [时代少年团高会官宣演唱会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E9%AB%98%E4%BC%9A%E5%AE%98%E5%AE%A3%E6%BC%94%E5%94%B1%E4%BC%9A%23) `138.6K 🔥` `-31%`
1. [巩立姣已减重40斤](https://s.weibo.com/weibo?q=%23%E5%B7%A9%E7%AB%8B%E5%A7%A3%E5%B7%B2%E5%87%8F%E9%87%8D40%E6%96%A4%23) `136.0K 🔥` `-37%`
1. [艾米艺考北电第三](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E8%89%BA%E8%80%83%E5%8C%97%E7%94%B5%E7%AC%AC%E4%B8%89%23) `134.3K 🔥` `-35%`
1. [中1500万彩票离职事件是真是假 (Is the resignation incident of the 15 million lottery winner true or false?)](https://s.weibo.com/weibo?q=%23%E4%B8%AD1500%E4%B8%87%E5%BD%A9%E7%A5%A8%E7%A6%BB%E8%81%8C%E4%BA%8B%E4%BB%B6%E6%98%AF%E7%9C%9F%E6%98%AF%E5%81%87%23) `133.5K 🔥` `-83%`
1. [厕所前面的头为什么不见了](https://s.weibo.com/weibo?q=%23%E5%8E%95%E6%89%80%E5%89%8D%E9%9D%A2%E7%9A%84%E5%A4%B4%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%A7%81%E4%BA%86%23) `129.3K 🔥` `-45%`
1. [北电出成绩](https://s.weibo.com/weibo?q=%23%E5%8C%97%E7%94%B5%E5%87%BA%E6%88%90%E7%BB%A9%23) `128.0K 🔥` `-47%`

Updated at 2026-04-13 16:33:09

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
