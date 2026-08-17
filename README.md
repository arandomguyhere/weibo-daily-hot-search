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

1. [哈兰德 仅7次触球 (Haaland only touched the ball 7 times)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%20%E4%BB%857%E6%AC%A1%E8%A7%A6%E7%90%83%23) `271.5K 🔥` `NEW`
1. [劣迹艺人那艺娜活动被当场叫停](https://s.weibo.com/weibo?q=%23%E5%8A%A3%E8%BF%B9%E8%89%BA%E4%BA%BA%E9%82%A3%E8%89%BA%E5%A8%9C%E6%B4%BB%E5%8A%A8%E8%A2%AB%E5%BD%93%E5%9C%BA%E5%8F%AB%E5%81%9C%23) `263.1K 🔥` `NEW`
1. [内马尔握手遭无视](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E6%8F%A1%E6%89%8B%E9%81%AD%E6%97%A0%E8%A7%86%23) `192.0K 🔥` `NEW`
1. [DeepSeek正式涨价](https://s.weibo.com/weibo?q=%23DeepSeek%E6%AD%A3%E5%BC%8F%E6%B6%A8%E4%BB%B7%23) `190.2K 🔥` `NEW`
1. [唐九洲凭高考647分加入乐华](https://s.weibo.com/weibo?q=%23%E5%94%90%E4%B9%9D%E6%B4%B2%E5%87%AD%E9%AB%98%E8%80%83647%E5%88%86%E5%8A%A0%E5%85%A5%E4%B9%90%E5%8D%8E%23) `152.7K 🔥` `NEW`
1. [龙餐馆原型称每天都可能被死神点名](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E5%8E%9F%E5%9E%8B%E7%A7%B0%E6%AF%8F%E5%A4%A9%E9%83%BD%E5%8F%AF%E8%83%BD%E8%A2%AB%E6%AD%BB%E7%A5%9E%E7%82%B9%E5%90%8D%23) `138.6K 🔥` `NEW`
1. [吴艳妮示意中断比赛被出示黄牌](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE%E7%A4%BA%E6%84%8F%E4%B8%AD%E6%96%AD%E6%AF%94%E8%B5%9B%E8%A2%AB%E5%87%BA%E7%A4%BA%E9%BB%84%E7%89%8C%23) `118.1K 🔥` `NEW`
1. [邓紫棋分享两个近几年的发现](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E5%88%86%E4%BA%AB%E4%B8%A4%E4%B8%AA%E8%BF%91%E5%87%A0%E5%B9%B4%E7%9A%84%E5%8F%91%E7%8E%B0%23) `109.0K 🔥` `NEW`
1. [罗德里将加盟巴萨](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%BE%B7%E9%87%8C%E5%B0%86%E5%8A%A0%E7%9B%9F%E5%B7%B4%E8%90%A8%23) `108.5K 🔥` `NEW`
1. [特朗普称要大幅缩减美韩联合军演](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%A6%81%E5%A4%A7%E5%B9%85%E7%BC%A9%E5%87%8F%E7%BE%8E%E9%9F%A9%E8%81%94%E5%90%88%E5%86%9B%E6%BC%94%23) `88.2K 🔥` `NEW`
1. [Anthropic通报Claude故障 (Anthropic reports Claude failure)](https://s.weibo.com/weibo?q=%23Anthropic%E9%80%9A%E6%8A%A5Claude%E6%95%85%E9%9A%9C%23) `88.2K 🔥` `NEW`
1. [居民存款7月又少了6300亿 (Resident deposits fell by another 630 billion in July)](https://s.weibo.com/weibo?q=%23%E5%B1%85%E6%B0%91%E5%AD%98%E6%AC%BE7%E6%9C%88%E5%8F%88%E5%B0%91%E4%BA%866300%E4%BA%BF%23) `1.2M 🔥` `+89%`
1. [胖东来被涨租逼走却从不涨商户租](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%A2%AB%E6%B6%A8%E7%A7%9F%E9%80%BC%E8%B5%B0%E5%8D%B4%E4%BB%8E%E4%B8%8D%E6%B6%A8%E5%95%86%E6%88%B7%E7%A7%9F%23) `958.1K 🔥` `+114%`
1. [为中国航天点赞 (Thumbs up for China Aerospace)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E7%82%B9%E8%B5%9E%23) `934.4K 🔥` `+44%`
1. [王俊凯妈妈给粉丝送伴手礼 (Wang Junkai’s mother sends souvenirs to fans)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%A6%88%E5%A6%88%E7%BB%99%E7%B2%89%E4%B8%9D%E9%80%81%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `934.4K 🔥` `+45%`
1. [王曼昱夺冠后比1庆祝](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%A4%BA%E5%86%A0%E5%90%8E%E6%AF%941%E5%BA%86%E7%A5%9D%23) `809.6K 🔥` `+27%`
1. [手机壳 医疗垃圾](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E5%A3%B3%20%E5%8C%BB%E7%96%97%E5%9E%83%E5%9C%BE%23) `744.7K 🔥` `+290%`
1. [张本智和瑞典大满贯亚军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E7%91%9E%E5%85%B8%E5%A4%A7%E6%BB%A1%E8%B4%AF%E4%BA%9A%E5%86%9B%23) `564.6K 🔥` `+197%`
1. [儿科医生杨国辉去世妻子发声](https://s.weibo.com/weibo?q=%23%E5%84%BF%E7%A7%91%E5%8C%BB%E7%94%9F%E6%9D%A8%E5%9B%BD%E8%BE%89%E5%8E%BB%E4%B8%96%E5%A6%BB%E5%AD%90%E5%8F%91%E5%A3%B0%23) `509.0K 🔥` `+153%`
1. [苏新皓辟谣穿丝袜](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E8%BE%9F%E8%B0%A3%E7%A9%BF%E4%B8%9D%E8%A2%9C%23) `356.5K 🔥` `+86%`
1. [丁程鑫从不遮掩自己农村家庭背景 (Ding Chengxin never hides his rural family background)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%BB%8E%E4%B8%8D%E9%81%AE%E6%8E%A9%E8%87%AA%E5%B7%B1%E5%86%9C%E6%9D%91%E5%AE%B6%E5%BA%AD%E8%83%8C%E6%99%AF%23) `319.5K 🔥` `+62%`
1. [辟谣恋情都按谷爱凌这个标准来 (To refute rumors about love affairs, follow Gu Ailing’s standards)](https://s.weibo.com/weibo?q=%23%E8%BE%9F%E8%B0%A3%E6%81%8B%E6%83%85%E9%83%BD%E6%8C%89%E8%B0%B7%E7%88%B1%E5%87%8C%E8%BF%99%E4%B8%AA%E6%A0%87%E5%87%86%E6%9D%A5%23) `934.1K 🔥`
1. [披荆斩棘排名 (Ranking through all obstacles)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%8E%92%E5%90%8D%23) `714.3K 🔥`
1. [小勒布伦4比1张本智和](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8B%92%E5%B8%83%E4%BC%A64%E6%AF%941%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `374.9K 🔥`
1. [Jennie因服装问题道歉 (Jennie apologizes for clothing issue)](https://s.weibo.com/weibo?q=%23Jennie%E5%9B%A0%E6%9C%8D%E8%A3%85%E9%97%AE%E9%A2%98%E9%81%93%E6%AD%89%23) `270.7K 🔥`
1. [盗墓笔记 (Tomb robbing notes)](https://s.weibo.com/weibo?q=%23%E7%9B%97%E5%A2%93%E7%AC%94%E8%AE%B0%23) `194.1K 🔥`
1. [王俊凯口误了 (Wang Junkai made a mistake)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8F%A3%E8%AF%AF%E4%BA%86%23) `193.4K 🔥`
1. [41岁妈妈和23岁女儿同年生娃](https://s.weibo.com/weibo?q=%2341%E5%B2%81%E5%A6%88%E5%A6%88%E5%92%8C23%E5%B2%81%E5%A5%B3%E5%84%BF%E5%90%8C%E5%B9%B4%E7%94%9F%E5%A8%83%23) `188.7K 🔥`
1. [种地吧 (Farm it)](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `186.7K 🔥`
1. [有人要求政府联系某明星给自己过生日 (Someone asked the government to contact a certain celebrity to celebrate his birthday)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E8%A6%81%E6%B1%82%E6%94%BF%E5%BA%9C%E8%81%94%E7%B3%BB%E6%9F%90%E6%98%8E%E6%98%9F%E7%BB%99%E8%87%AA%E5%B7%B1%E8%BF%87%E7%94%9F%E6%97%A5%23) `185.9K 🔥`
1. [考驾照的人为何变少了](https://s.weibo.com/weibo?q=%23%E8%80%83%E9%A9%BE%E7%85%A7%E7%9A%84%E4%BA%BA%E4%B8%BA%E4%BD%95%E5%8F%98%E5%B0%91%E4%BA%86%23) `167.3K 🔥`
1. [王曼昱瑞典大满贯冠军 (Wang Manyu Swedish Grand Slam Champion)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E7%91%9E%E5%85%B8%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%86%A0%E5%86%9B%23) `165.8K 🔥`
1. [王曼昱回应女单冠军 (Wang Manyu responded to the women's singles championship)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%8D%95%E5%86%A0%E5%86%9B%23) `161.3K 🔥`
1. [娜扎刚起床的素颜](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E5%88%9A%E8%B5%B7%E5%BA%8A%E7%9A%84%E7%B4%A0%E9%A2%9C%23) `160.0K 🔥`
1. [麦琳确实很适合亚裔妆容 (Mai Lin is really suitable for Asian makeup)](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E7%90%B3%E7%A1%AE%E5%AE%9E%E5%BE%88%E9%80%82%E5%90%88%E4%BA%9A%E8%A3%94%E5%A6%86%E5%AE%B9%23) `159.1K 🔥`
1. [伊朗称美军已被驱逐不得进入海峡 (Iran says U.S. troops have been expelled and not allowed to enter strait)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E5%86%9B%E5%B7%B2%E8%A2%AB%E9%A9%B1%E9%80%90%E4%B8%8D%E5%BE%97%E8%BF%9B%E5%85%A5%E6%B5%B7%E5%B3%A1%23) `157.3K 🔥`
1. [女子送闺蜜手串后偷走金手镯 (Woman steals gold bracelet after giving it to best friend)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%80%81%E9%97%BA%E8%9C%9C%E6%89%8B%E4%B8%B2%E5%90%8E%E5%81%B7%E8%B5%B0%E9%87%91%E6%89%8B%E9%95%AF%23) `155.6K 🔥`
1. [你是我见过炒蛋炒饭最干净的厨子了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%98%AF%E6%88%91%E8%A7%81%E8%BF%87%E7%82%92%E8%9B%8B%E7%82%92%E9%A5%AD%E6%9C%80%E5%B9%B2%E5%87%80%E7%9A%84%E5%8E%A8%E5%AD%90%E4%BA%86%23) `153.0K 🔥`
1. [王源年度最佳内地男歌手 (Wang Yuan Best Mainland Male Singer of the Year)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%B9%B4%E5%BA%A6%E6%9C%80%E4%BD%B3%E5%86%85%E5%9C%B0%E7%94%B7%E6%AD%8C%E6%89%8B%23) `150.6K 🔥`
1. [礼物要送有溢价的东西](https://s.weibo.com/weibo?q=%23%E7%A4%BC%E7%89%A9%E8%A6%81%E9%80%81%E6%9C%89%E6%BA%A2%E4%BB%B7%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `150.2K 🔥`
1. [离世39岁儿科医生最后一条朋友圈 (The last post of the 39-year-old pediatrician who passed away in his circle of friends)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E4%B8%9639%E5%B2%81%E5%84%BF%E7%A7%91%E5%8C%BB%E7%94%9F%E6%9C%80%E5%90%8E%E4%B8%80%E6%9D%A1%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `148.3K 🔥`
1. [对症运动长脑子 (Symptomatic exercise strengthens the brain)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E7%97%87%E8%BF%90%E5%8A%A8%E9%95%BF%E8%84%91%E5%AD%90%23) `138.2K 🔥`
1. [左航新手机带丢了 (Zuohang lost his new mobile phone strap)](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AA%E6%96%B0%E6%89%8B%E6%9C%BA%E5%B8%A6%E4%B8%A2%E4%BA%86%23) `136.6K 🔥`
1. [C罗乔治娜婚礼合照 (Ronaldo Georgina wedding photos)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B9%94%E6%B2%BB%E5%A8%9C%E5%A9%9A%E7%A4%BC%E5%90%88%E7%85%A7%23) `136.4K 🔥` `-23%`
1. [谷爱凌否认恋情 (Gu Ailing denies love affair)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%A6%E8%AE%A4%E6%81%8B%E6%83%85%23) `127.7K 🔥` `-27%`
1. [吴艳妮13秒12夺冠 (Wu Yanni won the championship in 13.12 seconds)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE13%E7%A7%9212%E5%A4%BA%E5%86%A0%23) `119.0K 🔥` `-26%`
1. [小沈阳初舞台第一 (Xiaoshenyang first stage)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E5%88%9D%E8%88%9E%E5%8F%B0%E7%AC%AC%E4%B8%80%23) `106.0K 🔥` `-36%`
1. [张睿披哥下沉市场口碑](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E6%8A%AB%E5%93%A5%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E5%8F%A3%E7%A2%91%23) `100.8K 🔥` `-37%`
1. [3女儿均非亲生男方盼尽快再婚](https://s.weibo.com/weibo?q=%233%E5%A5%B3%E5%84%BF%E5%9D%87%E9%9D%9E%E4%BA%B2%E7%94%9F%E7%94%B7%E6%96%B9%E7%9B%BC%E5%B0%BD%E5%BF%AB%E5%86%8D%E5%A9%9A%23) `94.1K 🔥` `-40%`
1. [鹿晗天资是很残忍的东西 (Lu Han’s talent is a very cruel thing)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%A4%A9%E8%B5%84%E6%98%AF%E5%BE%88%E6%AE%8B%E5%BF%8D%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `90.2K 🔥` `-42%`

Updated at 2026-08-17 08:23:52

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
