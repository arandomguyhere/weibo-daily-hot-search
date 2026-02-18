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

1. [春节档总票房已破22亿 (The total box office during the Spring Festival has exceeded 2.2 billion)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%A1%A3%E6%80%BB%E7%A5%A8%E6%88%BF%E5%B7%B2%E7%A0%B422%E4%BA%BF%23) `773.8K 🔥` `NEW`
1. [电影惊蛰无声全家一起找钉子](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%E5%85%A8%E5%AE%B6%E4%B8%80%E8%B5%B7%E6%89%BE%E9%92%89%E5%AD%90%23) `432.9K 🔥` `NEW`
1. [朱易发合影祝贺苏翊鸣](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E6%98%93%E5%8F%91%E5%90%88%E5%BD%B1%E7%A5%9D%E8%B4%BA%E8%8B%8F%E7%BF%8A%E9%B8%A3%23) `432.2K 🔥` `NEW`
1. [教练说苏翊鸣米兰夺金前不能谈恋爱](https://s.weibo.com/weibo?q=%23%E6%95%99%E7%BB%83%E8%AF%B4%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%B1%B3%E5%85%B0%E5%A4%BA%E9%87%91%E5%89%8D%E4%B8%8D%E8%83%BD%E8%B0%88%E6%81%8B%E7%88%B1%23) `337.0K 🔥` `NEW`
1. [苏翊鸣想让国歌在全世界面前奏响](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%83%B3%E8%AE%A9%E5%9B%BD%E6%AD%8C%E5%9C%A8%E5%85%A8%E4%B8%96%E7%95%8C%E9%9D%A2%E5%89%8D%E5%A5%8F%E5%93%8D%23) `305.1K 🔥` `NEW`
1. [镖人 对吴京黑转BLACKPINK](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%20%E5%AF%B9%E5%90%B4%E4%BA%AC%E9%BB%91%E8%BD%ACBLACKPINK%23) `231.1K 🔥` `NEW`
1. [朱易 苏翊鸣](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E6%98%93%20%E8%8B%8F%E7%BF%8A%E9%B8%A3%23) `222.8K 🔥` `NEW`
1. [徐梦桃就是中国冰雪的底气](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E5%B0%B1%E6%98%AF%E4%B8%AD%E5%9B%BD%E5%86%B0%E9%9B%AA%E7%9A%84%E5%BA%95%E6%B0%94%23) `179.8K 🔥` `NEW`
1. [酷滕 双取](https://s.weibo.com/weibo?q=%23%E9%85%B7%E6%BB%95%20%E5%8F%8C%E5%8F%96%23) `173.0K 🔥` `NEW`
1. [中国队赢了就是牛](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E8%B5%A2%E4%BA%86%E5%B0%B1%E6%98%AF%E7%89%9B%23) `153.2K 🔥` `NEW`
1. [苏翊鸣祝贺徐梦桃 (Su Yiming congratulates Xu Mengtao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%A5%9D%E8%B4%BA%E5%BE%90%E6%A2%A6%E6%A1%83%23) `145.7K 🔥` `NEW`
1. [苏翊鸣呼吁HPV健康接力](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%91%BC%E5%90%81HPV%E5%81%A5%E5%BA%B7%E6%8E%A5%E5%8A%9B%23) `134.5K 🔥` `NEW`
1. [怪不得叫膨胀螺丝](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%8F%AB%E8%86%A8%E8%83%80%E8%9E%BA%E4%B8%9D%23) `130.3K 🔥` `NEW`
1. [徐梦桃说没法冷静](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E8%AF%B4%E6%B2%A1%E6%B3%95%E5%86%B7%E9%9D%99%23) `127.0K 🔥` `NEW`
1. [5个月宝宝抬头巧变磕头喜提红包](https://s.weibo.com/weibo?q=%235%E4%B8%AA%E6%9C%88%E5%AE%9D%E5%AE%9D%E6%8A%AC%E5%A4%B4%E5%B7%A7%E5%8F%98%E7%A3%95%E5%A4%B4%E5%96%9C%E6%8F%90%E7%BA%A2%E5%8C%85%23) `123.9K 🔥` `NEW`
1. [米卡称爸爸想搬来中国](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%8D%A1%E7%A7%B0%E7%88%B8%E7%88%B8%E6%83%B3%E6%90%AC%E6%9D%A5%E4%B8%AD%E5%9B%BD%23) `104.2K 🔥` `NEW`
1. [中国香港居民在北海道遇袭](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A6%99%E6%B8%AF%E5%B1%85%E6%B0%91%E5%9C%A8%E5%8C%97%E6%B5%B7%E9%81%93%E9%81%87%E8%A2%AD%23) `95.5K 🔥` `NEW`
1. [徐梦桃 王心迪](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%20%E7%8E%8B%E5%BF%83%E8%BF%AA%23) `92.3K 🔥` `NEW`
1. [中国队已集齐奖牌九宫格](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%B7%B2%E9%9B%86%E9%BD%90%E5%A5%96%E7%89%8C%E4%B9%9D%E5%AE%AB%E6%A0%BC%23) `89.2K 🔥` `NEW`
1. [徐梦桃高能量采访](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E9%AB%98%E8%83%BD%E9%87%8F%E9%87%87%E8%AE%BF%23) `86.1K 🔥` `NEW`
1. [星河入梦 (Dreaming of stars)](https://s.weibo.com/weibo?q=%23%E6%98%9F%E6%B2%B3%E5%85%A5%E6%A2%A6%23) `81.6K 🔥` `NEW`
1. [徐梦桃 文能浪姐唱跳武能冬奥夺冠](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%20%E6%96%87%E8%83%BD%E6%B5%AA%E5%A7%90%E5%94%B1%E8%B7%B3%E6%AD%A6%E8%83%BD%E5%86%AC%E5%A5%A5%E5%A4%BA%E5%86%A0%23) `999.9K 🔥` `+21%`
1. [奖牌榜](https://s.weibo.com/weibo?q=%23%E5%A5%96%E7%89%8C%E6%A6%9C%23) `234.2K 🔥` `+39%`
1. [年入35万扛楼小伙回应买车质疑 (A young man with an annual income of 350,000 yuan responds to questions about buying a car)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%85%A535%E4%B8%87%E6%89%9B%E6%A5%BC%E5%B0%8F%E4%BC%99%E5%9B%9E%E5%BA%94%E4%B9%B0%E8%BD%A6%E8%B4%A8%E7%96%91%23) `207.9K 🔥` `+52%`
1. [中国队米兰冬奥首金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A6%96%E9%87%91%23) `436.4K 🔥`
1. [初三一定记得睡懒觉](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%89%E4%B8%80%E5%AE%9A%E8%AE%B0%E5%BE%97%E7%9D%A1%E6%87%92%E8%A7%89%23) `434.4K 🔥`
1. [曝邓超怒怼项目方维护孙俪](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%82%93%E8%B6%85%E6%80%92%E6%80%BC%E9%A1%B9%E7%9B%AE%E6%96%B9%E7%BB%B4%E6%8A%A4%E5%AD%99%E4%BF%AA%23) `217.6K 🔥`
1. [惠英红 姐别累着但也别闲着](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%20%E5%A7%90%E5%88%AB%E7%B4%AF%E7%9D%80%E4%BD%86%E4%B9%9F%E5%88%AB%E9%97%B2%E7%9D%80%23) `179.6K 🔥`
1. [中储粮平仓机器人问世](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%82%A8%E7%B2%AE%E5%B9%B3%E4%BB%93%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%97%AE%E4%B8%96%23) `173.9K 🔥`
1. [台湾女子被臭豆腐店熏到焦虑拔头发 (Taiwanese woman pulled out her hair in anxiety after being smoked by a stinky tofu shop)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%A5%B3%E5%AD%90%E8%A2%AB%E8%87%AD%E8%B1%86%E8%85%90%E5%BA%97%E7%86%8F%E5%88%B0%E7%84%A6%E8%99%91%E6%8B%94%E5%A4%B4%E5%8F%91%23) `162.7K 🔥`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `123.7K 🔥`
1. [镖人惠英红没打戏好可惜](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E6%83%A0%E8%8B%B1%E7%BA%A2%E6%B2%A1%E6%89%93%E6%88%8F%E5%A5%BD%E5%8F%AF%E6%83%9C%23) `107.2K 🔥`
1. [千玺听到粉丝说他总演小苦瓜的反应 (Qian Xi’s reaction when fans said he always played the role of Little Balsam Pear)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E7%8E%BA%E5%90%AC%E5%88%B0%E7%B2%89%E4%B8%9D%E8%AF%B4%E4%BB%96%E6%80%BB%E6%BC%94%E5%B0%8F%E8%8B%A6%E7%93%9C%E7%9A%84%E5%8F%8D%E5%BA%94%23) `106.6K 🔥`
1. [日本挖到含稀土泥浆的真相来了 (Here’s the truth about mud containing rare earths dug up in Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8C%96%E5%88%B0%E5%90%AB%E7%A8%80%E5%9C%9F%E6%B3%A5%E6%B5%86%E7%9A%84%E7%9C%9F%E7%9B%B8%E6%9D%A5%E4%BA%86%23) `104.7K 🔥`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `102.7K 🔥`
1. [2026势头最猛的星座 (The most powerful zodiac signs in 2026)](https://s.weibo.com/weibo?q=%232026%E5%8A%BF%E5%A4%B4%E6%9C%80%E7%8C%9B%E7%9A%84%E6%98%9F%E5%BA%A7%23) `95.8K 🔥`
1. [徐梦桃金牌 (Xu Mengtao gold medal)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E9%87%91%E7%89%8C%23) `2.1M 🔥` `-68%`
1. [苏翊鸣金牌 (Su Yiming gold medal)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E9%87%91%E7%89%8C%23) `649.2K 🔥` `-56%`
1. [众星祝贺苏翊鸣](https://s.weibo.com/weibo?q=%23%E4%BC%97%E6%98%9F%E7%A5%9D%E8%B4%BA%E8%8B%8F%E7%BF%8A%E9%B8%A3%23) `207.6K 🔥` `-58%`
1. [谁把郭富城鞋踩掉了 (Who stepped on Aaron Kwok's shoes?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%8A%8A%E9%83%AD%E5%AF%8C%E5%9F%8E%E9%9E%8B%E8%B8%A9%E6%8E%89%E4%BA%86%23) `184.1K 🔥` `-30%`
1. [飞驰人生3](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%23) `182.2K 🔥` `-25%`
1. [苏翊鸣教练双膝跪地](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%95%99%E7%BB%83%E5%8F%8C%E8%86%9D%E8%B7%AA%E5%9C%B0%23) `164.2K 🔥` `-52%`
1. [祝贺老将徐梦桃](https://s.weibo.com/weibo?q=%23%E7%A5%9D%E8%B4%BA%E8%80%81%E5%B0%86%E5%BE%90%E6%A2%A6%E6%A1%83%23) `145.6K 🔥` `-27%`
1. [谷爱凌 顶级狩猎者的眼神](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%20%E9%A1%B6%E7%BA%A7%E7%8B%A9%E7%8C%8E%E8%80%85%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `142.5K 🔥` `-42%`
1. [苏翊鸣成中国单板滑雪首位双金王](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%88%90%E4%B8%AD%E5%9B%BD%E5%8D%95%E6%9D%BF%E6%BB%91%E9%9B%AA%E9%A6%96%E4%BD%8D%E5%8F%8C%E9%87%91%E7%8E%8B%23) `140.6K 🔥` `-42%`
1. [短道速滑](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%23) `132.4K 🔥` `-27%`
1. [李健 媚眼抛给瞎子看](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%20%E5%AA%9A%E7%9C%BC%E6%8A%9B%E7%BB%99%E7%9E%8E%E5%AD%90%E7%9C%8B%23) `126.6K 🔥` `-37%`
1. [中国队第二金 (China's second gold medal)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%AC%AC%E4%BA%8C%E9%87%91%23) `108.0K 🔥` `-76%`
1. [徐梦桃说需要继续保持专注](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E8%AF%B4%E9%9C%80%E8%A6%81%E7%BB%A7%E7%BB%AD%E4%BF%9D%E6%8C%81%E4%B8%93%E6%B3%A8%23) `96.7K 🔥` `-49%`
1. [云旗郝熠然滑雪](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E9%83%9D%E7%86%A0%E7%84%B6%E6%BB%91%E9%9B%AA%23) `96.6K 🔥` `-41%`
1. [商洛地震](https://s.weibo.com/weibo?q=%23%E5%95%86%E6%B4%9B%E5%9C%B0%E9%9C%87%23) `94.0K 🔥` `-57%`

Updated at 2026-02-18 23:35:35

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
