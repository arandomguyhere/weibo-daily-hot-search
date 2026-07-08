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

1. [家人被卷走身亡幸存大儿子被送医院 (The family was swept away and died. The surviving eldest son was sent to the hospital.)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%BA%BA%E8%A2%AB%E5%8D%B7%E8%B5%B0%E8%BA%AB%E4%BA%A1%E5%B9%B8%E5%AD%98%E5%A4%A7%E5%84%BF%E5%AD%90%E8%A2%AB%E9%80%81%E5%8C%BB%E9%99%A2%23) `793.0K 🔥` `NEW`
1. [e-tron带你去看球](https://s.weibo.com/weibo?q=%23e-tron%E5%B8%A6%E4%BD%A0%E5%8E%BB%E7%9C%8B%E7%90%83%23) `486.5K 🔥` `NEW`
1. [粉笔CEO张小龙辞职](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94CEO%E5%BC%A0%E5%B0%8F%E9%BE%99%E8%BE%9E%E8%81%8C%23) `181.0K 🔥` `NEW`
1. [虞书欣就这样一胖一瘦地过来了](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B0%B1%E8%BF%99%E6%A0%B7%E4%B8%80%E8%83%96%E4%B8%80%E7%98%A6%E5%9C%B0%E8%BF%87%E6%9D%A5%E4%BA%86%23) `179.8K 🔥` `NEW`
1. [美伊再次爆发互袭](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%86%8D%E6%AC%A1%E7%88%86%E5%8F%91%E4%BA%92%E8%A2%AD%23) `179.1K 🔥` `NEW`
1. [韦东奕获国家自然科学二等奖](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E4%B8%9C%E5%A5%95%E8%8E%B7%E5%9B%BD%E5%AE%B6%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%A6%E4%BA%8C%E7%AD%89%E5%A5%96%23) `178.4K 🔥` `NEW`
1. [良子体检报告出来了](https://s.weibo.com/weibo?q=%23%E8%89%AF%E5%AD%90%E4%BD%93%E6%A3%80%E6%8A%A5%E5%91%8A%E5%87%BA%E6%9D%A5%E4%BA%86%23) `177.1K 🔥` `NEW`
1. [广东IP劝江浙沪囤货](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9CIP%E5%8A%9D%E6%B1%9F%E6%B5%99%E6%B2%AA%E5%9B%A4%E8%B4%A7%23) `176.7K 🔥` `NEW`
1. [刘昊然欧阳娜娜聊天](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E8%81%8A%E5%A4%A9%23) `175.6K 🔥` `NEW`
1. [FBI调查阿根廷足协在美资金运作](https://s.weibo.com/weibo?q=%23FBI%E8%B0%83%E6%9F%A5%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%B6%B3%E5%8D%8F%E5%9C%A8%E7%BE%8E%E8%B5%84%E9%87%91%E8%BF%90%E4%BD%9C%23) `174.7K 🔥` `NEW`
1. [第一次见这么完美的西瓜 (It’s the first time I’ve seen such a perfect watermelon)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E8%BF%99%E4%B9%88%E5%AE%8C%E7%BE%8E%E7%9A%84%E8%A5%BF%E7%93%9C%23) `173.2K 🔥` `NEW`
1. [功夫女足质感](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E8%B4%A8%E6%84%9F%23) `172.2K 🔥` `NEW`
1. [邓紫棋已经尽全力给到大家补偿了](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E5%B7%B2%E7%BB%8F%E5%B0%BD%E5%85%A8%E5%8A%9B%E7%BB%99%E5%88%B0%E5%A4%A7%E5%AE%B6%E8%A1%A5%E5%81%BF%E4%BA%86%23) `171.8K 🔥` `NEW`
1. [范丞丞方起诉司晓迪](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%96%B9%E8%B5%B7%E8%AF%89%E5%8F%B8%E6%99%93%E8%BF%AA%23) `170.5K 🔥` `NEW`
1. [黑天鹅突袭全球股市](https://s.weibo.com/weibo?q=%23%E9%BB%91%E5%A4%A9%E9%B9%85%E7%AA%81%E8%A2%AD%E5%85%A8%E7%90%83%E8%82%A1%E5%B8%82%23) `168.4K 🔥` `NEW`
1. [上海暴雨](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9A%B4%E9%9B%A8%23) `163.5K 🔥` `NEW`
1. [才知道宝贝回家是给本人看的](https://s.weibo.com/weibo?q=%23%E6%89%8D%E7%9F%A5%E9%81%93%E5%AE%9D%E8%B4%9D%E5%9B%9E%E5%AE%B6%E6%98%AF%E7%BB%99%E6%9C%AC%E4%BA%BA%E7%9C%8B%E7%9A%84%23) `162.6K 🔥` `NEW`
1. [一家三口被风卷走坠亡官方介入](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E8%A2%AB%E9%A3%8E%E5%8D%B7%E8%B5%B0%E5%9D%A0%E4%BA%A1%E5%AE%98%E6%96%B9%E4%BB%8B%E5%85%A5%23) `161.3K 🔥` `NEW`
1. [上海打雷](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%89%93%E9%9B%B7%23) `159.8K 🔥` `NEW`
1. [向太说向华强女儿扁头像切开的西瓜](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E5%90%91%E5%8D%8E%E5%BC%BA%E5%A5%B3%E5%84%BF%E6%89%81%E5%A4%B4%E5%83%8F%E5%88%87%E5%BC%80%E7%9A%84%E8%A5%BF%E7%93%9C%23) `157.9K 🔥` `NEW`
1. [周洁琼的大疆丢了 (Zhou Jieqiong’s DJI is lost)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B4%81%E7%90%BC%E7%9A%84%E5%A4%A7%E7%96%86%E4%B8%A2%E4%BA%86%23) `157.5K 🔥` `NEW`
1. [美军对伊打击力度是10天前的四五倍](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%AF%B9%E4%BC%8A%E6%89%93%E5%87%BB%E5%8A%9B%E5%BA%A6%E6%98%AF10%E5%A4%A9%E5%89%8D%E7%9A%84%E5%9B%9B%E4%BA%94%E5%80%8D%23) `156.5K 🔥` `NEW`
1. [TOP打瓦](https://s.weibo.com/weibo?q=%23TOP%E6%89%93%E7%93%A6%23) `155.5K 🔥` `NEW`
1. [Angelababy看秀仪态](https://s.weibo.com/weibo?q=%23Angelababy%E7%9C%8B%E7%A7%80%E4%BB%AA%E6%80%81%23) `154.4K 🔥` `NEW`
1. [宠物医院里挤满伯纳瘫小猫](https://s.weibo.com/weibo?q=%23%E5%AE%A0%E7%89%A9%E5%8C%BB%E9%99%A2%E9%87%8C%E6%8C%A4%E6%BB%A1%E4%BC%AF%E7%BA%B3%E7%98%AB%E5%B0%8F%E7%8C%AB%23) `154.0K 🔥` `NEW`
1. [良子今年的血糖和血压甚至更健康了](https://s.weibo.com/weibo?q=%23%E8%89%AF%E5%AD%90%E4%BB%8A%E5%B9%B4%E7%9A%84%E8%A1%80%E7%B3%96%E5%92%8C%E8%A1%80%E5%8E%8B%E7%94%9A%E8%87%B3%E6%9B%B4%E5%81%A5%E5%BA%B7%E4%BA%86%23) `153.4K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `152.6K 🔥` `NEW`
1. [甜馨出国上夏校](https://s.weibo.com/weibo?q=%23%E7%94%9C%E9%A6%A8%E5%87%BA%E5%9B%BD%E4%B8%8A%E5%A4%8F%E6%A0%A1%23) `151.8K 🔥` `NEW`
1. [功夫女足找回了港片黄金时代的味儿](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E6%89%BE%E5%9B%9E%E4%BA%86%E6%B8%AF%E7%89%87%E9%BB%84%E9%87%91%E6%97%B6%E4%BB%A3%E7%9A%84%E5%91%B3%E5%84%BF%23) `150.9K 🔥` `NEW`
1. [研究称Claude内部有类人脑架构](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E7%A7%B0Claude%E5%86%85%E9%83%A8%E6%9C%89%E7%B1%BB%E4%BA%BA%E8%84%91%E6%9E%B6%E6%9E%84%23) `150.1K 🔥` `NEW`
1. [台风巴威可能正面登陆 (Typhoon Bavi may make landfall head-on)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%8F%AF%E8%83%BD%E6%AD%A3%E9%9D%A2%E7%99%BB%E9%99%86%23) `1.4M 🔥` `+53%`
1. [当寂静的广西街头响起子弟兵口号 (When the silent streets of Guangxi rang out the slogans of the disciples)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%AF%82%E9%9D%99%E7%9A%84%E5%B9%BF%E8%A5%BF%E8%A1%97%E5%A4%B4%E5%93%8D%E8%B5%B7%E5%AD%90%E5%BC%9F%E5%85%B5%E5%8F%A3%E5%8F%B7%23) `635.5K 🔥` `+93%`
1. [广西洪水现状](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%E7%8E%B0%E7%8A%B6%23) `352.2K 🔥` `+142%`
1. [审美是一种无法伪装的能力](https://s.weibo.com/weibo?q=%23%E5%AE%A1%E7%BE%8E%E6%98%AF%E4%B8%80%E7%A7%8D%E6%97%A0%E6%B3%95%E4%BC%AA%E8%A3%85%E7%9A%84%E8%83%BD%E5%8A%9B%23) `339.6K 🔥` `+179%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `238.5K 🔥` `+168%`
1. [邓紫棋回应因台风取消演唱会](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E5%9B%9E%E5%BA%94%E5%9B%A0%E5%8F%B0%E9%A3%8E%E5%8F%96%E6%B6%88%E6%BC%94%E5%94%B1%E4%BC%9A%23) `180.3K 🔥` `+103%`
1. [25岁内地女孩香港年入百万](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E5%86%85%E5%9C%B0%E5%A5%B3%E5%AD%A9%E9%A6%99%E6%B8%AF%E5%B9%B4%E5%85%A5%E7%99%BE%E4%B8%87%23) `174.4K 🔥` `+83%`
1. [44岁渐冻症男子创奇迹结婚生下俩女](https://s.weibo.com/weibo?q=%2344%E5%B2%81%E6%B8%90%E5%86%BB%E7%97%87%E7%94%B7%E5%AD%90%E5%88%9B%E5%A5%87%E8%BF%B9%E7%BB%93%E5%A9%9A%E7%94%9F%E4%B8%8B%E4%BF%A9%E5%A5%B3%23) `171.0K 🔥` `+93%`
1. [小孩语言系统直白又可爱](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A9%E8%AF%AD%E8%A8%80%E7%B3%BB%E7%BB%9F%E7%9B%B4%E7%99%BD%E5%8F%88%E5%8F%AF%E7%88%B1%23) `169.3K 🔥` `+91%`
1. [印度12岁少女被4男轮奸沉塘 (12-year-old Indian girl was gang-raped by four men in Shentang)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A612%E5%B2%81%E5%B0%91%E5%A5%B3%E8%A2%AB4%E7%94%B7%E8%BD%AE%E5%A5%B8%E6%B2%89%E5%A1%98%23) `167.8K 🔥` `+89%`
1. [C罗乘私人飞机离开 (Ronaldo leaves on private jet)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B9%98%E7%A7%81%E4%BA%BA%E9%A3%9E%E6%9C%BA%E7%A6%BB%E5%BC%80%23) `166.7K 🔥` `+55%`
1. [烘焙是个巨大的坑](https://s.weibo.com/weibo?q=%23%E7%83%98%E7%84%99%E6%98%AF%E4%B8%AA%E5%B7%A8%E5%A4%A7%E7%9A%84%E5%9D%91%23) `165.6K 🔥` `+86%`
1. [曝虞书欣丁禹兮三搭我欲乘风 (It is revealed that Yu Shuxin and Ding Yuxi have sex with each other three times and I want to ride the wind)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%81%E7%A6%B9%E5%85%AE%E4%B8%89%E6%90%AD%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `165.3K 🔥` `+86%`
1. [功夫女足的观后感 (Thoughts on Kung Fu Women’s Football Team)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%9A%84%E8%A7%82%E5%90%8E%E6%84%9F%23) `164.3K 🔥` `+85%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `161.6K 🔥` `+82%`
1. [最新世界杯夺冠概率出炉 (Latest World Cup winning odds released)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E6%96%B0%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%BA%E5%86%A0%E6%A6%82%E7%8E%87%E5%87%BA%E7%82%89%23) `160.7K 🔥` `+81%`
1. [父亲给大一儿子推拿颈部致急性脑梗 (Father massaged his freshman son's neck, causing acute cerebral infarction)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E7%BB%99%E5%A4%A7%E4%B8%80%E5%84%BF%E5%AD%90%E6%8E%A8%E6%8B%BF%E9%A2%88%E9%83%A8%E8%87%B4%E6%80%A5%E6%80%A7%E8%84%91%E6%A2%97%23) `158.9K 🔥` `+79%`
1. [杨紫包场孟子义百花杀 (Yang Zi reserves the place, Mencius Yi kills a hundred flowers)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%8C%85%E5%9C%BA%E5%AD%9F%E5%AD%90%E4%B9%89%E7%99%BE%E8%8A%B1%E6%9D%80%23) `148.9K 🔥` `+68%`
1. [黄冈龙卷风致多人伤亡失联 (Huanggang tornado causes many casualties and missing contacts)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%86%88%E9%BE%99%E5%8D%B7%E9%A3%8E%E8%87%B4%E5%A4%9A%E4%BA%BA%E4%BC%A4%E4%BA%A1%E5%A4%B1%E8%81%94%23) `147.9K 🔥` `+67%`
1. [发现自己从来没点过确认收货](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E4%BB%8E%E6%9D%A5%E6%B2%A1%E7%82%B9%E8%BF%87%E7%A1%AE%E8%AE%A4%E6%94%B6%E8%B4%A7%23) `147.2K 🔥` `+66%`
1. [花呗崩了 (Huabei collapsed)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%91%97%E5%B4%A9%E4%BA%86%23) `409.7K 🔥`

Updated at 2026-07-09 07:43:20

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
