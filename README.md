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

1. [洪灾已致广西39死9失联 (Floods have killed 39 in Guangxi and left 9 missing)](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E7%81%BE%E5%B7%B2%E8%87%B4%E5%B9%BF%E8%A5%BF39%E6%AD%BB9%E5%A4%B1%E8%81%94%23) `4.1M 🔥` `NEW`
1. [台风巴威到哪了](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%88%B0%E5%93%AA%E4%BA%86%23) `1.2M 🔥` `NEW`
1. [9部门支持加快零售业创新发展](https://s.weibo.com/weibo?q=%239%E9%83%A8%E9%97%A8%E6%94%AF%E6%8C%81%E5%8A%A0%E5%BF%AB%E9%9B%B6%E5%94%AE%E4%B8%9A%E5%88%9B%E6%96%B0%E5%8F%91%E5%B1%95%23) `918.4K 🔥` `NEW`
1. [SkyNomad小米澎程](https://s.weibo.com/weibo?q=%23SkyNomad%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%23) `844.1K 🔥` `NEW`
1. [一个电话就能解决的事逼人走投无路](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E7%94%B5%E8%AF%9D%E5%B0%B1%E8%83%BD%E8%A7%A3%E5%86%B3%E7%9A%84%E4%BA%8B%E9%80%BC%E4%BA%BA%E8%B5%B0%E6%8A%95%E6%97%A0%E8%B7%AF%23) `775.6K 🔥` `NEW`
1. [阿根廷 裁判](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E8%A3%81%E5%88%A4%23) `746.9K 🔥` `NEW`
1. [李昀锐没给孟子义百花杀包场](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E6%B2%A1%E7%BB%99%E5%AD%9F%E5%AD%90%E4%B9%89%E7%99%BE%E8%8A%B1%E6%9D%80%E5%8C%85%E5%9C%BA%23) `614.0K 🔥` `NEW`
1. [黄俊捷一款野草型少年](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BF%8A%E6%8D%B7%E4%B8%80%E6%AC%BE%E9%87%8E%E8%8D%89%E5%9E%8B%E5%B0%91%E5%B9%B4%23) `612.8K 🔥` `NEW`
1. [花呗致歉](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%91%97%E8%87%B4%E6%AD%89%23) `598.7K 🔥` `NEW`
1. [晚上七点睡着最绝望](https://s.weibo.com/weibo?q=%23%E6%99%9A%E4%B8%8A%E4%B8%83%E7%82%B9%E7%9D%A1%E7%9D%80%E6%9C%80%E7%BB%9D%E6%9C%9B%23) `589.0K 🔥` `NEW`
1. [杨洋宣传百花杀 (Yang Yang promotes Hundred Flowers Killing)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%AE%A3%E4%BC%A0%E7%99%BE%E8%8A%B1%E6%9D%80%23) `377.6K 🔥` `NEW`
1. [九门](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%23) `376.8K 🔥` `NEW`
1. [三岁女儿看见天上的送子船](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%B2%81%E5%A5%B3%E5%84%BF%E7%9C%8B%E8%A7%81%E5%A4%A9%E4%B8%8A%E7%9A%84%E9%80%81%E5%AD%90%E8%88%B9%23) `376.4K 🔥` `NEW`
1. [薛小婉任权领证](https://s.weibo.com/weibo?q=%23%E8%96%9B%E5%B0%8F%E5%A9%89%E4%BB%BB%E6%9D%83%E9%A2%86%E8%AF%81%23) `375.7K 🔥` `NEW`
1. [孟子义回复](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%9B%9E%E5%A4%8D%23) `374.8K 🔥` `NEW`
1. [上海警方通报两犬撕咬幼童拖行](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E4%B8%A4%E7%8A%AC%E6%92%95%E5%92%AC%E5%B9%BC%E7%AB%A5%E6%8B%96%E8%A1%8C%23) `374.0K 🔥` `NEW`
1. [雷军说小米造车5年只做了两个系列](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%AF%B4%E5%B0%8F%E7%B1%B3%E9%80%A0%E8%BD%A65%E5%B9%B4%E5%8F%AA%E5%81%9A%E4%BA%86%E4%B8%A4%E4%B8%AA%E7%B3%BB%E5%88%97%23) `373.9K 🔥` `NEW`
1. [原来百家讲坛是真的在教东西](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%99%BE%E5%AE%B6%E8%AE%B2%E5%9D%9B%E6%98%AF%E7%9C%9F%E7%9A%84%E5%9C%A8%E6%95%99%E4%B8%9C%E8%A5%BF%23) `365.9K 🔥` `NEW`
1. [多名艺人发声讨债](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E8%89%BA%E4%BA%BA%E5%8F%91%E5%A3%B0%E8%AE%A8%E5%80%BA%23) `361.3K 🔥` `NEW`
1. [美国人偷师中国传统工艺抢注专利](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BA%BA%E5%81%B7%E5%B8%88%E4%B8%AD%E5%9B%BD%E4%BC%A0%E7%BB%9F%E5%B7%A5%E8%89%BA%E6%8A%A2%E6%B3%A8%E4%B8%93%E5%88%A9%23) `358.0K 🔥` `NEW`
1. [宜宾地震后一河流异常变红 (A river turned abnormally red after the Yibin earthquake)](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%E5%9C%B0%E9%9C%87%E5%90%8E%E4%B8%80%E6%B2%B3%E6%B5%81%E5%BC%82%E5%B8%B8%E5%8F%98%E7%BA%A2%23) `356.3K 🔥` `NEW`
1. [雀骨定档](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%E5%AE%9A%E6%A1%A3%23) `352.0K 🔥` `NEW`
1. [包工头讨薪28万获刑3年缓刑](https://s.weibo.com/weibo?q=%23%E5%8C%85%E5%B7%A5%E5%A4%B4%E8%AE%A8%E8%96%AA28%E4%B8%87%E8%8E%B7%E5%88%913%E5%B9%B4%E7%BC%93%E5%88%91%23) `351.1K 🔥` `NEW`
1. [迷奸案主犯带男子性侵未婚妻](https://s.weibo.com/weibo?q=%23%E8%BF%B7%E5%A5%B8%E6%A1%88%E4%B8%BB%E7%8A%AF%E5%B8%A6%E7%94%B7%E5%AD%90%E6%80%A7%E4%BE%B5%E6%9C%AA%E5%A9%9A%E5%A6%BB%23) `345.1K 🔥` `NEW`
1. [苏翊鸣诠释冠军高光力量](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E8%AF%A0%E9%87%8A%E5%86%A0%E5%86%9B%E9%AB%98%E5%85%89%E5%8A%9B%E9%87%8F%23) `339.5K 🔥` `NEW`
1. [RedVelvet海报疑似Gemini生成](https://s.weibo.com/weibo?q=%23RedVelvet%E6%B5%B7%E6%8A%A5%E7%96%91%E4%BC%BCGemini%E7%94%9F%E6%88%90%23) `333.2K 🔥` `NEW`
1. [张真源向彭昱畅道歉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%90%91%E5%BD%AD%E6%98%B1%E7%95%85%E9%81%93%E6%AD%89%23) `331.1K 🔥` `NEW`
1. [陈翔 江铠同](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%BF%94%20%E6%B1%9F%E9%93%A0%E5%90%8C%23) `326.5K 🔥` `NEW`
1. [花呗3天内还款不影响征信](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%91%973%E5%A4%A9%E5%86%85%E8%BF%98%E6%AC%BE%E4%B8%8D%E5%BD%B1%E5%93%8D%E5%BE%81%E4%BF%A1%23) `322.1K 🔥` `NEW`
1. [曝85花三字视后退圈](https://s.weibo.com/weibo?q=%23%E6%9B%9D85%E8%8A%B1%E4%B8%89%E5%AD%97%E8%A7%86%E5%90%8E%E9%80%80%E5%9C%88%23) `321.4K 🔥` `NEW`
1. [白鹿 孟姐冲冲冲 (Bailu Sister Meng rushes)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E5%AD%9F%E5%A7%90%E5%86%B2%E5%86%B2%E5%86%B2%23) `320.6K 🔥` `NEW`
1. [湖北龙卷至少5人在家中被卷走坠亡](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E9%BE%99%E5%8D%B7%E8%87%B3%E5%B0%915%E4%BA%BA%E5%9C%A8%E5%AE%B6%E4%B8%AD%E8%A2%AB%E5%8D%B7%E8%B5%B0%E5%9D%A0%E4%BA%A1%23) `319.9K 🔥` `NEW`
1. [刚当爸爸vs当爸一年半后](https://s.weibo.com/weibo?q=%23%E5%88%9A%E5%BD%93%E7%88%B8%E7%88%B8vs%E5%BD%93%E7%88%B8%E4%B8%80%E5%B9%B4%E5%8D%8A%E5%90%8E%23) `319.2K 🔥` `NEW`
1. [人生的最顶级享受是什么](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E7%9A%84%E6%9C%80%E9%A1%B6%E7%BA%A7%E4%BA%AB%E5%8F%97%E6%98%AF%E4%BB%80%E4%B9%88%23) `318.8K 🔥` `NEW`
1. [横州16年蛇类养殖户发声](https://s.weibo.com/weibo?q=%23%E6%A8%AA%E5%B7%9E16%E5%B9%B4%E8%9B%87%E7%B1%BB%E5%85%BB%E6%AE%96%E6%88%B7%E5%8F%91%E5%A3%B0%23) `305.9K 🔥` `NEW`
1. [新一代理想L6](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%80%E4%BB%A3%E7%90%86%E6%83%B3L6%23) `274.8K 🔥` `NEW`
1. [狗头萝莉出摊被男粉丝亲了](https://s.weibo.com/weibo?q=%23%E7%8B%97%E5%A4%B4%E8%90%9D%E8%8E%89%E5%87%BA%E6%91%8A%E8%A2%AB%E7%94%B7%E7%B2%89%E4%B8%9D%E4%BA%B2%E4%BA%86%23) `252.8K 🔥` `NEW`
1. [刘俊杰让宋威龙张婧仪吻10分钟](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BF%8A%E6%9D%B0%E8%AE%A9%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%90%BB10%E5%88%86%E9%92%9F%23) `249.5K 🔥` `NEW`
1. [广西为什么能成为养蛇大省](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E4%B8%BA%E4%BB%80%E4%B9%88%E8%83%BD%E6%88%90%E4%B8%BA%E5%85%BB%E8%9B%87%E5%A4%A7%E7%9C%81%23) `244.9K 🔥` `NEW`
1. [何小鹏完成Robotaxi第一单](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%B0%8F%E9%B9%8F%E5%AE%8C%E6%88%90Robotaxi%E7%AC%AC%E4%B8%80%E5%8D%95%23) `237.9K 🔥` `NEW`
1. [世界杯8强实力排名 (World Cup Top 8 Strength Ranking)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF8%E5%BC%BA%E5%AE%9E%E5%8A%9B%E6%8E%92%E5%90%8D%23) `221.6K 🔥` `NEW`
1. [那英演唱会官宣](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `217.4K 🔥` `NEW`
1. [陈翔 苍天饶过谁](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%BF%94%20%E8%8B%8D%E5%A4%A9%E9%A5%B6%E8%BF%87%E8%B0%81%23) `217.3K 🔥` `NEW`
1. [阿根廷球员疯狂庆祝挑衅萨拉赫](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E5%91%98%E7%96%AF%E7%8B%82%E5%BA%86%E7%A5%9D%E6%8C%91%E8%A1%85%E8%90%A8%E6%8B%89%E8%B5%AB%23) `217.2K 🔥` `NEW`
1. [减肥之后才发现以前是易瘦体质](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E4%B9%8B%E5%90%8E%E6%89%8D%E5%8F%91%E7%8E%B0%E4%BB%A5%E5%89%8D%E6%98%AF%E6%98%93%E7%98%A6%E4%BD%93%E8%B4%A8%23) `217.2K 🔥` `NEW`
1. [眼镜蛇追蛤蟆凌空一跃咬住男子脚趾](https://s.weibo.com/weibo?q=%23%E7%9C%BC%E9%95%9C%E8%9B%87%E8%BF%BD%E8%9B%A4%E8%9F%86%E5%87%8C%E7%A9%BA%E4%B8%80%E8%B7%83%E5%92%AC%E4%BD%8F%E7%94%B7%E5%AD%90%E8%84%9A%E8%B6%BE%23) `208.0K 🔥` `NEW`
1. [黄灿灿 体重方面我会注意的](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%20%E4%BD%93%E9%87%8D%E6%96%B9%E9%9D%A2%E6%88%91%E4%BC%9A%E6%B3%A8%E6%84%8F%E7%9A%84%23) `284.6K 🔥` `-33%`
1. [上海暴雨 (Heavy rain in Shanghai)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9A%B4%E9%9B%A8%23) `279.6K 🔥` `-36%`
1. [被蛇咬伤村民在家看到五六条蛇](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%9B%87%E5%92%AC%E4%BC%A4%E6%9D%91%E6%B0%91%E5%9C%A8%E5%AE%B6%E7%9C%8B%E5%88%B0%E4%BA%94%E5%85%AD%E6%9D%A1%E8%9B%87%23) `251.7K 🔥` `-39%`
1. [印度12岁少女被4男轮奸沉塘 (12-year-old Indian girl was gang-raped by four men in Shentang)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A612%E5%B2%81%E5%B0%91%E5%A5%B3%E8%A2%AB4%E7%94%B7%E8%BD%AE%E5%A5%B8%E6%B2%89%E5%A1%98%23) `233.4K 🔥` `-42%`
1. [巴威](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%23) `232.5K 🔥` `-46%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `211.4K 🔥` `-46%`

Updated at 2026-07-09 13:24:23

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
