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

1. [24岁女生成功诞下1男4女5胞胎 (24-year-old girl successfully gave birth to quintuplets, 1 boy, 4 girls)](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E7%94%9F%E6%88%90%E5%8A%9F%E8%AF%9E%E4%B8%8B1%E7%94%B74%E5%A5%B35%E8%83%9E%E8%83%8E%23) `733.2K 🔥` `NEW`
1. [手机 涨价](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%20%E6%B6%A8%E4%BB%B7%23) `541.3K 🔥` `NEW`
1. [一趟列车24站解锁200多家景区](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%B6%9F%E5%88%97%E8%BD%A624%E7%AB%99%E8%A7%A3%E9%94%81200%E5%A4%9A%E5%AE%B6%E6%99%AF%E5%8C%BA%23) `434.6K 🔥` `NEW`
1. [尘白禁区发文回应](https://s.weibo.com/weibo?q=%23%E5%B0%98%E7%99%BD%E7%A6%81%E5%8C%BA%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%23) `287.1K 🔥` `NEW`
1. [迪丽热巴 瓦猫](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E7%93%A6%E7%8C%AB%23) `220.3K 🔥` `NEW`
1. [网传浪姐7参赛名单](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%907%E5%8F%82%E8%B5%9B%E5%90%8D%E5%8D%95%23) `200.8K 🔥` `NEW`
1. [男子谎称走亲戚欲把7岁儿子留老家](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B0%8E%E7%A7%B0%E8%B5%B0%E4%BA%B2%E6%88%9A%E6%AC%B2%E6%8A%8A7%E5%B2%81%E5%84%BF%E5%AD%90%E7%95%99%E8%80%81%E5%AE%B6%23) `190.3K 🔥` `NEW`
1. [虞书欣红衣主母跳惊鸿一面](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%BA%A2%E8%A1%A3%E4%B8%BB%E6%AF%8D%E8%B7%B3%E6%83%8A%E9%B8%BF%E4%B8%80%E9%9D%A2%23) `159.3K 🔥` `NEW`
1. [日本物价居然到这种程度了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%89%A9%E4%BB%B7%E5%B1%85%E7%84%B6%E5%88%B0%E8%BF%99%E7%A7%8D%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `140.0K 🔥` `NEW`
1. [各地买房公积金最多能贷多少](https://s.weibo.com/weibo?q=%23%E5%90%84%E5%9C%B0%E4%B9%B0%E6%88%BF%E5%85%AC%E7%A7%AF%E9%87%91%E6%9C%80%E5%A4%9A%E8%83%BD%E8%B4%B7%E5%A4%9A%E5%B0%91%23) `139.4K 🔥` `NEW`
1. [杨幂TOP坐一起 (Yang Mi TOP sits together)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82TOP%E5%9D%90%E4%B8%80%E8%B5%B7%23) `137.9K 🔥` `NEW`
1. [苹果新品来了](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%96%B0%E5%93%81%E6%9D%A5%E4%BA%86%23) `137.1K 🔥` `NEW`
1. [冬奥花滑冠军刘美贤遭俄罗斯粉丝吐槽](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E8%8A%B1%E6%BB%91%E5%86%A0%E5%86%9B%E5%88%98%E7%BE%8E%E8%B4%A4%E9%81%AD%E4%BF%84%E7%BD%97%E6%96%AF%E7%B2%89%E4%B8%9D%E5%90%90%E6%A7%BD%23) `136.1K 🔥` `NEW`
1. [王楚钦1比7落后逆转](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A61%E6%AF%947%E8%90%BD%E5%90%8E%E9%80%86%E8%BD%AC%23) `134.9K 🔥` `NEW`
1. [尘白禁区 中国邮政](https://s.weibo.com/weibo?q=%23%E5%B0%98%E7%99%BD%E7%A6%81%E5%8C%BA%20%E4%B8%AD%E5%9B%BD%E9%82%AE%E6%94%BF%23) `134.5K 🔥` `NEW`
1. [杨幂怼脸镜头好美](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%80%BC%E8%84%B8%E9%95%9C%E5%A4%B4%E5%A5%BD%E7%BE%8E%23) `134.0K 🔥` `NEW`
1. [孙燕姿新歌飞瀑而下](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%E6%96%B0%E6%AD%8C%E9%A3%9E%E7%80%91%E8%80%8C%E4%B8%8B%23) `124.0K 🔥` `NEW`
1. [中方回应金正恩对韩表态](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E9%87%91%E6%AD%A3%E6%81%A9%E5%AF%B9%E9%9F%A9%E8%A1%A8%E6%80%81%23) `100.2K 🔥` `NEW`
1. [一盒内存条堪比一套房](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%92%E5%86%85%E5%AD%98%E6%9D%A1%E5%A0%AA%E6%AF%94%E4%B8%80%E5%A5%97%E6%88%BF%23) `100.1K 🔥` `NEW`
1. [向佑不满遗产分配直喊不公平](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%91%E4%B8%8D%E6%BB%A1%E9%81%97%E4%BA%A7%E5%88%86%E9%85%8D%E7%9B%B4%E5%96%8A%E4%B8%8D%E5%85%AC%E5%B9%B3%23) `97.0K 🔥` `NEW`
1. [中国邮政回应已叫停相关线下活动 (China Post responded that it has suspended relevant offline activities.)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%82%AE%E6%94%BF%E5%9B%9E%E5%BA%94%E5%B7%B2%E5%8F%AB%E5%81%9C%E7%9B%B8%E5%85%B3%E7%BA%BF%E4%B8%8B%E6%B4%BB%E5%8A%A8%23) `96.3K 🔥` `NEW`
1. [橹穆双人舞台官摄破2711万](https://s.weibo.com/weibo?q=%23%E6%A9%B9%E7%A9%86%E5%8F%8C%E4%BA%BA%E8%88%9E%E5%8F%B0%E5%AE%98%E6%91%84%E7%A0%B42711%E4%B8%87%23) `91.5K 🔥` `NEW`
1. [比尔盖茨出轨女性身份曝光](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E5%87%BA%E8%BD%A8%E5%A5%B3%E6%80%A7%E8%BA%AB%E4%BB%BD%E6%9B%9D%E5%85%89%23) `89.7K 🔥` `NEW`
1. [张艺兴小张入职第一天](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E5%85%B4%E5%B0%8F%E5%BC%A0%E5%85%A5%E8%81%8C%E7%AC%AC%E4%B8%80%E5%A4%A9%23) `88.4K 🔥` `NEW`
1. [谷爱凌Prada看秀](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8CPrada%E7%9C%8B%E7%A7%80%23) `87.4K 🔥` `NEW`
1. [TOP大秀现场](https://s.weibo.com/weibo?q=%23TOP%E5%A4%A7%E7%A7%80%E7%8E%B0%E5%9C%BA%23) `82.2K 🔥` `NEW`
1. [老外以为一个姓张的人研究遍及各学科](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E4%BB%A5%E4%B8%BA%E4%B8%80%E4%B8%AA%E5%A7%93%E5%BC%A0%E7%9A%84%E4%BA%BA%E7%A0%94%E7%A9%B6%E9%81%8D%E5%8F%8A%E5%90%84%E5%AD%A6%E7%A7%91%23) `79.7K 🔥` `NEW`
1. [王天辰 上桌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%20%E4%B8%8A%E6%A1%8C%23) `79.3K 🔥` `NEW`
1. [胡一菲诺澜在短国相遇了](https://s.weibo.com/weibo?q=%23%E8%83%A1%E4%B8%80%E8%8F%B2%E8%AF%BA%E6%BE%9C%E5%9C%A8%E7%9F%AD%E5%9B%BD%E7%9B%B8%E9%81%87%E4%BA%86%23) `76.2K 🔥` `NEW`
1. [香港山火火情基本受控](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%B1%B1%E7%81%AB%E7%81%AB%E6%83%85%E5%9F%BA%E6%9C%AC%E5%8F%97%E6%8E%A7%23) `75.1K 🔥` `NEW`
1. [王橹杰手捧红玫瑰 (Wang Lujie holds red roses in hand)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%89%8B%E6%8D%A7%E7%BA%A2%E7%8E%AB%E7%91%B0%23) `74.9K 🔥` `NEW`
1. [Cat毕业典礼](https://s.weibo.com/weibo?q=%23Cat%E6%AF%95%E4%B8%9A%E5%85%B8%E7%A4%BC%23) `72.0K 🔥` `NEW`
1. [嘉人单发苏新皓](https://s.weibo.com/weibo?q=%23%E5%98%89%E4%BA%BA%E5%8D%95%E5%8F%91%E8%8B%8F%E6%96%B0%E7%9A%93%23) `68.3K 🔥` `NEW`
1. [JDG战胜AL](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9CAL%23) `67.4K 🔥` `NEW`
1. [创造营2026女生季](https://s.weibo.com/weibo?q=%23%E5%88%9B%E9%80%A0%E8%90%A52026%E5%A5%B3%E7%94%9F%E5%AD%A3%23) `67.2K 🔥` `NEW`
1. [王天辰郭晓婷花絮好甜](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%E9%83%AD%E6%99%93%E5%A9%B7%E8%8A%B1%E7%B5%AE%E5%A5%BD%E7%94%9C%23) `66.2K 🔥` `NEW`
1. [申裕斌赛后飙中文太累了](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%A3%95%E6%96%8C%E8%B5%9B%E5%90%8E%E9%A3%99%E4%B8%AD%E6%96%87%E5%A4%AA%E7%B4%AF%E4%BA%86%23) `58.8K 🔥` `NEW`
1. [文章上了澳门语文教材是什么体验](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%AB%A0%E4%B8%8A%E4%BA%86%E6%BE%B3%E9%97%A8%E8%AF%AD%E6%96%87%E6%95%99%E6%9D%90%E6%98%AF%E4%BB%80%E4%B9%88%E4%BD%93%E9%AA%8C%23) `58.0K 🔥` `NEW`
1. [曝迪丽热巴与嘉行合约到期](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B8%8E%E5%98%89%E8%A1%8C%E5%90%88%E7%BA%A6%E5%88%B0%E6%9C%9F%23) `55.4K 🔥` `NEW`
1. [中国男篮战胜日本男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E6%88%98%E8%83%9C%E6%97%A5%E6%9C%AC%E7%94%B7%E7%AF%AE%23) `55.0K 🔥` `NEW`
1. [领克致歉语音误关大灯 (Lynk & Co apologizes for turning off headlights by mistake)](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B%E8%87%B4%E6%AD%89%E8%AF%AD%E9%9F%B3%E8%AF%AF%E5%85%B3%E5%A4%A7%E7%81%AF%23) `53.9K 🔥` `NEW`
1. [JDG晋级LPL胜决](https://s.weibo.com/weibo?q=%23JDG%E6%99%8B%E7%BA%A7LPL%E8%83%9C%E5%86%B3%23) `53.3K 🔥` `NEW`
1. [Prada直播](https://s.weibo.com/weibo?q=%23Prada%E7%9B%B4%E6%92%AD%23) `51.4K 🔥` `NEW`
1. [兔闪闪道歉](https://s.weibo.com/weibo?q=%23%E5%85%94%E9%97%AA%E9%97%AA%E9%81%93%E6%AD%89%23) `49.8K 🔥` `NEW`
1. [11月宝宝从婴儿车滑落颅脑重伤](https://s.weibo.com/weibo?q=%2311%E6%9C%88%E5%AE%9D%E5%AE%9D%E4%BB%8E%E5%A9%B4%E5%84%BF%E8%BD%A6%E6%BB%91%E8%90%BD%E9%A2%85%E8%84%91%E9%87%8D%E4%BC%A4%23) `48.7K 🔥` `NEW`
1. [郭富城一家去景区只用买一张票](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E4%B8%80%E5%AE%B6%E5%8E%BB%E6%99%AF%E5%8C%BA%E5%8F%AA%E7%94%A8%E4%B9%B0%E4%B8%80%E5%BC%A0%E7%A5%A8%23) `47.4K 🔥` `NEW`
1. [全网最黑大熊猫出现了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E6%9C%80%E9%BB%91%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%87%BA%E7%8E%B0%E4%BA%86%23) `47.0K 🔥` `NEW`
1. [发1.8亿年终奖公司开工3天爆单](https://s.weibo.com/weibo?q=%23%E5%8F%911.8%E4%BA%BF%E5%B9%B4%E7%BB%88%E5%A5%96%E5%85%AC%E5%8F%B8%E5%BC%80%E5%B7%A53%E5%A4%A9%E7%88%86%E5%8D%95%23) `45.6K 🔥` `NEW`
1. [没见过这么大笑的易烊千玺](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E8%A7%81%E8%BF%87%E8%BF%99%E4%B9%88%E5%A4%A7%E7%AC%91%E7%9A%84%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%23) `43.5K 🔥` `NEW`

Updated at 2026-02-27 00:49:06

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
