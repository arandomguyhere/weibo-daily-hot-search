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

1. [小米发布会 (Xiaomi press conference)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%8F%91%E5%B8%83%E4%BC%9A%23) `1.1M 🔥` `NEW`
1. [老人不买天价鹿茸被一脚踹翻](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E4%B8%8D%E4%B9%B0%E5%A4%A9%E4%BB%B7%E9%B9%BF%E8%8C%B8%E8%A2%AB%E4%B8%80%E8%84%9A%E8%B8%B9%E7%BF%BB%23) `854.5K 🔥` `NEW`
1. [天猫618现货开卖叠券价更低](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB618%E7%8E%B0%E8%B4%A7%E5%BC%80%E5%8D%96%E5%8F%A0%E5%88%B8%E4%BB%B7%E6%9B%B4%E4%BD%8E%23) `783.7K 🔥` `NEW`
1. [小米17Max价格](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B317Max%E4%BB%B7%E6%A0%BC%23) `776.6K 🔥` `NEW`
1. [庾澄庆问窦靖童怎么称呼](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E9%97%AE%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%80%8E%E4%B9%88%E7%A7%B0%E5%91%BC%23) `690.1K 🔥` `NEW`
1. [瑞幸特调](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E7%89%B9%E8%B0%83%23) `517.3K 🔥` `NEW`
1. [歌手歌单](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%AD%8C%E5%8D%95%23) `484.6K 🔥` `NEW`
1. [小米YU7GT](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7GT%23) `453.6K 🔥` `NEW`
1. [张月 三公妆造](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%20%E4%B8%89%E5%85%AC%E5%A6%86%E9%80%A0%23) `341.7K 🔥` `NEW`
1. [暗恋同事的有福了](https://s.weibo.com/weibo?q=%23%E6%9A%97%E6%81%8B%E5%90%8C%E4%BA%8B%E7%9A%84%E6%9C%89%E7%A6%8F%E4%BA%86%23) `337.7K 🔥` `NEW`
1. [Angelababy画的红黄蓝 (Angelababy painted red, yellow and blue)](https://s.weibo.com/weibo?q=%23Angelababy%E7%94%BB%E7%9A%84%E7%BA%A2%E9%BB%84%E8%93%9D%23) `334.4K 🔥` `NEW`
1. [洛克王国 暗改](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%20%E6%9A%97%E6%94%B9%23) `333.2K 🔥` `NEW`
1. [坚决反对美国向台湾出售武器](https://s.weibo.com/weibo?q=%23%E5%9D%9A%E5%86%B3%E5%8F%8D%E5%AF%B9%E7%BE%8E%E5%9B%BD%E5%90%91%E5%8F%B0%E6%B9%BE%E5%87%BA%E5%94%AE%E6%AD%A6%E5%99%A8%23) `330.4K 🔥` `NEW`
1. [史上最大IPO就要来了](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7IPO%E5%B0%B1%E8%A6%81%E6%9D%A5%E4%BA%86%23) `330.2K 🔥` `NEW`
1. [妈妈为孩子教育搬4座城市生活](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E4%B8%BA%E5%AD%A9%E5%AD%90%E6%95%99%E8%82%B2%E6%90%AC4%E5%BA%A7%E5%9F%8E%E5%B8%82%E7%94%9F%E6%B4%BB%23) `329.2K 🔥` `NEW`
1. [宁艺卓评论吉赛尔恋情传闻帖](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E8%AF%84%E8%AE%BA%E5%90%89%E8%B5%9B%E5%B0%94%E6%81%8B%E6%83%85%E4%BC%A0%E9%97%BB%E5%B8%96%23) `328.4K 🔥` `NEW`
1. [疑遭肥料暗算一蒜地减产率94%](https://s.weibo.com/weibo?q=%23%E7%96%91%E9%81%AD%E8%82%A5%E6%96%99%E6%9A%97%E7%AE%97%E4%B8%80%E8%92%9C%E5%9C%B0%E5%87%8F%E4%BA%A7%E7%8E%8794%25%23) `327.6K 🔥` `NEW`
1. [主角 全员演技出彩](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%20%E5%85%A8%E5%91%98%E6%BC%94%E6%8A%80%E5%87%BA%E5%BD%A9%23) `327.1K 🔥` `NEW`
1. [A股突然下跌原因找到了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%AA%81%E7%84%B6%E4%B8%8B%E8%B7%8C%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `326.6K 🔥` `NEW`
1. [张踩玲老公一小时呼吸暂停40多次](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B8%A9%E7%8E%B2%E8%80%81%E5%85%AC%E4%B8%80%E5%B0%8F%E6%97%B6%E5%91%BC%E5%90%B8%E6%9A%82%E5%81%9C40%E5%A4%9A%E6%AC%A1%23) `325.3K 🔥` `NEW`
1. [618蹲直播间到底有多省 (How much savings does the 618 squatting live broadcast room have?)](https://s.weibo.com/weibo?q=%23618%E8%B9%B2%E7%9B%B4%E6%92%AD%E9%97%B4%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E7%9C%81%23) `324.2K 🔥` `NEW`
1. [中国教师报谈复旦教授遭小学家长举报](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%95%99%E5%B8%88%E6%8A%A5%E8%B0%88%E5%A4%8D%E6%97%A6%E6%95%99%E6%8E%88%E9%81%AD%E5%B0%8F%E5%AD%A6%E5%AE%B6%E9%95%BF%E4%B8%BE%E6%8A%A5%23) `323.3K 🔥` `NEW`
1. [家业细节到连指甲缝都不放过](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E7%BB%86%E8%8A%82%E5%88%B0%E8%BF%9E%E6%8C%87%E7%94%B2%E7%BC%9D%E9%83%BD%E4%B8%8D%E6%94%BE%E8%BF%87%23) `322.3K 🔥` `NEW`
1. [绿联痛盒搞定全套充电](https://s.weibo.com/weibo?q=%23%E7%BB%BF%E8%81%94%E7%97%9B%E7%9B%92%E6%90%9E%E5%AE%9A%E5%85%A8%E5%A5%97%E5%85%85%E7%94%B5%23) `322.1K 🔥` `NEW`
1. [马琳说孙颖莎上场气场马上不一样](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%90%B3%E8%AF%B4%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%8A%E5%9C%BA%E6%B0%94%E5%9C%BA%E9%A9%AC%E4%B8%8A%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `321.5K 🔥` `NEW`
1. [小米耳夹式耳机849元](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%80%B3%E5%A4%B9%E5%BC%8F%E8%80%B3%E6%9C%BA849%E5%85%83%23) `320.6K 🔥` `NEW`
1. [主角官微转了辛芷蕾评论](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E5%AE%98%E5%BE%AE%E8%BD%AC%E4%BA%86%E8%BE%9B%E8%8A%B7%E8%95%BE%E8%AF%84%E8%AE%BA%23) `319.9K 🔥` `NEW`
1. [复旦大学沈奕斐教授被举报](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E6%97%A6%E5%A4%A7%E5%AD%A6%E6%B2%88%E5%A5%95%E6%96%90%E6%95%99%E6%8E%88%E8%A2%AB%E4%B8%BE%E6%8A%A5%23) `319.4K 🔥` `NEW`
1. [白鹿 油画公主](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E6%B2%B9%E7%94%BB%E5%85%AC%E4%B8%BB%23) `318.9K 🔥` `NEW`
1. [王玉雯一年没进组了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E4%B8%80%E5%B9%B4%E6%B2%A1%E8%BF%9B%E7%BB%84%E4%BA%86%23) `318.2K 🔥` `NEW`
1. [小米YU7GT价格 (Xiaomi YU7GT price)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7GT%E4%BB%B7%E6%A0%BC%23) `291.2K 🔥` `NEW`
1. [林志玲拒绝文策院董事一职](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E7%8E%B2%E6%8B%92%E7%BB%9D%E6%96%87%E7%AD%96%E9%99%A2%E8%91%A3%E4%BA%8B%E4%B8%80%E8%81%8C%23) `256.3K 🔥` `NEW`
1. [今年的天猫618也太好买了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E7%9A%84%E5%A4%A9%E7%8C%AB618%E4%B9%9F%E5%A4%AA%E5%A5%BD%E4%B9%B0%E4%BA%86%23) `245.2K 🔥` `NEW`
1. [44岁脑梗半身不遂48岁能单手倒立](https://s.weibo.com/weibo?q=%2344%E5%B2%81%E8%84%91%E6%A2%97%E5%8D%8A%E8%BA%AB%E4%B8%8D%E9%81%8248%E5%B2%81%E8%83%BD%E5%8D%95%E6%89%8B%E5%80%92%E7%AB%8B%23) `240.6K 🔥` `NEW`
1. [米线里有多少鸡精](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E7%BA%BF%E9%87%8C%E6%9C%89%E5%A4%9A%E5%B0%91%E9%B8%A1%E7%B2%BE%23) `239.5K 🔥` `NEW`
1. [巴基斯坦总理夏巴兹将访华](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E6%80%BB%E7%90%86%E5%A4%8F%E5%B7%B4%E5%85%B9%E5%B0%86%E8%AE%BF%E5%8D%8E%23) `238.3K 🔥` `NEW`
1. [今年618补贴力度超过去年](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4618%E8%A1%A5%E8%B4%B4%E5%8A%9B%E5%BA%A6%E8%B6%85%E8%BF%87%E5%8E%BB%E5%B9%B4%23) `226.8K 🔥` `NEW`
1. [618防暑未必花大价钱](https://s.weibo.com/weibo?q=%23618%E9%98%B2%E6%9A%91%E6%9C%AA%E5%BF%85%E8%8A%B1%E5%A4%A7%E4%BB%B7%E9%92%B1%23) `221.7K 🔥` `NEW`
1. [不小心把DeepSeek叫成豆包](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%B0%8F%E5%BF%83%E6%8A%8ADeepSeek%E5%8F%AB%E6%88%90%E8%B1%86%E5%8C%85%23) `783.0K 🔥` `+249%`
1. [洛克王国世界](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%E4%B8%96%E7%95%8C%23) `238.0K 🔥` `+62%`
1. [给阿嬷的情书从1000多人中选出南枝 (Love Letter to Grandma Selected from more than 1,000 people, Nanzhi)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E4%BB%8E1000%E5%A4%9A%E4%BA%BA%E4%B8%AD%E9%80%89%E5%87%BA%E5%8D%97%E6%9E%9D%23) `219.4K 🔥` `+63%`
1. [南方还有2轮强降雨](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E8%BF%98%E6%9C%892%E8%BD%AE%E5%BC%BA%E9%99%8D%E9%9B%A8%23) `784.4K 🔥`
1. [歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%23) `348.9K 🔥`
1. [孙杨当众让张豆豆给他道歉 (Sun Yang asked Zhang Doudou to apologize to him in public)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BD%93%E4%BC%97%E8%AE%A9%E5%BC%A0%E8%B1%86%E8%B1%86%E7%BB%99%E4%BB%96%E9%81%93%E6%AD%89%23) `329.1K 🔥`
1. [月经期洗澡停经 下丘脑对温度敏感](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%BB%8F%E6%9C%9F%E6%B4%97%E6%BE%A1%E5%81%9C%E7%BB%8F%20%E4%B8%8B%E4%B8%98%E8%84%91%E5%AF%B9%E6%B8%A9%E5%BA%A6%E6%95%8F%E6%84%9F%23) `326.1K 🔥`
1. [金秀贤从全民唾骂到沉冤得雪](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E4%BB%8E%E5%85%A8%E6%B0%91%E5%94%BE%E9%AA%82%E5%88%B0%E6%B2%89%E5%86%A4%E5%BE%97%E9%9B%AA%23) `324.6K 🔥`
1. [36岁高三老师高考前倒在讲台去世](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E9%AB%98%E4%B8%89%E8%80%81%E5%B8%88%E9%AB%98%E8%80%83%E5%89%8D%E5%80%92%E5%9C%A8%E8%AE%B2%E5%8F%B0%E5%8E%BB%E4%B8%96%23) `318.1K 🔥`
1. [金秀贤案件反转](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E6%A1%88%E4%BB%B6%E5%8F%8D%E8%BD%AC%23) `280.6K 🔥`
1. [税务局职工被曝上班脚翘桌上玩手游 (A tax bureau employee was exposed playing mobile games with his feet up on the table at work)](https://s.weibo.com/weibo?q=%23%E7%A8%8E%E5%8A%A1%E5%B1%80%E8%81%8C%E5%B7%A5%E8%A2%AB%E6%9B%9D%E4%B8%8A%E7%8F%AD%E8%84%9A%E7%BF%98%E6%A1%8C%E4%B8%8A%E7%8E%A9%E6%89%8B%E6%B8%B8%23) `347.7K 🔥` `-80%`

Updated at 2026-05-21 20:24:25

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
