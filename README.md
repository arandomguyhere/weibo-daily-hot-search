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

1. [五公划区 (Five public districts)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%85%AC%E5%88%92%E5%8C%BA%23) `618.0K 🔥` `NEW`
1. [陈瑶回应九门霍仙姑下线](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E5%9B%9E%E5%BA%94%E4%B9%9D%E9%97%A8%E9%9C%8D%E4%BB%99%E5%A7%91%E4%B8%8B%E7%BA%BF%23) `516.9K 🔥` `NEW`
1. [清融给周兴哲演唱会送花篮](https://s.weibo.com/weibo?q=%23%E6%B8%85%E8%9E%8D%E7%BB%99%E5%91%A8%E5%85%B4%E5%93%B2%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%81%E8%8A%B1%E7%AF%AE%23) `332.3K 🔥` `NEW`
1. [时代少年团限定新发色](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E9%99%90%E5%AE%9A%E6%96%B0%E5%8F%91%E8%89%B2%23) `331.2K 🔥` `NEW`
1. [杨丞琳胖了6斤](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E4%B8%9E%E7%90%B3%E8%83%96%E4%BA%866%E6%96%A4%23) `330.7K 🔥` `NEW`
1. [送到你床上撕开快递员最丑陋的傲慢](https://s.weibo.com/weibo?q=%23%E9%80%81%E5%88%B0%E4%BD%A0%E5%BA%8A%E4%B8%8A%E6%92%95%E5%BC%80%E5%BF%AB%E9%80%92%E5%91%98%E6%9C%80%E4%B8%91%E9%99%8B%E7%9A%84%E5%82%B2%E6%85%A2%23) `329.5K 🔥` `NEW`
1. [方程豹7月销量超4万辆](https://s.weibo.com/weibo?q=%23%E6%96%B9%E7%A8%8B%E8%B1%B97%E6%9C%88%E9%94%80%E9%87%8F%E8%B6%854%E4%B8%87%E8%BE%86%23) `327.3K 🔥` `NEW`
1. [西班牙称5万移民几乎全部遣返](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%A7%B05%E4%B8%87%E7%A7%BB%E6%B0%91%E5%87%A0%E4%B9%8E%E5%85%A8%E9%83%A8%E9%81%A3%E8%BF%94%23) `325.8K 🔥` `NEW`
1. [被暑假工辅导女孩称家教太负责了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%9A%91%E5%81%87%E5%B7%A5%E8%BE%85%E5%AF%BC%E5%A5%B3%E5%AD%A9%E7%A7%B0%E5%AE%B6%E6%95%99%E5%A4%AA%E8%B4%9F%E8%B4%A3%E4%BA%86%23) `324.7K 🔥` `NEW`
1. [婚外试管原配称网友支持千金难换](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%AF%95%E7%AE%A1%E5%8E%9F%E9%85%8D%E7%A7%B0%E7%BD%91%E5%8F%8B%E6%94%AF%E6%8C%81%E5%8D%83%E9%87%91%E9%9A%BE%E6%8D%A2%23) `323.0K 🔥` `NEW`
1. [樊振东点赞解放军报 (Fan Zhendong likes PLA Daily)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%82%B9%E8%B5%9E%E8%A7%A3%E6%94%BE%E5%86%9B%E6%8A%A5%23) `321.2K 🔥` `NEW`
1. [王橹杰白发狼尾造型](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%99%BD%E5%8F%91%E7%8B%BC%E5%B0%BE%E9%80%A0%E5%9E%8B%23) `320.2K 🔥` `NEW`
1. [大使馆确认有中国公民遇雪崩失联](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BD%BF%E9%A6%86%E7%A1%AE%E8%AE%A4%E6%9C%89%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E9%81%87%E9%9B%AA%E5%B4%A9%E5%A4%B1%E8%81%94%23) `317.8K 🔥` `NEW`
1. [女子重病离世再婚丈夫索要彩礼金饰](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%87%8D%E7%97%85%E7%A6%BB%E4%B8%96%E5%86%8D%E5%A9%9A%E4%B8%88%E5%A4%AB%E7%B4%A2%E8%A6%81%E5%BD%A9%E7%A4%BC%E9%87%91%E9%A5%B0%23) `317.7K 🔥` `NEW`
1. [华尔街AI股神致歉](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%B0%94%E8%A1%97AI%E8%82%A1%E7%A5%9E%E8%87%B4%E6%AD%89%23) `311.2K 🔥` `NEW`
1. [中国潜艇伏击过程披露](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%BD%9C%E8%89%87%E4%BC%8F%E5%87%BB%E8%BF%87%E7%A8%8B%E6%8A%AB%E9%9C%B2%23) `309.2K 🔥` `NEW`
1. [集中供冷是什么神仙体验](https://s.weibo.com/weibo?q=%23%E9%9B%86%E4%B8%AD%E4%BE%9B%E5%86%B7%E6%98%AF%E4%BB%80%E4%B9%88%E7%A5%9E%E4%BB%99%E4%BD%93%E9%AA%8C%23) `307.6K 🔥` `NEW`
1. [王承渲终于回来了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%89%BF%E6%B8%B2%E7%BB%88%E4%BA%8E%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `304.5K 🔥` `NEW`
1. [母女坠楼小区消防通道仍被堵](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E5%A5%B3%E5%9D%A0%E6%A5%BC%E5%B0%8F%E5%8C%BA%E6%B6%88%E9%98%B2%E9%80%9A%E9%81%93%E4%BB%8D%E8%A2%AB%E5%A0%B5%23) `266.0K 🔥` `NEW`
1. [董璇也怀疑周也是自己女儿](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E4%B9%9F%E6%80%80%E7%96%91%E5%91%A8%E4%B9%9F%E6%98%AF%E8%87%AA%E5%B7%B1%E5%A5%B3%E5%84%BF%23) `256.0K 🔥` `NEW`
1. [杭州出现罕见雨幡 (Rare rain flags appear in Hangzhou)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%87%BA%E7%8E%B0%E7%BD%95%E8%A7%81%E9%9B%A8%E5%B9%A1%23) `219.4K 🔥` `NEW`
1. [39岁女子乳腺癌复发卧床难自理](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E5%A5%B3%E5%AD%90%E4%B9%B3%E8%85%BA%E7%99%8C%E5%A4%8D%E5%8F%91%E5%8D%A7%E5%BA%8A%E9%9A%BE%E8%87%AA%E7%90%86%23) `200.7K 🔥` `NEW`
1. [女儿回应父亲在美被绑架中枪身亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E5%9B%9E%E5%BA%94%E7%88%B6%E4%BA%B2%E5%9C%A8%E7%BE%8E%E8%A2%AB%E7%BB%91%E6%9E%B6%E4%B8%AD%E6%9E%AA%E8%BA%AB%E4%BA%A1%23) `195.3K 🔥` `NEW`
1. [拾荒老人被打半月后家属再发声](https://s.weibo.com/weibo?q=%23%E6%8B%BE%E8%8D%92%E8%80%81%E4%BA%BA%E8%A2%AB%E6%89%93%E5%8D%8A%E6%9C%88%E5%90%8E%E5%AE%B6%E5%B1%9E%E5%86%8D%E5%8F%91%E5%A3%B0%23) `195.2K 🔥` `NEW`
1. [陈哲远自曝上朝戏洒水太难走](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E8%87%AA%E6%9B%9D%E4%B8%8A%E6%9C%9D%E6%88%8F%E6%B4%92%E6%B0%B4%E5%A4%AA%E9%9A%BE%E8%B5%B0%23) `195.2K 🔥` `NEW`
1. [登陆少年回应5o停播](https://s.weibo.com/weibo?q=%23%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4%E5%9B%9E%E5%BA%945o%E5%81%9C%E6%92%AD%23) `194.8K 🔥` `NEW`
1. [王橹杰陈浚铭双人选曲虚拟](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%99%88%E6%B5%9A%E9%93%AD%E5%8F%8C%E4%BA%BA%E9%80%89%E6%9B%B2%E8%99%9A%E6%8B%9F%23) `193.0K 🔥` `NEW`
1. [TF四代新歌MV预告](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E6%96%B0%E6%AD%8CMV%E9%A2%84%E5%91%8A%23) `188.9K 🔥` `NEW`
1. [请放过喜羊羊吧](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%94%BE%E8%BF%87%E5%96%9C%E7%BE%8A%E7%BE%8A%E5%90%A7%23) `187.2K 🔥` `NEW`
1. [赵心童轰出单杆139分](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E8%BD%B0%E5%87%BA%E5%8D%95%E6%9D%86139%E5%88%86%23) `186.2K 🔥` `NEW`
1. [央视曝高收低租骗局 (CCTV exposes high-charge, low-rent scam)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E9%AB%98%E6%94%B6%E4%BD%8E%E7%A7%9F%E9%AA%97%E5%B1%80%23) `185.1K 🔥` `NEW`
1. [出生时被抱错两女子错换37年人生 (Two women who were carried in the wrong arms at birth exchanged 37 years of their lives.)](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%94%9F%E6%97%B6%E8%A2%AB%E6%8A%B1%E9%94%99%E4%B8%A4%E5%A5%B3%E5%AD%90%E9%94%99%E6%8D%A237%E5%B9%B4%E4%BA%BA%E7%94%9F%23) `1.7M 🔥` `+54%`
1. [奥德赛 (Odyssey)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `1.0M 🔥` `+41%`
1. [八一建军节快乐](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%B8%80%E5%BB%BA%E5%86%9B%E8%8A%82%E5%BF%AB%E4%B9%90%23) `762.8K 🔥` `+99%`
1. [找对象的尽头是初高中同学](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%B0%BD%E5%A4%B4%E6%98%AF%E5%88%9D%E9%AB%98%E4%B8%AD%E5%90%8C%E5%AD%A6%23) `745.0K 🔥` `+29%`
1. [登机柜台出现了好小众词汇](https://s.weibo.com/weibo?q=%23%E7%99%BB%E6%9C%BA%E6%9F%9C%E5%8F%B0%E5%87%BA%E7%8E%B0%E4%BA%86%E5%A5%BD%E5%B0%8F%E4%BC%97%E8%AF%8D%E6%B1%87%23) `582.7K 🔥` `+35%`
1. [美年达小黄人新包装官宣联动 (Mirinda Minions new packaging official announcement linkage)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%B9%B4%E8%BE%BE%E5%B0%8F%E9%BB%84%E4%BA%BA%E6%96%B0%E5%8C%85%E8%A3%85%E5%AE%98%E5%AE%A3%E8%81%94%E5%8A%A8%23) `539.9K 🔥` `+27%`
1. [5万人游进西班牙后4.8万人游回去了](https://s.weibo.com/weibo?q=%235%E4%B8%87%E4%BA%BA%E6%B8%B8%E8%BF%9B%E8%A5%BF%E7%8F%AD%E7%89%99%E5%90%8E4.8%E4%B8%87%E4%BA%BA%E6%B8%B8%E5%9B%9E%E5%8E%BB%E4%BA%86%23) `305.4K 🔥` `+128%`
1. [DeepSeekV4Flash 便宜](https://s.weibo.com/weibo?q=%23DeepSeekV4Flash%20%E4%BE%BF%E5%AE%9C%23) `193.2K 🔥` `+49%`
1. [黄多多晒与弟弟妹妹合影](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E6%99%92%E4%B8%8E%E5%BC%9F%E5%BC%9F%E5%A6%B9%E5%A6%B9%E5%90%88%E5%BD%B1%23) `328.4K 🔥`
1. [房主任改变不了女儿重复自己的命运](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E6%94%B9%E5%8F%98%E4%B8%8D%E4%BA%86%E5%A5%B3%E5%84%BF%E9%87%8D%E5%A4%8D%E8%87%AA%E5%B7%B1%E7%9A%84%E5%91%BD%E8%BF%90%23) `315.7K 🔥`
1. [C罗回应被AI评为史上最出名运动员](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%9B%9E%E5%BA%94%E8%A2%ABAI%E8%AF%84%E4%B8%BA%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%87%BA%E5%90%8D%E8%BF%90%E5%8A%A8%E5%91%98%23) `314.7K 🔥`
1. [外婆朋友圈背景是床边一面墙](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%A9%86%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%83%8C%E6%99%AF%E6%98%AF%E5%BA%8A%E8%BE%B9%E4%B8%80%E9%9D%A2%E5%A2%99%23) `227.1K 🔥`
1. [ACT对战北京WBG (ACT vs. Beijing WBG)](https://s.weibo.com/weibo?q=%23ACT%E5%AF%B9%E6%88%98%E5%8C%97%E4%BA%ACWBG%23) `188.8K 🔥`
1. [逐玉作者道歉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E4%BD%9C%E8%80%85%E9%81%93%E6%AD%89%23) `413.9K 🔥` `-44%`
1. [女子住酒店退房搬空用品只剩电视](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%8F%E9%85%92%E5%BA%97%E9%80%80%E6%88%BF%E6%90%AC%E7%A9%BA%E7%94%A8%E5%93%81%E5%8F%AA%E5%89%A9%E7%94%B5%E8%A7%86%23) `332.9K 🔥` `-58%`
1. [奇瑞七月销量276820辆](https://s.weibo.com/weibo?q=%23%E5%A5%87%E7%91%9E%E4%B8%83%E6%9C%88%E9%94%80%E9%87%8F276820%E8%BE%86%23) `325.1K 🔥` `-24%`
1. [陈瑶霍仙姑下线了](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E9%9C%8D%E4%BB%99%E5%A7%91%E4%B8%8B%E7%BA%BF%E4%BA%86%23) `319.0K 🔥` `-38%`
1. [杭州暴雨](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%9A%B4%E9%9B%A8%23) `232.2K 🔥` `-47%`
1. [杨丞琳回应头发忽长忽短](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E4%B8%9E%E7%90%B3%E5%9B%9E%E5%BA%94%E5%A4%B4%E5%8F%91%E5%BF%BD%E9%95%BF%E5%BF%BD%E7%9F%AD%23) `217.2K 🔥` `-47%`

Updated at 2026-08-01 21:48:49

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
