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

1. [施南生去年刚获金像奖 (Shi Nansheng just won the Academy Award last year)](https://s.weibo.com/weibo?q=%23%E6%96%BD%E5%8D%97%E7%94%9F%E5%8E%BB%E5%B9%B4%E5%88%9A%E8%8E%B7%E9%87%91%E5%83%8F%E5%A5%96%23) `61.6K 🔥` `NEW`
1. [今年秋冬季将形成超强厄尔尼诺事件](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E7%A7%8B%E5%86%AC%E5%AD%A3%E5%B0%86%E5%BD%A2%E6%88%90%E8%B6%85%E5%BC%BA%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E4%BA%8B%E4%BB%B6%23) `61.5K 🔥` `NEW`
1. [檀健次宿舍直播](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%AE%BF%E8%88%8D%E7%9B%B4%E6%92%AD%23) `61.4K 🔥` `NEW`
1. [超强厄尔尼诺真要来了](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E7%9C%9F%E8%A6%81%E6%9D%A5%E4%BA%86%23) `224.4K 🔥` `+57%`
1. [沈阳再次通告全市 (Shenyang once again notified the whole city)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E5%86%8D%E6%AC%A1%E9%80%9A%E5%91%8A%E5%85%A8%E5%B8%82%23) `61.9K 🔥` `+24%`
1. [棉被大量仅退款买家被行拘10日 (The buyer who only refunded a large amount of quilts was detained for 10 days)](https://s.weibo.com/weibo?q=%23%E6%A3%89%E8%A2%AB%E5%A4%A7%E9%87%8F%E4%BB%85%E9%80%80%E6%AC%BE%E4%B9%B0%E5%AE%B6%E8%A2%AB%E8%A1%8C%E6%8B%9810%E6%97%A5%23) `61.9K 🔥` `+26%`
1. [台风巴威在沈阳发威原因曝光](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%9C%A8%E6%B2%88%E9%98%B3%E5%8F%91%E5%A8%81%E5%8E%9F%E5%9B%A0%E6%9B%9D%E5%85%89%23) `61.9K 🔥` `+22%`
1. [遭仅退款损失20万老板有单也不敢接](https://s.weibo.com/weibo?q=%23%E9%81%AD%E4%BB%85%E9%80%80%E6%AC%BE%E6%8D%9F%E5%A4%B120%E4%B8%87%E8%80%81%E6%9D%BF%E6%9C%89%E5%8D%95%E4%B9%9F%E4%B8%8D%E6%95%A2%E6%8E%A5%23) `61.9K 🔥` `+25%`
1. [哈兰德女朋友穿高跟鞋颠球 (Haaland's girlfriend wears high heels to hit the ball)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A5%B3%E6%9C%8B%E5%8F%8B%E7%A9%BF%E9%AB%98%E8%B7%9F%E9%9E%8B%E9%A2%A0%E7%90%83%23) `61.9K 🔥` `+25%`
1. [双胞胎一死一重伤案姐姐治疗至今 (One of the twins died and the other was seriously injured, the sister has been treated so far)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%83%9E%E8%83%8E%E4%B8%80%E6%AD%BB%E4%B8%80%E9%87%8D%E4%BC%A4%E6%A1%88%E5%A7%90%E5%A7%90%E6%B2%BB%E7%96%97%E8%87%B3%E4%BB%8A%23) `61.9K 🔥` `+26%`
1. [原来已读不回的人是这样想的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%B7%B2%E8%AF%BB%E4%B8%8D%E5%9B%9E%E7%9A%84%E4%BA%BA%E6%98%AF%E8%BF%99%E6%A0%B7%E6%83%B3%E7%9A%84%23) `61.8K 🔥` `+25%`
1. [中山大学通报222人取消录取资格](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B1%B1%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5222%E4%BA%BA%E5%8F%96%E6%B6%88%E5%BD%95%E5%8F%96%E8%B5%84%E6%A0%BC%23) `61.8K 🔥` `+25%`
1. [为什么工作痛苦但不离职](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B7%A5%E4%BD%9C%E7%97%9B%E8%8B%A6%E4%BD%86%E4%B8%8D%E7%A6%BB%E8%81%8C%23) `61.8K 🔥` `+25%`
1. [水油焖菜简直是减脂人福音](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E6%B2%B9%E7%84%96%E8%8F%9C%E7%AE%80%E7%9B%B4%E6%98%AF%E5%87%8F%E8%84%82%E4%BA%BA%E7%A6%8F%E9%9F%B3%23) `61.8K 🔥` `+25%`
1. [迪丽热巴穿钰珑队服走机场 (Dilraba wears Yulong team uniform and walks to the airport)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%A9%BF%E9%92%B0%E7%8F%91%E9%98%9F%E6%9C%8D%E8%B5%B0%E6%9C%BA%E5%9C%BA%23) `61.8K 🔥` `+25%`
1. [沈阳现破纪录大暴雨 (Record-breaking heavy rain hits Shenyang)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E7%8E%B0%E7%A0%B4%E7%BA%AA%E5%BD%95%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `61.8K 🔥` `+26%`
1. [今年秋冬超强厄尔尼诺事件](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E7%A7%8B%E5%86%AC%E8%B6%85%E5%BC%BA%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E4%BA%8B%E4%BB%B6%23) `61.8K 🔥` `+25%`
1. [原来大家都是这样重启人生的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E9%87%8D%E5%90%AF%E4%BA%BA%E7%94%9F%E7%9A%84%23) `61.7K 🔥` `+25%`
1. [桂林女子睡觉时被虫咬断一大把头发](https://s.weibo.com/weibo?q=%23%E6%A1%82%E6%9E%97%E5%A5%B3%E5%AD%90%E7%9D%A1%E8%A7%89%E6%97%B6%E8%A2%AB%E8%99%AB%E5%92%AC%E6%96%AD%E4%B8%80%E5%A4%A7%E6%8A%8A%E5%A4%B4%E5%8F%91%23) `61.7K 🔥` `+25%`
1. [施南生作品](https://s.weibo.com/weibo?q=%23%E6%96%BD%E5%8D%97%E7%94%9F%E4%BD%9C%E5%93%81%23) `61.7K 🔥` `+26%`
1. [世界杯 (world cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `61.7K 🔥` `+25%`
1. [于东来登上新闻联播](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E7%99%BB%E4%B8%8A%E6%96%B0%E9%97%BB%E8%81%94%E6%92%AD%23) `61.7K 🔥` `+25%`
1. [以为长胖但能减肥的饮食习惯](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E9%95%BF%E8%83%96%E4%BD%86%E8%83%BD%E5%87%8F%E8%82%A5%E7%9A%84%E9%A5%AE%E9%A3%9F%E4%B9%A0%E6%83%AF%23) `61.7K 🔥` `+25%`
1. [厄尔尼诺事件将影响我国](https://s.weibo.com/weibo?q=%23%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E4%BA%8B%E4%BB%B6%E5%B0%86%E5%BD%B1%E5%93%8D%E6%88%91%E5%9B%BD%23) `61.7K 🔥` `+25%`
1. [突然明白了独居的意义 (Suddenly I understood the meaning of living alone)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%98%8E%E7%99%BD%E4%BA%86%E7%8B%AC%E5%B1%85%E7%9A%84%E6%84%8F%E4%B9%89%23) `61.6K 🔥` `+25%`
1. [这一秒过火](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `61.6K 🔥` `+25%`
1. [医院主任受贿2392万名下18套房获刑 (Hospital director jailed for taking bribes worth RMB 23.92 million to buy 18 apartments)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E4%B8%BB%E4%BB%BB%E5%8F%97%E8%B4%BF2392%E4%B8%87%E5%90%8D%E4%B8%8B18%E5%A5%97%E6%88%BF%E8%8E%B7%E5%88%91%23) `61.6K 🔥` `+26%`
1. [原来路边收X光片是这来做这个的 (It turns out that this is where roadside X-ray films are collected.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%B7%AF%E8%BE%B9%E6%94%B6X%E5%85%89%E7%89%87%E6%98%AF%E8%BF%99%E6%9D%A5%E5%81%9A%E8%BF%99%E4%B8%AA%E7%9A%84%23) `61.6K 🔥` `+25%`
1. [河北暴雨引发山洪9个村子交通中断](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E6%9A%B4%E9%9B%A8%E5%BC%95%E5%8F%91%E5%B1%B1%E6%B4%AA9%E4%B8%AA%E6%9D%91%E5%AD%90%E4%BA%A4%E9%80%9A%E4%B8%AD%E6%96%AD%23) `61.6K 🔥` `+25%`
1. [南方两倍做多海力士已跌近70% (South China's twice long position on Hynix has fallen by nearly 70%)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E4%B8%A4%E5%80%8D%E5%81%9A%E5%A4%9A%E6%B5%B7%E5%8A%9B%E5%A3%AB%E5%B7%B2%E8%B7%8C%E8%BF%9170%25%23) `61.5K 🔥` `+25%`
1. [郑钦文vs马内罗](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E9%A9%AC%E5%86%85%E7%BD%97%23) `61.5K 🔥` `+25%`
1. [姆巴佩或无缘打破世界杯单届13球纪录](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%88%96%E6%97%A0%E7%BC%98%E6%89%93%E7%A0%B4%E4%B8%96%E7%95%8C%E6%9D%AF%E5%8D%95%E5%B1%8A13%E7%90%83%E7%BA%AA%E5%BD%95%23) `61.5K 🔥` `+25%`
1. [A股今日大跌原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BB%8A%E6%97%A5%E5%A4%A7%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `61.5K 🔥` `+25%`
1. [灿如繁星 (as bright as stars)](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%23) `61.5K 🔥` `+25%`
1. [张雅琪现实版紫薯精](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E7%8E%B0%E5%AE%9E%E7%89%88%E7%B4%AB%E8%96%AF%E7%B2%BE%23) `61.5K 🔥` `+25%`
1. [我们为什么要背木兰的购买记录](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E8%83%8C%E6%9C%A8%E5%85%B0%E7%9A%84%E8%B4%AD%E4%B9%B0%E8%AE%B0%E5%BD%95%23) `61.4K 🔥` `+25%`
1. [蔡依林南昌演唱会](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%8D%97%E6%98%8C%E6%BC%94%E5%94%B1%E4%BC%9A%23) `61.4K 🔥` `+25%`
1. [女孩成都转机独自吃火锅被收编 (A girl was arrested for eating hotpot alone during a transfer in Chengdu)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%88%90%E9%83%BD%E8%BD%AC%E6%9C%BA%E7%8B%AC%E8%87%AA%E5%90%83%E7%81%AB%E9%94%85%E8%A2%AB%E6%94%B6%E7%BC%96%23) `61.4K 🔥` `+25%`
1. [SK海力士为何暴跌](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E4%B8%BA%E4%BD%95%E6%9A%B4%E8%B7%8C%23) `61.4K 🔥` `+25%`
1. [施南生生平](https://s.weibo.com/weibo?q=%23%E6%96%BD%E5%8D%97%E7%94%9F%E7%94%9F%E5%B9%B3%23) `61.4K 🔥` `+25%`
1. [姿态 llw](https://s.weibo.com/weibo?q=%23%E5%A7%BF%E6%80%81%20llw%23) `61.3K 🔥` `+25%`
1. [功夫女足票房破6亿 (Kung Fu Women’s Soccer box office exceeds 600 million)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%E7%A0%B46%E4%BA%BF%23) `61.3K 🔥` `+25%`
1. [2020年是2020天之前](https://s.weibo.com/weibo?q=%232020%E5%B9%B4%E6%98%AF2020%E5%A4%A9%E4%B9%8B%E5%89%8D%23) `61.3K 🔥` `+25%`
1. [美人鱼2](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BA%BA%E9%B1%BC2%23) `167.2K 🔥`
1. [未来五年这样提高国民健康水平](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A5%E4%BA%94%E5%B9%B4%E8%BF%99%E6%A0%B7%E6%8F%90%E9%AB%98%E5%9B%BD%E6%B0%91%E5%81%A5%E5%BA%B7%E6%B0%B4%E5%B9%B3%23) `115.2K 🔥`
1. [黄瓜这种情况比砒霜还毒](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%93%9C%E8%BF%99%E7%A7%8D%E6%83%85%E5%86%B5%E6%AF%94%E7%A0%92%E9%9C%9C%E8%BF%98%E6%AF%92%23) `111.8K 🔥`
1. [发现妈妈变老是从东西无法共用开始](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%A6%88%E5%A6%88%E5%8F%98%E8%80%81%E6%98%AF%E4%BB%8E%E4%B8%9C%E8%A5%BF%E6%97%A0%E6%B3%95%E5%85%B1%E7%94%A8%E5%BC%80%E5%A7%8B%23) `87.1K 🔥`
1. [家道突然中落是一种什么样的体验 (What is it like to experience a sudden loss of family fortune?)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%81%93%E7%AA%81%E7%84%B6%E4%B8%AD%E8%90%BD%E6%98%AF%E4%B8%80%E7%A7%8D%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%E4%BD%93%E9%AA%8C%23) `62.7K 🔥`
1. [中餐厅 张雅琪 (Chinese Restaurant Zhang Yaqi)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%20%E5%BC%A0%E9%9B%85%E7%90%AA%23) `61.9K 🔥`
1. [中国自研AI芯片取得架构突破](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%87%AA%E7%A0%94AI%E8%8A%AF%E7%89%87%E5%8F%96%E5%BE%97%E6%9E%B6%E6%9E%84%E7%AA%81%E7%A0%B4%23) `61.3K 🔥` `-43%`

Updated at 2026-07-14 05:37:19

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
