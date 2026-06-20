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

1. [主裁判抽筋了 (The referee has cramps)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A3%81%E5%88%A4%E6%8A%BD%E7%AD%8B%E4%BA%86%23) `1.2M 🔥` `NEW`
1. [耳帝说张远声音与唱功够不上是奇观](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%E8%AF%B4%E5%BC%A0%E8%BF%9C%E5%A3%B0%E9%9F%B3%E4%B8%8E%E5%94%B1%E5%8A%9F%E5%A4%9F%E4%B8%8D%E4%B8%8A%E6%98%AF%E5%A5%87%E8%A7%82%23) `608.5K 🔥` `NEW`
1. [苏格兰vs摩洛哥](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%A0%BC%E5%85%B0vs%E6%91%A9%E6%B4%9B%E5%93%A5%23) `387.9K 🔥` `NEW`
1. [澳大利亚乌龙球](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E4%B9%8C%E9%BE%99%E7%90%83%23) `380.9K 🔥` `NEW`
1. [陈熠蒯曼2比3张本美和](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%86%A0%E8%92%AF%E6%9B%BC2%E6%AF%943%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `275.8K 🔥` `NEW`
1. [安妮海瑟薇怀三胎](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%A6%AE%E6%B5%B7%E7%91%9F%E8%96%87%E6%80%80%E4%B8%89%E8%83%8E%23) `271.8K 🔥` `NEW`
1. [女子彻夜未归被发现死在情夫车内](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BD%BB%E5%A4%9C%E6%9C%AA%E5%BD%92%E8%A2%AB%E5%8F%91%E7%8E%B0%E6%AD%BB%E5%9C%A8%E6%83%85%E5%A4%AB%E8%BD%A6%E5%86%85%23) `268.7K 🔥` `NEW`
1. [黄子韬违停画面](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E8%BF%9D%E5%81%9C%E7%94%BB%E9%9D%A2%23) `263.9K 🔥` `NEW`
1. [TF家族夏日运动会](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E5%A4%8F%E6%97%A5%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `256.3K 🔥` `NEW`
1. [医生眼中的差睡姿和好睡姿](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%9C%BC%E4%B8%AD%E7%9A%84%E5%B7%AE%E7%9D%A1%E5%A7%BF%E5%92%8C%E5%A5%BD%E7%9D%A1%E5%A7%BF%23) `197.5K 🔥` `NEW`
1. [韩国世界杯转播商破产了 (South Korea's World Cup broadcaster goes bankrupt)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E5%95%86%E7%A0%B4%E4%BA%A7%E4%BA%86%23) `196.3K 🔥` `NEW`
1. [孙怡杀疯了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E6%9D%80%E7%96%AF%E4%BA%86%23) `195.0K 🔥` `NEW`
1. [5岁娃玩火烧家爸爸看完监控不气了](https://s.weibo.com/weibo?q=%235%E5%B2%81%E5%A8%83%E7%8E%A9%E7%81%AB%E7%83%A7%E5%AE%B6%E7%88%B8%E7%88%B8%E7%9C%8B%E5%AE%8C%E7%9B%91%E6%8E%A7%E4%B8%8D%E6%B0%94%E4%BA%86%23) `192.5K 🔥` `NEW`
1. [贾乃亮回应不停带货](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E4%B9%83%E4%BA%AE%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%81%9C%E5%B8%A6%E8%B4%A7%23) `190.1K 🔥` `NEW`
1. [卡布里蓝是什么味道](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E5%B8%83%E9%87%8C%E8%93%9D%E6%98%AF%E4%BB%80%E4%B9%88%E5%91%B3%E9%81%93%23) `188.0K 🔥` `NEW`
1. [1岁半男童遇害前身上有伤父亲知情](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%8D%8A%E7%94%B7%E7%AB%A5%E9%81%87%E5%AE%B3%E5%89%8D%E8%BA%AB%E4%B8%8A%E6%9C%89%E4%BC%A4%E7%88%B6%E4%BA%B2%E7%9F%A5%E6%83%85%23) `185.7K 🔥` `NEW`
1. [西瓜价格腰斩了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%93%9C%E4%BB%B7%E6%A0%BC%E8%85%B0%E6%96%A9%E4%BA%86%23) `185.1K 🔥` `NEW`
1. [日春秋航空一航班在哈尔滨疑擦尾](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%98%A5%E7%A7%8B%E8%88%AA%E7%A9%BA%E4%B8%80%E8%88%AA%E7%8F%AD%E5%9C%A8%E5%93%88%E5%B0%94%E6%BB%A8%E7%96%91%E6%93%A6%E5%B0%BE%23) `184.1K 🔥` `NEW`
1. [广州地铁可以加上这个标志了](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%9C%B0%E9%93%81%E5%8F%AF%E4%BB%A5%E5%8A%A0%E4%B8%8A%E8%BF%99%E4%B8%AA%E6%A0%87%E5%BF%97%E4%BA%86%23) `180.1K 🔥` `NEW`
1. [农户10亩辣椒一夜全死损失8万](https://s.weibo.com/weibo?q=%23%E5%86%9C%E6%88%B710%E4%BA%A9%E8%BE%A3%E6%A4%92%E4%B8%80%E5%A4%9C%E5%85%A8%E6%AD%BB%E6%8D%9F%E5%A4%B18%E4%B8%87%23) `177.8K 🔥` `NEW`
1. [金莎00年的弟弟05年的酒 (Jinsha’s 2000-year-old brother’s 2005-year-old wine)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E00%E5%B9%B4%E7%9A%84%E5%BC%9F%E5%BC%9F05%E5%B9%B4%E7%9A%84%E9%85%92%23) `174.1K 🔥` `NEW`
1. [中国降温神器在欧洲卖爆了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%99%8D%E6%B8%A9%E7%A5%9E%E5%99%A8%E5%9C%A8%E6%AC%A7%E6%B4%B2%E5%8D%96%E7%88%86%E4%BA%86%23) `172.5K 🔥` `NEW`
1. [朱志鑫吃粽子配致死量白糖](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E5%90%83%E7%B2%BD%E5%AD%90%E9%85%8D%E8%87%B4%E6%AD%BB%E9%87%8F%E7%99%BD%E7%B3%96%23) `171.3K 🔥` `NEW`
1. [心引力开场 灾难 (Gravity Opening Disaster)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%BC%95%E5%8A%9B%E5%BC%80%E5%9C%BA%20%E7%81%BE%E9%9A%BE%23) `809.7K 🔥` `+106%`
1. [端午假期第一天2.4亿人次跨区域流动](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E5%8D%88%E5%81%87%E6%9C%9F%E7%AC%AC%E4%B8%80%E5%A4%A92.4%E4%BA%BF%E4%BA%BA%E6%AC%A1%E8%B7%A8%E5%8C%BA%E5%9F%9F%E6%B5%81%E5%8A%A8%23) `652.9K 🔥` `+97%`
1. [特朗普和高市早苗因珍珠港发生争吵](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%92%8C%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%9B%A0%E7%8F%8D%E7%8F%A0%E6%B8%AF%E5%8F%91%E7%94%9F%E4%BA%89%E5%90%B5%23) `531.9K 🔥` `+500%`
1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `343.4K 🔥` `+109%`
1. [3名中国裁判同场执法世界杯 (3 Chinese referees officiating at the World Cup together)](https://s.weibo.com/weibo?q=%233%E5%90%8D%E4%B8%AD%E5%9B%BD%E8%A3%81%E5%88%A4%E5%90%8C%E5%9C%BA%E6%89%A7%E6%B3%95%E4%B8%96%E7%95%8C%E6%9D%AF%23) `279.3K 🔥` `+216%`
1. [半裸救人被质疑不穿上衣贴近女性 (Half-naked rescuer was questioned about being close to women without wearing a shirt)](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E8%A3%B8%E6%95%91%E4%BA%BA%E8%A2%AB%E8%B4%A8%E7%96%91%E4%B8%8D%E7%A9%BF%E4%B8%8A%E8%A1%A3%E8%B4%B4%E8%BF%91%E5%A5%B3%E6%80%A7%23) `249.6K 🔥` `+182%`
1. [存储芯片涨价失控](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E6%B6%A8%E4%BB%B7%E5%A4%B1%E6%8E%A7%23) `198.5K 🔥` `+62%`
1. [张远 刘美含](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%20%E5%88%98%E7%BE%8E%E5%90%AB%23) `198.0K 🔥` `+80%`
1. [日本签证费涨5倍](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%AD%BE%E8%AF%81%E8%B4%B9%E6%B6%A85%E5%80%8D%23) `194.6K 🔥` `+119%`
1. [北大女学霸谈数学50分如何逆袭](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E5%A5%B3%E5%AD%A6%E9%9C%B8%E8%B0%88%E6%95%B0%E5%AD%A650%E5%88%86%E5%A6%82%E4%BD%95%E9%80%86%E8%A2%AD%23) `190.9K 🔥` `+116%`
1. [最适合打工人的老板出现了 (The most suitable boss for workers appears)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E9%80%82%E5%90%88%E6%89%93%E5%B7%A5%E4%BA%BA%E7%9A%84%E8%80%81%E6%9D%BF%E5%87%BA%E7%8E%B0%E4%BA%86%23) `189.6K 🔥` `+74%`
1. [特朗普称要耗完美伊谈判60天期限](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%A6%81%E8%80%97%E5%AE%8C%E7%BE%8E%E4%BC%8A%E8%B0%88%E5%88%A460%E5%A4%A9%E6%9C%9F%E9%99%90%23) `187.4K 🔥` `+114%`
1. [金价陷入低迷 (Gold prices plunge into downturn)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%99%B7%E5%85%A5%E4%BD%8E%E8%BF%B7%23) `187.0K 🔥` `+111%`
1. [侯明昊歌声和脸一样能打](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%AD%8C%E5%A3%B0%E5%92%8C%E8%84%B8%E4%B8%80%E6%A0%B7%E8%83%BD%E6%89%93%23) `183.0K 🔥` `+107%`
1. [郑州一汽车用品商城起火浓烟滚滚 (Fire breaks out at an auto supplies mall in Zhengzhou and smoke billows)](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%B7%9E%E4%B8%80%E6%B1%BD%E8%BD%A6%E7%94%A8%E5%93%81%E5%95%86%E5%9F%8E%E8%B5%B7%E7%81%AB%E6%B5%93%E7%83%9F%E6%BB%9A%E6%BB%9A%23) `181.5K 🔥` `+105%`
1. [张远太争气了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E5%A4%AA%E4%BA%89%E6%B0%94%E4%BA%86%23) `181.2K 🔥` `+105%`
1. [亚马尔父亲比C罗还年轻 (Yamal’s father is younger than Ronaldo)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E7%88%B6%E4%BA%B2%E6%AF%94C%E7%BD%97%E8%BF%98%E5%B9%B4%E8%BD%BB%23) `179.1K 🔥` `+103%`
1. [浪姐能不能淘汰赵兆](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%83%BD%E4%B8%8D%E8%83%BD%E6%B7%98%E6%B1%B0%E8%B5%B5%E5%85%86%23) `176.8K 🔥` `+101%`
1. [杨坤 为什么不留我多唱几首歌呢](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%9D%A4%20%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E7%95%99%E6%88%91%E5%A4%9A%E5%94%B1%E5%87%A0%E9%A6%96%E6%AD%8C%E5%91%A2%23) `176.3K 🔥` `+100%`
1. [越南前女首富爱马仕包拍出44万美元 (Hermès bag sold by Vietnam’s former richest woman for $440,000 at auction)](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E5%89%8D%E5%A5%B3%E9%A6%96%E5%AF%8C%E7%88%B1%E9%A9%AC%E4%BB%95%E5%8C%85%E6%8B%8D%E5%87%BA44%E4%B8%87%E7%BE%8E%E5%85%83%23) `175.5K 🔥` `+99%`
1. [浪姐排名](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `172.9K 🔥` `+96%`
1. [杨坤哭了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%9D%A4%E5%93%AD%E4%BA%86%23) `170.3K 🔥` `+94%`
1. [檀健次演技](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E6%BC%94%E6%8A%80%23) `169.7K 🔥` `+94%`
1. [窦靖童王菲 泪痕妆 (Dou Jingtong Faye Wong tear stain makeup)](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E7%8E%8B%E8%8F%B2%20%E6%B3%AA%E7%97%95%E5%A6%86%23) `214.8K 🔥`
1. [美国vs澳大利亚 (USA vs Australia)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BDvs%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%23) `252.8K 🔥` `-55%`
1. [TFBOYS都拍了吻戏 (TFBOYS all filmed kissing scenes)](https://s.weibo.com/weibo?q=%23TFBOYS%E9%83%BD%E6%8B%8D%E4%BA%86%E5%90%BB%E6%88%8F%23) `204.7K 🔥` `-46%`
1. [周深 无法接受肉粽](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%20%E6%97%A0%E6%B3%95%E6%8E%A5%E5%8F%97%E8%82%89%E7%B2%BD%23) `193.5K 🔥` `-49%`

Updated at 2026-06-20 08:02:25

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
