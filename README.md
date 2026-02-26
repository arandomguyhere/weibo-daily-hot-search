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

1. [全国妈妈的统一夜晚 (A night of unity for mothers across the country)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E5%A6%88%E5%A6%88%E7%9A%84%E7%BB%9F%E4%B8%80%E5%A4%9C%E6%99%9A%23) `159.1K 🔥` `NEW`
1. [女子婚后拒同房法院判定不予离婚](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%A9%9A%E5%90%8E%E6%8B%92%E5%90%8C%E6%88%BF%E6%B3%95%E9%99%A2%E5%88%A4%E5%AE%9A%E4%B8%8D%E4%BA%88%E7%A6%BB%E5%A9%9A%23) `136.1K 🔥` `NEW`
1. [刘宇宁到了现代剧也是一身侠气](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%88%B0%E4%BA%86%E7%8E%B0%E4%BB%A3%E5%89%A7%E4%B9%9F%E6%98%AF%E4%B8%80%E8%BA%AB%E4%BE%A0%E6%B0%94%23) `131.2K 🔥` `NEW`
1. [王楚钦说太累了比干七局还累](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E5%A4%AA%E7%B4%AF%E4%BA%86%E6%AF%94%E5%B9%B2%E4%B8%83%E5%B1%80%E8%BF%98%E7%B4%AF%23) `127.4K 🔥` `NEW`
1. [伊朗威胁美国](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A8%81%E8%83%81%E7%BE%8E%E5%9B%BD%23) `99.8K 🔥` `NEW`
1. [林俊杰2026首支单曲](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B02026%E9%A6%96%E6%94%AF%E5%8D%95%E6%9B%B2%23) `88.5K 🔥` `NEW`
1. [四级我恨你](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E7%BA%A7%E6%88%91%E6%81%A8%E4%BD%A0%23) `84.0K 🔥` `NEW`
1. [费霓怀孕](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E9%9C%93%E6%80%80%E5%AD%95%23) `71.9K 🔥` `NEW`
1. [男子回应过年杀鸭杀出超6克黄金](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E8%BF%87%E5%B9%B4%E6%9D%80%E9%B8%AD%E6%9D%80%E5%87%BA%E8%B6%856%E5%85%8B%E9%BB%84%E9%87%91%23) `61.3K 🔥` `NEW`
1. [鸭棚子一个即将消失的行当](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E6%A3%9A%E5%AD%90%E4%B8%80%E4%B8%AA%E5%8D%B3%E5%B0%86%E6%B6%88%E5%A4%B1%E7%9A%84%E8%A1%8C%E5%BD%93%23) `58.3K 🔥` `NEW`
1. [深圳湾公园晚上漆黑为让候鸟睡觉 (Shenzhen Bay Park is dark at night to let migratory birds sleep)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%B9%BE%E5%85%AC%E5%9B%AD%E6%99%9A%E4%B8%8A%E6%BC%86%E9%BB%91%E4%B8%BA%E8%AE%A9%E5%80%99%E9%B8%9F%E7%9D%A1%E8%A7%89%23) `52.3K 🔥` `NEW`
1. [霍金遗属发声](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E9%87%91%E9%81%97%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `48.4K 🔥` `NEW`
1. [女子在服务区厕所捡4万多现金](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%8C%BA%E5%8E%95%E6%89%80%E6%8D%A14%E4%B8%87%E5%A4%9A%E7%8E%B0%E9%87%91%23) `47.4K 🔥` `NEW`
1. [2026全国两会](https://s.weibo.com/weibo?q=%232026%E5%85%A8%E5%9B%BD%E4%B8%A4%E4%BC%9A%23) `43.3K 🔥` `NEW`
1. [原神超话](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%E8%B6%85%E8%AF%9D%23) `42.9K 🔥` `NEW`
1. [AI公司给文科生开300万年薪](https://s.weibo.com/weibo?q=%23AI%E5%85%AC%E5%8F%B8%E7%BB%99%E6%96%87%E7%A7%91%E7%94%9F%E5%BC%80300%E4%B8%87%E5%B9%B4%E8%96%AA%23) `42.8K 🔥` `NEW`
1. [瘦了十来斤的陈飞宇](https://s.weibo.com/weibo?q=%23%E7%98%A6%E4%BA%86%E5%8D%81%E6%9D%A5%E6%96%A4%E7%9A%84%E9%99%88%E9%A3%9E%E5%AE%87%23) `40.9K 🔥` `NEW`
1. [查四六级成绩紧张](https://s.weibo.com/weibo?q=%23%E6%9F%A5%E5%9B%9B%E5%85%AD%E7%BA%A7%E6%88%90%E7%BB%A9%E7%B4%A7%E5%BC%A0%23) `40.2K 🔥` `NEW`
1. [24岁女生成功诞下1男4女5胞胎 (24-year-old girl successfully gave birth to quintuplets, 1 boy, 4 girls)](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E7%94%9F%E6%88%90%E5%8A%9F%E8%AF%9E%E4%B8%8B1%E7%94%B74%E5%A5%B35%E8%83%9E%E8%83%8E%23) `990.4K 🔥` `+36%`
1. [四六级查分 (Level 4 and Level 6 Score Check)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%E6%9F%A5%E5%88%86%23) `711.1K 🔥` `+33%`
1. [春节消费市场人气旺活力足 (The consumer market is booming during the Spring Festival and is full of vitality)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%B6%88%E8%B4%B9%E5%B8%82%E5%9C%BA%E4%BA%BA%E6%B0%94%E6%97%BA%E6%B4%BB%E5%8A%9B%E8%B6%B3%23) `556.9K 🔥` `+36%`
1. [男子谎称走亲戚欲把7岁儿子留老家 (Man lied about visiting relatives and wanted to leave his 7-year-old son in his hometown)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B0%8E%E7%A7%B0%E8%B5%B0%E4%BA%B2%E6%88%9A%E6%AC%B2%E6%8A%8A7%E5%B2%81%E5%84%BF%E5%AD%90%E7%95%99%E8%80%81%E5%AE%B6%23) `300.6K 🔥` `+59%`
1. [飞驰人生3](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%23) `176.3K 🔥` `+54%`
1. [30秒内3次预警救了一车人 (Three warnings within 30 seconds saved a car of people)](https://s.weibo.com/weibo?q=%2330%E7%A7%92%E5%86%853%E6%AC%A1%E9%A2%84%E8%AD%A6%E6%95%91%E4%BA%86%E4%B8%80%E8%BD%A6%E4%BA%BA%23) `160.6K 🔥` `+64%`
1. [日本物价居然到这种程度了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%89%A9%E4%BB%B7%E5%B1%85%E7%84%B6%E5%88%B0%E8%BF%99%E7%A7%8D%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `143.9K 🔥` `+28%`
1. [比尔盖茨出轨女性身份曝光 (Bill Gates' cheating woman's identity revealed)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E5%87%BA%E8%BD%A8%E5%A5%B3%E6%80%A7%E8%BA%AB%E4%BB%BD%E6%9B%9D%E5%85%89%23) `142.4K 🔥` `+62%`
1. [苹果新品来了 (Apple new products are coming)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%96%B0%E5%93%81%E6%9D%A5%E4%BA%86%23) `140.1K 🔥` `+59%`
1. [杨幂TOP坐一起 (Yang Mi TOP sits together)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82TOP%E5%9D%90%E4%B8%80%E8%B5%B7%23) `137.7K 🔥` `+57%`
1. [冬奥花滑冠军刘美贤遭俄罗斯粉丝吐槽 (Winter Olympics figure skating champion Liu Meixian was criticized by Russian fans)](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E8%8A%B1%E6%BB%91%E5%86%A0%E5%86%9B%E5%88%98%E7%BE%8E%E8%B4%A4%E9%81%AD%E4%BF%84%E7%BD%97%E6%96%AF%E7%B2%89%E4%B8%9D%E5%90%90%E6%A7%BD%23) `132.1K 🔥` `+51%`
1. [全网最黑大熊猫出现了 (The darkest giant panda on the Internet appears)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E6%9C%80%E9%BB%91%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%87%BA%E7%8E%B0%E4%BA%86%23) `117.5K 🔥` `+34%`
1. [一盒内存条堪比一套房](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%92%E5%86%85%E5%AD%98%E6%9D%A1%E5%A0%AA%E6%AF%94%E4%B8%80%E5%A5%97%E6%88%BF%23) `113.7K 🔥` `+29%`
1. [孙千这段尴尬的我狂笑](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E8%BF%99%E6%AE%B5%E5%B0%B4%E5%B0%AC%E7%9A%84%E6%88%91%E7%8B%82%E7%AC%91%23) `107.3K 🔥` `+108%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `83.3K 🔥` `+123%`
1. [Prada认领杨幂 (Prada claims Yang Mi)](https://s.weibo.com/weibo?q=%23Prada%E8%AE%A4%E9%A2%86%E6%9D%A8%E5%B9%82%23) `81.7K 🔥` `+34%`
1. [老外以为一个姓张的人研究遍及各学科 (Foreigners think that a person named Zhang has studied in various disciplines)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E4%BB%A5%E4%B8%BA%E4%B8%80%E4%B8%AA%E5%A7%93%E5%BC%A0%E7%9A%84%E4%BA%BA%E7%A0%94%E7%A9%B6%E9%81%8D%E5%8F%8A%E5%90%84%E5%AD%A6%E7%A7%91%23) `73.4K 🔥` `+145%`
1. [迪丽热巴 瓦猫 (dilireba watt cat)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E7%93%A6%E7%8C%AB%23) `73.0K 🔥` `+42%`
1. [德企高管踮着脚看中国机器人 (German executives stand on tiptoes to watch Chinese robots)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E4%BC%81%E9%AB%98%E7%AE%A1%E8%B8%AE%E7%9D%80%E8%84%9A%E7%9C%8B%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `72.9K 🔥` `+100%`
1. [香港山火火情基本受控 (Hong Kong wildfire situation basically under control)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%B1%B1%E7%81%AB%E7%81%AB%E6%83%85%E5%9F%BA%E6%9C%AC%E5%8F%97%E6%8E%A7%23) `72.3K 🔥` `+97%`
1. [11月宝宝从婴儿车滑落颅脑重伤](https://s.weibo.com/weibo?q=%2311%E6%9C%88%E5%AE%9D%E5%AE%9D%E4%BB%8E%E5%A9%B4%E5%84%BF%E8%BD%A6%E6%BB%91%E8%90%BD%E9%A2%85%E8%84%91%E9%87%8D%E4%BC%A4%23) `71.6K 🔥` `+29%`
1. [中国邮政回应已叫停相关线下活动 (China Post responded that it has suspended relevant offline activities.)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%82%AE%E6%94%BF%E5%9B%9E%E5%BA%94%E5%B7%B2%E5%8F%AB%E5%81%9C%E7%9B%B8%E5%85%B3%E7%BA%BF%E4%B8%8B%E6%B4%BB%E5%8A%A8%23) `69.7K 🔥` `+33%`
1. [手机 涨价](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%20%E6%B6%A8%E4%BB%B7%23) `224.4K 🔥`
1. [刘诗诗头戴非遗绒花高雅动人](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E5%A4%B4%E6%88%B4%E9%9D%9E%E9%81%97%E7%BB%92%E8%8A%B1%E9%AB%98%E9%9B%85%E5%8A%A8%E4%BA%BA%23) `60.9K 🔥`
1. [中方回应金正恩对韩表态 (China responds to Kim Jong-un’s stance on South Korea)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E9%87%91%E6%AD%A3%E6%81%A9%E5%AF%B9%E9%9F%A9%E8%A1%A8%E6%80%81%23) `57.5K 🔥`
1. [尘白禁区发文回应 (Chenbai restricted area issued a response)](https://s.weibo.com/weibo?q=%23%E5%B0%98%E7%99%BD%E7%A6%81%E5%8C%BA%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%23) `52.3K 🔥`
1. [金价波动 (Gold price fluctuations)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%B3%A2%E5%8A%A8%23) `44.3K 🔥`
1. [田柾国直播爆粗口 (Jungkook made foul language during live broadcast)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9F%BE%E5%9B%BD%E7%9B%B4%E6%92%AD%E7%88%86%E7%B2%97%E5%8F%A3%23) `39.2K 🔥`
1. [特朗普威胁驱逐教父饰演者](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A8%81%E8%83%81%E9%A9%B1%E9%80%90%E6%95%99%E7%88%B6%E9%A5%B0%E6%BC%94%E8%80%85%23) `37.9K 🔥`
1. [六级](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%23) `156.4K 🔥` `-27%`
1. [痞幼泽龙约会](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E6%B3%BD%E9%BE%99%E7%BA%A6%E4%BC%9A%23) `39.4K 🔥` `-26%`

Updated at 2026-02-27 07:48:25

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
