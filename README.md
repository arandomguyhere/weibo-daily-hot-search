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

1. [微博文化之夜之这是谁 (Weibo Culture Night: Who is this?)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%B9%8B%E5%A4%9C%E4%B9%8B%E8%BF%99%E6%98%AF%E8%B0%81%23) `826.3K 🔥` `NEW`
1. [这种手机壳可能是医疗垃圾做的](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E6%89%8B%E6%9C%BA%E5%A3%B3%E5%8F%AF%E8%83%BD%E6%98%AF%E5%8C%BB%E7%96%97%E5%9E%83%E5%9C%BE%E5%81%9A%E7%9A%84%23) `590.4K 🔥` `NEW`
1. [本周这些数据最值得关注](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E8%BF%99%E4%BA%9B%E6%95%B0%E6%8D%AE%E6%9C%80%E5%80%BC%E5%BE%97%E5%85%B3%E6%B3%A8%23) `495.1K 🔥` `NEW`
1. [只有小时候发烧才有这种感觉](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E5%B0%8F%E6%97%B6%E5%80%99%E5%8F%91%E7%83%A7%E6%89%8D%E6%9C%89%E8%BF%99%E7%A7%8D%E6%84%9F%E8%A7%89%23) `441.8K 🔥` `NEW`
1. [台风白海豚](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `374.5K 🔥` `NEW`
1. [殡仪馆回应情侣平潭拍日出坠崖](https://s.weibo.com/weibo?q=%23%E6%AE%A1%E4%BB%AA%E9%A6%86%E5%9B%9E%E5%BA%94%E6%83%85%E4%BE%A3%E5%B9%B3%E6%BD%AD%E6%8B%8D%E6%97%A5%E5%87%BA%E5%9D%A0%E5%B4%96%23) `358.9K 🔥` `NEW`
1. [飞行员带女子进驾驶舱合照系旧闻](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E8%A1%8C%E5%91%98%E5%B8%A6%E5%A5%B3%E5%AD%90%E8%BF%9B%E9%A9%BE%E9%A9%B6%E8%88%B1%E5%90%88%E7%85%A7%E7%B3%BB%E6%97%A7%E9%97%BB%23) `355.0K 🔥` `NEW`
1. [沈腾演技](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%BC%94%E6%8A%80%23) `341.8K 🔥` `NEW`
1. [情侣平潭翻墙拍日出坠崖](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E5%B9%B3%E6%BD%AD%E7%BF%BB%E5%A2%99%E6%8B%8D%E6%97%A5%E5%87%BA%E5%9D%A0%E5%B4%96%23) `337.1K 🔥` `NEW`
1. [国乒围剿张本美和](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%9B%B4%E5%89%BF%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `336.9K 🔥` `NEW`
1. [王者荣耀电竞世俱杯总决赛 (Glory of Kings E-Sports Club World Cup Finals)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E7%94%B5%E7%AB%9E%E4%B8%96%E4%BF%B1%E6%9D%AF%E6%80%BB%E5%86%B3%E8%B5%9B%23) `322.4K 🔥` `NEW`
1. [AG对战KSG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98KSG%23) `319.5K 🔥` `NEW`
1. [成毅扔伞和粉丝一起淋雨](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E6%89%94%E4%BC%9E%E5%92%8C%E7%B2%89%E4%B8%9D%E4%B8%80%E8%B5%B7%E6%B7%8B%E9%9B%A8%23) `309.1K 🔥` `NEW`
1. [敖瑞鹏王玉雯正太扭腰来了](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%AD%A3%E5%A4%AA%E6%89%AD%E8%85%B0%E6%9D%A5%E4%BA%86%23) `303.0K 🔥` `NEW`
1. [河南三支一扶成绩全部作废公平吗](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E6%88%90%E7%BB%A9%E5%85%A8%E9%83%A8%E4%BD%9C%E5%BA%9F%E5%85%AC%E5%B9%B3%E5%90%97%23) `274.4K 🔥` `NEW`
1. [网传张凌赫准备考研了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%87%86%E5%A4%87%E8%80%83%E7%A0%94%E4%BA%86%23) `242.5K 🔥` `NEW`
1. [奥德赛](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `229.9K 🔥` `NEW`
1. [钟意状态](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%84%8F%E7%8A%B6%E6%80%81%23) `228.4K 🔥` `NEW`
1. [金价猛涨踏空的人哭麻了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E7%8C%9B%E6%B6%A8%E8%B8%8F%E7%A9%BA%E7%9A%84%E4%BA%BA%E5%93%AD%E9%BA%BB%E4%BA%86%23) `228.4K 🔥` `NEW`
1. [苹果AI 千问](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CAI%20%E5%8D%83%E9%97%AE%23) `228.4K 🔥` `NEW`
1. [三亚海边女明星们 (Sanya beach female stars)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E6%B5%B7%E8%BE%B9%E5%A5%B3%E6%98%8E%E6%98%9F%E4%BB%AC%23) `228.4K 🔥` `NEW`
1. [柬埔寨一园区围殴中国人致1死3伤](https://s.weibo.com/weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E4%B8%80%E5%9B%AD%E5%8C%BA%E5%9B%B4%E6%AE%B4%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%87%B41%E6%AD%BB3%E4%BC%A4%23) `228.1K 🔥` `NEW`
1. [华晨宇刺激之夜COS童趣迷兔](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%88%BA%E6%BF%80%E4%B9%8B%E5%A4%9CCOS%E7%AB%A5%E8%B6%A3%E8%BF%B7%E5%85%94%23) `227.4K 🔥` `NEW`
1. [小夜灯 性早熟](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%9C%E7%81%AF%20%E6%80%A7%E6%97%A9%E7%86%9F%23) `227.4K 🔥` `NEW`
1. [曾辉韩雨彤红毯状态](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E9%9F%A9%E9%9B%A8%E5%BD%A4%E7%BA%A2%E6%AF%AF%E7%8A%B6%E6%80%81%23) `227.2K 🔥` `NEW`
1. [西村力演唱会的发言](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E5%8F%91%E8%A8%80%23) `219.5K 🔥` `NEW`
1. [常吃4种食物不易得胃癌](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%90%834%E7%A7%8D%E9%A3%9F%E7%89%A9%E4%B8%8D%E6%98%93%E5%BE%97%E8%83%83%E7%99%8C%23) `209.9K 🔥` `NEW`
1. [王源 巡演看一场少一场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%20%E5%B7%A1%E6%BC%94%E7%9C%8B%E4%B8%80%E5%9C%BA%E5%B0%91%E4%B8%80%E5%9C%BA%23) `202.5K 🔥` `NEW`
1. [千亿巨头清仓英伟达](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%BA%BF%E5%B7%A8%E5%A4%B4%E6%B8%85%E4%BB%93%E8%8B%B1%E4%BC%9F%E8%BE%BE%23) `199.2K 🔥` `NEW`
1. [长期穿碳板鞋的受害者出现了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E7%A9%BF%E7%A2%B3%E6%9D%BF%E9%9E%8B%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `195.7K 🔥` `NEW`
1. [白海豚开始发力了 (The white dolphin is starting to exert its strength)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%BC%80%E5%A7%8B%E5%8F%91%E5%8A%9B%E4%BA%86%23) `190.6K 🔥` `NEW`
1. [爷爷不泡茶 店员打人](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%8D%E6%B3%A1%E8%8C%B6%20%E5%BA%97%E5%91%98%E6%89%93%E4%BA%BA%23) `187.1K 🔥` `NEW`
1. [丁禹兮红包](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%BA%A2%E5%8C%85%23) `183.6K 🔥` `NEW`
1. [王橹杰是ive的粉丝](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%98%AFive%E7%9A%84%E7%B2%89%E4%B8%9D%23) `171.5K 🔥` `NEW`
1. [发现父母开始看自己脸色了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E7%88%B6%E6%AF%8D%E5%BC%80%E5%A7%8B%E7%9C%8B%E8%87%AA%E5%B7%B1%E8%84%B8%E8%89%B2%E4%BA%86%23) `166.4K 🔥` `NEW`
1. [陈伟霆说我还以为去了成毅的演唱会](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E8%AF%B4%E6%88%91%E8%BF%98%E4%BB%A5%E4%B8%BA%E5%8E%BB%E4%BA%86%E6%88%90%E6%AF%85%E7%9A%84%E6%BC%94%E5%94%B1%E4%BC%9A%23) `165.5K 🔥` `NEW`
1. [荷兰弟赞达亚两口子有多高精力](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%BC%9F%E8%B5%9E%E8%BE%BE%E4%BA%9A%E4%B8%A4%E5%8F%A3%E5%AD%90%E6%9C%89%E5%A4%9A%E9%AB%98%E7%B2%BE%E5%8A%9B%23) `161.1K 🔥` `NEW`
1. [小伙睡梦翻身把隐翅虫碾进内裤](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E7%9D%A1%E6%A2%A6%E7%BF%BB%E8%BA%AB%E6%8A%8A%E9%9A%90%E7%BF%85%E8%99%AB%E7%A2%BE%E8%BF%9B%E5%86%85%E8%A3%A4%23) `154.2K 🔥` `NEW`
1. [孟子义模仿吴宣仪跳舞带子掉了](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%A8%A1%E4%BB%BF%E5%90%B4%E5%AE%A3%E4%BB%AA%E8%B7%B3%E8%88%9E%E5%B8%A6%E5%AD%90%E6%8E%89%E4%BA%86%23) `154.0K 🔥` `NEW`
1. [丁禹兮单膝下跪](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%8D%95%E8%86%9D%E4%B8%8B%E8%B7%AA%23) `149.1K 🔥` `NEW`
1. [向下对齐是亲密关系最大的诅咒 (Downward alignment is the greatest curse of intimacy)](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%B8%8B%E5%AF%B9%E9%BD%90%E6%98%AF%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E6%9C%80%E5%A4%A7%E7%9A%84%E8%AF%85%E5%92%92%23) `147.9K 🔥` `NEW`
1. [迪丽热巴香港造型](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%A6%99%E6%B8%AF%E9%80%A0%E5%9E%8B%23) `147.9K 🔥` `NEW`
1. [SNH48总选排名](https://s.weibo.com/weibo?q=%23SNH48%E6%80%BB%E9%80%89%E6%8E%92%E5%90%8D%23) `142.6K 🔥` `NEW`
1. [20岁中国男子在泰国被刺多刀身亡](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%90%E5%9C%A8%E6%B3%B0%E5%9B%BD%E8%A2%AB%E5%88%BA%E5%A4%9A%E5%88%80%E8%BA%AB%E4%BA%A1%23) `137.7K 🔥` `NEW`
1. [西村力演唱会的状态](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E7%8A%B6%E6%80%81%23) `134.7K 🔥` `NEW`
1. [AI帮你开发以前要花钱的功能](https://s.weibo.com/weibo?q=%23AI%E5%B8%AE%E4%BD%A0%E5%BC%80%E5%8F%91%E4%BB%A5%E5%89%8D%E8%A6%81%E8%8A%B1%E9%92%B1%E7%9A%84%E5%8A%9F%E8%83%BD%23) `134.7K 🔥` `NEW`
1. [吴磊刺激之夜剑来联动舞台](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E5%88%BA%E6%BF%80%E4%B9%8B%E5%A4%9C%E5%89%91%E6%9D%A5%E8%81%94%E5%8A%A8%E8%88%9E%E5%8F%B0%23) `134.7K 🔥` `NEW`
1. [和平精英年度返场](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%E5%B9%B4%E5%BA%A6%E8%BF%94%E5%9C%BA%23) `134.7K 🔥` `NEW`
1. [西平刑案嫌犯所藏玉米地有2米高](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%B9%B3%E5%88%91%E6%A1%88%E5%AB%8C%E7%8A%AF%E6%89%80%E8%97%8F%E7%8E%89%E7%B1%B3%E5%9C%B0%E6%9C%892%E7%B1%B3%E9%AB%98%23) `134.6K 🔥` `NEW`
1. [蔡依林唱了布拉格广场](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%94%B1%E4%BA%86%E5%B8%83%E6%8B%89%E6%A0%BC%E5%B9%BF%E5%9C%BA%23) `134.6K 🔥` `NEW`
1. [张凌赫参加阿维塔07L上市发布会 (Zhang Linghe attended Avita 07L launch conference)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%82%E5%8A%A0%E9%98%BF%E7%BB%B4%E5%A1%9407L%E4%B8%8A%E5%B8%82%E5%8F%91%E5%B8%83%E4%BC%9A%23) `134.5K 🔥` `NEW`

Updated at 2026-08-09 00:36:36

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
