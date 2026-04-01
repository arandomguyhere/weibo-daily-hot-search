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

1. [4月1日起一批国家标准开始实施 (A number of national standards will be implemented from April 1)](https://s.weibo.com/weibo?q=%234%E6%9C%881%E6%97%A5%E8%B5%B7%E4%B8%80%E6%89%B9%E5%9B%BD%E5%AE%B6%E6%A0%87%E5%87%86%E5%BC%80%E5%A7%8B%E5%AE%9E%E6%96%BD%23) `636.8K 🔥` `NEW`
1. [陈飞宇冷脸搬凳子](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E5%86%B7%E8%84%B8%E6%90%AC%E5%87%B3%E5%AD%90%23) `264.7K 🔥` `NEW`
1. [中方回应美颁通用许可证排除中国](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%BE%8E%E9%A2%81%E9%80%9A%E7%94%A8%E8%AE%B8%E5%8F%AF%E8%AF%81%E6%8E%92%E9%99%A4%E4%B8%AD%E5%9B%BD%23) `235.8K 🔥` `NEW`
1. [韩媒就Ruler报道道歉](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AA%92%E5%B0%B1Ruler%E6%8A%A5%E9%81%93%E9%81%93%E6%AD%89%23) `139.9K 🔥` `NEW`
1. [济南首台张雪机车夺冠车型受损](https://s.weibo.com/weibo?q=%23%E6%B5%8E%E5%8D%97%E9%A6%96%E5%8F%B0%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%86%A0%E8%BD%A6%E5%9E%8B%E5%8F%97%E6%8D%9F%23) `112.8K 🔥` `NEW`
1. [时代少年团愚人节互发](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%84%9A%E4%BA%BA%E8%8A%82%E4%BA%92%E5%8F%91%23) `99.9K 🔥` `NEW`
1. [严浩翔发的是刘耀文](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%8F%91%E7%9A%84%E6%98%AF%E5%88%98%E8%80%80%E6%96%87%23) `99.3K 🔥` `NEW`
1. [胡先煦顶级的愚人节愚人手法](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E9%A1%B6%E7%BA%A7%E7%9A%84%E6%84%9A%E4%BA%BA%E8%8A%82%E6%84%9A%E4%BA%BA%E6%89%8B%E6%B3%95%23) `97.8K 🔥` `NEW`
1. [学数学和学历史的都沉默了](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E6%95%B0%E5%AD%A6%E5%92%8C%E5%AD%A6%E5%8E%86%E5%8F%B2%E7%9A%84%E9%83%BD%E6%B2%89%E9%BB%98%E4%BA%86%23) `97.5K 🔥` `NEW`
1. [孙俪QQ王者归来](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AAQQ%E7%8E%8B%E8%80%85%E5%BD%92%E6%9D%A5%23) `97.2K 🔥` `NEW`
1. [丁程鑫发了严浩翔 (Ding Chengxin sent Yan Haoxiang)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8F%91%E4%BA%86%E4%B8%A5%E6%B5%A9%E7%BF%94%23) `96.0K 🔥` `NEW`
1. [宋亚轩宋小花](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%AE%8B%E5%B0%8F%E8%8A%B1%23) `93.5K 🔥` `NEW`
1. [网易云封号](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%98%93%E4%BA%91%E5%B0%81%E5%8F%B7%23) `93.0K 🔥` `NEW`
1. [白日提灯直播](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%9B%B4%E6%92%AD%23) `90.2K 🔥` `NEW`
1. [鞠婧祎首位演员热度值定档破9800万](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E9%A6%96%E4%BD%8D%E6%BC%94%E5%91%98%E7%83%AD%E5%BA%A6%E5%80%BC%E5%AE%9A%E6%A1%A3%E7%A0%B49800%E4%B8%87%23) `87.6K 🔥` `NEW`
1. [马嘉祺教邵兵玩手机](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E6%95%99%E9%82%B5%E5%85%B5%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `86.6K 🔥` `NEW`
1. [肇事司机拖行女老师致死想拿70万私了](https://s.weibo.com/weibo?q=%23%E8%82%87%E4%BA%8B%E5%8F%B8%E6%9C%BA%E6%8B%96%E8%A1%8C%E5%A5%B3%E8%80%81%E5%B8%88%E8%87%B4%E6%AD%BB%E6%83%B3%E6%8B%BF70%E4%B8%87%E7%A7%81%E4%BA%86%23) `86.6K 🔥` `NEW`
1. [小区手机信号弱到爆求救电话打不出](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA%E6%89%8B%E6%9C%BA%E4%BF%A1%E5%8F%B7%E5%BC%B1%E5%88%B0%E7%88%86%E6%B1%82%E6%95%91%E7%94%B5%E8%AF%9D%E6%89%93%E4%B8%8D%E5%87%BA%23) `86.6K 🔥` `NEW`
1. [月鳞绮纪热度](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E7%83%AD%E5%BA%A6%23) `86.6K 🔥` `NEW`
1. [女教师被拖行5.9公里致死已两度尸检](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E8%A2%AB%E6%8B%96%E8%A1%8C5.9%E5%85%AC%E9%87%8C%E8%87%B4%E6%AD%BB%E5%B7%B2%E4%B8%A4%E5%BA%A6%E5%B0%B8%E6%A3%80%23) `85.9K 🔥` `NEW`
1. [鹿晗说我是邓超我同意五哈不播 (Luhan said I am Deng Chao and I agree that Wuha will not be broadcast)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%AF%B4%E6%88%91%E6%98%AF%E9%82%93%E8%B6%85%E6%88%91%E5%90%8C%E6%84%8F%E4%BA%94%E5%93%88%E4%B8%8D%E6%92%AD%23) `80.3K 🔥` `NEW`
1. [张凌赫丁程鑫你俩有点暧昧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%81%E7%A8%8B%E9%91%AB%E4%BD%A0%E4%BF%A9%E6%9C%89%E7%82%B9%E6%9A%A7%E6%98%A7%23) `79.7K 🔥` `NEW`
1. [理想汽车3月交付突破4.1万辆](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E6%B1%BD%E8%BD%A63%E6%9C%88%E4%BA%A4%E4%BB%98%E7%AA%81%E7%A0%B44.1%E4%B8%87%E8%BE%86%23) `76.5K 🔥` `NEW`
1. [美国前国土安全部长丈夫是秘密异装癖](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%89%8D%E5%9B%BD%E5%9C%9F%E5%AE%89%E5%85%A8%E9%83%A8%E9%95%BF%E4%B8%88%E5%A4%AB%E6%98%AF%E7%A7%98%E5%AF%86%E5%BC%82%E8%A3%85%E7%99%96%23) `74.1K 🔥` `NEW`
1. [成都一凶宅第三次拍卖起拍价16.6万](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E4%B8%80%E5%87%B6%E5%AE%85%E7%AC%AC%E4%B8%89%E6%AC%A1%E6%8B%8D%E5%8D%96%E8%B5%B7%E6%8B%8D%E4%BB%B716.6%E4%B8%87%23) `1.1M 🔥` `+1051%`
1. [一中国人涉及超7亿房产在英被冻结](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B6%89%E5%8F%8A%E8%B6%857%E4%BA%BF%E6%88%BF%E4%BA%A7%E5%9C%A8%E8%8B%B1%E8%A2%AB%E5%86%BB%E7%BB%93%23) `241.9K 🔥` `+103%`
1. [婚前立遗嘱小伙称房子掏空父母积蓄](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%89%8D%E7%AB%8B%E9%81%97%E5%98%B1%E5%B0%8F%E4%BC%99%E7%A7%B0%E6%88%BF%E5%AD%90%E6%8E%8F%E7%A9%BA%E7%88%B6%E6%AF%8D%E7%A7%AF%E8%93%84%23) `126.1K 🔥` `+32%`
1. [优思益 (Yousiyi)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `178.6K 🔥`
1. [芭乐 早知道烂地里了](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E4%B9%90%20%E6%97%A9%E7%9F%A5%E9%81%93%E7%83%82%E5%9C%B0%E9%87%8C%E4%BA%86%23) `137.0K 🔥`
1. [张雪机车爆单了 (Zhang Xue’s motorcycle sales are booming)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%88%86%E5%8D%95%E4%BA%86%23) `133.9K 🔥`
1. [张雪身价上亿还在用两千多块钱坏手机](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%BA%AB%E4%BB%B7%E4%B8%8A%E4%BA%BF%E8%BF%98%E5%9C%A8%E7%94%A8%E4%B8%A4%E5%8D%83%E5%A4%9A%E5%9D%97%E9%92%B1%E5%9D%8F%E6%89%8B%E6%9C%BA%23) `127.5K 🔥`
1. [迪丽热巴这真是妈咪级别的](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%99%E7%9C%9F%E6%98%AF%E5%A6%88%E5%92%AA%E7%BA%A7%E5%88%AB%E7%9A%84%23) `104.4K 🔥`
1. [法国豪门弃子34岁终夺冠致谢张雪 (The abandoned son of a French giant finally won the championship at the age of 34 and thanked Zhang Xue)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%B1%AA%E9%97%A8%E5%BC%83%E5%AD%9034%E5%B2%81%E7%BB%88%E5%A4%BA%E5%86%A0%E8%87%B4%E8%B0%A2%E5%BC%A0%E9%9B%AA%23) `98.7K 🔥`
1. [三部门对优思益展开调查](https://s.weibo.com/weibo?q=%23%E4%B8%89%E9%83%A8%E9%97%A8%E5%AF%B9%E4%BC%98%E6%80%9D%E7%9B%8A%E5%B1%95%E5%BC%80%E8%B0%83%E6%9F%A5%23) `93.1K 🔥`
1. [成都一凶宅96.6万成交后买家悔拍](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E4%B8%80%E5%87%B6%E5%AE%8596.6%E4%B8%87%E6%88%90%E4%BA%A4%E5%90%8E%E4%B9%B0%E5%AE%B6%E6%82%94%E6%8B%8D%23) `92.4K 🔥`
1. [伊朗不同意停火强调要彻底结束战争 (Iran does not agree to ceasefire and emphasizes that it wants to completely end the war)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%8D%E5%90%8C%E6%84%8F%E5%81%9C%E7%81%AB%E5%BC%BA%E8%B0%83%E8%A6%81%E5%BD%BB%E5%BA%95%E7%BB%93%E6%9D%9F%E6%88%98%E4%BA%89%23) `91.7K 🔥`
1. [张雪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `83.7K 🔥`
1. [你的公积金悄悄变多了 (Your provident fund has quietly increased)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E5%85%AC%E7%A7%AF%E9%87%91%E6%82%84%E6%82%84%E5%8F%98%E5%A4%9A%E4%BA%86%23) `819.0K 🔥` `-27%`
1. [付费的没学会免费的学会了](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%B4%B9%E7%9A%84%E6%B2%A1%E5%AD%A6%E4%BC%9A%E5%85%8D%E8%B4%B9%E7%9A%84%E5%AD%A6%E4%BC%9A%E4%BA%86%23) `148.7K 🔥` `-26%`
1. [日本彻底撕下伪装](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BD%BB%E5%BA%95%E6%92%95%E4%B8%8B%E4%BC%AA%E8%A3%85%23) `141.8K 🔥` `-83%`
1. [孙俪回应蒋欣 (Sun Li responded to Jiang Xin)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%9B%9E%E5%BA%94%E8%92%8B%E6%AC%A3%23) `134.8K 🔥` `-78%`
1. [迪丽热巴问白日提灯固屏去哪了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%97%AE%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E5%9B%BA%E5%B1%8F%E5%8E%BB%E5%93%AA%E4%BA%86%23) `131.5K 🔥` `-38%`
1. [29岁小伙赶在结婚前立遗嘱](https://s.weibo.com/weibo?q=%2329%E5%B2%81%E5%B0%8F%E4%BC%99%E8%B5%B6%E5%9C%A8%E7%BB%93%E5%A9%9A%E5%89%8D%E7%AB%8B%E9%81%97%E5%98%B1%23) `126.9K 🔥` `-30%`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `100.2K 🔥` `-25%`
1. [以后再也不埋怨清明节下雨了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E5%86%8D%E4%B9%9F%E4%B8%8D%E5%9F%8B%E6%80%A8%E6%B8%85%E6%98%8E%E8%8A%82%E4%B8%8B%E9%9B%A8%E4%BA%86%23) `94.5K 🔥` `-24%`
1. [江宏杰祝福福原爱再婚怀孕 (Jiang Hongjie wishes Fukuhara Ai remarriage and pregnancy)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%AE%8F%E6%9D%B0%E7%A5%9D%E7%A6%8F%E7%A6%8F%E5%8E%9F%E7%88%B1%E5%86%8D%E5%A9%9A%E6%80%80%E5%AD%95%23) `92.1K 🔥` `-29%`
1. [曾沛慈 够爱](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E5%A4%9F%E7%88%B1%23) `91.8K 🔥` `-27%`
1. [央视曝光优思益多平台下架](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E4%BC%98%E6%80%9D%E7%9B%8A%E5%A4%9A%E5%B9%B3%E5%8F%B0%E4%B8%8B%E6%9E%B6%23) `77.6K 🔥` `-43%`
1. [李维嘉不知道遗产传给谁 (Li Weijia doesn’t know who the inheritance will be passed on to)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BB%B4%E5%98%89%E4%B8%8D%E7%9F%A5%E9%81%93%E9%81%97%E4%BA%A7%E4%BC%A0%E7%BB%99%E8%B0%81%23) `74.7K 🔥` `-40%`
1. [下次租房我就这样问](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E6%AC%A1%E7%A7%9F%E6%88%BF%E6%88%91%E5%B0%B1%E8%BF%99%E6%A0%B7%E9%97%AE%23) `73.3K 🔥` `-26%`

Updated at 2026-04-01 18:13:58

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
