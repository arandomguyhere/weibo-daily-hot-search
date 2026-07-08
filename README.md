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

1. [台风巴威可能正面登陆 (Typhoon Bavi may make landfall head-on)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%8F%AF%E8%83%BD%E6%AD%A3%E9%9D%A2%E7%99%BB%E9%99%86%23) `648.9K 🔥` `NEW`
1. [黄景瑜去哪儿旅行全球代言人](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E5%8E%BB%E5%93%AA%E5%84%BF%E6%97%85%E8%A1%8C%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `124.8K 🔥` `NEW`
1. [审美是一种无法伪装的能力](https://s.weibo.com/weibo?q=%23%E5%AE%A1%E7%BE%8E%E6%98%AF%E4%B8%80%E7%A7%8D%E6%97%A0%E6%B3%95%E4%BC%AA%E8%A3%85%E7%9A%84%E8%83%BD%E5%8A%9B%23) `106.0K 🔥` `NEW`
1. [老君山回应月薪60000招云海观察员](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%90%9B%E5%B1%B1%E5%9B%9E%E5%BA%94%E6%9C%88%E8%96%AA60000%E6%8B%9B%E4%BA%91%E6%B5%B7%E8%A7%82%E5%AF%9F%E5%91%98%23) `105.8K 🔥` `NEW`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `105.5K 🔥` `NEW`
1. [4岁女孩买泡面店主知身世后分文未收](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E5%AD%A9%E4%B9%B0%E6%B3%A1%E9%9D%A2%E5%BA%97%E4%B8%BB%E7%9F%A5%E8%BA%AB%E4%B8%96%E5%90%8E%E5%88%86%E6%96%87%E6%9C%AA%E6%94%B6%23) `105.2K 🔥` `NEW`
1. [阿根廷逆转晋级8强](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%80%86%E8%BD%AC%E6%99%8B%E7%BA%A78%E5%BC%BA%23) `105.1K 🔥` `NEW`
1. [狂风天给窗户留条缝可能更安全](https://s.weibo.com/weibo?q=%23%E7%8B%82%E9%A3%8E%E5%A4%A9%E7%BB%99%E7%AA%97%E6%88%B7%E7%95%99%E6%9D%A1%E7%BC%9D%E5%8F%AF%E8%83%BD%E6%9B%B4%E5%AE%89%E5%85%A8%23) `105.0K 🔥` `NEW`
1. [巨型台风巴威将影响我国](https://s.weibo.com/weibo?q=%23%E5%B7%A8%E5%9E%8B%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%B0%86%E5%BD%B1%E5%93%8D%E6%88%91%E5%9B%BD%23) `104.9K 🔥` `NEW`
1. [花呗崩了 (Huabei collapsed)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%91%97%E5%B4%A9%E4%BA%86%23) `441.1K 🔥` `-58%`
1. [当寂静的广西街头响起子弟兵口号](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%AF%82%E9%9D%99%E7%9A%84%E5%B9%BF%E8%A5%BF%E8%A1%97%E5%A4%B4%E5%93%8D%E8%B5%B7%E5%AD%90%E5%BC%9F%E5%85%B5%E5%8F%A3%E5%8F%B7%23) `166.4K 🔥` `-64%`
1. [C罗乘私人飞机离开 (Ronaldo leaves on private jet)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B9%98%E7%A7%81%E4%BA%BA%E9%A3%9E%E6%9C%BA%E7%A6%BB%E5%BC%80%23) `156.8K 🔥` `-66%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `151.3K 🔥` `-76%`
1. [明显能感受到暑假工上班了](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%BE%E8%83%BD%E6%84%9F%E5%8F%97%E5%88%B0%E6%9A%91%E5%81%87%E5%B7%A5%E4%B8%8A%E7%8F%AD%E4%BA%86%23) `136.6K 🔥` `-63%`
1. [广西洪水现状](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%E7%8E%B0%E7%8A%B6%23) `106.5K 🔥` `-74%`
1. [最新世界杯夺冠概率出炉](https://s.weibo.com/weibo?q=%23%E6%9C%80%E6%96%B0%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%BA%E5%86%A0%E6%A6%82%E7%8E%87%E5%87%BA%E7%82%89%23) `106.5K 🔥` `-61%`
1. [邓紫棋回应因台风取消演唱会](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E5%9B%9E%E5%BA%94%E5%9B%A0%E5%8F%B0%E9%A3%8E%E5%8F%96%E6%B6%88%E6%BC%94%E5%94%B1%E4%BC%9A%23) `106.4K 🔥` `-61%`
1. [发现自己从来没点过确认收货](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E4%BB%8E%E6%9D%A5%E6%B2%A1%E7%82%B9%E8%BF%87%E7%A1%AE%E8%AE%A4%E6%94%B6%E8%B4%A7%23) `106.4K 🔥` `-59%`
1. [香港飞伦敦客机一度失联](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E9%A3%9E%E4%BC%A6%E6%95%A6%E5%AE%A2%E6%9C%BA%E4%B8%80%E5%BA%A6%E5%A4%B1%E8%81%94%23) `106.3K 🔥` `-61%`
1. [埃及教练向阿根廷运动员吐口水 (Egyptian coach spits at Argentinian athlete)](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E6%95%99%E7%BB%83%E5%90%91%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%BF%90%E5%8A%A8%E5%91%98%E5%90%90%E5%8F%A3%E6%B0%B4%23) `106.3K 🔥` `-61%`
1. [11号12号台风在排队了](https://s.weibo.com/weibo?q=%2311%E5%8F%B712%E5%8F%B7%E5%8F%B0%E9%A3%8E%E5%9C%A8%E6%8E%92%E9%98%9F%E4%BA%86%23) `106.3K 🔥` `-61%`
1. [朋友来出租屋做客的招待方式](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E6%9D%A5%E5%87%BA%E7%A7%9F%E5%B1%8B%E5%81%9A%E5%AE%A2%E7%9A%84%E6%8B%9B%E5%BE%85%E6%96%B9%E5%BC%8F%23) `106.2K 🔥` `-61%`
1. [我欲乘风 (I want to ride the wind)](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `106.2K 🔥` `-61%`
1. [广西贵港12000名师生被困](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E8%B4%B5%E6%B8%AF12000%E5%90%8D%E5%B8%88%E7%94%9F%E8%A2%AB%E5%9B%B0%23) `106.1K 🔥` `-61%`
1. [烘焙是个巨大的坑](https://s.weibo.com/weibo?q=%23%E7%83%98%E7%84%99%E6%98%AF%E4%B8%AA%E5%B7%A8%E5%A4%A7%E7%9A%84%E5%9D%91%23) `106.1K 🔥` `-59%`
1. [孟子义内娱人脉101](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%86%85%E5%A8%B1%E4%BA%BA%E8%84%89101%23) `106.1K 🔥` `-61%`
1. [曝虞书欣丁禹兮三搭我欲乘风](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%81%E7%A6%B9%E5%85%AE%E4%B8%89%E6%90%AD%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `106.0K 🔥` `-61%`
1. [印度12岁少女被4男轮奸沉塘](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A612%E5%B2%81%E5%B0%91%E5%A5%B3%E8%A2%AB4%E7%94%B7%E8%BD%AE%E5%A5%B8%E6%B2%89%E5%A1%98%23) `106.0K 🔥` `-60%`
1. [印13岁女孩遭32人轮奸涉事酒店被拆](https://s.weibo.com/weibo?q=%23%E5%8D%B013%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%81%AD32%E4%BA%BA%E8%BD%AE%E5%A5%B8%E6%B6%89%E4%BA%8B%E9%85%92%E5%BA%97%E8%A2%AB%E6%8B%86%23) `106.0K 🔥` `-60%`
1. [功夫女足的观后感 (Thoughts on Kung Fu Women’s Football Team)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%9A%84%E8%A7%82%E5%90%8E%E6%84%9F%23) `105.9K 🔥` `-61%`
1. [44岁渐冻症男子创奇迹结婚生下俩女](https://s.weibo.com/weibo?q=%2344%E5%B2%81%E6%B8%90%E5%86%BB%E7%97%87%E7%94%B7%E5%AD%90%E5%88%9B%E5%A5%87%E8%BF%B9%E7%BB%93%E5%A9%9A%E7%94%9F%E4%B8%8B%E4%BF%A9%E5%A5%B3%23) `105.9K 🔥` `-60%`
1. [世界杯八强球员停赛风险](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%85%AB%E5%BC%BA%E7%90%83%E5%91%98%E5%81%9C%E8%B5%9B%E9%A3%8E%E9%99%A9%23) `105.8K 🔥` `-61%`
1. [快递员摔裂18.6万手镯公司仅赔2.4万](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E9%80%92%E5%91%98%E6%91%94%E8%A3%8218.6%E4%B8%87%E6%89%8B%E9%95%AF%E5%85%AC%E5%8F%B8%E4%BB%85%E8%B5%942.4%E4%B8%87%23) `105.7K 🔥` `-60%`
1. [虞书欣百花杀包场 (Yu Shuxin kills hundreds of flowers to reserve the venue)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%99%BE%E8%8A%B1%E6%9D%80%E5%8C%85%E5%9C%BA%23) `105.7K 🔥` `-60%`
1. [逆水寒手游](https://s.weibo.com/weibo?q=%23%E9%80%86%E6%B0%B4%E5%AF%92%E6%89%8B%E6%B8%B8%23) `105.7K 🔥` `-60%`
1. [中国女排2比3加拿大女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%922%E6%AF%943%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%A5%B3%E6%8E%92%23) `105.6K 🔥` `-60%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `105.6K 🔥` `-60%`
1. [小孩语言系统直白又可爱](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A9%E8%AF%AD%E8%A8%80%E7%B3%BB%E7%BB%9F%E7%9B%B4%E7%99%BD%E5%8F%88%E5%8F%AF%E7%88%B1%23) `105.6K 🔥` `-60%`
1. [25岁内地女孩香港年入百万](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E5%86%85%E5%9C%B0%E5%A5%B3%E5%AD%A9%E9%A6%99%E6%B8%AF%E5%B9%B4%E5%85%A5%E7%99%BE%E4%B8%87%23) `105.6K 🔥` `-60%`
1. [世界杯四分之一决赛门票暴跌近60%](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%88%86%E4%B9%8B%E4%B8%80%E5%86%B3%E8%B5%9B%E9%97%A8%E7%A5%A8%E6%9A%B4%E8%B7%8C%E8%BF%9160%25%23) `105.5K 🔥` `-60%`
1. [杨紫包场孟子义百花杀](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%8C%85%E5%9C%BA%E5%AD%9F%E5%AD%90%E4%B9%89%E7%99%BE%E8%8A%B1%E6%9D%80%23) `105.4K 🔥` `-60%`
1. [让喻言失望的朋友是谁](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E5%96%BB%E8%A8%80%E5%A4%B1%E6%9C%9B%E7%9A%84%E6%9C%8B%E5%8F%8B%E6%98%AF%E8%B0%81%23) `105.4K 🔥` `-60%`
1. [邓紫棋杭州演唱会取消](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E6%9D%AD%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%96%E6%B6%88%23) `105.4K 🔥` `-61%`
1. [纯电GLC价格给到夯 (The price of pure electric GLC is high)](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%94%B5GLC%E4%BB%B7%E6%A0%BC%E7%BB%99%E5%88%B0%E5%A4%AF%23) `105.3K 🔥` `-61%`
1. [你可能只是对吸管和塑料杯上瘾 (You might just be addicted to straws and plastic cups)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%8F%AF%E8%83%BD%E5%8F%AA%E6%98%AF%E5%AF%B9%E5%90%B8%E7%AE%A1%E5%92%8C%E5%A1%91%E6%96%99%E6%9D%AF%E4%B8%8A%E7%98%BE%23) `105.3K 🔥` `-59%`
1. [野狗骨头10.9% (Wild dog bones 10.9%)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B410.9%25%23) `105.3K 🔥` `-60%`
1. [孙颖莎蜡像入驻上海杜莎](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%9C%A1%E5%83%8F%E5%85%A5%E9%A9%BB%E4%B8%8A%E6%B5%B7%E6%9D%9C%E8%8E%8E%23) `105.2K 🔥` `-60%`
1. [看王俊凯演唱会机票打折](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E6%9C%BA%E7%A5%A8%E6%89%93%E6%8A%98%23) `105.2K 🔥` `-60%`
1. [超强台风巴威确定影响福建](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E7%A1%AE%E5%AE%9A%E5%BD%B1%E5%93%8D%E7%A6%8F%E5%BB%BA%23) `105.1K 🔥` `-60%`
1. [六蓝水库主坝破损严重](https://s.weibo.com/weibo?q=%23%E5%85%AD%E8%93%9D%E6%B0%B4%E5%BA%93%E4%B8%BB%E5%9D%9D%E7%A0%B4%E6%8D%9F%E4%B8%A5%E9%87%8D%23) `105.0K 🔥` `-60%`
1. [兄妹被洪水卷走10岁妹妹仍下落不明](https://s.weibo.com/weibo?q=%23%E5%85%84%E5%A6%B9%E8%A2%AB%E6%B4%AA%E6%B0%B4%E5%8D%B7%E8%B5%B010%E5%B2%81%E5%A6%B9%E5%A6%B9%E4%BB%8D%E4%B8%8B%E8%90%BD%E4%B8%8D%E6%98%8E%23) `105.0K 🔥` `-60%`

Updated at 2026-07-09 02:40:28

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
