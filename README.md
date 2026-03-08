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

1. [外交部长王毅答记者问 (Foreign Minister Wang Yi answers reporters’ questions)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E9%95%BF%E7%8E%8B%E6%AF%85%E7%AD%94%E8%AE%B0%E8%80%85%E9%97%AE%23) `1.0M 🔥` `NEW`
1. [AI龙虾爆火有人几天赚了26万](https://s.weibo.com/weibo?q=%23AI%E9%BE%99%E8%99%BE%E7%88%86%E7%81%AB%E6%9C%89%E4%BA%BA%E5%87%A0%E5%A4%A9%E8%B5%9A%E4%BA%8626%E4%B8%87%23) `730.5K 🔥` `NEW`
1. [奋进十五五AI超燃大片](https://s.weibo.com/weibo?q=%23%E5%A5%8B%E8%BF%9B%E5%8D%81%E4%BA%94%E4%BA%94AI%E8%B6%85%E7%87%83%E5%A4%A7%E7%89%87%23) `591.2K 🔥` `NEW`
1. [姐妹们用千问AI下单快乐过节](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A6%B9%E4%BB%AC%E7%94%A8%E5%8D%83%E9%97%AEAI%E4%B8%8B%E5%8D%95%E5%BF%AB%E4%B9%90%E8%BF%87%E8%8A%82%23) `574.8K 🔥` `NEW`
1. [玉兰花开君再来](https://s.weibo.com/weibo?q=%23%E7%8E%89%E5%85%B0%E8%8A%B1%E5%BC%80%E5%90%9B%E5%86%8D%E6%9D%A5%23) `285.6K 🔥` `NEW`
1. [养龙虾为什么爆火](https://s.weibo.com/weibo?q=%23%E5%85%BB%E9%BE%99%E8%99%BE%E4%B8%BA%E4%BB%80%E4%B9%88%E7%88%86%E7%81%AB%23) `270.3K 🔥` `NEW`
1. [妇女节快乐](https://s.weibo.com/weibo?q=%23%E5%A6%87%E5%A5%B3%E8%8A%82%E5%BF%AB%E4%B9%90%23) `213.0K 🔥` `NEW`
1. [世界乱象丛生祖国稳如泰山](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B9%B1%E8%B1%A1%E4%B8%9B%E7%94%9F%E7%A5%96%E5%9B%BD%E7%A8%B3%E5%A6%82%E6%B3%B0%E5%B1%B1%23) `212.1K 🔥` `NEW`
1. [未来5年这些民生举措事关你我](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A55%E5%B9%B4%E8%BF%99%E4%BA%9B%E6%B0%91%E7%94%9F%E4%B8%BE%E6%8E%AA%E4%BA%8B%E5%85%B3%E4%BD%A0%E6%88%91%23) `211.6K 🔥` `NEW`
1. [日本没资格插手台湾事务](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B2%A1%E8%B5%84%E6%A0%BC%E6%8F%92%E6%89%8B%E5%8F%B0%E6%B9%BE%E4%BA%8B%E5%8A%A1%23) `210.4K 🔥` `NEW`
1. [张凌赫田曦薇下意识的牵手 (Zhang Linghe and Tian Xiwei subconsciously held hands)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E4%B8%8B%E6%84%8F%E8%AF%86%E7%9A%84%E7%89%B5%E6%89%8B%23) `208.6K 🔥` `NEW`
1. [低食量女生的一顿饭](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E9%A3%9F%E9%87%8F%E5%A5%B3%E7%94%9F%E7%9A%84%E4%B8%80%E9%A1%BF%E9%A5%AD%23) `208.5K 🔥` `NEW`
1. [硬糖少女偷偶像练习生的鱼](https://s.weibo.com/weibo?q=%23%E7%A1%AC%E7%B3%96%E5%B0%91%E5%A5%B3%E5%81%B7%E5%81%B6%E5%83%8F%E7%BB%83%E4%B9%A0%E7%94%9F%E7%9A%84%E9%B1%BC%23) `201.0K 🔥` `NEW`
1. [千问一句话买眼镜](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E4%B8%80%E5%8F%A5%E8%AF%9D%E4%B9%B0%E7%9C%BC%E9%95%9C%23) `179.8K 🔥` `NEW`
1. [黄子韬曾经是张艺凡导师](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%9B%BE%E7%BB%8F%E6%98%AF%E5%BC%A0%E8%89%BA%E5%87%A1%E5%AF%BC%E5%B8%88%23) `178.3K 🔥` `NEW`
1. [网友上门安装小龙虾几天赚26万](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E4%B8%8A%E9%97%A8%E5%AE%89%E8%A3%85%E5%B0%8F%E9%BE%99%E8%99%BE%E5%87%A0%E5%A4%A9%E8%B5%9A26%E4%B8%87%23) `165.1K 🔥` `NEW`
1. [170斤女孩穿旗袍跳舞自信到发光](https://s.weibo.com/weibo?q=%23170%E6%96%A4%E5%A5%B3%E5%AD%A9%E7%A9%BF%E6%97%97%E8%A2%8D%E8%B7%B3%E8%88%9E%E8%87%AA%E4%BF%A1%E5%88%B0%E5%8F%91%E5%85%89%23) `158.9K 🔥` `NEW`
1. [我的饭量得吃50层才能饱](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E9%A5%AD%E9%87%8F%E5%BE%97%E5%90%8350%E5%B1%82%E6%89%8D%E8%83%BD%E9%A5%B1%23) `149.3K 🔥` `NEW`
1. [王楚然仿妆还以为本尊来了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%BB%BF%E5%A6%86%E8%BF%98%E4%BB%A5%E4%B8%BA%E6%9C%AC%E5%B0%8A%E6%9D%A5%E4%BA%86%23) `124.0K 🔥` `NEW`
1. [王毅谈中美](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E8%B0%88%E4%B8%AD%E7%BE%8E%23) `100.4K 🔥` `NEW`
1. [卢昱晓跳Zoo (Lu Yuxiao dances Zoo)](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E8%B7%B3Zoo%23) `99.9K 🔥` `NEW`
1. [祖国完全统一历史进程不可阻挡](https://s.weibo.com/weibo?q=%23%E7%A5%96%E5%9B%BD%E5%AE%8C%E5%85%A8%E7%BB%9F%E4%B8%80%E5%8E%86%E5%8F%B2%E8%BF%9B%E7%A8%8B%E4%B8%8D%E5%8F%AF%E9%98%BB%E6%8C%A1%23) `98.8K 🔥` `NEW`
1. [中美可以改变相处方式](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%8F%AF%E4%BB%A5%E6%94%B9%E5%8F%98%E7%9B%B8%E5%A4%84%E6%96%B9%E5%BC%8F%23) `98.5K 🔥` `NEW`
1. [伊朗外长称特朗普误判扼杀和平努力](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E7%A7%B0%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%AF%E5%88%A4%E6%89%BC%E6%9D%80%E5%92%8C%E5%B9%B3%E5%8A%AA%E5%8A%9B%23) `95.9K 🔥` `NEW`
1. [中俄关系风雨不动安如山](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E5%85%B3%E7%B3%BB%E9%A3%8E%E9%9B%A8%E4%B8%8D%E5%8A%A8%E5%AE%89%E5%A6%82%E5%B1%B1%23) `95.0K 🔥` `NEW`
1. [粉笔模考](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E6%A8%A1%E8%80%83%23) `93.5K 🔥` `NEW`
1. [iPhone17国内最新销量](https://s.weibo.com/weibo?q=%23iPhone17%E5%9B%BD%E5%86%85%E6%9C%80%E6%96%B0%E9%94%80%E9%87%8F%23) `88.5K 🔥` `NEW`
1. [杨超越陈飞宇G社生图](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E9%99%88%E9%A3%9E%E5%AE%87G%E7%A4%BE%E7%94%9F%E5%9B%BE%23) `85.9K 🔥` `NEW`
1. [医生回应33岁男子熬夜喝酒心脏烂个洞](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%9433%E5%B2%81%E7%94%B7%E5%AD%90%E7%86%AC%E5%A4%9C%E5%96%9D%E9%85%92%E5%BF%83%E8%84%8F%E7%83%82%E4%B8%AA%E6%B4%9E%23) `85.5K 🔥` `NEW`
1. [专家回应养龙虾爆火](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%9B%9E%E5%BA%94%E5%85%BB%E9%BE%99%E8%99%BE%E7%88%86%E7%81%AB%23) `84.1K 🔥` `NEW`
1. [海贼王也得拜妈祖 (The Pirate King also has to worship Mazu)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E8%B4%BC%E7%8E%8B%E4%B9%9F%E5%BE%97%E6%8B%9C%E5%A6%88%E7%A5%96%23) `83.0K 🔥` `NEW`
1. [快递送花也开始卷仪式感了](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E9%80%92%E9%80%81%E8%8A%B1%E4%B9%9F%E5%BC%80%E5%A7%8B%E5%8D%B7%E4%BB%AA%E5%BC%8F%E6%84%9F%E4%BA%86%23) `82.4K 🔥` `NEW`
1. [网传侯明昊陈意涵主演攻玉](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E4%BE%AF%E6%98%8E%E6%98%8A%E9%99%88%E6%84%8F%E6%B6%B5%E4%B8%BB%E6%BC%94%E6%94%BB%E7%8E%89%23) `82.4K 🔥` `NEW`
1. [郑钦文止步次轮](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%AD%A2%E6%AD%A5%E6%AC%A1%E8%BD%AE%23) `82.4K 🔥` `NEW`
1. [勇士vs雷霆](https://s.weibo.com/weibo?q=%23%E5%8B%87%E5%A3%ABvs%E9%9B%B7%E9%9C%86%23) `82.4K 🔥` `NEW`
1. [王毅谈伊朗局势](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E8%B0%88%E4%BC%8A%E6%9C%97%E5%B1%80%E5%8A%BF%23) `82.4K 🔥` `NEW`
1. [郭晓婷王天辰双人大片花絮](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E5%8F%8C%E4%BA%BA%E5%A4%A7%E7%89%87%E8%8A%B1%E7%B5%AE%23) `82.4K 🔥` `NEW`
1. [此刻蓄能绽放 (The energy is blooming at this moment)](https://s.weibo.com/weibo?q=%23%E6%AD%A4%E5%88%BB%E8%93%84%E8%83%BD%E7%BB%BD%E6%94%BE%23) `266.8K 🔥` `+436%`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `124.1K 🔥` `+198%`
1. [妇女节 (women's day)](https://s.weibo.com/weibo?q=%23%E5%A6%87%E5%A5%B3%E8%8A%82%23) `500.2K 🔥` `-52%`
1. [美袭击伊朗海水淡化厂](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E6%B5%B7%E6%B0%B4%E6%B7%A1%E5%8C%96%E5%8E%82%23) `188.4K 🔥` `-66%`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `124.2K 🔥` `-71%`
1. [伊朗65所学校遭袭 (65 schools attacked in Iran)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%9765%E6%89%80%E5%AD%A6%E6%A0%A1%E9%81%AD%E8%A2%AD%23) `124.0K 🔥` `-73%`
1. [AI写作48小时生成500万字长篇小说 (AI writing generates a 5 million word novel in 48 hours)](https://s.weibo.com/weibo?q=%23AI%E5%86%99%E4%BD%9C48%E5%B0%8F%E6%97%B6%E7%94%9F%E6%88%90500%E4%B8%87%E5%AD%97%E9%95%BF%E7%AF%87%E5%B0%8F%E8%AF%B4%23) `119.5K 🔥` `-77%`
1. [伊朗称以色列试图构建人盾](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E4%BB%A5%E8%89%B2%E5%88%97%E8%AF%95%E5%9B%BE%E6%9E%84%E5%BB%BA%E4%BA%BA%E7%9B%BE%23) `116.7K 🔥` `-73%`
1. [去动物园竟被猴子投喂苹果 (Went to the zoo and was fed apples by monkeys)](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%8A%A8%E7%89%A9%E5%9B%AD%E7%AB%9F%E8%A2%AB%E7%8C%B4%E5%AD%90%E6%8A%95%E5%96%82%E8%8B%B9%E6%9E%9C%23) `96.4K 🔥` `-78%`
1. [伊朗大规模无人机攻击美以](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%97%A0%E4%BA%BA%E6%9C%BA%E6%94%BB%E5%87%BB%E7%BE%8E%E4%BB%A5%23) `90.4K 🔥` `-79%`
1. [麦当劳CEO被质疑多次假吃吐掉汉堡](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3CEO%E8%A2%AB%E8%B4%A8%E7%96%91%E5%A4%9A%E6%AC%A1%E5%81%87%E5%90%83%E5%90%90%E6%8E%89%E6%B1%89%E5%A0%A1%23) `87.3K 🔥` `-80%`
1. [外国游客到中国根本买不够](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%88%B0%E4%B8%AD%E5%9B%BD%E6%A0%B9%E6%9C%AC%E4%B9%B0%E4%B8%8D%E5%A4%9F%23) `82.4K 🔥` `-84%`
1. [多地学校早读取消了](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%AD%A6%E6%A0%A1%E6%97%A9%E8%AF%BB%E5%8F%96%E6%B6%88%E4%BA%86%23) `82.4K 🔥` `-81%`
1. [对张凌赫田曦薇身高差有了实感 (I have a real understanding of the height difference between Zhang Ling, He and Tian Xiwei)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E8%BA%AB%E9%AB%98%E5%B7%AE%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `82.4K 🔥` `-81%`
1. [伊朗称打击超200处美以目标](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E6%89%93%E5%87%BB%E8%B6%85200%E5%A4%84%E7%BE%8E%E4%BB%A5%E7%9B%AE%E6%A0%87%23) `82.4K 🔥` `-81%`

Updated at 2026-03-08 11:38:02

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
