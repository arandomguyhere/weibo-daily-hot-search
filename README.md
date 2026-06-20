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

1. [巴拉圭捂嘴说话红牌 (Paraguay gets red card for covering mouth while talking)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD%E6%8D%82%E5%98%B4%E8%AF%B4%E8%AF%9D%E7%BA%A2%E7%89%8C%23) `6.3M 🔥` `NEW`
1. [中考](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E8%80%83%23) `1.4M 🔥` `NEW`
1. [文化中国行龙舟竞渡颂端午](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%8C%96%E4%B8%AD%E5%9B%BD%E8%A1%8C%E9%BE%99%E8%88%9F%E7%AB%9E%E6%B8%A1%E9%A2%82%E7%AB%AF%E5%8D%88%23) `1.1M 🔥` `NEW`
1. [与凤行番位](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E5%87%A4%E8%A1%8C%E7%95%AA%E4%BD%8D%23) `1.1M 🔥` `NEW`
1. [你好星期六看得出她是公主](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E7%9C%8B%E5%BE%97%E5%87%BA%E5%A5%B9%E6%98%AF%E5%85%AC%E4%B8%BB%23) `990.5K 🔥` `NEW`
1. [内马尔 远程办公](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%20%E8%BF%9C%E7%A8%8B%E5%8A%9E%E5%85%AC%23) `435.2K 🔥` `NEW`
1. [郑州一商场整楼烧了持续近4小时](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%B7%9E%E4%B8%80%E5%95%86%E5%9C%BA%E6%95%B4%E6%A5%BC%E7%83%A7%E4%BA%86%E6%8C%81%E7%BB%AD%E8%BF%914%E5%B0%8F%E6%97%B6%23) `395.3K 🔥` `NEW`
1. [黄灿灿你太争气了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E4%BD%A0%E5%A4%AA%E4%BA%89%E6%B0%94%E4%BA%86%23) `362.7K 🔥` `NEW`
1. [中考语文](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E8%80%83%E8%AF%AD%E6%96%87%23) `362.4K 🔥` `NEW`
1. [土耳其vs巴拉圭](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6vs%E5%B7%B4%E6%8B%89%E5%9C%AD%23) `356.7K 🔥` `NEW`
1. [热巴开卫士 (Reba Kai Guards)](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E5%BC%80%E5%8D%AB%E5%A3%AB%23) `356.1K 🔥` `NEW`
1. [贾乃亮近30天涨粉超78万](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E4%B9%83%E4%BA%AE%E8%BF%9130%E5%A4%A9%E6%B6%A8%E7%B2%89%E8%B6%8578%E4%B8%87%23) `355.6K 🔥` `NEW`
1. [C罗女友网络对线骂错人了](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%A5%B3%E5%8F%8B%E7%BD%91%E7%BB%9C%E5%AF%B9%E7%BA%BF%E9%AA%82%E9%94%99%E4%BA%BA%E4%BA%86%23) `354.0K 🔥` `NEW`
1. [张颂文是怎么变小只的](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A2%82%E6%96%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%8F%98%E5%B0%8F%E5%8F%AA%E7%9A%84%23) `348.1K 🔥` `NEW`
1. [瞿颖问黄晓明弄了多少项目](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E9%97%AE%E9%BB%84%E6%99%93%E6%98%8E%E5%BC%84%E4%BA%86%E5%A4%9A%E5%B0%91%E9%A1%B9%E7%9B%AE%23) `332.2K 🔥` `NEW`
1. [多国领导人劝和特朗普与高市早苗](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E9%A2%86%E5%AF%BC%E4%BA%BA%E5%8A%9D%E5%92%8C%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%8E%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%23) `330.0K 🔥` `NEW`
1. [TFBOYS全员进入荧幕初吻时代](https://s.weibo.com/weibo?q=%23TFBOYS%E5%85%A8%E5%91%98%E8%BF%9B%E5%85%A5%E8%8D%A7%E5%B9%95%E5%88%9D%E5%90%BB%E6%97%B6%E4%BB%A3%23) `323.6K 🔥` `NEW`
1. [苹果全面涨价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%85%A8%E9%9D%A2%E6%B6%A8%E4%BB%B7%23) `290.8K 🔥` `NEW`
1. [女友肝衰竭男子想领证结婚被拒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%8F%8B%E8%82%9D%E8%A1%B0%E7%AB%AD%E7%94%B7%E5%AD%90%E6%83%B3%E9%A2%86%E8%AF%81%E7%BB%93%E5%A9%9A%E8%A2%AB%E6%8B%92%23) `275.8K 🔥` `NEW`
1. [荣耀密集起诉手机壳电商](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E5%AF%86%E9%9B%86%E8%B5%B7%E8%AF%89%E6%89%8B%E6%9C%BA%E5%A3%B3%E7%94%B5%E5%95%86%23) `268.0K 🔥` `NEW`
1. [曝徐艺洋在美国生的孩子 (Exposed Xu Yiyang’s child born in the United States)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BE%90%E8%89%BA%E6%B4%8B%E5%9C%A8%E7%BE%8E%E5%9B%BD%E7%94%9F%E7%9A%84%E5%AD%A9%E5%AD%90%23) `267.7K 🔥` `NEW`
1. [张远刘美含时间线](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E5%88%98%E7%BE%8E%E5%90%AB%E6%97%B6%E9%97%B4%E7%BA%BF%23) `267.2K 🔥` `NEW`
1. [内马尔女友穿10号球衣助威](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E5%A5%B3%E5%8F%8B%E7%A9%BF10%E5%8F%B7%E7%90%83%E8%A1%A3%E5%8A%A9%E5%A8%81%23) `265.9K 🔥` `NEW`
1. [TOP登陆少年新歌略略略略略](https://s.weibo.com/weibo?q=%23TOP%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4%E6%96%B0%E6%AD%8C%E7%95%A5%E7%95%A5%E7%95%A5%E7%95%A5%E7%95%A5%23) `262.7K 🔥` `NEW`
1. [小狗被小姑娘烦的一个大跳](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E8%A2%AB%E5%B0%8F%E5%A7%91%E5%A8%98%E7%83%A6%E7%9A%84%E4%B8%80%E4%B8%AA%E5%A4%A7%E8%B7%B3%23) `255.5K 🔥` `NEW`
1. [向佐 三个二代](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%20%E4%B8%89%E4%B8%AA%E4%BA%8C%E4%BB%A3%23) `234.3K 🔥` `NEW`
1. [男子称挂专家号医生竟悄悄问AI](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%A7%B0%E6%8C%82%E4%B8%93%E5%AE%B6%E5%8F%B7%E5%8C%BB%E7%94%9F%E7%AB%9F%E6%82%84%E6%82%84%E9%97%AEAI%23) `234.1K 🔥` `NEW`
1. [美国的谈判桌被以色列炸碎了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%9A%84%E8%B0%88%E5%88%A4%E6%A1%8C%E8%A2%AB%E4%BB%A5%E8%89%B2%E5%88%97%E7%82%B8%E7%A2%8E%E4%BA%86%23) `233.5K 🔥` `NEW`
1. [小女孩做漆扇误打误撞出精品](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A5%B3%E5%AD%A9%E5%81%9A%E6%BC%86%E6%89%87%E8%AF%AF%E6%89%93%E8%AF%AF%E6%92%9E%E5%87%BA%E7%B2%BE%E5%93%81%23) `232.6K 🔥` `NEW`
1. [郑州一商场火灾致2死目击者发声](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%B7%9E%E4%B8%80%E5%95%86%E5%9C%BA%E7%81%AB%E7%81%BE%E8%87%B42%E6%AD%BB%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23) `231.9K 🔥` `NEW`
1. [患者走出医院返回后猝死医院拒赔 (The patient died suddenly after walking out of the hospital and returned. The hospital refused to pay compensation.)](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%80%85%E8%B5%B0%E5%87%BA%E5%8C%BB%E9%99%A2%E8%BF%94%E5%9B%9E%E5%90%8E%E7%8C%9D%E6%AD%BB%E5%8C%BB%E9%99%A2%E6%8B%92%E8%B5%94%23) `231.2K 🔥` `NEW`
1. [暴雨后蚂蚁用身躯搭桥过河](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E5%90%8E%E8%9A%82%E8%9A%81%E7%94%A8%E8%BA%AB%E8%BA%AF%E6%90%AD%E6%A1%A5%E8%BF%87%E6%B2%B3%23) `231.1K 🔥` `NEW`
1. [凡人修仙传](https://s.weibo.com/weibo?q=%23%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%23) `225.9K 🔥` `NEW`
1. [为何明星名人独爱路虎卫士](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BD%95%E6%98%8E%E6%98%9F%E5%90%8D%E4%BA%BA%E7%8B%AC%E7%88%B1%E8%B7%AF%E8%99%8E%E5%8D%AB%E5%A3%AB%23) `216.1K 🔥` `NEW`
1. [侯明昊发文我是歌手侯明昊](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%8F%91%E6%96%87%E6%88%91%E6%98%AF%E6%AD%8C%E6%89%8B%E4%BE%AF%E6%98%8E%E6%98%8A%23) `215.7K 🔥` `NEW`
1. [无畏契约](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%23) `212.6K 🔥` `NEW`
1. [世界杯 不让捂嘴](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%20%E4%B8%8D%E8%AE%A9%E6%8D%82%E5%98%B4%23) `211.9K 🔥` `NEW`
1. [王源回应不再依赖哥哥算长大吗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%86%8D%E4%BE%9D%E8%B5%96%E5%93%A5%E5%93%A5%E7%AE%97%E9%95%BF%E5%A4%A7%E5%90%97%23) `209.7K 🔥` `NEW`
1. [亨利说梅西离不开C罗](https://s.weibo.com/weibo?q=%23%E4%BA%A8%E5%88%A9%E8%AF%B4%E6%A2%85%E8%A5%BF%E7%A6%BB%E4%B8%8D%E5%BC%80C%E7%BD%97%23) `209.4K 🔥` `NEW`
1. [找祖宗到埃及去了](https://s.weibo.com/weibo?q=%23%E6%89%BE%E7%A5%96%E5%AE%97%E5%88%B0%E5%9F%83%E5%8F%8A%E5%8E%BB%E4%BA%86%23) `207.5K 🔥` `NEW`
1. [云秀行 (Yun Xiuxing)](https://s.weibo.com/weibo?q=%23%E4%BA%91%E7%A7%80%E8%A1%8C%23) `206.3K 🔥` `NEW`
1. [穆祉丞常州巡演官宣](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%B8%B8%E5%B7%9E%E5%B7%A1%E6%BC%94%E5%AE%98%E5%AE%A3%23) `188.6K 🔥` `NEW`
1. [亚洲队世界杯六连败](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%B4%B2%E9%98%9F%E4%B8%96%E7%95%8C%E6%9D%AF%E5%85%AD%E8%BF%9E%E8%B4%A5%23) `175.9K 🔥` `NEW`
1. [邓超签上了吗](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E7%AD%BE%E4%B8%8A%E4%BA%86%E5%90%97%23) `173.2K 🔥` `NEW`
1. [topbarry新歌发时代少年团超话](https://s.weibo.com/weibo?q=%23topbarry%E6%96%B0%E6%AD%8C%E5%8F%91%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%B6%85%E8%AF%9D%23) `169.9K 🔥` `NEW`
1. [武汉大学领导班子调整](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%A4%A7%E5%AD%A6%E9%A2%86%E5%AF%BC%E7%8F%AD%E5%AD%90%E8%B0%83%E6%95%B4%23) `169.9K 🔥` `NEW`
1. [泰国路边垃圾桶惊现红发文身女尸](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E8%B7%AF%E8%BE%B9%E5%9E%83%E5%9C%BE%E6%A1%B6%E6%83%8A%E7%8E%B0%E7%BA%A2%E5%8F%91%E6%96%87%E8%BA%AB%E5%A5%B3%E5%B0%B8%23) `169.8K 🔥` `NEW`
1. [KSG晚星误触投降](https://s.weibo.com/weibo?q=%23KSG%E6%99%9A%E6%98%9F%E8%AF%AF%E8%A7%A6%E6%8A%95%E9%99%8D%23) `169.7K 🔥` `NEW`
1. [耳帝说张远声音与唱功够不上是奇观](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%E8%AF%B4%E5%BC%A0%E8%BF%9C%E5%A3%B0%E9%9F%B3%E4%B8%8E%E5%94%B1%E5%8A%9F%E5%A4%9F%E4%B8%8D%E4%B8%8A%E6%98%AF%E5%A5%87%E8%A7%82%23) `217.9K 🔥` `-64%`

Updated at 2026-06-20 12:37:19

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
