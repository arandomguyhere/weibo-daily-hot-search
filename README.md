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

1. [中美两国元首夫妇茶叙](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E4%B8%A4%E5%9B%BD%E5%85%83%E9%A6%96%E5%A4%AB%E5%A6%87%E8%8C%B6%E5%8F%99%23) `1.0M 🔥` `NEW`
1. [陈妤颉100米夺金](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%A4%E9%A2%89100%E7%B1%B3%E5%A4%BA%E9%87%91%23) `837.2K 🔥` `NEW`
1. [从一撇一捺看中美青年双向奔赴](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E4%B8%80%E6%92%87%E4%B8%80%E6%8D%BA%E7%9C%8B%E4%B8%AD%E7%BE%8E%E9%9D%92%E5%B9%B4%E5%8F%8C%E5%90%91%E5%A5%94%E8%B5%B4%23) `600.3K 🔥` `NEW`
1. [特朗普演讲中秀中文](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%BC%94%E8%AE%B2%E4%B8%AD%E7%A7%80%E4%B8%AD%E6%96%87%23) `465.2K 🔥` `NEW`
1. [南枝 淑柔](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%9E%9D%20%E6%B7%91%E6%9F%94%23) `446.9K 🔥` `NEW`
1. [芭莎之夜](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E8%8E%8E%E4%B9%8B%E5%A4%9C%23) `391.4K 🔥` `NEW`
1. [魏大勋一半一半好听](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E4%B8%80%E5%8D%8A%E4%B8%80%E5%8D%8A%E5%A5%BD%E5%90%AC%23) `376.4K 🔥` `NEW`
1. [谢震业10秒30](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%87%E4%B8%9A10%E7%A7%9230%23) `369.5K 🔥` `NEW`
1. [多家金店下架金豆](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E9%87%91%E5%BA%97%E4%B8%8B%E6%9E%B6%E9%87%91%E8%B1%86%23) `345.9K 🔥` `NEW`
1. [特朗普赠中方白头鹰雕像](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%B5%A0%E4%B8%AD%E6%96%B9%E7%99%BD%E5%A4%B4%E9%B9%B0%E9%9B%95%E5%83%8F%23) `325.1K 🔥` `NEW`
1. [井柏然刘雯去看李荣浩演唱会](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%98%E9%9B%AF%E5%8E%BB%E7%9C%8B%E6%9D%8E%E8%8D%A3%E6%B5%A9%E6%BC%94%E5%94%B1%E4%BC%9A%23) `325.1K 🔥` `NEW`
1. [护士抢救10天去世超48小时不予认定工伤](https://s.weibo.com/weibo?q=%23%E6%8A%A4%E5%A3%AB%E6%8A%A2%E6%95%9110%E5%A4%A9%E5%8E%BB%E4%B8%96%E8%B6%8548%E5%B0%8F%E6%97%B6%E4%B8%8D%E4%BA%88%E8%AE%A4%E5%AE%9A%E5%B7%A5%E4%BC%A4%23) `321.3K 🔥` `NEW`
1. [兰香如故真是虐麻了](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%9C%9F%E6%98%AF%E8%99%90%E9%BA%BB%E4%BA%86%23) `317.5K 🔥` `NEW`
1. [倪妮让宋威龙田曦薇文淇开心点](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%E8%AE%A9%E5%AE%8B%E5%A8%81%E9%BE%99%E7%94%B0%E6%9B%A6%E8%96%87%E6%96%87%E6%B7%87%E5%BC%80%E5%BF%83%E7%82%B9%23) `314.8K 🔥` `NEW`
1. [曾辉韩雨彤太甜了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E9%9F%A9%E9%9B%A8%E5%BD%A4%E5%A4%AA%E7%94%9C%E4%BA%86%23) `312.2K 🔥` `NEW`
1. [莎拉布莱曼周深合唱](https://s.weibo.com/weibo?q=%23%E8%8E%8E%E6%8B%89%E5%B8%83%E8%8E%B1%E6%9B%BC%E5%91%A8%E6%B7%B1%E5%90%88%E5%94%B1%23) `267.9K 🔥` `NEW`
1. [医院回应男子留观室自缢身亡](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E5%9B%9E%E5%BA%94%E7%94%B7%E5%AD%90%E7%95%99%E8%A7%82%E5%AE%A4%E8%87%AA%E7%BC%A2%E8%BA%AB%E4%BA%A1%23) `257.5K 🔥` `NEW`
1. [华为赛力斯合作模式调整影响](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E8%B5%9B%E5%8A%9B%E6%96%AF%E5%90%88%E4%BD%9C%E6%A8%A1%E5%BC%8F%E8%B0%83%E6%95%B4%E5%BD%B1%E5%93%8D%23) `257.4K 🔥` `NEW`
1. [兰香如故BE](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85BE%23) `257.1K 🔥` `NEW`
1. [93岁太姥爷辅导作业被气得文思泉涌](https://s.weibo.com/weibo?q=%2393%E5%B2%81%E5%A4%AA%E5%A7%A5%E7%88%B7%E8%BE%85%E5%AF%BC%E4%BD%9C%E4%B8%9A%E8%A2%AB%E6%B0%94%E5%BE%97%E6%96%87%E6%80%9D%E6%B3%89%E6%B6%8C%23) `256.8K 🔥` `NEW`
1. [王楚钦也是人不是神](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B9%9F%E6%98%AF%E4%BA%BA%E4%B8%8D%E6%98%AF%E7%A5%9E%23) `256.6K 🔥` `NEW`
1. [月饼](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%A5%BC%23) `256.6K 🔥` `NEW`
1. [网友710万卖房签合同瞬间泪崩](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B710%E4%B8%87%E5%8D%96%E6%88%BF%E7%AD%BE%E5%90%88%E5%90%8C%E7%9E%AC%E9%97%B4%E6%B3%AA%E5%B4%A9%23) `256.3K 🔥` `NEW`
1. [戚薇 3D打印水花裙](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%203D%E6%89%93%E5%8D%B0%E6%B0%B4%E8%8A%B1%E8%A3%99%23) `244.8K 🔥` `NEW`
1. [亚运会 吴艳妮](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%20%E5%90%B4%E8%89%B3%E5%A6%AE%23) `234.3K 🔥` `NEW`
1. [日本选手被张展硕7枚金牌惊出表情包](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%80%89%E6%89%8B%E8%A2%AB%E5%BC%A0%E5%B1%95%E7%A1%957%E6%9E%9A%E9%87%91%E7%89%8C%E6%83%8A%E5%87%BA%E8%A1%A8%E6%83%85%E5%8C%85%23) `230.8K 🔥` `NEW`
1. [小黄豆报警](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BB%84%E8%B1%86%E6%8A%A5%E8%AD%A6%23) `226.8K 🔥` `NEW`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `224.1K 🔥` `NEW`
1. [台湾最低月薪首破3万新台币](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E6%9C%80%E4%BD%8E%E6%9C%88%E8%96%AA%E9%A6%96%E7%A0%B43%E4%B8%87%E6%96%B0%E5%8F%B0%E5%B8%81%23) `221.4K 🔥` `NEW`
1. [张远的提词器全是拼音](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E7%9A%84%E6%8F%90%E8%AF%8D%E5%99%A8%E5%85%A8%E6%98%AF%E6%8B%BC%E9%9F%B3%23) `217.2K 🔥` `NEW`
1. [张凌赫拍的一亿七千万像素的月亮](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8B%8D%E7%9A%84%E4%B8%80%E4%BA%BF%E4%B8%83%E5%8D%83%E4%B8%87%E5%83%8F%E7%B4%A0%E7%9A%84%E6%9C%88%E4%BA%AE%23) `215.1K 🔥` `NEW`
1. [戚薇造型 致敬蔡明](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E9%80%A0%E5%9E%8B%20%E8%87%B4%E6%95%AC%E8%94%A1%E6%98%8E%23) `201.4K 🔥` `NEW`
1. [周深差点掉下来](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%B7%AE%E7%82%B9%E6%8E%89%E4%B8%8B%E6%9D%A5%23) `199.4K 🔥` `NEW`
1. [全身为什么面部皮肤看起来最差](https://s.weibo.com/weibo?q=%23%E5%85%A8%E8%BA%AB%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9D%A2%E9%83%A8%E7%9A%AE%E8%82%A4%E7%9C%8B%E8%B5%B7%E6%9D%A5%E6%9C%80%E5%B7%AE%23) `196.5K 🔥` `NEW`
1. [林诗栋赛后累到下意识捶背](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E8%B5%9B%E5%90%8E%E7%B4%AF%E5%88%B0%E4%B8%8B%E6%84%8F%E8%AF%86%E6%8D%B6%E8%83%8C%23) `187.6K 🔥` `NEW`
1. [林绣茹难产](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%BB%A3%E8%8C%B9%E9%9A%BE%E4%BA%A7%23) `185.3K 🔥` `NEW`
1. [王楚钦混双引争议](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%B7%B7%E5%8F%8C%E5%BC%95%E4%BA%89%E8%AE%AE%23) `184.5K 🔥` `NEW`
1. [第一个想到这么拍月亮的人真是天才](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%83%B3%E5%88%B0%E8%BF%99%E4%B9%88%E6%8B%8D%E6%9C%88%E4%BA%AE%E7%9A%84%E4%BA%BA%E7%9C%9F%E6%98%AF%E5%A4%A9%E6%89%8D%23) `183.3K 🔥` `NEW`
1. [兰香如故林家这都是什么鬼热闹](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E6%9E%97%E5%AE%B6%E8%BF%99%E9%83%BD%E6%98%AF%E4%BB%80%E4%B9%88%E9%AC%BC%E7%83%AD%E9%97%B9%23) `181.7K 🔥` `NEW`
1. [Gucci大秀直击](https://s.weibo.com/weibo?q=%23Gucci%E5%A4%A7%E7%A7%80%E7%9B%B4%E5%87%BB%23) `178.3K 🔥` `NEW`
1. [张桂源 泡泡](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%20%E6%B3%A1%E6%B3%A1%23) `176.0K 🔥` `NEW`
1. [我要像侯佩岑那么说话](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%A6%81%E5%83%8F%E4%BE%AF%E4%BD%A9%E5%B2%91%E9%82%A3%E4%B9%88%E8%AF%B4%E8%AF%9D%23) `163.9K 🔥` `NEW`
1. [张展硕父亲怕丢人让他学游泳](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95%E7%88%B6%E4%BA%B2%E6%80%95%E4%B8%A2%E4%BA%BA%E8%AE%A9%E4%BB%96%E5%AD%A6%E6%B8%B8%E6%B3%B3%23) `156.4K 🔥` `NEW`
1. [马斯克母亲发布中秋祝福视频](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%AF%8D%E4%BA%B2%E5%8F%91%E5%B8%83%E4%B8%AD%E7%A7%8B%E7%A5%9D%E7%A6%8F%E8%A7%86%E9%A2%91%23) `142.5K 🔥` `NEW`
1. [中秋赏月](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E8%B5%8F%E6%9C%88%23) `138.0K 🔥` `NEW`
1. [月亮](https://s.weibo.com/weibo?q=%23%E6%9C%88%E4%BA%AE%23) `271.6K 🔥` `+32%`
1. [中秋文案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E6%96%87%E6%A1%88%23) `256.3K 🔥`
1. [华系新王奕境X9绝杀价27.98万起](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E7%B3%BB%E6%96%B0%E7%8E%8B%E5%A5%95%E5%A2%83X9%E7%BB%9D%E6%9D%80%E4%BB%B727.98%E4%B8%87%E8%B5%B7%23) `497.6K 🔥` `-38%`
1. [比亚迪第2000座闪充高速站](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E7%AC%AC2000%E5%BA%A7%E9%97%AA%E5%85%85%E9%AB%98%E9%80%9F%E7%AB%99%23) `379.5K 🔥` `-50%`
1. [亚运会游泳](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%B8%B8%E6%B3%B3%23) `312.7K 🔥` `-44%`
1. [张继科说国乒根本就不能输](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%AF%B4%E5%9B%BD%E4%B9%92%E6%A0%B9%E6%9C%AC%E5%B0%B1%E4%B8%8D%E8%83%BD%E8%BE%93%23) `257.1K 🔥` `-30%`
1. [中秋节](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E8%8A%82%23) `171.6K 🔥` `-58%`

Updated at 2026-09-25 23:29:05

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
