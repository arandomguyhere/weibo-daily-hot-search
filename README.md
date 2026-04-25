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

1. [尚公主剧宣 (Princess Shang drama trailer)](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%89%A7%E5%AE%A3%23) `549.7K 🔥` `NEW`
1. [浪姐二公直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BA%8C%E5%85%AC%E7%9B%B4%E6%92%AD%23) `351.8K 🔥` `NEW`
1. [王橹杰说有几天匮乏期](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%AF%B4%E6%9C%89%E5%87%A0%E5%A4%A9%E5%8C%AE%E4%B9%8F%E6%9C%9F%23) `241.6K 🔥` `NEW`
1. [街头偶遇时团大屏夯爆了](https://s.weibo.com/weibo?q=%23%E8%A1%97%E5%A4%B4%E5%81%B6%E9%81%87%E6%97%B6%E5%9B%A2%E5%A4%A7%E5%B1%8F%E5%A4%AF%E7%88%86%E4%BA%86%23) `229.0K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `228.4K 🔥` `NEW`
1. [明日方舟直播](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E7%9B%B4%E6%92%AD%23) `227.2K 🔥` `NEW`
1. [时代少年团二开抢票](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%BA%8C%E5%BC%80%E6%8A%A2%E7%A5%A8%23) `219.2K 🔥` `NEW`
1. [东方甄选中灿官宣离职](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E4%B8%AD%E7%81%BF%E5%AE%98%E5%AE%A3%E7%A6%BB%E8%81%8C%23) `217.2K 🔥` `NEW`
1. [收留心碎KSG粉丝](https://s.weibo.com/weibo?q=%23%E6%94%B6%E7%95%99%E5%BF%83%E7%A2%8EKSG%E7%B2%89%E4%B8%9D%23) `178.0K 🔥` `NEW`
1. [江苏13太保均有命名海军大舰](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F13%E5%A4%AA%E4%BF%9D%E5%9D%87%E6%9C%89%E5%91%BD%E5%90%8D%E6%B5%B7%E5%86%9B%E5%A4%A7%E8%88%B0%23) `177.3K 🔥` `NEW`
1. [怦然心动20岁 (Heart-pounding 20 years old)](https://s.weibo.com/weibo?q=%23%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A820%E5%B2%81%23) `177.2K 🔥` `NEW`
1. [刘诗诗天坛女神](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E5%A4%A9%E5%9D%9B%E5%A5%B3%E7%A5%9E%23) `112.1K 🔥` `NEW`
1. [DeepSeekV4 尺度](https://s.weibo.com/weibo?q=%23DeepSeekV4%20%E5%B0%BA%E5%BA%A6%23) `1.2M 🔥` `+724%`
1. [铁路部门将开行179趟旅游列车 (The railway department will operate 179 tourist trains)](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF%E9%83%A8%E9%97%A8%E5%B0%86%E5%BC%80%E8%A1%8C179%E8%B6%9F%E6%97%85%E6%B8%B8%E5%88%97%E8%BD%A6%23) `1.2M 🔥` `+37%`
1. [美国富豪遭5头大象踩踏身亡 (American billionaire trampled to death by five elephants)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%AF%8C%E8%B1%AA%E9%81%AD5%E5%A4%B4%E5%A4%A7%E8%B1%A1%E8%B8%A9%E8%B8%8F%E8%BA%AB%E4%BA%A1%23) `1.2M 🔥` `+107%`
1. [异父异母但双胞胎 (Half-mother but twins)](https://s.weibo.com/weibo?q=%23%E5%BC%82%E7%88%B6%E5%BC%82%E6%AF%8D%E4%BD%86%E5%8F%8C%E8%83%9E%E8%83%8E%23) `1.2M 🔥` `+47%`
1. [李艺彤 气死我了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%89%BA%E5%BD%A4%20%E6%B0%94%E6%AD%BB%E6%88%91%E4%BA%86%23) `420.3K 🔥` `+192%`
1. [被减肥背刺了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%87%8F%E8%82%A5%E8%83%8C%E5%88%BA%E4%BA%86%23) `229.6K 🔥` `+65%`
1. [中国超70%石油靠进口却不慌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%8570%25%E7%9F%B3%E6%B2%B9%E9%9D%A0%E8%BF%9B%E5%8F%A3%E5%8D%B4%E4%B8%8D%E6%85%8C%23) `228.7K 🔥` `+57%`
1. [大喊不用结账的摊主爆单了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%96%8A%E4%B8%8D%E7%94%A8%E7%BB%93%E8%B4%A6%E7%9A%84%E6%91%8A%E4%B8%BB%E7%88%86%E5%8D%95%E4%BA%86%23) `228.0K 🔥` `+25%`
1. [花呗白条月付等面临重大调整](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%91%97%E7%99%BD%E6%9D%A1%E6%9C%88%E4%BB%98%E7%AD%89%E9%9D%A2%E4%B8%B4%E9%87%8D%E5%A4%A7%E8%B0%83%E6%95%B4%23) `1.2M 🔥`
1. [五一原来是放假七天的](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%8E%9F%E6%9D%A5%E6%98%AF%E6%94%BE%E5%81%87%E4%B8%83%E5%A4%A9%E7%9A%84%23) `854.9K 🔥`
1. [瘦人无法理解的吃饭习惯](https://s.weibo.com/weibo?q=%23%E7%98%A6%E4%BA%BA%E6%97%A0%E6%B3%95%E7%90%86%E8%A7%A3%E7%9A%84%E5%90%83%E9%A5%AD%E4%B9%A0%E6%83%AF%23) `687.1K 🔥`
1. [第一次对AI感到恐惧 (Fear of AI for the first time)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9AI%E6%84%9F%E5%88%B0%E6%81%90%E6%83%A7%23) `630.0K 🔥`
1. [杨威两女儿勇夺全国冠军和季军 (Yang Wei’s two daughters won the national championship and third runner-up)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A8%81%E4%B8%A4%E5%A5%B3%E5%84%BF%E5%8B%87%E5%A4%BA%E5%85%A8%E5%9B%BD%E5%86%A0%E5%86%9B%E5%92%8C%E5%AD%A3%E5%86%9B%23) `428.6K 🔥`
1. [发现变胖真的太廉价了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%8F%98%E8%83%96%E7%9C%9F%E7%9A%84%E5%A4%AA%E5%BB%89%E4%BB%B7%E4%BA%86%23) `288.6K 🔥`
1. [这段话反复杀死了我的懒惰](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E5%8F%8D%E5%A4%8D%E6%9D%80%E6%AD%BB%E4%BA%86%E6%88%91%E7%9A%84%E6%87%92%E6%83%B0%23) `263.5K 🔥`
1. [张雪机车香港爆单遭同行诋毁](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E9%A6%99%E6%B8%AF%E7%88%86%E5%8D%95%E9%81%AD%E5%90%8C%E8%A1%8C%E8%AF%8B%E6%AF%81%23) `229.6K 🔥`
1. [杨紫在片场跳了误闯天家](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%9C%A8%E7%89%87%E5%9C%BA%E8%B7%B3%E4%BA%86%E8%AF%AF%E9%97%AF%E5%A4%A9%E5%AE%B6%23) `216.9K 🔥`
1. [陈都灵鞠婧祎黑粉手写道歉信](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E9%9E%A0%E5%A9%A7%E7%A5%8E%E9%BB%91%E7%B2%89%E6%89%8B%E5%86%99%E9%81%93%E6%AD%89%E4%BF%A1%23) `205.2K 🔥`
1. [为什么很少听到工作狂这个标签了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%88%E5%B0%91%E5%90%AC%E5%88%B0%E5%B7%A5%E4%BD%9C%E7%8B%82%E8%BF%99%E4%B8%AA%E6%A0%87%E7%AD%BE%E4%BA%86%23) `135.3K 🔥`
1. [范丞丞踩到白鹿裙子](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%B8%A9%E5%88%B0%E7%99%BD%E9%B9%BF%E8%A3%99%E5%AD%90%23) `128.4K 🔥`
1. [7岁男童仅18斤被当脑瘫治7年 (A 7-year-old boy weighing only 18 pounds was treated as having cerebral palsy for 7 years)](https://s.weibo.com/weibo?q=%237%E5%B2%81%E7%94%B7%E7%AB%A5%E4%BB%8518%E6%96%A4%E8%A2%AB%E5%BD%93%E8%84%91%E7%98%AB%E6%B2%BB7%E5%B9%B4%23) `574.1K 🔥` `-34%`
1. [李昀锐连孟子义名字都不提](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%BF%9E%E5%AD%9F%E5%AD%90%E4%B9%89%E5%90%8D%E5%AD%97%E9%83%BD%E4%B8%8D%E6%8F%90%23) `530.0K 🔥` `-37%`
1. [萧蔷 节目组最严厉的母亲](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%20%E8%8A%82%E7%9B%AE%E7%BB%84%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E6%AF%8D%E4%BA%B2%23) `413.0K 🔥` `-27%`
1. [三手烟 (thirdhand smoke)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%89%8B%E7%83%9F%23) `393.8K 🔥` `-21%`
1. [孟子义李昀锐下定决心拆cp的原因 (The reason why Meng Ziyi and Li Yunrui decided to dismantle CP)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%8B%E5%AE%9A%E5%86%B3%E5%BF%83%E6%8B%86cp%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `365.4K 🔥` `-36%`
1. [老舅在五哈镜头前道歉 (The old uncle apologized in front of the Wuha camera)](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%88%85%E5%9C%A8%E4%BA%94%E5%93%88%E9%95%9C%E5%A4%B4%E5%89%8D%E9%81%93%E6%AD%89%23) `283.3K 🔥` `-42%`
1. [何宣林浪姐上班哭了 (Sister He Xuan and Lin Lang cried at work)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E6%B5%AA%E5%A7%90%E4%B8%8A%E7%8F%AD%E5%93%AD%E4%BA%86%23) `266.1K 🔥` `-57%`
1. [花少导演在约张凌赫田曦薇](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%AF%BC%E6%BC%94%E5%9C%A8%E7%BA%A6%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%23) `234.9K 🔥` `-45%`
1. [鹿晗 爷们儿要脸 (Lu Han, you want face)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E7%88%B7%E4%BB%AC%E5%84%BF%E8%A6%81%E8%84%B8%23) `229.3K 🔥` `-40%`
1. [娜扎前经纪人回应离职 (Nazha’s former manager responds to resignation)](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%9B%9E%E5%BA%94%E7%A6%BB%E8%81%8C%23) `227.9K 🔥` `-31%`
1. [陶昕然发长文回应淘汰 (Tao Xinran posted a long post in response to the elimination)](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E5%8F%91%E9%95%BF%E6%96%87%E5%9B%9E%E5%BA%94%E6%B7%98%E6%B1%B0%23) `227.6K 🔥` `-34%`
1. [王濛隔空喊话黎明](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E9%9A%94%E7%A9%BA%E5%96%8A%E8%AF%9D%E9%BB%8E%E6%98%8E%23) `227.2K 🔥` `-23%`
1. [马嘉祺模仿emoji](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E6%A8%A1%E4%BB%BFemoji%23) `167.2K 🔥` `-34%`
1. [杜江回应霍思燕的蒙古獒又夺冠了](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E6%B1%9F%E5%9B%9E%E5%BA%94%E9%9C%8D%E6%80%9D%E7%87%95%E7%9A%84%E8%92%99%E5%8F%A4%E7%8D%92%E5%8F%88%E5%A4%BA%E5%86%A0%E4%BA%86%23) `130.8K 🔥` `-28%`
1. [过了25就不敢甩头了 (After 25, you no longer dare to shake your head.)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E4%BA%8625%E5%B0%B1%E4%B8%8D%E6%95%A2%E7%94%A9%E5%A4%B4%E4%BA%86%23) `116.6K 🔥` `-30%`
1. [揭晓周云杰说的好空气带回家的答案](https://s.weibo.com/weibo?q=%23%E6%8F%AD%E6%99%93%E5%91%A8%E4%BA%91%E6%9D%B0%E8%AF%B4%E7%9A%84%E5%A5%BD%E7%A9%BA%E6%B0%94%E5%B8%A6%E5%9B%9E%E5%AE%B6%E7%9A%84%E7%AD%94%E6%A1%88%23) `112.2K 🔥` `-39%`
1. [KSG止步32强](https://s.weibo.com/weibo?q=%23KSG%E6%AD%A2%E6%AD%A532%E5%BC%BA%23) `112.0K 🔥` `-40%`
1. [白鹿秒出图 (White deer appears in seconds)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%A7%92%E5%87%BA%E5%9B%BE%23) `109.4K 🔥` `-40%`

Updated at 2026-04-25 19:48:20

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
