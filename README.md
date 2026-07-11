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

1. [你要知道的防汛知识点 (Things you need to know about flood prevention)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E9%98%B2%E6%B1%9B%E7%9F%A5%E8%AF%86%E7%82%B9%23) `1.5M 🔥` `NEW`
1. [曝余承东内部群发飙](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BD%99%E6%89%BF%E4%B8%9C%E5%86%85%E9%83%A8%E7%BE%A4%E5%8F%91%E9%A3%99%23) `1.5M 🔥` `NEW`
1. [主持人林海说星爷不欠你了好难看](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%8C%81%E4%BA%BA%E6%9E%97%E6%B5%B7%E8%AF%B4%E6%98%9F%E7%88%B7%E4%B8%8D%E6%AC%A0%E4%BD%A0%E4%BA%86%E5%A5%BD%E9%9A%BE%E7%9C%8B%23) `1.4M 🔥` `NEW`
1. [迪丽热巴回复周星驰的情商](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%9B%9E%E5%A4%8D%E5%91%A8%E6%98%9F%E9%A9%B0%E7%9A%84%E6%83%85%E5%95%86%23) `1.4M 🔥` `NEW`
1. [功夫女足二创亮出你的绝招](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E4%BA%8C%E5%88%9B%E4%BA%AE%E5%87%BA%E4%BD%A0%E7%9A%84%E7%BB%9D%E6%8B%9B%23) `1.4M 🔥` `NEW`
1. [长沙市体育局干部彭某某被停职](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E5%B8%82%E4%BD%93%E8%82%B2%E5%B1%80%E5%B9%B2%E9%83%A8%E5%BD%AD%E6%9F%90%E6%9F%90%E8%A2%AB%E5%81%9C%E8%81%8C%23) `1.2M 🔥` `NEW`
1. [长沙通报体育局干部占车位事件](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E9%80%9A%E6%8A%A5%E4%BD%93%E8%82%B2%E5%B1%80%E5%B9%B2%E9%83%A8%E5%8D%A0%E8%BD%A6%E4%BD%8D%E4%BA%8B%E4%BB%B6%23) `877.4K 🔥` `NEW`
1. [巴威最新位置](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E6%9C%80%E6%96%B0%E4%BD%8D%E7%BD%AE%23) `338.5K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `336.0K 🔥` `NEW`
1. [妈妈回应16岁儿子拍门玩闹遭捅杀](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%9416%E5%B2%81%E5%84%BF%E5%AD%90%E6%8B%8D%E9%97%A8%E7%8E%A9%E9%97%B9%E9%81%AD%E6%8D%85%E6%9D%80%23) `335.5K 🔥` `NEW`
1. [日媒拆台日本火箭只飞了11米 (Japanese media debunked the Japanese rocket that only flew 11 meters)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E6%8B%86%E5%8F%B0%E6%97%A5%E6%9C%AC%E7%81%AB%E7%AE%AD%E5%8F%AA%E9%A3%9E%E4%BA%8611%E7%B1%B3%23) `329.2K 🔥` `NEW`
1. [周柯宇学车也得一车四个人](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9F%AF%E5%AE%87%E5%AD%A6%E8%BD%A6%E4%B9%9F%E5%BE%97%E4%B8%80%E8%BD%A6%E5%9B%9B%E4%B8%AA%E4%BA%BA%23) `319.0K 🔥` `NEW`
1. [迪丽热巴辟谣增重8斤](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BE%9F%E8%B0%A3%E5%A2%9E%E9%87%8D8%E6%96%A4%23) `310.1K 🔥` `NEW`
1. [台风逼近温州雁荡山瀑布倒流](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E9%80%BC%E8%BF%91%E6%B8%A9%E5%B7%9E%E9%9B%81%E8%8D%A1%E5%B1%B1%E7%80%91%E5%B8%83%E5%80%92%E6%B5%81%23) `308.6K 🔥` `NEW`
1. [香港生殖中心9个胚胎样本错8个](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E7%94%9F%E6%AE%96%E4%B8%AD%E5%BF%839%E4%B8%AA%E8%83%9A%E8%83%8E%E6%A0%B7%E6%9C%AC%E9%94%998%E4%B8%AA%23) `304.1K 🔥` `NEW`
1. [浙江最高风速已达13级](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E6%9C%80%E9%AB%98%E9%A3%8E%E9%80%9F%E5%B7%B2%E8%BE%BE13%E7%BA%A7%23) `303.3K 🔥` `NEW`
1. [女子烫头烫到一半头发成片断裂](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%83%AB%E5%A4%B4%E7%83%AB%E5%88%B0%E4%B8%80%E5%8D%8A%E5%A4%B4%E5%8F%91%E6%88%90%E7%89%87%E6%96%AD%E8%A3%82%23) `301.2K 🔥` `NEW`
1. [金莎何润东新剧搭档演夫妻](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E4%BD%95%E6%B6%A6%E4%B8%9C%E6%96%B0%E5%89%A7%E6%90%AD%E6%A1%A3%E6%BC%94%E5%A4%AB%E5%A6%BB%23) `296.6K 🔥` `NEW`
1. [年轻时不能遇到太惊艳的领导](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E6%97%B6%E4%B8%8D%E8%83%BD%E9%81%87%E5%88%B0%E5%A4%AA%E6%83%8A%E8%89%B3%E7%9A%84%E9%A2%86%E5%AF%BC%23) `295.2K 🔥` `NEW`
1. [董思成微博改名](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%80%9D%E6%88%90%E5%BE%AE%E5%8D%9A%E6%94%B9%E5%90%8D%23) `294.2K 🔥` `NEW`
1. [王楚然近视到在剧组抱错人了 (Wang Churan was so short-sighted that she hugged the wrong person on the set)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%BF%91%E8%A7%86%E5%88%B0%E5%9C%A8%E5%89%A7%E7%BB%84%E6%8A%B1%E9%94%99%E4%BA%BA%E4%BA%86%23) `290.1K 🔥` `NEW`
1. [孕妇欲轻生冲向铁轨时被一把拉回](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E6%AC%B2%E8%BD%BB%E7%94%9F%E5%86%B2%E5%90%91%E9%93%81%E8%BD%A8%E6%97%B6%E8%A2%AB%E4%B8%80%E6%8A%8A%E6%8B%89%E5%9B%9E%23) `281.3K 🔥` `NEW`
1. [高中生遭捅杀遗言妈妈我好疼](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E9%81%AD%E6%8D%85%E6%9D%80%E9%81%97%E8%A8%80%E5%A6%88%E5%A6%88%E6%88%91%E5%A5%BD%E7%96%BC%23) `1.8M 🔥` `+324%`
1. [15万级合资燃油SUV颠覆者NX8上新 (The 150,000-class joint venture fuel SUV disruptor NX8 is launched)](https://s.weibo.com/weibo?q=%2315%E4%B8%87%E7%BA%A7%E5%90%88%E8%B5%84%E7%87%83%E6%B2%B9SUV%E9%A2%A0%E8%A6%86%E8%80%85NX8%E4%B8%8A%E6%96%B0%23) `1.5M 🔥` `+184%`
1. [巴威路线东移了](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E8%B7%AF%E7%BA%BF%E4%B8%9C%E7%A7%BB%E4%BA%86%23) `321.9K 🔥` `+55%`
1. [哈兰德外网最火恶搞视频](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A4%96%E7%BD%91%E6%9C%80%E7%81%AB%E6%81%B6%E6%90%9E%E8%A7%86%E9%A2%91%23) `314.1K 🔥` `+78%`
1. [朝鲜通报腐败犯罪](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E9%80%9A%E6%8A%A5%E8%85%90%E8%B4%A5%E7%8A%AF%E7%BD%AA%23) `284.2K 🔥` `+80%`
1. [巴威](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%23) `896.1K 🔥`
1. [Jennie神图诞生了](https://s.weibo.com/weibo?q=%23Jennie%E7%A5%9E%E5%9B%BE%E8%AF%9E%E7%94%9F%E4%BA%86%23) `341.2K 🔥`
1. [纽约前辉瑞大楼承重柱弯曲如面条 (Load-bearing columns of former Pfizer building in New York bent like noodles)](https://s.weibo.com/weibo?q=%23%E7%BA%BD%E7%BA%A6%E5%89%8D%E8%BE%89%E7%91%9E%E5%A4%A7%E6%A5%BC%E6%89%BF%E9%87%8D%E6%9F%B1%E5%BC%AF%E6%9B%B2%E5%A6%82%E9%9D%A2%E6%9D%A1%23) `327.8K 🔥`
1. [人一旦对钱有了新的概念](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E5%AF%B9%E9%92%B1%E6%9C%89%E4%BA%86%E6%96%B0%E7%9A%84%E6%A6%82%E5%BF%B5%23) `318.2K 🔥`
1. [曝浪姐七公队长范玮琪李小冉](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B5%AA%E5%A7%90%E4%B8%83%E5%85%AC%E9%98%9F%E9%95%BF%E8%8C%83%E7%8E%AE%E7%90%AA%E6%9D%8E%E5%B0%8F%E5%86%89%23) `312.0K 🔥`
1. [杜华说王一博很幸运遇到我 (Du Hua said Wang Yibo was lucky to meet me)](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E8%AF%B4%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%BE%88%E5%B9%B8%E8%BF%90%E9%81%87%E5%88%B0%E6%88%91%23) `300.2K 🔥`
1. [台风巴威又睁眼了 (Typhoon Bavi opens its eyes again)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%8F%88%E7%9D%81%E7%9C%BC%E4%BA%86%23) `298.7K 🔥`
1. [北京WBG对战FPX.ZQ](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%ACWBG%E5%AF%B9%E6%88%98FPX.ZQ%23) `288.6K 🔥`
1. [宋威龙张婧仪从不熟到熟透](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E4%BB%8E%E4%B8%8D%E7%86%9F%E5%88%B0%E7%86%9F%E9%80%8F%23) `287.8K 🔥`
1. [小米回应为什么做增程](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BB%80%E4%B9%88%E5%81%9A%E5%A2%9E%E7%A8%8B%23) `286.3K 🔥`
1. [巴威登陆地点有变 (The landing location of Bawei has changed)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E5%9C%B0%E7%82%B9%E6%9C%89%E5%8F%98%23) `1.6M 🔥` `-21%`
1. [内马尔度假遭痛批](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E5%BA%A6%E5%81%87%E9%81%AD%E7%97%9B%E6%89%B9%23) `341.8K 🔥` `-40%`
1. [周星驰官宣星女郎雪野](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%AE%98%E5%AE%A3%E6%98%9F%E5%A5%B3%E9%83%8E%E9%9B%AA%E9%87%8E%23) `339.6K 🔥` `-64%`
1. [金鹤龙给白鹿化了一整季跑男](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%A4%E9%BE%99%E7%BB%99%E7%99%BD%E9%B9%BF%E5%8C%96%E4%BA%86%E4%B8%80%E6%95%B4%E5%AD%A3%E8%B7%91%E7%94%B7%23) `332.6K 🔥` `-58%`
1. [功夫女足三观](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E4%B8%89%E8%A7%82%23) `332.0K 🔥` `-23%`
1. [发现大家赚钱的思路好清晰](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%A4%A7%E5%AE%B6%E8%B5%9A%E9%92%B1%E7%9A%84%E6%80%9D%E8%B7%AF%E5%A5%BD%E6%B8%85%E6%99%B0%23) `330.5K 🔥` `-58%`
1. [正常的性生活频率是多少 (What is the normal frequency of sexual intercourse?)](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%B8%B8%E7%9A%84%E6%80%A7%E7%94%9F%E6%B4%BB%E9%A2%91%E7%8E%87%E6%98%AF%E5%A4%9A%E5%B0%91%23) `325.1K 🔥` `-21%`
1. [关晓彤的健康餐又上新了](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%9A%84%E5%81%A5%E5%BA%B7%E9%A4%90%E5%8F%88%E4%B8%8A%E6%96%B0%E4%BA%86%23) `324.6K 🔥` `-33%`
1. [热巴已经不是那个热巴了 (Reba is no longer the same Reba)](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E5%B7%B2%E7%BB%8F%E4%B8%8D%E6%98%AF%E9%82%A3%E4%B8%AA%E7%83%AD%E5%B7%B4%E4%BA%86%23) `321.4K 🔥` `-30%`
1. [功夫女足票房](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%23) `315.9K 🔥` `-69%`
1. [世界杯四强已确定两席](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%BC%BA%E5%B7%B2%E7%A1%AE%E5%AE%9A%E4%B8%A4%E5%B8%AD%23) `314.2K 🔥` `-37%`
1. [杜华放了黄明昊的例子](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E6%94%BE%E4%BA%86%E9%BB%84%E6%98%8E%E6%98%8A%E7%9A%84%E4%BE%8B%E5%AD%90%23) `306.7K 🔥` `-22%`
1. [新娘结婚睡过头醒来看见满屋人 (Bride overslept during wedding and woke up to see a room full of people)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E7%BB%93%E5%A9%9A%E7%9D%A1%E8%BF%87%E5%A4%B4%E9%86%92%E6%9D%A5%E7%9C%8B%E8%A7%81%E6%BB%A1%E5%B1%8B%E4%BA%BA%23) `305.8K 🔥` `-35%`
1. [巴威登陆仅剩不到12小时](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E4%BB%85%E5%89%A9%E4%B8%8D%E5%88%B012%E5%B0%8F%E6%97%B6%23) `292.3K 🔥` `-66%`
1. [无人机吊起2人神图系AI合成](https://s.weibo.com/weibo?q=%23%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%90%8A%E8%B5%B72%E4%BA%BA%E7%A5%9E%E5%9B%BE%E7%B3%BBAI%E5%90%88%E6%88%90%23) `282.6K 🔥` `-31%`

Updated at 2026-07-11 17:59:44

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
