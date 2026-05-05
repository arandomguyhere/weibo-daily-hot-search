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

1. [长沙市委市政府致歉 (Changsha Municipal Party Committee and Government apologized)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E5%B8%82%E5%A7%94%E5%B8%82%E6%94%BF%E5%BA%9C%E8%87%B4%E6%AD%89%23) `1.3M 🔥` `NEW`
1. [广交会彰显中国制造硬核实力](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9A%E5%BD%B0%E6%98%BE%E4%B8%AD%E5%9B%BD%E5%88%B6%E9%80%A0%E7%A1%AC%E6%A0%B8%E5%AE%9E%E5%8A%9B%23) `741.4K 🔥` `NEW`
1. [歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%23) `684.3K 🔥` `NEW`
1. [军犬救援演练发现是熟人扭头就走](https://s.weibo.com/weibo?q=%23%E5%86%9B%E7%8A%AC%E6%95%91%E6%8F%B4%E6%BC%94%E7%BB%83%E5%8F%91%E7%8E%B0%E6%98%AF%E7%86%9F%E4%BA%BA%E6%89%AD%E5%A4%B4%E5%B0%B1%E8%B5%B0%23) `610.1K 🔥` `NEW`
1. [曝张凌赫加盟跑男第15季](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8A%A0%E7%9B%9F%E8%B7%91%E7%94%B7%E7%AC%AC15%E5%AD%A3%23) `582.1K 🔥` `NEW`
1. [小长假让我断了裸辞的念头](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%95%BF%E5%81%87%E8%AE%A9%E6%88%91%E6%96%AD%E4%BA%86%E8%A3%B8%E8%BE%9E%E7%9A%84%E5%BF%B5%E5%A4%B4%23) `327.3K 🔥` `NEW`
1. [吴昕回应谢娜演唱会](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%98%95%E5%9B%9E%E5%BA%94%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%23) `326.4K 🔥` `NEW`
1. [男子穿越无人区被解放军投喂食物](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%A9%BF%E8%B6%8A%E6%97%A0%E4%BA%BA%E5%8C%BA%E8%A2%AB%E8%A7%A3%E6%94%BE%E5%86%9B%E6%8A%95%E5%96%82%E9%A3%9F%E7%89%A9%23) `322.3K 🔥` `NEW`
1. [路人上海偶遇angelababy小海绵](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E4%BA%BA%E4%B8%8A%E6%B5%B7%E5%81%B6%E9%81%87angelababy%E5%B0%8F%E6%B5%B7%E7%BB%B5%23) `318.5K 🔥` `NEW`
1. [林依晨 郑家尧](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%20%E9%83%91%E5%AE%B6%E5%B0%A7%23) `316.4K 🔥` `NEW`
1. [建议大家一定要尽早明确生活的主线 (It is recommended that everyone must clarify the main line of life as early as possible)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B8%80%E5%AE%9A%E8%A6%81%E5%B0%BD%E6%97%A9%E6%98%8E%E7%A1%AE%E7%94%9F%E6%B4%BB%E7%9A%84%E4%B8%BB%E7%BA%BF%23) `315.0K 🔥` `NEW`
1. [东风日产NX8丹麦见证国羽巅峰](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%A3%8E%E6%97%A5%E4%BA%A7NX8%E4%B8%B9%E9%BA%A6%E8%A7%81%E8%AF%81%E5%9B%BD%E7%BE%BD%E5%B7%85%E5%B3%B0%23) `293.8K 🔥` `NEW`
1. [除非白鹿不想录了](https://s.weibo.com/weibo?q=%23%E9%99%A4%E9%9D%9E%E7%99%BD%E9%B9%BF%E4%B8%8D%E6%83%B3%E5%BD%95%E4%BA%86%23) `289.3K 🔥` `NEW`
1. [给阿嬷的情书 排片少](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E6%8E%92%E7%89%87%E5%B0%91%23) `285.3K 🔥` `NEW`
1. [好多人给谢娜送花篮](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E4%BA%BA%E7%BB%99%E8%B0%A2%E5%A8%9C%E9%80%81%E8%8A%B1%E7%AF%AE%23) `284.5K 🔥` `NEW`
1. [女子怀孕不做产检胎停6周浑然不知](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E4%B8%8D%E5%81%9A%E4%BA%A7%E6%A3%80%E8%83%8E%E5%81%9C6%E5%91%A8%E6%B5%91%E7%84%B6%E4%B8%8D%E7%9F%A5%23) `272.1K 🔥` `NEW`
1. [给阿嬷的情书豆瓣开分9.0](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E8%B1%86%E7%93%A3%E5%BC%80%E5%88%869.0%23) `252.5K 🔥` `NEW`
1. [浏阳烟花厂爆炸前后对比](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E5%8E%82%E7%88%86%E7%82%B8%E5%89%8D%E5%90%8E%E5%AF%B9%E6%AF%94%23) `227.0K 🔥` `NEW`
1. [万一拖鞋买来就长这样](https://s.weibo.com/weibo?q=%23%E4%B8%87%E4%B8%80%E6%8B%96%E9%9E%8B%E4%B9%B0%E6%9D%A5%E5%B0%B1%E9%95%BF%E8%BF%99%E6%A0%B7%23) `215.0K 🔥` `NEW`
1. [斯诺克最新世界排名出炉](https://s.weibo.com/weibo?q=%23%E6%96%AF%E8%AF%BA%E5%85%8B%E6%9C%80%E6%96%B0%E4%B8%96%E7%95%8C%E6%8E%92%E5%90%8D%E5%87%BA%E7%82%89%23) `174.2K 🔥` `NEW`
1. [蕾哈娜 牡蛎造型 (Rihanna oyster look)](https://s.weibo.com/weibo?q=%23%E8%95%BE%E5%93%88%E5%A8%9C%20%E7%89%A1%E8%9B%8E%E9%80%A0%E5%9E%8B%23) `172.3K 🔥` `NEW`
1. [王嘉尔5天增重4公斤](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%945%E5%A4%A9%E5%A2%9E%E9%87%8D4%E5%85%AC%E6%96%A4%23) `169.6K 🔥` `NEW`
1. [巴西一飞机起飞后撞楼致3死2伤 (Plane in Brazil crashes into building after takeoff, killing 3 and injuring 2)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E4%B8%80%E9%A3%9E%E6%9C%BA%E8%B5%B7%E9%A3%9E%E5%90%8E%E6%92%9E%E6%A5%BC%E8%87%B43%E6%AD%BB2%E4%BC%A4%23) `323.1K 🔥` `+62%`
1. [红果靠免费起家吸引近2亿用户](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E9%9D%A0%E5%85%8D%E8%B4%B9%E8%B5%B7%E5%AE%B6%E5%90%B8%E5%BC%95%E8%BF%912%E4%BA%BF%E7%94%A8%E6%88%B7%23) `306.7K 🔥` `+53%`
1. [苹果或与英特尔三星合作](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%88%96%E4%B8%8E%E8%8B%B1%E7%89%B9%E5%B0%94%E4%B8%89%E6%98%9F%E5%90%88%E4%BD%9C%23) `296.0K 🔥` `+58%`
1. [奔跑吧打假](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E6%89%93%E5%81%87%23) `1.7M 🔥`
1. [印度2000万美元报价世界杯转播权被拒](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A62000%E4%B8%87%E7%BE%8E%E5%85%83%E6%8A%A5%E4%BB%B7%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%E8%A2%AB%E6%8B%92%23) `342.6K 🔥`
1. [跟林依晨分手后前男友因性侵入狱](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E6%9E%97%E4%BE%9D%E6%99%A8%E5%88%86%E6%89%8B%E5%90%8E%E5%89%8D%E7%94%B7%E5%8F%8B%E5%9B%A0%E6%80%A7%E4%BE%B5%E5%85%A5%E7%8B%B1%23) `341.1K 🔥`
1. [一个人旅游上厕所时行李怎么办](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%97%85%E6%B8%B8%E4%B8%8A%E5%8E%95%E6%89%80%E6%97%B6%E8%A1%8C%E6%9D%8E%E6%80%8E%E4%B9%88%E5%8A%9E%23) `338.6K 🔥`
1. [女子怀孕胎死宫内6周后才发现](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E8%83%8E%E6%AD%BB%E5%AE%AB%E5%86%856%E5%91%A8%E5%90%8E%E6%89%8D%E5%8F%91%E7%8E%B0%23) `337.7K 🔥`
1. [很少用值回票价来形容婚礼](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%B0%91%E7%94%A8%E5%80%BC%E5%9B%9E%E7%A5%A8%E4%BB%B7%E6%9D%A5%E5%BD%A2%E5%AE%B9%E5%A9%9A%E7%A4%BC%23) `335.1K 🔥`
1. [鹿哈自曝每天平均收入500块 (Lu Ha revealed that his average daily income is 500 yuan)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E5%93%88%E8%87%AA%E6%9B%9D%E6%AF%8F%E5%A4%A9%E5%B9%B3%E5%9D%87%E6%94%B6%E5%85%A5500%E5%9D%97%23) `332.6K 🔥`
1. [穆祉丞没发大合照 (Mu Zhicheng did not post a group photo)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%B2%A1%E5%8F%91%E5%A4%A7%E5%90%88%E7%85%A7%23) `330.6K 🔥`
1. [BLACKPINK在MetGala合照](https://s.weibo.com/weibo?q=%23BLACKPINK%E5%9C%A8MetGala%E5%90%88%E7%85%A7%23) `313.8K 🔥`
1. [豆包同一个问题三个答案](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%90%8C%E4%B8%80%E4%B8%AA%E9%97%AE%E9%A2%98%E4%B8%89%E4%B8%AA%E7%AD%94%E6%A1%88%23) `311.9K 🔥`
1. [浏阳烟花厂爆炸致26死61伤 (Explosion at Liuyang Fireworks Factory kills 26 and injures 61)](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E5%8E%82%E7%88%86%E7%82%B8%E8%87%B426%E6%AD%BB61%E4%BC%A4%23) `596.2K 🔥` `-94%`
1. [国内一年仅卖2763万台彩电](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E4%B8%80%E5%B9%B4%E4%BB%85%E5%8D%962763%E4%B8%87%E5%8F%B0%E5%BD%A9%E7%94%B5%23) `549.6K 🔥` `-24%`
1. [导致脊柱侧弯的姿势都好舒服](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E8%87%B4%E8%84%8A%E6%9F%B1%E4%BE%A7%E5%BC%AF%E7%9A%84%E5%A7%BF%E5%8A%BF%E9%83%BD%E5%A5%BD%E8%88%92%E6%9C%8D%23) `476.7K 🔥` `-34%`
1. [金饰克价跌到1396元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E8%B7%8C%E5%88%B01396%E5%85%83%23) `304.3K 🔥` `-23%`
1. [红果VIP 付费 (Hongguo VIP paid)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9CVIP%20%E4%BB%98%E8%B4%B9%23) `300.9K 🔥` `-21%`
1. [AI在偷我们的东西 我们决定毒死它](https://s.weibo.com/weibo?q=%23AI%E5%9C%A8%E5%81%B7%E6%88%91%E4%BB%AC%E7%9A%84%E4%B8%9C%E8%A5%BF%20%E6%88%91%E4%BB%AC%E5%86%B3%E5%AE%9A%E6%AF%92%E6%AD%BB%E5%AE%83%23) `284.8K 🔥` `-29%`
1. [虞书欣 种地吧](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `279.3K 🔥` `-30%`
1. [女子减肥3个月暴瘦40斤被摘除胆囊](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%8F%E8%82%A53%E4%B8%AA%E6%9C%88%E6%9A%B4%E7%98%A640%E6%96%A4%E8%A2%AB%E6%91%98%E9%99%A4%E8%83%86%E5%9B%8A%23) `219.8K 🔥` `-40%`
1. [白日梦我](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%A2%A6%E6%88%91%23) `213.1K 🔥` `-63%`
1. [谷爱凌高定裙子有15000颗泡泡 (Gu Ailing’s haute couture skirt has 15,000 bubbles)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%AB%98%E5%AE%9A%E8%A3%99%E5%AD%90%E6%9C%8915000%E9%A2%97%E6%B3%A1%E6%B3%A1%23) `213.1K 🔥` `-46%`
1. [你根本没意识到自己有多年轻](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%A0%B9%E6%9C%AC%E6%B2%A1%E6%84%8F%E8%AF%86%E5%88%B0%E8%87%AA%E5%B7%B1%E6%9C%89%E5%A4%9A%E5%B9%B4%E8%BD%BB%23) `208.5K 🔥` `-62%`
1. [吴宜泽回复赵心童](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD%E5%9B%9E%E5%A4%8D%E8%B5%B5%E5%BF%83%E7%AB%A5%23) `190.5K 🔥` `-44%`
1. [曝当红男演员耍大牌 (Exposes popular actor's acting as a big name)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BD%93%E7%BA%A2%E7%94%B7%E6%BC%94%E5%91%98%E8%80%8D%E5%A4%A7%E7%89%8C%23) `172.8K 🔥` `-57%`
1. [泽连斯基宣布5月6日起单方面停火](https://s.weibo.com/weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E5%AE%A3%E5%B8%835%E6%9C%886%E6%97%A5%E8%B5%B7%E5%8D%95%E6%96%B9%E9%9D%A2%E5%81%9C%E7%81%AB%23) `170.8K 🔥` `-50%`
1. [孙恩盛希望16级大姐不要把他当物品](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%81%A9%E7%9B%9B%E5%B8%8C%E6%9C%9B16%E7%BA%A7%E5%A4%A7%E5%A7%90%E4%B8%8D%E8%A6%81%E6%8A%8A%E4%BB%96%E5%BD%93%E7%89%A9%E5%93%81%23) `169.3K 🔥` `-48%`

Updated at 2026-05-05 16:25:00

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
