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

1. [西班牙VS比利时 (Spain vs Belgium)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99VS%E6%AF%94%E5%88%A9%E6%97%B6%23) `329.3K 🔥` `NEW`
1. [别让谣言干扰抢险救灾](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%AE%A9%E8%B0%A3%E8%A8%80%E5%B9%B2%E6%89%B0%E6%8A%A2%E9%99%A9%E6%95%91%E7%81%BE%23) `171.0K 🔥` `NEW`
1. [迪丽热巴这动作把我腿掰折也做不到](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%99%E5%8A%A8%E4%BD%9C%E6%8A%8A%E6%88%91%E8%85%BF%E6%8E%B0%E6%8A%98%E4%B9%9F%E5%81%9A%E4%B8%8D%E5%88%B0%23) `65.8K 🔥` `NEW`
1. [浙江象山海滩掀起4米高大浪](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E8%B1%A1%E5%B1%B1%E6%B5%B7%E6%BB%A9%E6%8E%80%E8%B5%B74%E7%B1%B3%E9%AB%98%E5%A4%A7%E6%B5%AA%23) `54.2K 🔥` `NEW`
1. [巴威在登陆前台风眼消失](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%9C%A8%E7%99%BB%E9%99%86%E5%89%8D%E5%8F%B0%E9%A3%8E%E7%9C%BC%E6%B6%88%E5%A4%B1%23) `40.5K 🔥` `NEW`
1. [狗狗知道自己正在在扮演一只蜗牛](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E6%AD%A3%E5%9C%A8%E5%9C%A8%E6%89%AE%E6%BC%94%E4%B8%80%E5%8F%AA%E8%9C%97%E7%89%9B%23) `40.5K 🔥` `NEW`
1. [巴威来袭江苏大部有9至11级大风](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E6%9D%A5%E8%A2%AD%E6%B1%9F%E8%8B%8F%E5%A4%A7%E9%83%A8%E6%9C%899%E8%87%B311%E7%BA%A7%E5%A4%A7%E9%A3%8E%23) `40.5K 🔥` `NEW`
1. [巴威台风眼消失 (Typhoon Bawi's eye disappears)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%8F%B0%E9%A3%8E%E7%9C%BC%E6%B6%88%E5%A4%B1%23) `1.2M 🔥` `+34%`
1. [开车喜欢把手这样放因为啥](https://s.weibo.com/weibo?q=%23%E5%BC%80%E8%BD%A6%E5%96%9C%E6%AC%A2%E6%8A%8A%E6%89%8B%E8%BF%99%E6%A0%B7%E6%94%BE%E5%9B%A0%E4%B8%BA%E5%95%A5%23) `77.4K 🔥`
1. [工资一样的朋友存款比我多28万](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E8%B5%84%E4%B8%80%E6%A0%B7%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%AD%98%E6%AC%BE%E6%AF%94%E6%88%91%E5%A4%9A28%E4%B8%87%23) `450.1K 🔥` `-29%`
1. [广西贵港教育园区孤岛救援始末](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E8%B4%B5%E6%B8%AF%E6%95%99%E8%82%B2%E5%9B%AD%E5%8C%BA%E5%AD%A4%E5%B2%9B%E6%95%91%E6%8F%B4%E5%A7%8B%E6%9C%AB%23) `338.9K 🔥` `-50%`
1. [周星驰口碑 (Stephen Chow's reputation)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%8F%A3%E7%A2%91%23) `236.8K 🔥` `-57%`
1. [北京全市已转移近10万人](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%85%A8%E5%B8%82%E5%B7%B2%E8%BD%AC%E7%A7%BB%E8%BF%9110%E4%B8%87%E4%BA%BA%23) `173.8K 🔥` `-61%`
1. [白鹿每次憋哭就这样](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%AF%8F%E6%AC%A1%E6%86%8B%E5%93%AD%E5%B0%B1%E8%BF%99%E6%A0%B7%23) `142.3K 🔥` `-59%`
1. [台风巴威位置](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E4%BD%8D%E7%BD%AE%23) `110.3K 🔥` `-85%`
1. [歌手排名](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `107.2K 🔥` `-66%`
1. [建议大家不要失去打扮欲](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B8%8D%E8%A6%81%E5%A4%B1%E5%8E%BB%E6%89%93%E6%89%AE%E6%AC%B2%23) `101.3K 🔥` `-51%`
1. [台风天超市被剩下的方便面 (The instant noodles left in the supermarket during the typhoon day)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%A4%A9%E8%B6%85%E5%B8%82%E8%A2%AB%E5%89%A9%E4%B8%8B%E7%9A%84%E6%96%B9%E4%BE%BF%E9%9D%A2%23) `98.2K 🔥` `-52%`
1. [台风巴威最新研判](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E6%9C%80%E6%96%B0%E7%A0%94%E5%88%A4%23) `90.0K 🔥` `-54%`
1. [迪丽热巴大腿肌踢成巨肌了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A4%A7%E8%85%BF%E8%82%8C%E8%B8%A2%E6%88%90%E5%B7%A8%E8%82%8C%E4%BA%86%23) `83.1K 🔥` `-59%`
1. [微信红包转账有新变化](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%BA%A2%E5%8C%85%E8%BD%AC%E8%B4%A6%E6%9C%89%E6%96%B0%E5%8F%98%E5%8C%96%23) `79.3K 🔥` `-69%`
1. [巴威预计12日凌晨登陆](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E9%A2%84%E8%AE%A112%E6%97%A5%E5%87%8C%E6%99%A8%E7%99%BB%E9%99%86%23) `75.6K 🔥` `-61%`
1. [邓紫棋被歌手弹幕发现了行踪 (Deng Ziqi’s whereabouts were discovered by the singer’s barrage)](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E8%A2%AB%E6%AD%8C%E6%89%8B%E5%BC%B9%E5%B9%95%E5%8F%91%E7%8E%B0%E4%BA%86%E8%A1%8C%E8%B8%AA%23) `74.1K 🔥` `-61%`
1. [宋威龙工作室有仙人吧](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%9C%89%E4%BB%99%E4%BA%BA%E5%90%A7%23) `74.0K 🔥` `-62%`
1. [德约科维奇vs辛纳](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%BA%A6%E7%A7%91%E7%BB%B4%E5%A5%87vs%E8%BE%9B%E7%BA%B3%23) `73.7K 🔥` `-59%`
1. [冉莹颖自曝处在丧偶式婚姻](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E8%87%AA%E6%9B%9D%E5%A4%84%E5%9C%A8%E4%B8%A7%E5%81%B6%E5%BC%8F%E5%A9%9A%E5%A7%BB%23) `66.0K 🔥` `-58%`
1. [会打扮是被严重低估的能力 (Being able to dress up is a seriously underestimated ability)](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E6%89%93%E6%89%AE%E6%98%AF%E8%A2%AB%E4%B8%A5%E9%87%8D%E4%BD%8E%E4%BC%B0%E7%9A%84%E8%83%BD%E5%8A%9B%23) `65.9K 🔥` `-58%`
1. [火灾鞋厂楼顶蓄水池打捞出多具遗体](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%81%BE%E9%9E%8B%E5%8E%82%E6%A5%BC%E9%A1%B6%E8%93%84%E6%B0%B4%E6%B1%A0%E6%89%93%E6%8D%9E%E5%87%BA%E5%A4%9A%E5%85%B7%E9%81%97%E4%BD%93%23) `65.9K 🔥` `-58%`
1. [突然意识到没必要焦虑](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E6%B2%A1%E5%BF%85%E8%A6%81%E7%84%A6%E8%99%91%23) `65.8K 🔥` `-58%`
1. [儿子出轨后婆婆上门硬刚替儿媳讨说法](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%87%BA%E8%BD%A8%E5%90%8E%E5%A9%86%E5%A9%86%E4%B8%8A%E9%97%A8%E7%A1%AC%E5%88%9A%E6%9B%BF%E5%84%BF%E5%AA%B3%E8%AE%A8%E8%AF%B4%E6%B3%95%23) `65.5K 🔥` `-55%`
1. [女子因儿时被亲戚性侵自杀母亲发声](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E5%84%BF%E6%97%B6%E8%A2%AB%E4%BA%B2%E6%88%9A%E6%80%A7%E4%BE%B5%E8%87%AA%E6%9D%80%E6%AF%8D%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `63.7K 🔥` `-46%`
1. [昀牵孟绕](https://s.weibo.com/weibo?q=%23%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95%23) `60.6K 🔥` `-63%`
1. [陈楚生庙堂之外](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A5%9A%E7%94%9F%E5%BA%99%E5%A0%82%E4%B9%8B%E5%A4%96%23) `58.3K 🔥` `-53%`
1. [女子遭大狗撕咬20秒狂犬病三级暴露 (Woman was bitten by a big dog and exposed to level 3 rabies for 20 seconds)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%81%AD%E5%A4%A7%E7%8B%97%E6%92%95%E5%92%AC20%E7%A7%92%E7%8B%82%E7%8A%AC%E7%97%85%E4%B8%89%E7%BA%A7%E6%9A%B4%E9%9C%B2%23) `57.0K 🔥` `-49%`
1. [万妮达淘汰 (Wan Nida eliminated)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E6%B7%98%E6%B1%B0%23) `56.9K 🔥` `-50%`
1. [孟子义李昀锐你俩在娇羞啥](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E4%BD%A0%E4%BF%A9%E5%9C%A8%E5%A8%87%E7%BE%9E%E5%95%A5%23) `54.1K 🔥` `-66%`
1. [JDG空ban](https://s.weibo.com/weibo?q=%23JDG%E7%A9%BAban%23) `52.8K 🔥` `-67%`
1. [35岁女高管立遗赠千万资产留给小姨](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%A5%B3%E9%AB%98%E7%AE%A1%E7%AB%8B%E9%81%97%E8%B5%A0%E5%8D%83%E4%B8%87%E8%B5%84%E4%BA%A7%E7%95%99%E7%BB%99%E5%B0%8F%E5%A7%A8%23) `51.9K 🔥` `-44%`
1. [范志毅说亚马尔必须要尊重C罗](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%BF%97%E6%AF%85%E8%AF%B4%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%BF%85%E9%A1%BB%E8%A6%81%E5%B0%8A%E9%87%8DC%E7%BD%97%23) `47.0K 🔥` `-50%`
1. [车位被女子霸占业主再发声](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%BD%8D%E8%A2%AB%E5%A5%B3%E5%AD%90%E9%9C%B8%E5%8D%A0%E4%B8%9A%E4%B8%BB%E5%86%8D%E5%8F%91%E5%A3%B0%23) `46.2K 🔥` `-50%`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `44.5K 🔥` `-59%`
1. [网友吐槽吃到了内增高水煮肉片](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%90%90%E6%A7%BD%E5%90%83%E5%88%B0%E4%BA%86%E5%86%85%E5%A2%9E%E9%AB%98%E6%B0%B4%E7%85%AE%E8%82%89%E7%89%87%23) `44.5K 🔥` `-55%`
1. [耳帝 胡彦斌唱得最不好的一次](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%20%E8%83%A1%E5%BD%A6%E6%96%8C%E5%94%B1%E5%BE%97%E6%9C%80%E4%B8%8D%E5%A5%BD%E7%9A%84%E4%B8%80%E6%AC%A1%23) `43.8K 🔥` `-72%`
1. [突然意识到所有东西都是我的钱换来的](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E6%89%80%E6%9C%89%E4%B8%9C%E8%A5%BF%E9%83%BD%E6%98%AF%E6%88%91%E7%9A%84%E9%92%B1%E6%8D%A2%E6%9D%A5%E7%9A%84%23) `43.6K 🔥` `-54%`
1. [多地将出现10级以上雷暴大风 (Thunderstorms and strong winds above level 10 will occur in many places)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%B0%86%E5%87%BA%E7%8E%B010%E7%BA%A7%E4%BB%A5%E4%B8%8A%E9%9B%B7%E6%9A%B4%E5%A4%A7%E9%A3%8E%23) `40.6K 🔥` `-57%`
1. [小米回应新车遭恶意抹黑](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%9B%9E%E5%BA%94%E6%96%B0%E8%BD%A6%E9%81%AD%E6%81%B6%E6%84%8F%E6%8A%B9%E9%BB%91%23) `40.5K 🔥` `-57%`
1. [浙江海边已是巨浪狂涛](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E6%B5%B7%E8%BE%B9%E5%B7%B2%E6%98%AF%E5%B7%A8%E6%B5%AA%E7%8B%82%E6%B6%9B%23) `40.5K 🔥` `-57%`
1. [哈兰德被小孩摸完大腿一秒变红](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E8%A2%AB%E5%B0%8F%E5%AD%A9%E6%91%B8%E5%AE%8C%E5%A4%A7%E8%85%BF%E4%B8%80%E7%A7%92%E5%8F%98%E7%BA%A2%23) `40.5K 🔥` `-56%`
1. [无畏 燃尽](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%20%E7%87%83%E5%B0%BD%23) `40.5K 🔥` `-57%`
1. [薛之谦演唱会](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `40.5K 🔥` `-57%`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `40.5K 🔥` `-59%`

Updated at 2026-07-11 03:23:54

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
