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

1. [葛仙村度假区致歉 (Gexian Village Resort apologizes)](https://s.weibo.com/weibo?q=%23%E8%91%9B%E4%BB%99%E6%9D%91%E5%BA%A6%E5%81%87%E5%8C%BA%E8%87%B4%E6%AD%89%23) `1.9M 🔥` `NEW`
1. [5月1日铁路发送旅客量创历史新高](https://s.weibo.com/weibo?q=%235%E6%9C%881%E6%97%A5%E9%93%81%E8%B7%AF%E5%8F%91%E9%80%81%E6%97%85%E5%AE%A2%E9%87%8F%E5%88%9B%E5%8E%86%E5%8F%B2%E6%96%B0%E9%AB%98%23) `741.5K 🔥` `NEW`
1. [新SU7卡布里蓝带你慢游五一](https://s.weibo.com/weibo?q=%23%E6%96%B0SU7%E5%8D%A1%E5%B8%83%E9%87%8C%E8%93%9D%E5%B8%A6%E4%BD%A0%E6%85%A2%E6%B8%B8%E4%BA%94%E4%B8%80%23) `707.3K 🔥` `NEW`
1. [跑男 白鹿](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%20%E7%99%BD%E9%B9%BF%23) `700.8K 🔥` `NEW`
1. [湘西赶尸舞](https://s.weibo.com/weibo?q=%23%E6%B9%98%E8%A5%BF%E8%B5%B6%E5%B0%B8%E8%88%9E%23) `687.1K 🔥` `NEW`
1. [你好星期六把张婧仪周也弄错了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E6%8A%8A%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%91%A8%E4%B9%9F%E5%BC%84%E9%94%99%E4%BA%86%23) `668.1K 🔥` `NEW`
1. [每个省都有自己的专属早餐](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E4%B8%AA%E7%9C%81%E9%83%BD%E6%9C%89%E8%87%AA%E5%B7%B1%E7%9A%84%E4%B8%93%E5%B1%9E%E6%97%A9%E9%A4%90%23) `337.7K 🔥` `NEW`
1. [虞书欣 种地吧](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `329.8K 🔥` `NEW`
1. [孙怡阚清子看王濛搂陈瑶的表情](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%98%9A%E6%B8%85%E5%AD%90%E7%9C%8B%E7%8E%8B%E6%BF%9B%E6%90%82%E9%99%88%E7%91%B6%E7%9A%84%E8%A1%A8%E6%83%85%23) `326.7K 🔥` `NEW`
1. [韩国艺人偷税漏税追缴款Top5](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%89%BA%E4%BA%BA%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E%E8%BF%BD%E7%BC%B4%E6%AC%BETop5%23) `321.1K 🔥` `NEW`
1. [梁王对石宇奇说我们来兜底 (Liang Wang said to Shi Yuqi that we would tell the truth)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E7%8E%8B%E5%AF%B9%E7%9F%B3%E5%AE%87%E5%A5%87%E8%AF%B4%E6%88%91%E4%BB%AC%E6%9D%A5%E5%85%9C%E5%BA%95%23) `309.3K 🔥` `NEW`
1. [金靖差点删了爆改化妆师兔子](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E5%B7%AE%E7%82%B9%E5%88%A0%E4%BA%86%E7%88%86%E6%94%B9%E5%8C%96%E5%A6%86%E5%B8%88%E5%85%94%E5%AD%90%23) `298.8K 🔥` `NEW`
1. [东航回应航班MU5406撞桥原因](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%88%AA%E5%9B%9E%E5%BA%94%E8%88%AA%E7%8F%ADMU5406%E6%92%9E%E6%A1%A5%E5%8E%9F%E5%9B%A0%23) `297.6K 🔥` `NEW`
1. [严浩翔身心承受着巨大压力](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%BA%AB%E5%BF%83%E6%89%BF%E5%8F%97%E7%9D%80%E5%B7%A8%E5%A4%A7%E5%8E%8B%E5%8A%9B%23) `269.9K 🔥` `NEW`
1. [世界杯转播权再现中国式僵局](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%E5%86%8D%E7%8E%B0%E4%B8%AD%E5%9B%BD%E5%BC%8F%E5%83%B5%E5%B1%80%23) `217.0K 🔥` `NEW`
1. [这届年轻人开始主动求黑了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%8A%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E4%B8%BB%E5%8A%A8%E6%B1%82%E9%BB%91%E4%BA%86%23) `214.3K 🔥` `NEW`
1. [新SU7开进上海百年张园](https://s.weibo.com/weibo?q=%23%E6%96%B0SU7%E5%BC%80%E8%BF%9B%E4%B8%8A%E6%B5%B7%E7%99%BE%E5%B9%B4%E5%BC%A0%E5%9B%AD%23) `214.2K 🔥` `NEW`
1. [阚清子一斤没瘦](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E4%B8%80%E6%96%A4%E6%B2%A1%E7%98%A6%23) `195.7K 🔥` `NEW`
1. [36岁谈莉娜剖腹产产子](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E8%B0%88%E8%8E%89%E5%A8%9C%E5%89%96%E8%85%B9%E4%BA%A7%E4%BA%A7%E5%AD%90%23) `153.7K 🔥` `NEW`
1. [NPC小黄鱼互动争议景区致歉](https://s.weibo.com/weibo?q=%23NPC%E5%B0%8F%E9%BB%84%E9%B1%BC%E4%BA%92%E5%8A%A8%E4%BA%89%E8%AE%AE%E6%99%AF%E5%8C%BA%E8%87%B4%E6%AD%89%23) `153.2K 🔥` `NEW`
1. [月销超7万零跑创新高 (Monthly sales exceed 70,000 and set a new high)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%94%80%E8%B6%857%E4%B8%87%E9%9B%B6%E8%B7%91%E5%88%9B%E6%96%B0%E9%AB%98%23) `151.3K 🔥` `NEW`
1. [五一就该让千问AI劳动](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%B0%B1%E8%AF%A5%E8%AE%A9%E5%8D%83%E9%97%AEAI%E5%8A%B3%E5%8A%A8%23) `150.5K 🔥` `NEW`
1. [对自己不好的事别到处说](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E8%87%AA%E5%B7%B1%E4%B8%8D%E5%A5%BD%E7%9A%84%E4%BA%8B%E5%88%AB%E5%88%B0%E5%A4%84%E8%AF%B4%23) `611.4K 🔥` `+185%`
1. [我的猫终于干了我一直觉得她会干的事](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E7%8C%AB%E7%BB%88%E4%BA%8E%E5%B9%B2%E4%BA%86%E6%88%91%E4%B8%80%E7%9B%B4%E8%A7%89%E5%BE%97%E5%A5%B9%E4%BC%9A%E5%B9%B2%E7%9A%84%E4%BA%8B%23) `371.9K 🔥` `+76%`
1. [美国人正在逃离美国](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BA%BA%E6%AD%A3%E5%9C%A8%E9%80%83%E7%A6%BB%E7%BE%8E%E5%9B%BD%23) `312.4K 🔥` `+91%`
1. [严军发了一家四口照 (Yan Jun posted a photo of his family of four)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%86%9B%E5%8F%91%E4%BA%86%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%E7%85%A7%23) `307.8K 🔥` `+27%`
1. [疑似严浩翔妈妈发博](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%A6%88%E5%A6%88%E5%8F%91%E5%8D%9A%23) `304.4K 🔥` `+37%`
1. [Claude画的DeepSeek蓝胖鱼](https://s.weibo.com/weibo?q=%23Claude%E7%94%BB%E7%9A%84DeepSeek%E8%93%9D%E8%83%96%E9%B1%BC%23) `302.1K 🔥` `+29%`
1. [张雪回应820RR赛道熄火](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%9B%9E%E5%BA%94820RR%E8%B5%9B%E9%81%93%E7%86%84%E7%81%AB%23) `301.1K 🔥` `+27%`
1. [时隔五年我用AI复活了父亲](https://s.weibo.com/weibo?q=%23%E6%97%B6%E9%9A%94%E4%BA%94%E5%B9%B4%E6%88%91%E7%94%A8AI%E5%A4%8D%E6%B4%BB%E4%BA%86%E7%88%B6%E4%BA%B2%23) `300.3K 🔥` `+31%`
1. [用AI把我家猫养在了电脑上](https://s.weibo.com/weibo?q=%23%E7%94%A8AI%E6%8A%8A%E6%88%91%E5%AE%B6%E7%8C%AB%E5%85%BB%E5%9C%A8%E4%BA%86%E7%94%B5%E8%84%91%E4%B8%8A%23) `298.1K 🔥` `+33%`
1. [王鹤棣第一次情绪失控 (Wang Hedi lost control of his emotions for the first time)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `296.6K 🔥` `+23%`
1. [金价今年或跌回4000美元](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%BB%8A%E5%B9%B4%E6%88%96%E8%B7%8C%E5%9B%9E4000%E7%BE%8E%E5%85%83%23) `270.3K 🔥` `+120%`
1. [DeepSeek拟人 哇呀啧呜哇](https://s.weibo.com/weibo?q=%23DeepSeek%E6%8B%9F%E4%BA%BA%20%E5%93%87%E5%91%80%E5%95%A7%E5%91%9C%E5%93%87%23) `269.9K 🔥` `+101%`
1. [胖东来正式起诉博主惊梦人](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%AD%A3%E5%BC%8F%E8%B5%B7%E8%AF%89%E5%8D%9A%E4%B8%BB%E6%83%8A%E6%A2%A6%E4%BA%BA%23) `919.1K 🔥`
1. [西安上空现不明物持续一小时后消失 (Unidentified object appears in the sky over Xi'an and disappears after one hour)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%8A%E7%A9%BA%E7%8E%B0%E4%B8%8D%E6%98%8E%E7%89%A9%E6%8C%81%E7%BB%AD%E4%B8%80%E5%B0%8F%E6%97%B6%E5%90%8E%E6%B6%88%E5%A4%B1%23) `329.2K 🔥`
1. [湖人淘汰火箭](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E6%B7%98%E6%B1%B0%E7%81%AB%E7%AE%AD%23) `322.9K 🔥`
1. [有人为吃蜜雪9元圣代碗排队5小时 (Someone queued for 5 hours for a $9 Michelle sundae bowl)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E4%B8%BA%E5%90%83%E8%9C%9C%E9%9B%AA9%E5%85%83%E5%9C%A3%E4%BB%A3%E7%A2%97%E6%8E%92%E9%98%9F5%E5%B0%8F%E6%97%B6%23) `314.7K 🔥`
1. [鹿晗叫李小冉姐姐](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8F%AB%E6%9D%8E%E5%B0%8F%E5%86%89%E5%A7%90%E5%A7%90%23) `302.7K 🔥`
1. [杨幂脸上烫伤还没好](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%84%B8%E4%B8%8A%E7%83%AB%E4%BC%A4%E8%BF%98%E6%B2%A1%E5%A5%BD%23) `280.4K 🔥`
1. [小狗身体太软把主人弄得手忙脚乱的](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E8%BA%AB%E4%BD%93%E5%A4%AA%E8%BD%AF%E6%8A%8A%E4%B8%BB%E4%BA%BA%E5%BC%84%E5%BE%97%E6%89%8B%E5%BF%99%E8%84%9A%E4%B9%B1%E7%9A%84%23) `237.0K 🔥`
1. [曾沛慈团谁来了都得脱稿](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%A2%E8%B0%81%E6%9D%A5%E4%BA%86%E9%83%BD%E5%BE%97%E8%84%B1%E7%A8%BF%23) `154.0K 🔥`
1. [极氪月交付量创历史新高](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA%E6%9C%88%E4%BA%A4%E4%BB%98%E9%87%8F%E5%88%9B%E5%8E%86%E5%8F%B2%E6%96%B0%E9%AB%98%23) `151.4K 🔥`
1. [余华辅导儿子语文后考试不及格 (Yu Hua failed the exam after tutoring his son in Chinese)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E5%8D%8E%E8%BE%85%E5%AF%BC%E5%84%BF%E5%AD%90%E8%AF%AD%E6%96%87%E5%90%8E%E8%80%83%E8%AF%95%E4%B8%8D%E5%8F%8A%E6%A0%BC%23) `337.8K 🔥` `-32%`
1. [何炅回应王鹤棣情绪失控](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E5%9B%9E%E5%BA%94%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `334.4K 🔥` `-46%`
1. [江语晨 浪姐厕女一](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%20%E6%B5%AA%E5%A7%90%E5%8E%95%E5%A5%B3%E4%B8%80%23) `317.1K 🔥` `-26%`
1. [一个bug是bug 一堆bug能work](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AAbug%E6%98%AFbug%20%E4%B8%80%E5%A0%86bug%E8%83%BDwork%23) `214.2K 🔥` `-34%`
1. [戚薇也在嗑张凌赫田曦薇](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E4%B9%9F%E5%9C%A8%E5%97%91%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%23) `176.9K 🔥` `-46%`
1. [11岁女孩频繁呕吐确诊肾衰竭](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%A2%91%E7%B9%81%E5%91%95%E5%90%90%E7%A1%AE%E8%AF%8A%E8%82%BE%E8%A1%B0%E7%AB%AD%23) `154.2K 🔥` `-21%`
1. [日本战犯竟称侵华是为了管教兄弟 (Japanese war criminals claimed that they invaded China to discipline their brothers)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%88%98%E7%8A%AF%E7%AB%9F%E7%A7%B0%E4%BE%B5%E5%8D%8E%E6%98%AF%E4%B8%BA%E4%BA%86%E7%AE%A1%E6%95%99%E5%85%84%E5%BC%9F%23) `153.1K 🔥` `-37%`

Updated at 2026-05-02 16:09:27

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
