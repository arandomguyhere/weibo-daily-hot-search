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

1. [诊所用一个针头给15人采血 (Clinic used one needle to collect blood from 15 people)](https://s.weibo.com/weibo?q=%23%E8%AF%8A%E6%89%80%E7%94%A8%E4%B8%80%E4%B8%AA%E9%92%88%E5%A4%B4%E7%BB%9915%E4%BA%BA%E9%87%87%E8%A1%80%23) `823.7K 🔥` `NEW`
1. [张晚意求职](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%9A%E6%84%8F%E6%B1%82%E8%81%8C%23) `601.7K 🔥` `NEW`
1. [浪姐二公投票淘汰](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BA%8C%E5%85%AC%E6%8A%95%E7%A5%A8%E6%B7%98%E6%B1%B0%23) `321.4K 🔥` `NEW`
1. [BLG对战TES](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98TES%23) `245.7K 🔥` `NEW`
1. [网传许昌举办夏季马拉松不实](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%AE%B8%E6%98%8C%E4%B8%BE%E5%8A%9E%E5%A4%8F%E5%AD%A3%E9%A9%AC%E6%8B%89%E6%9D%BE%E4%B8%8D%E5%AE%9E%23) `236.7K 🔥` `NEW`
1. [狼队第五人格](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `212.3K 🔥` `NEW`
1. [美对伊朗启动经济狂怒行动](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%90%AF%E5%8A%A8%E7%BB%8F%E6%B5%8E%E7%8B%82%E6%80%92%E8%A1%8C%E5%8A%A8%23) `173.2K 🔥` `NEW`
1. [潘石屹发文](https://s.weibo.com/weibo?q=%23%E6%BD%98%E7%9F%B3%E5%B1%B9%E5%8F%91%E6%96%87%23) `172.7K 🔥` `NEW`
1. [张曼玉没去浪姐来这了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9B%BC%E7%8E%89%E6%B2%A1%E5%8E%BB%E6%B5%AA%E5%A7%90%E6%9D%A5%E8%BF%99%E4%BA%86%23) `169.0K 🔥` `NEW`
1. [沈腾 座位](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%20%E5%BA%A7%E4%BD%8D%23) `164.0K 🔥` `NEW`
1. [零跑D19 (Zero running D19)](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E8%B7%91D19%23) `163.8K 🔥` `NEW`
1. [穆祉丞追星也是氪金粉](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E8%BF%BD%E6%98%9F%E4%B9%9F%E6%98%AF%E6%B0%AA%E9%87%91%E7%B2%89%23) `162.9K 🔥` `NEW`
1. [大疆发布会](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86%E5%8F%91%E5%B8%83%E4%BC%9A%23) `144.1K 🔥` `NEW`
1. [粉色蓝莓炒至400元一斤](https://s.weibo.com/weibo?q=%23%E7%B2%89%E8%89%B2%E8%93%9D%E8%8E%93%E7%82%92%E8%87%B3400%E5%85%83%E4%B8%80%E6%96%A4%23) `140.4K 🔥` `NEW`
1. [张杰演唱会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%23) `140.0K 🔥` `NEW`
1. [偶遇张元英去皮肤科](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%BC%A0%E5%85%83%E8%8B%B1%E5%8E%BB%E7%9A%AE%E8%82%A4%E7%A7%91%23) `136.2K 🔥` `NEW`
1. [张真源直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E7%9B%B4%E6%92%AD%23) `124.0K 🔥` `NEW`
1. [94斤女生打司美格鲁肽减肥被送急诊](https://s.weibo.com/weibo?q=%2394%E6%96%A4%E5%A5%B3%E7%94%9F%E6%89%93%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E5%87%8F%E8%82%A5%E8%A2%AB%E9%80%81%E6%80%A5%E8%AF%8A%23) `123.6K 🔥` `NEW`
1. [丞磊沈羽洁许你星河千里开机](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E6%B2%88%E7%BE%BD%E6%B4%81%E8%AE%B8%E4%BD%A0%E6%98%9F%E6%B2%B3%E5%8D%83%E9%87%8C%E5%BC%80%E6%9C%BA%23) `121.4K 🔥` `NEW`
1. [北京新晋时尚打卡地](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%96%B0%E6%99%8B%E6%97%B6%E5%B0%9A%E6%89%93%E5%8D%A1%E5%9C%B0%23) `105.1K 🔥` `NEW`
1. [马丽你怎么管的沈腾 (Ma Li, why do you care about Shen Teng?)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%B8%BD%E4%BD%A0%E6%80%8E%E4%B9%88%E7%AE%A1%E7%9A%84%E6%B2%88%E8%85%BE%23) `105.1K 🔥` `NEW`
1. [地球或今年冲击高温极限](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83%E6%88%96%E4%BB%8A%E5%B9%B4%E5%86%B2%E5%87%BB%E9%AB%98%E6%B8%A9%E6%9E%81%E9%99%90%23) `99.2K 🔥` `NEW`
1. [大疆Pocket4值得买吗](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4%E5%80%BC%E5%BE%97%E4%B9%B0%E5%90%97%23) `94.9K 🔥` `NEW`
1. [老莫称卖掉1000只鸡后会捐10万](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%8E%AB%E7%A7%B0%E5%8D%96%E6%8E%891000%E5%8F%AA%E9%B8%A1%E5%90%8E%E4%BC%9A%E6%8D%9010%E4%B8%87%23) `92.3K 🔥` `NEW`
1. [TES压制BLG](https://s.weibo.com/weibo?q=%23TES%E5%8E%8B%E5%88%B6BLG%23) `88.4K 🔥` `NEW`
1. [行车中车门突然打开掉出一个孩子](https://s.weibo.com/weibo?q=%23%E8%A1%8C%E8%BD%A6%E4%B8%AD%E8%BD%A6%E9%97%A8%E7%AA%81%E7%84%B6%E6%89%93%E5%BC%80%E6%8E%89%E5%87%BA%E4%B8%80%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `88.4K 🔥` `NEW`
1. [狼队三连败](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E4%B8%89%E8%BF%9E%E8%B4%A5%23) `88.4K 🔥` `NEW`
1. [蜜语纪](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%23) `88.4K 🔥` `NEW`
1. [鞠婧祎方回应守住尊重逝者的底线](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%96%B9%E5%9B%9E%E5%BA%94%E5%AE%88%E4%BD%8F%E5%B0%8A%E9%87%8D%E9%80%9D%E8%80%85%E7%9A%84%E5%BA%95%E7%BA%BF%23) `83.3K 🔥` `NEW`
1. [程不时逝世](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E4%B8%8D%E6%97%B6%E9%80%9D%E4%B8%96%23) `76.8K 🔥` `NEW`
1. [Bin连续被单杀 (Bin was killed continuously by a single player)](https://s.weibo.com/weibo?q=%23Bin%E8%BF%9E%E7%BB%AD%E8%A2%AB%E5%8D%95%E6%9D%80%23) `74.8K 🔥` `NEW`
1. [迪丽热巴生离死别哭戏](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%94%9F%E7%A6%BB%E6%AD%BB%E5%88%AB%E5%93%AD%E6%88%8F%23) `74.7K 🔥` `NEW`
1. [跨省献血证倒卖链条曝光](https://s.weibo.com/weibo?q=%23%E8%B7%A8%E7%9C%81%E7%8C%AE%E8%A1%80%E8%AF%81%E5%80%92%E5%8D%96%E9%93%BE%E6%9D%A1%E6%9B%9D%E5%85%89%23) `74.6K 🔥` `NEW`
1. [时代少年团给跑男团下战书](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%BB%99%E8%B7%91%E7%94%B7%E5%9B%A2%E4%B8%8B%E6%88%98%E4%B9%A6%23) `65.1K 🔥` `NEW`
1. [大疆Pocket4](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4%23) `1.2M 🔥` `+1406%`
1. [马丽裙子](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%B8%BD%E8%A3%99%E5%AD%90%23) `233.8K 🔥` `+176%`
1. [2026年一季度GDP同比增长5.0% (GDP growth in the first quarter of 2026 is 5.0% year-on-year)](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E4%B8%80%E5%AD%A3%E5%BA%A6GDP%E5%90%8C%E6%AF%94%E5%A2%9E%E9%95%BF5.0%25%23) `685.5K 🔥`
1. [杀害网红罗大美主犯死前见亲属](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B3%E7%BD%91%E7%BA%A2%E7%BD%97%E5%A4%A7%E7%BE%8E%E4%B8%BB%E7%8A%AF%E6%AD%BB%E5%89%8D%E8%A7%81%E4%BA%B2%E5%B1%9E%23) `174.8K 🔥`
1. [向涵之 你替我拍戏](https://s.weibo.com/weibo?q=%23%E5%90%91%E6%B6%B5%E4%B9%8B%20%E4%BD%A0%E6%9B%BF%E6%88%91%E6%8B%8D%E6%88%8F%23) `170.9K 🔥`
1. [日本超市大抢购](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%B6%85%E5%B8%82%E5%A4%A7%E6%8A%A2%E8%B4%AD%23) `166.8K 🔥`
1. [迪丽热巴荷叶边白裙](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%8D%B7%E5%8F%B6%E8%BE%B9%E7%99%BD%E8%A3%99%23) `147.6K 🔥`
1. [去体检被医生说没元素了 (I went for a physical examination and the doctor said I had no elements.)](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E4%BD%93%E6%A3%80%E8%A2%AB%E5%8C%BB%E7%94%9F%E8%AF%B4%E6%B2%A1%E5%85%83%E7%B4%A0%E4%BA%86%23) `110.3K 🔥`
1. [豆包帮挑的西瓜](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%B8%AE%E6%8C%91%E7%9A%84%E8%A5%BF%E7%93%9C%23) `92.5K 🔥`
1. [伊朗早有后手](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%97%A9%E6%9C%89%E5%90%8E%E6%89%8B%23) `92.3K 🔥`
1. [陪91岁大爷玩手机月入5000](https://s.weibo.com/weibo?q=%23%E9%99%AA91%E5%B2%81%E5%A4%A7%E7%88%B7%E7%8E%A9%E6%89%8B%E6%9C%BA%E6%9C%88%E5%85%A55000%23) `140.5K 🔥` `-65%`
1. [中方回应特朗普称访华不受影响 (China responds to Trump's statement that visit to China will not be affected)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%AE%BF%E5%8D%8E%E4%B8%8D%E5%8F%97%E5%BD%B1%E5%93%8D%23) `127.1K 🔥` `-88%`
1. [深圳一男子确诊罕见传染病](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E7%94%B7%E5%AD%90%E7%A1%AE%E8%AF%8A%E7%BD%95%E8%A7%81%E4%BC%A0%E6%9F%93%E7%97%85%23) `124.3K 🔥` `-73%`
1. [谢娜回应李小冉没法一起团建](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9B%9E%E5%BA%94%E6%9D%8E%E5%B0%8F%E5%86%89%E6%B2%A1%E6%B3%95%E4%B8%80%E8%B5%B7%E5%9B%A2%E5%BB%BA%23) `119.9K 🔥` `-38%`
1. [张豆豆崩溃大哭](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B1%86%E8%B1%86%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `105.1K 🔥` `-70%`
1. [北影节开幕式](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%BD%B1%E8%8A%82%E5%BC%80%E5%B9%95%E5%BC%8F%23) `74.9K 🔥` `-69%`
1. [李小冉祝今晚乘风姐姐鸟巢团建开心](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%A5%9D%E4%BB%8A%E6%99%9A%E4%B9%98%E9%A3%8E%E5%A7%90%E5%A7%90%E9%B8%9F%E5%B7%A2%E5%9B%A2%E5%BB%BA%E5%BC%80%E5%BF%83%23) `70.7K 🔥` `-34%`

Updated at 2026-04-16 21:26:40

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
