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

1. [平平福双已运至亚特兰大动物园](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%B9%B3%E7%A6%8F%E5%8F%8C%E5%B7%B2%E8%BF%90%E8%87%B3%E4%BA%9A%E7%89%B9%E5%85%B0%E5%A4%A7%E5%8A%A8%E7%89%A9%E5%9B%AD%23) `161.4K 🔥` `NEW`
1. [iQOO16新品发布](https://s.weibo.com/weibo?q=%23iQOO16%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%23) `146.0K 🔥` `NEW`
1. [月薪五万该不该买两万包](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA%E4%BA%94%E4%B8%87%E8%AF%A5%E4%B8%8D%E8%AF%A5%E4%B9%B0%E4%B8%A4%E4%B8%87%E5%8C%85%23) `91.9K 🔥` `NEW`
1. [王楚钦 名古屋亚运会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%20%E5%90%8D%E5%8F%A4%E5%B1%8B%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `81.2K 🔥` `NEW`
1. [张家齐大大方方谈钱](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%E8%B0%88%E9%92%B1%23) `76.2K 🔥` `NEW`
1. [张家齐 你和我妈一样篡改记忆](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%20%E4%BD%A0%E5%92%8C%E6%88%91%E5%A6%88%E4%B8%80%E6%A0%B7%E7%AF%A1%E6%94%B9%E8%AE%B0%E5%BF%86%23) `56.4K 🔥` `NEW`
1. [国乒 最后一届亚运](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%20%E6%9C%80%E5%90%8E%E4%B8%80%E5%B1%8A%E4%BA%9A%E8%BF%90%23) `53.5K 🔥` `NEW`
1. [詹姆斯 76人](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%2076%E4%BA%BA%23) `52.8K 🔥` `NEW`
1. [2岁娃疑连吃8个月银鳕鱼汞中毒](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%A8%83%E7%96%91%E8%BF%9E%E5%90%838%E4%B8%AA%E6%9C%88%E9%93%B6%E9%B3%95%E9%B1%BC%E6%B1%9E%E4%B8%AD%E6%AF%92%23) `52.2K 🔥` `NEW`
1. [王楚钦虽一金未得仍当得起一个赞](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%99%BD%E4%B8%80%E9%87%91%E6%9C%AA%E5%BE%97%E4%BB%8D%E5%BD%93%E5%BE%97%E8%B5%B7%E4%B8%80%E4%B8%AA%E8%B5%9E%23) `51.6K 🔥` `NEW`
1. [深圳一街道办深夜打麻将实为视觉误差](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E8%A1%97%E9%81%93%E5%8A%9E%E6%B7%B1%E5%A4%9C%E6%89%93%E9%BA%BB%E5%B0%86%E5%AE%9E%E4%B8%BA%E8%A7%86%E8%A7%89%E8%AF%AF%E5%B7%AE%23) `51.2K 🔥` `NEW`
1. [王楚钦时代没结束林诗栋时代加速开启](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%97%B6%E4%BB%A3%E6%B2%A1%E7%BB%93%E6%9D%9F%E6%9E%97%E8%AF%97%E6%A0%8B%E6%97%B6%E4%BB%A3%E5%8A%A0%E9%80%9F%E5%BC%80%E5%90%AF%23) `50.4K 🔥` `NEW`
1. [高涵亚运乒乓解说风波](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%B6%B5%E4%BA%9A%E8%BF%90%E4%B9%92%E4%B9%93%E8%A7%A3%E8%AF%B4%E9%A3%8E%E6%B3%A2%23) `50.0K 🔥` `NEW`
1. [邓亚萍称王楚钦压力更大](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E7%A7%B0%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8E%8B%E5%8A%9B%E6%9B%B4%E5%A4%A7%23) `49.9K 🔥` `NEW`
1. [蒯曼首战亚运夺3金](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BC%E9%A6%96%E6%88%98%E4%BA%9A%E8%BF%90%E5%A4%BA3%E9%87%91%23) `49.8K 🔥` `NEW`
1. [邓亚萍说林诗栋压着王楚钦打](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E8%AF%B4%E6%9E%97%E8%AF%97%E6%A0%8B%E5%8E%8B%E7%9D%80%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%89%93%23) `49.8K 🔥` `NEW`
1. [短视频榨出穷人唯一还值钱的东西](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E8%A7%86%E9%A2%91%E6%A6%A8%E5%87%BA%E7%A9%B7%E4%BA%BA%E5%94%AF%E4%B8%80%E8%BF%98%E5%80%BC%E9%92%B1%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `49.7K 🔥` `NEW`
1. [侯英超谈王楚钦银牌](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E8%8B%B1%E8%B6%85%E8%B0%88%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%93%B6%E7%89%8C%23) `49.7K 🔥` `NEW`
1. [麻袋装礼物被嘲笑后反转](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E8%A2%8B%E8%A3%85%E7%A4%BC%E7%89%A9%E8%A2%AB%E5%98%B2%E7%AC%91%E5%90%8E%E5%8F%8D%E8%BD%AC%23) `49.7K 🔥` `NEW`
1. [林诗栋赢在了哪](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E8%B5%A2%E5%9C%A8%E4%BA%86%E5%93%AA%23) `49.6K 🔥` `NEW`
1. [程靖淇说舆论对王楚钦是种消耗](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E9%9D%96%E6%B7%87%E8%AF%B4%E8%88%86%E8%AE%BA%E5%AF%B9%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%98%AF%E7%A7%8D%E6%B6%88%E8%80%97%23) `49.6K 🔥` `NEW`
1. [丹顶鹤耍流氓被押送回去](https://s.weibo.com/weibo?q=%23%E4%B8%B9%E9%A1%B6%E9%B9%A4%E8%80%8D%E6%B5%81%E6%B0%93%E8%A2%AB%E6%8A%BC%E9%80%81%E5%9B%9E%E5%8E%BB%23) `49.6K 🔥` `NEW`
1. [经济学家担心恩格斯停顿重现](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E6%B5%8E%E5%AD%A6%E5%AE%B6%E6%8B%85%E5%BF%83%E6%81%A9%E6%A0%BC%E6%96%AF%E5%81%9C%E9%A1%BF%E9%87%8D%E7%8E%B0%23) `49.5K 🔥` `NEW`
1. [SpaceX星舰首次尝试入轨失败](https://s.weibo.com/weibo?q=%23SpaceX%E6%98%9F%E8%88%B0%E9%A6%96%E6%AC%A1%E5%B0%9D%E8%AF%95%E5%85%A5%E8%BD%A8%E5%A4%B1%E8%B4%A5%23) `49.5K 🔥` `NEW`
1. [终于理解爸爸为何对人有怨言](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%90%86%E8%A7%A3%E7%88%B8%E7%88%B8%E4%B8%BA%E4%BD%95%E5%AF%B9%E4%BA%BA%E6%9C%89%E6%80%A8%E8%A8%80%23) `49.4K 🔥` `NEW`
1. [何猷君妈妈感谢奚梦瑶生了2个小孩](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A6%88%E5%A6%88%E6%84%9F%E8%B0%A2%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%94%9F%E4%BA%862%E4%B8%AA%E5%B0%8F%E5%AD%A9%23) `49.4K 🔥` `NEW`
1. [刘学义回复南客](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%9B%9E%E5%A4%8D%E5%8D%97%E5%AE%A2%23) `49.3K 🔥` `NEW`
1. [76人首发五虎](https://s.weibo.com/weibo?q=%2376%E4%BA%BA%E9%A6%96%E5%8F%91%E4%BA%94%E8%99%8E%23) `49.3K 🔥` `NEW`
1. [王楚钦曾表示自己正在补基础](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%9B%BE%E8%A1%A8%E7%A4%BA%E8%87%AA%E5%B7%B1%E6%AD%A3%E5%9C%A8%E8%A1%A5%E5%9F%BA%E7%A1%80%23) `49.3K 🔥` `NEW`
1. [中国男子百米接力卫冕夺金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%90%E7%99%BE%E7%B1%B3%E6%8E%A5%E5%8A%9B%E5%8D%AB%E5%86%95%E5%A4%BA%E9%87%91%23) `49.2K 🔥` `NEW`
1. [王楚钦快速摘掉银牌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%BF%AB%E9%80%9F%E6%91%98%E6%8E%89%E9%93%B6%E7%89%8C%23) `428.9K 🔥` `-74%`
1. [Tiffany 小红书](https://s.weibo.com/weibo?q=%23Tiffany%20%E5%B0%8F%E7%BA%A2%E4%B9%A6%23) `216.2K 🔥` `-84%`
1. [女顾客吐槽Tiffany后账号被限制](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%A1%BE%E5%AE%A2%E5%90%90%E6%A7%BDTiffany%E5%90%8E%E8%B4%A6%E5%8F%B7%E8%A2%AB%E9%99%90%E5%88%B6%23) `124.9K 🔥` `-86%`
1. [涨薪意识](https://s.weibo.com/weibo?q=%23%E6%B6%A8%E8%96%AA%E6%84%8F%E8%AF%86%23) `57.5K 🔥` `-94%`
1. [华鼎奖提名名单](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E9%BC%8E%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `53.9K 🔥` `-96%`
1. [中国女子百米接力金牌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E7%99%BE%E7%B1%B3%E6%8E%A5%E5%8A%9B%E9%87%91%E7%89%8C%23) `50.2K 🔥` `-87%`
1. [刘欢亲弟弟刘啸声音太像刘欢](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E4%BA%B2%E5%BC%9F%E5%BC%9F%E5%88%98%E5%95%B8%E5%A3%B0%E9%9F%B3%E5%A4%AA%E5%83%8F%E5%88%98%E6%AC%A2%23) `50.1K 🔥` `-79%`
1. [巴黎时装周](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E6%97%B6%E8%A3%85%E5%91%A8%23) `50.1K 🔥` `-76%`
1. [李蠕蠕收入比娱乐圈很多人高](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%A0%95%E8%A0%95%E6%94%B6%E5%85%A5%E6%AF%94%E5%A8%B1%E4%B9%90%E5%9C%88%E5%BE%88%E5%A4%9A%E4%BA%BA%E9%AB%98%23) `50.1K 🔥` `-87%`
1. [9种面相提示心脏出问题了](https://s.weibo.com/weibo?q=%239%E7%A7%8D%E9%9D%A2%E7%9B%B8%E6%8F%90%E7%A4%BA%E5%BF%83%E8%84%8F%E5%87%BA%E9%97%AE%E9%A2%98%E4%BA%86%23) `50.0K 🔥` `-77%`
1. [林诗栋金牌](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E9%87%91%E7%89%8C%23) `50.0K 🔥` `-78%`
1. [王楚钦vs林诗栋](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E6%9E%97%E8%AF%97%E6%A0%8B%23) `50.0K 🔥` `-87%`
1. [兰香如故韩粱被冻死了](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E9%9F%A9%E7%B2%B1%E8%A2%AB%E5%86%BB%E6%AD%BB%E4%BA%86%23) `50.0K 🔥` `-87%`
1. [何猷君妈妈感谢奚梦瑶](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A6%88%E5%A6%88%E6%84%9F%E8%B0%A2%E5%A5%9A%E6%A2%A6%E7%91%B6%23) `49.9K 🔥` `-78%`
1. [无可替代](https://s.weibo.com/weibo?q=%23%E6%97%A0%E5%8F%AF%E6%9B%BF%E4%BB%A3%23) `49.9K 🔥` `-70%`
1. [夫妻把娃丢出租屋每月转几千生活费](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E6%8A%8A%E5%A8%83%E4%B8%A2%E5%87%BA%E7%A7%9F%E5%B1%8B%E6%AF%8F%E6%9C%88%E8%BD%AC%E5%87%A0%E5%8D%83%E7%94%9F%E6%B4%BB%E8%B4%B9%23) `49.8K 🔥` `-80%`
1. [田曦薇 华鼎奖提名](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E5%8D%8E%E9%BC%8E%E5%A5%96%E6%8F%90%E5%90%8D%23) `49.6K 🔥` `-87%`
1. [中国男子百米接力金牌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%90%E7%99%BE%E7%B1%B3%E6%8E%A5%E5%8A%9B%E9%87%91%E7%89%8C%23) `49.5K 🔥` `-87%`
1. [华鼎奖](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E9%BC%8E%E5%A5%96%23) `49.4K 🔥` `-78%`
1. [王曼昱蒯曼11比0](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E8%92%AF%E6%9B%BC11%E6%AF%940%23) `49.3K 🔥` `-74%`
1. [林诗栋有望冲击男队领军人物](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E6%9C%89%E6%9C%9B%E5%86%B2%E5%87%BB%E7%94%B7%E9%98%9F%E9%A2%86%E5%86%9B%E4%BA%BA%E7%89%A9%23) `49.2K 🔥` `-70%`

Updated at 2026-09-29 05:54:24

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
