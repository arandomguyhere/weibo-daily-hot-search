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

1. [杀害中国女生嫌犯男扮女装混淆警方](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%AB%8C%E7%8A%AF%E7%94%B7%E6%89%AE%E5%A5%B3%E8%A3%85%E6%B7%B7%E6%B7%86%E8%AD%A6%E6%96%B9%23) `902.6K 🔥` `NEW`
1. [罗永浩已向被索赔店主捐助10万元](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E5%B7%B2%E5%90%91%E8%A2%AB%E7%B4%A2%E8%B5%94%E5%BA%97%E4%B8%BB%E6%8D%90%E5%8A%A910%E4%B8%87%E5%85%83%23) `833.4K 🔥` `NEW`
1. [小猫把自己睡成小手套了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E6%8A%8A%E8%87%AA%E5%B7%B1%E7%9D%A1%E6%88%90%E5%B0%8F%E6%89%8B%E5%A5%97%E4%BA%86%23) `661.1K 🔥` `NEW`
1. [张真源凌晨开车去接马嘉祺](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%87%8C%E6%99%A8%E5%BC%80%E8%BD%A6%E5%8E%BB%E6%8E%A5%E9%A9%AC%E5%98%89%E7%A5%BA%23) `343.8K 🔥` `NEW`
1. [患胃癌晚期博士生已经历25次化疗](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E5%8D%9A%E5%A3%AB%E7%94%9F%E5%B7%B2%E7%BB%8F%E5%8E%8625%E6%AC%A1%E5%8C%96%E7%96%97%23) `302.7K 🔥` `NEW`
1. [神行者联盟征服全地形](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%A1%8C%E8%80%85%E8%81%94%E7%9B%9F%E5%BE%81%E6%9C%8D%E5%85%A8%E5%9C%B0%E5%BD%A2%23) `299.4K 🔥` `NEW`
1. [华为阔直板满阔的](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%98%94%E7%9B%B4%E6%9D%BF%E6%BB%A1%E9%98%94%E7%9A%84%23) `295.5K 🔥` `NEW`
1. [陈坤自曝生病瘦10斤](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%9D%A4%E8%87%AA%E6%9B%9D%E7%94%9F%E7%97%85%E7%98%A610%E6%96%A4%23) `286.6K 🔥` `NEW`
1. [洪崖洞附近母女疑触电女儿尚未脱险](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E5%B4%96%E6%B4%9E%E9%99%84%E8%BF%91%E6%AF%8D%E5%A5%B3%E7%96%91%E8%A7%A6%E7%94%B5%E5%A5%B3%E5%84%BF%E5%B0%9A%E6%9C%AA%E8%84%B1%E9%99%A9%23) `285.5K 🔥` `NEW`
1. [实体店铺涨租](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E4%BD%93%E5%BA%97%E9%93%BA%E6%B6%A8%E7%A7%9F%23) `282.1K 🔥` `NEW`
1. [房客曝光酒店床单有血被反诉赔1元](https://s.weibo.com/weibo?q=%23%E6%88%BF%E5%AE%A2%E6%9B%9D%E5%85%89%E9%85%92%E5%BA%97%E5%BA%8A%E5%8D%95%E6%9C%89%E8%A1%80%E8%A2%AB%E5%8F%8D%E8%AF%89%E8%B5%941%E5%85%83%23) `281.1K 🔥` `NEW`
1. [女骑手高速狂飙时速超200公里玩手机](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%AA%91%E6%89%8B%E9%AB%98%E9%80%9F%E7%8B%82%E9%A3%99%E6%97%B6%E9%80%9F%E8%B6%85200%E5%85%AC%E9%87%8C%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `277.5K 🔥` `NEW`
1. [台风沙德尔大拐弯](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94%E5%A4%A7%E6%8B%90%E5%BC%AF%23) `275.5K 🔥` `NEW`
1. [报案人就是凶手](https://s.weibo.com/weibo?q=%23%E6%8A%A5%E6%A1%88%E4%BA%BA%E5%B0%B1%E6%98%AF%E5%87%B6%E6%89%8B%23) `273.0K 🔥` `NEW`
1. [复联4内地重映](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E8%81%944%E5%86%85%E5%9C%B0%E9%87%8D%E6%98%A0%23) `270.8K 🔥` `NEW`
1. [AI打响反内卷第一枪](https://s.weibo.com/weibo?q=%23AI%E6%89%93%E5%93%8D%E5%8F%8D%E5%86%85%E5%8D%B7%E7%AC%AC%E4%B8%80%E6%9E%AA%23) `269.7K 🔥` `NEW`
1. [花开锦绣门不当户不对婚姻赌不得](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E9%97%A8%E4%B8%8D%E5%BD%93%E6%88%B7%E4%B8%8D%E5%AF%B9%E5%A9%9A%E5%A7%BB%E8%B5%8C%E4%B8%8D%E5%BE%97%23) `267.4K 🔥` `NEW`
1. [张凌赫班主任也有亲笔To签](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8F%AD%E4%B8%BB%E4%BB%BB%E4%B9%9F%E6%9C%89%E4%BA%B2%E7%AC%94To%E7%AD%BE%23) `265.9K 🔥` `NEW`
1. [男子去世妻子反常公婆带孙做DNA](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8E%BB%E4%B8%96%E5%A6%BB%E5%AD%90%E5%8F%8D%E5%B8%B8%E5%85%AC%E5%A9%86%E5%B8%A6%E5%AD%99%E5%81%9ADNA%23) `265.0K 🔥` `NEW`
1. [全球首个活体人类脑细胞数据中心](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%A6%96%E4%B8%AA%E6%B4%BB%E4%BD%93%E4%BA%BA%E7%B1%BB%E8%84%91%E7%BB%86%E8%83%9E%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%23) `260.3K 🔥` `NEW`
1. [电视剧醒来开播](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%E9%86%92%E6%9D%A5%E5%BC%80%E6%92%AD%23) `258.2K 🔥` `NEW`
1. [多莉帕顿去世 全美降半旗](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E8%8E%89%E5%B8%95%E9%A1%BF%E5%8E%BB%E4%B8%96%20%E5%85%A8%E7%BE%8E%E9%99%8D%E5%8D%8A%E6%97%97%23) `1.2M 🔥` `+156%`
1. [防台风安全防护攻略请收好](https://s.weibo.com/weibo?q=%23%E9%98%B2%E5%8F%B0%E9%A3%8E%E5%AE%89%E5%85%A8%E9%98%B2%E6%8A%A4%E6%94%BB%E7%95%A5%E8%AF%B7%E6%94%B6%E5%A5%BD%23) `903.4K 🔥` `+41%`
1. [过得好的人最明显的标志 (The most obvious sign of a person who is doing well)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BE%97%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%9C%80%E6%98%8E%E6%98%BE%E7%9A%84%E6%A0%87%E5%BF%97%23) `842.5K 🔥` `+32%`
1. [风云T7品质全球车正式上市 (Fengyun T7 quality global car officially launched)](https://s.weibo.com/weibo?q=%23%E9%A3%8E%E4%BA%91T7%E5%93%81%E8%B4%A8%E5%85%A8%E7%90%83%E8%BD%A6%E6%AD%A3%E5%BC%8F%E4%B8%8A%E5%B8%82%23) `827.6K 🔥` `+47%`
1. [陈赫被问爱情公寓回归季](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E8%A2%AB%E9%97%AE%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%9B%9E%E5%BD%92%E5%AD%A3%23) `775.5K 🔥` `+21%`
1. [国自然](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%87%AA%E7%84%B6%23) `541.4K 🔥` `+111%`
1. [洪崖洞目击者称担心触电不敢救 (Witnesses in Hongyadong said they were afraid of being electrocuted and did not dare to save people.)](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E5%B4%96%E6%B4%9E%E7%9B%AE%E5%87%BB%E8%80%85%E7%A7%B0%E6%8B%85%E5%BF%83%E8%A7%A6%E7%94%B5%E4%B8%8D%E6%95%A2%E6%95%91%23) `924.0K 🔥`
1. [金鹰奖 刘亦菲国籍](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E5%88%98%E4%BA%A6%E8%8F%B2%E5%9B%BD%E7%B1%8D%23) `367.8K 🔥`
1. [杭州电梯事件 监控未被覆盖](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%94%B5%E6%A2%AF%E4%BA%8B%E4%BB%B6%20%E7%9B%91%E6%8E%A7%E6%9C%AA%E8%A2%AB%E8%A6%86%E7%9B%96%23) `357.6K 🔥`
1. [济州岛连环失踪案](https://s.weibo.com/weibo?q=%23%E6%B5%8E%E5%B7%9E%E5%B2%9B%E8%BF%9E%E7%8E%AF%E5%A4%B1%E8%B8%AA%E6%A1%88%23) `337.6K 🔥`
1. [goodthings 难听](https://s.weibo.com/weibo?q=%23goodthings%20%E9%9A%BE%E5%90%AC%23) `304.1K 🔥`
1. [13岁上海女孩靠AI三天赚1.8万元](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E4%B8%8A%E6%B5%B7%E5%A5%B3%E5%AD%A9%E9%9D%A0AI%E4%B8%89%E5%A4%A9%E8%B5%9A1.8%E4%B8%87%E5%85%83%23) `301.7K 🔥`
1. [电视变彩色后真实世界反了](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%8F%98%E5%BD%A9%E8%89%B2%E5%90%8E%E7%9C%9F%E5%AE%9E%E4%B8%96%E7%95%8C%E5%8F%8D%E4%BA%86%23) `298.1K 🔥`
1. [爱情公寓为了上网播到底删了多少](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%B8%BA%E4%BA%86%E4%B8%8A%E7%BD%91%E6%92%AD%E5%88%B0%E5%BA%95%E5%88%A0%E4%BA%86%E5%A4%9A%E5%B0%91%23) `293.9K 🔥`
1. [成毅 打戏严父 (Cheng Yi plays Yan Fu)](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%20%E6%89%93%E6%88%8F%E4%B8%A5%E7%88%B6%23) `291.5K 🔥`
1. [爱情公寓官方曾称第五季是大结局](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%AE%98%E6%96%B9%E6%9B%BE%E7%A7%B0%E7%AC%AC%E4%BA%94%E5%AD%A3%E6%98%AF%E5%A4%A7%E7%BB%93%E5%B1%80%23) `289.1K 🔥`
1. [DeepSeek启动IPO筹备](https://s.weibo.com/weibo?q=%23DeepSeek%E5%90%AF%E5%8A%A8IPO%E7%AD%B9%E5%A4%87%23) `284.1K 🔥`
1. [洪崖洞](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E5%B4%96%E6%B4%9E%23) `279.1K 🔥`
1. [詹姆斯涉3亿美元贷款](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E6%B6%893%E4%BA%BF%E7%BE%8E%E5%85%83%E8%B4%B7%E6%AC%BE%23) `277.0K 🔥`
1. [38岁演员失业后去景区当NPC](https://s.weibo.com/weibo?q=%2338%E5%B2%81%E6%BC%94%E5%91%98%E5%A4%B1%E4%B8%9A%E5%90%8E%E5%8E%BB%E6%99%AF%E5%8C%BA%E5%BD%93NPC%23) `272.5K 🔥`
1. [曹骏不知道张彬彬这是怎么了](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E4%B8%8D%E7%9F%A5%E9%81%93%E5%BC%A0%E5%BD%AC%E5%BD%AC%E8%BF%99%E6%98%AF%E6%80%8E%E4%B9%88%E4%BA%86%23) `263.9K 🔥`
1. [脱口秀女演员清一色谈离婚负债经历](https://s.weibo.com/weibo?q=%23%E8%84%B1%E5%8F%A3%E7%A7%80%E5%A5%B3%E6%BC%94%E5%91%98%E6%B8%85%E4%B8%80%E8%89%B2%E8%B0%88%E7%A6%BB%E5%A9%9A%E8%B4%9F%E5%80%BA%E7%BB%8F%E5%8E%86%23) `262.4K 🔥`
1. [洪崖洞两人疑触电倒地](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E5%B4%96%E6%B4%9E%E4%B8%A4%E4%BA%BA%E7%96%91%E8%A7%A6%E7%94%B5%E5%80%92%E5%9C%B0%23) `257.0K 🔥`
1. [济公4制片人杨涛发博了](https://s.weibo.com/weibo?q=%23%E6%B5%8E%E5%85%AC4%E5%88%B6%E7%89%87%E4%BA%BA%E6%9D%A8%E6%B6%9B%E5%8F%91%E5%8D%9A%E4%BA%86%23) `377.0K 🔥` `-26%`
1. [医生谈1米67女孩101斤被认定偏重](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%B0%881%E7%B1%B367%E5%A5%B3%E5%AD%A9101%E6%96%A4%E8%A2%AB%E8%AE%A4%E5%AE%9A%E5%81%8F%E9%87%8D%23) `318.3K 🔥` `-62%`
1. [羞辱式劝退应届生公司致歉](https://s.weibo.com/weibo?q=%23%E7%BE%9E%E8%BE%B1%E5%BC%8F%E5%8A%9D%E9%80%80%E5%BA%94%E5%B1%8A%E7%94%9F%E5%85%AC%E5%8F%B8%E8%87%B4%E6%AD%89%23) `308.1K 🔥` `-52%`
1. [中国公民尽快撤离斯威士兰 (Chinese citizens evacuate Swaziland as soon as possible)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E5%B0%BD%E5%BF%AB%E6%92%A4%E7%A6%BB%E6%96%AF%E5%A8%81%E5%A3%AB%E5%85%B0%23) `304.8K 🔥` `-28%`
1. [赵丽颖对接回应身体状况](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%AF%B9%E6%8E%A5%E5%9B%9E%E5%BA%94%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `297.2K 🔥` `-28%`
1. [在韩失联女生 死刑争议](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%20%E6%AD%BB%E5%88%91%E4%BA%89%E8%AE%AE%23) `292.8K 🔥` `-29%`
1. [重庆警方通报2行人疑触电](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A52%E8%A1%8C%E4%BA%BA%E7%96%91%E8%A7%A6%E7%94%B5%23) `287.8K 🔥` `-35%`

Updated at 2026-08-26 11:39:40

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
