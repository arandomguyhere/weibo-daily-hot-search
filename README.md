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

1. [2026红包分组 (2026 red envelope grouping)](https://s.weibo.com/weibo?q=%232026%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `931.3K 🔥` `NEW`
1. [背滕王阁序被免票日本男子发声](https://s.weibo.com/weibo?q=%23%E8%83%8C%E6%BB%95%E7%8E%8B%E9%98%81%E5%BA%8F%E8%A2%AB%E5%85%8D%E7%A5%A8%E6%97%A5%E6%9C%AC%E7%94%B7%E5%AD%90%E5%8F%91%E5%A3%B0%23) `657.3K 🔥` `NEW`
1. [航天人以圆满成功给全国人民拜年](https://s.weibo.com/weibo?q=%23%E8%88%AA%E5%A4%A9%E4%BA%BA%E4%BB%A5%E5%9C%86%E6%BB%A1%E6%88%90%E5%8A%9F%E7%BB%99%E5%85%A8%E5%9B%BD%E4%BA%BA%E6%B0%91%E6%8B%9C%E5%B9%B4%23) `549.8K 🔥` `NEW`
1. [今晚8点上京东抢大牌手机大牌酒](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%99%9A8%E7%82%B9%E4%B8%8A%E4%BA%AC%E4%B8%9C%E6%8A%A2%E5%A4%A7%E7%89%8C%E6%89%8B%E6%9C%BA%E5%A4%A7%E7%89%8C%E9%85%92%23) `506.3K 🔥` `NEW`
1. [红包](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `506.3K 🔥` `NEW`
1. [春晚彩排](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%BD%A9%E6%8E%92%23) `188.0K 🔥` `NEW`
1. [爱泼斯坦案名单竟出现梦露等人](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E5%90%8D%E5%8D%95%E7%AB%9F%E5%87%BA%E7%8E%B0%E6%A2%A6%E9%9C%B2%E7%AD%89%E4%BA%BA%23) `173.6K 🔥` `NEW`
1. [白象连续两年登台总台春晚](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%B1%A1%E8%BF%9E%E7%BB%AD%E4%B8%A4%E5%B9%B4%E7%99%BB%E5%8F%B0%E6%80%BB%E5%8F%B0%E6%98%A5%E6%99%9A%23) `170.2K 🔥` `NEW`
1. [中国冰壶女队5比6美国](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%B0%E5%A3%B6%E5%A5%B3%E9%98%9F5%E6%AF%946%E7%BE%8E%E5%9B%BD%23) `163.1K 🔥` `NEW`
1. [周深 小品天赋](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%20%E5%B0%8F%E5%93%81%E5%A4%A9%E8%B5%8B%23) `160.4K 🔥` `NEW`
1. [生命树大结局 (tree of life finale)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%A4%A7%E7%BB%93%E5%B1%80%23) `143.3K 🔥` `NEW`
1. [王婧紫仟滑出38秒57](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A9%A7%E7%B4%AB%E4%BB%9F%E6%BB%91%E5%87%BA38%E7%A7%9257%23) `143.1K 🔥` `NEW`
1. [白鹿 红包金额](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E7%BA%A2%E5%8C%85%E9%87%91%E9%A2%9D%23) `142.9K 🔥` `NEW`
1. [陈哲远 散财童子](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%20%E6%95%A3%E8%B4%A2%E7%AB%A5%E5%AD%90%23) `142.3K 🔥` `NEW`
1. [千问红包雨](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E7%BA%A2%E5%8C%85%E9%9B%A8%23) `142.0K 🔥` `NEW`
1. [学术界 仅退款](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E6%9C%AF%E7%95%8C%20%E4%BB%85%E9%80%80%E6%AC%BE%23) `141.8K 🔥` `NEW`
1. [包贝尔一家 看提词器](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E4%B8%80%E5%AE%B6%20%E7%9C%8B%E6%8F%90%E8%AF%8D%E5%99%A8%23) `141.3K 🔥` `NEW`
1. [中国冰壶女队vs美国](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%B0%E5%A3%B6%E5%A5%B3%E9%98%9Fvs%E7%BE%8E%E5%9B%BD%23) `141.2K 🔥` `NEW`
1. [张子墨自拍](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E5%A2%A8%E8%87%AA%E6%8B%8D%23) `138.7K 🔥` `NEW`
1. [黄金中事件 录音](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%B8%AD%E4%BA%8B%E4%BB%B6%20%E5%BD%95%E9%9F%B3%23) `137.6K 🔥` `NEW`
1. [元宝红包 (Yuanbao red envelope)](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E7%BA%A2%E5%8C%85%23) `136.1K 🔥` `NEW`
1. [高度近视的日常就王楚然这样](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%BA%A6%E8%BF%91%E8%A7%86%E7%9A%84%E6%97%A5%E5%B8%B8%E5%B0%B1%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%BF%99%E6%A0%B7%23) `131.2K 🔥` `NEW`
1. [辣目洋子这么瘦了](https://s.weibo.com/weibo?q=%23%E8%BE%A3%E7%9B%AE%E6%B4%8B%E5%AD%90%E8%BF%99%E4%B9%88%E7%98%A6%E4%BA%86%23) `130.0K 🔥` `NEW`
1. [男子聚会被下药提前离场躲过一劫](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%81%9A%E4%BC%9A%E8%A2%AB%E4%B8%8B%E8%8D%AF%E6%8F%90%E5%89%8D%E7%A6%BB%E5%9C%BA%E8%BA%B2%E8%BF%87%E4%B8%80%E5%8A%AB%23) `130.0K 🔥` `NEW`
1. [王安宇胡先煦范丞丞熟人局](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%83%A1%E5%85%88%E7%85%A6%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%86%9F%E4%BA%BA%E5%B1%80%23) `125.0K 🔥` `NEW`
1. [伤心swimming 语言成绩](https://s.weibo.com/weibo?q=%23%E4%BC%A4%E5%BF%83swimming%20%E8%AF%AD%E8%A8%80%E6%88%90%E7%BB%A9%23) `124.0K 🔥` `NEW`
1. [这是普通人接触到的行业天花板了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E6%99%AE%E9%80%9A%E4%BA%BA%E6%8E%A5%E8%A7%A6%E5%88%B0%E7%9A%84%E8%A1%8C%E4%B8%9A%E5%A4%A9%E8%8A%B1%E6%9D%BF%E4%BA%86%23) `109.0K 🔥` `NEW`
1. [姐姐脱落的乳牙呛入1岁宝宝气道](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E8%84%B1%E8%90%BD%E7%9A%84%E4%B9%B3%E7%89%99%E5%91%9B%E5%85%A51%E5%B2%81%E5%AE%9D%E5%AE%9D%E6%B0%94%E9%81%93%23) `94.1K 🔥` `NEW`
1. [有人提前2天上高速省1400元高速费](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E6%8F%90%E5%89%8D2%E5%A4%A9%E4%B8%8A%E9%AB%98%E9%80%9F%E7%9C%811400%E5%85%83%E9%AB%98%E9%80%9F%E8%B4%B9%23) `92.9K 🔥` `NEW`
1. [升温后有东北人500斤年货无处安放](https://s.weibo.com/weibo?q=%23%E5%8D%87%E6%B8%A9%E5%90%8E%E6%9C%89%E4%B8%9C%E5%8C%97%E4%BA%BA500%E6%96%A4%E5%B9%B4%E8%B4%A7%E6%97%A0%E5%A4%84%E5%AE%89%E6%94%BE%23) `89.8K 🔥` `NEW`
1. [猫爪美甲 (Cat claw manicure)](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%88%AA%E7%BE%8E%E7%94%B2%23) `82.3K 🔥` `NEW`
1. [王菲只需轻轻出手](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%8F%AA%E9%9C%80%E8%BD%BB%E8%BD%BB%E5%87%BA%E6%89%8B%23) `80.4K 🔥` `NEW`
1. [央妈王安宇粉上了](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E5%A6%88%E7%8E%8B%E5%AE%89%E5%AE%87%E7%B2%89%E4%B8%8A%E4%BA%86%23) `75.4K 🔥` `NEW`
1. [县公务员称合适比喜欢更长久](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%85%AC%E5%8A%A1%E5%91%98%E7%A7%B0%E5%90%88%E9%80%82%E6%AF%94%E5%96%9C%E6%AC%A2%E6%9B%B4%E9%95%BF%E4%B9%85%23) `75.4K 🔥` `NEW`
1. [宋小宝小品 笑点](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%B0%8F%E5%AE%9D%E5%B0%8F%E5%93%81%20%E7%AC%91%E7%82%B9%23) `73.4K 🔥` `NEW`
1. [樊振东身穿中国红队服](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%BA%AB%E7%A9%BF%E4%B8%AD%E5%9B%BD%E7%BA%A2%E9%98%9F%E6%9C%8D%23) `73.1K 🔥` `NEW`
1. [一栗小莎子大年初四化疗](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E5%A4%A7%E5%B9%B4%E5%88%9D%E5%9B%9B%E5%8C%96%E7%96%97%23) `72.1K 🔥` `NEW`
1. [00后已经快奔三了](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%B7%B2%E7%BB%8F%E5%BF%AB%E5%A5%94%E4%B8%89%E4%BA%86%23) `71.7K 🔥` `NEW`
1. [李子柒回应作品更新慢](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AD%90%E6%9F%92%E5%9B%9E%E5%BA%94%E4%BD%9C%E5%93%81%E6%9B%B4%E6%96%B0%E6%85%A2%23) `68.3K 🔥` `NEW`
1. [烟花](https://s.weibo.com/weibo?q=%23%E7%83%9F%E8%8A%B1%23) `68.3K 🔥` `NEW`
1. [十个勤天 逃不开借钱的环节 (Ten days of hard work can't escape the link of borrowing money)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%20%E9%80%83%E4%B8%8D%E5%BC%80%E5%80%9F%E9%92%B1%E7%9A%84%E7%8E%AF%E8%8A%82%23) `66.8K 🔥` `NEW`
1. [伤心swimming 预录取](https://s.weibo.com/weibo?q=%23%E4%BC%A4%E5%BF%83swimming%20%E9%A2%84%E5%BD%95%E5%8F%96%23) `66.0K 🔥` `NEW`
1. [黄金和房子买哪个更保值](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%92%8C%E6%88%BF%E5%AD%90%E4%B9%B0%E5%93%AA%E4%B8%AA%E6%9B%B4%E4%BF%9D%E5%80%BC%23) `63.3K 🔥` `NEW`
1. [云旗 明年还要一起玩](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%20%E6%98%8E%E5%B9%B4%E8%BF%98%E8%A6%81%E4%B8%80%E8%B5%B7%E7%8E%A9%23) `63.2K 🔥` `NEW`
1. [宋威龙田曦薇恐怖箱挑战](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%94%B0%E6%9B%A6%E8%96%87%E6%81%90%E6%80%96%E7%AE%B1%E6%8C%91%E6%88%98%23) `63.1K 🔥` `NEW`
1. [樊振东vs贾哈](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9Cvs%E8%B4%BE%E5%93%88%23) `61.4K 🔥` `NEW`
1. [李昀锐篮球vs毕雯珺教悠悠球](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E7%AF%AE%E7%90%83vs%E6%AF%95%E9%9B%AF%E7%8F%BA%E6%95%99%E6%82%A0%E6%82%A0%E7%90%83%23) `61.2K 🔥` `NEW`
1. [郝熠然隔空投送瞬间](https://s.weibo.com/weibo?q=%23%E9%83%9D%E7%86%A0%E7%84%B6%E9%9A%94%E7%A9%BA%E6%8A%95%E9%80%81%E7%9E%AC%E9%97%B4%23) `60.3K 🔥` `NEW`
1. [被卖菜爷爷的微信名感动了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%8D%96%E8%8F%9C%E7%88%B7%E7%88%B7%E7%9A%84%E5%BE%AE%E4%BF%A1%E5%90%8D%E6%84%9F%E5%8A%A8%E4%BA%86%23) `59.2K 🔥` `NEW`
1. [周深演老头](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%BC%94%E8%80%81%E5%A4%B4%23) `58.4K 🔥` `NEW`
1. [辽宁卫视春晚 (Liaoning TV Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%23) `58.4K 🔥` `NEW`
1. [有人把4万元金饰剪碎做成美甲](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E6%8A%8A4%E4%B8%87%E5%85%83%E9%87%91%E9%A5%B0%E5%89%AA%E7%A2%8E%E5%81%9A%E6%88%90%E7%BE%8E%E7%94%B2%23) `58.4K 🔥` `NEW`

Updated at 2026-02-16 00:32:40

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
