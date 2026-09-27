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

1. [亚运乒乓球女单](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%B9%92%E4%B9%93%E7%90%83%E5%A5%B3%E5%8D%95%23) `1.5M 🔥` `NEW`
1. [不再在别人的死亡里找安全感](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%86%8D%E5%9C%A8%E5%88%AB%E4%BA%BA%E7%9A%84%E6%AD%BB%E4%BA%A1%E9%87%8C%E6%89%BE%E5%AE%89%E5%85%A8%E6%84%9F%23) `1.5M 🔥` `NEW`
1. [河南一技校101名毕业生入职北大](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%80%E6%8A%80%E6%A0%A1101%E5%90%8D%E6%AF%95%E4%B8%9A%E7%94%9F%E5%85%A5%E8%81%8C%E5%8C%97%E5%A4%A7%23) `1.0M 🔥` `NEW`
1. [以色列大使被逐出联合国大会](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%A4%A7%E4%BD%BF%E8%A2%AB%E9%80%90%E5%87%BA%E8%81%94%E5%90%88%E5%9B%BD%E5%A4%A7%E4%BC%9A%23) `817.5K 🔥` `NEW`
1. [女主播丧夫养2孩渴望成家被骗140万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B8%BB%E6%92%AD%E4%B8%A7%E5%A4%AB%E5%85%BB2%E5%AD%A9%E6%B8%B4%E6%9C%9B%E6%88%90%E5%AE%B6%E8%A2%AB%E9%AA%97140%E4%B8%87%23) `412.9K 🔥` `NEW`
1. [突然理解了门当户对](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E4%BA%86%E9%97%A8%E5%BD%93%E6%88%B7%E5%AF%B9%23) `404.9K 🔥` `NEW`
1. [0元购机全面叫停](https://s.weibo.com/weibo?q=%230%E5%85%83%E8%B4%AD%E6%9C%BA%E5%85%A8%E9%9D%A2%E5%8F%AB%E5%81%9C%23) `351.1K 🔥` `NEW`
1. [胡歌3岁女儿近照](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C3%E5%B2%81%E5%A5%B3%E5%84%BF%E8%BF%91%E7%85%A7%23) `227.1K 🔥` `NEW`
1. [井柏然是刘雯的Luke是Flora的](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E6%98%AF%E5%88%98%E9%9B%AF%E7%9A%84Luke%E6%98%AFFlora%E7%9A%84%23) `227.1K 🔥` `NEW`
1. [中国队冲金点](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%86%B2%E9%87%91%E7%82%B9%23) `222.8K 🔥` `NEW`
1. [杨过 郭芙](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%BF%87%20%E9%83%AD%E8%8A%99%23) `222.6K 🔥` `NEW`
1. [王祖贤访谈回答被指套用佛学](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%96%E8%B4%A4%E8%AE%BF%E8%B0%88%E5%9B%9E%E7%AD%94%E8%A2%AB%E6%8C%87%E5%A5%97%E7%94%A8%E4%BD%9B%E5%AD%A6%23) `222.0K 🔥` `NEW`
1. [Claude刷新物理学世界纪录](https://s.weibo.com/weibo?q=%23Claude%E5%88%B7%E6%96%B0%E7%89%A9%E7%90%86%E5%AD%A6%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `221.4K 🔥` `NEW`
1. [结婚总比一个人独居强](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E6%80%BB%E6%AF%94%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%8B%AC%E5%B1%85%E5%BC%BA%23) `221.0K 🔥` `NEW`
1. [到手两万多从银行离职不后悔](https://s.weibo.com/weibo?q=%23%E5%88%B0%E6%89%8B%E4%B8%A4%E4%B8%87%E5%A4%9A%E4%BB%8E%E9%93%B6%E8%A1%8C%E7%A6%BB%E8%81%8C%E4%B8%8D%E5%90%8E%E6%82%94%23) `220.0K 🔥` `NEW`
1. [缅怀刘欢](https://s.weibo.com/weibo?q=%23%E7%BC%85%E6%80%80%E5%88%98%E6%AC%A2%23) `220.0K 🔥` `NEW`
1. [于正说白鹿陈哲远越看越般配](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E8%AF%B4%E7%99%BD%E9%B9%BF%E9%99%88%E5%93%B2%E8%BF%9C%E8%B6%8A%E7%9C%8B%E8%B6%8A%E8%88%AC%E9%85%8D%23) `205.2K 🔥` `NEW`
1. [林锦岐不知许兰香是沈嘉兰](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%94%A6%E5%B2%90%E4%B8%8D%E7%9F%A5%E8%AE%B8%E5%85%B0%E9%A6%99%E6%98%AF%E6%B2%88%E5%98%89%E5%85%B0%23) `191.0K 🔥` `NEW`
1. [朱雨玲发文告别三届亚运](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%9B%A8%E7%8E%B2%E5%8F%91%E6%96%87%E5%91%8A%E5%88%AB%E4%B8%89%E5%B1%8A%E4%BA%9A%E8%BF%90%23) `172.3K 🔥` `NEW`
1. [阿那亚深夜泡面吧天天排两百米](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%82%A3%E4%BA%9A%E6%B7%B1%E5%A4%9C%E6%B3%A1%E9%9D%A2%E5%90%A7%E5%A4%A9%E5%A4%A9%E6%8E%92%E4%B8%A4%E7%99%BE%E7%B1%B3%23) `172.2K 🔥` `NEW`
1. [娱乐圈的明星亲兄弟](https://s.weibo.com/weibo?q=%23%E5%A8%B1%E4%B9%90%E5%9C%88%E7%9A%84%E6%98%8E%E6%98%9F%E4%BA%B2%E5%85%84%E5%BC%9F%23) `161.1K 🔥` `NEW`
1. [大熊猫平平福双已启程赴美](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%B9%B3%E5%B9%B3%E7%A6%8F%E5%8F%8C%E5%B7%B2%E5%90%AF%E7%A8%8B%E8%B5%B4%E7%BE%8E%23) `156.7K 🔥` `NEW`
1. [黄仁勋称AI不安全就别发货](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E7%A7%B0AI%E4%B8%8D%E5%AE%89%E5%85%A8%E5%B0%B1%E5%88%AB%E5%8F%91%E8%B4%A7%23) `154.3K 🔥` `NEW`
1. [这一刻许兰香真的急了都凶了玉婵](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E5%88%BB%E8%AE%B8%E5%85%B0%E9%A6%99%E7%9C%9F%E7%9A%84%E6%80%A5%E4%BA%86%E9%83%BD%E5%87%B6%E4%BA%86%E7%8E%89%E5%A9%B5%23) `134.3K 🔥` `NEW`
1. [店员称不堪骚扰偷加高度酒灌醉顾客](https://s.weibo.com/weibo?q=%23%E5%BA%97%E5%91%98%E7%A7%B0%E4%B8%8D%E5%A0%AA%E9%AA%9A%E6%89%B0%E5%81%B7%E5%8A%A0%E9%AB%98%E5%BA%A6%E9%85%92%E7%81%8C%E9%86%89%E9%A1%BE%E5%AE%A2%23) `130.5K 🔥` `NEW`
1. [王楚钦休赛调整](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%BC%91%E8%B5%9B%E8%B0%83%E6%95%B4%23) `128.6K 🔥` `NEW`
1. [潘展乐好实诚一孩子](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%B1%95%E4%B9%90%E5%A5%BD%E5%AE%9E%E8%AF%9A%E4%B8%80%E5%AD%A9%E5%AD%90%23) `124.5K 🔥` `NEW`
1. [刘学义好会剧宣](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%A5%BD%E4%BC%9A%E5%89%A7%E5%AE%A3%23) `124.2K 🔥` `NEW`
1. [男孩疑摔猫被母亲罚摔PS5](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E7%96%91%E6%91%94%E7%8C%AB%E8%A2%AB%E6%AF%8D%E4%BA%B2%E7%BD%9A%E6%91%94PS5%23) `119.4K 🔥` `NEW`
1. [主播双下巴卖不卖笑死人](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%92%AD%E5%8F%8C%E4%B8%8B%E5%B7%B4%E5%8D%96%E4%B8%8D%E5%8D%96%E7%AC%91%E6%AD%BB%E4%BA%BA%23) `117.0K 🔥` `NEW`
1. [中美八点成果共识公布](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%AB%E7%82%B9%E6%88%90%E6%9E%9C%E5%85%B1%E8%AF%86%E5%85%AC%E5%B8%83%23) `1.2M 🔥` `+134%`
1. [中国赏秋路线一路向秋放心去追](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B5%8F%E7%A7%8B%E8%B7%AF%E7%BA%BF%E4%B8%80%E8%B7%AF%E5%90%91%E7%A7%8B%E6%94%BE%E5%BF%83%E5%8E%BB%E8%BF%BD%23) `1.2M 🔥` `+1698%`
1. [周深演唱会嘴巴里都是雨水](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%BC%94%E5%94%B1%E4%BC%9A%E5%98%B4%E5%B7%B4%E9%87%8C%E9%83%BD%E6%98%AF%E9%9B%A8%E6%B0%B4%23) `240.1K 🔥` `+64%`
1. [林诗栋疯狂庆祝国乒一人超淡定](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E7%96%AF%E7%8B%82%E5%BA%86%E7%A5%9D%E5%9B%BD%E4%B9%92%E4%B8%80%E4%BA%BA%E8%B6%85%E6%B7%A1%E5%AE%9A%23) `224.5K 🔥` `+49%`
1. [刘欢到退休时仍是副教授](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%88%B0%E9%80%80%E4%BC%91%E6%97%B6%E4%BB%8D%E6%98%AF%E5%89%AF%E6%95%99%E6%8E%88%23) `223.7K 🔥` `+30%`
1. [张本智和爆冷惊呆了韩国队](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E7%88%86%E5%86%B7%E6%83%8A%E5%91%86%E4%BA%86%E9%9F%A9%E5%9B%BD%E9%98%9F%23) `222.4K 🔥` `+31%`
1. [九月多位公众人物相继离世](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E6%9C%88%E5%A4%9A%E4%BD%8D%E5%85%AC%E4%BC%97%E4%BA%BA%E7%89%A9%E7%9B%B8%E7%BB%A7%E7%A6%BB%E4%B8%96%23) `221.4K 🔥` `+29%`
1. [病态嗑cp该停一停了](https://s.weibo.com/weibo?q=%23%E7%97%85%E6%80%81%E5%97%91cp%E8%AF%A5%E5%81%9C%E4%B8%80%E5%81%9C%E4%BA%86%23) `220.4K 🔥` `+40%`
1. [接兰香如故二小姐的好命](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E4%BA%8C%E5%B0%8F%E5%A7%90%E7%9A%84%E5%A5%BD%E5%91%BD%23) `216.6K 🔥` `+27%`
1. [牛棚少了头牛主人调监控惊呆了](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%A3%9A%E5%B0%91%E4%BA%86%E5%A4%B4%E7%89%9B%E4%B8%BB%E4%BA%BA%E8%B0%83%E7%9B%91%E6%8E%A7%E6%83%8A%E5%91%86%E4%BA%86%23) `192.6K 🔥` `+24%`
1. [掀开木地板发现霉菌像树枝爬满房间](https://s.weibo.com/weibo?q=%23%E6%8E%80%E5%BC%80%E6%9C%A8%E5%9C%B0%E6%9D%BF%E5%8F%91%E7%8E%B0%E9%9C%89%E8%8F%8C%E5%83%8F%E6%A0%91%E6%9E%9D%E7%88%AC%E6%BB%A1%E6%88%BF%E9%97%B4%23) `189.4K 🔥` `+24%`
1. [孙颖莎说协会可以报两对混双](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E5%8D%8F%E4%BC%9A%E5%8F%AF%E4%BB%A5%E6%8A%A5%E4%B8%A4%E5%AF%B9%E6%B7%B7%E5%8F%8C%23) `172.0K 🔥`
1. [同卵双胞胎失散六十年一高一矮](https://s.weibo.com/weibo?q=%23%E5%90%8C%E5%8D%B5%E5%8F%8C%E8%83%9E%E8%83%8E%E5%A4%B1%E6%95%A3%E5%85%AD%E5%8D%81%E5%B9%B4%E4%B8%80%E9%AB%98%E4%B8%80%E7%9F%AE%23) `160.4K 🔥`
1. [谭松韵刘学义兰香如故剧播涨粉](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%88%98%E5%AD%A6%E4%B9%89%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E5%89%A7%E6%92%AD%E6%B6%A8%E7%B2%89%23) `153.9K 🔥`
1. [蔡磊确诊渐冻症后的第七个中秋](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E7%A1%AE%E8%AF%8A%E6%B8%90%E5%86%BB%E7%97%87%E5%90%8E%E7%9A%84%E7%AC%AC%E4%B8%83%E4%B8%AA%E4%B8%AD%E7%A7%8B%23) `150.2K 🔥`
1. [现在的消费需求越来越清晰了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E6%B6%88%E8%B4%B9%E9%9C%80%E6%B1%82%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%B8%85%E6%99%B0%E4%BA%86%23) `136.3K 🔥`
1. [女儿知道欧洲游花了30万后](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E7%9F%A5%E9%81%93%E6%AC%A7%E6%B4%B2%E6%B8%B8%E8%8A%B1%E4%BA%8630%E4%B8%87%E5%90%8E%23) `130.3K 🔥`
1. [英格兰2比3西班牙](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B02%E6%AF%943%E8%A5%BF%E7%8F%AD%E7%89%99%23) `228.5K 🔥` `-28%`
1. [重庆轻轨出现瞬间的科幻感](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E8%BD%BB%E8%BD%A8%E5%87%BA%E7%8E%B0%E7%9E%AC%E9%97%B4%E7%9A%84%E7%A7%91%E5%B9%BB%E6%84%9F%23) `131.6K 🔥` `-37%`
1. [乌方公开已将两名朝鲜战俘移送韩国](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E6%96%B9%E5%85%AC%E5%BC%80%E5%B7%B2%E5%B0%86%E4%B8%A4%E5%90%8D%E6%9C%9D%E9%B2%9C%E6%88%98%E4%BF%98%E7%A7%BB%E9%80%81%E9%9F%A9%E5%9B%BD%23) `119.7K 🔥` `-47%`

Updated at 2026-09-27 09:52:50

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
