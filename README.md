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

1. [多地官宣春假清明连休6天 (Officials in many places announced that the Spring Festival will be closed for 6 consecutive days during Qingming Festival)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%AE%98%E5%AE%A3%E6%98%A5%E5%81%87%E6%B8%85%E6%98%8E%E8%BF%9E%E4%BC%916%E5%A4%A9%23) `1.2M 🔥` `NEW`
1. [被骂了千年的小动物们该翻身了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%AA%82%E4%BA%86%E5%8D%83%E5%B9%B4%E7%9A%84%E5%B0%8F%E5%8A%A8%E7%89%A9%E4%BB%AC%E8%AF%A5%E7%BF%BB%E8%BA%AB%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [十五五规划109项重大工程项目一览](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92109%E9%A1%B9%E9%87%8D%E5%A4%A7%E5%B7%A5%E7%A8%8B%E9%A1%B9%E7%9B%AE%E4%B8%80%E8%A7%88%23) `959.8K 🔥` `NEW`
1. [建议中小学春秋假也要考虑家长放假](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%AD%E5%B0%8F%E5%AD%A6%E6%98%A5%E7%A7%8B%E5%81%87%E4%B9%9F%E8%A6%81%E8%80%83%E8%99%91%E5%AE%B6%E9%95%BF%E6%94%BE%E5%81%87%23) `681.9K 🔥` `NEW`
1. [你的肉松肉紧](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E8%82%89%E6%9D%BE%E8%82%89%E7%B4%A7%23) `619.2K 🔥` `NEW`
1. [柳州辟谣本地女子出轨同事感染HIV](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E8%BE%9F%E8%B0%A3%E6%9C%AC%E5%9C%B0%E5%A5%B3%E5%AD%90%E5%87%BA%E8%BD%A8%E5%90%8C%E4%BA%8B%E6%84%9F%E6%9F%93HIV%23) `618.9K 🔥` `NEW`
1. [美国24州联合起诉特朗普政府](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD24%E5%B7%9E%E8%81%94%E5%90%88%E8%B5%B7%E8%AF%89%E7%89%B9%E6%9C%97%E6%99%AE%E6%94%BF%E5%BA%9C%23) `618.7K 🔥` `NEW`
1. [军费增长7%专家解读](https://s.weibo.com/weibo?q=%23%E5%86%9B%E8%B4%B9%E5%A2%9E%E9%95%BF7%25%E4%B8%93%E5%AE%B6%E8%A7%A3%E8%AF%BB%23) `616.3K 🔥` `NEW`
1. [直播两会开放团组活动](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E4%B8%A4%E4%BC%9A%E5%BC%80%E6%94%BE%E5%9B%A2%E7%BB%84%E6%B4%BB%E5%8A%A8%23) `614.6K 🔥` `NEW`
1. [建议提高农村居民育儿补贴](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%8F%90%E9%AB%98%E5%86%9C%E6%9D%91%E5%B1%85%E6%B0%91%E8%82%B2%E5%84%BF%E8%A1%A5%E8%B4%B4%23) `613.9K 🔥` `NEW`
1. [老舅妈嫩娘去世 (My old aunt and young lady passed away)](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%88%85%E5%A6%88%E5%AB%A9%E5%A8%98%E5%8E%BB%E4%B8%96%23) `495.2K 🔥` `NEW`
1. [女生800元买猫被传染全身长猫藓](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F800%E5%85%83%E4%B9%B0%E7%8C%AB%E8%A2%AB%E4%BC%A0%E6%9F%93%E5%85%A8%E8%BA%AB%E9%95%BF%E7%8C%AB%E8%97%93%23) `375.3K 🔥` `NEW`
1. [龚俊陆小凤造型](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E9%99%86%E5%B0%8F%E5%87%A4%E9%80%A0%E5%9E%8B%23) `342.0K 🔥` `NEW`
1. [伊朗军队誓为遭击沉军舰复仇](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%86%9B%E9%98%9F%E8%AA%93%E4%B8%BA%E9%81%AD%E5%87%BB%E6%B2%89%E5%86%9B%E8%88%B0%E5%A4%8D%E4%BB%87%23) `328.1K 🔥` `NEW`
1. [草本初色开启蚕丝内衣新纪元](https://s.weibo.com/weibo?q=%23%E8%8D%89%E6%9C%AC%E5%88%9D%E8%89%B2%E5%BC%80%E5%90%AF%E8%9A%95%E4%B8%9D%E5%86%85%E8%A1%A3%E6%96%B0%E7%BA%AA%E5%85%83%23) `325.7K 🔥` `NEW`
1. [超市招收银员限制30岁体重110斤](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%B8%82%E6%8B%9B%E6%94%B6%E9%93%B6%E5%91%98%E9%99%90%E5%88%B630%E5%B2%81%E4%BD%93%E9%87%8D110%E6%96%A4%23) `325.5K 🔥` `NEW`
1. [惠英红 叫声妈咪保你在香港风生水起](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%20%E5%8F%AB%E5%A3%B0%E5%A6%88%E5%92%AA%E4%BF%9D%E4%BD%A0%E5%9C%A8%E9%A6%99%E6%B8%AF%E9%A3%8E%E7%94%9F%E6%B0%B4%E8%B5%B7%23) `325.3K 🔥` `NEW`
1. [刘亦菲夏日松弛感拉满](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%A4%8F%E6%97%A5%E6%9D%BE%E5%BC%9B%E6%84%9F%E6%8B%89%E6%BB%A1%23) `324.7K 🔥` `NEW`
1. [张予曦是花仙子本仙吧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E6%98%AF%E8%8A%B1%E4%BB%99%E5%AD%90%E6%9C%AC%E4%BB%99%E5%90%A7%23) `311.6K 🔥` `NEW`
1. [蔡徐坤阳光感好绝](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E9%98%B3%E5%85%89%E6%84%9F%E5%A5%BD%E7%BB%9D%23) `305.9K 🔥` `NEW`
1. [今年首个官宣涨价的车企 (The first car company to officially announce a price increase this year)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E9%A6%96%E4%B8%AA%E5%AE%98%E5%AE%A3%E6%B6%A8%E4%BB%B7%E7%9A%84%E8%BD%A6%E4%BC%81%23) `291.1K 🔥` `NEW`
1. [十日终焉纯大男主群像](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E7%BA%AF%E5%A4%A7%E7%94%B7%E4%B8%BB%E7%BE%A4%E5%83%8F%23) `160.3K 🔥` `NEW`
1. [刘国梁高度肯定樊振东](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%A2%81%E9%AB%98%E5%BA%A6%E8%82%AF%E5%AE%9A%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `159.3K 🔥` `NEW`
1. [建议实行初中直升高中](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%AE%9E%E8%A1%8C%E5%88%9D%E4%B8%AD%E7%9B%B4%E5%8D%87%E9%AB%98%E4%B8%AD%23) `155.9K 🔥` `NEW`
1. [死了么团队改名回归](https://s.weibo.com/weibo?q=%23%E6%AD%BB%E4%BA%86%E4%B9%88%E5%9B%A2%E9%98%9F%E6%94%B9%E5%90%8D%E5%9B%9E%E5%BD%92%23) `153.9K 🔥` `NEW`
1. [有效中文vs无效中文](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%95%88%E4%B8%AD%E6%96%87vs%E6%97%A0%E6%95%88%E4%B8%AD%E6%96%87%23) `150.6K 🔥` `NEW`
1. [政协委员说要让青年愿意进工厂](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%8D%8F%E5%A7%94%E5%91%98%E8%AF%B4%E8%A6%81%E8%AE%A9%E9%9D%92%E5%B9%B4%E6%84%BF%E6%84%8F%E8%BF%9B%E5%B7%A5%E5%8E%82%23) `144.8K 🔥` `NEW`
1. [逐玉追剧日历](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E8%BF%BD%E5%89%A7%E6%97%A5%E5%8E%86%23) `144.1K 🔥` `NEW`
1. [和高中班主任说来读我的研](https://s.weibo.com/weibo?q=%23%E5%92%8C%E9%AB%98%E4%B8%AD%E7%8F%AD%E4%B8%BB%E4%BB%BB%E8%AF%B4%E6%9D%A5%E8%AF%BB%E6%88%91%E7%9A%84%E7%A0%94%23) `137.6K 🔥` `NEW`
1. [泽连斯基威胁匈牙利总理](https://s.weibo.com/weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E5%A8%81%E8%83%81%E5%8C%88%E7%89%99%E5%88%A9%E6%80%BB%E7%90%86%23) `114.0K 🔥` `NEW`
1. [小米miclaw开启封测 (Xiaomi miclaw opens closed beta test)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3miclaw%E5%BC%80%E5%90%AF%E5%B0%81%E6%B5%8B%23) `109.9K 🔥` `NEW`
1. [委员称性别歧视更隐蔽](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E7%A7%B0%E6%80%A7%E5%88%AB%E6%AD%A7%E8%A7%86%E6%9B%B4%E9%9A%90%E8%94%BD%23) `107.1K 🔥` `NEW`
1. [苹果山药糕](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%B1%B1%E8%8D%AF%E7%B3%95%23) `104.1K 🔥` `NEW`
1. [谭松韵新剧气血十足老辈子来的](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E6%96%B0%E5%89%A7%E6%B0%94%E8%A1%80%E5%8D%81%E8%B6%B3%E8%80%81%E8%BE%88%E5%AD%90%E6%9D%A5%E7%9A%84%23) `102.6K 🔥` `NEW`
1. [同时给六只猫洗澡是种什么体验](https://s.weibo.com/weibo?q=%23%E5%90%8C%E6%97%B6%E7%BB%99%E5%85%AD%E5%8F%AA%E7%8C%AB%E6%B4%97%E6%BE%A1%E6%98%AF%E7%A7%8D%E4%BB%80%E4%B9%88%E4%BD%93%E9%AA%8C%23) `97.1K 🔥` `NEW`
1. [全新腾势Z9GT上市价26.98万元起 (The new Denza Z9GT is launched with a starting price of 269,800 yuan)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E8%85%BE%E5%8A%BFZ9GT%E4%B8%8A%E5%B8%82%E4%BB%B726.98%E4%B8%87%E5%85%83%E8%B5%B7%23) `947.3K 🔥` `+48%`
1. [霸王茶姬免单](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E5%85%8D%E5%8D%95%23) `924.0K 🔥` `+47%`
1. [委内瑞拉决定同美国恢复外交关系](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%86%85%E7%91%9E%E6%8B%89%E5%86%B3%E5%AE%9A%E5%90%8C%E7%BE%8E%E5%9B%BD%E6%81%A2%E5%A4%8D%E5%A4%96%E4%BA%A4%E5%85%B3%E7%B3%BB%23) `612.9K 🔥` `+71%`
1. [重案六组 (Serious Case Group Six)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E6%A1%88%E5%85%AD%E7%BB%84%23) `468.8K 🔥` `+51%`
1. [曝现在就出发4金晨被替换了 (It is revealed that Jin Chen has been replaced in Let’s Go Now 4)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%E9%87%91%E6%99%A8%E8%A2%AB%E6%9B%BF%E6%8D%A2%E4%BA%86%23) `357.8K 🔥` `+50%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `299.3K 🔥` `+49%`
1. [中方吊唁哈梅内伊遇难](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%90%8A%E5%94%81%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E9%81%87%E9%9A%BE%23) `184.7K 🔥` `+50%`
1. [伊朗外长拒绝与美国谈判](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E6%8B%92%E7%BB%9D%E4%B8%8E%E7%BE%8E%E5%9B%BD%E8%B0%88%E5%88%A4%23) `568.6K 🔥`
1. [曝现在就出发4沈腾白敬亭带队 (It is revealed that Let’s Go Now 4 is led by Shen Teng and Bai Jingting)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%E6%B2%88%E8%85%BE%E7%99%BD%E6%95%AC%E4%BA%AD%E5%B8%A6%E9%98%9F%23) `291.0K 🔥`
1. [伊朗称其无人机袭击林肯号航母](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%85%B6%E6%97%A0%E4%BA%BA%E6%9C%BA%E8%A2%AD%E5%87%BB%E6%9E%97%E8%82%AF%E5%8F%B7%E8%88%AA%E6%AF%8D%23) `134.4K 🔥`
1. [两会](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BC%9A%23) `107.0K 🔥`
1. [凤舞九天](https://s.weibo.com/weibo?q=%23%E5%87%A4%E8%88%9E%E4%B9%9D%E5%A4%A9%23) `232.8K 🔥` `-46%`
1. [利率下调房贷省出110万元](https://s.weibo.com/weibo?q=%23%E5%88%A9%E7%8E%87%E4%B8%8B%E8%B0%83%E6%88%BF%E8%B4%B7%E7%9C%81%E5%87%BA110%E4%B8%87%E5%85%83%23) `197.7K 🔥` `-75%`
1. [被医生咆哮塞200元母亲婉拒捐款 (The mother who was yelled at by the doctor and stuffed her with NT$200 declined the donation.)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%8C%BB%E7%94%9F%E5%92%86%E5%93%AE%E5%A1%9E200%E5%85%83%E6%AF%8D%E4%BA%B2%E5%A9%89%E6%8B%92%E6%8D%90%E6%AC%BE%23) `192.8K 🔥` `-82%`
1. [伊朗称美军林肯号航母被击中后撤](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E5%86%9B%E6%9E%97%E8%82%AF%E5%8F%B7%E8%88%AA%E6%AF%8D%E8%A2%AB%E5%87%BB%E4%B8%AD%E5%90%8E%E6%92%A4%23) `159.9K 🔥` `-44%`
1. [戴电子手表人的统一奇怪动作](https://s.weibo.com/weibo?q=%23%E6%88%B4%E7%94%B5%E5%AD%90%E6%89%8B%E8%A1%A8%E4%BA%BA%E7%9A%84%E7%BB%9F%E4%B8%80%E5%A5%87%E6%80%AA%E5%8A%A8%E4%BD%9C%23) `141.4K 🔥` `-77%`
1. [日本再次向海洋排放核污染水](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%86%8D%E6%AC%A1%E5%90%91%E6%B5%B7%E6%B4%8B%E6%8E%92%E6%94%BE%E6%A0%B8%E6%B1%A1%E6%9F%93%E6%B0%B4%23) `101.6K 🔥` `-71%`

Updated at 2026-03-06 12:25:04

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
