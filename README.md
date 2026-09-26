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

1. [张本智和淘汰](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E6%B7%98%E6%B1%B0%23) `7.6M 🔥` `NEW`
1. [中美达成八点成果共识](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E8%BE%BE%E6%88%90%E5%85%AB%E7%82%B9%E6%88%90%E6%9E%9C%E5%85%B1%E8%AF%86%23) `2.0M 🔥` `NEW`
1. [大朋友的微疯生活](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%9C%8B%E5%8F%8B%E7%9A%84%E5%BE%AE%E7%96%AF%E7%94%9F%E6%B4%BB%23) `1.2M 🔥` `NEW`
1. [林诗栋赢下松岛辉空激动飞越围栏](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E8%B5%A2%E4%B8%8B%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E6%BF%80%E5%8A%A8%E9%A3%9E%E8%B6%8A%E5%9B%B4%E6%A0%8F%23) `1.2M 🔥` `NEW`
1. [林诗栋王皓疯狂庆祝](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E7%8E%8B%E7%9A%93%E7%96%AF%E7%8B%82%E5%BA%86%E7%A5%9D%23) `853.1K 🔥` `NEW`
1. [孙颖莎获胜后仰天长叹](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%8E%B7%E8%83%9C%E5%90%8E%E4%BB%B0%E5%A4%A9%E9%95%BF%E5%8F%B9%23) `848.9K 🔥` `NEW`
1. [现在的消费需求越来越清晰了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E6%B6%88%E8%B4%B9%E9%9C%80%E6%B1%82%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%B8%85%E6%99%B0%E4%BA%86%23) `776.4K 🔥` `NEW`
1. [月饼回收价800元一吨](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%A5%BC%E5%9B%9E%E6%94%B6%E4%BB%B7800%E5%85%83%E4%B8%80%E5%90%A8%23) `736.3K 🔥` `NEW`
1. [日本男单全军覆没](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%B7%E5%8D%95%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1%23) `527.5K 🔥` `NEW`
1. [中美同意建立人工智能对话](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%90%8C%E6%84%8F%E5%BB%BA%E7%AB%8B%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%AF%B9%E8%AF%9D%23) `463.7K 🔥` `NEW`
1. [刘欢妻子发文我永远的爱永远的痛](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%A6%BB%E5%AD%90%E5%8F%91%E6%96%87%E6%88%91%E6%B0%B8%E8%BF%9C%E7%9A%84%E7%88%B1%E6%B0%B8%E8%BF%9C%E7%9A%84%E7%97%9B%23) `460.0K 🔥` `NEW`
1. [王楚钦孙颖莎vs林诗栋蒯曼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8Evs%E6%9E%97%E8%AF%97%E6%A0%8B%E8%92%AF%E6%9B%BC%23) `455.2K 🔥` `NEW`
1. [刘欢离世前太太曾联系甄嬛传编曲](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E7%A6%BB%E4%B8%96%E5%89%8D%E5%A4%AA%E5%A4%AA%E6%9B%BE%E8%81%94%E7%B3%BB%E7%94%84%E5%AC%9B%E4%BC%A0%E7%BC%96%E6%9B%B2%23) `432.8K 🔥` `NEW`
1. [迪丽热巴给内娱出图一点震撼](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BB%99%E5%86%85%E5%A8%B1%E5%87%BA%E5%9B%BE%E4%B8%80%E7%82%B9%E9%9C%87%E6%92%BC%23) `401.0K 🔥` `NEW`
1. [中美达成300亿美元对等降税安排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E8%BE%BE%E6%88%90300%E4%BA%BF%E7%BE%8E%E5%85%83%E5%AF%B9%E7%AD%89%E9%99%8D%E7%A8%8E%E5%AE%89%E6%8E%92%23) `372.0K 🔥` `NEW`
1. [孟可称刘欢离世前或已有预感](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%8F%AF%E7%A7%B0%E5%88%98%E6%AC%A2%E7%A6%BB%E4%B8%96%E5%89%8D%E6%88%96%E5%B7%B2%E6%9C%89%E9%A2%84%E6%84%9F%23) `371.8K 🔥` `NEW`
1. [王楚钦进四强](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%BF%9B%E5%9B%9B%E5%BC%BA%23) `371.4K 🔥` `NEW`
1. [崔雪莉这真的是人类能承受的文字吗](https://s.weibo.com/weibo?q=%23%E5%B4%94%E9%9B%AA%E8%8E%89%E8%BF%99%E7%9C%9F%E7%9A%84%E6%98%AF%E4%BA%BA%E7%B1%BB%E8%83%BD%E6%89%BF%E5%8F%97%E7%9A%84%E6%96%87%E5%AD%97%E5%90%97%23) `334.9K 🔥` `NEW`
1. [林诗栋 二单](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%20%E4%BA%8C%E5%8D%95%23) `333.2K 🔥` `NEW`
1. [林诗栋vs松岛辉空](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8Bvs%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `333.1K 🔥` `NEW`
1. [林诗栋4比2松岛辉空](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B4%E6%AF%942%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `332.8K 🔥` `NEW`
1. [韩红 刘欢先生一路走好](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%20%E5%88%98%E6%AC%A2%E5%85%88%E7%94%9F%E4%B8%80%E8%B7%AF%E8%B5%B0%E5%A5%BD%23) `332.7K 🔥` `NEW`
1. [张艺谋悼念刘欢](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E8%B0%8B%E6%82%BC%E5%BF%B5%E5%88%98%E6%AC%A2%23) `332.4K 🔥` `NEW`
1. [花少8这集聊生死看哭了](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E8%BF%99%E9%9B%86%E8%81%8A%E7%94%9F%E6%AD%BB%E7%9C%8B%E5%93%AD%E4%BA%86%23) `332.1K 🔥` `NEW`
1. [刘欢差点成了相声演员](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%B7%AE%E7%82%B9%E6%88%90%E4%BA%86%E7%9B%B8%E5%A3%B0%E6%BC%94%E5%91%98%23) `332.1K 🔥` `NEW`
1. [韩国高中生游中国后偏见全碎了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%AB%98%E4%B8%AD%E7%94%9F%E6%B8%B8%E4%B8%AD%E5%9B%BD%E5%90%8E%E5%81%8F%E8%A7%81%E5%85%A8%E7%A2%8E%E4%BA%86%23) `320.5K 🔥` `NEW`
1. [原来大家假期都是这样度过的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E5%81%87%E6%9C%9F%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E5%BA%A6%E8%BF%87%E7%9A%84%23) `315.1K 🔥` `NEW`
1. [刘欢 股骨头坏死](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%20%E8%82%A1%E9%AA%A8%E5%A4%B4%E5%9D%8F%E6%AD%BB%23) `306.6K 🔥` `NEW`
1. [原来拼豆是永夜星河带火的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%8B%BC%E8%B1%86%E6%98%AF%E6%B0%B8%E5%A4%9C%E6%98%9F%E6%B2%B3%E5%B8%A6%E7%81%AB%E7%9A%84%23) `296.0K 🔥` `NEW`
1. [井柏然可不是软柿子](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%8F%AF%E4%B8%8D%E6%98%AF%E8%BD%AF%E6%9F%BF%E5%AD%90%23) `279.5K 🔥` `NEW`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `270.7K 🔥` `NEW`
1. [亚运会乒乓球男单四强](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%B9%92%E4%B9%93%E7%90%83%E7%94%B7%E5%8D%95%E5%9B%9B%E5%BC%BA%23) `267.3K 🔥` `NEW`
1. [王濛带曾沛慈逛北京](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%B8%A6%E6%9B%BE%E6%B2%9B%E6%85%88%E9%80%9B%E5%8C%97%E4%BA%AC%23) `266.0K 🔥` `NEW`
1. [张本智和3比4阿拉米扬](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C3%E6%AF%944%E9%98%BF%E6%8B%89%E7%B1%B3%E6%89%AC%23) `228.7K 🔥` `NEW`
1. [水均益一开始不相信刘欢去世](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E5%9D%87%E7%9B%8A%E4%B8%80%E5%BC%80%E5%A7%8B%E4%B8%8D%E7%9B%B8%E4%BF%A1%E5%88%98%E6%AC%A2%E5%8E%BB%E4%B8%96%23) `215.6K 🔥` `NEW`
1. [一笑倾城热度](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%91%E5%80%BE%E5%9F%8E%E7%83%AD%E5%BA%A6%23) `213.2K 🔥` `NEW`
1. [张本智和vs阿拉米扬](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8Cvs%E9%98%BF%E6%8B%89%E7%B1%B3%E6%89%AC%23) `211.8K 🔥` `NEW`
1. [杨澜发文送别刘欢](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%BE%9C%E5%8F%91%E6%96%87%E9%80%81%E5%88%AB%E5%88%98%E6%AC%A2%23) `210.7K 🔥` `NEW`
1. [林心如黄景瑜同框](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%83%E5%A6%82%E9%BB%84%E6%99%AF%E7%91%9C%E5%90%8C%E6%A1%86%23) `205.8K 🔥` `NEW`
1. [高晓松笔下的刘欢](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%99%93%E6%9D%BE%E7%AC%94%E4%B8%8B%E7%9A%84%E5%88%98%E6%AC%A2%23) `194.4K 🔥` `NEW`
1. [亚运会乒乓球](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%B9%92%E4%B9%93%E7%90%83%23) `186.8K 🔥` `NEW`
1. [王曼昱半决赛再战张本美和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%8D%8A%E5%86%B3%E8%B5%9B%E5%86%8D%E6%88%98%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `177.9K 🔥` `NEW`
1. [孙颖莎累到不想说话](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%B4%AF%E5%88%B0%E4%B8%8D%E6%83%B3%E8%AF%B4%E8%AF%9D%23) `176.4K 🔥` `NEW`
1. [小米18Pro](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%23) `174.5K 🔥` `NEW`
1. [中美共同构建建设性战略稳定关系](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%B1%E5%90%8C%E6%9E%84%E5%BB%BA%E5%BB%BA%E8%AE%BE%E6%80%A7%E6%88%98%E7%95%A5%E7%A8%B3%E5%AE%9A%E5%85%B3%E7%B3%BB%23) `1.2M 🔥` `+49%`
1. [花红登山售后中心营业了](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E7%BA%A2%E7%99%BB%E5%B1%B1%E5%94%AE%E5%90%8E%E4%B8%AD%E5%BF%83%E8%90%A5%E4%B8%9A%E4%BA%86%23) `817.0K 🔥` `+107%`
1. [刘欢去世](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%8E%BB%E4%B8%96%23) `392.7K 🔥` `-49%`
1. [众歌手悼念刘欢](https://s.weibo.com/weibo?q=%23%E4%BC%97%E6%AD%8C%E6%89%8B%E6%82%BC%E5%BF%B5%E5%88%98%E6%AC%A2%23) `360.3K 🔥` `-51%`
1. [比尔盖茨发出严厉警告](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E5%8F%91%E5%87%BA%E4%B8%A5%E5%8E%89%E8%AD%A6%E5%91%8A%23) `335.3K 🔥` `-63%`
1. [王楚钦说没有精力了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E6%B2%A1%E6%9C%89%E7%B2%BE%E5%8A%9B%E4%BA%86%23) `331.9K 🔥` `-60%`
1. [缺血性股骨头坏死是什么病](https://s.weibo.com/weibo?q=%23%E7%BC%BA%E8%A1%80%E6%80%A7%E8%82%A1%E9%AA%A8%E5%A4%B4%E5%9D%8F%E6%AD%BB%E6%98%AF%E4%BB%80%E4%B9%88%E7%97%85%23) `281.8K 🔥` `-61%`
1. [姚贝娜父亲哽咽回应刘欢去世](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E8%B4%9D%E5%A8%9C%E7%88%B6%E4%BA%B2%E5%93%BD%E5%92%BD%E5%9B%9E%E5%BA%94%E5%88%98%E6%AC%A2%E5%8E%BB%E4%B8%96%23) `262.3K 🔥` `-52%`

Updated at 2026-09-26 18:59:16

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
