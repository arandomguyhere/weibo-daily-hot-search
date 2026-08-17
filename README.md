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

1. [郭敬明发百妖谱原始帧 (Guo Jingming released the original frame of the Hundred Demons Spectrum)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E5%8F%91%E7%99%BE%E5%A6%96%E8%B0%B1%E5%8E%9F%E5%A7%8B%E5%B8%A7%23) `608.8K 🔥` `NEW`
1. [杭州涉事招商蛇口高管已被免职](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%B6%89%E4%BA%8B%E6%8B%9B%E5%95%86%E8%9B%87%E5%8F%A3%E9%AB%98%E7%AE%A1%E5%B7%B2%E8%A2%AB%E5%85%8D%E8%81%8C%23) `430.2K 🔥` `NEW`
1. [茜拉自曝将移居中国](https://s.weibo.com/weibo?q=%23%E8%8C%9C%E6%8B%89%E8%87%AA%E6%9B%9D%E5%B0%86%E7%A7%BB%E5%B1%85%E4%B8%AD%E5%9B%BD%23) `392.6K 🔥` `NEW`
1. [曹骏 蓝盈莹](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%20%E8%93%9D%E7%9B%88%E8%8E%B9%23) `290.0K 🔥` `NEW`
1. [石宇奇一轮游](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E5%AE%87%E5%A5%87%E4%B8%80%E8%BD%AE%E6%B8%B8%23) `230.8K 🔥` `NEW`
1. [金允植直播](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%85%81%E6%A4%8D%E7%9B%B4%E6%92%AD%23) `222.5K 🔥` `NEW`
1. [孩子高考失利家长打12345希望重考](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E9%AB%98%E8%80%83%E5%A4%B1%E5%88%A9%E5%AE%B6%E9%95%BF%E6%89%9312345%E5%B8%8C%E6%9C%9B%E9%87%8D%E8%80%83%23) `208.2K 🔥` `NEW`
1. [顶替案弟弟首次听闻自己是双胞胎](https://s.weibo.com/weibo?q=%23%E9%A1%B6%E6%9B%BF%E6%A1%88%E5%BC%9F%E5%BC%9F%E9%A6%96%E6%AC%A1%E5%90%AC%E9%97%BB%E8%87%AA%E5%B7%B1%E6%98%AF%E5%8F%8C%E8%83%9E%E8%83%8E%23) `207.7K 🔥` `NEW`
1. [赵今麦墨镜吊带ccd](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E5%A2%A8%E9%95%9C%E5%90%8A%E5%B8%A6ccd%23) `192.2K 🔥` `NEW`
1. [段奕宏叫王宝强宝宝](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E5%A5%95%E5%AE%8F%E5%8F%AB%E7%8E%8B%E5%AE%9D%E5%BC%BA%E5%AE%9D%E5%AE%9D%23) `184.8K 🔥` `NEW`
1. [德国男子家中厕所过于豪华被强拆 (A German man's toilet was demolished because it was too luxurious)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E7%94%B7%E5%AD%90%E5%AE%B6%E4%B8%AD%E5%8E%95%E6%89%80%E8%BF%87%E4%BA%8E%E8%B1%AA%E5%8D%8E%E8%A2%AB%E5%BC%BA%E6%8B%86%23) `129.2K 🔥` `NEW`
1. [公积金用途又变多了](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E7%94%A8%E9%80%94%E5%8F%88%E5%8F%98%E5%A4%9A%E4%BA%86%23) `462.2K 🔥` `+229%`
1. [中国男篮不敌新西兰](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E4%B8%8D%E6%95%8C%E6%96%B0%E8%A5%BF%E5%85%B0%23) `428.7K 🔥` `+203%`
1. [越不操心的人越是人生赢家](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E4%B8%8D%E6%93%8D%E5%BF%83%E7%9A%84%E4%BA%BA%E8%B6%8A%E6%98%AF%E4%BA%BA%E7%94%9F%E8%B5%A2%E5%AE%B6%23) `304.1K 🔥` `+27%`
1. [大批AI博主停更了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%89%B9AI%E5%8D%9A%E4%B8%BB%E5%81%9C%E6%9B%B4%E4%BA%86%23) `1.7M 🔥`
1. [榴莲价格彻底崩了 (Durian prices have completely collapsed)](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%B7%E6%A0%BC%E5%BD%BB%E5%BA%95%E5%B4%A9%E4%BA%86%23) `1.1M 🔥`
1. [未来5年我国能源蓝图划重点](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A55%E5%B9%B4%E6%88%91%E5%9B%BD%E8%83%BD%E6%BA%90%E8%93%9D%E5%9B%BE%E5%88%92%E9%87%8D%E7%82%B9%23) `971.0K 🔥`
1. [泡面不健康不是因为防腐剂](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E9%9D%A2%E4%B8%8D%E5%81%A5%E5%BA%B7%E4%B8%8D%E6%98%AF%E5%9B%A0%E4%B8%BA%E9%98%B2%E8%85%90%E5%89%82%23) `488.9K 🔥`
1. [陈奕恒腹肌](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E8%85%B9%E8%82%8C%23) `424.0K 🔥`
1. [彭宇案 彭宇确实碰了老人](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%AE%87%E6%A1%88%20%E5%BD%AD%E5%AE%87%E7%A1%AE%E5%AE%9E%E7%A2%B0%E4%BA%86%E8%80%81%E4%BA%BA%23) `408.6K 🔥`
1. [女孩顺风车内暴晒2小时向家人求救 (Girl was exposed to the sun for 2 hours in a hitchhiking car and asked for help from her family)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%A1%BA%E9%A3%8E%E8%BD%A6%E5%86%85%E6%9A%B4%E6%99%922%E5%B0%8F%E6%97%B6%E5%90%91%E5%AE%B6%E4%BA%BA%E6%B1%82%E6%95%91%23) `395.9K 🔥`
1. [什么样的家庭可以买40万的车](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%E5%AE%B6%E5%BA%AD%E5%8F%AF%E4%BB%A5%E4%B9%B040%E4%B8%87%E7%9A%84%E8%BD%A6%23) `379.8K 🔥`
1. [大冰瘦了30斤 (Da Bing lost 30 pounds)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E7%98%A6%E4%BA%8630%E6%96%A4%23) `371.5K 🔥`
1. [BLACKPINK发文道歉](https://s.weibo.com/weibo?q=%23BLACKPINK%E5%8F%91%E6%96%87%E9%81%93%E6%AD%89%23) `360.1K 🔥`
1. [建议大家开车一定要专心](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%BC%80%E8%BD%A6%E4%B8%80%E5%AE%9A%E8%A6%81%E4%B8%93%E5%BF%83%23) `348.2K 🔥`
1. [蓝盈莹承认恋情](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `317.1K 🔥`
1. [Jennie不得不用头发遮挡 (Jennie had to cover it up with her hair)](https://s.weibo.com/weibo?q=%23Jennie%E4%B8%8D%E5%BE%97%E4%B8%8D%E7%94%A8%E5%A4%B4%E5%8F%91%E9%81%AE%E6%8C%A1%23) `314.7K 🔥`
1. [结婚后才明白的事](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E5%90%8E%E6%89%8D%E6%98%8E%E7%99%BD%E7%9A%84%E4%BA%8B%23) `309.9K 🔥`
1. [iPhone17国内销量曝光](https://s.weibo.com/weibo?q=%23iPhone17%E5%9B%BD%E5%86%85%E9%94%80%E9%87%8F%E6%9B%9D%E5%85%89%23) `261.3K 🔥`
1. [王橹杰收官碧海](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%94%B6%E5%AE%98%E7%A2%A7%E6%B5%B7%23) `255.2K 🔥`
1. [今天市场暴涨原因](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E5%B8%82%E5%9C%BA%E6%9A%B4%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `241.6K 🔥`
1. [迪丽热巴大学时期的照片](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A4%A7%E5%AD%A6%E6%97%B6%E6%9C%9F%E7%9A%84%E7%85%A7%E7%89%87%23) `226.9K 🔥`
1. [怎么发现一个人不是好人 (How do you find out that someone is not a good person?)](https://s.weibo.com/weibo?q=%23%E6%80%8E%E4%B9%88%E5%8F%91%E7%8E%B0%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%B8%8D%E6%98%AF%E5%A5%BD%E4%BA%BA%23) `221.0K 🔥`
1. [原来排卵期一直被误解了 (It turns out that the ovulation period has been misunderstood.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%8E%92%E5%8D%B5%E6%9C%9F%E4%B8%80%E7%9B%B4%E8%A2%AB%E8%AF%AF%E8%A7%A3%E4%BA%86%23) `216.3K 🔥`
1. [孙颖莎王曼昱仅差708分 (Sun Yingsha and Wang Manyu are only 708 points apart)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%9B%BC%E6%98%B1%E4%BB%85%E5%B7%AE708%E5%88%86%23) `182.9K 🔥`
1. [郝熠然 后台](https://s.weibo.com/weibo?q=%23%E9%83%9D%E7%86%A0%E7%84%B6%20%E5%90%8E%E5%8F%B0%23) `182.1K 🔥`
1. [汪苏泷回复双高胎 (Wang Sulong replied to double high tires)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%9B%9E%E5%A4%8D%E5%8F%8C%E9%AB%98%E8%83%8E%23) `166.2K 🔥`
1. [韩国演员谈刘春和表演难度](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%BC%94%E5%91%98%E8%B0%88%E5%88%98%E6%98%A5%E5%92%8C%E8%A1%A8%E6%BC%94%E9%9A%BE%E5%BA%A6%23) `162.2K 🔥`
1. [汤家凤丑学学院说出多少人憋屈](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E5%AE%B6%E5%87%A4%E4%B8%91%E5%AD%A6%E5%AD%A6%E9%99%A2%E8%AF%B4%E5%87%BA%E5%A4%9A%E5%B0%91%E4%BA%BA%E6%86%8B%E5%B1%88%23) `142.4K 🔥`
1. [陈妍希机场偶遇陈妍希](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%9C%BA%E5%9C%BA%E5%81%B6%E9%81%87%E9%99%88%E5%A6%8D%E5%B8%8C%23) `141.8K 🔥`
1. [只有中国人才能识别的加密暗号](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%89%8D%E8%83%BD%E8%AF%86%E5%88%AB%E7%9A%84%E5%8A%A0%E5%AF%86%E6%9A%97%E5%8F%B7%23) `847.2K 🔥` `-26%`
1. [学籍顶替案哥哥称弟弟学籍也要撤销 (In the student status replacement case, the elder brother said that his younger brother’s student status also needs to be revoked)](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%B1%8D%E9%A1%B6%E6%9B%BF%E6%A1%88%E5%93%A5%E5%93%A5%E7%A7%B0%E5%BC%9F%E5%BC%9F%E5%AD%A6%E7%B1%8D%E4%B9%9F%E8%A6%81%E6%92%A4%E9%94%80%23) `347.2K 🔥` `-23%`
1. [大牛股15天10板](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%89%9B%E8%82%A115%E5%A4%A910%E6%9D%BF%23) `321.3K 🔥` `-27%`
1. [王菲基因发力了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%9F%BA%E5%9B%A0%E5%8F%91%E5%8A%9B%E4%BA%86%23) `308.8K 🔥` `-22%`
1. [王奕告别丝芭传媒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A5%95%E5%91%8A%E5%88%AB%E4%B8%9D%E8%8A%AD%E4%BC%A0%E5%AA%92%23) `168.7K 🔥` `-32%`
1. [南派三叔直播被封](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%B4%BE%E4%B8%89%E5%8F%94%E7%9B%B4%E6%92%AD%E8%A2%AB%E5%B0%81%23) `167.8K 🔥` `-59%`
1. [中国男篮VS新西兰](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEVS%E6%96%B0%E8%A5%BF%E5%85%B0%23) `166.6K 🔥` `-50%`
1. [张奕然聂玮辰 如果可以 (Zhang Yiran, Nie Weichen, if possible)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A5%95%E7%84%B6%E8%81%82%E7%8E%AE%E8%BE%B0%20%E5%A6%82%E6%9E%9C%E5%8F%AF%E4%BB%A5%23) `129.7K 🔥` `-73%`
1. [八一七稻米节 直播违规](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%B8%80%E4%B8%83%E7%A8%BB%E7%B1%B3%E8%8A%82%20%E7%9B%B4%E6%92%AD%E8%BF%9D%E8%A7%84%23) `129.5K 🔥` `-40%`

Updated at 2026-08-17 22:13:15

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
