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

1. [魏娆知道红线怀了刘朔孩子的反应](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A8%86%E7%9F%A5%E9%81%93%E7%BA%A2%E7%BA%BF%E6%80%80%E4%BA%86%E5%88%98%E6%9C%94%E5%AD%A9%E5%AD%90%E7%9A%84%E5%8F%8D%E5%BA%94%23) `1.1M 🔥` `NEW`
1. [我后悔介绍朋友做大体老师](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%90%8E%E6%82%94%E4%BB%8B%E7%BB%8D%E6%9C%8B%E5%8F%8B%E5%81%9A%E5%A4%A7%E4%BD%93%E8%80%81%E5%B8%88%23) `818.3K 🔥` `NEW`
1. [本届乌镇峰会分论坛数量创新高](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%B1%8A%E4%B9%8C%E9%95%87%E5%B3%B0%E4%BC%9A%E5%88%86%E8%AE%BA%E5%9D%9B%E6%95%B0%E9%87%8F%E5%88%9B%E6%96%B0%E9%AB%98%23) `655.0K 🔥` `NEW`
1. [警方通报九寨沟景区游客冲突事件](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E4%B9%9D%E5%AF%A8%E6%B2%9F%E6%99%AF%E5%8C%BA%E6%B8%B8%E5%AE%A2%E5%86%B2%E7%AA%81%E4%BA%8B%E4%BB%B6%23) `653.2K 🔥` `NEW`
1. [是我告的密厉娜](https://s.weibo.com/weibo?q=%23%E6%98%AF%E6%88%91%E5%91%8A%E7%9A%84%E5%AF%86%E5%8E%89%E5%A8%9C%23) `589.7K 🔥` `NEW`
1. [女作家称AI写书赚百万美元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%BD%9C%E5%AE%B6%E7%A7%B0AI%E5%86%99%E4%B9%A6%E8%B5%9A%E7%99%BE%E4%B8%87%E7%BE%8E%E5%85%83%23) `496.6K 🔥` `NEW`
1. [九寨沟打人事件双方已和解](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E6%89%93%E4%BA%BA%E4%BA%8B%E4%BB%B6%E5%8F%8C%E6%96%B9%E5%B7%B2%E5%92%8C%E8%A7%A3%23) `354.6K 🔥` `NEW`
1. [A股集体回调原因找到了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%9B%86%E4%BD%93%E5%9B%9E%E8%B0%83%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `321.4K 🔥` `NEW`
1. [女子回应用猕猴桃腌牛肉碎成肉渣](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E7%94%A8%E7%8C%95%E7%8C%B4%E6%A1%83%E8%85%8C%E7%89%9B%E8%82%89%E7%A2%8E%E6%88%90%E8%82%89%E6%B8%A3%23) `316.5K 🔥` `NEW`
1. [嫁金钗大结局](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%A4%A7%E7%BB%93%E5%B1%80%23) `315.4K 🔥` `NEW`
1. [九寨沟打人处罚被指过轻](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E6%89%93%E4%BA%BA%E5%A4%84%E7%BD%9A%E8%A2%AB%E6%8C%87%E8%BF%87%E8%BD%BB%23) `314.1K 🔥` `NEW`
1. [九寨沟2年轻游客遭老年人打伤](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F2%E5%B9%B4%E8%BD%BB%E6%B8%B8%E5%AE%A2%E9%81%AD%E8%80%81%E5%B9%B4%E4%BA%BA%E6%89%93%E4%BC%A4%23) `311.9K 🔥` `NEW`
1. [内娱女星杂志销量TOP排行](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%A5%B3%E6%98%9F%E6%9D%82%E5%BF%97%E9%94%80%E9%87%8FTOP%E6%8E%92%E8%A1%8C%23) `310.3K 🔥` `NEW`
1. [美国一边谈一边打伊朗](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E8%BE%B9%E8%B0%88%E4%B8%80%E8%BE%B9%E6%89%93%E4%BC%8A%E6%9C%97%23) `310.1K 🔥` `NEW`
1. [曝厉娜有重度抑郁](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8E%89%E5%A8%9C%E6%9C%89%E9%87%8D%E5%BA%A6%E6%8A%91%E9%83%81%23) `308.0K 🔥` `NEW`
1. [A股易中天跌懵了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%98%93%E4%B8%AD%E5%A4%A9%E8%B7%8C%E6%87%B5%E4%BA%86%23) `307.1K 🔥` `NEW`
1. [刘亦菲用港姐方式挥手](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%94%A8%E6%B8%AF%E5%A7%90%E6%96%B9%E5%BC%8F%E6%8C%A5%E6%89%8B%23) `305.6K 🔥` `NEW`
1. [倪萍 医美](https://s.weibo.com/weibo?q=%23%E5%80%AA%E8%90%8D%20%E5%8C%BB%E7%BE%8E%23) `304.3K 🔥` `NEW`
1. [九寨沟游客因拍照位起冲突并非首次](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E6%B8%B8%E5%AE%A2%E5%9B%A0%E6%8B%8D%E7%85%A7%E4%BD%8D%E8%B5%B7%E5%86%B2%E7%AA%81%E5%B9%B6%E9%9D%9E%E9%A6%96%E6%AC%A1%23) `303.4K 🔥` `NEW`
1. [九寨沟老人打人视频曝光](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E8%80%81%E4%BA%BA%E6%89%93%E4%BA%BA%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `302.0K 🔥` `NEW`
1. [孩子不提钱可能慢慢疏远父母](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E4%B8%8D%E6%8F%90%E9%92%B1%E5%8F%AF%E8%83%BD%E6%85%A2%E6%85%A2%E7%96%8F%E8%BF%9C%E7%88%B6%E6%AF%8D%23) `300.7K 🔥` `NEW`
1. [九寨沟打人事件双方都有责任](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E6%89%93%E4%BA%BA%E4%BA%8B%E4%BB%B6%E5%8F%8C%E6%96%B9%E9%83%BD%E6%9C%89%E8%B4%A3%E4%BB%BB%23) `300.0K 🔥` `NEW`
1. [我画地为牢汪东城](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%E6%B1%AA%E4%B8%9C%E5%9F%8E%23) `295.7K 🔥` `NEW`
1. [九寨沟情侣被打伤情](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E6%83%85%E4%BE%A3%E8%A2%AB%E6%89%93%E4%BC%A4%E6%83%85%23) `289.6K 🔥` `NEW`
1. [陪你到世界之巅翻红](https://s.weibo.com/weibo?q=%23%E9%99%AA%E4%BD%A0%E5%88%B0%E4%B8%96%E7%95%8C%E4%B9%8B%E5%B7%85%E7%BF%BB%E7%BA%A2%23) `281.6K 🔥` `NEW`
1. [红果短剧125分钟数据获引用](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7125%E5%88%86%E9%92%9F%E6%95%B0%E6%8D%AE%E8%8E%B7%E5%BC%95%E7%94%A8%23) `257.0K 🔥` `NEW`
1. [iPhoneDuo黄牛亏懵了](https://s.weibo.com/weibo?q=%23iPhoneDuo%E9%BB%84%E7%89%9B%E4%BA%8F%E6%87%B5%E4%BA%86%23) `247.5K 🔥` `NEW`
1. [刘延东同志遗体在京火化](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BB%B6%E4%B8%9C%E5%90%8C%E5%BF%97%E9%81%97%E4%BD%93%E5%9C%A8%E4%BA%AC%E7%81%AB%E5%8C%96%23) `228.3K 🔥` `NEW`
1. [失联清华留英硕士家属发声](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E8%81%94%E6%B8%85%E5%8D%8E%E7%95%99%E8%8B%B1%E7%A1%95%E5%A3%AB%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `220.5K 🔥` `NEW`
1. [王子璇白小纯真的甜到上头](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%9C%9F%E7%9A%84%E7%94%9C%E5%88%B0%E4%B8%8A%E5%A4%B4%23) `219.3K 🔥` `NEW`
1. [玄彬孙艺珍青龙电影节撒糖](https://s.weibo.com/weibo?q=%23%E7%8E%84%E5%BD%AC%E5%AD%99%E8%89%BA%E7%8F%8D%E9%9D%92%E9%BE%99%E7%94%B5%E5%BD%B1%E8%8A%82%E6%92%92%E7%B3%96%23) `219.2K 🔥` `NEW`
1. [潍坊护理职业学院教师情绪失控](https://s.weibo.com/weibo?q=%23%E6%BD%8D%E5%9D%8A%E6%8A%A4%E7%90%86%E8%81%8C%E4%B8%9A%E5%AD%A6%E9%99%A2%E6%95%99%E5%B8%88%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `218.0K 🔥` `NEW`
1. [KPL十周年](https://s.weibo.com/weibo?q=%23KPL%E5%8D%81%E5%91%A8%E5%B9%B4%23) `211.0K 🔥` `NEW`
1. [华西医院的含金量还在不断上升](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%A5%BF%E5%8C%BB%E9%99%A2%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8D%E6%96%AD%E4%B8%8A%E5%8D%87%23) `204.3K 🔥` `NEW`
1. [iG的文案真走心了](https://s.weibo.com/weibo?q=%23iG%E7%9A%84%E6%96%87%E6%A1%88%E7%9C%9F%E8%B5%B0%E5%BF%83%E4%BA%86%23) `204.0K 🔥` `NEW`
1. [蔡文静的全家福就她是P上去的](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E7%9A%84%E5%85%A8%E5%AE%B6%E7%A6%8F%E5%B0%B1%E5%A5%B9%E6%98%AFP%E4%B8%8A%E5%8E%BB%E7%9A%84%23) `202.4K 🔥` `NEW`
1. [A股中期向好趋势未改](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%AD%E6%9C%9F%E5%90%91%E5%A5%BD%E8%B6%8B%E5%8A%BF%E6%9C%AA%E6%94%B9%23) `186.9K 🔥` `NEW`
1. [井迪穿高跟鞋机场狂奔](https://s.weibo.com/weibo?q=%23%E4%BA%95%E8%BF%AA%E7%A9%BF%E9%AB%98%E8%B7%9F%E9%9E%8B%E6%9C%BA%E5%9C%BA%E7%8B%82%E5%A5%94%23) `176.1K 🔥` `NEW`
1. [TES对战IG预测](https://s.weibo.com/weibo?q=%23TES%E5%AF%B9%E6%88%98IG%E9%A2%84%E6%B5%8B%23) `166.4K 🔥` `NEW`
1. [九寨沟打人伤情够轻伤吗](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E6%89%93%E4%BA%BA%E4%BC%A4%E6%83%85%E5%A4%9F%E8%BD%BB%E4%BC%A4%E5%90%97%23) `161.7K 🔥` `NEW`
1. [嫁金钗红线怀孕了](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E7%BA%A2%E7%BA%BF%E6%80%80%E5%AD%95%E4%BA%86%23) `155.6K 🔥` `NEW`
1. [我画地为牢啊唐嫣](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%E5%95%8A%E5%94%90%E5%AB%A3%23) `151.0K 🔥` `NEW`
1. [王安宇 离我远一点](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%20%E7%A6%BB%E6%88%91%E8%BF%9C%E4%B8%80%E7%82%B9%23) `146.0K 🔥` `NEW`
1. [A股羊字辈集体涨停](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%BE%8A%E5%AD%97%E8%BE%88%E9%9B%86%E4%BD%93%E6%B6%A8%E5%81%9C%23) `143.6K 🔥` `NEW`
1. [勇士喜提五连胜](https://s.weibo.com/weibo?q=%23%E5%8B%87%E5%A3%AB%E5%96%9C%E6%8F%90%E4%BA%94%E8%BF%9E%E8%83%9C%23) `141.5K 🔥` `NEW`
1. [湖南烈士公园回应女生穿和服拍照](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E7%83%88%E5%A3%AB%E5%85%AC%E5%9B%AD%E5%9B%9E%E5%BA%94%E5%A5%B3%E7%94%9F%E7%A9%BF%E5%92%8C%E6%9C%8D%E6%8B%8D%E7%85%A7%23) `140.1K 🔥` `NEW`
1. [因太帅爆火的保洁大叔称年轻时被嫌丑](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E5%A4%AA%E5%B8%85%E7%88%86%E7%81%AB%E7%9A%84%E4%BF%9D%E6%B4%81%E5%A4%A7%E5%8F%94%E7%A7%B0%E5%B9%B4%E8%BD%BB%E6%97%B6%E8%A2%AB%E5%AB%8C%E4%B8%91%23) `135.7K 🔥` `NEW`
1. [九寨沟老人打人](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E8%80%81%E4%BA%BA%E6%89%93%E4%BA%BA%23) `313.5K 🔥` `+33%`
1. [183很丑170很帅怎么选](https://s.weibo.com/weibo?q=%23183%E5%BE%88%E4%B8%91170%E5%BE%88%E5%B8%85%E6%80%8E%E4%B9%88%E9%80%89%23) `154.0K 🔥` `-42%`

Updated at 2026-11-03 16:53:39

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
