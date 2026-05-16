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

1. [歌手首发阵容 (Singer starting lineup)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E9%A6%96%E5%8F%91%E9%98%B5%E5%AE%B9%23) `3.9M 🔥` `NEW`
1. [多家酒店做不到床单一客一换](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E9%85%92%E5%BA%97%E5%81%9A%E4%B8%8D%E5%88%B0%E5%BA%8A%E5%8D%95%E4%B8%80%E5%AE%A2%E4%B8%80%E6%8D%A2%23) `1.6M 🔥` `NEW`
1. [开局之年看中国](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%80%E4%B9%8B%E5%B9%B4%E7%9C%8B%E4%B8%AD%E5%9B%BD%23) `912.4K 🔥` `NEW`
1. [百事巨星](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%BA%8B%E5%B7%A8%E6%98%9F%23) `861.4K 🔥` `NEW`
1. [金鹰奖提名神仙打架](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%E7%A5%9E%E4%BB%99%E6%89%93%E6%9E%B6%23) `810.4K 🔥` `NEW`
1. [隔夜蒜薹](https://s.weibo.com/weibo?q=%23%E9%9A%94%E5%A4%9C%E8%92%9C%E8%96%B9%23) `577.5K 🔥` `NEW`
1. [乐道L80双舱超级大五座24.28万起](https://s.weibo.com/weibo?q=%23%E4%B9%90%E9%81%93L80%E5%8F%8C%E8%88%B1%E8%B6%85%E7%BA%A7%E5%A4%A7%E4%BA%94%E5%BA%A724.28%E4%B8%87%E8%B5%B7%23) `506.5K 🔥` `NEW`
1. [盲人女孩盲道被撞系自导自演](https://s.weibo.com/weibo?q=%23%E7%9B%B2%E4%BA%BA%E5%A5%B3%E5%AD%A9%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E7%B3%BB%E8%87%AA%E5%AF%BC%E8%87%AA%E6%BC%94%23) `480.2K 🔥` `NEW`
1. [人民日报评摆拍盲道被撞事件](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E6%91%86%E6%8B%8D%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E4%BA%8B%E4%BB%B6%23) `406.0K 🔥` `NEW`
1. [房东发现女租客怀孕不让在家坐月子](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%9C%E5%8F%91%E7%8E%B0%E5%A5%B3%E7%A7%9F%E5%AE%A2%E6%80%80%E5%AD%95%E4%B8%8D%E8%AE%A9%E5%9C%A8%E5%AE%B6%E5%9D%90%E6%9C%88%E5%AD%90%23) `320.0K 🔥` `NEW`
1. [宋浩然整成李佳琦了 (Song Haoran has been transformed into Li Jiaqi)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%B5%A9%E7%84%B6%E6%95%B4%E6%88%90%E6%9D%8E%E4%BD%B3%E7%90%A6%E4%BA%86%23) `304.5K 🔥` `NEW`
1. [奔跑吧孟子义摸杆这段收视最高](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E5%AD%9F%E5%AD%90%E4%B9%89%E6%91%B8%E6%9D%86%E8%BF%99%E6%AE%B5%E6%94%B6%E8%A7%86%E6%9C%80%E9%AB%98%23) `293.4K 🔥` `NEW`
1. [上海电信推出1元25万Token套餐](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B5%E4%BF%A1%E6%8E%A8%E5%87%BA1%E5%85%8325%E4%B8%87Token%E5%A5%97%E9%A4%90%23) `280.4K 🔥` `NEW`
1. [国民男团代言国民品牌](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E6%B0%91%E7%94%B7%E5%9B%A2%E4%BB%A3%E8%A8%80%E5%9B%BD%E6%B0%91%E5%93%81%E7%89%8C%23) `279.6K 🔥` `NEW`
1. [男子花30万元领证21天后新娘跑了](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%8A%B130%E4%B8%87%E5%85%83%E9%A2%86%E8%AF%8121%E5%A4%A9%E5%90%8E%E6%96%B0%E5%A8%98%E8%B7%91%E4%BA%86%23) `279.2K 🔥` `NEW`
1. [保洁员回应手写千字辞职信走红](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%B4%81%E5%91%98%E5%9B%9E%E5%BA%94%E6%89%8B%E5%86%99%E5%8D%83%E5%AD%97%E8%BE%9E%E8%81%8C%E4%BF%A1%E8%B5%B0%E7%BA%A2%23) `277.7K 🔥` `NEW`
1. [王一博个人捐款200万](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B8%AA%E4%BA%BA%E6%8D%90%E6%AC%BE200%E4%B8%87%23) `277.6K 🔥` `NEW`
1. [女子穿着带有巨大吊牌旗袍街头拍照](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A9%BF%E7%9D%80%E5%B8%A6%E6%9C%89%E5%B7%A8%E5%A4%A7%E5%90%8A%E7%89%8C%E6%97%97%E8%A2%8D%E8%A1%97%E5%A4%B4%E6%8B%8D%E7%85%A7%23) `276.9K 🔥` `NEW`
1. [乘风2026主题曲](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%B8%BB%E9%A2%98%E6%9B%B2%23) `275.0K 🔥` `NEW`
1. [原来不内耗的人是这样想的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E5%86%85%E8%80%97%E7%9A%84%E4%BA%BA%E6%98%AF%E8%BF%99%E6%A0%B7%E6%83%B3%E7%9A%84%23) `267.2K 🔥` `NEW`
1. [何洁被叶一茜唱哭了 (He Jie was sung to tears by Ye Yiqian)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B4%81%E8%A2%AB%E5%8F%B6%E4%B8%80%E8%8C%9C%E5%94%B1%E5%93%AD%E4%BA%86%23) `266.2K 🔥` `NEW`
1. [马刺4比2淘汰森林狼](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BA4%E6%AF%942%E6%B7%98%E6%B1%B0%E6%A3%AE%E6%9E%97%E7%8B%BC%23) `228.4K 🔥` `NEW`
1. [深海人鱼公主迪丽热巴](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E6%B5%B7%E4%BA%BA%E9%B1%BC%E5%85%AC%E4%B8%BB%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `227.4K 🔥` `NEW`
1. [金饰克价年内大跌270元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E5%B9%B4%E5%86%85%E5%A4%A7%E8%B7%8C270%E5%85%83%23) `209.6K 🔥` `NEW`
1. [白鹿基本上一个月只更新一条视频](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9F%BA%E6%9C%AC%E4%B8%8A%E4%B8%80%E4%B8%AA%E6%9C%88%E5%8F%AA%E6%9B%B4%E6%96%B0%E4%B8%80%E6%9D%A1%E8%A7%86%E9%A2%91%23) `206.7K 🔥` `NEW`
1. [邓超发微博4347天了](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%8F%91%E5%BE%AE%E5%8D%9A4347%E5%A4%A9%E4%BA%86%23) `202.0K 🔥` `NEW`
1. [张凌赫 精英男本子](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E7%B2%BE%E8%8B%B1%E7%94%B7%E6%9C%AC%E5%AD%90%23) `173.3K 🔥` `NEW`
1. [歌手首发没有刘宪华](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E9%A6%96%E5%8F%91%E6%B2%A1%E6%9C%89%E5%88%98%E5%AE%AA%E5%8D%8E%23) `169.0K 🔥` `NEW`
1. [中方呼吁各国撤回海外部署的核武器](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%91%BC%E5%90%81%E5%90%84%E5%9B%BD%E6%92%A4%E5%9B%9E%E6%B5%B7%E5%A4%96%E9%83%A8%E7%BD%B2%E7%9A%84%E6%A0%B8%E6%AD%A6%E5%99%A8%23) `165.8K 🔥` `NEW`
1. [特朗普说伊斯兰国二号头目被清除](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%BC%8A%E6%96%AF%E5%85%B0%E5%9B%BD%E4%BA%8C%E5%8F%B7%E5%A4%B4%E7%9B%AE%E8%A2%AB%E6%B8%85%E9%99%A4%23) `164.3K 🔥` `NEW`
1. [张予曦怎么又瘦了 (Why did Zhang Yuxi lose weight again?)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E6%80%8E%E4%B9%88%E5%8F%88%E7%98%A6%E4%BA%86%23) `159.7K 🔥` `NEW`
1. [刘雨昕跑男首秀](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%A8%E6%98%95%E8%B7%91%E7%94%B7%E9%A6%96%E7%A7%80%23) `136.1K 🔥` `NEW`
1. [F勒布伦说王楚钦是国乒的巨大优势](https://s.weibo.com/weibo?q=%23F%E5%8B%92%E5%B8%83%E4%BC%A6%E8%AF%B4%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%98%AF%E5%9B%BD%E4%B9%92%E7%9A%84%E5%B7%A8%E5%A4%A7%E4%BC%98%E5%8A%BF%23) `132.6K 🔥` `NEW`
1. [张碧晨的同学被男明星讨论](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E7%9A%84%E5%90%8C%E5%AD%A6%E8%A2%AB%E7%94%B7%E6%98%8E%E6%98%9F%E8%AE%A8%E8%AE%BA%23) `439.3K 🔥` `+103%`
1. [算力网要来了](https://s.weibo.com/weibo?q=%23%E7%AE%97%E5%8A%9B%E7%BD%91%E8%A6%81%E6%9D%A5%E4%BA%86%23) `332.4K 🔥` `+30%`
1. [台密室逃脱员工扮吊死鬼身亡](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E5%AF%86%E5%AE%A4%E9%80%83%E8%84%B1%E5%91%98%E5%B7%A5%E6%89%AE%E5%90%8A%E6%AD%BB%E9%AC%BC%E8%BA%AB%E4%BA%A1%23) `290.5K 🔥` `+21%`
1. [金价跌麻了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E9%BA%BB%E4%BA%86%23) `275.7K 🔥`
1. [薛之谦也被盲道摆拍骗了](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%B9%9F%E8%A2%AB%E7%9B%B2%E9%81%93%E6%91%86%E6%8B%8D%E9%AA%97%E4%BA%86%23) `274.3K 🔥`
1. [爷爷支持打消毛巾少爷顾虑](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E6%94%AF%E6%8C%81%E6%89%93%E6%B6%88%E6%AF%9B%E5%B7%BE%E5%B0%91%E7%88%B7%E9%A1%BE%E8%99%91%23) `273.2K 🔥`
1. [热依扎疑似回应二胎](https://s.weibo.com/weibo?q=%23%E7%83%AD%E4%BE%9D%E6%89%8E%E7%96%91%E4%BC%BC%E5%9B%9E%E5%BA%94%E4%BA%8C%E8%83%8E%23) `272.4K 🔥`
1. [给阿嬷的情书进入2026年度票房榜前十 (A Love Letter to Grandma Enters Top 10 Box Office List of 2026)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E8%BF%9B%E5%85%A52026%E5%B9%B4%E5%BA%A6%E7%A5%A8%E6%88%BF%E6%A6%9C%E5%89%8D%E5%8D%81%23) `271.8K 🔥`
1. [中南大学帅出圈男生已保研同济大学](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%8D%97%E5%A4%A7%E5%AD%A6%E5%B8%85%E5%87%BA%E5%9C%88%E7%94%B7%E7%94%9F%E5%B7%B2%E4%BF%9D%E7%A0%94%E5%90%8C%E6%B5%8E%E5%A4%A7%E5%AD%A6%23) `579.7K 🔥` `-32%`
1. [特朗普抵达美国现场画面](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%B5%E8%BE%BE%E7%BE%8E%E5%9B%BD%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `330.7K 🔥` `-31%`
1. [牛冠凯宣布结婚 (Niu Guankai announces marriage)](https://s.weibo.com/weibo?q=%23%E7%89%9B%E5%86%A0%E5%87%AF%E5%AE%A3%E5%B8%83%E7%BB%93%E5%A9%9A%23) `281.1K 🔥` `-40%`
1. [白鹿卢昱晓 短视频营业 (Bailu Lu Yuxiao short video business)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8D%A2%E6%98%B1%E6%99%93%20%E7%9F%AD%E8%A7%86%E9%A2%91%E8%90%A5%E4%B8%9A%23) `256.6K 🔥` `-46%`
1. [小鹿 九尾](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%BF%20%E4%B9%9D%E5%B0%BE%23) `254.7K 🔥` `-52%`
1. [英伟达跌4%](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E8%B7%8C4%25%23) `176.8K 🔥` `-62%`
1. [警方通报女孩盲道被撞事件](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%A9%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E4%BA%8B%E4%BB%B6%23) `166.7K 🔥` `-79%`
1. [奔跑吧14收视率创新高](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A714%E6%94%B6%E8%A7%86%E7%8E%87%E5%88%9B%E6%96%B0%E9%AB%98%23) `165.5K 🔥` `-77%`
1. [任敏董思成10岁就认识了](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E8%91%A3%E6%80%9D%E6%88%9010%E5%B2%81%E5%B0%B1%E8%AE%A4%E8%AF%86%E4%BA%86%23) `165.4K 🔥` `-27%`
1. [方媛对自己的人生比较满意](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E5%AF%B9%E8%87%AA%E5%B7%B1%E7%9A%84%E4%BA%BA%E7%94%9F%E6%AF%94%E8%BE%83%E6%BB%A1%E6%84%8F%23) `163.3K 🔥` `-62%`
1. [微信捐赠第一行代码](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%8D%90%E8%B5%A0%E7%AC%AC%E4%B8%80%E8%A1%8C%E4%BB%A3%E7%A0%81%23) `147.0K 🔥` `-42%`

Updated at 2026-05-16 14:30:37

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
