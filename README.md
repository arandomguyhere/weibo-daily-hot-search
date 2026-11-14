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

1. [BLG二比一GEN拿到赛点](https://s.weibo.com/weibo?q=%23BLG%E4%BA%8C%E6%AF%94%E4%B8%80GEN%E6%8B%BF%E5%88%B0%E8%B5%9B%E7%82%B9%23) `976.0K 🔥` `NEW`
1. [十五五时期中国储能新上加新](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E6%97%B6%E6%9C%9F%E4%B8%AD%E5%9B%BD%E5%82%A8%E8%83%BD%E6%96%B0%E4%B8%8A%E5%8A%A0%E6%96%B0%23) `576.8K 🔥` `NEW`
1. [Ning说Chovy真同意了](https://s.weibo.com/weibo?q=%23Ning%E8%AF%B4Chovy%E7%9C%9F%E5%90%8C%E6%84%8F%E4%BA%86%23) `554.3K 🔥` `NEW`
1. [BLG团战](https://s.weibo.com/weibo?q=%23BLG%E5%9B%A2%E6%88%98%23) `415.5K 🔥` `NEW`
1. [葡萄牙1比4惨败丹麦](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%991%E6%AF%944%E6%83%A8%E8%B4%A5%E4%B8%B9%E9%BA%A6%23) `284.7K 🔥` `NEW`
1. [BLG不敌GEN后台镜头曝光](https://s.weibo.com/weibo?q=%23BLG%E4%B8%8D%E6%95%8CGEN%E5%90%8E%E5%8F%B0%E9%95%9C%E5%A4%B4%E6%9B%9D%E5%85%89%23) `129.4K 🔥` `NEW`
1. [SpaceX首次实现筷子夹飞船](https://s.weibo.com/weibo?q=%23SpaceX%E9%A6%96%E6%AC%A1%E5%AE%9E%E7%8E%B0%E7%AD%B7%E5%AD%90%E5%A4%B9%E9%A3%9E%E8%88%B9%23) `114.9K 🔥` `NEW`
1. [Kiin上单VN](https://s.weibo.com/weibo?q=%23Kiin%E4%B8%8A%E5%8D%95VN%23) `112.8K 🔥` `NEW`
1. [田小娟太帅了](https://s.weibo.com/weibo?q=%23%E7%94%B0%E5%B0%8F%E5%A8%9F%E5%A4%AA%E5%B8%85%E4%BA%86%23) `107.9K 🔥` `NEW`
1. [ON 别急](https://s.weibo.com/weibo?q=%23ON%20%E5%88%AB%E6%80%A5%23) `107.8K 🔥` `NEW`
1. [BLG](https://s.weibo.com/weibo?q=%23BLG%23) `107.4K 🔥` `NEW`
1. [BLG决赛状态](https://s.weibo.com/weibo?q=%23BLG%E5%86%B3%E8%B5%9B%E7%8A%B6%E6%80%81%23) `107.0K 🔥` `NEW`
1. [睡眠不足的人长期处于应激状态](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E7%9C%A0%E4%B8%8D%E8%B6%B3%E7%9A%84%E4%BA%BA%E9%95%BF%E6%9C%9F%E5%A4%84%E4%BA%8E%E5%BA%94%E6%BF%80%E7%8A%B6%E6%80%81%23) `106.7K 🔥` `NEW`
1. [英雄联盟即将全面升级](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%E5%8D%B3%E5%B0%86%E5%85%A8%E9%9D%A2%E5%8D%87%E7%BA%A7%23) `106.4K 🔥` `NEW`
1. [星舰超重型助推器回收时爆炸](https://s.weibo.com/weibo?q=%23%E6%98%9F%E8%88%B0%E8%B6%85%E9%87%8D%E5%9E%8B%E5%8A%A9%E6%8E%A8%E5%99%A8%E5%9B%9E%E6%94%B6%E6%97%B6%E7%88%86%E7%82%B8%23) `106.1K 🔥` `NEW`
1. [葡萄牙主场Tifo致敬C罗](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E4%B8%BB%E5%9C%BATifo%E8%87%B4%E6%95%ACC%E7%BD%97%23) `105.8K 🔥` `NEW`
1. [杨清柠 王乐乐](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B8%85%E6%9F%A0%20%E7%8E%8B%E4%B9%90%E4%B9%90%23) `105.6K 🔥` `NEW`
1. [宁王谈BLG团战打不过GEN](https://s.weibo.com/weibo?q=%23%E5%AE%81%E7%8E%8B%E8%B0%88BLG%E5%9B%A2%E6%88%98%E6%89%93%E4%B8%8D%E8%BF%87GEN%23) `104.6K 🔥` `NEW`
1. [女性不被结婚生子占满人生](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%80%A7%E4%B8%8D%E8%A2%AB%E7%BB%93%E5%A9%9A%E7%94%9F%E5%AD%90%E5%8D%A0%E6%BB%A1%E4%BA%BA%E7%94%9F%23) `103.8K 🔥` `NEW`
1. [Doinb说GenG打团太变态了](https://s.weibo.com/weibo?q=%23Doinb%E8%AF%B4GenG%E6%89%93%E5%9B%A2%E5%A4%AA%E5%8F%98%E6%80%81%E4%BA%86%23) `103.5K 🔥` `NEW`
1. [新疆就是一个巨大的干燥剂](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E5%B0%B1%E6%98%AF%E4%B8%80%E4%B8%AA%E5%B7%A8%E5%A4%A7%E7%9A%84%E5%B9%B2%E7%87%A5%E5%89%82%23) `103.3K 🔥` `NEW`
1. [谭开心曝高迪曾少付一千酬劳](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E5%BC%80%E5%BF%83%E6%9B%9D%E9%AB%98%E8%BF%AA%E6%9B%BE%E5%B0%91%E4%BB%98%E4%B8%80%E5%8D%83%E9%85%AC%E5%8A%B3%23) `95.4K 🔥` `NEW`
1. [英雄联盟曙光预约](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%E6%9B%99%E5%85%89%E9%A2%84%E7%BA%A6%23) `89.8K 🔥` `NEW`
1. [Ruler预判Q](https://s.weibo.com/weibo?q=%23Ruler%E9%A2%84%E5%88%A4Q%23) `79.0K 🔥` `NEW`
1. [难怪白敬亭印象中宋亚轩很安静](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E7%99%BD%E6%95%AC%E4%BA%AD%E5%8D%B0%E8%B1%A1%E4%B8%AD%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%BE%88%E5%AE%89%E9%9D%99%23) `66.6K 🔥` `NEW`
1. [拒请咖啡取消面试公司已经营异常](https://s.weibo.com/weibo?q=%23%E6%8B%92%E8%AF%B7%E5%92%96%E5%95%A1%E5%8F%96%E6%B6%88%E9%9D%A2%E8%AF%95%E5%85%AC%E5%8F%B8%E5%B7%B2%E7%BB%8F%E8%90%A5%E5%BC%82%E5%B8%B8%23) `66.1K 🔥` `NEW`
1. [台湾彰化24天内4名候选人去世](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%BD%B0%E5%8C%9624%E5%A4%A9%E5%86%854%E5%90%8D%E5%80%99%E9%80%89%E4%BA%BA%E5%8E%BB%E4%B8%96%23) `60.4K 🔥` `NEW`
1. [管泽元](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%23) `59.7K 🔥` `NEW`
1. [爱一个不爱自己的人是僭越](https://s.weibo.com/weibo?q=%23%E7%88%B1%E4%B8%80%E4%B8%AA%E4%B8%8D%E7%88%B1%E8%87%AA%E5%B7%B1%E7%9A%84%E4%BA%BA%E6%98%AF%E5%83%AD%E8%B6%8A%23) `483.7K 🔥` `+687%`
1. [孩子觉得打包丢人被老师扣分引热议](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E8%A7%89%E5%BE%97%E6%89%93%E5%8C%85%E4%B8%A2%E4%BA%BA%E8%A2%AB%E8%80%81%E5%B8%88%E6%89%A3%E5%88%86%E5%BC%95%E7%83%AD%E8%AE%AE%23) `288.2K 🔥` `+285%`
1. [许飞听到不负少年不负卿上热搜的反应](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%90%AC%E5%88%B0%E4%B8%8D%E8%B4%9F%E5%B0%91%E5%B9%B4%E4%B8%8D%E8%B4%9F%E5%8D%BF%E4%B8%8A%E7%83%AD%E6%90%9C%E7%9A%84%E5%8F%8D%E5%BA%94%23) `133.5K 🔥` `+29%`
1. [boss直聘暂停要求带咖啡公司账号权限](https://s.weibo.com/weibo?q=%23boss%E7%9B%B4%E8%81%98%E6%9A%82%E5%81%9C%E8%A6%81%E6%B1%82%E5%B8%A6%E5%92%96%E5%95%A1%E5%85%AC%E5%8F%B8%E8%B4%A6%E5%8F%B7%E6%9D%83%E9%99%90%23) `131.8K 🔥` `+70%`
1. [央视曝光假牛肉案](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E5%81%87%E7%89%9B%E8%82%89%E6%A1%88%23) `120.3K 🔥` `+90%`
1. [曝爱奇艺尖叫之夜座位双C](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%88%B1%E5%A5%87%E8%89%BA%E5%B0%96%E5%8F%AB%E4%B9%8B%E5%A4%9C%E5%BA%A7%E4%BD%8D%E5%8F%8CC%23) `117.4K 🔥` `+70%`
1. [大美妈妈回应](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%BE%8E%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%23) `109.1K 🔥` `+70%`
1. [原来热暴力真的比冷暴力有用](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%83%AD%E6%9A%B4%E5%8A%9B%E7%9C%9F%E7%9A%84%E6%AF%94%E5%86%B7%E6%9A%B4%E5%8A%9B%E6%9C%89%E7%94%A8%23) `105.5K 🔥` `+63%`
1. [中纪委罕见通报高官一把手职权腐败](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BA%AA%E5%A7%94%E7%BD%95%E8%A7%81%E9%80%9A%E6%8A%A5%E9%AB%98%E5%AE%98%E4%B8%80%E6%8A%8A%E6%89%8B%E8%81%8C%E6%9D%83%E8%85%90%E8%B4%A5%23) `104.9K 🔥` `+68%`
1. [为什么说杀人容易藏尸难](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E6%9D%80%E4%BA%BA%E5%AE%B9%E6%98%93%E8%97%8F%E5%B0%B8%E9%9A%BE%23) `104.2K 🔥` `+69%`
1. [这要放十年前谁会觉得假](https://s.weibo.com/weibo?q=%23%E8%BF%99%E8%A6%81%E6%94%BE%E5%8D%81%E5%B9%B4%E5%89%8D%E8%B0%81%E4%BC%9A%E8%A7%89%E5%BE%97%E5%81%87%23) `103.1K 🔥` `+68%`
1. [暖阳夺冠发文](https://s.weibo.com/weibo?q=%23%E6%9A%96%E9%98%B3%E5%A4%BA%E5%86%A0%E5%8F%91%E6%96%87%23) `84.7K 🔥` `+37%`
1. [白鹿带着三个作品走了三次红毯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%B8%A6%E7%9D%80%E4%B8%89%E4%B8%AA%E4%BD%9C%E5%93%81%E8%B5%B0%E4%BA%86%E4%B8%89%E6%AC%A1%E7%BA%A2%E6%AF%AF%23) `78.8K 🔥` `+43%`
1. [吃完鸡爪肚子痛服务区还有二十公里](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%AE%8C%E9%B8%A1%E7%88%AA%E8%82%9A%E5%AD%90%E7%97%9B%E6%9C%8D%E5%8A%A1%E5%8C%BA%E8%BF%98%E6%9C%89%E4%BA%8C%E5%8D%81%E5%85%AC%E9%87%8C%23) `74.3K 🔥` `+21%`
1. [GEN对战BLG](https://s.weibo.com/weibo?q=%23GEN%E5%AF%B9%E6%88%98BLG%23) `1.5M 🔥`
1. [白小纯居然是来报恩的](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%B1%85%E7%84%B6%E6%98%AF%E6%9D%A5%E6%8A%A5%E6%81%A9%E7%9A%84%23) `135.3K 🔥`
1. [王乐乐](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B9%90%E4%B9%90%23) `125.5K 🔥`
1. [曝高迪抖音直播权限被永封](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%AB%98%E8%BF%AA%E6%8A%96%E9%9F%B3%E7%9B%B4%E6%92%AD%E6%9D%83%E9%99%90%E8%A2%AB%E6%B0%B8%E5%B0%81%23) `123.8K 🔥`
1. [男子欠10元10年不还将债主打骨折](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%AC%A010%E5%85%8310%E5%B9%B4%E4%B8%8D%E8%BF%98%E5%B0%86%E5%80%BA%E4%B8%BB%E6%89%93%E9%AA%A8%E6%8A%98%23) `65.6K 🔥`
1. [无畏](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%23) `65.6K 🔥`
1. [厉娜我和雪梨飞雪合一下影](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E6%88%91%E5%92%8C%E9%9B%AA%E6%A2%A8%E9%A3%9E%E9%9B%AA%E5%90%88%E4%B8%80%E4%B8%8B%E5%BD%B1%23) `61.2K 🔥`
1. [S16决赛开幕式](https://s.weibo.com/weibo?q=%23S16%E5%86%B3%E8%B5%9B%E5%BC%80%E5%B9%95%E5%BC%8F%23) `104.8K 🔥` `-70%`

Updated at 2026-11-15 07:28:32

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
