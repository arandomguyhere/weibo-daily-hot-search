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

1. [中方回应特朗普称访华不受影响 (China responds to Trump's statement that visit to China will not be affected)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%AE%BF%E5%8D%8E%E4%B8%8D%E5%8F%97%E5%BD%B1%E5%93%8D%23) `1.0M 🔥` `NEW`
1. [澳门经济财政司司长戴建业被免职](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E9%97%A8%E7%BB%8F%E6%B5%8E%E8%B4%A2%E6%94%BF%E5%8F%B8%E5%8F%B8%E9%95%BF%E6%88%B4%E5%BB%BA%E4%B8%9A%E8%A2%AB%E5%85%8D%E8%81%8C%23) `761.7K 🔥` `NEW`
1. [张豆豆崩溃大哭](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B1%86%E8%B1%86%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `346.3K 🔥` `NEW`
1. [北影节开幕式](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%BD%B1%E8%8A%82%E5%BC%80%E5%B9%95%E5%BC%8F%23) `238.2K 🔥` `NEW`
1. [华为PuraXMax](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXMax%23) `217.8K 🔥` `NEW`
1. [谢娜回应李小冉没法一起团建](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9B%9E%E5%BA%94%E6%9D%8E%E5%B0%8F%E5%86%89%E6%B2%A1%E6%B3%95%E4%B8%80%E8%B5%B7%E5%9B%A2%E5%BB%BA%23) `194.8K 🔥` `NEW`
1. [钟汉良回应没离过婚的女人不谈](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%B1%89%E8%89%AF%E5%9B%9E%E5%BA%94%E6%B2%A1%E7%A6%BB%E8%BF%87%E5%A9%9A%E7%9A%84%E5%A5%B3%E4%BA%BA%E4%B8%8D%E8%B0%88%23) `189.3K 🔥` `NEW`
1. [杀害网红罗大美主犯死前见亲属](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B3%E7%BD%91%E7%BA%A2%E7%BD%97%E5%A4%A7%E7%BE%8E%E4%B8%BB%E7%8A%AF%E6%AD%BB%E5%89%8D%E8%A7%81%E4%BA%B2%E5%B1%9E%23) `161.7K 🔥` `NEW`
1. [女子称遭强奸后嫌疑人被取保放出](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E9%81%AD%E5%BC%BA%E5%A5%B8%E5%90%8E%E5%AB%8C%E7%96%91%E4%BA%BA%E8%A2%AB%E5%8F%96%E4%BF%9D%E6%94%BE%E5%87%BA%23) `159.1K 🔥` `NEW`
1. [迪丽热巴荷叶边白裙](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%8D%B7%E5%8F%B6%E8%BE%B9%E7%99%BD%E8%A3%99%23) `138.9K 🔥` `NEW`
1. [AL战胜WE (AL beats WE)](https://s.weibo.com/weibo?q=%23AL%E6%88%98%E8%83%9CWE%23) `116.0K 🔥` `NEW`
1. [穆祉丞个人标签](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E4%B8%AA%E4%BA%BA%E6%A0%87%E7%AD%BE%23) `107.7K 🔥` `NEW`
1. [李小冉祝今晚乘风姐姐鸟巢团建开心](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%A5%9D%E4%BB%8A%E6%99%9A%E4%B9%98%E9%A3%8E%E5%A7%90%E5%A7%90%E9%B8%9F%E5%B7%A2%E5%9B%A2%E5%BB%BA%E5%BC%80%E5%BF%83%23) `106.6K 🔥` `NEW`
1. [K90Max玩游戏还是太权威了](https://s.weibo.com/weibo?q=%23K90Max%E7%8E%A9%E6%B8%B8%E6%88%8F%E8%BF%98%E6%98%AF%E5%A4%AA%E6%9D%83%E5%A8%81%E4%BA%86%23) `97.7K 🔥` `NEW`
1. [伊朗早有后手](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%97%A9%E6%9C%89%E5%90%8E%E6%89%8B%23) `96.1K 🔥` `NEW`
1. [去体检被医生说没元素了](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E4%BD%93%E6%A3%80%E8%A2%AB%E5%8C%BB%E7%94%9F%E8%AF%B4%E6%B2%A1%E5%85%83%E7%B4%A0%E4%BA%86%23) `96.0K 🔥` `NEW`
1. [马丽裙子](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%B8%BD%E8%A3%99%E5%AD%90%23) `84.6K 🔥` `NEW`
1. [女子买5份海鲜3份仅退款惹怒商家](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B05%E4%BB%BD%E6%B5%B7%E9%B2%9C3%E4%BB%BD%E4%BB%85%E9%80%80%E6%AC%BE%E6%83%B9%E6%80%92%E5%95%86%E5%AE%B6%23) `82.7K 🔥` `NEW`
1. [大疆Pocket4](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4%23) `77.3K 🔥` `NEW`
1. [零跑发布会](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E8%B7%91%E5%8F%91%E5%B8%83%E4%BC%9A%23) `75.3K 🔥` `NEW`
1. [乌克兰濒临破产 (Ukraine on the brink of bankruptcy)](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E6%BF%92%E4%B8%B4%E7%A0%B4%E4%BA%A7%23) `75.2K 🔥` `NEW`
1. [北京国际电影节](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%9B%BD%E9%99%85%E7%94%B5%E5%BD%B1%E8%8A%82%23) `69.8K 🔥` `NEW`
1. [猥亵女生班主任已被开除](https://s.weibo.com/weibo?q=%23%E7%8C%A5%E4%BA%B5%E5%A5%B3%E7%94%9F%E7%8F%AD%E4%B8%BB%E4%BB%BB%E5%B7%B2%E8%A2%AB%E5%BC%80%E9%99%A4%23) `66.4K 🔥` `NEW`
1. [北影节 年年下雨](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%BD%B1%E8%8A%82%20%E5%B9%B4%E5%B9%B4%E4%B8%8B%E9%9B%A8%23) `64.8K 🔥` `NEW`
1. [深圳一男子确诊罕见传染病](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E7%94%B7%E5%AD%90%E7%A1%AE%E8%AF%8A%E7%BD%95%E8%A7%81%E4%BC%A0%E6%9F%93%E7%97%85%23) `461.2K 🔥` `+643%`
1. [陪91岁大爷玩手机月入5000](https://s.weibo.com/weibo?q=%23%E9%99%AA91%E5%B2%81%E5%A4%A7%E7%88%B7%E7%8E%A9%E6%89%8B%E6%9C%BA%E6%9C%88%E5%85%A55000%23) `401.2K 🔥` `+292%`
1. [商家笑了半个月才舍得发货 (The merchant laughed for half a month before he was willing to deliver the goods)](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%AE%B6%E7%AC%91%E4%BA%86%E5%8D%8A%E4%B8%AA%E6%9C%88%E6%89%8D%E8%88%8D%E5%BE%97%E5%8F%91%E8%B4%A7%23) `234.2K 🔥` `+62%`
1. [向涵之 你替我拍戏](https://s.weibo.com/weibo?q=%23%E5%90%91%E6%B6%B5%E4%B9%8B%20%E4%BD%A0%E6%9B%BF%E6%88%91%E6%8B%8D%E6%88%8F%23) `212.8K 🔥` `+64%`
1. [日本超市大抢购](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%B6%85%E5%B8%82%E5%A4%A7%E6%8A%A2%E8%B4%AD%23) `199.1K 🔥` `+49%`
1. [孙杨张豆豆在大巴车上吵起来了 (Sun Yang and Zhang Doudou had a fight on the bus)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BC%A0%E8%B1%86%E8%B1%86%E5%9C%A8%E5%A4%A7%E5%B7%B4%E8%BD%A6%E4%B8%8A%E5%90%B5%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `155.7K 🔥` `+96%`
1. [Gemini Mac](https://s.weibo.com/weibo?q=%23Gemini%20Mac%23) `106.6K 🔥` `+92%`
1. [腾哥丽姐呢 在呢在呢](https://s.weibo.com/weibo?q=%23%E8%85%BE%E5%93%A5%E4%B8%BD%E5%A7%90%E5%91%A2%20%E5%9C%A8%E5%91%A2%E5%9C%A8%E5%91%A2%23) `89.7K 🔥` `+45%`
1. [2026年一季度GDP同比增长5.0% (GDP growth in the first quarter of 2026 is 5.0% year-on-year)](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E4%B8%80%E5%AD%A3%E5%BA%A6GDP%E5%90%8C%E6%AF%94%E5%A2%9E%E9%95%BF5.0%25%23) `623.7K 🔥`
1. [沃尔沃XC70感恩版上市24.99万起 (Volvo XC70 Thanksgiving Edition launched starting at 249,900)](https://s.weibo.com/weibo?q=%23%E6%B2%83%E5%B0%94%E6%B2%83XC70%E6%84%9F%E6%81%A9%E7%89%88%E4%B8%8A%E5%B8%8224.99%E4%B8%87%E8%B5%B7%23) `553.8K 🔥`
1. [2026我的动物朋友](https://s.weibo.com/weibo?q=%232026%E6%88%91%E7%9A%84%E5%8A%A8%E7%89%A9%E6%9C%8B%E5%8F%8B%23) `339.8K 🔥`
1. [邓超在儿子的颜值里起破坏作用 (Deng Chao played a damaging role in his son's appearance)](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%9C%A8%E5%84%BF%E5%AD%90%E7%9A%84%E9%A2%9C%E5%80%BC%E9%87%8C%E8%B5%B7%E7%A0%B4%E5%9D%8F%E4%BD%9C%E7%94%A8%23) `115.7K 🔥`
1. [法院称papi妈妈抑郁症与案件无关](https://s.weibo.com/weibo?q=%23%E6%B3%95%E9%99%A2%E7%A7%B0papi%E5%A6%88%E5%A6%88%E6%8A%91%E9%83%81%E7%97%87%E4%B8%8E%E6%A1%88%E4%BB%B6%E6%97%A0%E5%85%B3%23) `99.7K 🔥`
1. [丝芭旗下艺人感谢王子杰栽培](https://s.weibo.com/weibo?q=%23%E4%B8%9D%E8%8A%AD%E6%97%97%E4%B8%8B%E8%89%BA%E4%BA%BA%E6%84%9F%E8%B0%A2%E7%8E%8B%E5%AD%90%E6%9D%B0%E6%A0%BD%E5%9F%B9%23) `97.2K 🔥`
1. [曝包洁仪凄惨身世是假的](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8C%85%E6%B4%81%E4%BB%AA%E5%87%84%E6%83%A8%E8%BA%AB%E4%B8%96%E6%98%AF%E5%81%87%E7%9A%84%23) `94.2K 🔥`
1. [千亿存储芯片一哥套现28亿](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%BA%BF%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E4%B8%80%E5%93%A5%E5%A5%97%E7%8E%B028%E4%BA%BF%23) `88.2K 🔥`
1. [檀健次拿着小风车被摸了一把又一把](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E6%8B%BF%E7%9D%80%E5%B0%8F%E9%A3%8E%E8%BD%A6%E8%A2%AB%E6%91%B8%E4%BA%86%E4%B8%80%E6%8A%8A%E5%8F%88%E4%B8%80%E6%8A%8A%23) `80.3K 🔥`
1. [西班牙等来中企投资后感谢特朗普助攻](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%AD%89%E6%9D%A5%E4%B8%AD%E4%BC%81%E6%8A%95%E8%B5%84%E5%90%8E%E6%84%9F%E8%B0%A2%E7%89%B9%E6%9C%97%E6%99%AE%E5%8A%A9%E6%94%BB%23) `72.8K 🔥`
1. [贺峻霖谁家贵公子](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E8%B0%81%E5%AE%B6%E8%B4%B5%E5%85%AC%E5%AD%90%23) `66.8K 🔥`
1. [雷军再次回应中间只充一次电言论](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%86%8D%E6%AC%A1%E5%9B%9E%E5%BA%94%E4%B8%AD%E9%97%B4%E5%8F%AA%E5%85%85%E4%B8%80%E6%AC%A1%E7%94%B5%E8%A8%80%E8%AE%BA%23) `227.3K 🔥` `-69%`
1. [中国驻日大使馆接连遭到恐怖威胁 (The Chinese Embassy in Japan receives successive terrorist threats)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A9%BB%E6%97%A5%E5%A4%A7%E4%BD%BF%E9%A6%86%E6%8E%A5%E8%BF%9E%E9%81%AD%E5%88%B0%E6%81%90%E6%80%96%E5%A8%81%E8%83%81%23) `116.7K 🔥` `-89%`
1. [豆包帮挑的西瓜](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%B8%AE%E6%8C%91%E7%9A%84%E8%A5%BF%E7%93%9C%23) `115.3K 🔥` `-35%`
1. [人一退休面相都跟着变舒展了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E9%80%80%E4%BC%91%E9%9D%A2%E7%9B%B8%E9%83%BD%E8%B7%9F%E7%9D%80%E5%8F%98%E8%88%92%E5%B1%95%E4%BA%86%23) `113.2K 🔥` `-46%`
1. [宋亚轩回归音综](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%9E%E5%BD%92%E9%9F%B3%E7%BB%BC%23) `97.3K 🔥` `-52%`
1. [孙怡cos黎璃](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1cos%E9%BB%8E%E7%92%83%23) `84.7K 🔥` `-21%`
1. [黄瓜泡面](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%93%9C%E6%B3%A1%E9%9D%A2%23) `73.7K 🔥` `-49%`
1. [小米食堂3天卖2000多只冰淇淋 (Xiaomi Canteen sells more than 2,000 ice creams in 3 days)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%A3%9F%E5%A0%823%E5%A4%A9%E5%8D%962000%E5%A4%9A%E5%8F%AA%E5%86%B0%E6%B7%87%E6%B7%8B%23) `69.0K 🔥` `-32%`
1. [跑男](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%23) `65.0K 🔥` `-37%`

Updated at 2026-04-16 19:54:04

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
