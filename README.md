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

1. [白玉兰 (white magnolia)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `1.4M 🔥` `NEW`
1. [直播神23发射](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E7%A5%9E23%E5%8F%91%E5%B0%84%23) `921.7K 🔥` `NEW`
1. [李斯丹妮忘词](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%AF%E4%B8%B9%E5%A6%AE%E5%BF%98%E8%AF%8D%23) `915.7K 🔥` `NEW`
1. [浪姐改赛制](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%94%B9%E8%B5%9B%E5%88%B6%23) `914.3K 🔥` `NEW`
1. [男子钓鱼捞起一溺水婴儿](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%92%93%E9%B1%BC%E6%8D%9E%E8%B5%B7%E4%B8%80%E6%BA%BA%E6%B0%B4%E5%A9%B4%E5%84%BF%23) `909.6K 🔥` `NEW`
1. [LGD以下克上WBG](https://s.weibo.com/weibo?q=%23LGD%E4%BB%A5%E4%B8%8B%E5%85%8B%E4%B8%8AWBG%23) `890.6K 🔥` `NEW`
1. [浪姐每次都被票数气到](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%AF%8F%E6%AC%A1%E9%83%BD%E8%A2%AB%E7%A5%A8%E6%95%B0%E6%B0%94%E5%88%B0%23) `884.8K 🔥` `NEW`
1. [一人一句祝福神二十三乘组](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%BA%E4%B8%80%E5%8F%A5%E7%A5%9D%E7%A6%8F%E7%A5%9E%E4%BA%8C%E5%8D%81%E4%B8%89%E4%B9%98%E7%BB%84%23) `881.4K 🔥` `NEW`
1. [王鹤棣风波后首度公开亮相](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E9%A3%8E%E6%B3%A2%E5%90%8E%E9%A6%96%E5%BA%A6%E5%85%AC%E5%BC%80%E4%BA%AE%E7%9B%B8%23) `878.2K 🔥` `NEW`
1. [张艺上淘汰](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E4%B8%8A%E6%B7%98%E6%B1%B0%23) `863.9K 🔥` `NEW`
1. [温峥嵘 可不可以我走 (Wen Zhengrong, can I leave?)](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%20%E5%8F%AF%E4%B8%8D%E5%8F%AF%E4%BB%A5%E6%88%91%E8%B5%B0%23) `854.2K 🔥` `NEW`
1. [刘晓艳回应叮嘱高颜值女生视频走红](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E8%89%B3%E5%9B%9E%E5%BA%94%E5%8F%AE%E5%98%B1%E9%AB%98%E9%A2%9C%E5%80%BC%E5%A5%B3%E7%94%9F%E8%A7%86%E9%A2%91%E8%B5%B0%E7%BA%A2%23) `844.8K 🔥` `NEW`
1. [武契奇笑着回忆中国民众称他577](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E7%AC%91%E7%9D%80%E5%9B%9E%E5%BF%86%E4%B8%AD%E5%9B%BD%E6%B0%91%E4%BC%97%E7%A7%B0%E4%BB%96577%23) `838.4K 🔥` `NEW`
1. [黄圣依 初代浪姐不养闲人](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%9C%A3%E4%BE%9D%20%E5%88%9D%E4%BB%A3%E6%B5%AA%E5%A7%90%E4%B8%8D%E5%85%BB%E9%97%B2%E4%BA%BA%23) `819.1K 🔥` `NEW`
1. [洛克主策划开水的一封信](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E4%B8%BB%E7%AD%96%E5%88%92%E5%BC%80%E6%B0%B4%E7%9A%84%E4%B8%80%E5%B0%81%E4%BF%A1%23) `800.1K 🔥` `NEW`
1. [小澈复出了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%BE%88%E5%A4%8D%E5%87%BA%E4%BA%86%23) `795.2K 🔥` `NEW`
1. [浪姐票数](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%A5%A8%E6%95%B0%23) `793.0K 🔥` `NEW`
1. [白鹿给湖南灾区捐赠100万](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%99%E6%B9%96%E5%8D%97%E7%81%BE%E5%8C%BA%E6%8D%90%E8%B5%A0100%E4%B8%87%23) `779.0K 🔥` `NEW`
1. [洛克王国再次补偿](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%E5%86%8D%E6%AC%A1%E8%A1%A5%E5%81%BF%23) `774.1K 🔥` `NEW`
1. [主角热度破30000](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E7%83%AD%E5%BA%A6%E7%A0%B430000%23) `767.0K 🔥` `NEW`
1. [高考第一个出来的记得喊取消机建燃油费 (Those who are the first to pass the college entrance examination remember to cancel the fuel fee for machinery and equipment.)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%87%BA%E6%9D%A5%E7%9A%84%E8%AE%B0%E5%BE%97%E5%96%8A%E5%8F%96%E6%B6%88%E6%9C%BA%E5%BB%BA%E7%87%83%E6%B2%B9%E8%B4%B9%23) `760.7K 🔥` `NEW`
1. [青春修炼手册的彩带是橙色的](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E4%BF%AE%E7%82%BC%E6%89%8B%E5%86%8C%E7%9A%84%E5%BD%A9%E5%B8%A6%E6%98%AF%E6%A9%99%E8%89%B2%E7%9A%84%23) `754.9K 🔥` `NEW`
1. [青春修炼手册903票](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E4%BF%AE%E7%82%BC%E6%89%8B%E5%86%8C903%E7%A5%A8%23) `754.2K 🔥` `NEW`
1. [张月团三公总分2574](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%9B%A2%E4%B8%89%E5%85%AC%E6%80%BB%E5%88%862574%23) `749.9K 🔥` `NEW`
1. [耐高决赛](https://s.weibo.com/weibo?q=%23%E8%80%90%E9%AB%98%E5%86%B3%E8%B5%9B%23) `727.7K 🔥` `NEW`
1. [央视曝光多品牌用商标擦边](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E5%A4%9A%E5%93%81%E7%89%8C%E7%94%A8%E5%95%86%E6%A0%87%E6%93%A6%E8%BE%B9%23) `720.1K 🔥` `NEW`
1. [经销商亏本甩卖燃油车](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E9%94%80%E5%95%86%E4%BA%8F%E6%9C%AC%E7%94%A9%E5%8D%96%E7%87%83%E6%B2%B9%E8%BD%A6%23) `710.9K 🔥` `NEW`
1. [煤矿19点半爆炸工人22点才被通知](https://s.weibo.com/weibo?q=%23%E7%85%A4%E7%9F%BF19%E7%82%B9%E5%8D%8A%E7%88%86%E7%82%B8%E5%B7%A5%E4%BA%BA22%E7%82%B9%E6%89%8D%E8%A2%AB%E9%80%9A%E7%9F%A5%23) `902.3K 🔥` `+65%`
1. [神23出征仪式](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E5%87%BA%E5%BE%81%E4%BB%AA%E5%BC%8F%23) `899.0K 🔥` `+122%`
1. [燃油车被时代抛弃了吗](https://s.weibo.com/weibo?q=%23%E7%87%83%E6%B2%B9%E8%BD%A6%E8%A2%AB%E6%97%B6%E4%BB%A3%E6%8A%9B%E5%BC%83%E4%BA%86%E5%90%97%23) `892.6K 🔥` `+96%`
1. [苗苗也不舒服了 (Miaomiao is not feeling well either.)](https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E4%B9%9F%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `870.6K 🔥` `+95%`
1. [死了么APP又改名了](https://s.weibo.com/weibo?q=%23%E6%AD%BB%E4%BA%86%E4%B9%88APP%E5%8F%88%E6%94%B9%E5%90%8D%E4%BA%86%23) `869.7K 🔥` `+97%`
1. [俄确认使用榛树打击乌克兰](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%A1%AE%E8%AE%A4%E4%BD%BF%E7%94%A8%E6%A6%9B%E6%A0%91%E6%89%93%E5%87%BB%E4%B9%8C%E5%85%8B%E5%85%B0%23) `860.6K 🔥` `+91%`
1. [内娱最有名的七字真言](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%9C%80%E6%9C%89%E5%90%8D%E7%9A%84%E4%B8%83%E5%AD%97%E7%9C%9F%E8%A8%80%23) `849.4K 🔥` `+103%`
1. [迪丽热巴在我边上做头发](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%9C%A8%E6%88%91%E8%BE%B9%E4%B8%8A%E5%81%9A%E5%A4%B4%E5%8F%91%23) `842.8K 🔥` `+93%`
1. [何洁秒了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B4%81%E7%A7%92%E4%BA%86%23) `831.8K 🔥` `+111%`
1. [王鹤棣曾让沈月吸二手烟](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%9B%BE%E8%AE%A9%E6%B2%88%E6%9C%88%E5%90%B8%E4%BA%8C%E6%89%8B%E7%83%9F%23) `830.0K 🔥` `+88%`
1. [巴西男子强奸女儿及其所生外孙女 (Brazilian man raped daughter and granddaughter)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E7%94%B7%E5%AD%90%E5%BC%BA%E5%A5%B8%E5%A5%B3%E5%84%BF%E5%8F%8A%E5%85%B6%E6%89%80%E7%94%9F%E5%A4%96%E5%AD%99%E5%A5%B3%23) `821.7K 🔥` `+95%`
1. [浪姐 辱追](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E8%BE%B1%E8%BF%BD%23) `815.9K 🔥` `+86%`
1. [68岁男子出轨90后生子称妻子同意](https://s.weibo.com/weibo?q=%2368%E5%B2%81%E7%94%B7%E5%AD%90%E5%87%BA%E8%BD%A890%E5%90%8E%E7%94%9F%E5%AD%90%E7%A7%B0%E5%A6%BB%E5%AD%90%E5%90%8C%E6%84%8F%23) `804.3K 🔥` `+88%`
1. [男子吃野生石斑鱼籽中毒尚无解药](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%90%83%E9%87%8E%E7%94%9F%E7%9F%B3%E6%96%91%E9%B1%BC%E7%B1%BD%E4%B8%AD%E6%AF%92%E5%B0%9A%E6%97%A0%E8%A7%A3%E8%8D%AF%23) `787.6K 🔥` `+94%`
1. [李连杰回应换年轻武僧心脏 (Jet Li responded by changing the heart of a young warrior monk)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%BF%9E%E6%9D%B0%E5%9B%9E%E5%BA%94%E6%8D%A2%E5%B9%B4%E8%BD%BB%E6%AD%A6%E5%83%A7%E5%BF%83%E8%84%8F%23) `782.1K 🔥` `+92%`
1. [将门独后台词 你只是谢景行而已 (Lines for being the only one in the general family: You are just Xie Jingxing)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%8F%B0%E8%AF%8D%20%E4%BD%A0%E5%8F%AA%E6%98%AF%E8%B0%A2%E6%99%AF%E8%A1%8C%E8%80%8C%E5%B7%B2%23) `772.2K 🔥` `+79%`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `742.5K 🔥` `+96%`
1. [卢昱晓线下活动被吐槽](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%BA%BF%E4%B8%8B%E6%B4%BB%E5%8A%A8%E8%A2%AB%E5%90%90%E6%A7%BD%23) `738.9K 🔥` `+74%`
1. [武契奇到访长城](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E5%88%B0%E8%AE%BF%E9%95%BF%E5%9F%8E%23) `734.6K 🔥` `+63%`
1. [姜乘澜关于贴双眼皮贴的小分享](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E5%85%B3%E4%BA%8E%E8%B4%B4%E5%8F%8C%E7%9C%BC%E7%9A%AE%E8%B4%B4%E7%9A%84%E5%B0%8F%E5%88%86%E4%BA%AB%23) `729.9K 🔥` `+84%`
1. [母亲将有暗伤枇杷装箱男子整箱倒掉 (The mother packed the loquats with hidden injuries and dumped them out of the man's box)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E5%B0%86%E6%9C%89%E6%9A%97%E4%BC%A4%E6%9E%87%E6%9D%B7%E8%A3%85%E7%AE%B1%E7%94%B7%E5%AD%90%E6%95%B4%E7%AE%B1%E5%80%92%E6%8E%89%23) `716.5K 🔥` `+94%`
1. [武汉停课停业](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%81%9C%E8%AF%BE%E5%81%9C%E4%B8%9A%23) `923.4K 🔥`
1. [浪姐直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `810.8K 🔥` `-41%`

Updated at 2026-05-24 22:16:51

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
