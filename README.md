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

1. [小天才封闭社交倒逼家长购买](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%A9%E6%89%8D%E5%B0%81%E9%97%AD%E7%A4%BE%E4%BA%A4%E5%80%92%E9%80%BC%E5%AE%B6%E9%95%BF%E8%B4%AD%E4%B9%B0%23) `2.1M 🔥` `NEW`
1. [独生女车祸离世八旬父母再获赔生活费](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E7%94%9F%E5%A5%B3%E8%BD%A6%E7%A5%B8%E7%A6%BB%E4%B8%96%E5%85%AB%E6%97%AC%E7%88%B6%E6%AF%8D%E5%86%8D%E8%8E%B7%E8%B5%94%E7%94%9F%E6%B4%BB%E8%B4%B9%23) `1.2M 🔥` `NEW`
1. [小米一口气申报了8款汽车商标](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E4%B8%80%E5%8F%A3%E6%B0%94%E7%94%B3%E6%8A%A5%E4%BA%868%E6%AC%BE%E6%B1%BD%E8%BD%A6%E5%95%86%E6%A0%87%23) `648.7K 🔥` `NEW`
1. [Lindt瑞士莲](https://s.weibo.com/weibo?q=%23Lindt%E7%91%9E%E5%A3%AB%E8%8E%B2%23) `417.1K 🔥` `NEW`
1. [小天才手表回应封闭社交](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%A9%E6%89%8D%E6%89%8B%E8%A1%A8%E5%9B%9E%E5%BA%94%E5%B0%81%E9%97%AD%E7%A4%BE%E4%BA%A4%23) `400.4K 🔥` `NEW`
1. [多啃硬食能锻炼牙齿系误区](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%95%83%E7%A1%AC%E9%A3%9F%E8%83%BD%E9%94%BB%E7%82%BC%E7%89%99%E9%BD%BF%E7%B3%BB%E8%AF%AF%E5%8C%BA%23) `387.2K 🔥` `NEW`
1. [马龙生日发文](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E7%94%9F%E6%97%A5%E5%8F%91%E6%96%87%23) `386.5K 🔥` `NEW`
1. [智驾小蓝灯颜色进入新国标](https://s.weibo.com/weibo?q=%23%E6%99%BA%E9%A9%BE%E5%B0%8F%E8%93%9D%E7%81%AF%E9%A2%9C%E8%89%B2%E8%BF%9B%E5%85%A5%E6%96%B0%E5%9B%BD%E6%A0%87%23) `360.4K 🔥` `NEW`
1. [女子每天2杯咖啡打喷嚏震断肋骨](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%AF%8F%E5%A4%A92%E6%9D%AF%E5%92%96%E5%95%A1%E6%89%93%E5%96%B7%E5%9A%8F%E9%9C%87%E6%96%AD%E8%82%8B%E9%AA%A8%23) `339.5K 🔥` `NEW`
1. [正在研究制定扩大内需战略实施方案](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%9C%A8%E7%A0%94%E7%A9%B6%E5%88%B6%E5%AE%9A%E6%89%A9%E5%A4%A7%E5%86%85%E9%9C%80%E6%88%98%E7%95%A5%E5%AE%9E%E6%96%BD%E6%96%B9%E6%A1%88%23) `338.9K 🔥` `NEW`
1. [刘恺威黎纪君承认恋情](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%81%BA%E5%A8%81%E9%BB%8E%E7%BA%AA%E5%90%9B%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `338.3K 🔥` `NEW`
1. [谁能认出来这是周深](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%83%BD%E8%AE%A4%E5%87%BA%E6%9D%A5%E8%BF%99%E6%98%AF%E5%91%A8%E6%B7%B1%23) `337.8K 🔥` `NEW`
1. [韩路爆料汽车之家白嫖](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%B7%AF%E7%88%86%E6%96%99%E6%B1%BD%E8%BD%A6%E4%B9%8B%E5%AE%B6%E7%99%BD%E5%AB%96%23) `335.8K 🔥` `NEW`
1. [身披旭日旗留学生就读于历史专业](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E6%8A%AB%E6%97%AD%E6%97%A5%E6%97%97%E7%95%99%E5%AD%A6%E7%94%9F%E5%B0%B1%E8%AF%BB%E4%BA%8E%E5%8E%86%E5%8F%B2%E4%B8%93%E4%B8%9A%23) `335.2K 🔥` `NEW`
1. [维密财报写了杨幂](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%AF%86%E8%B4%A2%E6%8A%A5%E5%86%99%E4%BA%86%E6%9D%A8%E5%B9%82%23) `334.1K 🔥` `NEW`
1. [天猫双11首次卖整车](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB%E5%8F%8C11%E9%A6%96%E6%AC%A1%E5%8D%96%E6%95%B4%E8%BD%A6%23) `333.3K 🔥` `NEW`
1. [何宣林 高铭辰](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%20%E9%AB%98%E9%93%AD%E8%BE%B0%23) `331.6K 🔥` `NEW`
1. [继母称女童黑作坊打工是为追星](https://s.weibo.com/weibo?q=%23%E7%BB%A7%E6%AF%8D%E7%A7%B0%E5%A5%B3%E7%AB%A5%E9%BB%91%E4%BD%9C%E5%9D%8A%E6%89%93%E5%B7%A5%E6%98%AF%E4%B8%BA%E8%BF%BD%E6%98%9F%23) `331.0K 🔥` `NEW`
1. [浙江宣传批中国留学生披旭日旗](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%AE%A3%E4%BC%A0%E6%89%B9%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E6%8A%AB%E6%97%AD%E6%97%A5%E6%97%97%23) `330.7K 🔥` `NEW`
1. [律师称精日留学生回国或被追责](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E7%A7%B0%E7%B2%BE%E6%97%A5%E7%95%99%E5%AD%A6%E7%94%9F%E5%9B%9E%E5%9B%BD%E6%88%96%E8%A2%AB%E8%BF%BD%E8%B4%A3%23) `329.2K 🔥` `NEW`
1. [刘恺威父亲说想快点见见黎纪君](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%81%BA%E5%A8%81%E7%88%B6%E4%BA%B2%E8%AF%B4%E6%83%B3%E5%BF%AB%E7%82%B9%E8%A7%81%E8%A7%81%E9%BB%8E%E7%BA%AA%E5%90%9B%23) `328.7K 🔥` `NEW`
1. [董明珠称橘子1块5太贵不准卖](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%98%8E%E7%8F%A0%E7%A7%B0%E6%A9%98%E5%AD%901%E5%9D%975%E5%A4%AA%E8%B4%B5%E4%B8%8D%E5%87%86%E5%8D%96%23) `327.7K 🔥` `NEW`
1. [黎纪君的前任](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E7%BA%AA%E5%90%9B%E7%9A%84%E5%89%8D%E4%BB%BB%23) `327.6K 🔥` `NEW`
1. [曝徐佳宁说的5亿是指五魁给李小冉捉](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BE%90%E4%BD%B3%E5%AE%81%E8%AF%B4%E7%9A%845%E4%BA%BF%E6%98%AF%E6%8C%87%E4%BA%94%E9%AD%81%E7%BB%99%E6%9D%8E%E5%B0%8F%E5%86%89%E6%8D%89%23) `320.2K 🔥` `NEW`
1. [早买iPhone18Pro的人开始烧心了](https://s.weibo.com/weibo?q=%23%E6%97%A9%E4%B9%B0iPhone18Pro%E7%9A%84%E4%BA%BA%E5%BC%80%E5%A7%8B%E7%83%A7%E5%BF%83%E4%BA%86%23) `293.4K 🔥` `NEW`
1. [法国一抗议者失去一只手](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E4%B8%80%E6%8A%97%E8%AE%AE%E8%80%85%E5%A4%B1%E5%8E%BB%E4%B8%80%E5%8F%AA%E6%89%8B%23) `288.9K 🔥` `NEW`
1. [人民日报评留学生身披旭日旗](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E7%95%99%E5%AD%A6%E7%94%9F%E8%BA%AB%E6%8A%AB%E6%97%AD%E6%97%A5%E6%97%97%23) `288.5K 🔥` `NEW`
1. [马龙梁靖崑吃寿桃蛋糕](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E6%A2%81%E9%9D%96%E5%B4%91%E5%90%83%E5%AF%BF%E6%A1%83%E8%9B%8B%E7%B3%95%23) `281.8K 🔥` `NEW`
1. [咖啡和防晒正透支你的骨头](https://s.weibo.com/weibo?q=%23%E5%92%96%E5%95%A1%E5%92%8C%E9%98%B2%E6%99%92%E6%AD%A3%E9%80%8F%E6%94%AF%E4%BD%A0%E7%9A%84%E9%AA%A8%E5%A4%B4%23) `274.5K 🔥` `NEW`
1. [日本癌症男子捡93万不还称上天恩赐](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%99%8C%E7%97%87%E7%94%B7%E5%AD%90%E6%8D%A193%E4%B8%87%E4%B8%8D%E8%BF%98%E7%A7%B0%E4%B8%8A%E5%A4%A9%E6%81%A9%E8%B5%90%23) `274.3K 🔥` `NEW`
1. [内娱诞生了4个戏疯子](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E8%AF%9E%E7%94%9F%E4%BA%864%E4%B8%AA%E6%88%8F%E7%96%AF%E5%AD%90%23) `255.8K 🔥` `NEW`
1. [张月出演尚公主](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%87%BA%E6%BC%94%E5%B0%9A%E5%85%AC%E4%B8%BB%23) `241.6K 🔥` `NEW`
1. [小城良方OST清单](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9OST%E6%B8%85%E5%8D%95%23) `238.0K 🔥` `NEW`
1. [李昀锐孟子义尚公主情头](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B0%9A%E5%85%AC%E4%B8%BB%E6%83%85%E5%A4%B4%23) `205.3K 🔥` `NEW`
1. [汽车灯具不得显示文字](https://s.weibo.com/weibo?q=%23%E6%B1%BD%E8%BD%A6%E7%81%AF%E5%85%B7%E4%B8%8D%E5%BE%97%E6%98%BE%E7%A4%BA%E6%96%87%E5%AD%97%23) `189.0K 🔥` `NEW`
1. [男子健身房撸铁未消毒挠脸长肉球](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%81%A5%E8%BA%AB%E6%88%BF%E6%92%B8%E9%93%81%E6%9C%AA%E6%B6%88%E6%AF%92%E6%8C%A0%E8%84%B8%E9%95%BF%E8%82%89%E7%90%83%23) `164.7K 🔥` `NEW`
1. [橘猫的基因能有多强大](https://s.weibo.com/weibo?q=%23%E6%A9%98%E7%8C%AB%E7%9A%84%E5%9F%BA%E5%9B%A0%E8%83%BD%E6%9C%89%E5%A4%9A%E5%BC%BA%E5%A4%A7%23) `164.5K 🔥` `NEW`
1. [原来衣服上的印花都是这么来的啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%A1%A3%E6%9C%8D%E4%B8%8A%E7%9A%84%E5%8D%B0%E8%8A%B1%E9%83%BD%E6%98%AF%E8%BF%99%E4%B9%88%E6%9D%A5%E7%9A%84%E5%95%8A%23) `160.3K 🔥` `NEW`
1. [帅气小伙追求脑瘫女孩半年成功求婚](https://s.weibo.com/weibo?q=%23%E5%B8%85%E6%B0%94%E5%B0%8F%E4%BC%99%E8%BF%BD%E6%B1%82%E8%84%91%E7%98%AB%E5%A5%B3%E5%AD%A9%E5%8D%8A%E5%B9%B4%E6%88%90%E5%8A%9F%E6%B1%82%E5%A9%9A%23) `160.1K 🔥` `NEW`
1. [黎纪君回应是否见过小糯米](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E7%BA%AA%E5%90%9B%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E8%A7%81%E8%BF%87%E5%B0%8F%E7%B3%AF%E7%B1%B3%23) `155.5K 🔥` `NEW`
1. [田曦薇V我两种番茄](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87V%E6%88%91%E4%B8%A4%E7%A7%8D%E7%95%AA%E8%8C%84%23) `153.6K 🔥` `NEW`
1. [宋威龙FILA羽绒服](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99FILA%E7%BE%BD%E7%BB%92%E6%9C%8D%23) `153.4K 🔥` `NEW`
1. [被丈夫抱断肋骨女子天天喝咖啡](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%B8%88%E5%A4%AB%E6%8A%B1%E6%96%AD%E8%82%8B%E9%AA%A8%E5%A5%B3%E5%AD%90%E5%A4%A9%E5%A4%A9%E5%96%9D%E5%92%96%E5%95%A1%23) `153.1K 🔥` `NEW`
1. [维密秀史上最贵FantasyBra是如何制作的](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%AF%86%E7%A7%80%E5%8F%B2%E4%B8%8A%E6%9C%80%E8%B4%B5FantasyBra%E6%98%AF%E5%A6%82%E4%BD%95%E5%88%B6%E4%BD%9C%E7%9A%84%23) `147.4K 🔥` `NEW`
1. [何以中国当惊世界殊](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%BB%A5%E4%B8%AD%E5%9B%BD%E5%BD%93%E6%83%8A%E4%B8%96%E7%95%8C%E6%AE%8A%23) `745.4K 🔥` `+1503%`
1. [李小冉一忍再忍不想占用公共资源](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B8%80%E5%BF%8D%E5%86%8D%E5%BF%8D%E4%B8%8D%E6%83%B3%E5%8D%A0%E7%94%A8%E5%85%AC%E5%85%B1%E8%B5%84%E6%BA%90%23) `336.7K 🔥` `+27%`
1. [小天才手表封闭社交被质疑](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%A9%E6%89%8D%E6%89%8B%E8%A1%A8%E5%B0%81%E9%97%AD%E7%A4%BE%E4%BA%A4%E8%A2%AB%E8%B4%A8%E7%96%91%23) `332.6K 🔥` `+26%`
1. [新濠天地REM幻宇开幕盛典](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%BF%A0%E5%A4%A9%E5%9C%B0REM%E5%B9%BB%E5%AE%87%E5%BC%80%E5%B9%95%E7%9B%9B%E5%85%B8%23) `682.5K 🔥`
1. [iPhone18外观曝光](https://s.weibo.com/weibo?q=%23iPhone18%E5%A4%96%E8%A7%82%E6%9B%9D%E5%85%89%23) `174.6K 🔥` `-69%`
1. [维密靠什么赚钱](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%AF%86%E9%9D%A0%E4%BB%80%E4%B9%88%E8%B5%9A%E9%92%B1%23) `159.3K 🔥` `-35%`

Updated at 2026-10-20 14:43:22

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
