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

1. [华为芯片 (Huawei chip)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E8%8A%AF%E7%89%87%23) `2.7M 🔥` `NEW`
1. [乘风四公双人合作曲限时推荐](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E5%9B%9B%E5%85%AC%E5%8F%8C%E4%BA%BA%E5%90%88%E4%BD%9C%E6%9B%B2%E9%99%90%E6%97%B6%E6%8E%A8%E8%8D%90%23) `1.0M 🔥` `NEW`
1. [智能机器人加速走进日常生活](https://s.weibo.com/weibo?q=%23%E6%99%BA%E8%83%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8A%A0%E9%80%9F%E8%B5%B0%E8%BF%9B%E6%97%A5%E5%B8%B8%E7%94%9F%E6%B4%BB%23) `830.1K 🔥` `NEW`
1. [京东十大品牌手机电脑1折起](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%8D%81%E5%A4%A7%E5%93%81%E7%89%8C%E6%89%8B%E6%9C%BA%E7%94%B5%E8%84%911%E6%8A%98%E8%B5%B7%23) `810.7K 🔥` `NEW`
1. [任敏觉得邓超不太舒服](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E8%A7%89%E5%BE%97%E9%82%93%E8%B6%85%E4%B8%8D%E5%A4%AA%E8%88%92%E6%9C%8D%23) `796.1K 🔥` `NEW`
1. [不愧是老祖宗严选的地理位置](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%84%A7%E6%98%AF%E8%80%81%E7%A5%96%E5%AE%97%E4%B8%A5%E9%80%89%E7%9A%84%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AE%23) `780.0K 🔥` `NEW`
1. [被豆包忽悠花了5万元创业](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%B1%86%E5%8C%85%E5%BF%BD%E6%82%A0%E8%8A%B1%E4%BA%865%E4%B8%87%E5%85%83%E5%88%9B%E4%B8%9A%23) `757.6K 🔥` `NEW`
1. [聚酯纤维是塑料的具象化](https://s.weibo.com/weibo?q=%23%E8%81%9A%E9%85%AF%E7%BA%A4%E7%BB%B4%E6%98%AF%E5%A1%91%E6%96%99%E7%9A%84%E5%85%B7%E8%B1%A1%E5%8C%96%23) `728.8K 🔥` `NEW`
1. [曾沛慈团想唱搁浅](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%A2%E6%83%B3%E5%94%B1%E6%90%81%E6%B5%85%23) `649.4K 🔥` `NEW`
1. [穿阔腿裤最害怕遇到的事](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E9%98%94%E8%85%BF%E8%A3%A4%E6%9C%80%E5%AE%B3%E6%80%95%E9%81%87%E5%88%B0%E7%9A%84%E4%BA%8B%23) `569.6K 🔥` `NEW`
1. [前北京国安球星脑梗后走路困难 (Former Beijing Guoan star has difficulty walking after cerebral infarction)](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%8C%97%E4%BA%AC%E5%9B%BD%E5%AE%89%E7%90%83%E6%98%9F%E8%84%91%E6%A2%97%E5%90%8E%E8%B5%B0%E8%B7%AF%E5%9B%B0%E9%9A%BE%23) `567.1K 🔥` `NEW`
1. [秦岚也不舒服了](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E4%B9%9F%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `566.3K 🔥` `NEW`
1. [男子灭蚊4年收尸记死期做标本](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%81%AD%E8%9A%8A4%E5%B9%B4%E6%94%B6%E5%B0%B8%E8%AE%B0%E6%AD%BB%E6%9C%9F%E5%81%9A%E6%A0%87%E6%9C%AC%23) `560.1K 🔥` `NEW`
1. [五哈不舒服学](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%88%E4%B8%8D%E8%88%92%E6%9C%8D%E5%AD%A6%23) `557.3K 🔥` `NEW`
1. [吴泽林也不舒服了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%B3%BD%E6%9E%97%E4%B9%9F%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `554.9K 🔥` `NEW`
1. [美伊就开放霍尔木兹海峡达成一致](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%B0%B1%E5%BC%80%E6%94%BE%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E8%BE%BE%E6%88%90%E4%B8%80%E8%87%B4%23) `551.8K 🔥` `NEW`
1. [李思潼 虎鲸文娱](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%80%9D%E6%BD%BC%20%E8%99%8E%E9%B2%B8%E6%96%87%E5%A8%B1%23) `548.1K 🔥` `NEW`
1. [妈妈回应米粒离世6年后迎三胎](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E7%B1%B3%E7%B2%92%E7%A6%BB%E4%B8%966%E5%B9%B4%E5%90%8E%E8%BF%8E%E4%B8%89%E8%83%8E%23) `544.5K 🔥` `NEW`
1. [幼儿园家长接力赛混入国家队](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E5%AE%B6%E9%95%BF%E6%8E%A5%E5%8A%9B%E8%B5%9B%E6%B7%B7%E5%85%A5%E5%9B%BD%E5%AE%B6%E9%98%9F%23) `540.6K 🔥` `NEW`
1. [曝朱梓骁恋情](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9C%B1%E6%A2%93%E9%AA%81%E6%81%8B%E6%83%85%23) `538.1K 🔥` `NEW`
1. [尼格买提被杨幂人气震惊到了 (Nigmaiti was shocked by Yang Mi’s popularity)](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%A0%BC%E4%B9%B0%E6%8F%90%E8%A2%AB%E6%9D%A8%E5%B9%82%E4%BA%BA%E6%B0%94%E9%9C%87%E6%83%8A%E5%88%B0%E4%BA%86%23) `534.1K 🔥` `NEW`
1. [女子遭家暴被扔下土崖致死案将开庭](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%81%AD%E5%AE%B6%E6%9A%B4%E8%A2%AB%E6%89%94%E4%B8%8B%E5%9C%9F%E5%B4%96%E8%87%B4%E6%AD%BB%E6%A1%88%E5%B0%86%E5%BC%80%E5%BA%AD%23) `525.4K 🔥` `NEW`
1. [迟宗琳与父亲名字同刻遗体捐献纪念墙](https://s.weibo.com/weibo?q=%23%E8%BF%9F%E5%AE%97%E7%90%B3%E4%B8%8E%E7%88%B6%E4%BA%B2%E5%90%8D%E5%AD%97%E5%90%8C%E5%88%BB%E9%81%97%E4%BD%93%E6%8D%90%E7%8C%AE%E7%BA%AA%E5%BF%B5%E5%A2%99%23) `525.0K 🔥` `NEW`
1. [王源起诉B站侵权](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E8%B5%B7%E8%AF%89B%E7%AB%99%E4%BE%B5%E6%9D%83%23) `519.9K 🔥` `NEW`
1. [王濛团选歌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%9B%A2%E9%80%89%E6%AD%8C%23) `517.2K 🔥` `NEW`
1. [A股两大板块爆发](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%A4%E5%A4%A7%E6%9D%BF%E5%9D%97%E7%88%86%E5%8F%91%23) `515.9K 🔥` `NEW`
1. [网红打卡点女厕所藏针孔摄像头](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%89%93%E5%8D%A1%E7%82%B9%E5%A5%B3%E5%8E%95%E6%89%80%E8%97%8F%E9%92%88%E5%AD%94%E6%91%84%E5%83%8F%E5%A4%B4%23) `511.3K 🔥` `NEW`
1. [王楚然高反手都肿了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%AB%98%E5%8F%8D%E6%89%8B%E9%83%BD%E8%82%BF%E4%BA%86%23) `508.9K 🔥` `NEW`
1. [很多工作明明可以双休](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E5%B7%A5%E4%BD%9C%E6%98%8E%E6%98%8E%E5%8F%AF%E4%BB%A5%E5%8F%8C%E4%BC%91%23) `508.1K 🔥` `NEW`
1. [刘琳琳玩王鹤棣的梗](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%90%B3%E7%90%B3%E7%8E%A9%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%9A%84%E6%A2%97%23) `505.4K 🔥` `NEW`
1. [神童减重37kg大变样 (Prodigy lost 37kg and changed drastically)](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E7%AB%A5%E5%87%8F%E9%87%8D37kg%E5%A4%A7%E5%8F%98%E6%A0%B7%23) `501.8K 🔥` `NEW`
1. [钎九](https://s.weibo.com/weibo?q=%23%E9%92%8E%E4%B9%9D%23) `497.6K 🔥` `NEW`
1. [中国芯片走出不同于西方的路](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%8A%AF%E7%89%87%E8%B5%B0%E5%87%BA%E4%B8%8D%E5%90%8C%E4%BA%8E%E8%A5%BF%E6%96%B9%E7%9A%84%E8%B7%AF%23) `496.6K 🔥` `NEW`
1. [鹿晗工作室你让我很没面子](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%B7%A5%E4%BD%9C%E5%AE%A4%E4%BD%A0%E8%AE%A9%E6%88%91%E5%BE%88%E6%B2%A1%E9%9D%A2%E5%AD%90%23) `493.7K 🔥` `NEW`
1. [张月团想唱什么](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%9B%A2%E6%83%B3%E5%94%B1%E4%BB%80%E4%B9%88%23) `491.2K 🔥` `NEW`
1. [辞职前先请一周假](https://s.weibo.com/weibo?q=%23%E8%BE%9E%E8%81%8C%E5%89%8D%E5%85%88%E8%AF%B7%E4%B8%80%E5%91%A8%E5%81%87%23) `488.9K 🔥` `NEW`
1. [张元英 水光肌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%20%E6%B0%B4%E5%85%89%E8%82%8C%23) `485.9K 🔥` `NEW`
1. [中方依法禁止对日出口两用物项](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E4%BE%9D%E6%B3%95%E7%A6%81%E6%AD%A2%E5%AF%B9%E6%97%A5%E5%87%BA%E5%8F%A3%E4%B8%A4%E7%94%A8%E7%89%A9%E9%A1%B9%23) `479.8K 🔥` `NEW`
1. [林一至今唯一对不起的只有沈腾](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%E8%87%B3%E4%BB%8A%E5%94%AF%E4%B8%80%E5%AF%B9%E4%B8%8D%E8%B5%B7%E7%9A%84%E5%8F%AA%E6%9C%89%E6%B2%88%E8%85%BE%23) `475.8K 🔥` `NEW`
1. [胡歌霍建华雪景封面当年都断货了](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E9%9C%8D%E5%BB%BA%E5%8D%8E%E9%9B%AA%E6%99%AF%E5%B0%81%E9%9D%A2%E5%BD%93%E5%B9%B4%E9%83%BD%E6%96%AD%E8%B4%A7%E4%BA%86%23) `474.4K 🔥` `NEW`
1. [业内说唐嫣事业起点非常高 (The industry says Tang Yan has a very high starting point in her career)](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E8%AF%B4%E5%94%90%E5%AB%A3%E4%BA%8B%E4%B8%9A%E8%B5%B7%E7%82%B9%E9%9D%9E%E5%B8%B8%E9%AB%98%23) `468.3K 🔥` `NEW`
1. [原神](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%23) `464.2K 🔥` `NEW`
1. [微信多项新功能](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%A4%9A%E9%A1%B9%E6%96%B0%E5%8A%9F%E8%83%BD%23) `461.9K 🔥` `NEW`
1. [亚朵酒店打扫后床垫残留卷曲毛发](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%9C%B5%E9%85%92%E5%BA%97%E6%89%93%E6%89%AB%E5%90%8E%E5%BA%8A%E5%9E%AB%E6%AE%8B%E7%95%99%E5%8D%B7%E6%9B%B2%E6%AF%9B%E5%8F%91%23) `461.0K 🔥` `NEW`
1. [1瓶康师傅水蜜桃只有0.01克水蜜桃汁](https://s.weibo.com/weibo?q=%231%E7%93%B6%E5%BA%B7%E5%B8%88%E5%82%85%E6%B0%B4%E8%9C%9C%E6%A1%83%E5%8F%AA%E6%9C%890.01%E5%85%8B%E6%B0%B4%E8%9C%9C%E6%A1%83%E6%B1%81%23) `456.7K 🔥` `NEW`
1. [30岁男子患癌后想凭意念消除癌细胞](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E7%94%B7%E5%AD%90%E6%82%A3%E7%99%8C%E5%90%8E%E6%83%B3%E5%87%AD%E6%84%8F%E5%BF%B5%E6%B6%88%E9%99%A4%E7%99%8C%E7%BB%86%E8%83%9E%23) `544.6K 🔥` `+59%`
1. [万千惠 乌兰图雅](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%20%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%23) `480.7K 🔥` `+23%`
1. [体面分手有个弊端是容易造成误会](https://s.weibo.com/weibo?q=%23%E4%BD%93%E9%9D%A2%E5%88%86%E6%89%8B%E6%9C%89%E4%B8%AA%E5%BC%8A%E7%AB%AF%E6%98%AF%E5%AE%B9%E6%98%93%E9%80%A0%E6%88%90%E8%AF%AF%E4%BC%9A%23) `469.8K 🔥` `+43%`
1. [王鹤棣经纪人朋友圈 (Wang Hedi’s agent’s circle of friends)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `563.6K 🔥` `-96%`
1. [第一个想到用小票当壁纸的是天才](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%83%B3%E5%88%B0%E7%94%A8%E5%B0%8F%E7%A5%A8%E5%BD%93%E5%A3%81%E7%BA%B8%E7%9A%84%E6%98%AF%E5%A4%A9%E6%89%8D%23) `531.0K 🔥` `-29%`
1. [山西煤矿爆炸瞬间监控曝光](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E7%88%86%E7%82%B8%E7%9E%AC%E9%97%B4%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23) `529.8K 🔥` `-61%`

Updated at 2026-05-25 16:58:21

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
