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

1. [重大实验室爆炸疑因操作不当引发 (Major laboratory explosion suspected to have been caused by improper operation)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%A4%A7%E5%AE%9E%E9%AA%8C%E5%AE%A4%E7%88%86%E7%82%B8%E7%96%91%E5%9B%A0%E6%93%8D%E4%BD%9C%E4%B8%8D%E5%BD%93%E5%BC%95%E5%8F%91%23) `861.1K 🔥` `NEW`
1. [梅姨到哪也不出示身份证](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%88%B0%E5%93%AA%E4%B9%9F%E4%B8%8D%E5%87%BA%E7%A4%BA%E8%BA%AB%E4%BB%BD%E8%AF%81%23) `624.5K 🔥` `NEW`
1. [2026全国寻春地图](https://s.weibo.com/weibo?q=%232026%E5%85%A8%E5%9B%BD%E5%AF%BB%E6%98%A5%E5%9C%B0%E5%9B%BE%23) `509.4K 🔥` `NEW`
1. [GEN对战G2](https://s.weibo.com/weibo?q=%23GEN%E5%AF%B9%E6%88%98G2%23) `507.3K 🔥` `NEW`
1. [G2虐泉GEN](https://s.weibo.com/weibo?q=%23G2%E8%99%90%E6%B3%89GEN%23) `251.0K 🔥` `NEW`
1. [当年亲爱的热爱的被泄漏反创新高](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%B9%B4%E4%BA%B2%E7%88%B1%E7%9A%84%E7%83%AD%E7%88%B1%E7%9A%84%E8%A2%AB%E6%B3%84%E6%BC%8F%E5%8F%8D%E5%88%9B%E6%96%B0%E9%AB%98%23) `250.5K 🔥` `NEW`
1. [华晨宇的重点来了](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E7%9A%84%E9%87%8D%E7%82%B9%E6%9D%A5%E4%BA%86%23) `250.0K 🔥` `NEW`
1. [梅姨被逮捕](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%A2%AB%E9%80%AE%E6%8D%95%23) `249.5K 🔥` `NEW`
1. [小区旁400万吨垃圾被挖出来了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA%E6%97%81400%E4%B8%87%E5%90%A8%E5%9E%83%E5%9C%BE%E8%A2%AB%E6%8C%96%E5%87%BA%E6%9D%A5%E4%BA%86%23) `246.5K 🔥` `NEW`
1. [以色列称伊朗发射弹道导弹](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E7%A7%B0%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B0%84%E5%BC%B9%E9%81%93%E5%AF%BC%E5%BC%B9%23) `233.2K 🔥` `NEW`
1. [季冠霖发文抵制AI (Ji Guanlin issued a letter boycotting AI)](https://s.weibo.com/weibo?q=%23%E5%AD%A3%E5%86%A0%E9%9C%96%E5%8F%91%E6%96%87%E6%8A%B5%E5%88%B6AI%23) `212.8K 🔥` `NEW`
1. [女子制售自拍淫秽视频获刑3年](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%88%B6%E5%94%AE%E8%87%AA%E6%8B%8D%E6%B7%AB%E7%A7%BD%E8%A7%86%E9%A2%91%E8%8E%B7%E5%88%913%E5%B9%B4%23) `212.8K 🔥` `NEW`
1. [这段话杀死了我的精神内耗](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E6%9D%80%E6%AD%BB%E4%BA%86%E6%88%91%E7%9A%84%E7%B2%BE%E7%A5%9E%E5%86%85%E8%80%97%23) `212.3K 🔥` `NEW`
1. [网传B站裁员60%研发集体罢工](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0B%E7%AB%99%E8%A3%81%E5%91%9860%25%E7%A0%94%E5%8F%91%E9%9B%86%E4%BD%93%E7%BD%A2%E5%B7%A5%23) `210.8K 🔥` `NEW`
1. [重庆大学通报实验室爆炸](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E5%AE%9E%E9%AA%8C%E5%AE%A4%E7%88%86%E7%82%B8%23) `209.0K 🔥` `NEW`
1. [迪丽热巴新经纪人疑似回应入职嘉行](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%96%B0%E7%BB%8F%E7%BA%AA%E4%BA%BA%E7%96%91%E4%BC%BC%E5%9B%9E%E5%BA%94%E5%85%A5%E8%81%8C%E5%98%89%E8%A1%8C%23) `163.5K 🔥` `NEW`
1. [出车祸私了后发现9级伤残](https://s.weibo.com/weibo?q=%23%E5%87%BA%E8%BD%A6%E7%A5%B8%E7%A7%81%E4%BA%86%E5%90%8E%E5%8F%91%E7%8E%B09%E7%BA%A7%E4%BC%A4%E6%AE%8B%23) `143.2K 🔥` `NEW`
1. [英国曼彻斯特桥洞下惊现中国烧烤摊](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E6%9B%BC%E5%BD%BB%E6%96%AF%E7%89%B9%E6%A1%A5%E6%B4%9E%E4%B8%8B%E6%83%8A%E7%8E%B0%E4%B8%AD%E5%9B%BD%E7%83%A7%E7%83%A4%E6%91%8A%23) `141.0K 🔥` `NEW`
1. [管泽元 G2太猛了](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%20G2%E5%A4%AA%E7%8C%9B%E4%BA%86%23) `133.8K 🔥` `NEW`
1. [重庆大学实验室爆炸现场血迹明显](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%A4%A7%E5%AD%A6%E5%AE%9E%E9%AA%8C%E5%AE%A4%E7%88%86%E7%82%B8%E7%8E%B0%E5%9C%BA%E8%A1%80%E8%BF%B9%E6%98%8E%E6%98%BE%23) `127.5K 🔥` `NEW`
1. [李怀安向樊长玉负荆请罪 (Li Huaian pleads guilty to Fan Changyu)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%80%80%E5%AE%89%E5%90%91%E6%A8%8A%E9%95%BF%E7%8E%89%E8%B4%9F%E8%8D%86%E8%AF%B7%E7%BD%AA%23) `127.3K 🔥` `NEW`
1. [鹿晗 关晓彤](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E5%85%B3%E6%99%93%E5%BD%A4%23) `127.1K 🔥` `NEW`
1. [梅姨同居男友都看不到她的身份证](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%90%8C%E5%B1%85%E7%94%B7%E5%8F%8B%E9%83%BD%E7%9C%8B%E4%B8%8D%E5%88%B0%E5%A5%B9%E7%9A%84%E8%BA%AB%E4%BB%BD%E8%AF%81%23) `126.7K 🔥` `NEW`
1. [泄露逐玉可判刑10年](https://s.weibo.com/weibo?q=%23%E6%B3%84%E9%9C%B2%E9%80%90%E7%8E%89%E5%8F%AF%E5%88%A4%E5%88%9110%E5%B9%B4%23) `126.5K 🔥` `NEW`
1. [葛夕公布体检报告](https://s.weibo.com/weibo?q=%23%E8%91%9B%E5%A4%95%E5%85%AC%E5%B8%83%E4%BD%93%E6%A3%80%E6%8A%A5%E5%91%8A%23) `126.0K 🔥` `NEW`
1. [狼队战胜AG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E6%88%98%E8%83%9CAG%23) `125.8K 🔥` `NEW`
1. [逐玉 删戏份](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%88%A0%E6%88%8F%E4%BB%BD%23) `125.4K 🔥` `NEW`
1. [阿娇的邪修减肥法是刷牙](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A8%87%E7%9A%84%E9%82%AA%E4%BF%AE%E5%87%8F%E8%82%A5%E6%B3%95%E6%98%AF%E5%88%B7%E7%89%99%23) `125.1K 🔥` `NEW`
1. [狼队对战AG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98AG%23) `125.0K 🔥` `NEW`
1. [逐玉 青天大老爷](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E9%9D%92%E5%A4%A9%E5%A4%A7%E8%80%81%E7%88%B7%23) `124.7K 🔥` `NEW`
1. [曝迪丽热巴新经纪人入职嘉行 (It is revealed that Di Lieba’s new agent has joined Jiaxing)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%96%B0%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%85%A5%E8%81%8C%E5%98%89%E8%A1%8C%23) `124.4K 🔥` `NEW`
1. [高市访问埋葬广岛原子弹投弹手公墓](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E8%AE%BF%E9%97%AE%E5%9F%8B%E8%91%AC%E5%B9%BF%E5%B2%9B%E5%8E%9F%E5%AD%90%E5%BC%B9%E6%8A%95%E5%BC%B9%E6%89%8B%E5%85%AC%E5%A2%93%23) `124.2K 🔥` `NEW`
1. [上次泄露还是亲爱的热爱的](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%AC%A1%E6%B3%84%E9%9C%B2%E8%BF%98%E6%98%AF%E4%BA%B2%E7%88%B1%E7%9A%84%E7%83%AD%E7%88%B1%E7%9A%84%23) `124.2K 🔥` `NEW`
1. [梅姨平时说媒背地贩卖小孩](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%B9%B3%E6%97%B6%E8%AF%B4%E5%AA%92%E8%83%8C%E5%9C%B0%E8%B4%A9%E5%8D%96%E5%B0%8F%E5%AD%A9%23) `124.2K 🔥` `NEW`
1. [魏大勋给撒贝宁问不会了](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E7%BB%99%E6%92%92%E8%B4%9D%E5%AE%81%E9%97%AE%E4%B8%8D%E4%BC%9A%E4%BA%86%23) `124.1K 🔥` `NEW`
1. [曝梁小龙去世两个月没下葬将停棺10年](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%A2%81%E5%B0%8F%E9%BE%99%E5%8E%BB%E4%B8%96%E4%B8%A4%E4%B8%AA%E6%9C%88%E6%B2%A1%E4%B8%8B%E8%91%AC%E5%B0%86%E5%81%9C%E6%A3%BA10%E5%B9%B4%23) `124.1K 🔥` `NEW`
1. [美国内部吵成一锅粥](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%86%85%E9%83%A8%E5%90%B5%E6%88%90%E4%B8%80%E9%94%85%E7%B2%A5%23) `124.1K 🔥` `NEW`
1. [警方曾释放梅姨不存在的信号](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E6%9B%BE%E9%87%8A%E6%94%BE%E6%A2%85%E5%A7%A8%E4%B8%8D%E5%AD%98%E5%9C%A8%E7%9A%84%E4%BF%A1%E5%8F%B7%23) `124.0K 🔥` `NEW`
1. [何与看烟花](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8E%E7%9C%8B%E7%83%9F%E8%8A%B1%23) `124.0K 🔥` `NEW`
1. [李怀安樊长玉决裂](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%80%80%E5%AE%89%E6%A8%8A%E9%95%BF%E7%8E%89%E5%86%B3%E8%A3%82%23) `124.0K 🔥` `NEW`
1. [JDG战胜DYG (JDG defeated DYG)](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9CDYG%23) `123.9K 🔥` `NEW`
1. [伊朗手中握有真正的筹码](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%89%8B%E4%B8%AD%E6%8F%A1%E6%9C%89%E7%9C%9F%E6%AD%A3%E7%9A%84%E7%AD%B9%E7%A0%81%23) `123.9K 🔥` `NEW`
1. [11岁男孩脸肿竟是肿瘤骨头断了](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E7%94%B7%E5%AD%A9%E8%84%B8%E8%82%BF%E7%AB%9F%E6%98%AF%E8%82%BF%E7%98%A4%E9%AA%A8%E5%A4%B4%E6%96%AD%E4%BA%86%23) `123.9K 🔥` `NEW`
1. [邓凯又在孔雀凯屏](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E5%8F%88%E5%9C%A8%E5%AD%94%E9%9B%80%E5%87%AF%E5%B1%8F%23) `123.9K 🔥` `NEW`
1. [陈立农跳了张函瑞进行曲](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%AB%8B%E5%86%9C%E8%B7%B3%E4%BA%86%E5%BC%A0%E5%87%BD%E7%91%9E%E8%BF%9B%E8%A1%8C%E6%9B%B2%23) `123.8K 🔥` `NEW`
1. [梅姨曾与60多岁老人同居2年](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E6%9B%BE%E4%B8%8E60%E5%A4%9A%E5%B2%81%E8%80%81%E4%BA%BA%E5%90%8C%E5%B1%852%E5%B9%B4%23) `123.8K 🔥` `NEW`
1. [隐身的名字](https://s.weibo.com/weibo?q=%23%E9%9A%90%E8%BA%AB%E7%9A%84%E5%90%8D%E5%AD%97%23) `123.8K 🔥` `NEW`
1. [梅姨同居男友说她不戴首饰](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%90%8C%E5%B1%85%E7%94%B7%E5%8F%8B%E8%AF%B4%E5%A5%B9%E4%B8%8D%E6%88%B4%E9%A6%96%E9%A5%B0%23) `123.7K 🔥` `NEW`
1. [张元英GENIE完整版正面直拍](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1GENIE%E5%AE%8C%E6%95%B4%E7%89%88%E6%AD%A3%E9%9D%A2%E7%9B%B4%E6%8B%8D%23) `123.7K 🔥` `NEW`
1. [AG 轮换](https://s.weibo.com/weibo?q=%23AG%20%E8%BD%AE%E6%8D%A2%23) `123.7K 🔥` `NEW`
1. [张展硕400自金牌 (Zhang Zhanshuo 400 gold medal)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95400%E8%87%AA%E9%87%91%E7%89%8C%23) `123.6K 🔥` `NEW`

Updated at 2026-03-22 00:27:10

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
