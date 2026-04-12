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

1. [巧乐兹哈利波特打开快乐魔法入口 (Qolaoz Harry Potter opens the entrance to happy magic)](https://s.weibo.com/weibo?q=%23%E5%B7%A7%E4%B9%90%E5%85%B9%E5%93%88%E5%88%A9%E6%B3%A2%E7%89%B9%E6%89%93%E5%BC%80%E5%BF%AB%E4%B9%90%E9%AD%94%E6%B3%95%E5%85%A5%E5%8F%A3%23) `94.4K 🔥` `NEW`
1. [伊朗称美国找借口退出谈判](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E5%9B%BD%E6%89%BE%E5%80%9F%E5%8F%A3%E9%80%80%E5%87%BA%E8%B0%88%E5%88%A4%23) `62.4K 🔥` `NEW`
1. [IU新剧向男主求婚这段](https://s.weibo.com/weibo?q=%23IU%E6%96%B0%E5%89%A7%E5%90%91%E7%94%B7%E4%B8%BB%E6%B1%82%E5%A9%9A%E8%BF%99%E6%AE%B5%23) `43.1K 🔥` `NEW`
1. [浪姐](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `41.0K 🔥` `NEW`
1. [论整活还是得看常州](https://s.weibo.com/weibo?q=%23%E8%AE%BA%E6%95%B4%E6%B4%BB%E8%BF%98%E6%98%AF%E5%BE%97%E7%9C%8B%E5%B8%B8%E5%B7%9E%23) `40.1K 🔥` `NEW`
1. [DRG 备战2027](https://s.weibo.com/weibo?q=%23DRG%20%E5%A4%87%E6%88%982027%23) `40.1K 🔥` `NEW`
1. [脑雾](https://s.weibo.com/weibo?q=%23%E8%84%91%E9%9B%BE%23) `42.4K 🔥`
1. [钢铁森林 删吻戏](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%20%E5%88%A0%E5%90%BB%E6%88%8F%23) `41.0K 🔥`
1. [法官被曝在办公室猥亵离婚案当事人](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%AE%98%E8%A2%AB%E6%9B%9D%E5%9C%A8%E5%8A%9E%E5%85%AC%E5%AE%A4%E7%8C%A5%E4%BA%B5%E7%A6%BB%E5%A9%9A%E6%A1%88%E5%BD%93%E4%BA%8B%E4%BA%BA%23) `40.6K 🔥`
1. [TTG对战KSG (TTG vs. KSG)](https://s.weibo.com/weibo?q=%23TTG%E5%AF%B9%E6%88%98KSG%23) `40.3K 🔥`
1. [热刺 降级](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%88%BA%20%E9%99%8D%E7%BA%A7%23) `40.2K 🔥`
1. [郭碧婷生一胎的时候没备孕 (Guo Biting did not prepare for pregnancy when she gave birth to her first child)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E7%94%9F%E4%B8%80%E8%83%8E%E7%9A%84%E6%97%B6%E5%80%99%E6%B2%A1%E5%A4%87%E5%AD%95%23) `39.9K 🔥`
1. [妈妈辅导作业被气到引爆脑瘤](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E8%BE%85%E5%AF%BC%E4%BD%9C%E4%B8%9A%E8%A2%AB%E6%B0%94%E5%88%B0%E5%BC%95%E7%88%86%E8%84%91%E7%98%A4%23) `39.8K 🔥`
1. [花海阿豆抽签 (Huahai Adou lottery)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%B5%B7%E9%98%BF%E8%B1%86%E6%8A%BD%E7%AD%BE%23) `39.7K 🔥`
1. [普京和伊朗总统通话](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E5%92%8C%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E9%80%9A%E8%AF%9D%23) `39.2K 🔥`
1. [员工中了1500万彩票后直接离职 (Employee resigned immediately after winning 15 million yuan in lottery)](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E4%B8%AD%E4%BA%861500%E4%B8%87%E5%BD%A9%E7%A5%A8%E5%90%8E%E7%9B%B4%E6%8E%A5%E7%A6%BB%E8%81%8C%23) `413.3K 🔥` `-42%`
1. [网传浪姐7一公个人喜爱度排名](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%907%E4%B8%80%E5%85%AC%E4%B8%AA%E4%BA%BA%E5%96%9C%E7%88%B1%E5%BA%A6%E6%8E%92%E5%90%8D%23) `297.5K 🔥` `-41%`
1. [中国航天不断刷新宇宙级精彩](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E4%B8%8D%E6%96%AD%E5%88%B7%E6%96%B0%E5%AE%87%E5%AE%99%E7%BA%A7%E7%B2%BE%E5%BD%A9%23) `229.8K 🔥` `-42%`
1. [伊朗伊斯兰革命卫队海军发出警告](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BC%8A%E6%96%AF%E5%85%B0%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E6%B5%B7%E5%86%9B%E5%8F%91%E5%87%BA%E8%AD%A6%E5%91%8A%23) `70.5K 🔥` `-51%`
1. [张雪机车竞拍者拒绝加价500万转售](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%AB%9E%E6%8B%8D%E8%80%85%E6%8B%92%E7%BB%9D%E5%8A%A0%E4%BB%B7500%E4%B8%87%E8%BD%AC%E5%94%AE%23) `64.8K 🔥` `-52%`
1. [孙燕姿演唱会](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `63.9K 🔥` `-48%`
1. [白桃星座一周运势](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%A1%83%E6%98%9F%E5%BA%A7%E4%B8%80%E5%91%A8%E8%BF%90%E5%8A%BF%23) `63.3K 🔥` `-56%`
1. [钢铁森林大结局](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%E5%A4%A7%E7%BB%93%E5%B1%80%23) `60.3K 🔥` `-48%`
1. [柳致敏 (Liu Zhimin)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E8%87%B4%E6%95%8F%23) `54.9K 🔥` `-60%`
1. [女子遭法官猥亵16分钟录音曝光](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%81%AD%E6%B3%95%E5%AE%98%E7%8C%A5%E4%BA%B516%E5%88%86%E9%92%9F%E5%BD%95%E9%9F%B3%E6%9B%9D%E5%85%89%23) `54.4K 🔥` `-55%`
1. [李荣浩真转我五百了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E7%9C%9F%E8%BD%AC%E6%88%91%E4%BA%94%E7%99%BE%E4%BA%86%23) `53.8K 🔥` `-55%`
1. [赵子琪硬刚浪姐](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E7%A1%AC%E5%88%9A%E6%B5%AA%E5%A7%90%23) `53.4K 🔥` `-54%`
1. [王石 秦枫](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9F%B3%20%E7%A7%A6%E6%9E%AB%23) `52.4K 🔥` `-56%`
1. [王石否认被抓](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9F%B3%E5%90%A6%E8%AE%A4%E8%A2%AB%E6%8A%93%23) `52.2K 🔥` `-51%`
1. [浪姐二公分组曲目](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BA%8C%E5%85%AC%E5%88%86%E7%BB%84%E6%9B%B2%E7%9B%AE%23) `51.3K 🔥` `-39%`
1. [境外涉黄AI软件绕过监管流入国内](https://s.weibo.com/weibo?q=%23%E5%A2%83%E5%A4%96%E6%B6%89%E9%BB%84AI%E8%BD%AF%E4%BB%B6%E7%BB%95%E8%BF%87%E7%9B%91%E7%AE%A1%E6%B5%81%E5%85%A5%E5%9B%BD%E5%86%85%23) `50.2K 🔥` `-30%`
1. [官方回应为什么不能把杨柳树都砍了](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%83%BD%E6%8A%8A%E6%9D%A8%E6%9F%B3%E6%A0%91%E9%83%BD%E7%A0%8D%E4%BA%86%23) `47.9K 🔥` `-59%`
1. [王橹杰杀青 (Wang Lujie wraps up filming)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%9D%80%E9%9D%92%23) `42.6K 🔥` `-52%`
1. [何超蕸去世](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%95%B8%E5%8E%BB%E4%B8%96%23) `42.6K 🔥` `-60%`
1. [男子住48元宾馆身亡家属索赔被驳回 (Man’s family’s claim for death after staying in a 48-yuan hotel was rejected)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BD%8F48%E5%85%83%E5%AE%BE%E9%A6%86%E8%BA%AB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E7%B4%A2%E8%B5%94%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `42.5K 🔥` `-40%`
1. [孙子怕爷爷去世每天偷偷带肉回家](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AD%90%E6%80%95%E7%88%B7%E7%88%B7%E5%8E%BB%E4%B8%96%E6%AF%8F%E5%A4%A9%E5%81%B7%E5%81%B7%E5%B8%A6%E8%82%89%E5%9B%9E%E5%AE%B6%23) `42.2K 🔥` `-54%`
1. [点点回复钎城高仿号](https://s.weibo.com/weibo?q=%23%E7%82%B9%E7%82%B9%E5%9B%9E%E5%A4%8D%E9%92%8E%E5%9F%8E%E9%AB%98%E4%BB%BF%E5%8F%B7%23) `42.2K 🔥` `-36%`
1. [王濛的底气](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%9A%84%E5%BA%95%E6%B0%94%23) `41.3K 🔥` `-31%`
1. [脑雾到底是个啥](https://s.weibo.com/weibo?q=%23%E8%84%91%E9%9B%BE%E5%88%B0%E5%BA%95%E6%98%AF%E4%B8%AA%E5%95%A5%23) `41.2K 🔥` `-22%`
1. [伊朗接连回怼美国 (Iran attacks the United States one after another)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8E%A5%E8%BF%9E%E5%9B%9E%E6%80%BC%E7%BE%8E%E5%9B%BD%23) `41.1K 🔥` `-31%`
1. [张杰给鸟巢造了星空顶](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E7%BB%99%E9%B8%9F%E5%B7%A2%E9%80%A0%E4%BA%86%E6%98%9F%E7%A9%BA%E9%A1%B6%23) `40.8K 🔥` `-24%`
1. [央视曝光AI造黄产业链](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89AI%E9%80%A0%E9%BB%84%E4%BA%A7%E4%B8%9A%E9%93%BE%23) `40.7K 🔥` `-28%`
1. [老人私栓绳子致男孩气管全断裂](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%A7%81%E6%A0%93%E7%BB%B3%E5%AD%90%E8%87%B4%E7%94%B7%E5%AD%A9%E6%B0%94%E7%AE%A1%E5%85%A8%E6%96%AD%E8%A3%82%23) `40.6K 🔥` `-22%`
1. [伊朗称拦截美舰进入霍尔木兹海峡 (Iran says it intercepts US ship entering Strait of Hormuz)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E6%8B%A6%E6%88%AA%E7%BE%8E%E8%88%B0%E8%BF%9B%E5%85%A5%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `40.5K 🔥` `-31%`
1. [BLG战胜WBG (BLG defeated WBG)](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CWBG%23) `40.0K 🔥` `-67%`
1. [伊方说封锁伊朗无法让霍尔木兹海峡开放 (Iran says blocking Iran will not allow Strait of Hormuz to open)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%96%B9%E8%AF%B4%E5%B0%81%E9%94%81%E4%BC%8A%E6%9C%97%E6%97%A0%E6%B3%95%E8%AE%A9%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%BC%80%E6%94%BE%23) `39.6K 🔥` `-59%`
1. [郑丽文试乘小米汽车 (Zheng Liwen takes a test drive in a Xiaomi car)](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E8%AF%95%E4%B9%98%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%23) `39.5K 🔥` `-42%`
1. [钢铁森林水下吻神图](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%E6%B0%B4%E4%B8%8B%E5%90%BB%E7%A5%9E%E5%9B%BE%23) `39.4K 🔥` `-33%`
1. [AG打RW](https://s.weibo.com/weibo?q=%23AG%E6%89%93RW%23) `39.3K 🔥` `-68%`
1. [JDG DYG](https://s.weibo.com/weibo?q=%23JDG%20DYG%23) `39.1K 🔥` `-44%`
1. [辛纳首夺蒙特卡洛冠军](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E7%BA%B3%E9%A6%96%E5%A4%BA%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%E5%86%A0%E5%86%9B%23) `39.0K 🔥` `-56%`

Updated at 2026-04-13 01:38:45

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
