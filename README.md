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

1. [星河入梦请你定制梦境彩蛋 (Xinghe Dreams invites you to customize dream easter eggs)](https://s.weibo.com/weibo?q=%23%E6%98%9F%E6%B2%B3%E5%85%A5%E6%A2%A6%E8%AF%B7%E4%BD%A0%E5%AE%9A%E5%88%B6%E6%A2%A6%E5%A2%83%E5%BD%A9%E8%9B%8B%23) `446.2K 🔥` `NEW`
1. [迪丽热巴马年央视春晚](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%A9%AC%E5%B9%B4%E5%A4%AE%E8%A7%86%E6%98%A5%E6%99%9A%23) `161.5K 🔥` `NEW`
1. [戴建业谈年味为什么变了](https://s.weibo.com/weibo?q=%23%E6%88%B4%E5%BB%BA%E4%B8%9A%E8%B0%88%E5%B9%B4%E5%91%B3%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%98%E4%BA%86%23) `136.7K 🔥` `NEW`
1. [被10万多人点赞的翟女士找到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB10%E4%B8%87%E5%A4%9A%E4%BA%BA%E7%82%B9%E8%B5%9E%E7%9A%84%E7%BF%9F%E5%A5%B3%E5%A3%AB%E6%89%BE%E5%88%B0%E4%BA%86%23) `134.6K 🔥` `NEW`
1. [七成受访年轻人在悄悄攒金](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%88%90%E5%8F%97%E8%AE%BF%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%9C%A8%E6%82%84%E6%82%84%E6%94%92%E9%87%91%23) `132.7K 🔥` `NEW`
1. [男子驾车返乡途中被猫锁在车外](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%A9%BE%E8%BD%A6%E8%BF%94%E4%B9%A1%E9%80%94%E4%B8%AD%E8%A2%AB%E7%8C%AB%E9%94%81%E5%9C%A8%E8%BD%A6%E5%A4%96%23) `130.4K 🔥` `NEW`
1. [郑钦文退赛](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%80%80%E8%B5%9B%23) `121.0K 🔥` `NEW`
1. [奥斯卡回应什么时候和孙乐言结婚](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E6%96%AF%E5%8D%A1%E5%9B%9E%E5%BA%94%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%92%8C%E5%AD%99%E4%B9%90%E8%A8%80%E7%BB%93%E5%A9%9A%23) `120.9K 🔥` `NEW`
1. [辽宁春晚官宣节目单](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E6%98%A5%E6%99%9A%E5%AE%98%E5%AE%A3%E8%8A%82%E7%9B%AE%E5%8D%95%23) `106.0K 🔥` `NEW`
1. [属马的人在古代可能属鹿](https://s.weibo.com/weibo?q=%23%E5%B1%9E%E9%A9%AC%E7%9A%84%E4%BA%BA%E5%9C%A8%E5%8F%A4%E4%BB%A3%E5%8F%AF%E8%83%BD%E5%B1%9E%E9%B9%BF%23) `95.5K 🔥` `NEW`
1. [甚至都没把你孩子当人看 (I don't even think of your child as a human being.)](https://s.weibo.com/weibo?q=%23%E7%94%9A%E8%87%B3%E9%83%BD%E6%B2%A1%E6%8A%8A%E4%BD%A0%E5%AD%A9%E5%AD%90%E5%BD%93%E4%BA%BA%E7%9C%8B%23) `95.4K 🔥` `NEW`
1. [恋爱还得老一辈谈才甜](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%88%B1%E8%BF%98%E5%BE%97%E8%80%81%E4%B8%80%E8%BE%88%E8%B0%88%E6%89%8D%E7%94%9C%23) `92.0K 🔥` `NEW`
1. [大疆前销售副总裁被刑拘](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86%E5%89%8D%E9%94%80%E5%94%AE%E5%89%AF%E6%80%BB%E8%A3%81%E8%A2%AB%E5%88%91%E6%8B%98%23) `89.2K 🔥` `NEW`
1. [张予曦返场cos小舞](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E8%BF%94%E5%9C%BAcos%E5%B0%8F%E8%88%9E%23) `88.4K 🔥` `NEW`
1. [Angelababy邓超即将合拍](https://s.weibo.com/weibo?q=%23Angelababy%E9%82%93%E8%B6%85%E5%8D%B3%E5%B0%86%E5%90%88%E6%8B%8D%23) `86.3K 🔥` `NEW`
1. [第一批回村的狗已经在挨打了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E5%9B%9E%E6%9D%91%E7%9A%84%E7%8B%97%E5%B7%B2%E7%BB%8F%E5%9C%A8%E6%8C%A8%E6%89%93%E4%BA%86%23) `79.0K 🔥` `NEW`
1. [春晚是第一个用上Seedance2.0的 (The Spring Festival Gala is the first to use Seedance2.0)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E6%98%AF%E7%AC%AC%E4%B8%80%E4%B8%AA%E7%94%A8%E4%B8%8ASeedance2.0%E7%9A%84%23) `729.0K 🔥` `+309%`
1. [美团外卖送金马啦 (Meituan Food Delivery to Golden Horse)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%E9%80%81%E9%87%91%E9%A9%AC%E5%95%A6%23) `560.7K 🔥` `+41%`
1. [2026红包分组](https://s.weibo.com/weibo?q=%232026%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `492.7K 🔥` `+209%`
1. [猫 算我求你了洗洗脚吧](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E7%AE%97%E6%88%91%E6%B1%82%E4%BD%A0%E4%BA%86%E6%B4%97%E6%B4%97%E8%84%9A%E5%90%A7%23) `460.4K 🔥` `+175%`
1. [春节偏财运爆表的星座](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E5%81%8F%E8%B4%A2%E8%BF%90%E7%88%86%E8%A1%A8%E7%9A%84%E6%98%9F%E5%BA%A7%23) `318.9K 🔥` `+174%`
1. [李沅禧购物视频被日本网友炎上](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%85%E7%A6%A7%E8%B4%AD%E7%89%A9%E8%A7%86%E9%A2%91%E8%A2%AB%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E7%82%8E%E4%B8%8A%23) `138.2K 🔥` `+21%`
1. [王菲春晚歌曲原唱乐队毕业于北大 (Faye Wong's Spring Festival Gala original singing band graduated from Peking University)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%98%A5%E6%99%9A%E6%AD%8C%E6%9B%B2%E5%8E%9F%E5%94%B1%E4%B9%90%E9%98%9F%E6%AF%95%E4%B8%9A%E4%BA%8E%E5%8C%97%E5%A4%A7%23) `97.6K 🔥` `+21%`
1. [谷爱凌被迫损失1天U池训练时间](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%A2%AB%E8%BF%AB%E6%8D%9F%E5%A4%B11%E5%A4%A9U%E6%B1%A0%E8%AE%AD%E7%BB%83%E6%97%B6%E9%97%B4%23) `1.0M 🔥`
1. [过年放假模式已开启 (New Year holiday mode is on)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E6%94%BE%E5%81%87%E6%A8%A1%E5%BC%8F%E5%B7%B2%E5%BC%80%E5%90%AF%23) `574.6K 🔥`
1. [过年做美甲别窝囊](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E5%81%9A%E7%BE%8E%E7%94%B2%E5%88%AB%E7%AA%9D%E5%9B%8A%23) `169.0K 🔥`
1. [谷爱凌直言睡不太够想多休息](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%9B%B4%E8%A8%80%E7%9D%A1%E4%B8%8D%E5%A4%AA%E5%A4%9F%E6%83%B3%E5%A4%9A%E4%BC%91%E6%81%AF%23) `139.9K 🔥`
1. [宋威龙赵今麦抱着同一束花](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%8A%B1%E7%9D%80%E5%90%8C%E4%B8%80%E6%9D%9F%E8%8A%B1%23) `139.1K 🔥`
1. [土耳其一航班上发生大规模斗殴](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%E4%B8%80%E8%88%AA%E7%8F%AD%E4%B8%8A%E5%8F%91%E7%94%9F%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%96%97%E6%AE%B4%23) `137.5K 🔥`
1. [千问30元钟点房一抢而空](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE30%E5%85%83%E9%92%9F%E7%82%B9%E6%88%BF%E4%B8%80%E6%8A%A2%E8%80%8C%E7%A9%BA%23) `135.6K 🔥`
1. [Angelababy撕拉片 权威脸蛋](https://s.weibo.com/weibo?q=%23Angelababy%E6%92%95%E6%8B%89%E7%89%87%20%E6%9D%83%E5%A8%81%E8%84%B8%E8%9B%8B%23) `132.9K 🔥`
1. [马年清清来送签名红包](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%B8%85%E6%B8%85%E6%9D%A5%E9%80%81%E7%AD%BE%E5%90%8D%E7%BA%A2%E5%8C%85%23) `131.0K 🔥`
1. [几杯去世](https://s.weibo.com/weibo?q=%23%E5%87%A0%E6%9D%AF%E5%8E%BB%E4%B8%96%23) `129.0K 🔥`
1. [白敬亭 宋轶 (Bai Jingting Song Yi)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E5%AE%8B%E8%BD%B6%23) `128.5K 🔥`
1. [小S小女儿长大了](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%B0%8F%E5%A5%B3%E5%84%BF%E9%95%BF%E5%A4%A7%E4%BA%86%23) `127.2K 🔥`
1. [陪宋威龙忍住什么](https://s.weibo.com/weibo?q=%23%E9%99%AA%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BF%8D%E4%BD%8F%E4%BB%80%E4%B9%88%23) `125.9K 🔥`
1. [建议大家千万不要一边做一边怀疑](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E4%B8%80%E8%BE%B9%E5%81%9A%E4%B8%80%E8%BE%B9%E6%80%80%E7%96%91%23) `125.1K 🔥`
1. [伤心swimming爆料后再怒发8条](https://s.weibo.com/weibo?q=%23%E4%BC%A4%E5%BF%83swimming%E7%88%86%E6%96%99%E5%90%8E%E5%86%8D%E6%80%92%E5%8F%918%E6%9D%A1%23) `124.7K 🔥`
1. [千问再次激活群聊 (Qianwen activates group chat again)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E5%86%8D%E6%AC%A1%E6%BF%80%E6%B4%BB%E7%BE%A4%E8%81%8A%23) `123.7K 🔥`
1. [宋轶 情侣背景](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%20%E6%83%85%E4%BE%A3%E8%83%8C%E6%99%AF%23) `122.9K 🔥`
1. [马年春晚部分节目单曝光](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%98%A5%E6%99%9A%E9%83%A8%E5%88%86%E8%8A%82%E7%9B%AE%E5%8D%95%E6%9B%9D%E5%85%89%23) `122.7K 🔥`
1. [27岁乡村女教师相亲20次 (A 27-year-old rural female teacher went on blind dates 20 times)](https://s.weibo.com/weibo?q=%2327%E5%B2%81%E4%B9%A1%E6%9D%91%E5%A5%B3%E6%95%99%E5%B8%88%E7%9B%B8%E4%BA%B220%E6%AC%A1%23) `122.1K 🔥`
1. [郭富城王一博 法拉利遇上兰博基尼](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E6%B3%95%E6%8B%89%E5%88%A9%E9%81%87%E4%B8%8A%E5%85%B0%E5%8D%9A%E5%9F%BA%E5%B0%BC%23) `121.9K 🔥`
1. [迪丽热巴六点多就起床健身](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%85%AD%E7%82%B9%E5%A4%9A%E5%B0%B1%E8%B5%B7%E5%BA%8A%E5%81%A5%E8%BA%AB%23) `121.2K 🔥`
1. [乡镇公务员相亲称现实有时远超感情](https://s.weibo.com/weibo?q=%23%E4%B9%A1%E9%95%87%E5%85%AC%E5%8A%A1%E5%91%98%E7%9B%B8%E4%BA%B2%E7%A7%B0%E7%8E%B0%E5%AE%9E%E6%9C%89%E6%97%B6%E8%BF%9C%E8%B6%85%E6%84%9F%E6%83%85%23) `120.2K 🔥`
1. [千问超级免单卡在闲鱼杀疯了 (Qianwen’s super free single card is going crazy on Xianyu)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E8%B6%85%E7%BA%A7%E5%85%8D%E5%8D%95%E5%8D%A1%E5%9C%A8%E9%97%B2%E9%B1%BC%E6%9D%80%E7%96%AF%E4%BA%86%23) `95.9K 🔥`
1. [王鹤棣比马丁大十岁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%AF%94%E9%A9%AC%E4%B8%81%E5%A4%A7%E5%8D%81%E5%B2%81%23) `93.5K 🔥`
1. [女子左手被50吨冲床碾成泥 (A woman's left hand was crushed into mud by a 50-ton punch machine)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B7%A6%E6%89%8B%E8%A2%AB50%E5%90%A8%E5%86%B2%E5%BA%8A%E7%A2%BE%E6%88%90%E6%B3%A5%23) `88.2K 🔥`
1. [副省长电话被拉黑后](https://s.weibo.com/weibo?q=%23%E5%89%AF%E7%9C%81%E9%95%BF%E7%94%B5%E8%AF%9D%E8%A2%AB%E6%8B%89%E9%BB%91%E5%90%8E%23) `466.7K 🔥` `-38%`
1. [Faker与Uzi迎来名人堂新成员](https://s.weibo.com/weibo?q=%23Faker%E4%B8%8EUzi%E8%BF%8E%E6%9D%A5%E5%90%8D%E4%BA%BA%E5%A0%82%E6%96%B0%E6%88%90%E5%91%98%23) `123.8K 🔥` `-26%`
1. [王菲 你我经历的一刻 (Faye Wong, the moment you and I experienced)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%20%E4%BD%A0%E6%88%91%E7%BB%8F%E5%8E%86%E7%9A%84%E4%B8%80%E5%88%BB%23) `83.0K 🔥` `-30%`
1. [白鹿7天10组物料](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF7%E5%A4%A910%E7%BB%84%E7%89%A9%E6%96%99%23) `78.1K 🔥` `-32%`

Updated at 2026-02-15 15:49:04

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
