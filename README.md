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

1. [避孕药 血栓](https://s.weibo.com/weibo?q=%23%E9%81%BF%E5%AD%95%E8%8D%AF%20%E8%A1%80%E6%A0%93%23) `1.2M 🔥` `NEW`
1. [吉隆泥石流发生23分钟后航拍首次公开](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%8F%91%E7%94%9F23%E5%88%86%E9%92%9F%E5%90%8E%E8%88%AA%E6%8B%8D%E9%A6%96%E6%AC%A1%E5%85%AC%E5%BC%80%23) `834.3K 🔥` `NEW`
1. [青春华章](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E5%8D%8E%E7%AB%A0%23) `675.3K 🔥` `NEW`
1. [运动手环 皮炎](https://s.weibo.com/weibo?q=%23%E8%BF%90%E5%8A%A8%E6%89%8B%E7%8E%AF%20%E7%9A%AE%E7%82%8E%23) `578.9K 🔥` `NEW`
1. [才知道陈妍希儿子名字陈睦辰](https://s.weibo.com/weibo?q=%23%E6%89%8D%E7%9F%A5%E9%81%93%E9%99%88%E5%A6%8D%E5%B8%8C%E5%84%BF%E5%AD%90%E5%90%8D%E5%AD%97%E9%99%88%E7%9D%A6%E8%BE%B0%23) `556.1K 🔥` `NEW`
1. [生逢其时看得我又哭又笑](https://s.weibo.com/weibo?q=%23%E7%94%9F%E9%80%A2%E5%85%B6%E6%97%B6%E7%9C%8B%E5%BE%97%E6%88%91%E5%8F%88%E5%93%AD%E5%8F%88%E7%AC%91%23) `545.8K 🔥` `NEW`
1. [披荆斩棘直播](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `426.9K 🔥` `NEW`
1. [樊振东3比0鲁伊斯](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C3%E6%AF%940%E9%B2%81%E4%BC%8A%E6%96%AF%23) `300.1K 🔥` `NEW`
1. [王橹杰开售一分钟销售额800万](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%BC%80%E5%94%AE%E4%B8%80%E5%88%86%E9%92%9F%E9%94%80%E5%94%AE%E9%A2%9D800%E4%B8%87%23) `297.7K 🔥` `NEW`
1. [尼泊尔获救中国公民讲述被救过程](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E8%8E%B7%E6%95%91%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E8%AE%B2%E8%BF%B0%E8%A2%AB%E6%95%91%E8%BF%87%E7%A8%8B%23) `295.4K 🔥` `NEW`
1. [刘雯井柏然是姐夫而不是嫂子](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E4%BA%95%E6%9F%8F%E7%84%B6%E6%98%AF%E5%A7%90%E5%A4%AB%E8%80%8C%E4%B8%8D%E6%98%AF%E5%AB%82%E5%AD%90%23) `294.4K 🔥` `NEW`
1. [小县城的房子买了没人住](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8E%BF%E5%9F%8E%E7%9A%84%E6%88%BF%E5%AD%90%E4%B9%B0%E4%BA%86%E6%B2%A1%E4%BA%BA%E4%BD%8F%23) `292.7K 🔥` `NEW`
1. [iG战胜TES](https://s.weibo.com/weibo?q=%23iG%E6%88%98%E8%83%9CTES%23) `291.0K 🔥` `NEW`
1. [樊振东vs鲁伊斯](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9Cvs%E9%B2%81%E4%BC%8A%E6%96%AF%23) `287.3K 🔥` `NEW`
1. [苹果折叠手机价格](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%8A%98%E5%8F%A0%E6%89%8B%E6%9C%BA%E4%BB%B7%E6%A0%BC%23) `269.1K 🔥` `NEW`
1. [美林肯号水兵登陆芭提雅彻底放飞](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%9E%97%E8%82%AF%E5%8F%B7%E6%B0%B4%E5%85%B5%E7%99%BB%E9%99%86%E8%8A%AD%E6%8F%90%E9%9B%85%E5%BD%BB%E5%BA%95%E6%94%BE%E9%A3%9E%23) `267.4K 🔥` `NEW`
1. [杭州给井柏然热得没招了](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%BB%99%E4%BA%95%E6%9F%8F%E7%84%B6%E7%83%AD%E5%BE%97%E6%B2%A1%E6%8B%9B%E4%BA%86%23) `261.1K 🔥` `NEW`
1. [上海女导购薅了公司72万余元](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A5%B3%E5%AF%BC%E8%B4%AD%E8%96%85%E4%BA%86%E5%85%AC%E5%8F%B872%E4%B8%87%E4%BD%99%E5%85%83%23) `253.8K 🔥` `NEW`
1. [超级夏晚给到一个夯](https://s.weibo.com/weibo?q=%23%E8%B6%85%E7%BA%A7%E5%A4%8F%E6%99%9A%E7%BB%99%E5%88%B0%E4%B8%80%E4%B8%AA%E5%A4%AF%23) `244.2K 🔥` `NEW`
1. [丁禹兮音乐节](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E9%9F%B3%E4%B9%90%E8%8A%82%23) `242.3K 🔥` `NEW`
1. [38岁女子高速边慢跑被撞身亡](https://s.weibo.com/weibo?q=%2338%E5%B2%81%E5%A5%B3%E5%AD%90%E9%AB%98%E9%80%9F%E8%BE%B9%E6%85%A2%E8%B7%91%E8%A2%AB%E6%92%9E%E8%BA%AB%E4%BA%A1%23) `235.2K 🔥` `NEW`
1. [天下过客大事很妙](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E4%B8%8B%E8%BF%87%E5%AE%A2%E5%A4%A7%E4%BA%8B%E5%BE%88%E5%A6%99%23) `232.9K 🔥` `NEW`
1. [AI绘画群体用画师作品嘲讽画师](https://s.weibo.com/weibo?q=%23AI%E7%BB%98%E7%94%BB%E7%BE%A4%E4%BD%93%E7%94%A8%E7%94%BB%E5%B8%88%E4%BD%9C%E5%93%81%E5%98%B2%E8%AE%BD%E7%94%BB%E5%B8%88%23) `229.7K 🔥` `NEW`
1. [颜安队长秀第一](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E5%AE%89%E9%98%9F%E9%95%BF%E7%A7%80%E7%AC%AC%E4%B8%80%23) `227.2K 🔥` `NEW`
1. [每天10分钟一个月把肝脏养回来](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A910%E5%88%86%E9%92%9F%E4%B8%80%E4%B8%AA%E6%9C%88%E6%8A%8A%E8%82%9D%E8%84%8F%E5%85%BB%E5%9B%9E%E6%9D%A5%23) `227.2K 🔥` `NEW`
1. [美汽车业协会促国会永久禁中国车](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%B1%BD%E8%BD%A6%E4%B8%9A%E5%8D%8F%E4%BC%9A%E4%BF%83%E5%9B%BD%E4%BC%9A%E6%B0%B8%E4%B9%85%E7%A6%81%E4%B8%AD%E5%9B%BD%E8%BD%A6%23) `226.4K 🔥` `NEW`
1. [虞书欣黑丝尖高跟熟女感](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%BB%91%E4%B8%9D%E5%B0%96%E9%AB%98%E8%B7%9F%E7%86%9F%E5%A5%B3%E6%84%9F%23) `225.8K 🔥` `NEW`
1. [学中文日本人求助帖火了](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E4%B8%AD%E6%96%87%E6%97%A5%E6%9C%AC%E4%BA%BA%E6%B1%82%E5%8A%A9%E5%B8%96%E7%81%AB%E4%BA%86%23) `225.3K 🔥` `NEW`
1. [房主任进急诊还在被女儿骂](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E8%BF%9B%E6%80%A5%E8%AF%8A%E8%BF%98%E5%9C%A8%E8%A2%AB%E5%A5%B3%E5%84%BF%E9%AA%82%23) `224.0K 🔥` `NEW`
1. [iG晋级LPL败者组半决赛](https://s.weibo.com/weibo?q=%23iG%E6%99%8B%E7%BA%A7LPL%E8%B4%A5%E8%80%85%E7%BB%84%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `223.0K 🔥` `NEW`
1. [曾辉张卓尔大闹披哥](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E5%BC%A0%E5%8D%93%E5%B0%94%E5%A4%A7%E9%97%B9%E6%8A%AB%E5%93%A5%23) `222.5K 🔥` `NEW`
1. [王子奇新剧被关晓彤坑惨了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E5%A5%87%E6%96%B0%E5%89%A7%E8%A2%AB%E5%85%B3%E6%99%93%E5%BD%A4%E5%9D%91%E6%83%A8%E4%BA%86%23) `221.8K 🔥` `NEW`
1. [曹骏耳返两次没声音的原因](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E8%80%B3%E8%BF%94%E4%B8%A4%E6%AC%A1%E6%B2%A1%E5%A3%B0%E9%9F%B3%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `221.3K 🔥` `NEW`
1. [张雪机车德比斯第一回合季军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%BE%B7%E6%AF%94%E6%96%AF%E7%AC%AC%E4%B8%80%E5%9B%9E%E5%90%88%E5%AD%A3%E5%86%9B%23) `220.8K 🔥` `NEW`
1. [中级财管](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BA%A7%E8%B4%A2%E7%AE%A1%23) `220.3K 🔥` `NEW`
1. [广州大家乐一门店多人餐后高烧腹泻](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%A4%A7%E5%AE%B6%E4%B9%90%E4%B8%80%E9%97%A8%E5%BA%97%E5%A4%9A%E4%BA%BA%E9%A4%90%E5%90%8E%E9%AB%98%E7%83%A7%E8%85%B9%E6%B3%BB%23) `217.5K 🔥` `NEW`
1. [鲜花 各唱各的](https://s.weibo.com/weibo?q=%23%E9%B2%9C%E8%8A%B1%20%E5%90%84%E5%94%B1%E5%90%84%E7%9A%84%23) `217.0K 🔥` `NEW`
1. [未来五年医保改革划下这些民生重点](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A5%E4%BA%94%E5%B9%B4%E5%8C%BB%E4%BF%9D%E6%94%B9%E9%9D%A9%E5%88%92%E4%B8%8B%E8%BF%99%E4%BA%9B%E6%B0%91%E7%94%9F%E9%87%8D%E7%82%B9%23) `210.9K 🔥` `NEW`
1. [普京宣布停止打击基辅3天](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E5%AE%A3%E5%B8%83%E5%81%9C%E6%AD%A2%E6%89%93%E5%87%BB%E5%9F%BA%E8%BE%853%E5%A4%A9%23) `203.8K 🔥` `NEW`
1. [无人驾驶冲击出租车司机饭碗](https://s.weibo.com/weibo?q=%23%E6%97%A0%E4%BA%BA%E9%A9%BE%E9%A9%B6%E5%86%B2%E5%87%BB%E5%87%BA%E7%A7%9F%E8%BD%A6%E5%8F%B8%E6%9C%BA%E9%A5%AD%E7%A2%97%23) `202.4K 🔥` `NEW`
1. [女子停捐不到一个月被催捐](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%81%9C%E6%8D%90%E4%B8%8D%E5%88%B0%E4%B8%80%E4%B8%AA%E6%9C%88%E8%A2%AB%E5%82%AC%E6%8D%90%23) `264.5K 🔥` `+36%`
1. [安静公主下沉口碑](https://s.weibo.com/weibo?q=%23%E5%AE%89%E9%9D%99%E5%85%AC%E4%B8%BB%E4%B8%8B%E6%B2%89%E5%8F%A3%E7%A2%91%23) `224.5K 🔥`
1. [张雅琪被花少8剪掉了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E8%A2%AB%E8%8A%B1%E5%B0%918%E5%89%AA%E6%8E%89%E4%BA%86%23) `645.7K 🔥` `-43%`
1. [女子吃避孕药后久坐旅游患肺栓塞](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%83%E9%81%BF%E5%AD%95%E8%8D%AF%E5%90%8E%E4%B9%85%E5%9D%90%E6%97%85%E6%B8%B8%E6%82%A3%E8%82%BA%E6%A0%93%E5%A1%9E%23) `304.6K 🔥` `-43%`
1. [第一批戴运动手环的受害者出现了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E6%88%B4%E8%BF%90%E5%8A%A8%E6%89%8B%E7%8E%AF%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `300.6K 🔥` `-74%`
1. [剧本杀 色情服务](https://s.weibo.com/weibo?q=%23%E5%89%A7%E6%9C%AC%E6%9D%80%20%E8%89%B2%E6%83%85%E6%9C%8D%E5%8A%A1%23) `298.4K 🔥` `-24%`
1. [羽衣甘蓝 农药](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E8%A1%A3%E7%94%98%E8%93%9D%20%E5%86%9C%E8%8D%AF%23) `252.0K 🔥` `-88%`
1. [运营商晒iPhone18售价](https://s.weibo.com/weibo?q=%23%E8%BF%90%E8%90%A5%E5%95%86%E6%99%92iPhone18%E5%94%AE%E4%BB%B7%23) `248.0K 🔥` `-60%`
1. [刘雯 避嫌](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%20%E9%81%BF%E5%AB%8C%23) `229.6K 🔥` `-41%`
1. [设计师称中国客厅已失去意义](https://s.weibo.com/weibo?q=%23%E8%AE%BE%E8%AE%A1%E5%B8%88%E7%A7%B0%E4%B8%AD%E5%9B%BD%E5%AE%A2%E5%8E%85%E5%B7%B2%E5%A4%B1%E5%8E%BB%E6%84%8F%E4%B9%89%23) `206.9K 🔥` `-73%`

Updated at 2026-09-05 20:57:23

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
