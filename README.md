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

1. [男子将拆迁房给继子起诉女儿要赡养费](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B0%86%E6%8B%86%E8%BF%81%E6%88%BF%E7%BB%99%E7%BB%A7%E5%AD%90%E8%B5%B7%E8%AF%89%E5%A5%B3%E5%84%BF%E8%A6%81%E8%B5%A1%E5%85%BB%E8%B4%B9%23) `142.1K 🔥` `NEW`
1. [黄子韬夫妇否认怀孕被指消耗信任](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%A4%AB%E5%A6%87%E5%90%A6%E8%AE%A4%E6%80%80%E5%AD%95%E8%A2%AB%E6%8C%87%E6%B6%88%E8%80%97%E4%BF%A1%E4%BB%BB%23) `139.7K 🔥` `NEW`
1. [协和专家称存肌肉越早越好](https://s.weibo.com/weibo?q=%23%E5%8D%8F%E5%92%8C%E4%B8%93%E5%AE%B6%E7%A7%B0%E5%AD%98%E8%82%8C%E8%82%89%E8%B6%8A%E6%97%A9%E8%B6%8A%E5%A5%BD%23) `133.1K 🔥` `NEW`
1. [徐艺洋产后身材恢复](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E4%BA%A7%E5%90%8E%E8%BA%AB%E6%9D%90%E6%81%A2%E5%A4%8D%23) `133.1K 🔥` `NEW`
1. [爸爸玩耍误伤熟睡婴儿额头划出血痕](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E7%8E%A9%E8%80%8D%E8%AF%AF%E4%BC%A4%E7%86%9F%E7%9D%A1%E5%A9%B4%E5%84%BF%E9%A2%9D%E5%A4%B4%E5%88%92%E5%87%BA%E8%A1%80%E7%97%95%23) `133.0K 🔥` `NEW`
1. [李亚鹏4岁女儿身高120](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BA%9A%E9%B9%8F4%E5%B2%81%E5%A5%B3%E5%84%BF%E8%BA%AB%E9%AB%98120%23) `133.0K 🔥` `NEW`
1. [黄金白银暴跌又暴涨](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E6%9A%B4%E8%B7%8C%E5%8F%88%E6%9A%B4%E6%B6%A8%23) `133.0K 🔥` `NEW`
1. [面包车司机回应别停失控轿车](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E5%8C%85%E8%BD%A6%E5%8F%B8%E6%9C%BA%E5%9B%9E%E5%BA%94%E5%88%AB%E5%81%9C%E5%A4%B1%E6%8E%A7%E8%BD%BF%E8%BD%A6%23) `132.9K 🔥` `NEW`
1. [山涧狸花猫像从古画中跑出来的](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E6%B6%A7%E7%8B%B8%E8%8A%B1%E7%8C%AB%E5%83%8F%E4%BB%8E%E5%8F%A4%E7%94%BB%E4%B8%AD%E8%B7%91%E5%87%BA%E6%9D%A5%E7%9A%84%23) `132.9K 🔥` `NEW`
1. [女子苹果卡嘴里急忙去医院求助](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%8B%B9%E6%9E%9C%E5%8D%A1%E5%98%B4%E9%87%8C%E6%80%A5%E5%BF%99%E5%8E%BB%E5%8C%BB%E9%99%A2%E6%B1%82%E5%8A%A9%23) `132.9K 🔥` `NEW`
1. [瑜伽裤糖葫芦能火多久](https://s.weibo.com/weibo?q=%23%E7%91%9C%E4%BC%BD%E8%A3%A4%E7%B3%96%E8%91%AB%E8%8A%A6%E8%83%BD%E7%81%AB%E5%A4%9A%E4%B9%85%23) `132.9K 🔥` `NEW`
1. [深圳全市全天禁鸣喇叭5年](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%85%A8%E5%B8%82%E5%85%A8%E5%A4%A9%E7%A6%81%E9%B8%A3%E5%96%87%E5%8F%AD5%E5%B9%B4%23) `662.8K 🔥` `+317%`
1. [大龄读研见老师两面就退学](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BE%84%E8%AF%BB%E7%A0%94%E8%A7%81%E8%80%81%E5%B8%88%E4%B8%A4%E9%9D%A2%E5%B0%B1%E9%80%80%E5%AD%A6%23) `471.1K 🔥` `+411%`
1. [起初他们参加红军只为找条活路](https://s.weibo.com/weibo?q=%23%E8%B5%B7%E5%88%9D%E4%BB%96%E4%BB%AC%E5%8F%82%E5%8A%A0%E7%BA%A2%E5%86%9B%E5%8F%AA%E4%B8%BA%E6%89%BE%E6%9D%A1%E6%B4%BB%E8%B7%AF%23) `374.9K 🔥` `+347%`
1. [马丽喊你来京东双十一0元换新](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%B8%BD%E5%96%8A%E4%BD%A0%E6%9D%A5%E4%BA%AC%E4%B8%9C%E5%8F%8C%E5%8D%81%E4%B8%800%E5%85%83%E6%8D%A2%E6%96%B0%23) `343.9K 🔥` `+317%`
1. [曝李昀锐去hi6接孟子义下班](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E6%98%80%E9%94%90%E5%8E%BBhi6%E6%8E%A5%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%8B%E7%8F%AD%23) `260.2K 🔥` `+232%`
1. [AI射雕英雄传看起来比人演的好](https://s.weibo.com/weibo?q=%23AI%E5%B0%84%E9%9B%95%E8%8B%B1%E9%9B%84%E4%BC%A0%E7%9C%8B%E8%B5%B7%E6%9D%A5%E6%AF%94%E4%BA%BA%E6%BC%94%E7%9A%84%E5%A5%BD%23) `247.9K 🔥` `+309%`
1. [影视飓风Tim父亲任董事长](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8ETim%E7%88%B6%E4%BA%B2%E4%BB%BB%E8%91%A3%E4%BA%8B%E9%95%BF%23) `194.8K 🔥` `+264%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `188.4K 🔥` `+252%`
1. [为何年轻人不爱去菜市场](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BD%95%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%8D%E7%88%B1%E5%8E%BB%E8%8F%9C%E5%B8%82%E5%9C%BA%23) `147.9K 🔥` `+176%`
1. [尚公主](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%23) `147.8K 🔥` `+177%`
1. [衣衫不整男孩姥姥发声](https://s.weibo.com/weibo?q=%23%E8%A1%A3%E8%A1%AB%E4%B8%8D%E6%95%B4%E7%94%B7%E5%AD%A9%E5%A7%A5%E5%A7%A5%E5%8F%91%E5%A3%B0%23) `145.9K 🔥` `+173%`
1. [黄子韬谈妻子生理期细节被质疑](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E8%B0%88%E5%A6%BB%E5%AD%90%E7%94%9F%E7%90%86%E6%9C%9F%E7%BB%86%E8%8A%82%E8%A2%AB%E8%B4%A8%E7%96%91%23) `145.0K 🔥` `+171%`
1. [央企中建七局拖欠农民工工资](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E4%BC%81%E4%B8%AD%E5%BB%BA%E4%B8%83%E5%B1%80%E6%8B%96%E6%AC%A0%E5%86%9C%E6%B0%91%E5%B7%A5%E5%B7%A5%E8%B5%84%23) `144.1K 🔥` `+169%`
1. [杨和苏公开女友](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%92%8C%E8%8B%8F%E5%85%AC%E5%BC%80%E5%A5%B3%E5%8F%8B%23) `142.7K 🔥` `+146%`
1. [曝明星私生子高额抚养费判决书](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%98%8E%E6%98%9F%E7%A7%81%E7%94%9F%E5%AD%90%E9%AB%98%E9%A2%9D%E6%8A%9A%E5%85%BB%E8%B4%B9%E5%88%A4%E5%86%B3%E4%B9%A6%23) `141.1K 🔥` `+164%`
1. [TES经理回应ZUIAN签证问题](https://s.weibo.com/weibo?q=%23TES%E7%BB%8F%E7%90%86%E5%9B%9E%E5%BA%94ZUIAN%E7%AD%BE%E8%AF%81%E9%97%AE%E9%A2%98%23) `138.3K 🔥` `+159%`
1. [70岁老人身亡亲属曾商议让其喝农药](https://s.weibo.com/weibo?q=%2370%E5%B2%81%E8%80%81%E4%BA%BA%E8%BA%AB%E4%BA%A1%E4%BA%B2%E5%B1%9E%E6%9B%BE%E5%95%86%E8%AE%AE%E8%AE%A9%E5%85%B6%E5%96%9D%E5%86%9C%E8%8D%AF%23) `137.1K 🔥` `+156%`
1. [乔任梁离世前连续20天无法入睡](https://s.weibo.com/weibo?q=%23%E4%B9%94%E4%BB%BB%E6%A2%81%E7%A6%BB%E4%B8%96%E5%89%8D%E8%BF%9E%E7%BB%AD20%E5%A4%A9%E6%97%A0%E6%B3%95%E5%85%A5%E7%9D%A1%23) `136.2K 🔥` `+155%`
1. [阿布扎比王妃吸毒昏倒街头忽视幼童](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%B8%83%E6%89%8E%E6%AF%94%E7%8E%8B%E5%A6%83%E5%90%B8%E6%AF%92%E6%98%8F%E5%80%92%E8%A1%97%E5%A4%B4%E5%BF%BD%E8%A7%86%E5%B9%BC%E7%AB%A5%23) `134.8K 🔥` `+153%`
1. [徐艺洋24年6月的肚子](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B24%E5%B9%B46%E6%9C%88%E7%9A%84%E8%82%9A%E5%AD%90%23) `134.0K 🔥` `+127%`
1. [不要和攻击性强的人建立关系](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%92%8C%E6%94%BB%E5%87%BB%E6%80%A7%E5%BC%BA%E7%9A%84%E4%BA%BA%E5%BB%BA%E7%AB%8B%E5%85%B3%E7%B3%BB%23) `133.2K 🔥` `+149%`
1. [被年轻人的装修惊呆了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E8%A3%85%E4%BF%AE%E6%83%8A%E5%91%86%E4%BA%86%23) `133.2K 🔥` `+149%`
1. [隐性高糖的十个信号](https://s.weibo.com/weibo?q=%23%E9%9A%90%E6%80%A7%E9%AB%98%E7%B3%96%E7%9A%84%E5%8D%81%E4%B8%AA%E4%BF%A1%E5%8F%B7%23) `133.1K 🔥` `+149%`
1. [女子撞见朋友老公与另一女子亲密](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%92%9E%E8%A7%81%E6%9C%8B%E5%8F%8B%E8%80%81%E5%85%AC%E4%B8%8E%E5%8F%A6%E4%B8%80%E5%A5%B3%E5%AD%90%E4%BA%B2%E5%AF%86%23) `133.1K 🔥` `+149%`
1. [李昀锐哄孟子义拍照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%93%84%E5%AD%9F%E5%AD%90%E4%B9%89%E6%8B%8D%E7%85%A7%23) `133.1K 🔥` `+149%`
1. [李嘉诚最新动态](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E8%AF%9A%E6%9C%80%E6%96%B0%E5%8A%A8%E6%80%81%23) `133.1K 🔥` `+149%`
1. [狗狗撒娇让网球颁奖暂停](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E6%92%92%E5%A8%87%E8%AE%A9%E7%BD%91%E7%90%83%E9%A2%81%E5%A5%96%E6%9A%82%E5%81%9C%23) `133.1K 🔥` `+149%`
1. [周迅釜山电影节影后](https://s.weibo.com/weibo?q=%23%E5%91%A8%E8%BF%85%E9%87%9C%E5%B1%B1%E7%94%B5%E5%BD%B1%E8%8A%82%E5%BD%B1%E5%90%8E%23) `133.0K 🔥` `+149%`
1. [小S说二女儿私下也很像林志玲](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E8%AF%B4%E4%BA%8C%E5%A5%B3%E5%84%BF%E7%A7%81%E4%B8%8B%E4%B9%9F%E5%BE%88%E5%83%8F%E6%9E%97%E5%BF%97%E7%8E%B2%23) `133.0K 🔥` `+149%`
1. [好婚姻靠主动不给自己犯错机会](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A9%9A%E5%A7%BB%E9%9D%A0%E4%B8%BB%E5%8A%A8%E4%B8%8D%E7%BB%99%E8%87%AA%E5%B7%B1%E7%8A%AF%E9%94%99%E6%9C%BA%E4%BC%9A%23) `133.0K 🔥` `+149%`
1. [乔任梁去世前1天与家人过中秋节](https://s.weibo.com/weibo?q=%23%E4%B9%94%E4%BB%BB%E6%A2%81%E5%8E%BB%E4%B8%96%E5%89%8D1%E5%A4%A9%E4%B8%8E%E5%AE%B6%E4%BA%BA%E8%BF%87%E4%B8%AD%E7%A7%8B%E8%8A%82%23) `133.0K 🔥` `+149%`
1. [金价直线反弹原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E7%9B%B4%E7%BA%BF%E5%8F%8D%E5%BC%B9%E5%8E%9F%E5%9B%A0%23) `132.9K 🔥` `+149%`
1. [陈小春爸爸不希望打扰弟弟生活](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E7%88%B8%E7%88%B8%E4%B8%8D%E5%B8%8C%E6%9C%9B%E6%89%93%E6%89%B0%E5%BC%9F%E5%BC%9F%E7%94%9F%E6%B4%BB%23) `132.9K 🔥` `+149%`
1. [王者荣耀投票](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%8A%95%E7%A5%A8%23) `132.9K 🔥` `+149%`
1. [周迅舒淇釜山红毯高定](https://s.weibo.com/weibo?q=%23%E5%91%A8%E8%BF%85%E8%88%92%E6%B7%87%E9%87%9C%E5%B1%B1%E7%BA%A2%E6%AF%AF%E9%AB%98%E5%AE%9A%23) `132.9K 🔥` `+149%`
1. [向太曝李连杰女儿患抑郁症被高校拒收](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E6%9B%9D%E6%9D%8E%E8%BF%9E%E6%9D%B0%E5%A5%B3%E5%84%BF%E6%82%A3%E6%8A%91%E9%83%81%E7%97%87%E8%A2%AB%E9%AB%98%E6%A0%A1%E6%8B%92%E6%94%B6%23) `133.1K 🔥` `-42%`
1. [伊藤美诚不在日乒新国家队名单](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%97%A4%E7%BE%8E%E8%AF%9A%E4%B8%8D%E5%9C%A8%E6%97%A5%E4%B9%92%E6%96%B0%E5%9B%BD%E5%AE%B6%E9%98%9F%E5%90%8D%E5%8D%95%23) `133.0K 🔥` `-42%`
1. [年轻人称高压锅为核武器](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%A7%B0%E9%AB%98%E5%8E%8B%E9%94%85%E4%B8%BA%E6%A0%B8%E6%AD%A6%E5%99%A8%23) `132.9K 🔥` `-42%`

Updated at 2026-10-16 07:01:53

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
