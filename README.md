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

1. [梅西与中国球迷的双向奔赴 (Messi’s two-way journey with Chinese fans)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E4%B8%8E%E4%B8%AD%E5%9B%BD%E7%90%83%E8%BF%B7%E7%9A%84%E5%8F%8C%E5%90%91%E5%A5%94%E8%B5%B4%23) `1.2M 🔥` `NEW`
1. [梅西 踩小腿](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%20%E8%B8%A9%E5%B0%8F%E8%85%BF%23) `880.4K 🔥` `NEW`
1. [一分钟学会北斗卫星短信自救](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%88%86%E9%92%9F%E5%AD%A6%E4%BC%9A%E5%8C%97%E6%96%97%E5%8D%AB%E6%98%9F%E7%9F%AD%E4%BF%A1%E8%87%AA%E6%95%91%23) `698.3K 🔥` `NEW`
1. [拼豆第一批受害者出现了](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E8%B1%86%E7%AC%AC%E4%B8%80%E6%89%B9%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `671.0K 🔥` `NEW`
1. [归鸾领衔主演张家玮费霞](https://s.weibo.com/weibo?q=%23%E5%BD%92%E9%B8%BE%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E5%BC%A0%E5%AE%B6%E7%8E%AE%E8%B4%B9%E9%9C%9E%23) `664.8K 🔥` `NEW`
1. [AI支付](https://s.weibo.com/weibo?q=%23AI%E6%94%AF%E4%BB%98%23) `615.4K 🔥` `NEW`
1. [南部档案海鲜小队团魂燃起来了](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%E6%B5%B7%E9%B2%9C%E5%B0%8F%E9%98%9F%E5%9B%A2%E9%AD%82%E7%87%83%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `485.3K 🔥` `NEW`
1. [白鹿跑男上班](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%B7%91%E7%94%B7%E4%B8%8A%E7%8F%AD%23) `465.9K 🔥` `NEW`
1. [浪7总决赛嘉宾](https://s.weibo.com/weibo?q=%23%E6%B5%AA7%E6%80%BB%E5%86%B3%E8%B5%9B%E5%98%89%E5%AE%BE%23) `400.1K 🔥` `NEW`
1. [当专家说只睡四个小时没影响](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%B8%93%E5%AE%B6%E8%AF%B4%E5%8F%AA%E7%9D%A1%E5%9B%9B%E4%B8%AA%E5%B0%8F%E6%97%B6%E6%B2%A1%E5%BD%B1%E5%93%8D%23) `396.1K 🔥` `NEW`
1. [威胁中国驻日使馆安全事件不断发生 (Incidents threatening the security of the Chinese Embassy in Japan continue to occur)](https://s.weibo.com/weibo?q=%23%E5%A8%81%E8%83%81%E4%B8%AD%E5%9B%BD%E9%A9%BB%E6%97%A5%E4%BD%BF%E9%A6%86%E5%AE%89%E5%85%A8%E4%BA%8B%E4%BB%B6%E4%B8%8D%E6%96%AD%E5%8F%91%E7%94%9F%23) `393.0K 🔥` `NEW`
1. [杨紫 把腿合上](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%20%E6%8A%8A%E8%85%BF%E5%90%88%E4%B8%8A%23) `390.3K 🔥` `NEW`
1. [男童被砸死小区撤掉所有大理石桌](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E8%A2%AB%E7%A0%B8%E6%AD%BB%E5%B0%8F%E5%8C%BA%E6%92%A4%E6%8E%89%E6%89%80%E6%9C%89%E5%A4%A7%E7%90%86%E7%9F%B3%E6%A1%8C%23) `385.3K 🔥` `NEW`
1. [面试遇到豆包味很浓的应届生](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E9%81%87%E5%88%B0%E8%B1%86%E5%8C%85%E5%91%B3%E5%BE%88%E6%B5%93%E7%9A%84%E5%BA%94%E5%B1%8A%E7%94%9F%23) `383.3K 🔥` `NEW`
1. [山姆首席采购官辞职](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E9%A6%96%E5%B8%AD%E9%87%87%E8%B4%AD%E5%AE%98%E8%BE%9E%E8%81%8C%23) `377.4K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `374.8K 🔥` `NEW`
1. [向佐谈被向华强前妻抚养两年](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E8%B0%88%E8%A2%AB%E5%90%91%E5%8D%8E%E5%BC%BA%E5%89%8D%E5%A6%BB%E6%8A%9A%E5%85%BB%E4%B8%A4%E5%B9%B4%23) `371.9K 🔥` `NEW`
1. [被梅西踩小腿球员说梅西历史最佳](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%A2%85%E8%A5%BF%E8%B8%A9%E5%B0%8F%E8%85%BF%E7%90%83%E5%91%98%E8%AF%B4%E6%A2%85%E8%A5%BF%E5%8E%86%E5%8F%B2%E6%9C%80%E4%BD%B3%23) `343.9K 🔥` `NEW`
1. [仙逆从成毅张凌赫传到龚俊了](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%E4%BB%8E%E6%88%90%E6%AF%85%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BC%A0%E5%88%B0%E9%BE%9A%E4%BF%8A%E4%BA%86%23) `338.2K 🔥` `NEW`
1. [京东请客](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E8%AF%B7%E5%AE%A2%23) `337.2K 🔥` `NEW`
1. [黄百鸣入狱服刑 (Huang Baiming was imprisoned and served his sentence)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%99%BE%E9%B8%A3%E5%85%A5%E7%8B%B1%E6%9C%8D%E5%88%91%23) `336.5K 🔥` `NEW`
1. [哈兰德夺冠100吨狂送](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A4%BA%E5%86%A0100%E5%90%A8%E7%8B%82%E9%80%81%23) `335.3K 🔥` `NEW`
1. [外卖餐食中有血迹顾客紧急服阻断药](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E9%A4%90%E9%A3%9F%E4%B8%AD%E6%9C%89%E8%A1%80%E8%BF%B9%E9%A1%BE%E5%AE%A2%E7%B4%A7%E6%80%A5%E6%9C%8D%E9%98%BB%E6%96%AD%E8%8D%AF%23) `332.5K 🔥` `NEW`
1. [薛之谦是梅西脑残粉](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%98%AF%E6%A2%85%E8%A5%BF%E8%84%91%E6%AE%8B%E7%B2%89%23) `330.3K 🔥` `NEW`
1. [曝霍启山和娜然要结婚了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9C%8D%E5%90%AF%E5%B1%B1%E5%92%8C%E5%A8%9C%E7%84%B6%E8%A6%81%E7%BB%93%E5%A9%9A%E4%BA%86%23) `328.0K 🔥` `NEW`
1. [SpaceX华裔女工程师辟谣](https://s.weibo.com/weibo?q=%23SpaceX%E5%8D%8E%E8%A3%94%E5%A5%B3%E5%B7%A5%E7%A8%8B%E5%B8%88%E8%BE%9F%E8%B0%A3%23) `327.4K 🔥` `NEW`
1. [离婚和一个人带孩子都是吴倩自己选的](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%A9%9A%E5%92%8C%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%B8%A6%E5%AD%A9%E5%AD%90%E9%83%BD%E6%98%AF%E5%90%B4%E5%80%A9%E8%87%AA%E5%B7%B1%E9%80%89%E7%9A%84%23) `326.0K 🔥` `NEW`
1. [林俊杰女友七七举报网友](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%A5%B3%E5%8F%8B%E4%B8%83%E4%B8%83%E4%B8%BE%E6%8A%A5%E7%BD%91%E5%8F%8B%23) `325.1K 🔥` `NEW`
1. [梅西疑似红牌动作](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E7%96%91%E4%BC%BC%E7%BA%A2%E7%89%8C%E5%8A%A8%E4%BD%9C%23) `323.2K 🔥` `NEW`
1. [向佐为热度和钱哄郭碧婷上综艺](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E4%B8%BA%E7%83%AD%E5%BA%A6%E5%92%8C%E9%92%B1%E5%93%84%E9%83%AD%E7%A2%A7%E5%A9%B7%E4%B8%8A%E7%BB%BC%E8%89%BA%23) `315.6K 🔥` `NEW`
1. [昀牵孟绕系安全带 (Please wear your seat belt)](https://s.weibo.com/weibo?q=%23%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95%E7%B3%BB%E5%AE%89%E5%85%A8%E5%B8%A6%23) `292.4K 🔥` `NEW`
1. [让阿根廷球迷泪目的痛楼](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E8%BF%B7%E6%B3%AA%E7%9B%AE%E7%9A%84%E7%97%9B%E6%A5%BC%23) `282.2K 🔥` `NEW`
1. [问界M6拆出硬实力](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM6%E6%8B%86%E5%87%BA%E7%A1%AC%E5%AE%9E%E5%8A%9B%23) `279.7K 🔥` `NEW`
1. [爷爷去世后13岁女孩被大伯起诉](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E5%8E%BB%E4%B8%96%E5%90%8E13%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%A2%AB%E5%A4%A7%E4%BC%AF%E8%B5%B7%E8%AF%89%23) `279.7K 🔥` `NEW`
1. [豆包DeepSeek答题两极分化](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85DeepSeek%E7%AD%94%E9%A2%98%E4%B8%A4%E6%9E%81%E5%88%86%E5%8C%96%23) `260.9K 🔥` `NEW`
1. [梅西打破了C罗保持的帽子戏法纪录](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E6%89%93%E7%A0%B4%E4%BA%86C%E7%BD%97%E4%BF%9D%E6%8C%81%E7%9A%84%E5%B8%BD%E5%AD%90%E6%88%8F%E6%B3%95%E7%BA%AA%E5%BD%95%23) `240.9K 🔥` `NEW`
1. [李连杰谢苗合照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%BF%9E%E6%9D%B0%E8%B0%A2%E8%8B%97%E5%90%88%E7%85%A7%23) `233.9K 🔥` `NEW`
1. [莫离编剧风染白被曝隐瞒事实](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E7%BC%96%E5%89%A7%E9%A3%8E%E6%9F%93%E7%99%BD%E8%A2%AB%E6%9B%9D%E9%9A%90%E7%9E%92%E4%BA%8B%E5%AE%9E%23) `231.3K 🔥` `NEW`
1. [翘楚拍一部古偶送3部现偶](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E6%8B%8D%E4%B8%80%E9%83%A8%E5%8F%A4%E5%81%B6%E9%80%813%E9%83%A8%E7%8E%B0%E5%81%B6%23) `222.1K 🔥` `NEW`
1. [店方回应不吃火锅是没钱没爱情文案](https://s.weibo.com/weibo?q=%23%E5%BA%97%E6%96%B9%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%90%83%E7%81%AB%E9%94%85%E6%98%AF%E6%B2%A1%E9%92%B1%E6%B2%A1%E7%88%B1%E6%83%85%E6%96%87%E6%A1%88%23) `216.6K 🔥` `NEW`
1. [JDG输TES后Tabe火力全开 (Tabe is on full fire after JDG loses to TES)](https://s.weibo.com/weibo?q=%23JDG%E8%BE%93TES%E5%90%8ETabe%E7%81%AB%E5%8A%9B%E5%85%A8%E5%BC%80%23) `210.7K 🔥` `NEW`
1. [京东给旅行生活加buff](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E7%BB%99%E6%97%85%E8%A1%8C%E7%94%9F%E6%B4%BB%E5%8A%A0buff%23) `192.6K 🔥` `NEW`
1. [马思纯 球衣天才](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%20%E7%90%83%E8%A1%A3%E5%A4%A9%E6%89%8D%23) `190.9K 🔥` `NEW`
1. [中方决定向伊朗等国提供援助](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%86%B3%E5%AE%9A%E5%90%91%E4%BC%8A%E6%9C%97%E7%AD%89%E5%9B%BD%E6%8F%90%E4%BE%9B%E6%8F%B4%E5%8A%A9%23) `173.8K 🔥` `NEW`
1. [阿根廷球迷今天全体计划有变](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E8%BF%B7%E4%BB%8A%E5%A4%A9%E5%85%A8%E4%BD%93%E8%AE%A1%E5%88%92%E6%9C%89%E5%8F%98%23) `172.3K 🔥` `NEW`
1. [杨紫在家也得偷偷点外卖](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%9C%A8%E5%AE%B6%E4%B9%9F%E5%BE%97%E5%81%B7%E5%81%B7%E7%82%B9%E5%A4%96%E5%8D%96%23) `165.1K 🔥` `NEW`
1. [永远不要用力走向任何人](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BF%9C%E4%B8%8D%E8%A6%81%E7%94%A8%E5%8A%9B%E8%B5%B0%E5%90%91%E4%BB%BB%E4%BD%95%E4%BA%BA%23) `164.3K 🔥` `NEW`
1. [白敬亭携问界M6纯电新版本登场](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E6%90%BA%E9%97%AE%E7%95%8CM6%E7%BA%AF%E7%94%B5%E6%96%B0%E7%89%88%E6%9C%AC%E7%99%BB%E5%9C%BA%23) `689.9K 🔥` `-40%`
1. [梅西帽子戏法 (Messi hat trick)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E5%B8%BD%E5%AD%90%E6%88%8F%E6%B3%95%23) `280.3K 🔥` `-97%`
1. [王楚然只能笑卢昱晓不敢笑](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%8F%AA%E8%83%BD%E7%AC%91%E5%8D%A2%E6%98%B1%E6%99%93%E4%B8%8D%E6%95%A2%E7%AC%91%23) `264.2K 🔥` `-80%`
1. [第一个发明这么吃辣条的是天才](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%91%E6%98%8E%E8%BF%99%E4%B9%88%E5%90%83%E8%BE%A3%E6%9D%A1%E7%9A%84%E6%98%AF%E5%A4%A9%E6%89%8D%23) `177.4K 🔥` `-63%`
1. [司机高速上睡了6次乘客录下全程 (The driver fell asleep 6 times on the highway and the passenger recorded the entire journey)](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E9%AB%98%E9%80%9F%E4%B8%8A%E7%9D%A1%E4%BA%866%E6%AC%A1%E4%B9%98%E5%AE%A2%E5%BD%95%E4%B8%8B%E5%85%A8%E7%A8%8B%23) `165.4K 🔥` `-85%`

Updated at 2026-06-17 17:59:51

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
