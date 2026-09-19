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

1. [许嵩冯禧官宣结婚](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%E5%86%AF%E7%A6%A7%E5%AE%98%E5%AE%A3%E7%BB%93%E5%A9%9A%23) `22.4M 🔥` `NEW`
1. [爱情公寓 别试探了有市场](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%20%E5%88%AB%E8%AF%95%E6%8E%A2%E4%BA%86%E6%9C%89%E5%B8%82%E5%9C%BA%23) `2.2M 🔥` `NEW`
1. [国风文创带火中秋消费](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%A3%8E%E6%96%87%E5%88%9B%E5%B8%A6%E7%81%AB%E4%B8%AD%E7%A7%8B%E6%B6%88%E8%B4%B9%23) `1.7M 🔥` `NEW`
1. [十万级华为乾崑ADSSE星海V6上市](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%87%E7%BA%A7%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91ADSSE%E6%98%9F%E6%B5%B7V6%E4%B8%8A%E5%B8%82%23) `1.5M 🔥` `NEW`
1. [iG晋级S16](https://s.weibo.com/weibo?q=%23iG%E6%99%8B%E7%BA%A7S16%23) `1.0M 🔥` `NEW`
1. [网传三十五而已刚开机就黄了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E4%B8%89%E5%8D%81%E4%BA%94%E8%80%8C%E5%B7%B2%E5%88%9A%E5%BC%80%E6%9C%BA%E5%B0%B1%E9%BB%84%E4%BA%86%23) `833.7K 🔥` `NEW`
1. [黄子弘凡永久终止与声幻娱乐合作](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E6%B0%B8%E4%B9%85%E7%BB%88%E6%AD%A2%E4%B8%8E%E5%A3%B0%E5%B9%BB%E5%A8%B1%E4%B9%90%E5%90%88%E4%BD%9C%23) `772.0K 🔥` `NEW`
1. [被顾客用西瓜砸头摊主获赔7万元](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%A1%BE%E5%AE%A2%E7%94%A8%E8%A5%BF%E7%93%9C%E7%A0%B8%E5%A4%B4%E6%91%8A%E4%B8%BB%E8%8E%B7%E8%B5%947%E4%B8%87%E5%85%83%23) `496.4K 🔥` `NEW`
1. [声幻娱乐道歉](https://s.weibo.com/weibo?q=%23%E5%A3%B0%E5%B9%BB%E5%A8%B1%E4%B9%90%E9%81%93%E6%AD%89%23) `351.3K 🔥` `NEW`
1. [爱情公寓主演合体](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%B8%BB%E6%BC%94%E5%90%88%E4%BD%93%23) `350.8K 🔥` `NEW`
1. [接冯禧追星运](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E5%86%AF%E7%A6%A7%E8%BF%BD%E6%98%9F%E8%BF%90%23) `348.5K 🔥` `NEW`
1. [看亚运会开幕式被吓到了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%BC%80%E5%B9%95%E5%BC%8F%E8%A2%AB%E5%90%93%E5%88%B0%E4%BA%86%23) `345.2K 🔥` `NEW`
1. [亚运会开幕式 诡异](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%BC%80%E5%B9%95%E5%BC%8F%20%E8%AF%A1%E5%BC%82%23) `344.2K 🔥` `NEW`
1. [调休 抵制消费](https://s.weibo.com/weibo?q=%23%E8%B0%83%E4%BC%91%20%E6%8A%B5%E5%88%B6%E6%B6%88%E8%B4%B9%23) `342.7K 🔥` `NEW`
1. [我的青春结婚了](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E9%9D%92%E6%98%A5%E7%BB%93%E5%A9%9A%E4%BA%86%23) `340.1K 🔥` `NEW`
1. [陈都灵方称会和剧组继续争取](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E6%96%B9%E7%A7%B0%E4%BC%9A%E5%92%8C%E5%89%A7%E7%BB%84%E7%BB%A7%E7%BB%AD%E4%BA%89%E5%8F%96%23) `339.1K 🔥` `NEW`
1. [韩国运动员发文救救我们](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%BF%90%E5%8A%A8%E5%91%98%E5%8F%91%E6%96%87%E6%95%91%E6%95%91%E6%88%91%E4%BB%AC%23) `337.3K 🔥` `NEW`
1. [猪肾续命9个月试验研究者回应](https://s.weibo.com/weibo?q=%23%E7%8C%AA%E8%82%BE%E7%BB%AD%E5%91%BD9%E4%B8%AA%E6%9C%88%E8%AF%95%E9%AA%8C%E7%A0%94%E7%A9%B6%E8%80%85%E5%9B%9E%E5%BA%94%23) `334.3K 🔥` `NEW`
1. [小沈阳遗憾今晚不能陪大家披荆斩棘](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E9%81%97%E6%86%BE%E4%BB%8A%E6%99%9A%E4%B8%8D%E8%83%BD%E9%99%AA%E5%A4%A7%E5%AE%B6%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%23) `331.0K 🔥` `NEW`
1. [中秋国庆调休争议](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E5%9B%BD%E5%BA%86%E8%B0%83%E4%BC%91%E4%BA%89%E8%AE%AE%23) `326.1K 🔥` `NEW`
1. [北漂月薪一万五两顿花9块](https://s.weibo.com/weibo?q=%23%E5%8C%97%E6%BC%82%E6%9C%88%E8%96%AA%E4%B8%80%E4%B8%87%E4%BA%94%E4%B8%A4%E9%A1%BF%E8%8A%B19%E5%9D%97%23) `289.8K 🔥` `NEW`
1. [北大复旦校长接连发出警告](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E5%A4%8D%E6%97%A6%E6%A0%A1%E9%95%BF%E6%8E%A5%E8%BF%9E%E5%8F%91%E5%87%BA%E8%AD%A6%E5%91%8A%23) `277.3K 🔥` `NEW`
1. [父女在商场遭人围堵4岁女儿被吓哭](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%A5%B3%E5%9C%A8%E5%95%86%E5%9C%BA%E9%81%AD%E4%BA%BA%E5%9B%B4%E5%A0%B54%E5%B2%81%E5%A5%B3%E5%84%BF%E8%A2%AB%E5%90%93%E5%93%AD%23) `275.8K 🔥` `NEW`
1. [王俊凯被粉丝逗笑了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%A2%AB%E7%B2%89%E4%B8%9D%E9%80%97%E7%AC%91%E4%BA%86%23) `268.7K 🔥` `NEW`
1. [IG对战JDG](https://s.weibo.com/weibo?q=%23IG%E5%AF%B9%E6%88%98JDG%23) `258.3K 🔥` `NEW`
1. [10岁溺亡男孩一周被罚站超700分钟](https://s.weibo.com/weibo?q=%2310%E5%B2%81%E6%BA%BA%E4%BA%A1%E7%94%B7%E5%AD%A9%E4%B8%80%E5%91%A8%E8%A2%AB%E7%BD%9A%E7%AB%99%E8%B6%85700%E5%88%86%E9%92%9F%23) `238.6K 🔥` `NEW`
1. [节奏病是我爱的纯唱跳](https://s.weibo.com/weibo?q=%23%E8%8A%82%E5%A5%8F%E7%97%85%E6%98%AF%E6%88%91%E7%88%B1%E7%9A%84%E7%BA%AF%E5%94%B1%E8%B7%B3%23) `238.6K 🔥` `NEW`
1. [张彬彬从哪学的唱腔](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BD%AC%E5%BD%AC%E4%BB%8E%E5%93%AA%E5%AD%A6%E7%9A%84%E5%94%B1%E8%85%94%23) `238.5K 🔥` `NEW`
1. [天后 不搭](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%90%8E%20%E4%B8%8D%E6%90%AD%23) `228.6K 🔥` `NEW`
1. [晒娃起号半年接70多个广告](https://s.weibo.com/weibo?q=%23%E6%99%92%E5%A8%83%E8%B5%B7%E5%8F%B7%E5%8D%8A%E5%B9%B4%E6%8E%A570%E5%A4%9A%E4%B8%AA%E5%B9%BF%E5%91%8A%23) `202.8K 🔥` `NEW`
1. [陈赫娄艺潇李金铭孙艺洲邓家佳合体](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%A8%84%E8%89%BA%E6%BD%87%E6%9D%8E%E9%87%91%E9%93%AD%E5%AD%99%E8%89%BA%E6%B4%B2%E9%82%93%E5%AE%B6%E4%BD%B3%E5%90%88%E4%BD%93%23) `202.5K 🔥` `NEW`
1. [披荆斩棘直播](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `201.9K 🔥` `NEW`
1. [中国体育代表团入场](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BD%93%E8%82%B2%E4%BB%A3%E8%A1%A8%E5%9B%A2%E5%85%A5%E5%9C%BA%23) `194.2K 🔥` `NEW`
1. [迪丽热巴对粉丝好大方](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%AF%B9%E7%B2%89%E4%B8%9D%E5%A5%BD%E5%A4%A7%E6%96%B9%23) `193.4K 🔥` `NEW`
1. [重庆地震](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%9C%B0%E9%9C%87%23) `191.6K 🔥` `NEW`
1. [村干部回应一根杆子上装84个监控](https://s.weibo.com/weibo?q=%23%E6%9D%91%E5%B9%B2%E9%83%A8%E5%9B%9E%E5%BA%94%E4%B8%80%E6%A0%B9%E6%9D%86%E5%AD%90%E4%B8%8A%E8%A3%8584%E4%B8%AA%E7%9B%91%E6%8E%A7%23) `190.7K 🔥` `NEW`
1. [罗志祥疫情时养的植物陪伴多年](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%BF%97%E7%A5%A5%E7%96%AB%E6%83%85%E6%97%B6%E5%85%BB%E7%9A%84%E6%A4%8D%E7%89%A9%E9%99%AA%E4%BC%B4%E5%A4%9A%E5%B9%B4%23) `190.7K 🔥` `NEW`
1. [王俊凯演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `190.5K 🔥` `NEW`
1. [爸爸以为是小鱼过去一看傻眼了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%BB%A5%E4%B8%BA%E6%98%AF%E5%B0%8F%E9%B1%BC%E8%BF%87%E5%8E%BB%E4%B8%80%E7%9C%8B%E5%82%BB%E7%9C%BC%E4%BA%86%23) `184.7K 🔥` `NEW`
1. [IG 杰斯](https://s.weibo.com/weibo?q=%23IG%20%E6%9D%B0%E6%96%AF%23) `182.1K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `178.7K 🔥` `NEW`
1. [沫子应聘被天蚕土豆婉拒](https://s.weibo.com/weibo?q=%23%E6%B2%AB%E5%AD%90%E5%BA%94%E8%81%98%E8%A2%AB%E5%A4%A9%E8%9A%95%E5%9C%9F%E8%B1%86%E5%A9%89%E6%8B%92%23) `176.0K 🔥` `NEW`
1. [许嵩冯禧 所以和偶像结婚了](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%E5%86%AF%E7%A6%A7%20%E6%89%80%E4%BB%A5%E5%92%8C%E5%81%B6%E5%83%8F%E7%BB%93%E5%A9%9A%E4%BA%86%23) `175.7K 🔥` `NEW`
1. [迪丽热巴见面会Dresscode](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A7%81%E9%9D%A2%E4%BC%9ADresscode%23) `174.0K 🔥` `NEW`
1. [夏季赛最佳阵容候选人](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%AD%A3%E8%B5%9B%E6%9C%80%E4%BD%B3%E9%98%B5%E5%AE%B9%E5%80%99%E9%80%89%E4%BA%BA%23) `173.7K 🔥` `NEW`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `441.7K 🔥` `+45%`
1. [肉包不吃肉 猫耳](https://s.weibo.com/weibo?q=%23%E8%82%89%E5%8C%85%E4%B8%8D%E5%90%83%E8%82%89%20%E7%8C%AB%E8%80%B3%23) `323.4K 🔥` `+119%`
1. [日本19岁女孩卖淫日接待3至4人](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC19%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%8D%96%E6%B7%AB%E6%97%A5%E6%8E%A5%E5%BE%853%E8%87%B34%E4%BA%BA%23) `274.8K 🔥`
1. [iPhone18Pro1TB采用QLC](https://s.weibo.com/weibo?q=%23iPhone18Pro1TB%E9%87%87%E7%94%A8QLC%23) `238.5K 🔥`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `352.7K 🔥` `-55%`
1. [亚运会开幕式](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%BC%80%E5%B9%95%E5%BC%8F%23) `239.1K 🔥` `-74%`

Updated at 2026-09-19 21:16:54

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
