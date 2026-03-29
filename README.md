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

1. [如何呢 又能怎 (What can I do?)](https://s.weibo.com/weibo?q=%23%E5%A6%82%E4%BD%95%E5%91%A2%20%E5%8F%88%E8%83%BD%E6%80%8E%23) `16.4M 🔥` `NEW`
1. [东大高武学院首支正式pv发布](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%A4%A7%E9%AB%98%E6%AD%A6%E5%AD%A6%E9%99%A2%E9%A6%96%E6%94%AF%E6%AD%A3%E5%BC%8Fpv%E5%8F%91%E5%B8%83%23) `10.1M 🔥` `NEW`
1. [单依纯演唱会好想谈恋爱](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A5%BD%E6%83%B3%E8%B0%88%E6%81%8B%E7%88%B1%23) `327.8K 🔥` `NEW`
1. [每天化妆状态](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%8C%96%E5%A6%86%E7%8A%B6%E6%80%81%23) `207.5K 🔥` `NEW`
1. [全景还原梅姨案拐卖链条](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%99%AF%E8%BF%98%E5%8E%9F%E6%A2%85%E5%A7%A8%E6%A1%88%E6%8B%90%E5%8D%96%E9%93%BE%E6%9D%A1%23) `189.1K 🔥` `NEW`
1. [李白](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BD%23) `187.4K 🔥` `NEW`
1. [浪姐7唯一双金影后](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%907%E5%94%AF%E4%B8%80%E5%8F%8C%E9%87%91%E5%BD%B1%E5%90%8E%23) `165.4K 🔥` `NEW`
1. [胡塞伊朗黎巴嫩同步袭击以色列](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%A1%9E%E4%BC%8A%E6%9C%97%E9%BB%8E%E5%B7%B4%E5%AB%A9%E5%90%8C%E6%AD%A5%E8%A2%AD%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%23) `162.1K 🔥` `NEW`
1. [她忘了很多却没忘送儿参军的约定](https://s.weibo.com/weibo?q=%23%E5%A5%B9%E5%BF%98%E4%BA%86%E5%BE%88%E5%A4%9A%E5%8D%B4%E6%B2%A1%E5%BF%98%E9%80%81%E5%84%BF%E5%8F%82%E5%86%9B%E7%9A%84%E7%BA%A6%E5%AE%9A%23) `151.5K 🔥` `NEW`
1. [李荣浩 单依纯你是来报仇的](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%20%E5%8D%95%E4%BE%9D%E7%BA%AF%E4%BD%A0%E6%98%AF%E6%9D%A5%E6%8A%A5%E4%BB%87%E7%9A%84%23) `151.1K 🔥` `NEW`
1. [奔跑吧海口直播 (Run Haikou live broadcast)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E6%B5%B7%E5%8F%A3%E7%9B%B4%E6%92%AD%23) `150.5K 🔥` `NEW`
1. [陈牧驰晒还钱截图](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%89%A7%E9%A9%B0%E6%99%92%E8%BF%98%E9%92%B1%E6%88%AA%E5%9B%BE%23) `150.0K 🔥` `NEW`
1. [张奕然参加艺考](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A5%95%E7%84%B6%E5%8F%82%E5%8A%A0%E8%89%BA%E8%80%83%23) `150.0K 🔥` `NEW`
1. [奶茶店点一杯不够起送](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E8%8C%B6%E5%BA%97%E7%82%B9%E4%B8%80%E6%9D%AF%E4%B8%8D%E5%A4%9F%E8%B5%B7%E9%80%81%23) `149.8K 🔥` `NEW`
1. [原来五哈导演并非不爱请女嘉宾](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%BA%94%E5%93%88%E5%AF%BC%E6%BC%94%E5%B9%B6%E9%9D%9E%E4%B8%8D%E7%88%B1%E8%AF%B7%E5%A5%B3%E5%98%89%E5%AE%BE%23) `145.8K 🔥` `NEW`
1. [全职高手已永久拉黑涉事画师](https://s.weibo.com/weibo?q=%23%E5%85%A8%E8%81%8C%E9%AB%98%E6%89%8B%E5%B7%B2%E6%B0%B8%E4%B9%85%E6%8B%89%E9%BB%91%E6%B6%89%E4%BA%8B%E7%94%BB%E5%B8%88%23) `131.6K 🔥` `NEW`
1. [世界最大直径高铁盾构机上岸](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9C%80%E5%A4%A7%E7%9B%B4%E5%BE%84%E9%AB%98%E9%93%81%E7%9B%BE%E6%9E%84%E6%9C%BA%E4%B8%8A%E5%B2%B8%23) `116.4K 🔥` `NEW`
1. [以军称将袭击伊朗全部关键军工设施](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E7%A7%B0%E5%B0%86%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E5%85%A8%E9%83%A8%E5%85%B3%E9%94%AE%E5%86%9B%E5%B7%A5%E8%AE%BE%E6%96%BD%23) `115.0K 🔥` `NEW`
1. [广州冰雹](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%86%B0%E9%9B%B9%23) `114.9K 🔥` `NEW`
1. [娃娃被海鸥绑架了](https://s.weibo.com/weibo?q=%23%E5%A8%83%E5%A8%83%E8%A2%AB%E6%B5%B7%E9%B8%A5%E7%BB%91%E6%9E%B6%E4%BA%86%23) `105.5K 🔥` `NEW`
1. [雀巢12吨巧克力被盗 (12 tons of Nestlé chocolate stolen)](https://s.weibo.com/weibo?q=%23%E9%9B%80%E5%B7%A212%E5%90%A8%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%A2%AB%E7%9B%97%23) `105.5K 🔥` `NEW`
1. [李荣浩 单依纯强行侵权](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%20%E5%8D%95%E4%BE%9D%E7%BA%AF%E5%BC%BA%E8%A1%8C%E4%BE%B5%E6%9D%83%23) `16.5M 🔥` `+11094%`
1. [氯雷他定](https://s.weibo.com/weibo?q=%23%E6%B0%AF%E9%9B%B7%E4%BB%96%E5%AE%9A%23) `2.1M 🔥` `+82%`
1. [2026中国网络媒体论坛](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E5%AA%92%E4%BD%93%E8%AE%BA%E5%9D%9B%23) `1.7M 🔥` `+163%`
1. [谢娜在张杰演唱会亲了秦岚杜华](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9C%A8%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%B2%E4%BA%86%E7%A7%A6%E5%B2%9A%E6%9D%9C%E5%8D%8E%23) `162.0K 🔥` `+93%`
1. [白日提灯爆剧](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%88%86%E5%89%A7%23) `159.3K 🔥` `+106%`
1. [曾辉亲韩雨彤的脸](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E4%BA%B2%E9%9F%A9%E9%9B%A8%E5%BD%A4%E7%9A%84%E8%84%B8%23) `149.6K 🔥` `+22%`
1. [刘涛郝蕾说的是谁 (Who is Liu Tao and Hao Lei talking about?)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E9%83%9D%E8%95%BE%E8%AF%B4%E7%9A%84%E6%98%AF%E8%B0%81%23) `108.1K 🔥` `+23%`
1. [动森 人森](https://s.weibo.com/weibo?q=%23%E5%8A%A8%E6%A3%AE%20%E4%BA%BA%E6%A3%AE%23) `107.9K 🔥` `+51%`
1. [阿那亚海市蜃楼 (Aranya mirage)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%82%A3%E4%BA%9A%E6%B5%B7%E5%B8%82%E8%9C%83%E6%A5%BC%23) `261.5K 🔥`
1. [日本抗议者高喊中国对不起 (Japanese protesters shout China is sorry)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8A%97%E8%AE%AE%E8%80%85%E9%AB%98%E5%96%8A%E4%B8%AD%E5%9B%BD%E5%AF%B9%E4%B8%8D%E8%B5%B7%23) `215.8K 🔥`
1. [郑晓龙拍了女演员被潜规则](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%99%93%E9%BE%99%E6%8B%8D%E4%BA%86%E5%A5%B3%E6%BC%94%E5%91%98%E8%A2%AB%E6%BD%9C%E8%A7%84%E5%88%99%23) `161.6K 🔥`
1. [氯雷他定和西替利嗪的区别](https://s.weibo.com/weibo?q=%23%E6%B0%AF%E9%9B%B7%E4%BB%96%E5%AE%9A%E5%92%8C%E8%A5%BF%E6%9B%BF%E5%88%A9%E5%97%AA%E7%9A%84%E5%8C%BA%E5%88%AB%23) `161.0K 🔥`
1. [长期不吃主食身体的8个变化 (8 changes in the body after not eating staple food for a long time)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%B8%8D%E5%90%83%E4%B8%BB%E9%A3%9F%E8%BA%AB%E4%BD%93%E7%9A%848%E4%B8%AA%E5%8F%98%E5%8C%96%23) `151.6K 🔥`
1. [陈牧驰回应与吴楚一相关争议](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%89%A7%E9%A9%B0%E5%9B%9E%E5%BA%94%E4%B8%8E%E5%90%B4%E6%A5%9A%E4%B8%80%E7%9B%B8%E5%85%B3%E4%BA%89%E8%AE%AE%23) `151.3K 🔥`
1. [不是正剧就不用较真粉底液将军吗](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%98%AF%E6%AD%A3%E5%89%A7%E5%B0%B1%E4%B8%8D%E7%94%A8%E8%BE%83%E7%9C%9F%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%E5%90%97%23) `150.3K 🔥`
1. [全红婵19岁发文](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B519%E5%B2%81%E5%8F%91%E6%96%87%23) `146.0K 🔥`
1. [逐玉 庆功宴 (Zhuyu Celebration Banquet)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `136.3K 🔥`
1. [才发现王一博上的全英课 (Only then did I discover that Wang Yibo was taking an all-English class)](https://s.weibo.com/weibo?q=%23%E6%89%8D%E5%8F%91%E7%8E%B0%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B8%8A%E7%9A%84%E5%85%A8%E8%8B%B1%E8%AF%BE%23) `128.2K 🔥`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `115.2K 🔥`
1. [林子烨像张凌赫生的](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%E5%83%8F%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%9F%E7%9A%84%23) `114.8K 🔥`
1. [曝女顶流被公司索赔3亿解约费](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A5%B3%E9%A1%B6%E6%B5%81%E8%A2%AB%E5%85%AC%E5%8F%B8%E7%B4%A2%E8%B5%943%E4%BA%BF%E8%A7%A3%E7%BA%A6%E8%B4%B9%23) `114.4K 🔥`
1. [夫妻房产留给长子长孙遭两女儿反对](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E6%88%BF%E4%BA%A7%E7%95%99%E7%BB%99%E9%95%BF%E5%AD%90%E9%95%BF%E5%AD%99%E9%81%AD%E4%B8%A4%E5%A5%B3%E5%84%BF%E5%8F%8D%E5%AF%B9%23) `110.5K 🔥`
1. [张震岳收藏吐槽周杰伦的文章](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9C%87%E5%B2%B3%E6%94%B6%E8%97%8F%E5%90%90%E6%A7%BD%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%9A%84%E6%96%87%E7%AB%A0%23) `109.7K 🔥`
1. [QQ音乐 虞书欣](https://s.weibo.com/weibo?q=%23QQ%E9%9F%B3%E4%B9%90%20%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `107.9K 🔥`
1. [女子半年没回家卧室开窗变邻居阳台 (A woman who hadn't been home for half a year opened her bedroom window and turned it into a neighbor's balcony.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8D%8A%E5%B9%B4%E6%B2%A1%E5%9B%9E%E5%AE%B6%E5%8D%A7%E5%AE%A4%E5%BC%80%E7%AA%97%E5%8F%98%E9%82%BB%E5%B1%85%E9%98%B3%E5%8F%B0%23) `106.8K 🔥`
1. [奈雪的茶没人喝了 (No one drinks Nayuki’s tea anymore)](https://s.weibo.com/weibo?q=%23%E5%A5%88%E9%9B%AA%E7%9A%84%E8%8C%B6%E6%B2%A1%E4%BA%BA%E5%96%9D%E4%BA%86%23) `380.5K 🔥` `-53%`
1. [日本人强闯我使馆事件最新进展](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%BC%BA%E9%97%AF%E6%88%91%E4%BD%BF%E9%A6%86%E4%BA%8B%E4%BB%B6%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `156.6K 🔥` `-35%`
1. [美国全国爆发反对特朗普政府集会 (Rallies against Trump administration erupt across U.S.)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%85%A8%E5%9B%BD%E7%88%86%E5%8F%91%E5%8F%8D%E5%AF%B9%E7%89%B9%E6%9C%97%E6%99%AE%E6%94%BF%E5%BA%9C%E9%9B%86%E4%BC%9A%23) `151.0K 🔥` `-21%`
1. [德国版射雕预告好燃好震撼](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E7%89%88%E5%B0%84%E9%9B%95%E9%A2%84%E5%91%8A%E5%A5%BD%E7%87%83%E5%A5%BD%E9%9C%87%E6%92%BC%23) `149.4K 🔥` `-43%`

Updated at 2026-03-29 15:52:43

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
