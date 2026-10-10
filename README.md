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

1. [巴拿马8.0级地震](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%BF%E9%A9%AC8.0%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `1.9M 🔥` `NEW`
1. [现在不是出轨的问题](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E4%B8%8D%E6%98%AF%E5%87%BA%E8%BD%A8%E7%9A%84%E9%97%AE%E9%A2%98%23) `1.5M 🔥` `NEW`
1. [飞天官博评论区现状](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E5%A4%A9%E5%AE%98%E5%8D%9A%E8%AF%84%E8%AE%BA%E5%8C%BA%E7%8E%B0%E7%8A%B6%23) `1.1M 🔥` `NEW`
1. [岳母过户学区房男子进退两难](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E6%AF%8D%E8%BF%87%E6%88%B7%E5%AD%A6%E5%8C%BA%E6%88%BF%E7%94%B7%E5%AD%90%E8%BF%9B%E9%80%80%E4%B8%A4%E9%9A%BE%23) `1.0M 🔥` `NEW`
1. [谢霆锋同款银河战舰700全球上市](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E5%90%8C%E6%AC%BE%E9%93%B6%E6%B2%B3%E6%88%98%E8%88%B0700%E5%85%A8%E7%90%83%E4%B8%8A%E5%B8%82%23) `991.9K 🔥` `NEW`
1. [钝感力太强当年全是神回复](https://s.weibo.com/weibo?q=%23%E9%92%9D%E6%84%9F%E5%8A%9B%E5%A4%AA%E5%BC%BA%E5%BD%93%E5%B9%B4%E5%85%A8%E6%98%AF%E7%A5%9E%E5%9B%9E%E5%A4%8D%23) `460.3K 🔥` `NEW`
1. [王仁君获奖赵丽颖belike](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BB%81%E5%90%9B%E8%8E%B7%E5%A5%96%E8%B5%B5%E4%B8%BD%E9%A2%96belike%23) `448.1K 🔥` `NEW`
1. [王仁君口碑](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BB%81%E5%90%9B%E5%8F%A3%E7%A2%91%23) `425.9K 🔥` `NEW`
1. [所有人感受下刘亦菲这个出场](https://s.weibo.com/weibo?q=%23%E6%89%80%E6%9C%89%E4%BA%BA%E6%84%9F%E5%8F%97%E4%B8%8B%E5%88%98%E4%BA%A6%E8%8F%B2%E8%BF%99%E4%B8%AA%E5%87%BA%E5%9C%BA%23) `425.9K 🔥` `NEW`
1. [马云贝克汉姆蹲下与轮椅球迷合影](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BA%91%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E8%B9%B2%E4%B8%8B%E4%B8%8E%E8%BD%AE%E6%A4%85%E7%90%83%E8%BF%B7%E5%90%88%E5%BD%B1%23) `425.9K 🔥` `NEW`
1. [杨幂直播吃泡面被工作人员紧急叫停](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%9B%B4%E6%92%AD%E5%90%83%E6%B3%A1%E9%9D%A2%E8%A2%AB%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E7%B4%A7%E6%80%A5%E5%8F%AB%E5%81%9C%23) `425.8K 🔥` `NEW`
1. [iPhone18Pro激活超300万](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%BF%80%E6%B4%BB%E8%B6%85300%E4%B8%87%23) `425.8K 🔥` `NEW`
1. [C罗980球](https://s.weibo.com/weibo?q=%23C%E7%BD%97980%E7%90%83%23) `425.8K 🔥` `NEW`
1. [中国女单首次两人晋级总决赛](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%8D%95%E9%A6%96%E6%AC%A1%E4%B8%A4%E4%BA%BA%E6%99%8B%E7%BA%A7%E6%80%BB%E5%86%B3%E8%B5%9B%23) `425.8K 🔥` `NEW`
1. [很多癌症都源于慢性炎症背景](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E7%99%8C%E7%97%87%E9%83%BD%E6%BA%90%E4%BA%8E%E6%85%A2%E6%80%A7%E7%82%8E%E7%97%87%E8%83%8C%E6%99%AF%23) `425.8K 🔥` `NEW`
1. [王仁君回复刘钧刘琳](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BB%81%E5%90%9B%E5%9B%9E%E5%A4%8D%E5%88%98%E9%92%A7%E5%88%98%E7%90%B3%23) `425.8K 🔥` `NEW`
1. [闫妮表情](https://s.weibo.com/weibo?q=%23%E9%97%AB%E5%A6%AE%E8%A1%A8%E6%83%85%23) `413.3K 🔥` `NEW`
1. [12356没有4](https://s.weibo.com/weibo?q=%2312356%E6%B2%A1%E6%9C%894%23) `364.1K 🔥` `NEW`
1. [盛家把视后视帝包揽了](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E5%AE%B6%E6%8A%8A%E8%A7%86%E5%90%8E%E8%A7%86%E5%B8%9D%E5%8C%85%E6%8F%BD%E4%BA%86%23) `363.6K 🔥` `NEW`
1. [宋佳 争议](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BD%B3%20%E4%BA%89%E8%AE%AE%23) `359.2K 🔥` `NEW`
1. [女性四十岁后开始事业也不晚](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%80%A7%E5%9B%9B%E5%8D%81%E5%B2%81%E5%90%8E%E5%BC%80%E5%A7%8B%E4%BA%8B%E4%B8%9A%E4%B9%9F%E4%B8%8D%E6%99%9A%23) `282.6K 🔥` `NEW`
1. [宋佳芳名三九有望冲视后](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BD%B3%E8%8A%B3%E5%90%8D%E4%B8%89%E4%B9%9D%E6%9C%89%E6%9C%9B%E5%86%B2%E8%A7%86%E5%90%8E%23) `278.7K 🔥` `NEW`
1. [医生连发七问新郎离世细节](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%BF%9E%E5%8F%91%E4%B8%83%E9%97%AE%E6%96%B0%E9%83%8E%E7%A6%BB%E4%B8%96%E7%BB%86%E8%8A%82%23) `274.4K 🔥` `NEW`
1. [王仁君感谢盛家人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BB%81%E5%90%9B%E6%84%9F%E8%B0%A2%E7%9B%9B%E5%AE%B6%E4%BA%BA%23) `244.0K 🔥` `NEW`
1. [原来这叫情绪冷漠症](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%8F%AB%E6%83%85%E7%BB%AA%E5%86%B7%E6%BC%A0%E7%97%87%23) `235.1K 🔥` `NEW`
1. [4种早睡伤害不比熬夜小](https://s.weibo.com/weibo?q=%234%E7%A7%8D%E6%97%A9%E7%9D%A1%E4%BC%A4%E5%AE%B3%E4%B8%8D%E6%AF%94%E7%86%AC%E5%A4%9C%E5%B0%8F%23) `200.8K 🔥` `NEW`
1. [巴拿马主持人直播时遭遇地震](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%BF%E9%A9%AC%E4%B8%BB%E6%8C%81%E4%BA%BA%E7%9B%B4%E6%92%AD%E6%97%B6%E9%81%AD%E9%81%87%E5%9C%B0%E9%9C%87%23) `192.2K 🔥` `NEW`
1. [你怎么跟早上长得不一样了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%80%8E%E4%B9%88%E8%B7%9F%E6%97%A9%E4%B8%8A%E9%95%BF%E5%BE%97%E4%B8%8D%E4%B8%80%E6%A0%B7%E4%BA%86%23) `189.0K 🔥` `NEW`
1. [巴拿马7.6级地震现场画面](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%BF%E9%A9%AC7.6%E7%BA%A7%E5%9C%B0%E9%9C%87%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `179.1K 🔥` `NEW`
1. [林俊杰新歌](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E6%96%B0%E6%AD%8C%23) `178.6K 🔥` `NEW`
1. [周杰伦昆凌大女儿很喜欢穿汉服](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%98%86%E5%87%8C%E5%A4%A7%E5%A5%B3%E5%84%BF%E5%BE%88%E5%96%9C%E6%AC%A2%E7%A9%BF%E6%B1%89%E6%9C%8D%23) `167.4K 🔥` `NEW`
1. [美国宣布对国际刑事法院实施制裁](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%AE%A3%E5%B8%83%E5%AF%B9%E5%9B%BD%E9%99%85%E5%88%91%E4%BA%8B%E6%B3%95%E9%99%A2%E5%AE%9E%E6%96%BD%E5%88%B6%E8%A3%81%23) `156.7K 🔥` `NEW`
1. [多国发表联合声明反对美国](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E5%8F%91%E8%A1%A8%E8%81%94%E5%90%88%E5%A3%B0%E6%98%8E%E5%8F%8D%E5%AF%B9%E7%BE%8E%E5%9B%BD%23) `156.1K 🔥` `NEW`
1. [玛格丽特汉密尔顿去世](https://s.weibo.com/weibo?q=%23%E7%8E%9B%E6%A0%BC%E4%B8%BD%E7%89%B9%E6%B1%89%E5%AF%86%E5%B0%94%E9%A1%BF%E5%8E%BB%E4%B8%96%23) `156.1K 🔥` `NEW`
1. [C罗回应980球](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%9B%9E%E5%BA%94980%E7%90%83%23) `153.3K 🔥` `NEW`
1. [女子仅退款9斤蜜薯称有本事来拿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%85%E9%80%80%E6%AC%BE9%E6%96%A4%E8%9C%9C%E8%96%AF%E7%A7%B0%E6%9C%89%E6%9C%AC%E4%BA%8B%E6%9D%A5%E6%8B%BF%23) `2.2M 🔥` `+4217%`
1. [十五五开局六张网齐铺开](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E5%BC%80%E5%B1%80%E5%85%AD%E5%BC%A0%E7%BD%91%E9%BD%90%E9%93%BA%E5%BC%80%23) `1.6M 🔥` `+1430%`
1. [养了五年的猫突然开线还能修吗](https://s.weibo.com/weibo?q=%23%E5%85%BB%E4%BA%86%E4%BA%94%E5%B9%B4%E7%9A%84%E7%8C%AB%E7%AA%81%E7%84%B6%E5%BC%80%E7%BA%BF%E8%BF%98%E8%83%BD%E4%BF%AE%E5%90%97%23) `718.5K 🔥` `+1186%`
1. [飞天奖获奖名单](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E5%A4%A9%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `647.7K 🔥` `+255%`
1. [盛家的儿女一个比一个争气](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E5%AE%B6%E7%9A%84%E5%84%BF%E5%A5%B3%E4%B8%80%E4%B8%AA%E6%AF%94%E4%B8%80%E4%B8%AA%E4%BA%89%E6%B0%94%23) `491.7K 🔥` `+233%`
1. [沐言爸爸隐婚生子女儿走红后才公开](https://s.weibo.com/weibo?q=%23%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%E9%9A%90%E5%A9%9A%E7%94%9F%E5%AD%90%E5%A5%B3%E5%84%BF%E8%B5%B0%E7%BA%A2%E5%90%8E%E6%89%8D%E5%85%AC%E5%BC%80%23) `457.5K 🔥` `+376%`
1. [蛋白质对人体有多重要](https://s.weibo.com/weibo?q=%23%E8%9B%8B%E7%99%BD%E8%B4%A8%E5%AF%B9%E4%BA%BA%E4%BD%93%E6%9C%89%E5%A4%9A%E9%87%8D%E8%A6%81%23) `425.9K 🔥` `+712%`
1. [王仁君是杨幂大学班长](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BB%81%E5%90%9B%E6%98%AF%E6%9D%A8%E5%B9%82%E5%A4%A7%E5%AD%A6%E7%8F%AD%E9%95%BF%23) `425.8K 🔥` `+324%`
1. [大闸蟹全线崩盘](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%97%B8%E8%9F%B9%E5%85%A8%E7%BA%BF%E5%B4%A9%E7%9B%98%23) `392.7K 🔥` `+1050%`
1. [赵丽颖恭喜王仁君](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%81%AD%E5%96%9C%E7%8E%8B%E4%BB%81%E5%90%9B%23) `378.8K 🔥` `+658%`
1. [妈妈回应沐言为何没读私立学校](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E6%B2%90%E8%A8%80%E4%B8%BA%E4%BD%95%E6%B2%A1%E8%AF%BB%E7%A7%81%E7%AB%8B%E5%AD%A6%E6%A0%A1%23) `296.6K 🔥` `+573%`
1. [妈妈说男的死得比女的早](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E8%AF%B4%E7%94%B7%E7%9A%84%E6%AD%BB%E5%BE%97%E6%AF%94%E5%A5%B3%E7%9A%84%E6%97%A9%23) `295.0K 🔥` `+768%`
1. [小巷人家 陪跑](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%20%E9%99%AA%E8%B7%91%23) `274.4K 🔥` `+453%`
1. [沐言爸爸是游乐王子](https://s.weibo.com/weibo?q=%23%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%E6%98%AF%E6%B8%B8%E4%B9%90%E7%8E%8B%E5%AD%90%23) `197.3K 🔥` `+472%`
1. [我的阿勒泰](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E9%98%BF%E5%8B%92%E6%B3%B0%23) `156.2K 🔥` `+499%`
1. [林昀儒郑怡静10比3冠军点遭惊天逆转](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%98%80%E5%84%92%E9%83%91%E6%80%A1%E9%9D%9910%E6%AF%943%E5%86%A0%E5%86%9B%E7%82%B9%E9%81%AD%E6%83%8A%E5%A4%A9%E9%80%86%E8%BD%AC%23) `155.0K 🔥` `+208%`

Updated at 2026-10-10 09:13:31

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
