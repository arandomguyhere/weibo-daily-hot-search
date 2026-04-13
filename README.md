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

1. [中1500万彩票离职事件是真是假 (Is the resignation incident of the 15 million lottery winner true or false?)](https://s.weibo.com/weibo?q=%23%E4%B8%AD1500%E4%B8%87%E5%BD%A9%E7%A5%A8%E7%A6%BB%E8%81%8C%E4%BA%8B%E4%BB%B6%E6%98%AF%E7%9C%9F%E6%98%AF%E5%81%87%23) `777.8K 🔥` `NEW`
1. [BIGBANG科切拉](https://s.weibo.com/weibo?q=%23BIGBANG%E7%A7%91%E5%88%87%E6%8B%89%23) `364.4K 🔥` `NEW`
1. [鹤壁淇县浚县鹤山撤县设区为谣言](https://s.weibo.com/weibo?q=%23%E9%B9%A4%E5%A3%81%E6%B7%87%E5%8E%BF%E6%B5%9A%E5%8E%BF%E9%B9%A4%E5%B1%B1%E6%92%A4%E5%8E%BF%E8%AE%BE%E5%8C%BA%E4%B8%BA%E8%B0%A3%E8%A8%80%23) `334.8K 🔥` `NEW`
1. [北电出成绩](https://s.weibo.com/weibo?q=%23%E5%8C%97%E7%94%B5%E5%87%BA%E6%88%90%E7%BB%A9%23) `241.2K 🔥` `NEW`
1. [霍尔木兹海峡再次完全中断](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%86%8D%E6%AC%A1%E5%AE%8C%E5%85%A8%E4%B8%AD%E6%96%AD%23) `240.6K 🔥` `NEW`
1. [杨瀚森NBA首个赛季数据](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AENBA%E9%A6%96%E4%B8%AA%E8%B5%9B%E5%AD%A3%E6%95%B0%E6%8D%AE%23) `238.7K 🔥` `NEW`
1. [Angelababy郑恺陈赫李晨合影](https://s.weibo.com/weibo?q=%23Angelababy%E9%83%91%E6%81%BA%E9%99%88%E8%B5%AB%E6%9D%8E%E6%99%A8%E5%90%88%E5%BD%B1%23) `236.6K 🔥` `NEW`
1. [厕所前面的头为什么不见了](https://s.weibo.com/weibo?q=%23%E5%8E%95%E6%89%80%E5%89%8D%E9%9D%A2%E7%9A%84%E5%A4%B4%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%A7%81%E4%BA%86%23) `233.2K 🔥` `NEW`
1. [官俊臣 成绩](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%20%E6%88%90%E7%BB%A9%23) `232.7K 🔥` `NEW`
1. [巩立姣已减重40斤](https://s.weibo.com/weibo?q=%23%E5%B7%A9%E7%AB%8B%E5%A7%A3%E5%B7%B2%E5%87%8F%E9%87%8D40%E6%96%A4%23) `216.5K 🔥` `NEW`
1. [徐洁儿一公倒数第一 (Xu Jieer is ranked last)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E4%B8%80%E5%85%AC%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%23) `211.8K 🔥` `NEW`
1. [时代少年团高会官宣演唱会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E9%AB%98%E4%BC%9A%E5%AE%98%E5%AE%A3%E6%BC%94%E5%94%B1%E4%BC%9A%23) `201.4K 🔥` `NEW`
1. [刘雨鑫近30天涨粉78万](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%A8%E9%91%AB%E8%BF%9130%E5%A4%A9%E6%B6%A8%E7%B2%8978%E4%B8%87%23) `107.5K 🔥` `NEW`
1. [艾米姓陈](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E5%A7%93%E9%99%88%23) `107.3K 🔥` `NEW`
1. [白鹿打方向盘 老公姐](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%89%93%E6%96%B9%E5%90%91%E7%9B%98%20%E8%80%81%E5%85%AC%E5%A7%90%23) `107.2K 🔥` `NEW`
1. [以军坦克冲撞联合国维和人员车辆](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%9D%A6%E5%85%8B%E5%86%B2%E6%92%9E%E8%81%94%E5%90%88%E5%9B%BD%E7%BB%B4%E5%92%8C%E4%BA%BA%E5%91%98%E8%BD%A6%E8%BE%86%23) `101.3K 🔥` `NEW`
1. [赵丽颖工作室发沈璃](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E6%B2%88%E7%92%83%23) `99.5K 🔥` `NEW`
1. [钟南山妻子正式进入篮球名人堂](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E5%A6%BB%E5%AD%90%E6%AD%A3%E5%BC%8F%E8%BF%9B%E5%85%A5%E7%AF%AE%E7%90%83%E5%90%8D%E4%BA%BA%E5%A0%82%23) `99.2K 🔥` `NEW`
1. [香港最严控烟令对游客一视同仁](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%9C%80%E4%B8%A5%E6%8E%A7%E7%83%9F%E4%BB%A4%E5%AF%B9%E6%B8%B8%E5%AE%A2%E4%B8%80%E8%A7%86%E5%90%8C%E4%BB%81%23) `94.5K 🔥` `NEW`
1. [快递手感不对快递小哥果断报警](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E9%80%92%E6%89%8B%E6%84%9F%E4%B8%8D%E5%AF%B9%E5%BF%AB%E9%80%92%E5%B0%8F%E5%93%A5%E6%9E%9C%E6%96%AD%E6%8A%A5%E8%AD%A6%23) `93.4K 🔥` `NEW`
1. [科切拉 (Coachella)](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%88%87%E6%8B%89%23) `90.1K 🔥` `NEW`
1. [杨瀚森登场受全场欢呼](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E7%99%BB%E5%9C%BA%E5%8F%97%E5%85%A8%E5%9C%BA%E6%AC%A2%E5%91%BC%23) `89.2K 🔥` `NEW`
1. [露芜衣心脏是雾妄言的](https://s.weibo.com/weibo?q=%23%E9%9C%B2%E8%8A%9C%E8%A1%A3%E5%BF%83%E8%84%8F%E6%98%AF%E9%9B%BE%E5%A6%84%E8%A8%80%E7%9A%84%23) `88.4K 🔥` `NEW`
1. [原来大家都是这样撑过低谷期的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E6%92%91%E8%BF%87%E4%BD%8E%E8%B0%B7%E6%9C%9F%E7%9A%84%23) `82.8K 🔥` `NEW`
1. [莫氏鸡煲老板爆火前的佛系人生](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E7%88%86%E7%81%AB%E5%89%8D%E7%9A%84%E4%BD%9B%E7%B3%BB%E4%BA%BA%E7%94%9F%23) `81.7K 🔥` `NEW`
1. [鹿晗工作室预告](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%B7%A5%E4%BD%9C%E5%AE%A4%E9%A2%84%E5%91%8A%23) `81.5K 🔥` `NEW`
1. [场子姐告小三道歉案二审开庭](https://s.weibo.com/weibo?q=%23%E5%9C%BA%E5%AD%90%E5%A7%90%E5%91%8A%E5%B0%8F%E4%B8%89%E9%81%93%E6%AD%89%E6%A1%88%E4%BA%8C%E5%AE%A1%E5%BC%80%E5%BA%AD%23) `79.3K 🔥` `NEW`
1. [刷牙出血是掉牙的早期信号](https://s.weibo.com/weibo?q=%23%E5%88%B7%E7%89%99%E5%87%BA%E8%A1%80%E6%98%AF%E6%8E%89%E7%89%99%E7%9A%84%E6%97%A9%E6%9C%9F%E4%BF%A1%E5%8F%B7%23) `78.7K 🔥` `NEW`
1. [今天的快乐被粉色海豚承包了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E7%9A%84%E5%BF%AB%E4%B9%90%E8%A2%AB%E7%B2%89%E8%89%B2%E6%B5%B7%E8%B1%9A%E6%89%BF%E5%8C%85%E4%BA%86%23) `76.1K 🔥` `NEW`
1. [陶喆看到天津盘头笑成这样](https://s.weibo.com/weibo?q=%23%E9%99%B6%E5%96%86%E7%9C%8B%E5%88%B0%E5%A4%A9%E6%B4%A5%E7%9B%98%E5%A4%B4%E7%AC%91%E6%88%90%E8%BF%99%E6%A0%B7%23) `75.5K 🔥` `NEW`
1. [男孩被私拴绳子锁喉已筹款48万元 (A boy who was tied up with a rope and choked in private has raised NT$480,000)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E8%A2%AB%E7%A7%81%E6%8B%B4%E7%BB%B3%E5%AD%90%E9%94%81%E5%96%89%E5%B7%B2%E7%AD%B9%E6%AC%BE48%E4%B8%87%E5%85%83%23) `73.7K 🔥` `NEW`
1. [A股首位年薪破千万财务掌门人](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%A6%96%E4%BD%8D%E5%B9%B4%E8%96%AA%E7%A0%B4%E5%8D%83%E4%B8%87%E8%B4%A2%E5%8A%A1%E6%8E%8C%E9%97%A8%E4%BA%BA%23) `72.9K 🔥` `NEW`
1. [张雪离开凯越机车辞职信曝光](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E7%A6%BB%E5%BC%80%E5%87%AF%E8%B6%8A%E6%9C%BA%E8%BD%A6%E8%BE%9E%E8%81%8C%E4%BF%A1%E6%9B%9D%E5%85%89%23) `70.3K 🔥` `NEW`
1. [车上放香皂](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%B8%8A%E6%94%BE%E9%A6%99%E7%9A%82%23) `411.7K 🔥` `+201%`
1. [乌兰被双开](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%B0%E8%A2%AB%E5%8F%8C%E5%BC%80%23) `237.3K 🔥` `+24%`
1. [逐玉庆功宴 (Jade Celebration Banquet)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `1.1M 🔥`
1. [中国经济开门红成色十足](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%BC%80%E9%97%A8%E7%BA%A2%E6%88%90%E8%89%B2%E5%8D%81%E8%B6%B3%23) `739.4K 🔥`
1. [李小冉 北舞已经是上个世纪的事了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E5%8C%97%E8%88%9E%E5%B7%B2%E7%BB%8F%E6%98%AF%E4%B8%8A%E4%B8%AA%E4%B8%96%E7%BA%AA%E7%9A%84%E4%BA%8B%E4%BA%86%23) `737.4K 🔥`
1. [文章上海面馆价格 (Article Shanghai noodle restaurant prices)](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%AB%A0%E4%B8%8A%E6%B5%B7%E9%9D%A2%E9%A6%86%E4%BB%B7%E6%A0%BC%23) `234.4K 🔥`
1. [产妇遭医院擅自二次开腹致女儿脑瘫](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E5%A6%87%E9%81%AD%E5%8C%BB%E9%99%A2%E6%93%85%E8%87%AA%E4%BA%8C%E6%AC%A1%E5%BC%80%E8%85%B9%E8%87%B4%E5%A5%B3%E5%84%BF%E8%84%91%E7%98%AB%23) `231.3K 🔥`
1. [华为PuraXMax](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXMax%23) `208.2K 🔥`
1. [艾米艺考北电第三](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E8%89%BA%E8%80%83%E5%8C%97%E7%94%B5%E7%AC%AC%E4%B8%89%23) `208.0K 🔥`
1. [甜馨回应给贾乃亮做蛋糕 (Tianxin responded by making a cake for Jia Nailiang)](https://s.weibo.com/weibo?q=%23%E7%94%9C%E9%A6%A8%E5%9B%9E%E5%BA%94%E7%BB%99%E8%B4%BE%E4%B9%83%E4%BA%AE%E5%81%9A%E8%9B%8B%E7%B3%95%23) `105.1K 🔥`
1. [女子单独坐过夜火车被乘警拉进群](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8D%95%E7%8B%AC%E5%9D%90%E8%BF%87%E5%A4%9C%E7%81%AB%E8%BD%A6%E8%A2%AB%E4%B9%98%E8%AD%A6%E6%8B%89%E8%BF%9B%E7%BE%A4%23) `112.7K 🔥` `-85%`
1. [kimi都这么大了 (Kimi is already so old)](https://s.weibo.com/weibo?q=%23kimi%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `112.5K 🔥` `-41%`
1. [陈赫 短剧](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%20%E7%9F%AD%E5%89%A7%23) `110.5K 🔥` `-84%`
1. [61岁男子手术后在飞机上身亡](https://s.weibo.com/weibo?q=%2361%E5%B2%81%E7%94%B7%E5%AD%90%E6%89%8B%E6%9C%AF%E5%90%8E%E5%9C%A8%E9%A3%9E%E6%9C%BA%E4%B8%8A%E8%BA%AB%E4%BA%A1%23) `106.8K 🔥` `-46%`
1. [太急是一种很强的负能量](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E6%80%A5%E6%98%AF%E4%B8%80%E7%A7%8D%E5%BE%88%E5%BC%BA%E7%9A%84%E8%B4%9F%E8%83%BD%E9%87%8F%23) `96.8K 🔥` `-23%`
1. [灯花笑 田曦薇](https://s.weibo.com/weibo?q=%23%E7%81%AF%E8%8A%B1%E7%AC%91%20%E7%94%B0%E6%9B%A6%E8%96%87%23) `89.8K 🔥` `-55%`
1. [霍思燕最争气的是她自己](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E6%80%9D%E7%87%95%E6%9C%80%E4%BA%89%E6%B0%94%E7%9A%84%E6%98%AF%E5%A5%B9%E8%87%AA%E5%B7%B1%23) `76.2K 🔥` `-62%`
1. [孙红雷刘宇宁王玉雯主演铁证](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E5%88%98%E5%AE%87%E5%AE%81%E7%8E%8B%E7%8E%89%E9%9B%AF%E4%B8%BB%E6%BC%94%E9%93%81%E8%AF%81%23) `71.7K 🔥` `-53%`

Updated at 2026-04-13 14:33:14

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
