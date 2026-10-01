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

1. [上京东和蒋欣一起买华为Mate 90系列](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%AC%E4%B8%9C%E5%92%8C%E8%92%8B%E6%AC%A3%E4%B8%80%E8%B5%B7%E4%B9%B0%E5%8D%8E%E4%B8%BAMate%2090%E7%B3%BB%E5%88%97%23) `87.1K 🔥` `NEW`
1. [樊振东波尔同游杜塞尔多夫](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%B3%A2%E5%B0%94%E5%90%8C%E6%B8%B8%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB%23) `79.0K 🔥` `NEW`
1. [狗狗害怕打针直接把护士驮走](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E5%AE%B3%E6%80%95%E6%89%93%E9%92%88%E7%9B%B4%E6%8E%A5%E6%8A%8A%E6%8A%A4%E5%A3%AB%E9%A9%AE%E8%B5%B0%23) `55.4K 🔥` `NEW`
1. [对刘学义183的身高有了实感](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%88%98%E5%AD%A6%E4%B9%89183%E7%9A%84%E8%BA%AB%E9%AB%98%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `41.0K 🔥` `NEW`
1. [2026KPL年度总决赛](https://s.weibo.com/weibo?q=%232026KPL%E5%B9%B4%E5%BA%A6%E6%80%BB%E5%86%B3%E8%B5%9B%23) `39.2K 🔥` `NEW`
1. [祖国万岁](https://s.weibo.com/weibo?q=%23%E7%A5%96%E5%9B%BD%E4%B8%87%E5%B2%81%23) `34.5K 🔥` `NEW`
1. [土豆是一种被严重低估的主食食材](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%B1%86%E6%98%AF%E4%B8%80%E7%A7%8D%E8%A2%AB%E4%B8%A5%E9%87%8D%E4%BD%8E%E4%BC%B0%E7%9A%84%E4%B8%BB%E9%A3%9F%E9%A3%9F%E6%9D%90%23) `32.0K 🔥` `NEW`
1. [笑死我了以为哪儿都是你们山东呢](https://s.weibo.com/weibo?q=%23%E7%AC%91%E6%AD%BB%E6%88%91%E4%BA%86%E4%BB%A5%E4%B8%BA%E5%93%AA%E5%84%BF%E9%83%BD%E6%98%AF%E4%BD%A0%E4%BB%AC%E5%B1%B1%E4%B8%9C%E5%91%A2%23) `31.2K 🔥` `NEW`
1. [抗癌博主自述患癌与不良习惯](https://s.weibo.com/weibo?q=%23%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E8%87%AA%E8%BF%B0%E6%82%A3%E7%99%8C%E4%B8%8E%E4%B8%8D%E8%89%AF%E4%B9%A0%E6%83%AF%23) `31.2K 🔥` `NEW`
1. [奚梦瑶买的这些衣服我都喜欢](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E4%B9%B0%E7%9A%84%E8%BF%99%E4%BA%9B%E8%A1%A3%E6%9C%8D%E6%88%91%E9%83%BD%E5%96%9C%E6%AC%A2%23) `31.1K 🔥` `NEW`
1. [范丞丞镜头里的橙海](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E9%95%9C%E5%A4%B4%E9%87%8C%E7%9A%84%E6%A9%99%E6%B5%B7%23) `29.1K 🔥` `NEW`
1. [王俊凯演刑警没认出来](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%88%91%E8%AD%A6%E6%B2%A1%E8%AE%A4%E5%87%BA%E6%9D%A5%23) `28.7K 🔥` `NEW`
1. [虞书欣云初令](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BA%91%E5%88%9D%E4%BB%A4%23) `28.5K 🔥` `NEW`
1. [500万放余额宝一天的收益](https://s.weibo.com/weibo?q=%23500%E4%B8%87%E6%94%BE%E4%BD%99%E9%A2%9D%E5%AE%9D%E4%B8%80%E5%A4%A9%E7%9A%84%E6%94%B6%E7%9B%8A%23) `278.4K 🔥` `-79%`
1. [华为赛力斯 复合](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E8%B5%9B%E5%8A%9B%E6%96%AF%20%E5%A4%8D%E5%90%88%23) `110.3K 🔥` `-84%`
1. [国庆假期流动的中国具象化了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E5%81%87%E6%9C%9F%E6%B5%81%E5%8A%A8%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%85%B7%E8%B1%A1%E5%8C%96%E4%BA%86%23) `87.9K 🔥` `-84%`
1. [刘学义都三十好几了能没经验吗](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E9%83%BD%E4%B8%89%E5%8D%81%E5%A5%BD%E5%87%A0%E4%BA%86%E8%83%BD%E6%B2%A1%E7%BB%8F%E9%AA%8C%E5%90%97%23) `86.8K 🔥` `-84%`
1. [中国高铁站两对卧龙凤雏](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%AB%98%E9%93%81%E7%AB%99%E4%B8%A4%E5%AF%B9%E5%8D%A7%E9%BE%99%E5%87%A4%E9%9B%8F%23) `74.7K 🔥` `-71%`
1. [张凌赫你这是在干什么](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BD%A0%E8%BF%99%E6%98%AF%E5%9C%A8%E5%B9%B2%E4%BB%80%E4%B9%88%23) `66.4K 🔥` `-75%`
1. [宋家三胞胎咖啡厅近照](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%AE%B6%E4%B8%89%E8%83%9E%E8%83%8E%E5%92%96%E5%95%A1%E5%8E%85%E8%BF%91%E7%85%A7%23) `44.1K 🔥` `-67%`
1. [高速等5个小时充电车主发声](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E7%AD%895%E4%B8%AA%E5%B0%8F%E6%97%B6%E5%85%85%E7%94%B5%E8%BD%A6%E4%B8%BB%E5%8F%91%E5%A3%B0%23) `40.9K 🔥` `-75%`
1. [C罗退队惊动葡萄牙总理](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E9%80%80%E9%98%9F%E6%83%8A%E5%8A%A8%E8%91%A1%E8%90%84%E7%89%99%E6%80%BB%E7%90%86%23) `40.8K 🔥` `-82%`
1. [小学生被老师掌掴致耳聋警方终止调查](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E7%94%9F%E8%A2%AB%E8%80%81%E5%B8%88%E6%8E%8C%E6%8E%B4%E8%87%B4%E8%80%B3%E8%81%8B%E8%AD%A6%E6%96%B9%E7%BB%88%E6%AD%A2%E8%B0%83%E6%9F%A5%23) `40.8K 🔥` `-62%`
1. [虎扑女神大赛入围名单](https://s.weibo.com/weibo?q=%23%E8%99%8E%E6%89%91%E5%A5%B3%E7%A5%9E%E5%A4%A7%E8%B5%9B%E5%85%A5%E5%9B%B4%E5%90%8D%E5%8D%95%23) `35.9K 🔥` `-84%`
1. [女装高退货率逼出2.4米防拆丝带](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E9%AB%98%E9%80%80%E8%B4%A7%E7%8E%87%E9%80%BC%E5%87%BA2.4%E7%B1%B3%E9%98%B2%E6%8B%86%E4%B8%9D%E5%B8%A6%23) `34.7K 🔥` `-84%`
1. [奚梦瑶自曝婆婆5胎剖腹产没坐月子](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E8%87%AA%E6%9B%9D%E5%A9%86%E5%A9%865%E8%83%8E%E5%89%96%E8%85%B9%E4%BA%A7%E6%B2%A1%E5%9D%90%E6%9C%88%E5%AD%90%23) `34.3K 🔥` `-85%`
1. [高速服务区新能源车充电像排队打饭](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E6%9C%8D%E5%8A%A1%E5%8C%BA%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E5%85%85%E7%94%B5%E5%83%8F%E6%8E%92%E9%98%9F%E6%89%93%E9%A5%AD%23) `32.7K 🔥` `-88%`
1. [空姐改签反应过来是苏州](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E5%A7%90%E6%94%B9%E7%AD%BE%E5%8F%8D%E5%BA%94%E8%BF%87%E6%9D%A5%E6%98%AF%E8%8B%8F%E5%B7%9E%23) `32.5K 🔥` `-85%`
1. [人可以和不爱的人过一生](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%8F%AF%E4%BB%A5%E5%92%8C%E4%B8%8D%E7%88%B1%E7%9A%84%E4%BA%BA%E8%BF%87%E4%B8%80%E7%94%9F%23) `31.4K 🔥` `-86%`
1. [以防你不会剪脚趾甲](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E9%98%B2%E4%BD%A0%E4%B8%8D%E4%BC%9A%E5%89%AA%E8%84%9A%E8%B6%BE%E7%94%B2%23) `31.2K 🔥` `-80%`
1. [周扬青自曝脸馒化了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%89%AC%E9%9D%92%E8%87%AA%E6%9B%9D%E8%84%B8%E9%A6%92%E5%8C%96%E4%BA%86%23) `31.2K 🔥` `-86%`
1. [薛之谦当场叫停演出](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%BD%93%E5%9C%BA%E5%8F%AB%E5%81%9C%E6%BC%94%E5%87%BA%23) `31.2K 🔥` `-86%`
1. [怪不得医生有时候会反复套话](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%8C%BB%E7%94%9F%E6%9C%89%E6%97%B6%E5%80%99%E4%BC%9A%E5%8F%8D%E5%A4%8D%E5%A5%97%E8%AF%9D%23) `31.2K 🔥` `-86%`
1. [原来身上的肥肉是这样长出来的啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BA%AB%E4%B8%8A%E7%9A%84%E8%82%A5%E8%82%89%E6%98%AF%E8%BF%99%E6%A0%B7%E9%95%BF%E5%87%BA%E6%9D%A5%E7%9A%84%E5%95%8A%23) `31.2K 🔥` `-77%`
1. [警察叔叔标记了一辆载具](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E5%AF%9F%E5%8F%94%E5%8F%94%E6%A0%87%E8%AE%B0%E4%BA%86%E4%B8%80%E8%BE%86%E8%BD%BD%E5%85%B7%23) `31.2K 🔥` `-81%`
1. [国庆](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%23) `31.2K 🔥` `-82%`
1. [山东文旅疑似喝多了](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E6%96%87%E6%97%85%E7%96%91%E4%BC%BC%E5%96%9D%E5%A4%9A%E4%BA%86%23) `31.2K 🔥` `-86%`
1. [导航看了都沉默三秒](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E8%88%AA%E7%9C%8B%E4%BA%86%E9%83%BD%E6%B2%89%E9%BB%98%E4%B8%89%E7%A7%92%23) `31.1K 🔥` `-82%`
1. [楚门的世界男主金凯瑞结婚](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E9%97%A8%E7%9A%84%E4%B8%96%E7%95%8C%E7%94%B7%E4%B8%BB%E9%87%91%E5%87%AF%E7%91%9E%E7%BB%93%E5%A9%9A%23) `29.9K 🔥` `-78%`
1. [老板得知员工结婚天都塌了](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E5%BE%97%E7%9F%A5%E5%91%98%E5%B7%A5%E7%BB%93%E5%A9%9A%E5%A4%A9%E9%83%BD%E5%A1%8C%E4%BA%86%23) `29.4K 🔥` `-84%`
1. [央视国庆晚会节目单](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E5%9B%BD%E5%BA%86%E6%99%9A%E4%BC%9A%E8%8A%82%E7%9B%AE%E5%8D%95%23) `29.0K 🔥` `-78%`
1. [外围股市涨疯了](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%B4%E8%82%A1%E5%B8%82%E6%B6%A8%E7%96%AF%E4%BA%86%23) `28.9K 🔥` `-87%`
1. [馒化脸是什么](https://s.weibo.com/weibo?q=%23%E9%A6%92%E5%8C%96%E8%84%B8%E6%98%AF%E4%BB%80%E4%B9%88%23) `28.9K 🔥` `-87%`
1. [范丞丞唱哑剧哭了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%94%B1%E5%93%91%E5%89%A7%E5%93%AD%E4%BA%86%23) `28.6K 🔥` `-82%`
1. [特朗普称朝鲜可拥核伊朗不行](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E6%9C%9D%E9%B2%9C%E5%8F%AF%E6%8B%A5%E6%A0%B8%E4%BC%8A%E6%9C%97%E4%B8%8D%E8%A1%8C%23) `28.5K 🔥` `-68%`
1. [最后一次从中国发出的问候](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%90%8E%E4%B8%80%E6%AC%A1%E4%BB%8E%E4%B8%AD%E5%9B%BD%E5%8F%91%E5%87%BA%E7%9A%84%E9%97%AE%E5%80%99%23) `28.4K 🔥` `-73%`
1. [周扬青家的爱马仕比我家塑料袋都多](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%89%AC%E9%9D%92%E5%AE%B6%E7%9A%84%E7%88%B1%E9%A9%AC%E4%BB%95%E6%AF%94%E6%88%91%E5%AE%B6%E5%A1%91%E6%96%99%E8%A2%8B%E9%83%BD%E5%A4%9A%23) `28.2K 🔥` `-77%`
1. [杨超越巴黎世家出图](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E5%B7%B4%E9%BB%8E%E4%B8%96%E5%AE%B6%E5%87%BA%E5%9B%BE%23) `28.2K 🔥` `-83%`
1. [燊是赌王把自己名字送给长孙继承](https://s.weibo.com/weibo?q=%23%E7%87%8A%E6%98%AF%E8%B5%8C%E7%8E%8B%E6%8A%8A%E8%87%AA%E5%B7%B1%E5%90%8D%E5%AD%97%E9%80%81%E7%BB%99%E9%95%BF%E5%AD%99%E7%BB%A7%E6%89%BF%23) `28.1K 🔥` `-87%`

Updated at 2026-10-02 05:18:22

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
