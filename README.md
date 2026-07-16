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

1. [realme手机退出中国市场 (realme mobile phone withdraws from Chinese market)](https://s.weibo.com/weibo?q=%23realme%E6%89%8B%E6%9C%BA%E9%80%80%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%23) `1.7M 🔥` `NEW`
1. [辽宁一橡皮艇闪爆致7死1失联](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E4%B8%80%E6%A9%A1%E7%9A%AE%E8%89%87%E9%97%AA%E7%88%86%E8%87%B47%E6%AD%BB1%E5%A4%B1%E8%81%94%23) `557.1K 🔥` `NEW`
1. [BLG战胜T1](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CT1%23) `493.9K 🔥` `NEW`
1. [不要在空调房里做旅行规划](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%9C%A8%E7%A9%BA%E8%B0%83%E6%88%BF%E9%87%8C%E5%81%9A%E6%97%85%E8%A1%8C%E8%A7%84%E5%88%92%23) `484.6K 🔥` `NEW`
1. [野狗骨头好浓的救赎感](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E5%A5%BD%E6%B5%93%E7%9A%84%E6%95%91%E8%B5%8E%E6%84%9F%23) `484.5K 🔥` `NEW`
1. [盒马因受害咪连夜改冬瓜图](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%AC%E5%9B%A0%E5%8F%97%E5%AE%B3%E5%92%AA%E8%BF%9E%E5%A4%9C%E6%94%B9%E5%86%AC%E7%93%9C%E5%9B%BE%23) `484.2K 🔥` `NEW`
1. [中国夫妇印尼溺亡水下画面曝光](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%AB%E5%A6%87%E5%8D%B0%E5%B0%BC%E6%BA%BA%E4%BA%A1%E6%B0%B4%E4%B8%8B%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `479.7K 🔥` `NEW`
1. [朱志鑫哭了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E5%93%AD%E4%BA%86%23) `475.7K 🔥` `NEW`
1. [穆祉丞心率挑战直接挂脸](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%BF%83%E7%8E%87%E6%8C%91%E6%88%98%E7%9B%B4%E6%8E%A5%E6%8C%82%E8%84%B8%23) `472.0K 🔥` `NEW`
1. [白鹿经纪人朋友圈](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `467.7K 🔥` `NEW`
1. [金靖回复虞书欣包场 (Jin Jing replied that Yu Shuxin reserved the venue)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E5%9B%9E%E5%A4%8D%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%8C%85%E5%9C%BA%23) `465.5K 🔥` `NEW`
1. [穆祉丞问王橹杰在哪](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E9%97%AE%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%9C%A8%E5%93%AA%23) `461.2K 🔥` `NEW`
1. [左奇函心率170](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E5%BF%83%E7%8E%87170%23) `458.9K 🔥` `NEW`
1. [蔡徐坤演唱会官宣开票时间](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%E5%BC%80%E7%A5%A8%E6%97%B6%E9%97%B4%23) `456.9K 🔥` `NEW`
1. [湖北一地疑因欠费被限时供水](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E4%B8%80%E5%9C%B0%E7%96%91%E5%9B%A0%E6%AC%A0%E8%B4%B9%E8%A2%AB%E9%99%90%E6%97%B6%E4%BE%9B%E6%B0%B4%23) `454.6K 🔥` `NEW`
1. [LV多家门店没人排队](https://s.weibo.com/weibo?q=%23LV%E5%A4%9A%E5%AE%B6%E9%97%A8%E5%BA%97%E6%B2%A1%E4%BA%BA%E6%8E%92%E9%98%9F%23) `449.8K 🔥` `NEW`
1. [苏新皓看到粉丝说喜欢他两千天哭了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E7%9C%8B%E5%88%B0%E7%B2%89%E4%B8%9D%E8%AF%B4%E5%96%9C%E6%AC%A2%E4%BB%96%E4%B8%A4%E5%8D%83%E5%A4%A9%E5%93%AD%E4%BA%86%23) `448.8K 🔥` `NEW`
1. [欧弟全家移居日本冲绳](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%BC%9F%E5%85%A8%E5%AE%B6%E7%A7%BB%E5%B1%85%E6%97%A5%E6%9C%AC%E5%86%B2%E7%BB%B3%23) `446.6K 🔥` `NEW`
1. [C罗或推迟婚礼](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%88%96%E6%8E%A8%E8%BF%9F%E5%A9%9A%E7%A4%BC%23) `443.7K 🔥` `NEW`
1. [五大洲民众对中国好感度普遍超过美国](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%A4%A7%E6%B4%B2%E6%B0%91%E4%BC%97%E5%AF%B9%E4%B8%AD%E5%9B%BD%E5%A5%BD%E6%84%9F%E5%BA%A6%E6%99%AE%E9%81%8D%E8%B6%85%E8%BF%87%E7%BE%8E%E5%9B%BD%23) `439.3K 🔥` `NEW`
1. [为什么方媛炒菜还背着包 (Why is Fang Yuan still carrying a bag when cooking?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%96%B9%E5%AA%9B%E7%82%92%E8%8F%9C%E8%BF%98%E8%83%8C%E7%9D%80%E5%8C%85%23) `438.0K 🔥` `NEW`
1. [阿根廷的最后十分钟怎么了](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%9A%84%E6%9C%80%E5%90%8E%E5%8D%81%E5%88%86%E9%92%9F%E6%80%8E%E4%B9%88%E4%BA%86%23) `433.6K 🔥` `NEW`
1. [迪丽热巴现在走路一步三摇了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%8E%B0%E5%9C%A8%E8%B5%B0%E8%B7%AF%E4%B8%80%E6%AD%A5%E4%B8%89%E6%91%87%E4%BA%86%23) `425.9K 🔥` `NEW`
1. [张函瑞心率挑战张桂源心率](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E5%BF%83%E7%8E%87%E6%8C%91%E6%88%98%E5%BC%A0%E6%A1%82%E6%BA%90%E5%BF%83%E7%8E%87%23) `420.9K 🔥` `NEW`
1. [贝林厄姆 贝克汉姆家长子位置空出来了](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%20%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E5%AE%B6%E9%95%BF%E5%AD%90%E4%BD%8D%E7%BD%AE%E7%A9%BA%E5%87%BA%E6%9D%A5%E4%BA%86%23) `417.0K 🔥` `NEW`
1. [森碟抱着叶一茜拍照](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E7%A2%9F%E6%8A%B1%E7%9D%80%E5%8F%B6%E4%B8%80%E8%8C%9C%E6%8B%8D%E7%85%A7%23) `415.6K 🔥` `NEW`
1. [金靖回应虞书欣](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E5%9B%9E%E5%BA%94%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `414.4K 🔥` `NEW`
1. [7岁女孩泳池溺水8分钟被救致瘫痪](https://s.weibo.com/weibo?q=%237%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%B3%B3%E6%B1%A0%E6%BA%BA%E6%B0%B48%E5%88%86%E9%92%9F%E8%A2%AB%E6%95%91%E8%87%B4%E7%98%AB%E7%97%AA%23) `408.1K 🔥` `NEW`
1. [卢昱晓谋杀者的告白开机](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E8%B0%8B%E6%9D%80%E8%80%85%E7%9A%84%E5%91%8A%E7%99%BD%E5%BC%80%E6%9C%BA%23) `408.0K 🔥` `NEW`
1. [贝林厄姆冲皮克福德摊手怒喊](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E5%86%B2%E7%9A%AE%E5%85%8B%E7%A6%8F%E5%BE%B7%E6%91%8A%E6%89%8B%E6%80%92%E5%96%8A%23) `404.1K 🔥` `NEW`
1. [一代人有一代人的白幼瘦 (Every generation has its own white skinny)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E7%99%BD%E5%B9%BC%E7%98%A6%23) `401.8K 🔥` `NEW`
1. [万斯怒斥以色列去死吧](https://s.weibo.com/weibo?q=%23%E4%B8%87%E6%96%AF%E6%80%92%E6%96%A5%E4%BB%A5%E8%89%B2%E5%88%97%E5%8E%BB%E6%AD%BB%E5%90%A7%23) `400.2K 🔥` `NEW`
1. [终末地诀](https://s.weibo.com/weibo?q=%23%E7%BB%88%E6%9C%AB%E5%9C%B0%E8%AF%80%23) `395.4K 🔥` `NEW`
1. [英格兰主帅说没人想踢季军战](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E4%B8%BB%E5%B8%85%E8%AF%B4%E6%B2%A1%E4%BA%BA%E6%83%B3%E8%B8%A2%E5%AD%A3%E5%86%9B%E6%88%98%23) `391.9K 🔥` `NEW`
1. [电表里藏着中国经济的黑马](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A1%A8%E9%87%8C%E8%97%8F%E7%9D%80%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E7%9A%84%E9%BB%91%E9%A9%AC%23) `742.1K 🔥`
1. [突然觉得有车真的很方便](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E8%A7%89%E5%BE%97%E6%9C%89%E8%BD%A6%E7%9C%9F%E7%9A%84%E5%BE%88%E6%96%B9%E4%BE%BF%23) `926.0K 🔥` `-68%`
1. [C罗原计划世界杯后完婚 (Ronaldo originally planned to get married after the World Cup)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%8E%9F%E8%AE%A1%E5%88%92%E4%B8%96%E7%95%8C%E6%9D%AF%E5%90%8E%E5%AE%8C%E5%A9%9A%23) `482.2K 🔥` `-54%`
1. [怪不得留学生喜欢叫自己留子](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E7%95%99%E5%AD%A6%E7%94%9F%E5%96%9C%E6%AC%A2%E5%8F%AB%E8%87%AA%E5%B7%B1%E7%95%99%E5%AD%90%23) `477.3K 🔥` `-40%`
1. [A股 (A shares)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `470.5K 🔥` `-29%`
1. [呵呵回应白鹿告别欢娱](https://s.weibo.com/weibo?q=%23%E5%91%B5%E5%91%B5%E5%9B%9E%E5%BA%94%E7%99%BD%E9%B9%BF%E5%91%8A%E5%88%AB%E6%AC%A2%E5%A8%B1%23) `463.5K 🔥` `-40%`
1. [我已经吹不了25度的空调了 (I can no longer blow the air conditioner at 25 degrees Celsius)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B7%B2%E7%BB%8F%E5%90%B9%E4%B8%8D%E4%BA%8625%E5%BA%A6%E7%9A%84%E7%A9%BA%E8%B0%83%E4%BA%86%23) `453.4K 🔥` `-23%`
1. [柳智敏父亲服役引争议](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E7%88%B6%E4%BA%B2%E6%9C%8D%E5%BD%B9%E5%BC%95%E4%BA%89%E8%AE%AE%23) `442.3K 🔥` `-25%`
1. [TF运动会心率挑战 (TF Games Heart Rate Challenge)](https://s.weibo.com/weibo?q=%23TF%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%BF%83%E7%8E%87%E6%8C%91%E6%88%98%23) `435.4K 🔥` `-43%`
1. [原来减肥迈开腿是真的有用](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%87%8F%E8%82%A5%E8%BF%88%E5%BC%80%E8%85%BF%E6%98%AF%E7%9C%9F%E7%9A%84%E6%9C%89%E7%94%A8%23) `430.2K 🔥` `-41%`
1. [王橹杰疑似身体不适 (Wang Lujie is suspected of being unwell)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%96%91%E4%BC%BC%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%23) `429.3K 🔥` `-35%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `425.0K 🔥` `-25%`
1. [阿根廷绝杀球被质疑犯规在先](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%BB%9D%E6%9D%80%E7%90%83%E8%A2%AB%E8%B4%A8%E7%96%91%E7%8A%AF%E8%A7%84%E5%9C%A8%E5%85%88%23) `422.1K 🔥` `-27%`
1. [张月的女主剧在央视一热播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E7%9A%84%E5%A5%B3%E4%B8%BB%E5%89%A7%E5%9C%A8%E5%A4%AE%E8%A7%86%E4%B8%80%E7%83%AD%E6%92%AD%23) `410.3K 🔥` `-21%`
1. [拿到毕业证前不要去很远的地方](https://s.weibo.com/weibo?q=%23%E6%8B%BF%E5%88%B0%E6%AF%95%E4%B8%9A%E8%AF%81%E5%89%8D%E4%B8%8D%E8%A6%81%E5%8E%BB%E5%BE%88%E8%BF%9C%E7%9A%84%E5%9C%B0%E6%96%B9%23) `399.0K 🔥` `-29%`
1. [王俊凯广州馆比重庆大很多](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B9%BF%E5%B7%9E%E9%A6%86%E6%AF%94%E9%87%8D%E5%BA%86%E5%A4%A7%E5%BE%88%E5%A4%9A%23) `393.0K 🔥` `-24%`
1. [功夫女足9亿票房 (Kung Fu Girls 900 million box office)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B39%E4%BA%BF%E7%A5%A8%E6%88%BF%23) `389.8K 🔥` `-28%`

Updated at 2026-07-16 19:07:24

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
