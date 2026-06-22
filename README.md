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

1. [逐玉导演 战争戏不需要逻辑 (Director Zhuyu: War scenes don’t require logic)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%AF%BC%E6%BC%94%20%E6%88%98%E4%BA%89%E6%88%8F%E4%B8%8D%E9%9C%80%E8%A6%81%E9%80%BB%E8%BE%91%23) `1.2M 🔥` `NEW`
1. [广德车祸司机被刑拘](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%BE%B7%E8%BD%A6%E7%A5%B8%E5%8F%B8%E6%9C%BA%E8%A2%AB%E5%88%91%E6%8B%98%23) `1.1M 🔥` `NEW`
1. [前5月数据看我国消费新趋势](https://s.weibo.com/weibo?q=%23%E5%89%8D5%E6%9C%88%E6%95%B0%E6%8D%AE%E7%9C%8B%E6%88%91%E5%9B%BD%E6%B6%88%E8%B4%B9%E6%96%B0%E8%B6%8B%E5%8A%BF%23) `1.1M 🔥` `NEW`
1. [全新理想L8上市](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E7%90%86%E6%83%B3L8%E4%B8%8A%E5%B8%82%23) `1.1M 🔥` `NEW`
1. [医生我有点不舒服我要出院](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%88%91%E6%9C%89%E7%82%B9%E4%B8%8D%E8%88%92%E6%9C%8D%E6%88%91%E8%A6%81%E5%87%BA%E9%99%A2%23) `1.1M 🔥` `NEW`
1. [恋与深空是怎么做出来秦彻的](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%98%AF%E6%80%8E%E4%B9%88%E5%81%9A%E5%87%BA%E6%9D%A5%E7%A7%A6%E5%BD%BB%E7%9A%84%23) `654.8K 🔥` `NEW`
1. [阿根廷首发](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%A6%96%E5%8F%91%23) `650.0K 🔥` `NEW`
1. [李金铭农村综艺那家人已败诉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%86%9C%E6%9D%91%E7%BB%BC%E8%89%BA%E9%82%A3%E5%AE%B6%E4%BA%BA%E5%B7%B2%E8%B4%A5%E8%AF%89%23) `645.1K 🔥` `NEW`
1. [敖尹 敖隐](https://s.weibo.com/weibo?q=%23%E6%95%96%E5%B0%B9%20%E6%95%96%E9%9A%90%23) `504.0K 🔥` `NEW`
1. [广德公安通报交通事故](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%BE%B7%E5%85%AC%E5%AE%89%E9%80%9A%E6%8A%A5%E4%BA%A4%E9%80%9A%E4%BA%8B%E6%95%85%23) `501.5K 🔥` `NEW`
1. [白玉兰 (magnolia)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `410.5K 🔥` `NEW`
1. [恋与深空回应](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9E%E5%BA%94%23) `407.4K 🔥` `NEW`
1. [李金铭农村综艺那家人居然还在发她](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%86%9C%E6%9D%91%E7%BB%BC%E8%89%BA%E9%82%A3%E5%AE%B6%E4%BA%BA%E5%B1%85%E7%84%B6%E8%BF%98%E5%9C%A8%E5%8F%91%E5%A5%B9%23) `402.6K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `399.2K 🔥` `NEW`
1. [恋与深空一直在说对不起](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E4%B8%80%E7%9B%B4%E5%9C%A8%E8%AF%B4%E5%AF%B9%E4%B8%8D%E8%B5%B7%23) `394.9K 🔥` `NEW`
1. [恋与深空敖尹公开](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%95%96%E5%B0%B9%E5%85%AC%E5%BC%80%23) `391.0K 🔥` `NEW`
1. [凌肖 转正](https://s.weibo.com/weibo?q=%23%E5%87%8C%E8%82%96%20%E8%BD%AC%E6%AD%A3%23) `390.5K 🔥` `NEW`
1. [世界之外 系统](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B9%8B%E5%A4%96%20%E7%B3%BB%E7%BB%9F%23) `390.3K 🔥` `NEW`
1. [A股重要新信号](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%87%8D%E8%A6%81%E6%96%B0%E4%BF%A1%E5%8F%B7%23) `389.3K 🔥` `NEW`
1. [南方医科大学让蚊子只生儿子](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E5%8C%BB%E7%A7%91%E5%A4%A7%E5%AD%A6%E8%AE%A9%E8%9A%8A%E5%AD%90%E5%8F%AA%E7%94%9F%E5%84%BF%E5%AD%90%23) `387.8K 🔥` `NEW`
1. [时代峰峻辟谣朱志鑫苏新皓恋情 (Shi Fengjun refutes rumors that Zhu Zhixin and Su Xinhao are in love)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%BE%9F%E8%B0%A3%E6%9C%B1%E5%BF%97%E9%91%AB%E8%8B%8F%E6%96%B0%E7%9A%93%E6%81%8B%E6%83%85%23) `387.0K 🔥` `NEW`
1. [敖尹 丑](https://s.weibo.com/weibo?q=%23%E6%95%96%E5%B0%B9%20%E4%B8%91%23) `385.1K 🔥` `NEW`
1. [蔡徐坤穿了裙子](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E7%A9%BF%E4%BA%86%E8%A3%99%E5%AD%90%23) `383.7K 🔥` `NEW`
1. [曾沛慈黄灿灿友情](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E9%BB%84%E7%81%BF%E7%81%BF%E5%8F%8B%E6%83%85%23) `383.7K 🔥` `NEW`
1. [女子暴雨躲文旅局门口遭保安驱赶](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9A%B4%E9%9B%A8%E8%BA%B2%E6%96%87%E6%97%85%E5%B1%80%E9%97%A8%E5%8F%A3%E9%81%AD%E4%BF%9D%E5%AE%89%E9%A9%B1%E8%B5%B6%23) `352.0K 🔥` `NEW`
1. [苹果或跳过iPhone19](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%88%96%E8%B7%B3%E8%BF%87iPhone19%23) `333.8K 🔥` `NEW`
1. [一栗小莎子自曝病毒感染](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E8%87%AA%E6%9B%9D%E7%97%85%E6%AF%92%E6%84%9F%E6%9F%93%23) `325.8K 🔥` `NEW`
1. [恋与深空五家最团结的一次](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E4%BA%94%E5%AE%B6%E6%9C%80%E5%9B%A2%E7%BB%93%E7%9A%84%E4%B8%80%E6%AC%A1%23) `306.9K 🔥` `NEW`
1. [孙怡到底买了多少顶老孙帽](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%88%B0%E5%BA%95%E4%B9%B0%E4%BA%86%E5%A4%9A%E5%B0%91%E9%A1%B6%E8%80%81%E5%AD%99%E5%B8%BD%23) `305.2K 🔥` `NEW`
1. [内塔尼亚胡拒绝从黎巴嫩撤军](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A1%94%E5%B0%BC%E4%BA%9A%E8%83%A1%E6%8B%92%E7%BB%9D%E4%BB%8E%E9%BB%8E%E5%B7%B4%E5%AB%A9%E6%92%A4%E5%86%9B%23) `303.5K 🔥` `NEW`
1. [29岁离世女主持确诊卵巢癌仅8个月 (The 29-year-old female host who passed away was diagnosed with ovarian cancer only 8 months ago)](https://s.weibo.com/weibo?q=%2329%E5%B2%81%E7%A6%BB%E4%B8%96%E5%A5%B3%E4%B8%BB%E6%8C%81%E7%A1%AE%E8%AF%8A%E5%8D%B5%E5%B7%A2%E7%99%8C%E4%BB%858%E4%B8%AA%E6%9C%88%23) `299.9K 🔥` `NEW`
1. [女子试衣间全裸状态遭顽童掀帘](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%AF%95%E8%A1%A3%E9%97%B4%E5%85%A8%E8%A3%B8%E7%8A%B6%E6%80%81%E9%81%AD%E9%A1%BD%E7%AB%A5%E6%8E%80%E5%B8%98%23) `298.5K 🔥` `NEW`
1. [女子称44岁在阿里工作22年被裁](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B044%E5%B2%81%E5%9C%A8%E9%98%BF%E9%87%8C%E5%B7%A5%E4%BD%9C22%E5%B9%B4%E8%A2%AB%E8%A3%81%23) `296.3K 🔥` `NEW`
1. [田曦薇告黑](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%91%8A%E9%BB%91%23) `286.2K 🔥` `NEW`
1. [这段话瞬间杀死我的焦虑内耗](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E7%9E%AC%E9%97%B4%E6%9D%80%E6%AD%BB%E6%88%91%E7%9A%84%E7%84%A6%E8%99%91%E5%86%85%E8%80%97%23) `274.9K 🔥` `NEW`
1. [轻断食一天喝了6斤牛奶](https://s.weibo.com/weibo?q=%23%E8%BD%BB%E6%96%AD%E9%A3%9F%E4%B8%80%E5%A4%A9%E5%96%9D%E4%BA%866%E6%96%A4%E7%89%9B%E5%A5%B6%23) `265.5K 🔥` `NEW`
1. [G社是蔡徐坤站姐吧](https://s.weibo.com/weibo?q=%23G%E7%A4%BE%E6%98%AF%E8%94%A1%E5%BE%90%E5%9D%A4%E7%AB%99%E5%A7%90%E5%90%A7%23) `251.6K 🔥` `NEW`
1. [丞磊沈羽洁翻面吻](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E6%B2%88%E7%BE%BD%E6%B4%81%E7%BF%BB%E9%9D%A2%E5%90%BB%23) `234.4K 🔥` `NEW`
1. [郑钦文2比1谢拉](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%872%E6%AF%941%E8%B0%A2%E6%8B%89%23) `232.6K 🔥` `NEW`
1. [杨博文全新公式照C位](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E5%85%A8%E6%96%B0%E5%85%AC%E5%BC%8F%E7%85%A7C%E4%BD%8D%23) `223.3K 🔥` `NEW`
1. [小英直播关掉美颜 (Xiaoying's live broadcast turns off beauty)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E7%9B%B4%E6%92%AD%E5%85%B3%E6%8E%89%E7%BE%8E%E9%A2%9C%23) `201.4K 🔥` `NEW`
1. [建议大家把消极口癖戒掉](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E6%8A%8A%E6%B6%88%E6%9E%81%E5%8F%A3%E7%99%96%E6%88%92%E6%8E%89%23) `200.5K 🔥` `NEW`
1. [恋与深空 王者荣耀](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%20%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `172.4K 🔥` `NEW`
1. [这一秒过火](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `166.1K 🔥` `NEW`
1. [叠纸审美](https://s.weibo.com/weibo?q=%23%E5%8F%A0%E7%BA%B8%E5%AE%A1%E7%BE%8E%23) `157.4K 🔥` `NEW`
1. [江阴文旅局回应市民躲雨被驱赶](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E9%98%B4%E6%96%87%E6%97%85%E5%B1%80%E5%9B%9E%E5%BA%94%E5%B8%82%E6%B0%91%E8%BA%B2%E9%9B%A8%E8%A2%AB%E9%A9%B1%E8%B5%B6%23) `155.0K 🔥` `NEW`
1. [敖尹 流浪体](https://s.weibo.com/weibo?q=%23%E6%95%96%E5%B0%B9%20%E6%B5%81%E6%B5%AA%E4%BD%93%23) `143.7K 🔥` `NEW`
1. [国乒出发美国大满贯](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%87%BA%E5%8F%91%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%23) `134.3K 🔥` `NEW`
1. [陈都灵敖瑞鹏 不醒](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E6%95%96%E7%91%9E%E9%B9%8F%20%E4%B8%8D%E9%86%92%23) `133.6K 🔥` `NEW`
1. [大空头谈AI泡沫](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%A9%BA%E5%A4%B4%E8%B0%88AI%E6%B3%A1%E6%B2%AB%23) `131.0K 🔥` `NEW`
1. [向太半年瘦了20斤 (Xiang Tai lost 20 pounds in half a year)](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E5%8D%8A%E5%B9%B4%E7%98%A6%E4%BA%8620%E6%96%A4%23) `130.4K 🔥` `NEW`

Updated at 2026-06-23 00:03:47

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
