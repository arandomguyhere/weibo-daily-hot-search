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

1. [乔尔杰维奇 郭士强](https://s.weibo.com/weibo?q=%23%E4%B9%94%E5%B0%94%E6%9D%B0%E7%BB%B4%E5%A5%87%20%E9%83%AD%E5%A3%AB%E5%BC%BA%23) `773.1K 🔥` `NEW`
1. [斑驳旧物铭刻90多年前不屈抗争](https://s.weibo.com/weibo?q=%23%E6%96%91%E9%A9%B3%E6%97%A7%E7%89%A9%E9%93%AD%E5%88%BB90%E5%A4%9A%E5%B9%B4%E5%89%8D%E4%B8%8D%E5%B1%88%E6%8A%97%E4%BA%89%23) `747.7K 🔥` `NEW`
1. [郑合惠子演技好牛](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E6%BC%94%E6%8A%80%E5%A5%BD%E7%89%9B%23) `727.2K 🔥` `NEW`
1. [中国男篮vs日本男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E6%97%A5%E6%9C%AC%E7%94%B7%E7%AF%AE%23) `667.4K 🔥` `NEW`
1. [池昌旭林珍娜太拼了吧](https://s.weibo.com/weibo?q=%23%E6%B1%A0%E6%98%8C%E6%97%AD%E6%9E%97%E7%8F%8D%E5%A8%9C%E5%A4%AA%E6%8B%BC%E4%BA%86%E5%90%A7%23) `470.0K 🔥` `NEW`
1. [郭士强 下课](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%A3%AB%E5%BC%BA%20%E4%B8%8B%E8%AF%BE%23) `464.2K 🔥` `NEW`
1. [湖北通报长江武汉段倾倒淤泥事件](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E9%80%9A%E6%8A%A5%E9%95%BF%E6%B1%9F%E6%AD%A6%E6%B1%89%E6%AE%B5%E5%80%BE%E5%80%92%E6%B7%A4%E6%B3%A5%E4%BA%8B%E4%BB%B6%23) `340.8K 🔥` `NEW`
1. [中国男篮比分被修正为77比97日本](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E6%AF%94%E5%88%86%E8%A2%AB%E4%BF%AE%E6%AD%A3%E4%B8%BA77%E6%AF%9497%E6%97%A5%E6%9C%AC%23) `340.2K 🔥` `NEW`
1. [兰香如故导演](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E5%AF%BC%E6%BC%94%23) `339.1K 🔥` `NEW`
1. [中国的小偷为何断崖式下降](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9A%84%E5%B0%8F%E5%81%B7%E4%B8%BA%E4%BD%95%E6%96%AD%E5%B4%96%E5%BC%8F%E4%B8%8B%E9%99%8D%23) `336.8K 🔥` `NEW`
1. [外国人称鹿晗本可统治KPOP](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E7%A7%B0%E9%B9%BF%E6%99%97%E6%9C%AC%E5%8F%AF%E7%BB%9F%E6%B2%BBKPOP%23) `335.4K 🔥` `NEW`
1. [联合早报](https://s.weibo.com/weibo?q=%23%E8%81%94%E5%90%88%E6%97%A9%E6%8A%A5%23) `335.2K 🔥` `NEW`
1. [卢昱晓发自拍被骂只会萌萌的道歉](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E5%8F%91%E8%87%AA%E6%8B%8D%E8%A2%AB%E9%AA%82%E5%8F%AA%E4%BC%9A%E8%90%8C%E8%90%8C%E7%9A%84%E9%81%93%E6%AD%89%23) `317.4K 🔥` `NEW`
1. [月入9000夫妻办婚礼只花1.6万](https://s.weibo.com/weibo?q=%23%E6%9C%88%E5%85%A59000%E5%A4%AB%E5%A6%BB%E5%8A%9E%E5%A9%9A%E7%A4%BC%E5%8F%AA%E8%8A%B11.6%E4%B8%87%23) `306.5K 🔥` `NEW`
1. [湖南卫视连发20条王鹤棣](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E8%BF%9E%E5%8F%9120%E6%9D%A1%E7%8E%8B%E9%B9%A4%E6%A3%A3%23) `305.6K 🔥` `NEW`
1. [法考](https://s.weibo.com/weibo?q=%23%E6%B3%95%E8%80%83%23) `296.6K 🔥` `NEW`
1. [阔直板形态手机受欢迎](https://s.weibo.com/weibo?q=%23%E9%98%94%E7%9B%B4%E6%9D%BF%E5%BD%A2%E6%80%81%E6%89%8B%E6%9C%BA%E5%8F%97%E6%AC%A2%E8%BF%8E%23) `257.6K 🔥` `NEW`
1. [墨西哥城上空的UFO可能来自义乌](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5%E5%9F%8E%E4%B8%8A%E7%A9%BA%E7%9A%84UFO%E5%8F%AF%E8%83%BD%E6%9D%A5%E8%87%AA%E4%B9%89%E4%B9%8C%23) `256.9K 🔥` `NEW`
1. [女子称失踪闺蜜托梦暗示尸骸位置](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%A4%B1%E8%B8%AA%E9%97%BA%E8%9C%9C%E6%89%98%E6%A2%A6%E6%9A%97%E7%A4%BA%E5%B0%B8%E9%AA%B8%E4%BD%8D%E7%BD%AE%23) `256.1K 🔥` `NEW`
1. [挑情丑闻](https://s.weibo.com/weibo?q=%23%E6%8C%91%E6%83%85%E4%B8%91%E9%97%BB%23) `254.6K 🔥` `NEW`
1. [兰香如故数据倒挂](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E6%95%B0%E6%8D%AE%E5%80%92%E6%8C%82%23) `242.8K 🔥` `NEW`
1. [杨毅点评](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%AF%85%E7%82%B9%E8%AF%84%23) `241.2K 🔥` `NEW`
1. [佟丽娅首谈离婚真相](https://s.weibo.com/weibo?q=%23%E4%BD%9F%E4%B8%BD%E5%A8%85%E9%A6%96%E8%B0%88%E7%A6%BB%E5%A9%9A%E7%9C%9F%E7%9B%B8%23) `234.2K 🔥` `NEW`
1. [亲子鉴定 医保](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%20%E5%8C%BB%E4%BF%9D%23) `213.4K 🔥` `NEW`
1. [2岁孩子坠亡父亲行为遭质疑](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%AD%A9%E5%AD%90%E5%9D%A0%E4%BA%A1%E7%88%B6%E4%BA%B2%E8%A1%8C%E4%B8%BA%E9%81%AD%E8%B4%A8%E7%96%91%23) `204.2K 🔥` `NEW`
1. [日本男篮仅2人入选世预赛名单](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%B7%E7%AF%AE%E4%BB%852%E4%BA%BA%E5%85%A5%E9%80%89%E4%B8%96%E9%A2%84%E8%B5%9B%E5%90%8D%E5%8D%95%23) `201.7K 🔥` `NEW`
1. [原来这就叫感官过载啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E5%8F%AB%E6%84%9F%E5%AE%98%E8%BF%87%E8%BD%BD%E5%95%8A%23) `196.6K 🔥` `NEW`
1. [中国vs日本](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDvs%E6%97%A5%E6%9C%AC%23) `195.5K 🔥` `NEW`
1. [袁东破防](https://s.weibo.com/weibo?q=%23%E8%A2%81%E4%B8%9C%E7%A0%B4%E9%98%B2%23) `181.6K 🔥` `NEW`
1. [退钱哥说中国篮球迷素质挺高](https://s.weibo.com/weibo?q=%23%E9%80%80%E9%92%B1%E5%93%A5%E8%AF%B4%E4%B8%AD%E5%9B%BD%E7%AF%AE%E7%90%83%E8%BF%B7%E7%B4%A0%E8%B4%A8%E6%8C%BA%E9%AB%98%23) `181.5K 🔥` `NEW`
1. [吃夜宵后多人测出吸毒阳性](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%A4%9C%E5%AE%B5%E5%90%8E%E5%A4%9A%E4%BA%BA%E6%B5%8B%E5%87%BA%E5%90%B8%E6%AF%92%E9%98%B3%E6%80%A7%23) `181.3K 🔥` `NEW`
1. [曝成毅出演不见英雄花不开](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%88%90%E6%AF%85%E5%87%BA%E6%BC%94%E4%B8%8D%E8%A7%81%E8%8B%B1%E9%9B%84%E8%8A%B1%E4%B8%8D%E5%BC%80%23) `174.2K 🔥` `NEW`
1. [Gala豪取五杀](https://s.weibo.com/weibo?q=%23Gala%E8%B1%AA%E5%8F%96%E4%BA%94%E6%9D%80%23) `172.7K 🔥` `NEW`
1. [科技新一iPhone18Pro用半天就腻了](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E6%96%B0%E4%B8%80iPhone18Pro%E7%94%A8%E5%8D%8A%E5%A4%A9%E5%B0%B1%E8%85%BB%E4%BA%86%23) `168.0K 🔥` `NEW`
1. [JDG战胜WE](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9CWE%23) `162.8K 🔥` `NEW`
1. [郭士强说男篮的目标就是来冲击冠军](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%A3%AB%E5%BC%BA%E8%AF%B4%E7%94%B7%E7%AF%AE%E7%9A%84%E7%9B%AE%E6%A0%87%E5%B0%B1%E6%98%AF%E6%9D%A5%E5%86%B2%E5%87%BB%E5%86%A0%E5%86%9B%23) `159.0K 🔥` `NEW`
1. [美使馆918发帖日本网民破防](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BD%BF%E9%A6%86918%E5%8F%91%E5%B8%96%E6%97%A5%E6%9C%AC%E7%BD%91%E6%B0%91%E7%A0%B4%E9%98%B2%23) `151.7K 🔥` `NEW`
1. [陕西秦王级大墓或为秦始皇嫡祖母](https://s.weibo.com/weibo?q=%23%E9%99%95%E8%A5%BF%E7%A7%A6%E7%8E%8B%E7%BA%A7%E5%A4%A7%E5%A2%93%E6%88%96%E4%B8%BA%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%AB%A1%E7%A5%96%E6%AF%8D%23) `150.9K 🔥` `NEW`
1. [鞠婧祎 全能偶像剪影](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%20%E5%85%A8%E8%83%BD%E5%81%B6%E5%83%8F%E5%89%AA%E5%BD%B1%23) `149.1K 🔥` `NEW`
1. [日本女生否认侵华历史被怼破防](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E7%94%9F%E5%90%A6%E8%AE%A4%E4%BE%B5%E5%8D%8E%E5%8E%86%E5%8F%B2%E8%A2%AB%E6%80%BC%E7%A0%B4%E9%98%B2%23) `144.9K 🔥` `NEW`
1. [段冉谈中国男篮vs日本男篮](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E5%86%89%E8%B0%88%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E6%97%A5%E6%9C%AC%E7%94%B7%E7%AF%AE%23) `141.1K 🔥` `NEW`
1. [兰香如故能否成为下一个知否](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%83%BD%E5%90%A6%E6%88%90%E4%B8%BA%E4%B8%8B%E4%B8%80%E4%B8%AA%E7%9F%A5%E5%90%A6%23) `1.1M 🔥` `+702%`
1. [铭记历史真相捍卫英雄荣光](https://s.weibo.com/weibo?q=%23%E9%93%AD%E8%AE%B0%E5%8E%86%E5%8F%B2%E7%9C%9F%E7%9B%B8%E6%8D%8D%E5%8D%AB%E8%8B%B1%E9%9B%84%E8%8D%A3%E5%85%89%23) `468.6K 🔥` `+35%`
1. [人民网评罗永浩说野人先生难吃](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E7%BD%91%E8%AF%84%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%AF%B4%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E9%9A%BE%E5%90%83%23) `258.3K 🔥` `+21%`
1. [池昌旭林珍娜吻戏](https://s.weibo.com/weibo?q=%23%E6%B1%A0%E6%98%8C%E6%97%AD%E6%9E%97%E7%8F%8D%E5%A8%9C%E5%90%BB%E6%88%8F%23) `253.9K 🔥` `+92%`
1. [WE对战JDG](https://s.weibo.com/weibo?q=%23WE%E5%AF%B9%E6%88%98JDG%23) `204.1K 🔥` `+50%`
1. [曝蔡卓妍疑似怀孕](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%94%A1%E5%8D%93%E5%A6%8D%E7%96%91%E4%BC%BC%E6%80%80%E5%AD%95%23) `171.6K 🔥`
1. [曝何瑞贤有孩子了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BD%95%E7%91%9E%E8%B4%A4%E6%9C%89%E5%AD%A9%E5%AD%90%E4%BA%86%23) `153.0K 🔥`
1. [男子高空作业绳子被2楼老人剪断](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%AB%98%E7%A9%BA%E4%BD%9C%E4%B8%9A%E7%BB%B3%E5%AD%90%E8%A2%AB2%E6%A5%BC%E8%80%81%E4%BA%BA%E5%89%AA%E6%96%AD%23) `314.6K 🔥` `-76%`
1. [黄牛吐槽iPhone18Pro没人收](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%89%9B%E5%90%90%E6%A7%BDiPhone18Pro%E6%B2%A1%E4%BA%BA%E6%94%B6%23) `252.9K 🔥` `-72%`
1. [花少8 无聊](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%20%E6%97%A0%E8%81%8A%23) `155.2K 🔥` `-55%`

Updated at 2026-09-18 22:27:29

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
