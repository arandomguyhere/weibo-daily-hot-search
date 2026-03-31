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

1. [十日终焉 (End of ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `499.5K 🔥` `NEW`
1. [王者荣耀返场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E8%BF%94%E5%9C%BA%23) `211.5K 🔥` `NEW`
1. [原来香蕉有辐射](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%A6%99%E8%95%89%E6%9C%89%E8%BE%90%E5%B0%84%23) `204.7K 🔥` `NEW`
1. [徐梦洁人气](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E4%BA%BA%E6%B0%94%23) `170.9K 🔥` `NEW`
1. [朱莉舒淇TF活动世纪同框](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E8%8E%89%E8%88%92%E6%B7%87TF%E6%B4%BB%E5%8A%A8%E4%B8%96%E7%BA%AA%E5%90%8C%E6%A1%86%23) `123.0K 🔥` `NEW`
1. [文旅局回应宠物友好酒店推荐吃狗肉](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%97%85%E5%B1%80%E5%9B%9E%E5%BA%94%E5%AE%A0%E7%89%A9%E5%8F%8B%E5%A5%BD%E9%85%92%E5%BA%97%E6%8E%A8%E8%8D%90%E5%90%83%E7%8B%97%E8%82%89%23) `121.8K 🔥` `NEW`
1. [李荣浩 不是嫂子是歌手杨丞琳](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%20%E4%B8%8D%E6%98%AF%E5%AB%82%E5%AD%90%E6%98%AF%E6%AD%8C%E6%89%8B%E6%9D%A8%E4%B8%9E%E7%90%B3%23) `120.6K 🔥` `NEW`
1. [被骗900万后发现男友另有47岁女友](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%AA%97900%E4%B8%87%E5%90%8E%E5%8F%91%E7%8E%B0%E7%94%B7%E5%8F%8B%E5%8F%A6%E6%9C%8947%E5%B2%81%E5%A5%B3%E5%8F%8B%23) `115.7K 🔥` `NEW`
1. [逐玉造型指导回应张凌赫造型争议](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%80%A0%E5%9E%8B%E6%8C%87%E5%AF%BC%E5%9B%9E%E5%BA%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%80%A0%E5%9E%8B%E4%BA%89%E8%AE%AE%23) `114.9K 🔥` `NEW`
1. [鞠婧祎说好看吗](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%AF%B4%E5%A5%BD%E7%9C%8B%E5%90%97%23) `112.2K 🔥` `NEW`
1. [男子逛妈祖庙偷走妈祖9190元金耳环 (Man visits Mazu temple and steals Mazu gold earrings worth NT$9,190)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%80%9B%E5%A6%88%E7%A5%96%E5%BA%99%E5%81%B7%E8%B5%B0%E5%A6%88%E7%A5%969190%E5%85%83%E9%87%91%E8%80%B3%E7%8E%AF%23) `112.1K 🔥` `NEW`
1. [跳楼机数月吸金4000万原唱收入为0](https://s.weibo.com/weibo?q=%23%E8%B7%B3%E6%A5%BC%E6%9C%BA%E6%95%B0%E6%9C%88%E5%90%B8%E9%87%914000%E4%B8%87%E5%8E%9F%E5%94%B1%E6%94%B6%E5%85%A5%E4%B8%BA0%23) `111.4K 🔥` `NEW`
1. [金价还会涨多高](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%BF%98%E4%BC%9A%E6%B6%A8%E5%A4%9A%E9%AB%98%23) `109.3K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `96.8K 🔥` `NEW`
1. [张雪个人借款超千万只为做发动机](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E4%B8%AA%E4%BA%BA%E5%80%9F%E6%AC%BE%E8%B6%85%E5%8D%83%E4%B8%87%E5%8F%AA%E4%B8%BA%E5%81%9A%E5%8F%91%E5%8A%A8%E6%9C%BA%23) `95.1K 🔥` `NEW`
1. [凤凰传奇没散伙原因](https://s.weibo.com/weibo?q=%23%E5%87%A4%E5%87%B0%E4%BC%A0%E5%A5%87%E6%B2%A1%E6%95%A3%E4%BC%99%E5%8E%9F%E5%9B%A0%23) `95.0K 🔥` `NEW`
1. [龚俊 高干文男主](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%20%E9%AB%98%E5%B9%B2%E6%96%87%E7%94%B7%E4%B8%BB%23) `94.9K 🔥` `NEW`
1. [谁懂周也这个看垃圾的眼神](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%87%82%E5%91%A8%E4%B9%9F%E8%BF%99%E4%B8%AA%E7%9C%8B%E5%9E%83%E5%9C%BE%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `94.7K 🔥` `NEW`
1. [樊振东跨界踢足球](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%B7%A8%E7%95%8C%E8%B8%A2%E8%B6%B3%E7%90%83%23) `94.1K 🔥` `NEW`
1. [刘雅瑟耳朵红透了](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%85%E7%91%9F%E8%80%B3%E6%9C%B5%E7%BA%A2%E9%80%8F%E4%BA%86%23) `94.1K 🔥` `NEW`
1. [迪丽热巴陈飞宇咬脖吻戏 (Dilraba and Chen Feiyu’s neck biting kiss scene)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E5%92%AC%E8%84%96%E5%90%BB%E6%88%8F%23) `93.8K 🔥` `NEW`
1. [王楚钦vsE约内斯库](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vsE%E7%BA%A6%E5%86%85%E6%96%AF%E5%BA%93%23) `93.7K 🔥` `NEW`
1. [近5万美国人排队申请入籍加拿大](https://s.weibo.com/weibo?q=%23%E8%BF%915%E4%B8%87%E7%BE%8E%E5%9B%BD%E4%BA%BA%E6%8E%92%E9%98%9F%E7%94%B3%E8%AF%B7%E5%85%A5%E7%B1%8D%E5%8A%A0%E6%8B%BF%E5%A4%A7%23) `89.2K 🔥` `NEW`
1. [安崎人气](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E4%BA%BA%E6%B0%94%23) `88.6K 🔥` `NEW`
1. [百万鲜花祭英烈](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%B8%87%E9%B2%9C%E8%8A%B1%E7%A5%AD%E8%8B%B1%E7%83%88%23) `87.9K 🔥` `NEW`
1. [十日终焉网传主演阵容](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E7%BD%91%E4%BC%A0%E4%B8%BB%E6%BC%94%E9%98%B5%E5%AE%B9%23) `82.4K 🔥` `NEW`
1. [乘风2026排名](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E6%8E%92%E5%90%8D%23) `797.0K 🔥` `+604%`
1. [全新坦克700预售43.8万元起 (The new Tank 700 pre-sale starts from 438,000 yuan)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E5%9D%A6%E5%85%8B700%E9%A2%84%E5%94%AE43.8%E4%B8%87%E5%85%83%E8%B5%B7%23) `561.6K 🔥` `+90%`
1. [B站明日将下线猜你喜欢算法](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E6%98%8E%E6%97%A5%E5%B0%86%E4%B8%8B%E7%BA%BF%E7%8C%9C%E4%BD%A0%E5%96%9C%E6%AC%A2%E7%AE%97%E6%B3%95%23) `174.6K 🔥` `+104%`
1. [朱莉眼睛怎么了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E8%8E%89%E7%9C%BC%E7%9D%9B%E6%80%8E%E4%B9%88%E4%BA%86%23) `115.2K 🔥` `+48%`
1. [瑞幸 紫椰子 (Luckin Purple Coconut)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%20%E7%B4%AB%E6%A4%B0%E5%AD%90%23) `1.1M 🔥`
1. [4月一批新规将施行](https://s.weibo.com/weibo?q=%234%E6%9C%88%E4%B8%80%E6%89%B9%E6%96%B0%E8%A7%84%E5%B0%86%E6%96%BD%E8%A1%8C%23) `658.6K 🔥`
1. [张雪 (Zhang Xue)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `238.2K 🔥`
1. [李健硬要给许飞版权费 (Li Jian insists on paying royalties to Xu Fei)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%E7%A1%AC%E8%A6%81%E7%BB%99%E8%AE%B8%E9%A3%9E%E7%89%88%E6%9D%83%E8%B4%B9%23) `232.6K 🔥`
1. [严浩翔考核试卷](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%80%83%E6%A0%B8%E8%AF%95%E5%8D%B7%23) `203.1K 🔥`
1. [怪不得公司一边招人一边裁员](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%85%AC%E5%8F%B8%E4%B8%80%E8%BE%B9%E6%8B%9B%E4%BA%BA%E4%B8%80%E8%BE%B9%E8%A3%81%E5%91%98%23) `198.1K 🔥`
1. [曾沛慈人气第一](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%BA%BA%E6%B0%94%E7%AC%AC%E4%B8%80%23) `195.6K 🔥`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `185.1K 🔥`
1. [中国3艘船成功通过霍尔木兹海峡 (Three Chinese ships successfully passed through the Strait of Hormuz)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD3%E8%89%98%E8%88%B9%E6%88%90%E5%8A%9F%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `112.3K 🔥`
1. [徐梦洁sugar初舞台](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81sugar%E5%88%9D%E8%88%9E%E5%8F%B0%23) `94.4K 🔥`
1. [国足负于10人喀麦隆](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E8%B4%9F%E4%BA%8E10%E4%BA%BA%E5%96%80%E9%BA%A6%E9%9A%86%23) `243.6K 🔥` `-71%`
1. [麻辣烫里最夯的是啥菜](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E8%BE%A3%E7%83%AB%E9%87%8C%E6%9C%80%E5%A4%AF%E7%9A%84%E6%98%AF%E5%95%A5%E8%8F%9C%23) `236.1K 🔥` `-30%`
1. [米饭拌白糖](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E9%A5%AD%E6%8B%8C%E7%99%BD%E7%B3%96%23) `163.9K 🔥` `-44%`
1. [Ruler 韩国兵役](https://s.weibo.com/weibo?q=%23Ruler%20%E9%9F%A9%E5%9B%BD%E5%85%B5%E5%BD%B9%23) `123.7K 🔥` `-63%`
1. [鞠婧祎工作室声明 (Ju Jingyi Studio Statement)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%A3%B0%E6%98%8E%23) `119.4K 🔥` `-36%`
1. [黄油年糕被改名为韩国年糕 (Butter rice cake was renamed Korean rice cake)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B2%B9%E5%B9%B4%E7%B3%95%E8%A2%AB%E6%94%B9%E5%90%8D%E4%B8%BA%E9%9F%A9%E5%9B%BD%E5%B9%B4%E7%B3%95%23) `118.4K 🔥` `-32%`
1. [陈妍希跟腱断裂 (Michelle Chen's Achilles tendon rupture)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E8%B7%9F%E8%85%B1%E6%96%AD%E8%A3%82%23) `117.4K 🔥` `-29%`
1. [鞠婧祎工作室改名字了](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%94%B9%E5%90%8D%E5%AD%97%E4%BA%86%23) `116.0K 🔥` `-33%`
1. [广州长隆回应狮子静坐淋雨 (Guangzhou Chimelong responds to lion sit-in and gets rained on)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E9%95%BF%E9%9A%86%E5%9B%9E%E5%BA%94%E7%8B%AE%E5%AD%90%E9%9D%99%E5%9D%90%E6%B7%8B%E9%9B%A8%23) `114.5K 🔥` `-46%`
1. [乘风2026助力团王俊凯](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%8A%A9%E5%8A%9B%E5%9B%A2%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `112.2K 🔥` `-43%`
1. [辛苦考上幼师后幼儿园却没了](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8B%A6%E8%80%83%E4%B8%8A%E5%B9%BC%E5%B8%88%E5%90%8E%E5%B9%BC%E5%84%BF%E5%9B%AD%E5%8D%B4%E6%B2%A1%E4%BA%86%23) `87.6K 🔥` `-27%`

Updated at 2026-03-31 18:37:11

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
