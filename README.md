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

1. [严浩翔哭了 (Yan Haoxiang cried)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%93%AD%E4%BA%86%23) `886.6K 🔥` `NEW`
1. [王橹杰高会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%AB%98%E4%BC%9A%23) `435.7K 🔥` `NEW`
1. [荣耀将推出张雪机车冠军联名款手表](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E5%B0%86%E6%8E%A8%E5%87%BA%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%86%A0%E5%86%9B%E8%81%94%E5%90%8D%E6%AC%BE%E6%89%8B%E8%A1%A8%23) `395.7K 🔥` `NEW`
1. [老君山景区全面禁止夜爬](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%90%9B%E5%B1%B1%E6%99%AF%E5%8C%BA%E5%85%A8%E9%9D%A2%E7%A6%81%E6%AD%A2%E5%A4%9C%E7%88%AC%23) `364.6K 🔥` `NEW`
1. [白鹿十周年见面会定档](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8D%81%E5%91%A8%E5%B9%B4%E8%A7%81%E9%9D%A2%E4%BC%9A%E5%AE%9A%E6%A1%A3%23) `360.5K 🔥` `NEW`
1. [一诺被开闪光灯](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E8%A2%AB%E5%BC%80%E9%97%AA%E5%85%89%E7%81%AF%23) `360.4K 🔥` `NEW`
1. [王楚钦林诗栋梁靖崑开门红](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%9E%97%E8%AF%97%E6%A0%8B%E6%A2%81%E9%9D%96%E5%B4%91%E5%BC%80%E9%97%A8%E7%BA%A2%23) `287.1K 🔥` `NEW`
1. [徐良让张远去办公室找他](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E8%AE%A9%E5%BC%A0%E8%BF%9C%E5%8E%BB%E5%8A%9E%E5%85%AC%E5%AE%A4%E6%89%BE%E4%BB%96%23) `274.2K 🔥` `NEW`
1. [卢昱晓收藏与檀健次cp视频](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E6%94%B6%E8%97%8F%E4%B8%8E%E6%AA%80%E5%81%A5%E6%AC%A1cp%E8%A7%86%E9%A2%91%23) `265.9K 🔥` `NEW`
1. [伊朗放宽与美国恢复和谈条件](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%94%BE%E5%AE%BD%E4%B8%8E%E7%BE%8E%E5%9B%BD%E6%81%A2%E5%A4%8D%E5%92%8C%E8%B0%88%E6%9D%A1%E4%BB%B6%23) `254.7K 🔥` `NEW`
1. [张真源高音 (Zhang Zhenyuan soprano)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E9%AB%98%E9%9F%B3%23) `254.6K 🔥` `NEW`
1. [大衣哥握手太多致手指被真菌感染](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%A1%A3%E5%93%A5%E6%8F%A1%E6%89%8B%E5%A4%AA%E5%A4%9A%E8%87%B4%E6%89%8B%E6%8C%87%E8%A2%AB%E7%9C%9F%E8%8F%8C%E6%84%9F%E6%9F%93%23) `231.3K 🔥` `NEW`
1. [iPhone18Pro最低配或不涨价](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%9C%80%E4%BD%8E%E9%85%8D%E6%88%96%E4%B8%8D%E6%B6%A8%E4%BB%B7%23) `212.6K 🔥` `NEW`
1. [张可盈把短剧男顶流全亲了一遍](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%8F%AF%E7%9B%88%E6%8A%8A%E7%9F%AD%E5%89%A7%E7%94%B7%E9%A1%B6%E6%B5%81%E5%85%A8%E4%BA%B2%E4%BA%86%E4%B8%80%E9%81%8D%23) `211.0K 🔥` `NEW`
1. [便利店被长相成熟未成年设套买烟](https://s.weibo.com/weibo?q=%23%E4%BE%BF%E5%88%A9%E5%BA%97%E8%A2%AB%E9%95%BF%E7%9B%B8%E6%88%90%E7%86%9F%E6%9C%AA%E6%88%90%E5%B9%B4%E8%AE%BE%E5%A5%97%E4%B9%B0%E7%83%9F%23) `187.9K 🔥` `NEW`
1. [钟意疾跑鞋](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%84%8F%E7%96%BE%E8%B7%91%E9%9E%8B%23) `186.5K 🔥` `NEW`
1. [张雪机车回应再次夺冠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%9B%9E%E5%BA%94%E5%86%8D%E6%AC%A1%E5%A4%BA%E5%86%A0%23) `1.3M 🔥` `+136%`
1. [刘丁硕假期厕所直播翻车](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E5%81%87%E6%9C%9F%E5%8E%95%E6%89%80%E7%9B%B4%E6%92%AD%E7%BF%BB%E8%BD%A6%23) `600.7K 🔥` `+67%`
1. [五一假期真是捅人窝了吧](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%81%87%E6%9C%9F%E7%9C%9F%E6%98%AF%E6%8D%85%E4%BA%BA%E7%AA%9D%E4%BA%86%E5%90%A7%23) `408.3K 🔥` `+62%`
1. [贺娇龙账号更名并清空橱窗](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%A8%87%E9%BE%99%E8%B4%A6%E5%8F%B7%E6%9B%B4%E5%90%8D%E5%B9%B6%E6%B8%85%E7%A9%BA%E6%A9%B1%E7%AA%97%23) `232.2K 🔥` `+23%`
1. [95后把卡脖子难题变成咱的杀手锏 (Post-95s have turned the neck-stuck problem into our trump card)](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E6%8A%8A%E5%8D%A1%E8%84%96%E5%AD%90%E9%9A%BE%E9%A2%98%E5%8F%98%E6%88%90%E5%92%B1%E7%9A%84%E6%9D%80%E6%89%8B%E9%94%8F%23) `971.5K 🔥`
1. [两男子博流量自导自演伤人戏码被拘](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E7%94%B7%E5%AD%90%E5%8D%9A%E6%B5%81%E9%87%8F%E8%87%AA%E5%AF%BC%E8%87%AA%E6%BC%94%E4%BC%A4%E4%BA%BA%E6%88%8F%E7%A0%81%E8%A2%AB%E6%8B%98%23) `620.3K 🔥`
1. [原来这就是情感漠视吗 (So is this emotional indifference?)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E6%83%85%E6%84%9F%E6%BC%A0%E8%A7%86%E5%90%97%23) `556.0K 🔥`
1. [周也方要求hi6回应](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E6%96%B9%E8%A6%81%E6%B1%82hi6%E5%9B%9E%E5%BA%94%23) `442.9K 🔥`
1. [张婧仪将暂停配合宣传你好星期六](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%B0%86%E6%9A%82%E5%81%9C%E9%85%8D%E5%90%88%E5%AE%A3%E4%BC%A0%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `417.7K 🔥`
1. [朱孝天承认F4不和](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%AD%9D%E5%A4%A9%E6%89%BF%E8%AE%A4F4%E4%B8%8D%E5%92%8C%23) `406.4K 🔥`
1. [虞书欣 种地吧 (Yu Shuxin Farming)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `316.3K 🔥`
1. [1300斤牛走丢20天暴瘦200斤](https://s.weibo.com/weibo?q=%231300%E6%96%A4%E7%89%9B%E8%B5%B0%E4%B8%A220%E5%A4%A9%E6%9A%B4%E7%98%A6200%E6%96%A4%23) `313.2K 🔥`
1. [西瓜摊老板戴手套用牙签挑瓜籽](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%93%9C%E6%91%8A%E8%80%81%E6%9D%BF%E6%88%B4%E6%89%8B%E5%A5%97%E7%94%A8%E7%89%99%E7%AD%BE%E6%8C%91%E7%93%9C%E7%B1%BD%23) `221.4K 🔥`
1. [马嘉祺solo](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BAsolo%23) `218.0K 🔥`
1. [WBG八强](https://s.weibo.com/weibo?q=%23WBG%E5%85%AB%E5%BC%BA%23) `195.3K 🔥`
1. [三亚偶遇赵又廷高圆圆牵手散步 (Sanya met Zhao Youting and Gao Yuanyuan for a walk hand in hand)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E5%81%B6%E9%81%87%E8%B5%B5%E5%8F%88%E5%BB%B7%E9%AB%98%E5%9C%86%E5%9C%86%E7%89%B5%E6%89%8B%E6%95%A3%E6%AD%A5%23) `185.0K 🔥`
1. [你好星期六](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `183.2K 🔥`
1. [张雪机车再夺冠军 (Zhang Xue motorcycle wins championship again)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%86%8D%E5%A4%BA%E5%86%A0%E5%86%9B%23) `2.7M 🔥` `-24%`
1. [追星女的手机密码人尽皆知 (Everyone knows the mobile phone password of the celebrity girl)](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E6%98%9F%E5%A5%B3%E7%9A%84%E6%89%8B%E6%9C%BA%E5%AF%86%E7%A0%81%E4%BA%BA%E5%B0%BD%E7%9A%86%E7%9F%A5%23) `624.7K 🔥` `-27%`
1. [张婧仪方要求你好星期六道歉 (Zhang Jingyi asked Hello Saturday to apologize)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%96%B9%E8%A6%81%E6%B1%82%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E9%81%93%E6%AD%89%23) `624.7K 🔥` `-27%`
1. [苏超南京vs常州](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%8D%97%E4%BA%ACvs%E5%B8%B8%E5%B7%9E%23) `488.4K 🔥` `-24%`
1. [日本地震](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%23) `449.8K 🔥` `-40%`
1. [Tian闹剧结束了](https://s.weibo.com/weibo?q=%23Tian%E9%97%B9%E5%89%A7%E7%BB%93%E6%9D%9F%E4%BA%86%23) `419.6K 🔥` `-21%`
1. [严浩翔演唱会状态](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%BC%94%E5%94%B1%E4%BC%9A%E7%8A%B6%E6%80%81%23) `415.1K 🔥` `-44%`
1. [时代少年团 男团学](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E7%94%B7%E5%9B%A2%E5%AD%A6%23) `372.5K 🔥` `-31%`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `339.6K 🔥` `-30%`
1. [世界杯转播权再现中国式僵局 (China-style deadlock reappears over World Cup broadcast rights)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%E5%86%8D%E7%8E%B0%E4%B8%AD%E5%9B%BD%E5%BC%8F%E5%83%B5%E5%B1%80%23) `256.3K 🔥` `-48%`
1. [跑男新群名是白鹿改的](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%96%B0%E7%BE%A4%E5%90%8D%E6%98%AF%E7%99%BD%E9%B9%BF%E6%94%B9%E7%9A%84%23) `254.7K 🔥` `-27%`
1. [刘宇宁请客张凌赫归鸾剧组](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AF%B7%E5%AE%A2%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BD%92%E9%B8%BE%E5%89%A7%E7%BB%84%23) `230.1K 🔥` `-26%`
1. [刘耀文生图头身比](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E7%94%9F%E5%9B%BE%E5%A4%B4%E8%BA%AB%E6%AF%94%23) `221.1K 🔥` `-29%`
1. [张桂源头像](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E5%A4%B4%E5%83%8F%23) `210.1K 🔥` `-30%`
1. [张元英救了霸王茶姬 (Zhang Yuanying rescued Overlord Cha Ji)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E6%95%91%E4%BA%86%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%23) `191.4K 🔥` `-51%`
1. [网剧浮生](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%89%A7%E6%B5%AE%E7%94%9F%23) `190.3K 🔥` `-38%`
1. [张雪机车收获第三冠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%94%B6%E8%8E%B7%E7%AC%AC%E4%B8%89%E5%86%A0%23) `174.3K 🔥` `-50%`
1. [日本军事动作与二战前高度相似](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%86%9B%E4%BA%8B%E5%8A%A8%E4%BD%9C%E4%B8%8E%E4%BA%8C%E6%88%98%E5%89%8D%E9%AB%98%E5%BA%A6%E7%9B%B8%E4%BC%BC%23) `172.8K 🔥` `-44%`

Updated at 2026-05-02 22:37:59

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
