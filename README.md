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

1. [伊朗遭袭学校现场画面曝光 (Footage of school attack in Iran exposed)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%81%AD%E8%A2%AD%E5%AD%A6%E6%A0%A1%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `200.9K 🔥` `NEW`
1. [伊朗退了一步炮火进了一步](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%80%80%E4%BA%86%E4%B8%80%E6%AD%A5%E7%82%AE%E7%81%AB%E8%BF%9B%E4%BA%86%E4%B8%80%E6%AD%A5%23) `146.0K 🔥` `NEW`
1. [谭松韵说喝就喝 好实在一女艺人](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E8%AF%B4%E5%96%9D%E5%B0%B1%E5%96%9D%20%E5%A5%BD%E5%AE%9E%E5%9C%A8%E4%B8%80%E5%A5%B3%E8%89%BA%E4%BA%BA%23) `118.7K 🔥` `NEW`
1. [麻辣拌界史铁生称两眼一睁就是拌](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E8%BE%A3%E6%8B%8C%E7%95%8C%E5%8F%B2%E9%93%81%E7%94%9F%E7%A7%B0%E4%B8%A4%E7%9C%BC%E4%B8%80%E7%9D%81%E5%B0%B1%E6%98%AF%E6%8B%8C%23) `118.5K 🔥` `NEW`
1. [伊媒曝无人机击中美军基地画面](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%AA%92%E6%9B%9D%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%87%BB%E4%B8%AD%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%E7%94%BB%E9%9D%A2%23) `118.0K 🔥` `NEW`
1. [王楚然完全老公姐](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%AE%8C%E5%85%A8%E8%80%81%E5%85%AC%E5%A7%90%23) `118.0K 🔥` `NEW`
1. [安理会应中俄要求紧急开会](https://s.weibo.com/weibo?q=%23%E5%AE%89%E7%90%86%E4%BC%9A%E5%BA%94%E4%B8%AD%E4%BF%84%E8%A6%81%E6%B1%82%E7%B4%A7%E6%80%A5%E5%BC%80%E4%BC%9A%23) `499.0K 🔥` `+130%`
1. [迪拜码头附近地区燃起黑烟](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E7%A0%81%E5%A4%B4%E9%99%84%E8%BF%91%E5%9C%B0%E5%8C%BA%E7%87%83%E8%B5%B7%E9%BB%91%E7%83%9F%23) `117.9K 🔥` `+21%`
1. [TOP专辑秒切](https://s.weibo.com/weibo?q=%23TOP%E4%B8%93%E8%BE%91%E7%A7%92%E5%88%87%23) `117.8K 🔥` `+25%`
1. [孙颖莎和早田希娜赛后说了啥](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%92%8C%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E8%B5%9B%E5%90%8E%E8%AF%B4%E4%BA%86%E5%95%A5%23) `117.6K 🔥` `+28%`
1. [小米超跑亮相 (Xiaomi supercar unveiled)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%B6%85%E8%B7%91%E4%BA%AE%E7%9B%B8%23) `903.5K 🔥`
1. [3月起一批国家标准开始实施 (A number of national standards will be implemented starting from March)](https://s.weibo.com/weibo?q=%233%E6%9C%88%E8%B5%B7%E4%B8%80%E6%89%B9%E5%9B%BD%E5%AE%B6%E6%A0%87%E5%87%86%E5%BC%80%E5%A7%8B%E5%AE%9E%E6%96%BD%23) `718.4K 🔥`
1. [国乒仅王楚钦晋级男单四强 (Only Wang Chuqin of the national table tennis team advanced to the men’s singles semi-finals)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E4%BB%85%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%99%8B%E7%BA%A7%E7%94%B7%E5%8D%95%E5%9B%9B%E5%BC%BA%23) `292.1K 🔥`
1. [伊朗一小学遭袭51人死60人伤 (Attack on primary school in Iran kills 51 people and injures 60 others)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%80%E5%B0%8F%E5%AD%A6%E9%81%AD%E8%A2%AD51%E4%BA%BA%E6%AD%BB60%E4%BA%BA%E4%BC%A4%23) `267.2K 🔥`
1. [小米发布会 (Xiaomi press conference)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%8F%91%E5%B8%83%E4%BC%9A%23) `238.3K 🔥`
1. [美颜突然关掉吓得人一哆嗦](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%A2%9C%E7%AA%81%E7%84%B6%E5%85%B3%E6%8E%89%E5%90%93%E5%BE%97%E4%BA%BA%E4%B8%80%E5%93%86%E5%97%A6%23) `235.3K 🔥`
1. [小米滑板车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BB%91%E6%9D%BF%E8%BD%A6%23) `233.2K 🔥`
1. [时光与你都很甜2 (Time is sweet with you 2)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%85%89%E4%B8%8E%E4%BD%A0%E9%83%BD%E5%BE%88%E7%94%9C2%23) `232.4K 🔥`
1. [伊朗称导弹击中美军舰](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E7%BE%8E%E5%86%9B%E8%88%B0%23) `227.5K 🔥`
1. [金价 (gold price)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `212.8K 🔥`
1. [椰树广告 擦边](https://s.weibo.com/weibo?q=%23%E6%A4%B0%E6%A0%91%E5%B9%BF%E5%91%8A%20%E6%93%A6%E8%BE%B9%23) `208.5K 🔥`
1. [伊朗正在打击美国军事基地 (Iran is attacking US military bases)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AD%A3%E5%9C%A8%E6%89%93%E5%87%BB%E7%BE%8E%E5%9B%BD%E5%86%9B%E4%BA%8B%E5%9F%BA%E5%9C%B0%23) `203.8K 🔥`
1. [比尔盖茨出轨对象照片曝光](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E5%87%BA%E8%BD%A8%E5%AF%B9%E8%B1%A1%E7%85%A7%E7%89%87%E6%9B%9D%E5%85%89%23) `201.3K 🔥`
1. [五粮液](https://s.weibo.com/weibo?q=%23%E4%BA%94%E7%B2%AE%E6%B6%B2%23) `201.1K 🔥`
1. [山姆520元巧克力降到99元 (Sam’s 520 yuan chocolate reduced to 99 yuan)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86520%E5%85%83%E5%B7%A7%E5%85%8B%E5%8A%9B%E9%99%8D%E5%88%B099%E5%85%83%23) `201.0K 🔥`
1. [镖人票房超越惊蛰无声 (The box office of "The Bodyguard" surpasses "Jingzhe Silent")](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E7%A5%A8%E6%88%BF%E8%B6%85%E8%B6%8A%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `200.9K 🔥`
1. [五粮液董事长曾从钦被查](https://s.weibo.com/weibo?q=%23%E4%BA%94%E7%B2%AE%E6%B6%B2%E8%91%A3%E4%BA%8B%E9%95%BF%E6%9B%BE%E4%BB%8E%E9%92%A6%E8%A2%AB%E6%9F%A5%23) `183.5K 🔥`
1. [伊朗袭击已致约200名美军伤亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB%E5%B7%B2%E8%87%B4%E7%BA%A6200%E5%90%8D%E7%BE%8E%E5%86%9B%E4%BC%A4%E4%BA%A1%23) `183.4K 🔥`
1. [这居然是侯明昊的素颜 (This is actually Hou Minghao’s bare face)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%85%E7%84%B6%E6%98%AF%E4%BE%AF%E6%98%8E%E6%98%8A%E7%9A%84%E7%B4%A0%E9%A2%9C%23) `183.4K 🔥`
1. [为什么中国人把这么多钱花在吃上](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%8A%8A%E8%BF%99%E4%B9%88%E5%A4%9A%E9%92%B1%E8%8A%B1%E5%9C%A8%E5%90%83%E4%B8%8A%23) `161.6K 🔥`
1. [胃癌等消化系统肿瘤呈年轻化趋势 (Gastric cancer and other digestive system tumors are becoming younger)](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E7%AD%89%E6%B6%88%E5%8C%96%E7%B3%BB%E7%BB%9F%E8%82%BF%E7%98%A4%E5%91%88%E5%B9%B4%E8%BD%BB%E5%8C%96%E8%B6%8B%E5%8A%BF%23) `161.0K 🔥`
1. [中东这场仗越打越大了 (The war in the Middle East is getting bigger and bigger)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E8%BF%99%E5%9C%BA%E4%BB%97%E8%B6%8A%E6%89%93%E8%B6%8A%E5%A4%A7%E4%BA%86%23) `155.9K 🔥`
1. [陈飞宇孙千吻戏](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E5%AD%99%E5%8D%83%E5%90%BB%E6%88%8F%23) `148.8K 🔥`
1. [外交部回应美以打击伊朗](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E7%BE%8E%E4%BB%A5%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%23) `148.3K 🔥`
1. [伊朗启动大规模军事行动 (Iran launches large-scale military operation)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%AF%E5%8A%A8%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%86%9B%E4%BA%8B%E8%A1%8C%E5%8A%A8%23) `146.5K 🔥`
1. [伊朗军方称总司令身体健康 (Iran's military says commander-in-chief is in good health)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%86%9B%E6%96%B9%E7%A7%B0%E6%80%BB%E5%8F%B8%E4%BB%A4%E8%BA%AB%E4%BD%93%E5%81%A5%E5%BA%B7%23) `145.4K 🔥`
1. [郝熠然好会魅](https://s.weibo.com/weibo?q=%23%E9%83%9D%E7%86%A0%E7%84%B6%E5%A5%BD%E4%BC%9A%E9%AD%85%23) `144.3K 🔥`
1. [男朋友送的草莓蛋糕第一次见 (The strawberry cake given by my boyfriend was the first time I saw it)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%9C%8B%E5%8F%8B%E9%80%81%E7%9A%84%E8%8D%89%E8%8E%93%E8%9B%8B%E7%B3%95%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%23) `137.5K 🔥`
1. [哈梅内伊将发表公开讲话](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E5%B0%86%E5%8F%91%E8%A1%A8%E5%85%AC%E5%BC%80%E8%AE%B2%E8%AF%9D%23) `130.1K 🔥`
1. [阿联酋迪拜响起爆炸声](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%81%94%E9%85%8B%E8%BF%AA%E6%8B%9C%E5%93%8D%E8%B5%B7%E7%88%86%E7%82%B8%E5%A3%B0%23) `118.6K 🔥`
1. [陈飞宇孙千换了情头](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E5%AD%99%E5%8D%83%E6%8D%A2%E4%BA%86%E6%83%85%E5%A4%B4%23) `118.5K 🔥`
1. [伊朗称大量美以导弹坠落境外](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%A4%A7%E9%87%8F%E7%BE%8E%E4%BB%A5%E5%AF%BC%E5%BC%B9%E5%9D%A0%E8%90%BD%E5%A2%83%E5%A4%96%23) `118.4K 🔥`
1. [杨紫董竹君造型直播 (Yang Zi and Dong Zhujun styling live broadcast)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%91%A3%E7%AB%B9%E5%90%9B%E9%80%A0%E5%9E%8B%E7%9B%B4%E6%92%AD%23) `118.3K 🔥`
1. [伊朗与6国外长通话 (Iran held phone calls with foreign ministers of six countries)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%8E6%E5%9B%BD%E5%A4%96%E9%95%BF%E9%80%9A%E8%AF%9D%23) `118.2K 🔥`
1. [王嘉尔这一跳给李雪琴吊成翘嘴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E8%BF%99%E4%B8%80%E8%B7%B3%E7%BB%99%E6%9D%8E%E9%9B%AA%E7%90%B4%E5%90%8A%E6%88%90%E7%BF%98%E5%98%B4%23) `118.1K 🔥`
1. [山姆部分大降价产品已售罄](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E9%83%A8%E5%88%86%E5%A4%A7%E9%99%8D%E4%BB%B7%E4%BA%A7%E5%93%81%E5%B7%B2%E5%94%AE%E7%BD%84%23) `117.8K 🔥`
1. [以色列宣布袭击伊朗 (Israel announces attack on Iran)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%AE%A3%E5%B8%83%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%23) `1.4M 🔥` `-31%`
1. [据称伊朗革命卫队总司令和防长身亡 (Iran's Revolutionary Guard Commander-in-Chief and Defense Minister Reportedly Dead)](https://s.weibo.com/weibo?q=%23%E6%8D%AE%E7%A7%B0%E4%BC%8A%E6%9C%97%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E6%80%BB%E5%8F%B8%E4%BB%A4%E5%92%8C%E9%98%B2%E9%95%BF%E8%BA%AB%E4%BA%A1%23) `221.8K 🔥` `-53%`
1. [俄罗斯对美以袭击伊朗表态 (Russia expresses its stance on US-Israeli attack on Iran)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%AF%B9%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E8%A1%A8%E6%80%81%23) `161.5K 🔥` `-22%`

Updated at 2026-02-28 23:53:58

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
