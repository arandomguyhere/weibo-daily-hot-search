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

1. [WB夺冠](https://s.weibo.com/weibo?q=%23WB%E5%A4%BA%E5%86%A0%23) `13.1M 🔥` `NEW`
1. [梓墨FMVP](https://s.weibo.com/weibo?q=%23%E6%A2%93%E5%A2%A8FMVP%23) `3.9M 🔥` `NEW`
1. [来自深圳的邀请函](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E8%87%AA%E6%B7%B1%E5%9C%B3%E7%9A%84%E9%82%80%E8%AF%B7%E5%87%BD%23) `1.7M 🔥` `NEW`
1. [国足马来西亚爆发冲突](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E7%88%86%E5%8F%91%E5%86%B2%E7%AA%81%23) `1.6M 🔥` `NEW`
1. [朱天天 梓墨](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%A4%A9%E5%A4%A9%20%E6%A2%93%E5%A2%A8%23) `1.6M 🔥` `NEW`
1. [无畏的心率](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E7%9A%84%E5%BF%83%E7%8E%87%23) `456.3K 🔥` `NEW`
1. [男子为博流量伪造110短信被罚](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%BA%E5%8D%9A%E6%B5%81%E9%87%8F%E4%BC%AA%E9%80%A0110%E7%9F%AD%E4%BF%A1%E8%A2%AB%E7%BD%9A%23) `453.0K 🔥` `NEW`
1. [马来西亚进球被吹](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E8%BF%9B%E7%90%83%E8%A2%AB%E5%90%B9%23) `448.9K 🔥` `NEW`
1. [JDG巅峰对决WB](https://s.weibo.com/weibo?q=%23JDG%E5%B7%85%E5%B3%B0%E5%AF%B9%E5%86%B3WB%23) `447.5K 🔥` `NEW`
1. [Gemini压谁谁输](https://s.weibo.com/weibo?q=%23Gemini%E5%8E%8B%E8%B0%81%E8%B0%81%E8%BE%93%23) `414.6K 🔥` `NEW`
1. [国足开场点球被VAR取消](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E5%BC%80%E5%9C%BA%E7%82%B9%E7%90%83%E8%A2%ABVAR%E5%8F%96%E6%B6%88%23) `412.9K 🔥` `NEW`
1. [高迪 王乐乐](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%BF%AA%20%E7%8E%8B%E4%B9%90%E4%B9%90%23) `406.1K 🔥` `NEW`
1. [许飞直接红温了](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E7%9B%B4%E6%8E%A5%E7%BA%A2%E6%B8%A9%E4%BA%86%23) `396.5K 🔥` `NEW`
1. [曝大美的伤口是刀伤](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A4%A7%E7%BE%8E%E7%9A%84%E4%BC%A4%E5%8F%A3%E6%98%AF%E5%88%80%E4%BC%A4%23) `386.1K 🔥` `NEW`
1. [2026KPL年总决赛](https://s.weibo.com/weibo?q=%232026KPL%E5%B9%B4%E6%80%BB%E5%86%B3%E8%B5%9B%23) `382.3K 🔥` `NEW`
1. [海陆瘦20斤再扮紫薇](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E9%99%86%E7%98%A620%E6%96%A4%E5%86%8D%E6%89%AE%E7%B4%AB%E8%96%87%23) `382.0K 🔥` `NEW`
1. [杨清柠 王乐乐](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B8%85%E6%9F%A0%20%E7%8E%8B%E4%B9%90%E4%B9%90%23) `381.0K 🔥` `NEW`
1. [杨洋陈都灵车内吻戏路透](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E9%99%88%E9%83%BD%E7%81%B5%E8%BD%A6%E5%86%85%E5%90%BB%E6%88%8F%E8%B7%AF%E9%80%8F%23) `380.8K 🔥` `NEW`
1. [曝Doggo抢Junjia女友](https://s.weibo.com/weibo?q=%23%E6%9B%9DDoggo%E6%8A%A2Junjia%E5%A5%B3%E5%8F%8B%23) `379.7K 🔥` `NEW`
1. [LPL](https://s.weibo.com/weibo?q=%23LPL%23) `379.4K 🔥` `NEW`
1. [英伟达架构有多逆天](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%9E%B6%E6%9E%84%E6%9C%89%E5%A4%9A%E9%80%86%E5%A4%A9%23) `378.8K 🔥` `NEW`
1. [李昊关键两连扑](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8A%E5%85%B3%E9%94%AE%E4%B8%A4%E8%BF%9E%E6%89%91%23) `378.1K 🔥` `NEW`
1. [青稚再获巅峰挑战赛冠军](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E5%86%8D%E8%8E%B7%E5%B7%85%E5%B3%B0%E6%8C%91%E6%88%98%E8%B5%9B%E5%86%A0%E5%86%9B%23) `377.6K 🔥` `NEW`
1. [真的建议大家上班带点零食](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B8%8A%E7%8F%AD%E5%B8%A6%E7%82%B9%E9%9B%B6%E9%A3%9F%23) `376.9K 🔥` `NEW`
1. [JDG对战WB](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98WB%23) `375.8K 🔥` `NEW`
1. [日本3比2巴西](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC3%E6%AF%942%E5%B7%B4%E8%A5%BF%23) `375.6K 🔥` `NEW`
1. [大美妈妈回应](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%BE%8E%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%23) `374.9K 🔥` `NEW`
1. [迪丽热巴迪奥短片的配音](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%AA%E5%A5%A5%E7%9F%AD%E7%89%87%E7%9A%84%E9%85%8D%E9%9F%B3%23) `374.4K 🔥` `NEW`
1. [打印店老板堪比AI](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%8D%B0%E5%BA%97%E8%80%81%E6%9D%BF%E5%A0%AA%E6%AF%94AI%23) `372.9K 🔥` `NEW`
1. [4岁女童被气囊撞破十二指肠妈妈发声](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E7%AB%A5%E8%A2%AB%E6%B0%94%E5%9B%8A%E6%92%9E%E7%A0%B4%E5%8D%81%E4%BA%8C%E6%8C%87%E8%82%A0%E5%A6%88%E5%A6%88%E5%8F%91%E5%A3%B0%23) `372.6K 🔥` `NEW`
1. [超9成胃癌患者早期有这两个症状](https://s.weibo.com/weibo?q=%23%E8%B6%859%E6%88%90%E8%83%83%E7%99%8C%E6%82%A3%E8%80%85%E6%97%A9%E6%9C%9F%E6%9C%89%E8%BF%99%E4%B8%A4%E4%B8%AA%E7%97%87%E7%8A%B6%23) `370.5K 🔥` `NEW`
1. [英雄联盟](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%23) `369.4K 🔥` `NEW`
1. [中纪委罕见通报高官一把手职权腐败](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BA%AA%E5%A7%94%E7%BD%95%E8%A7%81%E9%80%9A%E6%8A%A5%E9%AB%98%E5%AE%98%E4%B8%80%E6%8A%8A%E6%89%8B%E8%81%8C%E6%9D%83%E8%85%90%E8%B4%A5%23) `367.6K 🔥` `NEW`
1. [厉娜把青改成卿太神](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E6%8A%8A%E9%9D%92%E6%94%B9%E6%88%90%E5%8D%BF%E5%A4%AA%E7%A5%9E%23) `367.2K 🔥` `NEW`
1. [田曦薇 女推3](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E5%A5%B3%E6%8E%A83%23) `331.2K 🔥` `NEW`
1. [中国老公被韩国婚礼整笑了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%80%81%E5%85%AC%E8%A2%AB%E9%9F%A9%E5%9B%BD%E5%A9%9A%E7%A4%BC%E6%95%B4%E7%AC%91%E4%BA%86%23) `322.3K 🔥` `NEW`
1. [网友曝高迪私下总爱吐槽大美](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%9B%9D%E9%AB%98%E8%BF%AA%E7%A7%81%E4%B8%8B%E6%80%BB%E7%88%B1%E5%90%90%E6%A7%BD%E5%A4%A7%E7%BE%8E%23) `301.5K 🔥` `NEW`
1. [cpb向檀健次道歉](https://s.weibo.com/weibo?q=%23cpb%E5%90%91%E6%AA%80%E5%81%A5%E6%AC%A1%E9%81%93%E6%AD%89%23) `289.6K 🔥` `NEW`
1. [清融 火舞](https://s.weibo.com/weibo?q=%23%E6%B8%85%E8%9E%8D%20%E7%81%AB%E8%88%9E%23) `283.0K 🔥` `NEW`
1. [中国人才是隐晦差评的神](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%89%8D%E6%98%AF%E9%9A%90%E6%99%A6%E5%B7%AE%E8%AF%84%E7%9A%84%E7%A5%9E%23) `273.1K 🔥` `NEW`
1. [丁程鑫这个粤语笑得我难受](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%BF%99%E4%B8%AA%E7%B2%A4%E8%AF%AD%E7%AC%91%E5%BE%97%E6%88%91%E9%9A%BE%E5%8F%97%23) `254.4K 🔥` `NEW`
1. [黄仁勋的去留不改变中国的方向](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E7%9A%84%E5%8E%BB%E7%95%99%E4%B8%8D%E6%94%B9%E5%8F%98%E4%B8%AD%E5%9B%BD%E7%9A%84%E6%96%B9%E5%90%91%23) `251.9K 🔥` `NEW`
1. [纯璇](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%92%87%23) `250.7K 🔥` `NEW`
1. [许飞和光芒万丈的娜娜](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%92%8C%E5%85%89%E8%8A%92%E4%B8%87%E4%B8%88%E7%9A%84%E5%A8%9C%E5%A8%9C%23) `245.2K 🔥` `NEW`
1. [曝时代少年团七周年直播改录播](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%B8%83%E5%91%A8%E5%B9%B4%E7%9B%B4%E6%92%AD%E6%94%B9%E5%BD%95%E6%92%AD%23) `228.1K 🔥` `NEW`
1. [暖阳 韩信](https://s.weibo.com/weibo?q=%23%E6%9A%96%E9%98%B3%20%E9%9F%A9%E4%BF%A1%23) `226.0K 🔥` `NEW`
1. [金鹤龙看迪丽热巴冒雨走红毯的反应](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%A4%E9%BE%99%E7%9C%8B%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%86%92%E9%9B%A8%E8%B5%B0%E7%BA%A2%E6%AF%AF%E7%9A%84%E5%8F%8D%E5%BA%94%23) `216.3K 🔥` `NEW`
1. [国足张玉宁踢到对手 不是点球](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E5%BC%A0%E7%8E%89%E5%AE%81%E8%B8%A2%E5%88%B0%E5%AF%B9%E6%89%8B%20%E4%B8%8D%E6%98%AF%E7%82%B9%E7%90%83%23) `214.7K 🔥` `NEW`
1. [张泉灵直呼马天宇太神奇了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%89%E7%81%B5%E7%9B%B4%E5%91%BC%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%A4%AA%E7%A5%9E%E5%A5%87%E4%BA%86%23) `214.1K 🔥` `NEW`
1. [黄仁勋卸任或加速国产算力落地](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%8D%B8%E4%BB%BB%E6%88%96%E5%8A%A0%E9%80%9F%E5%9B%BD%E4%BA%A7%E7%AE%97%E5%8A%9B%E8%90%BD%E5%9C%B0%23) `213.8K 🔥` `NEW`
1. [大美晒受伤照片](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%BE%8E%E6%99%92%E5%8F%97%E4%BC%A4%E7%85%A7%E7%89%87%23) `240.6K 🔥`

Updated at 2026-11-14 22:57:27

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
