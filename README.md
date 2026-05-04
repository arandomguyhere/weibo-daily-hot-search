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

1. [浏阳烟花厂爆炸几百斤石头被炸飞 (Hundreds of kilograms of rocks were blown away in an explosion at Liuyang Fireworks Factory)](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E5%8E%82%E7%88%86%E7%82%B8%E5%87%A0%E7%99%BE%E6%96%A4%E7%9F%B3%E5%A4%B4%E8%A2%AB%E7%82%B8%E9%A3%9E%23) `1.5M 🔥` `NEW`
1. [国乒急需下一个樊振东王楚钦](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E6%80%A5%E9%9C%80%E4%B8%8B%E4%B8%80%E4%B8%AA%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `853.9K 🔥` `NEW`
1. [五一特色专列串起万里山河](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E7%89%B9%E8%89%B2%E4%B8%93%E5%88%97%E4%B8%B2%E8%B5%B7%E4%B8%87%E9%87%8C%E5%B1%B1%E6%B2%B3%23) `836.2K 🔥` `NEW`
1. [严浩翔哭了](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%93%AD%E4%BA%86%23) `832.2K 🔥` `NEW`
1. [小时候感觉用杯子喝牛奶的都是主角](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E6%84%9F%E8%A7%89%E7%94%A8%E6%9D%AF%E5%AD%90%E5%96%9D%E7%89%9B%E5%A5%B6%E7%9A%84%E9%83%BD%E6%98%AF%E4%B8%BB%E8%A7%92%23) `826.0K 🔥` `NEW`
1. [女子怀孕3个月确诊肺癌终止妊娠](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%953%E4%B8%AA%E6%9C%88%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%99%8C%E7%BB%88%E6%AD%A2%E5%A6%8A%E5%A8%A0%23) `774.6K 🔥` `NEW`
1. [二十四节气紫林寻味](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E5%8D%81%E5%9B%9B%E8%8A%82%E6%B0%94%E7%B4%AB%E6%9E%97%E5%AF%BB%E5%91%B3%23) `753.4K 🔥` `NEW`
1. [杨紫送谢娜演唱会花篮](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E9%80%81%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E8%8A%B1%E7%AF%AE%23) `708.4K 🔥` `NEW`
1. [红日](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%97%A5%23) `548.1K 🔥` `NEW`
1. [世乒赛](https://s.weibo.com/weibo?q=%23%E4%B8%96%E4%B9%92%E8%B5%9B%23) `462.2K 🔥` `NEW`
1. [宇树机器人在美买票坐飞机 (Yushu robot buys tickets to fly in the United States)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%9C%A8%E7%BE%8E%E4%B9%B0%E7%A5%A8%E5%9D%90%E9%A3%9E%E6%9C%BA%23) `462.0K 🔥` `NEW`
1. [豆包 付费](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%20%E4%BB%98%E8%B4%B9%23) `445.3K 🔥` `NEW`
1. [红果VIP 付费](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9CVIP%20%E4%BB%98%E8%B4%B9%23) `435.4K 🔥` `NEW`
1. [难听](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E5%90%AC%23) `425.0K 🔥` `NEW`
1. [曾沛慈范玮琪合照](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E8%8C%83%E7%8E%AE%E7%90%AA%E5%90%88%E7%85%A7%23) `414.8K 🔥` `NEW`
1. [香港酒店女子坠亡砸中女路人](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E9%85%92%E5%BA%97%E5%A5%B3%E5%AD%90%E5%9D%A0%E4%BA%A1%E7%A0%B8%E4%B8%AD%E5%A5%B3%E8%B7%AF%E4%BA%BA%23) `406.9K 🔥` `NEW`
1. [马嘉祺破音](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E7%A0%B4%E9%9F%B3%23) `397.3K 🔥` `NEW`
1. [留德男子多次迷奸女友并记录传播](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%BE%B7%E7%94%B7%E5%AD%90%E5%A4%9A%E6%AC%A1%E8%BF%B7%E5%A5%B8%E5%A5%B3%E5%8F%8B%E5%B9%B6%E8%AE%B0%E5%BD%95%E4%BC%A0%E6%92%AD%23) `389.3K 🔥` `NEW`
1. [吴宜泽vs墨菲](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BDvs%E5%A2%A8%E8%8F%B2%23) `380.7K 🔥` `NEW`
1. [卧室巨星](https://s.weibo.com/weibo?q=%23%E5%8D%A7%E5%AE%A4%E5%B7%A8%E6%98%9F%23) `373.1K 🔥` `NEW`
1. [中国向联合国发出警告 (China issues warning to United Nations)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%90%91%E8%81%94%E5%90%88%E5%9B%BD%E5%8F%91%E5%87%BA%E8%AD%A6%E5%91%8A%23) `330.1K 🔥` `NEW`
1. [金价银价又大跌了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%93%B6%E4%BB%B7%E5%8F%88%E5%A4%A7%E8%B7%8C%E4%BA%86%23) `329.8K 🔥` `NEW`
1. [刘耀文拿道具布擦脸上的雨](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%8B%BF%E9%81%93%E5%85%B7%E5%B8%83%E6%93%A6%E8%84%B8%E4%B8%8A%E7%9A%84%E9%9B%A8%23) `306.0K 🔥` `NEW`
1. [男主播嘲讽女子40码鞋被永久除名](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%B8%BB%E6%92%AD%E5%98%B2%E8%AE%BD%E5%A5%B3%E5%AD%9040%E7%A0%81%E9%9E%8B%E8%A2%AB%E6%B0%B8%E4%B9%85%E9%99%A4%E5%90%8D%23) `284.5K 🔥` `NEW`
1. [父亲长期室内吸烟16岁女儿肺癌](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E9%95%BF%E6%9C%9F%E5%AE%A4%E5%86%85%E5%90%B8%E7%83%9F16%E5%B2%81%E5%A5%B3%E5%84%BF%E8%82%BA%E7%99%8C%23) `267.2K 🔥` `NEW`
1. [终于懂了朝花夕拾的力量](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%87%82%E4%BA%86%E6%9C%9D%E8%8A%B1%E5%A4%95%E6%8B%BE%E7%9A%84%E5%8A%9B%E9%87%8F%23) `227.1K 🔥` `NEW`
1. [泸定地震](https://s.weibo.com/weibo?q=%23%E6%B3%B8%E5%AE%9A%E5%9C%B0%E9%9C%87%23) `201.5K 🔥` `NEW`
1. [邮轮暴发致命病毒靠港求医遭拒](https://s.weibo.com/weibo?q=%23%E9%82%AE%E8%BD%AE%E6%9A%B4%E5%8F%91%E8%87%B4%E5%91%BD%E7%97%85%E6%AF%92%E9%9D%A0%E6%B8%AF%E6%B1%82%E5%8C%BB%E9%81%AD%E6%8B%92%23) `191.9K 🔥` `NEW`
1. [于正看短剧Enemy看哭了](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E7%9C%8B%E7%9F%AD%E5%89%A7Enemy%E7%9C%8B%E5%93%AD%E4%BA%86%23) `187.7K 🔥` `NEW`
1. [他就摸了一下魔方就复原了](https://s.weibo.com/weibo?q=%23%E4%BB%96%E5%B0%B1%E6%91%B8%E4%BA%86%E4%B8%80%E4%B8%8B%E9%AD%94%E6%96%B9%E5%B0%B1%E5%A4%8D%E5%8E%9F%E4%BA%86%23) `186.8K 🔥` `NEW`
1. [a2婴儿奶粉检出呕吐毒素在美召回 (A2 infant milk powder recalled in the U.S. due to detection of DON)](https://s.weibo.com/weibo?q=%23a2%E5%A9%B4%E5%84%BF%E5%A5%B6%E7%B2%89%E6%A3%80%E5%87%BA%E5%91%95%E5%90%90%E6%AF%92%E7%B4%A0%E5%9C%A8%E7%BE%8E%E5%8F%AC%E5%9B%9E%23) `186.7K 🔥` `NEW`
1. [2万人的人海3分钟让出生命通道](https://s.weibo.com/weibo?q=%232%E4%B8%87%E4%BA%BA%E7%9A%84%E4%BA%BA%E6%B5%B73%E5%88%86%E9%92%9F%E8%AE%A9%E5%87%BA%E7%94%9F%E5%91%BD%E9%80%9A%E9%81%93%23) `186.7K 🔥` `NEW`
1. [800一晚老式宾馆年轻人五一抢着住](https://s.weibo.com/weibo?q=%23800%E4%B8%80%E6%99%9A%E8%80%81%E5%BC%8F%E5%AE%BE%E9%A6%86%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%BA%94%E4%B8%80%E6%8A%A2%E7%9D%80%E4%BD%8F%23) `180.6K 🔥` `NEW`
1. [飞机上的饮用水产地是路边](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E6%9C%BA%E4%B8%8A%E7%9A%84%E9%A5%AE%E7%94%A8%E6%B0%B4%E4%BA%A7%E5%9C%B0%E6%98%AF%E8%B7%AF%E8%BE%B9%23) `180.1K 🔥` `NEW`
1. [红果回应VIP付费](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E5%9B%9E%E5%BA%94VIP%E4%BB%98%E8%B4%B9%23) `172.1K 🔥` `NEW`
1. [唐嫣演技](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E6%BC%94%E6%8A%80%23) `163.2K 🔥` `NEW`
1. [严浩翔solo](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94solo%23) `154.7K 🔥` `NEW`
1. [国内油价将迎调整](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E6%B2%B9%E4%BB%B7%E5%B0%86%E8%BF%8E%E8%B0%83%E6%95%B4%23) `141.5K 🔥` `NEW`
1. [店主回应女子200多元刮刮乐中100万](https://s.weibo.com/weibo?q=%23%E5%BA%97%E4%B8%BB%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90200%E5%A4%9A%E5%85%83%E5%88%AE%E5%88%AE%E4%B9%90%E4%B8%AD100%E4%B8%87%23) `138.3K 🔥` `NEW`
1. [时代少年团演唱会下雨](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8B%E9%9B%A8%23) `138.1K 🔥` `NEW`
1. [台湾同胞被这首大陆歌曲震撼到流泪 (Taiwanese compatriots were shocked to tears by this mainland song)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%90%8C%E8%83%9E%E8%A2%AB%E8%BF%99%E9%A6%96%E5%A4%A7%E9%99%86%E6%AD%8C%E6%9B%B2%E9%9C%87%E6%92%BC%E5%88%B0%E6%B5%81%E6%B3%AA%23) `136.4K 🔥` `NEW`
1. [伊朗向美军舰发射导弹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%91%E7%BE%8E%E5%86%9B%E8%88%B0%E5%8F%91%E5%B0%84%E5%AF%BC%E5%BC%B9%23) `127.4K 🔥` `NEW`
1. [马嘉祺给丁程鑫撑伞](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E7%BB%99%E4%B8%81%E7%A8%8B%E9%91%AB%E6%92%91%E4%BC%9E%23) `125.3K 🔥` `NEW`
1. [孙颖莎说我们非常团结](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E6%88%91%E4%BB%AC%E9%9D%9E%E5%B8%B8%E5%9B%A2%E7%BB%93%23) `124.4K 🔥` `NEW`
1. [田曦薇演警察](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%BC%94%E8%AD%A6%E5%AF%9F%23) `115.3K 🔥` `NEW`
1. [任敏五四晚会我会等](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E4%BA%94%E5%9B%9B%E6%99%9A%E4%BC%9A%E6%88%91%E4%BC%9A%E7%AD%89%23) `110.3K 🔥` `NEW`
1. [平台已对抢方向盘女子账号实施管控](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E5%B7%B2%E5%AF%B9%E6%8A%A2%E6%96%B9%E5%90%91%E7%9B%98%E5%A5%B3%E5%AD%90%E8%B4%A6%E5%8F%B7%E5%AE%9E%E6%96%BD%E7%AE%A1%E6%8E%A7%23) `108.4K 🔥` `NEW`
1. [蒯曼1比3巴约](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BC1%E6%AF%943%E5%B7%B4%E7%BA%A6%23) `107.3K 🔥` `NEW`
1. [穆祉丞音乐节](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E9%9F%B3%E4%B9%90%E8%8A%82%23) `102.7K 🔥` `NEW`
1. [田曦薇拍的王骁](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%8B%8D%E7%9A%84%E7%8E%8B%E9%AA%81%23) `102.4K 🔥` `NEW`
1. [孙颖莎vs巴约 (Sun Yingsha vs Bayeux)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E5%B7%B4%E7%BA%A6%23) `100.9K 🔥` `NEW`

Updated at 2026-05-05 00:17:38

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
