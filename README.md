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

1. [2026考研国家线发布 (2026 Postgraduate Entrance Examination National Line Released)](https://s.weibo.com/weibo?q=%232026%E8%80%83%E7%A0%94%E5%9B%BD%E5%AE%B6%E7%BA%BF%E5%8F%91%E5%B8%83%23) `9.0M 🔥` `NEW`
1. [周鸿祎揭美伪造陈志案证据内幕](https://s.weibo.com/weibo?q=%23%E5%91%A8%E9%B8%BF%E7%A5%8E%E6%8F%AD%E7%BE%8E%E4%BC%AA%E9%80%A0%E9%99%88%E5%BF%97%E6%A1%88%E8%AF%81%E6%8D%AE%E5%86%85%E5%B9%95%23) `1.4M 🔥` `NEW`
1. [小米超跑](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%B6%85%E8%B7%91%23) `614.7K 🔥` `NEW`
1. [近视散光人群开夜车的视角](https://s.weibo.com/weibo?q=%23%E8%BF%91%E8%A7%86%E6%95%A3%E5%85%89%E4%BA%BA%E7%BE%A4%E5%BC%80%E5%A4%9C%E8%BD%A6%E7%9A%84%E8%A7%86%E8%A7%92%23) `347.2K 🔥` `NEW`
1. [郭晓婷王天辰第二十八年春](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E7%AC%AC%E4%BA%8C%E5%8D%81%E5%85%AB%E5%B9%B4%E6%98%A5%23) `312.3K 🔥` `NEW`
1. [管综](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E7%BB%BC%23) `264.3K 🔥` `NEW`
1. [美国对伊朗提了4项要求](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%AF%B9%E4%BC%8A%E6%9C%97%E6%8F%90%E4%BA%864%E9%A1%B9%E8%A6%81%E6%B1%82%23) `223.7K 🔥` `NEW`
1. [人不能从事长期有紧张感的工作](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%8D%E8%83%BD%E4%BB%8E%E4%BA%8B%E9%95%BF%E6%9C%9F%E6%9C%89%E7%B4%A7%E5%BC%A0%E6%84%9F%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `219.1K 🔥` `NEW`
1. [迪丽热巴个人工作室](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B8%AA%E4%BA%BA%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `215.6K 🔥` `NEW`
1. [保姆卖雇主名牌包给小三20万](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E5%8D%96%E9%9B%87%E4%B8%BB%E5%90%8D%E7%89%8C%E5%8C%85%E7%BB%99%E5%B0%8F%E4%B8%8920%E4%B8%87%23) `213.2K 🔥` `NEW`
1. [法硕 (Master of Laws)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E7%A1%95%23) `212.9K 🔥` `NEW`
1. [行程图](https://s.weibo.com/weibo?q=%23%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `207.3K 🔥` `NEW`
1. [徐志胜当宋妍霏的面接前任电话](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E5%BD%93%E5%AE%8B%E5%A6%8D%E9%9C%8F%E7%9A%84%E9%9D%A2%E6%8E%A5%E5%89%8D%E4%BB%BB%E7%94%B5%E8%AF%9D%23) `161.0K 🔥` `NEW`
1. [金饰价格一夜涨59元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E4%B8%80%E5%A4%9C%E6%B6%A859%E5%85%83%23) `160.1K 🔥` `NEW`
1. [律师解读造谣王一博聊天记录](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%A7%A3%E8%AF%BB%E9%80%A0%E8%B0%A3%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `156.0K 🔥` `NEW`
1. [网友建议每年免费5000公里专家回应](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%BB%BA%E8%AE%AE%E6%AF%8F%E5%B9%B4%E5%85%8D%E8%B4%B95000%E5%85%AC%E9%87%8C%E4%B8%93%E5%AE%B6%E5%9B%9E%E5%BA%94%23) `151.8K 🔥` `NEW`
1. [十个勤天 开工](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%20%E5%BC%80%E5%B7%A5%23) `151.4K 🔥` `NEW`
1. [小米汽车预告图](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E9%A2%84%E5%91%8A%E5%9B%BE%23) `150.7K 🔥` `NEW`
1. [被公开喊话退彩礼女方称彩礼已花](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%85%AC%E5%BC%80%E5%96%8A%E8%AF%9D%E9%80%80%E5%BD%A9%E7%A4%BC%E5%A5%B3%E6%96%B9%E7%A7%B0%E5%BD%A9%E7%A4%BC%E5%B7%B2%E8%8A%B1%23) `140.6K 🔥` `NEW`
1. [管综国家线](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E7%BB%BC%E5%9B%BD%E5%AE%B6%E7%BA%BF%23) `113.5K 🔥` `NEW`
1. [女孩二战考研查分341分喜极而泣 (A girl cried with joy after scoring 341 points in the World War II postgraduate entrance examination.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%BA%8C%E6%88%98%E8%80%83%E7%A0%94%E6%9F%A5%E5%88%86341%E5%88%86%E5%96%9C%E6%9E%81%E8%80%8C%E6%B3%A3%23) `112.4K 🔥` `NEW`
1. [年轻人脑梗的危险信号](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E8%84%91%E6%A2%97%E7%9A%84%E5%8D%B1%E9%99%A9%E4%BF%A1%E5%8F%B7%23) `111.6K 🔥` `NEW`
1. [现在就出发4没有宋亚轩](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%E6%B2%A1%E6%9C%89%E5%AE%8B%E4%BA%9A%E8%BD%A9%23) `106.3K 🔥` `NEW`
1. [考研调剂3月27日起填报](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E8%B0%83%E5%89%823%E6%9C%8827%E6%97%A5%E8%B5%B7%E5%A1%AB%E6%8A%A5%23) `100.8K 🔥` `NEW`
1. [汪苏泷演唱会的彩带是钥匙](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E5%BD%A9%E5%B8%A6%E6%98%AF%E9%92%A5%E5%8C%99%23) `97.6K 🔥` `NEW`
1. [大张伟付航说唱diss潘玮柏](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%BC%A0%E4%BC%9F%E4%BB%98%E8%88%AA%E8%AF%B4%E5%94%B1diss%E6%BD%98%E7%8E%AE%E6%9F%8F%23) `96.1K 🔥` `NEW`
1. [GUESS将关闭中国市场所有门店](https://s.weibo.com/weibo?q=%23GUESS%E5%B0%86%E5%85%B3%E9%97%AD%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%E6%89%80%E6%9C%89%E9%97%A8%E5%BA%97%23) `95.4K 🔥` `NEW`
1. [金饰价涨到1625元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%B6%A8%E5%88%B01625%E5%85%83%23) `93.2K 🔥` `NEW`
1. [凌晨加班就范丞丞工作室这样](https://s.weibo.com/weibo?q=%23%E5%87%8C%E6%99%A8%E5%8A%A0%E7%8F%AD%E5%B0%B1%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%BF%99%E6%A0%B7%23) `91.4K 🔥` `NEW`
1. [特朗普说将做重大决定](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E5%B0%86%E5%81%9A%E9%87%8D%E5%A4%A7%E5%86%B3%E5%AE%9A%23) `89.6K 🔥` `NEW`
1. [硅谷最贵华人被OpenAI挖走 (The most expensive Chinese in Silicon Valley was poached by OpenAI)](https://s.weibo.com/weibo?q=%23%E7%A1%85%E8%B0%B7%E6%9C%80%E8%B4%B5%E5%8D%8E%E4%BA%BA%E8%A2%ABOpenAI%E6%8C%96%E8%B5%B0%23) `88.3K 🔥` `NEW`
1. [法硕国家线能不能降](https://s.weibo.com/weibo?q=%23%E6%B3%95%E7%A1%95%E5%9B%BD%E5%AE%B6%E7%BA%BF%E8%83%BD%E4%B8%8D%E8%83%BD%E9%99%8D%23) `81.8K 🔥` `NEW`
1. [国家线 砍一刀](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E7%BA%BF%20%E7%A0%8D%E4%B8%80%E5%88%80%23) `1.7M 🔥` `+99%`
1. [真的不建议把肉泡在水里解冻](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E4%B8%8D%E5%BB%BA%E8%AE%AE%E6%8A%8A%E8%82%89%E6%B3%A1%E5%9C%A8%E6%B0%B4%E9%87%8C%E8%A7%A3%E5%86%BB%23) `130.5K 🔥` `+32%`
1. [范丞丞方说不认识没交集](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%96%B9%E8%AF%B4%E4%B8%8D%E8%AE%A4%E8%AF%86%E6%B2%A1%E4%BA%A4%E9%9B%86%23) `222.1K 🔥`
1. [Angelababy37岁了 (Angelababy is 37 years old)](https://s.weibo.com/weibo?q=%23Angelababy37%E5%B2%81%E4%BA%86%23) `220.4K 🔥`
1. [23岁研究生胃癌晚期称作息不规律 (A 23-year-old graduate student with advanced gastric cancer said he had irregular breathing)](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E7%A0%94%E7%A9%B6%E7%94%9F%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E7%A7%B0%E4%BD%9C%E6%81%AF%E4%B8%8D%E8%A7%84%E5%BE%8B%23) `193.9K 🔥`
1. [库迪向王一博致歉](https://s.weibo.com/weibo?q=%23%E5%BA%93%E8%BF%AA%E5%90%91%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%87%B4%E6%AD%89%23) `184.8K 🔥`
1. [伊朗 (Iran)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%23) `162.6K 🔥`
1. [杨幂谷爱凌合照 好娇啊小幂 (A group photo of Yang Mi, Gu Ailing, so cute, Xiaomi)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%88%E7%85%A7%20%E5%A5%BD%E5%A8%87%E5%95%8A%E5%B0%8F%E5%B9%82%23) `137.2K 🔥`
1. [考研查分 (Postgraduate entrance examination score check)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E6%9F%A5%E5%88%86%23) `380.7K 🔥` `-69%`
1. [伊朗同意不拥有可制造核弹的核材料](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%8C%E6%84%8F%E4%B8%8D%E6%8B%A5%E6%9C%89%E5%8F%AF%E5%88%B6%E9%80%A0%E6%A0%B8%E5%BC%B9%E7%9A%84%E6%A0%B8%E6%9D%90%E6%96%99%23) `297.8K 🔥` `-25%`
1. [考研今天出分 (Postgraduate entrance exam scores are out today)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E4%BB%8A%E5%A4%A9%E5%87%BA%E5%88%86%23) `134.2K 🔥` `-69%`
1. [21岁女生头晕以为没睡好查出脑梗 (A 21-year-old girl felt dizzy and thought she hadn’t slept well and was diagnosed with cerebral infarction)](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%A5%B3%E7%94%9F%E5%A4%B4%E6%99%95%E4%BB%A5%E4%B8%BA%E6%B2%A1%E7%9D%A1%E5%A5%BD%E6%9F%A5%E5%87%BA%E8%84%91%E6%A2%97%23) `126.4K 🔥` `-58%`
1. [湖南县委书记个人账号变问政现场](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E4%B8%AA%E4%BA%BA%E8%B4%A6%E5%8F%B7%E5%8F%98%E9%97%AE%E6%94%BF%E7%8E%B0%E5%9C%BA%23) `103.5K 🔥` `-44%`
1. [美国 伊朗 (United States Iran)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%20%E4%BC%8A%E6%9C%97%23) `94.0K 🔥` `-52%`
1. [上一个离开嘉行的是祝绪丹 (The last person to leave Jiaxing was Zhu Xudan)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%B8%80%E4%B8%AA%E7%A6%BB%E5%BC%80%E5%98%89%E8%A1%8C%E7%9A%84%E6%98%AF%E7%A5%9D%E7%BB%AA%E4%B8%B9%23) `92.1K 🔥` `-24%`
1. [黄金白银又涨爆了 (Gold and silver are soaring again)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E5%8F%88%E6%B6%A8%E7%88%86%E4%BA%86%23) `85.8K 🔥` `-30%`
1. [种地吧 (Farm it)](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `83.7K 🔥` `-35%`

Updated at 2026-02-28 11:20:26

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
