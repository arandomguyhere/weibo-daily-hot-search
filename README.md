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

1. [iPhoneDuo 屏下摄像头](https://s.weibo.com/weibo?q=%23iPhoneDuo%20%E5%B1%8F%E4%B8%8B%E6%91%84%E5%83%8F%E5%A4%B4%23) `935.4K 🔥` `NEW`
1. [AirPods5 便宜](https://s.weibo.com/weibo?q=%23AirPods5%20%E4%BE%BF%E5%AE%9C%23) `301.2K 🔥` `NEW`
1. [檀健次豪士面包全球品牌代言人](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E8%B1%AA%E5%A3%AB%E9%9D%A2%E5%8C%85%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `279.8K 🔥` `NEW`
1. [iPhoneDuo价格](https://s.weibo.com/weibo?q=%23iPhoneDuo%E4%BB%B7%E6%A0%BC%23) `279.8K 🔥` `NEW`
1. [郑钦文美网1比2莱巴金娜](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%BE%8E%E7%BD%911%E6%AF%942%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%23) `256.0K 🔥` `NEW`
1. [苹果 涨价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%20%E6%B6%A8%E4%BB%B7%23) `205.8K 🔥` `NEW`
1. [苹果回应iPhoneDuo是否有折痕](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%9B%9E%E5%BA%94iPhoneDuo%E6%98%AF%E5%90%A6%E6%9C%89%E6%8A%98%E7%97%95%23) `184.3K 🔥` `NEW`
1. [郑钦文美网止步八强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%BE%8E%E7%BD%91%E6%AD%A2%E6%AD%A5%E5%85%AB%E5%BC%BA%23) `158.1K 🔥` `NEW`
1. [iPhone18Pro 充电速度](https://s.weibo.com/weibo?q=%23iPhone18Pro%20%E5%85%85%E7%94%B5%E9%80%9F%E5%BA%A6%23) `143.7K 🔥` `NEW`
1. [无折痕](https://s.weibo.com/weibo?q=%23%E6%97%A0%E6%8A%98%E7%97%95%23) `102.2K 🔥` `NEW`
1. [中国女篮 有惊无险进八强](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%20%E6%9C%89%E6%83%8A%E6%97%A0%E9%99%A9%E8%BF%9B%E5%85%AB%E5%BC%BA%23) `99.5K 🔥` `NEW`
1. [iPhone18上手评测](https://s.weibo.com/weibo?q=%23iPhone18%E4%B8%8A%E6%89%8B%E8%AF%84%E6%B5%8B%23) `80.5K 🔥` `NEW`
1. [Series12 Ultra4](https://s.weibo.com/weibo?q=%23Series12%20Ultra4%23) `68.5K 🔥` `NEW`
1. [郑钦文回应无缘美网四强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%9B%9E%E5%BA%94%E6%97%A0%E7%BC%98%E7%BE%8E%E7%BD%91%E5%9B%9B%E5%BC%BA%23) `61.7K 🔥` `NEW`
1. [冰川蓝好好看](https://s.weibo.com/weibo?q=%23%E5%86%B0%E5%B7%9D%E8%93%9D%E5%A5%BD%E5%A5%BD%E7%9C%8B%23) `60.8K 🔥` `NEW`
1. [郑钦文7连胜遭终结](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%877%E8%BF%9E%E8%83%9C%E9%81%AD%E7%BB%88%E7%BB%93%23) `57.1K 🔥` `NEW`
1. [18岁小伙熬夜猝死生前叫早些睡](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E5%B0%8F%E4%BC%99%E7%86%AC%E5%A4%9C%E7%8C%9D%E6%AD%BB%E7%94%9F%E5%89%8D%E5%8F%AB%E6%97%A9%E4%BA%9B%E7%9D%A1%23) `57.0K 🔥` `NEW`
1. [iPhone18Pro价格](https://s.weibo.com/weibo?q=%23iPhone18Pro%E4%BB%B7%E6%A0%BC%23) `1.6M 🔥`
1. [一图速览2026年服贸会](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%9B%BE%E9%80%9F%E8%A7%882026%E5%B9%B4%E6%9C%8D%E8%B4%B8%E4%BC%9A%23) `675.7K 🔥` `-68%`
1. [被取消资助女生愿换掉苹果手机](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%8F%96%E6%B6%88%E8%B5%84%E5%8A%A9%E5%A5%B3%E7%94%9F%E6%84%BF%E6%8D%A2%E6%8E%89%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%23) `507.0K 🔥` `-65%`
1. [苹果发布会](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%23) `279.8K 🔥` `-97%`
1. [iPhone18Pro颜色](https://s.weibo.com/weibo?q=%23iPhone18Pro%E9%A2%9C%E8%89%B2%23) `274.5K 🔥` `-34%`
1. [抖音礼物 擦边](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E7%A4%BC%E7%89%A9%20%E6%93%A6%E8%BE%B9%23) `184.6K 🔥` `-55%`
1. [刘恋想问早春晴朗作者自己是不是原型](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%81%8B%E6%83%B3%E9%97%AE%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E4%BD%9C%E8%80%85%E8%87%AA%E5%B7%B1%E6%98%AF%E4%B8%8D%E6%98%AF%E5%8E%9F%E5%9E%8B%23) `133.0K 🔥` `-54%`
1. [抖音擦边礼物被下架](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E6%93%A6%E8%BE%B9%E7%A4%BC%E7%89%A9%E8%A2%AB%E4%B8%8B%E6%9E%B6%23) `131.5K 🔥` `-68%`
1. [iPhone18Pro 勃艮第红](https://s.weibo.com/weibo?q=%23iPhone18Pro%20%E5%8B%83%E8%89%AE%E7%AC%AC%E7%BA%A2%23) `114.0K 🔥` `-89%`
1. [郑钦文vs莱巴金娜](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%23) `100.3K 🔥` `-96%`
1. [又要低人一等了](https://s.weibo.com/weibo?q=%23%E5%8F%88%E8%A6%81%E4%BD%8E%E4%BA%BA%E4%B8%80%E7%AD%89%E4%BA%86%23) `93.3K 🔥` `-33%`
1. [康康爷爷睡梦中离世](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E5%BA%B7%E7%88%B7%E7%88%B7%E7%9D%A1%E6%A2%A6%E4%B8%AD%E7%A6%BB%E4%B8%96%23) `80.3K 🔥` `-78%`
1. [iPhone Duo](https://s.weibo.com/weibo?q=%23iPhone%20Duo%23) `77.0K 🔥` `-45%`
1. [中国女篮vs波多黎各女篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AEvs%E6%B3%A2%E5%A4%9A%E9%BB%8E%E5%90%84%E5%A5%B3%E7%AF%AE%23) `69.6K 🔥` `-84%`
1. [宁德时代已报警](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `66.3K 🔥` `-72%`
1. [低保户 空调](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E4%BF%9D%E6%88%B7%20%E7%A9%BA%E8%B0%83%23) `64.5K 🔥` `-71%`
1. [苹果发布会有何亮点](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%E6%9C%89%E4%BD%95%E4%BA%AE%E7%82%B9%23) `62.2K 🔥` `-55%`
1. [女子爱发语音突然打字家人报警](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%88%B1%E5%8F%91%E8%AF%AD%E9%9F%B3%E7%AA%81%E7%84%B6%E6%89%93%E5%AD%97%E5%AE%B6%E4%BA%BA%E6%8A%A5%E8%AD%A6%23) `61.7K 🔥` `-50%`
1. [以为iPhone和多邻国联名了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BAiPhone%E5%92%8C%E5%A4%9A%E9%82%BB%E5%9B%BD%E8%81%94%E5%90%8D%E4%BA%86%23) `60.7K 🔥` `-56%`
1. [痞幼说以结婚为目的恋爱是不负责任](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E8%AF%B4%E4%BB%A5%E7%BB%93%E5%A9%9A%E4%B8%BA%E7%9B%AE%E7%9A%84%E6%81%8B%E7%88%B1%E6%98%AF%E4%B8%8D%E8%B4%9F%E8%B4%A3%E4%BB%BB%23) `60.3K 🔥` `-49%`
1. [女篮](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%AF%AE%23) `57.1K 🔥` `-86%`
1. [终于吃上教师资格证的红利了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E5%90%83%E4%B8%8A%E6%95%99%E5%B8%88%E8%B5%84%E6%A0%BC%E8%AF%81%E7%9A%84%E7%BA%A2%E5%88%A9%E4%BA%86%23) `57.1K 🔥` `-59%`
1. [爱情公寓超长iPhone18](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E8%B6%85%E9%95%BFiPhone18%23) `57.1K 🔥` `-47%`
1. [iPhone18Pro灵动岛新功能](https://s.weibo.com/weibo?q=%23iPhone18Pro%E7%81%B5%E5%8A%A8%E5%B2%9B%E6%96%B0%E5%8A%9F%E8%83%BD%23) `57.0K 🔥` `-49%`
1. [订了间700块的房间进门被震惊到了](https://s.weibo.com/weibo?q=%23%E8%AE%A2%E4%BA%86%E9%97%B4700%E5%9D%97%E7%9A%84%E6%88%BF%E9%97%B4%E8%BF%9B%E9%97%A8%E8%A2%AB%E9%9C%87%E6%83%8A%E5%88%B0%E4%BA%86%23) `57.0K 🔥` `-52%`
1. [教师节](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E8%8A%82%23) `57.0K 🔥` `-41%`
1. [詹俊预测郑钦文莱巴金娜将战决胜盘](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E4%BF%8A%E9%A2%84%E6%B5%8B%E9%83%91%E9%92%A6%E6%96%87%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E5%B0%86%E6%88%98%E5%86%B3%E8%83%9C%E7%9B%98%23) `57.0K 🔥` `-66%`
1. [弟弟回应18岁双胞胎哥哥熬夜猝死](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E5%9B%9E%E5%BA%9418%E5%B2%81%E5%8F%8C%E8%83%9E%E8%83%8E%E5%93%A5%E5%93%A5%E7%86%AC%E5%A4%9C%E7%8C%9D%E6%AD%BB%23) `57.0K 🔥` `-44%`
1. [科技春晚](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E6%98%A5%E6%99%9A%23) `57.0K 🔥` `-61%`
1. [美网2026](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%912026%23) `57.0K 🔥` `-24%`
1. [iPhone18系列](https://s.weibo.com/weibo?q=%23iPhone18%E7%B3%BB%E5%88%97%23) `57.0K 🔥` `-59%`
1. [宁德时代市值蒸发超5200亿](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E5%B8%82%E5%80%BC%E8%92%B8%E5%8F%91%E8%B6%855200%E4%BA%BF%23) `57.0K 🔥` `-24%`
1. [梅姨](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%23) `56.9K 🔥` `-23%`
1. [早春晴朗好大方的花絮](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%A5%BD%E5%A4%A7%E6%96%B9%E7%9A%84%E8%8A%B1%E7%B5%AE%23) `56.9K 🔥` `-46%`

Updated at 2026-09-10 04:10:57

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
