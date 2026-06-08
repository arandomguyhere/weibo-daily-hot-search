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

1. [iOS27 调休闹钟 (iOS27 snooze alarm clock)](https://s.weibo.com/weibo?q=%23iOS27%20%E8%B0%83%E4%BC%91%E9%97%B9%E9%92%9F%23) `619.0K 🔥` `NEW`
1. [国行iPhone 悬着的心终于死了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%A1%8CiPhone%20%E6%82%AC%E7%9D%80%E7%9A%84%E5%BF%83%E7%BB%88%E4%BA%8E%E6%AD%BB%E4%BA%86%23) `279.2K 🔥` `NEW`
1. [李小冉咋了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%92%8B%E4%BA%86%23) `93.5K 🔥` `NEW`
1. [为什么面试要填家庭成员信息](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9D%A2%E8%AF%95%E8%A6%81%E5%A1%AB%E5%AE%B6%E5%BA%AD%E6%88%90%E5%91%98%E4%BF%A1%E6%81%AF%23) `442.2K 🔥` `+303%`
1. [平壤各界群众和少年儿童身着节日盛装](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%A3%A4%E5%90%84%E7%95%8C%E7%BE%A4%E4%BC%97%E5%92%8C%E5%B0%91%E5%B9%B4%E5%84%BF%E7%AB%A5%E8%BA%AB%E7%9D%80%E8%8A%82%E6%97%A5%E7%9B%9B%E8%A3%85%23) `343.8K 🔥` `+278%`
1. [iOS27](https://s.weibo.com/weibo?q=%23iOS27%23) `325.0K 🔥` `+56%`
1. [双胞胎姐妹遭袭一死一伤案最新进展 (The latest developments in the case of twin sisters who were attacked, one killed and the other injured)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%83%9E%E8%83%8E%E5%A7%90%E5%A6%B9%E9%81%AD%E8%A2%AD%E4%B8%80%E6%AD%BB%E4%B8%80%E4%BC%A4%E6%A1%88%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `303.5K 🔥` `+270%`
1. [人在什么状态下学习效率最高](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%9C%A8%E4%BB%80%E4%B9%88%E7%8A%B6%E6%80%81%E4%B8%8B%E5%AD%A6%E4%B9%A0%E6%95%88%E7%8E%87%E6%9C%80%E9%AB%98%23) `208.0K 🔥` `+185%`
1. [张月方停止浪姐选歌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E6%96%B9%E5%81%9C%E6%AD%A2%E6%B5%AA%E5%A7%90%E9%80%89%E6%AD%8C%23) `147.9K 🔥` `+140%`
1. [苹果开发者大会](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%BC%80%E5%8F%91%E8%80%85%E5%A4%A7%E4%BC%9A%23) `137.3K 🔥` `+106%`
1. [跑男团全员包场白鹿莫离](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E5%9B%A2%E5%85%A8%E5%91%98%E5%8C%85%E5%9C%BA%E7%99%BD%E9%B9%BF%E8%8E%AB%E7%A6%BB%23) `135.2K 🔥` `+153%`
1. [全世界倒数第一体面的运动](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%E4%BD%93%E9%9D%A2%E7%9A%84%E8%BF%90%E5%8A%A8%23) `134.8K 🔥` `+178%`
1. [金饰克价跌400元却没人买了 (The price of gold jewelry fell by 400 yuan per gram, but no one bought it)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E8%B7%8C400%E5%85%83%E5%8D%B4%E6%B2%A1%E4%BA%BA%E4%B9%B0%E4%BA%86%23) `134.4K 🔥` `+192%`
1. [美股 (US stocks)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `128.7K 🔥` `+252%`
1. [高考作文 给阿嬷的情书 (College Entrance Examination Composition A Love Letter to Grandma)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%20%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `119.4K 🔥` `+190%`
1. [孙红雷在埃菲尔铁塔下很想龚俊](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E5%9C%A8%E5%9F%83%E8%8F%B2%E5%B0%94%E9%93%81%E5%A1%94%E4%B8%8B%E5%BE%88%E6%83%B3%E9%BE%9A%E4%BF%8A%23) `107.0K 🔥` `+342%`
1. [张月的情商](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E7%9A%84%E6%83%85%E5%95%86%23) `103.5K 🔥` `+126%`
1. [前同事离职忘记删聊天记录](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%90%8C%E4%BA%8B%E7%A6%BB%E8%81%8C%E5%BF%98%E8%AE%B0%E5%88%A0%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `95.9K 🔥` `+139%`
1. [2026高考](https://s.weibo.com/weibo?q=%232026%E9%AB%98%E8%80%83%23) `93.0K 🔥` `+243%`
1. [杀妻因抑郁发作被判死缓案将开庭](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%A6%BB%E5%9B%A0%E6%8A%91%E9%83%81%E5%8F%91%E4%BD%9C%E8%A2%AB%E5%88%A4%E6%AD%BB%E7%BC%93%E6%A1%88%E5%B0%86%E5%BC%80%E5%BA%AD%23) `92.9K 🔥` `+284%`
1. [Siri AI](https://s.weibo.com/weibo?q=%23Siri%20AI%23) `92.9K 🔥` `+60%`
1. [男子伪装店员带走醉酒女子后性侵](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BC%AA%E8%A3%85%E5%BA%97%E5%91%98%E5%B8%A6%E8%B5%B0%E9%86%89%E9%85%92%E5%A5%B3%E5%AD%90%E5%90%8E%E6%80%A7%E4%BE%B5%23) `91.0K 🔥` `+190%`
1. [刺棠 卢昱晓](https://s.weibo.com/weibo?q=%23%E5%88%BA%E6%A3%A0%20%E5%8D%A2%E6%98%B1%E6%99%93%23) `81.9K 🔥` `+215%`
1. [李昀锐小说眼角通红具像化了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%B0%8F%E8%AF%B4%E7%9C%BC%E8%A7%92%E9%80%9A%E7%BA%A2%E5%85%B7%E5%83%8F%E5%8C%96%E4%BA%86%23) `81.4K 🔥` `+236%`
1. [王鹤棣包场白鹿莫离 (Wang Hedi privately rents Bailu Moli)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%8C%85%E5%9C%BA%E7%99%BD%E9%B9%BF%E8%8E%AB%E7%A6%BB%23) `75.9K 🔥` `+99%`
1. [现货黄金跌破4300美元关口 (Spot gold falls below $4,300 mark)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%E8%B7%8C%E7%A0%B44300%E7%BE%8E%E5%85%83%E5%85%B3%E5%8F%A3%23) `65.9K 🔥` `+173%`
1. [人一旦有了电动车就定型了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E6%9C%89%E4%BA%86%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%B0%B1%E5%AE%9A%E5%9E%8B%E4%BA%86%23) `56.9K 🔥` `+91%`
1. [伊朗打击以色列两处军事基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%89%93%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%E4%B8%A4%E5%A4%84%E5%86%9B%E4%BA%8B%E5%9F%BA%E5%9C%B0%23) `55.4K 🔥` `+129%`
1. [司机避开远光灯惊见多人车道聚餐](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E9%81%BF%E5%BC%80%E8%BF%9C%E5%85%89%E7%81%AF%E6%83%8A%E8%A7%81%E5%A4%9A%E4%BA%BA%E8%BD%A6%E9%81%93%E8%81%9A%E9%A4%90%23) `55.0K 🔥` `+126%`
1. [多省历史试卷文白倒挂](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E7%9C%81%E5%8E%86%E5%8F%B2%E8%AF%95%E5%8D%B7%E6%96%87%E7%99%BD%E5%80%92%E6%8C%82%23) `54.8K 🔥` `+127%`
1. [奔跑吧 (run)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `54.8K 🔥` `+59%`
1. [千万别和年纪大的导师开玩笑 (Never joke with an older mentor)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E5%88%AB%E5%92%8C%E5%B9%B4%E7%BA%AA%E5%A4%A7%E7%9A%84%E5%AF%BC%E5%B8%88%E5%BC%80%E7%8E%A9%E7%AC%91%23) `52.3K 🔥` `+70%`
1. [浪七暂停浪三强势回归](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E4%B8%83%E6%9A%82%E5%81%9C%E6%B5%AA%E4%B8%89%E5%BC%BA%E5%8A%BF%E5%9B%9E%E5%BD%92%23) `52.3K 🔥` `+114%`
1. [郑钦文vs克里斯蒂安](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E5%85%8B%E9%87%8C%E6%96%AF%E8%92%82%E5%AE%89%23) `52.3K 🔥` `+65%`
1. [农村自建房的真实成本 (The true cost of self-built houses in rural areas)](https://s.weibo.com/weibo?q=%23%E5%86%9C%E6%9D%91%E8%87%AA%E5%BB%BA%E6%88%BF%E7%9A%84%E7%9C%9F%E5%AE%9E%E6%88%90%E6%9C%AC%23) `52.3K 🔥` `+116%`
1. [十二星座本周好运tips (Good luck tips for the twelve zodiac signs this week)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%8C%E6%98%9F%E5%BA%A7%E6%9C%AC%E5%91%A8%E5%A5%BD%E8%BF%90tips%23) `52.2K 🔥` `+116%`
1. [黄灿灿陈凯琳是妈妈是女儿](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E9%99%88%E5%87%AF%E7%90%B3%E6%98%AF%E5%A6%88%E5%A6%88%E6%98%AF%E5%A5%B3%E5%84%BF%23) `52.2K 🔥` `+100%`
1. [郑钦文世界排名跌至第122位](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%B8%96%E7%95%8C%E6%8E%92%E5%90%8D%E8%B7%8C%E8%87%B3%E7%AC%AC122%E4%BD%8D%23) `52.2K 🔥` `+116%`
1. [喜笑颜凯](https://s.weibo.com/weibo?q=%23%E5%96%9C%E7%AC%91%E9%A2%9C%E5%87%AF%23) `52.2K 🔥` `+116%`
1. [朝鲜欢迎最尊重的贵宾 (North Korea welcomes most respected guest)](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E6%AC%A2%E8%BF%8E%E6%9C%80%E5%B0%8A%E9%87%8D%E7%9A%84%E8%B4%B5%E5%AE%BE%23) `52.1K 🔥` `+115%`
1. [Jennie这个舞台疯子](https://s.weibo.com/weibo?q=%23Jennie%E8%BF%99%E4%B8%AA%E8%88%9E%E5%8F%B0%E7%96%AF%E5%AD%90%23) `52.1K 🔥` `+102%`
1. [女子减肥戒碳水暴瘦头秃了一大片](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%8F%E8%82%A5%E6%88%92%E7%A2%B3%E6%B0%B4%E6%9A%B4%E7%98%A6%E5%A4%B4%E7%A7%83%E4%BA%86%E4%B8%80%E5%A4%A7%E7%89%87%23) `52.1K 🔥` `+115%`
1. [WBG无缘EWC](https://s.weibo.com/weibo?q=%23WBG%E6%97%A0%E7%BC%98EWC%23) `52.1K 🔥` `+34%`
1. [高考特别有宿命感 (The college entrance examination has a special sense of fate)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E7%89%B9%E5%88%AB%E6%9C%89%E5%AE%BF%E5%91%BD%E6%84%9F%23) `52.0K 🔥` `+56%`
1. [朋友圈新增搜索功能](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%96%B0%E5%A2%9E%E6%90%9C%E7%B4%A2%E5%8A%9F%E8%83%BD%23) `52.0K 🔥` `+115%`
1. [刘浩存主角收官发文 (Liu Haocun's protagonist's final message)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E4%B8%BB%E8%A7%92%E6%94%B6%E5%AE%98%E5%8F%91%E6%96%87%23) `52.0K 🔥` `+115%`
1. [高考英语 (College Entrance Examination English)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E8%8B%B1%E8%AF%AD%23) `52.0K 🔥` `+115%`
1. [史上最贵的吻](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E6%9C%80%E8%B4%B5%E7%9A%84%E5%90%BB%23) `51.9K 🔥` `+33%`
1. [曝浪姐节目组劝李小冉换歌 (The program team of "Sister Exposure" persuaded Li Xiaoran to change songs)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B5%AA%E5%A7%90%E8%8A%82%E7%9B%AE%E7%BB%84%E5%8A%9D%E6%9D%8E%E5%B0%8F%E5%86%89%E6%8D%A2%E6%AD%8C%23) `51.9K 🔥` `+115%`
1. [新能源小车卖不动了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E5%B0%8F%E8%BD%A6%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `51.9K 🔥` `+115%`

Updated at 2026-06-09 06:55:38

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
