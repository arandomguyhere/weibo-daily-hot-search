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

1. [维斯塔潘发生事故](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E6%96%AF%E5%A1%94%E6%BD%98%E5%8F%91%E7%94%9F%E4%BA%8B%E6%95%85%23) `639.7K 🔥` `NEW`
1. [原来内向的人都是这样交朋友的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%85%E5%90%91%E7%9A%84%E4%BA%BA%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E4%BA%A4%E6%9C%8B%E5%8F%8B%E7%9A%84%23) `638.6K 🔥` `NEW`
1. [涮肉店回应被拍到自来水加汤](https://s.weibo.com/weibo?q=%23%E6%B6%AE%E8%82%89%E5%BA%97%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%8B%8D%E5%88%B0%E8%87%AA%E6%9D%A5%E6%B0%B4%E5%8A%A0%E6%B1%A4%23) `614.7K 🔥` `NEW`
1. [张睿家里是开烧烤店的](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E5%AE%B6%E9%87%8C%E6%98%AF%E5%BC%80%E7%83%A7%E7%83%A4%E5%BA%97%E7%9A%84%23) `380.1K 🔥` `NEW`
1. [AG胜利收官第三轮](https://s.weibo.com/weibo?q=%23AG%E8%83%9C%E5%88%A9%E6%94%B6%E5%AE%98%E7%AC%AC%E4%B8%89%E8%BD%AE%23) `342.6K 🔥` `NEW`
1. [曼城vs伯恩茅斯](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8Evs%E4%BC%AF%E6%81%A9%E8%8C%85%E6%96%AF%23) `245.2K 🔥` `NEW`
1. [张韶涵演唱会吸氧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%B8%E6%B0%A7%23) `200.7K 🔥` `NEW`
1. [卖豆腐都火到国外了](https://s.weibo.com/weibo?q=%23%E5%8D%96%E8%B1%86%E8%85%90%E9%83%BD%E7%81%AB%E5%88%B0%E5%9B%BD%E5%A4%96%E4%BA%86%23) `187.6K 🔥` `NEW`
1. [世锦赛 卫冕冠军爆冷](https://s.weibo.com/weibo?q=%23%E4%B8%96%E9%94%A6%E8%B5%9B%20%E5%8D%AB%E5%86%95%E5%86%A0%E5%86%9B%E7%88%86%E5%86%B7%23) `151.4K 🔥` `NEW`
1. [唐艺昕写真忘P创可贴了](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%86%99%E7%9C%9F%E5%BF%98P%E5%88%9B%E5%8F%AF%E8%B4%B4%E4%BA%86%23) `150.7K 🔥` `NEW`
1. [中国足协通报调查结果](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%B3%E5%8D%8F%E9%80%9A%E6%8A%A5%E8%B0%83%E6%9F%A5%E7%BB%93%E6%9E%9C%23) `147.2K 🔥` `NEW`
1. [伊朗感谢中方主持公道正义](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%84%9F%E8%B0%A2%E4%B8%AD%E6%96%B9%E4%B8%BB%E6%8C%81%E5%85%AC%E9%81%93%E6%AD%A3%E4%B9%89%23) `142.8K 🔥` `NEW`
1. [花开锦绣](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%23) `1.1M 🔥` `+265%`
1. [一代人有一代人的隐形家务](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E9%9A%90%E5%BD%A2%E5%AE%B6%E5%8A%A1%23) `1.1M 🔥` `+396%`
1. [芒果新人向王一博道歉](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%96%B0%E4%BA%BA%E5%90%91%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%81%93%E6%AD%89%23) `645.2K 🔥` `+201%`
1. [重器](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%99%A8%23) `644.7K 🔥` `+83%`
1. [唐师曾去世前白血球几乎为零](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%B8%88%E6%9B%BE%E5%8E%BB%E4%B8%96%E5%89%8D%E7%99%BD%E8%A1%80%E7%90%83%E5%87%A0%E4%B9%8E%E4%B8%BA%E9%9B%B6%23) `641.8K 🔥` `+68%`
1. [傅首尔前夫发文怼留几手](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E5%89%8D%E5%A4%AB%E5%8F%91%E6%96%87%E6%80%BC%E7%95%99%E5%87%A0%E6%89%8B%23) `633.2K 🔥` `+187%`
1. [HR笑了半天才给她办入职](https://s.weibo.com/weibo?q=%23HR%E7%AC%91%E4%BA%86%E5%8D%8A%E5%A4%A9%E6%89%8D%E7%BB%99%E5%A5%B9%E5%8A%9E%E5%85%A5%E8%81%8C%23) `631.2K 🔥` `+187%`
1. [滔搏 只要吃软饭就会有吃不完的软饭](https://s.weibo.com/weibo?q=%23%E6%BB%94%E6%90%8F%20%E5%8F%AA%E8%A6%81%E5%90%83%E8%BD%AF%E9%A5%AD%E5%B0%B1%E4%BC%9A%E6%9C%89%E5%90%83%E4%B8%8D%E5%AE%8C%E7%9A%84%E8%BD%AF%E9%A5%AD%23) `628.2K 🔥` `+100%`
1. [芒果新人撞脸王一博 (Mango newcomer Wang Yibo meets Wang Yibo)](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%96%B0%E4%BA%BA%E6%92%9E%E8%84%B8%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `625.5K 🔥` `+184%`
1. [嫦娥七号发射推迟至明年](https://s.weibo.com/weibo?q=%23%E5%AB%A6%E5%A8%A5%E4%B8%83%E5%8F%B7%E5%8F%91%E5%B0%84%E6%8E%A8%E8%BF%9F%E8%87%B3%E6%98%8E%E5%B9%B4%23) `623.2K 🔥` `+185%`
1. [长江存储月赚100多亿](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B1%9F%E5%AD%98%E5%82%A8%E6%9C%88%E8%B5%9A100%E5%A4%9A%E4%BA%BF%23) `621.7K 🔥` `+183%`
1. [小米官宣新一代玄戒芯片技术发布会](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%AE%98%E5%AE%A3%E6%96%B0%E4%B8%80%E4%BB%A3%E7%8E%84%E6%88%92%E8%8A%AF%E7%89%87%E6%8A%80%E6%9C%AF%E5%8F%91%E5%B8%83%E4%BC%9A%23) `620.4K 🔥` `+183%`
1. [永康公厕被打女子发声](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E5%BA%B7%E5%85%AC%E5%8E%95%E8%A2%AB%E6%89%93%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `618.5K 🔥` `+197%`
1. [哈兰德剪头发了](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%89%AA%E5%A4%B4%E5%8F%91%E4%BA%86%23) `614.6K 🔥` `+186%`
1. [难怪进郭敬明剧组瘦一圈](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E8%BF%9B%E9%83%AD%E6%95%AC%E6%98%8E%E5%89%A7%E7%BB%84%E7%98%A6%E4%B8%80%E5%9C%88%23) `604.0K 🔥` `+179%`
1. [杨幂平地摔](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%B9%B3%E5%9C%B0%E6%91%94%23) `537.9K 🔥` `+149%`
1. [董宇辉走后东方甄选扭亏为盈赚5.44亿](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E8%B5%B0%E5%90%8E%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%89%AD%E4%BA%8F%E4%B8%BA%E7%9B%88%E8%B5%9A5.44%E4%BA%BF%23) `453.6K 🔥` `+113%`
1. [海陆发际线](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E9%99%86%E5%8F%91%E9%99%85%E7%BA%BF%23) `415.3K 🔥` `+156%`
1. [万茜腰臀比](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8C%9C%E8%85%B0%E8%87%80%E6%AF%94%23) `336.1K 🔥` `+58%`
1. [爷爷中风2岁宝宝哭着挨个去邻居家求救](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%AD%E9%A3%8E2%E5%B2%81%E5%AE%9D%E5%AE%9D%E5%93%AD%E7%9D%80%E6%8C%A8%E4%B8%AA%E5%8E%BB%E9%82%BB%E5%B1%85%E5%AE%B6%E6%B1%82%E6%95%91%23) `330.8K 🔥` `+57%`
1. [嫦娥七号任务不满足发射条件](https://s.weibo.com/weibo?q=%23%E5%AB%A6%E5%A8%A5%E4%B8%83%E5%8F%B7%E4%BB%BB%E5%8A%A1%E4%B8%8D%E6%BB%A1%E8%B6%B3%E5%8F%91%E5%B0%84%E6%9D%A1%E4%BB%B6%23) `327.6K 🔥` `+49%`
1. [我的前半生删去原著罗子君女儿](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E5%88%A0%E5%8E%BB%E5%8E%9F%E8%91%97%E7%BD%97%E5%AD%90%E5%90%9B%E5%A5%B3%E5%84%BF%23) `325.6K 🔥` `+56%`
1. [第一次结婚有点好笑](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%BB%93%E5%A9%9A%E6%9C%89%E7%82%B9%E5%A5%BD%E7%AC%91%23) `287.6K 🔥` `+64%`
1. [3姐弟太饿报警求助民警上门做饭](https://s.weibo.com/weibo?q=%233%E5%A7%90%E5%BC%9F%E5%A4%AA%E9%A5%BF%E6%8A%A5%E8%AD%A6%E6%B1%82%E5%8A%A9%E6%B0%91%E8%AD%A6%E4%B8%8A%E9%97%A8%E5%81%9A%E9%A5%AD%23) `1.1M 🔥`
1. [2万件中央救灾物资支持广西](https://s.weibo.com/weibo?q=%232%E4%B8%87%E4%BB%B6%E4%B8%AD%E5%A4%AE%E6%95%91%E7%81%BE%E7%89%A9%E8%B5%84%E6%94%AF%E6%8C%81%E5%B9%BF%E8%A5%BF%23) `1.1M 🔥`
1. [樊振东德甲神图](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BE%B7%E7%94%B2%E7%A5%9E%E5%9B%BE%23) `256.9K 🔥`
1. [台湾艺人疑破坏日本文物被捕](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E8%89%BA%E4%BA%BA%E7%96%91%E7%A0%B4%E5%9D%8F%E6%97%A5%E6%9C%AC%E6%96%87%E7%89%A9%E8%A2%AB%E6%8D%95%23) `247.5K 🔥`
1. [刘耀文蹲下来和杨幂聊天](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%B9%B2%E4%B8%8B%E6%9D%A5%E5%92%8C%E6%9D%A8%E5%B9%82%E8%81%8A%E5%A4%A9%23) `243.9K 🔥`
1. [AG战胜WB](https://s.weibo.com/weibo?q=%23AG%E6%88%98%E8%83%9CWB%23) `227.9K 🔥`
1. [终于懂为什么大家对容貌有执念了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%87%82%E4%B8%BA%E4%BB%80%E4%B9%88%E5%A4%A7%E5%AE%B6%E5%AF%B9%E5%AE%B9%E8%B2%8C%E6%9C%89%E6%89%A7%E5%BF%B5%E4%BA%86%23) `218.7K 🔥`
1. [王传君 乔任梁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%20%E4%B9%94%E4%BB%BB%E6%A2%81%23) `196.5K 🔥`
1. [重器大结局](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%99%A8%E5%A4%A7%E7%BB%93%E5%B1%80%23) `144.9K 🔥`
1. [请欣赏一位跑得很羞涩的机器人](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%AC%A3%E8%B5%8F%E4%B8%80%E4%BD%8D%E8%B7%91%E5%BE%97%E5%BE%88%E7%BE%9E%E6%B6%A9%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `142.8K 🔥`
1. [年轻时做什么对后半生有巨大好处](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E6%97%B6%E5%81%9A%E4%BB%80%E4%B9%88%E5%AF%B9%E5%90%8E%E5%8D%8A%E7%94%9F%E6%9C%89%E5%B7%A8%E5%A4%A7%E5%A5%BD%E5%A4%84%23) `630.2K 🔥` `-34%`
1. [刘宇宁林一已发现长得高的坏处](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%9E%97%E4%B8%80%E5%B7%B2%E5%8F%91%E7%8E%B0%E9%95%BF%E5%BE%97%E9%AB%98%E7%9A%84%E5%9D%8F%E5%A4%84%23) `179.9K 🔥` `-36%`
1. [心动的信号9](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A8%E7%9A%84%E4%BF%A1%E5%8F%B79%23) `159.0K 🔥` `-84%`

Updated at 2026-08-23 21:36:12

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
