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

1. [张豆豆回应孙杨被说妈宝男 (Zhang Doudou responded to Sun Yang being called a "baby boy")](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B1%86%E8%B1%86%E5%9B%9E%E5%BA%94%E5%AD%99%E6%9D%A8%E8%A2%AB%E8%AF%B4%E5%A6%88%E5%AE%9D%E7%94%B7%23) `783.2K 🔥` `NEW`
1. [伊朗外长说美国必须二选一](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E8%AF%B4%E7%BE%8E%E5%9B%BD%E5%BF%85%E9%A1%BB%E4%BA%8C%E9%80%89%E4%B8%80%23) `438.7K 🔥` `NEW`
1. [张萌谈冰湖重生为什么没换角](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E8%B0%88%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B2%A1%E6%8D%A2%E8%A7%92%23) `233.0K 🔥` `NEW`
1. [蓝莓价格几乎腰斩](https://s.weibo.com/weibo?q=%23%E8%93%9D%E8%8E%93%E4%BB%B7%E6%A0%BC%E5%87%A0%E4%B9%8E%E8%85%B0%E6%96%A9%23) `212.7K 🔥` `NEW`
1. [迪丽热巴不知道市面上有什么剧本](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B8%8D%E7%9F%A5%E9%81%93%E5%B8%82%E9%9D%A2%E4%B8%8A%E6%9C%89%E4%BB%80%E4%B9%88%E5%89%A7%E6%9C%AC%23) `196.3K 🔥` `NEW`
1. [孙俪回应危险关系收视率不好](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%9B%9E%E5%BA%94%E5%8D%B1%E9%99%A9%E5%85%B3%E7%B3%BB%E6%94%B6%E8%A7%86%E7%8E%87%E4%B8%8D%E5%A5%BD%23) `188.8K 🔥` `NEW`
1. [爱格](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%A0%BC%23) `185.1K 🔥` `NEW`
1. [妻子的浪漫旅行](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E7%9A%84%E6%B5%AA%E6%BC%AB%E6%97%85%E8%A1%8C%23) `171.9K 🔥` `NEW`
1. [女子空腹半斤蓝莓连吃两天患胃石症](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A9%BA%E8%85%B9%E5%8D%8A%E6%96%A4%E8%93%9D%E8%8E%93%E8%BF%9E%E5%90%83%E4%B8%A4%E5%A4%A9%E6%82%A3%E8%83%83%E7%9F%B3%E7%97%87%23) `166.3K 🔥` `NEW`
1. [金子涵称后脑勺伤疤是植发手术留下的](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E7%A7%B0%E5%90%8E%E8%84%91%E5%8B%BA%E4%BC%A4%E7%96%A4%E6%98%AF%E6%A4%8D%E5%8F%91%E6%89%8B%E6%9C%AF%E7%95%99%E4%B8%8B%E7%9A%84%23) `146.8K 🔥` `NEW`
1. [美国的停火谈判被以色列加了备注 (U.S. ceasefire talks were remarked by Israel)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%9A%84%E5%81%9C%E7%81%AB%E8%B0%88%E5%88%A4%E8%A2%AB%E4%BB%A5%E8%89%B2%E5%88%97%E5%8A%A0%E4%BA%86%E5%A4%87%E6%B3%A8%23) `138.6K 🔥` `NEW`
1. [张雪宣布捐赠嫣然加码](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%AE%A3%E5%B8%83%E6%8D%90%E8%B5%A0%E5%AB%A3%E7%84%B6%E5%8A%A0%E7%A0%81%23) `110.8K 🔥` `NEW`
1. [母亲回应儿子骚扰已婚初中女同学](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E5%9B%9E%E5%BA%94%E5%84%BF%E5%AD%90%E9%AA%9A%E6%89%B0%E5%B7%B2%E5%A9%9A%E5%88%9D%E4%B8%AD%E5%A5%B3%E5%90%8C%E5%AD%A6%23) `106.4K 🔥` `NEW`
1. [胃癌真的是拖出来的](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E7%9C%9F%E7%9A%84%E6%98%AF%E6%8B%96%E5%87%BA%E6%9D%A5%E7%9A%84%23) `106.2K 🔥` `NEW`
1. [用了很久的苹果手机才发现的功能](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%BA%86%E5%BE%88%E4%B9%85%E7%9A%84%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%E6%89%8D%E5%8F%91%E7%8E%B0%E7%9A%84%E5%8A%9F%E8%83%BD%23) `105.8K 🔥` `NEW`
1. [王楚钦剪头发了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%89%AA%E5%A4%B4%E5%8F%91%E4%BA%86%23) `105.3K 🔥` `NEW`
1. [金价跌破4700](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E7%A0%B44700%23) `104.6K 🔥` `NEW`
1. [女子顺手买18元彩票中814万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%A1%BA%E6%89%8B%E4%B9%B018%E5%85%83%E5%BD%A9%E7%A5%A8%E4%B8%AD814%E4%B8%87%23) `103.3K 🔥` `NEW`
1. [以色列民众对空袭黎巴嫩感到不解](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%B0%91%E4%BC%97%E5%AF%B9%E7%A9%BA%E8%A2%AD%E9%BB%8E%E5%B7%B4%E5%AB%A9%E6%84%9F%E5%88%B0%E4%B8%8D%E8%A7%A3%23) `99.9K 🔥` `NEW`
1. [A股大涨原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%A4%A7%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `89.6K 🔥` `NEW`
1. [当妈妈把欧洲特产蒸了后 (When my mother steamed European specialties)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%A6%88%E5%A6%88%E6%8A%8A%E6%AC%A7%E6%B4%B2%E7%89%B9%E4%BA%A7%E8%92%B8%E4%BA%86%E5%90%8E%23) `87.5K 🔥` `NEW`
1. [2026王者挑杯抽签仪式](https://s.weibo.com/weibo?q=%232026%E7%8E%8B%E8%80%85%E6%8C%91%E6%9D%AF%E6%8A%BD%E7%AD%BE%E4%BB%AA%E5%BC%8F%23) `78.8K 🔥` `NEW`
1. [冰湖重生和楚乔传结局连上了](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E5%92%8C%E6%A5%9A%E4%B9%94%E4%BC%A0%E7%BB%93%E5%B1%80%E8%BF%9E%E4%B8%8A%E4%BA%86%23) `77.9K 🔥` `NEW`
1. [黄金店年薪45万抢空乘](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%BA%97%E5%B9%B4%E8%96%AA45%E4%B8%87%E6%8A%A2%E7%A9%BA%E4%B9%98%23) `75.9K 🔥` `NEW`
1. [九尾 你们表情包再多点](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%20%E4%BD%A0%E4%BB%AC%E8%A1%A8%E6%83%85%E5%8C%85%E5%86%8D%E5%A4%9A%E7%82%B9%23) `71.3K 🔥` `NEW`
1. [房贷年利率3.8变8.7五年才发现](https://s.weibo.com/weibo?q=%23%E6%88%BF%E8%B4%B7%E5%B9%B4%E5%88%A9%E7%8E%873.8%E5%8F%988.7%E4%BA%94%E5%B9%B4%E6%89%8D%E5%8F%91%E7%8E%B0%23) `1.1M 🔥` `+184%`
1. [男子骚扰已婚初中同学要求对方离婚](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%AA%9A%E6%89%B0%E5%B7%B2%E5%A9%9A%E5%88%9D%E4%B8%AD%E5%90%8C%E5%AD%A6%E8%A6%81%E6%B1%82%E5%AF%B9%E6%96%B9%E7%A6%BB%E5%A9%9A%23) `217.0K 🔥` `+26%`
1. [金莎孙丞潇已完成婚前财产公证](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E5%B7%B2%E5%AE%8C%E6%88%90%E5%A9%9A%E5%89%8D%E8%B4%A2%E4%BA%A7%E5%85%AC%E8%AF%81%23) `189.4K 🔥` `+53%`
1. [体验式消费点亮春日经济](https://s.weibo.com/weibo?q=%23%E4%BD%93%E9%AA%8C%E5%BC%8F%E6%B6%88%E8%B4%B9%E7%82%B9%E4%BA%AE%E6%98%A5%E6%97%A5%E7%BB%8F%E6%B5%8E%23) `633.2K 🔥`
1. [十万头猪拱进沙漠治沙真成了](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%87%E5%A4%B4%E7%8C%AA%E6%8B%B1%E8%BF%9B%E6%B2%99%E6%BC%A0%E6%B2%BB%E6%B2%99%E7%9C%9F%E6%88%90%E4%BA%86%23) `320.3K 🔥`
1. [金莎孙丞潇领证 (Jinsha Sun Chengxiao receives the certificate)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E9%A2%86%E8%AF%81%23) `197.3K 🔥`
1. [以色列政坛集体破防](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%94%BF%E5%9D%9B%E9%9B%86%E4%BD%93%E7%A0%B4%E9%98%B2%23) `193.9K 🔥`
1. [郑合惠子签约杨幂新公司](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E7%AD%BE%E7%BA%A6%E6%9D%A8%E5%B9%82%E6%96%B0%E5%85%AC%E5%8F%B8%23) `189.8K 🔥`
1. [乳腺癌早期的5个警示症状](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E8%85%BA%E7%99%8C%E6%97%A9%E6%9C%9F%E7%9A%845%E4%B8%AA%E8%AD%A6%E7%A4%BA%E7%97%87%E7%8A%B6%23) `189.8K 🔥`
1. [金子涵直播疑似求救 (Jin Jinhan's live broadcast is suspected of asking for help)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E7%9B%B4%E6%92%AD%E7%96%91%E4%BC%BC%E6%B1%82%E6%95%91%23) `169.4K 🔥`
1. [81岁的潘迎紫](https://s.weibo.com/weibo?q=%2381%E5%B2%81%E7%9A%84%E6%BD%98%E8%BF%8E%E7%B4%AB%23) `169.3K 🔥`
1. [垫底辣孩回应恋情 (The hottie at the bottom responds to love)](https://s.weibo.com/weibo?q=%23%E5%9E%AB%E5%BA%95%E8%BE%A3%E5%AD%A9%E5%9B%9E%E5%BA%94%E6%81%8B%E6%83%85%23) `133.0K 🔥`
1. [乳腺结节有3个特征更易癌变 (Breast nodules have 3 characteristics that make them more likely to become cancerous)](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E8%85%BA%E7%BB%93%E8%8A%82%E6%9C%893%E4%B8%AA%E7%89%B9%E5%BE%81%E6%9B%B4%E6%98%93%E7%99%8C%E5%8F%98%23) `104.6K 🔥`
1. [女孩玩拼豆不幸触电离世 (Girl dies after being electrocuted while playing Pinto)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%8E%A9%E6%8B%BC%E8%B1%86%E4%B8%8D%E5%B9%B8%E8%A7%A6%E7%94%B5%E7%A6%BB%E4%B8%96%23) `607.2K 🔥` `-47%`
1. [20元中6715万彩票店老板发声](https://s.weibo.com/weibo?q=%2320%E5%85%83%E4%B8%AD6715%E4%B8%87%E5%BD%A9%E7%A5%A8%E5%BA%97%E8%80%81%E6%9D%BF%E5%8F%91%E5%A3%B0%23) `199.5K 🔥` `-38%`
1. [多国齐声谴责以色列](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E9%BD%90%E5%A3%B0%E8%B0%B4%E8%B4%A3%E4%BB%A5%E8%89%B2%E5%88%97%23) `169.4K 🔥` `-52%`
1. [35岁孕妇吃冰箱剩菜后去世](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%AD%95%E5%A6%87%E5%90%83%E5%86%B0%E7%AE%B1%E5%89%A9%E8%8F%9C%E5%90%8E%E5%8E%BB%E4%B8%96%23) `169.3K 🔥` `-80%`
1. [胃不好的人每天belike](https://s.weibo.com/weibo?q=%23%E8%83%83%E4%B8%8D%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%AF%8F%E5%A4%A9belike%23) `147.4K 🔥` `-23%`
1. [35岁女子身高154cm腹围159cm](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%A5%B3%E5%AD%90%E8%BA%AB%E9%AB%98154cm%E8%85%B9%E5%9B%B4159cm%23) `103.0K 🔥` `-34%`
1. [17部影片定档2026五一档 (17 films scheduled for May Day 2026)](https://s.weibo.com/weibo?q=%2317%E9%83%A8%E5%BD%B1%E7%89%87%E5%AE%9A%E6%A1%A32026%E4%BA%94%E4%B8%80%E6%A1%A3%23) `96.5K 🔥` `-69%`
1. [妈妈帮女儿相亲赚了200多万](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%B8%AE%E5%A5%B3%E5%84%BF%E7%9B%B8%E4%BA%B2%E8%B5%9A%E4%BA%86200%E5%A4%9A%E4%B8%87%23) `95.0K 🔥` `-31%`
1. [男子求复合遭女友拒绝次日坠楼身亡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%B1%82%E5%A4%8D%E5%90%88%E9%81%AD%E5%A5%B3%E5%8F%8B%E6%8B%92%E7%BB%9D%E6%AC%A1%E6%97%A5%E5%9D%A0%E6%A5%BC%E8%BA%AB%E4%BA%A1%23) `78.4K 🔥` `-63%`
1. [六小龄童马德华吊唁陈丽华](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%B0%8F%E9%BE%84%E7%AB%A5%E9%A9%AC%E5%BE%B7%E5%8D%8E%E5%90%8A%E5%94%81%E9%99%88%E4%B8%BD%E5%8D%8E%23) `77.0K 🔥` `-52%`
1. [肠胃不好的人吃水果要有选择](https://s.weibo.com/weibo?q=%23%E8%82%A0%E8%83%83%E4%B8%8D%E5%A5%BD%E7%9A%84%E4%BA%BA%E5%90%83%E6%B0%B4%E6%9E%9C%E8%A6%81%E6%9C%89%E9%80%89%E6%8B%A9%23) `70.4K 🔥` `-37%`

Updated at 2026-04-09 14:58:34

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
