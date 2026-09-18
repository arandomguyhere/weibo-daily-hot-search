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

1. [有人总把最伤人的一面留给最亲近的人](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E6%80%BB%E6%8A%8A%E6%9C%80%E4%BC%A4%E4%BA%BA%E7%9A%84%E4%B8%80%E9%9D%A2%E7%95%99%E7%BB%99%E6%9C%80%E4%BA%B2%E8%BF%91%E7%9A%84%E4%BA%BA%23) `48.6K 🔥` `NEW`
1. [第一次直观感受到低碳脸的杀伤力](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9B%B4%E8%A7%82%E6%84%9F%E5%8F%97%E5%88%B0%E4%BD%8E%E7%A2%B3%E8%84%B8%E7%9A%84%E6%9D%80%E4%BC%A4%E5%8A%9B%23) `48.4K 🔥` `NEW`
1. [原神](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%23) `42.1K 🔥` `NEW`
1. [亚运组委会致歉](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E7%BB%84%E5%A7%94%E4%BC%9A%E8%87%B4%E6%AD%89%23) `42.1K 🔥` `NEW`
1. [警方回应女子被情人杀害失踪7年](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E8%A2%AB%E6%83%85%E4%BA%BA%E6%9D%80%E5%AE%B3%E5%A4%B1%E8%B8%AA7%E5%B9%B4%23) `42.1K 🔥` `NEW`
1. [梅毒越来越困扰年轻人](https://s.weibo.com/weibo?q=%23%E6%A2%85%E6%AF%92%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%9B%B0%E6%89%B0%E5%B9%B4%E8%BD%BB%E4%BA%BA%23) `42.1K 🔥` `NEW`
1. [中国男篮失利反思](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E5%A4%B1%E5%88%A9%E5%8F%8D%E6%80%9D%23) `42.1K 🔥` `NEW`
1. [中国男篮防守问题](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E9%98%B2%E5%AE%88%E9%97%AE%E9%A2%98%23) `42.0K 🔥` `NEW`
1. [男篮观众席小男孩哭到颤抖](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AF%AE%E8%A7%82%E4%BC%97%E5%B8%AD%E5%B0%8F%E7%94%B7%E5%AD%A9%E5%93%AD%E5%88%B0%E9%A2%A4%E6%8A%96%23) `42.0K 🔥` `NEW`
1. [乒乓球赛事后勤保障争议](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E8%B5%9B%E4%BA%8B%E5%90%8E%E5%8B%A4%E4%BF%9D%E9%9A%9C%E4%BA%89%E8%AE%AE%23) `89.1K 🔥` `-44%`
1. [菲船加速冲撞中国海警船现场视频](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E8%88%B9%E5%8A%A0%E9%80%9F%E5%86%B2%E6%92%9E%E4%B8%AD%E5%9B%BD%E6%B5%B7%E8%AD%A6%E8%88%B9%E7%8E%B0%E5%9C%BA%E8%A7%86%E9%A2%91%23) `73.5K 🔥` `-72%`
1. [斑驳旧物铭刻90多年前不屈抗争](https://s.weibo.com/weibo?q=%23%E6%96%91%E9%A9%B3%E6%97%A7%E7%89%A9%E9%93%AD%E5%88%BB90%E5%A4%9A%E5%B9%B4%E5%89%8D%E4%B8%8D%E5%B1%88%E6%8A%97%E4%BA%89%23) `72.6K 🔥` `-67%`
1. [京东iPhone18Pro首批现货到手](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9CiPhone18Pro%E9%A6%96%E6%89%B9%E7%8E%B0%E8%B4%A7%E5%88%B0%E6%89%8B%23) `72.4K 🔥` `-67%`
1. [韩国选手听到朝鲜国歌集体慌乱](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%80%89%E6%89%8B%E5%90%AC%E5%88%B0%E6%9C%9D%E9%B2%9C%E5%9B%BD%E6%AD%8C%E9%9B%86%E4%BD%93%E6%85%8C%E4%B9%B1%23) `72.4K 🔥` `-54%`
1. [池昌旭林珍娜太拼了吧](https://s.weibo.com/weibo?q=%23%E6%B1%A0%E6%98%8C%E6%97%AD%E6%9E%97%E7%8F%8D%E5%A8%9C%E5%A4%AA%E6%8B%BC%E4%BA%86%E5%90%A7%23) `72.1K 🔥` `-67%`
1. [中国男篮回应不敌日本队](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8C%E6%97%A5%E6%9C%AC%E9%98%9F%23) `55.9K 🔥` `-53%`
1. [郑合惠子没有感情全是演技](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E6%B2%A1%E6%9C%89%E6%84%9F%E6%83%85%E5%85%A8%E6%98%AF%E6%BC%94%E6%8A%80%23) `51.7K 🔥` `-73%`
1. [学医果然什么事都能遇到](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E5%8C%BB%E6%9E%9C%E7%84%B6%E4%BB%80%E4%B9%88%E4%BA%8B%E9%83%BD%E8%83%BD%E9%81%87%E5%88%B0%23) `51.6K 🔥` `-67%`
1. [亲子鉴定 医保](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%20%E5%8C%BB%E4%BF%9D%23) `51.1K 🔥` `-57%`
1. [法考成绩](https://s.weibo.com/weibo?q=%23%E6%B3%95%E8%80%83%E6%88%90%E7%BB%A9%23) `50.7K 🔥` `-69%`
1. [中国的小偷为何断崖式下降](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9A%84%E5%B0%8F%E5%81%B7%E4%B8%BA%E4%BD%95%E6%96%AD%E5%B4%96%E5%BC%8F%E4%B8%8B%E9%99%8D%23) `50.1K 🔥` `-88%`
1. [本届亚运会混乱程度](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%B1%8A%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%B7%B7%E4%B9%B1%E7%A8%8B%E5%BA%A6%23) `49.9K 🔥` `-68%`
1. [郭士强 下课](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%A3%AB%E5%BC%BA%20%E4%B8%8B%E8%AF%BE%23) `49.4K 🔥` `-68%`
1. [物业暴力阻拦业主回家](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%B8%9A%E6%9A%B4%E5%8A%9B%E9%98%BB%E6%8B%A6%E4%B8%9A%E4%B8%BB%E5%9B%9E%E5%AE%B6%23) `49.1K 🔥` `-68%`
1. [杨毅 中国男篮](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%AF%85%20%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%23) `48.7K 🔥` `-69%`
1. [人民网评罗永浩说野人先生难吃](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E7%BD%91%E8%AF%84%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%AF%B4%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E9%9A%BE%E5%90%83%23) `48.7K 🔥` `-69%`
1. [中国男篮vs日本男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E6%97%A5%E6%9C%AC%E7%94%B7%E7%AF%AE%23) `48.7K 🔥` `-68%`
1. [吃芒果真的是一件很私密的事](https://s.weibo.com/weibo?q=%23%E5%90%83%E8%8A%92%E6%9E%9C%E7%9C%9F%E7%9A%84%E6%98%AF%E4%B8%80%E4%BB%B6%E5%BE%88%E7%A7%81%E5%AF%86%E7%9A%84%E4%BA%8B%23) `48.6K 🔥` `-59%`
1. [崔永熙回应输日本男篮](https://s.weibo.com/weibo?q=%23%E5%B4%94%E6%B0%B8%E7%86%99%E5%9B%9E%E5%BA%94%E8%BE%93%E6%97%A5%E6%9C%AC%E7%94%B7%E7%AF%AE%23) `48.5K 🔥` `-59%`
1. [挑情丑闻](https://s.weibo.com/weibo?q=%23%E6%8C%91%E6%83%85%E4%B8%91%E9%97%BB%23) `48.5K 🔥` `-68%`
1. [好清醒的顶级认知](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%B8%85%E9%86%92%E7%9A%84%E9%A1%B6%E7%BA%A7%E8%AE%A4%E7%9F%A5%23) `48.5K 🔥` `-67%`
1. [女子吐槽吃魏家凉皮牛肉堡像喝油](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%90%E6%A7%BD%E5%90%83%E9%AD%8F%E5%AE%B6%E5%87%89%E7%9A%AE%E7%89%9B%E8%82%89%E5%A0%A1%E5%83%8F%E5%96%9D%E6%B2%B9%23) `48.4K 🔥` `-68%`
1. [女子称失踪闺蜜托梦暗示尸骸位置](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%A4%B1%E8%B8%AA%E9%97%BA%E8%9C%9C%E6%89%98%E6%A2%A6%E6%9A%97%E7%A4%BA%E5%B0%B8%E9%AA%B8%E4%BD%8D%E7%BD%AE%23) `46.9K 🔥` `-69%`
1. [愿意停下来的才是聪明人](https://s.weibo.com/weibo?q=%23%E6%84%BF%E6%84%8F%E5%81%9C%E4%B8%8B%E6%9D%A5%E7%9A%84%E6%89%8D%E6%98%AF%E8%81%AA%E6%98%8E%E4%BA%BA%23) `42.3K 🔥` `-65%`
1. [原来这就叫感官过载啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E5%8F%AB%E6%84%9F%E5%AE%98%E8%BF%87%E8%BD%BD%E5%95%8A%23) `42.3K 🔥` `-65%`
1. [成年人的世界不再是为自己而活](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E4%B8%96%E7%95%8C%E4%B8%8D%E5%86%8D%E6%98%AF%E4%B8%BA%E8%87%AA%E5%B7%B1%E8%80%8C%E6%B4%BB%23) `42.2K 🔥` `-65%`
1. [池昌旭林珍娜吻戏](https://s.weibo.com/weibo?q=%23%E6%B1%A0%E6%98%8C%E6%97%AD%E6%9E%97%E7%8F%8D%E5%A8%9C%E5%90%BB%E6%88%8F%23) `42.2K 🔥` `-65%`
1. [iPhone17Pro和18Pro外观对比](https://s.weibo.com/weibo?q=%23iPhone17Pro%E5%92%8C18Pro%E5%A4%96%E8%A7%82%E5%AF%B9%E6%AF%94%23) `42.1K 🔥` `-66%`
1. [法考](https://s.weibo.com/weibo?q=%23%E6%B3%95%E8%80%83%23) `42.1K 🔥` `-65%`
1. [兰香如故数据倒挂](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E6%95%B0%E6%8D%AE%E5%80%92%E6%8C%82%23) `42.1K 🔥` `-64%`
1. [苹果17Pro和18Pro双胞胎](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C17Pro%E5%92%8C18Pro%E5%8F%8C%E8%83%9E%E8%83%8E%23) `42.1K 🔥` `-65%`
1. [沈鼓集团公告](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%BC%93%E9%9B%86%E5%9B%A2%E5%85%AC%E5%91%8A%23) `42.1K 🔥` `-64%`
1. [联合早报](https://s.weibo.com/weibo?q=%23%E8%81%94%E5%90%88%E6%97%A9%E6%8A%A5%23) `42.1K 🔥` `-65%`
1. [贾国龙西贝焖面开业4个月倒闭了](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E5%9B%BD%E9%BE%99%E8%A5%BF%E8%B4%9D%E7%84%96%E9%9D%A2%E5%BC%80%E4%B8%9A4%E4%B8%AA%E6%9C%88%E5%80%92%E9%97%AD%E4%BA%86%23) `42.1K 🔥` `-73%`
1. [乔尔杰维奇 郭士强](https://s.weibo.com/weibo?q=%23%E4%B9%94%E5%B0%94%E6%9D%B0%E7%BB%B4%E5%A5%87%20%E9%83%AD%E5%A3%AB%E5%BC%BA%23) `42.1K 🔥` `-64%`
1. [亚运村邮轮 出海躲台风](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E6%9D%91%E9%82%AE%E8%BD%AE%20%E5%87%BA%E6%B5%B7%E8%BA%B2%E5%8F%B0%E9%A3%8E%23) `42.1K 🔥` `-64%`
1. [美使馆918发帖日本网民破防](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BD%BF%E9%A6%86918%E5%8F%91%E5%B8%96%E6%97%A5%E6%9C%AC%E7%BD%91%E6%B0%91%E7%A0%B4%E9%98%B2%23) `42.0K 🔥` `-73%`
1. [谭松韵收着演](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E6%94%B6%E7%9D%80%E6%BC%94%23) `42.0K 🔥` `-73%`
1. [杨毅谈男篮不敌日本](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%AF%85%E8%B0%88%E7%94%B7%E7%AF%AE%E4%B8%8D%E6%95%8C%E6%97%A5%E6%9C%AC%23) `42.0K 🔥` `-73%`
1. [兰香如故能否成为下一个知否](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%83%BD%E5%90%A6%E6%88%90%E4%B8%BA%E4%B8%8B%E4%B8%80%E4%B8%AA%E7%9F%A5%E5%90%A6%23) `42.0K 🔥` `-73%`
1. [为什么结婚了才叫稳定下来](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%BB%93%E5%A9%9A%E4%BA%86%E6%89%8D%E5%8F%AB%E7%A8%B3%E5%AE%9A%E4%B8%8B%E6%9D%A5%23) `42.0K 🔥` `-64%`

Updated at 2026-09-19 04:00:49

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
