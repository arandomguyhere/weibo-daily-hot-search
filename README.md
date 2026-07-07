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

1. [埃及队抗议 (Egypt team protest)](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E9%98%9F%E6%8A%97%E8%AE%AE%23) `2.1M 🔥` `NEW`
1. [宜宾地震](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%E5%9C%B0%E9%9C%87%23) `1.1M 🔥` `NEW`
1. [现在就出发4 金晨](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%20%E9%87%91%E6%99%A8%23) `1.1M 🔥` `NEW`
1. [萨拉赫 点球争议](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%8B%89%E8%B5%AB%20%E7%82%B9%E7%90%83%E4%BA%89%E8%AE%AE%23) `1.1M 🔥` `NEW`
1. [苏醒 球王这点球太臭了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%20%E7%90%83%E7%8E%8B%E8%BF%99%E7%82%B9%E7%90%83%E5%A4%AA%E8%87%AD%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [冬风吹又生 陈都灵屈楚萧](https://s.weibo.com/weibo?q=%23%E5%86%AC%E9%A3%8E%E5%90%B9%E5%8F%88%E7%94%9F%20%E9%99%88%E9%83%BD%E7%81%B5%E5%B1%88%E6%A5%9A%E8%90%A7%23) `1.0M 🔥` `NEW`
1. [佛得角送门将劳斯莱斯加房产](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%80%81%E9%97%A8%E5%B0%86%E5%8A%B3%E6%96%AF%E8%8E%B1%E6%96%AF%E5%8A%A0%E6%88%BF%E4%BA%A7%23) `1.0M 🔥` `NEW`
1. [瑞士4比3哥伦比亚](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%A3%AB4%E6%AF%943%E5%93%A5%E4%BC%A6%E6%AF%94%E4%BA%9A%23) `1.0M 🔥` `NEW`
1. [5000元以下笔记本基本绝迹](https://s.weibo.com/weibo?q=%235000%E5%85%83%E4%BB%A5%E4%B8%8B%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%9F%BA%E6%9C%AC%E7%BB%9D%E8%BF%B9%23) `1.0M 🔥` `NEW`
1. [翻到旧照片情绪突然回来了](https://s.weibo.com/weibo?q=%23%E7%BF%BB%E5%88%B0%E6%97%A7%E7%85%A7%E7%89%87%E6%83%85%E7%BB%AA%E7%AA%81%E7%84%B6%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [四川高县5.0级地震 (5.0 magnitude earthquake in Gaoxian County, Sichuan)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E9%AB%98%E5%8E%BF5.0%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `1.0M 🔥` `NEW`
1. [苏醒谈阿根廷淘汰埃及](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E8%B0%88%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%B7%98%E6%B1%B0%E5%9F%83%E5%8F%8A%23) `999.6K 🔥` `NEW`
1. [野狗骨头把女生黄体破裂拍出来了](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%8A%8A%E5%A5%B3%E7%94%9F%E9%BB%84%E4%BD%93%E7%A0%B4%E8%A3%82%E6%8B%8D%E5%87%BA%E6%9D%A5%E4%BA%86%23) `984.3K 🔥` `NEW`
1. [赵丽颖张翰的咖位](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%BC%A0%E7%BF%B0%E7%9A%84%E5%92%96%E4%BD%8D%23) `962.4K 🔥` `NEW`
1. [广东广西洪涝](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B6%9D%23) `957.3K 🔥` `NEW`
1. [成都震感](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E9%9C%87%E6%84%9F%23) `952.3K 🔥` `NEW`
1. [哥伦比亚淘汰](https://s.weibo.com/weibo?q=%23%E5%93%A5%E4%BC%A6%E6%AF%94%E4%BA%9A%E6%B7%98%E6%B1%B0%23) `920.8K 🔥` `NEW`
1. [阿根廷惊天大逆转](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%83%8A%E5%A4%A9%E5%A4%A7%E9%80%86%E8%BD%AC%23) `905.5K 🔥` `NEW`
1. [四川高县2小时4次地震](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E9%AB%98%E5%8E%BF2%E5%B0%8F%E6%97%B64%E6%AC%A1%E5%9C%B0%E9%9C%87%23) `897.8K 🔥` `NEW`
1. [印度男子遭狮子袭击被按住双腿](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%90%E9%81%AD%E7%8B%AE%E5%AD%90%E8%A2%AD%E5%87%BB%E8%A2%AB%E6%8C%89%E4%BD%8F%E5%8F%8C%E8%85%BF%23) `877.4K 🔥` `NEW`
1. [陈楚生苏醒张远陆虎一起看球 (Chen Chusheng wakes up, Zhang Yuan and Land Rover watch football together)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A5%9A%E7%94%9F%E8%8B%8F%E9%86%92%E5%BC%A0%E8%BF%9C%E9%99%86%E8%99%8E%E4%B8%80%E8%B5%B7%E7%9C%8B%E7%90%83%23) `869.8K 🔥` `NEW`
1. [李兰迪 北京大雨受害者](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%20%E5%8C%97%E4%BA%AC%E5%A4%A7%E9%9B%A8%E5%8F%97%E5%AE%B3%E8%80%85%23) `866.7K 🔥` `NEW`
1. [24元救命药涨到600元还买不到](https://s.weibo.com/weibo?q=%2324%E5%85%83%E6%95%91%E5%91%BD%E8%8D%AF%E6%B6%A8%E5%88%B0600%E5%85%83%E8%BF%98%E4%B9%B0%E4%B8%8D%E5%88%B0%23) `858.5K 🔥` `NEW`
1. [阿根廷 脏 (argentina dirty)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E8%84%8F%23) `5.5M 🔥` `+53%`
1. [探访三江源 (Visit Sanjiangyuan)](https://s.weibo.com/weibo?q=%23%E6%8E%A2%E8%AE%BF%E4%B8%89%E6%B1%9F%E6%BA%90%23) `2.1M 🔥` `+57%`
1. [虞书欣张婧仪决战95花现偶之巅](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%86%B3%E6%88%9895%E8%8A%B1%E7%8E%B0%E5%81%B6%E4%B9%8B%E5%B7%85%23) `1.1M 🔥` `+1138%`
1. [现在就出发4 (Let's go now 4)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `1.1M 🔥` `+902%`
1. [脱口秀唐香玉拒不道歉被强执](https://s.weibo.com/weibo?q=%23%E8%84%B1%E5%8F%A3%E7%A7%80%E5%94%90%E9%A6%99%E7%8E%89%E6%8B%92%E4%B8%8D%E9%81%93%E6%AD%89%E8%A2%AB%E5%BC%BA%E6%89%A7%23) `1.0M 🔥` `+583%`
1. [男子父母被卷至百米高空后遇难 (Man's parents died after being swept 100 meters into the air)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%88%B6%E6%AF%8D%E8%A2%AB%E5%8D%B7%E8%87%B3%E7%99%BE%E7%B1%B3%E9%AB%98%E7%A9%BA%E5%90%8E%E9%81%87%E9%9A%BE%23) `1.0M 🔥` `+140%`
1. [瑞士vs哥伦比亚](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%A3%ABvs%E5%93%A5%E4%BC%A6%E6%AF%94%E4%BA%9A%23) `1.0M 🔥` `+78%`
1. [埃及进球取消黄牌取消不了](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E8%BF%9B%E7%90%83%E5%8F%96%E6%B6%88%E9%BB%84%E7%89%8C%E5%8F%96%E6%B6%88%E4%B8%8D%E4%BA%86%23) `993.4K 🔥` `+80%`
1. [感觉江浙沪对于台风反应都很平静](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E6%B1%9F%E6%B5%99%E6%B2%AA%E5%AF%B9%E4%BA%8E%E5%8F%B0%E9%A3%8E%E5%8F%8D%E5%BA%94%E9%83%BD%E5%BE%88%E5%B9%B3%E9%9D%99%23) `990.3K 🔥` `+549%`
1. [人一定要频繁大量记录自己 (People must record themselves frequently and extensively)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E9%A2%91%E7%B9%81%E5%A4%A7%E9%87%8F%E8%AE%B0%E5%BD%95%E8%87%AA%E5%B7%B1%23) `976.3K 🔥` `+871%`
1. [裁判 忘穿阿根廷球衣了 (The referee forgot to wear the Argentina jersey.)](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%20%E5%BF%98%E7%A9%BF%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E8%A1%A3%E4%BA%86%23) `972.8K 🔥` `+304%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `969.7K 🔥` `+573%`
1. [平陆运河全线通水后首遭特大洪灾](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E9%99%86%E8%BF%90%E6%B2%B3%E5%85%A8%E7%BA%BF%E9%80%9A%E6%B0%B4%E5%90%8E%E9%A6%96%E9%81%AD%E7%89%B9%E5%A4%A7%E6%B4%AA%E7%81%BE%23) `947.9K 🔥` `+990%`
1. [阿根廷vs埃及 (Argentina vs Egypt)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7vs%E5%9F%83%E5%8F%8A%23) `941.8K 🔥` `+579%`
1. [阿根廷回应让2追3 (Argentina responded to let 2 chase 3)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%9B%9E%E5%BA%94%E8%AE%A92%E8%BF%BD3%23) `934.7K 🔥` `+515%`
1. [49岁男子招嫖被骗90万气晕妻子 (A 49-year-old man was cheated of NT$900,000 for soliciting prostitution and his wife was furious.)](https://s.weibo.com/weibo?q=%2349%E5%B2%81%E7%94%B7%E5%AD%90%E6%8B%9B%E5%AB%96%E8%A2%AB%E9%AA%9790%E4%B8%87%E6%B0%94%E6%99%95%E5%A6%BB%E5%AD%90%23) `930.6K 🔥` `+509%`
1. [阿根廷回应战胜埃及](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%9B%9E%E5%BA%94%E6%88%98%E8%83%9C%E5%9F%83%E5%8F%8A%23) `921.8K 🔥` `+945%`
1. [龙卷风](https://s.weibo.com/weibo?q=%23%E9%BE%99%E5%8D%B7%E9%A3%8E%23) `913.0K 🔥` `+495%`
1. [大二女生贷款200万开民宿营收千万](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BA%8C%E5%A5%B3%E7%94%9F%E8%B4%B7%E6%AC%BE200%E4%B8%87%E5%BC%80%E6%B0%91%E5%AE%BF%E8%90%A5%E6%94%B6%E5%8D%83%E4%B8%87%23) `902.8K 🔥` `+802%`
1. [埃及抗议裁判判罚 (Egypt protests against referee decision)](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E6%8A%97%E8%AE%AE%E8%A3%81%E5%88%A4%E5%88%A4%E7%BD%9A%23) `890.6K 🔥` `+274%`
1. [广西的洪水很快要到广东了 (Floods from Guangxi are coming to Guangdong soon)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%9A%84%E6%B4%AA%E6%B0%B4%E5%BE%88%E5%BF%AB%E8%A6%81%E5%88%B0%E5%B9%BF%E4%B8%9C%E4%BA%86%23) `884.6K 🔥` `+902%`
1. [台风巴威登陆地点或有变 (Typhoon Bavi’s landfall location may change)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E5%9C%B0%E7%82%B9%E6%88%96%E6%9C%89%E5%8F%98%23) `883.0K 🔥` `+765%`
1. [被龙卷风从12楼吸走男子仍在抢救](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%BE%99%E5%8D%B7%E9%A3%8E%E4%BB%8E12%E6%A5%BC%E5%90%B8%E8%B5%B0%E7%94%B7%E5%AD%90%E4%BB%8D%E5%9C%A8%E6%8A%A2%E6%95%91%23) `855.5K 🔥` `+463%`
1. [中国女子在日遭人为肢解弃尸 (Chinese woman dismembered and abandoned in Japan)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%97%A5%E9%81%AD%E4%BA%BA%E4%B8%BA%E8%82%A2%E8%A7%A3%E5%BC%83%E5%B0%B8%23) `850.4K 🔥` `+863%`
1. [裁判 偏心 (referee bias)](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%20%E5%81%8F%E5%BF%83%23) `842.1K 🔥` `+857%`
1. [世界杯冠军直接颁给门将吧](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%A0%E5%86%9B%E7%9B%B4%E6%8E%A5%E9%A2%81%E7%BB%99%E9%97%A8%E5%B0%86%E5%90%A7%23) `2.2M 🔥`
1. [阿根廷3比2埃及](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B73%E6%AF%942%E5%9F%83%E5%8F%8A%23) `1.1M 🔥`

Updated at 2026-07-08 07:41:12

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
