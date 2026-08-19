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

1. [胖东来 刑期五年以上门槛 (Fat Donglai’s sentence exceeds the threshold of five years)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%20%E5%88%91%E6%9C%9F%E4%BA%94%E5%B9%B4%E4%BB%A5%E4%B8%8A%E9%97%A8%E6%A7%9B%23) `1.3M 🔥` `NEW`
1. [巩立姣还要减重20斤](https://s.weibo.com/weibo?q=%23%E5%B7%A9%E7%AB%8B%E5%A7%A3%E8%BF%98%E8%A6%81%E5%87%8F%E9%87%8D20%E6%96%A4%23) `1.2M 🔥` `NEW`
1. [电影空枪发了声明](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E7%A9%BA%E6%9E%AA%E5%8F%91%E4%BA%86%E5%A3%B0%E6%98%8E%23) `868.6K 🔥` `NEW`
1. [昀牵孟绕](https://s.weibo.com/weibo?q=%23%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95%23) `800.8K 🔥` `NEW`
1. [iPhone17涨价倒计时](https://s.weibo.com/weibo?q=%23iPhone17%E6%B6%A8%E4%BB%B7%E5%80%92%E8%AE%A1%E6%97%B6%23) `735.9K 🔥` `NEW`
1. [孟子义李昀锐尚公主情侣自拍](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E5%B0%9A%E5%85%AC%E4%B8%BB%E6%83%85%E4%BE%A3%E8%87%AA%E6%8B%8D%23) `730.8K 🔥` `NEW`
1. [张凌赫林允归鸾相拥海报](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%9E%97%E5%85%81%E5%BD%92%E9%B8%BE%E7%9B%B8%E6%8B%A5%E6%B5%B7%E6%8A%A5%23) `727.8K 🔥` `NEW`
1. [孙颖莎说又见面了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E5%8F%88%E8%A7%81%E9%9D%A2%E4%BA%86%23) `716.6K 🔥` `NEW`
1. [潘玮柏被经纪人连发三个少吃点](https://s.weibo.com/weibo?q=%23%E6%BD%98%E7%8E%AE%E6%9F%8F%E8%A2%AB%E7%BB%8F%E7%BA%AA%E4%BA%BA%E8%BF%9E%E5%8F%91%E4%B8%89%E4%B8%AA%E5%B0%91%E5%90%83%E7%82%B9%23) `710.8K 🔥` `NEW`
1. [男子体验瀑降突发意外后住进精神科](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BD%93%E9%AA%8C%E7%80%91%E9%99%8D%E7%AA%81%E5%8F%91%E6%84%8F%E5%A4%96%E5%90%8E%E4%BD%8F%E8%BF%9B%E7%B2%BE%E7%A5%9E%E7%A7%91%23) `707.3K 🔥` `NEW`
1. [男子反抗暴力强拆致死被判无罪 (Man who resisted violent demolition and died was found not guilty)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8F%8D%E6%8A%97%E6%9A%B4%E5%8A%9B%E5%BC%BA%E6%8B%86%E8%87%B4%E6%AD%BB%E8%A2%AB%E5%88%A4%E6%97%A0%E7%BD%AA%23) `705.8K 🔥` `NEW`
1. [蒙古不法分子闯入营地滋扰中国员工](https://s.weibo.com/weibo?q=%23%E8%92%99%E5%8F%A4%E4%B8%8D%E6%B3%95%E5%88%86%E5%AD%90%E9%97%AF%E5%85%A5%E8%90%A5%E5%9C%B0%E6%BB%8B%E6%89%B0%E4%B8%AD%E5%9B%BD%E5%91%98%E5%B7%A5%23) `701.4K 🔥` `NEW`
1. [窦唯女儿自曝与父亲20年无联系](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E5%94%AF%E5%A5%B3%E5%84%BF%E8%87%AA%E6%9B%9D%E4%B8%8E%E7%88%B6%E4%BA%B220%E5%B9%B4%E6%97%A0%E8%81%94%E7%B3%BB%23) `693.9K 🔥` `NEW`
1. [杭州酒局另一关键人物也被免职](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E5%8F%A6%E4%B8%80%E5%85%B3%E9%94%AE%E4%BA%BA%E7%89%A9%E4%B9%9F%E8%A2%AB%E5%85%8D%E8%81%8C%23) `688.7K 🔥` `NEW`
1. [贝儿17岁才第一次剥虾](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%84%BF17%E5%B2%81%E6%89%8D%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%89%A5%E8%99%BE%23) `677.9K 🔥` `NEW`
1. [四川升学宴垮塌事故现场画面](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%8D%87%E5%AD%A6%E5%AE%B4%E5%9E%AE%E5%A1%8C%E4%BA%8B%E6%95%85%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `669.2K 🔥` `NEW`
1. [四川升学宴 错别字](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%8D%87%E5%AD%A6%E5%AE%B4%20%E9%94%99%E5%88%AB%E5%AD%97%23) `662.5K 🔥` `NEW`
1. [宇树股价跳水带崩机器人板块](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E8%82%A1%E4%BB%B7%E8%B7%B3%E6%B0%B4%E5%B8%A6%E5%B4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%9D%BF%E5%9D%97%23) `642.6K 🔥` `NEW`
1. [顶替案弟弟时隔7年见母亲未打招呼](https://s.weibo.com/weibo?q=%23%E9%A1%B6%E6%9B%BF%E6%A1%88%E5%BC%9F%E5%BC%9F%E6%97%B6%E9%9A%947%E5%B9%B4%E8%A7%81%E6%AF%8D%E4%BA%B2%E6%9C%AA%E6%89%93%E6%8B%9B%E5%91%BC%23) `639.4K 🔥` `NEW`
1. [黄景瑜从文弱书生切回钮祜禄大号](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E4%BB%8E%E6%96%87%E5%BC%B1%E4%B9%A6%E7%94%9F%E5%88%87%E5%9B%9E%E9%92%AE%E7%A5%9C%E7%A6%84%E5%A4%A7%E5%8F%B7%23) `636.8K 🔥` `NEW`
1. [迪丽热巴七夕你们过好不用管我 (Dilireba, enjoy your Chinese Valentine's Day and don't worry about me.)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B8%83%E5%A4%95%E4%BD%A0%E4%BB%AC%E8%BF%87%E5%A5%BD%E4%B8%8D%E7%94%A8%E7%AE%A1%E6%88%91%23) `628.7K 🔥` `NEW`
1. [杭州酒局受害女生工作十分努力](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E5%8F%97%E5%AE%B3%E5%A5%B3%E7%94%9F%E5%B7%A5%E4%BD%9C%E5%8D%81%E5%88%86%E5%8A%AA%E5%8A%9B%23) `613.4K 🔥` `NEW`
1. [王兴兴拿下90后新首富](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%85%B4%E5%85%B4%E6%8B%BF%E4%B8%8B90%E5%90%8E%E6%96%B0%E9%A6%96%E5%AF%8C%23) `611.1K 🔥` `NEW`
1. [龚俊vlog出镜尺度](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8Avlog%E5%87%BA%E9%95%9C%E5%B0%BA%E5%BA%A6%23) `607.8K 🔥` `NEW`
1. [升学宴致5死17伤主家亲属发声](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B4%E8%87%B45%E6%AD%BB17%E4%BC%A4%E4%B8%BB%E5%AE%B6%E4%BA%B2%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `4.8M 🔥` `+1196%`
1. [尚公主 (Princess Shang)](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%23) `1.8M 🔥` `+59%`
1. [中国重复使用火箭陆地回收成功](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%87%8D%E5%A4%8D%E4%BD%BF%E7%94%A8%E7%81%AB%E7%AE%AD%E9%99%86%E5%9C%B0%E5%9B%9E%E6%94%B6%E6%88%90%E5%8A%9F%23) `1.5M 🔥` `+108%`
1. [酒局被猥亵受害人因网传不实信息崩溃](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%B1%80%E8%A2%AB%E7%8C%A5%E4%BA%B5%E5%8F%97%E5%AE%B3%E4%BA%BA%E5%9B%A0%E7%BD%91%E4%BC%A0%E4%B8%8D%E5%AE%9E%E4%BF%A1%E6%81%AF%E5%B4%A9%E6%BA%83%23) `1.2M 🔥` `+102%`
1. [四川一升学宴突发事故5人死亡 (5 people died in accident at Sichuan Yisheng University Banquet)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E4%B8%80%E5%8D%87%E5%AD%A6%E5%AE%B4%E7%AA%81%E5%8F%91%E4%BA%8B%E6%95%855%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `1.2M 🔥` `+125%`
1. [剩菜剩饭直接喂猪违法](https://s.weibo.com/weibo?q=%23%E5%89%A9%E8%8F%9C%E5%89%A9%E9%A5%AD%E7%9B%B4%E6%8E%A5%E5%96%82%E7%8C%AA%E8%BF%9D%E6%B3%95%23) `773.7K 🔥` `+98%`
1. [宇树科技中一签赚47万](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%AD%E4%B8%80%E7%AD%BE%E8%B5%9A47%E4%B8%87%23) `733.5K 🔥` `+86%`
1. [顺为打新宇树科技狂赚](https://s.weibo.com/weibo?q=%23%E9%A1%BA%E4%B8%BA%E6%89%93%E6%96%B0%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E7%8B%82%E8%B5%9A%23) `721.4K 🔥` `+104%`
1. [去有风的地方 (Go to a windy place)](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E6%9C%89%E9%A3%8E%E7%9A%84%E5%9C%B0%E6%96%B9%23) `720.0K 🔥` `+78%`
1. [蓝盈莹要求工作群消息尽量秒回](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E8%A6%81%E6%B1%82%E5%B7%A5%E4%BD%9C%E7%BE%A4%E6%B6%88%E6%81%AF%E5%B0%BD%E9%87%8F%E7%A7%92%E5%9B%9E%23) `697.0K 🔥` `+70%`
1. [女孩深夜遭强奸4人均称只是协助](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%B7%B1%E5%A4%9C%E9%81%AD%E5%BC%BA%E5%A5%B84%E4%BA%BA%E5%9D%87%E7%A7%B0%E5%8F%AA%E6%98%AF%E5%8D%8F%E5%8A%A9%23) `683.4K 🔥` `+66%`
1. [将门独后七夕海报](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E4%B8%83%E5%A4%95%E6%B5%B7%E6%8A%A5%23) `676.5K 🔥` `+69%`
1. [章子怡套现3亿 (Zhang Ziyi cashed out 300 million)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E5%A5%97%E7%8E%B03%E4%BA%BF%23) `672.0K 🔥` `+65%`
1. [女子买猫窝到货后爬出一只猫](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B0%E7%8C%AB%E7%AA%9D%E5%88%B0%E8%B4%A7%E5%90%8E%E7%88%AC%E5%87%BA%E4%B8%80%E5%8F%AA%E7%8C%AB%23) `665.8K 🔥` `+22%`
1. [七夕 (Chinese Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%23) `657.0K 🔥` `+58%`
1. [武磊官博发文寻人 (Wu Lei’s official blog post is looking for someone)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E7%A3%8A%E5%AE%98%E5%8D%9A%E5%8F%91%E6%96%87%E5%AF%BB%E4%BA%BA%23) `654.7K 🔥` `+73%`
1. [武磊找的父子疑似遭到申花球迷围攻](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E7%A3%8A%E6%89%BE%E7%9A%84%E7%88%B6%E5%AD%90%E7%96%91%E4%BC%BC%E9%81%AD%E5%88%B0%E7%94%B3%E8%8A%B1%E7%90%83%E8%BF%B7%E5%9B%B4%E6%94%BB%23) `649.8K 🔥` `+75%`
1. [家属发现受害人淤青才知其被猥亵](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%B1%9E%E5%8F%91%E7%8E%B0%E5%8F%97%E5%AE%B3%E4%BA%BA%E6%B7%A4%E9%9D%92%E6%89%8D%E7%9F%A5%E5%85%B6%E8%A2%AB%E7%8C%A5%E4%BA%B5%23) `647.0K 🔥` `+22%`
1. [郭富城为一家五口换新车](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E4%B8%BA%E4%B8%80%E5%AE%B6%E4%BA%94%E5%8F%A3%E6%8D%A2%E6%96%B0%E8%BD%A6%23) `632.1K 🔥` `+66%`
1. [宇树90后创始人身家超1300亿元](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%9190%E5%90%8E%E5%88%9B%E5%A7%8B%E4%BA%BA%E8%BA%AB%E5%AE%B6%E8%B6%851300%E4%BA%BF%E5%85%83%23) `624.6K 🔥` `+55%`
1. [宇树科技高开629.44%](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E9%AB%98%E5%BC%80629.44%25%23) `620.0K 🔥` `+67%`
1. [七夕恋爱now爱意即刻到 (Chinese Valentine's Day lovenowLove is coming now)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E6%81%8B%E7%88%B1now%E7%88%B1%E6%84%8F%E5%8D%B3%E5%88%BB%E5%88%B0%23) `618.0K 🔥` `+55%`
1. [华系首款床车SUV来了](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E7%B3%BB%E9%A6%96%E6%AC%BE%E5%BA%8A%E8%BD%A6SUV%E6%9D%A5%E4%BA%86%23) `601.1K 🔥` `+55%`
1. [我的前半生原著没有贺涵](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E5%8E%9F%E8%91%97%E6%B2%A1%E6%9C%89%E8%B4%BA%E6%B6%B5%23) `599.3K 🔥` `+44%`
1. [厨房纸 致癌物](https://s.weibo.com/weibo?q=%23%E5%8E%A8%E6%88%BF%E7%BA%B8%20%E8%87%B4%E7%99%8C%E7%89%A9%23) `1.1M 🔥` `-28%`

Updated at 2026-08-19 12:08:16

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
