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

1. [初中生曝光侵华日军罪证被死亡威胁 (Junior high school students were threatened with death after exposing evidence of crimes committed by the Japanese invaders of China)](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%AD%E7%94%9F%E6%9B%9D%E5%85%89%E4%BE%B5%E5%8D%8E%E6%97%A5%E5%86%9B%E7%BD%AA%E8%AF%81%E8%A2%AB%E6%AD%BB%E4%BA%A1%E5%A8%81%E8%83%81%23) `1.6M 🔥` `NEW`
1. [会计被AI取代的概率](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E8%AE%A1%E8%A2%ABAI%E5%8F%96%E4%BB%A3%E7%9A%84%E6%A6%82%E7%8E%87%23) `1.1M 🔥` `NEW`
1. [千万不要把手机交给商家写好评](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8A%8A%E6%89%8B%E6%9C%BA%E4%BA%A4%E7%BB%99%E5%95%86%E5%AE%B6%E5%86%99%E5%A5%BD%E8%AF%84%23) `1.0M 🔥` `NEW`
1. [张凌赫让金靖别站在自己和章若楠中间](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%AE%A9%E9%87%91%E9%9D%96%E5%88%AB%E7%AB%99%E5%9C%A8%E8%87%AA%E5%B7%B1%E5%92%8C%E7%AB%A0%E8%8B%A5%E6%A5%A0%E4%B8%AD%E9%97%B4%23) `1.0M 🔥` `NEW`
1. [343斤网红徒步峨眉山晕倒被抬下山](https://s.weibo.com/weibo?q=%23343%E6%96%A4%E7%BD%91%E7%BA%A2%E5%BE%92%E6%AD%A5%E5%B3%A8%E7%9C%89%E5%B1%B1%E6%99%95%E5%80%92%E8%A2%AB%E6%8A%AC%E4%B8%8B%E5%B1%B1%23) `1.0M 🔥` `NEW`
1. [女子造谣武汉黄冈遭遇电击龙卷风](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%80%A0%E8%B0%A3%E6%AD%A6%E6%B1%89%E9%BB%84%E5%86%88%E9%81%AD%E9%81%87%E7%94%B5%E5%87%BB%E9%BE%99%E5%8D%B7%E9%A3%8E%23) `881.4K 🔥` `NEW`
1. [将门独后全阵容官宣](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%85%A8%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `823.9K 🔥` `NEW`
1. [小蓝灯](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%93%9D%E7%81%AF%23) `785.7K 🔥` `NEW`
1. [樊振东杭州活动](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%9D%AD%E5%B7%9E%E6%B4%BB%E5%8A%A8%23) `763.6K 🔥` `NEW`
1. [苏醒谈谢娜李荣浩亲自下场](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E8%B0%88%E8%B0%A2%E5%A8%9C%E6%9D%8E%E8%8D%A3%E6%B5%A9%E4%BA%B2%E8%87%AA%E4%B8%8B%E5%9C%BA%23) `762.3K 🔥` `NEW`
1. [还以为易烊千玺做美甲了 (I thought Yi Yang Qianxi was getting a manicure)](https://s.weibo.com/weibo?q=%23%E8%BF%98%E4%BB%A5%E4%B8%BA%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%81%9A%E7%BE%8E%E7%94%B2%E4%BA%86%23) `760.7K 🔥` `NEW`
1. [山姆已下架泸溪河坚果桃酥](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%B7%B2%E4%B8%8B%E6%9E%B6%E6%B3%B8%E6%BA%AA%E6%B2%B3%E5%9D%9A%E6%9E%9C%E6%A1%83%E9%85%A5%23) `755.3K 🔥` `NEW`
1. [警方通报女子高铁上叫嚣全家体制内](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E9%AB%98%E9%93%81%E4%B8%8A%E5%8F%AB%E5%9A%A3%E5%85%A8%E5%AE%B6%E4%BD%93%E5%88%B6%E5%86%85%23) `668.3K 🔥` `NEW`
1. [李沁尼泊尔plog](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%81%E5%B0%BC%E6%B3%8A%E5%B0%94plog%23) `560.1K 🔥` `NEW`
1. [迪丽热巴29.5克拉海蓝宝颈链](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B429.5%E5%85%8B%E6%8B%89%E6%B5%B7%E8%93%9D%E5%AE%9D%E9%A2%88%E9%93%BE%23) `538.0K 🔥` `NEW`
1. [但斌 大跌一定要敢买](https://s.weibo.com/weibo?q=%23%E4%BD%86%E6%96%8C%20%E5%A4%A7%E8%B7%8C%E4%B8%80%E5%AE%9A%E8%A6%81%E6%95%A2%E4%B9%B0%23) `359.1K 🔥` `NEW`
1. [AI挑战张曼玉哭戏](https://s.weibo.com/weibo?q=%23AI%E6%8C%91%E6%88%98%E5%BC%A0%E6%9B%BC%E7%8E%89%E5%93%AD%E6%88%8F%23) `350.2K 🔥` `NEW`
1. [其实补气血真的很简单](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E8%A1%A5%E6%B0%94%E8%A1%80%E7%9C%9F%E7%9A%84%E5%BE%88%E7%AE%80%E5%8D%95%23) `347.9K 🔥` `NEW`
1. [易烊千玺忙一天打开手机天塌了](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%BF%99%E4%B8%80%E5%A4%A9%E6%89%93%E5%BC%80%E6%89%8B%E6%9C%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `347.7K 🔥` `NEW`
1. [迪丽热巴粉丝中考全市第一名](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%B2%89%E4%B8%9D%E4%B8%AD%E8%80%83%E5%85%A8%E5%B8%82%E7%AC%AC%E4%B8%80%E5%90%8D%23) `340.6K 🔥` `NEW`
1. [李想回复雷军 (Li Xiang replied to Lei Jun)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%83%B3%E5%9B%9E%E5%A4%8D%E9%9B%B7%E5%86%9B%23) `329.6K 🔥` `NEW`
1. [飞鹤让纯净有了具象的模样](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%B9%A4%E8%AE%A9%E7%BA%AF%E5%87%80%E6%9C%89%E4%BA%86%E5%85%B7%E8%B1%A1%E7%9A%84%E6%A8%A1%E6%A0%B7%23) `276.9K 🔥` `NEW`
1. [十日终焉杀青](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E6%9D%80%E9%9D%92%23) `249.5K 🔥` `NEW`
1. [与檀健次在银河相遇吧](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E6%AA%80%E5%81%A5%E6%AC%A1%E5%9C%A8%E9%93%B6%E6%B2%B3%E7%9B%B8%E9%81%87%E5%90%A7%23) `249.0K 🔥` `NEW`
1. [俄乌冲突出现重要转向](https://s.weibo.com/weibo?q=%23%E4%BF%84%E4%B9%8C%E5%86%B2%E7%AA%81%E5%87%BA%E7%8E%B0%E9%87%8D%E8%A6%81%E8%BD%AC%E5%90%91%23) `246.2K 🔥` `NEW`
1. [事业单位人员脱产学习后违约离职需担责](https://s.weibo.com/weibo?q=%23%E4%BA%8B%E4%B8%9A%E5%8D%95%E4%BD%8D%E4%BA%BA%E5%91%98%E8%84%B1%E4%BA%A7%E5%AD%A6%E4%B9%A0%E5%90%8E%E8%BF%9D%E7%BA%A6%E7%A6%BB%E8%81%8C%E9%9C%80%E6%8B%85%E8%B4%A3%23) `245.6K 🔥` `NEW`
1. [普通人的一生到底在追求什么](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E7%9A%84%E4%B8%80%E7%94%9F%E5%88%B0%E5%BA%95%E5%9C%A8%E8%BF%BD%E6%B1%82%E4%BB%80%E4%B9%88%23) `242.3K 🔥` `NEW`
1. [女子刚怀孕一个多月就遭丈夫家暴](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%88%9A%E6%80%80%E5%AD%95%E4%B8%80%E4%B8%AA%E5%A4%9A%E6%9C%88%E5%B0%B1%E9%81%AD%E4%B8%88%E5%A4%AB%E5%AE%B6%E6%9A%B4%23) `240.7K 🔥` `NEW`
1. [李小冉戴了王濛的手串](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%88%B4%E4%BA%86%E7%8E%8B%E6%BF%9B%E7%9A%84%E6%89%8B%E4%B8%B2%23) `238.9K 🔥` `NEW`
1. [柳柳周佑凌亲了](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%9F%B3%E5%91%A8%E4%BD%91%E5%87%8C%E4%BA%B2%E4%BA%86%23) `237.0K 🔥` `NEW`
1. [九门误闯天家真正的主人 (The nine gates accidentally broke into the real owner of Tianjia)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E8%AF%AF%E9%97%AF%E5%A4%A9%E5%AE%B6%E7%9C%9F%E6%AD%A3%E7%9A%84%E4%B8%BB%E4%BA%BA%23) `234.6K 🔥` `NEW`
1. [AI用的越熟练员工反而更累](https://s.weibo.com/weibo?q=%23AI%E7%94%A8%E7%9A%84%E8%B6%8A%E7%86%9F%E7%BB%83%E5%91%98%E5%B7%A5%E5%8F%8D%E8%80%8C%E6%9B%B4%E7%B4%AF%23) `233.2K 🔥` `NEW`
1. [NPC把丁程鑫指甲剪了](https://s.weibo.com/weibo?q=%23NPC%E6%8A%8A%E4%B8%81%E7%A8%8B%E9%91%AB%E6%8C%87%E7%94%B2%E5%89%AA%E4%BA%86%23) `231.9K 🔥` `NEW`
1. [姐姐陪弟弟弟媳拍婚纱照引争议](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E9%99%AA%E5%BC%9F%E5%BC%9F%E5%BC%9F%E5%AA%B3%E6%8B%8D%E5%A9%9A%E7%BA%B1%E7%85%A7%E5%BC%95%E4%BA%89%E8%AE%AE%23) `229.4K 🔥` `NEW`
1. [市监部门介入核查酸臭毛粉产业链](https://s.weibo.com/weibo?q=%23%E5%B8%82%E7%9B%91%E9%83%A8%E9%97%A8%E4%BB%8B%E5%85%A5%E6%A0%B8%E6%9F%A5%E9%85%B8%E8%87%AD%E6%AF%9B%E7%B2%89%E4%BA%A7%E4%B8%9A%E9%93%BE%23) `227.5K 🔥` `NEW`
1. [AG赛中射辅轮换](https://s.weibo.com/weibo?q=%23AG%E8%B5%9B%E4%B8%AD%E5%B0%84%E8%BE%85%E8%BD%AE%E6%8D%A2%23) `226.0K 🔥` `NEW`
1. [费曼说爸爸2最好的朋友是Joe](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E6%9B%BC%E8%AF%B4%E7%88%B8%E7%88%B82%E6%9C%80%E5%A5%BD%E7%9A%84%E6%9C%8B%E5%8F%8B%E6%98%AFJoe%23) `221.9K 🔥` `NEW`
1. [王戟是谁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%88%9F%E6%98%AF%E8%B0%81%23) `1.0M 🔥`
1. [泸溪河桃酥 牙冠](https://s.weibo.com/weibo?q=%23%E6%B3%B8%E6%BA%AA%E6%B2%B3%E6%A1%83%E9%85%A5%20%E7%89%99%E5%86%A0%23) `820.7K 🔥` `-68%`
1. [一觉没睡和豆包聊了8个小时](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%A7%89%E6%B2%A1%E7%9D%A1%E5%92%8C%E8%B1%86%E5%8C%85%E8%81%8A%E4%BA%868%E4%B8%AA%E5%B0%8F%E6%97%B6%23) `508.2K 🔥` `-45%`
1. [娜然霍震霆给霍启山拍照 (Naran and Huo Zhenting took photos of Huo Qishan)](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E7%84%B6%E9%9C%8D%E9%9C%87%E9%9C%86%E7%BB%99%E9%9C%8D%E5%90%AF%E5%B1%B1%E6%8B%8D%E7%85%A7%23) `248.1K 🔥` `-53%`
1. [文根英结婚](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%A0%B9%E8%8B%B1%E7%BB%93%E5%A9%9A%23) `244.0K 🔥` `-67%`
1. [刘宇宁连续8年悼念去世粉丝](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%BF%9E%E7%BB%AD8%E5%B9%B4%E6%82%BC%E5%BF%B5%E5%8E%BB%E4%B8%96%E7%B2%89%E4%B8%9D%23) `243.5K 🔥` `-58%`
1. [AI剧 一本万利 (AI Drama: A Lot of Money)](https://s.weibo.com/weibo?q=%23AI%E5%89%A7%20%E4%B8%80%E6%9C%AC%E4%B8%87%E5%88%A9%23) `237.8K 🔥` `-83%`
1. [14岁女生因提醒同学勿睡被老师打](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%A5%B3%E7%94%9F%E5%9B%A0%E6%8F%90%E9%86%92%E5%90%8C%E5%AD%A6%E5%8B%BF%E7%9D%A1%E8%A2%AB%E8%80%81%E5%B8%88%E6%89%93%23) `236.1K 🔥` `-55%`
1. [莫氏鸡煲老板称现在压力非常大](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E7%A7%B0%E7%8E%B0%E5%9C%A8%E5%8E%8B%E5%8A%9B%E9%9D%9E%E5%B8%B8%E5%A4%A7%23) `231.2K 🔥` `-74%`
1. [戚薇女儿11岁的身高](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E5%A5%B3%E5%84%BF11%E5%B2%81%E7%9A%84%E8%BA%AB%E9%AB%98%23) `230.2K 🔥` `-57%`
1. [布克与C罗前任交往](https://s.weibo.com/weibo?q=%23%E5%B8%83%E5%85%8B%E4%B8%8EC%E7%BD%97%E5%89%8D%E4%BB%BB%E4%BA%A4%E5%BE%80%23) `226.2K 🔥` `-60%`
1. [长鑫科技大涨](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E5%A4%A7%E6%B6%A8%23) `224.7K 🔥` `-54%`
1. [小米澎程可加92号汽油引争议](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E5%8F%AF%E5%8A%A092%E5%8F%B7%E6%B1%BD%E6%B2%B9%E5%BC%95%E4%BA%89%E8%AE%AE%23) `223.3K 🔥` `-70%`

Updated at 2026-07-29 15:18:27

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
