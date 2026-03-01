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

1. [美情报机构追踪哈梅内伊数月 (US intelligence agencies tracked Khamenei for months)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%83%85%E6%8A%A5%E6%9C%BA%E6%9E%84%E8%BF%BD%E8%B8%AA%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E6%95%B0%E6%9C%88%23) `219.4K 🔥` `NEW`
1. [孙颖莎4比1战胜陈熠](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E4%E6%AF%941%E6%88%98%E8%83%9C%E9%99%88%E7%86%A0%23) `219.0K 🔥` `NEW`
1. [杨紫上次恋爱已是七年前](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%B8%8A%E6%AC%A1%E6%81%8B%E7%88%B1%E5%B7%B2%E6%98%AF%E4%B8%83%E5%B9%B4%E5%89%8D%23) `217.2K 🔥` `NEW`
1. [伊拉克宣布全国哀悼3天](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%8B%89%E5%85%8B%E5%AE%A3%E5%B8%83%E5%85%A8%E5%9B%BD%E5%93%80%E6%82%BC3%E5%A4%A9%23) `217.1K 🔥` `NEW`
1. [宗馥莉砍掉娃哈哈机器人业务](https://s.weibo.com/weibo?q=%23%E5%AE%97%E9%A6%A5%E8%8E%89%E7%A0%8D%E6%8E%89%E5%A8%83%E5%93%88%E5%93%88%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%B8%9A%E5%8A%A1%23) `196.5K 🔥` `NEW`
1. [王楚钦vsF勒布伦](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vsF%E5%8B%92%E5%B8%83%E4%BC%A6%23) `189.4K 🔥` `NEW`
1. [伊朗公布部分遇害高级军官名单](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%AC%E5%B8%83%E9%83%A8%E5%88%86%E9%81%87%E5%AE%B3%E9%AB%98%E7%BA%A7%E5%86%9B%E5%AE%98%E5%90%8D%E5%8D%95%23) `168.4K 🔥` `NEW`
1. [林昀儒战胜莫雷加德](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%98%80%E5%84%92%E6%88%98%E8%83%9C%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%23) `161.2K 🔥` `NEW`
1. [陆仙人自曝不会交女朋友](https://s.weibo.com/weibo?q=%23%E9%99%86%E4%BB%99%E4%BA%BA%E8%87%AA%E6%9B%9D%E4%B8%8D%E4%BC%9A%E4%BA%A4%E5%A5%B3%E6%9C%8B%E5%8F%8B%23) `135.9K 🔥` `NEW`
1. [王曼昱1比8落后大逆转](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B11%E6%AF%948%E8%90%BD%E5%90%8E%E5%A4%A7%E9%80%86%E8%BD%AC%23) `126.9K 🔥` `NEW`
1. [耙耙柑是很善良的水果 (Mandarin orange is a very kind fruit)](https://s.weibo.com/weibo?q=%23%E8%80%99%E8%80%99%E6%9F%91%E6%98%AF%E5%BE%88%E5%96%84%E8%89%AF%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `120.7K 🔥` `NEW`
1. [陈慧琳称客厅被儿子弄得丑到要呕](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%85%A7%E7%90%B3%E7%A7%B0%E5%AE%A2%E5%8E%85%E8%A2%AB%E5%84%BF%E5%AD%90%E5%BC%84%E5%BE%97%E4%B8%91%E5%88%B0%E8%A6%81%E5%91%95%23) `117.7K 🔥` `NEW`
1. [美媒称谷爱凌有双重国籍毫无证据](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E8%B0%B7%E7%88%B1%E5%87%8C%E6%9C%89%E5%8F%8C%E9%87%8D%E5%9B%BD%E7%B1%8D%E6%AF%AB%E6%97%A0%E8%AF%81%E6%8D%AE%23) `113.4K 🔥` `NEW`
1. [宋智孝首次全身健康检查结果公开](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%99%BA%E5%AD%9D%E9%A6%96%E6%AC%A1%E5%85%A8%E8%BA%AB%E5%81%A5%E5%BA%B7%E6%A3%80%E6%9F%A5%E7%BB%93%E6%9E%9C%E5%85%AC%E5%BC%80%23) `111.4K 🔥` `NEW`
1. [哈梅内伊住所遇袭前后对比图曝光](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E4%BD%8F%E6%89%80%E9%81%87%E8%A2%AD%E5%89%8D%E5%90%8E%E5%AF%B9%E6%AF%94%E5%9B%BE%E6%9B%9D%E5%85%89%23) `103.2K 🔥` `NEW`
1. [哈梅内伊遇害 (Khamenei killed)](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E9%81%87%E5%AE%B3%23) `672.8K 🔥` `+24%`
1. [2岁小孩高铁车厢唱歌旅客大打出手](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%B0%8F%E5%AD%A9%E9%AB%98%E9%93%81%E8%BD%A6%E5%8E%A2%E5%94%B1%E6%AD%8C%E6%97%85%E5%AE%A2%E5%A4%A7%E6%89%93%E5%87%BA%E6%89%8B%23) `595.3K 🔥` `+78%`
1. [中国人民永远都要保持居安思危的清醒](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E6%B0%B8%E8%BF%9C%E9%83%BD%E8%A6%81%E4%BF%9D%E6%8C%81%E5%B1%85%E5%AE%89%E6%80%9D%E5%8D%B1%E7%9A%84%E6%B8%85%E9%86%92%23) `590.1K 🔥` `+70%`
1. [秦岚一分钟说了15句谢谢](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E4%B8%80%E5%88%86%E9%92%9F%E8%AF%B4%E4%BA%8615%E5%8F%A5%E8%B0%A2%E8%B0%A2%23) `587.0K 🔥` `+371%`
1. [10万元黄金被女儿当垃圾扔了 (100,000 yuan of gold was thrown away as trash by my daughter)](https://s.weibo.com/weibo?q=%2310%E4%B8%87%E5%85%83%E9%BB%84%E9%87%91%E8%A2%AB%E5%A5%B3%E5%84%BF%E5%BD%93%E5%9E%83%E5%9C%BE%E6%89%94%E4%BA%86%23) `582.7K 🔥` `+170%`
1. [撞人族已成为日本全国性问题](https://s.weibo.com/weibo?q=%23%E6%92%9E%E4%BA%BA%E6%97%8F%E5%B7%B2%E6%88%90%E4%B8%BA%E6%97%A5%E6%9C%AC%E5%85%A8%E5%9B%BD%E6%80%A7%E9%97%AE%E9%A2%98%23) `573.7K 🔥` `+64%`
1. [家属单位楼里藏了个别墅](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%B1%9E%E5%8D%95%E4%BD%8D%E6%A5%BC%E9%87%8C%E8%97%8F%E4%BA%86%E4%B8%AA%E5%88%AB%E5%A2%85%23) `567.8K 🔥` `+163%`
1. [杨幂 得罪就得罪吧 (Yang Mi, just offend if you offend me)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E5%BE%97%E7%BD%AA%E5%B0%B1%E5%BE%97%E7%BD%AA%E5%90%A7%23) `567.4K 🔥` `+168%`
1. [秦岚嗓子哑了三年 (Qin Lan has been hoarse for three years)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E5%97%93%E5%AD%90%E5%93%91%E4%BA%86%E4%B8%89%E5%B9%B4%23) `554.8K 🔥` `+159%`
1. [伊朗代表要求美国保持礼貌](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BB%A3%E8%A1%A8%E8%A6%81%E6%B1%82%E7%BE%8E%E5%9B%BD%E4%BF%9D%E6%8C%81%E7%A4%BC%E8%B2%8C%23) `523.0K 🔥` `+147%`
1. [陈妍希李钟硕余承恩秀场合照](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%9D%8E%E9%92%9F%E7%A1%95%E4%BD%99%E6%89%BF%E6%81%A9%E7%A7%80%E5%9C%BA%E5%90%88%E7%85%A7%23) `464.4K 🔥` `+144%`
1. [伊朗称伊朗武装部队总参谋长身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E4%BC%8A%E6%9C%97%E6%AD%A6%E8%A3%85%E9%83%A8%E9%98%9F%E6%80%BB%E5%8F%82%E8%B0%8B%E9%95%BF%E8%BA%AB%E4%BA%A1%23) `360.8K 🔥` `+79%`
1. [王者荣耀 TF四代](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%20TF%E5%9B%9B%E4%BB%A3%23) `278.9K 🔥` `+34%`
1. [夏之光妈妈 姐系妈感](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E4%B9%8B%E5%85%89%E5%A6%88%E5%A6%88%20%E5%A7%90%E7%B3%BB%E5%A6%88%E6%84%9F%23) `220.3K 🔥` `+158%`
1. [余承恩入青云杀青后出不了戏](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E6%81%A9%E5%85%A5%E9%9D%92%E4%BA%91%E6%9D%80%E9%9D%92%E5%90%8E%E5%87%BA%E4%B8%8D%E4%BA%86%E6%88%8F%23) `113.6K 🔥` `+33%`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `113.2K 🔥` `+40%`
1. [伊朗确认继任者后或将扩大反击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A1%AE%E8%AE%A4%E7%BB%A7%E4%BB%BB%E8%80%85%E5%90%8E%E6%88%96%E5%B0%86%E6%89%A9%E5%A4%A7%E5%8F%8D%E5%87%BB%23) `1.5M 🔥`
1. [女子感觉金手镯变轻报警前男友自首](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%84%9F%E8%A7%89%E9%87%91%E6%89%8B%E9%95%AF%E5%8F%98%E8%BD%BB%E6%8A%A5%E8%AD%A6%E5%89%8D%E7%94%B7%E5%8F%8B%E8%87%AA%E9%A6%96%23) `930.4K 🔥`
1. [网警提醒规避考研查分陷阱 (Internet police remind you to avoid the trap of postgraduate entrance examination score checking)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%AD%A6%E6%8F%90%E9%86%92%E8%A7%84%E9%81%BF%E8%80%83%E7%A0%94%E6%9F%A5%E5%88%86%E9%99%B7%E9%98%B1%23) `700.5K 🔥`
1. [哈梅内伊住所遭袭前后对比景象 (Comparison of scenes before and after the attack on Khamenei’s residence)](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E4%BD%8F%E6%89%80%E9%81%AD%E8%A2%AD%E5%89%8D%E5%90%8E%E5%AF%B9%E6%AF%94%E6%99%AF%E8%B1%A1%23) `249.8K 🔥`
1. [还是原生胶原脸最抗老](https://s.weibo.com/weibo?q=%23%E8%BF%98%E6%98%AF%E5%8E%9F%E7%94%9F%E8%83%B6%E5%8E%9F%E8%84%B8%E6%9C%80%E6%8A%97%E8%80%81%23) `220.2K 🔥`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `218.7K 🔥`
1. [携程回应大马士革到上海机票550万 (Ctrip responds to air tickets from Damascus to Shanghai costing 5.5 million)](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E5%9B%9E%E5%BA%94%E5%A4%A7%E9%A9%AC%E5%A3%AB%E9%9D%A9%E5%88%B0%E4%B8%8A%E6%B5%B7%E6%9C%BA%E7%A5%A8550%E4%B8%87%23) `218.0K 🔥`
1. [宋智孝不考虑戒酒](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%99%BA%E5%AD%9D%E4%B8%8D%E8%80%83%E8%99%91%E6%88%92%E9%85%92%23) `204.5K 🔥`
1. [金价或将冲击历史新高](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%88%96%E5%B0%86%E5%86%B2%E5%87%BB%E5%8E%86%E5%8F%B2%E6%96%B0%E9%AB%98%23) `184.2K 🔥`
1. [短剧四小花旦同框](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E5%9B%9B%E5%B0%8F%E8%8A%B1%E6%97%A6%E5%90%8C%E6%A1%86%23) `180.5K 🔥`
1. [反美领袖哈梅内伊的一生](https://s.weibo.com/weibo?q=%23%E5%8F%8D%E7%BE%8E%E9%A2%86%E8%A2%96%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E7%9A%84%E4%B8%80%E7%94%9F%23) `159.2K 🔥`
1. [全军启用预备役人员证 (Reservist certificates activated across the military)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%86%9B%E5%90%AF%E7%94%A8%E9%A2%84%E5%A4%87%E5%BD%B9%E4%BA%BA%E5%91%98%E8%AF%81%23) `104.5K 🔥`
1. [厚本征婚](https://s.weibo.com/weibo?q=%23%E5%8E%9A%E6%9C%AC%E5%BE%81%E5%A9%9A%23) `104.3K 🔥`
1. [迪丽热巴3月份行程图 (Dilireba’s itinerary in March)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B43%E6%9C%88%E4%BB%BD%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `103.8K 🔥`
1. [小米徕卡全球影像大赛 (Xiaomi Leica Global Imaging Competition)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%BE%95%E5%8D%A1%E5%85%A8%E7%90%83%E5%BD%B1%E5%83%8F%E5%A4%A7%E8%B5%9B%23) `696.9K 🔥` `-79%`
1. [有人凌晨蹲点退税退了3万多 (Someone stayed early in the morning to get a tax refund and got a refund of more than 30,000 yuan)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E5%87%8C%E6%99%A8%E8%B9%B2%E7%82%B9%E9%80%80%E7%A8%8E%E9%80%80%E4%BA%863%E4%B8%87%E5%A4%9A%23) `142.4K 🔥` `-35%`
1. [伊朗导弹击中以军总参谋部](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E4%BB%A5%E5%86%9B%E6%80%BB%E5%8F%82%E8%B0%8B%E9%83%A8%23) `141.4K 🔥` `-31%`
1. [杨幂去米兰没有带卡](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%8E%BB%E7%B1%B3%E5%85%B0%E6%B2%A1%E6%9C%89%E5%B8%A6%E5%8D%A1%23) `124.8K 🔥` `-37%`
1. [官俊臣参加高考成人礼 (Guan Junchen attended the college entrance examination adult ceremony)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E5%8F%82%E5%8A%A0%E9%AB%98%E8%80%83%E6%88%90%E4%BA%BA%E7%A4%BC%23) `102.8K 🔥` `-30%`

Updated at 2026-03-01 15:47:35

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
