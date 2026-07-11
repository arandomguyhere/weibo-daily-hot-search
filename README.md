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

1. [台风来袭科学避险完整指南 (A complete guide to scientific risk avoidance when a typhoon hits)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E6%9D%A5%E8%A2%AD%E7%A7%91%E5%AD%A6%E9%81%BF%E9%99%A9%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%23) `1.7M 🔥` `NEW`
1. [桃黑黑直播回应](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E7%9B%B4%E6%92%AD%E5%9B%9E%E5%BA%94%23) `1.4M 🔥` `NEW`
1. [海水倒灌](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B0%B4%E5%80%92%E7%81%8C%23) `987.2K 🔥` `NEW`
1. [南非25岁世界杯参赛球员去世](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%9D%9E25%E5%B2%81%E4%B8%96%E7%95%8C%E6%9D%AF%E5%8F%82%E8%B5%9B%E7%90%83%E5%91%98%E5%8E%BB%E4%B8%96%23) `947.1K 🔥` `NEW`
1. [你好星期六](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `491.0K 🔥` `NEW`
1. [上海天空](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A4%A9%E7%A9%BA%23) `486.3K 🔥` `NEW`
1. [TF四代考核人气分](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E8%80%83%E6%A0%B8%E4%BA%BA%E6%B0%94%E5%88%86%23) `476.9K 🔥` `NEW`
1. [美国防部曝迄今最清晰UFO影像](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%98%B2%E9%83%A8%E6%9B%9D%E8%BF%84%E4%BB%8A%E6%9C%80%E6%B8%85%E6%99%B0UFO%E5%BD%B1%E5%83%8F%23) `473.5K 🔥` `NEW`
1. [杭州地铁停运](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%9C%B0%E9%93%81%E5%81%9C%E8%BF%90%23) `465.5K 🔥` `NEW`
1. [南非国脚世界杯后自杀身亡](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%9D%9E%E5%9B%BD%E8%84%9A%E4%B8%96%E7%95%8C%E6%9D%AF%E5%90%8E%E8%87%AA%E6%9D%80%E8%BA%AB%E4%BA%A1%23) `464.4K 🔥` `NEW`
1. [周星驰说迪丽热巴付出了很多 (Stephen Chow said Dilireba has paid a lot)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E8%AF%B4%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BB%98%E5%87%BA%E4%BA%86%E5%BE%88%E5%A4%9A%23) `451.9K 🔥` `NEW`
1. [严浩翔说李斯丹妮vava伴奏不适合](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%AF%B4%E6%9D%8E%E6%96%AF%E4%B8%B9%E5%A6%AEvava%E4%BC%B4%E5%A5%8F%E4%B8%8D%E9%80%82%E5%90%88%23) `450.1K 🔥` `NEW`
1. [台风巴威将经过江苏](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%B0%86%E7%BB%8F%E8%BF%87%E6%B1%9F%E8%8B%8F%23) `442.4K 🔥` `NEW`
1. [章若楠直播摘假发片](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%9B%B4%E6%92%AD%E6%91%98%E5%81%87%E5%8F%91%E7%89%87%23) `441.7K 🔥` `NEW`
1. [大学生不要赚太辛苦的钱](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E4%B8%8D%E8%A6%81%E8%B5%9A%E5%A4%AA%E8%BE%9B%E8%8B%A6%E7%9A%84%E9%92%B1%23) `433.8K 🔥` `NEW`
1. [前台笑了半天才决定给顾客解释](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%8F%B0%E7%AC%91%E4%BA%86%E5%8D%8A%E5%A4%A9%E6%89%8D%E5%86%B3%E5%AE%9A%E7%BB%99%E9%A1%BE%E5%AE%A2%E8%A7%A3%E9%87%8A%23) `431.2K 🔥` `NEW`
1. [发现川渝人吃的都是重油重辣](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%B7%9D%E6%B8%9D%E4%BA%BA%E5%90%83%E7%9A%84%E9%83%BD%E6%98%AF%E9%87%8D%E6%B2%B9%E9%87%8D%E8%BE%A3%23) `423.9K 🔥` `NEW`
1. [邹市明老人味](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E8%80%81%E4%BA%BA%E5%91%B3%23) `423.4K 🔥` `NEW`
1. [功夫女足开分9.4](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E5%BC%80%E5%88%869.4%23) `419.7K 🔥` `NEW`
1. [张远北京演唱会上座率](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E5%8C%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `417.2K 🔥` `NEW`
1. [中国女排vs多米尼加女排 (Chinese Women's Volleyball Team vs Dominican Women's Volleyball Team)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92vs%E5%A4%9A%E7%B1%B3%E5%B0%BC%E5%8A%A0%E5%A5%B3%E6%8E%92%23) `415.6K 🔥` `NEW`
1. [穆祉丞怎么办你们是不是要负责](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%80%8E%E4%B9%88%E5%8A%9E%E4%BD%A0%E4%BB%AC%E6%98%AF%E4%B8%8D%E6%98%AF%E8%A6%81%E8%B4%9F%E8%B4%A3%23) `412.8K 🔥` `NEW`
1. [英格兰夺冠需打破世界杯铁律](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E5%A4%BA%E5%86%A0%E9%9C%80%E6%89%93%E7%A0%B4%E4%B8%96%E7%95%8C%E6%9D%AF%E9%93%81%E5%BE%8B%23) `410.2K 🔥` `NEW`
1. [沐言误喝过期六个月的药](https://s.weibo.com/weibo?q=%23%E6%B2%90%E8%A8%80%E8%AF%AF%E5%96%9D%E8%BF%87%E6%9C%9F%E5%85%AD%E4%B8%AA%E6%9C%88%E7%9A%84%E8%8D%AF%23) `409.0K 🔥` `NEW`
1. [HLE晋级MSI决赛](https://s.weibo.com/weibo?q=%23HLE%E6%99%8B%E7%BA%A7MSI%E5%86%B3%E8%B5%9B%23) `402.3K 🔥` `NEW`
1. [上海台风 (Shanghai Typhoon)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%8F%B0%E9%A3%8E%23) `3.8M 🔥` `+55%`
1. [启境GT7提车即享华为乾崑ADS5 (Qijing GT7 can enjoy Huawei Qiankun ADS5 when you pick up the car.)](https://s.weibo.com/weibo?q=%23%E5%90%AF%E5%A2%83GT7%E6%8F%90%E8%BD%A6%E5%8D%B3%E4%BA%AB%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91ADS5%23) `1.7M 🔥` `+79%`
1. [当我问我妈不结婚可以吗 (When I asked my mother if it was okay not to get married)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E9%97%AE%E6%88%91%E5%A6%88%E4%B8%8D%E7%BB%93%E5%A9%9A%E5%8F%AF%E4%BB%A5%E5%90%97%23) `1.7M 🔥` `+408%`
1. [台风巴威1小时走30到50公里](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%811%E5%B0%8F%E6%97%B6%E8%B5%B030%E5%88%B050%E5%85%AC%E9%87%8C%23) `908.4K 🔥` `+185%`
1. [功夫女足票房已破2亿](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%E5%B7%B2%E7%A0%B42%E4%BA%BF%23) `494.2K 🔥` `+46%`
1. [迪丽热巴工作室发的live图](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E7%9A%84live%E5%9B%BE%23) `487.9K 🔥` `+57%`
1. [周星驰官宣星女郎雪野](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%AE%98%E5%AE%A3%E6%98%9F%E5%A5%B3%E9%83%8E%E9%9B%AA%E9%87%8E%23) `482.2K 🔥` `+34%`
1. [段奥娟这么瘦了](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E5%A5%A5%E5%A8%9F%E8%BF%99%E4%B9%88%E7%98%A6%E4%BA%86%23) `481.6K 🔥` `+37%`
1. [小米澎程起售价预测 (Xiaomi Pengcheng starting price forecast)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E8%B5%B7%E5%94%AE%E4%BB%B7%E9%A2%84%E6%B5%8B%23) `470.7K 🔥` `+30%`
1. [巴威登陆时间地点](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E6%97%B6%E9%97%B4%E5%9C%B0%E7%82%B9%23) `462.6K 🔥` `+50%`
1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `459.0K 🔥` `+29%`
1. [发现中指的握笔茧消失了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E4%B8%AD%E6%8C%87%E7%9A%84%E6%8F%A1%E7%AC%94%E8%8C%A7%E6%B6%88%E5%A4%B1%E4%BA%86%23) `457.2K 🔥` `+30%`
1. [巴威 (Bawe)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%23) `454.4K 🔥` `+30%`
1. [哈兰德外网最火恶搞视频](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A4%96%E7%BD%91%E6%9C%80%E7%81%AB%E6%81%B6%E6%90%9E%E8%A7%86%E9%A2%91%23) `448.3K 🔥` `+30%`
1. [Jennie神图诞生了](https://s.weibo.com/weibo?q=%23Jennie%E7%A5%9E%E5%9B%BE%E8%AF%9E%E7%94%9F%E4%BA%86%23) `446.4K 🔥` `+25%`
1. [杭州告全体市民书](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%91%8A%E5%85%A8%E4%BD%93%E5%B8%82%E6%B0%91%E4%B9%A6%23) `436.4K 🔥` `+39%`
1. [孟子义干什么都不忘章若楠](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B9%B2%E4%BB%80%E4%B9%88%E9%83%BD%E4%B8%8D%E5%BF%98%E7%AB%A0%E8%8B%A5%E6%A5%A0%23) `427.7K 🔥` `+27%`
1. [无人机吊起2人神图系AI合成 (AI synthesis of two people hoisted by a drone)](https://s.weibo.com/weibo?q=%23%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%90%8A%E8%B5%B72%E4%BA%BA%E7%A5%9E%E5%9B%BE%E7%B3%BBAI%E5%90%88%E6%88%90%23) `407.5K 🔥` `+35%`
1. [朝鲜通报腐败犯罪](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E9%80%9A%E6%8A%A5%E8%85%90%E8%B4%A5%E7%8A%AF%E7%BD%AA%23) `404.7K 🔥` `+34%`
1. [雀骨热度](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%E7%83%AD%E5%BA%A6%23) `398.5K 🔥` `+24%`
1. [日媒拆台日本火箭只飞了11米 (Japanese media debunked the Japanese rocket that only flew 11 meters)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E6%8B%86%E5%8F%B0%E6%97%A5%E6%9C%AC%E7%81%AB%E7%AE%AD%E5%8F%AA%E9%A3%9E%E4%BA%8611%E7%B1%B3%23) `469.5K 🔥`
1. [张小斐演技](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E6%BC%94%E6%8A%80%23) `430.4K 🔥`
1. [巴威最新位置 (Bawe latest location)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E6%9C%80%E6%96%B0%E4%BD%8D%E7%BD%AE%23) `1.8M 🔥` `-49%`
1. [杭州 台风](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%20%E5%8F%B0%E9%A3%8E%23) `490.6K 🔥` `-63%`
1. [长沙市体育局干部彭某某被停职](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E5%B8%82%E4%BD%93%E8%82%B2%E5%B1%80%E5%B9%B2%E9%83%A8%E5%BD%AD%E6%9F%90%E6%9F%90%E8%A2%AB%E5%81%9C%E8%81%8C%23) `479.0K 🔥` `-76%`
1. [上海已转移3.4万人](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%B7%B2%E8%BD%AC%E7%A7%BB3.4%E4%B8%87%E4%BA%BA%23) `438.3K 🔥` `-28%`

Updated at 2026-07-11 21:51:40

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
