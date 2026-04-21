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

1. [超级地震或致日本国家崩塌 (Super earthquake may cause Japan to collapse)](https://s.weibo.com/weibo?q=%23%E8%B6%85%E7%BA%A7%E5%9C%B0%E9%9C%87%E6%88%96%E8%87%B4%E6%97%A5%E6%9C%AC%E5%9B%BD%E5%AE%B6%E5%B4%A9%E5%A1%8C%23) `1.5M 🔥` `NEW`
1. [爱奇艺CEO龚宇发声](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BACEO%E9%BE%9A%E5%AE%87%E5%8F%91%E5%A3%B0%23) `1.0M 🔥` `NEW`
1. [42种图书入选2025年度中国好书](https://s.weibo.com/weibo?q=%2342%E7%A7%8D%E5%9B%BE%E4%B9%A6%E5%85%A5%E9%80%892025%E5%B9%B4%E5%BA%A6%E4%B8%AD%E5%9B%BD%E5%A5%BD%E4%B9%A6%23) `976.5K 🔥` `NEW`
1. [工资高但是很孤独的工作](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E8%B5%84%E9%AB%98%E4%BD%86%E6%98%AF%E5%BE%88%E5%AD%A4%E7%8B%AC%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `971.1K 🔥` `NEW`
1. [新疆的作息时间太适合年轻人了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E7%9A%84%E4%BD%9C%E6%81%AF%E6%97%B6%E9%97%B4%E5%A4%AA%E9%80%82%E5%90%88%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%BA%86%23) `965.4K 🔥` `NEW`
1. [当财务去看演唱会](https://s.weibo.com/weibo?q=%23%E5%BD%93%E8%B4%A2%E5%8A%A1%E5%8E%BB%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `953.5K 🔥` `NEW`
1. [县城农村成了AB货重灾区](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%9F%8E%E5%86%9C%E6%9D%91%E6%88%90%E4%BA%86AB%E8%B4%A7%E9%87%8D%E7%81%BE%E5%8C%BA%23) `876.7K 🔥` `NEW`
1. [靖国神社究竟供奉什么鬼](https://s.weibo.com/weibo?q=%23%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%E7%A9%B6%E7%AB%9F%E4%BE%9B%E5%A5%89%E4%BB%80%E4%B9%88%E9%AC%BC%23) `866.4K 🔥` `NEW`
1. [窈窈有期 硬刚爱奇艺](https://s.weibo.com/weibo?q=%23%E7%AA%88%E7%AA%88%E6%9C%89%E6%9C%9F%20%E7%A1%AC%E5%88%9A%E7%88%B1%E5%A5%87%E8%89%BA%23) `860.1K 🔥` `NEW`
1. [宋承炫宣布当爸](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%89%BF%E7%82%AB%E5%AE%A3%E5%B8%83%E5%BD%93%E7%88%B8%23) `854.1K 🔥` `NEW`
1. [A股 (A shares)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `847.9K 🔥` `NEW`
1. [月鳞绮纪鞠婧祎戏服卖掉了](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%88%8F%E6%9C%8D%E5%8D%96%E6%8E%89%E4%BA%86%23) `846.9K 🔥` `NEW`
1. [SK回应女孩挪用上千万打赏主播](https://s.weibo.com/weibo?q=%23SK%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%A9%E6%8C%AA%E7%94%A8%E4%B8%8A%E5%8D%83%E4%B8%87%E6%89%93%E8%B5%8F%E4%B8%BB%E6%92%AD%23) `837.1K 🔥` `NEW`
1. [孙俪儿子画个妆直接能演甄嬛了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%84%BF%E5%AD%90%E7%94%BB%E4%B8%AA%E5%A6%86%E7%9B%B4%E6%8E%A5%E8%83%BD%E6%BC%94%E7%94%84%E5%AC%9B%E4%BA%86%23) `780.5K 🔥` `NEW`
1. [警方回应驴友发现2个无主背包](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E9%A9%B4%E5%8F%8B%E5%8F%91%E7%8E%B02%E4%B8%AA%E6%97%A0%E4%B8%BB%E8%83%8C%E5%8C%85%23) `684.3K 🔥` `NEW`
1. [郑秀文好爱许志安](https://s.weibo.com/weibo?q=%23%E9%83%91%E7%A7%80%E6%96%87%E5%A5%BD%E7%88%B1%E8%AE%B8%E5%BF%97%E5%AE%89%23) `671.1K 🔥` `NEW`
1. [NBA](https://s.weibo.com/weibo?q=%23NBA%23) `661.3K 🔥` `NEW`
1. [演戏 要有血有肉真情实感](https://s.weibo.com/weibo?q=%23%E6%BC%94%E6%88%8F%20%E8%A6%81%E6%9C%89%E8%A1%80%E6%9C%89%E8%82%89%E7%9C%9F%E6%83%85%E5%AE%9E%E6%84%9F%23) `645.2K 🔥` `NEW`
1. [F1紧急改规则](https://s.weibo.com/weibo?q=%23F1%E7%B4%A7%E6%80%A5%E6%94%B9%E8%A7%84%E5%88%99%23) `631.9K 🔥` `NEW`
1. [林高远从乒乓球网球到匹克球](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%AB%98%E8%BF%9C%E4%BB%8E%E4%B9%92%E4%B9%93%E7%90%83%E7%BD%91%E7%90%83%E5%88%B0%E5%8C%B9%E5%85%8B%E7%90%83%23) `628.8K 🔥` `NEW`
1. [森林狼vs掘金 (Timberwolves vs Nuggets)](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E7%8B%BCvs%E6%8E%98%E9%87%91%23) `605.6K 🔥` `NEW`
1. [余承东回应Pura90橘子海配色](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%9B%9E%E5%BA%94Pura90%E6%A9%98%E5%AD%90%E6%B5%B7%E9%85%8D%E8%89%B2%23) `586.6K 🔥` `NEW`
1. [小米澎湃OS3核心升级汇总](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E6%B9%83OS3%E6%A0%B8%E5%BF%83%E5%8D%87%E7%BA%A7%E6%B1%87%E6%80%BB%23) `572.9K 🔥` `NEW`
1. [邱淑贞母女和工藤静香母女同框](https://s.weibo.com/weibo?q=%23%E9%82%B1%E6%B7%91%E8%B4%9E%E6%AF%8D%E5%A5%B3%E5%92%8C%E5%B7%A5%E8%97%A4%E9%9D%99%E9%A6%99%E6%AF%8D%E5%A5%B3%E5%90%8C%E6%A1%86%23) `419.9K 🔥` `NEW`
1. [男子婚内中5340万转一女子2100万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%A9%9A%E5%86%85%E4%B8%AD5340%E4%B8%87%E8%BD%AC%E4%B8%80%E5%A5%B3%E5%AD%902100%E4%B8%87%23) `383.4K 🔥` `NEW`
1. [爱奇艺 西贝](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%20%E8%A5%BF%E8%B4%9D%23) `339.7K 🔥` `NEW`
1. [李小冉50岁状态我P都不敢P](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%8950%E5%B2%81%E7%8A%B6%E6%80%81%E6%88%91P%E9%83%BD%E4%B8%8D%E6%95%A2P%23) `329.5K 🔥` `NEW`
1. [伊朗用特朗普方式对付特朗普](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%94%A8%E7%89%B9%E6%9C%97%E6%99%AE%E6%96%B9%E5%BC%8F%E5%AF%B9%E4%BB%98%E7%89%B9%E6%9C%97%E6%99%AE%23) `291.7K 🔥` `NEW`
1. [张翰就医后前往移民局](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BF%B0%E5%B0%B1%E5%8C%BB%E5%90%8E%E5%89%8D%E5%BE%80%E7%A7%BB%E6%B0%91%E5%B1%80%23) `291.4K 🔥` `NEW`
1. [日本故意撕开中国伤疤](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%95%85%E6%84%8F%E6%92%95%E5%BC%80%E4%B8%AD%E5%9B%BD%E4%BC%A4%E7%96%A4%23) `288.8K 🔥` `NEW`
1. [日本女主播遇7.7级地震一秒变脸 (Japanese female anchor's face changed in one second when she was hit by a 7.7-magnitude earthquake)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E4%B8%BB%E6%92%AD%E9%81%877.7%E7%BA%A7%E5%9C%B0%E9%9C%87%E4%B8%80%E7%A7%92%E5%8F%98%E8%84%B8%23) `271.8K 🔥` `NEW`
1. [鱼第一次享受到了人工服务](https://s.weibo.com/weibo?q=%23%E9%B1%BC%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%BA%AB%E5%8F%97%E5%88%B0%E4%BA%86%E4%BA%BA%E5%B7%A5%E6%9C%8D%E5%8A%A1%23) `268.4K 🔥` `NEW`
1. [2026挑战者杯定妆照](https://s.weibo.com/weibo?q=%232026%E6%8C%91%E6%88%98%E8%80%85%E6%9D%AF%E5%AE%9A%E5%A6%86%E7%85%A7%23) `219.5K 🔥` `NEW`
1. [一诺登场KPL八周年](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E7%99%BB%E5%9C%BAKPL%E5%85%AB%E5%91%A8%E5%B9%B4%23) `217.9K 🔥` `NEW`
1. [杜兰特膝伤因训练中拼抢地板球](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%85%B0%E7%89%B9%E8%86%9D%E4%BC%A4%E5%9B%A0%E8%AE%AD%E7%BB%83%E4%B8%AD%E6%8B%BC%E6%8A%A2%E5%9C%B0%E6%9D%BF%E7%90%83%23) `209.5K 🔥` `NEW`
1. [余承东称Pura90PM不贴膜放心用](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E7%A7%B0Pura90PM%E4%B8%8D%E8%B4%B4%E8%86%9C%E6%94%BE%E5%BF%83%E7%94%A8%23) `204.3K 🔥` `NEW`
1. [上京东买OPPO演唱会神器抽门票](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%AC%E4%B8%9C%E4%B9%B0OPPO%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%9E%E5%99%A8%E6%8A%BD%E9%97%A8%E7%A5%A8%23) `974.1K 🔥` `+32%`
1. [库克不再担任苹果CEO (Cook no longer serves as Apple CEO)](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%85%8B%E4%B8%8D%E5%86%8D%E6%8B%85%E4%BB%BB%E8%8B%B9%E6%9E%9CCEO%23) `869.4K 🔥` `+552%`
1. [Liz不归还赞助的裤子引发争议](https://s.weibo.com/weibo?q=%23Liz%E4%B8%8D%E5%BD%92%E8%BF%98%E8%B5%9E%E5%8A%A9%E7%9A%84%E8%A3%A4%E5%AD%90%E5%BC%95%E5%8F%91%E4%BA%89%E8%AE%AE%23) `832.8K 🔥` `+119%`
1. [列车上得知儿子离世大叔孙女未成年](https://s.weibo.com/weibo?q=%23%E5%88%97%E8%BD%A6%E4%B8%8A%E5%BE%97%E7%9F%A5%E5%84%BF%E5%AD%90%E7%A6%BB%E4%B8%96%E5%A4%A7%E5%8F%94%E5%AD%99%E5%A5%B3%E6%9C%AA%E6%88%90%E5%B9%B4%23) `729.6K 🔥` `+73%`
1. [鹿晗工作室](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `683.2K 🔥` `+53%`
1. [折叠iPhone手机壳曝光 (Folding iPhone case exposed)](https://s.weibo.com/weibo?q=%23%E6%8A%98%E5%8F%A0iPhone%E6%89%8B%E6%9C%BA%E5%A3%B3%E6%9B%9D%E5%85%89%23) `592.0K 🔥` `+59%`
1. [曝某艺人需要助理穿袜子](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90%E8%89%BA%E4%BA%BA%E9%9C%80%E8%A6%81%E5%8A%A9%E7%90%86%E7%A9%BF%E8%A2%9C%E5%AD%90%23) `562.0K 🔥` `+52%`
1. [李小冉说我50了根本记不住](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E8%AF%B4%E6%88%9150%E4%BA%86%E6%A0%B9%E6%9C%AC%E8%AE%B0%E4%B8%8D%E4%BD%8F%23) `488.6K 🔥` `+22%`
1. [谷爱凌德约科维奇主持秀中文](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%BE%B7%E7%BA%A6%E7%A7%91%E7%BB%B4%E5%A5%87%E4%B8%BB%E6%8C%81%E7%A7%80%E4%B8%AD%E6%96%87%23) `212.7K 🔥` `+41%`
1. [苹果新任CEO特努斯是谁](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%96%B0%E4%BB%BBCEO%E7%89%B9%E5%8A%AA%E6%96%AF%E6%98%AF%E8%B0%81%23) `872.1K 🔥`
1. [女子虐死男友3岁儿子被判死缓](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%99%90%E6%AD%BB%E7%94%B7%E5%8F%8B3%E5%B2%81%E5%84%BF%E5%AD%90%E8%A2%AB%E5%88%A4%E6%AD%BB%E7%BC%93%23) `435.5K 🔥`
1. [宋旻浩出庭](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%97%BB%E6%B5%A9%E5%87%BA%E5%BA%AD%23) `284.8K 🔥` `-25%`
1. [李雨桐疑似回应被行拘](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%A8%E6%A1%90%E7%96%91%E4%BC%BC%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `227.0K 🔥` `-38%`
1. [国乒世乒赛出征特别节目 (Special program for National Table Tennis Championships and World Table Tennis Championships)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E4%B8%96%E4%B9%92%E8%B5%9B%E5%87%BA%E5%BE%81%E7%89%B9%E5%88%AB%E8%8A%82%E7%9B%AE%23) `224.4K 🔥` `-38%`

Updated at 2026-04-21 13:15:27

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
