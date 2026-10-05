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

1. [孙颖莎开始整顿乒乓球观赛礼仪](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%BC%80%E5%A7%8B%E6%95%B4%E9%A1%BF%E4%B9%92%E4%B9%93%E7%90%83%E8%A7%82%E8%B5%9B%E7%A4%BC%E4%BB%AA%23) `530.3K 🔥` `NEW`
1. [未来几年能留住现金流最重要](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A5%E5%87%A0%E5%B9%B4%E8%83%BD%E7%95%99%E4%BD%8F%E7%8E%B0%E9%87%91%E6%B5%81%E6%9C%80%E9%87%8D%E8%A6%81%23) `483.5K 🔥` `NEW`
1. [中国空心光纤网速更快了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A9%BA%E5%BF%83%E5%85%89%E7%BA%A4%E7%BD%91%E9%80%9F%E6%9B%B4%E5%BF%AB%E4%BA%86%23) `472.8K 🔥` `NEW`
1. [代露娃不被同情的原因](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E4%B8%8D%E8%A2%AB%E5%90%8C%E6%83%85%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `456.4K 🔥` `NEW`
1. [谭松韵面相都变了](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E9%9D%A2%E7%9B%B8%E9%83%BD%E5%8F%98%E4%BA%86%23) `412.0K 🔥` `NEW`
1. [刘亦菲 掉代言](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%20%E6%8E%89%E4%BB%A3%E8%A8%80%23) `395.7K 🔥` `NEW`
1. [李勒优回应](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E5%9B%9E%E5%BA%94%23) `384.3K 🔥` `NEW`
1. [曝腾讯退了几部大剧](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%85%BE%E8%AE%AF%E9%80%80%E4%BA%86%E5%87%A0%E9%83%A8%E5%A4%A7%E5%89%A7%23) `344.0K 🔥` `NEW`
1. [缅北电诈园区枪决底层人员](https://s.weibo.com/weibo?q=%23%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E6%9E%AA%E5%86%B3%E5%BA%95%E5%B1%82%E4%BA%BA%E5%91%98%23) `246.8K 🔥` `NEW`
1. [三千的工资愣是存了80万](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%8D%83%E7%9A%84%E5%B7%A5%E8%B5%84%E6%84%A3%E6%98%AF%E5%AD%98%E4%BA%8680%E4%B8%87%23) `218.8K 🔥` `NEW`
1. [建议大家买房一定要远离公园](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B9%B0%E6%88%BF%E4%B8%80%E5%AE%9A%E8%A6%81%E8%BF%9C%E7%A6%BB%E5%85%AC%E5%9B%AD%23) `217.7K 🔥` `NEW`
1. [刘亦菲一下子加了五个代言](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E4%B8%80%E4%B8%8B%E5%AD%90%E5%8A%A0%E4%BA%86%E4%BA%94%E4%B8%AA%E4%BB%A3%E8%A8%80%23) `215.4K 🔥` `NEW`
1. [张居正 胡歌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%85%E6%AD%A3%20%E8%83%A1%E6%AD%8C%23) `214.1K 🔥` `NEW`
1. [代露娃持续掉粉](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E6%8C%81%E7%BB%AD%E6%8E%89%E7%B2%89%23) `212.4K 🔥` `NEW`
1. [高芙为孙心然鼓掌](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%8A%99%E4%B8%BA%E5%AD%99%E5%BF%83%E7%84%B6%E9%BC%93%E6%8E%8C%23) `209.7K 🔥` `NEW`
1. [住酒店真的会感染HPV吗](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E9%85%92%E5%BA%97%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%84%9F%E6%9F%93HPV%E5%90%97%23) `205.7K 🔥` `NEW`
1. [想要感染HPV一定得直接接触HPV](https://s.weibo.com/weibo?q=%23%E6%83%B3%E8%A6%81%E6%84%9F%E6%9F%93HPV%E4%B8%80%E5%AE%9A%E5%BE%97%E7%9B%B4%E6%8E%A5%E6%8E%A5%E8%A7%A6HPV%23) `187.5K 🔥` `NEW`
1. [刘学义黄羿侯明昊你们居然认识](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E9%BB%84%E7%BE%BF%E4%BE%AF%E6%98%8E%E6%98%8A%E4%BD%A0%E4%BB%AC%E5%B1%85%E7%84%B6%E8%AE%A4%E8%AF%86%23) `161.8K 🔥` `NEW`
1. [中国警方缅北战火下挖出同胞遗体](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%AD%A6%E6%96%B9%E7%BC%85%E5%8C%97%E6%88%98%E7%81%AB%E4%B8%8B%E6%8C%96%E5%87%BA%E5%90%8C%E8%83%9E%E9%81%97%E4%BD%93%23) `159.6K 🔥` `NEW`
1. [游客免费住宿舍学生同意了吗](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E5%85%8D%E8%B4%B9%E4%BD%8F%E5%AE%BF%E8%88%8D%E5%AD%A6%E7%94%9F%E5%90%8C%E6%84%8F%E4%BA%86%E5%90%97%23) `158.6K 🔥` `NEW`
1. [男子信中奖9000万失联3月在放羊](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BF%A1%E4%B8%AD%E5%A5%969000%E4%B8%87%E5%A4%B1%E8%81%943%E6%9C%88%E5%9C%A8%E6%94%BE%E7%BE%8A%23) `158.0K 🔥` `NEW`
1. [男子嫌九十九元盲盒便宜](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%AB%8C%E4%B9%9D%E5%8D%81%E4%B9%9D%E5%85%83%E7%9B%B2%E7%9B%92%E4%BE%BF%E5%AE%9C%23) `155.9K 🔥` `NEW`
1. [刘学义没对谭松韵用绅士手](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E6%B2%A1%E5%AF%B9%E8%B0%AD%E6%9D%BE%E9%9F%B5%E7%94%A8%E7%BB%85%E5%A3%AB%E6%89%8B%23) `154.6K 🔥` `NEW`
1. [华为高通 芯片](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%AB%98%E9%80%9A%20%E8%8A%AF%E7%89%87%23) `153.8K 🔥` `NEW`
1. [4岁女孩黑眼圈母亲没重视确诊瘤王](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%BB%91%E7%9C%BC%E5%9C%88%E6%AF%8D%E4%BA%B2%E6%B2%A1%E9%87%8D%E8%A7%86%E7%A1%AE%E8%AF%8A%E7%98%A4%E7%8E%8B%23) `153.6K 🔥` `NEW`
1. [时代峰峻疑似首尔分公司](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E7%96%91%E4%BC%BC%E9%A6%96%E5%B0%94%E5%88%86%E5%85%AC%E5%8F%B8%23) `149.8K 🔥` `NEW`
1. [孙心然被破发后落泪](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%BF%83%E7%84%B6%E8%A2%AB%E7%A0%B4%E5%8F%91%E5%90%8E%E8%90%BD%E6%B3%AA%23) `143.6K 🔥` `NEW`
1. [黄金睡眠时长出炉](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%9D%A1%E7%9C%A0%E6%97%B6%E9%95%BF%E5%87%BA%E7%82%89%23) `140.8K 🔥` `NEW`
1. [孙心然0比2高芙](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%BF%83%E7%84%B60%E6%AF%942%E9%AB%98%E8%8A%99%23) `138.0K 🔥` `NEW`
1. [参加过的最混乱婚礼](https://s.weibo.com/weibo?q=%23%E5%8F%82%E5%8A%A0%E8%BF%87%E7%9A%84%E6%9C%80%E6%B7%B7%E4%B9%B1%E5%A9%9A%E7%A4%BC%23) `136.9K 🔥` `NEW`
1. [王一博CHANEL大秀出图](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9ACHANEL%E5%A4%A7%E7%A7%80%E5%87%BA%E5%9B%BE%23) `135.9K 🔥` `NEW`
1. [杭州会惩罚每一个不听劝的犟种](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E4%BC%9A%E6%83%A9%E7%BD%9A%E6%AF%8F%E4%B8%80%E4%B8%AA%E4%B8%8D%E5%90%AC%E5%8A%9D%E7%9A%84%E7%8A%9F%E7%A7%8D%23) `134.1K 🔥` `NEW`
1. [梅德韦杰夫胯下击球](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%BE%B7%E9%9F%A6%E6%9D%B0%E5%A4%AB%E8%83%AF%E4%B8%8B%E5%87%BB%E7%90%83%23) `132.9K 🔥` `NEW`
1. [腾讯视频联合张居正官博打假](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91%E8%81%94%E5%90%88%E5%BC%A0%E5%B1%85%E6%AD%A3%E5%AE%98%E5%8D%9A%E6%89%93%E5%81%87%23) `132.6K 🔥` `NEW`
1. [中网广告牌闪动致重赛](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BD%91%E5%B9%BF%E5%91%8A%E7%89%8C%E9%97%AA%E5%8A%A8%E8%87%B4%E9%87%8D%E8%B5%9B%23) `132.6K 🔥` `NEW`
1. [陪兰香走到最后的人](https://s.weibo.com/weibo?q=%23%E9%99%AA%E5%85%B0%E9%A6%99%E8%B5%B0%E5%88%B0%E6%9C%80%E5%90%8E%E7%9A%84%E4%BA%BA%23) `130.2K 🔥` `NEW`
1. [蔡天凤尸检结果出炉](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%A4%A9%E5%87%A4%E5%B0%B8%E6%A3%80%E7%BB%93%E6%9E%9C%E5%87%BA%E7%82%89%23) `127.9K 🔥` `NEW`
1. [林绣茹救了许兰香](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%BB%A3%E8%8C%B9%E6%95%91%E4%BA%86%E8%AE%B8%E5%85%B0%E9%A6%99%23) `127.8K 🔥` `NEW`
1. [俄研究员鼠疫身亡近200人隔离](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%A0%94%E7%A9%B6%E5%91%98%E9%BC%A0%E7%96%AB%E8%BA%AB%E4%BA%A1%E8%BF%91200%E4%BA%BA%E9%9A%94%E7%A6%BB%23) `126.1K 🔥` `NEW`
1. [腾讯辟谣退货张居正](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E8%BE%9F%E8%B0%A3%E9%80%80%E8%B4%A7%E5%BC%A0%E5%B1%85%E6%AD%A3%23) `114.2K 🔥` `NEW`
1. [金喜善16岁就美成这样](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%96%9C%E5%96%8416%E5%B2%81%E5%B0%B1%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7%23) `108.8K 🔥` `NEW`
1. [孙颖莎重返世排第一后首胜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%87%8D%E8%BF%94%E4%B8%96%E6%8E%92%E7%AC%AC%E4%B8%80%E5%90%8E%E9%A6%96%E8%83%9C%23) `108.6K 🔥` `NEW`
1. [梅德韦杰夫 情绪化击球](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%BE%B7%E9%9F%A6%E6%9D%B0%E5%A4%AB%20%E6%83%85%E7%BB%AA%E5%8C%96%E5%87%BB%E7%90%83%23) `105.2K 🔥` `NEW`
1. [国庆第一批一起旅游的人已经闹掰](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E7%AC%AC%E4%B8%80%E6%89%B9%E4%B8%80%E8%B5%B7%E6%97%85%E6%B8%B8%E7%9A%84%E4%BA%BA%E5%B7%B2%E7%BB%8F%E9%97%B9%E6%8E%B0%23) `104.6K 🔥` `NEW`
1. [现在不流行离婚流行熬婚](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E4%B8%8D%E6%B5%81%E8%A1%8C%E7%A6%BB%E5%A9%9A%E6%B5%81%E8%A1%8C%E7%86%AC%E5%A9%9A%23) `99.5K 🔥` `NEW`
1. [东北超](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E8%B6%85%23) `97.7K 🔥` `NEW`
1. [火灵儿抄袭暖暖](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%81%B5%E5%84%BF%E6%8A%84%E8%A2%AD%E6%9A%96%E6%9A%96%23) `94.9K 🔥` `NEW`
1. [王一博 熟男](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E7%86%9F%E7%94%B7%23) `90.2K 🔥` `NEW`
1. [游客住学生宿舍 慷他人之慨](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E4%BD%8F%E5%AD%A6%E7%94%9F%E5%AE%BF%E8%88%8D%20%E6%85%B7%E4%BB%96%E4%BA%BA%E4%B9%8B%E6%85%A8%23) `87.1K 🔥` `NEW`

Updated at 2026-10-06 01:21:55

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
