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

1. [男子父母被卷至百米高空后遇难 (Man's parents died after being swept 100 meters into the air)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%88%B6%E6%AF%8D%E8%A2%AB%E5%8D%B7%E8%87%B3%E7%99%BE%E7%B1%B3%E9%AB%98%E7%A9%BA%E5%90%8E%E9%81%87%E9%9A%BE%23) `1.8M 🔥` `NEW`
1. [现在就出发4](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `1.2M 🔥` `NEW`
1. [探访三江源](https://s.weibo.com/weibo?q=%23%E6%8E%A2%E8%AE%BF%E4%B8%89%E6%B1%9F%E6%BA%90%23) `1.1M 🔥` `NEW`
1. [龙卷风](https://s.weibo.com/weibo?q=%23%E9%BE%99%E5%8D%B7%E9%A3%8E%23) `1.1M 🔥` `NEW`
1. [台风巴威登陆地点或有变](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E5%9C%B0%E7%82%B9%E6%88%96%E6%9C%89%E5%8F%98%23) `956.1K 🔥` `NEW`
1. [阿根廷vs埃及](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7vs%E5%9F%83%E5%8F%8A%23) `845.3K 🔥` `NEW`
1. [阿根廷对阵埃及首发轮换](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%AF%B9%E9%98%B5%E5%9F%83%E5%8F%8A%E9%A6%96%E5%8F%91%E8%BD%AE%E6%8D%A2%23) `599.5K 🔥` `NEW`
1. [广西灾情为什么严重](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%81%BE%E6%83%85%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%A5%E9%87%8D%23) `478.7K 🔥` `NEW`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `464.4K 🔥` `NEW`
1. [柳柳终于刚起来了](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%9F%B3%E7%BB%88%E4%BA%8E%E5%88%9A%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `457.3K 🔥` `NEW`
1. [霉霉婚礼送了1200块卡地亚手表 (Swift gave 1,200 Cartier watches to her wedding)](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E9%80%81%E4%BA%861200%E5%9D%97%E5%8D%A1%E5%9C%B0%E4%BA%9A%E6%89%8B%E8%A1%A8%23) `457.2K 🔥` `NEW`
1. [脱口秀唐香玉拒不道歉被强执](https://s.weibo.com/weibo?q=%23%E8%84%B1%E5%8F%A3%E7%A7%80%E5%94%90%E9%A6%99%E7%8E%89%E6%8B%92%E4%B8%8D%E9%81%93%E6%AD%89%E8%A2%AB%E5%BC%BA%E6%89%A7%23) `456.3K 🔥` `NEW`
1. [微信能不能出一个临时好友功能](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%83%BD%E4%B8%8D%E8%83%BD%E5%87%BA%E4%B8%80%E4%B8%AA%E4%B8%B4%E6%97%B6%E5%A5%BD%E5%8F%8B%E5%8A%9F%E8%83%BD%23) `454.7K 🔥` `NEW`
1. [近视眼先享受世界](https://s.weibo.com/weibo?q=%23%E8%BF%91%E8%A7%86%E7%9C%BC%E5%85%88%E4%BA%AB%E5%8F%97%E4%B8%96%E7%95%8C%23) `441.9K 🔥` `NEW`
1. [西班牙绝杀后C罗不断比手势](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%BB%9D%E6%9D%80%E5%90%8EC%E7%BD%97%E4%B8%8D%E6%96%AD%E6%AF%94%E6%89%8B%E5%8A%BF%23) `379.9K 🔥` `NEW`
1. [Jennie对于做女装的完全财神奶](https://s.weibo.com/weibo?q=%23Jennie%E5%AF%B9%E4%BA%8E%E5%81%9A%E5%A5%B3%E8%A3%85%E7%9A%84%E5%AE%8C%E5%85%A8%E8%B4%A2%E7%A5%9E%E5%A5%B6%23) `370.1K 🔥` `NEW`
1. [第一次见这样的张子枫](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E8%BF%99%E6%A0%B7%E7%9A%84%E5%BC%A0%E5%AD%90%E6%9E%AB%23) `335.1K 🔥` `NEW`
1. [装了人工心脏想洗澡怎么办](https://s.weibo.com/weibo?q=%23%E8%A3%85%E4%BA%86%E4%BA%BA%E5%B7%A5%E5%BF%83%E8%84%8F%E6%83%B3%E6%B4%97%E6%BE%A1%E6%80%8E%E4%B9%88%E5%8A%9E%23) `285.3K 🔥` `NEW`
1. [虞书欣张婧仪决战95花现偶之巅](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%86%B3%E6%88%9895%E8%8A%B1%E7%8E%B0%E5%81%B6%E4%B9%8B%E5%B7%85%23) `266.4K 🔥` `NEW`
1. [papi酱迎来事业第n春](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E8%BF%8E%E6%9D%A5%E4%BA%8B%E4%B8%9A%E7%AC%ACn%E6%98%A5%23) `265.0K 🔥` `NEW`
1. [人一定要频繁大量记录自己 (People must record themselves frequently and extensively)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E9%A2%91%E7%B9%81%E5%A4%A7%E9%87%8F%E8%AE%B0%E5%BD%95%E8%87%AA%E5%B7%B1%23) `261.5K 🔥` `NEW`
1. [广西的洪水很快要到广东了](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%9A%84%E6%B4%AA%E6%B0%B4%E5%BE%88%E5%BF%AB%E8%A6%81%E5%88%B0%E5%B9%BF%E4%B8%9C%E4%BA%86%23) `255.4K 🔥` `NEW`
1. [大二女生贷款200万开民宿营收千万](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BA%8C%E5%A5%B3%E7%94%9F%E8%B4%B7%E6%AC%BE200%E4%B8%87%E5%BC%80%E6%B0%91%E5%AE%BF%E8%90%A5%E6%94%B6%E5%8D%83%E4%B8%87%23) `251.5K 🔥` `NEW`
1. [杨紫晒粉丝的信](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%99%92%E7%B2%89%E4%B8%9D%E7%9A%84%E4%BF%A1%23) `248.8K 🔥` `NEW`
1. [男子被龙卷风吸走屋子几乎被掏空](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E9%BE%99%E5%8D%B7%E9%A3%8E%E5%90%B8%E8%B5%B0%E5%B1%8B%E5%AD%90%E5%87%A0%E4%B9%8E%E8%A2%AB%E6%8E%8F%E7%A9%BA%23) `242.1K 🔥` `NEW`
1. [单依纯G社生图](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AFG%E7%A4%BE%E7%94%9F%E5%9B%BE%23) `239.9K 🔥` `NEW`
1. [特朗普一通电话毁了美国队](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%80%E9%80%9A%E7%94%B5%E8%AF%9D%E6%AF%81%E4%BA%86%E7%BE%8E%E5%9B%BD%E9%98%9F%23) `230.4K 🔥` `NEW`
1. [百花杀OST阵容](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80OST%E9%98%B5%E5%AE%B9%23) `225.2K 🔥` `NEW`
1. [张月飞行黄灿灿我家那闺女录制](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%A3%9E%E8%A1%8C%E9%BB%84%E7%81%BF%E7%81%BF%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%E5%BD%95%E5%88%B6%23) `223.5K 🔥` `NEW`
1. [日本49岁女子用针把室友嘴缝上](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC49%E5%B2%81%E5%A5%B3%E5%AD%90%E7%94%A8%E9%92%88%E6%8A%8A%E5%AE%A4%E5%8F%8B%E5%98%B4%E7%BC%9D%E4%B8%8A%23) `222.8K 🔥` `NEW`
1. [中国女子在日遭人为肢解弃尸 (Chinese woman dismembered and abandoned in Japan)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%97%A5%E9%81%AD%E4%BA%BA%E4%B8%BA%E8%82%A2%E8%A7%A3%E5%BC%83%E5%B0%B8%23) `222.5K 🔥` `NEW`
1. [金子涵发明星名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%8F%91%E6%98%8E%E6%98%9F%E5%90%8D%E5%8D%95%23) `219.8K 🔥` `NEW`
1. [被龙卷风从12楼吸走男子最近情况](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%BE%99%E5%8D%B7%E9%A3%8E%E4%BB%8E12%E6%A5%BC%E5%90%B8%E8%B5%B0%E7%94%B7%E5%AD%90%E6%9C%80%E8%BF%91%E6%83%85%E5%86%B5%23) `215.5K 🔥` `NEW`
1. [请为广西镇龙乡扩散全乡仍失联](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E4%B8%BA%E5%B9%BF%E8%A5%BF%E9%95%87%E9%BE%99%E4%B9%A1%E6%89%A9%E6%95%A3%E5%85%A8%E4%B9%A1%E4%BB%8D%E5%A4%B1%E8%81%94%23) `213.6K 🔥` `NEW`
1. [洛瑞退役](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E7%91%9E%E9%80%80%E5%BD%B9%23) `212.5K 🔥` `NEW`
1. [订书机没想过会在外卖行业发光发热](https://s.weibo.com/weibo?q=%23%E8%AE%A2%E4%B9%A6%E6%9C%BA%E6%B2%A1%E6%83%B3%E8%BF%87%E4%BC%9A%E5%9C%A8%E5%A4%96%E5%8D%96%E8%A1%8C%E4%B8%9A%E5%8F%91%E5%85%89%E5%8F%91%E7%83%AD%23) `207.9K 🔥` `NEW`
1. [解放军抵达广西抗洪](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E6%8A%B5%E8%BE%BE%E5%B9%BF%E8%A5%BF%E6%8A%97%E6%B4%AA%23) `205.8K 🔥` `NEW`
1. [49岁男子招嫖被骗90万气晕妻子](https://s.weibo.com/weibo?q=%2349%E5%B2%81%E7%94%B7%E5%AD%90%E6%8B%9B%E5%AB%96%E8%A2%AB%E9%AA%9790%E4%B8%87%E6%B0%94%E6%99%95%E5%A6%BB%E5%AD%90%23) `205.8K 🔥` `NEW`
1. [对于心态好的人来说世界就是游乐场](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E4%BA%8E%E5%BF%83%E6%80%81%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%9D%A5%E8%AF%B4%E4%B8%96%E7%95%8C%E5%B0%B1%E6%98%AF%E6%B8%B8%E4%B9%90%E5%9C%BA%23) `205.7K 🔥` `NEW`
1. [野狗骨头这段我真昏天地暗了](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E8%BF%99%E6%AE%B5%E6%88%91%E7%9C%9F%E6%98%8F%E5%A4%A9%E5%9C%B0%E6%9A%97%E4%BA%86%23) `205.7K 🔥` `NEW`
1. [只有中国才能把年龄说得这么美 (Only China can express age so beautifully)](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E4%B8%AD%E5%9B%BD%E6%89%8D%E8%83%BD%E6%8A%8A%E5%B9%B4%E9%BE%84%E8%AF%B4%E5%BE%97%E8%BF%99%E4%B9%88%E7%BE%8E%23) `205.7K 🔥` `NEW`
1. [女儿走失35年竟在路对面的批发市场](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E8%B5%B0%E5%A4%B135%E5%B9%B4%E7%AB%9F%E5%9C%A8%E8%B7%AF%E5%AF%B9%E9%9D%A2%E7%9A%84%E6%89%B9%E5%8F%91%E5%B8%82%E5%9C%BA%23) `205.7K 🔥` `NEW`
1. [米切尔4年2.73亿续约骑士](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%88%87%E5%B0%944%E5%B9%B42.73%E4%BA%BF%E7%BB%AD%E7%BA%A6%E9%AA%91%E5%A3%AB%23) `205.7K 🔥` `NEW`
1. [曝张嘉倪二审才拿到抚养权](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E5%98%89%E5%80%AA%E4%BA%8C%E5%AE%A1%E6%89%8D%E6%8B%BF%E5%88%B0%E6%8A%9A%E5%85%BB%E6%9D%83%23) `205.6K 🔥` `NEW`
1. [王宝强冯清相恋八年仍未领证](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%9D%E5%BC%BA%E5%86%AF%E6%B8%85%E7%9B%B8%E6%81%8B%E5%85%AB%E5%B9%B4%E4%BB%8D%E6%9C%AA%E9%A2%86%E8%AF%81%23) `205.6K 🔥` `NEW`
1. [双胞胎见多了老双胞第一次见](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%83%9E%E8%83%8E%E8%A7%81%E5%A4%9A%E4%BA%86%E8%80%81%E5%8F%8C%E8%83%9E%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%23) `205.6K 🔥` `NEW`
1. [虞书欣拍双轨和灿如繁星的时候](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%8B%8D%E5%8F%8C%E8%BD%A8%E5%92%8C%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E7%9A%84%E6%97%B6%E5%80%99%23) `205.6K 🔥` `NEW`
1. [亚洲股市全线跳水原因](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%B4%B2%E8%82%A1%E5%B8%82%E5%85%A8%E7%BA%BF%E8%B7%B3%E6%B0%B4%E5%8E%9F%E5%9B%A0%23) `205.6K 🔥` `NEW`
1. [林依晨带蛇皮袋录节目](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E5%B8%A6%E8%9B%87%E7%9A%AE%E8%A2%8B%E5%BD%95%E8%8A%82%E7%9B%AE%23) `205.6K 🔥` `NEW`
1. [研究称Claude有内部隐秘思考区](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E7%A7%B0Claude%E6%9C%89%E5%86%85%E9%83%A8%E9%9A%90%E7%A7%98%E6%80%9D%E8%80%83%E5%8C%BA%23) `205.6K 🔥` `NEW`

Updated at 2026-07-08 00:13:05

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
