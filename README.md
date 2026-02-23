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

1. [谷爱凌说我不退役我才22岁 (Gu Ailing said that if I don’t retire, I will only be 22 years old)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%AF%B4%E6%88%91%E4%B8%8D%E9%80%80%E5%BD%B9%E6%88%91%E6%89%8D22%E5%B2%81%23) `559.3K 🔥` `NEW`
1. [孟子义将门独后首次出妆](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E9%A6%96%E6%AC%A1%E5%87%BA%E5%A6%86%23) `248.7K 🔥` `NEW`
1. [高速堵车小孩举看到的都发财牌子](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E5%A0%B5%E8%BD%A6%E5%B0%8F%E5%AD%A9%E4%B8%BE%E7%9C%8B%E5%88%B0%E7%9A%84%E9%83%BD%E5%8F%91%E8%B4%A2%E7%89%8C%E5%AD%90%23) `187.9K 🔥` `NEW`
1. [韩国偶遇白鹿曾舜晞逛街](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%81%B6%E9%81%87%E7%99%BD%E9%B9%BF%E6%9B%BE%E8%88%9C%E6%99%9E%E9%80%9B%E8%A1%97%23) `185.9K 🔥` `NEW`
1. [叶祖新合照 想过了官宣没想到是亲戚](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E7%A5%96%E6%96%B0%E5%90%88%E7%85%A7%20%E6%83%B3%E8%BF%87%E4%BA%86%E5%AE%98%E5%AE%A3%E6%B2%A1%E6%83%B3%E5%88%B0%E6%98%AF%E4%BA%B2%E6%88%9A%23) `177.9K 🔥` `NEW`
1. [男子躲厕所过个瘾致高铁晚点](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BA%B2%E5%8E%95%E6%89%80%E8%BF%87%E4%B8%AA%E7%98%BE%E8%87%B4%E9%AB%98%E9%93%81%E6%99%9A%E7%82%B9%23) `170.1K 🔥` `NEW`
1. [陈妍希杨丞琳李荣浩潘玮柏过年聚会](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%9D%A8%E4%B8%9E%E7%90%B3%E6%9D%8E%E8%8D%A3%E6%B5%A9%E6%BD%98%E7%8E%AE%E6%9F%8F%E8%BF%87%E5%B9%B4%E8%81%9A%E4%BC%9A%23) `168.8K 🔥` `NEW`
1. [节后不想上班其实是多巴胺戒断](https://s.weibo.com/weibo?q=%23%E8%8A%82%E5%90%8E%E4%B8%8D%E6%83%B3%E4%B8%8A%E7%8F%AD%E5%85%B6%E5%AE%9E%E6%98%AF%E5%A4%9A%E5%B7%B4%E8%83%BA%E6%88%92%E6%96%AD%23) `160.0K 🔥` `NEW`
1. [芒果又来了一部口碑年代剧](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E5%8F%88%E6%9D%A5%E4%BA%86%E4%B8%80%E9%83%A8%E5%8F%A3%E7%A2%91%E5%B9%B4%E4%BB%A3%E5%89%A7%23) `158.0K 🔥` `NEW`
1. [陈俊菘2比3张本智和](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BF%8A%E8%8F%982%E6%AF%943%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `157.9K 🔥` `NEW`
1. [蔡文静体制女友变微商女王 (Cai Wenjing’s institutional girlfriend turns into micro-business queen)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E4%BD%93%E5%88%B6%E5%A5%B3%E5%8F%8B%E5%8F%98%E5%BE%AE%E5%95%86%E5%A5%B3%E7%8E%8B%23) `138.6K 🔥` `NEW`
1. [陈俊菘15比13张本智和](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BF%8A%E8%8F%9815%E6%AF%9413%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `128.9K 🔥` `NEW`
1. [马思唯终于舍得带小米去贵地方了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E5%94%AF%E7%BB%88%E4%BA%8E%E8%88%8D%E5%BE%97%E5%B8%A6%E5%B0%8F%E7%B1%B3%E5%8E%BB%E8%B4%B5%E5%9C%B0%E6%96%B9%E4%BA%86%23) `128.6K 🔥` `NEW`
1. [悉尼偶遇张柏芝](https://s.weibo.com/weibo?q=%23%E6%82%89%E5%B0%BC%E5%81%B6%E9%81%87%E5%BC%A0%E6%9F%8F%E8%8A%9D%23) `126.0K 🔥` `NEW`
1. [墨西哥军方击毙大毒枭](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5%E5%86%9B%E6%96%B9%E5%87%BB%E6%AF%99%E5%A4%A7%E6%AF%92%E6%9E%AD%23) `106.7K 🔥` `NEW`
1. [张本智和穿错球衣](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E7%A9%BF%E9%94%99%E7%90%83%E8%A1%A3%23) `93.7K 🔥` `NEW`
1. [过年后的银行ATM机](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E5%90%8E%E7%9A%84%E9%93%B6%E8%A1%8CATM%E6%9C%BA%23) `93.1K 🔥` `NEW`
1. [倪妮 你们不要拿去卖](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%20%E4%BD%A0%E4%BB%AC%E4%B8%8D%E8%A6%81%E6%8B%BF%E5%8E%BB%E5%8D%96%23) `93.0K 🔥` `NEW`
1. [张凌赫遗传是门学问](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%81%97%E4%BC%A0%E6%98%AF%E9%97%A8%E5%AD%A6%E9%97%AE%23) `92.9K 🔥` `NEW`
1. [中国资产再大爆发](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B5%84%E4%BA%A7%E5%86%8D%E5%A4%A7%E7%88%86%E5%8F%91%23) `92.8K 🔥` `NEW`
1. [星河入梦 春节档遗珠 (Dreaming of the Starry River, a treasure left behind during the Spring Festival)](https://s.weibo.com/weibo?q=%23%E6%98%9F%E6%B2%B3%E5%85%A5%E6%A2%A6%20%E6%98%A5%E8%8A%82%E6%A1%A3%E9%81%97%E7%8F%A0%23) `92.7K 🔥` `NEW`
1. [墨西哥](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5%23) `92.6K 🔥` `NEW`
1. [吴京 人老了干什么都心酸](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E4%BA%BA%E8%80%81%E4%BA%86%E5%B9%B2%E4%BB%80%E4%B9%88%E9%83%BD%E5%BF%83%E9%85%B8%23) `92.6K 🔥` `NEW`
1. [中国最大高速收费站站长发声](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%80%E5%A4%A7%E9%AB%98%E9%80%9F%E6%94%B6%E8%B4%B9%E7%AB%99%E7%AB%99%E9%95%BF%E5%8F%91%E5%A3%B0%23) `79.3K 🔥` `NEW`
1. [张凌赫张婧仪或演刺棠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%88%96%E6%BC%94%E5%88%BA%E6%A3%A0%23) `79.2K 🔥` `NEW`
1. [新狮铂拓界携手李娜即将瞩目登场](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%8B%AE%E9%93%82%E6%8B%93%E7%95%8C%E6%90%BA%E6%89%8B%E6%9D%8E%E5%A8%9C%E5%8D%B3%E5%B0%86%E7%9E%A9%E7%9B%AE%E7%99%BB%E5%9C%BA%23) `401.6K 🔥` `+30%`
1. [第一个吃甘蔗比吃螃蟹更厉害](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%90%83%E7%94%98%E8%94%97%E6%AF%94%E5%90%83%E8%9E%83%E8%9F%B9%E6%9B%B4%E5%8E%89%E5%AE%B3%23) `203.9K 🔥` `+62%`
1. [谷爱凌马上牛好灵](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%A9%AC%E4%B8%8A%E7%89%9B%E5%A5%BD%E7%81%B5%23) `162.9K 🔥` `+49%`
1. [曝厚本被不让江山除名](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8E%9A%E6%9C%AC%E8%A2%AB%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%E9%99%A4%E5%90%8D%23) `158.9K 🔥` `+27%`
1. [董璇张维伊带小酒窝抓螃蟹](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E5%BC%A0%E7%BB%B4%E4%BC%8A%E5%B8%A6%E5%B0%8F%E9%85%92%E7%AA%9D%E6%8A%93%E8%9E%83%E8%9F%B9%23) `158.7K 🔥` `+32%`
1. [陈妍希说林心如女儿长的太好看了 (Michelle Chen said Ruby Lin’s daughter is so pretty)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E8%AF%B4%E6%9E%97%E5%BF%83%E5%A6%82%E5%A5%B3%E5%84%BF%E9%95%BF%E7%9A%84%E5%A4%AA%E5%A5%BD%E7%9C%8B%E4%BA%86%23) `158.2K 🔥` `+26%`
1. [陈赫给女儿的红包里是试卷](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E7%BB%99%E5%A5%B3%E5%84%BF%E7%9A%84%E7%BA%A2%E5%8C%85%E9%87%8C%E6%98%AF%E8%AF%95%E5%8D%B7%23) `157.7K 🔥` `+27%`
1. [慕慕昭昭CP](https://s.weibo.com/weibo?q=%23%E6%85%95%E6%85%95%E6%98%AD%E6%98%ADCP%23) `154.7K 🔥` `+52%`
1. [西安大雪 (Heavy snow in Xi'an)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E5%A4%A7%E9%9B%AA%23) `1.1M 🔥`
1. [谷爱凌晒金牌打脸外媒 (Gu Ailing slapped foreign media in the face after showing off her gold medal)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%99%92%E9%87%91%E7%89%8C%E6%89%93%E8%84%B8%E5%A4%96%E5%AA%92%23) `791.5K 🔥`
1. [大年初七新的旅程开启](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%83%E6%96%B0%E7%9A%84%E6%97%85%E7%A8%8B%E5%BC%80%E5%90%AF%23) `643.0K 🔥`
1. [史上最贵iPhone要来了](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E6%9C%80%E8%B4%B5iPhone%E8%A6%81%E6%9D%A5%E4%BA%86%23) `569.2K 🔥`
1. [周洁琼不参与I.O.I回归](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B4%81%E7%90%BC%E4%B8%8D%E5%8F%82%E4%B8%8EI.O.I%E5%9B%9E%E5%BD%92%23) `185.2K 🔥`
1. [四川女婿黄子韬在家也得穿省服](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%A5%B3%E5%A9%BF%E9%BB%84%E5%AD%90%E9%9F%AC%E5%9C%A8%E5%AE%B6%E4%B9%9F%E5%BE%97%E7%A9%BF%E7%9C%81%E6%9C%8D%23) `176.1K 🔥`
1. [神仙肉](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%23) `167.3K 🔥`
1. [谷爱凌脑回路](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%84%91%E5%9B%9E%E8%B7%AF%23) `159.0K 🔥`
1. [离婚发现女儿非亲生判还抚养费](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%A9%9A%E5%8F%91%E7%8E%B0%E5%A5%B3%E5%84%BF%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%88%A4%E8%BF%98%E6%8A%9A%E5%85%BB%E8%B4%B9%23) `158.4K 🔥`
1. [吕小雨一个月暴瘦20斤 (Lu Xiaoyu lost 20 pounds in one month)](https://s.weibo.com/weibo?q=%23%E5%90%95%E5%B0%8F%E9%9B%A8%E4%B8%80%E4%B8%AA%E6%9C%88%E6%9A%B4%E7%98%A620%E6%96%A4%23) `135.4K 🔥`
1. [杨幂 这么来历不明的二维码也要扫吗](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E8%BF%99%E4%B9%88%E6%9D%A5%E5%8E%86%E4%B8%8D%E6%98%8E%E7%9A%84%E4%BA%8C%E7%BB%B4%E7%A0%81%E4%B9%9F%E8%A6%81%E6%89%AB%E5%90%97%23) `479.7K 🔥` `-28%`
1. [父母托关系找的工作应该去吗](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E6%89%98%E5%85%B3%E7%B3%BB%E6%89%BE%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%BA%94%E8%AF%A5%E5%8E%BB%E5%90%97%23) `250.0K 🔥` `-25%`
1. [大理4公里拖车费1400元](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%90%864%E5%85%AC%E9%87%8C%E6%8B%96%E8%BD%A6%E8%B4%B91400%E5%85%83%23) `183.7K 🔥` `-30%`
1. [谷爱凌商业价值排冬奥运动员第一](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%95%86%E4%B8%9A%E4%BB%B7%E5%80%BC%E6%8E%92%E5%86%AC%E5%A5%A5%E8%BF%90%E5%8A%A8%E5%91%98%E7%AC%AC%E4%B8%80%23) `144.0K 🔥` `-51%`
1. [陈丽君自曝把命都交代出去](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E8%87%AA%E6%9B%9D%E6%8A%8A%E5%91%BD%E9%83%BD%E4%BA%A4%E4%BB%A3%E5%87%BA%E5%8E%BB%23) `92.8K 🔥` `-59%`
1. [大侦探 (great detective)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BE%A6%E6%8E%A2%23) `92.2K 🔥` `-40%`
1. [徐梦桃夺冠当天收到1600多条信息 (Xu Mengtao received more than 1,600 messages on the day she won the championship)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E5%A4%BA%E5%86%A0%E5%BD%93%E5%A4%A9%E6%94%B6%E5%88%B01600%E5%A4%9A%E6%9D%A1%E4%BF%A1%E6%81%AF%23) `78.4K 🔥` `-37%`
1. [经常吃太饱身体会发生什么变化 (What will happen to your body if you eat too much often?)](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E5%B8%B8%E5%90%83%E5%A4%AA%E9%A5%B1%E8%BA%AB%E4%BD%93%E4%BC%9A%E5%8F%91%E7%94%9F%E4%BB%80%E4%B9%88%E5%8F%98%E5%8C%96%23) `77.3K 🔥` `-26%`

Updated at 2026-02-23 14:55:01

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
