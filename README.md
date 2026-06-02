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

1. [半个娱乐圈宣传翘楚 (Half of the entertainment industry's publicity leaders)](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E4%B8%AA%E5%A8%B1%E4%B9%90%E5%9C%88%E5%AE%A3%E4%BC%A0%E7%BF%98%E6%A5%9A%23) `1.3M 🔥` `NEW`
1. [财政部下达999亿育儿补贴补助资金](https://s.weibo.com/weibo?q=%23%E8%B4%A2%E6%94%BF%E9%83%A8%E4%B8%8B%E8%BE%BE999%E4%BA%BF%E8%82%B2%E5%84%BF%E8%A1%A5%E8%B4%B4%E8%A1%A5%E5%8A%A9%E8%B5%84%E9%87%91%23) `850.8K 🔥` `NEW`
1. [还有5天高考](https://s.weibo.com/weibo?q=%23%E8%BF%98%E6%9C%895%E5%A4%A9%E9%AB%98%E8%80%83%23) `836.8K 🔥` `NEW`
1. [建议爬山不要买白色雨衣](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%88%AC%E5%B1%B1%E4%B8%8D%E8%A6%81%E4%B9%B0%E7%99%BD%E8%89%B2%E9%9B%A8%E8%A1%A3%23) `834.7K 🔥` `NEW`
1. [其实人是一根香蕉](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E4%BA%BA%E6%98%AF%E4%B8%80%E6%A0%B9%E9%A6%99%E8%95%89%23) `833.8K 🔥` `NEW`
1. [原来有的演唱会按身份证分位置](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%9C%89%E7%9A%84%E6%BC%94%E5%94%B1%E4%BC%9A%E6%8C%89%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%88%86%E4%BD%8D%E7%BD%AE%23) `832.3K 🔥` `NEW`
1. [翘楚热度](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E7%83%AD%E5%BA%A6%23) `697.0K 🔥` `NEW`
1. [陈粒演唱会情侣假求婚](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%B2%92%E6%BC%94%E5%94%B1%E4%BC%9A%E6%83%85%E4%BE%A3%E5%81%87%E6%B1%82%E5%A9%9A%23) `605.6K 🔥` `NEW`
1. [糖尿病并不是单纯血糖高了](https://s.weibo.com/weibo?q=%23%E7%B3%96%E5%B0%BF%E7%97%85%E5%B9%B6%E4%B8%8D%E6%98%AF%E5%8D%95%E7%BA%AF%E8%A1%80%E7%B3%96%E9%AB%98%E4%BA%86%23) `604.5K 🔥` `NEW`
1. [梅西世界杯住单人间](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E4%B8%96%E7%95%8C%E6%9D%AF%E4%BD%8F%E5%8D%95%E4%BA%BA%E9%97%B4%23) `600.3K 🔥` `NEW`
1. [预计今年共安排育儿补贴约1100亿 (It is expected that a total of about 110 billion yuan in childcare subsidies will be arranged this year)](https://s.weibo.com/weibo?q=%23%E9%A2%84%E8%AE%A1%E4%BB%8A%E5%B9%B4%E5%85%B1%E5%AE%89%E6%8E%92%E8%82%B2%E5%84%BF%E8%A1%A5%E8%B4%B4%E7%BA%A61100%E4%BA%BF%23) `595.8K 🔥` `NEW`
1. [谢天宇偷看路人裙底](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A4%A9%E5%AE%87%E5%81%B7%E7%9C%8B%E8%B7%AF%E4%BA%BA%E8%A3%99%E5%BA%95%23) `592.9K 🔥` `NEW`
1. [因为一个人没文化而祛魅](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%B2%A1%E6%96%87%E5%8C%96%E8%80%8C%E7%A5%9B%E9%AD%85%23) `587.8K 🔥` `NEW`
1. [挪威深海发现载有中国瓷器的沉船](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E6%B7%B1%E6%B5%B7%E5%8F%91%E7%8E%B0%E8%BD%BD%E6%9C%89%E4%B8%AD%E5%9B%BD%E7%93%B7%E5%99%A8%E7%9A%84%E6%B2%89%E8%88%B9%23) `582.1K 🔥` `NEW`
1. [iPhone18Pro电池容量曝光](https://s.weibo.com/weibo?q=%23iPhone18Pro%E7%94%B5%E6%B1%A0%E5%AE%B9%E9%87%8F%E6%9B%9D%E5%85%89%23) `577.5K 🔥` `NEW`
1. [严浩翔的安全带不是P的](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9A%84%E5%AE%89%E5%85%A8%E5%B8%A6%E4%B8%8D%E6%98%AFP%E7%9A%84%23) `576.4K 🔥` `NEW`
1. [父母离婚孩子压岁钱账户20多万变40元](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E7%A6%BB%E5%A9%9A%E5%AD%A9%E5%AD%90%E5%8E%8B%E5%B2%81%E9%92%B1%E8%B4%A6%E6%88%B720%E5%A4%9A%E4%B8%87%E5%8F%9840%E5%85%83%23) `575.1K 🔥` `NEW`
1. [保洁员学生公寓垃圾桶捡200克金条](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%B4%81%E5%91%98%E5%AD%A6%E7%94%9F%E5%85%AC%E5%AF%93%E5%9E%83%E5%9C%BE%E6%A1%B6%E6%8D%A1200%E5%85%8B%E9%87%91%E6%9D%A1%23) `575.1K 🔥` `NEW`
1. [李思潼 你是男生不可以靠这么近](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%80%9D%E6%BD%BC%20%E4%BD%A0%E6%98%AF%E7%94%B7%E7%94%9F%E4%B8%8D%E5%8F%AF%E4%BB%A5%E9%9D%A0%E8%BF%99%E4%B9%88%E8%BF%91%23) `575.1K 🔥` `NEW`
1. [2026KPL夏季赛赛事日历](https://s.weibo.com/weibo?q=%232026KPL%E5%A4%8F%E5%AD%A3%E8%B5%9B%E8%B5%9B%E4%BA%8B%E6%97%A5%E5%8E%86%23) `527.8K 🔥` `NEW`
1. [四省再被中央生态环保督察点名 (Four provinces were again named by the Central Ecological and Environmental Protection Inspectorate)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E7%9C%81%E5%86%8D%E8%A2%AB%E4%B8%AD%E5%A4%AE%E7%94%9F%E6%80%81%E7%8E%AF%E4%BF%9D%E7%9D%A3%E5%AF%9F%E7%82%B9%E5%90%8D%23) `494.5K 🔥` `NEW`
1. [奚梦瑶世纪婚礼的最大遗憾](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E4%B8%96%E7%BA%AA%E5%A9%9A%E7%A4%BC%E7%9A%84%E6%9C%80%E5%A4%A7%E9%81%97%E6%86%BE%23) `494.4K 🔥` `NEW`
1. [icon](https://s.weibo.com/weibo?q=%23icon%23) `494.2K 🔥` `NEW`
1. [二本毕业生群体面临的现实](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%9C%AC%E6%AF%95%E4%B8%9A%E7%94%9F%E7%BE%A4%E4%BD%93%E9%9D%A2%E4%B8%B4%E7%9A%84%E7%8E%B0%E5%AE%9E%23) `475.0K 🔥` `NEW`
1. [王嘉尔与何猷君婚礼嘉宾合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E4%B8%8E%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A9%9A%E7%A4%BC%E5%98%89%E5%AE%BE%E5%90%88%E7%85%A7%23) `425.9K 🔥` `NEW`
1. [长十二乙多项新技术实现突破](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%8D%81%E4%BA%8C%E4%B9%99%E5%A4%9A%E9%A1%B9%E6%96%B0%E6%8A%80%E6%9C%AF%E5%AE%9E%E7%8E%B0%E7%AA%81%E7%A0%B4%23) `299.7K 🔥` `NEW`
1. [翘楚质感](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E8%B4%A8%E6%84%9F%23) `298.6K 🔥` `NEW`
1. [俄对乌克兰全境发动空袭](https://s.weibo.com/weibo?q=%23%E4%BF%84%E5%AF%B9%E4%B9%8C%E5%85%8B%E5%85%B0%E5%85%A8%E5%A2%83%E5%8F%91%E5%8A%A8%E7%A9%BA%E8%A2%AD%23) `296.7K 🔥` `NEW`
1. [油价大涨了](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E5%A4%A7%E6%B6%A8%E4%BA%86%23) `292.8K 🔥` `NEW`
1. [4岁哥哥带2岁弟弟夜骑5公里](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%93%A5%E5%93%A5%E5%B8%A62%E5%B2%81%E5%BC%9F%E5%BC%9F%E5%A4%9C%E9%AA%915%E5%85%AC%E9%87%8C%23) `292.3K 🔥` `NEW`
1. [儿子自闭症妻子确诊乳腺癌后丈夫提离婚 (Husband files for divorce after son with autism, wife diagnosed with breast cancer)](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E8%87%AA%E9%97%AD%E7%97%87%E5%A6%BB%E5%AD%90%E7%A1%AE%E8%AF%8A%E4%B9%B3%E8%85%BA%E7%99%8C%E5%90%8E%E4%B8%88%E5%A4%AB%E6%8F%90%E7%A6%BB%E5%A9%9A%23) `290.6K 🔥` `NEW`
1. [汪峰森林北带孩子聚餐](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%E6%A3%AE%E6%9E%97%E5%8C%97%E5%B8%A6%E5%AD%A9%E5%AD%90%E8%81%9A%E9%A4%90%23) `288.3K 🔥` `NEW`
1. [张杰工作室警告侵权方](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%AD%A6%E5%91%8A%E4%BE%B5%E6%9D%83%E6%96%B9%23) `286.6K 🔥` `NEW`
1. [蛋糕可以接地气但不可以接地府](https://s.weibo.com/weibo?q=%23%E8%9B%8B%E7%B3%95%E5%8F%AF%E4%BB%A5%E6%8E%A5%E5%9C%B0%E6%B0%94%E4%BD%86%E4%B8%8D%E5%8F%AF%E4%BB%A5%E6%8E%A5%E5%9C%B0%E5%BA%9C%23) `286.3K 🔥` `NEW`
1. [王菲和谢霆锋最好嗑的地方](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%92%8C%E8%B0%A2%E9%9C%86%E9%94%8B%E6%9C%80%E5%A5%BD%E5%97%91%E7%9A%84%E5%9C%B0%E6%96%B9%23) `283.4K 🔥` `NEW`
1. [山西省省长下矿井检查](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%9C%81%E7%9C%81%E9%95%BF%E4%B8%8B%E7%9F%BF%E4%BA%95%E6%A3%80%E6%9F%A5%23) `280.7K 🔥` `NEW`
1. [喜欢你6素人颜值给我看舒服了](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E4%BD%A06%E7%B4%A0%E4%BA%BA%E9%A2%9C%E5%80%BC%E7%BB%99%E6%88%91%E7%9C%8B%E8%88%92%E6%9C%8D%E4%BA%86%23) `280.1K 🔥` `NEW`
1. [王楚钦5G冲浪](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A65G%E5%86%B2%E6%B5%AA%23) `278.1K 🔥` `NEW`
1. [马刺将提前续约文班亚马](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BA%E5%B0%86%E6%8F%90%E5%89%8D%E7%BB%AD%E7%BA%A6%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%23) `274.7K 🔥` `NEW`
1. [建议能力范围内一次性买到最好的](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E8%83%BD%E5%8A%9B%E8%8C%83%E5%9B%B4%E5%86%85%E4%B8%80%E6%AC%A1%E6%80%A7%E4%B9%B0%E5%88%B0%E6%9C%80%E5%A5%BD%E7%9A%84%23) `273.5K 🔥` `NEW`
1. [陈都灵人脉 (Chen Duling’s connections)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E4%BA%BA%E8%84%89%23) `271.8K 🔥` `NEW`
1. [AI预判了今年的高考](https://s.weibo.com/weibo?q=%23AI%E9%A2%84%E5%88%A4%E4%BA%86%E4%BB%8A%E5%B9%B4%E7%9A%84%E9%AB%98%E8%80%83%23) `268.5K 🔥` `NEW`
1. [翘楚配音](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E9%85%8D%E9%9F%B3%23) `267.0K 🔥` `NEW`
1. [蔡徐坤签售会](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E7%AD%BE%E5%94%AE%E4%BC%9A%23) `265.3K 🔥` `NEW`
1. [奚梦瑶晒婚礼照片](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E6%99%92%E5%A9%9A%E7%A4%BC%E7%85%A7%E7%89%87%23) `584.0K 🔥` `+109%`
1. [陈妍希六一晒孩子照片](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%85%AD%E4%B8%80%E6%99%92%E5%AD%A9%E5%AD%90%E7%85%A7%E7%89%87%23) `300.3K 🔥`
1. [于正 晚晚](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%20%E6%99%9A%E6%99%9A%23) `283.5K 🔥`
1. [何超莲评论祝福何猷君](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%8E%B2%E8%AF%84%E8%AE%BA%E7%A5%9D%E7%A6%8F%E4%BD%95%E7%8C%B7%E5%90%9B%23) `276.0K 🔥`
1. [库里签约李宁](https://s.weibo.com/weibo?q=%23%E5%BA%93%E9%87%8C%E7%AD%BE%E7%BA%A6%E6%9D%8E%E5%AE%81%23) `294.4K 🔥` `-58%`
1. [虞书欣复刻小兰花施法手势](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%A4%8D%E5%88%BB%E5%B0%8F%E5%85%B0%E8%8A%B1%E6%96%BD%E6%B3%95%E6%89%8B%E5%8A%BF%23) `269.7K 🔥` `-59%`

Updated at 2026-06-02 14:50:53

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
