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

1. [王橹杰出发图 (Wang Lujie's hair picture)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%87%BA%E5%8F%91%E5%9B%BE%23) `319.9K 🔥` `NEW`
1. [朋友圈永远不会有二次编辑功能](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%B0%B8%E8%BF%9C%E4%B8%8D%E4%BC%9A%E6%9C%89%E4%BA%8C%E6%AC%A1%E7%BC%96%E8%BE%91%E5%8A%9F%E8%83%BD%23) `298.1K 🔥` `NEW`
1. [商务局回应胖东来生活广场涨租闭店](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%8A%A1%E5%B1%80%E5%9B%9E%E5%BA%94%E8%83%96%E4%B8%9C%E6%9D%A5%E7%94%9F%E6%B4%BB%E5%B9%BF%E5%9C%BA%E6%B6%A8%E7%A7%9F%E9%97%AD%E5%BA%97%23) `296.5K 🔥` `NEW`
1. [Lisa道歉](https://s.weibo.com/weibo?q=%23Lisa%E9%81%93%E6%AD%89%23) `267.9K 🔥` `NEW`
1. [公司该缴的社保 个人承担](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E8%AF%A5%E7%BC%B4%E7%9A%84%E7%A4%BE%E4%BF%9D%20%E4%B8%AA%E4%BA%BA%E6%89%BF%E6%8B%85%23) `266.4K 🔥` `NEW`
1. [小酒窝房间简直是我小时候的梦中情房](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E6%88%BF%E9%97%B4%E7%AE%80%E7%9B%B4%E6%98%AF%E6%88%91%E5%B0%8F%E6%97%B6%E5%80%99%E7%9A%84%E6%A2%A6%E4%B8%AD%E6%83%85%E6%88%BF%23) `265.1K 🔥` `NEW`
1. [朱一龙空枪海报C位](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E7%A9%BA%E6%9E%AA%E6%B5%B7%E6%8A%A5C%E4%BD%8D%23) `263.1K 🔥` `NEW`
1. [曝Lisa助理检查网友手机](https://s.weibo.com/weibo?q=%23%E6%9B%9DLisa%E5%8A%A9%E7%90%86%E6%A3%80%E6%9F%A5%E7%BD%91%E5%8F%8B%E6%89%8B%E6%9C%BA%23) `263.1K 🔥` `NEW`
1. [2岁幼童漏诊死亡案未进行尸检](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%B9%BC%E7%AB%A5%E6%BC%8F%E8%AF%8A%E6%AD%BB%E4%BA%A1%E6%A1%88%E6%9C%AA%E8%BF%9B%E8%A1%8C%E5%B0%B8%E6%A3%80%23) `261.0K 🔥` `NEW`
1. [檀健次空枪说粤语](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%A9%BA%E6%9E%AA%E8%AF%B4%E7%B2%A4%E8%AF%AD%23) `254.2K 🔥` `NEW`
1. [凯迪拉克 (Cadillac)](https://s.weibo.com/weibo?q=%23%E5%87%AF%E8%BF%AA%E6%8B%89%E5%85%8B%23) `220.7K 🔥` `NEW`
1. [顾客买4瓶饮料连续中奖兑奖被拒](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%AE%A2%E4%B9%B04%E7%93%B6%E9%A5%AE%E6%96%99%E8%BF%9E%E7%BB%AD%E4%B8%AD%E5%A5%96%E5%85%91%E5%A5%96%E8%A2%AB%E6%8B%92%23) `220.6K 🔥` `NEW`
1. [甘肃省副省长程晓波被查](https://s.weibo.com/weibo?q=%23%E7%94%98%E8%82%83%E7%9C%81%E5%89%AF%E7%9C%81%E9%95%BF%E7%A8%8B%E6%99%93%E6%B3%A2%E8%A2%AB%E6%9F%A5%23) `220.4K 🔥` `NEW`
1. [空枪 极限定档](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%20%E6%9E%81%E9%99%90%E5%AE%9A%E6%A1%A3%23) `220.4K 🔥` `NEW`
1. [TF四代五公出发图](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%E5%87%BA%E5%8F%91%E5%9B%BE%23) `176.3K 🔥` `NEW`
1. [油价15日起下调](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B715%E6%97%A5%E8%B5%B7%E4%B8%8B%E8%B0%83%23) `166.3K 🔥` `NEW`
1. [AI大模型价格还没砸到地板](https://s.weibo.com/weibo?q=%23AI%E5%A4%A7%E6%A8%A1%E5%9E%8B%E4%BB%B7%E6%A0%BC%E8%BF%98%E6%B2%A1%E7%A0%B8%E5%88%B0%E5%9C%B0%E6%9D%BF%23) `165.8K 🔥` `NEW`
1. [银行办结婚证为何年轻人不买账](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%B8%BA%E4%BD%95%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%8D%E4%B9%B0%E8%B4%A6%23) `165.4K 🔥` `NEW`
1. [空枪好多影帝影后](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%E5%A5%BD%E5%A4%9A%E5%BD%B1%E5%B8%9D%E5%BD%B1%E5%90%8E%23) `165.1K 🔥` `NEW`
1. [父母的节约程度belike](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E7%9A%84%E8%8A%82%E7%BA%A6%E7%A8%8B%E5%BA%A6belike%23) `164.9K 🔥` `NEW`
1. [空枪 (empty gun)](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%23) `164.8K 🔥` `NEW`
1. [胖东来涨租房东不种地摘果子](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%B6%A8%E7%A7%9F%E6%88%BF%E4%B8%9C%E4%B8%8D%E7%A7%8D%E5%9C%B0%E6%91%98%E6%9E%9C%E5%AD%90%23) `1.1M 🔥` `+28%`
1. [3到5年内社保走向全额实缴 (Social security will be paid in full within 3 to 5 years)](https://s.weibo.com/weibo?q=%233%E5%88%B05%E5%B9%B4%E5%86%85%E7%A4%BE%E4%BF%9D%E8%B5%B0%E5%90%91%E5%85%A8%E9%A2%9D%E5%AE%9E%E7%BC%B4%23) `815.2K 🔥` `+66%`
1. [让豆包把所有前任的脸融一起了](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E8%B1%86%E5%8C%85%E6%8A%8A%E6%89%80%E6%9C%89%E5%89%8D%E4%BB%BB%E7%9A%84%E8%84%B8%E8%9E%8D%E4%B8%80%E8%B5%B7%E4%BA%86%23) `380.1K 🔥` `+80%`
1. [6图看美丽中国建设十五五规划 (6 pictures to see the 15th Five-Year Plan for the Construction of Beautiful China)](https://s.weibo.com/weibo?q=%236%E5%9B%BE%E7%9C%8B%E7%BE%8E%E4%B8%BD%E4%B8%AD%E5%9B%BD%E5%BB%BA%E8%AE%BE%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%23) `671.2K 🔥`
1. [电影空枪定档](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E7%A9%BA%E6%9E%AA%E5%AE%9A%E6%A1%A3%23) `285.6K 🔥`
1. [卢昱晓 刺棠](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%20%E5%88%BA%E6%A3%A0%23) `269.0K 🔥`
1. [张婧仪本人有多漂亮](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%9C%AC%E4%BA%BA%E6%9C%89%E5%A4%9A%E6%BC%82%E4%BA%AE%23) `263.9K 🔥`
1. [明年或出现最严重存储荒](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%B9%B4%E6%88%96%E5%87%BA%E7%8E%B0%E6%9C%80%E4%B8%A5%E9%87%8D%E5%AD%98%E5%82%A8%E8%8D%92%23) `263.1K 🔥`
1. [张雅琪 湖南卫视下场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E4%B8%8B%E5%9C%BA%23) `257.1K 🔥`
1. [首款折叠iPhone](https://s.weibo.com/weibo?q=%23%E9%A6%96%E6%AC%BE%E6%8A%98%E5%8F%A0iPhone%23) `254.6K 🔥`
1. [宋雨琦纹身](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%BA%B9%E8%BA%AB%23) `220.5K 🔥`
1. [段永平抛出1亿元十年之约 (Duan Yongping offers NT$100 million for ten-year contract)](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E6%B0%B8%E5%B9%B3%E6%8A%9B%E5%87%BA1%E4%BA%BF%E5%85%83%E5%8D%81%E5%B9%B4%E4%B9%8B%E7%BA%A6%23) `214.3K 🔥`
1. [晋江作品尺度新规](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E4%BD%9C%E5%93%81%E5%B0%BA%E5%BA%A6%E6%96%B0%E8%A7%84%23) `170.1K 🔥`
1. [虞书欣敖瑞鹏 我欲乘风](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%95%96%E7%91%9E%E9%B9%8F%20%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `167.2K 🔥`
1. [中泰明星曼谷红毯打卡小鹏G6](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%B3%B0%E6%98%8E%E6%98%9F%E6%9B%BC%E8%B0%B7%E7%BA%A2%E6%AF%AF%E6%89%93%E5%8D%A1%E5%B0%8F%E9%B9%8FG6%23) `160.5K 🔥`
1. [张杰演唱会舞台获法国设计金奖](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E8%88%9E%E5%8F%B0%E8%8E%B7%E6%B3%95%E5%9B%BD%E8%AE%BE%E8%AE%A1%E9%87%91%E5%A5%96%23) `159.2K 🔥`
1. [华为WATCH GT 7今日开售](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAWATCH%20GT%207%E4%BB%8A%E6%97%A5%E5%BC%80%E5%94%AE%23) `519.8K 🔥` `-42%`
1. [龙餐馆否认偷票房](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E5%90%A6%E8%AE%A4%E5%81%B7%E7%A5%A8%E6%88%BF%23) `356.9K 🔥` `-26%`
1. [天赐7陪我过完这个暑假](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%B5%907%E9%99%AA%E6%88%91%E8%BF%87%E5%AE%8C%E8%BF%99%E4%B8%AA%E6%9A%91%E5%81%87%23) `317.5K 🔥` `-36%`
1. [世界杯决赛西班牙犯规 (Spain foul in World Cup final)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E8%A5%BF%E7%8F%AD%E7%89%99%E7%8A%AF%E8%A7%84%23) `268.2K 🔥` `-83%`
1. [寿司郎 脚踩水龙头](https://s.weibo.com/weibo?q=%23%E5%AF%BF%E5%8F%B8%E9%83%8E%20%E8%84%9A%E8%B8%A9%E6%B0%B4%E9%BE%99%E5%A4%B4%23) `264.2K 🔥` `-53%`
1. [公职人员碾死醉汉赔偿后取得谅解](https://s.weibo.com/weibo?q=%23%E5%85%AC%E8%81%8C%E4%BA%BA%E5%91%98%E7%A2%BE%E6%AD%BB%E9%86%89%E6%B1%89%E8%B5%94%E5%81%BF%E5%90%8E%E5%8F%96%E5%BE%97%E8%B0%85%E8%A7%A3%23) `262.6K 🔥` `-36%`
1. [曝王嘉尔宋雨琦恋情 (Wang Jiaer and Song Yuqi's romance revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%81%8B%E6%83%85%23) `258.3K 🔥` `-98%`
1. [谢霆锋认为糖拌西红柿不能拿来比赛 (Nicholas Tse believes that tomatoes mixed with sugar cannot be used in competitions)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E8%AE%A4%E4%B8%BA%E7%B3%96%E6%8B%8C%E8%A5%BF%E7%BA%A2%E6%9F%BF%E4%B8%8D%E8%83%BD%E6%8B%BF%E6%9D%A5%E6%AF%94%E8%B5%9B%23) `220.8K 🔥` `-43%`
1. [侯卓成称前女友已道歉](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E7%A7%B0%E5%89%8D%E5%A5%B3%E5%8F%8B%E5%B7%B2%E9%81%93%E6%AD%89%23) `212.9K 🔥` `-23%`
1. [奥德赛](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `192.1K 🔥` `-28%`
1. [武汉女子离婚反赔非洲丈夫17万](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%A5%B3%E5%AD%90%E7%A6%BB%E5%A9%9A%E5%8F%8D%E8%B5%94%E9%9D%9E%E6%B4%B2%E4%B8%88%E5%A4%AB17%E4%B8%87%23) `178.3K 🔥` `-27%`
1. [宜兴山洪](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%85%B4%E5%B1%B1%E6%B4%AA%23) `165.8K 🔥` `-21%`
1. [当AI汽车长了双灵眸大眼 (When AI cars have smart eyes and big eyes)](https://s.weibo.com/weibo?q=%23%E5%BD%93AI%E6%B1%BD%E8%BD%A6%E9%95%BF%E4%BA%86%E5%8F%8C%E7%81%B5%E7%9C%B8%E5%A4%A7%E7%9C%BC%23) `165.6K 🔥` `-31%`
1. [湖南卫视回应张雅琪争议](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E5%9B%9E%E5%BA%94%E5%BC%A0%E9%9B%85%E7%90%AA%E4%BA%89%E8%AE%AE%23) `163.3K 🔥` `-23%`

Updated at 2026-08-14 18:43:21

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
