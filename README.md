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

1. [顺丰速运被暂停参加全军采购活动](https://s.weibo.com/weibo?q=%23%E9%A1%BA%E4%B8%B0%E9%80%9F%E8%BF%90%E8%A2%AB%E6%9A%82%E5%81%9C%E5%8F%82%E5%8A%A0%E5%85%A8%E5%86%9B%E9%87%87%E8%B4%AD%E6%B4%BB%E5%8A%A8%23) `1.7M 🔥` `NEW`
1. [特朗普在APEC晚宴跳YMCA](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9C%A8APEC%E6%99%9A%E5%AE%B4%E8%B7%B3YMCA%23) `953.0K 🔥` `NEW`
1. [唱空中国经济者终会落空](https://s.weibo.com/weibo?q=%23%E5%94%B1%E7%A9%BA%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E8%80%85%E7%BB%88%E4%BC%9A%E8%90%BD%E7%A9%BA%23) `727.4K 🔥` `NEW`
1. [白小纯 青稚](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%20%E9%9D%92%E7%A8%9A%23) `596.1K 🔥` `NEW`
1. [两京十五日台词](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E5%8F%B0%E8%AF%8D%23) `586.3K 🔥` `NEW`
1. [C罗7米巨型雕像上海揭幕](https://s.weibo.com/weibo?q=%23C%E7%BD%977%E7%B1%B3%E5%B7%A8%E5%9E%8B%E9%9B%95%E5%83%8F%E4%B8%8A%E6%B5%B7%E6%8F%AD%E5%B9%95%23) `467.5K 🔥` `NEW`
1. [猫的树今天是太阳雨收官长文](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%9A%84%E6%A0%91%E4%BB%8A%E5%A4%A9%E6%98%AF%E5%A4%AA%E9%98%B3%E9%9B%A8%E6%94%B6%E5%AE%98%E9%95%BF%E6%96%87%23) `412.0K 🔥` `NEW`
1. [八马茶业被暂停参加全军采购活动](https://s.weibo.com/weibo?q=%23%E5%85%AB%E9%A9%AC%E8%8C%B6%E4%B8%9A%E8%A2%AB%E6%9A%82%E5%81%9C%E5%8F%82%E5%8A%A0%E5%85%A8%E5%86%9B%E9%87%87%E8%B4%AD%E6%B4%BB%E5%8A%A8%23) `393.1K 🔥` `NEW`
1. [科技股大踩踏](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E8%82%A1%E5%A4%A7%E8%B8%A9%E8%B8%8F%23) `279.0K 🔥` `NEW`
1. [恨明月高悬独不照我 拆迁没拆到自己家](https://s.weibo.com/weibo?q=%23%E6%81%A8%E6%98%8E%E6%9C%88%E9%AB%98%E6%82%AC%E7%8B%AC%E4%B8%8D%E7%85%A7%E6%88%91%20%E6%8B%86%E8%BF%81%E6%B2%A1%E6%8B%86%E5%88%B0%E8%87%AA%E5%B7%B1%E5%AE%B6%23) `270.7K 🔥` `NEW`
1. [金裕贞差点被风吹倒了](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%A3%95%E8%B4%9E%E5%B7%AE%E7%82%B9%E8%A2%AB%E9%A3%8E%E5%90%B9%E5%80%92%E4%BA%86%23) `261.1K 🔥` `NEW`
1. [如果厉娜当年真打过电话就太虐了](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E5%8E%89%E5%A8%9C%E5%BD%93%E5%B9%B4%E7%9C%9F%E6%89%93%E8%BF%87%E7%94%B5%E8%AF%9D%E5%B0%B1%E5%A4%AA%E8%99%90%E4%BA%86%23) `258.5K 🔥` `NEW`
1. [杨超越董思成太阳雨喉结吻](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E8%91%A3%E6%80%9D%E6%88%90%E5%A4%AA%E9%98%B3%E9%9B%A8%E5%96%89%E7%BB%93%E5%90%BB%23) `240.6K 🔥` `NEW`
1. [白鹿方否认录制我们来了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B9%E5%90%A6%E8%AE%A4%E5%BD%95%E5%88%B6%E6%88%91%E4%BB%AC%E6%9D%A5%E4%BA%86%23) `191.6K 🔥` `NEW`
1. [权志龙长发](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99%E9%95%BF%E5%8F%91%23) `191.4K 🔥` `NEW`
1. [王菲五十多岁依然活得像少女](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E4%BA%94%E5%8D%81%E5%A4%9A%E5%B2%81%E4%BE%9D%E7%84%B6%E6%B4%BB%E5%BE%97%E5%83%8F%E5%B0%91%E5%A5%B3%23) `187.7K 🔥` `NEW`
1. [AI剧打败真人剧的真正原因](https://s.weibo.com/weibo?q=%23AI%E5%89%A7%E6%89%93%E8%B4%A5%E7%9C%9F%E4%BA%BA%E5%89%A7%E7%9A%84%E7%9C%9F%E6%AD%A3%E5%8E%9F%E5%9B%A0%23) `178.5K 🔥` `NEW`
1. [被捂死女童曾悄悄告诉生父被殴打](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%8D%82%E6%AD%BB%E5%A5%B3%E7%AB%A5%E6%9B%BE%E6%82%84%E6%82%84%E5%91%8A%E8%AF%89%E7%94%9F%E7%88%B6%E8%A2%AB%E6%AE%B4%E6%89%93%23) `178.5K 🔥` `NEW`
1. [成毅新剧三分钟三副面孔](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E6%96%B0%E5%89%A7%E4%B8%89%E5%88%86%E9%92%9F%E4%B8%89%E5%89%AF%E9%9D%A2%E5%AD%94%23) `178.5K 🔥` `NEW`
1. [今天是太阳雨戒断反应](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E6%98%AF%E5%A4%AA%E9%98%B3%E9%9B%A8%E6%88%92%E6%96%AD%E5%8F%8D%E5%BA%94%23) `178.5K 🔥` `NEW`
1. [于东来说早知道这样不会干这家店](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E8%AF%B4%E6%97%A9%E7%9F%A5%E9%81%93%E8%BF%99%E6%A0%B7%E4%B8%8D%E4%BC%9A%E5%B9%B2%E8%BF%99%E5%AE%B6%E5%BA%97%23) `178.4K 🔥` `NEW`
1. [易立竞回复手撕文吉儿](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%AB%8B%E7%AB%9E%E5%9B%9E%E5%A4%8D%E6%89%8B%E6%92%95%E6%96%87%E5%90%89%E5%84%BF%23) `178.4K 🔥` `NEW`
1. [我们来了阵容](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E6%9D%A5%E4%BA%86%E9%98%B5%E5%AE%B9%23) `178.4K 🔥` `NEW`
1. [陈伟霆何穗儿子学会走路了](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E4%BD%95%E7%A9%97%E5%84%BF%E5%AD%90%E5%AD%A6%E4%BC%9A%E8%B5%B0%E8%B7%AF%E4%BA%86%23) `178.4K 🔥` `NEW`
1. [王安宇公主抱王楚然](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E5%85%AC%E4%B8%BB%E6%8A%B1%E7%8E%8B%E6%A5%9A%E7%84%B6%23) `178.4K 🔥` `NEW`
1. [APEC外宾被中国山水硬控170秒](https://s.weibo.com/weibo?q=%23APEC%E5%A4%96%E5%AE%BE%E8%A2%AB%E4%B8%AD%E5%9B%BD%E5%B1%B1%E6%B0%B4%E7%A1%AC%E6%8E%A7170%E7%A7%92%23) `178.4K 🔥` `NEW`
1. [曝Tarzan向AL提出解约](https://s.weibo.com/weibo?q=%23%E6%9B%9DTarzan%E5%90%91AL%E6%8F%90%E5%87%BA%E8%A7%A3%E7%BA%A6%23) `169.5K 🔥` `NEW`
1. [羽绒服建议不要干洗](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E7%BB%92%E6%9C%8D%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%A6%81%E5%B9%B2%E6%B4%97%23) `167.2K 🔥` `NEW`
1. [家有儿女片酬放现在也超许多人](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%E7%89%87%E9%85%AC%E6%94%BE%E7%8E%B0%E5%9C%A8%E4%B9%9F%E8%B6%85%E8%AE%B8%E5%A4%9A%E4%BA%BA%23) `164.8K 🔥` `NEW`
1. [炎亚纶铁了心要上后会友期](https://s.weibo.com/weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E9%93%81%E4%BA%86%E5%BF%83%E8%A6%81%E4%B8%8A%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%23) `164.1K 🔥` `NEW`
1. [编剧施也发文](https://s.weibo.com/weibo?q=%23%E7%BC%96%E5%89%A7%E6%96%BD%E4%B9%9F%E5%8F%91%E6%96%87%23) `160.9K 🔥` `NEW`
1. [芒果摄影师阴阳文吉儿](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%91%84%E5%BD%B1%E5%B8%88%E9%98%B4%E9%98%B3%E6%96%87%E5%90%89%E5%84%BF%23) `159.2K 🔥` `NEW`
1. [日网民吐槽高市早苗APEC之行吐舌头](https://s.weibo.com/weibo?q=%23%E6%97%A5%E7%BD%91%E6%B0%91%E5%90%90%E6%A7%BD%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97APEC%E4%B9%8B%E8%A1%8C%E5%90%90%E8%88%8C%E5%A4%B4%23) `157.0K 🔥` `NEW`
1. [孙芮结婚时间](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%8A%AE%E7%BB%93%E5%A9%9A%E6%97%B6%E9%97%B4%23) `156.9K 🔥` `NEW`
1. [蓝盈莹入院切除扁桃体](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E5%85%A5%E9%99%A2%E5%88%87%E9%99%A4%E6%89%81%E6%A1%83%E4%BD%93%23) `156.9K 🔥` `NEW`
1. [于东来一年赚1亿照样关店](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E4%B8%80%E5%B9%B4%E8%B5%9A1%E4%BA%BF%E7%85%A7%E6%A0%B7%E5%85%B3%E5%BA%97%23) `156.6K 🔥` `NEW`
1. [父亲抽烟17岁女儿患肺癌](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E6%8A%BD%E7%83%9F17%E5%B2%81%E5%A5%B3%E5%84%BF%E6%82%A3%E8%82%BA%E7%99%8C%23) `155.7K 🔥` `NEW`
1. [AL或更换打野](https://s.weibo.com/weibo?q=%23AL%E6%88%96%E6%9B%B4%E6%8D%A2%E6%89%93%E9%87%8E%23) `155.7K 🔥` `NEW`
1. [肉蛋奶的威力我后知后觉](https://s.weibo.com/weibo?q=%23%E8%82%89%E8%9B%8B%E5%A5%B6%E7%9A%84%E5%A8%81%E5%8A%9B%E6%88%91%E5%90%8E%E7%9F%A5%E5%90%8E%E8%A7%89%23) `151.2K 🔥` `NEW`
1. [余承东称百余万辆车零燃烧](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E7%A7%B0%E7%99%BE%E4%BD%99%E4%B8%87%E8%BE%86%E8%BD%A6%E9%9B%B6%E7%87%83%E7%83%A7%23) `144.6K 🔥` `NEW`
1. [董思成收官长文](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%80%9D%E6%88%90%E6%94%B6%E5%AE%98%E9%95%BF%E6%96%87%23) `137.9K 🔥` `NEW`
1. [中国队短道速滑世巡赛夺金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%E4%B8%96%E5%B7%A1%E8%B5%9B%E5%A4%BA%E9%87%91%23) `136.8K 🔥` `NEW`
1. [罗小黑](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%B0%8F%E9%BB%91%23) `134.3K 🔥` `NEW`
1. [伊能静20年前就劝过马天宇了](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%9920%E5%B9%B4%E5%89%8D%E5%B0%B1%E5%8A%9D%E8%BF%87%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%BA%86%23) `131.5K 🔥` `NEW`
1. [比特币暴跌超29万人爆仓](https://s.weibo.com/weibo?q=%23%E6%AF%94%E7%89%B9%E5%B8%81%E6%9A%B4%E8%B7%8C%E8%B6%8529%E4%B8%87%E4%BA%BA%E7%88%86%E4%BB%93%23) `121.9K 🔥` `NEW`
1. [宗馥莉48小时调整247人](https://s.weibo.com/weibo?q=%23%E5%AE%97%E9%A6%A5%E8%8E%8948%E5%B0%8F%E6%97%B6%E8%B0%83%E6%95%B4247%E4%BA%BA%23) `121.4K 🔥` `NEW`
1. [黄景瑜腿绞泰国拳王](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E8%85%BF%E7%BB%9E%E6%B3%B0%E5%9B%BD%E6%8B%B3%E7%8E%8B%23) `112.9K 🔥` `NEW`
1. [特朗普称不允许美企海外建数据中心](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%B8%8D%E5%85%81%E8%AE%B8%E7%BE%8E%E4%BC%81%E6%B5%B7%E5%A4%96%E5%BB%BA%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%23) `112.9K 🔥` `NEW`
1. [孙芮结婚怀孕](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%8A%AE%E7%BB%93%E5%A9%9A%E6%80%80%E5%AD%95%23) `251.3K 🔥`
1. [特朗普说看看深圳再看看我们](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E7%9C%8B%E7%9C%8B%E6%B7%B1%E5%9C%B3%E5%86%8D%E7%9C%8B%E7%9C%8B%E6%88%91%E4%BB%AC%23) `192.4K 🔥`

Updated at 2026-11-21 17:41:07

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
