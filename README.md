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

1. [章若楠王安宇排名不分先后 (Zhang Ruonan and Wang Anyu are ranked in no particular order)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%8E%8B%E5%AE%89%E5%AE%87%E6%8E%92%E5%90%8D%E4%B8%8D%E5%88%86%E5%85%88%E5%90%8E%23) `476.8K 🔥` `NEW`
1. [这些证书可抵个税](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E8%AF%81%E4%B9%A6%E5%8F%AF%E6%8A%B5%E4%B8%AA%E7%A8%8E%23) `422.5K 🔥` `NEW`
1. [官方打假粤港澳大湾区发展办公室](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E6%89%93%E5%81%87%E7%B2%A4%E6%B8%AF%E6%BE%B3%E5%A4%A7%E6%B9%BE%E5%8C%BA%E5%8F%91%E5%B1%95%E5%8A%9E%E5%85%AC%E5%AE%A4%23) `399.6K 🔥` `NEW`
1. [开工第一天 请假](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B7%A5%E7%AC%AC%E4%B8%80%E5%A4%A9%20%E8%AF%B7%E5%81%87%23) `358.3K 🔥` `NEW`
1. [官方通报36斤羊烤完仅剩6.9斤](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A536%E6%96%A4%E7%BE%8A%E7%83%A4%E5%AE%8C%E4%BB%85%E5%89%A96.9%E6%96%A4%23) `285.4K 🔥` `NEW`
1. [市监局回应15岁少女贱卖奢侈品](https://s.weibo.com/weibo?q=%23%E5%B8%82%E7%9B%91%E5%B1%80%E5%9B%9E%E5%BA%9415%E5%B2%81%E5%B0%91%E5%A5%B3%E8%B4%B1%E5%8D%96%E5%A5%A2%E4%BE%88%E5%93%81%23) `282.3K 🔥` `NEW`
1. [iPhone18 折叠](https://s.weibo.com/weibo?q=%23iPhone18%20%E6%8A%98%E5%8F%A0%23) `280.7K 🔥` `NEW`
1. [日本](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%23) `279.3K 🔥` `NEW`
1. [50岁的陈坤24岁的张康乐](https://s.weibo.com/weibo?q=%2350%E5%B2%81%E7%9A%84%E9%99%88%E5%9D%A424%E5%B2%81%E7%9A%84%E5%BC%A0%E5%BA%B7%E4%B9%90%23) `278.7K 🔥` `NEW`
1. [郑钦文取关里巴教练](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%8F%96%E5%85%B3%E9%87%8C%E5%B7%B4%E6%95%99%E7%BB%83%23) `276.2K 🔥` `NEW`
1. [阿福太懂节后返工焦虑了 (Afu understands the anxiety of returning to work after the holiday.)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%A6%8F%E5%A4%AA%E6%87%82%E8%8A%82%E5%90%8E%E8%BF%94%E5%B7%A5%E7%84%A6%E8%99%91%E4%BA%86%23) `269.0K 🔥` `NEW`
1. [节后综合症一下子好了](https://s.weibo.com/weibo?q=%23%E8%8A%82%E5%90%8E%E7%BB%BC%E5%90%88%E7%97%87%E4%B8%80%E4%B8%8B%E5%AD%90%E5%A5%BD%E4%BA%86%23) `245.5K 🔥` `NEW`
1. [这胡同别让王一博看见了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E8%83%A1%E5%90%8C%E5%88%AB%E8%AE%A9%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%9C%8B%E8%A7%81%E4%BA%86%23) `243.2K 🔥` `NEW`
1. [爱泼斯坦死亡声明日期在其死前1天](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%AD%BB%E4%BA%A1%E5%A3%B0%E6%98%8E%E6%97%A5%E6%9C%9F%E5%9C%A8%E5%85%B6%E6%AD%BB%E5%89%8D1%E5%A4%A9%23) `228.8K 🔥` `NEW`
1. [谢楠 引导型恋人](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%A5%A0%20%E5%BC%95%E5%AF%BC%E5%9E%8B%E6%81%8B%E4%BA%BA%23) `218.7K 🔥` `NEW`
1. [年代版苦尽柑来遇见你](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E4%BB%A3%E7%89%88%E8%8B%A6%E5%B0%BD%E6%9F%91%E6%9D%A5%E9%81%87%E8%A7%81%E4%BD%A0%23) `218.3K 🔥` `NEW`
1. [丁程鑫严浩翔比24](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%AF%9424%23) `201.1K 🔥` `NEW`
1. [机器人股价](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%82%A1%E4%BB%B7%23) `185.2K 🔥` `NEW`
1. [刘耀文在惊蛰无声里的作用](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%9C%A8%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%E9%87%8C%E7%9A%84%E4%BD%9C%E7%94%A8%23) `171.7K 🔥` `NEW`
1. [看演唱会旁边坐的白鹿](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E6%97%81%E8%BE%B9%E5%9D%90%E7%9A%84%E7%99%BD%E9%B9%BF%23) `157.2K 🔥` `NEW`
1. [奶茶杯盖上为啥这么多孔 (Why are there so many holes in the lid of the milk tea cup?)](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E8%8C%B6%E6%9D%AF%E7%9B%96%E4%B8%8A%E4%B8%BA%E5%95%A5%E8%BF%99%E4%B9%88%E5%A4%9A%E5%AD%94%23) `118.9K 🔥` `NEW`
1. [吴京真演上燕子娘了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E7%9C%9F%E6%BC%94%E4%B8%8A%E7%87%95%E5%AD%90%E5%A8%98%E4%BA%86%23) `111.6K 🔥` `NEW`
1. [谷爱凌年收入全球女运动员第四](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%B9%B4%E6%94%B6%E5%85%A5%E5%85%A8%E7%90%83%E5%A5%B3%E8%BF%90%E5%8A%A8%E5%91%98%E7%AC%AC%E5%9B%9B%23) `107.3K 🔥` `NEW`
1. [景区回应在冰面上设立挖掘机大摆锤](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%8C%BA%E5%9B%9E%E5%BA%94%E5%9C%A8%E5%86%B0%E9%9D%A2%E4%B8%8A%E8%AE%BE%E7%AB%8B%E6%8C%96%E6%8E%98%E6%9C%BA%E5%A4%A7%E6%91%86%E9%94%A4%23) `106.0K 🔥` `NEW`
1. [吴京 时代峰峻古代](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%8F%A4%E4%BB%A3%23) `106.0K 🔥` `NEW`
1. [墨西哥贩毒集团报复已致73死](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5%E8%B4%A9%E6%AF%92%E9%9B%86%E5%9B%A2%E6%8A%A5%E5%A4%8D%E5%B7%B2%E8%87%B473%E6%AD%BB%23) `105.8K 🔥` `NEW`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `100.0K 🔥` `NEW`
1. [美福特号航母厕所大面积瘫痪](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%A6%8F%E7%89%B9%E5%8F%B7%E8%88%AA%E6%AF%8D%E5%8E%95%E6%89%80%E5%A4%A7%E9%9D%A2%E7%A7%AF%E7%98%AB%E7%97%AA%23) `99.5K 🔥` `NEW`
1. [研招网请给一个准确的出分时间](https://s.weibo.com/weibo?q=%23%E7%A0%94%E6%8B%9B%E7%BD%91%E8%AF%B7%E7%BB%99%E4%B8%80%E4%B8%AA%E5%87%86%E7%A1%AE%E7%9A%84%E5%87%BA%E5%88%86%E6%97%B6%E9%97%B4%23) `99.0K 🔥` `NEW`
1. [金饰价格涨到1586元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E6%B6%A8%E5%88%B01586%E5%85%83%23) `94.6K 🔥` `NEW`
1. [夜王豆瓣开分7.8 (Night King's Douban score is 7.8)](https://s.weibo.com/weibo?q=%23%E5%A4%9C%E7%8E%8B%E8%B1%86%E7%93%A3%E5%BC%80%E5%88%867.8%23) `86.3K 🔥` `NEW`
1. [章若楠王安宇黄天仁合作](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%8E%8B%E5%AE%89%E5%AE%87%E9%BB%84%E5%A4%A9%E4%BB%81%E5%90%88%E4%BD%9C%23) `84.6K 🔥` `NEW`
1. [KSG首发](https://s.weibo.com/weibo?q=%23KSG%E9%A6%96%E5%8F%91%23) `82.0K 🔥` `NEW`
1. [滤镜](https://s.weibo.com/weibo?q=%23%E6%BB%A4%E9%95%9C%23) `81.4K 🔥` `NEW`
1. [iPhone18Pro新配色目标一眼最新款 (iPhone 18 Pro new color target at a glance the latest model)](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%96%B0%E9%85%8D%E8%89%B2%E7%9B%AE%E6%A0%87%E4%B8%80%E7%9C%BC%E6%9C%80%E6%96%B0%E6%AC%BE%23) `223.6K 🔥` `+49%`
1. [夜王 删镜头](https://s.weibo.com/weibo?q=%23%E5%A4%9C%E7%8E%8B%20%E5%88%A0%E9%95%9C%E5%A4%B4%23) `125.3K 🔥` `+37%`
1. [考研查分](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E6%9F%A5%E5%88%86%23) `485.8K 🔥`
1. [不发朋友圈的人是什么性格](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%9A%84%E4%BA%BA%E6%98%AF%E4%BB%80%E4%B9%88%E6%80%A7%E6%A0%BC%23) `199.2K 🔥`
1. [韩寒透露飞驰人生4](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AF%92%E9%80%8F%E9%9C%B2%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F4%23) `197.3K 🔥`
1. [考研出分时间 (Postgraduate entrance examination score time)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E5%87%BA%E5%88%86%E6%97%B6%E9%97%B4%23) `1.1M 🔥` `-22%`
1. [12306半夜候补成功1700元车票作废 (12306 Successful waiting list in the middle of the night, ticket worth 1,700 yuan is invalid)](https://s.weibo.com/weibo?q=%2312306%E5%8D%8A%E5%A4%9C%E5%80%99%E8%A1%A5%E6%88%90%E5%8A%9F1700%E5%85%83%E8%BD%A6%E7%A5%A8%E4%BD%9C%E5%BA%9F%23) `854.1K 🔥` `-47%`
1. [在全党开展树立和践行正确政绩观学习教育](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%85%A8%E5%85%9A%E5%BC%80%E5%B1%95%E6%A0%91%E7%AB%8B%E5%92%8C%E8%B7%B5%E8%A1%8C%E6%AD%A3%E7%A1%AE%E6%94%BF%E7%BB%A9%E8%A7%82%E5%AD%A6%E4%B9%A0%E6%95%99%E8%82%B2%23) `656.6K 🔥` `-25%`
1. [灵隐寺惊现110万家厂商祈福](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%9A%90%E5%AF%BA%E6%83%8A%E7%8E%B0110%E4%B8%87%E5%AE%B6%E5%8E%82%E5%95%86%E7%A5%88%E7%A6%8F%23) `388.3K 🔥` `-46%`
1. [秋雅别打电话了 我怕夏洛误会 (Qiu Ya, stop calling. I'm afraid Xia Luo will misunderstand.)](https://s.weibo.com/weibo?q=%23%E7%A7%8B%E9%9B%85%E5%88%AB%E6%89%93%E7%94%B5%E8%AF%9D%E4%BA%86%20%E6%88%91%E6%80%95%E5%A4%8F%E6%B4%9B%E8%AF%AF%E4%BC%9A%23) `259.1K 🔥` `-21%`
1. [高速免费最后1分钟实拍](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E5%85%8D%E8%B4%B9%E6%9C%80%E5%90%8E1%E5%88%86%E9%92%9F%E5%AE%9E%E6%8B%8D%23) `211.3K 🔥` `-66%`
1. [车主卡点下高速失败缴费400元](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%B8%BB%E5%8D%A1%E7%82%B9%E4%B8%8B%E9%AB%98%E9%80%9F%E5%A4%B1%E8%B4%A5%E7%BC%B4%E8%B4%B9400%E5%85%83%23) `166.2K 🔥` `-51%`
1. [考研](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%23) `165.1K 🔥` `-26%`
1. [研招网](https://s.weibo.com/weibo?q=%23%E7%A0%94%E6%8B%9B%E7%BD%91%23) `156.5K 🔥` `-56%`
1. [曝百妖谱主演阵容](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BE%E5%A6%96%E8%B0%B1%E4%B8%BB%E6%BC%94%E9%98%B5%E5%AE%B9%23) `131.3K 🔥` `-36%`
1. [杨洋方安抚粉丝](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%96%B9%E5%AE%89%E6%8A%9A%E7%B2%89%E4%B8%9D%23) `111.5K 🔥` `-21%`

Updated at 2026-02-24 12:52:27

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
