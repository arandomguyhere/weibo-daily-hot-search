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

1. [FIFA回应是否处罚阿根廷 (FIFA responds on whether to punish Argentina)](https://s.weibo.com/weibo?q=%23FIFA%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E5%A4%84%E7%BD%9A%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `1.3M 🔥` `NEW`
1. [小鹏MONA L03全球上市12.38万元起](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONA%20L03%E5%85%A8%E7%90%83%E4%B8%8A%E5%B8%8212.38%E4%B8%87%E5%85%83%E8%B5%B7%23) `944.5K 🔥` `NEW`
1. [沙特巨型西瓜为何国内少见](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%89%B9%E5%B7%A8%E5%9E%8B%E8%A5%BF%E7%93%9C%E4%B8%BA%E4%BD%95%E5%9B%BD%E5%86%85%E5%B0%91%E8%A7%81%23) `881.6K 🔥` `NEW`
1. [白鹿或将转型](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%88%96%E5%B0%86%E8%BD%AC%E5%9E%8B%23) `557.1K 🔥` `NEW`
1. [邹市明冉莹颖收入分开结算](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E5%86%89%E8%8E%B9%E9%A2%96%E6%94%B6%E5%85%A5%E5%88%86%E5%BC%80%E7%BB%93%E7%AE%97%23) `553.6K 🔥` `NEW`
1. [李登科说白鹿已经入局资本赛道了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E8%AF%B4%E7%99%BD%E9%B9%BF%E5%B7%B2%E7%BB%8F%E5%85%A5%E5%B1%80%E8%B5%84%E6%9C%AC%E8%B5%9B%E9%81%93%E4%BA%86%23) `543.1K 🔥` `NEW`
1. [被夸什么让你觉得很反感](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%A4%B8%E4%BB%80%E4%B9%88%E8%AE%A9%E4%BD%A0%E8%A7%89%E5%BE%97%E5%BE%88%E5%8F%8D%E6%84%9F%23) `536.8K 🔥` `NEW`
1. [朱志鑫凌晨一点才睡](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E5%87%8C%E6%99%A8%E4%B8%80%E7%82%B9%E6%89%8D%E7%9D%A1%23) `531.4K 🔥` `NEW`
1. [关晓彤平底鞋](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%B9%B3%E5%BA%95%E9%9E%8B%23) `525.3K 🔥` `NEW`
1. [油价](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%23) `522.7K 🔥` `NEW`
1. [哈兰德与女友在意大利被围观 (Haaland and his girlfriend were watched in Italy)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E4%B8%8E%E5%A5%B3%E5%8F%8B%E5%9C%A8%E6%84%8F%E5%A4%A7%E5%88%A9%E8%A2%AB%E5%9B%B4%E8%A7%82%23) `519.7K 🔥` `NEW`
1. [刘宇宁林一真实身高](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%9E%97%E4%B8%80%E7%9C%9F%E5%AE%9E%E8%BA%AB%E9%AB%98%23) `518.2K 🔥` `NEW`
1. [中医提醒三伏多做3件事](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%8C%BB%E6%8F%90%E9%86%92%E4%B8%89%E4%BC%8F%E5%A4%9A%E5%81%9A3%E4%BB%B6%E4%BA%8B%23) `515.3K 🔥` `NEW`
1. [王橹杰TF家族运动会大合影C位](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%A4%A7%E5%90%88%E5%BD%B1C%E4%BD%8D%23) `511.6K 🔥` `NEW`
1. [伊朗多地遭袭击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%9A%E5%9C%B0%E9%81%AD%E8%A2%AD%E5%87%BB%23) `504.2K 🔥` `NEW`
1. [年内油价第9次上调](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%86%85%E6%B2%B9%E4%BB%B7%E7%AC%AC9%E6%AC%A1%E4%B8%8A%E8%B0%83%23) `501.3K 🔥` `NEW`
1. [足坛已然进入内马尔迷弟时代](https://s.weibo.com/weibo?q=%23%E8%B6%B3%E5%9D%9B%E5%B7%B2%E7%84%B6%E8%BF%9B%E5%85%A5%E5%86%85%E9%A9%AC%E5%B0%94%E8%BF%B7%E5%BC%9F%E6%97%B6%E4%BB%A3%23) `495.4K 🔥` `NEW`
1. [45岁未婚女子广东立遗嘱安排3000万](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E6%9C%AA%E5%A9%9A%E5%A5%B3%E5%AD%90%E5%B9%BF%E4%B8%9C%E7%AB%8B%E9%81%97%E5%98%B1%E5%AE%89%E6%8E%923000%E4%B8%87%23) `492.9K 🔥` `NEW`
1. [许昕告状马龙通知晚了](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E5%91%8A%E7%8A%B6%E9%A9%AC%E9%BE%99%E9%80%9A%E7%9F%A5%E6%99%9A%E4%BA%86%23) `485.9K 🔥` `NEW`
1. [日本人真的很热衷于吃夹生的食物](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E7%9C%9F%E7%9A%84%E5%BE%88%E7%83%AD%E8%A1%B7%E4%BA%8E%E5%90%83%E5%A4%B9%E7%94%9F%E7%9A%84%E9%A3%9F%E7%89%A9%23) `480.4K 🔥` `NEW`
1. [女子殴打89岁拾荒老人目击者发声 (Witnesses of woman beating 89-year-old waste scavenger speak out)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%AE%B4%E6%89%9389%E5%B2%81%E6%8B%BE%E8%8D%92%E8%80%81%E4%BA%BA%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23) `473.7K 🔥` `NEW`
1. [涉事影院回应功夫女足疑被偷票房](https://s.weibo.com/weibo?q=%23%E6%B6%89%E4%BA%8B%E5%BD%B1%E9%99%A2%E5%9B%9E%E5%BA%94%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%96%91%E8%A2%AB%E5%81%B7%E7%A5%A8%E6%88%BF%23) `468.2K 🔥` `NEW`
1. [NBA总裁希望詹姆斯尽快决定 (NBA president hopes James will decide soon)](https://s.weibo.com/weibo?q=%23NBA%E6%80%BB%E8%A3%81%E5%B8%8C%E6%9C%9B%E8%A9%B9%E5%A7%86%E6%96%AF%E5%B0%BD%E5%BF%AB%E5%86%B3%E5%AE%9A%23) `974.4K 🔥` `+1258%`
1. [数读产业转型升级新动能 (New momentum for transformation and upgrading of digital reading industry)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E4%BA%A7%E4%B8%9A%E8%BD%AC%E5%9E%8B%E5%8D%87%E7%BA%A7%E6%96%B0%E5%8A%A8%E8%83%BD%23) `953.8K 🔥` `+48%`
1. [以后快递地址只写到小区](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E5%BF%AB%E9%80%92%E5%9C%B0%E5%9D%80%E5%8F%AA%E5%86%99%E5%88%B0%E5%B0%8F%E5%8C%BA%23) `928.8K 🔥` `+44%`
1. [原来真有人的妈妈是这样的 (It turns out someone’s mother really is like this)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9C%9F%E6%9C%89%E4%BA%BA%E7%9A%84%E5%A6%88%E5%A6%88%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `910.8K 🔥` `+580%`
1. [长沙人是瞒着我们进化了吗 (Did the people of Changsha evolve without telling us?)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E4%BA%BA%E6%98%AF%E7%9E%92%E7%9D%80%E6%88%91%E4%BB%AC%E8%BF%9B%E5%8C%96%E4%BA%86%E5%90%97%23) `864.0K 🔥` `+533%`
1. [周星驰3个问号回应被偷票房 (Stephen Chow responded to the stolen box office with 3 question marks)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B03%E4%B8%AA%E9%97%AE%E5%8F%B7%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%81%B7%E7%A5%A8%E6%88%BF%23) `560.2K 🔥` `+74%`
1. [2026世界人工智能大会太火了](https://s.weibo.com/weibo?q=%232026%E4%B8%96%E7%95%8C%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%A4%A7%E4%BC%9A%E5%A4%AA%E7%81%AB%E4%BA%86%23) `558.7K 🔥` `+373%`
1. [沈阳音乐学院发布讣告](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E9%9F%B3%E4%B9%90%E5%AD%A6%E9%99%A2%E5%8F%91%E5%B8%83%E8%AE%A3%E5%91%8A%23) `550.0K 🔥` `+660%`
1. [成都暴雨](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E6%9A%B4%E9%9B%A8%23) `544.6K 🔥` `+650%`
1. [沈音教授白丽萍夫妇离世系意外事故](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%9F%B3%E6%95%99%E6%8E%88%E7%99%BD%E4%B8%BD%E8%90%8D%E5%A4%AB%E5%A6%87%E7%A6%BB%E4%B8%96%E7%B3%BB%E6%84%8F%E5%A4%96%E4%BA%8B%E6%95%85%23) `540.6K 🔥` `+327%`
1. [黑狗咬人被主人卖掉吓得眼神呆滞 (The black dog bit someone and was sold by his owner, so scared that his eyes were dull)](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%8B%97%E5%92%AC%E4%BA%BA%E8%A2%AB%E4%B8%BB%E4%BA%BA%E5%8D%96%E6%8E%89%E5%90%93%E5%BE%97%E7%9C%BC%E7%A5%9E%E5%91%86%E6%BB%9E%23) `529.7K 🔥` `+448%`
1. [关晓彤被风吹的这一下](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E8%A2%AB%E9%A3%8E%E5%90%B9%E7%9A%84%E8%BF%99%E4%B8%80%E4%B8%8B%23) `508.6K 🔥` `+319%`
1. [小鹏MONAL03价格杀疯了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONAL03%E4%BB%B7%E6%A0%BC%E6%9D%80%E7%96%AF%E4%BA%86%23) `506.7K 🔥` `+814%`
1. [realme手机退出中国市场](https://s.weibo.com/weibo?q=%23realme%E6%89%8B%E6%9C%BA%E9%80%80%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%23) `496.8K 🔥` `+168%`
1. [女孩手臂超长轻松腕线过裆 (Girls' arms are super long and the wrist line easily passes through the crotch)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%89%8B%E8%87%82%E8%B6%85%E9%95%BF%E8%BD%BB%E6%9D%BE%E8%85%95%E7%BA%BF%E8%BF%87%E8%A3%86%23) `488.7K 🔥` `+815%`
1. [法国队对季军赛毫无动力 (France has no motivation for third-place match)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%98%9F%E5%AF%B9%E5%AD%A3%E5%86%9B%E8%B5%9B%E6%AF%AB%E6%97%A0%E5%8A%A8%E5%8A%9B%23) `484.6K 🔥` `+250%`
1. [女孩坐老表摩托车回家视频在外网火了 (The video of a girl riding her old cousin’s motorcycle home went viral online)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%9D%90%E8%80%81%E8%A1%A8%E6%91%A9%E6%89%98%E8%BD%A6%E5%9B%9E%E5%AE%B6%E8%A7%86%E9%A2%91%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86%23) `479.4K 🔥` `+564%`
1. [一代人有一代人的漂亮饭 (Each generation has its own beautiful meal)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E6%BC%82%E4%BA%AE%E9%A5%AD%23) `475.7K 🔥` `+282%`
1. [宋亚轩忙一天打开手机天塌了 (Song Yaxuan turned on her phone after a busy day and the sky fell.)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%BF%99%E4%B8%80%E5%A4%A9%E6%89%93%E5%BC%80%E6%89%8B%E6%9C%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `470.0K 🔥` `+138%`
1. [原来饥饿大多都是假性食欲](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%A5%A5%E9%A5%BF%E5%A4%A7%E5%A4%9A%E9%83%BD%E6%98%AF%E5%81%87%E6%80%A7%E9%A3%9F%E6%AC%B2%23) `464.1K 🔥` `+403%`
1. [何瑞贤化妆技术比化妆师还好 (He Ruixian’s makeup skills are better than those of makeup artists)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%91%9E%E8%B4%A4%E5%8C%96%E5%A6%86%E6%8A%80%E6%9C%AF%E6%AF%94%E5%8C%96%E5%A6%86%E5%B8%88%E8%BF%98%E5%A5%BD%23) `462.8K 🔥` `+546%`
1. [第1次见女主怀孕相亲](https://s.weibo.com/weibo?q=%23%E7%AC%AC1%E6%AC%A1%E8%A7%81%E5%A5%B3%E4%B8%BB%E6%80%80%E5%AD%95%E7%9B%B8%E4%BA%B2%23) `458.5K 🔥` `+844%`
1. [EWC淘汰赛抽签](https://s.weibo.com/weibo?q=%23EWC%E6%B7%98%E6%B1%B0%E8%B5%9B%E6%8A%BD%E7%AD%BE%23) `455.7K 🔥` `+262%`
1. [吕洞宾建模 杨洋](https://s.weibo.com/weibo?q=%23%E5%90%95%E6%B4%9E%E5%AE%BE%E5%BB%BA%E6%A8%A1%20%E6%9D%A8%E6%B4%8B%23) `455.1K 🔥` `+835%`
1. [王橹杰很喜欢运动会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%BE%88%E5%96%9C%E6%AC%A2%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `451.7K 🔥` `+680%`
1. [李想说L6补齐三个短板](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%83%B3%E8%AF%B4L6%E8%A1%A5%E9%BD%90%E4%B8%89%E4%B8%AA%E7%9F%AD%E6%9D%BF%23) `448.3K 🔥` `+799%`
1. [过了很多年才突然明白的事](https://s.weibo.com/weibo?q=%23%E8%BF%87%E4%BA%86%E5%BE%88%E5%A4%9A%E5%B9%B4%E6%89%8D%E7%AA%81%E7%84%B6%E6%98%8E%E7%99%BD%E7%9A%84%E4%BA%8B%23) `547.1K 🔥`
1. [韩国股民从暴富到一夜归零](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E6%B0%91%E4%BB%8E%E6%9A%B4%E5%AF%8C%E5%88%B0%E4%B8%80%E5%A4%9C%E5%BD%92%E9%9B%B6%23) `532.9K 🔥` `-25%`

Updated at 2026-07-17 09:11:44

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
