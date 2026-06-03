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

1. [主角大结局 (Protagonist finale)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E5%A4%A7%E7%BB%93%E5%B1%80%23) `1.7M 🔥` `NEW`
1. [女子花2万查丈夫出轨揪出辅警内鬼](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%8A%B12%E4%B8%87%E6%9F%A5%E4%B8%88%E5%A4%AB%E5%87%BA%E8%BD%A8%E6%8F%AA%E5%87%BA%E8%BE%85%E8%AD%A6%E5%86%85%E9%AC%BC%23) `920.0K 🔥` `NEW`
1. [一组数据看我国物流越跑越稳](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%BB%84%E6%95%B0%E6%8D%AE%E7%9C%8B%E6%88%91%E5%9B%BD%E7%89%A9%E6%B5%81%E8%B6%8A%E8%B7%91%E8%B6%8A%E7%A8%B3%23) `789.5K 🔥` `NEW`
1. [张宸逍夸王鹤棣 吴泽林捂耳朵](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B8%E9%80%8D%E5%A4%B8%E7%8E%8B%E9%B9%A4%E6%A3%A3%20%E5%90%B4%E6%B3%BD%E6%9E%97%E6%8D%82%E8%80%B3%E6%9C%B5%23) `775.7K 🔥` `NEW`
1. [男子11年前买29.7万元手机懊悔不已](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9011%E5%B9%B4%E5%89%8D%E4%B9%B029.7%E4%B8%87%E5%85%83%E6%89%8B%E6%9C%BA%E6%87%8A%E6%82%94%E4%B8%8D%E5%B7%B2%23) `546.3K 🔥` `NEW`
1. [女儿没怀疑自己饭量怀疑妈妈没交钱](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E6%B2%A1%E6%80%80%E7%96%91%E8%87%AA%E5%B7%B1%E9%A5%AD%E9%87%8F%E6%80%80%E7%96%91%E5%A6%88%E5%A6%88%E6%B2%A1%E4%BA%A4%E9%92%B1%23) `451.5K 🔥` `NEW`
1. [馒头从空气炸锅留学回来了](https://s.weibo.com/weibo?q=%23%E9%A6%92%E5%A4%B4%E4%BB%8E%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E7%95%99%E5%AD%A6%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `390.0K 🔥` `NEW`
1. [凯文加内特公开批评维克托文班亚马](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%96%87%E5%8A%A0%E5%86%85%E7%89%B9%E5%85%AC%E5%BC%80%E6%89%B9%E8%AF%84%E7%BB%B4%E5%85%8B%E6%89%98%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%23) `373.0K 🔥` `NEW`
1. [AI数据中心 淡水资源](https://s.weibo.com/weibo?q=%23AI%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%20%E6%B7%A1%E6%B0%B4%E8%B5%84%E6%BA%90%23) `371.9K 🔥` `NEW`
1. [忆秦娥掉下舞台](https://s.weibo.com/weibo?q=%23%E5%BF%86%E7%A7%A6%E5%A8%A5%E6%8E%89%E4%B8%8B%E8%88%9E%E5%8F%B0%23) `370.0K 🔥` `NEW`
1. [刘红兵和孩子都死了 (Liu Hongbing and her children are both dead.)](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BA%A2%E5%85%B5%E5%92%8C%E5%AD%A9%E5%AD%90%E9%83%BD%E6%AD%BB%E4%BA%86%23) `368.5K 🔥` `NEW`
1. [生理期结束的第一天](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%9C%9F%E7%BB%93%E6%9D%9F%E7%9A%84%E7%AC%AC%E4%B8%80%E5%A4%A9%23) `366.4K 🔥` `NEW`
1. [苏州大学副教授薛艳华去世](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E5%B7%9E%E5%A4%A7%E5%AD%A6%E5%89%AF%E6%95%99%E6%8E%88%E8%96%9B%E8%89%B3%E5%8D%8E%E5%8E%BB%E4%B8%96%23) `363.7K 🔥` `NEW`
1. [大家都叫奚梦瑶超模时的名字](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AE%B6%E9%83%BD%E5%8F%AB%E5%A5%9A%E6%A2%A6%E7%91%B6%E8%B6%85%E6%A8%A1%E6%97%B6%E7%9A%84%E5%90%8D%E5%AD%97%23) `361.5K 🔥` `NEW`
1. [被恶意仅退款2.36万卖家发声](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%81%B6%E6%84%8F%E4%BB%85%E9%80%80%E6%AC%BE2.36%E4%B8%87%E5%8D%96%E5%AE%B6%E5%8F%91%E5%A3%B0%23) `360.3K 🔥` `NEW`
1. [日本开始售卖黑白包装零食](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BC%80%E5%A7%8B%E5%94%AE%E5%8D%96%E9%BB%91%E7%99%BD%E5%8C%85%E8%A3%85%E9%9B%B6%E9%A3%9F%23) `358.2K 🔥` `NEW`
1. [主角 讨论都围绕剧情本身](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%20%E8%AE%A8%E8%AE%BA%E9%83%BD%E5%9B%B4%E7%BB%95%E5%89%A7%E6%83%85%E6%9C%AC%E8%BA%AB%23) `356.3K 🔥` `NEW`
1. [5月31条中日航线取消全部航班](https://s.weibo.com/weibo?q=%235%E6%9C%8831%E6%9D%A1%E4%B8%AD%E6%97%A5%E8%88%AA%E7%BA%BF%E5%8F%96%E6%B6%88%E5%85%A8%E9%83%A8%E8%88%AA%E7%8F%AD%23) `355.4K 🔥` `NEW`
1. [生父赌博13岁女孩坚定选择跟继母](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%88%B6%E8%B5%8C%E5%8D%9A13%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%9D%9A%E5%AE%9A%E9%80%89%E6%8B%A9%E8%B7%9F%E7%BB%A7%E6%AF%8D%23) `351.9K 🔥` `NEW`
1. [爱豆来演戏 演员去唱歌](https://s.weibo.com/weibo?q=%23%E7%88%B1%E8%B1%86%E6%9D%A5%E6%BC%94%E6%88%8F%20%E6%BC%94%E5%91%98%E5%8E%BB%E5%94%B1%E6%AD%8C%23) `351.1K 🔥` `NEW`
1. [杭州2个月抓蛇近900起创5年新高 (Nearly 900 snakes were caught in Hangzhou in two months, a five-year high)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E2%E4%B8%AA%E6%9C%88%E6%8A%93%E8%9B%87%E8%BF%91900%E8%B5%B7%E5%88%9B5%E5%B9%B4%E6%96%B0%E9%AB%98%23) `349.2K 🔥` `NEW`
1. [何猷君婚礼誓词没有贫穷](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A9%9A%E7%A4%BC%E8%AA%93%E8%AF%8D%E6%B2%A1%E6%9C%89%E8%B4%AB%E7%A9%B7%23) `346.7K 🔥` `NEW`
1. [奚梦瑶送粉丝发卡引争议](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E9%80%81%E7%B2%89%E4%B8%9D%E5%8F%91%E5%8D%A1%E5%BC%95%E4%BA%89%E8%AE%AE%23) `346.0K 🔥` `NEW`
1. [麦田也有一键智控的远程大脑](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E7%94%B0%E4%B9%9F%E6%9C%89%E4%B8%80%E9%94%AE%E6%99%BA%E6%8E%A7%E7%9A%84%E8%BF%9C%E7%A8%8B%E5%A4%A7%E8%84%91%23) `342.7K 🔥` `NEW`
1. [中国小姐姐卖麻糍分量太夸张](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%8F%E5%A7%90%E5%A7%90%E5%8D%96%E9%BA%BB%E7%B3%8D%E5%88%86%E9%87%8F%E5%A4%AA%E5%A4%B8%E5%BC%A0%23) `342.0K 🔥` `NEW`
1. [主角 死神来了](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%20%E6%AD%BB%E7%A5%9E%E6%9D%A5%E4%BA%86%23) `338.8K 🔥` `NEW`
1. [黄灿灿怎么说服陈瑶拍这个的](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%80%8E%E4%B9%88%E8%AF%B4%E6%9C%8D%E9%99%88%E7%91%B6%E6%8B%8D%E8%BF%99%E4%B8%AA%E7%9A%84%23) `338.5K 🔥` `NEW`
1. [印度 空调普及率](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%20%E7%A9%BA%E8%B0%83%E6%99%AE%E5%8F%8A%E7%8E%87%23) `316.2K 🔥` `NEW`
1. [中国小姐姐为了考研拆三平米房备考](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%8F%E5%A7%90%E5%A7%90%E4%B8%BA%E4%BA%86%E8%80%83%E7%A0%94%E6%8B%86%E4%B8%89%E5%B9%B3%E7%B1%B3%E6%88%BF%E5%A4%87%E8%80%83%23) `312.2K 🔥` `NEW`
1. [宋师去世](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%B8%88%E5%8E%BB%E4%B8%96%23) `311.9K 🔥` `NEW`
1. [天下苦黄仁勋久矣 (The world has been suffering for a long time Huang Renxun)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E4%B8%8B%E8%8B%A6%E9%BB%84%E4%BB%81%E5%8B%8B%E4%B9%85%E7%9F%A3%23) `310.4K 🔥` `NEW`
1. [13岁的张元英](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E7%9A%84%E5%BC%A0%E5%85%83%E8%8B%B1%23) `304.7K 🔥` `NEW`
1. [迪丽热巴回复好友祝福](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%9B%9E%E5%A4%8D%E5%A5%BD%E5%8F%8B%E7%A5%9D%E7%A6%8F%23) `277.6K 🔥` `NEW`
1. [这就是小孩职场](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E5%B0%8F%E5%AD%A9%E8%81%8C%E5%9C%BA%23) `267.9K 🔥` `NEW`
1. [家业大结局](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E5%A4%A7%E7%BB%93%E5%B1%80%23) `247.1K 🔥` `NEW`
1. [今年已有近百家村镇银行注销](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E5%B7%B2%E6%9C%89%E8%BF%91%E7%99%BE%E5%AE%B6%E6%9D%91%E9%95%87%E9%93%B6%E8%A1%8C%E6%B3%A8%E9%94%80%23) `232.4K 🔥` `NEW`
1. [王濛谈AI一人公司](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E8%B0%88AI%E4%B8%80%E4%BA%BA%E5%85%AC%E5%8F%B8%23) `228.3K 🔥` `NEW`
1. [曝白玉兰红毯顺序](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E7%8E%89%E5%85%B0%E7%BA%A2%E6%AF%AF%E9%A1%BA%E5%BA%8F%23) `227.2K 🔥` `NEW`
1. [时代少年团 苏州](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E8%8B%8F%E5%B7%9E%23) `211.2K 🔥` `NEW`
1. [女子爱喝冰饮胃癌晚期卵巢长肿瘤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%88%B1%E5%96%9D%E5%86%B0%E9%A5%AE%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E5%8D%B5%E5%B7%A2%E9%95%BF%E8%82%BF%E7%98%A4%23) `210.7K 🔥` `NEW`
1. [穆祉丞泡泡 (Mu Zhicheng Bubble)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%B3%A1%E6%B3%A1%23) `210.4K 🔥` `NEW`
1. [十日终焉在影视寒冬提供了大量岗位](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%9C%A8%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%E6%8F%90%E4%BE%9B%E4%BA%86%E5%A4%A7%E9%87%8F%E5%B2%97%E4%BD%8D%23) `197.1K 🔥` `NEW`
1. [女童出电梯被陌生男孩勒颈抱走](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%AB%A5%E5%87%BA%E7%94%B5%E6%A2%AF%E8%A2%AB%E9%99%8C%E7%94%9F%E7%94%B7%E5%AD%A9%E5%8B%92%E9%A2%88%E6%8A%B1%E8%B5%B0%23) `187.8K 🔥` `NEW`
1. [汪东城身高 基因彩票](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E4%B8%9C%E5%9F%8E%E8%BA%AB%E9%AB%98%20%E5%9F%BA%E5%9B%A0%E5%BD%A9%E7%A5%A8%23) `183.2K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `159.4K 🔥` `NEW`
1. [SpaceXA股供应商名单曝光](https://s.weibo.com/weibo?q=%23SpaceXA%E8%82%A1%E4%BE%9B%E5%BA%94%E5%95%86%E5%90%8D%E5%8D%95%E6%9B%9D%E5%85%89%23) `152.6K 🔥` `NEW`
1. [金钟仁买的半导体股票涨疯了](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%92%9F%E4%BB%81%E4%B9%B0%E7%9A%84%E5%8D%8A%E5%AF%BC%E4%BD%93%E8%82%A1%E7%A5%A8%E6%B6%A8%E7%96%AF%E4%BA%86%23) `152.4K 🔥` `NEW`
1. [男子买34层房收房得知只盖到32层](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B9%B034%E5%B1%82%E6%88%BF%E6%94%B6%E6%88%BF%E5%BE%97%E7%9F%A5%E5%8F%AA%E7%9B%96%E5%88%B032%E5%B1%82%23) `313.3K 🔥` `+32%`
1. [1290万人报名2026高考](https://s.weibo.com/weibo?q=%231290%E4%B8%87%E4%BA%BA%E6%8A%A5%E5%90%8D2026%E9%AB%98%E8%80%83%23) `312.2K 🔥`
1. [何猷君晒妈妈在婚礼上的照片](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E6%99%92%E5%A6%88%E5%A6%88%E5%9C%A8%E5%A9%9A%E7%A4%BC%E4%B8%8A%E7%9A%84%E7%85%A7%E7%89%87%23) `267.4K 🔥` `-26%`

Updated at 2026-06-03 20:06:16

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
