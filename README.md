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

1. [遇见不一样的江苏 (Meet a different Jiangsu)](https://s.weibo.com/weibo?q=%23%E9%81%87%E8%A7%81%E4%B8%8D%E4%B8%80%E6%A0%B7%E7%9A%84%E6%B1%9F%E8%8B%8F%23) `999.1K 🔥` `NEW`
1. [红旗金葵花鼎礼东方高定艺术展](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%97%97%E9%87%91%E8%91%B5%E8%8A%B1%E9%BC%8E%E7%A4%BC%E4%B8%9C%E6%96%B9%E9%AB%98%E5%AE%9A%E8%89%BA%E6%9C%AF%E5%B1%95%23) `958.2K 🔥` `NEW`
1. [发现变胖真的太廉价了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%8F%98%E8%83%96%E7%9C%9F%E7%9A%84%E5%A4%AA%E5%BB%89%E4%BB%B7%E4%BA%86%23) `889.8K 🔥` `NEW`
1. [华晨宇 抚仙湖](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%20%E6%8A%9A%E4%BB%99%E6%B9%96%23) `860.1K 🔥` `NEW`
1. [7岁男童仅18斤被当脑瘫治7年](https://s.weibo.com/weibo?q=%237%E5%B2%81%E7%94%B7%E7%AB%A5%E4%BB%8518%E6%96%A4%E8%A2%AB%E5%BD%93%E8%84%91%E7%98%AB%E6%B2%BB7%E5%B9%B4%23) `357.7K 🔥` `NEW`
1. [ksg剧透](https://s.weibo.com/weibo?q=%23ksg%E5%89%A7%E9%80%8F%23) `357.2K 🔥` `NEW`
1. [高铁站对站台吸烟没有强制处罚权](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E7%AB%99%E5%AF%B9%E7%AB%99%E5%8F%B0%E5%90%B8%E7%83%9F%E6%B2%A1%E6%9C%89%E5%BC%BA%E5%88%B6%E5%A4%84%E7%BD%9A%E6%9D%83%23) `357.1K 🔥` `NEW`
1. [男子被扣黄金30年申请国赔被驳回](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E6%89%A3%E9%BB%84%E9%87%9130%E5%B9%B4%E7%94%B3%E8%AF%B7%E5%9B%BD%E8%B5%94%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `356.8K 🔥` `NEW`
1. [鹿晗 爷们儿要脸](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E7%88%B7%E4%BB%AC%E5%84%BF%E8%A6%81%E8%84%B8%23) `356.3K 🔥` `NEW`
1. [肯德基玩具到底谁抢到了啊](https://s.weibo.com/weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%E7%8E%A9%E5%85%B7%E5%88%B0%E5%BA%95%E8%B0%81%E6%8A%A2%E5%88%B0%E4%BA%86%E5%95%8A%23) `356.0K 🔥` `NEW`
1. [多地禁止公共场所吸烟 (Many places ban smoking in public places)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E7%A6%81%E6%AD%A2%E5%85%AC%E5%85%B1%E5%9C%BA%E6%89%80%E5%90%B8%E7%83%9F%23) `355.8K 🔥` `NEW`
1. [多个国家抛售黄金](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%B8%AA%E5%9B%BD%E5%AE%B6%E6%8A%9B%E5%94%AE%E9%BB%84%E9%87%91%23) `311.1K 🔥` `NEW`
1. [TXT观看苏新皓翻跳GGUM](https://s.weibo.com/weibo?q=%23TXT%E8%A7%82%E7%9C%8B%E8%8B%8F%E6%96%B0%E7%9A%93%E7%BF%BB%E8%B7%B3GGUM%23) `301.0K 🔥` `NEW`
1. [以色列引进印度移民](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%BC%95%E8%BF%9B%E5%8D%B0%E5%BA%A6%E7%A7%BB%E6%B0%91%23) `276.8K 🔥` `NEW`
1. [路人无权强行阻止他人公共场所吸烟](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E4%BA%BA%E6%97%A0%E6%9D%83%E5%BC%BA%E8%A1%8C%E9%98%BB%E6%AD%A2%E4%BB%96%E4%BA%BA%E5%85%AC%E5%85%B1%E5%9C%BA%E6%89%80%E5%90%B8%E7%83%9F%23) `276.5K 🔥` `NEW`
1. [警方回应女子公交站阻止男子抽烟引冲突](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E5%85%AC%E4%BA%A4%E7%AB%99%E9%98%BB%E6%AD%A2%E7%94%B7%E5%AD%90%E6%8A%BD%E7%83%9F%E5%BC%95%E5%86%B2%E7%AA%81%23) `276.2K 🔥` `NEW`
1. [心愿便利贴不养闲人](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%E4%B8%8D%E5%85%BB%E9%97%B2%E4%BA%BA%23) `276.0K 🔥` `NEW`
1. [商家玩梗百岁老人带父母用餐免单](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%AE%B6%E7%8E%A9%E6%A2%97%E7%99%BE%E5%B2%81%E8%80%81%E4%BA%BA%E5%B8%A6%E7%88%B6%E6%AF%8D%E7%94%A8%E9%A4%90%E5%85%8D%E5%8D%95%23) `275.8K 🔥` `NEW`
1. [iPhone18ProMax厚度近14mm](https://s.weibo.com/weibo?q=%23iPhone18ProMax%E5%8E%9A%E5%BA%A6%E8%BF%9114mm%23) `275.5K 🔥` `NEW`
1. [鹿晗崩溃先找邓超](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%B4%A9%E6%BA%83%E5%85%88%E6%89%BE%E9%82%93%E8%B6%85%23) `275.5K 🔥` `NEW`
1. [派克特没有道歉 (Packett didn't apologize)](https://s.weibo.com/weibo?q=%23%E6%B4%BE%E5%85%8B%E7%89%B9%E6%B2%A1%E6%9C%89%E9%81%93%E6%AD%89%23) `169.8K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `157.7K 🔥` `NEW`
1. [东方甄选感谢明明天权](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%84%9F%E8%B0%A2%E6%98%8E%E6%98%8E%E5%A4%A9%E6%9D%83%23) `154.0K 🔥` `NEW`
1. [北京车展夯爆的MPV你问道了吗 (Did you ask about the popular MPV at the Beijing Auto Show?)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E8%BD%A6%E5%B1%95%E5%A4%AF%E7%88%86%E7%9A%84MPV%E4%BD%A0%E9%97%AE%E9%81%93%E4%BA%86%E5%90%97%23) `771.7K 🔥` `+183%`
1. [KSG对战TTG](https://s.weibo.com/weibo?q=%23KSG%E5%AF%B9%E6%88%98TTG%23) `756.1K 🔥` `+153%`
1. [网友在daiso买了个小狗不会用的东西](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%9C%A8daiso%E4%B9%B0%E4%BA%86%E4%B8%AA%E5%B0%8F%E7%8B%97%E4%B8%8D%E4%BC%9A%E7%94%A8%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `423.2K 🔥` `+40%`
1. [翁虹回应女儿被称最美星二代](https://s.weibo.com/weibo?q=%23%E7%BF%81%E8%99%B9%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%84%BF%E8%A2%AB%E7%A7%B0%E6%9C%80%E7%BE%8E%E6%98%9F%E4%BA%8C%E4%BB%A3%23) `357.4K 🔥` `+50%`
1. [三佛塔电诈园区航拍曝光](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BD%9B%E5%A1%94%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E8%88%AA%E6%8B%8D%E6%9B%9D%E5%85%89%23) `354.6K 🔥` `+51%`
1. [成都双流一居民区火灾致5死2伤 (Fire kills 5 and injures 2 in residential area of ​​Shuangliu, Chengdu)](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E5%8F%8C%E6%B5%81%E4%B8%80%E5%B1%85%E6%B0%91%E5%8C%BA%E7%81%AB%E7%81%BE%E8%87%B45%E6%AD%BB2%E4%BC%A4%23) `353.7K 🔥` `+42%`
1. [韩国新恋综太炸裂了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%96%B0%E6%81%8B%E7%BB%BC%E5%A4%AA%E7%82%B8%E8%A3%82%E4%BA%86%23) `1.1M 🔥`
1. [詹姆斯三分 (James three-pointer)](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E4%B8%89%E5%88%86%23) `1.1M 🔥`
1. [第一次对AI感到恐惧](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9AI%E6%84%9F%E5%88%B0%E6%81%90%E6%83%A7%23) `932.1K 🔥`
1. [男孩咽喉竟有双胞胎兄弟残留](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E5%92%BD%E5%96%89%E7%AB%9F%E6%9C%89%E5%8F%8C%E8%83%9E%E8%83%8E%E5%85%84%E5%BC%9F%E6%AE%8B%E7%95%99%23) `355.4K 🔥`
1. [大连8岁男孩疑发现金矿后续 (Dalian 8-year-old boy suspected of discovering gold mine follow-up)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%BF%9E8%E5%B2%81%E7%94%B7%E5%AD%A9%E7%96%91%E5%8F%91%E7%8E%B0%E9%87%91%E7%9F%BF%E5%90%8E%E7%BB%AD%23) `354.4K 🔥`
1. [曝穆祉丞确认将进组十日终焉](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%A9%86%E7%A5%89%E4%B8%9E%E7%A1%AE%E8%AE%A4%E5%B0%86%E8%BF%9B%E7%BB%84%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `345.8K 🔥`
1. [迪丽热巴腿部肌肉线条](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%85%BF%E9%83%A8%E8%82%8C%E8%82%89%E7%BA%BF%E6%9D%A1%23) `276.8K 🔥`
1. [余茵拍上部戏体重才60多斤](https://s.weibo.com/weibo?q=%23%E4%BD%99%E8%8C%B5%E6%8B%8D%E4%B8%8A%E9%83%A8%E6%88%8F%E4%BD%93%E9%87%8D%E6%89%8D60%E5%A4%9A%E6%96%A4%23) `275.7K 🔥`
1. [孙丞潇 人永远不知道谁会旺你](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%B8%9E%E6%BD%87%20%E4%BA%BA%E6%B0%B8%E8%BF%9C%E4%B8%8D%E7%9F%A5%E9%81%93%E8%B0%81%E4%BC%9A%E6%97%BA%E4%BD%A0%23) `260.3K 🔥`
1. [何宣林道歉 (He Xuanlin apologizes)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E9%81%93%E6%AD%89%23) `676.6K 🔥` `-38%`
1. [恋与深空起诉派克特胜诉](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E8%B5%B7%E8%AF%89%E6%B4%BE%E5%85%8B%E7%89%B9%E8%83%9C%E8%AF%89%23) `358.0K 🔥` `-28%`
1. [孟子义李昀锐下定决心拆cp的原因](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%8B%E5%AE%9A%E5%86%B3%E5%BF%83%E6%8B%86cp%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `357.9K 🔥` `-25%`
1. [霍思燕的蒙古獒又夺冠了](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E6%80%9D%E7%87%95%E7%9A%84%E8%92%99%E5%8F%A4%E7%8D%92%E5%8F%88%E5%A4%BA%E5%86%A0%E4%BA%86%23) `357.8K 🔥` `-25%`
1. [陶昕然骄傲拒撕节目组](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E9%AA%84%E5%82%B2%E6%8B%92%E6%92%95%E8%8A%82%E7%9B%AE%E7%BB%84%23) `357.6K 🔥` `-34%`
1. [金价跌至近期新低](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E8%87%B3%E8%BF%91%E6%9C%9F%E6%96%B0%E4%BD%8E%23) `357.2K 🔥` `-25%`
1. [东方甄选 明明天权离职 (Oriental Selection Ming Mingquan resigned)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%20%E6%98%8E%E6%98%8E%E5%A4%A9%E6%9D%83%E7%A6%BB%E8%81%8C%23) `356.9K 🔥` `-25%`
1. [妈妈怀疑瑶一瑶有多动症 (Mother suspects Yao Yiyao has ADHD)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%80%80%E7%96%91%E7%91%B6%E4%B8%80%E7%91%B6%E6%9C%89%E5%A4%9A%E5%8A%A8%E7%97%87%23) `356.7K 🔥` `-23%`
1. [唐艺昕离开李小冉后成了李小冉](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E7%A6%BB%E5%BC%80%E6%9D%8E%E5%B0%8F%E5%86%89%E5%90%8E%E6%88%90%E4%BA%86%E6%9D%8E%E5%B0%8F%E5%86%89%23) `356.5K 🔥` `-25%`
1. [第一次见外国人误闯天家](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%A4%96%E5%9B%BD%E4%BA%BA%E8%AF%AF%E9%97%AF%E5%A4%A9%E5%AE%B6%23) `356.4K 🔥` `-38%`
1. [she合体爬山了 (She climbed the mountain together)](https://s.weibo.com/weibo?q=%23she%E5%90%88%E4%BD%93%E7%88%AC%E5%B1%B1%E4%BA%86%23) `353.7K 🔥` `-26%`
1. [唐艺昕回应重新分词](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%9B%9E%E5%BA%94%E9%87%8D%E6%96%B0%E5%88%86%E8%AF%8D%23) `275.8K 🔥` `-42%`
1. [老人被83岁男室友打到大小便失禁](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E8%A2%AB83%E5%B2%81%E7%94%B7%E5%AE%A4%E5%8F%8B%E6%89%93%E5%88%B0%E5%A4%A7%E5%B0%8F%E4%BE%BF%E5%A4%B1%E7%A6%81%23) `170.4K 🔥` `-56%`
1. [孔刘金高银李栋旭聚餐](https://s.weibo.com/weibo?q=%23%E5%AD%94%E5%88%98%E9%87%91%E9%AB%98%E9%93%B6%E6%9D%8E%E6%A0%8B%E6%97%AD%E8%81%9A%E9%A4%90%23) `167.7K 🔥` `-29%`

Updated at 2026-04-25 14:53:25

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
