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

1. [你们俩是要毁了芒果吗 (Are you two going to destroy the mango?)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E4%BF%A9%E6%98%AF%E8%A6%81%E6%AF%81%E4%BA%86%E8%8A%92%E6%9E%9C%E5%90%97%23) `1.3M 🔥` `NEW`
1. [赵子琪 一分钟不多呆](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%20%E4%B8%80%E5%88%86%E9%92%9F%E4%B8%8D%E5%A4%9A%E5%91%86%23) `531.5K 🔥` `NEW`
1. [90后女子后背疼9分钟完成心梗自救](https://s.weibo.com/weibo?q=%2390%E5%90%8E%E5%A5%B3%E5%AD%90%E5%90%8E%E8%83%8C%E7%96%BC9%E5%88%86%E9%92%9F%E5%AE%8C%E6%88%90%E5%BF%83%E6%A2%97%E8%87%AA%E6%95%91%23) `194.6K 🔥` `NEW`
1. [孙怡直播啃火腿肠](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%9B%B4%E6%92%AD%E5%95%83%E7%81%AB%E8%85%BF%E8%82%A0%23) `189.1K 🔥` `NEW`
1. [网约车司机车内卖现磨咖啡](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A6%E8%BD%A6%E5%8F%B8%E6%9C%BA%E8%BD%A6%E5%86%85%E5%8D%96%E7%8E%B0%E7%A3%A8%E5%92%96%E5%95%A1%23) `181.6K 🔥` `NEW`
1. [95后姑娘养6万多条毒蛇年入百万](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E5%A7%91%E5%A8%98%E5%85%BB6%E4%B8%87%E5%A4%9A%E6%9D%A1%E6%AF%92%E8%9B%87%E5%B9%B4%E5%85%A5%E7%99%BE%E4%B8%87%23) `155.9K 🔥` `NEW`
1. [王曼昱我再启航](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%88%91%E5%86%8D%E5%90%AF%E8%88%AA%23) `155.4K 🔥` `NEW`
1. [Tabe回应不敌TES](https://s.weibo.com/weibo?q=%23Tabe%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8CTES%23) `154.9K 🔥` `NEW`
1. [曝旺仔小乔要复出了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%BA%E4%BB%94%E5%B0%8F%E4%B9%94%E8%A6%81%E5%A4%8D%E5%87%BA%E4%BA%86%23) `151.0K 🔥` `NEW`
1. [伊朗媒体公布伊美谈判过程](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AA%92%E4%BD%93%E5%85%AC%E5%B8%83%E4%BC%8A%E7%BE%8E%E8%B0%88%E5%88%A4%E8%BF%87%E7%A8%8B%23) `149.5K 🔥` `NEW`
1. [大冰告诫年轻人不要在单位聊私事 (Dabing warns young people not to talk about private matters at work)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E5%91%8A%E8%AF%AB%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%8D%E8%A6%81%E5%9C%A8%E5%8D%95%E4%BD%8D%E8%81%8A%E7%A7%81%E4%BA%8B%23) `148.0K 🔥` `NEW`
1. [美军宣布在霍尔木兹海峡扫雷](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%AE%A3%E5%B8%83%E5%9C%A8%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E6%89%AB%E9%9B%B7%23) `146.0K 🔥` `NEW`
1. [张凌赫小狗塑是田曦薇的限定款](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B0%8F%E7%8B%97%E5%A1%91%E6%98%AF%E7%94%B0%E6%9B%A6%E8%96%87%E7%9A%84%E9%99%90%E5%AE%9A%E6%AC%BE%23) `145.2K 🔥` `NEW`
1. [郭碧婷生二胎后花好几年才瘦下来](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E7%94%9F%E4%BA%8C%E8%83%8E%E5%90%8E%E8%8A%B1%E5%A5%BD%E5%87%A0%E5%B9%B4%E6%89%8D%E7%98%A6%E4%B8%8B%E6%9D%A5%23) `136.4K 🔥` `NEW`
1. [男子肝癌去世妹妹一人带5个娃](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%82%9D%E7%99%8C%E5%8E%BB%E4%B8%96%E5%A6%B9%E5%A6%B9%E4%B8%80%E4%BA%BA%E5%B8%A65%E4%B8%AA%E5%A8%83%23) `110.9K 🔥` `NEW`
1. [alin又来修音响了](https://s.weibo.com/weibo?q=%23alin%E5%8F%88%E6%9D%A5%E4%BF%AE%E9%9F%B3%E5%93%8D%E4%BA%86%23) `107.2K 🔥` `NEW`
1. [允许引进精良台湾电视剧在大陆播出](https://s.weibo.com/weibo?q=%23%E5%85%81%E8%AE%B8%E5%BC%95%E8%BF%9B%E7%B2%BE%E8%89%AF%E5%8F%B0%E6%B9%BE%E7%94%B5%E8%A7%86%E5%89%A7%E5%9C%A8%E5%A4%A7%E9%99%86%E6%92%AD%E5%87%BA%23) `107.2K 🔥` `NEW`
1. [吴镇宇说科班演员吃不了短剧苦](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%95%87%E5%AE%87%E8%AF%B4%E7%A7%91%E7%8F%AD%E6%BC%94%E5%91%98%E5%90%83%E4%B8%8D%E4%BA%86%E7%9F%AD%E5%89%A7%E8%8B%A6%23) `100.7K 🔥` `NEW`
1. [郝蕾说演员没工作都扎堆短剧了](https://s.weibo.com/weibo?q=%23%E9%83%9D%E8%95%BE%E8%AF%B4%E6%BC%94%E5%91%98%E6%B2%A1%E5%B7%A5%E4%BD%9C%E9%83%BD%E6%89%8E%E5%A0%86%E7%9F%AD%E5%89%A7%E4%BA%86%23) `100.2K 🔥` `NEW`
1. [光与夜之恋](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%23) `100.0K 🔥` `NEW`
1. [朱志鑫 师傅你快走啊 (Zhu Zhixin, master, please leave quickly.)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%20%E5%B8%88%E5%82%85%E4%BD%A0%E5%BF%AB%E8%B5%B0%E5%95%8A%23) `99.8K 🔥` `NEW`
1. [小猫自己用牙刷刷牙](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%87%AA%E5%B7%B1%E7%94%A8%E7%89%99%E5%88%B7%E5%88%B7%E7%89%99%23) `91.4K 🔥` `NEW`
1. [护住周深的常州保安火了](https://s.weibo.com/weibo?q=%23%E6%8A%A4%E4%BD%8F%E5%91%A8%E6%B7%B1%E7%9A%84%E5%B8%B8%E5%B7%9E%E4%BF%9D%E5%AE%89%E7%81%AB%E4%BA%86%23) `91.1K 🔥` `NEW`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `86.4K 🔥` `NEW`
1. [常州高兴得不知天地为何物了](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%B7%9E%E9%AB%98%E5%85%B4%E5%BE%97%E4%B8%8D%E7%9F%A5%E5%A4%A9%E5%9C%B0%E4%B8%BA%E4%BD%95%E7%89%A9%E4%BA%86%23) `73.3K 🔥` `NEW`
1. [2026KPL的春日记忆](https://s.weibo.com/weibo?q=%232026KPL%E7%9A%84%E6%98%A5%E6%97%A5%E8%AE%B0%E5%BF%86%23) `70.8K 🔥` `NEW`
1. [钢铁森林](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%23) `70.8K 🔥` `NEW`
1. [吴宣仪去看陈丽君的枕头人](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E5%8E%BB%E7%9C%8B%E9%99%88%E4%B8%BD%E5%90%9B%E7%9A%84%E6%9E%95%E5%A4%B4%E4%BA%BA%23) `70.7K 🔥` `NEW`
1. [杨超越 虎鲸](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%20%E8%99%8E%E9%B2%B8%23) `70.1K 🔥` `NEW`
1. [JAYB用中文感谢鸟宝宝](https://s.weibo.com/weibo?q=%23JAYB%E7%94%A8%E4%B8%AD%E6%96%87%E6%84%9F%E8%B0%A2%E9%B8%9F%E5%AE%9D%E5%AE%9D%23) `69.6K 🔥` `NEW`
1. [上海福建居民赴台个人游试点 (Pilot program for Shanghai and Fujian residents to travel to Taiwan for individual travel)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%A6%8F%E5%BB%BA%E5%B1%85%E6%B0%91%E8%B5%B4%E5%8F%B0%E4%B8%AA%E4%BA%BA%E6%B8%B8%E8%AF%95%E7%82%B9%23) `69.2K 🔥` `NEW`
1. [特朗普转发威胁伊朗的报道链接](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%BD%AC%E5%8F%91%E5%A8%81%E8%83%81%E4%BC%8A%E6%9C%97%E7%9A%84%E6%8A%A5%E9%81%93%E9%93%BE%E6%8E%A5%23) `66.6K 🔥` `NEW`
1. [70多款机器人深夜竞速](https://s.weibo.com/weibo?q=%2370%E5%A4%9A%E6%AC%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%B7%B1%E5%A4%9C%E7%AB%9E%E9%80%9F%23) `64.8K 🔥` `NEW`
1. [野生母狼怀孕后主动到保护站待产 (After becoming pregnant, a wild female wolf takes the initiative to go to the conservation station to wait for her birth)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%94%9F%E6%AF%8D%E7%8B%BC%E6%80%80%E5%AD%95%E5%90%8E%E4%B8%BB%E5%8A%A8%E5%88%B0%E4%BF%9D%E6%8A%A4%E7%AB%99%E5%BE%85%E4%BA%A7%23) `877.8K 🔥`
1. [中国船舶出品真的一屏放不下](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%88%B9%E8%88%B6%E5%87%BA%E5%93%81%E7%9C%9F%E7%9A%84%E4%B8%80%E5%B1%8F%E6%94%BE%E4%B8%8D%E4%B8%8B%23) `700.2K 🔥`
1. [高三学生学习困难去医院测出智障 (A senior high school student with learning difficulties went to the hospital to be diagnosed with mental retardation)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%89%E5%AD%A6%E7%94%9F%E5%AD%A6%E4%B9%A0%E5%9B%B0%E9%9A%BE%E5%8E%BB%E5%8C%BB%E9%99%A2%E6%B5%8B%E5%87%BA%E6%99%BA%E9%9A%9C%23) `152.0K 🔥`
1. [好美 好难听](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E7%BE%8E%20%E5%A5%BD%E9%9A%BE%E5%90%AC%23) `147.8K 🔥`
1. [孙怡阚清子直播零互动 (Sun Yi Kan Qingzi live broadcast with zero interaction)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%98%9A%E6%B8%85%E5%AD%90%E7%9B%B4%E6%92%AD%E9%9B%B6%E4%BA%92%E5%8A%A8%23) `154.1K 🔥` `-49%`
1. [胡先煦十日终焉被曝1天杀青](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E8%A2%AB%E6%9B%9D1%E5%A4%A9%E6%9D%80%E9%9D%92%23) `153.9K 🔥` `-75%`
1. [美向伊朗提出最终方案](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%90%91%E4%BC%8A%E6%9C%97%E6%8F%90%E5%87%BA%E6%9C%80%E7%BB%88%E6%96%B9%E6%A1%88%23) `152.8K 🔥` `-74%`
1. [不要穿浅色去做妆造](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E7%A9%BF%E6%B5%85%E8%89%B2%E5%8E%BB%E5%81%9A%E5%A6%86%E9%80%A0%23) `152.7K 🔥` `-50%`
1. [孟子义突发身体不适 (Meng Ziyi suddenly felt unwell)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%AA%81%E5%8F%91%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%23) `152.4K 🔥` `-49%`
1. [王濛 色令智昏](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E8%89%B2%E4%BB%A4%E6%99%BA%E6%98%8F%23) `150.5K 🔥` `-50%`
1. [宇树机器人百米冲刺10米每秒](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%99%BE%E7%B1%B3%E5%86%B2%E5%88%BA10%E7%B1%B3%E6%AF%8F%E7%A7%92%23) `149.1K 🔥` `-46%`
1. [采茶女 (tea picking girl)](https://s.weibo.com/weibo?q=%23%E9%87%87%E8%8C%B6%E5%A5%B3%23) `115.7K 🔥` `-28%`
1. [心愿便利贴 万通筋骨贴](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%20%E4%B8%87%E9%80%9A%E7%AD%8B%E9%AA%A8%E8%B4%B4%23) `111.0K 🔥` `-85%`
1. [鹿晗卖家秀邓超买家秀](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8D%96%E5%AE%B6%E7%A7%80%E9%82%93%E8%B6%85%E4%B9%B0%E5%AE%B6%E7%A7%80%23) `107.2K 🔥` `-34%`
1. [女孩追星被骗爸爸受伤家有4个孩子](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%BF%BD%E6%98%9F%E8%A2%AB%E9%AA%97%E7%88%B8%E7%88%B8%E5%8F%97%E4%BC%A4%E5%AE%B6%E6%9C%894%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `107.0K 🔥` `-64%`
1. [谢娜成都演唱会票价 (Xie Na Chengdu concert ticket price)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%88%90%E9%83%BD%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E4%BB%B7%23) `98.2K 🔥` `-68%`
1. [奥迪逃单加油站员工垫付4天工资](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%AA%E9%80%83%E5%8D%95%E5%8A%A0%E6%B2%B9%E7%AB%99%E5%91%98%E5%B7%A5%E5%9E%AB%E4%BB%984%E5%A4%A9%E5%B7%A5%E8%B5%84%23) `70.8K 🔥` `-74%`

Updated at 2026-04-12 13:47:03

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
