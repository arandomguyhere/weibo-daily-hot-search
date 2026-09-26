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

1. [英格兰2比3西班牙](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B02%E6%AF%943%E8%A5%BF%E7%8F%AD%E7%89%99%23) `317.3K 🔥` `NEW`
1. [医生戳破饮料配料表误区](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%88%B3%E7%A0%B4%E9%A5%AE%E6%96%99%E9%85%8D%E6%96%99%E8%A1%A8%E8%AF%AF%E5%8C%BA%23) `208.4K 🔥` `NEW`
1. [中国选手刷新了尘封36年的纪录](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%80%89%E6%89%8B%E5%88%B7%E6%96%B0%E4%BA%86%E5%B0%98%E5%B0%8136%E5%B9%B4%E7%9A%84%E7%BA%AA%E5%BD%95%23) `198.0K 🔥` `NEW`
1. [网红潘宏虐狗纠纷终审判决](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%BD%98%E5%AE%8F%E8%99%90%E7%8B%97%E7%BA%A0%E7%BA%B7%E7%BB%88%E5%AE%A1%E5%88%A4%E5%86%B3%23) `172.4K 🔥` `NEW`
1. [刘欢](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%23) `172.0K 🔥` `NEW`
1. [刘欢到退休时仍是副教授](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%88%B0%E9%80%80%E4%BC%91%E6%97%B6%E4%BB%8D%E6%98%AF%E5%89%AF%E6%95%99%E6%8E%88%23) `171.7K 🔥` `NEW`
1. [接兰香如故二小姐的好命](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E4%BA%8C%E5%B0%8F%E5%A7%90%E7%9A%84%E5%A5%BD%E5%91%BD%23) `170.2K 🔥` `NEW`
1. [林诗栋疯狂庆祝国乒一人超淡定](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E7%96%AF%E7%8B%82%E5%BA%86%E7%A5%9D%E5%9B%BD%E4%B9%92%E4%B8%80%E4%BA%BA%E8%B6%85%E6%B7%A1%E5%AE%9A%23) `150.6K 🔥` `NEW`
1. [谭松韵刘学义兰香如故剧播涨粉](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%88%98%E5%AD%A6%E4%B9%89%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E5%89%A7%E6%92%AD%E6%B6%A8%E7%B2%89%23) `148.0K 🔥` `NEW`
1. [周深演唱会嘴巴里都是雨水](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%BC%94%E5%94%B1%E4%BC%9A%E5%98%B4%E5%B7%B4%E9%87%8C%E9%83%BD%E6%98%AF%E9%9B%A8%E6%B0%B4%23) `146.8K 🔥` `NEW`
1. [1995年微机课领先四十个千年](https://s.weibo.com/weibo?q=%231995%E5%B9%B4%E5%BE%AE%E6%9C%BA%E8%AF%BE%E9%A2%86%E5%85%88%E5%9B%9B%E5%8D%81%E4%B8%AA%E5%8D%83%E5%B9%B4%23) `146.3K 🔥` `NEW`
1. [阿拉米扬世界排名第344](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%8B%89%E7%B1%B3%E6%89%AC%E4%B8%96%E7%95%8C%E6%8E%92%E5%90%8D%E7%AC%AC344%23) `143.6K 🔥` `NEW`
1. [王一涵夺冠再创历史](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E6%B6%B5%E5%A4%BA%E5%86%A0%E5%86%8D%E5%88%9B%E5%8E%86%E5%8F%B2%23) `141.4K 🔥` `NEW`
1. [凯恩失点](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E5%A4%B1%E7%82%B9%23) `138.4K 🔥` `NEW`
1. [王一博锁定发车席位](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%94%81%E5%AE%9A%E5%8F%91%E8%BD%A6%E5%B8%AD%E4%BD%8D%23) `136.1K 🔥` `NEW`
1. [中美达成300亿美元对等降税安排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E8%BE%BE%E6%88%90300%E4%BA%BF%E7%BE%8E%E5%85%83%E5%AF%B9%E7%AD%89%E9%99%8D%E7%A8%8E%E5%AE%89%E6%8E%92%23) `873.3K 🔥` `+611%`
1. [王楚钦感谢孙颖莎一起守住了混双金牌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%84%9F%E8%B0%A2%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%80%E8%B5%B7%E5%AE%88%E4%BD%8F%E4%BA%86%E6%B7%B7%E5%8F%8C%E9%87%91%E7%89%8C%23) `715.7K 🔥` `+536%`
1. [中美八点成果共识公布](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%AB%E7%82%B9%E6%88%90%E6%9E%9C%E5%85%B1%E8%AF%86%E5%85%AC%E5%B8%83%23) `522.0K 🔥` `+663%`
1. [乌方公开已将两名朝鲜战俘移送韩国](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E6%96%B9%E5%85%AC%E5%BC%80%E5%B7%B2%E5%B0%86%E4%B8%A4%E5%90%8D%E6%9C%9D%E9%B2%9C%E6%88%98%E4%BF%98%E7%A7%BB%E9%80%81%E9%9F%A9%E5%9B%BD%23) `226.9K 🔥` `+442%`
1. [重庆轻轨出现瞬间的科幻感](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E8%BD%BB%E8%BD%A8%E5%87%BA%E7%8E%B0%E7%9E%AC%E9%97%B4%E7%9A%84%E7%A7%91%E5%B9%BB%E6%84%9F%23) `209.4K 🔥` `+626%`
1. [乒乓球男单](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E7%94%B7%E5%8D%95%23) `201.4K 🔥` `+265%`
1. [蔡磊确诊渐冻症后的第七个中秋](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E7%A1%AE%E8%AF%8A%E6%B8%90%E5%86%BB%E7%97%87%E5%90%8E%E7%9A%84%E7%AC%AC%E4%B8%83%E4%B8%AA%E4%B8%AD%E7%A7%8B%23) `173.3K 🔥` `+231%`
1. [中美延期吉隆坡经贸磋商成果](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%BB%B6%E6%9C%9F%E5%90%89%E9%9A%86%E5%9D%A1%E7%BB%8F%E8%B4%B8%E7%A3%8B%E5%95%86%E6%88%90%E6%9E%9C%23) `173.2K 🔥` `+224%`
1. [九月多位公众人物相继离世](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E6%9C%88%E5%A4%9A%E4%BD%8D%E5%85%AC%E4%BC%97%E4%BA%BA%E7%89%A9%E7%9B%B8%E7%BB%A7%E7%A6%BB%E4%B8%96%23) `171.2K 🔥` `+223%`
1. [得知未婚妻遭性侵男子称错不在你](https://s.weibo.com/weibo?q=%23%E5%BE%97%E7%9F%A5%E6%9C%AA%E5%A9%9A%E5%A6%BB%E9%81%AD%E6%80%A7%E4%BE%B5%E7%94%B7%E5%AD%90%E7%A7%B0%E9%94%99%E4%B8%8D%E5%9C%A8%E4%BD%A0%23) `170.6K 🔥` `+232%`
1. [张本智和爆冷惊呆了韩国队](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E7%88%86%E5%86%B7%E6%83%8A%E5%91%86%E4%BA%86%E9%9F%A9%E5%9B%BD%E9%98%9F%23) `170.4K 🔥` `+237%`
1. [上海大降温时间定了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A4%A7%E9%99%8D%E6%B8%A9%E6%97%B6%E9%97%B4%E5%AE%9A%E4%BA%86%23) `159.2K 🔥` `+196%`
1. [林诗栋 跨栏](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%20%E8%B7%A8%E6%A0%8F%23) `158.6K 🔥` `+215%`
1. [病态嗑cp该停一停了](https://s.weibo.com/weibo?q=%23%E7%97%85%E6%80%81%E5%97%91cp%E8%AF%A5%E5%81%9C%E4%B8%80%E5%81%9C%E4%BA%86%23) `157.8K 🔥` `+307%`
1. [同卵双胞胎失散六十年一高一矮](https://s.weibo.com/weibo?q=%23%E5%90%8C%E5%8D%B5%E5%8F%8C%E8%83%9E%E8%83%8E%E5%A4%B1%E6%95%A3%E5%85%AD%E5%8D%81%E5%B9%B4%E4%B8%80%E9%AB%98%E4%B8%80%E7%9F%AE%23) `156.7K 🔥` `+442%`
1. [井柏然看热搜](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E7%9C%8B%E7%83%AD%E6%90%9C%23) `156.0K 🔥` `+299%`
1. [女儿知道欧洲游花了30万后](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E7%9F%A5%E9%81%93%E6%AC%A7%E6%B4%B2%E6%B8%B8%E8%8A%B1%E4%BA%8630%E4%B8%87%E5%90%8E%23) `155.2K 🔥` `+300%`
1. [牛棚少了头牛主人调监控惊呆了](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%A3%9A%E5%B0%91%E4%BA%86%E5%A4%B4%E7%89%9B%E4%B8%BB%E4%BA%BA%E8%B0%83%E7%9B%91%E6%8E%A7%E6%83%8A%E5%91%86%E4%BA%86%23) `154.9K 🔥` `+311%`
1. [现在的消费需求越来越清晰了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E6%B6%88%E8%B4%B9%E9%9C%80%E6%B1%82%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%B8%85%E6%99%B0%E4%BA%86%23) `154.1K 🔥` `+219%`
1. [晚上这个时段入睡对心脏更友好](https://s.weibo.com/weibo?q=%23%E6%99%9A%E4%B8%8A%E8%BF%99%E4%B8%AA%E6%97%B6%E6%AE%B5%E5%85%A5%E7%9D%A1%E5%AF%B9%E5%BF%83%E8%84%8F%E6%9B%B4%E5%8F%8B%E5%A5%BD%23) `153.4K 🔥` `+528%`
1. [掀开木地板发现霉菌像树枝爬满房间](https://s.weibo.com/weibo?q=%23%E6%8E%80%E5%BC%80%E6%9C%A8%E5%9C%B0%E6%9D%BF%E5%8F%91%E7%8E%B0%E9%9C%89%E8%8F%8C%E5%83%8F%E6%A0%91%E6%9E%9D%E7%88%AC%E6%BB%A1%E6%88%BF%E9%97%B4%23) `152.5K 🔥` `+367%`
1. [娶到了我的人生上限](https://s.weibo.com/weibo?q=%23%E5%A8%B6%E5%88%B0%E4%BA%86%E6%88%91%E7%9A%84%E4%BA%BA%E7%94%9F%E4%B8%8A%E9%99%90%23) `151.5K 🔥` `+292%`
1. [一部iPhone到底有多贵](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%83%A8iPhone%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E8%B4%B5%23) `150.8K 🔥` `+92%`
1. [曝素媛原型成为医生](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%B4%A0%E5%AA%9B%E5%8E%9F%E5%9E%8B%E6%88%90%E4%B8%BA%E5%8C%BB%E7%94%9F%23) `149.8K 🔥` `+228%`
1. [刘欢 吴青峰](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%20%E5%90%B4%E9%9D%92%E5%B3%B0%23) `148.7K 🔥` `+282%`
1. [英格兰vs西班牙](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0vs%E8%A5%BF%E7%8F%AD%E7%89%99%23) `145.0K 🔥` `+272%`
1. [孙颖莎说协会可以报两对混双](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E5%8D%8F%E4%BC%9A%E5%8F%AF%E4%BB%A5%E6%8A%A5%E4%B8%A4%E5%AF%B9%E6%B7%B7%E5%8F%8C%23) `144.5K 🔥` `+183%`
1. [婆婆大笑引来了婆婆大闹](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E5%A4%A7%E7%AC%91%E5%BC%95%E6%9D%A5%E4%BA%86%E5%A9%86%E5%A9%86%E5%A4%A7%E9%97%B9%23) `143.4K 🔥` `+292%`
1. [刘学义兰香如故有效播剧](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E6%9C%89%E6%95%88%E6%92%AD%E5%89%A7%23) `142.4K 🔥` `+427%`
1. [张杰 刘欢老师一路走好](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%20%E5%88%98%E6%AC%A2%E8%80%81%E5%B8%88%E4%B8%80%E8%B7%AF%E8%B5%B0%E5%A5%BD%23) `140.8K 🔥` `+425%`
1. [邓亚萍说王楚钦半决赛要倍加小心](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E8%AF%B4%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8D%8A%E5%86%B3%E8%B5%9B%E8%A6%81%E5%80%8D%E5%8A%A0%E5%B0%8F%E5%BF%83%23) `140.2K 🔥` `+501%`
1. [刘欢去世](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%8E%BB%E4%B8%96%23) `139.7K 🔥` `+324%`
1. [张本智和回应爆冷出局](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E5%9B%9E%E5%BA%94%E7%88%86%E5%86%B7%E5%87%BA%E5%B1%80%23) `138.1K 🔥` `+252%`
1. [刘欢妻子发文我永远的爱永远的痛](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%A6%BB%E5%AD%90%E5%8F%91%E6%96%87%E6%88%91%E6%B0%B8%E8%BF%9C%E7%9A%84%E7%88%B1%E6%B0%B8%E8%BF%9C%E7%9A%84%E7%97%9B%23) `137.3K 🔥` `+417%`

Updated at 2026-09-27 07:44:33

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
