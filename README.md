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

1. [金鸡奖获奖名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B8%A1%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `142.2K 🔥` `NEW`
1. [金鸡最佳导演 爆冷](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B8%A1%E6%9C%80%E4%BD%B3%E5%AF%BC%E6%BC%94%20%E7%88%86%E5%86%B7%23) `102.3K 🔥` `NEW`
1. [进博会到APEC见证中国开放纵深](https://s.weibo.com/weibo?q=%23%E8%BF%9B%E5%8D%9A%E4%BC%9A%E5%88%B0APEC%E8%A7%81%E8%AF%81%E4%B8%AD%E5%9B%BD%E5%BC%80%E6%94%BE%E7%BA%B5%E6%B7%B1%23) `83.4K 🔥` `NEW`
1. [天猫双11巅峰24小时低至6.8折](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB%E5%8F%8C11%E5%B7%85%E5%B3%B024%E5%B0%8F%E6%97%B6%E4%BD%8E%E8%87%B36.8%E6%8A%98%23) `83.1K 🔥` `NEW`
1. [白小纯对着摄像头撒谎](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%AF%B9%E7%9D%80%E6%91%84%E5%83%8F%E5%A4%B4%E6%92%92%E8%B0%8E%23) `79.3K 🔥` `NEW`
1. [5个上门维修师傅2个说了实话](https://s.weibo.com/weibo?q=%235%E4%B8%AA%E4%B8%8A%E9%97%A8%E7%BB%B4%E4%BF%AE%E5%B8%88%E5%82%852%E4%B8%AA%E8%AF%B4%E4%BA%86%E5%AE%9E%E8%AF%9D%23) `72.8K 🔥` `NEW`
1. [高叶愣了几秒哭了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8F%B6%E6%84%A3%E4%BA%86%E5%87%A0%E7%A7%92%E5%93%AD%E4%BA%86%23) `70.9K 🔥` `NEW`
1. [许飞把和何炅的合照放C位](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E6%8A%8A%E5%92%8C%E4%BD%95%E7%82%85%E7%9A%84%E5%90%88%E7%85%A7%E6%94%BEC%E4%BD%8D%23) `61.3K 🔥` `NEW`
1. [花坛藏尸案动手行凶者为何死缓](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%9D%9B%E8%97%8F%E5%B0%B8%E6%A1%88%E5%8A%A8%E6%89%8B%E8%A1%8C%E5%87%B6%E8%80%85%E4%B8%BA%E4%BD%95%E6%AD%BB%E7%BC%93%23) `45.1K 🔥` `NEW`
1. [曝平头哥估值200亿至300亿美元](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B9%B3%E5%A4%B4%E5%93%A5%E4%BC%B0%E5%80%BC200%E4%BA%BF%E8%87%B3300%E4%BA%BF%E7%BE%8E%E5%85%83%23) `45.1K 🔥` `NEW`
1. [花坛藏尸案凶手审讯画面首度公开](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%9D%9B%E8%97%8F%E5%B0%B8%E6%A1%88%E5%87%B6%E6%89%8B%E5%AE%A1%E8%AE%AF%E7%94%BB%E9%9D%A2%E9%A6%96%E5%BA%A6%E5%85%AC%E5%BC%80%23) `45.0K 🔥` `NEW`
1. [白鹿听完孟子义说话的反应](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%90%AC%E5%AE%8C%E5%AD%9F%E5%AD%90%E4%B9%89%E8%AF%B4%E8%AF%9D%E7%9A%84%E5%8F%8D%E5%BA%94%23) `44.9K 🔥` `NEW`
1. [梁家辉拒绝工作人员帮拿金鸡奖杯](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E6%8B%92%E7%BB%9D%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%B8%AE%E6%8B%BF%E9%87%91%E9%B8%A1%E5%A5%96%E6%9D%AF%23) `44.9K 🔥` `NEW`
1. [金子涵妹妹回复网友](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%A6%B9%E5%A6%B9%E5%9B%9E%E5%A4%8D%E7%BD%91%E5%8F%8B%23) `44.8K 🔥` `NEW`
1. [拼多多送货上门新规11月13日生效](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E9%80%81%E8%B4%A7%E4%B8%8A%E9%97%A8%E6%96%B0%E8%A7%8411%E6%9C%8813%E6%97%A5%E7%94%9F%E6%95%88%23) `44.7K 🔥` `NEW`
1. [井柏然回复李宇春](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%9B%9E%E5%A4%8D%E6%9D%8E%E5%AE%87%E6%98%A5%23) `44.6K 🔥` `NEW`
1. [李泽楷公司卖出全球最贵人寿保单](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B3%BD%E6%A5%B7%E5%85%AC%E5%8F%B8%E5%8D%96%E5%87%BA%E5%85%A8%E7%90%83%E6%9C%80%E8%B4%B5%E4%BA%BA%E5%AF%BF%E4%BF%9D%E5%8D%95%23) `44.5K 🔥` `NEW`
1. [梁家辉影史第二位三金影帝](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E5%BD%B1%E5%8F%B2%E7%AC%AC%E4%BA%8C%E4%BD%8D%E4%B8%89%E9%87%91%E5%BD%B1%E5%B8%9D%23) `44.5K 🔥` `NEW`
1. [梅根父亲涉性虐待影像内容曝光](https://s.weibo.com/weibo?q=%23%E6%A2%85%E6%A0%B9%E7%88%B6%E4%BA%B2%E6%B6%89%E6%80%A7%E8%99%90%E5%BE%85%E5%BD%B1%E5%83%8F%E5%86%85%E5%AE%B9%E6%9B%9D%E5%85%89%23) `44.4K 🔥` `NEW`
1. [RTX5080暴跌4000元](https://s.weibo.com/weibo?q=%23RTX5080%E6%9A%B4%E8%B7%8C4000%E5%85%83%23) `44.3K 🔥` `NEW`
1. [男子肛门藏冰毒入境被抓](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%82%9B%E9%97%A8%E8%97%8F%E5%86%B0%E6%AF%92%E5%85%A5%E5%A2%83%E8%A2%AB%E6%8A%93%23) `44.3K 🔥` `NEW`
1. [白小纯没有认证电竞选手的原因](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%B2%A1%E6%9C%89%E8%AE%A4%E8%AF%81%E7%94%B5%E7%AB%9E%E9%80%89%E6%89%8B%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `44.2K 🔥` `NEW`
1. [奶奶说选不喜欢的孩子养老不心疼](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E8%AF%B4%E9%80%89%E4%B8%8D%E5%96%9C%E6%AC%A2%E7%9A%84%E5%AD%A9%E5%AD%90%E5%85%BB%E8%80%81%E4%B8%8D%E5%BF%83%E7%96%BC%23) `44.1K 🔥` `NEW`
1. [钟楚曦金鸡奖发言](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%A5%9A%E6%9B%A6%E9%87%91%E9%B8%A1%E5%A5%96%E5%8F%91%E8%A8%80%23) `44.1K 🔥` `NEW`
1. [体育照亮未来](https://s.weibo.com/weibo?q=%23%E4%BD%93%E8%82%B2%E7%85%A7%E4%BA%AE%E6%9C%AA%E6%9D%A5%23) `44.0K 🔥` `NEW`
1. [朱一龙哽咽恭喜高叶](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E5%93%BD%E5%92%BD%E6%81%AD%E5%96%9C%E9%AB%98%E5%8F%B6%23) `43.9K 🔥` `NEW`
1. [和平精英职业联赛](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%E8%81%8C%E4%B8%9A%E8%81%94%E8%B5%9B%23) `43.8K 🔥` `NEW`
1. [金鸡影帝影后 实至名归](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B8%A1%E5%BD%B1%E5%B8%9D%E5%BD%B1%E5%90%8E%20%E5%AE%9E%E8%87%B3%E5%90%8D%E5%BD%92%23) `43.7K 🔥` `NEW`
1. [造谣石凯方道歉](https://s.weibo.com/weibo?q=%23%E9%80%A0%E8%B0%A3%E7%9F%B3%E5%87%AF%E6%96%B9%E9%81%93%E6%AD%89%23) `43.7K 🔥` `NEW`
1. [现发5原班人马 金晨未官宣](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%8F%915%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%20%E9%87%91%E6%99%A8%E6%9C%AA%E5%AE%98%E5%AE%A3%23) `43.6K 🔥` `NEW`
1. [花坛藏尸案折射出非暴力解决矛盾](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%9D%9B%E8%97%8F%E5%B0%B8%E6%A1%88%E6%8A%98%E5%B0%84%E5%87%BA%E9%9D%9E%E6%9A%B4%E5%8A%9B%E8%A7%A3%E5%86%B3%E7%9F%9B%E7%9B%BE%23) `43.5K 🔥` `NEW`
1. [许飞在后台疯狂加微信](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%9C%A8%E5%90%8E%E5%8F%B0%E7%96%AF%E7%8B%82%E5%8A%A0%E5%BE%AE%E4%BF%A1%23) `43.5K 🔥` `NEW`
1. [AI玩梗不能混淆视听](https://s.weibo.com/weibo?q=%23AI%E7%8E%A9%E6%A2%97%E4%B8%8D%E8%83%BD%E6%B7%B7%E6%B7%86%E8%A7%86%E5%90%AC%23) `43.4K 🔥` `NEW`
1. [从赚240万到亏600万的人生变化](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E8%B5%9A240%E4%B8%87%E5%88%B0%E4%BA%8F600%E4%B8%87%E7%9A%84%E4%BA%BA%E7%94%9F%E5%8F%98%E5%8C%96%23) `43.3K 🔥` `NEW`
1. [13岁女孩腹痛1年家长忽视确诊胃癌](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%85%B9%E7%97%9B1%E5%B9%B4%E5%AE%B6%E9%95%BF%E5%BF%BD%E8%A7%86%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%23) `43.3K 🔥` `NEW`
1. [原来真正的阿尔兹海默是这样的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%98%BF%E5%B0%94%E5%85%B9%E6%B5%B7%E9%BB%98%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `43.3K 🔥` `NEW`
1. [厉娜小狗也有商务了](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E5%B0%8F%E7%8B%97%E4%B9%9F%E6%9C%89%E5%95%86%E5%8A%A1%E4%BA%86%23) `43.2K 🔥` `NEW`
1. [有了微博后事无巨细地发](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%86%E5%BE%AE%E5%8D%9A%E5%90%8E%E4%BA%8B%E6%97%A0%E5%B7%A8%E7%BB%86%E5%9C%B0%E5%8F%91%23) `43.2K 🔥` `NEW`
1. [阿里宣布平头哥赴港上市](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E5%AE%A3%E5%B8%83%E5%B9%B3%E5%A4%B4%E5%93%A5%E8%B5%B4%E6%B8%AF%E4%B8%8A%E5%B8%82%23) `43.2K 🔥` `NEW`
1. [小猫咪成全场唯一受害者](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%92%AA%E6%88%90%E5%85%A8%E5%9C%BA%E5%94%AF%E4%B8%80%E5%8F%97%E5%AE%B3%E8%80%85%23) `43.1K 🔥` `NEW`
1. [警方通报司机溅湿路人强行撞车逃离](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%8F%B8%E6%9C%BA%E6%BA%85%E6%B9%BF%E8%B7%AF%E4%BA%BA%E5%BC%BA%E8%A1%8C%E6%92%9E%E8%BD%A6%E9%80%83%E7%A6%BB%23) `43.1K 🔥` `NEW`
1. [生理性喜欢 vs 生理性厌恶](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%20vs%20%E7%94%9F%E7%90%86%E6%80%A7%E5%8E%8C%E6%81%B6%23) `43.1K 🔥` `NEW`
1. [藏尸案女凶手听到死刑时嘴角微动](https://s.weibo.com/weibo?q=%23%E8%97%8F%E5%B0%B8%E6%A1%88%E5%A5%B3%E5%87%B6%E6%89%8B%E5%90%AC%E5%88%B0%E6%AD%BB%E5%88%91%E6%97%B6%E5%98%B4%E8%A7%92%E5%BE%AE%E5%8A%A8%23) `43.1K 🔥` `NEW`
1. [女子补缴社保个人承担不到10万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A1%A5%E7%BC%B4%E7%A4%BE%E4%BF%9D%E4%B8%AA%E4%BA%BA%E6%89%BF%E6%8B%85%E4%B8%8D%E5%88%B010%E4%B8%87%23) `43.1K 🔥` `NEW`
1. [我的初中同学黄景瑜](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%88%9D%E4%B8%AD%E5%90%8C%E5%AD%A6%E9%BB%84%E6%99%AF%E7%91%9C%23) `43.0K 🔥` `NEW`
1. [2026等到了关谷悠悠的大结果](https://s.weibo.com/weibo?q=%232026%E7%AD%89%E5%88%B0%E4%BA%86%E5%85%B3%E8%B0%B7%E6%82%A0%E6%82%A0%E7%9A%84%E5%A4%A7%E7%BB%93%E6%9E%9C%23) `43.0K 🔥` `NEW`
1. [大连英博包揽金球金帅金童](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%BF%9E%E8%8B%B1%E5%8D%9A%E5%8C%85%E6%8F%BD%E9%87%91%E7%90%83%E9%87%91%E5%B8%85%E9%87%91%E7%AB%A5%23) `43.0K 🔥` `NEW`
1. [彩民花20元机选中2000万大奖](https://s.weibo.com/weibo?q=%23%E5%BD%A9%E6%B0%91%E8%8A%B120%E5%85%83%E6%9C%BA%E9%80%89%E4%B8%AD2000%E4%B8%87%E5%A4%A7%E5%A5%96%23) `43.0K 🔥` `NEW`
1. [得闲谨制金鸡奖最佳美术](https://s.weibo.com/weibo?q=%23%E5%BE%97%E9%97%B2%E8%B0%A8%E5%88%B6%E9%87%91%E9%B8%A1%E5%A5%96%E6%9C%80%E4%BD%B3%E7%BE%8E%E6%9C%AF%23) `42.9K 🔥` `NEW`
1. [CPI](https://s.weibo.com/weibo?q=%23CPI%23) `42.9K 🔥` `NEW`
1. [花坛藏尸案凶手整容换脸](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%9D%9B%E8%97%8F%E5%B0%B8%E6%A1%88%E5%87%B6%E6%89%8B%E6%95%B4%E5%AE%B9%E6%8D%A2%E8%84%B8%23) `42.9K 🔥` `NEW`

Updated at 2026-11-11 05:25:43

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
