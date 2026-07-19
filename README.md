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

1. [姆巴佩历史第一 (Mbappe first in history)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%8E%86%E5%8F%B2%E7%AC%AC%E4%B8%80%23) `1.3M 🔥` `NEW`
1. [贝林厄姆 颜值](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%20%E9%A2%9C%E5%80%BC%23) `862.5K 🔥` `NEW`
1. [中国AI产业落地跑出加速度](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDAI%E4%BA%A7%E4%B8%9A%E8%90%BD%E5%9C%B0%E8%B7%91%E5%87%BA%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `769.5K 🔥` `NEW`
1. [刘宇宁让粉丝删掉不好听的评论](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AE%A9%E7%B2%89%E4%B8%9D%E5%88%A0%E6%8E%89%E4%B8%8D%E5%A5%BD%E5%90%AC%E7%9A%84%E8%AF%84%E8%AE%BA%23) `767.3K 🔥` `NEW`
1. [王俊凯前助理去了王俊凯演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%89%8D%E5%8A%A9%E7%90%86%E5%8E%BB%E4%BA%86%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `706.4K 🔥` `NEW`
1. [为何穿凉鞋的人越来越少了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BD%95%E7%A9%BF%E5%87%89%E9%9E%8B%E7%9A%84%E4%BA%BA%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%B0%91%E4%BA%86%23) `673.5K 🔥` `NEW`
1. [重庆00后网格员疏散居民时失联](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%8600%E5%90%8E%E7%BD%91%E6%A0%BC%E5%91%98%E7%96%8F%E6%95%A3%E5%B1%85%E6%B0%91%E6%97%B6%E5%A4%B1%E8%81%94%23) `512.4K 🔥` `NEW`
1. [樊振东解说决赛](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%A7%A3%E8%AF%B4%E5%86%B3%E8%B5%9B%23) `511.4K 🔥` `NEW`
1. [黄子韬看王鹤棣的眼神](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E7%9C%8B%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `273.8K 🔥` `NEW`
1. [迪丽热巴方恭喜功夫女足破13亿](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%96%B9%E6%81%AD%E5%96%9C%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A0%B413%E4%BA%BF%23) `273.6K 🔥` `NEW`
1. [吧唧 甲醛 (Formaldehyde)](https://s.weibo.com/weibo?q=%23%E5%90%A7%E5%94%A7%20%E7%94%B2%E9%86%9B%23) `273.4K 🔥` `NEW`
1. [人类发现生命所需三大特征均具备行星](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E5%8F%91%E7%8E%B0%E7%94%9F%E5%91%BD%E6%89%80%E9%9C%80%E4%B8%89%E5%A4%A7%E7%89%B9%E5%BE%81%E5%9D%87%E5%85%B7%E5%A4%87%E8%A1%8C%E6%98%9F%23) `273.1K 🔥` `NEW`
1. [跟着欢乐节玩转海南岛](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E6%AC%A2%E4%B9%90%E8%8A%82%E7%8E%A9%E8%BD%AC%E6%B5%B7%E5%8D%97%E5%B2%9B%23) `272.8K 🔥` `NEW`
1. [谁能拒绝三伏天的免费雪糕](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%83%BD%E6%8B%92%E7%BB%9D%E4%B8%89%E4%BC%8F%E5%A4%A9%E7%9A%84%E5%85%8D%E8%B4%B9%E9%9B%AA%E7%B3%95%23) `272.6K 🔥` `NEW`
1. [投喂流浪狗15年烤鸭店婉拒网购订单](https://s.weibo.com/weibo?q=%23%E6%8A%95%E5%96%82%E6%B5%81%E6%B5%AA%E7%8B%9715%E5%B9%B4%E7%83%A4%E9%B8%AD%E5%BA%97%E5%A9%89%E6%8B%92%E7%BD%91%E8%B4%AD%E8%AE%A2%E5%8D%95%23) `272.2K 🔥` `NEW`
1. [3D还原重庆彭水山体崩塌](https://s.weibo.com/weibo?q=%233D%E8%BF%98%E5%8E%9F%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C%23) `272.1K 🔥` `NEW`
1. [虞书欣侯明昊壁咚吻路透](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BE%AF%E6%98%8E%E6%98%8A%E5%A3%81%E5%92%9A%E5%90%BB%E8%B7%AF%E9%80%8F%23) `271.9K 🔥` `NEW`
1. [锂电池也要交消费税了](https://s.weibo.com/weibo?q=%23%E9%94%82%E7%94%B5%E6%B1%A0%E4%B9%9F%E8%A6%81%E4%BA%A4%E6%B6%88%E8%B4%B9%E7%A8%8E%E4%BA%86%23) `271.6K 🔥` `NEW`
1. [王楚钦让孙颖莎别给自己太大压力](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AE%A9%E5%AD%99%E9%A2%96%E8%8E%8E%E5%88%AB%E7%BB%99%E8%87%AA%E5%B7%B1%E5%A4%AA%E5%A4%A7%E5%8E%8B%E5%8A%9B%23) `271.3K 🔥` `NEW`
1. [王俊凯粉丝贴脸开大妆造师](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%B2%89%E4%B8%9D%E8%B4%B4%E8%84%B8%E5%BC%80%E5%A4%A7%E5%A6%86%E9%80%A0%E5%B8%88%23) `271.1K 🔥` `NEW`
1. [曾沛慈回应老公当monitor (Zeng Peici responded to her husband being a monitor)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%9E%E5%BA%94%E8%80%81%E5%85%AC%E5%BD%93monitor%23) `271.0K 🔥` `NEW`
1. [姆巴佩说宁愿不成为历史最佳射手](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%AF%B4%E5%AE%81%E6%84%BF%E4%B8%8D%E6%88%90%E4%B8%BA%E5%8E%86%E5%8F%B2%E6%9C%80%E4%BD%B3%E5%B0%84%E6%89%8B%23) `270.6K 🔥` `NEW`
1. [旭旭宝宝说对功夫女足不感兴趣](https://s.weibo.com/weibo?q=%23%E6%97%AD%E6%97%AD%E5%AE%9D%E5%AE%9D%E8%AF%B4%E5%AF%B9%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E4%B8%8D%E6%84%9F%E5%85%B4%E8%B6%A3%23) `270.4K 🔥` `NEW`
1. [那些年一起追过的世界杯](https://s.weibo.com/weibo?q=%23%E9%82%A3%E4%BA%9B%E5%B9%B4%E4%B8%80%E8%B5%B7%E8%BF%BD%E8%BF%87%E7%9A%84%E4%B8%96%E7%95%8C%E6%9D%AF%23) `270.2K 🔥` `NEW`
1. [黄总请你去包厢事件最新进展](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%80%BB%E8%AF%B7%E4%BD%A0%E5%8E%BB%E5%8C%85%E5%8E%A2%E4%BA%8B%E4%BB%B6%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `269.6K 🔥` `NEW`
1. [申留真直播道歉](https://s.weibo.com/weibo?q=%23%E7%94%B3%E7%95%99%E7%9C%9F%E7%9B%B4%E6%92%AD%E9%81%93%E6%AD%89%23) `269.6K 🔥` `NEW`
1. [爸妈打闹6个月宝宝将妈妈护在身后](https://s.weibo.com/weibo?q=%23%E7%88%B8%E5%A6%88%E6%89%93%E9%97%B96%E4%B8%AA%E6%9C%88%E5%AE%9D%E5%AE%9D%E5%B0%86%E5%A6%88%E5%A6%88%E6%8A%A4%E5%9C%A8%E8%BA%AB%E5%90%8E%23) `269.0K 🔥` `NEW`
1. [Angelababy耳机一戴切换状态](https://s.weibo.com/weibo?q=%23Angelababy%E8%80%B3%E6%9C%BA%E4%B8%80%E6%88%B4%E5%88%87%E6%8D%A2%E7%8A%B6%E6%80%81%23) `268.8K 🔥` `NEW`
1. [法律不是让父亲被带走的泄愤工具](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%BE%8B%E4%B8%8D%E6%98%AF%E8%AE%A9%E7%88%B6%E4%BA%B2%E8%A2%AB%E5%B8%A6%E8%B5%B0%E7%9A%84%E6%B3%84%E6%84%A4%E5%B7%A5%E5%85%B7%23) `268.0K 🔥` `NEW`
1. [金靴](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%B4%23) `234.6K 🔥` `NEW`
1. [国产剧终于敢拍随母姓了 (Domestic dramas finally dare to take on the mother’s surname)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E5%89%A7%E7%BB%88%E4%BA%8E%E6%95%A2%E6%8B%8D%E9%9A%8F%E6%AF%8D%E5%A7%93%E4%BA%86%23) `229.9K 🔥` `NEW`
1. [这比出轨更令人难以接受](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AF%94%E5%87%BA%E8%BD%A8%E6%9B%B4%E4%BB%A4%E4%BA%BA%E9%9A%BE%E4%BB%A5%E6%8E%A5%E5%8F%97%23) `226.0K 🔥` `NEW`
1. [盒马被曝让员工三伏天在户外吃饭](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%AC%E8%A2%AB%E6%9B%9D%E8%AE%A9%E5%91%98%E5%B7%A5%E4%B8%89%E4%BC%8F%E5%A4%A9%E5%9C%A8%E6%88%B7%E5%A4%96%E5%90%83%E9%A5%AD%23) `221.2K 🔥` `NEW`
1. [内娱男明星路人缘TOP50](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%94%B7%E6%98%8E%E6%98%9F%E8%B7%AF%E4%BA%BA%E7%BC%98TOP50%23) `203.0K 🔥` `NEW`
1. [英格兰 场面失控](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%20%E5%9C%BA%E9%9D%A2%E5%A4%B1%E6%8E%A7%23) `202.6K 🔥` `NEW`
1. [法国队 太丢人](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%98%9F%20%E5%A4%AA%E4%B8%A2%E4%BA%BA%23) `198.4K 🔥` `NEW`
1. [王玉雯嗑到林一周也](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%97%91%E5%88%B0%E6%9E%97%E4%B8%80%E5%91%A8%E4%B9%9F%23) `198.4K 🔥` `NEW`
1. [黄子韬没拉裤链](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%B2%A1%E6%8B%89%E8%A3%A4%E9%93%BE%23) `194.7K 🔥` `NEW`
1. [天孚通信半年净利大幅预增](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AD%9A%E9%80%9A%E4%BF%A1%E5%8D%8A%E5%B9%B4%E5%87%80%E5%88%A9%E5%A4%A7%E5%B9%85%E9%A2%84%E5%A2%9E%23) `183.6K 🔥` `NEW`
1. [法国球员吐槽无法接受某些人的表现](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E7%90%83%E5%91%98%E5%90%90%E6%A7%BD%E6%97%A0%E6%B3%95%E6%8E%A5%E5%8F%97%E6%9F%90%E4%BA%9B%E4%BA%BA%E7%9A%84%E8%A1%A8%E7%8E%B0%23) `183.5K 🔥` `NEW`
1. [配音演员称知乎引流视频ai其声音 (The voice actor claims that Zhihu’s streaming video AI is his voice)](https://s.weibo.com/weibo?q=%23%E9%85%8D%E9%9F%B3%E6%BC%94%E5%91%98%E7%A7%B0%E7%9F%A5%E4%B9%8E%E5%BC%95%E6%B5%81%E8%A7%86%E9%A2%91ai%E5%85%B6%E5%A3%B0%E9%9F%B3%23) `174.9K 🔥` `NEW`
1. [法国门将身价堪比一杯蜜雪冰城 (The French goalkeeper is worth as much as a glass of ice cream)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%97%A8%E5%B0%86%E8%BA%AB%E4%BB%B7%E5%A0%AA%E6%AF%94%E4%B8%80%E6%9D%AF%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E%23) `719.0K 🔥` `+45%`
1. [白云山小柴胡护航进球欢呼时刻 (Baiyunshan Xiao Bupleurum escorts the goal cheering moment)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E4%BA%91%E5%B1%B1%E5%B0%8F%E6%9F%B4%E8%83%A1%E6%8A%A4%E8%88%AA%E8%BF%9B%E7%90%83%E6%AC%A2%E5%91%BC%E6%97%B6%E5%88%BB%23) `697.9K 🔥`
1. [刘宇宁此事到此为止](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%AD%A4%E4%BA%8B%E5%88%B0%E6%AD%A4%E4%B8%BA%E6%AD%A2%23) `481.8K 🔥`
1. [法国4比6英格兰](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD4%E6%AF%946%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `611.2K 🔥` `-73%`
1. [伊朗称将转入全面毁灭性反击阶段](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%B0%86%E8%BD%AC%E5%85%A5%E5%85%A8%E9%9D%A2%E6%AF%81%E7%81%AD%E6%80%A7%E5%8F%8D%E5%87%BB%E9%98%B6%E6%AE%B5%23) `273.8K 🔥` `-38%`
1. [马来西亚将驱逐以色列人](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E5%B0%86%E9%A9%B1%E9%80%90%E4%BB%A5%E8%89%B2%E5%88%97%E4%BA%BA%23) `270.0K 🔥` `-28%`
1. [曾沛慈老公](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E8%80%81%E5%85%AC%23) `269.3K 🔥` `-39%`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `268.6K 🔥` `-30%`
1. [地球超新鲜回应争议 (Earth Super Fresh responds to controversy)](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83%E8%B6%85%E6%96%B0%E9%B2%9C%E5%9B%9E%E5%BA%94%E4%BA%89%E8%AE%AE%23) `267.0K 🔥` `-33%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `198.4K 🔥` `-49%`

Updated at 2026-07-19 11:55:10

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
