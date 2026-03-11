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

1. [今日辟谣 (Debunking rumors today)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `265.1K 🔥` `NEW`
1. [80元Lululemon发圈卖断货](https://s.weibo.com/weibo?q=%2380%E5%85%83Lululemon%E5%8F%91%E5%9C%88%E5%8D%96%E6%96%AD%E8%B4%A7%23) `255.8K 🔥` `NEW`
1. [曝美军方花900万美元买帝王蟹龙虾](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%BE%8E%E5%86%9B%E6%96%B9%E8%8A%B1900%E4%B8%87%E7%BE%8E%E5%85%83%E4%B9%B0%E5%B8%9D%E7%8E%8B%E8%9F%B9%E9%BE%99%E8%99%BE%23) `237.3K 🔥` `NEW`
1. [甜茶关晓彤合照](https://s.weibo.com/weibo?q=%23%E7%94%9C%E8%8C%B6%E5%85%B3%E6%99%93%E5%BD%A4%E5%90%88%E7%85%A7%23) `157.6K 🔥` `NEW`
1. [BBA车价大降销量回温难](https://s.weibo.com/weibo?q=%23BBA%E8%BD%A6%E4%BB%B7%E5%A4%A7%E9%99%8D%E9%94%80%E9%87%8F%E5%9B%9E%E6%B8%A9%E9%9A%BE%23) `116.2K 🔥` `NEW`
1. [取微信名要慎重](https://s.weibo.com/weibo?q=%23%E5%8F%96%E5%BE%AE%E4%BF%A1%E5%90%8D%E8%A6%81%E6%85%8E%E9%87%8D%23) `112.8K 🔥` `NEW`
1. [原来何老师从小就是何老师了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%BD%95%E8%80%81%E5%B8%88%E4%BB%8E%E5%B0%8F%E5%B0%B1%E6%98%AF%E4%BD%95%E8%80%81%E5%B8%88%E4%BA%86%23) `112.5K 🔥` `NEW`
1. [王楚钦锐评重庆菜](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%94%90%E8%AF%84%E9%87%8D%E5%BA%86%E8%8F%9C%23) `105.2K 🔥` `NEW`
1. [张凌赫伴手礼](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `103.4K 🔥` `NEW`
1. [华师大回应师范本科不再输出教师](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%B8%88%E5%A4%A7%E5%9B%9E%E5%BA%94%E5%B8%88%E8%8C%83%E6%9C%AC%E7%A7%91%E4%B8%8D%E5%86%8D%E8%BE%93%E5%87%BA%E6%95%99%E5%B8%88%23) `98.1K 🔥` `NEW`
1. [政协委员建议别信不明养生小视频 (CPPCC members advise against trusting unknown health videos)](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%8D%8F%E5%A7%94%E5%91%98%E5%BB%BA%E8%AE%AE%E5%88%AB%E4%BF%A1%E4%B8%8D%E6%98%8E%E5%85%BB%E7%94%9F%E5%B0%8F%E8%A7%86%E9%A2%91%23) `97.0K 🔥` `NEW`
1. [逐玉原著](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%8E%9F%E8%91%97%23) `97.0K 🔥` `NEW`
1. [拍到了猫生照片](https://s.weibo.com/weibo?q=%23%E6%8B%8D%E5%88%B0%E4%BA%86%E7%8C%AB%E7%94%9F%E7%85%A7%E7%89%87%23) `77.4K 🔥` `NEW`
1. [建议整治同一航班同一张票两个价 (It is recommended to correct the two prices for the same ticket on the same flight.)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%95%B4%E6%B2%BB%E5%90%8C%E4%B8%80%E8%88%AA%E7%8F%AD%E5%90%8C%E4%B8%80%E5%BC%A0%E7%A5%A8%E4%B8%A4%E4%B8%AA%E4%BB%B7%23) `771.9K 🔥` `+132%`
1. [白玉兰预测](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E9%A2%84%E6%B5%8B%23) `534.1K 🔥` `+62%`
1. [刘文祥过完零丁洋得坨](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E8%BF%87%E5%AE%8C%E9%9B%B6%E4%B8%81%E6%B4%8B%E5%BE%97%E5%9D%A8%23) `256.5K 🔥` `+168%`
1. [伊朗总统之子称最高领袖平安](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E4%B9%8B%E5%AD%90%E7%A7%B0%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%B9%B3%E5%AE%89%23) `214.9K 🔥` `+204%`
1. [金店集体涨价](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%BA%97%E9%9B%86%E4%BD%93%E6%B6%A8%E4%BB%B7%23) `132.3K 🔥` `+35%`
1. [豆包万能P图口令](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E4%B8%87%E8%83%BDP%E5%9B%BE%E5%8F%A3%E4%BB%A4%23) `127.3K 🔥` `+40%`
1. [恋与深空委托 1300一小时](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%A7%94%E6%89%98%201300%E4%B8%80%E5%B0%8F%E6%97%B6%23) `121.3K 🔥` `+32%`
1. [TVB风味古偶白日提灯](https://s.weibo.com/weibo?q=%23TVB%E9%A3%8E%E5%91%B3%E5%8F%A4%E5%81%B6%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `97.1K 🔥` `+40%`
1. [建议允许未休年假两年内结转使用 (It is recommended that untaken annual leave be allowed to be carried forward within two years.)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%85%81%E8%AE%B8%E6%9C%AA%E4%BC%91%E5%B9%B4%E5%81%87%E4%B8%A4%E5%B9%B4%E5%86%85%E7%BB%93%E8%BD%AC%E4%BD%BF%E7%94%A8%23) `1.1M 🔥`
1. [政协会议圆满完成各项议程](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%8D%8F%E4%BC%9A%E8%AE%AE%E5%9C%86%E6%BB%A1%E5%AE%8C%E6%88%90%E5%90%84%E9%A1%B9%E8%AE%AE%E7%A8%8B%23) `607.3K 🔥`
1. [华莱士正式宣布退市 (Wallace officially announced its delisting)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%8E%B1%E5%A3%AB%E6%AD%A3%E5%BC%8F%E5%AE%A3%E5%B8%83%E9%80%80%E5%B8%82%23) `571.8K 🔥`
1. [伊朗下起毒雨](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%8B%E8%B5%B7%E6%AF%92%E9%9B%A8%23) `317.9K 🔥`
1. [刘浩存 还有我的老鼠干](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%20%E8%BF%98%E6%9C%89%E6%88%91%E7%9A%84%E8%80%81%E9%BC%A0%E5%B9%B2%23) `148.8K 🔥`
1. [大学生嘴上说不想开学](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%98%B4%E4%B8%8A%E8%AF%B4%E4%B8%8D%E6%83%B3%E5%BC%80%E5%AD%A6%23) `132.1K 🔥`
1. [逐玉 三对CP](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E4%B8%89%E5%AF%B9CP%23) `114.2K 🔥`
1. [TF后代大战EXO老祖](https://s.weibo.com/weibo?q=%23TF%E5%90%8E%E4%BB%A3%E5%A4%A7%E6%88%98EXO%E8%80%81%E7%A5%96%23) `114.0K 🔥`
1. [iPhone18Pro或无屏下FaceID (iPhone 18 Pro or no under-screen FaceID)](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%88%96%E6%97%A0%E5%B1%8F%E4%B8%8BFaceID%23) `109.8K 🔥`
1. [桃花坞 (Taohuawu)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E8%8A%B1%E5%9D%9E%23) `97.0K 🔥`
1. [DYG 自求多福](https://s.weibo.com/weibo?q=%23DYG%20%E8%87%AA%E6%B1%82%E5%A4%9A%E7%A6%8F%23) `87.7K 🔥`
1. [当你生了一个双鱼座小孩](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E7%94%9F%E4%BA%86%E4%B8%80%E4%B8%AA%E5%8F%8C%E9%B1%BC%E5%BA%A7%E5%B0%8F%E5%AD%A9%23) `82.2K 🔥`
1. [十五五蓝图中的职业新图景 (New career prospects in the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%93%9D%E5%9B%BE%E4%B8%AD%E7%9A%84%E8%81%8C%E4%B8%9A%E6%96%B0%E5%9B%BE%E6%99%AF%23) `247.8K 🔥` `-24%`
1. [建议新增元宵节假日](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%96%B0%E5%A2%9E%E5%85%83%E5%AE%B5%E8%8A%82%E5%81%87%E6%97%A5%23) `245.1K 🔥` `-24%`
1. [外甥正月偷偷剪发舅舅气到血压飙升 (My nephew secretly cuts his hair during the first month of the year, and his uncle is so angry that his blood pressure soars.)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%94%A5%E6%AD%A3%E6%9C%88%E5%81%B7%E5%81%B7%E5%89%AA%E5%8F%91%E8%88%85%E8%88%85%E6%B0%94%E5%88%B0%E8%A1%80%E5%8E%8B%E9%A3%99%E5%8D%87%23) `239.1K 🔥` `-25%`
1. [逐玉 赋魅](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E8%B5%8B%E9%AD%85%23) `232.4K 🔥` `-27%`
1. [AG 首发](https://s.weibo.com/weibo?q=%23AG%20%E9%A6%96%E5%8F%91%23) `222.9K 🔥` `-33%`
1. [张凌赫回应颜值出圈](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E9%A2%9C%E5%80%BC%E5%87%BA%E5%9C%88%23) `215.7K 🔥` `-32%`
1. [女子将老公送金镯扔地上又响又跳](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%86%E8%80%81%E5%85%AC%E9%80%81%E9%87%91%E9%95%AF%E6%89%94%E5%9C%B0%E4%B8%8A%E5%8F%88%E5%93%8D%E5%8F%88%E8%B7%B3%23) `182.5K 🔥` `-42%`
1. [国际油价历史性暴跌](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E6%B2%B9%E4%BB%B7%E5%8E%86%E5%8F%B2%E6%80%A7%E6%9A%B4%E8%B7%8C%23) `150.8K 🔥` `-41%`
1. [向佐差点踢到主持人的头](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E5%B7%AE%E7%82%B9%E8%B8%A2%E5%88%B0%E4%B8%BB%E6%8C%81%E4%BA%BA%E7%9A%84%E5%A4%B4%23) `141.4K 🔥` `-37%`
1. [无痛上班模式](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%97%9B%E4%B8%8A%E7%8F%AD%E6%A8%A1%E5%BC%8F%23) `125.6K 🔥` `-26%`
1. [工作不满10年休5天年假规则该调整](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E4%B8%8D%E6%BB%A110%E5%B9%B4%E4%BC%915%E5%A4%A9%E5%B9%B4%E5%81%87%E8%A7%84%E5%88%99%E8%AF%A5%E8%B0%83%E6%95%B4%23) `105.4K 🔥` `-87%`
1. [逐玉孔雪儿邓凯这一对简直仙品](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%AD%94%E9%9B%AA%E5%84%BF%E9%82%93%E5%87%AF%E8%BF%99%E4%B8%80%E5%AF%B9%E7%AE%80%E7%9B%B4%E4%BB%99%E5%93%81%23) `101.1K 🔥` `-49%`
1. [要对钱有概念 (Have a concept of money)](https://s.weibo.com/weibo?q=%23%E8%A6%81%E5%AF%B9%E9%92%B1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `90.2K 🔥` `-31%`
1. [驻韩美军6部萨德发射车全部运出](https://s.weibo.com/weibo?q=%23%E9%A9%BB%E9%9F%A9%E7%BE%8E%E5%86%9B6%E9%83%A8%E8%90%A8%E5%BE%B7%E5%8F%91%E5%B0%84%E8%BD%A6%E5%85%A8%E9%83%A8%E8%BF%90%E5%87%BA%23) `84.4K 🔥` `-42%`
1. [以为是段子结果真发生了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E6%98%AF%E6%AE%B5%E5%AD%90%E7%BB%93%E6%9E%9C%E7%9C%9F%E5%8F%91%E7%94%9F%E4%BA%86%23) `80.8K 🔥` `-23%`
1. [王楚钦vs格罗特 (Wang Chuqin vs Grote)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E6%A0%BC%E7%BD%97%E7%89%B9%23) `77.0K 🔥` `-37%`

Updated at 2026-03-11 16:02:37

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
