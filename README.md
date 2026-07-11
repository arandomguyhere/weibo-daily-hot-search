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

1. [启境GT7提车即享华为乾崑ADS5 (Qijing GT7 can enjoy Huawei Qiankun ADS5 when you pick up the car.)](https://s.weibo.com/weibo?q=%23%E5%90%AF%E5%A2%83GT7%E6%8F%90%E8%BD%A6%E5%8D%B3%E4%BA%AB%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91ADS5%23) `938.5K 🔥` `NEW`
1. [巴威登陆仅剩不到12小时](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E4%BB%85%E5%89%A9%E4%B8%8D%E5%88%B012%E5%B0%8F%E6%97%B6%23) `863.2K 🔥` `NEW`
1. [金鹤龙给白鹿化了一整季跑男](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%A4%E9%BE%99%E7%BB%99%E7%99%BD%E9%B9%BF%E5%8C%96%E4%BA%86%E4%B8%80%E6%95%B4%E5%AD%A3%E8%B7%91%E7%94%B7%23) `796.5K 🔥` `NEW`
1. [巴威](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%23) `780.0K 🔥` `NEW`
1. [世界杯四强已确定两席](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%BC%BA%E5%B7%B2%E7%A1%AE%E5%AE%9A%E4%B8%A4%E5%B8%AD%23) `500.5K 🔥` `NEW`
1. [迪丽热巴路演状态](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B7%AF%E6%BC%94%E7%8A%B6%E6%80%81%23) `490.3K 🔥` `NEW`
1. [关晓彤的健康餐又上新了](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%9A%84%E5%81%A5%E5%BA%B7%E9%A4%90%E5%8F%88%E4%B8%8A%E6%96%B0%E4%BA%86%23) `481.7K 🔥` `NEW`
1. [热巴已经不是那个热巴了](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E5%B7%B2%E7%BB%8F%E4%B8%8D%E6%98%AF%E9%82%A3%E4%B8%AA%E7%83%AD%E5%B7%B4%E4%BA%86%23) `459.4K 🔥` `NEW`
1. [功夫女足三观](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E4%B8%89%E8%A7%82%23) `429.2K 🔥` `NEW`
1. [高中生遭捅杀遗言妈妈我好疼](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E9%81%AD%E6%8D%85%E6%9D%80%E9%81%97%E8%A8%80%E5%A6%88%E5%A6%88%E6%88%91%E5%A5%BD%E7%96%BC%23) `421.0K 🔥` `NEW`
1. [正常的性生活频率是多少 (What is the normal frequency of sexual intercourse?)](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%B8%B8%E7%9A%84%E6%80%A7%E7%94%9F%E6%B4%BB%E9%A2%91%E7%8E%87%E6%98%AF%E5%A4%9A%E5%B0%91%23) `411.2K 🔥` `NEW`
1. [Jennie神图诞生了](https://s.weibo.com/weibo?q=%23Jennie%E7%A5%9E%E5%9B%BE%E8%AF%9E%E7%94%9F%E4%BA%86%23) `411.1K 🔥` `NEW`
1. [杜华放了黄明昊的例子](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E6%94%BE%E4%BA%86%E9%BB%84%E6%98%8E%E6%98%8A%E7%9A%84%E4%BE%8B%E5%AD%90%23) `394.5K 🔥` `NEW`
1. [蔡依林早上起床才得知延期](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E6%97%A9%E4%B8%8A%E8%B5%B7%E5%BA%8A%E6%89%8D%E5%BE%97%E7%9F%A5%E5%BB%B6%E6%9C%9F%23) `355.9K 🔥` `NEW`
1. [北京WBG对战FPX.ZQ](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%ACWBG%E5%AF%B9%E6%88%98FPX.ZQ%23) `355.8K 🔥` `NEW`
1. [曝浪姐七公队长范玮琪李小冉](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B5%AA%E5%A7%90%E4%B8%83%E5%85%AC%E9%98%9F%E9%95%BF%E8%8C%83%E7%8E%AE%E7%90%AA%E6%9D%8E%E5%B0%8F%E5%86%89%23) `355.1K 🔥` `NEW`
1. [仅用0秒就接受了自己的新身份](https://s.weibo.com/weibo?q=%23%E4%BB%85%E7%94%A80%E7%A7%92%E5%B0%B1%E6%8E%A5%E5%8F%97%E4%BA%86%E8%87%AA%E5%B7%B1%E7%9A%84%E6%96%B0%E8%BA%AB%E4%BB%BD%23) `354.6K 🔥` `NEW`
1. [宋威龙张婧仪从不熟到熟透](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E4%BB%8E%E4%B8%8D%E7%86%9F%E5%88%B0%E7%86%9F%E9%80%8F%23) `350.8K 🔥` `NEW`
1. [小米回应为什么做增程](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BB%80%E4%B9%88%E5%81%9A%E5%A2%9E%E7%A8%8B%23) `335.9K 🔥` `NEW`
1. [人一旦对钱有了新的概念](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E5%AF%B9%E9%92%B1%E6%9C%89%E4%BA%86%E6%96%B0%E7%9A%84%E6%A6%82%E5%BF%B5%23) `332.6K 🔥` `NEW`
1. [Google工程师26分钟手搓了一个APP (Google engineers created an APP in 26 minutes)](https://s.weibo.com/weibo?q=%23Google%E5%B7%A5%E7%A8%8B%E5%B8%8826%E5%88%86%E9%92%9F%E6%89%8B%E6%90%93%E4%BA%86%E4%B8%80%E4%B8%AAAPP%23) `299.3K 🔥` `NEW`
1. [巴威路线东移了](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E8%B7%AF%E7%BA%BF%E4%B8%9C%E7%A7%BB%E4%BA%86%23) `207.2K 🔥` `NEW`
1. [哈兰德外网最火恶搞视频](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A4%96%E7%BD%91%E6%9C%80%E7%81%AB%E6%81%B6%E6%90%9E%E8%A7%86%E9%A2%91%23) `176.1K 🔥` `NEW`
1. [深圳偶遇许嵩冯禧逛街](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%81%B6%E9%81%87%E8%AE%B8%E5%B5%A9%E5%86%AF%E7%A6%A7%E9%80%9B%E8%A1%97%23) `173.8K 🔥` `NEW`
1. [台风巴威又回14级](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%8F%88%E5%9B%9E14%E7%BA%A7%23) `163.1K 🔥` `NEW`
1. [四川乐山强降雨引发山洪](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E4%B9%90%E5%B1%B1%E5%BC%BA%E9%99%8D%E9%9B%A8%E5%BC%95%E5%8F%91%E5%B1%B1%E6%B4%AA%23) `158.4K 🔥` `NEW`
1. [朝鲜通报腐败犯罪](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E9%80%9A%E6%8A%A5%E8%85%90%E8%B4%A5%E7%8A%AF%E7%BD%AA%23) `158.2K 🔥` `NEW`
1. [周深为生米对酱油下手了 (Zhou Shen took action on soy sauce to make rice.)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E4%B8%BA%E7%94%9F%E7%B1%B3%E5%AF%B9%E9%85%B1%E6%B2%B9%E4%B8%8B%E6%89%8B%E4%BA%86%23) `785.1K 🔥` `+35%`
1. [发现大家赚钱的思路好清晰](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%A4%A7%E5%AE%B6%E8%B5%9A%E9%92%B1%E7%9A%84%E6%80%9D%E8%B7%AF%E5%A5%BD%E6%B8%85%E6%99%B0%23) `784.4K 🔥` `+47%`
1. [周星驰官宣星女郎雪野](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%AE%98%E5%AE%A3%E6%98%9F%E5%A5%B3%E9%83%8E%E9%9B%AA%E9%87%8E%23) `937.2K 🔥`
1. [内马尔度假遭痛批](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E5%BA%A6%E5%81%87%E9%81%AD%E7%97%9B%E6%89%B9%23) `570.3K 🔥`
1. [新娘结婚睡过头醒来看见满屋人 (Bride overslept during wedding and woke up to see a room full of people)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E7%BB%93%E5%A9%9A%E7%9D%A1%E8%BF%87%E5%A4%B4%E9%86%92%E6%9D%A5%E7%9C%8B%E8%A7%81%E6%BB%A1%E5%B1%8B%E4%BA%BA%23) `467.0K 🔥`
1. [台风巴威十级风圈抵达浙江](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%8D%81%E7%BA%A7%E9%A3%8E%E5%9C%88%E6%8A%B5%E8%BE%BE%E6%B5%99%E6%B1%9F%23) `432.6K 🔥`
1. [巴威登陆地点有变 (The landing location of Bawei has changed)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E5%9C%B0%E7%82%B9%E6%9C%89%E5%8F%98%23) `2.1M 🔥` `-30%`
1. [功夫女足票房](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%23) `1.0M 🔥` `-36%`
1. [看广西洪灾中的救援硬核科技](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%B9%BF%E8%A5%BF%E6%B4%AA%E7%81%BE%E4%B8%AD%E7%9A%84%E6%95%91%E6%8F%B4%E7%A1%AC%E6%A0%B8%E7%A7%91%E6%8A%80%23) `1.0M 🔥` `-40%`
1. [功夫女足 好看](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%20%E5%A5%BD%E7%9C%8B%23) `412.5K 🔥` `-27%`
1. [无人机吊起2人神图系AI合成](https://s.weibo.com/weibo?q=%23%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%90%8A%E8%B5%B72%E4%BA%BA%E7%A5%9E%E5%9B%BE%E7%B3%BBAI%E5%90%88%E6%88%90%23) `411.3K 🔥` `-25%`
1. [纽约前辉瑞大楼承重柱弯曲如面条 (Load-bearing columns of former Pfizer building in New York bent like noodles)](https://s.weibo.com/weibo?q=%23%E7%BA%BD%E7%BA%A6%E5%89%8D%E8%BE%89%E7%91%9E%E5%A4%A7%E6%A5%BC%E6%89%BF%E9%87%8D%E6%9F%B1%E5%BC%AF%E6%9B%B2%E5%A6%82%E9%9D%A2%E6%9D%A1%23) `411.2K 🔥` `-26%`
1. [台风巴威又睁眼了 (Typhoon Bavi opens its eyes again)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%8F%88%E7%9D%81%E7%9C%BC%E4%BA%86%23) `374.0K 🔥` `-79%`
1. [杜华说王一博很幸运遇到我](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E8%AF%B4%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%BE%88%E5%B9%B8%E8%BF%90%E9%81%87%E5%88%B0%E6%88%91%23) `355.4K 🔥` `-34%`
1. [飞机舷窗炸裂男子头部被吸出窗外](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E6%9C%BA%E8%88%B7%E7%AA%97%E7%82%B8%E8%A3%82%E7%94%B7%E5%AD%90%E5%A4%B4%E9%83%A8%E8%A2%AB%E5%90%B8%E5%87%BA%E7%AA%97%E5%A4%96%23) `355.2K 🔥` `-32%`
1. [17地暴雨](https://s.weibo.com/weibo?q=%2317%E5%9C%B0%E6%9A%B4%E9%9B%A8%23) `354.8K 🔥` `-62%`
1. [蔡依林晚上演唱会早上通知延期](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E6%99%9A%E4%B8%8A%E6%BC%94%E5%94%B1%E4%BC%9A%E6%97%A9%E4%B8%8A%E9%80%9A%E7%9F%A5%E5%BB%B6%E6%9C%9F%23) `344.2K 🔥` `-38%`
1. [邹市明来救孙杨了 (Zou Shiming came to save Sun Yang)](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E6%9D%A5%E6%95%91%E5%AD%99%E6%9D%A8%E4%BA%86%23) `285.3K 🔥` `-43%`
1. [突然意识到这是人生最轻松的时候](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E8%BF%99%E6%98%AF%E4%BA%BA%E7%94%9F%E6%9C%80%E8%BD%BB%E6%9D%BE%E7%9A%84%E6%97%B6%E5%80%99%23) `223.6K 🔥` `-56%`
1. [王俊凯蓝婚纱立麦](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%93%9D%E5%A9%9A%E7%BA%B1%E7%AB%8B%E9%BA%A6%23) `220.1K 🔥` `-59%`
1. [10省市大暴雨特大暴雨](https://s.weibo.com/weibo?q=%2310%E7%9C%81%E5%B8%82%E5%A4%A7%E6%9A%B4%E9%9B%A8%E7%89%B9%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `198.4K 🔥` `-65%`
1. [丁程鑫问邓恩熙下个组多久进](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E9%97%AE%E9%82%93%E6%81%A9%E7%86%99%E4%B8%8B%E4%B8%AA%E7%BB%84%E5%A4%9A%E4%B9%85%E8%BF%9B%23) `191.3K 🔥` `-66%`
1. [儿子出轨替儿媳讨说法婆婆发声](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%87%BA%E8%BD%A8%E6%9B%BF%E5%84%BF%E5%AA%B3%E8%AE%A8%E8%AF%B4%E6%B3%95%E5%A9%86%E5%A9%86%E5%8F%91%E5%A3%B0%23) `167.1K 🔥` `-66%`
1. [第一次被同事带的饭震惊到](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A2%AB%E5%90%8C%E4%BA%8B%E5%B8%A6%E7%9A%84%E9%A5%AD%E9%9C%87%E6%83%8A%E5%88%B0%23) `161.6K 🔥` `-72%`
1. [小米澎程续航](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E7%BB%AD%E8%88%AA%23) `157.2K 🔥` `-70%`

Updated at 2026-07-11 16:26:27

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
