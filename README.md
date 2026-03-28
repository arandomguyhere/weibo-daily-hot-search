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

1. [白日提灯直播 (Lantern live broadcast during the day)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%9B%B4%E6%92%AD%23) `363.3K 🔥` `NEW`
1. [国际期刊刊登心梗防治中国方案](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E6%9C%9F%E5%88%8A%E5%88%8A%E7%99%BB%E5%BF%83%E6%A2%97%E9%98%B2%E6%B2%BB%E4%B8%AD%E5%9B%BD%E6%96%B9%E6%A1%88%23) `311.2K 🔥` `NEW`
1. [TF四代二班见面会](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%8C%E7%8F%AD%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `169.4K 🔥` `NEW`
1. [终于懂大学面积小的含金量了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%87%82%E5%A4%A7%E5%AD%A6%E9%9D%A2%E7%A7%AF%E5%B0%8F%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E4%BA%86%23) `154.8K 🔥` `NEW`
1. [女子断碳水2月确诊糖尿病前期](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%96%AD%E7%A2%B3%E6%B0%B42%E6%9C%88%E7%A1%AE%E8%AF%8A%E7%B3%96%E5%B0%BF%E7%97%85%E5%89%8D%E6%9C%9F%23) `154.6K 🔥` `NEW`
1. [一念江南](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%23) `154.3K 🔥` `NEW`
1. [日本搞大杀器妄图覆盖中国全境](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%90%9E%E5%A4%A7%E6%9D%80%E5%99%A8%E5%A6%84%E5%9B%BE%E8%A6%86%E7%9B%96%E4%B8%AD%E5%9B%BD%E5%85%A8%E5%A2%83%23) `107.5K 🔥` `NEW`
1. [胡塞武装称打击以色列重要军事目标](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%A1%9E%E6%AD%A6%E8%A3%85%E7%A7%B0%E6%89%93%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%E9%87%8D%E8%A6%81%E5%86%9B%E4%BA%8B%E7%9B%AE%E6%A0%87%23) `102.3K 🔥` `NEW`
1. [张萌说白日提灯挺好看的](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E8%AF%B4%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E6%8C%BA%E5%A5%BD%E7%9C%8B%E7%9A%84%23) `102.1K 🔥` `NEW`
1. [90后寻宠师2年狂赚近百万](https://s.weibo.com/weibo?q=%2390%E5%90%8E%E5%AF%BB%E5%AE%A0%E5%B8%882%E5%B9%B4%E7%8B%82%E8%B5%9A%E8%BF%91%E7%99%BE%E4%B8%87%23) `99.8K 🔥` `NEW`
1. [李昌钰唯一被推翻的案件 (The only case in which Li Changyu was overturned)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E5%94%AF%E4%B8%80%E8%A2%AB%E6%8E%A8%E7%BF%BB%E7%9A%84%E6%A1%88%E4%BB%B6%23) `86.8K 🔥` `NEW`
1. [律师谈孕妻遇男医生做产检丈夫闹事](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%B0%88%E5%AD%95%E5%A6%BB%E9%81%87%E7%94%B7%E5%8C%BB%E7%94%9F%E5%81%9A%E4%BA%A7%E6%A3%80%E4%B8%88%E5%A4%AB%E9%97%B9%E4%BA%8B%23) `85.1K 🔥` `NEW`
1. [纪凌尘把宁静整自卑了](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E5%87%8C%E5%B0%98%E6%8A%8A%E5%AE%81%E9%9D%99%E6%95%B4%E8%87%AA%E5%8D%91%E4%BA%86%23) `85.0K 🔥` `NEW`
1. [把最会吃的一群人聚到一起了](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E6%9C%80%E4%BC%9A%E5%90%83%E7%9A%84%E4%B8%80%E7%BE%A4%E4%BA%BA%E8%81%9A%E5%88%B0%E4%B8%80%E8%B5%B7%E4%BA%86%23) `85.0K 🔥` `NEW`
1. [怎么我成了大人就不一样了](https://s.weibo.com/weibo?q=%23%E6%80%8E%E4%B9%88%E6%88%91%E6%88%90%E4%BA%86%E5%A4%A7%E4%BA%BA%E5%B0%B1%E4%B8%8D%E4%B8%80%E6%A0%B7%E4%BA%86%23) `80.5K 🔥` `NEW`
1. [严重怀疑大姐在男浴室干过搓澡工](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E9%87%8D%E6%80%80%E7%96%91%E5%A4%A7%E5%A7%90%E5%9C%A8%E7%94%B7%E6%B5%B4%E5%AE%A4%E5%B9%B2%E8%BF%87%E6%90%93%E6%BE%A1%E5%B7%A5%23) `78.8K 🔥` `NEW`
1. [现货黄金日内涨超100美元](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%E6%97%A5%E5%86%85%E6%B6%A8%E8%B6%85100%E7%BE%8E%E5%85%83%23) `78.6K 🔥` `NEW`
1. [煤气灯效应](https://s.weibo.com/weibo?q=%23%E7%85%A4%E6%B0%94%E7%81%AF%E6%95%88%E5%BA%94%23) `75.8K 🔥` `NEW`
1. [泰国与伊朗达成油轮通行协议](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E4%B8%8E%E4%BC%8A%E6%9C%97%E8%BE%BE%E6%88%90%E6%B2%B9%E8%BD%AE%E9%80%9A%E8%A1%8C%E5%8D%8F%E8%AE%AE%23) `75.6K 🔥` `NEW`
1. [45岁男子心梗离世2天前还在跑马拉松](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E7%94%B7%E5%AD%90%E5%BF%83%E6%A2%97%E7%A6%BB%E4%B8%962%E5%A4%A9%E5%89%8D%E8%BF%98%E5%9C%A8%E8%B7%91%E9%A9%AC%E6%8B%89%E6%9D%BE%23) `207.8K 🔥` `+58%`
1. [点奶茶要求奶和茶分离 (When ordering milk tea, please separate the milk and tea.)](https://s.weibo.com/weibo?q=%23%E7%82%B9%E5%A5%B6%E8%8C%B6%E8%A6%81%E6%B1%82%E5%A5%B6%E5%92%8C%E8%8C%B6%E5%88%86%E7%A6%BB%23) `125.8K 🔥` `+28%`
1. [白日提灯热度](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%83%AD%E5%BA%A6%23) `1.1M 🔥`
1. [新娘回应小伙用吸粪车做婚车](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E5%9B%9E%E5%BA%94%E5%B0%8F%E4%BC%99%E7%94%A8%E5%90%B8%E7%B2%AA%E8%BD%A6%E5%81%9A%E5%A9%9A%E8%BD%A6%23) `793.3K 🔥`
1. [正能量创作者大会](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E8%83%BD%E9%87%8F%E5%88%9B%E4%BD%9C%E8%80%85%E5%A4%A7%E4%BC%9A%23) `653.3K 🔥`
1. [40岁心梗幸存者已辞职回农村静养](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E5%BF%83%E6%A2%97%E5%B9%B8%E5%AD%98%E8%80%85%E5%B7%B2%E8%BE%9E%E8%81%8C%E5%9B%9E%E5%86%9C%E6%9D%91%E9%9D%99%E5%85%BB%23) `323.5K 🔥`
1. [徐良删除汪苏泷后会无期作词作曲](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E5%88%A0%E9%99%A4%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%90%8E%E4%BC%9A%E6%97%A0%E6%9C%9F%E4%BD%9C%E8%AF%8D%E4%BD%9C%E6%9B%B2%23) `319.4K 🔥`
1. [单亲妈妈遭羁押821天被判无罪](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BA%B2%E5%A6%88%E5%A6%88%E9%81%AD%E7%BE%81%E6%8A%BC821%E5%A4%A9%E8%A2%AB%E5%88%A4%E6%97%A0%E7%BD%AA%23) `306.0K 🔥`
1. [全红婵19岁气场全开 (Quan Hongchan is full of energy at the age of 19)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B519%E5%B2%81%E6%B0%94%E5%9C%BA%E5%85%A8%E5%BC%80%23) `169.4K 🔥`
1. [伊朗首都巨大爆炸](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A6%96%E9%83%BD%E5%B7%A8%E5%A4%A7%E7%88%86%E7%82%B8%23) `169.2K 🔥`
1. [粉底液将军 高跟鞋女战士](https://s.weibo.com/weibo?q=%23%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%20%E9%AB%98%E8%B7%9F%E9%9E%8B%E5%A5%B3%E6%88%98%E5%A3%AB%23) `153.4K 🔥`
1. [白日提灯第3集17分57秒](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%AC%AC3%E9%9B%8617%E5%88%8657%E7%A7%92%23) `107.1K 🔥`
1. [不要让任何人白嫖你的福气 (Don't let anyone take advantage of your blessings)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E8%AE%A9%E4%BB%BB%E4%BD%95%E4%BA%BA%E7%99%BD%E5%AB%96%E4%BD%A0%E7%9A%84%E7%A6%8F%E6%B0%94%23) `89.9K 🔥`
1. [不给彩礼就不结婚或成违法行为 (If you don’t give a bride price, you won’t get married or it will be illegal.)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%BB%99%E5%BD%A9%E7%A4%BC%E5%B0%B1%E4%B8%8D%E7%BB%93%E5%A9%9A%E6%88%96%E6%88%90%E8%BF%9D%E6%B3%95%E8%A1%8C%E4%B8%BA%23) `85.4K 🔥`
1. [严浩翔Fly概念视频 (Yan Haoxiang Fly concept video)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94Fly%E6%A6%82%E5%BF%B5%E8%A7%86%E9%A2%91%23) `85.1K 🔥`
1. [白日提灯开播 (Day Lantern is on)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E5%BC%80%E6%92%AD%23) `81.4K 🔥`
1. [五哈 (Five ha)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%88%23) `78.1K 🔥`
1. [周末真正滋养大脑的方式](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9C%AB%E7%9C%9F%E6%AD%A3%E6%BB%8B%E5%85%BB%E5%A4%A7%E8%84%91%E7%9A%84%E6%96%B9%E5%BC%8F%23) `73.7K 🔥`
1. [青菜焦虑症](https://s.weibo.com/weibo?q=%23%E9%9D%92%E8%8F%9C%E7%84%A6%E8%99%91%E7%97%87%23) `207.5K 🔥` `-25%`
1. [事业编 (Career Editor)](https://s.weibo.com/weibo?q=%23%E4%BA%8B%E4%B8%9A%E7%BC%96%23) `200.3K 🔥` `-26%`
1. [宋威龙签约天浩盛世 (Song Weilong signed a contract with Tianhao Shengshi)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%AD%BE%E7%BA%A6%E5%A4%A9%E6%B5%A9%E7%9B%9B%E4%B8%96%23) `199.4K 🔥` `-25%`
1. [升糖刺客](https://s.weibo.com/weibo?q=%23%E5%8D%87%E7%B3%96%E5%88%BA%E5%AE%A2%23) `191.4K 🔥` `-27%`
1. [张凌赫多年前发文抨击影视圈 (Zhang Linghe published an article criticizing the film and television industry many years ago)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%9A%E5%B9%B4%E5%89%8D%E5%8F%91%E6%96%87%E6%8A%A8%E5%87%BB%E5%BD%B1%E8%A7%86%E5%9C%88%23) `183.7K 🔥` `-28%`
1. [阚清子想从116斤瘦到90斤](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%83%B3%E4%BB%8E116%E6%96%A4%E7%98%A6%E5%88%B090%E6%96%A4%23) `172.9K 🔥` `-33%`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `169.3K 🔥` `-36%`
1. [理发店潜规则](https://s.weibo.com/weibo?q=%23%E7%90%86%E5%8F%91%E5%BA%97%E6%BD%9C%E8%A7%84%E5%88%99%23) `160.9K 🔥` `-29%`
1. [王俊凯工作室出图](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%87%BA%E5%9B%BE%23) `120.6K 🔥` `-56%`
1. [粉底液将军被嘲不该仅演员承担](https://s.weibo.com/weibo?q=%23%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%E8%A2%AB%E5%98%B2%E4%B8%8D%E8%AF%A5%E4%BB%85%E6%BC%94%E5%91%98%E6%89%BF%E6%8B%85%23) `110.9K 🔥` `-33%`
1. [孔雪儿工作室发文](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E6%96%87%23) `103.7K 🔥` `-37%`
1. [香蕉一开始其实是直的 (Bananas are actually straight at first)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E8%95%89%E4%B8%80%E5%BC%80%E5%A7%8B%E5%85%B6%E5%AE%9E%E6%98%AF%E7%9B%B4%E7%9A%84%23) `101.5K 🔥` `-35%`
1. [严浩翔带着八字眉向大家打招呼](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%B8%A6%E7%9D%80%E5%85%AB%E5%AD%97%E7%9C%89%E5%90%91%E5%A4%A7%E5%AE%B6%E6%89%93%E6%8B%9B%E5%91%BC%23) `96.7K 🔥` `-22%`
1. [杨幂直播换了一双博肯鞋](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%9B%B4%E6%92%AD%E6%8D%A2%E4%BA%86%E4%B8%80%E5%8F%8C%E5%8D%9A%E8%82%AF%E9%9E%8B%23) `81.5K 🔥` `-42%`

Updated at 2026-03-28 17:22:54

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
