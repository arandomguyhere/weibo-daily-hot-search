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

1. [浪姐 赢了被淘汰 (Sister Lang won and was eliminated)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E8%B5%A2%E4%BA%86%E8%A2%AB%E6%B7%98%E6%B1%B0%23) `1.3M 🔥` `NEW`
1. [张军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%86%9B%23) `1.2M 🔥` `NEW`
1. [开局之年我国经济运行起步有力](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%80%E4%B9%8B%E5%B9%B4%E6%88%91%E5%9B%BD%E7%BB%8F%E6%B5%8E%E8%BF%90%E8%A1%8C%E8%B5%B7%E6%AD%A5%E6%9C%89%E5%8A%9B%23) `971.4K 🔥` `NEW`
1. [海尔空调在有风的地方](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%B0%94%E7%A9%BA%E8%B0%83%E5%9C%A8%E6%9C%89%E9%A3%8E%E7%9A%84%E5%9C%B0%E6%96%B9%23) `955.8K 🔥` `NEW`
1. [陶昕然淘汰](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E6%B7%98%E6%B1%B0%23) `913.4K 🔥` `NEW`
1. [丁俊晖vs赵心童](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96vs%E8%B5%B5%E5%BF%83%E7%AB%A5%23) `631.2K 🔥` `NEW`
1. [唐艺昕 大大方方](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%20%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%23) `624.5K 🔥` `NEW`
1. [传祺越7全球首发亮相](https://s.weibo.com/weibo?q=%23%E4%BC%A0%E7%A5%BA%E8%B6%8A7%E5%85%A8%E7%90%83%E9%A6%96%E5%8F%91%E4%BA%AE%E7%9B%B8%23) `607.3K 🔥` `NEW`
1. [羽协主席张军失联](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E5%8D%8F%E4%B8%BB%E5%B8%AD%E5%BC%A0%E5%86%9B%E5%A4%B1%E8%81%94%23) `599.3K 🔥` `NEW`
1. [全国首个伴侣动物立法草案被删除](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E9%A6%96%E4%B8%AA%E4%BC%B4%E4%BE%A3%E5%8A%A8%E7%89%A9%E7%AB%8B%E6%B3%95%E8%8D%89%E6%A1%88%E8%A2%AB%E5%88%A0%E9%99%A4%23) `435.6K 🔥` `NEW`
1. [黄仁勋预言的灾难仅9天就成真 (The disaster predicted by Jen-Hsun Huang came true in just 9 days)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E9%A2%84%E8%A8%80%E7%9A%84%E7%81%BE%E9%9A%BE%E4%BB%859%E5%A4%A9%E5%B0%B1%E6%88%90%E7%9C%9F%23) `298.0K 🔥` `NEW`
1. [年少的心动真的过期不候](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%B0%91%E7%9A%84%E5%BF%83%E5%8A%A8%E7%9C%9F%E7%9A%84%E8%BF%87%E6%9C%9F%E4%B8%8D%E5%80%99%23) `297.7K 🔥` `NEW`
1. [鹿晗 红包](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E7%BA%A2%E5%8C%85%23) `297.2K 🔥` `NEW`
1. [曝毛晓彤凌晨从医美诊所离开](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%AF%9B%E6%99%93%E5%BD%A4%E5%87%8C%E6%99%A8%E4%BB%8E%E5%8C%BB%E7%BE%8E%E8%AF%8A%E6%89%80%E7%A6%BB%E5%BC%80%23) `296.9K 🔥` `NEW`
1. [妈妈生了9个孩子又有了30个孙辈](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%94%9F%E4%BA%869%E4%B8%AA%E5%AD%A9%E5%AD%90%E5%8F%88%E6%9C%89%E4%BA%8630%E4%B8%AA%E5%AD%99%E8%BE%88%23) `296.4K 🔥` `NEW`
1. [黄宗泽 牙龈萎缩](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AE%97%E6%B3%BD%20%E7%89%99%E9%BE%88%E8%90%8E%E7%BC%A9%23) `296.1K 🔥` `NEW`
1. [陶昕然回应二公淘汰](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E5%9B%9E%E5%BA%94%E4%BA%8C%E5%85%AC%E6%B7%98%E6%B1%B0%23) `295.8K 🔥` `NEW`
1. [电诈园老板嚣张妄言警方拿他没办法](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%AF%88%E5%9B%AD%E8%80%81%E6%9D%BF%E5%9A%A3%E5%BC%A0%E5%A6%84%E8%A8%80%E8%AD%A6%E6%96%B9%E6%8B%BF%E4%BB%96%E6%B2%A1%E5%8A%9E%E6%B3%95%23) `295.3K 🔥` `NEW`
1. [毛晓彤回应去医美诊所](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E5%BD%A4%E5%9B%9E%E5%BA%94%E5%8E%BB%E5%8C%BB%E7%BE%8E%E8%AF%8A%E6%89%80%23) `294.9K 🔥` `NEW`
1. [何宣林 分词](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%20%E5%88%86%E8%AF%8D%23) `294.2K 🔥` `NEW`
1. [印度男子酒后杀妻竟提头颅穿行村庄 (An Indian man killed his wife after drinking and carried her head through the village)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%90%E9%85%92%E5%90%8E%E6%9D%80%E5%A6%BB%E7%AB%9F%E6%8F%90%E5%A4%B4%E9%A2%85%E7%A9%BF%E8%A1%8C%E6%9D%91%E5%BA%84%23) `293.9K 🔥` `NEW`
1. [时代峰峻把微店告了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%8A%8A%E5%BE%AE%E5%BA%97%E5%91%8A%E4%BA%86%23) `293.4K 🔥` `NEW`
1. [华晨宇演唱会当地民众发声](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E5%BD%93%E5%9C%B0%E6%B0%91%E4%BC%97%E5%8F%91%E5%A3%B0%23) `293.1K 🔥` `NEW`
1. [这才是普通家庭养孩子的最优解](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E6%99%AE%E9%80%9A%E5%AE%B6%E5%BA%AD%E5%85%BB%E5%AD%A9%E5%AD%90%E7%9A%84%E6%9C%80%E4%BC%98%E8%A7%A3%23) `292.8K 🔥` `NEW`
1. [孙杨 张豆豆](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E5%BC%A0%E8%B1%86%E8%B1%86%23) `292.3K 🔥` `NEW`
1. [安崎李心洁 神级舞台](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E6%9D%8E%E5%BF%83%E6%B4%81%20%E7%A5%9E%E7%BA%A7%E8%88%9E%E5%8F%B0%23) `292.1K 🔥` `NEW`
1. [金价跌破新低](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E7%A0%B4%E6%96%B0%E4%BD%8E%23) `291.6K 🔥` `NEW`
1. [曾沛慈 求求不要](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E6%B1%82%E6%B1%82%E4%B8%8D%E8%A6%81%23) `291.1K 🔥` `NEW`
1. [孙怡团805票](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%9B%A2805%E7%A5%A8%23) `290.9K 🔥` `NEW`
1. [男子30年前被扣押2859克黄金未返还](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9030%E5%B9%B4%E5%89%8D%E8%A2%AB%E6%89%A3%E6%8A%BC2859%E5%85%8B%E9%BB%84%E9%87%91%E6%9C%AA%E8%BF%94%E8%BF%98%23) `277.8K 🔥` `NEW`
1. [C罗认为人类喝牛奶不正常 (Cristiano Ronaldo thinks drinking milk is abnormal for humans)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%AE%A4%E4%B8%BA%E4%BA%BA%E7%B1%BB%E5%96%9D%E7%89%9B%E5%A5%B6%E4%B8%8D%E6%AD%A3%E5%B8%B8%23) `272.0K 🔥` `NEW`
1. [以色列总理证实患癌但已治疗](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%80%BB%E7%90%86%E8%AF%81%E5%AE%9E%E6%82%A3%E7%99%8C%E4%BD%86%E5%B7%B2%E6%B2%BB%E7%96%97%23) `269.2K 🔥` `NEW`
1. [张杰工作室文案](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%96%87%E6%A1%88%23) `267.3K 🔥` `NEW`
1. [海哈金喜回应与李亚鹏复婚](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%93%88%E9%87%91%E5%96%9C%E5%9B%9E%E5%BA%94%E4%B8%8E%E6%9D%8E%E4%BA%9A%E9%B9%8F%E5%A4%8D%E5%A9%9A%23) `264.5K 🔥` `NEW`
1. [原来内耗的人需要的是这样的安慰](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%85%E8%80%97%E7%9A%84%E4%BA%BA%E9%9C%80%E8%A6%81%E7%9A%84%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%E5%AE%89%E6%85%B0%23) `257.6K 🔥` `NEW`
1. [伊能静上妻旅是秦昊的想法](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E4%B8%8A%E5%A6%BB%E6%97%85%E6%98%AF%E7%A7%A6%E6%98%8A%E7%9A%84%E6%83%B3%E6%B3%95%23) `255.2K 🔥` `NEW`
1. [网友开始嗑李昀锐和白鹿](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%BC%80%E5%A7%8B%E5%97%91%E6%9D%8E%E6%98%80%E9%94%90%E5%92%8C%E7%99%BD%E9%B9%BF%23) `243.6K 🔥` `NEW`
1. [男子投诉救护车迟到致幼子身亡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8A%95%E8%AF%89%E6%95%91%E6%8A%A4%E8%BD%A6%E8%BF%9F%E5%88%B0%E8%87%B4%E5%B9%BC%E5%AD%90%E8%BA%AB%E4%BA%A1%23) `234.1K 🔥` `NEW`
1. [孙杨 爷们要脸](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E7%88%B7%E4%BB%AC%E8%A6%81%E8%84%B8%23) `234.1K 🔥` `NEW`
1. [叶一茜 最长的电影](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E4%B8%80%E8%8C%9C%20%E6%9C%80%E9%95%BF%E7%9A%84%E7%94%B5%E5%BD%B1%23) `233.9K 🔥` `NEW`
1. [12306回应家长和孩子相隔14个车厢 (12306 responded that parents and children are separated by 14 carriages)](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E5%AE%B6%E9%95%BF%E5%92%8C%E5%AD%A9%E5%AD%90%E7%9B%B8%E9%9A%9414%E4%B8%AA%E8%BD%A6%E5%8E%A2%23) `218.7K 🔥` `NEW`
1. [孙杨 保送再见爱人](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E4%BF%9D%E9%80%81%E5%86%8D%E8%A7%81%E7%88%B1%E4%BA%BA%23) `217.1K 🔥` `NEW`
1. [杨超越变美了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E5%8F%98%E7%BE%8E%E4%BA%86%23) `214.6K 🔥` `NEW`
1. [高校一男生戴假发进女生宿舍偷拍](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%A0%A1%E4%B8%80%E7%94%B7%E7%94%9F%E6%88%B4%E5%81%87%E5%8F%91%E8%BF%9B%E5%A5%B3%E7%94%9F%E5%AE%BF%E8%88%8D%E5%81%B7%E6%8B%8D%23) `202.2K 🔥` `NEW`
1. [李现疑似对共享单车粉转黑](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E7%96%91%E4%BC%BC%E5%AF%B9%E5%85%B1%E4%BA%AB%E5%8D%95%E8%BD%A6%E7%B2%89%E8%BD%AC%E9%BB%91%23) `198.6K 🔥` `NEW`
1. [范玮琪咋自己玩上了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E7%8E%AE%E7%90%AA%E5%92%8B%E8%87%AA%E5%B7%B1%E7%8E%A9%E4%B8%8A%E4%BA%86%23) `198.5K 🔥` `NEW`
1. [黄金跌透了吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E9%80%8F%E4%BA%86%E5%90%97%23) `198.1K 🔥` `NEW`
1. [牙龈萎缩之后还能再长回来吗](https://s.weibo.com/weibo?q=%23%E7%89%99%E9%BE%88%E8%90%8E%E7%BC%A9%E4%B9%8B%E5%90%8E%E8%BF%98%E8%83%BD%E5%86%8D%E9%95%BF%E5%9B%9E%E6%9D%A5%E5%90%97%23) `197.4K 🔥` `NEW`
1. [AI在保护AI](https://s.weibo.com/weibo?q=%23AI%E5%9C%A8%E4%BF%9D%E6%8A%A4AI%23) `197.2K 🔥` `NEW`
1. [美国女子在印度遭民宿员工下药强奸](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%8D%B0%E5%BA%A6%E9%81%AD%E6%B0%91%E5%AE%BF%E5%91%98%E5%B7%A5%E4%B8%8B%E8%8D%AF%E5%BC%BA%E5%A5%B8%23) `196.6K 🔥` `NEW`
1. [大学生起诉海航提前10分钟起飞 (College student sues HNA for taking off 10 minutes early)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%B5%B7%E8%AF%89%E6%B5%B7%E8%88%AA%E6%8F%90%E5%89%8D10%E5%88%86%E9%92%9F%E8%B5%B7%E9%A3%9E%23) `196.3K 🔥` `NEW`
1. [梅毒并非只通过性传播](https://s.weibo.com/weibo?q=%23%E6%A2%85%E6%AF%92%E5%B9%B6%E9%9D%9E%E5%8F%AA%E9%80%9A%E8%BF%87%E6%80%A7%E4%BC%A0%E6%92%AD%23) `195.7K 🔥` `NEW`

Updated at 2026-04-25 00:31:25

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
