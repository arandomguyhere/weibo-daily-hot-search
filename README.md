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

1. [白鹿学历 (Bailu Educational Qualification)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AD%A6%E5%8E%86%23) `11.7M 🔥` `NEW`
1. [白鹿方六连辟谣](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B9%E5%85%AD%E8%BF%9E%E8%BE%9F%E8%B0%A3%23) `2.3M 🔥` `NEW`
1. [老外也疑惑中国为什么不参加世界杯](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E4%B9%9F%E7%96%91%E6%83%91%E4%B8%AD%E5%9B%BD%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%8F%82%E5%8A%A0%E4%B8%96%E7%95%8C%E6%9D%AF%23) `1.7M 🔥` `NEW`
1. [网信办发布公约整治涉企侵权信息](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BF%A1%E5%8A%9E%E5%8F%91%E5%B8%83%E5%85%AC%E7%BA%A6%E6%95%B4%E6%B2%BB%E6%B6%89%E4%BC%81%E4%BE%B5%E6%9D%83%E4%BF%A1%E6%81%AF%23) `1.3M 🔥` `NEW`
1. [上海一幼儿园教师离世](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%80%E5%B9%BC%E5%84%BF%E5%9B%AD%E6%95%99%E5%B8%88%E7%A6%BB%E4%B8%96%23) `923.1K 🔥` `NEW`
1. [第一次见丑得像人的狗](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E4%B8%91%E5%BE%97%E5%83%8F%E4%BA%BA%E7%9A%84%E7%8B%97%23) `806.0K 🔥` `NEW`
1. [鹿晗gapday音乐节](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97gapday%E9%9F%B3%E4%B9%90%E8%8A%82%23) `671.8K 🔥` `NEW`
1. [上下嘴唇一碰差点把自己毒死](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%B8%8B%E5%98%B4%E5%94%87%E4%B8%80%E7%A2%B0%E5%B7%AE%E7%82%B9%E6%8A%8A%E8%87%AA%E5%B7%B1%E6%AF%92%E6%AD%BB%23) `665.2K 🔥` `NEW`
1. [歌手补位](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E8%A1%A5%E4%BD%8D%23) `653.5K 🔥` `NEW`
1. [教育局回应上海一幼儿园教师离世](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E4%B8%8A%E6%B5%B7%E4%B8%80%E5%B9%BC%E5%84%BF%E5%9B%AD%E6%95%99%E5%B8%88%E7%A6%BB%E4%B8%96%23) `594.2K 🔥` `NEW`
1. [影石对大疆发起反诉 (Shadow Stone launches countersuit against DJI)](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E7%9F%B3%E5%AF%B9%E5%A4%A7%E7%96%86%E5%8F%91%E8%B5%B7%E5%8F%8D%E8%AF%89%23) `558.2K 🔥` `NEW`
1. [孙兴慜状态](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%85%B4%E6%85%9C%E7%8A%B6%E6%80%81%23) `455.6K 🔥` `NEW`
1. [幼师疑被家长和园方双重施压后离世](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%B8%88%E7%96%91%E8%A2%AB%E5%AE%B6%E9%95%BF%E5%92%8C%E5%9B%AD%E6%96%B9%E5%8F%8C%E9%87%8D%E6%96%BD%E5%8E%8B%E5%90%8E%E7%A6%BB%E4%B8%96%23) `421.0K 🔥` `NEW`
1. [陈立农这是干什么](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%AB%8B%E5%86%9C%E8%BF%99%E6%98%AF%E5%B9%B2%E4%BB%80%E4%B9%88%23) `414.2K 🔥` `NEW`
1. [张月是陈瑶的第一选择](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E6%98%AF%E9%99%88%E7%91%B6%E7%9A%84%E7%AC%AC%E4%B8%80%E9%80%89%E6%8B%A9%23) `377.3K 🔥` `NEW`
1. [大家不接陌生电话的最佳解释](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AE%B6%E4%B8%8D%E6%8E%A5%E9%99%8C%E7%94%9F%E7%94%B5%E8%AF%9D%E7%9A%84%E6%9C%80%E4%BD%B3%E8%A7%A3%E9%87%8A%23) `375.8K 🔥` `NEW`
1. [梅西首次回应慌得一批表情包](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E9%A6%96%E6%AC%A1%E5%9B%9E%E5%BA%94%E6%85%8C%E5%BE%97%E4%B8%80%E6%89%B9%E8%A1%A8%E6%83%85%E5%8C%85%23) `333.0K 🔥` `NEW`
1. [女子投资黄金一度浮盈30万现倒亏20万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8A%95%E8%B5%84%E9%BB%84%E9%87%91%E4%B8%80%E5%BA%A6%E6%B5%AE%E7%9B%8830%E4%B8%87%E7%8E%B0%E5%80%92%E4%BA%8F20%E4%B8%87%23) `331.1K 🔥` `NEW`
1. [蒙淇淇 没收到任何通知](https://s.weibo.com/weibo?q=%23%E8%92%99%E6%B7%87%E6%B7%87%20%E6%B2%A1%E6%94%B6%E5%88%B0%E4%BB%BB%E4%BD%95%E9%80%9A%E7%9F%A5%23) `329.9K 🔥` `NEW`
1. [迪丽热巴陈飞宇持续掉粉](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E6%8C%81%E7%BB%AD%E6%8E%89%E7%B2%89%23) `326.2K 🔥` `NEW`
1. [韩国2比1捷克 (South Korea 2-1 Czech Republic)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD2%E6%AF%941%E6%8D%B7%E5%85%8B%23) `324.5K 🔥` `NEW`
1. [于正感慨](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E6%84%9F%E6%85%A8%23) `323.2K 🔥` `NEW`
1. [国产TOP5厂商全员跟进方形前摄](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7TOP5%E5%8E%82%E5%95%86%E5%85%A8%E5%91%98%E8%B7%9F%E8%BF%9B%E6%96%B9%E5%BD%A2%E5%89%8D%E6%91%84%23) `320.2K 🔥` `NEW`
1. [原来一个人身上真的会有气质](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%80%E4%B8%AA%E4%BA%BA%E8%BA%AB%E4%B8%8A%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%9C%89%E6%B0%94%E8%B4%A8%23) `317.9K 🔥` `NEW`
1. [孙怡给了陈瑶60票](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%BB%99%E4%BA%86%E9%99%88%E7%91%B660%E7%A5%A8%23) `317.9K 🔥` `NEW`
1. [刘耀文说心疼马嘉祺](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%AF%B4%E5%BF%83%E7%96%BC%E9%A9%AC%E5%98%89%E7%A5%BA%23) `312.7K 🔥` `NEW`
1. [一个人租房住能有多省钱](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%A7%9F%E6%88%BF%E4%BD%8F%E8%83%BD%E6%9C%89%E5%A4%9A%E7%9C%81%E9%92%B1%23) `312.1K 🔥` `NEW`
1. [央视曝养生馆围猎老年人](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%BB%E7%94%9F%E9%A6%86%E5%9B%B4%E7%8C%8E%E8%80%81%E5%B9%B4%E4%BA%BA%23) `306.9K 🔥` `NEW`
1. [剩25分钟换答题卡考生道歉](https://s.weibo.com/weibo?q=%23%E5%89%A925%E5%88%86%E9%92%9F%E6%8D%A2%E7%AD%94%E9%A2%98%E5%8D%A1%E8%80%83%E7%94%9F%E9%81%93%E6%AD%89%23) `302.3K 🔥` `NEW`
1. [蒙淇淇请大家全程见证](https://s.weibo.com/weibo?q=%23%E8%92%99%E6%B7%87%E6%B7%87%E8%AF%B7%E5%A4%A7%E5%AE%B6%E5%85%A8%E7%A8%8B%E8%A7%81%E8%AF%81%23) `298.7K 🔥` `NEW`
1. [刘涛女儿18岁近照 (Recent photos of Liu Tao's daughter at 18 years old)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E5%A5%B3%E5%84%BF18%E5%B2%81%E8%BF%91%E7%85%A7%23) `296.4K 🔥` `NEW`
1. [徐州留学生插队吐口水被市民制止](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%B7%9E%E7%95%99%E5%AD%A6%E7%94%9F%E6%8F%92%E9%98%9F%E5%90%90%E5%8F%A3%E6%B0%B4%E8%A2%AB%E5%B8%82%E6%B0%91%E5%88%B6%E6%AD%A2%23) `277.7K 🔥` `NEW`
1. [张月选安崎投了40票而淡淡投了0](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%80%89%E5%AE%89%E5%B4%8E%E6%8A%95%E4%BA%8640%E7%A5%A8%E8%80%8C%E6%B7%A1%E6%B7%A1%E6%8A%95%E4%BA%860%23) `265.2K 🔥` `NEW`
1. [曝张百乔小雪出售沈阳别墅](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E7%99%BE%E4%B9%94%E5%B0%8F%E9%9B%AA%E5%87%BA%E5%94%AE%E6%B2%88%E9%98%B3%E5%88%AB%E5%A2%85%23) `263.3K 🔥` `NEW`
1. [泰国逝世公主昏迷3年半](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E9%80%9D%E4%B8%96%E5%85%AC%E4%B8%BB%E6%98%8F%E8%BF%B73%E5%B9%B4%E5%8D%8A%23) `252.7K 🔥` `NEW`
1. [陈伟霆连抛香港两套房套现近3000万](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E8%BF%9E%E6%8A%9B%E9%A6%99%E6%B8%AF%E4%B8%A4%E5%A5%97%E6%88%BF%E5%A5%97%E7%8E%B0%E8%BF%913000%E4%B8%87%23) `251.5K 🔥` `NEW`
1. [这下工作是真留痕了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%8B%E5%B7%A5%E4%BD%9C%E6%98%AF%E7%9C%9F%E7%95%99%E7%97%95%E4%BA%86%23) `237.4K 🔥` `NEW`
1. [贪吃狗被全校通缉](https://s.weibo.com/weibo?q=%23%E8%B4%AA%E5%90%83%E7%8B%97%E8%A2%AB%E5%85%A8%E6%A0%A1%E9%80%9A%E7%BC%89%23) `237.1K 🔥` `NEW`
1. [张凌赫一天不惹金靖就难受](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%80%E5%A4%A9%E4%B8%8D%E6%83%B9%E9%87%91%E9%9D%96%E5%B0%B1%E9%9A%BE%E5%8F%97%23) `236.2K 🔥` `NEW`
1. [4岁男童幼儿园磕伤家长索赔5万8](https://s.weibo.com/weibo?q=%234%E5%B2%81%E7%94%B7%E7%AB%A5%E5%B9%BC%E5%84%BF%E5%9B%AD%E7%A3%95%E4%BC%A4%E5%AE%B6%E9%95%BF%E7%B4%A2%E8%B5%945%E4%B8%878%23) `235.9K 🔥` `NEW`
1. [魅族前高管质疑苹果搞不懂AI (Former Meizu executive questions Apple’s inability to understand AI)](https://s.weibo.com/weibo?q=%23%E9%AD%85%E6%97%8F%E5%89%8D%E9%AB%98%E7%AE%A1%E8%B4%A8%E7%96%91%E8%8B%B9%E6%9E%9C%E6%90%9E%E4%B8%8D%E6%87%82AI%23) `235.8K 🔥` `NEW`
1. [菲律宾总统视察灾区发出笑声](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%80%BB%E7%BB%9F%E8%A7%86%E5%AF%9F%E7%81%BE%E5%8C%BA%E5%8F%91%E5%87%BA%E7%AC%91%E5%A3%B0%23) `229.7K 🔥` `NEW`
1. [中国广告片终于有了世界级松弛感](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B9%BF%E5%91%8A%E7%89%87%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%86%E4%B8%96%E7%95%8C%E7%BA%A7%E6%9D%BE%E5%BC%9B%E6%84%9F%23) `228.4K 🔥` `NEW`
1. [只有师范生才懂她评课有多厉害](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E5%B8%88%E8%8C%83%E7%94%9F%E6%89%8D%E6%87%82%E5%A5%B9%E8%AF%84%E8%AF%BE%E6%9C%89%E5%A4%9A%E5%8E%89%E5%AE%B3%23) `228.1K 🔥` `NEW`
1. [瑶台月下](https://s.weibo.com/weibo?q=%23%E7%91%B6%E5%8F%B0%E6%9C%88%E4%B8%8B%23) `215.7K 🔥` `NEW`
1. [梁龙要给球迷们整个曲儿](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%BE%99%E8%A6%81%E7%BB%99%E7%90%83%E8%BF%B7%E4%BB%AC%E6%95%B4%E4%B8%AA%E6%9B%B2%E5%84%BF%23) `211.0K 🔥` `NEW`
1. [韩国梅西式进球](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%A2%85%E8%A5%BF%E5%BC%8F%E8%BF%9B%E7%90%83%23) `209.9K 🔥` `NEW`
1. [从没见过这样的牛奶发布会](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E6%B2%A1%E8%A7%81%E8%BF%87%E8%BF%99%E6%A0%B7%E7%9A%84%E7%89%9B%E5%A5%B6%E5%8F%91%E5%B8%83%E4%BC%9A%23) `1.2M 🔥` `+145%`
1. [瞧这广告抠的](https://s.weibo.com/weibo?q=%23%E7%9E%A7%E8%BF%99%E5%B9%BF%E5%91%8A%E6%8A%A0%E7%9A%84%23) `668.1K 🔥` `+144%`
1. [韩国vs捷克](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BDvs%E6%8D%B7%E5%85%8B%23) `311.3K 🔥`
1. [日本炸鸡店一锅油反复用66年 (Japanese fried chicken restaurant uses one pot of oil over and over again for 66 years)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%82%B8%E9%B8%A1%E5%BA%97%E4%B8%80%E9%94%85%E6%B2%B9%E5%8F%8D%E5%A4%8D%E7%94%A866%E5%B9%B4%23) `334.2K 🔥` `-60%`
1. [世界杯 (world cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `235.7K 🔥` `-24%`

Updated at 2026-06-12 14:19:24

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
