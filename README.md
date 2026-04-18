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

1. [一个蛋糕引出7平台35.97亿元罚单 (A cake led to a 3.597 billion yuan fine on 7 platforms)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E8%9B%8B%E7%B3%95%E5%BC%95%E5%87%BA7%E5%B9%B3%E5%8F%B035.97%E4%BA%BF%E5%85%83%E7%BD%9A%E5%8D%95%23) `1.2M 🔥` `NEW`
1. [浪姐二公小考](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BA%8C%E5%85%AC%E5%B0%8F%E8%80%83%23) `1.1M 🔥` `NEW`
1. [麻辣烫阿姨下跪道歉后家长仍嘲讽](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E8%BE%A3%E7%83%AB%E9%98%BF%E5%A7%A8%E4%B8%8B%E8%B7%AA%E9%81%93%E6%AD%89%E5%90%8E%E5%AE%B6%E9%95%BF%E4%BB%8D%E5%98%B2%E8%AE%BD%23) `746.1K 🔥` `NEW`
1. [大冰一句话解决买二手房的膈应](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E4%B8%80%E5%8F%A5%E8%AF%9D%E8%A7%A3%E5%86%B3%E4%B9%B0%E4%BA%8C%E6%89%8B%E6%88%BF%E7%9A%84%E8%86%88%E5%BA%94%23) `703.1K 🔥` `NEW`
1. [李小冉让贺峻霖小嘴巴闭起来](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E8%AE%A9%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%B0%8F%E5%98%B4%E5%B7%B4%E9%97%AD%E8%B5%B7%E6%9D%A5%23) `695.2K 🔥` `NEW`
1. [公积金功能上新了](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E5%8A%9F%E8%83%BD%E4%B8%8A%E6%96%B0%E4%BA%86%23) `567.4K 🔥` `NEW`
1. [许凯 怪我](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%87%AF%20%E6%80%AA%E6%88%91%23) `430.0K 🔥` `NEW`
1. [21岁女子闪婚生活7天后想离婚](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%A5%B3%E5%AD%90%E9%97%AA%E5%A9%9A%E7%94%9F%E6%B4%BB7%E5%A4%A9%E5%90%8E%E6%83%B3%E7%A6%BB%E5%A9%9A%23) `414.2K 🔥` `NEW`
1. [这一秒过火](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `407.2K 🔥` `NEW`
1. [江苏事业编](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E4%BA%8B%E4%B8%9A%E7%BC%96%23) `380.8K 🔥` `NEW`
1. [18岁儿子撒娇要零花钱拽掉爸爸胳膊 (The 18-year-old son acted like a spoiled brat and asked for pocket money to pull off his father's arm.)](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E5%84%BF%E5%AD%90%E6%92%92%E5%A8%87%E8%A6%81%E9%9B%B6%E8%8A%B1%E9%92%B1%E6%8B%BD%E6%8E%89%E7%88%B8%E7%88%B8%E8%83%B3%E8%86%8A%23) `271.0K 🔥` `NEW`
1. [李小冉 跑调是因为缺心眼呗](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E8%B7%91%E8%B0%83%E6%98%AF%E5%9B%A0%E4%B8%BA%E7%BC%BA%E5%BF%83%E7%9C%BC%E5%91%97%23) `259.1K 🔥` `NEW`
1. [谁敢听达拉崩吧小考](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%95%A2%E5%90%AC%E8%BE%BE%E6%8B%89%E5%B4%A9%E5%90%A7%E5%B0%8F%E8%80%83%23) `257.5K 🔥` `NEW`
1. [魏建军说车堪比教科书](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%BB%BA%E5%86%9B%E8%AF%B4%E8%BD%A6%E5%A0%AA%E6%AF%94%E6%95%99%E7%A7%91%E4%B9%A6%23) `199.7K 🔥` `NEW`
1. [王一博驰骋春日穿搭赛道](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%A9%B0%E9%AA%8B%E6%98%A5%E6%97%A5%E7%A9%BF%E6%90%AD%E8%B5%9B%E9%81%93%23) `196.5K 🔥` `NEW`
1. [娜塔莉波特曼怀孕](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E5%A1%94%E8%8E%89%E6%B3%A2%E7%89%B9%E6%9B%BC%E6%80%80%E5%AD%95%23) `193.4K 🔥` `NEW`
1. [NBA附加赛](https://s.weibo.com/weibo?q=%23NBA%E9%99%84%E5%8A%A0%E8%B5%9B%23) `188.6K 🔥` `NEW`
1. [千香](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%A6%99%23) `188.0K 🔥` `NEW`
1. [刘萧旭郭宇欣二搭春夜困渡](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%90%A7%E6%97%AD%E9%83%AD%E5%AE%87%E6%AC%A3%E4%BA%8C%E6%90%AD%E6%98%A5%E5%A4%9C%E5%9B%B0%E6%B8%A1%23) `175.8K 🔥` `NEW`
1. [陈思诚说市场不只需要沈腾](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E8%AF%9A%E8%AF%B4%E5%B8%82%E5%9C%BA%E4%B8%8D%E5%8F%AA%E9%9C%80%E8%A6%81%E6%B2%88%E8%85%BE%23) `145.5K 🔥` `NEW`
1. [雷军在临沂一服务区被米粉送炒鸡 (Lei Jun was served fried chicken by rice noodles in a service area in Linyi)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9C%A8%E4%B8%B4%E6%B2%82%E4%B8%80%E6%9C%8D%E5%8A%A1%E5%8C%BA%E8%A2%AB%E7%B1%B3%E7%B2%89%E9%80%81%E7%82%92%E9%B8%A1%23) `145.5K 🔥` `NEW`
1. [美国准备解冻200亿美元伊朗资金](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%87%86%E5%A4%87%E8%A7%A3%E5%86%BB200%E4%BA%BF%E7%BE%8E%E5%85%83%E4%BC%8A%E6%9C%97%E8%B5%84%E9%87%91%23) `145.4K 🔥` `NEW`
1. [灿如繁星](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%23) `145.4K 🔥` `NEW`
1. [亲亲](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E4%BA%B2%23) `145.3K 🔥` `NEW`
1. [中国新能源产品成了海外抢手货](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E8%83%BD%E6%BA%90%E4%BA%A7%E5%93%81%E6%88%90%E4%BA%86%E6%B5%B7%E5%A4%96%E6%8A%A2%E6%89%8B%E8%B4%A7%23) `802.8K 🔥` `+26%`
1. [403元凉拌土鸡放20多勺糖](https://s.weibo.com/weibo?q=%23403%E5%85%83%E5%87%89%E6%8B%8C%E5%9C%9F%E9%B8%A1%E6%94%BE20%E5%A4%9A%E5%8B%BA%E7%B3%96%23) `466.0K 🔥` `+36%`
1. [女子跳楼被男友拽5分钟后坠亡 (Woman jumped off building and fell to death after being dragged by her boyfriend for 5 minutes)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B7%B3%E6%A5%BC%E8%A2%AB%E7%94%B7%E5%8F%8B%E6%8B%BD5%E5%88%86%E9%92%9F%E5%90%8E%E5%9D%A0%E4%BA%A1%23) `422.9K 🔥` `+23%`
1. [勇士vs太阳 (Warriors vs Suns)](https://s.weibo.com/weibo?q=%23%E5%8B%87%E5%A3%ABvs%E5%A4%AA%E9%98%B3%23) `220.8K 🔥` `+42%`
1. [美团发文回应被罚](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%E8%A2%AB%E7%BD%9A%23) `145.3K 🔥` `+33%`
1. [大众这波郭培合作审美在大气层](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%97%E8%BF%99%E6%B3%A2%E9%83%AD%E5%9F%B9%E5%90%88%E4%BD%9C%E5%AE%A1%E7%BE%8E%E5%9C%A8%E5%A4%A7%E6%B0%94%E5%B1%82%23) `692.6K 🔥`
1. [花少8姐姐三句不离小鲜肉](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E5%A7%90%E5%A7%90%E4%B8%89%E5%8F%A5%E4%B8%8D%E7%A6%BB%E5%B0%8F%E9%B2%9C%E8%82%89%23) `553.9K 🔥`
1. [孙怡回应和阚清子关系 (Sun Yi responds to her relationship with Kan Qingzi)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%9B%9E%E5%BA%94%E5%92%8C%E9%98%9A%E6%B8%85%E5%AD%90%E5%85%B3%E7%B3%BB%23) `400.3K 🔥`
1. [39岁高龄产妇子宫患癌仍坚持生育](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E9%AB%98%E9%BE%84%E4%BA%A7%E5%A6%87%E5%AD%90%E5%AE%AB%E6%82%A3%E7%99%8C%E4%BB%8D%E5%9D%9A%E6%8C%81%E7%94%9F%E8%82%B2%23) `397.1K 🔥`
1. [jisoo的哥哥已婚 (jisoo’s brother is married)](https://s.weibo.com/weibo?q=%23jisoo%E7%9A%84%E5%93%A5%E5%93%A5%E5%B7%B2%E5%A9%9A%23) `274.7K 🔥`
1. [易烊千玺注册新商标](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%B3%A8%E5%86%8C%E6%96%B0%E5%95%86%E6%A0%87%23) `274.5K 🔥`
1. [泰国泼水节亲历者发声](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%B3%BC%E6%B0%B4%E8%8A%82%E4%BA%B2%E5%8E%86%E8%80%85%E5%8F%91%E5%A3%B0%23) `205.5K 🔥`
1. [这才是医生说的清淡饮食](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E5%8C%BB%E7%94%9F%E8%AF%B4%E7%9A%84%E6%B8%85%E6%B7%A1%E9%A5%AE%E9%A3%9F%23) `176.3K 🔥`
1. [雷军不建议有司机的大老板买小米](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E4%B8%8D%E5%BB%BA%E8%AE%AE%E6%9C%89%E5%8F%B8%E6%9C%BA%E7%9A%84%E5%A4%A7%E8%80%81%E6%9D%BF%E4%B9%B0%E5%B0%8F%E7%B1%B3%23) `438.2K 🔥` `-61%`
1. [饮食清淡真的会失去很多](https://s.weibo.com/weibo?q=%23%E9%A5%AE%E9%A3%9F%E6%B8%85%E6%B7%A1%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%A4%B1%E5%8E%BB%E5%BE%88%E5%A4%9A%23) `348.5K 🔥` `-38%`
1. [张雪机车排名一路狂飙 (Zhang Xue’s motorcycle rankings are soaring all the way)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8E%92%E5%90%8D%E4%B8%80%E8%B7%AF%E7%8B%82%E9%A3%99%23) `306.3K 🔥` `-62%`
1. [伊朗发布霍尔木兹海峡船舶通行新规](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B8%83%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E8%88%B9%E8%88%B6%E9%80%9A%E8%A1%8C%E6%96%B0%E8%A7%84%23) `276.4K 🔥` `-47%`
1. [网友拍日出拍到了易烊千玺 (Netizens took photos of Yi Yang Qianxi during sunrise photos)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8B%8D%E6%97%A5%E5%87%BA%E6%8B%8D%E5%88%B0%E4%BA%86%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%23) `218.5K 🔥` `-35%`
1. [时代少年团抢票](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%8A%A2%E7%A5%A8%23) `210.5K 🔥` `-37%`
1. [魏晨躲在张杰背后笑](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E8%BA%B2%E5%9C%A8%E5%BC%A0%E6%9D%B0%E8%83%8C%E5%90%8E%E7%AC%91%23) `187.2K 🔥` `-44%`
1. [曝花少8大姐是吴君如](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%8A%B1%E5%B0%918%E5%A4%A7%E5%A7%90%E6%98%AF%E5%90%B4%E5%90%9B%E5%A6%82%23) `174.8K 🔥` `-47%`
1. [小米18Pro配置全面曝光 (Xiaomi 18Pro configuration fully exposed)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E9%85%8D%E7%BD%AE%E5%85%A8%E9%9D%A2%E6%9B%9D%E5%85%89%23) `158.3K 🔥` `-30%`
1. [张杰曾让爸妈参加魏晨婚礼](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%9B%BE%E8%AE%A9%E7%88%B8%E5%A6%88%E5%8F%82%E5%8A%A0%E9%AD%8F%E6%99%A8%E5%A9%9A%E7%A4%BC%23) `155.9K 🔥` `-42%`
1. [网传鞠婧祎千香引定档时间 (It is reported on the Internet that Ju Jingyi Qianxiang Yin has a scheduled release date)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%8D%83%E9%A6%99%E5%BC%95%E5%AE%9A%E6%A1%A3%E6%97%B6%E9%97%B4%23) `152.4K 🔥` `-33%`
1. [雷军回应YU7二排比迈巴赫多一度](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94YU7%E4%BA%8C%E6%8E%92%E6%AF%94%E8%BF%88%E5%B7%B4%E8%B5%AB%E5%A4%9A%E4%B8%80%E5%BA%A6%23) `145.5K 🔥` `-70%`
1. [疑似jisoo哥哥涉嫌猥亵女主播被捕 (Suspected brother Jisoo was arrested for molesting a female anchor)](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BCjisoo%E5%93%A5%E5%93%A5%E6%B6%89%E5%AB%8C%E7%8C%A5%E4%BA%B5%E5%A5%B3%E4%B8%BB%E6%92%AD%E8%A2%AB%E6%8D%95%23) `145.5K 🔥` `-48%`
1. [淘宝闪购回应被处罚](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%A4%84%E7%BD%9A%23) `145.4K 🔥` `-24%`

Updated at 2026-04-18 13:24:26

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
