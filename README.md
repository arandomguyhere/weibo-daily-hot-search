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

1. [美国一次次撒谎全世界买单 (The United States lies again and again and the whole world pays for it)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E6%AC%A1%E6%AC%A1%E6%92%92%E8%B0%8E%E5%85%A8%E4%B8%96%E7%95%8C%E4%B9%B0%E5%8D%95%23) `171.4K 🔥` `NEW`
1. [重庆一车辆失控撞向路边行人致3伤](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E4%B8%80%E8%BD%A6%E8%BE%86%E5%A4%B1%E6%8E%A7%E6%92%9E%E5%90%91%E8%B7%AF%E8%BE%B9%E8%A1%8C%E4%BA%BA%E8%87%B43%E4%BC%A4%23) `128.1K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `128.0K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `127.9K 🔥` `NEW`
1. [郑合惠子在拍戏放弃去hi6女主剧宣](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E5%9C%A8%E6%8B%8D%E6%88%8F%E6%94%BE%E5%BC%83%E5%8E%BBhi6%E5%A5%B3%E4%B8%BB%E5%89%A7%E5%AE%A3%23) `127.9K 🔥` `NEW`
1. [张凌赫让90岁追剧的爷爷早点休息](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%AE%A990%E5%B2%81%E8%BF%BD%E5%89%A7%E7%9A%84%E7%88%B7%E7%88%B7%E6%97%A9%E7%82%B9%E4%BC%91%E6%81%AF%23) `127.6K 🔥` `NEW`
1. [俄称暗杀伊朗领导人后果极其严重](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%A7%B0%E6%9A%97%E6%9D%80%E4%BC%8A%E6%9C%97%E9%A2%86%E5%AF%BC%E4%BA%BA%E5%90%8E%E6%9E%9C%E6%9E%81%E5%85%B6%E4%B8%A5%E9%87%8D%23) `127.5K 🔥` `NEW`
1. [刘晓庆说这个时代基本没有赶上我](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E5%BA%86%E8%AF%B4%E8%BF%99%E4%B8%AA%E6%97%B6%E4%BB%A3%E5%9F%BA%E6%9C%AC%E6%B2%A1%E6%9C%89%E8%B5%B6%E4%B8%8A%E6%88%91%23) `127.3K 🔥` `NEW`
1. [韩国股市跌5%启动熔断机制](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E5%B8%82%E8%B7%8C5%25%E5%90%AF%E5%8A%A8%E7%86%94%E6%96%AD%E6%9C%BA%E5%88%B6%23) `127.2K 🔥` `NEW`
1. [以色列总理声称以美为世界而战](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%80%BB%E7%90%86%E5%A3%B0%E7%A7%B0%E4%BB%A5%E7%BE%8E%E4%B8%BA%E4%B8%96%E7%95%8C%E8%80%8C%E6%88%98%23) `126.9K 🔥` `NEW`
1. [买到了超绝侧面的裤子 (I bought pants with amazing side profiles)](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E5%88%B0%E4%BA%86%E8%B6%85%E7%BB%9D%E4%BE%A7%E9%9D%A2%E7%9A%84%E8%A3%A4%E5%AD%90%23) `126.8K 🔥` `NEW`
1. [宋亚轩马尔代夫](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E9%A9%AC%E5%B0%94%E4%BB%A3%E5%A4%AB%23) `126.2K 🔥` `NEW`
1. [股市](https://s.weibo.com/weibo?q=%23%E8%82%A1%E5%B8%82%23) `124.2K 🔥` `NEW`
1. [郑钦文击败前澳网冠军](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%87%BB%E8%B4%A5%E5%89%8D%E6%BE%B3%E7%BD%91%E5%86%A0%E5%86%9B%23) `124.1K 🔥` `NEW`
1. [以军证实伊朗使用4000公里射程导弹](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E8%AF%81%E5%AE%9E%E4%BC%8A%E6%9C%97%E4%BD%BF%E7%94%A84000%E5%85%AC%E9%87%8C%E5%B0%84%E7%A8%8B%E5%AF%BC%E5%BC%B9%23) `124.1K 🔥` `NEW`
1. [宁静建议年轻人勇敢恋爱慎重生娃](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%E5%BB%BA%E8%AE%AE%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%8B%87%E6%95%A2%E6%81%8B%E7%88%B1%E6%85%8E%E9%87%8D%E7%94%9F%E5%A8%83%23) `124.1K 🔥` `NEW`
1. [金正恩被再次推举为朝鲜国务委员长](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%AD%A3%E6%81%A9%E8%A2%AB%E5%86%8D%E6%AC%A1%E6%8E%A8%E4%B8%BE%E4%B8%BA%E6%9C%9D%E9%B2%9C%E5%9B%BD%E5%8A%A1%E5%A7%94%E5%91%98%E9%95%BF%23) `116.4K 🔥` `NEW`
1. [大疆起诉影石创新](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86%E8%B5%B7%E8%AF%89%E5%BD%B1%E7%9F%B3%E5%88%9B%E6%96%B0%23) `108.3K 🔥` `NEW`
1. [LOL季中杯全球总决赛官宣](https://s.weibo.com/weibo?q=%23LOL%E5%AD%A3%E4%B8%AD%E6%9D%AF%E5%85%A8%E7%90%83%E6%80%BB%E5%86%B3%E8%B5%9B%E5%AE%98%E5%AE%A3%23) `91.8K 🔥` `NEW`
1. [特朗普转发视频嘲讽英国首相](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%BD%AC%E5%8F%91%E8%A7%86%E9%A2%91%E5%98%B2%E8%AE%BD%E8%8B%B1%E5%9B%BD%E9%A6%96%E7%9B%B8%23) `82.1K 🔥` `NEW`
1. [洛克王国世界预下载 (Rock Kingdom World pre-download)](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%E4%B8%96%E7%95%8C%E9%A2%84%E4%B8%8B%E8%BD%BD%23) `72.7K 🔥` `NEW`
1. [逐玉if线](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89if%E7%BA%BF%23) `72.3K 🔥` `NEW`
1. [假如逐玉弹幕有声音](https://s.weibo.com/weibo?q=%23%E5%81%87%E5%A6%82%E9%80%90%E7%8E%89%E5%BC%B9%E5%B9%95%E6%9C%89%E5%A3%B0%E9%9F%B3%23) `68.9K 🔥` `NEW`
1. [黄金下破4400美元](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%B8%8B%E7%A0%B44400%E7%BE%8E%E5%85%83%23) `66.8K 🔥` `NEW`
1. [郭晓婷早春私服穿搭](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E6%97%A9%E6%98%A5%E7%A7%81%E6%9C%8D%E7%A9%BF%E6%90%AD%23) `66.4K 🔥` `NEW`
1. [梅西任意球破门](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E4%BB%BB%E6%84%8F%E7%90%83%E7%A0%B4%E9%97%A8%23) `65.9K 🔥` `NEW`
1. [金价为何八连跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%BA%E4%BD%95%E5%85%AB%E8%BF%9E%E8%B7%8C%23) `65.2K 🔥` `NEW`
1. [注意用脑卫生](https://s.weibo.com/weibo?q=%23%E6%B3%A8%E6%84%8F%E7%94%A8%E8%84%91%E5%8D%AB%E7%94%9F%23) `1.1M 🔥` `+970%`
1. [Bin是世一上](https://s.weibo.com/weibo?q=%23Bin%E6%98%AF%E4%B8%96%E4%B8%80%E4%B8%8A%23) `335.6K 🔥` `+43%`
1. [本周做什么都顺的星座](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E5%81%9A%E4%BB%80%E4%B9%88%E9%83%BD%E9%A1%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `160.8K 🔥` `+113%`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `160.4K 🔥` `+25%`
1. [Elk BLG](https://s.weibo.com/weibo?q=%23Elk%20BLG%23) `148.9K 🔥` `+37%`
1. [东北虎吃完保险公司买单](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E8%99%8E%E5%90%83%E5%AE%8C%E4%BF%9D%E9%99%A9%E5%85%AC%E5%8F%B8%E4%B9%B0%E5%8D%95%23) `127.3K 🔥` `+79%`
1. [田曦薇撅嘴要张凌赫道歉 (Tian Xiwei pouted and asked Zhang Linghe to apologize)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%92%85%E5%98%B4%E8%A6%81%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%81%93%E6%AD%89%23) `126.9K 🔥` `+27%`
1. [夫妻结婚22年水电费分摊有零有整](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E7%BB%93%E5%A9%9A22%E5%B9%B4%E6%B0%B4%E7%94%B5%E8%B4%B9%E5%88%86%E6%91%8A%E6%9C%89%E9%9B%B6%E6%9C%89%E6%95%B4%23) `126.8K 🔥` `+27%`
1. [王鸥 何九华 (Wang Ou He Jiuhua)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%20%E4%BD%95%E4%B9%9D%E5%8D%8E%23) `124.9K 🔥` `+24%`
1. [男子拿130万买黄金刚买68万就遇跌](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8B%BF130%E4%B8%87%E4%B9%B0%E9%BB%84%E9%87%91%E5%88%9A%E4%B9%B068%E4%B8%87%E5%B0%B1%E9%81%87%E8%B7%8C%23) `80.7K 🔥` `+30%`
1. [汪苏泷说到底是谁传的周杰伦来了 (Wang Sulong said who told Jay Chou is here?)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E8%AF%B4%E5%88%B0%E5%BA%95%E6%98%AF%E8%B0%81%E4%BC%A0%E7%9A%84%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%9D%A5%E4%BA%86%23) `80.7K 🔥` `+156%`
1. [9组数据见证大国治水生动画卷 (9 sets of data testify to the animation volume of aquatic governance in a great country)](https://s.weibo.com/weibo?q=%239%E7%BB%84%E6%95%B0%E6%8D%AE%E8%A7%81%E8%AF%81%E5%A4%A7%E5%9B%BD%E6%B2%BB%E6%B0%B4%E7%94%9F%E5%8A%A8%E7%94%BB%E5%8D%B7%23) `634.9K 🔥`
1. [华为春季全场景新品发布会 (Huawei spring full-scenario new product launch conference)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%98%A5%E5%AD%A3%E5%85%A8%E5%9C%BA%E6%99%AF%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%E4%BC%9A%23) `380.5K 🔥`
1. [长期运动可以解决生活中很多问题 (Long-term exercise can solve many problems in life)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E8%BF%90%E5%8A%A8%E5%8F%AF%E4%BB%A5%E8%A7%A3%E5%86%B3%E7%94%9F%E6%B4%BB%E4%B8%AD%E5%BE%88%E5%A4%9A%E9%97%AE%E9%A2%98%23) `88.1K 🔥`
1. [苍兰诀当年的出圈程度](https://s.weibo.com/weibo?q=%23%E8%8B%8D%E5%85%B0%E8%AF%80%E5%BD%93%E5%B9%B4%E7%9A%84%E5%87%BA%E5%9C%88%E7%A8%8B%E5%BA%A6%23) `68.7K 🔥`
1. [梅姨每交易1名儿童拿1000元介绍费 (Aunt Mei gets an introduction fee of 1,000 yuan for every child she trades.)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E6%AF%8F%E4%BA%A4%E6%98%931%E5%90%8D%E5%84%BF%E7%AB%A5%E6%8B%BF1000%E5%85%83%E4%BB%8B%E7%BB%8D%E8%B4%B9%23) `766.2K 🔥` `-25%`
1. [BLG夺冠 (BLG wins the championship)](https://s.weibo.com/weibo?q=%23BLG%E5%A4%BA%E5%86%A0%23) `181.8K 🔥` `-60%`
1. [齐旻死在了俞浅浅爱上他的那一刻](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%97%BB%E6%AD%BB%E5%9C%A8%E4%BA%86%E4%BF%9E%E6%B5%85%E6%B5%85%E7%88%B1%E4%B8%8A%E4%BB%96%E7%9A%84%E9%82%A3%E4%B8%80%E5%88%BB%23) `127.7K 🔥` `-42%`
1. [5种炎症可能变成癌症 (5 types of inflammation that can turn into cancer)](https://s.weibo.com/weibo?q=%235%E7%A7%8D%E7%82%8E%E7%97%87%E5%8F%AF%E8%83%BD%E5%8F%98%E6%88%90%E7%99%8C%E7%97%87%23) `127.7K 🔥` `-39%`
1. [黄金白银开涨了 (Gold and silver opened higher)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E5%BC%80%E6%B6%A8%E4%BA%86%23) `127.1K 🔥` `-55%`
1. [原来贾玲旁边的是瞿颖啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%B4%BE%E7%8E%B2%E6%97%81%E8%BE%B9%E7%9A%84%E6%98%AF%E7%9E%BF%E9%A2%96%E5%95%8A%23) `105.5K 🔥` `-51%`
1. [你好1983 (hello1983)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD1983%23) `93.1K 🔥` `-79%`
1. [迪丽热巴化妆王崇 (Dilireba makeup Wang Chong)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8C%96%E5%A6%86%E7%8E%8B%E5%B4%87%23) `80.7K 🔥` `-27%`
1. [女护士被男友杀害男方家属发文道歉](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%8A%A4%E5%A3%AB%E8%A2%AB%E7%94%B7%E5%8F%8B%E6%9D%80%E5%AE%B3%E7%94%B7%E6%96%B9%E5%AE%B6%E5%B1%9E%E5%8F%91%E6%96%87%E9%81%93%E6%AD%89%23) `70.2K 🔥` `-48%`

Updated at 2026-03-23 10:00:26

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
