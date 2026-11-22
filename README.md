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

1. [樊振东1比3约内斯库](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C1%E6%AF%943%E7%BA%A6%E5%86%85%E6%96%AF%E5%BA%93%23) `505.2K 🔥` `NEW`
1. [青稚夺冠后直播热度](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E5%A4%BA%E5%86%A0%E5%90%8E%E7%9B%B4%E6%92%AD%E7%83%AD%E5%BA%A6%23) `189.2K 🔥` `NEW`
1. [福建未集中开展建材市场专项检查](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E6%9C%AA%E9%9B%86%E4%B8%AD%E5%BC%80%E5%B1%95%E5%BB%BA%E6%9D%90%E5%B8%82%E5%9C%BA%E4%B8%93%E9%A1%B9%E6%A3%80%E6%9F%A5%23) `152.7K 🔥` `NEW`
1. [杜塞尔多夫3比1萨尔布吕肯](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB3%E6%AF%941%E8%90%A8%E5%B0%94%E5%B8%83%E5%90%95%E8%82%AF%23) `96.5K 🔥` `NEW`
1. [弗朗西斯卡太熟樊振东球路](https://s.weibo.com/weibo?q=%23%E5%BC%97%E6%9C%97%E8%A5%BF%E6%96%AF%E5%8D%A1%E5%A4%AA%E7%86%9F%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%90%83%E8%B7%AF%23) `95.9K 🔥` `NEW`
1. [利物浦4比0曼联](https://s.weibo.com/weibo?q=%23%E5%88%A9%E7%89%A9%E6%B5%A64%E6%AF%940%E6%9B%BC%E8%81%94%23) `75.6K 🔥` `NEW`
1. [青稚直播30万人](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E7%9B%B4%E6%92%AD30%E4%B8%87%E4%BA%BA%23) `53.9K 🔥` `NEW`
1. [阿尔卡拉斯首夺总决赛冠军](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%B0%94%E5%8D%A1%E6%8B%89%E6%96%AF%E9%A6%96%E5%A4%BA%E6%80%BB%E5%86%B3%E8%B5%9B%E5%86%A0%E5%86%9B%23) `53.7K 🔥` `NEW`
1. [医生建议冬天减肥可以多吃点火锅](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%BB%BA%E8%AE%AE%E5%86%AC%E5%A4%A9%E5%87%8F%E8%82%A5%E5%8F%AF%E4%BB%A5%E5%A4%9A%E5%90%83%E7%82%B9%E7%81%AB%E9%94%85%23) `53.1K 🔥` `NEW`
1. [央视主持人被新疆芝麻糖粘掉门牙](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E4%B8%BB%E6%8C%81%E4%BA%BA%E8%A2%AB%E6%96%B0%E7%96%86%E8%8A%9D%E9%BA%BB%E7%B3%96%E7%B2%98%E6%8E%89%E9%97%A8%E7%89%99%23) `52.9K 🔥` `NEW`
1. [弗朗西斯卡逗笑樊振东](https://s.weibo.com/weibo?q=%23%E5%BC%97%E6%9C%97%E8%A5%BF%E6%96%AF%E5%8D%A1%E9%80%97%E7%AC%91%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `52.7K 🔥` `NEW`
1. [波切蒂诺 马奎尔](https://s.weibo.com/weibo?q=%23%E6%B3%A2%E5%88%87%E8%92%82%E8%AF%BA%20%E9%A9%AC%E5%A5%8E%E5%B0%94%23) `46.0K 🔥` `NEW`
1. [亚太最具影响力青年男性入选名单](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E5%A4%AA%E6%9C%80%E5%85%B7%E5%BD%B1%E5%93%8D%E5%8A%9B%E9%9D%92%E5%B9%B4%E7%94%B7%E6%80%A7%E5%85%A5%E9%80%89%E5%90%8D%E5%8D%95%23) `45.8K 🔥` `NEW`
1. [汇天A868飞行汽车试飞成功](https://s.weibo.com/weibo?q=%23%E6%B1%87%E5%A4%A9A868%E9%A3%9E%E8%A1%8C%E6%B1%BD%E8%BD%A6%E8%AF%95%E9%A3%9E%E6%88%90%E5%8A%9F%23) `43.7K 🔥` `NEW`
1. [当地回应主播私闯果园带货](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%9C%B0%E5%9B%9E%E5%BA%94%E4%B8%BB%E6%92%AD%E7%A7%81%E9%97%AF%E6%9E%9C%E5%9B%AD%E5%B8%A6%E8%B4%A7%23) `43.6K 🔥` `NEW`
1. [亚洲市场集体打响保卫战](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%B4%B2%E5%B8%82%E5%9C%BA%E9%9B%86%E4%BD%93%E6%89%93%E5%93%8D%E4%BF%9D%E5%8D%AB%E6%88%98%23) `43.6K 🔥` `NEW`
1. [马斯克悄悄在菲律宾开发岛屿](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%82%84%E6%82%84%E5%9C%A8%E8%8F%B2%E5%BE%8B%E5%AE%BE%E5%BC%80%E5%8F%91%E5%B2%9B%E5%B1%BF%23) `43.5K 🔥` `NEW`
1. [樊振东拥抱萨尔老爷爷](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%8B%A5%E6%8A%B1%E8%90%A8%E5%B0%94%E8%80%81%E7%88%B7%E7%88%B7%23) `43.5K 🔥` `NEW`
1. [萨尔布吕肯vs杜塞尔多夫](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B0%94%E5%B8%83%E5%90%95%E8%82%AFvs%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB%23) `43.4K 🔥` `NEW`
1. [2026亚太U35行业先锋领袖](https://s.weibo.com/weibo?q=%232026%E4%BA%9A%E5%A4%AAU35%E8%A1%8C%E4%B8%9A%E5%85%88%E9%94%8B%E9%A2%86%E8%A2%96%23) `43.4K 🔥` `NEW`
1. [曼联双红会失利](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E8%81%94%E5%8F%8C%E7%BA%A2%E4%BC%9A%E5%A4%B1%E5%88%A9%23) `43.4K 🔥` `NEW`
1. [科内利亚诺vs米兰](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%86%85%E5%88%A9%E4%BA%9A%E8%AF%BAvs%E7%B1%B3%E5%85%B0%23) `43.3K 🔥` `NEW`
1. [2026版全球高血压实践指南](https://s.weibo.com/weibo?q=%232026%E7%89%88%E5%85%A8%E7%90%83%E9%AB%98%E8%A1%80%E5%8E%8B%E5%AE%9E%E8%B7%B5%E6%8C%87%E5%8D%97%23) `43.3K 🔥` `NEW`
1. [赵本山女儿和老公两地分居](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9C%AC%E5%B1%B1%E5%A5%B3%E5%84%BF%E5%92%8C%E8%80%81%E5%85%AC%E4%B8%A4%E5%9C%B0%E5%88%86%E5%B1%85%23) `141.5K 🔥` `+26%`
1. [私闯果园糟蹋水果主播下架所有视频](https://s.weibo.com/weibo?q=%23%E7%A7%81%E9%97%AF%E6%9E%9C%E5%9B%AD%E7%B3%9F%E8%B9%8B%E6%B0%B4%E6%9E%9C%E4%B8%BB%E6%92%AD%E4%B8%8B%E6%9E%B6%E6%89%80%E6%9C%89%E8%A7%86%E9%A2%91%23) `231.7K 🔥`
1. [朱一龙赵丽颖顶峰相见](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%A1%B6%E5%B3%B0%E7%9B%B8%E8%A7%81%23) `107.1K 🔥`
1. [人类的智商是被孩子逼到迭代的](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E7%9A%84%E6%99%BA%E5%95%86%E6%98%AF%E8%A2%AB%E5%AD%A9%E5%AD%90%E9%80%BC%E5%88%B0%E8%BF%AD%E4%BB%A3%E7%9A%84%23) `67.2K 🔥`
1. [央视主持人录节目假牙丢了](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E4%B8%BB%E6%8C%81%E4%BA%BA%E5%BD%95%E8%8A%82%E7%9B%AE%E5%81%87%E7%89%99%E4%B8%A2%E4%BA%86%23) `371.8K 🔥` `-24%`
1. [诗词里的千年文脉](https://s.weibo.com/weibo?q=%23%E8%AF%97%E8%AF%8D%E9%87%8C%E7%9A%84%E5%8D%83%E5%B9%B4%E6%96%87%E8%84%89%23) `284.2K 🔥` `-21%`
1. [中戏同学成顶流男演员却当NPC](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E5%90%8C%E5%AD%A6%E6%88%90%E9%A1%B6%E6%B5%81%E7%94%B7%E6%BC%94%E5%91%98%E5%8D%B4%E5%BD%93NPC%23) `153.6K 🔥` `-49%`
1. [2026亚太最具影响力青年男性TOP100](https://s.weibo.com/weibo?q=%232026%E4%BA%9A%E5%A4%AA%E6%9C%80%E5%85%B7%E5%BD%B1%E5%93%8D%E5%8A%9B%E9%9D%92%E5%B9%B4%E7%94%B7%E6%80%A7TOP100%23) `126.4K 🔥` `-58%`
1. [主播糟蹋千斤苹果仅赔6000元](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%92%AD%E7%B3%9F%E8%B9%8B%E5%8D%83%E6%96%A4%E8%8B%B9%E6%9E%9C%E4%BB%85%E8%B5%946000%E5%85%83%23) `123.5K 🔥` `-69%`
1. [血压这个区间不再视作接近正常](https://s.weibo.com/weibo?q=%23%E8%A1%80%E5%8E%8B%E8%BF%99%E4%B8%AA%E5%8C%BA%E9%97%B4%E4%B8%8D%E5%86%8D%E8%A7%86%E4%BD%9C%E6%8E%A5%E8%BF%91%E6%AD%A3%E5%B8%B8%23) `101.4K 🔥` `-32%`
1. [特朗普发APEC合照配文GOAT](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%91APEC%E5%90%88%E7%85%A7%E9%85%8D%E6%96%87GOAT%23) `91.1K 🔥` `-70%`
1. [白小纯被换下童家堡吃鸡](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%A2%AB%E6%8D%A2%E4%B8%8B%E7%AB%A5%E5%AE%B6%E5%A0%A1%E5%90%83%E9%B8%A1%23) `73.7K 🔥` `-26%`
1. [成毅白龙挂镜头太震撼了](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%99%BD%E9%BE%99%E6%8C%82%E9%95%9C%E5%A4%B4%E5%A4%AA%E9%9C%87%E6%92%BC%E4%BA%86%23) `73.4K 🔥` `-23%`
1. [女儿回应父亲交往母亲第三者的前妻](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E5%9B%9E%E5%BA%94%E7%88%B6%E4%BA%B2%E4%BA%A4%E5%BE%80%E6%AF%8D%E4%BA%B2%E7%AC%AC%E4%B8%89%E8%80%85%E7%9A%84%E5%89%8D%E5%A6%BB%23) `69.4K 🔥` `-62%`
1. [高校鸭子被撞死司机道歉](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%A0%A1%E9%B8%AD%E5%AD%90%E8%A2%AB%E6%92%9E%E6%AD%BB%E5%8F%B8%E6%9C%BA%E9%81%93%E6%AD%89%23) `54.2K 🔥` `-77%`
1. [A股迎来三大利好](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%BF%8E%E6%9D%A5%E4%B8%89%E5%A4%A7%E5%88%A9%E5%A5%BD%23) `52.7K 🔥` `-42%`
1. [樊振东德甲](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BE%B7%E7%94%B2%23) `52.5K 🔥` `-66%`
1. [孙芮后援会关站](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%8A%AE%E5%90%8E%E6%8F%B4%E4%BC%9A%E5%85%B3%E7%AB%99%23) `48.6K 🔥` `-84%`
1. [意大利博主每天给妈妈打电话](https://s.weibo.com/weibo?q=%23%E6%84%8F%E5%A4%A7%E5%88%A9%E5%8D%9A%E4%B8%BB%E6%AF%8F%E5%A4%A9%E7%BB%99%E5%A6%88%E5%A6%88%E6%89%93%E7%94%B5%E8%AF%9D%23) `44.2K 🔥` `-46%`
1. [孙颖莎入选亚太青年女性TOP100](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%85%A5%E9%80%89%E4%BA%9A%E5%A4%AA%E9%9D%92%E5%B9%B4%E5%A5%B3%E6%80%A7TOP100%23) `43.7K 🔥` `-49%`
1. [张元英被外网批抢liz的C位](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E8%A2%AB%E5%A4%96%E7%BD%91%E6%89%B9%E6%8A%A2liz%E7%9A%84C%E4%BD%8D%23) `43.6K 🔥` `-85%`
1. [PEL投票](https://s.weibo.com/weibo?q=%23PEL%E6%8A%95%E7%A5%A8%23) `43.6K 🔥` `-69%`
1. [文吉儿 一起长大的约定](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%20%E4%B8%80%E8%B5%B7%E9%95%BF%E5%A4%A7%E7%9A%84%E7%BA%A6%E5%AE%9A%23) `43.6K 🔥` `-49%`
1. [赵丽颖入选亚太最具影响力青年女性](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%85%A5%E9%80%89%E4%BA%9A%E5%A4%AA%E6%9C%80%E5%85%B7%E5%BD%B1%E5%93%8D%E5%8A%9B%E9%9D%92%E5%B9%B4%E5%A5%B3%E6%80%A7%23) `43.5K 🔥` `-59%`
1. [韩国网友感谢中国](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%23) `43.5K 🔥` `-77%`
1. [华鼎奖](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E9%BC%8E%E5%A5%96%23) `43.4K 🔥` `-63%`
1. [童家堡 白小纯身体不适](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E5%AE%B6%E5%A0%A1%20%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%23) `43.3K 🔥` `-65%`
1. [印度情侣遭8名少年殴打](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%83%85%E4%BE%A3%E9%81%AD8%E5%90%8D%E5%B0%91%E5%B9%B4%E6%AE%B4%E6%89%93%23) `43.3K 🔥` `-64%`

Updated at 2026-11-23 06:41:49

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
