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

1. [王者荣耀 (King of Glory)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `42.8K 🔥` `NEW`
1. [国乒男团2比3瑞典 (National table tennis men's team 2 to 3 Sweden)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A22%E6%AF%943%E7%91%9E%E5%85%B8%23) `206.4K 🔥`
1. [这才是减脂餐的真正物价](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E5%87%8F%E8%84%82%E9%A4%90%E7%9A%84%E7%9C%9F%E6%AD%A3%E7%89%A9%E4%BB%B7%23) `110.2K 🔥`
1. [九尾发博](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E5%8F%91%E5%8D%9A%23) `59.8K 🔥`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `59.1K 🔥`
1. [妻子频繁私发孩子照片给陌生男子](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E9%A2%91%E7%B9%81%E7%A7%81%E5%8F%91%E5%AD%A9%E5%AD%90%E7%85%A7%E7%89%87%E7%BB%99%E9%99%8C%E7%94%9F%E7%94%B7%E5%AD%90%23) `45.2K 🔥`
1. [2026年伦敦世乒赛](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%23) `43.5K 🔥`
1. [伊朗退了一步 (Iran takes a step back)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%80%80%E4%BA%86%E4%B8%80%E6%AD%A5%23) `43.0K 🔥`
1. [这得喝多少饮料才能成角](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%BE%97%E5%96%9D%E5%A4%9A%E5%B0%91%E9%A5%AE%E6%96%99%E6%89%8D%E8%83%BD%E6%88%90%E8%A7%92%23) `43.0K 🔥`
1. [王楚钦加油](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8A%A0%E6%B2%B9%23) `43.0K 🔥`
1. [乒乓球](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%23) `43.0K 🔥`
1. [伊朗公布最新谈判方案](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%AC%E5%B8%83%E6%9C%80%E6%96%B0%E8%B0%88%E5%88%A4%E6%96%B9%E6%A1%88%23) `43.0K 🔥`
1. [曼联 (Manchester United)](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E8%81%94%23) `42.9K 🔥`
1. [李晓旭退役 (Li Xiaoxu retires)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%93%E6%97%AD%E9%80%80%E5%BD%B9%23) `42.9K 🔥`
1. [1300元的机票跌到400元 (Air ticket from 1,300 yuan dropped to 400 yuan)](https://s.weibo.com/weibo?q=%231300%E5%85%83%E7%9A%84%E6%9C%BA%E7%A5%A8%E8%B7%8C%E5%88%B0400%E5%85%83%23) `42.9K 🔥`
1. [以色列这次真的紧张了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%BF%99%E6%AC%A1%E7%9C%9F%E7%9A%84%E7%B4%A7%E5%BC%A0%E4%BA%86%23) `42.9K 🔥`
1. [伦敦世乒赛](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%23) `42.9K 🔥`
1. [aespa回归预告 (aespa return notice)](https://s.weibo.com/weibo?q=%23aespa%E5%9B%9E%E5%BD%92%E9%A2%84%E5%91%8A%23) `42.9K 🔥`
1. [王楚钦受伤流血仍独得2分](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%97%E4%BC%A4%E6%B5%81%E8%A1%80%E4%BB%8D%E7%8B%AC%E5%BE%972%E5%88%86%23) `42.9K 🔥`
1. [白桃星座 (white peach constellation)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%A1%83%E6%98%9F%E5%BA%A7%23) `42.9K 🔥`
1. [银河左岸 黄子弘凡镜头 (The Left Bank of the Galaxy Photographed by Huang Zihongfan)](https://s.weibo.com/weibo?q=%23%E9%93%B6%E6%B2%B3%E5%B7%A6%E5%B2%B8%20%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E9%95%9C%E5%A4%B4%23) `42.8K 🔥`
1. [挑杯八强](https://s.weibo.com/weibo?q=%23%E6%8C%91%E6%9D%AF%E5%85%AB%E5%BC%BA%23) `42.8K 🔥`
1. [考研5年博主卡尔谈考研5年](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%945%E5%B9%B4%E5%8D%9A%E4%B8%BB%E5%8D%A1%E5%B0%94%E8%B0%88%E8%80%83%E7%A0%945%E5%B9%B4%23) `42.8K 🔥`
1. [张继科说国乒男队技术迭代不足](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%AF%B4%E5%9B%BD%E4%B9%92%E7%94%B7%E9%98%9F%E6%8A%80%E6%9C%AF%E8%BF%AD%E4%BB%A3%E4%B8%8D%E8%B6%B3%23) `42.8K 🔥`
1. [KPL抽签](https://s.weibo.com/weibo?q=%23KPL%E6%8A%BD%E7%AD%BE%23) `42.8K 🔥`
1. [莫雷加德跟裁判吵起来了 (Moregard had an argument with the referee)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E8%B7%9F%E8%A3%81%E5%88%A4%E5%90%B5%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `42.8K 🔥`
1. [男子57秒从8楼冲到1楼捞起溺水幼童 (Man rushed from the 8th floor to the 1st floor in 57 seconds to rescue a drowning toddler)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9057%E7%A7%92%E4%BB%8E8%E6%A5%BC%E5%86%B2%E5%88%B01%E6%A5%BC%E6%8D%9E%E8%B5%B7%E6%BA%BA%E6%B0%B4%E5%B9%BC%E7%AB%A5%23) `42.7K 🔥`
1. [范丞丞 都给我出来 (Fan Chengcheng, come out here)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%20%E9%83%BD%E7%BB%99%E6%88%91%E5%87%BA%E6%9D%A5%23) `42.7K 🔥`
1. [2026五一档总票房已破5亿](https://s.weibo.com/weibo?q=%232026%E4%BA%94%E4%B8%80%E6%A1%A3%E6%80%BB%E7%A5%A8%E6%88%BF%E5%B7%B2%E7%A0%B45%E4%BA%BF%23) `87.7K 🔥` `-31%`
1. [黄灿灿 blackpink都没这么累 (Huang Cancan and blackpink are not so tired)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%20blackpink%E9%83%BD%E6%B2%A1%E8%BF%99%E4%B9%88%E7%B4%AF%23) `86.1K 🔥` `-31%`
1. [白鹿被孟子义说挂相](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%A2%AB%E5%AD%9F%E5%AD%90%E4%B9%89%E8%AF%B4%E6%8C%82%E7%9B%B8%23) `69.1K 🔥` `-28%`
1. [国乒男团两连败 (National table tennis men's team loses two games in a row)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E4%B8%A4%E8%BF%9E%E8%B4%A5%23) `62.5K 🔥` `-34%`
1. [张雪机车德比斯退赛](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%BE%B7%E6%AF%94%E6%96%AF%E9%80%80%E8%B5%9B%23) `59.8K 🔥` `-34%`
1. [国乒](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%23) `59.8K 🔥` `-37%`
1. [湖南广电 AI播新闻 (Hunan Radio and Television AI news broadcast)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%B9%BF%E7%94%B5%20AI%E6%92%AD%E6%96%B0%E9%97%BB%23) `59.8K 🔥` `-37%`
1. [女子凌晨接到去世半年表弟来电](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%8C%E6%99%A8%E6%8E%A5%E5%88%B0%E5%8E%BB%E4%B8%96%E5%8D%8A%E5%B9%B4%E8%A1%A8%E5%BC%9F%E6%9D%A5%E7%94%B5%23) `59.8K 🔥` `-37%`
1. [国乒男团小组赛一胜两负](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%B0%8F%E7%BB%84%E8%B5%9B%E4%B8%80%E8%83%9C%E4%B8%A4%E8%B4%9F%23) `59.8K 🔥` `-56%`
1. [警方回应博主取样河水后被半夜敲门](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E5%8D%9A%E4%B8%BB%E5%8F%96%E6%A0%B7%E6%B2%B3%E6%B0%B4%E5%90%8E%E8%A2%AB%E5%8D%8A%E5%A4%9C%E6%95%B2%E9%97%A8%23) `59.7K 🔥` `-33%`
1. [梁靖崑状态 (Liang Jingkun status)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E7%8A%B6%E6%80%81%23) `59.7K 🔥` `-37%`
1. [繁殖犬 抑郁](https://s.weibo.com/weibo?q=%23%E7%B9%81%E6%AE%96%E7%8A%AC%20%E6%8A%91%E9%83%81%23) `59.7K 🔥` `-34%`
1. [国乒女团心系男团战况](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%E5%BF%83%E7%B3%BB%E7%94%B7%E5%9B%A2%E6%88%98%E5%86%B5%23) `59.7K 🔥` `-27%`
1. [买三文鱼套餐吃到虹鳟食客起诉餐厅](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E4%B8%89%E6%96%87%E9%B1%BC%E5%A5%97%E9%A4%90%E5%90%83%E5%88%B0%E8%99%B9%E9%B3%9F%E9%A3%9F%E5%AE%A2%E8%B5%B7%E8%AF%89%E9%A4%90%E5%8E%85%23) `59.1K 🔥` `-26%`
1. [严浩翔新歌 (Yan Haoxiang's new song)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%96%B0%E6%AD%8C%23) `58.8K 🔥` `-38%`
1. [孔苑苑肺炎就医次日左肺已全白](https://s.weibo.com/weibo?q=%23%E5%AD%94%E8%8B%91%E8%8B%91%E8%82%BA%E7%82%8E%E5%B0%B1%E5%8C%BB%E6%AC%A1%E6%97%A5%E5%B7%A6%E8%82%BA%E5%B7%B2%E5%85%A8%E7%99%BD%23) `47.3K 🔥` `-50%`
1. [谈没谈过恋爱一眼就能看出来 (You can tell at a glance whether you've been in love or not.)](https://s.weibo.com/weibo?q=%23%E8%B0%88%E6%B2%A1%E8%B0%88%E8%BF%87%E6%81%8B%E7%88%B1%E4%B8%80%E7%9C%BC%E5%B0%B1%E8%83%BD%E7%9C%8B%E5%87%BA%E6%9D%A5%23) `46.9K 🔥` `-27%`
1. [佳偶天成 被剧名耽误 (A match made in heaven was delayed by the title of the play)](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%20%E8%A2%AB%E5%89%A7%E5%90%8D%E8%80%BD%E8%AF%AF%23) `45.5K 🔥` `-28%`
1. [单依纯草莓音乐节](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E8%8D%89%E8%8E%93%E9%9F%B3%E4%B9%90%E8%8A%82%23) `43.0K 🔥` `-32%`
1. [奶茶卖到188元一杯](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E8%8C%B6%E5%8D%96%E5%88%B0188%E5%85%83%E4%B8%80%E6%9D%AF%23) `42.9K 🔥` `-33%`
1. [王曼昱什么时候上场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E4%B8%8A%E5%9C%BA%23) `42.8K 🔥` `-38%`

Updated at 2026-05-04 04:03:30

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
