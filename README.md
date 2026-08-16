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

1. [C罗乔治娜婚礼合照 (Ronaldo Georgina wedding photos)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B9%94%E6%B2%BB%E5%A8%9C%E5%A9%9A%E7%A4%BC%E5%90%88%E7%85%A7%23) `438.2K 🔥` `NEW`
1. [阿森纳vs曼城](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3vs%E6%9B%BC%E5%9F%8E%23) `423.9K 🔥` `NEW`
1. [盗墓笔记](https://s.weibo.com/weibo?q=%23%E7%9B%97%E5%A2%93%E7%AC%94%E8%AE%B0%23) `419.8K 🔥` `NEW`
1. [央视曝光纯玩旅游团变购物团](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E7%BA%AF%E7%8E%A9%E6%97%85%E6%B8%B8%E5%9B%A2%E5%8F%98%E8%B4%AD%E7%89%A9%E5%9B%A2%23) `403.7K 🔥` `NEW`
1. [侵华日军家信自曝屠杀罪行](https://s.weibo.com/weibo?q=%23%E4%BE%B5%E5%8D%8E%E6%97%A5%E5%86%9B%E5%AE%B6%E4%BF%A1%E8%87%AA%E6%9B%9D%E5%B1%A0%E6%9D%80%E7%BD%AA%E8%A1%8C%23) `395.2K 🔥` `NEW`
1. [编舞杨博文](https://s.weibo.com/weibo?q=%23%E7%BC%96%E8%88%9E%E6%9D%A8%E5%8D%9A%E6%96%87%23) `391.8K 🔥` `NEW`
1. [TMEA获奖名单](https://s.weibo.com/weibo?q=%23TMEA%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `390.9K 🔥` `NEW`
1. [吴艳妮13秒12夺冠](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE13%E7%A7%9212%E5%A4%BA%E5%86%A0%23) `386.0K 🔥` `NEW`
1. [颜安唱跳黑马](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E5%AE%89%E5%94%B1%E8%B7%B3%E9%BB%91%E9%A9%AC%23) `374.7K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `366.3K 🔥` `NEW`
1. [陈浚铭 虚拟 (Chen Junming virtual)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%9A%E9%93%AD%20%E8%99%9A%E6%8B%9F%23) `365.6K 🔥` `NEW`
1. [李煜东哭了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%85%9C%E4%B8%9C%E5%93%AD%E4%BA%86%23) `353.3K 🔥` `NEW`
1. [7名县委常委在土坯房上班](https://s.weibo.com/weibo?q=%237%E5%90%8D%E5%8E%BF%E5%A7%94%E5%B8%B8%E5%A7%94%E5%9C%A8%E5%9C%9F%E5%9D%AF%E6%88%BF%E4%B8%8A%E7%8F%AD%23) `319.2K 🔥` `NEW`
1. [王赫野是会选曲的](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%B5%AB%E9%87%8E%E6%98%AF%E4%BC%9A%E9%80%89%E6%9B%B2%E7%9A%84%23) `249.9K 🔥` `NEW`
1. [朱镕基同志遗体18日火化 (Comrade Zhu Rongji’s body was cremated on the 18th)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%81%97%E4%BD%9318%E6%97%A5%E7%81%AB%E5%8C%96%23) `1.0M 🔥`
1. [四代跳Attention (Four generations of jump Attention)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E4%BB%A3%E8%B7%B3Attention%23) `1.0M 🔥`
1. [为中国航天点赞 (Thumbs up for China Aerospace)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E7%82%B9%E8%B5%9E%23) `980.1K 🔥`
1. [孙楠 降维打击](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%A5%A0%20%E9%99%8D%E7%BB%B4%E6%89%93%E5%87%BB%23) `971.1K 🔥`
1. [请3天假连休13天](https://s.weibo.com/weibo?q=%23%E8%AF%B73%E5%A4%A9%E5%81%87%E8%BF%9E%E4%BC%9113%E5%A4%A9%23) `959.2K 🔥`
1. [王橹杰 虚拟](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E8%99%9A%E6%8B%9F%23) `857.5K 🔥`
1. [龙餐馆 (dragon restaurant)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `429.1K 🔥`
1. [谷爱凌否认恋情](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%A6%E8%AE%A4%E6%81%8B%E6%83%85%23) `422.6K 🔥`
1. [张柏芝有种经济上行的美](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E6%9C%89%E7%A7%8D%E7%BB%8F%E6%B5%8E%E4%B8%8A%E8%A1%8C%E7%9A%84%E7%BE%8E%23) `422.1K 🔥`
1. [丁程鑫从不遮掩自己农村家庭背景](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%BB%8E%E4%B8%8D%E9%81%AE%E6%8E%A9%E8%87%AA%E5%B7%B1%E5%86%9C%E6%9D%91%E5%AE%B6%E5%BA%AD%E8%83%8C%E6%99%AF%23) `421.6K 🔥`
1. [王橹杰 上春山 (Wang Lujie Shangchunshan)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E4%B8%8A%E6%98%A5%E5%B1%B1%23) `417.8K 🔥`
1. [美国女子怀孕八个月却每天吸食芬太尼 (American woman smokes fentanyl every day, eight months pregnant)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E5%85%AB%E4%B8%AA%E6%9C%88%E5%8D%B4%E6%AF%8F%E5%A4%A9%E5%90%B8%E9%A3%9F%E8%8A%AC%E5%A4%AA%E5%B0%BC%23) `412.8K 🔥`
1. [网红小家电集体吃灰了 (Internet celebrity small home appliances are collectively in ashes)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B0%8F%E5%AE%B6%E7%94%B5%E9%9B%86%E4%BD%93%E5%90%83%E7%81%B0%E4%BA%86%23) `409.9K 🔥`
1. [苹果阿里合作新进展](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E9%98%BF%E9%87%8C%E5%90%88%E4%BD%9C%E6%96%B0%E8%BF%9B%E5%B1%95%23) `406.3K 🔥`
1. [Jennie因服装问题道歉](https://s.weibo.com/weibo?q=%23Jennie%E5%9B%A0%E6%9C%8D%E8%A3%85%E9%97%AE%E9%A2%98%E9%81%93%E6%AD%89%23) `398.4K 🔥`
1. [谷爱凌最后一个吃到自己的瓜](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%90%83%E5%88%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E7%93%9C%23) `389.5K 🔥`
1. [艾米进组几天瘦了一大圈 (Amy lost a lot of weight after joining the group for a few days)](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E8%BF%9B%E7%BB%84%E5%87%A0%E5%A4%A9%E7%98%A6%E4%BA%86%E4%B8%80%E5%A4%A7%E5%9C%88%23) `388.2K 🔥`
1. [沈佳润还是藏不住事的年纪](https://s.weibo.com/weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E8%BF%98%E6%98%AF%E8%97%8F%E4%B8%8D%E4%BD%8F%E4%BA%8B%E7%9A%84%E5%B9%B4%E7%BA%AA%23) `387.2K 🔥`
1. [奇文 春雪](https://s.weibo.com/weibo?q=%23%E5%A5%87%E6%96%87%20%E6%98%A5%E9%9B%AA%23) `383.9K 🔥`
1. [A股又见大肉签](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8F%88%E8%A7%81%E5%A4%A7%E8%82%89%E7%AD%BE%23) `382.2K 🔥`
1. [TF四代vs时代少年团刺舞台 (TF Fourth Generation vs Era Youth League stabbing stage)](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3vs%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%88%BA%E8%88%9E%E5%8F%B0%23) `380.2K 🔥`
1. [魏子宸太有杰尼斯味了 (Wei Zichen looks so Johnny-like)](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%A4%AA%E6%9C%89%E6%9D%B0%E5%B0%BC%E6%96%AF%E5%91%B3%E4%BA%86%23) `379.0K 🔥`
1. [建议大家减少对日常琐事的决策时间 (It is recommended that everyone spend less time making decisions on daily trivial matters)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%87%8F%E5%B0%91%E5%AF%B9%E6%97%A5%E5%B8%B8%E7%90%90%E4%BA%8B%E7%9A%84%E5%86%B3%E7%AD%96%E6%97%B6%E9%97%B4%23) `377.5K 🔥`
1. [现在的小学生都进化成这样了吗 (Have all primary school students today evolved like this?)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%B0%8F%E5%AD%A6%E7%94%9F%E9%83%BD%E8%BF%9B%E5%8C%96%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%E5%90%97%23) `375.0K 🔥`
1. [时代少年团个人能力排名](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%B8%AA%E4%BA%BA%E8%83%BD%E5%8A%9B%E6%8E%92%E5%90%8D%23) `373.0K 🔥`
1. [贺峻霖给严浩翔照片加了美颜 (He Junlin added beauty to Yan Haoxiang's photos)](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%BB%99%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%85%A7%E7%89%87%E5%8A%A0%E4%BA%86%E7%BE%8E%E9%A2%9C%23) `314.3K 🔥`
1. [陈奕恒摔倒](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E6%91%94%E5%80%92%23) `313.3K 🔥`
1. [什么东西成年了才意识到很贵 (What do you need to realize as an adult that something is expensive?)](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E4%B8%9C%E8%A5%BF%E6%88%90%E5%B9%B4%E4%BA%86%E6%89%8D%E6%84%8F%E8%AF%86%E5%88%B0%E5%BE%88%E8%B4%B5%23) `299.8K 🔥`
1. [唐九洲米卡 青春有你pk创造营](https://s.weibo.com/weibo?q=%23%E5%94%90%E4%B9%9D%E6%B4%B2%E7%B1%B3%E5%8D%A1%20%E9%9D%92%E6%98%A5%E6%9C%89%E4%BD%A0pk%E5%88%9B%E9%80%A0%E8%90%A5%23) `298.3K 🔥`
1. [鹿晗天资是很残忍的东西 (Lu Han’s talent is a very cruel thing)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%A4%A9%E8%B5%84%E6%98%AF%E5%BE%88%E6%AE%8B%E5%BF%8D%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `296.1K 🔥`
1. [段永平1300亿持仓曝光](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E6%B0%B8%E5%B9%B31300%E4%BA%BF%E6%8C%81%E4%BB%93%E6%9B%9D%E5%85%89%23) `246.3K 🔥`
1. [马正阳声音侵权声明 (Ma Zhengyang’s voice infringement statement)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%AD%A3%E9%98%B3%E5%A3%B0%E9%9F%B3%E4%BE%B5%E6%9D%83%E5%A3%B0%E6%98%8E%23) `246.1K 🔥`
1. [市民打12345投诉月光太亮影响睡觉 (Citizens called 12345 to complain that the moonlight was too bright and affected their sleep.)](https://s.weibo.com/weibo?q=%23%E5%B8%82%E6%B0%91%E6%89%9312345%E6%8A%95%E8%AF%89%E6%9C%88%E5%85%89%E5%A4%AA%E4%BA%AE%E5%BD%B1%E5%93%8D%E7%9D%A1%E8%A7%89%23) `517.3K 🔥` `-22%`
1. [张本智和4比3松岛辉空 (Zhang Benzhi and Matsushima Terukong 4-3)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C4%E6%AF%943%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `414.9K 🔥` `-51%`
1. [IG战胜WBG](https://s.weibo.com/weibo?q=%23IG%E6%88%98%E8%83%9CWBG%23) `259.3K 🔥` `-40%`
1. [博瑞双人舞台](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E7%91%9E%E5%8F%8C%E4%BA%BA%E8%88%9E%E5%8F%B0%23) `255.5K 🔥` `-41%`

Updated at 2026-08-16 22:37:18

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
