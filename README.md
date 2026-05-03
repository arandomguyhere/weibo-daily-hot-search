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

1. [国乒男团1比3韩国 (National table tennis men's team 1 to 3 South Korea)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A21%E6%AF%943%E9%9F%A9%E5%9B%BD%23) `1.2M 🔥` `NEW`
1. [景区NPC擦边涉嫌违法违规](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%8C%BANPC%E6%93%A6%E8%BE%B9%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%E8%BF%9D%E8%A7%84%23) `970.0K 🔥` `NEW`
1. [五一假期绿色出行热度攀升](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%81%87%E6%9C%9F%E7%BB%BF%E8%89%B2%E5%87%BA%E8%A1%8C%E7%83%AD%E5%BA%A6%E6%94%80%E5%8D%87%23) `877.0K 🔥` `NEW`
1. [苹果炖牛肉](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E7%82%96%E7%89%9B%E8%82%89%23) `824.8K 🔥` `NEW`
1. [公司用AI了35岁主管被裁](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E7%94%A8AI%E4%BA%8635%E5%B2%81%E4%B8%BB%E7%AE%A1%E8%A2%AB%E8%A3%81%23) `622.8K 🔥` `NEW`
1. [美国街头吸毒者众多如丧尸聚集](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%A1%97%E5%A4%B4%E5%90%B8%E6%AF%92%E8%80%85%E4%BC%97%E5%A4%9A%E5%A6%82%E4%B8%A7%E5%B0%B8%E8%81%9A%E9%9B%86%23) `432.3K 🔥` `NEW`
1. [唐九洲黄灿灿避嫌也避不明白](https://s.weibo.com/weibo?q=%23%E5%94%90%E4%B9%9D%E6%B4%B2%E9%BB%84%E7%81%BF%E7%81%BF%E9%81%BF%E5%AB%8C%E4%B9%9F%E9%81%BF%E4%B8%8D%E6%98%8E%E7%99%BD%23) `428.8K 🔥` `NEW`
1. [绵阳知名主持人熹菲去世](https://s.weibo.com/weibo?q=%23%E7%BB%B5%E9%98%B3%E7%9F%A5%E5%90%8D%E4%B8%BB%E6%8C%81%E4%BA%BA%E7%86%B9%E8%8F%B2%E5%8E%BB%E4%B8%96%23) `382.0K 🔥` `NEW`
1. [国乒男团爆冷不敌韩国](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E7%88%86%E5%86%B7%E4%B8%8D%E6%95%8C%E9%9F%A9%E5%9B%BD%23) `341.9K 🔥` `NEW`
1. [阚清子又吃上泡面了](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%8F%88%E5%90%83%E4%B8%8A%E6%B3%A1%E9%9D%A2%E4%BA%86%23) `341.7K 🔥` `NEW`
1. [张婧仪团队不被允许进hi6录制现场 (Zhang Jingyi’s team was not allowed to enter the hi6 recording site)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%9B%A2%E9%98%9F%E4%B8%8D%E8%A2%AB%E5%85%81%E8%AE%B8%E8%BF%9Bhi6%E5%BD%95%E5%88%B6%E7%8E%B0%E5%9C%BA%23) `341.7K 🔥` `NEW`
1. [37岁女主持人患癌去世朋友发声](https://s.weibo.com/weibo?q=%2337%E5%B2%81%E5%A5%B3%E4%B8%BB%E6%8C%81%E4%BA%BA%E6%82%A3%E7%99%8C%E5%8E%BB%E4%B8%96%E6%9C%8B%E5%8F%8B%E5%8F%91%E5%A3%B0%23) `341.3K 🔥` `NEW`
1. [黄旭熙在ins开了付费订阅](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%97%AD%E7%86%99%E5%9C%A8ins%E5%BC%80%E4%BA%86%E4%BB%98%E8%B4%B9%E8%AE%A2%E9%98%85%23) `340.8K 🔥` `NEW`
1. [用ChatGPT还原盗墓笔记的世界](https://s.weibo.com/weibo?q=%23%E7%94%A8ChatGPT%E8%BF%98%E5%8E%9F%E7%9B%97%E5%A2%93%E7%AC%94%E8%AE%B0%E7%9A%84%E4%B8%96%E7%95%8C%23) `340.6K 🔥` `NEW`
1. [女子失明后遭公司设考勤陷阱开除](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%A4%B1%E6%98%8E%E5%90%8E%E9%81%AD%E5%85%AC%E5%8F%B8%E8%AE%BE%E8%80%83%E5%8B%A4%E9%99%B7%E9%98%B1%E5%BC%80%E9%99%A4%23) `337.8K 🔥` `NEW`
1. [日本自卫队要打仗](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%87%AA%E5%8D%AB%E9%98%9F%E8%A6%81%E6%89%93%E4%BB%97%23) `321.0K 🔥` `NEW`
1. [刘耀文裤子](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%A3%A4%E5%AD%90%23) `295.4K 🔥` `NEW`
1. [王楚钦王皓同时无奈](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%8E%8B%E7%9A%93%E5%90%8C%E6%97%B6%E6%97%A0%E5%A5%88%23) `263.9K 🔥` `NEW`
1. [苹果iOS27系列新功能](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CiOS27%E7%B3%BB%E5%88%97%E6%96%B0%E5%8A%9F%E8%83%BD%23) `260.7K 🔥` `NEW`
1. [周琼说严浩翔给了严军300万](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%90%BC%E8%AF%B4%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%BB%99%E4%BA%86%E4%B8%A5%E5%86%9B300%E4%B8%87%23) `260.7K 🔥` `NEW`
1. [严薇生活费 (Yan Wei living expenses)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E8%96%87%E7%94%9F%E6%B4%BB%E8%B4%B9%23) `260.7K 🔥` `NEW`
1. [王楚钦一脸不甘心](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%80%E8%84%B8%E4%B8%8D%E7%94%98%E5%BF%83%23) `260.5K 🔥` `NEW`
1. [高铁即将关门3岁男孩突然跑下车](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E5%8D%B3%E5%B0%86%E5%85%B3%E9%97%A83%E5%B2%81%E7%94%B7%E5%AD%A9%E7%AA%81%E7%84%B6%E8%B7%91%E4%B8%8B%E8%BD%A6%23) `232.1K 🔥` `NEW`
1. [严军涉嫌违法](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%86%9B%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%23) `227.9K 🔥` `NEW`
1. [曝严浩翔姐姐一个月花了二十多万](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%A7%90%E5%A7%90%E4%B8%80%E4%B8%AA%E6%9C%88%E8%8A%B1%E4%BA%86%E4%BA%8C%E5%8D%81%E5%A4%9A%E4%B8%87%23) `215.8K 🔥` `NEW`
1. [近视人的世界里全是猫](https://s.weibo.com/weibo?q=%23%E8%BF%91%E8%A7%86%E4%BA%BA%E7%9A%84%E4%B8%96%E7%95%8C%E9%87%8C%E5%85%A8%E6%98%AF%E7%8C%AB%23) `200.0K 🔥` `NEW`
1. [支付宝把便利店搞成球迷流水席](https://s.weibo.com/weibo?q=%23%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8A%8A%E4%BE%BF%E5%88%A9%E5%BA%97%E6%90%9E%E6%88%90%E7%90%83%E8%BF%B7%E6%B5%81%E6%B0%B4%E5%B8%AD%23) `199.9K 🔥` `NEW`
1. [48小时手搓脑机接口 意念控制轮椅](https://s.weibo.com/weibo?q=%2348%E5%B0%8F%E6%97%B6%E6%89%8B%E6%90%93%E8%84%91%E6%9C%BA%E6%8E%A5%E5%8F%A3%20%E6%84%8F%E5%BF%B5%E6%8E%A7%E5%88%B6%E8%BD%AE%E6%A4%85%23) `199.9K 🔥` `NEW`
1. [日本投降后将细菌战工具丢进海里](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8A%95%E9%99%8D%E5%90%8E%E5%B0%86%E7%BB%86%E8%8F%8C%E6%88%98%E5%B7%A5%E5%85%B7%E4%B8%A2%E8%BF%9B%E6%B5%B7%E9%87%8C%23) `199.8K 🔥` `NEW`
1. [女子大赞有工作人员劝阻站台吸烟](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%A4%A7%E8%B5%9E%E6%9C%89%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%8A%9D%E9%98%BB%E7%AB%99%E5%8F%B0%E5%90%B8%E7%83%9F%23) `199.6K 🔥` `NEW`
1. [莫氏鸡煲带火整条街有摊贩日入5000元 (Mo's chicken stew is served on fire and there are vendors all over the street earning NT$5,000 a day.)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%B8%A6%E7%81%AB%E6%95%B4%E6%9D%A1%E8%A1%97%E6%9C%89%E6%91%8A%E8%B4%A9%E6%97%A5%E5%85%A55000%E5%85%83%23) `199.5K 🔥` `NEW`
1. [女子吃榴莲后喝白酒呼吸衰竭](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%83%E6%A6%B4%E8%8E%B2%E5%90%8E%E5%96%9D%E7%99%BD%E9%85%92%E5%91%BC%E5%90%B8%E8%A1%B0%E7%AB%AD%23) `199.5K 🔥` `NEW`
1. [安宰贤说中国男团不在最好状态](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%AE%B0%E8%B4%A4%E8%AF%B4%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A2%E4%B8%8D%E5%9C%A8%E6%9C%80%E5%A5%BD%E7%8A%B6%E6%80%81%23) `198.6K 🔥` `NEW`
1. [国产千万级超跑秒售罄](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E5%8D%83%E4%B8%87%E7%BA%A7%E8%B6%85%E8%B7%91%E7%A7%92%E5%94%AE%E7%BD%84%23) `187.5K 🔥` `NEW`
1. [李梦两部恐怖片破亿](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%A2%A6%E4%B8%A4%E9%83%A8%E6%81%90%E6%80%96%E7%89%87%E7%A0%B4%E4%BA%BF%23) `183.6K 🔥` `NEW`
1. [严军回应网传出轨](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%86%9B%E5%9B%9E%E5%BA%94%E7%BD%91%E4%BC%A0%E5%87%BA%E8%BD%A8%23) `183.3K 🔥` `NEW`
1. [李小冉怼邓超说脸都不要了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%80%BC%E9%82%93%E8%B6%85%E8%AF%B4%E8%84%B8%E9%83%BD%E4%B8%8D%E8%A6%81%E4%BA%86%23) `179.9K 🔥` `NEW`
1. [刘浩存称从小看李晨跑男长大](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E7%A7%B0%E4%BB%8E%E5%B0%8F%E7%9C%8B%E6%9D%8E%E6%99%A8%E8%B7%91%E7%94%B7%E9%95%BF%E5%A4%A7%23) `176.1K 🔥` `NEW`
1. [76人抢七淘汰凯尔特人](https://s.weibo.com/weibo?q=%2376%E4%BA%BA%E6%8A%A2%E4%B8%83%E6%B7%98%E6%B1%B0%E5%87%AF%E5%B0%94%E7%89%B9%E4%BA%BA%23) `170.0K 🔥` `NEW`
1. [柳智敏Metgala](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8FMetgala%23) `170.0K 🔥` `NEW`
1. [我家那小子 (That boy of mine)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%23) `165.2K 🔥` `NEW`
1. [男乒9个败局8局只输2分](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%B9%929%E4%B8%AA%E8%B4%A5%E5%B1%808%E5%B1%80%E5%8F%AA%E8%BE%932%E5%88%86%23) `164.1K 🔥` `NEW`
1. [人到了一定年纪就会喜欢上的东西](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%88%B0%E4%BA%86%E4%B8%80%E5%AE%9A%E5%B9%B4%E7%BA%AA%E5%B0%B1%E4%BC%9A%E5%96%9C%E6%AC%A2%E4%B8%8A%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `155.9K 🔥` `NEW`
1. [中国台北主力疑遭袭胸事件已开启调查](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%E4%B8%BB%E5%8A%9B%E7%96%91%E9%81%AD%E8%A2%AD%E8%83%B8%E4%BA%8B%E4%BB%B6%E5%B7%B2%E5%BC%80%E5%90%AF%E8%B0%83%E6%9F%A5%23) `152.6K 🔥` `NEW`
1. [陈浚铭量身高](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%9A%E9%93%AD%E9%87%8F%E8%BA%AB%E9%AB%98%23) `147.0K 🔥` `NEW`
1. [张雪机车绝境翻盘对手气得直摆手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%BB%9D%E5%A2%83%E7%BF%BB%E7%9B%98%E5%AF%B9%E6%89%8B%E6%B0%94%E5%BE%97%E7%9B%B4%E6%91%86%E6%89%8B%23) `138.5K 🔥` `NEW`
1. [恩比德cos16年詹姆斯](https://s.weibo.com/weibo?q=%23%E6%81%A9%E6%AF%94%E5%BE%B7cos16%E5%B9%B4%E8%A9%B9%E5%A7%86%E6%96%AF%23) `120.6K 🔥` `NEW`
1. [iPhone18Pro最低配或不涨价 (iPhone 18 Pro has the lowest configuration or no price increase)](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%9C%80%E4%BD%8E%E9%85%8D%E6%88%96%E4%B8%8D%E6%B6%A8%E4%BB%B7%23) `117.6K 🔥`
1. [父母互相拍照6岁儿子失足坠崖 (Parents take photos of each other, 6-year-old son slips and falls off cliff)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E4%BA%92%E7%9B%B8%E6%8B%8D%E7%85%A76%E5%B2%81%E5%84%BF%E5%AD%90%E5%A4%B1%E8%B6%B3%E5%9D%A0%E5%B4%96%23) `188.8K 🔥` `-83%`

Updated at 2026-05-03 12:04:24

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
