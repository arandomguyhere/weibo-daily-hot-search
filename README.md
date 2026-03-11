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

1. [国防部回应日本部署远程导弹 (Ministry of National Defense responds to Japan's deployment of long-range missiles)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%98%B2%E9%83%A8%E5%9B%9E%E5%BA%94%E6%97%A5%E6%9C%AC%E9%83%A8%E7%BD%B2%E8%BF%9C%E7%A8%8B%E5%AF%BC%E5%BC%B9%23) `768.2K 🔥` `NEW`
1. [我的春招故事](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E6%98%A5%E6%8B%9B%E6%95%85%E4%BA%8B%23) `565.6K 🔥` `NEW`
1. [双人餐是需要两份主食饮料的](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%BA%BA%E9%A4%90%E6%98%AF%E9%9C%80%E8%A6%81%E4%B8%A4%E4%BB%BD%E4%B8%BB%E9%A3%9F%E9%A5%AE%E6%96%99%E7%9A%84%23) `529.7K 🔥` `NEW`
1. [奥迪宋斐明和微博王巍谈双料冠军](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%AA%E5%AE%8B%E6%96%90%E6%98%8E%E5%92%8C%E5%BE%AE%E5%8D%9A%E7%8E%8B%E5%B7%8D%E8%B0%88%E5%8F%8C%E6%96%99%E5%86%A0%E5%86%9B%23) `507.6K 🔥` `NEW`
1. [联合国16位专家呼吁日本道歉](https://s.weibo.com/weibo?q=%23%E8%81%94%E5%90%88%E5%9B%BD16%E4%BD%8D%E4%B8%93%E5%AE%B6%E5%91%BC%E5%90%81%E6%97%A5%E6%9C%AC%E9%81%93%E6%AD%89%23) `502.9K 🔥` `NEW`
1. [委员给反内卷支招](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E7%BB%99%E5%8F%8D%E5%86%85%E5%8D%B7%E6%94%AF%E6%8B%9B%23) `497.7K 🔥` `NEW`
1. [MiuMiu大秀刘浩存李庚希](https://s.weibo.com/weibo?q=%23MiuMiu%E5%A4%A7%E7%A7%80%E5%88%98%E6%B5%A9%E5%AD%98%E6%9D%8E%E5%BA%9A%E5%B8%8C%23) `491.0K 🔥` `NEW`
1. [iPhone18Pro外观上惊喜感或有限](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%A4%96%E8%A7%82%E4%B8%8A%E6%83%8A%E5%96%9C%E6%84%9F%E6%88%96%E6%9C%89%E9%99%90%23) `455.8K 🔥` `NEW`
1. [不二之臣](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BA%8C%E4%B9%8B%E8%87%A3%23) `451.4K 🔥` `NEW`
1. [我们的少年时代2开通官微](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E5%BC%80%E9%80%9A%E5%AE%98%E5%BE%AE%23) `404.4K 🔥` `NEW`
1. [Rookie开箱vlog (Rookie unboxing vlog)](https://s.weibo.com/weibo?q=%23Rookie%E5%BC%80%E7%AE%B1vlog%23) `393.1K 🔥` `NEW`
1. [孙颖莎练到双手撑桌休息](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%BB%83%E5%88%B0%E5%8F%8C%E6%89%8B%E6%92%91%E6%A1%8C%E4%BC%91%E6%81%AF%23) `392.6K 🔥` `NEW`
1. [蔡猛分析王曼昱爆冷输球原因](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%8C%9B%E5%88%86%E6%9E%90%E7%8E%8B%E6%9B%BC%E6%98%B1%E7%88%86%E5%86%B7%E8%BE%93%E7%90%83%E5%8E%9F%E5%9B%A0%23) `392.2K 🔥` `NEW`
1. [刘亦菲冷到攥拳头仍大方营业](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%86%B7%E5%88%B0%E6%94%A5%E6%8B%B3%E5%A4%B4%E4%BB%8D%E5%A4%A7%E6%96%B9%E8%90%A5%E4%B8%9A%23) `392.2K 🔥` `NEW`
1. [梁朝伟走势](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%9C%9D%E4%BC%9F%E8%B5%B0%E5%8A%BF%23) `391.6K 🔥` `NEW`
1. [怎么会有鸽子胖得像母鸡](https://s.weibo.com/weibo?q=%23%E6%80%8E%E4%B9%88%E4%BC%9A%E6%9C%89%E9%B8%BD%E5%AD%90%E8%83%96%E5%BE%97%E5%83%8F%E6%AF%8D%E9%B8%A1%23) `389.1K 🔥` `NEW`
1. [男子回应开电车5年跑100万公里](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E5%BC%80%E7%94%B5%E8%BD%A65%E5%B9%B4%E8%B7%91100%E4%B8%87%E5%85%AC%E9%87%8C%23) `389.1K 🔥` `NEW`
1. [苹果国补后双产品跌破4000元](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%9B%BD%E8%A1%A5%E5%90%8E%E5%8F%8C%E4%BA%A7%E5%93%81%E8%B7%8C%E7%A0%B44000%E5%85%83%23) `388.5K 🔥` `NEW`
1. [不二之臣岑森季明舒婚后采访](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BA%8C%E4%B9%8B%E8%87%A3%E5%B2%91%E6%A3%AE%E5%AD%A3%E6%98%8E%E8%88%92%E5%A9%9A%E5%90%8E%E9%87%87%E8%AE%BF%23) `388.1K 🔥` `NEW`
1. [小米车险承保公司小米持股超3成](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%BD%A6%E9%99%A9%E6%89%BF%E4%BF%9D%E5%85%AC%E5%8F%B8%E5%B0%8F%E7%B1%B3%E6%8C%81%E8%82%A1%E8%B6%853%E6%88%90%23) `387.6K 🔥` `NEW`
1. [金店店员谈金不响银不跳 (The gold shop clerk talks about gold not ringing and silver not dancing)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%BA%97%E5%BA%97%E5%91%98%E8%B0%88%E9%87%91%E4%B8%8D%E5%93%8D%E9%93%B6%E4%B8%8D%E8%B7%B3%23) `387.4K 🔥` `NEW`
1. [建议整治同一航班同一张票两个价 (It is recommended to correct the two prices for the same ticket on the same flight.)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%95%B4%E6%B2%BB%E5%90%8C%E4%B8%80%E8%88%AA%E7%8F%AD%E5%90%8C%E4%B8%80%E5%BC%A0%E7%A5%A8%E4%B8%A4%E4%B8%AA%E4%BB%B7%23) `1.0M 🔥` `+35%`
1. [80元Lululemon发圈卖断货](https://s.weibo.com/weibo?q=%2380%E5%85%83Lululemon%E5%8F%91%E5%9C%88%E5%8D%96%E6%96%AD%E8%B4%A7%23) `571.9K 🔥` `+124%`
1. [伊朗下起毒雨](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%8B%E8%B5%B7%E6%AF%92%E9%9B%A8%23) `567.2K 🔥` `+78%`
1. [豆包万能P图口令](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E4%B8%87%E8%83%BDP%E5%9B%BE%E5%8F%A3%E4%BB%A4%23) `560.9K 🔥` `+340%`
1. [十五五蓝图中的职业新图景 (New career prospects in the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%93%9D%E5%9B%BE%E4%B8%AD%E7%9A%84%E8%81%8C%E4%B8%9A%E6%96%B0%E5%9B%BE%E6%99%AF%23) `552.6K 🔥` `+123%`
1. [华师大回应师范本科不再输出教师](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%B8%88%E5%A4%A7%E5%9B%9E%E5%BA%94%E5%B8%88%E8%8C%83%E6%9C%AC%E7%A7%91%E4%B8%8D%E5%86%8D%E8%BE%93%E5%87%BA%E6%95%99%E5%B8%88%23) `545.7K 🔥` `+457%`
1. [甜茶关晓彤合照](https://s.weibo.com/weibo?q=%23%E7%94%9C%E8%8C%B6%E5%85%B3%E6%99%93%E5%BD%A4%E5%90%88%E7%85%A7%23) `542.4K 🔥` `+244%`
1. [伊朗总统之子称最高领袖平安](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E4%B9%8B%E5%AD%90%E7%A7%B0%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%B9%B3%E5%AE%89%23) `537.5K 🔥` `+150%`
1. [建议新增元宵节假日](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%96%B0%E5%A2%9E%E5%85%83%E5%AE%B5%E8%8A%82%E5%81%87%E6%97%A5%23) `528.4K 🔥` `+116%`
1. [逐玉 赋魅](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E8%B5%8B%E9%AD%85%23) `520.2K 🔥` `+124%`
1. [外甥正月偷偷剪发舅舅气到血压飙升 (My nephew secretly cuts his hair during the first month of the year, and his uncle is so angry that his blood pressure soars.)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%94%A5%E6%AD%A3%E6%9C%88%E5%81%B7%E5%81%B7%E5%89%AA%E5%8F%91%E8%88%85%E8%88%85%E6%B0%94%E5%88%B0%E8%A1%80%E5%8E%8B%E9%A3%99%E5%8D%87%23) `519.1K 🔥` `+117%`
1. [AG 首发](https://s.weibo.com/weibo?q=%23AG%20%E9%A6%96%E5%8F%91%23) `509.7K 🔥` `+129%`
1. [取微信名要慎重 (Be careful when choosing a WeChat name)](https://s.weibo.com/weibo?q=%23%E5%8F%96%E5%BE%AE%E4%BF%A1%E5%90%8D%E8%A6%81%E6%85%8E%E9%87%8D%23) `463.4K 🔥` `+311%`
1. [张凌赫回应颜值出圈](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E9%A2%9C%E5%80%BC%E5%87%BA%E5%9C%88%23) `433.5K 🔥` `+101%`
1. [BBA车价大降销量回温难](https://s.weibo.com/weibo?q=%23BBA%E8%BD%A6%E4%BB%B7%E5%A4%A7%E9%99%8D%E9%94%80%E9%87%8F%E5%9B%9E%E6%B8%A9%E9%9A%BE%23) `427.9K 🔥` `+268%`
1. [金店集体涨价](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%BA%97%E9%9B%86%E4%BD%93%E6%B6%A8%E4%BB%B7%23) `421.0K 🔥` `+218%`
1. [女子将老公送金镯扔地上又响又跳](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%86%E8%80%81%E5%85%AC%E9%80%81%E9%87%91%E9%95%AF%E6%89%94%E5%9C%B0%E4%B8%8A%E5%8F%88%E5%93%8D%E5%8F%88%E8%B7%B3%23) `394.1K 🔥` `+116%`
1. [原来何老师从小就是何老师了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%BD%95%E8%80%81%E5%B8%88%E4%BB%8E%E5%B0%8F%E5%B0%B1%E6%98%AF%E4%BD%95%E8%80%81%E5%B8%88%E4%BA%86%23) `393.2K 🔥` `+250%`
1. [要对钱有概念 (Have a concept of money)](https://s.weibo.com/weibo?q=%23%E8%A6%81%E5%AF%B9%E9%92%B1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `391.3K 🔥` `+334%`
1. [逐玉 三对CP](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E4%B8%89%E5%AF%B9CP%23) `391.3K 🔥` `+243%`
1. [刘浩存 还有我的老鼠干](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%20%E8%BF%98%E6%9C%89%E6%88%91%E7%9A%84%E8%80%81%E9%BC%A0%E5%B9%B2%23) `390.9K 🔥` `+163%`
1. [TF后代大战EXO老祖](https://s.weibo.com/weibo?q=%23TF%E5%90%8E%E4%BB%A3%E5%A4%A7%E6%88%98EXO%E8%80%81%E7%A5%96%23) `390.6K 🔥` `+243%`
1. [恋与深空委托 1300一小时](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%A7%94%E6%89%98%201300%E4%B8%80%E5%B0%8F%E6%97%B6%23) `390.2K 🔥` `+222%`
1. [张凌赫伴手礼 (Zhang Linghe souvenirs)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `389.5K 🔥` `+277%`
1. [政协会议圆满完成各项议程](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%8D%8F%E4%BC%9A%E8%AE%AE%E5%9C%86%E6%BB%A1%E5%AE%8C%E6%88%90%E5%90%84%E9%A1%B9%E8%AE%AE%E7%A8%8B%23) `575.6K 🔥`
1. [华莱士正式宣布退市 (Wallace officially announced its delisting)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%8E%B1%E5%A3%AB%E6%AD%A3%E5%BC%8F%E5%AE%A3%E5%B8%83%E9%80%80%E5%B8%82%23) `572.6K 🔥`
1. [白玉兰预测](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E9%A2%84%E6%B5%8B%23) `490.2K 🔥`
1. [井胧酒吧开业披哥都来支持了](https://s.weibo.com/weibo?q=%23%E4%BA%95%E8%83%A7%E9%85%92%E5%90%A7%E5%BC%80%E4%B8%9A%E6%8A%AB%E5%93%A5%E9%83%BD%E6%9D%A5%E6%94%AF%E6%8C%81%E4%BA%86%23) `389.8K 🔥`
1. [建议允许未休年假两年内结转使用 (It is recommended that untaken annual leave be allowed to be carried forward within two years.)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%85%81%E8%AE%B8%E6%9C%AA%E4%BC%91%E5%B9%B4%E5%81%87%E4%B8%A4%E5%B9%B4%E5%86%85%E7%BB%93%E8%BD%AC%E4%BD%BF%E7%94%A8%23) `554.1K 🔥` `-48%`

Updated at 2026-03-11 16:57:14

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
