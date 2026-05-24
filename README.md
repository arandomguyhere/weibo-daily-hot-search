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

1. [宝莲 麦好干 (Pauline Maihaogan)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E8%8E%B2%20%E9%BA%A6%E5%A5%BD%E5%B9%B2%23) `1.3M 🔥` `NEW`
1. [神23发射成功](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E5%8F%91%E5%B0%84%E6%88%90%E5%8A%9F%23) `930.7K 🔥` `NEW`
1. [直播神23发射](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E7%A5%9E23%E5%8F%91%E5%B0%84%23) `927.7K 🔥` `NEW`
1. [王鹤棣风波后首度公开亮相](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E9%A3%8E%E6%B3%A2%E5%90%8E%E9%A6%96%E5%BA%A6%E5%85%AC%E5%BC%80%E4%BA%AE%E7%9B%B8%23) `923.0K 🔥` `NEW`
1. [浪姐排名](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `921.3K 🔥` `NEW`
1. [武汉停课停业](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%81%9C%E8%AF%BE%E5%81%9C%E4%B8%9A%23) `915.4K 🔥` `NEW`
1. [官方辟谣高校招百余名印度留学生](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E9%AB%98%E6%A0%A1%E6%8B%9B%E7%99%BE%E4%BD%99%E5%90%8D%E5%8D%B0%E5%BA%A6%E7%95%99%E5%AD%A6%E7%94%9F%23) `913.3K 🔥` `NEW`
1. [LGD以下克上WBG](https://s.weibo.com/weibo?q=%23LGD%E4%BB%A5%E4%B8%8B%E5%85%8B%E4%B8%8AWBG%23) `912.0K 🔥` `NEW`
1. [男子钓鱼捞起一溺水婴儿](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%92%93%E9%B1%BC%E6%8D%9E%E8%B5%B7%E4%B8%80%E6%BA%BA%E6%B0%B4%E5%A9%B4%E5%84%BF%23) `907.2K 🔥` `NEW`
1. [官方通报小区马匹受惊致女童死亡](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%B0%8F%E5%8C%BA%E9%A9%AC%E5%8C%B9%E5%8F%97%E6%83%8A%E8%87%B4%E5%A5%B3%E7%AB%A5%E6%AD%BB%E4%BA%A1%23) `902.7K 🔥` `NEW`
1. [LPL登峰组变天了 (The LPL summit group has changed.)](https://s.weibo.com/weibo?q=%23LPL%E7%99%BB%E5%B3%B0%E7%BB%84%E5%8F%98%E5%A4%A9%E4%BA%86%23) `896.6K 🔥` `NEW`
1. [王鹤棣直播人气](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%9B%B4%E6%92%AD%E4%BA%BA%E6%B0%94%23) `894.5K 🔥` `NEW`
1. [王濛 我们就一个群](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E6%88%91%E4%BB%AC%E5%B0%B1%E4%B8%80%E4%B8%AA%E7%BE%A4%23) `886.6K 🔥` `NEW`
1. [死了么APP又改名了](https://s.weibo.com/weibo?q=%23%E6%AD%BB%E4%BA%86%E4%B9%88APP%E5%8F%88%E6%94%B9%E5%90%8D%E4%BA%86%23) `882.8K 🔥` `NEW`
1. [苗苗也不舒服了](https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E4%B9%9F%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `879.0K 🔥` `NEW`
1. [侯宇淘汰](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%AE%87%E6%B7%98%E6%B1%B0%23) `875.1K 🔥` `NEW`
1. [7只半导体热门股拟套现近127亿](https://s.weibo.com/weibo?q=%237%E5%8F%AA%E5%8D%8A%E5%AF%BC%E4%BD%93%E7%83%AD%E9%97%A8%E8%82%A1%E6%8B%9F%E5%A5%97%E7%8E%B0%E8%BF%91127%E4%BA%BF%23) `868.7K 🔥` `NEW`
1. [洛克主策划开水的一封信](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E4%B8%BB%E7%AD%96%E5%88%92%E5%BC%80%E6%B0%B4%E7%9A%84%E4%B8%80%E5%B0%81%E4%BF%A1%23) `866.5K 🔥` `NEW`
1. [汪峰晒与四个孩子合照](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%E6%99%92%E4%B8%8E%E5%9B%9B%E4%B8%AA%E5%AD%A9%E5%AD%90%E5%90%88%E7%85%A7%23) `859.4K 🔥` `NEW`
1. [台4月大女婴伴尸2天险被饿死](https://s.weibo.com/weibo?q=%23%E5%8F%B04%E6%9C%88%E5%A4%A7%E5%A5%B3%E5%A9%B4%E4%BC%B4%E5%B0%B82%E5%A4%A9%E9%99%A9%E8%A2%AB%E9%A5%BF%E6%AD%BB%23) `855.8K 🔥` `NEW`
1. [折磨三天最后还是淘汰侯宇 (After three days of torture, Hou Yu was finally eliminated.)](https://s.weibo.com/weibo?q=%23%E6%8A%98%E7%A3%A8%E4%B8%89%E5%A4%A9%E6%9C%80%E5%90%8E%E8%BF%98%E6%98%AF%E6%B7%98%E6%B1%B0%E4%BE%AF%E5%AE%87%23) `854.0K 🔥` `NEW`
1. [温峥嵘 可不可以我走](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%20%E5%8F%AF%E4%B8%8D%E5%8F%AF%E4%BB%A5%E6%88%91%E8%B5%B0%23) `847.2K 🔥` `NEW`
1. [谢娜主持能力](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E4%B8%BB%E6%8C%81%E8%83%BD%E5%8A%9B%23) `841.5K 🔥` `NEW`
1. [巴西男子强奸女儿及其所生外孙女](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E7%94%B7%E5%AD%90%E5%BC%BA%E5%A5%B8%E5%A5%B3%E5%84%BF%E5%8F%8A%E5%85%B6%E6%89%80%E7%94%9F%E5%A4%96%E5%AD%99%E5%A5%B3%23) `836.8K 🔥` `NEW`
1. [救救何宣林](https://s.weibo.com/weibo?q=%23%E6%95%91%E6%95%91%E4%BD%95%E5%AE%A3%E6%9E%97%23) `832.5K 🔥` `NEW`
1. [神23点火升空](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E7%82%B9%E7%81%AB%E5%8D%87%E7%A9%BA%23) `831.4K 🔥` `NEW`
1. [李连杰回应换年轻武僧心脏](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%BF%9E%E6%9D%B0%E5%9B%9E%E5%BA%94%E6%8D%A2%E5%B9%B4%E8%BD%BB%E6%AD%A6%E5%83%A7%E5%BF%83%E8%84%8F%23) `822.8K 🔥` `NEW`
1. [迪丽热巴在我边上做头发](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%9C%A8%E6%88%91%E8%BE%B9%E4%B8%8A%E5%81%9A%E5%A4%B4%E5%8F%91%23) `818.5K 🔥` `NEW`
1. [缘分一道桥拿什么输](https://s.weibo.com/weibo?q=%23%E7%BC%98%E5%88%86%E4%B8%80%E9%81%93%E6%A1%A5%E6%8B%BF%E4%BB%80%E4%B9%88%E8%BE%93%23) `814.8K 🔥` `NEW`
1. [刘晓艳回应叮嘱高颜值女生视频走红](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E8%89%B3%E5%9B%9E%E5%BA%94%E5%8F%AE%E5%98%B1%E9%AB%98%E9%A2%9C%E5%80%BC%E5%A5%B3%E7%94%9F%E8%A7%86%E9%A2%91%E8%B5%B0%E7%BA%A2%23) `813.2K 🔥` `NEW`
1. [68岁男子出轨90后生子称妻子同意 (68-year-old man cheated on a 90-year-old boy and said his wife agreed)](https://s.weibo.com/weibo?q=%2368%E5%B2%81%E7%94%B7%E5%AD%90%E5%87%BA%E8%BD%A890%E5%90%8E%E7%94%9F%E5%AD%90%E7%A7%B0%E5%A6%BB%E5%AD%90%E5%90%8C%E6%84%8F%23) `805.5K 🔥` `NEW`
1. [王霏霏孟佳这段好强](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%9C%8F%E9%9C%8F%E5%AD%9F%E4%BD%B3%E8%BF%99%E6%AE%B5%E5%A5%BD%E5%BC%BA%23) `804.2K 🔥` `NEW`
1. [小澈复出了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%BE%88%E5%A4%8D%E5%87%BA%E4%BA%86%23) `795.6K 🔥` `NEW`
1. [高考第一个出来的记得喊取消机建燃油费](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%87%BA%E6%9D%A5%E7%9A%84%E8%AE%B0%E5%BE%97%E5%96%8A%E5%8F%96%E6%B6%88%E6%9C%BA%E5%BB%BA%E7%87%83%E6%B2%B9%E8%B4%B9%23) `792.7K 🔥` `NEW`
1. [内娱最有名的七字真言](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%9C%80%E6%9C%89%E5%90%8D%E7%9A%84%E4%B8%83%E5%AD%97%E7%9C%9F%E8%A8%80%23) `790.5K 🔥` `NEW`
1. [王橹杰高会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%AB%98%E4%BC%9A%23) `783.2K 🔥` `NEW`
1. [煤矿19点半爆炸工人22点才被通知](https://s.weibo.com/weibo?q=%23%E7%85%A4%E7%9F%BF19%E7%82%B9%E5%8D%8A%E7%88%86%E7%82%B8%E5%B7%A5%E4%BA%BA22%E7%82%B9%E6%89%8D%E8%A2%AB%E9%80%9A%E7%9F%A5%23) `778.6K 🔥` `NEW`
1. [李小冉翻跟头](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%BF%BB%E8%B7%9F%E5%A4%B4%23) `777.0K 🔥` `NEW`
1. [浪姐改赛制](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%94%B9%E8%B5%9B%E5%88%B6%23) `771.2K 🔥` `NEW`
1. [洛克王国再次补偿](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%E5%86%8D%E6%AC%A1%E8%A1%A5%E5%81%BF%23) `766.0K 🔥` `NEW`
1. [白玉兰 (white magnolia)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `760.0K 🔥` `NEW`
1. [李宇春雅迪摩登之夜压轴](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E9%9B%85%E8%BF%AA%E6%91%A9%E7%99%BB%E4%B9%8B%E5%A4%9C%E5%8E%8B%E8%BD%B4%23) `756.0K 🔥` `NEW`
1. [中国空间站组合体已进入对接轨道](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A9%BA%E9%97%B4%E7%AB%99%E7%BB%84%E5%90%88%E4%BD%93%E5%B7%B2%E8%BF%9B%E5%85%A5%E5%AF%B9%E6%8E%A5%E8%BD%A8%E9%81%93%23) `751.6K 🔥` `NEW`
1. [李斯丹妮忘词](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%AF%E4%B8%B9%E5%A6%AE%E5%BF%98%E8%AF%8D%23) `749.0K 🔥` `NEW`
1. [宝莲组dancebreak神了](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E8%8E%B2%E7%BB%84dancebreak%E7%A5%9E%E4%BA%86%23) `742.5K 🔥` `NEW`
1. [央视曝光多品牌用商标擦边](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E5%A4%9A%E5%93%81%E7%89%8C%E7%94%A8%E5%95%86%E6%A0%87%E6%93%A6%E8%BE%B9%23) `741.5K 🔥` `NEW`
1. [香港观众来送Madam黎出征太空](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E8%A7%82%E4%BC%97%E6%9D%A5%E9%80%81Madam%E9%BB%8E%E5%87%BA%E5%BE%81%E5%A4%AA%E7%A9%BA%23) `733.1K 🔥` `NEW`
1. [水晶宫vs阿森纳](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E6%99%B6%E5%AE%ABvs%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `730.6K 🔥` `NEW`
1. [神23报告航天员感觉良好](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E6%8A%A5%E5%91%8A%E8%88%AA%E5%A4%A9%E5%91%98%E6%84%9F%E8%A7%89%E8%89%AF%E5%A5%BD%23) `727.7K 🔥` `NEW`
1. [黎家盈展示肩膀上的国旗](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E5%AE%B6%E7%9B%88%E5%B1%95%E7%A4%BA%E8%82%A9%E8%86%80%E4%B8%8A%E7%9A%84%E5%9B%BD%E6%97%97%23) `719.6K 🔥` `NEW`
1. [燃油车被时代抛弃了吗 (Have fuel vehicles been abandoned by the times?)](https://s.weibo.com/weibo?q=%23%E7%87%83%E6%B2%B9%E8%BD%A6%E8%A2%AB%E6%97%B6%E4%BB%A3%E6%8A%9B%E5%BC%83%E4%BA%86%E5%90%97%23) `718.8K 🔥` `NEW`

Updated at 2026-05-25 00:41:41

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
