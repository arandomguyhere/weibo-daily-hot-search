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

1. [长期不工作的人会失去什么](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%B8%8D%E5%B7%A5%E4%BD%9C%E7%9A%84%E4%BA%BA%E4%BC%9A%E5%A4%B1%E5%8E%BB%E4%BB%80%E4%B9%88%23) `2.1M 🔥` `NEW`
1. [披荆斩棘三公上半场排名](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%89%E5%85%AC%E4%B8%8A%E5%8D%8A%E5%9C%BA%E6%8E%92%E5%90%8D%23) `829.9K 🔥` `NEW`
1. [前8月全国铁路发送旅客超33亿人次](https://s.weibo.com/weibo?q=%23%E5%89%8D8%E6%9C%88%E5%85%A8%E5%9B%BD%E9%93%81%E8%B7%AF%E5%8F%91%E9%80%81%E6%97%85%E5%AE%A2%E8%B6%8533%E4%BA%BF%E4%BA%BA%E6%AC%A1%23) `679.4K 🔥` `NEW`
1. [起程NBA中国赛2026](https://s.weibo.com/weibo?q=%23%E8%B5%B7%E7%A8%8BNBA%E4%B8%AD%E5%9B%BD%E8%B5%9B2026%23) `596.2K 🔥` `NEW`
1. [王源演唱会结束打开手机一看天塌了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%BC%94%E5%94%B1%E4%BC%9A%E7%BB%93%E6%9D%9F%E6%89%93%E5%BC%80%E6%89%8B%E6%9C%BA%E4%B8%80%E7%9C%8B%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `545.2K 🔥` `NEW`
1. [LPL出征仪式 寒酸](https://s.weibo.com/weibo?q=%23LPL%E5%87%BA%E5%BE%81%E4%BB%AA%E5%BC%8F%20%E5%AF%92%E9%85%B8%23) `345.0K 🔥` `NEW`
1. [华晨宇齐天](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E9%BD%90%E5%A4%A9%23) `289.8K 🔥` `NEW`
1. [很多人误以为低度酒养生](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E4%BA%BA%E8%AF%AF%E4%BB%A5%E4%B8%BA%E4%BD%8E%E5%BA%A6%E9%85%92%E5%85%BB%E7%94%9F%23) `283.1K 🔥` `NEW`
1. [司美格鲁肽成变质回流药重灾区](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E6%88%90%E5%8F%98%E8%B4%A8%E5%9B%9E%E6%B5%81%E8%8D%AF%E9%87%8D%E7%81%BE%E5%8C%BA%23) `265.1K 🔥` `NEW`
1. [丈夫家暴妻子致死子女出具谅解书](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%AE%B6%E6%9A%B4%E5%A6%BB%E5%AD%90%E8%87%B4%E6%AD%BB%E5%AD%90%E5%A5%B3%E5%87%BA%E5%85%B7%E8%B0%85%E8%A7%A3%E4%B9%A6%23) `251.3K 🔥` `NEW`
1. [齐天太好听了](https://s.weibo.com/weibo?q=%23%E9%BD%90%E5%A4%A9%E5%A4%AA%E5%A5%BD%E5%90%AC%E4%BA%86%23) `234.5K 🔥` `NEW`
1. [被顾客用西瓜砸头摊主获赔7万元](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%A1%BE%E5%AE%A2%E7%94%A8%E8%A5%BF%E7%93%9C%E7%A0%B8%E5%A4%B4%E6%91%8A%E4%B8%BB%E8%8E%B7%E8%B5%947%E4%B8%87%E5%85%83%23) `223.7K 🔥` `NEW`
1. [许嵩冯禧未公开婚纱照](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%E5%86%AF%E7%A6%A7%E6%9C%AA%E5%85%AC%E5%BC%80%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `223.3K 🔥` `NEW`
1. [周也哭戏憋着嘴哭](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E5%93%AD%E6%88%8F%E6%86%8B%E7%9D%80%E5%98%B4%E5%93%AD%23) `220.7K 🔥` `NEW`
1. [父女在商场遭人围堵4岁女儿被吓哭](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%A5%B3%E5%9C%A8%E5%95%86%E5%9C%BA%E9%81%AD%E4%BA%BA%E5%9B%B4%E5%A0%B54%E5%B2%81%E5%A5%B3%E5%84%BF%E8%A2%AB%E5%90%93%E5%93%AD%23) `218.7K 🔥` `NEW`
1. [爱情公寓主演合体](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%B8%BB%E6%BC%94%E5%90%88%E4%BD%93%23) `217.9K 🔥` `NEW`
1. [于正承认秦岚是延禧攻略女主](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E6%89%BF%E8%AE%A4%E7%A7%A6%E5%B2%9A%E6%98%AF%E5%BB%B6%E7%A6%A7%E6%94%BB%E7%95%A5%E5%A5%B3%E4%B8%BB%23) `215.7K 🔥` `NEW`
1. [实在搞不懂调休的意义](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E5%9C%A8%E6%90%9E%E4%B8%8D%E6%87%82%E8%B0%83%E4%BC%91%E7%9A%84%E6%84%8F%E4%B9%89%23) `214.4K 🔥` `NEW`
1. [许嵩冯禧的婚礼伴手礼](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%E5%86%AF%E7%A6%A7%E7%9A%84%E5%A9%9A%E7%A4%BC%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `212.9K 🔥` `NEW`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `211.5K 🔥` `NEW`
1. [曝小米18Fold七天激活近8万台](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B0%8F%E7%B1%B318Fold%E4%B8%83%E5%A4%A9%E6%BF%80%E6%B4%BB%E8%BF%918%E4%B8%87%E5%8F%B0%23) `210.4K 🔥` `NEW`
1. [亚运会开幕式 诡异](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%BC%80%E5%B9%95%E5%BC%8F%20%E8%AF%A1%E5%BC%82%23) `206.6K 🔥` `NEW`
1. [西贝多家门店开业半年停业](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%B4%9D%E5%A4%9A%E5%AE%B6%E9%97%A8%E5%BA%97%E5%BC%80%E4%B8%9A%E5%8D%8A%E5%B9%B4%E5%81%9C%E4%B8%9A%23) `201.2K 🔥` `NEW`
1. [爱情公寓 别试探了有市场](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%20%E5%88%AB%E8%AF%95%E6%8E%A2%E4%BA%86%E6%9C%89%E5%B8%82%E5%9C%BA%23) `199.7K 🔥` `NEW`
1. [三巨头终于有一个结婚了](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%B7%A8%E5%A4%B4%E7%BB%88%E4%BA%8E%E6%9C%89%E4%B8%80%E4%B8%AA%E7%BB%93%E5%A9%9A%E4%BA%86%23) `195.9K 🔥` `NEW`
1. [不需要找关系就能进的好工作](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%BE%E5%85%B3%E7%B3%BB%E5%B0%B1%E8%83%BD%E8%BF%9B%E7%9A%84%E5%A5%BD%E5%B7%A5%E4%BD%9C%23) `191.1K 🔥` `NEW`
1. [黄子弘凡永久终止与声幻娱乐合作](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E6%B0%B8%E4%B9%85%E7%BB%88%E6%AD%A2%E4%B8%8E%E5%A3%B0%E5%B9%BB%E5%A8%B1%E4%B9%90%E5%90%88%E4%BD%9C%23) `186.2K 🔥` `NEW`
1. [郑合惠子回应演杜翠雀](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E5%9B%9E%E5%BA%94%E6%BC%94%E6%9D%9C%E7%BF%A0%E9%9B%80%23) `183.3K 🔥` `NEW`
1. [布莱顿vs阿森纳](https://s.weibo.com/weibo?q=%23%E5%B8%83%E8%8E%B1%E9%A1%BFvs%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `181.5K 🔥` `NEW`
1. [池昌旭身材](https://s.weibo.com/weibo?q=%23%E6%B1%A0%E6%98%8C%E6%97%AD%E8%BA%AB%E6%9D%90%23) `180.5K 🔥` `NEW`
1. [iG晋级S16](https://s.weibo.com/weibo?q=%23iG%E6%99%8B%E7%BA%A7S16%23) `177.3K 🔥` `NEW`
1. [布莱顿3比0阿森纳](https://s.weibo.com/weibo?q=%23%E5%B8%83%E8%8E%B1%E9%A1%BF3%E6%AF%940%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `173.5K 🔥` `NEW`
1. [迪丽热巴绷脚背](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BB%B7%E8%84%9A%E8%83%8C%23) `173.4K 🔥` `NEW`
1. [陈赫娄艺潇李金铭孙艺洲邓家佳合体](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%A8%84%E8%89%BA%E6%BD%87%E6%9D%8E%E9%87%91%E9%93%AD%E5%AD%99%E8%89%BA%E6%B4%B2%E9%82%93%E5%AE%B6%E4%BD%B3%E5%90%88%E4%BD%93%23) `170.2K 🔥` `NEW`
1. [北漂月薪一万五两顿花9块](https://s.weibo.com/weibo?q=%23%E5%8C%97%E6%BC%82%E6%9C%88%E8%96%AA%E4%B8%80%E4%B8%87%E4%BA%94%E4%B8%A4%E9%A1%BF%E8%8A%B19%E5%9D%97%23) `165.8K 🔥` `NEW`
1. [王源跟粉丝面对面建群](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E8%B7%9F%E7%B2%89%E4%B8%9D%E9%9D%A2%E5%AF%B9%E9%9D%A2%E5%BB%BA%E7%BE%A4%23) `165.6K 🔥` `NEW`
1. [压力给到汪苏泷徐良](https://s.weibo.com/weibo?q=%23%E5%8E%8B%E5%8A%9B%E7%BB%99%E5%88%B0%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%BE%90%E8%89%AF%23) `163.9K 🔥` `NEW`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `162.7K 🔥` `NEW`
1. [张睿回应齐天舞台](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E5%9B%9E%E5%BA%94%E9%BD%90%E5%A4%A9%E8%88%9E%E5%8F%B0%23) `161.8K 🔥` `NEW`
1. [43岁金莎体态](https://s.weibo.com/weibo?q=%2343%E5%B2%81%E9%87%91%E8%8E%8E%E4%BD%93%E6%80%81%23) `156.6K 🔥` `NEW`
1. [看亚运会开幕式被吓到了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%BC%80%E5%B9%95%E5%BC%8F%E8%A2%AB%E5%90%93%E5%88%B0%E4%BA%86%23) `130.9K 🔥` `NEW`
1. [王俊凯听粉丝大合唱听哭了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%90%AC%E7%B2%89%E4%B8%9D%E5%A4%A7%E5%90%88%E5%94%B1%E5%90%AC%E5%93%AD%E4%BA%86%23) `130.6K 🔥` `NEW`
1. [亚运会中国队夺金日](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%A4%BA%E9%87%91%E6%97%A5%23) `129.7K 🔥` `NEW`
1. [杜翠雀不知道黄道婆很正常](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E7%BF%A0%E9%9B%80%E4%B8%8D%E7%9F%A5%E9%81%93%E9%BB%84%E9%81%93%E5%A9%86%E5%BE%88%E6%AD%A3%E5%B8%B8%23) `124.3K 🔥` `NEW`
1. [被顾客用西瓜砸头摊主父亲发声](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%A1%BE%E5%AE%A2%E7%94%A8%E8%A5%BF%E7%93%9C%E7%A0%B8%E5%A4%B4%E6%91%8A%E4%B8%BB%E7%88%B6%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `123.9K 🔥` `NEW`
1. [Wei和TheShy赛后拥抱GALA](https://s.weibo.com/weibo?q=%23Wei%E5%92%8CTheShy%E8%B5%9B%E5%90%8E%E6%8B%A5%E6%8A%B1GALA%23) `123.0K 🔥` `NEW`
1. [王俊凯新歌是周杰伦作曲](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%96%B0%E6%AD%8C%E6%98%AF%E5%91%A8%E6%9D%B0%E4%BC%A6%E4%BD%9C%E6%9B%B2%23) `122.8K 🔥` `NEW`
1. [艾热张睿唱齐天时后台反应](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%83%AD%E5%BC%A0%E7%9D%BF%E5%94%B1%E9%BD%90%E5%A4%A9%E6%97%B6%E5%90%8E%E5%8F%B0%E5%8F%8D%E5%BA%94%23) `120.2K 🔥` `NEW`
1. [深圳出租车111元车费强收400被查](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%87%BA%E7%A7%9F%E8%BD%A6111%E5%85%83%E8%BD%A6%E8%B4%B9%E5%BC%BA%E6%94%B6400%E8%A2%AB%E6%9F%A5%23) `115.7K 🔥` `NEW`
1. [粉笔称前CEO素质低被辞退](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E7%A7%B0%E5%89%8DCEO%E7%B4%A0%E8%B4%A8%E4%BD%8E%E8%A2%AB%E8%BE%9E%E9%80%80%23) `115.7K 🔥` `NEW`
1. [苹果18出了爱情公寓聚会了](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C18%E5%87%BA%E4%BA%86%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E8%81%9A%E4%BC%9A%E4%BA%86%23) `115.7K 🔥` `NEW`
1. [tabe 拆组合](https://s.weibo.com/weibo?q=%23tabe%20%E6%8B%86%E7%BB%84%E5%90%88%23) `115.6K 🔥` `NEW`

Updated at 2026-09-20 00:33:32

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
