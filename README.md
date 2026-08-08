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

1. [TF四代突围2 (TF fourth generation breakout 2)](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E7%AA%81%E5%9B%B42%23) `258.4K 🔥` `NEW`
1. [披荆斩棘给王传君的介绍](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%BB%99%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%9A%84%E4%BB%8B%E7%BB%8D%23) `257.3K 🔥` `NEW`
1. [王楚钦代表年轻一代运动员发言](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%BB%A3%E8%A1%A8%E5%B9%B4%E8%BD%BB%E4%B8%80%E4%BB%A3%E8%BF%90%E5%8A%A8%E5%91%98%E5%8F%91%E8%A8%80%23) `250.7K 🔥` `NEW`
1. [霸王茶姬高仿店被判赔35万](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E9%AB%98%E4%BB%BF%E5%BA%97%E8%A2%AB%E5%88%A4%E8%B5%9435%E4%B8%87%23) `250.2K 🔥` `NEW`
1. [娜扎眼睛问题可能是小时候留的病根](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E7%9C%BC%E7%9D%9B%E9%97%AE%E9%A2%98%E5%8F%AF%E8%83%BD%E6%98%AF%E5%B0%8F%E6%97%B6%E5%80%99%E7%95%99%E7%9A%84%E7%97%85%E6%A0%B9%23) `198.2K 🔥` `NEW`
1. [西湖突下暴雨游客蹲断桥上躲避](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%B9%96%E7%AA%81%E4%B8%8B%E6%9A%B4%E9%9B%A8%E6%B8%B8%E5%AE%A2%E8%B9%B2%E6%96%AD%E6%A1%A5%E4%B8%8A%E8%BA%B2%E9%81%BF%23) `147.9K 🔥` `NEW`
1. [小酒窝朵朵左右亲吻佟丽娅](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E6%9C%B5%E6%9C%B5%E5%B7%A6%E5%8F%B3%E4%BA%B2%E5%90%BB%E4%BD%9F%E4%B8%BD%E5%A8%85%23) `144.0K 🔥` `NEW`
1. [杜兰特被2K评分整破防了](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%85%B0%E7%89%B9%E8%A2%AB2K%E8%AF%84%E5%88%86%E6%95%B4%E7%A0%B4%E9%98%B2%E4%BA%86%23) `143.1K 🔥` `NEW`
1. [用Codex做了一种很新的图片水印](https://s.weibo.com/weibo?q=%23%E7%94%A8Codex%E5%81%9A%E4%BA%86%E4%B8%80%E7%A7%8D%E5%BE%88%E6%96%B0%E7%9A%84%E5%9B%BE%E7%89%87%E6%B0%B4%E5%8D%B0%23) `140.3K 🔥` `NEW`
1. [偶遇孟子义热带船长风](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%AD%9F%E5%AD%90%E4%B9%89%E7%83%AD%E5%B8%A6%E8%88%B9%E9%95%BF%E9%A3%8E%23) `139.0K 🔥` `NEW`
1. [18岁女孩遭强奸案被挂案五年 (The rape case of an 18-year-old girl has been pending for five years)](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%81%AD%E5%BC%BA%E5%A5%B8%E6%A1%88%E8%A2%AB%E6%8C%82%E6%A1%88%E4%BA%94%E5%B9%B4%23) `394.9K 🔥` `+74%`
1. [王楚钦马龙张怡宁丁宁同框 (Wang Chuqin, Ma Long, Zhang Yining and Ding Ning are in the same frame)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%A9%AC%E9%BE%99%E5%BC%A0%E6%80%A1%E5%AE%81%E4%B8%81%E5%AE%81%E5%90%8C%E6%A1%86%23) `253.9K 🔥` `+24%`
1. [超酷音乐盛典](https://s.weibo.com/weibo?q=%23%E8%B6%85%E9%85%B7%E9%9F%B3%E4%B9%90%E7%9B%9B%E5%85%B8%23) `234.4K 🔥` `+35%`
1. [台风白海豚](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `1.6M 🔥`
1. [峰哥实名举报汪海林偷税漏税 (Brother Feng reported Wang Hailin’s tax evasion with his real name)](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A5%E5%AE%9E%E5%90%8D%E4%B8%BE%E6%8A%A5%E6%B1%AA%E6%B5%B7%E6%9E%97%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E%23) `892.7K 🔥`
1. [2026我们的家园幸福美丽西藏 (2026 Our home is happy and beautiful Tibet)](https://s.weibo.com/weibo?q=%232026%E6%88%91%E4%BB%AC%E7%9A%84%E5%AE%B6%E5%9B%AD%E5%B9%B8%E7%A6%8F%E7%BE%8E%E4%B8%BD%E8%A5%BF%E8%97%8F%23) `687.4K 🔥`
1. [河南西平刑案嫌犯已落网](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E8%A5%BF%E5%B9%B3%E5%88%91%E6%A1%88%E5%AB%8C%E7%8A%AF%E5%B7%B2%E8%90%BD%E7%BD%91%23) `351.1K 🔥`
1. [在电影院要小心自己的喝的](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E7%94%B5%E5%BD%B1%E9%99%A2%E8%A6%81%E5%B0%8F%E5%BF%83%E8%87%AA%E5%B7%B1%E7%9A%84%E5%96%9D%E7%9A%84%23) `351.0K 🔥`
1. [电影欢迎来龙餐馆口碑](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%E5%8F%A3%E7%A2%91%23) `339.5K 🔥`
1. [花海送长生皮肤和签名](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%B5%B7%E9%80%81%E9%95%BF%E7%94%9F%E7%9A%AE%E8%82%A4%E5%92%8C%E7%AD%BE%E5%90%8D%23) `261.3K 🔥`
1. [黄金价格走势或反转 (Gold price trend may reverse)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%BB%B7%E6%A0%BC%E8%B5%B0%E5%8A%BF%E6%88%96%E5%8F%8D%E8%BD%AC%23) `260.7K 🔥`
1. [西村力演唱会的状态](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E7%8A%B6%E6%80%81%23) `260.2K 🔥`
1. [虞书欣古子成大婚路透 (Yu Shuxin and Gu Zicheng's wedding Reuters)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%8F%A4%E5%AD%90%E6%88%90%E5%A4%A7%E5%A9%9A%E8%B7%AF%E9%80%8F%23) `260.0K 🔥`
1. [取消调休补班90%的人就满意了 (90% of the people will be satisfied if the time off and make-up work are cancelled.)](https://s.weibo.com/weibo?q=%23%E5%8F%96%E6%B6%88%E8%B0%83%E4%BC%91%E8%A1%A5%E7%8F%AD90%25%E7%9A%84%E4%BA%BA%E5%B0%B1%E6%BB%A1%E6%84%8F%E4%BA%86%23) `259.3K 🔥`
1. [孙红雷艾特错王玉雯](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E8%89%BE%E7%89%B9%E9%94%99%E7%8E%8B%E7%8E%89%E9%9B%AF%23) `258.7K 🔥`
1. [日媒称华为领先日本整整一代](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E7%A7%B0%E5%8D%8E%E4%B8%BA%E9%A2%86%E5%85%88%E6%97%A5%E6%9C%AC%E6%95%B4%E6%95%B4%E4%B8%80%E4%BB%A3%23) `257.7K 🔥`
1. [峰哥承诺说谎就永久退网 (Brother Feng promised to leave the Internet permanently if he lied)](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A5%E6%89%BF%E8%AF%BA%E8%AF%B4%E8%B0%8E%E5%B0%B1%E6%B0%B8%E4%B9%85%E9%80%80%E7%BD%91%23) `256.8K 🔥`
1. [小夜灯 性早熟](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%9C%E7%81%AF%20%E6%80%A7%E6%97%A9%E7%86%9F%23) `256.6K 🔥`
1. [刘宇宁抱王玉雯林一的区别 (The difference between Liu Yuning hugging Wang Yuwen and Lin Yi)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%8A%B1%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%9E%97%E4%B8%80%E7%9A%84%E5%8C%BA%E5%88%AB%23) `256.2K 🔥`
1. [朋友称佟丽娅与陈思诚是新型离婚关系](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E7%A7%B0%E4%BD%9F%E4%B8%BD%E5%A8%85%E4%B8%8E%E9%99%88%E6%80%9D%E8%AF%9A%E6%98%AF%E6%96%B0%E5%9E%8B%E7%A6%BB%E5%A9%9A%E5%85%B3%E7%B3%BB%23) `255.5K 🔥`
1. [名创优品一次性内裤 颜面尽失 (Miniso’s premium disposable underwear, losing face)](https://s.weibo.com/weibo?q=%23%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%E4%B8%80%E6%AC%A1%E6%80%A7%E5%86%85%E8%A3%A4%20%E9%A2%9C%E9%9D%A2%E5%B0%BD%E5%A4%B1%23) `255.1K 🔥`
1. [和平精英](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%23) `255.0K 🔥`
1. [美国AI开始攻击真人了 (American AI starts attacking real people)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BDAI%E5%BC%80%E5%A7%8B%E6%94%BB%E5%87%BB%E7%9C%9F%E4%BA%BA%E4%BA%86%23) `254.1K 🔥`
1. [费大厨塌房了吗](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E5%A4%A7%E5%8E%A8%E5%A1%8C%E6%88%BF%E4%BA%86%E5%90%97%23) `250.2K 🔥`
1. [下班就得直接去健身房 (You have to go directly to the gym after get off work)](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E7%8F%AD%E5%B0%B1%E5%BE%97%E7%9B%B4%E6%8E%A5%E5%8E%BB%E5%81%A5%E8%BA%AB%E6%88%BF%23) `250.2K 🔥`
1. [Lisa发十周年合照](https://s.weibo.com/weibo?q=%23Lisa%E5%8F%91%E5%8D%81%E5%91%A8%E5%B9%B4%E5%90%88%E7%85%A7%23) `236.7K 🔥`
1. [这榴莲是真嫩啊](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A6%B4%E8%8E%B2%E6%98%AF%E7%9C%9F%E5%AB%A9%E5%95%8A%23) `225.6K 🔥`
1. [曝丁禹兮虞书欣将三搭 (It is revealed that Ding Yuxi and Yu Shuxin will have a threesome)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%81%E7%A6%B9%E5%85%AE%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B0%86%E4%B8%89%E6%90%AD%23) `221.6K 🔥`
1. [微博文化交流之夜泰国站 (Weibo Cultural Exchange Night Thailand Station)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81%E4%B9%8B%E5%A4%9C%E6%B3%B0%E5%9B%BD%E7%AB%99%23) `220.5K 🔥`
1. [花融](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E8%9E%8D%23) `214.3K 🔥`
1. [侯明昊红包](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E7%BA%A2%E5%8C%85%23) `210.2K 🔥`
1. [迪丽热巴香港路透](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%A6%99%E6%B8%AF%E8%B7%AF%E9%80%8F%23) `156.7K 🔥`
1. [SNH48青春盛典 (SNH48 Youth Festival)](https://s.weibo.com/weibo?q=%23SNH48%E9%9D%92%E6%98%A5%E7%9B%9B%E5%85%B8%23) `151.0K 🔥`
1. [多家A股公司收到美国退税](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6A%E8%82%A1%E5%85%AC%E5%8F%B8%E6%94%B6%E5%88%B0%E7%BE%8E%E5%9B%BD%E9%80%80%E7%A8%8E%23) `147.7K 🔥`
1. [微博奇遇记直播](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E5%A5%87%E9%81%87%E8%AE%B0%E7%9B%B4%E6%92%AD%23) `147.7K 🔥`
1. [Marshall携二手玫瑰守住现场 (Marshall brought second-hand roses to guard the scene)](https://s.weibo.com/weibo?q=%23Marshall%E6%90%BA%E4%BA%8C%E6%89%8B%E7%8E%AB%E7%91%B0%E5%AE%88%E4%BD%8F%E7%8E%B0%E5%9C%BA%23) `503.1K 🔥` `-46%`
1. [两个淡人谈恋爱是极其美味的 (Two light people falling in love is extremely delicious)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%B8%AA%E6%B7%A1%E4%BA%BA%E8%B0%88%E6%81%8B%E7%88%B1%E6%98%AF%E6%9E%81%E5%85%B6%E7%BE%8E%E5%91%B3%E7%9A%84%23) `261.3K 🔥` `-35%`
1. [中国留学生称学校都是印度人](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E7%A7%B0%E5%AD%A6%E6%A0%A1%E9%83%BD%E6%98%AF%E5%8D%B0%E5%BA%A6%E4%BA%BA%23) `259.5K 🔥` `-54%`
1. [男子因噪音狂斩邻居30多刀后坠楼 (Man fell from building after stabbing neighbor more than 30 times because of noise)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A0%E5%99%AA%E9%9F%B3%E7%8B%82%E6%96%A9%E9%82%BB%E5%B1%8530%E5%A4%9A%E5%88%80%E5%90%8E%E5%9D%A0%E6%A5%BC%23) `258.2K 🔥` `-36%`
1. [HLE战胜T1](https://s.weibo.com/weibo?q=%23HLE%E6%88%98%E8%83%9CT1%23) `158.9K 🔥` `-26%`
1. [刘旸秒删 (Liu Yang deleted it instantly)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%97%B8%E7%A7%92%E5%88%A0%23) `142.5K 🔥` `-24%`

Updated at 2026-08-08 19:55:40

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
