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

1. [恋与深空敖尹取消上线 (Love and Deep Space Ao Yin canceled online)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%95%96%E5%B0%B9%E5%8F%96%E6%B6%88%E4%B8%8A%E7%BA%BF%23) `23.8M 🔥` `NEW`
1. [教育部发布高考招生防诈骗预警](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E9%83%A8%E5%8F%91%E5%B8%83%E9%AB%98%E8%80%83%E6%8B%9B%E7%94%9F%E9%98%B2%E8%AF%88%E9%AA%97%E9%A2%84%E8%AD%A6%23) `1.9M 🔥` `NEW`
1. [鲁豫毫不妥协的热爱](https://s.weibo.com/weibo?q=%23%E9%B2%81%E8%B1%AB%E6%AF%AB%E4%B8%8D%E5%A6%A5%E5%8D%8F%E7%9A%84%E7%83%AD%E7%88%B1%23) `1.9M 🔥` `NEW`
1. [敖尹超话](https://s.weibo.com/weibo?q=%23%E6%95%96%E5%B0%B9%E8%B6%85%E8%AF%9D%23) `1.9M 🔥` `NEW`
1. [超级冷门他们先知道](https://s.weibo.com/weibo?q=%23%E8%B6%85%E7%BA%A7%E5%86%B7%E9%97%A8%E4%BB%96%E4%BB%AC%E5%85%88%E7%9F%A5%E9%81%93%23) `1.3M 🔥` `NEW`
1. [退休女子月入7899元登记困难职工](https://s.weibo.com/weibo?q=%23%E9%80%80%E4%BC%91%E5%A5%B3%E5%AD%90%E6%9C%88%E5%85%A57899%E5%85%83%E7%99%BB%E8%AE%B0%E5%9B%B0%E9%9A%BE%E8%81%8C%E5%B7%A5%23) `1.2M 🔥` `NEW`
1. [恋与深空四大调整](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9B%E5%A4%A7%E8%B0%83%E6%95%B4%23) `790.4K 🔥` `NEW`
1. [红米K90至尊版价格](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E7%B1%B3K90%E8%87%B3%E5%B0%8A%E7%89%88%E4%BB%B7%E6%A0%BC%23) `289.9K 🔥` `NEW`
1. [恋与深空不再推出新男主](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E4%B8%8D%E5%86%8D%E6%8E%A8%E5%87%BA%E6%96%B0%E7%94%B7%E4%B8%BB%23) `289.6K 🔥` `NEW`
1. [陈翔六点半妹爷扮演者去世](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%BF%94%E5%85%AD%E7%82%B9%E5%8D%8A%E5%A6%B9%E7%88%B7%E6%89%AE%E6%BC%94%E8%80%85%E5%8E%BB%E4%B8%96%23) `289.1K 🔥` `NEW`
1. [沈梦辰张凌赫同款文案 (Shen Mengchen and Zhang Linghe's same style copywriting)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%8C%E6%AC%BE%E6%96%87%E6%A1%88%23) `288.4K 🔥` `NEW`
1. [女乘务员悄悄拉走女生换车厢](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B9%98%E5%8A%A1%E5%91%98%E6%82%84%E6%82%84%E6%8B%89%E8%B5%B0%E5%A5%B3%E7%94%9F%E6%8D%A2%E8%BD%A6%E5%8E%A2%23) `287.6K 🔥` `NEW`
1. [红米发布会现场秒变电竞比赛](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E7%B1%B3%E5%8F%91%E5%B8%83%E4%BC%9A%E7%8E%B0%E5%9C%BA%E7%A7%92%E5%8F%98%E7%94%B5%E7%AB%9E%E6%AF%94%E8%B5%9B%23) `286.4K 🔥` `NEW`
1. [Prada官宣登陆少年组合](https://s.weibo.com/weibo?q=%23Prada%E5%AE%98%E5%AE%A3%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4%E7%BB%84%E5%90%88%23) `286.2K 🔥` `NEW`
1. [A股上半年股王涨超770%](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%8A%E5%8D%8A%E5%B9%B4%E8%82%A1%E7%8E%8B%E6%B6%A8%E8%B6%85770%25%23) `285.3K 🔥` `NEW`
1. [极氪OTA](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AAOTA%23) `284.9K 🔥` `NEW`
1. [江苏一工地挖出僧人圆寂坐缸容器](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E4%B8%80%E5%B7%A5%E5%9C%B0%E6%8C%96%E5%87%BA%E5%83%A7%E4%BA%BA%E5%9C%86%E5%AF%82%E5%9D%90%E7%BC%B8%E5%AE%B9%E5%99%A8%23) `283.3K 🔥` `NEW`
1. [野生炸姐被抓呼吁彻查买稿方](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%94%9F%E7%82%B8%E5%A7%90%E8%A2%AB%E6%8A%93%E5%91%BC%E5%90%81%E5%BD%BB%E6%9F%A5%E4%B9%B0%E7%A8%BF%E6%96%B9%23) `281.8K 🔥` `NEW`
1. [金鹰奖最佳女主角参评名单公布](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E8%A7%92%E5%8F%82%E8%AF%84%E5%90%8D%E5%8D%95%E5%85%AC%E5%B8%83%23) `281.3K 🔥` `NEW`
1. [张月以为刘亦菲很高冷](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E4%BB%A5%E4%B8%BA%E5%88%98%E4%BA%A6%E8%8F%B2%E5%BE%88%E9%AB%98%E5%86%B7%23) `280.3K 🔥` `NEW`
1. [王橹杰忧郁 (Wang Lujie is depressed)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%BF%A7%E9%83%81%23) `279.3K 🔥` `NEW`
1. [一个人好命是什么样子](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%A5%BD%E5%91%BD%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E5%AD%90%23) `261.8K 🔥` `NEW`
1. [28岁羊水栓塞产妇宝宝已可以出院](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%E4%BA%A7%E5%A6%87%E5%AE%9D%E5%AE%9D%E5%B7%B2%E5%8F%AF%E4%BB%A5%E5%87%BA%E9%99%A2%23) `210.6K 🔥` `NEW`
1. [当代人空调观不合现状](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BB%A3%E4%BA%BA%E7%A9%BA%E8%B0%83%E8%A7%82%E4%B8%8D%E5%90%88%E7%8E%B0%E7%8A%B6%23) `204.0K 🔥` `NEW`
1. [杨博文 学习机](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%20%E5%AD%A6%E4%B9%A0%E6%9C%BA%23) `201.7K 🔥` `NEW`
1. [格力称好空调不是PPT包装出来的](https://s.weibo.com/weibo?q=%23%E6%A0%BC%E5%8A%9B%E7%A7%B0%E5%A5%BD%E7%A9%BA%E8%B0%83%E4%B8%8D%E6%98%AFPPT%E5%8C%85%E8%A3%85%E5%87%BA%E6%9D%A5%E7%9A%84%23) `191.1K 🔥` `NEW`
1. [半熟恋人](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E7%86%9F%E6%81%8B%E4%BA%BA%23) `187.3K 🔥` `NEW`
1. [能设计出来的是人才能做出来的是天才](https://s.weibo.com/weibo?q=%23%E8%83%BD%E8%AE%BE%E8%AE%A1%E5%87%BA%E6%9D%A5%E7%9A%84%E6%98%AF%E4%BA%BA%E6%89%8D%E8%83%BD%E5%81%9A%E5%87%BA%E6%9D%A5%E7%9A%84%E6%98%AF%E5%A4%A9%E6%89%8D%23) `181.3K 🔥` `NEW`
1. [男生4年练一个字体高考英语147分](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F4%E5%B9%B4%E7%BB%83%E4%B8%80%E4%B8%AA%E5%AD%97%E4%BD%93%E9%AB%98%E8%80%83%E8%8B%B1%E8%AF%AD147%E5%88%86%23) `179.3K 🔥` `NEW`
1. [海信空调法国暴涨100%](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E4%BF%A1%E7%A9%BA%E8%B0%83%E6%B3%95%E5%9B%BD%E6%9A%B4%E6%B6%A8100%25%23) `177.0K 🔥` `NEW`
1. [张江企业外籍组长垄断核心代码 (Zhangjiang enterprise foreign team leader monopolizes core code)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B1%9F%E4%BC%81%E4%B8%9A%E5%A4%96%E7%B1%8D%E7%BB%84%E9%95%BF%E5%9E%84%E6%96%AD%E6%A0%B8%E5%BF%83%E4%BB%A3%E7%A0%81%23) `176.5K 🔥` `NEW`
1. [丁禹兮来接你回家了海侠](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%9D%A5%E6%8E%A5%E4%BD%A0%E5%9B%9E%E5%AE%B6%E4%BA%86%E6%B5%B7%E4%BE%A0%23) `171.6K 🔥` `NEW`
1. [黄多多首部电影重新立项](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E9%A6%96%E9%83%A8%E7%94%B5%E5%BD%B1%E9%87%8D%E6%96%B0%E7%AB%8B%E9%A1%B9%23) `141.6K 🔥` `NEW`
1. [德国队已原地解散 (The German team has been disbanded)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E9%98%9F%E5%B7%B2%E5%8E%9F%E5%9C%B0%E8%A7%A3%E6%95%A3%23) `2.2M 🔥` `+49%`
1. [白鹿演蚌精vs虞书欣演蚌精](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%BC%94%E8%9A%8C%E7%B2%BEvs%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%BC%94%E8%9A%8C%E7%B2%BE%23) `1.8M 🔥` `+715%`
1. [多囊卵巢综合征正式更名](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%8A%E5%8D%B5%E5%B7%A2%E7%BB%BC%E5%90%88%E5%BE%81%E6%AD%A3%E5%BC%8F%E6%9B%B4%E5%90%8D%23) `1.4M 🔥` `+194%`
1. [沈梦辰哪个是杜海涛哪个是张凌赫](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E5%93%AA%E4%B8%AA%E6%98%AF%E6%9D%9C%E6%B5%B7%E6%B6%9B%E5%93%AA%E4%B8%AA%E6%98%AF%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `812.6K 🔥` `+268%`
1. [杨紫爸爸回应杨紫改名 (Yang Zi’s father responded to Yang Zi’s name change)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%88%B8%E7%88%B8%E5%9B%9E%E5%BA%94%E6%9D%A8%E7%B4%AB%E6%94%B9%E5%90%8D%23) `287.0K 🔥` `+31%`
1. [夫妻月入两万被登记困难职工引质疑](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E6%9C%88%E5%85%A5%E4%B8%A4%E4%B8%87%E8%A2%AB%E7%99%BB%E8%AE%B0%E5%9B%B0%E9%9A%BE%E8%81%8C%E5%B7%A5%E5%BC%95%E8%B4%A8%E7%96%91%23) `284.4K 🔥` `+30%`
1. [现在就出发4](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `282.8K 🔥` `+29%`
1. [27岁就这样了很精彩](https://s.weibo.com/weibo?q=%2327%E5%B2%81%E5%B0%B1%E8%BF%99%E6%A0%B7%E4%BA%86%E5%BE%88%E7%B2%BE%E5%BD%A9%23) `282.5K 🔥` `+64%`
1. [乒乓球收视率远不及世界杯](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E6%94%B6%E8%A7%86%E7%8E%87%E8%BF%9C%E4%B8%8D%E5%8F%8A%E4%B8%96%E7%95%8C%E6%9D%AF%23) `280.8K 🔥` `+29%`
1. [张家界玻璃桥印度游客堵塞栈道 (Zhangjiajie Glass Bridge Indian tourists block the plank road)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E7%95%8C%E7%8E%BB%E7%92%83%E6%A1%A5%E5%8D%B0%E5%BA%A6%E6%B8%B8%E5%AE%A2%E5%A0%B5%E5%A1%9E%E6%A0%88%E9%81%93%23) `262.4K 🔥` `+21%`
1. [A股上半年10大牛股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%8A%E5%8D%8A%E5%B9%B410%E5%A4%A7%E7%89%9B%E8%82%A1%23) `263.5K 🔥`
1. [杨紫父亲称杨旎奥全国没有重名](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%88%B6%E4%BA%B2%E7%A7%B0%E6%9D%A8%E6%97%8E%E5%A5%A5%E5%85%A8%E5%9B%BD%E6%B2%A1%E6%9C%89%E9%87%8D%E5%90%8D%23) `262.1K 🔥`
1. [Angelababy 我保证她是天使 (Angelababy I promise she is an angel)](https://s.weibo.com/weibo?q=%23Angelababy%20%E6%88%91%E4%BF%9D%E8%AF%81%E5%A5%B9%E6%98%AF%E5%A4%A9%E4%BD%BF%23) `235.7K 🔥`
1. [恋与深空将引狼入室浪漫化不可取](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%B0%86%E5%BC%95%E7%8B%BC%E5%85%A5%E5%AE%A4%E6%B5%AA%E6%BC%AB%E5%8C%96%E4%B8%8D%E5%8F%AF%E5%8F%96%23) `229.7K 🔥`
1. [沈月陈鑫海贺峻霖合照](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E9%99%88%E9%91%AB%E6%B5%B7%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%90%88%E7%85%A7%23) `228.5K 🔥`
1. [现在就出发4 接原班人马](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%20%E6%8E%A5%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%23) `210.8K 🔥`
1. [韩红基金会回应博主称捐赠后无记录](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E5%9B%9E%E5%BA%94%E5%8D%9A%E4%B8%BB%E7%A7%B0%E6%8D%90%E8%B5%A0%E5%90%8E%E6%97%A0%E8%AE%B0%E5%BD%95%23) `210.3K 🔥`
1. [金鹰奖最佳女主角候选](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E8%A7%92%E5%80%99%E9%80%89%23) `260.0K 🔥` `-43%`
1. [日本在外网翻车](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%A8%E5%A4%96%E7%BD%91%E7%BF%BB%E8%BD%A6%23) `189.4K 🔥` `-79%`

Updated at 2026-06-30 21:30:07

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
