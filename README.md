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

1. [世界是本巨大的番茄小说 (The world is a giant tomato novel)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%98%AF%E6%9C%AC%E5%B7%A8%E5%A4%A7%E7%9A%84%E7%95%AA%E8%8C%84%E5%B0%8F%E8%AF%B4%23) `312.9K 🔥` `NEW`
1. [电动车是最伟大的发明](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%8A%A8%E8%BD%A6%E6%98%AF%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E5%8F%91%E6%98%8E%23) `144.1K 🔥` `NEW`
1. [美丽中国行](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%B8%BD%E4%B8%AD%E5%9B%BD%E8%A1%8C%23) `144.0K 🔥` `NEW`
1. [你好星期六回应丁程鑫伤情](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E5%9B%9E%E5%BA%94%E4%B8%81%E7%A8%8B%E9%91%AB%E4%BC%A4%E6%83%85%23) `144.0K 🔥` `NEW`
1. [做过手帐的才知道她有多厉害](https://s.weibo.com/weibo?q=%23%E5%81%9A%E8%BF%87%E6%89%8B%E5%B8%90%E7%9A%84%E6%89%8D%E7%9F%A5%E9%81%93%E5%A5%B9%E6%9C%89%E5%A4%9A%E5%8E%89%E5%AE%B3%23) `143.9K 🔥` `NEW`
1. [事业编考生笔试第1因围报被取消资格](https://s.weibo.com/weibo?q=%23%E4%BA%8B%E4%B8%9A%E7%BC%96%E8%80%83%E7%94%9F%E7%AC%94%E8%AF%95%E7%AC%AC1%E5%9B%A0%E5%9B%B4%E6%8A%A5%E8%A2%AB%E5%8F%96%E6%B6%88%E8%B5%84%E6%A0%BC%23) `143.9K 🔥` `NEW`
1. [不再发朋友圈算长大吗](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%86%8D%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%AE%97%E9%95%BF%E5%A4%A7%E5%90%97%23) `143.8K 🔥` `NEW`
1. [30岁女子爬楼瘦腿膝盖老成60岁](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%A5%B3%E5%AD%90%E7%88%AC%E6%A5%BC%E7%98%A6%E8%85%BF%E8%86%9D%E7%9B%96%E8%80%81%E6%88%9060%E5%B2%81%23) `143.8K 🔥` `NEW`
1. [王楚钦从摔拍少年到国乒队长](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%BB%8E%E6%91%94%E6%8B%8D%E5%B0%91%E5%B9%B4%E5%88%B0%E5%9B%BD%E4%B9%92%E9%98%9F%E9%95%BF%23) `143.8K 🔥` `NEW`
1. [豆包和豆包吵架](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%92%8C%E8%B1%86%E5%8C%85%E5%90%B5%E6%9E%B6%23) `143.7K 🔥` `NEW`
1. [演员魏宗万去世 (Actor Wei Zongwan passed away)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%AD%8F%E5%AE%97%E4%B8%87%E5%8E%BB%E4%B8%96%23) `143.6K 🔥` `NEW`
1. [妻子穿几十元T恤丈夫满身名牌做医美](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E7%A9%BF%E5%87%A0%E5%8D%81%E5%85%83T%E6%81%A4%E4%B8%88%E5%A4%AB%E6%BB%A1%E8%BA%AB%E5%90%8D%E7%89%8C%E5%81%9A%E5%8C%BB%E7%BE%8E%23) `143.6K 🔥` `NEW`
1. [长月烬明没人给陈都灵打call](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%88%E7%83%AC%E6%98%8E%E6%B2%A1%E4%BA%BA%E7%BB%99%E9%99%88%E9%83%BD%E7%81%B5%E6%89%93call%23) `143.5K 🔥` `NEW`
1. [山西沁源县委书记赵永进被查](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%B2%81%E6%BA%90%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%B5%B5%E6%B0%B8%E8%BF%9B%E8%A2%AB%E6%9F%A5%23) `143.5K 🔥` `NEW`
1. [暖阳](https://s.weibo.com/weibo?q=%23%E6%9A%96%E9%98%B3%23) `143.4K 🔥` `NEW`
1. [5岁儿子29万存款被妈妈取到剩40](https://s.weibo.com/weibo?q=%235%E5%B2%81%E5%84%BF%E5%AD%9029%E4%B8%87%E5%AD%98%E6%AC%BE%E8%A2%AB%E5%A6%88%E5%A6%88%E5%8F%96%E5%88%B0%E5%89%A940%23) `143.4K 🔥` `NEW`
1. [男子中6022万4个月后才敢晒奖](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%AD6022%E4%B8%874%E4%B8%AA%E6%9C%88%E5%90%8E%E6%89%8D%E6%95%A2%E6%99%92%E5%A5%96%23) `143.3K 🔥` `NEW`
1. [燕云十六声把付鹏举修改为付鹏](https://s.weibo.com/weibo?q=%23%E7%87%95%E4%BA%91%E5%8D%81%E5%85%AD%E5%A3%B0%E6%8A%8A%E4%BB%98%E9%B9%8F%E4%B8%BE%E4%BF%AE%E6%94%B9%E4%B8%BA%E4%BB%98%E9%B9%8F%23) `143.2K 🔥` `NEW`
1. [老宅被亲戚偷装光伏板女子崩溃痛哭](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%AE%85%E8%A2%AB%E4%BA%B2%E6%88%9A%E5%81%B7%E8%A3%85%E5%85%89%E4%BC%8F%E6%9D%BF%E5%A5%B3%E5%AD%90%E5%B4%A9%E6%BA%83%E7%97%9B%E5%93%AD%23) `143.2K 🔥` `NEW`
1. [翘楚](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%23) `143.2K 🔥` `NEW`
1. [丁程鑫受伤 (Ding Chengxin is injured)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8F%97%E4%BC%A4%23) `143.1K 🔥` `NEW`
1. [妻子与前男友车上睡觉男子怒砸车窗](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E4%B8%8E%E5%89%8D%E7%94%B7%E5%8F%8B%E8%BD%A6%E4%B8%8A%E7%9D%A1%E8%A7%89%E7%94%B7%E5%AD%90%E6%80%92%E7%A0%B8%E8%BD%A6%E7%AA%97%23) `143.1K 🔥` `NEW`
1. [怪不得国外牛肉便宜](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%9B%BD%E5%A4%96%E7%89%9B%E8%82%89%E4%BE%BF%E5%AE%9C%23) `143.0K 🔥` `NEW`
1. [神仙肉](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%23) `142.9K 🔥` `NEW`
1. [中国足球小将夺冠](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%B3%E7%90%83%E5%B0%8F%E5%B0%86%E5%A4%BA%E5%86%A0%23) `142.9K 🔥` `NEW`
1. [河道有大量蛇出没已喷驱蛇粉](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E9%81%93%E6%9C%89%E5%A4%A7%E9%87%8F%E8%9B%87%E5%87%BA%E6%B2%A1%E5%B7%B2%E5%96%B7%E9%A9%B1%E8%9B%87%E7%B2%89%23) `142.8K 🔥` `NEW`
1. [胖是因为这些因素导致的](https://s.weibo.com/weibo?q=%23%E8%83%96%E6%98%AF%E5%9B%A0%E4%B8%BA%E8%BF%99%E4%BA%9B%E5%9B%A0%E7%B4%A0%E5%AF%BC%E8%87%B4%E7%9A%84%23) `142.8K 🔥` `NEW`
1. [张家齐和全红婵哥哥一起摘荔枝](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%92%8C%E5%85%A8%E7%BA%A2%E5%A9%B5%E5%93%A5%E5%93%A5%E4%B8%80%E8%B5%B7%E6%91%98%E8%8D%94%E6%9E%9D%23) `142.8K 🔥` `NEW`
1. [歌手 苏新皓](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%20%E8%8B%8F%E6%96%B0%E7%9A%93%23) `142.7K 🔥` `NEW`
1. [三星堆考古发现11件红玉髓珠](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E5%A0%86%E8%80%83%E5%8F%A4%E5%8F%91%E7%8E%B011%E4%BB%B6%E7%BA%A2%E7%8E%89%E9%AB%93%E7%8F%A0%23) `142.7K 🔥` `NEW`
1. [马龙交棒队长读博去了 (Ma Long handed over the baton to the captain and went to study for a Ph.D.)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E4%BA%A4%E6%A3%92%E9%98%9F%E9%95%BF%E8%AF%BB%E5%8D%9A%E5%8E%BB%E4%BA%86%23) `142.6K 🔥` `NEW`
1. [翘楚 短剧感](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%20%E7%9F%AD%E5%89%A7%E6%84%9F%23) `142.5K 🔥` `NEW`
1. [CBA总决赛](https://s.weibo.com/weibo?q=%23CBA%E6%80%BB%E5%86%B3%E8%B5%9B%23) `142.5K 🔥` `NEW`
1. [大量印度人排队报名学日语](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%87%8F%E5%8D%B0%E5%BA%A6%E4%BA%BA%E6%8E%92%E9%98%9F%E6%8A%A5%E5%90%8D%E5%AD%A6%E6%97%A5%E8%AF%AD%23) `142.4K 🔥` `NEW`
1. [歌手帮唱嘉宾](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E5%B8%AE%E5%94%B1%E5%98%89%E5%AE%BE%23) `142.4K 🔥` `NEW`
1. [敖瑞鹏宣传灵魂摆渡十年](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E5%AE%A3%E4%BC%A0%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%E5%8D%81%E5%B9%B4%23) `142.3K 🔥` `NEW`
1. [男子在健身房单边卸杠铃片蓄意伤人](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E5%81%A5%E8%BA%AB%E6%88%BF%E5%8D%95%E8%BE%B9%E5%8D%B8%E6%9D%A0%E9%93%83%E7%89%87%E8%93%84%E6%84%8F%E4%BC%A4%E4%BA%BA%23) `142.3K 🔥` `NEW`
1. [给阿嬷的情书女主被劝少看粉丝分析](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E5%A5%B3%E4%B8%BB%E8%A2%AB%E5%8A%9D%E5%B0%91%E7%9C%8B%E7%B2%89%E4%B8%9D%E5%88%86%E6%9E%90%23) `142.2K 🔥` `NEW`
1. [方圆脸减肥一下子没动力了](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E8%84%B8%E5%87%8F%E8%82%A5%E4%B8%80%E4%B8%8B%E5%AD%90%E6%B2%A1%E5%8A%A8%E5%8A%9B%E4%BA%86%23) `142.1K 🔥` `NEW`
1. [灵魂摆渡一集才20分钟](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%E4%B8%80%E9%9B%86%E6%89%8D20%E5%88%86%E9%92%9F%23) `142.1K 🔥` `NEW`
1. [从怀孕到生娃能领7笔钱 (You can receive 7 sums of money from pregnancy to childbirth)](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E6%80%80%E5%AD%95%E5%88%B0%E7%94%9F%E5%A8%83%E8%83%BD%E9%A2%867%E7%AC%94%E9%92%B1%23) `142.1K 🔥` `NEW`
1. [字节腾讯AI大动作](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E8%85%BE%E8%AE%AFAI%E5%A4%A7%E5%8A%A8%E4%BD%9C%23) `142.0K 🔥` `NEW`
1. [窦骁 演技赋魅](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%AA%81%20%E6%BC%94%E6%8A%80%E8%B5%8B%E9%AD%85%23) `141.9K 🔥` `NEW`
1. [开团秒跟最有用的一集](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%9B%A2%E7%A7%92%E8%B7%9F%E6%9C%80%E6%9C%89%E7%94%A8%E7%9A%84%E4%B8%80%E9%9B%86%23) `141.9K 🔥` `NEW`
1. [刘红兵是我爸的人生复刻版](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BA%A2%E5%85%B5%E6%98%AF%E6%88%91%E7%88%B8%E7%9A%84%E4%BA%BA%E7%94%9F%E5%A4%8D%E5%88%BB%E7%89%88%23) `141.9K 🔥` `NEW`
1. [荷兰警察将孕妇重摔在地致其早产](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E8%AD%A6%E5%AF%9F%E5%B0%86%E5%AD%95%E5%A6%87%E9%87%8D%E6%91%94%E5%9C%A8%E5%9C%B0%E8%87%B4%E5%85%B6%E6%97%A9%E4%BA%A7%23) `141.8K 🔥` `NEW`
1. [忆秦娥知世故了](https://s.weibo.com/weibo?q=%23%E5%BF%86%E7%A7%A6%E5%A8%A5%E7%9F%A5%E4%B8%96%E6%95%85%E4%BA%86%23) `141.7K 🔥` `NEW`
1. [翘楚优酷热度破7500](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E4%BC%98%E9%85%B7%E7%83%AD%E5%BA%A6%E7%A0%B47500%23) `141.7K 🔥` `NEW`
1. [阴阳师](https://s.weibo.com/weibo?q=%23%E9%98%B4%E9%98%B3%E5%B8%88%23) `141.6K 🔥` `NEW`
1. [巴西19岁女子被鲨鱼咬断一条腿](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF19%E5%B2%81%E5%A5%B3%E5%AD%90%E8%A2%AB%E9%B2%A8%E9%B1%BC%E5%92%AC%E6%96%AD%E4%B8%80%E6%9D%A1%E8%85%BF%23) `141.6K 🔥` `NEW`

Updated at 2026-06-03 02:54:56

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
