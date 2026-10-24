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

1. [秦始皇兵马俑上发现女性指纹](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%85%B5%E9%A9%AC%E4%BF%91%E4%B8%8A%E5%8F%91%E7%8E%B0%E5%A5%B3%E6%80%A7%E6%8C%87%E7%BA%B9%23) `1.2M 🔥` `NEW`
1. [去年全国结婚登记676万对](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%B9%B4%E5%85%A8%E5%9B%BD%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0676%E4%B8%87%E5%AF%B9%23) `854.4K 🔥` `NEW`
1. [个人账户跨省共济全国落地](https://s.weibo.com/weibo?q=%23%E4%B8%AA%E4%BA%BA%E8%B4%A6%E6%88%B7%E8%B7%A8%E7%9C%81%E5%85%B1%E6%B5%8E%E5%85%A8%E5%9B%BD%E8%90%BD%E5%9C%B0%23) `661.3K 🔥` `NEW`
1. [匡威卖不动了吗](https://s.weibo.com/weibo?q=%23%E5%8C%A1%E5%A8%81%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%E5%90%97%23) `487.8K 🔥` `NEW`
1. [成都蓉城vs大连英博](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E8%93%89%E5%9F%8Evs%E5%A4%A7%E8%BF%9E%E8%8B%B1%E5%8D%9A%23) `487.2K 🔥` `NEW`
1. [菲防长竟叫嚣战争行为恐吓中国](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E9%98%B2%E9%95%BF%E7%AB%9F%E5%8F%AB%E5%9A%A3%E6%88%98%E4%BA%89%E8%A1%8C%E4%B8%BA%E6%81%90%E5%90%93%E4%B8%AD%E5%9B%BD%23) `387.6K 🔥` `NEW`
1. [吃红薯干能减肥是误区](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%BA%A2%E8%96%AF%E5%B9%B2%E8%83%BD%E5%87%8F%E8%82%A5%E6%98%AF%E8%AF%AF%E5%8C%BA%23) `386.6K 🔥` `NEW`
1. [老年人摔倒后身体断崖式衰退真相](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B9%B4%E4%BA%BA%E6%91%94%E5%80%92%E5%90%8E%E8%BA%AB%E4%BD%93%E6%96%AD%E5%B4%96%E5%BC%8F%E8%A1%B0%E9%80%80%E7%9C%9F%E7%9B%B8%23) `375.3K 🔥` `NEW`
1. [多位网友晒iPhoneDuo屏幕裂了](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BD%8D%E7%BD%91%E5%8F%8B%E6%99%92iPhoneDuo%E5%B1%8F%E5%B9%95%E8%A3%82%E4%BA%86%23) `330.6K 🔥` `NEW`
1. [突然get到了杨超越毫不费力的绝美](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6get%E5%88%B0%E4%BA%86%E6%9D%A8%E8%B6%85%E8%B6%8A%E6%AF%AB%E4%B8%8D%E8%B4%B9%E5%8A%9B%E7%9A%84%E7%BB%9D%E7%BE%8E%23) `245.1K 🔥` `NEW`
1. [男明星红毯 无聊](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%98%8E%E6%98%9F%E7%BA%A2%E6%AF%AF%20%E6%97%A0%E8%81%8A%23) `244.4K 🔥` `NEW`
1. [黄多多说自己的头号粉丝是妹妹](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E8%AF%B4%E8%87%AA%E5%B7%B1%E7%9A%84%E5%A4%B4%E5%8F%B7%E7%B2%89%E4%B8%9D%E6%98%AF%E5%A6%B9%E5%A6%B9%23) `243.7K 🔥` `NEW`
1. [BLG不夺冠雷鸟退全款](https://s.weibo.com/weibo?q=%23BLG%E4%B8%8D%E5%A4%BA%E5%86%A0%E9%9B%B7%E9%B8%9F%E9%80%80%E5%85%A8%E6%AC%BE%23) `242.6K 🔥` `NEW`
1. [毛不易 情商](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%8D%E6%98%93%20%E6%83%85%E5%95%86%23) `242.3K 🔥` `NEW`
1. [拍和亲公主别横空乱发明](https://s.weibo.com/weibo?q=%23%E6%8B%8D%E5%92%8C%E4%BA%B2%E5%85%AC%E4%B8%BB%E5%88%AB%E6%A8%AA%E7%A9%BA%E4%B9%B1%E5%8F%91%E6%98%8E%23) `241.1K 🔥` `NEW`
1. [刘亦菲上场前欧阳娜娜给她换伞](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E4%B8%8A%E5%9C%BA%E5%89%8D%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E7%BB%99%E5%A5%B9%E6%8D%A2%E4%BC%9E%23) `240.1K 🔥` `NEW`
1. [郑州路边出现加拿大一枝黄花](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%B7%9E%E8%B7%AF%E8%BE%B9%E5%87%BA%E7%8E%B0%E5%8A%A0%E6%8B%BF%E5%A4%A7%E4%B8%80%E6%9E%9D%E9%BB%84%E8%8A%B1%23) `231.7K 🔥` `NEW`
1. [西藏那曲地震玛如乡搜救已完成](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E9%82%A3%E6%9B%B2%E5%9C%B0%E9%9C%87%E7%8E%9B%E5%A6%82%E4%B9%A1%E6%90%9C%E6%95%91%E5%B7%B2%E5%AE%8C%E6%88%90%23) `212.5K 🔥` `NEW`
1. [甜馨14岁生日全家福](https://s.weibo.com/weibo?q=%23%E7%94%9C%E9%A6%A814%E5%B2%81%E7%94%9F%E6%97%A5%E5%85%A8%E5%AE%B6%E7%A6%8F%23) `206.2K 🔥` `NEW`
1. [红秀主编说法庭见](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E7%A7%80%E4%B8%BB%E7%BC%96%E8%AF%B4%E6%B3%95%E5%BA%AD%E8%A7%81%23) `201.9K 🔥` `NEW`
1. [王一博的名字真出现在摄影团队名单里](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%9A%84%E5%90%8D%E5%AD%97%E7%9C%9F%E5%87%BA%E7%8E%B0%E5%9C%A8%E6%91%84%E5%BD%B1%E5%9B%A2%E9%98%9F%E5%90%8D%E5%8D%95%E9%87%8C%23) `194.5K 🔥` `NEW`
1. [嫁金钗没有人真正关心君黛](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E6%B2%A1%E6%9C%89%E4%BA%BA%E7%9C%9F%E6%AD%A3%E5%85%B3%E5%BF%83%E5%90%9B%E9%BB%9B%23) `192.2K 🔥` `NEW`
1. [存够200万算不算财务自由](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%A4%9F200%E4%B8%87%E7%AE%97%E4%B8%8D%E7%AE%97%E8%B4%A2%E5%8A%A1%E8%87%AA%E7%94%B1%23) `188.2K 🔥` `NEW`
1. [男子打包饭菜说漏了被陌生人打倒](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%89%93%E5%8C%85%E9%A5%AD%E8%8F%9C%E8%AF%B4%E6%BC%8F%E4%BA%86%E8%A2%AB%E9%99%8C%E7%94%9F%E4%BA%BA%E6%89%93%E5%80%92%23) `150.9K 🔥` `NEW`
1. [黄多多太像妈妈了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E5%A4%AA%E5%83%8F%E5%A6%88%E5%A6%88%E4%BA%86%23) `150.4K 🔥` `NEW`
1. [闵塔鲨回应](https://s.weibo.com/weibo?q=%23%E9%97%B5%E5%A1%94%E9%B2%A8%E5%9B%9E%E5%BA%94%23) `150.0K 🔥` `NEW`
1. [马斯克称乌精英暴富民众孩子却赴死](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%A7%B0%E4%B9%8C%E7%B2%BE%E8%8B%B1%E6%9A%B4%E5%AF%8C%E6%B0%91%E4%BC%97%E5%AD%A9%E5%AD%90%E5%8D%B4%E8%B5%B4%E6%AD%BB%23) `148.8K 🔥` `NEW`
1. [江苏市委书记会见谷爱凌](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E5%B8%82%E5%A7%94%E4%B9%A6%E8%AE%B0%E4%BC%9A%E8%A7%81%E8%B0%B7%E7%88%B1%E5%87%8C%23) `148.1K 🔥` `NEW`
1. [菲律宾两架军机空中相撞现场画面](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E4%B8%A4%E6%9E%B6%E5%86%9B%E6%9C%BA%E7%A9%BA%E4%B8%AD%E7%9B%B8%E6%92%9E%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `147.6K 🔥` `NEW`
1. [严浩翔新剧一上来就被分手](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%96%B0%E5%89%A7%E4%B8%80%E4%B8%8A%E6%9D%A5%E5%B0%B1%E8%A2%AB%E5%88%86%E6%89%8B%23) `147.3K 🔥` `NEW`
1. [闵塔鲨发迪丽热巴造型图遭质疑](https://s.weibo.com/weibo?q=%23%E9%97%B5%E5%A1%94%E9%B2%A8%E5%8F%91%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%80%A0%E5%9E%8B%E5%9B%BE%E9%81%AD%E8%B4%A8%E7%96%91%23) `145.7K 🔥` `NEW`
1. [欧阳娜娜 审美创意](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%20%E5%AE%A1%E7%BE%8E%E5%88%9B%E6%84%8F%23) `143.3K 🔥` `NEW`
1. [文荣奖](https://s.weibo.com/weibo?q=%23%E6%96%87%E8%8D%A3%E5%A5%96%23) `142.7K 🔥` `NEW`
1. [中超](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E8%B6%85%23) `140.6K 🔥` `NEW`
1. [VOGUE没有播洪知秀走秀](https://s.weibo.com/weibo?q=%23VOGUE%E6%B2%A1%E6%9C%89%E6%92%AD%E6%B4%AA%E7%9F%A5%E7%A7%80%E8%B5%B0%E7%A7%80%23) `138.4K 🔥` `NEW`
1. [张予曦红毯把江南穿成了绝色](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E7%BA%A2%E6%AF%AF%E6%8A%8A%E6%B1%9F%E5%8D%97%E7%A9%BF%E6%88%90%E4%BA%86%E7%BB%9D%E8%89%B2%23) `137.7K 🔥` `NEW`
1. [胡先煦破坏了白敬亭的原则](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E7%A0%B4%E5%9D%8F%E4%BA%86%E7%99%BD%E6%95%AC%E4%BA%AD%E7%9A%84%E5%8E%9F%E5%88%99%23) `134.0K 🔥` `NEW`
1. [给胖哥俩差评被曝用餐照](https://s.weibo.com/weibo?q=%23%E7%BB%99%E8%83%96%E5%93%A5%E4%BF%A9%E5%B7%AE%E8%AF%84%E8%A2%AB%E6%9B%9D%E7%94%A8%E9%A4%90%E7%85%A7%23) `132.2K 🔥` `NEW`
1. [张晓龙一次演了3个太医](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%93%E9%BE%99%E4%B8%80%E6%AC%A1%E6%BC%94%E4%BA%863%E4%B8%AA%E5%A4%AA%E5%8C%BB%23) `127.9K 🔥` `NEW`
1. [华晨宇演唱会偶遇失联24年老友](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E5%81%B6%E9%81%87%E5%A4%B1%E8%81%9424%E5%B9%B4%E8%80%81%E5%8F%8B%23) `127.2K 🔥` `NEW`
1. [文班回应绝平放篮遭阿门盖帽](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E5%9B%9E%E5%BA%94%E7%BB%9D%E5%B9%B3%E6%94%BE%E7%AF%AE%E9%81%AD%E9%98%BF%E9%97%A8%E7%9B%96%E5%B8%BD%23) `125.0K 🔥` `NEW`
1. [严浩翔贡献了伟大的人生镜头](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%B4%A1%E7%8C%AE%E4%BA%86%E4%BC%9F%E5%A4%A7%E7%9A%84%E4%BA%BA%E7%94%9F%E9%95%9C%E5%A4%B4%23) `121.9K 🔥` `NEW`
1. [白居易今年到底得罪谁了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B1%85%E6%98%93%E4%BB%8A%E5%B9%B4%E5%88%B0%E5%BA%95%E5%BE%97%E7%BD%AA%E8%B0%81%E4%BA%86%23) `116.2K 🔥` `NEW`
1. [汞能变成黄金](https://s.weibo.com/weibo?q=%23%E6%B1%9E%E8%83%BD%E5%8F%98%E6%88%90%E9%BB%84%E9%87%91%23) `115.8K 🔥` `NEW`
1. [魏娆周芙母女俩把夫君迷成智障了](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A8%86%E5%91%A8%E8%8A%99%E6%AF%8D%E5%A5%B3%E4%BF%A9%E6%8A%8A%E5%A4%AB%E5%90%9B%E8%BF%B7%E6%88%90%E6%99%BA%E9%9A%9C%E4%BA%86%23) `115.2K 🔥` `NEW`
1. [老人去世再婚老伴和儿子夺骨灰](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%8E%BB%E4%B8%96%E5%86%8D%E5%A9%9A%E8%80%81%E4%BC%B4%E5%92%8C%E5%84%BF%E5%AD%90%E5%A4%BA%E9%AA%A8%E7%81%B0%23) `113.1K 🔥` `NEW`
1. [跟着披哥上京东健康好物6.8折](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E6%8A%AB%E5%93%A5%E4%B8%8A%E4%BA%AC%E4%B8%9C%E5%81%A5%E5%BA%B7%E5%A5%BD%E7%89%A96.8%E6%8A%98%23) `633.5K 🔥`
1. [年轻人正在抛弃帆布鞋](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%AD%A3%E5%9C%A8%E6%8A%9B%E5%BC%83%E5%B8%86%E5%B8%83%E9%9E%8B%23) `245.8K 🔥` `-42%`
1. [父亲突发脑梗儿子用AI抢出救命时间](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E7%AA%81%E5%8F%91%E8%84%91%E6%A2%97%E5%84%BF%E5%AD%90%E7%94%A8AI%E6%8A%A2%E5%87%BA%E6%95%91%E5%91%BD%E6%97%B6%E9%97%B4%23) `239.8K 🔥` `-79%`
1. [iPhoneDuo屏幕开裂](https://s.weibo.com/weibo?q=%23iPhoneDuo%E5%B1%8F%E5%B9%95%E5%BC%80%E8%A3%82%23) `141.5K 🔥` `-43%`

Updated at 2026-10-24 17:03:37

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
