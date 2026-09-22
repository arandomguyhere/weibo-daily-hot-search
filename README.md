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

1. [中国女排vs日本女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92vs%E6%97%A5%E6%9C%AC%E5%A5%B3%E6%8E%92%23) `2.0M 🔥` `NEW`
1. [中国女排3连冠](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%923%E8%BF%9E%E5%86%A0%23) `1.5M 🔥` `NEW`
1. [高质量发展中国行](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E4%B8%AD%E5%9B%BD%E8%A1%8C%23) `1.5M 🔥` `NEW`
1. [林诗栋2比3普里查扬](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B2%E6%AF%943%E6%99%AE%E9%87%8C%E6%9F%A5%E6%89%AC%23) `1.4M 🔥` `NEW`
1. [亚运会乒乓球](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%B9%92%E4%B9%93%E7%90%83%23) `1.1M 🔥` `NEW`
1. [朋友圈私密发表 鸡肋](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%A7%81%E5%AF%86%E5%8F%91%E8%A1%A8%20%E9%B8%A1%E8%82%8B%23) `872.8K 🔥` `NEW`
1. [张展硕1500自由泳金牌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%951500%E8%87%AA%E7%94%B1%E6%B3%B3%E9%87%91%E7%89%8C%23) `578.4K 🔥` `NEW`
1. [羽毛球男团](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E6%AF%9B%E7%90%83%E7%94%B7%E5%9B%A2%23) `574.2K 🔥` `NEW`
1. [中国体操女子全能历史首次失金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BD%93%E6%93%8D%E5%A5%B3%E5%AD%90%E5%85%A8%E8%83%BD%E5%8E%86%E5%8F%B2%E9%A6%96%E6%AC%A1%E5%A4%B1%E9%87%91%23) `572.7K 🔥` `NEW`
1. [中国女排3比0日本女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%923%E6%AF%940%E6%97%A5%E6%9C%AC%E5%A5%B3%E6%8E%92%23) `562.4K 🔥` `NEW`
1. [迪丽热巴给粉丝戴戒指](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BB%99%E7%B2%89%E4%B8%9D%E6%88%B4%E6%88%92%E6%8C%87%23) `560.6K 🔥` `NEW`
1. [刘耀文生日直播延期](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E7%94%9F%E6%97%A5%E7%9B%B4%E6%92%AD%E5%BB%B6%E6%9C%9F%23) `553.5K 🔥` `NEW`
1. [原来这些技能也有世界冠军](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%BA%9B%E6%8A%80%E8%83%BD%E4%B9%9F%E6%9C%89%E4%B8%96%E7%95%8C%E5%86%A0%E5%86%9B%23) `544.4K 🔥` `NEW`
1. [张家齐退役仅8天就开始直播带货](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E9%80%80%E5%BD%B9%E4%BB%858%E5%A4%A9%E5%B0%B1%E5%BC%80%E5%A7%8B%E7%9B%B4%E6%92%AD%E5%B8%A6%E8%B4%A7%23) `537.8K 🔥` `NEW`
1. [去宁德化论调要不得](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%AE%81%E5%BE%B7%E5%8C%96%E8%AE%BA%E8%B0%83%E8%A6%81%E4%B8%8D%E5%BE%97%23) `536.5K 🔥` `NEW`
1. [现在到处都是控糖](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%88%B0%E5%A4%84%E9%83%BD%E6%98%AF%E6%8E%A7%E7%B3%96%23) `531.7K 🔥` `NEW`
1. [姿态银行卡余额](https://s.weibo.com/weibo?q=%23%E5%A7%BF%E6%80%81%E9%93%B6%E8%A1%8C%E5%8D%A1%E4%BD%99%E9%A2%9D%23) `509.1K 🔥` `NEW`
1. [国乒女团3比0乌兹别克斯坦](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A23%E6%AF%940%E4%B9%8C%E5%85%B9%E5%88%AB%E5%85%8B%E6%96%AF%E5%9D%A6%23) `449.9K 🔥` `NEW`
1. [盛夏晴朗 井柏然孙千](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E5%A4%8F%E6%99%B4%E6%9C%97%20%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%23) `411.8K 🔥` `NEW`
1. [中国男子4x100混接四连冠](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%904x100%E6%B7%B7%E6%8E%A5%E5%9B%9B%E8%BF%9E%E5%86%A0%23) `361.1K 🔥` `NEW`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `346.2K 🔥` `NEW`
1. [白鹿陈哲远 朝玉阶](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%99%88%E5%93%B2%E8%BF%9C%20%E6%9C%9D%E7%8E%89%E9%98%B6%23) `330.5K 🔥` `NEW`
1. [潘展乐第3金](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%B1%95%E4%B9%90%E7%AC%AC3%E9%87%91%23) `326.3K 🔥` `NEW`
1. [我看到吹牛的人就这样](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9C%8B%E5%88%B0%E5%90%B9%E7%89%9B%E7%9A%84%E4%BA%BA%E5%B0%B1%E8%BF%99%E6%A0%B7%23) `315.6K 🔥` `NEW`
1. [首部演员授权AI剧](https://s.weibo.com/weibo?q=%23%E9%A6%96%E9%83%A8%E6%BC%94%E5%91%98%E6%8E%88%E6%9D%83AI%E5%89%A7%23) `279.2K 🔥` `NEW`
1. [林诗栋状态](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E7%8A%B6%E6%80%81%23) `274.8K 🔥` `NEW`
1. [林珍娜 整商](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%8F%8D%E5%A8%9C%20%E6%95%B4%E5%95%86%23) `269.7K 🔥` `NEW`
1. [张家齐怕父母知道地址连夜搬家](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E6%80%95%E7%88%B6%E6%AF%8D%E7%9F%A5%E9%81%93%E5%9C%B0%E5%9D%80%E8%BF%9E%E5%A4%9C%E6%90%AC%E5%AE%B6%23) `261.8K 🔥` `NEW`
1. [动力电池新国标下的安全硬仗](https://s.weibo.com/weibo?q=%23%E5%8A%A8%E5%8A%9B%E7%94%B5%E6%B1%A0%E6%96%B0%E5%9B%BD%E6%A0%87%E4%B8%8B%E7%9A%84%E5%AE%89%E5%85%A8%E7%A1%AC%E4%BB%97%23) `256.3K 🔥` `NEW`
1. [孙颖莎vs埃尔克巴耶娃](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E5%9F%83%E5%B0%94%E5%85%8B%E5%B7%B4%E8%80%B6%E5%A8%83%23) `238.9K 🔥` `NEW`
1. [全红婵曾是张家齐的榜一](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E6%9B%BE%E6%98%AF%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%9A%84%E6%A6%9C%E4%B8%80%23) `227.5K 🔥` `NEW`
1. [王一博被男粉喊哥哥的反应](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%A2%AB%E7%94%B7%E7%B2%89%E5%96%8A%E5%93%A5%E5%93%A5%E7%9A%84%E5%8F%8D%E5%BA%94%23) `214.7K 🔥` `NEW`
1. [理记被指多次在热点事件中污蔑女性](https://s.weibo.com/weibo?q=%23%E7%90%86%E8%AE%B0%E8%A2%AB%E6%8C%87%E5%A4%9A%E6%AC%A1%E5%9C%A8%E7%83%AD%E7%82%B9%E4%BA%8B%E4%BB%B6%E4%B8%AD%E6%B1%A1%E8%94%91%E5%A5%B3%E6%80%A7%23) `197.6K 🔥` `NEW`
1. [孙女整理遗物发现爽身粉罐里的秘密](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%A5%B3%E6%95%B4%E7%90%86%E9%81%97%E7%89%A9%E5%8F%91%E7%8E%B0%E7%88%BD%E8%BA%AB%E7%B2%89%E7%BD%90%E9%87%8C%E7%9A%84%E7%A7%98%E5%AF%86%23) `193.5K 🔥` `NEW`
1. [仙本那险遭性侵女子躲丛林5小时](https://s.weibo.com/weibo?q=%23%E4%BB%99%E6%9C%AC%E9%82%A3%E9%99%A9%E9%81%AD%E6%80%A7%E4%BE%B5%E5%A5%B3%E5%AD%90%E8%BA%B2%E4%B8%9B%E6%9E%975%E5%B0%8F%E6%97%B6%23) `184.3K 🔥` `NEW`
1. [被批史上最差亚运后日本甩锅法国](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%89%B9%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%B7%AE%E4%BA%9A%E8%BF%90%E5%90%8E%E6%97%A5%E6%9C%AC%E7%94%A9%E9%94%85%E6%B3%95%E5%9B%BD%23) `184.0K 🔥` `NEW`
1. [国乒男团1比1泰国](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A21%E6%AF%941%E6%B3%B0%E5%9B%BD%23) `184.0K 🔥` `NEW`
1. [亚运会电竞项目翻车](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E7%94%B5%E7%AB%9E%E9%A1%B9%E7%9B%AE%E7%BF%BB%E8%BD%A6%23) `183.9K 🔥` `NEW`
1. [对羊毛有了新的认知](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E7%BE%8A%E6%AF%9B%E6%9C%89%E4%BA%86%E6%96%B0%E7%9A%84%E8%AE%A4%E7%9F%A5%23) `183.9K 🔥` `NEW`
1. [王玉雯是不是在感情上受了什么伤](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%98%AF%E4%B8%8D%E6%98%AF%E5%9C%A8%E6%84%9F%E6%83%85%E4%B8%8A%E5%8F%97%E4%BA%86%E4%BB%80%E4%B9%88%E4%BC%A4%23) `173.5K 🔥` `NEW`
1. [孙颖莎3比1埃尔克巴耶娃](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E3%E6%AF%941%E5%9F%83%E5%B0%94%E5%85%8B%E5%B7%B4%E8%80%B6%E5%A8%83%23) `171.0K 🔥` `NEW`
1. [柳智敏广告被指三K党意象](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E5%B9%BF%E5%91%8A%E8%A2%AB%E6%8C%87%E4%B8%89K%E5%85%9A%E6%84%8F%E8%B1%A1%23) `160.0K 🔥` `NEW`
1. [女子体操](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%93%E6%93%8D%23) `157.6K 🔥` `NEW`
1. [印度男团3比0日本晋级半决赛](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%9B%A23%E6%AF%940%E6%97%A5%E6%9C%AC%E6%99%8B%E7%BA%A7%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `157.2K 🔥` `NEW`
1. [故意让小孩难堪的大人有多恶毒](https://s.weibo.com/weibo?q=%23%E6%95%85%E6%84%8F%E8%AE%A9%E5%B0%8F%E5%AD%A9%E9%9A%BE%E5%A0%AA%E7%9A%84%E5%A4%A7%E4%BA%BA%E6%9C%89%E5%A4%9A%E6%81%B6%E6%AF%92%23) `155.1K 🔥` `NEW`
1. [金贤重在粉丝婚礼上喊我有异议](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%B4%A4%E9%87%8D%E5%9C%A8%E7%B2%89%E4%B8%9D%E5%A9%9A%E7%A4%BC%E4%B8%8A%E5%96%8A%E6%88%91%E6%9C%89%E5%BC%82%E8%AE%AE%23) `126.8K 🔥` `NEW`
1. [国羽男团vs韩国男团](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E7%BE%BD%E7%94%B7%E5%9B%A2vs%E9%9F%A9%E5%9B%BD%E7%94%B7%E5%9B%A2%23) `123.8K 🔥` `NEW`
1. [王俊凯浪莎品牌全球代言人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%B5%AA%E8%8E%8E%E5%93%81%E7%89%8C%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `903.6K 🔥` `+494%`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `202.7K 🔥` `+66%`

Updated at 2026-09-22 20:11:16

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
