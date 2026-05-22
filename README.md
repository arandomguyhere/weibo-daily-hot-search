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

1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `13.5M 🔥` `NEW`
1. [浪姐排名](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `2.6M 🔥` `NEW`
1. [神舟二十三号已做好发射前各项准备](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%88%9F%E4%BA%8C%E5%8D%81%E4%B8%89%E5%8F%B7%E5%B7%B2%E5%81%9A%E5%A5%BD%E5%8F%91%E5%B0%84%E5%89%8D%E5%90%84%E9%A1%B9%E5%87%86%E5%A4%87%23) `2.4M 🔥` `NEW`
1. [庾澄庆淘汰](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E6%B7%98%E6%B1%B0%23) `2.3M 🔥` `NEW`
1. [上班不会为工位花一分钱](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E4%B8%8D%E4%BC%9A%E4%B8%BA%E5%B7%A5%E4%BD%8D%E8%8A%B1%E4%B8%80%E5%88%86%E9%92%B1%23) `2.3M 🔥` `NEW`
1. [窦靖童 王菲的声音唱窦唯](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%20%E7%8E%8B%E8%8F%B2%E7%9A%84%E5%A3%B0%E9%9F%B3%E5%94%B1%E7%AA%A6%E5%94%AF%23) `2.3M 🔥` `NEW`
1. [我年龄大到能看懂这张图](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B9%B4%E9%BE%84%E5%A4%A7%E5%88%B0%E8%83%BD%E7%9C%8B%E6%87%82%E8%BF%99%E5%BC%A0%E5%9B%BE%23) `2.3M 🔥` `NEW`
1. [上班被领导兜底的含金量](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E8%A2%AB%E9%A2%86%E5%AF%BC%E5%85%9C%E5%BA%95%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `2.3M 🔥` `NEW`
1. [富途控股拟被罚18.5亿元](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E9%80%94%E6%8E%A7%E8%82%A1%E6%8B%9F%E8%A2%AB%E7%BD%9A18.5%E4%BA%BF%E5%85%83%23) `2.3M 🔥` `NEW`
1. [证监会拟对老虎富途长桥严厉处罚](https://s.weibo.com/weibo?q=%23%E8%AF%81%E7%9B%91%E4%BC%9A%E6%8B%9F%E5%AF%B9%E8%80%81%E8%99%8E%E5%AF%8C%E9%80%94%E9%95%BF%E6%A1%A5%E4%B8%A5%E5%8E%89%E5%A4%84%E7%BD%9A%23) `2.3M 🔥` `NEW`
1. [结石姐 歌手袭榜 (Sister Jie Shi, singer hits the list)](https://s.weibo.com/weibo?q=%23%E7%BB%93%E7%9F%B3%E5%A7%90%20%E6%AD%8C%E6%89%8B%E8%A2%AD%E6%A6%9C%23) `2.2M 🔥` `NEW`
1. [伊能静 我在妻旅才是乘风破浪](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%20%E6%88%91%E5%9C%A8%E5%A6%BB%E6%97%85%E6%89%8D%E6%98%AF%E4%B9%98%E9%A3%8E%E7%A0%B4%E6%B5%AA%23) `2.2M 🔥` `NEW`
1. [丈夫高调宣布出轨有私生子妻子崩溃](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E9%AB%98%E8%B0%83%E5%AE%A3%E5%B8%83%E5%87%BA%E8%BD%A8%E6%9C%89%E7%A7%81%E7%94%9F%E5%AD%90%E5%A6%BB%E5%AD%90%E5%B4%A9%E6%BA%83%23) `2.2M 🔥` `NEW`
1. [惊鸿一面 夯](https://s.weibo.com/weibo?q=%23%E6%83%8A%E9%B8%BF%E4%B8%80%E9%9D%A2%20%E5%A4%AF%23) `2.2M 🔥` `NEW`
1. [上海男篮淘汰北京男篮](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B7%E7%AF%AE%E6%B7%98%E6%B1%B0%E5%8C%97%E4%BA%AC%E7%94%B7%E7%AF%AE%23) `2.2M 🔥` `NEW`
1. [跑男收视率](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%94%B6%E8%A7%86%E7%8E%87%23) `2.2M 🔥` `NEW`
1. [长沙暴雨](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E6%9A%B4%E9%9B%A8%23) `2.2M 🔥` `NEW`
1. [大爷穿着自己编织的蓑衣卖樱桃](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E7%A9%BF%E7%9D%80%E8%87%AA%E5%B7%B1%E7%BC%96%E7%BB%87%E7%9A%84%E8%93%91%E8%A1%A3%E5%8D%96%E6%A8%B1%E6%A1%83%23) `2.2M 🔥` `NEW`
1. [泰国长公主昏迷近3年半后病情恶化](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E9%95%BF%E5%85%AC%E4%B8%BB%E6%98%8F%E8%BF%B7%E8%BF%913%E5%B9%B4%E5%8D%8A%E5%90%8E%E7%97%85%E6%83%85%E6%81%B6%E5%8C%96%23) `2.2M 🔥` `NEW`
1. [第一次爱的人 全场最佳](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%88%B1%E7%9A%84%E4%BA%BA%20%E5%85%A8%E5%9C%BA%E6%9C%80%E4%BD%B3%23) `2.1M 🔥` `NEW`
1. [窦靖童演唱那英从头哭到尾 (Dou Jingtong sang Na Ying and cried from beginning to end)](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%BC%94%E5%94%B1%E9%82%A3%E8%8B%B1%E4%BB%8E%E5%A4%B4%E5%93%AD%E5%88%B0%E5%B0%BE%23) `2.1M 🔥` `NEW`
1. [iPhone17系列降价后销量](https://s.weibo.com/weibo?q=%23iPhone17%E7%B3%BB%E5%88%97%E9%99%8D%E4%BB%B7%E5%90%8E%E9%94%80%E9%87%8F%23) `2.1M 🔥` `NEW`
1. [浪姐淘汰](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%B7%98%E6%B1%B0%23) `2.1M 🔥` `NEW`
1. [胡彦斌破音](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E7%A0%B4%E9%9F%B3%23) `2.1M 🔥` `NEW`
1. [突然理解自己为什么会高物欲了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E8%87%AA%E5%B7%B1%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E9%AB%98%E7%89%A9%E6%AC%B2%E4%BA%86%23) `2.1M 🔥` `NEW`
1. [上海男篮3比1北京男篮](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B7%E7%AF%AE3%E6%AF%941%E5%8C%97%E4%BA%AC%E7%94%B7%E7%AF%AE%23) `2.1M 🔥` `NEW`
1. [凑热闹 喷麦](https://s.weibo.com/weibo?q=%23%E5%87%91%E7%83%AD%E9%97%B9%20%E5%96%B7%E9%BA%A6%23) `2.1M 🔥` `NEW`
1. [庾澄庆合伙人](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E5%90%88%E4%BC%99%E4%BA%BA%23) `2.0M 🔥` `NEW`
1. [小猫臂力惊人 肚肚逼人](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%87%82%E5%8A%9B%E6%83%8A%E4%BA%BA%20%E8%82%9A%E8%82%9A%E9%80%BC%E4%BA%BA%23) `2.0M 🔥` `NEW`
1. [美退役海军中将受访画面引争议](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%80%80%E5%BD%B9%E6%B5%B7%E5%86%9B%E4%B8%AD%E5%B0%86%E5%8F%97%E8%AE%BF%E7%94%BB%E9%9D%A2%E5%BC%95%E4%BA%89%E8%AE%AE%23) `2.0M 🔥` `NEW`
1. [伦敦世乒赛46名选手不败 (46 players are undefeated at World Table Tennis Championships in London)](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B46%E5%90%8D%E9%80%89%E6%89%8B%E4%B8%8D%E8%B4%A5%23) `2.0M 🔥` `NEW`
1. [张碧晨 炸场子](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%20%E7%82%B8%E5%9C%BA%E5%AD%90%23) `2.0M 🔥` `NEW`
1. [范丞丞让尤长靖拿第三名](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%AE%A9%E5%B0%A4%E9%95%BF%E9%9D%96%E6%8B%BF%E7%AC%AC%E4%B8%89%E5%90%8D%23) `2.0M 🔥` `NEW`
1. [年轻人开始全款买房意味着什么](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%85%A8%E6%AC%BE%E4%B9%B0%E6%88%BF%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `2.0M 🔥` `NEW`
1. [歌手直播](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%23) `2.0M 🔥` `NEW`
1. [窦颖给窦靖童和声](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%A2%96%E7%BB%99%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%92%8C%E5%A3%B0%23) `2.0M 🔥` `NEW`
1. [美国18岁少女遭生父性侵后自杀](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD18%E5%B2%81%E5%B0%91%E5%A5%B3%E9%81%AD%E7%94%9F%E7%88%B6%E6%80%A7%E4%BE%B5%E5%90%8E%E8%87%AA%E6%9D%80%23) `1.9M 🔥` `NEW`
1. [张月团倒数第一](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%9B%A2%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%23) `1.9M 🔥` `NEW`
1. [尤长靖把我唱哭了](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E9%95%BF%E9%9D%96%E6%8A%8A%E6%88%91%E5%94%B1%E5%93%AD%E4%BA%86%23) `1.9M 🔥` `NEW`
1. [iPhone哪个材质手感最好](https://s.weibo.com/weibo?q=%23iPhone%E5%93%AA%E4%B8%AA%E6%9D%90%E8%B4%A8%E6%89%8B%E6%84%9F%E6%9C%80%E5%A5%BD%23) `1.9M 🔥` `NEW`
1. [歌手弹幕 隔壁唱得好看跳得好听 (Singer barrage: The neighbor next door sings and dances beautifully)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E5%BC%B9%E5%B9%95%20%E9%9A%94%E5%A3%81%E5%94%B1%E5%BE%97%E5%A5%BD%E7%9C%8B%E8%B7%B3%E5%BE%97%E5%A5%BD%E5%90%AC%23) `1.9M 🔥` `NEW`
1. [实探天津高空跳伞2人遇难现场](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E6%8E%A2%E5%A4%A9%E6%B4%A5%E9%AB%98%E7%A9%BA%E8%B7%B3%E4%BC%9E2%E4%BA%BA%E9%81%87%E9%9A%BE%E7%8E%B0%E5%9C%BA%23) `1.9M 🔥` `NEW`
1. [张月完全女团来的](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%AE%8C%E5%85%A8%E5%A5%B3%E5%9B%A2%E6%9D%A5%E7%9A%84%23) `1.9M 🔥` `NEW`
1. [收视率](https://s.weibo.com/weibo?q=%23%E6%94%B6%E8%A7%86%E7%8E%87%23) `1.9M 🔥` `NEW`
1. [工行向25年前被贷款男子道歉](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E8%A1%8C%E5%90%9125%E5%B9%B4%E5%89%8D%E8%A2%AB%E8%B4%B7%E6%AC%BE%E7%94%B7%E5%AD%90%E9%81%93%E6%AD%89%23) `1.9M 🔥` `NEW`
1. [井胧井迪龙凤胎姐弟相拥惹热议](https://s.weibo.com/weibo?q=%23%E4%BA%95%E8%83%A7%E4%BA%95%E8%BF%AA%E9%BE%99%E5%87%A4%E8%83%8E%E5%A7%90%E5%BC%9F%E7%9B%B8%E6%8B%A5%E6%83%B9%E7%83%AD%E8%AE%AE%23) `1.8M 🔥` `NEW`
1. [耳帝长评歌手](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%E9%95%BF%E8%AF%84%E6%AD%8C%E6%89%8B%23) `1.8M 🔥` `NEW`
1. [比亚迪重大技术即将发布](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E9%87%8D%E5%A4%A7%E6%8A%80%E6%9C%AF%E5%8D%B3%E5%B0%86%E5%8F%91%E5%B8%83%23) `1.8M 🔥` `NEW`
1. [一小伙儿爆砸充电完不走车辆](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B0%8F%E4%BC%99%E5%84%BF%E7%88%86%E7%A0%B8%E5%85%85%E7%94%B5%E5%AE%8C%E4%B8%8D%E8%B5%B0%E8%BD%A6%E8%BE%86%23) `1.8M 🔥` `NEW`
1. [CBA](https://s.weibo.com/weibo?q=%23CBA%23) `1.8M 🔥` `NEW`

Updated at 2026-05-23 00:05:00

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
