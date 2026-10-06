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

1. [偷偷藏不住](https://s.weibo.com/weibo?q=%23%E5%81%B7%E5%81%B7%E8%97%8F%E4%B8%8D%E4%BD%8F%23) `96.6K 🔥` `NEW`
1. [华晨宇说别觉得无病呻吟](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E8%AF%B4%E5%88%AB%E8%A7%89%E5%BE%97%E6%97%A0%E7%97%85%E5%91%BB%E5%90%9F%23) `70.9K 🔥` `NEW`
1. [LV大秀](https://s.weibo.com/weibo?q=%23LV%E5%A4%A7%E7%A7%80%23) `51.5K 🔥` `NEW`
1. [李勒优否认在拼豆店上班](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E5%90%A6%E8%AE%A4%E5%9C%A8%E6%8B%BC%E8%B1%86%E5%BA%97%E4%B8%8A%E7%8F%AD%23) `44.2K 🔥` `NEW`
1. [辛芷蕾好美有肉但不胖瘦而不柴](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%A5%BD%E7%BE%8E%E6%9C%89%E8%82%89%E4%BD%86%E4%B8%8D%E8%83%96%E7%98%A6%E8%80%8C%E4%B8%8D%E6%9F%B4%23) `44.2K 🔥` `NEW`
1. [我也没懂杜翠雀在气什么](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B9%9F%E6%B2%A1%E6%87%82%E6%9D%9C%E7%BF%A0%E9%9B%80%E5%9C%A8%E6%B0%94%E4%BB%80%E4%B9%88%23) `44.0K 🔥` `NEW`
1. [不喜欢和没有审美的朋友出门](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%96%9C%E6%AC%A2%E5%92%8C%E6%B2%A1%E6%9C%89%E5%AE%A1%E7%BE%8E%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%87%BA%E9%97%A8%23) `44.0K 🔥` `NEW`
1. [卫报谈C罗离开国家队集训营事件](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E6%8A%A5%E8%B0%88C%E7%BD%97%E7%A6%BB%E5%BC%80%E5%9B%BD%E5%AE%B6%E9%98%9F%E9%9B%86%E8%AE%AD%E8%90%A5%E4%BA%8B%E4%BB%B6%23) `44.0K 🔥` `NEW`
1. [穿秋裤从控制欲变成母爱](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E7%A7%8B%E8%A3%A4%E4%BB%8E%E6%8E%A7%E5%88%B6%E6%AC%B2%E5%8F%98%E6%88%90%E6%AF%8D%E7%88%B1%23) `44.0K 🔥` `NEW`
1. [AG战胜DYG](https://s.weibo.com/weibo?q=%23AG%E6%88%98%E8%83%9CDYG%23) `44.0K 🔥` `NEW`
1. [王一博对绿色的喜爱度](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%AF%B9%E7%BB%BF%E8%89%B2%E7%9A%84%E5%96%9C%E7%88%B1%E5%BA%A6%23) `44.0K 🔥` `NEW`
1. [许兰香今生太苦了](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%85%B0%E9%A6%99%E4%BB%8A%E7%94%9F%E5%A4%AA%E8%8B%A6%E4%BA%86%23) `44.0K 🔥` `NEW`
1. [内娱不拍霍去病太可惜](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E4%B8%8D%E6%8B%8D%E9%9C%8D%E5%8E%BB%E7%97%85%E5%A4%AA%E5%8F%AF%E6%83%9C%23) `43.9K 🔥` `NEW`
1. [缅北刘家宣称缅北赚钱缅北花](https://s.weibo.com/weibo?q=%23%E7%BC%85%E5%8C%97%E5%88%98%E5%AE%B6%E5%AE%A3%E7%A7%B0%E7%BC%85%E5%8C%97%E8%B5%9A%E9%92%B1%E7%BC%85%E5%8C%97%E8%8A%B1%23) `43.9K 🔥` `NEW`
1. [卢昱晓看秀前只吃了一口碳水](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%9C%8B%E7%A7%80%E5%89%8D%E5%8F%AA%E5%90%83%E4%BA%86%E4%B8%80%E5%8F%A3%E7%A2%B3%E6%B0%B4%23) `43.8K 🔥` `NEW`
1. [最危险的是年轻时错过复利](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%8D%B1%E9%99%A9%E7%9A%84%E6%98%AF%E5%B9%B4%E8%BD%BB%E6%97%B6%E9%94%99%E8%BF%87%E5%A4%8D%E5%88%A9%23) `121.3K 🔥` `-71%`
1. [兰香去世时没戴红绳](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%8E%BB%E4%B8%96%E6%97%B6%E6%B2%A1%E6%88%B4%E7%BA%A2%E7%BB%B3%23) `113.9K 🔥` `-78%`
1. [交通部门增运力优服务应对返程高峰](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E9%80%9A%E9%83%A8%E9%97%A8%E5%A2%9E%E8%BF%90%E5%8A%9B%E4%BC%98%E6%9C%8D%E5%8A%A1%E5%BA%94%E5%AF%B9%E8%BF%94%E7%A8%8B%E9%AB%98%E5%B3%B0%23) `99.0K 🔥` `-77%`
1. [现在才发现万人迷没戴任何首饰](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E6%89%8D%E5%8F%91%E7%8E%B0%E4%B8%87%E4%BA%BA%E8%BF%B7%E6%B2%A1%E6%88%B4%E4%BB%BB%E4%BD%95%E9%A6%96%E9%A5%B0%23) `93.6K 🔥` `-73%`
1. [虞书欣粉丝朋友圈](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%B2%89%E4%B8%9D%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `93.1K 🔥` `-30%`
1. [粤J2888T战绩全网可查](https://s.weibo.com/weibo?q=%23%E7%B2%A4J2888T%E6%88%98%E7%BB%A9%E5%85%A8%E7%BD%91%E5%8F%AF%E6%9F%A5%23) `44.3K 🔥` `-94%`
1. [一万块的威力被严重低估了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%87%E5%9D%97%E7%9A%84%E5%A8%81%E5%8A%9B%E8%A2%AB%E4%B8%A5%E9%87%8D%E4%BD%8E%E4%BC%B0%E4%BA%86%23) `44.3K 🔥` `-82%`
1. [贺炜评国足不敌塔吉克斯坦](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E7%82%9C%E8%AF%84%E5%9B%BD%E8%B6%B3%E4%B8%8D%E6%95%8C%E5%A1%94%E5%90%89%E5%85%8B%E6%96%AF%E5%9D%A6%23) `44.3K 🔥` `-87%`
1. [印度高种姓博主游览中国农村](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%AB%98%E7%A7%8D%E5%A7%93%E5%8D%9A%E4%B8%BB%E6%B8%B8%E8%A7%88%E4%B8%AD%E5%9B%BD%E5%86%9C%E6%9D%91%23) `44.3K 🔥` `-74%`
1. [代露娃艺考老师发文](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E8%89%BA%E8%80%83%E8%80%81%E5%B8%88%E5%8F%91%E6%96%87%23) `44.3K 🔥` `-74%`
1. [缅北电诈头目白应苍给中国人民道歉](https://s.weibo.com/weibo?q=%23%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E5%A4%B4%E7%9B%AE%E7%99%BD%E5%BA%94%E8%8B%8D%E7%BB%99%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E9%81%93%E6%AD%89%23) `44.2K 🔥` `-74%`
1. [亚运会冠军金牌已经磨花了](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%86%A0%E5%86%9B%E9%87%91%E7%89%8C%E5%B7%B2%E7%BB%8F%E7%A3%A8%E8%8A%B1%E4%BA%86%23) `44.2K 🔥` `-64%`
1. [中国游客国庆出行让日媒很闹心](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%9B%BD%E5%BA%86%E5%87%BA%E8%A1%8C%E8%AE%A9%E6%97%A5%E5%AA%92%E5%BE%88%E9%97%B9%E5%BF%83%23) `44.2K 🔥` `-81%`
1. [李嘉诚家族出手](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E8%AF%9A%E5%AE%B6%E6%97%8F%E5%87%BA%E6%89%8B%23) `44.2K 🔥` `-66%`
1. [JackeyLove回应ZUIAN签证问题](https://s.weibo.com/weibo?q=%23JackeyLove%E5%9B%9E%E5%BA%94ZUIAN%E7%AD%BE%E8%AF%81%E9%97%AE%E9%A2%98%23) `44.2K 🔥` `-68%`
1. [曝邓紫棋结婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%82%93%E7%B4%AB%E6%A3%8B%E7%BB%93%E5%A9%9A%23) `44.2K 🔥` `-67%`
1. [山东人削皮吃发霉馒头](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E4%BA%BA%E5%89%8A%E7%9A%AE%E5%90%83%E5%8F%91%E9%9C%89%E9%A6%92%E5%A4%B4%23) `44.2K 🔥` `-67%`
1. [知否剧名原来不是宠妾灭妻](https://s.weibo.com/weibo?q=%23%E7%9F%A5%E5%90%A6%E5%89%A7%E5%90%8D%E5%8E%9F%E6%9D%A5%E4%B8%8D%E6%98%AF%E5%AE%A0%E5%A6%BE%E7%81%AD%E5%A6%BB%23) `44.1K 🔥` `-67%`
1. [向下卷才是地狱难度](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%B8%8B%E5%8D%B7%E6%89%8D%E6%98%AF%E5%9C%B0%E7%8B%B1%E9%9A%BE%E5%BA%A6%23) `44.1K 🔥` `-66%`
1. [跟异性聊天容易上头是什么毛病](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E5%BC%82%E6%80%A7%E8%81%8A%E5%A4%A9%E5%AE%B9%E6%98%93%E4%B8%8A%E5%A4%B4%E6%98%AF%E4%BB%80%E4%B9%88%E6%AF%9B%E7%97%85%23) `44.1K 🔥` `-67%`
1. [长久关系秘诀是不太在乎对方](https://s.weibo.com/weibo?q=%23%E9%95%BF%E4%B9%85%E5%85%B3%E7%B3%BB%E7%A7%98%E8%AF%80%E6%98%AF%E4%B8%8D%E5%A4%AA%E5%9C%A8%E4%B9%8E%E5%AF%B9%E6%96%B9%23) `44.1K 🔥` `-67%`
1. [父母以为结婚是这样的](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E4%BB%A5%E4%B8%BA%E7%BB%93%E5%A9%9A%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `44.1K 🔥` `-66%`
1. [韩国人以为重庆是小城市](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%BA%BA%E4%BB%A5%E4%B8%BA%E9%87%8D%E5%BA%86%E6%98%AF%E5%B0%8F%E5%9F%8E%E5%B8%82%23) `44.1K 🔥` `-67%`
1. [邵佳一](https://s.weibo.com/weibo?q=%23%E9%82%B5%E4%BD%B3%E4%B8%80%23) `44.1K 🔥` `-57%`
1. [狂吃不胖的室友蹲厕所狂吐](https://s.weibo.com/weibo?q=%23%E7%8B%82%E5%90%83%E4%B8%8D%E8%83%96%E7%9A%84%E5%AE%A4%E5%8F%8B%E8%B9%B2%E5%8E%95%E6%89%80%E7%8B%82%E5%90%90%23) `44.1K 🔥` `-63%`
1. [李勒优解释自己为什么带现金出门](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E8%A7%A3%E9%87%8A%E8%87%AA%E5%B7%B1%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B8%A6%E7%8E%B0%E9%87%91%E5%87%BA%E9%97%A8%23) `44.0K 🔥` `-70%`
1. [小莲是第一个去世](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8E%B2%E6%98%AF%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8E%BB%E4%B8%96%23) `43.9K 🔥` `-67%`
1. [AG 突围赛](https://s.weibo.com/weibo?q=%23AG%20%E7%AA%81%E5%9B%B4%E8%B5%9B%23) `43.9K 🔥` `-53%`
1. [罗老师结婚了](https://s.weibo.com/weibo?q=%23%E7%BD%97%E8%80%81%E5%B8%88%E7%BB%93%E5%A9%9A%E4%BA%86%23) `43.9K 🔥` `-73%`
1. [千万不要轻易喂食一只猫头鹰](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E8%BD%BB%E6%98%93%E5%96%82%E9%A3%9F%E4%B8%80%E5%8F%AA%E7%8C%AB%E5%A4%B4%E9%B9%B0%23) `43.9K 🔥` `-56%`
1. [光洙这几句真的有被治愈到](https://s.weibo.com/weibo?q=%23%E5%85%89%E6%B4%99%E8%BF%99%E5%87%A0%E5%8F%A5%E7%9C%9F%E7%9A%84%E6%9C%89%E8%A2%AB%E6%B2%BB%E6%84%88%E5%88%B0%23) `43.9K 🔥` `-61%`
1. [余承东称考虑把鸿蒙推向全球市场](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E7%A7%B0%E8%80%83%E8%99%91%E6%8A%8A%E9%B8%BF%E8%92%99%E6%8E%A8%E5%90%91%E5%85%A8%E7%90%83%E5%B8%82%E5%9C%BA%23) `43.9K 🔥` `-51%`
1. [邓紫棋自曝给女儿儿子取好名字](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E8%87%AA%E6%9B%9D%E7%BB%99%E5%A5%B3%E5%84%BF%E5%84%BF%E5%AD%90%E5%8F%96%E5%A5%BD%E5%90%8D%E5%AD%97%23) `43.8K 🔥` `-72%`
1. [魏大勋刘亦菲 性转版早春晴朗](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E5%88%98%E4%BA%A6%E8%8F%B2%20%E6%80%A7%E8%BD%AC%E7%89%88%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `43.8K 🔥` `-67%`
1. [声生不息宝岛季](https://s.weibo.com/weibo?q=%23%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%E5%AE%9D%E5%B2%9B%E5%AD%A3%23) `43.8K 🔥` `-78%`

Updated at 2026-10-07 05:18:07

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
