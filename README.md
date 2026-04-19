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

1. [花少8 南美 (Hua Shao 8 South America)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%20%E5%8D%97%E7%BE%8E%23) `1.4M 🔥` `NEW`
1. [宇树机器人打破人类1500米世界纪录](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%89%93%E7%A0%B4%E4%BA%BA%E7%B1%BB1500%E7%B1%B3%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `889.0K 🔥` `NEW`
1. [五一列车增开](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%88%97%E8%BD%A6%E5%A2%9E%E5%BC%80%23) `688.3K 🔥` `NEW`
1. [睡觉时被空调砸到头了](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%A7%89%E6%97%B6%E8%A2%AB%E7%A9%BA%E8%B0%83%E7%A0%B8%E5%88%B0%E5%A4%B4%E4%BA%86%23) `670.6K 🔥` `NEW`
1. [宇树H1机器人被担架抬离赛道](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91H1%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%A2%AB%E6%8B%85%E6%9E%B6%E6%8A%AC%E7%A6%BB%E8%B5%9B%E9%81%93%23) `623.7K 🔥` `NEW`
1. [哈弗猛龙PLUS预售18.98万起](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%BC%97%E7%8C%9B%E9%BE%99PLUS%E9%A2%84%E5%94%AE18.98%E4%B8%87%E8%B5%B7%23) `602.0K 🔥` `NEW`
1. [谁家猫怀孕都怀到脖子上了](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%AE%B6%E7%8C%AB%E6%80%80%E5%AD%95%E9%83%BD%E6%80%80%E5%88%B0%E8%84%96%E5%AD%90%E4%B8%8A%E4%BA%86%23) `598.5K 🔥` `NEW`
1. [湖人战胜火箭](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E6%88%98%E8%83%9C%E7%81%AB%E7%AE%AD%23) `501.4K 🔥` `NEW`
1. [华住会否认酒店回访致女子离婚](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BD%8F%E4%BC%9A%E5%90%A6%E8%AE%A4%E9%85%92%E5%BA%97%E5%9B%9E%E8%AE%BF%E8%87%B4%E5%A5%B3%E5%AD%90%E7%A6%BB%E5%A9%9A%23) `410.9K 🔥` `NEW`
1. [何润东狂接商务](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E7%8B%82%E6%8E%A5%E5%95%86%E5%8A%A1%23) `398.9K 🔥` `NEW`
1. [杜兰特 火箭 (durant rockets)](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%85%B0%E7%89%B9%20%E7%81%AB%E7%AE%AD%23) `330.7K 🔥` `NEW`
1. [宇树H1机器人半马赛场终点累倒](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91H1%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8D%8A%E9%A9%AC%E8%B5%9B%E5%9C%BA%E7%BB%88%E7%82%B9%E7%B4%AF%E5%80%92%23) `289.3K 🔥` `NEW`
1. [官方通报卸沙现场出现一具男尸](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%8D%B8%E6%B2%99%E7%8E%B0%E5%9C%BA%E5%87%BA%E7%8E%B0%E4%B8%80%E5%85%B7%E7%94%B7%E5%B0%B8%23) `262.8K 🔥` `NEW`
1. [杨紫新剧老年妆](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%96%B0%E5%89%A7%E8%80%81%E5%B9%B4%E5%A6%86%23) `250.3K 🔥` `NEW`
1. [游客称泰国泼水节乱象几乎无人约束](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E7%A7%B0%E6%B3%B0%E5%9B%BD%E6%B3%BC%E6%B0%B4%E8%8A%82%E4%B9%B1%E8%B1%A1%E5%87%A0%E4%B9%8E%E6%97%A0%E4%BA%BA%E7%BA%A6%E6%9D%9F%23) `232.1K 🔥` `NEW`
1. [梁朝伟迪丽热巴好像在拍电影](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%9C%9D%E4%BC%9F%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A5%BD%E5%83%8F%E5%9C%A8%E6%8B%8D%E7%94%B5%E5%BD%B1%23) `218.3K 🔥` `NEW`
1. [逐玉播出后最爆的是何润东](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%92%AD%E5%87%BA%E5%90%8E%E6%9C%80%E7%88%86%E7%9A%84%E6%98%AF%E4%BD%95%E6%B6%A6%E4%B8%9C%23) `211.4K 🔥` `NEW`
1. [全球首个参加马拉松的机器导盲犬](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%A6%96%E4%B8%AA%E5%8F%82%E5%8A%A0%E9%A9%AC%E6%8B%89%E6%9D%BE%E7%9A%84%E6%9C%BA%E5%99%A8%E5%AF%BC%E7%9B%B2%E7%8A%AC%23) `191.0K 🔥` `NEW`
1. [凌晨的徐艺洋简直是魔丸](https://s.weibo.com/weibo?q=%23%E5%87%8C%E6%99%A8%E7%9A%84%E5%BE%90%E8%89%BA%E6%B4%8B%E7%AE%80%E7%9B%B4%E6%98%AF%E9%AD%94%E4%B8%B8%23) `182.4K 🔥` `NEW`
1. [AI让人越来越累](https://s.weibo.com/weibo?q=%23AI%E8%AE%A9%E4%BA%BA%E8%B6%8A%E6%9D%A5%E8%B6%8A%E7%B4%AF%23) `170.1K 🔥` `NEW`
1. [荣耀机器人首次参赛就夺冠 (Honor Robot wins the first competition)](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%A6%96%E6%AC%A1%E5%8F%82%E8%B5%9B%E5%B0%B1%E5%A4%BA%E5%86%A0%23) `165.3K 🔥` `NEW`
1. [刘浩存走完红毯拧裙子上的水](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E8%B5%B0%E5%AE%8C%E7%BA%A2%E6%AF%AF%E6%8B%A7%E8%A3%99%E5%AD%90%E4%B8%8A%E7%9A%84%E6%B0%B4%23) `163.6K 🔥` `NEW`
1. [谁把张凌赫弄天上去了](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%8A%8A%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BC%84%E5%A4%A9%E4%B8%8A%E5%8E%BB%E4%BA%86%23) `163.1K 🔥` `NEW`
1. [王者荣耀爆料](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E7%88%86%E6%96%99%23) `162.0K 🔥` `NEW`
1. [本周狗屎运最旺的星座](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E7%8B%97%E5%B1%8E%E8%BF%90%E6%9C%80%E6%97%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `161.5K 🔥` `NEW`
1. [医院举牌免费住宿女子遭恶意揣测](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E4%B8%BE%E7%89%8C%E5%85%8D%E8%B4%B9%E4%BD%8F%E5%AE%BF%E5%A5%B3%E5%AD%90%E9%81%AD%E6%81%B6%E6%84%8F%E6%8F%A3%E6%B5%8B%23) `160.7K 🔥` `NEW`
1. [酒店回应回访电话致女子家庭破碎](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%BA%97%E5%9B%9E%E5%BA%94%E5%9B%9E%E8%AE%BF%E7%94%B5%E8%AF%9D%E8%87%B4%E5%A5%B3%E5%AD%90%E5%AE%B6%E5%BA%AD%E7%A0%B4%E7%A2%8E%23) `160.0K 🔥` `NEW`
1. [这一秒过火野狗骨头 对打](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%20%E5%AF%B9%E6%89%93%23) `158.8K 🔥` `NEW`
1. [日舰闯台海这天中国人不会忘](https://s.weibo.com/weibo?q=%23%E6%97%A5%E8%88%B0%E9%97%AF%E5%8F%B0%E6%B5%B7%E8%BF%99%E5%A4%A9%E4%B8%AD%E5%9B%BD%E4%BA%BA%E4%B8%8D%E4%BC%9A%E5%BF%98%23) `157.9K 🔥` `NEW`
1. [被骗3200万老板从住豪宅到租房住](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%AA%973200%E4%B8%87%E8%80%81%E6%9D%BF%E4%BB%8E%E4%BD%8F%E8%B1%AA%E5%AE%85%E5%88%B0%E7%A7%9F%E6%88%BF%E4%BD%8F%23) `157.4K 🔥` `NEW`
1. [爱奇艺世界大会阵容 (iQIYI World Conference Lineup)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E4%B8%96%E7%95%8C%E5%A4%A7%E4%BC%9A%E9%98%B5%E5%AE%B9%23) `156.5K 🔥` `NEW`
1. [月鳞绮纪四位主演涨粉排名](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E5%9B%9B%E4%BD%8D%E4%B8%BB%E6%BC%94%E6%B6%A8%E7%B2%89%E6%8E%92%E5%90%8D%23) `155.2K 🔥` `NEW`
1. [苏超南京队赞助商ip连夜改名](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%8D%97%E4%BA%AC%E9%98%9F%E8%B5%9E%E5%8A%A9%E5%95%86ip%E8%BF%9E%E5%A4%9C%E6%94%B9%E5%90%8D%23) `154.3K 🔥` `NEW`
1. [詹姆斯创季后赛单节助攻新高](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%88%9B%E5%AD%A3%E5%90%8E%E8%B5%9B%E5%8D%95%E8%8A%82%E5%8A%A9%E6%94%BB%E6%96%B0%E9%AB%98%23) `153.9K 🔥` `NEW`
1. [北半马机器人不语一味闷头跑](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%8D%8A%E9%A9%AC%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%B8%8D%E8%AF%AD%E4%B8%80%E5%91%B3%E9%97%B7%E5%A4%B4%E8%B7%91%23) `152.2K 🔥` `NEW`
1. [13岁男孩严重龋齿体重仅13公斤](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E7%94%B7%E5%AD%A9%E4%B8%A5%E9%87%8D%E9%BE%8B%E9%BD%BF%E4%BD%93%E9%87%8D%E4%BB%8513%E5%85%AC%E6%96%A4%23) `150.5K 🔥` `NEW`
1. [梁朝伟迪丽热巴幸运咖品牌代言人 (Tony Leung and Dilireba Lucky Coffee brand spokesperson)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%9C%9D%E4%BC%9F%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B9%B8%E8%BF%90%E5%92%96%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `687.2K 🔥` `+484%`
1. [谢娜晒和马嘉祺聊天记录 (Chat records of Xie Nasha and Ma Jiaqi)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%99%92%E5%92%8C%E9%A9%AC%E5%98%89%E7%A5%BA%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `685.9K 🔥` `+86%`
1. [酒店回访电话暴露开房致女子离婚 (Hotel return call revealed hotel booking led to woman's divorce)](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%BA%97%E5%9B%9E%E8%AE%BF%E7%94%B5%E8%AF%9D%E6%9A%B4%E9%9C%B2%E5%BC%80%E6%88%BF%E8%87%B4%E5%A5%B3%E5%AD%90%E7%A6%BB%E5%A9%9A%23) `371.6K 🔥` `+69%`
1. [虞书欣好辣](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%A5%BD%E8%BE%A3%23) `336.6K 🔥` `+52%`
1. [解放军凌晨4点管控日舰过航](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E5%87%8C%E6%99%A84%E7%82%B9%E7%AE%A1%E6%8E%A7%E6%97%A5%E8%88%B0%E8%BF%87%E8%88%AA%23) `165.1K 🔥`
1. [火箭vs湖人](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%AE%ADvs%E6%B9%96%E4%BA%BA%23) `164.1K 🔥`
1. [低精力 杏仁核长期应激 (Low energy, chronic stress on the amygdala)](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%20%E6%9D%8F%E4%BB%81%E6%A0%B8%E9%95%BF%E6%9C%9F%E5%BA%94%E6%BF%80%23) `413.0K 🔥` `-48%`
1. [曝歌手2026阵容](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%AD%8C%E6%89%8B2026%E9%98%B5%E5%AE%B9%23) `393.2K 🔥` `-47%`
1. [攻玉 辞演 (Gong Yu Resignation)](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%20%E8%BE%9E%E6%BC%94%23) `352.1K 🔥` `-28%`
1. [女子产后被男友起诉退彩礼和分娩费](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%A7%E5%90%8E%E8%A2%AB%E7%94%B7%E5%8F%8B%E8%B5%B7%E8%AF%89%E9%80%80%E5%BD%A9%E7%A4%BC%E5%92%8C%E5%88%86%E5%A8%A9%E8%B4%B9%23) `207.2K 🔥` `-49%`
1. [你是真的火了李小冉](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%98%AF%E7%9C%9F%E7%9A%84%E7%81%AB%E4%BA%86%E6%9D%8E%E5%B0%8F%E5%86%89%23) `193.2K 🔥` `-59%`
1. [网传花少8的阵容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%8A%B1%E5%B0%918%E7%9A%84%E9%98%B5%E5%AE%B9%23) `159.2K 🔥` `-71%`
1. [日本已彻底撕掉伪装 (Japan has completely shed its disguise)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%B7%B2%E5%BD%BB%E5%BA%95%E6%92%95%E6%8E%89%E4%BC%AA%E8%A3%85%23) `155.7K 🔥` `-87%`
1. [300个机器人跑半马](https://s.weibo.com/weibo?q=%23300%E4%B8%AA%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B7%91%E5%8D%8A%E9%A9%AC%23) `152.9K 🔥` `-32%`
1. [2026机器人半马](https://s.weibo.com/weibo?q=%232026%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8D%8A%E9%A9%AC%23) `151.6K 🔥` `-32%`
1. [国产光纤爆单原因](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E5%85%89%E7%BA%A4%E7%88%86%E5%8D%95%E5%8E%9F%E5%9B%A0%23) `150.2K 🔥` `-29%`

Updated at 2026-04-19 12:23:49

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
