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

1. [小米澎程发布会 (Xiaomi Pengcheng press conference)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E5%8F%91%E5%B8%83%E4%BC%9A%23) `1.1M 🔥` `NEW`
1. [AI能不能别发展了](https://s.weibo.com/weibo?q=%23AI%E8%83%BD%E4%B8%8D%E8%83%BD%E5%88%AB%E5%8F%91%E5%B1%95%E4%BA%86%23) `826.0K 🔥` `NEW`
1. [人民军队制胜向强](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%86%9B%E9%98%9F%E5%88%B6%E8%83%9C%E5%90%91%E5%BC%BA%23) `617.6K 🔥` `NEW`
1. [小米澎程技术发布会今晚见](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E6%8A%80%E6%9C%AF%E5%8F%91%E5%B8%83%E4%BC%9A%E4%BB%8A%E6%99%9A%E8%A7%81%23) `586.4K 🔥` `NEW`
1. [小米澎程N90](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN90%23) `462.0K 🔥` `NEW`
1. [朱婷拒绝更高报价续约意大利](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%A9%B7%E6%8B%92%E7%BB%9D%E6%9B%B4%E9%AB%98%E6%8A%A5%E4%BB%B7%E7%BB%AD%E7%BA%A6%E6%84%8F%E5%A4%A7%E5%88%A9%23) `435.7K 🔥` `NEW`
1. [九门首播口碑](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E9%A6%96%E6%92%AD%E5%8F%A3%E7%A2%91%23) `401.5K 🔥` `NEW`
1. [多囊卵巢综合征为什么要更名](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%8A%E5%8D%B5%E5%B7%A2%E7%BB%BC%E5%90%88%E5%BE%81%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E6%9B%B4%E5%90%8D%23) `392.9K 🔥` `NEW`
1. [河南多地重发三支一扶名单人数变少](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%A4%9A%E5%9C%B0%E9%87%8D%E5%8F%91%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E5%90%8D%E5%8D%95%E4%BA%BA%E6%95%B0%E5%8F%98%E5%B0%91%23) `392.8K 🔥` `NEW`
1. [吴莫愁给张凌赫王楚然道歉](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%8E%AB%E6%84%81%E7%BB%99%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%81%93%E6%AD%89%23) `391.4K 🔥` `NEW`
1. [迪丽热巴宋威龙生图 (Photos of Dilraba and Song Weilong)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%AE%8B%E5%A8%81%E9%BE%99%E7%94%9F%E5%9B%BE%23) `389.3K 🔥` `NEW`
1. [周杰伦樊振东同框](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%90%8C%E6%A1%86%23) `386.7K 🔥` `NEW`
1. [10月大婴儿咳嗽就诊后死亡](https://s.weibo.com/weibo?q=%2310%E6%9C%88%E5%A4%A7%E5%A9%B4%E5%84%BF%E5%92%B3%E5%97%BD%E5%B0%B1%E8%AF%8A%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `386.3K 🔥` `NEW`
1. [迪丽热巴裙子 闵塔鲨](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A3%99%E5%AD%90%20%E9%97%B5%E5%A1%94%E9%B2%A8%23) `372.9K 🔥` `NEW`
1. [西安暴雨](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E6%9A%B4%E9%9B%A8%23) `331.3K 🔥` `NEW`
1. [高中语文老师班级群称女人除生育无价值](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E8%AF%AD%E6%96%87%E8%80%81%E5%B8%88%E7%8F%AD%E7%BA%A7%E7%BE%A4%E7%A7%B0%E5%A5%B3%E4%BA%BA%E9%99%A4%E7%94%9F%E8%82%B2%E6%97%A0%E4%BB%B7%E5%80%BC%23) `274.7K 🔥` `NEW`
1. [待播剧是捅了复仇的窝吗](https://s.weibo.com/weibo?q=%23%E5%BE%85%E6%92%AD%E5%89%A7%E6%98%AF%E6%8D%85%E4%BA%86%E5%A4%8D%E4%BB%87%E7%9A%84%E7%AA%9D%E5%90%97%23) `274.4K 🔥` `NEW`
1. [竹知了 被投诉](https://s.weibo.com/weibo?q=%23%E7%AB%B9%E7%9F%A5%E4%BA%86%20%E8%A2%AB%E6%8A%95%E8%AF%89%23) `264.1K 🔥` `NEW`
1. [虞书欣将现身AUBL赛场](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B0%86%E7%8E%B0%E8%BA%ABAUBL%E8%B5%9B%E5%9C%BA%23) `251.3K 🔥` `NEW`
1. [张凌赫让王楚然给自己擦眼泪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%AE%A9%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%BB%99%E8%87%AA%E5%B7%B1%E6%93%A6%E7%9C%BC%E6%B3%AA%23) `239.3K 🔥` `NEW`
1. [新西兰外长竟让华裔议员滚回国 (New Zealand’s foreign minister actually told Chinese congressmen to go back to the country)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%A5%BF%E5%85%B0%E5%A4%96%E9%95%BF%E7%AB%9F%E8%AE%A9%E5%8D%8E%E8%A3%94%E8%AE%AE%E5%91%98%E6%BB%9A%E5%9B%9E%E5%9B%BD%23) `228.6K 🔥` `NEW`
1. [6旬老人坚持地中海饮食3个月瘦37斤](https://s.weibo.com/weibo?q=%236%E6%97%AC%E8%80%81%E4%BA%BA%E5%9D%9A%E6%8C%81%E5%9C%B0%E4%B8%AD%E6%B5%B7%E9%A5%AE%E9%A3%9F3%E4%B8%AA%E6%9C%88%E7%98%A637%E6%96%A4%23) `227.7K 🔥` `NEW`
1. [歌手歌单](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%AD%8C%E5%8D%95%23) `222.6K 🔥` `NEW`
1. [高三学生被邻居恶意撞亡案终审死刑](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%89%E5%AD%A6%E7%94%9F%E8%A2%AB%E9%82%BB%E5%B1%85%E6%81%B6%E6%84%8F%E6%92%9E%E4%BA%A1%E6%A1%88%E7%BB%88%E5%AE%A1%E6%AD%BB%E5%88%91%23) `197.8K 🔥` `NEW`
1. [TF四代异常加载中妆造](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E5%BC%82%E5%B8%B8%E5%8A%A0%E8%BD%BD%E4%B8%AD%E5%A6%86%E9%80%A0%23) `196.3K 🔥` `NEW`
1. [大家面试都好有脑子](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AE%B6%E9%9D%A2%E8%AF%95%E9%83%BD%E5%A5%BD%E6%9C%89%E8%84%91%E5%AD%90%23) `193.9K 🔥` `NEW`
1. [黄仁勋称AI重塑就业而非消灭](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E7%A7%B0AI%E9%87%8D%E5%A1%91%E5%B0%B1%E4%B8%9A%E8%80%8C%E9%9D%9E%E6%B6%88%E7%81%AD%23) `189.1K 🔥` `NEW`
1. [王源五年后回应粉丝祈福牌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E4%BA%94%E5%B9%B4%E5%90%8E%E5%9B%9E%E5%BA%94%E7%B2%89%E4%B8%9D%E7%A5%88%E7%A6%8F%E7%89%8C%23) `188.6K 🔥` `NEW`
1. [王楚钦梁靖崑vs牛冠凯唐乙仁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%A2%81%E9%9D%96%E5%B4%91vs%E7%89%9B%E5%86%A0%E5%87%AF%E5%94%90%E4%B9%99%E4%BB%81%23) `182.5K 🔥` `NEW`
1. [白鹿我那菜市场卖鱼的白月光](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%88%91%E9%82%A3%E8%8F%9C%E5%B8%82%E5%9C%BA%E5%8D%96%E9%B1%BC%E7%9A%84%E7%99%BD%E6%9C%88%E5%85%89%23) `181.9K 🔥` `NEW`
1. [这一秒过火 大嫂怀了三弟的孩子 (This second went too far. My sister-in-law is pregnant with my third brother’s child.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%20%E5%A4%A7%E5%AB%82%E6%80%80%E4%BA%86%E4%B8%89%E5%BC%9F%E7%9A%84%E5%AD%A9%E5%AD%90%23) `172.3K 🔥` `NEW`
1. [常华森工作室道歉](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%8D%8E%E6%A3%AE%E5%B7%A5%E4%BD%9C%E5%AE%A4%E9%81%93%E6%AD%89%23) `172.0K 🔥` `NEW`
1. [九门直播](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E7%9B%B4%E6%92%AD%23) `134.5K 🔥` `NEW`
1. [泰国部长称不欢迎给他人造成损害的游客](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E9%83%A8%E9%95%BF%E7%A7%B0%E4%B8%8D%E6%AC%A2%E8%BF%8E%E7%BB%99%E4%BB%96%E4%BA%BA%E9%80%A0%E6%88%90%E6%8D%9F%E5%AE%B3%E7%9A%84%E6%B8%B8%E5%AE%A2%23) `390.8K 🔥` `+124%`
1. [是谁一直在往中文里加片假名](https://s.weibo.com/weibo?q=%23%E6%98%AF%E8%B0%81%E4%B8%80%E7%9B%B4%E5%9C%A8%E5%BE%80%E4%B8%AD%E6%96%87%E9%87%8C%E5%8A%A0%E7%89%87%E5%81%87%E5%90%8D%23) `388.2K 🔥` `+35%`
1. [偶遇赵丽颖穿吊带逛街](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%A9%BF%E5%90%8A%E5%B8%A6%E9%80%9B%E8%A1%97%23) `274.7K 🔥` `+47%`
1. [影响上亿女性的病更名了](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E5%93%8D%E4%B8%8A%E4%BA%BF%E5%A5%B3%E6%80%A7%E7%9A%84%E7%97%85%E6%9B%B4%E5%90%8D%E4%BA%86%23) `584.0K 🔥`
1. [刘亦菲旗袍](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%97%97%E8%A2%8D%23) `323.1K 🔥`
1. [为什么有的人一看就很有气质](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E7%9A%84%E4%BA%BA%E4%B8%80%E7%9C%8B%E5%B0%B1%E5%BE%88%E6%9C%89%E6%B0%94%E8%B4%A8%23) `274.3K 🔥`
1. [御木本高珠展](https://s.weibo.com/weibo?q=%23%E5%BE%A1%E6%9C%A8%E6%9C%AC%E9%AB%98%E7%8F%A0%E5%B1%95%23) `243.4K 🔥`
1. [解放军两次警告日方不能自称海军 (The People's Liberation Army twice warned Japan not to call itself a navy)](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E4%B8%A4%E6%AC%A1%E8%AD%A6%E5%91%8A%E6%97%A5%E6%96%B9%E4%B8%8D%E8%83%BD%E8%87%AA%E7%A7%B0%E6%B5%B7%E5%86%9B%23) `230.1K 🔥`
1. [爷爷没偷吃而是尝到了童年的甜](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E6%B2%A1%E5%81%B7%E5%90%83%E8%80%8C%E6%98%AF%E5%B0%9D%E5%88%B0%E4%BA%86%E7%AB%A5%E5%B9%B4%E7%9A%84%E7%94%9C%23) `200.5K 🔥`
1. [九门 (nine gates)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%23) `186.9K 🔥`
1. [发现丈夫开房妻子报警称酒店涉黄 (Wife found her husband staying at a hotel and called the police, claiming the hotel was involved in pornography)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E5%BC%80%E6%88%BF%E5%A6%BB%E5%AD%90%E6%8A%A5%E8%AD%A6%E7%A7%B0%E9%85%92%E5%BA%97%E6%B6%89%E9%BB%84%23) `172.8K 🔥`
1. [神州租车 大品牌 放心租](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E5%B7%9E%E7%A7%9F%E8%BD%A6%20%E5%A4%A7%E5%93%81%E7%89%8C%20%E6%94%BE%E5%BF%83%E7%A7%9F%23) `430.9K 🔥` `-49%`
1. [尹新月 赵丽颖](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E6%96%B0%E6%9C%88%20%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `387.6K 🔥` `-38%`
1. [柯洁王中王冠军](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E6%B4%81%E7%8E%8B%E4%B8%AD%E7%8E%8B%E5%86%A0%E5%86%9B%23) `235.8K 🔥` `-72%`
1. [白鹿回复猫的树](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E5%A4%8D%E7%8C%AB%E7%9A%84%E6%A0%91%23) `227.3K 🔥` `-21%`
1. [尹新月 出戏](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E6%96%B0%E6%9C%88%20%E5%87%BA%E6%88%8F%23) `199.6K 🔥` `-31%`
1. [WBG或无缘骑士之路](https://s.weibo.com/weibo?q=%23WBG%E6%88%96%E6%97%A0%E7%BC%98%E9%AA%91%E5%A3%AB%E4%B9%8B%E8%B7%AF%23) `134.7K 🔥` `-52%`
1. [A股市值前10红了9个 (9 of the top 10 A-share stocks by market value are in the red)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B8%82%E5%80%BC%E5%89%8D10%E7%BA%A2%E4%BA%869%E4%B8%AA%23) `134.4K 🔥` `-53%`
1. [九门首播4集共49个广](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E9%A6%96%E6%92%AD4%E9%9B%86%E5%85%B149%E4%B8%AA%E5%B9%BF%23) `134.3K 🔥` `-54%`

Updated at 2026-07-30 20:32:33

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
