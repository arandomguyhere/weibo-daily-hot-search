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

1. [苹果涨价引山姆代购潮 (Apple price increase triggers Sam's purchasing trend)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%B6%A8%E4%BB%B7%E5%BC%95%E5%B1%B1%E5%A7%86%E4%BB%A3%E8%B4%AD%E6%BD%AE%23) `1.2M 🔥` `NEW`
1. [郑钦文vs西尼亚科娃](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E8%A5%BF%E5%B0%BC%E4%BA%9A%E7%A7%91%E5%A8%83%23) `1.2M 🔥` `NEW`
1. [中国夏收好丰景](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%8F%E6%94%B6%E5%A5%BD%E4%B8%B0%E6%99%AF%23) `1.1M 🔥` `NEW`
1. [夏日居家氛围感](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E6%97%A5%E5%B1%85%E5%AE%B6%E6%B0%9B%E5%9B%B4%E6%84%9F%23) `1.1M 🔥` `NEW`
1. [男大学生殴打17岁女生警方已立案](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%AE%B4%E6%89%9317%E5%B2%81%E5%A5%B3%E7%94%9F%E8%AD%A6%E6%96%B9%E5%B7%B2%E7%AB%8B%E6%A1%88%23) `1.1M 🔥` `NEW`
1. [白玉兰红毯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E7%BA%A2%E6%AF%AF%23) `1.1M 🔥` `NEW`
1. [上四休三大小周工作制](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%9B%9B%E4%BC%91%E4%B8%89%E5%A4%A7%E5%B0%8F%E5%91%A8%E5%B7%A5%E4%BD%9C%E5%88%B6%23) `1.1M 🔥` `NEW`
1. [AG 首发名单](https://s.weibo.com/weibo?q=%23AG%20%E9%A6%96%E5%8F%91%E5%90%8D%E5%8D%95%23) `1.0M 🔥` `NEW`
1. [杨紫穿了祖海顶级高定](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%A9%BF%E4%BA%86%E7%A5%96%E6%B5%B7%E9%A1%B6%E7%BA%A7%E9%AB%98%E5%AE%9A%23) `949.9K 🔥` `NEW`
1. [杨幂 绿瓷美人](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E7%BB%BF%E7%93%B7%E7%BE%8E%E4%BA%BA%23) `931.2K 🔥` `NEW`
1. [TF家族运动会官宣 (TF Family Games Official Announcement)](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `922.1K 🔥` `NEW`
1. [再进化下去西瓜皮要没有了](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%BF%9B%E5%8C%96%E4%B8%8B%E5%8E%BB%E8%A5%BF%E7%93%9C%E7%9A%AE%E8%A6%81%E6%B2%A1%E6%9C%89%E4%BA%86%23) `914.1K 🔥` `NEW`
1. [亚洲市场暴跌](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%B4%B2%E5%B8%82%E5%9C%BA%E6%9A%B4%E8%B7%8C%23) `909.8K 🔥` `NEW`
1. [白鹿演唱会紧张](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E7%B4%A7%E5%BC%A0%23) `895.3K 🔥` `NEW`
1. [尽快远离办公室7大毒人](https://s.weibo.com/weibo?q=%23%E5%B0%BD%E5%BF%AB%E8%BF%9C%E7%A6%BB%E5%8A%9E%E5%85%AC%E5%AE%A47%E5%A4%A7%E6%AF%92%E4%BA%BA%23) `888.4K 🔥` `NEW`
1. [留给韩国队的可能性不多了](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%BB%99%E9%9F%A9%E5%9B%BD%E9%98%9F%E7%9A%84%E5%8F%AF%E8%83%BD%E6%80%A7%E4%B8%8D%E5%A4%9A%E4%BA%86%23) `876.3K 🔥` `NEW`
1. [西安偶遇谢霆锋吃油泼面](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E5%81%B6%E9%81%87%E8%B0%A2%E9%9C%86%E9%94%8B%E5%90%83%E6%B2%B9%E6%B3%BC%E9%9D%A2%23) `874.7K 🔥` `NEW`
1. [全国多地榴莲卖家称遭同一人薅羊毛](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E5%A4%9A%E5%9C%B0%E6%A6%B4%E8%8E%B2%E5%8D%96%E5%AE%B6%E7%A7%B0%E9%81%AD%E5%90%8C%E4%B8%80%E4%BA%BA%E8%96%85%E7%BE%8A%E6%AF%9B%23) `866.2K 🔥` `NEW`
1. [刘亦菲白玉兰出逃一周年](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%99%BD%E7%8E%89%E5%85%B0%E5%87%BA%E9%80%83%E4%B8%80%E5%91%A8%E5%B9%B4%23) `861.3K 🔥` `NEW`
1. [韩东君当同事是什么体验](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E4%B8%9C%E5%90%9B%E5%BD%93%E5%90%8C%E4%BA%8B%E6%98%AF%E4%BB%80%E4%B9%88%E4%BD%93%E9%AA%8C%23) `770.9K 🔥` `NEW`
1. [A股缩量419亿调整 (A-share shrinkage adjusted by 41.9 billion)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%BC%A9%E9%87%8F419%E4%BA%BF%E8%B0%83%E6%95%B4%23) `758.9K 🔥` `NEW`
1. [温网2026](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%BD%912026%23) `744.7K 🔥` `NEW`
1. [启境GT7全维安全有多强](https://s.weibo.com/weibo?q=%23%E5%90%AF%E5%A2%83GT7%E5%85%A8%E7%BB%B4%E5%AE%89%E5%85%A8%E6%9C%89%E5%A4%9A%E5%BC%BA%23) `743.5K 🔥` `NEW`
1. [白鹿新歌抄袭质疑被拆解](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B0%E6%AD%8C%E6%8A%84%E8%A2%AD%E8%B4%A8%E7%96%91%E8%A2%AB%E6%8B%86%E8%A7%A3%23) `735.5K 🔥` `NEW`
1. [关晓彤瘦了好多](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%98%A6%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `696.3K 🔥` `NEW`
1. [钟意 首发](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%84%8F%20%E9%A6%96%E5%8F%91%23) `596.4K 🔥` `NEW`
1. [时代少年团 运动会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `566.4K 🔥` `NEW`
1. [张婧仪白玉兰美成建模神了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E7%99%BD%E7%8E%89%E5%85%B0%E7%BE%8E%E6%88%90%E5%BB%BA%E6%A8%A1%E7%A5%9E%E4%BA%86%23) `561.8K 🔥` `NEW`
1. [杨紫以为自己耳环掉了一个](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%BB%A5%E4%B8%BA%E8%87%AA%E5%B7%B1%E8%80%B3%E7%8E%AF%E6%8E%89%E4%BA%86%E4%B8%80%E4%B8%AA%23) `414.6K 🔥` `NEW`
1. [市民曝一外国人长期蹭闸机逃地铁票](https://s.weibo.com/weibo?q=%23%E5%B8%82%E6%B0%91%E6%9B%9D%E4%B8%80%E5%A4%96%E5%9B%BD%E4%BA%BA%E9%95%BF%E6%9C%9F%E8%B9%AD%E9%97%B8%E6%9C%BA%E9%80%83%E5%9C%B0%E9%93%81%E7%A5%A8%23) `411.1K 🔥` `NEW`
1. [张凌赫开毯 (Zhang Linghe opens the blanket)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BC%80%E6%AF%AF%23) `408.7K 🔥` `NEW`
1. [朱珠谈AI细胞级解冻简直是大救星](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E8%B0%88AI%E7%BB%86%E8%83%9E%E7%BA%A7%E8%A7%A3%E5%86%BB%E7%AE%80%E7%9B%B4%E6%98%AF%E5%A4%A7%E6%95%91%E6%98%9F%23) `373.6K 🔥` `NEW`
1. [退钱哥谈德国爆冷输球](https://s.weibo.com/weibo?q=%23%E9%80%80%E9%92%B1%E5%93%A5%E8%B0%88%E5%BE%B7%E5%9B%BD%E7%88%86%E5%86%B7%E8%BE%93%E7%90%83%23) `363.1K 🔥` `NEW`
1. [浪姐](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `361.4K 🔥` `NEW`
1. [李羲承退队就是为了做这个吗](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E9%80%80%E9%98%9F%E5%B0%B1%E6%98%AF%E4%B8%BA%E4%BA%86%E5%81%9A%E8%BF%99%E4%B8%AA%E5%90%97%23) `336.3K 🔥` `NEW`
1. [孙俪被误以为穿塑形裤](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E8%A2%AB%E8%AF%AF%E4%BB%A5%E4%B8%BA%E7%A9%BF%E5%A1%91%E5%BD%A2%E8%A3%A4%23) `239.9K 🔥` `NEW`
1. [穆祉丞演唱会伴手礼](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `237.9K 🔥` `NEW`
1. [工作后才明白爸妈为什么买熟菜回家](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%90%8E%E6%89%8D%E6%98%8E%E7%99%BD%E7%88%B8%E5%A6%88%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B9%B0%E7%86%9F%E8%8F%9C%E5%9B%9E%E5%AE%B6%23) `204.7K 🔥` `NEW`
1. [尹锡悦夫人金建希再获刑7年](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E9%94%A1%E6%82%A6%E5%A4%AB%E4%BA%BA%E9%87%91%E5%BB%BA%E5%B8%8C%E5%86%8D%E8%8E%B7%E5%88%917%E5%B9%B4%23) `172.0K 🔥` `NEW`
1. [林俊杰七七同游巴黎](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E4%B8%83%E4%B8%83%E5%90%8C%E6%B8%B8%E5%B7%B4%E9%BB%8E%23) `170.2K 🔥` `NEW`
1. [恋与深空 3D崩卡 (Love and Deep Space 3D Crash)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%203D%E5%B4%A9%E5%8D%A1%23) `1.1M 🔥` `+47%`
1. [探岳LPHEV重磅上市](https://s.weibo.com/weibo?q=%23%E6%8E%A2%E5%B2%B3LPHEV%E9%87%8D%E7%A3%85%E4%B8%8A%E5%B8%82%23) `1.1M 🔥` `+69%`
1. [白玉兰 (white magnolia)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `1.1M 🔥` `+105%`
1. [爸爸一躺下小孩面相变了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%B8%80%E8%BA%BA%E4%B8%8B%E5%B0%8F%E5%AD%A9%E9%9D%A2%E7%9B%B8%E5%8F%98%E4%BA%86%23) `934.7K 🔥` `+229%`
1. [短剧男主自曝因AI失业已返乡卖菜](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E7%94%B7%E4%B8%BB%E8%87%AA%E6%9B%9D%E5%9B%A0AI%E5%A4%B1%E4%B8%9A%E5%B7%B2%E8%BF%94%E4%B9%A1%E5%8D%96%E8%8F%9C%23) `902.5K 🔥` `+150%`
1. [恋与深空 (Love and deep space)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `769.7K 🔥` `+161%`
1. [高考691分广州学霸忍痛拒绝清北](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83691%E5%88%86%E5%B9%BF%E5%B7%9E%E5%AD%A6%E9%9C%B8%E5%BF%8D%E7%97%9B%E6%8B%92%E7%BB%9D%E6%B8%85%E5%8C%97%23) `476.7K 🔥` `+62%`
1. [韩媒集体慌了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AA%92%E9%9B%86%E4%BD%93%E6%85%8C%E4%BA%86%23) `367.0K 🔥` `+40%`
1. [何某低俗摆拍女子被关铁笼游街被刑拘 (He, a woman who posed for vulgar photos, was imprisoned in an iron cage and paraded through the streets, and was detained)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%9F%90%E4%BD%8E%E4%BF%97%E6%91%86%E6%8B%8D%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%85%B3%E9%93%81%E7%AC%BC%E6%B8%B8%E8%A1%97%E8%A2%AB%E5%88%91%E6%8B%98%23) `951.1K 🔥`
1. [iPhone18Pro起售价或9999元](https://s.weibo.com/weibo?q=%23iPhone18Pro%E8%B5%B7%E5%94%AE%E4%BB%B7%E6%88%969999%E5%85%83%23) `270.6K 🔥` `-62%`

Updated at 2026-06-26 19:21:05

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
