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

1. [这一秒过火 红果亦是果 (This second went too far, the red fruit is also a fruit)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%20%E7%BA%A2%E6%9E%9C%E4%BA%A6%E6%98%AF%E6%9E%9C%23) `1.4M 🔥` `NEW`
1. [爸爸每月砸6千给12岁女儿打生长激素](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E6%AF%8F%E6%9C%88%E7%A0%B86%E5%8D%83%E7%BB%9912%E5%B2%81%E5%A5%B3%E5%84%BF%E6%89%93%E7%94%9F%E9%95%BF%E6%BF%80%E7%B4%A0%23) `1.2M 🔥` `NEW`
1. [我国多领域硬核成果密集上新](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%A4%9A%E9%A2%86%E5%9F%9F%E7%A1%AC%E6%A0%B8%E6%88%90%E6%9E%9C%E5%AF%86%E9%9B%86%E4%B8%8A%E6%96%B0%23) `852.1K 🔥` `NEW`
1. [现在有的老人连车都打不到](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E6%9C%89%E7%9A%84%E8%80%81%E4%BA%BA%E8%BF%9E%E8%BD%A6%E9%83%BD%E6%89%93%E4%B8%8D%E5%88%B0%23) `737.8K 🔥` `NEW`
1. [阿根廷夺冠概率40%](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%A4%BA%E5%86%A0%E6%A6%82%E7%8E%8740%25%23) `551.6K 🔥` `NEW`
1. [马龙许昕3比0林高远袁烜松](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%953%E6%AF%940%E6%9E%97%E9%AB%98%E8%BF%9C%E8%A2%81%E7%83%9C%E6%9D%BE%23) `504.0K 🔥` `NEW`
1. [苏州暴雨](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E5%B7%9E%E6%9A%B4%E9%9B%A8%23) `329.0K 🔥` `NEW`
1. [顾客凌晨点塔斯汀外卖被贴封签辱骂](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%AE%A2%E5%87%8C%E6%99%A8%E7%82%B9%E5%A1%94%E6%96%AF%E6%B1%80%E5%A4%96%E5%8D%96%E8%A2%AB%E8%B4%B4%E5%B0%81%E7%AD%BE%E8%BE%B1%E9%AA%82%23) `319.5K 🔥` `NEW`
1. [虞书欣泉州簪花](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%B3%89%E5%B7%9E%E7%B0%AA%E8%8A%B1%23) `305.4K 🔥` `NEW`
1. [国乒 断层危机](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%20%E6%96%AD%E5%B1%82%E5%8D%B1%E6%9C%BA%23) `293.6K 🔥` `NEW`
1. [官俊臣疑似回应考上重庆大学 (Guan Junchen suspected of being admitted to Chongqing University)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E7%96%91%E4%BC%BC%E5%9B%9E%E5%BA%94%E8%80%83%E4%B8%8A%E9%87%8D%E5%BA%86%E5%A4%A7%E5%AD%A6%23) `274.5K 🔥` `NEW`
1. [女子戴2年牙齿保持器停戴1周反弹](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%88%B42%E5%B9%B4%E7%89%99%E9%BD%BF%E4%BF%9D%E6%8C%81%E5%99%A8%E5%81%9C%E6%88%B41%E5%91%A8%E5%8F%8D%E5%BC%B9%23) `173.1K 🔥` `NEW`
1. [律师回应16岁女儿诬告父亲性侵](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E5%9B%9E%E5%BA%9416%E5%B2%81%E5%A5%B3%E5%84%BF%E8%AF%AC%E5%91%8A%E7%88%B6%E4%BA%B2%E6%80%A7%E4%BE%B5%23) `172.1K 🔥` `NEW`
1. [黄灿灿的状态不像演的](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E7%9A%84%E7%8A%B6%E6%80%81%E4%B8%8D%E5%83%8F%E6%BC%94%E7%9A%84%23) `169.1K 🔥` `NEW`
1. [阿根廷挑战四大魔咒](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%8C%91%E6%88%98%E5%9B%9B%E5%A4%A7%E9%AD%94%E5%92%92%23) `163.9K 🔥` `NEW`
1. [孙颖莎是怎么限制袁励岑的](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%98%AF%E6%80%8E%E4%B9%88%E9%99%90%E5%88%B6%E8%A2%81%E5%8A%B1%E5%B2%91%E7%9A%84%23) `163.1K 🔥` `NEW`
1. [王俊凯舞台有好多蟹钳草](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%88%9E%E5%8F%B0%E6%9C%89%E5%A5%BD%E5%A4%9A%E8%9F%B9%E9%92%B3%E8%8D%89%23) `160.3K 🔥` `NEW`
1. [田曦薇演黑帮大佬的威慑力](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%BC%94%E9%BB%91%E5%B8%AE%E5%A4%A7%E4%BD%AC%E7%9A%84%E5%A8%81%E6%85%91%E5%8A%9B%23) `157.4K 🔥` `NEW`
1. [绵阳通报四川幼专招聘事件](https://s.weibo.com/weibo?q=%23%E7%BB%B5%E9%98%B3%E9%80%9A%E6%8A%A5%E5%9B%9B%E5%B7%9D%E5%B9%BC%E4%B8%93%E6%8B%9B%E8%81%98%E4%BA%8B%E4%BB%B6%23) `153.2K 🔥` `NEW`
1. [冉莹颖母亲曾求邹市明让女儿有事业](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E6%AF%8D%E4%BA%B2%E6%9B%BE%E6%B1%82%E9%82%B9%E5%B8%82%E6%98%8E%E8%AE%A9%E5%A5%B3%E5%84%BF%E6%9C%89%E4%BA%8B%E4%B8%9A%23) `153.2K 🔥` `NEW`
1. [功夫女足路演 (Kung Fu Women’s Football Roadshow)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E8%B7%AF%E6%BC%94%23) `153.1K 🔥` `NEW`
1. [被朋友的消费观震惊的到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%9C%8B%E5%8F%8B%E7%9A%84%E6%B6%88%E8%B4%B9%E8%A7%82%E9%9C%87%E6%83%8A%E7%9A%84%E5%88%B0%E4%BA%86%23) `152.8K 🔥` `NEW`
1. [三假医院](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%81%87%E5%8C%BB%E9%99%A2%23) `150.4K 🔥` `NEW`
1. [存钱过万一定要办理纸质存单](https://s.weibo.com/weibo?q=%23%E5%AD%98%E9%92%B1%E8%BF%87%E4%B8%87%E4%B8%80%E5%AE%9A%E8%A6%81%E5%8A%9E%E7%90%86%E7%BA%B8%E8%B4%A8%E5%AD%98%E5%8D%95%23) `144.7K 🔥` `NEW`
1. [人一旦开始用AI后](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E5%BC%80%E5%A7%8B%E7%94%A8AI%E5%90%8E%23) `143.5K 🔥` `NEW`
1. [马龙许昕晋级决赛](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `137.8K 🔥` `NEW`
1. [韩国股民迎来大变脸夏天](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E6%B0%91%E8%BF%8E%E6%9D%A5%E5%A4%A7%E5%8F%98%E8%84%B8%E5%A4%8F%E5%A4%A9%23) `131.7K 🔥` `NEW`
1. [上海暴雨预警升至橙色](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9A%B4%E9%9B%A8%E9%A2%84%E8%AD%A6%E5%8D%87%E8%87%B3%E6%A9%99%E8%89%B2%23) `129.8K 🔥` `NEW`
1. [雷军祝贺赖斯世界杯首粒进球](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A5%9D%E8%B4%BA%E8%B5%96%E6%96%AF%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E7%B2%92%E8%BF%9B%E7%90%83%23) `127.5K 🔥` `NEW`
1. [当我坐飞机忘记关导航时](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E5%9D%90%E9%A3%9E%E6%9C%BA%E5%BF%98%E8%AE%B0%E5%85%B3%E5%AF%BC%E8%88%AA%E6%97%B6%23) `746.3K 🔥` `+32%`
1. [Kimi K3把美股半导体干崩了 (Kimi K3 brought down the U.S. semiconductor market)](https://s.weibo.com/weibo?q=%23Kimi%20K3%E6%8A%8A%E7%BE%8E%E8%82%A1%E5%8D%8A%E5%AF%BC%E4%BD%93%E5%B9%B2%E5%B4%A9%E4%BA%86%23) `166.4K 🔥`
1. [建议大家对钱得有概念](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%AF%B9%E9%92%B1%E5%BE%97%E6%9C%89%E6%A6%82%E5%BF%B5%23) `160.3K 🔥`
1. [那个从来都不喝水的朋友](https://s.weibo.com/weibo?q=%23%E9%82%A3%E4%B8%AA%E4%BB%8E%E6%9D%A5%E9%83%BD%E4%B8%8D%E5%96%9D%E6%B0%B4%E7%9A%84%E6%9C%8B%E5%8F%8B%23) `690.3K 🔥` `-30%`
1. [这一秒过火 短剧感 (This second went too far, it felt like a short drama)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%20%E7%9F%AD%E5%89%A7%E6%84%9F%23) `534.5K 🔥` `-69%`
1. [这一秒过火 AI片头](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%20AI%E7%89%87%E5%A4%B4%23) `272.8K 🔥` `-72%`
1. [暑假接来玩14岁儿子纹成大花腿 (During the summer vacation, my 14-year-old son got tattoos on his legs.)](https://s.weibo.com/weibo?q=%23%E6%9A%91%E5%81%87%E6%8E%A5%E6%9D%A5%E7%8E%A914%E5%B2%81%E5%84%BF%E5%AD%90%E7%BA%B9%E6%88%90%E5%A4%A7%E8%8A%B1%E8%85%BF%23) `230.0K 🔥` `-45%`
1. [刘宇宁此事到此为止](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%AD%A4%E4%BA%8B%E5%88%B0%E6%AD%A4%E4%B8%BA%E6%AD%A2%23) `217.9K 🔥` `-47%`
1. [伊朗直接掀了桌子](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9B%B4%E6%8E%A5%E6%8E%80%E4%BA%86%E6%A1%8C%E5%AD%90%23) `201.0K 🔥` `-49%`
1. [世界两大AI组织都是狠角色](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B8%A4%E5%A4%A7AI%E7%BB%84%E7%BB%87%E9%83%BD%E6%98%AF%E7%8B%A0%E8%A7%92%E8%89%B2%23) `174.7K 🔥` `-52%`
1. [AI行业要重新洗牌了](https://s.weibo.com/weibo?q=%23AI%E8%A1%8C%E4%B8%9A%E8%A6%81%E9%87%8D%E6%96%B0%E6%B4%97%E7%89%8C%E4%BA%86%23) `174.5K 🔥` `-50%`
1. [儿媳晒公公带孙女走红](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AA%B3%E6%99%92%E5%85%AC%E5%85%AC%E5%B8%A6%E5%AD%99%E5%A5%B3%E8%B5%B0%E7%BA%A2%23) `171.4K 🔥` `-47%`
1. [这一秒过火 易军](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%20%E6%98%93%E5%86%9B%23) `170.6K 🔥` `-75%`
1. [姆巴佩决赛预测 (Mbappe final prediction)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%86%B3%E8%B5%9B%E9%A2%84%E6%B5%8B%23) `168.0K 🔥` `-76%`
1. [她活了 我疯了](https://s.weibo.com/weibo?q=%23%E5%A5%B9%E6%B4%BB%E4%BA%86%20%E6%88%91%E7%96%AF%E4%BA%86%23) `166.5K 🔥` `-57%`
1. [Angelababy素颜转场视频](https://s.weibo.com/weibo?q=%23Angelababy%E7%B4%A0%E9%A2%9C%E8%BD%AC%E5%9C%BA%E8%A7%86%E9%A2%91%23) `165.3K 🔥` `-57%`
1. [刘宇宁让粉丝删掉不好听的评论 (Liu Yuning asks fans to delete unpleasant comments)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AE%A9%E7%B2%89%E4%B8%9D%E5%88%A0%E6%8E%89%E4%B8%8D%E5%A5%BD%E5%90%AC%E7%9A%84%E8%AF%84%E8%AE%BA%23) `161.9K 🔥` `-56%`
1. [这一秒过火走势](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E8%B5%B0%E5%8A%BF%23) `160.7K 🔥` `-53%`
1. [阿根廷西班牙冠军预测](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%A5%BF%E7%8F%AD%E7%89%99%E5%86%A0%E5%86%9B%E9%A2%84%E6%B5%8B%23) `147.1K 🔥` `-42%`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `130.1K 🔥` `-31%`
1. [山西人午睡像进入平行时空](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%BA%BA%E5%8D%88%E7%9D%A1%E5%83%8F%E8%BF%9B%E5%85%A5%E5%B9%B3%E8%A1%8C%E6%97%B6%E7%A9%BA%23) `130.1K 🔥` `-80%`

Updated at 2026-07-19 16:55:52

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
