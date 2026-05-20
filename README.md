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

1. [中俄元首会见记者 (The heads of state of China and Russia met with reporters)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E5%85%83%E9%A6%96%E4%BC%9A%E8%A7%81%E8%AE%B0%E8%80%85%23) `1.1M 🔥` `NEW`
1. [普京宾至如归脱下外套](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E5%AE%BE%E8%87%B3%E5%A6%82%E5%BD%92%E8%84%B1%E4%B8%8B%E5%A4%96%E5%A5%97%23) `843.5K 🔥` `NEW`
1. [中俄合作新篇章](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E5%90%88%E4%BD%9C%E6%96%B0%E7%AF%87%E7%AB%A0%23) `634.0K 🔥` `NEW`
1. [张凌赫把金靖放在C位](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8A%8A%E9%87%91%E9%9D%96%E6%94%BE%E5%9C%A8C%E4%BD%8D%23) `628.1K 🔥` `NEW`
1. [曝iPhoneUltra无折痕技术和OPPO类似](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhoneUltra%E6%97%A0%E6%8A%98%E7%97%95%E6%8A%80%E6%9C%AF%E5%92%8COPPO%E7%B1%BB%E4%BC%BC%23) `614.3K 🔥` `NEW`
1. [心相印携手樊振东发布焕心计划](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%9B%B8%E5%8D%B0%E6%90%BA%E6%89%8B%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8F%91%E5%B8%83%E7%84%95%E5%BF%83%E8%AE%A1%E5%88%92%23) `546.1K 🔥` `NEW`
1. [普京欢迎仪式](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%AC%A2%E8%BF%8E%E4%BB%AA%E5%BC%8F%23) `459.1K 🔥` `NEW`
1. [王楚钦汪顺超浪漫海报](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%B1%AA%E9%A1%BA%E8%B6%85%E6%B5%AA%E6%BC%AB%E6%B5%B7%E6%8A%A5%23) `427.2K 🔥` `NEW`
1. [豆包越来越诡异了](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E8%B6%8A%E6%9D%A5%E8%B6%8A%E8%AF%A1%E5%BC%82%E4%BA%86%23) `403.3K 🔥` `NEW`
1. [丁程鑫 我养猪杀你](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%20%E6%88%91%E5%85%BB%E7%8C%AA%E6%9D%80%E4%BD%A0%23) `334.2K 🔥` `NEW`
1. [特朗普家族被豁免永久禁止国税局审计 (Trump family exempted from permanent IRS audit ban)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%AE%B6%E6%97%8F%E8%A2%AB%E8%B1%81%E5%85%8D%E6%B0%B8%E4%B9%85%E7%A6%81%E6%AD%A2%E5%9B%BD%E7%A8%8E%E5%B1%80%E5%AE%A1%E8%AE%A1%23) `326.0K 🔥` `NEW`
1. [金鹤龙回应白鹿20万一次造型](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%A4%E9%BE%99%E5%9B%9E%E5%BA%94%E7%99%BD%E9%B9%BF20%E4%B8%87%E4%B8%80%E6%AC%A1%E9%80%A0%E5%9E%8B%23) `322.3K 🔥` `NEW`
1. [除了王一博没有人这样对粉丝](https://s.weibo.com/weibo?q=%23%E9%99%A4%E4%BA%86%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%B2%A1%E6%9C%89%E4%BA%BA%E8%BF%99%E6%A0%B7%E5%AF%B9%E7%B2%89%E4%B8%9D%23) `319.2K 🔥` `NEW`
1. [浪姐三天直播三场](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%89%E5%A4%A9%E7%9B%B4%E6%92%AD%E4%B8%89%E5%9C%BA%23) `313.8K 🔥` `NEW`
1. [人一旦有了考研的念头](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E6%9C%89%E4%BA%86%E8%80%83%E7%A0%94%E7%9A%84%E5%BF%B5%E5%A4%B4%23) `313.5K 🔥` `NEW`
1. [唐艺昕张若昀 龇牙咧嘴夫妇](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%BC%A0%E8%8B%A5%E6%98%80%20%E9%BE%87%E7%89%99%E5%92%A7%E5%98%B4%E5%A4%AB%E5%A6%87%23) `312.0K 🔥` `NEW`
1. [贷款借给朋友50万父亲肺癌要回被怼](https://s.weibo.com/weibo?q=%23%E8%B4%B7%E6%AC%BE%E5%80%9F%E7%BB%99%E6%9C%8B%E5%8F%8B50%E4%B8%87%E7%88%B6%E4%BA%B2%E8%82%BA%E7%99%8C%E8%A6%81%E5%9B%9E%E8%A2%AB%E6%80%BC%23) `309.9K 🔥` `NEW`
1. [颜颜哭着告白凯凯](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E9%A2%9C%E5%93%AD%E7%9D%80%E5%91%8A%E7%99%BD%E5%87%AF%E5%87%AF%23) `309.9K 🔥` `NEW`
1. [普京说亲爱的朋友一日不见如隔三秋](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AF%B4%E4%BA%B2%E7%88%B1%E7%9A%84%E6%9C%8B%E5%8F%8B%E4%B8%80%E6%97%A5%E4%B8%8D%E8%A7%81%E5%A6%82%E9%9A%94%E4%B8%89%E7%A7%8B%23) `307.6K 🔥` `NEW`
1. [齐齐哈尔2700多亩湿地被人为破坏](https://s.weibo.com/weibo?q=%23%E9%BD%90%E9%BD%90%E5%93%88%E5%B0%942700%E5%A4%9A%E4%BA%A9%E6%B9%BF%E5%9C%B0%E8%A2%AB%E4%BA%BA%E4%B8%BA%E7%A0%B4%E5%9D%8F%23) `307.4K 🔥` `NEW`
1. [喜笑颜凯 (Happy Yankai)](https://s.weibo.com/weibo?q=%23%E5%96%9C%E7%AC%91%E9%A2%9C%E5%87%AF%23) `306.1K 🔥` `NEW`
1. [公司以不符阳光干练标准辞退员工](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E4%BB%A5%E4%B8%8D%E7%AC%A6%E9%98%B3%E5%85%89%E5%B9%B2%E7%BB%83%E6%A0%87%E5%87%86%E8%BE%9E%E9%80%80%E5%91%98%E5%B7%A5%23) `304.0K 🔥` `NEW`
1. [中俄领导人握手](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E9%A2%86%E5%AF%BC%E4%BA%BA%E6%8F%A1%E6%89%8B%23) `302.8K 🔥` `NEW`
1. [iPhone绝版配件回归](https://s.weibo.com/weibo?q=%23iPhone%E7%BB%9D%E7%89%88%E9%85%8D%E4%BB%B6%E5%9B%9E%E5%BD%92%23) `301.1K 🔥` `NEW`
1. [岳父朝女婿吐口水被摔断9根肋骨](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E7%88%B6%E6%9C%9D%E5%A5%B3%E5%A9%BF%E5%90%90%E5%8F%A3%E6%B0%B4%E8%A2%AB%E6%91%94%E6%96%AD9%E6%A0%B9%E8%82%8B%E9%AA%A8%23) `301.0K 🔥` `NEW`
1. [怦然心动20岁](https://s.weibo.com/weibo?q=%23%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A820%E5%B2%81%23) `297.8K 🔥` `NEW`
1. [今年的520锦鲤是谁](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E7%9A%84520%E9%94%A6%E9%B2%A4%E6%98%AF%E8%B0%81%23) `271.4K 🔥` `NEW`
1. [小新恩恩正式牵手](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%96%B0%E6%81%A9%E6%81%A9%E6%AD%A3%E5%BC%8F%E7%89%B5%E6%89%8B%23) `268.1K 🔥` `NEW`
1. [时代少年团红包](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%BA%A2%E5%8C%85%23) `253.9K 🔥` `NEW`
1. [原来身体给的保命暗示已经很明显了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BA%AB%E4%BD%93%E7%BB%99%E7%9A%84%E4%BF%9D%E5%91%BD%E6%9A%97%E7%A4%BA%E5%B7%B2%E7%BB%8F%E5%BE%88%E6%98%8E%E6%98%BE%E4%BA%86%23) `253.2K 🔥` `NEW`
1. [邓超要开演唱会了 (Deng Chao is going to have a concert)](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E8%A6%81%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%86%23) `251.7K 🔥` `NEW`
1. [男性感染HPV后身体会有什么变化](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%80%A7%E6%84%9F%E6%9F%93HPV%E5%90%8E%E8%BA%AB%E4%BD%93%E4%BC%9A%E6%9C%89%E4%BB%80%E4%B9%88%E5%8F%98%E5%8C%96%23) `251.4K 🔥` `NEW`
1. [TOP红包](https://s.weibo.com/weibo?q=%23TOP%E7%BA%A2%E5%8C%85%23) `249.9K 🔥` `NEW`
1. [泰剧拍出了正常人的真实反应](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%89%A7%E6%8B%8D%E5%87%BA%E4%BA%86%E6%AD%A3%E5%B8%B8%E4%BA%BA%E7%9A%84%E7%9C%9F%E5%AE%9E%E5%8F%8D%E5%BA%94%23) `248.7K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `246.9K 🔥` `NEW`
1. [喜欢你6阵容官宣](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E4%BD%A06%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `246.0K 🔥` `NEW`
1. [Seedance和谷歌Omni谁更强](https://s.weibo.com/weibo?q=%23Seedance%E5%92%8C%E8%B0%B7%E6%AD%8COmni%E8%B0%81%E6%9B%B4%E5%BC%BA%23) `244.4K 🔥` `NEW`
1. [张泽禹 一款肯为你花3小时拼豆的爱豆](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%BD%E7%A6%B9%20%E4%B8%80%E6%AC%BE%E8%82%AF%E4%B8%BA%E4%BD%A0%E8%8A%B13%E5%B0%8F%E6%97%B6%E6%8B%BC%E8%B1%86%E7%9A%84%E7%88%B1%E8%B1%86%23) `243.3K 🔥` `NEW`
1. [鹤男攻玉开机状态](https://s.weibo.com/weibo?q=%23%E9%B9%A4%E7%94%B7%E6%94%BB%E7%8E%89%E5%BC%80%E6%9C%BA%E7%8A%B6%E6%80%81%23) `242.3K 🔥` `NEW`
1. [10人倒卖500余万条公积金信息被刑拘](https://s.weibo.com/weibo?q=%2310%E4%BA%BA%E5%80%92%E5%8D%96500%E4%BD%99%E4%B8%87%E6%9D%A1%E5%85%AC%E7%A7%AF%E9%87%91%E4%BF%A1%E6%81%AF%E8%A2%AB%E5%88%91%E6%8B%98%23) `241.2K 🔥` `NEW`
1. [男子520凌晨3点排队和同事领证 (Man 520 queued up with his colleagues to collect his certificate at 3 am)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90520%E5%87%8C%E6%99%A83%E7%82%B9%E6%8E%92%E9%98%9F%E5%92%8C%E5%90%8C%E4%BA%8B%E9%A2%86%E8%AF%81%23) `240.0K 🔥` `NEW`
1. [普京抵达人民大会堂](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%8A%B5%E8%BE%BE%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%23) `239.0K 🔥` `NEW`
1. [昀牵孟绕520物料](https://s.weibo.com/weibo?q=%23%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95520%E7%89%A9%E6%96%99%23) `237.3K 🔥` `NEW`
1. [小胖 TTG](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%83%96%20TTG%23) `236.1K 🔥` `NEW`
1. [男性预防HPV也是爱自己的必修课](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%80%A7%E9%A2%84%E9%98%B2HPV%E4%B9%9F%E6%98%AF%E7%88%B1%E8%87%AA%E5%B7%B1%E7%9A%84%E5%BF%85%E4%BF%AE%E8%AF%BE%23) `235.5K 🔥` `NEW`
1. [520集卡收告白](https://s.weibo.com/weibo?q=%23520%E9%9B%86%E5%8D%A1%E6%94%B6%E5%91%8A%E7%99%BD%23) `233.6K 🔥` `NEW`
1. [万家小店将焕新樊振东同款纸巾](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%AE%B6%E5%B0%8F%E5%BA%97%E5%B0%86%E7%84%95%E6%96%B0%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%90%8C%E6%AC%BE%E7%BA%B8%E5%B7%BE%23) `232.6K 🔥` `NEW`
1. [孙颖莎王楚钦混双搭档第九年](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%B7%B7%E5%8F%8C%E6%90%AD%E6%A1%A3%E7%AC%AC%E4%B9%9D%E5%B9%B4%23) `231.3K 🔥` `NEW`
1. [国产芯片好消息不断](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E8%8A%AF%E7%89%87%E5%A5%BD%E6%B6%88%E6%81%AF%E4%B8%8D%E6%96%AD%23) `230.7K 🔥` `NEW`
1. [中俄元首会谈](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E5%85%83%E9%A6%96%E4%BC%9A%E8%B0%88%23) `229.6K 🔥` `NEW`
1. [连续4年No.1卫生巾 (No.1 sanitary napkin for 4 consecutive years)](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E7%BB%AD4%E5%B9%B4No.1%E5%8D%AB%E7%94%9F%E5%B7%BE%23) `632.9K 🔥` `+451%`
1. [520红包 (520 red envelope)](https://s.weibo.com/weibo?q=%23520%E7%BA%A2%E5%8C%85%23) `559.1K 🔥` `+80%`

Updated at 2026-05-20 14:16:50

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
