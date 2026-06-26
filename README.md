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

1. [我的美食日记 (My food diary)](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E7%BE%8E%E9%A3%9F%E6%97%A5%E8%AE%B0%23) `1.0M 🔥` `NEW`
1. [厄瓜多尔教练 金发帅哥](https://s.weibo.com/weibo?q=%23%E5%8E%84%E7%93%9C%E5%A4%9A%E5%B0%94%E6%95%99%E7%BB%83%20%E9%87%91%E5%8F%91%E5%B8%85%E5%93%A5%23) `431.0K 🔥` `NEW`
1. [厄瓜多尔世界波](https://s.weibo.com/weibo?q=%23%E5%8E%84%E7%93%9C%E5%A4%9A%E5%B0%94%E4%B8%96%E7%95%8C%E6%B3%A2%23) `373.9K 🔥` `NEW`
1. [黄金跌到不敢买了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E5%88%B0%E4%B8%8D%E6%95%A2%E4%B9%B0%E4%BA%86%23) `370.1K 🔥` `NEW`
1. [苹果涨价20%](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%B6%A8%E4%BB%B720%25%23) `362.1K 🔥` `NEW`
1. [密室大逃脱](https://s.weibo.com/weibo?q=%23%E5%AF%86%E5%AE%A4%E5%A4%A7%E9%80%83%E8%84%B1%23) `353.4K 🔥` `NEW`
1. [babycare](https://s.weibo.com/weibo?q=%23babycare%23) `318.0K 🔥` `NEW`
1. [高考699分目标从上海交大改成清北](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83699%E5%88%86%E7%9B%AE%E6%A0%87%E4%BB%8E%E4%B8%8A%E6%B5%B7%E4%BA%A4%E5%A4%A7%E6%94%B9%E6%88%90%E6%B8%85%E5%8C%97%23) `308.4K 🔥` `NEW`
1. [张凌赫母校最强招生简章](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%AF%8D%E6%A0%A1%E6%9C%80%E5%BC%BA%E6%8B%9B%E7%94%9F%E7%AE%80%E7%AB%A0%23) `257.4K 🔥` `NEW`
1. [杀害3岁女童嫌疑人作案时已怀孕](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B33%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%AB%8C%E7%96%91%E4%BA%BA%E4%BD%9C%E6%A1%88%E6%97%B6%E5%B7%B2%E6%80%80%E5%AD%95%23) `253.7K 🔥` `NEW`
1. [白玉兰 (white magnolia)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `225.3K 🔥` `NEW`
1. [金价回落至900元以下](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%9B%9E%E8%90%BD%E8%87%B3900%E5%85%83%E4%BB%A5%E4%B8%8B%23) `182.4K 🔥` `NEW`
1. [佩佩梅开二度](https://s.weibo.com/weibo?q=%23%E4%BD%A9%E4%BD%A9%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `181.4K 🔥` `NEW`
1. [吴谨言 产后发胖受益人](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B0%A8%E8%A8%80%20%E4%BA%A7%E5%90%8E%E5%8F%91%E8%83%96%E5%8F%97%E7%9B%8A%E4%BA%BA%23) `179.3K 🔥` `NEW`
1. [苹果跌逾5%](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E8%B7%8C%E9%80%BE5%25%23) `177.8K 🔥` `NEW`
1. [电影功夫女足](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `177.4K 🔥` `NEW`
1. [冻货偏航多位涉事司机都称开错路](https://s.weibo.com/weibo?q=%23%E5%86%BB%E8%B4%A7%E5%81%8F%E8%88%AA%E5%A4%9A%E4%BD%8D%E6%B6%89%E4%BA%8B%E5%8F%B8%E6%9C%BA%E9%83%BD%E7%A7%B0%E5%BC%80%E9%94%99%E8%B7%AF%23) `172.5K 🔥` `NEW`
1. [田曦薇张凌赫 格子衬衫粉色内搭](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E6%A0%BC%E5%AD%90%E8%A1%AC%E8%A1%AB%E7%B2%89%E8%89%B2%E5%86%85%E6%90%AD%23) `170.3K 🔥` `NEW`
1. [扛被褥出考场的贵州女孩考了590分](https://s.weibo.com/weibo?q=%23%E6%89%9B%E8%A2%AB%E8%A4%A5%E5%87%BA%E8%80%83%E5%9C%BA%E7%9A%84%E8%B4%B5%E5%B7%9E%E5%A5%B3%E5%AD%A9%E8%80%83%E4%BA%86590%E5%88%86%23) `168.6K 🔥` `NEW`
1. [厄瓜多尔小组出线](https://s.weibo.com/weibo?q=%23%E5%8E%84%E7%93%9C%E5%A4%9A%E5%B0%94%E5%B0%8F%E7%BB%84%E5%87%BA%E7%BA%BF%23) `164.8K 🔥` `NEW`
1. [影视飓风Tim怎么变成老司机的 (How Tim became an experienced driver in the film and television hurricane)](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8ETim%E6%80%8E%E4%B9%88%E5%8F%98%E6%88%90%E8%80%81%E5%8F%B8%E6%9C%BA%E7%9A%84%23) `157.8K 🔥` `NEW`
1. [德国 报复韩国](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%20%E6%8A%A5%E5%A4%8D%E9%9F%A9%E5%9B%BD%23) `12.6M 🔥` `+2338%`
1. [厄瓜多尔2比1德国 (Ecuador 2-1 Germany)](https://s.weibo.com/weibo?q=%23%E5%8E%84%E7%93%9C%E5%A4%9A%E5%B0%942%E6%AF%941%E5%BE%B7%E5%9B%BD%23) `2.1M 🔥` `+32%`
1. [九图了解防汛安全科普知识 (Jiutu understands popular science knowledge about flood prevention safety)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%9B%BE%E4%BA%86%E8%A7%A3%E9%98%B2%E6%B1%9B%E5%AE%89%E5%85%A8%E7%A7%91%E6%99%AE%E7%9F%A5%E8%AF%86%23) `1.7M 🔥` `+108%`
1. [看超级少女变超拽少女](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E8%B6%85%E7%BA%A7%E5%B0%91%E5%A5%B3%E5%8F%98%E8%B6%85%E6%8B%BD%E5%B0%91%E5%A5%B3%23) `428.5K 🔥` `+21%`
1. [发现脾胃喜欢一切温和的食物](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E8%84%BE%E8%83%83%E5%96%9C%E6%AC%A2%E4%B8%80%E5%88%87%E6%B8%A9%E5%92%8C%E7%9A%84%E9%A3%9F%E7%89%A9%23) `426.4K 🔥` `+27%`
1. [日本vs瑞典](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%ACvs%E7%91%9E%E5%85%B8%23) `382.8K 🔥` `+406%`
1. [苹果涨价iPhone未涨](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%B6%A8%E4%BB%B7iPhone%E6%9C%AA%E6%B6%A8%23) `378.9K 🔥` `+425%`
1. [湖南两女子和狗被关笼中游街 (Two Hunan women and their dog were imprisoned and paraded through the streets)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E4%B8%A4%E5%A5%B3%E5%AD%90%E5%92%8C%E7%8B%97%E8%A2%AB%E5%85%B3%E7%AC%BC%E4%B8%AD%E6%B8%B8%E8%A1%97%23) `353.7K 🔥` `+181%`
1. [存储芯片供不应求](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E4%BE%9B%E4%B8%8D%E5%BA%94%E6%B1%82%23) `182.4K 🔥` `+168%`
1. [尊界 (Zunjie)](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8C%23) `180.1K 🔥` `+211%`
1. [单依纯体重不到100斤](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E4%BD%93%E9%87%8D%E4%B8%8D%E5%88%B0100%E6%96%A4%23) `176.2K 🔥` `+171%`
1. [东风17飞临台岛可能只需6分钟](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%A3%8E17%E9%A3%9E%E4%B8%B4%E5%8F%B0%E5%B2%9B%E5%8F%AF%E8%83%BD%E5%8F%AA%E9%9C%806%E5%88%86%E9%92%9F%23) `174.8K 🔥` `+158%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `173.7K 🔥` `+48%`
1. [白鹿又去哪进修哭戏了 (Where did Bai Lu go to learn how to cry?)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%88%E5%8E%BB%E5%93%AA%E8%BF%9B%E4%BF%AE%E5%93%AD%E6%88%8F%E4%BA%86%23) `172.8K 🔥` `+50%`
1. [多地再被曝冻货偏航事件](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%86%8D%E8%A2%AB%E6%9B%9D%E5%86%BB%E8%B4%A7%E5%81%8F%E8%88%AA%E4%BA%8B%E4%BB%B6%23) `171.6K 🔥` `+26%`
1. [潘玮柏听热巴爱吃眼睛都亮了](https://s.weibo.com/weibo?q=%23%E6%BD%98%E7%8E%AE%E6%9F%8F%E5%90%AC%E7%83%AD%E5%B7%B4%E7%88%B1%E5%90%83%E7%9C%BC%E7%9D%9B%E9%83%BD%E4%BA%AE%E4%BA%86%23) `169.9K 🔥` `+194%`
1. [不觉得婚姻是爱情的奖赏](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A7%89%E5%BE%97%E5%A9%9A%E5%A7%BB%E6%98%AF%E7%88%B1%E6%83%85%E7%9A%84%E5%A5%96%E8%B5%8F%23) `168.2K 🔥` `+132%`
1. [恋与深空新男主上线投诉飙涨万条](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%96%B0%E7%94%B7%E4%B8%BB%E4%B8%8A%E7%BA%BF%E6%8A%95%E8%AF%89%E9%A3%99%E6%B6%A8%E4%B8%87%E6%9D%A1%23) `167.4K 🔥` `+138%`
1. [苹果涨价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%B6%A8%E4%BB%B7%23) `166.2K 🔥` `+123%`
1. [杨幂豪门嫡长姐 (Yang Mi, the eldest sister of a wealthy family)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%B1%AA%E9%97%A8%E5%AB%A1%E9%95%BF%E5%A7%90%23) `165.4K 🔥` `+134%`
1. [江苏高考600分以上40931人 (40,931 people scored 600 or above in Jiangsu College Entrance Examination)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E9%AB%98%E8%80%83600%E5%88%86%E4%BB%A5%E4%B8%8A40931%E4%BA%BA%23) `163.8K 🔥` `+71%`
1. [毒贩为逃跑把婴儿往地上砸 (Drug dealer smashes baby to the ground to escape)](https://s.weibo.com/weibo?q=%23%E6%AF%92%E8%B4%A9%E4%B8%BA%E9%80%83%E8%B7%91%E6%8A%8A%E5%A9%B4%E5%84%BF%E5%BE%80%E5%9C%B0%E4%B8%8A%E7%A0%B8%23) `162.8K 🔥` `+153%`
1. [外网嘲讽韩国队真丢脸](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E5%98%B2%E8%AE%BD%E9%9F%A9%E5%9B%BD%E9%98%9F%E7%9C%9F%E4%B8%A2%E8%84%B8%23) `162.0K 🔥` `+119%`
1. [突尼斯vs荷兰](https://s.weibo.com/weibo?q=%23%E7%AA%81%E5%B0%BC%E6%96%AFvs%E8%8D%B7%E5%85%B0%23) `161.2K 🔥` `+73%`
1. [郭京飞状态](https://s.weibo.com/weibo?q=%23%E9%83%AD%E4%BA%AC%E9%A3%9E%E7%8A%B6%E6%80%81%23) `160.8K 🔥` `+178%`
1. [韩国 内讧 (South Korea internal strife)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%20%E5%86%85%E8%AE%A7%23) `160.0K 🔥` `+118%`
1. [周杰伦演唱会劝退无票歌迷 (Jay Chou's concert persuades fans to leave without tickets)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8A%9D%E9%80%80%E6%97%A0%E7%A5%A8%E6%AD%8C%E8%BF%B7%23) `158.9K 🔥` `+365%`
1. [问心2被打码的医生是谁 (Who is the doctor who was coded in Questioning Heart 2?)](https://s.weibo.com/weibo?q=%23%E9%97%AE%E5%BF%832%E8%A2%AB%E6%89%93%E7%A0%81%E7%9A%84%E5%8C%BB%E7%94%9F%E6%98%AF%E8%B0%81%23) `445.0K 🔥`
1. [厄瓜多尔vs德国 (Ecuador vs Germany)](https://s.weibo.com/weibo?q=%23%E5%8E%84%E7%93%9C%E5%A4%9A%E5%B0%94vs%E5%BE%B7%E5%9B%BD%23) `175.2K 🔥` `-83%`

Updated at 2026-06-26 08:21:39

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
