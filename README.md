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

1. [王楚钦快速摘掉银牌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%BF%AB%E9%80%9F%E6%91%98%E6%8E%89%E9%93%B6%E7%89%8C%23) `1.7M 🔥` `NEW`
1. [Tiffany 小红书](https://s.weibo.com/weibo?q=%23Tiffany%20%E5%B0%8F%E7%BA%A2%E4%B9%A6%23) `1.4M 🔥` `NEW`
1. [中国技能人才闪耀世界舞台](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%8A%80%E8%83%BD%E4%BA%BA%E6%89%8D%E9%97%AA%E8%80%80%E4%B8%96%E7%95%8C%E8%88%9E%E5%8F%B0%23) `1.3M 🔥` `NEW`
1. [华为第三代血压表WATCH D3开售](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E7%AC%AC%E4%B8%89%E4%BB%A3%E8%A1%80%E5%8E%8B%E8%A1%A8WATCH%20D3%E5%BC%80%E5%94%AE%23) `1.3M 🔥` `NEW`
1. [华鼎奖提名名单](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E9%BC%8E%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `1.3M 🔥` `NEW`
1. [涨薪意识](https://s.weibo.com/weibo?q=%23%E6%B6%A8%E8%96%AA%E6%84%8F%E8%AF%86%23) `1.0M 🔥` `NEW`
1. [王楚钦说现在打球环境没那么纯粹](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E7%8E%B0%E5%9C%A8%E6%89%93%E7%90%83%E7%8E%AF%E5%A2%83%E6%B2%A1%E9%82%A3%E4%B9%88%E7%BA%AF%E7%B2%B9%23) `944.8K 🔥` `NEW`
1. [女顾客吐槽Tiffany后账号被限制](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%A1%BE%E5%AE%A2%E5%90%90%E6%A7%BDTiffany%E5%90%8E%E8%B4%A6%E5%8F%B7%E8%A2%AB%E9%99%90%E5%88%B6%23) `879.1K 🔥` `NEW`
1. [中国男子百米接力金牌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%90%E7%99%BE%E7%B1%B3%E6%8E%A5%E5%8A%9B%E9%87%91%E7%89%8C%23) `389.0K 🔥` `NEW`
1. [兰香如故韩粱被冻死了](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E9%9F%A9%E7%B2%B1%E8%A2%AB%E5%86%BB%E6%AD%BB%E4%BA%86%23) `388.7K 🔥` `NEW`
1. [王楚钦vs林诗栋](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E6%9E%97%E8%AF%97%E6%A0%8B%23) `388.6K 🔥` `NEW`
1. [王楚钦说有人又要说我找客观原因](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E6%9C%89%E4%BA%BA%E5%8F%88%E8%A6%81%E8%AF%B4%E6%88%91%E6%89%BE%E5%AE%A2%E8%A7%82%E5%8E%9F%E5%9B%A0%23) `388.1K 🔥` `NEW`
1. [李蠕蠕收入比娱乐圈很多人高](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%A0%95%E8%A0%95%E6%94%B6%E5%85%A5%E6%AF%94%E5%A8%B1%E4%B9%90%E5%9C%88%E5%BE%88%E5%A4%9A%E4%BA%BA%E9%AB%98%23) `387.8K 🔥` `NEW`
1. [中国女子百米接力金牌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E7%99%BE%E7%B1%B3%E6%8E%A5%E5%8A%9B%E9%87%91%E7%89%8C%23) `387.6K 🔥` `NEW`
1. [奚梦瑶高情商发言](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E9%AB%98%E6%83%85%E5%95%86%E5%8F%91%E8%A8%80%23) `387.4K 🔥` `NEW`
1. [田曦薇 华鼎奖提名](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E5%8D%8E%E9%BC%8E%E5%A5%96%E6%8F%90%E5%90%8D%23) `387.0K 🔥` `NEW`
1. [何猷君 矮人家半个头还要去追小明](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%20%E7%9F%AE%E4%BA%BA%E5%AE%B6%E5%8D%8A%E4%B8%AA%E5%A4%B4%E8%BF%98%E8%A6%81%E5%8E%BB%E8%BF%BD%E5%B0%8F%E6%98%8E%23) `386.9K 🔥` `NEW`
1. [夫妻把娃丢出租屋每月转几千生活费](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E6%8A%8A%E5%A8%83%E4%B8%A2%E5%87%BA%E7%A7%9F%E5%B1%8B%E6%AF%8F%E6%9C%88%E8%BD%AC%E5%87%A0%E5%8D%83%E7%94%9F%E6%B4%BB%E8%B4%B9%23) `250.1K 🔥` `NEW`
1. [刘欢亲弟弟刘啸声音太像刘欢](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E4%BA%B2%E5%BC%9F%E5%BC%9F%E5%88%98%E5%95%B8%E5%A3%B0%E9%9F%B3%E5%A4%AA%E5%83%8F%E5%88%98%E6%AC%A2%23) `241.6K 🔥` `NEW`
1. [医生称医保局把医护当小偷](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%A7%B0%E5%8C%BB%E4%BF%9D%E5%B1%80%E6%8A%8A%E5%8C%BB%E6%8A%A4%E5%BD%93%E5%B0%8F%E5%81%B7%23) `226.6K 🔥` `NEW`
1. [华为高管回应车企钱都被华为赚走](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%AB%98%E7%AE%A1%E5%9B%9E%E5%BA%94%E8%BD%A6%E4%BC%81%E9%92%B1%E9%83%BD%E8%A2%AB%E5%8D%8E%E4%B8%BA%E8%B5%9A%E8%B5%B0%23) `226.3K 🔥` `NEW`
1. [性行为不是亲密关系](https://s.weibo.com/weibo?q=%23%E6%80%A7%E8%A1%8C%E4%B8%BA%E4%B8%8D%E6%98%AF%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%23) `224.6K 🔥` `NEW`
1. [林诗栋金牌](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E9%87%91%E7%89%8C%23) `224.0K 🔥` `NEW`
1. [何猷君妈妈感谢奚梦瑶](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A6%88%E5%A6%88%E6%84%9F%E8%B0%A2%E5%A5%9A%E6%A2%A6%E7%91%B6%23) `222.9K 🔥` `NEW`
1. [华鼎奖](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E9%BC%8E%E5%A5%96%23) `222.0K 🔥` `NEW`
1. [9种面相提示心脏出问题了](https://s.weibo.com/weibo?q=%239%E7%A7%8D%E9%9D%A2%E7%9B%B8%E6%8F%90%E7%A4%BA%E5%BF%83%E8%84%8F%E5%87%BA%E9%97%AE%E9%A2%98%E4%BA%86%23) `221.4K 🔥` `NEW`
1. [刘耀文张真源开机仪式](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%BC%80%E6%9C%BA%E4%BB%AA%E5%BC%8F%23) `220.6K 🔥` `NEW`
1. [巴黎时装周](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E6%97%B6%E8%A3%85%E5%91%A8%23) `210.6K 🔥` `NEW`
1. [林诗栋偶像樊振东](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E5%81%B6%E5%83%8F%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `192.5K 🔥` `NEW`
1. [王曼昱蒯曼11比0](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E8%92%AF%E6%9B%BC11%E6%AF%940%23) `191.6K 🔥` `NEW`
1. [婚礼刮出10万兄弟报销酒席](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E7%A4%BC%E5%88%AE%E5%87%BA10%E4%B8%87%E5%85%84%E5%BC%9F%E6%8A%A5%E9%94%80%E9%85%92%E5%B8%AD%23) `187.7K 🔥` `NEW`
1. [严浩翔宋扬](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%AE%8B%E6%89%AC%23) `184.7K 🔥` `NEW`
1. [Bin关心王楚钦林诗栋](https://s.weibo.com/weibo?q=%23Bin%E5%85%B3%E5%BF%83%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%9E%97%E8%AF%97%E6%A0%8B%23) `178.3K 🔥` `NEW`
1. [早期迪丽热巴的微博是真正的少女心事](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%9C%9F%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%84%E5%BE%AE%E5%8D%9A%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%B0%91%E5%A5%B3%E5%BF%83%E4%BA%8B%23) `168.3K 🔥` `NEW`
1. [8元香菜仅退款商家驱车千里上门取菜](https://s.weibo.com/weibo?q=%238%E5%85%83%E9%A6%99%E8%8F%9C%E4%BB%85%E9%80%80%E6%AC%BE%E5%95%86%E5%AE%B6%E9%A9%B1%E8%BD%A6%E5%8D%83%E9%87%8C%E4%B8%8A%E9%97%A8%E5%8F%96%E8%8F%9C%23) `167.6K 🔥` `NEW`
1. [ALO开店群星阵容](https://s.weibo.com/weibo?q=%23ALO%E5%BC%80%E5%BA%97%E7%BE%A4%E6%98%9F%E9%98%B5%E5%AE%B9%23) `167.0K 🔥` `NEW`
1. [林锦岐终于懂了兰香一直介意的点](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%94%A6%E5%B2%90%E7%BB%88%E4%BA%8E%E6%87%82%E4%BA%86%E5%85%B0%E9%A6%99%E4%B8%80%E7%9B%B4%E4%BB%8B%E6%84%8F%E7%9A%84%E7%82%B9%23) `166.6K 🔥` `NEW`
1. [无可替代](https://s.weibo.com/weibo?q=%23%E6%97%A0%E5%8F%AF%E6%9B%BF%E4%BB%A3%23) `165.6K 🔥` `NEW`
1. [林诗栋有望冲击男队领军人物](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E6%9C%89%E6%9C%9B%E5%86%B2%E5%87%BB%E7%94%B7%E9%98%9F%E9%A2%86%E5%86%9B%E4%BA%BA%E7%89%A9%23) `162.6K 🔥` `NEW`
1. [刘学义八编](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%85%AB%E7%BC%96%23) `162.5K 🔥` `NEW`
1. [实在不行去印度开个方子吧](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E5%9C%A8%E4%B8%8D%E8%A1%8C%E5%8E%BB%E5%8D%B0%E5%BA%A6%E5%BC%80%E4%B8%AA%E6%96%B9%E5%AD%90%E5%90%A7%23) `162.1K 🔥` `NEW`
1. [喜人奇妙夜](https://s.weibo.com/weibo?q=%23%E5%96%9C%E4%BA%BA%E5%A5%87%E5%A6%99%E5%A4%9C%23) `162.0K 🔥` `NEW`
1. [星舰成功入轨](https://s.weibo.com/weibo?q=%23%E6%98%9F%E8%88%B0%E6%88%90%E5%8A%9F%E5%85%A5%E8%BD%A8%23) `161.8K 🔥` `NEW`
1. [中美人工智能政府间对话](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E6%94%BF%E5%BA%9C%E9%97%B4%E5%AF%B9%E8%AF%9D%23) `161.5K 🔥` `NEW`
1. [赵今麦长台词](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E9%95%BF%E5%8F%B0%E8%AF%8D%23) `161.3K 🔥` `NEW`
1. [金鹰奖出席情况](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E5%87%BA%E5%B8%AD%E6%83%85%E5%86%B5%23) `153.2K 🔥` `NEW`
1. [上海社零数据](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%A4%BE%E9%9B%B6%E6%95%B0%E6%8D%AE%23) `145.7K 🔥` `NEW`
1. [王楚钦3银](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A63%E9%93%B6%23) `144.7K 🔥` `NEW`
1. [杨毅谈林诗栋4比0王楚钦](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%AF%85%E8%B0%88%E6%9E%97%E8%AF%97%E6%A0%8B4%E6%AF%940%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `143.0K 🔥` `NEW`
1. [5岁男孩被猫抓后腋下长鸡蛋大肿块](https://s.weibo.com/weibo?q=%235%E5%B2%81%E7%94%B7%E5%AD%A9%E8%A2%AB%E7%8C%AB%E6%8A%93%E5%90%8E%E8%85%8B%E4%B8%8B%E9%95%BF%E9%B8%A1%E8%9B%8B%E5%A4%A7%E8%82%BF%E5%9D%97%23) `139.0K 🔥` `NEW`
1. [华为Mate90门店样机到店](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMate90%E9%97%A8%E5%BA%97%E6%A0%B7%E6%9C%BA%E5%88%B0%E5%BA%97%23) `134.5K 🔥` `NEW`

Updated at 2026-09-29 00:03:55

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
