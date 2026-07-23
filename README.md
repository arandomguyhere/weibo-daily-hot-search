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

1. [散步万能是运动误区 (It is a misunderstanding that walking is everything)](https://s.weibo.com/weibo?q=%23%E6%95%A3%E6%AD%A5%E4%B8%87%E8%83%BD%E6%98%AF%E8%BF%90%E5%8A%A8%E8%AF%AF%E5%8C%BA%23) `87.5K 🔥` `NEW`
1. [感觉家里的家电通了人性](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E5%AE%B6%E9%87%8C%E7%9A%84%E5%AE%B6%E7%94%B5%E9%80%9A%E4%BA%86%E4%BA%BA%E6%80%A7%23) `29.7K 🔥` `NEW`
1. [烧烤店回应8人就餐被收22套餐具费](https://s.weibo.com/weibo?q=%23%E7%83%A7%E7%83%A4%E5%BA%97%E5%9B%9E%E5%BA%948%E4%BA%BA%E5%B0%B1%E9%A4%90%E8%A2%AB%E6%94%B622%E5%A5%97%E9%A4%90%E5%85%B7%E8%B4%B9%23) `29.6K 🔥` `NEW`
1. [家长称女儿多张幼儿园毕业照走光 (Parents say many of their daughter’s kindergarten graduation photos were leaked)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E7%A7%B0%E5%A5%B3%E5%84%BF%E5%A4%9A%E5%BC%A0%E5%B9%BC%E5%84%BF%E5%9B%AD%E6%AF%95%E4%B8%9A%E7%85%A7%E8%B5%B0%E5%85%89%23) `159.5K 🔥` `+113%`
1. [左眼跳财右眼跳相信科学](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E7%9C%BC%E8%B7%B3%E8%B4%A2%E5%8F%B3%E7%9C%BC%E8%B7%B3%E7%9B%B8%E4%BF%A1%E7%A7%91%E5%AD%A6%23) `333.7K 🔥`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `81.0K 🔥`
1. [菲尔兹奖 (fields medal)](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%B0%94%E5%85%B9%E5%A5%96%23) `71.0K 🔥`
1. [张凌赫王楚然床戏](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%BA%8A%E6%88%8F%23) `61.0K 🔥`
1. [王虹 (Wang Hong)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%23) `55.0K 🔥`
1. [付费占广场违规集资均可追责](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%B4%B9%E5%8D%A0%E5%B9%BF%E5%9C%BA%E8%BF%9D%E8%A7%84%E9%9B%86%E8%B5%84%E5%9D%87%E5%8F%AF%E8%BF%BD%E8%B4%A3%23) `48.0K 🔥`
1. [北京大学祝贺邓煜王虹](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E7%A5%9D%E8%B4%BA%E9%82%93%E7%85%9C%E7%8E%8B%E8%99%B9%23) `38.8K 🔥`
1. [王虹邓煜履历](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E9%82%93%E7%85%9C%E5%B1%A5%E5%8E%86%23) `36.8K 🔥`
1. [中国女排黑八奇迹](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92%E9%BB%91%E5%85%AB%E5%A5%87%E8%BF%B9%23) `36.4K 🔥`
1. [一直不理解打招呼文化 (I never understood the culture of greeting)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E4%B8%8D%E7%90%86%E8%A7%A3%E6%89%93%E6%8B%9B%E5%91%BC%E6%96%87%E5%8C%96%23) `36.2K 🔥`
1. [这其实是你的宠物突然想你了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%85%B6%E5%AE%9E%E6%98%AF%E4%BD%A0%E7%9A%84%E5%AE%A0%E7%89%A9%E7%AA%81%E7%84%B6%E6%83%B3%E4%BD%A0%E4%BA%86%23) `36.2K 🔥`
1. [金价四连涨深圳水贝又挤爆了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%9B%9B%E8%BF%9E%E6%B6%A8%E6%B7%B1%E5%9C%B3%E6%B0%B4%E8%B4%9D%E5%8F%88%E6%8C%A4%E7%88%86%E4%BA%86%23) `36.0K 🔥`
1. [中国籍数学家首获菲尔兹奖 (Chinese mathematician wins Fields Medal for first time)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%B1%8D%E6%95%B0%E5%AD%A6%E5%AE%B6%E9%A6%96%E8%8E%B7%E8%8F%B2%E5%B0%94%E5%85%B9%E5%A5%96%23) `34.7K 🔥`
1. [中国女排晋级总决赛四强](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92%E6%99%8B%E7%BA%A7%E6%80%BB%E5%86%B3%E8%B5%9B%E5%9B%9B%E5%BC%BA%23) `34.5K 🔥`
1. [过度分享其实也是一种打扰](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E5%88%86%E4%BA%AB%E5%85%B6%E5%AE%9E%E4%B9%9F%E6%98%AF%E4%B8%80%E7%A7%8D%E6%89%93%E6%89%B0%23) `175.6K 🔥` `-27%`
1. [中国汽车加速全球化布局](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B1%BD%E8%BD%A6%E5%8A%A0%E9%80%9F%E5%85%A8%E7%90%83%E5%8C%96%E5%B8%83%E5%B1%80%23) `164.3K 🔥` `-22%`
1. [十个勤天](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%23) `126.0K 🔥` `-40%`
1. [重庆山体崩塌11死50失联](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C11%E6%AD%BB50%E5%A4%B1%E8%81%94%23) `107.3K 🔥` `-28%`
1. [邓煜 知乎](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%85%9C%20%E7%9F%A5%E4%B9%8E%23) `86.3K 🔥` `-56%`
1. [丘成桐希望王虹邓煜回国任教](https://s.weibo.com/weibo?q=%23%E4%B8%98%E6%88%90%E6%A1%90%E5%B8%8C%E6%9C%9B%E7%8E%8B%E8%99%B9%E9%82%93%E7%85%9C%E5%9B%9E%E5%9B%BD%E4%BB%BB%E6%95%99%23) `83.9K 🔥` `-27%`
1. [毛大庆删博 (Mao Daqing deletes blog)](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E5%A4%A7%E5%BA%86%E5%88%A0%E5%8D%9A%23) `54.9K 🔥` `-54%`
1. [陈哲远把网友笑进急诊了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E6%8A%8A%E7%BD%91%E5%8F%8B%E7%AC%91%E8%BF%9B%E6%80%A5%E8%AF%8A%E4%BA%86%23) `46.8K 🔥` `-33%`
1. [不要随意把照片和视频发给AI (Don’t send photos and videos to AI at will)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E9%9A%8F%E6%84%8F%E6%8A%8A%E7%85%A7%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%8F%91%E7%BB%99AI%23) `45.9K 🔥` `-21%`
1. [王虹回应获菲尔兹奖](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E5%9B%9E%E5%BA%94%E8%8E%B7%E8%8F%B2%E5%B0%94%E5%85%B9%E5%A5%96%23) `45.1K 🔥` `-32%`
1. [鹿晗把共享充电宝价格打下来了 (Luhan lowers the price of shared power bank)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%8A%8A%E5%85%B1%E4%BA%AB%E5%85%85%E7%94%B5%E5%AE%9D%E4%BB%B7%E6%A0%BC%E6%89%93%E4%B8%8B%E6%9D%A5%E4%BA%86%23) `35.7K 🔥` `-37%`
1. [邓煜 不请我吃星期四的](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%85%9C%20%E4%B8%8D%E8%AF%B7%E6%88%91%E5%90%83%E6%98%9F%E6%9C%9F%E5%9B%9B%E7%9A%84%23) `34.2K 🔥` `-34%`
1. [张凌赫抱王楚然的时候还掂了一下](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8A%B1%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%9A%84%E6%97%B6%E5%80%99%E8%BF%98%E6%8E%82%E4%BA%86%E4%B8%80%E4%B8%8B%23) `33.9K 🔥` `-25%`
1. [职场开黄腔被开除网友一片该声](https://s.weibo.com/weibo?q=%23%E8%81%8C%E5%9C%BA%E5%BC%80%E9%BB%84%E8%85%94%E8%A2%AB%E5%BC%80%E9%99%A4%E7%BD%91%E5%8F%8B%E4%B8%80%E7%89%87%E8%AF%A5%E5%A3%B0%23) `33.7K 🔥` `-22%`
1. [开到荼蘼 彭冠英 (Open to Tumi Peng Guanying)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%20%E5%BD%AD%E5%86%A0%E8%8B%B1%23) `33.6K 🔥` `-26%`
1. [查理苏上译实体书联动](https://s.weibo.com/weibo?q=%23%E6%9F%A5%E7%90%86%E8%8B%8F%E4%B8%8A%E8%AF%91%E5%AE%9E%E4%BD%93%E4%B9%A6%E8%81%94%E5%8A%A8%23) `32.7K 🔥` `-24%`
1. [如此肥美的肉遇到了吃商极低的人 (Such plump meat meets people with extremely low eater quotient)](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%AD%A4%E8%82%A5%E7%BE%8E%E7%9A%84%E8%82%89%E9%81%87%E5%88%B0%E4%BA%86%E5%90%83%E5%95%86%E6%9E%81%E4%BD%8E%E7%9A%84%E4%BA%BA%23) `32.5K 🔥` `-25%`
1. [中国女排3比2美国女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%923%E6%AF%942%E7%BE%8E%E5%9B%BD%E5%A5%B3%E6%8E%92%23) `29.7K 🔥` `-31%`
1. [许昌胖东来宣布暂停销售中央空调 (Xuchang Pandonglai announced the suspension of sales of central air conditioners)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%8C%E8%83%96%E4%B8%9C%E6%9D%A5%E5%AE%A3%E5%B8%83%E6%9A%82%E5%81%9C%E9%94%80%E5%94%AE%E4%B8%AD%E5%A4%AE%E7%A9%BA%E8%B0%83%23) `29.7K 🔥` `-31%`
1. [猫咪是怎么知道蛇的致命部位的 (How does a cat know a snake’s fatal part?)](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E6%98%AF%E6%80%8E%E4%B9%88%E7%9F%A5%E9%81%93%E8%9B%87%E7%9A%84%E8%87%B4%E5%91%BD%E9%83%A8%E4%BD%8D%E7%9A%84%23) `29.7K 🔥` `-32%`
1. [Wenbo 团队](https://s.weibo.com/weibo?q=%23Wenbo%20%E5%9B%A2%E9%98%9F%23) `29.7K 🔥` `-32%`
1. [华晨宇首位全球前10中国内地歌手 (Hua Chenyu is the first mainland Chinese singer in the world's top 10)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E9%A6%96%E4%BD%8D%E5%85%A8%E7%90%83%E5%89%8D10%E4%B8%AD%E5%9B%BD%E5%86%85%E5%9C%B0%E6%AD%8C%E6%89%8B%23) `29.7K 🔥` `-31%`
1. [别让贫困生喝咖啡争议撕裂舆论](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%AE%A9%E8%B4%AB%E5%9B%B0%E7%94%9F%E5%96%9D%E5%92%96%E5%95%A1%E4%BA%89%E8%AE%AE%E6%92%95%E8%A3%82%E8%88%86%E8%AE%BA%23) `29.7K 🔥` `-32%`
1. [云南女子屏内惊现蚂蚁窝 (Yunnan woman's ant nest appears on screen)](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E5%A5%B3%E5%AD%90%E5%B1%8F%E5%86%85%E6%83%8A%E7%8E%B0%E8%9A%82%E8%9A%81%E7%AA%9D%23) `29.7K 🔥` `-32%`
1. [滔搏卖爆了](https://s.weibo.com/weibo?q=%23%E6%BB%94%E6%90%8F%E5%8D%96%E7%88%86%E4%BA%86%23) `29.7K 🔥` `-32%`
1. [常华森进组开到荼蘼](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%8D%8E%E6%A3%AE%E8%BF%9B%E7%BB%84%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%23) `29.7K 🔥` `-32%`
1. [开到荼蘼官宣节奏](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%E5%AE%98%E5%AE%A3%E8%8A%82%E5%A5%8F%23) `29.6K 🔥` `-32%`
1. [云南一小学现54.7公斤可食用口蘑](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E4%B8%80%E5%B0%8F%E5%AD%A6%E7%8E%B054.7%E5%85%AC%E6%96%A4%E5%8F%AF%E9%A3%9F%E7%94%A8%E5%8F%A3%E8%98%91%23) `29.6K 🔥` `-31%`
1. [狗在经历流产后被诊断出患有抑郁症](https://s.weibo.com/weibo?q=%23%E7%8B%97%E5%9C%A8%E7%BB%8F%E5%8E%86%E6%B5%81%E4%BA%A7%E5%90%8E%E8%A2%AB%E8%AF%8A%E6%96%AD%E5%87%BA%E6%82%A3%E6%9C%89%E6%8A%91%E9%83%81%E7%97%87%23) `29.6K 🔥` `-32%`
1. [国足将战世界杯参赛队](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E5%B0%86%E6%88%98%E4%B8%96%E7%95%8C%E6%9D%AF%E5%8F%82%E8%B5%9B%E9%98%9F%23) `29.6K 🔥` `-32%`
1. [在湖南这样做饭是触犯天条的](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%B9%96%E5%8D%97%E8%BF%99%E6%A0%B7%E5%81%9A%E9%A5%AD%E6%98%AF%E8%A7%A6%E7%8A%AF%E5%A4%A9%E6%9D%A1%E7%9A%84%23) `29.6K 🔥` `-31%`
1. [狼队确认进入Sa卡位赛](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E7%A1%AE%E8%AE%A4%E8%BF%9B%E5%85%A5Sa%E5%8D%A1%E4%BD%8D%E8%B5%9B%23) `29.6K 🔥` `-32%`
1. [王俊凯演唱会百万赞视频](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E7%99%BE%E4%B8%87%E8%B5%9E%E8%A7%86%E9%A2%91%23) `29.6K 🔥` `-32%`

Updated at 2026-07-24 04:42:15

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
