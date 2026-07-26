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

1. [群星闪耀时撤档 (Canceling when the stars shine)](https://s.weibo.com/weibo?q=%23%E7%BE%A4%E6%98%9F%E9%97%AA%E8%80%80%E6%97%B6%E6%92%A4%E6%A1%A3%23) `1.8M 🔥` `NEW`
1. [王嘉尔握麦是歌手持剑是冠军](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E6%8F%A1%E9%BA%A6%E6%98%AF%E6%AD%8C%E6%89%8B%E6%8C%81%E5%89%91%E6%98%AF%E5%86%A0%E5%86%9B%23) `1.2M 🔥` `NEW`
1. [迪丽热巴名字长还有这好处](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%90%8D%E5%AD%97%E9%95%BF%E8%BF%98%E6%9C%89%E8%BF%99%E5%A5%BD%E5%A4%84%23) `406.8K 🔥` `NEW`
1. [昆凌是昆凌的姓](https://s.weibo.com/weibo?q=%23%E6%98%86%E5%87%8C%E6%98%AF%E6%98%86%E5%87%8C%E7%9A%84%E5%A7%93%23) `405.3K 🔥` `NEW`
1. [美素佳儿最新回应](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%B4%A0%E4%BD%B3%E5%84%BF%E6%9C%80%E6%96%B0%E5%9B%9E%E5%BA%94%23) `403.7K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `402.5K 🔥` `NEW`
1. [鹿晗勋章全场大合唱](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8B%8B%E7%AB%A0%E5%85%A8%E5%9C%BA%E5%A4%A7%E5%90%88%E5%94%B1%23) `399.0K 🔥` `NEW`
1. [张靓颖张天爱看薛之谦演唱会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9D%93%E9%A2%96%E5%BC%A0%E5%A4%A9%E7%88%B1%E7%9C%8B%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `328.3K 🔥` `NEW`
1. [35岁女子偷转准婆婆7000元获刑](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%A5%B3%E5%AD%90%E5%81%B7%E8%BD%AC%E5%87%86%E5%A9%86%E5%A9%867000%E5%85%83%E8%8E%B7%E5%88%91%23) `317.7K 🔥` `NEW`
1. [川渝包揽全国高温榜前九](https://s.weibo.com/weibo?q=%23%E5%B7%9D%E6%B8%9D%E5%8C%85%E6%8F%BD%E5%85%A8%E5%9B%BD%E9%AB%98%E6%B8%A9%E6%A6%9C%E5%89%8D%E4%B9%9D%23) `303.3K 🔥` `NEW`
1. [侯明昊成都演唱会 (Hou Minghao Chengdu Concert)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%88%90%E9%83%BD%E6%BC%94%E5%94%B1%E4%BC%9A%23) `167.0K 🔥` `NEW`
1. [甘肃渭源山洪](https://s.weibo.com/weibo?q=%23%E7%94%98%E8%82%83%E6%B8%AD%E6%BA%90%E5%B1%B1%E6%B4%AA%23) `158.6K 🔥` `NEW`
1. [胖东来售卖的西瓜上为何有圆圈](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%94%AE%E5%8D%96%E7%9A%84%E8%A5%BF%E7%93%9C%E4%B8%8A%E4%B8%BA%E4%BD%95%E6%9C%89%E5%9C%86%E5%9C%88%23) `150.6K 🔥` `NEW`
1. [百花杀番外](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E7%95%AA%E5%A4%96%23) `147.8K 🔥` `NEW`
1. [建业地产25亿卖掉只有河南](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E4%B8%9A%E5%9C%B0%E4%BA%A725%E4%BA%BF%E5%8D%96%E6%8E%89%E5%8F%AA%E6%9C%89%E6%B2%B3%E5%8D%97%23) `147.6K 🔥` `NEW`
1. [GPT一滴token都没了](https://s.weibo.com/weibo?q=%23GPT%E4%B8%80%E6%BB%B4token%E9%83%BD%E6%B2%A1%E4%BA%86%23) `144.3K 🔥` `NEW`
1. [新产业跑出中国加速度 (New industries are accelerating out of China)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%BA%A7%E4%B8%9A%E8%B7%91%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `1.2M 🔥` `+77%`
1. [原来请假是不需要理由的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%AF%B7%E5%81%87%E6%98%AF%E4%B8%8D%E9%9C%80%E8%A6%81%E7%90%86%E7%94%B1%E7%9A%84%23) `1.1M 🔥` `+111%`
1. [杭州已经发展成这样了吗 (Has Hangzhou developed like this?)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%B7%B2%E7%BB%8F%E5%8F%91%E5%B1%95%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%E5%90%97%23) `1.0M 🔥` `+72%`
1. [不要长期向AI倾泻心事](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E9%95%BF%E6%9C%9F%E5%90%91AI%E5%80%BE%E6%B3%BB%E5%BF%83%E4%BA%8B%23) `854.0K 🔥` `+56%`
1. [终于明白职场没有朋友的含义了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%98%8E%E7%99%BD%E8%81%8C%E5%9C%BA%E6%B2%A1%E6%9C%89%E6%9C%8B%E5%8F%8B%E7%9A%84%E5%90%AB%E4%B9%89%E4%BA%86%23) `510.3K 🔥` `+43%`
1. [长鑫上市 合肥能赚多少](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E4%B8%8A%E5%B8%82%20%E5%90%88%E8%82%A5%E8%83%BD%E8%B5%9A%E5%A4%9A%E5%B0%91%23) `406.1K 🔥` `+23%`
1. [王自如谈罗永浩怒斥电视机厂商 (Wang Ziru talks about Luo Yonghao angrily criticizing TV manufacturers)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%87%AA%E5%A6%82%E8%B0%88%E7%BD%97%E6%B0%B8%E6%B5%A9%E6%80%92%E6%96%A5%E7%94%B5%E8%A7%86%E6%9C%BA%E5%8E%82%E5%95%86%23) `323.6K 🔥` `+79%`
1. [百万粉丝女网红贩卖私密视频被逮捕](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%B8%87%E7%B2%89%E4%B8%9D%E5%A5%B3%E7%BD%91%E7%BA%A2%E8%B4%A9%E5%8D%96%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91%E8%A2%AB%E9%80%AE%E6%8D%95%23) `1.3M 🔥`
1. [鞠婧祎让粉丝进酒店看出妆](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%AE%A9%E7%B2%89%E4%B8%9D%E8%BF%9B%E9%85%92%E5%BA%97%E7%9C%8B%E5%87%BA%E5%A6%86%23) `402.0K 🔥`
1. [演员王建隆去世 (Actor Wang Jianlong passes away)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%8E%8B%E5%BB%BA%E9%9A%86%E5%8E%BB%E4%B8%96%23) `400.7K 🔥`
1. [晚饭后最好的耗糖运动](https://s.weibo.com/weibo?q=%23%E6%99%9A%E9%A5%AD%E5%90%8E%E6%9C%80%E5%A5%BD%E7%9A%84%E8%80%97%E7%B3%96%E8%BF%90%E5%8A%A8%23) `399.6K 🔥`
1. [花二十多万买了个48平的海景房](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E4%BA%8C%E5%8D%81%E5%A4%9A%E4%B8%87%E4%B9%B0%E4%BA%86%E4%B8%AA48%E5%B9%B3%E7%9A%84%E6%B5%B7%E6%99%AF%E6%88%BF%23) `304.6K 🔥`
1. [鹿晗粉碎热搜词条](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%B2%89%E7%A2%8E%E7%83%AD%E6%90%9C%E8%AF%8D%E6%9D%A1%23) `296.4K 🔥`
1. [曝刘宇宁曾自称是87年的](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E5%AE%87%E5%AE%81%E6%9B%BE%E8%87%AA%E7%A7%B0%E6%98%AF87%E5%B9%B4%E7%9A%84%23) `282.5K 🔥`
1. [扣扣搜搜却花了很多钱](https://s.weibo.com/weibo?q=%23%E6%89%A3%E6%89%A3%E6%90%9C%E6%90%9C%E5%8D%B4%E8%8A%B1%E4%BA%86%E5%BE%88%E5%A4%9A%E9%92%B1%23) `280.7K 🔥`
1. [cp福州](https://s.weibo.com/weibo?q=%23cp%E7%A6%8F%E5%B7%9E%23) `274.0K 🔥`
1. [林瀚强吻晚晚](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%80%9A%E5%BC%BA%E5%90%BB%E6%99%9A%E6%99%9A%23) `229.8K 🔥`
1. [甘肃省委书记省长赶赴山洪现场 (Gansu Provincial Party Committee Secretary and Governor rushed to the scene of the flash flood)](https://s.weibo.com/weibo?q=%23%E7%94%98%E8%82%83%E7%9C%81%E5%A7%94%E4%B9%A6%E8%AE%B0%E7%9C%81%E9%95%BF%E8%B5%B6%E8%B5%B4%E5%B1%B1%E6%B4%AA%E7%8E%B0%E5%9C%BA%23) `196.1K 🔥`
1. [比邱淑贞女儿还像邱淑贞的女警](https://s.weibo.com/weibo?q=%23%E6%AF%94%E9%82%B1%E6%B7%91%E8%B4%9E%E5%A5%B3%E5%84%BF%E8%BF%98%E5%83%8F%E9%82%B1%E6%B7%91%E8%B4%9E%E7%9A%84%E5%A5%B3%E8%AD%A6%23) `195.3K 🔥`
1. [考公人发现豆包的神奇用法](https://s.weibo.com/weibo?q=%23%E8%80%83%E5%85%AC%E4%BA%BA%E5%8F%91%E7%8E%B0%E8%B1%86%E5%8C%85%E7%9A%84%E7%A5%9E%E5%A5%87%E7%94%A8%E6%B3%95%23) `172.5K 🔥`
1. [打假车企贴牌扬声器](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%81%87%E8%BD%A6%E4%BC%81%E8%B4%B4%E7%89%8C%E6%89%AC%E5%A3%B0%E5%99%A8%23) `146.4K 🔥`
1. [四川九寨沟景区泥石流 (Debris flow in Jiuzhaigou Scenic Area, Sichuan)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E4%B9%9D%E5%AF%A8%E6%B2%9F%E6%99%AF%E5%8C%BA%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `432.7K 🔥` `-51%`
1. [张凌赫回复付辛博](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%A4%8D%E4%BB%98%E8%BE%9B%E5%8D%9A%23) `248.0K 🔥` `-48%`
1. [原来小区是这样命名的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%B0%8F%E5%8C%BA%E6%98%AF%E8%BF%99%E6%A0%B7%E5%91%BD%E5%90%8D%E7%9A%84%23) `213.4K 🔥` `-34%`
1. [美国发生AI失控事故](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8F%91%E7%94%9FAI%E5%A4%B1%E6%8E%A7%E4%BA%8B%E6%95%85%23) `207.9K 🔥` `-25%`
1. [孟子义还有五部待播作品](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E8%BF%98%E6%9C%89%E4%BA%94%E9%83%A8%E5%BE%85%E6%92%AD%E4%BD%9C%E5%93%81%23) `207.9K 🔥` `-46%`
1. [AL对战BLG](https://s.weibo.com/weibo?q=%23AL%E5%AF%B9%E6%88%98BLG%23) `207.8K 🔥` `-47%`
1. [王一博开香槟憋着坏](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%BC%80%E9%A6%99%E6%A7%9F%E6%86%8B%E7%9D%80%E5%9D%8F%23) `199.5K 🔥` `-37%`
1. [王橹杰跳whiplash (Wang Lujie dances whiplash)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%B7%B3whiplash%23) `194.1K 🔥` `-39%`
1. [每次发完朋友圈都特别尴尬 (I feel very embarrassed every time I post it on Moments)](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E6%AC%A1%E5%8F%91%E5%AE%8C%E6%9C%8B%E5%8F%8B%E5%9C%88%E9%83%BD%E7%89%B9%E5%88%AB%E5%B0%B4%E5%B0%AC%23) `164.6K 🔥` `-25%`
1. [张凌赫用了粉丝做的表情包](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%A8%E4%BA%86%E7%B2%89%E4%B8%9D%E5%81%9A%E7%9A%84%E8%A1%A8%E6%83%85%E5%8C%85%23) `164.2K 🔥` `-53%`
1. [鹭卓赵一博卓沅缺席十个勤天演唱会 (Lu Zhuo, Zhao Yibo and Zhuo Yuan were absent from Ten Qintian Concerts)](https://s.weibo.com/weibo?q=%23%E9%B9%AD%E5%8D%93%E8%B5%B5%E4%B8%80%E5%8D%9A%E5%8D%93%E6%B2%85%E7%BC%BA%E5%B8%AD%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E6%BC%94%E5%94%B1%E4%BC%9A%23) `160.6K 🔥` `-54%`
1. [金鹤龙晒迪丽热巴钰珑](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%A4%E9%BE%99%E6%99%92%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%92%B0%E7%8F%91%23) `157.7K 🔥` `-60%`
1. [百花杀大结局 (The ending of Hundred Flowers Killing)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E5%A4%A7%E7%BB%93%E5%B1%80%23) `153.3K 🔥` `-44%`
1. [BLG战胜AL](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CAL%23) `149.0K 🔥` `-55%`

Updated at 2026-07-26 23:44:30

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
