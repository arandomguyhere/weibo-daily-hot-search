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

1. [陈星旭 没提前让我背稿 (Chen Xingxu didn’t ask me to memorize the draft in advance)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%20%E6%B2%A1%E6%8F%90%E5%89%8D%E8%AE%A9%E6%88%91%E8%83%8C%E7%A8%BF%23) `601.0K 🔥` `NEW`
1. [浙江省坚决拥护党中央决定](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E7%9C%81%E5%9D%9A%E5%86%B3%E6%8B%A5%E6%8A%A4%E5%85%9A%E4%B8%AD%E5%A4%AE%E5%86%B3%E5%AE%9A%23) `385.9K 🔥` `NEW`
1. [春晚混剪大赛](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E6%B7%B7%E5%89%AA%E5%A4%A7%E8%B5%9B%23) `332.6K 🔥` `NEW`
1. [喜人脱口秀演员 后台变脸](https://s.weibo.com/weibo?q=%23%E5%96%9C%E4%BA%BA%E8%84%B1%E5%8F%A3%E7%A7%80%E6%BC%94%E5%91%98%20%E5%90%8E%E5%8F%B0%E5%8F%98%E8%84%B8%23) `296.3K 🔥` `NEW`
1. [千万粉丝网红晒妻子生产过程遭质疑](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E7%B2%89%E4%B8%9D%E7%BD%91%E7%BA%A2%E6%99%92%E5%A6%BB%E5%AD%90%E7%94%9F%E4%BA%A7%E8%BF%87%E7%A8%8B%E9%81%AD%E8%B4%A8%E7%96%91%23) `219.3K 🔥` `NEW`
1. [金像奖提名](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E6%8F%90%E5%90%8D%23) `217.2K 🔥` `NEW`
1. [金像奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%23) `209.7K 🔥` `NEW`
1. [请查收马年第一份走心祝福](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%9F%A5%E6%94%B6%E9%A9%AC%E5%B9%B4%E7%AC%AC%E4%B8%80%E4%BB%BD%E8%B5%B0%E5%BF%83%E7%A5%9D%E7%A6%8F%23) `205.1K 🔥` `NEW`
1. [南北过小年都爱轻松聚](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%8C%97%E8%BF%87%E5%B0%8F%E5%B9%B4%E9%83%BD%E7%88%B1%E8%BD%BB%E6%9D%BE%E8%81%9A%23) `201.9K 🔥` `NEW`
1. [铁路回应女乘务员裙装换裤装建议](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF%E5%9B%9E%E5%BA%94%E5%A5%B3%E4%B9%98%E5%8A%A1%E5%91%98%E8%A3%99%E8%A3%85%E6%8D%A2%E8%A3%A4%E8%A3%85%E5%BB%BA%E8%AE%AE%23) `148.3K 🔥` `NEW`
1. [黄子华 我到死都不用老年公交卡 (Huang Zihua I will never use the senior citizen bus pass until I die)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%8D%8E%20%E6%88%91%E5%88%B0%E6%AD%BB%E9%83%BD%E4%B8%8D%E7%94%A8%E8%80%81%E5%B9%B4%E5%85%AC%E4%BA%A4%E5%8D%A1%23) `138.3K 🔥` `NEW`
1. [隐性嫉妒](https://s.weibo.com/weibo?q=%23%E9%9A%90%E6%80%A7%E5%AB%89%E5%A6%92%23) `128.1K 🔥` `NEW`
1. [许玮甯邱泽儿子会站了](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E7%8E%AE%E7%94%AF%E9%82%B1%E6%B3%BD%E5%84%BF%E5%AD%90%E4%BC%9A%E7%AB%99%E4%BA%86%23) `121.4K 🔥` `NEW`
1. [白鹿 原来见到时代少年团要这样](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E5%8E%9F%E6%9D%A5%E8%A7%81%E5%88%B0%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%A6%81%E8%BF%99%E6%A0%B7%23) `98.2K 🔥` `NEW`
1. [A股全线大涨原因找到了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%85%A8%E7%BA%BF%E5%A4%A7%E6%B6%A8%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `94.6K 🔥` `NEW`
1. [章子怡提名金像奖影后](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E6%8F%90%E5%90%8D%E9%87%91%E5%83%8F%E5%A5%96%E5%BD%B1%E5%90%8E%23) `86.9K 🔥` `NEW`
1. [杨幂姚晨感觉下一秒就要上炕了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%A7%9A%E6%99%A8%E6%84%9F%E8%A7%89%E4%B8%8B%E4%B8%80%E7%A7%92%E5%B0%B1%E8%A6%81%E4%B8%8A%E7%82%95%E4%BA%86%23) `86.6K 🔥` `NEW`
1. [两外国人从海南打车到哈尔滨](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A4%96%E5%9B%BD%E4%BA%BA%E4%BB%8E%E6%B5%B7%E5%8D%97%E6%89%93%E8%BD%A6%E5%88%B0%E5%93%88%E5%B0%94%E6%BB%A8%23) `86.6K 🔥` `NEW`
1. [杭州春运路上福气值拉满](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%98%A5%E8%BF%90%E8%B7%AF%E4%B8%8A%E7%A6%8F%E6%B0%94%E5%80%BC%E6%8B%89%E6%BB%A1%23) `86.6K 🔥` `NEW`
1. [柳智敏实物比例](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E5%AE%9E%E7%89%A9%E6%AF%94%E4%BE%8B%23) `86.6K 🔥` `NEW`
1. [原来变色后车厘子就开始变质了 (It turns out that after the cherries change color, they begin to deteriorate.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%8F%98%E8%89%B2%E5%90%8E%E8%BD%A6%E5%8E%98%E5%AD%90%E5%B0%B1%E5%BC%80%E5%A7%8B%E5%8F%98%E8%B4%A8%E4%BA%86%23) `85.4K 🔥` `NEW`
1. [千年古树燃烧近10小时后还活着](https://s.weibo.com/weibo?q=%23%E5%8D%83%E5%B9%B4%E5%8F%A4%E6%A0%91%E7%87%83%E7%83%A7%E8%BF%9110%E5%B0%8F%E6%97%B6%E5%90%8E%E8%BF%98%E6%B4%BB%E7%9D%80%23) `85.1K 🔥` `NEW`
1. [李兰迪眼神满是对卢昱晓抽象的欣赏](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%E7%9C%BC%E7%A5%9E%E6%BB%A1%E6%98%AF%E5%AF%B9%E5%8D%A2%E6%98%B1%E6%99%93%E6%8A%BD%E8%B1%A1%E7%9A%84%E6%AC%A3%E8%B5%8F%23) `82.6K 🔥` `NEW`
1. [哪个瞬间突然觉得父母老了](https://s.weibo.com/weibo?q=%23%E5%93%AA%E4%B8%AA%E7%9E%AC%E9%97%B4%E7%AA%81%E7%84%B6%E8%A7%89%E5%BE%97%E7%88%B6%E6%AF%8D%E8%80%81%E4%BA%86%23) `80.9K 🔥` `NEW`
1. [旅行过年](https://s.weibo.com/weibo?q=%23%E6%97%85%E8%A1%8C%E8%BF%87%E5%B9%B4%23) `76.2K 🔥` `NEW`
1. [杨瀚森登场13秒就得分](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E7%99%BB%E5%9C%BA13%E7%A7%92%E5%B0%B1%E5%BE%97%E5%88%86%23) `76.0K 🔥` `NEW`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `487.7K 🔥` `+58%`
1. [安徽一大姨烫头6小时狗都等emo了](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E4%B8%80%E5%A4%A7%E5%A7%A8%E7%83%AB%E5%A4%B46%E5%B0%8F%E6%97%B6%E7%8B%97%E9%83%BD%E7%AD%89emo%E4%BA%86%23) `147.0K 🔥` `+34%`
1. [弯刀裤](https://s.weibo.com/weibo?q=%23%E5%BC%AF%E5%88%80%E8%A3%A4%23) `146.9K 🔥` `+33%`
1. [瑞幸 错别字 (Luckin typo)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%20%E9%94%99%E5%88%AB%E5%AD%97%23) `1.1M 🔥`
1. [元宝微信发红包](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E5%BE%AE%E4%BF%A1%E5%8F%91%E7%BA%A2%E5%8C%85%23) `851.5K 🔥`
1. [中国人自己的新年气氛组 (Chinese people’s own New Year atmosphere group)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E6%96%B0%E5%B9%B4%E6%B0%94%E6%B0%9B%E7%BB%84%23) `631.2K 🔥`
1. [骑手给妻子换手机被反复要求退货](https://s.weibo.com/weibo?q=%23%E9%AA%91%E6%89%8B%E7%BB%99%E5%A6%BB%E5%AD%90%E6%8D%A2%E6%89%8B%E6%9C%BA%E8%A2%AB%E5%8F%8D%E5%A4%8D%E8%A6%81%E6%B1%82%E9%80%80%E8%B4%A7%23) `327.3K 🔥`
1. [黑神话钟馗 (Black myth Zhong Kui)](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%A5%9E%E8%AF%9D%E9%92%9F%E9%A6%97%23) `318.1K 🔥`
1. [易炼红被查 (Yi Lianhong was investigated)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%82%BC%E7%BA%A2%E8%A2%AB%E6%9F%A5%23) `220.5K 🔥`
1. [车祸后妹妹以为冷却液是血嚎啕大哭 (After the car accident, my sister cried because she thought the coolant was blood.)](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E7%A5%B8%E5%90%8E%E5%A6%B9%E5%A6%B9%E4%BB%A5%E4%B8%BA%E5%86%B7%E5%8D%B4%E6%B6%B2%E6%98%AF%E8%A1%80%E5%9A%8E%E5%95%95%E5%A4%A7%E5%93%AD%23) `211.3K 🔥`
1. [易烊千玺 别剧透](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%20%E5%88%AB%E5%89%A7%E9%80%8F%23) `201.8K 🔥`
1. [谷爱凌回应特朗普大骂冬奥运动员](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E5%A4%A7%E9%AA%82%E5%86%AC%E5%A5%A5%E8%BF%90%E5%8A%A8%E5%91%98%23) `180.6K 🔥`
1. [虞书欣新歌WouldYouLikeThat](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%96%B0%E6%AD%8CWouldYouLikeThat%23) `143.0K 🔥`
1. [AI短剧](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%23) `126.0K 🔥`
1. [杨紫新剧1集头发全白了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%96%B0%E5%89%A71%E9%9B%86%E5%A4%B4%E5%8F%91%E5%85%A8%E7%99%BD%E4%BA%86%23) `119.7K 🔥`
1. [元宝回应微信福袋](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E5%9B%9E%E5%BA%94%E5%BE%AE%E4%BF%A1%E7%A6%8F%E8%A2%8B%23) `106.2K 🔥`
1. [BLACKPINK什么时候换人了](https://s.weibo.com/weibo?q=%23BLACKPINK%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E6%8D%A2%E4%BA%BA%E4%BA%86%23) `101.7K 🔥`
1. [金枝](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9E%9D%23) `89.8K 🔥`
1. [山东金矿事故致7死11人被控制 (Shandong gold mine accident kills 7 and 11 people detained)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E9%87%91%E7%9F%BF%E4%BA%8B%E6%95%85%E8%87%B47%E6%AD%BB11%E4%BA%BA%E8%A2%AB%E6%8E%A7%E5%88%B6%23) `88.3K 🔥`
1. [小年 (Xiaonian)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B9%B4%23) `80.5K 🔥`
1. [杨紫迎来剧生嫡长女](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%BF%8E%E6%9D%A5%E5%89%A7%E7%94%9F%E5%AB%A1%E9%95%BF%E5%A5%B3%23) `191.1K 🔥` `-40%`
1. [46岁女儿被89岁妈妈轻拍哄睡](https://s.weibo.com/weibo?q=%2346%E5%B2%81%E5%A5%B3%E5%84%BF%E8%A2%AB89%E5%B2%81%E5%A6%88%E5%A6%88%E8%BD%BB%E6%8B%8D%E5%93%84%E7%9D%A1%23) `144.9K 🔥` `-62%`
1. [成毅杀青不限量奶茶](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E6%9D%80%E9%9D%92%E4%B8%8D%E9%99%90%E9%87%8F%E5%A5%B6%E8%8C%B6%23) `94.5K 🔥` `-46%`
1. [女子孕期被疑出轨公公转650万安抚 (Woman suspected of cheating on her father-in-law during pregnancy sends 6.5 million yuan to comfort her)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AD%95%E6%9C%9F%E8%A2%AB%E7%96%91%E5%87%BA%E8%BD%A8%E5%85%AC%E5%85%AC%E8%BD%AC650%E4%B8%87%E5%AE%89%E6%8A%9A%23) `81.4K 🔥` `-53%`
1. [蔡徐坤colder花絮](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4colder%E8%8A%B1%E7%B5%AE%23) `77.3K 🔥` `-23%`

Updated at 2026-02-10 15:43:47

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
