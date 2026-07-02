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

1. [LV起诉茉莉奶白判赔1030万 (LV sues Jasmine Milk and awards 10.3 million yuan in damages)](https://s.weibo.com/weibo?q=%23LV%E8%B5%B7%E8%AF%89%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E5%88%A4%E8%B5%941030%E4%B8%87%23) `6.1M 🔥` `NEW`
1. [半导体](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%AF%BC%E4%BD%93%23) `1.5M 🔥` `NEW`
1. [台风暴雨在路上了](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E6%9A%B4%E9%9B%A8%E5%9C%A8%E8%B7%AF%E4%B8%8A%E4%BA%86%23) `1.2M 🔥` `NEW`
1. [月入过万年薪也才12万](https://s.weibo.com/weibo?q=%23%E6%9C%88%E5%85%A5%E8%BF%87%E4%B8%87%E5%B9%B4%E8%96%AA%E4%B9%9F%E6%89%8D12%E4%B8%87%23) `1.2M 🔥` `NEW`
1. [西安商户坠亡前收到不再续约通知](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E5%95%86%E6%88%B7%E5%9D%A0%E4%BA%A1%E5%89%8D%E6%94%B6%E5%88%B0%E4%B8%8D%E5%86%8D%E7%BB%AD%E7%BA%A6%E9%80%9A%E7%9F%A5%23) `1.0M 🔥` `NEW`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `664.1K 🔥` `NEW`
1. [Tim和中国boy疑似打架](https://s.weibo.com/weibo?q=%23Tim%E5%92%8C%E4%B8%AD%E5%9B%BDboy%E7%96%91%E4%BC%BC%E6%89%93%E6%9E%B6%23) `631.2K 🔥` `NEW`
1. [茉莉奶白将上诉](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E5%B0%86%E4%B8%8A%E8%AF%89%23) `497.3K 🔥` `NEW`
1. [王俊凯你有这样的身材进入内娱](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%BD%A0%E6%9C%89%E8%BF%99%E6%A0%B7%E7%9A%84%E8%BA%AB%E6%9D%90%E8%BF%9B%E5%85%A5%E5%86%85%E5%A8%B1%23) `394.3K 🔥` `NEW`
1. [浮生剧组抽烟这么严重吗](https://s.weibo.com/weibo?q=%23%E6%B5%AE%E7%94%9F%E5%89%A7%E7%BB%84%E6%8A%BD%E7%83%9F%E8%BF%99%E4%B9%88%E4%B8%A5%E9%87%8D%E5%90%97%23) `337.0K 🔥` `NEW`
1. [王楚然被烟人逼没招了 (Wang Churan was forced to do nothing by the smoker)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%A2%AB%E7%83%9F%E4%BA%BA%E9%80%BC%E6%B2%A1%E6%8B%9B%E4%BA%86%23) `334.9K 🔥` `NEW`
1. [乌兰图雅把万千惠设成封面了](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%E6%8A%8A%E4%B8%87%E5%8D%83%E6%83%A0%E8%AE%BE%E6%88%90%E5%B0%81%E9%9D%A2%E4%BA%86%23) `333.4K 🔥` `NEW`
1. [张姩菡接手张雪峰公司股份](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A7%A9%E8%8F%A1%E6%8E%A5%E6%89%8B%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%85%AC%E5%8F%B8%E8%82%A1%E4%BB%BD%23) `332.4K 🔥` `NEW`
1. [王俊凯工作室疑似手滑](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%96%91%E4%BC%BC%E6%89%8B%E6%BB%91%23) `329.9K 🔥` `NEW`
1. [怕给赵丽颖丢人拒绝同台](https://s.weibo.com/weibo?q=%23%E6%80%95%E7%BB%99%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%B8%A2%E4%BA%BA%E6%8B%92%E7%BB%9D%E5%90%8C%E5%8F%B0%23) `325.3K 🔥` `NEW`
1. [TTG对战TES](https://s.weibo.com/weibo?q=%23TTG%E5%AF%B9%E6%88%98TES%23) `324.2K 🔥` `NEW`
1. [宋妍霏本名](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A6%8D%E9%9C%8F%E6%9C%AC%E5%90%8D%23) `320.4K 🔥` `NEW`
1. [难怪奚梦瑶可以在赌王家族站稳脚跟](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%8F%AF%E4%BB%A5%E5%9C%A8%E8%B5%8C%E7%8E%8B%E5%AE%B6%E6%97%8F%E7%AB%99%E7%A8%B3%E8%84%9A%E8%B7%9F%23) `319.7K 🔥` `NEW`
1. [西安赛格商场家人也跳楼系谣言](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E8%B5%9B%E6%A0%BC%E5%95%86%E5%9C%BA%E5%AE%B6%E4%BA%BA%E4%B9%9F%E8%B7%B3%E6%A5%BC%E7%B3%BB%E8%B0%A3%E8%A8%80%23) `317.8K 🔥` `NEW`
1. [网友偶遇素颜田曦薇](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%81%B6%E9%81%87%E7%B4%A0%E9%A2%9C%E7%94%B0%E6%9B%A6%E8%96%87%23) `316.0K 🔥` `NEW`
1. [AI演员已经能演出情绪变化了 (AI actors can already perform emotional changes)](https://s.weibo.com/weibo?q=%23AI%E6%BC%94%E5%91%98%E5%B7%B2%E7%BB%8F%E8%83%BD%E6%BC%94%E5%87%BA%E6%83%85%E7%BB%AA%E5%8F%98%E5%8C%96%E4%BA%86%23) `314.4K 🔥` `NEW`
1. [老人手动关400斤电动门被砸进ICU](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%89%8B%E5%8A%A8%E5%85%B3400%E6%96%A4%E7%94%B5%E5%8A%A8%E9%97%A8%E8%A2%AB%E7%A0%B8%E8%BF%9BICU%23) `313.4K 🔥` `NEW`
1. [歌手第七期歌单](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%AC%AC%E4%B8%83%E6%9C%9F%E6%AD%8C%E5%8D%95%23) `311.1K 🔥` `NEW`
1. [伊拉克女议员家中搜出黄金内衣](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%8B%89%E5%85%8B%E5%A5%B3%E8%AE%AE%E5%91%98%E5%AE%B6%E4%B8%AD%E6%90%9C%E5%87%BA%E9%BB%84%E9%87%91%E5%86%85%E8%A1%A3%23) `310.6K 🔥` `NEW`
1. [浮生](https://s.weibo.com/weibo?q=%23%E6%B5%AE%E7%94%9F%23) `309.2K 🔥` `NEW`
1. [葡萄牙主帅谈C罗是否替补](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E4%B8%BB%E5%B8%85%E8%B0%88C%E7%BD%97%E6%98%AF%E5%90%A6%E6%9B%BF%E8%A1%A5%23) `307.5K 🔥` `NEW`
1. [别在外卖备注上抖机灵了](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%9C%A8%E5%A4%96%E5%8D%96%E5%A4%87%E6%B3%A8%E4%B8%8A%E6%8A%96%E6%9C%BA%E7%81%B5%E4%BA%86%23) `304.8K 🔥` `NEW`
1. [让卡卡来演杉菜](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E5%8D%A1%E5%8D%A1%E6%9D%A5%E6%BC%94%E6%9D%89%E8%8F%9C%23) `304.0K 🔥` `NEW`
1. [SK海力士市值蒸发10000亿元](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E5%B8%82%E5%80%BC%E8%92%B8%E5%8F%9110000%E4%BA%BF%E5%85%83%23) `301.8K 🔥` `NEW`
1. [香港演员梁珊离世](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%BC%94%E5%91%98%E6%A2%81%E7%8F%8A%E7%A6%BB%E4%B8%96%23) `301.3K 🔥` `NEW`
1. [西安赛格坠楼商户涉事门店已撤柜换新 (The store involved in the Xi'an SEG merchant's fall has removed the counters and replaced them with new ones.)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E8%B5%9B%E6%A0%BC%E5%9D%A0%E6%A5%BC%E5%95%86%E6%88%B7%E6%B6%89%E4%BA%8B%E9%97%A8%E5%BA%97%E5%B7%B2%E6%92%A4%E6%9F%9C%E6%8D%A2%E6%96%B0%23) `299.0K 🔥` `NEW`
1. [秦岚与比亚迪海豹08的双向奔赴](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E4%B8%8E%E6%AF%94%E4%BA%9A%E8%BF%AA%E6%B5%B7%E8%B1%B908%E7%9A%84%E5%8F%8C%E5%90%91%E5%A5%94%E8%B5%B4%23) `297.5K 🔥` `NEW`
1. [李斌北大毕业演讲没有一滴鸡汤](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%8C%E5%8C%97%E5%A4%A7%E6%AF%95%E4%B8%9A%E6%BC%94%E8%AE%B2%E6%B2%A1%E6%9C%89%E4%B8%80%E6%BB%B4%E9%B8%A1%E6%B1%A4%23) `296.5K 🔥` `NEW`
1. [迪丽热巴范欣合作](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%8C%83%E6%AC%A3%E5%90%88%E4%BD%9C%23) `294.8K 🔥` `NEW`
1. [王玉雯团队的取舍](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%9B%A2%E9%98%9F%E7%9A%84%E5%8F%96%E8%88%8D%23) `293.0K 🔥` `NEW`
1. [昆凌做菜儿子帮忙备菜周杰伦试吃](https://s.weibo.com/weibo?q=%23%E6%98%86%E5%87%8C%E5%81%9A%E8%8F%9C%E5%84%BF%E5%AD%90%E5%B8%AE%E5%BF%99%E5%A4%87%E8%8F%9C%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%AF%95%E5%90%83%23) `289.7K 🔥` `NEW`
1. [TF四代高会数量](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E9%AB%98%E4%BC%9A%E6%95%B0%E9%87%8F%23) `289.0K 🔥` `NEW`
1. [张元英坐大摆锤都不崩图](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E5%9D%90%E5%A4%A7%E6%91%86%E9%94%A4%E9%83%BD%E4%B8%8D%E5%B4%A9%E5%9B%BE%23) `285.1K 🔥` `NEW`
1. [扎克伯格卖算力引半导体暴跌](https://s.weibo.com/weibo?q=%23%E6%89%8E%E5%85%8B%E4%BC%AF%E6%A0%BC%E5%8D%96%E7%AE%97%E5%8A%9B%E5%BC%95%E5%8D%8A%E5%AF%BC%E4%BD%93%E6%9A%B4%E8%B7%8C%23) `284.4K 🔥` `NEW`
1. [谁说的何老师主持歌手时吃螺蛳](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%AF%B4%E7%9A%84%E4%BD%95%E8%80%81%E5%B8%88%E4%B8%BB%E6%8C%81%E6%AD%8C%E6%89%8B%E6%97%B6%E5%90%83%E8%9E%BA%E8%9B%B3%23) `282.9K 🔥` `NEW`
1. [杨紫白玉兰正向大爆发 (Yang Zi Magnolia is about to explode)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E6%AD%A3%E5%90%91%E5%A4%A7%E7%88%86%E5%8F%91%23) `280.1K 🔥` `NEW`
1. [以为没事实际上有寄生虫](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E6%B2%A1%E4%BA%8B%E5%AE%9E%E9%99%85%E4%B8%8A%E6%9C%89%E5%AF%84%E7%94%9F%E8%99%AB%23) `280.0K 🔥` `NEW`
1. [金莎回应被催生](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%82%AC%E7%94%9F%23) `277.6K 🔥` `NEW`
1. [妻子的浪漫旅行](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E7%9A%84%E6%B5%AA%E6%BC%AB%E6%97%85%E8%A1%8C%23) `275.5K 🔥` `NEW`
1. [身份证里有八根半永久头发](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E9%87%8C%E6%9C%89%E5%85%AB%E6%A0%B9%E5%8D%8A%E6%B0%B8%E4%B9%85%E5%A4%B4%E5%8F%91%23) `865.6K 🔥` `+134%`
1. [一代人有一代人的僵尸肉](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E5%83%B5%E5%B0%B8%E8%82%89%23) `328.5K 🔥`
1. [存储芯片涨价 (Memory chip prices rise)](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E6%B6%A8%E4%BB%B7%23) `323.1K 🔥`
1. [官方通报西安赛格商场一男子坠楼 (Official reports that a man fell from the building in Xi'an SEG Mall)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E8%A5%BF%E5%AE%89%E8%B5%9B%E6%A0%BC%E5%95%86%E5%9C%BA%E4%B8%80%E7%94%B7%E5%AD%90%E5%9D%A0%E6%A5%BC%23) `336.5K 🔥` `-97%`
1. [脱下长衫才发现打工有多爽](https://s.weibo.com/weibo?q=%23%E8%84%B1%E4%B8%8B%E9%95%BF%E8%A1%AB%E6%89%8D%E5%8F%91%E7%8E%B0%E6%89%93%E5%B7%A5%E6%9C%89%E5%A4%9A%E7%88%BD%23) `326.6K 🔥` `-80%`
1. [猫眼美甲已经到这种程度了吗](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%9C%BC%E7%BE%8E%E7%94%B2%E5%B7%B2%E7%BB%8F%E5%88%B0%E8%BF%99%E7%A7%8D%E7%A8%8B%E5%BA%A6%E4%BA%86%E5%90%97%23) `292.0K 🔥` `-25%`
1. [存储一哥暴跌](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E4%B8%80%E5%93%A5%E6%9A%B4%E8%B7%8C%23) `287.7K 🔥` `-29%`

Updated at 2026-07-02 16:39:14

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
