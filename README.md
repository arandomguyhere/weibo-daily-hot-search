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

1. [再也不去理发店去洗头了](https://s.weibo.com/weibo?q=%23%E5%86%8D%E4%B9%9F%E4%B8%8D%E5%8E%BB%E7%90%86%E5%8F%91%E5%BA%97%E5%8E%BB%E6%B4%97%E5%A4%B4%E4%BA%86%23) `1.6M 🔥` `NEW`
1. [县委书记说被扔下水是张雪临时起意](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%AF%B4%E8%A2%AB%E6%89%94%E4%B8%8B%E6%B0%B4%E6%98%AF%E5%BC%A0%E9%9B%AA%E4%B8%B4%E6%97%B6%E8%B5%B7%E6%84%8F%23) `899.1K 🔥` `NEW`
1. [卫星互联网低轨28组卫星发射成功](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E6%98%9F%E4%BA%92%E8%81%94%E7%BD%91%E4%BD%8E%E8%BD%A828%E7%BB%84%E5%8D%AB%E6%98%9F%E5%8F%91%E5%B0%84%E6%88%90%E5%8A%9F%23) `750.3K 🔥` `NEW`
1. [老戏骨集体飙戏 男女主像睡着了](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%88%8F%E9%AA%A8%E9%9B%86%E4%BD%93%E9%A3%99%E6%88%8F%20%E7%94%B7%E5%A5%B3%E4%B8%BB%E5%83%8F%E7%9D%A1%E7%9D%80%E4%BA%86%23) `504.8K 🔥` `NEW`
1. [一诺开场](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%BC%80%E5%9C%BA%23) `490.0K 🔥` `NEW`
1. [魏娆陆濯甘之如饴吻](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A8%86%E9%99%86%E6%BF%AF%E7%94%98%E4%B9%8B%E5%A6%82%E9%A5%B4%E5%90%BB%23) `380.2K 🔥` `NEW`
1. [2026王者荣耀共创之夜](https://s.weibo.com/weibo?q=%232026%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%85%B1%E5%88%9B%E4%B9%8B%E5%A4%9C%23) `364.8K 🔥` `NEW`
1. [新剧开播没几天就限免](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%89%A7%E5%BC%80%E6%92%AD%E6%B2%A1%E5%87%A0%E5%A4%A9%E5%B0%B1%E9%99%90%E5%85%8D%23) `361.4K 🔥` `NEW`
1. [黄子韬怒怼黑粉](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%80%92%E6%80%BC%E9%BB%91%E7%B2%89%23) `358.6K 🔥` `NEW`
1. [网传女孩撞宾利后和车主好上了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%A5%B3%E5%AD%A9%E6%92%9E%E5%AE%BE%E5%88%A9%E5%90%8E%E5%92%8C%E8%BD%A6%E4%B8%BB%E5%A5%BD%E4%B8%8A%E4%BA%86%23) `357.4K 🔥` `NEW`
1. [杨幂神级射箭](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%A5%9E%E7%BA%A7%E5%B0%84%E7%AE%AD%23) `356.9K 🔥` `NEW`
1. [金饰克价最多跌近500元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E6%9C%80%E5%A4%9A%E8%B7%8C%E8%BF%91500%E5%85%83%23) `354.8K 🔥` `NEW`
1. [迪丽热巴带动蝴蝶经济](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B8%A6%E5%8A%A8%E8%9D%B4%E8%9D%B6%E7%BB%8F%E6%B5%8E%23) `351.5K 🔥` `NEW`
1. [韩国人真的好爱艾敬](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%BA%BA%E7%9C%9F%E7%9A%84%E5%A5%BD%E7%88%B1%E8%89%BE%E6%95%AC%23) `350.6K 🔥` `NEW`
1. [今年成马极氪休息区火了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E6%88%90%E9%A9%AC%E6%9E%81%E6%B0%AA%E4%BC%91%E6%81%AF%E5%8C%BA%E7%81%AB%E4%BA%86%23) `349.9K 🔥` `NEW`
1. [法国警方获马克龙镇压骚乱许可](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%AD%A6%E6%96%B9%E8%8E%B7%E9%A9%AC%E5%85%8B%E9%BE%99%E9%95%87%E5%8E%8B%E9%AA%9A%E4%B9%B1%E8%AE%B8%E5%8F%AF%23) `348.5K 🔥` `NEW`
1. [女子宁波站屡遭二手烟索起诉赔2元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AE%81%E6%B3%A2%E7%AB%99%E5%B1%A1%E9%81%AD%E4%BA%8C%E6%89%8B%E7%83%9F%E7%B4%A2%E8%B5%B7%E8%AF%89%E8%B5%942%E5%85%83%23) `322.8K 🔥` `NEW`
1. [妻子要15万备孕丈夫酒后骂去死](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E8%A6%8115%E4%B8%87%E5%A4%87%E5%AD%95%E4%B8%88%E5%A4%AB%E9%85%92%E5%90%8E%E9%AA%82%E5%8E%BB%E6%AD%BB%23) `321.7K 🔥` `NEW`
1. [南京3000万豪宅出入口在隧道里](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC3000%E4%B8%87%E8%B1%AA%E5%AE%85%E5%87%BA%E5%85%A5%E5%8F%A3%E5%9C%A8%E9%9A%A7%E9%81%93%E9%87%8C%23) `316.7K 🔥` `NEW`
1. [张雪把县委书记丢河里](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%8A%8A%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E4%B8%A2%E6%B2%B3%E9%87%8C%23) `309.1K 🔥` `NEW`
1. [廖碧儿承认恋情](https://s.weibo.com/weibo?q=%23%E5%BB%96%E7%A2%A7%E5%84%BF%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `286.6K 🔥` `NEW`
1. [甲状腺癌转移高中生家长称长期熬夜](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E7%99%8C%E8%BD%AC%E7%A7%BB%E9%AB%98%E4%B8%AD%E7%94%9F%E5%AE%B6%E9%95%BF%E7%A7%B0%E9%95%BF%E6%9C%9F%E7%86%AC%E5%A4%9C%23) `277.3K 🔥` `NEW`
1. [孟子义质疑尚公主浴缸戏](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E8%B4%A8%E7%96%91%E5%B0%9A%E5%85%AC%E4%B8%BB%E6%B5%B4%E7%BC%B8%E6%88%8F%23) `263.7K 🔥` `NEW`
1. [穆祉丞把boy改成了girl](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%8A%8Aboy%E6%94%B9%E6%88%90%E4%BA%86girl%23) `262.6K 🔥` `NEW`
1. [何猷君其实不矮只是奚梦瑶太高了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%85%B6%E5%AE%9E%E4%B8%8D%E7%9F%AE%E5%8F%AA%E6%98%AF%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A4%AA%E9%AB%98%E4%BA%86%23) `250.4K 🔥` `NEW`
1. [央视曝AI人哭着卖惨带货](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9DAI%E4%BA%BA%E5%93%AD%E7%9D%80%E5%8D%96%E6%83%A8%E5%B8%A6%E8%B4%A7%23) `247.4K 🔥` `NEW`
1. [TES与AL多人缺席S16](https://s.weibo.com/weibo?q=%23TES%E4%B8%8EAL%E5%A4%9A%E4%BA%BA%E7%BC%BA%E5%B8%ADS16%23) `237.0K 🔥` `NEW`
1. [一诺帅爆了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%B8%85%E7%88%86%E4%BA%86%23) `231.9K 🔥` `NEW`
1. [王者荣耀共创之夜造型](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%85%B1%E5%88%9B%E4%B9%8B%E5%A4%9C%E9%80%A0%E5%9E%8B%23) `225.1K 🔥` `NEW`
1. [全款给孩子买房做好三层防护](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%AC%BE%E7%BB%99%E5%AD%A9%E5%AD%90%E4%B9%B0%E6%88%BF%E5%81%9A%E5%A5%BD%E4%B8%89%E5%B1%82%E9%98%B2%E6%8A%A4%23) `202.9K 🔥` `NEW`
1. [虞书欣菜市场红毯](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%8F%9C%E5%B8%82%E5%9C%BA%E7%BA%A2%E6%AF%AF%23) `200.2K 🔥` `NEW`
1. [40万小鹏汽车被撞报废气囊都没弹](https://s.weibo.com/weibo?q=%2340%E4%B8%87%E5%B0%8F%E9%B9%8F%E6%B1%BD%E8%BD%A6%E8%A2%AB%E6%92%9E%E6%8A%A5%E5%BA%9F%E6%B0%94%E5%9B%8A%E9%83%BD%E6%B2%A1%E5%BC%B9%23) `197.3K 🔥` `NEW`
1. [尚公主 九重紫](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%20%E4%B9%9D%E9%87%8D%E7%B4%AB%23) `197.0K 🔥` `NEW`
1. [KPL空少团制服造型登场](https://s.weibo.com/weibo?q=%23KPL%E7%A9%BA%E5%B0%91%E5%9B%A2%E5%88%B6%E6%9C%8D%E9%80%A0%E5%9E%8B%E7%99%BB%E5%9C%BA%23) `196.1K 🔥` `NEW`
1. [你以为的低精力和真正的低精力](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%A5%E4%B8%BA%E7%9A%84%E4%BD%8E%E7%B2%BE%E5%8A%9B%E5%92%8C%E7%9C%9F%E6%AD%A3%E7%9A%84%E4%BD%8E%E7%B2%BE%E5%8A%9B%23) `183.1K 🔥` `NEW`
1. [唐嫣 高珠美人](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%20%E9%AB%98%E7%8F%A0%E7%BE%8E%E4%BA%BA%23) `176.7K 🔥` `NEW`
1. [迪丽热巴张小斐刘冲合照](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%BC%A0%E5%B0%8F%E6%96%90%E5%88%98%E5%86%B2%E5%90%88%E7%85%A7%23) `174.8K 🔥` `NEW`
1. [闫桉直播](https://s.weibo.com/weibo?q=%23%E9%97%AB%E6%A1%89%E7%9B%B4%E6%92%AD%23) `158.8K 🔥` `NEW`
1. [李昀锐第八集神之八秒](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E7%AC%AC%E5%85%AB%E9%9B%86%E7%A5%9E%E4%B9%8B%E5%85%AB%E7%A7%92%23) `158.5K 🔥` `NEW`
1. [莱巴金娜500赛七连冠](https://s.weibo.com/weibo?q=%23%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C500%E8%B5%9B%E4%B8%83%E8%BF%9E%E5%86%A0%23) `158.3K 🔥` `NEW`
1. [蒯曼王艺迪亚锦赛女双冠军](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BC%E7%8E%8B%E8%89%BA%E8%BF%AA%E4%BA%9A%E9%94%A6%E8%B5%9B%E5%A5%B3%E5%8F%8C%E5%86%A0%E5%86%9B%23) `153.1K 🔥` `NEW`
1. [崔秀彬参加婚礼](https://s.weibo.com/weibo?q=%23%E5%B4%94%E7%A7%80%E5%BD%AC%E5%8F%82%E5%8A%A0%E5%A9%9A%E7%A4%BC%23) `153.0K 🔥` `NEW`
1. [苏醒自曝跟朋友闹掰原因](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E8%87%AA%E6%9B%9D%E8%B7%9F%E6%9C%8B%E5%8F%8B%E9%97%B9%E6%8E%B0%E5%8E%9F%E5%9B%A0%23) `152.9K 🔥` `NEW`
1. [特朗普回应奥巴马](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9B%9E%E5%BA%94%E5%A5%A5%E5%B7%B4%E9%A9%AC%23) `152.3K 🔥` `NEW`
1. [sakee被打](https://s.weibo.com/weibo?q=%23sakee%E8%A2%AB%E6%89%93%23) `151.1K 🔥` `NEW`
1. [羊年央视春晚总导演于蕾](https://s.weibo.com/weibo?q=%23%E7%BE%8A%E5%B9%B4%E5%A4%AE%E8%A7%86%E6%98%A5%E6%99%9A%E6%80%BB%E5%AF%BC%E6%BC%94%E4%BA%8E%E8%95%BE%23) `146.7K 🔥` `NEW`
1. [林诗栋黄友政亚锦赛男双冠军](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E9%BB%84%E5%8F%8B%E6%94%BF%E4%BA%9A%E9%94%A6%E8%B5%9B%E7%94%B7%E5%8F%8C%E5%86%A0%E5%86%9B%23) `143.7K 🔥` `NEW`
1. [县委书记拒绝张雪为家乡打广告](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%8B%92%E7%BB%9D%E5%BC%A0%E9%9B%AA%E4%B8%BA%E5%AE%B6%E4%B9%A1%E6%89%93%E5%B9%BF%E5%91%8A%23) `419.0K 🔥` `-69%`

Updated at 2026-10-25 20:20:47

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
