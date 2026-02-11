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

1. [微信9大更新 (WeChat 9 major updates)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A19%E5%A4%A7%E6%9B%B4%E6%96%B0%23) `1.1M 🔥` `NEW`
1. [火箭回收](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%AE%AD%E5%9B%9E%E6%94%B6%23) `823.5K 🔥` `NEW`
1. [到中国过年成为热潮](https://s.weibo.com/weibo?q=%23%E5%88%B0%E4%B8%AD%E5%9B%BD%E8%BF%87%E5%B9%B4%E6%88%90%E4%B8%BA%E7%83%AD%E6%BD%AE%23) `683.3K 🔥` `NEW`
1. [2025微博热搜趋势报告](https://s.weibo.com/weibo?q=%232025%E5%BE%AE%E5%8D%9A%E7%83%AD%E6%90%9C%E8%B6%8B%E5%8A%BF%E6%8A%A5%E5%91%8A%23) `679.3K 🔥` `NEW`
1. [沈腾找了个最帅的演自己](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%89%BE%E4%BA%86%E4%B8%AA%E6%9C%80%E5%B8%85%E7%9A%84%E6%BC%94%E8%87%AA%E5%B7%B1%23) `675.8K 🔥` `NEW`
1. [挪威选手冬奥摘铜后哭着自曝出轨](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E9%80%89%E6%89%8B%E5%86%AC%E5%A5%A5%E6%91%98%E9%93%9C%E5%90%8E%E5%93%AD%E7%9D%80%E8%87%AA%E6%9B%9D%E5%87%BA%E8%BD%A8%23) `624.0K 🔥` `NEW`
1. [孙海洋夫妇将名下公司转给孙卓](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%B5%B7%E6%B4%8B%E5%A4%AB%E5%A6%87%E5%B0%86%E5%90%8D%E4%B8%8B%E5%85%AC%E5%8F%B8%E8%BD%AC%E7%BB%99%E5%AD%99%E5%8D%93%23) `607.5K 🔥` `NEW`
1. [当地辟谣6名女大学生在壶瓶山失踪](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%9C%B0%E8%BE%9F%E8%B0%A36%E5%90%8D%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%9C%A8%E5%A3%B6%E7%93%B6%E5%B1%B1%E5%A4%B1%E8%B8%AA%23) `428.7K 🔥` `NEW`
1. [第一次见双胞胎不是一个物种](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%8F%8C%E8%83%9E%E8%83%8E%E4%B8%8D%E6%98%AF%E4%B8%80%E4%B8%AA%E7%89%A9%E7%A7%8D%23) `328.1K 🔥` `NEW`
1. [鹅鸭杀](https://s.weibo.com/weibo?q=%23%E9%B9%85%E9%B8%AD%E6%9D%80%23) `299.6K 🔥` `NEW`
1. [长征十号甲火箭 (Long March 10A rocket)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%81%E5%8D%81%E5%8F%B7%E7%94%B2%E7%81%AB%E7%AE%AD%23) `262.9K 🔥` `NEW`
1. [隐瞒小老虎死讯园长被停职](https://s.weibo.com/weibo?q=%23%E9%9A%90%E7%9E%92%E5%B0%8F%E8%80%81%E8%99%8E%E6%AD%BB%E8%AE%AF%E5%9B%AD%E9%95%BF%E8%A2%AB%E5%81%9C%E8%81%8C%23) `254.2K 🔥` `NEW`
1. [姚安娜古装](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E5%AE%89%E5%A8%9C%E5%8F%A4%E8%A3%85%23) `251.9K 🔥` `NEW`
1. [李佳琦感谢助理旺旺](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E7%90%A6%E6%84%9F%E8%B0%A2%E5%8A%A9%E7%90%86%E6%97%BA%E6%97%BA%23) `240.2K 🔥` `NEW`
1. [爱泼斯坦案录像现可疑橙色身影](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E5%BD%95%E5%83%8F%E7%8E%B0%E5%8F%AF%E7%96%91%E6%A9%99%E8%89%B2%E8%BA%AB%E5%BD%B1%23) `226.3K 🔥` `NEW`
1. [易烊千玺 努力超越满江红](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%20%E5%8A%AA%E5%8A%9B%E8%B6%85%E8%B6%8A%E6%BB%A1%E6%B1%9F%E7%BA%A2%23) `219.8K 🔥` `NEW`
1. [杨紫都演妈妈了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E9%83%BD%E6%BC%94%E5%A6%88%E5%A6%88%E4%BA%86%23) `208.6K 🔥` `NEW`
1. [伽罗水墨皮肤爆料](https://s.weibo.com/weibo?q=%23%E4%BC%BD%E7%BD%97%E6%B0%B4%E5%A2%A8%E7%9A%AE%E8%82%A4%E7%88%86%E6%96%99%23) `206.3K 🔥` `NEW`
1. [卜凡 道士下山](https://s.weibo.com/weibo?q=%23%E5%8D%9C%E5%87%A1%20%E9%81%93%E5%A3%AB%E4%B8%8B%E5%B1%B1%23) `204.4K 🔥` `NEW`
1. [长十火箭托举梦舟飞船点火升空](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%8D%81%E7%81%AB%E7%AE%AD%E6%89%98%E4%B8%BE%E6%A2%A6%E8%88%9F%E9%A3%9E%E8%88%B9%E7%82%B9%E7%81%AB%E5%8D%87%E7%A9%BA%23) `186.5K 🔥` `NEW`
1. [王王队的过年送礼故事 (Team Wang’s New Year gift-giving story)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%8B%E9%98%9F%E7%9A%84%E8%BF%87%E5%B9%B4%E9%80%81%E7%A4%BC%E6%95%85%E4%BA%8B%23) `185.5K 🔥` `NEW`
1. [怎样的结局才配得上这25集](https://s.weibo.com/weibo?q=%23%E6%80%8E%E6%A0%B7%E7%9A%84%E7%BB%93%E5%B1%80%E6%89%8D%E9%85%8D%E5%BE%97%E4%B8%8A%E8%BF%9925%E9%9B%86%23) `185.4K 🔥` `NEW`
1. [公公丈夫2天相继离世大姑子在ICU](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%85%AC%E4%B8%88%E5%A4%AB2%E5%A4%A9%E7%9B%B8%E7%BB%A7%E7%A6%BB%E4%B8%96%E5%A4%A7%E5%A7%91%E5%AD%90%E5%9C%A8ICU%23) `180.2K 🔥` `NEW`
1. [微信删好友能保留聊天记录](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%88%A0%E5%A5%BD%E5%8F%8B%E8%83%BD%E4%BF%9D%E7%95%99%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `172.9K 🔥` `NEW`
1. [日本考虑引入针对嫖娼者处罚措施](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%80%83%E8%99%91%E5%BC%95%E5%85%A5%E9%92%88%E5%AF%B9%E5%AB%96%E5%A8%BC%E8%80%85%E5%A4%84%E7%BD%9A%E6%8E%AA%E6%96%BD%23) `160.2K 🔥` `NEW`
1. [金价波动](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%B3%A2%E5%8A%A8%23) `159.2K 🔥` `NEW`
1. [刘雨昕 伤人的话一定要三思而行](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%A8%E6%98%95%20%E4%BC%A4%E4%BA%BA%E7%9A%84%E8%AF%9D%E4%B8%80%E5%AE%9A%E8%A6%81%E4%B8%89%E6%80%9D%E8%80%8C%E8%A1%8C%23) `137.0K 🔥` `NEW`
1. [女子出手8公斤金条套现近900万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%BA%E6%89%8B8%E5%85%AC%E6%96%A4%E9%87%91%E6%9D%A1%E5%A5%97%E7%8E%B0%E8%BF%91900%E4%B8%87%23) `132.1K 🔥` `NEW`
1. [千问帮我](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E5%B8%AE%E6%88%91%23) `119.0K 🔥` `NEW`
1. [黄奕 口条](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A5%95%20%E5%8F%A3%E6%9D%A1%23) `118.0K 🔥` `NEW`
1. [金价震荡频现千万元级套现 (Gold prices fluctuate frequently, cashing out tens of millions of yuan)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%9C%87%E8%8D%A1%E9%A2%91%E7%8E%B0%E5%8D%83%E4%B8%87%E5%85%83%E7%BA%A7%E5%A5%97%E7%8E%B0%23) `107.6K 🔥` `NEW`
1. [终于知道网上和你吵架的是什么人](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E7%BD%91%E4%B8%8A%E5%92%8C%E4%BD%A0%E5%90%B5%E6%9E%B6%E7%9A%84%E6%98%AF%E4%BB%80%E4%B9%88%E4%BA%BA%23) `103.3K 🔥` `NEW`
1. [王橹杰 付彬言](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E4%BB%98%E5%BD%AC%E8%A8%80%23) `102.9K 🔥` `NEW`
1. [加拿大枪击事件已致10人死亡](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E6%9E%AA%E5%87%BB%E4%BA%8B%E4%BB%B6%E5%B7%B2%E8%87%B410%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `99.4K 🔥` `NEW`
1. [热搜十大事件](https://s.weibo.com/weibo?q=%23%E7%83%AD%E6%90%9C%E5%8D%81%E5%A4%A7%E4%BA%8B%E4%BB%B6%23) `96.0K 🔥` `NEW`
1. [鹅鸭杀微博联动皮肤](https://s.weibo.com/weibo?q=%23%E9%B9%85%E9%B8%AD%E6%9D%80%E5%BE%AE%E5%8D%9A%E8%81%94%E5%8A%A8%E7%9A%AE%E8%82%A4%23) `92.1K 🔥` `NEW`
1. [王一博唱的无名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%94%B1%E7%9A%84%E6%97%A0%E5%90%8D%23) `89.5K 🔥` `NEW`
1. [樊振东脚边有球急坏了所有人](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%84%9A%E8%BE%B9%E6%9C%89%E7%90%83%E6%80%A5%E5%9D%8F%E4%BA%86%E6%89%80%E6%9C%89%E4%BA%BA%23) `89.0K 🔥` `NEW`
1. [马刺vs湖人](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BAvs%E6%B9%96%E4%BA%BA%23) `87.8K 🔥` `NEW`
1. [成何体统枕头代表好感进度条](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E6%9E%95%E5%A4%B4%E4%BB%A3%E8%A1%A8%E5%A5%BD%E6%84%9F%E8%BF%9B%E5%BA%A6%E6%9D%A1%23) `87.1K 🔥` `NEW`
1. [国补资金625亿元就位 (62.5 billion yuan of state subsidy funds are in place)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%A1%A5%E8%B5%84%E9%87%91625%E4%BA%BF%E5%85%83%E5%B0%B1%E4%BD%8D%23) `85.0K 🔥` `NEW`
1. [特朗普被曝现爱泼斯坦文件超百万次](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%A2%AB%E6%9B%9D%E7%8E%B0%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%96%87%E4%BB%B6%E8%B6%85%E7%99%BE%E4%B8%87%E6%AC%A1%23) `84.7K 🔥` `NEW`
1. [猫咪也分大脚趾和小脚趾](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E4%B9%9F%E5%88%86%E5%A4%A7%E8%84%9A%E8%B6%BE%E5%92%8C%E5%B0%8F%E8%84%9A%E8%B6%BE%23) `84.6K 🔥` `NEW`
1. [梦舟返回舱安全溅落于预定海域](https://s.weibo.com/weibo?q=%23%E6%A2%A6%E8%88%9F%E8%BF%94%E5%9B%9E%E8%88%B1%E5%AE%89%E5%85%A8%E6%BA%85%E8%90%BD%E4%BA%8E%E9%A2%84%E5%AE%9A%E6%B5%B7%E5%9F%9F%23) `84.3K 🔥` `NEW`
1. [iPhone18Pro有望不涨价](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%9C%89%E6%9C%9B%E4%B8%8D%E6%B6%A8%E4%BB%B7%23) `84.1K 🔥` `NEW`
1. [牛马还没放假粮草放假了](https://s.weibo.com/weibo?q=%23%E7%89%9B%E9%A9%AC%E8%BF%98%E6%B2%A1%E6%94%BE%E5%81%87%E7%B2%AE%E8%8D%89%E6%94%BE%E5%81%87%E4%BA%86%23) `83.3K 🔥` `NEW`
1. [郑钦文接连破发帕克斯情绪崩溃摔拍](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%8E%A5%E8%BF%9E%E7%A0%B4%E5%8F%91%E5%B8%95%E5%85%8B%E6%96%AF%E6%83%85%E7%BB%AA%E5%B4%A9%E6%BA%83%E6%91%94%E6%8B%8D%23) `82.6K 🔥` `NEW`
1. [苏新皓 韩国](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%20%E9%9F%A9%E5%9B%BD%23) `142.5K 🔥`
1. [日本彻底失控](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BD%BB%E5%BA%95%E5%A4%B1%E6%8E%A7%23) `115.0K 🔥`
1. [电影射雕英雄传侠之大者](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%B0%84%E9%9B%95%E8%8B%B1%E9%9B%84%E4%BC%A0%E4%BE%A0%E4%B9%8B%E5%A4%A7%E8%80%85%23) `173.3K 🔥` `-78%`
1. [带领意大利队夺金的是中国教练 (It was a Chinese coach who led the Italian team to the gold medal)](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E9%A2%86%E6%84%8F%E5%A4%A7%E5%88%A9%E9%98%9F%E5%A4%BA%E9%87%91%E7%9A%84%E6%98%AF%E4%B8%AD%E5%9B%BD%E6%95%99%E7%BB%83%23) `98.0K 🔥` `-91%`
1. [白菊邵云飞离婚 (Bai Ju and Shao Yunfei divorce)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%8F%8A%E9%82%B5%E4%BA%91%E9%A3%9E%E7%A6%BB%E5%A9%9A%23) `91.6K 🔥` `-63%`

Updated at 2026-02-11 12:04:11

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
