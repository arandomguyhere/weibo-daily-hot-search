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

1. [儿子一家去世老人骑行30年治愈自己 (His son's family passed away and the old man healed himself by cycling for 30 years)](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E4%B8%80%E5%AE%B6%E5%8E%BB%E4%B8%96%E8%80%81%E4%BA%BA%E9%AA%91%E8%A1%8C30%E5%B9%B4%E6%B2%BB%E6%84%88%E8%87%AA%E5%B7%B1%23) `624.9K 🔥` `NEW`
1. [D3665列车被困隧道3小时](https://s.weibo.com/weibo?q=%23D3665%E5%88%97%E8%BD%A6%E8%A2%AB%E5%9B%B0%E9%9A%A7%E9%81%933%E5%B0%8F%E6%97%B6%23) `553.8K 🔥` `NEW`
1. [张凌赫摄影师 撕拉片不是P的](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%91%84%E5%BD%B1%E5%B8%88%20%E6%92%95%E6%8B%89%E7%89%87%E4%B8%8D%E6%98%AFP%E7%9A%84%23) `219.6K 🔥` `NEW`
1. [对粉底液将军反感是上纲上线吗](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%E5%8F%8D%E6%84%9F%E6%98%AF%E4%B8%8A%E7%BA%B2%E4%B8%8A%E7%BA%BF%E5%90%97%23) `203.8K 🔥` `NEW`
1. [keria冠军皮肤萨勒芬妮](https://s.weibo.com/weibo?q=%23keria%E5%86%A0%E5%86%9B%E7%9A%AE%E8%82%A4%E8%90%A8%E5%8B%92%E8%8A%AC%E5%A6%AE%23) `202.6K 🔥` `NEW`
1. [伊朗公布击毁美军E3预警机卫星图](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%AC%E5%B8%83%E5%87%BB%E6%AF%81%E7%BE%8E%E5%86%9BE3%E9%A2%84%E8%AD%A6%E6%9C%BA%E5%8D%AB%E6%98%9F%E5%9B%BE%23) `201.7K 🔥` `NEW`
1. [小孩大哭猫咪边哄边擦眼泪](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A9%E5%A4%A7%E5%93%AD%E7%8C%AB%E5%92%AA%E8%BE%B9%E5%93%84%E8%BE%B9%E6%93%A6%E7%9C%BC%E6%B3%AA%23) `200.9K 🔥` `NEW`
1. [广州高铁 (Guangzhou High Speed ​​Rail)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E9%AB%98%E9%93%81%23) `630.9K 🔥` `+30%`
1. [很多食物都是面朝下更好吃](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E9%A3%9F%E7%89%A9%E9%83%BD%E6%98%AF%E9%9D%A2%E6%9C%9D%E4%B8%8B%E6%9B%B4%E5%A5%BD%E5%90%83%23) `621.7K 🔥` `+60%`
1. [郝蕾说的是谁好难猜啊 (It’s hard to guess who Hao Lei is talking about.)](https://s.weibo.com/weibo?q=%23%E9%83%9D%E8%95%BE%E8%AF%B4%E7%9A%84%E6%98%AF%E8%B0%81%E5%A5%BD%E9%9A%BE%E7%8C%9C%E5%95%8A%23) `616.8K 🔥` `+59%`
1. [狼队对战KSG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98KSG%23) `612.4K 🔥` `+60%`
1. [美军战斧导弹消耗速度震惊五角大楼](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%88%98%E6%96%A7%E5%AF%BC%E5%BC%B9%E6%B6%88%E8%80%97%E9%80%9F%E5%BA%A6%E9%9C%87%E6%83%8A%E4%BA%94%E8%A7%92%E5%A4%A7%E6%A5%BC%23) `607.1K 🔥` `+54%`
1. [仙逆 (Immortal Ni)](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `601.1K 🔥` `+55%`
1. [迪丽热巴演技](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%BC%94%E6%8A%80%23) `592.5K 🔥` `+52%`
1. [氯雷他定](https://s.weibo.com/weibo?q=%23%E6%B0%AF%E9%9B%B7%E4%BB%96%E5%AE%9A%23) `587.3K 🔥` `+52%`
1. [汪峰演唱会 (Wang Feng concert)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%E6%BC%94%E5%94%B1%E4%BC%9A%23) `584.5K 🔥` `+51%`
1. [NCT哭了](https://s.weibo.com/weibo?q=%23NCT%E5%93%AD%E4%BA%86%23) `581.6K 🔥` `+49%`
1. [鸭嘴钳是无数女性做检查时的噩梦](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E5%98%B4%E9%92%B3%E6%98%AF%E6%97%A0%E6%95%B0%E5%A5%B3%E6%80%A7%E5%81%9A%E6%A3%80%E6%9F%A5%E6%97%B6%E7%9A%84%E5%99%A9%E6%A2%A6%23) `574.8K 🔥` `+49%`
1. [单依纯 舞娘](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%20%E8%88%9E%E5%A8%98%23) `572.0K 🔥` `+48%`
1. [薛之谦演唱会 (Joker Xue Concert)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `564.1K 🔥` `+46%`
1. [母亲隐瞒近40岁女儿已婚骗17万彩礼 (Mother concealed that her nearly 40-year-old daughter was married and defrauded her of 170,000 yuan in gift money)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E9%9A%90%E7%9E%92%E8%BF%9140%E5%B2%81%E5%A5%B3%E5%84%BF%E5%B7%B2%E5%A9%9A%E9%AA%9717%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `559.6K 🔥` `+45%`
1. [严浩翔分享歌曲 (Yan Haoxiang shares songs)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%88%86%E4%BA%AB%E6%AD%8C%E6%9B%B2%23) `553.1K 🔥` `+44%`
1. [李荣浩4连质问单依纯 (Li Ronghao questioned Shan Yichun 4 times in a row)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A94%E8%BF%9E%E8%B4%A8%E9%97%AE%E5%8D%95%E4%BE%9D%E7%BA%AF%23) `7.3M 🔥`
1. [雀巢12吨巧克力被盗 (12 tons of Nestlé chocolate stolen)](https://s.weibo.com/weibo?q=%23%E9%9B%80%E5%B7%A212%E5%90%A8%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%A2%AB%E7%9B%97%23) `1.1M 🔥`
1. [内存条价格出现断崖式下跌](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E6%9D%A1%E4%BB%B7%E6%A0%BC%E5%87%BA%E7%8E%B0%E6%96%AD%E5%B4%96%E5%BC%8F%E4%B8%8B%E8%B7%8C%23) `761.1K 🔥`
1. [世界最大直径高铁盾构机上岸 (The world's largest diameter high-speed rail shield machine comes ashore)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9C%80%E5%A4%A7%E7%9B%B4%E5%BE%84%E9%AB%98%E9%93%81%E7%9B%BE%E6%9E%84%E6%9C%BA%E4%B8%8A%E5%B2%B8%23) `634.1K 🔥`
1. [儿子蛇缠腰父亲涂抹符水圈住疱疹](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E8%9B%87%E7%BC%A0%E8%85%B0%E7%88%B6%E4%BA%B2%E6%B6%82%E6%8A%B9%E7%AC%A6%E6%B0%B4%E5%9C%88%E4%BD%8F%E7%96%B1%E7%96%B9%23) `297.5K 🔥` `-23%`
1. [孙颖莎瘦了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%98%A6%E4%BA%86%23) `270.3K 🔥` `-30%`
1. [带状疱疹72小时内一定要做这件事 (This must be done within 72 hours of treating shingles)](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E7%8A%B6%E7%96%B1%E7%96%B972%E5%B0%8F%E6%97%B6%E5%86%85%E4%B8%80%E5%AE%9A%E8%A6%81%E5%81%9A%E8%BF%99%E4%BB%B6%E4%BA%8B%23) `204.9K 🔥` `-47%`
1. [邪恶砂糖橘 窝囊西红柿](https://s.weibo.com/weibo?q=%23%E9%82%AA%E6%81%B6%E7%A0%82%E7%B3%96%E6%A9%98%20%E7%AA%9D%E5%9B%8A%E8%A5%BF%E7%BA%A2%E6%9F%BF%23) `204.8K 🔥` `-46%`
1. [奈雪的茶没人喝了 (No one drinks Nayuki’s tea anymore)](https://s.weibo.com/weibo?q=%23%E5%A5%88%E9%9B%AA%E7%9A%84%E8%8C%B6%E6%B2%A1%E4%BA%BA%E5%96%9D%E4%BA%86%23) `204.6K 🔥` `-47%`
1. [一直以为保温毯是披在身上的 (I always thought that thermal blankets were worn on the body)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E4%BB%A5%E4%B8%BA%E4%BF%9D%E6%B8%A9%E6%AF%AF%E6%98%AF%E6%8A%AB%E5%9C%A8%E8%BA%AB%E4%B8%8A%E7%9A%84%23) `204.5K 🔥` `-47%`
1. [张凌赫谈负面评价](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%B0%88%E8%B4%9F%E9%9D%A2%E8%AF%84%E4%BB%B7%23) `204.3K 🔥` `-47%`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `204.1K 🔥` `-47%`
1. [一二线城市兴起周末情侣](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%8C%E7%BA%BF%E5%9F%8E%E5%B8%82%E5%85%B4%E8%B5%B7%E5%91%A8%E6%9C%AB%E6%83%85%E4%BE%A3%23) `203.9K 🔥` `-47%`
1. [周深樱花树下站谁都好看 (Everyone looks good standing under Zhou Shen’s cherry blossom tree)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%A8%B1%E8%8A%B1%E6%A0%91%E4%B8%8B%E7%AB%99%E8%B0%81%E9%83%BD%E5%A5%BD%E7%9C%8B%23) `203.6K 🔥` `-47%`
1. [广州冰雹 (Guangzhou hail)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%86%B0%E9%9B%B9%23) `203.3K 🔥` `-47%`
1. [陈牧驰回应与吴楚一相关争议 (Chen Muchi responded to the controversy related to Wu Chuyi)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%89%A7%E9%A9%B0%E5%9B%9E%E5%BA%94%E4%B8%8E%E5%90%B4%E6%A5%9A%E4%B8%80%E7%9B%B8%E5%85%B3%E4%BA%89%E8%AE%AE%23) `203.1K 🔥` `-47%`
1. [巧克力大盗](https://s.weibo.com/weibo?q=%23%E5%B7%A7%E5%85%8B%E5%8A%9B%E5%A4%A7%E7%9B%97%23) `203.0K 🔥` `-47%`
1. [韩网曝Ruler税务问题](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E6%9B%9DRuler%E7%A8%8E%E5%8A%A1%E9%97%AE%E9%A2%98%23) `202.8K 🔥` `-47%`
1. [男子突发心梗离世3天前还跑马拉松 (Man ran marathon 3 days before he died of sudden heart attack)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%AA%81%E5%8F%91%E5%BF%83%E6%A2%97%E7%A6%BB%E4%B8%963%E5%A4%A9%E5%89%8D%E8%BF%98%E8%B7%91%E9%A9%AC%E6%8B%89%E6%9D%BE%23) `202.4K 🔥` `-47%`
1. [万千惠选三宝的歌不担心版权](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E9%80%89%E4%B8%89%E5%AE%9D%E7%9A%84%E6%AD%8C%E4%B8%8D%E6%8B%85%E5%BF%83%E7%89%88%E6%9D%83%23) `202.1K 🔥` `-47%`
1. [奶茶店点一杯不够起送](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E8%8C%B6%E5%BA%97%E7%82%B9%E4%B8%80%E6%9D%AF%E4%B8%8D%E5%A4%9F%E8%B5%B7%E9%80%81%23) `202.0K 🔥` `-47%`
1. [意大利罗马爆发大规模反战示威游行](https://s.weibo.com/weibo?q=%23%E6%84%8F%E5%A4%A7%E5%88%A9%E7%BD%97%E9%A9%AC%E7%88%86%E5%8F%91%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%8F%8D%E6%88%98%E7%A4%BA%E5%A8%81%E6%B8%B8%E8%A1%8C%23) `201.6K 🔥` `-47%`
1. [95后本科毕业生当掏粪工月入3万](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E6%9C%AC%E7%A7%91%E6%AF%95%E4%B8%9A%E7%94%9F%E5%BD%93%E6%8E%8F%E7%B2%AA%E5%B7%A5%E6%9C%88%E5%85%A53%E4%B8%87%23) `201.4K 🔥` `-47%`
1. [女生半年不吃主食瘦50斤胆囊被切 (Girl lost 50 pounds by not eating staple food for half a year and had her gallbladder removed)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%8D%8A%E5%B9%B4%E4%B8%8D%E5%90%83%E4%B8%BB%E9%A3%9F%E7%98%A650%E6%96%A4%E8%83%86%E5%9B%8A%E8%A2%AB%E5%88%87%23) `201.3K 🔥` `-47%`
1. [酒类女性消费者崛起](https://s.weibo.com/weibo?q=%23%E9%85%92%E7%B1%BB%E5%A5%B3%E6%80%A7%E6%B6%88%E8%B4%B9%E8%80%85%E5%B4%9B%E8%B5%B7%23) `201.1K 🔥` `-48%`
1. [美军一E3预警机在沙特基地遭袭受损](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E4%B8%80E3%E9%A2%84%E8%AD%A6%E6%9C%BA%E5%9C%A8%E6%B2%99%E7%89%B9%E5%9F%BA%E5%9C%B0%E9%81%AD%E8%A2%AD%E5%8F%97%E6%8D%9F%23) `200.7K 🔥` `-47%`
1. [陈牧驰晒还钱截图](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%89%A7%E9%A9%B0%E6%99%92%E8%BF%98%E9%92%B1%E6%88%AA%E5%9B%BE%23) `200.5K 🔥` `-47%`

Updated at 2026-03-29 19:59:20

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
