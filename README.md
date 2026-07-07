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

1. [横州急需蛇毒血清有人被毒蛇咬伤 (Hengzhou is in urgent need of snake venom serum. Someone was bitten by a venomous snake.)](https://s.weibo.com/weibo?q=%23%E6%A8%AA%E5%B7%9E%E6%80%A5%E9%9C%80%E8%9B%87%E6%AF%92%E8%A1%80%E6%B8%85%E6%9C%89%E4%BA%BA%E8%A2%AB%E6%AF%92%E8%9B%87%E5%92%AC%E4%BC%A4%23) `1.5M 🔥` `NEW`
1. [LV胜诉暴露了中国文化确权时差](https://s.weibo.com/weibo?q=%23LV%E8%83%9C%E8%AF%89%E6%9A%B4%E9%9C%B2%E4%BA%86%E4%B8%AD%E5%9B%BD%E6%96%87%E5%8C%96%E7%A1%AE%E6%9D%83%E6%97%B6%E5%B7%AE%23) `1.5M 🔥` `NEW`
1. [万千气象看陇原](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%E7%9C%8B%E9%99%87%E5%8E%9F%23) `1.3M 🔥` `NEW`
1. [七八九月千万不要离职](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%85%AB%E4%B9%9D%E6%9C%88%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E7%A6%BB%E8%81%8C%23) `1.2M 🔥` `NEW`
1. [蜜雪冰城捐赠1000万驰援广西](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E%E6%8D%90%E8%B5%A01000%E4%B8%87%E9%A9%B0%E6%8F%B4%E5%B9%BF%E8%A5%BF%23) `1.1M 🔥` `NEW`
1. [什么是隐性嫉妒](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%98%AF%E9%9A%90%E6%80%A7%E5%AB%89%E5%A6%92%23) `504.0K 🔥` `NEW`
1. [LV不能挪用中式纹样反向起诉中企](https://s.weibo.com/weibo?q=%23LV%E4%B8%8D%E8%83%BD%E6%8C%AA%E7%94%A8%E4%B8%AD%E5%BC%8F%E7%BA%B9%E6%A0%B7%E5%8F%8D%E5%90%91%E8%B5%B7%E8%AF%89%E4%B8%AD%E4%BC%81%23) `502.8K 🔥` `NEW`
1. [六蓝水库漫堤缺口已稳定](https://s.weibo.com/weibo?q=%23%E5%85%AD%E8%93%9D%E6%B0%B4%E5%BA%93%E6%BC%AB%E5%A0%A4%E7%BC%BA%E5%8F%A3%E5%B7%B2%E7%A8%B3%E5%AE%9A%23) `496.2K 🔥` `NEW`
1. [陈思诚带女友阮巨土耳其游玩](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E8%AF%9A%E5%B8%A6%E5%A5%B3%E5%8F%8B%E9%98%AE%E5%B7%A8%E5%9C%9F%E8%80%B3%E5%85%B6%E6%B8%B8%E7%8E%A9%23) `492.9K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `490.2K 🔥` `NEW`
1. [钟楚曦 我是最佳女主角配偶 (Chung Chuxi I am the Best Actress Spouse)](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%A5%9A%E6%9B%A6%20%E6%88%91%E6%98%AF%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E8%A7%92%E9%85%8D%E5%81%B6%23) `487.6K 🔥` `NEW`
1. [日本品牌拿七七当七夕是何居心](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%93%81%E7%89%8C%E6%8B%BF%E4%B8%83%E4%B8%83%E5%BD%93%E4%B8%83%E5%A4%95%E6%98%AF%E4%BD%95%E5%B1%85%E5%BF%83%23) `485.9K 🔥` `NEW`
1. [花少8 审美降级](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%20%E5%AE%A1%E7%BE%8E%E9%99%8D%E7%BA%A7%23) `484.0K 🔥` `NEW`
1. [野狗骨头 影视寒冬真正的夏天](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%20%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%A4%8F%E5%A4%A9%23) `481.3K 🔥` `NEW`
1. [北京暴雨](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9A%B4%E9%9B%A8%23) `478.0K 🔥` `NEW`
1. [骗子装警察恐吓小学生刷走2万元](https://s.weibo.com/weibo?q=%23%E9%AA%97%E5%AD%90%E8%A3%85%E8%AD%A6%E5%AF%9F%E6%81%90%E5%90%93%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%88%B7%E8%B5%B02%E4%B8%87%E5%85%83%23) `476.1K 🔥` `NEW`
1. [张馨予团队睡了她还在修图](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E5%9B%A2%E9%98%9F%E7%9D%A1%E4%BA%86%E5%A5%B9%E8%BF%98%E5%9C%A8%E4%BF%AE%E5%9B%BE%23) `472.9K 🔥` `NEW`
1. [DeepSeek面试](https://s.weibo.com/weibo?q=%23DeepSeek%E9%9D%A2%E8%AF%95%23) `471.0K 🔥` `NEW`
1. [广西内涝求助](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%86%85%E6%B6%9D%E6%B1%82%E5%8A%A9%23) `468.6K 🔥` `NEW`
1. [洪世贤家里的吊灯蜡烛是火腿肠](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E4%B8%96%E8%B4%A4%E5%AE%B6%E9%87%8C%E7%9A%84%E5%90%8A%E7%81%AF%E8%9C%A1%E7%83%9B%E6%98%AF%E7%81%AB%E8%85%BF%E8%82%A0%23) `463.4K 🔥` `NEW`
1. [洪水致养蛇场蛇逃出有眼镜蛇 (Flood causes snakes to escape from snake farm, including cobra)](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E6%B0%B4%E8%87%B4%E5%85%BB%E8%9B%87%E5%9C%BA%E8%9B%87%E9%80%83%E5%87%BA%E6%9C%89%E7%9C%BC%E9%95%9C%E8%9B%87%23) `461.2K 🔥` `NEW`
1. [多地驰援广西](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E9%A9%B0%E6%8F%B4%E5%B9%BF%E8%A5%BF%23) `453.9K 🔥` `NEW`
1. [明星瘦都是有道理的](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%98%A6%E9%83%BD%E6%98%AF%E6%9C%89%E9%81%93%E7%90%86%E7%9A%84%23) `453.1K 🔥` `NEW`
1. [难怪我北方的朋友不爱吃薄荷](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E6%88%91%E5%8C%97%E6%96%B9%E7%9A%84%E6%9C%8B%E5%8F%8B%E4%B8%8D%E7%88%B1%E5%90%83%E8%96%84%E8%8D%B7%23) `451.1K 🔥` `NEW`
1. [养殖场出逃蛇类约800至900条](https://s.weibo.com/weibo?q=%23%E5%85%BB%E6%AE%96%E5%9C%BA%E5%87%BA%E9%80%83%E8%9B%87%E7%B1%BB%E7%BA%A6800%E8%87%B3900%E6%9D%A1%23) `448.5K 🔥` `NEW`
1. [广西村民称已有10多人被蛇咬](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%9D%91%E6%B0%91%E7%A7%B0%E5%B7%B2%E6%9C%8910%E5%A4%9A%E4%BA%BA%E8%A2%AB%E8%9B%87%E5%92%AC%23) `444.3K 🔥` `NEW`
1. [退钱哥谈C罗最后一舞落幕](https://s.weibo.com/weibo?q=%23%E9%80%80%E9%92%B1%E5%93%A5%E8%B0%88C%E7%BD%97%E6%9C%80%E5%90%8E%E4%B8%80%E8%88%9E%E8%90%BD%E5%B9%95%23) `441.5K 🔥` `NEW`
1. [父亲总在莫名其妙的地方很大方](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E6%80%BB%E5%9C%A8%E8%8E%AB%E5%90%8D%E5%85%B6%E5%A6%99%E7%9A%84%E5%9C%B0%E6%96%B9%E5%BE%88%E5%A4%A7%E6%96%B9%23) `438.1K 🔥` `NEW`
1. [美加墨世界杯仅剩世界杯](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%8A%A0%E5%A2%A8%E4%B8%96%E7%95%8C%E6%9D%AF%E4%BB%85%E5%89%A9%E4%B8%96%E7%95%8C%E6%9D%AF%23) `435.1K 🔥` `NEW`
1. [黄羿早期 天选藤堂静](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%BE%BF%E6%97%A9%E6%9C%9F%20%E5%A4%A9%E9%80%89%E8%97%A4%E5%A0%82%E9%9D%99%23) `433.5K 🔥` `NEW`
1. [DeepSeek有史以来最大规模招聘 (DeepSeek’s largest hiring ever)](https://s.weibo.com/weibo?q=%23DeepSeek%E6%9C%89%E5%8F%B2%E4%BB%A5%E6%9D%A5%E6%9C%80%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%8B%9B%E8%81%98%23) `428.8K 🔥` `NEW`
1. [不上班后反而不想旅游了](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%B8%8A%E7%8F%AD%E5%90%8E%E5%8F%8D%E8%80%8C%E4%B8%8D%E6%83%B3%E6%97%85%E6%B8%B8%E4%BA%86%23) `426.6K 🔥` `NEW`
1. [林屿森转场](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%B1%BF%E6%A3%AE%E8%BD%AC%E5%9C%BA%23) `425.1K 🔥` `NEW`
1. [A股三大板块异动拉升](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%89%E5%A4%A7%E6%9D%BF%E5%9D%97%E5%BC%82%E5%8A%A8%E6%8B%89%E5%8D%87%23) `419.7K 🔥` `NEW`
1. [金子涵说自己最近几年身体很差](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E8%AF%B4%E8%87%AA%E5%B7%B1%E6%9C%80%E8%BF%91%E5%87%A0%E5%B9%B4%E8%BA%AB%E4%BD%93%E5%BE%88%E5%B7%AE%23) `416.8K 🔥` `NEW`
1. [赵丽颖从来没有拍过第二部](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%BB%8E%E6%9D%A5%E6%B2%A1%E6%9C%89%E6%8B%8D%E8%BF%87%E7%AC%AC%E4%BA%8C%E9%83%A8%23) `414.8K 🔥` `NEW`
1. [养殖户称蛇出逃长时间泡水会死](https://s.weibo.com/weibo?q=%23%E5%85%BB%E6%AE%96%E6%88%B7%E7%A7%B0%E8%9B%87%E5%87%BA%E9%80%83%E9%95%BF%E6%97%B6%E9%97%B4%E6%B3%A1%E6%B0%B4%E4%BC%9A%E6%AD%BB%23) `407.5K 🔥` `NEW`
1. [浙大校徽 阿玛尼](https://s.weibo.com/weibo?q=%23%E6%B5%99%E5%A4%A7%E6%A0%A1%E5%BE%BD%20%E9%98%BF%E7%8E%9B%E5%B0%BC%23) `978.1K 🔥` `+31%`
1. [Claude被封 天才程序员陨落](https://s.weibo.com/weibo?q=%23Claude%E8%A2%AB%E5%B0%81%20%E5%A4%A9%E6%89%8D%E7%A8%8B%E5%BA%8F%E5%91%98%E9%99%A8%E8%90%BD%23) `507.2K 🔥`
1. [比利时官方嘲讽美国](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E5%AE%98%E6%96%B9%E5%98%B2%E8%AE%BD%E7%BE%8E%E5%9B%BD%23) `507.8K 🔥` `-50%`
1. [鹿晗 关晓彤 (Lu Han Guan Xiaotong)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E5%85%B3%E6%99%93%E5%BD%A4%23) `499.3K 🔥` `-27%`
1. [金子涵发明星名单 (Jin Jinhan's celebrity list)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%8F%91%E6%98%8E%E6%98%9F%E5%90%8D%E5%8D%95%23) `495.7K 🔥` `-30%`
1. [灿如繁星 教资在颤抖](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%20%E6%95%99%E8%B5%84%E5%9C%A8%E9%A2%A4%E6%8A%96%23) `467.2K 🔥` `-33%`
1. [邓为花少私服](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E8%8A%B1%E5%B0%91%E7%A7%81%E6%9C%8D%23) `459.3K 🔥` `-34%`
1. [巨无霸台风可能登陆我国](https://s.weibo.com/weibo?q=%23%E5%B7%A8%E6%97%A0%E9%9C%B8%E5%8F%B0%E9%A3%8E%E5%8F%AF%E8%83%BD%E7%99%BB%E9%99%86%E6%88%91%E5%9B%BD%23) `457.6K 🔥` `-28%`
1. [等退休是场巨大的骗局](https://s.weibo.com/weibo?q=%23%E7%AD%89%E9%80%80%E4%BC%91%E6%98%AF%E5%9C%BA%E5%B7%A8%E5%A4%A7%E7%9A%84%E9%AA%97%E5%B1%80%23) `442.0K 🔥` `-37%`
1. [王宝强带冯清参加婚礼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%9D%E5%BC%BA%E5%B8%A6%E5%86%AF%E6%B8%85%E5%8F%82%E5%8A%A0%E5%A9%9A%E7%A4%BC%23) `431.6K 🔥` `-29%`
1. [米兰偶遇素颜关晓彤](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%81%B6%E9%81%87%E7%B4%A0%E9%A2%9C%E5%85%B3%E6%99%93%E5%BD%A4%23) `421.6K 🔥` `-30%`
1. [前华为天才少年吐槽DeepSeek面试](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%8D%8E%E4%B8%BA%E5%A4%A9%E6%89%8D%E5%B0%91%E5%B9%B4%E5%90%90%E6%A7%BDDeepSeek%E9%9D%A2%E8%AF%95%23) `411.7K 🔥` `-43%`
1. [野狗骨头穿帮镜头](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E7%A9%BF%E5%B8%AE%E9%95%9C%E5%A4%B4%23) `410.6K 🔥` `-29%`

Updated at 2026-07-07 16:45:17

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
