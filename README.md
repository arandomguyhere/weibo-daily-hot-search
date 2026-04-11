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

1. [邓超发五哈新阵容照 (Deng Chao posts photos of Wuha’s new lineup)](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%8F%91%E4%BA%94%E5%93%88%E6%96%B0%E9%98%B5%E5%AE%B9%E7%85%A7%23) `761.5K 🔥` `NEW`
1. [孙怡送了一个白眼给芒果](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%80%81%E4%BA%86%E4%B8%80%E4%B8%AA%E7%99%BD%E7%9C%BC%E7%BB%99%E8%8A%92%E6%9E%9C%23) `508.5K 🔥` `NEW`
1. [四川地震](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87%23) `307.3K 🔥` `NEW`
1. [马頔 我还要生孩子呢](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%20%E6%88%91%E8%BF%98%E8%A6%81%E7%94%9F%E5%AD%A9%E5%AD%90%E5%91%A2%23) `300.0K 🔥` `NEW`
1. [海底捞礼物 员工罚款购入](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E7%A4%BC%E7%89%A9%20%E5%91%98%E5%B7%A5%E7%BD%9A%E6%AC%BE%E8%B4%AD%E5%85%A5%23) `290.9K 🔥` `NEW`
1. [天生没有四肢的母亲用嘴养活三个孩子](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%94%9F%E6%B2%A1%E6%9C%89%E5%9B%9B%E8%82%A2%E7%9A%84%E6%AF%8D%E4%BA%B2%E7%94%A8%E5%98%B4%E5%85%BB%E6%B4%BB%E4%B8%89%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `279.4K 🔥` `NEW`
1. [黄瓜拌菠萝](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%93%9C%E6%8B%8C%E8%8F%A0%E8%90%9D%23) `276.0K 🔥` `NEW`
1. [19岁高中生复刻贝克汉姆惊天吊射](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E9%AB%98%E4%B8%AD%E7%94%9F%E5%A4%8D%E5%88%BB%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E6%83%8A%E5%A4%A9%E5%90%8A%E5%B0%84%23) `211.4K 🔥` `NEW`
1. [时代少年团 演唱会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E6%BC%94%E5%94%B1%E4%BC%9A%23) `208.5K 🔥` `NEW`
1. [官方回应湖南一道路插满奠字灯笼](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E6%B9%96%E5%8D%97%E4%B8%80%E9%81%93%E8%B7%AF%E6%8F%92%E6%BB%A1%E5%A5%A0%E5%AD%97%E7%81%AF%E7%AC%BC%23) `206.7K 🔥` `NEW`
1. [赵子琪回应被指茶言茶语 (Zhao Ziqi responds to accusations of tea talk)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%8C%87%E8%8C%B6%E8%A8%80%E8%8C%B6%E8%AF%AD%23) `195.1K 🔥` `NEW`
1. [莫氏鸡煲连夜装上空调](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%BF%9E%E5%A4%9C%E8%A3%85%E4%B8%8A%E7%A9%BA%E8%B0%83%23) `193.8K 🔥` `NEW`
1. [向太说存款没有200万别买车](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E5%AD%98%E6%AC%BE%E6%B2%A1%E6%9C%89200%E4%B8%87%E5%88%AB%E4%B9%B0%E8%BD%A6%23) `186.6K 🔥` `NEW`
1. [范丞丞新中式帅得我有心事了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%96%B0%E4%B8%AD%E5%BC%8F%E5%B8%85%E5%BE%97%E6%88%91%E6%9C%89%E5%BF%83%E4%BA%8B%E4%BA%86%23) `175.9K 🔥` `NEW`
1. [疑似何与朋友点赞吐槽虞书欣言论](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E4%BD%95%E4%B8%8E%E6%9C%8B%E5%8F%8B%E7%82%B9%E8%B5%9E%E5%90%90%E6%A7%BD%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%A8%80%E8%AE%BA%23) `175.9K 🔥` `NEW`
1. [突然意识到敲门好像不用抬手](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E6%95%B2%E9%97%A8%E5%A5%BD%E5%83%8F%E4%B8%8D%E7%94%A8%E6%8A%AC%E6%89%8B%23) `175.4K 🔥` `NEW`
1. [赵达结婚](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E8%BE%BE%E7%BB%93%E5%A9%9A%23) `170.6K 🔥` `NEW`
1. [朴宝剑刘诗诗王安宇孙千人生四格](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%E5%88%98%E8%AF%97%E8%AF%97%E7%8E%8B%E5%AE%89%E5%AE%87%E5%AD%99%E5%8D%83%E4%BA%BA%E7%94%9F%E5%9B%9B%E6%A0%BC%23) `154.6K 🔥` `NEW`
1. [张慧雯掀翻刘昊然](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E6%8E%80%E7%BF%BB%E5%88%98%E6%98%8A%E7%84%B6%23) `150.5K 🔥` `NEW`
1. [保护眼睛的简单方法](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%8A%A4%E7%9C%BC%E7%9D%9B%E7%9A%84%E7%AE%80%E5%8D%95%E6%96%B9%E6%B3%95%23) `147.9K 🔥` `NEW`
1. [一栗小莎子已化疗4次还有8次 (Yili Xiaoshazi has had 4 chemotherapy treatments and there will be 8 more)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E5%B7%B2%E5%8C%96%E7%96%974%E6%AC%A1%E8%BF%98%E6%9C%898%E6%AC%A1%23) `147.7K 🔥` `NEW`
1. [科切拉](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%88%87%E6%8B%89%23) `111.1K 🔥` `NEW`
1. [Gr对战Xteam](https://s.weibo.com/weibo?q=%23Gr%E5%AF%B9%E6%88%98Xteam%23) `107.0K 🔥` `NEW`
1. [猫妈妈自留款](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%A6%88%E5%A6%88%E8%87%AA%E7%95%99%E6%AC%BE%23) `106.4K 🔥` `NEW`
1. [孙俪和小花看五哈](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%92%8C%E5%B0%8F%E8%8A%B1%E7%9C%8B%E4%BA%94%E5%93%88%23) `106.1K 🔥` `NEW`
1. [郑钧感谢全网为jagger操碎了心](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A7%E6%84%9F%E8%B0%A2%E5%85%A8%E7%BD%91%E4%B8%BAjagger%E6%93%8D%E7%A2%8E%E4%BA%86%E5%BF%83%23) `105.2K 🔥` `NEW`
1. [郑丽文想带机器人回台湾](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E6%83%B3%E5%B8%A6%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%9B%9E%E5%8F%B0%E6%B9%BE%23) `97.6K 🔥` `NEW`
1. [徐梦洁说习惯边缘化了](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E8%AF%B4%E4%B9%A0%E6%83%AF%E8%BE%B9%E7%BC%98%E5%8C%96%E4%BA%86%23) `93.0K 🔥` `NEW`
1. [刘雨鑫来完后自助粥锅店老板大吐苦水](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%A8%E9%91%AB%E6%9D%A5%E5%AE%8C%E5%90%8E%E8%87%AA%E5%8A%A9%E7%B2%A5%E9%94%85%E5%BA%97%E8%80%81%E6%9D%BF%E5%A4%A7%E5%90%90%E8%8B%A6%E6%B0%B4%23) `92.6K 🔥` `NEW`
1. [伊朗代表飞行同伴照片令人动容](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BB%A3%E8%A1%A8%E9%A3%9E%E8%A1%8C%E5%90%8C%E4%BC%B4%E7%85%A7%E7%89%87%E4%BB%A4%E4%BA%BA%E5%8A%A8%E5%AE%B9%23) `84.1K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `79.8K 🔥` `NEW`
1. [苏新皓1000平包店人气](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%931000%E5%B9%B3%E5%8C%85%E5%BA%97%E4%BA%BA%E6%B0%94%23) `77.7K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `74.4K 🔥` `NEW`
1. [时代少年团新团歌](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%96%B0%E5%9B%A2%E6%AD%8C%23) `71.0K 🔥` `NEW`
1. [曝华为全新大阔折陆续到店](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%8E%E4%B8%BA%E5%85%A8%E6%96%B0%E5%A4%A7%E9%98%94%E6%8A%98%E9%99%86%E7%BB%AD%E5%88%B0%E5%BA%97%23) `70.8K 🔥` `NEW`
1. [湖南一路段插满白事灯笼](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E4%B8%80%E8%B7%AF%E6%AE%B5%E6%8F%92%E6%BB%A1%E7%99%BD%E4%BA%8B%E7%81%AF%E7%AC%BC%23) `1.1M 🔥` `+347%`
1. [每天做三顿饭肺癌风险高2.1倍](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%81%9A%E4%B8%89%E9%A1%BF%E9%A5%AD%E8%82%BA%E7%99%8C%E9%A3%8E%E9%99%A9%E9%AB%982.1%E5%80%8D%23) `195.9K 🔥` `+65%`
1. [伊朗谈判代表团命名米纳卜168](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%B0%88%E5%88%A4%E4%BB%A3%E8%A1%A8%E5%9B%A2%E5%91%BD%E5%90%8D%E7%B1%B3%E7%BA%B3%E5%8D%9C168%23) `176.6K 🔥` `+192%`
1. [陈昊宇点赞训粉博文](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%8A%E5%AE%87%E7%82%B9%E8%B5%9E%E8%AE%AD%E7%B2%89%E5%8D%9A%E6%96%87%23) `162.2K 🔥` `+34%`
1. [医生回应9斤婴儿出生1月瘦到7斤](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%949%E6%96%A4%E5%A9%B4%E5%84%BF%E5%87%BA%E7%94%9F1%E6%9C%88%E7%98%A6%E5%88%B07%E6%96%A4%23) `156.7K 🔥` `+29%`
1. [嫦娥七号计划下半年发射 (Chang'e-7 is planned to be launched in the second half of the year)](https://s.weibo.com/weibo?q=%23%E5%AB%A6%E5%A8%A5%E4%B8%83%E5%8F%B7%E8%AE%A1%E5%88%92%E4%B8%8B%E5%8D%8A%E5%B9%B4%E5%8F%91%E5%B0%84%23) `598.9K 🔥`
1. [白鹿晚餐吃水煮菜 (White Deer eats boiled vegetables for dinner)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%99%9A%E9%A4%90%E5%90%83%E6%B0%B4%E7%85%AE%E8%8F%9C%23) `205.0K 🔥`
1. [李楷灿疑似恋爱](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%A5%B7%E7%81%BF%E7%96%91%E4%BC%BC%E6%81%8B%E7%88%B1%23) `95.9K 🔥`
1. [赵子琪不会再来浪姐](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E4%B8%8D%E4%BC%9A%E5%86%8D%E6%9D%A5%E6%B5%AA%E5%A7%90%23) `210.2K 🔥` `-64%`
1. [温峥嵘下班也一直在哭着饭撒](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E4%B8%8B%E7%8F%AD%E4%B9%9F%E4%B8%80%E7%9B%B4%E5%9C%A8%E5%93%AD%E7%9D%80%E9%A5%AD%E6%92%92%23) `183.8K 🔥` `-23%`
1. [阿尔忒弥斯2号](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%B0%94%E5%BF%92%E5%BC%A5%E6%96%AF2%E5%8F%B7%23) `149.0K 🔥` `-37%`
1. [小猫被亲一口感觉世界都亮了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%A2%AB%E4%BA%B2%E4%B8%80%E5%8F%A3%E6%84%9F%E8%A7%89%E4%B8%96%E7%95%8C%E9%83%BD%E4%BA%AE%E4%BA%86%23) `94.0K 🔥` `-69%`
1. [唐艺昕趴在李小冉腿上](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E8%B6%B4%E5%9C%A8%E6%9D%8E%E5%B0%8F%E5%86%89%E8%85%BF%E4%B8%8A%23) `92.1K 🔥` `-67%`
1. [被盗声太乙真人配音演员合作被取消](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%9B%97%E5%A3%B0%E5%A4%AA%E4%B9%99%E7%9C%9F%E4%BA%BA%E9%85%8D%E9%9F%B3%E6%BC%94%E5%91%98%E5%90%88%E4%BD%9C%E8%A2%AB%E5%8F%96%E6%B6%88%23) `75.7K 🔥` `-60%`
1. [刘雨鑫又带火了南沙10元自助粥锅店](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%A8%E9%91%AB%E5%8F%88%E5%B8%A6%E7%81%AB%E4%BA%86%E5%8D%97%E6%B2%9910%E5%85%83%E8%87%AA%E5%8A%A9%E7%B2%A5%E9%94%85%E5%BA%97%23) `74.3K 🔥` `-33%`

Updated at 2026-04-11 13:06:50

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
