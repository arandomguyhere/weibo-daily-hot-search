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

1. [四川长宁地震](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E9%95%BF%E5%AE%81%E5%9C%B0%E9%9C%87%23) `2.1M 🔥` `NEW`
1. [扶老人遭索赔10万店主儿子发声](https://s.weibo.com/weibo?q=%23%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%9410%E4%B8%87%E5%BA%97%E4%B8%BB%E5%84%BF%E5%AD%90%E5%8F%91%E5%A3%B0%23) `2.0M 🔥` `NEW`
1. [地震预警 吓晕](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%9C%87%E9%A2%84%E8%AD%A6%20%E5%90%93%E6%99%95%23) `1.4M 🔥` `NEW`
1. [长宁地震预警误报](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%AE%81%E5%9C%B0%E9%9C%87%E9%A2%84%E8%AD%A6%E8%AF%AF%E6%8A%A5%23) `1.2M 🔥` `NEW`
1. [无座票为何和二等座同价](https://s.weibo.com/weibo?q=%23%E6%97%A0%E5%BA%A7%E7%A5%A8%E4%B8%BA%E4%BD%95%E5%92%8C%E4%BA%8C%E7%AD%89%E5%BA%A7%E5%90%8C%E4%BB%B7%23) `1.1M 🔥` `NEW`
1. [这些叫不出来的东西真有名字](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E5%8F%AB%E4%B8%8D%E5%87%BA%E6%9D%A5%E7%9A%84%E4%B8%9C%E8%A5%BF%E7%9C%9F%E6%9C%89%E5%90%8D%E5%AD%97%23) `1.1M 🔥` `NEW`
1. [花开锦绣女主被指双标](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E5%A5%B3%E4%B8%BB%E8%A2%AB%E6%8C%87%E5%8F%8C%E6%A0%87%23) `623.7K 🔥` `NEW`
1. [105岁老妈说85岁儿子这辈子完了](https://s.weibo.com/weibo?q=%23105%E5%B2%81%E8%80%81%E5%A6%88%E8%AF%B485%E5%B2%81%E5%84%BF%E5%AD%90%E8%BF%99%E8%BE%88%E5%AD%90%E5%AE%8C%E4%BA%86%23) `590.4K 🔥` `NEW`
1. [消杀公司用敌敌畏给连锁餐厅消杀](https://s.weibo.com/weibo?q=%23%E6%B6%88%E6%9D%80%E5%85%AC%E5%8F%B8%E7%94%A8%E6%95%8C%E6%95%8C%E7%95%8F%E7%BB%99%E8%BF%9E%E9%94%81%E9%A4%90%E5%8E%85%E6%B6%88%E6%9D%80%23) `559.7K 🔥` `NEW`
1. [韩沛颖让王晓晨道歉](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B2%9B%E9%A2%96%E8%AE%A9%E7%8E%8B%E6%99%93%E6%99%A8%E9%81%93%E6%AD%89%23) `543.2K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `539.8K 🔥` `NEW`
1. [被裁硕士生称一天要打五六千个螺丝](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%A3%81%E7%A1%95%E5%A3%AB%E7%94%9F%E7%A7%B0%E4%B8%80%E5%A4%A9%E8%A6%81%E6%89%93%E4%BA%94%E5%85%AD%E5%8D%83%E4%B8%AA%E8%9E%BA%E4%B8%9D%23) `463.2K 🔥` `NEW`
1. [四川长宁地震监控画面晃动明显](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E9%95%BF%E5%AE%81%E5%9C%B0%E9%9C%87%E7%9B%91%E6%8E%A7%E7%94%BB%E9%9D%A2%E6%99%83%E5%8A%A8%E6%98%8E%E6%98%BE%23) `231.5K 🔥` `NEW`
1. [千万不要冲动买养老房](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%86%B2%E5%8A%A8%E4%B9%B0%E5%85%BB%E8%80%81%E6%88%BF%23) `231.2K 🔥` `NEW`
1. [阿信抓到李现章若楠爬墙](https://s.weibo.com/weibo?q=%23%E9%98%BF%E4%BF%A1%E6%8A%93%E5%88%B0%E6%9D%8E%E7%8E%B0%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%88%AC%E5%A2%99%23) `231.0K 🔥` `NEW`
1. [官方回应长宁地震预警偏差](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E9%95%BF%E5%AE%81%E5%9C%B0%E9%9C%87%E9%A2%84%E8%AD%A6%E5%81%8F%E5%B7%AE%23) `230.9K 🔥` `NEW`
1. [早春晴朗will选刘畅好对味](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97will%E9%80%89%E5%88%98%E7%95%85%E5%A5%BD%E5%AF%B9%E5%91%B3%23) `230.7K 🔥` `NEW`
1. [派出所回应扶老人被索赔10万事件](https://s.weibo.com/weibo?q=%23%E6%B4%BE%E5%87%BA%E6%89%80%E5%9B%9E%E5%BA%94%E6%89%B6%E8%80%81%E4%BA%BA%E8%A2%AB%E7%B4%A2%E8%B5%9410%E4%B8%87%E4%BA%8B%E4%BB%B6%23) `229.5K 🔥` `NEW`
1. [家长想换座被拒后指责女生书白读了](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E6%83%B3%E6%8D%A2%E5%BA%A7%E8%A2%AB%E6%8B%92%E5%90%8E%E6%8C%87%E8%B4%A3%E5%A5%B3%E7%94%9F%E4%B9%A6%E7%99%BD%E8%AF%BB%E4%BA%86%23) `228.0K 🔥` `NEW`
1. [地震预警](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%9C%87%E9%A2%84%E8%AD%A6%23) `225.5K 🔥` `NEW`
1. [金晨瘦成这样居然还有肌肉](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E7%98%A6%E6%88%90%E8%BF%99%E6%A0%B7%E5%B1%85%E7%84%B6%E8%BF%98%E6%9C%89%E8%82%8C%E8%82%89%23) `220.3K 🔥` `NEW`
1. [扶老人遭索赔10万女子身体严重不适](https://s.weibo.com/weibo?q=%23%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%9410%E4%B8%87%E5%A5%B3%E5%AD%90%E8%BA%AB%E4%BD%93%E4%B8%A5%E9%87%8D%E4%B8%8D%E9%80%82%23) `211.6K 🔥` `NEW`
1. [金价三个月新高](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%89%E4%B8%AA%E6%9C%88%E6%96%B0%E9%AB%98%23) `138.6K 🔥` `NEW`
1. [张睿披哥一公唯一出圈舞台](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E6%8A%AB%E5%93%A5%E4%B8%80%E5%85%AC%E5%94%AF%E4%B8%80%E5%87%BA%E5%9C%88%E8%88%9E%E5%8F%B0%23) `135.6K 🔥` `NEW`
1. [女子被男网友用AI合成照胁迫](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E7%94%B7%E7%BD%91%E5%8F%8B%E7%94%A8AI%E5%90%88%E6%88%90%E7%85%A7%E8%83%81%E8%BF%AB%23) `117.4K 🔥` `NEW`
1. [2万件中央救灾物资支持广西](https://s.weibo.com/weibo?q=%232%E4%B8%87%E4%BB%B6%E4%B8%AD%E5%A4%AE%E6%95%91%E7%81%BE%E7%89%A9%E8%B5%84%E6%94%AF%E6%8C%81%E5%B9%BF%E8%A5%BF%23) `1.4M 🔥` `+118%`
1. [张凌赫与你解锁超过瘾VIP新品](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%8E%E4%BD%A0%E8%A7%A3%E9%94%81%E8%B6%85%E8%BF%87%E7%98%BEVIP%E6%96%B0%E5%93%81%23) `1.1M 🔥` `+124%`
1. [宋亚轩 得物账号](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%20%E5%BE%97%E7%89%A9%E8%B4%A6%E5%8F%B7%23) `526.6K 🔥` `+53%`
1. [张韶涵因心脏病找母亲要医疗费未果](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E5%9B%A0%E5%BF%83%E8%84%8F%E7%97%85%E6%89%BE%E6%AF%8D%E4%BA%B2%E8%A6%81%E5%8C%BB%E7%96%97%E8%B4%B9%E6%9C%AA%E6%9E%9C%23) `510.9K 🔥` `+42%`
1. [羞答答的机器人跑了第一](https://s.weibo.com/weibo?q=%23%E7%BE%9E%E7%AD%94%E7%AD%94%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B7%91%E4%BA%86%E7%AC%AC%E4%B8%80%23) `231.6K 🔥` `+49%`
1. [韩沛颖说刘浩存14岁就跟某某某导了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B2%9B%E9%A2%96%E8%AF%B4%E5%88%98%E6%B5%A9%E5%AD%9814%E5%B2%81%E5%B0%B1%E8%B7%9F%E6%9F%90%E6%9F%90%E6%9F%90%E5%AF%BC%E4%BA%86%23) `231.4K 🔥` `+54%`
1. [四十多岁女丁克想生孩子](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%8D%81%E5%A4%9A%E5%B2%81%E5%A5%B3%E4%B8%81%E5%85%8B%E6%83%B3%E7%94%9F%E5%AD%A9%E5%AD%90%23) `231.3K 🔥` `+69%`
1. [父亲直播目睹儿子篮球赛倒地后离世](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E7%9B%B4%E6%92%AD%E7%9B%AE%E7%9D%B9%E5%84%BF%E5%AD%90%E7%AF%AE%E7%90%83%E8%B5%9B%E5%80%92%E5%9C%B0%E5%90%8E%E7%A6%BB%E4%B8%96%23) `225.6K 🔥` `+123%`
1. [六级 写译我讨厌你](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%20%E5%86%99%E8%AF%91%E6%88%91%E8%AE%A8%E5%8E%8C%E4%BD%A0%23) `216.1K 🔥` `+113%`
1. [韩红基金会救护车供应商大门紧闭](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E6%95%91%E6%8A%A4%E8%BD%A6%E4%BE%9B%E5%BA%94%E5%95%86%E5%A4%A7%E9%97%A8%E7%B4%A7%E9%97%AD%23) `188.0K 🔥` `+86%`
1. [李登科聊金晨退圈](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E8%81%8A%E9%87%91%E6%99%A8%E9%80%80%E5%9C%88%23) `184.0K 🔥` `+46%`
1. [张韶涵演唱会突发心脏不适](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E7%AA%81%E5%8F%91%E5%BF%83%E8%84%8F%E4%B8%8D%E9%80%82%23) `561.5K 🔥`
1. [张元英走路姿势](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E8%B5%B0%E8%B7%AF%E5%A7%BF%E5%8A%BF%23) `230.4K 🔥`
1. [阿尔瓦雷斯 彻底闹掰](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%B0%94%E7%93%A6%E9%9B%B7%E6%96%AF%20%E5%BD%BB%E5%BA%95%E9%97%B9%E6%8E%B0%23) `229.1K 🔥`
1. [白鹿曾买了835张宋雨琦数字专辑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9B%BE%E4%B9%B0%E4%BA%86835%E5%BC%A0%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%95%B0%E5%AD%97%E4%B8%93%E8%BE%91%23) `227.3K 🔥`
1. [李昀锐可以去参加披荆斩棘了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%8F%AF%E4%BB%A5%E5%8E%BB%E5%8F%82%E5%8A%A0%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%BA%86%23) `121.2K 🔥`
1. [宋亚轩身上没有展示位了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%BA%AB%E4%B8%8A%E6%B2%A1%E6%9C%89%E5%B1%95%E7%A4%BA%E4%BD%8D%E4%BA%86%23) `115.2K 🔥`
1. [四六级成绩](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%E6%88%90%E7%BB%A9%23) `507.3K 🔥` `-55%`
1. [破产姐妹史上最长售后](https://s.weibo.com/weibo?q=%23%E7%A0%B4%E4%BA%A7%E5%A7%90%E5%A6%B9%E5%8F%B2%E4%B8%8A%E6%9C%80%E9%95%BF%E5%94%AE%E5%90%8E%23) `287.5K 🔥` `-32%`
1. [从140瘦到了95斤](https://s.weibo.com/weibo?q=%23%E4%BB%8E140%E7%98%A6%E5%88%B0%E4%BA%8695%E6%96%A4%23) `231.2K 🔥` `-64%`
1. [亲密关系和婚育制度绑定太深](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E5%92%8C%E5%A9%9A%E8%82%B2%E5%88%B6%E5%BA%A6%E7%BB%91%E5%AE%9A%E5%A4%AA%E6%B7%B1%23) `230.8K 🔥` `-64%`
1. [美债风暴席卷全球](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%80%BA%E9%A3%8E%E6%9A%B4%E5%B8%AD%E5%8D%B7%E5%85%A8%E7%90%83%23) `230.7K 🔥` `-72%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `226.3K 🔥` `-65%`
1. [傅首尔前夫发文怼留几手](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E5%89%8D%E5%A4%AB%E5%8F%91%E6%96%87%E6%80%BC%E7%95%99%E5%87%A0%E6%89%8B%23) `207.4K 🔥` `-36%`
1. [一定要珍惜你身体里尚存的欲望](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%9A%E8%A6%81%E7%8F%8D%E6%83%9C%E4%BD%A0%E8%BA%AB%E4%BD%93%E9%87%8C%E5%B0%9A%E5%AD%98%E7%9A%84%E6%AC%B2%E6%9C%9B%23) `170.6K 🔥` `-54%`

Updated at 2026-08-24 10:07:01

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
