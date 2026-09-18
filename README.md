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

1. [男子高空作业绳子被2楼老人剪断](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%AB%98%E7%A9%BA%E4%BD%9C%E4%B8%9A%E7%BB%B3%E5%AD%90%E8%A2%AB2%E6%A5%BC%E8%80%81%E4%BA%BA%E5%89%AA%E6%96%AD%23) `1.3M 🔥` `NEW`
1. [黄牛吐槽iPhone18Pro没人收](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%89%9B%E5%90%90%E6%A7%BDiPhone18Pro%E6%B2%A1%E4%BA%BA%E6%94%B6%23) `894.9K 🔥` `NEW`
1. [九一八鸣警后老战士这番话令人动容](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E4%B8%80%E5%85%AB%E9%B8%A3%E8%AD%A6%E5%90%8E%E8%80%81%E6%88%98%E5%A3%AB%E8%BF%99%E7%95%AA%E8%AF%9D%E4%BB%A4%E4%BA%BA%E5%8A%A8%E5%AE%B9%23) `677.7K 🔥` `NEW`
1. [怎么看出一个人主体性很强](https://s.weibo.com/weibo?q=%23%E6%80%8E%E4%B9%88%E7%9C%8B%E5%87%BA%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%B8%BB%E4%BD%93%E6%80%A7%E5%BE%88%E5%BC%BA%23) `541.4K 🔥` `NEW`
1. [二手房业主开始不想降价了](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%89%8B%E6%88%BF%E4%B8%9A%E4%B8%BB%E5%BC%80%E5%A7%8B%E4%B8%8D%E6%83%B3%E9%99%8D%E4%BB%B7%E4%BA%86%23) `426.1K 🔥` `NEW`
1. [花少8 无聊](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%20%E6%97%A0%E8%81%8A%23) `347.6K 🔥` `NEW`
1. [铭记历史真相捍卫英雄荣光](https://s.weibo.com/weibo?q=%23%E9%93%AD%E8%AE%B0%E5%8E%86%E5%8F%B2%E7%9C%9F%E7%9B%B8%E6%8D%8D%E5%8D%AB%E8%8B%B1%E9%9B%84%E8%8D%A3%E5%85%89%23) `346.7K 🔥` `NEW`
1. [母虎带4只虎崽上路林业局已介入](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E8%99%8E%E5%B8%A64%E5%8F%AA%E8%99%8E%E5%B4%BD%E4%B8%8A%E8%B7%AF%E6%9E%97%E4%B8%9A%E5%B1%80%E5%B7%B2%E4%BB%8B%E5%85%A5%23) `343.8K 🔥` `NEW`
1. [18ProMax大容量遇冷](https://s.weibo.com/weibo?q=%2318ProMax%E5%A4%A7%E5%AE%B9%E9%87%8F%E9%81%87%E5%86%B7%23) `241.7K 🔥` `NEW`
1. [沈鼓集团暴涨原因](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%BC%93%E9%9B%86%E5%9B%A2%E6%9A%B4%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `238.2K 🔥` `NEW`
1. [iPhone18Pro首批用户吐槽](https://s.weibo.com/weibo?q=%23iPhone18Pro%E9%A6%96%E6%89%B9%E7%94%A8%E6%88%B7%E5%90%90%E6%A7%BD%23) `220.8K 🔥` `NEW`
1. [姚安娜的ip](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E5%AE%89%E5%A8%9C%E7%9A%84ip%23) `215.6K 🔥` `NEW`
1. [人民网评罗永浩说野人先生难吃](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E7%BD%91%E8%AF%84%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%AF%B4%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E9%9A%BE%E5%90%83%23) `213.1K 🔥` `NEW`
1. [曝蔡卓妍疑似怀孕](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%94%A1%E5%8D%93%E5%A6%8D%E7%96%91%E4%BC%BC%E6%80%80%E5%AD%95%23) `201.8K 🔥` `NEW`
1. [完全理解当年大S为黄晓明怼记者](https://s.weibo.com/weibo?q=%23%E5%AE%8C%E5%85%A8%E7%90%86%E8%A7%A3%E5%BD%93%E5%B9%B4%E5%A4%A7S%E4%B8%BA%E9%BB%84%E6%99%93%E6%98%8E%E6%80%BC%E8%AE%B0%E8%80%85%23) `196.0K 🔥` `NEW`
1. [公积金将支持养房](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E5%B0%86%E6%94%AF%E6%8C%81%E5%85%BB%E6%88%BF%23) `191.4K 🔥` `NEW`
1. [泰国网民吐槽日本亚运会](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E7%BD%91%E6%B0%91%E5%90%90%E6%A7%BD%E6%97%A5%E6%9C%AC%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `182.3K 🔥` `NEW`
1. [所有女孩都来听孙千这段话](https://s.weibo.com/weibo?q=%23%E6%89%80%E6%9C%89%E5%A5%B3%E5%AD%A9%E9%83%BD%E6%9D%A5%E5%90%AC%E5%AD%99%E5%8D%83%E8%BF%99%E6%AE%B5%E8%AF%9D%23) `174.8K 🔥` `NEW`
1. [粉笔致歉信](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E8%87%B4%E6%AD%89%E4%BF%A1%23) `156.8K 🔥` `NEW`
1. [张月李泽锋疑似进组三十五而已](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E6%9D%8E%E6%B3%BD%E9%94%8B%E7%96%91%E4%BC%BC%E8%BF%9B%E7%BB%84%E4%B8%89%E5%8D%81%E4%BA%94%E8%80%8C%E5%B7%B2%23) `156.8K 🔥` `NEW`
1. [100岁老人每天睡18小时顿顿吃肉](https://s.weibo.com/weibo?q=%23100%E5%B2%81%E8%80%81%E4%BA%BA%E6%AF%8F%E5%A4%A9%E7%9D%A118%E5%B0%8F%E6%97%B6%E9%A1%BF%E9%A1%BF%E5%90%83%E8%82%89%23) `156.6K 🔥` `NEW`
1. [亚运会伙食遭吐槽](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%BC%99%E9%A3%9F%E9%81%AD%E5%90%90%E6%A7%BD%23) `156.5K 🔥` `NEW`
1. [大S给足了每个人体面](https://s.weibo.com/weibo?q=%23%E5%A4%A7S%E7%BB%99%E8%B6%B3%E4%BA%86%E6%AF%8F%E4%B8%AA%E4%BA%BA%E4%BD%93%E9%9D%A2%23) `156.3K 🔥` `NEW`
1. [电车 价格](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%BD%A6%20%E4%BB%B7%E6%A0%BC%23) `156.3K 🔥` `NEW`
1. [何瑞贤的化妆技术比钟楚曦还厉害啊](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%91%9E%E8%B4%A4%E7%9A%84%E5%8C%96%E5%A6%86%E6%8A%80%E6%9C%AF%E6%AF%94%E9%92%9F%E6%A5%9A%E6%9B%A6%E8%BF%98%E5%8E%89%E5%AE%B3%E5%95%8A%23) `153.8K 🔥` `NEW`
1. [韩国男篮vs伊朗男篮](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E4%BC%8A%E6%9C%97%E7%94%B7%E7%AF%AE%23) `137.9K 🔥` `NEW`
1. [听说隔壁班新生有6块奥运金牌](https://s.weibo.com/weibo?q=%23%E5%90%AC%E8%AF%B4%E9%9A%94%E5%A3%81%E7%8F%AD%E6%96%B0%E7%94%9F%E6%9C%896%E5%9D%97%E5%A5%A5%E8%BF%90%E9%87%91%E7%89%8C%23) `137.8K 🔥` `NEW`
1. [iPhone18Pro首摔](https://s.weibo.com/weibo?q=%23iPhone18Pro%E9%A6%96%E6%91%94%23) `136.5K 🔥` `NEW`
1. [WE对战JDG](https://s.weibo.com/weibo?q=%23WE%E5%AF%B9%E6%88%98JDG%23) `136.0K 🔥` `NEW`
1. [兰香如故能否成为下一个知否](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%83%BD%E5%90%A6%E6%88%90%E4%B8%BA%E4%B8%8B%E4%B8%80%E4%B8%AA%E7%9F%A5%E5%90%A6%23) `135.0K 🔥` `NEW`
1. [解说记得迟到](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E8%AF%B4%E8%AE%B0%E5%BE%97%E8%BF%9F%E5%88%B0%23) `134.5K 🔥` `NEW`
1. [超哥回应粉笔](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%93%A5%E5%9B%9E%E5%BA%94%E7%B2%89%E7%AC%94%23) `133.1K 🔥` `NEW`
1. [池昌旭林珍娜吻戏](https://s.weibo.com/weibo?q=%23%E6%B1%A0%E6%98%8C%E6%97%AD%E6%9E%97%E7%8F%8D%E5%A8%9C%E5%90%BB%E6%88%8F%23) `132.4K 🔥` `NEW`
1. [黄婷婷真的上再见朋友了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A9%B7%E5%A9%B7%E7%9C%9F%E7%9A%84%E4%B8%8A%E5%86%8D%E8%A7%81%E6%9C%8B%E5%8F%8B%E4%BA%86%23) `131.3K 🔥` `NEW`
1. [现在终于知道为什么叫12306了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%AB12306%E4%BA%86%23) `131.0K 🔥` `NEW`
1. [华为阔直板激活销量](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%98%94%E7%9B%B4%E6%9D%BF%E6%BF%80%E6%B4%BB%E9%94%80%E9%87%8F%23) `130.4K 🔥` `NEW`
1. [亚运会场馆伙食](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%9C%BA%E9%A6%86%E4%BC%99%E9%A3%9F%23) `129.9K 🔥` `NEW`
1. [顾客买manner超大杯发现套了个小杯](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%AE%A2%E4%B9%B0manner%E8%B6%85%E5%A4%A7%E6%9D%AF%E5%8F%91%E7%8E%B0%E5%A5%97%E4%BA%86%E4%B8%AA%E5%B0%8F%E6%9D%AF%23) `129.8K 🔥` `NEW`
1. [iPhone全面屏](https://s.weibo.com/weibo?q=%23iPhone%E5%85%A8%E9%9D%A2%E5%B1%8F%23) `129.7K 🔥` `NEW`
1. [公积金提取情形增至9种](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%8F%90%E5%8F%96%E6%83%85%E5%BD%A2%E5%A2%9E%E8%87%B39%E7%A7%8D%23) `129.3K 🔥` `NEW`
1. [和对的人结婚是怎样一种体验](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%AF%B9%E7%9A%84%E4%BA%BA%E7%BB%93%E5%A9%9A%E6%98%AF%E6%80%8E%E6%A0%B7%E4%B8%80%E7%A7%8D%E4%BD%93%E9%AA%8C%23) `125.7K 🔥` `NEW`
1. [张本智和称战胜王楚钦就能拿金牌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E7%A7%B0%E6%88%98%E8%83%9C%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%B0%B1%E8%83%BD%E6%8B%BF%E9%87%91%E7%89%8C%23) `120.2K 🔥` `NEW`
1. [嘻哈离婚了还存着前夫照片](https://s.weibo.com/weibo?q=%23%E5%98%BB%E5%93%88%E7%A6%BB%E5%A9%9A%E4%BA%86%E8%BF%98%E5%AD%98%E7%9D%80%E5%89%8D%E5%A4%AB%E7%85%A7%E7%89%87%23) `119.0K 🔥` `NEW`
1. [网传嫁金钗尚公主对打](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%AB%81%E9%87%91%E9%92%97%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%AF%B9%E6%89%93%23) `117.3K 🔥` `NEW`
1. [俄乌新一轮遗体交换252换23](https://s.weibo.com/weibo?q=%23%E4%BF%84%E4%B9%8C%E6%96%B0%E4%B8%80%E8%BD%AE%E9%81%97%E4%BD%93%E4%BA%A4%E6%8D%A2252%E6%8D%A223%23) `116.6K 🔥` `NEW`
1. [佟丽娅回应在董璇婚礼表情严肃](https://s.weibo.com/weibo?q=%23%E4%BD%9F%E4%B8%BD%E5%A8%85%E5%9B%9E%E5%BA%94%E5%9C%A8%E8%91%A3%E7%92%87%E5%A9%9A%E7%A4%BC%E8%A1%A8%E6%83%85%E4%B8%A5%E8%82%83%23) `110.6K 🔥` `NEW`
1. [刘雯被问在巴黎做过最浪漫的事情](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E8%A2%AB%E9%97%AE%E5%9C%A8%E5%B7%B4%E9%BB%8E%E5%81%9A%E8%BF%87%E6%9C%80%E6%B5%AA%E6%BC%AB%E7%9A%84%E4%BA%8B%E6%83%85%23) `107.9K 🔥` `NEW`
1. [GEO终于有标准了](https://s.weibo.com/weibo?q=%23GEO%E7%BB%88%E4%BA%8E%E6%9C%89%E6%A0%87%E5%87%86%E4%BA%86%23) `580.9K 🔥` `-26%`
1. [梅毒被称为皮肤性病科模仿大师](https://s.weibo.com/weibo?q=%23%E6%A2%85%E6%AF%92%E8%A2%AB%E7%A7%B0%E4%B8%BA%E7%9A%AE%E8%82%A4%E6%80%A7%E7%97%85%E7%A7%91%E6%A8%A1%E4%BB%BF%E5%A4%A7%E5%B8%88%23) `187.8K 🔥` `-72%`
1. [诬告小孩者被滴滴司机反告](https://s.weibo.com/weibo?q=%23%E8%AF%AC%E5%91%8A%E5%B0%8F%E5%AD%A9%E8%80%85%E8%A2%AB%E6%BB%B4%E6%BB%B4%E5%8F%B8%E6%9C%BA%E5%8F%8D%E5%91%8A%23) `161.8K 🔥` `-58%`
1. [曝何瑞贤有孩子了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BD%95%E7%91%9E%E8%B4%A4%E6%9C%89%E5%AD%A9%E5%AD%90%E4%BA%86%23) `156.7K 🔥` `-45%`
1. [冯绍峰脸怎么了](https://s.weibo.com/weibo?q=%23%E5%86%AF%E7%BB%8D%E5%B3%B0%E8%84%B8%E6%80%8E%E4%B9%88%E4%BA%86%23) `148.8K 🔥` `-61%`

Updated at 2026-09-18 18:04:17

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
