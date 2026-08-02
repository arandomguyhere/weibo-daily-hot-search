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

1. [女孩截图假付款 (Girl screenshot fake payment)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%88%AA%E5%9B%BE%E5%81%87%E4%BB%98%E6%AC%BE%23) `1.7M 🔥` `NEW`
1. [银行 午休](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%20%E5%8D%88%E4%BC%91%23) `1.3M 🔥` `NEW`
1. [新一代通信网建设加快](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%80%E4%BB%A3%E9%80%9A%E4%BF%A1%E7%BD%91%E5%BB%BA%E8%AE%BE%E5%8A%A0%E5%BF%AB%23) `1.2M 🔥` `NEW`
1. [日本地震灾区呼吁不要再送千纸鹤](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%E7%81%BE%E5%8C%BA%E5%91%BC%E5%90%81%E4%B8%8D%E8%A6%81%E5%86%8D%E9%80%81%E5%8D%83%E7%BA%B8%E9%B9%A4%23) `658.1K 🔥` `NEW`
1. [Mikimoto高级珠宝亚洲首展](https://s.weibo.com/weibo?q=%23Mikimoto%E9%AB%98%E7%BA%A7%E7%8F%A0%E5%AE%9D%E4%BA%9A%E6%B4%B2%E9%A6%96%E5%B1%95%23) `624.4K 🔥` `NEW`
1. [印度韩国突然宣称有媲美DeepSeek大模型](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%9F%A9%E5%9B%BD%E7%AA%81%E7%84%B6%E5%AE%A3%E7%A7%B0%E6%9C%89%E5%AA%B2%E7%BE%8EDeepSeek%E5%A4%A7%E6%A8%A1%E5%9E%8B%23) `559.0K 🔥` `NEW`
1. [赞达亚戴3000年文物耳环被批](https://s.weibo.com/weibo?q=%23%E8%B5%9E%E8%BE%BE%E4%BA%9A%E6%88%B43000%E5%B9%B4%E6%96%87%E7%89%A9%E8%80%B3%E7%8E%AF%E8%A2%AB%E6%89%B9%23) `556.0K 🔥` `NEW`
1. [天总曝一线明星一部戏收入仅一百多万](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%80%BB%E6%9B%9D%E4%B8%80%E7%BA%BF%E6%98%8E%E6%98%9F%E4%B8%80%E9%83%A8%E6%88%8F%E6%94%B6%E5%85%A5%E4%BB%85%E4%B8%80%E7%99%BE%E5%A4%9A%E4%B8%87%23) `321.1K 🔥` `NEW`
1. [情侣是一种很诡异的亲密关系](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E6%98%AF%E4%B8%80%E7%A7%8D%E5%BE%88%E8%AF%A1%E5%BC%82%E7%9A%84%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%23) `321.1K 🔥` `NEW`
1. [为什么现在的超市都不需要存包了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E7%9A%84%E8%B6%85%E5%B8%82%E9%83%BD%E4%B8%8D%E9%9C%80%E8%A6%81%E5%AD%98%E5%8C%85%E4%BA%86%23) `321.0K 🔥` `NEW`
1. [王楚钦说最近要告一段落啦 (Wang Chuqin said that it will come to an end recently.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E6%9C%80%E8%BF%91%E8%A6%81%E5%91%8A%E4%B8%80%E6%AE%B5%E8%90%BD%E5%95%A6%23) `321.0K 🔥` `NEW`
1. [黄晓明口型](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%8F%A3%E5%9E%8B%23) `321.0K 🔥` `NEW`
1. [罗正 前女友](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%20%E5%89%8D%E5%A5%B3%E5%8F%8B%23) `321.0K 🔥` `NEW`
1. [宋威龙新头像](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%96%B0%E5%A4%B4%E5%83%8F%23) `321.0K 🔥` `NEW`
1. [地铁吐血女孩为嫣然基金捐99999元](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E4%B8%BA%E5%AB%A3%E7%84%B6%E5%9F%BA%E9%87%91%E6%8D%9099999%E5%85%83%23) `299.4K 🔥` `NEW`
1. [TF家族五公划区](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E4%BA%94%E5%85%AC%E5%88%92%E5%8C%BA%23) `298.5K 🔥` `NEW`
1. [罗正 异人之下](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%20%E5%BC%82%E4%BA%BA%E4%B9%8B%E4%B8%8B%23) `277.9K 🔥` `NEW`
1. [日本巨资救日元难解贬值危机](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%B7%A8%E8%B5%84%E6%95%91%E6%97%A5%E5%85%83%E9%9A%BE%E8%A7%A3%E8%B4%AC%E5%80%BC%E5%8D%B1%E6%9C%BA%23) `277.5K 🔥` `NEW`
1. [歼20实弹发射罕见曝光](https://s.weibo.com/weibo?q=%23%E6%AD%BC20%E5%AE%9E%E5%BC%B9%E5%8F%91%E5%B0%84%E7%BD%95%E8%A7%81%E6%9B%9D%E5%85%89%23) `277.1K 🔥` `NEW`
1. [又一个网红保健品翻车](https://s.weibo.com/weibo?q=%23%E5%8F%88%E4%B8%80%E4%B8%AA%E7%BD%91%E7%BA%A2%E4%BF%9D%E5%81%A5%E5%93%81%E7%BF%BB%E8%BD%A6%23) `276.5K 🔥` `NEW`
1. [施南生追思会 大家都老了 (Shi Nansheng’s memorial service. Everyone is old)](https://s.weibo.com/weibo?q=%23%E6%96%BD%E5%8D%97%E7%94%9F%E8%BF%BD%E6%80%9D%E4%BC%9A%20%E5%A4%A7%E5%AE%B6%E9%83%BD%E8%80%81%E4%BA%86%23) `276.1K 🔥` `NEW`
1. [母亲把女儿当情绪垃圾桶](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E6%8A%8A%E5%A5%B3%E5%84%BF%E5%BD%93%E6%83%85%E7%BB%AA%E5%9E%83%E5%9C%BE%E6%A1%B6%23) `242.6K 🔥` `NEW`
1. [陈伟霆说陈瑶去了浪姐就是不一样](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E8%AF%B4%E9%99%88%E7%91%B6%E5%8E%BB%E4%BA%86%E6%B5%AA%E5%A7%90%E5%B0%B1%E6%98%AF%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `231.2K 🔥` `NEW`
1. [全球公认的蔬菜之王五强榜单](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E5%85%AC%E8%AE%A4%E7%9A%84%E8%94%AC%E8%8F%9C%E4%B9%8B%E7%8E%8B%E4%BA%94%E5%BC%BA%E6%A6%9C%E5%8D%95%23) `211.3K 🔥` `NEW`
1. [车银优创韩国艺人最高追缴税额纪录](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E9%93%B6%E4%BC%98%E5%88%9B%E9%9F%A9%E5%9B%BD%E8%89%BA%E4%BA%BA%E6%9C%80%E9%AB%98%E8%BF%BD%E7%BC%B4%E7%A8%8E%E9%A2%9D%E7%BA%AA%E5%BD%95%23) `210.9K 🔥` `NEW`
1. [九门高开高走](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E9%AB%98%E5%BC%80%E9%AB%98%E8%B5%B0%23) `210.9K 🔥` `NEW`
1. [王安宇一秒就摸出田曦薇的手](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E4%B8%80%E7%A7%92%E5%B0%B1%E6%91%B8%E5%87%BA%E7%94%B0%E6%9B%A6%E8%96%87%E7%9A%84%E6%89%8B%23) `207.0K 🔥` `NEW`
1. [原配称丈夫试管医院拒绝沟通](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E9%85%8D%E7%A7%B0%E4%B8%88%E5%A4%AB%E8%AF%95%E7%AE%A1%E5%8C%BB%E9%99%A2%E6%8B%92%E7%BB%9D%E6%B2%9F%E9%80%9A%23) `198.4K 🔥` `NEW`
1. [解说员嘲讽张继科赛事方道歉](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E8%AF%B4%E5%91%98%E5%98%B2%E8%AE%BD%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%B5%9B%E4%BA%8B%E6%96%B9%E9%81%93%E6%AD%89%23) `195.0K 🔥` `NEW`
1. [瑞幸门店称对嘴喷奶油属违规](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E9%97%A8%E5%BA%97%E7%A7%B0%E5%AF%B9%E5%98%B4%E5%96%B7%E5%A5%B6%E6%B2%B9%E5%B1%9E%E8%BF%9D%E8%A7%84%23) `186.5K 🔥` `NEW`
1. [王俊凯广州演唱会座位图 (Wang Junkai Guangzhou concert seating chart)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B9%BF%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E5%BA%A7%E4%BD%8D%E5%9B%BE%23) `180.5K 🔥` `NEW`
1. [敖瑞鹏 和平精英](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%20%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%23) `173.3K 🔥` `NEW`
1. [其实人是可以貌相的](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E4%BA%BA%E6%98%AF%E5%8F%AF%E4%BB%A5%E8%B2%8C%E7%9B%B8%E7%9A%84%23) `173.2K 🔥` `NEW`
1. [小米手机三轮涨价](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%89%8B%E6%9C%BA%E4%B8%89%E8%BD%AE%E6%B6%A8%E4%BB%B7%23) `173.0K 🔥` `NEW`
1. [家长带男童进女更衣室起冲突](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E5%B8%A6%E7%94%B7%E7%AB%A5%E8%BF%9B%E5%A5%B3%E6%9B%B4%E8%A1%A3%E5%AE%A4%E8%B5%B7%E5%86%B2%E7%AA%81%23) `172.9K 🔥` `NEW`
1. [上京东买美食大赛冠军同款菜 (Go to JD.com to buy the same dish as the winner of the gourmet food competition)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%AC%E4%B8%9C%E4%B9%B0%E7%BE%8E%E9%A3%9F%E5%A4%A7%E8%B5%9B%E5%86%A0%E5%86%9B%E5%90%8C%E6%AC%BE%E8%8F%9C%23) `1.2M 🔥` `+573%`
1. [一看就想睡的装修风格](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9C%8B%E5%B0%B1%E6%83%B3%E7%9D%A1%E7%9A%84%E8%A3%85%E4%BF%AE%E9%A3%8E%E6%A0%BC%23) `321.1K 🔥` `+30%`
1. [瑞幸回应门店员工被曝用奶油枪喂食 (Luckin responds to store employees who were exposed to feeding them with cream guns)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%9B%9E%E5%BA%94%E9%97%A8%E5%BA%97%E5%91%98%E5%B7%A5%E8%A2%AB%E6%9B%9D%E7%94%A8%E5%A5%B6%E6%B2%B9%E6%9E%AA%E5%96%82%E9%A3%9F%23) `321.1K 🔥` `+38%`
1. [登山公司称10人探险队全部遇难](https://s.weibo.com/weibo?q=%23%E7%99%BB%E5%B1%B1%E5%85%AC%E5%8F%B8%E7%A7%B010%E4%BA%BA%E6%8E%A2%E9%99%A9%E9%98%9F%E5%85%A8%E9%83%A8%E9%81%87%E9%9A%BE%23) `321.0K 🔥` `+133%`
1. [集中供冷真的来了](https://s.weibo.com/weibo?q=%23%E9%9B%86%E4%B8%AD%E4%BE%9B%E5%86%B7%E7%9C%9F%E7%9A%84%E6%9D%A5%E4%BA%86%23) `870.0K 🔥`
1. [刘耀文的手被P没了](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E7%9A%84%E6%89%8B%E8%A2%ABP%E6%B2%A1%E4%BA%86%23) `279.1K 🔥`
1. [闵塔鲨发白鹿口碑爆棚](https://s.weibo.com/weibo?q=%23%E9%97%B5%E5%A1%94%E9%B2%A8%E5%8F%91%E7%99%BD%E9%B9%BF%E5%8F%A3%E7%A2%91%E7%88%86%E6%A3%9A%23) `260.5K 🔥`
1. [东方甄选前CEO新公司首播 (Oriental Screening ex-CEO’s new company premieres)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E5%89%8DCEO%E6%96%B0%E5%85%AC%E5%8F%B8%E9%A6%96%E6%92%AD%23) `211.1K 🔥`
1. [女孩买烤肠利用手机里支付截图假付款](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%B9%B0%E7%83%A4%E8%82%A0%E5%88%A9%E7%94%A8%E6%89%8B%E6%9C%BA%E9%87%8C%E6%94%AF%E4%BB%98%E6%88%AA%E5%9B%BE%E5%81%87%E4%BB%98%E6%AC%BE%23) `181.2K 🔥`
1. [瑞幸员工对嘴喷奶油 (Luckin employee sprays cream on mouth)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%91%98%E5%B7%A5%E5%AF%B9%E5%98%B4%E5%96%B7%E5%A5%B6%E6%B2%B9%23) `1.2M 🔥` `-50%`
1. [天才女友 AI片头](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%89%8D%E5%A5%B3%E5%8F%8B%20AI%E7%89%87%E5%A4%B4%23) `416.2K 🔥` `-22%`
1. [明星 哭穷](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%20%E5%93%AD%E7%A9%B7%23) `321.1K 🔥` `-30%`
1. [TF四代青岛演唱会官宣](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E9%9D%92%E5%B2%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `321.1K 🔥` `-67%`
1. [突然发现摆烂才是最强的谈判技巧](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E6%91%86%E7%83%82%E6%89%8D%E6%98%AF%E6%9C%80%E5%BC%BA%E7%9A%84%E8%B0%88%E5%88%A4%E6%8A%80%E5%B7%A7%23) `279.1K 🔥` `-71%`
1. [天才女友热度](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%89%8D%E5%A5%B3%E5%8F%8B%E7%83%AD%E5%BA%A6%23) `213.4K 🔥` `-24%`
1. [你的公积金将有新变化](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E5%85%AC%E7%A7%AF%E9%87%91%E5%B0%86%E6%9C%89%E6%96%B0%E5%8F%98%E5%8C%96%23) `210.9K 🔥` `-67%`

Updated at 2026-08-02 16:58:35

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
