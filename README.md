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

1. [篇章好听 (Nice chapter)](https://s.weibo.com/weibo?q=%23%E7%AF%87%E7%AB%A0%E5%A5%BD%E5%90%AC%23) `2.2M 🔥` `NEW`
1. [新业态新赛道催生新职业新岗位](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%9A%E6%80%81%E6%96%B0%E8%B5%9B%E9%81%93%E5%82%AC%E7%94%9F%E6%96%B0%E8%81%8C%E4%B8%9A%E6%96%B0%E5%B2%97%E4%BD%8D%23) `1.7M 🔥` `NEW`
1. [鸿蒙座舱小艺智能体智商爆表](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E5%BA%A7%E8%88%B1%E5%B0%8F%E8%89%BA%E6%99%BA%E8%83%BD%E4%BD%93%E6%99%BA%E5%95%86%E7%88%86%E8%A1%A8%23) `1.5M 🔥` `NEW`
1. [阚清子老公是她的榜一大哥](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E8%80%81%E5%85%AC%E6%98%AF%E5%A5%B9%E7%9A%84%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%23) `1.3M 🔥` `NEW`
1. [东方甄选明明离职原因](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%98%8E%E6%98%8E%E7%A6%BB%E8%81%8C%E5%8E%9F%E5%9B%A0%23) `712.5K 🔥` `NEW`
1. [曾沛慈一直在修音响](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%80%E7%9B%B4%E5%9C%A8%E4%BF%AE%E9%9F%B3%E5%93%8D%23) `457.9K 🔥` `NEW`
1. [伊能静易立竞都选奕境](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E6%98%93%E7%AB%8B%E7%AB%9E%E9%83%BD%E9%80%89%E5%A5%95%E5%A2%83%23) `451.0K 🔥` `NEW`
1. [王濛团921票](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%9B%A2921%E7%A5%A8%23) `449.7K 🔥` `NEW`
1. [张慧雯一张嘴我就知道开麦了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E4%B8%80%E5%BC%A0%E5%98%B4%E6%88%91%E5%B0%B1%E7%9F%A5%E9%81%93%E5%BC%80%E9%BA%A6%E4%BA%86%23) `424.3K 🔥` `NEW`
1. [苏超最硬核助威](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E6%9C%80%E7%A1%AC%E6%A0%B8%E5%8A%A9%E5%A8%81%23) `405.2K 🔥` `NEW`
1. [王濛永远被甜妹拿捏 (Wang Meng will always be manipulated by his sweet girl)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%B0%B8%E8%BF%9C%E8%A2%AB%E7%94%9C%E5%A6%B9%E6%8B%BF%E6%8D%8F%23) `351.9K 🔥` `NEW`
1. [女子被婚外情丈夫杀害儿子发声](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%A9%9A%E5%A4%96%E6%83%85%E4%B8%88%E5%A4%AB%E6%9D%80%E5%AE%B3%E5%84%BF%E5%AD%90%E5%8F%91%E5%A3%B0%23) `342.4K 🔥` `NEW`
1. [张月团887票](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%9B%A2887%E7%A5%A8%23) `341.3K 🔥` `NEW`
1. [徐洁儿可以去歌手了](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E5%8F%AF%E4%BB%A5%E5%8E%BB%E6%AD%8C%E6%89%8B%E4%BA%86%23) `339.8K 🔥` `NEW`
1. [尚公主](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%23) `285.6K 🔥` `NEW`
1. [虞书欣黑银眼妆](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%BB%91%E9%93%B6%E7%9C%BC%E5%A6%86%23) `285.3K 🔥` `NEW`
1. [中方将采取必要措施](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%B0%86%E9%87%87%E5%8F%96%E5%BF%85%E8%A6%81%E6%8E%AA%E6%96%BD%23) `152.0K 🔥` `NEW`
1. [西安一职校学生被同学一刀捅进ICU](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%80%E8%81%8C%E6%A0%A1%E5%AD%A6%E7%94%9F%E8%A2%AB%E5%90%8C%E5%AD%A6%E4%B8%80%E5%88%80%E6%8D%85%E8%BF%9BICU%23) `140.6K 🔥` `NEW`
1. [站台灭烟争执双方互不追究责任](https://s.weibo.com/weibo?q=%23%E7%AB%99%E5%8F%B0%E7%81%AD%E7%83%9F%E4%BA%89%E6%89%A7%E5%8F%8C%E6%96%B9%E4%BA%92%E4%B8%8D%E8%BF%BD%E7%A9%B6%E8%B4%A3%E4%BB%BB%23) `130.5K 🔥` `NEW`
1. [官方通报女子劝阻男子吸烟引争执 (Official reports that woman discouraged man from smoking and caused dispute)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E5%8A%9D%E9%98%BB%E7%94%B7%E5%AD%90%E5%90%B8%E7%83%9F%E5%BC%95%E4%BA%89%E6%89%A7%23) `19.0M 🔥` `+528%`
1. [青岛警方致歉](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E8%AD%A6%E6%96%B9%E8%87%B4%E6%AD%89%23) `728.8K 🔥` `+45%`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `448.1K 🔥` `+193%`
1. [旅游很多次才知道的事](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E5%BE%88%E5%A4%9A%E6%AC%A1%E6%89%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B%23) `325.6K 🔥` `+36%`
1. [茶百道星穹铁道联名](https://s.weibo.com/weibo?q=%23%E8%8C%B6%E7%99%BE%E9%81%93%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93%E8%81%94%E5%90%8D%23) `793.2K 🔥`
1. [五一原来是放假七天的](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%8E%9F%E6%9D%A5%E6%98%AF%E6%94%BE%E5%81%87%E4%B8%83%E5%A4%A9%E7%9A%84%23) `589.0K 🔥`
1. [这段话反复杀死了我的懒惰](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E5%8F%8D%E5%A4%8D%E6%9D%80%E6%AD%BB%E4%BA%86%E6%88%91%E7%9A%84%E6%87%92%E6%83%B0%23) `371.0K 🔥`
1. [李小冉 达拉崩吧比心愿便利贴简单](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E8%BE%BE%E6%8B%89%E5%B4%A9%E5%90%A7%E6%AF%94%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%E7%AE%80%E5%8D%95%23) `363.3K 🔥`
1. [美国富豪遭5头大象踩踏身亡 (American billionaire trampled to death by five elephants)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%AF%8C%E8%B1%AA%E9%81%AD5%E5%A4%B4%E5%A4%A7%E8%B1%A1%E8%B8%A9%E8%B8%8F%E8%BA%AB%E4%BA%A1%23) `293.8K 🔥`
1. [花少导演在约张凌赫田曦薇](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%AF%BC%E6%BC%94%E5%9C%A8%E7%BA%A6%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%23) `230.0K 🔥`
1. [中国超70%石油靠进口却不慌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%8570%25%E7%9F%B3%E6%B2%B9%E9%9D%A0%E8%BF%9B%E5%8F%A3%E5%8D%B4%E4%B8%8D%E6%85%8C%23) `195.2K 🔥`
1. [杨紫在片场跳了误闯天家 (Yang Zi jumped on the set and accidentally broke into Tianjia)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%9C%A8%E7%89%87%E5%9C%BA%E8%B7%B3%E4%BA%86%E8%AF%AF%E9%97%AF%E5%A4%A9%E5%AE%B6%23) `188.5K 🔥`
1. [秦昊马𬱖孙丞潇都在点孙杨了](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E9%A9%AC%F0%AC%B1%96%E5%AD%99%E4%B8%9E%E6%BD%87%E9%83%BD%E5%9C%A8%E7%82%B9%E5%AD%99%E6%9D%A8%E4%BA%86%23) `187.4K 🔥`
1. [被减肥背刺了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%87%8F%E8%82%A5%E8%83%8C%E5%88%BA%E4%BA%86%23) `186.1K 🔥`
1. [程潇完全花仙子 (Cheng Xiao is the complete flower fairy)](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E5%AE%8C%E5%85%A8%E8%8A%B1%E4%BB%99%E5%AD%90%23) `183.3K 🔥`
1. [美国对伊朗实施最大程度经济封锁](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%AE%9E%E6%96%BD%E6%9C%80%E5%A4%A7%E7%A8%8B%E5%BA%A6%E7%BB%8F%E6%B5%8E%E5%B0%81%E9%94%81%23) `138.3K 🔥`
1. [大喊不用结账的摊主爆单了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%96%8A%E4%B8%8D%E7%94%A8%E7%BB%93%E8%B4%A6%E7%9A%84%E6%91%8A%E4%B8%BB%E7%88%86%E5%8D%95%E4%BA%86%23) `131.9K 🔥`
1. [深圳公交站台吸烟男子被罚款](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%85%AC%E4%BA%A4%E7%AB%99%E5%8F%B0%E5%90%B8%E7%83%9F%E7%94%B7%E5%AD%90%E8%A2%AB%E7%BD%9A%E6%AC%BE%23) `864.4K 🔥` `-35%`
1. [达拉崩吧](https://s.weibo.com/weibo?q=%23%E8%BE%BE%E6%8B%89%E5%B4%A9%E5%90%A7%23) `809.3K 🔥` `-50%`
1. [花呗白条月付等面临重大调整](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%91%97%E7%99%BD%E6%9D%A1%E6%9C%88%E4%BB%98%E7%AD%89%E9%9D%A2%E4%B8%B4%E9%87%8D%E5%A4%A7%E8%B0%83%E6%95%B4%23) `461.0K 🔥` `-53%`
1. [李昀锐连孟子义名字都不提](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%BF%9E%E5%AD%9F%E5%AD%90%E4%B9%89%E5%90%8D%E5%AD%97%E9%83%BD%E4%B8%8D%E6%8F%90%23) `459.8K 🔥` `-67%`
1. [异父异母但双胞胎 (Half-mother but twins)](https://s.weibo.com/weibo?q=%23%E5%BC%82%E7%88%B6%E5%BC%82%E6%AF%8D%E4%BD%86%E5%8F%8C%E8%83%9E%E8%83%8E%23) `453.8K 🔥` `-25%`
1. [孟子义李昀锐下定决心拆cp的原因 (The reason why Meng Ziyi and Li Yunrui decided to dismantle CP)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%8B%E5%AE%9A%E5%86%B3%E5%BF%83%E6%8B%86cp%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `432.0K 🔥` `-24%`
1. [瘦人无法理解的吃饭习惯](https://s.weibo.com/weibo?q=%23%E7%98%A6%E4%BA%BA%E6%97%A0%E6%B3%95%E7%90%86%E8%A7%A3%E7%9A%84%E5%90%83%E9%A5%AD%E4%B9%A0%E6%83%AF%23) `412.4K 🔥` `-47%`
1. [浪姐二公直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BA%8C%E5%85%AC%E7%9B%B4%E6%92%AD%23) `391.4K 🔥` `-44%`
1. [刘诗诗天坛女神](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E5%A4%A9%E5%9D%9B%E5%A5%B3%E7%A5%9E%23) `378.1K 🔥` `-51%`
1. [李艺彤 气死我了 (Li Yitong makes me so angry)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%89%BA%E5%BD%A4%20%E6%B0%94%E6%AD%BB%E6%88%91%E4%BA%86%23) `291.2K 🔥` `-47%`
1. [东方甄选中灿官宣离职 (Can Guan announced his resignation from Oriental Screening)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E4%B8%AD%E7%81%BF%E5%AE%98%E5%AE%A3%E7%A6%BB%E8%81%8C%23) `285.4K 🔥` `-39%`
1. [尚公主剧宣 (Princess Shang drama trailer)](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%89%A7%E5%AE%A3%23) `242.8K 🔥` `-51%`
1. [杨威两女儿勇夺全国冠军和季军 (Yang Wei’s two daughters won the national championship and third runner-up)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A8%81%E4%B8%A4%E5%A5%B3%E5%84%BF%E5%8B%87%E5%A4%BA%E5%85%A8%E5%9B%BD%E5%86%A0%E5%86%9B%E5%92%8C%E5%AD%A3%E5%86%9B%23) `234.3K 🔥` `-42%`
1. [Angelababy两套高定](https://s.weibo.com/weibo?q=%23Angelababy%E4%B8%A4%E5%A5%97%E9%AB%98%E5%AE%9A%23) `203.9K 🔥` `-30%`
1. [老舅在五哈镜头前道歉 (The old uncle apologized in front of the Wuha camera)](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%88%85%E5%9C%A8%E4%BA%94%E5%93%88%E9%95%9C%E5%A4%B4%E5%89%8D%E9%81%93%E6%AD%89%23) `185.6K 🔥` `-49%`
1. [王橹杰说有几天匮乏期](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%AF%B4%E6%9C%89%E5%87%A0%E5%A4%A9%E5%8C%AE%E4%B9%8F%E6%9C%9F%23) `130.5K 🔥` `-65%`

Updated at 2026-04-25 21:47:34

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
