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

1. [AI写作年赚200万夫妻被封号 (Couple earns 2 million a year from AI writing but gets banned)](https://s.weibo.com/weibo?q=%23AI%E5%86%99%E4%BD%9C%E5%B9%B4%E8%B5%9A200%E4%B8%87%E5%A4%AB%E5%A6%BB%E8%A2%AB%E5%B0%81%E5%8F%B7%23) `1.1M 🔥` `NEW`
1. [十日终焉欢迎来到终焉之地](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E6%AC%A2%E8%BF%8E%E6%9D%A5%E5%88%B0%E7%BB%88%E7%84%89%E4%B9%8B%E5%9C%B0%23) `781.7K 🔥` `NEW`
1. [赏花经济开出四季春](https://s.weibo.com/weibo?q=%23%E8%B5%8F%E8%8A%B1%E7%BB%8F%E6%B5%8E%E5%BC%80%E5%87%BA%E5%9B%9B%E5%AD%A3%E6%98%A5%23) `629.4K 🔥` `NEW`
1. [孙颖莎同款OPPOFindX9sPro](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%90%8C%E6%AC%BEOPPOFindX9sPro%23) `616.5K 🔥` `NEW`
1. [马頔说李纯很假](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E8%AF%B4%E6%9D%8E%E7%BA%AF%E5%BE%88%E5%81%87%23) `573.3K 🔥` `NEW`
1. [院长猥亵女员工后称分寸感没把握好](https://s.weibo.com/weibo?q=%23%E9%99%A2%E9%95%BF%E7%8C%A5%E4%BA%B5%E5%A5%B3%E5%91%98%E5%B7%A5%E5%90%8E%E7%A7%B0%E5%88%86%E5%AF%B8%E6%84%9F%E6%B2%A1%E6%8A%8A%E6%8F%A1%E5%A5%BD%23) `331.5K 🔥` `NEW`
1. [不要可怜任何一只被栓起来的猫](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%8F%AF%E6%80%9C%E4%BB%BB%E4%BD%95%E4%B8%80%E5%8F%AA%E8%A2%AB%E6%A0%93%E8%B5%B7%E6%9D%A5%E7%9A%84%E7%8C%AB%23) `187.7K 🔥` `NEW`
1. [大疆pocket4新品盲拍](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86pocket4%E6%96%B0%E5%93%81%E7%9B%B2%E6%8B%8D%23) `158.0K 🔥` `NEW`
1. [黄景瑜工作室 只是朋友间正常聚会](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E5%8F%AA%E6%98%AF%E6%9C%8B%E5%8F%8B%E9%97%B4%E6%AD%A3%E5%B8%B8%E8%81%9A%E4%BC%9A%23) `157.5K 🔥` `NEW`
1. [黄子韬最新回应嘴唇发紫](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%9C%80%E6%96%B0%E5%9B%9E%E5%BA%94%E5%98%B4%E5%94%87%E5%8F%91%E7%B4%AB%23) `157.4K 🔥` `NEW`
1. [美国第一夫人声明 (Statement from the First Lady of the United States)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%AC%AC%E4%B8%80%E5%A4%AB%E4%BA%BA%E5%A3%B0%E6%98%8E%23) `156.7K 🔥` `NEW`
1. [刘琳琳回应长得像张凌赫](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%90%B3%E7%90%B3%E5%9B%9E%E5%BA%94%E9%95%BF%E5%BE%97%E5%83%8F%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `156.3K 🔥` `NEW`
1. [打击伊朗期间美军消耗约760万杯咖啡](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%E6%9C%9F%E9%97%B4%E7%BE%8E%E5%86%9B%E6%B6%88%E8%80%97%E7%BA%A6760%E4%B8%87%E6%9D%AF%E5%92%96%E5%95%A1%23) `156.0K 🔥` `NEW`
1. [逐玉庆功宴真要来了](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%BA%86%E5%8A%9F%E5%AE%B4%E7%9C%9F%E8%A6%81%E6%9D%A5%E4%BA%86%23) `154.3K 🔥` `NEW`
1. [把山搬进厂里是疯了还是清醒](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E5%B1%B1%E6%90%AC%E8%BF%9B%E5%8E%82%E9%87%8C%E6%98%AF%E7%96%AF%E4%BA%86%E8%BF%98%E6%98%AF%E6%B8%85%E9%86%92%23) `148.1K 🔥` `NEW`
1. [中信证券杀疯了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%A1%E8%AF%81%E5%88%B8%E6%9D%80%E7%96%AF%E4%BA%86%23) `132.8K 🔥` `NEW`
1. [王者荣耀世界上线](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E4%B8%96%E7%95%8C%E4%B8%8A%E7%BA%BF%23) `119.1K 🔥` `NEW`
1. [疑似李楷灿恋爱](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%9D%8E%E6%A5%B7%E7%81%BF%E6%81%8B%E7%88%B1%23) `119.0K 🔥` `NEW`
1. [郑钧送15岁儿子出国上学](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A7%E9%80%8115%E5%B2%81%E5%84%BF%E5%AD%90%E5%87%BA%E5%9B%BD%E4%B8%8A%E5%AD%A6%23) `117.5K 🔥` `NEW`
1. [保时捷车主当交警面威胁或被拘留](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7%E8%BD%A6%E4%B8%BB%E5%BD%93%E4%BA%A4%E8%AD%A6%E9%9D%A2%E5%A8%81%E8%83%81%E6%88%96%E8%A2%AB%E6%8B%98%E7%95%99%23) `115.5K 🔥` `NEW`
1. [夫妻7万买男婴为上户伪造弃婴 (Couple buys baby boy for RMB 70,000 to fake abandoned baby)](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB7%E4%B8%87%E4%B9%B0%E7%94%B7%E5%A9%B4%E4%B8%BA%E4%B8%8A%E6%88%B7%E4%BC%AA%E9%80%A0%E5%BC%83%E5%A9%B4%23) `113.4K 🔥` `NEW`
1. [浪姐](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `112.0K 🔥` `NEW`
1. [当你不小心坐了商场按摩椅](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E4%B8%8D%E5%B0%8F%E5%BF%83%E5%9D%90%E4%BA%86%E5%95%86%E5%9C%BA%E6%8C%89%E6%91%A9%E6%A4%85%23) `106.2K 🔥` `NEW`
1. [山西一49岁环保局长办公室内离世](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%B8%8049%E5%B2%81%E7%8E%AF%E4%BF%9D%E5%B1%80%E9%95%BF%E5%8A%9E%E5%85%AC%E5%AE%A4%E5%86%85%E7%A6%BB%E4%B8%96%23) `103.2K 🔥` `NEW`
1. [王承渲多次在社交平台发文想离开](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%89%BF%E6%B8%B2%E5%A4%9A%E6%AC%A1%E5%9C%A8%E7%A4%BE%E4%BA%A4%E5%B9%B3%E5%8F%B0%E5%8F%91%E6%96%87%E6%83%B3%E7%A6%BB%E5%BC%80%23) `102.5K 🔥` `NEW`
1. [已经到了高血糖的年龄了](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E5%88%B0%E4%BA%86%E9%AB%98%E8%A1%80%E7%B3%96%E7%9A%84%E5%B9%B4%E9%BE%84%E4%BA%86%23) `100.9K 🔥` `NEW`
1. [用人民币感受日本物价](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%BA%BA%E6%B0%91%E5%B8%81%E6%84%9F%E5%8F%97%E6%97%A5%E6%9C%AC%E7%89%A9%E4%BB%B7%23) `97.3K 🔥` `NEW`
1. [叶一茜说不如第一季就来浪姐](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E4%B8%80%E8%8C%9C%E8%AF%B4%E4%B8%8D%E5%A6%82%E7%AC%AC%E4%B8%80%E5%AD%A3%E5%B0%B1%E6%9D%A5%E6%B5%AA%E5%A7%90%23) `95.6K 🔥` `NEW`
1. [十日终焉官博隐藏了一条视频](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%AE%98%E5%8D%9A%E9%9A%90%E8%97%8F%E4%BA%86%E4%B8%80%E6%9D%A1%E8%A7%86%E9%A2%91%23) `88.3K 🔥` `NEW`
1. [当10后锐评90后](https://s.weibo.com/weibo?q=%23%E5%BD%9310%E5%90%8E%E9%94%90%E8%AF%8490%E5%90%8E%23) `88.0K 🔥` `NEW`
1. [美国在中东7天损失8架死神无人机 (The United States lost 8 Reaper drones in the Middle East in 7 days)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%9C%A8%E4%B8%AD%E4%B8%9C7%E5%A4%A9%E6%8D%9F%E5%A4%B18%E6%9E%B6%E6%AD%BB%E7%A5%9E%E6%97%A0%E4%BA%BA%E6%9C%BA%23) `84.9K 🔥` `NEW`
1. [解放军导弹解锁新视角](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E5%AF%BC%E5%BC%B9%E8%A7%A3%E9%94%81%E6%96%B0%E8%A7%86%E8%A7%92%23) `83.9K 🔥` `NEW`
1. [女子吐槽逛商场遇无隔断厕所](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%90%E6%A7%BD%E9%80%9B%E5%95%86%E5%9C%BA%E9%81%87%E6%97%A0%E9%9A%94%E6%96%AD%E5%8E%95%E6%89%80%23) `82.6K 🔥` `NEW`
1. [手指出现这个症状警惕心肺疾病](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%8C%87%E5%87%BA%E7%8E%B0%E8%BF%99%E4%B8%AA%E7%97%87%E7%8A%B6%E8%AD%A6%E6%83%95%E5%BF%83%E8%82%BA%E7%96%BE%E7%97%85%23) `81.8K 🔥` `NEW`
1. [张月凌晨下班看到粉丝哭了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%87%8C%E6%99%A8%E4%B8%8B%E7%8F%AD%E7%9C%8B%E5%88%B0%E7%B2%89%E4%B8%9D%E5%93%AD%E4%BA%86%23) `81.5K 🔥` `NEW`
1. [詹姆斯一打勇士就来劲](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E4%B8%80%E6%89%93%E5%8B%87%E5%A3%AB%E5%B0%B1%E6%9D%A5%E5%8A%B2%23) `81.5K 🔥` `NEW`
1. [华为Pura系列发布会定档](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPura%E7%B3%BB%E5%88%97%E5%8F%91%E5%B8%83%E4%BC%9A%E5%AE%9A%E6%A1%A3%23) `80.6K 🔥` `NEW`
1. [秦彻肆雨照夜](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%BD%BB%E8%82%86%E9%9B%A8%E7%85%A7%E5%A4%9C%23) `79.7K 🔥` `NEW`
1. [小狗一口就吃掉了整个春天](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E4%B8%80%E5%8F%A3%E5%B0%B1%E5%90%83%E6%8E%89%E4%BA%86%E6%95%B4%E4%B8%AA%E6%98%A5%E5%A4%A9%23) `75.4K 🔥` `NEW`
1. [StrayKids全员身高超过170](https://s.weibo.com/weibo?q=%23StrayKids%E5%85%A8%E5%91%98%E8%BA%AB%E9%AB%98%E8%B6%85%E8%BF%87170%23) `75.3K 🔥` `NEW`
1. [孙颖莎满满一裤兜 (Sun Yingsha's pockets are full)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%BB%A1%E6%BB%A1%E4%B8%80%E8%A3%A4%E5%85%9C%23) `72.2K 🔥` `NEW`
1. [黎真主党贴脸开打以军地面部队](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E7%9C%9F%E4%B8%BB%E5%85%9A%E8%B4%B4%E8%84%B8%E5%BC%80%E6%89%93%E4%BB%A5%E5%86%9B%E5%9C%B0%E9%9D%A2%E9%83%A8%E9%98%9F%23) `72.0K 🔥` `NEW`
1. [妈妈给我点了24600个赞](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%BB%99%E6%88%91%E7%82%B9%E4%BA%8624600%E4%B8%AA%E8%B5%9E%23) `71.8K 🔥` `NEW`
1. [小女孩被离异父母双双拒收后续](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A5%B3%E5%AD%A9%E8%A2%AB%E7%A6%BB%E5%BC%82%E7%88%B6%E6%AF%8D%E5%8F%8C%E5%8F%8C%E6%8B%92%E6%94%B6%E5%90%8E%E7%BB%AD%23) `189.9K 🔥` `+65%`
1. [霍尔木兹海峡完全关闭](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%AE%8C%E5%85%A8%E5%85%B3%E9%97%AD%23) `217.8K 🔥` `-38%`
1. [普京宣布停火32小时](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E5%AE%A3%E5%B8%83%E5%81%9C%E7%81%AB32%E5%B0%8F%E6%97%B6%23) `165.1K 🔥` `-79%`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `156.4K 🔥` `-23%`
1. [海湾国家慌了 (Gulf countries panic)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B9%BE%E5%9B%BD%E5%AE%B6%E6%85%8C%E4%BA%86%23) `98.1K 🔥` `-79%`
1. [逐玉没播前就定了将门独后副cp](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%B2%A1%E6%92%AD%E5%89%8D%E5%B0%B1%E5%AE%9A%E4%BA%86%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%89%AFcp%23) `82.4K 🔥` `-83%`
1. [女子晒手指被劝去医院果然查出问题](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%99%92%E6%89%8B%E6%8C%87%E8%A2%AB%E5%8A%9D%E5%8E%BB%E5%8C%BB%E9%99%A2%E6%9E%9C%E7%84%B6%E6%9F%A5%E5%87%BA%E9%97%AE%E9%A2%98%23) `77.8K 🔥` `-79%`
1. [日本自卫队420人登上菲律宾](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%87%AA%E5%8D%AB%E9%98%9F420%E4%BA%BA%E7%99%BB%E4%B8%8A%E8%8F%B2%E5%BE%8B%E5%AE%BE%23) `73.0K 🔥` `-34%`

Updated at 2026-04-10 12:16:50

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
