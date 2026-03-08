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

1. [网络名人赞两会 (Internet celebrities praise the Two Conferences)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BB%9C%E5%90%8D%E4%BA%BA%E8%B5%9E%E4%B8%A4%E4%BC%9A%23) `608.0K 🔥` `NEW`
1. [GW对战Gr](https://s.weibo.com/weibo?q=%23GW%E5%AF%B9%E6%88%98Gr%23) `217.7K 🔥` `NEW`
1. [郑州网民编造孩子丢失谣言被处罚](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%B7%9E%E7%BD%91%E6%B0%91%E7%BC%96%E9%80%A0%E5%AD%A9%E5%AD%90%E4%B8%A2%E5%A4%B1%E8%B0%A3%E8%A8%80%E8%A2%AB%E5%A4%84%E7%BD%9A%23) `207.7K 🔥` `NEW`
1. [伊朗选出新最高领袖](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%80%89%E5%87%BA%E6%96%B0%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%23) `207.4K 🔥` `NEW`
1. [妇女节红包](https://s.weibo.com/weibo?q=%23%E5%A6%87%E5%A5%B3%E8%8A%82%E7%BA%A2%E5%8C%85%23) `207.3K 🔥` `NEW`
1. [妇女节 卫生巾半价](https://s.weibo.com/weibo?q=%23%E5%A6%87%E5%A5%B3%E8%8A%82%20%E5%8D%AB%E7%94%9F%E5%B7%BE%E5%8D%8A%E4%BB%B7%23) `207.2K 🔥` `NEW`
1. [年轻人为何排队疯抢AI龙虾](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%BA%E4%BD%95%E6%8E%92%E9%98%9F%E7%96%AF%E6%8A%A2AI%E9%BE%99%E8%99%BE%23) `207.1K 🔥` `NEW`
1. [没有任何一个决定会毁了你的一生](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E4%BB%BB%E4%BD%95%E4%B8%80%E4%B8%AA%E5%86%B3%E5%AE%9A%E4%BC%9A%E6%AF%81%E4%BA%86%E4%BD%A0%E7%9A%84%E4%B8%80%E7%94%9F%23) `207.1K 🔥` `NEW`
1. [逐玉毛林林张凌赫好权威的母子](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%AF%9B%E6%9E%97%E6%9E%97%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A5%BD%E6%9D%83%E5%A8%81%E7%9A%84%E6%AF%8D%E5%AD%90%23) `207.0K 🔥` `NEW`
1. [建议给大龄农民工提供培训就业](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%BB%99%E5%A4%A7%E9%BE%84%E5%86%9C%E6%B0%91%E5%B7%A5%E6%8F%90%E4%BE%9B%E5%9F%B9%E8%AE%AD%E5%B0%B1%E4%B8%9A%23) `206.5K 🔥` `NEW`
1. [马来西亚通报MH370搜寻最新进展 (Malaysia reports latest progress in search for MH370)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E9%80%9A%E6%8A%A5MH370%E6%90%9C%E5%AF%BB%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `206.1K 🔥` `NEW`
1. [霍去病团队近20人非3人](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%8E%BB%E7%97%85%E5%9B%A2%E9%98%9F%E8%BF%9120%E4%BA%BA%E9%9D%9E3%E4%BA%BA%23) `206.0K 🔥` `NEW`
1. [伊朗重申睦邻友好尊重地区国家主权](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%87%8D%E7%94%B3%E7%9D%A6%E9%82%BB%E5%8F%8B%E5%A5%BD%E5%B0%8A%E9%87%8D%E5%9C%B0%E5%8C%BA%E5%9B%BD%E5%AE%B6%E4%B8%BB%E6%9D%83%23) `205.9K 🔥` `NEW`
1. [汪苏泷英文水平](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E8%8B%B1%E6%96%87%E6%B0%B4%E5%B9%B3%23) `205.9K 🔥` `NEW`
1. [郑钦文回应一轮游](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%9B%9E%E5%BA%94%E4%B8%80%E8%BD%AE%E6%B8%B8%23) `205.7K 🔥` `NEW`
1. [岳雨婷看秀待遇](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E9%9B%A8%E5%A9%B7%E7%9C%8B%E7%A7%80%E5%BE%85%E9%81%87%23) `205.5K 🔥` `NEW`
1. [两会](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BC%9A%23) `205.4K 🔥` `NEW`
1. [工信部提醒防范AI龙虾安全风险](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BF%A1%E9%83%A8%E6%8F%90%E9%86%92%E9%98%B2%E8%8C%83AI%E9%BE%99%E8%99%BE%E5%AE%89%E5%85%A8%E9%A3%8E%E9%99%A9%23) `205.3K 🔥` `NEW`
1. [9岁小球员送王楚钦重庆拼图](https://s.weibo.com/weibo?q=%239%E5%B2%81%E5%B0%8F%E7%90%83%E5%91%98%E9%80%81%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%87%8D%E5%BA%86%E6%8B%BC%E5%9B%BE%23) `205.3K 🔥` `NEW`
1. [伊朗未透露新最高领袖姓名](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%AA%E9%80%8F%E9%9C%B2%E6%96%B0%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%A7%93%E5%90%8D%23) `205.2K 🔥` `NEW`
1. [妇女节 (women's day)](https://s.weibo.com/weibo?q=%23%E5%A6%87%E5%A5%B3%E8%8A%82%23) `725.6K 🔥` `+225%`
1. [外交部长王毅答记者问 (Foreign Minister Wang Yi answers reporters’ questions)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E9%95%BF%E7%8E%8B%E6%AF%85%E7%AD%94%E8%AE%B0%E8%80%85%E9%97%AE%23) `1.0M 🔥`
1. [姐妹们用千问AI下单快乐过节 (Sisters use Qianwen AI to place orders and have a happy holiday)](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A6%B9%E4%BB%AC%E7%94%A8%E5%8D%83%E9%97%AEAI%E4%B8%8B%E5%8D%95%E5%BF%AB%E4%B9%90%E8%BF%87%E8%8A%82%23) `537.7K 🔥`
1. [王毅谈伊朗局势 (Wang Yi talks about the situation in Iran)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E8%B0%88%E4%BC%8A%E6%9C%97%E5%B1%80%E5%8A%BF%23) `211.2K 🔥`
1. [华春莹一口气吃了两颗化橘红 (Hua Chunying ate two orange-red pills in one breath)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%98%A5%E8%8E%B9%E4%B8%80%E5%8F%A3%E6%B0%94%E5%90%83%E4%BA%86%E4%B8%A4%E9%A2%97%E5%8C%96%E6%A9%98%E7%BA%A2%23) `207.7K 🔥`
1. [台湾绝无可能成为国家](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E7%BB%9D%E6%97%A0%E5%8F%AF%E8%83%BD%E6%88%90%E4%B8%BA%E5%9B%BD%E5%AE%B6%23) `207.7K 🔥`
1. [霍去病导演澄清3000元制作80集](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%8E%BB%E7%97%85%E5%AF%BC%E6%BC%94%E6%BE%84%E6%B8%853000%E5%85%83%E5%88%B6%E4%BD%9C80%E9%9B%86%23) `207.6K 🔥`
1. [未来5年这些民生举措事关你我](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A55%E5%B9%B4%E8%BF%99%E4%BA%9B%E6%B0%91%E7%94%9F%E4%B8%BE%E6%8E%AA%E4%BA%8B%E5%85%B3%E4%BD%A0%E6%88%91%23) `207.6K 🔥`
1. [安装OpenClaw价格](https://s.weibo.com/weibo?q=%23%E5%AE%89%E8%A3%85OpenClaw%E4%BB%B7%E6%A0%BC%23) `207.5K 🔥`
1. [张凯丽 网红能当一辈子吗](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%AF%E4%B8%BD%20%E7%BD%91%E7%BA%A2%E8%83%BD%E5%BD%93%E4%B8%80%E8%BE%88%E5%AD%90%E5%90%97%23) `207.4K 🔥`
1. [女孩患癌复查结果不好妈妈骗她及格了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%82%A3%E7%99%8C%E5%A4%8D%E6%9F%A5%E7%BB%93%E6%9E%9C%E4%B8%8D%E5%A5%BD%E5%A6%88%E5%A6%88%E9%AA%97%E5%A5%B9%E5%8F%8A%E6%A0%BC%E4%BA%86%23) `207.2K 🔥`
1. [狗 我就是咪咪啊](https://s.weibo.com/weibo?q=%23%E7%8B%97%20%E6%88%91%E5%B0%B1%E6%98%AF%E5%92%AA%E5%92%AA%E5%95%8A%23) `207.0K 🔥`
1. [名侦探学院](https://s.weibo.com/weibo?q=%23%E5%90%8D%E4%BE%A6%E6%8E%A2%E5%AD%A6%E9%99%A2%23) `206.9K 🔥`
1. [伊朗亮底线](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BA%AE%E5%BA%95%E7%BA%BF%23) `206.9K 🔥`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `206.8K 🔥`
1. [杨紫左手牵娃右手抱娃 (Yang Zi holds the baby with her left hand and hugs the baby with her right hand)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%B7%A6%E6%89%8B%E7%89%B5%E5%A8%83%E5%8F%B3%E6%89%8B%E6%8A%B1%E5%A8%83%23) `206.8K 🔥`
1. [AI龙虾到底能干什么](https://s.weibo.com/weibo?q=%23AI%E9%BE%99%E8%99%BE%E5%88%B0%E5%BA%95%E8%83%BD%E5%B9%B2%E4%BB%80%E4%B9%88%23) `206.7K 🔥`
1. [张凌赫田曦薇下意识的牵手 (Zhang Linghe and Tian Xiwei subconsciously held hands)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E4%B8%8B%E6%84%8F%E8%AF%86%E7%9A%84%E7%89%B5%E6%89%8B%23) `206.6K 🔥`
1. [惠英红 是妇女节快乐](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%20%E6%98%AF%E5%A6%87%E5%A5%B3%E8%8A%82%E5%BF%AB%E4%B9%90%23) `206.5K 🔥`
1. [70岁网瘾老人刷手机近视2300度 (A 70-year-old Internet addict suffers from 2,300-degree myopia while using his mobile phone)](https://s.weibo.com/weibo?q=%2370%E5%B2%81%E7%BD%91%E7%98%BE%E8%80%81%E4%BA%BA%E5%88%B7%E6%89%8B%E6%9C%BA%E8%BF%91%E8%A7%862300%E5%BA%A6%23) `206.5K 🔥`
1. [迪拜黄金打折售卖](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E9%BB%84%E9%87%91%E6%89%93%E6%8A%98%E5%94%AE%E5%8D%96%23) `206.4K 🔥`
1. [嘻哈 我感谢那些女士](https://s.weibo.com/weibo?q=%23%E5%98%BB%E5%93%88%20%E6%88%91%E6%84%9F%E8%B0%A2%E9%82%A3%E4%BA%9B%E5%A5%B3%E5%A3%AB%23) `206.3K 🔥`
1. [云南蓝莓](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E8%93%9D%E8%8E%93%23) `206.3K 🔥`
1. [妇女节快乐](https://s.weibo.com/weibo?q=%23%E5%A6%87%E5%A5%B3%E8%8A%82%E5%BF%AB%E4%B9%90%23) `206.2K 🔥`
1. [汪苏泷纽约上座率](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E7%BA%BD%E7%BA%A6%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `206.2K 🔥`
1. [为了哄老己上班有多舍得花钱](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BA%86%E5%93%84%E8%80%81%E5%B7%B1%E4%B8%8A%E7%8F%AD%E6%9C%89%E5%A4%9A%E8%88%8D%E5%BE%97%E8%8A%B1%E9%92%B1%23) `206.1K 🔥`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `205.8K 🔥`
1. [硬糖少女偷偶像练习生的鱼 (Hard candy girl steals idol trainee’s fish)](https://s.weibo.com/weibo?q=%23%E7%A1%AC%E7%B3%96%E5%B0%91%E5%A5%B3%E5%81%B7%E5%81%B6%E5%83%8F%E7%BB%83%E4%B9%A0%E7%94%9F%E7%9A%84%E9%B1%BC%23) `205.8K 🔥`
1. [建议减少中小学学科数量](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%87%8F%E5%B0%91%E4%B8%AD%E5%B0%8F%E5%AD%A6%E5%AD%A6%E7%A7%91%E6%95%B0%E9%87%8F%23) `205.6K 🔥`
1. [谷爱凌花车巡游](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%8A%B1%E8%BD%A6%E5%B7%A1%E6%B8%B8%23) `205.5K 🔥`
1. [白鹿张艺凡内娱最爱笑的俩聚一起了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BC%A0%E8%89%BA%E5%87%A1%E5%86%85%E5%A8%B1%E6%9C%80%E7%88%B1%E7%AC%91%E7%9A%84%E4%BF%A9%E8%81%9A%E4%B8%80%E8%B5%B7%E4%BA%86%23) `205.3K 🔥`
1. [世界乱象丛生祖国稳如泰山](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B9%B1%E8%B1%A1%E4%B8%9B%E7%94%9F%E7%A5%96%E5%9B%BD%E7%A8%B3%E5%A6%82%E6%B3%B0%E5%B1%B1%23) `205.6K 🔥` `-73%`

Updated at 2026-03-08 15:21:19

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
