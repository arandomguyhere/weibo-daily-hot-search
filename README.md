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

1. [我发现心愿便利贴静音特别好听 (I found that the mute sound of Wish Post-it Notes is particularly nice.)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%8F%91%E7%8E%B0%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%E9%9D%99%E9%9F%B3%E7%89%B9%E5%88%AB%E5%A5%BD%E5%90%AC%23) `1.5M 🔥` `NEW`
1. [常州进球](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%B7%9E%E8%BF%9B%E7%90%83%23) `882.5K 🔥` `NEW`
1. [我国经济一季度交出亮眼答卷](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%BB%8F%E6%B5%8E%E4%B8%80%E5%AD%A3%E5%BA%A6%E4%BA%A4%E5%87%BA%E4%BA%AE%E7%9C%BC%E7%AD%94%E5%8D%B7%23) `737.9K 🔥` `NEW`
1. [KSG零封狼队](https://s.weibo.com/weibo?q=%23KSG%E9%9B%B6%E5%B0%81%E7%8B%BC%E9%98%9F%23) `719.0K 🔥` `NEW`
1. [李小冉团赢了庄法团](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%9B%A2%E8%B5%A2%E4%BA%86%E5%BA%84%E6%B3%95%E5%9B%A2%23) `592.2K 🔥` `NEW`
1. [KSG冠军](https://s.weibo.com/weibo?q=%23KSG%E5%86%A0%E5%86%9B%23) `520.3K 🔥` `NEW`
1. [心疼清清](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E6%B8%85%E6%B8%85%23) `366.8K 🔥` `NEW`
1. [李小冉一开口我就笑了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B8%80%E5%BC%80%E5%8F%A3%E6%88%91%E5%B0%B1%E7%AC%91%E4%BA%86%23) `363.7K 🔥` `NEW`
1. [美媒称数艘美军舰通过霍尔木兹](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E6%95%B0%E8%89%98%E7%BE%8E%E5%86%9B%E8%88%B0%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `362.3K 🔥` `NEW`
1. [大艺术家](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%89%BA%E6%9C%AF%E5%AE%B6%23) `360.5K 🔥` `NEW`
1. [心愿便利贴 (wish note)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%23) `360.1K 🔥` `NEW`
1. [服务员掉包客人高档白酒低价转卖](https://s.weibo.com/weibo?q=%23%E6%9C%8D%E5%8A%A1%E5%91%98%E6%8E%89%E5%8C%85%E5%AE%A2%E4%BA%BA%E9%AB%98%E6%A1%A3%E7%99%BD%E9%85%92%E4%BD%8E%E4%BB%B7%E8%BD%AC%E5%8D%96%23) `357.3K 🔥` `NEW`
1. [全网最不想火自助粥锅店老板诞生了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E6%9C%80%E4%B8%8D%E6%83%B3%E7%81%AB%E8%87%AA%E5%8A%A9%E7%B2%A5%E9%94%85%E5%BA%97%E8%80%81%E6%9D%BF%E8%AF%9E%E7%94%9F%E4%BA%86%23) `356.6K 🔥` `NEW`
1. [杨幂给何泓姗送了蛋糕和花](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%BB%99%E4%BD%95%E6%B3%93%E5%A7%97%E9%80%81%E4%BA%86%E8%9B%8B%E7%B3%95%E5%92%8C%E8%8A%B1%23) `355.1K 🔥` `NEW`
1. [心愿便利贴 不好听但溺爱了](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%20%E4%B8%8D%E5%A5%BD%E5%90%AC%E4%BD%86%E6%BA%BA%E7%88%B1%E4%BA%86%23) `354.0K 🔥` `NEW`
1. [苏超比分](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E6%AF%94%E5%88%86%23) `353.0K 🔥` `NEW`
1. [刘芸郑钧回应儿子走路内八](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%8A%B8%E9%83%91%E9%92%A7%E5%9B%9E%E5%BA%94%E5%84%BF%E5%AD%90%E8%B5%B0%E8%B7%AF%E5%86%85%E5%85%AB%23) `352.5K 🔥` `NEW`
1. [大艺术家舞台换装](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%89%BA%E6%9C%AF%E5%AE%B6%E8%88%9E%E5%8F%B0%E6%8D%A2%E8%A3%85%23) `298.8K 🔥` `NEW`
1. [无言好牛](https://s.weibo.com/weibo?q=%23%E6%97%A0%E8%A8%80%E5%A5%BD%E7%89%9B%23) `295.7K 🔥` `NEW`
1. [美伊代表团举行谈判](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E4%BB%A3%E8%A1%A8%E5%9B%A2%E4%B8%BE%E8%A1%8C%E8%B0%88%E5%88%A4%23) `293.7K 🔥` `NEW`
1. [邓亚萍为任子威杨倩颁奖 (Deng Yaping presented the award to Ren Ziwei and Yang Qian)](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E4%B8%BA%E4%BB%BB%E5%AD%90%E5%A8%81%E6%9D%A8%E5%80%A9%E9%A2%81%E5%A5%96%23) `290.6K 🔥` `NEW`
1. [萧蔷情商](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%E6%83%85%E5%95%86%23) `283.3K 🔥` `NEW`
1. [曾沛慈说会在浪姐继续挑战](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E8%AF%B4%E4%BC%9A%E5%9C%A8%E6%B5%AA%E5%A7%90%E7%BB%A7%E7%BB%AD%E6%8C%91%E6%88%98%23) `255.2K 🔥` `NEW`
1. [曝浪姐今晚不淘汰](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B5%AA%E5%A7%90%E4%BB%8A%E6%99%9A%E4%B8%8D%E6%B7%98%E6%B1%B0%23) `243.2K 🔥` `NEW`
1. [全糖半糖无糖](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%B3%96%E5%8D%8A%E7%B3%96%E6%97%A0%E7%B3%96%23) `191.2K 🔥` `NEW`
1. [流浪太帅了](https://s.weibo.com/weibo?q=%23%E6%B5%81%E6%B5%AA%E5%A4%AA%E5%B8%85%E4%BA%86%23) `191.0K 🔥` `NEW`
1. [王濛夹起来了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%A4%B9%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `190.4K 🔥` `NEW`
1. [苏超常州1比0南通](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%B8%B8%E5%B7%9E1%E6%AF%940%E5%8D%97%E9%80%9A%23) `139.9K 🔥` `NEW`
1. [谢娜等了黄灿灿一晚上](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E7%AD%89%E4%BA%86%E9%BB%84%E7%81%BF%E7%81%BF%E4%B8%80%E6%99%9A%E4%B8%8A%23) `137.5K 🔥` `NEW`
1. [安崎 天生爱豆](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%20%E5%A4%A9%E7%94%9F%E7%88%B1%E8%B1%86%23) `133.1K 🔥` `NEW`
1. [万斯与巴基斯坦总理会谈 (Vance talks with Pakistani Prime Minister)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E6%96%AF%E4%B8%8E%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E6%80%BB%E7%90%86%E4%BC%9A%E8%B0%88%23) `125.6K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `124.7K 🔥` `NEW`
1. [莫氏鸡煲要大变样了](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%A6%81%E5%A4%A7%E5%8F%98%E6%A0%B7%E4%BA%86%23) `366.0K 🔥` `+138%`
1. [江语晨前夫](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%89%8D%E5%A4%AB%23) `362.6K 🔥` `+286%`
1. [江语晨小考前一晚被前夫告了](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%B0%8F%E8%80%83%E5%89%8D%E4%B8%80%E6%99%9A%E8%A2%AB%E5%89%8D%E5%A4%AB%E5%91%8A%E4%BA%86%23) `349.4K 🔥` `+265%`
1. [伊朗取得两大战略性收益](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%96%E5%BE%97%E4%B8%A4%E5%A4%A7%E6%88%98%E7%95%A5%E6%80%A7%E6%94%B6%E7%9B%8A%23) `283.8K 🔥` `+59%`
1. [韩女团成员牙疼因没空治疗直接拔了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%A5%B3%E5%9B%A2%E6%88%90%E5%91%98%E7%89%99%E7%96%BC%E5%9B%A0%E6%B2%A1%E7%A9%BA%E6%B2%BB%E7%96%97%E7%9B%B4%E6%8E%A5%E6%8B%94%E4%BA%86%23) `281.0K 🔥` `+57%`
1. [男子自带茅台就餐发现味道不对报警](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%87%AA%E5%B8%A6%E8%8C%85%E5%8F%B0%E5%B0%B1%E9%A4%90%E5%8F%91%E7%8E%B0%E5%91%B3%E9%81%93%E4%B8%8D%E5%AF%B9%E6%8A%A5%E8%AD%A6%23) `170.7K 🔥` `+33%`
1. [田曦薇直播](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%9B%B4%E6%92%AD%23) `124.7K 🔥` `+40%`
1. [狼队对战KSG (Wolves vs. KSG)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98KSG%23) `365.3K 🔥`
1. [潮汐车道自动切换太丝滑 (Tidal lane automatic switching is too smooth)](https://s.weibo.com/weibo?q=%23%E6%BD%AE%E6%B1%90%E8%BD%A6%E9%81%93%E8%87%AA%E5%8A%A8%E5%88%87%E6%8D%A2%E5%A4%AA%E4%B8%9D%E6%BB%91%23) `358.0K 🔥`
1. [女高管自制Excel表及时发现乳腺癌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%AB%98%E7%AE%A1%E8%87%AA%E5%88%B6Excel%E8%A1%A8%E5%8F%8A%E6%97%B6%E5%8F%91%E7%8E%B0%E4%B9%B3%E8%85%BA%E7%99%8C%23) `350.1K 🔥`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `263.2K 🔥`
1. [姜贞羽差点高位截瘫 (Jiang Zhenyu almost suffered high paraplegia)](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E8%B4%9E%E7%BE%BD%E5%B7%AE%E7%82%B9%E9%AB%98%E4%BD%8D%E6%88%AA%E7%98%AB%23) `196.2K 🔥`
1. [十日终焉长安二十四计海报](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%95%BF%E5%AE%89%E4%BA%8C%E5%8D%81%E5%9B%9B%E8%AE%A1%E6%B5%B7%E6%8A%A5%23) `163.9K 🔥`
1. [浪姐直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `372.7K 🔥` `-67%`
1. [苏超直播](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E7%9B%B4%E6%92%AD%23) `367.7K 🔥` `-56%`
1. [曝曾沛慈退出浪姐 (It is revealed that Zeng Peici quits Sister Lang)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9B%BE%E6%B2%9B%E6%85%88%E9%80%80%E5%87%BA%E6%B5%AA%E5%A7%90%23) `350.9K 🔥` `-45%`
1. [妻子发现丈夫藏200多枚金币气炸](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E8%97%8F200%E5%A4%9A%E6%9E%9A%E9%87%91%E5%B8%81%E6%B0%94%E7%82%B8%23) `206.2K 🔥` `-40%`
1. [张予曦毕雯珺合伙人零互动](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E6%AF%95%E9%9B%AF%E7%8F%BA%E5%90%88%E4%BC%99%E4%BA%BA%E9%9B%B6%E4%BA%92%E5%8A%A8%23) `159.4K 🔥` `-28%`

Updated at 2026-04-11 21:19:10

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
