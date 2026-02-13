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

1. [瑶一瑶藏剪刀被安检发现 (Yao Yiyao’s hidden scissors were discovered by security)](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E8%97%8F%E5%89%AA%E5%88%80%E8%A2%AB%E5%AE%89%E6%A3%80%E5%8F%91%E7%8E%B0%23) `154.7K 🔥` `NEW`
1. [爱泼斯坦假尸体事件披露](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E5%81%87%E5%B0%B8%E4%BD%93%E4%BA%8B%E4%BB%B6%E6%8A%AB%E9%9C%B2%23) `153.6K 🔥` `NEW`
1. [外交部回应日本扣押中国渔船](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E6%97%A5%E6%9C%AC%E6%89%A3%E6%8A%BC%E4%B8%AD%E5%9B%BD%E6%B8%94%E8%88%B9%23) `151.9K 🔥` `NEW`
1. [跟着易烊千玺教爸妈用千问](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%95%99%E7%88%B8%E5%A6%88%E7%94%A8%E5%8D%83%E9%97%AE%23) `132.0K 🔥` `NEW`
1. [虞书欣每天一杯奶茶](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%AF%8F%E5%A4%A9%E4%B8%80%E6%9D%AF%E5%A5%B6%E8%8C%B6%23) `131.8K 🔥` `NEW`
1. [6个男艺人屁股夹筷子综艺雷霆画面](https://s.weibo.com/weibo?q=%236%E4%B8%AA%E7%94%B7%E8%89%BA%E4%BA%BA%E5%B1%81%E8%82%A1%E5%A4%B9%E7%AD%B7%E5%AD%90%E7%BB%BC%E8%89%BA%E9%9B%B7%E9%9C%86%E7%94%BB%E9%9D%A2%23) `130.3K 🔥` `NEW`
1. [发1.8亿年终奖老板再招63人](https://s.weibo.com/weibo?q=%23%E5%8F%911.8%E4%BA%BF%E5%B9%B4%E7%BB%88%E5%A5%96%E8%80%81%E6%9D%BF%E5%86%8D%E6%8B%9B63%E4%BA%BA%23) `123.1K 🔥` `NEW`
1. [王濛说范可新挺不容易的](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E8%AF%B4%E8%8C%83%E5%8F%AF%E6%96%B0%E6%8C%BA%E4%B8%8D%E5%AE%B9%E6%98%93%E7%9A%84%23) `113.1K 🔥` `NEW`
1. [钎城后羿四杀](https://s.weibo.com/weibo?q=%23%E9%92%8E%E5%9F%8E%E5%90%8E%E7%BE%BF%E5%9B%9B%E6%9D%80%23) `112.6K 🔥` `NEW`
1. [60岁男子硬座返乡谈彩礼几十万](https://s.weibo.com/weibo?q=%2360%E5%B2%81%E7%94%B7%E5%AD%90%E7%A1%AC%E5%BA%A7%E8%BF%94%E4%B9%A1%E8%B0%88%E5%BD%A9%E7%A4%BC%E5%87%A0%E5%8D%81%E4%B8%87%23) `102.5K 🔥` `NEW`
1. [林允骨相 (Lin Yun's bones)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%85%81%E9%AA%A8%E7%9B%B8%23) `96.5K 🔥` `NEW`
1. [小猫下意识的把头伸过去](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%B8%8B%E6%84%8F%E8%AF%86%E7%9A%84%E6%8A%8A%E5%A4%B4%E4%BC%B8%E8%BF%87%E5%8E%BB%23) `93.3K 🔥` `NEW`
1. [谭松韵演的小胡姬](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E6%BC%94%E7%9A%84%E5%B0%8F%E8%83%A1%E5%A7%AC%23) `91.2K 🔥` `NEW`
1. [蛇年A股收官](https://s.weibo.com/weibo?q=%23%E8%9B%87%E5%B9%B4A%E8%82%A1%E6%94%B6%E5%AE%98%23) `90.0K 🔥` `NEW`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `86.1K 🔥` `NEW`
1. [林俊杰回归音乐](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%9B%9E%E5%BD%92%E9%9F%B3%E4%B9%90%23) `84.3K 🔥` `NEW`
1. [小猫因为剪指甲干架没干过](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%9B%A0%E4%B8%BA%E5%89%AA%E6%8C%87%E7%94%B2%E5%B9%B2%E6%9E%B6%E6%B2%A1%E5%B9%B2%E8%BF%87%23) `83.9K 🔥` `NEW`
1. [中戏院长郝戎落马不足两个月](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E9%99%A2%E9%95%BF%E9%83%9D%E6%88%8E%E8%90%BD%E9%A9%AC%E4%B8%8D%E8%B6%B3%E4%B8%A4%E4%B8%AA%E6%9C%88%23) `80.2K 🔥` `NEW`
1. [大衣哥朱之文女儿结婚](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%A1%A3%E5%93%A5%E6%9C%B1%E4%B9%8B%E6%96%87%E5%A5%B3%E5%84%BF%E7%BB%93%E5%A9%9A%23) `79.5K 🔥` `NEW`
1. [樊振东本赛季出场计划](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%9C%AC%E8%B5%9B%E5%AD%A3%E5%87%BA%E5%9C%BA%E8%AE%A1%E5%88%92%23) `79.5K 🔥` `NEW`
1. [詹姆斯史上最老三双 (James' oldest triple-double in history)](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%8F%B2%E4%B8%8A%E6%9C%80%E8%80%81%E4%B8%89%E5%8F%8C%23) `79.3K 🔥` `NEW`
1. [北京规则怪谈](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E8%A7%84%E5%88%99%E6%80%AA%E8%B0%88%23) `152.9K 🔥` `+44%`
1. [中戏发生了什么 (What happened in the drama)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%23) `1.1M 🔥`
1. [公司利润2.7亿拿1.8亿发年终奖 (The company made a profit of 270 million and received a year-end bonus of 180 million)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E5%88%A9%E6%B6%A62.7%E4%BA%BF%E6%8B%BF1.8%E4%BA%BF%E5%8F%91%E5%B9%B4%E7%BB%88%E5%A5%96%23) `834.2K 🔥`
1. [春节回家看老师](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E5%9B%9E%E5%AE%B6%E7%9C%8B%E8%80%81%E5%B8%88%23) `667.8K 🔥`
1. [薛之谦广州站官宣 (Joker Xue Guangzhou station official announcement)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%B9%BF%E5%B7%9E%E7%AB%99%E5%AE%98%E5%AE%A3%23) `429.4K 🔥`
1. [白鹿李昀锐春晚造型](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9D%8E%E6%98%80%E9%94%90%E6%98%A5%E6%99%9A%E9%80%A0%E5%9E%8B%23) `258.2K 🔥`
1. [王橹杰 祝你永远闪烁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E7%A5%9D%E4%BD%A0%E6%B0%B8%E8%BF%9C%E9%97%AA%E7%83%81%23) `151.5K 🔥`
1. [网红兔狲狲三郎死亡 (Internet celebrity Rabbit Saburo dies)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%85%94%E7%8B%B2%E7%8B%B2%E4%B8%89%E9%83%8E%E6%AD%BB%E4%BA%A1%23) `129.2K 🔥`
1. [胡意旋 灵灵花](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%84%8F%E6%97%8B%20%E7%81%B5%E7%81%B5%E8%8A%B1%23) `116.6K 🔥`
1. [王鑫生万物戏份仍在](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%91%AB%E7%94%9F%E4%B8%87%E7%89%A9%E6%88%8F%E4%BB%BD%E4%BB%8D%E5%9C%A8%23) `104.5K 🔥`
1. [湛江一海滩发现疑似儒艮尸体](https://s.weibo.com/weibo?q=%23%E6%B9%9B%E6%B1%9F%E4%B8%80%E6%B5%B7%E6%BB%A9%E5%8F%91%E7%8E%B0%E7%96%91%E4%BC%BC%E5%84%92%E8%89%AE%E5%B0%B8%E4%BD%93%23) `354.7K 🔥` `-21%`
1. [父母花了几十万装修的房子 (My parents spent hundreds of thousands renovating the house)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E8%8A%B1%E4%BA%86%E5%87%A0%E5%8D%81%E4%B8%87%E8%A3%85%E4%BF%AE%E7%9A%84%E6%88%BF%E5%AD%90%23) `308.8K 🔥` `-29%`
1. [中戏已有两位表演系主任主动投案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E5%B7%B2%E6%9C%89%E4%B8%A4%E4%BD%8D%E8%A1%A8%E6%BC%94%E7%B3%BB%E4%B8%BB%E4%BB%BB%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `179.6K 🔥` `-29%`
1. [TTG对战DYG](https://s.weibo.com/weibo?q=%23TTG%E5%AF%B9%E6%88%98DYG%23) `177.8K 🔥` `-23%`
1. [爸妈嘴里的大大方方 (The generous words from parents’ mouths)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E5%A6%88%E5%98%B4%E9%87%8C%E7%9A%84%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%23) `154.8K 🔥` `-38%`
1. [任敏回老家也得穿省服](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E5%9B%9E%E8%80%81%E5%AE%B6%E4%B9%9F%E5%BE%97%E7%A9%BF%E7%9C%81%E6%9C%8D%23) `154.4K 🔥` `-33%`
1. [前女友送的40克银镯子内含30克黄金](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%A5%B3%E5%8F%8B%E9%80%81%E7%9A%8440%E5%85%8B%E9%93%B6%E9%95%AF%E5%AD%90%E5%86%85%E5%90%AB30%E5%85%8B%E9%BB%84%E9%87%91%23) `154.1K 🔥` `-36%`
1. [冯巩想死我了 张兴朝哭死我了](https://s.weibo.com/weibo?q=%23%E5%86%AF%E5%B7%A9%E6%83%B3%E6%AD%BB%E6%88%91%E4%BA%86%20%E5%BC%A0%E5%85%B4%E6%9C%9D%E5%93%AD%E6%AD%BB%E6%88%91%E4%BA%86%23) `153.5K 🔥` `-28%`
1. [小S晒开工照](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E6%99%92%E5%BC%80%E5%B7%A5%E7%85%A7%23) `153.3K 🔥` `-34%`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `153.0K 🔥` `-35%`
1. [周柯宇陈妍希情人节封面](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9F%AF%E5%AE%87%E9%99%88%E5%A6%8D%E5%B8%8C%E6%83%85%E4%BA%BA%E8%8A%82%E5%B0%81%E9%9D%A2%23) `142.4K 🔥` `-40%`
1. [女演员曾公开称美国上流精英吃婴儿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E6%9B%BE%E5%85%AC%E5%BC%80%E7%A7%B0%E7%BE%8E%E5%9B%BD%E4%B8%8A%E6%B5%81%E7%B2%BE%E8%8B%B1%E5%90%83%E5%A9%B4%E5%84%BF%23) `136.3K 🔥` `-33%`
1. [爹 生了两个活爹](https://s.weibo.com/weibo?q=%23%E7%88%B9%20%E7%94%9F%E4%BA%86%E4%B8%A4%E4%B8%AA%E6%B4%BB%E7%88%B9%23) `131.1K 🔥` `-43%`
1. [丞磊王楚然 京洛再无佳人](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E7%8E%8B%E6%A5%9A%E7%84%B6%20%E4%BA%AC%E6%B4%9B%E5%86%8D%E6%97%A0%E4%BD%B3%E4%BA%BA%23) `130.6K 🔥` `-34%`
1. [王菲 春晚 (Faye Wong Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%20%E6%98%A5%E6%99%9A%23) `117.1K 🔥` `-36%`
1. [王鑫被查 (Wang Xin was investigated)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%91%AB%E8%A2%AB%E6%9F%A5%23) `106.3K 🔥` `-27%`
1. [DYG这是什么阵容](https://s.weibo.com/weibo?q=%23DYG%E8%BF%99%E6%98%AF%E4%BB%80%E4%B9%88%E9%98%B5%E5%AE%B9%23) `87.2K 🔥` `-64%`
1. [橹穆双人卡](https://s.weibo.com/weibo?q=%23%E6%A9%B9%E7%A9%86%E5%8F%8C%E4%BA%BA%E5%8D%A1%23) `83.0K 🔥` `-61%`

Updated at 2026-02-13 16:00:33

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
