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

1. [周杰伦被粉丝说演唱会划水一小时 (Jay Chou was said by fans to paddle for an hour during the concert)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%A2%AB%E7%B2%89%E4%B8%9D%E8%AF%B4%E6%BC%94%E5%94%B1%E4%BC%9A%E5%88%92%E6%B0%B4%E4%B8%80%E5%B0%8F%E6%97%B6%23) `537.1K 🔥` `NEW`
1. [王楚钦赛后缓了好一会儿](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%B5%9B%E5%90%8E%E7%BC%93%E4%BA%86%E5%A5%BD%E4%B8%80%E4%BC%9A%E5%84%BF%23) `203.4K 🔥` `NEW`
1. [王曼昱晋级4强](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%99%8B%E7%BA%A74%E5%BC%BA%23) `199.6K 🔥` `NEW`
1. [暴雨大暴雨又将来袭](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E5%A4%A7%E6%9A%B4%E9%9B%A8%E5%8F%88%E5%B0%86%E6%9D%A5%E8%A2%AD%23) `196.9K 🔥` `NEW`
1. [萧蔷509票](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7509%E7%A5%A8%23) `184.0K 🔥` `NEW`
1. [萧蔷 上古神登](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%20%E4%B8%8A%E5%8F%A4%E7%A5%9E%E7%99%BB%23) `182.1K 🔥` `NEW`
1. [海关截获18厘米长活体帝王蝎](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%85%B3%E6%88%AA%E8%8E%B718%E5%8E%98%E7%B1%B3%E9%95%BF%E6%B4%BB%E4%BD%93%E5%B8%9D%E7%8E%8B%E8%9D%8E%23) `179.7K 🔥` `NEW`
1. [陈凯琳 完全芭比来的](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%87%AF%E7%90%B3%20%E5%AE%8C%E5%85%A8%E8%8A%AD%E6%AF%94%E6%9D%A5%E7%9A%84%23) `179.6K 🔥` `NEW`
1. [孙女被公鸡追啄奶奶毫不犹豫宰杀](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%A5%B3%E8%A2%AB%E5%85%AC%E9%B8%A1%E8%BF%BD%E5%95%84%E5%A5%B6%E5%A5%B6%E6%AF%AB%E4%B8%8D%E7%8A%B9%E8%B1%AB%E5%AE%B0%E6%9D%80%23) `171.7K 🔥` `NEW`
1. [萧蔷 不一定要逐玉但要逐梦](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%20%E4%B8%8D%E4%B8%80%E5%AE%9A%E8%A6%81%E9%80%90%E7%8E%89%E4%BD%86%E8%A6%81%E9%80%90%E6%A2%A6%23) `170.5K 🔥` `NEW`
1. [文淇第一次做妇科检查的不适感受 (Wen Qi’s discomfort during her first gynecological examination)](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%B7%87%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%81%9A%E5%A6%87%E7%A7%91%E6%A3%80%E6%9F%A5%E7%9A%84%E4%B8%8D%E9%80%82%E6%84%9F%E5%8F%97%23) `165.9K 🔥` `NEW`
1. [陈泽被黑客入侵](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B3%BD%E8%A2%AB%E9%BB%91%E5%AE%A2%E5%85%A5%E4%BE%B5%23) `165.6K 🔥` `NEW`
1. [芒果去买够爱版权吧](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E5%8E%BB%E4%B9%B0%E5%A4%9F%E7%88%B1%E7%89%88%E6%9D%83%E5%90%A7%23) `164.5K 🔥` `NEW`
1. [曼城4比0利物浦](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8E4%E6%AF%940%E5%88%A9%E7%89%A9%E6%B5%A6%23) `159.0K 🔥` `NEW`
1. [浪姐莫名其妙好看起来了](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%8E%AB%E5%90%8D%E5%85%B6%E5%A6%99%E5%A5%BD%E7%9C%8B%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `157.8K 🔥` `NEW`
1. [谢楠唱哭瞿颖了](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%A5%A0%E5%94%B1%E5%93%AD%E7%9E%BF%E9%A2%96%E4%BA%86%23) `133.3K 🔥` `NEW`
1. [中国散户3月以来净买入1.25万亿](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%95%A3%E6%88%B73%E6%9C%88%E4%BB%A5%E6%9D%A5%E5%87%80%E4%B9%B0%E5%85%A51.25%E4%B8%87%E4%BA%BF%23) `130.0K 🔥` `NEW`
1. [好六下期是孔雪儿邓凯](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%85%AD%E4%B8%8B%E6%9C%9F%E6%98%AF%E5%AD%94%E9%9B%AA%E5%84%BF%E9%82%93%E5%87%AF%23) `120.9K 🔥` `NEW`
1. [KSG晋级春季赛败决](https://s.weibo.com/weibo?q=%23KSG%E6%99%8B%E7%BA%A7%E6%98%A5%E5%AD%A3%E8%B5%9B%E8%B4%A5%E5%86%B3%23) `115.1K 🔥` `NEW`
1. [澳门世界杯女单四强出炉](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E9%97%A8%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A5%B3%E5%8D%95%E5%9B%9B%E5%BC%BA%E5%87%BA%E7%82%89%23) `114.1K 🔥` `NEW`
1. [3岁女童被毒蛇咬伤假死3天奇迹生还 (3-year-old girl was bitten by a venomous snake and miraculously survived for 3 days after pretending to be dead)](https://s.weibo.com/weibo?q=%233%E5%B2%81%E5%A5%B3%E7%AB%A5%E8%A2%AB%E6%AF%92%E8%9B%87%E5%92%AC%E4%BC%A4%E5%81%87%E6%AD%BB3%E5%A4%A9%E5%A5%87%E8%BF%B9%E7%94%9F%E8%BF%98%23) `113.9K 🔥` `NEW`
1. [谢娜要开演唱会了吗](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E8%A6%81%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%86%E5%90%97%23) `113.8K 🔥` `NEW`
1. [陈凯琳老公是郑嘉颖](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%87%AF%E7%90%B3%E8%80%81%E5%85%AC%E6%98%AF%E9%83%91%E5%98%89%E9%A2%96%23) `110.1K 🔥` `NEW`
1. [我国过敏性鼻炎患者数量攀升](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E8%BF%87%E6%95%8F%E6%80%A7%E9%BC%BB%E7%82%8E%E6%82%A3%E8%80%85%E6%95%B0%E9%87%8F%E6%94%80%E5%8D%87%23) `97.9K 🔥` `NEW`
1. [沈星回问天路探九霄](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%98%9F%E5%9B%9E%E9%97%AE%E5%A4%A9%E8%B7%AF%E6%8E%A2%E4%B9%9D%E9%9C%84%23) `92.3K 🔥` `NEW`
1. [浪姐第二场和第一场不是一个节目](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%AC%AC%E4%BA%8C%E5%9C%BA%E5%92%8C%E7%AC%AC%E4%B8%80%E5%9C%BA%E4%B8%8D%E6%98%AF%E4%B8%80%E4%B8%AA%E8%8A%82%E7%9B%AE%23) `1.1M 🔥` `+1330%`
1. [莫氏鸡煲周边商户发声 (Merchants around Mo’s Chicken Pot speak out)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%91%A8%E8%BE%B9%E5%95%86%E6%88%B7%E5%8F%91%E5%A3%B0%23) `308.5K 🔥` `+118%`
1. [男子骑车途中电池爆燃妻子全身烧伤 (A man's battery exploded while he was riding, and his wife was burned all over her body)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%AA%91%E8%BD%A6%E9%80%94%E4%B8%AD%E7%94%B5%E6%B1%A0%E7%88%86%E7%87%83%E5%A6%BB%E5%AD%90%E5%85%A8%E8%BA%AB%E7%83%A7%E4%BC%A4%23) `179.1K 🔥` `+48%`
1. [王皓快哭了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E5%BF%AB%E5%93%AD%E4%BA%86%23) `168.1K 🔥` `+31%`
1. [伊朗称击中美军黑鹰直升机](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%87%BB%E4%B8%AD%E7%BE%8E%E5%86%9B%E9%BB%91%E9%B9%B0%E7%9B%B4%E5%8D%87%E6%9C%BA%23) `111.0K 🔥` `+43%`
1. [王曼昱vs桥本帆乃香](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1vs%E6%A1%A5%E6%9C%AC%E5%B8%86%E4%B9%83%E9%A6%99%23) `828.8K 🔥`
1. [致敬缅怀奋进 (Pay tribute and remember Endeavor)](https://s.weibo.com/weibo?q=%23%E8%87%B4%E6%95%AC%E7%BC%85%E6%80%80%E5%A5%8B%E8%BF%9B%23) `612.1K 🔥`
1. [徐梦洁没选安崎](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E6%B2%A1%E9%80%89%E5%AE%89%E5%B4%8E%23) `266.9K 🔥`
1. [酒店员工提醒小孩别玩门家长报警 (Hotel employee reminds children not to play with door, parents call police)](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%BA%97%E5%91%98%E5%B7%A5%E6%8F%90%E9%86%92%E5%B0%8F%E5%AD%A9%E5%88%AB%E7%8E%A9%E9%97%A8%E5%AE%B6%E9%95%BF%E6%8A%A5%E8%AD%A6%23) `197.8K 🔥`
1. [徐梦洁 不太好听](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%20%E4%B8%8D%E5%A4%AA%E5%A5%BD%E5%90%AC%23) `193.5K 🔥`
1. [张慧雯整个大E人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E6%95%B4%E4%B8%AA%E5%A4%A7E%E4%BA%BA%23) `189.4K 🔥`
1. [伊朗驻华大使馆发布战果 (The Iranian Embassy in China released the results of the battle)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A9%BB%E5%8D%8E%E5%A4%A7%E4%BD%BF%E9%A6%86%E5%8F%91%E5%B8%83%E6%88%98%E6%9E%9C%23) `188.7K 🔥`
1. [曝熊黛林做全职妈妈后被老公嫌弃](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%86%8A%E9%BB%9B%E6%9E%97%E5%81%9A%E5%85%A8%E8%81%8C%E5%A6%88%E5%A6%88%E5%90%8E%E8%A2%AB%E8%80%81%E5%85%AC%E5%AB%8C%E5%BC%83%23) `169.4K 🔥`
1. [张凌赫脱稿演讲六分半的含金量](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%84%B1%E7%A8%BF%E6%BC%94%E8%AE%B2%E5%85%AD%E5%88%86%E5%8D%8A%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `167.7K 🔥`
1. [瞿颖 我上个世纪还是顶流的时候](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%20%E6%88%91%E4%B8%8A%E4%B8%AA%E4%B8%96%E7%BA%AA%E8%BF%98%E6%98%AF%E9%A1%B6%E6%B5%81%E7%9A%84%E6%97%B6%E5%80%99%23) `164.0K 🔥`
1. [中俄法反对武力打通霍尔木兹海峡](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E6%B3%95%E5%8F%8D%E5%AF%B9%E6%AD%A6%E5%8A%9B%E6%89%93%E9%80%9A%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `162.9K 🔥`
1. [田曦薇嫁金钗杀青](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%AB%81%E9%87%91%E9%92%97%E6%9D%80%E9%9D%92%23) `161.3K 🔥`
1. [虞书欣晒签售会plog](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%99%92%E7%AD%BE%E5%94%AE%E4%BC%9Aplog%23) `129.9K 🔥`
1. [虞书欣签售妆是一枝南南画的 (Yu Shuxin’s makeup for autograph signing was painted by Yizhi Nannan)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%AD%BE%E5%94%AE%E5%A6%86%E6%98%AF%E4%B8%80%E6%9E%9D%E5%8D%97%E5%8D%97%E7%94%BB%E7%9A%84%23) `113.2K 🔥`
1. [我欲乘风](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `100.0K 🔥`
1. [无人继承的巨额遗产或在拖垮日本 (The huge inheritance that no one inherits may be dragging down Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A0%E4%BA%BA%E7%BB%A7%E6%89%BF%E7%9A%84%E5%B7%A8%E9%A2%9D%E9%81%97%E4%BA%A7%E6%88%96%E5%9C%A8%E6%8B%96%E5%9E%AE%E6%97%A5%E6%9C%AC%23) `93.4K 🔥`
1. [陈幸同0比11申裕斌 (Chen Xingtong 0-11 Shen Yubin)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B9%B8%E5%90%8C0%E6%AF%9411%E7%94%B3%E8%A3%95%E6%96%8C%23) `172.8K 🔥` `-26%`
1. [张月505票](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88505%E7%A5%A8%23) `160.1K 🔥` `-68%`
1. [淡淡不愧是舞台总监](https://s.weibo.com/weibo?q=%23%E6%B7%A1%E6%B7%A1%E4%B8%8D%E6%84%A7%E6%98%AF%E8%88%9E%E5%8F%B0%E6%80%BB%E7%9B%91%23) `97.7K 🔥` `-30%`
1. [王楚钦vs约奇克](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E7%BA%A6%E5%A5%87%E5%85%8B%23) `97.5K 🔥` `-27%`

Updated at 2026-04-04 22:18:29

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
