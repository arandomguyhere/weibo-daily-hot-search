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

1. [中国赏秋路线一路向秋放心去追](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B5%8F%E7%A7%8B%E8%B7%AF%E7%BA%BF%E4%B8%80%E8%B7%AF%E5%90%91%E7%A7%8B%E6%94%BE%E5%BF%83%E5%8E%BB%E8%BF%BD%23) `66.1K 🔥` `NEW`
1. [米兰时装周](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E6%97%B6%E8%A3%85%E5%91%A8%23) `52.0K 🔥` `NEW`
1. [英格兰vs西班牙](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0vs%E8%A5%BF%E7%8F%AD%E7%89%99%23) `39.0K 🔥` `NEW`
1. [张继科回应25元一节乒乓课](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E5%9B%9E%E5%BA%9425%E5%85%83%E4%B8%80%E8%8A%82%E4%B9%92%E4%B9%93%E8%AF%BE%23) `30.5K 🔥` `NEW`
1. [周深演唱会](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%BC%94%E5%94%B1%E4%BC%9A%23) `30.1K 🔥` `NEW`
1. [国家队祝贺国乒混双冠亚军](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E9%98%9F%E7%A5%9D%E8%B4%BA%E5%9B%BD%E4%B9%92%E6%B7%B7%E5%8F%8C%E5%86%A0%E4%BA%9A%E5%86%9B%23) `28.4K 🔥` `NEW`
1. [王楚钦说中国队谁拿冠军都开心](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E4%B8%AD%E5%9B%BD%E9%98%9F%E8%B0%81%E6%8B%BF%E5%86%A0%E5%86%9B%E9%83%BD%E5%BC%80%E5%BF%83%23) `25.1K 🔥` `NEW`
1. [爱攒金豆的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%94%92%E9%87%91%E8%B1%86%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `24.7K 🔥` `NEW`
1. [晚上这个时段入睡对心脏更友好](https://s.weibo.com/weibo?q=%23%E6%99%9A%E4%B8%8A%E8%BF%99%E4%B8%AA%E6%97%B6%E6%AE%B5%E5%85%A5%E7%9D%A1%E5%AF%B9%E5%BF%83%E8%84%8F%E6%9B%B4%E5%8F%8B%E5%A5%BD%23) `24.4K 🔥` `NEW`
1. [邓亚萍说王楚钦半决赛要倍加小心](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E8%AF%B4%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8D%8A%E5%86%B3%E8%B5%9B%E8%A6%81%E5%80%8D%E5%8A%A0%E5%B0%8F%E5%BF%83%23) `23.3K 🔥` `NEW`
1. [毛不易演唱会](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%8D%E6%98%93%E6%BC%94%E5%94%B1%E4%BC%9A%23) `22.6K 🔥` `NEW`
1. [中美达成300亿美元对等降税安排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E8%BE%BE%E6%88%90300%E4%BA%BF%E7%BE%8E%E5%85%83%E5%AF%B9%E7%AD%89%E9%99%8D%E7%A8%8E%E5%AE%89%E6%8E%92%23) `122.9K 🔥` `-26%`
1. [王楚钦感谢孙颖莎一起守住了混双金牌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%84%9F%E8%B0%A2%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%80%E8%B5%B7%E5%AE%88%E4%BD%8F%E4%BA%86%E6%B7%B7%E5%8F%8C%E9%87%91%E7%89%8C%23) `112.5K 🔥` `-31%`
1. [中美八点成果共识公布](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%AB%E7%82%B9%E6%88%90%E6%9E%9C%E5%85%B1%E8%AF%86%E5%85%AC%E5%B8%83%23) `68.4K 🔥` `-57%`
1. [乒乓球男单](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E7%94%B7%E5%8D%95%23) `55.1K 🔥` `-34%`
1. [中美延期吉隆坡经贸磋商成果](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%BB%B6%E6%9C%9F%E5%90%89%E9%9A%86%E5%9D%A1%E7%BB%8F%E8%B4%B8%E7%A3%8B%E5%95%86%E6%88%90%E6%9E%9C%23) `53.5K 🔥` `-35%`
1. [赵雷](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E9%9B%B7%23) `53.3K 🔥` `-65%`
1. [九月多位公众人物相继离世](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E6%9C%88%E5%A4%9A%E4%BD%8D%E5%85%AC%E4%BC%97%E4%BA%BA%E7%89%A9%E7%9B%B8%E7%BB%A7%E7%A6%BB%E4%B8%96%23) `53.1K 🔥` `-64%`
1. [田曦薇特意叮嘱了三遍不准卖](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%89%B9%E6%84%8F%E5%8F%AE%E5%98%B1%E4%BA%86%E4%B8%89%E9%81%8D%E4%B8%8D%E5%87%86%E5%8D%96%23) `52.7K 🔥` `-49%`
1. [蔡磊确诊渐冻症后的第七个中秋](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E7%A1%AE%E8%AF%8A%E6%B8%90%E5%86%BB%E7%97%87%E5%90%8E%E7%9A%84%E7%AC%AC%E4%B8%83%E4%B8%AA%E4%B8%AD%E7%A7%8B%23) `52.3K 🔥` `-35%`
1. [得知未婚妻遭性侵男子称错不在你](https://s.weibo.com/weibo?q=%23%E5%BE%97%E7%9F%A5%E6%9C%AA%E5%A9%9A%E5%A6%BB%E9%81%AD%E6%80%A7%E4%BE%B5%E7%94%B7%E5%AD%90%E7%A7%B0%E9%94%99%E4%B8%8D%E5%9C%A8%E4%BD%A0%23) `51.4K 🔥` `-52%`
1. [孙颖莎说协会可以报两对混双](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E5%8D%8F%E4%BC%9A%E5%8F%AF%E4%BB%A5%E6%8A%A5%E4%B8%A4%E5%AF%B9%E6%B7%B7%E5%8F%8C%23) `51.1K 🔥` `-68%`
1. [陈芋汐 换了搭档照样夺冠](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%8A%8B%E6%B1%90%20%E6%8D%A2%E4%BA%86%E6%90%AD%E6%A1%A3%E7%85%A7%E6%A0%B7%E5%A4%BA%E5%86%A0%23) `50.9K 🔥` `-37%`
1. [张本智和爆冷惊呆了韩国队](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E7%88%86%E5%86%B7%E6%83%8A%E5%91%86%E4%BA%86%E9%9F%A9%E5%9B%BD%E9%98%9F%23) `50.6K 🔥` `-65%`
1. [林诗栋 跨栏](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%20%E8%B7%A8%E6%A0%8F%23) `50.4K 🔥` `-68%`
1. [现在的消费需求越来越清晰了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E6%B6%88%E8%B4%B9%E9%9C%80%E6%B1%82%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%B8%85%E6%99%B0%E4%BA%86%23) `48.3K 🔥` `-67%`
1. [曝素媛原型成为医生](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%B4%A0%E5%AA%9B%E5%8E%9F%E5%9E%8B%E6%88%90%E4%B8%BA%E5%8C%BB%E7%94%9F%23) `45.6K 🔥` `-60%`
1. [乌方公开已将两名朝鲜战俘移送韩国](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E6%96%B9%E5%85%AC%E5%BC%80%E5%B7%B2%E5%B0%86%E4%B8%A4%E5%90%8D%E6%9C%9D%E9%B2%9C%E6%88%98%E4%BF%98%E7%A7%BB%E9%80%81%E9%9F%A9%E5%9B%BD%23) `41.9K 🔥` `-72%`
1. [张本智和回应爆冷出局](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E5%9B%9E%E5%BA%94%E7%88%86%E5%86%B7%E5%87%BA%E5%B1%80%23) `39.3K 🔥` `-68%`
1. [井柏然看热搜](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E7%9C%8B%E7%83%AD%E6%90%9C%23) `39.1K 🔥` `-61%`
1. [刘欢 吴青峰](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%20%E5%90%B4%E9%9D%92%E5%B3%B0%23) `38.9K 🔥` `-61%`
1. [病态嗑cp该停一停了](https://s.weibo.com/weibo?q=%23%E7%97%85%E6%80%81%E5%97%91cp%E8%AF%A5%E5%81%9C%E4%B8%80%E5%81%9C%E4%BA%86%23) `38.8K 🔥` `-61%`
1. [女儿知道欧洲游花了30万后](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E7%9F%A5%E9%81%93%E6%AC%A7%E6%B4%B2%E6%B8%B8%E8%8A%B1%E4%BA%8630%E4%B8%87%E5%90%8E%23) `38.8K 🔥` `-61%`
1. [娶到了我的人生上限](https://s.weibo.com/weibo?q=%23%E5%A8%B6%E5%88%B0%E4%BA%86%E6%88%91%E7%9A%84%E4%BA%BA%E7%94%9F%E4%B8%8A%E9%99%90%23) `38.7K 🔥` `-53%`
1. [牛棚少了头牛主人调监控惊呆了](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%A3%9A%E5%B0%91%E4%BA%86%E5%A4%B4%E7%89%9B%E4%B8%BB%E4%BA%BA%E8%B0%83%E7%9B%91%E6%8E%A7%E6%83%8A%E5%91%86%E4%BA%86%23) `37.7K 🔥` `-29%`
1. [婆婆大笑引来了婆婆大闹](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E5%A4%A7%E7%AC%91%E5%BC%95%E6%9D%A5%E4%BA%86%E5%A9%86%E5%A9%86%E5%A4%A7%E9%97%B9%23) `36.5K 🔥` `-54%`
1. [EDG stew](https://s.weibo.com/weibo?q=%23EDG%20stew%23) `34.7K 🔥` `-71%`
1. [兰香如故腾讯第五部破33000剧集](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%85%BE%E8%AE%AF%E7%AC%AC%E4%BA%94%E9%83%A8%E7%A0%B433000%E5%89%A7%E9%9B%86%23) `33.9K 🔥` `-66%`
1. [刘欢去世](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%8E%BB%E4%B8%96%23) `32.9K 🔥` `-60%`
1. [掀开木地板发现霉菌像树枝爬满房间](https://s.weibo.com/weibo?q=%23%E6%8E%80%E5%BC%80%E6%9C%A8%E5%9C%B0%E6%9D%BF%E5%8F%91%E7%8E%B0%E9%9C%89%E8%8F%8C%E5%83%8F%E6%A0%91%E6%9E%9D%E7%88%AC%E6%BB%A1%E6%88%BF%E9%97%B4%23) `32.7K 🔥` `-68%`
1. [张一山演争吵戏面相都变了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%80%E5%B1%B1%E6%BC%94%E4%BA%89%E5%90%B5%E6%88%8F%E9%9D%A2%E7%9B%B8%E9%83%BD%E5%8F%98%E4%BA%86%23) `31.4K 🔥` `-58%`
1. [同卵双胞胎失散六十年一高一矮](https://s.weibo.com/weibo?q=%23%E5%90%8C%E5%8D%B5%E5%8F%8C%E8%83%9E%E8%83%8E%E5%A4%B1%E6%95%A3%E5%85%AD%E5%8D%81%E5%B9%B4%E4%B8%80%E9%AB%98%E4%B8%80%E7%9F%AE%23) `28.9K 🔥` `-72%`
1. [重庆轻轨出现瞬间的科幻感](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E8%BD%BB%E8%BD%A8%E5%87%BA%E7%8E%B0%E7%9E%AC%E9%97%B4%E7%9A%84%E7%A7%91%E5%B9%BB%E6%84%9F%23) `28.9K 🔥` `-72%`
1. [国羽男单全军覆没](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E7%BE%BD%E7%94%B7%E5%8D%95%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1%23) `27.1K 🔥` `-81%`
1. [孙颖莎回应不敌林诗栋蒯曼](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8C%E6%9E%97%E8%AF%97%E6%A0%8B%E8%92%AF%E6%9B%BC%23) `27.1K 🔥` `-60%`
1. [刘学义兰香如故有效播剧](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E6%9C%89%E6%95%88%E6%92%AD%E5%89%A7%23) `27.0K 🔥` `-61%`
1. [张杰 刘欢老师一路走好](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%20%E5%88%98%E6%AC%A2%E8%80%81%E5%B8%88%E4%B8%80%E8%B7%AF%E8%B5%B0%E5%A5%BD%23) `26.8K 🔥` `-66%`
1. [刘欢妻子发文我永远的爱永远的痛](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%A6%BB%E5%AD%90%E5%8F%91%E6%96%87%E6%88%91%E6%B0%B8%E8%BF%9C%E7%9A%84%E7%88%B1%E6%B0%B8%E8%BF%9C%E7%9A%84%E7%97%9B%23) `26.5K 🔥` `-56%`
1. [周深雨中唱响我爱你中国好震撼](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E9%9B%A8%E4%B8%AD%E5%94%B1%E5%93%8D%E6%88%91%E7%88%B1%E4%BD%A0%E4%B8%AD%E5%9B%BD%E5%A5%BD%E9%9C%87%E6%92%BC%23) `23.6K 🔥` `-65%`
1. [中美相互支持对方办好APEC和G20](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E7%9B%B8%E4%BA%92%E6%94%AF%E6%8C%81%E5%AF%B9%E6%96%B9%E5%8A%9E%E5%A5%BDAPEC%E5%92%8CG20%23) `22.5K 🔥` `-84%`

Updated at 2026-09-27 05:24:15

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
