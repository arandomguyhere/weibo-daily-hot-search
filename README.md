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

1. [马化腾说没想到养龙虾这么火 (Ma Huateng said he didn’t expect lobster farming to be so popular)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%8C%96%E8%85%BE%E8%AF%B4%E6%B2%A1%E6%83%B3%E5%88%B0%E5%85%BB%E9%BE%99%E8%99%BE%E8%BF%99%E4%B9%88%E7%81%AB%23) `565.2K 🔥` `NEW`
1. [台湾绝无可能成为国家](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E7%BB%9D%E6%97%A0%E5%8F%AF%E8%83%BD%E6%88%90%E4%B8%BA%E5%9B%BD%E5%AE%B6%23) `400.0K 🔥` `NEW`
1. [千问AI眼镜现货开售](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AEAI%E7%9C%BC%E9%95%9C%E7%8E%B0%E8%B4%A7%E5%BC%80%E5%94%AE%23) `386.8K 🔥` `NEW`
1. [多方回应深圳公务员组团养政务龙虾](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E6%B7%B1%E5%9C%B3%E5%85%AC%E5%8A%A1%E5%91%98%E7%BB%84%E5%9B%A2%E5%85%BB%E6%94%BF%E5%8A%A1%E9%BE%99%E8%99%BE%23) `360.8K 🔥` `NEW`
1. [中国绝不走国强必霸的老路](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BB%9D%E4%B8%8D%E8%B5%B0%E5%9B%BD%E5%BC%BA%E5%BF%85%E9%9C%B8%E7%9A%84%E8%80%81%E8%B7%AF%23) `347.4K 🔥` `NEW`
1. [迪拜黄金打折售卖](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E9%BB%84%E9%87%91%E6%89%93%E6%8A%98%E5%94%AE%E5%8D%96%23) `344.2K 🔥` `NEW`
1. [华春莹一口气吃了两颗化橘红](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%98%A5%E8%8E%B9%E4%B8%80%E5%8F%A3%E6%B0%94%E5%90%83%E4%BA%86%E4%B8%A4%E9%A2%97%E5%8C%96%E6%A9%98%E7%BA%A2%23) `304.1K 🔥` `NEW`
1. [汪苏泷纽约上座率](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E7%BA%BD%E7%BA%A6%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `285.1K 🔥` `NEW`
1. [云南蓝莓](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E8%93%9D%E8%8E%93%23) `253.0K 🔥` `NEW`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `183.5K 🔥` `NEW`
1. [全微博开抢百变之光 (All on Weibo to grab the ever-changing light)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%BE%AE%E5%8D%9A%E5%BC%80%E6%8A%A2%E7%99%BE%E5%8F%98%E4%B9%8B%E5%85%89%23) `156.6K 🔥` `NEW`
1. [JackeyLove回应输给越南](https://s.weibo.com/weibo?q=%23JackeyLove%E5%9B%9E%E5%BA%94%E8%BE%93%E7%BB%99%E8%B6%8A%E5%8D%97%23) `141.5K 🔥` `NEW`
1. [霍去病导演澄清3000元制作80集](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%8E%BB%E7%97%85%E5%AF%BC%E6%BC%94%E6%BE%84%E6%B8%853000%E5%85%83%E5%88%B6%E4%BD%9C80%E9%9B%86%23) `141.5K 🔥` `NEW`
1. [装龙虾生意引爆全球](https://s.weibo.com/weibo?q=%23%E8%A3%85%E9%BE%99%E8%99%BE%E7%94%9F%E6%84%8F%E5%BC%95%E7%88%86%E5%85%A8%E7%90%83%23) `141.4K 🔥` `NEW`
1. [狗 我就是咪咪啊](https://s.weibo.com/weibo?q=%23%E7%8B%97%20%E6%88%91%E5%B0%B1%E6%98%AF%E5%92%AA%E5%92%AA%E5%95%8A%23) `141.3K 🔥` `NEW`
1. [最近爆火的AI龙虾是什么](https://s.weibo.com/weibo?q=%23%E6%9C%80%E8%BF%91%E7%88%86%E7%81%AB%E7%9A%84AI%E9%BE%99%E8%99%BE%E6%98%AF%E4%BB%80%E4%B9%88%23) `141.2K 🔥` `NEW`
1. [景区乞丐npc遭到游客疯狂投喂](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%8C%BA%E4%B9%9E%E4%B8%90npc%E9%81%AD%E5%88%B0%E6%B8%B8%E5%AE%A2%E7%96%AF%E7%8B%82%E6%8A%95%E5%96%82%23) `140.9K 🔥` `NEW`
1. [林噙霜你的周娘子跟大娘子跑了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%99%99%E9%9C%9C%E4%BD%A0%E7%9A%84%E5%91%A8%E5%A8%98%E5%AD%90%E8%B7%9F%E5%A4%A7%E5%A8%98%E5%AD%90%E8%B7%91%E4%BA%86%23) `140.9K 🔥` `NEW`
1. [F1正赛](https://s.weibo.com/weibo?q=%23F1%E6%AD%A3%E8%B5%9B%23) `140.8K 🔥` `NEW`
1. [法拉利 策略](https://s.weibo.com/weibo?q=%23%E6%B3%95%E6%8B%89%E5%88%A9%20%E7%AD%96%E7%95%A5%23) `140.7K 🔥` `NEW`
1. [库里说天天想吃中国的火锅小龙虾 (Curry says he wants to eat Chinese hot pot crayfish every day)](https://s.weibo.com/weibo?q=%23%E5%BA%93%E9%87%8C%E8%AF%B4%E5%A4%A9%E5%A4%A9%E6%83%B3%E5%90%83%E4%B8%AD%E5%9B%BD%E7%9A%84%E7%81%AB%E9%94%85%E5%B0%8F%E9%BE%99%E8%99%BE%23) `140.6K 🔥` `NEW`
1. [谷爱凌和妈妈一起出席活动](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%92%8C%E5%A6%88%E5%A6%88%E4%B8%80%E8%B5%B7%E5%87%BA%E5%B8%AD%E6%B4%BB%E5%8A%A8%23) `140.6K 🔥` `NEW`
1. [侧颜天菜妆容](https://s.weibo.com/weibo?q=%23%E4%BE%A7%E9%A2%9C%E5%A4%A9%E8%8F%9C%E5%A6%86%E5%AE%B9%23) `140.4K 🔥` `NEW`
1. [孙颖莎出镜央视妇女节短片](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%87%BA%E9%95%9C%E5%A4%AE%E8%A7%86%E5%A6%87%E5%A5%B3%E8%8A%82%E7%9F%AD%E7%89%87%23) `140.3K 🔥` `NEW`
1. [这是我给妈妈报的网课](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E6%88%91%E7%BB%99%E5%A6%88%E5%A6%88%E6%8A%A5%E7%9A%84%E7%BD%91%E8%AF%BE%23) `140.2K 🔥` `NEW`
1. [世界乱象丛生祖国稳如泰山](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B9%B1%E8%B1%A1%E4%B8%9B%E7%94%9F%E7%A5%96%E5%9B%BD%E7%A8%B3%E5%A6%82%E6%B3%B0%E5%B1%B1%23) `764.2K 🔥` `+260%`
1. [王毅谈伊朗局势](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E8%B0%88%E4%BC%8A%E6%9C%97%E5%B1%80%E5%8A%BF%23) `469.3K 🔥` `+470%`
1. [未来5年这些民生举措事关你我](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A55%E5%B9%B4%E8%BF%99%E4%BA%9B%E6%B0%91%E7%94%9F%E4%B8%BE%E6%8E%AA%E4%BA%8B%E5%85%B3%E4%BD%A0%E6%88%91%23) `354.8K 🔥` `+68%`
1. [日本没资格插手台湾事务](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B2%A1%E8%B5%84%E6%A0%BC%E6%8F%92%E6%89%8B%E5%8F%B0%E6%B9%BE%E4%BA%8B%E5%8A%A1%23) `352.0K 🔥` `+67%`
1. [快递送花也开始卷仪式感了](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E9%80%92%E9%80%81%E8%8A%B1%E4%B9%9F%E5%BC%80%E5%A7%8B%E5%8D%B7%E4%BB%AA%E5%BC%8F%E6%84%9F%E4%BA%86%23) `141.2K 🔥` `+71%`
1. [伊朗称以色列试图构建人盾 (Iran says Israel is trying to build human shield)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E4%BB%A5%E8%89%B2%E5%88%97%E8%AF%95%E5%9B%BE%E6%9E%84%E5%BB%BA%E4%BA%BA%E7%9B%BE%23) `141.1K 🔥` `+21%`
1. [卢昱晓跳Zoo (Lu Yuxiao dances Zoo)](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E8%B7%B3Zoo%23) `141.0K 🔥` `+41%`
1. [杨超越陈飞宇G社生图](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E9%99%88%E9%A3%9E%E5%AE%87G%E7%A4%BE%E7%94%9F%E5%9B%BE%23) `140.5K 🔥` `+64%`
1. [伊朗大规模无人机攻击美以](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%97%A0%E4%BA%BA%E6%9C%BA%E6%94%BB%E5%87%BB%E7%BE%8E%E4%BB%A5%23) `140.4K 🔥` `+55%`
1. [粉笔模考](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E6%A8%A1%E8%80%83%23) `140.3K 🔥` `+50%`
1. [外交部长王毅答记者问 (Foreign Minister Wang Yi answers reporters’ questions)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E9%95%BF%E7%8E%8B%E6%AF%85%E7%AD%94%E8%AE%B0%E8%80%85%E9%97%AE%23) `1.0M 🔥`
1. [奋进十五五AI超燃大片](https://s.weibo.com/weibo?q=%23%E5%A5%8B%E8%BF%9B%E5%8D%81%E4%BA%94%E4%BA%94AI%E8%B6%85%E7%87%83%E5%A4%A7%E7%89%87%23) `596.7K 🔥`
1. [妇女节快乐](https://s.weibo.com/weibo?q=%23%E5%A6%87%E5%A5%B3%E8%8A%82%E5%BF%AB%E4%B9%90%23) `178.7K 🔥`
1. [网友上门安装小龙虾几天赚26万](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E4%B8%8A%E9%97%A8%E5%AE%89%E8%A3%85%E5%B0%8F%E9%BE%99%E8%99%BE%E5%87%A0%E5%A4%A9%E8%B5%9A26%E4%B8%87%23) `142.0K 🔥`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `141.9K 🔥`
1. [黄子韬曾经是张艺凡导师](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%9B%BE%E7%BB%8F%E6%98%AF%E5%BC%A0%E8%89%BA%E5%87%A1%E5%AF%BC%E5%B8%88%23) `141.8K 🔥`
1. [王楚然仿妆还以为本尊来了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%BB%BF%E5%A6%86%E8%BF%98%E4%BB%A5%E4%B8%BA%E6%9C%AC%E5%B0%8A%E6%9D%A5%E4%BA%86%23) `141.6K 🔥`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `141.4K 🔥`
1. [170斤女孩穿旗袍跳舞自信到发光 (A 170-pound girl dances with confidence in a cheongsam and shines)](https://s.weibo.com/weibo?q=%23170%E6%96%A4%E5%A5%B3%E5%AD%A9%E7%A9%BF%E6%97%97%E8%A2%8D%E8%B7%B3%E8%88%9E%E8%87%AA%E4%BF%A1%E5%88%B0%E5%8F%91%E5%85%89%23) `140.7K 🔥`
1. [妇女节 (women's day)](https://s.weibo.com/weibo?q=%23%E5%A6%87%E5%A5%B3%E8%8A%82%23) `361.1K 🔥` `-28%`
1. [AI龙虾爆火有人几天赚了26万](https://s.weibo.com/weibo?q=%23AI%E9%BE%99%E8%99%BE%E7%88%86%E7%81%AB%E6%9C%89%E4%BA%BA%E5%87%A0%E5%A4%A9%E8%B5%9A%E4%BA%8626%E4%B8%87%23) `350.1K 🔥` `-52%`
1. [养龙虾为什么爆火](https://s.weibo.com/weibo?q=%23%E5%85%BB%E9%BE%99%E8%99%BE%E4%B8%BA%E4%BB%80%E4%B9%88%E7%88%86%E7%81%AB%23) `142.2K 🔥` `-47%`
1. [张凌赫田曦薇下意识的牵手 (Zhang Linghe and Tian Xiwei subconsciously held hands)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E4%B8%8B%E6%84%8F%E8%AF%86%E7%9A%84%E7%89%B5%E6%89%8B%23) `142.1K 🔥` `-32%`
1. [低食量女生的一顿饭](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E9%A3%9F%E9%87%8F%E5%A5%B3%E7%94%9F%E7%9A%84%E4%B8%80%E9%A1%BF%E9%A5%AD%23) `141.7K 🔥` `-32%`
1. [玉兰花开君再来](https://s.weibo.com/weibo?q=%23%E7%8E%89%E5%85%B0%E8%8A%B1%E5%BC%80%E5%90%9B%E5%86%8D%E6%9D%A5%23) `141.7K 🔥` `-50%`
1. [硬糖少女偷偶像练习生的鱼](https://s.weibo.com/weibo?q=%23%E7%A1%AC%E7%B3%96%E5%B0%91%E5%A5%B3%E5%81%B7%E5%81%B6%E5%83%8F%E7%BB%83%E4%B9%A0%E7%94%9F%E7%9A%84%E9%B1%BC%23) `141.0K 🔥` `-30%`

Updated at 2026-03-08 13:02:17

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
