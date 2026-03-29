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

1. [广州高铁 (Guangzhou High Speed ​​Rail)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E9%AB%98%E9%93%81%23) `454.2K 🔥` `NEW`
1. [我家那小子超话好多人啊](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%E8%B6%85%E8%AF%9D%E5%A5%BD%E5%A4%9A%E4%BA%BA%E5%95%8A%23) `360.1K 🔥` `NEW`
1. [狼队对战KSG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98KSG%23) `173.1K 🔥` `NEW`
1. [黑龙江海林楼房凌晨坍塌居民熟睡中](https://s.weibo.com/weibo?q=%23%E9%BB%91%E9%BE%99%E6%B1%9F%E6%B5%B7%E6%9E%97%E6%A5%BC%E6%88%BF%E5%87%8C%E6%99%A8%E5%9D%8D%E5%A1%8C%E5%B1%85%E6%B0%91%E7%86%9F%E7%9D%A1%E4%B8%AD%23) `126.2K 🔥` `NEW`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `107.4K 🔥` `NEW`
1. [美军一E3预警机在沙特基地遭袭受损](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E4%B8%80E3%E9%A2%84%E8%AD%A6%E6%9C%BA%E5%9C%A8%E6%B2%99%E7%89%B9%E5%9F%BA%E5%9C%B0%E9%81%AD%E8%A2%AD%E5%8F%97%E6%8D%9F%23) `97.6K 🔥` `NEW`
1. [拼豆你原来这么实用](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E8%B1%86%E4%BD%A0%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B9%88%E5%AE%9E%E7%94%A8%23) `89.8K 🔥` `NEW`
1. [孙颖莎王曼昱首日出战](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%9B%BC%E6%98%B1%E9%A6%96%E6%97%A5%E5%87%BA%E6%88%98%23) `89.1K 🔥` `NEW`
1. [谢娜在张杰演唱会亲了秦岚杜华](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9C%A8%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%B2%E4%BA%86%E7%A7%A6%E5%B2%9A%E6%9D%9C%E5%8D%8E%23) `73.8K 🔥` `NEW`
1. [NCT演唱会](https://s.weibo.com/weibo?q=%23NCT%E6%BC%94%E5%94%B1%E4%BC%9A%23) `72.8K 🔥` `NEW`
1. [男子突发心梗离世3天前还跑马拉松 (Man ran marathon 3 days before he died of sudden heart attack)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%AA%81%E5%8F%91%E5%BF%83%E6%A2%97%E7%A6%BB%E4%B8%963%E5%A4%A9%E5%89%8D%E8%BF%98%E8%B7%91%E9%A9%AC%E6%8B%89%E6%9D%BE%23) `68.0K 🔥` `NEW`
1. [女生半年不吃主食瘦50斤胆囊被切](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%8D%8A%E5%B9%B4%E4%B8%8D%E5%90%83%E4%B8%BB%E9%A3%9F%E7%98%A650%E6%96%A4%E8%83%86%E5%9B%8A%E8%A2%AB%E5%88%87%23) `67.5K 🔥` `NEW`
1. [爱情是对母爱的拙劣模仿](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E6%98%AF%E5%AF%B9%E6%AF%8D%E7%88%B1%E7%9A%84%E6%8B%99%E5%8A%A3%E6%A8%A1%E4%BB%BF%23) `65.0K 🔥` `NEW`
1. [迪丽热巴演技](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%BC%94%E6%8A%80%23) `443.7K 🔥` `+27%`
1. [李荣浩4连质问单依纯 (Li Ronghao questioned Shan Yichun 4 times in a row)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A94%E8%BF%9E%E8%B4%A8%E9%97%AE%E5%8D%95%E4%BE%9D%E7%BA%AF%23) `9.9M 🔥`
1. [雀巢12吨巧克力被盗 (12 tons of Nestlé chocolate stolen)](https://s.weibo.com/weibo?q=%23%E9%9B%80%E5%B7%A212%E5%90%A8%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%A2%AB%E7%9B%97%23) `1.1M 🔥`
1. [氯雷他定](https://s.weibo.com/weibo?q=%23%E6%B0%AF%E9%9B%B7%E4%BB%96%E5%AE%9A%23) `773.3K 🔥`
1. [世界最大直径高铁盾构机上岸 (The world's largest diameter high-speed rail shield machine comes ashore)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9C%80%E5%A4%A7%E7%9B%B4%E5%BE%84%E9%AB%98%E9%93%81%E7%9B%BE%E6%9E%84%E6%9C%BA%E4%B8%8A%E5%B2%B8%23) `613.7K 🔥`
1. [内存条价格出现断崖式下跌](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E6%9D%A1%E4%BB%B7%E6%A0%BC%E5%87%BA%E7%8E%B0%E6%96%AD%E5%B4%96%E5%BC%8F%E4%B8%8B%E8%B7%8C%23) `467.3K 🔥` `-21%`
1. [NCT哭了](https://s.weibo.com/weibo?q=%23NCT%E5%93%AD%E4%BA%86%23) `265.8K 🔥` `-25%`
1. [很多食物都是面朝下更好吃](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E9%A3%9F%E7%89%A9%E9%83%BD%E6%98%AF%E9%9D%A2%E6%9C%9D%E4%B8%8B%E6%9B%B4%E5%A5%BD%E5%90%83%23) `226.9K 🔥` `-58%`
1. [美军战斧导弹消耗速度震惊五角大楼](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%88%98%E6%96%A7%E5%AF%BC%E5%BC%B9%E6%B6%88%E8%80%97%E9%80%9F%E5%BA%A6%E9%9C%87%E6%83%8A%E4%BA%94%E8%A7%92%E5%A4%A7%E6%A5%BC%23) `225.4K 🔥` `-56%`
1. [奈雪的茶没人喝了 (No one drinks Nayuki’s tea anymore)](https://s.weibo.com/weibo?q=%23%E5%A5%88%E9%9B%AA%E7%9A%84%E8%8C%B6%E6%B2%A1%E4%BA%BA%E5%96%9D%E4%BA%86%23) `219.3K 🔥` `-53%`
1. [汪峰演唱会 (Wang Feng concert)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%E6%BC%94%E5%94%B1%E4%BC%9A%23) `207.1K 🔥` `-63%`
1. [鸭嘴钳是无数女性做检查时的噩梦](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E5%98%B4%E9%92%B3%E6%98%AF%E6%97%A0%E6%95%B0%E5%A5%B3%E6%80%A7%E5%81%9A%E6%A3%80%E6%9F%A5%E6%97%B6%E7%9A%84%E5%99%A9%E6%A2%A6%23) `203.4K 🔥` `-48%`
1. [郝蕾说的是谁好难猜啊 (It’s hard to guess who Hao Lei is talking about.)](https://s.weibo.com/weibo?q=%23%E9%83%9D%E8%95%BE%E8%AF%B4%E7%9A%84%E6%98%AF%E8%B0%81%E5%A5%BD%E9%9A%BE%E7%8C%9C%E5%95%8A%23) `198.0K 🔥` `-38%`
1. [母亲隐瞒近40岁女儿已婚骗17万彩礼 (Mother concealed that her nearly 40-year-old daughter was married and defrauded her of 170,000 yuan in gift money)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E9%9A%90%E7%9E%92%E8%BF%9140%E5%B2%81%E5%A5%B3%E5%84%BF%E5%B7%B2%E5%A9%9A%E9%AA%9717%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `179.0K 🔥` `-46%`
1. [单依纯 舞娘](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%20%E8%88%9E%E5%A8%98%23) `177.0K 🔥` `-72%`
1. [广州冰雹 (Guangzhou hail)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%86%B0%E9%9B%B9%23) `128.3K 🔥` `-59%`
1. [一二线城市兴起周末情侣](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%8C%E7%BA%BF%E5%9F%8E%E5%B8%82%E5%85%B4%E8%B5%B7%E5%91%A8%E6%9C%AB%E6%83%85%E4%BE%A3%23) `127.9K 🔥` `-70%`
1. [严浩翔分享歌曲 (Yan Haoxiang shares songs)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%88%86%E4%BA%AB%E6%AD%8C%E6%9B%B2%23) `125.5K 🔥` `-58%`
1. [儿子蛇缠腰父亲涂抹符水圈住疱疹](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E8%9B%87%E7%BC%A0%E8%85%B0%E7%88%B6%E4%BA%B2%E6%B6%82%E6%8A%B9%E7%AC%A6%E6%B0%B4%E5%9C%88%E4%BD%8F%E7%96%B1%E7%96%B9%23) `122.4K 🔥` `-59%`
1. [带状疱疹72小时内一定要做这件事](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E7%8A%B6%E7%96%B1%E7%96%B972%E5%B0%8F%E6%97%B6%E5%86%85%E4%B8%80%E5%AE%9A%E8%A6%81%E5%81%9A%E8%BF%99%E4%BB%B6%E4%BA%8B%23) `121.3K 🔥` `-59%`
1. [陈牧驰回应与吴楚一相关争议 (Chen Muchi responded to the controversy related to Wu Chuyi)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%89%A7%E9%A9%B0%E5%9B%9E%E5%BA%94%E4%B8%8E%E5%90%B4%E6%A5%9A%E4%B8%80%E7%9B%B8%E5%85%B3%E4%BA%89%E8%AE%AE%23) `117.9K 🔥` `-60%`
1. [巧克力大盗](https://s.weibo.com/weibo?q=%23%E5%B7%A7%E5%85%8B%E5%8A%9B%E5%A4%A7%E7%9B%97%23) `117.8K 🔥` `-60%`
1. [这一秒过火33集](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB33%E9%9B%86%23) `113.0K 🔥` `-63%`
1. [奶茶店点一杯不够起送](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E8%8C%B6%E5%BA%97%E7%82%B9%E4%B8%80%E6%9D%AF%E4%B8%8D%E5%A4%9F%E8%B5%B7%E9%80%81%23) `112.4K 🔥` `-62%`
1. [张凌赫谈负面评价](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%B0%88%E8%B4%9F%E9%9D%A2%E8%AF%84%E4%BB%B7%23) `104.7K 🔥` `-65%`
1. [泳池走路 减肥 (Swimming pool walking to lose weight)](https://s.weibo.com/weibo?q=%23%E6%B3%B3%E6%B1%A0%E8%B5%B0%E8%B7%AF%20%E5%87%8F%E8%82%A5%23) `95.9K 🔥` `-67%`
1. [陈牧驰晒还钱截图](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%89%A7%E9%A9%B0%E6%99%92%E8%BF%98%E9%92%B1%E6%88%AA%E5%9B%BE%23) `94.9K 🔥` `-68%`
1. [1米8男子遭家暴称我要离婚 (A 1.8-meter man was subjected to domestic violence and said he wanted a divorce)](https://s.weibo.com/weibo?q=%231%E7%B1%B38%E7%94%B7%E5%AD%90%E9%81%AD%E5%AE%B6%E6%9A%B4%E7%A7%B0%E6%88%91%E8%A6%81%E7%A6%BB%E5%A9%9A%23) `94.8K 🔥` `-69%`
1. [薛之谦演唱会 (Joker Xue Concert)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `93.6K 🔥` `-68%`
1. [春假](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%81%87%23) `87.9K 🔥` `-70%`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `82.3K 🔥` `-71%`
1. [70岁四川师傅炒牛肉蒜苔 (70-year-old Sichuan chef stir-fries beef with garlic sauce)](https://s.weibo.com/weibo?q=%2370%E5%B2%81%E5%9B%9B%E5%B7%9D%E5%B8%88%E5%82%85%E7%82%92%E7%89%9B%E8%82%89%E8%92%9C%E8%8B%94%23) `73.3K 🔥` `-75%`
1. [浪姐7唯一双金影后](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%907%E5%94%AF%E4%B8%80%E5%8F%8C%E9%87%91%E5%BD%B1%E5%90%8E%23) `73.3K 🔥` `-74%`
1. [DDR5内存大降价](https://s.weibo.com/weibo?q=%23DDR5%E5%86%85%E5%AD%98%E5%A4%A7%E9%99%8D%E4%BB%B7%23) `68.0K 🔥` `-77%`
1. [为什么没人跑去江苏看海](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B2%A1%E4%BA%BA%E8%B7%91%E5%8E%BB%E6%B1%9F%E8%8B%8F%E7%9C%8B%E6%B5%B7%23) `65.8K 🔥` `-77%`
1. [檀健次看镜头好温柔](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%9C%8B%E9%95%9C%E5%A4%B4%E5%A5%BD%E6%B8%A9%E6%9F%94%23) `65.7K 🔥` `-77%`
1. [张震岳收藏吐槽周杰伦的文章 (Zhang Chenyue collects articles complaining about Jay Chou)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9C%87%E5%B2%B3%E6%94%B6%E8%97%8F%E5%90%90%E6%A7%BD%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%9A%84%E6%96%87%E7%AB%A0%23) `65.7K 🔥` `-77%`

Updated at 2026-03-29 19:01:27

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
