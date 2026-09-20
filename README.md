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

1. [宁德品质时间会见证](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E5%93%81%E8%B4%A8%E6%97%B6%E9%97%B4%E4%BC%9A%E8%A7%81%E8%AF%81%23) `131.2K 🔥` `NEW`
1. [吕孟洋西班牙人首秀](https://s.weibo.com/weibo?q=%23%E5%90%95%E5%AD%9F%E6%B4%8B%E8%A5%BF%E7%8F%AD%E7%89%99%E4%BA%BA%E9%A6%96%E7%A7%80%23) `77.4K 🔥` `NEW`
1. [可口可乐充乐联盟集结](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E5%8F%A3%E5%8F%AF%E4%B9%90%E5%85%85%E4%B9%90%E8%81%94%E7%9B%9F%E9%9B%86%E7%BB%93%23) `66.8K 🔥` `NEW`
1. [中国队的金牌速度](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%9A%84%E9%87%91%E7%89%8C%E9%80%9F%E5%BA%A6%23) `36.4K 🔥` `NEW`
1. [不要找太漂亮的老头演祖父](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E6%89%BE%E5%A4%AA%E6%BC%82%E4%BA%AE%E7%9A%84%E8%80%81%E5%A4%B4%E6%BC%94%E7%A5%96%E7%88%B6%23) `36.4K 🔥` `NEW`
1. [这就是很多中年人婚姻的隐喻吧](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E5%BE%88%E5%A4%9A%E4%B8%AD%E5%B9%B4%E4%BA%BA%E5%A9%9A%E5%A7%BB%E7%9A%84%E9%9A%90%E5%96%BB%E5%90%A7%23) `36.4K 🔥` `NEW`
1. [姆巴佩 马竞](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%20%E9%A9%AC%E7%AB%9E%23) `36.3K 🔥` `NEW`
1. [曼城5比3桑德兰](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8E5%E6%AF%943%E6%A1%91%E5%BE%B7%E5%85%B0%23) `36.2K 🔥` `NEW`
1. [把配料表中的白砂糖还给我们](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E9%85%8D%E6%96%99%E8%A1%A8%E4%B8%AD%E7%9A%84%E7%99%BD%E7%A0%82%E7%B3%96%E8%BF%98%E7%BB%99%E6%88%91%E4%BB%AC%23) `450.3K 🔥` `+28%`
1. [披荆斩棘排名](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%8E%92%E5%90%8D%23) `222.6K 🔥` `+113%`
1. [今起公积金提取场景6变9](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E8%B5%B7%E5%85%AC%E7%A7%AF%E9%87%91%E6%8F%90%E5%8F%96%E5%9C%BA%E6%99%AF6%E5%8F%989%23) `166.1K 🔥` `+129%`
1. [章子怡 脸](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%20%E8%84%B8%23) `76.4K 🔥` `+21%`
1. [潘展乐最后一米前都觉得要输了](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%B1%95%E4%B9%90%E6%9C%80%E5%90%8E%E4%B8%80%E7%B1%B3%E5%89%8D%E9%83%BD%E8%A7%89%E5%BE%97%E8%A6%81%E8%BE%93%E4%BA%86%23) `61.8K 🔥` `+30%`
1. [疑遭绑架女主播视频中状态涣散](https://s.weibo.com/weibo?q=%23%E7%96%91%E9%81%AD%E7%BB%91%E6%9E%B6%E5%A5%B3%E4%B8%BB%E6%92%AD%E8%A7%86%E9%A2%91%E4%B8%AD%E7%8A%B6%E6%80%81%E6%B6%A3%E6%95%A3%23) `53.0K 🔥` `+41%`
1. [许兰香嫁给韩梁未必是良缘](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%85%B0%E9%A6%99%E5%AB%81%E7%BB%99%E9%9F%A9%E6%A2%81%E6%9C%AA%E5%BF%85%E6%98%AF%E8%89%AF%E7%BC%98%23) `44.5K 🔥` `+37%`
1. [卡宴降30万还得61万](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E5%AE%B4%E9%99%8D30%E4%B8%87%E8%BF%98%E5%BE%9761%E4%B8%87%23) `81.0K 🔥`
1. [刘畊宏张卓尔淘汰](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%95%8A%E5%AE%8F%E5%BC%A0%E5%8D%93%E5%B0%94%E6%B7%98%E6%B1%B0%23) `59.2K 🔥`
1. [马竞2比1皇马](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%AB%9E2%E6%AF%941%E7%9A%87%E9%A9%AC%23) `58.3K 🔥`
1. [崔健](https://s.weibo.com/weibo?q=%23%E5%B4%94%E5%81%A5%23) `53.0K 🔥`
1. [张家齐妈妈要求北京买房](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%A6%81%E6%B1%82%E5%8C%97%E4%BA%AC%E4%B9%B0%E6%88%BF%23) `53.0K 🔥`
1. [师生恋在在职教师和学生身上不成立](https://s.weibo.com/weibo?q=%23%E5%B8%88%E7%94%9F%E6%81%8B%E5%9C%A8%E5%9C%A8%E8%81%8C%E6%95%99%E5%B8%88%E5%92%8C%E5%AD%A6%E7%94%9F%E8%BA%AB%E4%B8%8A%E4%B8%8D%E6%88%90%E7%AB%8B%23) `53.0K 🔥`
1. [妈妈送的金项链没挂到张家齐脖子上](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E9%80%81%E7%9A%84%E9%87%91%E9%A1%B9%E9%93%BE%E6%B2%A1%E6%8C%82%E5%88%B0%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%84%96%E5%AD%90%E4%B8%8A%23) `53.0K 🔥`
1. [张家齐从未见过妈妈送的项链](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E4%BB%8E%E6%9C%AA%E8%A7%81%E8%BF%87%E5%A6%88%E5%A6%88%E9%80%81%E7%9A%84%E9%A1%B9%E9%93%BE%23) `53.0K 🔥`
1. [打击商K 连锁反应](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%87%BB%E5%95%86K%20%E8%BF%9E%E9%94%81%E5%8F%8D%E5%BA%94%23) `50.2K 🔥`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `42.8K 🔥`
1. [央妈报道樊振东](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E5%A6%88%E6%8A%A5%E9%81%93%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `42.6K 🔥`
1. [彩礼18.8万快成全国统一价了](https://s.weibo.com/weibo?q=%23%E5%BD%A9%E7%A4%BC18.8%E4%B8%87%E5%BF%AB%E6%88%90%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E4%BB%B7%E4%BA%86%23) `42.5K 🔥`
1. [年味消失的原因是这样么](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%91%B3%E6%B6%88%E5%A4%B1%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%98%AF%E8%BF%99%E6%A0%B7%E4%B9%88%23) `41.8K 🔥`
1. [肯德基 消费者觉得好吃就下架](https://s.weibo.com/weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%20%E6%B6%88%E8%B4%B9%E8%80%85%E8%A7%89%E5%BE%97%E5%A5%BD%E5%90%83%E5%B0%B1%E4%B8%8B%E6%9E%B6%23) `41.3K 🔥`
1. [永远不要用力走向任何人](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BF%9C%E4%B8%8D%E8%A6%81%E7%94%A8%E5%8A%9B%E8%B5%B0%E5%90%91%E4%BB%BB%E4%BD%95%E4%BA%BA%23) `41.1K 🔥`
1. [人怎么能说出这么有力量感的话](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%80%8E%E4%B9%88%E8%83%BD%E8%AF%B4%E5%87%BA%E8%BF%99%E4%B9%88%E6%9C%89%E5%8A%9B%E9%87%8F%E6%84%9F%E7%9A%84%E8%AF%9D%23) `40.6K 🔥`
1. [40岁才是真正的战场](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E6%89%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84%E6%88%98%E5%9C%BA%23) `36.6K 🔥`
1. [白鹿保镖都笑出花来了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%BF%9D%E9%95%96%E9%83%BD%E7%AC%91%E5%87%BA%E8%8A%B1%E6%9D%A5%E4%BA%86%23) `36.5K 🔥`
1. [王楚钦打第三局发现搞错比分](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%89%93%E7%AC%AC%E4%B8%89%E5%B1%80%E5%8F%91%E7%8E%B0%E6%90%9E%E9%94%99%E6%AF%94%E5%88%86%23) `36.4K 🔥`
1. [张家齐少女漫前空翻](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%B0%91%E5%A5%B3%E6%BC%AB%E5%89%8D%E7%A9%BA%E7%BF%BB%23) `36.4K 🔥`
1. [潘展乐直言谁都想要那枚金牌](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%B1%95%E4%B9%90%E7%9B%B4%E8%A8%80%E8%B0%81%E9%83%BD%E6%83%B3%E8%A6%81%E9%82%A3%E6%9E%9A%E9%87%91%E7%89%8C%23) `36.4K 🔥`
1. [张杰 好听](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%20%E5%A5%BD%E5%90%AC%23) `36.4K 🔥`
1. [崩坏星穹铁道](https://s.weibo.com/weibo?q=%23%E5%B4%A9%E5%9D%8F%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93%23) `36.4K 🔥`
1. [湾区升明月](https://s.weibo.com/weibo?q=%23%E6%B9%BE%E5%8C%BA%E5%8D%87%E6%98%8E%E6%9C%88%23) `36.3K 🔥`
1. [亚运会乒乓球](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%B9%92%E4%B9%93%E7%90%83%23) `36.3K 🔥`
1. [iPhone18ProMax1T翻车](https://s.weibo.com/weibo?q=%23iPhone18ProMax1T%E7%BF%BB%E8%BD%A6%23) `36.3K 🔥`
1. [昭珏选手剃寸头](https://s.weibo.com/weibo?q=%23%E6%98%AD%E7%8F%8F%E9%80%89%E6%89%8B%E5%89%83%E5%AF%B8%E5%A4%B4%23) `36.3K 🔥`
1. [张卓尔直播哭了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%8D%93%E5%B0%94%E7%9B%B4%E6%92%AD%E5%93%AD%E4%BA%86%23) `36.2K 🔥`
1. [母亲赶到家时两兄妹已被胡蜂蜇亡](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%B5%B6%E5%88%B0%E5%AE%B6%E6%97%B6%E4%B8%A4%E5%85%84%E5%A6%B9%E5%B7%B2%E8%A2%AB%E8%83%A1%E8%9C%82%E8%9C%87%E4%BA%A1%23) `36.2K 🔥`
1. [中国足球小将留洋西班牙](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%B3%E7%90%83%E5%B0%8F%E5%B0%86%E7%95%99%E6%B4%8B%E8%A5%BF%E7%8F%AD%E7%89%99%23) `53.0K 🔥` `-26%`
1. [声幻娱乐声明](https://s.weibo.com/weibo?q=%23%E5%A3%B0%E5%B9%BB%E5%A8%B1%E4%B9%90%E5%A3%B0%E6%98%8E%23) `38.9K 🔥` `-24%`
1. [古巨基苏有朋林心如唱情深深雨濛濛](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%B7%A8%E5%9F%BA%E8%8B%8F%E6%9C%89%E6%9C%8B%E6%9E%97%E5%BF%83%E5%A6%82%E5%94%B1%E6%83%85%E6%B7%B1%E6%B7%B1%E9%9B%A8%E6%BF%9B%E6%BF%9B%23) `36.4K 🔥` `-29%`
1. [潘展乐反超夺金](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%B1%95%E4%B9%90%E5%8F%8D%E8%B6%85%E5%A4%BA%E9%87%91%23) `36.3K 🔥` `-47%`
1. [马德里竞技VS皇家马德里](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%BE%B7%E9%87%8C%E7%AB%9E%E6%8A%80VS%E7%9A%87%E5%AE%B6%E9%A9%AC%E5%BE%B7%E9%87%8C%23) `36.3K 🔥` `-66%`
1. [在泰疑遭绑架女主播家属发声](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%B3%B0%E7%96%91%E9%81%AD%E7%BB%91%E6%9E%B6%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `36.3K 🔥` `-45%`
1. [罗梅罗踩踏贝林厄姆](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%A2%85%E7%BD%97%E8%B8%A9%E8%B8%8F%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%23) `36.3K 🔥` `-31%`
1. [冯禧孙乐言冯琳是同班同学](https://s.weibo.com/weibo?q=%23%E5%86%AF%E7%A6%A7%E5%AD%99%E4%B9%90%E8%A8%80%E5%86%AF%E7%90%B3%E6%98%AF%E5%90%8C%E7%8F%AD%E5%90%8C%E5%AD%A6%23) `36.3K 🔥` `-29%`

Updated at 2026-09-21 05:55:31

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
