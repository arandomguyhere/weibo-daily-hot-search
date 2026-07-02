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

1. [茉莉奶白换彩色头像 (Jasmine milk white to color avatar)](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E6%8D%A2%E5%BD%A9%E8%89%B2%E5%A4%B4%E5%83%8F%23) `1.1M 🔥` `NEW`
1. [中方代表将出席哈梅内伊葬礼](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E4%BB%A3%E8%A1%A8%E5%B0%86%E5%87%BA%E5%B8%AD%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E8%91%AC%E7%A4%BC%23) `794.5K 🔥` `NEW`
1. [影视飓风 直播事故](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%20%E7%9B%B4%E6%92%AD%E4%BA%8B%E6%95%85%23) `331.0K 🔥` `NEW`
1. [野狗骨头定档](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E5%AE%9A%E6%A1%A3%23) `321.2K 🔥` `NEW`
1. [LV 唐代宝相花纹](https://s.weibo.com/weibo?q=%23LV%20%E5%94%90%E4%BB%A3%E5%AE%9D%E7%9B%B8%E8%8A%B1%E7%BA%B9%23) `306.1K 🔥` `NEW`
1. [小鹏MONAL03更懂年轻人](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONAL03%E6%9B%B4%E6%87%82%E5%B9%B4%E8%BD%BB%E4%BA%BA%23) `298.0K 🔥` `NEW`
1. [泰山景区多次就隔离网招投标](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%B1%B1%E6%99%AF%E5%8C%BA%E5%A4%9A%E6%AC%A1%E5%B0%B1%E9%9A%94%E7%A6%BB%E7%BD%91%E6%8B%9B%E6%8A%95%E6%A0%87%23) `254.5K 🔥` `NEW`
1. [LV你身后空无一人](https://s.weibo.com/weibo?q=%23LV%E4%BD%A0%E8%BA%AB%E5%90%8E%E7%A9%BA%E6%97%A0%E4%B8%80%E4%BA%BA%23) `247.3K 🔥` `NEW`
1. [宇树科技IPO注册获批](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80IPO%E6%B3%A8%E5%86%8C%E8%8E%B7%E6%89%B9%23) `238.4K 🔥` `NEW`
1. [世界杯变内讧杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%8F%98%E5%86%85%E8%AE%A7%E6%9D%AF%23) `236.9K 🔥` `NEW`
1. [显示欠款一千万亿男子最新发声 (Latest comments from a man who owes 1 trillion yuan)](https://s.weibo.com/weibo?q=%23%E6%98%BE%E7%A4%BA%E6%AC%A0%E6%AC%BE%E4%B8%80%E5%8D%83%E4%B8%87%E4%BA%BF%E7%94%B7%E5%AD%90%E6%9C%80%E6%96%B0%E5%8F%91%E5%A3%B0%23) `236.2K 🔥` `NEW`
1. [广州长隆一角马争领地撞翻同事](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E9%95%BF%E9%9A%86%E4%B8%80%E8%A7%92%E9%A9%AC%E4%BA%89%E9%A2%86%E5%9C%B0%E6%92%9E%E7%BF%BB%E5%90%8C%E4%BA%8B%23) `234.8K 🔥` `NEW`
1. [白鹿 喝茶替身](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E5%96%9D%E8%8C%B6%E6%9B%BF%E8%BA%AB%23) `234.1K 🔥` `NEW`
1. [办公室已经三天没人开口说话了](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E5%85%AC%E5%AE%A4%E5%B7%B2%E7%BB%8F%E4%B8%89%E5%A4%A9%E6%B2%A1%E4%BA%BA%E5%BC%80%E5%8F%A3%E8%AF%B4%E8%AF%9D%E4%BA%86%23) `232.7K 🔥` `NEW`
1. [陈昊森承认与兰西雅恋爱](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%8A%E6%A3%AE%E6%89%BF%E8%AE%A4%E4%B8%8E%E5%85%B0%E8%A5%BF%E9%9B%85%E6%81%8B%E7%88%B1%23) `231.7K 🔥` `NEW`
1. [香港名媛不帮郭富城方媛P图被骂](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%90%8D%E5%AA%9B%E4%B8%8D%E5%B8%AE%E9%83%AD%E5%AF%8C%E5%9F%8E%E6%96%B9%E5%AA%9BP%E5%9B%BE%E8%A2%AB%E9%AA%82%23) `230.7K 🔥` `NEW`
1. [茉莉奶白有点不舒服了](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E6%9C%89%E7%82%B9%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `229.2K 🔥` `NEW`
1. [LV 欺负古代人不会注册商标](https://s.weibo.com/weibo?q=%23LV%20%E6%AC%BA%E8%B4%9F%E5%8F%A4%E4%BB%A3%E4%BA%BA%E4%B8%8D%E4%BC%9A%E6%B3%A8%E5%86%8C%E5%95%86%E6%A0%87%23) `228.7K 🔥` `NEW`
1. [杨紫全家福](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%85%A8%E5%AE%B6%E7%A6%8F%23) `228.0K 🔥` `NEW`
1. [保剑锋黄慧颐已达成和解](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%89%91%E9%94%8B%E9%BB%84%E6%85%A7%E9%A2%90%E5%B7%B2%E8%BE%BE%E6%88%90%E5%92%8C%E8%A7%A3%23) `225.2K 🔥` `NEW`
1. [泰国人来了内娱也得叫原名吗 (Do Thais have to be called by their original names when they come to domestic entertainment?)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E4%BA%BA%E6%9D%A5%E4%BA%86%E5%86%85%E5%A8%B1%E4%B9%9F%E5%BE%97%E5%8F%AB%E5%8E%9F%E5%90%8D%E5%90%97%23) `223.0K 🔥` `NEW`
1. [小县城的瑜伽馆审美](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8E%BF%E5%9F%8E%E7%9A%84%E7%91%9C%E4%BC%BD%E9%A6%86%E5%AE%A1%E7%BE%8E%23) `221.3K 🔥` `NEW`
1. [田曦薇虞书欣白鹿陈都灵打戏对比](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%99%BD%E9%B9%BF%E9%99%88%E9%83%BD%E7%81%B5%E6%89%93%E6%88%8F%E5%AF%B9%E6%AF%94%23) `220.6K 🔥` `NEW`
1. [TF三代 三十六计](https://s.weibo.com/weibo?q=%23TF%E4%B8%89%E4%BB%A3%20%E4%B8%89%E5%8D%81%E5%85%AD%E8%AE%A1%23) `218.8K 🔥` `NEW`
1. [王楚然咳嗽一直不好的原因](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%92%B3%E5%97%BD%E4%B8%80%E7%9B%B4%E4%B8%8D%E5%A5%BD%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `217.2K 🔥` `NEW`
1. [西安赛格运营公司回应商户坠楼](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E8%B5%9B%E6%A0%BC%E8%BF%90%E8%90%A5%E5%85%AC%E5%8F%B8%E5%9B%9E%E5%BA%94%E5%95%86%E6%88%B7%E5%9D%A0%E6%A5%BC%23) `215.9K 🔥` `NEW`
1. [张新成被法国男人抛媚眼](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%96%B0%E6%88%90%E8%A2%AB%E6%B3%95%E5%9B%BD%E7%94%B7%E4%BA%BA%E6%8A%9B%E5%AA%9A%E7%9C%BC%23) `215.0K 🔥` `NEW`
1. [工作后特别讨厌只发问号的人](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%90%8E%E7%89%B9%E5%88%AB%E8%AE%A8%E5%8E%8C%E5%8F%AA%E5%8F%91%E9%97%AE%E5%8F%B7%E7%9A%84%E4%BA%BA%23) `214.2K 🔥` `NEW`
1. [西安赛格商场高层多处栏杆已加护栏](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E8%B5%9B%E6%A0%BC%E5%95%86%E5%9C%BA%E9%AB%98%E5%B1%82%E5%A4%9A%E5%A4%84%E6%A0%8F%E6%9D%86%E5%B7%B2%E5%8A%A0%E6%8A%A4%E6%A0%8F%23) `212.4K 🔥` `NEW`
1. [DYG对战RW](https://s.weibo.com/weibo?q=%23DYG%E5%AF%B9%E6%88%98RW%23) `212.0K 🔥` `NEW`
1. [男篮世预赛 (Men's Basketball World Cup Qualifiers)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AF%AE%E4%B8%96%E9%A2%84%E8%B5%9B%23) `211.0K 🔥` `NEW`
1. [成毅新剧狩谎开机](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E6%96%B0%E5%89%A7%E7%8B%A9%E8%B0%8E%E5%BC%80%E6%9C%BA%23) `207.8K 🔥` `NEW`
1. [终于明白婚礼前彩排的重要性了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%98%8E%E7%99%BD%E5%A9%9A%E7%A4%BC%E5%89%8D%E5%BD%A9%E6%8E%92%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7%E4%BA%86%23) `205.2K 🔥` `NEW`
1. [百花杀灿如繁星野狗骨头对打](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E5%AF%B9%E6%89%93%23) `204.1K 🔥` `NEW`
1. [连潘玮柏都说难吃得多难吃](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E6%BD%98%E7%8E%AE%E6%9F%8F%E9%83%BD%E8%AF%B4%E9%9A%BE%E5%90%83%E5%BE%97%E5%A4%9A%E9%9A%BE%E5%90%83%23) `202.9K 🔥` `NEW`
1. [茉莉奶白多枚四叶花卉商标被驳回](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E5%A4%9A%E6%9E%9A%E5%9B%9B%E5%8F%B6%E8%8A%B1%E5%8D%89%E5%95%86%E6%A0%87%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `201.9K 🔥` `NEW`
1. [别在外卖备注上抖机灵了](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%9C%A8%E5%A4%96%E5%8D%96%E5%A4%87%E6%B3%A8%E4%B8%8A%E6%8A%96%E6%9C%BA%E7%81%B5%E4%BA%86%23) `304.2K 🔥`
1. [台风暴雨在路上了](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E6%9A%B4%E9%9B%A8%E5%9C%A8%E8%B7%AF%E4%B8%8A%E4%BA%86%23) `605.6K 🔥` `-50%`
1. [半导体](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%AF%BC%E4%BD%93%23) `332.7K 🔥` `-77%`
1. [菲拉格慕全球品牌代言人张钧甯](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E6%8B%89%E6%A0%BC%E6%85%95%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E5%BC%A0%E9%92%A7%E7%94%AF%23) `312.2K 🔥` `-33%`
1. [月入过万年薪也才12万 (Monthly income exceeds 10,000, but annual salary is only 120,000)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E5%85%A5%E8%BF%87%E4%B8%87%E5%B9%B4%E8%96%AA%E4%B9%9F%E6%89%8D12%E4%B8%87%23) `306.0K 🔥` `-74%`
1. [LV起诉茉莉奶白判赔1030万 (LV sues Jasmine Milk and awards 10.3 million yuan in damages)](https://s.weibo.com/weibo?q=%23LV%E8%B5%B7%E8%AF%89%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E5%88%A4%E8%B5%941030%E4%B8%87%23) `270.6K 🔥` `-96%`
1. [王俊凯工作室疑似手滑](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%96%91%E4%BC%BC%E6%89%8B%E6%BB%91%23) `239.6K 🔥` `-27%`
1. [怕给赵丽颖丢人拒绝同台](https://s.weibo.com/weibo?q=%23%E6%80%95%E7%BB%99%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%B8%A2%E4%BA%BA%E6%8B%92%E7%BB%9D%E5%90%8C%E5%8F%B0%23) `239.5K 🔥` `-26%`
1. [难怪奚梦瑶可以在赌王家族站稳脚跟](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%8F%AF%E4%BB%A5%E5%9C%A8%E8%B5%8C%E7%8E%8B%E5%AE%B6%E6%97%8F%E7%AB%99%E7%A8%B3%E8%84%9A%E8%B7%9F%23) `226.6K 🔥` `-29%`
1. [身份证里有八根半永久头发](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E9%87%8C%E6%9C%89%E5%85%AB%E6%A0%B9%E5%8D%8A%E6%B0%B8%E4%B9%85%E5%A4%B4%E5%8F%91%23) `224.7K 🔥` `-74%`
1. [Tim和中国boy疑似打架](https://s.weibo.com/weibo?q=%23Tim%E5%92%8C%E4%B8%AD%E5%9B%BDboy%E7%96%91%E4%BC%BC%E6%89%93%E6%9E%B6%23) `221.7K 🔥` `-65%`
1. [老人手动关400斤电动门被砸进ICU](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%89%8B%E5%8A%A8%E5%85%B3400%E6%96%A4%E7%94%B5%E5%8A%A8%E9%97%A8%E8%A2%AB%E7%A0%B8%E8%BF%9BICU%23) `217.7K 🔥` `-31%`
1. [茉莉奶白将上诉](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E5%B0%86%E4%B8%8A%E8%AF%89%23) `209.7K 🔥` `-58%`
1. [伊拉克女议员家中搜出黄金内衣](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%8B%89%E5%85%8B%E5%A5%B3%E8%AE%AE%E5%91%98%E5%AE%B6%E4%B8%AD%E6%90%9C%E5%87%BA%E9%BB%84%E9%87%91%E5%86%85%E8%A1%A3%23) `208.4K 🔥` `-33%`
1. [香港演员梁珊离世](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%BC%94%E5%91%98%E6%A2%81%E7%8F%8A%E7%A6%BB%E4%B8%96%23) `205.9K 🔥` `-32%`

Updated at 2026-07-02 19:19:28

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
