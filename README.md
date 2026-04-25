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

1. [者来女淘汰 (Whoever comes, the female will be eliminated)](https://s.weibo.com/weibo?q=%23%E8%80%85%E6%9D%A5%E5%A5%B3%E6%B7%98%E6%B1%B0%23) `11.3M 🔥` `NEW`
1. [跟着2026款夏去露营](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%802026%E6%AC%BE%E5%A4%8F%E5%8E%BB%E9%9C%B2%E8%90%A5%23) `9.4M 🔥` `NEW`
1. [开局之年看中国](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%80%E4%B9%8B%E5%B9%B4%E7%9C%8B%E4%B8%AD%E5%9B%BD%23) `1.5M 🔥` `NEW`
1. [三丽鸥家族喊你来肯德基啦](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%B8%BD%E9%B8%A5%E5%AE%B6%E6%97%8F%E5%96%8A%E4%BD%A0%E6%9D%A5%E8%82%AF%E5%BE%B7%E5%9F%BA%E5%95%A6%23) `443.1K 🔥` `NEW`
1. [副所长为完成任务设计让6人吸毒](https://s.weibo.com/weibo?q=%23%E5%89%AF%E6%89%80%E9%95%BF%E4%B8%BA%E5%AE%8C%E6%88%90%E4%BB%BB%E5%8A%A1%E8%AE%BE%E8%AE%A1%E8%AE%A96%E4%BA%BA%E5%90%B8%E6%AF%92%23) `420.1K 🔥` `NEW`
1. [伊朗处决一名受以色列指使的特工](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%84%E5%86%B3%E4%B8%80%E5%90%8D%E5%8F%97%E4%BB%A5%E8%89%B2%E5%88%97%E6%8C%87%E4%BD%BF%E7%9A%84%E7%89%B9%E5%B7%A5%23) `413.6K 🔥` `NEW`
1. [者来女把陈瑶推到张月身边](https://s.weibo.com/weibo?q=%23%E8%80%85%E6%9D%A5%E5%A5%B3%E6%8A%8A%E9%99%88%E7%91%B6%E6%8E%A8%E5%88%B0%E5%BC%A0%E6%9C%88%E8%BA%AB%E8%BE%B9%23) `408.0K 🔥` `NEW`
1. [谢娜哭了](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%93%AD%E4%BA%86%23) `406.2K 🔥` `NEW`
1. [黄灿灿进步好大](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E8%BF%9B%E6%AD%A5%E5%A5%BD%E5%A4%A7%23) `375.4K 🔥` `NEW`
1. [暗访培训贷乱象](https://s.weibo.com/weibo?q=%23%E6%9A%97%E8%AE%BF%E5%9F%B9%E8%AE%AD%E8%B4%B7%E4%B9%B1%E8%B1%A1%23) `364.7K 🔥` `NEW`
1. [秦昊马頔孙丞潇都在点孙杨了 (Qin Hao, Ma Di, and Sun Chengxiao are all ordering Sun Yang)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E9%A9%AC%E9%A0%94%E5%AD%99%E4%B8%9E%E6%BD%87%E9%83%BD%E5%9C%A8%E7%82%B9%E5%AD%99%E6%9D%A8%E4%BA%86%23) `356.2K 🔥` `NEW`
1. [老舅在五哈镜头前道歉](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%88%85%E5%9C%A8%E4%BA%94%E5%93%88%E9%95%9C%E5%A4%B4%E5%89%8D%E9%81%93%E6%AD%89%23) `265.2K 🔥` `NEW`
1. [这周唐艺昕一个人站岗](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%91%A8%E5%94%90%E8%89%BA%E6%98%95%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%AB%99%E5%B2%97%23) `264.6K 🔥` `NEW`
1. [青岛警方致歉](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E8%AD%A6%E6%96%B9%E8%87%B4%E6%AD%89%23) `2.6M 🔥` `+186%`
1. [孤单北半球真的跑调到北半球了](https://s.weibo.com/weibo?q=%23%E5%AD%A4%E5%8D%95%E5%8C%97%E5%8D%8A%E7%90%83%E7%9C%9F%E7%9A%84%E8%B7%91%E8%B0%83%E5%88%B0%E5%8C%97%E5%8D%8A%E7%90%83%E4%BA%86%23) `1.9M 🔥` `+351%`
1. [人生是一场巨大的后知后觉](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E6%98%AF%E4%B8%80%E5%9C%BA%E5%B7%A8%E5%A4%A7%E7%9A%84%E5%90%8E%E7%9F%A5%E5%90%8E%E8%A7%89%23) `427.9K 🔥` `+49%`
1. [美国对伊朗实施最大程度经济封锁](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%AE%9E%E6%96%BD%E6%9C%80%E5%A4%A7%E7%A8%8B%E5%BA%A6%E7%BB%8F%E6%B5%8E%E5%B0%81%E9%94%81%23) `264.9K 🔥` `+50%`
1. [Angelababy两套高定](https://s.weibo.com/weibo?q=%23Angelababy%E4%B8%A4%E5%A5%97%E9%AB%98%E5%AE%9A%23) `263.8K 🔥` `+41%`
1. [杨威两女儿勇夺全国冠军和季军 (Yang Wei’s two daughters won the national championship and third runner-up)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A8%81%E4%B8%A4%E5%A5%B3%E5%84%BF%E5%8B%87%E5%A4%BA%E5%85%A8%E5%9B%BD%E5%86%A0%E5%86%9B%E5%92%8C%E5%AD%A3%E5%86%9B%23) `262.9K 🔥` `+60%`
1. [大牛股年内已猛涨208%](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%89%9B%E8%82%A1%E5%B9%B4%E5%86%85%E5%B7%B2%E7%8C%9B%E6%B6%A8208%25%23) `262.8K 🔥` `+60%`
1. [旅游很多次才知道的事](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E5%BE%88%E5%A4%9A%E6%AC%A1%E6%89%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B%23) `540.7K 🔥`
1. [东方甄选明明离职原因 (Oriental Selection’s clear reason for resignation)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%98%8E%E6%98%8E%E7%A6%BB%E8%81%8C%E5%8E%9F%E5%9B%A0%23) `430.7K 🔥`
1. [五一原来是放假七天的](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%8E%9F%E6%9D%A5%E6%98%AF%E6%94%BE%E5%81%87%E4%B8%83%E5%A4%A9%E7%9A%84%23) `429.2K 🔥`
1. [瘦人无法理解的吃饭习惯](https://s.weibo.com/weibo?q=%23%E7%98%A6%E4%BA%BA%E6%97%A0%E6%B3%95%E7%90%86%E8%A7%A3%E7%9A%84%E5%90%83%E9%A5%AD%E4%B9%A0%E6%83%AF%23) `427.0K 🔥`
1. [李昀锐连孟子义名字都不提](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%BF%9E%E5%AD%9F%E5%AD%90%E4%B9%89%E5%90%8D%E5%AD%97%E9%83%BD%E4%B8%8D%E6%8F%90%23) `421.6K 🔥`
1. [王濛团921票](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%9B%A2921%E7%A5%A8%23) `418.6K 🔥`
1. [谭松韵王栎鑫合唱最好的我们](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E7%8E%8B%E6%A0%8E%E9%91%AB%E5%90%88%E5%94%B1%E6%9C%80%E5%A5%BD%E7%9A%84%E6%88%91%E4%BB%AC%23) `417.0K 🔥`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `414.4K 🔥`
1. [曾沛慈一直在修音响](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%80%E7%9B%B4%E5%9C%A8%E4%BF%AE%E9%9F%B3%E5%93%8D%23) `410.6K 🔥`
1. [世界羽联通过15分制改革](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E7%BE%BD%E8%81%94%E9%80%9A%E8%BF%8715%E5%88%86%E5%88%B6%E6%94%B9%E9%9D%A9%23) `409.0K 🔥`
1. [被减肥背刺了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%87%8F%E8%82%A5%E8%83%8C%E5%88%BA%E4%BA%86%23) `404.0K 🔥`
1. [徐洁儿可以去歌手了](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E5%8F%AF%E4%BB%A5%E5%8E%BB%E6%AD%8C%E6%89%8B%E4%BA%86%23) `403.5K 🔥`
1. [孟子义李昀锐下定决心拆cp的原因 (The reason why Meng Ziyi and Li Yunrui decided to dismantle CP)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%8B%E5%AE%9A%E5%86%B3%E5%BF%83%E6%8B%86cp%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `398.4K 🔥`
1. [这段话反复杀死了我的懒惰 (This passage repeatedly kills my laziness)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E5%8F%8D%E5%A4%8D%E6%9D%80%E6%AD%BB%E4%BA%86%E6%88%91%E7%9A%84%E6%87%92%E6%83%B0%23) `398.0K 🔥`
1. [东方甄选中灿官宣离职 (Can Guan announced his resignation from Oriental Screening)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E4%B8%AD%E7%81%BF%E5%AE%98%E5%AE%A3%E7%A6%BB%E8%81%8C%23) `389.6K 🔥`
1. [美国富豪遭5头大象踩踏身亡 (American billionaire trampled to death by five elephants)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%AF%8C%E8%B1%AA%E9%81%AD5%E5%A4%B4%E5%A4%A7%E8%B1%A1%E8%B8%A9%E8%B8%8F%E8%BA%AB%E4%BA%A1%23) `384.7K 🔥`
1. [西安一职校学生被同学一刀捅进ICU](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%80%E8%81%8C%E6%A0%A1%E5%AD%A6%E7%94%9F%E8%A2%AB%E5%90%8C%E5%AD%A6%E4%B8%80%E5%88%80%E6%8D%85%E8%BF%9BICU%23) `382.5K 🔥`
1. [中方将采取必要措施](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%B0%86%E9%87%87%E5%8F%96%E5%BF%85%E8%A6%81%E6%8E%AA%E6%96%BD%23) `378.8K 🔥`
1. [李艺彤 气死我了 (Li Yitong makes me so angry)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%89%BA%E5%BD%A4%20%E6%B0%94%E6%AD%BB%E6%88%91%E4%BA%86%23) `291.5K 🔥`
1. [中国超70%石油靠进口却不慌 (China imports more than 70% of its oil but is not panicking)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%8570%25%E7%9F%B3%E6%B2%B9%E9%9D%A0%E8%BF%9B%E5%8F%A3%E5%8D%B4%E4%B8%8D%E6%85%8C%23) `268.4K 🔥`
1. [周杰伦疑2.4亿购入澳百年庄园](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%96%912.4%E4%BA%BF%E8%B4%AD%E5%85%A5%E6%BE%B3%E7%99%BE%E5%B9%B4%E5%BA%84%E5%9B%AD%23) `265.3K 🔥`
1. [尚公主 (Princess Shang)](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%23) `264.4K 🔥`
1. [张月团887票](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%9B%A2887%E7%A5%A8%23) `263.4K 🔥`
1. [曾沛慈赢了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E8%B5%A2%E4%BA%86%23) `503.6K 🔥` `-23%`
1. [官方通报女子劝阻男子吸烟引争执 (Official reports that woman discouraged man from smoking and caused dispute)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E5%8A%9D%E9%98%BB%E7%94%B7%E5%AD%90%E5%90%B8%E7%83%9F%E5%BC%95%E4%BA%89%E6%89%A7%23) `423.9K 🔥` `-97%`
1. [言不由衷 (insincere)](https://s.weibo.com/weibo?q=%23%E8%A8%80%E4%B8%8D%E7%94%B1%E8%A1%B7%23) `422.4K 🔥` `-76%`
1. [刘诗诗天坛女神](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E5%A4%A9%E5%9D%9B%E5%A5%B3%E7%A5%9E%23) `336.5K 🔥` `-22%`
1. [异父异母但双胞胎 (Half-mother but twins)](https://s.weibo.com/weibo?q=%23%E5%BC%82%E7%88%B6%E5%BC%82%E6%AF%8D%E4%BD%86%E5%8F%8C%E8%83%9E%E8%83%8E%23) `313.6K 🔥` `-27%`
1. [李小冉 达拉崩吧比心愿便利贴简单](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E8%BE%BE%E6%8B%89%E5%B4%A9%E5%90%A7%E6%AF%94%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%E7%AE%80%E5%8D%95%23) `276.0K 🔥` `-26%`
1. [篇章好听 (Nice chapter)](https://s.weibo.com/weibo?q=%23%E7%AF%87%E7%AB%A0%E5%A5%BD%E5%90%AC%23) `264.2K 🔥` `-40%`
1. [北京国安2比4天津津门虎](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%9B%BD%E5%AE%892%E6%AF%944%E5%A4%A9%E6%B4%A5%E6%B4%A5%E9%97%A8%E8%99%8E%23) `263.9K 🔥` `-39%`
1. [王濛永远被甜妹拿捏 (Wang Meng will always be manipulated by his sweet girl)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%B0%B8%E8%BF%9C%E8%A2%AB%E7%94%9C%E5%A6%B9%E6%8B%BF%E6%8D%8F%23) `263.1K 🔥` `-36%`

Updated at 2026-04-25 23:23:48

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
