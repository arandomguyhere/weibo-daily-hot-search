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

1. [CROCS全球品牌代言人樊振东 (CROCS global brand spokesperson Fan Zhendong)](https://s.weibo.com/weibo?q=%23CROCS%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `143.8K 🔥` `NEW`
1. [阿根廷西班牙争夺大力神杯](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%A5%BF%E7%8F%AD%E7%89%99%E4%BA%89%E5%A4%BA%E5%A4%A7%E5%8A%9B%E7%A5%9E%E6%9D%AF%23) `106.0K 🔥` `NEW`
1. [第一个给世界杯决赛对手洗过澡的人](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E7%BB%99%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E5%AF%B9%E6%89%8B%E6%B4%97%E8%BF%87%E6%BE%A1%E7%9A%84%E4%BA%BA%23) `104.5K 🔥` `NEW`
1. [以后快递地址只写到小区](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E5%BF%AB%E9%80%92%E5%9C%B0%E5%9D%80%E5%8F%AA%E5%86%99%E5%88%B0%E5%B0%8F%E5%8C%BA%23) `1.1M 🔥` `-47%`
1. [长沙人是瞒着我们进化了吗 (Did the people of Changsha evolve without telling us?)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E4%BA%BA%E6%98%AF%E7%9E%92%E7%9D%80%E6%88%91%E4%BB%AC%E8%BF%9B%E5%8C%96%E4%BA%86%E5%90%97%23) `329.3K 🔥` `-51%`
1. [超300款全球首发AI产品即将亮相 (Over 300 world-first AI products are about to be unveiled)](https://s.weibo.com/weibo?q=%23%E8%B6%85300%E6%AC%BE%E5%85%A8%E7%90%83%E9%A6%96%E5%8F%91AI%E4%BA%A7%E5%93%81%E5%8D%B3%E5%B0%86%E4%BA%AE%E7%9B%B8%23) `256.7K 🔥` `-55%`
1. [过了很多年才突然明白的事](https://s.weibo.com/weibo?q=%23%E8%BF%87%E4%BA%86%E5%BE%88%E5%A4%9A%E5%B9%B4%E6%89%8D%E7%AA%81%E7%84%B6%E6%98%8E%E7%99%BD%E7%9A%84%E4%BA%8B%23) `248.3K 🔥` `-51%`
1. [周星驰3个问号回应被偷票房](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B03%E4%B8%AA%E9%97%AE%E5%8F%B7%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%81%B7%E7%A5%A8%E6%88%BF%23) `246.2K 🔥` `-43%`
1. [法国队对季军赛毫无动力 (France has no motivation for third-place match)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%98%9F%E5%AF%B9%E5%AD%A3%E5%86%9B%E8%B5%9B%E6%AF%AB%E6%97%A0%E5%8A%A8%E5%8A%9B%23) `146.8K 🔥` `-56%`
1. [realme手机退出中国市场](https://s.weibo.com/weibo?q=%23realme%E6%89%8B%E6%9C%BA%E9%80%80%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%23) `113.7K 🔥` `-59%`
1. [一代人有一代人的漂亮饭](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E6%BC%82%E4%BA%AE%E9%A5%AD%23) `109.9K 🔥` `-50%`
1. [EWC淘汰赛](https://s.weibo.com/weibo?q=%23EWC%E6%B7%98%E6%B1%B0%E8%B5%9B%23) `107.5K 🔥` `-52%`
1. [服务员帮人传话多次叫女顾客去包厢](https://s.weibo.com/weibo?q=%23%E6%9C%8D%E5%8A%A1%E5%91%98%E5%B8%AE%E4%BA%BA%E4%BC%A0%E8%AF%9D%E5%A4%9A%E6%AC%A1%E5%8F%AB%E5%A5%B3%E9%A1%BE%E5%AE%A2%E5%8E%BB%E5%8C%85%E5%8E%A2%23) `107.4K 🔥` `-51%`
1. [单删不是很正常吗 (Isn’t it normal to delete it alone?)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E5%88%A0%E4%B8%8D%E6%98%AF%E5%BE%88%E6%AD%A3%E5%B8%B8%E5%90%97%23) `107.4K 🔥` `-52%`
1. [上班后没了叔叔阿姨](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E5%90%8E%E6%B2%A1%E4%BA%86%E5%8F%94%E5%8F%94%E9%98%BF%E5%A7%A8%23) `107.2K 🔥` `-58%`
1. [关晓彤被风吹的这一下](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E8%A2%AB%E9%A3%8E%E5%90%B9%E7%9A%84%E8%BF%99%E4%B8%80%E4%B8%8B%23) `107.1K 🔥` `-52%`
1. [最绝望的英法大战出现了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E7%BB%9D%E6%9C%9B%E7%9A%84%E8%8B%B1%E6%B3%95%E5%A4%A7%E6%88%98%E5%87%BA%E7%8E%B0%E4%BA%86%23) `107.0K 🔥` `-52%`
1. [第1次见女主怀孕相亲](https://s.weibo.com/weibo?q=%23%E7%AC%AC1%E6%AC%A1%E8%A7%81%E5%A5%B3%E4%B8%BB%E6%80%80%E5%AD%95%E7%9B%B8%E4%BA%B2%23) `106.9K 🔥` `-52%`
1. [阿根廷的最后十分钟怎么了](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%9A%84%E6%9C%80%E5%90%8E%E5%8D%81%E5%88%86%E9%92%9F%E6%80%8E%E4%B9%88%E4%BA%86%23) `106.7K 🔥` `-52%`
1. [小鹏MONAL03价格杀疯了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONAL03%E4%BB%B7%E6%A0%BC%E6%9D%80%E7%96%AF%E4%BA%86%23) `106.7K 🔥` `-52%`
1. [金靖回应虞书欣](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E5%9B%9E%E5%BA%94%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `106.5K 🔥` `-52%`
1. [盒马因受害咪连夜改冬瓜图](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%AC%E5%9B%A0%E5%8F%97%E5%AE%B3%E5%92%AA%E8%BF%9E%E5%A4%9C%E6%94%B9%E5%86%AC%E7%93%9C%E5%9B%BE%23) `106.4K 🔥` `-51%`
1. [黑狗咬人被主人卖掉吓得眼神呆滞](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%8B%97%E5%92%AC%E4%BA%BA%E8%A2%AB%E4%B8%BB%E4%BA%BA%E5%8D%96%E6%8E%89%E5%90%93%E5%BE%97%E7%9C%BC%E7%A5%9E%E5%91%86%E6%BB%9E%23) `106.3K 🔥` `-52%`
1. [女孩手臂超长轻松腕线过裆 (Girls' arms are super long and the wrist line easily passes through the crotch)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%89%8B%E8%87%82%E8%B6%85%E9%95%BF%E8%BD%BB%E6%9D%BE%E8%85%95%E7%BA%BF%E8%BF%87%E8%A3%86%23) `106.2K 🔥` `-52%`
1. [试衣服的时候天塌了 (The sky fell when I was trying on clothes.)](https://s.weibo.com/weibo?q=%23%E8%AF%95%E8%A1%A3%E6%9C%8D%E7%9A%84%E6%97%B6%E5%80%99%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `106.1K 🔥` `-52%`
1. [LV热门包二手价跳水](https://s.weibo.com/weibo?q=%23LV%E7%83%AD%E9%97%A8%E5%8C%85%E4%BA%8C%E6%89%8B%E4%BB%B7%E8%B7%B3%E6%B0%B4%23) `105.8K 🔥` `-52%`
1. [薛之谦新歌媚人](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%96%B0%E6%AD%8C%E5%AA%9A%E4%BA%BA%23) `105.7K 🔥` `-52%`
1. [冉莹颖侃侃而谈邹市明心如死灰](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E4%BE%83%E4%BE%83%E8%80%8C%E8%B0%88%E9%82%B9%E5%B8%82%E6%98%8E%E5%BF%83%E5%A6%82%E6%AD%BB%E7%81%B0%23) `105.6K 🔥` `-52%`
1. [我已经吹不了25度的空调了](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B7%B2%E7%BB%8F%E5%90%B9%E4%B8%8D%E4%BA%8625%E5%BA%A6%E7%9A%84%E7%A9%BA%E8%B0%83%E4%BA%86%23) `105.5K 🔥` `-52%`
1. [巴黎殡仪馆爆满遗体外运80公里](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E6%AE%A1%E4%BB%AA%E9%A6%86%E7%88%86%E6%BB%A1%E9%81%97%E4%BD%93%E5%A4%96%E8%BF%9080%E5%85%AC%E9%87%8C%23) `105.4K 🔥` `-51%`
1. [李在明警示公职人员勿让年轻异性陪坐](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E8%AD%A6%E7%A4%BA%E5%85%AC%E8%81%8C%E4%BA%BA%E5%91%98%E5%8B%BF%E8%AE%A9%E5%B9%B4%E8%BD%BB%E5%BC%82%E6%80%A7%E9%99%AA%E5%9D%90%23) `105.3K 🔥` `-52%`
1. [新一代理想L6售价24.98万元 (The new generation of Ideal L6 is priced at 249,800 yuan)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%80%E4%BB%A3%E7%90%86%E6%83%B3L6%E5%94%AE%E4%BB%B724.98%E4%B8%87%E5%85%83%23) `105.2K 🔥` `-52%`
1. [吕洞宾建模 杨洋](https://s.weibo.com/weibo?q=%23%E5%90%95%E6%B4%9E%E5%AE%BE%E5%BB%BA%E6%A8%A1%20%E6%9D%A8%E6%B4%8B%23) `105.0K 🔥` `-52%`
1. [毕业后朋友圈现状](https://s.weibo.com/weibo?q=%23%E6%AF%95%E4%B8%9A%E5%90%8E%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%8E%B0%E7%8A%B6%23) `104.9K 🔥` `-51%`
1. [韩国股民从暴富到一夜归零](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E6%B0%91%E4%BB%8E%E6%9A%B4%E5%AF%8C%E5%88%B0%E4%B8%80%E5%A4%9C%E5%BD%92%E9%9B%B6%23) `104.8K 🔥` `-52%`
1. [浙江一问界车主遇险情SOS按键竟失灵 (A car owner in Zhejiang Yiwenjie found his SOS button malfunctioned when he was in danger)](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E4%B8%80%E9%97%AE%E7%95%8C%E8%BD%A6%E4%B8%BB%E9%81%87%E9%99%A9%E6%83%85SOS%E6%8C%89%E9%94%AE%E7%AB%9F%E5%A4%B1%E7%81%B5%23) `104.7K 🔥` `-51%`
1. [贝克汉姆看台掩面落泪 (Beckham covered his face in tears in the stands)](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E7%9C%8B%E5%8F%B0%E6%8E%A9%E9%9D%A2%E8%90%BD%E6%B3%AA%23) `104.7K 🔥` `-52%`
1. [TTG夏季赛零封JDG](https://s.weibo.com/weibo?q=%23TTG%E5%A4%8F%E5%AD%A3%E8%B5%9B%E9%9B%B6%E5%B0%81JDG%23) `104.4K 🔥` `-52%`
1. [原来饥饿大多都是假性食欲](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%A5%A5%E9%A5%BF%E5%A4%A7%E5%A4%9A%E9%83%BD%E6%98%AF%E5%81%87%E6%80%A7%E9%A3%9F%E6%AC%B2%23) `104.3K 🔥` `-52%`
1. [警惕主动靠近你的人](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%83%95%E4%B8%BB%E5%8A%A8%E9%9D%A0%E8%BF%91%E4%BD%A0%E7%9A%84%E4%BA%BA%23) `104.1K 🔥` `-51%`
1. [李想说L6补齐三个短板](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%83%B3%E8%AF%B4L6%E8%A1%A5%E9%BD%90%E4%B8%89%E4%B8%AA%E7%9F%AD%E6%9D%BF%23) `104.0K 🔥` `-23%`
1. [25岁民警与持刀歹徒搏斗牺牲 (25-year-old policeman died fighting with knife-wielding gangster)](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E6%B0%91%E8%AD%A6%E4%B8%8E%E6%8C%81%E5%88%80%E6%AD%B9%E5%BE%92%E6%90%8F%E6%96%97%E7%89%BA%E7%89%B2%23) `104.0K 🔥` `-52%`
1. [恩利当面蛐蛐孟子义](https://s.weibo.com/weibo?q=%23%E6%81%A9%E5%88%A9%E5%BD%93%E9%9D%A2%E8%9B%90%E8%9B%90%E5%AD%9F%E5%AD%90%E4%B9%89%23) `103.8K 🔥` `-52%`
1. [蔡徐坤演唱会想看人数](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E6%BC%94%E5%94%B1%E4%BC%9A%E6%83%B3%E7%9C%8B%E4%BA%BA%E6%95%B0%23) `103.7K 🔥` `-52%`
1. [男子强拆刮刮乐赖账6000躲进厕所](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BC%BA%E6%8B%86%E5%88%AE%E5%88%AE%E4%B9%90%E8%B5%96%E8%B4%A66000%E8%BA%B2%E8%BF%9B%E5%8E%95%E6%89%80%23) `103.6K 🔥` `-52%`
1. [马龙妻子儿子现场观赛](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E5%A6%BB%E5%AD%90%E5%84%BF%E5%AD%90%E7%8E%B0%E5%9C%BA%E8%A7%82%E8%B5%9B%23) `103.5K 🔥` `-51%`
1. [小偷来了都不知道偷啥](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%81%B7%E6%9D%A5%E4%BA%86%E9%83%BD%E4%B8%8D%E7%9F%A5%E9%81%93%E5%81%B7%E5%95%A5%23) `103.3K 🔥` `-52%`
1. [LV起诉风波后客流锐减 (Customer flow dropped sharply after LV lawsuit scandal)](https://s.weibo.com/weibo?q=%23LV%E8%B5%B7%E8%AF%89%E9%A3%8E%E6%B3%A2%E5%90%8E%E5%AE%A2%E6%B5%81%E9%94%90%E5%87%8F%23) `103.2K 🔥` `-52%`
1. [电影八仙口碑](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%85%AB%E4%BB%99%E5%8F%A3%E7%A2%91%23) `103.2K 🔥` `-52%`
1. [DYG方羽心态崩了](https://s.weibo.com/weibo?q=%23DYG%E6%96%B9%E7%BE%BD%E5%BF%83%E6%80%81%E5%B4%A9%E4%BA%86%23) `103.0K 🔥` `-52%`

Updated at 2026-07-17 02:46:38

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
