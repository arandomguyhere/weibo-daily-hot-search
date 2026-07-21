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

1. [C罗点赞FIFA想把世界杯送给阿根廷 (Cristiano Ronaldo likes FIFA for wanting to give the World Cup to Argentina)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%82%B9%E8%B5%9EFIFA%E6%83%B3%E6%8A%8A%E4%B8%96%E7%95%8C%E6%9D%AF%E9%80%81%E7%BB%99%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `1.3M 🔥` `NEW`
1. [WAIC预计达成超200亿元意向采购金额](https://s.weibo.com/weibo?q=%23WAIC%E9%A2%84%E8%AE%A1%E8%BE%BE%E6%88%90%E8%B6%85200%E4%BA%BF%E5%85%83%E6%84%8F%E5%90%91%E9%87%87%E8%B4%AD%E9%87%91%E9%A2%9D%23) `822.5K 🔥` `NEW`
1. [阿根廷为何四年后如此狼狈](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%BA%E4%BD%95%E5%9B%9B%E5%B9%B4%E5%90%8E%E5%A6%82%E6%AD%A4%E7%8B%BC%E7%8B%88%23) `632.1K 🔥` `NEW`
1. [乒超禁用外协强制U19](https://s.weibo.com/weibo?q=%23%E4%B9%92%E8%B6%85%E7%A6%81%E7%94%A8%E5%A4%96%E5%8D%8F%E5%BC%BA%E5%88%B6U19%23) `367.0K 🔥` `NEW`
1. [谢婷婷搀扶狄波拉](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A9%B7%E5%A9%B7%E6%90%80%E6%89%B6%E7%8B%84%E6%B3%A2%E6%8B%89%23) `360.5K 🔥` `NEW`
1. [阿根廷队长赛后首次发声](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E9%95%BF%E8%B5%9B%E5%90%8E%E9%A6%96%E6%AC%A1%E5%8F%91%E5%A3%B0%23) `328.6K 🔥` `NEW`
1. [月租4600元的酒店谁在住](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%A7%9F4600%E5%85%83%E7%9A%84%E9%85%92%E5%BA%97%E8%B0%81%E5%9C%A8%E4%BD%8F%23) `245.9K 🔥` `NEW`
1. [FIFA回应阿根廷球员暴力行为](https://s.weibo.com/weibo?q=%23FIFA%E5%9B%9E%E5%BA%94%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E5%91%98%E6%9A%B4%E5%8A%9B%E8%A1%8C%E4%B8%BA%23) `240.9K 🔥` `NEW`
1. [中国平安等三大险企集体发声](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B9%B3%E5%AE%89%E7%AD%89%E4%B8%89%E5%A4%A7%E9%99%A9%E4%BC%81%E9%9B%86%E4%BD%93%E5%8F%91%E5%A3%B0%23) `199.4K 🔥` `NEW`
1. [一个治驼背的办法](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%B2%BB%E9%A9%BC%E8%83%8C%E7%9A%84%E5%8A%9E%E6%B3%95%23) `199.1K 🔥` `NEW`
1. [从小坚持的睡前刷牙居然是错的 (I've been insisting on brushing my teeth before going to bed since I was a child, but it's actually wrong)](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E5%B0%8F%E5%9D%9A%E6%8C%81%E7%9A%84%E7%9D%A1%E5%89%8D%E5%88%B7%E7%89%99%E5%B1%85%E7%84%B6%E6%98%AF%E9%94%99%E7%9A%84%23) `195.6K 🔥` `NEW`
1. [虞书欣给侯明昊拍照路透](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%BB%99%E4%BE%AF%E6%98%8E%E6%98%8A%E6%8B%8D%E7%85%A7%E8%B7%AF%E9%80%8F%23) `186.3K 🔥` `NEW`
1. [女生高考684分花3000元咨询进双非](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E9%AB%98%E8%80%83684%E5%88%86%E8%8A%B13000%E5%85%83%E5%92%A8%E8%AF%A2%E8%BF%9B%E5%8F%8C%E9%9D%9E%23) `183.8K 🔥` `NEW`
1. [影视飓风回怼博主恶意解读](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E5%9B%9E%E6%80%BC%E5%8D%9A%E4%B8%BB%E6%81%B6%E6%84%8F%E8%A7%A3%E8%AF%BB%23) `180.6K 🔥` `NEW`
1. [一种很新的减肥方法](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%A7%8D%E5%BE%88%E6%96%B0%E7%9A%84%E5%87%8F%E8%82%A5%E6%96%B9%E6%B3%95%23) `180.1K 🔥` `NEW`
1. [谢贤曾因谢霆锋离婚多次落泪](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E6%9B%BE%E5%9B%A0%E8%B0%A2%E9%9C%86%E9%94%8B%E7%A6%BB%E5%A9%9A%E5%A4%9A%E6%AC%A1%E8%90%BD%E6%B3%AA%23) `178.2K 🔥` `NEW`
1. [周星驰25年后再跳酱爆舞](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B025%E5%B9%B4%E5%90%8E%E5%86%8D%E8%B7%B3%E9%85%B1%E7%88%86%E8%88%9E%23) `162.6K 🔥` `NEW`
1. [唤醒孩子内驱力方法是先断绝多巴胺](https://s.weibo.com/weibo?q=%23%E5%94%A4%E9%86%92%E5%AD%A9%E5%AD%90%E5%86%85%E9%A9%B1%E5%8A%9B%E6%96%B9%E6%B3%95%E6%98%AF%E5%85%88%E6%96%AD%E7%BB%9D%E5%A4%9A%E5%B7%B4%E8%83%BA%23) `160.3K 🔥` `NEW`
1. [深圳地铁 安检](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%9C%B0%E9%93%81%20%E5%AE%89%E6%A3%80%23) `158.3K 🔥` `NEW`
1. [英国抢走英钢还要赖账](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E6%8A%A2%E8%B5%B0%E8%8B%B1%E9%92%A2%E8%BF%98%E8%A6%81%E8%B5%96%E8%B4%A6%23) `156.0K 🔥` `NEW`
1. [复联5新老角色都回来了 (Avengers 5’s new and old characters are back)](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E8%81%945%E6%96%B0%E8%80%81%E8%A7%92%E8%89%B2%E9%83%BD%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `140.9K 🔥` `NEW`
1. [时代峰峻跨代卡包被指探底](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%B7%A8%E4%BB%A3%E5%8D%A1%E5%8C%85%E8%A2%AB%E6%8C%87%E6%8E%A2%E5%BA%95%23) `124.8K 🔥` `NEW`
1. [世界杯最后9张牌全部判给了阿根廷](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%80%E5%90%8E9%E5%BC%A0%E7%89%8C%E5%85%A8%E9%83%A8%E5%88%A4%E7%BB%99%E4%BA%86%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `105.1K 🔥` `NEW`
1. [林诗栋加盟上海队](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E5%8A%A0%E7%9B%9F%E4%B8%8A%E6%B5%B7%E9%98%9F%23) `104.0K 🔥` `NEW`
1. [40分钟40枚导弹射向基辅](https://s.weibo.com/weibo?q=%2340%E5%88%86%E9%92%9F40%E6%9E%9A%E5%AF%BC%E5%BC%B9%E5%B0%84%E5%90%91%E5%9F%BA%E8%BE%85%23) `99.5K 🔥` `NEW`
1. [世界杯日均消耗15.84万亿Token](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%97%A5%E5%9D%87%E6%B6%88%E8%80%9715.84%E4%B8%87%E4%BA%BFToken%23) `95.0K 🔥` `NEW`
1. [Zara阔腿裤存安全隐患](https://s.weibo.com/weibo?q=%23Zara%E9%98%94%E8%85%BF%E8%A3%A4%E5%AD%98%E5%AE%89%E5%85%A8%E9%9A%90%E6%82%A3%23) `1.2M 🔥` `+33%`
1. [小时候吃的很多水果都慢慢消失了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E5%90%83%E7%9A%84%E5%BE%88%E5%A4%9A%E6%B0%B4%E6%9E%9C%E9%83%BD%E6%85%A2%E6%85%A2%E6%B6%88%E5%A4%B1%E4%BA%86%23) `801.9K 🔥` `+68%`
1. [一念江南](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%23) `707.7K 🔥` `+812%`
1. [一个人怎么可以幸运到这种地步 (How can a person be so lucky?)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%80%8E%E4%B9%88%E5%8F%AF%E4%BB%A5%E5%B9%B8%E8%BF%90%E5%88%B0%E8%BF%99%E7%A7%8D%E5%9C%B0%E6%AD%A5%23) `513.9K 🔥` `+120%`
1. [孩子打暑假工把家里干破产](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E6%89%93%E6%9A%91%E5%81%87%E5%B7%A5%E6%8A%8A%E5%AE%B6%E9%87%8C%E5%B9%B2%E7%A0%B4%E4%BA%A7%23) `442.7K 🔥` `+46%`
1. [张凌赫和王楚然都绷不住了 (Zhang Linghe and Wang Churan couldn't hold it any longer.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%92%8C%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%83%BD%E7%BB%B7%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `377.3K 🔥` `+284%`
1. [谢贤进ICU后一心要等谢霆锋回香港 (After being admitted to the ICU, Nicholas Tse was determined to wait for Nicholas Tse to return to Hong Kong.)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E8%BF%9BICU%E5%90%8E%E4%B8%80%E5%BF%83%E8%A6%81%E7%AD%89%E8%B0%A2%E9%9C%86%E9%94%8B%E5%9B%9E%E9%A6%99%E6%B8%AF%23) `371.9K 🔥` `+47%`
1. [开推月经片段引韩网热议](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8E%A8%E6%9C%88%E7%BB%8F%E7%89%87%E6%AE%B5%E5%BC%95%E9%9F%A9%E7%BD%91%E7%83%AD%E8%AE%AE%23) `363.7K 🔥` `+260%`
1. [张柏芝头像变黑](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E5%A4%B4%E5%83%8F%E5%8F%98%E9%BB%91%23) `323.4K 🔥` `+169%`
1. [白鹿奔跑吧下一季投票第一 (White Deer Running: No. 1 in voting for the next season)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%A5%94%E8%B7%91%E5%90%A7%E4%B8%8B%E4%B8%80%E5%AD%A3%E6%8A%95%E7%A5%A8%E7%AC%AC%E4%B8%80%23) `224.4K 🔥` `+99%`
1. [人一旦染上减肥才知道有多爽 (Only when people get into the habit of losing weight will they know how good it is)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E6%9F%93%E4%B8%8A%E5%87%8F%E8%82%A5%E6%89%8D%E7%9F%A5%E9%81%93%E6%9C%89%E5%A4%9A%E7%88%BD%23) `191.8K 🔥` `+85%`
1. [菲方人员用划桨长棍攻击我海警](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E6%96%B9%E4%BA%BA%E5%91%98%E7%94%A8%E5%88%92%E6%A1%A8%E9%95%BF%E6%A3%8D%E6%94%BB%E5%87%BB%E6%88%91%E6%B5%B7%E8%AD%A6%23) `160.3K 🔥` `+40%`
1. [中国能建 齐夏](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%83%BD%E5%BB%BA%20%E9%BD%90%E5%A4%8F%23) `160.1K 🔥` `+44%`
1. [过度依赖另一半会失去自我吗](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E4%BE%9D%E8%B5%96%E5%8F%A6%E4%B8%80%E5%8D%8A%E4%BC%9A%E5%A4%B1%E5%8E%BB%E8%87%AA%E6%88%91%E5%90%97%23) `159.4K 🔥` `+28%`
1. [成龙3年送别十多位好友](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%BE%993%E5%B9%B4%E9%80%81%E5%88%AB%E5%8D%81%E5%A4%9A%E4%BD%8D%E5%A5%BD%E5%8F%8B%23) `156.0K 🔥` `+31%`
1. [谢贤去世 (Xie Xian passed away)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E5%8E%BB%E4%B8%96%23) `152.4K 🔥` `+56%`
1. [建议普通人都尽早用上AI](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%99%AE%E9%80%9A%E4%BA%BA%E9%83%BD%E5%B0%BD%E6%97%A9%E7%94%A8%E4%B8%8AAI%23) `141.1K 🔥` `+37%`
1. [人一旦找到热爱](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E6%89%BE%E5%88%B0%E7%83%AD%E7%88%B1%23) `134.7K 🔥` `+67%`
1. [柳柳 周佑凌 (Liu Liu Zhou Youling)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%9F%B3%20%E5%91%A8%E4%BD%91%E5%87%8C%23) `110.9K 🔥` `+95%`
1. [西班牙夺冠游行](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%A4%BA%E5%86%A0%E6%B8%B8%E8%A1%8C%23) `514.3K 🔥`
1. [泼硫酸男子被执死刑受害人发声 (Man who threw acid was executed, victim speaks out)](https://s.weibo.com/weibo?q=%23%E6%B3%BC%E7%A1%AB%E9%85%B8%E7%94%B7%E5%AD%90%E8%A2%AB%E6%89%A7%E6%AD%BB%E5%88%91%E5%8F%97%E5%AE%B3%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `118.2K 🔥`
1. [看关晓彤吃才知道有紫色西蓝花 (Only when I watched Guan Xiaotong eat did I realize there was purple broccoli)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%85%B3%E6%99%93%E5%BD%A4%E5%90%83%E6%89%8D%E7%9F%A5%E9%81%93%E6%9C%89%E7%B4%AB%E8%89%B2%E8%A5%BF%E8%93%9D%E8%8A%B1%23) `131.4K 🔥` `-38%`
1. [王玉雯别说了刘宇宁害羞了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%88%AB%E8%AF%B4%E4%BA%86%E5%88%98%E5%AE%87%E5%AE%81%E5%AE%B3%E7%BE%9E%E4%BA%86%23) `117.2K 🔥` `-32%`
1. [清华姚班 全球AI半壁江山](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A7%9A%E7%8F%AD%20%E5%85%A8%E7%90%83AI%E5%8D%8A%E5%A3%81%E6%B1%9F%E5%B1%B1%23) `109.7K 🔥` `-25%`

Updated at 2026-07-21 09:04:08

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
