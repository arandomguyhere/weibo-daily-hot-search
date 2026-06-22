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

1. [姆巴佩左脚世界波 (Mbappe's left foot waves the world)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%B7%A6%E8%84%9A%E4%B8%96%E7%95%8C%E6%B3%A2%23) `290.5K 🔥` `NEW`
1. [法国vs伊拉克](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E4%BC%8A%E6%8B%89%E5%85%8B%23) `240.0K 🔥` `NEW`
1. [律师谈李金铭十年前农村综艺事件](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%B0%88%E6%9D%8E%E9%87%91%E9%93%AD%E5%8D%81%E5%B9%B4%E5%89%8D%E5%86%9C%E6%9D%91%E7%BB%BC%E8%89%BA%E4%BA%8B%E4%BB%B6%23) `45.9K 🔥` `NEW`
1. [物理AI第一股上市首日高开302%](https://s.weibo.com/weibo?q=%23%E7%89%A9%E7%90%86AI%E7%AC%AC%E4%B8%80%E8%82%A1%E4%B8%8A%E5%B8%82%E9%A6%96%E6%97%A5%E9%AB%98%E5%BC%80302%25%23) `43.5K 🔥` `NEW`
1. [双胞胎是不是骗过了神明的人](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%83%9E%E8%83%8E%E6%98%AF%E4%B8%8D%E6%98%AF%E9%AA%97%E8%BF%87%E4%BA%86%E7%A5%9E%E6%98%8E%E7%9A%84%E4%BA%BA%23) `41.8K 🔥` `NEW`
1. [儿子称已放弃遗产拒还房贷获法院支持](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E7%A7%B0%E5%B7%B2%E6%94%BE%E5%BC%83%E9%81%97%E4%BA%A7%E6%8B%92%E8%BF%98%E6%88%BF%E8%B4%B7%E8%8E%B7%E6%B3%95%E9%99%A2%E6%94%AF%E6%8C%81%23) `37.3K 🔥` `NEW`
1. [官方通报基层教师周末参与巡查](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%9F%BA%E5%B1%82%E6%95%99%E5%B8%88%E5%91%A8%E6%9C%AB%E5%8F%82%E4%B8%8E%E5%B7%A1%E6%9F%A5%23) `34.3K 🔥` `NEW`
1. [姆巴佩法国队百场里程碑](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%B3%95%E5%9B%BD%E9%98%9F%E7%99%BE%E5%9C%BA%E9%87%8C%E7%A8%8B%E7%A2%91%23) `33.4K 🔥` `NEW`
1. [女子把2米试衣镜当门拽稀碎](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8A%8A2%E7%B1%B3%E8%AF%95%E8%A1%A3%E9%95%9C%E5%BD%93%E9%97%A8%E6%8B%BD%E7%A8%80%E7%A2%8E%23) `33.3K 🔥` `NEW`
1. [端午假期国内出游1.24亿人次](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E5%8D%88%E5%81%87%E6%9C%9F%E5%9B%BD%E5%86%85%E5%87%BA%E6%B8%B81.24%E4%BA%BF%E4%BA%BA%E6%AC%A1%23) `248.7K 🔥` `+35%`
1. [李金铭农村综艺那家人已败诉 (Li Jinming’s rural variety show’s family has lost the lawsuit)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%86%9C%E6%9D%91%E7%BB%BC%E8%89%BA%E9%82%A3%E5%AE%B6%E4%BA%BA%E5%B7%B2%E8%B4%A5%E8%AF%89%23) `246.0K 🔥` `+40%`
1. [逐玉导演 战争戏不需要逻辑 (Director Zhuyu: War scenes don’t require logic)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%AF%BC%E6%BC%94%20%E6%88%98%E4%BA%89%E6%88%8F%E4%B8%8D%E9%9C%80%E8%A6%81%E9%80%BB%E8%BE%91%23) `115.6K 🔥`
1. [女子暴雨躲文旅局门口遭保安驱赶 (Woman hid in front of Cultural Tourism Bureau during heavy rain but was chased away by security guards)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9A%B4%E9%9B%A8%E8%BA%B2%E6%96%87%E6%97%85%E5%B1%80%E9%97%A8%E5%8F%A3%E9%81%AD%E4%BF%9D%E5%AE%89%E9%A9%B1%E8%B5%B6%23) `67.0K 🔥`
1. [周冬雨说导演老说词不用背](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%E8%AF%B4%E5%AF%BC%E6%BC%94%E8%80%81%E8%AF%B4%E8%AF%8D%E4%B8%8D%E7%94%A8%E8%83%8C%23) `62.2K 🔥`
1. [白玉兰 (magnolia)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `60.0K 🔥`
1. [广德车祸司机被刑拘](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%BE%B7%E8%BD%A6%E7%A5%B8%E5%8F%B8%E6%9C%BA%E8%A2%AB%E5%88%91%E6%8B%98%23) `53.9K 🔥`
1. [孙怡到底买了多少顶老孙帽](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%88%B0%E5%BA%95%E4%B9%B0%E4%BA%86%E5%A4%9A%E5%B0%91%E9%A1%B6%E8%80%81%E5%AD%99%E5%B8%BD%23) `49.5K 🔥`
1. [江阴文旅局回应市民躲雨被驱赶](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E9%98%B4%E6%96%87%E6%97%85%E5%B1%80%E5%9B%9E%E5%BA%94%E5%B8%82%E6%B0%91%E8%BA%B2%E9%9B%A8%E8%A2%AB%E9%A9%B1%E8%B5%B6%23) `45.2K 🔥`
1. [学霸真的是一种很神奇的生物](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E9%9C%B8%E7%9C%9F%E7%9A%84%E6%98%AF%E4%B8%80%E7%A7%8D%E5%BE%88%E7%A5%9E%E5%A5%87%E7%9A%84%E7%94%9F%E7%89%A9%23) `41.8K 🔥`
1. [阿根廷2比0奥地利 (Argentina 2-0 Austria)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B72%E6%AF%940%E5%A5%A5%E5%9C%B0%E5%88%A9%23) `427.5K 🔥` `-58%`
1. [大马丁神扑救](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%A9%AC%E4%B8%81%E7%A5%9E%E6%89%91%E6%95%91%23) `120.3K 🔥` `-23%`
1. [医生我有点不舒服我要出院](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%88%91%E6%9C%89%E7%82%B9%E4%B8%8D%E8%88%92%E6%9C%8D%E6%88%91%E8%A6%81%E5%87%BA%E9%99%A2%23) `112.0K 🔥` `-30%`
1. [阿根廷失点](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%A4%B1%E7%82%B9%23) `74.6K 🔥` `-52%`
1. [马宁我想你了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E6%88%91%E6%83%B3%E4%BD%A0%E4%BA%86%23) `69.2K 🔥` `-54%`
1. [恋与深空一直在说对不起 (Love and Deep Sky keep saying sorry)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E4%B8%80%E7%9B%B4%E5%9C%A8%E8%AF%B4%E5%AF%B9%E4%B8%8D%E8%B5%B7%23) `67.8K 🔥` `-71%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `64.6K 🔥` `-56%`
1. [阿根廷vs奥地利](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7vs%E5%A5%A5%E5%9C%B0%E5%88%A9%23) `62.2K 🔥` `-61%`
1. [阿根廷提前一轮晋级32强](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%8F%90%E5%89%8D%E4%B8%80%E8%BD%AE%E6%99%8B%E7%BA%A732%E5%BC%BA%23) `61.6K 🔥` `-60%`
1. [敖尹 丑 (Ao Yin ugly)](https://s.weibo.com/weibo?q=%23%E6%95%96%E5%B0%B9%20%E4%B8%91%23) `45.7K 🔥` `-32%`
1. [恋与深空回应](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9E%E5%BA%94%23) `43.4K 🔥` `-46%`
1. [敖尹 敖隐](https://s.weibo.com/weibo?q=%23%E6%95%96%E5%B0%B9%20%E6%95%96%E9%9A%90%23) `42.3K 🔥` `-41%`
1. [29岁离世女主持确诊卵巢癌仅8个月 (The 29-year-old female host who passed away was diagnosed with ovarian cancer only 8 months ago)](https://s.weibo.com/weibo?q=%2329%E5%B2%81%E7%A6%BB%E4%B8%96%E5%A5%B3%E4%B8%BB%E6%8C%81%E7%A1%AE%E8%AF%8A%E5%8D%B5%E5%B7%A2%E7%99%8C%E4%BB%858%E4%B8%AA%E6%9C%88%23) `40.9K 🔥` `-22%`
1. [建议大家把消极口癖戒掉](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E6%8A%8A%E6%B6%88%E6%9E%81%E5%8F%A3%E7%99%96%E6%88%92%E6%8E%89%23) `39.5K 🔥` `-37%`
1. [凌肖 转正](https://s.weibo.com/weibo?q=%23%E5%87%8C%E8%82%96%20%E8%BD%AC%E6%AD%A3%23) `37.5K 🔥` `-52%`
1. [恋与深空敖尹公开](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%95%96%E5%B0%B9%E5%85%AC%E5%BC%80%23) `37.2K 🔥` `-41%`
1. [女生称试衣被拉开帘子裸露遭围观 (A girl said she was exposed while trying on clothes when the curtain was pulled open and she was watched by onlookers)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E7%A7%B0%E8%AF%95%E8%A1%A3%E8%A2%AB%E6%8B%89%E5%BC%80%E5%B8%98%E5%AD%90%E8%A3%B8%E9%9C%B2%E9%81%AD%E5%9B%B4%E8%A7%82%23) `36.3K 🔥` `-35%`
1. [曾沛慈黄灿灿友情](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E9%BB%84%E7%81%BF%E7%81%BF%E5%8F%8B%E6%83%85%23) `33.4K 🔥` `-52%`
1. [香港机场黄金劫案4人潜逃至内地 (Four people involved in the Hong Kong Airport gold robbery absconded to the mainland)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%9C%BA%E5%9C%BA%E9%BB%84%E9%87%91%E5%8A%AB%E6%A1%884%E4%BA%BA%E6%BD%9C%E9%80%83%E8%87%B3%E5%86%85%E5%9C%B0%23) `33.4K 🔥` `-36%`
1. [恋与深空是怎么做出来秦彻的](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%98%AF%E6%80%8E%E4%B9%88%E5%81%9A%E5%87%BA%E6%9D%A5%E7%A7%A6%E5%BD%BB%E7%9A%84%23) `33.3K 🔥` `-54%`
1. [推特崩了](https://s.weibo.com/weibo?q=%23%E6%8E%A8%E7%89%B9%E5%B4%A9%E4%BA%86%23) `33.3K 🔥` `-59%`
1. [广德公安通报交通事故](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%BE%B7%E5%85%AC%E5%AE%89%E9%80%9A%E6%8A%A5%E4%BA%A4%E9%80%9A%E4%BA%8B%E6%95%85%23) `33.3K 🔥` `-36%`
1. [轻断食一天喝了6斤牛奶](https://s.weibo.com/weibo?q=%23%E8%BD%BB%E6%96%AD%E9%A3%9F%E4%B8%80%E5%A4%A9%E5%96%9D%E4%BA%866%E6%96%A4%E7%89%9B%E5%A5%B6%23) `33.3K 🔥` `-36%`
1. [恋与深空五家最团结的一次](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E4%BA%94%E5%AE%B6%E6%9C%80%E5%9B%A2%E7%BB%93%E7%9A%84%E4%B8%80%E6%AC%A1%23) `33.3K 🔥` `-63%`
1. [叠纸审美 (Paper folding aesthetic)](https://s.weibo.com/weibo?q=%23%E5%8F%A0%E7%BA%B8%E5%AE%A1%E7%BE%8E%23) `33.3K 🔥` `-36%`
1. [恋与深空敖尹遭吐槽](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%95%96%E5%B0%B9%E9%81%AD%E5%90%90%E6%A7%BD%23) `33.3K 🔥` `-36%`
1. [恋与深空 王者荣耀](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%20%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `33.3K 🔥` `-36%`
1. [阿根廷半场1比0奥地利](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%8D%8A%E5%9C%BA1%E6%AF%940%E5%A5%A5%E5%9C%B0%E5%88%A9%23) `33.3K 🔥` `-41%`
1. [女子称44岁在阿里工作22年被裁](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B044%E5%B2%81%E5%9C%A8%E9%98%BF%E9%87%8C%E5%B7%A5%E4%BD%9C22%E5%B9%B4%E8%A2%AB%E8%A3%81%23) `33.3K 🔥` `-36%`
1. [橘子宾馆老板质问桔子酒店 (Orange Hotel owner questioned Orange Hotel)](https://s.weibo.com/weibo?q=%23%E6%A9%98%E5%AD%90%E5%AE%BE%E9%A6%86%E8%80%81%E6%9D%BF%E8%B4%A8%E9%97%AE%E6%A1%94%E5%AD%90%E9%85%92%E5%BA%97%23) `33.3K 🔥` `-36%`

Updated at 2026-06-23 05:48:55

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
