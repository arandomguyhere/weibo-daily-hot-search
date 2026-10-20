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

1. [天猫双11百大爆款清单发布](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB%E5%8F%8C11%E7%99%BE%E5%A4%A7%E7%88%86%E6%AC%BE%E6%B8%85%E5%8D%95%E5%8F%91%E5%B8%83%23) `55.8K 🔥` `NEW`
1. [体操世锦赛男团决赛](https://s.weibo.com/weibo?q=%23%E4%BD%93%E6%93%8D%E4%B8%96%E9%94%A6%E8%B5%9B%E7%94%B7%E5%9B%A2%E5%86%B3%E8%B5%9B%23) `37.6K 🔥` `NEW`
1. [钟南山今天90岁了](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E4%BB%8A%E5%A4%A990%E5%B2%81%E4%BA%86%23) `33.3K 🔥` `NEW`
1. [oa只比小糯米大一岁](https://s.weibo.com/weibo?q=%23oa%E5%8F%AA%E6%AF%94%E5%B0%8F%E7%B3%AF%E7%B1%B3%E5%A4%A7%E4%B8%80%E5%B2%81%23) `29.4K 🔥` `NEW`
1. [钟正冯薪朵合体上恋综](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%AD%A3%E5%86%AF%E8%96%AA%E6%9C%B5%E5%90%88%E4%BD%93%E4%B8%8A%E6%81%8B%E7%BB%BC%23) `28.4K 🔥` `NEW`
1. [科技新一说宁德时代利润太吓人了](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E6%96%B0%E4%B8%80%E8%AF%B4%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E5%88%A9%E6%B6%A6%E5%A4%AA%E5%90%93%E4%BA%BA%E4%BA%86%23) `26.8K 🔥` `NEW`
1. [剧集告别信](https://s.weibo.com/weibo?q=%23%E5%89%A7%E9%9B%86%E5%91%8A%E5%88%AB%E4%BF%A1%23) `24.8K 🔥` `NEW`
1. [蔡天凤碎尸案厨具店员出庭作供](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%A4%A9%E5%87%A4%E7%A2%8E%E5%B0%B8%E6%A1%88%E5%8E%A8%E5%85%B7%E5%BA%97%E5%91%98%E5%87%BA%E5%BA%AD%E4%BD%9C%E4%BE%9B%23) `23.6K 🔥` `NEW`
1. [你怎么养我小我怎么养你老](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%80%8E%E4%B9%88%E5%85%BB%E6%88%91%E5%B0%8F%E6%88%91%E6%80%8E%E4%B9%88%E5%85%BB%E4%BD%A0%E8%80%81%23) `23.5K 🔥` `NEW`
1. [钟南山90岁的精气神从来不是靠天赋](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B190%E5%B2%81%E7%9A%84%E7%B2%BE%E6%B0%94%E7%A5%9E%E4%BB%8E%E6%9D%A5%E4%B8%8D%E6%98%AF%E9%9D%A0%E5%A4%A9%E8%B5%8B%23) `23.5K 🔥` `NEW`
1. [当事人回应帮忙搬水男子被造黄谣](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%9B%9E%E5%BA%94%E5%B8%AE%E5%BF%99%E6%90%AC%E6%B0%B4%E7%94%B7%E5%AD%90%E8%A2%AB%E9%80%A0%E9%BB%84%E8%B0%A3%23) `23.5K 🔥` `NEW`
1. [冰箱除霜一定要先断电](https://s.weibo.com/weibo?q=%23%E5%86%B0%E7%AE%B1%E9%99%A4%E9%9C%9C%E4%B8%80%E5%AE%9A%E8%A6%81%E5%85%88%E6%96%AD%E7%94%B5%23) `21.9K 🔥` `NEW`
1. [双11论便宜还得是淘宝](https://s.weibo.com/weibo?q=%23%E5%8F%8C11%E8%AE%BA%E4%BE%BF%E5%AE%9C%E8%BF%98%E5%BE%97%E6%98%AF%E6%B7%98%E5%AE%9D%23) `21.2K 🔥` `NEW`
1. [美军先进导弹首次部署至冲绳](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%85%88%E8%BF%9B%E5%AF%BC%E5%BC%B9%E9%A6%96%E6%AC%A1%E9%83%A8%E7%BD%B2%E8%87%B3%E5%86%B2%E7%BB%B3%23) `20.4K 🔥` `NEW`
1. [法国骚乱下竟有人叫嚣对华强硬](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%AA%9A%E4%B9%B1%E4%B8%8B%E7%AB%9F%E6%9C%89%E4%BA%BA%E5%8F%AB%E5%9A%A3%E5%AF%B9%E5%8D%8E%E5%BC%BA%E7%A1%AC%23) `19.0K 🔥` `NEW`
1. [香港名媛碎尸案曝关键新证词](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%90%8D%E5%AA%9B%E7%A2%8E%E5%B0%B8%E6%A1%88%E6%9B%9D%E5%85%B3%E9%94%AE%E6%96%B0%E8%AF%81%E8%AF%8D%23) `127.6K 🔥` `-67%`
1. [油车电车10年成本账怎么算](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E8%BD%A6%E7%94%B5%E8%BD%A610%E5%B9%B4%E6%88%90%E6%9C%AC%E8%B4%A6%E6%80%8E%E4%B9%88%E7%AE%97%23) `63.7K 🔥` `-77%`
1. [同心同行长征路](https://s.weibo.com/weibo?q=%23%E5%90%8C%E5%BF%83%E5%90%8C%E8%A1%8C%E9%95%BF%E5%BE%81%E8%B7%AF%23) `55.9K 🔥` `-83%`
1. [法国乱成一锅粥了还有人威胁中国](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E4%B9%B1%E6%88%90%E4%B8%80%E9%94%85%E7%B2%A5%E4%BA%86%E8%BF%98%E6%9C%89%E4%BA%BA%E5%A8%81%E8%83%81%E4%B8%AD%E5%9B%BD%23) `53.0K 🔥` `-79%`
1. [南海](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%B5%B7%23) `43.0K 🔥` `-72%`
1. [曝湖南台力捧张雅琪原因](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B9%96%E5%8D%97%E5%8F%B0%E5%8A%9B%E6%8D%A7%E5%BC%A0%E9%9B%85%E7%90%AA%E5%8E%9F%E5%9B%A0%23) `41.7K 🔥` `-81%`
1. [刘雯维密回归太权威了](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E7%BB%B4%E5%AF%86%E5%9B%9E%E5%BD%92%E5%A4%AA%E6%9D%83%E5%A8%81%E4%BA%86%23) `40.0K 🔥` `-73%`
1. [陆毅鲍蕾女儿18岁生日试装](https://s.weibo.com/weibo?q=%23%E9%99%86%E6%AF%85%E9%B2%8D%E8%95%BE%E5%A5%B3%E5%84%BF18%E5%B2%81%E7%94%9F%E6%97%A5%E8%AF%95%E8%A3%85%23) `39.3K 🔥` `-80%`
1. [男子捡到38000元留了道题给失主](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8D%A1%E5%88%B038000%E5%85%83%E7%95%99%E4%BA%86%E9%81%93%E9%A2%98%E7%BB%99%E5%A4%B1%E4%B8%BB%23) `32.2K 🔥` `-94%`
1. [广州白云代孕地下手术室被举报](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E7%99%BD%E4%BA%91%E4%BB%A3%E5%AD%95%E5%9C%B0%E4%B8%8B%E6%89%8B%E6%9C%AF%E5%AE%A4%E8%A2%AB%E4%B8%BE%E6%8A%A5%23) `31.4K 🔥` `-79%`
1. [易梦玲巴黎被偷](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%A2%A6%E7%8E%B2%E5%B7%B4%E9%BB%8E%E8%A2%AB%E5%81%B7%23) `29.9K 🔥` `-86%`
1. [田曦薇 我望着你不肯后退的眼睛](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E6%88%91%E6%9C%9B%E7%9D%80%E4%BD%A0%E4%B8%8D%E8%82%AF%E5%90%8E%E9%80%80%E7%9A%84%E7%9C%BC%E7%9D%9B%23) `27.7K 🔥` `-80%`
1. [到底谁把微信变成工作软件的](https://s.weibo.com/weibo?q=%23%E5%88%B0%E5%BA%95%E8%B0%81%E6%8A%8A%E5%BE%AE%E4%BF%A1%E5%8F%98%E6%88%90%E5%B7%A5%E4%BD%9C%E8%BD%AF%E4%BB%B6%E7%9A%84%23) `27.2K 🔥` `-81%`
1. [等等党赢麻了](https://s.weibo.com/weibo?q=%23%E7%AD%89%E7%AD%89%E5%85%9A%E8%B5%A2%E9%BA%BB%E4%BA%86%23) `26.6K 🔥` `-82%`
1. [旭日旗事件涉事学生曾骂劝阻同学](https://s.weibo.com/weibo?q=%23%E6%97%AD%E6%97%A5%E6%97%97%E4%BA%8B%E4%BB%B6%E6%B6%89%E4%BA%8B%E5%AD%A6%E7%94%9F%E6%9B%BE%E9%AA%82%E5%8A%9D%E9%98%BB%E5%90%8C%E5%AD%A6%23) `25.5K 🔥` `-75%`
1. [唐禹哲获刑1年7个月缓刑3年](https://s.weibo.com/weibo?q=%23%E5%94%90%E7%A6%B9%E5%93%B2%E8%8E%B7%E5%88%911%E5%B9%B47%E4%B8%AA%E6%9C%88%E7%BC%93%E5%88%913%E5%B9%B4%23) `25.4K 🔥` `-75%`
1. [沈阳致6死16伤公交事故多人被处理](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E8%87%B46%E6%AD%BB16%E4%BC%A4%E5%85%AC%E4%BA%A4%E4%BA%8B%E6%95%85%E5%A4%9A%E4%BA%BA%E8%A2%AB%E5%A4%84%E7%90%86%23) `25.4K 🔥` `-75%`
1. [周芙已经认出了魏娆才是亲生女儿](https://s.weibo.com/weibo?q=%23%E5%91%A8%E8%8A%99%E5%B7%B2%E7%BB%8F%E8%AE%A4%E5%87%BA%E4%BA%86%E9%AD%8F%E5%A8%86%E6%89%8D%E6%98%AF%E4%BA%B2%E7%94%9F%E5%A5%B3%E5%84%BF%23) `25.3K 🔥` `-76%`
1. [维密大翅膀代表什么](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%AF%86%E5%A4%A7%E7%BF%85%E8%86%80%E4%BB%A3%E8%A1%A8%E4%BB%80%E4%B9%88%23) `25.1K 🔥` `-76%`
1. [双十一](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E5%8D%81%E4%B8%80%23) `25.0K 🔥` `-71%`
1. [中了100万后的生活是怎么样的](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BA%86100%E4%B8%87%E5%90%8E%E7%9A%84%E7%94%9F%E6%B4%BB%E6%98%AF%E6%80%8E%E4%B9%88%E6%A0%B7%E7%9A%84%23) `24.8K 🔥` `-73%`
1. [小英被指忘本](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E8%A2%AB%E6%8C%87%E5%BF%98%E6%9C%AC%23) `24.1K 🔥` `-76%`
1. [理想汽车发布电池保障政策](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E6%B1%BD%E8%BD%A6%E5%8F%91%E5%B8%83%E7%94%B5%E6%B1%A0%E4%BF%9D%E9%9A%9C%E6%94%BF%E7%AD%96%23) `23.6K 🔥` `-81%`
1. [女子往店里搬水男子帮忙却被造黄谣](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BE%80%E5%BA%97%E9%87%8C%E6%90%AC%E6%B0%B4%E7%94%B7%E5%AD%90%E5%B8%AE%E5%BF%99%E5%8D%B4%E8%A2%AB%E9%80%A0%E9%BB%84%E8%B0%A3%23) `23.6K 🔥` `-77%`
1. [奚梦瑶走秀时脚被纱挂住了](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E8%B5%B0%E7%A7%80%E6%97%B6%E8%84%9A%E8%A2%AB%E7%BA%B1%E6%8C%82%E4%BD%8F%E4%BA%86%23) `23.5K 🔥` `-76%`
1. [医生回应钟南山心梗后每周运动3次](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E9%92%9F%E5%8D%97%E5%B1%B1%E5%BF%83%E6%A2%97%E5%90%8E%E6%AF%8F%E5%91%A8%E8%BF%90%E5%8A%A83%E6%AC%A1%23) `23.5K 🔥` `-77%`
1. [怪不得魏娆跟养母并不亲](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E9%AD%8F%E5%A8%86%E8%B7%9F%E5%85%BB%E6%AF%8D%E5%B9%B6%E4%B8%8D%E4%BA%B2%23) `22.3K 🔥` `-85%`
1. [梁淅沥首个官方直拍](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%B7%85%E6%B2%A5%E9%A6%96%E4%B8%AA%E5%AE%98%E6%96%B9%E7%9B%B4%E6%8B%8D%23) `22.2K 🔥` `-84%`
1. [Sakee喊话GAI](https://s.weibo.com/weibo?q=%23Sakee%E5%96%8A%E8%AF%9DGAI%23) `21.8K 🔥` `-78%`
1. [4名小朋友吃火锅多一块小酥肉夹给老板](https://s.weibo.com/weibo?q=%234%E5%90%8D%E5%B0%8F%E6%9C%8B%E5%8F%8B%E5%90%83%E7%81%AB%E9%94%85%E5%A4%9A%E4%B8%80%E5%9D%97%E5%B0%8F%E9%85%A5%E8%82%89%E5%A4%B9%E7%BB%99%E8%80%81%E6%9D%BF%23) `21.4K 🔥` `-79%`
1. [Ally一上来就把男嘉宾钓晕了](https://s.weibo.com/weibo?q=%23Ally%E4%B8%80%E4%B8%8A%E6%9D%A5%E5%B0%B1%E6%8A%8A%E7%94%B7%E5%98%89%E5%AE%BE%E9%92%93%E6%99%95%E4%BA%86%23) `20.9K 🔥` `-78%`
1. [RNG道歉微博62.6万评论](https://s.weibo.com/weibo?q=%23RNG%E9%81%93%E6%AD%89%E5%BE%AE%E5%8D%9A62.6%E4%B8%87%E8%AF%84%E8%AE%BA%23) `20.1K 🔥` `-77%`
1. [美人余大结局可太解气了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BA%BA%E4%BD%99%E5%A4%A7%E7%BB%93%E5%B1%80%E5%8F%AF%E5%A4%AA%E8%A7%A3%E6%B0%94%E4%BA%86%23) `19.8K 🔥` `-86%`
1. [玉簟秋追夫名场面](https://s.weibo.com/weibo?q=%23%E7%8E%89%E7%B0%9F%E7%A7%8B%E8%BF%BD%E5%A4%AB%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `19.0K 🔥` `-77%`
1. [井柏然最有腔调的红毯来了](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E6%9C%80%E6%9C%89%E8%85%94%E8%B0%83%E7%9A%84%E7%BA%A2%E6%AF%AF%E6%9D%A5%E4%BA%86%23) `18.8K 🔥` `-82%`
1. [吴越这段话我反复听了十几遍](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B6%8A%E8%BF%99%E6%AE%B5%E8%AF%9D%E6%88%91%E5%8F%8D%E5%A4%8D%E5%90%AC%E4%BA%86%E5%8D%81%E5%87%A0%E9%81%8D%23) `18.8K 🔥` `-74%`

Updated at 2026-10-21 04:43:00

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
