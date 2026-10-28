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

1. [中方重视姆巴佩作出的道歉](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E9%87%8D%E8%A7%86%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%BD%9C%E5%87%BA%E7%9A%84%E9%81%93%E6%AD%89%23) `2.3M 🔥` `NEW`
1. [将门独后](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%23) `960.1K 🔥` `NEW`
1. [我国工业结构向新向优向好](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%B7%A5%E4%B8%9A%E7%BB%93%E6%9E%84%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%E5%90%91%E5%A5%BD%23) `818.6K 🔥` `NEW`
1. [华为](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%23) `781.4K 🔥` `NEW`
1. [问界M9车主向全球车企下战书](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%E8%BD%A6%E4%B8%BB%E5%90%91%E5%85%A8%E7%90%83%E8%BD%A6%E4%BC%81%E4%B8%8B%E6%88%98%E4%B9%A6%23) `521.1K 🔥` `NEW`
1. [法国媒体批姆巴佩团队极度短视](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%AA%92%E4%BD%93%E6%89%B9%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%9B%A2%E9%98%9F%E6%9E%81%E5%BA%A6%E7%9F%AD%E8%A7%86%23) `478.2K 🔥` `NEW`
1. [我的美食探店清单](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E7%BE%8E%E9%A3%9F%E6%8E%A2%E5%BA%97%E6%B8%85%E5%8D%95%23) `469.4K 🔥` `NEW`
1. [江山大同首发预告](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%E9%A6%96%E5%8F%91%E9%A2%84%E5%91%8A%23) `462.3K 🔥` `NEW`
1. [将门独后预告好多人](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E9%A2%84%E5%91%8A%E5%A5%BD%E5%A4%9A%E4%BA%BA%23) `462.1K 🔥` `NEW`
1. [藏北高原上的中国速度](https://s.weibo.com/weibo?q=%23%E8%97%8F%E5%8C%97%E9%AB%98%E5%8E%9F%E4%B8%8A%E7%9A%84%E4%B8%AD%E5%9B%BD%E9%80%9F%E5%BA%A6%23) `461.1K 🔥` `NEW`
1. [何刚谈Mate90四卡三待等十大黑科技](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%88%9A%E8%B0%88Mate90%E5%9B%9B%E5%8D%A1%E4%B8%89%E5%BE%85%E7%AD%89%E5%8D%81%E5%A4%A7%E9%BB%91%E7%A7%91%E6%8A%80%23) `459.4K 🔥` `NEW`
1. [多名幼童小区裸体跑动妈妈称管不住](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E5%B9%BC%E7%AB%A5%E5%B0%8F%E5%8C%BA%E8%A3%B8%E4%BD%93%E8%B7%91%E5%8A%A8%E5%A6%88%E5%A6%88%E7%A7%B0%E7%AE%A1%E4%B8%8D%E4%BD%8F%23) `458.1K 🔥` `NEW`
1. [悲伤逆流成河](https://s.weibo.com/weibo?q=%23%E6%82%B2%E4%BC%A4%E9%80%86%E6%B5%81%E6%88%90%E6%B2%B3%23) `458.1K 🔥` `NEW`
1. [李子祺 科研履历与临床落差](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AD%90%E7%A5%BA%20%E7%A7%91%E7%A0%94%E5%B1%A5%E5%8E%86%E4%B8%8E%E4%B8%B4%E5%BA%8A%E8%90%BD%E5%B7%AE%23) `405.4K 🔥` `NEW`
1. [海信称与姆巴佩无商业合作](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E4%BF%A1%E7%A7%B0%E4%B8%8E%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%97%A0%E5%95%86%E4%B8%9A%E5%90%88%E4%BD%9C%23) `397.1K 🔥` `NEW`
1. [华为发布会](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `392.5K 🔥` `NEW`
1. [Mate90ProMax整机性能提升31%](https://s.weibo.com/weibo?q=%23Mate90ProMax%E6%95%B4%E6%9C%BA%E6%80%A7%E8%83%BD%E6%8F%90%E5%8D%8731%25%23) `357.2K 🔥` `NEW`
1. [玉簟秋大结局尺度](https://s.weibo.com/weibo?q=%23%E7%8E%89%E7%B0%9F%E7%A7%8B%E5%A4%A7%E7%BB%93%E5%B1%80%E5%B0%BA%E5%BA%A6%23) `324.2K 🔥` `NEW`
1. [Shanks回应AL止步十六强](https://s.weibo.com/weibo?q=%23Shanks%E5%9B%9E%E5%BA%94AL%E6%AD%A2%E6%AD%A5%E5%8D%81%E5%85%AD%E5%BC%BA%23) `320.9K 🔥` `NEW`
1. [杨幂刘学义江山大同首发预告](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%88%98%E5%AD%A6%E4%B9%89%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%E9%A6%96%E5%8F%91%E9%A2%84%E5%91%8A%23) `311.5K 🔥` `NEW`
1. [重庆号阵容官宣](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%8F%B7%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `301.6K 🔥` `NEW`
1. [张铭恩解释女友下跪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%93%AD%E6%81%A9%E8%A7%A3%E9%87%8A%E5%A5%B3%E5%8F%8B%E4%B8%8B%E8%B7%AA%23) `300.8K 🔥` `NEW`
1. [海信回应与皇马合作](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E4%BF%A1%E5%9B%9E%E5%BA%94%E4%B8%8E%E7%9A%87%E9%A9%AC%E5%90%88%E4%BD%9C%23) `294.7K 🔥` `NEW`
1. [令人心动的offer8 停更](https://s.weibo.com/weibo?q=%23%E4%BB%A4%E4%BA%BA%E5%BF%83%E5%8A%A8%E7%9A%84offer8%20%E5%81%9C%E6%9B%B4%23) `291.3K 🔥` `NEW`
1. [金价回落女子趁低买金镯金戒指](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%9B%9E%E8%90%BD%E5%A5%B3%E5%AD%90%E8%B6%81%E4%BD%8E%E4%B9%B0%E9%87%91%E9%95%AF%E9%87%91%E6%88%92%E6%8C%87%23) `287.3K 🔥` `NEW`
1. [Mate90第二代灵珑屏有多亮](https://s.weibo.com/weibo?q=%23Mate90%E7%AC%AC%E4%BA%8C%E4%BB%A3%E7%81%B5%E7%8F%91%E5%B1%8F%E6%9C%89%E5%A4%9A%E4%BA%AE%23) `286.9K 🔥` `NEW`
1. [张铭恩 给女友拍照是男人一生的课题](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%93%AD%E6%81%A9%20%E7%BB%99%E5%A5%B3%E5%8F%8B%E6%8B%8D%E7%85%A7%E6%98%AF%E7%94%B7%E4%BA%BA%E4%B8%80%E7%94%9F%E7%9A%84%E8%AF%BE%E9%A2%98%23) `284.9K 🔥` `NEW`
1. [横店和字节合作把15万个群演喂给AI](https://s.weibo.com/weibo?q=%23%E6%A8%AA%E5%BA%97%E5%92%8C%E5%AD%97%E8%8A%82%E5%90%88%E4%BD%9C%E6%8A%8A15%E4%B8%87%E4%B8%AA%E7%BE%A4%E6%BC%94%E5%96%82%E7%BB%99AI%23) `284.1K 🔥` `NEW`
1. [男子借助AI买彩票中508万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%80%9F%E5%8A%A9AI%E4%B9%B0%E5%BD%A9%E7%A5%A8%E4%B8%AD508%E4%B8%87%23) `282.6K 🔥` `NEW`
1. [白鹿抹脖和抹眼泪这两下](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%8A%B9%E8%84%96%E5%92%8C%E6%8A%B9%E7%9C%BC%E6%B3%AA%E8%BF%99%E4%B8%A4%E4%B8%8B%23) `281.7K 🔥` `NEW`
1. [官方回应一烈士墓被围墙压住](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E4%B8%80%E7%83%88%E5%A3%AB%E5%A2%93%E8%A2%AB%E5%9B%B4%E5%A2%99%E5%8E%8B%E4%BD%8F%23) `279.5K 🔥` `NEW`
1. [中国赞助商已向皇马发出谴责](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B5%9E%E5%8A%A9%E5%95%86%E5%B7%B2%E5%90%91%E7%9A%87%E9%A9%AC%E5%8F%91%E5%87%BA%E8%B0%B4%E8%B4%A3%23) `277.9K 🔥` `NEW`
1. [原来幸福也要洗杯子](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%B9%B8%E7%A6%8F%E4%B9%9F%E8%A6%81%E6%B4%97%E6%9D%AF%E5%AD%90%23) `276.3K 🔥` `NEW`
1. [双十一Mate90享24期免息叠国补](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E5%8D%81%E4%B8%80Mate90%E4%BA%AB24%E6%9C%9F%E5%85%8D%E6%81%AF%E5%8F%A0%E5%9B%BD%E8%A1%A5%23) `262.5K 🔥` `NEW`
1. [金价暴跌情侣一天跑两趟黄金市场](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%9A%B4%E8%B7%8C%E6%83%85%E4%BE%A3%E4%B8%80%E5%A4%A9%E8%B7%91%E4%B8%A4%E8%B6%9F%E9%BB%84%E9%87%91%E5%B8%82%E5%9C%BA%23) `261.9K 🔥` `NEW`
1. [姆巴佩的道歉没发1.35亿粉的iG上](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%9A%84%E9%81%93%E6%AD%89%E6%B2%A1%E5%8F%911.35%E4%BA%BF%E7%B2%89%E7%9A%84iG%E4%B8%8A%23) `261.4K 🔥` `NEW`
1. [有效降体脂的7个习惯](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%95%88%E9%99%8D%E4%BD%93%E8%84%82%E7%9A%847%E4%B8%AA%E4%B9%A0%E6%83%AF%23) `244.8K 🔥` `NEW`
1. [曝华为Mate90十大黑科技](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%8E%E4%B8%BAMate90%E5%8D%81%E5%A4%A7%E9%BB%91%E7%A7%91%E6%8A%80%23) `244.0K 🔥` `NEW`
1. [姆巴佩事件皇马休想蒙混过关](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%BA%8B%E4%BB%B6%E7%9A%87%E9%A9%AC%E4%BC%91%E6%83%B3%E8%92%99%E6%B7%B7%E8%BF%87%E5%85%B3%23) `239.5K 🔥` `NEW`
1. [玉兰花开君再来海报](https://s.weibo.com/weibo?q=%23%E7%8E%89%E5%85%B0%E8%8A%B1%E5%BC%80%E5%90%9B%E5%86%8D%E6%9D%A5%E6%B5%B7%E6%8A%A5%23) `231.5K 🔥` `NEW`
1. [宋佳新剧三十年三起三落](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BD%B3%E6%96%B0%E5%89%A7%E4%B8%89%E5%8D%81%E5%B9%B4%E4%B8%89%E8%B5%B7%E4%B8%89%E8%90%BD%23) `230.0K 🔥` `NEW`
1. [林俊杰晒和杨幂周深同台合照](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E6%99%92%E5%92%8C%E6%9D%A8%E5%B9%82%E5%91%A8%E6%B7%B1%E5%90%8C%E5%8F%B0%E5%90%88%E7%85%A7%23) `229.5K 🔥` `NEW`
1. [勃起功能是男性血管健康的晴雨表](https://s.weibo.com/weibo?q=%23%E5%8B%83%E8%B5%B7%E5%8A%9F%E8%83%BD%E6%98%AF%E7%94%B7%E6%80%A7%E8%A1%80%E7%AE%A1%E5%81%A5%E5%BA%B7%E7%9A%84%E6%99%B4%E9%9B%A8%E8%A1%A8%23) `229.2K 🔥` `NEW`
1. [男子没孩子一直怪妻子结果是无精症](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%B2%A1%E5%AD%A9%E5%AD%90%E4%B8%80%E7%9B%B4%E6%80%AA%E5%A6%BB%E5%AD%90%E7%BB%93%E6%9E%9C%E6%98%AF%E6%97%A0%E7%B2%BE%E7%97%87%23) `225.6K 🔥` `NEW`
1. [剑来预告](https://s.weibo.com/weibo?q=%23%E5%89%91%E6%9D%A5%E9%A2%84%E5%91%8A%23) `225.2K 🔥` `NEW`
1. [朋友圈现在为什么没人秀恩爱了](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%8E%B0%E5%9C%A8%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B2%A1%E4%BA%BA%E7%A7%80%E6%81%A9%E7%88%B1%E4%BA%86%23) `222.4K 🔥` `NEW`
1. [建议买东西最好一次到位](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B9%B0%E4%B8%9C%E8%A5%BF%E6%9C%80%E5%A5%BD%E4%B8%80%E6%AC%A1%E5%88%B0%E4%BD%8D%23) `221.8K 🔥` `NEW`
1. [龙丹妮艺人离开她后都翻红了](https://s.weibo.com/weibo?q=%23%E9%BE%99%E4%B8%B9%E5%A6%AE%E8%89%BA%E4%BA%BA%E7%A6%BB%E5%BC%80%E5%A5%B9%E5%90%8E%E9%83%BD%E7%BF%BB%E7%BA%A2%E4%BA%86%23) `198.8K 🔥` `NEW`
1. [王彦霖致电母亲聊新剧反响](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BD%A6%E9%9C%96%E8%87%B4%E7%94%B5%E6%AF%8D%E4%BA%B2%E8%81%8A%E6%96%B0%E5%89%A7%E5%8F%8D%E5%93%8D%23) `197.0K 🔥` `NEW`
1. [皇马没道歉还发布了姆巴佩集锦](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E6%B2%A1%E9%81%93%E6%AD%89%E8%BF%98%E5%8F%91%E5%B8%83%E4%BA%86%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%9B%86%E9%94%A6%23) `179.8K 🔥` `NEW`

Updated at 2026-10-28 16:45:21

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
