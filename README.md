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

1. [哪个App偷听最严重 (Which app is the worst for eavesdropping?)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E4%B8%AAApp%E5%81%B7%E5%90%AC%E6%9C%80%E4%B8%A5%E9%87%8D%23) `1.4M 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `926.7K 🔥` `NEW`
1. [谁来救救瘦子在夏天的食欲](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%A5%E6%95%91%E6%95%91%E7%98%A6%E5%AD%90%E5%9C%A8%E5%A4%8F%E5%A4%A9%E7%9A%84%E9%A3%9F%E6%AC%B2%23) `838.4K 🔥` `NEW`
1. [蛋糕师笑了半天才决定把蛋糕送走](https://s.weibo.com/weibo?q=%23%E8%9B%8B%E7%B3%95%E5%B8%88%E7%AC%91%E4%BA%86%E5%8D%8A%E5%A4%A9%E6%89%8D%E5%86%B3%E5%AE%9A%E6%8A%8A%E8%9B%8B%E7%B3%95%E9%80%81%E8%B5%B0%23) `549.2K 🔥` `NEW`
1. [BLG公布大名单](https://s.weibo.com/weibo?q=%23BLG%E5%85%AC%E5%B8%83%E5%A4%A7%E5%90%8D%E5%8D%95%23) `385.1K 🔥` `NEW`
1. [曝张雅琪已婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E9%9B%85%E7%90%AA%E5%B7%B2%E5%A9%9A%23) `385.0K 🔥` `NEW`
1. [这居然是丞磊拍出来的](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%85%E7%84%B6%E6%98%AF%E4%B8%9E%E7%A3%8A%E6%8B%8D%E5%87%BA%E6%9D%A5%E7%9A%84%23) `382.3K 🔥` `NEW`
1. [王源提到了TFBOYS演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%8F%90%E5%88%B0%E4%BA%86TFBOYS%E6%BC%94%E5%94%B1%E4%BC%9A%23) `381.3K 🔥` `NEW`
1. [90后清华天才 干崩了美股](https://s.weibo.com/weibo?q=%2390%E5%90%8E%E6%B8%85%E5%8D%8E%E5%A4%A9%E6%89%8D%20%E5%B9%B2%E5%B4%A9%E4%BA%86%E7%BE%8E%E8%82%A1%23) `371.2K 🔥` `NEW`
1. [花少8秘鲁站合照](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E7%A7%98%E9%B2%81%E7%AB%99%E5%90%88%E7%85%A7%23) `370.0K 🔥` `NEW`
1. [张雅琪的老公 (Zhang Yaqi’s husband)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E7%9A%84%E8%80%81%E5%85%AC%23) `357.1K 🔥` `NEW`
1. [王橹杰的文字日记](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%9A%84%E6%96%87%E5%AD%97%E6%97%A5%E8%AE%B0%23) `352.8K 🔥` `NEW`
1. [whzy评论Bin暂别赛场](https://s.weibo.com/weibo?q=%23whzy%E8%AF%84%E8%AE%BABin%E6%9A%82%E5%88%AB%E8%B5%9B%E5%9C%BA%23) `352.7K 🔥` `NEW`
1. [女孩也很好但新生男孩越来越多](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%B9%9F%E5%BE%88%E5%A5%BD%E4%BD%86%E6%96%B0%E7%94%9F%E7%94%B7%E5%AD%A9%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%23) `346.4K 🔥` `NEW`
1. [霍金打职业赛的概率不为零](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E9%87%91%E6%89%93%E8%81%8C%E4%B8%9A%E8%B5%9B%E7%9A%84%E6%A6%82%E7%8E%87%E4%B8%8D%E4%B8%BA%E9%9B%B6%23) `340.9K 🔥` `NEW`
1. [曝Bin打季后赛](https://s.weibo.com/weibo?q=%23%E6%9B%9DBin%E6%89%93%E5%AD%A3%E5%90%8E%E8%B5%9B%23) `339.5K 🔥` `NEW`
1. [陈冠希 老人斑](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%86%A0%E5%B8%8C%20%E8%80%81%E4%BA%BA%E6%96%91%23) `338.2K 🔥` `NEW`
1. [天知地知 脑电波知](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%9F%A5%E5%9C%B0%E7%9F%A5%20%E8%84%91%E7%94%B5%E6%B3%A2%E7%9F%A5%23) `323.0K 🔥` `NEW`
1. [韩红基金会救护车西藏越野](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E6%95%91%E6%8A%A4%E8%BD%A6%E8%A5%BF%E8%97%8F%E8%B6%8A%E9%87%8E%23) `313.5K 🔥` `NEW`
1. [张雨绮 幼态风](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%A8%E7%BB%AE%20%E5%B9%BC%E6%80%81%E9%A3%8E%23) `273.7K 🔥` `NEW`
1. [钝感力很强的人上班belike (People with strong insensitivity should work like this)](https://s.weibo.com/weibo?q=%23%E9%92%9D%E6%84%9F%E5%8A%9B%E5%BE%88%E5%BC%BA%E7%9A%84%E4%BA%BA%E4%B8%8A%E7%8F%ADbelike%23) `272.1K 🔥` `NEW`
1. [王安宇一出去旅游就出神图](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E4%B8%80%E5%87%BA%E5%8E%BB%E6%97%85%E6%B8%B8%E5%B0%B1%E5%87%BA%E7%A5%9E%E5%9B%BE%23) `271.1K 🔥` `NEW`
1. [挪威男足世界排名飙升12位](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E7%94%B7%E8%B6%B3%E4%B8%96%E7%95%8C%E6%8E%92%E5%90%8D%E9%A3%99%E5%8D%8712%E4%BD%8D%23) `260.4K 🔥` `NEW`
1. [野狗骨头 删减](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%20%E5%88%A0%E5%87%8F%23) `229.7K 🔥` `NEW`
1. [周佑凌晒柳柳To签](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BD%91%E5%87%8C%E6%99%92%E6%9F%B3%E6%9F%B3To%E7%AD%BE%23) `227.0K 🔥` `NEW`
1. [4倍存储牛股德明利5连跌停](https://s.weibo.com/weibo?q=%234%E5%80%8D%E5%AD%98%E5%82%A8%E7%89%9B%E8%82%A1%E5%BE%B7%E6%98%8E%E5%88%A95%E8%BF%9E%E8%B7%8C%E5%81%9C%23) `224.4K 🔥` `NEW`
1. [买的金针菇忘记吃了成这样了](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%9A%84%E9%87%91%E9%92%88%E8%8F%87%E5%BF%98%E8%AE%B0%E5%90%83%E4%BA%86%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `223.8K 🔥` `NEW`
1. [魏大勋十日终焉戴眼镜路透](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E6%88%B4%E7%9C%BC%E9%95%9C%E8%B7%AF%E9%80%8F%23) `351.1K 🔥` `+27%`
1. [33岁外卖员脑梗倒地多日才被发现](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E5%A4%96%E5%8D%96%E5%91%98%E8%84%91%E6%A2%97%E5%80%92%E5%9C%B0%E5%A4%9A%E6%97%A5%E6%89%8D%E8%A2%AB%E5%8F%91%E7%8E%B0%23) `348.0K 🔥` `+82%`
1. [央视曝乙游年龄门槛形同虚设](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E4%B9%99%E6%B8%B8%E5%B9%B4%E9%BE%84%E9%97%A8%E6%A7%9B%E5%BD%A2%E5%90%8C%E8%99%9A%E8%AE%BE%23) `343.6K 🔥` `+31%`
1. [我将逐张学习章若楠的游客照 (I will study Zhang Ruonan’s tourist photos one by one)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B0%86%E9%80%90%E5%BC%A0%E5%AD%A6%E4%B9%A0%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%9A%84%E6%B8%B8%E5%AE%A2%E7%85%A7%23) `335.7K 🔥` `+67%`
1. [赵又廷说上半年只接到10个剧本](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%8F%88%E5%BB%B7%E8%AF%B4%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%8F%AA%E6%8E%A5%E5%88%B010%E4%B8%AA%E5%89%A7%E6%9C%AC%23) `256.3K 🔥` `+48%`
1. [王楚钦当队长的背后](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%BD%93%E9%98%9F%E9%95%BF%E7%9A%84%E8%83%8C%E5%90%8E%23) `243.6K 🔥` `+27%`
1. [一图读懂新一代通信网](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%9B%BE%E8%AF%BB%E6%87%82%E6%96%B0%E4%B8%80%E4%BB%A3%E9%80%9A%E4%BF%A1%E7%BD%91%23) `914.9K 🔥`
1. [Bin暂别赛场](https://s.weibo.com/weibo?q=%23Bin%E6%9A%82%E5%88%AB%E8%B5%9B%E5%9C%BA%23) `914.3K 🔥`
1. [阿根廷队多人面临禁赛](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E5%A4%9A%E4%BA%BA%E9%9D%A2%E4%B8%B4%E7%A6%81%E8%B5%9B%23) `574.9K 🔥`
1. [张柏芝月中火速安排大儿子回香港](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E6%9C%88%E4%B8%AD%E7%81%AB%E9%80%9F%E5%AE%89%E6%8E%92%E5%A4%A7%E5%84%BF%E5%AD%90%E5%9B%9E%E9%A6%99%E6%B8%AF%23) `384.4K 🔥`
1. [锋芝 原配真夫妻的含金量](https://s.weibo.com/weibo?q=%23%E9%94%8B%E8%8A%9D%20%E5%8E%9F%E9%85%8D%E7%9C%9F%E5%A4%AB%E5%A6%BB%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `383.1K 🔥`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `382.0K 🔥`
1. [王玉雯在白鹿面前很少化妆 (Wang Yuwen rarely puts on makeup in front of Bai Lu)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%9C%A8%E7%99%BD%E9%B9%BF%E9%9D%A2%E5%89%8D%E5%BE%88%E5%B0%91%E5%8C%96%E5%A6%86%23) `380.8K 🔥`
1. [谢贤第一任妻子哭到沙哑](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E7%AC%AC%E4%B8%80%E4%BB%BB%E5%A6%BB%E5%AD%90%E5%93%AD%E5%88%B0%E6%B2%99%E5%93%91%23) `364.1K 🔥`
1. [小孩哥右手火腿肠左手鹦鹉尸体 (The child's right hand is ham sausage and the left hand is a parrot corpse.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A9%E5%93%A5%E5%8F%B3%E6%89%8B%E7%81%AB%E8%85%BF%E8%82%A0%E5%B7%A6%E6%89%8B%E9%B9%A6%E9%B9%89%E5%B0%B8%E4%BD%93%23) `361.1K 🔥`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `349.9K 🔥`
1. [怡颗莓 致癌物 (Yikeberry carcinogen)](https://s.weibo.com/weibo?q=%23%E6%80%A1%E9%A2%97%E8%8E%93%20%E8%87%B4%E7%99%8C%E7%89%A9%23) `911.5K 🔥` `-34%`
1. [外卖员被3烈犬吓尖叫主人说不咬人](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%91%98%E8%A2%AB3%E7%83%88%E7%8A%AC%E5%90%93%E5%B0%96%E5%8F%AB%E4%B8%BB%E4%BA%BA%E8%AF%B4%E4%B8%8D%E5%92%AC%E4%BA%BA%23) `553.1K 🔥` `-27%`
1. [BLG新上单](https://s.weibo.com/weibo?q=%23BLG%E6%96%B0%E4%B8%8A%E5%8D%95%23) `383.4K 🔥` `-28%`
1. [见识到三伏天的厉害了](https://s.weibo.com/weibo?q=%23%E8%A7%81%E8%AF%86%E5%88%B0%E4%B8%89%E4%BC%8F%E5%A4%A9%E7%9A%84%E5%8E%89%E5%AE%B3%E4%BA%86%23) `315.5K 🔥` `-60%`
1. [终于理解奶奶辈的衣服了 (I finally understand grandma’s clothes)](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%90%86%E8%A7%A3%E5%A5%B6%E5%A5%B6%E8%BE%88%E7%9A%84%E8%A1%A3%E6%9C%8D%E4%BA%86%23) `294.6K 🔥` `-21%`
1. [BBA今年集体大降价](https://s.weibo.com/weibo?q=%23BBA%E4%BB%8A%E5%B9%B4%E9%9B%86%E4%BD%93%E5%A4%A7%E9%99%8D%E4%BB%B7%23) `270.7K 🔥` `-21%`
1. [FIFA更新男足世界排名 (FIFA updates men's football world rankings)](https://s.weibo.com/weibo?q=%23FIFA%E6%9B%B4%E6%96%B0%E7%94%B7%E8%B6%B3%E4%B8%96%E7%95%8C%E6%8E%92%E5%90%8D%23) `230.3K 🔥` `-74%`

Updated at 2026-07-21 19:29:28

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
