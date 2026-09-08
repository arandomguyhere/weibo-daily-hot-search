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

1. [澳门冠军赛男单32强赛](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E9%97%A8%E5%86%A0%E5%86%9B%E8%B5%9B%E7%94%B7%E5%8D%9532%E5%BC%BA%E8%B5%9B%23) `56.0K 🔥` `NEW`
1. [做饭时的一个小改变就可以控血糖](https://s.weibo.com/weibo?q=%23%E5%81%9A%E9%A5%AD%E6%97%B6%E7%9A%84%E4%B8%80%E4%B8%AA%E5%B0%8F%E6%94%B9%E5%8F%98%E5%B0%B1%E5%8F%AF%E4%BB%A5%E6%8E%A7%E8%A1%80%E7%B3%96%23) `53.6K 🔥` `NEW`
1. [孩子写作业千万别只开台灯](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%86%99%E4%BD%9C%E4%B8%9A%E5%8D%83%E4%B8%87%E5%88%AB%E5%8F%AA%E5%BC%80%E5%8F%B0%E7%81%AF%23) `53.5K 🔥` `NEW`
1. [女子吃墨鱼吃出剧毒红斑斗蟹](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%83%E5%A2%A8%E9%B1%BC%E5%90%83%E5%87%BA%E5%89%A7%E6%AF%92%E7%BA%A2%E6%96%91%E6%96%97%E8%9F%B9%23) `50.3K 🔥` `NEW`
1. [青岛小店卖咖啡36岁以上老人2.99元](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E5%B0%8F%E5%BA%97%E5%8D%96%E5%92%96%E5%95%A136%E5%B2%81%E4%BB%A5%E4%B8%8A%E8%80%81%E4%BA%BA2.99%E5%85%83%23) `50.3K 🔥` `NEW`
1. [农村老人 骨质疏松](https://s.weibo.com/weibo?q=%23%E5%86%9C%E6%9D%91%E8%80%81%E4%BA%BA%20%E9%AA%A8%E8%B4%A8%E7%96%8F%E6%9D%BE%23) `50.3K 🔥` `NEW`
1. [萨巴伦卡抢十险胜6号种子诺斯科娃](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E6%8A%A2%E5%8D%81%E9%99%A9%E8%83%9C6%E5%8F%B7%E7%A7%8D%E5%AD%90%E8%AF%BA%E6%96%AF%E7%A7%91%E5%A8%83%23) `50.2K 🔥` `NEW`
1. [百分之三十的爱也是爱](https://s.weibo.com/weibo?q=%23%E7%99%BE%E5%88%86%E4%B9%8B%E4%B8%89%E5%8D%81%E7%9A%84%E7%88%B1%E4%B9%9F%E6%98%AF%E7%88%B1%23) `50.2K 🔥` `NEW`
1. [郑钦文父亲说未来会给大家更多惊喜](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%88%B6%E4%BA%B2%E8%AF%B4%E6%9C%AA%E6%9D%A5%E4%BC%9A%E7%BB%99%E5%A4%A7%E5%AE%B6%E6%9B%B4%E5%A4%9A%E6%83%8A%E5%96%9C%23) `50.2K 🔥` `NEW`
1. [这段话杀死了内耗型人格](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E6%9D%80%E6%AD%BB%E4%BA%86%E5%86%85%E8%80%97%E5%9E%8B%E4%BA%BA%E6%A0%BC%23) `1.2M 🔥` `+417%`
1. [这样的吃播该全面叫停了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E7%9A%84%E5%90%83%E6%92%AD%E8%AF%A5%E5%85%A8%E9%9D%A2%E5%8F%AB%E5%81%9C%E4%BA%86%23) `489.4K 🔥` `+374%`
1. [平陆运河9月16日建成通航](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E9%99%86%E8%BF%90%E6%B2%B39%E6%9C%8816%E6%97%A5%E5%BB%BA%E6%88%90%E9%80%9A%E8%88%AA%23) `378.9K 🔥` `+406%`
1. [医生眼里让大脑休息最好的方法](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%9C%BC%E9%87%8C%E8%AE%A9%E5%A4%A7%E8%84%91%E4%BC%91%E6%81%AF%E6%9C%80%E5%A5%BD%E7%9A%84%E6%96%B9%E6%B3%95%23) `176.7K 🔥` `+253%`
1. [意识到婴儿行为不可预测的猫](https://s.weibo.com/weibo?q=%23%E6%84%8F%E8%AF%86%E5%88%B0%E5%A9%B4%E5%84%BF%E8%A1%8C%E4%B8%BA%E4%B8%8D%E5%8F%AF%E9%A2%84%E6%B5%8B%E7%9A%84%E7%8C%AB%23) `160.1K 🔥` `+364%`
1. [早春晴朗原版台词 只是睡了6年](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%8E%9F%E7%89%88%E5%8F%B0%E8%AF%8D%20%E5%8F%AA%E6%98%AF%E7%9D%A1%E4%BA%866%E5%B9%B4%23) `90.2K 🔥` `+163%`
1. [金球奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%90%83%E5%A5%96%23) `88.5K 🔥` `+138%`
1. [萨巴伦卡连续6年进美网四强](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E8%BF%9E%E7%BB%AD6%E5%B9%B4%E8%BF%9B%E7%BE%8E%E7%BD%91%E5%9B%9B%E5%BC%BA%23) `87.1K 🔥` `+88%`
1. [特朗普一次惹了20国](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%80%E6%AC%A1%E6%83%B9%E4%BA%8620%E5%9B%BD%23) `87.0K 🔥` `+150%`
1. [00后现状怎么做到全国统一的](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E7%8E%B0%E7%8A%B6%E6%80%8E%E4%B9%88%E5%81%9A%E5%88%B0%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84%23) `85.1K 🔥` `+145%`
1. [双休不一定是休周六周日](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%BC%91%E4%B8%8D%E4%B8%80%E5%AE%9A%E6%98%AF%E4%BC%91%E5%91%A8%E5%85%AD%E5%91%A8%E6%97%A5%23) `83.3K 🔥` `+117%`
1. [印度21岁女运动员因外貌走红](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A621%E5%B2%81%E5%A5%B3%E8%BF%90%E5%8A%A8%E5%91%98%E5%9B%A0%E5%A4%96%E8%B2%8C%E8%B5%B0%E7%BA%A2%23) `83.3K 🔥` `+120%`
1. [女子还不起房贷喊话前男友收回](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%98%E4%B8%8D%E8%B5%B7%E6%88%BF%E8%B4%B7%E5%96%8A%E8%AF%9D%E5%89%8D%E7%94%B7%E5%8F%8B%E6%94%B6%E5%9B%9E%23) `81.6K 🔥` `+120%`
1. [Crisp力挺TheShy](https://s.weibo.com/weibo?q=%23Crisp%E5%8A%9B%E6%8C%BATheShy%23) `75.6K 🔥` `+56%`
1. [苹果用户换华为](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E7%94%A8%E6%88%B7%E6%8D%A2%E5%8D%8E%E4%B8%BA%23) `75.4K 🔥` `+112%`
1. [吃播已成吃人的流量赛道](https://s.weibo.com/weibo?q=%23%E5%90%83%E6%92%AD%E5%B7%B2%E6%88%90%E5%90%83%E4%BA%BA%E7%9A%84%E6%B5%81%E9%87%8F%E8%B5%9B%E9%81%93%23) `55.7K 🔥` `+61%`
1. [AI吃播](https://s.weibo.com/weibo?q=%23AI%E5%90%83%E6%92%AD%23) `55.1K 🔥` `+21%`
1. [我的前半生](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%23) `53.8K 🔥` `+55%`
1. [什么是人生最顶级的享受](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%98%AF%E4%BA%BA%E7%94%9F%E6%9C%80%E9%A1%B6%E7%BA%A7%E7%9A%84%E4%BA%AB%E5%8F%97%23) `53.8K 🔥` `+55%`
1. [受资助女孩质问为何没打生活费](https://s.weibo.com/weibo?q=%23%E5%8F%97%E8%B5%84%E5%8A%A9%E5%A5%B3%E5%AD%A9%E8%B4%A8%E9%97%AE%E4%B8%BA%E4%BD%95%E6%B2%A1%E6%89%93%E7%94%9F%E6%B4%BB%E8%B4%B9%23) `53.7K 🔥` `+55%`
1. [一家三口吃单人锅只点一份大闹餐厅](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%90%83%E5%8D%95%E4%BA%BA%E9%94%85%E5%8F%AA%E7%82%B9%E4%B8%80%E4%BB%BD%E5%A4%A7%E9%97%B9%E9%A4%90%E5%8E%85%23) `53.6K 🔥` `+54%`
1. [C罗18次金球提名依旧领跑](https://s.weibo.com/weibo?q=%23C%E7%BD%9718%E6%AC%A1%E9%87%91%E7%90%83%E6%8F%90%E5%90%8D%E4%BE%9D%E6%97%A7%E9%A2%86%E8%B7%91%23) `53.0K 🔥` `+53%`
1. [腿脚不便大妈来退儿子买给女友衣服](https://s.weibo.com/weibo?q=%23%E8%85%BF%E8%84%9A%E4%B8%8D%E4%BE%BF%E5%A4%A7%E5%A6%88%E6%9D%A5%E9%80%80%E5%84%BF%E5%AD%90%E4%B9%B0%E7%BB%99%E5%A5%B3%E5%8F%8B%E8%A1%A3%E6%9C%8D%23) `51.9K 🔥` `+50%`
1. [郑钦文以2260万美元位列世界网坛收入榜第七](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%BB%A52260%E4%B8%87%E7%BE%8E%E5%85%83%E4%BD%8D%E5%88%97%E4%B8%96%E7%95%8C%E7%BD%91%E5%9D%9B%E6%94%B6%E5%85%A5%E6%A6%9C%E7%AC%AC%E4%B8%83%23) `50.3K 🔥` `+47%`
1. [韩女之间正在流行的苹果派](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%A5%B3%E4%B9%8B%E9%97%B4%E6%AD%A3%E5%9C%A8%E6%B5%81%E8%A1%8C%E7%9A%84%E8%8B%B9%E6%9E%9C%E6%B4%BE%23) `50.3K 🔥` `+46%`
1. [低保香港演唱会事件 命运捉弄人](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E4%BF%9D%E9%A6%99%E6%B8%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%8B%E4%BB%B6%20%E5%91%BD%E8%BF%90%E6%8D%89%E5%BC%84%E4%BA%BA%23) `50.3K 🔥` `+46%`
1. [整个英语体系没有比这个更完整的了](https://s.weibo.com/weibo?q=%23%E6%95%B4%E4%B8%AA%E8%8B%B1%E8%AF%AD%E4%BD%93%E7%B3%BB%E6%B2%A1%E6%9C%89%E6%AF%94%E8%BF%99%E4%B8%AA%E6%9B%B4%E5%AE%8C%E6%95%B4%E7%9A%84%E4%BA%86%23) `50.3K 🔥` `+46%`
1. [张雪机车把打工人尊严焊死合同里](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8A%8A%E6%89%93%E5%B7%A5%E4%BA%BA%E5%B0%8A%E4%B8%A5%E7%84%8A%E6%AD%BB%E5%90%88%E5%90%8C%E9%87%8C%23) `50.3K 🔥` `+46%`
1. [诺斯科娃无缘美网4强](https://s.weibo.com/weibo?q=%23%E8%AF%BA%E6%96%AF%E7%A7%91%E5%A8%83%E6%97%A0%E7%BC%98%E7%BE%8E%E7%BD%914%E5%BC%BA%23) `50.2K 🔥` `+46%`
1. [郑钦文vs莱巴金娜前瞻](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E5%89%8D%E7%9E%BB%23) `50.2K 🔥` `+46%`
1. [旅行青蛙](https://s.weibo.com/weibo?q=%23%E6%97%85%E8%A1%8C%E9%9D%92%E8%9B%99%23) `50.2K 🔥` `+44%`
1. [吃紧急避孕药时机真的很关键](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%B4%A7%E6%80%A5%E9%81%BF%E5%AD%95%E8%8D%AF%E6%97%B6%E6%9C%BA%E7%9C%9F%E7%9A%84%E5%BE%88%E5%85%B3%E9%94%AE%23) `50.2K 🔥` `+31%`
1. [诺斯科娃破发萨巴伦卡](https://s.weibo.com/weibo?q=%23%E8%AF%BA%E6%96%AF%E7%A7%91%E5%A8%83%E7%A0%B4%E5%8F%91%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%23) `50.2K 🔥` `+46%`
1. [中国女篮 冲八强](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%20%E5%86%B2%E5%85%AB%E5%BC%BA%23) `50.2K 🔥` `+46%`
1. [金球奖30人候选名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%90%83%E5%A5%9630%E4%BA%BA%E5%80%99%E9%80%89%E5%90%8D%E5%8D%95%23) `50.1K 🔥` `+45%`
1. [打了21个耳洞的耳朵](https://s.weibo.com/weibo?q=%23%E6%89%93%E4%BA%8621%E4%B8%AA%E8%80%B3%E6%B4%9E%E7%9A%84%E8%80%B3%E6%9C%B5%23) `50.1K 🔥` `+45%`
1. [郑钦文 赞助商高兴坏了](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%20%E8%B5%9E%E5%8A%A9%E5%95%86%E9%AB%98%E5%85%B4%E5%9D%8F%E4%BA%86%23) `50.1K 🔥` `+46%`
1. [刘畅邓恩熙有牵手戏份](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%95%85%E9%82%93%E6%81%A9%E7%86%99%E6%9C%89%E7%89%B5%E6%89%8B%E6%88%8F%E4%BB%BD%23) `50.1K 🔥` `+22%`
1. [A股现54亿天价离婚](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%8E%B054%E4%BA%BF%E5%A4%A9%E4%BB%B7%E7%A6%BB%E5%A9%9A%23) `50.1K 🔥` `+45%`
1. [郑钦文 冲击美网四强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%20%E5%86%B2%E5%87%BB%E7%BE%8E%E7%BD%91%E5%9B%9B%E5%BC%BA%23) `55.8K 🔥`
1. [哈兰德贝林厄姆入选金球奖名单](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E5%85%A5%E9%80%89%E9%87%91%E7%90%83%E5%A5%96%E5%90%8D%E5%8D%95%23) `50.1K 🔥` `-40%`

Updated at 2026-09-09 06:46:08

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
