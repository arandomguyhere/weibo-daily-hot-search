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

1. [沈阳暴雨 (Heavy rain in Shenyang)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E6%9A%B4%E9%9B%A8%23) `1.4M 🔥` `NEW`
1. [新能源车主3至5年就要换车](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E4%B8%BB3%E8%87%B35%E5%B9%B4%E5%B0%B1%E8%A6%81%E6%8D%A2%E8%BD%A6%23) `1.2M 🔥` `NEW`
1. [巴威明天入海](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E6%98%8E%E5%A4%A9%E5%85%A5%E6%B5%B7%23) `1.1M 🔥` `NEW`
1. [男子造谣杭州暴雨大量车辆淹没被拘](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%80%A0%E8%B0%A3%E6%9D%AD%E5%B7%9E%E6%9A%B4%E9%9B%A8%E5%A4%A7%E9%87%8F%E8%BD%A6%E8%BE%86%E6%B7%B9%E6%B2%A1%E8%A2%AB%E6%8B%98%23) `452.0K 🔥` `NEW`
1. [世界杯四强夺冠概率排名](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%BC%BA%E5%A4%BA%E5%86%A0%E6%A6%82%E7%8E%87%E6%8E%92%E5%90%8D%23) `432.8K 🔥` `NEW`
1. [冉莹颖三次去民政局没离成](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E4%B8%89%E6%AC%A1%E5%8E%BB%E6%B0%91%E6%94%BF%E5%B1%80%E6%B2%A1%E7%A6%BB%E6%88%90%23) `329.2K 🔥` `NEW`
1. [金子涵又开始大点名](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%8F%88%E5%BC%80%E5%A7%8B%E5%A4%A7%E7%82%B9%E5%90%8D%23) `328.5K 🔥` `NEW`
1. [下届世界杯居然有六个主办国](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%B1%8A%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B1%85%E7%84%B6%E6%9C%89%E5%85%AD%E4%B8%AA%E4%B8%BB%E5%8A%9E%E5%9B%BD%23) `327.9K 🔥` `NEW`
1. [鹿晗口误](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8F%A3%E8%AF%AF%23) `327.4K 🔥` `NEW`
1. [阿根廷夺冠概率垫底](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%A4%BA%E5%86%A0%E6%A6%82%E7%8E%87%E5%9E%AB%E5%BA%95%23) `326.6K 🔥` `NEW`
1. [一直很羡慕和老师关系好的人 (I have always envied people who have a good relationship with their teachers.)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E5%BE%88%E7%BE%A1%E6%85%95%E5%92%8C%E8%80%81%E5%B8%88%E5%85%B3%E7%B3%BB%E5%A5%BD%E7%9A%84%E4%BA%BA%23) `207.5K 🔥` `NEW`
1. [施暴者咬掉见义勇为者鼻子吞入肚中](https://s.weibo.com/weibo?q=%23%E6%96%BD%E6%9A%B4%E8%80%85%E5%92%AC%E6%8E%89%E8%A7%81%E4%B9%89%E5%8B%87%E4%B8%BA%E8%80%85%E9%BC%BB%E5%AD%90%E5%90%9E%E5%85%A5%E8%82%9A%E4%B8%AD%23) `206.1K 🔥` `NEW`
1. [恨不得贝林厄姆是自己儿子](https://s.weibo.com/weibo?q=%23%E6%81%A8%E4%B8%8D%E5%BE%97%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E6%98%AF%E8%87%AA%E5%B7%B1%E5%84%BF%E5%AD%90%23) `200.4K 🔥` `NEW`
1. [迪丽热巴的业内口碑](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%84%E4%B8%9A%E5%86%85%E5%8F%A3%E7%A2%91%23) `198.8K 🔥` `NEW`
1. [文章女儿晒和妹妹出游照](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%AB%A0%E5%A5%B3%E5%84%BF%E6%99%92%E5%92%8C%E5%A6%B9%E5%A6%B9%E5%87%BA%E6%B8%B8%E7%85%A7%23) `198.4K 🔥` `NEW`
1. [委内瑞拉代总统成傀儡](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%86%85%E7%91%9E%E6%8B%89%E4%BB%A3%E6%80%BB%E7%BB%9F%E6%88%90%E5%82%80%E5%84%A1%23) `183.4K 🔥` `NEW`
1. [43岁王心凌和小蛮腰比腰](https://s.weibo.com/weibo?q=%2343%E5%B2%81%E7%8E%8B%E5%BF%83%E5%87%8C%E5%92%8C%E5%B0%8F%E8%9B%AE%E8%85%B0%E6%AF%94%E8%85%B0%23) `182.7K 🔥` `NEW`
1. [刘思维回应朱美吉不参加喜夜3](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%80%9D%E7%BB%B4%E5%9B%9E%E5%BA%94%E6%9C%B1%E7%BE%8E%E5%90%89%E4%B8%8D%E5%8F%82%E5%8A%A0%E5%96%9C%E5%A4%9C3%23) `182.7K 🔥` `NEW`
1. [35岁高管立遗赠将千万元资产赠予小姨](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E9%AB%98%E7%AE%A1%E7%AB%8B%E9%81%97%E8%B5%A0%E5%B0%86%E5%8D%83%E4%B8%87%E5%85%83%E8%B5%84%E4%BA%A7%E8%B5%A0%E4%BA%88%E5%B0%8F%E5%A7%A8%23) `181.0K 🔥` `NEW`
1. [沈阳停课1天](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E5%81%9C%E8%AF%BE1%E5%A4%A9%23) `180.2K 🔥` `NEW`
1. [哈兰德女友晒挪威礼服 (Haaland's girlfriend shows off Norwegian dress)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A5%B3%E5%8F%8B%E6%99%92%E6%8C%AA%E5%A8%81%E7%A4%BC%E6%9C%8D%23) `179.8K 🔥` `NEW`
1. [冉莹颖说上海的房子是她提出要卖的](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E8%AF%B4%E4%B8%8A%E6%B5%B7%E7%9A%84%E6%88%BF%E5%AD%90%E6%98%AF%E5%A5%B9%E6%8F%90%E5%87%BA%E8%A6%81%E5%8D%96%E7%9A%84%23) `171.7K 🔥` `NEW`
1. [瑟洛特谈未传球给哈兰德](https://s.weibo.com/weibo?q=%23%E7%91%9F%E6%B4%9B%E7%89%B9%E8%B0%88%E6%9C%AA%E4%BC%A0%E7%90%83%E7%BB%99%E5%93%88%E5%85%B0%E5%BE%B7%23) `165.4K 🔥` `NEW`
1. [Daeny承认BP失误](https://s.weibo.com/weibo?q=%23Daeny%E6%89%BF%E8%AE%A4BP%E5%A4%B1%E8%AF%AF%23) `144.8K 🔥` `NEW`
1. [有人因工作强度离开长鑫](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E5%9B%A0%E5%B7%A5%E4%BD%9C%E5%BC%BA%E5%BA%A6%E7%A6%BB%E5%BC%80%E9%95%BF%E9%91%AB%23) `135.3K 🔥` `NEW`
1. [Kanavi决赛1-17引争议](https://s.weibo.com/weibo?q=%23Kanavi%E5%86%B3%E8%B5%9B1-17%E5%BC%95%E4%BA%89%E8%AE%AE%23) `132.9K 🔥` `NEW`
1. [鹿晗被范志毅叫鹿爷的反应](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%A2%AB%E8%8C%83%E5%BF%97%E6%AF%85%E5%8F%AB%E9%B9%BF%E7%88%B7%E7%9A%84%E5%8F%8D%E5%BA%94%23) `123.0K 🔥` `NEW`
1. [王楚钦孙颖莎全锦赛混双头号种子](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E5%85%A8%E9%94%A6%E8%B5%9B%E6%B7%B7%E5%8F%8C%E5%A4%B4%E5%8F%B7%E7%A7%8D%E5%AD%90%23) `120.8K 🔥` `NEW`
1. [严浩翔烟嗓秒切小甜嗓](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%83%9F%E5%97%93%E7%A7%92%E5%88%87%E5%B0%8F%E7%94%9C%E5%97%93%23) `116.8K 🔥` `NEW`
1. [穆祉丞橙粉海大合照](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%A9%99%E7%B2%89%E6%B5%B7%E5%A4%A7%E5%90%88%E7%85%A7%23) `103.9K 🔥` `NEW`
1. [夏粮增产20亿斤背后的科技密码 (The scientific and technological code behind increasing summer grain production by 2 billion jin)](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E7%B2%AE%E5%A2%9E%E4%BA%A720%E4%BA%BF%E6%96%A4%E8%83%8C%E5%90%8E%E7%9A%84%E7%A7%91%E6%8A%80%E5%AF%86%E7%A0%81%23) `1.1M 🔥` `+112%`
1. [突然觉得带孩子很轻松 (Suddenly I feel that raising children is easy)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E8%A7%89%E5%BE%97%E5%B8%A6%E5%AD%A9%E5%AD%90%E5%BE%88%E8%BD%BB%E6%9D%BE%23) `1.1M 🔥` `+112%`
1. [宜宾地震 (Yibin earthquake)](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%E5%9C%B0%E9%9C%87%23) `469.7K 🔥` `+383%`
1. [功夫女足票房](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%23) `447.6K 🔥` `+549%`
1. [西班牙vs法国](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99vs%E6%B3%95%E5%9B%BD%23) `447.6K 🔥` `+66%`
1. [高中生拍门玩闹何以酿成命案](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E6%8B%8D%E9%97%A8%E7%8E%A9%E9%97%B9%E4%BD%95%E4%BB%A5%E9%85%BF%E6%88%90%E5%91%BD%E6%A1%88%23) `326.1K 🔥` `+111%`
1. [范志毅批哈兰德表现糟糕 (Fan Zhiyi criticizes Haaland for poor performance)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%BF%97%E6%AF%85%E6%89%B9%E5%93%88%E5%85%B0%E5%BE%B7%E8%A1%A8%E7%8E%B0%E7%B3%9F%E7%B3%95%23) `325.1K 🔥` `+55%`
1. [巴威发威青岛巨浪滔天 (Bawei showed off his power and huge waves surged into the sky in Qingdao)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%8F%91%E5%A8%81%E9%9D%92%E5%B2%9B%E5%B7%A8%E6%B5%AA%E6%BB%94%E5%A4%A9%23) `324.4K 🔥` `+196%`
1. [中国女生在韩国救下一车人 (Chinese girl saves a car of people in South Korea)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%9C%A8%E9%9F%A9%E5%9B%BD%E6%95%91%E4%B8%8B%E4%B8%80%E8%BD%A6%E4%BA%BA%23) `208.9K 🔥` `+59%`
1. [有没有体面一点的午休方式](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%B2%A1%E6%9C%89%E4%BD%93%E9%9D%A2%E4%B8%80%E7%82%B9%E7%9A%84%E5%8D%88%E4%BC%91%E6%96%B9%E5%BC%8F%23) `203.5K 🔥` `+106%`
1. [世界杯史上最强半决赛 (The strongest semi-final in World Cup history)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%BC%BA%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `170.4K 🔥` `+147%`
1. [中国预制房在海外火了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A2%84%E5%88%B6%E6%88%BF%E5%9C%A8%E6%B5%B7%E5%A4%96%E7%81%AB%E4%BA%86%23) `157.2K 🔥` `+51%`
1. [长期不换社交头像的人 (People who don’t change their social avatars for a long time)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%B8%8D%E6%8D%A2%E7%A4%BE%E4%BA%A4%E5%A4%B4%E5%83%8F%E7%9A%84%E4%BA%BA%23) `136.3K 🔥` `+29%`
1. [骑手2元买意外险被撞后保险拒赔 (Rider bought accident insurance for 2 yuan but was hit by insurance and refused to pay compensation)](https://s.weibo.com/weibo?q=%23%E9%AA%91%E6%89%8B2%E5%85%83%E4%B9%B0%E6%84%8F%E5%A4%96%E9%99%A9%E8%A2%AB%E6%92%9E%E5%90%8E%E4%BF%9D%E9%99%A9%E6%8B%92%E8%B5%94%23) `120.2K 🔥` `+74%`
1. [问诊后豆包给我写了一首诗](https://s.weibo.com/weibo?q=%23%E9%97%AE%E8%AF%8A%E5%90%8E%E8%B1%86%E5%8C%85%E7%BB%99%E6%88%91%E5%86%99%E4%BA%86%E4%B8%80%E9%A6%96%E8%AF%97%23) `103.7K 🔥` `+50%`
1. [功夫女足票房破5亿 (Kung Fu Women’s Soccer box office exceeds 500 million)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%E7%A0%B45%E4%BA%BF%23) `201.5K 🔥`
1. [樊振东将解说世界杯决赛](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%B0%86%E8%A7%A3%E8%AF%B4%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `181.3K 🔥`
1. [辛纳卫冕温网男单冠军 (Sinner defends Wimbledon men's singles title)](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E7%BA%B3%E5%8D%AB%E5%86%95%E6%B8%A9%E7%BD%91%E7%94%B7%E5%8D%95%E5%86%A0%E5%86%9B%23) `123.7K 🔥`
1. [灿如繁星热度未破8000 (Bright as Stars, the popularity has not exceeded 8000)](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E7%83%AD%E5%BA%A6%E6%9C%AA%E7%A0%B48000%23) `324.6K 🔥` `-44%`
1. [中华人民共和国外交部郑重声明](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E5%A4%96%E4%BA%A4%E9%83%A8%E9%83%91%E9%87%8D%E5%A3%B0%E6%98%8E%23) `205.3K 🔥` `-74%`
1. [沈阳将在全市实行紧急避险措施](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E5%B0%86%E5%9C%A8%E5%85%A8%E5%B8%82%E5%AE%9E%E8%A1%8C%E7%B4%A7%E6%80%A5%E9%81%BF%E9%99%A9%E6%8E%AA%E6%96%BD%23) `102.9K 🔥` `-37%`

Updated at 2026-07-13 09:05:22

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
