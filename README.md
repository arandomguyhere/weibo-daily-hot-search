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

1. [十五五首季中国经济增长好于预期 (China’s economic growth was better than expected in the first quarter of the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E9%A6%96%E5%AD%A3%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%A2%9E%E9%95%BF%E5%A5%BD%E4%BA%8E%E9%A2%84%E6%9C%9F%23) `626.4K 🔥` `NEW`
1. [黄灿灿梦回武大校花](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%A2%A6%E5%9B%9E%E6%AD%A6%E5%A4%A7%E6%A0%A1%E8%8A%B1%23) `464.0K 🔥` `NEW`
1. [最不困的人叫醒最困的人](https://s.weibo.com/weibo?q=%23%E6%9C%80%E4%B8%8D%E5%9B%B0%E7%9A%84%E4%BA%BA%E5%8F%AB%E9%86%92%E6%9C%80%E5%9B%B0%E7%9A%84%E4%BA%BA%23) `187.2K 🔥` `NEW`
1. [智己LS8今日正式上市](https://s.weibo.com/weibo?q=%23%E6%99%BA%E5%B7%B1LS8%E4%BB%8A%E6%97%A5%E6%AD%A3%E5%BC%8F%E4%B8%8A%E5%B8%82%23) `175.6K 🔥` `NEW`
1. [零跑D19售价21.98万起](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E8%B7%91D19%E5%94%AE%E4%BB%B721.98%E4%B8%87%E8%B5%B7%23) `145.6K 🔥` `NEW`
1. [诚实一口道歉](https://s.weibo.com/weibo?q=%23%E8%AF%9A%E5%AE%9E%E4%B8%80%E5%8F%A3%E9%81%93%E6%AD%89%23) `144.0K 🔥` `NEW`
1. [诚实一口](https://s.weibo.com/weibo?q=%23%E8%AF%9A%E5%AE%9E%E4%B8%80%E5%8F%A3%23) `142.9K 🔥` `NEW`
1. [曝清清性骚扰](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B8%85%E6%B8%85%E6%80%A7%E9%AA%9A%E6%89%B0%23) `142.7K 🔥` `NEW`
1. [浪姐张杰鸟巢演唱会团建](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9B%A2%E5%BB%BA%23) `142.0K 🔥` `NEW`
1. [张伦硕妈妈曾遗憾没有亲孙子](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BC%A6%E7%A1%95%E5%A6%88%E5%A6%88%E6%9B%BE%E9%81%97%E6%86%BE%E6%B2%A1%E6%9C%89%E4%BA%B2%E5%AD%99%E5%AD%90%23) `140.5K 🔥` `NEW`
1. [埃安N60全系标配高阶智能11.58万元起 (Aion N60 series comes standard with high-end smart phones starting from 115,800 yuan)](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%AE%89N60%E5%85%A8%E7%B3%BB%E6%A0%87%E9%85%8D%E9%AB%98%E9%98%B6%E6%99%BA%E8%83%BD11.58%E4%B8%87%E5%85%83%E8%B5%B7%23) `138.6K 🔥` `NEW`
1. [Bin 小奶油](https://s.weibo.com/weibo?q=%23Bin%20%E5%B0%8F%E5%A5%B6%E6%B2%B9%23) `137.8K 🔥` `NEW`
1. [埃安N60一度电多跑一公里](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%AE%89N60%E4%B8%80%E5%BA%A6%E7%94%B5%E5%A4%9A%E8%B7%91%E4%B8%80%E5%85%AC%E9%87%8C%23) `128.4K 🔥` `NEW`
1. [黄晓明再次进入上戏博士复试名单](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%86%8D%E6%AC%A1%E8%BF%9B%E5%85%A5%E4%B8%8A%E6%88%8F%E5%8D%9A%E5%A3%AB%E5%A4%8D%E8%AF%95%E5%90%8D%E5%8D%95%23) `120.1K 🔥` `NEW`
1. [粉色蓝莓一颗难求](https://s.weibo.com/weibo?q=%23%E7%B2%89%E8%89%B2%E8%93%9D%E8%8E%93%E4%B8%80%E9%A2%97%E9%9A%BE%E6%B1%82%23) `119.2K 🔥` `NEW`
1. [美国多位机密领域科学家失踪或死亡](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%9A%E4%BD%8D%E6%9C%BA%E5%AF%86%E9%A2%86%E5%9F%9F%E7%A7%91%E5%AD%A6%E5%AE%B6%E5%A4%B1%E8%B8%AA%E6%88%96%E6%AD%BB%E4%BA%A1%23) `119.1K 🔥` `NEW`
1. [张小斐 可以坐评委腿上看电影吗](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%20%E5%8F%AF%E4%BB%A5%E5%9D%90%E8%AF%84%E5%A7%94%E8%85%BF%E4%B8%8A%E7%9C%8B%E7%94%B5%E5%BD%B1%E5%90%97%23) `93.5K 🔥` `NEW`
1. [金关](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%85%B3%23) `92.7K 🔥` `NEW`
1. [粉色蓝莓vs普通蓝莓](https://s.weibo.com/weibo?q=%23%E7%B2%89%E8%89%B2%E8%93%9D%E8%8E%93vs%E6%99%AE%E9%80%9A%E8%93%9D%E8%8E%93%23) `91.1K 🔥` `NEW`
1. [偷偷藏不住剧组亮相北影节](https://s.weibo.com/weibo?q=%23%E5%81%B7%E5%81%B7%E8%97%8F%E4%B8%8D%E4%BD%8F%E5%89%A7%E7%BB%84%E4%BA%AE%E7%9B%B8%E5%8C%97%E5%BD%B1%E8%8A%82%23) `81.5K 🔥` `NEW`
1. [47岁外卖员出租屋离世一月才被发现 (The 47-year-old deliveryman died in a rental house and was only discovered a month ago)](https://s.weibo.com/weibo?q=%2347%E5%B2%81%E5%A4%96%E5%8D%96%E5%91%98%E5%87%BA%E7%A7%9F%E5%B1%8B%E7%A6%BB%E4%B8%96%E4%B8%80%E6%9C%88%E6%89%8D%E8%A2%AB%E5%8F%91%E7%8E%B0%23) `81.4K 🔥` `NEW`
1. [最难喝饮料又上新了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E9%9A%BE%E5%96%9D%E9%A5%AE%E6%96%99%E5%8F%88%E4%B8%8A%E6%96%B0%E4%BA%86%23) `81.4K 🔥` `NEW`
1. [刘翔直言中国新能源车太顶了](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E7%9B%B4%E8%A8%80%E4%B8%AD%E5%9B%BD%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E5%A4%AA%E9%A1%B6%E4%BA%86%23) `81.4K 🔥` `NEW`
1. [露芜衣角色曲不是鞠婧祎唱的](https://s.weibo.com/weibo?q=%23%E9%9C%B2%E8%8A%9C%E8%A1%A3%E8%A7%92%E8%89%B2%E6%9B%B2%E4%B8%8D%E6%98%AF%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%94%B1%E7%9A%84%23) `81.4K 🔥` `NEW`
1. [多方回应诊所用一个针头给15人采血](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E8%AF%8A%E6%89%80%E7%94%A8%E4%B8%80%E4%B8%AA%E9%92%88%E5%A4%B4%E7%BB%9915%E4%BA%BA%E9%87%87%E8%A1%80%23) `81.2K 🔥` `NEW`
1. [邓紫棋直播](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E7%9B%B4%E6%92%AD%23) `80.3K 🔥` `NEW`
1. [低精力都去查一下维d](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%E9%83%BD%E5%8E%BB%E6%9F%A5%E4%B8%80%E4%B8%8B%E7%BB%B4d%23) `73.5K 🔥` `NEW`
1. [丁程鑫祝张真源快乐](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E7%A5%9D%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%BF%AB%E4%B9%90%23) `73.4K 🔥` `NEW`
1. [南京公积金贷款范围扩至安徽全省](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%85%AC%E7%A7%AF%E9%87%91%E8%B4%B7%E6%AC%BE%E8%8C%83%E5%9B%B4%E6%89%A9%E8%87%B3%E5%AE%89%E5%BE%BD%E5%85%A8%E7%9C%81%23) `73.0K 🔥` `NEW`
1. [94斤女生打司美格鲁肽减肥被送急诊](https://s.weibo.com/weibo?q=%2394%E6%96%A4%E5%A5%B3%E7%94%9F%E6%89%93%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E5%87%8F%E8%82%A5%E8%A2%AB%E9%80%81%E6%80%A5%E8%AF%8A%23) `808.2K 🔥` `+554%`
1. [老莫称卖掉1000只鸡后会捐10万 (Lao Mo said he would donate 100,000 yuan after selling 1,000 chickens)](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%8E%AB%E7%A7%B0%E5%8D%96%E6%8E%891000%E5%8F%AA%E9%B8%A1%E5%90%8E%E4%BC%9A%E6%8D%9010%E4%B8%87%23) `174.1K 🔥` `+89%`
1. [行车中车门突然打开掉出一个孩子](https://s.weibo.com/weibo?q=%23%E8%A1%8C%E8%BD%A6%E4%B8%AD%E8%BD%A6%E9%97%A8%E7%AA%81%E7%84%B6%E6%89%93%E5%BC%80%E6%8E%89%E5%87%BA%E4%B8%80%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `147.2K 🔥` `+67%`
1. [地球或今年冲击高温极限](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83%E6%88%96%E4%BB%8A%E5%B9%B4%E5%86%B2%E5%87%BB%E9%AB%98%E6%B8%A9%E6%9E%81%E9%99%90%23) `145.8K 🔥` `+47%`
1. [大疆Pocket4](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4%23) `1.1M 🔥`
1. [沈腾 座位](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%20%E5%BA%A7%E4%BD%8D%23) `145.1K 🔥`
1. [零跑D19 (Zero running D19)](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E8%B7%91D19%23) `143.4K 🔥`
1. [潘石屹发文](https://s.weibo.com/weibo?q=%23%E6%BD%98%E7%9F%B3%E5%B1%B9%E5%8F%91%E6%96%87%23) `141.2K 🔥`
1. [美对伊朗启动经济狂怒行动](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%90%AF%E5%8A%A8%E7%BB%8F%E6%B5%8E%E7%8B%82%E6%80%92%E8%A1%8C%E5%8A%A8%23) `140.2K 🔥`
1. [张曼玉没去浪姐来这了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9B%BC%E7%8E%89%E6%B2%A1%E5%8E%BB%E6%B5%AA%E5%A7%90%E6%9D%A5%E8%BF%99%E4%BA%86%23) `139.6K 🔥`
1. [穆祉丞追星也是氪金粉](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E8%BF%BD%E6%98%9F%E4%B9%9F%E6%98%AF%E6%B0%AA%E9%87%91%E7%B2%89%23) `138.4K 🔥`
1. [蜜语纪](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%23) `102.9K 🔥`
1. [迪丽热巴生离死别哭戏 (Dilraba's scene of crying before death)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%94%9F%E7%A6%BB%E6%AD%BB%E5%88%AB%E5%93%AD%E6%88%8F%23) `82.9K 🔥`
1. [张晚意求职](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%9A%E6%84%8F%E6%B1%82%E8%81%8C%23) `184.4K 🔥` `-69%`
1. [浪姐二公投票淘汰](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BA%8C%E5%85%AC%E6%8A%95%E7%A5%A8%E6%B7%98%E6%B1%B0%23) `127.8K 🔥` `-60%`
1. [粉色蓝莓炒至400元一斤](https://s.weibo.com/weibo?q=%23%E7%B2%89%E8%89%B2%E8%93%9D%E8%8E%93%E7%82%92%E8%87%B3400%E5%85%83%E4%B8%80%E6%96%A4%23) `93.6K 🔥` `-33%`
1. [偶遇张元英去皮肤科](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%BC%A0%E5%85%83%E8%8B%B1%E5%8E%BB%E7%9A%AE%E8%82%A4%E7%A7%91%23) `90.7K 🔥` `-33%`
1. [狼队第五人格](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `86.7K 🔥` `-59%`
1. [张真源直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E7%9B%B4%E6%92%AD%23) `86.2K 🔥` `-31%`
1. [中方回应特朗普称访华不受影响 (China responds to Trump's statement that visit to China will not be affected)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%AE%BF%E5%8D%8E%E4%B8%8D%E5%8F%97%E5%BD%B1%E5%93%8D%23) `82.9K 🔥` `-35%`
1. [迪丽热巴荷叶边白裙](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%8D%B7%E5%8F%B6%E8%BE%B9%E7%99%BD%E8%A3%99%23) `79.7K 🔥` `-46%`
1. [深圳一男子确诊罕见传染病](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E7%94%B7%E5%AD%90%E7%A1%AE%E8%AF%8A%E7%BD%95%E8%A7%81%E4%BC%A0%E6%9F%93%E7%97%85%23) `74.6K 🔥` `-40%`

Updated at 2026-04-16 23:12:32

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
