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

1. [第38届百花奖提名名单 (Nomination List for the 38th Hundred Flowers Awards)](https://s.weibo.com/weibo?q=%23%E7%AC%AC38%E5%B1%8A%E7%99%BE%E8%8A%B1%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `2.3M 🔥` `NEW`
1. [台风巴威最新路径来了](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E6%9C%80%E6%96%B0%E8%B7%AF%E5%BE%84%E6%9D%A5%E4%BA%86%23) `1.6M 🔥` `NEW`
1. [洪灾后务必注意这9件事](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E7%81%BE%E5%90%8E%E5%8A%A1%E5%BF%85%E6%B3%A8%E6%84%8F%E8%BF%999%E4%BB%B6%E4%BA%8B%23) `1.5M 🔥` `NEW`
1. [HLE对战BLG](https://s.weibo.com/weibo?q=%23HLE%E5%AF%B9%E6%88%98BLG%23) `1.5M 🔥` `NEW`
1. [FIFA认定阿根廷进球判罚正确](https://s.weibo.com/weibo?q=%23FIFA%E8%AE%A4%E5%AE%9A%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%BF%9B%E7%90%83%E5%88%A4%E7%BD%9A%E6%AD%A3%E7%A1%AE%23) `1.4M 🔥` `NEW`
1. [微信头像 第一印象](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F%20%E7%AC%AC%E4%B8%80%E5%8D%B0%E8%B1%A1%23) `877.9K 🔥` `NEW`
1. [峰哥全仓再次上车](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A5%E5%85%A8%E4%BB%93%E5%86%8D%E6%AC%A1%E4%B8%8A%E8%BD%A6%23) `600.1K 🔥` `NEW`
1. [救援航母已抵达广西贵港](https://s.weibo.com/weibo?q=%23%E6%95%91%E6%8F%B4%E8%88%AA%E6%AF%8D%E5%B7%B2%E6%8A%B5%E8%BE%BE%E5%B9%BF%E8%A5%BF%E8%B4%B5%E6%B8%AF%23) `467.5K 🔥` `NEW`
1. [百花奖](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%23) `414.8K 🔥` `NEW`
1. [广西洪水入境广东](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%E5%85%A5%E5%A2%83%E5%B9%BF%E4%B8%9C%23) `412.6K 🔥` `NEW`
1. [半藏森林近况 (Recent situation of Hanzo Forest)](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E8%97%8F%E6%A3%AE%E6%9E%97%E8%BF%91%E5%86%B5%23) `411.6K 🔥` `NEW`
1. [娄艺潇等嘉宾宣布自费成合伙人](https://s.weibo.com/weibo?q=%23%E5%A8%84%E8%89%BA%E6%BD%87%E7%AD%89%E5%98%89%E5%AE%BE%E5%AE%A3%E5%B8%83%E8%87%AA%E8%B4%B9%E6%88%90%E5%90%88%E4%BC%99%E4%BA%BA%23) `410.2K 🔥` `NEW`
1. [蚝油瓶是我用过最好用的瓶子](https://s.weibo.com/weibo?q=%23%E8%9A%9D%E6%B2%B9%E7%93%B6%E6%98%AF%E6%88%91%E7%94%A8%E8%BF%87%E6%9C%80%E5%A5%BD%E7%94%A8%E7%9A%84%E7%93%B6%E5%AD%90%23) `409.6K 🔥` `NEW`
1. [虞书欣腿上的花纹](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%85%BF%E4%B8%8A%E7%9A%84%E8%8A%B1%E7%BA%B9%23) `382.0K 🔥` `NEW`
1. [李昀锐孟子义怎么了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E6%80%8E%E4%B9%88%E4%BA%86%23) `372.2K 🔥` `NEW`
1. [小米澎程](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%23) `304.2K 🔥` `NEW`
1. [杨幂双角色提名百花奖](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%8F%8C%E8%A7%92%E8%89%B2%E6%8F%90%E5%90%8D%E7%99%BE%E8%8A%B1%E5%A5%96%23) `289.7K 🔥` `NEW`
1. [官方通报河南一镇农田整治项目问题](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%B2%B3%E5%8D%97%E4%B8%80%E9%95%87%E5%86%9C%E7%94%B0%E6%95%B4%E6%B2%BB%E9%A1%B9%E7%9B%AE%E9%97%AE%E9%A2%98%23) `284.0K 🔥` `NEW`
1. [曝火箭少女将重组](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%81%AB%E7%AE%AD%E5%B0%91%E5%A5%B3%E5%B0%86%E9%87%8D%E7%BB%84%23) `264.5K 🔥` `NEW`
1. [每天只睡6小时的身体变化](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%8F%AA%E7%9D%A16%E5%B0%8F%E6%97%B6%E7%9A%84%E8%BA%AB%E4%BD%93%E5%8F%98%E5%8C%96%23) `260.3K 🔥` `NEW`
1. [广西蛇企发声 (Guangxi Sheqi speaks out)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E8%9B%87%E4%BC%81%E5%8F%91%E5%A3%B0%23) `251.8K 🔥` `NEW`
1. [无限暖暖](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%99%90%E6%9A%96%E6%9A%96%23) `238.6K 🔥` `NEW`
1. [张小斐为功夫女足封闭训练半年](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E4%B8%BA%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E5%B0%81%E9%97%AD%E8%AE%AD%E7%BB%83%E5%8D%8A%E5%B9%B4%23) `225.6K 🔥` `NEW`
1. [医学博士涉迷奸案受害未婚妻拒绝作证](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E5%AD%A6%E5%8D%9A%E5%A3%AB%E6%B6%89%E8%BF%B7%E5%A5%B8%E6%A1%88%E5%8F%97%E5%AE%B3%E6%9C%AA%E5%A9%9A%E5%A6%BB%E6%8B%92%E7%BB%9D%E4%BD%9C%E8%AF%81%23) `198.6K 🔥` `NEW`
1. [野狗骨头追剧团](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E8%BF%BD%E5%89%A7%E5%9B%A2%23) `191.4K 🔥` `NEW`
1. [花少团最新合影](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%9B%A2%E6%9C%80%E6%96%B0%E5%90%88%E5%BD%B1%23) `191.2K 🔥` `NEW`
1. [男子放生大蛇反遭锁喉撕咬](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%94%BE%E7%94%9F%E5%A4%A7%E8%9B%87%E5%8F%8D%E9%81%AD%E9%94%81%E5%96%89%E6%92%95%E5%92%AC%23) `190.3K 🔥` `NEW`
1. [梁祯元说ENHYPEN是6个人](https://s.weibo.com/weibo?q=%23%E6%A2%81%E7%A5%AF%E5%85%83%E8%AF%B4ENHYPEN%E6%98%AF6%E4%B8%AA%E4%BA%BA%23) `190.0K 🔥` `NEW`
1. [一个严重降低好感的小细节](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%B8%A5%E9%87%8D%E9%99%8D%E4%BD%8E%E5%A5%BD%E6%84%9F%E7%9A%84%E5%B0%8F%E7%BB%86%E8%8A%82%23) `189.8K 🔥` `NEW`
1. [小米澎程可变空间设计曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E5%8F%AF%E5%8F%98%E7%A9%BA%E9%97%B4%E8%AE%BE%E8%AE%A1%E6%9B%9D%E5%85%89%23) `180.9K 🔥` `NEW`
1. [养蛇户说被洪水冲走的反而不容易死 (Snake farmers say those washed away by floods are less likely to die)](https://s.weibo.com/weibo?q=%23%E5%85%BB%E8%9B%87%E6%88%B7%E8%AF%B4%E8%A2%AB%E6%B4%AA%E6%B0%B4%E5%86%B2%E8%B5%B0%E7%9A%84%E5%8F%8D%E8%80%8C%E4%B8%8D%E5%AE%B9%E6%98%93%E6%AD%BB%23) `178.0K 🔥` `NEW`
1. [香港扫黄被捕女子最小16岁](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%89%AB%E9%BB%84%E8%A2%AB%E6%8D%95%E5%A5%B3%E5%AD%90%E6%9C%80%E5%B0%8F16%E5%B2%81%23) `160.4K 🔥` `NEW`
1. [考古关晓彤早期微博](https://s.weibo.com/weibo?q=%23%E8%80%83%E5%8F%A4%E5%85%B3%E6%99%93%E5%BD%A4%E6%97%A9%E6%9C%9F%E5%BE%AE%E5%8D%9A%23) `160.2K 🔥` `NEW`
1. [邓为下意识保护stf](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E4%B8%8B%E6%84%8F%E8%AF%86%E4%BF%9D%E6%8A%A4stf%23) `159.9K 🔥` `NEW`
1. [刘诗诗杨幂顶峰相见](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E6%9D%A8%E5%B9%82%E9%A1%B6%E5%B3%B0%E7%9B%B8%E8%A7%81%23) `159.4K 🔥` `NEW`
1. [AI预测法国夺冠概率居首](https://s.weibo.com/weibo?q=%23AI%E9%A2%84%E6%B5%8B%E6%B3%95%E5%9B%BD%E5%A4%BA%E5%86%A0%E6%A6%82%E7%8E%87%E5%B1%85%E9%A6%96%23) `158.7K 🔥` `NEW`
1. [野狗骨头](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `152.4K 🔥` `NEW`
1. [曝猴哥说车离婚真相](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8C%B4%E5%93%A5%E8%AF%B4%E8%BD%A6%E7%A6%BB%E5%A9%9A%E7%9C%9F%E7%9B%B8%23) `151.0K 🔥` `NEW`
1. [野狗骨头直播](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E7%9B%B4%E6%92%AD%23) `150.9K 🔥` `NEW`
1. [世界之外](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B9%8B%E5%A4%96%23) `150.9K 🔥` `NEW`
1. [张凌赫拉面范全球品牌代言人 (Zhang Linghe La Mian Fan Global Brand Spokesperson)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8B%89%E9%9D%A2%E8%8C%83%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `1.5M 🔥` `+223%`
1. [蔚来ES8大五座版上市](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5ES8%E5%A4%A7%E4%BA%94%E5%BA%A7%E7%89%88%E4%B8%8A%E5%B8%82%23) `780.3K 🔥` `+76%`
1. [花呗致歉](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%91%97%E8%87%B4%E6%AD%89%23) `639.8K 🔥`
1. [多名艺人发声讨债](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E8%89%BA%E4%BA%BA%E5%8F%91%E5%A3%B0%E8%AE%A8%E5%80%BA%23) `413.6K 🔥`
1. [陈翔 江铠同](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%BF%94%20%E6%B1%9F%E9%93%A0%E5%90%8C%23) `278.9K 🔥`
1. [陈翔 苍天饶过谁](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%BF%94%20%E8%8B%8D%E5%A4%A9%E9%A5%B6%E8%BF%87%E8%B0%81%23) `229.5K 🔥`
1. [洪灾已致广西39死9失联 (Floods have killed 39 in Guangxi and left 9 missing)](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E7%81%BE%E5%B7%B2%E8%87%B4%E5%B9%BF%E8%A5%BF39%E6%AD%BB9%E5%A4%B1%E8%81%94%23) `190.8K 🔥` `-95%`
1. [三岁女儿看见天上的送子船](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%B2%81%E5%A5%B3%E5%84%BF%E7%9C%8B%E8%A7%81%E5%A4%A9%E4%B8%8A%E7%9A%84%E9%80%81%E5%AD%90%E8%88%B9%23) `190.6K 🔥` `-49%`
1. [阿根廷球员疯狂庆祝挑衅萨拉赫](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E5%91%98%E7%96%AF%E7%8B%82%E5%BA%86%E7%A5%9D%E6%8C%91%E8%A1%85%E8%90%A8%E6%8B%89%E8%B5%AB%23) `158.5K 🔥` `-27%`
1. [台风巴威到哪了](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%88%B0%E5%93%AA%E4%BA%86%23) `150.9K 🔥` `-87%`
1. [花呗3天内还款不影响征信](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%91%973%E5%A4%A9%E5%86%85%E8%BF%98%E6%AC%BE%E4%B8%8D%E5%BD%B1%E5%93%8D%E5%BE%81%E4%BF%A1%23) `150.9K 🔥` `-53%`
1. [迷奸案主犯带男子性侵未婚妻 (The main suspect in the rape case brought a man to sexually assault his fiancée)](https://s.weibo.com/weibo?q=%23%E8%BF%B7%E5%A5%B8%E6%A1%88%E4%B8%BB%E7%8A%AF%E5%B8%A6%E7%94%B7%E5%AD%90%E6%80%A7%E4%BE%B5%E6%9C%AA%E5%A9%9A%E5%A6%BB%23) `150.9K 🔥` `-56%`

Updated at 2026-07-09 16:54:38

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
