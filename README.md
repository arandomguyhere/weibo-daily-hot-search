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

1. [李昌钰曾说章莹颖尸体能找到 (Li Changyu once said that Zhang Yingying’s body can be found)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E6%9B%BE%E8%AF%B4%E7%AB%A0%E8%8E%B9%E9%A2%96%E5%B0%B8%E4%BD%93%E8%83%BD%E6%89%BE%E5%88%B0%23) `1.1M 🔥` `NEW`
1. [白日提灯播出反馈](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E6%92%AD%E5%87%BA%E5%8F%8D%E9%A6%88%23) `820.8K 🔥` `NEW`
1. [事业编](https://s.weibo.com/weibo?q=%23%E4%BA%8B%E4%B8%9A%E7%BC%96%23) `302.7K 🔥` `NEW`
1. [造谣查获稀土走私大案被立案调查](https://s.weibo.com/weibo?q=%23%E9%80%A0%E8%B0%A3%E6%9F%A5%E8%8E%B7%E7%A8%80%E5%9C%9F%E8%B5%B0%E7%A7%81%E5%A4%A7%E6%A1%88%E8%A2%AB%E7%AB%8B%E6%A1%88%E8%B0%83%E6%9F%A5%23) `288.8K 🔥` `NEW`
1. [白日提灯开播](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E5%BC%80%E6%92%AD%23) `282.8K 🔥` `NEW`
1. [李昌钰选用自然疗法平静面对死亡](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E9%80%89%E7%94%A8%E8%87%AA%E7%84%B6%E7%96%97%E6%B3%95%E5%B9%B3%E9%9D%99%E9%9D%A2%E5%AF%B9%E6%AD%BB%E4%BA%A1%23) `271.9K 🔥` `NEW`
1. [特朗普称必须尊重中国](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%BF%85%E9%A1%BB%E5%B0%8A%E9%87%8D%E4%B8%AD%E5%9B%BD%23) `270.2K 🔥` `NEW`
1. [这届年轻人办婚礼已经有小孩桌了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%8A%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%8A%9E%E5%A9%9A%E7%A4%BC%E5%B7%B2%E7%BB%8F%E6%9C%89%E5%B0%8F%E5%AD%A9%E6%A1%8C%E4%BA%86%23) `268.0K 🔥` `NEW`
1. [粉底液将军 高跟鞋女战士](https://s.weibo.com/weibo?q=%23%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%20%E9%AB%98%E8%B7%9F%E9%9E%8B%E5%A5%B3%E6%88%98%E5%A3%AB%23) `235.0K 🔥` `NEW`
1. [严浩翔Fly概念视频](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94Fly%E6%A6%82%E5%BF%B5%E8%A7%86%E9%A2%91%23) `229.5K 🔥` `NEW`
1. [事业单位联考 (Joint Entrance Examination for Public Institutions)](https://s.weibo.com/weibo?q=%23%E4%BA%8B%E4%B8%9A%E5%8D%95%E4%BD%8D%E8%81%94%E8%80%83%23) `198.1K 🔥` `NEW`
1. [李小龙遗孀琳达近况](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E9%BE%99%E9%81%97%E5%AD%80%E7%90%B3%E8%BE%BE%E8%BF%91%E5%86%B5%23) `160.7K 🔥` `NEW`
1. [严浩翔跑男上班状态](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%B7%91%E7%94%B7%E4%B8%8A%E7%8F%AD%E7%8A%B6%E6%80%81%23) `153.4K 🔥` `NEW`
1. [伊朗考虑退出不扩散核武器条约](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%80%83%E8%99%91%E9%80%80%E5%87%BA%E4%B8%8D%E6%89%A9%E6%95%A3%E6%A0%B8%E6%AD%A6%E5%99%A8%E6%9D%A1%E7%BA%A6%23) `144.7K 🔥` `NEW`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `142.6K 🔥` `NEW`
1. [95后小伙吸粪车做婚车迎娶新娘](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E5%B0%8F%E4%BC%99%E5%90%B8%E7%B2%AA%E8%BD%A6%E5%81%9A%E5%A9%9A%E8%BD%A6%E8%BF%8E%E5%A8%B6%E6%96%B0%E5%A8%98%23) `128.8K 🔥` `NEW`
1. [白日提灯热度](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%83%AD%E5%BA%A6%23) `126.0K 🔥` `NEW`
1. [原来婚礼也可以极简成这样](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A9%9A%E7%A4%BC%E4%B9%9F%E5%8F%AF%E4%BB%A5%E6%9E%81%E7%AE%80%E6%88%90%E8%BF%99%E6%A0%B7%23) `113.9K 🔥` `NEW`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `112.1K 🔥` `NEW`
1. [孟子义李昀锐终极撕名牌对决](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E7%BB%88%E6%9E%81%E6%92%95%E5%90%8D%E7%89%8C%E5%AF%B9%E5%86%B3%23) `103.4K 🔥` `NEW`
1. [时代少年团奔跑吧首秀 (Times Youth League Run Bar debut)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%A5%94%E8%B7%91%E5%90%A7%E9%A6%96%E7%A7%80%23) `102.7K 🔥` `NEW`
1. [李遐怡DOK2公开恋情](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%81%90%E6%80%A1DOK2%E5%85%AC%E5%BC%80%E6%81%8B%E6%83%85%23) `92.0K 🔥` `NEW`
1. [男子回应母亲1.8万埋地里20年后挖出](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E6%AF%8D%E4%BA%B21.8%E4%B8%87%E5%9F%8B%E5%9C%B0%E9%87%8C20%E5%B9%B4%E5%90%8E%E6%8C%96%E5%87%BA%23) `90.4K 🔥` `NEW`
1. [喜羊羊猪猪侠来洛](https://s.weibo.com/weibo?q=%23%E5%96%9C%E7%BE%8A%E7%BE%8A%E7%8C%AA%E7%8C%AA%E4%BE%A0%E6%9D%A5%E6%B4%9B%23) `89.1K 🔥` `NEW`
1. [黄金白银急速飙涨](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E6%80%A5%E9%80%9F%E9%A3%99%E6%B6%A8%23) `86.9K 🔥` `NEW`
1. [何穗雎晓雯生娃后状态](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E9%9B%8E%E6%99%93%E9%9B%AF%E7%94%9F%E5%A8%83%E5%90%8E%E7%8A%B6%E6%80%81%23) `85.3K 🔥` `NEW`
1. [人穷志不穷具象化了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%A9%B7%E5%BF%97%E4%B8%8D%E7%A9%B7%E5%85%B7%E8%B1%A1%E5%8C%96%E4%BA%86%23) `84.2K 🔥` `NEW`
1. [花少导演谈北斗七行七老童心回归](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%AF%BC%E6%BC%94%E8%B0%88%E5%8C%97%E6%96%97%E4%B8%83%E8%A1%8C%E4%B8%83%E8%80%81%E7%AB%A5%E5%BF%83%E5%9B%9E%E5%BD%92%23) `82.4K 🔥` `NEW`
1. [老虎伍兹车祸现场画面](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%99%8E%E4%BC%8D%E5%85%B9%E8%BD%A6%E7%A5%B8%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `80.4K 🔥` `NEW`
1. [51岁大叔8年狂考20本证书改变人生](https://s.weibo.com/weibo?q=%2351%E5%B2%81%E5%A4%A7%E5%8F%948%E5%B9%B4%E7%8B%82%E8%80%8320%E6%9C%AC%E8%AF%81%E4%B9%A6%E6%94%B9%E5%8F%98%E4%BA%BA%E7%94%9F%23) `77.9K 🔥` `NEW`
1. [早起早睡的核心 (The core of getting up early and going to bed early)](https://s.weibo.com/weibo?q=%23%E6%97%A9%E8%B5%B7%E6%97%A9%E7%9D%A1%E7%9A%84%E6%A0%B8%E5%BF%83%23) `77.2K 🔥` `NEW`
1. [东风导弹射程覆盖全日本](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%A3%8E%E5%AF%BC%E5%BC%B9%E5%B0%84%E7%A8%8B%E8%A6%86%E7%9B%96%E5%85%A8%E6%97%A5%E6%9C%AC%23) `77.2K 🔥` `NEW`
1. [张凌赫多年前发文抨击影视圈](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%9A%E5%B9%B4%E5%89%8D%E5%8F%91%E6%96%87%E6%8A%A8%E5%87%BB%E5%BD%B1%E8%A7%86%E5%9C%88%23) `266.8K 🔥` `+85%`
1. [喜临门紧急冻结9亿元账户](https://s.weibo.com/weibo?q=%23%E5%96%9C%E4%B8%B4%E9%97%A8%E7%B4%A7%E6%80%A5%E5%86%BB%E7%BB%939%E4%BA%BF%E5%85%83%E8%B4%A6%E6%88%B7%23) `164.2K 🔥` `+60%`
1. [何晟铭说与徐麒雯恋爱曾被于正阻拦](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%99%9F%E9%93%AD%E8%AF%B4%E4%B8%8E%E5%BE%90%E9%BA%92%E9%9B%AF%E6%81%8B%E7%88%B1%E6%9B%BE%E8%A2%AB%E4%BA%8E%E6%AD%A3%E9%98%BB%E6%8B%A6%23) `125.1K 🔥` `+32%`
1. [20条负面清单让基础教育回归本真](https://s.weibo.com/weibo?q=%2320%E6%9D%A1%E8%B4%9F%E9%9D%A2%E6%B8%85%E5%8D%95%E8%AE%A9%E5%9F%BA%E7%A1%80%E6%95%99%E8%82%B2%E5%9B%9E%E5%BD%92%E6%9C%AC%E7%9C%9F%23) `660.2K 🔥`
1. [徐良删除汪苏泷后会无期作词作曲](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E5%88%A0%E9%99%A4%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%90%8E%E4%BC%9A%E6%97%A0%E6%9C%9F%E4%BD%9C%E8%AF%8D%E4%BD%9C%E6%9B%B2%23) `473.1K 🔥`
1. [中方对168名女童遇难深感震惊](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%AF%B9168%E5%90%8D%E5%A5%B3%E7%AB%A5%E9%81%87%E9%9A%BE%E6%B7%B1%E6%84%9F%E9%9C%87%E6%83%8A%23) `103.6K 🔥`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `85.2K 🔥`
1. [李昌钰去世 (Li Changyu passed away)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E5%8E%BB%E4%B8%96%23) `290.3K 🔥` `-40%`
1. [祝绪丹 虞书欣 (Zhu Xudan Yu Shuxin)](https://s.weibo.com/weibo?q=%23%E7%A5%9D%E7%BB%AA%E4%B8%B9%20%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `257.4K 🔥` `-33%`
1. [伊朗首都巨大爆炸](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A6%96%E9%83%BD%E5%B7%A8%E5%A4%A7%E7%88%86%E7%82%B8%23) `240.0K 🔥` `-34%`
1. [不给彩礼就不结婚或成违法行为 (If you don’t give a bride price, you won’t get married or it will be illegal.)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%BB%99%E5%BD%A9%E7%A4%BC%E5%B0%B1%E4%B8%8D%E7%BB%93%E5%A9%9A%E6%88%96%E6%88%90%E8%BF%9D%E6%B3%95%E8%A1%8C%E4%B8%BA%23) `216.0K 🔥` `-27%`
1. [竹林四侠彻底be了 (The Four Heroes of the Bamboo Forest are completely bereft)](https://s.weibo.com/weibo?q=%23%E7%AB%B9%E6%9E%97%E5%9B%9B%E4%BE%A0%E5%BD%BB%E5%BA%95be%E4%BA%86%23) `207.1K 🔥` `-29%`
1. [第一次对年假有了实感](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E5%B9%B4%E5%81%87%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `167.4K 🔥` `-60%`
1. [张子萱42岁状态 (Zhang Zixuan’s 42-year-old status)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E8%90%B142%E5%B2%81%E7%8A%B6%E6%80%81%23) `139.7K 🔥` `-60%`
1. [奔跑吧 (run)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `109.3K 🔥` `-90%`
1. [狗为了赢面相都变了](https://s.weibo.com/weibo?q=%23%E7%8B%97%E4%B8%BA%E4%BA%86%E8%B5%A2%E9%9D%A2%E7%9B%B8%E9%83%BD%E5%8F%98%E4%BA%86%23) `92.3K 🔥` `-37%`
1. [孙俪让浪姐节目组把陶昕然吊起来](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E8%AE%A9%E6%B5%AA%E5%A7%90%E8%8A%82%E7%9B%AE%E7%BB%84%E6%8A%8A%E9%99%B6%E6%98%95%E7%84%B6%E5%90%8A%E8%B5%B7%E6%9D%A5%23) `83.4K 🔥` `-76%`
1. [将军可以帅但不能没杀气](https://s.weibo.com/weibo?q=%23%E5%B0%86%E5%86%9B%E5%8F%AF%E4%BB%A5%E5%B8%85%E4%BD%86%E4%B8%8D%E8%83%BD%E6%B2%A1%E6%9D%80%E6%B0%94%23) `80.2K 🔥` `-40%`
1. [舒畅还有剧压了16年才播](https://s.weibo.com/weibo?q=%23%E8%88%92%E7%95%85%E8%BF%98%E6%9C%89%E5%89%A7%E5%8E%8B%E4%BA%8616%E5%B9%B4%E6%89%8D%E6%92%AD%23) `79.7K 🔥` `-34%`

Updated at 2026-03-28 13:13:10

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
