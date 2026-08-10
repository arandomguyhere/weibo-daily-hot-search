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

1. [我们来了2026嘉宾 (Here are our 2026 guests)](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E6%9D%A5%E4%BA%862026%E5%98%89%E5%AE%BE%23) `669.4K 🔥` `NEW`
1. [白海豚 北京](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%20%E5%8C%97%E4%BA%AC%23) `666.1K 🔥` `NEW`
1. [演员秦焰去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%A7%A6%E7%84%B0%E5%8E%BB%E4%B8%96%23) `652.7K 🔥` `NEW`
1. [业内称成毅被投资人疯抢](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E7%A7%B0%E6%88%90%E6%AF%85%E8%A2%AB%E6%8A%95%E8%B5%84%E4%BA%BA%E7%96%AF%E6%8A%A2%23) `586.3K 🔥` `NEW`
1. [西村力风波后首次直播](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E9%A3%8E%E6%B3%A2%E5%90%8E%E9%A6%96%E6%AC%A1%E7%9B%B4%E6%92%AD%23) `414.1K 🔥` `NEW`
1. [欧阳娜娜周翊然七夕大片](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%91%A8%E7%BF%8A%E7%84%B6%E4%B8%83%E5%A4%95%E5%A4%A7%E7%89%87%23) `385.1K 🔥` `NEW`
1. [无锡 内涝](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%94%A1%20%E5%86%85%E6%B6%9D%23) `330.7K 🔥` `NEW`
1. [易中天大跌](https://s.weibo.com/weibo?q=%23%E6%98%93%E4%B8%AD%E5%A4%A9%E5%A4%A7%E8%B7%8C%23) `320.9K 🔥` `NEW`
1. [张本兄妹同时夺冠国乒怎么了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E5%85%84%E5%A6%B9%E5%90%8C%E6%97%B6%E5%A4%BA%E5%86%A0%E5%9B%BD%E4%B9%92%E6%80%8E%E4%B9%88%E4%BA%86%23) `320.6K 🔥` `NEW`
1. [我们都低估了时间的力量](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E9%83%BD%E4%BD%8E%E4%BC%B0%E4%BA%86%E6%97%B6%E9%97%B4%E7%9A%84%E5%8A%9B%E9%87%8F%23) `320.4K 🔥` `NEW`
1. [佟丽娅回应频繁晒娃 (Tong Liya responded to frequently showing off her baby)](https://s.weibo.com/weibo?q=%23%E4%BD%9F%E4%B8%BD%E5%A8%85%E5%9B%9E%E5%BA%94%E9%A2%91%E7%B9%81%E6%99%92%E5%A8%83%23) `307.8K 🔥` `NEW`
1. [易烊千玺带松果出席活动](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%B8%A6%E6%9D%BE%E6%9E%9C%E5%87%BA%E5%B8%AD%E6%B4%BB%E5%8A%A8%23) `268.3K 🔥` `NEW`
1. [白海豚中心已移出浙江](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E4%B8%AD%E5%BF%83%E5%B7%B2%E7%A7%BB%E5%87%BA%E6%B5%99%E6%B1%9F%23) `228.9K 🔥` `NEW`
1. [陈哲远 戏份](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%20%E6%88%8F%E4%BB%BD%23) `227.4K 🔥` `NEW`
1. [AI漫剧真正的大女主出现了](https://s.weibo.com/weibo?q=%23AI%E6%BC%AB%E5%89%A7%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%A4%A7%E5%A5%B3%E4%B8%BB%E5%87%BA%E7%8E%B0%E4%BA%86%23) `225.2K 🔥` `NEW`
1. [后来她没有再游泳而是当了特种兵](https://s.weibo.com/weibo?q=%23%E5%90%8E%E6%9D%A5%E5%A5%B9%E6%B2%A1%E6%9C%89%E5%86%8D%E6%B8%B8%E6%B3%B3%E8%80%8C%E6%98%AF%E5%BD%93%E4%BA%86%E7%89%B9%E7%A7%8D%E5%85%B5%23) `225.2K 🔥` `NEW`
1. [环卫工网恋约见面女主播称路塌了](https://s.weibo.com/weibo?q=%23%E7%8E%AF%E5%8D%AB%E5%B7%A5%E7%BD%91%E6%81%8B%E7%BA%A6%E8%A7%81%E9%9D%A2%E5%A5%B3%E4%B8%BB%E6%92%AD%E7%A7%B0%E8%B7%AF%E5%A1%8C%E4%BA%86%23) `215.3K 🔥` `NEW`
1. [TheShy再获周最佳](https://s.weibo.com/weibo?q=%23TheShy%E5%86%8D%E8%8E%B7%E5%91%A8%E6%9C%80%E4%BD%B3%23) `188.8K 🔥` `NEW`
1. [线上考试用豆包考了倒数](https://s.weibo.com/weibo?q=%23%E7%BA%BF%E4%B8%8A%E8%80%83%E8%AF%95%E7%94%A8%E8%B1%86%E5%8C%85%E8%80%83%E4%BA%86%E5%80%92%E6%95%B0%23) `180.9K 🔥` `NEW`
1. [上海变海上](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%8F%98%E6%B5%B7%E4%B8%8A%23) `1.5M 🔥` `+50%`
1. [从热词迭代读懂鲜活中国 (Understand the vivid China through iteration of hot words)](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E7%83%AD%E8%AF%8D%E8%BF%AD%E4%BB%A3%E8%AF%BB%E6%87%82%E9%B2%9C%E6%B4%BB%E4%B8%AD%E5%9B%BD%23) `1.3M 🔥` `+38%`
1. [物业费的欠费原因 (Reasons for property fee arrears)](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%B8%9A%E8%B4%B9%E7%9A%84%E6%AC%A0%E8%B4%B9%E5%8E%9F%E5%9B%A0%23) `1.2M 🔥` `+314%`
1. [DeepSeek会偷偷给人取外号](https://s.weibo.com/weibo?q=%23DeepSeek%E4%BC%9A%E5%81%B7%E5%81%B7%E7%BB%99%E4%BA%BA%E5%8F%96%E5%A4%96%E5%8F%B7%23) `894.2K 🔥` `+129%`
1. [费大厨撤下全国小炒肉大王称号](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E5%A4%A7%E5%8E%A8%E6%92%A4%E4%B8%8B%E5%85%A8%E5%9B%BD%E5%B0%8F%E7%82%92%E8%82%89%E5%A4%A7%E7%8E%8B%E7%A7%B0%E5%8F%B7%23) `716.4K 🔥` `+100%`
1. [迪丽热巴拍照被认出仓皇跑到车上](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8B%8D%E7%85%A7%E8%A2%AB%E8%AE%A4%E5%87%BA%E4%BB%93%E7%9A%87%E8%B7%91%E5%88%B0%E8%BD%A6%E4%B8%8A%23) `640.9K 🔥` `+147%`
1. [武汉天桥打人 以暴制暴](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%A4%A9%E6%A1%A5%E6%89%93%E4%BA%BA%20%E4%BB%A5%E6%9A%B4%E5%88%B6%E6%9A%B4%23) `636.2K 🔥` `+63%`
1. [胚胎案丈夫称患癌妻子是雷](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E4%B8%88%E5%A4%AB%E7%A7%B0%E6%82%A3%E7%99%8C%E5%A6%BB%E5%AD%90%E6%98%AF%E9%9B%B7%23) `630.2K 🔥` `+65%`
1. [荷兰弟赞达亚好吓人的点赞量](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%BC%9F%E8%B5%9E%E8%BE%BE%E4%BA%9A%E5%A5%BD%E5%90%93%E4%BA%BA%E7%9A%84%E7%82%B9%E8%B5%9E%E9%87%8F%23) `483.4K 🔥` `+27%`
1. [上门女婿出轨女邻居双双被判重婚罪](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E9%97%A8%E5%A5%B3%E5%A9%BF%E5%87%BA%E8%BD%A8%E5%A5%B3%E9%82%BB%E5%B1%85%E5%8F%8C%E5%8F%8C%E8%A2%AB%E5%88%A4%E9%87%8D%E5%A9%9A%E7%BD%AA%23) `327.3K 🔥` `+61%`
1. [偶像来了 重启回归 (Idol is here, reboot and return)](https://s.weibo.com/weibo?q=%23%E5%81%B6%E5%83%8F%E6%9D%A5%E4%BA%86%20%E9%87%8D%E5%90%AF%E5%9B%9E%E5%BD%92%23) `2.5M 🔥`
1. [贺涵 能来接我吗](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E6%B6%B5%20%E8%83%BD%E6%9D%A5%E6%8E%A5%E6%88%91%E5%90%97%23) `753.0K 🔥`
1. [C罗婚礼闹乌龙](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%A9%9A%E7%A4%BC%E9%97%B9%E4%B9%8C%E9%BE%99%23) `664.0K 🔥`
1. [李晟张睿 我的古早cp还有售后 (Li Sheng Zhang Rui My ancient CP still has after-sales service)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%9F%E5%BC%A0%E7%9D%BF%20%E6%88%91%E7%9A%84%E5%8F%A4%E6%97%A9cp%E8%BF%98%E6%9C%89%E5%94%AE%E5%90%8E%23) `404.9K 🔥`
1. [这届年轻人真的在整顿婚礼 (This generation of young people are really organizing their weddings)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%8A%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9C%9F%E7%9A%84%E5%9C%A8%E6%95%B4%E9%A1%BF%E5%A9%9A%E7%A4%BC%23) `398.6K 🔥`
1. [79年出了三个魔丸](https://s.weibo.com/weibo?q=%2379%E5%B9%B4%E5%87%BA%E4%BA%86%E4%B8%89%E4%B8%AA%E9%AD%94%E4%B8%B8%23) `378.8K 🔥`
1. [白海豚](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `329.4K 🔥`
1. [iPhone18Pro发布会时间](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%8F%91%E5%B8%83%E4%BC%9A%E6%97%B6%E9%97%B4%23) `322.1K 🔥`
1. [上海徐家汇出现特大暴雨](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%BE%90%E5%AE%B6%E6%B1%87%E5%87%BA%E7%8E%B0%E7%89%B9%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `301.8K 🔥`
1. [我的花园世界](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E8%8A%B1%E5%9B%AD%E4%B8%96%E7%95%8C%23) `225.7K 🔥`
1. [龙餐馆 左宗棠鸡李鸿章杂碎](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%20%E5%B7%A6%E5%AE%97%E6%A3%A0%E9%B8%A1%E6%9D%8E%E9%B8%BF%E7%AB%A0%E6%9D%82%E7%A2%8E%23) `214.0K 🔥`
1. [内塔尼亚胡称永不接受巴勒斯坦国](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A1%94%E5%B0%BC%E4%BA%9A%E8%83%A1%E7%A7%B0%E6%B0%B8%E4%B8%8D%E6%8E%A5%E5%8F%97%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6%E5%9B%BD%23) `195.5K 🔥`
1. [极氪起火车发生事故未在官方维修](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA%E8%B5%B7%E7%81%AB%E8%BD%A6%E5%8F%91%E7%94%9F%E4%BA%8B%E6%95%85%E6%9C%AA%E5%9C%A8%E5%AE%98%E6%96%B9%E7%BB%B4%E4%BF%AE%23) `183.9K 🔥`
1. [古茗排队](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E8%8C%97%E6%8E%92%E9%98%9F%23) `430.7K 🔥` `-47%`
1. [大疆错失宇树 (DJI misses Yushu)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86%E9%94%99%E5%A4%B1%E5%AE%87%E6%A0%91%23) `400.5K 🔥` `-56%`
1. [沈腾400亿票房中国影史第一人](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE400%E4%BA%BF%E7%A5%A8%E6%88%BF%E4%B8%AD%E5%9B%BD%E5%BD%B1%E5%8F%B2%E7%AC%AC%E4%B8%80%E4%BA%BA%23) `330.5K 🔥` `-40%`
1. [疑似高智adhd在评论区泄露天才经验 (Suspected Gao Zhi ADHD leaked genius experience in the comment area)](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E9%AB%98%E6%99%BAadhd%E5%9C%A8%E8%AF%84%E8%AE%BA%E5%8C%BA%E6%B3%84%E9%9C%B2%E5%A4%A9%E6%89%8D%E7%BB%8F%E9%AA%8C%23) `307.9K 🔥` `-64%`
1. [孟子义这个背](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E8%BF%99%E4%B8%AA%E8%83%8C%23) `291.0K 🔥` `-22%`
1. [俞定延离开JYP](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E5%AE%9A%E5%BB%B6%E7%A6%BB%E5%BC%80JYP%23) `204.0K 🔥` `-29%`
1. [无锡降雨量第一](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%94%A1%E9%99%8D%E9%9B%A8%E9%87%8F%E7%AC%AC%E4%B8%80%23) `197.0K 🔥` `-34%`
1. [钟楚曦自己化妆全脸就这么点粉底](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%A5%9A%E6%9B%A6%E8%87%AA%E5%B7%B1%E5%8C%96%E5%A6%86%E5%85%A8%E8%84%B8%E5%B0%B1%E8%BF%99%E4%B9%88%E7%82%B9%E7%B2%89%E5%BA%95%23) `176.2K 🔥` `-52%`

Updated at 2026-08-10 14:59:54

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
