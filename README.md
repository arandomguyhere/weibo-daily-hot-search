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

1. [樊振东发文分享诺坎普之旅](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8F%91%E6%96%87%E5%88%86%E4%BA%AB%E8%AF%BA%E5%9D%8E%E6%99%AE%E4%B9%8B%E6%97%85%23) `1.0M 🔥` `NEW`
1. [福田康夫去世](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E7%94%B0%E5%BA%B7%E5%A4%AB%E5%8E%BB%E4%B8%96%23) `777.4K 🔥` `NEW`
1. [纪念红军长征胜利90周年主题长卷](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E5%BF%B5%E7%BA%A2%E5%86%9B%E9%95%BF%E5%BE%81%E8%83%9C%E5%88%A990%E5%91%A8%E5%B9%B4%E4%B8%BB%E9%A2%98%E9%95%BF%E5%8D%B7%23) `571.8K 🔥` `NEW`
1. [ROSE尊尼获加黑牌系列全球代言](https://s.weibo.com/weibo?q=%23ROSE%E5%B0%8A%E5%B0%BC%E8%8E%B7%E5%8A%A0%E9%BB%91%E7%89%8C%E7%B3%BB%E5%88%97%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%23) `535.2K 🔥` `NEW`
1. [小米汽车高速撞树后驾驶员安全](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E9%AB%98%E9%80%9F%E6%92%9E%E6%A0%91%E5%90%8E%E9%A9%BE%E9%A9%B6%E5%91%98%E5%AE%89%E5%85%A8%23) `523.0K 🔥` `NEW`
1. [樊振东去巴萨主场被反复质疑盘查](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8E%BB%E5%B7%B4%E8%90%A8%E4%B8%BB%E5%9C%BA%E8%A2%AB%E5%8F%8D%E5%A4%8D%E8%B4%A8%E7%96%91%E7%9B%98%E6%9F%A5%23) `436.9K 🔥` `NEW`
1. [你网购看到的商品展示可能都是假的](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%BD%91%E8%B4%AD%E7%9C%8B%E5%88%B0%E7%9A%84%E5%95%86%E5%93%81%E5%B1%95%E7%A4%BA%E5%8F%AF%E8%83%BD%E9%83%BD%E6%98%AF%E5%81%87%E7%9A%84%23) `436.1K 🔥` `NEW`
1. [苹果称很多客户取消iPhoneDuo订单](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E7%A7%B0%E5%BE%88%E5%A4%9A%E5%AE%A2%E6%88%B7%E5%8F%96%E6%B6%88iPhoneDuo%E8%AE%A2%E5%8D%95%23) `436.0K 🔥` `NEW`
1. [学习通崩了](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E4%B9%A0%E9%80%9A%E5%B4%A9%E4%BA%86%23) `435.2K 🔥` `NEW`
1. [海拔4800米的生命救援](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%8B%944800%E7%B1%B3%E7%9A%84%E7%94%9F%E5%91%BD%E6%95%91%E6%8F%B4%23) `434.1K 🔥` `NEW`
1. [樊振东被巴萨球迷投诉是卧底](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%A2%AB%E5%B7%B4%E8%90%A8%E7%90%83%E8%BF%B7%E6%8A%95%E8%AF%89%E6%98%AF%E5%8D%A7%E5%BA%95%23) `428.6K 🔥` `NEW`
1. [男子出狱砍死出轨妻子二审判死缓](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%87%BA%E7%8B%B1%E7%A0%8D%E6%AD%BB%E5%87%BA%E8%BD%A8%E5%A6%BB%E5%AD%90%E4%BA%8C%E5%AE%A1%E5%88%A4%E6%AD%BB%E7%BC%93%23) `424.5K 🔥` `NEW`
1. [别杀我我是浙江人](https://s.weibo.com/weibo?q=%23%E5%88%AB%E6%9D%80%E6%88%91%E6%88%91%E6%98%AF%E6%B5%99%E6%B1%9F%E4%BA%BA%23) `418.3K 🔥` `NEW`
1. [母亲用惠民保报销十万元](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E7%94%A8%E6%83%A0%E6%B0%91%E4%BF%9D%E6%8A%A5%E9%94%80%E5%8D%81%E4%B8%87%E5%85%83%23) `414.4K 🔥` `NEW`
1. [丈夫转情人2575万情人回转2258万](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E8%BD%AC%E6%83%85%E4%BA%BA2575%E4%B8%87%E6%83%85%E4%BA%BA%E5%9B%9E%E8%BD%AC2258%E4%B8%87%23) `411.9K 🔥` `NEW`
1. [华伦天奴待官宣尴尬期](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BC%A6%E5%A4%A9%E5%A5%B4%E5%BE%85%E5%AE%98%E5%AE%A3%E5%B0%B4%E5%B0%AC%E6%9C%9F%23) `408.4K 🔥` `NEW`
1. [丞磊徐若晗15秒翻面吻](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E5%BE%90%E8%8B%A5%E6%99%9715%E7%A7%92%E7%BF%BB%E9%9D%A2%E5%90%BB%23) `403.2K 🔥` `NEW`
1. [妊娠纹不是怀孕证明](https://s.weibo.com/weibo?q=%23%E5%A6%8A%E5%A8%A0%E7%BA%B9%E4%B8%8D%E6%98%AF%E6%80%80%E5%AD%95%E8%AF%81%E6%98%8E%23) `399.5K 🔥` `NEW`
1. [李浩源后悔参加offer](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B5%A9%E6%BA%90%E5%90%8E%E6%82%94%E5%8F%82%E5%8A%A0offer%23) `399.1K 🔥` `NEW`
1. [丈夫砍死出轨妻子法院认定妻子有责任](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E7%A0%8D%E6%AD%BB%E5%87%BA%E8%BD%A8%E5%A6%BB%E5%AD%90%E6%B3%95%E9%99%A2%E8%AE%A4%E5%AE%9A%E5%A6%BB%E5%AD%90%E6%9C%89%E8%B4%A3%E4%BB%BB%23) `395.6K 🔥` `NEW`
1. [找工作不要怕世界是草台班子](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%B7%A5%E4%BD%9C%E4%B8%8D%E8%A6%81%E6%80%95%E4%B8%96%E7%95%8C%E6%98%AF%E8%8D%89%E5%8F%B0%E7%8F%AD%E5%AD%90%23) `314.5K 🔥` `NEW`
1. [马天宇主动提起李明德是要有反转了吗](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%B8%BB%E5%8A%A8%E6%8F%90%E8%B5%B7%E6%9D%8E%E6%98%8E%E5%BE%B7%E6%98%AF%E8%A6%81%E6%9C%89%E5%8F%8D%E8%BD%AC%E4%BA%86%E5%90%97%23) `314.1K 🔥` `NEW`
1. [嫁金钗闫桉是亲爽了还是被扇爽了](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E9%97%AB%E6%A1%89%E6%98%AF%E4%BA%B2%E7%88%BD%E4%BA%86%E8%BF%98%E6%98%AF%E8%A2%AB%E6%89%87%E7%88%BD%E4%BA%86%23) `295.9K 🔥` `NEW`
1. [阿雅 一个中国](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%9B%85%20%E4%B8%80%E4%B8%AA%E4%B8%AD%E5%9B%BD%23) `291.0K 🔥` `NEW`
1. [馅饼店老板 沈腾就是太饿了](https://s.weibo.com/weibo?q=%23%E9%A6%85%E9%A5%BC%E5%BA%97%E8%80%81%E6%9D%BF%20%E6%B2%88%E8%85%BE%E5%B0%B1%E6%98%AF%E5%A4%AA%E9%A5%BF%E4%BA%86%23) `274.1K 🔥` `NEW`
1. [老干妈AI裁员传闻引争议](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B9%B2%E5%A6%88AI%E8%A3%81%E5%91%98%E4%BC%A0%E9%97%BB%E5%BC%95%E4%BA%89%E8%AE%AE%23) `273.6K 🔥` `NEW`
1. [黄金价格再次下跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%BB%B7%E6%A0%BC%E5%86%8D%E6%AC%A1%E4%B8%8B%E8%B7%8C%23) `266.4K 🔥` `NEW`
1. [马天宇李明德时间线](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E6%9D%8E%E6%98%8E%E5%BE%B7%E6%97%B6%E9%97%B4%E7%BA%BF%23) `263.3K 🔥` `NEW`
1. [网友让徐艺洋展示妊娠纹](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E8%AE%A9%E5%BE%90%E8%89%BA%E6%B4%8B%E5%B1%95%E7%A4%BA%E5%A6%8A%E5%A8%A0%E7%BA%B9%23) `261.0K 🔥` `NEW`
1. [后会友期爆料](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%88%86%E6%96%99%23) `255.9K 🔥` `NEW`
1. [小城良方初吻也是告别吻](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%88%9D%E5%90%BB%E4%B9%9F%E6%98%AF%E5%91%8A%E5%88%AB%E5%90%BB%23) `249.7K 🔥` `NEW`
1. [iG胜利聚餐](https://s.weibo.com/weibo?q=%23iG%E8%83%9C%E5%88%A9%E8%81%9A%E9%A4%90%23) `249.7K 🔥` `NEW`
1. [宁夏交警宣传片笑到冒烟](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%A4%8F%E4%BA%A4%E8%AD%A6%E5%AE%A3%E4%BC%A0%E7%89%87%E7%AC%91%E5%88%B0%E5%86%92%E7%83%9F%23) `237.4K 🔥` `NEW`
1. [刘铮亮回吻](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%93%AE%E4%BA%AE%E5%9B%9E%E5%90%BB%23) `232.2K 🔥` `NEW`
1. [仅3天iPhoneDuo从溢价上万到破发](https://s.weibo.com/weibo?q=%23%E4%BB%853%E5%A4%A9iPhoneDuo%E4%BB%8E%E6%BA%A2%E4%BB%B7%E4%B8%8A%E4%B8%87%E5%88%B0%E7%A0%B4%E5%8F%91%23) `208.7K 🔥` `NEW`
1. [詹姆斯真老了](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E7%9C%9F%E8%80%81%E4%BA%86%23) `197.4K 🔥` `NEW`
1. [许飞 鸭舌](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%20%E9%B8%AD%E8%88%8C%23) `195.9K 🔥` `NEW`
1. [樊振东现场观战西班牙国家德比](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%8E%B0%E5%9C%BA%E8%A7%82%E6%88%98%E8%A5%BF%E7%8F%AD%E7%89%99%E5%9B%BD%E5%AE%B6%E5%BE%B7%E6%AF%94%23) `187.1K 🔥` `NEW`
1. [林依晨提名金狮奖最佳女主角](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E6%8F%90%E5%90%8D%E9%87%91%E7%8B%AE%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E8%A7%92%23) `177.6K 🔥` `NEW`
1. [杨幂提名金狮奖最佳女配](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%8F%90%E5%90%8D%E9%87%91%E7%8B%AE%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E9%85%8D%23) `177.0K 🔥` `NEW`
1. [世界最小鸟蜂鸟](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9C%80%E5%B0%8F%E9%B8%9F%E8%9C%82%E9%B8%9F%23) `176.7K 🔥` `NEW`
1. [姆巴佩 亚马尔](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%20%E4%BA%9A%E9%A9%AC%E5%B0%94%23) `168.8K 🔥` `NEW`
1. [杨议相声演出疑情绪失控](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%AE%AE%E7%9B%B8%E5%A3%B0%E6%BC%94%E5%87%BA%E7%96%91%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `162.0K 🔥` `NEW`
1. [无言 AG](https://s.weibo.com/weibo?q=%23%E6%97%A0%E8%A8%80%20AG%23) `159.9K 🔥` `NEW`
1. [李浩源自曝在吃抗抑郁药物](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B5%A9%E6%BA%90%E8%87%AA%E6%9B%9D%E5%9C%A8%E5%90%83%E6%8A%97%E6%8A%91%E9%83%81%E8%8D%AF%E7%89%A9%23) `152.0K 🔥` `NEW`
1. [爸妈带我看心理医生结果他们确诊了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E5%A6%88%E5%B8%A6%E6%88%91%E7%9C%8B%E5%BF%83%E7%90%86%E5%8C%BB%E7%94%9F%E7%BB%93%E6%9E%9C%E4%BB%96%E4%BB%AC%E7%A1%AE%E8%AF%8A%E4%BA%86%23) `146.7K 🔥` `NEW`
1. [尚公主追剧团](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E8%BF%BD%E5%89%A7%E5%9B%A2%23) `145.2K 🔥` `NEW`
1. [金价承压央行购金托底](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%89%BF%E5%8E%8B%E5%A4%AE%E8%A1%8C%E8%B4%AD%E9%87%91%E6%89%98%E5%BA%95%23) `145.1K 🔥` `NEW`
1. [和胡彦斌分手后状态反差](https://s.weibo.com/weibo?q=%23%E5%92%8C%E8%83%A1%E5%BD%A6%E6%96%8C%E5%88%86%E6%89%8B%E5%90%8E%E7%8A%B6%E6%80%81%E5%8F%8D%E5%B7%AE%23) `423.5K 🔥` `+32%`
1. [黄子韬我结婚生子碍你事了吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%88%91%E7%BB%93%E5%A9%9A%E7%94%9F%E5%AD%90%E7%A2%8D%E4%BD%A0%E4%BA%8B%E4%BA%86%E5%90%97%23) `161.7K 🔥` `-50%`

Updated at 2026-10-26 15:06:04

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
