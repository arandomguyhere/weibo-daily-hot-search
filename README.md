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

1. [中国队亚运王者夺金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E4%BA%9A%E8%BF%90%E7%8E%8B%E8%80%85%E5%A4%BA%E9%87%91%23) `2.1M 🔥` `NEW`
1. [一诺双金牌](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%8F%8C%E9%87%91%E7%89%8C%23) `991.5K 🔥` `NEW`
1. [商务部解读第八轮中美经贸磋商成果](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%8A%A1%E9%83%A8%E8%A7%A3%E8%AF%BB%E7%AC%AC%E5%85%AB%E8%BD%AE%E4%B8%AD%E7%BE%8E%E7%BB%8F%E8%B4%B8%E7%A3%8B%E5%95%86%E6%88%90%E6%9E%9C%23) `748.7K 🔥` `NEW`
1. [日媒惊呼中国队出了怪物级天才](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E6%83%8A%E5%91%BC%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%87%BA%E4%BA%86%E6%80%AA%E7%89%A9%E7%BA%A7%E5%A4%A9%E6%89%8D%23) `666.3K 🔥` `NEW`
1. [王者亚运中国vs马来西亚](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E4%BA%9A%E8%BF%90%E4%B8%AD%E5%9B%BDvs%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%23) `590.5K 🔥` `NEW`
1. [拾荒老人不知自己每月养老金3700元](https://s.weibo.com/weibo?q=%23%E6%8B%BE%E8%8D%92%E8%80%81%E4%BA%BA%E4%B8%8D%E7%9F%A5%E8%87%AA%E5%B7%B1%E6%AF%8F%E6%9C%88%E5%85%BB%E8%80%81%E9%87%913700%E5%85%83%23) `581.6K 🔥` `NEW`
1. [肖顺尧巡演官方周边](https://s.weibo.com/weibo?q=%23%E8%82%96%E9%A1%BA%E5%B0%A7%E5%B7%A1%E6%BC%94%E5%AE%98%E6%96%B9%E5%91%A8%E8%BE%B9%23) `569.7K 🔥` `NEW`
1. [书写中美关系历史新篇](https://s.weibo.com/weibo?q=%23%E4%B9%A6%E5%86%99%E4%B8%AD%E7%BE%8E%E5%85%B3%E7%B3%BB%E5%8E%86%E5%8F%B2%E6%96%B0%E7%AF%87%23) `568.5K 🔥` `NEW`
1. [林诗栋vs林昀儒](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8Bvs%E6%9E%97%E6%98%80%E5%84%92%23) `567.4K 🔥` `NEW`
1. [王楚钦男单冲金](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%94%B7%E5%8D%95%E5%86%B2%E9%87%91%23) `562.0K 🔥` `NEW`
1. [林诗栋林昀儒现场助威反差](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E6%9E%97%E6%98%80%E5%84%92%E7%8E%B0%E5%9C%BA%E5%8A%A9%E5%A8%81%E5%8F%8D%E5%B7%AE%23) `546.3K 🔥` `NEW`
1. [张家齐不愿和解但会赡养](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E4%B8%8D%E6%84%BF%E5%92%8C%E8%A7%A3%E4%BD%86%E4%BC%9A%E8%B5%A1%E5%85%BB%23) `525.1K 🔥` `NEW`
1. [林诗栋 你一分我一分](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%20%E4%BD%A0%E4%B8%80%E5%88%86%E6%88%91%E4%B8%80%E5%88%86%23) `498.2K 🔥` `NEW`
1. [曝李蠕蠕95生恋情](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E8%A0%95%E8%A0%9595%E7%94%9F%E6%81%8B%E6%83%85%23) `475.6K 🔥` `NEW`
1. [对手穿错鞋子 中国队递补获得金银牌](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%89%8B%E7%A9%BF%E9%94%99%E9%9E%8B%E5%AD%90%20%E4%B8%AD%E5%9B%BD%E9%98%9F%E9%80%92%E8%A1%A5%E8%8E%B7%E5%BE%97%E9%87%91%E9%93%B6%E7%89%8C%23) `460.1K 🔥` `NEW`
1. [前租客搬走后孩子独居房东陷收房难](https://s.weibo.com/weibo?q=%23%E5%89%8D%E7%A7%9F%E5%AE%A2%E6%90%AC%E8%B5%B0%E5%90%8E%E5%AD%A9%E5%AD%90%E7%8B%AC%E5%B1%85%E6%88%BF%E4%B8%9C%E9%99%B7%E6%94%B6%E6%88%BF%E9%9A%BE%23) `458.1K 🔥` `NEW`
1. [兰香林锦岐有女儿了](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E6%9E%97%E9%94%A6%E5%B2%90%E6%9C%89%E5%A5%B3%E5%84%BF%E4%BA%86%23) `453.9K 🔥` `NEW`
1. [华为mate90](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAmate90%23) `450.8K 🔥` `NEW`
1. [林诗栋绝地逆转](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E7%BB%9D%E5%9C%B0%E9%80%86%E8%BD%AC%23) `431.4K 🔥` `NEW`
1. [上海潮流新地标竟是京东开的](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%BD%AE%E6%B5%81%E6%96%B0%E5%9C%B0%E6%A0%87%E7%AB%9F%E6%98%AF%E4%BA%AC%E4%B8%9C%E5%BC%80%E7%9A%84%23) `428.5K 🔥` `NEW`
1. [陈雨菲说差点无缘亚运会](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9B%A8%E8%8F%B2%E8%AF%B4%E5%B7%AE%E7%82%B9%E6%97%A0%E7%BC%98%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `428.4K 🔥` `NEW`
1. [林诗栋4比3林昀儒](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B4%E6%AF%943%E6%9E%97%E6%98%80%E5%84%92%23) `428.3K 🔥` `NEW`
1. [段永平买入3万股茅台](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E6%B0%B8%E5%B9%B3%E4%B9%B0%E5%85%A53%E4%B8%87%E8%82%A1%E8%8C%85%E5%8F%B0%23) `424.2K 🔥` `NEW`
1. [突然发现大家的养娃思路好清晰](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E5%A4%A7%E5%AE%B6%E7%9A%84%E5%85%BB%E5%A8%83%E6%80%9D%E8%B7%AF%E5%A5%BD%E6%B8%85%E6%99%B0%23) `420.9K 🔥` `NEW`
1. [林诗栋王楚钦会师决赛](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%BC%9A%E5%B8%88%E5%86%B3%E8%B5%9B%23) `410.2K 🔥` `NEW`
1. [曝90体寒花解约谈判僵局](https://s.weibo.com/weibo?q=%23%E6%9B%9D90%E4%BD%93%E5%AF%92%E8%8A%B1%E8%A7%A3%E7%BA%A6%E8%B0%88%E5%88%A4%E5%83%B5%E5%B1%80%23) `385.3K 🔥` `NEW`
1. [清融亚运金牌中路](https://s.weibo.com/weibo?q=%23%E6%B8%85%E8%9E%8D%E4%BA%9A%E8%BF%90%E9%87%91%E7%89%8C%E4%B8%AD%E8%B7%AF%23) `373.2K 🔥` `NEW`
1. [终于看到张家齐爸爸了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9C%8B%E5%88%B0%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%88%B8%E7%88%B8%E4%BA%86%23) `352.7K 🔥` `NEW`
1. [游本昌离世前家人未强行喂食送医](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E6%9C%AC%E6%98%8C%E7%A6%BB%E4%B8%96%E5%89%8D%E5%AE%B6%E4%BA%BA%E6%9C%AA%E5%BC%BA%E8%A1%8C%E5%96%82%E9%A3%9F%E9%80%81%E5%8C%BB%23) `346.6K 🔥` `NEW`
1. [70万人点赞的跨国情谊](https://s.weibo.com/weibo?q=%2370%E4%B8%87%E4%BA%BA%E7%82%B9%E8%B5%9E%E7%9A%84%E8%B7%A8%E5%9B%BD%E6%83%85%E8%B0%8A%23) `344.0K 🔥` `NEW`
1. [换电池小卡扣要13万接近车价一半](https://s.weibo.com/weibo?q=%23%E6%8D%A2%E7%94%B5%E6%B1%A0%E5%B0%8F%E5%8D%A1%E6%89%A3%E8%A6%8113%E4%B8%87%E6%8E%A5%E8%BF%91%E8%BD%A6%E4%BB%B7%E4%B8%80%E5%8D%8A%23) `343.8K 🔥` `NEW`
1. [鸿蒙智行发布会](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E5%8F%91%E5%B8%83%E4%BC%9A%23) `340.7K 🔥` `NEW`
1. [爱喝咖啡的人天亮了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%96%9D%E5%92%96%E5%95%A1%E7%9A%84%E4%BA%BA%E5%A4%A9%E4%BA%AE%E4%BA%86%23) `337.1K 🔥` `NEW`
1. [谭松韵下个组可以提上议程了](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E4%B8%8B%E4%B8%AA%E7%BB%84%E5%8F%AF%E4%BB%A5%E6%8F%90%E4%B8%8A%E8%AE%AE%E7%A8%8B%E4%BA%86%23) `327.9K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `326.1K 🔥` `NEW`
1. [余承东称智界RX鸿蒙智行最好开](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E7%A7%B0%E6%99%BA%E7%95%8CRX%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E6%9C%80%E5%A5%BD%E5%BC%80%23) `317.6K 🔥` `NEW`
1. [易烊千玺开设罤外专属账号](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%BC%80%E8%AE%BE%E7%BD%A4%E5%A4%96%E4%B8%93%E5%B1%9E%E8%B4%A6%E5%8F%B7%23) `316.6K 🔥` `NEW`
1. [梁王](https://s.weibo.com/weibo?q=%23%E6%A2%81%E7%8E%8B%23) `312.9K 🔥` `NEW`
1. [日本修女性侵聋哑儿童获刑](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BF%AE%E5%A5%B3%E6%80%A7%E4%BE%B5%E8%81%8B%E5%93%91%E5%84%BF%E7%AB%A5%E8%8E%B7%E5%88%91%23) `296.4K 🔥` `NEW`
1. [林诗栋身兼四项全进决赛](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E8%BA%AB%E5%85%BC%E5%9B%9B%E9%A1%B9%E5%85%A8%E8%BF%9B%E5%86%B3%E8%B5%9B%23) `294.4K 🔥` `NEW`
1. [荣耀发布会](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E5%8F%91%E5%B8%83%E4%BC%9A%23) `294.3K 🔥` `NEW`
1. [一个伤肝的饮品很多人天天喝](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BC%A4%E8%82%9D%E7%9A%84%E9%A5%AE%E5%93%81%E5%BE%88%E5%A4%9A%E4%BA%BA%E5%A4%A9%E5%A4%A9%E5%96%9D%23) `280.7K 🔥` `NEW`
1. [苹果回应iPhone18Pro系列严重漏洞](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%9B%9E%E5%BA%94iPhone18Pro%E7%B3%BB%E5%88%97%E4%B8%A5%E9%87%8D%E6%BC%8F%E6%B4%9E%23) `273.1K 🔥` `NEW`
1. [一诺中国电竞首位亚运双金](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E4%B8%AD%E5%9B%BD%E7%94%B5%E7%AB%9E%E9%A6%96%E4%BD%8D%E4%BA%9A%E8%BF%90%E5%8F%8C%E9%87%91%23) `271.3K 🔥` `NEW`
1. [刘学义31岁才有第一部男主剧](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%8931%E5%B2%81%E6%89%8D%E6%9C%89%E7%AC%AC%E4%B8%80%E9%83%A8%E7%94%B7%E4%B8%BB%E5%89%A7%23) `268.5K 🔥` `NEW`
1. [阿拉米扬教练与王楚钦击掌后拥抱](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%8B%89%E7%B1%B3%E6%89%AC%E6%95%99%E7%BB%83%E4%B8%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%87%BB%E6%8E%8C%E5%90%8E%E6%8B%A5%E6%8A%B1%23) `259.0K 🔥` `NEW`
1. [央视起底关不掉的弹窗广告](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%B5%B7%E5%BA%95%E5%85%B3%E4%B8%8D%E6%8E%89%E7%9A%84%E5%BC%B9%E7%AA%97%E5%B9%BF%E5%91%8A%23) `242.7K 🔥` `NEW`
1. [大众T6进爆米花机翻滚50圈还能开](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%97T6%E8%BF%9B%E7%88%86%E7%B1%B3%E8%8A%B1%E6%9C%BA%E7%BF%BB%E6%BB%9A50%E5%9C%88%E8%BF%98%E8%83%BD%E5%BC%80%23) `242.6K 🔥` `NEW`
1. [李蠕蠕收入比娱乐圈很多人高](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%A0%95%E8%A0%95%E6%94%B6%E5%85%A5%E6%AF%94%E5%A8%B1%E4%B9%90%E5%9C%88%E5%BE%88%E5%A4%9A%E4%BA%BA%E9%AB%98%23) `242.6K 🔥` `NEW`
1. [王楚钦vs阿拉米扬](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E9%98%BF%E6%8B%89%E7%B1%B3%E6%89%AC%23) `237.0K 🔥` `NEW`
1. [王楚钦林诗栋会师](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%9E%97%E8%AF%97%E6%A0%8B%E4%BC%9A%E5%B8%88%23) `235.8K 🔥` `NEW`

Updated at 2026-09-28 15:45:13

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
