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

1. [10万元黄金被女儿当垃圾扔了 (100,000 yuan of gold was thrown away as trash by my daughter)](https://s.weibo.com/weibo?q=%2310%E4%B8%87%E5%85%83%E9%BB%84%E9%87%91%E8%A2%AB%E5%A5%B3%E5%84%BF%E5%BD%93%E5%9E%83%E5%9C%BE%E6%89%94%E4%BA%86%23) `216.0K 🔥` `NEW`
1. [伊朗代表要求美国保持礼貌](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BB%A3%E8%A1%A8%E8%A6%81%E6%B1%82%E7%BE%8E%E5%9B%BD%E4%BF%9D%E6%8C%81%E7%A4%BC%E8%B2%8C%23) `212.1K 🔥` `NEW`
1. [宋智孝不考虑戒酒](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%99%BA%E5%AD%9D%E4%B8%8D%E8%80%83%E8%99%91%E6%88%92%E9%85%92%23) `202.4K 🔥` `NEW`
1. [伊朗称伊朗武装部队总参谋长身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E4%BC%8A%E6%9C%97%E6%AD%A6%E8%A3%85%E9%83%A8%E9%98%9F%E6%80%BB%E5%8F%82%E8%B0%8B%E9%95%BF%E8%BA%AB%E4%BA%A1%23) `202.1K 🔥` `NEW`
1. [杨幂去米兰没有带卡](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%8E%BB%E7%B1%B3%E5%85%B0%E6%B2%A1%E6%9C%89%E5%B8%A6%E5%8D%A1%23) `199.1K 🔥` `NEW`
1. [金价或将冲击历史新高](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%88%96%E5%B0%86%E5%86%B2%E5%87%BB%E5%8E%86%E5%8F%B2%E6%96%B0%E9%AB%98%23) `196.2K 🔥` `NEW`
1. [还是原生胶原脸最抗老](https://s.weibo.com/weibo?q=%23%E8%BF%98%E6%98%AF%E5%8E%9F%E7%94%9F%E8%83%B6%E5%8E%9F%E8%84%B8%E6%9C%80%E6%8A%97%E8%80%81%23) `192.9K 🔥` `NEW`
1. [陈妍希李钟硕余承恩秀场合照](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%9D%8E%E9%92%9F%E7%A1%95%E4%BD%99%E6%89%BF%E6%81%A9%E7%A7%80%E5%9C%BA%E5%90%88%E7%85%A7%23) `190.4K 🔥` `NEW`
1. [秦岚一分钟说了15句谢谢](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E4%B8%80%E5%88%86%E9%92%9F%E8%AF%B4%E4%BA%8615%E5%8F%A5%E8%B0%A2%E8%B0%A2%23) `124.7K 🔥` `NEW`
1. [厚本征婚](https://s.weibo.com/weibo?q=%23%E5%8E%9A%E6%9C%AC%E5%BE%81%E5%A9%9A%23) `124.0K 🔥` `NEW`
1. [广州深圳出发机票暴跌超80% (Air tickets from Guangzhou and Shenzhen plummet over 80%)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E6%B7%B1%E5%9C%B3%E5%87%BA%E5%8F%91%E6%9C%BA%E7%A5%A8%E6%9A%B4%E8%B7%8C%E8%B6%8580%25%23) `88.5K 🔥` `NEW`
1. [余承恩入青云杀青后出不了戏](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E6%81%A9%E5%85%A5%E9%9D%92%E4%BA%91%E6%9D%80%E9%9D%92%E5%90%8E%E5%87%BA%E4%B8%8D%E4%BA%86%E6%88%8F%23) `85.7K 🔥` `NEW`
1. [中500w彩票冷知识](https://s.weibo.com/weibo?q=%23%E4%B8%AD500w%E5%BD%A9%E7%A5%A8%E5%86%B7%E7%9F%A5%E8%AF%86%23) `85.3K 🔥` `NEW`
1. [夏之光妈妈 姐系妈感](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E4%B9%8B%E5%85%89%E5%A6%88%E5%A6%88%20%E5%A7%90%E7%B3%BB%E5%A6%88%E6%84%9F%23) `85.2K 🔥` `NEW`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `80.9K 🔥` `NEW`
1. [苦了谁也不能苦了朋友圈](https://s.weibo.com/weibo?q=%23%E8%8B%A6%E4%BA%86%E8%B0%81%E4%B9%9F%E4%B8%8D%E8%83%BD%E8%8B%A6%E4%BA%86%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `76.9K 🔥` `NEW`
1. [王曼昱孙颖莎女单争金](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A5%B3%E5%8D%95%E4%BA%89%E9%87%91%23) `76.7K 🔥` `NEW`
1. [2岁小孩高铁车厢唱歌旅客大打出手](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%B0%8F%E5%AD%A9%E9%AB%98%E9%93%81%E8%BD%A6%E5%8E%A2%E5%94%B1%E6%AD%8C%E6%97%85%E5%AE%A2%E5%A4%A7%E6%89%93%E5%87%BA%E6%89%8B%23) `334.5K 🔥` `+165%`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `199.8K 🔥` `+38%`
1. [官俊臣参加高考成人礼](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E5%8F%82%E5%8A%A0%E9%AB%98%E8%80%83%E6%88%90%E4%BA%BA%E7%A4%BC%23) `146.9K 🔥` `+57%`
1. [全军启用预备役人员证 (Reservist certificates activated across the military)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%86%9B%E5%90%AF%E7%94%A8%E9%A2%84%E5%A4%87%E5%BD%B9%E4%BA%BA%E5%91%98%E8%AF%81%23) `130.0K 🔥` `+36%`
1. [伊朗确认继任者后或将扩大反击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A1%AE%E8%AE%A4%E7%BB%A7%E4%BB%BB%E8%80%85%E5%90%8E%E6%88%96%E5%B0%86%E6%89%A9%E5%A4%A7%E5%8F%8D%E5%87%BB%23) `1.7M 🔥`
1. [女子感觉金手镯变轻报警前男友自首](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%84%9F%E8%A7%89%E9%87%91%E6%89%8B%E9%95%AF%E5%8F%98%E8%BD%BB%E6%8A%A5%E8%AD%A6%E5%89%8D%E7%94%B7%E5%8F%8B%E8%87%AA%E9%A6%96%23) `937.3K 🔥`
1. [网警提醒规避考研查分陷阱 (Internet police remind you to avoid the trap of postgraduate entrance examination score checking)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%AD%A6%E6%8F%90%E9%86%92%E8%A7%84%E9%81%BF%E8%80%83%E7%A0%94%E6%9F%A5%E5%88%86%E9%99%B7%E9%98%B1%23) `696.2K 🔥`
1. [撞人族已成为日本全国性问题](https://s.weibo.com/weibo?q=%23%E6%92%9E%E4%BA%BA%E6%97%8F%E5%B7%B2%E6%88%90%E4%B8%BA%E6%97%A5%E6%9C%AC%E5%85%A8%E5%9B%BD%E6%80%A7%E9%97%AE%E9%A2%98%23) `349.1K 🔥`
1. [寿星千万种海底捞都宠](https://s.weibo.com/weibo?q=%23%E5%AF%BF%E6%98%9F%E5%8D%83%E4%B8%87%E7%A7%8D%E6%B5%B7%E5%BA%95%E6%8D%9E%E9%83%BD%E5%AE%A0%23) `335.7K 🔥`
1. [秦岚嗓子哑了三年 (Qin Lan has been hoarse for three years)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E5%97%93%E5%AD%90%E5%93%91%E4%BA%86%E4%B8%89%E5%B9%B4%23) `214.1K 🔥`
1. [杨幂 得罪就得罪吧](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E5%BE%97%E7%BD%AA%E5%B0%B1%E5%BE%97%E7%BD%AA%E5%90%A7%23) `211.6K 🔥`
1. [携程回应大马士革到上海机票550万 (Ctrip responds to air tickets from Damascus to Shanghai costing 5.5 million)](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E5%9B%9E%E5%BA%94%E5%A4%A7%E9%A9%AC%E5%A3%AB%E9%9D%A9%E5%88%B0%E4%B8%8A%E6%B5%B7%E6%9C%BA%E7%A5%A8550%E4%B8%87%23) `209.4K 🔥`
1. [王者荣耀 TF四代](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%20TF%E5%9B%9B%E4%BB%A3%23) `208.6K 🔥`
1. [哈梅内伊住所遭袭前后对比景象](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E4%BD%8F%E6%89%80%E9%81%AD%E8%A2%AD%E5%89%8D%E5%90%8E%E5%AF%B9%E6%AF%94%E6%99%AF%E8%B1%A1%23) `207.6K 🔥`
1. [短剧四小花旦同框](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E5%9B%9B%E5%B0%8F%E8%8A%B1%E6%97%A6%E5%90%8C%E6%A1%86%23) `206.2K 🔥`
1. [反美领袖哈梅内伊的一生](https://s.weibo.com/weibo?q=%23%E5%8F%8D%E7%BE%8E%E9%A2%86%E8%A2%96%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E7%9A%84%E4%B8%80%E7%94%9F%23) `192.3K 🔥`
1. [迪丽热巴3月份行程图 (Dilireba’s itinerary in March)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B43%E6%9C%88%E4%BB%BD%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `116.9K 🔥`
1. [川渝盒饭vs东北盒饭 (Sichuan and Chongqing lunch boxes vs. Northeastern lunch boxes)](https://s.weibo.com/weibo?q=%23%E5%B7%9D%E6%B8%9D%E7%9B%92%E9%A5%ADvs%E4%B8%9C%E5%8C%97%E7%9B%92%E9%A5%AD%23) `87.4K 🔥`
1. [迪丽热巴第一语言不是汉语 (Dilireba’s first language is not Chinese)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AC%AC%E4%B8%80%E8%AF%AD%E8%A8%80%E4%B8%8D%E6%98%AF%E6%B1%89%E8%AF%AD%23) `87.3K 🔥`
1. [小米17Ultra](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B317Ultra%23) `84.5K 🔥`
1. [退税 (tax refund)](https://s.weibo.com/weibo?q=%23%E9%80%80%E7%A8%8E%23) `76.8K 🔥`
1. [中方呼吁军事行动立即停止](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%91%BC%E5%90%81%E5%86%9B%E4%BA%8B%E8%A1%8C%E5%8A%A8%E7%AB%8B%E5%8D%B3%E5%81%9C%E6%AD%A2%23) `76.4K 🔥`
1. [哈梅内伊遇害 (Khamenei killed)](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E9%81%87%E5%AE%B3%23) `543.7K 🔥` `-89%`
1. [中国人民永远都要保持居安思危的清醒](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E6%B0%B8%E8%BF%9C%E9%83%BD%E8%A6%81%E4%BF%9D%E6%8C%81%E5%B1%85%E5%AE%89%E6%80%9D%E5%8D%B1%E7%9A%84%E6%B8%85%E9%86%92%23) `347.9K 🔥` `-22%`
1. [有人凌晨蹲点退税退了3万多 (Someone stayed early in the morning to get a tax refund and got a refund of more than 30,000 yuan)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E5%87%8C%E6%99%A8%E8%B9%B2%E7%82%B9%E9%80%80%E7%A8%8E%E9%80%80%E4%BA%863%E4%B8%87%E5%A4%9A%23) `220.1K 🔥` `-29%`
1. [家属单位楼里藏了个别墅](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%B1%9E%E5%8D%95%E4%BD%8D%E6%A5%BC%E9%87%8C%E8%97%8F%E4%BA%86%E4%B8%AA%E5%88%AB%E5%A2%85%23) `216.0K 🔥` `-24%`
1. [伊朗导弹击中以军总参谋部](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E4%BB%A5%E5%86%9B%E6%80%BB%E5%8F%82%E8%B0%8B%E9%83%A8%23) `204.5K 🔥` `-51%`
1. [孙颖莎vs陈熠](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E9%99%88%E7%86%A0%23) `138.2K 🔥` `-40%`
1. [烤香蕉 (Grilled Banana)](https://s.weibo.com/weibo?q=%23%E7%83%A4%E9%A6%99%E8%95%89%23) `126.7K 🔥` `-30%`
1. [椰树 追求胸大是让婴儿有奶吃 (Coconut tree pursues big breasts so that the baby can have milk to drink)](https://s.weibo.com/weibo?q=%23%E6%A4%B0%E6%A0%91%20%E8%BF%BD%E6%B1%82%E8%83%B8%E5%A4%A7%E6%98%AF%E8%AE%A9%E5%A9%B4%E5%84%BF%E6%9C%89%E5%A5%B6%E5%90%83%23) `124.5K 🔥` `-40%`
1. [女童投喂狮子被拖曳涉事动物园停业](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%AB%A5%E6%8A%95%E5%96%82%E7%8B%AE%E5%AD%90%E8%A2%AB%E6%8B%96%E6%9B%B3%E6%B6%89%E4%BA%8B%E5%8A%A8%E7%89%A9%E5%9B%AD%E5%81%9C%E4%B8%9A%23) `91.5K 🔥` `-22%`
1. [杨紫爱自己少吃多睡戒色 (Yang Zi loves herself to eat less, sleep more and reboot)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%88%B1%E8%87%AA%E5%B7%B1%E5%B0%91%E5%90%83%E5%A4%9A%E7%9D%A1%E6%88%92%E8%89%B2%23) `90.7K 🔥` `-37%`
1. [苏新皓抢到TOP专辑了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E6%8A%A2%E5%88%B0TOP%E4%B8%93%E8%BE%91%E4%BA%86%23) `76.7K 🔥` `-32%`
1. [EXO参加金俊勉哥哥婚礼](https://s.weibo.com/weibo?q=%23EXO%E5%8F%82%E5%8A%A0%E9%87%91%E4%BF%8A%E5%8B%89%E5%93%A5%E5%93%A5%E5%A9%9A%E7%A4%BC%23) `76.5K 🔥` `-23%`

Updated at 2026-03-01 15:10:44

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
