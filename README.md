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

1. [孙颖莎爆冷止步32强](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%88%86%E5%86%B7%E6%AD%A2%E6%AD%A532%E5%BC%BA%23) `8.6M 🔥` `NEW`
1. [中国乒协已报案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B9%92%E5%8D%8F%E5%B7%B2%E6%8A%A5%E6%A1%88%23) `5.9M 🔥` `NEW`
1. [假期结束后怎么调回好状态](https://s.weibo.com/weibo?q=%23%E5%81%87%E6%9C%9F%E7%BB%93%E6%9D%9F%E5%90%8E%E6%80%8E%E4%B9%88%E8%B0%83%E5%9B%9E%E5%A5%BD%E7%8A%B6%E6%80%81%23) `1.8M 🔥` `NEW`
1. [孙颖莎请大家不用过度担心](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B7%E5%A4%A7%E5%AE%B6%E4%B8%8D%E7%94%A8%E8%BF%87%E5%BA%A6%E6%8B%85%E5%BF%83%23) `1.3M 🔥` `NEW`
1. [孙颖莎创下个人WTT大满贯最差战绩](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%88%9B%E4%B8%8B%E4%B8%AA%E4%BA%BAWTT%E5%A4%A7%E6%BB%A1%E8%B4%AF%E6%9C%80%E5%B7%AE%E6%88%98%E7%BB%A9%23) `1.1M 🔥` `NEW`
1. [王星失联前向女友求救发猫喂了没](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E5%A4%B1%E8%81%94%E5%89%8D%E5%90%91%E5%A5%B3%E5%8F%8B%E6%B1%82%E6%95%91%E5%8F%91%E7%8C%AB%E5%96%82%E4%BA%86%E6%B2%A1%23) `1.0M 🔥` `NEW`
1. [离加油站20米燃油耗尽车主发声](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%8A%A0%E6%B2%B9%E7%AB%9920%E7%B1%B3%E7%87%83%E6%B2%B9%E8%80%97%E5%B0%BD%E8%BD%A6%E4%B8%BB%E5%8F%91%E5%A3%B0%23) `647.1K 🔥` `NEW`
1. [郑钦文重返中网8强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%87%8D%E8%BF%94%E4%B8%AD%E7%BD%918%E5%BC%BA%23) `607.4K 🔥` `NEW`
1. [郑钦文2比1赢了查拉耶娃](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%872%E6%AF%941%E8%B5%A2%E4%BA%86%E6%9F%A5%E6%8B%89%E8%80%B6%E5%A8%83%23) `597.4K 🔥` `NEW`
1. [郑钦文vs查拉耶娃](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E6%9F%A5%E6%8B%89%E8%80%B6%E5%A8%83%23) `571.5K 🔥` `NEW`
1. [曝王晓慧有孩子了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E6%99%93%E6%85%A7%E6%9C%89%E5%AD%A9%E5%AD%90%E4%BA%86%23) `571.5K 🔥` `NEW`
1. [众多台湾艺人明确一个中国立场](https://s.weibo.com/weibo?q=%23%E4%BC%97%E5%A4%9A%E5%8F%B0%E6%B9%BE%E8%89%BA%E4%BA%BA%E6%98%8E%E7%A1%AE%E4%B8%80%E4%B8%AA%E4%B8%AD%E5%9B%BD%E7%AB%8B%E5%9C%BA%23) `571.5K 🔥` `NEW`
1. [檀健次卢昱晓 身高差](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%8D%A2%E6%98%B1%E6%99%93%20%E8%BA%AB%E9%AB%98%E5%B7%AE%23) `571.4K 🔥` `NEW`
1. [王星女友发博](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E5%A5%B3%E5%8F%8B%E5%8F%91%E5%8D%9A%23) `567.5K 🔥` `NEW`
1. [小情侣搞瘫医院挂号系统双双获刑](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%83%85%E4%BE%A3%E6%90%9E%E7%98%AB%E5%8C%BB%E9%99%A2%E6%8C%82%E5%8F%B7%E7%B3%BB%E7%BB%9F%E5%8F%8C%E5%8F%8C%E8%8E%B7%E5%88%91%23) `361.5K 🔥` `NEW`
1. [王星被骗至妙瓦底4天被卖3次](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%A2%AB%E9%AA%97%E8%87%B3%E5%A6%99%E7%93%A6%E5%BA%954%E5%A4%A9%E8%A2%AB%E5%8D%963%E6%AC%A1%23) `282.6K 🔥` `NEW`
1. [李现和阿信合唱](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%92%8C%E9%98%BF%E4%BF%A1%E5%90%88%E5%94%B1%23) `276.7K 🔥` `NEW`
1. [高速开智驾睡觉男子处罚结果](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E5%BC%80%E6%99%BA%E9%A9%BE%E7%9D%A1%E8%A7%89%E7%94%B7%E5%AD%90%E5%A4%84%E7%BD%9A%E7%BB%93%E6%9E%9C%23) `269.4K 🔥` `NEW`
1. [大学生旅游攻略把中年人坑麻了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5%E6%8A%8A%E4%B8%AD%E5%B9%B4%E4%BA%BA%E5%9D%91%E9%BA%BB%E4%BA%86%23) `268.0K 🔥` `NEW`
1. [程序员为女友抢号搞瘫医院挂号系统](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E5%BA%8F%E5%91%98%E4%B8%BA%E5%A5%B3%E5%8F%8B%E6%8A%A2%E5%8F%B7%E6%90%9E%E7%98%AB%E5%8C%BB%E9%99%A2%E6%8C%82%E5%8F%B7%E7%B3%BB%E7%BB%9F%23) `266.6K 🔥` `NEW`
1. [特朗普宣布投资66亿美元建厂](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%AE%A3%E5%B8%83%E6%8A%95%E8%B5%8466%E4%BA%BF%E7%BE%8E%E5%85%83%E5%BB%BA%E5%8E%82%23) `266.1K 🔥` `NEW`
1. [AG对战LGDNBW](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98LGDNBW%23) `265.7K 🔥` `NEW`
1. [同事月薪一万五全给老婆](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%BA%8B%E6%9C%88%E8%96%AA%E4%B8%80%E4%B8%87%E4%BA%94%E5%85%A8%E7%BB%99%E8%80%81%E5%A9%86%23) `265.0K 🔥` `NEW`
1. [便宜但可能致癌的小东西](https://s.weibo.com/weibo?q=%23%E4%BE%BF%E5%AE%9C%E4%BD%86%E5%8F%AF%E8%83%BD%E8%87%B4%E7%99%8C%E7%9A%84%E5%B0%8F%E4%B8%9C%E8%A5%BF%23) `263.8K 🔥` `NEW`
1. [现在流行熬婚](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E6%B5%81%E8%A1%8C%E7%86%AC%E5%A9%9A%23) `262.9K 🔥` `NEW`
1. [刘国正谈孙颖莎止步32强](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%AD%A3%E8%B0%88%E5%AD%99%E9%A2%96%E8%8E%8E%E6%AD%A2%E6%AD%A532%E5%BC%BA%23) `261.9K 🔥` `NEW`
1. [赵丽颖谢娜关系](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%B0%A2%E5%A8%9C%E5%85%B3%E7%B3%BB%23) `261.5K 🔥` `NEW`
1. [成都国内游断层式领先](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E5%9B%BD%E5%86%85%E6%B8%B8%E6%96%AD%E5%B1%82%E5%BC%8F%E9%A2%86%E5%85%88%23) `260.5K 🔥` `NEW`
1. [人不能旅游超过七天以上](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%8D%E8%83%BD%E6%97%85%E6%B8%B8%E8%B6%85%E8%BF%87%E4%B8%83%E5%A4%A9%E4%BB%A5%E4%B8%8A%23) `259.8K 🔥` `NEW`
1. [帕拉南回应淘汰孙颖莎](https://s.weibo.com/weibo?q=%23%E5%B8%95%E6%8B%89%E5%8D%97%E5%9B%9E%E5%BA%94%E6%B7%98%E6%B1%B0%E5%AD%99%E9%A2%96%E8%8E%8E%23) `259.0K 🔥` `NEW`
1. [41岁高三班主任心梗离世](https://s.weibo.com/weibo?q=%2341%E5%B2%81%E9%AB%98%E4%B8%89%E7%8F%AD%E4%B8%BB%E4%BB%BB%E5%BF%83%E6%A2%97%E7%A6%BB%E4%B8%96%23) `258.7K 🔥` `NEW`
1. [葡媒怒批C罗](https://s.weibo.com/weibo?q=%23%E8%91%A1%E5%AA%92%E6%80%92%E6%89%B9C%E7%BD%97%23) `256.6K 🔥` `NEW`
1. [离加油站20米没油花350元叫拖车](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%8A%A0%E6%B2%B9%E7%AB%9920%E7%B1%B3%E6%B2%A1%E6%B2%B9%E8%8A%B1350%E5%85%83%E5%8F%AB%E6%8B%96%E8%BD%A6%23) `255.3K 🔥` `NEW`
1. [粤J2888T车主战绩再刷新](https://s.weibo.com/weibo?q=%23%E7%B2%A4J2888T%E8%BD%A6%E4%B8%BB%E6%88%98%E7%BB%A9%E5%86%8D%E5%88%B7%E6%96%B0%23) `227.9K 🔥` `NEW`
1. [缺乏蛋白质的9个信号](https://s.weibo.com/weibo?q=%23%E7%BC%BA%E4%B9%8F%E8%9B%8B%E7%99%BD%E8%B4%A8%E7%9A%849%E4%B8%AA%E4%BF%A1%E5%8F%B7%23) `226.4K 🔥` `NEW`
1. [乒协拟推动建立赛场禁入名单制度](https://s.weibo.com/weibo?q=%23%E4%B9%92%E5%8D%8F%E6%8B%9F%E6%8E%A8%E5%8A%A8%E5%BB%BA%E7%AB%8B%E8%B5%9B%E5%9C%BA%E7%A6%81%E5%85%A5%E5%90%8D%E5%8D%95%E5%88%B6%E5%BA%A6%23) `224.8K 🔥` `NEW`
1. [薛之谦 此生不穿别的球衣了](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%20%E6%AD%A4%E7%94%9F%E4%B8%8D%E7%A9%BF%E5%88%AB%E7%9A%84%E7%90%83%E8%A1%A3%E4%BA%86%23) `214.3K 🔥` `NEW`
1. [giselle发宁艺卓照片](https://s.weibo.com/weibo?q=%23giselle%E5%8F%91%E5%AE%81%E8%89%BA%E5%8D%93%E7%85%A7%E7%89%87%23) `206.0K 🔥` `NEW`
1. [中网女单前三种子无缘八强](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BD%91%E5%A5%B3%E5%8D%95%E5%89%8D%E4%B8%89%E7%A7%8D%E5%AD%90%E6%97%A0%E7%BC%98%E5%85%AB%E5%BC%BA%23) `200.9K 🔥` `NEW`
1. [韩剧暧昧期好爽](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%89%A7%E6%9A%A7%E6%98%A7%E6%9C%9F%E5%A5%BD%E7%88%BD%23) `199.9K 🔥` `NEW`
1. [孙颖莎比赛途中累到双手撑膝](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%AF%94%E8%B5%9B%E9%80%94%E4%B8%AD%E7%B4%AF%E5%88%B0%E5%8F%8C%E6%89%8B%E6%92%91%E8%86%9D%23) `198.3K 🔥` `NEW`
1. [特意请假回家过节第一天被毒蛇咬伤](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%84%8F%E8%AF%B7%E5%81%87%E5%9B%9E%E5%AE%B6%E8%BF%87%E8%8A%82%E7%AC%AC%E4%B8%80%E5%A4%A9%E8%A2%AB%E6%AF%92%E8%9B%87%E5%92%AC%E4%BC%A4%23) `198.2K 🔥` `NEW`
1. [乒协抵制极端球迷越界行为声明](https://s.weibo.com/weibo?q=%23%E4%B9%92%E5%8D%8F%E6%8A%B5%E5%88%B6%E6%9E%81%E7%AB%AF%E7%90%83%E8%BF%B7%E8%B6%8A%E7%95%8C%E8%A1%8C%E4%B8%BA%E5%A3%B0%E6%98%8E%23) `198.1K 🔥` `NEW`
1. [郑钦文连续四轮三盘大战](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%BF%9E%E7%BB%AD%E5%9B%9B%E8%BD%AE%E4%B8%89%E7%9B%98%E5%A4%A7%E6%88%98%23) `193.5K 🔥` `NEW`
1. [赵丽颖给谢娜演出送花](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%BB%99%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%87%BA%E9%80%81%E8%8A%B1%23) `185.4K 🔥` `NEW`
1. [独居无聊也是八辈子的福气](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E5%B1%85%E6%97%A0%E8%81%8A%E4%B9%9F%E6%98%AF%E5%85%AB%E8%BE%88%E5%AD%90%E7%9A%84%E7%A6%8F%E6%B0%94%23) `179.6K 🔥` `NEW`
1. [国乒男队12人止步32强](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E9%98%9F12%E4%BA%BA%E6%AD%A2%E6%AD%A532%E5%BC%BA%23) `178.8K 🔥` `NEW`
1. [贺峻霖跳出来给了一个大拥抱](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E8%B7%B3%E5%87%BA%E6%9D%A5%E7%BB%99%E4%BA%86%E4%B8%80%E4%B8%AA%E5%A4%A7%E6%8B%A5%E6%8A%B1%23) `174.8K 🔥` `NEW`
1. [华为Mate90系列销量](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMate90%E7%B3%BB%E5%88%97%E9%94%80%E9%87%8F%23) `171.8K 🔥` `NEW`

Updated at 2026-10-07 21:55:47

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
