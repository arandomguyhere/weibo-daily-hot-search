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

1. [钓友钓58斤青鱼被拖入3米水中](https://s.weibo.com/weibo?q=%23%E9%92%93%E5%8F%8B%E9%92%9358%E6%96%A4%E9%9D%92%E9%B1%BC%E8%A2%AB%E6%8B%96%E5%85%A53%E7%B1%B3%E6%B0%B4%E4%B8%AD%23) `923.1K 🔥` `NEW`
1. [我国农产品全面提质路线图来了](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%86%9C%E4%BA%A7%E5%93%81%E5%85%A8%E9%9D%A2%E6%8F%90%E8%B4%A8%E8%B7%AF%E7%BA%BF%E5%9B%BE%E6%9D%A5%E4%BA%86%23) `740.2K 🔥` `NEW`
1. [嫁金钗22集了还在反转](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%9722%E9%9B%86%E4%BA%86%E8%BF%98%E5%9C%A8%E5%8F%8D%E8%BD%AC%23) `427.8K 🔥` `NEW`
1. [GDP十强城市大洗牌](https://s.weibo.com/weibo?q=%23GDP%E5%8D%81%E5%BC%BA%E5%9F%8E%E5%B8%82%E5%A4%A7%E6%B4%97%E7%89%8C%23) `333.7K 🔥` `NEW`
1. [你还会买三丽鸥吗](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%BF%98%E4%BC%9A%E4%B9%B0%E4%B8%89%E4%B8%BD%E9%B8%A5%E5%90%97%23) `303.3K 🔥` `NEW`
1. [长期吃素能排毒系谣言](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E5%90%83%E7%B4%A0%E8%83%BD%E6%8E%92%E6%AF%92%E7%B3%BB%E8%B0%A3%E8%A8%80%23) `300.8K 🔥` `NEW`
1. [长期吃西地那非的人嘴太严了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E5%90%83%E8%A5%BF%E5%9C%B0%E9%82%A3%E9%9D%9E%E7%9A%84%E4%BA%BA%E5%98%B4%E5%A4%AA%E4%B8%A5%E4%BA%86%23) `290.4K 🔥` `NEW`
1. [王者荣耀等游戏与三丽鸥联名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E7%AD%89%E6%B8%B8%E6%88%8F%E4%B8%8E%E4%B8%89%E4%B8%BD%E9%B8%A5%E8%81%94%E5%90%8D%23) `280.0K 🔥` `NEW`
1. [影之刃零 黑神话](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E4%B9%8B%E5%88%83%E9%9B%B6%20%E9%BB%91%E7%A5%9E%E8%AF%9D%23) `279.4K 🔥` `NEW`
1. [洗一次摇粒绒会释放70万根微塑料吗](https://s.weibo.com/weibo?q=%23%E6%B4%97%E4%B8%80%E6%AC%A1%E6%91%87%E7%B2%92%E7%BB%92%E4%BC%9A%E9%87%8A%E6%94%BE70%E4%B8%87%E6%A0%B9%E5%BE%AE%E5%A1%91%E6%96%99%E5%90%97%23) `279.1K 🔥` `NEW`
1. [现在的殡葬业都发展成这样了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E6%AE%A1%E8%91%AC%E4%B8%9A%E9%83%BD%E5%8F%91%E5%B1%95%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `278.3K 🔥` `NEW`
1. [医学生在大体老师骨骼上写轻浮文字](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E5%AD%A6%E7%94%9F%E5%9C%A8%E5%A4%A7%E4%BD%93%E8%80%81%E5%B8%88%E9%AA%A8%E9%AA%BC%E4%B8%8A%E5%86%99%E8%BD%BB%E6%B5%AE%E6%96%87%E5%AD%97%23) `277.6K 🔥` `NEW`
1. [华为制药军团不做药](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%88%B6%E8%8D%AF%E5%86%9B%E5%9B%A2%E4%B8%8D%E5%81%9A%E8%8D%AF%23) `277.1K 🔥` `NEW`
1. [嫁金钗不断更](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E4%B8%8D%E6%96%AD%E6%9B%B4%23) `275.6K 🔥` `NEW`
1. [兰香如故团综](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E5%9B%A2%E7%BB%BC%23) `274.6K 🔥` `NEW`
1. [郑合惠子 跟我提结婚我肯定吓得腿软](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%20%E8%B7%9F%E6%88%91%E6%8F%90%E7%BB%93%E5%A9%9A%E6%88%91%E8%82%AF%E5%AE%9A%E5%90%93%E5%BE%97%E8%85%BF%E8%BD%AF%23) `273.8K 🔥` `NEW`
1. [中学小卖部只卖牛奶和水家长发声](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%AD%A6%E5%B0%8F%E5%8D%96%E9%83%A8%E5%8F%AA%E5%8D%96%E7%89%9B%E5%A5%B6%E5%92%8C%E6%B0%B4%E5%AE%B6%E9%95%BF%E5%8F%91%E5%A3%B0%23) `273.2K 🔥` `NEW`
1. [TheShy自认选亚恒傲慢](https://s.weibo.com/weibo?q=%23TheShy%E8%87%AA%E8%AE%A4%E9%80%89%E4%BA%9A%E6%81%92%E5%82%B2%E6%85%A2%23) `273.0K 🔥` `NEW`
1. [文吉儿王子璇 窒息](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E7%8E%8B%E5%AD%90%E7%92%87%20%E7%AA%92%E6%81%AF%23) `271.8K 🔥` `NEW`
1. [青你1选手现状](https://s.weibo.com/weibo?q=%23%E9%9D%92%E4%BD%A01%E9%80%89%E6%89%8B%E7%8E%B0%E7%8A%B6%23) `271.4K 🔥` `NEW`
1. [迪丽热巴360度子弹时间](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4360%E5%BA%A6%E5%AD%90%E5%BC%B9%E6%97%B6%E9%97%B4%23) `270.6K 🔥` `NEW`
1. [中国雇主因发薪冲突被缅甸工人杀死](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%9B%87%E4%B8%BB%E5%9B%A0%E5%8F%91%E8%96%AA%E5%86%B2%E7%AA%81%E8%A2%AB%E7%BC%85%E7%94%B8%E5%B7%A5%E4%BA%BA%E6%9D%80%E6%AD%BB%23) `270.2K 🔥` `NEW`
1. [喜欢好几年了你们咋不买](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E5%A5%BD%E5%87%A0%E5%B9%B4%E4%BA%86%E4%BD%A0%E4%BB%AC%E5%92%8B%E4%B8%8D%E4%B9%B0%23) `269.4K 🔥` `NEW`
1. [王子璇给文吉儿写序收了三万块](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E7%BB%99%E6%96%87%E5%90%89%E5%84%BF%E5%86%99%E5%BA%8F%E6%94%B6%E4%BA%86%E4%B8%89%E4%B8%87%E5%9D%97%23) `268.9K 🔥` `NEW`
1. [王一栩在说谁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E6%A0%A9%E5%9C%A8%E8%AF%B4%E8%B0%81%23) `268.4K 🔥` `NEW`
1. [后会友期 嗑拉了](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%20%E5%97%91%E6%8B%89%E4%BA%86%23) `267.9K 🔥` `NEW`
1. [买14套老破小收租的人转向收息了](https://s.weibo.com/weibo?q=%23%E4%B9%B014%E5%A5%97%E8%80%81%E7%A0%B4%E5%B0%8F%E6%94%B6%E7%A7%9F%E7%9A%84%E4%BA%BA%E8%BD%AC%E5%90%91%E6%94%B6%E6%81%AF%E4%BA%86%23) `267.3K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `263.4K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `262.2K 🔥` `NEW`
1. [巅峰榜十大艺人](https://s.weibo.com/weibo?q=%23%E5%B7%85%E5%B3%B0%E6%A6%9C%E5%8D%81%E5%A4%A7%E8%89%BA%E4%BA%BA%23) `261.0K 🔥` `NEW`
1. [妻子借五百万帮丈夫渡过难关](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%80%9F%E4%BA%94%E7%99%BE%E4%B8%87%E5%B8%AE%E4%B8%88%E5%A4%AB%E6%B8%A1%E8%BF%87%E9%9A%BE%E5%85%B3%23) `248.8K 🔥` `NEW`
1. [女儿减重82斤回家妈妈心疼哭了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E5%87%8F%E9%87%8D82%E6%96%A4%E5%9B%9E%E5%AE%B6%E5%A6%88%E5%A6%88%E5%BF%83%E7%96%BC%E5%93%AD%E4%BA%86%23) `244.4K 🔥` `NEW`
1. [乌干达吃38人连环杀手已被抓获](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%B9%B2%E8%BE%BE%E5%90%8338%E4%BA%BA%E8%BF%9E%E7%8E%AF%E6%9D%80%E6%89%8B%E5%B7%B2%E8%A2%AB%E6%8A%93%E8%8E%B7%23) `229.3K 🔥` `NEW`
1. [葡萄牙队回应C罗获历史最佳金球奖](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E9%98%9F%E5%9B%9E%E5%BA%94C%E7%BD%97%E8%8E%B7%E5%8E%86%E5%8F%B2%E6%9C%80%E4%BD%B3%E9%87%91%E7%90%83%E5%A5%96%23) `224.1K 🔥` `NEW`
1. [刘学义看到谭松韵句句有回应的反应](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E7%9C%8B%E5%88%B0%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%8F%A5%E5%8F%A5%E6%9C%89%E5%9B%9E%E5%BA%94%E7%9A%84%E5%8F%8D%E5%BA%94%23) `223.9K 🔥` `NEW`
1. [现在就出发](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `223.8K 🔥` `NEW`
1. [李子祺 盲猜病例](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AD%90%E7%A5%BA%20%E7%9B%B2%E7%8C%9C%E7%97%85%E4%BE%8B%23) `218.6K 🔥` `NEW`
1. [短剧顶流都来参加视界大会了](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E9%A1%B6%E6%B5%81%E9%83%BD%E6%9D%A5%E5%8F%82%E5%8A%A0%E8%A7%86%E7%95%8C%E5%A4%A7%E4%BC%9A%E4%BA%86%23) `212.7K 🔥` `NEW`
1. [乌干达军方宣布食人魔落网](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%B9%B2%E8%BE%BE%E5%86%9B%E6%96%B9%E5%AE%A3%E5%B8%83%E9%A3%9F%E4%BA%BA%E9%AD%94%E8%90%BD%E7%BD%91%23) `211.4K 🔥` `NEW`
1. [胡一菲诺澜世纪大同框](https://s.weibo.com/weibo?q=%23%E8%83%A1%E4%B8%80%E8%8F%B2%E8%AF%BA%E6%BE%9C%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%8C%E6%A1%86%23) `198.5K 🔥` `NEW`
1. [韩网热议iG晋级S16八强](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E7%83%AD%E8%AE%AEiG%E6%99%8B%E7%BA%A7S16%E5%85%AB%E5%BC%BA%23) `193.5K 🔥` `NEW`
1. [后会友期](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%23) `192.7K 🔥` `NEW`
1. [许飞厉娜疑似和好](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%8E%89%E5%A8%9C%E7%96%91%E4%BC%BC%E5%92%8C%E5%A5%BD%23) `183.6K 🔥` `NEW`
1. [陈哲远为吃播饿了小半个月](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E4%B8%BA%E5%90%83%E6%92%AD%E9%A5%BF%E4%BA%86%E5%B0%8F%E5%8D%8A%E4%B8%AA%E6%9C%88%23) `183.4K 🔥` `NEW`
1. [王子铭兴奋剂违规禁赛2年](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E9%93%AD%E5%85%B4%E5%A5%8B%E5%89%82%E8%BF%9D%E8%A7%84%E7%A6%81%E8%B5%9B2%E5%B9%B4%23) `177.1K 🔥` `NEW`
1. [大姑姐一出场全场亲戚都乐开了花](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A7%91%E5%A7%90%E4%B8%80%E5%87%BA%E5%9C%BA%E5%85%A8%E5%9C%BA%E4%BA%B2%E6%88%9A%E9%83%BD%E4%B9%90%E5%BC%80%E4%BA%86%E8%8A%B1%23) `163.9K 🔥` `NEW`
1. [曝华为布局至少5款阔直板机型](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%8E%E4%B8%BA%E5%B8%83%E5%B1%80%E8%87%B3%E5%B0%915%E6%AC%BE%E9%98%94%E7%9B%B4%E6%9D%BF%E6%9C%BA%E5%9E%8B%23) `161.6K 🔥` `NEW`
1. [厉娜怒吼许飞我所有的经济损失呢](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E6%80%92%E5%90%BC%E8%AE%B8%E9%A3%9E%E6%88%91%E6%89%80%E6%9C%89%E7%9A%84%E7%BB%8F%E6%B5%8E%E6%8D%9F%E5%A4%B1%E5%91%A2%23) `276.3K 🔥`
1. [三丽鸥将与抹黑中国日剧再次联名](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%B8%BD%E9%B8%A5%E5%B0%86%E4%B8%8E%E6%8A%B9%E9%BB%91%E4%B8%AD%E5%9B%BD%E6%97%A5%E5%89%A7%E5%86%8D%E6%AC%A1%E8%81%94%E5%90%8D%23) `275.5K 🔥`
1. [三丽鸥致歉](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%B8%BD%E9%B8%A5%E8%87%B4%E6%AD%89%23) `1.5M 🔥` `-28%`
1. [西班牙列车相撞已致68死](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%88%97%E8%BD%A6%E7%9B%B8%E6%92%9E%E5%B7%B2%E8%87%B468%E6%AD%BB%23) `189.8K 🔥` `-80%`

Updated at 2026-10-29 14:03:25

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
