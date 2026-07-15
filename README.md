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

1. [贾浅浅硕士学位被撤销 (Jia Qianqian’s master’s degree revoked)](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E6%B5%85%E6%B5%85%E7%A1%95%E5%A3%AB%E5%AD%A6%E4%BD%8D%E8%A2%AB%E6%92%A4%E9%94%80%23) `9.4M 🔥` `NEW`
1. [贾浅浅西北大学辞职](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E6%B5%85%E6%B5%85%E8%A5%BF%E5%8C%97%E5%A4%A7%E5%AD%A6%E8%BE%9E%E8%81%8C%23) `1.9M 🔥` `NEW`
1. [预拨4.3亿支持10省区市抢险救灾](https://s.weibo.com/weibo?q=%23%E9%A2%84%E6%8B%A84.3%E4%BA%BF%E6%94%AF%E6%8C%8110%E7%9C%81%E5%8C%BA%E5%B8%82%E6%8A%A2%E9%99%A9%E6%95%91%E7%81%BE%23) `1.4M 🔥` `NEW`
1. [姆巴佩称法国不具备决赛实力](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%A7%B0%E6%B3%95%E5%9B%BD%E4%B8%8D%E5%85%B7%E5%A4%87%E5%86%B3%E8%B5%9B%E5%AE%9E%E5%8A%9B%23) `1.3M 🔥` `NEW`
1. [未来5年房子车子收入休假将有变化](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A55%E5%B9%B4%E6%88%BF%E5%AD%90%E8%BD%A6%E5%AD%90%E6%94%B6%E5%85%A5%E4%BC%91%E5%81%87%E5%B0%86%E6%9C%89%E5%8F%98%E5%8C%96%23) `748.8K 🔥` `NEW`
1. [实习工资居然能到一万](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E4%B9%A0%E5%B7%A5%E8%B5%84%E5%B1%85%E7%84%B6%E8%83%BD%E5%88%B0%E4%B8%80%E4%B8%87%23) `731.8K 🔥` `NEW`
1. [沈阳全市停水系不实消息](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E5%85%A8%E5%B8%82%E5%81%9C%E6%B0%B4%E7%B3%BB%E4%B8%8D%E5%AE%9E%E6%B6%88%E6%81%AF%23) `704.6K 🔥` `NEW`
1. [法国队 脏](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%98%9F%20%E8%84%8F%23) `697.4K 🔥` `NEW`
1. [小伙家有200台小米设备不满手机售后](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E5%AE%B6%E6%9C%89200%E5%8F%B0%E5%B0%8F%E7%B1%B3%E8%AE%BE%E5%A4%87%E4%B8%8D%E6%BB%A1%E6%89%8B%E6%9C%BA%E5%94%AE%E5%90%8E%23) `512.2K 🔥` `NEW`
1. [电影好一个乖乖女组讯](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%A5%BD%E4%B8%80%E4%B8%AA%E4%B9%96%E4%B9%96%E5%A5%B3%E7%BB%84%E8%AE%AF%23) `486.8K 🔥` `NEW`
1. [这世界终于颠到我想象不到的样子了 (The world has finally turned upside down beyond what I could have imagined.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%96%E7%95%8C%E7%BB%88%E4%BA%8E%E9%A2%A0%E5%88%B0%E6%88%91%E6%83%B3%E8%B1%A1%E4%B8%8D%E5%88%B0%E7%9A%84%E6%A0%B7%E5%AD%90%E4%BA%86%23) `483.3K 🔥` `NEW`
1. [赵本山长期定居三亚](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9C%AC%E5%B1%B1%E9%95%BF%E6%9C%9F%E5%AE%9A%E5%B1%85%E4%B8%89%E4%BA%9A%23) `473.7K 🔥` `NEW`
1. [GDP](https://s.weibo.com/weibo?q=%23GDP%23) `469.7K 🔥` `NEW`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `464.9K 🔥` `NEW`
1. [金靖得知章若楠张凌赫跨年的反应](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E5%BE%97%E7%9F%A5%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%B7%A8%E5%B9%B4%E7%9A%84%E5%8F%8D%E5%BA%94%23) `461.6K 🔥` `NEW`
1. [AI短剧以假乱真了](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%E4%BB%A5%E5%81%87%E4%B9%B1%E7%9C%9F%E4%BA%86%23) `431.6K 🔥` `NEW`
1. [何穗晒儿子小脚丫](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E6%99%92%E5%84%BF%E5%AD%90%E5%B0%8F%E8%84%9A%E4%B8%AB%23) `418.6K 🔥` `NEW`
1. [阿根廷创下中国世界杯收视率纪录](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%88%9B%E4%B8%8B%E4%B8%AD%E5%9B%BD%E4%B8%96%E7%95%8C%E6%9D%AF%E6%94%B6%E8%A7%86%E7%8E%87%E7%BA%AA%E5%BD%95%23) `324.2K 🔥` `NEW`
1. [TF四代青岛演唱会通过审批](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E9%9D%92%E5%B2%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%9A%E8%BF%87%E5%AE%A1%E6%89%B9%23) `293.2K 🔥` `NEW`
1. [野狗骨头车内吻戏](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E8%BD%A6%E5%86%85%E5%90%BB%E6%88%8F%23) `291.8K 🔥` `NEW`
1. [阿根廷主帅回应西班牙赢球 (Argentina coach responds to Spain's win)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%BB%E5%B8%85%E5%9B%9E%E5%BA%94%E8%A5%BF%E7%8F%AD%E7%89%99%E8%B5%A2%E7%90%83%23) `279.1K 🔥` `NEW`
1. [赵本山拒绝了所有商演和综艺](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9C%AC%E5%B1%B1%E6%8B%92%E7%BB%9D%E4%BA%86%E6%89%80%E6%9C%89%E5%95%86%E6%BC%94%E5%92%8C%E7%BB%BC%E8%89%BA%23) `269.0K 🔥` `NEW`
1. [SK海力士暴涨超27%](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E6%9A%B4%E6%B6%A8%E8%B6%8527%25%23) `260.0K 🔥` `NEW`
1. [蔡康永跪拜感谢施南生](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%E8%B7%AA%E6%8B%9C%E6%84%9F%E8%B0%A2%E6%96%BD%E5%8D%97%E7%94%9F%23) `253.7K 🔥` `NEW`
1. [曝张雅钦没演十日终焉](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E9%9B%85%E9%92%A6%E6%B2%A1%E6%BC%94%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `253.3K 🔥` `NEW`
1. [穆祉丞跳远 金元勋跃迁](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E8%B7%B3%E8%BF%9C%20%E9%87%91%E5%85%83%E5%8B%8B%E8%B7%83%E8%BF%81%23) `250.2K 🔥` `NEW`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `249.3K 🔥` `NEW`
1. [张雪回应无人驾驶摩托车主已骨折](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%9B%9E%E5%BA%94%E6%97%A0%E4%BA%BA%E9%A9%BE%E9%A9%B6%E6%91%A9%E6%89%98%E8%BD%A6%E4%B8%BB%E5%B7%B2%E9%AA%A8%E6%8A%98%23) `247.3K 🔥` `NEW`
1. [哈兰德公开支持英格兰](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%85%AC%E5%BC%80%E6%94%AF%E6%8C%81%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `246.2K 🔥` `NEW`
1. [撤销贾浅浅副教授职称](https://s.weibo.com/weibo?q=%23%E6%92%A4%E9%94%80%E8%B4%BE%E6%B5%85%E6%B5%85%E5%89%AF%E6%95%99%E6%8E%88%E8%81%8C%E7%A7%B0%23) `245.3K 🔥` `NEW`
1. [NCT127全员与SM续约 (All members of NCT127 renew contracts with SM)](https://s.weibo.com/weibo?q=%23NCT127%E5%85%A8%E5%91%98%E4%B8%8ESM%E7%BB%AD%E7%BA%A6%23) `242.9K 🔥` `NEW`
1. [齐达内将执教法国队](https://s.weibo.com/weibo?q=%23%E9%BD%90%E8%BE%BE%E5%86%85%E5%B0%86%E6%89%A7%E6%95%99%E6%B3%95%E5%9B%BD%E9%98%9F%23) `240.8K 🔥` `NEW`
1. [以前的主仆关系一目了然现在基本靠猜](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%89%8D%E7%9A%84%E4%B8%BB%E4%BB%86%E5%85%B3%E7%B3%BB%E4%B8%80%E7%9B%AE%E4%BA%86%E7%84%B6%E7%8E%B0%E5%9C%A8%E5%9F%BA%E6%9C%AC%E9%9D%A0%E7%8C%9C%23) `238.6K 🔥` `NEW`
1. [美军刚打完伊朗就打回来了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%88%9A%E6%89%93%E5%AE%8C%E4%BC%8A%E6%9C%97%E5%B0%B1%E6%89%93%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `236.9K 🔥` `NEW`
1. [哈兰德现身时装秀](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E7%8E%B0%E8%BA%AB%E6%97%B6%E8%A3%85%E7%A7%80%23) `234.7K 🔥` `NEW`
1. [王祖贤悼念施南生](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%96%E8%B4%A4%E6%82%BC%E5%BF%B5%E6%96%BD%E5%8D%97%E7%94%9F%23) `234.2K 🔥` `NEW`
1. [杨博文说运动会一人住一间房](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E8%AF%B4%E8%BF%90%E5%8A%A8%E4%BC%9A%E4%B8%80%E4%BA%BA%E4%BD%8F%E4%B8%80%E9%97%B4%E6%88%BF%23) `232.9K 🔥` `NEW`
1. [曝华为手机也将涨价](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%8E%E4%B8%BA%E6%89%8B%E6%9C%BA%E4%B9%9F%E5%B0%86%E6%B6%A8%E4%BB%B7%23) `231.9K 🔥` `NEW`
1. [住户楼上瘆人声响反复孙女不敢留宿](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E6%88%B7%E6%A5%BC%E4%B8%8A%E7%98%86%E4%BA%BA%E5%A3%B0%E5%93%8D%E5%8F%8D%E5%A4%8D%E5%AD%99%E5%A5%B3%E4%B8%8D%E6%95%A2%E7%95%99%E5%AE%BF%23) `229.5K 🔥` `NEW`
1. [亚马尔半决赛状态](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%8D%8A%E5%86%B3%E8%B5%9B%E7%8A%B6%E6%80%81%23) `228.3K 🔥` `NEW`
1. [八仙剧情夯爆了 (The plot of Eight Immortals is a blast)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E5%89%A7%E6%83%85%E5%A4%AF%E7%88%86%E4%BA%86%23) `225.9K 🔥` `NEW`
1. [法国我顺极了哥哥](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%88%91%E9%A1%BA%E6%9E%81%E4%BA%86%E5%93%A5%E5%93%A5%23) `223.9K 🔥` `NEW`
1. [暑期档长剧 裸播](https://s.weibo.com/weibo?q=%23%E6%9A%91%E6%9C%9F%E6%A1%A3%E9%95%BF%E5%89%A7%20%E8%A3%B8%E6%92%AD%23) `487.7K 🔥`
1. [迪丽热巴听到周星驰女儿的表情 (Di Lieba heard Stephen Chow's daughter's expression)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%90%AC%E5%88%B0%E5%91%A8%E6%98%9F%E9%A9%B0%E5%A5%B3%E5%84%BF%E7%9A%84%E8%A1%A8%E6%83%85%23) `230.7K 🔥`
1. [张小斐中国首位票房破百亿85花](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E4%B8%AD%E5%9B%BD%E9%A6%96%E4%BD%8D%E7%A5%A8%E6%88%BF%E7%A0%B4%E7%99%BE%E4%BA%BF85%E8%8A%B1%23) `226.7K 🔥`
1. [姆巴佩心态崩了](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%BF%83%E6%80%81%E5%B4%A9%E4%BA%86%23) `252.0K 🔥` `-98%`
1. [佛得角的含金量还在上升 (Cape Verde’s gold content is still rising)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `248.7K 🔥` `-88%`
1. [法国0比2西班牙 (France 0-2 Spain)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD0%E6%AF%942%E8%A5%BF%E7%8F%AD%E7%89%99%23) `243.3K 🔥` `-79%`
1. [法国连续三年被西班牙淘汰 (France was eliminated by Spain for the third consecutive year)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%BF%9E%E7%BB%AD%E4%B8%89%E5%B9%B4%E8%A2%AB%E8%A5%BF%E7%8F%AD%E7%89%99%E6%B7%98%E6%B1%B0%23) `239.5K 🔥` `-85%`
1. [亚马尔九擒姆巴佩](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E4%B9%9D%E6%93%92%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `237.0K 🔥` `-79%`

Updated at 2026-07-15 11:29:42

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
