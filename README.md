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

1. [王嘉尔世巡旧金山站 (Jackson Wang World Tour San Francisco Station)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E4%B8%96%E5%B7%A1%E6%97%A7%E9%87%91%E5%B1%B1%E7%AB%99%23) `639.6K 🔥` `NEW`
1. [初舞台209分钟](https://s.weibo.com/weibo?q=%23%E5%88%9D%E8%88%9E%E5%8F%B0209%E5%88%86%E9%92%9F%23) `322.9K 🔥` `NEW`
1. [浪姐赛制](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%B5%9B%E5%88%B6%23) `313.8K 🔥` `NEW`
1. [男子卖玩具枪被关279天获国赔](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8D%96%E7%8E%A9%E5%85%B7%E6%9E%AA%E8%A2%AB%E5%85%B3279%E5%A4%A9%E8%8E%B7%E5%9B%BD%E8%B5%94%23) `267.9K 🔥` `NEW`
1. [范玮琪太紧张了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E7%8E%AE%E7%90%AA%E5%A4%AA%E7%B4%A7%E5%BC%A0%E4%BA%86%23) `258.8K 🔥` `NEW`
1. [女子不愿被男消防员搀扶5人抬下山](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%8D%E6%84%BF%E8%A2%AB%E7%94%B7%E6%B6%88%E9%98%B2%E5%91%98%E6%90%80%E6%89%B65%E4%BA%BA%E6%8A%AC%E4%B8%8B%E5%B1%B1%23) `202.2K 🔥` `NEW`
1. [上海夫妇被假将军女儿骗走近半亿](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A4%AB%E5%A6%87%E8%A2%AB%E5%81%87%E5%B0%86%E5%86%9B%E5%A5%B3%E5%84%BF%E9%AA%97%E8%B5%B0%E8%BF%91%E5%8D%8A%E4%BA%BF%23) `202.0K 🔥` `NEW`
1. [疑似李马克退团的原因](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%9D%8E%E9%A9%AC%E5%85%8B%E9%80%80%E5%9B%A2%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `201.8K 🔥` `NEW`
1. [乌兰图雅第一个出场](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%87%BA%E5%9C%BA%23) `201.4K 🔥` `NEW`
1. [王俊凯直播国风造型](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%9B%B4%E6%92%AD%E5%9B%BD%E9%A3%8E%E9%80%A0%E5%9E%8B%23) `197.4K 🔥` `NEW`
1. [黄金大幅回调 (Gold pulls back sharply)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%A4%A7%E5%B9%85%E5%9B%9E%E8%B0%83%23) `188.0K 🔥` `NEW`
1. [范玮琪一开口全场合唱](https://s.weibo.com/weibo?q=%23%E8%8C%83%E7%8E%AE%E7%90%AA%E4%B8%80%E5%BC%80%E5%8F%A3%E5%85%A8%E5%9C%BA%E5%90%88%E5%94%B1%23) `149.2K 🔥` `NEW`
1. [当你过午不食六个月](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E8%BF%87%E5%8D%88%E4%B8%8D%E9%A3%9F%E5%85%AD%E4%B8%AA%E6%9C%88%23) `139.9K 🔥` `NEW`
1. [一看到乌兰图雅就想笑](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9C%8B%E5%88%B0%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%E5%B0%B1%E6%83%B3%E7%AC%91%23) `138.5K 🔥` `NEW`
1. [王楚钦扳平F勒布伦](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%89%B3%E5%B9%B3F%E5%8B%92%E5%B8%83%E4%BC%A6%23) `121.0K 🔥` `NEW`
1. [环球影城偶遇黄磊二女儿](https://s.weibo.com/weibo?q=%23%E7%8E%AF%E7%90%83%E5%BD%B1%E5%9F%8E%E5%81%B6%E9%81%87%E9%BB%84%E7%A3%8A%E4%BA%8C%E5%A5%B3%E5%84%BF%23) `118.9K 🔥` `NEW`
1. [医保卡只能本人使用](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E4%BF%9D%E5%8D%A1%E5%8F%AA%E8%83%BD%E6%9C%AC%E4%BA%BA%E4%BD%BF%E7%94%A8%23) `104.7K 🔥` `NEW`
1. [花巨资救1950头乳猪图啥](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B7%A8%E8%B5%84%E6%95%911950%E5%A4%B4%E4%B9%B3%E7%8C%AA%E5%9B%BE%E5%95%A5%23) `94.1K 🔥` `NEW`
1. [贺思慕强吻段胥](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E6%80%9D%E6%85%95%E5%BC%BA%E5%90%BB%E6%AE%B5%E8%83%A5%23) `94.1K 🔥` `NEW`
1. [脂肪肝是否可以逆转](https://s.weibo.com/weibo?q=%23%E8%84%82%E8%82%AA%E8%82%9D%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E9%80%86%E8%BD%AC%23) `94.0K 🔥` `NEW`
1. [尹子维录节目现场发飙 (Yin Ziwei went crazy on the show)](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E5%AD%90%E7%BB%B4%E5%BD%95%E8%8A%82%E7%9B%AE%E7%8E%B0%E5%9C%BA%E5%8F%91%E9%A3%99%23) `93.9K 🔥` `NEW`
1. [孙颖莎礼仪标兵](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%A4%BC%E4%BB%AA%E6%A0%87%E5%85%B5%23) `93.5K 🔥` `NEW`
1. [美国第五舰队基地遭袭画面](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%AC%AC%E4%BA%94%E8%88%B0%E9%98%9F%E5%9F%BA%E5%9C%B0%E9%81%AD%E8%A2%AD%E7%94%BB%E9%9D%A2%23) `91.5K 🔥` `NEW`
1. [菠萝排骨](https://s.weibo.com/weibo?q=%23%E8%8F%A0%E8%90%9D%E6%8E%92%E9%AA%A8%23) `87.9K 🔥` `NEW`
1. [余华的权威我后知后觉](https://s.weibo.com/weibo?q=%23%E4%BD%99%E5%8D%8E%E7%9A%84%E6%9D%83%E5%A8%81%E6%88%91%E5%90%8E%E7%9F%A5%E5%90%8E%E8%A7%89%23) `87.9K 🔥` `NEW`
1. [张凌赫被考古得只剩个裤衩了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A2%AB%E8%80%83%E5%8F%A4%E5%BE%97%E5%8F%AA%E5%89%A9%E4%B8%AA%E8%A3%A4%E8%A1%A9%E4%BA%86%23) `84.7K 🔥` `NEW`
1. [优思益称无力售后 (Yousiyi says it is unable to provide after-sales service)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E7%A7%B0%E6%97%A0%E5%8A%9B%E5%94%AE%E5%90%8E%23) `786.9K 🔥` `+591%`
1. [王楚钦vsF勒布伦](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vsF%E5%8B%92%E5%B8%83%E4%BC%A6%23) `541.7K 🔥` `+114%`
1. [韩国遭围殴致死导演儿子目睹全程](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%81%AD%E5%9B%B4%E6%AE%B4%E8%87%B4%E6%AD%BB%E5%AF%BC%E6%BC%94%E5%84%BF%E5%AD%90%E7%9B%AE%E7%9D%B9%E5%85%A8%E7%A8%8B%23) `335.3K 🔥` `+106%`
1. [曝IU李钟硕分手 (IU and Lee Jong Suk break up revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9DIU%E6%9D%8E%E9%92%9F%E7%A1%95%E5%88%86%E6%89%8B%23) `226.1K 🔥` `+76%`
1. [张凌赫因为帅被同学偷拍](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%A0%E4%B8%BA%E5%B8%85%E8%A2%AB%E5%90%8C%E5%AD%A6%E5%81%B7%E6%8B%8D%23) `214.3K 🔥` `+120%`
1. [王橹杰画的咴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%94%BB%E7%9A%84%E5%92%B4%23) `202.6K 🔥` `+63%`
1. [周杰伦演唱会 (Jay Chou concert)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `201.6K 🔥` `+83%`
1. [男子发私照让豆包测评身材被封号](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8F%91%E7%A7%81%E7%85%A7%E8%AE%A9%E8%B1%86%E5%8C%85%E6%B5%8B%E8%AF%84%E8%BA%AB%E6%9D%90%E8%A2%AB%E5%B0%81%E5%8F%B7%23) `201.4K 🔥` `+56%`
1. [李马克解约退团 (Mark Li terminates contract and quits group)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A9%AC%E5%85%8B%E8%A7%A3%E7%BA%A6%E9%80%80%E5%9B%A2%23) `187.5K 🔥` `+51%`
1. [朴志晟泡泡发长文](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%BF%97%E6%99%9F%E6%B3%A1%E6%B3%A1%E5%8F%91%E9%95%BF%E6%96%87%23) `184.6K 🔥` `+65%`
1. [17岁小伙体内藏了根十多年的缝衣针](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%B0%8F%E4%BC%99%E4%BD%93%E5%86%85%E8%97%8F%E4%BA%86%E6%A0%B9%E5%8D%81%E5%A4%9A%E5%B9%B4%E7%9A%84%E7%BC%9D%E8%A1%A3%E9%92%88%23) `169.9K 🔥` `+38%`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `126.9K 🔥` `+40%`
1. [马兴瑞被查 (Ma Xingrui was investigated)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%B4%E7%91%9E%E8%A2%AB%E6%9F%A5%23) `1.1M 🔥`
1. [莫氏鸡煲老板累趴全村动起来了](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E7%B4%AF%E8%B6%B4%E5%85%A8%E6%9D%91%E5%8A%A8%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `202.4K 🔥`
1. [时代少年团物料重新上传 (Times Youth League materials re-uploaded)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%89%A9%E6%96%99%E9%87%8D%E6%96%B0%E4%B8%8A%E4%BC%A0%23) `112.8K 🔥`
1. [不知道你是谁但知道你为了谁 (I don’t know who you are but I know who you are for)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%9F%A5%E9%81%93%E4%BD%A0%E6%98%AF%E8%B0%81%E4%BD%86%E7%9F%A5%E9%81%93%E4%BD%A0%E4%B8%BA%E4%BA%86%E8%B0%81%23) `648.2K 🔥` `-34%`
1. [工信部紧急提醒苹果用户](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BF%A1%E9%83%A8%E7%B4%A7%E6%80%A5%E6%8F%90%E9%86%92%E8%8B%B9%E6%9E%9C%E7%94%A8%E6%88%B7%23) `335.2K 🔥` `-68%`
1. [乘风初舞台直播](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E5%88%9D%E8%88%9E%E5%8F%B0%E7%9B%B4%E6%92%AD%23) `246.5K 🔥` `-75%`
1. [AG对战狼队](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98%E7%8B%BC%E9%98%9F%23) `239.4K 🔥` `-75%`
1. [优思益发布海外工厂情况声明 (Unisei releases statement on overseas factory conditions)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E5%8F%91%E5%B8%83%E6%B5%B7%E5%A4%96%E5%B7%A5%E5%8E%82%E6%83%85%E5%86%B5%E5%A3%B0%E6%98%8E%23) `202.8K 🔥` `-30%`
1. [袁泉拍戏真做了胃镜](https://s.weibo.com/weibo?q=%23%E8%A2%81%E6%B3%89%E6%8B%8D%E6%88%8F%E7%9C%9F%E5%81%9A%E4%BA%86%E8%83%83%E9%95%9C%23) `202.5K 🔥` `-25%`
1. [云初令全阵容发布 (Yunchu ordered the full lineup to be released)](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%88%9D%E4%BB%A4%E5%85%A8%E9%98%B5%E5%AE%B9%E5%8F%91%E5%B8%83%23) `158.1K 🔥` `-43%`
1. [原来身份证不是全国统一的 (It turns out that ID cards are not uniform across the country.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BA%AB%E4%BB%BD%E8%AF%81%E4%B8%8D%E6%98%AF%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84%23) `94.8K 🔥` `-44%`
1. [迪丽热巴素人婚纱模特时期](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%B4%A0%E4%BA%BA%E5%A9%9A%E7%BA%B1%E6%A8%A1%E7%89%B9%E6%97%B6%E6%9C%9F%23) `94.1K 🔥` `-24%`
1. [女子把XXXXL号搁浅皇带鱼推回大海](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8A%8AXXXXL%E5%8F%B7%E6%90%81%E6%B5%85%E7%9A%87%E5%B8%A6%E9%B1%BC%E6%8E%A8%E5%9B%9E%E5%A4%A7%E6%B5%B7%23) `84.1K 🔥` `-42%`

Updated at 2026-04-03 20:31:42

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
