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

1. [早春晴朗 我为嫌这12个字土道歉](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%20%E6%88%91%E4%B8%BA%E5%AB%8C%E8%BF%9912%E4%B8%AA%E5%AD%97%E5%9C%9F%E9%81%93%E6%AD%89%23) `85.6K 🔥` `NEW`
1. [自私虚伪的人再爱你也给不出](https://s.weibo.com/weibo?q=%23%E8%87%AA%E7%A7%81%E8%99%9A%E4%BC%AA%E7%9A%84%E4%BA%BA%E5%86%8D%E7%88%B1%E4%BD%A0%E4%B9%9F%E7%BB%99%E4%B8%8D%E5%87%BA%23) `85.1K 🔥` `NEW`
1. [救援人员小心翼翼保管淤泥下的物品](https://s.weibo.com/weibo?q=%23%E6%95%91%E6%8F%B4%E4%BA%BA%E5%91%98%E5%B0%8F%E5%BF%83%E7%BF%BC%E7%BF%BC%E4%BF%9D%E7%AE%A1%E6%B7%A4%E6%B3%A5%E4%B8%8B%E7%9A%84%E7%89%A9%E5%93%81%23) `85.0K 🔥` `NEW`
1. [中国女排无缘直通洛杉矶](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92%E6%97%A0%E7%BC%98%E7%9B%B4%E9%80%9A%E6%B4%9B%E6%9D%89%E7%9F%B6%23) `84.9K 🔥` `NEW`
1. [泰国女排首进奥运会](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%A5%B3%E6%8E%92%E9%A6%96%E8%BF%9B%E5%A5%A5%E8%BF%90%E4%BC%9A%23) `84.8K 🔥` `NEW`
1. [王俊凯带粉丝唱心引力进错拍了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B8%A6%E7%B2%89%E4%B8%9D%E5%94%B1%E5%BF%83%E5%BC%95%E5%8A%9B%E8%BF%9B%E9%94%99%E6%8B%8D%E4%BA%86%23) `84.8K 🔥` `NEW`
1. [片仔癀5年市值蒸发超1900亿](https://s.weibo.com/weibo?q=%23%E7%89%87%E4%BB%94%E7%99%805%E5%B9%B4%E5%B8%82%E5%80%BC%E8%92%B8%E5%8F%91%E8%B6%851900%E4%BA%BF%23) `84.7K 🔥` `NEW`
1. [2026PEL夏决](https://s.weibo.com/weibo?q=%232026PEL%E5%A4%8F%E5%86%B3%23) `84.6K 🔥` `NEW`
1. [爷爷留的信字字不提爱句句都是爱](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E7%95%99%E7%9A%84%E4%BF%A1%E5%AD%97%E5%AD%97%E4%B8%8D%E6%8F%90%E7%88%B1%E5%8F%A5%E5%8F%A5%E9%83%BD%E6%98%AF%E7%88%B1%23) `84.5K 🔥` `NEW`
1. [都想吃对方而不想被吃](https://s.weibo.com/weibo?q=%23%E9%83%BD%E6%83%B3%E5%90%83%E5%AF%B9%E6%96%B9%E8%80%8C%E4%B8%8D%E6%83%B3%E8%A2%AB%E5%90%83%23) `84.5K 🔥` `NEW`
1. [日本同事收到了中国同事给的零食](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%90%8C%E4%BA%8B%E6%94%B6%E5%88%B0%E4%BA%86%E4%B8%AD%E5%9B%BD%E5%90%8C%E4%BA%8B%E7%BB%99%E7%9A%84%E9%9B%B6%E9%A3%9F%23) `84.4K 🔥` `NEW`
1. [女排 朱婷](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%8E%92%20%E6%9C%B1%E5%A9%B7%23) `242.4K 🔥` `-81%`
1. [尼泊尔重大灾害是冰圈松动预警](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E9%87%8D%E5%A4%A7%E7%81%BE%E5%AE%B3%E6%98%AF%E5%86%B0%E5%9C%88%E6%9D%BE%E5%8A%A8%E9%A2%84%E8%AD%A6%23) `86.1K 🔥` `-70%`
1. [我国从月球传照片4分钟缩到12秒](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E4%BB%8E%E6%9C%88%E7%90%83%E4%BC%A0%E7%85%A7%E7%89%874%E5%88%86%E9%92%9F%E7%BC%A9%E5%88%B012%E7%A7%92%23) `86.1K 🔥` `-83%`
1. [花少2心眼子排名](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E5%BF%83%E7%9C%BC%E5%AD%90%E6%8E%92%E5%90%8D%23) `86.0K 🔥` `-82%`
1. [许晴花少2表现被理解](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%99%B4%E8%8A%B1%E5%B0%912%E8%A1%A8%E7%8E%B0%E8%A2%AB%E7%90%86%E8%A7%A3%23) `86.0K 🔥` `-83%`
1. [全世界都在陪阿拉斯加胡闹](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E9%83%BD%E5%9C%A8%E9%99%AA%E9%98%BF%E6%8B%89%E6%96%AF%E5%8A%A0%E8%83%A1%E9%97%B9%23) `85.9K 🔥` `-67%`
1. [网友面试2000多工资的工作](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%9D%A2%E8%AF%952000%E5%A4%9A%E5%B7%A5%E8%B5%84%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `85.9K 🔥` `-68%`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `85.8K 🔥` `-84%`
1. [花少2杨洋走丢事件](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E6%9D%A8%E6%B4%8B%E8%B5%B0%E4%B8%A2%E4%BA%8B%E4%BB%B6%23) `85.8K 🔥` `-68%`
1. [当动物可以变幻成高跟鞋](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%8A%A8%E7%89%A9%E5%8F%AF%E4%BB%A5%E5%8F%98%E5%B9%BB%E6%88%90%E9%AB%98%E8%B7%9F%E9%9E%8B%23) `85.8K 🔥` `-70%`
1. [女孩被踢出845个工作群无奈离职](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%A2%AB%E8%B8%A2%E5%87%BA845%E4%B8%AA%E5%B7%A5%E4%BD%9C%E7%BE%A4%E6%97%A0%E5%A5%88%E7%A6%BB%E8%81%8C%23) `85.7K 🔥` `-68%`
1. [爷爷去世前怕孙女饿提前包好饺子](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E5%8E%BB%E4%B8%96%E5%89%8D%E6%80%95%E5%AD%99%E5%A5%B3%E9%A5%BF%E6%8F%90%E5%89%8D%E5%8C%85%E5%A5%BD%E9%A5%BA%E5%AD%90%23) `85.7K 🔥` `-71%`
1. [陈妍希儿子出镜了我家那闺女](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%84%BF%E5%AD%90%E5%87%BA%E9%95%9C%E4%BA%86%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%23) `85.7K 🔥` `-69%`
1. [金饰销量暴跌34%](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E9%94%80%E9%87%8F%E6%9A%B4%E8%B7%8C34%25%23) `85.7K 🔥` `-68%`
1. [爱在无尽夏剧组回应孟子义笑场](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%9C%A8%E6%97%A0%E5%B0%BD%E5%A4%8F%E5%89%A7%E7%BB%84%E5%9B%9E%E5%BA%94%E5%AD%9F%E5%AD%90%E4%B9%89%E7%AC%91%E5%9C%BA%23) `85.6K 🔥` `-68%`
1. [中国女排亚锦赛亚军](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92%E4%BA%9A%E9%94%A6%E8%B5%9B%E4%BA%9A%E5%86%9B%23) `85.5K 🔥` `-68%`
1. [吉隆泥石流痕迹有20层楼高](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E7%97%95%E8%BF%B9%E6%9C%8920%E5%B1%82%E6%A5%BC%E9%AB%98%23) `85.5K 🔥` `-68%`
1. [沈佳润MV给小沈阳看吃醋了](https://s.weibo.com/weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6MV%E7%BB%99%E5%B0%8F%E6%B2%88%E9%98%B3%E7%9C%8B%E5%90%83%E9%86%8B%E4%BA%86%23) `85.5K 🔥` `-68%`
1. [芭莎嘉宾](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E8%8E%8E%E5%98%89%E5%AE%BE%23) `85.4K 🔥` `-67%`
1. [花少2爆料文](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E7%88%86%E6%96%99%E6%96%87%23) `85.4K 🔥` `-68%`
1. [蜂花logo设计师终于被懂了](https://s.weibo.com/weibo?q=%23%E8%9C%82%E8%8A%B1logo%E8%AE%BE%E8%AE%A1%E5%B8%88%E7%BB%88%E4%BA%8E%E8%A2%AB%E6%87%82%E4%BA%86%23) `85.4K 🔥` `-68%`
1. [皇马VS马拉加](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%ACVS%E9%A9%AC%E6%8B%89%E5%8A%A0%23) `85.3K 🔥` `-69%`
1. [爷爷去世前留信让孙女守灵别挨饿](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E5%8E%BB%E4%B8%96%E5%89%8D%E7%95%99%E4%BF%A1%E8%AE%A9%E5%AD%99%E5%A5%B3%E5%AE%88%E7%81%B5%E5%88%AB%E6%8C%A8%E9%A5%BF%23) `85.3K 🔥` `-68%`
1. [卵巢出问题全身都会受影响](https://s.weibo.com/weibo?q=%23%E5%8D%B5%E5%B7%A2%E5%87%BA%E9%97%AE%E9%A2%98%E5%85%A8%E8%BA%AB%E9%83%BD%E4%BC%9A%E5%8F%97%E5%BD%B1%E5%93%8D%23) `85.3K 🔥` `-68%`
1. [下意识的偏爱真的藏不住](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E6%84%8F%E8%AF%86%E7%9A%84%E5%81%8F%E7%88%B1%E7%9C%9F%E7%9A%84%E8%97%8F%E4%B8%8D%E4%BD%8F%23) `85.2K 🔥` `-68%`
1. [中国女排回应亚锦赛亚军](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92%E5%9B%9E%E5%BA%94%E4%BA%9A%E9%94%A6%E8%B5%9B%E4%BA%9A%E5%86%9B%23) `85.2K 🔥` `-67%`
1. [外耗的人也长结节](https://s.weibo.com/weibo?q=%23%E5%A4%96%E8%80%97%E7%9A%84%E4%BA%BA%E4%B9%9F%E9%95%BF%E7%BB%93%E8%8A%82%23) `85.2K 🔥` `-67%`
1. [虞书欣念相思何盼海皇吃播](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BF%B5%E7%9B%B8%E6%80%9D%E4%BD%95%E7%9B%BC%E6%B5%B7%E7%9A%87%E5%90%83%E6%92%AD%23) `85.1K 🔥` `-68%`
1. [曝有人在小红书公开卖假证](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9C%89%E4%BA%BA%E5%9C%A8%E5%B0%8F%E7%BA%A2%E4%B9%A6%E5%85%AC%E5%BC%80%E5%8D%96%E5%81%87%E8%AF%81%23) `85.0K 🔥` `-67%`
1. [重庆轻轨成了国外游客打卡的地方](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E8%BD%BB%E8%BD%A8%E6%88%90%E4%BA%86%E5%9B%BD%E5%A4%96%E6%B8%B8%E5%AE%A2%E6%89%93%E5%8D%A1%E7%9A%84%E5%9C%B0%E6%96%B9%23) `85.0K 🔥` `-67%`
1. [PEL](https://s.weibo.com/weibo?q=%23PEL%23) `84.9K 🔥` `-67%`
1. [黄灿灿差点被妈妈害了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%B7%AE%E7%82%B9%E8%A2%AB%E5%A6%88%E5%A6%88%E5%AE%B3%E4%BA%86%23) `84.9K 🔥` `-67%`
1. [谁来管管现在的配音](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%A5%E7%AE%A1%E7%AE%A1%E7%8E%B0%E5%9C%A8%E7%9A%84%E9%85%8D%E9%9F%B3%23) `84.7K 🔥` `-68%`
1. [中国女排2比3泰国女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%922%E6%AF%943%E6%B3%B0%E5%9B%BD%E5%A5%B3%E6%8E%92%23) `84.7K 🔥` `-67%`
1. [黄灿灿直播哭了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E7%9B%B4%E6%92%AD%E5%93%AD%E4%BA%86%23) `84.6K 🔥` `-67%`
1. [LGD夏季赛总冠军](https://s.weibo.com/weibo?q=%23LGD%E5%A4%8F%E5%AD%A3%E8%B5%9B%E6%80%BB%E5%86%A0%E5%86%9B%23) `84.6K 🔥` `-67%`
1. [房贷最长40年购房者称压力下降](https://s.weibo.com/weibo?q=%23%E6%88%BF%E8%B4%B7%E6%9C%80%E9%95%BF40%E5%B9%B4%E8%B4%AD%E6%88%BF%E8%80%85%E7%A7%B0%E5%8E%8B%E5%8A%9B%E4%B8%8B%E9%99%8D%23) `84.5K 🔥` `-67%`
1. [节目组回应被指遗弃造景垃圾](https://s.weibo.com/weibo?q=%23%E8%8A%82%E7%9B%AE%E7%BB%84%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%8C%87%E9%81%97%E5%BC%83%E9%80%A0%E6%99%AF%E5%9E%83%E5%9C%BE%23) `84.4K 🔥` `-68%`
1. [这是我的岛节目遗留道具成海滩垃圾](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E6%88%91%E7%9A%84%E5%B2%9B%E8%8A%82%E7%9B%AE%E9%81%97%E7%95%99%E9%81%93%E5%85%B7%E6%88%90%E6%B5%B7%E6%BB%A9%E5%9E%83%E5%9C%BE%23) `84.3K 🔥` `-68%`

Updated at 2026-08-31 03:48:44

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
