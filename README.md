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

1. [豆包每天收入不足百万 (Doubao’s daily income is less than one million)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%AF%8F%E5%A4%A9%E6%94%B6%E5%85%A5%E4%B8%8D%E8%B6%B3%E7%99%BE%E4%B8%87%23) `805.3K 🔥` `NEW`
1. [马宁世界杯工资](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B7%A5%E8%B5%84%23) `623.4K 🔥` `NEW`
1. [开局之年看中国奋进陕西谱新篇](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%80%E4%B9%8B%E5%B9%B4%E7%9C%8B%E4%B8%AD%E5%9B%BD%E5%A5%8B%E8%BF%9B%E9%99%95%E8%A5%BF%E8%B0%B1%E6%96%B0%E7%AF%87%23) `422.9K 🔥` `NEW`
1. [C罗的身材绝对不是P的](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%9A%84%E8%BA%AB%E6%9D%90%E7%BB%9D%E5%AF%B9%E4%B8%8D%E6%98%AFP%E7%9A%84%23) `413.6K 🔥` `NEW`
1. [美联储](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%23) `397.4K 🔥` `NEW`
1. [男子与15岁女孩发生冲突被行拘5日](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8E15%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%8F%91%E7%94%9F%E5%86%B2%E7%AA%81%E8%A2%AB%E8%A1%8C%E6%8B%985%E6%97%A5%23) `286.9K 🔥` `NEW`
1. [C罗确定首发出战](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%A1%AE%E5%AE%9A%E9%A6%96%E5%8F%91%E5%87%BA%E6%88%98%23) `282.2K 🔥` `NEW`
1. [葡萄牙vs民主刚果](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99vs%E6%B0%91%E4%B8%BB%E5%88%9A%E6%9E%9C%23) `256.1K 🔥` `NEW`
1. [王安宇李昀锐笑妃给哭妃包场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E6%9D%8E%E6%98%80%E9%94%90%E7%AC%91%E5%A6%83%E7%BB%99%E5%93%AD%E5%A6%83%E5%8C%85%E5%9C%BA%23) `239.8K 🔥` `NEW`
1. [浪姐五公双人舞台歌单](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BA%94%E5%85%AC%E5%8F%8C%E4%BA%BA%E8%88%9E%E5%8F%B0%E6%AD%8C%E5%8D%95%23) `224.3K 🔥` `NEW`
1. [C罗为儿子庆生 (Cristiano Ronaldo celebrates son’s birthday)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B8%BA%E5%84%BF%E5%AD%90%E5%BA%86%E7%94%9F%23) `220.7K 🔥` `NEW`
1. [疑似易梦玲脸上做了线雕](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%98%93%E6%A2%A6%E7%8E%B2%E8%84%B8%E4%B8%8A%E5%81%9A%E4%BA%86%E7%BA%BF%E9%9B%95%23) `219.2K 🔥` `NEW`
1. [马宁主哨世界杯](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E4%B8%BB%E5%93%A8%E4%B8%96%E7%95%8C%E6%9D%AF%23) `215.1K 🔥` `NEW`
1. [方圆撞脸angelababy](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E6%92%9E%E8%84%B8angelababy%23) `211.2K 🔥` `NEW`
1. [欧阳娜娜美商](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E7%BE%8E%E5%95%86%23) `206.9K 🔥` `NEW`
1. [外卖餐食中有血迹顾客紧急服阻断药](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E9%A4%90%E9%A3%9F%E4%B8%AD%E6%9C%89%E8%A1%80%E8%BF%B9%E9%A1%BE%E5%AE%A2%E7%B4%A7%E6%80%A5%E6%9C%8D%E9%98%BB%E6%96%AD%E8%8D%AF%23) `205.5K 🔥` `NEW`
1. [刘诗诗刘亦菲活动生图](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E5%88%98%E4%BA%A6%E8%8F%B2%E6%B4%BB%E5%8A%A8%E7%94%9F%E5%9B%BE%23) `202.1K 🔥` `NEW`
1. [李一桐被SM星探两次挑中颜值](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E8%A2%ABSM%E6%98%9F%E6%8E%A2%E4%B8%A4%E6%AC%A1%E6%8C%91%E4%B8%AD%E9%A2%9C%E5%80%BC%23) `200.2K 🔥` `NEW`
1. [比亚迪大唐23.99万起上市](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%A4%A7%E5%94%9023.99%E4%B8%87%E8%B5%B7%E4%B8%8A%E5%B8%82%23) `197.3K 🔥` `NEW`
1. [胡歌 我不配](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%20%E6%88%91%E4%B8%8D%E9%85%8D%23) `196.9K 🔥` `NEW`
1. [曝霍启山和娜然要结婚了 (It is revealed that Huo Qishan and Naran are getting married)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9C%8D%E5%90%AF%E5%B1%B1%E5%92%8C%E5%A8%9C%E7%84%B6%E8%A6%81%E7%BB%93%E5%A9%9A%E4%BA%86%23) `196.9K 🔥` `NEW`
1. [宝妈带1岁娃饭店避雨遭拼命驱赶](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E5%B8%A61%E5%B2%81%E5%A8%83%E9%A5%AD%E5%BA%97%E9%81%BF%E9%9B%A8%E9%81%AD%E6%8B%BC%E5%91%BD%E9%A9%B1%E8%B5%B6%23) `196.7K 🔥` `NEW`
1. [刘亦菲陈伟霆打招呼合影](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E9%99%88%E4%BC%9F%E9%9C%86%E6%89%93%E6%8B%9B%E5%91%BC%E5%90%88%E5%BD%B1%23) `194.5K 🔥` `NEW`
1. [去大医院看病总有种无力感](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%A4%A7%E5%8C%BB%E9%99%A2%E7%9C%8B%E7%97%85%E6%80%BB%E6%9C%89%E7%A7%8D%E6%97%A0%E5%8A%9B%E6%84%9F%23) `187.5K 🔥` `NEW`
1. [KSG战胜狼队](https://s.weibo.com/weibo?q=%23KSG%E6%88%98%E8%83%9C%E7%8B%BC%E9%98%9F%23) `184.7K 🔥` `NEW`
1. [霍启山娜然感情时间线](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%B1%B1%E5%A8%9C%E7%84%B6%E6%84%9F%E6%83%85%E6%97%B6%E9%97%B4%E7%BA%BF%23) `164.3K 🔥` `NEW`
1. [抓特务](https://s.weibo.com/weibo?q=%23%E6%8A%93%E7%89%B9%E5%8A%A1%23) `126.2K 🔥` `NEW`
1. [特朗普G7峰会迟到后宣告我是老大](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AEG7%E5%B3%B0%E4%BC%9A%E8%BF%9F%E5%88%B0%E5%90%8E%E5%AE%A3%E5%91%8A%E6%88%91%E6%98%AF%E8%80%81%E5%A4%A7%23) `125.3K 🔥` `NEW`
1. [归鸾领衔主演张家玮费霞](https://s.weibo.com/weibo?q=%23%E5%BD%92%E9%B8%BE%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E5%BC%A0%E5%AE%B6%E7%8E%AE%E8%B4%B9%E9%9C%9E%23) `124.5K 🔥` `NEW`
1. [塔克拉玛干沙漠长出蘑菇了](https://s.weibo.com/weibo?q=%23%E5%A1%94%E5%85%8B%E6%8B%89%E7%8E%9B%E5%B9%B2%E6%B2%99%E6%BC%A0%E9%95%BF%E5%87%BA%E8%98%91%E8%8F%87%E4%BA%86%23) `124.2K 🔥` `NEW`
1. [吴倩回应花期过了 (Wu Qian responded that the flowering period has passed)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%80%A9%E5%9B%9E%E5%BA%94%E8%8A%B1%E6%9C%9F%E8%BF%87%E4%BA%86%23) `123.6K 🔥` `NEW`
1. [妻子回应强留脑死亡丈夫被质疑](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%E5%BC%BA%E7%95%99%E8%84%91%E6%AD%BB%E4%BA%A1%E4%B8%88%E5%A4%AB%E8%A2%AB%E8%B4%A8%E7%96%91%23) `123.3K 🔥` `NEW`
1. [武艺爸爸把音乐学院的名额让给孙浩](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E8%89%BA%E7%88%B8%E7%88%B8%E6%8A%8A%E9%9F%B3%E4%B9%90%E5%AD%A6%E9%99%A2%E7%9A%84%E5%90%8D%E9%A2%9D%E8%AE%A9%E7%BB%99%E5%AD%99%E6%B5%A9%23) `122.9K 🔥` `NEW`
1. [微信支付宝打响AI支付战](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%94%AF%E4%BB%98%E5%AE%9D%E6%89%93%E5%93%8DAI%E6%94%AF%E4%BB%98%E6%88%98%23) `122.3K 🔥` `NEW`
1. [卸了马桶才取出卡住的死鱼](https://s.weibo.com/weibo?q=%23%E5%8D%B8%E4%BA%86%E9%A9%AC%E6%A1%B6%E6%89%8D%E5%8F%96%E5%87%BA%E5%8D%A1%E4%BD%8F%E7%9A%84%E6%AD%BB%E9%B1%BC%23) `121.9K 🔥` `NEW`
1. [贝克汉姆回应梅西帽子戏法](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E5%9B%9E%E5%BA%94%E6%A2%85%E8%A5%BF%E5%B8%BD%E5%AD%90%E6%88%8F%E6%B3%95%23) `121.5K 🔥` `NEW`
1. [已婚男女打工相识同居15年获刑](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E5%A9%9A%E7%94%B7%E5%A5%B3%E6%89%93%E5%B7%A5%E7%9B%B8%E8%AF%86%E5%90%8C%E5%B1%8515%E5%B9%B4%E8%8E%B7%E5%88%91%23) `121.1K 🔥` `NEW`
1. [台媒喊话希望迪丽热巴去台湾](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E5%AA%92%E5%96%8A%E8%AF%9D%E5%B8%8C%E6%9C%9B%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8E%BB%E5%8F%B0%E6%B9%BE%23) `120.9K 🔥` `NEW`
1. [阿根廷球迷今天全体计划有变](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E8%BF%B7%E4%BB%8A%E5%A4%A9%E5%85%A8%E4%BD%93%E8%AE%A1%E5%88%92%E6%9C%89%E5%8F%98%23) `115.8K 🔥` `NEW`
1. [李连杰曾回应为何不帮谢苗传闻](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%BF%9E%E6%9D%B0%E6%9B%BE%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BD%95%E4%B8%8D%E5%B8%AE%E8%B0%A2%E8%8B%97%E4%BC%A0%E9%97%BB%23) `111.9K 🔥` `NEW`
1. [穆祉丞高会 (Mu Zhicheng Gaohui)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E9%AB%98%E4%BC%9A%23) `109.5K 🔥` `NEW`
1. [天天来吃面的顾客1天没来店主报警](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%A4%A9%E6%9D%A5%E5%90%83%E9%9D%A2%E7%9A%84%E9%A1%BE%E5%AE%A21%E5%A4%A9%E6%B2%A1%E6%9D%A5%E5%BA%97%E4%B8%BB%E6%8A%A5%E8%AD%A6%23) `102.8K 🔥` `NEW`
1. [炽夏 女主骑电动车救男主](https://s.weibo.com/weibo?q=%23%E7%82%BD%E5%A4%8F%20%E5%A5%B3%E4%B8%BB%E9%AA%91%E7%94%B5%E5%8A%A8%E8%BD%A6%E6%95%91%E7%94%B7%E4%B8%BB%23) `98.6K 🔥` `NEW`
1. [林允痛失艺名](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%85%81%E7%97%9B%E5%A4%B1%E8%89%BA%E5%90%8D%23) `93.1K 🔥` `NEW`
1. [富豪伪造8亿存款中标35亿元工程](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E8%B1%AA%E4%BC%AA%E9%80%A08%E4%BA%BF%E5%AD%98%E6%AC%BE%E4%B8%AD%E6%A0%8735%E4%BA%BF%E5%85%83%E5%B7%A5%E7%A8%8B%23) `83.8K 🔥` `NEW`
1. [现在买车增程还是纯电](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E4%B9%B0%E8%BD%A6%E5%A2%9E%E7%A8%8B%E8%BF%98%E6%98%AF%E7%BA%AF%E7%94%B5%23) `81.9K 🔥` `NEW`
1. [哈兰德特殊饮食需求曝光](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E7%89%B9%E6%AE%8A%E9%A5%AE%E9%A3%9F%E9%9C%80%E6%B1%82%E6%9B%9D%E5%85%89%23) `80.7K 🔥` `NEW`
1. [南部档案](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%23) `80.0K 🔥` `NEW`
1. [中国缅甸联合声明](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BC%85%E7%94%B8%E8%81%94%E5%90%88%E5%A3%B0%E6%98%8E%23) `76.1K 🔥` `NEW`

Updated at 2026-06-18 00:51:13

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
