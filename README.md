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

1. [2026新春走基层 (2026 New Year Goes to the Grassroots)](https://s.weibo.com/weibo?q=%232026%E6%96%B0%E6%98%A5%E8%B5%B0%E5%9F%BA%E5%B1%82%23) `648.0K 🔥` `NEW`
1. [薛之谦万兽之王演唱会官宣](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%B8%87%E5%85%BD%E4%B9%8B%E7%8E%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `581.3K 🔥` `NEW`
1. [中国高端新能源汽车的星光时刻](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%AB%98%E7%AB%AF%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%E7%9A%84%E6%98%9F%E5%85%89%E6%97%B6%E5%88%BB%23) `434.3K 🔥` `NEW`
1. [白鹿孟子义一起去了大孤山](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%80%E8%B5%B7%E5%8E%BB%E4%BA%86%E5%A4%A7%E5%AD%A4%E5%B1%B1%23) `228.4K 🔥` `NEW`
1. [小年用千问加道菜](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B9%B4%E7%94%A8%E5%8D%83%E9%97%AE%E5%8A%A0%E9%81%93%E8%8F%9C%23) `225.3K 🔥` `NEW`
1. [爱泼斯坦案出现一名9岁受害者](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E5%87%BA%E7%8E%B0%E4%B8%80%E5%90%8D9%E5%B2%81%E5%8F%97%E5%AE%B3%E8%80%85%23) `172.9K 🔥` `NEW`
1. [NBA交易](https://s.weibo.com/weibo?q=%23NBA%E4%BA%A4%E6%98%93%23) `125.0K 🔥` `NEW`
1. [两周内三名正部级落马](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%91%A8%E5%86%85%E4%B8%89%E5%90%8D%E6%AD%A3%E9%83%A8%E7%BA%A7%E8%90%BD%E9%A9%AC%23) `122.4K 🔥` `NEW`
1. [北方小年vs南方小年](https://s.weibo.com/weibo?q=%23%E5%8C%97%E6%96%B9%E5%B0%8F%E5%B9%B4vs%E5%8D%97%E6%96%B9%E5%B0%8F%E5%B9%B4%23) `92.0K 🔥` `NEW`
1. [网传张桂源饰演顾晨阳](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%BC%A0%E6%A1%82%E6%BA%90%E9%A5%B0%E6%BC%94%E9%A1%BE%E6%99%A8%E9%98%B3%23) `89.4K 🔥` `NEW`
1. [周大福客服回应3月要调价 (Chow Tai Fook customer service responded that prices will be adjusted in March)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%A4%A7%E7%A6%8F%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%943%E6%9C%88%E8%A6%81%E8%B0%83%E4%BB%B7%23) `89.1K 🔥` `NEW`
1. [男子酒后开辅助驾驶在副驾酣睡被拘](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%85%92%E5%90%8E%E5%BC%80%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%E5%9C%A8%E5%89%AF%E9%A9%BE%E9%85%A3%E7%9D%A1%E8%A2%AB%E6%8B%98%23) `89.0K 🔥` `NEW`
1. [我不在意你了 我在意大利](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8D%E5%9C%A8%E6%84%8F%E4%BD%A0%E4%BA%86%20%E6%88%91%E5%9C%A8%E6%84%8F%E5%A4%A7%E5%88%A9%23) `89.0K 🔥` `NEW`
1. [A股万向钱潮涨停](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%87%E5%90%91%E9%92%B1%E6%BD%AE%E6%B6%A8%E5%81%9C%23) `81.5K 🔥` `NEW`
1. [台独武装胆敢挑起战端必遭灭顶之灾](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E7%8B%AC%E6%AD%A6%E8%A3%85%E8%83%86%E6%95%A2%E6%8C%91%E8%B5%B7%E6%88%98%E7%AB%AF%E5%BF%85%E9%81%AD%E7%81%AD%E9%A1%B6%E4%B9%8B%E7%81%BE%23) `80.3K 🔥` `NEW`
1. [一诺登2025十大热搜电竞选手榜首](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E7%99%BB2025%E5%8D%81%E5%A4%A7%E7%83%AD%E6%90%9C%E7%94%B5%E7%AB%9E%E9%80%89%E6%89%8B%E6%A6%9C%E9%A6%96%23) `73.8K 🔥` `NEW`
1. [金像奖最佳女配角提名](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E9%85%8D%E8%A7%92%E6%8F%90%E5%90%8D%23) `73.5K 🔥` `NEW`
1. [铁路回应女乘务员裙装换裤装建议](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF%E5%9B%9E%E5%BA%94%E5%A5%B3%E4%B9%98%E5%8A%A1%E5%91%98%E8%A3%99%E8%A3%85%E6%8D%A2%E8%A3%A4%E8%A3%85%E5%BB%BA%E8%AE%AE%23) `403.8K 🔥` `+172%`
1. [黄子华 我到死都不用老年公交卡 (Huang Zihua I will never use the senior citizen bus pass until I die)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%8D%8E%20%E6%88%91%E5%88%B0%E6%AD%BB%E9%83%BD%E4%B8%8D%E7%94%A8%E8%80%81%E5%B9%B4%E5%85%AC%E4%BA%A4%E5%8D%A1%23) `218.9K 🔥` `+58%`
1. [隐性嫉妒](https://s.weibo.com/weibo?q=%23%E9%9A%90%E6%80%A7%E5%AB%89%E5%A6%92%23) `168.2K 🔥` `+31%`
1. [原来变色后车厘子就开始变质了 (It turns out that after the cherries change color, they begin to deteriorate.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%8F%98%E8%89%B2%E5%90%8E%E8%BD%A6%E5%8E%98%E5%AD%90%E5%B0%B1%E5%BC%80%E5%A7%8B%E5%8F%98%E8%B4%A8%E4%BA%86%23) `118.2K 🔥` `+38%`
1. [柳智敏实物比例](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E5%AE%9E%E7%89%A9%E6%AF%94%E4%BE%8B%23) `116.0K 🔥` `+34%`
1. [瑞幸 错别字 (Luckin typo)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%20%E9%94%99%E5%88%AB%E5%AD%97%23) `1.1M 🔥`
1. [元宝微信发红包 (Yuanbao sends red envelopes via WeChat)](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E5%BE%AE%E4%BF%A1%E5%8F%91%E7%BA%A2%E5%8C%85%23) `839.6K 🔥`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `485.1K 🔥`
1. [浙江省坚决拥护党中央决定](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E7%9C%81%E5%9D%9A%E5%86%B3%E6%8B%A5%E6%8A%A4%E5%85%9A%E4%B8%AD%E5%A4%AE%E5%86%B3%E5%AE%9A%23) `434.6K 🔥`
1. [易炼红被查 (Yi Lianhong was investigated)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%82%BC%E7%BA%A2%E8%A2%AB%E6%9F%A5%23) `231.6K 🔥`
1. [千万粉丝网红晒妻子生产过程遭质疑](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E7%B2%89%E4%B8%9D%E7%BD%91%E7%BA%A2%E6%99%92%E5%A6%BB%E5%AD%90%E7%94%9F%E4%BA%A7%E8%BF%87%E7%A8%8B%E9%81%AD%E8%B4%A8%E7%96%91%23) `231.5K 🔥`
1. [金像奖提名](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E6%8F%90%E5%90%8D%23) `231.3K 🔥`
1. [车祸后妹妹以为冷却液是血嚎啕大哭 (After the car accident, my sister cried because she thought the coolant was blood.)](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E7%A5%B8%E5%90%8E%E5%A6%B9%E5%A6%B9%E4%BB%A5%E4%B8%BA%E5%86%B7%E5%8D%B4%E6%B6%B2%E6%98%AF%E8%A1%80%E5%9A%8E%E5%95%95%E5%A4%A7%E5%93%AD%23) `230.7K 🔥`
1. [请查收马年第一份走心祝福](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%9F%A5%E6%94%B6%E9%A9%AC%E5%B9%B4%E7%AC%AC%E4%B8%80%E4%BB%BD%E8%B5%B0%E5%BF%83%E7%A5%9D%E7%A6%8F%23) `222.1K 🔥`
1. [金像奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%23) `221.0K 🔥`
1. [安徽一大姨烫头6小时狗都等emo了](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E4%B8%80%E5%A4%A7%E5%A7%A8%E7%83%AB%E5%A4%B46%E5%B0%8F%E6%97%B6%E7%8B%97%E9%83%BD%E7%AD%89emo%E4%BA%86%23) `131.9K 🔥`
1. [弯刀裤](https://s.weibo.com/weibo?q=%23%E5%BC%AF%E5%88%80%E8%A3%A4%23) `125.7K 🔥`
1. [A股全线大涨原因找到了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%85%A8%E7%BA%BF%E5%A4%A7%E6%B6%A8%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `113.5K 🔥`
1. [许玮甯邱泽儿子会站了 (Tiffany Hsu and Qiu Ze's son will stand up)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E7%8E%AE%E7%94%AF%E9%82%B1%E6%B3%BD%E5%84%BF%E5%AD%90%E4%BC%9A%E7%AB%99%E4%BA%86%23) `98.6K 🔥`
1. [白鹿 原来见到时代少年团要这样](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E5%8E%9F%E6%9D%A5%E8%A7%81%E5%88%B0%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%A6%81%E8%BF%99%E6%A0%B7%23) `95.0K 🔥`
1. [BLACKPINK什么时候换人了](https://s.weibo.com/weibo?q=%23BLACKPINK%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E6%8D%A2%E4%BA%BA%E4%BA%86%23) `91.3K 🔥`
1. [蔡徐坤colder花絮](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4colder%E8%8A%B1%E7%B5%AE%23) `91.1K 🔥`
1. [金枝](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9E%9D%23) `77.8K 🔥`
1. [杨瀚森登场13秒就得分](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E7%99%BB%E5%9C%BA13%E7%A7%92%E5%B0%B1%E5%BE%97%E5%88%86%23) `72.6K 🔥`
1. [陈星旭 没提前让我背稿 (Chen Xingxu didn’t ask me to memorize the draft in advance)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%20%E6%B2%A1%E6%8F%90%E5%89%8D%E8%AE%A9%E6%88%91%E8%83%8C%E7%A8%BF%23) `434.1K 🔥` `-28%`
1. [黑神话钟馗 (Black myth Zhong Kui)](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%A5%9E%E8%AF%9D%E9%92%9F%E9%A6%97%23) `244.3K 🔥` `-23%`
1. [骑手给妻子换手机被反复要求退货](https://s.weibo.com/weibo?q=%23%E9%AA%91%E6%89%8B%E7%BB%99%E5%A6%BB%E5%AD%90%E6%8D%A2%E6%89%8B%E6%9C%BA%E8%A2%AB%E5%8F%8D%E5%A4%8D%E8%A6%81%E6%B1%82%E9%80%80%E8%B4%A7%23) `181.1K 🔥` `-45%`
1. [喜人脱口秀演员 后台变脸](https://s.weibo.com/weibo?q=%23%E5%96%9C%E4%BA%BA%E8%84%B1%E5%8F%A3%E7%A7%80%E6%BC%94%E5%91%98%20%E5%90%8E%E5%8F%B0%E5%8F%98%E8%84%B8%23) `149.6K 🔥` `-50%`
1. [杨紫迎来剧生嫡长女](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%BF%8E%E6%9D%A5%E5%89%A7%E7%94%9F%E5%AB%A1%E9%95%BF%E5%A5%B3%23) `148.8K 🔥` `-22%`
1. [谷爱凌回应特朗普大骂冬奥运动员](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E5%A4%A7%E9%AA%82%E5%86%AC%E5%A5%A5%E8%BF%90%E5%8A%A8%E5%91%98%23) `134.6K 🔥` `-25%`
1. [易烊千玺 别剧透 (Yi Yang Qianxi No spoilers)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%20%E5%88%AB%E5%89%A7%E9%80%8F%23) `134.3K 🔥` `-33%`
1. [虞书欣新歌WouldYouLikeThat](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%96%B0%E6%AD%8CWouldYouLikeThat%23) `85.0K 🔥` `-41%`
1. [杨紫新剧1集头发全白了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%96%B0%E5%89%A71%E9%9B%86%E5%A4%B4%E5%8F%91%E5%85%A8%E7%99%BD%E4%BA%86%23) `78.1K 🔥` `-35%`
1. [成毅杀青不限量奶茶](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E6%9D%80%E9%9D%92%E4%B8%8D%E9%99%90%E9%87%8F%E5%A5%B6%E8%8C%B6%23) `73.2K 🔥` `-23%`

Updated at 2026-02-10 16:32:09

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
