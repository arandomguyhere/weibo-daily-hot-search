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

1. [警方提级处理男生报警后再遭施暴 (The police escalated the case against a boy who was violently raped again after calling the police)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E6%8F%90%E7%BA%A7%E5%A4%84%E7%90%86%E7%94%B7%E7%94%9F%E6%8A%A5%E8%AD%A6%E5%90%8E%E5%86%8D%E9%81%AD%E6%96%BD%E6%9A%B4%23) `1.4M 🔥` `NEW`
1. [白敬亭携问界M6纯电新版本登场](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E6%90%BA%E9%97%AE%E7%95%8CM6%E7%BA%AF%E7%94%B5%E6%96%B0%E7%89%88%E6%9C%AC%E7%99%BB%E5%9C%BA%23) `1.2M 🔥` `NEW`
1. [哈兰德进球](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E8%BF%9B%E7%90%83%23) `1.1M 🔥` `NEW`
1. [伊拉克vs挪威](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%8B%89%E5%85%8Bvs%E6%8C%AA%E5%A8%81%23) `902.0K 🔥` `NEW`
1. [王濛一到甘露寺那段我就快进](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E4%B8%80%E5%88%B0%E7%94%98%E9%9C%B2%E5%AF%BA%E9%82%A3%E6%AE%B5%E6%88%91%E5%B0%B1%E5%BF%AB%E8%BF%9B%23) `374.6K 🔥` `NEW`
1. [哈兰德梅开二度](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `266.7K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `265.1K 🔥` `NEW`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `263.1K 🔥` `NEW`
1. [石凯 张楚寒](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E5%87%AF%20%E5%BC%A0%E6%A5%9A%E5%AF%92%23) `262.3K 🔥` `NEW`
1. [杭州已经发展到这个地步了吗](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%B7%B2%E7%BB%8F%E5%8F%91%E5%B1%95%E5%88%B0%E8%BF%99%E4%B8%AA%E5%9C%B0%E6%AD%A5%E4%BA%86%E5%90%97%23) `261.1K 🔥` `NEW`
1. [哈兰德 世界杯就这 (Haaland, the World Cup is here)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%20%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B0%B1%E8%BF%99%23) `258.1K 🔥` `NEW`
1. [向佐承认向太曾破坏他的恋情](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E6%89%BF%E8%AE%A4%E5%90%91%E5%A4%AA%E6%9B%BE%E7%A0%B4%E5%9D%8F%E4%BB%96%E7%9A%84%E6%81%8B%E6%83%85%23) `255.6K 🔥` `NEW`
1. [炽夏收视率第一](https://s.weibo.com/weibo?q=%23%E7%82%BD%E5%A4%8F%E6%94%B6%E8%A7%86%E7%8E%87%E7%AC%AC%E4%B8%80%23) `253.9K 🔥` `NEW`
1. [电动汽车用动力蓄电池安全新要求](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%8A%A8%E6%B1%BD%E8%BD%A6%E7%94%A8%E5%8A%A8%E5%8A%9B%E8%93%84%E7%94%B5%E6%B1%A0%E5%AE%89%E5%85%A8%E6%96%B0%E8%A6%81%E6%B1%82%23) `248.3K 🔥` `NEW`
1. [女孩下体漏便两年用1400片卫生巾](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%B8%8B%E4%BD%93%E6%BC%8F%E4%BE%BF%E4%B8%A4%E5%B9%B4%E7%94%A81400%E7%89%87%E5%8D%AB%E7%94%9F%E5%B7%BE%23) `246.9K 🔥` `NEW`
1. [黄金又有重要信号](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%8F%88%E6%9C%89%E9%87%8D%E8%A6%81%E4%BF%A1%E5%8F%B7%23) `246.0K 🔥` `NEW`
1. [都美竹被法院公开判决](https://s.weibo.com/weibo?q=%23%E9%83%BD%E7%BE%8E%E7%AB%B9%E8%A2%AB%E6%B3%95%E9%99%A2%E5%85%AC%E5%BC%80%E5%88%A4%E5%86%B3%23) `240.2K 🔥` `NEW`
1. [吕思瞳回应](https://s.weibo.com/weibo?q=%23%E5%90%95%E6%80%9D%E7%9E%B3%E5%9B%9E%E5%BA%94%23) `224.8K 🔥` `NEW`
1. [哈兰德破门后打坐庆祝](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E7%A0%B4%E9%97%A8%E5%90%8E%E6%89%93%E5%9D%90%E5%BA%86%E7%A5%9D%23) `190.6K 🔥` `NEW`
1. [荷兰弟承认已与赞达亚结婚](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%BC%9F%E6%89%BF%E8%AE%A4%E5%B7%B2%E4%B8%8E%E8%B5%9E%E8%BE%BE%E4%BA%9A%E7%BB%93%E5%A9%9A%23) `163.0K 🔥` `NEW`
1. [阿根廷豪华阵容来了 (Argentina’s luxurious lineup is here)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%B1%AA%E5%8D%8E%E9%98%B5%E5%AE%B9%E6%9D%A5%E4%BA%86%23) `144.6K 🔥` `NEW`
1. [美股半导体股大跌](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E5%8D%8A%E5%AF%BC%E4%BD%93%E8%82%A1%E5%A4%A7%E8%B7%8C%23) `128.8K 🔥` `NEW`
1. [曾志伟夸成毅很努力有内涵](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E5%BF%97%E4%BC%9F%E5%A4%B8%E6%88%90%E6%AF%85%E5%BE%88%E5%8A%AA%E5%8A%9B%E6%9C%89%E5%86%85%E6%B6%B5%23) `126.3K 🔥` `NEW`
1. [刘品言回应安以轩复出](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%93%81%E8%A8%80%E5%9B%9E%E5%BA%94%E5%AE%89%E4%BB%A5%E8%BD%A9%E5%A4%8D%E5%87%BA%23) `107.0K 🔥` `NEW`
1. [张雨剑甚至不肯给吴倩名分](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%A8%E5%89%91%E7%94%9A%E8%87%B3%E4%B8%8D%E8%82%AF%E7%BB%99%E5%90%B4%E5%80%A9%E5%90%8D%E5%88%86%23) `101.3K 🔥` `NEW`
1. [金枝官宣标注了李一桐原名](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9E%9D%E5%AE%98%E5%AE%A3%E6%A0%87%E6%B3%A8%E4%BA%86%E6%9D%8E%E4%B8%80%E6%A1%90%E5%8E%9F%E5%90%8D%23) `99.7K 🔥` `NEW`
1. [姆巴佩梅开二度 (Mbappe scores twice)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `2.4M 🔥` `+71%`
1. [前5个月国民经济延续向新向优发展态势](https://s.weibo.com/weibo?q=%23%E5%89%8D5%E4%B8%AA%E6%9C%88%E5%9B%BD%E6%B0%91%E7%BB%8F%E6%B5%8E%E5%BB%B6%E7%BB%AD%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%E5%8F%91%E5%B1%95%E6%80%81%E5%8A%BF%23) `1.2M 🔥` `+232%`
1. [姆巴佩法国队史射手王](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%B3%95%E5%9B%BD%E9%98%9F%E5%8F%B2%E5%B0%84%E6%89%8B%E7%8E%8B%23) `808.1K 🔥` `+226%`
1. [现在知道短剧滤镜有多吓人了吧 (Now you know how scary the skit filter is)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9F%A5%E9%81%93%E7%9F%AD%E5%89%A7%E6%BB%A4%E9%95%9C%E6%9C%89%E5%A4%9A%E5%90%93%E4%BA%BA%E4%BA%86%E5%90%A7%23) `268.0K 🔥` `+75%`
1. [小狗之心度猫子之腹](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E4%B9%8B%E5%BF%83%E5%BA%A6%E7%8C%AB%E5%AD%90%E4%B9%8B%E8%85%B9%23) `251.3K 🔥` `+381%`
1. [雷军回应雷军同款](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E9%9B%B7%E5%86%9B%E5%90%8C%E6%AC%BE%23) `250.6K 🔥` `+501%`
1. [26岁游戏代练被母亲骗进戒网瘾机构 (A 26-year-old game power leveler was deceived by his mother into an Internet addiction treatment center)](https://s.weibo.com/weibo?q=%2326%E5%B2%81%E6%B8%B8%E6%88%8F%E4%BB%A3%E7%BB%83%E8%A2%AB%E6%AF%8D%E4%BA%B2%E9%AA%97%E8%BF%9B%E6%88%92%E7%BD%91%E7%98%BE%E6%9C%BA%E6%9E%84%23) `235.4K 🔥` `+166%`
1. [首尔电视剧大赏中国明星Top10](https://s.weibo.com/weibo?q=%23%E9%A6%96%E5%B0%94%E7%94%B5%E8%A7%86%E5%89%A7%E5%A4%A7%E8%B5%8F%E4%B8%AD%E5%9B%BD%E6%98%8E%E6%98%9FTop10%23) `190.6K 🔥` `+266%`
1. [丁禹兮为剧宣取关张新成](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E4%B8%BA%E5%89%A7%E5%AE%A3%E5%8F%96%E5%85%B3%E5%BC%A0%E6%96%B0%E6%88%90%23) `190.5K 🔥` `+179%`
1. [这就是我的冰饮人生观](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E6%88%91%E7%9A%84%E5%86%B0%E9%A5%AE%E4%BA%BA%E7%94%9F%E8%A7%82%23) `190.4K 🔥` `+267%`
1. [中国地震局已启动三级应急响应](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9C%B0%E9%9C%87%E5%B1%80%E5%B7%B2%E5%90%AF%E5%8A%A8%E4%B8%89%E7%BA%A7%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94%23) `190.3K 🔥` `+265%`
1. [曝电梯坠亡监控缺失](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%94%B5%E6%A2%AF%E5%9D%A0%E4%BA%A1%E7%9B%91%E6%8E%A7%E7%BC%BA%E5%A4%B1%23) `190.3K 🔥` `+32%`
1. [法国vs塞内加尔 (France vs Senegal)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E5%A1%9E%E5%86%85%E5%8A%A0%E5%B0%94%23) `140.8K 🔥` `+55%`
1. [13岁男孩吃大量甜品呼吸衰竭进PICU](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E7%94%B7%E5%AD%A9%E5%90%83%E5%A4%A7%E9%87%8F%E7%94%9C%E5%93%81%E5%91%BC%E5%90%B8%E8%A1%B0%E7%AB%AD%E8%BF%9BPICU%23) `133.1K 🔥` `+155%`
1. [两句毫不相干的诗放一起天衣无缝 (Two unrelated poems go together seamlessly)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%8F%A5%E6%AF%AB%E4%B8%8D%E7%9B%B8%E5%B9%B2%E7%9A%84%E8%AF%97%E6%94%BE%E4%B8%80%E8%B5%B7%E5%A4%A9%E8%A1%A3%E6%97%A0%E7%BC%9D%23) `128.5K 🔥` `+135%`
1. [100万存1年利息不到1万](https://s.weibo.com/weibo?q=%23100%E4%B8%87%E5%AD%981%E5%B9%B4%E5%88%A9%E6%81%AF%E4%B8%8D%E5%88%B01%E4%B8%87%23) `121.0K 🔥` `+132%`
1. [过度用眼要学会暴力恢复 (You need to learn to recover violently from overuse of your eyes)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E7%94%A8%E7%9C%BC%E8%A6%81%E5%AD%A6%E4%BC%9A%E6%9A%B4%E5%8A%9B%E6%81%A2%E5%A4%8D%23) `113.7K 🔥` `+119%`
1. [接连施暴发小男生母亲为跨区民警](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E8%BF%9E%E6%96%BD%E6%9A%B4%E5%8F%91%E5%B0%8F%E7%94%B7%E7%94%9F%E6%AF%8D%E4%BA%B2%E4%B8%BA%E8%B7%A8%E5%8C%BA%E6%B0%91%E8%AD%A6%23) `111.7K 🔥` `+59%`
1. [日本网友称日本男子很少做家务 (Japanese netizens say Japanese men rarely do housework)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E7%A7%B0%E6%97%A5%E6%9C%AC%E7%94%B7%E5%AD%90%E5%BE%88%E5%B0%91%E5%81%9A%E5%AE%B6%E5%8A%A1%23) `98.6K 🔥` `+89%`
1. [炽夏](https://s.weibo.com/weibo?q=%23%E7%82%BD%E5%A4%8F%23) `82.9K 🔥` `+59%`
1. [王俊凯新专辑 (Wang Junkai's new album)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%96%B0%E4%B8%93%E8%BE%91%23) `82.8K 🔥` `+60%`
1. [DeepSeek首轮融资梁文锋出资200亿](https://s.weibo.com/weibo?q=%23DeepSeek%E9%A6%96%E8%BD%AE%E8%9E%8D%E8%B5%84%E6%A2%81%E6%96%87%E9%94%8B%E5%87%BA%E8%B5%84200%E4%BA%BF%23) `79.1K 🔥` `+92%`
1. [奥利塞 高级](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E5%A1%9E%20%E9%AB%98%E7%BA%A7%23) `85.1K 🔥`
1. [法国3比1塞内加尔](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD3%E6%AF%941%E5%A1%9E%E5%86%85%E5%8A%A0%E5%B0%94%23) `257.4K 🔥` `-59%`
1. [姆巴佩破门](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%A0%B4%E9%97%A8%23) `105.2K 🔥` `-22%`

Updated at 2026-06-17 08:00:08

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
