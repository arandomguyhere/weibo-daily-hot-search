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

1. [陈建州回忆心梗发作过程](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BB%BA%E5%B7%9E%E5%9B%9E%E5%BF%86%E5%BF%83%E6%A2%97%E5%8F%91%E4%BD%9C%E8%BF%87%E7%A8%8B%23) `99.9K 🔥` `NEW`
1. [亚运会有日本选手被分配男女一屋](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%9C%89%E6%97%A5%E6%9C%AC%E9%80%89%E6%89%8B%E8%A2%AB%E5%88%86%E9%85%8D%E7%94%B7%E5%A5%B3%E4%B8%80%E5%B1%8B%23) `68.4K 🔥` `NEW`
1. [你的鞋子正毁掉你的脚](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E9%9E%8B%E5%AD%90%E6%AD%A3%E6%AF%81%E6%8E%89%E4%BD%A0%E7%9A%84%E8%84%9A%23) `67.6K 🔥` `NEW`
1. [中国队亚运会9月18日赛程](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E4%BA%9A%E8%BF%90%E4%BC%9A9%E6%9C%8818%E6%97%A5%E8%B5%9B%E7%A8%8B%23) `67.6K 🔥` `NEW`
1. [秋天穿毛衣脖子空空的](https://s.weibo.com/weibo?q=%23%E7%A7%8B%E5%A4%A9%E7%A9%BF%E6%AF%9B%E8%A1%A3%E8%84%96%E5%AD%90%E7%A9%BA%E7%A9%BA%E7%9A%84%23) `67.6K 🔥` `NEW`
1. [中年男人的回春三件套](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B9%B4%E7%94%B7%E4%BA%BA%E7%9A%84%E5%9B%9E%E6%98%A5%E4%B8%89%E4%BB%B6%E5%A5%97%23) `67.6K 🔥` `NEW`
1. [残障阿姨30年前被捡回当妻子](https://s.weibo.com/weibo?q=%23%E6%AE%8B%E9%9A%9C%E9%98%BF%E5%A7%A830%E5%B9%B4%E5%89%8D%E8%A2%AB%E6%8D%A1%E5%9B%9E%E5%BD%93%E5%A6%BB%E5%AD%90%23) `67.6K 🔥` `NEW`
1. [TheShy冒泡赛状态争议](https://s.weibo.com/weibo?q=%23TheShy%E5%86%92%E6%B3%A1%E8%B5%9B%E7%8A%B6%E6%80%81%E4%BA%89%E8%AE%AE%23) `67.6K 🔥` `NEW`
1. [中国妹子卖麻糍这料给的真足啊](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A6%B9%E5%AD%90%E5%8D%96%E9%BA%BB%E7%B3%8D%E8%BF%99%E6%96%99%E7%BB%99%E7%9A%84%E7%9C%9F%E8%B6%B3%E5%95%8A%23) `67.6K 🔥` `NEW`
1. [医生回应举手式睡姿是身体在求救](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E4%B8%BE%E6%89%8B%E5%BC%8F%E7%9D%A1%E5%A7%BF%E6%98%AF%E8%BA%AB%E4%BD%93%E5%9C%A8%E6%B1%82%E6%95%91%23) `593.5K 🔥` `+278%`
1. [粉笔 谁是公考培训界的良心](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%20%E8%B0%81%E6%98%AF%E5%85%AC%E8%80%83%E5%9F%B9%E8%AE%AD%E7%95%8C%E7%9A%84%E8%89%AF%E5%BF%83%23) `430.0K 🔥` `+452%`
1. [第23届东博会峰会](https://s.weibo.com/weibo?q=%23%E7%AC%AC23%E5%B1%8A%E4%B8%9C%E5%8D%9A%E4%BC%9A%E5%B3%B0%E4%BC%9A%23) `331.4K 🔥` `+335%`
1. [日本玉米便当](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%8E%89%E7%B1%B3%E4%BE%BF%E5%BD%93%23) `198.3K 🔥` `+163%`
1. [2岁幼童18楼坠亡邻居发声](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%B9%BC%E7%AB%A518%E6%A5%BC%E5%9D%A0%E4%BA%A1%E9%82%BB%E5%B1%85%E5%8F%91%E5%A3%B0%23) `180.0K 🔥` `+214%`
1. [偶像来了 国际大花](https://s.weibo.com/weibo?q=%23%E5%81%B6%E5%83%8F%E6%9D%A5%E4%BA%86%20%E5%9B%BD%E9%99%85%E5%A4%A7%E8%8A%B1%23) `172.1K 🔥` `+156%`
1. [如果你出生于1992年至2003年之间](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E4%BD%A0%E5%87%BA%E7%94%9F%E4%BA%8E1992%E5%B9%B4%E8%87%B32003%E5%B9%B4%E4%B9%8B%E9%97%B4%23) `148.6K 🔥` `+201%`
1. [公考大战](https://s.weibo.com/weibo?q=%23%E5%85%AC%E8%80%83%E5%A4%A7%E6%88%98%23) `118.0K 🔥` `+137%`
1. [小猫突然把小狗的头扶正了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%AA%81%E7%84%B6%E6%8A%8A%E5%B0%8F%E7%8B%97%E7%9A%84%E5%A4%B4%E6%89%B6%E6%AD%A3%E4%BA%86%23) `115.3K 🔥` `+227%`
1. [杨某媛疑似在西班牙读博](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%9F%90%E5%AA%9B%E7%96%91%E4%BC%BC%E5%9C%A8%E8%A5%BF%E7%8F%AD%E7%89%99%E8%AF%BB%E5%8D%9A%23) `94.6K 🔥` `+91%`
1. [粉笔疯了](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E7%96%AF%E4%BA%86%23) `94.4K 🔥` `+91%`
1. [30岁后找对象比赚钱还难](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%90%8E%E6%89%BE%E5%AF%B9%E8%B1%A1%E6%AF%94%E8%B5%9A%E9%92%B1%E8%BF%98%E9%9A%BE%23) `84.6K 🔥` `+123%`
1. [袁东直播间乱成一锅粥了](https://s.weibo.com/weibo?q=%23%E8%A2%81%E4%B8%9C%E7%9B%B4%E6%92%AD%E9%97%B4%E4%B9%B1%E6%88%90%E4%B8%80%E9%94%85%E7%B2%A5%E4%BA%86%23) `82.4K 🔥` `+68%`
1. [粉笔 超格](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%20%E8%B6%85%E6%A0%BC%23) `75.4K 🔥` `+46%`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `67.7K 🔥` `+38%`
1. [影视飓风评测 看完不想买了](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E8%AF%84%E6%B5%8B%20%E7%9C%8B%E5%AE%8C%E4%B8%8D%E6%83%B3%E4%B9%B0%E4%BA%86%23) `67.7K 🔥` `+27%`
1. [2岁幼童坠亡母亲否认老公买保险](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%B9%BC%E7%AB%A5%E5%9D%A0%E4%BA%A1%E6%AF%8D%E4%BA%B2%E5%90%A6%E8%AE%A4%E8%80%81%E5%85%AC%E4%B9%B0%E4%BF%9D%E9%99%A9%23) `67.7K 🔥` `+92%`
1. [小鹏G9L价格炸裂](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FG9L%E4%BB%B7%E6%A0%BC%E7%82%B8%E8%A3%82%23) `67.7K 🔥` `+92%`
1. [918](https://s.weibo.com/weibo?q=%23918%23) `67.7K 🔥` `+37%`
1. [HYROX失禁女选手致歉](https://s.weibo.com/weibo?q=%23HYROX%E5%A4%B1%E7%A6%81%E5%A5%B3%E9%80%89%E6%89%8B%E8%87%B4%E6%AD%89%23) `67.7K 🔥` `+92%`
1. [西雅图吸毒者末世景象](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E9%9B%85%E5%9B%BE%E5%90%B8%E6%AF%92%E8%80%85%E6%9C%AB%E4%B8%96%E6%99%AF%E8%B1%A1%23) `67.7K 🔥` `+92%`
1. [女子生孩子后双目失明双耳失聪](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%9F%E5%AD%A9%E5%AD%90%E5%90%8E%E5%8F%8C%E7%9B%AE%E5%A4%B1%E6%98%8E%E5%8F%8C%E8%80%B3%E5%A4%B1%E8%81%AA%23) `67.7K 🔥` `+92%`
1. [iOS27电池图标 丑](https://s.weibo.com/weibo?q=%23iOS27%E7%94%B5%E6%B1%A0%E5%9B%BE%E6%A0%87%20%E4%B8%91%23) `67.7K 🔥` `+92%`
1. [武大口腔手术纠纷](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E5%8F%A3%E8%85%94%E6%89%8B%E6%9C%AF%E7%BA%A0%E7%BA%B7%23) `67.7K 🔥` `+92%`
1. [2026湾区升明月你最期待谁](https://s.weibo.com/weibo?q=%232026%E6%B9%BE%E5%8C%BA%E5%8D%87%E6%98%8E%E6%9C%88%E4%BD%A0%E6%9C%80%E6%9C%9F%E5%BE%85%E8%B0%81%23) `67.6K 🔥` `+92%`
1. [王楚钦练到力竭](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%BB%83%E5%88%B0%E5%8A%9B%E7%AB%AD%23) `67.6K 🔥` `+92%`
1. [其实附近小区只有我在吃那款饼干](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E9%99%84%E8%BF%91%E5%B0%8F%E5%8C%BA%E5%8F%AA%E6%9C%89%E6%88%91%E5%9C%A8%E5%90%83%E9%82%A3%E6%AC%BE%E9%A5%BC%E5%B9%B2%23) `67.6K 🔥` `+92%`
1. [原来杜翠雀第一个想给李兰香下毒](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%9D%9C%E7%BF%A0%E9%9B%80%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%83%B3%E7%BB%99%E6%9D%8E%E5%85%B0%E9%A6%99%E4%B8%8B%E6%AF%92%23) `67.6K 🔥` `+28%`
1. [女子直播遭400多斤发情公鹿偷袭](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9B%B4%E6%92%AD%E9%81%AD400%E5%A4%9A%E6%96%A4%E5%8F%91%E6%83%85%E5%85%AC%E9%B9%BF%E5%81%B7%E8%A2%AD%23) `67.6K 🔥` `+92%`
1. [香港历史上首个五年规划](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%8E%86%E5%8F%B2%E4%B8%8A%E9%A6%96%E4%B8%AA%E4%BA%94%E5%B9%B4%E8%A7%84%E5%88%92%23) `67.6K 🔥` `+92%`
1. [粉笔承认模仿超格](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E6%89%BF%E8%AE%A4%E6%A8%A1%E4%BB%BF%E8%B6%85%E6%A0%BC%23) `67.6K 🔥` `+92%`
1. [2岁幼童坠亡母亲说看不出老公自责](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%B9%BC%E7%AB%A5%E5%9D%A0%E4%BA%A1%E6%AF%8D%E4%BA%B2%E8%AF%B4%E7%9C%8B%E4%B8%8D%E5%87%BA%E8%80%81%E5%85%AC%E8%87%AA%E8%B4%A3%23) `67.6K 🔥` `+92%`
1. [日本罗森推出只有玉米粒的便当](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%97%E6%A3%AE%E6%8E%A8%E5%87%BA%E5%8F%AA%E6%9C%89%E7%8E%89%E7%B1%B3%E7%B2%92%E7%9A%84%E4%BE%BF%E5%BD%93%23) `67.6K 🔥` `+92%`
1. [健身房老板的天都塌了](https://s.weibo.com/weibo?q=%23%E5%81%A5%E8%BA%AB%E6%88%BF%E8%80%81%E6%9D%BF%E7%9A%84%E5%A4%A9%E9%83%BD%E5%A1%8C%E4%BA%86%23) `67.6K 🔥` `+92%`
1. [粉笔小作文](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E5%B0%8F%E4%BD%9C%E6%96%87%23) `67.6K 🔥` `+92%`
1. [粉笔说做生意却哄着小孩喊恩师](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E8%AF%B4%E5%81%9A%E7%94%9F%E6%84%8F%E5%8D%B4%E5%93%84%E7%9D%80%E5%B0%8F%E5%AD%A9%E5%96%8A%E6%81%A9%E5%B8%88%23) `67.6K 🔥` `+91%`
1. [iOS27电池图标 年年吐槽年年买](https://s.weibo.com/weibo?q=%23iOS27%E7%94%B5%E6%B1%A0%E5%9B%BE%E6%A0%87%20%E5%B9%B4%E5%B9%B4%E5%90%90%E6%A7%BD%E5%B9%B4%E5%B9%B4%E4%B9%B0%23) `67.6K 🔥` `+92%`
1. [JackeyLove眼含热泪](https://s.weibo.com/weibo?q=%23JackeyLove%E7%9C%BC%E5%90%AB%E7%83%AD%E6%B3%AA%23) `67.6K 🔥` `+92%`
1. [TES全员回应晋级世界赛](https://s.weibo.com/weibo?q=%23TES%E5%85%A8%E5%91%98%E5%9B%9E%E5%BA%94%E6%99%8B%E7%BA%A7%E4%B8%96%E7%95%8C%E8%B5%9B%23) `67.6K 🔥` `+92%`
1. [殷桃回应嫌弃邓为](https://s.weibo.com/weibo?q=%23%E6%AE%B7%E6%A1%83%E5%9B%9E%E5%BA%94%E5%AB%8C%E5%BC%83%E9%82%93%E4%B8%BA%23) `67.6K 🔥` `+92%`
1. [九毛九股价跌至九毛九](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E6%AF%9B%E4%B9%9D%E8%82%A1%E4%BB%B7%E8%B7%8C%E8%87%B3%E4%B9%9D%E6%AF%9B%E4%B9%9D%23) `67.6K 🔥` `-52%`

Updated at 2026-09-18 06:52:49

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
