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

1. [追撞致女警身亡大学生打110求保护 (Policewoman dies after chase, college student calls 110 for protection)](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E6%92%9E%E8%87%B4%E5%A5%B3%E8%AD%A6%E8%BA%AB%E4%BA%A1%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%89%93110%E6%B1%82%E4%BF%9D%E6%8A%A4%23) `589.9K 🔥` `NEW`
1. [国乒淘汰赛签表](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E6%B7%98%E6%B1%B0%E8%B5%9B%E7%AD%BE%E8%A1%A8%23) `421.0K 🔥` `NEW`
1. [这届年轻人的顶级心态](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%8A%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E9%A1%B6%E7%BA%A7%E5%BF%83%E6%80%81%23) `250.0K 🔥` `NEW`
1. [NBA](https://s.weibo.com/weibo?q=%23NBA%23) `249.8K 🔥` `NEW`
1. [莫雷加德回应击败中国男团](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E5%9B%9E%E5%BA%94%E5%87%BB%E8%B4%A5%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A2%23) `248.3K 🔥` `NEW`
1. [刘国正谈国乒男团两连败](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%AD%A3%E8%B0%88%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E4%B8%A4%E8%BF%9E%E8%B4%A5%23) `247.0K 🔥` `NEW`
1. [曾舜晞说回家当然要穿正式点](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E8%AF%B4%E5%9B%9E%E5%AE%B6%E5%BD%93%E7%84%B6%E8%A6%81%E7%A9%BF%E6%AD%A3%E5%BC%8F%E7%82%B9%23) `245.8K 🔥` `NEW`
1. [男子10岁溺水导致无精症无法生育](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9010%E5%B2%81%E6%BA%BA%E6%B0%B4%E5%AF%BC%E8%87%B4%E6%97%A0%E7%B2%BE%E7%97%87%E6%97%A0%E6%B3%95%E7%94%9F%E8%82%B2%23) `245.1K 🔥` `NEW`
1. [吴宜泽10比7墨菲](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD10%E6%AF%947%E5%A2%A8%E8%8F%B2%23) `243.4K 🔥` `NEW`
1. [公司引进AI后将员工降薪裁员](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E5%BC%95%E8%BF%9BAI%E5%90%8E%E5%B0%86%E5%91%98%E5%B7%A5%E9%99%8D%E8%96%AA%E8%A3%81%E5%91%98%23) `242.5K 🔥` `NEW`
1. [邓超孙俪给小花的12岁礼物 (Deng Chao and Sun Li’s 12-year-old gift to Xiaohua)](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%AD%99%E4%BF%AA%E7%BB%99%E5%B0%8F%E8%8A%B1%E7%9A%8412%E5%B2%81%E7%A4%BC%E7%89%A9%23) `220.2K 🔥` `NEW`
1. [猫妈妈把小猫舔得干干净净](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%A6%88%E5%A6%88%E6%8A%8A%E5%B0%8F%E7%8C%AB%E8%88%94%E5%BE%97%E5%B9%B2%E5%B9%B2%E5%87%80%E5%87%80%23) `219.8K 🔥` `NEW`
1. [表达能力弱的人就该这样来练](https://s.weibo.com/weibo?q=%23%E8%A1%A8%E8%BE%BE%E8%83%BD%E5%8A%9B%E5%BC%B1%E7%9A%84%E4%BA%BA%E5%B0%B1%E8%AF%A5%E8%BF%99%E6%A0%B7%E6%9D%A5%E7%BB%83%23) `216.0K 🔥` `NEW`
1. [甜玉米文化为多地文旅提供新思路](https://s.weibo.com/weibo?q=%23%E7%94%9C%E7%8E%89%E7%B1%B3%E6%96%87%E5%8C%96%E4%B8%BA%E5%A4%9A%E5%9C%B0%E6%96%87%E6%97%85%E6%8F%90%E4%BE%9B%E6%96%B0%E6%80%9D%E8%B7%AF%23) `197.3K 🔥` `NEW`
1. [宋祖儿做的番茄牛尾骨](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E5%81%9A%E7%9A%84%E7%95%AA%E8%8C%84%E7%89%9B%E5%B0%BE%E9%AA%A8%23) `185.0K 🔥` `NEW`
1. [吴镇宇连散光都能演出来](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%95%87%E5%AE%87%E8%BF%9E%E6%95%A3%E5%85%89%E9%83%BD%E8%83%BD%E6%BC%94%E5%87%BA%E6%9D%A5%23) `126.2K 🔥` `NEW`
1. [顾客用烧烤签喂食宠物狗店主致歉](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%AE%A2%E7%94%A8%E7%83%A7%E7%83%A4%E7%AD%BE%E5%96%82%E9%A3%9F%E5%AE%A0%E7%89%A9%E7%8B%97%E5%BA%97%E4%B8%BB%E8%87%B4%E6%AD%89%23) `124.2K 🔥` `NEW`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `123.5K 🔥` `NEW`
1. [王楚钦满场救球看哭了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%BB%A1%E5%9C%BA%E6%95%91%E7%90%83%E7%9C%8B%E5%93%AD%E4%BA%86%23) `123.4K 🔥` `NEW`
1. [国乒男团淘汰赛或提前遭遇强队](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E6%B7%98%E6%B1%B0%E8%B5%9B%E6%88%96%E6%8F%90%E5%89%8D%E9%81%AD%E9%81%87%E5%BC%BA%E9%98%9F%23) `121.9K 🔥` `NEW`
1. [王濛叫李小冉祖宗 (Wang Meng calls Li Xiaoran his ancestor)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%8F%AB%E6%9D%8E%E5%B0%8F%E5%86%89%E7%A5%96%E5%AE%97%23) `120.8K 🔥` `NEW`
1. [穆祉丞太湖湾音乐节应援排面](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%A4%AA%E6%B9%96%E6%B9%BE%E9%9F%B3%E4%B9%90%E8%8A%82%E5%BA%94%E6%8F%B4%E6%8E%92%E9%9D%A2%23) `119.3K 🔥` `NEW`
1. [活塞4比3魔术](https://s.weibo.com/weibo?q=%23%E6%B4%BB%E5%A1%9E4%E6%AF%943%E9%AD%94%E6%9C%AF%23) `118.7K 🔥` `NEW`
1. [秦皇岛地震](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E7%9A%87%E5%B2%9B%E5%9C%B0%E9%9C%87%23) `117.7K 🔥` `NEW`
1. [斯诺克](https://s.weibo.com/weibo?q=%23%E6%96%AF%E8%AF%BA%E5%85%8B%23) `117.0K 🔥` `NEW`
1. [买三文鱼套餐吃到虹鳟食客起诉餐厅](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E4%B8%89%E6%96%87%E9%B1%BC%E5%A5%97%E9%A4%90%E5%90%83%E5%88%B0%E8%99%B9%E9%B3%9F%E9%A3%9F%E5%AE%A2%E8%B5%B7%E8%AF%89%E9%A4%90%E5%8E%85%23) `796.6K 🔥` `+616%`
1. [2026五一档总票房已破5亿](https://s.weibo.com/weibo?q=%232026%E4%BA%94%E4%B8%80%E6%A1%A3%E6%80%BB%E7%A5%A8%E6%88%BF%E5%B7%B2%E7%A0%B45%E4%BA%BF%23) `671.5K 🔥` `+27%`
1. [黄灿灿 blackpink都没这么累 (Huang Cancan and blackpink are not so tired)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%20blackpink%E9%83%BD%E6%B2%A1%E8%BF%99%E4%B9%88%E7%B4%AF%23) `445.9K 🔥` `+27%`
1. [周深追不上伴舞气笑了 (Zhou Shen laughed angrily when he couldn't catch up with the dancers)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E8%BF%BD%E4%B8%8D%E4%B8%8A%E4%BC%B4%E8%88%9E%E6%B0%94%E7%AC%91%E4%BA%86%23) `279.4K 🔥` `+122%`
1. [女子凌晨接到去世半年表弟来电](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%8C%E6%99%A8%E6%8E%A5%E5%88%B0%E5%8E%BB%E4%B8%96%E5%8D%8A%E5%B9%B4%E8%A1%A8%E5%BC%9F%E6%9D%A5%E7%94%B5%23) `246.3K 🔥` `+24%`
1. [伊朗公布最新谈判方案](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%AC%E5%B8%83%E6%9C%80%E6%96%B0%E8%B0%88%E5%88%A4%E6%96%B9%E6%A1%88%23) `220.3K 🔥` `+30%`
1. [以色列这次真的紧张了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%BF%99%E6%AC%A1%E7%9C%9F%E7%9A%84%E7%B4%A7%E5%BC%A0%E4%BA%86%23) `139.3K 🔥` `+63%`
1. [单依纯草莓音乐节 (Shan Yichun Strawberry Music Festival)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E8%8D%89%E8%8E%93%E9%9F%B3%E4%B9%90%E8%8A%82%23) `122.4K 🔥` `+41%`
1. [伊朗退了一步 (Iran takes a step back)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%80%80%E4%BA%86%E4%B8%80%E6%AD%A5%23) `120.2K 🔥` `+29%`
1. [林依晨说依赖另一半的人生不会快乐 (Ariel Ariel said that a life dependent on the other half will not be happy)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E8%AF%B4%E4%BE%9D%E8%B5%96%E5%8F%A6%E4%B8%80%E5%8D%8A%E7%9A%84%E4%BA%BA%E7%94%9F%E4%B8%8D%E4%BC%9A%E5%BF%AB%E4%B9%90%23) `118.2K 🔥` `+34%`
1. [孔苑苑肺炎就医次日左肺已全白](https://s.weibo.com/weibo?q=%23%E5%AD%94%E8%8B%91%E8%8B%91%E8%82%BA%E7%82%8E%E5%B0%B1%E5%8C%BB%E6%AC%A1%E6%97%A5%E5%B7%A6%E8%82%BA%E5%B7%B2%E5%85%A8%E7%99%BD%23) `116.3K 🔥` `+35%`
1. [严浩翔爱和痛催促从幼稚变成熟](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%88%B1%E5%92%8C%E7%97%9B%E5%82%AC%E4%BF%83%E4%BB%8E%E5%B9%BC%E7%A8%9A%E5%8F%98%E6%88%90%E7%86%9F%23) `115.8K 🔥` `+34%`
1. [九尾发博 (Jiuwei blog)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E5%8F%91%E5%8D%9A%23) `115.0K 🔥` `+41%`
1. [国乒男团2比3瑞典 (National table tennis men's team 2 to 3 Sweden)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A22%E6%AF%943%E7%91%9E%E5%85%B8%23) `1.1M 🔥`
1. [湖南广电 AI播新闻 (Hunan Radio and Television AI news broadcast)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%B9%BF%E7%94%B5%20AI%E6%92%AD%E6%96%B0%E9%97%BB%23) `249.2K 🔥`
1. [这才是减脂餐的真正物价 (This is the real price of fat-reducing meals)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E5%87%8F%E8%84%82%E9%A4%90%E7%9A%84%E7%9C%9F%E6%AD%A3%E7%89%A9%E4%BB%B7%23) `243.2K 🔥`
1. [梁靖崑状态 (Liang Jingkun status)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E7%8A%B6%E6%80%81%23) `125.1K 🔥`
1. [妻子频繁私发孩子照片给陌生男子 (Wife frequently sends private photos of children to strange men)](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E9%A2%91%E7%B9%81%E7%A7%81%E5%8F%91%E5%AD%A9%E5%AD%90%E7%85%A7%E7%89%87%E7%BB%99%E9%99%8C%E7%94%9F%E7%94%B7%E5%AD%90%23) `121.3K 🔥`
1. [国乒](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%23) `244.6K 🔥` `-63%`
1. [国羽汤杯卫冕](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E7%BE%BD%E6%B1%A4%E6%9D%AF%E5%8D%AB%E5%86%95%23) `220.2K 🔥` `-50%`
1. [范丞丞 都给我出来 (Fan Chengcheng, come out here)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%20%E9%83%BD%E7%BB%99%E6%88%91%E5%87%BA%E6%9D%A5%23) `126.3K 🔥` `-23%`
1. [支付宝把便利店搞成球迷流水席](https://s.weibo.com/weibo?q=%23%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8A%8A%E4%BE%BF%E5%88%A9%E5%BA%97%E6%90%9E%E6%88%90%E7%90%83%E8%BF%B7%E6%B5%81%E6%B0%B4%E5%B8%AD%23) `125.3K 🔥` `-38%`
1. [张雪机车德比斯退赛](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%BE%B7%E6%AF%94%E6%96%AF%E9%80%80%E8%B5%9B%23) `120.0K 🔥` `-26%`
1. [国乒男团小组赛一胜两负 (The national table tennis men's team had one win and two losses in the group stage)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%B0%8F%E7%BB%84%E8%B5%9B%E4%B8%80%E8%83%9C%E4%B8%A4%E8%B4%9F%23) `115.3K 🔥` `-35%`
1. [范丞丞妈妈71岁状态 (Fan Chengcheng’s mother’s 71-year-old status)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%A6%88%E5%A6%8871%E5%B2%81%E7%8A%B6%E6%80%81%23) `114.4K 🔥` `-71%`

Updated at 2026-05-04 09:16:48

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
