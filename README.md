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

1. [四代五公大屏坏了 (The big screen of the fourth generation and the fifth generation is broken.)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%E5%A4%A7%E5%B1%8F%E5%9D%8F%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [碳排放权交易市场成交量破9亿吨](https://s.weibo.com/weibo?q=%23%E7%A2%B3%E6%8E%92%E6%94%BE%E6%9D%83%E4%BA%A4%E6%98%93%E5%B8%82%E5%9C%BA%E6%88%90%E4%BA%A4%E9%87%8F%E7%A0%B49%E4%BA%BF%E5%90%A8%23) `1.1M 🔥` `NEW`
1. [王橹杰对着蓝粉海偷笑](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%AF%B9%E7%9D%80%E8%93%9D%E7%B2%89%E6%B5%B7%E5%81%B7%E7%AC%91%23) `1.1M 🔥` `NEW`
1. [破局 难听](https://s.weibo.com/weibo?q=%23%E7%A0%B4%E5%B1%80%20%E9%9A%BE%E5%90%AC%23) `1.0M 🔥` `NEW`
1. [河南近期这些涉汛传言都是假的](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E8%BF%91%E6%9C%9F%E8%BF%99%E4%BA%9B%E6%B6%89%E6%B1%9B%E4%BC%A0%E8%A8%80%E9%83%BD%E6%98%AF%E5%81%87%E7%9A%84%23) `1.0M 🔥` `NEW`
1. [Smoggy EDG](https://s.weibo.com/weibo?q=%23Smoggy%20EDG%23) `974.4K 🔥` `NEW`
1. [北电祝贺刘耀文](https://s.weibo.com/weibo?q=%23%E5%8C%97%E7%94%B5%E7%A5%9D%E8%B4%BA%E5%88%98%E8%80%80%E6%96%87%23) `926.5K 🔥` `NEW`
1. [EDG管理层](https://s.weibo.com/weibo?q=%23EDG%E7%AE%A1%E7%90%86%E5%B1%82%23) `741.7K 🔥` `NEW`
1. [DeepSeekHarness发布](https://s.weibo.com/weibo?q=%23DeepSeekHarness%E5%8F%91%E5%B8%83%23) `737.2K 🔥` `NEW`
1. [退休236天大姐状态大变样](https://s.weibo.com/weibo?q=%23%E9%80%80%E4%BC%91236%E5%A4%A9%E5%A4%A7%E5%A7%90%E7%8A%B6%E6%80%81%E5%A4%A7%E5%8F%98%E6%A0%B7%23) `736.8K 🔥` `NEW`
1. [3孩非亲生男方可让返还抚养费 (The non-biological male partner of the 3rd child can have the child support refunded)](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E7%94%B7%E6%96%B9%E5%8F%AF%E8%AE%A9%E8%BF%94%E8%BF%98%E6%8A%9A%E5%85%BB%E8%B4%B9%23) `724.4K 🔥` `NEW`
1. [冉莹颖说打输了大不了换老公](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E8%AF%B4%E6%89%93%E8%BE%93%E4%BA%86%E5%A4%A7%E4%B8%8D%E4%BA%86%E6%8D%A2%E8%80%81%E5%85%AC%23) `720.3K 🔥` `NEW`
1. [张桂源张函瑞 眼鼻嘴](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E5%BC%A0%E5%87%BD%E7%91%9E%20%E7%9C%BC%E9%BC%BB%E5%98%B4%23) `712.9K 🔥` `NEW`
1. [金鹰奖提名 蒋欣](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%20%E8%92%8B%E6%AC%A3%23) `684.0K 🔥` `NEW`
1. [中国车完成360度隧道旋转穿越](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%BD%A6%E5%AE%8C%E6%88%90360%E5%BA%A6%E9%9A%A7%E9%81%93%E6%97%8B%E8%BD%AC%E7%A9%BF%E8%B6%8A%23) `626.0K 🔥` `NEW`
1. [15岁男孩确诊白血病后暴瘦80斤](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E7%94%B7%E5%AD%A9%E7%A1%AE%E8%AF%8A%E7%99%BD%E8%A1%80%E7%97%85%E5%90%8E%E6%9A%B4%E7%98%A680%E6%96%A4%23) `619.2K 🔥` `NEW`
1. [陈冠希一家四口在巴黎被偶遇](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%86%A0%E5%B8%8C%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%E5%9C%A8%E5%B7%B4%E9%BB%8E%E8%A2%AB%E5%81%B6%E9%81%87%23) `613.1K 🔥` `NEW`
1. [林厨 下饭酱挂直播间卖](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%8E%A8%20%E4%B8%8B%E9%A5%AD%E9%85%B1%E6%8C%82%E7%9B%B4%E6%92%AD%E9%97%B4%E5%8D%96%23) `516.2K 🔥` `NEW`
1. [吴越称十分抗拒和年轻男演员演情侣](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B6%8A%E7%A7%B0%E5%8D%81%E5%88%86%E6%8A%97%E6%8B%92%E5%92%8C%E5%B9%B4%E8%BD%BB%E7%94%B7%E6%BC%94%E5%91%98%E6%BC%94%E6%83%85%E4%BE%A3%23) `515.2K 🔥` `NEW`
1. [陈妍希方回应新恋情传闻](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%96%B9%E5%9B%9E%E5%BA%94%E6%96%B0%E6%81%8B%E6%83%85%E4%BC%A0%E9%97%BB%23) `476.6K 🔥` `NEW`
1. [光与夜之恋 (Love of light and night)](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%23) `390.9K 🔥` `NEW`
1. [种地吧](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `297.8K 🔥` `NEW`
1. [妻子提离婚男子酒后提刀杀死妻弟](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E6%8F%90%E7%A6%BB%E5%A9%9A%E7%94%B7%E5%AD%90%E9%85%92%E5%90%8E%E6%8F%90%E5%88%80%E6%9D%80%E6%AD%BB%E5%A6%BB%E5%BC%9F%23) `280.9K 🔥` `NEW`
1. [陈奕恒好清晰的生图](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E5%A5%BD%E6%B8%85%E6%99%B0%E7%9A%84%E7%94%9F%E5%9B%BE%23) `271.9K 🔥` `NEW`
1. [王曼昱3比0简彤娟](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B13%E6%AF%940%E7%AE%80%E5%BD%A4%E5%A8%9F%23) `268.4K 🔥` `NEW`
1. [100ways 一班](https://s.weibo.com/weibo?q=%23100ways%20%E4%B8%80%E7%8F%AD%23) `265.0K 🔥` `NEW`
1. [singforyou 看不到张函瑞](https://s.weibo.com/weibo?q=%23singforyou%20%E7%9C%8B%E4%B8%8D%E5%88%B0%E5%BC%A0%E5%87%BD%E7%91%9E%23) `238.0K 🔥` `NEW`
1. [母亲报警赶高铁回家24岁儿子已离世](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E6%8A%A5%E8%AD%A6%E8%B5%B6%E9%AB%98%E9%93%81%E5%9B%9E%E5%AE%B624%E5%B2%81%E5%84%BF%E5%AD%90%E5%B7%B2%E7%A6%BB%E4%B8%96%23) `229.5K 🔥` `NEW`
1. [魏子宸这风好会吹](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E8%BF%99%E9%A3%8E%E5%A5%BD%E4%BC%9A%E5%90%B9%23) `203.9K 🔥` `NEW`
1. [官方通报佛山一中学球员不当言论](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E4%BD%9B%E5%B1%B1%E4%B8%80%E4%B8%AD%E5%AD%A6%E7%90%83%E5%91%98%E4%B8%8D%E5%BD%93%E8%A8%80%E8%AE%BA%23) `202.2K 🔥` `NEW`
1. [陈浚铭衣服太紧了 (Chen Junming’s clothes are too tight)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%9A%E9%93%AD%E8%A1%A3%E6%9C%8D%E5%A4%AA%E7%B4%A7%E4%BA%86%23) `201.5K 🔥` `NEW`
1. [宇树科技弃购8734股](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E5%BC%83%E8%B4%AD8734%E8%82%A1%23) `192.7K 🔥` `NEW`
1. [五公站姐出图 (Wugong station sister posted a picture)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%85%AC%E7%AB%99%E5%A7%90%E5%87%BA%E5%9B%BE%23) `1.1M 🔥` `+40%`
1. [罗氏虾自助吃12只回本太爽了](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%8F%E8%99%BE%E8%87%AA%E5%8A%A9%E5%90%8312%E5%8F%AA%E5%9B%9E%E6%9C%AC%E5%A4%AA%E7%88%BD%E4%BA%86%23) `1.0M 🔥` `+177%`
1. [39岁程序员打卡后厕所内猝死](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E7%A8%8B%E5%BA%8F%E5%91%98%E6%89%93%E5%8D%A1%E5%90%8E%E5%8E%95%E6%89%80%E5%86%85%E7%8C%9D%E6%AD%BB%23) `1.0M 🔥` `+187%`
1. [让DeepSeek给小说取架空国名](https://s.weibo.com/weibo?q=%23%E8%AE%A9DeepSeek%E7%BB%99%E5%B0%8F%E8%AF%B4%E5%8F%96%E6%9E%B6%E7%A9%BA%E5%9B%BD%E5%90%8D%23) `984.2K 🔥` `+202%`
1. [郭麒麟瘦到认不出](https://s.weibo.com/weibo?q=%23%E9%83%AD%E9%BA%92%E9%BA%9F%E7%98%A6%E5%88%B0%E8%AE%A4%E4%B8%8D%E5%87%BA%23) `954.5K 🔥` `+154%`
1. [砸30万补课到700分最后上了职校 (I spent 300,000 on extra classes to get a score of 700 and finally went to a vocational school.)](https://s.weibo.com/weibo?q=%23%E7%A0%B830%E4%B8%87%E8%A1%A5%E8%AF%BE%E5%88%B0700%E5%88%86%E6%9C%80%E5%90%8E%E4%B8%8A%E4%BA%86%E8%81%8C%E6%A0%A1%23) `933.2K 🔥` `+182%`
1. [王橹杰 化妆师](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E5%8C%96%E5%A6%86%E5%B8%88%23) `782.5K 🔥` `+68%`
1. [王安宇走路脖子前倾](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%B5%B0%E8%B7%AF%E8%84%96%E5%AD%90%E5%89%8D%E5%80%BE%23) `736.4K 🔥` `+97%`
1. [深圳女生一天1500专门劝人别买房](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%A5%B3%E7%94%9F%E4%B8%80%E5%A4%A91500%E4%B8%93%E9%97%A8%E5%8A%9D%E4%BA%BA%E5%88%AB%E4%B9%B0%E6%88%BF%23) `720.9K 🔥` `+93%`
1. [90后女子爱生闷气乳腺癌去世丈夫痛哭 (Post-90s woman was sulky and her husband cried bitterly after she died of breast cancer)](https://s.weibo.com/weibo?q=%2390%E5%90%8E%E5%A5%B3%E5%AD%90%E7%88%B1%E7%94%9F%E9%97%B7%E6%B0%94%E4%B9%B3%E8%85%BA%E7%99%8C%E5%8E%BB%E4%B8%96%E4%B8%88%E5%A4%AB%E7%97%9B%E5%93%AD%23) `635.0K 🔥` `+72%`
1. [福安船厂爆炸已致12人受伤](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%AE%89%E8%88%B9%E5%8E%82%E7%88%86%E7%82%B8%E5%B7%B2%E8%87%B412%E4%BA%BA%E5%8F%97%E4%BC%A4%23) `617.3K 🔥` `+91%`
1. [女子虐待亲生女儿致死后患重度抑郁 (Woman suffered severe depression after abusing her own daughter to death)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%99%90%E5%BE%85%E4%BA%B2%E7%94%9F%E5%A5%B3%E5%84%BF%E8%87%B4%E6%AD%BB%E5%90%8E%E6%82%A3%E9%87%8D%E5%BA%A6%E6%8A%91%E9%83%81%23) `515.3K 🔥` `+38%`
1. [开推5疑似只剩刘宇宁周柯宇](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8E%A85%E7%96%91%E4%BC%BC%E5%8F%AA%E5%89%A9%E5%88%98%E5%AE%87%E5%AE%81%E5%91%A8%E6%9F%AF%E5%AE%87%23) `323.0K 🔥` `+33%`
1. [长鑫科技 中国市值最大上市公司 (Changxin Technology China’s largest listed company by market capitalization)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%20%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%80%BC%E6%9C%80%E5%A4%A7%E4%B8%8A%E5%B8%82%E5%85%AC%E5%8F%B8%23) `1.0M 🔥`
1. [地下试管婴儿](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E4%B8%8B%E8%AF%95%E7%AE%A1%E5%A9%B4%E5%84%BF%23) `720.6K 🔥`
1. [亏50万股民借钱缴款中签宇树](https://s.weibo.com/weibo?q=%23%E4%BA%8F50%E4%B8%87%E8%82%A1%E6%B0%91%E5%80%9F%E9%92%B1%E7%BC%B4%E6%AC%BE%E4%B8%AD%E7%AD%BE%E5%AE%87%E6%A0%91%23) `690.2K 🔥`
1. [魏子宸好帅](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%A5%BD%E5%B8%85%23) `637.5K 🔥`
1. [金鹰奖女主提名 (Golden Eagle Award for Leading Actress Nominated)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E5%A5%B3%E4%B8%BB%E6%8F%90%E5%90%8D%23) `276.6K 🔥` `-38%`
1. [五公节目单](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%85%AC%E8%8A%82%E7%9B%AE%E5%8D%95%23) `221.2K 🔥` `-40%`

Updated at 2026-08-13 21:57:23

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
