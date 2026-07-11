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

1. [詹前顾后 (Zhan looks ahead and takes care of things)](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%89%8D%E9%A1%BE%E5%90%8E%23) `570.3K 🔥` `NEW`
1. [上海已转移3.4万人](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%B7%B2%E8%BD%AC%E7%A7%BB3.4%E4%B8%87%E4%BA%BA%23) `568.1K 🔥` `NEW`
1. [HLE对战LYON](https://s.weibo.com/weibo?q=%23HLE%E5%AF%B9%E6%88%98LYON%23) `563.8K 🔥` `NEW`
1. [发现中指的握笔茧消失了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E4%B8%AD%E6%8C%87%E7%9A%84%E6%8F%A1%E7%AC%94%E8%8C%A7%E6%B6%88%E5%A4%B1%E4%BA%86%23) `544.9K 🔥` `NEW`
1. [段奥娟这么瘦了](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E5%A5%A5%E5%A8%9F%E8%BF%99%E4%B9%88%E7%98%A6%E4%BA%86%23) `541.9K 🔥` `NEW`
1. [第一次报道台风巴威记者吓懵了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%8A%A5%E9%81%93%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E8%AE%B0%E8%80%85%E5%90%93%E6%87%B5%E4%BA%86%23) `524.6K 🔥` `NEW`
1. [张小斐演技](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E6%BC%94%E6%8A%80%23) `522.9K 🔥` `NEW`
1. [孟子义干什么都不忘章若楠](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B9%B2%E4%BB%80%E4%B9%88%E9%83%BD%E4%B8%8D%E5%BF%98%E7%AB%A0%E8%8B%A5%E6%A5%A0%23) `520.3K 🔥` `NEW`
1. [长沙体育局彭某某被停职](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E4%BD%93%E8%82%B2%E5%B1%80%E5%BD%AD%E6%9F%90%E6%9F%90%E8%A2%AB%E5%81%9C%E8%81%8C%23) `504.1K 🔥` `NEW`
1. [浪姐七公歌单](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%83%E5%85%AC%E6%AD%8C%E5%8D%95%23) `500.0K 🔥` `NEW`
1. [时代少年团新歌预告 (New Song Preview of Times Youth League)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%96%B0%E6%AD%8C%E9%A2%84%E5%91%8A%23) `498.6K 🔥` `NEW`
1. [穆祉丞常州演唱会](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%B8%B8%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `482.5K 🔥` `NEW`
1. [孟子义扛剧能力](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%89%9B%E5%89%A7%E8%83%BD%E5%8A%9B%23) `479.2K 🔥` `NEW`
1. [妈妈离世4个月女儿确诊红斑狼疮](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%A6%BB%E4%B8%964%E4%B8%AA%E6%9C%88%E5%A5%B3%E5%84%BF%E7%A1%AE%E8%AF%8A%E7%BA%A2%E6%96%91%E7%8B%BC%E7%96%AE%23) `472.1K 🔥` `NEW`
1. [5年不上班的真实感受](https://s.weibo.com/weibo?q=%235%E5%B9%B4%E4%B8%8D%E4%B8%8A%E7%8F%AD%E7%9A%84%E7%9C%9F%E5%AE%9E%E6%84%9F%E5%8F%97%23) `466.1K 🔥` `NEW`
1. [HLE狂送不止](https://s.weibo.com/weibo?q=%23HLE%E7%8B%82%E9%80%81%E4%B8%8D%E6%AD%A2%23) `462.3K 🔥` `NEW`
1. [雀骨开播](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%E5%BC%80%E6%92%AD%23) `457.3K 🔥` `NEW`
1. [巴威最新位置](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E6%9C%80%E6%96%B0%E4%BD%8D%E7%BD%AE%23) `4.4M 🔥` `+1203%`
1. [长沙市体育局干部彭某某被停职](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E5%B8%82%E4%BD%93%E8%82%B2%E5%B1%80%E5%B9%B2%E9%83%A8%E5%BD%AD%E6%9F%90%E6%9F%90%E8%A2%AB%E5%81%9C%E8%81%8C%23) `2.2M 🔥` `+80%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `572.1K 🔥` `+70%`
1. [内马尔度假遭痛批 (Neymar criticized for vacation)](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E5%BA%A6%E5%81%87%E9%81%AD%E7%97%9B%E6%89%B9%23) `560.5K 🔥` `+64%`
1. [曝浪姐七公队长范玮琪李小冉](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B5%AA%E5%A7%90%E4%B8%83%E5%85%AC%E9%98%9F%E9%95%BF%E8%8C%83%E7%8E%AE%E7%90%AA%E6%9D%8E%E5%B0%8F%E5%86%89%23) `554.5K 🔥` `+78%`
1. [妈妈回应16岁儿子拍门玩闹遭捅杀](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%9416%E5%B2%81%E5%84%BF%E5%AD%90%E6%8B%8D%E9%97%A8%E7%8E%A9%E9%97%B9%E9%81%AD%E6%8D%85%E6%9D%80%23) `551.4K 🔥` `+64%`
1. [周星驰官宣星女郎雪野](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%AE%98%E5%AE%A3%E6%98%9F%E5%A5%B3%E9%83%8E%E9%9B%AA%E9%87%8E%23) `547.9K 🔥` `+61%`
1. [Jennie神图诞生了](https://s.weibo.com/weibo?q=%23Jennie%E7%A5%9E%E5%9B%BE%E8%AF%9E%E7%94%9F%E4%BA%86%23) `547.3K 🔥` `+60%`
1. [董思成微博改名](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%80%9D%E6%88%90%E5%BE%AE%E5%8D%9A%E6%94%B9%E5%90%8D%23) `539.4K 🔥` `+83%`
1. [日媒拆台日本火箭只飞了11米 (Japanese media debunked the Japanese rocket that only flew 11 meters)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E6%8B%86%E5%8F%B0%E6%97%A5%E6%9C%AC%E7%81%AB%E7%AE%AD%E5%8F%AA%E9%A3%9E%E4%BA%8611%E7%B1%B3%23) `536.1K 🔥` `+63%`
1. [纽约前辉瑞大楼承重柱弯曲如面条 (Load-bearing columns of former Pfizer building in New York bent like noodles)](https://s.weibo.com/weibo?q=%23%E7%BA%BD%E7%BA%A6%E5%89%8D%E8%BE%89%E7%91%9E%E5%A4%A7%E6%A5%BC%E6%89%BF%E9%87%8D%E6%9F%B1%E5%BC%AF%E6%9B%B2%E5%A6%82%E9%9D%A2%E6%9D%A1%23) `532.1K 🔥` `+62%`
1. [正常的性生活频率是多少 (What is the normal frequency of sexual intercourse?)](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%B8%B8%E7%9A%84%E6%80%A7%E7%94%9F%E6%B4%BB%E9%A2%91%E7%8E%87%E6%98%AF%E5%A4%9A%E5%B0%91%23) `531.1K 🔥` `+63%`
1. [台风逼近温州雁荡山瀑布倒流](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E9%80%BC%E8%BF%91%E6%B8%A9%E5%B7%9E%E9%9B%81%E8%8D%A1%E5%B1%B1%E7%80%91%E5%B8%83%E5%80%92%E6%B5%81%23) `517.5K 🔥` `+68%`
1. [金鹤龙给白鹿化了一整季跑男](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%A4%E9%BE%99%E7%BB%99%E7%99%BD%E9%B9%BF%E5%8C%96%E4%BA%86%E4%B8%80%E6%95%B4%E5%AD%A3%E8%B7%91%E7%94%B7%23) `514.6K 🔥` `+55%`
1. [北京WBG对战FPX.ZQ](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%ACWBG%E5%AF%B9%E6%88%98FPX.ZQ%23) `511.0K 🔥` `+77%`
1. [哈兰德外网最火恶搞视频](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A4%96%E7%BD%91%E6%9C%80%E7%81%AB%E6%81%B6%E6%90%9E%E8%A7%86%E9%A2%91%23) `509.0K 🔥` `+62%`
1. [功夫女足三观 (Three views on Kung Fu women’s football)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E4%B8%89%E8%A7%82%23) `507.1K 🔥` `+53%`
1. [发现大家赚钱的思路好清晰](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%A4%A7%E5%AE%B6%E8%B5%9A%E9%92%B1%E7%9A%84%E6%80%9D%E8%B7%AF%E5%A5%BD%E6%B8%85%E6%99%B0%23) `495.8K 🔥` `+50%`
1. [周柯宇学车也得一车四个人](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9F%AF%E5%AE%87%E5%AD%A6%E8%BD%A6%E4%B9%9F%E5%BE%97%E4%B8%80%E8%BD%A6%E5%9B%9B%E4%B8%AA%E4%BA%BA%23) `491.6K 🔥` `+54%`
1. [关晓彤的健康餐又上新了](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%9A%84%E5%81%A5%E5%BA%B7%E9%A4%90%E5%8F%88%E4%B8%8A%E6%96%B0%E4%BA%86%23) `490.1K 🔥` `+51%`
1. [台风巴威又睁眼了 (Typhoon Bavi opens its eyes again)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%8F%88%E7%9D%81%E7%9C%BC%E4%BA%86%23) `488.2K 🔥` `+63%`
1. [王楚然近视到在剧组抱错人了 (Wang Churan was so short-sighted that she hugged the wrong person on the set)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%BF%91%E8%A7%86%E5%88%B0%E5%9C%A8%E5%89%A7%E7%BB%84%E6%8A%B1%E9%94%99%E4%BA%BA%E4%BA%86%23) `485.0K 🔥` `+67%`
1. [人一旦对钱有了新的概念](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E5%AF%B9%E9%92%B1%E6%9C%89%E4%BA%86%E6%96%B0%E7%9A%84%E6%A6%82%E5%BF%B5%23) `477.8K 🔥` `+50%`
1. [热巴已经不是那个热巴了 (Reba is no longer the same Reba)](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E5%B7%B2%E7%BB%8F%E4%B8%8D%E6%98%AF%E9%82%A3%E4%B8%AA%E7%83%AD%E5%B7%B4%E4%BA%86%23) `474.2K 🔥` `+48%`
1. [功夫女足票房](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%23) `468.9K 🔥` `+48%`
1. [朝鲜通报腐败犯罪](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E9%80%9A%E6%8A%A5%E8%85%90%E8%B4%A5%E7%8A%AF%E7%BD%AA%23) `459.1K 🔥` `+62%`
1. [世界杯四强已确定两席](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%BC%BA%E5%B7%B2%E7%A1%AE%E5%AE%9A%E4%B8%A4%E5%B8%AD%23) `454.6K 🔥` `+45%`
1. [巴威路线东移了](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E8%B7%AF%E7%BA%BF%E4%B8%9C%E7%A7%BB%E4%BA%86%23) `453.2K 🔥` `+41%`
1. [你要知道的防汛知识点 (Things you need to know about flood prevention)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E9%98%B2%E6%B1%9B%E7%9F%A5%E8%AF%86%E7%82%B9%23) `959.0K 🔥` `-37%`
1. [万茜邀你共赴华为天生会画展](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8C%9C%E9%82%80%E4%BD%A0%E5%85%B1%E8%B5%B4%E5%8D%8E%E4%B8%BA%E5%A4%A9%E7%94%9F%E4%BC%9A%E7%94%BB%E5%B1%95%23) `609.4K 🔥` `-57%`
1. [巴威登陆地点有变 (The landing location of Bawei has changed)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E5%9C%B0%E7%82%B9%E6%9C%89%E5%8F%98%23) `574.9K 🔥` `-65%`
1. [巴威 (Bawe)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%23) `570.4K 🔥` `-36%`
1. [长沙通报体育局干部占车位事件](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E9%80%9A%E6%8A%A5%E4%BD%93%E8%82%B2%E5%B1%80%E5%B9%B2%E9%83%A8%E5%8D%A0%E8%BD%A6%E4%BD%8D%E4%BA%8B%E4%BB%B6%23) `565.3K 🔥` `-36%`
1. [主持人林海说星爷不欠你了好难看](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%8C%81%E4%BA%BA%E6%9E%97%E6%B5%B7%E8%AF%B4%E6%98%9F%E7%88%B7%E4%B8%8D%E6%AC%A0%E4%BD%A0%E4%BA%86%E5%A5%BD%E9%9A%BE%E7%9C%8B%23) `556.1K 🔥` `-59%`
1. [迪丽热巴回复周星驰的情商](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%9B%9E%E5%A4%8D%E5%91%A8%E6%98%9F%E9%A9%B0%E7%9A%84%E6%83%85%E5%95%86%23) `528.4K 🔥` `-61%`

Updated at 2026-07-11 19:13:54

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
