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

1. [美国全国爆发反对特朗普政府集会 (Rallies against Trump administration erupt across U.S.)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%85%A8%E5%9B%BD%E7%88%86%E5%8F%91%E5%8F%8D%E5%AF%B9%E7%89%B9%E6%9C%97%E6%99%AE%E6%94%BF%E5%BA%9C%E9%9B%86%E4%BC%9A%23) `1.1M 🔥` `NEW`
1. [美国1000人包围政府机构大楼](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD1000%E4%BA%BA%E5%8C%85%E5%9B%B4%E6%94%BF%E5%BA%9C%E6%9C%BA%E6%9E%84%E5%A4%A7%E6%A5%BC%23) `832.8K 🔥` `NEW`
1. [大国重器密集上新惊喜不断](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%9B%BD%E9%87%8D%E5%99%A8%E5%AF%86%E9%9B%86%E4%B8%8A%E6%96%B0%E6%83%8A%E5%96%9C%E4%B8%8D%E6%96%AD%23) `632.0K 🔥` `NEW`
1. [杨紫说自己来乘风是拆台的](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%AF%B4%E8%87%AA%E5%B7%B1%E6%9D%A5%E4%B9%98%E9%A3%8E%E6%98%AF%E6%8B%86%E5%8F%B0%E7%9A%84%23) `333.0K 🔥` `NEW`
1. [万斯获美共和党保守派阵营过半支持](https://s.weibo.com/weibo?q=%23%E4%B8%87%E6%96%AF%E8%8E%B7%E7%BE%8E%E5%85%B1%E5%92%8C%E5%85%9A%E4%BF%9D%E5%AE%88%E6%B4%BE%E9%98%B5%E8%90%A5%E8%BF%87%E5%8D%8A%E6%94%AF%E6%8C%81%23) `258.9K 🔥` `NEW`
1. [当你吃了一整天健康食物](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E5%90%83%E4%BA%86%E4%B8%80%E6%95%B4%E5%A4%A9%E5%81%A5%E5%BA%B7%E9%A3%9F%E7%89%A9%23) `247.8K 🔥` `NEW`
1. [黄浦半马万人外滩起跑](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B5%A6%E5%8D%8A%E9%A9%AC%E4%B8%87%E4%BA%BA%E5%A4%96%E6%BB%A9%E8%B5%B7%E8%B7%91%23) `239.4K 🔥` `NEW`
1. [张凌赫素颜顺毛路透](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%B4%A0%E9%A2%9C%E9%A1%BA%E6%AF%9B%E8%B7%AF%E9%80%8F%23) `211.3K 🔥` `NEW`
1. [深夜遇哭泣女子带其回家遭仙人跳](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%A4%9C%E9%81%87%E5%93%AD%E6%B3%A3%E5%A5%B3%E5%AD%90%E5%B8%A6%E5%85%B6%E5%9B%9E%E5%AE%B6%E9%81%AD%E4%BB%99%E4%BA%BA%E8%B7%B3%23) `191.6K 🔥` `NEW`
1. [全红婵称床上摆满了乌龟玩偶](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E7%A7%B0%E5%BA%8A%E4%B8%8A%E6%91%86%E6%BB%A1%E4%BA%86%E4%B9%8C%E9%BE%9F%E7%8E%A9%E5%81%B6%23) `163.9K 🔥` `NEW`
1. [逐玉 庆功宴 (Zhuyu Celebration Banquet)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `163.6K 🔥` `NEW`
1. [长期不吃主食身体的8个变化](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%B8%8D%E5%90%83%E4%B8%BB%E9%A3%9F%E8%BA%AB%E4%BD%93%E7%9A%848%E4%B8%AA%E5%8F%98%E5%8C%96%23) `161.4K 🔥` `NEW`
1. [太原火灾最先起火视频曝光](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E7%81%AB%E7%81%BE%E6%9C%80%E5%85%88%E8%B5%B7%E7%81%AB%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `160.3K 🔥` `NEW`
1. [汪苏泷祝福徐良](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E7%A5%9D%E7%A6%8F%E5%BE%90%E8%89%AF%23) `158.8K 🔥` `NEW`
1. [猫的偷窥欲](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%9A%84%E5%81%B7%E7%AA%A5%E6%AC%B2%23) `156.2K 🔥` `NEW`
1. [男孩玩灭火毯全身扎满超细玻璃纤维](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E7%8E%A9%E7%81%AD%E7%81%AB%E6%AF%AF%E5%85%A8%E8%BA%AB%E6%89%8E%E6%BB%A1%E8%B6%85%E7%BB%86%E7%8E%BB%E7%92%83%E7%BA%A4%E7%BB%B4%23) `154.2K 🔥` `NEW`
1. [美民众说反对美国正在发生的事](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%B0%91%E4%BC%97%E8%AF%B4%E5%8F%8D%E5%AF%B9%E7%BE%8E%E5%9B%BD%E6%AD%A3%E5%9C%A8%E5%8F%91%E7%94%9F%E7%9A%84%E4%BA%8B%23) `152.2K 🔥` `NEW`
1. [扬马赛道惊现戏精陪跑搭子](https://s.weibo.com/weibo?q=%23%E6%89%AC%E9%A9%AC%E8%B5%9B%E9%81%93%E6%83%8A%E7%8E%B0%E6%88%8F%E7%B2%BE%E9%99%AA%E8%B7%91%E6%90%AD%E5%AD%90%23) `148.9K 🔥` `NEW`
1. [曝女顶流被公司索赔3亿解约费](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A5%B3%E9%A1%B6%E6%B5%81%E8%A2%AB%E5%85%AC%E5%8F%B8%E7%B4%A2%E8%B5%943%E4%BA%BF%E8%A7%A3%E7%BA%A6%E8%B4%B9%23) `148.6K 🔥` `NEW`
1. [愚公生的是你俩山早移走了](https://s.weibo.com/weibo?q=%23%E6%84%9A%E5%85%AC%E7%94%9F%E7%9A%84%E6%98%AF%E4%BD%A0%E4%BF%A9%E5%B1%B1%E6%97%A9%E7%A7%BB%E8%B5%B0%E4%BA%86%23) `147.0K 🔥` `NEW`
1. [感觉型人格 (Sensing personality)](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E5%9E%8B%E4%BA%BA%E6%A0%BC%23) `131.4K 🔥` `NEW`
1. [熬夜致瘫大学生家属发声](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E8%87%B4%E7%98%AB%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `122.0K 🔥` `NEW`
1. [男子一想抽烟就买彩票中了701万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%80%E6%83%B3%E6%8A%BD%E7%83%9F%E5%B0%B1%E4%B9%B0%E5%BD%A9%E7%A5%A8%E4%B8%AD%E4%BA%86701%E4%B8%87%23) `120.4K 🔥` `NEW`
1. [浪姐7初舞台选歌](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%907%E5%88%9D%E8%88%9E%E5%8F%B0%E9%80%89%E6%AD%8C%23) `112.5K 🔥` `NEW`
1. [被雷军回复网友已购入小米新SU7](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%A4%8D%E7%BD%91%E5%8F%8B%E5%B7%B2%E8%B4%AD%E5%85%A5%E5%B0%8F%E7%B1%B3%E6%96%B0SU7%23) `97.5K 🔥` `NEW`
1. [东西部前十全部确定](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%A5%BF%E9%83%A8%E5%89%8D%E5%8D%81%E5%85%A8%E9%83%A8%E7%A1%AE%E5%AE%9A%23) `85.9K 🔥` `NEW`
1. [洪秀柱重申中国必须统一](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E7%A7%80%E6%9F%B1%E9%87%8D%E7%94%B3%E4%B8%AD%E5%9B%BD%E5%BF%85%E9%A1%BB%E7%BB%9F%E4%B8%80%23) `85.7K 🔥` `NEW`
1. [李维嘉和何老师吵架的原因](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BB%B4%E5%98%89%E5%92%8C%E4%BD%95%E8%80%81%E5%B8%88%E5%90%B5%E6%9E%B6%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `84.7K 🔥` `NEW`
1. [樊振东3比0战胜对方主教练](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C3%E6%AF%940%E6%88%98%E8%83%9C%E5%AF%B9%E6%96%B9%E4%B8%BB%E6%95%99%E7%BB%83%23) `78.5K 🔥` `NEW`
1. [白日提灯首日百指13万](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E9%A6%96%E6%97%A5%E7%99%BE%E6%8C%8713%E4%B8%87%23) `78.4K 🔥` `NEW`
1. [霍尔木兹海峡堵的不只是油 (The Strait of Hormuz is blocked by more than just oil)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%A0%B5%E7%9A%84%E4%B8%8D%E5%8F%AA%E6%98%AF%E6%B2%B9%23) `78.4K 🔥` `NEW`
1. [马杜罗社交媒体账号发文](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%9C%E7%BD%97%E7%A4%BE%E4%BA%A4%E5%AA%92%E4%BD%93%E8%B4%A6%E5%8F%B7%E5%8F%91%E6%96%87%23) `75.0K 🔥` `NEW`
1. [当代人对豆包的依赖程度](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BB%A3%E4%BA%BA%E5%AF%B9%E8%B1%86%E5%8C%85%E7%9A%84%E4%BE%9D%E8%B5%96%E7%A8%8B%E5%BA%A6%23) `72.1K 🔥` `NEW`
1. [97岁奶奶美甲照](https://s.weibo.com/weibo?q=%2397%E5%B2%81%E5%A5%B6%E5%A5%B6%E7%BE%8E%E7%94%B2%E7%85%A7%23) `71.8K 🔥` `NEW`
1. [张慧雯被接机缺氧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E8%A2%AB%E6%8E%A5%E6%9C%BA%E7%BC%BA%E6%B0%A7%23) `70.0K 🔥` `NEW`
1. [伊朗警告将强力报复](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AD%A6%E5%91%8A%E5%B0%86%E5%BC%BA%E5%8A%9B%E6%8A%A5%E5%A4%8D%23) `69.3K 🔥` `NEW`
1. [人类首次成功运输反物质](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E9%A6%96%E6%AC%A1%E6%88%90%E5%8A%9F%E8%BF%90%E8%BE%93%E5%8F%8D%E7%89%A9%E8%B4%A8%23) `69.0K 🔥` `NEW`
1. [王俊凯蹦迪版心引力 (Wang Junkai disco version of gravity)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%B9%A6%E8%BF%AA%E7%89%88%E5%BF%83%E5%BC%95%E5%8A%9B%23) `87.3K 🔥` `+122%`
1. [严浩翔上线](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E4%B8%8A%E7%BA%BF%23) `79.2K 🔥`
1. [鞠婧祎浴室歌手来舞台了](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%B5%B4%E5%AE%A4%E6%AD%8C%E6%89%8B%E6%9D%A5%E8%88%9E%E5%8F%B0%E4%BA%86%23) `72.5K 🔥`
1. [官方通报申请国家赔偿被中止办理](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B3%E8%AF%B7%E5%9B%BD%E5%AE%B6%E8%B5%94%E5%81%BF%E8%A2%AB%E4%B8%AD%E6%AD%A2%E5%8A%9E%E7%90%86%23) `172.1K 🔥` `-57%`
1. [何老师维嘉好六哭了 (Teacher He Weijia cried for six months)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%80%81%E5%B8%88%E7%BB%B4%E5%98%89%E5%A5%BD%E5%85%AD%E5%93%AD%E4%BA%86%23) `157.3K 🔥` `-73%`
1. [删除汪苏泷名字让徐良又生气又煎熬](https://s.weibo.com/weibo?q=%23%E5%88%A0%E9%99%A4%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%90%8D%E5%AD%97%E8%AE%A9%E5%BE%90%E8%89%AF%E5%8F%88%E7%94%9F%E6%B0%94%E5%8F%88%E7%85%8E%E7%86%AC%23) `151.6K 🔥` `-59%`
1. [太原火灾已致3死23伤](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E7%81%AB%E7%81%BE%E5%B7%B2%E8%87%B43%E6%AD%BB23%E4%BC%A4%23) `132.6K 🔥` `-63%`
1. [王俊凯回应拿错奖杯了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%9B%9E%E5%BA%94%E6%8B%BF%E9%94%99%E5%A5%96%E6%9D%AF%E4%BA%86%23) `116.8K 🔥` `-42%`
1. [1米85的小学生开口要一套宝可梦卡 (A 1.85 meter primary school student asked for a set of Pokémon cards)](https://s.weibo.com/weibo?q=%231%E7%B1%B385%E7%9A%84%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%BC%80%E5%8F%A3%E8%A6%81%E4%B8%80%E5%A5%97%E5%AE%9D%E5%8F%AF%E6%A2%A6%E5%8D%A1%23) `96.8K 🔥` `-39%`
1. [油价又飙升了 (Oil prices soar again)](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E5%8F%88%E9%A3%99%E5%8D%87%E4%BA%86%23) `90.2K 🔥` `-47%`
1. [女子半年没回家卧室开窗变邻居阳台](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8D%8A%E5%B9%B4%E6%B2%A1%E5%9B%9E%E5%AE%B6%E5%8D%A7%E5%AE%A4%E5%BC%80%E7%AA%97%E5%8F%98%E9%82%BB%E5%B1%85%E9%98%B3%E5%8F%B0%23) `78.4K 🔥` `-94%`
1. [婴儿险窒息爸爸玩手机近1分钟未发觉](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E9%99%A9%E7%AA%92%E6%81%AF%E7%88%B8%E7%88%B8%E7%8E%A9%E6%89%8B%E6%9C%BA%E8%BF%911%E5%88%86%E9%92%9F%E6%9C%AA%E5%8F%91%E8%A7%89%23) `78.4K 🔥` `-70%`
1. [伊朗警告袭击地区内美以大学](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AD%A6%E5%91%8A%E8%A2%AD%E5%87%BB%E5%9C%B0%E5%8C%BA%E5%86%85%E7%BE%8E%E4%BB%A5%E5%A4%A7%E5%AD%A6%23) `71.5K 🔥` `-71%`
1. [站姐愚人节团建预告 (Zhanjie’s April Fool’s Day Team Building Preview)](https://s.weibo.com/weibo?q=%23%E7%AB%99%E5%A7%90%E6%84%9A%E4%BA%BA%E8%8A%82%E5%9B%A2%E5%BB%BA%E9%A2%84%E5%91%8A%23) `68.5K 🔥` `-23%`

Updated at 2026-03-29 12:11:33

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
