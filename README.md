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

1. [住房公积金更好用了](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E6%88%BF%E5%85%AC%E7%A7%AF%E9%87%91%E6%9B%B4%E5%A5%BD%E7%94%A8%E4%BA%86%23) `837.9K 🔥` `NEW`
1. [巴西总统卢拉赢得连任](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E6%80%BB%E7%BB%9F%E5%8D%A2%E6%8B%89%E8%B5%A2%E5%BE%97%E8%BF%9E%E4%BB%BB%23) `403.0K 🔥` `NEW`
1. [2025年出生人口792万](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E5%87%BA%E7%94%9F%E4%BA%BA%E5%8F%A3792%E4%B8%87%23) `401.0K 🔥` `NEW`
1. [金球奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%90%83%E5%A5%96%23) `323.3K 🔥` `NEW`
1. [一觉醒来LPL全赢了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%A7%89%E9%86%92%E6%9D%A5LPL%E5%85%A8%E8%B5%A2%E4%BA%86%23) `323.0K 🔥` `NEW`
1. [东契奇52分](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%A5%91%E5%A5%8752%E5%88%86%23) `321.8K 🔥` `NEW`
1. [和胡彦斌分手后状态反差](https://s.weibo.com/weibo?q=%23%E5%92%8C%E8%83%A1%E5%BD%A6%E6%96%8C%E5%88%86%E6%89%8B%E5%90%8E%E7%8A%B6%E6%80%81%E5%8F%8D%E5%B7%AE%23) `321.0K 🔥` `NEW`
1. [大S二十年前分享的西太后穿搭](https://s.weibo.com/weibo?q=%23%E5%A4%A7S%E4%BA%8C%E5%8D%81%E5%B9%B4%E5%89%8D%E5%88%86%E4%BA%AB%E7%9A%84%E8%A5%BF%E5%A4%AA%E5%90%8E%E7%A9%BF%E6%90%AD%23) `319.4K 🔥` `NEW`
1. [过度执行就是反抗](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E6%89%A7%E8%A1%8C%E5%B0%B1%E6%98%AF%E5%8F%8D%E6%8A%97%23) `319.1K 🔥` `NEW`
1. [offer1的李浩源怎么了](https://s.weibo.com/weibo?q=%23offer1%E7%9A%84%E6%9D%8E%E6%B5%A9%E6%BA%90%E6%80%8E%E4%B9%88%E4%BA%86%23) `306.0K 🔥` `NEW`
1. [迪丽热巴五年前的红毯造型](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BA%94%E5%B9%B4%E5%89%8D%E7%9A%84%E7%BA%A2%E6%AF%AF%E9%80%A0%E5%9E%8B%23) `273.1K 🔥` `NEW`
1. [小作坊下料就是猛](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BD%9C%E5%9D%8A%E4%B8%8B%E6%96%99%E5%B0%B1%E6%98%AF%E7%8C%9B%23) `263.9K 🔥` `NEW`
1. [一张床上未必睡出两种人](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BC%A0%E5%BA%8A%E4%B8%8A%E6%9C%AA%E5%BF%85%E7%9D%A1%E5%87%BA%E4%B8%A4%E7%A7%8D%E4%BA%BA%23) `254.2K 🔥` `NEW`
1. [刘冲后台看迪丽热巴](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E5%90%8E%E5%8F%B0%E7%9C%8B%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `250.8K 🔥` `NEW`
1. [恋爱时的易梦玲](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%88%B1%E6%97%B6%E7%9A%84%E6%98%93%E6%A2%A6%E7%8E%B2%23) `245.7K 🔥` `NEW`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `215.5K 🔥` `NEW`
1. [黄多多下厨给妹妹弟弟做炸猪排](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E4%B8%8B%E5%8E%A8%E7%BB%99%E5%A6%B9%E5%A6%B9%E5%BC%9F%E5%BC%9F%E5%81%9A%E7%82%B8%E7%8C%AA%E6%8E%92%23) `208.4K 🔥` `NEW`
1. [只有刘宇宁才能撑起来](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E5%88%98%E5%AE%87%E5%AE%81%E6%89%8D%E8%83%BD%E6%92%91%E8%B5%B7%E6%9D%A5%23) `141.8K 🔥` `NEW`
1. [巴萨连输巴黎皇马](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A8%E8%BF%9E%E8%BE%93%E5%B7%B4%E9%BB%8E%E7%9A%87%E9%A9%AC%23) `141.7K 🔥` `NEW`
1. [雷霆vs快船](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E9%9C%86vs%E5%BF%AB%E8%88%B9%23) `136.8K 🔥` `NEW`
1. [钟文泽 控制变量](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%96%87%E6%B3%BD%20%E6%8E%A7%E5%88%B6%E5%8F%98%E9%87%8F%23) `127.3K 🔥` `NEW`
1. [安徽人口自然增长率低于全国均值](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E4%BA%BA%E5%8F%A3%E8%87%AA%E7%84%B6%E5%A2%9E%E9%95%BF%E7%8E%87%E4%BD%8E%E4%BA%8E%E5%85%A8%E5%9B%BD%E5%9D%87%E5%80%BC%23) `113.6K 🔥` `NEW`
1. [王俊凯和粉丝在演唱会打上电话了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%92%8C%E7%B2%89%E4%B8%9D%E5%9C%A8%E6%BC%94%E5%94%B1%E4%BC%9A%E6%89%93%E4%B8%8A%E7%94%B5%E8%AF%9D%E4%BA%86%23) `113.5K 🔥` `NEW`
1. [井柏然朋友请听好还原刘雯经典动作](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E6%9C%8B%E5%8F%8B%E8%AF%B7%E5%90%AC%E5%A5%BD%E8%BF%98%E5%8E%9F%E5%88%98%E9%9B%AF%E7%BB%8F%E5%85%B8%E5%8A%A8%E4%BD%9C%23) `110.8K 🔥` `NEW`
1. [皇马主帅回应国家德比战胜巴萨](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E4%B8%BB%E5%B8%85%E5%9B%9E%E5%BA%94%E5%9B%BD%E5%AE%B6%E5%BE%B7%E6%AF%94%E6%88%98%E8%83%9C%E5%B7%B4%E8%90%A8%23) `110.2K 🔥` `NEW`
1. [韩网热议TES胜G2](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E7%83%AD%E8%AE%AETES%E8%83%9CG2%23) `108.0K 🔥` `NEW`
1. [武契奇承认败选](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E6%89%BF%E8%AE%A4%E8%B4%A5%E9%80%89%23) `1.2M 🔥` `+124%`
1. [我国家庭规模持续缩小](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%AE%B6%E5%BA%AD%E8%A7%84%E6%A8%A1%E6%8C%81%E7%BB%AD%E7%BC%A9%E5%B0%8F%23) `322.3K 🔥` `+45%`
1. [黄子韬我结婚生子碍你事了吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%88%91%E7%BB%93%E5%A9%9A%E7%94%9F%E5%AD%90%E7%A2%8D%E4%BD%A0%E4%BA%8B%E4%BA%86%E5%90%97%23) `320.5K 🔥` `+98%`
1. [张智霖与前女友许秋怡世纪合体](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%BA%E9%9C%96%E4%B8%8E%E5%89%8D%E5%A5%B3%E5%8F%8B%E8%AE%B8%E7%A7%8B%E6%80%A1%E4%B8%96%E7%BA%AA%E5%90%88%E4%BD%93%23) `320.4K 🔥` `+100%`
1. [强烈建议给家里老人用苹果手机](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E7%83%88%E5%BB%BA%E8%AE%AE%E7%BB%99%E5%AE%B6%E9%87%8C%E8%80%81%E4%BA%BA%E7%94%A8%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%23) `319.6K 🔥` `+100%`
1. [徐艺洋赶来安抚黄子韬的情绪](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E8%B5%B6%E6%9D%A5%E5%AE%89%E6%8A%9A%E9%BB%84%E5%AD%90%E9%9F%AC%E7%9A%84%E6%83%85%E7%BB%AA%23) `316.7K 🔥` `+103%`
1. [男孩养大的狗被卖当场痛哭](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E5%85%BB%E5%A4%A7%E7%9A%84%E7%8B%97%E8%A2%AB%E5%8D%96%E5%BD%93%E5%9C%BA%E7%97%9B%E5%93%AD%23) `312.2K 🔥` `+268%`
1. [杨幂给林俊杰伴舞](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%BB%99%E6%9E%97%E4%BF%8A%E6%9D%B0%E4%BC%B4%E8%88%9E%23) `272.7K 🔥` `+39%`
1. [被一株三角梅燃到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%B8%80%E6%A0%AA%E4%B8%89%E8%A7%92%E6%A2%85%E7%87%83%E5%88%B0%E4%BA%86%23) `209.0K 🔥` `+29%`
1. [不上班后发现上海才是最宜居的城市](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%B8%8A%E7%8F%AD%E5%90%8E%E5%8F%91%E7%8E%B0%E4%B8%8A%E6%B5%B7%E6%89%8D%E6%98%AF%E6%9C%80%E5%AE%9C%E5%B1%85%E7%9A%84%E5%9F%8E%E5%B8%82%23) `200.7K 🔥` `+36%`
1. [林俊杰杨幂 茉莉雨](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E6%9D%A8%E5%B9%82%20%E8%8C%89%E8%8E%89%E9%9B%A8%23) `197.2K 🔥` `+31%`
1. [长期熬夜或是甲状腺癌诱因之一](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E7%86%AC%E5%A4%9C%E6%88%96%E6%98%AF%E7%94%B2%E7%8A%B6%E8%85%BA%E7%99%8C%E8%AF%B1%E5%9B%A0%E4%B9%8B%E4%B8%80%23) `150.6K 🔥` `+56%`
1. [钟文泽 小米18Fold](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%96%87%E6%B3%BD%20%E5%B0%8F%E7%B1%B318Fold%23) `145.9K 🔥` `+270%`
1. [众解说看iG战胜HLE反应](https://s.weibo.com/weibo?q=%23%E4%BC%97%E8%A7%A3%E8%AF%B4%E7%9C%8BiG%E6%88%98%E8%83%9CHLE%E5%8F%8D%E5%BA%94%23) `139.9K 🔥` `+25%`
1. [白桃星座一周运势](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%A1%83%E6%98%9F%E5%BA%A7%E4%B8%80%E5%91%A8%E8%BF%90%E5%8A%BF%23) `133.6K 🔥` `+57%`
1. [这么大一勺居然一点没沾到瓶子](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B9%88%E5%A4%A7%E4%B8%80%E5%8B%BA%E5%B1%85%E7%84%B6%E4%B8%80%E7%82%B9%E6%B2%A1%E6%B2%BE%E5%88%B0%E7%93%B6%E5%AD%90%23) `125.8K 🔥` `+82%`
1. [金牌闪耀赛场人生不惧残缺](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%89%8C%E9%97%AA%E8%80%80%E8%B5%9B%E5%9C%BA%E4%BA%BA%E7%94%9F%E4%B8%8D%E6%83%A7%E6%AE%8B%E7%BC%BA%23) `652.0K 🔥`
1. [姆巴佩绝杀巴萨](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%BB%9D%E6%9D%80%E5%B7%B4%E8%90%A8%23) `322.6K 🔥` `-66%`
1. [iG与TES双双晋级2-1组](https://s.weibo.com/weibo?q=%23iG%E4%B8%8ETES%E5%8F%8C%E5%8F%8C%E6%99%8B%E7%BA%A72-1%E7%BB%84%23) `298.0K 🔥` `-32%`
1. [iG战胜HLE](https://s.weibo.com/weibo?q=%23iG%E6%88%98%E8%83%9CHLE%23) `255.3K 🔥` `-21%`
1. [刘宇宁神级出场](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%A5%9E%E7%BA%A7%E5%87%BA%E5%9C%BA%23) `103.3K 🔥` `-29%`
1. [巴萨1比2皇马](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A81%E6%AF%942%E7%9A%87%E9%A9%AC%23) `103.1K 🔥` `-85%`

Updated at 2026-10-26 09:48:10

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
