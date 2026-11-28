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

1. [女子将40万黄金放车顶开一路忘拿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%8640%E4%B8%87%E9%BB%84%E9%87%91%E6%94%BE%E8%BD%A6%E9%A1%B6%E5%BC%80%E4%B8%80%E8%B7%AF%E5%BF%98%E6%8B%BF%23) `1.4M 🔥` `NEW`
1. [后会友期未播路透](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E6%9C%AA%E6%92%AD%E8%B7%AF%E9%80%8F%23) `1.0M 🔥` `NEW`
1. [三重变化勾勒消费市场新图景](https://s.weibo.com/weibo?q=%23%E4%B8%89%E9%87%8D%E5%8F%98%E5%8C%96%E5%8B%BE%E5%8B%92%E6%B6%88%E8%B4%B9%E5%B8%82%E5%9C%BA%E6%96%B0%E5%9B%BE%E6%99%AF%23) `1.0M 🔥` `NEW`
1. [夜间买药上淘宝闪购](https://s.weibo.com/weibo?q=%23%E5%A4%9C%E9%97%B4%E4%B9%B0%E8%8D%AF%E4%B8%8A%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%23) `1.0M 🔥` `NEW`
1. [霍启山娜然宣布恋情](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%B1%B1%E5%A8%9C%E7%84%B6%E5%AE%A3%E5%B8%83%E6%81%8B%E6%83%85%23) `1.0M 🔥` `NEW`
1. [全国电视开机率已降至30%](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E7%94%B5%E8%A7%86%E5%BC%80%E6%9C%BA%E7%8E%87%E5%B7%B2%E9%99%8D%E8%87%B330%25%23) `995.3K 🔥` `NEW`
1. [白小纯只记得沙特道歉的原因](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%8F%AA%E8%AE%B0%E5%BE%97%E6%B2%99%E7%89%B9%E9%81%93%E6%AD%89%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `985.0K 🔥` `NEW`
1. [纵横新派越野标配华为乾崑技术](https://s.weibo.com/weibo?q=%23%E7%BA%B5%E6%A8%AA%E6%96%B0%E6%B4%BE%E8%B6%8A%E9%87%8E%E6%A0%87%E9%85%8D%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E6%8A%80%E6%9C%AF%23) `981.8K 🔥` `NEW`
1. [原来孔子不姓孔](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%AD%94%E5%AD%90%E4%B8%8D%E5%A7%93%E5%AD%94%23) `968.4K 🔥` `NEW`
1. [中国首位太空常住户](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A6%96%E4%BD%8D%E5%A4%AA%E7%A9%BA%E5%B8%B8%E4%BD%8F%E6%88%B7%23) `951.3K 🔥` `NEW`
1. [董明珠称骂人并无恶意](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%98%8E%E7%8F%A0%E7%A7%B0%E9%AA%82%E4%BA%BA%E5%B9%B6%E6%97%A0%E6%81%B6%E6%84%8F%23) `945.8K 🔥` `NEW`
1. [两京十五日](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%23) `930.1K 🔥` `NEW`
1. [易烊千玺回复了王俊凯王源](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%9B%9E%E5%A4%8D%E4%BA%86%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8E%8B%E6%BA%90%23) `921.0K 🔥` `NEW`
1. [张凯丽辟谣母亲92岁接受肾移植](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%AF%E4%B8%BD%E8%BE%9F%E8%B0%A3%E6%AF%8D%E4%BA%B292%E5%B2%81%E6%8E%A5%E5%8F%97%E8%82%BE%E7%A7%BB%E6%A4%8D%23) `683.9K 🔥` `NEW`
1. [小米回应电视开机仍有广告](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%9B%9E%E5%BA%94%E7%94%B5%E8%A7%86%E5%BC%80%E6%9C%BA%E4%BB%8D%E6%9C%89%E5%B9%BF%E5%91%8A%23) `573.0K 🔥` `NEW`
1. [厉娜察觉被点煤气灯](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E5%AF%9F%E8%A7%89%E8%A2%AB%E7%82%B9%E7%85%A4%E6%B0%94%E7%81%AF%23) `516.2K 🔥` `NEW`
1. [戚薇林子君 短剧](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E6%9E%97%E5%AD%90%E5%90%9B%20%E7%9F%AD%E5%89%A7%23) `509.9K 🔥` `NEW`
1. [成毅听到两京十五日破万的反应](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E5%90%AC%E5%88%B0%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E7%A0%B4%E4%B8%87%E7%9A%84%E5%8F%8D%E5%BA%94%23) `347.7K 🔥` `NEW`
1. [白小纯的19岁好苦](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%9A%8419%E5%B2%81%E5%A5%BD%E8%8B%A6%23) `338.4K 🔥` `NEW`
1. [穆祉丞王子礼](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%8E%8B%E5%AD%90%E7%A4%BC%23) `332.0K 🔥` `NEW`
1. [河南女子结婚10年从没自己买过衣服](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%A5%B3%E5%AD%90%E7%BB%93%E5%A9%9A10%E5%B9%B4%E4%BB%8E%E6%B2%A1%E8%87%AA%E5%B7%B1%E4%B9%B0%E8%BF%87%E8%A1%A3%E6%9C%8D%23) `324.3K 🔥` `NEW`
1. [大额存单10万元就能买了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%A2%9D%E5%AD%98%E5%8D%9510%E4%B8%87%E5%85%83%E5%B0%B1%E8%83%BD%E4%B9%B0%E4%BA%86%23) `314.7K 🔥` `NEW`
1. [食品饮料为啥不印生产日期了](https://s.weibo.com/weibo?q=%23%E9%A3%9F%E5%93%81%E9%A5%AE%E6%96%99%E4%B8%BA%E5%95%A5%E4%B8%8D%E5%8D%B0%E7%94%9F%E4%BA%A7%E6%97%A5%E6%9C%9F%E4%BA%86%23) `299.3K 🔥` `NEW`
1. [南京一餐厅传单贴5元现金拉客](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E4%B8%80%E9%A4%90%E5%8E%85%E4%BC%A0%E5%8D%95%E8%B4%B45%E5%85%83%E7%8E%B0%E9%87%91%E6%8B%89%E5%AE%A2%23) `297.0K 🔥` `NEW`
1. [许飞朋友和厉娜朋友发言对比](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E6%9C%8B%E5%8F%8B%E5%92%8C%E5%8E%89%E5%A8%9C%E6%9C%8B%E5%8F%8B%E5%8F%91%E8%A8%80%E5%AF%B9%E6%AF%94%23) `285.4K 🔥` `NEW`
1. [芒果要做浪妹了](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E8%A6%81%E5%81%9A%E6%B5%AA%E5%A6%B9%E4%BA%86%23) `277.1K 🔥` `NEW`
1. [结婚千万不能找同村的](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E5%8D%83%E4%B8%87%E4%B8%8D%E8%83%BD%E6%89%BE%E5%90%8C%E6%9D%91%E7%9A%84%23) `269.0K 🔥` `NEW`
1. [为什么很少看到青海IP](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%88%E5%B0%91%E7%9C%8B%E5%88%B0%E9%9D%92%E6%B5%B7IP%23) `259.7K 🔥` `NEW`
1. [杨紫刘涛同框梦回欢乐颂](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%88%98%E6%B6%9B%E5%90%8C%E6%A1%86%E6%A2%A6%E5%9B%9E%E6%AC%A2%E4%B9%90%E9%A2%82%23) `253.3K 🔥` `NEW`
1. [刘力扬也去了许飞演唱会](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%8A%9B%E6%89%AC%E4%B9%9F%E5%8E%BB%E4%BA%86%E8%AE%B8%E9%A3%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `252.3K 🔥` `NEW`
1. [林孝埈年度全球瞩目体育人物](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E5%B9%B4%E5%BA%A6%E5%85%A8%E7%90%83%E7%9E%A9%E7%9B%AE%E4%BD%93%E8%82%B2%E4%BA%BA%E7%89%A9%23) `242.4K 🔥` `NEW`
1. [微博国际文化交流之夜](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E5%9B%BD%E9%99%85%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81%E4%B9%8B%E5%A4%9C%23) `242.4K 🔥` `NEW`
1. [青稚以为挡住了密码结果输入法暴露了](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E4%BB%A5%E4%B8%BA%E6%8C%A1%E4%BD%8F%E4%BA%86%E5%AF%86%E7%A0%81%E7%BB%93%E6%9E%9C%E8%BE%93%E5%85%A5%E6%B3%95%E6%9A%B4%E9%9C%B2%E4%BA%86%23) `240.5K 🔥` `NEW`
1. [张伟丽公主抱白鹿](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BC%9F%E4%B8%BD%E5%85%AC%E4%B8%BB%E6%8A%B1%E7%99%BD%E9%B9%BF%23) `237.6K 🔥` `NEW`
1. [178万买房次日得知拆迁买方发声](https://s.weibo.com/weibo?q=%23178%E4%B8%87%E4%B9%B0%E6%88%BF%E6%AC%A1%E6%97%A5%E5%BE%97%E7%9F%A5%E6%8B%86%E8%BF%81%E4%B9%B0%E6%96%B9%E5%8F%91%E5%A3%B0%23) `236.8K 🔥` `NEW`
1. [刘美含离开天娱是因为年收入不满12万](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BE%8E%E5%90%AB%E7%A6%BB%E5%BC%80%E5%A4%A9%E5%A8%B1%E6%98%AF%E5%9B%A0%E4%B8%BA%E5%B9%B4%E6%94%B6%E5%85%A5%E4%B8%8D%E6%BB%A112%E4%B8%87%23) `235.7K 🔥` `NEW`
1. [李思潼获金狮大赏影后](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%80%9D%E6%BD%BC%E8%8E%B7%E9%87%91%E7%8B%AE%E5%A4%A7%E8%B5%8F%E5%BD%B1%E5%90%8E%23) `228.7K 🔥` `NEW`
1. [大额存单新规2027年3月起施行](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%A2%9D%E5%AD%98%E5%8D%95%E6%96%B0%E8%A7%842027%E5%B9%B43%E6%9C%88%E8%B5%B7%E6%96%BD%E8%A1%8C%23) `224.8K 🔥` `NEW`
1. [曾艳芬删黄婷婷微信](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%89%B3%E8%8A%AC%E5%88%A0%E9%BB%84%E5%A9%B7%E5%A9%B7%E5%BE%AE%E4%BF%A1%23) `224.3K 🔥` `NEW`
1. [两京十五日热度破万](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E7%83%AD%E5%BA%A6%E7%A0%B4%E4%B8%87%23) `222.5K 🔥` `NEW`
1. [戚薇和李承铉真的好有前瞻性](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E5%92%8C%E6%9D%8E%E6%89%BF%E9%93%89%E7%9C%9F%E7%9A%84%E5%A5%BD%E6%9C%89%E5%89%8D%E7%9E%BB%E6%80%A7%23) `220.5K 🔥` `NEW`
1. [恋与制作人九周年直播](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E5%88%B6%E4%BD%9C%E4%BA%BA%E4%B9%9D%E5%91%A8%E5%B9%B4%E7%9B%B4%E6%92%AD%23) `211.0K 🔥` `NEW`
1. [作品是杨紫最硬气的名片](https://s.weibo.com/weibo?q=%23%E4%BD%9C%E5%93%81%E6%98%AF%E6%9D%A8%E7%B4%AB%E6%9C%80%E7%A1%AC%E6%B0%94%E7%9A%84%E5%90%8D%E7%89%87%23) `200.1K 🔥` `NEW`
1. [檀健次金狮大赏影帝](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E9%87%91%E7%8B%AE%E5%A4%A7%E8%B5%8F%E5%BD%B1%E5%B8%9D%23) `193.0K 🔥` `NEW`
1. [蔡徐坤香港演唱会](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E9%A6%99%E6%B8%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `170.6K 🔥` `NEW`
1. [杨幂又捡猫了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%8F%88%E6%8D%A1%E7%8C%AB%E4%BA%86%23) `167.5K 🔥` `NEW`
1. [看见IP那一刻我喷了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E8%A7%81IP%E9%82%A3%E4%B8%80%E5%88%BB%E6%88%91%E5%96%B7%E4%BA%86%23) `167.2K 🔥` `NEW`
1. [千万别乱坐外面的椅子](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E5%88%AB%E4%B9%B1%E5%9D%90%E5%A4%96%E9%9D%A2%E7%9A%84%E6%A4%85%E5%AD%90%23) `167.0K 🔥` `NEW`
1. [华为 行芯科技](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%20%E8%A1%8C%E8%8A%AF%E7%A7%91%E6%8A%80%23) `166.6K 🔥` `NEW`
1. [Tarzan AL](https://s.weibo.com/weibo?q=%23Tarzan%20AL%23) `165.9K 🔥` `NEW`
1. [张函瑞跟王橹杰吵架了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E8%B7%9F%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%90%B5%E6%9E%B6%E4%BA%86%23) `165.9K 🔥` `NEW`
1. [伊朗14岁女子产后10天被丈夫打死](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%9714%E5%B2%81%E5%A5%B3%E5%AD%90%E4%BA%A7%E5%90%8E10%E5%A4%A9%E8%A2%AB%E4%B8%88%E5%A4%AB%E6%89%93%E6%AD%BB%23) `165.9K 🔥` `NEW`

Updated at 2026-11-28 21:41:32

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
