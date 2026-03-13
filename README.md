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

1. [吉利银河迈入长续航时代 (Geely Galaxy enters the era of long battery life)](https://s.weibo.com/weibo?q=%23%E5%90%89%E5%88%A9%E9%93%B6%E6%B2%B3%E8%BF%88%E5%85%A5%E9%95%BF%E7%BB%AD%E8%88%AA%E6%97%B6%E4%BB%A3%23) `223.3K 🔥` `NEW`
1. [张颂文硬气回应AI冲击影视行业](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A2%82%E6%96%87%E7%A1%AC%E6%B0%94%E5%9B%9E%E5%BA%94AI%E5%86%B2%E5%87%BB%E5%BD%B1%E8%A7%86%E8%A1%8C%E4%B8%9A%23) `69.3K 🔥` `NEW`
1. [手机支付一定要设置3道锁](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%94%AF%E4%BB%98%E4%B8%80%E5%AE%9A%E8%A6%81%E8%AE%BE%E7%BD%AE3%E9%81%93%E9%94%81%23) `46.0K 🔥` `NEW`
1. [李鹤来说想当演员](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%B9%A4%E6%9D%A5%E8%AF%B4%E6%83%B3%E5%BD%93%E6%BC%94%E5%91%98%23) `39.7K 🔥` `NEW`
1. [AI把茶道门槛打下来了](https://s.weibo.com/weibo?q=%23AI%E6%8A%8A%E8%8C%B6%E9%81%93%E9%97%A8%E6%A7%9B%E6%89%93%E4%B8%8B%E6%9D%A5%E4%BA%86%23) `38.8K 🔥` `NEW`
1. [专家建议A股给散户提供T加0制度](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%BB%BA%E8%AE%AEA%E8%82%A1%E7%BB%99%E6%95%A3%E6%88%B7%E6%8F%90%E4%BE%9BT%E5%8A%A00%E5%88%B6%E5%BA%A6%23) `38.8K 🔥` `NEW`
1. [白玉兰视后大年](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%90%8E%E5%A4%A7%E5%B9%B4%23) `478.3K 🔥` `+239%`
1. [多人反映贷款逾期被银行划走养老金](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BA%BA%E5%8F%8D%E6%98%A0%E8%B4%B7%E6%AC%BE%E9%80%BE%E6%9C%9F%E8%A2%AB%E9%93%B6%E8%A1%8C%E5%88%92%E8%B5%B0%E5%85%BB%E8%80%81%E9%87%91%23) `219.0K 🔥` `+42%`
1. [伊朗发起第45波打击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E8%B5%B7%E7%AC%AC45%E6%B3%A2%E6%89%93%E5%87%BB%23) `128.4K 🔥`
1. [恋与深空芬达](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E8%8A%AC%E8%BE%BE%23) `70.9K 🔥`
1. [张凌赫特别适合在很狼狈的时候爱人 (Zhang Linghe is especially suitable for loving someone when they are in a very embarrassing situation)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%89%B9%E5%88%AB%E9%80%82%E5%90%88%E5%9C%A8%E5%BE%88%E7%8B%BC%E7%8B%88%E7%9A%84%E6%97%B6%E5%80%99%E7%88%B1%E4%BA%BA%23) `62.2K 🔥`
1. [广电总局呼吁视听平台别意图垄断](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E7%94%B5%E6%80%BB%E5%B1%80%E5%91%BC%E5%90%81%E8%A7%86%E5%90%AC%E5%B9%B3%E5%8F%B0%E5%88%AB%E6%84%8F%E5%9B%BE%E5%9E%84%E6%96%AD%23) `59.0K 🔥`
1. [穿了二十厘米勉强一米七](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E4%BA%86%E4%BA%8C%E5%8D%81%E5%8E%98%E7%B1%B3%E5%8B%89%E5%BC%BA%E4%B8%80%E7%B1%B3%E4%B8%83%23) `52.0K 🔥`
1. [钎城](https://s.weibo.com/weibo?q=%23%E9%92%8E%E5%9F%8E%23) `44.9K 🔥`
1. [逐玉18集太惨了](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%8918%E9%9B%86%E5%A4%AA%E6%83%A8%E4%BA%86%23) `42.1K 🔥`
1. [钎九](https://s.weibo.com/weibo?q=%23%E9%92%8E%E4%B9%9D%23) `38.8K 🔥`
1. [花6毛骑共享单车每月被扣费173元](https://s.weibo.com/weibo?q=%23%E8%8A%B16%E6%AF%9B%E9%AA%91%E5%85%B1%E4%BA%AB%E5%8D%95%E8%BD%A6%E6%AF%8F%E6%9C%88%E8%A2%AB%E6%89%A3%E8%B4%B9173%E5%85%83%23) `356.4K 🔥` `-35%`
1. [春日里的中国经济密码](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%97%A5%E9%87%8C%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%AF%86%E7%A0%81%23) `286.0K 🔥` `-35%`
1. [呼啸山庄 (Wuthering Heights)](https://s.weibo.com/weibo?q=%23%E5%91%BC%E5%95%B8%E5%B1%B1%E5%BA%84%23) `231.5K 🔥` `-69%`
1. [田曦薇心疼樊长玉哭了](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BF%83%E7%96%BC%E6%A8%8A%E9%95%BF%E7%8E%89%E5%93%AD%E4%BA%86%23) `230.9K 🔥` `-47%`
1. [以色列总统称特朗普攻击国家主权](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%80%BB%E7%BB%9F%E7%A7%B0%E7%89%B9%E6%9C%97%E6%99%AE%E6%94%BB%E5%87%BB%E5%9B%BD%E5%AE%B6%E4%B8%BB%E6%9D%83%23) `225.6K 🔥` `-47%`
1. [专家建议建立新就业群体专项年金 (Experts recommend establishing special annuities for new employment groups)](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%BB%BA%E8%AE%AE%E5%BB%BA%E7%AB%8B%E6%96%B0%E5%B0%B1%E4%B8%9A%E7%BE%A4%E4%BD%93%E4%B8%93%E9%A1%B9%E5%B9%B4%E9%87%91%23) `212.9K 🔥` `-50%`
1. [跟着人大代表来做操全身都通了](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E4%BA%BA%E5%A4%A7%E4%BB%A3%E8%A1%A8%E6%9D%A5%E5%81%9A%E6%93%8D%E5%85%A8%E8%BA%AB%E9%83%BD%E9%80%9A%E4%BA%86%23) `208.9K 🔥` `-50%`
1. [十五五规划是施工图也是邀请函](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E6%98%AF%E6%96%BD%E5%B7%A5%E5%9B%BE%E4%B9%9F%E6%98%AF%E9%82%80%E8%AF%B7%E5%87%BD%23) `204.0K 🔥` `-51%`
1. [瞿颖让我笑一天了 (Qu Ying made me laugh all day long)](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E8%AE%A9%E6%88%91%E7%AC%91%E4%B8%80%E5%A4%A9%E4%BA%86%23) `202.3K 🔥` `-51%`
1. [九尾 这导播是真恶心](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%20%E8%BF%99%E5%AF%BC%E6%92%AD%E6%98%AF%E7%9C%9F%E6%81%B6%E5%BF%83%23) `182.2K 🔥` `-35%`
1. [男一男二男三男四男五](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%B8%80%E7%94%B7%E4%BA%8C%E7%94%B7%E4%B8%89%E7%94%B7%E5%9B%9B%E7%94%B7%E4%BA%94%23) `153.6K 🔥` `-52%`
1. [西安不倒翁小姐姐离职丈夫回应](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%8D%E5%80%92%E7%BF%81%E5%B0%8F%E5%A7%90%E5%A7%90%E7%A6%BB%E8%81%8C%E4%B8%88%E5%A4%AB%E5%9B%9E%E5%BA%94%23) `105.2K 🔥` `-29%`
1. [父亲回应女婴出生2天被爷爷丢弃厕所](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%A9%B4%E5%87%BA%E7%94%9F2%E5%A4%A9%E8%A2%AB%E7%88%B7%E7%88%B7%E4%B8%A2%E5%BC%83%E5%8E%95%E6%89%80%23) `97.7K 🔥` `-22%`
1. [胖东来](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%23) `84.0K 🔥` `-81%`
1. [男子维权被12315工作人员嘲讽](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BB%B4%E6%9D%83%E8%A2%AB12315%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%98%B2%E8%AE%BD%23) `78.7K 🔥` `-49%`
1. [呼啸山庄尺度好大 (Wuthering Heights is so big)](https://s.weibo.com/weibo?q=%23%E5%91%BC%E5%95%B8%E5%B1%B1%E5%BA%84%E5%B0%BA%E5%BA%A6%E5%A5%BD%E5%A4%A7%23) `68.5K 🔥` `-45%`
1. [印度90岁妇人遭4蒙面男子强奸](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A690%E5%B2%81%E5%A6%87%E4%BA%BA%E9%81%AD4%E8%92%99%E9%9D%A2%E7%94%B7%E5%AD%90%E5%BC%BA%E5%A5%B8%23) `68.1K 🔥` `-45%`
1. [研究称第二次怀孕会继续重塑大脑 (Second pregnancy continues to reshape brain, study says)](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E7%A7%B0%E7%AC%AC%E4%BA%8C%E6%AC%A1%E6%80%80%E5%AD%95%E4%BC%9A%E7%BB%A7%E7%BB%AD%E9%87%8D%E5%A1%91%E5%A4%A7%E8%84%91%23) `67.2K 🔥` `-45%`
1. [2026白玉兰提名名单预测](https://s.weibo.com/weibo?q=%232026%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%E9%A2%84%E6%B5%8B%23) `66.4K 🔥` `-46%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `66.1K 🔥` `-46%`
1. [美军坠毁加油机上6人全死](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%9D%A0%E6%AF%81%E5%8A%A0%E6%B2%B9%E6%9C%BA%E4%B8%8A6%E4%BA%BA%E5%85%A8%E6%AD%BB%23) `65.1K 🔥` `-69%`
1. [张凌赫田曦薇头纱转场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E5%A4%B4%E7%BA%B1%E8%BD%AC%E5%9C%BA%23) `64.1K 🔥` `-47%`
1. [FBI警告伊朗或突袭美国本土](https://s.weibo.com/weibo?q=%23FBI%E8%AD%A6%E5%91%8A%E4%BC%8A%E6%9C%97%E6%88%96%E7%AA%81%E8%A2%AD%E7%BE%8E%E5%9B%BD%E6%9C%AC%E5%9C%9F%23) `63.4K 🔥` `-35%`
1. [随元青我恨你](https://s.weibo.com/weibo?q=%23%E9%9A%8F%E5%85%83%E9%9D%92%E6%88%91%E6%81%A8%E4%BD%A0%23) `62.2K 🔥` `-38%`
1. [邓凯晋江式演技上新了](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E6%99%8B%E6%B1%9F%E5%BC%8F%E6%BC%94%E6%8A%80%E4%B8%8A%E6%96%B0%E4%BA%86%23) `52.9K 🔥` `-58%`
1. [赵今麦范丞丞 电影](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%8C%83%E4%B8%9E%E4%B8%9E%20%E7%94%B5%E5%BD%B1%23) `48.0K 🔥` `-39%`
1. [省考 紧张](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%20%E7%B4%A7%E5%BC%A0%23) `46.2K 🔥` `-89%`
1. [孙燕姿演唱会 (Stefanie Sun concert)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `45.2K 🔥` `-27%`
1. [王一博完全不需要翻译](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%AE%8C%E5%85%A8%E4%B8%8D%E9%9C%80%E8%A6%81%E7%BF%BB%E8%AF%91%23) `44.7K 🔥` `-39%`
1. [李羲承单独进行签售](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E5%8D%95%E7%8B%AC%E8%BF%9B%E8%A1%8C%E7%AD%BE%E5%94%AE%23) `40.0K 🔥` `-27%`
1. [啄木鸟通马桶10分钟收448元](https://s.weibo.com/weibo?q=%23%E5%95%84%E6%9C%A8%E9%B8%9F%E9%80%9A%E9%A9%AC%E6%A1%B610%E5%88%86%E9%92%9F%E6%94%B6448%E5%85%83%23) `38.8K 🔥` `-47%`
1. [王橹杰没想到的成片 (Wang Lujie’s Unexpected Filmmaking)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%B2%A1%E6%83%B3%E5%88%B0%E7%9A%84%E6%88%90%E7%89%87%23) `38.8K 🔥` `-29%`
1. [18岁女生被诱导贷8万做医美](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E5%A5%B3%E7%94%9F%E8%A2%AB%E8%AF%B1%E5%AF%BC%E8%B4%B78%E4%B8%87%E5%81%9A%E5%8C%BB%E7%BE%8E%23) `38.8K 🔥` `-42%`
1. [女孩牙里卡勺子就医后自己薅了出来](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%89%99%E9%87%8C%E5%8D%A1%E5%8B%BA%E5%AD%90%E5%B0%B1%E5%8C%BB%E5%90%8E%E8%87%AA%E5%B7%B1%E8%96%85%E4%BA%86%E5%87%BA%E6%9D%A5%23) `38.8K 🔥` `-31%`
1. [懒人冰箱 (Lazy refrigerator)](https://s.weibo.com/weibo?q=%23%E6%87%92%E4%BA%BA%E5%86%B0%E7%AE%B1%23) `38.8K 🔥` `-50%`

Updated at 2026-03-14 01:22:47

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
