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

1. [伴娘婚闹致九级伤残9人赔23万 (Bridesmaid's wedding incident resulted in ninth-degree disability, 9 people compensated with RMB 230,000 compensation)](https://s.weibo.com/weibo?q=%23%E4%BC%B4%E5%A8%98%E5%A9%9A%E9%97%B9%E8%87%B4%E4%B9%9D%E7%BA%A7%E4%BC%A4%E6%AE%8B9%E4%BA%BA%E8%B5%9423%E4%B8%87%23) `1.5M 🔥` `NEW`
1. [杨洋超张凌赫](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E8%B6%85%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `923.7K 🔥` `NEW`
1. [金饰价格又崩了](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E5%8F%88%E5%B4%A9%E4%BA%86%23) `910.1K 🔥` `NEW`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `759.5K 🔥` `NEW`
1. [请愿网站列出阿根廷队10大罪状](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%84%BF%E7%BD%91%E7%AB%99%E5%88%97%E5%87%BA%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F10%E5%A4%A7%E7%BD%AA%E7%8A%B6%23) `421.4K 🔥` `NEW`
1. [周星驰回应选角迪丽热巴](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%9B%9E%E5%BA%94%E9%80%89%E8%A7%92%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `368.7K 🔥` `NEW`
1. [温宜公主被北电录取](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%AE%9C%E5%85%AC%E4%B8%BB%E8%A2%AB%E5%8C%97%E7%94%B5%E5%BD%95%E5%8F%96%23) `359.6K 🔥` `NEW`
1. [时代峰峻辟谣左奇函女同学传闻](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%BE%9F%E8%B0%A3%E5%B7%A6%E5%A5%87%E5%87%BD%E5%A5%B3%E5%90%8C%E5%AD%A6%E4%BC%A0%E9%97%BB%23) `357.0K 🔥` `NEW`
1. [迪丽热巴偷偷去影院看观众反应](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%81%B7%E5%81%B7%E5%8E%BB%E5%BD%B1%E9%99%A2%E7%9C%8B%E8%A7%82%E4%BC%97%E5%8F%8D%E5%BA%94%23) `336.1K 🔥` `NEW`
1. [国内整车利润率降至1.5%](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E6%95%B4%E8%BD%A6%E5%88%A9%E6%B6%A6%E7%8E%87%E9%99%8D%E8%87%B31.5%25%23) `317.5K 🔥` `NEW`
1. [冉莹颖曾称水费每月100元节俭开支 (Ran Yingying once said that the monthly water bill is 100 yuan to save money.)](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E6%9B%BE%E7%A7%B0%E6%B0%B4%E8%B4%B9%E6%AF%8F%E6%9C%88100%E5%85%83%E8%8A%82%E4%BF%AD%E5%BC%80%E6%94%AF%23) `314.1K 🔥` `NEW`
1. [八仙 暑期档黑马](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%20%E6%9A%91%E6%9C%9F%E6%A1%A3%E9%BB%91%E9%A9%AC%23) `302.0K 🔥` `NEW`
1. [朴志效离开JYP](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%BF%97%E6%95%88%E7%A6%BB%E5%BC%80JYP%23) `294.3K 🔥` `NEW`
1. [功夫女足 好看](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%20%E5%A5%BD%E7%9C%8B%23) `245.1K 🔥` `NEW`
1. [3岁女童疑被生父怀孕女友杀害](https://s.weibo.com/weibo?q=%233%E5%B2%81%E5%A5%B3%E7%AB%A5%E7%96%91%E8%A2%AB%E7%94%9F%E7%88%B6%E6%80%80%E5%AD%95%E5%A5%B3%E5%8F%8B%E6%9D%80%E5%AE%B3%23) `234.0K 🔥` `NEW`
1. [沈阳抗洪](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E6%8A%97%E6%B4%AA%23) `224.7K 🔥` `NEW`
1. [你的房子车子收入假期将有变化](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E6%88%BF%E5%AD%90%E8%BD%A6%E5%AD%90%E6%94%B6%E5%85%A5%E5%81%87%E6%9C%9F%E5%B0%86%E6%9C%89%E5%8F%98%E5%8C%96%23) `223.6K 🔥` `NEW`
1. [孙怡 博爱怎么不算爱](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E5%8D%9A%E7%88%B1%E6%80%8E%E4%B9%88%E4%B8%8D%E7%AE%97%E7%88%B1%23) `217.4K 🔥` `NEW`
1. [沈阳暴雨后一车辆上爬满蜗牛](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E6%9A%B4%E9%9B%A8%E5%90%8E%E4%B8%80%E8%BD%A6%E8%BE%86%E4%B8%8A%E7%88%AC%E6%BB%A1%E8%9C%97%E7%89%9B%23) `188.9K 🔥` `NEW`
1. [TF家族运动会最新声明](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%E6%9C%80%E6%96%B0%E5%A3%B0%E6%98%8E%23) `187.1K 🔥` `NEW`
1. [虞书欣 全世界正数第一会穿搭 (Yu Shuxin is the best in the world at dressing up)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E5%85%A8%E4%B8%96%E7%95%8C%E6%AD%A3%E6%95%B0%E7%AC%AC%E4%B8%80%E4%BC%9A%E7%A9%BF%E6%90%AD%23) `186.4K 🔥` `NEW`
1. [工资向一线岗位倾斜](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E8%B5%84%E5%90%91%E4%B8%80%E7%BA%BF%E5%B2%97%E4%BD%8D%E5%80%BE%E6%96%9C%23) `184.2K 🔥` `NEW`
1. [重庆热到42摄氏度](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E7%83%AD%E5%88%B042%E6%91%84%E6%B0%8F%E5%BA%A6%23) `184.2K 🔥` `NEW`
1. [也算看过王安宇穿网袜了](https://s.weibo.com/weibo?q=%23%E4%B9%9F%E7%AE%97%E7%9C%8B%E8%BF%87%E7%8E%8B%E5%AE%89%E5%AE%87%E7%A9%BF%E7%BD%91%E8%A2%9C%E4%BA%86%23) `183.8K 🔥` `NEW`
1. [上班累是因为通讯软件太发达了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E7%B4%AF%E6%98%AF%E5%9B%A0%E4%B8%BA%E9%80%9A%E8%AE%AF%E8%BD%AF%E4%BB%B6%E5%A4%AA%E5%8F%91%E8%BE%BE%E4%BA%86%23) `183.6K 🔥` `NEW`
1. [沈阳灯塔](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E7%81%AF%E5%A1%94%23) `183.2K 🔥` `NEW`
1. [一辆特斯拉到底能开多少年](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%BE%86%E7%89%B9%E6%96%AF%E6%8B%89%E5%88%B0%E5%BA%95%E8%83%BD%E5%BC%80%E5%A4%9A%E5%B0%91%E5%B9%B4%23) `183.0K 🔥` `NEW`
1. [DeepSeek梁文锋身价飙升至360亿美元](https://s.weibo.com/weibo?q=%23DeepSeek%E6%A2%81%E6%96%87%E9%94%8B%E8%BA%AB%E4%BB%B7%E9%A3%99%E5%8D%87%E8%87%B3360%E4%BA%BF%E7%BE%8E%E5%85%83%23) `180.1K 🔥` `NEW`
1. [冰清玉洁的申清都生孩子了](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B8%85%E7%8E%89%E6%B4%81%E7%9A%84%E7%94%B3%E6%B8%85%E9%83%BD%E7%94%9F%E5%AD%A9%E5%AD%90%E4%BA%86%23) `170.1K 🔥` `NEW`
1. [南方人不要随便买豆荚冰箱贴](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E4%BA%BA%E4%B8%8D%E8%A6%81%E9%9A%8F%E4%BE%BF%E4%B9%B0%E8%B1%86%E8%8D%9A%E5%86%B0%E7%AE%B1%E8%B4%B4%23) `169.1K 🔥` `NEW`
1. [百花杀剧组把小猫养成大猫了 (The cast of A Hundred Flowers Raised a Kitten into a Big Cat)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E5%89%A7%E7%BB%84%E6%8A%8A%E5%B0%8F%E7%8C%AB%E5%85%BB%E6%88%90%E5%A4%A7%E7%8C%AB%E4%BA%86%23) `147.4K 🔥` `NEW`
1. [周星驰透露功夫女足或有续作](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E9%80%8F%E9%9C%B2%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E6%88%96%E6%9C%89%E7%BB%AD%E4%BD%9C%23) `144.3K 🔥` `NEW`
1. [雨后高温模式开启](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E5%90%8E%E9%AB%98%E6%B8%A9%E6%A8%A1%E5%BC%8F%E5%BC%80%E5%90%AF%23) `144.1K 🔥` `NEW`
1. [疑AI照片拿了摄影比赛一等奖](https://s.weibo.com/weibo?q=%23%E7%96%91AI%E7%85%A7%E7%89%87%E6%8B%BF%E4%BA%86%E6%91%84%E5%BD%B1%E6%AF%94%E8%B5%9B%E4%B8%80%E7%AD%89%E5%A5%96%23) `1.7M 🔥` `+172%`
1. [去音乐节后没有容貌焦虑了](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E9%9F%B3%E4%B9%90%E8%8A%82%E5%90%8E%E6%B2%A1%E6%9C%89%E5%AE%B9%E8%B2%8C%E7%84%A6%E8%99%91%E4%BA%86%23) `751.1K 🔥` `+30%`
1. [AI生成环卫工照片获摄影比赛一等奖 (AI-generated photos of sanitation workers won first prize in photography competition)](https://s.weibo.com/weibo?q=%23AI%E7%94%9F%E6%88%90%E7%8E%AF%E5%8D%AB%E5%B7%A5%E7%85%A7%E7%89%87%E8%8E%B7%E6%91%84%E5%BD%B1%E6%AF%94%E8%B5%9B%E4%B8%80%E7%AD%89%E5%A5%96%23) `320.9K 🔥` `+41%`
1. [青春主场踏歌而行](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E4%B8%BB%E5%9C%BA%E8%B8%8F%E6%AD%8C%E8%80%8C%E8%A1%8C%23) `1.1M 🔥`
1. [章若楠跑男化妆师评论区被阴阳白干](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E8%B7%91%E7%94%B7%E5%8C%96%E5%A6%86%E5%B8%88%E8%AF%84%E8%AE%BA%E5%8C%BA%E8%A2%AB%E9%98%B4%E9%98%B3%E7%99%BD%E5%B9%B2%23) `367.5K 🔥`
1. [邹市明场馆年卡定价8.8万 (The annual card of Zoushi Ming Stadium is priced at 88,000)](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E5%9C%BA%E9%A6%86%E5%B9%B4%E5%8D%A1%E5%AE%9A%E4%BB%B78.8%E4%B8%87%23) `364.5K 🔥`
1. [邹市明2亿理财亏损始末](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E2%E4%BA%BF%E7%90%86%E8%B4%A2%E4%BA%8F%E6%8D%9F%E5%A7%8B%E6%9C%AB%23) `362.9K 🔥`
1. [一万块钱可以花多久](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%87%E5%9D%97%E9%92%B1%E5%8F%AF%E4%BB%A5%E8%8A%B1%E5%A4%9A%E4%B9%85%23) `307.2K 🔥`
1. [第一批注销校园卡的人发现不对劲了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E6%B3%A8%E9%94%80%E6%A0%A1%E5%9B%AD%E5%8D%A1%E7%9A%84%E4%BA%BA%E5%8F%91%E7%8E%B0%E4%B8%8D%E5%AF%B9%E5%8A%B2%E4%BA%86%23) `305.0K 🔥`
1. [韩女减重小贴士 (Weight loss tips for Korean women)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%A5%B3%E5%87%8F%E9%87%8D%E5%B0%8F%E8%B4%B4%E5%A3%AB%23) `230.0K 🔥`
1. [金智媛22岁刘Rachel时期 (Kim Ji-won 22-year-old Liu Rachel period)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E5%AA%9B22%E5%B2%81%E5%88%98Rachel%E6%97%B6%E6%9C%9F%23) `223.2K 🔥`
1. [汪东城自曝与初恋分手原因](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E4%B8%9C%E5%9F%8E%E8%87%AA%E6%9B%9D%E4%B8%8E%E5%88%9D%E6%81%8B%E5%88%86%E6%89%8B%E5%8E%9F%E5%9B%A0%23) `190.0K 🔥`
1. [请愿逐出阿根廷人数已超500万 (Number of people petitioning for deportation from Argentina exceeds 5 million)](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%84%BF%E9%80%90%E5%87%BA%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%BA%BA%E6%95%B0%E5%B7%B2%E8%B6%85500%E4%B8%87%23) `811.2K 🔥` `-55%`
1. [被长期主义的消费观震惊到了 (I was shocked by the long-term consumption outlook)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%95%BF%E6%9C%9F%E4%B8%BB%E4%B9%89%E7%9A%84%E6%B6%88%E8%B4%B9%E8%A7%82%E9%9C%87%E6%83%8A%E5%88%B0%E4%BA%86%23) `420.5K 🔥` `-52%`
1. [AI杀死时尚行业](https://s.weibo.com/weibo?q=%23AI%E6%9D%80%E6%AD%BB%E6%97%B6%E5%B0%9A%E8%A1%8C%E4%B8%9A%23) `359.0K 🔥` `-52%`
1. [邹市明上海黄浦江边场馆年租金5000万](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E4%B8%8A%E6%B5%B7%E9%BB%84%E6%B5%A6%E6%B1%9F%E8%BE%B9%E5%9C%BA%E9%A6%86%E5%B9%B4%E7%A7%9F%E9%87%915000%E4%B8%87%23) `286.3K 🔥` `-74%`
1. [阿根廷主帅回击请愿逐出阿根廷 (Argentina coach fires back on petition to be expelled from Argentina)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%BB%E5%B8%85%E5%9B%9E%E5%87%BB%E8%AF%B7%E6%84%BF%E9%80%90%E5%87%BA%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `214.2K 🔥` `-68%`
1. [A股半导体产业](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8D%8A%E5%AF%BC%E4%BD%93%E4%BA%A7%E4%B8%9A%23) `161.3K 🔥` `-51%`

Updated at 2026-07-14 18:21:59

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
