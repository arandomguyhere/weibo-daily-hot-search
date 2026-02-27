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

1. [关注2026全国两会 (Pay attention to the 2026 National Two Sessions)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%B3%A82026%E5%85%A8%E5%9B%BD%E4%B8%A4%E4%BC%9A%23) `803.4K 🔥` `NEW`
1. [美国双航母已就位](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8F%8C%E8%88%AA%E6%AF%8D%E5%B7%B2%E5%B0%B1%E4%BD%8D%23) `268.8K 🔥` `NEW`
1. [中国驻以色列使馆紧急通知](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A9%BB%E4%BB%A5%E8%89%B2%E5%88%97%E4%BD%BF%E9%A6%86%E7%B4%A7%E6%80%A5%E9%80%9A%E7%9F%A5%23) `258.5K 🔥` `NEW`
1. [美国 伊朗](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%20%E4%BC%8A%E6%9C%97%23) `218.5K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `217.8K 🔥` `NEW`
1. [奥黛丽厚本正完骨变薄本了](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E9%BB%9B%E4%B8%BD%E5%8E%9A%E6%9C%AC%E6%AD%A3%E5%AE%8C%E9%AA%A8%E5%8F%98%E8%96%84%E6%9C%AC%E4%BA%86%23) `217.0K 🔥` `NEW`
1. [生5胞胎爹妈一次要剪100个指甲](https://s.weibo.com/weibo?q=%23%E7%94%9F5%E8%83%9E%E8%83%8E%E7%88%B9%E5%A6%88%E4%B8%80%E6%AC%A1%E8%A6%81%E5%89%AA100%E4%B8%AA%E6%8C%87%E7%94%B2%23) `212.8K 🔥` `NEW`
1. [虎跳峡男游客疑因洗杯落水失联](https://s.weibo.com/weibo?q=%23%E8%99%8E%E8%B7%B3%E5%B3%A1%E7%94%B7%E6%B8%B8%E5%AE%A2%E7%96%91%E5%9B%A0%E6%B4%97%E6%9D%AF%E8%90%BD%E6%B0%B4%E5%A4%B1%E8%81%94%23) `212.0K 🔥` `NEW`
1. [伊军方将对美侵略予以毁灭性回应](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%86%9B%E6%96%B9%E5%B0%86%E5%AF%B9%E7%BE%8E%E4%BE%B5%E7%95%A5%E4%BA%88%E4%BB%A5%E6%AF%81%E7%81%AD%E6%80%A7%E5%9B%9E%E5%BA%94%23) `161.1K 🔥` `NEW`
1. [WB对战TTG](https://s.weibo.com/weibo?q=%23WB%E5%AF%B9%E6%88%98TTG%23) `140.5K 🔥` `NEW`
1. [穆祉丞左中右自拍 (Mu Zhicheng’s left, middle and right selfie)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%B7%A6%E4%B8%AD%E5%8F%B3%E8%87%AA%E6%8B%8D%23) `123.5K 🔥` `NEW`
1. [最强大脑](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%BC%BA%E5%A4%A7%E8%84%91%23) `91.9K 🔥` `NEW`
1. [员工开40万奔驰老板开8000元普桑](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E5%BC%8040%E4%B8%87%E5%A5%94%E9%A9%B0%E8%80%81%E6%9D%BF%E5%BC%808000%E5%85%83%E6%99%AE%E6%A1%91%23) `83.9K 🔥` `NEW`
1. [Gucci直播](https://s.weibo.com/weibo?q=%23Gucci%E7%9B%B4%E6%92%AD%23) `795.8K 🔥` `+26%`
1. [Prada晚宴上的谷爱凌](https://s.weibo.com/weibo?q=%23Prada%E6%99%9A%E5%AE%B4%E4%B8%8A%E7%9A%84%E8%B0%B7%E7%88%B1%E5%87%8C%23) `215.0K 🔥` `+32%`
1. [提醒在伊朗的中国公民尽快撤离 (Chinese citizens in Iran are reminded to evacuate as soon as possible)](https://s.weibo.com/weibo?q=%23%E6%8F%90%E9%86%92%E5%9C%A8%E4%BC%8A%E6%9C%97%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E5%B0%BD%E5%BF%AB%E6%92%A4%E7%A6%BB%23) `1.2M 🔥`
1. [草莓价格跌至1元一斤 (Strawberry price drops to 1 yuan per pound)](https://s.weibo.com/weibo?q=%23%E8%8D%89%E8%8E%93%E4%BB%B7%E6%A0%BC%E8%B7%8C%E8%87%B31%E5%85%83%E4%B8%80%E6%96%A4%23) `824.1K 🔥`
1. [纯真年代的爱情](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `285.2K 🔥`
1. [杨洋发文回应不让江山争议](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%E4%BA%89%E8%AE%AE%23) `217.2K 🔥`
1. [以色列](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%23) `216.3K 🔥`
1. [无限期退出娱乐圈除非有商务](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%99%90%E6%9C%9F%E9%80%80%E5%87%BA%E5%A8%B1%E4%B9%90%E5%9C%88%E9%99%A4%E9%9D%9E%E6%9C%89%E5%95%86%E5%8A%A1%23) `215.5K 🔥`
1. [宁艺卓美趋第一 (Ning Yi Zhuo’s Beauty Trend is No. 1)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E7%BE%8E%E8%B6%8B%E7%AC%AC%E4%B8%80%23) `209.1K 🔥`
1. [种地吧](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `159.9K 🔥`
1. [镖人 (escort)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `158.6K 🔥`
1. [宁艺卓蛇纹皮衣](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E8%9B%87%E7%BA%B9%E7%9A%AE%E8%A1%A3%23) `134.6K 🔥`
1. [朱志鑫直播](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E7%9B%B4%E6%92%AD%23) `123.7K 🔥`
1. [六旬老太用花洒灌肠通便直肠破裂](https://s.weibo.com/weibo?q=%23%E5%85%AD%E6%97%AC%E8%80%81%E5%A4%AA%E7%94%A8%E8%8A%B1%E6%B4%92%E7%81%8C%E8%82%A0%E9%80%9A%E4%BE%BF%E7%9B%B4%E8%82%A0%E7%A0%B4%E8%A3%82%23) `122.9K 🔥`
1. [养过小孩的才知道他有多会教](https://s.weibo.com/weibo?q=%23%E5%85%BB%E8%BF%87%E5%B0%8F%E5%AD%A9%E7%9A%84%E6%89%8D%E7%9F%A5%E9%81%93%E4%BB%96%E6%9C%89%E5%A4%9A%E4%BC%9A%E6%95%99%23) `110.9K 🔥`
1. [下一个是谁 (who is next)](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E4%B8%80%E4%B8%AA%E6%98%AF%E8%B0%81%23) `106.1K 🔥`
1. [汪苏泷演唱会](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9A%23) `105.6K 🔥`
1. [中国地图软件在外网火了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9C%B0%E5%9B%BE%E8%BD%AF%E4%BB%B6%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86%23) `95.7K 🔥`
1. [弟弟凭一双手死死拦住迎亲队伍](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E5%87%AD%E4%B8%80%E5%8F%8C%E6%89%8B%E6%AD%BB%E6%AD%BB%E6%8B%A6%E4%BD%8F%E8%BF%8E%E4%BA%B2%E9%98%9F%E4%BC%8D%23) `84.9K 🔥`
1. [见春天 陈飞宇王影璐 (See Spring Chen Feiyu Wang Yinglu)](https://s.weibo.com/weibo?q=%23%E8%A7%81%E6%98%A5%E5%A4%A9%20%E9%99%88%E9%A3%9E%E5%AE%87%E7%8E%8B%E5%BD%B1%E7%92%90%23) `83.5K 🔥`
1. [00后员工年薪80万是老板的6倍](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%91%98%E5%B7%A5%E5%B9%B4%E8%96%AA80%E4%B8%87%E6%98%AF%E8%80%81%E6%9D%BF%E7%9A%846%E5%80%8D%23) `271.2K 🔥` `-29%`
1. [退房的时候前台拿了个徐福记的糖纸 (When checking out, the front desk took a candy wrapper from Hsu Fu Chi.)](https://s.weibo.com/weibo?q=%23%E9%80%80%E6%88%BF%E7%9A%84%E6%97%B6%E5%80%99%E5%89%8D%E5%8F%B0%E6%8B%BF%E4%BA%86%E4%B8%AA%E5%BE%90%E7%A6%8F%E8%AE%B0%E7%9A%84%E7%B3%96%E7%BA%B8%23) `219.2K 🔥` `-29%`
1. [RW 选错英雄](https://s.weibo.com/weibo?q=%23RW%20%E9%80%89%E9%94%99%E8%8B%B1%E9%9B%84%23) `218.7K 🔥` `-39%`
1. [伊朗 (Iran)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%23) `204.2K 🔥` `-21%`
1. [杨洋的手好肿](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E7%9A%84%E6%89%8B%E5%A5%BD%E8%82%BF%23) `202.0K 🔥` `-21%`
1. [代孕子女落户争议](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E5%AD%95%E5%AD%90%E5%A5%B3%E8%90%BD%E6%88%B7%E4%BA%89%E8%AE%AE%23) `201.3K 🔥` `-21%`
1. [白敬亭章若楠 二搭 (Bai Jingting, Zhang Ruonan, Er Da)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E7%AB%A0%E8%8B%A5%E6%A5%A0%20%E4%BA%8C%E6%90%AD%23) `170.2K 🔥` `-34%`
1. [林俊杰回复张凌赫](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%9B%9E%E5%A4%8D%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `136.2K 🔥` `-50%`
1. [妈妈在女儿婚礼上美出圈](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9C%A8%E5%A5%B3%E5%84%BF%E5%A9%9A%E7%A4%BC%E4%B8%8A%E7%BE%8E%E5%87%BA%E5%9C%88%23) `123.9K 🔥` `-26%`
1. [于适吃盖浇饭庆祝镖人破10亿](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E9%80%82%E5%90%83%E7%9B%96%E6%B5%87%E9%A5%AD%E5%BA%86%E7%A5%9D%E9%95%96%E4%BA%BA%E7%A0%B410%E4%BA%BF%23) `109.4K 🔥` `-41%`
1. [官方通报母子坠入水坑溺亡](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%AF%8D%E5%AD%90%E5%9D%A0%E5%85%A5%E6%B0%B4%E5%9D%91%E6%BA%BA%E4%BA%A1%23) `108.1K 🔥` `-27%`
1. [梦溪选错英雄](https://s.weibo.com/weibo?q=%23%E6%A2%A6%E6%BA%AA%E9%80%89%E9%94%99%E8%8B%B1%E9%9B%84%23) `105.8K 🔥` `-43%`
1. [李胜利的狱友repo (Li Shengli’s inmate repo)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%83%9C%E5%88%A9%E7%9A%84%E7%8B%B1%E5%8F%8Brepo%23) `103.7K 🔥` `-39%`
1. [张本智和2比3弗朗西斯卡](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C2%E6%AF%943%E5%BC%97%E6%9C%97%E8%A5%BF%E6%96%AF%E5%8D%A1%23) `85.1K 🔥` `-53%`

Updated at 2026-02-27 22:07:37

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
