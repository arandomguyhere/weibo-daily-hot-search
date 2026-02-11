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

1. [李佳琦蜜丝婷带团勇闯普吉岛 (Li Jiaqi and Misting lead a group to explore Phuket Island)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E7%90%A6%E8%9C%9C%E4%B8%9D%E5%A9%B7%E5%B8%A6%E5%9B%A2%E5%8B%87%E9%97%AF%E6%99%AE%E5%90%89%E5%B2%9B%23) `147.8K 🔥` `NEW`
1. [网球直播](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%90%83%E7%9B%B4%E6%92%AD%23) `37.8K 🔥` `NEW`
1. [TF家族五代练习生吕政熙 宜宾春晚](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E4%BA%94%E4%BB%A3%E7%BB%83%E4%B9%A0%E7%94%9F%E5%90%95%E6%94%BF%E7%86%99%20%E5%AE%9C%E5%AE%BE%E6%98%A5%E6%99%9A%23) `37.3K 🔥` `NEW`
1. [比尔盖茨最新回应爱泼斯坦案](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E6%9C%80%E6%96%B0%E5%9B%9E%E5%BA%94%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%23) `35.0K 🔥` `NEW`
1. [唐宫奇案之青雾风鸣](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%E4%B9%8B%E9%9D%92%E9%9B%BE%E9%A3%8E%E9%B8%A3%23) `31.6K 🔥` `NEW`
1. [DeepSeek更新上下文达百万级token](https://s.weibo.com/weibo?q=%23DeepSeek%E6%9B%B4%E6%96%B0%E4%B8%8A%E4%B8%8B%E6%96%87%E8%BE%BE%E7%99%BE%E4%B8%87%E7%BA%A7token%23) `29.3K 🔥` `NEW`
1. [开始推理吧](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A7%23) `29.3K 🔥` `NEW`
1. [豆包开启Seedance2.0灰测](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%BC%80%E5%90%AFSeedance2.0%E7%81%B0%E6%B5%8B%23) `29.3K 🔥` `NEW`
1. [网球](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%90%83%23) `29.3K 🔥` `NEW`
1. [KK园区2.0内部照首曝光 (First internal photos of KK Park 2.0 exposed)](https://s.weibo.com/weibo?q=%23KK%E5%9B%AD%E5%8C%BA2.0%E5%86%85%E9%83%A8%E7%85%A7%E9%A6%96%E6%9B%9D%E5%85%89%23) `355.1K 🔥` `-51%`
1. [250桌婚宴52万嫌贵拒付款进展](https://s.weibo.com/weibo?q=%23250%E6%A1%8C%E5%A9%9A%E5%AE%B452%E4%B8%87%E5%AB%8C%E8%B4%B5%E6%8B%92%E4%BB%98%E6%AC%BE%E8%BF%9B%E5%B1%95%23) `253.5K 🔥` `-51%`
1. [春运路上藏着这些马年彩蛋 (These Year of the Horse Easter Eggs are Hidden on the Spring Festival Transport Road)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%BF%90%E8%B7%AF%E4%B8%8A%E8%97%8F%E7%9D%80%E8%BF%99%E4%BA%9B%E9%A9%AC%E5%B9%B4%E5%BD%A9%E8%9B%8B%23) `198.9K 🔥` `-53%`
1. [宋威龙抽到马上有对象的反应](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%8A%BD%E5%88%B0%E9%A9%AC%E4%B8%8A%E6%9C%89%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%8F%8D%E5%BA%94%23) `144.0K 🔥` `-55%`
1. [郑钦文vs莱巴金娜](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%23) `123.4K 🔥` `-23%`
1. [新加坡女子误以为中大奖](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%A5%B3%E5%AD%90%E8%AF%AF%E4%BB%A5%E4%B8%BA%E4%B8%AD%E5%A4%A7%E5%A5%96%23) `96.4K 🔥` `-41%`
1. [时代少年团 麦克风](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E9%BA%A6%E5%85%8B%E9%A3%8E%23) `91.6K 🔥` `-48%`
1. [以前的宠妃美貌都是这种级别 (The beauty of the beloved concubines in the past was all of this level)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%89%8D%E7%9A%84%E5%AE%A0%E5%A6%83%E7%BE%8E%E8%B2%8C%E9%83%BD%E6%98%AF%E8%BF%99%E7%A7%8D%E7%BA%A7%E5%88%AB%23) `77.4K 🔥` `-27%`
1. [伊朗总统道歉](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E9%81%93%E6%AD%89%23) `75.7K 🔥` `-58%`
1. [湖南卫视春晚](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%23) `61.1K 🔥` `-62%`
1. [李一桐 假唱](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%20%E5%81%87%E5%94%B1%23) `60.9K 🔥` `-43%`
1. [宋亚轩怎么那么高](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%80%8E%E4%B9%88%E9%82%A3%E4%B9%88%E9%AB%98%23) `60.7K 🔥` `-43%`
1. [女演员投资失败搬进出租屋](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E6%8A%95%E8%B5%84%E5%A4%B1%E8%B4%A5%E6%90%AC%E8%BF%9B%E5%87%BA%E7%A7%9F%E5%B1%8B%23) `60.7K 🔥` `-42%`
1. [查理苏 (Charlie Sue)](https://s.weibo.com/weibo?q=%23%E6%9F%A5%E7%90%86%E8%8B%8F%23) `60.4K 🔥` `-42%`
1. [月薪2000的环卫工困在电子镣铐](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA2000%E7%9A%84%E7%8E%AF%E5%8D%AB%E5%B7%A5%E5%9B%B0%E5%9C%A8%E7%94%B5%E5%AD%90%E9%95%A3%E9%93%90%23) `60.3K 🔥` `-42%`
1. [内娱CP粉众生相](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1CP%E7%B2%89%E4%BC%97%E7%94%9F%E7%9B%B8%23) `60.0K 🔥` `-43%`
1. [保姆遇到有钱雇主吓得下户](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E9%81%87%E5%88%B0%E6%9C%89%E9%92%B1%E9%9B%87%E4%B8%BB%E5%90%93%E5%BE%97%E4%B8%8B%E6%88%B7%23) `59.9K 🔥` `-43%`
1. [沈月晒春晚后台合照](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E6%99%92%E6%98%A5%E6%99%9A%E5%90%8E%E5%8F%B0%E5%90%88%E7%85%A7%23) `59.9K 🔥` `-29%`
1. [张函瑞跳自己的进行曲](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E8%B7%B3%E8%87%AA%E5%B7%B1%E7%9A%84%E8%BF%9B%E8%A1%8C%E6%9B%B2%23) `48.3K 🔥` `-54%`
1. [陈哲远李一桐用一个麦](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E6%9D%8E%E4%B8%80%E6%A1%90%E7%94%A8%E4%B8%80%E4%B8%AA%E9%BA%A6%23) `47.7K 🔥` `-47%`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `47.4K 🔥` `-51%`
1. [长期积怨妻子疑用锅袭击丈夫致死](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E7%A7%AF%E6%80%A8%E5%A6%BB%E5%AD%90%E7%96%91%E7%94%A8%E9%94%85%E8%A2%AD%E5%87%BB%E4%B8%88%E5%A4%AB%E8%87%B4%E6%AD%BB%23) `47.2K 🔥` `-47%`
1. [周深忘词](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%BF%98%E8%AF%8D%23) `46.6K 🔥` `-51%`
1. [郭麒麟 爸爸还是您不争气啊 (Guo Qilin, Dad, you still don’t live up to expectations.)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E9%BA%92%E9%BA%9F%20%E7%88%B8%E7%88%B8%E8%BF%98%E6%98%AF%E6%82%A8%E4%B8%8D%E4%BA%89%E6%B0%94%E5%95%8A%23) `46.3K 🔥` `-49%`
1. [强迫症兔子每天为主人铺床](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E8%BF%AB%E7%97%87%E5%85%94%E5%AD%90%E6%AF%8F%E5%A4%A9%E4%B8%BA%E4%B8%BB%E4%BA%BA%E9%93%BA%E5%BA%8A%23) `45.7K 🔥` `-35%`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `45.6K 🔥` `-44%`
1. [国家宝藏官宣田曦薇](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%AE%9D%E8%97%8F%E5%AE%98%E5%AE%A3%E7%94%B0%E6%9B%A6%E8%96%87%23) `43.8K 🔥` `-36%`
1. [生命树](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%23) `40.1K 🔥` `-42%`
1. [米兰冬奥首位三金王诞生 (Milan Winter Olympics’ first triple gold medal winner is born)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A6%96%E4%BD%8D%E4%B8%89%E9%87%91%E7%8E%8B%E8%AF%9E%E7%94%9F%23) `38.3K 🔥` `-62%`
1. [英王室地产发现疑似涉爱泼斯坦案尸体](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E7%8E%8B%E5%AE%A4%E5%9C%B0%E4%BA%A7%E5%8F%91%E7%8E%B0%E7%96%91%E4%BC%BC%E6%B6%89%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E5%B0%B8%E4%BD%93%23) `37.5K 🔥` `-48%`
1. [警方回应2岁男童在家失踪超140天 (Police respond to 2-year-old boy missing at home for more than 140 days)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%942%E5%B2%81%E7%94%B7%E7%AB%A5%E5%9C%A8%E5%AE%B6%E5%A4%B1%E8%B8%AA%E8%B6%85140%E5%A4%A9%23) `35.7K 🔥` `-49%`
1. [薛之谦歌曲被抄袭部分歌词被照搬](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%AD%8C%E6%9B%B2%E8%A2%AB%E6%8A%84%E8%A2%AD%E9%83%A8%E5%88%86%E6%AD%8C%E8%AF%8D%E8%A2%AB%E7%85%A7%E6%90%AC%23) `34.1K 🔥` `-51%`
1. [大侦探这个首发我一直在爽](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BE%A6%E6%8E%A2%E8%BF%99%E4%B8%AA%E9%A6%96%E5%8F%91%E6%88%91%E4%B8%80%E7%9B%B4%E5%9C%A8%E7%88%BD%23) `32.9K 🔥` `-52%`
1. [何以琛今年50多岁了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%BB%A5%E7%90%9B%E4%BB%8A%E5%B9%B450%E5%A4%9A%E5%B2%81%E4%BA%86%23) `32.0K 🔥` `-54%`
1. [虞书欣连线几分钟也做足功课](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%BF%9E%E7%BA%BF%E5%87%A0%E5%88%86%E9%92%9F%E4%B9%9F%E5%81%9A%E8%B6%B3%E5%8A%9F%E8%AF%BE%23) `29.8K 🔥` `-57%`
1. [全国房价止跌信号出现 (Signal for national house prices to stop falling appears)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%88%BF%E4%BB%B7%E6%AD%A2%E8%B7%8C%E4%BF%A1%E5%8F%B7%E5%87%BA%E7%8E%B0%23) `29.3K 🔥` `-57%`
1. [权志龙Chanel](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99Chanel%23) `29.3K 🔥` `-57%`
1. [刘亦菲陈瑶 双虞姬](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E9%99%88%E7%91%B6%20%E5%8F%8C%E8%99%9E%E5%A7%AC%23) `29.3K 🔥` `-57%`
1. [宋威龙赵今麦惊天动地的一秒](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%83%8A%E5%A4%A9%E5%8A%A8%E5%9C%B0%E7%9A%84%E4%B8%80%E7%A7%92%23) `29.3K 🔥` `-59%`
1. [岳阳一救护车装橘子开警灯闯红灯](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E9%98%B3%E4%B8%80%E6%95%91%E6%8A%A4%E8%BD%A6%E8%A3%85%E6%A9%98%E5%AD%90%E5%BC%80%E8%AD%A6%E7%81%AF%E9%97%AF%E7%BA%A2%E7%81%AF%23) `29.3K 🔥` `-57%`
1. [时代少年团春晚ilikeulike舞台](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%98%A5%E6%99%9Ailikeulike%E8%88%9E%E5%8F%B0%23) `29.3K 🔥` `-58%`

Updated at 2026-02-12 01:44:50

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
