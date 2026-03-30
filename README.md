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

1. [床上最脏的一个地方很多人从没洗过 (The dirtiest place on the bed is one that many people never wash)](https://s.weibo.com/weibo?q=%23%E5%BA%8A%E4%B8%8A%E6%9C%80%E8%84%8F%E7%9A%84%E4%B8%80%E4%B8%AA%E5%9C%B0%E6%96%B9%E5%BE%88%E5%A4%9A%E4%BA%BA%E4%BB%8E%E6%B2%A1%E6%B4%97%E8%BF%87%23) `770.8K 🔥` `NEW`
1. [严浩翔新歌Fly开始预约](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%96%B0%E6%AD%8CFly%E5%BC%80%E5%A7%8B%E9%A2%84%E7%BA%A6%23) `282.1K 🔥` `NEW`
1. [境外间谍机关渗透我国粮食领域](https://s.weibo.com/weibo?q=%23%E5%A2%83%E5%A4%96%E9%97%B4%E8%B0%8D%E6%9C%BA%E5%85%B3%E6%B8%97%E9%80%8F%E6%88%91%E5%9B%BD%E7%B2%AE%E9%A3%9F%E9%A2%86%E5%9F%9F%23) `277.8K 🔥` `NEW`
1. [我跳一天200他坐一天400](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%B7%B3%E4%B8%80%E5%A4%A9200%E4%BB%96%E5%9D%90%E4%B8%80%E5%A4%A9400%23) `273.7K 🔥` `NEW`
1. [广州下暴雨高架桥变高架河](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E4%B8%8B%E6%9A%B4%E9%9B%A8%E9%AB%98%E6%9E%B6%E6%A1%A5%E5%8F%98%E9%AB%98%E6%9E%B6%E6%B2%B3%23) `257.6K 🔥` `NEW`
1. [迪丽热巴陈飞宇同框被吐槽有年龄感](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E5%90%8C%E6%A1%86%E8%A2%AB%E5%90%90%E6%A7%BD%E6%9C%89%E5%B9%B4%E9%BE%84%E6%84%9F%23) `230.0K 🔥` `NEW`
1. [豆包谈DeepSeek频繁崩溃](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E8%B0%88DeepSeek%E9%A2%91%E7%B9%81%E5%B4%A9%E6%BA%83%23) `194.0K 🔥` `NEW`
1. [庞麦郎 华晨宇](https://s.weibo.com/weibo?q=%23%E5%BA%9E%E9%BA%A6%E9%83%8E%20%E5%8D%8E%E6%99%A8%E5%AE%87%23) `186.4K 🔥` `NEW`
1. [14岁男生欲性侵并杀害女同学案开庭](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E7%94%B7%E7%94%9F%E6%AC%B2%E6%80%A7%E4%BE%B5%E5%B9%B6%E6%9D%80%E5%AE%B3%E5%A5%B3%E5%90%8C%E5%AD%A6%E6%A1%88%E5%BC%80%E5%BA%AD%23) `183.0K 🔥` `NEW`
1. [垫底辣孩的脸怎么了](https://s.weibo.com/weibo?q=%23%E5%9E%AB%E5%BA%95%E8%BE%A3%E5%AD%A9%E7%9A%84%E8%84%B8%E6%80%8E%E4%B9%88%E4%BA%86%23) `181.7K 🔥` `NEW`
1. [杨幂新剧演冯太后 (Yang Mi plays Empress Dowager Feng in new drama)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%96%B0%E5%89%A7%E6%BC%94%E5%86%AF%E5%A4%AA%E5%90%8E%23) `181.0K 🔥` `NEW`
1. [瑞幸新品椰子蛋遭网友吐槽](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E6%96%B0%E5%93%81%E6%A4%B0%E5%AD%90%E8%9B%8B%E9%81%AD%E7%BD%91%E5%8F%8B%E5%90%90%E6%A7%BD%23) `179.7K 🔥` `NEW`
1. [华晨宇工作室 冷饭又炒](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E5%86%B7%E9%A5%AD%E5%8F%88%E7%82%92%23) `179.6K 🔥` `NEW`
1. [掘金勇士冲突](https://s.weibo.com/weibo?q=%23%E6%8E%98%E9%87%91%E5%8B%87%E5%A3%AB%E5%86%B2%E7%AA%81%23) `178.0K 🔥` `NEW`
1. [全红婵称跳水从喜欢变成了任务](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E7%A7%B0%E8%B7%B3%E6%B0%B4%E4%BB%8E%E5%96%9C%E6%AC%A2%E5%8F%98%E6%88%90%E4%BA%86%E4%BB%BB%E5%8A%A1%23) `176.2K 🔥` `NEW`
1. [周翊然用张子枫的画当了8年头像](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%BF%8A%E7%84%B6%E7%94%A8%E5%BC%A0%E5%AD%90%E6%9E%AB%E7%9A%84%E7%94%BB%E5%BD%93%E4%BA%868%E5%B9%B4%E5%A4%B4%E5%83%8F%23) `175.4K 🔥` `NEW`
1. [鹿晗艾特范志毅](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%89%BE%E7%89%B9%E8%8C%83%E5%BF%97%E6%AF%85%23) `131.6K 🔥` `NEW`
1. [全红婵只敢穿长袖长裤](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E5%8F%AA%E6%95%A2%E7%A9%BF%E9%95%BF%E8%A2%96%E9%95%BF%E8%A3%A4%23) `116.6K 🔥` `NEW`
1. [刘学义资源](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E8%B5%84%E6%BA%90%23) `116.0K 🔥` `NEW`
1. [芬兰人设](https://s.weibo.com/weibo?q=%23%E8%8A%AC%E5%85%B0%E4%BA%BA%E8%AE%BE%23) `109.8K 🔥` `NEW`
1. [感受一下广州超级大暴雨 (Feel the super heavy rain in Guangzhou)](https://s.weibo.com/weibo?q=%23%E6%84%9F%E5%8F%97%E4%B8%80%E4%B8%8B%E5%B9%BF%E5%B7%9E%E8%B6%85%E7%BA%A7%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `107.4K 🔥` `NEW`
1. [迪丽热巴天鹅颈天花板](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A4%A9%E9%B9%85%E9%A2%88%E5%A4%A9%E8%8A%B1%E6%9D%BF%23) `103.4K 🔥` `NEW`
1. [锤娜丽莎本名嵇嘉禾](https://s.weibo.com/weibo?q=%23%E9%94%A4%E5%A8%9C%E4%B8%BD%E8%8E%8E%E6%9C%AC%E5%90%8D%E5%B5%87%E5%98%89%E7%A6%BE%23) `101.2K 🔥` `NEW`
1. [耗糖最快的动作](https://s.weibo.com/weibo?q=%23%E8%80%97%E7%B3%96%E6%9C%80%E5%BF%AB%E7%9A%84%E5%8A%A8%E4%BD%9C%23) `100.8K 🔥` `NEW`
1. [张杰赚点钱全花舞美上了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E8%B5%9A%E7%82%B9%E9%92%B1%E5%85%A8%E8%8A%B1%E8%88%9E%E7%BE%8E%E4%B8%8A%E4%BA%86%23) `98.9K 🔥` `NEW`
1. [金银又跌了](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E5%8F%88%E8%B7%8C%E4%BA%86%23) `95.6K 🔥` `NEW`
1. [美国打伊朗军费消耗强度为历史之最](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%89%93%E4%BC%8A%E6%9C%97%E5%86%9B%E8%B4%B9%E6%B6%88%E8%80%97%E5%BC%BA%E5%BA%A6%E4%B8%BA%E5%8E%86%E5%8F%B2%E4%B9%8B%E6%9C%80%23) `94.8K 🔥` `NEW`
1. [明日方舟音律联觉](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E9%9F%B3%E5%BE%8B%E8%81%94%E8%A7%89%23) `87.3K 🔥` `NEW`
1. [KSG 打野](https://s.weibo.com/weibo?q=%23KSG%20%E6%89%93%E9%87%8E%23) `81.9K 🔥` `NEW`
1. [Milkway澄清假赛](https://s.weibo.com/weibo?q=%23Milkway%E6%BE%84%E6%B8%85%E5%81%87%E8%B5%9B%23) `79.0K 🔥` `NEW`
1. [满岛光宣布再婚怀孕 (Mitsushima Hikaru announces remarriage and pregnancy)](https://s.weibo.com/weibo?q=%23%E6%BB%A1%E5%B2%9B%E5%85%89%E5%AE%A3%E5%B8%83%E5%86%8D%E5%A9%9A%E6%80%80%E5%AD%95%23) `77.7K 🔥` `NEW`
1. [张雪机车夺冠意味着什么](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%86%A0%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `74.6K 🔥` `NEW`
1. [猫是最能忍痛的动物之一](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E6%98%AF%E6%9C%80%E8%83%BD%E5%BF%8D%E7%97%9B%E7%9A%84%E5%8A%A8%E7%89%A9%E4%B9%8B%E4%B8%80%23) `72.2K 🔥` `NEW`
1. [小狗不洗头也不会油](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E4%B8%8D%E6%B4%97%E5%A4%B4%E4%B9%9F%E4%B8%8D%E4%BC%9A%E6%B2%B9%23) `70.6K 🔥` `NEW`
1. [当数学课走神了一分钟](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%95%B0%E5%AD%A6%E8%AF%BE%E8%B5%B0%E7%A5%9E%E4%BA%86%E4%B8%80%E5%88%86%E9%92%9F%23) `70.3K 🔥` `NEW`
1. [咪 趁人不在家悄悄把地拖了](https://s.weibo.com/weibo?q=%23%E5%92%AA%20%E8%B6%81%E4%BA%BA%E4%B8%8D%E5%9C%A8%E5%AE%B6%E6%82%84%E6%82%84%E6%8A%8A%E5%9C%B0%E6%8B%96%E4%BA%86%23) `70.2K 🔥` `NEW`
1. [身份证号的X到底咋读](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8F%B7%E7%9A%84X%E5%88%B0%E5%BA%95%E5%92%8B%E8%AF%BB%23) `1.1M 🔥` `+27%`
1. [广州暴雨市民发声](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E6%9A%B4%E9%9B%A8%E5%B8%82%E6%B0%91%E5%8F%91%E5%A3%B0%23) `176.5K 🔥` `+184%`
1. [2026中国网络媒体论坛 (2026 China Online Media Forum)](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E5%AA%92%E4%BD%93%E8%AE%BA%E5%9D%9B%23) `590.1K 🔥`
1. [研究发现炎症后身体会埋下癌症种子](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E5%8F%91%E7%8E%B0%E7%82%8E%E7%97%87%E5%90%8E%E8%BA%AB%E4%BD%93%E4%BC%9A%E5%9F%8B%E4%B8%8B%E7%99%8C%E7%97%87%E7%A7%8D%E5%AD%90%23) `115.0K 🔥`
1. [郑丽文率团来访](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E7%8E%87%E5%9B%A2%E6%9D%A5%E8%AE%BF%23) `87.5K 🔥`
1. [9块9咖啡包月一杯又一杯 (9 yuan 9 coffee package monthly cup after cup)](https://s.weibo.com/weibo?q=%239%E5%9D%979%E5%92%96%E5%95%A1%E5%8C%85%E6%9C%88%E4%B8%80%E6%9D%AF%E5%8F%88%E4%B8%80%E6%9D%AF%23) `258.2K 🔥` `-64%`
1. [保姆上门当日病人死亡被索赔130万 (The patient died on the day the nanny came to visit and was compensated with a compensation of 1.3 million yuan.)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E4%B8%8A%E9%97%A8%E5%BD%93%E6%97%A5%E7%97%85%E4%BA%BA%E6%AD%BB%E4%BA%A1%E8%A2%AB%E7%B4%A2%E8%B5%94130%E4%B8%87%23) `187.0K 🔥` `-54%`
1. [李荣浩说不需要赔偿](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E8%AF%B4%E4%B8%8D%E9%9C%80%E8%A6%81%E8%B5%94%E5%81%BF%23) `184.2K 🔥` `-23%`
1. [五哈6阵容官宣 (Wuha 6 lineup official announcement)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%886%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `179.6K 🔥` `-84%`
1. [白日提灯播放指数超逐玉](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E6%92%AD%E6%94%BE%E6%8C%87%E6%95%B0%E8%B6%85%E9%80%90%E7%8E%89%23) `107.9K 🔥` `-61%`
1. [女生橘子洲拍摄旱地拔葱震撼大片](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%A9%98%E5%AD%90%E6%B4%B2%E6%8B%8D%E6%91%84%E6%97%B1%E5%9C%B0%E6%8B%94%E8%91%B1%E9%9C%87%E6%92%BC%E5%A4%A7%E7%89%87%23) `100.9K 🔥` `-64%`
1. [薛之谦 (Joker Xue)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%23) `94.1K 🔥` `-34%`
1. [王者荣耀大乔新皮肤](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%A4%A7%E4%B9%94%E6%96%B0%E7%9A%AE%E8%82%A4%23) `79.1K 🔥` `-64%`
1. [时代少年团 卫龙](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%8D%AB%E9%BE%99%23) `69.6K 🔥` `-67%`
1. [江山大同阵容官宣](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `67.2K 🔥` `-71%`

Updated at 2026-03-30 13:49:34

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
