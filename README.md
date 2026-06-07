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

1. [真考琵琶行了 (Let’s take the pipa test really well)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E8%80%83%E7%90%B5%E7%90%B6%E8%A1%8C%E4%BA%86%23) `4.9M 🔥` `NEW`
1. [高考语文默写](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E8%AF%AD%E6%96%87%E9%BB%98%E5%86%99%23) `1.3M 🔥` `NEW`
1. [高考数学](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%95%B0%E5%AD%A6%23) `849.3K 🔥` `NEW`
1. [一卷作文 脑子里只有网络烂梗](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8D%B7%E4%BD%9C%E6%96%87%20%E8%84%91%E5%AD%90%E9%87%8C%E5%8F%AA%E6%9C%89%E7%BD%91%E7%BB%9C%E7%83%82%E6%A2%97%23) `826.9K 🔥` `NEW`
1. [高考作文](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%23) `784.7K 🔥` `NEW`
1. [琵琶行原唱发文](https://s.weibo.com/weibo?q=%23%E7%90%B5%E7%90%B6%E8%A1%8C%E5%8E%9F%E5%94%B1%E5%8F%91%E6%96%87%23) `387.5K 🔥` `NEW`
1. [姆巴佩否认梅西靠天赋C罗靠努力说法](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%90%A6%E8%AE%A4%E6%A2%85%E8%A5%BF%E9%9D%A0%E5%A4%A9%E8%B5%8BC%E7%BD%97%E9%9D%A0%E5%8A%AA%E5%8A%9B%E8%AF%B4%E6%B3%95%23) `372.7K 🔥` `NEW`
1. [翘楚热度](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E7%83%AD%E5%BA%A6%23) `298.9K 🔥` `NEW`
1. [狼队转会公告](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E8%BD%AC%E4%BC%9A%E5%85%AC%E5%91%8A%23) `298.7K 🔥` `NEW`
1. [马斯克称禁止中国客户投SpaceX](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%A7%B0%E7%A6%81%E6%AD%A2%E4%B8%AD%E5%9B%BD%E5%AE%A2%E6%88%B7%E6%8A%95SpaceX%23) `297.7K 🔥` `NEW`
1. [时代少年团 高考作文 (Times Youth League College Entrance Examination Composition)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%23) `297.0K 🔥` `NEW`
1. [炎亚纶 高考作文](https://s.weibo.com/weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%20%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%23) `296.4K 🔥` `NEW`
1. [高考 豆包](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%20%E8%B1%86%E5%8C%85%23) `295.9K 🔥` `NEW`
1. [导演组一直问李晨是什么意思](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E6%BC%94%E7%BB%84%E4%B8%80%E7%9B%B4%E9%97%AE%E6%9D%8E%E6%99%A8%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D%23) `295.6K 🔥` `NEW`
1. [特朗普刚起床就发了AI视频](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%88%9A%E8%B5%B7%E5%BA%8A%E5%B0%B1%E5%8F%91%E4%BA%86AI%E8%A7%86%E9%A2%91%23) `293.7K 🔥` `NEW`
1. [侯宇道歉](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%AE%87%E9%81%93%E6%AD%89%23) `293.4K 🔥` `NEW`
1. [天津卷 调学生](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E5%8D%B7%20%E8%B0%83%E5%AD%A6%E7%94%9F%23) `292.0K 🔥` `NEW`
1. [李现晒了女友视角的摄影照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E6%99%92%E4%BA%86%E5%A5%B3%E5%8F%8B%E8%A7%86%E8%A7%92%E7%9A%84%E6%91%84%E5%BD%B1%E7%85%A7%23) `290.7K 🔥` `NEW`
1. [任何关系的底层逻辑](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E4%BD%95%E5%85%B3%E7%B3%BB%E7%9A%84%E5%BA%95%E5%B1%82%E9%80%BB%E8%BE%91%23) `289.9K 🔥` `NEW`
1. [鹿晗有鱼尾纹了](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%9C%89%E9%B1%BC%E5%B0%BE%E7%BA%B9%E4%BA%86%23) `289.9K 🔥` `NEW`
1. [侯宇取消追浪姐直播 (Hou Yu canceled the live broadcast of Sister Chai Lang)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%AE%87%E5%8F%96%E6%B6%88%E8%BF%BD%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `287.7K 🔥` `NEW`
1. [独居就是重新爱了一次小时候的自己](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E5%B1%85%E5%B0%B1%E6%98%AF%E9%87%8D%E6%96%B0%E7%88%B1%E4%BA%86%E4%B8%80%E6%AC%A1%E5%B0%8F%E6%97%B6%E5%80%99%E7%9A%84%E8%87%AA%E5%B7%B1%23) `265.3K 🔥` `NEW`
1. [卢昱晓点赞双人视频](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%82%B9%E8%B5%9E%E5%8F%8C%E4%BA%BA%E8%A7%86%E9%A2%91%23) `264.2K 🔥` `NEW`
1. [鹿晗腿长184cm](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%85%BF%E9%95%BF184cm%23) `264.1K 🔥` `NEW`
1. [霍尔木兹滞留船只密密麻麻](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%BB%9E%E7%95%99%E8%88%B9%E5%8F%AA%E5%AF%86%E5%AF%86%E9%BA%BB%E9%BA%BB%23) `263.1K 🔥` `NEW`
1. [梁实被路人当面吐槽](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%9E%E8%A2%AB%E8%B7%AF%E4%BA%BA%E5%BD%93%E9%9D%A2%E5%90%90%E6%A7%BD%23) `262.9K 🔥` `NEW`
1. [狗头萝莉卖煎饼被嘲笑](https://s.weibo.com/weibo?q=%23%E7%8B%97%E5%A4%B4%E8%90%9D%E8%8E%89%E5%8D%96%E7%85%8E%E9%A5%BC%E8%A2%AB%E5%98%B2%E7%AC%91%23) `262.9K 🔥` `NEW`
1. [张杰自曝不适合做艺人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E8%87%AA%E6%9B%9D%E4%B8%8D%E9%80%82%E5%90%88%E5%81%9A%E8%89%BA%E4%BA%BA%23) `217.5K 🔥` `NEW`
1. [我国乘用车12年胖了近400公斤](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E4%B9%98%E7%94%A8%E8%BD%A612%E5%B9%B4%E8%83%96%E4%BA%86%E8%BF%91400%E5%85%AC%E6%96%A4%23) `211.5K 🔥` `NEW`
1. [天津作文 难写](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E4%BD%9C%E6%96%87%20%E9%9A%BE%E5%86%99%23) `209.2K 🔥` `NEW`
1. [千万别听阴天没太阳](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E5%88%AB%E5%90%AC%E9%98%B4%E5%A4%A9%E6%B2%A1%E5%A4%AA%E9%98%B3%23) `209.1K 🔥` `NEW`
1. [杨紫白菊回家](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%99%BD%E8%8F%8A%E5%9B%9E%E5%AE%B6%23) `207.5K 🔥` `NEW`
1. [高考](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%23) `206.6K 🔥` `NEW`
1. [偶遇马嘉祺吃烤肉](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E9%A9%AC%E5%98%89%E7%A5%BA%E5%90%83%E7%83%A4%E8%82%89%23) `206.4K 🔥` `NEW`
1. [高考作文 修为散尽的感觉](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%20%E4%BF%AE%E4%B8%BA%E6%95%A3%E5%B0%BD%E7%9A%84%E6%84%9F%E8%A7%89%23) `202.8K 🔥` `NEW`
1. [刘宇宁摸张凌赫腹肌](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%91%B8%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%85%B9%E8%82%8C%23) `198.6K 🔥` `NEW`
1. [邓超孙俪结婚16周年了](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%AD%99%E4%BF%AA%E7%BB%93%E5%A9%9A16%E5%91%A8%E5%B9%B4%E4%BA%86%23) `197.9K 🔥` `NEW`
1. [高考时间](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%97%B6%E9%97%B4%23) `189.3K 🔥` `NEW`
1. [赵樱子又医美了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%A8%B1%E5%AD%90%E5%8F%88%E5%8C%BB%E7%BE%8E%E4%BA%86%23) `189.2K 🔥` `NEW`
1. [杨紫韩东君的落地签](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E9%9F%A9%E4%B8%9C%E5%90%9B%E7%9A%84%E8%90%BD%E5%9C%B0%E7%AD%BE%23) `188.6K 🔥` `NEW`
1. [高考第一天民警为无证可办笑了 (On the first day of the college entrance examination, the police laughed because they didn’t have a certificate.)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E7%AC%AC%E4%B8%80%E5%A4%A9%E6%B0%91%E8%AD%A6%E4%B8%BA%E6%97%A0%E8%AF%81%E5%8F%AF%E5%8A%9E%E7%AC%91%E4%BA%86%23) `186.5K 🔥` `NEW`
1. [泰国13岁姐姐因抢手机杀害7岁妹妹](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD13%E5%B2%81%E5%A7%90%E5%A7%90%E5%9B%A0%E6%8A%A2%E6%89%8B%E6%9C%BA%E6%9D%80%E5%AE%B37%E5%B2%81%E5%A6%B9%E5%A6%B9%23) `179.6K 🔥` `NEW`
1. [追光者王楚钦](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E5%85%89%E8%80%85%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `176.5K 🔥` `NEW`
1. [走错考场的新闻井喷了](https://s.weibo.com/weibo?q=%23%E8%B5%B0%E9%94%99%E8%80%83%E5%9C%BA%E7%9A%84%E6%96%B0%E9%97%BB%E4%BA%95%E5%96%B7%E4%BA%86%23) `176.5K 🔥` `NEW`
1. [美国1比2德国](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD1%E6%AF%942%E5%BE%B7%E5%9B%BD%23) `163.8K 🔥` `NEW`
1. [吉赛尔7年减了20斤](https://s.weibo.com/weibo?q=%23%E5%90%89%E8%B5%9B%E5%B0%947%E5%B9%B4%E5%87%8F%E4%BA%8620%E6%96%A4%23) `163.3K 🔥` `NEW`
1. [李晨妹妹结婚](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E5%A6%B9%E5%A6%B9%E7%BB%93%E5%A9%9A%23) `291.8K 🔥`
1. [静音护航就是最棒的高考应援](https://s.weibo.com/weibo?q=%23%E9%9D%99%E9%9F%B3%E6%8A%A4%E8%88%AA%E5%B0%B1%E6%98%AF%E6%9C%80%E6%A3%92%E7%9A%84%E9%AB%98%E8%80%83%E5%BA%94%E6%8F%B4%23) `1.1M 🔥` `-44%`
1. [唐艺昕疑似皮肤病复发 (Tang Yixin is suspected of having a recurrence of skin disease)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E7%96%91%E4%BC%BC%E7%9A%AE%E8%82%A4%E7%97%85%E5%A4%8D%E5%8F%91%23) `294.6K 🔥` `-28%`
1. [李佳航这是咋了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E8%88%AA%E8%BF%99%E6%98%AF%E5%92%8B%E4%BA%86%23) `292.7K 🔥` `-26%`

Updated at 2026-06-07 14:40:51

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
