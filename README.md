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

1. [前2月外贸交出提气答卷 (Foreign trade in the first two months handed over answers to improve the situation)](https://s.weibo.com/weibo?q=%23%E5%89%8D2%E6%9C%88%E5%A4%96%E8%B4%B8%E4%BA%A4%E5%87%BA%E6%8F%90%E6%B0%94%E7%AD%94%E5%8D%B7%23) `704.1K 🔥` `NEW`
1. [代表揣着的红色笔记本里记了啥](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%A1%A8%E6%8F%A3%E7%9D%80%E7%9A%84%E7%BA%A2%E8%89%B2%E7%AC%94%E8%AE%B0%E6%9C%AC%E9%87%8C%E8%AE%B0%E4%BA%86%E5%95%A5%23) `703.4K 🔥` `NEW`
1. [逐玉 头纱](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%A4%B4%E7%BA%B1%23) `703.2K 🔥` `NEW`
1. [逐玉追剧团](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E8%BF%BD%E5%89%A7%E5%9B%A2%23) `375.3K 🔥` `NEW`
1. [200元就能买演员AI换口型视频](https://s.weibo.com/weibo?q=%23200%E5%85%83%E5%B0%B1%E8%83%BD%E4%B9%B0%E6%BC%94%E5%91%98AI%E6%8D%A2%E5%8F%A3%E5%9E%8B%E8%A7%86%E9%A2%91%23) `138.0K 🔥` `NEW`
1. [入职大疆1个月被发了5次钱](https://s.weibo.com/weibo?q=%23%E5%85%A5%E8%81%8C%E5%A4%A7%E7%96%861%E4%B8%AA%E6%9C%88%E8%A2%AB%E5%8F%91%E4%BA%865%E6%AC%A1%E9%92%B1%23) `136.9K 🔥` `NEW`
1. [委员回应年轻人天天熬夜行不行](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E5%9B%9E%E5%BA%94%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%A4%A9%E5%A4%A9%E7%86%AC%E5%A4%9C%E8%A1%8C%E4%B8%8D%E8%A1%8C%23) `135.5K 🔥` `NEW`
1. [慕慕昭昭大婚](https://s.weibo.com/weibo?q=%23%E6%85%95%E6%85%95%E6%98%AD%E6%98%AD%E5%A4%A7%E5%A9%9A%23) `132.2K 🔥` `NEW`
1. [公谨爆蛋](https://s.weibo.com/weibo?q=%23%E5%85%AC%E8%B0%A8%E7%88%86%E8%9B%8B%23) `105.3K 🔥` `NEW`
1. [江湖夜雨十年灯大结局](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B9%96%E5%A4%9C%E9%9B%A8%E5%8D%81%E5%B9%B4%E7%81%AF%E5%A4%A7%E7%BB%93%E5%B1%80%23) `102.7K 🔥` `NEW`
1. [曾庆杰 留下你最美的样子 (Zeng Qingjie, leave you in your most beautiful appearance)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E5%BA%86%E6%9D%B0%20%E7%95%99%E4%B8%8B%E4%BD%A0%E6%9C%80%E7%BE%8E%E7%9A%84%E6%A0%B7%E5%AD%90%23) `99.1K 🔥` `NEW`
1. [银行员工抢救23万元火烧币](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%91%98%E5%B7%A5%E6%8A%A2%E6%95%9123%E4%B8%87%E5%85%83%E7%81%AB%E7%83%A7%E5%B8%81%23) `99.1K 🔥` `NEW`
1. [当小狗觉得主人太吵时](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%B0%8F%E7%8B%97%E8%A7%89%E5%BE%97%E4%B8%BB%E4%BA%BA%E5%A4%AA%E5%90%B5%E6%97%B6%23) `99.0K 🔥` `NEW`
1. [黄金涨价劝退不了消费者](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E6%B6%A8%E4%BB%B7%E5%8A%9D%E9%80%80%E4%B8%8D%E4%BA%86%E6%B6%88%E8%B4%B9%E8%80%85%23) `99.0K 🔥` `NEW`
1. [冯天薇盛赞孙颖莎全面有灵气](https://s.weibo.com/weibo?q=%23%E5%86%AF%E5%A4%A9%E8%96%87%E7%9B%9B%E8%B5%9E%E5%AD%99%E9%A2%96%E8%8E%8E%E5%85%A8%E9%9D%A2%E6%9C%89%E7%81%B5%E6%B0%94%23) `98.9K 🔥` `NEW`
1. [杀戮尖塔2各角色强度](https://s.weibo.com/weibo?q=%23%E6%9D%80%E6%88%AE%E5%B0%96%E5%A1%942%E5%90%84%E8%A7%92%E8%89%B2%E5%BC%BA%E5%BA%A6%23) `98.8K 🔥` `NEW`
1. [80元Lululemon发圈卖断货](https://s.weibo.com/weibo?q=%2380%E5%85%83Lululemon%E5%8F%91%E5%9C%88%E5%8D%96%E6%96%AD%E8%B4%A7%23) `704.0K 🔥` `+638%`
1. [国防部回应日本部署远程导弹 (Ministry of National Defense responds to Japan's deployment of long-range missiles)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%98%B2%E9%83%A8%E5%9B%9E%E5%BA%94%E6%97%A5%E6%9C%AC%E9%83%A8%E7%BD%B2%E8%BF%9C%E7%A8%8B%E5%AF%BC%E5%BC%B9%23) `703.9K 🔥` `+183%`
1. [不二之臣](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BA%8C%E4%B9%8B%E8%87%A3%23) `703.8K 🔥` `+587%`
1. [伊朗总统之子称最高领袖平安](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E4%B9%8B%E5%AD%90%E7%A7%B0%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%B9%B3%E5%AE%89%23) `703.7K 🔥` `+227%`
1. [华师大回应师范本科不再输出教师](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%B8%88%E5%A4%A7%E5%9B%9E%E5%BA%94%E5%B8%88%E8%8C%83%E6%9C%AC%E7%A7%91%E4%B8%8D%E5%86%8D%E8%BE%93%E5%87%BA%E6%95%99%E5%B8%88%23) `703.5K 🔥` `+364%`
1. [人大代表随身带针走到哪扎到哪 (Deputies to the National People’s Congress carry needles with them wherever they go.)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%A4%A7%E4%BB%A3%E8%A1%A8%E9%9A%8F%E8%BA%AB%E5%B8%A6%E9%92%88%E8%B5%B0%E5%88%B0%E5%93%AA%E6%89%8E%E5%88%B0%E5%93%AA%23) `703.3K 🔥` `+203%`
1. [MiuMiu](https://s.weibo.com/weibo?q=%23MiuMiu%23) `697.4K 🔥` `+383%`
1. [华莱士正式宣布退市 (Wallace officially announced its delisting)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%8E%B1%E5%A3%AB%E6%AD%A3%E5%BC%8F%E5%AE%A3%E5%B8%83%E9%80%80%E5%B8%82%23) `497.5K 🔥` `+251%`
1. [双人餐是需要两份主食饮料的](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%BA%BA%E9%A4%90%E6%98%AF%E9%9C%80%E8%A6%81%E4%B8%A4%E4%BB%BD%E4%B8%BB%E9%A3%9F%E9%A5%AE%E6%96%99%E7%9A%84%23) `314.2K 🔥` `+123%`
1. [蔡猛说王曼昱后续或将暂停比赛](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%8C%9B%E8%AF%B4%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%90%8E%E7%BB%AD%E6%88%96%E5%B0%86%E6%9A%82%E5%81%9C%E6%AF%94%E8%B5%9B%23) `270.7K 🔥` `+84%`
1. [七部云合破40%的剧](https://s.weibo.com/weibo?q=%23%E4%B8%83%E9%83%A8%E4%BA%91%E5%90%88%E7%A0%B440%25%E7%9A%84%E5%89%A7%23) `216.8K 🔥` `+57%`
1. [天选喝奶茶体质](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E9%80%89%E5%96%9D%E5%A5%B6%E8%8C%B6%E4%BD%93%E8%B4%A8%23) `167.5K 🔥` `+27%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `137.7K 🔥` `+44%`
1. [取微信名要慎重 (Be careful when choosing a WeChat name)](https://s.weibo.com/weibo?q=%23%E5%8F%96%E5%BE%AE%E4%BF%A1%E5%90%8D%E8%A6%81%E6%85%8E%E9%87%8D%23) `136.6K 🔥` `+43%`
1. [中餐厅10网传阵容](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%8510%E7%BD%91%E4%BC%A0%E9%98%B5%E5%AE%B9%23) `136.1K 🔥` `+43%`
1. [我们的少年时代2开通官微 (Our Boyhood 2 launches official WeChat account)](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E5%BC%80%E9%80%9A%E5%AE%98%E5%BE%AE%23) `135.0K 🔥` `+41%`
1. [JDG对战KSG](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98KSG%23) `134.8K 🔥` `+79%`
1. [梁朝伟走势](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%9C%9D%E4%BC%9F%E8%B5%B0%E5%8A%BF%23) `125.7K 🔥` `+32%`
1. [金价杀疯了山东直接去地下2700米挖](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%9D%80%E7%96%AF%E4%BA%86%E5%B1%B1%E4%B8%9C%E7%9B%B4%E6%8E%A5%E5%8E%BB%E5%9C%B0%E4%B8%8B2700%E7%B1%B3%E6%8C%96%23) `123.3K 🔥` `+63%`
1. [原来何老师从小就是何老师了 (It turns out that Teacher He has been Teacher He since he was a child.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%BD%95%E8%80%81%E5%B8%88%E4%BB%8E%E5%B0%8F%E5%B0%B1%E6%98%AF%E4%BD%95%E8%80%81%E5%B8%88%E4%BA%86%23) `118.9K 🔥` `+35%`
1. [英语老师干脆讲点自己喜欢的 (English teacher, just tell me something you like)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E8%AF%AD%E8%80%81%E5%B8%88%E5%B9%B2%E8%84%86%E8%AE%B2%E7%82%B9%E8%87%AA%E5%B7%B1%E5%96%9C%E6%AC%A2%E7%9A%84%23) `99.2K 🔥` `+32%`
1. [谢小侯爷有一双琥珀色的美丽眼睛](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%B0%8F%E4%BE%AF%E7%88%B7%E6%9C%89%E4%B8%80%E5%8F%8C%E7%90%A5%E7%8F%80%E8%89%B2%E7%9A%84%E7%BE%8E%E4%B8%BD%E7%9C%BC%E7%9D%9B%23) `98.9K 🔥` `+32%`
1. [6部萨德发射车运出监控画面曝光](https://s.weibo.com/weibo?q=%236%E9%83%A8%E8%90%A8%E5%BE%B7%E5%8F%91%E5%B0%84%E8%BD%A6%E8%BF%90%E5%87%BA%E7%9B%91%E6%8E%A7%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `98.9K 🔥` `+31%`
1. [公积金改革大潮真的来了 (The tide of provident fund reform is really coming)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%94%B9%E9%9D%A9%E5%A4%A7%E6%BD%AE%E7%9C%9F%E7%9A%84%E6%9D%A5%E4%BA%86%23) `1.2M 🔥`
1. [建议允许60岁以上农民工继续务工](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%85%81%E8%AE%B860%E5%B2%81%E4%BB%A5%E4%B8%8A%E5%86%9C%E6%B0%91%E5%B7%A5%E7%BB%A7%E7%BB%AD%E5%8A%A1%E5%B7%A5%23) `885.3K 🔥`
1. [全球最平整折叠屏OPPOFindN6 (OPPO Find N6, the world’s flattest folding screen)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%9C%80%E5%B9%B3%E6%95%B4%E6%8A%98%E5%8F%A0%E5%B1%8FOPPOFindN6%23) `704.1K 🔥`
1. [伊朗下起毒雨](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%8B%E8%B5%B7%E6%AF%92%E9%9B%A8%23) `138.2K 🔥`
1. [逐玉 赋魅](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E8%B5%8B%E9%AD%85%23) `123.1K 🔥`
1. [伊朗警告将报复美以银行目标](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AD%A6%E5%91%8A%E5%B0%86%E6%8A%A5%E5%A4%8D%E7%BE%8E%E4%BB%A5%E9%93%B6%E8%A1%8C%E7%9B%AE%E6%A0%87%23) `99.2K 🔥`
1. [5岁男童总腿疼以为长个子确诊白血病 (5-year-old boy suffers from constant leg pain and thinks he has grown taller and is diagnosed with leukemia)](https://s.weibo.com/weibo?q=%235%E5%B2%81%E7%94%B7%E7%AB%A5%E6%80%BB%E8%85%BF%E7%96%BC%E4%BB%A5%E4%B8%BA%E9%95%BF%E4%B8%AA%E5%AD%90%E7%A1%AE%E8%AF%8A%E7%99%BD%E8%A1%80%E7%97%85%23) `99.2K 🔥`
1. [AG 首发](https://s.weibo.com/weibo?q=%23AG%20%E9%A6%96%E5%8F%91%23) `99.2K 🔥`
1. [白玉兰预测 (Magnolia Forecast)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E9%A2%84%E6%B5%8B%23) `99.1K 🔥`
1. [妈妈听儿子话囤黄金3年赚40万](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%90%AC%E5%84%BF%E5%AD%90%E8%AF%9D%E5%9B%A4%E9%BB%84%E9%87%913%E5%B9%B4%E8%B5%9A40%E4%B8%87%23) `99.0K 🔥`
1. [杜兰特回应阿德巴约83分](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%85%B0%E7%89%B9%E5%9B%9E%E5%BA%94%E9%98%BF%E5%BE%B7%E5%B7%B4%E7%BA%A683%E5%88%86%23) `99.0K 🔥`
1. [甜茶关晓彤合照 (Sweet tea Guan Xiaotong group photo)](https://s.weibo.com/weibo?q=%23%E7%94%9C%E8%8C%B6%E5%85%B3%E6%99%93%E5%BD%A4%E5%90%88%E7%85%A7%23) `98.9K 🔥`

Updated at 2026-03-11 19:19:14

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
