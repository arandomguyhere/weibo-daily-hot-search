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

1. [14省区市大到暴雨 (Heavy rains hit 14 provinces, autonomous regions and cities)](https://s.weibo.com/weibo?q=%2314%E7%9C%81%E5%8C%BA%E5%B8%82%E5%A4%A7%E5%88%B0%E6%9A%B4%E9%9B%A8%23) `644.1K 🔥` `NEW`
1. [AG](https://s.weibo.com/weibo?q=%23AG%23) `484.5K 🔥` `NEW`
1. [姜乘澜关于贴双眼皮贴的小分享](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E5%85%B3%E4%BA%8E%E8%B4%B4%E5%8F%8C%E7%9C%BC%E7%9A%AE%E8%B4%B4%E7%9A%84%E5%B0%8F%E5%88%86%E4%BA%AB%23) `455.3K 🔥` `NEW`
1. [将门独后台词 你只是谢景行而已](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%8F%B0%E8%AF%8D%20%E4%BD%A0%E5%8F%AA%E6%98%AF%E8%B0%A2%E6%99%AF%E8%A1%8C%E8%80%8C%E5%B7%B2%23) `454.1K 🔥` `NEW`
1. [奈丝公主卢昱晓京东见面会](https://s.weibo.com/weibo?q=%23%E5%A5%88%E4%B8%9D%E5%85%AC%E4%B8%BB%E5%8D%A2%E6%98%B1%E6%99%93%E4%BA%AC%E4%B8%9C%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `452.9K 🔥` `NEW`
1. [浪姐直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `452.9K 🔥` `NEW`
1. [俄确认使用榛树打击乌克兰](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%A1%AE%E8%AE%A4%E4%BD%BF%E7%94%A8%E6%A6%9B%E6%A0%91%E6%89%93%E5%87%BB%E4%B9%8C%E5%85%8B%E5%85%B0%23) `448.0K 🔥` `NEW`
1. [68岁男子出轨90后生子称妻子同意](https://s.weibo.com/weibo?q=%2368%E5%B2%81%E7%94%B7%E5%AD%90%E5%87%BA%E8%BD%A890%E5%90%8E%E7%94%9F%E5%AD%90%E7%A7%B0%E5%A6%BB%E5%AD%90%E5%90%8C%E6%84%8F%23) `438.1K 🔥` `NEW`
1. [卢昱晓线下活动被吐槽](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%BA%BF%E4%B8%8B%E6%B4%BB%E5%8A%A8%E8%A2%AB%E5%90%90%E6%A7%BD%23) `437.9K 🔥` `NEW`
1. [机建燃油费](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%BB%BA%E7%87%83%E6%B2%B9%E8%B4%B9%23) `433.3K 🔥` `NEW`
1. [以爱为营 (Camp with love)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E7%88%B1%E4%B8%BA%E8%90%A5%23) `425.1K 🔥` `NEW`
1. [巴西男子强奸女儿及其所生外孙女](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E7%94%B7%E5%AD%90%E5%BC%BA%E5%A5%B8%E5%A5%B3%E5%84%BF%E5%8F%8A%E5%85%B6%E6%89%80%E7%94%9F%E5%A4%96%E5%AD%99%E5%A5%B3%23) `421.8K 🔥` `NEW`
1. [刘诗诗旗袍簪花](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E6%97%97%E8%A2%8D%E7%B0%AA%E8%8A%B1%23) `408.2K 🔥` `NEW`
1. [林一 人永远不知道谁会旺你](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%20%E4%BA%BA%E6%B0%B8%E8%BF%9C%E4%B8%8D%E7%9F%A5%E9%81%93%E8%B0%81%E4%BC%9A%E6%97%BA%E4%BD%A0%23) `403.8K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `400.8K 🔥` `NEW`
1. [NMIXX CORTIS](https://s.weibo.com/weibo?q=%23NMIXX%20CORTIS%23) `393.9K 🔥` `NEW`
1. [漳州杨梅果农哽咽求助](https://s.weibo.com/weibo?q=%23%E6%BC%B3%E5%B7%9E%E6%9D%A8%E6%A2%85%E6%9E%9C%E5%86%9C%E5%93%BD%E5%92%BD%E6%B1%82%E5%8A%A9%23) `389.3K 🔥` `NEW`
1. [李嘉凯前女友](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E5%87%AF%E5%89%8D%E5%A5%B3%E5%8F%8B%23) `384.2K 🔥` `NEW`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `382.9K 🔥` `NEW`
1. [韩秀雅 冬柚](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%A7%80%E9%9B%85%20%E5%86%AC%E6%9F%9A%23) `378.7K 🔥` `NEW`
1. [一看就是块学数学的料 (At first glance, he seems to be a material for studying mathematics.)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9C%8B%E5%B0%B1%E6%98%AF%E5%9D%97%E5%AD%A6%E6%95%B0%E5%AD%A6%E7%9A%84%E6%96%99%23) `375.4K 🔥` `NEW`
1. [铠神罪皮肤脸模优化](https://s.weibo.com/weibo?q=%23%E9%93%A0%E7%A5%9E%E7%BD%AA%E7%9A%AE%E8%82%A4%E8%84%B8%E6%A8%A1%E4%BC%98%E5%8C%96%23) `368.1K 🔥` `NEW`
1. [杨紫又有一部大女主剧](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%8F%88%E6%9C%89%E4%B8%80%E9%83%A8%E5%A4%A7%E5%A5%B3%E4%B8%BB%E5%89%A7%23) `362.1K 🔥` `NEW`
1. [借账户炒股19年不赚反亏476万元](https://s.weibo.com/weibo?q=%23%E5%80%9F%E8%B4%A6%E6%88%B7%E7%82%92%E8%82%A119%E5%B9%B4%E4%B8%8D%E8%B5%9A%E5%8F%8D%E4%BA%8F476%E4%B8%87%E5%85%83%23) `359.2K 🔥` `NEW`
1. [苗苗也不舒服了](https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E4%B9%9F%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `10.0M 🔥` `+2800%`
1. [煤矿19点半爆炸工人22点才被通知](https://s.weibo.com/weibo?q=%23%E7%85%A4%E7%9F%BF19%E7%82%B9%E5%8D%8A%E7%88%86%E7%82%B8%E5%B7%A5%E4%BA%BA22%E7%82%B9%E6%89%8D%E8%A2%AB%E9%80%9A%E7%9F%A5%23) `902.6K 🔥` `+130%`
1. [小猫等了28年终于被收养了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%AD%89%E4%BA%8628%E5%B9%B4%E7%BB%88%E4%BA%8E%E8%A2%AB%E6%94%B6%E5%85%BB%E4%BA%86%23) `450.5K 🔥` `+44%`
1. [燃油车被时代抛弃了吗](https://s.weibo.com/weibo?q=%23%E7%87%83%E6%B2%B9%E8%BD%A6%E8%A2%AB%E6%97%B6%E4%BB%A3%E6%8A%9B%E5%BC%83%E4%BA%86%E5%90%97%23) `446.3K 🔥` `+56%`
1. [王鹤棣曾让沈月吸二手烟](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%9B%BE%E8%AE%A9%E6%B2%88%E6%9C%88%E5%90%B8%E4%BA%8C%E6%89%8B%E7%83%9F%23) `441.3K 🔥` `+28%`
1. [李晨郑恺跑男停宣了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%E8%B7%91%E7%94%B7%E5%81%9C%E5%AE%A3%E4%BA%86%23) `435.2K 🔥` `+28%`
1. [王楚然高反是睡着了还是晕了 (Did Wang Churan fall asleep or faint?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%AB%98%E5%8F%8D%E6%98%AF%E7%9D%A1%E7%9D%80%E4%BA%86%E8%BF%98%E6%98%AF%E6%99%95%E4%BA%86%23) `428.9K 🔥` `+28%`
1. [法网 (French Open)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E7%BD%91%23) `423.5K 🔥` `+43%`
1. [不舒服文学下沉出圈](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%88%92%E6%9C%8D%E6%96%87%E5%AD%A6%E4%B8%8B%E6%B2%89%E5%87%BA%E5%9C%88%23) `418.5K 🔥` `+24%`
1. [张予曦的讨厌真的很明显](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E7%9A%84%E8%AE%A8%E5%8E%8C%E7%9C%9F%E7%9A%84%E5%BE%88%E6%98%8E%E6%98%BE%23) `414.7K 🔥` `+37%`
1. [男子踩中蛇窝被咬10多口](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B8%A9%E4%B8%AD%E8%9B%87%E7%AA%9D%E8%A2%AB%E5%92%AC10%E5%A4%9A%E5%8F%A3%23) `411.5K 🔥` `+21%`
1. [周鸿祎谈马斯克大尺度预言](https://s.weibo.com/weibo?q=%23%E5%91%A8%E9%B8%BF%E7%A5%8E%E8%B0%88%E9%A9%AC%E6%96%AF%E5%85%8B%E5%A4%A7%E5%B0%BA%E5%BA%A6%E9%A2%84%E8%A8%80%23) `405.3K 🔥` `+43%`
1. [五月天阿信道歉](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%9C%88%E5%A4%A9%E9%98%BF%E4%BF%A1%E9%81%93%E6%AD%89%23) `398.4K 🔥` `+21%`
1. [最后他的脸型居然被完全复制了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%90%8E%E4%BB%96%E7%9A%84%E8%84%B8%E5%9E%8B%E5%B1%85%E7%84%B6%E8%A2%AB%E5%AE%8C%E5%85%A8%E5%A4%8D%E5%88%B6%E4%BA%86%23) `394.7K 🔥` `+22%`
1. [任权前女友回怼薛小婉](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%9D%83%E5%89%8D%E5%A5%B3%E5%8F%8B%E5%9B%9E%E6%80%BC%E8%96%9B%E5%B0%8F%E5%A9%89%23) `372.9K 🔥` `+22%`
1. [女子因漏放吸管辱骂砸打店员 (Woman insults and hits store clerk for missing straw)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E6%BC%8F%E6%94%BE%E5%90%B8%E7%AE%A1%E8%BE%B1%E9%AA%82%E7%A0%B8%E6%89%93%E5%BA%97%E5%91%98%23) `360.3K 🔥` `+23%`
1. [苗苗转发李晨郑恺跑男停宣](https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E8%BD%AC%E5%8F%91%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%E8%B7%91%E7%94%B7%E5%81%9C%E5%AE%A3%23) `413.5K 🔥`
1. [BTS成员闵玧其插队被骂 (BTS member Min Yoongi was scolded for jumping in line)](https://s.weibo.com/weibo?q=%23BTS%E6%88%90%E5%91%98%E9%97%B5%E7%8E%A7%E5%85%B6%E6%8F%92%E9%98%9F%E8%A2%AB%E9%AA%82%23) `391.1K 🔥`
1. [曝杨紫在接触女君和熹](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%A8%E7%B4%AB%E5%9C%A8%E6%8E%A5%E8%A7%A6%E5%A5%B3%E5%90%9B%E5%92%8C%E7%86%B9%23) `386.3K 🔥`
1. [鹿晗控诉五哈P图严重 (Luhan accuses Wuha of serious pornography)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%8E%A7%E8%AF%89%E4%BA%94%E5%93%88P%E5%9B%BE%E4%B8%A5%E9%87%8D%23) `379.5K 🔥`
1. [刘诗诗越南活动](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E8%B6%8A%E5%8D%97%E6%B4%BB%E5%8A%A8%23) `371.9K 🔥`
1. [印度高温肆虐蝙蝠从树上坠落奄奄一息](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%AB%98%E6%B8%A9%E8%82%86%E8%99%90%E8%9D%99%E8%9D%A0%E4%BB%8E%E6%A0%91%E4%B8%8A%E5%9D%A0%E8%90%BD%E5%A5%84%E5%A5%84%E4%B8%80%E6%81%AF%23) `370.2K 🔥`
1. [iOS27全新功能](https://s.weibo.com/weibo?q=%23iOS27%E5%85%A8%E6%96%B0%E5%8A%9F%E8%83%BD%23) `364.5K 🔥`
1. [武汉停课停业](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%81%9C%E8%AF%BE%E5%81%9C%E4%B8%9A%23) `1.2M 🔥` `-22%`
1. [王鹤棣 沈月](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%20%E6%B2%88%E6%9C%88%23) `429.5K 🔥` `-55%`
1. [两个淡人生了个浓人宝宝](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%B8%AA%E6%B7%A1%E4%BA%BA%E7%94%9F%E4%BA%86%E4%B8%AA%E6%B5%93%E4%BA%BA%E5%AE%9D%E5%AE%9D%23) `418.2K 🔥` `-61%`
1. [煤矿爆炸时247人下井仅记录124人 (When the coal mine exploded, 247 people went down and only 124 were recorded.)](https://s.weibo.com/weibo?q=%23%E7%85%A4%E7%9F%BF%E7%88%86%E7%82%B8%E6%97%B6247%E4%BA%BA%E4%B8%8B%E4%BA%95%E4%BB%85%E8%AE%B0%E5%BD%95124%E4%BA%BA%23) `401.4K 🔥` `-63%`

Updated at 2026-05-24 19:42:26

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
