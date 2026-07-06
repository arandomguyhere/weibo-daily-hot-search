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

1. [葡萄牙vs西班牙 (Portugal vs Spain)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99vs%E8%A5%BF%E7%8F%AD%E7%89%99%23) `472.1K 🔥` `NEW`
1. [南宁六蓝水库严重险情](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%AE%81%E5%85%AD%E8%93%9D%E6%B0%B4%E5%BA%93%E4%B8%A5%E9%87%8D%E9%99%A9%E6%83%85%23) `85.3K 🔥` `NEW`
1. [广西贵港城区内涝空中视角](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E8%B4%B5%E6%B8%AF%E5%9F%8E%E5%8C%BA%E5%86%85%E6%B6%9D%E7%A9%BA%E4%B8%AD%E8%A7%86%E8%A7%92%23) `69.0K 🔥` `NEW`
1. [广西贵港强降雨致城区内涝](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E8%B4%B5%E6%B8%AF%E5%BC%BA%E9%99%8D%E9%9B%A8%E8%87%B4%E5%9F%8E%E5%8C%BA%E5%86%85%E6%B6%9D%23) `65.2K 🔥` `NEW`
1. [没有最好的朋友才是我最舒服的状态](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E6%9C%80%E5%A5%BD%E7%9A%84%E6%9C%8B%E5%8F%8B%E6%89%8D%E6%98%AF%E6%88%91%E6%9C%80%E8%88%92%E6%9C%8D%E7%9A%84%E7%8A%B6%E6%80%81%23) `63.9K 🔥` `NEW`
1. [不再讨厌星期一了](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%86%8D%E8%AE%A8%E5%8E%8C%E6%98%9F%E6%9C%9F%E4%B8%80%E4%BA%86%23) `63.8K 🔥` `NEW`
1. [西安暴雨](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E6%9A%B4%E9%9B%A8%23) `63.6K 🔥` `NEW`
1. [广西南宁受灾情况通报](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%8D%97%E5%AE%81%E5%8F%97%E7%81%BE%E6%83%85%E5%86%B5%E9%80%9A%E6%8A%A5%23) `63.6K 🔥` `NEW`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `63.6K 🔥` `NEW`
1. [Codex批量自动剪辑工作流](https://s.weibo.com/weibo?q=%23Codex%E6%89%B9%E9%87%8F%E8%87%AA%E5%8A%A8%E5%89%AA%E8%BE%91%E5%B7%A5%E4%BD%9C%E6%B5%81%23) `63.5K 🔥` `NEW`
1. [BW开票时间](https://s.weibo.com/weibo?q=%23BW%E5%BC%80%E7%A5%A8%E6%97%B6%E9%97%B4%23) `63.4K 🔥` `NEW`
1. [广西抗洪 (Guangxi flood fighting)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%8A%97%E6%B4%AA%23) `256.5K 🔥` `-76%`
1. [暴雨天牢记这些保命知识](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E5%A4%A9%E7%89%A2%E8%AE%B0%E8%BF%99%E4%BA%9B%E4%BF%9D%E5%91%BD%E7%9F%A5%E8%AF%86%23) `211.6K 🔥` `-51%`
1. [word删除空白页 义务教育](https://s.weibo.com/weibo?q=%23word%E5%88%A0%E9%99%A4%E7%A9%BA%E7%99%BD%E9%A1%B5%20%E4%B9%89%E5%8A%A1%E6%95%99%E8%82%B2%23) `180.4K 🔥` `-63%`
1. [广西灾情可能进一步扩大](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%81%BE%E6%83%85%E5%8F%AF%E8%83%BD%E8%BF%9B%E4%B8%80%E6%AD%A5%E6%89%A9%E5%A4%A7%23) `142.6K 🔥` `-57%`
1. [詹姆斯 湖人](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%20%E6%B9%96%E4%BA%BA%23) `123.4K 🔥` `-70%`
1. [虞书欣晒与陈靖可合照](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%99%92%E4%B8%8E%E9%99%88%E9%9D%96%E5%8F%AF%E5%90%88%E7%85%A7%23) `112.0K 🔥` `-56%`
1. [特朗普插手世界杯红牌](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8F%92%E6%89%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E7%BA%A2%E7%89%8C%23) `107.4K 🔥` `-63%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `99.0K 🔥` `-61%`
1. [LV被指垄断中国古纹样 (LV is accused of monopolizing ancient Chinese patterns)](https://s.weibo.com/weibo?q=%23LV%E8%A2%AB%E6%8C%87%E5%9E%84%E6%96%AD%E4%B8%AD%E5%9B%BD%E5%8F%A4%E7%BA%B9%E6%A0%B7%23) `84.7K 🔥` `-70%`
1. [LV胜诉敲响中国纹样版权保护警钟](https://s.weibo.com/weibo?q=%23LV%E8%83%9C%E8%AF%89%E6%95%B2%E5%93%8D%E4%B8%AD%E5%9B%BD%E7%BA%B9%E6%A0%B7%E7%89%88%E6%9D%83%E4%BF%9D%E6%8A%A4%E8%AD%A6%E9%92%9F%23) `84.6K 🔥` `-79%`
1. [比利时足协发表声明](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E8%B6%B3%E5%8D%8F%E5%8F%91%E8%A1%A8%E5%A3%B0%E6%98%8E%23) `84.3K 🔥` `-69%`
1. [广西洪水 超话求助 (Guangxi floods call for help)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%20%E8%B6%85%E8%AF%9D%E6%B1%82%E5%8A%A9%23) `83.9K 🔥` `-75%`
1. [李柯以张翅 剧宣](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9F%AF%E4%BB%A5%E5%BC%A0%E7%BF%85%20%E5%89%A7%E5%AE%A3%23) `83.1K 🔥` `-72%`
1. [FIFA称巴洛贡暂缓停赛是参考C罗](https://s.weibo.com/weibo?q=%23FIFA%E7%A7%B0%E5%B7%B4%E6%B4%9B%E8%B4%A1%E6%9A%82%E7%BC%93%E5%81%9C%E8%B5%9B%E6%98%AF%E5%8F%82%E8%80%83C%E7%BD%97%23) `81.6K 🔥` `-71%`
1. [真正的强大是敢于让别人不舒服](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%BC%BA%E5%A4%A7%E6%98%AF%E6%95%A2%E4%BA%8E%E8%AE%A9%E5%88%AB%E4%BA%BA%E4%B8%8D%E8%88%92%E6%9C%8D%23) `79.9K 🔥` `-71%`
1. [C罗预测葡萄牙会获胜](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E9%A2%84%E6%B5%8B%E8%91%A1%E8%90%84%E7%89%99%E4%BC%9A%E8%8E%B7%E8%83%9C%23) `77.4K 🔥` `-72%`
1. [小猫抱冬瓜后遗症](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E6%8A%B1%E5%86%AC%E7%93%9C%E5%90%8E%E9%81%97%E7%97%87%23) `76.4K 🔥` `-71%`
1. [房租才是我生活拮据的罪魁祸首](https://s.weibo.com/weibo?q=%23%E6%88%BF%E7%A7%9F%E6%89%8D%E6%98%AF%E6%88%91%E7%94%9F%E6%B4%BB%E6%8B%AE%E6%8D%AE%E7%9A%84%E7%BD%AA%E9%AD%81%E7%A5%B8%E9%A6%96%23) `73.0K 🔥` `-74%`
1. [保洁阿姨在厕所吃饭景区连夜回应](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%B4%81%E9%98%BF%E5%A7%A8%E5%9C%A8%E5%8E%95%E6%89%80%E5%90%83%E9%A5%AD%E6%99%AF%E5%8C%BA%E8%BF%9E%E5%A4%9C%E5%9B%9E%E5%BA%94%23) `70.7K 🔥` `-74%`
1. [广西洪水](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%23) `69.0K 🔥` `-76%`
1. [字节 草地牛](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%20%E8%8D%89%E5%9C%B0%E7%89%9B%23) `66.7K 🔥` `-79%`
1. [香蕉是世界上最善良的水果 (Banana is the kindest fruit in the world)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E8%95%89%E6%98%AF%E4%B8%96%E7%95%8C%E4%B8%8A%E6%9C%80%E5%96%84%E8%89%AF%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `66.6K 🔥` `-76%`
1. [七七事变89周年](https://s.weibo.com/weibo?q=%23%E4%B8%83%E4%B8%83%E4%BA%8B%E5%8F%9889%E5%91%A8%E5%B9%B4%23) `66.0K 🔥` `-77%`
1. [曾舜晞抱孟子义的狗自拍](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E6%8A%B1%E5%AD%9F%E5%AD%90%E4%B9%89%E7%9A%84%E7%8B%97%E8%87%AA%E6%8B%8D%23) `65.9K 🔥` `-75%`
1. [广西南宁通报水库灾情](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%8D%97%E5%AE%81%E9%80%9A%E6%8A%A5%E6%B0%B4%E5%BA%93%E7%81%BE%E6%83%85%23) `65.3K 🔥` `-74%`
1. [广西内涝求助](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%86%85%E6%B6%9D%E6%B1%82%E5%8A%A9%23) `64.8K 🔥` `-74%`
1. [醪糟加牛奶放一放就可以做成冰酥酪 (Add the fermented glutinous rice grains and milk to make icing cheese)](https://s.weibo.com/weibo?q=%23%E9%86%AA%E7%B3%9F%E5%8A%A0%E7%89%9B%E5%A5%B6%E6%94%BE%E4%B8%80%E6%94%BE%E5%B0%B1%E5%8F%AF%E4%BB%A5%E5%81%9A%E6%88%90%E5%86%B0%E9%85%A5%E9%85%AA%23) `64.4K 🔥` `-75%`
1. [以总理称印度是14亿人口小国](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%80%BB%E7%90%86%E7%A7%B0%E5%8D%B0%E5%BA%A6%E6%98%AF14%E4%BA%BF%E4%BA%BA%E5%8F%A3%E5%B0%8F%E5%9B%BD%23) `64.2K 🔥` `-75%`
1. [小猫以为这是主人的猫砂](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%BB%A5%E4%B8%BA%E8%BF%99%E6%98%AF%E4%B8%BB%E4%BA%BA%E7%9A%84%E7%8C%AB%E7%A0%82%23) `63.9K 🔥` `-74%`
1. [哈兰德连发5条中文动态 (Haaland posted 5 Chinese updates in a row)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E8%BF%9E%E5%8F%915%E6%9D%A1%E4%B8%AD%E6%96%87%E5%8A%A8%E6%80%81%23) `63.9K 🔥` `-76%`
1. [杨有林死刑](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%9C%89%E6%9E%97%E6%AD%BB%E5%88%91%23) `63.8K 🔥` `-74%`
1. [女儿不吃蛋黄妈妈摇匀鸡蛋再煮](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E4%B8%8D%E5%90%83%E8%9B%8B%E9%BB%84%E5%A6%88%E5%A6%88%E6%91%87%E5%8C%80%E9%B8%A1%E8%9B%8B%E5%86%8D%E7%85%AE%23) `63.8K 🔥` `-76%`
1. [广西洪涝灾害致2人死亡](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B6%9D%E7%81%BE%E5%AE%B3%E8%87%B42%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `63.8K 🔥` `-76%`
1. [功夫女足成本3.8亿 (The cost of Kung Fu Women’s Football Team is 380 million)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E6%88%90%E6%9C%AC3.8%E4%BA%BF%23) `63.7K 🔥` `-75%`
1. [高考699分女孩遭假冒卖货](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83699%E5%88%86%E5%A5%B3%E5%AD%A9%E9%81%AD%E5%81%87%E5%86%92%E5%8D%96%E8%B4%A7%23) `63.7K 🔥` `-75%`
1. [美国队红牌引发全球二创热潮](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%98%9F%E7%BA%A2%E7%89%8C%E5%BC%95%E5%8F%91%E5%85%A8%E7%90%83%E4%BA%8C%E5%88%9B%E7%83%AD%E6%BD%AE%23) `63.5K 🔥` `-74%`
1. [虞书欣就这么把脸伸过来了](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B0%B1%E8%BF%99%E4%B9%88%E6%8A%8A%E8%84%B8%E4%BC%B8%E8%BF%87%E6%9D%A5%E4%BA%86%23) `63.5K 🔥` `-74%`
1. [9岁女孩夸车被扇巴掌](https://s.weibo.com/weibo?q=%239%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%A4%B8%E8%BD%A6%E8%A2%AB%E6%89%87%E5%B7%B4%E6%8E%8C%23) `63.4K 🔥` `-75%`
1. [哈兰德是我见过最搞笑的足球明星](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%98%AF%E6%88%91%E8%A7%81%E8%BF%87%E6%9C%80%E6%90%9E%E7%AC%91%E7%9A%84%E8%B6%B3%E7%90%83%E6%98%8E%E6%98%9F%23) `63.4K 🔥` `-76%`

Updated at 2026-07-07 03:13:13

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
