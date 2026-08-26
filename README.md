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

1. [和文物碰个面](https://s.weibo.com/weibo?q=%23%E5%92%8C%E6%96%87%E7%89%A9%E7%A2%B0%E4%B8%AA%E9%9D%A2%23) `565.9K 🔥` `NEW`
1. [复仇者联盟5](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E4%BB%87%E8%80%85%E8%81%94%E7%9B%9F5%23) `407.2K 🔥` `NEW`
1. [包贝尔包文婧去年才生二胎](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E5%8C%85%E6%96%87%E5%A9%A7%E5%8E%BB%E5%B9%B4%E6%89%8D%E7%94%9F%E4%BA%8C%E8%83%8E%23) `384.5K 🔥` `NEW`
1. [包贝尔包文婧婚礼誓词](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E5%8C%85%E6%96%87%E5%A9%A7%E5%A9%9A%E7%A4%BC%E8%AA%93%E8%AF%8D%23) `329.3K 🔥` `NEW`
1. [理想MEGA发布会定档9月2日](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3MEGA%E5%8F%91%E5%B8%83%E4%BC%9A%E5%AE%9A%E6%A1%A39%E6%9C%882%E6%97%A5%23) `323.5K 🔥` `NEW`
1. [敢和欧盟标准较真的鲜奶](https://s.weibo.com/weibo?q=%23%E6%95%A2%E5%92%8C%E6%AC%A7%E7%9B%9F%E6%A0%87%E5%87%86%E8%BE%83%E7%9C%9F%E7%9A%84%E9%B2%9C%E5%A5%B6%23) `231.6K 🔥` `NEW`
1. [遇害女生赴韩目的是领取毕业证](https://s.weibo.com/weibo?q=%23%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E8%B5%B4%E9%9F%A9%E7%9B%AE%E7%9A%84%E6%98%AF%E9%A2%86%E5%8F%96%E6%AF%95%E4%B8%9A%E8%AF%81%23) `230.7K 🔥` `NEW`
1. [早春晴朗开播](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%BC%80%E6%92%AD%23) `211.9K 🔥` `NEW`
1. [外卖员车祸去世DNA鉴定儿子非亲生](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%91%98%E8%BD%A6%E7%A5%B8%E5%8E%BB%E4%B8%96DNA%E9%89%B4%E5%AE%9A%E5%84%BF%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%23) `158.8K 🔥` `NEW`
1. [罗永浩谈捐助扶老人店主初衷](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%B0%88%E6%8D%90%E5%8A%A9%E6%89%B6%E8%80%81%E4%BA%BA%E5%BA%97%E4%B8%BB%E5%88%9D%E8%A1%B7%23) `158.5K 🔥` `NEW`
1. [小天才手表回应给101斤女孩判偏重](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%A9%E6%89%8D%E6%89%8B%E8%A1%A8%E5%9B%9E%E5%BA%94%E7%BB%99101%E6%96%A4%E5%A5%B3%E5%AD%A9%E5%88%A4%E5%81%8F%E9%87%8D%23) `157.8K 🔥` `NEW`
1. [女生在韩遇害嫌疑人为中国籍男子](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%9C%A8%E9%9F%A9%E9%81%87%E5%AE%B3%E5%AB%8C%E7%96%91%E4%BA%BA%E4%B8%BA%E4%B8%AD%E5%9B%BD%E7%B1%8D%E7%94%B7%E5%AD%90%23) `156.9K 🔥` `NEW`
1. [杨博文空降少时2超话](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E7%A9%BA%E9%99%8D%E5%B0%91%E6%97%B62%E8%B6%85%E8%AF%9D%23) `156.0K 🔥` `NEW`
1. [扶老人遭索赔事件当初是怎么调解的](https://s.weibo.com/weibo?q=%23%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%94%E4%BA%8B%E4%BB%B6%E5%BD%93%E5%88%9D%E6%98%AF%E6%80%8E%E4%B9%88%E8%B0%83%E8%A7%A3%E7%9A%84%23) `155.9K 🔥` `NEW`
1. [丁禹兮孟子义握手cp张力](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%AD%9F%E5%AD%90%E4%B9%89%E6%8F%A1%E6%89%8Bcp%E5%BC%A0%E5%8A%9B%23) `151.6K 🔥` `NEW`
1. [报案人就是凶手](https://s.weibo.com/weibo?q=%23%E6%8A%A5%E6%A1%88%E4%BA%BA%E5%B0%B1%E6%98%AF%E5%87%B6%E6%89%8B%23) `4.1M 🔥` `+1420%`
1. [杀害中国女生嫌犯男扮女装混淆警方](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%AB%8C%E7%8A%AF%E7%94%B7%E6%89%AE%E5%A5%B3%E8%A3%85%E6%B7%B7%E6%B7%86%E8%AD%A6%E6%96%B9%23) `1.2M 🔥` `+37%`
1. [蔡徐坤代言 起亚全新赛图斯上市](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E4%BB%A3%E8%A8%80%20%E8%B5%B7%E4%BA%9A%E5%85%A8%E6%96%B0%E8%B5%9B%E5%9B%BE%E6%96%AF%E4%B8%8A%E5%B8%82%23) `892.5K 🔥` `+39%`
1. [洪崖洞附近母女疑触电女儿尚未脱险](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E5%B4%96%E6%B4%9E%E9%99%84%E8%BF%91%E6%AF%8D%E5%A5%B3%E7%96%91%E8%A7%A6%E7%94%B5%E5%A5%B3%E5%84%BF%E5%B0%9A%E6%9C%AA%E8%84%B1%E9%99%A9%23) `859.9K 🔥` `+201%`
1. [医生谈1米67女孩101斤被认定偏重](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%B0%881%E7%B1%B367%E5%A5%B3%E5%AD%A9101%E6%96%A4%E8%A2%AB%E8%AE%A4%E5%AE%9A%E5%81%8F%E9%87%8D%23) `398.3K 🔥` `+25%`
1. [防台风安全防护攻略请收好](https://s.weibo.com/weibo?q=%23%E9%98%B2%E5%8F%B0%E9%A3%8E%E5%AE%89%E5%85%A8%E9%98%B2%E6%8A%A4%E6%94%BB%E7%95%A5%E8%AF%B7%E6%94%B6%E5%A5%BD%23) `985.2K 🔥`
1. [过得好的人最明显的标志 (The most obvious sign of a person who is doing well)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BE%97%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%9C%80%E6%98%8E%E6%98%BE%E7%9A%84%E6%A0%87%E5%BF%97%23) `772.9K 🔥`
1. [金鹰奖 刘亦菲国籍](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E5%88%98%E4%BA%A6%E8%8F%B2%E5%9B%BD%E7%B1%8D%23) `368.5K 🔥`
1. [杭州电梯事件 监控未被覆盖](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%94%B5%E6%A2%AF%E4%BA%8B%E4%BB%B6%20%E7%9B%91%E6%8E%A7%E6%9C%AA%E8%A2%AB%E8%A6%86%E7%9B%96%23) `358.7K 🔥`
1. [张真源凌晨开车去接马嘉祺](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%87%8C%E6%99%A8%E5%BC%80%E8%BD%A6%E5%8E%BB%E6%8E%A5%E9%A9%AC%E5%98%89%E7%A5%BA%23) `348.2K 🔥`
1. [济州岛连环失踪案](https://s.weibo.com/weibo?q=%23%E6%B5%8E%E5%B7%9E%E5%B2%9B%E8%BF%9E%E7%8E%AF%E5%A4%B1%E8%B8%AA%E6%A1%88%23) `339.1K 🔥`
1. [陈赫被问爱情公寓回归季](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E8%A2%AB%E9%97%AE%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%9B%9E%E5%BD%92%E5%AD%A3%23) `567.1K 🔥` `-27%`
1. [洪崖洞目击者称担心触电不敢救 (Witnesses in Hongyadong said they were afraid of being electrocuted and did not dare to save people.)](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E5%B4%96%E6%B4%9E%E7%9B%AE%E5%87%BB%E8%80%85%E7%A7%B0%E6%8B%85%E5%BF%83%E8%A7%A6%E7%94%B5%E4%B8%8D%E6%95%A2%E6%95%91%23) `564.8K 🔥` `-39%`
1. [国自然](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%87%AA%E7%84%B6%23) `386.7K 🔥` `-29%`
1. [济公4制片人杨涛发博了](https://s.weibo.com/weibo?q=%23%E6%B5%8E%E5%85%AC4%E5%88%B6%E7%89%87%E4%BA%BA%E6%9D%A8%E6%B6%9B%E5%8F%91%E5%8D%9A%E4%BA%86%23) `291.7K 🔥` `-23%`
1. [goodthings 难听](https://s.weibo.com/weibo?q=%23goodthings%20%E9%9A%BE%E5%90%AC%23) `230.8K 🔥` `-24%`
1. [小猫把自己睡成小手套了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E6%8A%8A%E8%87%AA%E5%B7%B1%E7%9D%A1%E6%88%90%E5%B0%8F%E6%89%8B%E5%A5%97%E4%BA%86%23) `230.5K 🔥` `-65%`
1. [电视变彩色后真实世界反了](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%8F%98%E5%BD%A9%E8%89%B2%E5%90%8E%E7%9C%9F%E5%AE%9E%E4%B8%96%E7%95%8C%E5%8F%8D%E4%BA%86%23) `230.1K 🔥` `-23%`
1. [成毅 打戏严父 (Cheng Yi plays Yan Fu)](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%20%E6%89%93%E6%88%8F%E4%B8%A5%E7%88%B6%23) `229.7K 🔥` `-21%`
1. [赵丽颖对接回应身体状况](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%AF%B9%E6%8E%A5%E5%9B%9E%E5%BA%94%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `229.7K 🔥` `-23%`
1. [在韩失联女生 死刑争议](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%20%E6%AD%BB%E5%88%91%E4%BA%89%E8%AE%AE%23) `213.5K 🔥` `-27%`
1. [电视剧醒来开播](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%E9%86%92%E6%9D%A5%E5%BC%80%E6%92%AD%23) `179.0K 🔥` `-31%`
1. [DeepSeek启动IPO筹备](https://s.weibo.com/weibo?q=%23DeepSeek%E5%90%AF%E5%8A%A8IPO%E7%AD%B9%E5%A4%87%23) `159.4K 🔥` `-44%`
1. [重庆警方通报2行人疑触电](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A52%E8%A1%8C%E4%BA%BA%E7%96%91%E8%A7%A6%E7%94%B5%23) `159.4K 🔥` `-45%`
1. [男子去世妻子反常公婆带孙做DNA](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8E%BB%E4%B8%96%E5%A6%BB%E5%AD%90%E5%8F%8D%E5%B8%B8%E5%85%AC%E5%A9%86%E5%B8%A6%E5%AD%99%E5%81%9ADNA%23) `158.3K 🔥` `-40%`
1. [实体店铺涨租](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E4%BD%93%E5%BA%97%E9%93%BA%E6%B6%A8%E7%A7%9F%23) `158.0K 🔥` `-44%`
1. [华为阔直板满阔的](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%98%94%E7%9B%B4%E6%9D%BF%E6%BB%A1%E9%98%94%E7%9A%84%23) `157.2K 🔥` `-47%`
1. [患胃癌晚期博士生已经历25次化疗](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E5%8D%9A%E5%A3%AB%E7%94%9F%E5%B7%B2%E7%BB%8F%E5%8E%8625%E6%AC%A1%E5%8C%96%E7%96%97%23) `156.9K 🔥` `-48%`
1. [早春晴朗 (Sunny early spring)](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `156.3K 🔥` `-34%`
1. [詹姆斯涉3亿美元贷款](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E6%B6%893%E4%BA%BF%E7%BE%8E%E5%85%83%E8%B4%B7%E6%AC%BE%23) `155.6K 🔥` `-44%`
1. [爱情公寓为了上网播到底删了多少](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%B8%BA%E4%BA%86%E4%B8%8A%E7%BD%91%E6%92%AD%E5%88%B0%E5%BA%95%E5%88%A0%E4%BA%86%E5%A4%9A%E5%B0%91%23) `155.0K 🔥` `-47%`
1. [台风沙德尔大拐弯](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94%E5%A4%A7%E6%8B%90%E5%BC%AF%23) `154.5K 🔥` `-44%`
1. [陈坤自曝生病瘦10斤](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%9D%A4%E8%87%AA%E6%9B%9D%E7%94%9F%E7%97%85%E7%98%A610%E6%96%A4%23) `153.5K 🔥` `-46%`
1. [张凌赫班主任也有亲笔To签](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8F%AD%E4%B8%BB%E4%BB%BB%E4%B9%9F%E6%9C%89%E4%BA%B2%E7%AC%94To%E7%AD%BE%23) `153.0K 🔥` `-42%`
1. [女骑手高速狂飙时速超200公里玩手机](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%AA%91%E6%89%8B%E9%AB%98%E9%80%9F%E7%8B%82%E9%A3%99%E6%97%B6%E9%80%9F%E8%B6%85200%E5%85%AC%E9%87%8C%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `152.5K 🔥` `-45%`
1. [神行者联盟征服全地形](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%A1%8C%E8%80%85%E8%81%94%E7%9B%9F%E5%BE%81%E6%9C%8D%E5%85%A8%E5%9C%B0%E5%BD%A2%23) `150.9K 🔥` `-50%`
1. [中国公民尽快撤离斯威士兰 (Chinese citizens evacuate Swaziland as soon as possible)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E5%B0%BD%E5%BF%AB%E6%92%A4%E7%A6%BB%E6%96%AF%E5%A8%81%E5%A3%AB%E5%85%B0%23) `150.5K 🔥` `-51%`

Updated at 2026-08-26 12:23:59

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
