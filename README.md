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

1. [陈瑶没成团 (Chen Yao did not form a group)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E6%B2%A1%E6%88%90%E5%9B%A2%23) `8.2M 🔥` `NEW`
1. [浪姐成团名单](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%88%90%E5%9B%A2%E5%90%8D%E5%8D%95%23) `4.4M 🔥` `NEW`
1. [中国机电产品加速出海](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%BA%E7%94%B5%E4%BA%A7%E5%93%81%E5%8A%A0%E9%80%9F%E5%87%BA%E6%B5%B7%23) `1.6M 🔥` `NEW`
1. [笔趣阁APP](https://s.weibo.com/weibo?q=%23%E7%AC%94%E8%B6%A3%E9%98%81APP%23) `767.1K 🔥` `NEW`
1. [吴艳妮12秒99夺冠](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE12%E7%A7%9299%E5%A4%BA%E5%86%A0%23) `652.9K 🔥` `NEW`
1. [蔡依林封后](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%B0%81%E5%90%8E%23) `649.7K 🔥` `NEW`
1. [造谣女生打架1人被割脖子男子被罚](https://s.weibo.com/weibo?q=%23%E9%80%A0%E8%B0%A3%E5%A5%B3%E7%94%9F%E6%89%93%E6%9E%B61%E4%BA%BA%E8%A2%AB%E5%89%B2%E8%84%96%E5%AD%90%E7%94%B7%E5%AD%90%E8%A2%AB%E7%BD%9A%23) `423.5K 🔥` `NEW`
1. [通过衣服吊牌看成本价的方法](https://s.weibo.com/weibo?q=%23%E9%80%9A%E8%BF%87%E8%A1%A3%E6%9C%8D%E5%90%8A%E7%89%8C%E7%9C%8B%E6%88%90%E6%9C%AC%E4%BB%B7%E7%9A%84%E6%96%B9%E6%B3%95%23) `418.9K 🔥` `NEW`
1. [浪姐排名](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `417.8K 🔥` `NEW`
1. [不穿的衣服可以拿来挂耳环](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%A9%BF%E7%9A%84%E8%A1%A3%E6%9C%8D%E5%8F%AF%E4%BB%A5%E6%8B%BF%E6%9D%A5%E6%8C%82%E8%80%B3%E7%8E%AF%23) `366.7K 🔥` `NEW`
1. [巴西被吐槽叫不出日本球员名字 (Brazil was criticized for not being able to name Japanese players)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E8%A2%AB%E5%90%90%E6%A7%BD%E5%8F%AB%E4%B8%8D%E5%87%BA%E6%97%A5%E6%9C%AC%E7%90%83%E5%91%98%E5%90%8D%E5%AD%97%23) `366.6K 🔥` `NEW`
1. [曾沛慈总冠军](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E6%80%BB%E5%86%A0%E5%86%9B%23) `366.6K 🔥` `NEW`
1. [金曲奖获奖名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9B%B2%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `366.5K 🔥` `NEW`
1. [AG被RW零封](https://s.weibo.com/weibo?q=%23AG%E8%A2%ABRW%E9%9B%B6%E5%B0%81%23) `366.3K 🔥` `NEW`
1. [常石磊单依纯 争气](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E7%9F%B3%E7%A3%8A%E5%8D%95%E4%BE%9D%E7%BA%AF%20%E4%BA%89%E6%B0%94%23) `366.2K 🔥` `NEW`
1. [陈瑶一直在说没关系](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E4%B8%80%E7%9B%B4%E5%9C%A8%E8%AF%B4%E6%B2%A1%E5%85%B3%E7%B3%BB%23) `366.0K 🔥` `NEW`
1. [奔驰取消德国9万名员工年终奖](https://s.weibo.com/weibo?q=%23%E5%A5%94%E9%A9%B0%E5%8F%96%E6%B6%88%E5%BE%B7%E5%9B%BD9%E4%B8%87%E5%90%8D%E5%91%98%E5%B7%A5%E5%B9%B4%E7%BB%88%E5%A5%96%23) `365.9K 🔥` `NEW`
1. [叶一茜票数](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E4%B8%80%E8%8C%9C%E7%A5%A8%E6%95%B0%23) `365.9K 🔥` `NEW`
1. [北大哲学系主任的毕业致辞火了](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E5%93%B2%E5%AD%A6%E7%B3%BB%E4%B8%BB%E4%BB%BB%E7%9A%84%E6%AF%95%E4%B8%9A%E8%87%B4%E8%BE%9E%E7%81%AB%E4%BA%86%23) `365.8K 🔥` `NEW`
1. [王濛回应国际滑联力挺](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%9B%9E%E5%BA%94%E5%9B%BD%E9%99%85%E6%BB%91%E8%81%94%E5%8A%9B%E6%8C%BA%23) `365.6K 🔥` `NEW`
1. [班主任说要解散班级群 (The class teacher said that the class group should be disbanded)](https://s.weibo.com/weibo?q=%23%E7%8F%AD%E4%B8%BB%E4%BB%BB%E8%AF%B4%E8%A6%81%E8%A7%A3%E6%95%A3%E7%8F%AD%E7%BA%A7%E7%BE%A4%23) `365.6K 🔥` `NEW`
1. [徐梦洁没成团](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E6%B2%A1%E6%88%90%E5%9B%A2%23) `365.4K 🔥` `NEW`
1. [杨紫粉底液](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%B2%89%E5%BA%95%E6%B6%B2%23) `365.3K 🔥` `NEW`
1. [高敏感人都去学农吧](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%95%8F%E6%84%9F%E4%BA%BA%E9%83%BD%E5%8E%BB%E5%AD%A6%E5%86%9C%E5%90%A7%23) `365.3K 🔥` `NEW`
1. [浪姐总决赛](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%80%BB%E5%86%B3%E8%B5%9B%23) `365.0K 🔥` `NEW`
1. [安崎卡位](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E5%8D%A1%E4%BD%8D%23) `365.0K 🔥` `NEW`
1. [欧洲极端高温热死15000人](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%B4%B2%E6%9E%81%E7%AB%AF%E9%AB%98%E6%B8%A9%E7%83%AD%E6%AD%BB15000%E4%BA%BA%23) `364.9K 🔥` `NEW`
1. [金曲奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9B%B2%E5%A5%96%23) `364.7K 🔥` `NEW`
1. [三战高考女孩查分大哭看哭网友](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%88%98%E9%AB%98%E8%80%83%E5%A5%B3%E5%AD%A9%E6%9F%A5%E5%88%86%E5%A4%A7%E5%93%AD%E7%9C%8B%E5%93%AD%E7%BD%91%E5%8F%8B%23) `364.6K 🔥` `NEW`
1. [CMG中国影视之夜](https://s.weibo.com/weibo?q=%23CMG%E4%B8%AD%E5%9B%BD%E5%BD%B1%E8%A7%86%E4%B9%8B%E5%A4%9C%23) `364.5K 🔥` `NEW`
1. [日方对辽宁舰编队滋扰发生重大变化 (Japan’s harassment of the Liaoning fleet has undergone major changes)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%96%B9%E5%AF%B9%E8%BE%BD%E5%AE%81%E8%88%B0%E7%BC%96%E9%98%9F%E6%BB%8B%E6%89%B0%E5%8F%91%E7%94%9F%E9%87%8D%E5%A4%A7%E5%8F%98%E5%8C%96%23) `364.4K 🔥` `NEW`
1. [王濛李小冉和结婚有什么区别](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%9D%8E%E5%B0%8F%E5%86%89%E5%92%8C%E7%BB%93%E5%A9%9A%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%23) `364.3K 🔥` `NEW`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `364.1K 🔥` `NEW`
1. [单依纯](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%23) `364.0K 🔥` `NEW`
1. [张月年度队长](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%B9%B4%E5%BA%A6%E9%98%9F%E9%95%BF%23) `363.9K 🔥` `NEW`
1. [盛世天下](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E4%B8%96%E5%A4%A9%E4%B8%8B%23) `363.7K 🔥` `NEW`
1. [李小冉 假拉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E5%81%87%E6%8B%89%23) `363.7K 🔥` `NEW`
1. [徐洁儿妥协被换了](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E5%A6%A5%E5%8D%8F%E8%A2%AB%E6%8D%A2%E4%BA%86%23) `363.6K 🔥` `NEW`
1. [被电瓶烧伤大学生判赔151万仅获1万](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%94%B5%E7%93%B6%E7%83%A7%E4%BC%A4%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%88%A4%E8%B5%94151%E4%B8%87%E4%BB%85%E8%8E%B71%E4%B8%87%23) `348.1K 🔥` `NEW`
1. [王玉雯晒和娜扎孔雪儿合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%99%92%E5%92%8C%E5%A8%9C%E6%89%8E%E5%AD%94%E9%9B%AA%E5%84%BF%E5%90%88%E7%85%A7%23) `341.7K 🔥` `NEW`
1. [山西挖眼案嫌疑人跳井身亡动机成谜 (Suspect in Shanxi eye-gouging case jumped into well and died, motive remains a mystery)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%8C%96%E7%9C%BC%E6%A1%88%E5%AB%8C%E7%96%91%E4%BA%BA%E8%B7%B3%E4%BA%95%E8%BA%AB%E4%BA%A1%E5%8A%A8%E6%9C%BA%E6%88%90%E8%B0%9C%23) `302.3K 🔥` `NEW`
1. [孙怡团只有徐洁儿能听](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%9B%A2%E5%8F%AA%E6%9C%89%E5%BE%90%E6%B4%81%E5%84%BF%E8%83%BD%E5%90%AC%23) `300.0K 🔥` `NEW`
1. [曾沛慈唱哭了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%94%B1%E5%93%AD%E4%BA%86%23) `299.8K 🔥` `NEW`
1. [去家务化意识](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%AE%B6%E5%8A%A1%E5%8C%96%E6%84%8F%E8%AF%86%23) `296.0K 🔥` `NEW`
1. [AG对战RW](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98RW%23) `294.2K 🔥` `NEW`
1. [高考699分女生父亲发声](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83699%E5%88%86%E5%A5%B3%E7%94%9F%E7%88%B6%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `293.6K 🔥` `NEW`
1. [乌兰图雅卡位13](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%E5%8D%A1%E4%BD%8D13%23) `293.2K 🔥` `NEW`
1. [哈文母女吐槽欧洲热没空调](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%96%87%E6%AF%8D%E5%A5%B3%E5%90%90%E6%A7%BD%E6%AC%A7%E6%B4%B2%E7%83%AD%E6%B2%A1%E7%A9%BA%E8%B0%83%23) `274.2K 🔥` `NEW`
1. [C罗证件照上新](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%AF%81%E4%BB%B6%E7%85%A7%E4%B8%8A%E6%96%B0%23) `267.0K 🔥` `NEW`

Updated at 2026-06-28 00:18:11

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
