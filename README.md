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

1. [我发现心愿便利贴静音特别好听 (I found that the mute sound of Wish Post-it Notes is particularly nice.)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%8F%91%E7%8E%B0%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%E9%9D%99%E9%9F%B3%E7%89%B9%E5%88%AB%E5%A5%BD%E5%90%AC%23) `42.6K 🔥` `NEW`
1. [明日方舟终末地](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E7%BB%88%E6%9C%AB%E5%9C%B0%23) `32.6K 🔥` `NEW`
1. [伊媒称伊斯兰堡谈判有可能延长一天](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%AA%92%E7%A7%B0%E4%BC%8A%E6%96%AF%E5%85%B0%E5%A0%A1%E8%B0%88%E5%88%A4%E6%9C%89%E5%8F%AF%E8%83%BD%E5%BB%B6%E9%95%BF%E4%B8%80%E5%A4%A9%23) `32.6K 🔥` `NEW`
1. [天大图书馆留言板火了](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%A4%A7%E5%9B%BE%E4%B9%A6%E9%A6%86%E7%95%99%E8%A8%80%E6%9D%BF%E7%81%AB%E4%BA%86%23) `32.5K 🔥` `NEW`
1. [美伊谈判开始](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E8%B0%88%E5%88%A4%E5%BC%80%E5%A7%8B%23) `32.5K 🔥` `NEW`
1. [海底捞已通知一千多家门店内部排查 (Haidilao has notified more than a thousand stores for internal inspections)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E5%B7%B2%E9%80%9A%E7%9F%A5%E4%B8%80%E5%8D%83%E5%A4%9A%E5%AE%B6%E9%97%A8%E5%BA%97%E5%86%85%E9%83%A8%E6%8E%92%E6%9F%A5%23) `158.4K 🔥` `-50%`
1. [浪姐排名](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `108.6K 🔥` `-52%`
1. [我国经济一季度交出亮眼答卷](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%BB%8F%E6%B5%8E%E4%B8%80%E5%AD%A3%E5%BA%A6%E4%BA%A4%E5%87%BA%E4%BA%AE%E7%9C%BC%E7%AD%94%E5%8D%B7%23) `102.3K 🔥` `-45%`
1. [维妮娜淘汰](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%A6%AE%E5%A8%9C%E6%B7%98%E6%B1%B0%23) `102.0K 🔥` `-45%`
1. [直播晕倒被辞退女主播发声](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E6%99%95%E5%80%92%E8%A2%AB%E8%BE%9E%E9%80%80%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%8F%91%E5%A3%B0%23) `101.2K 🔥` `-45%`
1. [齐思钧主持能力 (Qi Sijun’s hosting ability)](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%80%9D%E9%92%A7%E4%B8%BB%E6%8C%81%E8%83%BD%E5%8A%9B%23) `100.4K 🔥` `-42%`
1. [KSG零封狼队](https://s.weibo.com/weibo?q=%23KSG%E9%9B%B6%E5%B0%81%E7%8B%BC%E9%98%9F%23) `81.8K 🔥` `-32%`
1. [女子1天爬2次华山收到景区问候 (Woman climbs Mount Huashan twice in one day and receives greetings from scenic spot)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%901%E5%A4%A9%E7%88%AC2%E6%AC%A1%E5%8D%8E%E5%B1%B1%E6%94%B6%E5%88%B0%E6%99%AF%E5%8C%BA%E9%97%AE%E5%80%99%23) `60.4K 🔥` `-46%`
1. [美媒称数艘美军舰通过霍尔木兹](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E6%95%B0%E8%89%98%E7%BE%8E%E5%86%9B%E8%88%B0%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `46.0K 🔥` `-31%`
1. [清清](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%B8%85%23) `42.9K 🔥` `-27%`
1. [赵子琪 浪姐 (Zhao Ziqi Sister Lang)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%20%E6%B5%AA%E5%A7%90%23) `42.8K 🔥` `-33%`
1. [李小冉团赢了庄法团 (Li Xiaoran's group defeated Zhuang's group)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%9B%A2%E8%B5%A2%E4%BA%86%E5%BA%84%E6%B3%95%E5%9B%A2%23) `42.8K 🔥` `-30%`
1. [维妮娜 我不知道评分标准是什么](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%A6%AE%E5%A8%9C%20%E6%88%91%E4%B8%8D%E7%9F%A5%E9%81%93%E8%AF%84%E5%88%86%E6%A0%87%E5%87%86%E6%98%AF%E4%BB%80%E4%B9%88%23) `42.8K 🔥` `-31%`
1. [庄法萧蔷 不该pk](https://s.weibo.com/weibo?q=%23%E5%BA%84%E6%B3%95%E8%90%A7%E8%94%B7%20%E4%B8%8D%E8%AF%A5pk%23) `42.3K 🔥` `-33%`
1. [谢娜直播官宣演唱会](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E7%9B%B4%E6%92%AD%E5%AE%98%E5%AE%A3%E6%BC%94%E5%94%B1%E4%BC%9A%23) `42.2K 🔥` `-30%`
1. [浪姐版傲慢与偏见](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%89%88%E5%82%B2%E6%85%A2%E4%B8%8E%E5%81%8F%E8%A7%81%23) `42.2K 🔥` `-22%`
1. [KSG冠军](https://s.weibo.com/weibo?q=%23KSG%E5%86%A0%E5%86%9B%23) `41.9K 🔥` `-24%`
1. [印媒称印度眼睁睁看自己被边缘化](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%AA%92%E7%A7%B0%E5%8D%B0%E5%BA%A6%E7%9C%BC%E7%9D%81%E7%9D%81%E7%9C%8B%E8%87%AA%E5%B7%B1%E8%A2%AB%E8%BE%B9%E7%BC%98%E5%8C%96%23) `37.6K 🔥` `-32%`
1. [鸡煲老板透露汤底可补肾后又反悔 (Chicken pot owner revealed that the soup base can nourish the kidneys, then regretted it)](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E9%80%8F%E9%9C%B2%E6%B1%A4%E5%BA%95%E5%8F%AF%E8%A1%A5%E8%82%BE%E5%90%8E%E5%8F%88%E5%8F%8D%E6%82%94%23) `37.6K 🔥` `-32%`
1. [江语晨胜诉浪姐后台哭成一片](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E8%83%9C%E8%AF%89%E6%B5%AA%E5%A7%90%E5%90%8E%E5%8F%B0%E5%93%AD%E6%88%90%E4%B8%80%E7%89%87%23) `37.4K 🔥` `-32%`
1. [心愿便利贴 不好听但溺爱了 (Wish post-it notes don’t sound good but I love you)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%20%E4%B8%8D%E5%A5%BD%E5%90%AC%E4%BD%86%E6%BA%BA%E7%88%B1%E4%BA%86%23) `37.3K 🔥` `-32%`
1. [李荣浩太原演唱会 (Li Ronghao Taiyuan Concert)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E5%A4%AA%E5%8E%9F%E6%BC%94%E5%94%B1%E4%BC%9A%23) `37.2K 🔥` `-32%`
1. [浪姐太虐了 (Sister Lang is so cruel)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%A4%AA%E8%99%90%E4%BA%86%23) `37.1K 🔥` `-43%`
1. [赵子琪置顶是藏海传 (Zhao Ziqi's top story is "The Legend of Tibetan Sea")](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E7%BD%AE%E9%A1%B6%E6%98%AF%E8%97%8F%E6%B5%B7%E4%BC%A0%23) `36.6K 🔥` `-38%`
1. [伊朗警告美驱逐舰](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AD%A6%E5%91%8A%E7%BE%8E%E9%A9%B1%E9%80%90%E8%88%B0%23) `35.9K 🔥` `-32%`
1. [SK教练](https://s.weibo.com/weibo?q=%23SK%E6%95%99%E7%BB%83%23) `35.8K 🔥` `-30%`
1. [一笙三冠辅助](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%99%E4%B8%89%E5%86%A0%E8%BE%85%E5%8A%A9%23) `35.3K 🔥` `-29%`
1. [俩弟弟长得像妈妈哥哥却长得像爸爸](https://s.weibo.com/weibo?q=%23%E4%BF%A9%E5%BC%9F%E5%BC%9F%E9%95%BF%E5%BE%97%E5%83%8F%E5%A6%88%E5%A6%88%E5%93%A5%E5%93%A5%E5%8D%B4%E9%95%BF%E5%BE%97%E5%83%8F%E7%88%B8%E7%88%B8%23) `35.1K 🔥` `-29%`
1. [苏超常州3比0南通](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%B8%B8%E5%B7%9E3%E6%AF%940%E5%8D%97%E9%80%9A%23) `34.7K 🔥` `-34%`
1. [我英语水平 乌兰图雅](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%8B%B1%E8%AF%AD%E6%B0%B4%E5%B9%B3%20%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%23) `34.6K 🔥` `-37%`
1. [李小冉口误喊赵兆老公](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%8F%A3%E8%AF%AF%E5%96%8A%E8%B5%B5%E5%85%86%E8%80%81%E5%85%AC%23) `32.7K 🔥` `-34%`
1. [张予曦毕雯珺合伙人零互动](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E6%AF%95%E9%9B%AF%E7%8F%BA%E5%90%88%E4%BC%99%E4%BA%BA%E9%9B%B6%E4%BA%92%E5%8A%A8%23) `32.7K 🔥` `-34%`
1. [周深发了153个啊描述苏超氛围](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%8F%91%E4%BA%86153%E4%B8%AA%E5%95%8A%E6%8F%8F%E8%BF%B0%E8%8B%8F%E8%B6%85%E6%B0%9B%E5%9B%B4%23) `32.7K 🔥` `-34%`
1. [我听心愿便利贴belike曾沛慈 (I listen to my wishes Post-it note belike Zeng Peici)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%90%AC%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4belike%E6%9B%BE%E6%B2%9B%E6%85%88%23) `32.6K 🔥` `-34%`
1. [时代少年团广州演唱会批文](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B9%BF%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E6%89%B9%E6%96%87%23) `32.6K 🔥` `-34%`
1. [35岁是癌症风险关键分水岭](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E6%98%AF%E7%99%8C%E7%97%87%E9%A3%8E%E9%99%A9%E5%85%B3%E9%94%AE%E5%88%86%E6%B0%B4%E5%B2%AD%23) `32.6K 🔥` `-79%`
1. [狼队对战KSG (Wolves vs. KSG)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98KSG%23) `32.6K 🔥` `-34%`
1. [苏超50台机器人雨中齐舞](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%8550%E5%8F%B0%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%9B%A8%E4%B8%AD%E9%BD%90%E8%88%9E%23) `32.6K 🔥` `-34%`
1. [金饰开始拼促销最高克减360](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%BC%80%E5%A7%8B%E6%8B%BC%E4%BF%83%E9%94%80%E6%9C%80%E9%AB%98%E5%85%8B%E5%87%8F360%23) `32.6K 🔥` `-34%`
1. [赖伟明 好六](https://s.weibo.com/weibo?q=%23%E8%B5%96%E4%BC%9F%E6%98%8E%20%E5%A5%BD%E5%85%AD%23) `32.6K 🔥` `-34%`
1. [杨千嬅演唱会](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%83%E5%AC%85%E6%BC%94%E5%94%B1%E4%BC%9A%23) `32.5K 🔥` `-34%`
1. [张杰演唱会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%23) `32.5K 🔥` `-34%`
1. [雨爱 这才是全开麦](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E7%88%B1%20%E8%BF%99%E6%89%8D%E6%98%AF%E5%85%A8%E5%BC%80%E9%BA%A6%23) `32.5K 🔥` `-35%`
1. [美伊巴举行面对面会谈](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%B7%B4%E4%B8%BE%E8%A1%8C%E9%9D%A2%E5%AF%B9%E9%9D%A2%E4%BC%9A%E8%B0%88%23) `32.5K 🔥` `-34%`
1. [狼队超话大文豪 (Wolves super talkative writer)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E8%B6%85%E8%AF%9D%E5%A4%A7%E6%96%87%E8%B1%AA%23) `32.5K 🔥` `-39%`

Updated at 2026-04-12 02:41:38

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
