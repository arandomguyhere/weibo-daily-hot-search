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

1. [阿根廷队想给广西捐赠物资 (The Argentine team wants to donate supplies to Guangxi)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E6%83%B3%E7%BB%99%E5%B9%BF%E8%A5%BF%E6%8D%90%E8%B5%A0%E7%89%A9%E8%B5%84%23) `1.5M 🔥` `NEW`
1. [暑假档只剩野狗骨头有广了](https://s.weibo.com/weibo?q=%23%E6%9A%91%E5%81%87%E6%A1%A3%E5%8F%AA%E5%89%A9%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%9C%89%E5%B9%BF%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [马龙 退不了休了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%20%E9%80%80%E4%B8%8D%E4%BA%86%E4%BC%91%E4%BA%86%23) `650.2K 🔥` `NEW`
1. [海力士暴跌致韩国散户爆仓](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8A%9B%E5%A3%AB%E6%9A%B4%E8%B7%8C%E8%87%B4%E9%9F%A9%E5%9B%BD%E6%95%A3%E6%88%B7%E7%88%86%E4%BB%93%23) `450.2K 🔥` `NEW`
1. [马龙 一语成谶](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%20%E4%B8%80%E8%AF%AD%E6%88%90%E8%B0%B6%23) `443.4K 🔥` `NEW`
1. [中餐厅客人观众都不舒服了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%E5%AE%A2%E4%BA%BA%E8%A7%82%E4%BC%97%E9%83%BD%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `441.9K 🔥` `NEW`
1. [徐克深夜医院门口回应施南生离世](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%85%8B%E6%B7%B1%E5%A4%9C%E5%8C%BB%E9%99%A2%E9%97%A8%E5%8F%A3%E5%9B%9E%E5%BA%94%E6%96%BD%E5%8D%97%E7%94%9F%E7%A6%BB%E4%B8%96%23) `440.5K 🔥` `NEW`
1. [孙颖莎打破100多年惯例](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%89%93%E7%A0%B4100%E5%A4%9A%E5%B9%B4%E6%83%AF%E4%BE%8B%23) `431.2K 🔥` `NEW`
1. [周星驰说没人欠我电影票](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E8%AF%B4%E6%B2%A1%E4%BA%BA%E6%AC%A0%E6%88%91%E7%94%B5%E5%BD%B1%E7%A5%A8%23) `430.8K 🔥` `NEW`
1. [众星悼念施南生](https://s.weibo.com/weibo?q=%23%E4%BC%97%E6%98%9F%E6%82%BC%E5%BF%B5%E6%96%BD%E5%8D%97%E7%94%9F%23) `332.1K 🔥` `NEW`
1. [开到荼蘼 (Open until Tumi)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%23) `322.5K 🔥` `NEW`
1. [让金莎艾米演母女的简直天才](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E9%87%91%E8%8E%8E%E8%89%BE%E7%B1%B3%E6%BC%94%E6%AF%8D%E5%A5%B3%E7%9A%84%E7%AE%80%E7%9B%B4%E5%A4%A9%E6%89%8D%23) `259.1K 🔥` `NEW`
1. [峰哥发文清仓离场](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A5%E5%8F%91%E6%96%87%E6%B8%85%E4%BB%93%E7%A6%BB%E5%9C%BA%23) `257.2K 🔥` `NEW`
1. [杭州警方通报一甜品店主被刺身亡](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E4%B8%80%E7%94%9C%E5%93%81%E5%BA%97%E4%B8%BB%E8%A2%AB%E5%88%BA%E8%BA%AB%E4%BA%A1%23) `225.7K 🔥` `NEW`
1. [跑男收官焦点不该是白鹿章若楠妆容](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%94%B6%E5%AE%98%E7%84%A6%E7%82%B9%E4%B8%8D%E8%AF%A5%E6%98%AF%E7%99%BD%E9%B9%BF%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%A6%86%E5%AE%B9%23) `225.1K 🔥` `NEW`
1. [冉莹颖邹市明被曝签约MCN机构](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E9%82%B9%E5%B8%82%E6%98%8E%E8%A2%AB%E6%9B%9D%E7%AD%BE%E7%BA%A6MCN%E6%9C%BA%E6%9E%84%23) `224.8K 🔥` `NEW`
1. [何老师见人就说檀健次的健身餐](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%80%81%E5%B8%88%E8%A7%81%E4%BA%BA%E5%B0%B1%E8%AF%B4%E6%AA%80%E5%81%A5%E6%AC%A1%E7%9A%84%E5%81%A5%E8%BA%AB%E9%A4%90%23) `191.1K 🔥` `NEW`
1. [剧集十日终焉](https://s.weibo.com/weibo?q=%23%E5%89%A7%E9%9B%86%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `190.3K 🔥` `NEW`
1. [阿根廷队长回应英阿大战](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E9%95%BF%E5%9B%9E%E5%BA%94%E8%8B%B1%E9%98%BF%E5%A4%A7%E6%88%98%23) `165.7K 🔥` `NEW`
1. [大话西游让周星驰的公司直接倒闭](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%AF%9D%E8%A5%BF%E6%B8%B8%E8%AE%A9%E5%91%A8%E6%98%9F%E9%A9%B0%E7%9A%84%E5%85%AC%E5%8F%B8%E7%9B%B4%E6%8E%A5%E5%80%92%E9%97%AD%23) `148.3K 🔥` `NEW`
1. [八仙 (the Eight Immortals)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `138.6K 🔥` `NEW`
1. [伊朗大规模袭击地区美军目标](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%A7%E8%A7%84%E6%A8%A1%E8%A2%AD%E5%87%BB%E5%9C%B0%E5%8C%BA%E7%BE%8E%E5%86%9B%E7%9B%AE%E6%A0%87%23) `116.2K 🔥` `NEW`
1. [徐正溪复出的第一部剧拍的就是百花杀](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%AD%A3%E6%BA%AA%E5%A4%8D%E5%87%BA%E7%9A%84%E7%AC%AC%E4%B8%80%E9%83%A8%E5%89%A7%E6%8B%8D%E7%9A%84%E5%B0%B1%E6%98%AF%E7%99%BE%E8%8A%B1%E6%9D%80%23) `112.2K 🔥` `NEW`
1. [长鑫科技将正式申购](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E5%B0%86%E6%AD%A3%E5%BC%8F%E7%94%B3%E8%B4%AD%23) `112.2K 🔥` `NEW`
1. [孟子义红裙黑长直造型](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%BA%A2%E8%A3%99%E9%BB%91%E9%95%BF%E7%9B%B4%E9%80%A0%E5%9E%8B%23) `106.2K 🔥` `NEW`
1. [多家车企上半年大幅预亏](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E8%BD%A6%E4%BC%81%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%A4%A7%E5%B9%85%E9%A2%84%E4%BA%8F%23) `106.1K 🔥` `NEW`
1. [海南将禁售燃油车 释放什么信号](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8D%97%E5%B0%86%E7%A6%81%E5%94%AE%E7%87%83%E6%B2%B9%E8%BD%A6%20%E9%87%8A%E6%94%BE%E4%BB%80%E4%B9%88%E4%BF%A1%E5%8F%B7%23) `106.0K 🔥` `NEW`
1. [超强厄尔尼诺真要来了](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E7%9C%9F%E8%A6%81%E6%9D%A5%E4%BA%86%23) `1.6M 🔥` `+85%`
1. [未来五年这样提高国民健康水平 (How to improve national health in the next five years)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A5%E4%BA%94%E5%B9%B4%E8%BF%99%E6%A0%B7%E6%8F%90%E9%AB%98%E5%9B%BD%E6%B0%91%E5%81%A5%E5%BA%B7%E6%B0%B4%E5%B9%B3%23) `1.2M 🔥` `+137%`
1. [张雅琪回应中餐厅表现争议 (Zhang Yaqi responds to Chinese restaurant performance controversy)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E5%9B%9E%E5%BA%94%E4%B8%AD%E9%A4%90%E5%8E%85%E8%A1%A8%E7%8E%B0%E4%BA%89%E8%AE%AE%23) `1.1M 🔥` `+187%`
1. [遭仅退款损失20万老板有单也不敢接](https://s.weibo.com/weibo?q=%23%E9%81%AD%E4%BB%85%E9%80%80%E6%AC%BE%E6%8D%9F%E5%A4%B120%E4%B8%87%E8%80%81%E6%9D%BF%E6%9C%89%E5%8D%95%E4%B9%9F%E4%B8%8D%E6%95%A2%E6%8E%A5%23) `867.6K 🔥` `+33%`
1. [黄瓜这种情况比砒霜还毒](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%93%9C%E8%BF%99%E7%A7%8D%E6%83%85%E5%86%B5%E6%AF%94%E7%A0%92%E9%9C%9C%E8%BF%98%E6%AF%92%23) `724.4K 🔥` `+70%`
1. [中国自研AI芯片取得架构突破 (China's self-developed AI chip achieves architectural breakthrough)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%87%AA%E7%A0%94AI%E8%8A%AF%E7%89%87%E5%8F%96%E5%BE%97%E6%9E%B6%E6%9E%84%E7%AA%81%E7%A0%B4%23) `464.5K 🔥` `+63%`
1. [施南生徐克相恋三十六年](https://s.weibo.com/weibo?q=%23%E6%96%BD%E5%8D%97%E7%94%9F%E5%BE%90%E5%85%8B%E7%9B%B8%E6%81%8B%E4%B8%89%E5%8D%81%E5%85%AD%E5%B9%B4%23) `462.7K 🔥` `+168%`
1. [白鹿章若楠妆容 (Bailu Zhang Ruonan's makeup)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%A6%86%E5%AE%B9%23) `456.6K 🔥` `+126%`
1. [台风位置](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E4%BD%8D%E7%BD%AE%23) `323.8K 🔥` `+33%`
1. [为什么工作痛苦但不离职](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B7%A5%E4%BD%9C%E7%97%9B%E8%8B%A6%E4%BD%86%E4%B8%8D%E7%A6%BB%E8%81%8C%23) `260.4K 🔥` `+50%`
1. [家道突然中落是一种什么样的体验 (What is it like to experience a sudden loss of family fortune?)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%81%93%E7%AA%81%E7%84%B6%E4%B8%AD%E8%90%BD%E6%98%AF%E4%B8%80%E7%A7%8D%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%E4%BD%93%E9%AA%8C%23) `221.5K 🔥` `+27%`
1. [AI视频进步有多大](https://s.weibo.com/weibo?q=%23AI%E8%A7%86%E9%A2%91%E8%BF%9B%E6%AD%A5%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `106.1K 🔥` `+116%`
1. [建议大家都试试生活反差法](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E9%83%BD%E8%AF%95%E8%AF%95%E7%94%9F%E6%B4%BB%E5%8F%8D%E5%B7%AE%E6%B3%95%23) `493.5K 🔥`
1. [美人鱼2](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BA%BA%E9%B1%BC2%23) `281.6K 🔥`
1. [南方两倍做多海力士已跌近70% (South China's twice long position on Hynix has fallen by nearly 70%)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E4%B8%A4%E5%80%8D%E5%81%9A%E5%A4%9A%E6%B5%B7%E5%8A%9B%E5%A3%AB%E5%B7%B2%E8%B7%8C%E8%BF%9170%25%23) `205.5K 🔥`
1. [中餐厅 张雅琪 (Chinese Restaurant Zhang Yaqi)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%20%E5%BC%A0%E9%9B%85%E7%90%AA%23) `205.1K 🔥`
1. [原来路边收X光片是这来做这个的 (It turns out that this is where roadside X-ray films are collected.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%B7%AF%E8%BE%B9%E6%94%B6X%E5%85%89%E7%89%87%E6%98%AF%E8%BF%99%E6%9D%A5%E5%81%9A%E8%BF%99%E4%B8%AA%E7%9A%84%23) `200.6K 🔥`
1. [发现妈妈变老是从东西无法共用开始 (I found that my mother’s aging started when she couldn’t share things.)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%A6%88%E5%A6%88%E5%8F%98%E8%80%81%E6%98%AF%E4%BB%8E%E4%B8%9C%E8%A5%BF%E6%97%A0%E6%B3%95%E5%85%B1%E7%94%A8%E5%BC%80%E5%A7%8B%23) `171.6K 🔥`
1. [沈阳再次通告全市 (Shenyang once again notified the whole city)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E5%86%8D%E6%AC%A1%E9%80%9A%E5%91%8A%E5%85%A8%E5%B8%82%23) `164.3K 🔥`
1. [中山大学通报222人取消录取资格](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B1%B1%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5222%E4%BA%BA%E5%8F%96%E6%B6%88%E5%BD%95%E5%8F%96%E8%B5%84%E6%A0%BC%23) `163.8K 🔥`
1. [原来大家都是这样重启人生的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E9%87%8D%E5%90%AF%E4%BA%BA%E7%94%9F%E7%9A%84%23) `142.5K 🔥`
1. [哈兰德女朋友穿高跟鞋颠球 (Haaland's girlfriend wears high heels to hit the ball)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A5%B3%E6%9C%8B%E5%8F%8B%E7%A9%BF%E9%AB%98%E8%B7%9F%E9%9E%8B%E9%A2%A0%E7%90%83%23) `204.3K 🔥` `-32%`
1. [迪丽热巴演了个魔丸](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%BC%94%E4%BA%86%E4%B8%AA%E9%AD%94%E4%B8%B8%23) `108.7K 🔥` `-37%`

Updated at 2026-07-14 08:58:58

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
