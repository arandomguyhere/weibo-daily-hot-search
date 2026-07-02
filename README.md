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

1. [西安赛格回应与坠楼者纠纷详情 (Xi'an SEG responds to details of the dispute with the person who fell from the building)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E8%B5%9B%E6%A0%BC%E5%9B%9E%E5%BA%94%E4%B8%8E%E5%9D%A0%E6%A5%BC%E8%80%85%E7%BA%A0%E7%BA%B7%E8%AF%A6%E6%83%85%23) `2.9M 🔥` `NEW`
1. [国家发改委赴小米集团开展工作调研](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8F%91%E6%94%B9%E5%A7%94%E8%B5%B4%E5%B0%8F%E7%B1%B3%E9%9B%86%E5%9B%A2%E5%BC%80%E5%B1%95%E5%B7%A5%E4%BD%9C%E8%B0%83%E7%A0%94%23) `1.1M 🔥` `NEW`
1. [我国发展动能持续迸发](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%8F%91%E5%B1%95%E5%8A%A8%E8%83%BD%E6%8C%81%E7%BB%AD%E8%BF%B8%E5%8F%91%23) `826.3K 🔥` `NEW`
1. [小鹏MONA L03今晚预售](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONA%20L03%E4%BB%8A%E6%99%9A%E9%A2%84%E5%94%AE%23) `824.7K 🔥` `NEW`
1. [山航很着急为您服务哈](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%88%AA%E5%BE%88%E7%9D%80%E6%80%A5%E4%B8%BA%E6%82%A8%E6%9C%8D%E5%8A%A1%E5%93%88%23) `824.6K 🔥` `NEW`
1. [熬夜晕倒后尿失禁了](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E6%99%95%E5%80%92%E5%90%8E%E5%B0%BF%E5%A4%B1%E7%A6%81%E4%BA%86%23) `763.8K 🔥` `NEW`
1. [勒布伦祝贺王楚钦孙颖莎](https://s.weibo.com/weibo?q=%23%E5%8B%92%E5%B8%83%E4%BC%A6%E7%A5%9D%E8%B4%BA%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%23) `412.3K 🔥` `NEW`
1. [白鹿十周年官方周边](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8D%81%E5%91%A8%E5%B9%B4%E5%AE%98%E6%96%B9%E5%91%A8%E8%BE%B9%23) `398.7K 🔥` `NEW`
1. [佛得角首次世界杯就进16强](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%A6%96%E6%AC%A1%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B0%B1%E8%BF%9B16%E5%BC%BA%23) `387.3K 🔥` `NEW`
1. [爸爸揍儿子的视频火了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E6%8F%8D%E5%84%BF%E5%AD%90%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `379.6K 🔥` `NEW`
1. [韩红基金会发布情况说明 (Han Hong Foundation releases statement)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E5%8F%91%E5%B8%83%E6%83%85%E5%86%B5%E8%AF%B4%E6%98%8E%23) `371.9K 🔥` `NEW`
1. [男子在柬埔寨被两次转卖惨不忍睹](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E6%9F%AC%E5%9F%94%E5%AF%A8%E8%A2%AB%E4%B8%A4%E6%AC%A1%E8%BD%AC%E5%8D%96%E6%83%A8%E4%B8%8D%E5%BF%8D%E7%9D%B9%23) `369.8K 🔥` `NEW`
1. [时代峰峻回应时代少年团花字](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9B%9E%E5%BA%94%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%8A%B1%E5%AD%97%23) `363.3K 🔥` `NEW`
1. [小鹏MONAL03对标30万级开发](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONAL03%E5%AF%B9%E6%A0%8730%E4%B8%87%E7%BA%A7%E5%BC%80%E5%8F%91%23) `362.0K 🔥` `NEW`
1. [非农数据](https://s.weibo.com/weibo?q=%23%E9%9D%9E%E5%86%9C%E6%95%B0%E6%8D%AE%23) `360.2K 🔥` `NEW`
1. [奇文反超](https://s.weibo.com/weibo?q=%23%E5%A5%87%E6%96%87%E5%8F%8D%E8%B6%85%23) `358.8K 🔥` `NEW`
1. [王俊凯你要不回头看看伴舞](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%BD%A0%E8%A6%81%E4%B8%8D%E5%9B%9E%E5%A4%B4%E7%9C%8B%E7%9C%8B%E4%BC%B4%E8%88%9E%23) `350.5K 🔥` `NEW`
1. [徐明浩韩国打歌舞台唱中文](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%98%8E%E6%B5%A9%E9%9F%A9%E5%9B%BD%E6%89%93%E6%AD%8C%E8%88%9E%E5%8F%B0%E5%94%B1%E4%B8%AD%E6%96%87%23) `350.0K 🔥` `NEW`
1. [影视飓风员工下岛第一件事暴揍Tim](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E5%91%98%E5%B7%A5%E4%B8%8B%E5%B2%9B%E7%AC%AC%E4%B8%80%E4%BB%B6%E4%BA%8B%E6%9A%B4%E6%8F%8DTim%23) `345.6K 🔥` `NEW`
1. [小鹏MONAL03价格](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONAL03%E4%BB%B7%E6%A0%BC%23) `342.9K 🔥` `NEW`
1. [完美世界 石昊 (Perfect World Shi Hao)](https://s.weibo.com/weibo?q=%23%E5%AE%8C%E7%BE%8E%E4%B8%96%E7%95%8C%20%E7%9F%B3%E6%98%8A%23) `341.3K 🔥` `NEW`
1. [宋亚轩刘耀文合唱BillieJean](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%88%98%E8%80%80%E6%96%87%E5%90%88%E5%94%B1BillieJean%23) `340.8K 🔥` `NEW`
1. [阚清子送了潇洒小姐团钻石](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E9%80%81%E4%BA%86%E6%BD%87%E6%B4%92%E5%B0%8F%E5%A7%90%E5%9B%A2%E9%92%BB%E7%9F%B3%23) `338.5K 🔥` `NEW`
1. [小鹏发布会](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8F%E5%8F%91%E5%B8%83%E4%BC%9A%23) `335.9K 🔥` `NEW`
1. [赛格商场无权单方面处罚商户](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E6%A0%BC%E5%95%86%E5%9C%BA%E6%97%A0%E6%9D%83%E5%8D%95%E6%96%B9%E9%9D%A2%E5%A4%84%E7%BD%9A%E5%95%86%E6%88%B7%23) `331.2K 🔥` `NEW`
1. [女子人在广东收到上海亚朵开房订单](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%BA%E5%9C%A8%E5%B9%BF%E4%B8%9C%E6%94%B6%E5%88%B0%E4%B8%8A%E6%B5%B7%E4%BA%9A%E6%9C%B5%E5%BC%80%E6%88%BF%E8%AE%A2%E5%8D%95%23) `326.9K 🔥` `NEW`
1. [官方通报月入两万被登记困难职工](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%9C%88%E5%85%A5%E4%B8%A4%E4%B8%87%E8%A2%AB%E7%99%BB%E8%AE%B0%E5%9B%B0%E9%9A%BE%E8%81%8C%E5%B7%A5%23) `326.1K 🔥` `NEW`
1. [茉莉奶白全国门店超2400家](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E5%85%A8%E5%9B%BD%E9%97%A8%E5%BA%97%E8%B6%852400%E5%AE%B6%23) `323.6K 🔥` `NEW`
1. [桂瑞 排名](https://s.weibo.com/weibo?q=%23%E6%A1%82%E7%91%9E%20%E6%8E%92%E5%90%8D%23) `321.4K 🔥` `NEW`
1. [野狗骨头拍出了宋威龙的死角](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%8B%8D%E5%87%BA%E4%BA%86%E5%AE%8B%E5%A8%81%E9%BE%99%E7%9A%84%E6%AD%BB%E8%A7%92%23) `320.0K 🔥` `NEW`
1. [印度男子提油桶过火坑摔倒烧伤身亡 (Indian man carrying oil drum across fire pit fell and died of burns)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%90%E6%8F%90%E6%B2%B9%E6%A1%B6%E8%BF%87%E7%81%AB%E5%9D%91%E6%91%94%E5%80%92%E7%83%A7%E4%BC%A4%E8%BA%AB%E4%BA%A1%23) `318.3K 🔥` `NEW`
1. [王橹杰突围2树洞](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%AA%81%E5%9B%B42%E6%A0%91%E6%B4%9E%23) `316.9K 🔥` `NEW`
1. [女童被男子抱起抛入河中被路人救起](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%AB%A5%E8%A2%AB%E7%94%B7%E5%AD%90%E6%8A%B1%E8%B5%B7%E6%8A%9B%E5%85%A5%E6%B2%B3%E4%B8%AD%E8%A2%AB%E8%B7%AF%E4%BA%BA%E6%95%91%E8%B5%B7%23) `312.4K 🔥` `NEW`
1. [papi酱人生排序的含金量](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E4%BA%BA%E7%94%9F%E6%8E%92%E5%BA%8F%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `312.3K 🔥` `NEW`
1. [小县城的瑜伽馆审美](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8E%BF%E5%9F%8E%E7%9A%84%E7%91%9C%E4%BC%BD%E9%A6%86%E5%AE%A1%E7%BE%8E%23) `387.6K 🔥` `+75%`
1. [田曦薇虞书欣白鹿陈都灵打戏对比](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%99%BD%E9%B9%BF%E9%99%88%E9%83%BD%E7%81%B5%E6%89%93%E6%88%8F%E5%AF%B9%E6%AF%94%23) `384.1K 🔥` `+74%`
1. [百花杀灿如繁星野狗骨头对打](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E5%AF%B9%E6%89%93%23) `384.0K 🔥` `+88%`
1. [陈昊森承认与兰西雅恋爱](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%8A%E6%A3%AE%E6%89%BF%E8%AE%A4%E4%B8%8E%E5%85%B0%E8%A5%BF%E9%9B%85%E6%81%8B%E7%88%B1%23) `378.5K 🔥` `+63%`
1. [办公室已经三天没人开口说话了](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E5%85%AC%E5%AE%A4%E5%B7%B2%E7%BB%8F%E4%B8%89%E5%A4%A9%E6%B2%A1%E4%BA%BA%E5%BC%80%E5%8F%A3%E8%AF%B4%E8%AF%9D%E4%BA%86%23) `376.3K 🔥` `+62%`
1. [LV 欺负古代人不会注册商标](https://s.weibo.com/weibo?q=%23LV%20%E6%AC%BA%E8%B4%9F%E5%8F%A4%E4%BB%A3%E4%BA%BA%E4%B8%8D%E4%BC%9A%E6%B3%A8%E5%86%8C%E5%95%86%E6%A0%87%23) `374.8K 🔥` `+64%`
1. [茉莉奶白有点不舒服了 (Jasmine Milk White is feeling a little uncomfortable)](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E6%9C%89%E7%82%B9%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `364.8K 🔥` `+59%`
1. [LV起诉茉莉奶白判赔1030万 (LV sues Jasmine Milk and awards 10.3 million yuan in damages)](https://s.weibo.com/weibo?q=%23LV%E8%B5%B7%E8%AF%89%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E5%88%A4%E8%B5%941030%E4%B8%87%23) `355.5K 🔥` `+31%`
1. [LV你身后空无一人](https://s.weibo.com/weibo?q=%23LV%E4%BD%A0%E8%BA%AB%E5%90%8E%E7%A9%BA%E6%97%A0%E4%B8%80%E4%BA%BA%23) `353.9K 🔥` `+43%`
1. [杨紫全家福](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%85%A8%E5%AE%B6%E7%A6%8F%23) `348.0K 🔥` `+53%`
1. [王楚然咳嗽一直不好的原因](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%92%B3%E5%97%BD%E4%B8%80%E7%9B%B4%E4%B8%8D%E5%A5%BD%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `334.4K 🔥` `+54%`
1. [香港名媛不帮郭富城方媛P图被骂](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%90%8D%E5%AA%9B%E4%B8%8D%E5%B8%AE%E9%83%AD%E5%AF%8C%E5%9F%8E%E6%96%B9%E5%AA%9BP%E5%9B%BE%E8%A2%AB%E9%AA%82%23) `332.9K 🔥` `+44%`
1. [保剑锋黄慧颐已达成和解](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%89%91%E9%94%8B%E9%BB%84%E6%85%A7%E9%A2%90%E5%B7%B2%E8%BE%BE%E6%88%90%E5%92%8C%E8%A7%A3%23) `329.4K 🔥` `+46%`
1. [王俊凯工作室疑似手滑](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%96%91%E4%BC%BC%E6%89%8B%E6%BB%91%23) `314.3K 🔥` `+31%`
1. [野狗骨头定档](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E5%AE%9A%E6%A1%A3%23) `369.0K 🔥`
1. [影视飓风 直播事故](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%20%E7%9B%B4%E6%92%AD%E4%BA%8B%E6%95%85%23) `366.8K 🔥`
1. [月入过万年薪也才12万 (Monthly income exceeds 10,000, but annual salary is only 120,000)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E5%85%A5%E8%BF%87%E4%B8%87%E5%B9%B4%E8%96%AA%E4%B9%9F%E6%89%8D12%E4%B8%87%23) `353.1K 🔥`
1. [茉莉奶白换彩色头像 (Jasmine milk white to color avatar)](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E6%8D%A2%E5%BD%A9%E8%89%B2%E5%A4%B4%E5%83%8F%23) `382.2K 🔥` `-65%`

Updated at 2026-07-02 21:12:50

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
