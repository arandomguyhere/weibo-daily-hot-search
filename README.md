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

1. [这一秒过火 短剧感 (This second went too far, it felt like a short drama)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%20%E7%9F%AD%E5%89%A7%E6%84%9F%23) `1.7M 🔥` `NEW`
1. [马龙许昕vs林高远袁烜松](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95vs%E6%9E%97%E9%AB%98%E8%BF%9C%E8%A2%81%E7%83%9C%E6%9D%BE%23) `1.2M 🔥` `NEW`
1. [中国推动全球AI治理迈入合作新阶段](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%8E%A8%E5%8A%A8%E5%85%A8%E7%90%83AI%E6%B2%BB%E7%90%86%E8%BF%88%E5%85%A5%E5%90%88%E4%BD%9C%E6%96%B0%E9%98%B6%E6%AE%B5%23) `1.1M 🔥` `NEW`
1. [那个从来都不喝水的朋友](https://s.weibo.com/weibo?q=%23%E9%82%A3%E4%B8%AA%E4%BB%8E%E6%9D%A5%E9%83%BD%E4%B8%8D%E5%96%9D%E6%B0%B4%E7%9A%84%E6%9C%8B%E5%8F%8B%23) `982.8K 🔥` `NEW`
1. [这一秒过火 AI片头](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%20AI%E7%89%87%E5%A4%B4%23) `968.9K 🔥` `NEW`
1. [姆巴佩决赛预测](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%86%B3%E8%B5%9B%E9%A2%84%E6%B5%8B%23) `687.7K 🔥` `NEW`
1. [官方辟谣不锈钢餐具有毒](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E4%B8%8D%E9%94%88%E9%92%A2%E9%A4%90%E5%85%B7%E6%9C%89%E6%AF%92%23) `687.2K 🔥` `NEW`
1. [这一秒过火 易军](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%20%E6%98%93%E5%86%9B%23) `678.8K 🔥` `NEW`
1. [山西人午睡像进入平行时空](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%BA%BA%E5%8D%88%E7%9D%A1%E5%83%8F%E8%BF%9B%E5%85%A5%E5%B9%B3%E8%A1%8C%E6%97%B6%E7%A9%BA%23) `636.1K 🔥` `NEW`
1. [当我坐飞机忘记关导航时](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E5%9D%90%E9%A3%9E%E6%9C%BA%E5%BF%98%E8%AE%B0%E5%85%B3%E5%AF%BC%E8%88%AA%E6%97%B6%23) `567.2K 🔥` `NEW`
1. [暑假接来玩14岁儿子纹成大花腿 (During the summer vacation, my 14-year-old son got tattoos on his legs.)](https://s.weibo.com/weibo?q=%23%E6%9A%91%E5%81%87%E6%8E%A5%E6%9D%A5%E7%8E%A914%E5%B2%81%E5%84%BF%E5%AD%90%E7%BA%B9%E6%88%90%E5%A4%A7%E8%8A%B1%E8%85%BF%23) `416.2K 🔥` `NEW`
1. [TF五代去看了王俊凯演唱会](https://s.weibo.com/weibo?q=%23TF%E4%BA%94%E4%BB%A3%E5%8E%BB%E7%9C%8B%E4%BA%86%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `409.3K 🔥` `NEW`
1. [伊朗直接掀了桌子](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9B%B4%E6%8E%A5%E6%8E%80%E4%BA%86%E6%A1%8C%E5%AD%90%23) `395.2K 🔥` `NEW`
1. [Angelababy素颜转场视频](https://s.weibo.com/weibo?q=%23Angelababy%E7%B4%A0%E9%A2%9C%E8%BD%AC%E5%9C%BA%E8%A7%86%E9%A2%91%23) `385.0K 🔥` `NEW`
1. [她活了 我疯了](https://s.weibo.com/weibo?q=%23%E5%A5%B9%E6%B4%BB%E4%BA%86%20%E6%88%91%E7%96%AF%E4%BA%86%23) `384.4K 🔥` `NEW`
1. [世界两大AI组织都是狠角色](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B8%A4%E5%A4%A7AI%E7%BB%84%E7%BB%87%E9%83%BD%E6%98%AF%E7%8B%A0%E8%A7%92%E8%89%B2%23) `366.5K 🔥` `NEW`
1. [AI行业要重新洗牌了](https://s.weibo.com/weibo?q=%23AI%E8%A1%8C%E4%B8%9A%E8%A6%81%E9%87%8D%E6%96%B0%E6%B4%97%E7%89%8C%E4%BA%86%23) `350.1K 🔥` `NEW`
1. [这一秒过火走势](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E8%B5%B0%E5%8A%BF%23) `338.9K 🔥` `NEW`
1. [儿媳晒公公带孙女走红](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AA%B3%E6%99%92%E5%85%AC%E5%85%AC%E5%B8%A6%E5%AD%99%E5%A5%B3%E8%B5%B0%E7%BA%A2%23) `322.0K 🔥` `NEW`
1. [周柯宇问丁程鑫团里最小的是谁](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9F%AF%E5%AE%87%E9%97%AE%E4%B8%81%E7%A8%8B%E9%91%AB%E5%9B%A2%E9%87%8C%E6%9C%80%E5%B0%8F%E7%9A%84%E6%98%AF%E8%B0%81%23) `312.6K 🔥` `NEW`
1. [张凌赫王楚然招商 (Zhang Linghe and Wang Churan attract investment)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%8B%9B%E5%95%86%23) `289.4K 🔥` `NEW`
1. [别的狗都在跑第四只竟然在飞](https://s.weibo.com/weibo?q=%23%E5%88%AB%E7%9A%84%E7%8B%97%E9%83%BD%E5%9C%A8%E8%B7%91%E7%AC%AC%E5%9B%9B%E5%8F%AA%E7%AB%9F%E7%84%B6%E5%9C%A8%E9%A3%9E%23) `277.4K 🔥` `NEW`
1. [阿根廷西班牙冠军预测](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%A5%BF%E7%8F%AD%E7%89%99%E5%86%A0%E5%86%9B%E9%A2%84%E6%B5%8B%23) `254.9K 🔥` `NEW`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `187.7K 🔥` `NEW`
1. [建议大家对钱得有概念](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%AF%B9%E9%92%B1%E5%BE%97%E6%9C%89%E6%A6%82%E5%BF%B5%23) `179.3K 🔥` `NEW`
1. [Kimi K3把美股半导体干崩了](https://s.weibo.com/weibo?q=%23Kimi%20K3%E6%8A%8A%E7%BE%8E%E8%82%A1%E5%8D%8A%E5%AF%BC%E4%BD%93%E5%B9%B2%E5%B4%A9%E4%BA%86%23) `171.3K 🔥` `NEW`
1. [吴磊把手机插泥地里了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E6%8A%8A%E6%89%8B%E6%9C%BA%E6%8F%92%E6%B3%A5%E5%9C%B0%E9%87%8C%E4%BA%86%23) `165.1K 🔥` `NEW`
1. [小伙硬扛30天不吸烟逐渐帅成明星](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E7%A1%AC%E6%89%9B30%E5%A4%A9%E4%B8%8D%E5%90%B8%E7%83%9F%E9%80%90%E6%B8%90%E5%B8%85%E6%88%90%E6%98%8E%E6%98%9F%23) `163.5K 🔥` `NEW`
1. [马宁世界杯执法获评8.4分](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E4%B8%96%E7%95%8C%E6%9D%AF%E6%89%A7%E6%B3%95%E8%8E%B7%E8%AF%848.4%E5%88%86%23) `142.5K 🔥` `NEW`
1. [乒乓球全锦赛双打半决赛](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E5%85%A8%E9%94%A6%E8%B5%9B%E5%8F%8C%E6%89%93%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `141.1K 🔥` `NEW`
1. [马斯克的钱输到手机里可以拨通 (Musk’s money can be dialed after he loses it to his mobile phone)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%9A%84%E9%92%B1%E8%BE%93%E5%88%B0%E6%89%8B%E6%9C%BA%E9%87%8C%E5%8F%AF%E4%BB%A5%E6%8B%A8%E9%80%9A%23) `139.9K 🔥` `NEW`
1. [孟子义热晕了](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%83%AD%E6%99%95%E4%BA%86%23) `133.4K 🔥` `NEW`
1. [德尚中场休息怒斥法国队球员](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%B0%9A%E4%B8%AD%E5%9C%BA%E4%BC%91%E6%81%AF%E6%80%92%E6%96%A5%E6%B3%95%E5%9B%BD%E9%98%9F%E7%90%83%E5%91%98%23) `127.8K 🔥` `NEW`
1. [奥利塞赛后痛哭](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E5%A1%9E%E8%B5%9B%E5%90%8E%E7%97%9B%E5%93%AD%23) `122.8K 🔥` `NEW`
1. [CORTIS演唱会 互相饭撒](https://s.weibo.com/weibo?q=%23CORTIS%E6%BC%94%E5%94%B1%E4%BC%9A%20%E4%BA%92%E7%9B%B8%E9%A5%AD%E6%92%92%23) `119.7K 🔥` `NEW`
1. [野狗骨头 宣发](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%20%E5%AE%A3%E5%8F%91%23) `119.7K 🔥` `NEW`
1. [长鑫科技中签结果](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E4%B8%AD%E7%AD%BE%E7%BB%93%E6%9E%9C%23) `119.3K 🔥` `NEW`
1. [TF四代我们的少年时代2招商中](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E6%8B%9B%E5%95%86%E4%B8%AD%23) `119.3K 🔥` `NEW`
1. [刘宇宁此事到此为止](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%AD%A4%E4%BA%8B%E5%88%B0%E6%AD%A4%E4%B8%BA%E6%AD%A2%23) `407.4K 🔥`
1. [曾沛慈老公](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E8%80%81%E5%85%AC%23) `242.1K 🔥`
1. [刘宇宁让粉丝删掉不好听的评论 (Liu Yuning asks fans to delete unpleasant comments)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AE%A9%E7%B2%89%E4%B8%9D%E5%88%A0%E6%8E%89%E4%B8%8D%E5%A5%BD%E5%90%AC%E7%9A%84%E8%AF%84%E8%AE%BA%23) `364.1K 🔥` `-53%`
1. [姆巴佩历史第一 (Mbappe first in history)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%8E%86%E5%8F%B2%E7%AC%AC%E4%B8%80%23) `332.5K 🔥` `-75%`
1. [王俊凯前助理去了王俊凯演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%89%8D%E5%8A%A9%E7%90%86%E5%8E%BB%E4%BA%86%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `276.3K 🔥` `-61%`
1. [为何穿凉鞋的人越来越少了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BD%95%E7%A9%BF%E5%87%89%E9%9E%8B%E7%9A%84%E4%BA%BA%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%B0%91%E4%BA%86%23) `189.9K 🔥` `-72%`
1. [法国4比6英格兰](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD4%E6%AF%946%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `185.7K 🔥` `-70%`
1. [爸妈打闹6个月宝宝将妈妈护在身后](https://s.weibo.com/weibo?q=%23%E7%88%B8%E5%A6%88%E6%89%93%E9%97%B96%E4%B8%AA%E6%9C%88%E5%AE%9D%E5%AE%9D%E5%B0%86%E5%A6%88%E5%A6%88%E6%8A%A4%E5%9C%A8%E8%BA%AB%E5%90%8E%23) `185.3K 🔥` `-31%`
1. [曾沛慈回应老公当monitor (Zeng Peici responded to her husband being a monitor)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%9E%E5%BA%94%E8%80%81%E5%85%AC%E5%BD%93monitor%23) `185.0K 🔥` `-32%`
1. [贝林厄姆 颜值](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%20%E9%A2%9C%E5%80%BC%23) `183.6K 🔥` `-79%`
1. [旭旭宝宝说对功夫女足不感兴趣](https://s.weibo.com/weibo?q=%23%E6%97%AD%E6%97%AD%E5%AE%9D%E5%AE%9D%E8%AF%B4%E5%AF%B9%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E4%B8%8D%E6%84%9F%E5%85%B4%E8%B6%A3%23) `154.2K 🔥` `-43%`
1. [吧唧 甲醛 (Formaldehyde)](https://s.weibo.com/weibo?q=%23%E5%90%A7%E5%94%A7%20%E7%94%B2%E9%86%9B%23) `138.8K 🔥` `-49%`
1. [盒马被曝让员工三伏天在户外吃饭](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%AC%E8%A2%AB%E6%9B%9D%E8%AE%A9%E5%91%98%E5%B7%A5%E4%B8%89%E4%BC%8F%E5%A4%A9%E5%9C%A8%E6%88%B7%E5%A4%96%E5%90%83%E9%A5%AD%23) `119.4K 🔥` `-46%`

Updated at 2026-07-19 14:30:08

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
