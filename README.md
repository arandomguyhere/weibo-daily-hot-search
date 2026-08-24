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

1. [中国智造这样点亮未来 (This is how China’s smart manufacturing lights up the future)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%99%BA%E9%80%A0%E8%BF%99%E6%A0%B7%E7%82%B9%E4%BA%AE%E6%9C%AA%E6%9D%A5%23) `1.1M 🔥` `NEW`
1. [杜锋将出任广东宏远总教练](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E9%94%8B%E5%B0%86%E5%87%BA%E4%BB%BB%E5%B9%BF%E4%B8%9C%E5%AE%8F%E8%BF%9C%E6%80%BB%E6%95%99%E7%BB%83%23) `623.8K 🔥` `NEW`
1. [正午阳光疑似辟谣虞书欣出演](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%E7%96%91%E4%BC%BC%E8%BE%9F%E8%B0%A3%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%87%BA%E6%BC%94%23) `346.4K 🔥` `NEW`
1. [郭二娃报复举报人致其死亡](https://s.weibo.com/weibo?q=%23%E9%83%AD%E4%BA%8C%E5%A8%83%E6%8A%A5%E5%A4%8D%E4%B8%BE%E6%8A%A5%E4%BA%BA%E8%87%B4%E5%85%B6%E6%AD%BB%E4%BA%A1%23) `320.8K 🔥` `NEW`
1. [印度洋发生沉船事故有中国船员失联](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%B4%8B%E5%8F%91%E7%94%9F%E6%B2%89%E8%88%B9%E4%BA%8B%E6%95%85%E6%9C%89%E4%B8%AD%E5%9B%BD%E8%88%B9%E5%91%98%E5%A4%B1%E8%81%94%23) `261.9K 🔥` `NEW`
1. [儿子像妈女儿像爸的真相](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%83%8F%E5%A6%88%E5%A5%B3%E5%84%BF%E5%83%8F%E7%88%B8%E7%9A%84%E7%9C%9F%E7%9B%B8%23) `257.5K 🔥` `NEW`
1. [IU去看BIGBANG演唱会](https://s.weibo.com/weibo?q=%23IU%E5%8E%BB%E7%9C%8BBIGBANG%E6%BC%94%E5%94%B1%E4%BC%9A%23) `220.8K 🔥` `NEW`
1. [现货黄金](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%23) `217.8K 🔥` `NEW`
1. [家长单手抱婴儿致孩子后仰后脑勺着地](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E5%8D%95%E6%89%8B%E6%8A%B1%E5%A9%B4%E5%84%BF%E8%87%B4%E5%AD%A9%E5%AD%90%E5%90%8E%E4%BB%B0%E5%90%8E%E8%84%91%E5%8B%BA%E7%9D%80%E5%9C%B0%23) `205.5K 🔥` `NEW`
1. [Lisa官宣新EP](https://s.weibo.com/weibo?q=%23Lisa%E5%AE%98%E5%AE%A3%E6%96%B0EP%23) `197.8K 🔥` `NEW`
1. [这要是在商场大人小孩都迈不开腿了 (If this happened in a shopping mall, adults and children would not be able to move their legs.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E8%A6%81%E6%98%AF%E5%9C%A8%E5%95%86%E5%9C%BA%E5%A4%A7%E4%BA%BA%E5%B0%8F%E5%AD%A9%E9%83%BD%E8%BF%88%E4%B8%8D%E5%BC%80%E8%85%BF%E4%BA%86%23) `188.5K 🔥` `NEW`
1. [易烊千玺抱猫嘉人九月刊封面](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%8A%B1%E7%8C%AB%E5%98%89%E4%BA%BA%E4%B9%9D%E6%9C%88%E5%88%8A%E5%B0%81%E9%9D%A2%23) `181.4K 🔥` `NEW`
1. [BIGBANG演唱会嘉宾阵容](https://s.weibo.com/weibo?q=%23BIGBANG%E6%BC%94%E5%94%B1%E4%BC%9A%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `139.0K 🔥` `NEW`
1. [粥饼伦首个店铺将闭店](https://s.weibo.com/weibo?q=%23%E7%B2%A5%E9%A5%BC%E4%BC%A6%E9%A6%96%E4%B8%AA%E5%BA%97%E9%93%BA%E5%B0%86%E9%97%AD%E5%BA%97%23) `129.6K 🔥` `NEW`
1. [脑花 算力](https://s.weibo.com/weibo?q=%23%E8%84%91%E8%8A%B1%20%E7%AE%97%E5%8A%9B%23) `125.2K 🔥` `NEW`
1. [老人店内离世事件目击者讲述经过](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%BA%97%E5%86%85%E7%A6%BB%E4%B8%96%E4%BA%8B%E4%BB%B6%E7%9B%AE%E5%87%BB%E8%80%85%E8%AE%B2%E8%BF%B0%E7%BB%8F%E8%BF%87%23) `1.5M 🔥` `+61%`
1. [央视网评湖南扶老人被索赔事件](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BD%91%E8%AF%84%E6%B9%96%E5%8D%97%E6%89%B6%E8%80%81%E4%BA%BA%E8%A2%AB%E7%B4%A2%E8%B5%94%E4%BA%8B%E4%BB%B6%23) `1.2M 🔥` `+186%`
1. [网友外卖里吃出手机](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%A4%96%E5%8D%96%E9%87%8C%E5%90%83%E5%87%BA%E6%89%8B%E6%9C%BA%23) `766.6K 🔥` `+250%`
1. [宋威龙秘密世界品牌代言人](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%A7%98%E5%AF%86%E4%B8%96%E7%95%8C%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `634.3K 🔥` `+33%`
1. [千万不要再美化种地生活了](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%86%8D%E7%BE%8E%E5%8C%96%E7%A7%8D%E5%9C%B0%E7%94%9F%E6%B4%BB%E4%BA%86%23) `542.2K 🔥` `+112%`
1. [张子枫进入最佳赏味期](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E8%BF%9B%E5%85%A5%E6%9C%80%E4%BD%B3%E8%B5%8F%E5%91%B3%E6%9C%9F%23) `337.1K 🔥` `+21%`
1. [向佐说要逼我营业吗](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E8%AF%B4%E8%A6%81%E9%80%BC%E6%88%91%E8%90%A5%E4%B8%9A%E5%90%97%23) `330.3K 🔥` `+24%`
1. [秦牛正威大变样](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E7%89%9B%E6%AD%A3%E5%A8%81%E5%A4%A7%E5%8F%98%E6%A0%B7%23) `305.3K 🔥` `+73%`
1. [AI眼镜成为隐私重灾区](https://s.weibo.com/weibo?q=%23AI%E7%9C%BC%E9%95%9C%E6%88%90%E4%B8%BA%E9%9A%90%E7%A7%81%E9%87%8D%E7%81%BE%E5%8C%BA%23) `272.7K 🔥` `+29%`
1. [金晨回国后首秀](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E5%9B%9E%E5%9B%BD%E5%90%8E%E9%A6%96%E7%A7%80%23) `254.0K 🔥` `+53%`
1. [宋丹丹在我爱我家里的吹牛成真了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%B8%B9%E4%B8%B9%E5%9C%A8%E6%88%91%E7%88%B1%E6%88%91%E5%AE%B6%E9%87%8C%E7%9A%84%E5%90%B9%E7%89%9B%E6%88%90%E7%9C%9F%E4%BA%86%23) `166.1K 🔥` `+26%`
1. [多名公职人员涉郭二娃行贿事件被罚](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E5%85%AC%E8%81%8C%E4%BA%BA%E5%91%98%E6%B6%89%E9%83%AD%E4%BA%8C%E5%A8%83%E8%A1%8C%E8%B4%BF%E4%BA%8B%E4%BB%B6%E8%A2%AB%E7%BD%9A%23) `152.6K 🔥` `+23%`
1. [郭二娃死刑 (Guo Erwa's death sentence)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E4%BA%8C%E5%A8%83%E6%AD%BB%E5%88%91%23) `1.0M 🔥`
1. [王菲不承认沈凌模仿的自己](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E4%B8%8D%E6%89%BF%E8%AE%A4%E6%B2%88%E5%87%8C%E6%A8%A1%E4%BB%BF%E7%9A%84%E8%87%AA%E5%B7%B1%23) `527.1K 🔥`
1. [一位A9返贫的大哥给的五点忠告](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BD%8DA9%E8%BF%94%E8%B4%AB%E7%9A%84%E5%A4%A7%E5%93%A5%E7%BB%99%E7%9A%84%E4%BA%94%E7%82%B9%E5%BF%A0%E5%91%8A%23) `315.9K 🔥`
1. [王一博告了新湃传媒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%91%8A%E4%BA%86%E6%96%B0%E6%B9%83%E4%BC%A0%E5%AA%92%23) `291.4K 🔥`
1. [婚礼第二天新娘指纹被爸爸删掉](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E7%A4%BC%E7%AC%AC%E4%BA%8C%E5%A4%A9%E6%96%B0%E5%A8%98%E6%8C%87%E7%BA%B9%E8%A2%AB%E7%88%B8%E7%88%B8%E5%88%A0%E6%8E%89%23) `261.8K 🔥`
1. [爱在无尽夏 男主妆造](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%9C%A8%E6%97%A0%E5%B0%BD%E5%A4%8F%20%E7%94%B7%E4%B8%BB%E5%A6%86%E9%80%A0%23) `206.0K 🔥`
1. [向太不满易立竞采访向佐](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E4%B8%8D%E6%BB%A1%E6%98%93%E7%AB%8B%E7%AB%9E%E9%87%87%E8%AE%BF%E5%90%91%E4%BD%90%23) `200.0K 🔥`
1. [电力工人高空作业疑似摆拍](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%8A%9B%E5%B7%A5%E4%BA%BA%E9%AB%98%E7%A9%BA%E4%BD%9C%E4%B8%9A%E7%96%91%E4%BC%BC%E6%91%86%E6%8B%8D%23) `174.2K 🔥`
1. [张凌赫卢昱晓要二搭了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8D%A2%E6%98%B1%E6%99%93%E8%A6%81%E4%BA%8C%E6%90%AD%E4%BA%86%23) `151.5K 🔥`
1. [向太说和周星驰做不回好朋友](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E5%92%8C%E5%91%A8%E6%98%9F%E9%A9%B0%E5%81%9A%E4%B8%8D%E5%9B%9E%E5%A5%BD%E6%9C%8B%E5%8F%8B%23) `149.4K 🔥`
1. [海鲜运输 有毒药水](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E9%B2%9C%E8%BF%90%E8%BE%93%20%E6%9C%89%E6%AF%92%E8%8D%AF%E6%B0%B4%23) `149.0K 🔥`
1. [李昀锐确认出演剑阁闻铃](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E7%A1%AE%E8%AE%A4%E5%87%BA%E6%BC%94%E5%89%91%E9%98%81%E9%97%BB%E9%93%83%23) `144.7K 🔥`
1. [青岛辱骂游客男子被行拘10天](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E8%BE%B1%E9%AA%82%E6%B8%B8%E5%AE%A2%E7%94%B7%E5%AD%90%E8%A2%AB%E8%A1%8C%E6%8B%9810%E5%A4%A9%23) `719.0K 🔥` `-72%`
1. [KSG 无畏](https://s.weibo.com/weibo?q=%23KSG%20%E6%97%A0%E7%95%8F%23) `345.2K 🔥` `-41%`
1. [日本学校午餐](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%AD%A6%E6%A0%A1%E5%8D%88%E9%A4%90%23) `312.1K 🔥` `-45%`
1. [春日宴](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%97%A5%E5%AE%B4%23) `262.2K 🔥` `-32%`
1. [孙颖莎再夺女单世排第1](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%86%8D%E5%A4%BA%E5%A5%B3%E5%8D%95%E4%B8%96%E6%8E%92%E7%AC%AC1%23) `214.6K 🔥` `-23%`
1. [梁洁 刺棠女二](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%B4%81%20%E5%88%BA%E6%A3%A0%E5%A5%B3%E4%BA%8C%23) `173.5K 🔥` `-23%`
1. [时代少年团成团七周年曲目列表](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%88%90%E5%9B%A2%E4%B8%83%E5%91%A8%E5%B9%B4%E6%9B%B2%E7%9B%AE%E5%88%97%E8%A1%A8%23) `140.8K 🔥` `-26%`
1. [小鹏集团二季度业绩](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8F%E9%9B%86%E5%9B%A2%E4%BA%8C%E5%AD%A3%E5%BA%A6%E4%B8%9A%E7%BB%A9%23) `140.0K 🔥` `-21%`
1. [央视曝光隔空猥亵](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E9%9A%94%E7%A9%BA%E7%8C%A5%E4%BA%B5%23) `128.0K 🔥` `-39%`
1. [虞书欣周边疑似撞款Jennie联名](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%91%A8%E8%BE%B9%E7%96%91%E4%BC%BC%E6%92%9E%E6%AC%BEJennie%E8%81%94%E5%90%8D%23) `127.6K 🔥` `-39%`
1. [王昶夺冠钱天一员工比她还激动](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%B6%E5%A4%BA%E5%86%A0%E9%92%B1%E5%A4%A9%E4%B8%80%E5%91%98%E5%B7%A5%E6%AF%94%E5%A5%B9%E8%BF%98%E6%BF%80%E5%8A%A8%23) `125.0K 🔥` `-37%`

Updated at 2026-08-24 22:10:53

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
