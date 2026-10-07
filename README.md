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

1. [国庆假期北大仓秋收正酣](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E5%81%87%E6%9C%9F%E5%8C%97%E5%A4%A7%E4%BB%93%E7%A7%8B%E6%94%B6%E6%AD%A3%E9%85%A3%23) `721.0K 🔥` `NEW`
1. [王一博奥迪e-tron硬核实力登场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%A5%A5%E8%BF%AAe-tron%E7%A1%AC%E6%A0%B8%E5%AE%9E%E5%8A%9B%E7%99%BB%E5%9C%BA%23) `719.0K 🔥` `NEW`
1. [兰香如故现象级爆剧](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%8E%B0%E8%B1%A1%E7%BA%A7%E7%88%86%E5%89%A7%23) `696.3K 🔥` `NEW`
1. [研究证实每天睡8小时可能多了](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E8%AF%81%E5%AE%9E%E6%AF%8F%E5%A4%A9%E7%9D%A18%E5%B0%8F%E6%97%B6%E5%8F%AF%E8%83%BD%E5%A4%9A%E4%BA%86%23) `221.4K 🔥` `NEW`
1. [张韶涵演唱会砸烂苹果](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A0%B8%E7%83%82%E8%8B%B9%E6%9E%9C%23) `188.5K 🔥` `NEW`
1. [寒露](https://s.weibo.com/weibo?q=%23%E5%AF%92%E9%9C%B2%23) `185.2K 🔥` `NEW`
1. [李现第一次在鸟巢开唱](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%9C%A8%E9%B8%9F%E5%B7%A2%E5%BC%80%E5%94%B1%23) `184.3K 🔥` `NEW`
1. [鲁智深姐姐火了](https://s.weibo.com/weibo?q=%23%E9%B2%81%E6%99%BA%E6%B7%B1%E5%A7%90%E5%A7%90%E7%81%AB%E4%BA%86%23) `182.1K 🔥` `NEW`
1. [骗走王星的人潜伏在多个影视群](https://s.weibo.com/weibo?q=%23%E9%AA%97%E8%B5%B0%E7%8E%8B%E6%98%9F%E7%9A%84%E4%BA%BA%E6%BD%9C%E4%BC%8F%E5%9C%A8%E5%A4%9A%E4%B8%AA%E5%BD%B1%E8%A7%86%E7%BE%A4%23) `158.2K 🔥` `NEW`
1. [工作越久越不想要人生巅峰模版](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E8%B6%8A%E4%B9%85%E8%B6%8A%E4%B8%8D%E6%83%B3%E8%A6%81%E4%BA%BA%E7%94%9F%E5%B7%85%E5%B3%B0%E6%A8%A1%E7%89%88%23) `156.9K 🔥` `NEW`
1. [全国社保基金二十五年赚两点三万亿](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E7%A4%BE%E4%BF%9D%E5%9F%BA%E9%87%91%E4%BA%8C%E5%8D%81%E4%BA%94%E5%B9%B4%E8%B5%9A%E4%B8%A4%E7%82%B9%E4%B8%89%E4%B8%87%E4%BA%BF%23) `156.7K 🔥` `NEW`
1. [网红小四爷涉嫌诈骗被抓](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B0%8F%E5%9B%9B%E7%88%B7%E6%B6%89%E5%AB%8C%E8%AF%88%E9%AA%97%E8%A2%AB%E6%8A%93%23) `147.8K 🔥` `NEW`
1. [台湾解说称孙颖莎明显在硬抗](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E8%A7%A3%E8%AF%B4%E7%A7%B0%E5%AD%99%E9%A2%96%E8%8E%8E%E6%98%8E%E6%98%BE%E5%9C%A8%E7%A1%AC%E6%8A%97%23) `144.0K 🔥` `NEW`
1. [缺乏蛋白质的9个信号](https://s.weibo.com/weibo?q=%23%E7%BC%BA%E4%B9%8F%E8%9B%8B%E7%99%BD%E8%B4%A8%E7%9A%849%E4%B8%AA%E4%BF%A1%E5%8F%B7%23) `107.6K 🔥` `NEW`
1. [记忆里韩都衣舍那几年是真火](https://s.weibo.com/weibo?q=%23%E8%AE%B0%E5%BF%86%E9%87%8C%E9%9F%A9%E9%83%BD%E8%A1%A3%E8%88%8D%E9%82%A3%E5%87%A0%E5%B9%B4%E6%98%AF%E7%9C%9F%E7%81%AB%23) `94.3K 🔥` `NEW`
1. [代露娃否认高考200多分](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E5%90%A6%E8%AE%A4%E9%AB%98%E8%80%83200%E5%A4%9A%E5%88%86%23) `78.9K 🔥` `NEW`
1. [佩德罗宣布退役](https://s.weibo.com/weibo?q=%23%E4%BD%A9%E5%BE%B7%E7%BD%97%E5%AE%A3%E5%B8%83%E9%80%80%E5%BD%B9%23) `75.4K 🔥` `NEW`
1. [和妈妈聊天胜过所有心理医生](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%A6%88%E5%A6%88%E8%81%8A%E5%A4%A9%E8%83%9C%E8%BF%87%E6%89%80%E6%9C%89%E5%BF%83%E7%90%86%E5%8C%BB%E7%94%9F%23) `71.5K 🔥` `NEW`
1. [丁程鑫脸颊肉瘦没了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%84%B8%E9%A2%8A%E8%82%89%E7%98%A6%E6%B2%A1%E4%BA%86%23) `71.5K 🔥` `NEW`
1. [小米澎程首月锁单量竞猜](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E9%A6%96%E6%9C%88%E9%94%81%E5%8D%95%E9%87%8F%E7%AB%9E%E7%8C%9C%23) `68.8K 🔥` `NEW`
1. [门诊告示豆包诊断患者改问千问](https://s.weibo.com/weibo?q=%23%E9%97%A8%E8%AF%8A%E5%91%8A%E7%A4%BA%E8%B1%86%E5%8C%85%E8%AF%8A%E6%96%AD%E6%82%A3%E8%80%85%E6%94%B9%E9%97%AE%E5%8D%83%E9%97%AE%23) `1.5M 🔥` `+258%`
1. [建议女孩子多用原相机拍照](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A5%B3%E5%AD%A9%E5%AD%90%E5%A4%9A%E7%94%A8%E5%8E%9F%E7%9B%B8%E6%9C%BA%E6%8B%8D%E7%85%A7%23) `1.1M 🔥` `+390%`
1. [国乒首次无缘中国大满贯混双领奖台](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E9%A6%96%E6%AC%A1%E6%97%A0%E7%BC%98%E4%B8%AD%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%E6%B7%B7%E5%8F%8C%E9%A2%86%E5%A5%96%E5%8F%B0%23) `497.6K 🔥` `+852%`
1. [对手谈孙颖莎比赛状态](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%89%8B%E8%B0%88%E5%AD%99%E9%A2%96%E8%8E%8E%E6%AF%94%E8%B5%9B%E7%8A%B6%E6%80%81%23) `305.2K 🔥` `+443%`
1. [今夜股债双杀](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%9C%E8%82%A1%E5%80%BA%E5%8F%8C%E6%9D%80%23) `269.6K 🔥` `+415%`
1. [檀健次卢昱晓 身高差](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%8D%A2%E6%98%B1%E6%99%93%20%E8%BA%AB%E9%AB%98%E5%B7%AE%23) `207.4K 🔥` `+253%`
1. [孙颖莎爆冷止步32强](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%88%86%E5%86%B7%E6%AD%A2%E6%AD%A532%E5%BC%BA%23) `192.8K 🔥` `+249%`
1. [网红小四爷 缅北](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B0%8F%E5%9B%9B%E7%88%B7%20%E7%BC%85%E5%8C%97%23) `192.3K 🔥` `+249%`
1. [俄罗斯现不明原因肺炎死亡病例](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E7%8E%B0%E4%B8%8D%E6%98%8E%E5%8E%9F%E5%9B%A0%E8%82%BA%E7%82%8E%E6%AD%BB%E4%BA%A1%E7%97%85%E4%BE%8B%23) `191.8K 🔥` `+255%`
1. [曝王晓慧有孩子了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E6%99%93%E6%85%A7%E6%9C%89%E5%AD%A9%E5%AD%90%E4%BA%86%23) `190.3K 🔥` `+224%`
1. [九个舅舅染不同发色参加侄女婚礼](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E4%B8%AA%E8%88%85%E8%88%85%E6%9F%93%E4%B8%8D%E5%90%8C%E5%8F%91%E8%89%B2%E5%8F%82%E5%8A%A0%E4%BE%84%E5%A5%B3%E5%A9%9A%E7%A4%BC%23) `189.8K 🔥` `+252%`
1. [众多台湾艺人明确一个中国立场](https://s.weibo.com/weibo?q=%23%E4%BC%97%E5%A4%9A%E5%8F%B0%E6%B9%BE%E8%89%BA%E4%BA%BA%E6%98%8E%E7%A1%AE%E4%B8%80%E4%B8%AA%E4%B8%AD%E5%9B%BD%E7%AB%8B%E5%9C%BA%23) `189.3K 🔥` `+223%`
1. [缅北地图密密麻麻全是电诈窝点](https://s.weibo.com/weibo?q=%23%E7%BC%85%E5%8C%97%E5%9C%B0%E5%9B%BE%E5%AF%86%E5%AF%86%E9%BA%BB%E9%BA%BB%E5%85%A8%E6%98%AF%E7%94%B5%E8%AF%88%E7%AA%9D%E7%82%B9%23) `188.0K 🔥` `+425%`
1. [时代峰峻超likeTOP20](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%B6%85likeTOP20%23) `187.1K 🔥` `+228%`
1. [飞天奖](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E5%A4%A9%E5%A5%96%23) `186.7K 🔥` `+309%`
1. [便宜但可能致癌的小东西](https://s.weibo.com/weibo?q=%23%E4%BE%BF%E5%AE%9C%E4%BD%86%E5%8F%AF%E8%83%BD%E8%87%B4%E7%99%8C%E7%9A%84%E5%B0%8F%E4%B8%9C%E8%A5%BF%23) `186.4K 🔥` `+366%`
1. [女子肝气郁结大笑获小朋友回应](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%82%9D%E6%B0%94%E9%83%81%E7%BB%93%E5%A4%A7%E7%AC%91%E8%8E%B7%E5%B0%8F%E6%9C%8B%E5%8F%8B%E5%9B%9E%E5%BA%94%23) `185.9K 🔥` `+409%`
1. [代露娃 谢谢所有骂醒我的人](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%20%E8%B0%A2%E8%B0%A2%E6%89%80%E6%9C%89%E9%AA%82%E9%86%92%E6%88%91%E7%9A%84%E4%BA%BA%23) `185.6K 🔥` `+250%`
1. [八块一斤仙贝唠几千万的嗑](https://s.weibo.com/weibo?q=%23%E5%85%AB%E5%9D%97%E4%B8%80%E6%96%A4%E4%BB%99%E8%B4%9D%E5%94%A0%E5%87%A0%E5%8D%83%E4%B8%87%E7%9A%84%E5%97%91%23) `184.5K 🔥` `+361%`
1. [同事月薪一万五全给老婆](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%BA%8B%E6%9C%88%E8%96%AA%E4%B8%80%E4%B8%87%E4%BA%94%E5%85%A8%E7%BB%99%E8%80%81%E5%A9%86%23) `174.2K 🔥` `+340%`
1. [重庆李子坝地下33米藏着一亿现钞](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E6%9D%8E%E5%AD%90%E5%9D%9D%E5%9C%B0%E4%B8%8B33%E7%B1%B3%E8%97%8F%E7%9D%80%E4%B8%80%E4%BA%BF%E7%8E%B0%E9%92%9E%23) `168.0K 🔥` `+362%`
1. [郑钦文2比1赢了查拉耶娃](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%872%E6%AF%941%E8%B5%A2%E4%BA%86%E6%9F%A5%E6%8B%89%E8%80%B6%E5%A8%83%23) `164.6K 🔥` `+348%`
1. [中国人的十一好像只为了几件事](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%9A%84%E5%8D%81%E4%B8%80%E5%A5%BD%E5%83%8F%E5%8F%AA%E4%B8%BA%E4%BA%86%E5%87%A0%E4%BB%B6%E4%BA%8B%23) `164.6K 🔥` `+351%`
1. [王星被骗至妙瓦底4天被卖3次](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%A2%AB%E9%AA%97%E8%87%B3%E5%A6%99%E7%93%A6%E5%BA%954%E5%A4%A9%E8%A2%AB%E5%8D%963%E6%AC%A1%23) `156.0K 🔥` `+292%`
1. [王星失联前向女友求救发猫喂了没](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E5%A4%B1%E8%81%94%E5%89%8D%E5%90%91%E5%A5%B3%E5%8F%8B%E6%B1%82%E6%95%91%E5%8F%91%E7%8C%AB%E5%96%82%E4%BA%86%E6%B2%A1%23) `121.7K 🔥` `+101%`
1. [离加油站20米燃油耗尽车主发声](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%8A%A0%E6%B2%B9%E7%AB%9920%E7%B1%B3%E7%87%83%E6%B2%B9%E8%80%97%E5%B0%BD%E8%BD%A6%E4%B8%BB%E5%8F%91%E5%A3%B0%23) `117.5K 🔥` `+240%`
1. [美国大使馆敦促在俄美国人离开](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%A7%E4%BD%BF%E9%A6%86%E6%95%A6%E4%BF%83%E5%9C%A8%E4%BF%84%E7%BE%8E%E5%9B%BD%E4%BA%BA%E7%A6%BB%E5%BC%80%23) `86.8K 🔥` `+166%`
1. [邓紫棋男友](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E7%94%B7%E5%8F%8B%23) `80.8K 🔥` `+54%`
1. [台湾解说称好教练应强制孙颖莎休息](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E8%A7%A3%E8%AF%B4%E7%A7%B0%E5%A5%BD%E6%95%99%E7%BB%83%E5%BA%94%E5%BC%BA%E5%88%B6%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BC%91%E6%81%AF%23) `77.8K 🔥` `+105%`

Updated at 2026-10-08 07:53:05

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
