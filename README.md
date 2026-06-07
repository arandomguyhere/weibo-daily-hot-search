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

1. [我浪姐了 我力竭了 (I'm a loser. I'm exhausted.)](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%B5%AA%E5%A7%90%E4%BA%86%20%E6%88%91%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `2.0M 🔥` `NEW`
1. [中国逐日工程多项关键技术获新突破](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%80%90%E6%97%A5%E5%B7%A5%E7%A8%8B%E5%A4%9A%E9%A1%B9%E5%85%B3%E9%94%AE%E6%8A%80%E6%9C%AF%E8%8E%B7%E6%96%B0%E7%AA%81%E7%A0%B4%23) `783.3K 🔥` `NEW`
1. [代斯淘汰](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%96%AF%E6%B7%98%E6%B1%B0%23) `723.0K 🔥` `NEW`
1. [海屿你神级舞台](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%B1%BF%E4%BD%A0%E7%A5%9E%E7%BA%A7%E8%88%9E%E5%8F%B0%23) `695.1K 🔥` `NEW`
1. [中国女排vs波兰女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92vs%E6%B3%A2%E5%85%B0%E5%A5%B3%E6%8E%92%23) `577.3K 🔥` `NEW`
1. [浪姐 又要中途淘汰](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E5%8F%88%E8%A6%81%E4%B8%AD%E9%80%94%E6%B7%98%E6%B1%B0%23) `577.1K 🔥` `NEW`
1. [傅子纯去世](https://s.weibo.com/weibo?q=%23%E5%82%85%E5%AD%90%E7%BA%AF%E5%8E%BB%E4%B8%96%23) `576.2K 🔥` `NEW`
1. [范丞丞 跑男](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%20%E8%B7%91%E7%94%B7%23) `575.9K 🔥` `NEW`
1. [被架进考场](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%9E%B6%E8%BF%9B%E8%80%83%E5%9C%BA%23) `574.8K 🔥` `NEW`
1. [歌手范玮琪回来了](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E8%8C%83%E7%8E%AE%E7%90%AA%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `574.4K 🔥` `NEW`
1. [国家防总工作组已赶赴重庆 (The National Defense Working Group has rushed to Chongqing)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E9%98%B2%E6%80%BB%E5%B7%A5%E4%BD%9C%E7%BB%84%E5%B7%B2%E8%B5%B6%E8%B5%B4%E9%87%8D%E5%BA%86%23) `574.1K 🔥` `NEW`
1. [唐艺昕 人怎么能争气成这样](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%20%E4%BA%BA%E6%80%8E%E4%B9%88%E8%83%BD%E4%BA%89%E6%B0%94%E6%88%90%E8%BF%99%E6%A0%B7%23) `573.8K 🔥` `NEW`
1. [江语晨安全了](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%AE%89%E5%85%A8%E4%BA%86%23) `573.4K 🔥` `NEW`
1. [何宣林李心洁高音好爽](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E6%9D%8E%E5%BF%83%E6%B4%81%E9%AB%98%E9%9F%B3%E5%A5%BD%E7%88%BD%23) `573.1K 🔥` `NEW`
1. [耐克市值几乎蒸发掉一个阿迪达斯](https://s.weibo.com/weibo?q=%23%E8%80%90%E5%85%8B%E5%B8%82%E5%80%BC%E5%87%A0%E4%B9%8E%E8%92%B8%E5%8F%91%E6%8E%89%E4%B8%80%E4%B8%AA%E9%98%BF%E8%BF%AA%E8%BE%BE%E6%96%AF%23) `572.4K 🔥` `NEW`
1. [考生体内钢板无法过安检铁骑狂奔补证](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%94%9F%E4%BD%93%E5%86%85%E9%92%A2%E6%9D%BF%E6%97%A0%E6%B3%95%E8%BF%87%E5%AE%89%E6%A3%80%E9%93%81%E9%AA%91%E7%8B%82%E5%A5%94%E8%A1%A5%E8%AF%81%23) `571.6K 🔥` `NEW`
1. [泽尻英龙华被男友甩了](https://s.weibo.com/weibo?q=%23%E6%B3%BD%E5%B0%BB%E8%8B%B1%E9%BE%99%E5%8D%8E%E8%A2%AB%E7%94%B7%E5%8F%8B%E7%94%A9%E4%BA%86%23) `571.5K 🔥` `NEW`
1. [TES战胜WE](https://s.weibo.com/weibo?q=%23TES%E6%88%98%E8%83%9CWE%23) `555.9K 🔥` `NEW`
1. [左边 好听好想哭](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%BE%B9%20%E5%A5%BD%E5%90%AC%E5%A5%BD%E6%83%B3%E5%93%AD%23) `545.3K 🔥` `NEW`
1. [张月把自己唱哭了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E6%8A%8A%E8%87%AA%E5%B7%B1%E5%94%B1%E5%93%AD%E4%BA%86%23) `528.5K 🔥` `NEW`
1. [唐艺昕回应皮肤问题 (Tang Yixin responds to skin problems)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%9B%9E%E5%BA%94%E7%9A%AE%E8%82%A4%E9%97%AE%E9%A2%98%23) `372.5K 🔥` `NEW`
1. [薛之谦上上谦火锅店全部关闭](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%B8%8A%E4%B8%8A%E8%B0%A6%E7%81%AB%E9%94%85%E5%BA%97%E5%85%A8%E9%83%A8%E5%85%B3%E9%97%AD%23) `268.8K 🔥` `NEW`
1. [李心洁何宣林 求你别离开我](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%BF%83%E6%B4%81%E4%BD%95%E5%AE%A3%E6%9E%97%20%E6%B1%82%E4%BD%A0%E5%88%AB%E7%A6%BB%E5%BC%80%E6%88%91%23) `234.8K 🔥` `NEW`
1. [TES晋级2026MSI](https://s.weibo.com/weibo?q=%23TES%E6%99%8B%E7%BA%A72026MSI%23) `196.1K 🔥` `NEW`
1. [DRG早点回归](https://s.weibo.com/weibo?q=%23DRG%E6%97%A9%E7%82%B9%E5%9B%9E%E5%BD%92%23) `195.9K 🔥` `NEW`
1. [特朗普女儿女婿在阿尔巴尼亚摊上事了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A5%B3%E5%84%BF%E5%A5%B3%E5%A9%BF%E5%9C%A8%E9%98%BF%E5%B0%94%E5%B7%B4%E5%B0%BC%E4%BA%9A%E6%91%8A%E4%B8%8A%E4%BA%8B%E4%BA%86%23) `195.8K 🔥` `NEW`
1. [詹姆斯吐槽AI加速假新闻传播](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%90%90%E6%A7%BDAI%E5%8A%A0%E9%80%9F%E5%81%87%E6%96%B0%E9%97%BB%E4%BC%A0%E6%92%AD%23) `195.7K 🔥` `NEW`
1. [AI短剧 100集浓缩成3分钟](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%20100%E9%9B%86%E6%B5%93%E7%BC%A9%E6%88%903%E5%88%86%E9%92%9F%23) `575.0K 🔥` `+45%`
1. [江苏一考生8点59才发现走错考场](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E4%B8%80%E8%80%83%E7%94%9F8%E7%82%B959%E6%89%8D%E5%8F%91%E7%8E%B0%E8%B5%B0%E9%94%99%E8%80%83%E5%9C%BA%23) `573.2K 🔥` `+193%`
1. [数学老师连续4年高考最高137分 (Mathematics teacher scored the highest score of 137 in the college entrance examination for 4 consecutive years)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%A6%E8%80%81%E5%B8%88%E8%BF%9E%E7%BB%AD4%E5%B9%B4%E9%AB%98%E8%80%83%E6%9C%80%E9%AB%98137%E5%88%86%23) `572.3K 🔥` `+78%`
1. [央视曝光手机高价回收骗局](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E6%89%8B%E6%9C%BA%E9%AB%98%E4%BB%B7%E5%9B%9E%E6%94%B6%E9%AA%97%E5%B1%80%23) `571.9K 🔥` `+47%`
1. [高考数学答案 (College Entrance Examination Mathematics Answers)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%95%B0%E5%AD%A6%E7%AD%94%E6%A1%88%23) `474.7K 🔥` `+23%`
1. [深圳宝妈称印度巴基斯坦人增多](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%AE%9D%E5%A6%88%E7%A7%B0%E5%8D%B0%E5%BA%A6%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E4%BA%BA%E5%A2%9E%E5%A4%9A%23) `365.6K 🔥`
1. [高考数学](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%95%B0%E5%AD%A6%23) `1.5M 🔥` `-74%`
1. [关掉朋友圈之后发现自己不爱旅游 (After closing the circle of friends, I realized that I don’t like traveling.)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%8E%89%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%B9%8B%E5%90%8E%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E4%B8%8D%E7%88%B1%E6%97%85%E6%B8%B8%23) `661.9K 🔥` `-85%`
1. [iPhone用户的崩溃瞬间](https://s.weibo.com/weibo?q=%23iPhone%E7%94%A8%E6%88%B7%E7%9A%84%E5%B4%A9%E6%BA%83%E7%9E%AC%E9%97%B4%23) `577.9K 🔥` `-89%`
1. [数学一卷 (Mathematics Paper 1)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%A6%E4%B8%80%E5%8D%B7%23) `577.8K 🔥` `-90%`
1. [A股重大调整来袭](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%87%8D%E5%A4%A7%E8%B0%83%E6%95%B4%E6%9D%A5%E8%A2%AD%23) `577.5K 🔥` `-29%`
1. [黄子韬怒斥偷拍牙医](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%80%92%E6%96%A5%E5%81%B7%E6%8B%8D%E7%89%99%E5%8C%BB%23) `576.7K 🔥` `-85%`
1. [中产家族的破产七件套](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BA%A7%E5%AE%B6%E6%97%8F%E7%9A%84%E7%A0%B4%E4%BA%A7%E4%B8%83%E4%BB%B6%E5%A5%97%23) `576.5K 🔥` `-68%`
1. [数学大题 不让我动笔](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%A6%E5%A4%A7%E9%A2%98%20%E4%B8%8D%E8%AE%A9%E6%88%91%E5%8A%A8%E7%AC%94%23) `575.6K 🔥` `-34%`
1. [浪姐直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `575.3K 🔥` `-87%`
1. [陈都灵发了20万红包](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%8F%91%E4%BA%8620%E4%B8%87%E7%BA%A2%E5%8C%85%23) `574.6K 🔥` `-54%`
1. [陈都灵三部一番破万剧 (Chen Duling's three dramas have exceeded 10,000)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E4%B8%89%E9%83%A8%E4%B8%80%E7%95%AA%E7%A0%B4%E4%B8%87%E5%89%A7%23) `572.7K 🔥` `-24%`
1. [黄子韬做了16颗牙贴面](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%81%9A%E4%BA%8616%E9%A2%97%E7%89%99%E8%B4%B4%E9%9D%A2%23) `390.3K 🔥` `-56%`
1. [网友看到李晨这段完整拍摄过程了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%9C%8B%E5%88%B0%E6%9D%8E%E6%99%A8%E8%BF%99%E6%AE%B5%E5%AE%8C%E6%95%B4%E6%8B%8D%E6%91%84%E8%BF%87%E7%A8%8B%E4%BA%86%23) `360.9K 🔥` `-31%`
1. [数学一卷 难](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%A6%E4%B8%80%E5%8D%B7%20%E9%9A%BE%23) `263.9K 🔥` `-41%`
1. [柳智敏的酒杯腿又被夸](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E7%9A%84%E9%85%92%E6%9D%AF%E8%85%BF%E5%8F%88%E8%A2%AB%E5%A4%B8%23) `252.6K 🔥` `-55%`
1. [压力给到27届](https://s.weibo.com/weibo?q=%23%E5%8E%8B%E5%8A%9B%E7%BB%99%E5%88%B027%E5%B1%8A%23) `229.0K 🔥` `-56%`
1. [时代少年团 高考作文 (Times Youth League College Entrance Examination Composition)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%23) `195.5K 🔥` `-62%`

Updated at 2026-06-07 21:09:33

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
