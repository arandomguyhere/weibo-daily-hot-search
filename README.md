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

1. [楼上百日宴楼下婚宴女当事人长文回应](https://s.weibo.com/weibo?q=%23%E6%A5%BC%E4%B8%8A%E7%99%BE%E6%97%A5%E5%AE%B4%E6%A5%BC%E4%B8%8B%E5%A9%9A%E5%AE%B4%E5%A5%B3%E5%BD%93%E4%BA%8B%E4%BA%BA%E9%95%BF%E6%96%87%E5%9B%9E%E5%BA%94%23) `2.3M 🔥` `NEW`
1. [腾讯打算拿什么撬动红果近2亿日活](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E6%89%93%E7%AE%97%E6%8B%BF%E4%BB%80%E4%B9%88%E6%92%AC%E5%8A%A8%E7%BA%A2%E6%9E%9C%E8%BF%912%E4%BA%BF%E6%97%A5%E6%B4%BB%23) `1.4M 🔥` `NEW`
1. [红星照耀中国](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%98%9F%E7%85%A7%E8%80%80%E4%B8%AD%E5%9B%BD%23) `1.3M 🔥` `NEW`
1. [比亚迪大汉23.59万起上市](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%A4%A7%E6%B1%8923.59%E4%B8%87%E8%B5%B7%E4%B8%8A%E5%B8%82%23) `1.2M 🔥` `NEW`
1. [百日宴女方当事人讲述事情经过](https://s.weibo.com/weibo?q=%23%E7%99%BE%E6%97%A5%E5%AE%B4%E5%A5%B3%E6%96%B9%E5%BD%93%E4%BA%8B%E4%BA%BA%E8%AE%B2%E8%BF%B0%E4%BA%8B%E6%83%85%E7%BB%8F%E8%BF%87%23) `1.1M 🔥` `NEW`
1. [成本8万AI影片能胜院线大制作](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%9C%AC8%E4%B8%87AI%E5%BD%B1%E7%89%87%E8%83%BD%E8%83%9C%E9%99%A2%E7%BA%BF%E5%A4%A7%E5%88%B6%E4%BD%9C%23) `839.6K 🔥` `NEW`
1. [35楼坠楼女子全身器官基本恢复](https://s.weibo.com/weibo?q=%2335%E6%A5%BC%E5%9D%A0%E6%A5%BC%E5%A5%B3%E5%AD%90%E5%85%A8%E8%BA%AB%E5%99%A8%E5%AE%98%E5%9F%BA%E6%9C%AC%E6%81%A2%E5%A4%8D%23) `697.7K 🔥` `NEW`
1. [熬夜对人最直观的影响](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E5%AF%B9%E4%BA%BA%E6%9C%80%E7%9B%B4%E8%A7%82%E7%9A%84%E5%BD%B1%E5%93%8D%23) `621.4K 🔥` `NEW`
1. [舒客广告跟8个男人接吻被罚50万](https://s.weibo.com/weibo?q=%23%E8%88%92%E5%AE%A2%E5%B9%BF%E5%91%8A%E8%B7%9F8%E4%B8%AA%E7%94%B7%E4%BA%BA%E6%8E%A5%E5%90%BB%E8%A2%AB%E7%BD%9A50%E4%B8%87%23) `416.1K 🔥` `NEW`
1. [金晨自曝刚交完学费学校倒闭了](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E8%87%AA%E6%9B%9D%E5%88%9A%E4%BA%A4%E5%AE%8C%E5%AD%A6%E8%B4%B9%E5%AD%A6%E6%A0%A1%E5%80%92%E9%97%AD%E4%BA%86%23) `404.8K 🔥` `NEW`
1. [曝胡先煦李宛妲买房](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%83%A1%E5%85%88%E7%85%A6%E6%9D%8E%E5%AE%9B%E5%A6%B2%E4%B9%B0%E6%88%BF%23) `403.5K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `392.5K 🔥` `NEW`
1. [多恶毒才会在婚礼礼炮上做手脚](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%81%B6%E6%AF%92%E6%89%8D%E4%BC%9A%E5%9C%A8%E5%A9%9A%E7%A4%BC%E7%A4%BC%E7%82%AE%E4%B8%8A%E5%81%9A%E6%89%8B%E8%84%9A%23) `381.6K 🔥` `NEW`
1. [曝金鸡奖最佳女主角提名名单](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%87%91%E9%B8%A1%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E8%A7%92%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `379.2K 🔥` `NEW`
1. [郑钦文爸爸是大多数中国式家长](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%88%B8%E7%88%B8%E6%98%AF%E5%A4%A7%E5%A4%9A%E6%95%B0%E4%B8%AD%E5%9B%BD%E5%BC%8F%E5%AE%B6%E9%95%BF%23) `363.8K 🔥` `NEW`
1. [国台办回应蔡康永现身沈伯洋竞选活动](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%E8%94%A1%E5%BA%B7%E6%B0%B8%E7%8E%B0%E8%BA%AB%E6%B2%88%E4%BC%AF%E6%B4%8B%E7%AB%9E%E9%80%89%E6%B4%BB%E5%8A%A8%23) `323.1K 🔥` `NEW`
1. [官方通报女子高铁和男友开免提通话](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E9%AB%98%E9%93%81%E5%92%8C%E7%94%B7%E5%8F%8B%E5%BC%80%E5%85%8D%E6%8F%90%E9%80%9A%E8%AF%9D%23) `303.8K 🔥` `NEW`
1. [楼上百日宴楼下婚宴事件当事人发声](https://s.weibo.com/weibo?q=%23%E6%A5%BC%E4%B8%8A%E7%99%BE%E6%97%A5%E5%AE%B4%E6%A5%BC%E4%B8%8B%E5%A9%9A%E5%AE%B4%E4%BA%8B%E4%BB%B6%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `269.8K 🔥` `NEW`
1. [赚钱不行大概率搞不定家庭](https://s.weibo.com/weibo?q=%23%E8%B5%9A%E9%92%B1%E4%B8%8D%E8%A1%8C%E5%A4%A7%E6%A6%82%E7%8E%87%E6%90%9E%E4%B8%8D%E5%AE%9A%E5%AE%B6%E5%BA%AD%23) `268.6K 🔥` `NEW`
1. [田馥甄你当我这是什么直播](https://s.weibo.com/weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E4%BD%A0%E5%BD%93%E6%88%91%E8%BF%99%E6%98%AF%E4%BB%80%E4%B9%88%E7%9B%B4%E6%92%AD%23) `264.3K 🔥` `NEW`
1. [杨瀚森末节4分6板1助](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E6%9C%AB%E8%8A%824%E5%88%866%E6%9D%BF1%E5%8A%A9%23) `260.7K 🔥` `NEW`
1. [我军匕首枪曝光](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%86%9B%E5%8C%95%E9%A6%96%E6%9E%AA%E6%9B%9D%E5%85%89%23) `223.1K 🔥` `NEW`
1. [常年熬夜的人会有什么变化](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%B9%B4%E7%86%AC%E5%A4%9C%E7%9A%84%E4%BA%BA%E4%BC%9A%E6%9C%89%E4%BB%80%E4%B9%88%E5%8F%98%E5%8C%96%23) `220.7K 🔥` `NEW`
1. [张家齐妈妈主动找李松蔚做了心理咨询](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E4%B8%BB%E5%8A%A8%E6%89%BE%E6%9D%8E%E6%9D%BE%E8%94%9A%E5%81%9A%E4%BA%86%E5%BF%83%E7%90%86%E5%92%A8%E8%AF%A2%23) `194.2K 🔥` `NEW`
1. [男子被老虎咬死周围人曾让他装死](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E8%80%81%E8%99%8E%E5%92%AC%E6%AD%BB%E5%91%A8%E5%9B%B4%E4%BA%BA%E6%9B%BE%E8%AE%A9%E4%BB%96%E8%A3%85%E6%AD%BB%23) `188.6K 🔥` `NEW`
1. [爱情公寓15年前350万的特效](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%9315%E5%B9%B4%E5%89%8D350%E4%B8%87%E7%9A%84%E7%89%B9%E6%95%88%23) `166.6K 🔥` `NEW`
1. [王楚然的泳衣竟然被粉丝麻辣了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%9A%84%E6%B3%B3%E8%A1%A3%E7%AB%9F%E7%84%B6%E8%A2%AB%E7%B2%89%E4%B8%9D%E9%BA%BB%E8%BE%A3%E4%BA%86%23) `165.4K 🔥` `NEW`
1. [再过几年血滴子都给你整出来了](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%BF%87%E5%87%A0%E5%B9%B4%E8%A1%80%E6%BB%B4%E5%AD%90%E9%83%BD%E7%BB%99%E4%BD%A0%E6%95%B4%E5%87%BA%E6%9D%A5%E4%BA%86%23) `165.0K 🔥` `NEW`
1. [投资300万养了600头空气牛](https://s.weibo.com/weibo?q=%23%E6%8A%95%E8%B5%84300%E4%B8%87%E5%85%BB%E4%BA%86600%E5%A4%B4%E7%A9%BA%E6%B0%94%E7%89%9B%23) `162.4K 🔥` `NEW`
1. [陈哲远穿看秀的衣服录密逃](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E7%A9%BF%E7%9C%8B%E7%A7%80%E7%9A%84%E8%A1%A3%E6%9C%8D%E5%BD%95%E5%AF%86%E9%80%83%23) `162.2K 🔥` `NEW`
1. [张真源下一个综艺要来了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E4%B8%8B%E4%B8%80%E4%B8%AA%E7%BB%BC%E8%89%BA%E8%A6%81%E6%9D%A5%E4%BA%86%23) `161.6K 🔥` `NEW`
1. [年纪大读研的好处出现了](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E7%BA%AA%E5%A4%A7%E8%AF%BB%E7%A0%94%E7%9A%84%E5%A5%BD%E5%A4%84%E5%87%BA%E7%8E%B0%E4%BA%86%23) `161.2K 🔥` `NEW`
1. [嫁金钗](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%23) `157.0K 🔥` `NEW`
1. [时代少年团错过的外务活动](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E9%94%99%E8%BF%87%E7%9A%84%E5%A4%96%E5%8A%A1%E6%B4%BB%E5%8A%A8%23) `150.6K 🔥` `NEW`
1. [男子回应零彩礼娶俄罗斯高个姑娘](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E9%9B%B6%E5%BD%A9%E7%A4%BC%E5%A8%B6%E4%BF%84%E7%BD%97%E6%96%AF%E9%AB%98%E4%B8%AA%E5%A7%91%E5%A8%98%23) `149.9K 🔥` `NEW`
1. [大闸蟹价格真的崩盘了吗](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%97%B8%E8%9F%B9%E4%BB%B7%E6%A0%BC%E7%9C%9F%E7%9A%84%E5%B4%A9%E7%9B%98%E4%BA%86%E5%90%97%23) `146.9K 🔥` `NEW`
1. [爱你的人会记得你的来时路](https://s.weibo.com/weibo?q=%23%E7%88%B1%E4%BD%A0%E7%9A%84%E4%BA%BA%E4%BC%9A%E8%AE%B0%E5%BE%97%E4%BD%A0%E7%9A%84%E6%9D%A5%E6%97%B6%E8%B7%AF%23) `145.3K 🔥` `NEW`
1. [下一顺位是她](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E4%B8%80%E9%A1%BA%E4%BD%8D%E6%98%AF%E5%A5%B9%23) `145.1K 🔥` `NEW`
1. [勇士季前赛20分逆转湖人](https://s.weibo.com/weibo?q=%23%E5%8B%87%E5%A3%AB%E5%AD%A3%E5%89%8D%E8%B5%9B20%E5%88%86%E9%80%86%E8%BD%AC%E6%B9%96%E4%BA%BA%23) `140.3K 🔥` `NEW`
1. [获赠700万第三者是丈夫公司前员工](https://s.weibo.com/weibo?q=%23%E8%8E%B7%E8%B5%A0700%E4%B8%87%E7%AC%AC%E4%B8%89%E8%80%85%E6%98%AF%E4%B8%88%E5%A4%AB%E5%85%AC%E5%8F%B8%E5%89%8D%E5%91%98%E5%B7%A5%23) `139.9K 🔥` `NEW`
1. [林钰珊母亲回应退出A2O原因](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%92%B0%E7%8F%8A%E6%AF%8D%E4%BA%B2%E5%9B%9E%E5%BA%94%E9%80%80%E5%87%BAA2O%E5%8E%9F%E5%9B%A0%23) `139.8K 🔥` `NEW`
1. [女子生理期腹痛机场2元买到布洛芬](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%9F%E7%90%86%E6%9C%9F%E8%85%B9%E7%97%9B%E6%9C%BA%E5%9C%BA2%E5%85%83%E4%B9%B0%E5%88%B0%E5%B8%83%E6%B4%9B%E8%8A%AC%23) `139.4K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `139.1K 🔥` `NEW`
1. [用孙颖莎的方式打开海尔智慧家电](https://s.weibo.com/weibo?q=%23%E7%94%A8%E5%AD%99%E9%A2%96%E8%8E%8E%E7%9A%84%E6%96%B9%E5%BC%8F%E6%89%93%E5%BC%80%E6%B5%B7%E5%B0%94%E6%99%BA%E6%85%A7%E5%AE%B6%E7%94%B5%23) `139.1K 🔥` `NEW`
1. [C罗断层领跑历史最伟大金球奖投票](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%96%AD%E5%B1%82%E9%A2%86%E8%B7%91%E5%8E%86%E5%8F%B2%E6%9C%80%E4%BC%9F%E5%A4%A7%E9%87%91%E7%90%83%E5%A5%96%E6%8A%95%E7%A5%A8%23) `139.1K 🔥` `NEW`
1. [金晨回应现发4更换常驻嘉宾](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E5%9B%9E%E5%BA%94%E7%8E%B0%E5%8F%914%E6%9B%B4%E6%8D%A2%E5%B8%B8%E9%A9%BB%E5%98%89%E5%AE%BE%23) `277.0K 🔥` `-77%`
1. [女子6毫米结节确诊乳腺癌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%906%E6%AF%AB%E7%B1%B3%E7%BB%93%E8%8A%82%E7%A1%AE%E8%AF%8A%E4%B9%B3%E8%85%BA%E7%99%8C%23) `230.9K 🔥` `-70%`
1. [98年男生下班摆摊忙到起飞](https://s.weibo.com/weibo?q=%2398%E5%B9%B4%E7%94%B7%E7%94%9F%E4%B8%8B%E7%8F%AD%E6%91%86%E6%91%8A%E5%BF%99%E5%88%B0%E8%B5%B7%E9%A3%9E%23) `137.8K 🔥` `-27%`

Updated at 2026-10-14 14:16:34

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
