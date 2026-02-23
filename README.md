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

1. [夜王 尺度 (night king scale)](https://s.weibo.com/weibo?q=%23%E5%A4%9C%E7%8E%8B%20%E5%B0%BA%E5%BA%A6%23) `899.4K 🔥` `NEW`
1. [误转69万公款对方拒绝退款](https://s.weibo.com/weibo?q=%23%E8%AF%AF%E8%BD%AC69%E4%B8%87%E5%85%AC%E6%AC%BE%E5%AF%B9%E6%96%B9%E6%8B%92%E7%BB%9D%E9%80%80%E6%AC%BE%23) `647.9K 🔥` `NEW`
1. [在全党开展树立和践行正确政绩观学习教育](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%85%A8%E5%85%9A%E5%BC%80%E5%B1%95%E6%A0%91%E7%AB%8B%E5%92%8C%E8%B7%B5%E8%A1%8C%E6%AD%A3%E7%A1%AE%E6%94%BF%E7%BB%A9%E8%A7%82%E5%AD%A6%E4%B9%A0%E6%95%99%E8%82%B2%23) `496.8K 🔥` `NEW`
1. [开工新头好全都上淘宝](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B7%A5%E6%96%B0%E5%A4%B4%E5%A5%BD%E5%85%A8%E9%83%BD%E4%B8%8A%E6%B7%98%E5%AE%9D%23) `456.2K 🔥` `NEW`
1. [不让江山剧组声明](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%E5%89%A7%E7%BB%84%E5%A3%B0%E6%98%8E%23) `356.9K 🔥` `NEW`
1. [徐梦桃拆台说并不享受做家务](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E6%8B%86%E5%8F%B0%E8%AF%B4%E5%B9%B6%E4%B8%8D%E4%BA%AB%E5%8F%97%E5%81%9A%E5%AE%B6%E5%8A%A1%23) `224.2K 🔥` `NEW`
1. [原来全麻手术不是睡着了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%85%A8%E9%BA%BB%E6%89%8B%E6%9C%AF%E4%B8%8D%E6%98%AF%E7%9D%A1%E7%9D%80%E4%BA%86%23) `218.5K 🔥` `NEW`
1. [狗主人因值机柜台弃狗被捕](https://s.weibo.com/weibo?q=%23%E7%8B%97%E4%B8%BB%E4%BA%BA%E5%9B%A0%E5%80%BC%E6%9C%BA%E6%9F%9C%E5%8F%B0%E5%BC%83%E7%8B%97%E8%A2%AB%E6%8D%95%23) `183.2K 🔥` `NEW`
1. [瘦了后出片像呼吸一样简单](https://s.weibo.com/weibo?q=%23%E7%98%A6%E4%BA%86%E5%90%8E%E5%87%BA%E7%89%87%E5%83%8F%E5%91%BC%E5%90%B8%E4%B8%80%E6%A0%B7%E7%AE%80%E5%8D%95%23) `170.4K 🔥` `NEW`
1. [墨西哥毒枭身亡事件华人发声](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5%E6%AF%92%E6%9E%AD%E8%BA%AB%E4%BA%A1%E4%BA%8B%E4%BB%B6%E5%8D%8E%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `153.2K 🔥` `NEW`
1. [鸟中刘亦菲也扛不了后置镜头怼脸拍 (Even Liu Yifei, the best among birds, can’t bear the rear camera and slaps her in the face)](https://s.weibo.com/weibo?q=%23%E9%B8%9F%E4%B8%AD%E5%88%98%E4%BA%A6%E8%8F%B2%E4%B9%9F%E6%89%9B%E4%B8%8D%E4%BA%86%E5%90%8E%E7%BD%AE%E9%95%9C%E5%A4%B4%E6%80%BC%E8%84%B8%E6%8B%8D%23) `141.9K 🔥` `NEW`
1. [王格格开了时代峰峻的高会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A0%BC%E6%A0%BC%E5%BC%80%E4%BA%86%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E7%9A%84%E9%AB%98%E4%BC%9A%23) `140.3K 🔥` `NEW`
1. [单依纯 蔻驰](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%20%E8%94%BB%E9%A9%B0%23) `137.0K 🔥` `NEW`
1. [史上最贵iPhone要来了](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E6%9C%80%E8%B4%B5iPhone%E8%A6%81%E6%9D%A5%E4%BA%86%23) `136.0K 🔥` `NEW`
1. [夜王排片](https://s.weibo.com/weibo?q=%23%E5%A4%9C%E7%8E%8B%E6%8E%92%E7%89%87%23) `132.4K 🔥` `NEW`
1. [叶舒华瘦下来美成真人bjd了](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E8%88%92%E5%8D%8E%E7%98%A6%E4%B8%8B%E6%9D%A5%E7%BE%8E%E6%88%90%E7%9C%9F%E4%BA%BAbjd%E4%BA%86%23) `128.8K 🔥` `NEW`
1. [孩子把摔炮当糖果入口后爆炸](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E6%8A%8A%E6%91%94%E7%82%AE%E5%BD%93%E7%B3%96%E6%9E%9C%E5%85%A5%E5%8F%A3%E5%90%8E%E7%88%86%E7%82%B8%23) `118.9K 🔥` `NEW`
1. [谷爱凌去年收入超2300万美元](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%8E%BB%E5%B9%B4%E6%94%B6%E5%85%A5%E8%B6%852300%E4%B8%87%E7%BE%8E%E5%85%83%23) `117.6K 🔥` `NEW`
1. [胡锡进锐评谷爱凌](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E9%94%90%E8%AF%84%E8%B0%B7%E7%88%B1%E5%87%8C%23) `117.3K 🔥` `NEW`
1. [江苏卫视春晚小品 大为震撼](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%E5%B0%8F%E5%93%81%20%E5%A4%A7%E4%B8%BA%E9%9C%87%E6%92%BC%23) `117.1K 🔥` `NEW`
1. [上班 (work)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%23) `116.3K 🔥` `NEW`
1. [刘浩存我想象中扎丸子头的样子](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E6%88%91%E6%83%B3%E8%B1%A1%E4%B8%AD%E6%89%8E%E4%B8%B8%E5%AD%90%E5%A4%B4%E7%9A%84%E6%A0%B7%E5%AD%90%23) `106.4K 🔥` `NEW`
1. [谷爱凌发博晒金牌](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%8F%91%E5%8D%9A%E6%99%92%E9%87%91%E7%89%8C%23) `105.8K 🔥` `NEW`
1. [能谈到结婚的伴侣是什么样的](https://s.weibo.com/weibo?q=%23%E8%83%BD%E8%B0%88%E5%88%B0%E7%BB%93%E5%A9%9A%E7%9A%84%E4%BC%B4%E4%BE%A3%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%23) `103.2K 🔥` `NEW`
1. [周也出发新西兰了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E5%87%BA%E5%8F%91%E6%96%B0%E8%A5%BF%E5%85%B0%E4%BA%86%23) `102.7K 🔥` `NEW`
1. [孙颖莎7比11帕拉南](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E7%E6%AF%9411%E5%B8%95%E6%8B%89%E5%8D%97%23) `95.0K 🔥` `NEW`
1. [夜王](https://s.weibo.com/weibo?q=%23%E5%A4%9C%E7%8E%8B%23) `85.5K 🔥` `NEW`
1. [高速堵车大聪明选择下国道绕行](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E5%A0%B5%E8%BD%A6%E5%A4%A7%E8%81%AA%E6%98%8E%E9%80%89%E6%8B%A9%E4%B8%8B%E5%9B%BD%E9%81%93%E7%BB%95%E8%A1%8C%23) `80.3K 🔥` `NEW`
1. [王鹤棣说祝大家永远不死](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%AF%B4%E7%A5%9D%E5%A4%A7%E5%AE%B6%E6%B0%B8%E8%BF%9C%E4%B8%8D%E6%AD%BB%23) `79.9K 🔥` `NEW`
1. [外国游客出境时疯狂点赞中国](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%87%BA%E5%A2%83%E6%97%B6%E7%96%AF%E7%8B%82%E7%82%B9%E8%B5%9E%E4%B8%AD%E5%9B%BD%23) `79.1K 🔥` `NEW`
1. [三亚偶遇章子怡一家 (Encountering Zhang Ziyi’s family in Sanya)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E5%81%B6%E9%81%87%E7%AB%A0%E5%AD%90%E6%80%A1%E4%B8%80%E5%AE%B6%23) `75.3K 🔥` `NEW`
1. [杨洋工作室回应不让江山相关争议](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%9B%9E%E5%BA%94%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%E7%9B%B8%E5%85%B3%E4%BA%89%E8%AE%AE%23) `72.8K 🔥` `NEW`
1. [免费时段即将结束仍在高速怎么办](https://s.weibo.com/weibo?q=%23%E5%85%8D%E8%B4%B9%E6%97%B6%E6%AE%B5%E5%8D%B3%E5%B0%86%E7%BB%93%E6%9D%9F%E4%BB%8D%E5%9C%A8%E9%AB%98%E9%80%9F%E6%80%8E%E4%B9%88%E5%8A%9E%23) `70.5K 🔥` `NEW`
1. [镖人票房](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E7%A5%A8%E6%88%BF%23) `70.5K 🔥` `NEW`
1. [金秋天solo曲Odd](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%8B%E5%A4%A9solo%E6%9B%B2Odd%23) `69.8K 🔥` `NEW`
1. [夫妻春节不回家送外卖1个月赚4万](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E6%98%A5%E8%8A%82%E4%B8%8D%E5%9B%9E%E5%AE%B6%E9%80%81%E5%A4%96%E5%8D%961%E4%B8%AA%E6%9C%88%E8%B5%9A4%E4%B8%87%23) `69.8K 🔥` `NEW`
1. [白鹿曾舜晞梁永棋陈鹤一团建合照](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9B%BE%E8%88%9C%E6%99%9E%E6%A2%81%E6%B0%B8%E6%A3%8B%E9%99%88%E9%B9%A4%E4%B8%80%E5%9B%A2%E5%BB%BA%E5%90%88%E7%85%A7%23) `69.8K 🔥` `NEW`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `68.2K 🔥` `NEW`
1. [王者血包可以共享了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%A1%80%E5%8C%85%E5%8F%AF%E4%BB%A5%E5%85%B1%E4%BA%AB%E4%BA%86%23) `61.8K 🔥` `NEW`
1. [韩振直播](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%8C%AF%E7%9B%B4%E6%92%AD%23) `61.4K 🔥` `NEW`
1. [没想到卫生间也能跳大跳台 (I didn’t expect that the bathroom could also be used for jumping on the big platform.)](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%83%B3%E5%88%B0%E5%8D%AB%E7%94%9F%E9%97%B4%E4%B9%9F%E8%83%BD%E8%B7%B3%E5%A4%A7%E8%B7%B3%E5%8F%B0%23) `61.0K 🔥` `NEW`
1. [惊蛰无声网络评价和现实评价](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%E7%BD%91%E7%BB%9C%E8%AF%84%E4%BB%B7%E5%92%8C%E7%8E%B0%E5%AE%9E%E8%AF%84%E4%BB%B7%23) `60.9K 🔥` `NEW`
1. [广东一高速春运期间可逆行且合规](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E4%B8%80%E9%AB%98%E9%80%9F%E6%98%A5%E8%BF%90%E6%9C%9F%E9%97%B4%E5%8F%AF%E9%80%86%E8%A1%8C%E4%B8%94%E5%90%88%E8%A7%84%23) `60.9K 🔥` `NEW`
1. [西湖里捞起财物累计价值超600万](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%B9%96%E9%87%8C%E6%8D%9E%E8%B5%B7%E8%B4%A2%E7%89%A9%E7%B4%AF%E8%AE%A1%E4%BB%B7%E5%80%BC%E8%B6%85600%E4%B8%87%23) `60.9K 🔥` `NEW`
1. [台湾河道弃尸案](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E6%B2%B3%E9%81%93%E5%BC%83%E5%B0%B8%E6%A1%88%23) `60.9K 🔥` `NEW`
1. [纯真年代的爱情](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `60.9K 🔥` `NEW`
1. [杨幂拍完惊蛰无声舍不得走](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%8B%8D%E5%AE%8C%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%E8%88%8D%E4%B8%8D%E5%BE%97%E8%B5%B0%23) `60.9K 🔥` `NEW`
1. [中国创境外冬奥最佳战绩](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%88%9B%E5%A2%83%E5%A4%96%E5%86%AC%E5%A5%A5%E6%9C%80%E4%BD%B3%E6%88%98%E7%BB%A9%23) `60.9K 🔥` `NEW`
1. [柳智敏solo成绩](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8Fsolo%E6%88%90%E7%BB%A9%23) `60.9K 🔥` `NEW`
1. [尼格买提家宴8个菜没一个青菜](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%A0%BC%E4%B9%B0%E6%8F%90%E5%AE%B6%E5%AE%B48%E4%B8%AA%E8%8F%9C%E6%B2%A1%E4%B8%80%E4%B8%AA%E9%9D%92%E8%8F%9C%23) `60.9K 🔥` `NEW`
1. [西安暴雪24小时内温差20度 (Blizzard in Xi'an caused temperature difference of 20 degrees in 24 hours)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E6%9A%B4%E9%9B%AA24%E5%B0%8F%E6%97%B6%E5%86%85%E6%B8%A9%E5%B7%AE20%E5%BA%A6%23) `60.9K 🔥` `NEW`

Updated at 2026-02-24 00:30:42

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
