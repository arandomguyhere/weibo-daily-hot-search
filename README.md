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

1. [越来越多人不接陌生电话](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%E4%BA%BA%E4%B8%8D%E6%8E%A5%E9%99%8C%E7%94%9F%E7%94%B5%E8%AF%9D%23) `1.1M 🔥` `NEW`
1. [伊朗已有超3万名女性忍者](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B7%B2%E6%9C%89%E8%B6%853%E4%B8%87%E5%90%8D%E5%A5%B3%E6%80%A7%E5%BF%8D%E8%80%85%23) `798.1K 🔥` `NEW`
1. [算力成草原新特产](https://s.weibo.com/weibo?q=%23%E7%AE%97%E5%8A%9B%E6%88%90%E8%8D%89%E5%8E%9F%E6%96%B0%E7%89%B9%E4%BA%A7%23) `628.7K 🔥` `NEW`
1. [白鹿奔跑吧合照C位](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%A5%94%E8%B7%91%E5%90%A7%E5%90%88%E7%85%A7C%E4%BD%8D%23) `606.6K 🔥` `NEW`
1. [终于知道有眼尾沟怎么画眼线了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E6%9C%89%E7%9C%BC%E5%B0%BE%E6%B2%9F%E6%80%8E%E4%B9%88%E7%94%BB%E7%9C%BC%E7%BA%BF%E4%BA%86%23) `426.4K 🔥` `NEW`
1. [吴越质问花姐骗了多少钱](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B6%8A%E8%B4%A8%E9%97%AE%E8%8A%B1%E5%A7%90%E9%AA%97%E4%BA%86%E5%A4%9A%E5%B0%91%E9%92%B1%23) `374.9K 🔥` `NEW`
1. [2026环广西世巡赛](https://s.weibo.com/weibo?q=%232026%E7%8E%AF%E5%B9%BF%E8%A5%BF%E4%B8%96%E5%B7%A1%E8%B5%9B%23) `315.9K 🔥` `NEW`
1. [恋与深空银翼杀手联动](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E9%93%B6%E7%BF%BC%E6%9D%80%E6%89%8B%E8%81%94%E5%8A%A8%23) `276.6K 🔥` `NEW`
1. [昆明一事业编岗位九千人报名](https://s.weibo.com/weibo?q=%23%E6%98%86%E6%98%8E%E4%B8%80%E4%BA%8B%E4%B8%9A%E7%BC%96%E5%B2%97%E4%BD%8D%E4%B9%9D%E5%8D%83%E4%BA%BA%E6%8A%A5%E5%90%8D%23) `229.7K 🔥` `NEW`
1. [人民日报评天价黄牛票](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%A4%A9%E4%BB%B7%E9%BB%84%E7%89%9B%E7%A5%A8%23) `226.8K 🔥` `NEW`
1. [上海徐浦大桥事故后车视角](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%BE%90%E6%B5%A6%E5%A4%A7%E6%A1%A5%E4%BA%8B%E6%95%85%E5%90%8E%E8%BD%A6%E8%A7%86%E8%A7%92%23) `226.8K 🔥` `NEW`
1. [贫困生能花三千块治牙吗](https://s.weibo.com/weibo?q=%23%E8%B4%AB%E5%9B%B0%E7%94%9F%E8%83%BD%E8%8A%B1%E4%B8%89%E5%8D%83%E5%9D%97%E6%B2%BB%E7%89%99%E5%90%97%23) `224.8K 🔥` `NEW`
1. [疑似邓凯恋情](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E9%82%93%E5%87%AF%E6%81%8B%E6%83%85%23) `223.9K 🔥` `NEW`
1. [峨眉全阵容官宣](https://s.weibo.com/weibo?q=%23%E5%B3%A8%E7%9C%89%E5%85%A8%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `222.7K 🔥` `NEW`
1. [余文乐发文道歉](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%96%87%E4%B9%90%E5%8F%91%E6%96%87%E9%81%93%E6%AD%89%23) `221.9K 🔥` `NEW`
1. [王晓慧特别出演](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%93%E6%85%A7%E7%89%B9%E5%88%AB%E5%87%BA%E6%BC%94%23) `220.0K 🔥` `NEW`
1. [iPhoneDuo eSIM限制](https://s.weibo.com/weibo?q=%23iPhoneDuo%20eSIM%E9%99%90%E5%88%B6%23) `219.1K 🔥` `NEW`
1. [男子熬夜饥一顿饱一顿患上胰腺癌](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%86%AC%E5%A4%9C%E9%A5%A5%E4%B8%80%E9%A1%BF%E9%A5%B1%E4%B8%80%E9%A1%BF%E6%82%A3%E4%B8%8A%E8%83%B0%E8%85%BA%E7%99%8C%23) `218.7K 🔥` `NEW`
1. [大麦已经报警了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BA%A6%E5%B7%B2%E7%BB%8F%E6%8A%A5%E8%AD%A6%E4%BA%86%23) `217.7K 🔥` `NEW`
1. [长期喝牛奶vs从来不喝牛奶](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E5%96%9D%E7%89%9B%E5%A5%B6vs%E4%BB%8E%E6%9D%A5%E4%B8%8D%E5%96%9D%E7%89%9B%E5%A5%B6%23) `216.9K 🔥` `NEW`
1. [叶非夜晒与郭宇欣聊天录屏](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E9%9D%9E%E5%A4%9C%E6%99%92%E4%B8%8E%E9%83%AD%E5%AE%87%E6%AC%A3%E8%81%8A%E5%A4%A9%E5%BD%95%E5%B1%8F%23) `216.0K 🔥` `NEW`
1. [李昀锐以为孟子义真睡着了被逗笑了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E4%BB%A5%E4%B8%BA%E5%AD%9F%E5%AD%90%E4%B9%89%E7%9C%9F%E7%9D%A1%E7%9D%80%E4%BA%86%E8%A2%AB%E9%80%97%E7%AC%91%E4%BA%86%23) `214.8K 🔥` `NEW`
1. [曹骏披哥总决赛分组](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E6%8A%AB%E5%93%A5%E6%80%BB%E5%86%B3%E8%B5%9B%E5%88%86%E7%BB%84%23) `213.5K 🔥` `NEW`
1. [法国多地LV门店被洗劫一空](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%A4%9A%E5%9C%B0LV%E9%97%A8%E5%BA%97%E8%A2%AB%E6%B4%97%E5%8A%AB%E4%B8%80%E7%A9%BA%23) `212.0K 🔥` `NEW`
1. [印度人炫耀家家户户都有电视](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%BA%BA%E7%82%AB%E8%80%80%E5%AE%B6%E5%AE%B6%E6%88%B7%E6%88%B7%E9%83%BD%E6%9C%89%E7%94%B5%E8%A7%86%23) `211.2K 🔥` `NEW`
1. [法国一市长遭犹太定居者殴打](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E4%B8%80%E5%B8%82%E9%95%BF%E9%81%AD%E7%8A%B9%E5%A4%AA%E5%AE%9A%E5%B1%85%E8%80%85%E6%AE%B4%E6%89%93%23) `210.4K 🔥` `NEW`
1. [浙江富婆家有产业却没人情味](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%AF%8C%E5%A9%86%E5%AE%B6%E6%9C%89%E4%BA%A7%E4%B8%9A%E5%8D%B4%E6%B2%A1%E4%BA%BA%E6%83%85%E5%91%B3%23) `209.4K 🔥` `NEW`
1. [春日宴开机](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%97%A5%E5%AE%B4%E5%BC%80%E6%9C%BA%23) `208.7K 🔥` `NEW`
1. [以为是胃病其实是癌王信号](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E6%98%AF%E8%83%83%E7%97%85%E5%85%B6%E5%AE%9E%E6%98%AF%E7%99%8C%E7%8E%8B%E4%BF%A1%E5%8F%B7%23) `204.1K 🔥` `NEW`
1. [田曦薇这一下谁扛得住](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%BF%99%E4%B8%80%E4%B8%8B%E8%B0%81%E6%89%9B%E5%BE%97%E4%BD%8F%23) `183.7K 🔥` `NEW`
1. [张凌赫天选谢家人又在发力了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%A9%E9%80%89%E8%B0%A2%E5%AE%B6%E4%BA%BA%E5%8F%88%E5%9C%A8%E5%8F%91%E5%8A%9B%E4%BA%86%23) `182.3K 🔥` `NEW`
1. [TF家族发文给张函瑞庆生](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E5%8F%91%E6%96%87%E7%BB%99%E5%BC%A0%E5%87%BD%E7%91%9E%E5%BA%86%E7%94%9F%23) `181.5K 🔥` `NEW`
1. [郭宇欣 叶非夜](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%20%E5%8F%B6%E9%9D%9E%E5%A4%9C%23) `155.3K 🔥` `NEW`
1. [央视曝光6000元神药成本不到30元](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%896000%E5%85%83%E7%A5%9E%E8%8D%AF%E6%88%90%E6%9C%AC%E4%B8%8D%E5%88%B030%E5%85%83%23) `153.6K 🔥` `NEW`
1. [丹麦男子卖中国包子日赚超5万元](https://s.weibo.com/weibo?q=%23%E4%B8%B9%E9%BA%A6%E7%94%B7%E5%AD%90%E5%8D%96%E4%B8%AD%E5%9B%BD%E5%8C%85%E5%AD%90%E6%97%A5%E8%B5%9A%E8%B6%855%E4%B8%87%E5%85%83%23) `152.8K 🔥` `NEW`
1. [没认出这是陈妍希](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E8%AE%A4%E5%87%BA%E8%BF%99%E6%98%AF%E9%99%88%E5%A6%8D%E5%B8%8C%23) `152.1K 🔥` `NEW`
1. [医生回应年轻人开始喝大水](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%96%9D%E5%A4%A7%E6%B0%B4%23) `145.9K 🔥` `NEW`
1. [王安宇看到范丞丞差点被桌子砸的反应](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E7%9C%8B%E5%88%B0%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%B7%AE%E7%82%B9%E8%A2%AB%E6%A1%8C%E5%AD%90%E7%A0%B8%E7%9A%84%E5%8F%8D%E5%BA%94%23) `145.3K 🔥` `NEW`
1. [90岁奶奶自学照顾92岁患病老伴](https://s.weibo.com/weibo?q=%2390%E5%B2%81%E5%A5%B6%E5%A5%B6%E8%87%AA%E5%AD%A6%E7%85%A7%E9%A1%BE92%E5%B2%81%E6%82%A3%E7%97%85%E8%80%81%E4%BC%B4%23) `145.1K 🔥` `NEW`
1. [曹骏回应五公第一](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%9B%9E%E5%BA%94%E4%BA%94%E5%85%AC%E7%AC%AC%E4%B8%80%23) `138.0K 🔥` `NEW`
1. [邓凯方否认恋情](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E6%96%B9%E5%90%A6%E8%AE%A4%E6%81%8B%E6%83%85%23) `134.7K 🔥` `NEW`
1. [突然发现大家的穿商到了极致](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E5%A4%A7%E5%AE%B6%E7%9A%84%E7%A9%BF%E5%95%86%E5%88%B0%E4%BA%86%E6%9E%81%E8%87%B4%23) `133.1K 🔥` `NEW`
1. [月薪5000存款30万](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA5000%E5%AD%98%E6%AC%BE30%E4%B8%87%23) `132.8K 🔥` `NEW`
1. [嫁金钗口碑发酵](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%8F%A3%E7%A2%91%E5%8F%91%E9%85%B5%23) `237.2K 🔥` `+85%`
1. [国博问洛阳挖到什么了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8D%9A%E9%97%AE%E6%B4%9B%E9%98%B3%E6%8C%96%E5%88%B0%E4%BB%80%E4%B9%88%E4%BA%86%23) `213.9K 🔥` `+84%`
1. [徐艺洋弟弟发文](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E5%BC%9F%E5%BC%9F%E5%8F%91%E6%96%87%23) `225.7K 🔥`
1. [美颜突然关掉太恐怖了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%A2%9C%E7%AA%81%E7%84%B6%E5%85%B3%E6%8E%89%E5%A4%AA%E6%81%90%E6%80%96%E4%BA%86%23) `172.7K 🔥`
1. [人胖的时候感受不到自己胖](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E8%83%96%E7%9A%84%E6%97%B6%E5%80%99%E6%84%9F%E5%8F%97%E4%B8%8D%E5%88%B0%E8%87%AA%E5%B7%B1%E8%83%96%23) `221.0K 🔥` `-40%`
1. [重阳节](https://s.weibo.com/weibo?q=%23%E9%87%8D%E9%98%B3%E8%8A%82%23) `133.0K 🔥` `-49%`

Updated at 2026-10-18 12:44:32

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
