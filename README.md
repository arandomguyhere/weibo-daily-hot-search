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

1. [王楚钦11比13F勒布伦 (Wang Chuqin 11-13F Le Brun)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A611%E6%AF%9413F%E5%8B%92%E5%B8%83%E4%BC%A6%23) `1.1M 🔥` `NEW`
1. [王楚钦说不应该因比赛成绩嘲笑运动员](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E4%B8%8D%E5%BA%94%E8%AF%A5%E5%9B%A0%E6%AF%94%E8%B5%9B%E6%88%90%E7%BB%A9%E5%98%B2%E7%AC%91%E8%BF%90%E5%8A%A8%E5%91%98%23) `796.1K 🔥` `NEW`
1. [赏花踏青特色主题专列来了](https://s.weibo.com/weibo?q=%23%E8%B5%8F%E8%8A%B1%E8%B8%8F%E9%9D%92%E7%89%B9%E8%89%B2%E4%B8%BB%E9%A2%98%E4%B8%93%E5%88%97%E6%9D%A5%E4%BA%86%23) `655.3K 🔥` `NEW`
1. [代斯票数](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%96%AF%E7%A5%A8%E6%95%B0%23) `552.8K 🔥` `NEW`
1. [阚清子 尊重游戏规则](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%20%E5%B0%8A%E9%87%8D%E6%B8%B8%E6%88%8F%E8%A7%84%E5%88%99%23) `401.0K 🔥` `NEW`
1. [我的妈耶又笑又哭的](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%A6%88%E8%80%B6%E5%8F%88%E7%AC%91%E5%8F%88%E5%93%AD%E7%9A%84%23) `393.9K 🔥` `NEW`
1. [阚清子唱哭了](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%94%B1%E5%93%AD%E4%BA%86%23) `322.3K 🔥` `NEW`
1. [代斯跳舞 女团味](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%96%AF%E8%B7%B3%E8%88%9E%20%E5%A5%B3%E5%9B%A2%E5%91%B3%23) `319.1K 🔥` `NEW`
1. [温峥嵘 二重唱](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%20%E4%BA%8C%E9%87%8D%E5%94%B1%23) `317.8K 🔥` `NEW`
1. [孙怡 垫音](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E5%9E%AB%E9%9F%B3%23) `315.6K 🔥` `NEW`
1. [狼队零封AG晋级决赛 (Wolves advance to the finals with a clean sheet against AG)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E9%9B%B6%E5%B0%81AG%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `315.5K 🔥` `NEW`
1. [万千惠 实力派](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%20%E5%AE%9E%E5%8A%9B%E6%B4%BE%23) `299.9K 🔥` `NEW`
1. [伊媒称美军试图救出遭击落战机飞行员](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%AA%92%E7%A7%B0%E7%BE%8E%E5%86%9B%E8%AF%95%E5%9B%BE%E6%95%91%E5%87%BA%E9%81%AD%E5%87%BB%E8%90%BD%E6%88%98%E6%9C%BA%E9%A3%9E%E8%A1%8C%E5%91%98%23) `283.8K 🔥` `NEW`
1. [孙怡 好美的洋娃娃](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E5%A5%BD%E7%BE%8E%E7%9A%84%E6%B4%8B%E5%A8%83%E5%A8%83%23) `266.0K 🔥` `NEW`
1. [狼队十年五进春决](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%8D%81%E5%B9%B4%E4%BA%94%E8%BF%9B%E6%98%A5%E5%86%B3%23) `160.4K 🔥` `NEW`
1. [这波时团应援给到夯](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%B3%A2%E6%97%B6%E5%9B%A2%E5%BA%94%E6%8F%B4%E7%BB%99%E5%88%B0%E5%A4%AF%23) `158.8K 🔥` `NEW`
1. [兰州大学惊现虐猫房车](https://s.weibo.com/weibo?q=%23%E5%85%B0%E5%B7%9E%E5%A4%A7%E5%AD%A6%E6%83%8A%E7%8E%B0%E8%99%90%E7%8C%AB%E6%88%BF%E8%BD%A6%23) `158.6K 🔥` `NEW`
1. [我许可](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%AE%B8%E5%8F%AF%23) `133.3K 🔥` `NEW`
1. [王楚钦黄牌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%BB%84%E7%89%8C%23) `118.0K 🔥` `NEW`
1. [在图书馆被要联系方式了](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%9B%BE%E4%B9%A6%E9%A6%86%E8%A2%AB%E8%A6%81%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F%E4%BA%86%23) `99.8K 🔥` `NEW`
1. [邱鼎杰直播 (Qiu Dingjie live broadcast)](https://s.weibo.com/weibo?q=%23%E9%82%B1%E9%BC%8E%E6%9D%B0%E7%9B%B4%E6%92%AD%23) `96.3K 🔥` `NEW`
1. [齐思钧吊威亚出场](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%80%9D%E9%92%A7%E5%90%8A%E5%A8%81%E4%BA%9A%E5%87%BA%E5%9C%BA%23) `88.2K 🔥` `NEW`
1. [郭焱说王楚钦太牛了](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%84%B1%E8%AF%B4%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A4%AA%E7%89%9B%E4%BA%86%23) `87.8K 🔥` `NEW`
1. [赵今麦又进循环了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E5%8F%88%E8%BF%9B%E5%BE%AA%E7%8E%AF%E4%BA%86%23) `84.7K 🔥` `NEW`
1. [旅游拍照三个动作就够了](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E6%8B%8D%E7%85%A7%E4%B8%89%E4%B8%AA%E5%8A%A8%E4%BD%9C%E5%B0%B1%E5%A4%9F%E4%BA%86%23) `83.1K 🔥` `NEW`
1. [王楚钦晋级八强](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%99%8B%E7%BA%A7%E5%85%AB%E5%BC%BA%23) `83.0K 🔥` `NEW`
1. [斗罗2双强cp越看越带感](https://s.weibo.com/weibo?q=%23%E6%96%97%E7%BD%972%E5%8F%8C%E5%BC%BAcp%E8%B6%8A%E7%9C%8B%E8%B6%8A%E5%B8%A6%E6%84%9F%23) `78.2K 🔥` `NEW`
1. [当你过午不食六个月](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E8%BF%87%E5%8D%88%E4%B8%8D%E9%A3%9F%E5%85%AD%E4%B8%AA%E6%9C%88%23) `393.9K 🔥` `+182%`
1. [乘风初舞台直播](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E5%88%9D%E8%88%9E%E5%8F%B0%E7%9B%B4%E6%92%AD%23) `321.0K 🔥` `+30%`
1. [AG对战狼队](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98%E7%8B%BC%E9%98%9F%23) `318.5K 🔥` `+33%`
1. [上海夫妇被假将军女儿骗走近半亿 (Shanghai couple was defrauded of nearly half a million yuan by fake general’s daughter)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A4%AB%E5%A6%87%E8%A2%AB%E5%81%87%E5%B0%86%E5%86%9B%E5%A5%B3%E5%84%BF%E9%AA%97%E8%B5%B0%E8%BF%91%E5%8D%8A%E4%BA%BF%23) `266.5K 🔥` `+32%`
1. [张凌赫因为帅被同学偷拍](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%A0%E4%B8%BA%E5%B8%85%E8%A2%AB%E5%90%8C%E5%AD%A6%E5%81%B7%E6%8B%8D%23) `263.3K 🔥` `+23%`
1. [男子发私照让豆包测评身材被封号](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8F%91%E7%A7%81%E7%85%A7%E8%AE%A9%E8%B1%86%E5%8C%85%E6%B5%8B%E8%AF%84%E8%BA%AB%E6%9D%90%E8%A2%AB%E5%B0%81%E5%8F%B7%23) `256.8K 🔥` `+27%`
1. [工信部紧急提醒苹果用户](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BF%A1%E9%83%A8%E7%B4%A7%E6%80%A5%E6%8F%90%E9%86%92%E8%8B%B9%E6%9E%9C%E7%94%A8%E6%88%B7%23) `365.4K 🔥`
1. [李马克解约退团 (Mark Li terminates contract and quits group)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A9%AC%E5%85%8B%E8%A7%A3%E7%BA%A6%E9%80%80%E5%9B%A2%23) `164.3K 🔥`
1. [医保卡只能本人使用](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E4%BF%9D%E5%8D%A1%E5%8F%AA%E8%83%BD%E6%9C%AC%E4%BA%BA%E4%BD%BF%E7%94%A8%23) `107.9K 🔥`
1. [环球影城偶遇黄磊二女儿](https://s.weibo.com/weibo?q=%23%E7%8E%AF%E7%90%83%E5%BD%B1%E5%9F%8E%E5%81%B6%E9%81%87%E9%BB%84%E7%A3%8A%E4%BA%8C%E5%A5%B3%E5%84%BF%23) `106.4K 🔥`
1. [优思益称无力售后 (Yousiyi says it is unable to provide after-sales service)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E7%A7%B0%E6%97%A0%E5%8A%9B%E5%94%AE%E5%90%8E%23) `447.0K 🔥` `-43%`
1. [马兴瑞被查 (Ma Xingrui was investigated)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%B4%E7%91%9E%E8%A2%AB%E6%9F%A5%23) `322.6K 🔥` `-71%`
1. [周杰伦演唱会 (Jay Chou concert)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `125.3K 🔥` `-38%`
1. [优思益发布海外工厂情况声明 (Unisei releases statement on overseas factory conditions)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E5%8F%91%E5%B8%83%E6%B5%B7%E5%A4%96%E5%B7%A5%E5%8E%82%E6%83%85%E5%86%B5%E5%A3%B0%E6%98%8E%23) `120.2K 🔥` `-41%`
1. [王橹杰画的咴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%94%BB%E7%9A%84%E5%92%B4%23) `116.7K 🔥` `-42%`
1. [疑似李马克退团的原因](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%9D%8E%E9%A9%AC%E5%85%8B%E9%80%80%E5%9B%A2%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `113.5K 🔥` `-44%`
1. [王俊凯直播国风造型](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%9B%B4%E6%92%AD%E5%9B%BD%E9%A3%8E%E9%80%A0%E5%9E%8B%23) `106.5K 🔥` `-46%`
1. [17岁小伙体内藏了根十多年的缝衣针](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%B0%8F%E4%BC%99%E4%BD%93%E5%86%85%E8%97%8F%E4%BA%86%E6%A0%B9%E5%8D%81%E5%A4%9A%E5%B9%B4%E7%9A%84%E7%BC%9D%E8%A1%A3%E9%92%88%23) `103.5K 🔥` `-39%`
1. [女子不愿被男消防员搀扶5人抬下山 (The woman refused to be carried down the mountain by 5 people, helped by male firefighters.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%8D%E6%84%BF%E8%A2%AB%E7%94%B7%E6%B6%88%E9%98%B2%E5%91%98%E6%90%80%E6%89%B65%E4%BA%BA%E6%8A%AC%E4%B8%8B%E5%B1%B1%23) `86.6K 🔥` `-57%`
1. [王楚钦vsF勒布伦](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vsF%E5%8B%92%E5%B8%83%E4%BC%A6%23) `79.6K 🔥` `-85%`
1. [男子卖玩具枪被关279天获国赔](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8D%96%E7%8E%A9%E5%85%B7%E6%9E%AA%E8%A2%AB%E5%85%B3279%E5%A4%A9%E8%8E%B7%E5%9B%BD%E8%B5%94%23) `79.6K 🔥` `-70%`
1. [时代少年团物料重新上传 (Times Youth League materials re-uploaded)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%89%A9%E6%96%99%E9%87%8D%E6%96%B0%E4%B8%8A%E4%BC%A0%23) `79.0K 🔥` `-30%`
1. [韩国遭围殴致死导演儿子目睹全程](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%81%AD%E5%9B%B4%E6%AE%B4%E8%87%B4%E6%AD%BB%E5%AF%BC%E6%BC%94%E5%84%BF%E5%AD%90%E7%9B%AE%E7%9D%B9%E5%85%A8%E7%A8%8B%23) `77.3K 🔥` `-77%`

Updated at 2026-04-03 21:46:14

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
