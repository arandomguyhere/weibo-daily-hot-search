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

1. [孙颖莎vs早田希娜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%23) `1.2M 🔥` `NEW`
1. [早田希娜看笔记打孙颖莎](https://s.weibo.com/weibo?q=%23%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E7%9C%8B%E7%AC%94%E8%AE%B0%E6%89%93%E5%AD%99%E9%A2%96%E8%8E%8E%23) `850.5K 🔥` `NEW`
1. [本周我国硬核成果持续上新](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E6%88%91%E5%9B%BD%E7%A1%AC%E6%A0%B8%E6%88%90%E6%9E%9C%E6%8C%81%E7%BB%AD%E4%B8%8A%E6%96%B0%23) `692.6K 🔥` `NEW`
1. [奔跑吧厉娜](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E5%8E%89%E5%A8%9C%23) `692.1K 🔥` `NEW`
1. [女子注射生长因子脸疯长成畸形](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B3%A8%E5%B0%84%E7%94%9F%E9%95%BF%E5%9B%A0%E5%AD%90%E8%84%B8%E7%96%AF%E9%95%BF%E6%88%90%E7%95%B8%E5%BD%A2%23) `690.6K 🔥` `NEW`
1. [刘学义躲镜头](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E8%BA%B2%E9%95%9C%E5%A4%B4%23) `687.0K 🔥` `NEW`
1. [农业农村部辟谣立体AI养虾项目](https://s.weibo.com/weibo?q=%23%E5%86%9C%E4%B8%9A%E5%86%9C%E6%9D%91%E9%83%A8%E8%BE%9F%E8%B0%A3%E7%AB%8B%E4%BD%93AI%E5%85%BB%E8%99%BE%E9%A1%B9%E7%9B%AE%23) `685.7K 🔥` `NEW`
1. [苹果Duo中国版被指偷工减料](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CDuo%E4%B8%AD%E5%9B%BD%E7%89%88%E8%A2%AB%E6%8C%87%E5%81%B7%E5%B7%A5%E5%87%8F%E6%96%99%23) `685.3K 🔥` `NEW`
1. [人民日报评随意恶意举报](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E9%9A%8F%E6%84%8F%E6%81%B6%E6%84%8F%E4%B8%BE%E6%8A%A5%23) `684.9K 🔥` `NEW`
1. [无锡队苏超夺冠](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%94%A1%E9%98%9F%E8%8B%8F%E8%B6%85%E5%A4%BA%E5%86%A0%23) `661.5K 🔥` `NEW`
1. [男孩想闯红灯被老人劝阻情绪失控](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E6%83%B3%E9%97%AF%E7%BA%A2%E7%81%AF%E8%A2%AB%E8%80%81%E4%BA%BA%E5%8A%9D%E9%98%BB%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `620.2K 🔥` `NEW`
1. [厉娜评论区打脸来得太快](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E8%AF%84%E8%AE%BA%E5%8C%BA%E6%89%93%E8%84%B8%E6%9D%A5%E5%BE%97%E5%A4%AA%E5%BF%AB%23) `599.8K 🔥` `NEW`
1. [宋威龙搞砸了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%90%9E%E7%A0%B8%E4%BA%86%23) `577.6K 🔥` `NEW`
1. [被文吉儿霸凌当事人回应](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%96%87%E5%90%89%E5%84%BF%E9%9C%B8%E5%87%8C%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%9B%9E%E5%BA%94%23) `537.5K 🔥` `NEW`
1. [微博视界大会座位](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E8%A7%86%E7%95%8C%E5%A4%A7%E4%BC%9A%E5%BA%A7%E4%BD%8D%23) `506.7K 🔥` `NEW`
1. [4AM任 咚咚](https://s.weibo.com/weibo?q=%234AM%E4%BB%BB%20%E5%92%9A%E5%92%9A%23) `487.6K 🔥` `NEW`
1. [全红婵家宴](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E5%AE%B6%E5%AE%B4%23) `475.1K 🔥` `NEW`
1. [吴镇宇说孟子义演技跟歌艺一样进步](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%95%87%E5%AE%87%E8%AF%B4%E5%AD%9F%E5%AD%90%E4%B9%89%E6%BC%94%E6%8A%80%E8%B7%9F%E6%AD%8C%E8%89%BA%E4%B8%80%E6%A0%B7%E8%BF%9B%E6%AD%A5%23) `475.0K 🔥` `NEW`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `435.6K 🔥` `NEW`
1. [跑男导演来宋雨琦演唱会了](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E5%AF%BC%E6%BC%94%E6%9D%A5%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%86%23) `435.4K 🔥` `NEW`
1. [吴彤领奖卡壳谢娜笑出声](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BD%A4%E9%A2%86%E5%A5%96%E5%8D%A1%E5%A3%B3%E8%B0%A2%E5%A8%9C%E7%AC%91%E5%87%BA%E5%A3%B0%23) `432.6K 🔥` `NEW`
1. [扎堆去大小兴安岭买房的年轻人](https://s.weibo.com/weibo?q=%23%E6%89%8E%E5%A0%86%E5%8E%BB%E5%A4%A7%E5%B0%8F%E5%85%B4%E5%AE%89%E5%B2%AD%E4%B9%B0%E6%88%BF%E7%9A%84%E5%B9%B4%E8%BD%BB%E4%BA%BA%23) `427.7K 🔥` `NEW`
1. [孙颖莎应对追身球极限操作](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%BA%94%E5%AF%B9%E8%BF%BD%E8%BA%AB%E7%90%83%E6%9E%81%E9%99%90%E6%93%8D%E4%BD%9C%23) `426.5K 🔥` `NEW`
1. [刘诗诗嘟嘴逗笑关晓彤](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E5%98%9F%E5%98%B4%E9%80%97%E7%AC%91%E5%85%B3%E6%99%93%E5%BD%A4%23) `424.0K 🔥` `NEW`
1. [建议大家都8点半睡觉](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E9%83%BD8%E7%82%B9%E5%8D%8A%E7%9D%A1%E8%A7%89%23) `420.5K 🔥` `NEW`
1. [W盛典阵容](https://s.weibo.com/weibo?q=%23W%E7%9B%9B%E5%85%B8%E9%98%B5%E5%AE%B9%23) `388.0K 🔥` `NEW`
1. [发现大家都有省钱意识了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%9C%89%E7%9C%81%E9%92%B1%E6%84%8F%E8%AF%86%E4%BA%86%23) `358.5K 🔥` `NEW`
1. [苏超哈兰德是无锡产的](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%93%88%E5%85%B0%E5%BE%B7%E6%98%AF%E6%97%A0%E9%94%A1%E4%BA%A7%E7%9A%84%23) `351.5K 🔥` `NEW`
1. [谭松韵王凯拥抱](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E7%8E%8B%E5%87%AF%E6%8B%A5%E6%8A%B1%23) `348.2K 🔥` `NEW`
1. [苏新皓的网盘更新了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E7%9A%84%E7%BD%91%E7%9B%98%E6%9B%B4%E6%96%B0%E4%BA%86%23) `338.7K 🔥` `NEW`
1. [金价暴跌是买大金镯还是等7字头](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%9A%B4%E8%B7%8C%E6%98%AF%E4%B9%B0%E5%A4%A7%E9%87%91%E9%95%AF%E8%BF%98%E6%98%AF%E7%AD%897%E5%AD%97%E5%A4%B4%23) `299.1K 🔥` `NEW`
1. [小城良方回应热度破10000](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%9B%9E%E5%BA%94%E7%83%AD%E5%BA%A6%E7%A0%B410000%23) `263.6K 🔥` `NEW`
1. [切尔西2比0曼联](https://s.weibo.com/weibo?q=%23%E5%88%87%E5%B0%94%E8%A5%BF2%E6%AF%940%E6%9B%BC%E8%81%94%23) `249.6K 🔥` `NEW`
1. [文青只会爱上文盲](https://s.weibo.com/weibo?q=%23%E6%96%87%E9%9D%92%E5%8F%AA%E4%BC%9A%E7%88%B1%E4%B8%8A%E6%96%87%E7%9B%B2%23) `248.6K 🔥` `NEW`
1. [鹿晗太帅了鹿大人](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%A4%AA%E5%B8%85%E4%BA%86%E9%B9%BF%E5%A4%A7%E4%BA%BA%23) `242.6K 🔥` `NEW`
1. [K100让手机也进入过日子时代](https://s.weibo.com/weibo?q=%23K100%E8%AE%A9%E6%89%8B%E6%9C%BA%E4%B9%9F%E8%BF%9B%E5%85%A5%E8%BF%87%E6%97%A5%E5%AD%90%E6%97%B6%E4%BB%A3%23) `234.1K 🔥` `NEW`
1. [李一桐 大家送了我一个le](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%20%E5%A4%A7%E5%AE%B6%E9%80%81%E4%BA%86%E6%88%91%E4%B8%80%E4%B8%AAle%23) `231.3K 🔥` `NEW`
1. [田曦薇 腰臀比](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E8%85%B0%E8%87%80%E6%AF%94%23) `225.5K 🔥` `NEW`
1. [精神病男子因幻听杀人案最新进展](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E7%A5%9E%E7%97%85%E7%94%B7%E5%AD%90%E5%9B%A0%E5%B9%BB%E5%90%AC%E6%9D%80%E4%BA%BA%E6%A1%88%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `221.6K 🔥` `NEW`
1. [王传君小跑去扶孟子义](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E5%B0%8F%E8%B7%91%E5%8E%BB%E6%89%B6%E5%AD%9F%E5%AD%90%E4%B9%89%23) `220.3K 🔥` `NEW`
1. [毛晓彤的皮肤是水做的吧](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E5%BD%A4%E7%9A%84%E7%9A%AE%E8%82%A4%E6%98%AF%E6%B0%B4%E5%81%9A%E7%9A%84%E5%90%A7%23) `217.6K 🔥` `NEW`
1. [神行者8大五座解锁生活魔法](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%A1%8C%E8%80%858%E5%A4%A7%E4%BA%94%E5%BA%A7%E8%A7%A3%E9%94%81%E7%94%9F%E6%B4%BB%E9%AD%94%E6%B3%95%23) `216.5K 🔥` `NEW`
1. [煤老板为何被怀念](https://s.weibo.com/weibo?q=%23%E7%85%A4%E8%80%81%E6%9D%BF%E4%B8%BA%E4%BD%95%E8%A2%AB%E6%80%80%E5%BF%B5%23) `216.3K 🔥` `NEW`
1. [马天宇见面会](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `201.4K 🔥` `NEW`
1. [将有2名中国人登陆月球](https://s.weibo.com/weibo?q=%23%E5%B0%86%E6%9C%892%E5%90%8D%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%99%BB%E9%99%86%E6%9C%88%E7%90%83%23) `200.2K 🔥` `NEW`
1. [张若昀回应内娱刘关张](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E5%9B%9E%E5%BA%94%E5%86%85%E5%A8%B1%E5%88%98%E5%85%B3%E5%BC%A0%23) `196.8K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `188.5K 🔥` `NEW`
1. [猫天天是懂怎么撩娜扎的](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%A4%A9%E5%A4%A9%E6%98%AF%E6%87%82%E6%80%8E%E4%B9%88%E6%92%A9%E5%A8%9C%E6%89%8E%E7%9A%84%23) `188.0K 🔥` `NEW`
1. [曼联切尔西利马染红](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E8%81%94%E5%88%87%E5%B0%94%E8%A5%BF%E5%88%A9%E9%A9%AC%E6%9F%93%E7%BA%A2%23) `187.7K 🔥` `NEW`
1. [吾恩去世](https://s.weibo.com/weibo?q=%23%E5%90%BE%E6%81%A9%E5%8E%BB%E4%B8%96%23) `307.8K 🔥` `+30%`

Updated at 2026-10-31 23:14:14

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
