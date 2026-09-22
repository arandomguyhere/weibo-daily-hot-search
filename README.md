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

1. [美心月饼打六折卖](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%BF%83%E6%9C%88%E9%A5%BC%E6%89%93%E5%85%AD%E6%8A%98%E5%8D%96%23) `1.6M 🔥` `NEW`
1. [盛夏晴朗](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E5%A4%8F%E6%99%B4%E6%9C%97%23) `1.3M 🔥` `NEW`
1. [国家电网传来重磅突破](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E7%94%B5%E7%BD%91%E4%BC%A0%E6%9D%A5%E9%87%8D%E7%A3%85%E7%AA%81%E7%A0%B4%23) `613.5K 🔥` `NEW`
1. [代孕机构16万贩卖多余婴儿](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E5%AD%95%E6%9C%BA%E6%9E%8416%E4%B8%87%E8%B4%A9%E5%8D%96%E5%A4%9A%E4%BD%99%E5%A9%B4%E5%84%BF%23) `570.7K 🔥` `NEW`
1. [不二之臣致歉声明](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BA%8C%E4%B9%8B%E8%87%A3%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23) `391.3K 🔥` `NEW`
1. [刘雨昕帮谢金燕发声](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%A8%E6%98%95%E5%B8%AE%E8%B0%A2%E9%87%91%E7%87%95%E5%8F%91%E5%A3%B0%23) `302.9K 🔥` `NEW`
1. [张展硕回应反超绝杀日本队](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95%E5%9B%9E%E5%BA%94%E5%8F%8D%E8%B6%85%E7%BB%9D%E6%9D%80%E6%97%A5%E6%9C%AC%E9%98%9F%23) `290.8K 🔥` `NEW`
1. [雷军澄清早餐被骂装](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%BE%84%E6%B8%85%E6%97%A9%E9%A4%90%E8%A2%AB%E9%AA%82%E8%A3%85%23) `289.3K 🔥` `NEW`
1. [许嵩我们的感情没问题](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%E6%88%91%E4%BB%AC%E7%9A%84%E6%84%9F%E6%83%85%E6%B2%A1%E9%97%AE%E9%A2%98%23) `288.2K 🔥` `NEW`
1. [张百乔点赞被云离婚](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%99%BE%E4%B9%94%E7%82%B9%E8%B5%9E%E8%A2%AB%E4%BA%91%E7%A6%BB%E5%A9%9A%23) `287.2K 🔥` `NEW`
1. [炒菜锅洗拖把致50名幼儿集体呕吐](https://s.weibo.com/weibo?q=%23%E7%82%92%E8%8F%9C%E9%94%85%E6%B4%97%E6%8B%96%E6%8A%8A%E8%87%B450%E5%90%8D%E5%B9%BC%E5%84%BF%E9%9B%86%E4%BD%93%E5%91%95%E5%90%90%23) `286.2K 🔥` `NEW`
1. [日本老龄化体现在亚运会颁奖礼](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%80%81%E9%BE%84%E5%8C%96%E4%BD%93%E7%8E%B0%E5%9C%A8%E4%BA%9A%E8%BF%90%E4%BC%9A%E9%A2%81%E5%A5%96%E7%A4%BC%23) `284.8K 🔥` `NEW`
1. [不二之臣转发金允植](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BA%8C%E4%B9%8B%E8%87%A3%E8%BD%AC%E5%8F%91%E9%87%91%E5%85%81%E6%A4%8D%23) `283.2K 🔥` `NEW`
1. [中国女排vs日本女排决赛](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92vs%E6%97%A5%E6%9C%AC%E5%A5%B3%E6%8E%92%E5%86%B3%E8%B5%9B%23) `281.3K 🔥` `NEW`
1. [吕蕺儿不跟林大爷求救的原因](https://s.weibo.com/weibo?q=%23%E5%90%95%E8%95%BA%E5%84%BF%E4%B8%8D%E8%B7%9F%E6%9E%97%E5%A4%A7%E7%88%B7%E6%B1%82%E6%95%91%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `253.7K 🔥` `NEW`
1. [王俊凯跟王源说话语气都变温柔了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%B7%9F%E7%8E%8B%E6%BA%90%E8%AF%B4%E8%AF%9D%E8%AF%AD%E6%B0%94%E9%83%BD%E5%8F%98%E6%B8%A9%E6%9F%94%E4%BA%86%23) `235.6K 🔥` `NEW`
1. [Meta市值一夜暴增1.29万亿](https://s.weibo.com/weibo?q=%23Meta%E5%B8%82%E5%80%BC%E4%B8%80%E5%A4%9C%E6%9A%B4%E5%A2%9E1.29%E4%B8%87%E4%BA%BF%23) `220.8K 🔥` `NEW`
1. [iPhone18Pro吐槽](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%90%90%E6%A7%BD%23) `216.2K 🔥` `NEW`
1. [中国队亚运会今日看点](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%BB%8A%E6%97%A5%E7%9C%8B%E7%82%B9%23) `210.3K 🔥` `NEW`
1. [谢金燕回应没戴麦](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%87%91%E7%87%95%E5%9B%9E%E5%BA%94%E6%B2%A1%E6%88%B4%E9%BA%A6%23) `208.9K 🔥` `NEW`
1. [曝田曦薇严浩翔主演雪粒镇](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%94%B0%E6%9B%A6%E8%96%87%E4%B8%A5%E6%B5%A9%E7%BF%94%E4%B8%BB%E6%BC%94%E9%9B%AA%E7%B2%92%E9%95%87%23) `189.9K 🔥` `NEW`
1. [老人送医担架掉落头部着地后去世](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E9%80%81%E5%8C%BB%E6%8B%85%E6%9E%B6%E6%8E%89%E8%90%BD%E5%A4%B4%E9%83%A8%E7%9D%80%E5%9C%B0%E5%90%8E%E5%8E%BB%E4%B8%96%23) `166.5K 🔥` `NEW`
1. [麦当劳被曝提前点出餐](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3%E8%A2%AB%E6%9B%9D%E6%8F%90%E5%89%8D%E7%82%B9%E5%87%BA%E9%A4%90%23) `161.0K 🔥` `NEW`
1. [孟子义抓彩带给关晓彤](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%8A%93%E5%BD%A9%E5%B8%A6%E7%BB%99%E5%85%B3%E6%99%93%E5%BD%A4%23) `147.3K 🔥` `NEW`
1. [兰香也不喊林锦岐大爷了](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E4%B9%9F%E4%B8%8D%E5%96%8A%E6%9E%97%E9%94%A6%E5%B2%90%E5%A4%A7%E7%88%B7%E4%BA%86%23) `129.6K 🔥` `NEW`
1. [曝华为Mate90系列线下开始分货](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%8E%E4%B8%BAMate90%E7%B3%BB%E5%88%97%E7%BA%BF%E4%B8%8B%E5%BC%80%E5%A7%8B%E5%88%86%E8%B4%A7%23) `123.3K 🔥` `NEW`
1. [美半导体股暴涨原因](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%8D%8A%E5%AF%BC%E4%BD%93%E8%82%A1%E6%9A%B4%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `119.2K 🔥` `NEW`
1. [刘美含这段演技真神了](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BE%8E%E5%90%AB%E8%BF%99%E6%AE%B5%E6%BC%94%E6%8A%80%E7%9C%9F%E7%A5%9E%E4%BA%86%23) `117.3K 🔥` `NEW`
1. [西安比亚迪急招近万工人](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E6%AF%94%E4%BA%9A%E8%BF%AA%E6%80%A5%E6%8B%9B%E8%BF%91%E4%B8%87%E5%B7%A5%E4%BA%BA%23) `114.4K 🔥` `NEW`
1. [巴图姆退役](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9B%BE%E5%A7%86%E9%80%80%E5%BD%B9%23) `113.8K 🔥` `NEW`
1. [闫妮说去年大湾区晚会出丑了](https://s.weibo.com/weibo?q=%23%E9%97%AB%E5%A6%AE%E8%AF%B4%E5%8E%BB%E5%B9%B4%E5%A4%A7%E6%B9%BE%E5%8C%BA%E6%99%9A%E4%BC%9A%E5%87%BA%E4%B8%91%E4%BA%86%23) `110.5K 🔥` `NEW`
1. [两部门紧急拨付2亿支持4省救灾](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E9%83%A8%E9%97%A8%E7%B4%A7%E6%80%A5%E6%8B%A8%E4%BB%982%E4%BA%BF%E6%94%AF%E6%8C%814%E7%9C%81%E6%95%91%E7%81%BE%23) `1.0M 🔥` `+67%`
1. [Prada米兰女装秀](https://s.weibo.com/weibo?q=%23Prada%E7%B1%B3%E5%85%B0%E5%A5%B3%E8%A3%85%E7%A7%80%23) `996.3K 🔥` `+67%`
1. [王俊凯回复王源用了波浪号](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%9B%9E%E5%A4%8D%E7%8E%8B%E6%BA%90%E7%94%A8%E4%BA%86%E6%B3%A2%E6%B5%AA%E5%8F%B7%23) `290.6K 🔥` `+140%`
1. [吴尊晒NeiNei穿婚服](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%B0%8A%E6%99%92NeiNei%E7%A9%BF%E5%A9%9A%E6%9C%8D%23) `288.0K 🔥` `+141%`
1. [曝某S加女主片酬从几千万降至100万](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90S%E5%8A%A0%E5%A5%B3%E4%B8%BB%E7%89%87%E9%85%AC%E4%BB%8E%E5%87%A0%E5%8D%83%E4%B8%87%E9%99%8D%E8%87%B3100%E4%B8%87%23) `283.7K 🔥` `+139%`
1. [对一千块钱的概念越来越模糊了](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E4%B8%80%E5%8D%83%E5%9D%97%E9%92%B1%E7%9A%84%E6%A6%82%E5%BF%B5%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%A8%A1%E7%B3%8A%E4%BA%86%23) `283.0K 🔥` `+173%`
1. [鹿晗养头发的痛](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%85%BB%E5%A4%B4%E5%8F%91%E7%9A%84%E7%97%9B%23) `262.2K 🔥` `+122%`
1. [Lisa疑似与blue谈恋爱了](https://s.weibo.com/weibo?q=%23Lisa%E7%96%91%E4%BC%BC%E4%B8%8Eblue%E8%B0%88%E6%81%8B%E7%88%B1%E4%BA%86%23) `259.4K 🔥` `+124%`
1. [初中生早餐 碳水配碳水](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%AD%E7%94%9F%E6%97%A9%E9%A4%90%20%E7%A2%B3%E6%B0%B4%E9%85%8D%E7%A2%B3%E6%B0%B4%23) `222.9K 🔥` `+93%`
1. [曝金鹰奖最佳男女主](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E5%A5%B3%E4%B8%BB%23) `164.6K 🔥` `+35%`
1. [面包和馒头经常吃哪个更健康](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E5%8C%85%E5%92%8C%E9%A6%92%E5%A4%B4%E7%BB%8F%E5%B8%B8%E5%90%83%E5%93%AA%E4%B8%AA%E6%9B%B4%E5%81%A5%E5%BA%B7%23) `155.0K 🔥` `+34%`
1. [油价节前或大涨](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E8%8A%82%E5%89%8D%E6%88%96%E5%A4%A7%E6%B6%A8%23) `144.3K 🔥` `+21%`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `122.3K 🔥` `+93%`
1. [五个月坚持下来减重15斤](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%AA%E6%9C%88%E5%9D%9A%E6%8C%81%E4%B8%8B%E6%9D%A5%E5%87%8F%E9%87%8D15%E6%96%A4%23) `124.6K 🔥`
1. [你身体缺什么其实早就显露出来了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%BA%AB%E4%BD%93%E7%BC%BA%E4%BB%80%E4%B9%88%E5%85%B6%E5%AE%9E%E6%97%A9%E5%B0%B1%E6%98%BE%E9%9C%B2%E5%87%BA%E6%9D%A5%E4%BA%86%23) `123.4K 🔥`
1. [柬埔寨电诈园区内部曝光](https://s.weibo.com/weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E5%86%85%E9%83%A8%E6%9B%9D%E5%85%89%23) `116.9K 🔥`
1. [潘展乐 张展硕](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%B1%95%E4%B9%90%20%E5%BC%A0%E5%B1%95%E7%A1%95%23) `917.4K 🔥` `-55%`
1. [AI或可替代教师只需一个班主任](https://s.weibo.com/weibo?q=%23AI%E6%88%96%E5%8F%AF%E6%9B%BF%E4%BB%A3%E6%95%99%E5%B8%88%E5%8F%AA%E9%9C%80%E4%B8%80%E4%B8%AA%E7%8F%AD%E4%B8%BB%E4%BB%BB%23) `415.5K 🔥` `-25%`

Updated at 2026-09-22 09:45:33

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
