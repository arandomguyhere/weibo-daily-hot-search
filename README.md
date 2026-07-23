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

1. [贝克汉姆秃顶了 (Beckham is bald)](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E7%A7%83%E9%A1%B6%E4%BA%86%23) `1.6M 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `972.1K 🔥` `NEW`
1. [第一个发明睡帽的人简直就是天才](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%91%E6%98%8E%E7%9D%A1%E5%B8%BD%E7%9A%84%E4%BA%BA%E7%AE%80%E7%9B%B4%E5%B0%B1%E6%98%AF%E5%A4%A9%E6%89%8D%23) `811.4K 🔥` `NEW`
1. [瑞幸活菌吸管火了](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E6%B4%BB%E8%8F%8C%E5%90%B8%E7%AE%A1%E7%81%AB%E4%BA%86%23) `779.2K 🔥` `NEW`
1. [灿如繁星 数据异常](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%20%E6%95%B0%E6%8D%AE%E5%BC%82%E5%B8%B8%23) `634.0K 🔥` `NEW`
1. [梁文锋融资会议52句话](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E9%94%8B%E8%9E%8D%E8%B5%84%E4%BC%9A%E8%AE%AE52%E5%8F%A5%E8%AF%9D%23) `432.1K 🔥` `NEW`
1. [BLG Bin](https://s.weibo.com/weibo?q=%23BLG%20Bin%23) `406.5K 🔥` `NEW`
1. [冉莹颖拳馆项目被疑利益输送](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E6%8B%B3%E9%A6%86%E9%A1%B9%E7%9B%AE%E8%A2%AB%E7%96%91%E5%88%A9%E7%9B%8A%E8%BE%93%E9%80%81%23) `291.9K 🔥` `NEW`
1. [闫闯被指数年前曾过失致人死亡](https://s.weibo.com/weibo?q=%23%E9%97%AB%E9%97%AF%E8%A2%AB%E6%8C%87%E6%95%B0%E5%B9%B4%E5%89%8D%E6%9B%BE%E8%BF%87%E5%A4%B1%E8%87%B4%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `290.0K 🔥` `NEW`
1. [AI演员生成毛孔瑕疵 真人演员磨皮](https://s.weibo.com/weibo?q=%23AI%E6%BC%94%E5%91%98%E7%94%9F%E6%88%90%E6%AF%9B%E5%AD%94%E7%91%95%E7%96%B5%20%E7%9C%9F%E4%BA%BA%E6%BC%94%E5%91%98%E7%A3%A8%E7%9A%AE%23) `288.8K 🔥` `NEW`
1. [谢贤遗嘱附带多项约束条款 (Xie Xian’s will comes with many binding clauses)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E9%81%97%E5%98%B1%E9%99%84%E5%B8%A6%E5%A4%9A%E9%A1%B9%E7%BA%A6%E6%9D%9F%E6%9D%A1%E6%AC%BE%23) `287.0K 🔥` `NEW`
1. [王楚钦的名字是中国男乒的底气](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%9A%84%E5%90%8D%E5%AD%97%E6%98%AF%E4%B8%AD%E5%9B%BD%E7%94%B7%E4%B9%92%E7%9A%84%E5%BA%95%E6%B0%94%23) `285.8K 🔥` `NEW`
1. [鹿晗给粉丝评论](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%BB%99%E7%B2%89%E4%B8%9D%E8%AF%84%E8%AE%BA%23) `282.6K 🔥` `NEW`
1. [滔搏暴力打折甩卖耐克库存](https://s.weibo.com/weibo?q=%23%E6%BB%94%E6%90%8F%E6%9A%B4%E5%8A%9B%E6%89%93%E6%8A%98%E7%94%A9%E5%8D%96%E8%80%90%E5%85%8B%E5%BA%93%E5%AD%98%23) `282.5K 🔥` `NEW`
1. [王鹤棣谢景行杀青照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%B0%A2%E6%99%AF%E8%A1%8C%E6%9D%80%E9%9D%92%E7%85%A7%23) `229.0K 🔥` `NEW`
1. [三星折叠三旗舰齐发](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E6%8A%98%E5%8F%A0%E4%B8%89%E6%97%97%E8%88%B0%E9%BD%90%E5%8F%91%23) `200.1K 🔥` `NEW`
1. [恋陪剧本杀掐脖滴蜡擦边尺度惊人](https://s.weibo.com/weibo?q=%23%E6%81%8B%E9%99%AA%E5%89%A7%E6%9C%AC%E6%9D%80%E6%8E%90%E8%84%96%E6%BB%B4%E8%9C%A1%E6%93%A6%E8%BE%B9%E5%B0%BA%E5%BA%A6%E6%83%8A%E4%BA%BA%23) `191.7K 🔥` `NEW`
1. [张月帮忙寻狗最后发现寻的是自己](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%B8%AE%E5%BF%99%E5%AF%BB%E7%8B%97%E6%9C%80%E5%90%8E%E5%8F%91%E7%8E%B0%E5%AF%BB%E7%9A%84%E6%98%AF%E8%87%AA%E5%B7%B1%23) `184.3K 🔥` `NEW`
1. [梁文锋四小时投资人会议实录](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E9%94%8B%E5%9B%9B%E5%B0%8F%E6%97%B6%E6%8A%95%E8%B5%84%E4%BA%BA%E4%BC%9A%E8%AE%AE%E5%AE%9E%E5%BD%95%23) `180.0K 🔥` `NEW`
1. [刘畊宏晒13岁的小泡芙](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%95%8A%E5%AE%8F%E6%99%9213%E5%B2%81%E7%9A%84%E5%B0%8F%E6%B3%A1%E8%8A%99%23) `177.3K 🔥` `NEW`
1. [为什么年轻人戒不掉熬夜 (Why can’t young people stop staying up late?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%88%92%E4%B8%8D%E6%8E%89%E7%86%AC%E5%A4%9C%23) `176.6K 🔥` `NEW`
1. [吴克群要收250吨西瓜送往全国各地](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%85%8B%E7%BE%A4%E8%A6%81%E6%94%B6250%E5%90%A8%E8%A5%BF%E7%93%9C%E9%80%81%E5%BE%80%E5%85%A8%E5%9B%BD%E5%90%84%E5%9C%B0%23) `173.9K 🔥` `NEW`
1. [TF四代五公 青岛](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%20%E9%9D%92%E5%B2%9B%23) `171.3K 🔥` `NEW`
1. [世子妃终于要有名分了](https://s.weibo.com/weibo?q=%23%E4%B8%96%E5%AD%90%E5%A6%83%E7%BB%88%E4%BA%8E%E8%A6%81%E6%9C%89%E5%90%8D%E5%88%86%E4%BA%86%23) `169.9K 🔥` `NEW`
1. [三星折叠屏国行售价公布](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E6%8A%98%E5%8F%A0%E5%B1%8F%E5%9B%BD%E8%A1%8C%E5%94%AE%E4%BB%B7%E5%85%AC%E5%B8%83%23) `169.1K 🔥` `NEW`
1. [男子卧推身前放惨叫猪女子一掌打飞](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8D%A7%E6%8E%A8%E8%BA%AB%E5%89%8D%E6%94%BE%E6%83%A8%E5%8F%AB%E7%8C%AA%E5%A5%B3%E5%AD%90%E4%B8%80%E6%8E%8C%E6%89%93%E9%A3%9E%23) `167.8K 🔥` `NEW`
1. [电力大牛5连板](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%8A%9B%E5%A4%A7%E7%89%9B5%E8%BF%9E%E6%9D%BF%23) `167.6K 🔥` `NEW`
1. [莲花楼长尾效应](https://s.weibo.com/weibo?q=%23%E8%8E%B2%E8%8A%B1%E6%A5%BC%E9%95%BF%E5%B0%BE%E6%95%88%E5%BA%94%23) `166.7K 🔥` `NEW`
1. [谁敢认这是娜扎](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%95%A2%E8%AE%A4%E8%BF%99%E6%98%AF%E5%A8%9C%E6%89%8E%23) `165.6K 🔥` `NEW`
1. [王楚然美得像游戏CG](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%BE%8E%E5%BE%97%E5%83%8F%E6%B8%B8%E6%88%8FCG%23) `164.0K 🔥` `NEW`
1. [会计圈有自己的盗墓笔记 (The accounting circle has its own tomb robbing notes)](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E8%AE%A1%E5%9C%88%E6%9C%89%E8%87%AA%E5%B7%B1%E7%9A%84%E7%9B%97%E5%A2%93%E7%AC%94%E8%AE%B0%23) `163.7K 🔥` `NEW`
1. [田曦薇走路粉天菜](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%B5%B0%E8%B7%AF%E7%B2%89%E5%A4%A9%E8%8F%9C%23) `162.8K 🔥` `NEW`
1. [阿根廷队官方质疑罗德里获世界杯金球](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E5%AE%98%E6%96%B9%E8%B4%A8%E7%96%91%E7%BD%97%E5%BE%B7%E9%87%8C%E8%8E%B7%E4%B8%96%E7%95%8C%E6%9D%AF%E9%87%91%E7%90%83%23) `161.5K 🔥` `NEW`
1. [职场上工作能力强的具体表现](https://s.weibo.com/weibo?q=%23%E8%81%8C%E5%9C%BA%E4%B8%8A%E5%B7%A5%E4%BD%9C%E8%83%BD%E5%8A%9B%E5%BC%BA%E7%9A%84%E5%85%B7%E4%BD%93%E8%A1%A8%E7%8E%B0%23) `161.2K 🔥` `NEW`
1. [主播虐狗摆拍引流骗250多万买豪车](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%92%AD%E8%99%90%E7%8B%97%E6%91%86%E6%8B%8D%E5%BC%95%E6%B5%81%E9%AA%97250%E5%A4%9A%E4%B8%87%E4%B9%B0%E8%B1%AA%E8%BD%A6%23) `159.3K 🔥` `NEW`
1. [詹姆斯欧文有望再度联手](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E6%AC%A7%E6%96%87%E6%9C%89%E6%9C%9B%E5%86%8D%E5%BA%A6%E8%81%94%E6%89%8B%23) `158.8K 🔥` `NEW`
1. [柳智敏机场](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E6%9C%BA%E5%9C%BA%23) `157.9K 🔥` `NEW`
1. [老公坐着扭扭车陪妻子减肥](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%85%AC%E5%9D%90%E7%9D%80%E6%89%AD%E6%89%AD%E8%BD%A6%E9%99%AA%E5%A6%BB%E5%AD%90%E5%87%8F%E8%82%A5%23) `156.9K 🔥` `NEW`
1. [上班最轻松的其实不是摸鱼](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E6%9C%80%E8%BD%BB%E6%9D%BE%E7%9A%84%E5%85%B6%E5%AE%9E%E4%B8%8D%E6%98%AF%E6%91%B8%E9%B1%BC%23) `156.8K 🔥` `NEW`
1. [那英成张凌赫王楚然爱情保安了](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E6%88%90%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%88%B1%E6%83%85%E4%BF%9D%E5%AE%89%E4%BA%86%23) `155.9K 🔥` `NEW`
1. [鞠婧祎万花世界孝服路透 (Ju Jingyi's filial piety in the world of flowers Reuters)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E5%AD%9D%E6%9C%8D%E8%B7%AF%E9%80%8F%23) `155.0K 🔥` `NEW`
1. [中菲关系已在十字路口](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E8%8F%B2%E5%85%B3%E7%B3%BB%E5%B7%B2%E5%9C%A8%E5%8D%81%E5%AD%97%E8%B7%AF%E5%8F%A3%23) `154.1K 🔥` `NEW`
1. [2026数字丝路发展论坛](https://s.weibo.com/weibo?q=%232026%E6%95%B0%E5%AD%97%E4%B8%9D%E8%B7%AF%E5%8F%91%E5%B1%95%E8%AE%BA%E5%9D%9B%23) `816.1K 🔥`
1. [一中国籍男童在日本被撞身亡](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AD%E5%9B%BD%E7%B1%8D%E7%94%B7%E7%AB%A5%E5%9C%A8%E6%97%A5%E6%9C%AC%E8%A2%AB%E6%92%9E%E8%BA%AB%E4%BA%A1%23) `188.9K 🔥`
1. [突然讨厌朋友的原因找到了 (I found the reason why I suddenly hate my friends)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E8%AE%A8%E5%8E%8C%E6%9C%8B%E5%8F%8B%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `366.2K 🔥` `-49%`
1. [A股行情](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%A1%8C%E6%83%85%23) `184.6K 🔥` `-53%`
1. [Priest发毕业证 (Priest issues diploma)](https://s.weibo.com/weibo?q=%23Priest%E5%8F%91%E6%AF%95%E4%B8%9A%E8%AF%81%23) `169.8K 🔥` `-75%`
1. [谁发明的酒店半透明玻璃浴室 (Who invented the translucent glass bathroom for hotels?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%8F%91%E6%98%8E%E7%9A%84%E9%85%92%E5%BA%97%E5%8D%8A%E9%80%8F%E6%98%8E%E7%8E%BB%E7%92%83%E6%B5%B4%E5%AE%A4%23) `164.8K 🔥` `-65%`

Updated at 2026-07-23 11:47:45

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
