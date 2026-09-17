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

1. [举手式睡姿是身体在求救](https://s.weibo.com/weibo?q=%23%E4%B8%BE%E6%89%8B%E5%BC%8F%E7%9D%A1%E5%A7%BF%E6%98%AF%E8%BA%AB%E4%BD%93%E5%9C%A8%E6%B1%82%E6%95%91%23) `3.1M 🔥` `NEW`
1. [谭松韵打破了女主遇事硬扛的套路](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E6%89%93%E7%A0%B4%E4%BA%86%E5%A5%B3%E4%B8%BB%E9%81%87%E4%BA%8B%E7%A1%AC%E6%89%9B%E7%9A%84%E5%A5%97%E8%B7%AF%23) `626.3K 🔥` `NEW`
1. [双生王楚然美到发金光](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E7%94%9F%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%BE%8E%E5%88%B0%E5%8F%91%E9%87%91%E5%85%89%23) `369.9K 🔥` `NEW`
1. [孙子非亲生案女方提交聊天截图证据](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E5%A5%B3%E6%96%B9%E6%8F%90%E4%BA%A4%E8%81%8A%E5%A4%A9%E6%88%AA%E5%9B%BE%E8%AF%81%E6%8D%AE%23) `285.5K 🔥` `NEW`
1. [何不同舟渡](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8D%E5%90%8C%E8%88%9F%E6%B8%A1%23) `276.3K 🔥` `NEW`
1. [周鸿祎后悔投资哪吒汽车](https://s.weibo.com/weibo?q=%23%E5%91%A8%E9%B8%BF%E7%A5%8E%E5%90%8E%E6%82%94%E6%8A%95%E8%B5%84%E5%93%AA%E5%90%92%E6%B1%BD%E8%BD%A6%23) `276.0K 🔥` `NEW`
1. [井柏然第一次收官发女主](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%94%B6%E5%AE%98%E5%8F%91%E5%A5%B3%E4%B8%BB%23) `274.3K 🔥` `NEW`
1. [iPhone Duo微信登录争议](https://s.weibo.com/weibo?q=%23iPhone%20Duo%E5%BE%AE%E4%BF%A1%E7%99%BB%E5%BD%95%E4%BA%89%E8%AE%AE%23) `274.1K 🔥` `NEW`
1. [张百乔小雪力破离婚传言](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%99%BE%E4%B9%94%E5%B0%8F%E9%9B%AA%E5%8A%9B%E7%A0%B4%E7%A6%BB%E5%A9%9A%E4%BC%A0%E8%A8%80%23) `273.3K 🔥` `NEW`
1. [孙颖莎被困机场期间锻炼身体](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%A2%AB%E5%9B%B0%E6%9C%BA%E5%9C%BA%E6%9C%9F%E9%97%B4%E9%94%BB%E7%82%BC%E8%BA%AB%E4%BD%93%23) `272.2K 🔥` `NEW`
1. [王鹤棣被造谣维权难度](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%A2%AB%E9%80%A0%E8%B0%A3%E7%BB%B4%E6%9D%83%E9%9A%BE%E5%BA%A6%23) `267.6K 🔥` `NEW`
1. [坠亡医学生母亲手臂脱臼](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%8C%BB%E5%AD%A6%E7%94%9F%E6%AF%8D%E4%BA%B2%E6%89%8B%E8%87%82%E8%84%B1%E8%87%BC%23) `243.7K 🔥` `NEW`
1. [侵华日军暴行视频证据](https://s.weibo.com/weibo?q=%23%E4%BE%B5%E5%8D%8E%E6%97%A5%E5%86%9B%E6%9A%B4%E8%A1%8C%E8%A7%86%E9%A2%91%E8%AF%81%E6%8D%AE%23) `230.6K 🔥` `NEW`
1. [坠亡医学生绩点排第21名](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%8C%BB%E5%AD%A6%E7%94%9F%E7%BB%A9%E7%82%B9%E6%8E%92%E7%AC%AC21%E5%90%8D%23) `230.5K 🔥` `NEW`
1. [樊振东马伊琍 东儿和东儿额娘](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E9%A9%AC%E4%BC%8A%E7%90%8D%20%E4%B8%9C%E5%84%BF%E5%92%8C%E4%B8%9C%E5%84%BF%E9%A2%9D%E5%A8%98%23) `228.8K 🔥` `NEW`
1. [六小龄童演张一山师父太合适了](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%B0%8F%E9%BE%84%E7%AB%A5%E6%BC%94%E5%BC%A0%E4%B8%80%E5%B1%B1%E5%B8%88%E7%88%B6%E5%A4%AA%E5%90%88%E9%80%82%E4%BA%86%23) `210.1K 🔥` `NEW`
1. [浙大老师飞起来了](https://s.weibo.com/weibo?q=%23%E6%B5%99%E5%A4%A7%E8%80%81%E5%B8%88%E9%A3%9E%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `206.5K 🔥` `NEW`
1. [蔡少芬汪苏泷关晓彤同一天生日](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%B0%91%E8%8A%AC%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%85%B3%E6%99%93%E5%BD%A4%E5%90%8C%E4%B8%80%E5%A4%A9%E7%94%9F%E6%97%A5%23) `206.3K 🔥` `NEW`
1. [张百乔小雪互动](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%99%BE%E4%B9%94%E5%B0%8F%E9%9B%AA%E4%BA%92%E5%8A%A8%23) `196.4K 🔥` `NEW`
1. [未来10年人类寿命或可突破150岁](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A510%E5%B9%B4%E4%BA%BA%E7%B1%BB%E5%AF%BF%E5%91%BD%E6%88%96%E5%8F%AF%E7%AA%81%E7%A0%B4150%E5%B2%81%23) `194.0K 🔥` `NEW`
1. [汪苏泷工作室好会写](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%A5%BD%E4%BC%9A%E5%86%99%23) `193.0K 🔥` `NEW`
1. [芒果一口气推出89部大剧](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E4%B8%80%E5%8F%A3%E6%B0%94%E6%8E%A8%E5%87%BA89%E9%83%A8%E5%A4%A7%E5%89%A7%23) `181.0K 🔥` `NEW`
1. [韩国男篮搬离亚运会集装箱宿舍](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%94%B7%E7%AF%AE%E6%90%AC%E7%A6%BB%E4%BA%9A%E8%BF%90%E4%BC%9A%E9%9B%86%E8%A3%85%E7%AE%B1%E5%AE%BF%E8%88%8D%23) `156.8K 🔥` `NEW`
1. [猫 你啃我妙脆角了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E4%BD%A0%E5%95%83%E6%88%91%E5%A6%99%E8%84%86%E8%A7%92%E4%BA%86%23) `153.5K 🔥` `NEW`
1. [男子熬夜到凌晨患血管性痴呆](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%86%AC%E5%A4%9C%E5%88%B0%E5%87%8C%E6%99%A8%E6%82%A3%E8%A1%80%E7%AE%A1%E6%80%A7%E7%97%B4%E5%91%86%23) `148.7K 🔥` `NEW`
1. [傅首尔17岁儿子近照](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%9417%E5%B2%81%E5%84%BF%E5%AD%90%E8%BF%91%E7%85%A7%23) `148.6K 🔥` `NEW`
1. [美联储主席回应加息](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%E4%B8%BB%E5%B8%AD%E5%9B%9E%E5%BA%94%E5%8A%A0%E6%81%AF%23) `148.6K 🔥` `NEW`
1. [迈阿密国际vs蓝十字](https://s.weibo.com/weibo?q=%23%E8%BF%88%E9%98%BF%E5%AF%86%E5%9B%BD%E9%99%85vs%E8%93%9D%E5%8D%81%E5%AD%97%23) `141.0K 🔥` `NEW`
1. [C罗或无缘1000球纪录](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%88%96%E6%97%A0%E7%BC%981000%E7%90%83%E7%BA%AA%E5%BD%95%23) `139.0K 🔥` `NEW`
1. [孙千iG晒和井柏然的合照](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83iG%E6%99%92%E5%92%8C%E4%BA%95%E6%9F%8F%E7%84%B6%E7%9A%84%E5%90%88%E7%85%A7%23) `136.6K 🔥` `NEW`
1. [与山河共彩](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E5%B1%B1%E6%B2%B3%E5%85%B1%E5%BD%A9%23) `628.3K 🔥` `+33%`
1. [连休13天大学汇总](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BC%9113%E5%A4%A9%E5%A4%A7%E5%AD%A6%E6%B1%87%E6%80%BB%23) `427.6K 🔥` `+197%`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `275.4K 🔥` `+72%`
1. [男生坠亡前发生了什么](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E5%9D%A0%E4%BA%A1%E5%89%8D%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%23) `271.5K 🔥` `+138%`
1. [孙千发文告别尚之桃](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E5%8F%91%E6%96%87%E5%91%8A%E5%88%AB%E5%B0%9A%E4%B9%8B%E6%A1%83%23) `271.4K 🔥` `+154%`
1. [让身体炎症全部消失的方法](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E8%BA%AB%E4%BD%93%E7%82%8E%E7%97%87%E5%85%A8%E9%83%A8%E6%B6%88%E5%A4%B1%E7%9A%84%E6%96%B9%E6%B3%95%23) `230.4K 🔥` `+93%`
1. [一点点 威胁员工](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%82%B9%E7%82%B9%20%E5%A8%81%E8%83%81%E5%91%98%E5%B7%A5%23) `218.2K 🔥` `+101%`
1. [特朗普称利率应降至1%或更低](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%88%A9%E7%8E%87%E5%BA%94%E9%99%8D%E8%87%B31%25%E6%88%96%E6%9B%B4%E4%BD%8E%23) `197.6K 🔥` `+68%`
1. [中国男乒五战全败](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E4%B9%92%E4%BA%94%E6%88%98%E5%85%A8%E8%B4%A5%23) `169.3K 🔥` `+84%`
1. [易烊千玺随机留言文字](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E9%9A%8F%E6%9C%BA%E7%95%99%E8%A8%80%E6%96%87%E5%AD%97%23) `150.4K 🔥` `+86%`
1. [数说国民经济8月成绩单](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%B4%E5%9B%BD%E6%B0%91%E7%BB%8F%E6%B5%8E8%E6%9C%88%E6%88%90%E7%BB%A9%E5%8D%95%23) `829.2K 🔥`
1. [南医大坠亡事件导师学生聊天记录](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%8C%BB%E5%A4%A7%E5%9D%A0%E4%BA%A1%E4%BA%8B%E4%BB%B6%E5%AF%BC%E5%B8%88%E5%AD%A6%E7%94%9F%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `416.6K 🔥`
1. [谭松韵演出生理性恐惧](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E6%BC%94%E5%87%BA%E7%94%9F%E7%90%86%E6%80%A7%E6%81%90%E6%83%A7%23) `212.9K 🔥`
1. [关晓彤29岁生日](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A429%E5%B2%81%E7%94%9F%E6%97%A5%23) `193.8K 🔥`
1. [坠亡学生姐姐发声](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%AD%A6%E7%94%9F%E5%A7%90%E5%A7%90%E5%8F%91%E5%A3%B0%23) `183.5K 🔥`
1. [玻尿酸科普](https://s.weibo.com/weibo?q=%23%E7%8E%BB%E5%B0%BF%E9%85%B8%E7%A7%91%E6%99%AE%23) `174.0K 🔥`
1. [邵子恒在韩国参加的选秀节目](https://s.weibo.com/weibo?q=%23%E9%82%B5%E5%AD%90%E6%81%92%E5%9C%A8%E9%9F%A9%E5%9B%BD%E5%8F%82%E5%8A%A0%E7%9A%84%E9%80%89%E7%A7%80%E8%8A%82%E7%9B%AE%23) `149.5K 🔥`
1. [南医大事件涉事导师门诊已约满](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%8C%BB%E5%A4%A7%E4%BA%8B%E4%BB%B6%E6%B6%89%E4%BA%8B%E5%AF%BC%E5%B8%88%E9%97%A8%E8%AF%8A%E5%B7%B2%E7%BA%A6%E6%BB%A1%23) `148.7K 🔥`
1. [美联储宣布加息25个基点](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%E5%AE%A3%E5%B8%83%E5%8A%A0%E6%81%AF25%E4%B8%AA%E5%9F%BA%E7%82%B9%23) `1.1M 🔥` `-67%`
1. [曝国乒落地名古屋被困机场](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%9B%BD%E4%B9%92%E8%90%BD%E5%9C%B0%E5%90%8D%E5%8F%A4%E5%B1%8B%E8%A2%AB%E5%9B%B0%E6%9C%BA%E5%9C%BA%23) `366.4K 🔥` `-63%`
1. [美国房贷利率突破7%](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%88%BF%E8%B4%B7%E5%88%A9%E7%8E%87%E7%AA%81%E7%A0%B47%25%23) `217.7K 🔥` `-22%`
1. [每天处理猫咪跟小小人类纠纷](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%A4%84%E7%90%86%E7%8C%AB%E5%92%AA%E8%B7%9F%E5%B0%8F%E5%B0%8F%E4%BA%BA%E7%B1%BB%E7%BA%A0%E7%BA%B7%23) `194.5K 🔥` `-35%`

Updated at 2026-09-17 09:45:40

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
