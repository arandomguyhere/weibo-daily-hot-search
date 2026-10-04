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

1. [张展硕无缘亚运会MVP引争议](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95%E6%97%A0%E7%BC%98%E4%BA%9A%E8%BF%90%E4%BC%9AMVP%E5%BC%95%E4%BA%89%E8%AE%AE%23) `1.2M 🔥` `NEW`
1. [余承东 余总转发文案](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%20%E4%BD%99%E6%80%BB%E8%BD%AC%E5%8F%91%E6%96%87%E6%A1%88%23) `851.0K 🔥` `NEW`
1. [用九宫格打开亚运赛场的中国红](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%B9%9D%E5%AE%AB%E6%A0%BC%E6%89%93%E5%BC%80%E4%BA%9A%E8%BF%90%E8%B5%9B%E5%9C%BA%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%BA%A2%23) `690.8K 🔥` `NEW`
1. [韩国网友不满亚运夺金免兵役](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E4%B8%8D%E6%BB%A1%E4%BA%9A%E8%BF%90%E5%A4%BA%E9%87%91%E5%85%8D%E5%85%B5%E5%BD%B9%23) `542.4K 🔥` `NEW`
1. [萨巴伦卡爆冷出局](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E7%88%86%E5%86%B7%E5%87%BA%E5%B1%80%23) `398.1K 🔥` `NEW`
1. [平台回应慧慧饱饱被禁止关注](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E5%9B%9E%E5%BA%94%E6%85%A7%E6%85%A7%E9%A5%B1%E9%A5%B1%E8%A2%AB%E7%A6%81%E6%AD%A2%E5%85%B3%E6%B3%A8%23) `363.4K 🔥` `NEW`
1. [砍机长副驾驶曾发3000条仇女消息](https://s.weibo.com/weibo?q=%23%E7%A0%8D%E6%9C%BA%E9%95%BF%E5%89%AF%E9%A9%BE%E9%A9%B6%E6%9B%BE%E5%8F%913000%E6%9D%A1%E4%BB%87%E5%A5%B3%E6%B6%88%E6%81%AF%23) `318.2K 🔥` `NEW`
1. [张家齐妈妈害怕张家齐不要她了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E5%AE%B3%E6%80%95%E5%BC%A0%E5%AE%B6%E9%BD%90%E4%B8%8D%E8%A6%81%E5%A5%B9%E4%BA%86%23) `316.1K 🔥` `NEW`
1. [美国小女孩外出玩耍直接带回一只猞猁](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B0%8F%E5%A5%B3%E5%AD%A9%E5%A4%96%E5%87%BA%E7%8E%A9%E8%80%8D%E7%9B%B4%E6%8E%A5%E5%B8%A6%E5%9B%9E%E4%B8%80%E5%8F%AA%E7%8C%9E%E7%8C%81%23) `277.3K 🔥` `NEW`
1. [韩国U23国脚称金牌不重要只为免兵役](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BDU23%E5%9B%BD%E8%84%9A%E7%A7%B0%E9%87%91%E7%89%8C%E4%B8%8D%E9%87%8D%E8%A6%81%E5%8F%AA%E4%B8%BA%E5%85%8D%E5%85%B5%E5%BD%B9%23) `272.9K 🔥` `NEW`
1. [崔晋 李勒优](https://s.weibo.com/weibo?q=%23%E5%B4%94%E6%99%8B%20%E6%9D%8E%E5%8B%92%E4%BC%98%23) `270.1K 🔥` `NEW`
1. [网红慧慧饱饱被封号](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%85%A7%E6%85%A7%E9%A5%B1%E9%A5%B1%E8%A2%AB%E5%B0%81%E5%8F%B7%23) `269.5K 🔥` `NEW`
1. [疑似张元英粉丝群聊天记录曝光](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%BC%A0%E5%85%83%E8%8B%B1%E7%B2%89%E4%B8%9D%E7%BE%A4%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E6%9B%9D%E5%85%89%23) `267.2K 🔥` `NEW`
1. [蔡天凤去世当日正带准买家看楼](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%A4%A9%E5%87%A4%E5%8E%BB%E4%B8%96%E5%BD%93%E6%97%A5%E6%AD%A3%E5%B8%A6%E5%87%86%E4%B9%B0%E5%AE%B6%E7%9C%8B%E6%A5%BC%23) `261.2K 🔥` `NEW`
1. [崔晋妈妈说白头发是养李勒优长的](https://s.weibo.com/weibo?q=%23%E5%B4%94%E6%99%8B%E5%A6%88%E5%A6%88%E8%AF%B4%E7%99%BD%E5%A4%B4%E5%8F%91%E6%98%AF%E5%85%BB%E6%9D%8E%E5%8B%92%E4%BC%98%E9%95%BF%E7%9A%84%23) `260.7K 🔥` `NEW`
1. [抖音回应慧慧饱饱被禁止关注](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E5%9B%9E%E5%BA%94%E6%85%A7%E6%85%A7%E9%A5%B1%E9%A5%B1%E8%A2%AB%E7%A6%81%E6%AD%A2%E5%85%B3%E6%B3%A8%23) `259.3K 🔥` `NEW`
1. [李勒优曾经被称为命最好的云南女孩](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E6%9B%BE%E7%BB%8F%E8%A2%AB%E7%A7%B0%E4%B8%BA%E5%91%BD%E6%9C%80%E5%A5%BD%E7%9A%84%E4%BA%91%E5%8D%97%E5%A5%B3%E5%AD%A9%23) `250.4K 🔥` `NEW`
1. [一国两制台湾方案在岛内引热议](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%9B%BD%E4%B8%A4%E5%88%B6%E5%8F%B0%E6%B9%BE%E6%96%B9%E6%A1%88%E5%9C%A8%E5%B2%9B%E5%86%85%E5%BC%95%E7%83%AD%E8%AE%AE%23) `233.0K 🔥` `NEW`
1. [提到张家齐爸爸锤娜丽莎气懵多次](https://s.weibo.com/weibo?q=%23%E6%8F%90%E5%88%B0%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%88%B8%E7%88%B8%E9%94%A4%E5%A8%9C%E4%B8%BD%E8%8E%8E%E6%B0%94%E6%87%B5%E5%A4%9A%E6%AC%A1%23) `216.8K 🔥` `NEW`
1. [刘宇宁跟小沈阳说她很难唱](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%B7%9F%E5%B0%8F%E6%B2%88%E9%98%B3%E8%AF%B4%E5%A5%B9%E5%BE%88%E9%9A%BE%E5%94%B1%23) `174.0K 🔥` `NEW`
1. [陈冠希问王嘉尔要300块回香港](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%86%A0%E5%B8%8C%E9%97%AE%E7%8E%8B%E5%98%89%E5%B0%94%E8%A6%81300%E5%9D%97%E5%9B%9E%E9%A6%99%E6%B8%AF%23) `173.4K 🔥` `NEW`
1. [牛奶倒进大海还得葱省大神回答](https://s.weibo.com/weibo?q=%23%E7%89%9B%E5%A5%B6%E5%80%92%E8%BF%9B%E5%A4%A7%E6%B5%B7%E8%BF%98%E5%BE%97%E8%91%B1%E7%9C%81%E5%A4%A7%E7%A5%9E%E5%9B%9E%E7%AD%94%23) `171.5K 🔥` `NEW`
1. [上海油罐想开花了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%B2%B9%E7%BD%90%E6%83%B3%E5%BC%80%E8%8A%B1%E4%BA%86%23) `169.9K 🔥` `NEW`
1. [孙德荣曝SHE不能合体的原因](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%BE%B7%E8%8D%A3%E6%9B%9DSHE%E4%B8%8D%E8%83%BD%E5%90%88%E4%BD%93%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `166.1K 🔥` `NEW`
1. [丁禹兮送粉丝20g黄金](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E9%80%81%E7%B2%89%E4%B8%9D20g%E9%BB%84%E9%87%91%23) `164.9K 🔥` `NEW`
1. [张元英数据造假](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E6%95%B0%E6%8D%AE%E9%80%A0%E5%81%87%23) `164.2K 🔥` `NEW`
1. [国庆没有出去旅游的原因](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E6%B2%A1%E6%9C%89%E5%87%BA%E5%8E%BB%E6%97%85%E6%B8%B8%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `151.3K 🔥` `NEW`
1. [上海四十年公寓续期或缴地价七成](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9B%9B%E5%8D%81%E5%B9%B4%E5%85%AC%E5%AF%93%E7%BB%AD%E6%9C%9F%E6%88%96%E7%BC%B4%E5%9C%B0%E4%BB%B7%E4%B8%83%E6%88%90%23) `143.4K 🔥` `NEW`
1. [国乒单打历史胜利排名](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%8D%95%E6%89%93%E5%8E%86%E5%8F%B2%E8%83%9C%E5%88%A9%E6%8E%92%E5%90%8D%23) `137.6K 🔥` `NEW`
1. [Angelababy迪奥待遇](https://s.weibo.com/weibo?q=%23Angelababy%E8%BF%AA%E5%A5%A5%E5%BE%85%E9%81%87%23) `137.5K 🔥` `NEW`
1. [原神](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%23) `137.5K 🔥` `NEW`
1. [韩议员考虑废除亚运金牌免兵役](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%AE%AE%E5%91%98%E8%80%83%E8%99%91%E5%BA%9F%E9%99%A4%E4%BA%9A%E8%BF%90%E9%87%91%E7%89%8C%E5%85%8D%E5%85%B5%E5%BD%B9%23) `137.5K 🔥` `NEW`
1. [北京舞蹈学院国庆演出](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E8%88%9E%E8%B9%88%E5%AD%A6%E9%99%A2%E5%9B%BD%E5%BA%86%E6%BC%94%E5%87%BA%23) `137.5K 🔥` `NEW`
1. [黄友政3比2林钟勋](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%8F%8B%E6%94%BF3%E6%AF%942%E6%9E%97%E9%92%9F%E5%8B%8B%23) `137.5K 🔥` `NEW`
1. [72岁赵雅芝现身西湖断桥状态抗打](https://s.weibo.com/weibo?q=%2372%E5%B2%81%E8%B5%B5%E9%9B%85%E8%8A%9D%E7%8E%B0%E8%BA%AB%E8%A5%BF%E6%B9%96%E6%96%AD%E6%A1%A5%E7%8A%B6%E6%80%81%E6%8A%97%E6%89%93%23) `137.5K 🔥` `NEW`
1. [亚运会最有价值运动员](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%9C%80%E6%9C%89%E4%BB%B7%E5%80%BC%E8%BF%90%E5%8A%A8%E5%91%98%23) `135.1K 🔥` `NEW`
1. [原来好吃的代价是失去厚度](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A5%BD%E5%90%83%E7%9A%84%E4%BB%A3%E4%BB%B7%E6%98%AF%E5%A4%B1%E5%8E%BB%E5%8E%9A%E5%BA%A6%23) `133.9K 🔥` `NEW`
1. [崔晋李勒优时间线](https://s.weibo.com/weibo?q=%23%E5%B4%94%E6%99%8B%E6%9D%8E%E5%8B%92%E4%BC%98%E6%97%B6%E9%97%B4%E7%BA%BF%23) `133.3K 🔥` `NEW`
1. [中网女单前二种子出局](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BD%91%E5%A5%B3%E5%8D%95%E5%89%8D%E4%BA%8C%E7%A7%8D%E5%AD%90%E5%87%BA%E5%B1%80%23) `132.5K 🔥` `NEW`
1. [百慕大飞波士顿失联飞机残骸找到](https://s.weibo.com/weibo?q=%23%E7%99%BE%E6%85%95%E5%A4%A7%E9%A3%9E%E6%B3%A2%E5%A3%AB%E9%A1%BF%E5%A4%B1%E8%81%94%E9%A3%9E%E6%9C%BA%E6%AE%8B%E9%AA%B8%E6%89%BE%E5%88%B0%23) `132.4K 🔥` `NEW`
1. [日本向美国提出抗议](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%90%91%E7%BE%8E%E5%9B%BD%E6%8F%90%E5%87%BA%E6%8A%97%E8%AE%AE%23) `131.2K 🔥` `NEW`
1. [MVP该看金牌数量还是单项突破](https://s.weibo.com/weibo?q=%23MVP%E8%AF%A5%E7%9C%8B%E9%87%91%E7%89%8C%E6%95%B0%E9%87%8F%E8%BF%98%E6%98%AF%E5%8D%95%E9%A1%B9%E7%AA%81%E7%A0%B4%23) `129.1K 🔥` `NEW`
1. [于子迪回应亚运会女子MVP](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E5%AD%90%E8%BF%AA%E5%9B%9E%E5%BA%94%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%A5%B3%E5%AD%90MVP%23) `123.5K 🔥` `NEW`
1. [中国化妆术再一次的震惊了外国网友](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8C%96%E5%A6%86%E6%9C%AF%E5%86%8D%E4%B8%80%E6%AC%A1%E7%9A%84%E9%9C%87%E6%83%8A%E4%BA%86%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B%23) `119.5K 🔥` `NEW`
1. [纪梵希大秀报道C位](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E6%A2%B5%E5%B8%8C%E5%A4%A7%E7%A7%80%E6%8A%A5%E9%81%93C%E4%BD%8D%23) `118.3K 🔥` `NEW`
1. [无可替代](https://s.weibo.com/weibo?q=%23%E6%97%A0%E5%8F%AF%E6%9B%BF%E4%BB%A3%23) `116.5K 🔥` `NEW`
1. [张家齐见到妈妈第一句话](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%A7%81%E5%88%B0%E5%A6%88%E5%A6%88%E7%AC%AC%E4%B8%80%E5%8F%A5%E8%AF%9D%23) `108.8K 🔥` `NEW`
1. [郭晓东淘汰颜安倒二姚琛倒一](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E4%B8%9C%E6%B7%98%E6%B1%B0%E9%A2%9C%E5%AE%89%E5%80%92%E4%BA%8C%E5%A7%9A%E7%90%9B%E5%80%92%E4%B8%80%23) `107.7K 🔥` `NEW`
1. [杜翠雀虽然是匪首却已经不清白了](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E7%BF%A0%E9%9B%80%E8%99%BD%E7%84%B6%E6%98%AF%E5%8C%AA%E9%A6%96%E5%8D%B4%E5%B7%B2%E7%BB%8F%E4%B8%8D%E6%B8%85%E7%99%BD%E4%BA%86%23) `135.5K 🔥` `+43%`
1. [徐良演唱会救活了即将倒闭的面包厂](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E6%95%91%E6%B4%BB%E4%BA%86%E5%8D%B3%E5%B0%86%E5%80%92%E9%97%AD%E7%9A%84%E9%9D%A2%E5%8C%85%E5%8E%82%23) `168.2K 🔥` `-75%`

Updated at 2026-10-04 14:22:15

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
