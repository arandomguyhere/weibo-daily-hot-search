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

1. [票房 (box office)](https://s.weibo.com/weibo?q=%23%E7%A5%A8%E6%88%BF%23) `1.1M 🔥` `NEW`
1. [王菲连续两年带火小众耳环](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E8%BF%9E%E7%BB%AD%E4%B8%A4%E5%B9%B4%E5%B8%A6%E7%81%AB%E5%B0%8F%E4%BC%97%E8%80%B3%E7%8E%AF%23) `461.6K 🔥` `NEW`
1. [我的飞驰人生3关键词](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%E5%85%B3%E9%94%AE%E8%AF%8D%23) `217.7K 🔥` `NEW`
1. [汪苏泷 我在春晚闯祸](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%20%E6%88%91%E5%9C%A8%E6%98%A5%E6%99%9A%E9%97%AF%E7%A5%B8%23) `217.2K 🔥` `NEW`
1. [春晚严选靠谱车](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E4%B8%A5%E9%80%89%E9%9D%A0%E8%B0%B1%E8%BD%A6%23) `216.6K 🔥` `NEW`
1. [开始吃剩菜](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E5%90%83%E5%89%A9%E8%8F%9C%23) `216.6K 🔥` `NEW`
1. [鲁比奥发农历新年祝福](https://s.weibo.com/weibo?q=%23%E9%B2%81%E6%AF%94%E5%A5%A5%E5%8F%91%E5%86%9C%E5%8E%86%E6%96%B0%E5%B9%B4%E7%A5%9D%E7%A6%8F%23) `216.2K 🔥` `NEW`
1. [王一博 工作留痕](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E5%B7%A5%E4%BD%9C%E7%95%99%E7%97%95%23) `215.8K 🔥` `NEW`
1. [对弈竞猜](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%BC%88%E7%AB%9E%E7%8C%9C%23) `215.1K 🔥` `NEW`
1. [国防部发文时刻准备着](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%98%B2%E9%83%A8%E5%8F%91%E6%96%87%E6%97%B6%E5%88%BB%E5%87%86%E5%A4%87%E7%9D%80%23) `215.1K 🔥` `NEW`
1. [小猫和主人都占到了对方的便宜 (Both kitten and owner take advantage of each other)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%92%8C%E4%B8%BB%E4%BA%BA%E9%83%BD%E5%8D%A0%E5%88%B0%E4%BA%86%E5%AF%B9%E6%96%B9%E7%9A%84%E4%BE%BF%E5%AE%9C%23) `209.5K 🔥` `NEW`
1. [水滴耳环官网火速改名为王菲同款](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E6%BB%B4%E8%80%B3%E7%8E%AF%E5%AE%98%E7%BD%91%E7%81%AB%E9%80%9F%E6%94%B9%E5%90%8D%E4%B8%BA%E7%8E%8B%E8%8F%B2%E5%90%8C%E6%AC%BE%23) `125.3K 🔥` `NEW`
1. [春晚台下 无实物表演](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%8F%B0%E4%B8%8B%20%E6%97%A0%E5%AE%9E%E7%89%A9%E8%A1%A8%E6%BC%94%23) `121.8K 🔥` `NEW`
1. [懂装修的人才知道他有多细节控](https://s.weibo.com/weibo?q=%23%E6%87%82%E8%A3%85%E4%BF%AE%E7%9A%84%E4%BA%BA%E6%89%8D%E7%9F%A5%E9%81%93%E4%BB%96%E6%9C%89%E5%A4%9A%E7%BB%86%E8%8A%82%E6%8E%A7%23) `113.5K 🔥` `NEW`
1. [白鹿被夸满分女的反应](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%A2%AB%E5%A4%B8%E6%BB%A1%E5%88%86%E5%A5%B3%E7%9A%84%E5%8F%8D%E5%BA%94%23) `112.9K 🔥` `NEW`
1. [徐梦桃预赛第21位出场](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E9%A2%84%E8%B5%9B%E7%AC%AC21%E4%BD%8D%E5%87%BA%E5%9C%BA%23) `102.2K 🔥` `NEW`
1. [准爸爸拿B超单替宝宝给爷奶拜年](https://s.weibo.com/weibo?q=%23%E5%87%86%E7%88%B8%E7%88%B8%E6%8B%BFB%E8%B6%85%E5%8D%95%E6%9B%BF%E5%AE%9D%E5%AE%9D%E7%BB%99%E7%88%B7%E5%A5%B6%E6%8B%9C%E5%B9%B4%23) `811.1K 🔥` `+130%`
1. [祖国大江南北子弟兵声声祝福](https://s.weibo.com/weibo?q=%23%E7%A5%96%E5%9B%BD%E5%A4%A7%E6%B1%9F%E5%8D%97%E5%8C%97%E5%AD%90%E5%BC%9F%E5%85%B5%E5%A3%B0%E5%A3%B0%E7%A5%9D%E7%A6%8F%23) `662.0K 🔥`
1. [交卷的时候才看见学霸的题](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E5%8D%B7%E7%9A%84%E6%97%B6%E5%80%99%E6%89%8D%E7%9C%8B%E8%A7%81%E5%AD%A6%E9%9C%B8%E7%9A%84%E9%A2%98%23) `217.4K 🔥`
1. [ELLE主编朋友圈](https://s.weibo.com/weibo?q=%23ELLE%E4%B8%BB%E7%BC%96%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `216.0K 🔥`
1. [飞驰人生3 (Flying Life 3)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%23) `214.9K 🔥`
1. [春晚拍出了王楚然的人生镜头 (The Spring Festival Gala captured footage of Wang Churan’s life)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E6%8B%8D%E5%87%BA%E4%BA%86%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%9A%84%E4%BA%BA%E7%94%9F%E9%95%9C%E5%A4%B4%23) `214.9K 🔥`
1. [喵娲娲红包返场](https://s.weibo.com/weibo?q=%23%E5%96%B5%E5%A8%B2%E5%A8%B2%E7%BA%A2%E5%8C%85%E8%BF%94%E5%9C%BA%23) `207.3K 🔥`
1. [张小斐 你的菜正在吃菜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%20%E4%BD%A0%E7%9A%84%E8%8F%9C%E6%AD%A3%E5%9C%A8%E5%90%83%E8%8F%9C%23) `173.2K 🔥`
1. [星河入梦](https://s.weibo.com/weibo?q=%23%E6%98%9F%E6%B2%B3%E5%85%A5%E6%A2%A6%23) `150.8K 🔥`
1. [宇树今年目标出货量1至2万台](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E4%BB%8A%E5%B9%B4%E7%9B%AE%E6%A0%87%E5%87%BA%E8%B4%A7%E9%87%8F1%E8%87%B32%E4%B8%87%E5%8F%B0%23) `217.8K 🔥` `-28%`
1. [红包 (Red envelope)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `217.7K 🔥` `-65%`
1. [央妈不会找王一博赔地板吧](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E5%A6%88%E4%B8%8D%E4%BC%9A%E6%89%BE%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%B5%94%E5%9C%B0%E6%9D%BF%E5%90%A7%23) `217.6K 🔥` `-66%`
1. [北京首位马宝宝取名初一 (Beijing's first baby horse named Junior One)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E9%A6%96%E4%BD%8D%E9%A9%AC%E5%AE%9D%E5%AE%9D%E5%8F%96%E5%90%8D%E5%88%9D%E4%B8%80%23) `217.6K 🔥` `-80%`
1. [男生回应春节上门喂猫爆赚16万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E5%9B%9E%E5%BA%94%E6%98%A5%E8%8A%82%E4%B8%8A%E9%97%A8%E5%96%82%E7%8C%AB%E7%88%86%E8%B5%9A16%E4%B8%87%23) `217.3K 🔥` `-63%`
1. [惊蛰无声](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `217.1K 🔥` `-38%`
1. [春晚AI率比我论文高](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9AAI%E7%8E%87%E6%AF%94%E6%88%91%E8%AE%BA%E6%96%87%E9%AB%98%23) `216.9K 🔥` `-64%`
1. [范丞丞这个笑太漂亮了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%BF%99%E4%B8%AA%E7%AC%91%E5%A4%AA%E6%BC%82%E4%BA%AE%E4%BA%86%23) `216.8K 🔥` `-64%`
1. [镖人 (escort)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `216.7K 🔥` `-72%`
1. [谷爱凌大跳台银牌 (Gu Ailing silver medal in big platform)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%A7%E8%B7%B3%E5%8F%B0%E9%93%B6%E7%89%8C%23) `216.4K 🔥` `-65%`
1. [马宝宝出生](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%9D%E5%AE%9D%E5%87%BA%E7%94%9F%23) `216.3K 🔥` `-39%`
1. [王楚然春晚登场涨粉超65万 (Wang Churan's Spring Festival Gala appearance gained over 650,000 followers)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%98%A5%E6%99%9A%E7%99%BB%E5%9C%BA%E6%B6%A8%E7%B2%89%E8%B6%8565%E4%B8%87%23) `216.0K 🔥` `-33%`
1. [李健怎么看叙利亚局势](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%E6%80%8E%E4%B9%88%E7%9C%8B%E5%8F%99%E5%88%A9%E4%BA%9A%E5%B1%80%E5%8A%BF%23) `215.7K 🔥` `-62%`
1. [钟意](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%84%8F%23) `215.6K 🔥` `-21%`
1. [明星红包](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%23) `215.6K 🔥` `-39%`
1. [春晚 (Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%23) `215.4K 🔥` `-27%`
1. [北京台春晚官宣节目单](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%8F%B0%E6%98%A5%E6%99%9A%E5%AE%98%E5%AE%A3%E8%8A%82%E7%9B%AE%E5%8D%95%23) `215.3K 🔥` `-25%`
1. [猫 虾的味道咪知道](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E8%99%BE%E7%9A%84%E5%91%B3%E9%81%93%E5%92%AA%E7%9F%A5%E9%81%93%23) `158.3K 🔥` `-62%`
1. [40岁朱洁静抗癌归来状态](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E6%9C%B1%E6%B4%81%E9%9D%99%E6%8A%97%E7%99%8C%E5%BD%92%E6%9D%A5%E7%8A%B6%E6%80%81%23) `146.6K 🔥` `-32%`
1. [美国日本春节想针对台海搞事](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%97%A5%E6%9C%AC%E6%98%A5%E8%8A%82%E6%83%B3%E9%92%88%E5%AF%B9%E5%8F%B0%E6%B5%B7%E6%90%9E%E4%BA%8B%23) `138.7K 🔥` `-58%`
1. [大年初一 (New Year's Day)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%80%23) `133.1K 🔥` `-26%`
1. [春节档](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%A1%A3%23) `131.9K 🔥` `-33%`
1. [很好的人都是淡淡的 (Very good people are indifferent)](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A5%BD%E7%9A%84%E4%BA%BA%E9%83%BD%E6%98%AF%E6%B7%A1%E6%B7%A1%E7%9A%84%23) `122.9K 🔥` `-79%`
1. [刘浩存这个空翻和控腿力度 (Liu Haocun’s somersault and leg control strength)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E8%BF%99%E4%B8%AA%E7%A9%BA%E7%BF%BB%E5%92%8C%E6%8E%A7%E8%85%BF%E5%8A%9B%E5%BA%A6%23) `114.9K 🔥` `-32%`
1. [大年初一记得别扫地别泼水](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%80%E8%AE%B0%E5%BE%97%E5%88%AB%E6%89%AB%E5%9C%B0%E5%88%AB%E6%B3%BC%E6%B0%B4%23) `105.3K 🔥` `-70%`
1. [中国速滑男团冲击新历史](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%80%9F%E6%BB%91%E7%94%B7%E5%9B%A2%E5%86%B2%E5%87%BB%E6%96%B0%E5%8E%86%E5%8F%B2%23) `102.2K 🔥` `-26%`

Updated at 2026-02-17 13:51:13

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
