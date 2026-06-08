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

1. [浪七暂停浪三强势回归 (Wave 7 pauses and wave 3 returns strongly)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E4%B8%83%E6%9A%82%E5%81%9C%E6%B5%AA%E4%B8%89%E5%BC%BA%E5%8A%BF%E5%9B%9E%E5%BD%92%23) `1.2M 🔥` `NEW`
1. [平壤各界群众和少年儿童身着节日盛装](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%A3%A4%E5%90%84%E7%95%8C%E7%BE%A4%E4%BC%97%E5%92%8C%E5%B0%91%E5%B9%B4%E5%84%BF%E7%AB%A5%E8%BA%AB%E7%9D%80%E8%8A%82%E6%97%A5%E7%9B%9B%E8%A3%85%23) `1.0M 🔥` `NEW`
1. [京东PLUS会员日 领超5000超级补贴](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9CPLUS%E4%BC%9A%E5%91%98%E6%97%A5%20%E9%A2%86%E8%B6%855000%E8%B6%85%E7%BA%A7%E8%A1%A5%E8%B4%B4%23) `1.0M 🔥` `NEW`
1. [张月方停止浪姐选歌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E6%96%B9%E5%81%9C%E6%AD%A2%E6%B5%AA%E5%A7%90%E9%80%89%E6%AD%8C%23) `1.0M 🔥` `NEW`
1. [字字不提醋字字都是醋](https://s.weibo.com/weibo?q=%23%E5%AD%97%E5%AD%97%E4%B8%8D%E6%8F%90%E9%86%8B%E5%AD%97%E5%AD%97%E9%83%BD%E6%98%AF%E9%86%8B%23) `995.3K 🔥` `NEW`
1. [跑男团全员包场白鹿莫离](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E5%9B%A2%E5%85%A8%E5%91%98%E5%8C%85%E5%9C%BA%E7%99%BD%E9%B9%BF%E8%8E%AB%E7%A6%BB%23) `894.8K 🔥` `NEW`
1. [微博智搜评论区万事皆可聊](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%99%BA%E6%90%9C%E8%AF%84%E8%AE%BA%E5%8C%BA%E4%B8%87%E4%BA%8B%E7%9A%86%E5%8F%AF%E8%81%8A%23) `879.5K 🔥` `NEW`
1. [南昌一辆小米SU7起火](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%98%8C%E4%B8%80%E8%BE%86%E5%B0%8F%E7%B1%B3SU7%E8%B5%B7%E7%81%AB%23) `638.8K 🔥` `NEW`
1. [为什么面试要填家庭成员信息](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9D%A2%E8%AF%95%E8%A6%81%E5%A1%AB%E5%AE%B6%E5%BA%AD%E6%88%90%E5%91%98%E4%BF%A1%E6%81%AF%23) `596.9K 🔥` `NEW`
1. [新能源小车卖不动了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E5%B0%8F%E8%BD%A6%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `596.3K 🔥` `NEW`
1. [郑钦文vs克里斯蒂安 (Zheng Qinwen vs Christian)](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E5%85%8B%E9%87%8C%E6%96%AF%E8%92%82%E5%AE%89%23) `584.7K 🔥` `NEW`
1. [前同事离职忘记删聊天记录](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%90%8C%E4%BA%8B%E7%A6%BB%E8%81%8C%E5%BF%98%E8%AE%B0%E5%88%A0%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `577.9K 🔥` `NEW`
1. [李小冉 张月](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E5%BC%A0%E6%9C%88%23) `571.7K 🔥` `NEW`
1. [王鹤棣包场白鹿莫离](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%8C%85%E5%9C%BA%E7%99%BD%E9%B9%BF%E8%8E%AB%E7%A6%BB%23) `561.7K 🔥` `NEW`
1. [浪姐选歌结果](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E9%80%89%E6%AD%8C%E7%BB%93%E6%9E%9C%23) `553.3K 🔥` `NEW`
1. [杨丽萍42岁依然这么美](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E4%B8%BD%E8%90%8D42%E5%B2%81%E4%BE%9D%E7%84%B6%E8%BF%99%E4%B9%88%E7%BE%8E%23) `542.7K 🔥` `NEW`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `511.3K 🔥` `NEW`
1. [曝浪姐节目组劝李小冉换歌](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B5%AA%E5%A7%90%E8%8A%82%E7%9B%AE%E7%BB%84%E5%8A%9D%E6%9D%8E%E5%B0%8F%E5%86%89%E6%8D%A2%E6%AD%8C%23) `503.3K 🔥` `NEW`
1. [窦骁打假罗伯特](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%AA%81%E6%89%93%E5%81%87%E7%BD%97%E4%BC%AF%E7%89%B9%23) `496.8K 🔥` `NEW`
1. [农村自建房的真实成本](https://s.weibo.com/weibo?q=%23%E5%86%9C%E6%9D%91%E8%87%AA%E5%BB%BA%E6%88%BF%E7%9A%84%E7%9C%9F%E5%AE%9E%E6%88%90%E6%9C%AC%23) `495.0K 🔥` `NEW`
1. [黄灿灿说曾沛慈的好有目共睹 (Huang Cancan said that Zeng Peici’s kindness is obvious to all.)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E8%AF%B4%E6%9B%BE%E6%B2%9B%E6%85%88%E7%9A%84%E5%A5%BD%E6%9C%89%E7%9B%AE%E5%85%B1%E7%9D%B9%23) `494.8K 🔥` `NEW`
1. [千万别和年纪大的导师开玩笑](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E5%88%AB%E5%92%8C%E5%B9%B4%E7%BA%AA%E5%A4%A7%E7%9A%84%E5%AF%BC%E5%B8%88%E5%BC%80%E7%8E%A9%E7%AC%91%23) `489.5K 🔥` `NEW`
1. [男子93万存折被指系银行员工伪造](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9093%E4%B8%87%E5%AD%98%E6%8A%98%E8%A2%AB%E6%8C%87%E7%B3%BB%E9%93%B6%E8%A1%8C%E5%91%98%E5%B7%A5%E4%BC%AA%E9%80%A0%23) `486.8K 🔥` `NEW`
1. [人一旦有了电动车就定型了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E6%9C%89%E4%BA%86%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%B0%B1%E5%AE%9A%E5%9E%8B%E4%BA%86%23) `485.2K 🔥` `NEW`
1. [内娱流量时代迎来了真正的洗牌](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%B5%81%E9%87%8F%E6%97%B6%E4%BB%A3%E8%BF%8E%E6%9D%A5%E4%BA%86%E7%9C%9F%E6%AD%A3%E7%9A%84%E6%B4%97%E7%89%8C%23) `344.2K 🔥` `NEW`
1. [曾沛慈想要曾沛慈得到](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E6%83%B3%E8%A6%81%E6%9B%BE%E6%B2%9B%E6%85%88%E5%BE%97%E5%88%B0%23) `339.8K 🔥` `NEW`
1. [朝鲜欢迎最尊重的贵宾](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E6%AC%A2%E8%BF%8E%E6%9C%80%E5%B0%8A%E9%87%8D%E7%9A%84%E8%B4%B5%E5%AE%BE%23) `296.9K 🔥` `NEW`
1. [张慧雯凌晨五点多收到姐姐们的安慰信息](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E5%87%8C%E6%99%A8%E4%BA%94%E7%82%B9%E5%A4%9A%E6%94%B6%E5%88%B0%E5%A7%90%E5%A7%90%E4%BB%AC%E7%9A%84%E5%AE%89%E6%85%B0%E4%BF%A1%E6%81%AF%23) `280.3K 🔥` `NEW`
1. [Jennie这个舞台疯子](https://s.weibo.com/weibo?q=%23Jennie%E8%BF%99%E4%B8%AA%E8%88%9E%E5%8F%B0%E7%96%AF%E5%AD%90%23) `279.8K 🔥` `NEW`
1. [史上最贵的吻](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E6%9C%80%E8%B4%B5%E7%9A%84%E5%90%BB%23) `253.0K 🔥` `NEW`
1. [特努斯时代苹果往哪走 (Where will Apple go in the era of Ternus?)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E5%8A%AA%E6%96%AF%E6%97%B6%E4%BB%A3%E8%8B%B9%E6%9E%9C%E5%BE%80%E5%93%AA%E8%B5%B0%23) `243.6K 🔥` `NEW`
1. [孙红雷在埃菲尔铁塔下很想龚俊](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E5%9C%A8%E5%9F%83%E8%8F%B2%E5%B0%94%E9%93%81%E5%A1%94%E4%B8%8B%E5%BE%88%E6%83%B3%E9%BE%9A%E4%BF%8A%23) `220.6K 🔥` `NEW`
1. [华北第一高楼烂尾十年后重启](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%8C%97%E7%AC%AC%E4%B8%80%E9%AB%98%E6%A5%BC%E7%83%82%E5%B0%BE%E5%8D%81%E5%B9%B4%E5%90%8E%E9%87%8D%E5%90%AF%23) `215.1K 🔥` `NEW`
1. [长子病逝近6旬大爷陪幼子高考](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%AD%90%E7%97%85%E9%80%9D%E8%BF%916%E6%97%AC%E5%A4%A7%E7%88%B7%E9%99%AA%E5%B9%BC%E5%AD%90%E9%AB%98%E8%80%83%23) `214.2K 🔥` `NEW`
1. [霍思燕半夜起床为小狗美容](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E6%80%9D%E7%87%95%E5%8D%8A%E5%A4%9C%E8%B5%B7%E5%BA%8A%E4%B8%BA%E5%B0%8F%E7%8B%97%E7%BE%8E%E5%AE%B9%23) `206.1K 🔥` `NEW`
1. [买房人五年追讨31万退房款无果](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E6%88%BF%E4%BA%BA%E4%BA%94%E5%B9%B4%E8%BF%BD%E8%AE%A831%E4%B8%87%E9%80%80%E6%88%BF%E6%AC%BE%E6%97%A0%E6%9E%9C%23) `188.0K 🔥` `NEW`
1. [A股巨震的原因找到了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B7%A8%E9%9C%87%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `171.2K 🔥` `NEW`
1. [女刑警向15人赊购700万烟茶酒诈骗](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%88%91%E8%AD%A6%E5%90%9115%E4%BA%BA%E8%B5%8A%E8%B4%AD700%E4%B8%87%E7%83%9F%E8%8C%B6%E9%85%92%E8%AF%88%E9%AA%97%23) `149.1K 🔥` `NEW`
1. [bin秀肌肉](https://s.weibo.com/weibo?q=%23bin%E7%A7%80%E8%82%8C%E8%82%89%23) `147.7K 🔥` `NEW`
1. [AL无缘MSI](https://s.weibo.com/weibo?q=%23AL%E6%97%A0%E7%BC%98MSI%23) `146.2K 🔥` `NEW`
1. [张真源云包场莫离 (Zhang Zhenyuan's private tour is reserved for Mo Li)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E4%BA%91%E5%8C%85%E5%9C%BA%E8%8E%AB%E7%A6%BB%23) `145.6K 🔥` `NEW`
1. [高考日语](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%97%A5%E8%AF%AD%23) `143.2K 🔥` `NEW`
1. [AL被做局了](https://s.weibo.com/weibo?q=%23AL%E8%A2%AB%E5%81%9A%E5%B1%80%E4%BA%86%23) `142.1K 🔥` `NEW`
1. [刘浩存主角收官发文](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E4%B8%BB%E8%A7%92%E6%94%B6%E5%AE%98%E5%8F%91%E6%96%87%23) `141.9K 🔥` `NEW`
1. [高考作文 给阿嬷的情书](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%20%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `1.6M 🔥`
1. [高考英语 (College Entrance Examination English)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E8%8B%B1%E8%AF%AD%23) `559.5K 🔥` `-94%`
1. [存子生图眼睛比精修大](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%AD%90%E7%94%9F%E5%9B%BE%E7%9C%BC%E7%9D%9B%E6%AF%94%E7%B2%BE%E4%BF%AE%E5%A4%A7%23) `242.4K 🔥` `-48%`
1. [养了蝾螈才知道自己有多歹毒](https://s.weibo.com/weibo?q=%23%E5%85%BB%E4%BA%86%E8%9D%BE%E8%9E%88%E6%89%8D%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E6%9C%89%E5%A4%9A%E6%AD%B9%E6%AF%92%23) `240.7K 🔥` `-51%`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `227.8K 🔥` `-46%`
1. [陕西致62人死亡失踪高速桥梁垮塌细节](https://s.weibo.com/weibo?q=%23%E9%99%95%E8%A5%BF%E8%87%B462%E4%BA%BA%E6%AD%BB%E4%BA%A1%E5%A4%B1%E8%B8%AA%E9%AB%98%E9%80%9F%E6%A1%A5%E6%A2%81%E5%9E%AE%E5%A1%8C%E7%BB%86%E8%8A%82%23) `210.6K 🔥` `-86%`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `187.9K 🔥` `-62%`
1. [不要把照片视频存到U盘 (Do not save photos and videos to USB flash drive)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E6%8A%8A%E7%85%A7%E7%89%87%E8%A7%86%E9%A2%91%E5%AD%98%E5%88%B0U%E7%9B%98%23) `141.9K 🔥` `-69%`

Updated at 2026-06-08 21:49:43

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
