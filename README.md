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

1. [数学一卷 (Mathematics Paper 1)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%A6%E4%B8%80%E5%8D%B7%23) `5.8M 🔥` `NEW`
1. [2026高考场外的牵挂](https://s.weibo.com/weibo?q=%232026%E9%AB%98%E8%80%83%E5%9C%BA%E5%A4%96%E7%9A%84%E7%89%B5%E6%8C%82%23) `5.5M 🔥` `NEW`
1. [迟到一分钟考生被拒进考场](https://s.weibo.com/weibo?q=%23%E8%BF%9F%E5%88%B0%E4%B8%80%E5%88%86%E9%92%9F%E8%80%83%E7%94%9F%E8%A2%AB%E6%8B%92%E8%BF%9B%E8%80%83%E5%9C%BA%23) `5.3M 🔥` `NEW`
1. [iPhone用户的崩溃瞬间](https://s.weibo.com/weibo?q=%23iPhone%E7%94%A8%E6%88%B7%E7%9A%84%E5%B4%A9%E6%BA%83%E7%9E%AC%E9%97%B4%23) `5.1M 🔥` `NEW`
1. [小美算是把全屋智能玩明白了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%BE%8E%E7%AE%97%E6%98%AF%E6%8A%8A%E5%85%A8%E5%B1%8B%E6%99%BA%E8%83%BD%E7%8E%A9%E6%98%8E%E7%99%BD%E4%BA%86%23) `4.7M 🔥` `NEW`
1. [浪姐直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `4.3M 🔥` `NEW`
1. [翘楚破万](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E7%A0%B4%E4%B8%87%23) `3.9M 🔥` `NEW`
1. [黄子韬怒斥偷拍牙医](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%80%92%E6%96%A5%E5%81%B7%E6%8B%8D%E7%89%99%E5%8C%BB%23) `3.7M 🔥` `NEW`
1. [新华社力挺白鹿](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8D%8E%E7%A4%BE%E5%8A%9B%E6%8C%BA%E7%99%BD%E9%B9%BF%23) `1.7M 🔥` `NEW`
1. [陈都灵发了20万红包](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%8F%91%E4%BA%8620%E4%B8%87%E7%BA%A2%E5%8C%85%23) `1.3M 🔥` `NEW`
1. [上海数学 气哭了 (Shanghai Mathematics I cried with anger)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%95%B0%E5%AD%A6%20%E6%B0%94%E5%93%AD%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [数学大题 不让我动笔](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%A6%E5%A4%A7%E9%A2%98%20%E4%B8%8D%E8%AE%A9%E6%88%91%E5%8A%A8%E7%AC%94%23) `874.8K 🔥` `NEW`
1. [WE对战TES](https://s.weibo.com/weibo?q=%23WE%E5%AF%B9%E6%88%98TES%23) `762.5K 🔥` `NEW`
1. [陈都灵三部一番破万剧](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E4%B8%89%E9%83%A8%E4%B8%80%E7%95%AA%E7%A0%B4%E4%B8%87%E5%89%A7%23) `749.4K 🔥` `NEW`
1. [压力给到27届](https://s.weibo.com/weibo?q=%23%E5%8E%8B%E5%8A%9B%E7%BB%99%E5%88%B027%E5%B1%8A%23) `521.3K 🔥` `NEW`
1. [网友看到李晨这段完整拍摄过程了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%9C%8B%E5%88%B0%E6%9D%8E%E6%99%A8%E8%BF%99%E6%AE%B5%E5%AE%8C%E6%95%B4%E6%8B%8D%E6%91%84%E8%BF%87%E7%A8%8B%E4%BA%86%23) `521.0K 🔥` `NEW`
1. [数学一卷 难](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%A6%E4%B8%80%E5%8D%B7%20%E9%9A%BE%23) `443.5K 🔥` `NEW`
1. [周生生老庙老凤祥金价集体大跌](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%94%9F%E7%94%9F%E8%80%81%E5%BA%99%E8%80%81%E5%87%A4%E7%A5%A5%E9%87%91%E4%BB%B7%E9%9B%86%E4%BD%93%E5%A4%A7%E8%B7%8C%23) `394.9K 🔥` `NEW`
1. [央视曝光手机高价回收骗局](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E6%89%8B%E6%9C%BA%E9%AB%98%E4%BB%B7%E5%9B%9E%E6%94%B6%E9%AA%97%E5%B1%80%23) `388.3K 🔥` `NEW`
1. [高考数学答案](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%95%B0%E5%AD%A6%E7%AD%94%E6%A1%88%23) `387.3K 🔥` `NEW`
1. [数学老师连续4年高考最高137分 (Mathematics teacher scored the highest score of 137 in the college entrance examination for 4 consecutive years)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%A6%E8%80%81%E5%B8%88%E8%BF%9E%E7%BB%AD4%E5%B9%B4%E9%AB%98%E8%80%83%E6%9C%80%E9%AB%98137%E5%88%86%23) `322.0K 🔥` `NEW`
1. [葛军称不会再出高考题](https://s.weibo.com/weibo?q=%23%E8%91%9B%E5%86%9B%E7%A7%B0%E4%B8%8D%E4%BC%9A%E5%86%8D%E5%87%BA%E9%AB%98%E8%80%83%E9%A2%98%23) `301.1K 🔥` `NEW`
1. [黄灿灿变绿灿灿](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%8F%98%E7%BB%BF%E7%81%BF%E7%81%BF%23) `295.9K 🔥` `NEW`
1. [孙怡走那几步给我迷成啥了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%B5%B0%E9%82%A3%E5%87%A0%E6%AD%A5%E7%BB%99%E6%88%91%E8%BF%B7%E6%88%90%E5%95%A5%E4%BA%86%23) `263.9K 🔥` `NEW`
1. [陈丽君一下飞机天塌了](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E4%B8%80%E4%B8%8B%E9%A3%9E%E6%9C%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `225.8K 🔥` `NEW`
1. [宋威龙戴的项链活动结束就被买了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%88%B4%E7%9A%84%E9%A1%B9%E9%93%BE%E6%B4%BB%E5%8A%A8%E7%BB%93%E6%9D%9F%E5%B0%B1%E8%A2%AB%E4%B9%B0%E4%BA%86%23) `206.3K 🔥` `NEW`
1. [江苏一考生8点59才发现走错考场](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E4%B8%80%E8%80%83%E7%94%9F8%E7%82%B959%E6%89%8D%E5%8F%91%E7%8E%B0%E8%B5%B0%E9%94%99%E8%80%83%E5%9C%BA%23) `195.9K 🔥` `NEW`
1. [男子以免费摘花生诱杀留守妇女藏尸](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BB%A5%E5%85%8D%E8%B4%B9%E6%91%98%E8%8A%B1%E7%94%9F%E8%AF%B1%E6%9D%80%E7%95%99%E5%AE%88%E5%A6%87%E5%A5%B3%E8%97%8F%E5%B0%B8%23) `192.3K 🔥` `NEW`
1. [JDG绝意断开连接](https://s.weibo.com/weibo?q=%23JDG%E7%BB%9D%E6%84%8F%E6%96%AD%E5%BC%80%E8%BF%9E%E6%8E%A5%23) `172.4K 🔥` `NEW`
1. [今年高考的明星考生](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E9%AB%98%E8%80%83%E7%9A%84%E6%98%8E%E6%98%9F%E8%80%83%E7%94%9F%23) `159.4K 🔥` `NEW`
1. [关掉朋友圈之后发现自己不爱旅游 (After closing the circle of friends, I realized that I don’t like traveling.)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%8E%89%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%B9%8B%E5%90%8E%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E4%B8%8D%E7%88%B1%E6%97%85%E6%B8%B8%23) `4.5M 🔥` `+1579%`
1. [高考作文 妈妈背我去医院](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%20%E5%A6%88%E5%A6%88%E8%83%8C%E6%88%91%E5%8E%BB%E5%8C%BB%E9%99%A2%23) `4.0M 🔥` `+339%`
1. [数学二卷 谁出的题](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%A6%E4%BA%8C%E5%8D%B7%20%E8%B0%81%E5%87%BA%E7%9A%84%E9%A2%98%23) `2.3M 🔥` `+71%`
1. [中产家族的破产七件套](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BA%A7%E5%AE%B6%E6%97%8F%E7%9A%84%E7%A0%B4%E4%BA%A7%E4%B8%83%E4%BB%B6%E5%A5%97%23) `1.8M 🔥` `+565%`
1. [黄子韬做了16颗牙贴面](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%81%9A%E4%BA%8616%E9%A2%97%E7%89%99%E8%B4%B4%E9%9D%A2%23) `892.1K 🔥` `+155%`
1. [A股重大调整来袭](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%87%8D%E5%A4%A7%E8%B0%83%E6%95%B4%E6%9D%A5%E8%A2%AD%23) `811.6K 🔥` `+52%`
1. [柳智敏的酒杯腿又被夸](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E7%9A%84%E9%85%92%E6%9D%AF%E8%85%BF%E5%8F%88%E8%A2%AB%E5%A4%B8%23) `565.4K 🔥` `+77%`
1. [时代少年团 高考作文 (Times Youth League College Entrance Examination Composition)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%23) `516.7K 🔥` `+46%`
1. [大冰建议两口子别一起旅行](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E5%BB%BA%E8%AE%AE%E4%B8%A4%E5%8F%A3%E5%AD%90%E5%88%AB%E4%B8%80%E8%B5%B7%E6%97%85%E8%A1%8C%23) `400.1K 🔥` `+38%`
1. [AI短剧 100集浓缩成3分钟](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%20100%E9%9B%86%E6%B5%93%E7%BC%A9%E6%88%903%E5%88%86%E9%92%9F%23) `396.3K 🔥` `+38%`
1. [深圳宝妈称印度巴基斯坦人增多](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%AE%9D%E5%A6%88%E7%A7%B0%E5%8D%B0%E5%BA%A6%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E4%BA%BA%E5%A2%9E%E5%A4%9A%23) `383.2K 🔥` `+36%`
1. [高考数学难不难 (Is it difficult to take the college entrance examination mathematics?)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%95%B0%E5%AD%A6%E9%9A%BE%E4%B8%8D%E9%9A%BE%23) `4.9M 🔥`
1. [于适25年发的博文压中高考作文 (A blog post written by Yu Shi in 25 years to prepare for the college entrance examination)](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E9%80%8225%E5%B9%B4%E5%8F%91%E7%9A%84%E5%8D%9A%E6%96%87%E5%8E%8B%E4%B8%AD%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%23) `305.3K 🔥`
1. [近视的人老了都是两副眼镜](https://s.weibo.com/weibo?q=%23%E8%BF%91%E8%A7%86%E7%9A%84%E4%BA%BA%E8%80%81%E4%BA%86%E9%83%BD%E6%98%AF%E4%B8%A4%E5%89%AF%E7%9C%BC%E9%95%9C%23) `258.4K 🔥`
1. [高考数学](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%95%B0%E5%AD%A6%23) `5.9M 🔥` `-76%`
1. [高考语文默写](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E8%AF%AD%E6%96%87%E9%BB%98%E5%86%99%23) `270.8K 🔥` `-54%`
1. [翘楚弹幕 没法看](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E5%BC%B9%E5%B9%95%20%E6%B2%A1%E6%B3%95%E7%9C%8B%23) `248.3K 🔥` `-56%`
1. [心梗发作前一个月就有征兆](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%A2%97%E5%8F%91%E4%BD%9C%E5%89%8D%E4%B8%80%E4%B8%AA%E6%9C%88%E5%B0%B1%E6%9C%89%E5%BE%81%E5%85%86%23) `210.2K 🔥` `-26%`
1. [AG转会公告 (AG transfer announcement)](https://s.weibo.com/weibo?q=%23AG%E8%BD%AC%E4%BC%9A%E5%85%AC%E5%91%8A%23) `177.9K 🔥` `-45%`
1. [黄仁勋跳女团舞](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E8%B7%B3%E5%A5%B3%E5%9B%A2%E8%88%9E%23) `163.5K 🔥` `-34%`
1. [特朗普刚起床就发了AI视频](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%88%9A%E8%B5%B7%E5%BA%8A%E5%B0%B1%E5%8F%91%E4%BA%86AI%E8%A7%86%E9%A2%91%23) `159.4K 🔥` `-36%`

Updated at 2026-06-07 19:42:28

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
