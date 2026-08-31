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

1. [尼泊尔泥石流已致903遇难4247失联](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%B7%B2%E8%87%B4903%E9%81%87%E9%9A%BE4247%E5%A4%B1%E8%81%94%23) `3.3M 🔥` `NEW`
1. [银行该不该午休](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E8%AF%A5%E4%B8%8D%E8%AF%A5%E5%8D%88%E4%BC%91%23) `1.1M 🔥` `NEW`
1. [争分夺秒打通口岸关键通道](https://s.weibo.com/weibo?q=%23%E4%BA%89%E5%88%86%E5%A4%BA%E7%A7%92%E6%89%93%E9%80%9A%E5%8F%A3%E5%B2%B8%E5%85%B3%E9%94%AE%E9%80%9A%E9%81%93%23) `1.0M 🔥` `NEW`
1. [被邻居的6个车位气笑了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%82%BB%E5%B1%85%E7%9A%846%E4%B8%AA%E8%BD%A6%E4%BD%8D%E6%B0%94%E7%AC%91%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [芭莎之夜 阵容](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E8%8E%8E%E4%B9%8B%E5%A4%9C%20%E9%98%B5%E5%AE%B9%23) `720.1K 🔥` `NEW`
1. [井柏然花少下沉口碑](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E8%8A%B1%E5%B0%91%E4%B8%8B%E6%B2%89%E5%8F%A3%E7%A2%91%23) `482.7K 🔥` `NEW`
1. [花少2只有陈意涵杨洋是真来旅行的](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E5%8F%AA%E6%9C%89%E9%99%88%E6%84%8F%E6%B6%B5%E6%9D%A8%E6%B4%8B%E6%98%AF%E7%9C%9F%E6%9D%A5%E6%97%85%E8%A1%8C%E7%9A%84%23) `448.9K 🔥` `NEW`
1. [绝味鸭脖为啥卖不动了](https://s.weibo.com/weibo?q=%23%E7%BB%9D%E5%91%B3%E9%B8%AD%E8%84%96%E4%B8%BA%E5%95%A5%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `448.2K 🔥` `NEW`
1. [英雄联盟](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%23) `445.9K 🔥` `NEW`
1. [熬夜之后如何正确恢复身体](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E4%B9%8B%E5%90%8E%E5%A6%82%E4%BD%95%E6%AD%A3%E7%A1%AE%E6%81%A2%E5%A4%8D%E8%BA%AB%E4%BD%93%23) `444.5K 🔥` `NEW`
1. [多家医院通知解聘](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E5%8C%BB%E9%99%A2%E9%80%9A%E7%9F%A5%E8%A7%A3%E8%81%98%23) `441.8K 🔥` `NEW`
1. [蒋欣经纪人说蒋欣吃凉拌黄瓜都会胖](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%E7%BB%8F%E7%BA%AA%E4%BA%BA%E8%AF%B4%E8%92%8B%E6%AC%A3%E5%90%83%E5%87%89%E6%8B%8C%E9%BB%84%E7%93%9C%E9%83%BD%E4%BC%9A%E8%83%96%23) `440.9K 🔥` `NEW`
1. [买完瑞幸出门摔倒致后脑勺出血](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E5%AE%8C%E7%91%9E%E5%B9%B8%E5%87%BA%E9%97%A8%E6%91%94%E5%80%92%E8%87%B4%E5%90%8E%E8%84%91%E5%8B%BA%E5%87%BA%E8%A1%80%23) `438.0K 🔥` `NEW`
1. [巩俐易烊千玺无双大片](https://s.weibo.com/weibo?q=%23%E5%B7%A9%E4%BF%90%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%97%A0%E5%8F%8C%E5%A4%A7%E7%89%87%23) `437.2K 🔥` `NEW`
1. [ZmjjKK 我觉得这个世界疯了](https://s.weibo.com/weibo?q=%23ZmjjKK%20%E6%88%91%E8%A7%89%E5%BE%97%E8%BF%99%E4%B8%AA%E4%B8%96%E7%95%8C%E7%96%AF%E4%BA%86%23) `383.7K 🔥` `NEW`
1. [中美角逐乌兰察布](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E8%A7%92%E9%80%90%E4%B9%8C%E5%85%B0%E5%AF%9F%E5%B8%83%23) `383.1K 🔥` `NEW`
1. [华为三折叠采用全新展翼形态](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B8%89%E6%8A%98%E5%8F%A0%E9%87%87%E7%94%A8%E5%85%A8%E6%96%B0%E5%B1%95%E7%BF%BC%E5%BD%A2%E6%80%81%23) `381.8K 🔥` `NEW`
1. [央视曝光医美注射乱象](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E5%8C%BB%E7%BE%8E%E6%B3%A8%E5%B0%84%E4%B9%B1%E8%B1%A1%23) `381.6K 🔥` `NEW`
1. [Ryan是王菲早期大粉](https://s.weibo.com/weibo?q=%23Ryan%E6%98%AF%E7%8E%8B%E8%8F%B2%E6%97%A9%E6%9C%9F%E5%A4%A7%E7%B2%89%23) `380.9K 🔥` `NEW`
1. [Ryan对欧阳娜娜也是搂搂抱抱](https://s.weibo.com/weibo?q=%23Ryan%E5%AF%B9%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E4%B9%9F%E6%98%AF%E6%90%82%E6%90%82%E6%8A%B1%E6%8A%B1%23) `380.1K 🔥` `NEW`
1. [三甲医院 解聘](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E9%99%A2%20%E8%A7%A3%E8%81%98%23) `372.4K 🔥` `NEW`
1. [女性出现4种异常就要查妇科](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%80%A7%E5%87%BA%E7%8E%B04%E7%A7%8D%E5%BC%82%E5%B8%B8%E5%B0%B1%E8%A6%81%E6%9F%A5%E5%A6%87%E7%A7%91%23) `367.4K 🔥` `NEW`
1. [巴黎欧莱雅美发代言人张凌赫](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E6%AC%A7%E8%8E%B1%E9%9B%85%E7%BE%8E%E5%8F%91%E4%BB%A3%E8%A8%80%E4%BA%BA%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `362.1K 🔥` `NEW`
1. [尼泊尔900名学生泥石流10秒前撤离](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94900%E5%90%8D%E5%AD%A6%E7%94%9F%E6%B3%A5%E7%9F%B3%E6%B5%8110%E7%A7%92%E5%89%8D%E6%92%A4%E7%A6%BB%23) `354.1K 🔥` `NEW`
1. [东北虎你吃吧我实在吃不下了](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E8%99%8E%E4%BD%A0%E5%90%83%E5%90%A7%E6%88%91%E5%AE%9E%E5%9C%A8%E5%90%83%E4%B8%8D%E4%B8%8B%E4%BA%86%23) `352.8K 🔥` `NEW`
1. [薛甄珠演过家有儿女](https://s.weibo.com/weibo?q=%23%E8%96%9B%E7%94%84%E7%8F%A0%E6%BC%94%E8%BF%87%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%23) `344.8K 🔥` `NEW`
1. [许晴宁愿付违约金也要退出](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%99%B4%E5%AE%81%E6%84%BF%E4%BB%98%E8%BF%9D%E7%BA%A6%E9%87%91%E4%B9%9F%E8%A6%81%E9%80%80%E5%87%BA%23) `338.1K 🔥` `NEW`
1. [谁来管管现在的小说](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%A5%E7%AE%A1%E7%AE%A1%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%B0%8F%E8%AF%B4%23) `335.5K 🔥` `NEW`
1. [西藏吉隆泥石流](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `328.8K 🔥` `NEW`
1. [曝成毅不玩手机被群嘲](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%88%90%E6%AF%85%E4%B8%8D%E7%8E%A9%E6%89%8B%E6%9C%BA%E8%A2%AB%E7%BE%A4%E5%98%B2%23) `325.5K 🔥` `NEW`
1. [易坦子融花婚礼合体](https://s.weibo.com/weibo?q=%23%E6%98%93%E5%9D%A6%E5%AD%90%E8%9E%8D%E8%8A%B1%E5%A9%9A%E7%A4%BC%E5%90%88%E4%BD%93%23) `285.6K 🔥` `NEW`
1. [举报代孕机构疑有内鬼泄密](https://s.weibo.com/weibo?q=%23%E4%B8%BE%E6%8A%A5%E4%BB%A3%E5%AD%95%E6%9C%BA%E6%9E%84%E7%96%91%E6%9C%89%E5%86%85%E9%AC%BC%E6%B3%84%E5%AF%86%23) `229.8K 🔥` `NEW`
1. [银行午休被指服务意识不足](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%8D%88%E4%BC%91%E8%A2%AB%E6%8C%87%E6%9C%8D%E5%8A%A1%E6%84%8F%E8%AF%86%E4%B8%8D%E8%B6%B3%23) `227.2K 🔥` `NEW`
1. [A股收官之战](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%94%B6%E5%AE%98%E4%B9%8B%E6%88%98%23) `207.8K 🔥` `NEW`
1. [被踢出工作群女生加班证据有几个G](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%B8%A2%E5%87%BA%E5%B7%A5%E4%BD%9C%E7%BE%A4%E5%A5%B3%E7%94%9F%E5%8A%A0%E7%8F%AD%E8%AF%81%E6%8D%AE%E6%9C%89%E5%87%A0%E4%B8%AAG%23) `203.7K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `201.7K 🔥` `NEW`
1. [高铁偶遇失联70年的亲人](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E5%81%B6%E9%81%87%E5%A4%B1%E8%81%9470%E5%B9%B4%E7%9A%84%E4%BA%B2%E4%BA%BA%23) `197.8K 🔥` `NEW`
1. [优酷5年7部破万现偶剧](https://s.weibo.com/weibo?q=%23%E4%BC%98%E9%85%B75%E5%B9%B47%E9%83%A8%E7%A0%B4%E4%B8%87%E7%8E%B0%E5%81%B6%E5%89%A7%23) `195.9K 🔥` `NEW`
1. [网红刘二狗宣布停播](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%88%98%E4%BA%8C%E7%8B%97%E5%AE%A3%E5%B8%83%E5%81%9C%E6%92%AD%23) `195.4K 🔥` `NEW`
1. [一吉隆海关人员陪母就医躲过泥石流](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%90%89%E9%9A%86%E6%B5%B7%E5%85%B3%E4%BA%BA%E5%91%98%E9%99%AA%E6%AF%8D%E5%B0%B1%E5%8C%BB%E8%BA%B2%E8%BF%87%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `195.3K 🔥` `NEW`
1. [全北京最有腔调的男人](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%8C%97%E4%BA%AC%E6%9C%80%E6%9C%89%E8%85%94%E8%B0%83%E7%9A%84%E7%94%B7%E4%BA%BA%23) `194.3K 🔥` `NEW`
1. [德约科维奇2比3纳沃内](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%BA%A6%E7%A7%91%E7%BB%B4%E5%A5%872%E6%AF%943%E7%BA%B3%E6%B2%83%E5%86%85%23) `194.0K 🔥` `NEW`
1. [陈妍希一天的饭量是我的一顿](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E4%B8%80%E5%A4%A9%E7%9A%84%E9%A5%AD%E9%87%8F%E6%98%AF%E6%88%91%E7%9A%84%E4%B8%80%E9%A1%BF%23) `190.3K 🔥` `NEW`
1. [人一旦去过一次新疆](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E5%8E%BB%E8%BF%87%E4%B8%80%E6%AC%A1%E6%96%B0%E7%96%86%23) `168.4K 🔥` `NEW`
1. [德约20年后再遭大满贯一轮游](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%BA%A620%E5%B9%B4%E5%90%8E%E5%86%8D%E9%81%AD%E5%A4%A7%E6%BB%A1%E8%B4%AF%E4%B8%80%E8%BD%AE%E6%B8%B8%23) `164.9K 🔥` `NEW`
1. [旺仔小乔解封未道歉](https://s.weibo.com/weibo?q=%23%E6%97%BA%E4%BB%94%E5%B0%8F%E4%B9%94%E8%A7%A3%E5%B0%81%E6%9C%AA%E9%81%93%E6%AD%89%23) `163.9K 🔥` `NEW`
1. [中国男人正在抛弃皮鞋](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E4%BA%BA%E6%AD%A3%E5%9C%A8%E6%8A%9B%E5%BC%83%E7%9A%AE%E9%9E%8B%23) `163.8K 🔥` `NEW`
1. [关晓彤陈星旭拥吻路透](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E9%99%88%E6%98%9F%E6%97%AD%E6%8B%A5%E5%90%BB%E8%B7%AF%E9%80%8F%23) `161.0K 🔥` `NEW`
1. [小黄豆水果店被吐槽太贵](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BB%84%E8%B1%86%E6%B0%B4%E6%9E%9C%E5%BA%97%E8%A2%AB%E5%90%90%E6%A7%BD%E5%A4%AA%E8%B4%B5%23) `160.9K 🔥` `NEW`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `384.2K 🔥` `+82%`

Updated at 2026-08-31 14:09:16

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
