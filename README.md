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

1. [韩国爆冷不敌南非 (South Korea suffers upset loss to South Africa)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%88%86%E5%86%B7%E4%B8%8D%E6%95%8C%E5%8D%97%E9%9D%9E%23) `2.3M 🔥` `NEW`
1. [番位乱象 越改越乱](https://s.weibo.com/weibo?q=%23%E7%95%AA%E4%BD%8D%E4%B9%B1%E8%B1%A1%20%E8%B6%8A%E6%94%B9%E8%B6%8A%E4%B9%B1%23) `2.0M 🔥` `NEW`
1. [给毕业生的人事档案转递指南](https://s.weibo.com/weibo?q=%23%E7%BB%99%E6%AF%95%E4%B8%9A%E7%94%9F%E7%9A%84%E4%BA%BA%E4%BA%8B%E6%A1%A3%E6%A1%88%E8%BD%AC%E9%80%92%E6%8C%87%E5%8D%97%23) `1.9M 🔥` `NEW`
1. [张钧甯原名更难认了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%92%A7%E7%94%AF%E5%8E%9F%E5%90%8D%E6%9B%B4%E9%9A%BE%E8%AE%A4%E4%BA%86%23) `1.9M 🔥` `NEW`
1. [分数线](https://s.weibo.com/weibo?q=%23%E5%88%86%E6%95%B0%E7%BA%BF%23) `1.6M 🔥` `NEW`
1. [恋与东宫](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E4%B8%9C%E5%AE%AB%23) `1.4M 🔥` `NEW`
1. [高考成绩被屏蔽母女表情神同步](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%E8%A2%AB%E5%B1%8F%E8%94%BD%E6%AF%8D%E5%A5%B3%E8%A1%A8%E6%83%85%E7%A5%9E%E5%90%8C%E6%AD%A5%23) `1.2M 🔥` `NEW`
1. [高考查分](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%9F%A5%E5%88%86%23) `790.9K 🔥` `NEW`
1. [豆包价格](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E4%BB%B7%E6%A0%BC%23) `788.5K 🔥` `NEW`
1. [世界杯积分](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E7%A7%AF%E5%88%86%23) `786.5K 🔥` `NEW`
1. [拼好床真的超出我对苦的认知了 (Putting the bed together is really beyond my understanding of suffering.)](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A5%BD%E5%BA%8A%E7%9C%9F%E7%9A%84%E8%B6%85%E5%87%BA%E6%88%91%E5%AF%B9%E8%8B%A6%E7%9A%84%E8%AE%A4%E7%9F%A5%E4%BA%86%23) `780.9K 🔥` `NEW`
1. [河南高考600分及以上37544人](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E9%AB%98%E8%80%83600%E5%88%86%E5%8F%8A%E4%BB%A5%E4%B8%8A37544%E4%BA%BA%23) `778.4K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `774.9K 🔥` `NEW`
1. [安徽分数线](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E5%88%86%E6%95%B0%E7%BA%BF%23) `771.4K 🔥` `NEW`
1. [百花杀定档](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E5%AE%9A%E6%A1%A3%23) `767.8K 🔥` `NEW`
1. [灭火器假证6毛一张可随意定制](https://s.weibo.com/weibo?q=%23%E7%81%AD%E7%81%AB%E5%99%A8%E5%81%87%E8%AF%816%E6%AF%9B%E4%B8%80%E5%BC%A0%E5%8F%AF%E9%9A%8F%E6%84%8F%E5%AE%9A%E5%88%B6%23) `758.3K 🔥` `NEW`
1. [存储芯片涨价](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E6%B6%A8%E4%BB%B7%23) `754.9K 🔥` `NEW`
1. [独身老人遗产全留侄女](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E8%BA%AB%E8%80%81%E4%BA%BA%E9%81%97%E4%BA%A7%E5%85%A8%E7%95%99%E4%BE%84%E5%A5%B3%23) `748.3K 🔥` `NEW`
1. [谢霆锋王菲到达西安](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E7%8E%8B%E8%8F%B2%E5%88%B0%E8%BE%BE%E8%A5%BF%E5%AE%89%23) `741.4K 🔥` `NEW`
1. [特朗普称伊朗霍尔木兹收费谈判终止](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%BC%8A%E6%9C%97%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%94%B6%E8%B4%B9%E8%B0%88%E5%88%A4%E7%BB%88%E6%AD%A2%23) `741.1K 🔥` `NEW`
1. [柳岩人好好啊毛不易也很实在 (Liu Yan is a nice person and Mao Buyi is also very down-to-earth.)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B2%A9%E4%BA%BA%E5%A5%BD%E5%A5%BD%E5%95%8A%E6%AF%9B%E4%B8%8D%E6%98%93%E4%B9%9F%E5%BE%88%E5%AE%9E%E5%9C%A8%23) `734.5K 🔥` `NEW`
1. [网红陈慧敏引产](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E9%99%88%E6%85%A7%E6%95%8F%E5%BC%95%E4%BA%A7%23) `729.8K 🔥` `NEW`
1. [韩国队要看别人脸色了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%98%9F%E8%A6%81%E7%9C%8B%E5%88%AB%E4%BA%BA%E8%84%B8%E8%89%B2%E4%BA%86%23) `727.2K 🔥` `NEW`
1. [马思唯女友撞脸angelababy](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E5%94%AF%E5%A5%B3%E5%8F%8B%E6%92%9E%E8%84%B8angelababy%23) `724.5K 🔥` `NEW`
1. [孙俪化妆师换金鹤龙了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%8C%96%E5%A6%86%E5%B8%88%E6%8D%A2%E9%87%91%E9%B9%A4%E9%BE%99%E4%BA%86%23) `719.7K 🔥` `NEW`
1. [打开了一本名为刻薄的书](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%BC%80%E4%BA%86%E4%B8%80%E6%9C%AC%E5%90%8D%E4%B8%BA%E5%88%BB%E8%96%84%E7%9A%84%E4%B9%A6%23) `716.1K 🔥` `NEW`
1. [向太看完向佐采访感到失落](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E7%9C%8B%E5%AE%8C%E5%90%91%E4%BD%90%E9%87%87%E8%AE%BF%E6%84%9F%E5%88%B0%E5%A4%B1%E8%90%BD%23) `713.5K 🔥` `NEW`
1. [假婆婆称问过李金铭能不能发她照片](https://s.weibo.com/weibo?q=%23%E5%81%87%E5%A9%86%E5%A9%86%E7%A7%B0%E9%97%AE%E8%BF%87%E6%9D%8E%E9%87%91%E9%93%AD%E8%83%BD%E4%B8%8D%E8%83%BD%E5%8F%91%E5%A5%B9%E7%85%A7%E7%89%87%23) `707.1K 🔥` `NEW`
1. [河南高考700分及以上48人](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E9%AB%98%E8%80%83700%E5%88%86%E5%8F%8A%E4%BB%A5%E4%B8%8A48%E4%BA%BA%23) `704.1K 🔥` `NEW`
1. [答应孩子后发现太贵怎么办](https://s.weibo.com/weibo?q=%23%E7%AD%94%E5%BA%94%E5%AD%A9%E5%AD%90%E5%90%8E%E5%8F%91%E7%8E%B0%E5%A4%AA%E8%B4%B5%E6%80%8E%E4%B9%88%E5%8A%9E%23) `699.5K 🔥` `NEW`
1. [丁禹兮一天宣了三部剧 (Ding Yuxi announced three dramas in one day)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E4%B8%80%E5%A4%A9%E5%AE%A3%E4%BA%86%E4%B8%89%E9%83%A8%E5%89%A7%23) `696.0K 🔥` `NEW`
1. [金价跌至去年10月水平](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E8%87%B3%E5%8E%BB%E5%B9%B410%E6%9C%88%E6%B0%B4%E5%B9%B3%23) `695.0K 🔥` `NEW`
1. [吃完96元外卖退款](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%AE%8C96%E5%85%83%E5%A4%96%E5%8D%96%E9%80%80%E6%AC%BE%23) `690.0K 🔥` `NEW`
1. [小S二女儿星味](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E4%BA%8C%E5%A5%B3%E5%84%BF%E6%98%9F%E5%91%B3%23) `684.6K 🔥` `NEW`
1. [李亦非眼神亲了五六七八遍](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BA%A6%E9%9D%9E%E7%9C%BC%E7%A5%9E%E4%BA%B2%E4%BA%86%E4%BA%94%E5%85%AD%E4%B8%83%E5%85%AB%E9%81%8D%23) `681.4K 🔥` `NEW`
1. [男子因汗多味大被健身房退卡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A0%E6%B1%97%E5%A4%9A%E5%91%B3%E5%A4%A7%E8%A2%AB%E5%81%A5%E8%BA%AB%E6%88%BF%E9%80%80%E5%8D%A1%23) `678.4K 🔥` `NEW`
1. [女子散步被落叶砸成十级伤残](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%95%A3%E6%AD%A5%E8%A2%AB%E8%90%BD%E5%8F%B6%E7%A0%B8%E6%88%90%E5%8D%81%E7%BA%A7%E4%BC%A4%E6%AE%8B%23) `676.0K 🔥` `NEW`
1. [nova16见证守夜人封神时刻](https://s.weibo.com/weibo?q=%23nova16%E8%A7%81%E8%AF%81%E5%AE%88%E5%A4%9C%E4%BA%BA%E5%B0%81%E7%A5%9E%E6%97%B6%E5%88%BB%23) `670.5K 🔥` `NEW`
1. [就让我安安静静听首歌](https://s.weibo.com/weibo?q=%23%E5%B0%B1%E8%AE%A9%E6%88%91%E5%AE%89%E5%AE%89%E9%9D%99%E9%9D%99%E5%90%AC%E9%A6%96%E6%AD%8C%23) `665.0K 🔥` `NEW`
1. [张泉灵说选志愿吵架可以找AI](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%89%E7%81%B5%E8%AF%B4%E9%80%89%E5%BF%97%E6%84%BF%E5%90%B5%E6%9E%B6%E5%8F%AF%E4%BB%A5%E6%89%BEAI%23) `661.2K 🔥` `NEW`
1. [斩神小队都在吃巧乐兹 (The God-Slaying Team is all eating Qiaolezi)](https://s.weibo.com/weibo?q=%23%E6%96%A9%E7%A5%9E%E5%B0%8F%E9%98%9F%E9%83%BD%E5%9C%A8%E5%90%83%E5%B7%A7%E4%B9%90%E5%85%B9%23) `659.5K 🔥` `NEW`
1. [郭富城回应方媛综艺负评](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E5%9B%9E%E5%BA%94%E6%96%B9%E5%AA%9B%E7%BB%BC%E8%89%BA%E8%B4%9F%E8%AF%84%23) `656.4K 🔥` `NEW`
1. [杨紫妆造水平](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%A6%86%E9%80%A0%E6%B0%B4%E5%B9%B3%23) `651.7K 🔥` `NEW`
1. [投资600万加油站建成即被责令拆除](https://s.weibo.com/weibo?q=%23%E6%8A%95%E8%B5%84600%E4%B8%87%E5%8A%A0%E6%B2%B9%E7%AB%99%E5%BB%BA%E6%88%90%E5%8D%B3%E8%A2%AB%E8%B4%A3%E4%BB%A4%E6%8B%86%E9%99%A4%23) `649.1K 🔥` `NEW`
1. [国产折叠屏让老外集体真香](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E6%8A%98%E5%8F%A0%E5%B1%8F%E8%AE%A9%E8%80%81%E5%A4%96%E9%9B%86%E4%BD%93%E7%9C%9F%E9%A6%99%23) `642.4K 🔥` `NEW`
1. [iPhone18Pro或温和涨价](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%88%96%E6%B8%A9%E5%92%8C%E6%B6%A8%E4%BB%B7%23) `639.3K 🔥` `NEW`
1. [王楚钦孙颖莎出战亚运会混双](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E5%87%BA%E6%88%98%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%B7%B7%E5%8F%8C%23) `634.3K 🔥` `NEW`
1. [内马尔全场数据](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E5%85%A8%E5%9C%BA%E6%95%B0%E6%8D%AE%23) `631.2K 🔥` `NEW`
1. [宋祖儿直接用真名自我介绍](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E7%9B%B4%E6%8E%A5%E7%94%A8%E7%9C%9F%E5%90%8D%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D%23) `760.7K 🔥` `+473%`
1. [普通人不要轻易尝试绑头巾](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E4%B8%8D%E8%A6%81%E8%BD%BB%E6%98%93%E5%B0%9D%E8%AF%95%E7%BB%91%E5%A4%B4%E5%B7%BE%23) `751.8K 🔥` `+1488%`

Updated at 2026-06-25 12:19:47

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
