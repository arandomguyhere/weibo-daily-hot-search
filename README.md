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

1. [陶昕然淘汰 (Tao Xinran was eliminated)](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E6%B7%98%E6%B1%B0%23) `9.7M 🔥` `NEW`
1. [白敬亭为问界M6车主交车](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E4%B8%BA%E9%97%AE%E7%95%8CM6%E8%BD%A6%E4%B8%BB%E4%BA%A4%E8%BD%A6%23) `4.0M 🔥` `NEW`
1. [浪姐 赢了被淘汰](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E8%B5%A2%E4%BA%86%E8%A2%AB%E6%B7%98%E6%B1%B0%23) `1.7M 🔥` `NEW`
1. [丁俊晖vs赵心童](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96vs%E8%B5%B5%E5%BF%83%E7%AB%A5%23) `1.6M 🔥` `NEW`
1. [开局之年我国经济运行起步有力](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%80%E4%B9%8B%E5%B9%B4%E6%88%91%E5%9B%BD%E7%BB%8F%E6%B5%8E%E8%BF%90%E8%A1%8C%E8%B5%B7%E6%AD%A5%E6%9C%89%E5%8A%9B%23) `1.4M 🔥` `NEW`
1. [唐艺昕 大大方方](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%20%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%23) `438.0K 🔥` `NEW`
1. [斯诺克世锦赛](https://s.weibo.com/weibo?q=%23%E6%96%AF%E8%AF%BA%E5%85%8B%E4%B8%96%E9%94%A6%E8%B5%9B%23) `427.6K 🔥` `NEW`
1. [电诈园老板嚣张妄言警方拿他没办法](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%AF%88%E5%9B%AD%E8%80%81%E6%9D%BF%E5%9A%A3%E5%BC%A0%E5%A6%84%E8%A8%80%E8%AD%A6%E6%96%B9%E6%8B%BF%E4%BB%96%E6%B2%A1%E5%8A%9E%E6%B3%95%23) `423.7K 🔥` `NEW`
1. [陶昕然 天选古人](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%20%E5%A4%A9%E9%80%89%E5%8F%A4%E4%BA%BA%23) `417.1K 🔥` `NEW`
1. [最长的电影](https://s.weibo.com/weibo?q=%23%E6%9C%80%E9%95%BF%E7%9A%84%E7%94%B5%E5%BD%B1%23) `410.9K 🔥` `NEW`
1. [黄金跌透了吗 (Has gold fallen through the cracks?)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E9%80%8F%E4%BA%86%E5%90%97%23) `402.8K 🔥` `NEW`
1. [时代峰峻把微店告了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%8A%8A%E5%BE%AE%E5%BA%97%E5%91%8A%E4%BA%86%23) `390.8K 🔥` `NEW`
1. [华晨宇演唱会当地民众发声](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E5%BD%93%E5%9C%B0%E6%B0%91%E4%BC%97%E5%8F%91%E5%A3%B0%23) `351.2K 🔥` `NEW`
1. [金价跌破新低](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E7%A0%B4%E6%96%B0%E4%BD%8E%23) `297.2K 🔥` `NEW`
1. [卫健局介入医院写错药量大妈猛吃42粒](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%B1%80%E4%BB%8B%E5%85%A5%E5%8C%BB%E9%99%A2%E5%86%99%E9%94%99%E8%8D%AF%E9%87%8F%E5%A4%A7%E5%A6%88%E7%8C%9B%E5%90%8342%E7%B2%92%23) `290.2K 🔥` `NEW`
1. [KSG总决赛首日登顶](https://s.weibo.com/weibo?q=%23KSG%E6%80%BB%E5%86%B3%E8%B5%9B%E9%A6%96%E6%97%A5%E7%99%BB%E9%A1%B6%23) `275.1K 🔥` `NEW`
1. [杨博文回学校上课](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E5%9B%9E%E5%AD%A6%E6%A0%A1%E4%B8%8A%E8%AF%BE%23) `247.9K 🔥` `NEW`
1. [全国首个伴侣动物立法草案引争议](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E9%A6%96%E4%B8%AA%E4%BC%B4%E4%BE%A3%E5%8A%A8%E7%89%A9%E7%AB%8B%E6%B3%95%E8%8D%89%E6%A1%88%E5%BC%95%E4%BA%89%E8%AE%AE%23) `242.3K 🔥` `NEW`
1. [妈妈生了9个孩子又有了30个孙辈 (Mom gave birth to 9 children and 30 grandchildren)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%94%9F%E4%BA%869%E4%B8%AA%E5%AD%A9%E5%AD%90%E5%8F%88%E6%9C%89%E4%BA%8630%E4%B8%AA%E5%AD%99%E8%BE%88%23) `470.5K 🔥` `+62%`
1. [黄仁勋预言的灾难仅9天就成真](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E9%A2%84%E8%A8%80%E7%9A%84%E7%81%BE%E9%9A%BE%E4%BB%859%E5%A4%A9%E5%B0%B1%E6%88%90%E7%9C%9F%23) `459.6K 🔥` `+55%`
1. [安崎李心洁 神级舞台](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E6%9D%8E%E5%BF%83%E6%B4%81%20%E7%A5%9E%E7%BA%A7%E8%88%9E%E5%8F%B0%23) `468.3K 🔥`
1. [美国女子在印度遭民宿员工下药强奸 (American woman drugged and raped by B&B employee in India)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%8D%B0%E5%BA%A6%E9%81%AD%E6%B0%91%E5%AE%BF%E5%91%98%E5%B7%A5%E4%B8%8B%E8%8D%AF%E5%BC%BA%E5%A5%B8%23) `323.7K 🔥`
1. [张奕然被重庆艺术学校录取](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A5%95%E7%84%B6%E8%A2%AB%E9%87%8D%E5%BA%86%E8%89%BA%E6%9C%AF%E5%AD%A6%E6%A0%A1%E5%BD%95%E5%8F%96%23) `299.8K 🔥`
1. [网友开始嗑李昀锐和白鹿](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%BC%80%E5%A7%8B%E5%97%91%E6%9D%8E%E6%98%80%E9%94%90%E5%92%8C%E7%99%BD%E9%B9%BF%23) `269.6K 🔥`
1. [弯道之王领克10+和10开启预售](https://s.weibo.com/weibo?q=%23%E5%BC%AF%E9%81%93%E4%B9%8B%E7%8E%8B%E9%A2%86%E5%85%8B10%2B%E5%92%8C10%E5%BC%80%E5%90%AF%E9%A2%84%E5%94%AE%23) `467.4K 🔥` `-55%`
1. [年少的心动真的过期不候](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%B0%91%E7%9A%84%E5%BF%83%E5%8A%A8%E7%9C%9F%E7%9A%84%E8%BF%87%E6%9C%9F%E4%B8%8D%E5%80%99%23) `465.1K 🔥` `-76%`
1. [12306回应家长和孩子相隔14个车厢 (12306 responded that parents and children are separated by 14 carriages)](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E5%AE%B6%E9%95%BF%E5%92%8C%E5%AD%A9%E5%AD%90%E7%9B%B8%E9%9A%9414%E4%B8%AA%E8%BD%A6%E5%8E%A2%23) `461.0K 🔥` `-61%`
1. [梅毒并非只通过性传播 (Syphilis is not only sexually transmitted)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E6%AF%92%E5%B9%B6%E9%9D%9E%E5%8F%AA%E9%80%9A%E8%BF%87%E6%80%A7%E4%BC%A0%E6%92%AD%23) `455.4K 🔥` `-77%`
1. [鹿晗 红包 (Luhan red envelope)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E7%BA%A2%E5%8C%85%23) `452.2K 🔥` `-97%`
1. [曝毛晓彤凌晨从医美诊所离开](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%AF%9B%E6%99%93%E5%BD%A4%E5%87%8C%E6%99%A8%E4%BB%8E%E5%8C%BB%E7%BE%8E%E8%AF%8A%E6%89%80%E7%A6%BB%E5%BC%80%23) `449.6K 🔥` `-63%`
1. [C罗认为人类喝牛奶不正常 (Cristiano Ronaldo thinks drinking milk is abnormal for humans)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%AE%A4%E4%B8%BA%E4%BA%BA%E7%B1%BB%E5%96%9D%E7%89%9B%E5%A5%B6%E4%B8%8D%E6%AD%A3%E5%B8%B8%23) `445.5K 🔥` `-65%`
1. [黄宗泽 牙龈萎缩](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AE%97%E6%B3%BD%20%E7%89%99%E9%BE%88%E8%90%8E%E7%BC%A9%23) `441.0K 🔥` `-61%`
1. [以色列总理证实患癌但已治疗](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%80%BB%E7%90%86%E8%AF%81%E5%AE%9E%E6%82%A3%E7%99%8C%E4%BD%86%E5%B7%B2%E6%B2%BB%E7%96%97%23) `436.8K 🔥` `-78%`
1. [CBA](https://s.weibo.com/weibo?q=%23CBA%23) `433.3K 🔥` `-77%`
1. [毛晓彤回应去医美诊所 (Mao Xiaotong responded to going to a medical beauty clinic)](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E5%BD%A4%E5%9B%9E%E5%BA%94%E5%8E%BB%E5%8C%BB%E7%BE%8E%E8%AF%8A%E6%89%80%23) `422.2K 🔥` `-25%`
1. [这才是普通家庭养孩子的最优解](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E6%99%AE%E9%80%9A%E5%AE%B6%E5%BA%AD%E5%85%BB%E5%AD%A9%E5%AD%90%E7%9A%84%E6%9C%80%E4%BC%98%E8%A7%A3%23) `414.4K 🔥` `-36%`
1. [孙杨 保送再见爱人 (Sun Yang, farewell to my lover)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E4%BF%9D%E9%80%81%E5%86%8D%E8%A7%81%E7%88%B1%E4%BA%BA%23) `410.2K 🔥` `-38%`
1. [原来内耗的人需要的是这样的安慰](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%85%E8%80%97%E7%9A%84%E4%BA%BA%E9%9C%80%E8%A6%81%E7%9A%84%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%E5%AE%89%E6%85%B0%23) `406.2K 🔥` `-28%`
1. [原神](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%23) `398.6K 🔥` `-52%`
1. [何宣林 分词](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%20%E5%88%86%E8%AF%8D%23) `393.0K 🔥` `-49%`
1. [你为什么不吃呷哺呷哺了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%90%83%E5%91%B7%E5%93%BA%E5%91%B7%E5%93%BA%E4%BA%86%23) `368.6K 🔥` `-25%`
1. [孙怡团805票](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%9B%A2805%E7%A5%A8%23) `367.8K 🔥` `-81%`
1. [张杰工作室文案 (Zhang Jie studio copywriting)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%96%87%E6%A1%88%23) `363.8K 🔥` `-28%`
1. [牙龈萎缩之后还能再长回来吗](https://s.weibo.com/weibo?q=%23%E7%89%99%E9%BE%88%E8%90%8E%E7%BC%A9%E4%B9%8B%E5%90%8E%E8%BF%98%E8%83%BD%E5%86%8D%E9%95%BF%E5%9B%9E%E6%9D%A5%E5%90%97%23) `353.6K 🔥` `-71%`
1. [范玮琪咋自己玩上了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E7%8E%AE%E7%90%AA%E5%92%8B%E8%87%AA%E5%B7%B1%E7%8E%A9%E4%B8%8A%E4%BA%86%23) `339.8K 🔥` `-45%`
1. [孙杨 爷们要脸](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E7%88%B7%E4%BB%AC%E8%A6%81%E8%84%B8%23) `320.8K 🔥` `-27%`
1. [AI在保护AI (AI is protecting AI)](https://s.weibo.com/weibo?q=%23AI%E5%9C%A8%E4%BF%9D%E6%8A%A4AI%23) `286.1K 🔥` `-47%`
1. [海哈金喜回应与李亚鹏复婚](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%93%88%E9%87%91%E5%96%9C%E5%9B%9E%E5%BA%94%E4%B8%8E%E6%9D%8E%E4%BA%9A%E9%B9%8F%E5%A4%8D%E5%A9%9A%23) `272.7K 🔥` `-55%`
1. [张真源连撕四人名牌终结比赛 (Zhang Zhenyuan tore off four people's name tags to end the game)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E8%BF%9E%E6%92%95%E5%9B%9B%E4%BA%BA%E5%90%8D%E7%89%8C%E7%BB%88%E7%BB%93%E6%AF%94%E8%B5%9B%23) `242.7K 🔥` `-47%`
1. [李现疑似对共享单车粉转黑](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E7%96%91%E4%BC%BC%E5%AF%B9%E5%85%B1%E4%BA%AB%E5%8D%95%E8%BD%A6%E7%B2%89%E8%BD%AC%E9%BB%91%23) `240.2K 🔥` `-38%`
1. [外国人被上海烘焙店震惊](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E8%A2%AB%E4%B8%8A%E6%B5%B7%E7%83%98%E7%84%99%E5%BA%97%E9%9C%87%E6%83%8A%23) `215.6K 🔥` `-90%`

Updated at 2026-04-24 23:22:31

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
