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

1. [智界V9上市售价39万至52万 (Zhijie V9 is launched with a price of 390,000 to 520,000)](https://s.weibo.com/weibo?q=%23%E6%99%BA%E7%95%8CV9%E4%B8%8A%E5%B8%82%E5%94%AE%E4%BB%B739%E4%B8%87%E8%87%B352%E4%B8%87%23) `621.5K 🔥` `NEW`
1. [碳水哥震撼中国人](https://s.weibo.com/weibo?q=%23%E7%A2%B3%E6%B0%B4%E5%93%A5%E9%9C%87%E6%92%BC%E4%B8%AD%E5%9B%BD%E4%BA%BA%23) `615.1K 🔥` `NEW`
1. [戛纳电影节中国之夜红毯](https://s.weibo.com/weibo?q=%23%E6%88%9B%E7%BA%B3%E7%94%B5%E5%BD%B1%E8%8A%82%E4%B8%AD%E5%9B%BD%E4%B9%8B%E5%A4%9C%E7%BA%A2%E6%AF%AF%23) `605.9K 🔥` `NEW`
1. [明星个人捐款名单](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E4%B8%AA%E4%BA%BA%E6%8D%90%E6%AC%BE%E5%90%8D%E5%8D%95%23) `512.0K 🔥` `NEW`
1. [徐璐 吴崇轩](https://s.weibo.com/weibo?q=%23%E5%BE%90%E7%92%90%20%E5%90%B4%E5%B4%87%E8%BD%A9%23) `498.3K 🔥` `NEW`
1. [孙颖莎王楚钦又一荣誉公示](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%88%E4%B8%80%E8%8D%A3%E8%AA%89%E5%85%AC%E7%A4%BA%23) `436.4K 🔥` `NEW`
1. [张凌赫Mai晚宴合照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%ABMai%E6%99%9A%E5%AE%B4%E5%90%88%E7%85%A7%23) `432.5K 🔥` `NEW`
1. [鞠婧祎 你被人鲨了但你是齐刘海](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%20%E4%BD%A0%E8%A2%AB%E4%BA%BA%E9%B2%A8%E4%BA%86%E4%BD%86%E4%BD%A0%E6%98%AF%E9%BD%90%E5%88%98%E6%B5%B7%23) `346.0K 🔥` `NEW`
1. [黄圣依叶一茜的孩子是同学](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%9C%A3%E4%BE%9D%E5%8F%B6%E4%B8%80%E8%8C%9C%E7%9A%84%E5%AD%A9%E5%AD%90%E6%98%AF%E5%90%8C%E5%AD%A6%23) `271.3K 🔥` `NEW`
1. [范丞丞也在吃跑男的瓜](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E4%B9%9F%E5%9C%A8%E5%90%83%E8%B7%91%E7%94%B7%E7%9A%84%E7%93%9C%23) `260.4K 🔥` `NEW`
1. [王者荣耀 (King of Glory)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `253.3K 🔥` `NEW`
1. [22人集体断供银行数千万贷款追不回](https://s.weibo.com/weibo?q=%2322%E4%BA%BA%E9%9B%86%E4%BD%93%E6%96%AD%E4%BE%9B%E9%93%B6%E8%A1%8C%E6%95%B0%E5%8D%83%E4%B8%87%E8%B4%B7%E6%AC%BE%E8%BF%BD%E4%B8%8D%E5%9B%9E%23) `239.6K 🔥` `NEW`
1. [姜乘澜给化妆新手的8条建议](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E7%BB%99%E5%8C%96%E5%A6%86%E6%96%B0%E6%89%8B%E7%9A%848%E6%9D%A1%E5%BB%BA%E8%AE%AE%23) `214.6K 🔥` `NEW`
1. [饭店喷水鱼获1000万网友围观](https://s.weibo.com/weibo?q=%23%E9%A5%AD%E5%BA%97%E5%96%B7%E6%B0%B4%E9%B1%BC%E8%8E%B71000%E4%B8%87%E7%BD%91%E5%8F%8B%E5%9B%B4%E8%A7%82%23) `191.5K 🔥` `NEW`
1. [歌手2026的首期歌单](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E7%9A%84%E9%A6%96%E6%9C%9F%E6%AD%8C%E5%8D%95%23) `184.7K 🔥` `NEW`
1. [马伊琍短发波点裙](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BC%8A%E7%90%8D%E7%9F%AD%E5%8F%91%E6%B3%A2%E7%82%B9%E8%A3%99%23) `175.3K 🔥` `NEW`
1. [终于懂慢食碗的意义了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%87%82%E6%85%A2%E9%A3%9F%E7%A2%97%E7%9A%84%E6%84%8F%E4%B9%89%E4%BA%86%23) `174.0K 🔥` `NEW`
1. [瓜农刺死城管案当事人继续种瓜谋生](https://s.weibo.com/weibo?q=%23%E7%93%9C%E5%86%9C%E5%88%BA%E6%AD%BB%E5%9F%8E%E7%AE%A1%E6%A1%88%E5%BD%93%E4%BA%8B%E4%BA%BA%E7%BB%A7%E7%BB%AD%E7%A7%8D%E7%93%9C%E8%B0%8B%E7%94%9F%23) `162.5K 🔥` `NEW`
1. [GEN对战T1](https://s.weibo.com/weibo?q=%23GEN%E5%AF%B9%E6%88%98T1%23) `146.3K 🔥` `NEW`
1. [刘雨昕个人捐款100万](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%A8%E6%98%95%E4%B8%AA%E4%BA%BA%E6%8D%90%E6%AC%BE100%E4%B8%87%23) `129.3K 🔥` `NEW`
1. [李昀锐白鹿跑男十指相扣 (Li Yunrui and White Deer Runner intertwined their fingers)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E7%99%BD%E9%B9%BF%E8%B7%91%E7%94%B7%E5%8D%81%E6%8C%87%E7%9B%B8%E6%89%A3%23) `618.7K 🔥` `+120%`
1. [这几类衣服普通人尽量不要买](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%87%A0%E7%B1%BB%E8%A1%A3%E6%9C%8D%E6%99%AE%E9%80%9A%E4%BA%BA%E5%B0%BD%E9%87%8F%E4%B8%8D%E8%A6%81%E4%B9%B0%23) `617.6K 🔥` `+166%`
1. [巨力索具股价](https://s.weibo.com/weibo?q=%23%E5%B7%A8%E5%8A%9B%E7%B4%A2%E5%85%B7%E8%82%A1%E4%BB%B7%23) `517.6K 🔥` `+179%`
1. [丧假 上传证明](https://s.weibo.com/weibo?q=%23%E4%B8%A7%E5%81%87%20%E4%B8%8A%E4%BC%A0%E8%AF%81%E6%98%8E%23) `512.4K 🔥` `+69%`
1. [宋浩然整成李佳琦了 (Song Haoran has been transformed into Li Jiaqi)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%B5%A9%E7%84%B6%E6%95%B4%E6%88%90%E6%9D%8E%E4%BD%B3%E7%90%A6%E4%BA%86%23) `507.5K 🔥` `+69%`
1. [特朗普抵达美国现场画面](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%B5%E8%BE%BE%E7%BE%8E%E5%9B%BD%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `504.6K 🔥` `+70%`
1. [房东发现女租客怀孕不让在家坐月子](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%9C%E5%8F%91%E7%8E%B0%E5%A5%B3%E7%A7%9F%E5%AE%A2%E6%80%80%E5%AD%95%E4%B8%8D%E8%AE%A9%E5%9C%A8%E5%AE%B6%E5%9D%90%E6%9C%88%E5%AD%90%23) `503.2K 🔥` `+72%`
1. [等等给孙俪买瑞士卷](https://s.weibo.com/weibo?q=%23%E7%AD%89%E7%AD%89%E7%BB%99%E5%AD%99%E4%BF%AA%E4%B9%B0%E7%91%9E%E5%A3%AB%E5%8D%B7%23) `498.1K 🔥` `+68%`
1. [女子穿着带有巨大吊牌旗袍街头拍照](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A9%BF%E7%9D%80%E5%B8%A6%E6%9C%89%E5%B7%A8%E5%A4%A7%E5%90%8A%E7%89%8C%E6%97%97%E8%A2%8D%E8%A1%97%E5%A4%B4%E6%8B%8D%E7%85%A7%23) `433.0K 🔥` `+49%`
1. [林俊杰个人捐款200万 (JJ Lin personally donated 2 million)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E4%B8%AA%E4%BA%BA%E6%8D%90%E6%AC%BE200%E4%B8%87%23) `430.8K 🔥` `+111%`
1. [歌手首发阵容 (Singer starting lineup)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E9%A6%96%E5%8F%91%E9%98%B5%E5%AE%B9%23) `1.1M 🔥`
1. [盲人女孩盲道被撞系自导自演](https://s.weibo.com/weibo?q=%23%E7%9B%B2%E4%BA%BA%E5%A5%B3%E5%AD%A9%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E7%B3%BB%E8%87%AA%E5%AF%BC%E8%87%AA%E6%BC%94%23) `800.6K 🔥`
1. [其实孩子在小时候已经报完恩了](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E5%AD%A9%E5%AD%90%E5%9C%A8%E5%B0%8F%E6%97%B6%E5%80%99%E5%B7%B2%E7%BB%8F%E6%8A%A5%E5%AE%8C%E6%81%A9%E4%BA%86%23) `604.9K 🔥`
1. [王一博个人捐款200万 (Wang Yibo personally donated 2 million)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B8%AA%E4%BA%BA%E6%8D%90%E6%AC%BE200%E4%B8%87%23) `344.7K 🔥`
1. [马嘉祺 风神 (Ma Jiaqi Fengshen)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%20%E9%A3%8E%E7%A5%9E%23) `311.5K 🔥`
1. [30岁女子健身房摔倒身亡 (30-year-old woman falls and dies in gym)](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%A5%B3%E5%AD%90%E5%81%A5%E8%BA%AB%E6%88%BF%E6%91%94%E5%80%92%E8%BA%AB%E4%BA%A1%23) `283.5K 🔥`
1. [万千惠乘风准冠军候选人](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E4%B9%98%E9%A3%8E%E5%87%86%E5%86%A0%E5%86%9B%E5%80%99%E9%80%89%E4%BA%BA%23) `251.7K 🔥`
1. [房东回应要求怀孕女租客搬走](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%9C%E5%9B%9E%E5%BA%94%E8%A6%81%E6%B1%82%E6%80%80%E5%AD%95%E5%A5%B3%E7%A7%9F%E5%AE%A2%E6%90%AC%E8%B5%B0%23) `239.0K 🔥`
1. [厌食症和饕餮转世小猫](https://s.weibo.com/weibo?q=%23%E5%8E%8C%E9%A3%9F%E7%97%87%E5%92%8C%E9%A5%95%E9%A4%AE%E8%BD%AC%E4%B8%96%E5%B0%8F%E7%8C%AB%23) `154.7K 🔥`
1. [深海人鱼公主迪丽热巴](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E6%B5%B7%E4%BA%BA%E9%B1%BC%E5%85%AC%E4%B8%BB%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `151.9K 🔥`
1. [白鹿基本上一个月只更新一条视频](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9F%BA%E6%9C%AC%E4%B8%8A%E4%B8%80%E4%B8%AA%E6%9C%88%E5%8F%AA%E6%9B%B4%E6%96%B0%E4%B8%80%E6%9D%A1%E8%A7%86%E9%A2%91%23) `145.1K 🔥`
1. [一季度数字产业实现收入9.5万亿元](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AD%A3%E5%BA%A6%E6%95%B0%E5%AD%97%E4%BA%A7%E4%B8%9A%E5%AE%9E%E7%8E%B0%E6%94%B6%E5%85%A59.5%E4%B8%87%E4%BA%BF%E5%85%83%23) `625.9K 🔥` `-37%`
1. [中方宣布普京访华日期 (China announces the date of Putin’s visit to China)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%AE%A3%E5%B8%83%E6%99%AE%E4%BA%AC%E8%AE%BF%E5%8D%8E%E6%97%A5%E6%9C%9F%23) `538.2K 🔥` `-50%`
1. [鹿晗五哈哭了](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E4%BA%94%E5%93%88%E5%93%AD%E4%BA%86%23) `517.7K 🔥` `-42%`
1. [王楚钦发博总结世乒赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%91%E5%8D%9A%E6%80%BB%E7%BB%93%E4%B8%96%E4%B9%92%E8%B5%9B%23) `353.0K 🔥` `-22%`
1. [多家酒店做不到床单一客一换](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E9%85%92%E5%BA%97%E5%81%9A%E4%B8%8D%E5%88%B0%E5%BA%8A%E5%8D%95%E4%B8%80%E5%AE%A2%E4%B8%80%E6%8D%A2%23) `324.0K 🔥` `-39%`
1. [金鹰奖提名神仙打架 (Golden Eagle Award Nominated Fairy Fight)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%E7%A5%9E%E4%BB%99%E6%89%93%E6%9E%B6%23) `245.5K 🔥` `-52%`
1. [虞书欣个人捐款70万](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%AA%E4%BA%BA%E6%8D%90%E6%AC%BE70%E4%B8%87%23) `200.5K 🔥` `-28%`
1. [中南大学帅出圈男生已保研同济大学](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%8D%97%E5%A4%A7%E5%AD%A6%E5%B8%85%E5%87%BA%E5%9C%88%E7%94%B7%E7%94%9F%E5%B7%B2%E4%BF%9D%E7%A0%94%E5%90%8C%E6%B5%8E%E5%A4%A7%E5%AD%A6%23) `153.0K 🔥` `-50%`
1. [原来不内耗的人是这样想的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E5%86%85%E8%80%97%E7%9A%84%E4%BA%BA%E6%98%AF%E8%BF%99%E6%A0%B7%E6%83%B3%E7%9A%84%23) `148.4K 🔥` `-22%`
1. [台密室逃脱员工扮吊死鬼身亡](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E5%AF%86%E5%AE%A4%E9%80%83%E8%84%B1%E5%91%98%E5%B7%A5%E6%89%AE%E5%90%8A%E6%AD%BB%E9%AC%BC%E8%BA%AB%E4%BA%A1%23) `147.8K 🔥` `-36%`
1. [算力网要来了](https://s.weibo.com/weibo?q=%23%E7%AE%97%E5%8A%9B%E7%BD%91%E8%A6%81%E6%9D%A5%E4%BA%86%23) `135.6K 🔥` `-26%`

Updated at 2026-05-16 17:56:49

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
