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

1. [建议设置孕产妇隐私诊室 (It is recommended to set up a private clinic for pregnant women)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E8%AE%BE%E7%BD%AE%E5%AD%95%E4%BA%A7%E5%A6%87%E9%9A%90%E7%A7%81%E8%AF%8A%E5%AE%A4%23) `253.3K 🔥` `NEW`
1. [逐玉开播](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%BC%80%E6%92%AD%23) `252.5K 🔥` `NEW`
1. [人大代表建议提倡领导带头休假](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%A4%A7%E4%BB%A3%E8%A1%A8%E5%BB%BA%E8%AE%AE%E6%8F%90%E5%80%A1%E9%A2%86%E5%AF%BC%E5%B8%A6%E5%A4%B4%E4%BC%91%E5%81%87%23) `251.8K 🔥` `NEW`
1. [滨寿司员工餐](https://s.weibo.com/weibo?q=%23%E6%BB%A8%E5%AF%BF%E5%8F%B8%E5%91%98%E5%B7%A5%E9%A4%90%23) `251.6K 🔥` `NEW`
1. [王安宇出发CELINE大秀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E5%87%BA%E5%8F%91CELINE%E5%A4%A7%E7%A7%80%23) `167.9K 🔥` `NEW`
1. [建议全国统一婚假天数](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E5%A9%9A%E5%81%87%E5%A4%A9%E6%95%B0%23) `154.8K 🔥` `NEW`
1. [逐玉云包场](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E4%BA%91%E5%8C%85%E5%9C%BA%23) `131.6K 🔥` `NEW`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `126.1K 🔥` `NEW`
1. [4岁女孩高血压就诊发现竟是男孩](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%AB%98%E8%A1%80%E5%8E%8B%E5%B0%B1%E8%AF%8A%E5%8F%91%E7%8E%B0%E7%AB%9F%E6%98%AF%E7%94%B7%E5%AD%A9%23) `116.6K 🔥` `NEW`
1. [斯里兰卡营救遭击沉伊朗军舰画面](https://s.weibo.com/weibo?q=%23%E6%96%AF%E9%87%8C%E5%85%B0%E5%8D%A1%E8%90%A5%E6%95%91%E9%81%AD%E5%87%BB%E6%B2%89%E4%BC%8A%E6%9C%97%E5%86%9B%E8%88%B0%E7%94%BB%E9%9D%A2%23) `114.5K 🔥` `NEW`
1. [胎儿脐带扭转30圈如麻花 (The fetal umbilical cord twists 30 times like a twist)](https://s.weibo.com/weibo?q=%23%E8%83%8E%E5%84%BF%E8%84%90%E5%B8%A6%E6%89%AD%E8%BD%AC30%E5%9C%88%E5%A6%82%E9%BA%BB%E8%8A%B1%23) `113.9K 🔥` `NEW`
1. [真我 暂停新机研发](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%88%91%20%E6%9A%82%E5%81%9C%E6%96%B0%E6%9C%BA%E7%A0%94%E5%8F%91%23) `94.7K 🔥` `NEW`
1. [狗狗为了一口脆脆鲨拼尽全力](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E4%B8%BA%E4%BA%86%E4%B8%80%E5%8F%A3%E8%84%86%E8%84%86%E9%B2%A8%E6%8B%BC%E5%B0%BD%E5%85%A8%E5%8A%9B%23) `91.3K 🔥` `NEW`
1. [369 我付出真心就这样被对待](https://s.weibo.com/weibo?q=%23369%20%E6%88%91%E4%BB%98%E5%87%BA%E7%9C%9F%E5%BF%83%E5%B0%B1%E8%BF%99%E6%A0%B7%E8%A2%AB%E5%AF%B9%E5%BE%85%23) `86.8K 🔥` `NEW`
1. [双一流高校本科扩招10万人以上](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%B8%80%E6%B5%81%E9%AB%98%E6%A0%A1%E6%9C%AC%E7%A7%91%E6%89%A9%E6%8B%9B10%E4%B8%87%E4%BA%BA%E4%BB%A5%E4%B8%8A%23) `817.1K 🔥` `+177%`
1. [建议艾滋感染者1个月内告知配偶](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E8%89%BE%E6%BB%8B%E6%84%9F%E6%9F%93%E8%80%851%E4%B8%AA%E6%9C%88%E5%86%85%E5%91%8A%E7%9F%A5%E9%85%8D%E5%81%B6%23) `251.9K 🔥` `+58%`
1. [金智秀新剧开播](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E6%96%B0%E5%89%A7%E5%BC%80%E6%92%AD%23) `149.3K 🔥` `+29%`
1. [美以袭击已致1332名伊朗人死亡 (US-Israeli strikes kill 1,332 Iranians)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E5%B7%B2%E8%87%B41332%E5%90%8D%E4%BC%8A%E6%9C%97%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `131.3K 🔥` `+21%`
1. [洗脸巾二次利用](https://s.weibo.com/weibo?q=%23%E6%B4%97%E8%84%B8%E5%B7%BE%E4%BA%8C%E6%AC%A1%E5%88%A9%E7%94%A8%23) `106.2K 🔥` `+27%`
1. [妇女节 放假](https://s.weibo.com/weibo?q=%23%E5%A6%87%E5%A5%B3%E8%8A%82%20%E6%94%BE%E5%81%87%23) `1.1M 🔥`
1. [视频速览十五五20项主要指标 (Video quick overview of 20 major indicators of the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E8%A7%86%E9%A2%91%E9%80%9F%E8%A7%88%E5%8D%81%E4%BA%94%E4%BA%9420%E9%A1%B9%E4%B8%BB%E8%A6%81%E6%8C%87%E6%A0%87%23) `616.1K 🔥`
1. [比亚迪闪充5分好9分饱3分寒 (BYD flash charge: 5 points good, 9 points full, 3 points cold)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E9%97%AA%E5%85%855%E5%88%86%E5%A5%BD9%E5%88%86%E9%A5%B13%E5%88%86%E5%AF%92%23) `380.4K 🔥`
1. [央行今年将降准降息](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A1%8C%E4%BB%8A%E5%B9%B4%E5%B0%86%E9%99%8D%E5%87%86%E9%99%8D%E6%81%AF%23) `253.5K 🔥`
1. [伊朗一儿童游乐场遭袭 (A children's playground in Iran was attacked)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%80%E5%84%BF%E7%AB%A5%E6%B8%B8%E4%B9%90%E5%9C%BA%E9%81%AD%E8%A2%AD%23) `253.4K 🔥`
1. [AI相关产业规模将超10万亿元 (AI-related industry scale will exceed 10 trillion yuan)](https://s.weibo.com/weibo?q=%23AI%E7%9B%B8%E5%85%B3%E4%BA%A7%E4%B8%9A%E8%A7%84%E6%A8%A1%E5%B0%86%E8%B6%8510%E4%B8%87%E4%BA%BF%E5%85%83%23) `253.2K 🔥`
1. [这位人大代表坚守乡村小学40年](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BD%8D%E4%BA%BA%E5%A4%A7%E4%BB%A3%E8%A1%A8%E5%9D%9A%E5%AE%88%E4%B9%A1%E6%9D%91%E5%B0%8F%E5%AD%A640%E5%B9%B4%23) `253.0K 🔥`
1. [预计今年GDP增量超6万亿元 (GDP growth this year is expected to exceed 6 trillion yuan)](https://s.weibo.com/weibo?q=%23%E9%A2%84%E8%AE%A1%E4%BB%8A%E5%B9%B4GDP%E5%A2%9E%E9%87%8F%E8%B6%856%E4%B8%87%E4%BA%BF%E5%85%83%23) `253.0K 🔥`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `252.8K 🔥`
1. [TES上报Naiyou不正当行为 (TES reports Naiyou’s improper behavior)](https://s.weibo.com/weibo?q=%23TES%E4%B8%8A%E6%8A%A5Naiyou%E4%B8%8D%E6%AD%A3%E5%BD%93%E8%A1%8C%E4%B8%BA%23) `252.8K 🔥`
1. [369 小丑了](https://s.weibo.com/weibo?q=%23369%20%E5%B0%8F%E4%B8%91%E4%BA%86%23) `252.6K 🔥`
1. [伊朗称击中美国林肯号航母](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%87%BB%E4%B8%AD%E7%BE%8E%E5%9B%BD%E6%9E%97%E8%82%AF%E5%8F%B7%E8%88%AA%E6%AF%8D%23) `252.2K 🔥`
1. [逐玉 顶级待遇](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E9%A1%B6%E7%BA%A7%E5%BE%85%E9%81%87%23) `252.1K 🔥`
1. [孩子大了后要帮孩子完成社会化](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%A4%A7%E4%BA%86%E5%90%8E%E8%A6%81%E5%B8%AE%E5%AD%A9%E5%AD%90%E5%AE%8C%E6%88%90%E7%A4%BE%E4%BC%9A%E5%8C%96%23) `252.1K 🔥`
1. [千问妇女节活动](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E5%A6%87%E5%A5%B3%E8%8A%82%E6%B4%BB%E5%8A%A8%23) `251.6K 🔥`
1. [钎九不清冰合照](https://s.weibo.com/weibo?q=%23%E9%92%8E%E4%B9%9D%E4%B8%8D%E6%B8%85%E5%86%B0%E5%90%88%E7%85%A7%23) `241.0K 🔥`
1. [董璇吐槽张维伊](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E5%90%90%E6%A7%BD%E5%BC%A0%E7%BB%B4%E4%BC%8A%23) `196.2K 🔥`
1. [白鹿跳水了 (The white deer dives)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%B7%B3%E6%B0%B4%E4%BA%86%23) `147.0K 🔥`
1. [董璇张维伊婚礼策划倒闭了](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E5%BC%A0%E7%BB%B4%E4%BC%8A%E5%A9%9A%E7%A4%BC%E7%AD%96%E5%88%92%E5%80%92%E9%97%AD%E4%BA%86%23) `138.6K 🔥`
1. [破5亿播放AI短剧成本仅3000](https://s.weibo.com/weibo?q=%23%E7%A0%B45%E4%BA%BF%E6%92%AD%E6%94%BEAI%E7%9F%AD%E5%89%A7%E6%88%90%E6%9C%AC%E4%BB%853000%23) `136.8K 🔥`
1. [我熬夜熬穿了就这样](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%86%AC%E5%A4%9C%E7%86%AC%E7%A9%BF%E4%BA%86%E5%B0%B1%E8%BF%99%E6%A0%B7%23) `131.7K 🔥`
1. [唐家三少口碑因晋江女频翻盘](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%B6%E4%B8%89%E5%B0%91%E5%8F%A3%E7%A2%91%E5%9B%A0%E6%99%8B%E6%B1%9F%E5%A5%B3%E9%A2%91%E7%BF%BB%E7%9B%98%23) `117.4K 🔥`
1. [小米发布国内第一个手机版龙虾 (Xiaomi releases China’s first mobile version of Lobster)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%8F%91%E5%B8%83%E5%9B%BD%E5%86%85%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%89%8B%E6%9C%BA%E7%89%88%E9%BE%99%E8%99%BE%23) `113.8K 🔥`
1. [最有钱的时候买了最没用的东西](https://s.weibo.com/weibo?q=%23%E6%9C%80%E6%9C%89%E9%92%B1%E7%9A%84%E6%97%B6%E5%80%99%E4%B9%B0%E4%BA%86%E6%9C%80%E6%B2%A1%E7%94%A8%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `112.5K 🔥`
1. [Zeus邀请Faker打海斗](https://s.weibo.com/weibo?q=%23Zeus%E9%82%80%E8%AF%B7Faker%E6%89%93%E6%B5%B7%E6%96%97%23) `96.7K 🔥`
1. [千问 (Qianwen)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%23) `95.7K 🔥`
1. [网友在相亲软件刷到宇树王兴兴](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%9C%A8%E7%9B%B8%E4%BA%B2%E8%BD%AF%E4%BB%B6%E5%88%B7%E5%88%B0%E5%AE%87%E6%A0%91%E7%8E%8B%E5%85%B4%E5%85%B4%23) `89.7K 🔥`
1. [耿爽履新中国人民外交学会副会长 (Geng Shuang assumes new post as Vice President of Chinese People's Institute of Foreign Affairs)](https://s.weibo.com/weibo?q=%23%E8%80%BF%E7%88%BD%E5%B1%A5%E6%96%B0%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E5%A4%96%E4%BA%A4%E5%AD%A6%E4%BC%9A%E5%89%AF%E4%BC%9A%E9%95%BF%23) `253.6K 🔥` `-69%`
1. [罗意威2026秋冬时装秀 (Loewe 2026 autumn and winter fashion show)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%84%8F%E5%A8%812026%E7%A7%8B%E5%86%AC%E6%97%B6%E8%A3%85%E7%A7%80%23) `253.3K 🔥` `-49%`
1. [剑来 妈来](https://s.weibo.com/weibo?q=%23%E5%89%91%E6%9D%A5%20%E5%A6%88%E6%9D%A5%23) `138.6K 🔥` `-23%`
1. [法院承认HYBE专辑销量造假](https://s.weibo.com/weibo?q=%23%E6%B3%95%E9%99%A2%E6%89%BF%E8%AE%A4HYBE%E4%B8%93%E8%BE%91%E9%94%80%E9%87%8F%E9%80%A0%E5%81%87%23) `100.8K 🔥` `-22%`
1. [青海省委书记看生命树落泪 (Secretary of Qinghai Provincial Party Committee sheds tears when looking at the Tree of Life)](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%B5%B7%E7%9C%81%E5%A7%94%E4%B9%A6%E8%AE%B0%E7%9C%8B%E7%94%9F%E5%91%BD%E6%A0%91%E8%90%BD%E6%B3%AA%23) `100.0K 🔥` `-66%`

Updated at 2026-03-06 18:33:18

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
