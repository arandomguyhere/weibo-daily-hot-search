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

1. [微信 单删提示](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%20%E5%8D%95%E5%88%A0%E6%8F%90%E7%A4%BA%23) `6.3M 🔥` `NEW`
1. [花少4 被低估](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%914%20%E8%A2%AB%E4%BD%8E%E4%BC%B0%23) `1.5M 🔥` `NEW`
1. [19人搜救突击队如何挺进灾害核心区](https://s.weibo.com/weibo?q=%2319%E4%BA%BA%E6%90%9C%E6%95%91%E7%AA%81%E5%87%BB%E9%98%9F%E5%A6%82%E4%BD%95%E6%8C%BA%E8%BF%9B%E7%81%BE%E5%AE%B3%E6%A0%B8%E5%BF%83%E5%8C%BA%23) `1.2M 🔥` `NEW`
1. [22.99万元起海狮08全系皆豪配](https://s.weibo.com/weibo?q=%2322.99%E4%B8%87%E5%85%83%E8%B5%B7%E6%B5%B7%E7%8B%AE08%E5%85%A8%E7%B3%BB%E7%9A%86%E8%B1%AA%E9%85%8D%23) `1.1M 🔥` `NEW`
1. [井柏然 升咖](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%20%E5%8D%87%E5%92%96%23) `1.1M 🔥` `NEW`
1. [这辈子最想撤回的一条外卖聊天记录](https://s.weibo.com/weibo?q=%23%E8%BF%99%E8%BE%88%E5%AD%90%E6%9C%80%E6%83%B3%E6%92%A4%E5%9B%9E%E7%9A%84%E4%B8%80%E6%9D%A1%E5%A4%96%E5%8D%96%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `658.6K 🔥` `NEW`
1. [陈意涵说杨洋走丢就是看的那样](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%84%8F%E6%B6%B5%E8%AF%B4%E6%9D%A8%E6%B4%8B%E8%B5%B0%E4%B8%A2%E5%B0%B1%E6%98%AF%E7%9C%8B%E7%9A%84%E9%82%A3%E6%A0%B7%23) `651.8K 🔥` `NEW`
1. [福建内涝](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E5%86%85%E6%B6%9D%23) `585.4K 🔥` `NEW`
1. [家长群自报干部身份纪检组介入调查](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E7%BE%A4%E8%87%AA%E6%8A%A5%E5%B9%B2%E9%83%A8%E8%BA%AB%E4%BB%BD%E7%BA%AA%E6%A3%80%E7%BB%84%E4%BB%8B%E5%85%A5%E8%B0%83%E6%9F%A5%23) `474.7K 🔥` `NEW`
1. [福州全市停课](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%B7%9E%E5%85%A8%E5%B8%82%E5%81%9C%E8%AF%BE%23) `473.7K 🔥` `NEW`
1. [曝华为Mate90系列提前发布](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%8E%E4%B8%BAMate90%E7%B3%BB%E5%88%97%E6%8F%90%E5%89%8D%E5%8F%91%E5%B8%83%23) `471.2K 🔥` `NEW`
1. [朴彩英拒绝100亿韩元中国奶茶代言](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%BD%A9%E8%8B%B1%E6%8B%92%E7%BB%9D100%E4%BA%BF%E9%9F%A9%E5%85%83%E4%B8%AD%E5%9B%BD%E5%A5%B6%E8%8C%B6%E4%BB%A3%E8%A8%80%23) `467.8K 🔥` `NEW`
1. [家长群自报是纪委书记身份属实](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E7%BE%A4%E8%87%AA%E6%8A%A5%E6%98%AF%E7%BA%AA%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%BA%AB%E4%BB%BD%E5%B1%9E%E5%AE%9E%23) `463.8K 🔥` `NEW`
1. [早春晴朗 爆剧爆人](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%20%E7%88%86%E5%89%A7%E7%88%86%E4%BA%BA%23) `459.2K 🔥` `NEW`
1. [美国结婚不谈彩礼谈婚前协议](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%BB%93%E5%A9%9A%E4%B8%8D%E8%B0%88%E5%BD%A9%E7%A4%BC%E8%B0%88%E5%A9%9A%E5%89%8D%E5%8D%8F%E8%AE%AE%23) `457.8K 🔥` `NEW`
1. [宁静透露陈意涵在花少2被人摆脸色](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%E9%80%8F%E9%9C%B2%E9%99%88%E6%84%8F%E6%B6%B5%E5%9C%A8%E8%8A%B1%E5%B0%912%E8%A2%AB%E4%BA%BA%E6%91%86%E8%84%B8%E8%89%B2%23) `452.8K 🔥` `NEW`
1. [俄罗斯机器人遭推搡后飞踢顾客](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%81%AD%E6%8E%A8%E6%90%A1%E5%90%8E%E9%A3%9E%E8%B8%A2%E9%A1%BE%E5%AE%A2%23) `449.4K 🔥` `NEW`
1. [特朗普儿子晒新护照印父亲画像签名](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%84%BF%E5%AD%90%E6%99%92%E6%96%B0%E6%8A%A4%E7%85%A7%E5%8D%B0%E7%88%B6%E4%BA%B2%E7%94%BB%E5%83%8F%E7%AD%BE%E5%90%8D%23) `447.2K 🔥` `NEW`
1. [博雅 偷税漏税](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E9%9B%85%20%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E%23) `441.7K 🔥` `NEW`
1. [学姐雨琦限定回归](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E5%A7%90%E9%9B%A8%E7%90%A6%E9%99%90%E5%AE%9A%E5%9B%9E%E5%BD%92%23) `438.8K 🔥` `NEW`
1. [伦纳德回应NBA处罚](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E7%BA%B3%E5%BE%B7%E5%9B%9E%E5%BA%94NBA%E5%A4%84%E7%BD%9A%23) `437.6K 🔥` `NEW`
1. [张鑫杀妻案](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%91%AB%E6%9D%80%E5%A6%BB%E6%A1%88%23) `432.8K 🔥` `NEW`
1. [金鹰奖 于和伟](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E4%BA%8E%E5%92%8C%E4%BC%9F%23) `428.9K 🔥` `NEW`
1. [女子发生性关系后称遭强奸勒索19.5万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8F%91%E7%94%9F%E6%80%A7%E5%85%B3%E7%B3%BB%E5%90%8E%E7%A7%B0%E9%81%AD%E5%BC%BA%E5%A5%B8%E5%8B%92%E7%B4%A219.5%E4%B8%87%23) `428.1K 🔥` `NEW`
1. [小米18Fold三大尖端科技](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Fold%E4%B8%89%E5%A4%A7%E5%B0%96%E7%AB%AF%E7%A7%91%E6%8A%80%23) `420.0K 🔥` `NEW`
1. [温州多家鞋厂被淹有人在水里捞鞋](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B7%9E%E5%A4%9A%E5%AE%B6%E9%9E%8B%E5%8E%82%E8%A2%AB%E6%B7%B9%E6%9C%89%E4%BA%BA%E5%9C%A8%E6%B0%B4%E9%87%8C%E6%8D%9E%E9%9E%8B%23) `400.4K 🔥` `NEW`
1. [何超琼赚600万不敢给父亲说](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E7%90%BC%E8%B5%9A600%E4%B8%87%E4%B8%8D%E6%95%A2%E7%BB%99%E7%88%B6%E4%BA%B2%E8%AF%B4%23) `393.4K 🔥` `NEW`
1. [美国突发大规模枪击事件](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%AA%81%E5%8F%91%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%9E%AA%E5%87%BB%E4%BA%8B%E4%BB%B6%23) `387.6K 🔥` `NEW`
1. [绍兴葫芦娃爷爷的孩子已经不在了](https://s.weibo.com/weibo?q=%23%E7%BB%8D%E5%85%B4%E8%91%AB%E8%8A%A6%E5%A8%83%E7%88%B7%E7%88%B7%E7%9A%84%E5%AD%A9%E5%AD%90%E5%B7%B2%E7%BB%8F%E4%B8%8D%E5%9C%A8%E4%BA%86%23) `382.6K 🔥` `NEW`
1. [首饰戴了和没戴是两回事](https://s.weibo.com/weibo?q=%23%E9%A6%96%E9%A5%B0%E6%88%B4%E4%BA%86%E5%92%8C%E6%B2%A1%E6%88%B4%E6%98%AF%E4%B8%A4%E5%9B%9E%E4%BA%8B%23) `375.1K 🔥` `NEW`
1. [商家误把ID账号当钱充值2600多万亿](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%AE%B6%E8%AF%AF%E6%8A%8AID%E8%B4%A6%E5%8F%B7%E5%BD%93%E9%92%B1%E5%85%85%E5%80%BC2600%E5%A4%9A%E4%B8%87%E4%BA%BF%23) `343.6K 🔥` `NEW`
1. [人到中年爱好逐渐离谱](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%88%B0%E4%B8%AD%E5%B9%B4%E7%88%B1%E5%A5%BD%E9%80%90%E6%B8%90%E7%A6%BB%E8%B0%B1%23) `338.1K 🔥` `NEW`
1. [吴易昺vs阿尔卡拉斯](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%98%93%E6%98%BAvs%E9%98%BF%E5%B0%94%E5%8D%A1%E6%8B%89%E6%96%AF%23) `326.3K 🔥` `NEW`
1. [谢贤喜欢CoCo姐的原因](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E5%96%9C%E6%AC%A2CoCo%E5%A7%90%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `321.8K 🔥` `NEW`
1. [员工误把16位账号ID当充值金额输入](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E8%AF%AF%E6%8A%8A16%E4%BD%8D%E8%B4%A6%E5%8F%B7ID%E5%BD%93%E5%85%85%E5%80%BC%E9%87%91%E9%A2%9D%E8%BE%93%E5%85%A5%23) `317.7K 🔥` `NEW`
1. [这么多车位没一个你喜欢的吗](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B9%88%E5%A4%9A%E8%BD%A6%E4%BD%8D%E6%B2%A1%E4%B8%80%E4%B8%AA%E4%BD%A0%E5%96%9C%E6%AC%A2%E7%9A%84%E5%90%97%23) `293.3K 🔥` `NEW`
1. [评论区才是真正破案的地方](https://s.weibo.com/weibo?q=%23%E8%AF%84%E8%AE%BA%E5%8C%BA%E6%89%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%A0%B4%E6%A1%88%E7%9A%84%E5%9C%B0%E6%96%B9%23) `259.8K 🔥` `NEW`
1. [陈奕恒红包](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E7%BA%A2%E5%8C%85%23) `258.0K 🔥` `NEW`
1. [谭松韵47集从丫鬟演到主母](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B547%E9%9B%86%E4%BB%8E%E4%B8%AB%E9%AC%9F%E6%BC%94%E5%88%B0%E4%B8%BB%E6%AF%8D%23) `257.8K 🔥` `NEW`
1. [张庭自曝结婚16年从未吵过架](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BA%AD%E8%87%AA%E6%9B%9D%E7%BB%93%E5%A9%9A16%E5%B9%B4%E4%BB%8E%E6%9C%AA%E5%90%B5%E8%BF%87%E6%9E%B6%23) `257.8K 🔥` `NEW`
1. [淘宝崩了](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%B4%A9%E4%BA%86%23) `257.8K 🔥` `NEW`
1. [多地持币者及家属遭绑架甚至杀害](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E6%8C%81%E5%B8%81%E8%80%85%E5%8F%8A%E5%AE%B6%E5%B1%9E%E9%81%AD%E7%BB%91%E6%9E%B6%E7%94%9A%E8%87%B3%E6%9D%80%E5%AE%B3%23) `235.3K 🔥` `NEW`
1. [第一次觉得平板这么有用](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%89%E5%BE%97%E5%B9%B3%E6%9D%BF%E8%BF%99%E4%B9%88%E6%9C%89%E7%94%A8%23) `232.6K 🔥` `NEW`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `231.9K 🔥` `NEW`
1. [尼泊尔山洪另一个视角](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E5%8F%A6%E4%B8%80%E4%B8%AA%E8%A7%86%E8%A7%92%23) `220.4K 🔥` `NEW`
1. [凭什么既要工作又要做家务](https://s.weibo.com/weibo?q=%23%E5%87%AD%E4%BB%80%E4%B9%88%E6%97%A2%E8%A6%81%E5%B7%A5%E4%BD%9C%E5%8F%88%E8%A6%81%E5%81%9A%E5%AE%B6%E5%8A%A1%23) `210.5K 🔥` `NEW`
1. [充1000元误到账26419933亿余元](https://s.weibo.com/weibo?q=%23%E5%85%851000%E5%85%83%E8%AF%AF%E5%88%B0%E8%B4%A626419933%E4%BA%BF%E4%BD%99%E5%85%83%23) `204.7K 🔥` `NEW`
1. [日本缩水](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BC%A9%E6%B0%B4%23) `176.6K 🔥` `NEW`
1. [娄艺潇被积压12年的剧要播了](https://s.weibo.com/weibo?q=%23%E5%A8%84%E8%89%BA%E6%BD%87%E8%A2%AB%E7%A7%AF%E5%8E%8B12%E5%B9%B4%E7%9A%84%E5%89%A7%E8%A6%81%E6%92%AD%E4%BA%86%23) `424.7K 🔥` `+51%`
1. [何超琼凌晨三点家庭早餐惊呆章泽天](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E7%90%BC%E5%87%8C%E6%99%A8%E4%B8%89%E7%82%B9%E5%AE%B6%E5%BA%AD%E6%97%A9%E9%A4%90%E6%83%8A%E5%91%86%E7%AB%A0%E6%B3%BD%E5%A4%A9%23) `411.8K 🔥` `+45%`
1. [孙千跟妈妈共用一张脸](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E8%B7%9F%E5%A6%88%E5%A6%88%E5%85%B1%E7%94%A8%E4%B8%80%E5%BC%A0%E8%84%B8%23) `220.7K 🔥` `-41%`

Updated at 2026-09-03 12:47:07

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
