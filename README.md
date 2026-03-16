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

1. [埃文凯尔官宣定居中国 (Evan Kyle officially announced to settle in China)](https://s.weibo.com/weibo?q=%23%E5%9F%83%E6%96%87%E5%87%AF%E5%B0%94%E5%AE%98%E5%AE%A3%E5%AE%9A%E5%B1%85%E4%B8%AD%E5%9B%BD%23) `1.1M 🔥` `NEW`
1. [坠江身亡研究生离世前疑似发布遗言](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E6%B1%9F%E8%BA%AB%E4%BA%A1%E7%A0%94%E7%A9%B6%E7%94%9F%E7%A6%BB%E4%B8%96%E5%89%8D%E7%96%91%E4%BC%BC%E5%8F%91%E5%B8%83%E9%81%97%E8%A8%80%23) `637.1K 🔥` `NEW`
1. [5万多条合成动态人脸视频被查获](https://s.weibo.com/weibo?q=%235%E4%B8%87%E5%A4%9A%E6%9D%A1%E5%90%88%E6%88%90%E5%8A%A8%E6%80%81%E4%BA%BA%E8%84%B8%E8%A7%86%E9%A2%91%E8%A2%AB%E6%9F%A5%E8%8E%B7%23) `179.7K 🔥` `NEW`
1. [李诞说现在失业的人可能是一件好事](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%AF%9E%E8%AF%B4%E7%8E%B0%E5%9C%A8%E5%A4%B1%E4%B8%9A%E7%9A%84%E4%BA%BA%E5%8F%AF%E8%83%BD%E6%98%AF%E4%B8%80%E4%BB%B6%E5%A5%BD%E4%BA%8B%23) `179.5K 🔥` `NEW`
1. [山姆等多品牌回应双氧水漂白鸡爪](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E7%AD%89%E5%A4%9A%E5%93%81%E7%89%8C%E5%9B%9E%E5%BA%94%E5%8F%8C%E6%B0%A7%E6%B0%B4%E6%BC%82%E7%99%BD%E9%B8%A1%E7%88%AA%23) `178.7K 🔥` `NEW`
1. [经纪人回应瞿颖翻红](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%9B%9E%E5%BA%94%E7%9E%BF%E9%A2%96%E7%BF%BB%E7%BA%A2%23) `178.1K 🔥` `NEW`
1. [都美竹被判向朱姐道歉](https://s.weibo.com/weibo?q=%23%E9%83%BD%E7%BE%8E%E7%AB%B9%E8%A2%AB%E5%88%A4%E5%90%91%E6%9C%B1%E5%A7%90%E9%81%93%E6%AD%89%23) `176.7K 🔥` `NEW`
1. [婴儿消毒乳膏检出致大头娃娃激素](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E6%B6%88%E6%AF%92%E4%B9%B3%E8%86%8F%E6%A3%80%E5%87%BA%E8%87%B4%E5%A4%A7%E5%A4%B4%E5%A8%83%E5%A8%83%E6%BF%80%E7%B4%A0%23) `164.8K 🔥` `NEW`
1. [清明不调休不补班](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E4%B8%8D%E8%B0%83%E4%BC%91%E4%B8%8D%E8%A1%A5%E7%8F%AD%23) `158.1K 🔥` `NEW`
1. [章子怡的买股运](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E7%9A%84%E4%B9%B0%E8%82%A1%E8%BF%90%23) `156.2K 🔥` `NEW`
1. [好像郭晓婷王天辰婚礼答谢宴 (It seems like Guo Xiaoting and Wang Tianchen’s wedding thank you banquet)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%83%8F%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E5%A9%9A%E7%A4%BC%E7%AD%94%E8%B0%A2%E5%AE%B4%23) `135.2K 🔥` `NEW`
1. [芒果一口气宣了20场音乐节](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E4%B8%80%E5%8F%A3%E6%B0%94%E5%AE%A3%E4%BA%8620%E5%9C%BA%E9%9F%B3%E4%B9%90%E8%8A%82%23) `135.0K 🔥` `NEW`
1. [霍尔木兹海峡首次没有船只通航](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E9%A6%96%E6%AC%A1%E6%B2%A1%E6%9C%89%E8%88%B9%E5%8F%AA%E9%80%9A%E8%88%AA%23) `133.4K 🔥` `NEW`
1. [邓凯妈妈 有那么帅吗](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E5%A6%88%E5%A6%88%20%E6%9C%89%E9%82%A3%E4%B9%88%E5%B8%85%E5%90%97%23) `133.4K 🔥` `NEW`
1. [什么和离书分明是录取通知书](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E5%92%8C%E7%A6%BB%E4%B9%A6%E5%88%86%E6%98%8E%E6%98%AF%E5%BD%95%E5%8F%96%E9%80%9A%E7%9F%A5%E4%B9%A6%23) `110.5K 🔥` `NEW`
1. [残疾外卖员一个月赔了500多块](https://s.weibo.com/weibo?q=%23%E6%AE%8B%E7%96%BE%E5%A4%96%E5%8D%96%E5%91%98%E4%B8%80%E4%B8%AA%E6%9C%88%E8%B5%94%E4%BA%86500%E5%A4%9A%E5%9D%97%23) `107.8K 🔥` `NEW`
1. [母亲称女儿被踩头已有精神障碍](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E7%A7%B0%E5%A5%B3%E5%84%BF%E8%A2%AB%E8%B8%A9%E5%A4%B4%E5%B7%B2%E6%9C%89%E7%B2%BE%E7%A5%9E%E9%9A%9C%E7%A2%8D%23) `106.0K 🔥` `NEW`
1. [日本将中国文物当战利品宣扬军国主义](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%B0%86%E4%B8%AD%E5%9B%BD%E6%96%87%E7%89%A9%E5%BD%93%E6%88%98%E5%88%A9%E5%93%81%E5%AE%A3%E6%89%AC%E5%86%9B%E5%9B%BD%E4%B8%BB%E4%B9%89%23) `105.0K 🔥` `NEW`
1. [留几手说再也不卖鸡爪了](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E8%AF%B4%E5%86%8D%E4%B9%9F%E4%B8%8D%E5%8D%96%E9%B8%A1%E7%88%AA%E4%BA%86%23) `104.0K 🔥` `NEW`
1. [营养师称双氧水鸡爪可致消化道损伤](https://s.weibo.com/weibo?q=%23%E8%90%A5%E5%85%BB%E5%B8%88%E7%A7%B0%E5%8F%8C%E6%B0%A7%E6%B0%B4%E9%B8%A1%E7%88%AA%E5%8F%AF%E8%87%B4%E6%B6%88%E5%8C%96%E9%81%93%E6%8D%9F%E4%BC%A4%23) `103.5K 🔥` `NEW`
1. [布洛芬很着急为您服务 (Ibuprofen is anxious to serve you)](https://s.weibo.com/weibo?q=%23%E5%B8%83%E6%B4%9B%E8%8A%AC%E5%BE%88%E7%9D%80%E6%80%A5%E4%B8%BA%E6%82%A8%E6%9C%8D%E5%8A%A1%23) `95.5K 🔥` `NEW`
1. [雷军回应回到5年前还造车吗](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E5%9B%9E%E5%88%B05%E5%B9%B4%E5%89%8D%E8%BF%98%E9%80%A0%E8%BD%A6%E5%90%97%23) `95.4K 🔥` `NEW`
1. [西贝获95亿身家富豪入股](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%B4%9D%E8%8E%B795%E4%BA%BF%E8%BA%AB%E5%AE%B6%E5%AF%8C%E8%B1%AA%E5%85%A5%E8%82%A1%23) `94.1K 🔥` `NEW`
1. [喝一瓶酸奶浪费多少](https://s.weibo.com/weibo?q=%23%E5%96%9D%E4%B8%80%E7%93%B6%E9%85%B8%E5%A5%B6%E6%B5%AA%E8%B4%B9%E5%A4%9A%E5%B0%91%23) `83.1K 🔥` `NEW`
1. [卧底老K收入暴涨315总导演1天1电话](https://s.weibo.com/weibo?q=%23%E5%8D%A7%E5%BA%95%E8%80%81K%E6%94%B6%E5%85%A5%E6%9A%B4%E6%B6%A8315%E6%80%BB%E5%AF%BC%E6%BC%941%E5%A4%A91%E7%94%B5%E8%AF%9D%23) `322.3K 🔥` `+163%`
1. [致敬每一份不屈的热爱](https://s.weibo.com/weibo?q=%23%E8%87%B4%E6%95%AC%E6%AF%8F%E4%B8%80%E4%BB%BD%E4%B8%8D%E5%B1%88%E7%9A%84%E7%83%AD%E7%88%B1%23) `661.8K 🔥`
1. [湘雅医院失联学生确认坠江身亡 (Missing student from Xiangya Hospital confirmed to have fallen into river and died)](https://s.weibo.com/weibo?q=%23%E6%B9%98%E9%9B%85%E5%8C%BB%E9%99%A2%E5%A4%B1%E8%81%94%E5%AD%A6%E7%94%9F%E7%A1%AE%E8%AE%A4%E5%9D%A0%E6%B1%9F%E8%BA%AB%E4%BA%A1%23) `318.8K 🔥`
1. [周冬雨 刘昊然](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%20%E5%88%98%E6%98%8A%E7%84%B6%23) `161.8K 🔥`
1. [鹿晗 关晓彤](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E5%85%B3%E6%99%93%E5%BD%A4%23) `160.4K 🔥`
1. [原来有天赋的孩子从小就能看出来](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%9C%89%E5%A4%A9%E8%B5%8B%E7%9A%84%E5%AD%A9%E5%AD%90%E4%BB%8E%E5%B0%8F%E5%B0%B1%E8%83%BD%E7%9C%8B%E5%87%BA%E6%9D%A5%23) `136.8K 🔥`
1. [逐玉为何被审判](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E4%B8%BA%E4%BD%95%E8%A2%AB%E5%AE%A1%E5%88%A4%23) `127.4K 🔥`
1. [奥斯卡 (Oscar)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E6%96%AF%E5%8D%A1%23) `117.8K 🔥`
1. [315曝光名单 (315 exposure list)](https://s.weibo.com/weibo?q=%23315%E6%9B%9D%E5%85%89%E5%90%8D%E5%8D%95%23) `816.1K 🔥` `-26%`
1. [伊朗称440公斤60%丰度浓缩铀被埋](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0440%E5%85%AC%E6%96%A460%25%E4%B8%B0%E5%BA%A6%E6%B5%93%E7%BC%A9%E9%93%80%E8%A2%AB%E5%9F%8B%23) `241.8K 🔥` `-27%`
1. [卧底卧成二把手的记者315又立功 (The reporter who went undercover and became the second-in-command in 315 made another meritorious service)](https://s.weibo.com/weibo?q=%23%E5%8D%A7%E5%BA%95%E5%8D%A7%E6%88%90%E4%BA%8C%E6%8A%8A%E6%89%8B%E7%9A%84%E8%AE%B0%E8%80%85315%E5%8F%88%E7%AB%8B%E5%8A%9F%23) `197.6K 🔥` `-76%`
1. [vivo宣布涨价](https://s.weibo.com/weibo?q=%23vivo%E5%AE%A3%E5%B8%83%E6%B6%A8%E4%BB%B7%23) `180.0K 🔥` `-56%`
1. [刘宇宁回应黄子韬道歉](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%9B%9E%E5%BA%94%E9%BB%84%E5%AD%90%E9%9F%AC%E9%81%93%E6%AD%89%23) `179.2K 🔥` `-30%`
1. [小狗舔人被说主人情绪失控 (Puppy licks people and its owner is said to have lost control of his emotions)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E8%88%94%E4%BA%BA%E8%A2%AB%E8%AF%B4%E4%B8%BB%E4%BA%BA%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `178.5K 🔥` `-25%`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `177.7K 🔥` `-30%`
1. [脑梗最快急救方法](https://s.weibo.com/weibo?q=%23%E8%84%91%E6%A2%97%E6%9C%80%E5%BF%AB%E6%80%A5%E6%95%91%E6%96%B9%E6%B3%95%23) `177.1K 🔥` `-28%`
1. [宋智雅因三星Galaxy言论被骂](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%99%BA%E9%9B%85%E5%9B%A0%E4%B8%89%E6%98%9FGalaxy%E8%A8%80%E8%AE%BA%E8%A2%AB%E9%AA%82%23) `176.7K 🔥` `-27%`
1. [瞿颖 翻红](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%20%E7%BF%BB%E7%BA%A2%23) `154.1K 🔥` `-39%`
1. [终于有人把带孩子的累说清楚了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E6%8A%8A%E5%B8%A6%E5%AD%A9%E5%AD%90%E7%9A%84%E7%B4%AF%E8%AF%B4%E6%B8%85%E6%A5%9A%E4%BA%86%23) `132.9K 🔥` `-36%`
1. [漂白鸡爪企业致歉](https://s.weibo.com/weibo?q=%23%E6%BC%82%E7%99%BD%E9%B8%A1%E7%88%AA%E4%BC%81%E4%B8%9A%E8%87%B4%E6%AD%89%23) `110.7K 🔥` `-59%`
1. [姚安娜让我看到传说中的浮光锦了 (Yao Anna showed me the legendary glory brocade)](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E5%AE%89%E5%A8%9C%E8%AE%A9%E6%88%91%E7%9C%8B%E5%88%B0%E4%BC%A0%E8%AF%B4%E4%B8%AD%E7%9A%84%E6%B5%AE%E5%85%89%E9%94%A6%E4%BA%86%23) `103.2K 🔥` `-57%`
1. [男子发现自己长期吃315曝光鸡爪](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E9%95%BF%E6%9C%9F%E5%90%83315%E6%9B%9D%E5%85%89%E9%B8%A1%E7%88%AA%23) `96.9K 🔥` `-63%`
1. [315曝光后多地连夜通报](https://s.weibo.com/weibo?q=%23315%E6%9B%9D%E5%85%89%E5%90%8E%E5%A4%9A%E5%9C%B0%E8%BF%9E%E5%A4%9C%E9%80%9A%E6%8A%A5%23) `95.3K 🔥` `-62%`
1. [湘雅 (Xiangya)](https://s.weibo.com/weibo?q=%23%E6%B9%98%E9%9B%85%23) `92.8K 🔥` `-38%`
1. [中南大学和湖南卫健委成立联合调查组](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%8D%97%E5%A4%A7%E5%AD%A6%E5%92%8C%E6%B9%96%E5%8D%97%E5%8D%AB%E5%81%A5%E5%A7%94%E6%88%90%E7%AB%8B%E8%81%94%E5%90%88%E8%B0%83%E6%9F%A5%E7%BB%84%23) `89.0K 🔥` `-66%`
1. [武契奇称三个邻居准备进攻塞尔维亚 (Vucic says three neighbors are ready to attack Serbia)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E7%A7%B0%E4%B8%89%E4%B8%AA%E9%82%BB%E5%B1%85%E5%87%86%E5%A4%87%E8%BF%9B%E6%94%BB%E5%A1%9E%E5%B0%94%E7%BB%B4%E4%BA%9A%23) `82.9K 🔥` `-32%`

Updated at 2026-03-16 14:55:10

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
