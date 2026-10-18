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

1. [日本出现取消吃饭现象](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%87%BA%E7%8E%B0%E5%8F%96%E6%B6%88%E5%90%83%E9%A5%AD%E7%8E%B0%E8%B1%A1%23) `1.1M 🔥` `NEW`
1. [恐惧冷漠精致利己的尖子生](https://s.weibo.com/weibo?q=%23%E6%81%90%E6%83%A7%E5%86%B7%E6%BC%A0%E7%B2%BE%E8%87%B4%E5%88%A9%E5%B7%B1%E7%9A%84%E5%B0%96%E5%AD%90%E7%94%9F%23) `660.8K 🔥` `NEW`
1. [广交会AI新品热度拉满](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9AAI%E6%96%B0%E5%93%81%E7%83%AD%E5%BA%A6%E6%8B%89%E6%BB%A1%23) `539.4K 🔥` `NEW`
1. [黄磊带着黄多多交际一开口落落大方](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A%E5%B8%A6%E7%9D%80%E9%BB%84%E5%A4%9A%E5%A4%9A%E4%BA%A4%E9%99%85%E4%B8%80%E5%BC%80%E5%8F%A3%E8%90%BD%E8%90%BD%E5%A4%A7%E6%96%B9%23) `538.3K 🔥` `NEW`
1. [白桃星座](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%A1%83%E6%98%9F%E5%BA%A7%23) `535.1K 🔥` `NEW`
1. [法国民众这次真急了](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%B0%91%E4%BC%97%E8%BF%99%E6%AC%A1%E7%9C%9F%E6%80%A5%E4%BA%86%23) `353.6K 🔥` `NEW`
1. [在梅边](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%A2%85%E8%BE%B9%23) `315.2K 🔥` `NEW`
1. [神父弥撒时被十字架砸中身亡](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E7%88%B6%E5%BC%A5%E6%92%92%E6%97%B6%E8%A2%AB%E5%8D%81%E5%AD%97%E6%9E%B6%E7%A0%B8%E4%B8%AD%E8%BA%AB%E4%BA%A1%23) `302.3K 🔥` `NEW`
1. [莫大披旭日旗留学生早有劣迹](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%A4%A7%E6%8A%AB%E6%97%AD%E6%97%A5%E6%97%97%E7%95%99%E5%AD%A6%E7%94%9F%E6%97%A9%E6%9C%89%E5%8A%A3%E8%BF%B9%23) `301.4K 🔥` `NEW`
1. [曝白宇疑似当爸爸了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E5%AE%87%E7%96%91%E4%BC%BC%E5%BD%93%E7%88%B8%E7%88%B8%E4%BA%86%23) `301.3K 🔥` `NEW`
1. [曝张雅钦疑似怀孕](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E9%9B%85%E9%92%A6%E7%96%91%E4%BC%BC%E6%80%80%E5%AD%95%23) `300.2K 🔥` `NEW`
1. [盛艾敬哭了](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E5%93%AD%E4%BA%86%23) `298.5K 🔥` `NEW`
1. [梅艳芳骨灰或流向东南亚](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%89%B3%E8%8A%B3%E9%AA%A8%E7%81%B0%E6%88%96%E6%B5%81%E5%90%91%E4%B8%9C%E5%8D%97%E4%BA%9A%23) `297.6K 🔥` `NEW`
1. [中国女留学生英国遇害案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%95%99%E5%AD%A6%E7%94%9F%E8%8B%B1%E5%9B%BD%E9%81%87%E5%AE%B3%E6%A1%88%23) `297.2K 🔥` `NEW`
1. [刘丁硕说樊振东都不会正眼看我一眼](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E8%AF%B4%E6%A8%8A%E6%8C%AF%E4%B8%9C%E9%83%BD%E4%B8%8D%E4%BC%9A%E6%AD%A3%E7%9C%BC%E7%9C%8B%E6%88%91%E4%B8%80%E7%9C%BC%23) `296.2K 🔥` `NEW`
1. [鹿晗舞台摔倒](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%88%9E%E5%8F%B0%E6%91%94%E5%80%92%23) `290.6K 🔥` `NEW`
1. [Angelababy回应被说显老](https://s.weibo.com/weibo?q=%23Angelababy%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%AF%B4%E6%98%BE%E8%80%81%23) `244.8K 🔥` `NEW`
1. [郑钦文结束2026赛季](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%BB%93%E6%9D%9F2026%E8%B5%9B%E5%AD%A3%23) `217.5K 🔥` `NEW`
1. [中国式旅游已经被玩成固定模板](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%BC%8F%E6%97%85%E6%B8%B8%E5%B7%B2%E7%BB%8F%E8%A2%AB%E7%8E%A9%E6%88%90%E5%9B%BA%E5%AE%9A%E6%A8%A1%E6%9D%BF%23) `217.4K 🔥` `NEW`
1. [网友推算徐艺洋孕期时间线](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8E%A8%E7%AE%97%E5%BE%90%E8%89%BA%E6%B4%8B%E5%AD%95%E6%9C%9F%E6%97%B6%E9%97%B4%E7%BA%BF%23) `216.9K 🔥` `NEW`
1. [尔冬升曝男演员曾投诉男导演性骚扰](https://s.weibo.com/weibo?q=%23%E5%B0%94%E5%86%AC%E5%8D%87%E6%9B%9D%E7%94%B7%E6%BC%94%E5%91%98%E6%9B%BE%E6%8A%95%E8%AF%89%E7%94%B7%E5%AF%BC%E6%BC%94%E6%80%A7%E9%AA%9A%E6%89%B0%23) `216.1K 🔥` `NEW`
1. [吴奇隆在步步惊心等戏的间歇自己练功](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%A5%87%E9%9A%86%E5%9C%A8%E6%AD%A5%E6%AD%A5%E6%83%8A%E5%BF%83%E7%AD%89%E6%88%8F%E7%9A%84%E9%97%B4%E6%AD%87%E8%87%AA%E5%B7%B1%E7%BB%83%E5%8A%9F%23) `210.5K 🔥` `NEW`
1. [狼队选DYG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E9%80%89DYG%23) `204.2K 🔥` `NEW`
1. [盛艾敬母亲员工还去学校接爱敬放学](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E6%AF%8D%E4%BA%B2%E5%91%98%E5%B7%A5%E8%BF%98%E5%8E%BB%E5%AD%A6%E6%A0%A1%E6%8E%A5%E7%88%B1%E6%95%AC%E6%94%BE%E5%AD%A6%23) `188.3K 🔥` `NEW`
1. [张家齐自曝收入由妈妈保管](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%87%AA%E6%9B%9D%E6%94%B6%E5%85%A5%E7%94%B1%E5%A6%88%E5%A6%88%E4%BF%9D%E7%AE%A1%23) `176.0K 🔥` `NEW`
1. [李沁马思纯张晚意出发录综艺](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%81%E9%A9%AC%E6%80%9D%E7%BA%AF%E5%BC%A0%E6%99%9A%E6%84%8F%E5%87%BA%E5%8F%91%E5%BD%95%E7%BB%BC%E8%89%BA%23) `172.0K 🔥` `NEW`
1. [原来这样的家庭真的存在啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E6%A0%B7%E7%9A%84%E5%AE%B6%E5%BA%AD%E7%9C%9F%E7%9A%84%E5%AD%98%E5%9C%A8%E5%95%8A%23) `164.3K 🔥` `NEW`
1. [26岁女子肺癌晚期公司帮其交社保](https://s.weibo.com/weibo?q=%2326%E5%B2%81%E5%A5%B3%E5%AD%90%E8%82%BA%E7%99%8C%E6%99%9A%E6%9C%9F%E5%85%AC%E5%8F%B8%E5%B8%AE%E5%85%B6%E4%BA%A4%E7%A4%BE%E4%BF%9D%23) `156.2K 🔥` `NEW`
1. [张函瑞新歌上线](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E6%96%B0%E6%AD%8C%E4%B8%8A%E7%BA%BF%23) `156.2K 🔥` `NEW`
1. [KSG和JDG加赛](https://s.weibo.com/weibo?q=%23KSG%E5%92%8CJDG%E5%8A%A0%E8%B5%9B%23) `155.8K 🔥` `NEW`
1. [日本年轻人取消吃饭原因](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%8F%96%E6%B6%88%E5%90%83%E9%A5%AD%E5%8E%9F%E5%9B%A0%23) `149.5K 🔥` `NEW`
1. [女子做柚子馒头从皮到果粒完美还原](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%81%9A%E6%9F%9A%E5%AD%90%E9%A6%92%E5%A4%B4%E4%BB%8E%E7%9A%AE%E5%88%B0%E6%9E%9C%E7%B2%92%E5%AE%8C%E7%BE%8E%E8%BF%98%E5%8E%9F%23) `145.8K 🔥` `NEW`
1. [特朗普呼吁法国关闭边境](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%91%BC%E5%90%81%E6%B3%95%E5%9B%BD%E5%85%B3%E9%97%AD%E8%BE%B9%E5%A2%83%23) `145.1K 🔥` `NEW`
1. [S16抽签预测](https://s.weibo.com/weibo?q=%23S16%E6%8A%BD%E7%AD%BE%E9%A2%84%E6%B5%8B%23) `138.8K 🔥` `NEW`
1. [刘浩存紧急一个闪身步回车](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E7%B4%A7%E6%80%A5%E4%B8%80%E4%B8%AA%E9%97%AA%E8%BA%AB%E6%AD%A5%E5%9B%9E%E8%BD%A6%23) `137.1K 🔥` `NEW`
1. [韩国网友要求盛艾敬退团](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E8%A6%81%E6%B1%82%E7%9B%9B%E8%89%BE%E6%95%AC%E9%80%80%E5%9B%A2%23) `136.7K 🔥` `NEW`
1. [黄多多背肌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E8%83%8C%E8%82%8C%23) `135.1K 🔥` `NEW`
1. [张继科直播谈及刘丁硕六个鸡蛋事件](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E7%9B%B4%E6%92%AD%E8%B0%88%E5%8F%8A%E5%88%98%E4%B8%81%E7%A1%95%E5%85%AD%E4%B8%AA%E9%B8%A1%E8%9B%8B%E4%BA%8B%E4%BB%B6%23) `134.9K 🔥` `NEW`
1. [网传王一博明年演唱会](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%98%8E%E5%B9%B4%E6%BC%94%E5%94%B1%E4%BC%9A%23) `128.2K 🔥` `NEW`
1. [田曦薇代高政嫁金钗狼兔文学](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E4%BB%A3%E9%AB%98%E6%94%BF%E5%AB%81%E9%87%91%E9%92%97%E7%8B%BC%E5%85%94%E6%96%87%E5%AD%A6%23) `127.9K 🔥` `NEW`
1. [张雪机车德比斯年度亚军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%BE%B7%E6%AF%94%E6%96%AF%E5%B9%B4%E5%BA%A6%E4%BA%9A%E5%86%9B%23) `127.8K 🔥` `NEW`
1. [嫁金钗魏娆认亲被拒](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E9%AD%8F%E5%A8%86%E8%AE%A4%E4%BA%B2%E8%A2%AB%E6%8B%92%23) `124.1K 🔥` `NEW`
1. [乳癌患者自述确诊前身体异常](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E7%99%8C%E6%82%A3%E8%80%85%E8%87%AA%E8%BF%B0%E7%A1%AE%E8%AF%8A%E5%89%8D%E8%BA%AB%E4%BD%93%E5%BC%82%E5%B8%B8%23) `123.6K 🔥` `NEW`
1. [郑钦文因伤退出香港赛](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%9B%A0%E4%BC%A4%E9%80%80%E5%87%BA%E9%A6%99%E6%B8%AF%E8%B5%9B%23) `120.9K 🔥` `NEW`
1. [难怪我拿不到像徐艺洋这样的大结果](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E6%88%91%E6%8B%BF%E4%B8%8D%E5%88%B0%E5%83%8F%E5%BE%90%E8%89%BA%E6%B4%8B%E8%BF%99%E6%A0%B7%E7%9A%84%E5%A4%A7%E7%BB%93%E6%9E%9C%23) `119.6K 🔥` `NEW`
1. [住家保姆装富婆5年骗7熟人91万](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E5%AE%B6%E4%BF%9D%E5%A7%86%E8%A3%85%E5%AF%8C%E5%A9%865%E5%B9%B4%E9%AA%977%E7%86%9F%E4%BA%BA91%E4%B8%87%23) `113.0K 🔥` `NEW`
1. [民警回应男子服刑期间转走其1.9万](https://s.weibo.com/weibo?q=%23%E6%B0%91%E8%AD%A6%E5%9B%9E%E5%BA%94%E7%94%B7%E5%AD%90%E6%9C%8D%E5%88%91%E6%9C%9F%E9%97%B4%E8%BD%AC%E8%B5%B0%E5%85%B61.9%E4%B8%87%23) `109.2K 🔥` `NEW`
1. [AI剧真实到几乎可以替代演员](https://s.weibo.com/weibo?q=%23AI%E5%89%A7%E7%9C%9F%E5%AE%9E%E5%88%B0%E5%87%A0%E4%B9%8E%E5%8F%AF%E4%BB%A5%E6%9B%BF%E4%BB%A3%E6%BC%94%E5%91%98%23) `108.9K 🔥` `NEW`

Updated at 2026-10-19 00:35:42

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
