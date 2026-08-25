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

1. [郑钦文时隔14个月大满贯赢球](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%97%B6%E9%9A%9414%E4%B8%AA%E6%9C%88%E5%A4%A7%E6%BB%A1%E8%B4%AF%E8%B5%A2%E7%90%83%23) `525.9K 🔥` `NEW`
1. [沈腾又做了徐福烩饭](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%8F%88%E5%81%9A%E4%BA%86%E5%BE%90%E7%A6%8F%E7%83%A9%E9%A5%AD%23) `510.8K 🔥` `NEW`
1. [李金铭回复娄艺潇](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%9B%9E%E5%A4%8D%E5%A8%84%E8%89%BA%E6%BD%87%23) `307.2K 🔥` `NEW`
1. [iPhone18涨价幅度](https://s.weibo.com/weibo?q=%23iPhone18%E6%B6%A8%E4%BB%B7%E5%B9%85%E5%BA%A6%23) `302.3K 🔥` `NEW`
1. [为什么说23点后睡觉的人亏大了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B423%E7%82%B9%E5%90%8E%E7%9D%A1%E8%A7%89%E7%9A%84%E4%BA%BA%E4%BA%8F%E5%A4%A7%E4%BA%86%23) `186.4K 🔥` `NEW`
1. [扶老人被索赔事件完整监控曝光](https://s.weibo.com/weibo?q=%23%E6%89%B6%E8%80%81%E4%BA%BA%E8%A2%AB%E7%B4%A2%E8%B5%94%E4%BA%8B%E4%BB%B6%E5%AE%8C%E6%95%B4%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23) `161.9K 🔥` `NEW`
1. [个人机器人](https://s.weibo.com/weibo?q=%23%E4%B8%AA%E4%BA%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `141.3K 🔥` `NEW`
1. [曝丁程鑫章若楠参演春日宴](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%81%E7%A8%8B%E9%91%AB%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%8F%82%E6%BC%94%E6%98%A5%E6%97%A5%E5%AE%B4%23) `140.1K 🔥` `NEW`
1. [沈腾王楚然吃牛肉干像在合奏](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%90%83%E7%89%9B%E8%82%89%E5%B9%B2%E5%83%8F%E5%9C%A8%E5%90%88%E5%A5%8F%23) `139.8K 🔥` `NEW`
1. [男子把车主手机收车框却被妻子顺走](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8A%8A%E8%BD%A6%E4%B8%BB%E6%89%8B%E6%9C%BA%E6%94%B6%E8%BD%A6%E6%A1%86%E5%8D%B4%E8%A2%AB%E5%A6%BB%E5%AD%90%E9%A1%BA%E8%B5%B0%23) `130.0K 🔥` `NEW`
1. [伊朗媒体发布穆杰塔巴早前视频](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AA%92%E4%BD%93%E5%8F%91%E5%B8%83%E7%A9%86%E6%9D%B0%E5%A1%94%E5%B7%B4%E6%97%A9%E5%89%8D%E8%A7%86%E9%A2%91%23) `97.7K 🔥` `NEW`
1. [穆祉丞给黄朔送国外买的裤子](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%BB%99%E9%BB%84%E6%9C%94%E9%80%81%E5%9B%BD%E5%A4%96%E4%B9%B0%E7%9A%84%E8%A3%A4%E5%AD%90%23) `94.7K 🔥` `NEW`
1. [美政府计划撤销20万人签证](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%94%BF%E5%BA%9C%E8%AE%A1%E5%88%92%E6%92%A4%E9%94%8020%E4%B8%87%E4%BA%BA%E7%AD%BE%E8%AF%81%23) `91.4K 🔥` `NEW`
1. [同居3年娃2岁男子诉还21万被驳回](https://s.weibo.com/weibo?q=%23%E5%90%8C%E5%B1%853%E5%B9%B4%E5%A8%832%E5%B2%81%E7%94%B7%E5%AD%90%E8%AF%89%E8%BF%9821%E4%B8%87%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `84.1K 🔥` `NEW`
1. [官方确认帮扶老人遭索赔店主不担责](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E7%A1%AE%E8%AE%A4%E5%B8%AE%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%94%E5%BA%97%E4%B8%BB%E4%B8%8D%E6%8B%85%E8%B4%A3%23) `2.9M 🔥` `+31%`
1. [硕士被安排打螺丝300人被迫离职](https://s.weibo.com/weibo?q=%23%E7%A1%95%E5%A3%AB%E8%A2%AB%E5%AE%89%E6%8E%92%E6%89%93%E8%9E%BA%E4%B8%9D300%E4%BA%BA%E8%A2%AB%E8%BF%AB%E7%A6%BB%E8%81%8C%23) `795.8K 🔥` `+78%`
1. [辱骂女游客男子有双相情感障碍 (Man who insulted female tourists has bipolar disorder)](https://s.weibo.com/weibo?q=%23%E8%BE%B1%E9%AA%82%E5%A5%B3%E6%B8%B8%E5%AE%A2%E7%94%B7%E5%AD%90%E6%9C%89%E5%8F%8C%E7%9B%B8%E6%83%85%E6%84%9F%E9%9A%9C%E7%A2%8D%23) `663.9K 🔥` `+120%`
1. [发现高精力和高体力是两种人群 (It was found that high energy and high physical strength are two types of people)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E9%AB%98%E7%B2%BE%E5%8A%9B%E5%92%8C%E9%AB%98%E4%BD%93%E5%8A%9B%E6%98%AF%E4%B8%A4%E7%A7%8D%E4%BA%BA%E7%BE%A4%23) `523.1K 🔥` `+54%`
1. [王楚然现发4跳舞路透](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%8E%B0%E5%8F%914%E8%B7%B3%E8%88%9E%E8%B7%AF%E9%80%8F%23) `513.0K 🔥` `+50%`
1. [美伊冲突 (US-Iran conflict)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%86%B2%E7%AA%81%23) `510.7K 🔥` `+48%`
1. [李佳航回应李金铭娄艺潇邓家佳合体](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E8%88%AA%E5%9B%9E%E5%BA%94%E6%9D%8E%E9%87%91%E9%93%AD%E5%A8%84%E8%89%BA%E6%BD%87%E9%82%93%E5%AE%B6%E4%BD%B3%E5%90%88%E4%BD%93%23) `497.1K 🔥` `+53%`
1. [以为练普拉提很体面](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E7%BB%83%E6%99%AE%E6%8B%89%E6%8F%90%E5%BE%88%E4%BD%93%E9%9D%A2%23) `471.0K 🔥` `+72%`
1. [18名中国船员失联家属发声](https://s.weibo.com/weibo?q=%2318%E5%90%8D%E4%B8%AD%E5%9B%BD%E8%88%B9%E5%91%98%E5%A4%B1%E8%81%94%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `418.8K 🔥` `+49%`
1. [台风沙德尔生成](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94%E7%94%9F%E6%88%90%23) `255.4K 🔥` `+113%`
1. [一天只做2件事的30%法则 (The 30% rule of only doing 2 things a day)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A4%A9%E5%8F%AA%E5%81%9A2%E4%BB%B6%E4%BA%8B%E7%9A%8430%25%E6%B3%95%E5%88%99%23) `223.0K 🔥` `+28%`
1. [央视网评湖南扶老人被索赔事件](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BD%91%E8%AF%84%E6%B9%96%E5%8D%97%E6%89%B6%E8%80%81%E4%BA%BA%E8%A2%AB%E7%B4%A2%E8%B5%94%E4%BA%8B%E4%BB%B6%23) `197.7K 🔥` `+25%`
1. [儿子像妈女儿像爸的真相](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%83%8F%E5%A6%88%E5%A5%B3%E5%84%BF%E5%83%8F%E7%88%B8%E7%9A%84%E7%9C%9F%E7%9B%B8%23) `162.9K 🔥` `+104%`
1. [小猫咪打搅小狗狗睡懒觉的后果 (The consequences of a kitten disturbing a puppy’s sleep)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%92%AA%E6%89%93%E6%90%85%E5%B0%8F%E7%8B%97%E7%8B%97%E7%9D%A1%E6%87%92%E8%A7%89%E7%9A%84%E5%90%8E%E6%9E%9C%23) `140.1K 🔥` `+62%`
1. [千万不要再美化种地生活了](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%86%8D%E7%BE%8E%E5%8C%96%E7%A7%8D%E5%9C%B0%E7%94%9F%E6%B4%BB%E4%BA%86%23) `138.0K 🔥` `+38%`
1. [美存储板块大跌 (U.S. storage sector plummets)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AD%98%E5%82%A8%E6%9D%BF%E5%9D%97%E5%A4%A7%E8%B7%8C%23) `119.3K 🔥` `+63%`
1. [李现关晓彤 重启心跳](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%85%B3%E6%99%93%E5%BD%A4%20%E9%87%8D%E5%90%AF%E5%BF%83%E8%B7%B3%23) `118.9K 🔥` `+63%`
1. [阚清子38岁素颜状态](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%9038%E5%B2%81%E7%B4%A0%E9%A2%9C%E7%8A%B6%E6%80%81%23) `118.7K 🔥` `+47%`
1. [萨摩耶把浮萍当草坪跳进去 (Samoyed uses duckweed as lawn and jumps in it)](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%91%A9%E8%80%B6%E6%8A%8A%E6%B5%AE%E8%90%8D%E5%BD%93%E8%8D%89%E5%9D%AA%E8%B7%B3%E8%BF%9B%E5%8E%BB%23) `111.6K 🔥` `+39%`
1. [丁程鑫在众目睽睽下迷路了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%9C%A8%E4%BC%97%E7%9B%AE%E7%9D%BD%E7%9D%BD%E4%B8%8B%E8%BF%B7%E8%B7%AF%E4%BA%86%23) `110.5K 🔥` `+32%`
1. [出伏后怎么养生](https://s.weibo.com/weibo?q=%23%E5%87%BA%E4%BC%8F%E5%90%8E%E6%80%8E%E4%B9%88%E5%85%BB%E7%94%9F%23) `101.9K 🔥` `+26%`
1. [小米18Fold](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Fold%23) `1.1M 🔥`
1. [中国智造这样点亮未来](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%99%BA%E9%80%A0%E8%BF%99%E6%A0%B7%E7%82%B9%E4%BA%AE%E6%9C%AA%E6%9D%A5%23) `877.6K 🔥`
1. [穷人到哪儿旅游都像回家了 (Wherever the poor travel, it feels like going home)](https://s.weibo.com/weibo?q=%23%E7%A9%B7%E4%BA%BA%E5%88%B0%E5%93%AA%E5%84%BF%E6%97%85%E6%B8%B8%E9%83%BD%E5%83%8F%E5%9B%9E%E5%AE%B6%E4%BA%86%23) `852.1K 🔥`
1. [湖北长阳通报韩红基金会救护车](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E9%95%BF%E9%98%B3%E9%80%9A%E6%8A%A5%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E6%95%91%E6%8A%A4%E8%BD%A6%23) `437.3K 🔥`
1. [郭二娃死刑](https://s.weibo.com/weibo?q=%23%E9%83%AD%E4%BA%8C%E5%A8%83%E6%AD%BB%E5%88%91%23) `345.5K 🔥`
1. [中国女子泰国遭绑警方抓捕视频曝光](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E6%B3%B0%E5%9B%BD%E9%81%AD%E7%BB%91%E8%AD%A6%E6%96%B9%E6%8A%93%E6%8D%95%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `217.1K 🔥`
1. [一年级不布置书面家庭作业](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B9%B4%E7%BA%A7%E4%B8%8D%E5%B8%83%E7%BD%AE%E4%B9%A6%E9%9D%A2%E5%AE%B6%E5%BA%AD%E4%BD%9C%E4%B8%9A%23) `145.8K 🔥`
1. [郭二娃报复举报人致其死亡](https://s.weibo.com/weibo?q=%23%E9%83%AD%E4%BA%8C%E5%A8%83%E6%8A%A5%E5%A4%8D%E4%B8%BE%E6%8A%A5%E4%BA%BA%E8%87%B4%E5%85%B6%E6%AD%BB%E4%BA%A1%23) `126.1K 🔥`
1. [现货黄金](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%23) `123.8K 🔥`
1. [女子下楼梯时玩手机直接摔下去](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%8B%E6%A5%BC%E6%A2%AF%E6%97%B6%E7%8E%A9%E6%89%8B%E6%9C%BA%E7%9B%B4%E6%8E%A5%E6%91%94%E4%B8%8B%E5%8E%BB%23) `86.4K 🔥`
1. [扶老人遭索赔目击者称老板娘救死扶伤 (Eyewitnesses claimed that the proprietress saved lives and injured people after being compensated for helping the elderly)](https://s.weibo.com/weibo?q=%23%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%94%E7%9B%AE%E5%87%BB%E8%80%85%E7%A7%B0%E8%80%81%E6%9D%BF%E5%A8%98%E6%95%91%E6%AD%BB%E6%89%B6%E4%BC%A4%23) `83.1K 🔥`
1. [正午阳光疑似辟谣虞书欣出演](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%E7%96%91%E4%BC%BC%E8%BE%9F%E8%B0%A3%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%87%BA%E6%BC%94%23) `76.8K 🔥`
1. [时代少年团2026青春芒果夜](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A22026%E9%9D%92%E6%98%A5%E8%8A%92%E6%9E%9C%E5%A4%9C%23) `76.2K 🔥`

Updated at 2026-08-25 08:36:51

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
