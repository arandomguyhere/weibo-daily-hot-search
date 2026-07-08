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

1. [埃及足协正式申诉 要求调查主裁判 (The Egyptian Football Association formally lodges a complaint, calling for an investigation into the referee)](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E8%B6%B3%E5%8D%8F%E6%AD%A3%E5%BC%8F%E7%94%B3%E8%AF%89%20%E8%A6%81%E6%B1%82%E8%B0%83%E6%9F%A5%E4%B8%BB%E8%A3%81%E5%88%A4%23) `3.0M 🔥` `NEW`
1. [挪威队多人生病](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E9%98%9F%E5%A4%9A%E4%BA%BA%E7%94%9F%E7%97%85%23) `1.9M 🔥` `NEW`
1. [超8000人投入广西抗洪](https://s.weibo.com/weibo?q=%23%E8%B6%858000%E4%BA%BA%E6%8A%95%E5%85%A5%E5%B9%BF%E8%A5%BF%E6%8A%97%E6%B4%AA%23) `1.3M 🔥` `NEW`
1. [广西洪水](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%23) `1.3M 🔥` `NEW`
1. [王俊凯王一博作词](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%BD%9C%E8%AF%8D%23) `1.1M 🔥` `NEW`
1. [埃及总统赛后发文](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E6%80%BB%E7%BB%9F%E8%B5%9B%E5%90%8E%E5%8F%91%E6%96%87%23) `910.4K 🔥` `NEW`
1. [别花钱买增加情绪劳动的东西](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%8A%B1%E9%92%B1%E4%B9%B0%E5%A2%9E%E5%8A%A0%E6%83%85%E7%BB%AA%E5%8A%B3%E5%8A%A8%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `693.2K 🔥` `NEW`
1. [阿里 全员卸载Claude](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%20%E5%85%A8%E5%91%98%E5%8D%B8%E8%BD%BDClaude%23) `478.9K 🔥` `NEW`
1. [江苏或将遭遇17级超强台风](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E6%88%96%E5%B0%86%E9%81%AD%E9%81%8717%E7%BA%A7%E8%B6%85%E5%BC%BA%E5%8F%B0%E9%A3%8E%23) `477.9K 🔥` `NEW`
1. [金晨仍持续掉粉](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E4%BB%8D%E6%8C%81%E7%BB%AD%E6%8E%89%E7%B2%89%23) `475.9K 🔥` `NEW`
1. [张馨予时装周瘦到98斤 (Zhang Xinyu lost weight to 98 pounds during Fashion Week)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E6%97%B6%E8%A3%85%E5%91%A8%E7%98%A6%E5%88%B098%E6%96%A4%23) `468.1K 🔥` `NEW`
1. [恐怖游轮定档](https://s.weibo.com/weibo?q=%23%E6%81%90%E6%80%96%E6%B8%B8%E8%BD%AE%E5%AE%9A%E6%A1%A3%23) `461.9K 🔥` `NEW`
1. [CORTIS公开应援棒](https://s.weibo.com/weibo?q=%23CORTIS%E5%85%AC%E5%BC%80%E5%BA%94%E6%8F%B4%E6%A3%92%23) `461.3K 🔥` `NEW`
1. [千只瘫痪小猫超65%吃同一品牌猫粮](https://s.weibo.com/weibo?q=%23%E5%8D%83%E5%8F%AA%E7%98%AB%E7%97%AA%E5%B0%8F%E7%8C%AB%E8%B6%8565%25%E5%90%83%E5%90%8C%E4%B8%80%E5%93%81%E7%89%8C%E7%8C%AB%E7%B2%AE%23) `457.7K 🔥` `NEW`
1. [女子截民警执勤视频称点男模被拘](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%88%AA%E6%B0%91%E8%AD%A6%E6%89%A7%E5%8B%A4%E8%A7%86%E9%A2%91%E7%A7%B0%E7%82%B9%E7%94%B7%E6%A8%A1%E8%A2%AB%E6%8B%98%23) `453.3K 🔥` `NEW`
1. [男孩洪水中抱树求救](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E6%B4%AA%E6%B0%B4%E4%B8%AD%E6%8A%B1%E6%A0%91%E6%B1%82%E6%95%91%23) `451.5K 🔥` `NEW`
1. [唐香玉 埃克](https://s.weibo.com/weibo?q=%23%E5%94%90%E9%A6%99%E7%8E%89%20%E5%9F%83%E5%85%8B%23) `448.8K 🔥` `NEW`
1. [一觉醒来黄金又跌了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%A7%89%E9%86%92%E6%9D%A5%E9%BB%84%E9%87%91%E5%8F%88%E8%B7%8C%E4%BA%86%23) `445.4K 🔥` `NEW`
1. [姚晨女法官定妆照](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E6%99%A8%E5%A5%B3%E6%B3%95%E5%AE%98%E5%AE%9A%E5%A6%86%E7%85%A7%23) `442.2K 🔥` `NEW`
1. [王俊凯全专最夯](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%85%A8%E4%B8%93%E6%9C%80%E5%A4%AF%23) `440.2K 🔥` `NEW`
1. [照骗网红景点是怎么火的 (How did photo-spoofing internet celebrity attractions become so popular?)](https://s.weibo.com/weibo?q=%23%E7%85%A7%E9%AA%97%E7%BD%91%E7%BA%A2%E6%99%AF%E7%82%B9%E6%98%AF%E6%80%8E%E4%B9%88%E7%81%AB%E7%9A%84%23) `438.2K 🔥` `NEW`
1. [极氪9X五座版开启预售](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA9X%E4%BA%94%E5%BA%A7%E7%89%88%E5%BC%80%E5%90%AF%E9%A2%84%E5%94%AE%23) `437.1K 🔥` `NEW`
1. [鹿晗第14座公益球场](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%AC%AC14%E5%BA%A7%E5%85%AC%E7%9B%8A%E7%90%83%E5%9C%BA%23) `434.9K 🔥` `NEW`
1. [第一次对极繁主义有了实感](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E6%9E%81%E7%B9%81%E4%B8%BB%E4%B9%89%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `431.8K 🔥` `NEW`
1. [旅游7天定律](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B87%E5%A4%A9%E5%AE%9A%E5%BE%8B%23) `427.8K 🔥` `NEW`
1. [TOP偷偷藏不住](https://s.weibo.com/weibo?q=%23TOP%E5%81%B7%E5%81%B7%E8%97%8F%E4%B8%8D%E4%BD%8F%23) `426.5K 🔥` `NEW`
1. [内马尔因巴西出局损失上亿美元](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E5%9B%A0%E5%B7%B4%E8%A5%BF%E5%87%BA%E5%B1%80%E6%8D%9F%E5%A4%B1%E4%B8%8A%E4%BA%BF%E7%BE%8E%E5%85%83%23) `423.8K 🔥` `NEW`
1. [詹俊张路谈阿根廷晋级](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E4%BF%8A%E5%BC%A0%E8%B7%AF%E8%B0%88%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%99%8B%E7%BA%A7%23) `422.0K 🔥` `NEW`
1. [郭碧婷向佐儿子女儿近照](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E5%90%91%E4%BD%90%E5%84%BF%E5%AD%90%E5%A5%B3%E5%84%BF%E8%BF%91%E7%85%A7%23) `419.2K 🔥` `NEW`
1. [父亲回应女儿遭多人预谋迷奸致重伤](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%84%BF%E9%81%AD%E5%A4%9A%E4%BA%BA%E9%A2%84%E8%B0%8B%E8%BF%B7%E5%A5%B8%E8%87%B4%E9%87%8D%E4%BC%A4%23) `416.5K 🔥` `NEW`
1. [很讨厌有全勤奖的公司 (I hate companies that have perfect attendance awards)](https://s.weibo.com/weibo?q=%23%E5%BE%88%E8%AE%A8%E5%8E%8C%E6%9C%89%E5%85%A8%E5%8B%A4%E5%A5%96%E7%9A%84%E5%85%AC%E5%8F%B8%23) `413.7K 🔥` `NEW`
1. [杭州一阿姨靠吃社区食堂逆转糖尿病](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E4%B8%80%E9%98%BF%E5%A7%A8%E9%9D%A0%E5%90%83%E7%A4%BE%E5%8C%BA%E9%A3%9F%E5%A0%82%E9%80%86%E8%BD%AC%E7%B3%96%E5%B0%BF%E7%97%85%23) `412.7K 🔥` `NEW`
1. [17级是我国台风等级表的最高等级](https://s.weibo.com/weibo?q=%2317%E7%BA%A7%E6%98%AF%E6%88%91%E5%9B%BD%E5%8F%B0%E9%A3%8E%E7%AD%89%E7%BA%A7%E8%A1%A8%E7%9A%84%E6%9C%80%E9%AB%98%E7%AD%89%E7%BA%A7%23) `410.9K 🔥` `NEW`
1. [余承东发了带车顶帐篷的享界G9](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%8F%91%E4%BA%86%E5%B8%A6%E8%BD%A6%E9%A1%B6%E5%B8%90%E7%AF%B7%E7%9A%84%E4%BA%AB%E7%95%8CG9%23) `405.8K 🔥` `NEW`
1. [中国的化妆师也太天才了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9A%84%E5%8C%96%E5%A6%86%E5%B8%88%E4%B9%9F%E5%A4%AA%E5%A4%A9%E6%89%8D%E4%BA%86%23) `404.1K 🔥` `NEW`
1. [密室大逃脱8开播](https://s.weibo.com/weibo?q=%23%E5%AF%86%E5%AE%A4%E5%A4%A7%E9%80%83%E8%84%B18%E5%BC%80%E6%92%AD%23) `401.0K 🔥` `NEW`
1. [高善文确诊后反思自述](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%96%84%E6%96%87%E7%A1%AE%E8%AF%8A%E5%90%8E%E5%8F%8D%E6%80%9D%E8%87%AA%E8%BF%B0%23) `395.4K 🔥` `NEW`
1. [阿根廷战埃及裁判称判罚非常公平](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%88%98%E5%9F%83%E5%8F%8A%E8%A3%81%E5%88%A4%E7%A7%B0%E5%88%A4%E7%BD%9A%E9%9D%9E%E5%B8%B8%E5%85%AC%E5%B9%B3%23) `392.9K 🔥` `NEW`
1. [by5团综真的来了](https://s.weibo.com/weibo?q=%23by5%E5%9B%A2%E7%BB%BC%E7%9C%9F%E7%9A%84%E6%9D%A5%E4%BA%86%23) `391.1K 🔥` `NEW`
1. [全新奔驰纯电GLC (All-new Mercedes-Benz pure electric GLC)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E5%A5%94%E9%A9%B0%E7%BA%AF%E7%94%B5GLC%23) `1.3M 🔥`
1. [霉霉已经可以买下月球了 (Swifty Swift can already buy the moon)](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%B7%B2%E7%BB%8F%E5%8F%AF%E4%BB%A5%E4%B9%B0%E4%B8%8B%E6%9C%88%E7%90%83%E4%BA%86%23) `472.9K 🔥`
1. [小米汽车新系列](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E6%96%B0%E7%B3%BB%E5%88%97%23) `470.4K 🔥`
1. [野狗骨头把女生黄体破裂拍出来了 (The wild dog bone exposed the ruptured corpus luteum of a girl)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%8A%8A%E5%A5%B3%E7%94%9F%E9%BB%84%E4%BD%93%E7%A0%B4%E8%A3%82%E6%8B%8D%E5%87%BA%E6%9D%A5%E4%BA%86%23) `466.1K 🔥`
1. [特朗普说中国威胁论纯属危言耸听](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%B8%AD%E5%9B%BD%E5%A8%81%E8%83%81%E8%AE%BA%E7%BA%AF%E5%B1%9E%E5%8D%B1%E8%A8%80%E8%80%B8%E5%90%AC%23) `465.0K 🔥`
1. [苏醒回应阿根廷队黑赢](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E5%9B%9E%E5%BA%94%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E9%BB%91%E8%B5%A2%23) `455.4K 🔥`
1. [现在就出发4 金晨](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%20%E9%87%91%E6%99%A8%23) `446.8K 🔥`
1. [本届世界杯首次所有裁判来自同一国家](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%B1%8A%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E6%AC%A1%E6%89%80%E6%9C%89%E8%A3%81%E5%88%A4%E6%9D%A5%E8%87%AA%E5%90%8C%E4%B8%80%E5%9B%BD%E5%AE%B6%23) `429.7K 🔥`
1. [阿根廷 脏 (argentina dirty)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E8%84%8F%23) `1.2M 🔥` `-91%`
1. [世界杯8强全部产生 (All the top 8 players in the World Cup are produced)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF8%E5%BC%BA%E5%85%A8%E9%83%A8%E4%BA%A7%E7%94%9F%23) `407.0K 🔥` `-81%`
1. [脱口秀唐香玉拒不道歉被强执](https://s.weibo.com/weibo?q=%23%E8%84%B1%E5%8F%A3%E7%A7%80%E5%94%90%E9%A6%99%E7%8E%89%E6%8B%92%E4%B8%8D%E9%81%93%E6%AD%89%E8%A2%AB%E5%BC%BA%E6%89%A7%23) `400.2K 🔥` `-71%`
1. [阿根廷埃及球迷爆发冲突](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%9F%83%E5%8F%8A%E7%90%83%E8%BF%B7%E7%88%86%E5%8F%91%E5%86%B2%E7%AA%81%23) `398.2K 🔥` `-74%`

Updated at 2026-07-08 12:34:08

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
