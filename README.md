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

1. [上1休1上5休3](https://s.weibo.com/weibo?q=%23%E4%B8%8A1%E4%BC%911%E4%B8%8A5%E4%BC%913%23) `1.4M 🔥` `NEW`
1. [才意识到一台苹果手机能换一万斤粮食](https://s.weibo.com/weibo?q=%23%E6%89%8D%E6%84%8F%E8%AF%86%E5%88%B0%E4%B8%80%E5%8F%B0%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%E8%83%BD%E6%8D%A2%E4%B8%80%E4%B8%87%E6%96%A4%E7%B2%AE%E9%A3%9F%23) `816.5K 🔥` `NEW`
1. [生娃失明失聪女子原本是英语老师](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%A8%83%E5%A4%B1%E6%98%8E%E5%A4%B1%E8%81%AA%E5%A5%B3%E5%AD%90%E5%8E%9F%E6%9C%AC%E6%98%AF%E8%8B%B1%E8%AF%AD%E8%80%81%E5%B8%88%23) `674.6K 🔥` `NEW`
1. [幼童母亲称丈夫直到买墓地才悲伤](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E7%AB%A5%E6%AF%8D%E4%BA%B2%E7%A7%B0%E4%B8%88%E5%A4%AB%E7%9B%B4%E5%88%B0%E4%B9%B0%E5%A2%93%E5%9C%B0%E6%89%8D%E6%82%B2%E4%BC%A4%23) `452.0K 🔥` `NEW`
1. [iPhoneDuo维修费8000](https://s.weibo.com/weibo?q=%23iPhoneDuo%E7%BB%B4%E4%BF%AE%E8%B4%B98000%23) `379.8K 🔥` `NEW`
1. [芒果给白鹿的定位是国民女主](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E7%BB%99%E7%99%BD%E9%B9%BF%E7%9A%84%E5%AE%9A%E4%BD%8D%E6%98%AF%E5%9B%BD%E6%B0%91%E5%A5%B3%E4%B8%BB%23) `301.4K 🔥` `NEW`
1. [我们来了 刘雯](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E6%9D%A5%E4%BA%86%20%E5%88%98%E9%9B%AF%23) `295.9K 🔥` `NEW`
1. [棣棣和耀文蹦极太酷了](https://s.weibo.com/weibo?q=%23%E6%A3%A3%E6%A3%A3%E5%92%8C%E8%80%80%E6%96%87%E8%B9%A6%E6%9E%81%E5%A4%AA%E9%85%B7%E4%BA%86%23) `289.6K 🔥` `NEW`
1. [粉笔 四海](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%20%E5%9B%9B%E6%B5%B7%23) `284.6K 🔥` `NEW`
1. [陈建州拜托大家3件事](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BB%BA%E5%B7%9E%E6%8B%9C%E6%89%98%E5%A4%A7%E5%AE%B63%E4%BB%B6%E4%BA%8B%23) `280.6K 🔥` `NEW`
1. [机顶盒即将退场](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E9%A1%B6%E7%9B%92%E5%8D%B3%E5%B0%86%E9%80%80%E5%9C%BA%23) `276.6K 🔥` `NEW`
1. [国际大花李冰冰国民女主白鹿对应照片](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E5%A4%A7%E8%8A%B1%E6%9D%8E%E5%86%B0%E5%86%B0%E5%9B%BD%E6%B0%91%E5%A5%B3%E4%B8%BB%E7%99%BD%E9%B9%BF%E5%AF%B9%E5%BA%94%E7%85%A7%E7%89%87%23) `238.2K 🔥` `NEW`
1. [美科技股集体猛涨](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%A7%91%E6%8A%80%E8%82%A1%E9%9B%86%E4%BD%93%E7%8C%9B%E6%B6%A8%23) `208.2K 🔥` `NEW`
1. [陈建州不抽烟不喝酒但不睡觉](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BB%BA%E5%B7%9E%E4%B8%8D%E6%8A%BD%E7%83%9F%E4%B8%8D%E5%96%9D%E9%85%92%E4%BD%86%E4%B8%8D%E7%9D%A1%E8%A7%89%23) `206.4K 🔥` `NEW`
1. [坠亡幼童母亲称孩子父亲绝非故意](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%B9%BC%E7%AB%A5%E6%AF%8D%E4%BA%B2%E7%A7%B0%E5%AD%A9%E5%AD%90%E7%88%B6%E4%BA%B2%E7%BB%9D%E9%9D%9E%E6%95%85%E6%84%8F%23) `205.9K 🔥` `NEW`
1. [曝85花和老公已离婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D85%E8%8A%B1%E5%92%8C%E8%80%81%E5%85%AC%E5%B7%B2%E7%A6%BB%E5%A9%9A%23) `203.2K 🔥` `NEW`
1. [终于知道工作能力强是什么样的](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E5%B7%A5%E4%BD%9C%E8%83%BD%E5%8A%9B%E5%BC%BA%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%23) `201.6K 🔥` `NEW`
1. [我们来了](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E6%9D%A5%E4%BA%86%23) `198.9K 🔥` `NEW`
1. [林绣芄终身未嫁](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%BB%A3%E8%8A%84%E7%BB%88%E8%BA%AB%E6%9C%AA%E5%AB%81%23) `192.2K 🔥` `NEW`
1. [九一八事变爆发95年](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E4%B8%80%E5%85%AB%E4%BA%8B%E5%8F%98%E7%88%86%E5%8F%9195%E5%B9%B4%23) `189.0K 🔥` `NEW`
1. [刘宇宁是命运雕刻出来的孤品](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%98%AF%E5%91%BD%E8%BF%90%E9%9B%95%E5%88%BB%E5%87%BA%E6%9D%A5%E7%9A%84%E5%AD%A4%E5%93%81%23) `189.0K 🔥` `NEW`
1. [中俄安理会投下反对票](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E5%AE%89%E7%90%86%E4%BC%9A%E6%8A%95%E4%B8%8B%E5%8F%8D%E5%AF%B9%E7%A5%A8%23) `174.9K 🔥` `NEW`
1. [UFO高速飞过墨西哥城上空](https://s.weibo.com/weibo?q=%23UFO%E9%AB%98%E9%80%9F%E9%A3%9E%E8%BF%87%E5%A2%A8%E8%A5%BF%E5%93%A5%E5%9F%8E%E4%B8%8A%E7%A9%BA%23) `174.7K 🔥` `NEW`
1. [我们来了何炅口播就念了四个](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E6%9D%A5%E4%BA%86%E4%BD%95%E7%82%85%E5%8F%A3%E6%92%AD%E5%B0%B1%E5%BF%B5%E4%BA%86%E5%9B%9B%E4%B8%AA%23) `166.9K 🔥` `NEW`
1. [烫伤女童称妈妈我痛死了我医不好了](https://s.weibo.com/weibo?q=%23%E7%83%AB%E4%BC%A4%E5%A5%B3%E7%AB%A5%E7%A7%B0%E5%A6%88%E5%A6%88%E6%88%91%E7%97%9B%E6%AD%BB%E4%BA%86%E6%88%91%E5%8C%BB%E4%B8%8D%E5%A5%BD%E4%BA%86%23) `166.2K 🔥` `NEW`
1. [粉笔超格四海公考商战](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E8%B6%85%E6%A0%BC%E5%9B%9B%E6%B5%B7%E5%85%AC%E8%80%83%E5%95%86%E6%88%98%23) `166.1K 🔥` `NEW`
1. [一瓯春剧情](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%93%AF%E6%98%A5%E5%89%A7%E6%83%85%23) `165.8K 🔥` `NEW`
1. [兰香如故婆媳这段对手戏看得太爽了](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E5%A9%86%E5%AA%B3%E8%BF%99%E6%AE%B5%E5%AF%B9%E6%89%8B%E6%88%8F%E7%9C%8B%E5%BE%97%E5%A4%AA%E7%88%BD%E4%BA%86%23) `163.4K 🔥` `NEW`
1. [程潇浅浅跳一下都很好看](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E6%B5%85%E6%B5%85%E8%B7%B3%E4%B8%80%E4%B8%8B%E9%83%BD%E5%BE%88%E5%A5%BD%E7%9C%8B%23) `156.9K 🔥` `NEW`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `139.7K 🔥` `NEW`
1. [管家转卖退休副省长家名酒获利243万](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E5%AE%B6%E8%BD%AC%E5%8D%96%E9%80%80%E4%BC%91%E5%89%AF%E7%9C%81%E9%95%BF%E5%AE%B6%E5%90%8D%E9%85%92%E8%8E%B7%E5%88%A9243%E4%B8%87%23) `139.2K 🔥` `NEW`
1. [我们来了有鞠婧祎](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E6%9D%A5%E4%BA%86%E6%9C%89%E9%9E%A0%E5%A9%A7%E7%A5%8E%23) `123.5K 🔥` `NEW`
1. [918](https://s.weibo.com/weibo?q=%23918%23) `1.2M 🔥` `+1664%`
1. [第23届东博会峰会](https://s.weibo.com/weibo?q=%23%E7%AC%AC23%E5%B1%8A%E4%B8%9C%E5%8D%9A%E4%BC%9A%E5%B3%B0%E4%BC%9A%23) `1.1M 🔥` `+240%`
1. [医生回应举手式睡姿是身体在求救](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E4%B8%BE%E6%89%8B%E5%BC%8F%E7%9D%A1%E5%A7%BF%E6%98%AF%E8%BA%AB%E4%BD%93%E5%9C%A8%E6%B1%82%E6%95%91%23) `1.1M 🔥` `+87%`
1. [小猫突然把小狗的头扶正了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%AA%81%E7%84%B6%E6%8A%8A%E5%B0%8F%E7%8B%97%E7%9A%84%E5%A4%B4%E6%89%B6%E6%AD%A3%E4%BA%86%23) `367.6K 🔥` `+219%`
1. [杨某媛疑似在西班牙读博](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%9F%90%E5%AA%9B%E7%96%91%E4%BC%BC%E5%9C%A8%E8%A5%BF%E7%8F%AD%E7%89%99%E8%AF%BB%E5%8D%9A%23) `301.2K 🔥` `+218%`
1. [HYROX失禁女选手致歉](https://s.weibo.com/weibo?q=%23HYROX%E5%A4%B1%E7%A6%81%E5%A5%B3%E9%80%89%E6%89%8B%E8%87%B4%E6%AD%89%23) `199.7K 🔥` `+195%`
1. [亚运会有日本选手被分配男女一屋](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%9C%89%E6%97%A5%E6%9C%AC%E9%80%89%E6%89%8B%E8%A2%AB%E5%88%86%E9%85%8D%E7%94%B7%E5%A5%B3%E4%B8%80%E5%B1%8B%23) `160.3K 🔥` `+134%`
1. [2026湾区升明月你最期待谁](https://s.weibo.com/weibo?q=%232026%E6%B9%BE%E5%8C%BA%E5%8D%87%E6%98%8E%E6%9C%88%E4%BD%A0%E6%9C%80%E6%9C%9F%E5%BE%85%E8%B0%81%23) `143.3K 🔥` `+112%`
1. [秋天穿毛衣脖子空空的](https://s.weibo.com/weibo?q=%23%E7%A7%8B%E5%A4%A9%E7%A9%BF%E6%AF%9B%E8%A1%A3%E8%84%96%E5%AD%90%E7%A9%BA%E7%A9%BA%E7%9A%84%23) `140.0K 🔥` `+107%`
1. [女子生孩子后双目失明双耳失聪](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%9F%E5%AD%A9%E5%AD%90%E5%90%8E%E5%8F%8C%E7%9B%AE%E5%A4%B1%E6%98%8E%E5%8F%8C%E8%80%B3%E5%A4%B1%E8%81%AA%23) `135.4K 🔥` `+100%`
1. [影视飓风评测 看完不想买了](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E8%AF%84%E6%B5%8B%20%E7%9C%8B%E5%AE%8C%E4%B8%8D%E6%83%B3%E4%B9%B0%E4%BA%86%23) `134.5K 🔥` `+99%`
1. [西雅图吸毒者末世景象](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E9%9B%85%E5%9B%BE%E5%90%B8%E6%AF%92%E8%80%85%E6%9C%AB%E4%B8%96%E6%99%AF%E8%B1%A1%23) `121.2K 🔥` `+79%`
1. [30岁后找对象比赚钱还难](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%90%8E%E6%89%BE%E5%AF%B9%E8%B1%A1%E6%AF%94%E8%B5%9A%E9%92%B1%E8%BF%98%E9%9A%BE%23) `120.7K 🔥` `+43%`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `116.9K 🔥` `+73%`
1. [日本玉米便当](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%8E%89%E7%B1%B3%E4%BE%BF%E5%BD%93%23) `230.7K 🔥`
1. [偶像来了 国际大花](https://s.weibo.com/weibo?q=%23%E5%81%B6%E5%83%8F%E6%9D%A5%E4%BA%86%20%E5%9B%BD%E9%99%85%E5%A4%A7%E8%8A%B1%23) `185.4K 🔥`
1. [如果你出生于1992年至2003年之间](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E4%BD%A0%E5%87%BA%E7%94%9F%E4%BA%8E1992%E5%B9%B4%E8%87%B32003%E5%B9%B4%E4%B9%8B%E9%97%B4%23) `170.9K 🔥`

Updated at 2026-09-18 08:57:24

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
