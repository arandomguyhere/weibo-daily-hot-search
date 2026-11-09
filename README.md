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

1. [黄仁勋承认出轨](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E6%89%BF%E8%AE%A4%E5%87%BA%E8%BD%A8%23) `12.3M 🔥` `NEW`
1. [BLG对战T1](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98T1%23) `2.3M 🔥` `NEW`
1. [京东校园之星百万大奖今晚揭晓](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E6%A0%A1%E5%9B%AD%E4%B9%8B%E6%98%9F%E7%99%BE%E4%B8%87%E5%A4%A7%E5%A5%96%E4%BB%8A%E6%99%9A%E6%8F%AD%E6%99%93%23) `1.4M 🔥` `NEW`
1. [白小纯口碑反转](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%8F%A3%E7%A2%91%E5%8F%8D%E8%BD%AC%23) `257.7K 🔥` `NEW`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `227.6K 🔥` `NEW`
1. [热巴住酒店15年的真实原因](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E4%BD%8F%E9%85%92%E5%BA%9715%E5%B9%B4%E7%9A%84%E7%9C%9F%E5%AE%9E%E5%8E%9F%E5%9B%A0%23) `226.0K 🔥` `NEW`
1. [iPhone每年换一次和五年换一次](https://s.weibo.com/weibo?q=%23iPhone%E6%AF%8F%E5%B9%B4%E6%8D%A2%E4%B8%80%E6%AC%A1%E5%92%8C%E4%BA%94%E5%B9%B4%E6%8D%A2%E4%B8%80%E6%AC%A1%23) `200.4K 🔥` `NEW`
1. [金子涵前几天露宿街头](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%89%8D%E5%87%A0%E5%A4%A9%E9%9C%B2%E5%AE%BF%E8%A1%97%E5%A4%B4%23) `200.3K 🔥` `NEW`
1. [BLG一比零T1](https://s.weibo.com/weibo?q=%23BLG%E4%B8%80%E6%AF%94%E9%9B%B6T1%23) `196.2K 🔥` `NEW`
1. [马竞1比2巴萨](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%AB%9E1%E6%AF%942%E5%B7%B4%E8%90%A8%23) `192.9K 🔥` `NEW`
1. [黄仁勋女儿因家庭原因取消韩国行](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%A5%B3%E5%84%BF%E5%9B%A0%E5%AE%B6%E5%BA%AD%E5%8E%9F%E5%9B%A0%E5%8F%96%E6%B6%88%E9%9F%A9%E5%9B%BD%E8%A1%8C%23) `185.3K 🔥` `NEW`
1. [演员王雷跪地庆祝大连英博夺冠](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%8E%8B%E9%9B%B7%E8%B7%AA%E5%9C%B0%E5%BA%86%E7%A5%9D%E5%A4%A7%E8%BF%9E%E8%8B%B1%E5%8D%9A%E5%A4%BA%E5%86%A0%23) `163.3K 🔥` `NEW`
1. [金晨澄清搬家不等于退圈](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E6%BE%84%E6%B8%85%E6%90%AC%E5%AE%B6%E4%B8%8D%E7%AD%89%E4%BA%8E%E9%80%80%E5%9C%88%23) `156.4K 🔥` `NEW`
1. [山姆全球购上架加拿大鹅始祖鸟](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%85%A8%E7%90%83%E8%B4%AD%E4%B8%8A%E6%9E%B6%E5%8A%A0%E6%8B%BF%E5%A4%A7%E9%B9%85%E5%A7%8B%E7%A5%96%E9%B8%9F%23) `156.2K 🔥` `NEW`
1. [徐艺洋跳九万字真的扭到心巴上了](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E8%B7%B3%E4%B9%9D%E4%B8%87%E5%AD%97%E7%9C%9F%E7%9A%84%E6%89%AD%E5%88%B0%E5%BF%83%E5%B7%B4%E4%B8%8A%E4%BA%86%23) `155.6K 🔥` `NEW`
1. [T1的bp](https://s.weibo.com/weibo?q=%23T1%E7%9A%84bp%23) `155.5K 🔥` `NEW`
1. [中国台湾省网友惊叹大陆道路好平](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8F%B0%E6%B9%BE%E7%9C%81%E7%BD%91%E5%8F%8B%E6%83%8A%E5%8F%B9%E5%A4%A7%E9%99%86%E9%81%93%E8%B7%AF%E5%A5%BD%E5%B9%B3%23) `138.6K 🔥` `NEW`
1. [太原起火建筑楼内有酒店培训机构](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E8%B5%B7%E7%81%AB%E5%BB%BA%E7%AD%91%E6%A5%BC%E5%86%85%E6%9C%89%E9%85%92%E5%BA%97%E5%9F%B9%E8%AE%AD%E6%9C%BA%E6%9E%84%23) `126.0K 🔥` `NEW`
1. [睡眠好是三十五岁后的财富](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E7%9C%A0%E5%A5%BD%E6%98%AF%E4%B8%89%E5%8D%81%E4%BA%94%E5%B2%81%E5%90%8E%E7%9A%84%E8%B4%A2%E5%AF%8C%23) `122.7K 🔥` `NEW`
1. [Bin哥大龙战神](https://s.weibo.com/weibo?q=%23Bin%E5%93%A5%E5%A4%A7%E9%BE%99%E6%88%98%E7%A5%9E%23) `107.2K 🔥` `NEW`
1. [Xun连续抢龙](https://s.weibo.com/weibo?q=%23Xun%E8%BF%9E%E7%BB%AD%E6%8A%A2%E9%BE%99%23) `107.0K 🔥` `NEW`
1. [代高政还有七部待播剧](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%AB%98%E6%94%BF%E8%BF%98%E6%9C%89%E4%B8%83%E9%83%A8%E5%BE%85%E6%92%AD%E5%89%A7%23) `106.4K 🔥` `NEW`
1. [所以后会友期能火啊](https://s.weibo.com/weibo?q=%23%E6%89%80%E4%BB%A5%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E8%83%BD%E7%81%AB%E5%95%8A%23) `104.0K 🔥` `NEW`
1. [28岁男子爬山4小时横纹肌溶解](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E7%94%B7%E5%AD%90%E7%88%AC%E5%B1%B14%E5%B0%8F%E6%97%B6%E6%A8%AA%E7%BA%B9%E8%82%8C%E6%BA%B6%E8%A7%A3%23) `85.6K 🔥` `NEW`
1. [早田希娜回应在比赛中记笔记](https://s.weibo.com/weibo?q=%23%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E5%9B%9E%E5%BA%94%E5%9C%A8%E6%AF%94%E8%B5%9B%E4%B8%AD%E8%AE%B0%E7%AC%94%E8%AE%B0%23) `84.2K 🔥` `NEW`
1. [人休息够了包容度会高很多](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%BC%91%E6%81%AF%E5%A4%9F%E4%BA%86%E5%8C%85%E5%AE%B9%E5%BA%A6%E4%BC%9A%E9%AB%98%E5%BE%88%E5%A4%9A%23) `82.2K 🔥` `NEW`
1. [曼联 降级区](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E8%81%94%20%E9%99%8D%E7%BA%A7%E5%8C%BA%23) `79.9K 🔥` `NEW`
1. [中国消费图景向新向优](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B6%88%E8%B4%B9%E5%9B%BE%E6%99%AF%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%23) `1.8M 🔥` `+1319%`
1. [马斯克突爆孙正义猛料](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%AA%81%E7%88%86%E5%AD%99%E6%AD%A3%E4%B9%89%E7%8C%9B%E6%96%99%23) `1.1M 🔥` `+495%`
1. [疑似秦始皇儿子遗骸遭肢解](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%84%BF%E5%AD%90%E9%81%97%E9%AA%B8%E9%81%AD%E8%82%A2%E8%A7%A3%23) `558.6K 🔥` `+126%`
1. [付鹏称AI漫剧全部亏损](https://s.weibo.com/weibo?q=%23%E4%BB%98%E9%B9%8F%E7%A7%B0AI%E6%BC%AB%E5%89%A7%E5%85%A8%E9%83%A8%E4%BA%8F%E6%8D%9F%23) `309.5K 🔥` `+171%`
1. [许飞 我作茧自缚](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%20%E6%88%91%E4%BD%9C%E8%8C%A7%E8%87%AA%E7%BC%9A%23) `305.5K 🔥` `+249%`
1. [早田希娜法兰克福站冠军](https://s.weibo.com/weibo?q=%23%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E6%B3%95%E5%85%B0%E5%85%8B%E7%A6%8F%E7%AB%99%E5%86%A0%E5%86%9B%23) `242.7K 🔥` `+705%`
1. [金子涵被骗](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E8%A2%AB%E9%AA%97%23) `217.6K 🔥` `+158%`
1. [徐艺洋这身材穿个麻袋都好看](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E8%BF%99%E8%BA%AB%E6%9D%90%E7%A9%BF%E4%B8%AA%E9%BA%BB%E8%A2%8B%E9%83%BD%E5%A5%BD%E7%9C%8B%23) `214.6K 🔥` `+163%`
1. [女子查到男友父亲有案底后崩溃](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9F%A5%E5%88%B0%E7%94%B7%E5%8F%8B%E7%88%B6%E4%BA%B2%E6%9C%89%E6%A1%88%E5%BA%95%E5%90%8E%E5%B4%A9%E6%BA%83%23) `207.9K 🔥` `+285%`
1. [蔡少芬一家五口在香港住83平的房子](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%B0%91%E8%8A%AC%E4%B8%80%E5%AE%B6%E4%BA%94%E5%8F%A3%E5%9C%A8%E9%A6%99%E6%B8%AF%E4%BD%8F83%E5%B9%B3%E7%9A%84%E6%88%BF%E5%AD%90%23) `205.3K 🔥` `+273%`
1. [无锡女厕惊现站立式小便厕位](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%94%A1%E5%A5%B3%E5%8E%95%E6%83%8A%E7%8E%B0%E7%AB%99%E7%AB%8B%E5%BC%8F%E5%B0%8F%E4%BE%BF%E5%8E%95%E4%BD%8D%23) `194.3K 🔥` `+430%`
1. [现在的艾滋可不只是通过性传播了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E8%89%BE%E6%BB%8B%E5%8F%AF%E4%B8%8D%E5%8F%AA%E6%98%AF%E9%80%9A%E8%BF%87%E6%80%A7%E4%BC%A0%E6%92%AD%E4%BA%86%23) `190.1K 🔥` `+525%`
1. [外貌是成本极低收益极高的变量](https://s.weibo.com/weibo?q=%23%E5%A4%96%E8%B2%8C%E6%98%AF%E6%88%90%E6%9C%AC%E6%9E%81%E4%BD%8E%E6%94%B6%E7%9B%8A%E6%9E%81%E9%AB%98%E7%9A%84%E5%8F%98%E9%87%8F%23) `187.7K 🔥` `+406%`
1. [发生日快乐才知老同学已离世](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90%E6%89%8D%E7%9F%A5%E8%80%81%E5%90%8C%E5%AD%A6%E5%B7%B2%E7%A6%BB%E4%B8%96%23) `183.7K 🔥` `+192%`
1. [太原火灾送医院救治38人](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E7%81%AB%E7%81%BE%E9%80%81%E5%8C%BB%E9%99%A2%E6%95%91%E6%B2%BB38%E4%BA%BA%23) `162.8K 🔥` `+181%`
1. [曼联4比4阿斯顿维拉](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E8%81%944%E6%AF%944%E9%98%BF%E6%96%AF%E9%A1%BF%E7%BB%B4%E6%8B%89%23) `156.1K 🔥` `+183%`
1. [以色列政坛迎来历史性一刻](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%94%BF%E5%9D%9B%E8%BF%8E%E6%9D%A5%E5%8E%86%E5%8F%B2%E6%80%A7%E4%B8%80%E5%88%BB%23) `155.8K 🔥` `+421%`
1. [中国人心目中天庭的样子火了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%BF%83%E7%9B%AE%E4%B8%AD%E5%A4%A9%E5%BA%AD%E7%9A%84%E6%A0%B7%E5%AD%90%E7%81%AB%E4%BA%86%23) `140.2K 🔥` `+339%`
1. [大连景区对山东人免费](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%BF%9E%E6%99%AF%E5%8C%BA%E5%AF%B9%E5%B1%B1%E4%B8%9C%E4%BA%BA%E5%85%8D%E8%B4%B9%23) `134.4K 🔥` `+325%`
1. [上车前陌生人下车后想娶她](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E8%BD%A6%E5%89%8D%E9%99%8C%E7%94%9F%E4%BA%BA%E4%B8%8B%E8%BD%A6%E5%90%8E%E6%83%B3%E5%A8%B6%E5%A5%B9%23) `123.9K 🔥` `+323%`
1. [陈浩民家保姆工资每月6000多](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%A9%E6%B0%91%E5%AE%B6%E4%BF%9D%E5%A7%86%E5%B7%A5%E8%B5%84%E6%AF%8F%E6%9C%886000%E5%A4%9A%23) `120.4K 🔥` `+123%`
1. [小糯米才12岁](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B3%AF%E7%B1%B3%E6%89%8D12%E5%B2%81%23) `106.1K 🔥` `+135%`
1. [代高政要和闫桉参加后会友期](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%AB%98%E6%94%BF%E8%A6%81%E5%92%8C%E9%97%AB%E6%A1%89%E5%8F%82%E5%8A%A0%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%23) `84.0K 🔥` `+94%`
1. [疑似秦始皇儿子头骨面容复原图](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%84%BF%E5%AD%90%E5%A4%B4%E9%AA%A8%E9%9D%A2%E5%AE%B9%E5%A4%8D%E5%8E%9F%E5%9B%BE%23) `75.7K 🔥` `-87%`

Updated at 2026-11-09 08:00:02

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
