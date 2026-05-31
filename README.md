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

1. [哈尔滨沙尘暴黑墙2分钟吞没居民楼 (Harbin sandstorm black wall engulfs residential building in 2 minutes)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E6%B2%99%E5%B0%98%E6%9A%B4%E9%BB%91%E5%A2%992%E5%88%86%E9%92%9F%E5%90%9E%E6%B2%A1%E5%B1%85%E6%B0%91%E6%A5%BC%23) `486.6K 🔥` `NEW`
1. [樊振东已集齐德国杯欧冠德甲冠军](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%B7%B2%E9%9B%86%E9%BD%90%E5%BE%B7%E5%9B%BD%E6%9D%AF%E6%AC%A7%E5%86%A0%E5%BE%B7%E7%94%B2%E5%86%A0%E5%86%9B%23) `425.0K 🔥` `NEW`
1. [上飞猪抢徐良重庆站 稳了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E9%A3%9E%E7%8C%AA%E6%8A%A2%E5%BE%90%E8%89%AF%E9%87%8D%E5%BA%86%E7%AB%99%20%E7%A8%B3%E4%BA%86%23) `409.1K 🔥` `NEW`
1. [王源 好听](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%20%E5%A5%BD%E5%90%AC%23) `297.2K 🔥` `NEW`
1. [曝85花七折捡漏代言](https://s.weibo.com/weibo?q=%23%E6%9B%9D85%E8%8A%B1%E4%B8%83%E6%8A%98%E6%8D%A1%E6%BC%8F%E4%BB%A3%E8%A8%80%23) `291.1K 🔥` `NEW`
1. [张凌赫线下活动取消目击者发声](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%BA%BF%E4%B8%8B%E6%B4%BB%E5%8A%A8%E5%8F%96%E6%B6%88%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23) `267.8K 🔥` `NEW`
1. [王源压轴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%8E%8B%E8%BD%B4%23) `249.0K 🔥` `NEW`
1. [拉丁舞爆火裁判一个月跳瘦8斤](https://s.weibo.com/weibo?q=%23%E6%8B%89%E4%B8%81%E8%88%9E%E7%88%86%E7%81%AB%E8%A3%81%E5%88%A4%E4%B8%80%E4%B8%AA%E6%9C%88%E8%B7%B3%E7%98%A68%E6%96%A4%23) `242.1K 🔥` `NEW`
1. [央视曝光劣质驱蚊产品](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E5%8A%A3%E8%B4%A8%E9%A9%B1%E8%9A%8A%E4%BA%A7%E5%93%81%23) `239.5K 🔥` `NEW`
1. [上海男篮3比0广厦男篮](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B7%E7%AF%AE3%E6%AF%940%E5%B9%BF%E5%8E%A6%E7%94%B7%E7%AF%AE%23) `228.9K 🔥` `NEW`
1. [邓超没做腋下管理 (Deng Chao did not do underarm management)](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E6%B2%A1%E5%81%9A%E8%85%8B%E4%B8%8B%E7%AE%A1%E7%90%86%23) `224.2K 🔥` `NEW`
1. [万花世界 鞠婧祎戏份](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%20%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%88%8F%E4%BB%BD%23) `207.4K 🔥` `NEW`
1. [天天吃鸡蛋和很少吃鸡蛋谁更健康](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%A4%A9%E5%90%83%E9%B8%A1%E8%9B%8B%E5%92%8C%E5%BE%88%E5%B0%91%E5%90%83%E9%B8%A1%E8%9B%8B%E8%B0%81%E6%9B%B4%E5%81%A5%E5%BA%B7%23) `207.2K 🔥` `NEW`
1. [医学生网购美工刀拆袋被裸装刀割伤](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E5%AD%A6%E7%94%9F%E7%BD%91%E8%B4%AD%E7%BE%8E%E5%B7%A5%E5%88%80%E6%8B%86%E8%A2%8B%E8%A2%AB%E8%A3%B8%E8%A3%85%E5%88%80%E5%89%B2%E4%BC%A4%23) `205.8K 🔥` `NEW`
1. [白鹿换头像过六一](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%8D%A2%E5%A4%B4%E5%83%8F%E8%BF%87%E5%85%AD%E4%B8%80%23) `193.1K 🔥` `NEW`
1. [日系车溃败](https://s.weibo.com/weibo?q=%23%E6%97%A5%E7%B3%BB%E8%BD%A6%E6%BA%83%E8%B4%A5%23) `172.8K 🔥` `NEW`
1. [陈妍希去看谢霆锋的演唱会](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%8E%BB%E7%9C%8B%E8%B0%A2%E9%9C%86%E9%94%8B%E7%9A%84%E6%BC%94%E5%94%B1%E4%BC%9A%23) `169.1K 🔥` `NEW`
1. [9岁女童因怕挨打离家失联22年终团圆](https://s.weibo.com/weibo?q=%239%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%9B%A0%E6%80%95%E6%8C%A8%E6%89%93%E7%A6%BB%E5%AE%B6%E5%A4%B1%E8%81%9422%E5%B9%B4%E7%BB%88%E5%9B%A2%E5%9C%86%23) `158.5K 🔥` `NEW`
1. [宋亚轩视频进度条是小时候的自己](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%A7%86%E9%A2%91%E8%BF%9B%E5%BA%A6%E6%9D%A1%E6%98%AF%E5%B0%8F%E6%97%B6%E5%80%99%E7%9A%84%E8%87%AA%E5%B7%B1%23) `154.9K 🔥` `NEW`
1. [多名艺人辞演后特朗普决定自己上台](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E8%89%BA%E4%BA%BA%E8%BE%9E%E6%BC%94%E5%90%8E%E7%89%B9%E6%9C%97%E6%99%AE%E5%86%B3%E5%AE%9A%E8%87%AA%E5%B7%B1%E4%B8%8A%E5%8F%B0%23) `124.6K 🔥` `NEW`
1. [天涯神帖 (Tianya Shentie)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B6%AF%E7%A5%9E%E5%B8%96%23) `4.4M 🔥` `+38%`
1. [樊振东德甲夺冠 (Fan Zhendong wins Bundesliga title)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BE%B7%E7%94%B2%E5%A4%BA%E5%86%A0%23) `1.5M 🔥` `+186%`
1. [跟着刘宇宁上京东618更便宜 (It’s cheaper to follow Liu Yuning on JD.com 618)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E5%88%98%E5%AE%87%E5%AE%81%E4%B8%8A%E4%BA%AC%E4%B8%9C618%E6%9B%B4%E4%BE%BF%E5%AE%9C%23) `876.4K 🔥` `+127%`
1. [城事日记津彩有你](https://s.weibo.com/weibo?q=%23%E5%9F%8E%E4%BA%8B%E6%97%A5%E8%AE%B0%E6%B4%A5%E5%BD%A9%E6%9C%89%E4%BD%A0%23) `1.0M 🔥`
1. [新疆人未来一个月菜品 (Xinjiang people’s dishes for the next month)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E4%BA%BA%E6%9C%AA%E6%9D%A5%E4%B8%80%E4%B8%AA%E6%9C%88%E8%8F%9C%E5%93%81%23) `516.6K 🔥`
1. [关晓彤演技](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%BC%94%E6%8A%80%23) `403.8K 🔥`
1. [天涯社区将正式恢复访问 (Tianya Community will officially resume access)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B6%AF%E7%A4%BE%E5%8C%BA%E5%B0%86%E6%AD%A3%E5%BC%8F%E6%81%A2%E5%A4%8D%E8%AE%BF%E9%97%AE%23) `344.0K 🔥` `-69%`
1. [忆秦娥婚后](https://s.weibo.com/weibo?q=%23%E5%BF%86%E7%A7%A6%E5%A8%A5%E5%A9%9A%E5%90%8E%23) `312.9K 🔥` `-26%`
1. [二次元不是软色情遮羞布](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%AC%A1%E5%85%83%E4%B8%8D%E6%98%AF%E8%BD%AF%E8%89%B2%E6%83%85%E9%81%AE%E7%BE%9E%E5%B8%83%23) `296.2K 🔥` `-33%`
1. [张凌赫全额补偿粉丝](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%85%A8%E9%A2%9D%E8%A1%A5%E5%81%BF%E7%B2%89%E4%B8%9D%23) `288.0K 🔥` `-35%`
1. [孙杨 下沉市场口碑反转](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E5%8F%A3%E7%A2%91%E5%8F%8D%E8%BD%AC%23) `285.5K 🔥` `-36%`
1. [南京大学首位没有毕业论文博士答辩](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E9%A6%96%E4%BD%8D%E6%B2%A1%E6%9C%89%E6%AF%95%E4%B8%9A%E8%AE%BA%E6%96%87%E5%8D%9A%E5%A3%AB%E7%AD%94%E8%BE%A9%23) `280.1K 🔥` `-34%`
1. [Faker奶奶被死亡威胁 (Grandma Faker was threatened with death)](https://s.weibo.com/weibo?q=%23Faker%E5%A5%B6%E5%A5%B6%E8%A2%AB%E6%AD%BB%E4%BA%A1%E5%A8%81%E8%83%81%23) `278.0K 🔥` `-37%`
1. [王灿因病切了一片肺](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%81%BF%E5%9B%A0%E7%97%85%E5%88%87%E4%BA%86%E4%B8%80%E7%89%87%E8%82%BA%23) `272.2K 🔥` `-38%`
1. [被女主播开播前的调试震惊到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%BC%80%E6%92%AD%E5%89%8D%E7%9A%84%E8%B0%83%E8%AF%95%E9%9C%87%E6%83%8A%E5%88%B0%E4%BA%86%23) `267.2K 🔥` `-38%`
1. [柬埔寨一中国地产商遇害 (A Chinese real estate developer in Cambodia was killed)](https://s.weibo.com/weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E4%B8%80%E4%B8%AD%E5%9B%BD%E5%9C%B0%E4%BA%A7%E5%95%86%E9%81%87%E5%AE%B3%23) `267.0K 🔥` `-39%`
1. [曝沐言头被砸到](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B2%90%E8%A8%80%E5%A4%B4%E8%A2%AB%E7%A0%B8%E5%88%B0%23) `265.9K 🔥` `-40%`
1. [其实补气血真的很简单 (In fact, replenishing qi and blood is really simple)](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E8%A1%A5%E6%B0%94%E8%A1%80%E7%9C%9F%E7%9A%84%E5%BE%88%E7%AE%80%E5%8D%95%23) `265.1K 🔥` `-39%`
1. [马嘉祺拍立得废片 (Ma Jiaqi's useless Polaroid film)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E6%8B%8D%E7%AB%8B%E5%BE%97%E5%BA%9F%E7%89%87%23) `264.5K 🔥` `-39%`
1. [小英晒病例 (Xiaoying's case of sunburn)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E6%99%92%E7%97%85%E4%BE%8B%23) `263.6K 🔥` `-36%`
1. [女子住酒店半夜遭陌生男子站床头](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%8F%E9%85%92%E5%BA%97%E5%8D%8A%E5%A4%9C%E9%81%AD%E9%99%8C%E7%94%9F%E7%94%B7%E5%AD%90%E7%AB%99%E5%BA%8A%E5%A4%B4%23) `262.9K 🔥` `-35%`
1. [主角编剧](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E7%BC%96%E5%89%A7%23) `252.2K 🔥` `-53%`
1. [智利缉毒犬典礼上扑咬海军中将口袋](https://s.weibo.com/weibo?q=%23%E6%99%BA%E5%88%A9%E7%BC%89%E6%AF%92%E7%8A%AC%E5%85%B8%E7%A4%BC%E4%B8%8A%E6%89%91%E5%92%AC%E6%B5%B7%E5%86%9B%E4%B8%AD%E5%B0%86%E5%8F%A3%E8%A2%8B%23) `247.5K 🔥` `-41%`
1. [中方必将反制日菲所谓划界谈判](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%BF%85%E5%B0%86%E5%8F%8D%E5%88%B6%E6%97%A5%E8%8F%B2%E6%89%80%E8%B0%93%E5%88%92%E7%95%8C%E8%B0%88%E5%88%A4%23) `245.7K 🔥` `-41%`
1. [文严文 刘文祥 (Wen Yanwen Liu Wenxiang)](https://s.weibo.com/weibo?q=%23%E6%96%87%E4%B8%A5%E6%96%87%20%E5%88%98%E6%96%87%E7%A5%A5%23) `231.1K 🔥` `-42%`
1. [哈尔滨沙尘暴 (Harbin sandstorm)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E6%B2%99%E5%B0%98%E6%9A%B4%23) `219.9K 🔥` `-50%`
1. [穆祉丞第一条泡泡](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%AC%AC%E4%B8%80%E6%9D%A1%E6%B3%A1%E6%B3%A1%23) `215.5K 🔥` `-50%`
1. [过度防晒](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E9%98%B2%E6%99%92%23) `213.1K 🔥` `-52%`
1. [vogue红毯 疲惫](https://s.weibo.com/weibo?q=%23vogue%E7%BA%A2%E6%AF%AF%20%E7%96%B2%E6%83%AB%23) `185.8K 🔥` `-54%`
1. [日本拥抱印度](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8B%A5%E6%8A%B1%E5%8D%B0%E5%BA%A6%23) `170.1K 🔥` `-56%`
1. [刘诗诗下沉市场 (Liu Shishi sinks into the market)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%23) `162.7K 🔥` `-59%`
1. [王一栩给鞠婧祎推的资源](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E6%A0%A9%E7%BB%99%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%8E%A8%E7%9A%84%E8%B5%84%E6%BA%90%23) `142.9K 🔥` `-67%`

Updated at 2026-05-31 23:47:10

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
