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

1. [特朗普结束访华 (Trump ends visit to China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%BB%93%E6%9D%9F%E8%AE%BF%E5%8D%8E%23) `9.3M 🔥` `NEW`
1. [中美元首边走边谈](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E8%BE%B9%E8%B5%B0%E8%BE%B9%E8%B0%88%23) `1.8M 🔥` `NEW`
1. [跨越太平洋的握手](https://s.weibo.com/weibo?q=%23%E8%B7%A8%E8%B6%8A%E5%A4%AA%E5%B9%B3%E6%B4%8B%E7%9A%84%E6%8F%A1%E6%89%8B%23) `1.4M 🔥` `NEW`
1. [iPhone华为同时降价](https://s.weibo.com/weibo?q=%23iPhone%E5%8D%8E%E4%B8%BA%E5%90%8C%E6%97%B6%E9%99%8D%E4%BB%B7%23) `775.1K 🔥` `NEW`
1. [曝杨幂杨紫白玉兰二选一提名](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%A8%E5%B9%82%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E4%BA%8C%E9%80%89%E4%B8%80%E6%8F%90%E5%90%8D%23) `712.3K 🔥` `NEW`
1. [白玉兰评委名单](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E8%AF%84%E5%A7%94%E5%90%8D%E5%8D%95%23) `483.2K 🔥` `NEW`
1. [华莱士谷子界的爱马士](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%8E%B1%E5%A3%AB%E8%B0%B7%E5%AD%90%E7%95%8C%E7%9A%84%E7%88%B1%E9%A9%AC%E5%A3%AB%23) `472.2K 🔥` `NEW`
1. [容易紧张是缺乏主体性](https://s.weibo.com/weibo?q=%23%E5%AE%B9%E6%98%93%E7%B4%A7%E5%BC%A0%E6%98%AF%E7%BC%BA%E4%B9%8F%E4%B8%BB%E4%BD%93%E6%80%A7%23) `391.4K 🔥` `NEW`
1. [中美元首中南海小范围会晤高清大图](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E4%B8%AD%E5%8D%97%E6%B5%B7%E5%B0%8F%E8%8C%83%E5%9B%B4%E4%BC%9A%E6%99%A4%E9%AB%98%E6%B8%85%E5%A4%A7%E5%9B%BE%23) `385.6K 🔥` `NEW`
1. [横店的剧组快灭亡了](https://s.weibo.com/weibo?q=%23%E6%A8%AA%E5%BA%97%E7%9A%84%E5%89%A7%E7%BB%84%E5%BF%AB%E7%81%AD%E4%BA%A1%E4%BA%86%23) `377.5K 🔥` `NEW`
1. [阿雅视频抄袭 (Aya video plagiarism)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%9B%85%E8%A7%86%E9%A2%91%E6%8A%84%E8%A2%AD%23) `369.1K 🔥` `NEW`
1. [这就是我花一万买iPhone的意义](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E6%88%91%E8%8A%B1%E4%B8%80%E4%B8%87%E4%B9%B0iPhone%E7%9A%84%E6%84%8F%E4%B9%89%23) `365.5K 🔥` `NEW`
1. [温岚在ICU接受治疗](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B2%9A%E5%9C%A8ICU%E6%8E%A5%E5%8F%97%E6%B2%BB%E7%96%97%23) `362.3K 🔥` `NEW`
1. [白宫发布中国仪仗队画面](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E5%8F%91%E5%B8%83%E4%B8%AD%E5%9B%BD%E4%BB%AA%E4%BB%97%E9%98%9F%E7%94%BB%E9%9D%A2%23) `356.3K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `355.1K 🔥` `NEW`
1. [曝温岚休克](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B8%A9%E5%B2%9A%E4%BC%91%E5%85%8B%23) `337.5K 🔥` `NEW`
1. [特朗普离京现场的中国军人](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A6%BB%E4%BA%AC%E7%8E%B0%E5%9C%BA%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%86%9B%E4%BA%BA%23) `333.0K 🔥` `NEW`
1. [要小心身边的假好心同事](https://s.weibo.com/weibo?q=%23%E8%A6%81%E5%B0%8F%E5%BF%83%E8%BA%AB%E8%BE%B9%E7%9A%84%E5%81%87%E5%A5%BD%E5%BF%83%E5%90%8C%E4%BA%8B%23) `316.8K 🔥` `NEW`
1. [痞幼脱鞋与毛巾二叔合照](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E8%84%B1%E9%9E%8B%E4%B8%8E%E6%AF%9B%E5%B7%BE%E4%BA%8C%E5%8F%94%E5%90%88%E7%85%A7%23) `315.8K 🔥` `NEW`
1. [看魏大勋如何掌控这一局](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E9%AD%8F%E5%A4%A7%E5%8B%8B%E5%A6%82%E4%BD%95%E6%8E%8C%E6%8E%A7%E8%BF%99%E4%B8%80%E5%B1%80%23) `314.7K 🔥` `NEW`
1. [特朗普离京 (Trump leaves Beijing)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A6%BB%E4%BA%AC%23) `314.5K 🔥` `NEW`
1. [不怪恋爱脑这谁忍得住](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%80%AA%E6%81%8B%E7%88%B1%E8%84%91%E8%BF%99%E8%B0%81%E5%BF%8D%E5%BE%97%E4%BD%8F%23) `311.7K 🔥` `NEW`
1. [安崎说把房子卖了](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E8%AF%B4%E6%8A%8A%E6%88%BF%E5%AD%90%E5%8D%96%E4%BA%86%23) `269.3K 🔥` `NEW`
1. [TOP 衢州演唱会](https://s.weibo.com/weibo?q=%23TOP%20%E8%A1%A2%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `231.2K 🔥` `NEW`
1. [韩国赛场大尺度饭拍女啦啦队员身体](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%B5%9B%E5%9C%BA%E5%A4%A7%E5%B0%BA%E5%BA%A6%E9%A5%AD%E6%8B%8D%E5%A5%B3%E5%95%A6%E5%95%A6%E9%98%9F%E5%91%98%E8%BA%AB%E4%BD%93%23) `225.6K 🔥` `NEW`
1. [特朗普说能待得惯可能都不想走了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E8%83%BD%E5%BE%85%E5%BE%97%E6%83%AF%E5%8F%AF%E8%83%BD%E9%83%BD%E4%B8%8D%E6%83%B3%E8%B5%B0%E4%BA%86%23) `221.5K 🔥` `NEW`
1. [男生偷拍女同学私密视频后校内传播](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E5%81%B7%E6%8B%8D%E5%A5%B3%E5%90%8C%E5%AD%A6%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91%E5%90%8E%E6%A0%A1%E5%86%85%E4%BC%A0%E6%92%AD%23) `214.5K 🔥` `NEW`
1. [二孩家庭买SUV还是买MPV](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E5%AD%A9%E5%AE%B6%E5%BA%AD%E4%B9%B0SUV%E8%BF%98%E6%98%AF%E4%B9%B0MPV%23) `211.7K 🔥` `NEW`
1. [特朗普说中国军人棒极了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%B8%AD%E5%9B%BD%E5%86%9B%E4%BA%BA%E6%A3%92%E6%9E%81%E4%BA%86%23) `211.7K 🔥` `NEW`
1. [张元英无眼妆封面](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E6%97%A0%E7%9C%BC%E5%A6%86%E5%B0%81%E9%9D%A2%23) `211.5K 🔥` `NEW`
1. [吉林大学回应女生澡筐衣物被翻 (Jilin University responds to girls’ bath basket clothes being turned over)](https://s.weibo.com/weibo?q=%23%E5%90%89%E6%9E%97%E5%A4%A7%E5%AD%A6%E5%9B%9E%E5%BA%94%E5%A5%B3%E7%94%9F%E6%BE%A1%E7%AD%90%E8%A1%A3%E7%89%A9%E8%A2%AB%E7%BF%BB%23) `206.6K 🔥` `NEW`
1. [特朗普说此次访华非常成功](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E6%AD%A4%E6%AC%A1%E8%AE%BF%E5%8D%8E%E9%9D%9E%E5%B8%B8%E6%88%90%E5%8A%9F%23) `205.1K 🔥` `NEW`
1. [张凌赫被保镖大哥淹没了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A2%AB%E4%BF%9D%E9%95%96%E5%A4%A7%E5%93%A5%E6%B7%B9%E6%B2%A1%E4%BA%86%23) `201.3K 🔥` `NEW`
1. [余承东说智界V9比小车还灵活](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E8%AF%B4%E6%99%BA%E7%95%8CV9%E6%AF%94%E5%B0%8F%E8%BD%A6%E8%BF%98%E7%81%B5%E6%B4%BB%23) `172.4K 🔥` `NEW`
1. [无尽夏](https://s.weibo.com/weibo?q=%23%E6%97%A0%E5%B0%BD%E5%A4%8F%23) `171.2K 🔥` `NEW`
1. [青春修炼手册小考赢了宝莲](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E4%BF%AE%E7%82%BC%E6%89%8B%E5%86%8C%E5%B0%8F%E8%80%83%E8%B5%A2%E4%BA%86%E5%AE%9D%E8%8E%B2%23) `165.1K 🔥` `NEW`
1. [孙颖莎绝莎](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%BB%9D%E8%8E%8E%23) `163.8K 🔥` `NEW`
1. [白玉兰新闻发布会](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%96%B0%E9%97%BB%E5%8F%91%E5%B8%83%E4%BC%9A%23) `163.7K 🔥` `NEW`
1. [原来我跟刘宇宁是同担](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%88%91%E8%B7%9F%E5%88%98%E5%AE%87%E5%AE%81%E6%98%AF%E5%90%8C%E6%8B%85%23) `154.6K 🔥` `NEW`
1. [狗狗陪跑帮女生成功打破校纪录](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E9%99%AA%E8%B7%91%E5%B8%AE%E5%A5%B3%E7%94%9F%E6%88%90%E5%8A%9F%E6%89%93%E7%A0%B4%E6%A0%A1%E7%BA%AA%E5%BD%95%23) `153.5K 🔥` `NEW`
1. [天猫618 iPhone17系最大优惠来了 (Tmall 618 iPhone 17 series biggest discount is here)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB618%20iPhone17%E7%B3%BB%E6%9C%80%E5%A4%A7%E4%BC%98%E6%83%A0%E6%9D%A5%E4%BA%86%23) `1.0M 🔥`
1. [名侦探柯南](https://s.weibo.com/weibo?q=%23%E5%90%8D%E4%BE%A6%E6%8E%A2%E6%9F%AF%E5%8D%97%23) `380.8K 🔥`
1. [浪姐 遛观众](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E9%81%9B%E8%A7%82%E4%BC%97%23) `351.1K 🔥`
1. [女子拼死留住的巴掌双胞胎1岁半了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8B%BC%E6%AD%BB%E7%95%99%E4%BD%8F%E7%9A%84%E5%B7%B4%E6%8E%8C%E5%8F%8C%E8%83%9E%E8%83%8E1%E5%B2%81%E5%8D%8A%E4%BA%86%23) `340.8K 🔥`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `310.6K 🔥`
1. [原来这么多人拒绝过浪姐](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B9%88%E5%A4%9A%E4%BA%BA%E6%8B%92%E7%BB%9D%E8%BF%87%E6%B5%AA%E5%A7%90%23) `389.3K 🔥` `-43%`
1. [新来的同事脑子就是好使](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%9D%A5%E7%9A%84%E5%90%8C%E4%BA%8B%E8%84%91%E5%AD%90%E5%B0%B1%E6%98%AF%E5%A5%BD%E4%BD%BF%23) `327.8K 🔥` `-68%`
1. [毛利兰声优去世 (Mao Lilan voice actor passed away)](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E5%88%A9%E5%85%B0%E5%A3%B0%E4%BC%98%E5%8E%BB%E4%B8%96%23) `264.9K 🔥` `-32%`
1. [国际足联报价腰斩](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E6%8A%A5%E4%BB%B7%E8%85%B0%E6%96%A9%23) `235.2K 🔥` `-40%`
1. [老人捡破烂攒6万买床垫与儿子反目](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%8D%A1%E7%A0%B4%E7%83%82%E6%94%926%E4%B8%87%E4%B9%B0%E5%BA%8A%E5%9E%AB%E4%B8%8E%E5%84%BF%E5%AD%90%E5%8F%8D%E7%9B%AE%23) `174.3K 🔥` `-55%`
1. [中美领导人小范围会晤 (Small-scale meeting between Chinese and American leaders)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E9%A2%86%E5%AF%BC%E4%BA%BA%E5%B0%8F%E8%8C%83%E5%9B%B4%E4%BC%9A%E6%99%A4%23) `173.9K 🔥` `-85%`
1. [孙颖莎Tatler亚洲十大体育明星](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8ETatler%E4%BA%9A%E6%B4%B2%E5%8D%81%E5%A4%A7%E4%BD%93%E8%82%B2%E6%98%8E%E6%98%9F%23) `163.7K 🔥` `-53%`

Updated at 2026-05-15 16:27:27

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
