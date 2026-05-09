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

1. [太空快递跑出中国加速度 (Space express runs out of China and accelerates)](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E7%A9%BA%E5%BF%AB%E9%80%92%E8%B7%91%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `1.2M 🔥` `NEW`
1. [华境S上市15万级标配华为乾崑](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%A2%83S%E4%B8%8A%E5%B8%8215%E4%B8%87%E7%BA%A7%E6%A0%87%E9%85%8D%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%23) `1.2M 🔥` `NEW`
1. [怪不得虫子总围着头顶飞](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E8%99%AB%E5%AD%90%E6%80%BB%E5%9B%B4%E7%9D%80%E5%A4%B4%E9%A1%B6%E9%A3%9E%23) `1.1M 🔥` `NEW`
1. [建功立邺到此莫愁](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E5%8A%9F%E7%AB%8B%E9%82%BA%E5%88%B0%E6%AD%A4%E8%8E%AB%E6%84%81%23) `861.4K 🔥` `NEW`
1. [浪姐48来了](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%9048%E6%9D%A5%E4%BA%86%23) `858.9K 🔥` `NEW`
1. [首尔偶遇田曦薇](https://s.weibo.com/weibo?q=%23%E9%A6%96%E5%B0%94%E5%81%B6%E9%81%87%E7%94%B0%E6%9B%A6%E8%96%87%23) `500.0K 🔥` `NEW`
1. [李小冉方否认与淘宝合作](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%96%B9%E5%90%A6%E8%AE%A4%E4%B8%8E%E6%B7%98%E5%AE%9D%E5%90%88%E4%BD%9C%23) `469.5K 🔥` `NEW`
1. [香港富豪孙女被绑架案细节披露](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%AF%8C%E8%B1%AA%E5%AD%99%E5%A5%B3%E8%A2%AB%E7%BB%91%E6%9E%B6%E6%A1%88%E7%BB%86%E8%8A%82%E6%8A%AB%E9%9C%B2%23) `437.9K 🔥` `NEW`
1. [美国女子做特殊癖好服务致对方身亡](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%81%9A%E7%89%B9%E6%AE%8A%E7%99%96%E5%A5%BD%E6%9C%8D%E5%8A%A1%E8%87%B4%E5%AF%B9%E6%96%B9%E8%BA%AB%E4%BA%A1%23) `430.3K 🔥` `NEW`
1. [夸克TV崩了](https://s.weibo.com/weibo?q=%23%E5%A4%B8%E5%85%8BTV%E5%B4%A9%E4%BA%86%23) `423.4K 🔥` `NEW`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `414.8K 🔥` `NEW`
1. [同济大学学术造假事件全揭秘](https://s.weibo.com/weibo?q=%23%E5%90%8C%E6%B5%8E%E5%A4%A7%E5%AD%A6%E5%AD%A6%E6%9C%AF%E9%80%A0%E5%81%87%E4%BA%8B%E4%BB%B6%E5%85%A8%E6%8F%AD%E7%A7%98%23) `411.1K 🔥` `NEW`
1. [曝汪峰森林北分手](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B1%AA%E5%B3%B0%E6%A3%AE%E6%9E%97%E5%8C%97%E5%88%86%E6%89%8B%23) `396.9K 🔥` `NEW`
1. [国乒女团晋级决赛](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `394.3K 🔥` `NEW`
1. [遭仅退款榴莲店询单量暴涨数百倍](https://s.weibo.com/weibo?q=%23%E9%81%AD%E4%BB%85%E9%80%80%E6%AC%BE%E6%A6%B4%E8%8E%B2%E5%BA%97%E8%AF%A2%E5%8D%95%E9%87%8F%E6%9A%B4%E6%B6%A8%E6%95%B0%E7%99%BE%E5%80%8D%23) `336.4K 🔥` `NEW`
1. [安倍晋三遗孀陪赖清德跪日本人](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%80%8D%E6%99%8B%E4%B8%89%E9%81%97%E5%AD%80%E9%99%AA%E8%B5%96%E6%B8%85%E5%BE%B7%E8%B7%AA%E6%97%A5%E6%9C%AC%E4%BA%BA%23) `218.4K 🔥` `NEW`
1. [张凌赫直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9B%B4%E6%92%AD%23) `204.9K 🔥` `NEW`
1. [抗癌博主杨小龙的洒脱讣告看哭网友](https://s.weibo.com/weibo?q=%23%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E6%9D%A8%E5%B0%8F%E9%BE%99%E7%9A%84%E6%B4%92%E8%84%B1%E8%AE%A3%E5%91%8A%E7%9C%8B%E5%93%AD%E7%BD%91%E5%8F%8B%23) `193.5K 🔥` `NEW`
1. [周深五月天双厨狂喜](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E4%BA%94%E6%9C%88%E5%A4%A9%E5%8F%8C%E5%8E%A8%E7%8B%82%E5%96%9C%23) `183.8K 🔥` `NEW`
1. [中国女团vs罗马尼亚](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%9B%A2vs%E7%BD%97%E9%A9%AC%E5%B0%BC%E4%BA%9A%23) `182.7K 🔥` `NEW`
1. [全民担当苏超守门员 (Everyone is the goalkeeper of the Scottish Premiership)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%B0%91%E6%8B%85%E5%BD%93%E8%8B%8F%E8%B6%85%E5%AE%88%E9%97%A8%E5%91%98%23) `176.2K 🔥` `NEW`
1. [医药代表不能卖药了](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E8%8D%AF%E4%BB%A3%E8%A1%A8%E4%B8%8D%E8%83%BD%E5%8D%96%E8%8D%AF%E4%BA%86%23) `163.1K 🔥` `NEW`
1. [广东男篮vs北京男篮](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E7%94%B7%E7%AF%AEvs%E5%8C%97%E4%BA%AC%E7%94%B7%E7%AF%AE%23) `153.1K 🔥` `NEW`
1. [南通vs南京](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%80%9Avs%E5%8D%97%E4%BA%AC%23) `152.3K 🔥` `NEW`
1. [王菲主角录了5个半小时](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E4%B8%BB%E8%A7%92%E5%BD%95%E4%BA%865%E4%B8%AA%E5%8D%8A%E5%B0%8F%E6%97%B6%23) `142.6K 🔥` `NEW`
1. [OPPO道歉网友为何不埋单](https://s.weibo.com/weibo?q=%23OPPO%E9%81%93%E6%AD%89%E7%BD%91%E5%8F%8B%E4%B8%BA%E4%BD%95%E4%B8%8D%E5%9F%8B%E5%8D%95%23) `133.3K 🔥` `NEW`
1. [跑男收视率 浪姐没播](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%94%B6%E8%A7%86%E7%8E%87%20%E6%B5%AA%E5%A7%90%E6%B2%A1%E6%92%AD%23) `2.1M 🔥` `+1120%`
1. [关晓彤终于遇到了有身高差的男主](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%BB%88%E4%BA%8E%E9%81%87%E5%88%B0%E4%BA%86%E6%9C%89%E8%BA%AB%E9%AB%98%E5%B7%AE%E7%9A%84%E7%94%B7%E4%B8%BB%23) `1.2M 🔥` `+258%`
1. [伦敦世乒赛半决赛](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `881.7K 🔥` `+165%`
1. [显微镜下的辣条](https://s.weibo.com/weibo?q=%23%E6%98%BE%E5%BE%AE%E9%95%9C%E4%B8%8B%E7%9A%84%E8%BE%A3%E6%9D%A1%23) `804.9K 🔥` `+308%`
1. [女儿的100个橡皮 (My daughter’s 100 erasers)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E7%9A%84100%E4%B8%AA%E6%A9%A1%E7%9A%AE%23) `662.7K 🔥` `+27%`
1. [疑似加到了孙怡本人的QQ](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%8A%A0%E5%88%B0%E4%BA%86%E5%AD%99%E6%80%A1%E6%9C%AC%E4%BA%BA%E7%9A%84QQ%23) `499.5K 🔥` `+51%`
1. [尼坤发福](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%9D%A4%E5%8F%91%E7%A6%8F%23) `488.5K 🔥` `+46%`
1. [一家三口候车室吃东西垃圾扔满地](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%80%99%E8%BD%A6%E5%AE%A4%E5%90%83%E4%B8%9C%E8%A5%BF%E5%9E%83%E5%9C%BE%E6%89%94%E6%BB%A1%E5%9C%B0%23) `252.5K 🔥` `+37%`
1. [AG对战EDGM](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98EDGM%23) `247.2K 🔥` `+85%`
1. [越来越理解什么叫事缓则圆](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E6%9D%A5%E8%B6%8A%E7%90%86%E8%A7%A3%E4%BB%80%E4%B9%88%E5%8F%AB%E4%BA%8B%E7%BC%93%E5%88%99%E5%9C%86%23) `491.6K 🔥`
1. [给阿嬷的情书票房破亿](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%A5%A8%E6%88%BF%E7%A0%B4%E4%BA%BF%23) `381.6K 🔥`
1. [李嘉格收入稳定后才选择离婚](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E6%A0%BC%E6%94%B6%E5%85%A5%E7%A8%B3%E5%AE%9A%E5%90%8E%E6%89%8D%E9%80%89%E6%8B%A9%E7%A6%BB%E5%A9%9A%23) `341.5K 🔥`
1. [女子打水光针后吃小龙虾满脸肉芽肿 (Woman's face is covered with granulomas after eating crayfish after taking water-light injections)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%93%E6%B0%B4%E5%85%89%E9%92%88%E5%90%8E%E5%90%83%E5%B0%8F%E9%BE%99%E8%99%BE%E6%BB%A1%E8%84%B8%E8%82%89%E8%8A%BD%E8%82%BF%23) `331.8K 🔥`
1. [美目击者称UFO生物身高不足1.2米 (American eyewitnesses said the UFO creature was less than 1.2 meters tall)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%9B%AE%E5%87%BB%E8%80%85%E7%A7%B0UFO%E7%94%9F%E7%89%A9%E8%BA%AB%E9%AB%98%E4%B8%8D%E8%B6%B31.2%E7%B1%B3%23) `221.9K 🔥`
1. [俄罗斯红场阅兵全场高呼乌拉](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E7%BA%A2%E5%9C%BA%E9%98%85%E5%85%B5%E5%85%A8%E5%9C%BA%E9%AB%98%E5%91%BC%E4%B9%8C%E6%8B%89%23) `137.0K 🔥`
1. [国际足联急了 (FIFA is anxious)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E6%80%A5%E4%BA%86%23) `1.4M 🔥` `-37%`
1. [赖清德跪拜日本殖民者 (Lai Ching-te knelt down to worship the Japanese colonizers)](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%B8%85%E5%BE%B7%E8%B7%AA%E6%8B%9C%E6%97%A5%E6%9C%AC%E6%AE%96%E6%B0%91%E8%80%85%23) `505.5K 🔥` `-50%`
1. [张凌赫害怕大家看不懂](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%AE%B3%E6%80%95%E5%A4%A7%E5%AE%B6%E7%9C%8B%E4%B8%8D%E6%87%82%23) `259.6K 🔥` `-22%`
1. [王楚钦在训练场得知国乒拿下韩国 (Wang Chuqin learned at the training ground that the national table tennis team had won South Korea)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9C%A8%E8%AE%AD%E7%BB%83%E5%9C%BA%E5%BE%97%E7%9F%A5%E5%9B%BD%E4%B9%92%E6%8B%BF%E4%B8%8B%E9%9F%A9%E5%9B%BD%23) `213.0K 🔥` `-36%`
1. [曝王一博将进组刺客](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%B0%86%E8%BF%9B%E7%BB%84%E5%88%BA%E5%AE%A2%23) `183.5K 🔥` `-43%`
1. [给阿嬷的情书剧组穷成这样](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E5%89%A7%E7%BB%84%E7%A9%B7%E6%88%90%E8%BF%99%E6%A0%B7%23) `181.1K 🔥` `-46%`
1. [马嘉祺宋亚轩回中戏答辩了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%9E%E4%B8%AD%E6%88%8F%E7%AD%94%E8%BE%A9%E4%BA%86%23) `176.7K 🔥` `-27%`
1. [麦当劳铲子](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3%E9%93%B2%E5%AD%90%23) `175.7K 🔥` `-59%`
1. [世界杯转播权 (World Cup broadcast rights)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `164.3K 🔥` `-50%`
1. [奔跑吧回应收视率低 (Run Bar responds to low ratings)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E5%9B%9E%E5%BA%94%E6%94%B6%E8%A7%86%E7%8E%87%E4%BD%8E%23) `162.8K 🔥` `-51%`
1. [宋亚轩 国乐无双](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%20%E5%9B%BD%E4%B9%90%E6%97%A0%E5%8F%8C%23) `162.2K 🔥` `-23%`

Updated at 2026-05-09 21:42:36

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
