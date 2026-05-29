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

1. [歌手 倒数第一竞争激烈 (Singer, the competition for last place is fierce)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%20%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%E7%AB%9E%E4%BA%89%E6%BF%80%E7%83%88%23) `16.7M 🔥` `NEW`
1. [又一大国重器硬核刷屏](https://s.weibo.com/weibo?q=%23%E5%8F%88%E4%B8%80%E5%A4%A7%E5%9B%BD%E9%87%8D%E5%99%A8%E7%A1%AC%E6%A0%B8%E5%88%B7%E5%B1%8F%23) `1.7M 🔥` `NEW`
1. [白鹿李晨郑恺复宣跑男](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%E5%A4%8D%E5%AE%A3%E8%B7%91%E7%94%B7%23) `1.6M 🔥` `NEW`
1. [欧莱雅全明星运动员空降校园](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E8%8E%B1%E9%9B%85%E5%85%A8%E6%98%8E%E6%98%9F%E8%BF%90%E5%8A%A8%E5%91%98%E7%A9%BA%E9%99%8D%E6%A0%A1%E5%9B%AD%23) `1.0M 🔥` `NEW`
1. [一家四口有限责任公司](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%E6%9C%89%E9%99%90%E8%B4%A3%E4%BB%BB%E5%85%AC%E5%8F%B8%23) `889.0K 🔥` `NEW`
1. [VOGUE晚宴](https://s.weibo.com/weibo?q=%23VOGUE%E6%99%9A%E5%AE%B4%23) `870.1K 🔥` `NEW`
1. [亚运会电竞项目名单](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E7%94%B5%E7%AB%9E%E9%A1%B9%E7%9B%AE%E5%90%8D%E5%8D%95%23) `523.8K 🔥` `NEW`
1. [神22飞船返回舱着陆](https://s.weibo.com/weibo?q=%23%E7%A5%9E22%E9%A3%9E%E8%88%B9%E8%BF%94%E5%9B%9E%E8%88%B1%E7%9D%80%E9%99%86%23) `520.7K 🔥` `NEW`
1. [LOL亚运预选赛名单公布](https://s.weibo.com/weibo?q=%23LOL%E4%BA%9A%E8%BF%90%E9%A2%84%E9%80%89%E8%B5%9B%E5%90%8D%E5%8D%95%E5%85%AC%E5%B8%83%23) `483.9K 🔥` `NEW`
1. [广东不愧是祖宗严选发配地](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E4%B8%8D%E6%84%A7%E6%98%AF%E7%A5%96%E5%AE%97%E4%B8%A5%E9%80%89%E5%8F%91%E9%85%8D%E5%9C%B0%23) `482.7K 🔥` `NEW`
1. [原来科技可以这么浪漫 (It turns out that technology can be so romantic)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%A7%91%E6%8A%80%E5%8F%AF%E4%BB%A5%E8%BF%99%E4%B9%88%E6%B5%AA%E6%BC%AB%23) `480.6K 🔥` `NEW`
1. [老人开空调一晚高烧3天肺白大半](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%BC%80%E7%A9%BA%E8%B0%83%E4%B8%80%E6%99%9A%E9%AB%98%E7%83%A73%E5%A4%A9%E8%82%BA%E7%99%BD%E5%A4%A7%E5%8D%8A%23) `479.6K 🔥` `NEW`
1. [蓝厂在用专业的视频能力做Live](https://s.weibo.com/weibo?q=%23%E8%93%9D%E5%8E%82%E5%9C%A8%E7%94%A8%E4%B8%93%E4%B8%9A%E7%9A%84%E8%A7%86%E9%A2%91%E8%83%BD%E5%8A%9B%E5%81%9ALive%23) `479.1K 🔥` `NEW`
1. [窦靖童秒了](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E7%A7%92%E4%BA%86%23) `477.8K 🔥` `NEW`
1. [结石姐袭榜张碧晨尤长靖](https://s.weibo.com/weibo?q=%23%E7%BB%93%E7%9F%B3%E5%A7%90%E8%A2%AD%E6%A6%9C%E5%BC%A0%E7%A2%A7%E6%99%A8%E5%B0%A4%E9%95%BF%E9%9D%96%23) `476.7K 🔥` `NEW`
1. [接到了田曦薇的星星](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E5%88%B0%E4%BA%86%E7%94%B0%E6%9B%A6%E8%96%87%E7%9A%84%E6%98%9F%E6%98%9F%23) `475.1K 🔥` `NEW`
1. [情侣相约自杀1人身亡1人获刑](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E7%9B%B8%E7%BA%A6%E8%87%AA%E6%9D%801%E4%BA%BA%E8%BA%AB%E4%BA%A11%E4%BA%BA%E8%8E%B7%E5%88%91%23) `474.5K 🔥` `NEW`
1. [爱上窦靖童是人之常情](https://s.weibo.com/weibo?q=%23%E7%88%B1%E4%B8%8A%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%98%AF%E4%BA%BA%E4%B9%8B%E5%B8%B8%E6%83%85%23) `472.9K 🔥` `NEW`
1. [林允杀死比赛](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%85%81%E6%9D%80%E6%AD%BB%E6%AF%94%E8%B5%9B%23) `472.6K 🔥` `NEW`
1. [父母姐姐身亡12岁孩子被叔侵占140万](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E5%A7%90%E5%A7%90%E8%BA%AB%E4%BA%A112%E5%B2%81%E5%AD%A9%E5%AD%90%E8%A2%AB%E5%8F%94%E4%BE%B5%E5%8D%A0140%E4%B8%87%23) `471.4K 🔥` `NEW`
1. [曾沛慈 我觉得不是恶剪 (Zeng Peici, I don’t think it’s a bad cut)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E6%88%91%E8%A7%89%E5%BE%97%E4%B8%8D%E6%98%AF%E6%81%B6%E5%89%AA%23) `470.3K 🔥` `NEW`
1. [A股老登股爆发](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%80%81%E7%99%BB%E8%82%A1%E7%88%86%E5%8F%91%23) `468.9K 🔥` `NEW`
1. [佛协就释永信案判决结果发声](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%8D%8F%E5%B0%B1%E9%87%8A%E6%B0%B8%E4%BF%A1%E6%A1%88%E5%88%A4%E5%86%B3%E7%BB%93%E6%9E%9C%E5%8F%91%E5%A3%B0%23) `466.6K 🔥` `NEW`
1. [刘诗诗掀头纱](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E6%8E%80%E5%A4%B4%E7%BA%B1%23) `463.9K 🔥` `NEW`
1. [张碧晨 紧张](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%20%E7%B4%A7%E5%BC%A0%23) `460.7K 🔥` `NEW`
1. [李小冉去歌手了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%8E%BB%E6%AD%8C%E6%89%8B%E4%BA%86%23) `459.6K 🔥` `NEW`
1. [重新定义一户一梯](https://s.weibo.com/weibo?q=%23%E9%87%8D%E6%96%B0%E5%AE%9A%E4%B9%89%E4%B8%80%E6%88%B7%E4%B8%80%E6%A2%AF%23) `458.8K 🔥` `NEW`
1. [结石姐完全女王](https://s.weibo.com/weibo?q=%23%E7%BB%93%E7%9F%B3%E5%A7%90%E5%AE%8C%E5%85%A8%E5%A5%B3%E7%8E%8B%23) `458.5K 🔥` `NEW`
1. [齐豫连升5个key](https://s.weibo.com/weibo?q=%23%E9%BD%90%E8%B1%AB%E8%BF%9E%E5%8D%875%E4%B8%AAkey%23) `446.0K 🔥` `NEW`
1. [古天乐回应向太曝其曾坐牢](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%A4%A9%E4%B9%90%E5%9B%9E%E5%BA%94%E5%90%91%E5%A4%AA%E6%9B%9D%E5%85%B6%E6%9B%BE%E5%9D%90%E7%89%A2%23) `445.3K 🔥` `NEW`
1. [胡彦斌改编修炼爱情 (Hu Yanbin adapted "Practice Love")](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E6%94%B9%E7%BC%96%E4%BF%AE%E7%82%BC%E7%88%B1%E6%83%85%23) `423.7K 🔥` `NEW`
1. [英雄联盟CN缺席亚运会](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9FCN%E7%BC%BA%E5%B8%AD%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `418.4K 🔥` `NEW`
1. [赵今麦 绿野仙踪](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%20%E7%BB%BF%E9%87%8E%E4%BB%99%E8%B8%AA%23) `416.8K 🔥` `NEW`
1. [两孩非亲生案堂哥出轨弟媳为其买房](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E5%A0%82%E5%93%A5%E5%87%BA%E8%BD%A8%E5%BC%9F%E5%AA%B3%E4%B8%BA%E5%85%B6%E4%B9%B0%E6%88%BF%23) `408.1K 🔥` `NEW`
1. [电台情歌](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%8F%B0%E6%83%85%E6%AD%8C%23) `400.7K 🔥` `NEW`
1. [39岁博主哈尼小微离世亲属发声](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E5%8D%9A%E4%B8%BB%E5%93%88%E5%B0%BC%E5%B0%8F%E5%BE%AE%E7%A6%BB%E4%B8%96%E4%BA%B2%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `390.5K 🔥` `NEW`
1. [存储芯片迎来超级周期](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E8%BF%8E%E6%9D%A5%E8%B6%85%E7%BA%A7%E5%91%A8%E6%9C%9F%23) `389.3K 🔥` `NEW`
1. [直播间擦边MiuMiu卖MiMi发卡](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E9%97%B4%E6%93%A6%E8%BE%B9MiuMiu%E5%8D%96MiMi%E5%8F%91%E5%8D%A1%23) `389.0K 🔥` `NEW`
1. [周兴哲一开口好稳](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%85%B4%E5%93%B2%E4%B8%80%E5%BC%80%E5%8F%A3%E5%A5%BD%E7%A8%B3%23) `388.9K 🔥` `NEW`
1. [释永信被判24年 (Shi Yongxin was sentenced to 24 years)](https://s.weibo.com/weibo?q=%23%E9%87%8A%E6%B0%B8%E4%BF%A1%E8%A2%AB%E5%88%A424%E5%B9%B4%23) `2.1M 🔥` `+46%`
1. [歌手直播](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%23) `1.4M 🔥` `+189%`
1. [VOGUE审美 (VOGUE aesthetic)](https://s.weibo.com/weibo?q=%23VOGUE%E5%AE%A1%E7%BE%8E%23) `1.1M 🔥` `+85%`
1. [芯片股集体暴跌](https://s.weibo.com/weibo?q=%23%E8%8A%AF%E7%89%87%E8%82%A1%E9%9B%86%E4%BD%93%E6%9A%B4%E8%B7%8C%23) `483.1K 🔥` `+123%`
1. [许我耀眼 现实版](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%88%91%E8%80%80%E7%9C%BC%20%E7%8E%B0%E5%AE%9E%E7%89%88%23) `508.8K 🔥`
1. [白鹿回复于正于老师](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E5%A4%8D%E4%BA%8E%E6%AD%A3%E4%BA%8E%E8%80%81%E5%B8%88%23) `496.0K 🔥`
1. [广东高温天热死几千只鸡](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E9%AB%98%E6%B8%A9%E5%A4%A9%E7%83%AD%E6%AD%BB%E5%87%A0%E5%8D%83%E5%8F%AA%E9%B8%A1%23) `467.4K 🔥`
1. [演员刘红梅去世 (Actor Liu Hongmei passes away)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E5%88%98%E7%BA%A2%E6%A2%85%E5%8E%BB%E4%B8%96%23) `464.4K 🔥`
1. [39岁博主被虫咬后感染离世](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E5%8D%9A%E4%B8%BB%E8%A2%AB%E8%99%AB%E5%92%AC%E5%90%8E%E6%84%9F%E6%9F%93%E7%A6%BB%E4%B8%96%23) `486.0K 🔥` `-45%`
1. [VOGUE红毯直播](https://s.weibo.com/weibo?q=%23VOGUE%E7%BA%A2%E6%AF%AF%E7%9B%B4%E6%92%AD%23) `466.0K 🔥` `-31%`
1. [车手张秀军不幸离世](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E6%89%8B%E5%BC%A0%E7%A7%80%E5%86%9B%E4%B8%8D%E5%B9%B8%E7%A6%BB%E4%B8%96%23) `462.1K 🔥` `-38%`
1. [性格好是稀缺资源](https://s.weibo.com/weibo?q=%23%E6%80%A7%E6%A0%BC%E5%A5%BD%E6%98%AF%E7%A8%80%E7%BC%BA%E8%B5%84%E6%BA%90%23) `445.3K 🔥` `-32%`

Updated at 2026-05-29 22:26:49

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
