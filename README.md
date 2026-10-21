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

1. [樊振东发文抵制偷拍](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8F%91%E6%96%87%E6%8A%B5%E5%88%B6%E5%81%B7%E6%8B%8D%23) `3.5M 🔥` `NEW`
1. [国家癌症中心公布发病前五癌症](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E7%99%8C%E7%97%87%E4%B8%AD%E5%BF%83%E5%85%AC%E5%B8%83%E5%8F%91%E7%97%85%E5%89%8D%E4%BA%94%E7%99%8C%E7%97%87%23) `2.0M 🔥` `NEW`
1. [京东AI玩惊喜日买3C数码低至0元](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9CAI%E7%8E%A9%E6%83%8A%E5%96%9C%E6%97%A5%E4%B9%B03C%E6%95%B0%E7%A0%81%E4%BD%8E%E8%87%B30%E5%85%83%23) `1.2M 🔥` `NEW`
1. [曾辉回应和韩雨彤参加恋综](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E5%9B%9E%E5%BA%94%E5%92%8C%E9%9F%A9%E9%9B%A8%E5%BD%A4%E5%8F%82%E5%8A%A0%E6%81%8B%E7%BB%BC%23) `765.4K 🔥` `NEW`
1. [王凯说我全唱别人的歌开什么演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%87%AF%E8%AF%B4%E6%88%91%E5%85%A8%E5%94%B1%E5%88%AB%E4%BA%BA%E7%9A%84%E6%AD%8C%E5%BC%80%E4%BB%80%E4%B9%88%E6%BC%94%E5%94%B1%E4%BC%9A%23) `429.2K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `407.2K 🔥` `NEW`
1. [世界乱成一锅粥中国安心过日子](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B9%B1%E6%88%90%E4%B8%80%E9%94%85%E7%B2%A5%E4%B8%AD%E5%9B%BD%E5%AE%89%E5%BF%83%E8%BF%87%E6%97%A5%E5%AD%90%23) `379.0K 🔥` `NEW`
1. [詹姆斯76人生涯首分](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF76%E4%BA%BA%E7%94%9F%E6%B6%AF%E9%A6%96%E5%88%86%23) `369.1K 🔥` `NEW`
1. [球迷为樊振东发声](https://s.weibo.com/weibo?q=%23%E7%90%83%E8%BF%B7%E4%B8%BA%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8F%91%E5%A3%B0%23) `343.8K 🔥` `NEW`
1. [疑似崔秀彬照片事件当事人回应](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%B4%94%E7%A7%80%E5%BD%AC%E7%85%A7%E7%89%87%E4%BA%8B%E4%BB%B6%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%9B%9E%E5%BA%94%23) `343.7K 🔥` `NEW`
1. [易梦玲因护照被偷错过维密秀](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%A2%A6%E7%8E%B2%E5%9B%A0%E6%8A%A4%E7%85%A7%E8%A2%AB%E5%81%B7%E9%94%99%E8%BF%87%E7%BB%B4%E5%AF%86%E7%A7%80%23) `343.0K 🔥` `NEW`
1. [坠亡幼童父亲提出方案希望维持婚姻](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%B9%BC%E7%AB%A5%E7%88%B6%E4%BA%B2%E6%8F%90%E5%87%BA%E6%96%B9%E6%A1%88%E5%B8%8C%E6%9C%9B%E7%BB%B4%E6%8C%81%E5%A9%9A%E5%A7%BB%23) `342.2K 🔥` `NEW`
1. [贝儿化妆师造型师是鲍蕾](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%84%BF%E5%8C%96%E5%A6%86%E5%B8%88%E9%80%A0%E5%9E%8B%E5%B8%88%E6%98%AF%E9%B2%8D%E8%95%BE%23) `341.1K 🔥` `NEW`
1. [樊振东称乐于回应理智球迷](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%A7%B0%E4%B9%90%E4%BA%8E%E5%9B%9E%E5%BA%94%E7%90%86%E6%99%BA%E7%90%83%E8%BF%B7%23) `340.9K 🔥` `NEW`
1. [2岁幼童坠亡孩子母亲怀疑丈夫作案](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%B9%BC%E7%AB%A5%E5%9D%A0%E4%BA%A1%E5%AD%A9%E5%AD%90%E6%AF%8D%E4%BA%B2%E6%80%80%E7%96%91%E4%B8%88%E5%A4%AB%E4%BD%9C%E6%A1%88%23) `332.5K 🔥` `NEW`
1. [C罗失点又失空门](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%A4%B1%E7%82%B9%E5%8F%88%E5%A4%B1%E7%A9%BA%E9%97%A8%23) `307.4K 🔥` `NEW`
1. [胃癌与食管癌跌出发病前五](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E4%B8%8E%E9%A3%9F%E7%AE%A1%E7%99%8C%E8%B7%8C%E5%87%BA%E5%8F%91%E7%97%85%E5%89%8D%E4%BA%94%23) `298.1K 🔥` `NEW`
1. [SpaceX特斯拉成立委员会讨论合并](https://s.weibo.com/weibo?q=%23SpaceX%E7%89%B9%E6%96%AF%E6%8B%89%E6%88%90%E7%AB%8B%E5%A7%94%E5%91%98%E4%BC%9A%E8%AE%A8%E8%AE%BA%E5%90%88%E5%B9%B6%23) `297.9K 🔥` `NEW`
1. [詹姆斯罚球遭尼克斯球迷嘘声针对](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E7%BD%9A%E7%90%83%E9%81%AD%E5%B0%BC%E5%85%8B%E6%96%AF%E7%90%83%E8%BF%B7%E5%98%98%E5%A3%B0%E9%92%88%E5%AF%B9%23) `294.2K 🔥` `NEW`
1. [小红军的长征路看泪目了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%BA%A2%E5%86%9B%E7%9A%84%E9%95%BF%E5%BE%81%E8%B7%AF%E7%9C%8B%E6%B3%AA%E7%9B%AE%E4%BA%86%23) `216.9K 🔥` `NEW`
1. [甲状腺癌为何越来越多](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E7%99%8C%E4%B8%BA%E4%BD%95%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%23) `216.9K 🔥` `NEW`
1. [张雅琪超两个月未更新社媒](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E8%B6%85%E4%B8%A4%E4%B8%AA%E6%9C%88%E6%9C%AA%E6%9B%B4%E6%96%B0%E7%A4%BE%E5%AA%92%23) `200.5K 🔥` `NEW`
1. [乳腺癌进入女性死亡前5](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E8%85%BA%E7%99%8C%E8%BF%9B%E5%85%A5%E5%A5%B3%E6%80%A7%E6%AD%BB%E4%BA%A1%E5%89%8D5%23) `198.5K 🔥` `NEW`
1. [乔治凯尔特人首秀38分](https://s.weibo.com/weibo?q=%23%E4%B9%94%E6%B2%BB%E5%87%AF%E5%B0%94%E7%89%B9%E4%BA%BA%E9%A6%96%E7%A7%8038%E5%88%86%23) `192.5K 🔥` `NEW`
1. [大闸蟹价格暴跌超40%](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%97%B8%E8%9F%B9%E4%BB%B7%E6%A0%BC%E6%9A%B4%E8%B7%8C%E8%B6%8540%25%23) `181.7K 🔥` `NEW`
1. [张柏芝自曝五点起床陪儿子一整天](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E8%87%AA%E6%9B%9D%E4%BA%94%E7%82%B9%E8%B5%B7%E5%BA%8A%E9%99%AA%E5%84%BF%E5%AD%90%E4%B8%80%E6%95%B4%E5%A4%A9%23) `178.5K 🔥` `NEW`
1. [NBA](https://s.weibo.com/weibo?q=%23NBA%23) `169.4K 🔥` `NEW`
1. [科技新一说特斯拉手机钥匙断层第一](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E6%96%B0%E4%B8%80%E8%AF%B4%E7%89%B9%E6%96%AF%E6%8B%89%E6%89%8B%E6%9C%BA%E9%92%A5%E5%8C%99%E6%96%AD%E5%B1%82%E7%AC%AC%E4%B8%80%23) `160.2K 🔥` `NEW`
1. [咸鱼飞升](https://s.weibo.com/weibo?q=%23%E5%92%B8%E9%B1%BC%E9%A3%9E%E5%8D%87%23) `159.9K 🔥` `NEW`
1. [中国体操男队世锦赛铜牌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BD%93%E6%93%8D%E7%94%B7%E9%98%9F%E4%B8%96%E9%94%A6%E8%B5%9B%E9%93%9C%E7%89%8C%23) `151.3K 🔥` `NEW`
1. [国家数据集团将开启校园招聘](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E6%95%B0%E6%8D%AE%E9%9B%86%E5%9B%A2%E5%B0%86%E5%BC%80%E5%90%AF%E6%A0%A1%E5%9B%AD%E6%8B%9B%E8%81%98%23) `139.3K 🔥` `NEW`
1. [这是我见过最正常的唐氏](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E6%88%91%E8%A7%81%E8%BF%87%E6%9C%80%E6%AD%A3%E5%B8%B8%E7%9A%84%E5%94%90%E6%B0%8F%23) `137.1K 🔥` `NEW`
1. [疑似崔秀彬事件当事人被背刺](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%B4%94%E7%A7%80%E5%BD%AC%E4%BA%8B%E4%BB%B6%E5%BD%93%E4%BA%8B%E4%BA%BA%E8%A2%AB%E8%83%8C%E5%88%BA%23) `128.4K 🔥` `NEW`
1. [SpaceX三季度业绩](https://s.weibo.com/weibo?q=%23SpaceX%E4%B8%89%E5%AD%A3%E5%BA%A6%E4%B8%9A%E7%BB%A9%23) `123.4K 🔥` `NEW`
1. [医保个人账户跨省共济落地全国](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E4%BF%9D%E4%B8%AA%E4%BA%BA%E8%B4%A6%E6%88%B7%E8%B7%A8%E7%9C%81%E5%85%B1%E6%B5%8E%E8%90%BD%E5%9C%B0%E5%85%A8%E5%9B%BD%23) `1.2M 🔥` `+160%`
1. [男子捡到38000元留了道题给失主](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8D%A1%E5%88%B038000%E5%85%83%E7%95%99%E4%BA%86%E9%81%93%E9%A2%98%E7%BB%99%E5%A4%B1%E4%B8%BB%23) `1.2M 🔥` `+114%`
1. [法国乱成一锅粥了还有人威胁中国](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E4%B9%B1%E6%88%90%E4%B8%80%E9%94%85%E7%B2%A5%E4%BA%86%E8%BF%98%E6%9C%89%E4%BA%BA%E5%A8%81%E8%83%81%E4%B8%AD%E5%9B%BD%23) `341.7K 🔥` `+54%`
1. [唐禹哲获刑1年7个月缓刑3年](https://s.weibo.com/weibo?q=%23%E5%94%90%E7%A6%B9%E5%93%B2%E8%8E%B7%E5%88%911%E5%B9%B47%E4%B8%AA%E6%9C%88%E7%BC%93%E5%88%913%E5%B9%B4%23) `297.0K 🔥` `+228%`
1. [大冰教你百试不爽拒绝借钱](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E6%95%99%E4%BD%A0%E7%99%BE%E8%AF%95%E4%B8%8D%E7%88%BD%E6%8B%92%E7%BB%9D%E5%80%9F%E9%92%B1%23) `296.3K 🔥` `+270%`
1. [鼓浪屿冷清不复当年盛景](https://s.weibo.com/weibo?q=%23%E9%BC%93%E6%B5%AA%E5%B1%BF%E5%86%B7%E6%B8%85%E4%B8%8D%E5%A4%8D%E5%BD%93%E5%B9%B4%E7%9B%9B%E6%99%AF%23) `295.6K 🔥` `+229%`
1. [沈阳致6死16伤公交事故多人被处理](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E8%87%B46%E6%AD%BB16%E4%BC%A4%E5%85%AC%E4%BA%A4%E4%BA%8B%E6%95%85%E5%A4%9A%E4%BA%BA%E8%A2%AB%E5%A4%84%E7%90%86%23) `294.8K 🔥` `+230%`
1. [德国盾构机卖印度需中国放行](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E7%9B%BE%E6%9E%84%E6%9C%BA%E5%8D%96%E5%8D%B0%E5%BA%A6%E9%9C%80%E4%B8%AD%E5%9B%BD%E6%94%BE%E8%A1%8C%23) `267.3K 🔥` `+314%`
1. [王一博是istp](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%98%AFistp%23) `236.9K 🔥` `+56%`
1. [陆毅鲍蕾女儿18岁生日试装](https://s.weibo.com/weibo?q=%23%E9%99%86%E6%AF%85%E9%B2%8D%E8%95%BE%E5%A5%B3%E5%84%BF18%E5%B2%81%E7%94%9F%E6%97%A5%E8%AF%95%E8%A3%85%23) `230.2K 🔥` `+48%`
1. [大冰掏心掏肺谈职场](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E6%8E%8F%E5%BF%83%E6%8E%8F%E8%82%BA%E8%B0%88%E8%81%8C%E5%9C%BA%23) `216.6K 🔥` `+175%`
1. [钟南山不老秘诀是抗阻训练](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E4%B8%8D%E8%80%81%E7%A7%98%E8%AF%80%E6%98%AF%E6%8A%97%E9%98%BB%E8%AE%AD%E7%BB%83%23) `146.5K 🔥` `+80%`
1. [女子往店里搬水男子帮忙却被造黄谣](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BE%80%E5%BA%97%E9%87%8C%E6%90%AC%E6%B0%B4%E7%94%B7%E5%AD%90%E5%B8%AE%E5%BF%99%E5%8D%B4%E8%A2%AB%E9%80%A0%E9%BB%84%E8%B0%A3%23) `134.3K 🔥` `+129%`
1. [刘雯维密回归太权威了](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E7%BB%B4%E5%AF%86%E5%9B%9E%E5%BD%92%E5%A4%AA%E6%9D%83%E5%A8%81%E4%BA%86%23) `155.3K 🔥`
1. [南海](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%B5%B7%23) `141.9K 🔥`
1. [巴黎圣日耳曼4比2巴萨](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%97%A5%E8%80%B3%E6%9B%BC4%E6%AF%942%E5%B7%B4%E8%90%A8%23) `219.7K 🔥` `-73%`

Updated at 2026-10-21 09:53:03

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
