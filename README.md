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

1. [深圳校服真香](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%A0%A1%E6%9C%8D%E7%9C%9F%E9%A6%99%23) `1.5M 🔥` `NEW`
1. [可可里小姐闭店](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E5%8F%AF%E9%87%8C%E5%B0%8F%E5%A7%90%E9%97%AD%E5%BA%97%23) `920.5K 🔥` `NEW`
1. [救援核心区已有基本通信保障](https://s.weibo.com/weibo?q=%23%E6%95%91%E6%8F%B4%E6%A0%B8%E5%BF%83%E5%8C%BA%E5%B7%B2%E6%9C%89%E5%9F%BA%E6%9C%AC%E9%80%9A%E4%BF%A1%E4%BF%9D%E9%9A%9C%23) `703.0K 🔥` `NEW`
1. [井柏然的吻戏是弯腰往上亲](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E7%9A%84%E5%90%BB%E6%88%8F%E6%98%AF%E5%BC%AF%E8%85%B0%E5%BE%80%E4%B8%8A%E4%BA%B2%23) `680.6K 🔥` `NEW`
1. [尼泊尔泥石流1010人遇难](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%B3%A5%E7%9F%B3%E6%B5%811010%E4%BA%BA%E9%81%87%E9%9A%BE%23) `637.8K 🔥` `NEW`
1. [宇树员工称奖惩机制只有罚几乎没有奖](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%91%98%E5%B7%A5%E7%A7%B0%E5%A5%96%E6%83%A9%E6%9C%BA%E5%88%B6%E5%8F%AA%E6%9C%89%E7%BD%9A%E5%87%A0%E4%B9%8E%E6%B2%A1%E6%9C%89%E5%A5%96%23) `620.0K 🔥` `NEW`
1. [王一博云南白药牙膏全球品牌代言人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%BA%91%E5%8D%97%E7%99%BD%E8%8D%AF%E7%89%99%E8%86%8F%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `345.6K 🔥` `NEW`
1. [离职员工改价8元买走百克金条获刑](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E8%81%8C%E5%91%98%E5%B7%A5%E6%94%B9%E4%BB%B78%E5%85%83%E4%B9%B0%E8%B5%B0%E7%99%BE%E5%85%8B%E9%87%91%E6%9D%A1%E8%8E%B7%E5%88%91%23) `321.7K 🔥` `NEW`
1. [内存涨价](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E6%B6%A8%E4%BB%B7%23) `261.3K 🔥` `NEW`
1. [小沈阳二公小考倒数第一](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E4%BA%8C%E5%85%AC%E5%B0%8F%E8%80%83%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%23) `256.6K 🔥` `NEW`
1. [理想交付量](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E4%BA%A4%E4%BB%98%E9%87%8F%23) `252.5K 🔥` `NEW`
1. [小英送女儿上国际学校](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E9%80%81%E5%A5%B3%E5%84%BF%E4%B8%8A%E5%9B%BD%E9%99%85%E5%AD%A6%E6%A0%A1%23) `249.6K 🔥` `NEW`
1. [月经3天和月经7天哪一个更健康](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%BB%8F3%E5%A4%A9%E5%92%8C%E6%9C%88%E7%BB%8F7%E5%A4%A9%E5%93%AA%E4%B8%80%E4%B8%AA%E6%9B%B4%E5%81%A5%E5%BA%B7%23) `240.8K 🔥` `NEW`
1. [蔡坤奇患渐冻症](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%9D%A4%E5%A5%87%E6%82%A3%E6%B8%90%E5%86%BB%E7%97%87%23) `217.6K 🔥` `NEW`
1. [金晨日本朋友为金晨写中文信](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E6%97%A5%E6%9C%AC%E6%9C%8B%E5%8F%8B%E4%B8%BA%E9%87%91%E6%99%A8%E5%86%99%E4%B8%AD%E6%96%87%E4%BF%A1%23) `198.6K 🔥` `NEW`
1. [尚之桃吻栾念的背](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E4%B9%8B%E6%A1%83%E5%90%BB%E6%A0%BE%E5%BF%B5%E7%9A%84%E8%83%8C%23) `188.1K 🔥` `NEW`
1. [土崖抛妻案姐姐曝妹妹曾遭婚内强奸](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E5%B4%96%E6%8A%9B%E5%A6%BB%E6%A1%88%E5%A7%90%E5%A7%90%E6%9B%9D%E5%A6%B9%E5%A6%B9%E6%9B%BE%E9%81%AD%E5%A9%9A%E5%86%85%E5%BC%BA%E5%A5%B8%23) `188.0K 🔥` `NEW`
1. [尼泊尔女子携子逃生差2秒被泥浆吞噬](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%A5%B3%E5%AD%90%E6%90%BA%E5%AD%90%E9%80%83%E7%94%9F%E5%B7%AE2%E7%A7%92%E8%A2%AB%E6%B3%A5%E6%B5%86%E5%90%9E%E5%99%AC%23) `187.3K 🔥` `NEW`
1. [月经期间最好别做这10件事](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%BB%8F%E6%9C%9F%E9%97%B4%E6%9C%80%E5%A5%BD%E5%88%AB%E5%81%9A%E8%BF%9910%E4%BB%B6%E4%BA%8B%23) `186.6K 🔥` `NEW`
1. [丁程鑫男粉超话连续签到10年](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E7%94%B7%E7%B2%89%E8%B6%85%E8%AF%9D%E8%BF%9E%E7%BB%AD%E7%AD%BE%E5%88%B010%E5%B9%B4%23) `186.4K 🔥` `NEW`
1. [你在哪里主场就在哪里](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%9C%A8%E5%93%AA%E9%87%8C%E4%B8%BB%E5%9C%BA%E5%B0%B1%E5%9C%A8%E5%93%AA%E9%87%8C%23) `185.6K 🔥` `NEW`
1. [手机涨价 iPhone暂未涨价](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%20iPhone%E6%9A%82%E6%9C%AA%E6%B6%A8%E4%BB%B7%23) `185.1K 🔥` `NEW`
1. [穆祉丞真的升咖了](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%9C%9F%E7%9A%84%E5%8D%87%E5%92%96%E4%BA%86%23) `184.4K 🔥` `NEW`
1. [看脸就知道身体缺什么了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E8%84%B8%E5%B0%B1%E7%9F%A5%E9%81%93%E8%BA%AB%E4%BD%93%E7%BC%BA%E4%BB%80%E4%B9%88%E4%BA%86%23) `184.0K 🔥` `NEW`
1. [命运托举你的方式有时很意外](https://s.weibo.com/weibo?q=%23%E5%91%BD%E8%BF%90%E6%89%98%E4%B8%BE%E4%BD%A0%E7%9A%84%E6%96%B9%E5%BC%8F%E6%9C%89%E6%97%B6%E5%BE%88%E6%84%8F%E5%A4%96%23) `183.5K 🔥` `NEW`
1. [女主播与网友发生关系后报警被拘](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B8%BB%E6%92%AD%E4%B8%8E%E7%BD%91%E5%8F%8B%E5%8F%91%E7%94%9F%E5%85%B3%E7%B3%BB%E5%90%8E%E6%8A%A5%E8%AD%A6%E8%A2%AB%E6%8B%98%23) `182.7K 🔥` `NEW`
1. [披荆斩棘二公小考](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%BA%8C%E5%85%AC%E5%B0%8F%E8%80%83%23) `182.7K 🔥` `NEW`
1. [今年的医护人员有多难](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E7%9A%84%E5%8C%BB%E6%8A%A4%E4%BA%BA%E5%91%98%E6%9C%89%E5%A4%9A%E9%9A%BE%23) `180.0K 🔥` `NEW`
1. [迪丽热巴见面会座位图](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A7%81%E9%9D%A2%E4%BC%9A%E5%BA%A7%E4%BD%8D%E5%9B%BE%23) `179.5K 🔥` `NEW`
1. [女子赢2600万后质疑律师费收费过高](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B5%A22600%E4%B8%87%E5%90%8E%E8%B4%A8%E7%96%91%E5%BE%8B%E5%B8%88%E8%B4%B9%E6%94%B6%E8%B4%B9%E8%BF%87%E9%AB%98%23) `178.6K 🔥` `NEW`
1. [抖音推荐 难看](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E6%8E%A8%E8%8D%90%20%E9%9A%BE%E7%9C%8B%23) `178.3K 🔥` `NEW`
1. [抖音 误入中老年频道](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%20%E8%AF%AF%E5%85%A5%E4%B8%AD%E8%80%81%E5%B9%B4%E9%A2%91%E9%81%93%23) `178.3K 🔥` `NEW`
1. [20后入学家长年龄相差近30岁](https://s.weibo.com/weibo?q=%2320%E5%90%8E%E5%85%A5%E5%AD%A6%E5%AE%B6%E9%95%BF%E5%B9%B4%E9%BE%84%E7%9B%B8%E5%B7%AE%E8%BF%9130%E5%B2%81%23) `178.1K 🔥` `NEW`
1. [迪丽热巴见面会不售票](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A7%81%E9%9D%A2%E4%BC%9A%E4%B8%8D%E5%94%AE%E7%A5%A8%23) `177.8K 🔥` `NEW`
1. [华为小米荣耀回应手机涨价](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%B0%8F%E7%B1%B3%E8%8D%A3%E8%80%80%E5%9B%9E%E5%BA%94%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%23) `177.5K 🔥` `NEW`
1. [孙怡女儿都这么大了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%A5%B3%E5%84%BF%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `176.3K 🔥` `NEW`
1. [开学红包](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%AD%A6%E7%BA%A2%E5%8C%85%23) `174.9K 🔥` `NEW`
1. [电子产品涨价后悔没早买](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%AD%90%E4%BA%A7%E5%93%81%E6%B6%A8%E4%BB%B7%E5%90%8E%E6%82%94%E6%B2%A1%E6%97%A9%E4%B9%B0%23) `174.5K 🔥` `NEW`
1. [幼儿园小班开学第一天场面完全失控](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E5%B0%8F%E7%8F%AD%E5%BC%80%E5%AD%A6%E7%AC%AC%E4%B8%80%E5%A4%A9%E5%9C%BA%E9%9D%A2%E5%AE%8C%E5%85%A8%E5%A4%B1%E6%8E%A7%23) `174.4K 🔥` `NEW`
1. [吴易昺调侃郑钦文](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%98%93%E6%98%BA%E8%B0%83%E4%BE%83%E9%83%91%E9%92%A6%E6%96%87%23) `165.0K 🔥` `NEW`
1. [陈瑶你有点太小方了吧](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E4%BD%A0%E6%9C%89%E7%82%B9%E5%A4%AA%E5%B0%8F%E6%96%B9%E4%BA%86%E5%90%A7%23) `165.0K 🔥` `NEW`
1. [李诚儒回应重案六组翻拍](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%AF%9A%E5%84%92%E5%9B%9E%E5%BA%94%E9%87%8D%E6%A1%88%E5%85%AD%E7%BB%84%E7%BF%BB%E6%8B%8D%23) `161.9K 🔥` `NEW`
1. [名校硕士被大厂违规辞退](https://s.weibo.com/weibo?q=%23%E5%90%8D%E6%A0%A1%E7%A1%95%E5%A3%AB%E8%A2%AB%E5%A4%A7%E5%8E%82%E8%BF%9D%E8%A7%84%E8%BE%9E%E9%80%80%23) `149.5K 🔥` `NEW`
1. [井柏然栾念被后背吻的表情](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E6%A0%BE%E5%BF%B5%E8%A2%AB%E5%90%8E%E8%83%8C%E5%90%BB%E7%9A%84%E8%A1%A8%E6%83%85%23) `149.5K 🔥` `NEW`
1. [孙恩盛被16级粉丝吐槽忘本](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%81%A9%E7%9B%9B%E8%A2%AB16%E7%BA%A7%E7%B2%89%E4%B8%9D%E5%90%90%E6%A7%BD%E5%BF%98%E6%9C%AC%23) `149.3K 🔥` `NEW`
1. [衣服都炸没了](https://s.weibo.com/weibo?q=%23%E8%A1%A3%E6%9C%8D%E9%83%BD%E7%82%B8%E6%B2%A1%E4%BA%86%23) `136.3K 🔥` `NEW`
1. [披哥二公小考张彬彬组第一](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A5%E4%BA%8C%E5%85%AC%E5%B0%8F%E8%80%83%E5%BC%A0%E5%BD%AC%E5%BD%AC%E7%BB%84%E7%AC%AC%E4%B8%80%23) `128.2K 🔥` `NEW`
1. [金晨方辟谣出国生子](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E6%96%B9%E8%BE%9F%E8%B0%A3%E5%87%BA%E5%9B%BD%E7%94%9F%E5%AD%90%23) `128.2K 🔥` `NEW`
1. [智界RX科技定义新驾趣](https://s.weibo.com/weibo?q=%23%E6%99%BA%E7%95%8CRX%E7%A7%91%E6%8A%80%E5%AE%9A%E4%B9%89%E6%96%B0%E9%A9%BE%E8%B6%A3%23) `687.3K 🔥` `+29%`
1. [女主播男网友性行为后各自报警](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B8%BB%E6%92%AD%E7%94%B7%E7%BD%91%E5%8F%8B%E6%80%A7%E8%A1%8C%E4%B8%BA%E5%90%8E%E5%90%84%E8%87%AA%E6%8A%A5%E8%AD%A6%23) `230.6K 🔥`
1. [黄磊回应不再参加向往的生活](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%86%8D%E5%8F%82%E5%8A%A0%E5%90%91%E5%BE%80%E7%9A%84%E7%94%9F%E6%B4%BB%23) `231.6K 🔥` `-24%`
1. [深圳校服 去商场自己买](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%A0%A1%E6%9C%8D%20%E5%8E%BB%E5%95%86%E5%9C%BA%E8%87%AA%E5%B7%B1%E4%B9%B0%23) `201.8K 🔥` `-33%`

Updated at 2026-09-01 15:40:57

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
