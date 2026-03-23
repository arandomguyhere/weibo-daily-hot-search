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

1. [金价急跌原因 (Reasons for the sharp drop in gold prices)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%80%A5%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `187.6K 🔥` `NEW`
1. [范丞丞直播啃玉米](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%9B%B4%E6%92%AD%E5%95%83%E7%8E%89%E7%B1%B3%23) `184.4K 🔥` `NEW`
1. [百词斩崩了](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%AF%8D%E6%96%A9%E5%B4%A9%E4%BA%86%23) `154.6K 🔥` `NEW`
1. [为爱犬追凶3年案当事人最新发声](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E7%88%B1%E7%8A%AC%E8%BF%BD%E5%87%B63%E5%B9%B4%E6%A1%88%E5%BD%93%E4%BA%8B%E4%BA%BA%E6%9C%80%E6%96%B0%E5%8F%91%E5%A3%B0%23) `149.5K 🔥` `NEW`
1. [情侣住酒店正亲密时被员工开窗](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E4%BD%8F%E9%85%92%E5%BA%97%E6%AD%A3%E4%BA%B2%E5%AF%86%E6%97%B6%E8%A2%AB%E5%91%98%E5%B7%A5%E5%BC%80%E7%AA%97%23) `147.5K 🔥` `NEW`
1. [鞠婧祎彩排](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%BD%A9%E6%8E%92%23) `123.6K 🔥` `NEW`
1. [普京访华日期将很快公布](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AE%BF%E5%8D%8E%E6%97%A5%E6%9C%9F%E5%B0%86%E5%BE%88%E5%BF%AB%E5%85%AC%E5%B8%83%23) `94.7K 🔥` `NEW`
1. [逐玉浴池戏](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%B5%B4%E6%B1%A0%E6%88%8F%23) `94.7K 🔥` `NEW`
1. [杨博文晒狗](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E6%99%92%E7%8B%97%23) `92.9K 🔥` `NEW`
1. [瞿颖吃火锅挺废人的](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E5%90%83%E7%81%AB%E9%94%85%E6%8C%BA%E5%BA%9F%E4%BA%BA%E7%9A%84%23) `92.5K 🔥` `NEW`
1. [误会孙女被打爷爷重伤其同学获刑 (Granddaughter was beaten by misunderstanding, grandfather seriously injured his classmate and was sentenced)](https://s.weibo.com/weibo?q=%23%E8%AF%AF%E4%BC%9A%E5%AD%99%E5%A5%B3%E8%A2%AB%E6%89%93%E7%88%B7%E7%88%B7%E9%87%8D%E4%BC%A4%E5%85%B6%E5%90%8C%E5%AD%A6%E8%8E%B7%E5%88%91%23) `92.5K 🔥` `NEW`
1. [左奇函两只小狗](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E4%B8%A4%E5%8F%AA%E5%B0%8F%E7%8B%97%23) `92.5K 🔥` `NEW`
1. [张家齐说直播带货不是天才的陨落](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%AF%B4%E7%9B%B4%E6%92%AD%E5%B8%A6%E8%B4%A7%E4%B8%8D%E6%98%AF%E5%A4%A9%E6%89%8D%E7%9A%84%E9%99%A8%E8%90%BD%23) `92.4K 🔥` `NEW`
1. [她的盛焰反派演都不演了](https://s.weibo.com/weibo?q=%23%E5%A5%B9%E7%9A%84%E7%9B%9B%E7%84%B0%E5%8F%8D%E6%B4%BE%E6%BC%94%E9%83%BD%E4%B8%8D%E6%BC%94%E4%BA%86%23) `92.3K 🔥` `NEW`
1. [13年来首次油价调控意味着什么](https://s.weibo.com/weibo?q=%2313%E5%B9%B4%E6%9D%A5%E9%A6%96%E6%AC%A1%E6%B2%B9%E4%BB%B7%E8%B0%83%E6%8E%A7%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `92.3K 🔥` `NEW`
1. [杨洋手部又受伤了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%89%8B%E9%83%A8%E5%8F%88%E5%8F%97%E4%BC%A4%E4%BA%86%23) `92.3K 🔥` `NEW`
1. [生母出走22年儿子死后被判不分遗产](https://s.weibo.com/weibo?q=%23%E7%94%9F%E6%AF%8D%E5%87%BA%E8%B5%B022%E5%B9%B4%E5%84%BF%E5%AD%90%E6%AD%BB%E5%90%8E%E8%A2%AB%E5%88%A4%E4%B8%8D%E5%88%86%E9%81%97%E4%BA%A7%23) `92.0K 🔥` `NEW`
1. [老挝1千余辆电动车15天售罄](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%8C%9D1%E5%8D%83%E4%BD%99%E8%BE%86%E7%94%B5%E5%8A%A8%E8%BD%A615%E5%A4%A9%E5%94%AE%E7%BD%84%23) `91.9K 🔥` `NEW`
1. [朝鲜称与日本没什么可谈的](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E7%A7%B0%E4%B8%8E%E6%97%A5%E6%9C%AC%E6%B2%A1%E4%BB%80%E4%B9%88%E5%8F%AF%E8%B0%88%E7%9A%84%23) `197.6K 🔥` `+74%`
1. [周杰伦新专辑太阳之子](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E4%B8%93%E8%BE%91%E5%A4%AA%E9%98%B3%E4%B9%8B%E5%AD%90%23) `196.1K 🔥` `+41%`
1. [美伊就中东敌对行动解决方案进行对话 (U.S.-Iran talks on resolution of hostilities in Middle East)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%B0%B1%E4%B8%AD%E4%B8%9C%E6%95%8C%E5%AF%B9%E8%A1%8C%E5%8A%A8%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E8%BF%9B%E8%A1%8C%E5%AF%B9%E8%AF%9D%23) `195.9K 🔥` `+41%`
1. [14位美企高管来访商务部排排坐](https://s.weibo.com/weibo?q=%2314%E4%BD%8D%E7%BE%8E%E4%BC%81%E9%AB%98%E7%AE%A1%E6%9D%A5%E8%AE%BF%E5%95%86%E5%8A%A1%E9%83%A8%E6%8E%92%E6%8E%92%E5%9D%90%23) `195.0K 🔥` `+133%`
1. [对国内成品油价格采取临时调控 (Adopt temporary controls on domestic refined oil prices)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%9B%BD%E5%86%85%E6%88%90%E5%93%81%E6%B2%B9%E4%BB%B7%E6%A0%BC%E9%87%87%E5%8F%96%E4%B8%B4%E6%97%B6%E8%B0%83%E6%8E%A7%23) `1.0M 🔥`
1. [开始推理吧4 (Let’s start reasoning 4)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A74%23) `762.8K 🔥`
1. [梦想的接力最燃 (The relay of dreams is the most burning)](https://s.weibo.com/weibo?q=%23%E6%A2%A6%E6%83%B3%E7%9A%84%E6%8E%A5%E5%8A%9B%E6%9C%80%E7%87%83%23) `590.9K 🔥`
1. [长期不换社交头像的人 (People who don’t change their social avatars for a long time)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%B8%8D%E6%8D%A2%E7%A4%BE%E4%BA%A4%E5%A4%B4%E5%83%8F%E7%9A%84%E4%BA%BA%23) `195.7K 🔥`
1. [国乒公布伦敦世乒赛初步参赛名单](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%85%AC%E5%B8%83%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%88%9D%E6%AD%A5%E5%8F%82%E8%B5%9B%E5%90%8D%E5%8D%95%23) `193.3K 🔥`
1. [以前看小说vs现在看小说](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%89%8D%E7%9C%8B%E5%B0%8F%E8%AF%B4vs%E7%8E%B0%E5%9C%A8%E7%9C%8B%E5%B0%8F%E8%AF%B4%23) `192.5K 🔥`
1. [阚清子晒近照](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%99%92%E8%BF%91%E7%85%A7%23) `190.8K 🔥`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `189.8K 🔥`
1. [大学是离异性最远的阶段](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E6%98%AF%E7%A6%BB%E5%BC%82%E6%80%A7%E6%9C%80%E8%BF%9C%E7%9A%84%E9%98%B6%E6%AE%B5%23) `189.3K 🔥`
1. [伊朗否认与美国沟通](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%A6%E8%AE%A4%E4%B8%8E%E7%BE%8E%E5%9B%BD%E6%B2%9F%E9%80%9A%23) `185.8K 🔥`
1. [男大学生患桃花癫一周挥霍5万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%82%A3%E6%A1%83%E8%8A%B1%E7%99%AB%E4%B8%80%E5%91%A8%E6%8C%A5%E9%9C%8D5%E4%B8%87%23) `184.4K 🔥`
1. [陈锦鸿把自闭症儿子养成青年钢琴家](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%94%A6%E9%B8%BF%E6%8A%8A%E8%87%AA%E9%97%AD%E7%97%87%E5%84%BF%E5%AD%90%E5%85%BB%E6%88%90%E9%9D%92%E5%B9%B4%E9%92%A2%E7%90%B4%E5%AE%B6%23) `181.2K 🔥`
1. [宫脇咲良取关张元英 (Miyawaki Sakura and Seki Zhang Yuanying)](https://s.weibo.com/weibo?q=%23%E5%AE%AB%E8%84%87%E5%92%B2%E8%89%AF%E5%8F%96%E5%85%B3%E5%BC%A0%E5%85%83%E8%8B%B1%23) `148.1K 🔥`
1. [长期喝桶装水的人天塌了 (People who drink bottled water for a long time are in trouble)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E5%96%9D%E6%A1%B6%E8%A3%85%E6%B0%B4%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `93.3K 🔥`
1. [萧蔷曾多次婉拒浪姐邀约 (Xiao Qiang declined Sister Lang’s invitation many times)](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%E6%9B%BE%E5%A4%9A%E6%AC%A1%E5%A9%89%E6%8B%92%E6%B5%AA%E5%A7%90%E9%82%80%E7%BA%A6%23) `92.4K 🔥`
1. [伊朗地下设施堆放一排排导弹 (Rows of missiles stacked in Iran's underground facilities)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%9C%B0%E4%B8%8B%E8%AE%BE%E6%96%BD%E5%A0%86%E6%94%BE%E4%B8%80%E6%8E%92%E6%8E%92%E5%AF%BC%E5%BC%B9%23) `92.2K 🔥`
1. [李卿 内娱金宣虎 (Li Qing Internal Entertainment Kim Sun Ho)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8D%BF%20%E5%86%85%E5%A8%B1%E9%87%91%E5%AE%A3%E8%99%8E%23) `92.2K 🔥`
1. [我洗头后三天的头发蓬松程度](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%B4%97%E5%A4%B4%E5%90%8E%E4%B8%89%E5%A4%A9%E7%9A%84%E5%A4%B4%E5%8F%91%E8%93%AC%E6%9D%BE%E7%A8%8B%E5%BA%A6%23) `92.1K 🔥`
1. [伊朗称特朗普推迟袭击表态为心理战](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%89%B9%E6%9C%97%E6%99%AE%E6%8E%A8%E8%BF%9F%E8%A2%AD%E5%87%BB%E8%A1%A8%E6%80%81%E4%B8%BA%E5%BF%83%E7%90%86%E6%88%98%23) `145.2K 🔥` `-36%`
1. [特朗普称美伊已对话 (Trump says U.S.-Iran dialogue has begun)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E4%BC%8A%E5%B7%B2%E5%AF%B9%E8%AF%9D%23) `122.7K 🔥` `-21%`
1. [上过跑男的团体都解散了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E8%BF%87%E8%B7%91%E7%94%B7%E7%9A%84%E5%9B%A2%E4%BD%93%E9%83%BD%E8%A7%A3%E6%95%A3%E4%BA%86%23) `111.4K 🔥` `-30%`
1. [20岁女生长期开灯睡觉胖到200斤](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E5%A5%B3%E7%94%9F%E9%95%BF%E6%9C%9F%E5%BC%80%E7%81%AF%E7%9D%A1%E8%A7%89%E8%83%96%E5%88%B0200%E6%96%A4%23) `104.0K 🔥` `-32%`
1. [逐玉第二](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%AC%AC%E4%BA%8C%23) `102.2K 🔥` `-35%`
1. [为什么我们要多吃水果](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%91%E4%BB%AC%E8%A6%81%E5%A4%9A%E5%90%83%E6%B0%B4%E6%9E%9C%23) `94.8K 🔥` `-32%`
1. [齐俞 齐煜](https://s.weibo.com/weibo?q=%23%E9%BD%90%E4%BF%9E%20%E9%BD%90%E7%85%9C%23) `94.7K 🔥` `-38%`
1. [张凌赫出发录开始推理吧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%87%BA%E5%8F%91%E5%BD%95%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A7%23) `92.2K 🔥` `-39%`
1. [开始推理吧](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A7%23) `92.1K 🔥` `-23%`
1. [邓凯新剧又是强制爱 (Deng Kai’s new drama is about forced love again)](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E6%96%B0%E5%89%A7%E5%8F%88%E6%98%AF%E5%BC%BA%E5%88%B6%E7%88%B1%23) `92.0K 🔥` `-60%`

Updated at 2026-03-23 23:40:16

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
