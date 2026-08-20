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

1. [艾滋病检测结果不得告知配偶 (HIV test results must not be disclosed to spouse)](https://s.weibo.com/weibo?q=%23%E8%89%BE%E6%BB%8B%E7%97%85%E6%A3%80%E6%B5%8B%E7%BB%93%E6%9E%9C%E4%B8%8D%E5%BE%97%E5%91%8A%E7%9F%A5%E9%85%8D%E5%81%B6%23) `1.9M 🔥` `NEW`
1. [7个China热词讲透中国潮](https://s.weibo.com/weibo?q=%237%E4%B8%AAChina%E7%83%AD%E8%AF%8D%E8%AE%B2%E9%80%8F%E4%B8%AD%E5%9B%BD%E6%BD%AE%23) `1.5M 🔥` `NEW`
1. [黑神话](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%A5%9E%E8%AF%9D%23) `1.3M 🔥` `NEW`
1. [宇树大跌](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%A4%A7%E8%B7%8C%23) `988.1K 🔥` `NEW`
1. [警方通报青岛男子辱骂女游客](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E9%9D%92%E5%B2%9B%E7%94%B7%E5%AD%90%E8%BE%B1%E9%AA%82%E5%A5%B3%E6%B8%B8%E5%AE%A2%23) `976.8K 🔥` `NEW`
1. [黑神话钟馗新实机](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%A5%9E%E8%AF%9D%E9%92%9F%E9%A6%97%E6%96%B0%E5%AE%9E%E6%9C%BA%23) `668.8K 🔥` `NEW`
1. [彭小苒承认恋情](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%B0%8F%E8%8B%92%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `661.8K 🔥` `NEW`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `640.0K 🔥` `NEW`
1. [固安县民政局回应医院赤裸女童](https://s.weibo.com/weibo?q=%23%E5%9B%BA%E5%AE%89%E5%8E%BF%E6%B0%91%E6%94%BF%E5%B1%80%E5%9B%9E%E5%BA%94%E5%8C%BB%E9%99%A2%E8%B5%A4%E8%A3%B8%E5%A5%B3%E7%AB%A5%23) `627.1K 🔥` `NEW`
1. [时代少年团 古茗](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%8F%A4%E8%8C%97%23) `620.4K 🔥` `NEW`
1. [NCTDREAM全员续约 (All NCTDREAM members renew their contracts)](https://s.weibo.com/weibo?q=%23NCTDREAM%E5%85%A8%E5%91%98%E7%BB%AD%E7%BA%A6%23) `611.0K 🔥` `NEW`
1. [遭枪击身亡处长女儿曾遭死亡威胁](https://s.weibo.com/weibo?q=%23%E9%81%AD%E6%9E%AA%E5%87%BB%E8%BA%AB%E4%BA%A1%E5%A4%84%E9%95%BF%E5%A5%B3%E5%84%BF%E6%9B%BE%E9%81%AD%E6%AD%BB%E4%BA%A1%E5%A8%81%E8%83%81%23) `604.4K 🔥` `NEW`
1. [王栎鑫吴雅婷儿女近照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A0%8E%E9%91%AB%E5%90%B4%E9%9B%85%E5%A9%B7%E5%84%BF%E5%A5%B3%E8%BF%91%E7%85%A7%23) `585.5K 🔥` `NEW`
1. [法院认定宝相花属公有纹样](https://s.weibo.com/weibo?q=%23%E6%B3%95%E9%99%A2%E8%AE%A4%E5%AE%9A%E5%AE%9D%E7%9B%B8%E8%8A%B1%E5%B1%9E%E5%85%AC%E6%9C%89%E7%BA%B9%E6%A0%B7%23) `570.9K 🔥` `NEW`
1. [3孩非亲生案大女儿已经不喊奶奶](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E5%A4%A7%E5%A5%B3%E5%84%BF%E5%B7%B2%E7%BB%8F%E4%B8%8D%E5%96%8A%E5%A5%B6%E5%A5%B6%23) `560.8K 🔥` `NEW`
1. [苹果大批新品意外泄露](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%A4%A7%E6%89%B9%E6%96%B0%E5%93%81%E6%84%8F%E5%A4%96%E6%B3%84%E9%9C%B2%23) `547.0K 🔥` `NEW`
1. [汪苏泷点歌大转盘](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E7%82%B9%E6%AD%8C%E5%A4%A7%E8%BD%AC%E7%9B%98%23) `545.6K 🔥` `NEW`
1. [宇树科技跌了](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E8%B7%8C%E4%BA%86%23) `540.4K 🔥` `NEW`
1. [女儿拒动用十万压岁钱支付生活费 (Daughter refuses to use 100,000 New Year's money to pay for living expenses)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E6%8B%92%E5%8A%A8%E7%94%A8%E5%8D%81%E4%B8%87%E5%8E%8B%E5%B2%81%E9%92%B1%E6%94%AF%E4%BB%98%E7%94%9F%E6%B4%BB%E8%B4%B9%23) `1.9M 🔥` `+63%`
1. [姜珮瑶找凌玲像AI一样丝滑 (Jiang Peiyao looks for Ling Ling as silky as AI)](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E7%8F%AE%E7%91%B6%E6%89%BE%E5%87%8C%E7%8E%B2%E5%83%8FAI%E4%B8%80%E6%A0%B7%E4%B8%9D%E6%BB%91%23) `664.8K 🔥` `+96%`
1. [青岛 搭讪](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%20%E6%90%AD%E8%AE%AA%23) `660.8K 🔥` `+247%`
1. [青岛男子辱骂女游客视频](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E7%94%B7%E5%AD%90%E8%BE%B1%E9%AA%82%E5%A5%B3%E6%B8%B8%E5%AE%A2%E8%A7%86%E9%A2%91%23) `658.0K 🔥` `+111%`
1. [游戏科学 (game science)](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E6%88%8F%E7%A7%91%E5%AD%A6%23) `644.4K 🔥` `+217%`
1. [朱一龙表演 生理痛感](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E8%A1%A8%E6%BC%94%20%E7%94%9F%E7%90%86%E7%97%9B%E6%84%9F%23) `636.5K 🔥` `+210%`
1. [小米人形机器人现场视频曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%8E%B0%E5%9C%BA%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `634.4K 🔥` `+197%`
1. [一景区21岁水上飞人教练溺亡](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%99%AF%E5%8C%BA21%E5%B2%81%E6%B0%B4%E4%B8%8A%E9%A3%9E%E4%BA%BA%E6%95%99%E7%BB%83%E6%BA%BA%E4%BA%A1%23) `622.6K 🔥` `+210%`
1. [中国黄金协会严正声明](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%BB%84%E9%87%91%E5%8D%8F%E4%BC%9A%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `613.3K 🔥` `+216%`
1. [刘宇宁直播豪华配置](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%9B%B4%E6%92%AD%E8%B1%AA%E5%8D%8E%E9%85%8D%E7%BD%AE%23) `607.1K 🔥` `+221%`
1. [空枪开分9.7 (Open gun score 9.7)](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%E5%BC%80%E5%88%869.7%23) `599.0K 🔥` `+180%`
1. [骑士掘金快船交易](https://s.weibo.com/weibo?q=%23%E9%AA%91%E5%A3%AB%E6%8E%98%E9%87%91%E5%BF%AB%E8%88%B9%E4%BA%A4%E6%98%93%23) `596.0K 🔥` `+167%`
1. [秦皇岛一底商发生火灾8死3伤](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E7%9A%87%E5%B2%9B%E4%B8%80%E5%BA%95%E5%95%86%E5%8F%91%E7%94%9F%E7%81%AB%E7%81%BE8%E6%AD%BB3%E4%BC%A4%23) `594.4K 🔥` `+194%`
1. [旺旺官宣听劝版旺仔牛奶 (Want Want official announces advice on selling Want Want milk)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E5%AE%98%E5%AE%A3%E5%90%AC%E5%8A%9D%E7%89%88%E6%97%BA%E4%BB%94%E7%89%9B%E5%A5%B6%23) `589.6K 🔥` `+185%`
1. [说话不仅要避谶还要迎谶 (When speaking, one must not only avoid prophecies but also welcome them.)](https://s.weibo.com/weibo?q=%23%E8%AF%B4%E8%AF%9D%E4%B8%8D%E4%BB%85%E8%A6%81%E9%81%BF%E8%B0%B6%E8%BF%98%E8%A6%81%E8%BF%8E%E8%B0%B6%23) `583.4K 🔥` `+176%`
1. [长这样的5种痣最容易癌变 (These 5 types of moles are most likely to become cancerous)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E8%BF%99%E6%A0%B7%E7%9A%845%E7%A7%8D%E7%97%A3%E6%9C%80%E5%AE%B9%E6%98%93%E7%99%8C%E5%8F%98%23) `580.9K 🔥` `+191%`
1. [有这5个习惯的人更容易瘦](https://s.weibo.com/weibo?q=%23%E6%9C%89%E8%BF%995%E4%B8%AA%E4%B9%A0%E6%83%AF%E7%9A%84%E4%BA%BA%E6%9B%B4%E5%AE%B9%E6%98%93%E7%98%A6%23) `576.1K 🔥` `+189%`
1. [迪丽热巴连续3个月被传恋情 (Dilireba was rumored to be in love for 3 consecutive months)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%9E%E7%BB%AD3%E4%B8%AA%E6%9C%88%E8%A2%AB%E4%BC%A0%E6%81%8B%E6%83%85%23) `574.4K 🔥` `+179%`
1. [桃黑黑宣布暂时休息 (Taoheihei announces temporary break)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E5%AE%A3%E5%B8%83%E6%9A%82%E6%97%B6%E4%BC%91%E6%81%AF%23) `566.5K 🔥` `+186%`
1. [苏翊鸣七夕晒9图](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E4%B8%83%E5%A4%95%E6%99%929%E5%9B%BE%23) `564.6K 🔥` `+197%`
1. [弟弟称哥哥刚确诊癌症嫂子就提离婚 (The younger brother said that his sister-in-law filed for divorce just after he was diagnosed with cancer.)](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E7%A7%B0%E5%93%A5%E5%93%A5%E5%88%9A%E7%A1%AE%E8%AF%8A%E7%99%8C%E7%97%87%E5%AB%82%E5%AD%90%E5%B0%B1%E6%8F%90%E7%A6%BB%E5%A9%9A%23) `556.7K 🔥` `+176%`
1. [穆祉丞铁了心要养梦女](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E9%93%81%E4%BA%86%E5%BF%83%E8%A6%81%E5%85%BB%E6%A2%A6%E5%A5%B3%23) `554.9K 🔥` `+195%`
1. [孟子义没有给cp让路的义务 (Meng Ziyi has no obligation to give way to CP)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%B2%A1%E6%9C%89%E7%BB%99cp%E8%AE%A9%E8%B7%AF%E7%9A%84%E4%B9%89%E5%8A%A1%23) `551.0K 🔥` `+197%`
1. [舞蹈新风暴](https://s.weibo.com/weibo?q=%23%E8%88%9E%E8%B9%88%E6%96%B0%E9%A3%8E%E6%9A%B4%23) `537.4K 🔥` `+193%`
1. [空枪 菠萝油 (Empty gun pineapple oil)](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%20%E8%8F%A0%E8%90%9D%E6%B2%B9%23) `533.3K 🔥` `+189%`
1. [空枪 李嘉诚儿子绑架案](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%20%E6%9D%8E%E5%98%89%E8%AF%9A%E5%84%BF%E5%AD%90%E7%BB%91%E6%9E%B6%E6%A1%88%23) `672.6K 🔥`
1. [青岛海之恋公园](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E6%B5%B7%E4%B9%8B%E6%81%8B%E5%85%AC%E5%9B%AD%23) `654.2K 🔥`
1. [全季酒店 再追究对我们对你都不好](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%AD%A3%E9%85%92%E5%BA%97%20%E5%86%8D%E8%BF%BD%E7%A9%B6%E5%AF%B9%E6%88%91%E4%BB%AC%E5%AF%B9%E4%BD%A0%E9%83%BD%E4%B8%8D%E5%A5%BD%23) `647.0K 🔥`
1. [12306回应买票占座放零食这座位能让吗 (12306 Reply Buy a ticket, occupy a seat and put snacks on it. Can this seat be used?)](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E8%BF%99%E5%BA%A7%E4%BD%8D%E8%83%BD%E8%AE%A9%E5%90%97%23) `629.6K 🔥`
1. [女子凌晨倒掉24瓶爱心水被拍下 (Woman was filmed pouring out 24 bottles of love water in the early morning)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%8C%E6%99%A8%E5%80%92%E6%8E%8924%E7%93%B6%E7%88%B1%E5%BF%83%E6%B0%B4%E8%A2%AB%E6%8B%8D%E4%B8%8B%23) `674.5K 🔥` `-57%`

Updated at 2026-08-20 10:44:00

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
