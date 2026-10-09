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

1. [年薪几百万后越看妻子越不顺眼](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%96%AA%E5%87%A0%E7%99%BE%E4%B8%87%E5%90%8E%E8%B6%8A%E7%9C%8B%E5%A6%BB%E5%AD%90%E8%B6%8A%E4%B8%8D%E9%A1%BA%E7%9C%BC%23) `1.9M 🔥` `NEW`
1. [请回答1988](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E5%9B%9E%E7%AD%941988%23) `1.6M 🔥` `NEW`
1. [我的大学图书馆](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%A4%A7%E5%AD%A6%E5%9B%BE%E4%B9%A6%E9%A6%86%23) `745.2K 🔥` `NEW`
1. [松岛辉空闹脾气](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E9%97%B9%E8%84%BE%E6%B0%94%23) `521.4K 🔥` `NEW`
1. [松岛辉空被张本美和反手拧震惊了](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E8%A2%AB%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E5%8F%8D%E6%89%8B%E6%8B%A7%E9%9C%87%E6%83%8A%E4%BA%86%23) `514.7K 🔥` `NEW`
1. [詹姆斯半场10分5助攻](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%8D%8A%E5%9C%BA10%E5%88%865%E5%8A%A9%E6%94%BB%23) `512.2K 🔥` `NEW`
1. [刘学义回复贺鹏](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%9B%9E%E5%A4%8D%E8%B4%BA%E9%B9%8F%23) `506.7K 🔥` `NEW`
1. [俄解除不明原因肺炎防疫措施](https://s.weibo.com/weibo?q=%23%E4%BF%84%E8%A7%A3%E9%99%A4%E4%B8%8D%E6%98%8E%E5%8E%9F%E5%9B%A0%E8%82%BA%E7%82%8E%E9%98%B2%E7%96%AB%E6%8E%AA%E6%96%BD%23) `501.3K 🔥` `NEW`
1. [林依晨全家的早餐是婆婆做的](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E5%85%A8%E5%AE%B6%E7%9A%84%E6%97%A9%E9%A4%90%E6%98%AF%E5%A9%86%E5%A9%86%E5%81%9A%E7%9A%84%23) `498.7K 🔥` `NEW`
1. [张碧晨被迪丽热巴美迷糊了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E8%A2%AB%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BE%8E%E8%BF%B7%E7%B3%8A%E4%BA%86%23) `495.2K 🔥` `NEW`
1. [中国球员庞清方被美国拘留](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%90%83%E5%91%98%E5%BA%9E%E6%B8%85%E6%96%B9%E8%A2%AB%E7%BE%8E%E5%9B%BD%E6%8B%98%E7%95%99%23) `492.8K 🔥` `NEW`
1. [永州女局长 调查结果待公布](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E5%B7%9E%E5%A5%B3%E5%B1%80%E9%95%BF%20%E8%B0%83%E6%9F%A5%E7%BB%93%E6%9E%9C%E5%BE%85%E5%85%AC%E5%B8%83%23) `485.1K 🔥` `NEW`
1. [俄罗斯鼠疫](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E9%BC%A0%E7%96%AB%23) `426.0K 🔥` `NEW`
1. [林依晨婆婆和纯美婆婆一模一样](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E5%A9%86%E5%A9%86%E5%92%8C%E7%BA%AF%E7%BE%8E%E5%A9%86%E5%A9%86%E4%B8%80%E6%A8%A1%E4%B8%80%E6%A0%B7%23) `380.1K 🔥` `NEW`
1. [俄罗斯疑似鼠疫 盲目囤药](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E7%96%91%E4%BC%BC%E9%BC%A0%E7%96%AB%20%E7%9B%B2%E7%9B%AE%E5%9B%A4%E8%8D%AF%23) `364.8K 🔥` `NEW`
1. [李勒优嫂子是对她最真心的人](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E5%AB%82%E5%AD%90%E6%98%AF%E5%AF%B9%E5%A5%B9%E6%9C%80%E7%9C%9F%E5%BF%83%E7%9A%84%E4%BA%BA%23) `358.3K 🔥` `NEW`
1. [鼠疫研究员之死惊动全世界](https://s.weibo.com/weibo?q=%23%E9%BC%A0%E7%96%AB%E7%A0%94%E7%A9%B6%E5%91%98%E4%B9%8B%E6%AD%BB%E6%83%8A%E5%8A%A8%E5%85%A8%E4%B8%96%E7%95%8C%23) `350.8K 🔥` `NEW`
1. [金莎疑似怀孕了](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E7%96%91%E4%BC%BC%E6%80%80%E5%AD%95%E4%BA%86%23) `338.2K 🔥` `NEW`
1. [黄小蕾原ID也换不回来](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%B0%8F%E8%95%BE%E5%8E%9FID%E4%B9%9F%E6%8D%A2%E4%B8%8D%E5%9B%9E%E6%9D%A5%23) `300.9K 🔥` `NEW`
1. [年纪大了体面的背后就是心酸](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E7%BA%AA%E5%A4%A7%E4%BA%86%E4%BD%93%E9%9D%A2%E7%9A%84%E8%83%8C%E5%90%8E%E5%B0%B1%E6%98%AF%E5%BF%83%E9%85%B8%23) `294.8K 🔥` `NEW`
1. [周杰每天只吃一顿饭](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E6%AF%8F%E5%A4%A9%E5%8F%AA%E5%90%83%E4%B8%80%E9%A1%BF%E9%A5%AD%23) `217.2K 🔥` `NEW`
1. [金价跌回8字头仍可能继续下跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E5%9B%9E8%E5%AD%97%E5%A4%B4%E4%BB%8D%E5%8F%AF%E8%83%BD%E7%BB%A7%E7%BB%AD%E4%B8%8B%E8%B7%8C%23) `216.3K 🔥` `NEW`
1. [婚礼当天离世新郎曾喉咙痛身体乏力](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E7%A4%BC%E5%BD%93%E5%A4%A9%E7%A6%BB%E4%B8%96%E6%96%B0%E9%83%8E%E6%9B%BE%E5%96%89%E5%92%99%E7%97%9B%E8%BA%AB%E4%BD%93%E4%B9%8F%E5%8A%9B%23) `199.9K 🔥` `NEW`
1. [网友赚三千万要不要搬大城市](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E8%B5%9A%E4%B8%89%E5%8D%83%E4%B8%87%E8%A6%81%E4%B8%8D%E8%A6%81%E6%90%AC%E5%A4%A7%E5%9F%8E%E5%B8%82%23) `199.3K 🔥` `NEW`
1. [王者2026周年庆](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%852026%E5%91%A8%E5%B9%B4%E5%BA%86%23) `196.4K 🔥` `NEW`
1. [周星驰退出内地影院生意](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E9%80%80%E5%87%BA%E5%86%85%E5%9C%B0%E5%BD%B1%E9%99%A2%E7%94%9F%E6%84%8F%23) `195.3K 🔥` `NEW`
1. [坐过山车看到男友查我手机](https://s.weibo.com/weibo?q=%23%E5%9D%90%E8%BF%87%E5%B1%B1%E8%BD%A6%E7%9C%8B%E5%88%B0%E7%94%B7%E5%8F%8B%E6%9F%A5%E6%88%91%E6%89%8B%E6%9C%BA%23) `190.8K 🔥` `NEW`
1. [岚图董事长卢放晒自家刹车踏板](https://s.weibo.com/weibo?q=%23%E5%B2%9A%E5%9B%BE%E8%91%A3%E4%BA%8B%E9%95%BF%E5%8D%A2%E6%94%BE%E6%99%92%E8%87%AA%E5%AE%B6%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%23) `184.9K 🔥` `NEW`
1. [俄罗斯第2人死亡病例尚未获证实](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E7%AC%AC2%E4%BA%BA%E6%AD%BB%E4%BA%A1%E7%97%85%E4%BE%8B%E5%B0%9A%E6%9C%AA%E8%8E%B7%E8%AF%81%E5%AE%9E%23) `181.4K 🔥` `NEW`
1. [李一桐重生了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E9%87%8D%E7%94%9F%E4%BA%86%23) `179.1K 🔥` `NEW`
1. [金与正宣称将永久关闭韩朝边境](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%B8%8E%E6%AD%A3%E5%AE%A3%E7%A7%B0%E5%B0%86%E6%B0%B8%E4%B9%85%E5%85%B3%E9%97%AD%E9%9F%A9%E6%9C%9D%E8%BE%B9%E5%A2%83%23) `178.3K 🔥` `NEW`
1. [小米17Ultra全系涨价](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B317Ultra%E5%85%A8%E7%B3%BB%E6%B6%A8%E4%BB%B7%23) `177.8K 🔥` `NEW`
1. [兰香如故招商时男女主发言](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E6%8B%9B%E5%95%86%E6%97%B6%E7%94%B7%E5%A5%B3%E4%B8%BB%E5%8F%91%E8%A8%80%23) `163.8K 🔥` `NEW`
1. [创业板指70个交易日跌超31%](https://s.weibo.com/weibo?q=%23%E5%88%9B%E4%B8%9A%E6%9D%BF%E6%8C%8770%E4%B8%AA%E4%BA%A4%E6%98%93%E6%97%A5%E8%B7%8C%E8%B6%8531%25%23) `150.8K 🔥` `NEW`
1. [英雄联盟S16主题曲](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9FS16%E4%B8%BB%E9%A2%98%E6%9B%B2%23) `150.8K 🔥` `NEW`
1. [张本美和 松岛辉空](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%20%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `149.1K 🔥` `NEW`
1. [美国防部称将向公众直播整个枪决过程](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%98%B2%E9%83%A8%E7%A7%B0%E5%B0%86%E5%90%91%E5%85%AC%E4%BC%97%E7%9B%B4%E6%92%AD%E6%95%B4%E4%B8%AA%E6%9E%AA%E5%86%B3%E8%BF%87%E7%A8%8B%23) `143.9K 🔥` `NEW`
1. [永州女局长](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E5%B7%9E%E5%A5%B3%E5%B1%80%E9%95%BF%23) `142.5K 🔥` `NEW`
1. [我小时候怎么没想到玩这个](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B0%8F%E6%97%B6%E5%80%99%E6%80%8E%E4%B9%88%E6%B2%A1%E6%83%B3%E5%88%B0%E7%8E%A9%E8%BF%99%E4%B8%AA%23) `141.0K 🔥` `NEW`
1. [纪委回应女局长被举报婚内出轨多人](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E5%A7%94%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%B1%80%E9%95%BF%E8%A2%AB%E4%B8%BE%E6%8A%A5%E5%A9%9A%E5%86%85%E5%87%BA%E8%BD%A8%E5%A4%9A%E4%BA%BA%23) `520.9K 🔥` `+100%`
1. [奶奶假牙不见小狗露八颗牙](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E5%81%87%E7%89%99%E4%B8%8D%E8%A7%81%E5%B0%8F%E7%8B%97%E9%9C%B2%E5%85%AB%E9%A2%97%E7%89%99%23) `509.5K 🔥` `+156%`
1. [OpenAI发布可交互界面](https://s.weibo.com/weibo?q=%23OpenAI%E5%8F%91%E5%B8%83%E5%8F%AF%E4%BA%A4%E4%BA%92%E7%95%8C%E9%9D%A2%23) `353.6K 🔥` `+299%`
1. [感觉不对劲一定不要回应](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E4%B8%8D%E5%AF%B9%E5%8A%B2%E4%B8%80%E5%AE%9A%E4%B8%8D%E8%A6%81%E5%9B%9E%E5%BA%94%23) `347.3K 🔥` `+311%`
1. [原来睡觉是真的需要睡的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9D%A1%E8%A7%89%E6%98%AF%E7%9C%9F%E7%9A%84%E9%9C%80%E8%A6%81%E7%9D%A1%E7%9A%84%23) `340.1K 🔥` `+309%`
1. [新疆体制内工作一年辞职回临沂](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E4%BD%93%E5%88%B6%E5%86%85%E5%B7%A5%E4%BD%9C%E4%B8%80%E5%B9%B4%E8%BE%9E%E8%81%8C%E5%9B%9E%E4%B8%B4%E6%B2%82%23) `293.7K 🔥` `+434%`
1. [辽宁挖出的10吨古钱币山](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E6%8C%96%E5%87%BA%E7%9A%8410%E5%90%A8%E5%8F%A4%E9%92%B1%E5%B8%81%E5%B1%B1%23) `215.7K 🔥` `+56%`
1. [崔晋李勒优聊天记录](https://s.weibo.com/weibo?q=%23%E5%B4%94%E6%99%8B%E6%9D%8E%E5%8B%92%E4%BC%98%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `200.4K 🔥` `+93%`
1. [82岁老姑娘养老规划太有智慧](https://s.weibo.com/weibo?q=%2382%E5%B2%81%E8%80%81%E5%A7%91%E5%A8%98%E5%85%BB%E8%80%81%E8%A7%84%E5%88%92%E5%A4%AA%E6%9C%89%E6%99%BA%E6%85%A7%23) `219.5K 🔥` `-68%`
1. [肺鼠疫会人传人](https://s.weibo.com/weibo?q=%23%E8%82%BA%E9%BC%A0%E7%96%AB%E4%BC%9A%E4%BA%BA%E4%BC%A0%E4%BA%BA%23) `174.1K 🔥` `-35%`

Updated at 2026-10-09 10:55:23

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
