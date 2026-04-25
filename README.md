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

1. [言不由衷 (insincere)](https://s.weibo.com/weibo?q=%23%E8%A8%80%E4%B8%8D%E7%94%B1%E8%A1%B7%23) `1.7M 🔥` `NEW`
1. [华为PuraXMax今日开售](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXMax%E4%BB%8A%E6%97%A5%E5%BC%80%E5%94%AE%23) `657.4K 🔥` `NEW`
1. [曾沛慈赢了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E8%B5%A2%E4%BA%86%23) `652.4K 🔥` `NEW`
1. [北京国安2比4天津津门虎](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%9B%BD%E5%AE%892%E6%AF%944%E5%A4%A9%E6%B4%A5%E6%B4%A5%E9%97%A8%E8%99%8E%23) `432.0K 🔥` `NEW`
1. [世界羽联通过15分制改革](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E7%BE%BD%E8%81%94%E9%80%9A%E8%BF%8715%E5%88%86%E5%88%B6%E6%94%B9%E9%9D%A9%23) `431.0K 🔥` `NEW`
1. [谭松韵王栎鑫合唱最好的我们](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E7%8E%8B%E6%A0%8E%E9%91%AB%E5%90%88%E5%94%B1%E6%9C%80%E5%A5%BD%E7%9A%84%E6%88%91%E4%BB%AC%23) `429.5K 🔥` `NEW`
1. [孤单北半球真的跑调到北半球了](https://s.weibo.com/weibo?q=%23%E5%AD%A4%E5%8D%95%E5%8C%97%E5%8D%8A%E7%90%83%E7%9C%9F%E7%9A%84%E8%B7%91%E8%B0%83%E5%88%B0%E5%8C%97%E5%8D%8A%E7%90%83%E4%BA%86%23) `420.2K 🔥` `NEW`
1. [周杰伦疑2.4亿购入澳百年庄园](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%96%912.4%E4%BA%BF%E8%B4%AD%E5%85%A5%E6%BE%B3%E7%99%BE%E5%B9%B4%E5%BA%84%E5%9B%AD%23) `307.1K 🔥` `NEW`
1. [人生是一场巨大的后知后觉](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E6%98%AF%E4%B8%80%E5%9C%BA%E5%B7%A8%E5%A4%A7%E7%9A%84%E5%90%8E%E7%9F%A5%E5%90%8E%E8%A7%89%23) `286.6K 🔥` `NEW`
1. [明日方舟 卡游](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%20%E5%8D%A1%E6%B8%B8%23) `188.8K 🔥` `NEW`
1. [苏超南通队vs徐州队 (Jiangsu Super League Nantong team vs Xuzhou team)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%8D%97%E9%80%9A%E9%98%9Fvs%E5%BE%90%E5%B7%9E%E9%98%9F%23) `166.1K 🔥` `NEW`
1. [我会等全员歌姬](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BC%9A%E7%AD%89%E5%85%A8%E5%91%98%E6%AD%8C%E5%A7%AC%23) `166.1K 🔥` `NEW`
1. [鹿晗 爷们儿要脸](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E7%88%B7%E4%BB%AC%E5%84%BF%E8%A6%81%E8%84%B8%23) `164.3K 🔥` `NEW`
1. [大牛股年内已猛涨208%](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%89%9B%E8%82%A1%E5%B9%B4%E5%86%85%E5%B7%B2%E7%8C%9B%E6%B6%A8208%25%23) `164.2K 🔥` `NEW`
1. [青岛警方致歉](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E8%AD%A6%E6%96%B9%E8%87%B4%E6%AD%89%23) `925.4K 🔥` `+27%`
1. [旅游很多次才知道的事](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E5%BE%88%E5%A4%9A%E6%AC%A1%E6%89%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B%23) `458.0K 🔥` `+41%`
1. [被减肥背刺了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%87%8F%E8%82%A5%E8%83%8C%E5%88%BA%E4%BA%86%23) `454.1K 🔥` `+144%`
1. [美国富豪遭5头大象踩踏身亡 (American billionaire trampled to death by five elephants)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%AF%8C%E8%B1%AA%E9%81%AD5%E5%A4%B4%E5%A4%A7%E8%B1%A1%E8%B8%A9%E8%B8%8F%E8%BA%AB%E4%BA%A1%23) `435.7K 🔥` `+48%`
1. [徐洁儿可以去歌手了](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E5%8F%AF%E4%BB%A5%E5%8E%BB%E6%AD%8C%E6%89%8B%E4%BA%86%23) `430.3K 🔥` `+27%`
1. [东方甄选中灿官宣离职 (Can Guan announced his resignation from Oriental Screening)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E4%B8%AD%E7%81%BF%E5%AE%98%E5%AE%A3%E7%A6%BB%E8%81%8C%23) `424.7K 🔥` `+49%`
1. [西安一职校学生被同学一刀捅进ICU](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%80%E8%81%8C%E6%A0%A1%E5%AD%A6%E7%94%9F%E8%A2%AB%E5%90%8C%E5%AD%A6%E4%B8%80%E5%88%80%E6%8D%85%E8%BF%9BICU%23) `412.4K 🔥` `+193%`
1. [中方将采取必要措施](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%B0%86%E9%87%87%E5%8F%96%E5%BF%85%E8%A6%81%E6%8E%AA%E6%96%BD%23) `389.4K 🔥` `+156%`
1. [中国超70%石油靠进口却不慌 (China imports more than 70% of its oil but is not panicking)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%8570%25%E7%9F%B3%E6%B2%B9%E9%9D%A0%E8%BF%9B%E5%8F%A3%E5%8D%B4%E4%B8%8D%E6%85%8C%23) `309.7K 🔥` `+59%`
1. [美国对伊朗实施最大程度经济封锁](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%AE%9E%E6%96%BD%E6%9C%80%E5%A4%A7%E7%A8%8B%E5%BA%A6%E7%BB%8F%E6%B5%8E%E5%B0%81%E9%94%81%23) `176.5K 🔥` `+28%`
1. [五一原来是放假七天的](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%8E%9F%E6%9D%A5%E6%98%AF%E6%94%BE%E5%81%87%E4%B8%83%E5%A4%A9%E7%9A%84%23) `509.2K 🔥`
1. [李昀锐连孟子义名字都不提](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%BF%9E%E5%AD%9F%E5%AD%90%E4%B9%89%E5%90%8D%E5%AD%97%E9%83%BD%E4%B8%8D%E6%8F%90%23) `488.7K 🔥`
1. [瘦人无法理解的吃饭习惯](https://s.weibo.com/weibo?q=%23%E7%98%A6%E4%BA%BA%E6%97%A0%E6%B3%95%E7%90%86%E8%A7%A3%E7%9A%84%E5%90%83%E9%A5%AD%E4%B9%A0%E6%83%AF%23) `455.2K 🔥`
1. [曾沛慈一直在修音响](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%80%E7%9B%B4%E5%9C%A8%E4%BF%AE%E9%9F%B3%E5%93%8D%23) `445.0K 🔥`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `443.5K 🔥`
1. [孟子义李昀锐下定决心拆cp的原因 (The reason why Meng Ziyi and Li Yunrui decided to dismantle CP)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%8B%E5%AE%9A%E5%86%B3%E5%BF%83%E6%8B%86cp%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `437.9K 🔥`
1. [异父异母但双胞胎 (Half-mother but twins)](https://s.weibo.com/weibo?q=%23%E5%BC%82%E7%88%B6%E5%BC%82%E6%AF%8D%E4%BD%86%E5%8F%8C%E8%83%9E%E8%83%8E%23) `431.0K 🔥`
1. [王濛团921票](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%9B%A2921%E7%A5%A8%23) `430.4K 🔥`
1. [这段话反复杀死了我的懒惰](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E5%8F%8D%E5%A4%8D%E6%9D%80%E6%AD%BB%E4%BA%86%E6%88%91%E7%9A%84%E6%87%92%E6%83%B0%23) `429.9K 🔥`
1. [刘诗诗天坛女神](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E5%A4%A9%E5%9D%9B%E5%A5%B3%E7%A5%9E%23) `429.5K 🔥`
1. [王濛永远被甜妹拿捏 (Wang Meng will always be manipulated by his sweet girl)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%B0%B8%E8%BF%9C%E8%A2%AB%E7%94%9C%E5%A6%B9%E6%8B%BF%E6%8D%8F%23) `410.0K 🔥`
1. [李小冉 达拉崩吧比心愿便利贴简单](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E8%BE%BE%E6%8B%89%E5%B4%A9%E5%90%A7%E6%AF%94%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%E7%AE%80%E5%8D%95%23) `372.8K 🔥`
1. [尚公主 (Princess Shang)](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%23) `318.3K 🔥`
1. [李艺彤 气死我了 (Li Yitong makes me so angry)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%89%BA%E5%BD%A4%20%E6%B0%94%E6%AD%BB%E6%88%91%E4%BA%86%23) `305.0K 🔥`
1. [张月团887票](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%9B%A2887%E7%A5%A8%23) `282.6K 🔥`
1. [虞书欣黑银眼妆](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%BB%91%E9%93%B6%E7%9C%BC%E5%A6%86%23) `230.7K 🔥`
1. [Angelababy两套高定](https://s.weibo.com/weibo?q=%23Angelababy%E4%B8%A4%E5%A5%97%E9%AB%98%E5%AE%9A%23) `187.2K 🔥`
1. [杨紫在片场跳了误闯天家 (Yang Zi jumped on the set and accidentally broke into Tianjia)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%9C%A8%E7%89%87%E5%9C%BA%E8%B7%B3%E4%BA%86%E8%AF%AF%E9%97%AF%E5%A4%A9%E5%AE%B6%23) `170.2K 🔥`
1. [官方通报女子劝阻男子吸烟引争执 (Official reports that woman discouraged man from smoking and caused dispute)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E5%8A%9D%E9%98%BB%E7%94%B7%E5%AD%90%E5%90%B8%E7%83%9F%E5%BC%95%E4%BA%89%E6%89%A7%23) `15.0M 🔥` `-21%`
1. [新业态新赛道催生新职业新岗位](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%9A%E6%80%81%E6%96%B0%E8%B5%9B%E9%81%93%E5%82%AC%E7%94%9F%E6%96%B0%E8%81%8C%E4%B8%9A%E6%96%B0%E5%B2%97%E4%BD%8D%23) `752.9K 🔥` `-55%`
1. [茶百道星穹铁道联名](https://s.weibo.com/weibo?q=%23%E8%8C%B6%E7%99%BE%E9%81%93%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93%E8%81%94%E5%90%8D%23) `482.9K 🔥` `-39%`
1. [东方甄选明明离职原因](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%98%8E%E6%98%8E%E7%A6%BB%E8%81%8C%E5%8E%9F%E5%9B%A0%23) `459.6K 🔥` `-35%`
1. [阚清子老公是她的榜一大哥](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E8%80%81%E5%85%AC%E6%98%AF%E5%A5%B9%E7%9A%84%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%23) `447.5K 🔥` `-66%`
1. [篇章好听 (Nice chapter)](https://s.weibo.com/weibo?q=%23%E7%AF%87%E7%AB%A0%E5%A5%BD%E5%90%AC%23) `439.8K 🔥` `-80%`
1. [花呗白条月付等面临重大调整](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%91%97%E7%99%BD%E6%9D%A1%E6%9C%88%E4%BB%98%E7%AD%89%E9%9D%A2%E4%B8%B4%E9%87%8D%E5%A4%A7%E8%B0%83%E6%95%B4%23) `286.0K 🔥` `-38%`
1. [尚公主剧宣 (Princess Shang drama trailer)](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%89%A7%E5%AE%A3%23) `188.3K 🔥` `-22%`
1. [浪姐二公直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BA%8C%E5%85%AC%E7%9B%B4%E6%92%AD%23) `174.8K 🔥` `-55%`
1. [杨威两女儿勇夺全国冠军和季军 (Yang Wei’s two daughters won the national championship and third runner-up)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A8%81%E4%B8%A4%E5%A5%B3%E5%84%BF%E5%8B%87%E5%A4%BA%E5%85%A8%E5%9B%BD%E5%86%A0%E5%86%9B%E5%92%8C%E5%AD%A3%E5%86%9B%23) `164.6K 🔥` `-30%`

Updated at 2026-04-25 22:32:47

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
