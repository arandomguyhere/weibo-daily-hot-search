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

1. [西班牙边境失控 (Spanish border out of control)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E8%BE%B9%E5%A2%83%E5%A4%B1%E6%8E%A7%23) `1.4M 🔥` `NEW`
1. [连云港母女 蒸汽烫人](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BA%91%E6%B8%AF%E6%AF%8D%E5%A5%B3%20%E8%92%B8%E6%B1%BD%E7%83%AB%E4%BA%BA%23) `1.3M 🔥` `NEW`
1. [K100ProMax亮相ChinaJoy](https://s.weibo.com/weibo?q=%23K100ProMax%E4%BA%AE%E7%9B%B8ChinaJoy%23) `717.7K 🔥` `NEW`
1. [李晟十日终焉领口带血](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%9F%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%A2%86%E5%8F%A3%E5%B8%A6%E8%A1%80%23) `698.6K 🔥` `NEW`
1. [遭公公性侵儿媳被鉴定无性防卫能力](https://s.weibo.com/weibo?q=%23%E9%81%AD%E5%85%AC%E5%85%AC%E6%80%A7%E4%BE%B5%E5%84%BF%E5%AA%B3%E8%A2%AB%E9%89%B4%E5%AE%9A%E6%97%A0%E6%80%A7%E9%98%B2%E5%8D%AB%E8%83%BD%E5%8A%9B%23) `694.0K 🔥` `NEW`
1. [连云港火灾 云梯](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BA%91%E6%B8%AF%E7%81%AB%E7%81%BE%20%E4%BA%91%E6%A2%AF%23) `670.2K 🔥` `NEW`
1. [集你所爱](https://s.weibo.com/weibo?q=%23%E9%9B%86%E4%BD%A0%E6%89%80%E7%88%B1%23) `667.8K 🔥` `NEW`
1. [C罗晒与16岁儿子肌肉合照](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%99%92%E4%B8%8E16%E5%B2%81%E5%84%BF%E5%AD%90%E8%82%8C%E8%82%89%E5%90%88%E7%85%A7%23) `643.4K 🔥` `NEW`
1. [蓝盈莹十日终焉吓到我了](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%90%93%E5%88%B0%E6%88%91%E4%BA%86%23) `606.4K 🔥` `NEW`
1. [AI裁员 死循环](https://s.weibo.com/weibo?q=%23AI%E8%A3%81%E5%91%98%20%E6%AD%BB%E5%BE%AA%E7%8E%AF%23) `449.6K 🔥` `NEW`
1. [公司为省空调费要求凌晨四点上班 (The company requires people to work at 4 a.m. to save money on air conditioning)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E4%B8%BA%E7%9C%81%E7%A9%BA%E8%B0%83%E8%B4%B9%E8%A6%81%E6%B1%82%E5%87%8C%E6%99%A8%E5%9B%9B%E7%82%B9%E4%B8%8A%E7%8F%AD%23) `448.0K 🔥` `NEW`
1. [唐艺昕张若昀女儿近照](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%BC%A0%E8%8B%A5%E6%98%80%E5%A5%B3%E5%84%BF%E8%BF%91%E7%85%A7%23) `442.8K 🔥` `NEW`
1. [心动的信号9素人官宣](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A8%E7%9A%84%E4%BF%A1%E5%8F%B79%E7%B4%A0%E4%BA%BA%E5%AE%98%E5%AE%A3%23) `439.7K 🔥` `NEW`
1. [男子健身房被女生当众指控偷拍](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%81%A5%E8%BA%AB%E6%88%BF%E8%A2%AB%E5%A5%B3%E7%94%9F%E5%BD%93%E4%BC%97%E6%8C%87%E6%8E%A7%E5%81%B7%E6%8B%8D%23) `438.1K 🔥` `NEW`
1. [白鹿八月行程图穿高定](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%85%AB%E6%9C%88%E8%A1%8C%E7%A8%8B%E5%9B%BE%E7%A9%BF%E9%AB%98%E5%AE%9A%23) `433.2K 🔥` `NEW`
1. [林大厨让王俊凯不要生气](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%A4%A7%E5%8E%A8%E8%AE%A9%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%8D%E8%A6%81%E7%94%9F%E6%B0%94%23) `431.6K 🔥` `NEW`
1. [ChinaJoy](https://s.weibo.com/weibo?q=%23ChinaJoy%23) `391.3K 🔥` `NEW`
1. [罗正翻红](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%E7%BF%BB%E7%BA%A2%23) `386.0K 🔥` `NEW`
1. [婴儿就医10小时后死亡认定医疗事故](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E5%B0%B1%E5%8C%BB10%E5%B0%8F%E6%97%B6%E5%90%8E%E6%AD%BB%E4%BA%A1%E8%AE%A4%E5%AE%9A%E5%8C%BB%E7%96%97%E4%BA%8B%E6%95%85%23) `364.3K 🔥` `NEW`
1. [企业家夫妇无罪释放后负债三千万](https://s.weibo.com/weibo?q=%23%E4%BC%81%E4%B8%9A%E5%AE%B6%E5%A4%AB%E5%A6%87%E6%97%A0%E7%BD%AA%E9%87%8A%E6%94%BE%E5%90%8E%E8%B4%9F%E5%80%BA%E4%B8%89%E5%8D%83%E4%B8%87%23) `359.2K 🔥` `NEW`
1. [当AI长出汽车身体 (When AI grows a car body)](https://s.weibo.com/weibo?q=%23%E5%BD%93AI%E9%95%BF%E5%87%BA%E6%B1%BD%E8%BD%A6%E8%BA%AB%E4%BD%93%23) `350.3K 🔥` `NEW`
1. [贵州通天河伴漂 擦边](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E9%80%9A%E5%A4%A9%E6%B2%B3%E4%BC%B4%E6%BC%82%20%E6%93%A6%E8%BE%B9%23) `341.6K 🔥` `NEW`
1. [看到请假记录天都塌了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%88%B0%E8%AF%B7%E5%81%87%E8%AE%B0%E5%BD%95%E5%A4%A9%E9%83%BD%E5%A1%8C%E4%BA%86%23) `330.1K 🔥` `NEW`
1. [第一次对薄有了新的认知](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E8%96%84%E6%9C%89%E4%BA%86%E6%96%B0%E7%9A%84%E8%AE%A4%E7%9F%A5%23) `321.2K 🔥` `NEW`
1. [TF四代 五公](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%20%E4%BA%94%E5%85%AC%23) `320.7K 🔥` `NEW`
1. [光与夜之恋](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%23) `251.8K 🔥` `NEW`
1. [宋威龙单手抱](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%8D%95%E6%89%8B%E6%8A%B1%23) `248.6K 🔥` `NEW`
1. [关晓彤粉发](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%B2%89%E5%8F%91%23) `247.2K 🔥` `NEW`
1. [三伏天喝啥最补水](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BC%8F%E5%A4%A9%E5%96%9D%E5%95%A5%E6%9C%80%E8%A1%A5%E6%B0%B4%23) `243.3K 🔥` `NEW`
1. [婚外胚胎案](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%23) `240.6K 🔥` `NEW`
1. [丈夫与小三试管反怪妻子毁自己孩子 (Husband and mistress blame wife for ruining their child)](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E4%B8%8E%E5%B0%8F%E4%B8%89%E8%AF%95%E7%AE%A1%E5%8F%8D%E6%80%AA%E5%A6%BB%E5%AD%90%E6%AF%81%E8%87%AA%E5%B7%B1%E5%AD%A9%E5%AD%90%23) `238.4K 🔥` `NEW`
1. [十日终焉还在坚持手搓](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E8%BF%98%E5%9C%A8%E5%9D%9A%E6%8C%81%E6%89%8B%E6%90%93%23) `232.1K 🔥` `NEW`
1. [西班牙称边境已完全崩溃](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%A7%B0%E8%BE%B9%E5%A2%83%E5%B7%B2%E5%AE%8C%E5%85%A8%E5%B4%A9%E6%BA%83%23) `202.1K 🔥` `NEW`
1. [连云港小区火灾母女已转院治疗](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BA%91%E6%B8%AF%E5%B0%8F%E5%8C%BA%E7%81%AB%E7%81%BE%E6%AF%8D%E5%A5%B3%E5%B7%B2%E8%BD%AC%E9%99%A2%E6%B2%BB%E7%96%97%23) `201.3K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `200.6K 🔥` `NEW`
1. [央视关注AI汽车](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E5%85%B3%E6%B3%A8AI%E6%B1%BD%E8%BD%A6%23) `200.0K 🔥` `NEW`
1. [卫健委回应原配申请销毁婚外胚胎](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%A7%94%E5%9B%9E%E5%BA%94%E5%8E%9F%E9%85%8D%E7%94%B3%E8%AF%B7%E9%94%80%E6%AF%81%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%23) `199.4K 🔥` `NEW`
1. [女子婚后多年未孕检查发现自己是男的](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%A9%9A%E5%90%8E%E5%A4%9A%E5%B9%B4%E6%9C%AA%E5%AD%95%E6%A3%80%E6%9F%A5%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E6%98%AF%E7%94%B7%E7%9A%84%23) `196.2K 🔥` `NEW`
1. [王楚钦vs龙宇](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E9%BE%99%E5%AE%87%23) `192.2K 🔥` `NEW`
1. [当工作让你崩溃到一定程度](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%B7%A5%E4%BD%9C%E8%AE%A9%E4%BD%A0%E5%B4%A9%E6%BA%83%E5%88%B0%E4%B8%80%E5%AE%9A%E7%A8%8B%E5%BA%A6%23) `189.2K 🔥` `NEW`
1. [人到一定年纪啥袋子都能拿出门了 (When a person reaches a certain age, he can take any bag out of the door.)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%88%B0%E4%B8%80%E5%AE%9A%E5%B9%B4%E7%BA%AA%E5%95%A5%E8%A2%8B%E5%AD%90%E9%83%BD%E8%83%BD%E6%8B%BF%E5%87%BA%E9%97%A8%E4%BA%86%23) `185.2K 🔥` `NEW`
1. [马嘉祺严浩翔合作舞台彩排](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%90%88%E4%BD%9C%E8%88%9E%E5%8F%B0%E5%BD%A9%E6%8E%92%23) `176.2K 🔥` `NEW`
1. [出轨丈夫起诉离婚试图保住婚外胚胎](https://s.weibo.com/weibo?q=%23%E5%87%BA%E8%BD%A8%E4%B8%88%E5%A4%AB%E8%B5%B7%E8%AF%89%E7%A6%BB%E5%A9%9A%E8%AF%95%E5%9B%BE%E4%BF%9D%E4%BD%8F%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%23) `175.3K 🔥` `NEW`
1. [电影功夫女足](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `173.9K 🔥` `NEW`
1. [柳智敏 丝巾当帽子](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%20%E4%B8%9D%E5%B7%BE%E5%BD%93%E5%B8%BD%E5%AD%90%23) `170.1K 🔥` `NEW`
1. [WTT冠军赛澳门站国乒名单](https://s.weibo.com/weibo?q=%23WTT%E5%86%A0%E5%86%9B%E8%B5%9B%E6%BE%B3%E9%97%A8%E7%AB%99%E5%9B%BD%E4%B9%92%E5%90%8D%E5%8D%95%23) `161.2K 🔥` `NEW`
1. [强军制胜向未来](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E5%86%9B%E5%88%B6%E8%83%9C%E5%90%91%E6%9C%AA%E6%9D%A5%23) `794.1K 🔥` `+261%`
1. [美国吸毒女子像虫子一样在地上蠕动](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%90%B8%E6%AF%92%E5%A5%B3%E5%AD%90%E5%83%8F%E8%99%AB%E5%AD%90%E4%B8%80%E6%A0%B7%E5%9C%A8%E5%9C%B0%E4%B8%8A%E8%A0%95%E5%8A%A8%23) `273.5K 🔥` `-44%`
1. [于正回应凤囚凰争议](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E5%87%A4%E5%9B%9A%E5%87%B0%E4%BA%89%E8%AE%AE%23) `232.4K 🔥` `-64%`
1. [疑似在北京公交干过的罗马机场员工](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%9C%A8%E5%8C%97%E4%BA%AC%E5%85%AC%E4%BA%A4%E5%B9%B2%E8%BF%87%E7%9A%84%E7%BD%97%E9%A9%AC%E6%9C%BA%E5%9C%BA%E5%91%98%E5%B7%A5%23) `188.3K 🔥` `-71%`

Updated at 2026-07-31 13:51:41

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
