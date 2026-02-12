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

1. [孙龙举起五星红旗 (Sun Long raised the five-star red flag)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E4%B8%BE%E8%B5%B7%E4%BA%94%E6%98%9F%E7%BA%A2%E6%97%97%23) `27.8K 🔥` `NEW`
1. [孙龙激动落泪](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E6%BF%80%E5%8A%A8%E8%90%BD%E6%B3%AA%23) `27.8K 🔥` `NEW`
1. [任子威说女子500米成绩夸张](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AD%90%E5%A8%81%E8%AF%B4%E5%A5%B3%E5%AD%90500%E7%B1%B3%E6%88%90%E7%BB%A9%E5%A4%B8%E5%BC%A0%23) `27.6K 🔥` `NEW`
1. [任子威说计划赶不上变化](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AD%90%E5%A8%81%E8%AF%B4%E8%AE%A1%E5%88%92%E8%B5%B6%E4%B8%8D%E4%B8%8A%E5%8F%98%E5%8C%96%23) `18.8K 🔥` `NEW`
1. [任子威像预言家](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AD%90%E5%A8%81%E5%83%8F%E9%A2%84%E8%A8%80%E5%AE%B6%23) `18.7K 🔥` `NEW`
1. [Deepseek被指变冷淡了 (Deepseek is accused of becoming cold)](https://s.weibo.com/weibo?q=%23Deepseek%E8%A2%AB%E6%8C%87%E5%8F%98%E5%86%B7%E6%B7%A1%E4%BA%86%23) `71.8K 🔥` `+30%`
1. [22岁主播每天焊妆两次确诊肺炎 (The 22-year-old anchor was diagnosed with pneumonia after welding makeup twice a day)](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E4%B8%BB%E6%92%AD%E6%AF%8F%E5%A4%A9%E7%84%8A%E5%A6%86%E4%B8%A4%E6%AC%A1%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%82%8E%23) `57.9K 🔥` `+22%`
1. [律师解读杨幂新增60件告黑案](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%A7%A3%E8%AF%BB%E6%9D%A8%E5%B9%82%E6%96%B0%E5%A2%9E60%E4%BB%B6%E5%91%8A%E9%BB%91%E6%A1%88%23) `39.3K 🔥` `+34%`
1. [36岁何穗状态 (36-year-old He Sui's status)](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E4%BD%95%E7%A9%97%E7%8A%B6%E6%80%81%23) `25.0K 🔥` `+22%`
1. [孙龙银牌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E9%93%B6%E7%89%8C%23) `225.3K 🔥`
1. [任子威 黄大宪成功淘汰](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AD%90%E5%A8%81%20%E9%BB%84%E5%A4%A7%E5%AE%AA%E6%88%90%E5%8A%9F%E6%B7%98%E6%B1%B0%23) `138.3K 🔥`
1. [10岁女生校内晕倒称遭多名男生殴打 (A 10-year-old girl fainted at school and said she was beaten by multiple boys)](https://s.weibo.com/weibo?q=%2310%E5%B2%81%E5%A5%B3%E7%94%9F%E6%A0%A1%E5%86%85%E6%99%95%E5%80%92%E7%A7%B0%E9%81%AD%E5%A4%9A%E5%90%8D%E7%94%B7%E7%94%9F%E6%AE%B4%E6%89%93%23) `50.7K 🔥`
1. [心疼范可新](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E8%8C%83%E5%8F%AF%E6%96%B0%23) `41.9K 🔥`
1. [蒋欣 当年真的错怪你了 (Jiang Xin, I really blamed you wrongly back then)](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%20%E5%BD%93%E5%B9%B4%E7%9C%9F%E7%9A%84%E9%94%99%E6%80%AA%E4%BD%A0%E4%BA%86%23) `33.1K 🔥`
1. [男子就医喊饿竟是全身血液已近流干 (A man went to the doctor and complained that he was hungry, but it turned out that the blood in his body was almost dry)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B0%B1%E5%8C%BB%E5%96%8A%E9%A5%BF%E7%AB%9F%E6%98%AF%E5%85%A8%E8%BA%AB%E8%A1%80%E6%B6%B2%E5%B7%B2%E8%BF%91%E6%B5%81%E5%B9%B2%23) `32.9K 🔥`
1. [吃烤全羊发现大量粪便店家赔偿1500 (After eating a roasted whole lamb and finding a lot of feces, the store compensated me 1,500)](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%83%A4%E5%85%A8%E7%BE%8A%E5%8F%91%E7%8E%B0%E5%A4%A7%E9%87%8F%E7%B2%AA%E4%BE%BF%E5%BA%97%E5%AE%B6%E8%B5%94%E5%81%BF1500%23) `32.8K 🔥`
1. [远洋船员持菜刀砍杀船长后分尸抛海 (Ocean-going sailor hacked to death captain with kitchen knife, then quartered his body and threw it overboard)](https://s.weibo.com/weibo?q=%23%E8%BF%9C%E6%B4%8B%E8%88%B9%E5%91%98%E6%8C%81%E8%8F%9C%E5%88%80%E7%A0%8D%E6%9D%80%E8%88%B9%E9%95%BF%E5%90%8E%E5%88%86%E5%B0%B8%E6%8A%9B%E6%B5%B7%23) `32.8K 🔥`
1. [8岁小孩姐徒步117公里回老家](https://s.weibo.com/weibo?q=%238%E5%B2%81%E5%B0%8F%E5%AD%A9%E5%A7%90%E5%BE%92%E6%AD%A5117%E5%85%AC%E9%87%8C%E5%9B%9E%E8%80%81%E5%AE%B6%23) `32.6K 🔥`
1. [六国联名反对欧盟加大对华限制 (Six countries jointly oppose the EU's increased restrictions on China)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%9B%BD%E8%81%94%E5%90%8D%E5%8F%8D%E5%AF%B9%E6%AC%A7%E7%9B%9F%E5%8A%A0%E5%A4%A7%E5%AF%B9%E5%8D%8E%E9%99%90%E5%88%B6%23) `31.2K 🔥`
1. [中国冰壶女队7比4英国 (Chinese women's curling team 7-4 UK)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%B0%E5%A3%B6%E5%A5%B3%E9%98%9F7%E6%AF%944%E8%8B%B1%E5%9B%BD%23) `30.8K 🔥`
1. [坏果太多胖东来下架全部智利车厘子](https://s.weibo.com/weibo?q=%23%E5%9D%8F%E6%9E%9C%E5%A4%AA%E5%A4%9A%E8%83%96%E4%B8%9C%E6%9D%A5%E4%B8%8B%E6%9E%B6%E5%85%A8%E9%83%A8%E6%99%BA%E5%88%A9%E8%BD%A6%E5%8E%98%E5%AD%90%23) `29.2K 🔥`
1. [微博之夜 台上顶流台下好友](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%20%E5%8F%B0%E4%B8%8A%E9%A1%B6%E6%B5%81%E5%8F%B0%E4%B8%8B%E5%A5%BD%E5%8F%8B%23) `28.4K 🔥`
1. [母亲花6万为智力残障儿子娶外籍妻子](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%B16%E4%B8%87%E4%B8%BA%E6%99%BA%E5%8A%9B%E6%AE%8B%E9%9A%9C%E5%84%BF%E5%AD%90%E5%A8%B6%E5%A4%96%E7%B1%8D%E5%A6%BB%E5%AD%90%23) `27.2K 🔥`
1. [王濛喊话中国短道要争气](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%96%8A%E8%AF%9D%E4%B8%AD%E5%9B%BD%E7%9F%AD%E9%81%93%E8%A6%81%E4%BA%89%E6%B0%94%23) `26.4K 🔥`
1. [肥猫郑则仕减重70斤感谢周润发](https://s.weibo.com/weibo?q=%23%E8%82%A5%E7%8C%AB%E9%83%91%E5%88%99%E4%BB%95%E5%87%8F%E9%87%8D70%E6%96%A4%E6%84%9F%E8%B0%A2%E5%91%A8%E6%B6%A6%E5%8F%91%23) `25.5K 🔥`
1. [连续五年都没有年三十 (No New Year's Eve for five consecutive years)](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E7%BB%AD%E4%BA%94%E5%B9%B4%E9%83%BD%E6%B2%A1%E6%9C%89%E5%B9%B4%E4%B8%89%E5%8D%81%23) `24.4K 🔥`
1. [速度滑冰女子5000米](https://s.weibo.com/weibo?q=%23%E9%80%9F%E5%BA%A6%E6%BB%91%E5%86%B0%E5%A5%B3%E5%AD%905000%E7%B1%B3%23) `23.9K 🔥`
1. [虞书欣直播](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9B%B4%E6%92%AD%23) `23.7K 🔥`
1. [韩国崔佳恩U池夺冠](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%B4%94%E4%BD%B3%E6%81%A9U%E6%B1%A0%E5%A4%BA%E5%86%A0%23) `23.7K 🔥`
1. [宋亚轩遇到了最懂他的刘耀文 (Song Yaxuan met Liu Yaowen who understood him best)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E9%81%87%E5%88%B0%E4%BA%86%E6%9C%80%E6%87%82%E4%BB%96%E7%9A%84%E5%88%98%E8%80%80%E6%96%87%23) `23.7K 🔥`
1. [王者荣耀马年全明星表演赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E9%A9%AC%E5%B9%B4%E5%85%A8%E6%98%8E%E6%98%9F%E8%A1%A8%E6%BC%94%E8%B5%9B%23) `22.3K 🔥`
1. [太平年看哭了 (I cried when I saw Tai Ping Nian)](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B3%E5%B9%B4%E7%9C%8B%E5%93%AD%E4%BA%86%23) `22.0K 🔥`
1. [唐宫奇案 (Strange Cases in Tang Palace)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%23) `18.3K 🔥`
1. [孙龙 (Sun Long)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%23) `365.6K 🔥` `-61%`
1. [我家的C位年货 (My family’s C-position New Year’s goods)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E7%9A%84C%E4%BD%8D%E5%B9%B4%E8%B4%A7%23) `169.1K 🔥` `-26%`
1. [林孝埈无缘男子1000米半决赛 (Lin Xiaojuan missed the men's 1000m semifinals)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E6%97%A0%E7%BC%98%E7%94%B7%E5%AD%901000%E7%B1%B3%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `127.6K 🔥` `-35%`
1. [短道速滑 (short track speed skating)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%23) `88.6K 🔥` `-68%`
1. [刘少昂1000米无缘决赛 (Liu Shaoang missed the 1000m final)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%821000%E7%B1%B3%E6%97%A0%E7%BC%98%E5%86%B3%E8%B5%9B%23) `75.2K 🔥` `-30%`
1. [冬奥短道速滑女子500米](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%E5%A5%B3%E5%AD%90500%E7%B1%B3%23) `50.7K 🔥` `-38%`
1. [虞书欣衣帽间](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%A1%A3%E5%B8%BD%E9%97%B4%23) `50.7K 🔥` `-25%`
1. [刘少昂好稳 (Liu Shaoang is so stable)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E5%A5%BD%E7%A8%B3%23) `49.5K 🔥` `-53%`
1. [冬奥短道速滑男子1000米 (Winter Olympics short track speed skating men's 1000 meters)](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%E7%94%B7%E5%AD%901000%E7%B1%B3%23) `48.8K 🔥` `-59%`
1. [孙龙短道1000米银牌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E7%9F%AD%E9%81%931000%E7%B1%B3%E9%93%B6%E7%89%8C%23) `41.1K 🔥` `-31%`
1. [孙龙进1000米半决赛](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E8%BF%9B1000%E7%B1%B3%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `37.2K 🔥` `-46%`
1. [孙龙1000米进决赛](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%991000%E7%B1%B3%E8%BF%9B%E5%86%B3%E8%B5%9B%23) `32.9K 🔥` `-72%`
1. [丞磊在飞机上帮王楚然剔牙](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E5%9C%A8%E9%A3%9E%E6%9C%BA%E4%B8%8A%E5%B8%AE%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%89%94%E7%89%99%23) `31.0K 🔥` `-21%`
1. [崔佳恩 感情分](https://s.weibo.com/weibo?q=%23%E5%B4%94%E4%BD%B3%E6%81%A9%20%E6%84%9F%E6%83%85%E5%88%86%23) `28.3K 🔥` `-40%`
1. [女子单板U池决赛 (Women's Snowboard U Pool Finals)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8D%95%E6%9D%BFU%E6%B1%A0%E5%86%B3%E8%B5%9B%23) `27.3K 🔥` `-28%`
1. [贝尔塞伯短道500米金牌](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%B0%94%E5%A1%9E%E4%BC%AF%E7%9F%AD%E9%81%93500%E7%B1%B3%E9%87%91%E7%89%8C%23) `20.8K 🔥` `-80%`
1. [范可新三人碰撞摔倒](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%8F%AF%E6%96%B0%E4%B8%89%E4%BA%BA%E7%A2%B0%E6%92%9E%E6%91%94%E5%80%92%23) `18.2K 🔥` `-37%`

Updated at 2026-02-13 05:55:18

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
