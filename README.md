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

1. [诋毁袁隆平成果网红称大不了就进去 (The Internet celebrity who slandered Yuan Longping said he would go in if it was a big deal.)](https://s.weibo.com/weibo?q=%23%E8%AF%8B%E6%AF%81%E8%A2%81%E9%9A%86%E5%B9%B3%E6%88%90%E6%9E%9C%E7%BD%91%E7%BA%A2%E7%A7%B0%E5%A4%A7%E4%B8%8D%E4%BA%86%E5%B0%B1%E8%BF%9B%E5%8E%BB%23) `2.4M 🔥` `NEW`
1. [世界杯32强全名单](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF32%E5%BC%BA%E5%85%A8%E5%90%8D%E5%8D%95%23) `1.6M 🔥` `NEW`
1. [全球最大人造太阳超导磁体在中国](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%9C%80%E5%A4%A7%E4%BA%BA%E9%80%A0%E5%A4%AA%E9%98%B3%E8%B6%85%E5%AF%BC%E7%A3%81%E4%BD%93%E5%9C%A8%E4%B8%AD%E5%9B%BD%23) `1.3M 🔥` `NEW`
1. [玩家回应恋与深空回应](https://s.weibo.com/weibo?q=%23%E7%8E%A9%E5%AE%B6%E5%9B%9E%E5%BA%94%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9E%E5%BA%94%23) `1.1M 🔥` `NEW`
1. [浪姐结束各回各咖](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%BB%93%E6%9D%9F%E5%90%84%E5%9B%9E%E5%90%84%E5%92%96%23) `968.3K 🔥` `NEW`
1. [结婚的时候没想到我天天回来吧](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E7%9A%84%E6%97%B6%E5%80%99%E6%B2%A1%E6%83%B3%E5%88%B0%E6%88%91%E5%A4%A9%E5%A4%A9%E5%9B%9E%E6%9D%A5%E5%90%A7%23) `825.3K 🔥` `NEW`
1. [摇下车窗看世界](https://s.weibo.com/weibo?q=%23%E6%91%87%E4%B8%8B%E8%BD%A6%E7%AA%97%E7%9C%8B%E4%B8%96%E7%95%8C%23) `806.0K 🔥` `NEW`
1. [黄灿灿拿到全季通告费](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%8B%BF%E5%88%B0%E5%85%A8%E5%AD%A3%E9%80%9A%E5%91%8A%E8%B4%B9%23) `793.2K 🔥` `NEW`
1. [祖海认领杨紫](https://s.weibo.com/weibo?q=%23%E7%A5%96%E6%B5%B7%E8%AE%A4%E9%A2%86%E6%9D%A8%E7%B4%AB%23) `770.7K 🔥` `NEW`
1. [28岁产妇昏迷家人录孩子哭声鼓气](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E4%BA%A7%E5%A6%87%E6%98%8F%E8%BF%B7%E5%AE%B6%E4%BA%BA%E5%BD%95%E5%AD%A9%E5%AD%90%E5%93%AD%E5%A3%B0%E9%BC%93%E6%B0%94%23) `755.9K 🔥` `NEW`
1. [阿根廷任意球破门 (Argentina scores free kick)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%BB%BB%E6%84%8F%E7%90%83%E7%A0%B4%E9%97%A8%23) `717.2K 🔥` `NEW`
1. [吴艳妮睡过头素颜去比赛](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE%E7%9D%A1%E8%BF%87%E5%A4%B4%E7%B4%A0%E9%A2%9C%E5%8E%BB%E6%AF%94%E8%B5%9B%23) `662.3K 🔥` `NEW`
1. [迪丽热巴江坂丽奈美甲](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%B1%9F%E5%9D%82%E4%B8%BD%E5%A5%88%E7%BE%8E%E7%94%B2%23) `540.1K 🔥` `NEW`
1. [江坂丽奈美甲](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%9D%82%E4%B8%BD%E5%A5%88%E7%BE%8E%E7%94%B2%23) `527.1K 🔥` `NEW`
1. [女儿毕业寄回几百斤包裹妈妈天塌了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E6%AF%95%E4%B8%9A%E5%AF%84%E5%9B%9E%E5%87%A0%E7%99%BE%E6%96%A4%E5%8C%85%E8%A3%B9%E5%A6%88%E5%A6%88%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `521.3K 🔥` `NEW`
1. [伊朗出局](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%87%BA%E5%B1%80%23) `435.9K 🔥` `NEW`
1. [C罗倒钩被挡](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%80%92%E9%92%A9%E8%A2%AB%E6%8C%A1%23) `419.3K 🔥` `NEW`
1. [宁艺卓黑丝绒抹胸长裙](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E9%BB%91%E4%B8%9D%E7%BB%92%E6%8A%B9%E8%83%B8%E9%95%BF%E8%A3%99%23) `405.5K 🔥` `NEW`
1. [美伊形势突变](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%BD%A2%E5%8A%BF%E7%AA%81%E5%8F%98%23) `402.3K 🔥` `NEW`
1. [男子健身后手擦脸引发脸部真菌感染](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%81%A5%E8%BA%AB%E5%90%8E%E6%89%8B%E6%93%A6%E8%84%B8%E5%BC%95%E5%8F%91%E8%84%B8%E9%83%A8%E7%9C%9F%E8%8F%8C%E6%84%9F%E6%9F%93%23) `400.3K 🔥` `NEW`
1. [孙红雷问龚俊在浪姐咋服务的 (Sun Honglei asked Gong Jun how he served Sister Lang)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E9%97%AE%E9%BE%9A%E4%BF%8A%E5%9C%A8%E6%B5%AA%E5%A7%90%E5%92%8B%E6%9C%8D%E5%8A%A1%E7%9A%84%23) `396.5K 🔥` `NEW`
1. [母婴博主测评奶粉实为品牌代言](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E5%A9%B4%E5%8D%9A%E4%B8%BB%E6%B5%8B%E8%AF%84%E5%A5%B6%E7%B2%89%E5%AE%9E%E4%B8%BA%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%23) `394.0K 🔥` `NEW`
1. [老板暂停营业奉旨入京](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E6%9A%82%E5%81%9C%E8%90%A5%E4%B8%9A%E5%A5%89%E6%97%A8%E5%85%A5%E4%BA%AC%23) `389.1K 🔥` `NEW`
1. [龚俊打电话英语订餐对面说了句中文](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E6%89%93%E7%94%B5%E8%AF%9D%E8%8B%B1%E8%AF%AD%E8%AE%A2%E9%A4%90%E5%AF%B9%E9%9D%A2%E8%AF%B4%E4%BA%86%E5%8F%A5%E4%B8%AD%E6%96%87%23) `384.1K 🔥` `NEW`
1. [黄灿灿涨粉](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%B6%A8%E7%B2%89%23) `383.9K 🔥` `NEW`
1. [韩国跪着死伊朗站着死](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%B7%AA%E7%9D%80%E6%AD%BB%E4%BC%8A%E6%9C%97%E7%AB%99%E7%9D%80%E6%AD%BB%23) `343.8K 🔥` `NEW`
1. [当小猫闻了一下柴犬的脚](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%B0%8F%E7%8C%AB%E9%97%BB%E4%BA%86%E4%B8%80%E4%B8%8B%E6%9F%B4%E7%8A%AC%E7%9A%84%E8%84%9A%23) `324.6K 🔥` `NEW`
1. [雷军回应被扣营销帽子](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%89%A3%E8%90%A5%E9%94%80%E5%B8%BD%E5%AD%90%23) `310.1K 🔥` `NEW`
1. [章建平豪赚10亿后血亏](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%BB%BA%E5%B9%B3%E8%B1%AA%E8%B5%9A10%E4%BA%BF%E5%90%8E%E8%A1%80%E4%BA%8F%23) `302.4K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `296.5K 🔥` `NEW`
1. [甲亢哥得知葡萄牙可能要踢西法哭了 (Brother with hyperthyroidism cried when he learned that Portugal might play against Spain)](https://s.weibo.com/weibo?q=%23%E7%94%B2%E4%BA%A2%E5%93%A5%E5%BE%97%E7%9F%A5%E8%91%A1%E8%90%84%E7%89%99%E5%8F%AF%E8%83%BD%E8%A6%81%E8%B8%A2%E8%A5%BF%E6%B3%95%E5%93%AD%E4%BA%86%23) `296.0K 🔥` `NEW`
1. [阿根廷世界杯首个丢球](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E4%B8%AA%E4%B8%A2%E7%90%83%23) `293.4K 🔥` `NEW`
1. [迪丽热巴蹲下和粉丝拍照](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B9%B2%E4%B8%8B%E5%92%8C%E7%B2%89%E4%B8%9D%E6%8B%8D%E7%85%A7%23) `254.4K 🔥` `NEW`
1. [韩媒破防了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AA%92%E7%A0%B4%E9%98%B2%E4%BA%86%23) `242.9K 🔥` `NEW`
1. [奥地利 默契球](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%9C%B0%E5%88%A9%20%E9%BB%98%E5%A5%91%E7%90%83%23) `235.0K 🔥` `NEW`
1. [穆祉丞打算干什么](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%89%93%E7%AE%97%E5%B9%B2%E4%BB%80%E4%B9%88%23) `228.8K 🔥` `NEW`
1. [留学生博士毕业立志回乌干达从医](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%AD%A6%E7%94%9F%E5%8D%9A%E5%A3%AB%E6%AF%95%E4%B8%9A%E7%AB%8B%E5%BF%97%E5%9B%9E%E4%B9%8C%E5%B9%B2%E8%BE%BE%E4%BB%8E%E5%8C%BB%23) `223.5K 🔥` `NEW`
1. [诋毁袁隆平成果网红账号被封](https://s.weibo.com/weibo?q=%23%E8%AF%8B%E6%AF%81%E8%A2%81%E9%9A%86%E5%B9%B3%E6%88%90%E6%9E%9C%E7%BD%91%E7%BA%A2%E8%B4%A6%E5%8F%B7%E8%A2%AB%E5%B0%81%23) `222.4K 🔥` `NEW`
1. [张月杂志](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E6%9D%82%E5%BF%97%23) `221.8K 🔥` `NEW`
1. [恋与深空回应后玩家更生气了](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9E%E5%BA%94%E5%90%8E%E7%8E%A9%E5%AE%B6%E6%9B%B4%E7%94%9F%E6%B0%94%E4%BA%86%23) `217.1K 🔥` `NEW`
1. [丁禹兮演尸体太逼真 (Ding Yuxi plays a corpse too realistically)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%BC%94%E5%B0%B8%E4%BD%93%E5%A4%AA%E9%80%BC%E7%9C%9F%23) `214.8K 🔥` `NEW`
1. [手机代码发现测评博主名字](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E4%BB%A3%E7%A0%81%E5%8F%91%E7%8E%B0%E6%B5%8B%E8%AF%84%E5%8D%9A%E4%B8%BB%E5%90%8D%E5%AD%97%23) `213.8K 🔥` `NEW`
1. [我就喜欢麦当劳](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B0%B1%E5%96%9C%E6%AC%A2%E9%BA%A6%E5%BD%93%E5%8A%B3%23) `213.1K 🔥` `NEW`
1. [李现 杨紫](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%20%E6%9D%A8%E7%B4%AB%23) `534.3K 🔥`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `372.1K 🔥`
1. [佛得角队长被曝因强奸指控接受调查](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%98%9F%E9%95%BF%E8%A2%AB%E6%9B%9D%E5%9B%A0%E5%BC%BA%E5%A5%B8%E6%8C%87%E6%8E%A7%E6%8E%A5%E5%8F%97%E8%B0%83%E6%9F%A5%23) `273.4K 🔥`
1. [200万粉网红诋毁袁隆平水稻育种技术](https://s.weibo.com/weibo?q=%23200%E4%B8%87%E7%B2%89%E7%BD%91%E7%BA%A2%E8%AF%8B%E6%AF%81%E8%A2%81%E9%9A%86%E5%B9%B3%E6%B0%B4%E7%A8%BB%E8%82%B2%E7%A7%8D%E6%8A%80%E6%9C%AF%23) `298.9K 🔥` `-60%`
1. [韩国淘汰 (South Korea eliminated)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%B7%98%E6%B1%B0%23) `297.5K 🔥` `-96%`
1. [赵丽颖并非无戏可拍](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%B9%B6%E9%9D%9E%E6%97%A0%E6%88%8F%E5%8F%AF%E6%8B%8D%23) `212.8K 🔥` `-58%`
1. [第一次对内蒙古地广人稀有了实感](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E5%86%85%E8%92%99%E5%8F%A4%E5%9C%B0%E5%B9%BF%E4%BA%BA%E7%A8%80%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `203.3K 🔥` `-73%`
1. [C罗任意球](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%BB%BB%E6%84%8F%E7%90%83%23) `181.2K 🔥` `-41%`

Updated at 2026-06-28 14:06:33

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
