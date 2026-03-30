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

1. [退18.8万元彩礼一家人现状 (The family’s current situation after receiving a 188,000 yuan betrothal gift refund)](https://s.weibo.com/weibo?q=%23%E9%80%8018.8%E4%B8%87%E5%85%83%E5%BD%A9%E7%A4%BC%E4%B8%80%E5%AE%B6%E4%BA%BA%E7%8E%B0%E7%8A%B6%23) `1.1M 🔥` `NEW`
1. [黑龙江海林楼房坍塌致7死](https://s.weibo.com/weibo?q=%23%E9%BB%91%E9%BE%99%E6%B1%9F%E6%B5%B7%E6%9E%97%E6%A5%BC%E6%88%BF%E5%9D%8D%E5%A1%8C%E8%87%B47%E6%AD%BB%23) `342.7K 🔥` `NEW`
1. [零活一下万物新生](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E6%B4%BB%E4%B8%80%E4%B8%8B%E4%B8%87%E7%89%A9%E6%96%B0%E7%94%9F%23) `206.0K 🔥` `NEW`
1. [杨幂唐嫣又撞角色了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%94%90%E5%AB%A3%E5%8F%88%E6%92%9E%E8%A7%92%E8%89%B2%E4%BA%86%23) `195.7K 🔥` `NEW`
1. [女生被14岁男同学杀害全家停摆](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%A2%AB14%E5%B2%81%E7%94%B7%E5%90%8C%E5%AD%A6%E6%9D%80%E5%AE%B3%E5%85%A8%E5%AE%B6%E5%81%9C%E6%91%86%23) `139.9K 🔥` `NEW`
1. [金钟国回应突发疾病](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%92%9F%E5%9B%BD%E5%9B%9E%E5%BA%94%E7%AA%81%E5%8F%91%E7%96%BE%E7%97%85%23) `115.3K 🔥` `NEW`
1. [你有什么习惯坚持了21年](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%9C%89%E4%BB%80%E4%B9%88%E4%B9%A0%E6%83%AF%E5%9D%9A%E6%8C%81%E4%BA%8621%E5%B9%B4%23) `114.4K 🔥` `NEW`
1. [双相情感障碍到底是种什么病](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E7%9B%B8%E6%83%85%E6%84%9F%E9%9A%9C%E7%A2%8D%E5%88%B0%E5%BA%95%E6%98%AF%E7%A7%8D%E4%BB%80%E4%B9%88%E7%97%85%23) `107.9K 🔥` `NEW`
1. [严浩翔把面粉当散粉用](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%8A%8A%E9%9D%A2%E7%B2%89%E5%BD%93%E6%95%A3%E7%B2%89%E7%94%A8%23) `95.4K 🔥` `NEW`
1. [金钟国患病两天无法进食](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%92%9F%E5%9B%BD%E6%82%A3%E7%97%85%E4%B8%A4%E5%A4%A9%E6%97%A0%E6%B3%95%E8%BF%9B%E9%A3%9F%23) `90.8K 🔥` `NEW`
1. [广东一动物园狮子淋雨发型不塌 (A lion in a zoo in Guangdong keeps his hair in the rain)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E4%B8%80%E5%8A%A8%E7%89%A9%E5%9B%AD%E7%8B%AE%E5%AD%90%E6%B7%8B%E9%9B%A8%E5%8F%91%E5%9E%8B%E4%B8%8D%E5%A1%8C%23) `90.1K 🔥` `NEW`
1. [森林北回应体制内传闻](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E5%8C%97%E5%9B%9E%E5%BA%94%E4%BD%93%E5%88%B6%E5%86%85%E4%BC%A0%E9%97%BB%23) `88.7K 🔥` `NEW`
1. [从睁眼就开始干化妆了](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E7%9D%81%E7%9C%BC%E5%B0%B1%E5%BC%80%E5%A7%8B%E5%B9%B2%E5%8C%96%E5%A6%86%E4%BA%86%23) `87.1K 🔥` `NEW`
1. [郑丽文回应4月访陆](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E5%9B%9E%E5%BA%944%E6%9C%88%E8%AE%BF%E9%99%86%23) `85.9K 🔥` `NEW`
1. [AI脱口秀女演员被男性私信搭讪](https://s.weibo.com/weibo?q=%23AI%E8%84%B1%E5%8F%A3%E7%A7%80%E5%A5%B3%E6%BC%94%E5%91%98%E8%A2%AB%E7%94%B7%E6%80%A7%E7%A7%81%E4%BF%A1%E6%90%AD%E8%AE%AA%23) `82.0K 🔥` `NEW`
1. [理想马赫100芯片](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E9%A9%AC%E8%B5%AB100%E8%8A%AF%E7%89%87%23) `80.5K 🔥` `NEW`
1. [西安交大一校友为母校捐赠1.3亿](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%BA%A4%E5%A4%A7%E4%B8%80%E6%A0%A1%E5%8F%8B%E4%B8%BA%E6%AF%8D%E6%A0%A1%E6%8D%90%E8%B5%A01.3%E4%BA%BF%23) `80.2K 🔥` `NEW`
1. [KPL十周年快闪城市官宣](https://s.weibo.com/weibo?q=%23KPL%E5%8D%81%E5%91%A8%E5%B9%B4%E5%BF%AB%E9%97%AA%E5%9F%8E%E5%B8%82%E5%AE%98%E5%AE%A3%23) `77.6K 🔥` `NEW`
1. [孙俪演出被打耳光的真实反应](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E6%BC%94%E5%87%BA%E8%A2%AB%E6%89%93%E8%80%B3%E5%85%89%E7%9A%84%E7%9C%9F%E5%AE%9E%E5%8F%8D%E5%BA%94%23) `75.3K 🔥` `NEW`
1. [小猫给主人哄成啥样了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%BB%99%E4%B8%BB%E4%BA%BA%E5%93%84%E6%88%90%E5%95%A5%E6%A0%B7%E4%BA%86%23) `72.3K 🔥` `NEW`
1. [没雪就蹭通勤的浪 (If there is no snow, the commute will be a waste of time)](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E9%9B%AA%E5%B0%B1%E8%B9%AD%E9%80%9A%E5%8B%A4%E7%9A%84%E6%B5%AA%23) `72.2K 🔥` `NEW`
1. [狗 摸我可以但不能白摸](https://s.weibo.com/weibo?q=%23%E7%8B%97%20%E6%91%B8%E6%88%91%E5%8F%AF%E4%BB%A5%E4%BD%86%E4%B8%8D%E8%83%BD%E7%99%BD%E6%91%B8%23) `67.3K 🔥` `NEW`
1. [暴雨天深圳机场再次sorry全世界](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E5%A4%A9%E6%B7%B1%E5%9C%B3%E6%9C%BA%E5%9C%BA%E5%86%8D%E6%AC%A1sorry%E5%85%A8%E4%B8%96%E7%95%8C%23) `66.6K 🔥` `NEW`
1. [感受一下广州超级大暴雨 (Feel the super heavy rain in Guangzhou)](https://s.weibo.com/weibo?q=%23%E6%84%9F%E5%8F%97%E4%B8%80%E4%B8%8B%E5%B9%BF%E5%B7%9E%E8%B6%85%E7%BA%A7%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `806.2K 🔥` `+651%`
1. [迪丽热巴陈飞宇同框被吐槽有年龄感](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E5%90%8C%E6%A1%86%E8%A2%AB%E5%90%90%E6%A7%BD%E6%9C%89%E5%B9%B4%E9%BE%84%E6%84%9F%23) `534.1K 🔥` `+132%`
1. [2026中国网络媒体论坛 (2026 China Online Media Forum)](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E5%AA%92%E4%BD%93%E8%AE%BA%E5%9D%9B%23) `674.7K 🔥`
1. [我跳一天200他坐一天400](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%B7%B3%E4%B8%80%E5%A4%A9200%E4%BB%96%E5%9D%90%E4%B8%80%E5%A4%A9400%23) `274.5K 🔥`
1. [瑞幸新品椰子蛋遭网友吐槽](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E6%96%B0%E5%93%81%E6%A4%B0%E5%AD%90%E8%9B%8B%E9%81%AD%E7%BD%91%E5%8F%8B%E5%90%90%E6%A7%BD%23) `195.8K 🔥`
1. [刘学义资源](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E8%B5%84%E6%BA%90%23) `115.5K 🔥`
1. [耗糖最快的动作](https://s.weibo.com/weibo?q=%23%E8%80%97%E7%B3%96%E6%9C%80%E5%BF%AB%E7%9A%84%E5%8A%A8%E4%BD%9C%23) `93.4K 🔥`
1. [薛之谦 (Joker Xue)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%23) `93.0K 🔥`
1. [金银又跌了](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E5%8F%88%E8%B7%8C%E4%BA%86%23) `86.8K 🔥`
1. [满岛光宣布再婚怀孕 (Mitsushima Hikaru announces remarriage and pregnancy)](https://s.weibo.com/weibo?q=%23%E6%BB%A1%E5%B2%9B%E5%85%89%E5%AE%A3%E5%B8%83%E5%86%8D%E5%A9%9A%E6%80%80%E5%AD%95%23) `82.6K 🔥`
1. [身份证号的X到底咋读](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8F%B7%E7%9A%84X%E5%88%B0%E5%BA%95%E5%92%8B%E8%AF%BB%23) `146.1K 🔥` `-86%`
1. [境外间谍机关渗透我国粮食领域 (Overseas spy agencies infiltrate my country’s food sector)](https://s.weibo.com/weibo?q=%23%E5%A2%83%E5%A4%96%E9%97%B4%E8%B0%8D%E6%9C%BA%E5%85%B3%E6%B8%97%E9%80%8F%E6%88%91%E5%9B%BD%E7%B2%AE%E9%A3%9F%E9%A2%86%E5%9F%9F%23) `142.8K 🔥` `-49%`
1. [庞麦郎 华晨宇](https://s.weibo.com/weibo?q=%23%E5%BA%9E%E9%BA%A6%E9%83%8E%20%E5%8D%8E%E6%99%A8%E5%AE%87%23) `141.7K 🔥` `-24%`
1. [李荣浩说不需要赔偿](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E8%AF%B4%E4%B8%8D%E9%9C%80%E8%A6%81%E8%B5%94%E5%81%BF%23) `140.8K 🔥` `-24%`
1. [垫底辣孩的脸怎么了](https://s.weibo.com/weibo?q=%23%E5%9E%AB%E5%BA%95%E8%BE%A3%E5%AD%A9%E7%9A%84%E8%84%B8%E6%80%8E%E4%B9%88%E4%BA%86%23) `138.7K 🔥` `-24%`
1. [全红婵称跳水从喜欢变成了任务](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E7%A7%B0%E8%B7%B3%E6%B0%B4%E4%BB%8E%E5%96%9C%E6%AC%A2%E5%8F%98%E6%88%90%E4%BA%86%E4%BB%BB%E5%8A%A1%23) `138.1K 🔥` `-22%`
1. [严浩翔新歌Fly开始预约](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%96%B0%E6%AD%8CFly%E5%BC%80%E5%A7%8B%E9%A2%84%E7%BA%A6%23) `136.3K 🔥` `-52%`
1. [杨幂新剧演冯太后 (Yang Mi plays Empress Dowager Feng in new drama)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%96%B0%E5%89%A7%E6%BC%94%E5%86%AF%E5%A4%AA%E5%90%8E%23) `135.3K 🔥` `-25%`
1. [广州下暴雨高架桥变高架河](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E4%B8%8B%E6%9A%B4%E9%9B%A8%E9%AB%98%E6%9E%B6%E6%A1%A5%E5%8F%98%E9%AB%98%E6%9E%B6%E6%B2%B3%23) `134.8K 🔥` `-48%`
1. [华晨宇工作室 冷饭又炒](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E5%86%B7%E9%A5%AD%E5%8F%88%E7%82%92%23) `132.3K 🔥` `-26%`
1. [豆包谈DeepSeek频繁崩溃](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E8%B0%88DeepSeek%E9%A2%91%E7%B9%81%E5%B4%A9%E6%BA%83%23) `116.6K 🔥` `-40%`
1. [五哈6阵容官宣 (Wuha 6 lineup official announcement)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%886%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `96.6K 🔥` `-46%`
1. [掘金勇士冲突](https://s.weibo.com/weibo?q=%23%E6%8E%98%E9%87%91%E5%8B%87%E5%A3%AB%E5%86%B2%E7%AA%81%23) `90.5K 🔥` `-49%`
1. [保姆上门当日病人死亡被索赔130万 (The patient died on the day the nanny came to visit and was compensated with a compensation of 1.3 million yuan.)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E4%B8%8A%E9%97%A8%E5%BD%93%E6%97%A5%E7%97%85%E4%BA%BA%E6%AD%BB%E4%BA%A1%E8%A2%AB%E7%B4%A2%E8%B5%94130%E4%B8%87%23) `83.3K 🔥` `-55%`
1. [研究发现炎症后身体会埋下癌症种子 (Study finds inflammation can bury cancer seeds in body)](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E5%8F%91%E7%8E%B0%E7%82%8E%E7%97%87%E5%90%8E%E8%BA%AB%E4%BD%93%E4%BC%9A%E5%9F%8B%E4%B8%8B%E7%99%8C%E7%97%87%E7%A7%8D%E5%AD%90%23) `69.7K 🔥` `-39%`
1. [锤娜丽莎本名嵇嘉禾](https://s.weibo.com/weibo?q=%23%E9%94%A4%E5%A8%9C%E4%B8%BD%E8%8E%8E%E6%9C%AC%E5%90%8D%E5%B5%87%E5%98%89%E7%A6%BE%23) `68.8K 🔥` `-32%`
1. [床上最脏的一个地方很多人从没洗过 (The dirtiest place on the bed is one that many people never wash)](https://s.weibo.com/weibo?q=%23%E5%BA%8A%E4%B8%8A%E6%9C%80%E8%84%8F%E7%9A%84%E4%B8%80%E4%B8%AA%E5%9C%B0%E6%96%B9%E5%BE%88%E5%A4%9A%E4%BA%BA%E4%BB%8E%E6%B2%A1%E6%B4%97%E8%BF%87%23) `67.6K 🔥` `-91%`
1. [明日方舟音律联觉](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E9%9F%B3%E5%BE%8B%E8%81%94%E8%A7%89%23) `65.4K 🔥` `-25%`

Updated at 2026-03-30 15:11:13

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
