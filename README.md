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

1. [李昀锐半裸这段只有关晓彤没看到 (Only Guan Xiaotong didn’t see Li Yunrui’s half-naked scene)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%8D%8A%E8%A3%B8%E8%BF%99%E6%AE%B5%E5%8F%AA%E6%9C%89%E5%85%B3%E6%99%93%E5%BD%A4%E6%B2%A1%E7%9C%8B%E5%88%B0%23) `1.1M 🔥` `NEW`
1. [国台办回应林志玲辞去文策院职务](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%E6%9E%97%E5%BF%97%E7%8E%B2%E8%BE%9E%E5%8E%BB%E6%96%87%E7%AD%96%E9%99%A2%E8%81%8C%E5%8A%A1%23) `798.0K 🔥` `NEW`
1. [暴雨强对流2预警齐发](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E5%BC%BA%E5%AF%B9%E6%B5%812%E9%A2%84%E8%AD%A6%E9%BD%90%E5%8F%91%23) `788.0K 🔥` `NEW`
1. [敖瑞鹏直播变敖real鹏](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E7%9B%B4%E6%92%AD%E5%8F%98%E6%95%96real%E9%B9%8F%23) `786.9K 🔥` `NEW`
1. [不要在吹头的时候和别人聊天](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%9C%A8%E5%90%B9%E5%A4%B4%E7%9A%84%E6%97%B6%E5%80%99%E5%92%8C%E5%88%AB%E4%BA%BA%E8%81%8A%E5%A4%A9%23) `785.6K 🔥` `NEW`
1. [外卖订书钉什么时候可以灭绝](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E8%AE%A2%E4%B9%A6%E9%92%89%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%8F%AF%E4%BB%A5%E7%81%AD%E7%BB%9D%23) `778.9K 🔥` `NEW`
1. [空调并不是开26度最省电](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%83%E5%B9%B6%E4%B8%8D%E6%98%AF%E5%BC%8026%E5%BA%A6%E6%9C%80%E7%9C%81%E7%94%B5%23) `558.5K 🔥` `NEW`
1. [雷霆马刺裁判连续误判](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E9%9C%86%E9%A9%AC%E5%88%BA%E8%A3%81%E5%88%A4%E8%BF%9E%E7%BB%AD%E8%AF%AF%E5%88%A4%23) `557.6K 🔥` `NEW`
1. [多家AI回应高考期间是否禁用解题](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6AI%E5%9B%9E%E5%BA%94%E9%AB%98%E8%80%83%E6%9C%9F%E9%97%B4%E6%98%AF%E5%90%A6%E7%A6%81%E7%94%A8%E8%A7%A3%E9%A2%98%23) `556.4K 🔥` `NEW`
1. [张凌赫王玉雯有情人终成兄妹](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%9C%89%E6%83%85%E4%BA%BA%E7%BB%88%E6%88%90%E5%85%84%E5%A6%B9%23) `555.6K 🔥` `NEW`
1. [沈月曾自曝和王鹤棣打得飞起 (Shen Yue once revealed that she had a good fight with Wang Hedi)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E6%9B%BE%E8%87%AA%E6%9B%9D%E5%92%8C%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%89%93%E5%BE%97%E9%A3%9E%E8%B5%B7%23) `554.2K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `553.2K 🔥` `NEW`
1. [Jennie新歌歌词惹争议](https://s.weibo.com/weibo?q=%23Jennie%E6%96%B0%E6%AD%8C%E6%AD%8C%E8%AF%8D%E6%83%B9%E4%BA%89%E8%AE%AE%23) `552.3K 🔥` `NEW`
1. [曝崔雪莉金赛纶医生刺激患者极端选择](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B4%94%E9%9B%AA%E8%8E%89%E9%87%91%E8%B5%9B%E7%BA%B6%E5%8C%BB%E7%94%9F%E5%88%BA%E6%BF%80%E6%82%A3%E8%80%85%E6%9E%81%E7%AB%AF%E9%80%89%E6%8B%A9%23) `551.5K 🔥` `NEW`
1. [确认出席VOGUE活动的艺人](https://s.weibo.com/weibo?q=%23%E7%A1%AE%E8%AE%A4%E5%87%BA%E5%B8%ADVOGUE%E6%B4%BB%E5%8A%A8%E7%9A%84%E8%89%BA%E4%BA%BA%23) `550.9K 🔥` `NEW`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `510.2K 🔥` `NEW`
1. [金耳环 怎么了](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%80%B3%E7%8E%AF%20%E6%80%8E%E4%B9%88%E4%BA%86%23) `479.2K 🔥` `NEW`
1. [女孩被骗陷入花场离开需缴3万元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%A2%AB%E9%AA%97%E9%99%B7%E5%85%A5%E8%8A%B1%E5%9C%BA%E7%A6%BB%E5%BC%80%E9%9C%80%E7%BC%B43%E4%B8%87%E5%85%83%23) `473.3K 🔥` `NEW`
1. [黄仁勋称AI时代学什么专业并不重要](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E7%A7%B0AI%E6%97%B6%E4%BB%A3%E5%AD%A6%E4%BB%80%E4%B9%88%E4%B8%93%E4%B8%9A%E5%B9%B6%E4%B8%8D%E9%87%8D%E8%A6%81%23) `468.1K 🔥` `NEW`
1. [云包场](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8C%85%E5%9C%BA%23) `460.7K 🔥` `NEW`
1. [王鹤棣家炸串店现状 (Current status of Wang Hedi’s fried skewers shop)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AE%B6%E7%82%B8%E4%B8%B2%E5%BA%97%E7%8E%B0%E7%8A%B6%23) `453.3K 🔥` `NEW`
1. [武契奇夫人在上海买买买](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E5%A4%AB%E4%BA%BA%E5%9C%A8%E4%B8%8A%E6%B5%B7%E4%B9%B0%E4%B9%B0%E4%B9%B0%23) `443.8K 🔥` `NEW`
1. [白鹿在客栈为吴泽林说话](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9C%A8%E5%AE%A2%E6%A0%88%E4%B8%BA%E5%90%B4%E6%B3%BD%E6%9E%97%E8%AF%B4%E8%AF%9D%23) `438.7K 🔥` `NEW`
1. [丁程鑫叫张凌赫姐夫](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8F%AB%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A7%90%E5%A4%AB%23) `430.8K 🔥` `NEW`
1. [隐形旅游成本](https://s.weibo.com/weibo?q=%23%E9%9A%90%E5%BD%A2%E6%97%85%E6%B8%B8%E6%88%90%E6%9C%AC%23) `429.2K 🔥` `NEW`
1. [娜扎美成神仙了](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E7%BE%8E%E6%88%90%E7%A5%9E%E4%BB%99%E4%BA%86%23) `421.1K 🔥` `NEW`
1. [沈月在桃花坞终于舒服了](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E5%9C%A8%E6%A1%83%E8%8A%B1%E5%9D%9E%E7%BB%88%E4%BA%8E%E8%88%92%E6%9C%8D%E4%BA%86%23) `406.7K 🔥` `NEW`
1. [歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%23) `401.5K 🔥` `NEW`
1. [VOGUE九寨沟活动](https://s.weibo.com/weibo?q=%23VOGUE%E4%B9%9D%E5%AF%A8%E6%B2%9F%E6%B4%BB%E5%8A%A8%23) `396.2K 🔥` `NEW`
1. [白玉兰最佳男主角入围作品台词切片](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%9C%80%E4%BD%B3%E7%94%B7%E4%B8%BB%E8%A7%92%E5%85%A5%E5%9B%B4%E4%BD%9C%E5%93%81%E5%8F%B0%E8%AF%8D%E5%88%87%E7%89%87%23) `376.7K 🔥` `NEW`
1. [优衣库收集非必要个人信息 (UNIQLO collects non-essential personal information)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E8%A1%A3%E5%BA%93%E6%94%B6%E9%9B%86%E9%9D%9E%E5%BF%85%E8%A6%81%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%23) `360.4K 🔥` `NEW`
1. [撞脸王祖贤女孩瘦下来了](https://s.weibo.com/weibo?q=%23%E6%92%9E%E8%84%B8%E7%8E%8B%E7%A5%96%E8%B4%A4%E5%A5%B3%E5%AD%A9%E7%98%A6%E4%B8%8B%E6%9D%A5%E4%BA%86%23) `356.6K 🔥` `NEW`
1. [万花世界阵容](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E9%98%B5%E5%AE%B9%23) `320.8K 🔥` `NEW`
1. [户口以后没那么重要了](https://s.weibo.com/weibo?q=%23%E6%88%B7%E5%8F%A3%E4%BB%A5%E5%90%8E%E6%B2%A1%E9%82%A3%E4%B9%88%E9%87%8D%E8%A6%81%E4%BA%86%23) `283.5K 🔥` `NEW`
1. [A股新股中一签大赚近30万](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%96%B0%E8%82%A1%E4%B8%AD%E4%B8%80%E7%AD%BE%E5%A4%A7%E8%B5%9A%E8%BF%9130%E4%B8%87%23) `266.6K 🔥` `NEW`
1. [鞠婧祎 猪塑](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%20%E7%8C%AA%E5%A1%91%23) `259.8K 🔥` `NEW`
1. [韩国股市涨到熔断](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E5%B8%82%E6%B6%A8%E5%88%B0%E7%86%94%E6%96%AD%23) `248.8K 🔥` `NEW`
1. [上帝到底关了李思潼哪扇窗](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%B8%9D%E5%88%B0%E5%BA%95%E5%85%B3%E4%BA%86%E6%9D%8E%E6%80%9D%E6%BD%BC%E5%93%AA%E6%89%87%E7%AA%97%23) `236.7K 🔥` `NEW`
1. [乌兰图雅望北京的含金量还在上升](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%E6%9C%9B%E5%8C%97%E4%BA%AC%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `234.6K 🔥` `NEW`
1. [三星薪资协议获批](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E8%96%AA%E8%B5%84%E5%8D%8F%E8%AE%AE%E8%8E%B7%E6%89%B9%23) `233.0K 🔥` `NEW`
1. [真正的毕业胸花 (Real graduation corsage)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E6%AF%95%E4%B8%9A%E8%83%B8%E8%8A%B1%23) `232.9K 🔥` `NEW`
1. [白玉兰演员评选更看重参赛作品表现](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%BC%94%E5%91%98%E8%AF%84%E9%80%89%E6%9B%B4%E7%9C%8B%E9%87%8D%E5%8F%82%E8%B5%9B%E4%BD%9C%E5%93%81%E8%A1%A8%E7%8E%B0%23) `227.7K 🔥` `NEW`
1. [曝刘亦菲陈晓二搭](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E4%BA%A6%E8%8F%B2%E9%99%88%E6%99%93%E4%BA%8C%E6%90%AD%23) `211.2K 🔥` `NEW`
1. [赵丽颖仅差白玉兰就大满贯](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%BB%85%E5%B7%AE%E7%99%BD%E7%8E%89%E5%85%B0%E5%B0%B1%E5%A4%A7%E6%BB%A1%E8%B4%AF%23) `201.4K 🔥` `NEW`
1. [姚明代言蔚来ES9](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E6%98%8E%E4%BB%A3%E8%A8%80%E8%94%9A%E6%9D%A5ES9%23) `165.7K 🔥` `NEW`
1. [Scout回应用中文客户端](https://s.weibo.com/weibo?q=%23Scout%E5%9B%9E%E5%BA%94%E7%94%A8%E4%B8%AD%E6%96%87%E5%AE%A2%E6%88%B7%E7%AB%AF%23) `162.3K 🔥` `NEW`
1. [雷霆3比2马刺](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E9%9C%863%E6%AF%942%E9%A9%AC%E5%88%BA%23) `148.9K 🔥` `NEW`
1. [曝杨紫获奖可能性最大](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%A8%E7%B4%AB%E8%8E%B7%E5%A5%96%E5%8F%AF%E8%83%BD%E6%80%A7%E6%9C%80%E5%A4%A7%23) `148.8K 🔥` `NEW`
1. [女教师给父亲打伞为何被造谣](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E7%BB%99%E7%88%B6%E4%BA%B2%E6%89%93%E4%BC%9E%E4%B8%BA%E4%BD%95%E8%A2%AB%E9%80%A0%E8%B0%A3%23) `556.7K 🔥` `+24%`
1. [终于知道怎么拍照没色差了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E6%80%8E%E4%B9%88%E6%8B%8D%E7%85%A7%E6%B2%A1%E8%89%B2%E5%B7%AE%E4%BA%86%23) `414.8K 🔥`
1. [13岁身高185的儿子跟妈妈要1块钱 (A 13-year-old son with a height of 185cm asks his mother for 1 yuan)](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E8%BA%AB%E9%AB%98185%E7%9A%84%E5%84%BF%E5%AD%90%E8%B7%9F%E5%A6%88%E5%A6%88%E8%A6%811%E5%9D%97%E9%92%B1%23) `219.6K 🔥` `-43%`

Updated at 2026-05-27 14:22:32

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
