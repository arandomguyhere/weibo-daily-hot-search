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

1. [公安部力挺张雪新手禁令 (The Ministry of Public Security supports Zhang Xue’s novice ban)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%AE%89%E9%83%A8%E5%8A%9B%E6%8C%BA%E5%BC%A0%E9%9B%AA%E6%96%B0%E6%89%8B%E7%A6%81%E4%BB%A4%23) `330.2K 🔥` `NEW`
1. [369休息](https://s.weibo.com/weibo?q=%23369%E4%BC%91%E6%81%AF%23) `304.1K 🔥` `NEW`
1. [牢A的未公开档案](https://s.weibo.com/weibo?q=%23%E7%89%A2A%E7%9A%84%E6%9C%AA%E5%85%AC%E5%BC%80%E6%A1%A3%E6%A1%88%23) `290.5K 🔥` `NEW`
1. [李连杰 短剧](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%BF%9E%E6%9D%B0%20%E7%9F%AD%E5%89%A7%23) `203.0K 🔥` `NEW`
1. [内田有纪柏原崇结婚](https://s.weibo.com/weibo?q=%23%E5%86%85%E7%94%B0%E6%9C%89%E7%BA%AA%E6%9F%8F%E5%8E%9F%E5%B4%87%E7%BB%93%E5%A9%9A%23) `194.9K 🔥` `NEW`
1. [王子承认逃兵役](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E6%89%BF%E8%AE%A4%E9%80%83%E5%85%B5%E5%BD%B9%23) `194.1K 🔥` `NEW`
1. [虞书欣愚人节被骗](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%84%9A%E4%BA%BA%E8%8A%82%E8%A2%AB%E9%AA%97%23) `193.2K 🔥` `NEW`
1. [国乒女线6人全部出线](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E7%BA%BF6%E4%BA%BA%E5%85%A8%E9%83%A8%E5%87%BA%E7%BA%BF%23) `187.0K 🔥` `NEW`
1. [优思益声明](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E5%A3%B0%E6%98%8E%23) `186.3K 🔥` `NEW`
1. [T1对战KT](https://s.weibo.com/weibo?q=%23T1%E5%AF%B9%E6%88%98KT%23) `152.3K 🔥` `NEW`
1. [T1被KT零龙塔 (T1 was defeated by KT Zero Dragon Tower)](https://s.weibo.com/weibo?q=%23T1%E8%A2%ABKT%E9%9B%B6%E9%BE%99%E5%A1%94%23) `114.8K 🔥` `NEW`
1. [王楚钦晋级淘汰赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%99%8B%E7%BA%A7%E6%B7%98%E6%B1%B0%E8%B5%9B%23) `110.5K 🔥` `NEW`
1. [成都一凶宅96.6万成交后买家悔拍](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E4%B8%80%E5%87%B6%E5%AE%8596.6%E4%B8%87%E6%88%90%E4%BA%A4%E5%90%8E%E4%B9%B0%E5%AE%B6%E6%82%94%E6%8B%8D%23) `103.4K 🔥` `NEW`
1. [聂远演出了反派的顶级老实感](https://s.weibo.com/weibo?q=%23%E8%81%82%E8%BF%9C%E6%BC%94%E5%87%BA%E4%BA%86%E5%8F%8D%E6%B4%BE%E7%9A%84%E9%A1%B6%E7%BA%A7%E8%80%81%E5%AE%9E%E6%84%9F%23) `94.5K 🔥` `NEW`
1. [遭拖行致死女教师在小学门前被发现](https://s.weibo.com/weibo?q=%23%E9%81%AD%E6%8B%96%E8%A1%8C%E8%87%B4%E6%AD%BB%E5%A5%B3%E6%95%99%E5%B8%88%E5%9C%A8%E5%B0%8F%E5%AD%A6%E9%97%A8%E5%89%8D%E8%A2%AB%E5%8F%91%E7%8E%B0%23) `94.4K 🔥` `NEW`
1. [女教师被拖行身亡涉案者系单位一把手](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E8%A2%AB%E6%8B%96%E8%A1%8C%E8%BA%AB%E4%BA%A1%E6%B6%89%E6%A1%88%E8%80%85%E7%B3%BB%E5%8D%95%E4%BD%8D%E4%B8%80%E6%8A%8A%E6%89%8B%23) `94.4K 🔥` `NEW`
1. [瘫痪小孩为拿手机奇迹站立](https://s.weibo.com/weibo?q=%23%E7%98%AB%E7%97%AA%E5%B0%8F%E5%AD%A9%E4%B8%BA%E6%8B%BF%E6%89%8B%E6%9C%BA%E5%A5%87%E8%BF%B9%E7%AB%99%E7%AB%8B%23) `89.7K 🔥` `NEW`
1. [热巴陈飞宇说英文好苏](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E8%AF%B4%E8%8B%B1%E6%96%87%E5%A5%BD%E8%8B%8F%23) `88.2K 🔥` `NEW`
1. [孕妇微信请假主管未回复被算旷工](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E5%BE%AE%E4%BF%A1%E8%AF%B7%E5%81%87%E4%B8%BB%E7%AE%A1%E6%9C%AA%E5%9B%9E%E5%A4%8D%E8%A2%AB%E7%AE%97%E6%97%B7%E5%B7%A5%23) `78.0K 🔥` `NEW`
1. [王楚钦谈老将小将的区别](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%B0%88%E8%80%81%E5%B0%86%E5%B0%8F%E5%B0%86%E7%9A%84%E5%8C%BA%E5%88%AB%23) `76.6K 🔥` `NEW`
1. [陈都灵工作室 剧宣 (Chen Duling Studio drama promotion)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E5%89%A7%E5%AE%A3%23) `75.3K 🔥` `NEW`
1. [时代少年团愚人节互发](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%84%9A%E4%BA%BA%E8%8A%82%E4%BA%92%E5%8F%91%23) `276.3K 🔥` `+88%`
1. [官方通报1岁男童疑输液后抽搐去世](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A51%E5%B2%81%E7%94%B7%E7%AB%A5%E7%96%91%E8%BE%93%E6%B6%B2%E5%90%8E%E6%8A%BD%E6%90%90%E5%8E%BB%E4%B8%96%23) `227.8K 🔥` `+52%`
1. [妹妹看到姐姐遗体惨状当场崩溃](https://s.weibo.com/weibo?q=%23%E5%A6%B9%E5%A6%B9%E7%9C%8B%E5%88%B0%E5%A7%90%E5%A7%90%E9%81%97%E4%BD%93%E6%83%A8%E7%8A%B6%E5%BD%93%E5%9C%BA%E5%B4%A9%E6%BA%83%23) `194.5K 🔥` `+32%`
1. [胡先煦顶级的愚人节愚人手法](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E9%A1%B6%E7%BA%A7%E7%9A%84%E6%84%9A%E4%BA%BA%E8%8A%82%E6%84%9A%E4%BA%BA%E6%89%8B%E6%B3%95%23) `194.3K 🔥` `+31%`
1. [严浩翔发的是刘耀文](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%8F%91%E7%9A%84%E6%98%AF%E5%88%98%E8%80%80%E6%96%87%23) `193.5K 🔥` `+31%`
1. [丁程鑫发了严浩翔 (Ding Chengxin sent Yan Haoxiang)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8F%91%E4%BA%86%E4%B8%A5%E6%B5%A9%E7%BF%94%23) `180.0K 🔥` `+54%`
1. [有线耳机爆火原因 (Reasons why wired headphones explode)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%E7%88%86%E7%81%AB%E5%8E%9F%E5%9B%A0%23) `1.1M 🔥`
1. [你的公积金悄悄变多了 (Your provident fund has quietly increased)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E5%85%AC%E7%A7%AF%E9%87%91%E6%82%84%E6%82%84%E5%8F%98%E5%A4%9A%E4%BA%86%23) `768.9K 🔥`
1. [4月1日起一批国家标准开始实施 (A number of national standards will be implemented from April 1)](https://s.weibo.com/weibo?q=%234%E6%9C%881%E6%97%A5%E8%B5%B7%E4%B8%80%E6%89%B9%E5%9B%BD%E5%AE%B6%E6%A0%87%E5%87%86%E5%BC%80%E5%A7%8B%E5%AE%9E%E6%96%BD%23) `628.7K 🔥`
1. [以色列决定报复法国](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%86%B3%E5%AE%9A%E6%8A%A5%E5%A4%8D%E6%B3%95%E5%9B%BD%23) `359.1K 🔥`
1. [优思益 (Yousiyi)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `195.1K 🔥`
1. [芭乐 早知道烂地里了](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E4%B9%90%20%E6%97%A9%E7%9F%A5%E9%81%93%E7%83%82%E5%9C%B0%E9%87%8C%E4%BA%86%23) `193.8K 🔥`
1. [网易云封号](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%98%93%E4%BA%91%E5%B0%81%E5%8F%B7%23) `193.4K 🔥`
1. [Uzi队遭陪玩队零封](https://s.weibo.com/weibo?q=%23Uzi%E9%98%9F%E9%81%AD%E9%99%AA%E7%8E%A9%E9%98%9F%E9%9B%B6%E5%B0%81%23) `157.6K 🔥`
1. [周深新歌禁止用于AI训练 (Zhou Shen’s new songs are prohibited from being used for AI training)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%96%B0%E6%AD%8C%E7%A6%81%E6%AD%A2%E7%94%A8%E4%BA%8EAI%E8%AE%AD%E7%BB%83%23) `156.4K 🔥`
1. [成都一凶宅第三次拍卖起拍价16.6万](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E4%B8%80%E5%87%B6%E5%AE%85%E7%AC%AC%E4%B8%89%E6%AC%A1%E6%8B%8D%E5%8D%96%E8%B5%B7%E6%8B%8D%E4%BB%B716.6%E4%B8%87%23) `136.7K 🔥`
1. [43岁产妇遇产科死神羊水栓塞 (43-year-old mother encounters obstetric death due to amniotic fluid embolism)](https://s.weibo.com/weibo?q=%2343%E5%B2%81%E4%BA%A7%E5%A6%87%E9%81%87%E4%BA%A7%E7%A7%91%E6%AD%BB%E7%A5%9E%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%23) `133.6K 🔥`
1. [全球股市史诗级暴涨](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%82%A1%E5%B8%82%E5%8F%B2%E8%AF%97%E7%BA%A7%E6%9A%B4%E6%B6%A8%23) `125.5K 🔥`
1. [衣服上身5秒定律](https://s.weibo.com/weibo?q=%23%E8%A1%A3%E6%9C%8D%E4%B8%8A%E8%BA%AB5%E7%A7%92%E5%AE%9A%E5%BE%8B%23) `116.9K 🔥`
1. [迪丽热巴这真是妈咪级别的](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%99%E7%9C%9F%E6%98%AF%E5%A6%88%E5%92%AA%E7%BA%A7%E5%88%AB%E7%9A%84%23) `112.3K 🔥`
1. [工科生不适合去星巴克的原因](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E7%A7%91%E7%94%9F%E4%B8%8D%E9%80%82%E5%90%88%E5%8E%BB%E6%98%9F%E5%B7%B4%E5%85%8B%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `98.9K 🔥`
1. [雇两个擦玻璃小工仅需1根猫条](https://s.weibo.com/weibo?q=%23%E9%9B%87%E4%B8%A4%E4%B8%AA%E6%93%A6%E7%8E%BB%E7%92%83%E5%B0%8F%E5%B7%A5%E4%BB%85%E9%9C%801%E6%A0%B9%E7%8C%AB%E6%9D%A1%23) `97.8K 🔥`
1. [江宏杰祝福福原爱再婚怀孕 (Jiang Hongjie wishes Fukuhara Ai remarriage and pregnancy)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%AE%8F%E6%9D%B0%E7%A5%9D%E7%A6%8F%E7%A6%8F%E5%8E%9F%E7%88%B1%E5%86%8D%E5%A9%9A%E6%80%80%E5%AD%95%23) `86.8K 🔥`
1. [张雪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `84.3K 🔥`
1. [女教师被拖行5.9公里致死已两度尸检](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E8%A2%AB%E6%8B%96%E8%A1%8C5.9%E5%85%AC%E9%87%8C%E8%87%B4%E6%AD%BB%E5%B7%B2%E4%B8%A4%E5%BA%A6%E5%B0%B8%E6%A3%80%23) `194.7K 🔥` `-42%`
1. [法国豪门弃子34岁终夺冠致谢张雪 (The abandoned son of a French giant finally won the championship at the age of 34 and thanked Zhang Xue)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%B1%AA%E9%97%A8%E5%BC%83%E5%AD%9034%E5%B2%81%E7%BB%88%E5%A4%BA%E5%86%A0%E8%87%B4%E8%B0%A2%E5%BC%A0%E9%9B%AA%23) `147.7K 🔥` `-26%`
1. [孙俪回应蒋欣 (Sun Li responded to Jiang Xin)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%9B%9E%E5%BA%94%E8%92%8B%E6%AC%A3%23) `107.6K 🔥` `-35%`
1. [JDG对战WB](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98WB%23) `95.1K 🔥` `-35%`
1. [婚前立遗嘱小伙称房子掏空父母积蓄 (The man who made a will before marriage said the house emptied his parents’ savings)](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%89%8D%E7%AB%8B%E9%81%97%E5%98%B1%E5%B0%8F%E4%BC%99%E7%A7%B0%E6%88%BF%E5%AD%90%E6%8E%8F%E7%A9%BA%E7%88%B6%E6%AF%8D%E7%A7%AF%E8%93%84%23) `86.8K 🔥` `-55%`
1. [迪丽热巴问白日提灯固屏去哪了 (Dilireba asked where the lantern and the fixed screen went during the day)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%97%AE%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E5%9B%BA%E5%B1%8F%E5%8E%BB%E5%93%AA%E4%BA%86%23) `77.8K 🔥` `-49%`

Updated at 2026-04-01 20:04:22

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
