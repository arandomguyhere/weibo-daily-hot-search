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

1. [有线耳机爆火原因 (Reasons why wired headphones explode)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%E7%88%86%E7%81%AB%E5%8E%9F%E5%9B%A0%23) `1.1M 🔥` `NEW`
1. [以色列决定报复法国](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%86%B3%E5%AE%9A%E6%8A%A5%E5%A4%8D%E6%B3%95%E5%9B%BD%23) `389.1K 🔥` `NEW`
1. [周深新歌禁止用于AI训练](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%96%B0%E6%AD%8C%E7%A6%81%E6%AD%A2%E7%94%A8%E4%BA%8EAI%E8%AE%AD%E7%BB%83%23) `169.7K 🔥` `NEW`
1. [特朗普认真考虑美退出北约](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%A4%E7%9C%9F%E8%80%83%E8%99%91%E7%BE%8E%E9%80%80%E5%87%BA%E5%8C%97%E7%BA%A6%23) `167.1K 🔥` `NEW`
1. [官方通报1岁男童疑输液后抽搐去世](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A51%E5%B2%81%E7%94%B7%E7%AB%A5%E7%96%91%E8%BE%93%E6%B6%B2%E5%90%8E%E6%8A%BD%E6%90%90%E5%8E%BB%E4%B8%96%23) `149.7K 🔥` `NEW`
1. [全球股市史诗级暴涨](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%82%A1%E5%B8%82%E5%8F%B2%E8%AF%97%E7%BA%A7%E6%9A%B4%E6%B6%A8%23) `148.2K 🔥` `NEW`
1. [Uzi队遭陪玩队零封](https://s.weibo.com/weibo?q=%23Uzi%E9%98%9F%E9%81%AD%E9%99%AA%E7%8E%A9%E9%98%9F%E9%9B%B6%E5%B0%81%23) `148.0K 🔥` `NEW`
1. [妹妹看到姐姐遗体惨状当场崩溃](https://s.weibo.com/weibo?q=%23%E5%A6%B9%E5%A6%B9%E7%9C%8B%E5%88%B0%E5%A7%90%E5%A7%90%E9%81%97%E4%BD%93%E6%83%A8%E7%8A%B6%E5%BD%93%E5%9C%BA%E5%B4%A9%E6%BA%83%23) `147.8K 🔥` `NEW`
1. [JDG对战WB](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98WB%23) `147.3K 🔥` `NEW`
1. [王子邱胜翊涉嫌逃兵役被捕](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E9%82%B1%E8%83%9C%E7%BF%8A%E6%B6%89%E5%AB%8C%E9%80%83%E5%85%B5%E5%BD%B9%E8%A2%AB%E6%8D%95%23) `147.0K 🔥` `NEW`
1. [43岁产妇遇产科死神羊水栓塞 (43-year-old mother encounters obstetric death due to amniotic fluid embolism)](https://s.weibo.com/weibo?q=%2343%E5%B2%81%E4%BA%A7%E5%A6%87%E9%81%87%E4%BA%A7%E7%A7%91%E6%AD%BB%E7%A5%9E%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%23) `139.1K 🔥` `NEW`
1. [输液后身亡患儿已尸检](https://s.weibo.com/weibo?q=%23%E8%BE%93%E6%B6%B2%E5%90%8E%E8%BA%AB%E4%BA%A1%E6%82%A3%E5%84%BF%E5%B7%B2%E5%B0%B8%E6%A3%80%23) `117.8K 🔥` `NEW`
1. [衣服上身5秒定律](https://s.weibo.com/weibo?q=%23%E8%A1%A3%E6%9C%8D%E4%B8%8A%E8%BA%AB5%E7%A7%92%E5%AE%9A%E5%BE%8B%23) `114.3K 🔥` `NEW`
1. [工科生不适合去星巴克的原因](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E7%A7%91%E7%94%9F%E4%B8%8D%E9%80%82%E5%90%88%E5%8E%BB%E6%98%9F%E5%B7%B4%E5%85%8B%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `114.1K 🔥` `NEW`
1. [优思益假进口消费者可主张退一赔三](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E5%81%87%E8%BF%9B%E5%8F%A3%E6%B6%88%E8%B4%B9%E8%80%85%E5%8F%AF%E4%B8%BB%E5%BC%A0%E9%80%80%E4%B8%80%E8%B5%94%E4%B8%89%23) `105.3K 🔥` `NEW`
1. [比亚迪3月销量夺冠中国车企](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA3%E6%9C%88%E9%94%80%E9%87%8F%E5%A4%BA%E5%86%A0%E4%B8%AD%E5%9B%BD%E8%BD%A6%E4%BC%81%23) `101.6K 🔥` `NEW`
1. [雇两个擦玻璃小工仅需1根猫条](https://s.weibo.com/weibo?q=%23%E9%9B%87%E4%B8%A4%E4%B8%AA%E6%93%A6%E7%8E%BB%E7%92%83%E5%B0%8F%E5%B7%A5%E4%BB%85%E9%9C%801%E6%A0%B9%E7%8C%AB%E6%9D%A1%23) `101.5K 🔥` `NEW`
1. [网易云回应账号突然被封禁](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%98%93%E4%BA%91%E5%9B%9E%E5%BA%94%E8%B4%A6%E5%8F%B7%E7%AA%81%E7%84%B6%E8%A2%AB%E5%B0%81%E7%A6%81%23) `87.0K 🔥` `NEW`
1. [中方回应日本强行部署远程导弹](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E6%97%A5%E6%9C%AC%E5%BC%BA%E8%A1%8C%E9%83%A8%E7%BD%B2%E8%BF%9C%E7%A8%8B%E5%AF%BC%E5%BC%B9%23) `83.3K 🔥` `NEW`
1. [食贫道饼叔被韩国夜店卡了三次颜](https://s.weibo.com/weibo?q=%23%E9%A3%9F%E8%B4%AB%E9%81%93%E9%A5%BC%E5%8F%94%E8%A2%AB%E9%9F%A9%E5%9B%BD%E5%A4%9C%E5%BA%97%E5%8D%A1%E4%BA%86%E4%B8%89%E6%AC%A1%E9%A2%9C%23) `81.5K 🔥` `NEW`
1. [王楚钦vs卢伟 (Wang Chuqin vs Lu Wei)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E5%8D%A2%E4%BC%9F%23) `80.5K 🔥` `NEW`
1. [穆祉丞滑雪vlog](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%BB%91%E9%9B%AAvlog%23) `79.2K 🔥` `NEW`
1. [女教师被拖行5.9公里致死已两度尸检](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E8%A2%AB%E6%8B%96%E8%A1%8C5.9%E5%85%AC%E9%87%8C%E8%87%B4%E6%AD%BB%E5%B7%B2%E4%B8%A4%E5%BA%A6%E5%B0%B8%E6%A3%80%23) `336.4K 🔥` `+292%`
1. [济南首台张雪机车夺冠车型受损](https://s.weibo.com/weibo?q=%23%E6%B5%8E%E5%8D%97%E9%A6%96%E5%8F%B0%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%86%A0%E8%BD%A6%E5%9E%8B%E5%8F%97%E6%8D%9F%23) `223.2K 🔥` `+98%`
1. [法国豪门弃子34岁终夺冠致谢张雪 (The abandoned son of a French giant finally won the championship at the age of 34 and thanked Zhang Xue)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%B1%AA%E9%97%A8%E5%BC%83%E5%AD%9034%E5%B2%81%E7%BB%88%E5%A4%BA%E5%86%A0%E8%87%B4%E8%B0%A2%E5%BC%A0%E9%9B%AA%23) `199.3K 🔥` `+102%`
1. [婚前立遗嘱小伙称房子掏空父母积蓄](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%89%8D%E7%AB%8B%E9%81%97%E5%98%B1%E5%B0%8F%E4%BC%99%E7%A7%B0%E6%88%BF%E5%AD%90%E6%8E%8F%E7%A9%BA%E7%88%B6%E6%AF%8D%E7%A7%AF%E8%93%84%23) `194.7K 🔥` `+54%`
1. [网易云封号](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%98%93%E4%BA%91%E5%B0%81%E5%8F%B7%23) `169.5K 🔥` `+82%`
1. [芭乐 早知道烂地里了](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E4%B9%90%20%E6%97%A9%E7%9F%A5%E9%81%93%E7%83%82%E5%9C%B0%E9%87%8C%E4%BA%86%23) `167.5K 🔥` `+22%`
1. [孙俪回应蒋欣 (Sun Li responded to Jiang Xin)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%9B%9E%E5%BA%94%E8%92%8B%E6%AC%A3%23) `166.4K 🔥` `+23%`
1. [胡先煦顶级的愚人节愚人手法](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E9%A1%B6%E7%BA%A7%E7%9A%84%E6%84%9A%E4%BA%BA%E8%8A%82%E6%84%9A%E4%BA%BA%E6%89%8B%E6%B3%95%23) `147.8K 🔥` `+51%`
1. [严浩翔发的是刘耀文](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%8F%91%E7%9A%84%E6%98%AF%E5%88%98%E8%80%80%E6%96%87%23) `147.6K 🔥` `+49%`
1. [时代少年团愚人节互发](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%84%9A%E4%BA%BA%E8%8A%82%E4%BA%92%E5%8F%91%23) `147.1K 🔥` `+47%`
1. [丁程鑫发了严浩翔 (Ding Chengxin sent Yan Haoxiang)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8F%91%E4%BA%86%E4%B8%A5%E6%B5%A9%E7%BF%94%23) `117.1K 🔥` `+22%`
1. [你的公积金悄悄变多了 (Your provident fund has quietly increased)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E5%85%AC%E7%A7%AF%E9%87%91%E6%82%84%E6%82%84%E5%8F%98%E5%A4%9A%E4%BA%86%23) `825.2K 🔥`
1. [4月1日起一批国家标准开始实施 (A number of national standards will be implemented from April 1)](https://s.weibo.com/weibo?q=%234%E6%9C%881%E6%97%A5%E8%B5%B7%E4%B8%80%E6%89%B9%E5%9B%BD%E5%AE%B6%E6%A0%87%E5%87%86%E5%BC%80%E5%A7%8B%E5%AE%9E%E6%96%BD%23) `652.9K 🔥`
1. [优思益 (Yousiyi)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `178.5K 🔥`
1. [迪丽热巴问白日提灯固屏去哪了 (Dilireba asked where the lantern and the fixed screen went during the day)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%97%AE%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E5%9B%BA%E5%B1%8F%E5%8E%BB%E5%93%AA%E4%BA%86%23) `153.1K 🔥`
1. [江宏杰祝福福原爱再婚怀孕 (Jiang Hongjie wishes Fukuhara Ai remarriage and pregnancy)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%AE%8F%E6%9D%B0%E7%A5%9D%E7%A6%8F%E7%A6%8F%E5%8E%9F%E7%88%B1%E5%86%8D%E5%A9%9A%E6%80%80%E5%AD%95%23) `102.1K 🔥`
1. [迪丽热巴这真是妈咪级别的](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%99%E7%9C%9F%E6%98%AF%E5%A6%88%E5%92%AA%E7%BA%A7%E5%88%AB%E7%9A%84%23) `98.1K 🔥`
1. [三部门对优思益展开调查](https://s.weibo.com/weibo?q=%23%E4%B8%89%E9%83%A8%E9%97%A8%E5%AF%B9%E4%BC%98%E6%80%9D%E7%9B%8A%E5%B1%95%E5%BC%80%E8%B0%83%E6%9F%A5%23) `95.7K 🔥`
1. [张凌赫丁程鑫你俩有点暧昧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%81%E7%A8%8B%E9%91%AB%E4%BD%A0%E4%BF%A9%E6%9C%89%E7%82%B9%E6%9A%A7%E6%98%A7%23) `94.1K 🔥`
1. [月鳞绮纪热度](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E7%83%AD%E5%BA%A6%23) `91.6K 🔥`
1. [张雪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `91.4K 🔥`
1. [曾沛慈 够爱](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E5%A4%9F%E7%88%B1%23) `82.0K 🔥`
1. [宋亚轩宋小花](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%AE%8B%E5%B0%8F%E8%8A%B1%23) `81.9K 🔥`
1. [成都一凶宅第三次拍卖起拍价16.6万](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E4%B8%80%E5%87%B6%E5%AE%85%E7%AC%AC%E4%B8%89%E6%AC%A1%E6%8B%8D%E5%8D%96%E8%B5%B7%E6%8B%8D%E4%BB%B716.6%E4%B8%87%23) `168.3K 🔥` `-85%`
1. [陈飞宇冷脸搬凳子](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E5%86%B7%E8%84%B8%E6%90%AC%E5%87%B3%E5%AD%90%23) `148.4K 🔥` `-44%`
1. [中方回应美颁通用许可证排除中国 (China responds to US’s issuance of general license to exclude China)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%BE%8E%E9%A2%81%E9%80%9A%E7%94%A8%E8%AE%B8%E5%8F%AF%E8%AF%81%E6%8E%92%E9%99%A4%E4%B8%AD%E5%9B%BD%23) `108.7K 🔥` `-54%`
1. [一中国人涉及超7亿房产在英被冻结](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B6%89%E5%8F%8A%E8%B6%857%E4%BA%BF%E6%88%BF%E4%BA%A7%E5%9C%A8%E8%8B%B1%E8%A2%AB%E5%86%BB%E7%BB%93%23) `102.9K 🔥` `-57%`
1. [韩媒就Ruler报道道歉](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AA%92%E5%B0%B1Ruler%E6%8A%A5%E9%81%93%E9%81%93%E6%AD%89%23) `89.9K 🔥` `-36%`

Updated at 2026-04-01 19:15:57

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
