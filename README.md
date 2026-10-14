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

1. [绿泡泡对标红果](https://s.weibo.com/weibo?q=%23%E7%BB%BF%E6%B3%A1%E6%B3%A1%E5%AF%B9%E6%A0%87%E7%BA%A2%E6%9E%9C%23) `1.4M 🔥` `NEW`
1. [香港周生生发生珠宝劫案](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%91%A8%E7%94%9F%E7%94%9F%E5%8F%91%E7%94%9F%E7%8F%A0%E5%AE%9D%E5%8A%AB%E6%A1%88%23) `897.4K 🔥` `NEW`
1. [全国秋粮收获进入高峰期](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E7%A7%8B%E7%B2%AE%E6%94%B6%E8%8E%B7%E8%BF%9B%E5%85%A5%E9%AB%98%E5%B3%B0%E6%9C%9F%23) `683.2K 🔥` `NEW`
1. [胡杏儿为一家五口选择奕境X9](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%9D%8F%E5%84%BF%E4%B8%BA%E4%B8%80%E5%AE%B6%E4%BA%94%E5%8F%A3%E9%80%89%E6%8B%A9%E5%A5%95%E5%A2%83X9%23) `450.3K 🔥` `NEW`
1. [霸王茶姬格局](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E6%A0%BC%E5%B1%80%23) `376.7K 🔥` `NEW`
1. [国内不起眼的东西竟在非洲火了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E4%B8%8D%E8%B5%B7%E7%9C%BC%E7%9A%84%E4%B8%9C%E8%A5%BF%E7%AB%9F%E5%9C%A8%E9%9D%9E%E6%B4%B2%E7%81%AB%E4%BA%86%23) `365.5K 🔥` `NEW`
1. [原来这才是正确的消费观](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E6%89%8D%E6%98%AF%E6%AD%A3%E7%A1%AE%E7%9A%84%E6%B6%88%E8%B4%B9%E8%A7%82%23) `359.8K 🔥` `NEW`
1. [25岁韩国女网红参加半马猝死](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E9%9F%A9%E5%9B%BD%E5%A5%B3%E7%BD%91%E7%BA%A2%E5%8F%82%E5%8A%A0%E5%8D%8A%E9%A9%AC%E7%8C%9D%E6%AD%BB%23) `358.3K 🔥` `NEW`
1. [G社宣布破产重组](https://s.weibo.com/weibo?q=%23G%E7%A4%BE%E5%AE%A3%E5%B8%83%E7%A0%B4%E4%BA%A7%E9%87%8D%E7%BB%84%23) `354.4K 🔥` `NEW`
1. [陈小春失散多年的弟弟](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E5%A4%B1%E6%95%A3%E5%A4%9A%E5%B9%B4%E7%9A%84%E5%BC%9F%E5%BC%9F%23) `345.8K 🔥` `NEW`
1. [胡先煦 刁卓](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%20%E5%88%81%E5%8D%93%23) `342.4K 🔥` `NEW`
1. [教师被迫耻辱合影教体局局长已调离](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E8%A2%AB%E8%BF%AB%E8%80%BB%E8%BE%B1%E5%90%88%E5%BD%B1%E6%95%99%E4%BD%93%E5%B1%80%E5%B1%80%E9%95%BF%E5%B7%B2%E8%B0%83%E7%A6%BB%23) `336.8K 🔥` `NEW`
1. [百日宴孩子母亲道歉](https://s.weibo.com/weibo?q=%23%E7%99%BE%E6%97%A5%E5%AE%B4%E5%AD%A9%E5%AD%90%E6%AF%8D%E4%BA%B2%E9%81%93%E6%AD%89%23) `331.5K 🔥` `NEW`
1. [黄霄雲 钟意](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%9C%84%E9%9B%B2%20%E9%92%9F%E6%84%8F%23) `329.5K 🔥` `NEW`
1. [陈小春弟弟曾被卖了3000块钱](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E5%BC%9F%E5%BC%9F%E6%9B%BE%E8%A2%AB%E5%8D%96%E4%BA%863000%E5%9D%97%E9%92%B1%23) `324.0K 🔥` `NEW`
1. [高铁文明不能只靠乘客站出来](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E6%96%87%E6%98%8E%E4%B8%8D%E8%83%BD%E5%8F%AA%E9%9D%A0%E4%B9%98%E5%AE%A2%E7%AB%99%E5%87%BA%E6%9D%A5%23) `320.6K 🔥` `NEW`
1. [郑钦文说终于脱离了黄毛](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%AF%B4%E7%BB%88%E4%BA%8E%E8%84%B1%E7%A6%BB%E4%BA%86%E9%BB%84%E6%AF%9B%23) `316.4K 🔥` `NEW`
1. [贾静雯证实女儿恋情](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E9%9D%99%E9%9B%AF%E8%AF%81%E5%AE%9E%E5%A5%B3%E5%84%BF%E6%81%8B%E6%83%85%23) `309.9K 🔥` `NEW`
1. [玉簟秋这是不是太隐晦了](https://s.weibo.com/weibo?q=%23%E7%8E%89%E7%B0%9F%E7%A7%8B%E8%BF%99%E6%98%AF%E4%B8%8D%E6%98%AF%E5%A4%AA%E9%9A%90%E6%99%A6%E4%BA%86%23) `307.1K 🔥` `NEW`
1. [人民锐评高铁免提通话](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E9%94%90%E8%AF%84%E9%AB%98%E9%93%81%E5%85%8D%E6%8F%90%E9%80%9A%E8%AF%9D%23) `304.5K 🔥` `NEW`
1. [辛芷蕾 金鸡奖](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%20%E9%87%91%E9%B8%A1%E5%A5%96%23) `299.6K 🔥` `NEW`
1. [曝芭莎VOGUE嘉宾阵容](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%8A%AD%E8%8E%8EVOGUE%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `297.2K 🔥` `NEW`
1. [JDG战胜RW](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9CRW%23) `266.9K 🔥` `NEW`
1. [闽南一00后选009做顶配嫁妆](https://s.weibo.com/weibo?q=%23%E9%97%BD%E5%8D%97%E4%B8%8000%E5%90%8E%E9%80%89009%E5%81%9A%E9%A1%B6%E9%85%8D%E5%AB%81%E5%A6%86%23) `263.8K 🔥` `NEW`
1. [贾静雯自嘲未婚先孕](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E9%9D%99%E9%9B%AF%E8%87%AA%E5%98%B2%E6%9C%AA%E5%A9%9A%E5%85%88%E5%AD%95%23) `258.7K 🔥` `NEW`
1. [苏州最长寿的老人116岁了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E5%B7%9E%E6%9C%80%E9%95%BF%E5%AF%BF%E7%9A%84%E8%80%81%E4%BA%BA116%E5%B2%81%E4%BA%86%23) `258.0K 🔥` `NEW`
1. [霸王茶姬向用户补发买一送一券](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E5%90%91%E7%94%A8%E6%88%B7%E8%A1%A5%E5%8F%91%E4%B9%B0%E4%B8%80%E9%80%81%E4%B8%80%E5%88%B8%23) `255.4K 🔥` `NEW`
1. [多地组织筛查干部档案](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E7%BB%84%E7%BB%87%E7%AD%9B%E6%9F%A5%E5%B9%B2%E9%83%A8%E6%A1%A3%E6%A1%88%23) `224.5K 🔥` `NEW`
1. [黄霄雲辟谣与钟意恋情](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%9C%84%E9%9B%B2%E8%BE%9F%E8%B0%A3%E4%B8%8E%E9%92%9F%E6%84%8F%E6%81%8B%E6%83%85%23) `220.5K 🔥` `NEW`
1. [宋亚轩现在就出发4录制](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%E5%BD%95%E5%88%B6%23) `209.1K 🔥` `NEW`
1. [性格好容易吸引毒性人格纠缠](https://s.weibo.com/weibo?q=%23%E6%80%A7%E6%A0%BC%E5%A5%BD%E5%AE%B9%E6%98%93%E5%90%B8%E5%BC%95%E6%AF%92%E6%80%A7%E4%BA%BA%E6%A0%BC%E7%BA%A0%E7%BC%A0%23) `199.7K 🔥` `NEW`
1. [超长蛋挞没下手1米钙奶饼干我真买](https://s.weibo.com/weibo?q=%23%E8%B6%85%E9%95%BF%E8%9B%8B%E6%8C%9E%E6%B2%A1%E4%B8%8B%E6%89%8B1%E7%B1%B3%E9%92%99%E5%A5%B6%E9%A5%BC%E5%B9%B2%E6%88%91%E7%9C%9F%E4%B9%B0%23) `198.6K 🔥` `NEW`
1. [突然发现大家的消费思路好清晰](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E5%A4%A7%E5%AE%B6%E7%9A%84%E6%B6%88%E8%B4%B9%E6%80%9D%E8%B7%AF%E5%A5%BD%E6%B8%85%E6%99%B0%23) `194.4K 🔥` `NEW`
1. [中朝新鸭绿江大桥](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%9C%9D%E6%96%B0%E9%B8%AD%E7%BB%BF%E6%B1%9F%E5%A4%A7%E6%A1%A5%23) `189.4K 🔥` `NEW`
1. [日本称第三国进入争议岛屿不可接受](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%A7%B0%E7%AC%AC%E4%B8%89%E5%9B%BD%E8%BF%9B%E5%85%A5%E4%BA%89%E8%AE%AE%E5%B2%9B%E5%B1%BF%E4%B8%8D%E5%8F%AF%E6%8E%A5%E5%8F%97%23) `186.3K 🔥` `NEW`
1. [美人余诈骗式营销](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BA%BA%E4%BD%99%E8%AF%88%E9%AA%97%E5%BC%8F%E8%90%A5%E9%94%80%23) `170.0K 🔥` `NEW`
1. [王玉雯靠拼豆实现饰品自由](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E9%9D%A0%E6%8B%BC%E8%B1%86%E5%AE%9E%E7%8E%B0%E9%A5%B0%E5%93%81%E8%87%AA%E7%94%B1%23) `161.2K 🔥` `NEW`
1. [第一个这样给手机散热的人是天才](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E8%BF%99%E6%A0%B7%E7%BB%99%E6%89%8B%E6%9C%BA%E6%95%A3%E7%83%AD%E7%9A%84%E4%BA%BA%E6%98%AF%E5%A4%A9%E6%89%8D%23) `153.4K 🔥` `NEW`
1. [小甜水要涨价了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%94%9C%E6%B0%B4%E8%A6%81%E6%B6%A8%E4%BB%B7%E4%BA%86%23) `150.1K 🔥` `NEW`
1. [孙颖莎担任省运会第六棒火炬手](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%8B%85%E4%BB%BB%E7%9C%81%E8%BF%90%E4%BC%9A%E7%AC%AC%E5%85%AD%E6%A3%92%E7%81%AB%E7%82%AC%E6%89%8B%23) `143.2K 🔥` `NEW`
1. [张继科退役原因是不想迎合别人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E9%80%80%E5%BD%B9%E5%8E%9F%E5%9B%A0%E6%98%AF%E4%B8%8D%E6%83%B3%E8%BF%8E%E5%90%88%E5%88%AB%E4%BA%BA%23) `139.9K 🔥` `NEW`
1. [原来爱情公寓还有我没看过的剧情](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E8%BF%98%E6%9C%89%E6%88%91%E6%B2%A1%E7%9C%8B%E8%BF%87%E7%9A%84%E5%89%A7%E6%83%85%23) `133.4K 🔥` `NEW`
1. [李秀满女团反响最好的三位](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%A7%80%E6%BB%A1%E5%A5%B3%E5%9B%A2%E5%8F%8D%E5%93%8D%E6%9C%80%E5%A5%BD%E7%9A%84%E4%B8%89%E4%BD%8D%23) `130.6K 🔥` `NEW`
1. [JDG首个晋级年总淘汰赛](https://s.weibo.com/weibo?q=%23JDG%E9%A6%96%E4%B8%AA%E6%99%8B%E7%BA%A7%E5%B9%B4%E6%80%BB%E6%B7%98%E6%B1%B0%E8%B5%9B%23) `129.6K 🔥` `NEW`
1. [A2OLITE新歌Melon曲线第一](https://s.weibo.com/weibo?q=%23A2OLITE%E6%96%B0%E6%AD%8CMelon%E6%9B%B2%E7%BA%BF%E7%AC%AC%E4%B8%80%23) `121.5K 🔥` `NEW`
1. [百日宴女方曝与男方婚礼前还在同居](https://s.weibo.com/weibo?q=%23%E7%99%BE%E6%97%A5%E5%AE%B4%E5%A5%B3%E6%96%B9%E6%9B%9D%E4%B8%8E%E7%94%B7%E6%96%B9%E5%A9%9A%E7%A4%BC%E5%89%8D%E8%BF%98%E5%9C%A8%E5%90%8C%E5%B1%85%23) `120.4K 🔥` `NEW`
1. [郭涵煜2比1沃雷涅茨](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%B6%B5%E7%85%9C2%E6%AF%941%E6%B2%83%E9%9B%B7%E6%B6%85%E8%8C%A8%23) `118.3K 🔥` `NEW`
1. [官方通报女子高铁和男友开免提通话](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E9%AB%98%E9%93%81%E5%92%8C%E7%94%B7%E5%8F%8B%E5%BC%80%E5%85%8D%E6%8F%90%E9%80%9A%E8%AF%9D%23) `349.9K 🔥`
1. [金晨自曝刚交完学费学校倒闭了](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E8%87%AA%E6%9B%9D%E5%88%9A%E4%BA%A4%E5%AE%8C%E5%AD%A6%E8%B4%B9%E5%AD%A6%E6%A0%A1%E5%80%92%E9%97%AD%E4%BA%86%23) `195.7K 🔥` `-52%`

Updated at 2026-10-14 20:05:57

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
