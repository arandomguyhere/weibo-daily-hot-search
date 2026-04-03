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

1. [浪姐排名 (Sister Lang ranking)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `1.5M 🔥` `NEW`
1. [王濛 我爱你中国](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E6%88%91%E7%88%B1%E4%BD%A0%E4%B8%AD%E5%9B%BD%23) `499.7K 🔥` `NEW`
1. [以色列铁穹被伊朗击穿](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%93%81%E7%A9%B9%E8%A2%AB%E4%BC%8A%E6%9C%97%E5%87%BB%E7%A9%BF%23) `178.7K 🔥` `NEW`
1. [揭秘日本为何提前部署远程导弹](https://s.weibo.com/weibo?q=%23%E6%8F%AD%E7%A7%98%E6%97%A5%E6%9C%AC%E4%B8%BA%E4%BD%95%E6%8F%90%E5%89%8D%E9%83%A8%E7%BD%B2%E8%BF%9C%E7%A8%8B%E5%AF%BC%E5%BC%B9%23) `173.6K 🔥` `NEW`
1. [被App导航到悬崖边发生意外谁担责](https://s.weibo.com/weibo?q=%23%E8%A2%ABApp%E5%AF%BC%E8%88%AA%E5%88%B0%E6%82%AC%E5%B4%96%E8%BE%B9%E5%8F%91%E7%94%9F%E6%84%8F%E5%A4%96%E8%B0%81%E6%8B%85%E8%B4%A3%23) `170.5K 🔥` `NEW`
1. [王楚钦直言0比2落后真没机会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%9B%B4%E8%A8%800%E6%AF%942%E8%90%BD%E5%90%8E%E7%9C%9F%E6%B2%A1%E6%9C%BA%E4%BC%9A%23) `166.5K 🔥` `NEW`
1. [C罗梅西世纪同框](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%A2%85%E8%A5%BF%E4%B8%96%E7%BA%AA%E5%90%8C%E6%A1%86%23) `138.3K 🔥` `NEW`
1. [F勒布伦赞王楚钦高质量吸短](https://s.weibo.com/weibo?q=%23F%E5%8B%92%E5%B8%83%E4%BC%A6%E8%B5%9E%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%AB%98%E8%B4%A8%E9%87%8F%E5%90%B8%E7%9F%AD%23) `123.7K 🔥` `NEW`
1. [最强大脑](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%BC%BA%E5%A4%A7%E8%84%91%23) `111.0K 🔥` `NEW`
1. [孩子一张口身份证掉出来了](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E4%B8%80%E5%BC%A0%E5%8F%A3%E8%BA%AB%E4%BB%BD%E8%AF%81%E6%8E%89%E5%87%BA%E6%9D%A5%E4%BA%86%23) `102.3K 🔥` `NEW`
1. [浪姐全场观众喊代斯 (Sister Lang, the whole audience shouted "Dai Si")](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%85%A8%E5%9C%BA%E8%A7%82%E4%BC%97%E5%96%8A%E4%BB%A3%E6%96%AF%23) `99.1K 🔥` `NEW`
1. [林孝埈最害怕的事](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E6%9C%80%E5%AE%B3%E6%80%95%E7%9A%84%E4%BA%8B%23) `91.0K 🔥` `NEW`
1. [韩国法国发表联合声明](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%B3%95%E5%9B%BD%E5%8F%91%E8%A1%A8%E8%81%94%E5%90%88%E5%A3%B0%E6%98%8E%23) `88.1K 🔥` `NEW`
1. [苹果会涨价吗](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E4%BC%9A%E6%B6%A8%E4%BB%B7%E5%90%97%23) `87.3K 🔥` `NEW`
1. [赵本山女儿回应被骂网络乞丐](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9C%AC%E5%B1%B1%E5%A5%B3%E5%84%BF%E5%9B%9E%E5%BA%94%E8%A2%AB%E9%AA%82%E7%BD%91%E7%BB%9C%E4%B9%9E%E4%B8%90%23) `81.0K 🔥` `NEW`
1. [国羽混双拆队](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E7%BE%BD%E6%B7%B7%E5%8F%8C%E6%8B%86%E9%98%9F%23) `80.1K 🔥` `NEW`
1. [阚清子 尊重游戏规则](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%20%E5%B0%8A%E9%87%8D%E6%B8%B8%E6%88%8F%E8%A7%84%E5%88%99%23) `631.3K 🔥` `+57%`
1. [王一博在蕉内欢迎光临 (Welcome to Wang Yibo in Jiao Nei)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%9C%A8%E8%95%89%E5%86%85%E6%AC%A2%E8%BF%8E%E5%85%89%E4%B8%B4%23) `476.9K 🔥` `+50%`
1. [王楚钦说不应该因比赛成绩嘲笑运动员](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E4%B8%8D%E5%BA%94%E8%AF%A5%E5%9B%A0%E6%AF%94%E8%B5%9B%E6%88%90%E7%BB%A9%E5%98%B2%E7%AC%91%E8%BF%90%E5%8A%A8%E5%91%98%23) `928.5K 🔥`
1. [赏花踏青特色主题专列来了](https://s.weibo.com/weibo?q=%23%E8%B5%8F%E8%8A%B1%E8%B8%8F%E9%9D%92%E7%89%B9%E8%89%B2%E4%B8%BB%E9%A2%98%E4%B8%93%E5%88%97%E6%9D%A5%E4%BA%86%23) `686.4K 🔥`
1. [优思益称无力售后 (Yousiyi says it is unable to provide after-sales service)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E7%A7%B0%E6%97%A0%E5%8A%9B%E5%94%AE%E5%90%8E%23) `527.3K 🔥`
1. [当你过午不食六个月](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E8%BF%87%E5%8D%88%E4%B8%8D%E9%A3%9F%E5%85%AD%E4%B8%AA%E6%9C%88%23) `454.9K 🔥`
1. [工信部紧急提醒苹果用户 (Ministry of Industry and Information Technology urgently reminds Apple users)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BF%A1%E9%83%A8%E7%B4%A7%E6%80%A5%E6%8F%90%E9%86%92%E8%8B%B9%E6%9E%9C%E7%94%A8%E6%88%B7%23) `343.5K 🔥`
1. [这波时团应援给到夯](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%B3%A2%E6%97%B6%E5%9B%A2%E5%BA%94%E6%8F%B4%E7%BB%99%E5%88%B0%E5%A4%AF%23) `162.2K 🔥`
1. [兰州大学惊现虐猫房车](https://s.weibo.com/weibo?q=%23%E5%85%B0%E5%B7%9E%E5%A4%A7%E5%AD%A6%E6%83%8A%E7%8E%B0%E8%99%90%E7%8C%AB%E6%88%BF%E8%BD%A6%23) `162.0K 🔥`
1. [李马克解约退团 (Mark Li terminates contract and quits group)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A9%AC%E5%85%8B%E8%A7%A3%E7%BA%A6%E9%80%80%E5%9B%A2%23) `150.7K 🔥`
1. [周杰伦演唱会 (Jay Chou concert)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `134.9K 🔥`
1. [王橹杰画的咴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%94%BB%E7%9A%84%E5%92%B4%23) `123.1K 🔥`
1. [在图书馆被要联系方式了](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%9B%BE%E4%B9%A6%E9%A6%86%E8%A2%AB%E8%A6%81%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F%E4%BA%86%23) `103.9K 🔥`
1. [优思益发布海外工厂情况声明 (Unisei releases statement on overseas factory conditions)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E5%8F%91%E5%B8%83%E6%B5%B7%E5%A4%96%E5%B7%A5%E5%8E%82%E6%83%85%E5%86%B5%E5%A3%B0%E6%98%8E%23) `98.9K 🔥`
1. [疑似李马克退团的原因](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%9D%8E%E9%A9%AC%E5%85%8B%E9%80%80%E5%9B%A2%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `93.7K 🔥`
1. [17岁小伙体内藏了根十多年的缝衣针](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%B0%8F%E4%BC%99%E4%BD%93%E5%86%85%E8%97%8F%E4%BA%86%E6%A0%B9%E5%8D%81%E5%A4%9A%E5%B9%B4%E7%9A%84%E7%BC%9D%E8%A1%A3%E9%92%88%23) `88.3K 🔥`
1. [环球影城偶遇黄磊二女儿](https://s.weibo.com/weibo?q=%23%E7%8E%AF%E7%90%83%E5%BD%B1%E5%9F%8E%E5%81%B6%E9%81%87%E9%BB%84%E7%A3%8A%E4%BA%8C%E5%A5%B3%E5%84%BF%23) `88.2K 🔥`
1. [马兴瑞被查 (Ma Xingrui was investigated)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%B4%E7%91%9E%E8%A2%AB%E6%9F%A5%23) `244.5K 🔥` `-24%`
1. [上海夫妇被假将军女儿骗走近半亿 (Shanghai couple was defrauded of nearly half a million yuan by fake general’s daughter)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A4%AB%E5%A6%87%E8%A2%AB%E5%81%87%E5%B0%86%E5%86%9B%E5%A5%B3%E5%84%BF%E9%AA%97%E8%B5%B0%E8%BF%91%E5%8D%8A%E4%BA%BF%23) `182.9K 🔥` `-31%`
1. [代斯票数](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%96%AF%E7%A5%A8%E6%95%B0%23) `182.5K 🔥` `-67%`
1. [阚清子唱哭了](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%94%B1%E5%93%AD%E4%BA%86%23) `182.4K 🔥` `-43%`
1. [伊媒称美军试图救出遭击落战机飞行员 (Iranian media says U.S. military tried to rescue pilot of downed fighter jet)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%AA%92%E7%A7%B0%E7%BE%8E%E5%86%9B%E8%AF%95%E5%9B%BE%E6%95%91%E5%87%BA%E9%81%AD%E5%87%BB%E8%90%BD%E6%88%98%E6%9C%BA%E9%A3%9E%E8%A1%8C%E5%91%98%23) `181.6K 🔥` `-36%`
1. [乘风初舞台直播](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E5%88%9D%E8%88%9E%E5%8F%B0%E7%9B%B4%E6%92%AD%23) `180.1K 🔥` `-44%`
1. [王楚钦11比13F勒布伦 (Wang Chuqin 11-13F Le Brun)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A611%E6%AF%9413F%E5%8B%92%E5%B8%83%E4%BC%A6%23) `178.2K 🔥` `-84%`
1. [温峥嵘 二重唱](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%20%E4%BA%8C%E9%87%8D%E5%94%B1%23) `176.2K 🔥` `-45%`
1. [男子发私照让豆包测评身材被封号](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8F%91%E7%A7%81%E7%85%A7%E8%AE%A9%E8%B1%86%E5%8C%85%E6%B5%8B%E8%AF%84%E8%BA%AB%E6%9D%90%E8%A2%AB%E5%B0%81%E5%8F%B7%23) `171.9K 🔥` `-33%`
1. [孙怡 好美的洋娃娃](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E5%A5%BD%E7%BE%8E%E7%9A%84%E6%B4%8B%E5%A8%83%E5%A8%83%23) `170.1K 🔥` `-36%`
1. [张凌赫因为帅被同学偷拍](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%A0%E4%B8%BA%E5%B8%85%E8%A2%AB%E5%90%8C%E5%AD%A6%E5%81%B7%E6%8B%8D%23) `164.7K 🔥` `-37%`
1. [狼队零封AG晋级决赛 (Wolves advance to the finals with a clean sheet against AG)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E9%9B%B6%E5%B0%81AG%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `152.2K 🔥` `-52%`
1. [AG对战狼队](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98%E7%8B%BC%E9%98%9F%23) `151.0K 🔥` `-53%`
1. [孙怡 垫音](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E5%9E%AB%E9%9F%B3%23) `151.0K 🔥` `-52%`
1. [万千惠 实力派](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%20%E5%AE%9E%E5%8A%9B%E6%B4%BE%23) `138.1K 🔥` `-54%`
1. [我许可](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%AE%B8%E5%8F%AF%23) `102.9K 🔥` `-23%`
1. [医保卡只能本人使用 (The medical insurance card can only be used by yourself)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E4%BF%9D%E5%8D%A1%E5%8F%AA%E8%83%BD%E6%9C%AC%E4%BA%BA%E4%BD%BF%E7%94%A8%23) `84.7K 🔥` `-22%`

Updated at 2026-04-03 22:32:13

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
