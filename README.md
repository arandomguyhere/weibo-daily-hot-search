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

1. [长鑫科技 (Changxin Technology)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%23) `1.3M 🔥` `NEW`
1. [国产600公斤推力级涡扇发动机首飞成功](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7600%E5%85%AC%E6%96%A4%E6%8E%A8%E5%8A%9B%E7%BA%A7%E6%B6%A1%E6%89%87%E5%8F%91%E5%8A%A8%E6%9C%BA%E9%A6%96%E9%A3%9E%E6%88%90%E5%8A%9F%23) `834.7K 🔥` `NEW`
1. [王鹤棣 沈月](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%20%E6%B2%88%E6%9C%88%23) `832.4K 🔥` `NEW`
1. [两个淡人生了个浓人宝宝](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%B8%AA%E6%B7%A1%E4%BA%BA%E7%94%9F%E4%BA%86%E4%B8%AA%E6%B5%93%E4%BA%BA%E5%AE%9D%E5%AE%9D%23) `825.0K 🔥` `NEW`
1. [昆虫学家辟谣一只鹿角天牛58万](https://s.weibo.com/weibo?q=%23%E6%98%86%E8%99%AB%E5%AD%A6%E5%AE%B6%E8%BE%9F%E8%B0%A3%E4%B8%80%E5%8F%AA%E9%B9%BF%E8%A7%92%E5%A4%A9%E7%89%9B58%E4%B8%87%23) `817.9K 🔥` `NEW`
1. [武汉停课停业](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%81%9C%E8%AF%BE%E5%81%9C%E4%B8%9A%23) `809.2K 🔥` `NEW`
1. [盒马60元一斤网红葡萄卖断货](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%AC60%E5%85%83%E4%B8%80%E6%96%A4%E7%BD%91%E7%BA%A2%E8%91%A1%E8%90%84%E5%8D%96%E6%96%AD%E8%B4%A7%23) `553.6K 🔥` `NEW`
1. [苗苗转发李晨郑恺跑男停宣](https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E8%BD%AC%E5%8F%91%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%E8%B7%91%E7%94%B7%E5%81%9C%E5%AE%A3%23) `357.4K 🔥` `NEW`
1. [客栈官号放了王鹤棣徐志胜的切片](https://s.weibo.com/weibo?q=%23%E5%AE%A2%E6%A0%88%E5%AE%98%E5%8F%B7%E6%94%BE%E4%BA%86%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%BE%90%E5%BF%97%E8%83%9C%E7%9A%84%E5%88%87%E7%89%87%23) `355.2K 🔥` `NEW`
1. [不舒服文学下沉出圈](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%88%92%E6%9C%8D%E6%96%87%E5%AD%A6%E4%B8%8B%E6%B2%89%E5%87%BA%E5%9C%88%23) `345.5K 🔥` `NEW`
1. [BTS成员闵玧其插队被骂 (BTS member Min Yoongi was scolded for jumping in line)](https://s.weibo.com/weibo?q=%23BTS%E6%88%90%E5%91%98%E9%97%B5%E7%8E%A7%E5%85%B6%E6%8F%92%E9%98%9F%E8%A2%AB%E9%AA%82%23) `339.8K 🔥` `NEW`
1. [五月天阿信道歉](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%9C%88%E5%A4%A9%E9%98%BF%E4%BF%A1%E9%81%93%E6%AD%89%23) `335.1K 🔥` `NEW`
1. [哈登女友观看东决G3发社媒怒喷裁判](https://s.weibo.com/weibo?q=%23%E5%93%88%E7%99%BB%E5%A5%B3%E5%8F%8B%E8%A7%82%E7%9C%8B%E4%B8%9C%E5%86%B3G3%E5%8F%91%E7%A4%BE%E5%AA%92%E6%80%92%E5%96%B7%E8%A3%81%E5%88%A4%23) `334.1K 🔥` `NEW`
1. [鹿晗控诉五哈P图严重](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%8E%A7%E8%AF%89%E4%BA%94%E5%93%88P%E5%9B%BE%E4%B8%A5%E9%87%8D%23) `332.8K 🔥` `NEW`
1. [曝杨紫在接触女君和熹](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%A8%E7%B4%AB%E5%9C%A8%E6%8E%A5%E8%A7%A6%E5%A5%B3%E5%90%9B%E5%92%8C%E7%86%B9%23) `331.4K 🔥` `NEW`
1. [杜江霍思燕为妈妈庆祝70大寿](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E6%B1%9F%E9%9C%8D%E6%80%9D%E7%87%95%E4%B8%BA%E5%A6%88%E5%A6%88%E5%BA%86%E7%A5%9D70%E5%A4%A7%E5%AF%BF%23) `325.1K 🔥` `NEW`
1. [DeepSeek崩了](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B4%A9%E4%BA%86%23) `324.8K 🔥` `NEW`
1. [2女儿溺亡父亲索赔270万判赔9.2万](https://s.weibo.com/weibo?q=%232%E5%A5%B3%E5%84%BF%E6%BA%BA%E4%BA%A1%E7%88%B6%E4%BA%B2%E7%B4%A2%E8%B5%94270%E4%B8%87%E5%88%A4%E8%B5%949.2%E4%B8%87%23) `318.6K 🔥` `NEW`
1. [新华社四问留神峪煤矿事故](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8D%8E%E7%A4%BE%E5%9B%9B%E9%97%AE%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%23) `315.8K 🔥` `NEW`
1. [朴槿惠出狱后首次公开露面助选](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E6%A7%BF%E6%83%A0%E5%87%BA%E7%8B%B1%E5%90%8E%E9%A6%96%E6%AC%A1%E5%85%AC%E5%BC%80%E9%9C%B2%E9%9D%A2%E5%8A%A9%E9%80%89%23) `310.7K 🔥` `NEW`
1. [伊能静体面 (Yi Nengjing's face)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E4%BD%93%E9%9D%A2%23) `309.5K 🔥` `NEW`
1. [郭碧婷爸爸晒与向笙向芷合照](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E7%88%B8%E7%88%B8%E6%99%92%E4%B8%8E%E5%90%91%E7%AC%99%E5%90%91%E8%8A%B7%E5%90%88%E7%85%A7%23) `306.9K 🔥` `NEW`
1. [女子因漏放吸管辱骂砸打店员](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E6%BC%8F%E6%94%BE%E5%90%B8%E7%AE%A1%E8%BE%B1%E9%AA%82%E7%A0%B8%E6%89%93%E5%BA%97%E5%91%98%23) `306.4K 🔥` `NEW`
1. [野泳男子嬉戏中将4名女孩逼向深水区](https://s.weibo.com/weibo?q=%23%E9%87%8E%E6%B3%B3%E7%94%B7%E5%AD%90%E5%AC%89%E6%88%8F%E4%B8%AD%E5%B0%864%E5%90%8D%E5%A5%B3%E5%AD%A9%E9%80%BC%E5%90%91%E6%B7%B1%E6%B0%B4%E5%8C%BA%23) `303.1K 🔥` `NEW`
1. [李宇春说自己不会唱无价之姐了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E8%AF%B4%E8%87%AA%E5%B7%B1%E4%B8%8D%E4%BC%9A%E5%94%B1%E6%97%A0%E4%BB%B7%E4%B9%8B%E5%A7%90%E4%BA%86%23) `300.9K 🔥` `NEW`
1. [最后他的脸型居然被完全复制了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%90%8E%E4%BB%96%E7%9A%84%E8%84%B8%E5%9E%8B%E5%B1%85%E7%84%B6%E8%A2%AB%E5%AE%8C%E5%85%A8%E5%A4%8D%E5%88%B6%E4%BA%86%23) `298.7K 🔥` `NEW`
1. [卢昱晓白色挂脖连衣裙](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%99%BD%E8%89%B2%E6%8C%82%E8%84%96%E8%BF%9E%E8%A1%A3%E8%A3%99%23) `296.1K 🔥` `NEW`
1. [接亲路上才知新娘居然已婚已育](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E4%BA%B2%E8%B7%AF%E4%B8%8A%E6%89%8D%E7%9F%A5%E6%96%B0%E5%A8%98%E5%B1%85%E7%84%B6%E5%B7%B2%E5%A9%9A%E5%B7%B2%E8%82%B2%23) `294.5K 🔥` `NEW`
1. [天安门挂起巴基斯坦和塞尔维亚国旗](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%89%E9%97%A8%E6%8C%82%E8%B5%B7%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E5%92%8C%E5%A1%9E%E5%B0%94%E7%BB%B4%E4%BA%9A%E5%9B%BD%E6%97%97%23) `292.2K 🔥` `NEW`
1. [晚安奈奈](https://s.weibo.com/weibo?q=%23%E6%99%9A%E5%AE%89%E5%A5%88%E5%A5%88%23) `288.6K 🔥` `NEW`
1. [中国大熊猫就是世界上最可爱的动物 (Chinese giant pandas are the cutest animals in the world)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%B0%B1%E6%98%AF%E4%B8%96%E7%95%8C%E4%B8%8A%E6%9C%80%E5%8F%AF%E7%88%B1%E7%9A%84%E5%8A%A8%E7%89%A9%23) `285.9K 🔥` `NEW`
1. [出门被追问链接的ootd](https://s.weibo.com/weibo?q=%23%E5%87%BA%E9%97%A8%E8%A2%AB%E8%BF%BD%E9%97%AE%E9%93%BE%E6%8E%A5%E7%9A%84ootd%23) `283.4K 🔥` `NEW`
1. [泽龙送痞幼40万手链](https://s.weibo.com/weibo?q=%23%E6%B3%BD%E9%BE%99%E9%80%81%E7%97%9E%E5%B9%BC40%E4%B8%87%E6%89%8B%E9%93%BE%23) `281.6K 🔥` `NEW`
1. [李晨郑恺跑男停宣了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%E8%B7%91%E7%94%B7%E5%81%9C%E5%AE%A3%E4%BA%86%23) `822.2K 🔥` `+99%`
1. [男子踩中蛇窝被咬10多口](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B8%A9%E4%B8%AD%E8%9B%87%E7%AA%9D%E8%A2%AB%E5%92%AC10%E5%A4%9A%E5%8F%A3%23) `739.4K 🔥` `+108%`
1. [孙怡 女儿出名妈妈就有了名字 (Sun Yi’s daughter is famous and her mother has a name)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E5%A5%B3%E5%84%BF%E5%87%BA%E5%90%8D%E5%A6%88%E5%A6%88%E5%B0%B1%E6%9C%89%E4%BA%86%E5%90%8D%E5%AD%97%23) `337.8K 🔥`
1. [只要站起来会发现水其实很浅 (As soon as you stand up, you will find that the water is actually very shallow)](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E8%A6%81%E7%AB%99%E8%B5%B7%E6%9D%A5%E4%BC%9A%E5%8F%91%E7%8E%B0%E6%B0%B4%E5%85%B6%E5%AE%9E%E5%BE%88%E6%B5%85%23) `329.2K 🔥`
1. [刘宇宁说因为粉丝和朋友产生隔阂很傻](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AF%B4%E5%9B%A0%E4%B8%BA%E7%B2%89%E4%B8%9D%E5%92%8C%E6%9C%8B%E5%8F%8B%E4%BA%A7%E7%94%9F%E9%9A%94%E9%98%82%E5%BE%88%E5%82%BB%23) `326.6K 🔥`
1. [杨紫张一山军训合照](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%BC%A0%E4%B8%80%E5%B1%B1%E5%86%9B%E8%AE%AD%E5%90%88%E7%85%A7%23) `323.0K 🔥`
1. [EXO回忆参加快乐大本营](https://s.weibo.com/weibo?q=%23EXO%E5%9B%9E%E5%BF%86%E5%8F%82%E5%8A%A0%E5%BF%AB%E4%B9%90%E5%A4%A7%E6%9C%AC%E8%90%A5%23) `320.3K 🔥`
1. [沈月涨粉量](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E6%B6%A8%E7%B2%89%E9%87%8F%23) `317.7K 🔥`
1. [广东湿到冒泡](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E6%B9%BF%E5%88%B0%E5%86%92%E6%B3%A1%23) `314.3K 🔥`
1. [张凌赫太多人的隐私就不发了 (Zhang Linghe won’t publish the privacy of too many people.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%AA%E5%A4%9A%E4%BA%BA%E7%9A%84%E9%9A%90%E7%A7%81%E5%B0%B1%E4%B8%8D%E5%8F%91%E4%BA%86%23) `312.5K 🔥`
1. [严浩翔捡东西吓得贺峻霖摸眼睛](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%8D%A1%E4%B8%9C%E8%A5%BF%E5%90%93%E5%BE%97%E8%B4%BA%E5%B3%BB%E9%9C%96%E6%91%B8%E7%9C%BC%E7%9D%9B%23) `297.7K 🔥`
1. [AI时代最不可替代的东西](https://s.weibo.com/weibo?q=%23AI%E6%97%B6%E4%BB%A3%E6%9C%80%E4%B8%8D%E5%8F%AF%E6%9B%BF%E4%BB%A3%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `290.5K 🔥`
1. [张大奕怀二胎](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A4%A7%E5%A5%95%E6%80%80%E4%BA%8C%E8%83%8E%23) `286.9K 🔥`
1. [煤矿爆炸时247人下井仅记录124人 (When the coal mine exploded, 247 people went down and only 124 were recorded.)](https://s.weibo.com/weibo?q=%23%E7%85%A4%E7%9F%BF%E7%88%86%E7%82%B8%E6%97%B6247%E4%BA%BA%E4%B8%8B%E4%BA%95%E4%BB%85%E8%AE%B0%E5%BD%95124%E4%BA%BA%23) `1.1M 🔥` `-50%`
1. [第一幕都不觉得她化妆了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E5%B9%95%E9%83%BD%E4%B8%8D%E8%A7%89%E5%BE%97%E5%A5%B9%E5%8C%96%E5%A6%86%E4%BA%86%23) `360.8K 🔥` `-46%`
1. [霸王茶姬geelato新品爆火](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%ACgeelato%E6%96%B0%E5%93%81%E7%88%86%E7%81%AB%23) `348.9K 🔥` `-55%`
1. [武契奇抵京](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E6%8A%B5%E4%BA%AC%23) `338.2K 🔥` `-50%`
1. [给阿嬷的情书票房破十亿](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%A5%A8%E6%88%BF%E7%A0%B4%E5%8D%81%E4%BA%BF%23) `303.2K 🔥` `-23%`

Updated at 2026-05-24 16:09:09

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
