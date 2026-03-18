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

1. [4S店回应拉黑吃饭超260次男子 (4S store responds to blacklisting man who ate more than 260 times)](https://s.weibo.com/weibo?q=%234S%E5%BA%97%E5%9B%9E%E5%BA%94%E6%8B%89%E9%BB%91%E5%90%83%E9%A5%AD%E8%B6%85260%E6%AC%A1%E7%94%B7%E5%AD%90%23) `1.1M 🔥` `NEW`
1. [齐本宫](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%9C%AC%E5%AE%AB%23) `746.0K 🔥` `NEW`
1. [全国春捂地图上线](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%98%A5%E6%8D%82%E5%9C%B0%E5%9B%BE%E4%B8%8A%E7%BA%BF%23) `737.2K 🔥` `NEW`
1. [半个娱乐圈女艺人安利隐身的名字](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E4%B8%AA%E5%A8%B1%E4%B9%90%E5%9C%88%E5%A5%B3%E8%89%BA%E4%BA%BA%E5%AE%89%E5%88%A9%E9%9A%90%E8%BA%AB%E7%9A%84%E5%90%8D%E5%AD%97%23) `732.4K 🔥` `NEW`
1. [伊朗总统证实情报部长遇害](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%AF%81%E5%AE%9E%E6%83%85%E6%8A%A5%E9%83%A8%E9%95%BF%E9%81%87%E5%AE%B3%23) `705.3K 🔥` `NEW`
1. [放了八年的香蕉](https://s.weibo.com/weibo?q=%23%E6%94%BE%E4%BA%86%E5%85%AB%E5%B9%B4%E7%9A%84%E9%A6%99%E8%95%89%23) `689.5K 🔥` `NEW`
1. [女子网红店等位3200多桌排到崩溃](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%BD%91%E7%BA%A2%E5%BA%97%E7%AD%89%E4%BD%8D3200%E5%A4%9A%E6%A1%8C%E6%8E%92%E5%88%B0%E5%B4%A9%E6%BA%83%23) `677.9K 🔥` `NEW`
1. [BLG对战G2](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98G2%23) `665.9K 🔥` `NEW`
1. [红糖姜汁](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E7%B3%96%E5%A7%9C%E6%B1%81%23) `234.3K 🔥` `NEW`
1. [新兵爸爸的饺子喂出了一个班的儿子](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%85%B5%E7%88%B8%E7%88%B8%E7%9A%84%E9%A5%BA%E5%AD%90%E5%96%82%E5%87%BA%E4%BA%86%E4%B8%80%E4%B8%AA%E7%8F%AD%E7%9A%84%E5%84%BF%E5%AD%90%23) `216.7K 🔥` `NEW`
1. [医生建议中午用晒太阳代替午休 (Doctors recommend taking a sunbath instead of taking a lunch break at noon)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%BB%BA%E8%AE%AE%E4%B8%AD%E5%8D%88%E7%94%A8%E6%99%92%E5%A4%AA%E9%98%B3%E4%BB%A3%E6%9B%BF%E5%8D%88%E4%BC%91%23) `144.8K 🔥` `NEW`
1. [方媛出发录制桃花坞6](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E5%87%BA%E5%8F%91%E5%BD%95%E5%88%B6%E6%A1%83%E8%8A%B1%E5%9D%9E6%23) `119.9K 🔥` `NEW`
1. [爷爷一手抱孙子肩膀上坐着小孙女](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%80%E6%89%8B%E6%8A%B1%E5%AD%99%E5%AD%90%E8%82%A9%E8%86%80%E4%B8%8A%E5%9D%90%E7%9D%80%E5%B0%8F%E5%AD%99%E5%A5%B3%23) `115.0K 🔥` `NEW`
1. [逐玉贺将军下线](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E8%B4%BA%E5%B0%86%E5%86%9B%E4%B8%8B%E7%BA%BF%23) `114.4K 🔥` `NEW`
1. [伊说中东三国石油设施成合法打击目标](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%AF%B4%E4%B8%AD%E4%B8%9C%E4%B8%89%E5%9B%BD%E7%9F%B3%E6%B2%B9%E8%AE%BE%E6%96%BD%E6%88%90%E5%90%88%E6%B3%95%E6%89%93%E5%87%BB%E7%9B%AE%E6%A0%87%23) `99.8K 🔥` `NEW`
1. [860元订酒店疑遭文字游戏退房却被拒](https://s.weibo.com/weibo?q=%23860%E5%85%83%E8%AE%A2%E9%85%92%E5%BA%97%E7%96%91%E9%81%AD%E6%96%87%E5%AD%97%E6%B8%B8%E6%88%8F%E9%80%80%E6%88%BF%E5%8D%B4%E8%A2%AB%E6%8B%92%23) `98.9K 🔥` `NEW`
1. [何穗称模特赛夺冠后4年基本没工作](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E7%A7%B0%E6%A8%A1%E7%89%B9%E8%B5%9B%E5%A4%BA%E5%86%A0%E5%90%8E4%E5%B9%B4%E5%9F%BA%E6%9C%AC%E6%B2%A1%E5%B7%A5%E4%BD%9C%23) `93.3K 🔥` `NEW`
1. [一个女儿和爸爸辩论视频火了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E5%A5%B3%E5%84%BF%E5%92%8C%E7%88%B8%E7%88%B8%E8%BE%A9%E8%AE%BA%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `91.8K 🔥` `NEW`
1. [结伴逃亡的汪汪队](https://s.weibo.com/weibo?q=%23%E7%BB%93%E4%BC%B4%E9%80%83%E4%BA%A1%E7%9A%84%E6%B1%AA%E6%B1%AA%E9%98%9F%23) `89.0K 🔥` `NEW`
1. [胖东来小方糖又卖断货了](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%B0%8F%E6%96%B9%E7%B3%96%E5%8F%88%E5%8D%96%E6%96%AD%E8%B4%A7%E4%BA%86%23) `87.3K 🔥` `NEW`
1. [伊朗石油工业设施遭袭 (Iran's oil industry facilities attacked)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9F%B3%E6%B2%B9%E5%B7%A5%E4%B8%9A%E8%AE%BE%E6%96%BD%E9%81%AD%E8%A2%AD%23) `83.9K 🔥` `NEW`
1. [菠萝和凤梨是啥关系](https://s.weibo.com/weibo?q=%23%E8%8F%A0%E8%90%9D%E5%92%8C%E5%87%A4%E6%A2%A8%E6%98%AF%E5%95%A5%E5%85%B3%E7%B3%BB%23) `82.3K 🔥` `NEW`
1. [698元海蓝之谜只有瓶子是真的](https://s.weibo.com/weibo?q=%23698%E5%85%83%E6%B5%B7%E8%93%9D%E4%B9%8B%E8%B0%9C%E5%8F%AA%E6%9C%89%E7%93%B6%E5%AD%90%E6%98%AF%E7%9C%9F%E7%9A%84%23) `721.8K 🔥` `+23%`
1. [美联储](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%23) `648.7K 🔥` `+236%`
1. [文科生的春天](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%A7%91%E7%94%9F%E7%9A%84%E6%98%A5%E5%A4%A9%23) `367.1K 🔥` `+35%`
1. [4月1日医保新规落地](https://s.weibo.com/weibo?q=%234%E6%9C%881%E6%97%A5%E5%8C%BB%E4%BF%9D%E6%96%B0%E8%A7%84%E8%90%BD%E5%9C%B0%23) `215.1K 🔥` `+44%`
1. [白玉兰官宣6月26日颁奖](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E5%AE%98%E5%AE%A36%E6%9C%8826%E6%97%A5%E9%A2%81%E5%A5%96%23) `130.8K 🔥` `+32%`
1. [徐若晗 挂脸](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%20%E6%8C%82%E8%84%B8%23) `648.8K 🔥`
1. [北斗导航机器挖坑在沙漠5秒种1棵树](https://s.weibo.com/weibo?q=%23%E5%8C%97%E6%96%97%E5%AF%BC%E8%88%AA%E6%9C%BA%E5%99%A8%E6%8C%96%E5%9D%91%E5%9C%A8%E6%B2%99%E6%BC%A05%E7%A7%92%E7%A7%8D1%E6%A3%B5%E6%A0%91%23) `605.0K 🔥`
1. [早期田曦薇 真人bjd](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%9C%9F%E7%94%B0%E6%9B%A6%E8%96%87%20%E7%9C%9F%E4%BA%BAbjd%23) `603.3K 🔥`
1. [赵丽颖直播 (Zhao Liying live broadcast)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%9B%B4%E6%92%AD%23) `275.6K 🔥`
1. [耀客AI演员 赵今麦翟子路](https://s.weibo.com/weibo?q=%23%E8%80%80%E5%AE%A2AI%E6%BC%94%E5%91%98%20%E8%B5%B5%E4%BB%8A%E9%BA%A6%E7%BF%9F%E5%AD%90%E8%B7%AF%23) `229.8K 🔥`
1. [客服笑了半个小时决定去仓库打人](https://s.weibo.com/weibo?q=%23%E5%AE%A2%E6%9C%8D%E7%AC%91%E4%BA%86%E5%8D%8A%E4%B8%AA%E5%B0%8F%E6%97%B6%E5%86%B3%E5%AE%9A%E5%8E%BB%E4%BB%93%E5%BA%93%E6%89%93%E4%BA%BA%23) `212.7K 🔥`
1. [福建一鸭子活吞41只小鸡](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E4%B8%80%E9%B8%AD%E5%AD%90%E6%B4%BB%E5%90%9E41%E5%8F%AA%E5%B0%8F%E9%B8%A1%23) `123.9K 🔥`
1. [容易让人长胖的睡前习惯](https://s.weibo.com/weibo?q=%23%E5%AE%B9%E6%98%93%E8%AE%A9%E4%BA%BA%E9%95%BF%E8%83%96%E7%9A%84%E7%9D%A1%E5%89%8D%E4%B9%A0%E6%83%AF%23) `106.9K 🔥`
1. [张凌赫 我和他都没演过长风渡](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E6%88%91%E5%92%8C%E4%BB%96%E9%83%BD%E6%B2%A1%E6%BC%94%E8%BF%87%E9%95%BF%E9%A3%8E%E6%B8%A1%23) `105.8K 🔥`
1. [檀健次 你们当没看到](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%20%E4%BD%A0%E4%BB%AC%E5%BD%93%E6%B2%A1%E7%9C%8B%E5%88%B0%23) `101.9K 🔥`
1. [联合国回应拉里贾尼遇害](https://s.weibo.com/weibo?q=%23%E8%81%94%E5%90%88%E5%9B%BD%E5%9B%9E%E5%BA%94%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%E9%81%87%E5%AE%B3%23) `82.0K 🔥`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `699.8K 🔥` `-33%`
1. [杨威回应杨阳洋成绩不好去香港读书](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A8%81%E5%9B%9E%E5%BA%94%E6%9D%A8%E9%98%B3%E6%B4%8B%E6%88%90%E7%BB%A9%E4%B8%8D%E5%A5%BD%E5%8E%BB%E9%A6%99%E6%B8%AF%E8%AF%BB%E4%B9%A6%23) `230.2K 🔥` `-28%`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `215.3K 🔥` `-37%`
1. [宁娘 皇后 (Ning Niang Queen)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%A8%98%20%E7%9A%87%E5%90%8E%23) `168.6K 🔥` `-72%`
1. [网友抵制AI演员 (Netizens boycott AI actors)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8A%B5%E5%88%B6AI%E6%BC%94%E5%91%98%23) `146.3K 🔥` `-28%`
1. [黄金怎么不涨反跌 (Why does gold fall instead of rising?)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E6%80%8E%E4%B9%88%E4%B8%8D%E6%B6%A8%E5%8F%8D%E8%B7%8C%23) `136.4K 🔥` `-77%`
1. [伊朗为拉里贾尼举行葬礼](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%BA%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%E4%B8%BE%E8%A1%8C%E8%91%AC%E7%A4%BC%23) `127.0K 🔥` `-78%`
1. [张凌赫田曦薇被cue经纪人梗的反应](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E8%A2%ABcue%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%A2%97%E7%9A%84%E5%8F%8D%E5%BA%94%23) `123.3K 🔥` `-79%`
1. [中国学生开始卷海外考公了 (Chinese students begin to take public exams overseas)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%AD%A6%E7%94%9F%E5%BC%80%E5%A7%8B%E5%8D%B7%E6%B5%B7%E5%A4%96%E8%80%83%E5%85%AC%E4%BA%86%23) `100.8K 🔥` `-86%`
1. [逐玉预告](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%A2%84%E5%91%8A%23) `98.1K 🔥` `-27%`
1. [美国特教女老师1天5次性侵男童](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%89%B9%E6%95%99%E5%A5%B3%E8%80%81%E5%B8%881%E5%A4%A95%E6%AC%A1%E6%80%A7%E4%BE%B5%E7%94%B7%E7%AB%A5%23) `92.7K 🔥` `-23%`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `87.0K 🔥` `-70%`

Updated at 2026-03-18 22:52:54

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
