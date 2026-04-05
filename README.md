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

1. [孙颖莎冠军 (Sun Yingsha champion)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%86%A0%E5%86%9B%23) `2.3M 🔥` `NEW`
1. [王楚钦vs松岛辉空](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `1.2M 🔥` `NEW`
1. [三代人同框敬礼祭奠先烈](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BB%A3%E4%BA%BA%E5%90%8C%E6%A1%86%E6%95%AC%E7%A4%BC%E7%A5%AD%E5%A5%A0%E5%85%88%E7%83%88%23) `974.3K 🔥` `NEW`
1. [陈赫女儿是鹿晗干女儿](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%A5%B3%E5%84%BF%E6%98%AF%E9%B9%BF%E6%99%97%E5%B9%B2%E5%A5%B3%E5%84%BF%23) `501.5K 🔥` `NEW`
1. [孙颖莎三连冠](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%89%E8%BF%9E%E5%86%A0%23) `384.6K 🔥` `NEW`
1. [孙颖莎黄牌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%BB%84%E7%89%8C%23) `328.2K 🔥` `NEW`
1. [孙颖莎创造历史](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%88%9B%E9%80%A0%E5%8E%86%E5%8F%B2%23) `258.0K 🔥` `NEW`
1. [SEVENTEEN全员续约](https://s.weibo.com/weibo?q=%23SEVENTEEN%E5%85%A8%E5%91%98%E7%BB%AD%E7%BA%A6%23) `244.3K 🔥` `NEW`
1. [AL对战TES](https://s.weibo.com/weibo?q=%23AL%E5%AF%B9%E6%88%98TES%23) `210.1K 🔥` `NEW`
1. [男子把墓园当小区每天给墓主问好](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8A%8A%E5%A2%93%E5%9B%AD%E5%BD%93%E5%B0%8F%E5%8C%BA%E6%AF%8F%E5%A4%A9%E7%BB%99%E5%A2%93%E4%B8%BB%E9%97%AE%E5%A5%BD%23) `209.7K 🔥` `NEW`
1. [贾浅浅论文把米芾写成米蒂 (Jia Qianqian wrote Mi Fu as Miti in her paper)](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E6%B5%85%E6%B5%85%E8%AE%BA%E6%96%87%E6%8A%8A%E7%B1%B3%E8%8A%BE%E5%86%99%E6%88%90%E7%B1%B3%E8%92%82%23) `207.3K 🔥` `NEW`
1. [地震学副教授讲炒股引热议](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%9C%87%E5%AD%A6%E5%89%AF%E6%95%99%E6%8E%88%E8%AE%B2%E7%82%92%E8%82%A1%E5%BC%95%E7%83%AD%E8%AE%AE%23) `204.0K 🔥` `NEW`
1. [孙俪回应梅婷发文](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%9B%9E%E5%BA%94%E6%A2%85%E5%A9%B7%E5%8F%91%E6%96%87%23) `200.5K 🔥` `NEW`
1. [伊媒称多名美军士兵在营救行动中身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%AA%92%E7%A7%B0%E5%A4%9A%E5%90%8D%E7%BE%8E%E5%86%9B%E5%A3%AB%E5%85%B5%E5%9C%A8%E8%90%A5%E6%95%91%E8%A1%8C%E5%8A%A8%E4%B8%AD%E8%BA%AB%E4%BA%A1%23) `164.1K 🔥` `NEW`
1. [裴珠泫回归退步](https://s.weibo.com/weibo?q=%23%E8%A3%B4%E7%8F%A0%E6%B3%AB%E5%9B%9E%E5%BD%92%E9%80%80%E6%AD%A5%23) `163.4K 🔥` `NEW`
1. [印度一摩天轮超载倒塌超30人受伤](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%80%E6%91%A9%E5%A4%A9%E8%BD%AE%E8%B6%85%E8%BD%BD%E5%80%92%E5%A1%8C%E8%B6%8530%E4%BA%BA%E5%8F%97%E4%BC%A4%23) `163.2K 🔥` `NEW`
1. [美要求台湾开放转基因食品进校园](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%A6%81%E6%B1%82%E5%8F%B0%E6%B9%BE%E5%BC%80%E6%94%BE%E8%BD%AC%E5%9F%BA%E5%9B%A0%E9%A3%9F%E5%93%81%E8%BF%9B%E6%A0%A1%E5%9B%AD%23) `126.3K 🔥` `NEW`
1. [让孙颖莎瞅瞅](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E5%AD%99%E9%A2%96%E8%8E%8E%E7%9E%85%E7%9E%85%23) `123.7K 🔥` `NEW`
1. [胖东来鸡蛋事件情况说明](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%B8%A1%E8%9B%8B%E4%BA%8B%E4%BB%B6%E6%83%85%E5%86%B5%E8%AF%B4%E6%98%8E%23) `121.8K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `121.6K 🔥` `NEW`
1. [俄罗斯摄影师粉染母象致死 (Russian photographer dyes female elephant to death)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E6%91%84%E5%BD%B1%E5%B8%88%E7%B2%89%E6%9F%93%E6%AF%8D%E8%B1%A1%E8%87%B4%E6%AD%BB%23) `115.8K 🔥` `NEW`
1. [张馨予天天被喊妈妈喊习惯了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E5%A4%A9%E5%A4%A9%E8%A2%AB%E5%96%8A%E5%A6%88%E5%A6%88%E5%96%8A%E4%B9%A0%E6%83%AF%E4%BA%86%23) `106.1K 🔥` `NEW`
1. [危险关系](https://s.weibo.com/weibo?q=%23%E5%8D%B1%E9%99%A9%E5%85%B3%E7%B3%BB%23) `104.9K 🔥` `NEW`
1. [男孩偷车被抓家长反怼格局小](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E5%81%B7%E8%BD%A6%E8%A2%AB%E6%8A%93%E5%AE%B6%E9%95%BF%E5%8F%8D%E6%80%BC%E6%A0%BC%E5%B1%80%E5%B0%8F%23) `102.7K 🔥` `NEW`
1. [松岛辉空年仅18岁](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E5%B9%B4%E4%BB%8518%E5%B2%81%23) `101.7K 🔥` `NEW`
1. [Bin采访](https://s.weibo.com/weibo?q=%23Bin%E9%87%87%E8%AE%BF%23) `99.9K 🔥` `NEW`
1. [重庆吃轻轨名场面再上新](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%90%83%E8%BD%BB%E8%BD%A8%E5%90%8D%E5%9C%BA%E9%9D%A2%E5%86%8D%E4%B8%8A%E6%96%B0%23) `99.4K 🔥` `NEW`
1. [白日提灯迪丽热巴亲哭陈飞宇](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BA%B2%E5%93%AD%E9%99%88%E9%A3%9E%E5%AE%87%23) `98.3K 🔥` `NEW`
1. [小猫微信步数破万](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%BE%AE%E4%BF%A1%E6%AD%A5%E6%95%B0%E7%A0%B4%E4%B8%87%23) `95.9K 🔥` `NEW`
1. [王楚钦世排第1VS松岛辉空世排第8](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%96%E6%8E%92%E7%AC%AC1VS%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E4%B8%96%E6%8E%92%E7%AC%AC8%23) `91.7K 🔥` `NEW`
1. [孙颖莎夺冠后比3 (Sun Yingsha beat 3 after winning the championship)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A4%BA%E5%86%A0%E5%90%8E%E6%AF%943%23) `91.2K 🔥` `NEW`
1. [孙颖莎11比9王曼昱](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E11%E6%AF%949%E7%8E%8B%E6%9B%BC%E6%98%B1%23) `90.0K 🔥` `NEW`
1. [黄晓明已去交警部门接受处罚](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%B7%B2%E5%8E%BB%E4%BA%A4%E8%AD%A6%E9%83%A8%E9%97%A8%E6%8E%A5%E5%8F%97%E5%A4%84%E7%BD%9A%23) `250.1K 🔥` `+111%`
1. [200万火锅店营业额990 (2 million hot pot restaurant turnover 990)](https://s.weibo.com/weibo?q=%23200%E4%B8%87%E7%81%AB%E9%94%85%E5%BA%97%E8%90%A5%E4%B8%9A%E9%A2%9D990%23) `241.1K 🔥` `+95%`
1. [新加坡偶遇唐嫣罗晋一家三口](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%81%B6%E9%81%87%E5%94%90%E5%AB%A3%E7%BD%97%E6%99%8B%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%23) `229.7K 🔥` `+96%`
1. [美炸毁2架执行救援故障运输机](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%82%B8%E6%AF%812%E6%9E%B6%E6%89%A7%E8%A1%8C%E6%95%91%E6%8F%B4%E6%95%85%E9%9A%9C%E8%BF%90%E8%BE%93%E6%9C%BA%23) `220.2K 🔥` `+75%`
1. [谢娜抚养权判给谁了 (Who was awarded the custody of Xie Na?)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%8A%9A%E5%85%BB%E6%9D%83%E5%88%A4%E7%BB%99%E8%B0%81%E4%BA%86%23) `216.0K 🔥` `+85%`
1. [撒贝宁 章子怡](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%20%E7%AB%A0%E5%AD%90%E6%80%A1%23) `203.1K 🔥` `+74%`
1. [黄晓明就带娃骑行道歉](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%B0%B1%E5%B8%A6%E5%A8%83%E9%AA%91%E8%A1%8C%E9%81%93%E6%AD%89%23) `199.7K 🔥` `+78%`
1. [女子长期虐待2岁儿子还拍视频](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%95%BF%E6%9C%9F%E8%99%90%E5%BE%852%E5%B2%81%E5%84%BF%E5%AD%90%E8%BF%98%E6%8B%8D%E8%A7%86%E9%A2%91%23) `196.9K 🔥` `+57%`
1. [唐艺昕露背身材](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E9%9C%B2%E8%83%8C%E8%BA%AB%E6%9D%90%23) `179.2K 🔥` `+60%`
1. [曝姐姐们集体抗议浪姐直播 (It was revealed that the sisters collectively protested against Sister Lang’s live broadcast)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A7%90%E5%A7%90%E4%BB%AC%E9%9B%86%E4%BD%93%E6%8A%97%E8%AE%AE%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `123.6K 🔥` `+28%`
1. [孙颖莎vs王曼昱 (Sun Yingsha vs Wang Manyu)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E7%8E%8B%E6%9B%BC%E6%98%B1%23) `881.5K 🔥`
1. [AG对战KSG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98KSG%23) `310.0K 🔥`
1. [文淇称妇科检查时医生对其有敌意 (Wen Qi said the doctor was hostile to her during her gynecological examination)](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%B7%87%E7%A7%B0%E5%A6%87%E7%A7%91%E6%A3%80%E6%9F%A5%E6%97%B6%E5%8C%BB%E7%94%9F%E5%AF%B9%E5%85%B6%E6%9C%89%E6%95%8C%E6%84%8F%23) `120.4K 🔥`
1. [散粉高反](https://s.weibo.com/weibo?q=%23%E6%95%A3%E7%B2%89%E9%AB%98%E5%8F%8D%23) `113.5K 🔥`
1. [王楚钦6次交手松岛辉空](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A66%E6%AC%A1%E4%BA%A4%E6%89%8B%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `91.9K 🔥`
1. [妈妈不知儿子去世跟AI儿子聊了1年](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E4%B8%8D%E7%9F%A5%E5%84%BF%E5%AD%90%E5%8E%BB%E4%B8%96%E8%B7%9FAI%E5%84%BF%E5%AD%90%E8%81%8A%E4%BA%861%E5%B9%B4%23) `559.8K 🔥` `-51%`
1. [白日提灯 (day lantern)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `122.3K 🔥` `-52%`
1. [女子开车撞劫匪致1死2伤被判无罪 (Woman who hit robber with car, killing 1 and injuring 2, was found not guilty)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BC%80%E8%BD%A6%E6%92%9E%E5%8A%AB%E5%8C%AA%E8%87%B41%E6%AD%BB2%E4%BC%A4%E8%A2%AB%E5%88%A4%E6%97%A0%E7%BD%AA%23) `92.1K 🔥` `-71%`

Updated at 2026-04-05 21:18:06

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
