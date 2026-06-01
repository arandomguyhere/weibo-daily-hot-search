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

1. [一车安全带全是P上去的 (All the seat belts in a car are P.)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%BD%A6%E5%AE%89%E5%85%A8%E5%B8%A6%E5%85%A8%E6%98%AFP%E4%B8%8A%E5%8E%BB%E7%9A%84%23) `1.3M 🔥` `NEW`
1. [华为发布会](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `1.3M 🔥` `NEW`
1. [白鹿剧宣睡过头了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%89%A7%E5%AE%A3%E7%9D%A1%E8%BF%87%E5%A4%B4%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [闲鱼道歉](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%E9%81%93%E6%AD%89%23) `1.0M 🔥` `NEW`
1. [天涯回归被挤爆了](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B6%AF%E5%9B%9E%E5%BD%92%E8%A2%AB%E6%8C%A4%E7%88%86%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [有种被整个幼儿园背叛的感觉](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%A7%8D%E8%A2%AB%E6%95%B4%E4%B8%AA%E5%B9%BC%E5%84%BF%E5%9B%AD%E8%83%8C%E5%8F%9B%E7%9A%84%E6%84%9F%E8%A7%89%23) `903.0K 🔥` `NEW`
1. [灯花笑 田曦薇](https://s.weibo.com/weibo?q=%23%E7%81%AF%E8%8A%B1%E7%AC%91%20%E7%94%B0%E6%9B%A6%E8%96%87%23) `825.9K 🔥` `NEW`
1. [手机是我买过最回本的东西了](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%98%AF%E6%88%91%E4%B9%B0%E8%BF%87%E6%9C%80%E5%9B%9E%E6%9C%AC%E7%9A%84%E4%B8%9C%E8%A5%BF%E4%BA%86%23) `659.8K 🔥` `NEW`
1. [NBA总决赛地板有那味儿了](https://s.weibo.com/weibo?q=%23NBA%E6%80%BB%E5%86%B3%E8%B5%9B%E5%9C%B0%E6%9D%BF%E6%9C%89%E9%82%A3%E5%91%B3%E5%84%BF%E4%BA%86%23) `608.5K 🔥` `NEW`
1. [白举纲宣布当爸](https://s.weibo.com/weibo?q=%23%E7%99%BD%E4%B8%BE%E7%BA%B2%E5%AE%A3%E5%B8%83%E5%BD%93%E7%88%B8%23) `600.4K 🔥` `NEW`
1. [去河北喝古茗的时候记得穿上阿迪 (Remember to wear Adidas when you go to Hebei to drink ancient tea)](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E6%B2%B3%E5%8C%97%E5%96%9D%E5%8F%A4%E8%8C%97%E7%9A%84%E6%97%B6%E5%80%99%E8%AE%B0%E5%BE%97%E7%A9%BF%E4%B8%8A%E9%98%BF%E8%BF%AA%23) `566.1K 🔥` `NEW`
1. [孙怡忍了三天 发现自己真的很爱](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%BF%8D%E4%BA%86%E4%B8%89%E5%A4%A9%20%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E7%9C%9F%E7%9A%84%E5%BE%88%E7%88%B1%23) `565.6K 🔥` `NEW`
1. [魏晨水下求婚 老婆只顾着追鱼](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E6%B0%B4%E4%B8%8B%E6%B1%82%E5%A9%9A%20%E8%80%81%E5%A9%86%E5%8F%AA%E9%A1%BE%E7%9D%80%E8%BF%BD%E9%B1%BC%23) `562.4K 🔥` `NEW`
1. [日本排外情绪空前高涨](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8E%92%E5%A4%96%E6%83%85%E7%BB%AA%E7%A9%BA%E5%89%8D%E9%AB%98%E6%B6%A8%23) `561.8K 🔥` `NEW`
1. [有事和身体商量真有用](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%8B%E5%92%8C%E8%BA%AB%E4%BD%93%E5%95%86%E9%87%8F%E7%9C%9F%E6%9C%89%E7%94%A8%23) `560.3K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `558.5K 🔥` `NEW`
1. [哈尔滨大风一居民楼窗户从楼顶吹落](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E5%A4%A7%E9%A3%8E%E4%B8%80%E5%B1%85%E6%B0%91%E6%A5%BC%E7%AA%97%E6%88%B7%E4%BB%8E%E6%A5%BC%E9%A1%B6%E5%90%B9%E8%90%BD%23) `555.3K 🔥` `NEW`
1. [金正恩携女儿视察温室农场](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%AD%A3%E6%81%A9%E6%90%BA%E5%A5%B3%E5%84%BF%E8%A7%86%E5%AF%9F%E6%B8%A9%E5%AE%A4%E5%86%9C%E5%9C%BA%23) `522.5K 🔥` `NEW`
1. [曝歌手帮唱嘉宾](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%AD%8C%E6%89%8B%E5%B8%AE%E5%94%B1%E5%98%89%E5%AE%BE%23) `495.9K 🔥` `NEW`
1. [央视曝烟草花式围猎青少年](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E7%83%9F%E8%8D%89%E8%8A%B1%E5%BC%8F%E5%9B%B4%E7%8C%8E%E9%9D%92%E5%B0%91%E5%B9%B4%23) `493.4K 🔥` `NEW`
1. [何猷君奚梦瑶儿女都这么大了 (He Youjun and Xi Mengyao’s children are already so old)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%84%BF%E5%A5%B3%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `473.7K 🔥` `NEW`
1. [天猫与你一探真箱](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB%E4%B8%8E%E4%BD%A0%E4%B8%80%E6%8E%A2%E7%9C%9F%E7%AE%B1%23) `456.6K 🔥` `NEW`
1. [时代少年团亮相华为发布会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%BA%AE%E7%9B%B8%E5%8D%8E%E4%B8%BA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `455.4K 🔥` `NEW`
1. [侯明昊 歌手帮唱](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%20%E6%AD%8C%E6%89%8B%E5%B8%AE%E5%94%B1%23) `446.6K 🔥` `NEW`
1. [iOS28史诗级升级](https://s.weibo.com/weibo?q=%23iOS28%E5%8F%B2%E8%AF%97%E7%BA%A7%E5%8D%87%E7%BA%A7%23) `435.3K 🔥` `NEW`
1. [男童100元变卖20克金条](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5100%E5%85%83%E5%8F%98%E5%8D%9620%E5%85%8B%E9%87%91%E6%9D%A1%23) `435.2K 🔥` `NEW`
1. [哈尔滨巨星演唱会中断亲历者发声](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E5%B7%A8%E6%98%9F%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%AD%E6%96%AD%E4%BA%B2%E5%8E%86%E8%80%85%E5%8F%91%E5%A3%B0%23) `435.2K 🔥` `NEW`
1. [樰姐来了开撕岳雨婷](https://s.weibo.com/weibo?q=%23%E6%A8%B0%E5%A7%90%E6%9D%A5%E4%BA%86%E5%BC%80%E6%92%95%E5%B2%B3%E9%9B%A8%E5%A9%B7%23) `435.2K 🔥` `NEW`
1. [灵魂摆渡十年定档](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%E5%8D%81%E5%B9%B4%E5%AE%9A%E6%A1%A3%23) `397.3K 🔥` `NEW`
1. [抢救的原因是抢救](https://s.weibo.com/weibo?q=%23%E6%8A%A2%E6%95%91%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%98%AF%E6%8A%A2%E6%95%91%23) `372.4K 🔥` `NEW`
1. [石蕊回应 (litmus response)](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E8%95%8A%E5%9B%9E%E5%BA%94%23) `361.6K 🔥` `NEW`
1. [鞠婧祎发了苏绿夏九宫格](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%8F%91%E4%BA%86%E8%8B%8F%E7%BB%BF%E5%A4%8F%E4%B9%9D%E5%AE%AB%E6%A0%BC%23) `358.6K 🔥` `NEW`
1. [本周做什么都顺的星座](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E5%81%9A%E4%BB%80%E4%B9%88%E9%83%BD%E9%A1%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `332.4K 🔥` `NEW`
1. [谁给董洁做的妆造](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E8%91%A3%E6%B4%81%E5%81%9A%E7%9A%84%E5%A6%86%E9%80%A0%23) `308.7K 🔥` `NEW`
1. [大学生一旦过了13周](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E4%B8%80%E6%97%A6%E8%BF%87%E4%BA%8613%E5%91%A8%23) `240.5K 🔥` `NEW`
1. [樊振东当上引荐人了](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BD%93%E4%B8%8A%E5%BC%95%E8%8D%90%E4%BA%BA%E4%BA%86%23) `189.4K 🔥` `NEW`
1. [主角开分8.2](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E5%BC%80%E5%88%868.2%23) `187.0K 🔥` `NEW`
1. [华为发布nova16](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%8F%91%E5%B8%83nova16%23) `185.2K 🔥` `NEW`
1. [郑丽文今晚启程访美](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E4%BB%8A%E6%99%9A%E5%90%AF%E7%A8%8B%E8%AE%BF%E7%BE%8E%23) `178.7K 🔥` `NEW`
1. [AIPC概念股集体大涨](https://s.weibo.com/weibo?q=%23AIPC%E6%A6%82%E5%BF%B5%E8%82%A1%E9%9B%86%E4%BD%93%E5%A4%A7%E6%B6%A8%23) `178.1K 🔥` `NEW`
1. [杨紫近一两年都不会参加综艺 (Yang Zi will not participate in variety shows in the past year or two)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%BF%91%E4%B8%80%E4%B8%A4%E5%B9%B4%E9%83%BD%E4%B8%8D%E4%BC%9A%E5%8F%82%E5%8A%A0%E7%BB%BC%E8%89%BA%23) `177.9K 🔥` `NEW`
1. [迪丽热巴达成五大女刊满贯](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BE%BE%E6%88%90%E4%BA%94%E5%A4%A7%E5%A5%B3%E5%88%8A%E6%BB%A1%E8%B4%AF%23) `177.4K 🔥` `NEW`
1. [一代人有一代人的六一](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E5%85%AD%E4%B8%80%23) `148.1K 🔥` `NEW`
1. [美加墨世界杯球员身价榜](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%8A%A0%E5%A2%A8%E4%B8%96%E7%95%8C%E6%9D%AF%E7%90%83%E5%91%98%E8%BA%AB%E4%BB%B7%E6%A6%9C%23) `148.0K 🔥` `NEW`
1. [猫的大脑处理不了那么多事](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%9A%84%E5%A4%A7%E8%84%91%E5%A4%84%E7%90%86%E4%B8%8D%E4%BA%86%E9%82%A3%E4%B9%88%E5%A4%9A%E4%BA%8B%23) `144.8K 🔥` `NEW`
1. [全国少先队员共1.12亿名](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E5%B0%91%E5%85%88%E9%98%9F%E5%91%98%E5%85%B11.12%E4%BA%BF%E5%90%8D%23) `1.1M 🔥` `+35%`
1. [何猷君奚梦瑶婚礼欢迎晚宴 (Welcome dinner for He Youjun and Xi Mengyao's wedding)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E7%A4%BC%E6%AC%A2%E8%BF%8E%E6%99%9A%E5%AE%B4%23) `603.8K 🔥` `+142%`
1. [刘亦菲刘诗诗 代言](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%88%98%E8%AF%97%E8%AF%97%20%E4%BB%A3%E8%A8%80%23) `332.4K 🔥` `+35%`
1. [夏美 王洋洋](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E7%BE%8E%20%E7%8E%8B%E6%B4%8B%E6%B4%8B%23) `189.0K 🔥`

Updated at 2026-06-01 15:17:47

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
