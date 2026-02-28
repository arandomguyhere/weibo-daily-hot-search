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

1. [3月起一批国家标准开始实施 (A number of national standards will be implemented starting from March)](https://s.weibo.com/weibo?q=%233%E6%9C%88%E8%B5%B7%E4%B8%80%E6%89%B9%E5%9B%BD%E5%AE%B6%E6%A0%87%E5%87%86%E5%BC%80%E5%A7%8B%E5%AE%9E%E6%96%BD%23) `1.1M 🔥` `NEW`
1. [伊称将使用尖端神秘武器](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E7%A7%B0%E5%B0%86%E4%BD%BF%E7%94%A8%E5%B0%96%E7%AB%AF%E7%A5%9E%E7%A7%98%E6%AD%A6%E5%99%A8%23) `223.4K 🔥` `NEW`
1. [胡塞武装导弹射向以色列](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%A1%9E%E6%AD%A6%E8%A3%85%E5%AF%BC%E5%BC%B9%E5%B0%84%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%23) `221.3K 🔥` `NEW`
1. [比尔盖茨出轨对象照片曝光](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E5%87%BA%E8%BD%A8%E5%AF%B9%E8%B1%A1%E7%85%A7%E7%89%87%E6%9B%9D%E5%85%89%23) `169.1K 🔥` `NEW`
1. [五粮液](https://s.weibo.com/weibo?q=%23%E4%BA%94%E7%B2%AE%E6%B6%B2%23) `137.2K 🔥` `NEW`
1. [镖人票房超越惊蛰无声](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E7%A5%A8%E6%88%BF%E8%B6%85%E8%B6%8A%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `126.7K 🔥` `NEW`
1. [小米发布会](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%8F%91%E5%B8%83%E4%BC%9A%23) `1.3M 🔥` `+370%`
1. [以色列宣布袭击伊朗 (Israel announces attack on Iran)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%AE%A3%E5%B8%83%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%23) `5.4M 🔥`
1. [伊朗袭击已致约200名美军伤亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB%E5%B7%B2%E8%87%B4%E7%BA%A6200%E5%90%8D%E7%BE%8E%E5%86%9B%E4%BC%A4%E4%BA%A1%23) `689.6K 🔥`
1. [杨紫董竹君造型直播 (Yang Zi and Dong Zhujun styling live broadcast)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%91%A3%E7%AB%B9%E5%90%9B%E9%80%A0%E5%9E%8B%E7%9B%B4%E6%92%AD%23) `278.0K 🔥`
1. [伊朗一小学遭袭51人死60人伤 (Attack on primary school in Iran kills 51 people and injures 60 others)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%80%E5%B0%8F%E5%AD%A6%E9%81%AD%E8%A2%AD51%E4%BA%BA%E6%AD%BB60%E4%BA%BA%E4%BC%A4%23) `275.9K 🔥`
1. [美颜突然关掉吓得人一哆嗦](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%A2%9C%E7%AA%81%E7%84%B6%E5%85%B3%E6%8E%89%E5%90%93%E5%BE%97%E4%BA%BA%E4%B8%80%E5%93%86%E5%97%A6%23) `274.8K 🔥`
1. [山姆520元巧克力降到99元 (Sam’s 520 yuan chocolate reduced to 99 yuan)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86520%E5%85%83%E5%B7%A7%E5%85%8B%E5%8A%9B%E9%99%8D%E5%88%B099%E5%85%83%23) `265.7K 🔥`
1. [TOP专辑秒切](https://s.weibo.com/weibo?q=%23TOP%E4%B8%93%E8%BE%91%E7%A7%92%E5%88%87%23) `246.7K 🔥`
1. [伊朗与6国外长通话 (Iran held phone calls with foreign ministers of six countries)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%8E6%E5%9B%BD%E5%A4%96%E9%95%BF%E9%80%9A%E8%AF%9D%23) `241.9K 🔥`
1. [金价 (gold price)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `236.1K 🔥`
1. [伊朗正在打击美国军事基地 (Iran is attacking US military bases)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AD%A3%E5%9C%A8%E6%89%93%E5%87%BB%E7%BE%8E%E5%9B%BD%E5%86%9B%E4%BA%8B%E5%9F%BA%E5%9C%B0%23) `234.8K 🔥`
1. [椰树广告 擦边](https://s.weibo.com/weibo?q=%23%E6%A4%B0%E6%A0%91%E5%B9%BF%E5%91%8A%20%E6%93%A6%E8%BE%B9%23) `230.2K 🔥`
1. [郝熠然好会魅](https://s.weibo.com/weibo?q=%23%E9%83%9D%E7%86%A0%E7%84%B6%E5%A5%BD%E4%BC%9A%E9%AD%85%23) `227.9K 🔥`
1. [五粮液董事长曾从钦被查](https://s.weibo.com/weibo?q=%23%E4%BA%94%E7%B2%AE%E6%B6%B2%E8%91%A3%E4%BA%8B%E9%95%BF%E6%9B%BE%E4%BB%8E%E9%92%A6%E8%A2%AB%E6%9F%A5%23) `227.1K 🔥`
1. [男朋友送的草莓蛋糕第一次见](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%9C%8B%E5%8F%8B%E9%80%81%E7%9A%84%E8%8D%89%E8%8E%93%E8%9B%8B%E7%B3%95%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%23) `217.4K 🔥`
1. [胡塞武装将恢复袭击以色列](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%A1%9E%E6%AD%A6%E8%A3%85%E5%B0%86%E6%81%A2%E5%A4%8D%E8%A2%AD%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%23) `206.7K 🔥`
1. [伊朗军方称总司令身体健康 (Iran's military says commander-in-chief is in good health)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%86%9B%E6%96%B9%E7%A7%B0%E6%80%BB%E5%8F%B8%E4%BB%A4%E8%BA%AB%E4%BD%93%E5%81%A5%E5%BA%B7%23) `205.7K 🔥`
1. [你好星期六](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `203.4K 🔥`
1. [华润集团副总经理韩嵩主动投案](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%B6%A6%E9%9B%86%E5%9B%A2%E5%89%AF%E6%80%BB%E7%BB%8F%E7%90%86%E9%9F%A9%E5%B5%A9%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `182.2K 🔥`
1. [孙颖莎4比2早田希娜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E4%E6%AF%942%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%23) `173.3K 🔥`
1. [阿联酋迪拜响起爆炸声 (Explosions ring out in Dubai, United Arab Emirates)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%81%94%E9%85%8B%E8%BF%AA%E6%8B%9C%E5%93%8D%E8%B5%B7%E7%88%86%E7%82%B8%E5%A3%B0%23) `154.8K 🔥`
1. [Prada全平台认领杨幂](https://s.weibo.com/weibo?q=%23Prada%E5%85%A8%E5%B9%B3%E5%8F%B0%E8%AE%A4%E9%A2%86%E6%9D%A8%E5%B9%82%23) `148.6K 🔥`
1. [突然对1g黄金没概念了 (Suddenly I have no idea about 1g gold)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%AF%B91g%E9%BB%84%E9%87%91%E6%B2%A1%E6%A6%82%E5%BF%B5%E4%BA%86%23) `148.1K 🔥`
1. [小米YU9 (Xiaomi YU9)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU9%23) `140.4K 🔥`
1. [阿联酋拦截伊朗导弹1人死亡](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%81%94%E9%85%8B%E6%8B%A6%E6%88%AA%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B91%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `137.6K 🔥`
1. [孙颖莎这一球请全体起立 (Everyone please stand up for this shot by Sun Yingsha.)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%BF%99%E4%B8%80%E7%90%83%E8%AF%B7%E5%85%A8%E4%BD%93%E8%B5%B7%E7%AB%8B%23) `135.0K 🔥`
1. [纯真年代的爱情 (Love in the Age of Innocence)](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `130.9K 🔥`
1. [黄金连续上涨7个月了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%BF%9E%E7%BB%AD%E4%B8%8A%E6%B6%A87%E4%B8%AA%E6%9C%88%E4%BA%86%23) `130.5K 🔥`
1. [我家那小子 (That boy of mine)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%23) `128.9K 🔥`
1. [公认是烂片你却很喜欢的电影](https://s.weibo.com/weibo?q=%23%E5%85%AC%E8%AE%A4%E6%98%AF%E7%83%82%E7%89%87%E4%BD%A0%E5%8D%B4%E5%BE%88%E5%96%9C%E6%AC%A2%E7%9A%84%E7%94%B5%E5%BD%B1%23) `126.8K 🔥`
1. [伊朗总统之子发声 (The son of the Iranian president speaks out)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E4%B9%8B%E5%AD%90%E5%8F%91%E5%A3%B0%23) `126.8K 🔥`
1. [苏新皓一专](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E4%B8%80%E4%B8%93%23) `123.0K 🔥`
1. [巴林美军基地现状](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%9E%97%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%E7%8E%B0%E7%8A%B6%23) `117.5K 🔥`
1. [朱志鑫娃娃款售罄](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E5%A8%83%E5%A8%83%E6%AC%BE%E5%94%AE%E7%BD%84%23) `115.3K 🔥`
1. [李治廷 十日终焉 (Li Zhiting The End of Ten Days)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%BB%E5%BB%B7%20%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `113.9K 🔥`
1. [伊朗导弹袭击4处美军基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB4%E5%A4%84%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%23) `110.2K 🔥`
1. [孙颖莎vs早田希娜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%23) `243.4K 🔥` `-82%`
1. [老铺黄金46.9万元金如意售空](https://s.weibo.com/weibo?q=%23%E8%80%81%E9%93%BA%E9%BB%84%E9%87%9146.9%E4%B8%87%E5%85%83%E9%87%91%E5%A6%82%E6%84%8F%E5%94%AE%E7%A9%BA%23) `224.3K 🔥` `-22%`
1. [伊朗摧毁美军雷达 (Iran destroys US military radar)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%91%A7%E6%AF%81%E7%BE%8E%E5%86%9B%E9%9B%B7%E8%BE%BE%23) `215.4K 🔥` `-22%`
1. [陈飞宇孙千换了情头](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E5%AD%99%E5%8D%83%E6%8D%A2%E4%BA%86%E6%83%85%E5%A4%B4%23) `211.5K 🔥` `-29%`
1. [伊朗启动大规模军事行动 (Iran launches large-scale military operation)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%AF%E5%8A%A8%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%86%9B%E4%BA%8B%E8%A1%8C%E5%8A%A8%23) `209.7K 🔥` `-21%`
1. [伊朗的导弹雨正在路上 (Iran's missile rain is on its way)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9A%84%E5%AF%BC%E5%BC%B9%E9%9B%A8%E6%AD%A3%E5%9C%A8%E8%B7%AF%E4%B8%8A%23) `195.4K 🔥` `-27%`
1. [俄罗斯对美以袭击伊朗表态](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%AF%B9%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E8%A1%A8%E6%80%81%23) `173.0K 🔥` `-37%`

Updated at 2026-02-28 22:00:01

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
