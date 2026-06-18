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

1. [甲酰胺 致癌 (Formamide causes cancer)](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%85%B0%E8%83%BA%20%E8%87%B4%E7%99%8C%23) `2.4M 🔥` `NEW`
1. [宁德时代利润超7家车企总和](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E5%88%A9%E6%B6%A6%E8%B6%857%E5%AE%B6%E8%BD%A6%E4%BC%81%E6%80%BB%E5%92%8C%23) `1.1M 🔥` `NEW`
1. [各地花式迎端午](https://s.weibo.com/weibo?q=%23%E5%90%84%E5%9C%B0%E8%8A%B1%E5%BC%8F%E8%BF%8E%E7%AB%AF%E5%8D%88%23) `798.8K 🔥` `NEW`
1. [孔雪儿 我没说过请不要造谣](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%20%E6%88%91%E6%B2%A1%E8%AF%B4%E8%BF%87%E8%AF%B7%E4%B8%8D%E8%A6%81%E9%80%A0%E8%B0%A3%23) `714.3K 🔥` `NEW`
1. [原来痛经真的和体态有关系](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%97%9B%E7%BB%8F%E7%9C%9F%E7%9A%84%E5%92%8C%E4%BD%93%E6%80%81%E6%9C%89%E5%85%B3%E7%B3%BB%23) `584.8K 🔥` `NEW`
1. [张凌赫田曦薇 深夜散步糖](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%20%E6%B7%B1%E5%A4%9C%E6%95%A3%E6%AD%A5%E7%B3%96%23) `562.3K 🔥` `NEW`
1. [豪哥哥今年夏天爆热的视频](https://s.weibo.com/weibo?q=%23%E8%B1%AA%E5%93%A5%E5%93%A5%E4%BB%8A%E5%B9%B4%E5%A4%8F%E5%A4%A9%E7%88%86%E7%83%AD%E7%9A%84%E8%A7%86%E9%A2%91%23) `531.1K 🔥` `NEW`
1. [医生谈纸尿裤事件](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%B0%88%E7%BA%B8%E5%B0%BF%E8%A3%A4%E4%BA%8B%E4%BB%B6%23) `526.4K 🔥` `NEW`
1. [男厨师半裸救女客人被质疑后回应](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%8E%A8%E5%B8%88%E5%8D%8A%E8%A3%B8%E6%95%91%E5%A5%B3%E5%AE%A2%E4%BA%BA%E8%A2%AB%E8%B4%A8%E7%96%91%E5%90%8E%E5%9B%9E%E5%BA%94%23) `432.9K 🔥` `NEW`
1. [当我把微信号设为条形码](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E6%8A%8A%E5%BE%AE%E4%BF%A1%E5%8F%B7%E8%AE%BE%E4%B8%BA%E6%9D%A1%E5%BD%A2%E7%A0%81%23) `410.6K 🔥` `NEW`
1. [小米空调10年免费加氟 (Xiaomi air conditioner offers free fluoride for 10 years)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E7%A9%BA%E8%B0%8310%E5%B9%B4%E5%85%8D%E8%B4%B9%E5%8A%A0%E6%B0%9F%23) `410.1K 🔥` `NEW`
1. [吴倩被爸爸打掉牙齿不敢吐出来](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%80%A9%E8%A2%AB%E7%88%B8%E7%88%B8%E6%89%93%E6%8E%89%E7%89%99%E9%BD%BF%E4%B8%8D%E6%95%A2%E5%90%90%E5%87%BA%E6%9D%A5%23) `410.0K 🔥` `NEW`
1. [两款有毒纸尿裤已下架](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E6%AC%BE%E6%9C%89%E6%AF%92%E7%BA%B8%E5%B0%BF%E8%A3%A4%E5%B7%B2%E4%B8%8B%E6%9E%B6%23) `409.0K 🔥` `NEW`
1. [白鹿一口气发了32张照片](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%80%E5%8F%A3%E6%B0%94%E5%8F%91%E4%BA%8632%E5%BC%A0%E7%85%A7%E7%89%87%23) `408.4K 🔥` `NEW`
1. [嘉行辟谣迪丽热巴离开](https://s.weibo.com/weibo?q=%23%E5%98%89%E8%A1%8C%E8%BE%9F%E8%B0%A3%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%A6%BB%E5%BC%80%23) `408.2K 🔥` `NEW`
1. [中餐厅10全阵容官宣](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%8510%E5%85%A8%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `407.7K 🔥` `NEW`
1. [狗狗不慎咬伤孩子被卖满眼惊恐](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E4%B8%8D%E6%85%8E%E5%92%AC%E4%BC%A4%E5%AD%A9%E5%AD%90%E8%A2%AB%E5%8D%96%E6%BB%A1%E7%9C%BC%E6%83%8A%E6%81%90%23) `407.0K 🔥` `NEW`
1. [吴倩高考621分](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%80%A9%E9%AB%98%E8%80%83621%E5%88%86%23) `404.0K 🔥` `NEW`
1. [白鹿剧宣的神她来了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%89%A7%E5%AE%A3%E7%9A%84%E7%A5%9E%E5%A5%B9%E6%9D%A5%E4%BA%86%23) `401.8K 🔥` `NEW`
1. [好奇参与起草现行婴儿纸尿裤国标](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A5%87%E5%8F%82%E4%B8%8E%E8%B5%B7%E8%8D%89%E7%8E%B0%E8%A1%8C%E5%A9%B4%E5%84%BF%E7%BA%B8%E5%B0%BF%E8%A3%A4%E5%9B%BD%E6%A0%87%23) `400.5K 🔥` `NEW`
1. [久诚同时cos干将和莫邪 (Jiucheng cosplays Gan Jiang and Mo Xie at the same time)](https://s.weibo.com/weibo?q=%23%E4%B9%85%E8%AF%9A%E5%90%8C%E6%97%B6cos%E5%B9%B2%E5%B0%86%E5%92%8C%E8%8E%AB%E9%82%AA%23) `398.9K 🔥` `NEW`
1. [王俊凯工作室干什么都心酸](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%B9%B2%E4%BB%80%E4%B9%88%E9%83%BD%E5%BF%83%E9%85%B8%23) `396.0K 🔥` `NEW`
1. [孙杨不吵换马頔吵了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E4%B8%8D%E5%90%B5%E6%8D%A2%E9%A9%AC%E9%A0%94%E5%90%B5%E4%BA%86%23) `392.4K 🔥` `NEW`
1. [好奇纸尿裤声明](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A5%87%E7%BA%B8%E5%B0%BF%E8%A3%A4%E5%A3%B0%E6%98%8E%23) `388.4K 🔥` `NEW`
1. [花少导演面试陈瑶](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%AF%BC%E6%BC%94%E9%9D%A2%E8%AF%95%E9%99%88%E7%91%B6%23) `309.6K 🔥` `NEW`
1. [迪丽热巴签约嘉行13年](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AD%BE%E7%BA%A6%E5%98%89%E8%A1%8C13%E5%B9%B4%23) `307.2K 🔥` `NEW`
1. [毒纸尿裤涉事品牌](https://s.weibo.com/weibo?q=%23%E6%AF%92%E7%BA%B8%E5%B0%BF%E8%A3%A4%E6%B6%89%E4%BA%8B%E5%93%81%E7%89%8C%23) `280.4K 🔥` `NEW`
1. [一抬头刘亦菲在我面前](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%8A%AC%E5%A4%B4%E5%88%98%E4%BA%A6%E8%8F%B2%E5%9C%A8%E6%88%91%E9%9D%A2%E5%89%8D%23) `268.9K 🔥` `NEW`
1. [韩国五大电视台之一的JTBC破产](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%BA%94%E5%A4%A7%E7%94%B5%E8%A7%86%E5%8F%B0%E4%B9%8B%E4%B8%80%E7%9A%84JTBC%E7%A0%B4%E4%BA%A7%23) `261.8K 🔥` `NEW`
1. [惠利回应有小肚子](https://s.weibo.com/weibo?q=%23%E6%83%A0%E5%88%A9%E5%9B%9E%E5%BA%94%E6%9C%89%E5%B0%8F%E8%82%9A%E5%AD%90%23) `260.4K 🔥` `NEW`
1. [王者给我留点头像框 (The king left me a picture frame)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E7%BB%99%E6%88%91%E7%95%99%E7%82%B9%E5%A4%B4%E5%83%8F%E6%A1%86%23) `249.1K 🔥` `NEW`
1. [周柯宇震惊张凌赫这么帅](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9F%AF%E5%AE%87%E9%9C%87%E6%83%8A%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BF%99%E4%B9%88%E5%B8%85%23) `209.6K 🔥` `NEW`
1. [盛世天下见面会](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E4%B8%96%E5%A4%A9%E4%B8%8B%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `206.3K 🔥` `NEW`
1. [女子哭诉孕检正常生2个孩子都要换肝](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%93%AD%E8%AF%89%E5%AD%95%E6%A3%80%E6%AD%A3%E5%B8%B8%E7%94%9F2%E4%B8%AA%E5%AD%A9%E5%AD%90%E9%83%BD%E8%A6%81%E6%8D%A2%E8%82%9D%23) `195.4K 🔥` `NEW`
1. [李荣浩 让我在休克前沉醉在母带中](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%20%E8%AE%A9%E6%88%91%E5%9C%A8%E4%BC%91%E5%85%8B%E5%89%8D%E6%B2%89%E9%86%89%E5%9C%A8%E6%AF%8D%E5%B8%A6%E4%B8%AD%23) `194.5K 🔥` `NEW`
1. [17岁高中生射击馆打工身亡](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E9%AB%98%E4%B8%AD%E7%94%9F%E5%B0%84%E5%87%BB%E9%A6%86%E6%89%93%E5%B7%A5%E8%BA%AB%E4%BA%A1%23) `189.8K 🔥` `NEW`
1. [葡萄牙主帅回应爆冷](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E4%B8%BB%E5%B8%85%E5%9B%9E%E5%BA%94%E7%88%86%E5%86%B7%23) `189.4K 🔥` `NEW`
1. [货拉拉将退还不合理费用1.2亿](https://s.weibo.com/weibo?q=%23%E8%B4%A7%E6%8B%89%E6%8B%89%E5%B0%86%E9%80%80%E8%BF%98%E4%B8%8D%E5%90%88%E7%90%86%E8%B4%B9%E7%94%A81.2%E4%BA%BF%23) `189.3K 🔥` `NEW`
1. [艾琳新皮肤繁夏笺](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%90%B3%E6%96%B0%E7%9A%AE%E8%82%A4%E7%B9%81%E5%A4%8F%E7%AC%BA%23) `189.3K 🔥` `NEW`
1. [密云养老中心暴雨洪水灾害调查报告](https://s.weibo.com/weibo?q=%23%E5%AF%86%E4%BA%91%E5%85%BB%E8%80%81%E4%B8%AD%E5%BF%83%E6%9A%B4%E9%9B%A8%E6%B4%AA%E6%B0%B4%E7%81%BE%E5%AE%B3%E8%B0%83%E6%9F%A5%E6%8A%A5%E5%91%8A%23) `188.3K 🔥` `NEW`
1. [当我意识到粽子只是一种形状 (When I realized that zongzi is just a shape)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E6%84%8F%E8%AF%86%E5%88%B0%E7%B2%BD%E5%AD%90%E5%8F%AA%E6%98%AF%E4%B8%80%E7%A7%8D%E5%BD%A2%E7%8A%B6%23) `188.1K 🔥` `NEW`
1. [美国通胀又爆了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%80%9A%E8%83%80%E5%8F%88%E7%88%86%E4%BA%86%23) `188.0K 🔥` `NEW`
1. [2026年新能源汽车下乡](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%E4%B8%8B%E4%B9%A1%23) `187.5K 🔥` `NEW`
1. [世界杯第一轮巨星表现](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E7%AC%AC%E4%B8%80%E8%BD%AE%E5%B7%A8%E6%98%9F%E8%A1%A8%E7%8E%B0%23) `187.4K 🔥` `NEW`
1. [第三批国补来了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%89%E6%89%B9%E5%9B%BD%E8%A1%A5%E6%9D%A5%E4%BA%86%23) `186.8K 🔥` `NEW`
1. [Babycare发转声明领积分私信](https://s.weibo.com/weibo?q=%23Babycare%E5%8F%91%E8%BD%AC%E5%A3%B0%E6%98%8E%E9%A2%86%E7%A7%AF%E5%88%86%E7%A7%81%E4%BF%A1%23) `186.7K 🔥` `NEW`
1. [babycare回应](https://s.weibo.com/weibo?q=%23babycare%E5%9B%9E%E5%BA%94%23) `394.4K 🔥` `-91%`
1. [纸尿裤 有毒 (Diapers are toxic)](https://s.weibo.com/weibo?q=%23%E7%BA%B8%E5%B0%BF%E8%A3%A4%20%E6%9C%89%E6%AF%92%23) `389.7K 🔥` `-97%`
1. [甲酰胺 生殖毒性](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%85%B0%E8%83%BA%20%E7%94%9F%E6%AE%96%E6%AF%92%E6%80%A7%23) `239.0K 🔥` `-39%`
1. [很多婴幼儿血液中检出甲酰胺](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E5%A9%B4%E5%B9%BC%E5%84%BF%E8%A1%80%E6%B6%B2%E4%B8%AD%E6%A3%80%E5%87%BA%E7%94%B2%E9%85%B0%E8%83%BA%23) `208.8K 🔥` `-33%`
1. [帮宝适](https://s.weibo.com/weibo?q=%23%E5%B8%AE%E5%AE%9D%E9%80%82%23) `197.3K 🔥` `-42%`

Updated at 2026-06-18 17:46:01

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
