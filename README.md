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

1. [周也你这演技我看得也很痛苦](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E4%BD%A0%E8%BF%99%E6%BC%94%E6%8A%80%E6%88%91%E7%9C%8B%E5%BE%97%E4%B9%9F%E5%BE%88%E7%97%9B%E8%8B%A6%23) `148.0K 🔥` `NEW`
1. [承接别人情绪的聊天技巧](https://s.weibo.com/weibo?q=%23%E6%89%BF%E6%8E%A5%E5%88%AB%E4%BA%BA%E6%83%85%E7%BB%AA%E7%9A%84%E8%81%8A%E5%A4%A9%E6%8A%80%E5%B7%A7%23) `69.8K 🔥` `NEW`
1. [挑情丑闻](https://s.weibo.com/weibo?q=%23%E6%8C%91%E6%83%85%E4%B8%91%E9%97%BB%23) `62.2K 🔥` `NEW`
1. [西贝内部人士回应倒闭传闻](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%B4%9D%E5%86%85%E9%83%A8%E4%BA%BA%E5%A3%AB%E5%9B%9E%E5%BA%94%E5%80%92%E9%97%AD%E4%BC%A0%E9%97%BB%23) `62.1K 🔥` `NEW`
1. [Bin要拿S16冠军](https://s.weibo.com/weibo?q=%23Bin%E8%A6%81%E6%8B%BFS16%E5%86%A0%E5%86%9B%23) `61.9K 🔥` `NEW`
1. [韩国运动员发文救救我们](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%BF%90%E5%8A%A8%E5%91%98%E5%8F%91%E6%96%87%E6%95%91%E6%95%91%E6%88%91%E4%BB%AC%23) `61.8K 🔥` `NEW`
1. [肉包不吃肉被要求解释争议](https://s.weibo.com/weibo?q=%23%E8%82%89%E5%8C%85%E4%B8%8D%E5%90%83%E8%82%89%E8%A2%AB%E8%A6%81%E6%B1%82%E8%A7%A3%E9%87%8A%E4%BA%89%E8%AE%AE%23) `61.7K 🔥` `NEW`
1. [沙特罕见向以色列求援](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%89%B9%E7%BD%95%E8%A7%81%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%E6%B1%82%E6%8F%B4%23) `61.7K 🔥` `NEW`
1. [披荆斩棘三公成绩](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%89%E5%85%AC%E6%88%90%E7%BB%A9%23) `61.6K 🔥` `NEW`
1. [对视两次就可以让他记住你](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E8%A7%86%E4%B8%A4%E6%AC%A1%E5%B0%B1%E5%8F%AF%E4%BB%A5%E8%AE%A9%E4%BB%96%E8%AE%B0%E4%BD%8F%E4%BD%A0%23) `61.4K 🔥` `NEW`
1. [护学岗4人全是高龄老人最大67岁](https://s.weibo.com/weibo?q=%23%E6%8A%A4%E5%AD%A6%E5%B2%974%E4%BA%BA%E5%85%A8%E6%98%AF%E9%AB%98%E9%BE%84%E8%80%81%E4%BA%BA%E6%9C%80%E5%A4%A767%E5%B2%81%23) `61.3K 🔥` `NEW`
1. [TheShy世界赛见](https://s.weibo.com/weibo?q=%23TheShy%E4%B8%96%E7%95%8C%E8%B5%9B%E8%A7%81%23) `61.0K 🔥` `NEW`
1. [Rookie晋级S16后发合照](https://s.weibo.com/weibo?q=%23Rookie%E6%99%8B%E7%BA%A7S16%E5%90%8E%E5%8F%91%E5%90%88%E7%85%A7%23) `60.9K 🔥` `NEW`
1. [艾热把张睿哄成胚胎了](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%83%AD%E6%8A%8A%E5%BC%A0%E7%9D%BF%E5%93%84%E6%88%90%E8%83%9A%E8%83%8E%E4%BA%86%23) `60.8K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `60.7K 🔥` `NEW`
1. [能随时像漫画那样大哭的戒指](https://s.weibo.com/weibo?q=%23%E8%83%BD%E9%9A%8F%E6%97%B6%E5%83%8F%E6%BC%AB%E7%94%BB%E9%82%A3%E6%A0%B7%E5%A4%A7%E5%93%AD%E7%9A%84%E6%88%92%E6%8C%87%23) `60.7K 🔥` `NEW`
1. [长期不工作的人会失去什么](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%B8%8D%E5%B7%A5%E4%BD%9C%E7%9A%84%E4%BA%BA%E4%BC%9A%E5%A4%B1%E5%8E%BB%E4%BB%80%E4%B9%88%23) `583.3K 🔥` `-72%`
1. [LPL出征仪式 寒酸](https://s.weibo.com/weibo?q=%23LPL%E5%87%BA%E5%BE%81%E4%BB%AA%E5%BC%8F%20%E5%AF%92%E9%85%B8%23) `184.0K 🔥` `-47%`
1. [前8月全国铁路发送旅客超33亿人次](https://s.weibo.com/weibo?q=%23%E5%89%8D8%E6%9C%88%E5%85%A8%E5%9B%BD%E9%93%81%E8%B7%AF%E5%8F%91%E9%80%81%E6%97%85%E5%AE%A2%E8%B6%8533%E4%BA%BF%E4%BA%BA%E6%AC%A1%23) `148.7K 🔥` `-78%`
1. [华晨宇齐天](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E9%BD%90%E5%A4%A9%23) `91.1K 🔥` `-69%`
1. [披荆斩棘三公上半场排名](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%89%E5%85%AC%E4%B8%8A%E5%8D%8A%E5%9C%BA%E6%8E%92%E5%90%8D%23) `85.8K 🔥` `-90%`
1. [郑合惠子回应演杜翠雀](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E5%9B%9E%E5%BA%94%E6%BC%94%E6%9D%9C%E7%BF%A0%E9%9B%80%23) `70.4K 🔥` `-62%`
1. [被顾客用西瓜砸头摊主获赔7万元](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%A1%BE%E5%AE%A2%E7%94%A8%E8%A5%BF%E7%93%9C%E7%A0%B8%E5%A4%B4%E6%91%8A%E4%B8%BB%E8%8E%B7%E8%B5%947%E4%B8%87%E5%85%83%23) `70.3K 🔥` `-69%`
1. [布莱顿3比0阿森纳](https://s.weibo.com/weibo?q=%23%E5%B8%83%E8%8E%B1%E9%A1%BF3%E6%AF%940%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `63.3K 🔥` `-63%`
1. [王源演唱会结束打开手机一看天塌了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%BC%94%E5%94%B1%E4%BC%9A%E7%BB%93%E6%9D%9F%E6%89%93%E5%BC%80%E6%89%8B%E6%9C%BA%E4%B8%80%E7%9C%8B%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `63.0K 🔥` `-88%`
1. [实在搞不懂调休的意义](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E5%9C%A8%E6%90%9E%E4%B8%8D%E6%87%82%E8%B0%83%E4%BC%91%E7%9A%84%E6%84%8F%E4%B9%89%23) `62.8K 🔥` `-71%`
1. [亚运会开幕式 诡异](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%BC%80%E5%B9%95%E5%BC%8F%20%E8%AF%A1%E5%BC%82%23) `62.6K 🔥` `-70%`
1. [丈夫家暴妻子致死子女出具谅解书](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%AE%B6%E6%9A%B4%E5%A6%BB%E5%AD%90%E8%87%B4%E6%AD%BB%E5%AD%90%E5%A5%B3%E5%87%BA%E5%85%B7%E8%B0%85%E8%A7%A3%E4%B9%A6%23) `62.4K 🔥` `-75%`
1. [父女在商场遭人围堵4岁女儿被吓哭](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%A5%B3%E5%9C%A8%E5%95%86%E5%9C%BA%E9%81%AD%E4%BA%BA%E5%9B%B4%E5%A0%B54%E5%B2%81%E5%A5%B3%E5%84%BF%E8%A2%AB%E5%90%93%E5%93%AD%23) `62.4K 🔥` `-71%`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `62.4K 🔥` `-71%`
1. [司美格鲁肽成变质回流药重灾区](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E6%88%90%E5%8F%98%E8%B4%A8%E5%9B%9E%E6%B5%81%E8%8D%AF%E9%87%8D%E7%81%BE%E5%8C%BA%23) `62.3K 🔥` `-77%`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `62.3K 🔥` `-62%`
1. [爱情公寓 别试探了有市场](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%20%E5%88%AB%E8%AF%95%E6%8E%A2%E4%BA%86%E6%9C%89%E5%B8%82%E5%9C%BA%23) `62.1K 🔥` `-69%`
1. [黄子弘凡永久终止与声幻娱乐合作](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E6%B0%B8%E4%B9%85%E7%BB%88%E6%AD%A2%E4%B8%8E%E5%A3%B0%E5%B9%BB%E5%A8%B1%E4%B9%90%E5%90%88%E4%BD%9C%23) `62.1K 🔥` `-67%`
1. [不需要找关系就能进的好工作](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%BE%E5%85%B3%E7%B3%BB%E5%B0%B1%E8%83%BD%E8%BF%9B%E7%9A%84%E5%A5%BD%E5%B7%A5%E4%BD%9C%23) `62.0K 🔥` `-68%`
1. [北漂月薪一万五两顿花9块](https://s.weibo.com/weibo?q=%23%E5%8C%97%E6%BC%82%E6%9C%88%E8%96%AA%E4%B8%80%E4%B8%87%E4%BA%94%E4%B8%A4%E9%A1%BF%E8%8A%B19%E5%9D%97%23) `61.9K 🔥` `-63%`
1. [iG晋级S16](https://s.weibo.com/weibo?q=%23iG%E6%99%8B%E7%BA%A7S16%23) `61.8K 🔥` `-65%`
1. [深圳出租车111元车费强收400被查](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%87%BA%E7%A7%9F%E8%BD%A6111%E5%85%83%E8%BD%A6%E8%B4%B9%E5%BC%BA%E6%94%B6400%E8%A2%AB%E6%9F%A5%23) `61.7K 🔥` `-47%`
1. [亚运会中国队夺金日](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%A4%BA%E9%87%91%E6%97%A5%23) `61.6K 🔥` `-52%`
1. [杜翠雀不知道黄道婆很正常](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E7%BF%A0%E9%9B%80%E4%B8%8D%E7%9F%A5%E9%81%93%E9%BB%84%E9%81%93%E5%A9%86%E5%BE%88%E6%AD%A3%E5%B8%B8%23) `61.5K 🔥` `-50%`
1. [齐天太好听了](https://s.weibo.com/weibo?q=%23%E9%BD%90%E5%A4%A9%E5%A4%AA%E5%A5%BD%E5%90%AC%E4%BA%86%23) `61.5K 🔥` `-74%`
1. [张睿回应齐天舞台](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E5%9B%9E%E5%BA%94%E9%BD%90%E5%A4%A9%E8%88%9E%E5%8F%B0%23) `61.4K 🔥` `-62%`
1. [看亚运会开幕式被吓到了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%BC%80%E5%B9%95%E5%BC%8F%E8%A2%AB%E5%90%93%E5%88%B0%E4%BA%86%23) `61.3K 🔥` `-53%`
1. [苹果18出了爱情公寓聚会了](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C18%E5%87%BA%E4%BA%86%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E8%81%9A%E4%BC%9A%E4%BA%86%23) `61.2K 🔥` `-47%`
1. [被顾客用西瓜砸头摊主父亲发声](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%A1%BE%E5%AE%A2%E7%94%A8%E8%A5%BF%E7%93%9C%E7%A0%B8%E5%A4%B4%E6%91%8A%E4%B8%BB%E7%88%B6%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `61.2K 🔥` `-51%`
1. [王俊凯听粉丝大合唱听哭了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%90%AC%E7%B2%89%E4%B8%9D%E5%A4%A7%E5%90%88%E5%94%B1%E5%90%AC%E5%93%AD%E4%BA%86%23) `61.1K 🔥` `-53%`
1. [曝小米18Fold七天激活近8万台](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B0%8F%E7%B1%B318Fold%E4%B8%83%E5%A4%A9%E6%BF%80%E6%B4%BB%E8%BF%918%E4%B8%87%E5%8F%B0%23) `61.1K 🔥` `-71%`
1. [粉笔称前CEO素质低被辞退](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E7%A7%B0%E5%89%8DCEO%E7%B4%A0%E8%B4%A8%E4%BD%8E%E8%A2%AB%E8%BE%9E%E9%80%80%23) `61.0K 🔥` `-47%`
1. [布莱顿vs阿森纳](https://s.weibo.com/weibo?q=%23%E5%B8%83%E8%8E%B1%E9%A1%BFvs%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `60.9K 🔥` `-66%`
1. [Wei和TheShy赛后拥抱GALA](https://s.weibo.com/weibo?q=%23Wei%E5%92%8CTheShy%E8%B5%9B%E5%90%8E%E6%8B%A5%E6%8A%B1GALA%23) `60.8K 🔥` `-51%`

Updated at 2026-09-20 02:50:46

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
