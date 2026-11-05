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

1. [温瑞博3比0王楚钦](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A3%E6%AF%940%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `2.2M 🔥` `NEW`
1. [何以中国对话红山](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%BB%A5%E4%B8%AD%E5%9B%BD%E5%AF%B9%E8%AF%9D%E7%BA%A2%E5%B1%B1%23) `641.9K 🔥` `NEW`
1. [2026移动网络大会](https://s.weibo.com/weibo?q=%232026%E7%A7%BB%E5%8A%A8%E7%BD%91%E7%BB%9C%E5%A4%A7%E4%BC%9A%23) `641.5K 🔥` `NEW`
1. [DK对战BLG](https://s.weibo.com/weibo?q=%23DK%E5%AF%B9%E6%88%98BLG%23) `454.2K 🔥` `NEW`
1. [43岁韩莹连挑国乒四位名将](https://s.weibo.com/weibo?q=%2343%E5%B2%81%E9%9F%A9%E8%8E%B9%E8%BF%9E%E6%8C%91%E5%9B%BD%E4%B9%92%E5%9B%9B%E4%BD%8D%E5%90%8D%E5%B0%86%23) `172.4K 🔥` `NEW`
1. [王一博又从瓜田路过](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%8F%88%E4%BB%8E%E7%93%9C%E7%94%B0%E8%B7%AF%E8%BF%87%23) `169.1K 🔥` `NEW`
1. [文吉儿 陆翊](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%20%E9%99%86%E7%BF%8A%23) `167.0K 🔥` `NEW`
1. [DK第一局被BLG碾压](https://s.weibo.com/weibo?q=%23DK%E7%AC%AC%E4%B8%80%E5%B1%80%E8%A2%ABBLG%E7%A2%BE%E5%8E%8B%23) `165.6K 🔥` `NEW`
1. [6G下载4K要多少流量](https://s.weibo.com/weibo?q=%236G%E4%B8%8B%E8%BD%BD4K%E8%A6%81%E5%A4%9A%E5%B0%91%E6%B5%81%E9%87%8F%23) `164.0K 🔥` `NEW`
1. [3个日常习惯是血糖波动的元凶](https://s.weibo.com/weibo?q=%233%E4%B8%AA%E6%97%A5%E5%B8%B8%E4%B9%A0%E6%83%AF%E6%98%AF%E8%A1%80%E7%B3%96%E6%B3%A2%E5%8A%A8%E7%9A%84%E5%85%83%E5%87%B6%23) `161.5K 🔥` `NEW`
1. [果然边牧有800个心眼子](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6%E8%BE%B9%E7%89%A7%E6%9C%89800%E4%B8%AA%E5%BF%83%E7%9C%BC%E5%AD%90%23) `119.4K 🔥` `NEW`
1. [王楚钦温瑞博相持](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%B8%A9%E7%91%9E%E5%8D%9A%E7%9B%B8%E6%8C%81%23) `105.4K 🔥` `NEW`
1. [苹果触屏笔记本有点尴尬](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E8%A7%A6%E5%B1%8F%E7%AC%94%E8%AE%B0%E6%9C%AC%E6%9C%89%E7%82%B9%E5%B0%B4%E5%B0%AC%23) `103.5K 🔥` `NEW`
1. [普京签署法令接管日本烟草在俄资产](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%AD%BE%E7%BD%B2%E6%B3%95%E4%BB%A4%E6%8E%A5%E7%AE%A1%E6%97%A5%E6%9C%AC%E7%83%9F%E8%8D%89%E5%9C%A8%E4%BF%84%E8%B5%84%E4%BA%A7%23) `100.5K 🔥` `NEW`
1. [被大家去家务化的装修狠狠震撼到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%A4%A7%E5%AE%B6%E5%8E%BB%E5%AE%B6%E5%8A%A1%E5%8C%96%E7%9A%84%E8%A3%85%E4%BF%AE%E7%8B%A0%E7%8B%A0%E9%9C%87%E6%92%BC%E5%88%B0%E4%BA%86%23) `99.4K 🔥` `NEW`
1. [但斌回应重仓AI回撤大](https://s.weibo.com/weibo?q=%23%E4%BD%86%E6%96%8C%E5%9B%9E%E5%BA%94%E9%87%8D%E4%BB%93AI%E5%9B%9E%E6%92%A4%E5%A4%A7%23) `87.0K 🔥` `NEW`
1. [马天宇让张萌加完张泉灵后推给他](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E8%AE%A9%E5%BC%A0%E8%90%8C%E5%8A%A0%E5%AE%8C%E5%BC%A0%E6%B3%89%E7%81%B5%E5%90%8E%E6%8E%A8%E7%BB%99%E4%BB%96%23) `85.6K 🔥` `NEW`
1. [Elk说相信Knight](https://s.weibo.com/weibo?q=%23Elk%E8%AF%B4%E7%9B%B8%E4%BF%A1Knight%23) `69.4K 🔥` `NEW`
1. [40岁清醒的人生感悟](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E6%B8%85%E9%86%92%E7%9A%84%E4%BA%BA%E7%94%9F%E6%84%9F%E6%82%9F%23) `64.1K 🔥` `NEW`
1. [温瑞博3比0晋级八强](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A3%E6%AF%940%E6%99%8B%E7%BA%A7%E5%85%AB%E5%BC%BA%23) `64.1K 🔥` `NEW`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `1.4M 🔥` `+165%`
1. [司马缸砸光的珍贵监控视频](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E9%A9%AC%E7%BC%B8%E7%A0%B8%E5%85%89%E7%9A%84%E7%8F%8D%E8%B4%B5%E7%9B%91%E6%8E%A7%E8%A7%86%E9%A2%91%23) `639.7K 🔥` `+599%`
1. [朋友为八个被扔蛋黄讨公道](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E4%B8%BA%E5%85%AB%E4%B8%AA%E8%A2%AB%E6%89%94%E8%9B%8B%E9%BB%84%E8%AE%A8%E5%85%AC%E9%81%93%23) `311.2K 🔥` `+206%`
1. [官方回应居民医保参保人数下降](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E5%B1%85%E6%B0%91%E5%8C%BB%E4%BF%9D%E5%8F%82%E4%BF%9D%E4%BA%BA%E6%95%B0%E4%B8%8B%E9%99%8D%23) `302.6K 🔥` `+52%`
1. [美股开盘纳指大跌728点](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E5%BC%80%E7%9B%98%E7%BA%B3%E6%8C%87%E5%A4%A7%E8%B7%8C728%E7%82%B9%23) `186.9K 🔥` `+74%`
1. [黄渤因阿尔兹海默遗传风险恐惧多年](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B8%A4%E5%9B%A0%E9%98%BF%E5%B0%94%E5%85%B9%E6%B5%B7%E9%BB%98%E9%81%97%E4%BC%A0%E9%A3%8E%E9%99%A9%E6%81%90%E6%83%A7%E5%A4%9A%E5%B9%B4%23) `180.3K 🔥` `+72%`
1. [王子璇走心发言疑似预制](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E8%B5%B0%E5%BF%83%E5%8F%91%E8%A8%80%E7%96%91%E4%BC%BC%E9%A2%84%E5%88%B6%23) `176.2K 🔥` `+65%`
1. [无薪招聘](https://s.weibo.com/weibo?q=%23%E6%97%A0%E8%96%AA%E6%8B%9B%E8%81%98%23) `168.1K 🔥` `+63%`
1. [北京旅游笑话经久不衰](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%97%85%E6%B8%B8%E7%AC%91%E8%AF%9D%E7%BB%8F%E4%B9%85%E4%B8%8D%E8%A1%B0%23) `162.6K 🔥` `+76%`
1. [电竞男这两位闹翻了](https://s.weibo.com/weibo?q=%23%E7%94%B5%E7%AB%9E%E7%94%B7%E8%BF%99%E4%B8%A4%E4%BD%8D%E9%97%B9%E7%BF%BB%E4%BA%86%23) `161.3K 🔥` `+52%`
1. [人社局回应小学无薪酬招跟岗教师](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%A4%BE%E5%B1%80%E5%9B%9E%E5%BA%94%E5%B0%8F%E5%AD%A6%E6%97%A0%E8%96%AA%E9%85%AC%E6%8B%9B%E8%B7%9F%E5%B2%97%E6%95%99%E5%B8%88%23) `130.7K 🔥` `+39%`
1. [美股存储光通信板块重挫](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E5%AD%98%E5%82%A8%E5%85%89%E9%80%9A%E4%BF%A1%E6%9D%BF%E5%9D%97%E9%87%8D%E6%8C%AB%23) `121.5K 🔥` `+38%`
1. [蔡天凤案法医披露烹煮头颅细节](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%A4%A9%E5%87%A4%E6%A1%88%E6%B3%95%E5%8C%BB%E6%8A%AB%E9%9C%B2%E7%83%B9%E7%85%AE%E5%A4%B4%E9%A2%85%E7%BB%86%E8%8A%82%23) `104.5K 🔥` `+21%`
1. [卢昱晓折月亮开播口碑](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E6%8A%98%E6%9C%88%E4%BA%AE%E5%BC%80%E6%92%AD%E5%8F%A3%E7%A2%91%23) `100.6K 🔥` `+39%`
1. [真正在意就不喊宝贝了](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E5%9C%A8%E6%84%8F%E5%B0%B1%E4%B8%8D%E5%96%8A%E5%AE%9D%E8%B4%9D%E4%BA%86%23) `93.8K 🔥` `+30%`
1. [王子璇手机是被收走的](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E6%89%8B%E6%9C%BA%E6%98%AF%E8%A2%AB%E6%94%B6%E8%B5%B0%E7%9A%84%23) `369.1K 🔥`
1. [端午中秋各1天假](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E5%8D%88%E4%B8%AD%E7%A7%8B%E5%90%841%E5%A4%A9%E5%81%87%23) `166.0K 🔥`
1. [二十多年好友穿吊带谁受得了](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E5%8D%81%E5%A4%9A%E5%B9%B4%E5%A5%BD%E5%8F%8B%E7%A9%BF%E5%90%8A%E5%B8%A6%E8%B0%81%E5%8F%97%E5%BE%97%E4%BA%86%23) `81.4K 🔥`
1. [我就说中国有龙](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B0%B1%E8%AF%B4%E4%B8%AD%E5%9B%BD%E6%9C%89%E9%BE%99%23) `76.1K 🔥`
1. [九尾只能帮哥哥拿个冠军了](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E5%8F%AA%E8%83%BD%E5%B8%AE%E5%93%A5%E5%93%A5%E6%8B%BF%E4%B8%AA%E5%86%A0%E5%86%9B%E4%BA%86%23) `64.1K 🔥`
1. [美股AI硬件股大跌](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1AI%E7%A1%AC%E4%BB%B6%E8%82%A1%E5%A4%A7%E8%B7%8C%23) `64.1K 🔥`
1. [曝白小纯天早期天霸工资](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%A4%A9%E6%97%A9%E6%9C%9F%E5%A4%A9%E9%9C%B8%E5%B7%A5%E8%B5%84%23) `180.5K 🔥` `-42%`
1. [袁成杰被列为失信被执行人](https://s.weibo.com/weibo?q=%23%E8%A2%81%E6%88%90%E6%9D%B0%E8%A2%AB%E5%88%97%E4%B8%BA%E5%A4%B1%E4%BF%A1%E8%A2%AB%E6%89%A7%E8%A1%8C%E4%BA%BA%23) `167.6K 🔥` `-46%`
1. [孟子义说张萌美颜参数有点大](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E8%AF%B4%E5%BC%A0%E8%90%8C%E7%BE%8E%E9%A2%9C%E5%8F%82%E6%95%B0%E6%9C%89%E7%82%B9%E5%A4%A7%23) `116.8K 🔥` `-62%`
1. [卵巢癌70%的患者生存时间不超5年](https://s.weibo.com/weibo?q=%23%E5%8D%B5%E5%B7%A2%E7%99%8C70%25%E7%9A%84%E6%82%A3%E8%80%85%E7%94%9F%E5%AD%98%E6%97%B6%E9%97%B4%E4%B8%8D%E8%B6%855%E5%B9%B4%23) `80.6K 🔥` `-21%`
1. [林珍娜认为与TOP的恋情没有错](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%8F%8D%E5%A8%9C%E8%AE%A4%E4%B8%BA%E4%B8%8ETOP%E7%9A%84%E6%81%8B%E6%83%85%E6%B2%A1%E6%9C%89%E9%94%99%23) `73.9K 🔥` `-29%`
1. [女子厕所当场抓住同事偷拍浑身发抖](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8E%95%E6%89%80%E5%BD%93%E5%9C%BA%E6%8A%93%E4%BD%8F%E5%90%8C%E4%BA%8B%E5%81%B7%E6%8B%8D%E6%B5%91%E8%BA%AB%E5%8F%91%E6%8A%96%23) `67.1K 🔥` `-28%`
1. [众球星致敬C罗](https://s.weibo.com/weibo?q=%23%E4%BC%97%E7%90%83%E6%98%9F%E8%87%B4%E6%95%ACC%E7%BD%97%23) `64.1K 🔥` `-39%`
1. [无畏契约](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%23) `64.1K 🔥` `-30%`
1. [后会友期81.2%了](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F81.2%25%E4%BA%86%23) `64.1K 🔥` `-57%`

Updated at 2026-11-06 07:34:48

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
