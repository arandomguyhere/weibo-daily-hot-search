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

1. [英特尔美股暴跌科技股同步大跌](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E7%89%B9%E5%B0%94%E7%BE%8E%E8%82%A1%E6%9A%B4%E8%B7%8C%E7%A7%91%E6%8A%80%E8%82%A1%E5%90%8C%E6%AD%A5%E5%A4%A7%E8%B7%8C%23) `1.1M 🔥` `NEW`
1. [S16抽签](https://s.weibo.com/weibo?q=%23S16%E6%8A%BD%E7%AD%BE%23) `797.6K 🔥` `NEW`
1. [党的二十届五中全会学习手账](https://s.weibo.com/weibo?q=%23%E5%85%9A%E7%9A%84%E4%BA%8C%E5%8D%81%E5%B1%8A%E4%BA%94%E4%B8%AD%E5%85%A8%E4%BC%9A%E5%AD%A6%E4%B9%A0%E6%89%8B%E8%B4%A6%23) `762.0K 🔥` `NEW`
1. [要洗澡先把规矩立住了](https://s.weibo.com/weibo?q=%23%E8%A6%81%E6%B4%97%E6%BE%A1%E5%85%88%E6%8A%8A%E8%A7%84%E7%9F%A9%E7%AB%8B%E4%BD%8F%E4%BA%86%23) `761.0K 🔥` `NEW`
1. [HLE抽到BLG众人反应](https://s.weibo.com/weibo?q=%23HLE%E6%8A%BD%E5%88%B0BLG%E4%BC%97%E4%BA%BA%E5%8F%8D%E5%BA%94%23) `760.6K 🔥` `NEW`
1. [文吉儿王子璇争议事件新反转](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E7%8E%8B%E5%AD%90%E7%92%87%E4%BA%89%E8%AE%AE%E4%BA%8B%E4%BB%B6%E6%96%B0%E5%8F%8D%E8%BD%AC%23) `757.3K 🔥` `NEW`
1. [波兰政变](https://s.weibo.com/weibo?q=%23%E6%B3%A2%E5%85%B0%E6%94%BF%E5%8F%98%23) `664.1K 🔥` `NEW`
1. [美国3岁男童遭警方击毙现场画面](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD3%E5%B2%81%E7%94%B7%E7%AB%A5%E9%81%AD%E8%AD%A6%E6%96%B9%E5%87%BB%E6%AF%99%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `392.6K 🔥` `NEW`
1. [HLE抽到BLG](https://s.weibo.com/weibo?q=%23HLE%E6%8A%BD%E5%88%B0BLG%23) `385.8K 🔥` `NEW`
1. [詹姆斯补篮杀死比赛](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E8%A1%A5%E7%AF%AE%E6%9D%80%E6%AD%BB%E6%AF%94%E8%B5%9B%23) `310.1K 🔥` `NEW`
1. [吾恩去世](https://s.weibo.com/weibo?q=%23%E5%90%BE%E6%81%A9%E5%8E%BB%E4%B8%96%23) `309.6K 🔥` `NEW`
1. [付辛博 井柏然](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%BE%9B%E5%8D%9A%20%E4%BA%95%E6%9F%8F%E7%84%B6%23) `304.4K 🔥` `NEW`
1. [女硕士案 性同意认定](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%A1%95%E5%A3%AB%E6%A1%88%20%E6%80%A7%E5%90%8C%E6%84%8F%E8%AE%A4%E5%AE%9A%23) `294.1K 🔥` `NEW`
1. [主持人跑网约车被抽成破防](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%8C%81%E4%BA%BA%E8%B7%91%E7%BD%91%E7%BA%A6%E8%BD%A6%E8%A2%AB%E6%8A%BD%E6%88%90%E7%A0%B4%E9%98%B2%23) `287.8K 🔥` `NEW`
1. [多地呼吁京东MALL返场5折活动](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%91%BC%E5%90%81%E4%BA%AC%E4%B8%9CMALL%E8%BF%94%E5%9C%BA5%E6%8A%98%E6%B4%BB%E5%8A%A8%23) `284.1K 🔥` `NEW`
1. [波兰](https://s.weibo.com/weibo?q=%23%E6%B3%A2%E5%85%B0%23) `276.9K 🔥` `NEW`
1. [小米新SU7Ultra纽北无伪装实车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0SU7Ultra%E7%BA%BD%E5%8C%97%E6%97%A0%E4%BC%AA%E8%A3%85%E5%AE%9E%E8%BD%A6%23) `275.1K 🔥` `NEW`
1. [詹姆斯20分9篮板8助攻](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF20%E5%88%869%E7%AF%AE%E6%9D%BF8%E5%8A%A9%E6%94%BB%23) `250.6K 🔥` `NEW`
1. [好剧本都要从赵丽颖手中过一遍](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%89%A7%E6%9C%AC%E9%83%BD%E8%A6%81%E4%BB%8E%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%89%8B%E4%B8%AD%E8%BF%87%E4%B8%80%E9%81%8D%23) `245.3K 🔥` `NEW`
1. [全英语区不如中国人懂英文](https://s.weibo.com/weibo?q=%23%E5%85%A8%E8%8B%B1%E8%AF%AD%E5%8C%BA%E4%B8%8D%E5%A6%82%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%87%82%E8%8B%B1%E6%96%87%23) `243.7K 🔥` `NEW`
1. [魏娆陆濯圆房了](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A8%86%E9%99%86%E6%BF%AF%E5%9C%86%E6%88%BF%E4%BA%86%23) `240.0K 🔥` `NEW`
1. [苹果AI官宣接入千问](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CAI%E5%AE%98%E5%AE%A3%E6%8E%A5%E5%85%A5%E5%8D%83%E9%97%AE%23) `234.5K 🔥` `NEW`
1. [睡醒别立刻刷手机](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E9%86%92%E5%88%AB%E7%AB%8B%E5%88%BB%E5%88%B7%E6%89%8B%E6%9C%BA%23) `233.5K 🔥` `NEW`
1. [霍姆格伦髌腱撕裂](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%A7%86%E6%A0%BC%E4%BC%A6%E9%AB%8C%E8%85%B1%E6%92%95%E8%A3%82%23) `231.4K 🔥` `NEW`
1. [金球奖公布投票详情](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%90%83%E5%A5%96%E5%85%AC%E5%B8%83%E6%8A%95%E7%A5%A8%E8%AF%A6%E6%83%85%23) `228.5K 🔥` `NEW`
1. [行程图](https://s.weibo.com/weibo?q=%23%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `227.3K 🔥` `NEW`
1. [小小徐婚礼6米蛋糕用了80斤水果](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B0%8F%E5%BE%90%E5%A9%9A%E7%A4%BC6%E7%B1%B3%E8%9B%8B%E7%B3%95%E7%94%A8%E4%BA%8680%E6%96%A4%E6%B0%B4%E6%9E%9C%23) `226.4K 🔥` `NEW`
1. [眼保健操完全就是恐怖片](https://s.weibo.com/weibo?q=%23%E7%9C%BC%E4%BF%9D%E5%81%A5%E6%93%8D%E5%AE%8C%E5%85%A8%E5%B0%B1%E6%98%AF%E6%81%90%E6%80%96%E7%89%87%23) `225.1K 🔥` `NEW`
1. [曝文吉儿的书有三个人写序](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%96%87%E5%90%89%E5%84%BF%E7%9A%84%E4%B9%A6%E6%9C%89%E4%B8%89%E4%B8%AA%E4%BA%BA%E5%86%99%E5%BA%8F%23) `222.8K 🔥` `NEW`
1. [女推](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%8E%A8%23) `222.3K 🔥` `NEW`
1. [多名音乐人悼念吾恩](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E9%9F%B3%E4%B9%90%E4%BA%BA%E6%82%BC%E5%BF%B5%E5%90%BE%E6%81%A9%23) `203.1K 🔥` `NEW`
1. [捡了条快饿死的狗结果确诊是弱智](https://s.weibo.com/weibo?q=%23%E6%8D%A1%E4%BA%86%E6%9D%A1%E5%BF%AB%E9%A5%BF%E6%AD%BB%E7%9A%84%E7%8B%97%E7%BB%93%E6%9E%9C%E7%A1%AE%E8%AF%8A%E6%98%AF%E5%BC%B1%E6%99%BA%23) `202.3K 🔥` `NEW`
1. [国乒3人晋级男单8强](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%923%E4%BA%BA%E6%99%8B%E7%BA%A7%E7%94%B7%E5%8D%958%E5%BC%BA%23) `202.2K 🔥` `NEW`
1. [厉娜一年到头这样拍还没发现狼人](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E4%B8%80%E5%B9%B4%E5%88%B0%E5%A4%B4%E8%BF%99%E6%A0%B7%E6%8B%8D%E8%BF%98%E6%B2%A1%E5%8F%91%E7%8E%B0%E7%8B%BC%E4%BA%BA%23) `202.2K 🔥` `NEW`
1. [2026苏超总决赛面向全球直播](https://s.weibo.com/weibo?q=%232026%E8%8B%8F%E8%B6%85%E6%80%BB%E5%86%B3%E8%B5%9B%E9%9D%A2%E5%90%91%E5%85%A8%E7%90%83%E7%9B%B4%E6%92%AD%23) `181.9K 🔥` `NEW`
1. [张睿披哥成团夜下沉口碑](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E6%8A%AB%E5%93%A5%E6%88%90%E5%9B%A2%E5%A4%9C%E4%B8%8B%E6%B2%89%E5%8F%A3%E7%A2%91%23) `155.8K 🔥` `NEW`
1. [BLG对战HLE预测](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98HLE%E9%A2%84%E6%B5%8B%23) `149.8K 🔥` `NEW`
1. [李一桐十一月行程图](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E5%8D%81%E4%B8%80%E6%9C%88%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `145.4K 🔥` `NEW`
1. [76人完美配合](https://s.weibo.com/weibo?q=%2376%E4%BA%BA%E5%AE%8C%E7%BE%8E%E9%85%8D%E5%90%88%23) `123.7K 🔥` `NEW`
1. [披荆斩棘 分猪肉](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%20%E5%88%86%E7%8C%AA%E8%82%89%23) `123.6K 🔥` `NEW`
1. [秀贤自曝曾暗恋Bobby](https://s.weibo.com/weibo?q=%23%E7%A7%80%E8%B4%A4%E8%87%AA%E6%9B%9D%E6%9B%BE%E6%9A%97%E6%81%8BBobby%23) `123.5K 🔥` `NEW`
1. [赵丽颖不鸣则已一鸣惊人](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%B8%8D%E9%B8%A3%E5%88%99%E5%B7%B2%E4%B8%80%E9%B8%A3%E6%83%8A%E4%BA%BA%23) `297.9K 🔥` `+101%`
1. [BLG晋级S16八强难度骤降](https://s.weibo.com/weibo?q=%23BLG%E6%99%8B%E7%BA%A7S16%E5%85%AB%E5%BC%BA%E9%9A%BE%E5%BA%A6%E9%AA%A4%E9%99%8D%23) `247.0K 🔥` `+211%`
1. [外网爆火的心脏病征兆](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E7%88%86%E7%81%AB%E7%9A%84%E5%BF%83%E8%84%8F%E7%97%85%E5%BE%81%E5%85%86%23) `242.3K 🔥` `+71%`
1. [宋慧乔是宋仲基的逆鳞](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%85%A7%E4%B9%94%E6%98%AF%E5%AE%8B%E4%BB%B2%E5%9F%BA%E7%9A%84%E9%80%86%E9%B3%9E%23) `237.0K 🔥` `+60%`
1. [A股 半导体](https://s.weibo.com/weibo?q=%23A%E8%82%A1%20%E5%8D%8A%E5%AF%BC%E4%BD%93%23) `202.5K 🔥` `+39%`
1. [小沈阳披荆斩棘冠军](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%86%A0%E5%86%9B%23) `544.2K 🔥`
1. [今年全国实现生娃基本不花钱](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E5%85%A8%E5%9B%BD%E5%AE%9E%E7%8E%B0%E7%94%9F%E5%A8%83%E5%9F%BA%E6%9C%AC%E4%B8%8D%E8%8A%B1%E9%92%B1%23) `250.3K 🔥`
1. [曹骏成团](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E6%88%90%E5%9B%A2%23) `206.6K 🔥`
1. [披荆斩棘成团名单](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%88%90%E5%9B%A2%E5%90%8D%E5%8D%95%23) `158.4K 🔥` `-79%`

Updated at 2026-10-31 10:46:41

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
