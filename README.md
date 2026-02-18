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

1. [蒙牛贺中国队首金 (Mengniu congratulates Chinese team on first gold medal)](https://s.weibo.com/weibo?q=%23%E8%92%99%E7%89%9B%E8%B4%BA%E4%B8%AD%E5%9B%BD%E9%98%9F%E9%A6%96%E9%87%91%23) `838.3K 🔥` `NEW`
1. [徐梦桃 文能浪姐唱跳武能冬奥夺冠](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%20%E6%96%87%E8%83%BD%E6%B5%AA%E5%A7%90%E5%94%B1%E8%B7%B3%E6%AD%A6%E8%83%BD%E5%86%AC%E5%A5%A5%E5%A4%BA%E5%86%A0%23) `828.4K 🔥` `NEW`
1. [飞驰人生3](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%23) `244.1K 🔥` `NEW`
1. [徐梦桃让世界看见中国红](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E8%AE%A9%E4%B8%96%E7%95%8C%E7%9C%8B%E8%A7%81%E4%B8%AD%E5%9B%BD%E7%BA%A2%23) `241.2K 🔥` `NEW`
1. [吴京 火辣胡茬男带球跑](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E7%81%AB%E8%BE%A3%E8%83%A1%E8%8C%AC%E7%94%B7%E5%B8%A6%E7%90%83%E8%B7%91%23) `186.5K 🔥` `NEW`
1. [短道速滑](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%23) `180.4K 🔥` `NEW`
1. [中储粮平仓机器人问世](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%82%A8%E7%B2%AE%E5%B9%B3%E4%BB%93%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%97%AE%E4%B8%96%23) `172.1K 🔥` `NEW`
1. [奖牌榜](https://s.weibo.com/weibo?q=%23%E5%A5%96%E7%89%8C%E6%A6%9C%23) `168.0K 🔥` `NEW`
1. [徐梦桃回应夺金](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E5%9B%9E%E5%BA%94%E5%A4%BA%E9%87%91%23) `160.5K 🔥` `NEW`
1. [中国国家队祝贺徐梦桃卫冕夺金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E9%98%9F%E7%A5%9D%E8%B4%BA%E5%BE%90%E6%A2%A6%E6%A1%83%E5%8D%AB%E5%86%95%E5%A4%BA%E9%87%91%23) `150.4K 🔥` `NEW`
1. [年入35万扛楼小伙回应买车质疑 (A young man with an annual income of 350,000 yuan responds to questions about buying a car)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%85%A535%E4%B8%87%E6%89%9B%E6%A5%BC%E5%B0%8F%E4%BC%99%E5%9B%9E%E5%BA%94%E4%B9%B0%E8%BD%A6%E8%B4%A8%E7%96%91%23) `137.1K 🔥` `NEW`
1. [澳大利亚 空中技巧](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%20%E7%A9%BA%E4%B8%AD%E6%8A%80%E5%B7%A7%23) `121.0K 🔥` `NEW`
1. [惊蛰无声 反转](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%20%E5%8F%8D%E8%BD%AC%23) `109.8K 🔥` `NEW`
1. [千玺听到粉丝说他总演小苦瓜的反应](https://s.weibo.com/weibo?q=%23%E5%8D%83%E7%8E%BA%E5%90%AC%E5%88%B0%E7%B2%89%E4%B8%9D%E8%AF%B4%E4%BB%96%E6%80%BB%E6%BC%94%E5%B0%8F%E8%8B%A6%E7%93%9C%E7%9A%84%E5%8F%8D%E5%BA%94%23) `101.7K 🔥` `NEW`
1. [中国队一晚2金1铜](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E4%B8%80%E6%99%9A2%E9%87%911%E9%93%9C%23) `94.0K 🔥` `NEW`
1. [苏翊鸣4年前的目标就是坡障金牌](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A34%E5%B9%B4%E5%89%8D%E7%9A%84%E7%9B%AE%E6%A0%87%E5%B0%B1%E6%98%AF%E5%9D%A1%E9%9A%9C%E9%87%91%E7%89%8C%23) `92.8K 🔥` `NEW`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `89.1K 🔥` `NEW`
1. [施华蔻让李一桐爸妈美回当年 (Schwarzkopf makes Li Yitong’s parents look beautiful again)](https://s.weibo.com/weibo?q=%23%E6%96%BD%E5%8D%8E%E8%94%BB%E8%AE%A9%E6%9D%8E%E4%B8%80%E6%A1%90%E7%88%B8%E5%A6%88%E7%BE%8E%E5%9B%9E%E5%BD%93%E5%B9%B4%23) `472.3K 🔥` `+138%`
1. [众星祝贺苏翊鸣](https://s.weibo.com/weibo?q=%23%E4%BC%97%E6%98%9F%E7%A5%9D%E8%B4%BA%E8%8B%8F%E7%BF%8A%E9%B8%A3%23) `491.7K 🔥`
1. [孔凡钰 可惜](https://s.weibo.com/weibo?q=%23%E5%AD%94%E5%87%A1%E9%92%B0%20%E5%8F%AF%E6%83%9C%23) `220.7K 🔥`
1. [小猫以为人也是怀孕两个月就生](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%BB%A5%E4%B8%BA%E4%BA%BA%E4%B9%9F%E6%98%AF%E6%80%80%E5%AD%95%E4%B8%A4%E4%B8%AA%E6%9C%88%E5%B0%B1%E7%94%9F%23) `199.9K 🔥`
1. [台湾女子被臭豆腐店熏到焦虑拔头发 (Taiwanese woman pulled out her hair in anxiety after being smoked by a stinky tofu shop)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%A5%B3%E5%AD%90%E8%A2%AB%E8%87%AD%E8%B1%86%E8%85%90%E5%BA%97%E7%86%8F%E5%88%B0%E7%84%A6%E8%99%91%E6%8B%94%E5%A4%B4%E5%8F%91%23) `177.5K 🔥`
1. [惠英红 姐别累着但也别闲着](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%20%E5%A7%90%E5%88%AB%E7%B4%AF%E7%9D%80%E4%BD%86%E4%B9%9F%E5%88%AB%E9%97%B2%E7%9D%80%23) `172.7K 🔥`
1. [云旗郝熠然滑雪](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E9%83%9D%E7%86%A0%E7%84%B6%E6%BB%91%E9%9B%AA%23) `162.4K 🔥`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `150.2K 🔥`
1. [镖人惠英红没打戏好可惜](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E6%83%A0%E8%8B%B1%E7%BA%A2%E6%B2%A1%E6%89%93%E6%88%8F%E5%A5%BD%E5%8F%AF%E6%83%9C%23) `132.9K 🔥`
1. [徐梦桃金牌 (Xu Mengtao gold medal)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E9%87%91%E7%89%8C%23) `6.6M 🔥` `-41%`
1. [苏翊鸣金牌 (Su Yiming gold medal)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E9%87%91%E7%89%8C%23) `1.5M 🔥` `-32%`
1. [2026春节消费市场红火开场](https://s.weibo.com/weibo?q=%232026%E6%98%A5%E8%8A%82%E6%B6%88%E8%B4%B9%E5%B8%82%E5%9C%BA%E7%BA%A2%E7%81%AB%E5%BC%80%E5%9C%BA%23) `1.2M 🔥` `-33%`
1. [初三一定记得睡懒觉](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%89%E4%B8%80%E5%AE%9A%E8%AE%B0%E5%BE%97%E7%9D%A1%E6%87%92%E8%A7%89%23) `482.5K 🔥` `-50%`
1. [中国队米兰冬奥首金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A6%96%E9%87%91%23) `470.3K 🔥` `-58%`
1. [中国队第二金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%AC%AC%E4%BA%8C%E9%87%91%23) `457.3K 🔥` `-56%`
1. [苏翊鸣教练双膝跪地](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%95%99%E7%BB%83%E5%8F%8C%E8%86%9D%E8%B7%AA%E5%9C%B0%23) `341.9K 🔥` `-29%`
1. [谁把郭富城鞋踩掉了 (Who stepped on Aaron Kwok's shoes?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%8A%8A%E9%83%AD%E5%AF%8C%E5%9F%8E%E9%9E%8B%E8%B8%A9%E6%8E%89%E4%BA%86%23) `261.6K 🔥` `-22%`
1. [曝邓超怒怼项目方维护孙俪](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%82%93%E8%B6%85%E6%80%92%E6%80%BC%E9%A1%B9%E7%9B%AE%E6%96%B9%E7%BB%B4%E6%8A%A4%E5%AD%99%E4%BF%AA%23) `257.8K 🔥` `-41%`
1. [谷爱凌 顶级狩猎者的眼神](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%20%E9%A1%B6%E7%BA%A7%E7%8B%A9%E7%8C%8E%E8%80%85%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `245.1K 🔥` `-25%`
1. [苏翊鸣成中国单板滑雪首位双金王](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%88%90%E4%B8%AD%E5%9B%BD%E5%8D%95%E6%9D%BF%E6%BB%91%E9%9B%AA%E9%A6%96%E4%BD%8D%E5%8F%8C%E9%87%91%E7%8E%8B%23) `243.4K 🔥` `-41%`
1. [苏翊鸣边唱国歌边哭](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E8%BE%B9%E5%94%B1%E5%9B%BD%E6%AD%8C%E8%BE%B9%E5%93%AD%23) `241.0K 🔥` `-38%`
1. [商洛地震](https://s.weibo.com/weibo?q=%23%E5%95%86%E6%B4%9B%E5%9C%B0%E9%9C%87%23) `218.1K 🔥` `-52%`
1. [李健 媚眼抛给瞎子看](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%20%E5%AA%9A%E7%9C%BC%E6%8A%9B%E7%BB%99%E7%9E%8E%E5%AD%90%E7%9C%8B%23) `199.5K 🔥` `-27%`
1. [祝贺老将徐梦桃](https://s.weibo.com/weibo?q=%23%E7%A5%9D%E8%B4%BA%E8%80%81%E5%B0%86%E5%BE%90%E6%A2%A6%E6%A1%83%23) `199.2K 🔥` `-38%`
1. [日本挖到含稀土泥浆的真相来了 (Here’s the truth about mud containing rare earths dug up in Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8C%96%E5%88%B0%E5%90%AB%E7%A8%80%E5%9C%9F%E6%B3%A5%E6%B5%86%E7%9A%84%E7%9C%9F%E7%9B%B8%E6%9D%A5%E4%BA%86%23) `124.8K 🔥` `-24%`
1. [汕头烟花 (Shantou Fireworks)](https://s.weibo.com/weibo?q=%23%E6%B1%95%E5%A4%B4%E7%83%9F%E8%8A%B1%23) `117.9K 🔥` `-31%`
1. [龙洋主持完春晚哭了 (Long Yang cried after hosting the Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E6%B4%8B%E4%B8%BB%E6%8C%81%E5%AE%8C%E6%98%A5%E6%99%9A%E5%93%AD%E4%BA%86%23) `116.3K 🔥` `-40%`
1. [邵琪铜牌](https://s.weibo.com/weibo?q=%23%E9%82%B5%E7%90%AA%E9%93%9C%E7%89%8C%23) `111.0K 🔥` `-67%`
1. [镖人 武侠不死](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%20%E6%AD%A6%E4%BE%A0%E4%B8%8D%E6%AD%BB%23) `109.2K 🔥` `-23%`
1. [2026势头最猛的星座 (The most powerful zodiac signs in 2026)](https://s.weibo.com/weibo?q=%232026%E5%8A%BF%E5%A4%B4%E6%9C%80%E7%8C%9B%E7%9A%84%E6%98%9F%E5%BA%A7%23) `106.5K 🔥` `-33%`
1. [CCTV6 三女休夫](https://s.weibo.com/weibo?q=%23CCTV6%20%E4%B8%89%E5%A5%B3%E4%BC%91%E5%A4%AB%23) `105.8K 🔥` `-51%`
1. [妈妈为苏翊鸣擦眼泪](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E4%B8%BA%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%93%A6%E7%9C%BC%E6%B3%AA%23) `105.3K 🔥` `-23%`
1. [冬奥会直播](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E4%BC%9A%E7%9B%B4%E6%92%AD%23) `103.4K 🔥` `-55%`
1. [冬奥会奖牌榜](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E4%BC%9A%E5%A5%96%E7%89%8C%E6%A6%9C%23) `100.9K 🔥` `-44%`
1. [苏翊鸣第三跳 裁判压分](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%AC%AC%E4%B8%89%E8%B7%B3%20%E8%A3%81%E5%88%A4%E5%8E%8B%E5%88%86%23) `92.6K 🔥` `-56%`

Updated at 2026-02-18 22:38:39

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
