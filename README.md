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

1. [李晨口碑翻车 (Li Chen’s reputation overturns)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E5%8F%A3%E7%A2%91%E7%BF%BB%E8%BD%A6%23) `14.3M 🔥` `NEW`
1. [废品站称没见60g黄金母亲疑其撒谎](https://s.weibo.com/weibo?q=%23%E5%BA%9F%E5%93%81%E7%AB%99%E7%A7%B0%E6%B2%A1%E8%A7%8160g%E9%BB%84%E9%87%91%E6%AF%8D%E4%BA%B2%E7%96%91%E5%85%B6%E6%92%92%E8%B0%8E%23) `2.1M 🔥` `NEW`
1. [我国多领域再迎硬核突破](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%A4%9A%E9%A2%86%E5%9F%9F%E5%86%8D%E8%BF%8E%E7%A1%AC%E6%A0%B8%E7%AA%81%E7%A0%B4%23) `1.8M 🔥` `NEW`
1. [浪姐声明](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%A3%B0%E6%98%8E%23) `1.7M 🔥` `NEW`
1. [男子3天领证9天后才知妻子欠债10万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%903%E5%A4%A9%E9%A2%86%E8%AF%819%E5%A4%A9%E5%90%8E%E6%89%8D%E7%9F%A5%E5%A6%BB%E5%AD%90%E6%AC%A0%E5%80%BA10%E4%B8%87%23) `670.6K 🔥` `NEW`
1. [奋斗吧新人演员拿到47个试戏机会](https://s.weibo.com/weibo?q=%23%E5%A5%8B%E6%96%97%E5%90%A7%E6%96%B0%E4%BA%BA%E6%BC%94%E5%91%98%E6%8B%BF%E5%88%B047%E4%B8%AA%E8%AF%95%E6%88%8F%E6%9C%BA%E4%BC%9A%23) `565.7K 🔥` `NEW`
1. [吾妻淑柔 吾妻属牛](https://s.weibo.com/weibo?q=%23%E5%90%BE%E5%A6%BB%E6%B7%91%E6%9F%94%20%E5%90%BE%E5%A6%BB%E5%B1%9E%E7%89%9B%23) `433.7K 🔥` `NEW`
1. [上海月租500元的房子什么样](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9C%88%E7%A7%9F500%E5%85%83%E7%9A%84%E6%88%BF%E5%AD%90%E4%BB%80%E4%B9%88%E6%A0%B7%23) `354.0K 🔥` `NEW`
1. [高考作文时间不够一定要写结尾](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%E6%97%B6%E9%97%B4%E4%B8%8D%E5%A4%9F%E4%B8%80%E5%AE%9A%E8%A6%81%E5%86%99%E7%BB%93%E5%B0%BE%23) `353.4K 🔥` `NEW`
1. [范丞丞下沉口碑](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E4%B8%8B%E6%B2%89%E5%8F%A3%E7%A2%91%23) `352.2K 🔥` `NEW`
1. [宇树合作英伟达被批 (Yushu's cooperation with Nvidia was criticized)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%90%88%E4%BD%9C%E8%8B%B1%E4%BC%9F%E8%BE%BE%E8%A2%AB%E6%89%B9%23) `351.6K 🔥` `NEW`
1. [徐振轩道歉](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%8C%AF%E8%BD%A9%E9%81%93%E6%AD%89%23) `350.0K 🔥` `NEW`
1. [金价跌回2025年](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E5%9B%9E2025%E5%B9%B4%23) `348.9K 🔥` `NEW`
1. [WB官宣一笙加入](https://s.weibo.com/weibo?q=%23WB%E5%AE%98%E5%AE%A3%E4%B8%80%E7%AC%99%E5%8A%A0%E5%85%A5%23) `347.7K 🔥` `NEW`
1. [曝青岛某网球场竟是用废网球建的](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9D%92%E5%B2%9B%E6%9F%90%E7%BD%91%E7%90%83%E5%9C%BA%E7%AB%9F%E6%98%AF%E7%94%A8%E5%BA%9F%E7%BD%91%E7%90%83%E5%BB%BA%E7%9A%84%23) `345.3K 🔥` `NEW`
1. [智能眼镜被曝成偷拍神器](https://s.weibo.com/weibo?q=%23%E6%99%BA%E8%83%BD%E7%9C%BC%E9%95%9C%E8%A2%AB%E6%9B%9D%E6%88%90%E5%81%B7%E6%8B%8D%E7%A5%9E%E5%99%A8%23) `343.6K 🔥` `NEW`
1. [鹿晗耳朵还没适应新发型](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%80%B3%E6%9C%B5%E8%BF%98%E6%B2%A1%E9%80%82%E5%BA%94%E6%96%B0%E5%8F%91%E5%9E%8B%23) `343.1K 🔥` `NEW`
1. [严浩翔YAN纹身](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94YAN%E7%BA%B9%E8%BA%AB%23) `342.1K 🔥` `NEW`
1. [中国人聚是一栋楼 散是满地球](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%81%9A%E6%98%AF%E4%B8%80%E6%A0%8B%E6%A5%BC%20%E6%95%A3%E6%98%AF%E6%BB%A1%E5%9C%B0%E7%90%83%23) `340.3K 🔥` `NEW`
1. [曾沛慈安慰黄灿灿](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%AE%89%E6%85%B0%E9%BB%84%E7%81%BF%E7%81%BF%23) `339.3K 🔥` `NEW`
1. [王菲 我打牌的时候没空打她 (Faye Wong, I don’t have time to hit her while I’m playing cards.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%20%E6%88%91%E6%89%93%E7%89%8C%E7%9A%84%E6%97%B6%E5%80%99%E6%B2%A1%E7%A9%BA%E6%89%93%E5%A5%B9%23) `338.3K 🔥` `NEW`
1. [侧躺玩手机受害者](https://s.weibo.com/weibo?q=%23%E4%BE%A7%E8%BA%BA%E7%8E%A9%E6%89%8B%E6%9C%BA%E5%8F%97%E5%AE%B3%E8%80%85%23) `337.4K 🔥` `NEW`
1. [田曦薇白裙大波浪造型](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%99%BD%E8%A3%99%E5%A4%A7%E6%B3%A2%E6%B5%AA%E9%80%A0%E5%9E%8B%23) `336.5K 🔥` `NEW`
1. [海来阿木向张碧晨道歉](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%9D%A5%E9%98%BF%E6%9C%A8%E5%90%91%E5%BC%A0%E7%A2%A7%E6%99%A8%E9%81%93%E6%AD%89%23) `335.7K 🔥` `NEW`
1. [京东洗衣机直播间来就送全家筒](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E6%B4%97%E8%A1%A3%E6%9C%BA%E7%9B%B4%E6%92%AD%E9%97%B4%E6%9D%A5%E5%B0%B1%E9%80%81%E5%85%A8%E5%AE%B6%E7%AD%92%23) `334.0K 🔥` `NEW`
1. [张月说黄灿灿天天都在声明](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E8%AF%B4%E9%BB%84%E7%81%BF%E7%81%BF%E5%A4%A9%E5%A4%A9%E9%83%BD%E5%9C%A8%E5%A3%B0%E6%98%8E%23) `333.7K 🔥` `NEW`
1. [国安部提醒出国旅游别乱拍照](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%89%E9%83%A8%E6%8F%90%E9%86%92%E5%87%BA%E5%9B%BD%E6%97%85%E6%B8%B8%E5%88%AB%E4%B9%B1%E6%8B%8D%E7%85%A7%23) `333.3K 🔥` `NEW`
1. [王一博进组被打假](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%BF%9B%E7%BB%84%E8%A2%AB%E6%89%93%E5%81%87%23) `333.1K 🔥` `NEW`
1. [汤唯疑似去香港待产](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E5%94%AF%E7%96%91%E4%BC%BC%E5%8E%BB%E9%A6%99%E6%B8%AF%E5%BE%85%E4%BA%A7%23) `319.4K 🔥` `NEW`
1. [邓超钓鱼 惠英红上钩](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E9%92%93%E9%B1%BC%20%E6%83%A0%E8%8B%B1%E7%BA%A2%E4%B8%8A%E9%92%A9%23) `299.1K 🔥` `NEW`
1. [舞蹈世家二十年后出了一个宇航员 (Twenty years later, an astronaut was born from the dance family)](https://s.weibo.com/weibo?q=%23%E8%88%9E%E8%B9%88%E4%B8%96%E5%AE%B6%E4%BA%8C%E5%8D%81%E5%B9%B4%E5%90%8E%E5%87%BA%E4%BA%86%E4%B8%80%E4%B8%AA%E5%AE%87%E8%88%AA%E5%91%98%23) `289.5K 🔥` `NEW`
1. [范丞丞的口碑](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%9A%84%E5%8F%A3%E7%A2%91%23) `284.1K 🔥` `NEW`
1. [张真源拍了孟子义送的花篮](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E6%8B%8D%E4%BA%86%E5%AD%9F%E5%AD%90%E4%B9%89%E9%80%81%E7%9A%84%E8%8A%B1%E7%AF%AE%23) `280.2K 🔥` `NEW`
1. [入夏洗空调遇到的坑](https://s.weibo.com/weibo?q=%23%E5%85%A5%E5%A4%8F%E6%B4%97%E7%A9%BA%E8%B0%83%E9%81%87%E5%88%B0%E7%9A%84%E5%9D%91%23) `252.3K 🔥` `NEW`
1. [教育部发布4条高考特别提醒](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E9%83%A8%E5%8F%91%E5%B8%834%E6%9D%A1%E9%AB%98%E8%80%83%E7%89%B9%E5%88%AB%E6%8F%90%E9%86%92%23) `245.9K 🔥` `NEW`
1. [严浩翔接受发生的一切事](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%8E%A5%E5%8F%97%E5%8F%91%E7%94%9F%E7%9A%84%E4%B8%80%E5%88%87%E4%BA%8B%23) `234.7K 🔥` `NEW`
1. [11月龄女婴确诊遗传病母亲自责痛哭](https://s.weibo.com/weibo?q=%2311%E6%9C%88%E9%BE%84%E5%A5%B3%E5%A9%B4%E7%A1%AE%E8%AF%8A%E9%81%97%E4%BC%A0%E7%97%85%E6%AF%8D%E4%BA%B2%E8%87%AA%E8%B4%A3%E7%97%9B%E5%93%AD%23) `210.9K 🔥` `NEW`
1. [谢娜发了和李心洁的聊天记录](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%8F%91%E4%BA%86%E5%92%8C%E6%9D%8E%E5%BF%83%E6%B4%81%E7%9A%84%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `199.1K 🔥` `NEW`
1. [尼克斯2比0马刺](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%85%8B%E6%96%AF2%E6%AF%940%E9%A9%AC%E5%88%BA%23) `187.6K 🔥` `NEW`
1. [马頔回五哈好好发发脾气](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E5%9B%9E%E4%BA%94%E5%93%88%E5%A5%BD%E5%A5%BD%E5%8F%91%E5%8F%91%E8%84%BE%E6%B0%94%23) `186.5K 🔥` `NEW`
1. [李晨郑恺回应争议 (Li Chen and Zheng Kai respond to controversy)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%E5%9B%9E%E5%BA%94%E4%BA%89%E8%AE%AE%23) `627.8K 🔥` `+56%`
1. [全国首例盲人脑机接口复明成功 (The country's first blind man successfully regained his sight through brain-computer interface)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E9%A6%96%E4%BE%8B%E7%9B%B2%E4%BA%BA%E8%84%91%E6%9C%BA%E6%8E%A5%E5%8F%A3%E5%A4%8D%E6%98%8E%E6%88%90%E5%8A%9F%23) `345.5K 🔥`
1. [李登科聊刘亦菲7折捡漏刘诗诗代言](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E8%81%8A%E5%88%98%E4%BA%A6%E8%8F%B27%E6%8A%98%E6%8D%A1%E6%BC%8F%E5%88%98%E8%AF%97%E8%AF%97%E4%BB%A3%E8%A8%80%23) `268.3K 🔥`
1. [浪姐观众 金牌的king](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%A7%82%E4%BC%97%20%E9%87%91%E7%89%8C%E7%9A%84king%23) `242.0K 🔥`
1. [高考时间](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%97%B6%E9%97%B4%23) `429.2K 🔥` `-60%`
1. [文班亚马致命失误](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E8%87%B4%E5%91%BD%E5%A4%B1%E8%AF%AF%23) `347.1K 🔥` `-56%`
1. [全球资产崩跌](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%B5%84%E4%BA%A7%E5%B4%A9%E8%B7%8C%23) `319.2K 🔥` `-22%`
1. [歌手谢谢验票](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E8%B0%A2%E8%B0%A2%E9%AA%8C%E7%A5%A8%23) `319.2K 🔥` `-53%`
1. [摄影师开黄腔被女子制止后P图报复](https://s.weibo.com/weibo?q=%23%E6%91%84%E5%BD%B1%E5%B8%88%E5%BC%80%E9%BB%84%E8%85%94%E8%A2%AB%E5%A5%B3%E5%AD%90%E5%88%B6%E6%AD%A2%E5%90%8EP%E5%9B%BE%E6%8A%A5%E5%A4%8D%23) `271.1K 🔥` `-33%`
1. [王濛金牌含金量](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E9%87%91%E7%89%8C%E5%90%AB%E9%87%91%E9%87%8F%23) `192.0K 🔥` `-31%`
1. [你多久没喊过Siri了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A4%9A%E4%B9%85%E6%B2%A1%E5%96%8A%E8%BF%87Siri%E4%BA%86%23) `186.8K 🔥` `-26%`

Updated at 2026-06-06 15:26:42

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
