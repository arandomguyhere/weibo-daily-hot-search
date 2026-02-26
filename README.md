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

1. [12306已累计预售春运火车票3.76亿张 (12306 has pre-sold a total of 376 million Spring Festival travel train tickets)](https://s.weibo.com/weibo?q=%2312306%E5%B7%B2%E7%B4%AF%E8%AE%A1%E9%A2%84%E5%94%AE%E6%98%A5%E8%BF%90%E7%81%AB%E8%BD%A6%E7%A5%A83.76%E4%BA%BF%E5%BC%A0%23) `195.6K 🔥` `NEW`
1. [田柾国直播爆粗口](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9F%BE%E5%9B%BD%E7%9B%B4%E6%92%AD%E7%88%86%E7%B2%97%E5%8F%A3%23) `70.6K 🔥` `NEW`
1. [刘诗诗头戴非遗绒花高雅动人](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E5%A4%B4%E6%88%B4%E9%9D%9E%E9%81%97%E7%BB%92%E8%8A%B1%E9%AB%98%E9%9B%85%E5%8A%A8%E4%BA%BA%23) `49.9K 🔥` `NEW`
1. [香港山火仍在扑救中](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%B1%B1%E7%81%AB%E4%BB%8D%E5%9C%A8%E6%89%91%E6%95%91%E4%B8%AD%23) `35.3K 🔥` `NEW`
1. [纯真年代的爱情](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `34.6K 🔥` `NEW`
1. [KSG战胜DYG](https://s.weibo.com/weibo?q=%23KSG%E6%88%98%E8%83%9CDYG%23) `29.7K 🔥` `NEW`
1. [一盒内存条堪比一套房](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%92%E5%86%85%E5%AD%98%E6%9D%A1%E5%A0%AA%E6%AF%94%E4%B8%80%E5%A5%97%E6%88%BF%23) `114.1K 🔥`
1. [11月宝宝从婴儿车滑落颅脑重伤](https://s.weibo.com/weibo?q=%2311%E6%9C%88%E5%AE%9D%E5%AE%9D%E4%BB%8E%E5%A9%B4%E5%84%BF%E8%BD%A6%E6%BB%91%E8%90%BD%E9%A2%85%E8%84%91%E9%87%8D%E4%BC%A4%23) `41.2K 🔥`
1. [没见过这么大笑的易烊千玺](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E8%A7%81%E8%BF%87%E8%BF%99%E4%B9%88%E5%A4%A7%E7%AC%91%E7%9A%84%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%23) `34.6K 🔥`
1. [24岁女生成功诞下1男4女5胞胎 (24-year-old girl successfully gave birth to quintuplets, 1 boy, 4 girls)](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E7%94%9F%E6%88%90%E5%8A%9F%E8%AF%9E%E4%B8%8B1%E7%94%B74%E5%A5%B35%E8%83%9E%E8%83%8E%23) `352.9K 🔥` `-52%`
1. [手机 涨价](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%20%E6%B6%A8%E4%BB%B7%23) `282.3K 🔥` `-48%`
1. [尘白禁区发文回应 (Chenbai restricted area issued a response)](https://s.weibo.com/weibo?q=%23%E5%B0%98%E7%99%BD%E7%A6%81%E5%8C%BA%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%23) `165.6K 🔥` `-42%`
1. [男子谎称走亲戚欲把7岁儿子留老家](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B0%8E%E7%A7%B0%E8%B5%B0%E4%BA%B2%E6%88%9A%E6%AC%B2%E6%8A%8A7%E5%B2%81%E5%84%BF%E5%AD%90%E7%95%99%E8%80%81%E5%AE%B6%23) `90.6K 🔥` `-52%`
1. [虞书欣红衣主母跳惊鸿一面](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%BA%A2%E8%A1%A3%E4%B8%BB%E6%AF%8D%E8%B7%B3%E6%83%8A%E9%B8%BF%E4%B8%80%E9%9D%A2%23) `90.6K 🔥` `-43%`
1. [迪丽热巴 瓦猫](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E7%93%A6%E7%8C%AB%23) `77.3K 🔥` `-65%`
1. [网传浪姐7参赛名单](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%907%E5%8F%82%E8%B5%9B%E5%90%8D%E5%8D%95%23) `71.6K 🔥` `-64%`
1. [日本物价居然到这种程度了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%89%A9%E4%BB%B7%E5%B1%85%E7%84%B6%E5%88%B0%E8%BF%99%E7%A7%8D%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `71.6K 🔥` `-49%`
1. [杨幂TOP坐一起 (Yang Mi TOP sits together)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82TOP%E5%9D%90%E4%B8%80%E8%B5%B7%23) `71.0K 🔥` `-49%`
1. [苹果新品来了](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%96%B0%E5%93%81%E6%9D%A5%E4%BA%86%23) `70.3K 🔥` `-49%`
1. [比尔盖茨出轨女性身份曝光](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E5%87%BA%E8%BD%A8%E5%A5%B3%E6%80%A7%E8%BA%AB%E4%BB%BD%E6%9B%9D%E5%85%89%23) `69.9K 🔥` `-22%`
1. [冬奥花滑冠军刘美贤遭俄罗斯粉丝吐槽](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E8%8A%B1%E6%BB%91%E5%86%A0%E5%86%9B%E5%88%98%E7%BE%8E%E8%B4%A4%E9%81%AD%E4%BF%84%E7%BD%97%E6%96%AF%E7%B2%89%E4%B8%9D%E5%90%90%E6%A7%BD%23) `69.2K 🔥` `-49%`
1. [杨幂怼脸镜头好美](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%80%BC%E8%84%B8%E9%95%9C%E5%A4%B4%E5%A5%BD%E7%BE%8E%23) `69.1K 🔥` `-48%`
1. [谷爱凌Prada看秀 (Gu Ailing watches Prada show)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8CPrada%E7%9C%8B%E7%A7%80%23) `63.8K 🔥` `-27%`
1. [橹穆双人舞台官摄破2711万](https://s.weibo.com/weibo?q=%23%E6%A9%B9%E7%A9%86%E5%8F%8C%E4%BA%BA%E8%88%9E%E5%8F%B0%E5%AE%98%E6%91%84%E7%A0%B42711%E4%B8%87%23) `57.9K 🔥` `-37%`
1. [各地买房公积金最多能贷多少](https://s.weibo.com/weibo?q=%23%E5%90%84%E5%9C%B0%E4%B9%B0%E6%88%BF%E5%85%AC%E7%A7%AF%E9%87%91%E6%9C%80%E5%A4%9A%E8%83%BD%E8%B4%B7%E5%A4%9A%E5%B0%91%23) `47.7K 🔥` `-66%`
1. [中国邮政回应已叫停相关线下活动 (China Post responded that it has suspended relevant offline activities.)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%82%AE%E6%94%BF%E5%9B%9E%E5%BA%94%E5%B7%B2%E5%8F%AB%E5%81%9C%E7%9B%B8%E5%85%B3%E7%BA%BF%E4%B8%8B%E6%B4%BB%E5%8A%A8%23) `47.7K 🔥` `-51%`
1. [王天辰郭晓婷花絮好甜](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%E9%83%AD%E6%99%93%E5%A9%B7%E8%8A%B1%E7%B5%AE%E5%A5%BD%E7%94%9C%23) `47.4K 🔥` `-28%`
1. [嘉人单发苏新皓](https://s.weibo.com/weibo?q=%23%E5%98%89%E4%BA%BA%E5%8D%95%E5%8F%91%E8%8B%8F%E6%96%B0%E7%9A%93%23) `45.1K 🔥` `-34%`
1. [王橹杰手捧红玫瑰 (Wang Lujie holds red roses in hand)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%89%8B%E6%8D%A7%E7%BA%A2%E7%8E%AB%E7%91%B0%23) `43.3K 🔥` `-42%`
1. [老外以为一个姓张的人研究遍及各学科](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E4%BB%A5%E4%B8%BA%E4%B8%80%E4%B8%AA%E5%A7%93%E5%BC%A0%E7%9A%84%E4%BA%BA%E7%A0%94%E7%A9%B6%E9%81%8D%E5%8F%8A%E5%90%84%E5%AD%A6%E7%A7%91%23) `37.7K 🔥` `-53%`
1. [JDG战胜AL](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9CAL%23) `37.6K 🔥` `-44%`
1. [孙燕姿新歌飞瀑而下](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%E6%96%B0%E6%AD%8C%E9%A3%9E%E7%80%91%E8%80%8C%E4%B8%8B%23) `37.2K 🔥` `-70%`
1. [一趟列车24站解锁200多家景区](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%B6%9F%E5%88%97%E8%BD%A624%E7%AB%99%E8%A7%A3%E9%94%81200%E5%A4%9A%E5%AE%B6%E6%99%AF%E5%8C%BA%23) `36.8K 🔥` `-92%`
1. [创造营2026女生季](https://s.weibo.com/weibo?q=%23%E5%88%9B%E9%80%A0%E8%90%A52026%E5%A5%B3%E7%94%9F%E5%AD%A3%23) `36.6K 🔥` `-46%`
1. [Cat毕业典礼 (Cat Graduation Ceremony)](https://s.weibo.com/weibo?q=%23Cat%E6%AF%95%E4%B8%9A%E5%85%B8%E7%A4%BC%23) `36.2K 🔥` `-50%`
1. [Prada直播](https://s.weibo.com/weibo?q=%23Prada%E7%9B%B4%E6%92%AD%23) `35.9K 🔥` `-30%`
1. [张艺兴小张入职第一天](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E5%85%B4%E5%B0%8F%E5%BC%A0%E5%85%A5%E8%81%8C%E7%AC%AC%E4%B8%80%E5%A4%A9%23) `34.9K 🔥` `-60%`
1. [中方回应金正恩对韩表态](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E9%87%91%E6%AD%A3%E6%81%A9%E5%AF%B9%E9%9F%A9%E8%A1%A8%E6%80%81%23) `33.6K 🔥` `-66%`
1. [TOP大秀现场](https://s.weibo.com/weibo?q=%23TOP%E5%A4%A7%E7%A7%80%E7%8E%B0%E5%9C%BA%23) `33.1K 🔥` `-60%`
1. [曝迪丽热巴与嘉行合约到期](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B8%8E%E5%98%89%E8%A1%8C%E5%90%88%E7%BA%A6%E5%88%B0%E6%9C%9F%23) `32.9K 🔥` `-41%`
1. [全网最黑大熊猫出现了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E6%9C%80%E9%BB%91%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%87%BA%E7%8E%B0%E4%BA%86%23) `31.6K 🔥` `-33%`
1. [向佑不满遗产分配直喊不公平](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%91%E4%B8%8D%E6%BB%A1%E9%81%97%E4%BA%A7%E5%88%86%E9%85%8D%E7%9B%B4%E5%96%8A%E4%B8%8D%E5%85%AC%E5%B9%B3%23) `30.7K 🔥` `-68%`
1. [王天辰 上桌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%20%E4%B8%8A%E6%A1%8C%23) `30.0K 🔥` `-62%`
1. [JDG晋级LPL胜决](https://s.weibo.com/weibo?q=%23JDG%E6%99%8B%E7%BA%A7LPL%E8%83%9C%E5%86%B3%23) `29.7K 🔥` `-44%`
1. [郭富城一家去景区只用买一张票 (Aaron Kwok and his family only need to buy one ticket to go to scenic spots)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E4%B8%80%E5%AE%B6%E5%8E%BB%E6%99%AF%E5%8C%BA%E5%8F%AA%E7%94%A8%E4%B9%B0%E4%B8%80%E5%BC%A0%E7%A5%A8%23) `29.7K 🔥` `-37%`
1. [兔闪闪道歉](https://s.weibo.com/weibo?q=%23%E5%85%94%E9%97%AA%E9%97%AA%E9%81%93%E6%AD%89%23) `29.7K 🔥` `-40%`
1. [中国男篮战胜日本男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E6%88%98%E8%83%9C%E6%97%A5%E6%9C%AC%E7%94%B7%E7%AF%AE%23) `29.7K 🔥` `-46%`
1. [领克致歉语音误关大灯 (Lynk & Co apologizes for turning off headlights by mistake)](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B%E8%87%B4%E6%AD%89%E8%AF%AD%E9%9F%B3%E8%AF%AF%E5%85%B3%E5%A4%A7%E7%81%AF%23) `29.7K 🔥` `-45%`

Updated at 2026-02-27 01:48:28

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
