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

1. [巴菲特股东大会 (Buffett Shareholders Meeting)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%8F%B2%E7%89%B9%E8%82%A1%E4%B8%9C%E5%A4%A7%E4%BC%9A%23) `471.6K 🔥` `NEW`
1. [中国台北女队教练发文控诉](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%E5%A5%B3%E9%98%9F%E6%95%99%E7%BB%83%E5%8F%91%E6%96%87%E6%8E%A7%E8%AF%89%23) `449.3K 🔥` `NEW`
1. [张婧仪高度近视](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E9%AB%98%E5%BA%A6%E8%BF%91%E8%A7%86%23) `302.4K 🔥` `NEW`
1. [女子五一高速堵车4小时点外卖](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%94%E4%B8%80%E9%AB%98%E9%80%9F%E5%A0%B5%E8%BD%A64%E5%B0%8F%E6%97%B6%E7%82%B9%E5%A4%96%E5%8D%96%23) `267.8K 🔥` `NEW`
1. [何洁前夫说前妻不是妻](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B4%81%E5%89%8D%E5%A4%AB%E8%AF%B4%E5%89%8D%E5%A6%BB%E4%B8%8D%E6%98%AF%E5%A6%BB%23) `265.1K 🔥` `NEW`
1. [1岁儿子被抢走父亲怀疑奶奶18年](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%84%BF%E5%AD%90%E8%A2%AB%E6%8A%A2%E8%B5%B0%E7%88%B6%E4%BA%B2%E6%80%80%E7%96%91%E5%A5%B6%E5%A5%B618%E5%B9%B4%23) `211.4K 🔥` `NEW`
1. [张雪机车车手德比斯感谢团队](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%BD%A6%E6%89%8B%E5%BE%B7%E6%AF%94%E6%96%AF%E6%84%9F%E8%B0%A2%E5%9B%A2%E9%98%9F%23) `209.5K 🔥` `NEW`
1. [药明康德董事长年薪近4000万](https://s.weibo.com/weibo?q=%23%E8%8D%AF%E6%98%8E%E5%BA%B7%E5%BE%B7%E8%91%A3%E4%BA%8B%E9%95%BF%E5%B9%B4%E8%96%AA%E8%BF%914000%E4%B8%87%23) `207.2K 🔥` `NEW`
1. [被疑患癌男子称去其他医院检查正常](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%96%91%E6%82%A3%E7%99%8C%E7%94%B7%E5%AD%90%E7%A7%B0%E5%8E%BB%E5%85%B6%E4%BB%96%E5%8C%BB%E9%99%A2%E6%A3%80%E6%9F%A5%E6%AD%A3%E5%B8%B8%23) `188.0K 🔥` `NEW`
1. [丁程鑫各种意义上的神图来了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%90%84%E7%A7%8D%E6%84%8F%E4%B9%89%E4%B8%8A%E7%9A%84%E7%A5%9E%E5%9B%BE%E6%9D%A5%E4%BA%86%23) `187.9K 🔥` `NEW`
1. [王楚钦有多拼 (How hard is Wang Chuqin?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%9C%89%E5%A4%9A%E6%8B%BC%23) `183.9K 🔥` `NEW`
1. [夺冠车手感谢张雪机车](https://s.weibo.com/weibo?q=%23%E5%A4%BA%E5%86%A0%E8%BD%A6%E6%89%8B%E6%84%9F%E8%B0%A2%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `163.3K 🔥` `NEW`
1. [邓佳鑫直播自爆身高](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BD%B3%E9%91%AB%E7%9B%B4%E6%92%AD%E8%87%AA%E7%88%86%E8%BA%AB%E9%AB%98%23) `157.6K 🔥` `NEW`
1. [张雪机车绝杀两台雅马哈](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%BB%9D%E6%9D%80%E4%B8%A4%E5%8F%B0%E9%9B%85%E9%A9%AC%E5%93%88%23) `147.3K 🔥` `NEW`
1. [严浩翔哭了 (Yan Haoxiang cried)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%93%AD%E4%BA%86%23) `712.6K 🔥`
1. [追星女的手机密码人尽皆知 (Everyone knows the mobile phone password of the celebrity girl)](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E6%98%9F%E5%A5%B3%E7%9A%84%E6%89%8B%E6%9C%BA%E5%AF%86%E7%A0%81%E4%BA%BA%E5%B0%BD%E7%9A%86%E7%9F%A5%23) `504.5K 🔥`
1. [五一假期真是捅人窝了吧](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%81%87%E6%9C%9F%E7%9C%9F%E6%98%AF%E6%8D%85%E4%BA%BA%E7%AA%9D%E4%BA%86%E5%90%A7%23) `346.6K 🔥`
1. [1300斤牛走丢20天暴瘦200斤](https://s.weibo.com/weibo?q=%231300%E6%96%A4%E7%89%9B%E8%B5%B0%E4%B8%A220%E5%A4%A9%E6%9A%B4%E7%98%A6200%E6%96%A4%23) `298.0K 🔥`
1. [卢昱晓收藏与檀健次cp视频](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E6%94%B6%E8%97%8F%E4%B8%8E%E6%AA%80%E5%81%A5%E6%AC%A1cp%E8%A7%86%E9%A2%91%23) `286.3K 🔥`
1. [便利店被长相成熟未成年设套买烟](https://s.weibo.com/weibo?q=%23%E4%BE%BF%E5%88%A9%E5%BA%97%E8%A2%AB%E9%95%BF%E7%9B%B8%E6%88%90%E7%86%9F%E6%9C%AA%E6%88%90%E5%B9%B4%E8%AE%BE%E5%A5%97%E4%B9%B0%E7%83%9F%23) `207.0K 🔥`
1. [贺娇龙账号更名并清空橱窗](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%A8%87%E9%BE%99%E8%B4%A6%E5%8F%B7%E6%9B%B4%E5%90%8D%E5%B9%B6%E6%B8%85%E7%A9%BA%E6%A9%B1%E7%AA%97%23) `204.0K 🔥`
1. [跑男新群名是白鹿改的](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%96%B0%E7%BE%A4%E5%90%8D%E6%98%AF%E7%99%BD%E9%B9%BF%E6%94%B9%E7%9A%84%23) `203.2K 🔥`
1. [大衣哥握手太多致手指被真菌感染 (Brother Da Yi shook hands too much and his fingers got fungal infection)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%A1%A3%E5%93%A5%E6%8F%A1%E6%89%8B%E5%A4%AA%E5%A4%9A%E8%87%B4%E6%89%8B%E6%8C%87%E8%A2%AB%E7%9C%9F%E8%8F%8C%E6%84%9F%E6%9F%93%23) `189.4K 🔥`
1. [刘宇宁请客张凌赫归鸾剧组](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AF%B7%E5%AE%A2%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BD%92%E9%B8%BE%E5%89%A7%E7%BB%84%23) `186.6K 🔥`
1. [iPhone18Pro最低配或不涨价](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%9C%80%E4%BD%8E%E9%85%8D%E6%88%96%E4%B8%8D%E6%B6%A8%E4%BB%B7%23) `181.4K 🔥`
1. [张雪机车再夺冠军 (Zhang Xue motorcycle wins championship again)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%86%8D%E5%A4%BA%E5%86%A0%E5%86%9B%23) `1.3M 🔥` `-50%`
1. [张雪机车回应再次夺冠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%9B%9E%E5%BA%94%E5%86%8D%E6%AC%A1%E5%A4%BA%E5%86%A0%23) `967.8K 🔥` `-25%`
1. [95后把卡脖子难题变成咱的杀手锏 (Post-95s have turned the neck-stuck problem into our trump card)](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E6%8A%8A%E5%8D%A1%E8%84%96%E5%AD%90%E9%9A%BE%E9%A2%98%E5%8F%98%E6%88%90%E5%92%B1%E7%9A%84%E6%9D%80%E6%89%8B%E9%94%8F%23) `770.9K 🔥` `-21%`
1. [张婧仪方要求你好星期六道歉 (Zhang Jingyi asked Hello Saturday to apologize)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%96%B9%E8%A6%81%E6%B1%82%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E9%81%93%E6%AD%89%23) `476.2K 🔥` `-24%`
1. [刘丁硕假期厕所直播翻车](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E5%81%87%E6%9C%9F%E5%8E%95%E6%89%80%E7%9B%B4%E6%92%AD%E7%BF%BB%E8%BD%A6%23) `417.8K 🔥` `-30%`
1. [原来这就是情感漠视吗 (So is this emotional indifference?)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E6%83%85%E6%84%9F%E6%BC%A0%E8%A7%86%E5%90%97%23) `316.9K 🔥` `-43%`
1. [周也方要求hi6回应](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E6%96%B9%E8%A6%81%E6%B1%82hi6%E5%9B%9E%E5%BA%94%23) `313.4K 🔥` `-29%`
1. [严浩翔每年都会往宿舍搬几箱橙子 (Yan Haoxiang moves several boxes of oranges to the dormitory every year)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%AF%8F%E5%B9%B4%E9%83%BD%E4%BC%9A%E5%BE%80%E5%AE%BF%E8%88%8D%E6%90%AC%E5%87%A0%E7%AE%B1%E6%A9%99%E5%AD%90%23) `283.4K 🔥` `-42%`
1. [Tian闹剧结束了](https://s.weibo.com/weibo?q=%23Tian%E9%97%B9%E5%89%A7%E7%BB%93%E6%9D%9F%E4%BA%86%23) `277.8K 🔥` `-34%`
1. [朱孝天承认F4不和](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%AD%9D%E5%A4%A9%E6%89%BF%E8%AE%A4F4%E4%B8%8D%E5%92%8C%23) `273.8K 🔥` `-33%`
1. [时代少年团 男团学](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E7%94%B7%E5%9B%A2%E5%AD%A6%23) `271.1K 🔥` `-27%`
1. [日本地震](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%23) `268.2K 🔥` `-40%`
1. [白鹿十周年见面会定档 (White Deer 10th Anniversary Meeting Scheduled)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8D%81%E5%91%A8%E5%B9%B4%E8%A7%81%E9%9D%A2%E4%BC%9A%E5%AE%9A%E6%A1%A3%23) `267.7K 🔥` `-26%`
1. [王橹杰高会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%AB%98%E4%BC%9A%23) `267.6K 🔥` `-39%`
1. [一诺被开闪光灯](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E8%A2%AB%E5%BC%80%E9%97%AA%E5%85%89%E7%81%AF%23) `267.5K 🔥` `-26%`
1. [苏超南京vs常州](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%8D%97%E4%BA%ACvs%E5%B8%B8%E5%B7%9E%23) `262.0K 🔥` `-46%`
1. [虞书欣 种地吧 (Yu Shuxin Farming)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `236.8K 🔥` `-25%`
1. [王楚钦林诗栋梁靖崑开门红](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%9E%97%E8%AF%97%E6%A0%8B%E6%A2%81%E9%9D%96%E5%B4%91%E5%BC%80%E9%97%A8%E7%BA%A2%23) `207.7K 🔥` `-28%`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `188.5K 🔥` `-45%`
1. [徐良让张远去办公室找他](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E8%AE%A9%E5%BC%A0%E8%BF%9C%E5%8E%BB%E5%8A%9E%E5%85%AC%E5%AE%A4%E6%89%BE%E4%BB%96%23) `170.5K 🔥` `-38%`
1. [张桂源头像](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E5%A4%B4%E5%83%8F%23) `155.0K 🔥` `-26%`
1. [西瓜摊老板戴手套用牙签挑瓜籽](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%93%9C%E6%91%8A%E8%80%81%E6%9D%BF%E6%88%B4%E6%89%8B%E5%A5%97%E7%94%A8%E7%89%99%E7%AD%BE%E6%8C%91%E7%93%9C%E7%B1%BD%23) `144.1K 🔥` `-35%`
1. [刘耀文生图头身比](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E7%94%9F%E5%9B%BE%E5%A4%B4%E8%BA%AB%E6%AF%94%23) `143.0K 🔥` `-35%`
1. [荣耀将推出张雪机车冠军联名款手表](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E5%B0%86%E6%8E%A8%E5%87%BA%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%86%A0%E5%86%9B%E8%81%94%E5%90%8D%E6%AC%BE%E6%89%8B%E8%A1%A8%23) `142.0K 🔥` `-64%`
1. [伊朗放宽与美国恢复和谈条件 (Iran eases conditions for resumption of peace talks with US)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%94%BE%E5%AE%BD%E4%B8%8E%E7%BE%8E%E5%9B%BD%E6%81%A2%E5%A4%8D%E5%92%8C%E8%B0%88%E6%9D%A1%E4%BB%B6%23) `136.8K 🔥` `-46%`
1. [张真源高音 (Zhang Zhenyuan soprano)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E9%AB%98%E9%9F%B3%23) `135.6K 🔥` `-47%`

Updated at 2026-05-02 23:30:57

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
