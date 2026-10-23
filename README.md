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

1. [刘亦菲压轴](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%8E%8B%E8%BD%B4%23) `8.0M 🔥` `NEW`
1. [国际金价暴跌因获利了结](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E9%87%91%E4%BB%B7%E6%9A%B4%E8%B7%8C%E5%9B%A0%E8%8E%B7%E5%88%A9%E4%BA%86%E7%BB%93%23) `1.1M 🔥` `NEW`
1. [iPhoneDuo 华为](https://s.weibo.com/weibo?q=%23iPhoneDuo%20%E5%8D%8E%E4%B8%BA%23) `1.1M 🔥` `NEW`
1. [从消费数据看经济向好态势](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E6%B6%88%E8%B4%B9%E6%95%B0%E6%8D%AE%E7%9C%8B%E7%BB%8F%E6%B5%8E%E5%90%91%E5%A5%BD%E6%80%81%E5%8A%BF%23) `1.1M 🔥` `NEW`
1. [VOGUE红毯盛典 奔驰](https://s.weibo.com/weibo?q=%23VOGUE%E7%BA%A2%E6%AF%AF%E7%9B%9B%E5%85%B8%20%E5%A5%94%E9%A9%B0%23) `1.1M 🔥` `NEW`
1. [李昌钰发妻离世后与蒋霞萍频繁通信](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E5%8F%91%E5%A6%BB%E7%A6%BB%E4%B8%96%E5%90%8E%E4%B8%8E%E8%92%8B%E9%9C%9E%E8%90%8D%E9%A2%91%E7%B9%81%E9%80%9A%E4%BF%A1%23) `1.1M 🔥` `NEW`
1. [人一旦在有地铁的城市待久了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E5%9C%A8%E6%9C%89%E5%9C%B0%E9%93%81%E7%9A%84%E5%9F%8E%E5%B8%82%E5%BE%85%E4%B9%85%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [减缓人工智能应用就业替代影响](https://s.weibo.com/weibo?q=%23%E5%87%8F%E7%BC%93%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%BA%94%E7%94%A8%E5%B0%B1%E4%B8%9A%E6%9B%BF%E4%BB%A3%E5%BD%B1%E5%93%8D%23) `1.1M 🔥` `NEW`
1. [蕉内王一博五年依然温暖](https://s.weibo.com/weibo?q=%23%E8%95%89%E5%86%85%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%BA%94%E5%B9%B4%E4%BE%9D%E7%84%B6%E6%B8%A9%E6%9A%96%23) `1.1M 🔥` `NEW`
1. [普京称乌领导层想继续打那就打](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%A7%B0%E4%B9%8C%E9%A2%86%E5%AF%BC%E5%B1%82%E6%83%B3%E7%BB%A7%E7%BB%AD%E6%89%93%E9%82%A3%E5%B0%B1%E6%89%93%23) `1.1M 🔥` `NEW`
1. [孙颖莎蒙彼利埃冠军赛复出](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%92%99%E5%BD%BC%E5%88%A9%E5%9F%83%E5%86%A0%E5%86%9B%E8%B5%9B%E5%A4%8D%E5%87%BA%23) `1.1M 🔥` `NEW`
1. [密集赛程被指为王楚钦伤病退赛主因](https://s.weibo.com/weibo?q=%23%E5%AF%86%E9%9B%86%E8%B5%9B%E7%A8%8B%E8%A2%AB%E6%8C%87%E4%B8%BA%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%BC%A4%E7%97%85%E9%80%80%E8%B5%9B%E4%B8%BB%E5%9B%A0%23) `1.1M 🔥` `NEW`
1. [2岁坠亡男童父亲最新发声](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%9D%A0%E4%BA%A1%E7%94%B7%E7%AB%A5%E7%88%B6%E4%BA%B2%E6%9C%80%E6%96%B0%E5%8F%91%E5%A3%B0%23) `1.1M 🔥` `NEW`
1. [热巴蝴蝶飞走瞬间 列入内娱史册](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E8%9D%B4%E8%9D%B6%E9%A3%9E%E8%B5%B0%E7%9E%AC%E9%97%B4%20%E5%88%97%E5%85%A5%E5%86%85%E5%A8%B1%E5%8F%B2%E5%86%8C%23) `1.0M 🔥` `NEW`
1. [白鹿 神之九秒](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E7%A5%9E%E4%B9%8B%E4%B9%9D%E7%A7%92%23) `1.0M 🔥` `NEW`
1. [宝格丽认领](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%A0%BC%E4%B8%BD%E8%AE%A4%E9%A2%86%23) `1.0M 🔥` `NEW`
1. [国办发文减缓人工智能就业替代影响](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8A%9E%E5%8F%91%E6%96%87%E5%87%8F%E7%BC%93%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%B0%B1%E4%B8%9A%E6%9B%BF%E4%BB%A3%E5%BD%B1%E5%93%8D%23) `1.0M 🔥` `NEW`
1. [死了么后续干出编制了](https://s.weibo.com/weibo?q=%23%E6%AD%BB%E4%BA%86%E4%B9%88%E5%90%8E%E7%BB%AD%E5%B9%B2%E5%87%BA%E7%BC%96%E5%88%B6%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [迪丽热巴第二套](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AC%AC%E4%BA%8C%E5%A5%97%23) `1.0M 🔥` `NEW`
1. [多方回应熊猫血孕妇在医院胎死腹中](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E7%86%8A%E7%8C%AB%E8%A1%80%E5%AD%95%E5%A6%87%E5%9C%A8%E5%8C%BB%E9%99%A2%E8%83%8E%E6%AD%BB%E8%85%B9%E4%B8%AD%23) `1.0M 🔥` `NEW`
1. [13岁男生被同学打伤治疗已花600万](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E7%94%B7%E7%94%9F%E8%A2%AB%E5%90%8C%E5%AD%A6%E6%89%93%E4%BC%A4%E6%B2%BB%E7%96%97%E5%B7%B2%E8%8A%B1600%E4%B8%87%23) `1.0M 🔥` `NEW`
1. [孟子义白鹿谁都不敢站娜扎旁边](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%99%BD%E9%B9%BF%E8%B0%81%E9%83%BD%E4%B8%8D%E6%95%A2%E7%AB%99%E5%A8%9C%E6%89%8E%E6%97%81%E8%BE%B9%23) `1.0M 🔥` `NEW`
1. [刘亦菲眼睛怎么了](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%9C%BC%E7%9D%9B%E6%80%8E%E4%B9%88%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [何穗走秀猫天天头排鼓掌](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E8%B5%B0%E7%A7%80%E7%8C%AB%E5%A4%A9%E5%A4%A9%E5%A4%B4%E6%8E%92%E9%BC%93%E6%8E%8C%23) `1.0M 🔥` `NEW`
1. [张小斐闪光灯下抬手 神中之神](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E9%97%AA%E5%85%89%E7%81%AF%E4%B8%8B%E6%8A%AC%E6%89%8B%20%E7%A5%9E%E4%B8%AD%E4%B9%8B%E7%A5%9E%23) `1.0M 🔥` `NEW`
1. [与美国妻子离婚外卖员最初不知绿卡](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E7%BE%8E%E5%9B%BD%E5%A6%BB%E5%AD%90%E7%A6%BB%E5%A9%9A%E5%A4%96%E5%8D%96%E5%91%98%E6%9C%80%E5%88%9D%E4%B8%8D%E7%9F%A5%E7%BB%BF%E5%8D%A1%23) `1.0M 🔥` `NEW`
1. [欧阳娜娜这个转场太妙了](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E8%BF%99%E4%B8%AA%E8%BD%AC%E5%9C%BA%E5%A4%AA%E5%A6%99%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [迪丽热巴 毯神](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E6%AF%AF%E7%A5%9E%23) `1.0M 🔥` `NEW`
1. [尚公主首播反响](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E9%A6%96%E6%92%AD%E5%8F%8D%E5%93%8D%23) `1.0M 🔥` `NEW`
1. [男子带怀孕的鱼去宠物店道歉](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B8%A6%E6%80%80%E5%AD%95%E7%9A%84%E9%B1%BC%E5%8E%BB%E5%AE%A0%E7%89%A9%E5%BA%97%E9%81%93%E6%AD%89%23) `1.0M 🔥` `NEW`
1. [黄多多正式进圈](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E6%AD%A3%E5%BC%8F%E8%BF%9B%E5%9C%88%23) `1.0M 🔥` `NEW`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `1.0M 🔥` `NEW`
1. [35岁后女性要多练肌肉](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%90%8E%E5%A5%B3%E6%80%A7%E8%A6%81%E5%A4%9A%E7%BB%83%E8%82%8C%E8%82%89%23) `1.0M 🔥` `NEW`
1. [刘冲把人和礼服淋成这样](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E6%8A%8A%E4%BA%BA%E5%92%8C%E7%A4%BC%E6%9C%8D%E6%B7%8B%E6%88%90%E8%BF%99%E6%A0%B7%23) `1.0M 🔥` `NEW`
1. [VOGUE合影](https://s.weibo.com/weibo?q=%23VOGUE%E5%90%88%E5%BD%B1%23) `1.0M 🔥` `NEW`
1. [VOGUE内场](https://s.weibo.com/weibo?q=%23VOGUE%E5%86%85%E5%9C%BA%23) `1.0M 🔥` `NEW`
1. [重庆坠亡幼童母亲回应警方未立案](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%9D%A0%E4%BA%A1%E5%B9%BC%E7%AB%A5%E6%AF%8D%E4%BA%B2%E5%9B%9E%E5%BA%94%E8%AD%A6%E6%96%B9%E6%9C%AA%E7%AB%8B%E6%A1%88%23) `1.0M 🔥` `NEW`
1. [刘冲太会享受了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E5%A4%AA%E4%BC%9A%E4%BA%AB%E5%8F%97%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [iPhoneDuo办eSIM好难](https://s.weibo.com/weibo?q=%23iPhoneDuo%E5%8A%9EeSIM%E5%A5%BD%E9%9A%BE%23) `1.0M 🔥` `NEW`
1. [小学时裸睡是家人半夜脱的](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E6%97%B6%E8%A3%B8%E7%9D%A1%E6%98%AF%E5%AE%B6%E4%BA%BA%E5%8D%8A%E5%A4%9C%E8%84%B1%E7%9A%84%23) `1.0M 🔥` `NEW`
1. [曝华为Mate90连续多周国产旗舰销量第一](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%8E%E4%B8%BAMate90%E8%BF%9E%E7%BB%AD%E5%A4%9A%E5%91%A8%E5%9B%BD%E4%BA%A7%E6%97%97%E8%88%B0%E9%94%80%E9%87%8F%E7%AC%AC%E4%B8%80%23) `1.0M 🔥` `NEW`
1. [普京问乌克兰要将国民当消耗品吗](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E9%97%AE%E4%B9%8C%E5%85%8B%E5%85%B0%E8%A6%81%E5%B0%86%E5%9B%BD%E6%B0%91%E5%BD%93%E6%B6%88%E8%80%97%E5%93%81%E5%90%97%23) `1.0M 🔥` `NEW`
1. [Prada武汉见](https://s.weibo.com/weibo?q=%23Prada%E6%AD%A6%E6%B1%89%E8%A7%81%23) `1.0M 🔥` `NEW`
1. [最高法通报牟某虐待案细节](https://s.weibo.com/weibo?q=%23%E6%9C%80%E9%AB%98%E6%B3%95%E9%80%9A%E6%8A%A5%E7%89%9F%E6%9F%90%E8%99%90%E5%BE%85%E6%A1%88%E7%BB%86%E8%8A%82%23) `1.0M 🔥` `NEW`
1. [第五人格PerVade](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BCPerVade%23) `1.0M 🔥` `NEW`
1. [为何现在女生脱单这么难](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BD%95%E7%8E%B0%E5%9C%A8%E5%A5%B3%E7%94%9F%E8%84%B1%E5%8D%95%E8%BF%99%E4%B9%88%E9%9A%BE%23) `1.0M 🔥` `+383%`
1. [尚公主](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%23) `1.0M 🔥` `+599%`
1. [问界M9事故三连环站不住脚](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%E4%BA%8B%E6%95%85%E4%B8%89%E8%BF%9E%E7%8E%AF%E7%AB%99%E4%B8%8D%E4%BD%8F%E8%84%9A%23) `1.0M 🔥`
1. [李昌钰](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%23) `1.0M 🔥` `-25%`

Updated at 2026-10-23 22:55:16

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
