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

1. [巴威登陆地点有变 (The landing location of Bawei has changed)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E5%9C%B0%E7%82%B9%E6%9C%89%E5%8F%98%23) `3.0M 🔥` `NEW`
1. [17地暴雨](https://s.weibo.com/weibo?q=%2317%E5%9C%B0%E6%9A%B4%E9%9B%A8%23) `941.7K 🔥` `NEW`
1. [杜华回应半个娱乐圈艺人失业](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E5%9B%9E%E5%BA%94%E5%8D%8A%E4%B8%AA%E5%A8%B1%E4%B9%90%E5%9C%88%E8%89%BA%E4%BA%BA%E5%A4%B1%E4%B8%9A%23) `830.2K 🔥` `NEW`
1. [周星驰官宣星女郎雪野](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%AE%98%E5%AE%A3%E6%98%9F%E5%A5%B3%E9%83%8E%E9%9B%AA%E9%87%8E%23) `777.9K 🔥` `NEW`
1. [内马尔度假遭痛批](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E5%BA%A6%E5%81%87%E9%81%AD%E7%97%9B%E6%89%B9%23) `577.8K 🔥` `NEW`
1. [功夫女足 好看](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%20%E5%A5%BD%E7%9C%8B%23) `568.4K 🔥` `NEW`
1. [迪丽热巴第4部破亿电影](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AC%AC4%E9%83%A8%E7%A0%B4%E4%BA%BF%E7%94%B5%E5%BD%B1%23) `563.3K 🔥` `NEW`
1. [丁程鑫问邓恩熙下个组多久进](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E9%97%AE%E9%82%93%E6%81%A9%E7%86%99%E4%B8%8B%E4%B8%AA%E7%BB%84%E5%A4%9A%E4%B9%85%E8%BF%9B%23) `559.3K 🔥` `NEW`
1. [男子把充话费当性暗示夜闯女邻居家](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8A%8A%E5%85%85%E8%AF%9D%E8%B4%B9%E5%BD%93%E6%80%A7%E6%9A%97%E7%A4%BA%E5%A4%9C%E9%97%AF%E5%A5%B3%E9%82%BB%E5%B1%85%E5%AE%B6%23) `558.5K 🔥` `NEW`
1. [蔡依林晚上演唱会早上通知延期](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E6%99%9A%E4%B8%8A%E6%BC%94%E5%94%B1%E4%BC%9A%E6%97%A9%E4%B8%8A%E9%80%9A%E7%9F%A5%E5%BB%B6%E6%9C%9F%23) `553.8K 🔥` `NEW`
1. [纽约前辉瑞大楼承重柱弯曲如面条 (Load-bearing columns of former Pfizer building in New York bent like noodles)](https://s.weibo.com/weibo?q=%23%E7%BA%BD%E7%BA%A6%E5%89%8D%E8%BE%89%E7%91%9E%E5%A4%A7%E6%A5%BC%E6%89%BF%E9%87%8D%E6%9F%B1%E5%BC%AF%E6%9B%B2%E5%A6%82%E9%9D%A2%E6%9D%A1%23) `552.0K 🔥` `NEW`
1. [长沙婆婆硬核撑腰儿媳](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E5%A9%86%E5%A9%86%E7%A1%AC%E6%A0%B8%E6%92%91%E8%85%B0%E5%84%BF%E5%AA%B3%23) `549.0K 🔥` `NEW`
1. [无人机吊起2人神图系AI合成](https://s.weibo.com/weibo?q=%23%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%90%8A%E8%B5%B72%E4%BA%BA%E7%A5%9E%E5%9B%BE%E7%B3%BBAI%E5%90%88%E6%88%90%23) `547.4K 🔥` `NEW`
1. [王俊凯蓝婚纱立麦](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%93%9D%E5%A9%9A%E7%BA%B1%E7%AB%8B%E9%BA%A6%23) `536.9K 🔥` `NEW`
1. [杜华说王一博很幸运遇到我](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E8%AF%B4%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%BE%88%E5%B9%B8%E8%BF%90%E9%81%87%E5%88%B0%E6%88%91%23) `535.4K 🔥` `NEW`
1. [发现大家赚钱的思路好清晰](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%A4%A7%E5%AE%B6%E8%B5%9A%E9%92%B1%E7%9A%84%E6%80%9D%E8%B7%AF%E5%A5%BD%E6%B8%85%E6%99%B0%23) `533.2K 🔥` `NEW`
1. [功夫女足 星爷味](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%20%E6%98%9F%E7%88%B7%E5%91%B3%23) `528.3K 🔥` `NEW`
1. [新娘结婚当天一觉睡到11点](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E7%BB%93%E5%A9%9A%E5%BD%93%E5%A4%A9%E4%B8%80%E8%A7%89%E7%9D%A1%E5%88%B011%E7%82%B9%23) `525.2K 🔥` `NEW`
1. [小米澎程续航](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E7%BB%AD%E8%88%AA%23) `522.5K 🔥` `NEW`
1. [突然意识到这是人生最轻松的时候](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E8%BF%99%E6%98%AF%E4%BA%BA%E7%94%9F%E6%9C%80%E8%BD%BB%E6%9D%BE%E7%9A%84%E6%97%B6%E5%80%99%23) `512.2K 🔥` `NEW`
1. [迪丽热巴撞脸loopy表情包 (Dilireba hits the face with loopy expression pack)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%92%9E%E8%84%B8loopy%E8%A1%A8%E6%83%85%E5%8C%85%23) `510.7K 🔥` `NEW`
1. [新娘结婚睡过头醒来看见满屋人](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E7%BB%93%E5%A9%9A%E7%9D%A1%E8%BF%87%E5%A4%B4%E9%86%92%E6%9D%A5%E7%9C%8B%E8%A7%81%E6%BB%A1%E5%B1%8B%E4%BA%BA%23) `504.8K 🔥` `NEW`
1. [台风天钱塘江惊现罕见蝴蝶潮](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%A4%A9%E9%92%B1%E5%A1%98%E6%B1%9F%E6%83%8A%E7%8E%B0%E7%BD%95%E8%A7%81%E8%9D%B4%E8%9D%B6%E6%BD%AE%23) `499.5K 🔥` `NEW`
1. [邹市明来救孙杨了](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E6%9D%A5%E6%95%91%E5%AD%99%E6%9D%A8%E4%BA%86%23) `496.4K 🔥` `NEW`
1. [儿子出轨替儿媳讨说法婆婆发声](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%87%BA%E8%BD%A8%E6%9B%BF%E5%84%BF%E5%AA%B3%E8%AE%A8%E8%AF%B4%E6%B3%95%E5%A9%86%E5%A9%86%E5%8F%91%E5%A3%B0%23) `489.9K 🔥` `NEW`
1. [爷爷追星把全家姓改了](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E8%BF%BD%E6%98%9F%E6%8A%8A%E5%85%A8%E5%AE%B6%E5%A7%93%E6%94%B9%E4%BA%86%23) `489.6K 🔥` `NEW`
1. [浙江象山海滩掀起4米高大浪](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E8%B1%A1%E5%B1%B1%E6%B5%B7%E6%BB%A9%E6%8E%80%E8%B5%B74%E7%B1%B3%E9%AB%98%E5%A4%A7%E6%B5%AA%23) `486.5K 🔥` `NEW`
1. [我40岁了我爸还当我4岁](https://s.weibo.com/weibo?q=%23%E6%88%9140%E5%B2%81%E4%BA%86%E6%88%91%E7%88%B8%E8%BF%98%E5%BD%93%E6%88%914%E5%B2%81%23) `482.1K 🔥` `NEW`
1. [霉霉婚后首现身](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E5%90%8E%E9%A6%96%E7%8E%B0%E8%BA%AB%23) `479.0K 🔥` `NEW`
1. [台风巴威十级风圈抵达浙江](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%8D%81%E7%BA%A7%E9%A3%8E%E5%9C%88%E6%8A%B5%E8%BE%BE%E6%B5%99%E6%B1%9F%23) `477.7K 🔥` `NEW`
1. [台风巴威 (Typhoon Bavi)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%23) `473.8K 🔥` `NEW`
1. [杨瀚森左手劈扣](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E5%B7%A6%E6%89%8B%E5%8A%88%E6%89%A3%23) `468.1K 🔥` `NEW`
1. [电科院实控人套现715万入籍加拿大](https://s.weibo.com/weibo?q=%23%E7%94%B5%E7%A7%91%E9%99%A2%E5%AE%9E%E6%8E%A7%E4%BA%BA%E5%A5%97%E7%8E%B0715%E4%B8%87%E5%85%A5%E7%B1%8D%E5%8A%A0%E6%8B%BF%E5%A4%A7%23) `466.8K 🔥` `NEW`
1. [阿根廷vs瑞士](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7vs%E7%91%9E%E5%A3%AB%23) `462.3K 🔥` `NEW`
1. [哈兰德和偷拍者互拍](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%92%8C%E5%81%B7%E6%8B%8D%E8%80%85%E4%BA%92%E6%8B%8D%23) `575.5K 🔥` `+78%`
1. [李钟硕恋爱期间与女生双手插兜](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%92%9F%E7%A1%95%E6%81%8B%E7%88%B1%E6%9C%9F%E9%97%B4%E4%B8%8E%E5%A5%B3%E7%94%9F%E5%8F%8C%E6%89%8B%E6%8F%92%E5%85%9C%23) `572.5K 🔥` `+79%`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `544.2K 🔥` `+70%`
1. [巴威预计凌晨在浙江登陆](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E9%A2%84%E8%AE%A1%E5%87%8C%E6%99%A8%E5%9C%A8%E6%B5%99%E6%B1%9F%E7%99%BB%E9%99%86%23) `539.9K 🔥` `+80%`
1. [亚马尔两次0球0助当选最佳](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E4%B8%A4%E6%AC%A10%E7%90%830%E5%8A%A9%E5%BD%93%E9%80%89%E6%9C%80%E4%BD%B3%23) `531.0K 🔥` `+87%`
1. [飞机舷窗炸裂男子头部被吸出窗外](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E6%9C%BA%E8%88%B7%E7%AA%97%E7%82%B8%E8%A3%82%E7%94%B7%E5%AD%90%E5%A4%B4%E9%83%A8%E8%A2%AB%E5%90%B8%E5%87%BA%E7%AA%97%E5%A4%96%23) `519.5K 🔥` `+78%`
1. [欧盟拿北京鸭开刀 (EU takes action on Beijing duck)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E7%9B%9F%E6%8B%BF%E5%8C%97%E4%BA%AC%E9%B8%AD%E5%BC%80%E5%88%80%23) `516.4K 🔥` `+69%`
1. [冉莹颖三个儿子不同姓](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E4%B8%89%E4%B8%AA%E5%84%BF%E5%AD%90%E4%B8%8D%E5%90%8C%E5%A7%93%23) `503.1K 🔥` `+63%`
1. [王俊凯裤子脏成这样](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%A3%A4%E5%AD%90%E8%84%8F%E6%88%90%E8%BF%99%E6%A0%B7%23) `494.8K 🔥` `+69%`
1. [看广西洪灾中的救援硬核科技](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%B9%BF%E8%A5%BF%E6%B4%AA%E7%81%BE%E4%B8%AD%E7%9A%84%E6%95%91%E6%8F%B4%E7%A1%AC%E6%A0%B8%E7%A7%91%E6%8A%80%23) `1.7M 🔥`
1. [功夫女足票房](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%23) `1.6M 🔥`
1. [10省市大暴雨特大暴雨](https://s.weibo.com/weibo?q=%2310%E7%9C%81%E5%B8%82%E5%A4%A7%E6%9A%B4%E9%9B%A8%E7%89%B9%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `566.6K 🔥`
1. [C罗更新葡萄牙欧洲杯夺冠照](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%9B%B4%E6%96%B0%E8%91%A1%E8%90%84%E7%89%99%E6%AC%A7%E6%B4%B2%E6%9D%AF%E5%A4%BA%E5%86%A0%E7%85%A7%23) `471.5K 🔥`
1. [台风巴威又睁眼了 (Typhoon Bavi opens its eyes again)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%8F%88%E7%9D%81%E7%9C%BC%E4%BA%86%23) `1.8M 🔥` `-86%`
1. [第一次被同事带的饭震惊到](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A2%AB%E5%90%8C%E4%BA%8B%E5%B8%A6%E7%9A%84%E9%A5%AD%E9%9C%87%E6%83%8A%E5%88%B0%23) `578.3K 🔥` `-26%`
1. [电视剧公主官宣](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%E5%85%AC%E4%B8%BB%E5%AE%98%E5%AE%A3%23) `508.5K 🔥` `-43%`

Updated at 2026-07-11 14:37:32

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
