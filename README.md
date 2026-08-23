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

1. [美债风暴席卷全球](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%80%BA%E9%A3%8E%E6%9A%B4%E5%B8%AD%E5%8D%B7%E5%85%A8%E7%90%83%23) `276.0K 🔥` `NEW`
1. [张韶涵因心脏病找母亲要医疗费未果](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E5%9B%A0%E5%BF%83%E8%84%8F%E7%97%85%E6%89%BE%E6%AF%8D%E4%BA%B2%E8%A6%81%E5%8C%BB%E7%96%97%E8%B4%B9%E6%9C%AA%E6%9E%9C%23) `275.7K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `261.0K 🔥` `NEW`
1. [巴萨5比0埃尔切](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A85%E6%AF%940%E5%9F%83%E5%B0%94%E5%88%87%23) `175.5K 🔥` `NEW`
1. [宋亚轩 得物账号](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%20%E5%BE%97%E7%89%A9%E8%B4%A6%E5%8F%B7%23) `166.7K 🔥` `NEW`
1. [中国产味噌汤让日本破防](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%A7%E5%91%B3%E5%99%8C%E6%B1%A4%E8%AE%A9%E6%97%A5%E6%9C%AC%E7%A0%B4%E9%98%B2%23) `164.7K 🔥` `NEW`
1. [阿尔瓦雷斯 彻底闹掰](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%B0%94%E7%93%A6%E9%9B%B7%E6%96%AF%20%E5%BD%BB%E5%BA%95%E9%97%B9%E6%8E%B0%23) `133.3K 🔥` `NEW`
1. [英超首轮 乱套了](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E8%B6%85%E9%A6%96%E8%BD%AE%20%E4%B9%B1%E5%A5%97%E4%BA%86%23) `132.7K 🔥` `NEW`
1. [美军突然公开超远程空空导弹](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E7%AA%81%E7%84%B6%E5%85%AC%E5%BC%80%E8%B6%85%E8%BF%9C%E7%A8%8B%E7%A9%BA%E7%A9%BA%E5%AF%BC%E5%BC%B9%23) `107.2K 🔥` `NEW`
1. [5岁女童看表演被机器人踢掉4颗牙](https://s.weibo.com/weibo?q=%235%E5%B2%81%E5%A5%B3%E7%AB%A5%E7%9C%8B%E8%A1%A8%E6%BC%94%E8%A2%AB%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B8%A2%E6%8E%894%E9%A2%97%E7%89%99%23) `98.1K 🔥` `NEW`
1. [郑钦文出战美网资格赛](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%87%BA%E6%88%98%E7%BE%8E%E7%BD%91%E8%B5%84%E6%A0%BC%E8%B5%9B%23) `86.4K 🔥` `NEW`
1. [李登科聊金晨退圈](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E8%81%8A%E9%87%91%E6%99%A8%E9%80%80%E5%9C%88%23) `84.2K 🔥` `NEW`
1. [硕士生签约管理岗入职被安排打螺丝](https://s.weibo.com/weibo?q=%23%E7%A1%95%E5%A3%AB%E7%94%9F%E7%AD%BE%E7%BA%A6%E7%AE%A1%E7%90%86%E5%B2%97%E5%85%A5%E8%81%8C%E8%A2%AB%E5%AE%89%E6%8E%92%E6%89%93%E8%9E%BA%E4%B8%9D%23) `1.1M 🔥` `+29%`
1. [四六级成绩](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%E6%88%90%E7%BB%A9%23) `782.8K 🔥` `+131%`
1. [2万件中央救灾物资支持广西](https://s.weibo.com/weibo?q=%232%E4%B8%87%E4%BB%B6%E4%B8%AD%E5%A4%AE%E6%95%91%E7%81%BE%E7%89%A9%E8%B5%84%E6%94%AF%E6%8C%81%E5%B9%BF%E8%A5%BF%23) `696.7K 🔥` `+24%`
1. [从140瘦到了95斤](https://s.weibo.com/weibo?q=%23%E4%BB%8E140%E7%98%A6%E5%88%B0%E4%BA%8695%E6%96%A4%23) `657.7K 🔥` `+21%`
1. [张凌赫与你解锁超过瘾VIP新品](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%8E%E4%BD%A0%E8%A7%A3%E9%94%81%E8%B6%85%E8%BF%87%E7%98%BEVIP%E6%96%B0%E5%93%81%23) `496.0K 🔥` `+438%`
1. [一定要珍惜你身体里尚存的欲望](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%9A%E8%A6%81%E7%8F%8D%E6%83%9C%E4%BD%A0%E8%BA%AB%E4%BD%93%E9%87%8C%E5%B0%9A%E5%AD%98%E7%9A%84%E6%AC%B2%E6%9C%9B%23) `299.1K 🔥` `+26%`
1. [白鹿曾买了835张宋雨琦数字专辑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9B%BE%E4%B9%B0%E4%BA%86835%E5%BC%A0%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%95%B0%E5%AD%97%E4%B8%93%E8%BE%91%23) `215.0K 🔥` `+79%`
1. [嫦娥七号任务不能在今年预定窗口实施](https://s.weibo.com/weibo?q=%23%E5%AB%A6%E5%A8%A5%E4%B8%83%E5%8F%B7%E4%BB%BB%E5%8A%A1%E4%B8%8D%E8%83%BD%E5%9C%A8%E4%BB%8A%E5%B9%B4%E9%A2%84%E5%AE%9A%E7%AA%97%E5%8F%A3%E5%AE%9E%E6%96%BD%23) `178.2K 🔥` `+47%`
1. [刘浩存 韩沛颖](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%20%E9%9F%A9%E6%B2%9B%E9%A2%96%23) `174.7K 🔥` `+46%`
1. [四十多岁女丁克想生孩子](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%8D%81%E5%A4%9A%E5%B2%81%E5%A5%B3%E4%B8%81%E5%85%8B%E6%83%B3%E7%94%9F%E5%AD%A9%E5%AD%90%23) `171.2K 🔥` `+44%`
1. [李昀锐可以去参加披荆斩棘了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%8F%AF%E4%BB%A5%E5%8E%BB%E5%8F%82%E5%8A%A0%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%BA%86%23) `167.8K 🔥` `+43%`
1. [韩沛颖说刘浩存14岁就跟某某某导了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B2%9B%E9%A2%96%E8%AF%B4%E5%88%98%E6%B5%A9%E5%AD%9814%E5%B2%81%E5%B0%B1%E8%B7%9F%E6%9F%90%E6%9F%90%E6%9F%90%E5%AF%BC%E4%BA%86%23) `160.8K 🔥` `+41%`
1. [人类400米纪录保持者祝贺闪电破纪录](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB400%E7%B1%B3%E7%BA%AA%E5%BD%95%E4%BF%9D%E6%8C%81%E8%80%85%E7%A5%9D%E8%B4%BA%E9%97%AA%E7%94%B5%E7%A0%B4%E7%BA%AA%E5%BD%95%23) `139.9K 🔥` `+21%`
1. [巴西连颅女婴分离手术后相继去世](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E8%BF%9E%E9%A2%85%E5%A5%B3%E5%A9%B4%E5%88%86%E7%A6%BB%E6%89%8B%E6%9C%AF%E5%90%8E%E7%9B%B8%E7%BB%A7%E5%8E%BB%E4%B8%96%23) `139.3K 🔥` `+32%`
1. [张韶涵演唱会突发心脏不适](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E7%AA%81%E5%8F%91%E5%BF%83%E8%84%8F%E4%B8%8D%E9%80%82%23) `620.0K 🔥`
1. [亲密关系和婚育制度绑定太深](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E5%92%8C%E5%A9%9A%E8%82%B2%E5%88%B6%E5%BA%A6%E7%BB%91%E5%AE%9A%E5%A4%AA%E6%B7%B1%23) `565.4K 🔥`
1. [破产姐妹史上最长售后](https://s.weibo.com/weibo?q=%23%E7%A0%B4%E4%BA%A7%E5%A7%90%E5%A6%B9%E5%8F%B2%E4%B8%8A%E6%9C%80%E9%95%BF%E5%94%AE%E5%90%8E%23) `298.0K 🔥`
1. [宋亚轩爱马仕项链](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%88%B1%E9%A9%AC%E4%BB%95%E9%A1%B9%E9%93%BE%23) `267.2K 🔥`
1. [傅首尔前夫发文怼留几手](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E5%89%8D%E5%A4%AB%E5%8F%91%E6%96%87%E6%80%BC%E7%95%99%E5%87%A0%E6%89%8B%23) `251.8K 🔥`
1. [老人店内离世店主协商赔偿1.9万元](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%BA%97%E5%86%85%E7%A6%BB%E4%B8%96%E5%BA%97%E4%B8%BB%E5%8D%8F%E5%95%86%E8%B5%94%E5%81%BF1.9%E4%B8%87%E5%85%83%23) `249.9K 🔥`
1. [韩红基金会救护车供应商大门紧闭](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E6%95%91%E6%8A%A4%E8%BD%A6%E4%BE%9B%E5%BA%94%E5%95%86%E5%A4%A7%E9%97%A8%E7%B4%A7%E9%97%AD%23) `222.4K 🔥`
1. [张元英走路姿势](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E8%B5%B0%E8%B7%AF%E5%A7%BF%E5%8A%BF%23) `179.1K 🔥`
1. [甲醛白菜让多重抽检成摆设](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%E8%AE%A9%E5%A4%9A%E9%87%8D%E6%8A%BD%E6%A3%80%E6%88%90%E6%91%86%E8%AE%BE%23) `168.9K 🔥`
1. [梁王世锦赛夺冠](https://s.weibo.com/weibo?q=%23%E6%A2%81%E7%8E%8B%E4%B8%96%E9%94%A6%E8%B5%9B%E5%A4%BA%E5%86%A0%23) `156.0K 🔥`
1. [芒果新人向王一博道歉](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%96%B0%E4%BA%BA%E5%90%91%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%81%93%E6%AD%89%23) `140.6K 🔥`
1. [一代人有一代人的隐形家务](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E9%9A%90%E5%BD%A2%E5%AE%B6%E5%8A%A1%23) `137.5K 🔥`
1. [原来内向的人都是这样交朋友的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%85%E5%90%91%E7%9A%84%E4%BA%BA%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E4%BA%A4%E6%9C%8B%E5%8F%8B%E7%9A%84%23) `101.5K 🔥`
1. [公厕被殴案施暴男子已出狱](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8E%95%E8%A2%AB%E6%AE%B4%E6%A1%88%E6%96%BD%E6%9A%B4%E7%94%B7%E5%AD%90%E5%B7%B2%E5%87%BA%E7%8B%B1%23) `98.7K 🔥`
1. [林一没穿鞋就跑去看瘦了的郭京飞](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%E6%B2%A1%E7%A9%BF%E9%9E%8B%E5%B0%B1%E8%B7%91%E5%8E%BB%E7%9C%8B%E7%98%A6%E4%BA%86%E7%9A%84%E9%83%AD%E4%BA%AC%E9%A3%9E%23) `97.5K 🔥`
1. [买票占座规则明确了然后呢](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E8%A7%84%E5%88%99%E6%98%8E%E7%A1%AE%E4%BA%86%E7%84%B6%E5%90%8E%E5%91%A2%23) `470.3K 🔥` `-21%`
1. [父亲直播目睹儿子篮球赛倒地后离世](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E7%9B%B4%E6%92%AD%E7%9B%AE%E7%9D%B9%E5%84%BF%E5%AD%90%E7%AF%AE%E7%90%83%E8%B5%9B%E5%80%92%E5%9C%B0%E5%90%8E%E7%A6%BB%E4%B8%96%23) `119.4K 🔥` `-22%`
1. [陈星旭王玉雯好浓的姐狗味](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%A5%BD%E6%B5%93%E7%9A%84%E5%A7%90%E7%8B%97%E5%91%B3%23) `81.3K 🔥` `-25%`
1. [打赏要求陪睡案女主播合租室友发声](https://s.weibo.com/weibo?q=%23%E6%89%93%E8%B5%8F%E8%A6%81%E6%B1%82%E9%99%AA%E7%9D%A1%E6%A1%88%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%90%88%E7%A7%9F%E5%AE%A4%E5%8F%8B%E5%8F%91%E5%A3%B0%23) `75.8K 🔥` `-31%`
1. [宋雨琦曾说白鹿对自己很好](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%9B%BE%E8%AF%B4%E7%99%BD%E9%B9%BF%E5%AF%B9%E8%87%AA%E5%B7%B1%E5%BE%88%E5%A5%BD%23) `75.7K 🔥` `-34%`
1. [那英杨晓培朋友圈重合度](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E6%9D%A8%E6%99%93%E5%9F%B9%E6%9C%8B%E5%8F%8B%E5%9C%88%E9%87%8D%E5%90%88%E5%BA%A6%23) `75.5K 🔥` `-34%`
1. [留几手回应傅首尔瘦了](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E5%9B%9E%E5%BA%94%E5%82%85%E9%A6%96%E5%B0%94%E7%98%A6%E4%BA%86%23) `67.9K 🔥` `-37%`
1. [2026成都车展](https://s.weibo.com/weibo?q=%232026%E6%88%90%E9%83%BD%E8%BD%A6%E5%B1%95%23) `67.7K 🔥` `-36%`

Updated at 2026-08-24 07:48:16

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
