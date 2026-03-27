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

1. [梅姨藏身地村民称她很有钱 (Villagers in the area where Aunt Mei is hiding say she is very rich)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%97%8F%E8%BA%AB%E5%9C%B0%E6%9D%91%E6%B0%91%E7%A7%B0%E5%A5%B9%E5%BE%88%E6%9C%89%E9%92%B1%23) `1.1M 🔥` `NEW`
1. [二次元cos大赏](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%AC%A1%E5%85%83cos%E5%A4%A7%E8%B5%8F%23) `311.5K 🔥` `NEW`
1. [黄金大买家开始抛售](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%A4%A7%E4%B9%B0%E5%AE%B6%E5%BC%80%E5%A7%8B%E6%8A%9B%E5%94%AE%23) `258.5K 🔥` `NEW`
1. [白日提灯首播5集](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E9%A6%96%E6%92%AD5%E9%9B%86%23) `246.9K 🔥` `NEW`
1. [仅退款还得再给你200的程度](https://s.weibo.com/weibo?q=%23%E4%BB%85%E9%80%80%E6%AC%BE%E8%BF%98%E5%BE%97%E5%86%8D%E7%BB%99%E4%BD%A0200%E7%9A%84%E7%A8%8B%E5%BA%A6%23) `223.4K 🔥` `NEW`
1. [罗技短视频组扣除全部绩效](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%8A%80%E7%9F%AD%E8%A7%86%E9%A2%91%E7%BB%84%E6%89%A3%E9%99%A4%E5%85%A8%E9%83%A8%E7%BB%A9%E6%95%88%23) `211.7K 🔥` `NEW`
1. [曾因打儿子日常走红网红老人去世](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E5%9B%A0%E6%89%93%E5%84%BF%E5%AD%90%E6%97%A5%E5%B8%B8%E8%B5%B0%E7%BA%A2%E7%BD%91%E7%BA%A2%E8%80%81%E4%BA%BA%E5%8E%BB%E4%B8%96%23) `139.8K 🔥` `NEW`
1. [6岁儿童拿走豆腐失主坚持要曝光](https://s.weibo.com/weibo?q=%236%E5%B2%81%E5%84%BF%E7%AB%A5%E6%8B%BF%E8%B5%B0%E8%B1%86%E8%85%90%E5%A4%B1%E4%B8%BB%E5%9D%9A%E6%8C%81%E8%A6%81%E6%9B%9D%E5%85%89%23) `130.4K 🔥` `NEW`
1. [女教师被碾压拖行5.9公里致死](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E8%A2%AB%E7%A2%BE%E5%8E%8B%E6%8B%96%E8%A1%8C5.9%E5%85%AC%E9%87%8C%E8%87%B4%E6%AD%BB%23) `130.4K 🔥` `NEW`
1. [日本养牛郎女性发声](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%85%BB%E7%89%9B%E9%83%8E%E5%A5%B3%E6%80%A7%E5%8F%91%E5%A3%B0%23) `130.2K 🔥` `NEW`
1. [男子得知男医生给孕妻做彩超后崩溃 (Man collapsed after learning that male doctor performed color ultrasound on pregnant wife)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BE%97%E7%9F%A5%E7%94%B7%E5%8C%BB%E7%94%9F%E7%BB%99%E5%AD%95%E5%A6%BB%E5%81%9A%E5%BD%A9%E8%B6%85%E5%90%8E%E5%B4%A9%E6%BA%83%23) `130.1K 🔥` `NEW`
1. [吴京 水肿](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E6%B0%B4%E8%82%BF%23) `130.0K 🔥` `NEW`
1. [还以为刘亦菲在展示美貌](https://s.weibo.com/weibo?q=%23%E8%BF%98%E4%BB%A5%E4%B8%BA%E5%88%98%E4%BA%A6%E8%8F%B2%E5%9C%A8%E5%B1%95%E7%A4%BA%E7%BE%8E%E8%B2%8C%23) `129.5K 🔥` `NEW`
1. [郭晓婷王天辰杂志 离婚跟拍](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E6%9D%82%E5%BF%97%20%E7%A6%BB%E5%A9%9A%E8%B7%9F%E6%8B%8D%23) `129.3K 🔥` `NEW`
1. [迪丽热巴答应粉丝63张ccd自拍](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AD%94%E5%BA%94%E7%B2%89%E4%B8%9D63%E5%BC%A0ccd%E8%87%AA%E6%8B%8D%23) `129.1K 🔥` `NEW`
1. [逐玉赵大叔扮演者谈与田曦薇3次合作](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E8%B5%B5%E5%A4%A7%E5%8F%94%E6%89%AE%E6%BC%94%E8%80%85%E8%B0%88%E4%B8%8E%E7%94%B0%E6%9B%A6%E8%96%873%E6%AC%A1%E5%90%88%E4%BD%9C%23) `124.3K 🔥` `NEW`
1. [美元纸币将印特朗普签名](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%85%83%E7%BA%B8%E5%B8%81%E5%B0%86%E5%8D%B0%E7%89%B9%E6%9C%97%E6%99%AE%E7%AD%BE%E5%90%8D%23) `111.2K 🔥` `NEW`
1. [金饰价格一夜大跌45元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E4%B8%80%E5%A4%9C%E5%A4%A7%E8%B7%8C45%E5%85%83%23) `107.2K 🔥` `NEW`
1. [家属质疑医院诊疗不当导致母子双亡](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%B1%9E%E8%B4%A8%E7%96%91%E5%8C%BB%E9%99%A2%E8%AF%8A%E7%96%97%E4%B8%8D%E5%BD%93%E5%AF%BC%E8%87%B4%E6%AF%8D%E5%AD%90%E5%8F%8C%E4%BA%A1%23) `106.8K 🔥` `NEW`
1. [两艘中国集装箱船正靠近霍尔木兹海峡](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E8%89%98%E4%B8%AD%E5%9B%BD%E9%9B%86%E8%A3%85%E7%AE%B1%E8%88%B9%E6%AD%A3%E9%9D%A0%E8%BF%91%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `106.6K 🔥` `NEW`
1. [住建局变住更局 (Housing and Urban-Rural Development Bureau changed to Housing and Urban-Rural Development Bureau)](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E5%BB%BA%E5%B1%80%E5%8F%98%E4%BD%8F%E6%9B%B4%E5%B1%80%23) `104.3K 🔥` `NEW`
1. [严禁教师体罚学生](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E7%A6%81%E6%95%99%E5%B8%88%E4%BD%93%E7%BD%9A%E5%AD%A6%E7%94%9F%23) `90.5K 🔥` `NEW`
1. [汪苏泷首站郑州](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E9%A6%96%E7%AB%99%E9%83%91%E5%B7%9E%23) `88.3K 🔥` `NEW`
1. [iPhone4回收价](https://s.weibo.com/weibo?q=%23iPhone4%E5%9B%9E%E6%94%B6%E4%BB%B7%23) `82.7K 🔥` `NEW`
1. [严浩翔新专概念视频](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%96%B0%E4%B8%93%E6%A6%82%E5%BF%B5%E8%A7%86%E9%A2%91%23) `81.9K 🔥` `NEW`
1. [国产伟哥遇中年危机](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E4%BC%9F%E5%93%A5%E9%81%87%E4%B8%AD%E5%B9%B4%E5%8D%B1%E6%9C%BA%23) `80.9K 🔥` `NEW`
1. [周杰伦新专辑编曲回应差评](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E4%B8%93%E8%BE%91%E7%BC%96%E6%9B%B2%E5%9B%9E%E5%BA%94%E5%B7%AE%E8%AF%84%23) `80.9K 🔥` `NEW`
1. [老肩巨滑咪](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%82%A9%E5%B7%A8%E6%BB%91%E5%92%AA%23) `79.6K 🔥` `NEW`
1. [谢征最后这个餍足的表情](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%9C%80%E5%90%8E%E8%BF%99%E4%B8%AA%E9%A4%8D%E8%B6%B3%E7%9A%84%E8%A1%A8%E6%83%85%23) `76.2K 🔥` `NEW`
1. [杭州有房东150万元买入50万元卖出](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%9C%89%E6%88%BF%E4%B8%9C150%E4%B8%87%E5%85%83%E4%B9%B0%E5%85%A550%E4%B8%87%E5%85%83%E5%8D%96%E5%87%BA%23) `74.9K 🔥` `NEW`
1. [穆祉丞想兄弟了 (Mu Zhicheng misses his brother)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%83%B3%E5%85%84%E5%BC%9F%E4%BA%86%23) `74.0K 🔥` `NEW`
1. [用狗窝擦地被狗看见了](https://s.weibo.com/weibo?q=%23%E7%94%A8%E7%8B%97%E7%AA%9D%E6%93%A6%E5%9C%B0%E8%A2%AB%E7%8B%97%E7%9C%8B%E8%A7%81%E4%BA%86%23) `73.2K 🔥` `NEW`
1. [工作让人变得失去视力](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E8%AE%A9%E4%BA%BA%E5%8F%98%E5%BE%97%E5%A4%B1%E5%8E%BB%E8%A7%86%E5%8A%9B%23) `72.5K 🔥` `NEW`
1. [国足vs库拉索首发](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3vs%E5%BA%93%E6%8B%89%E7%B4%A2%E9%A6%96%E5%8F%91%23) `72.2K 🔥` `NEW`
1. [马杜罗身穿囚服戴着脚镣纽约再出庭](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%9C%E7%BD%97%E8%BA%AB%E7%A9%BF%E5%9B%9A%E6%9C%8D%E6%88%B4%E7%9D%80%E8%84%9A%E9%95%A3%E7%BA%BD%E7%BA%A6%E5%86%8D%E5%87%BA%E5%BA%AD%23) `70.5K 🔥` `NEW`
1. [一声老婆45岁离异女打赏男主播61万 (Yiyi’s wife, a 45-year-old divorced woman, rewards a male anchor with RMB 610,000)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A3%B0%E8%80%81%E5%A9%8645%E5%B2%81%E7%A6%BB%E5%BC%82%E5%A5%B3%E6%89%93%E8%B5%8F%E7%94%B7%E4%B8%BB%E6%92%AD61%E4%B8%87%23) `129.8K 🔥` `+29%`
1. [张真源又在孟子义李昀锐中间](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%8F%88%E5%9C%A8%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%AD%E9%97%B4%23) `102.9K 🔥` `+21%`
1. [2026中国网络媒体论坛 (2026 China Online Media Forum)](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E5%AA%92%E4%BD%93%E8%AE%BA%E5%9D%9B%23) `637.1K 🔥`
1. [奔跑吧14首录合照各有各的活 (The 14 recorded photos of Run Bar each have their own activities)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A714%E9%A6%96%E5%BD%95%E5%90%88%E7%85%A7%E5%90%84%E6%9C%89%E5%90%84%E7%9A%84%E6%B4%BB%23) `183.0K 🔥`
1. [粉底液将军为何会激起群嘲](https://s.weibo.com/weibo?q=%23%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%E4%B8%BA%E4%BD%95%E4%BC%9A%E6%BF%80%E8%B5%B7%E7%BE%A4%E5%98%B2%23) `129.9K 🔥`
1. [大侦探](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BE%A6%E6%8E%A2%23) `109.0K 🔥`
1. [寿司郎 SIM卡 (Sushilang SIM card)](https://s.weibo.com/weibo?q=%23%E5%AF%BF%E5%8F%B8%E9%83%8E%20SIM%E5%8D%A1%23) `827.6K 🔥` `-25%`
1. [沈南 谢谢你为寒门学子打造梯子 (Shen Nan, thank you for building a ladder for disadvantaged students.)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E5%8D%97%20%E8%B0%A2%E8%B0%A2%E4%BD%A0%E4%B8%BA%E5%AF%92%E9%97%A8%E5%AD%A6%E5%AD%90%E6%89%93%E9%80%A0%E6%A2%AF%E5%AD%90%23) `129.6K 🔥` `-26%`
1. [罗技就侮辱性广告致歉 (Logitech apologizes for insulting ad)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%8A%80%E5%B0%B1%E4%BE%AE%E8%BE%B1%E6%80%A7%E5%B9%BF%E5%91%8A%E8%87%B4%E6%AD%89%23) `129.4K 🔥` `-25%`
1. [林俊杰合照没有七七](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%90%88%E7%85%A7%E6%B2%A1%E6%9C%89%E4%B8%83%E4%B8%83%23) `129.1K 🔥` `-21%`
1. [为什么房间里那么多灰尘毛](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%BF%E9%97%B4%E9%87%8C%E9%82%A3%E4%B9%88%E5%A4%9A%E7%81%B0%E5%B0%98%E6%AF%9B%23) `129.1K 🔥` `-52%`
1. [梅姨打牌经常拿出几千上万现金显摆 (Aunt Mei often shows off tens of thousands of dollars in cash while playing cards.)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E6%89%93%E7%89%8C%E7%BB%8F%E5%B8%B8%E6%8B%BF%E5%87%BA%E5%87%A0%E5%8D%83%E4%B8%8A%E4%B8%87%E7%8E%B0%E9%87%91%E6%98%BE%E6%91%86%23) `102.0K 🔥` `-23%`
1. [国产伟哥2025年少卖近800万片](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E4%BC%9F%E5%93%A52025%E5%B9%B4%E5%B0%91%E5%8D%96%E8%BF%91800%E4%B8%87%E7%89%87%23) `98.7K 🔥` `-39%`
1. [大圣崛起定档](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%9C%A3%E5%B4%9B%E8%B5%B7%E5%AE%9A%E6%A1%A3%23) `90.4K 🔥` `-89%`
1. [日本东京发生命案](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B8%9C%E4%BA%AC%E5%8F%91%E7%94%9F%E5%91%BD%E6%A1%88%23) `81.0K 🔥` `-77%`
1. [王源官宣巡演](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%AE%98%E5%AE%A3%E5%B7%A1%E6%BC%94%23) `80.9K 🔥` `-75%`

Updated at 2026-03-27 13:42:24

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
