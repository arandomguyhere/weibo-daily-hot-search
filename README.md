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

1. [特斯拉销量从第1掉至66名](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E9%94%80%E9%87%8F%E4%BB%8E%E7%AC%AC1%E6%8E%89%E8%87%B366%E5%90%8D%23) `1.1M 🔥` `NEW`
1. [短信提醒被取消卡里26万没了](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E4%BF%A1%E6%8F%90%E9%86%92%E8%A2%AB%E5%8F%96%E6%B6%88%E5%8D%A1%E9%87%8C26%E4%B8%87%E6%B2%A1%E4%BA%86%23) `860.1K 🔥` `NEW`
1. [我国工业经济持续向新向优向好](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%B7%A5%E4%B8%9A%E7%BB%8F%E6%B5%8E%E6%8C%81%E7%BB%AD%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%E5%90%91%E5%A5%BD%23) `634.0K 🔥` `NEW`
1. [京东多买多返攒积分赚100元11.11购物E卡](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%A4%9A%E4%B9%B0%E5%A4%9A%E8%BF%94%E6%94%92%E7%A7%AF%E5%88%86%E8%B5%9A100%E5%85%8311.11%E8%B4%AD%E7%89%A9E%E5%8D%A1%23) `623.4K 🔥` `NEW`
1. [幼儿园小学初中学龄人口已达峰](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E5%B0%8F%E5%AD%A6%E5%88%9D%E4%B8%AD%E5%AD%A6%E9%BE%84%E4%BA%BA%E5%8F%A3%E5%B7%B2%E8%BE%BE%E5%B3%B0%23) `621.6K 🔥` `NEW`
1. [王子璇是真的受影响最多的](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E6%98%AF%E7%9C%9F%E7%9A%84%E5%8F%97%E5%BD%B1%E5%93%8D%E6%9C%80%E5%A4%9A%E7%9A%84%23) `530.4K 🔥` `NEW`
1. [W盛典最牛的裙子](https://s.weibo.com/weibo?q=%23W%E7%9B%9B%E5%85%B8%E6%9C%80%E7%89%9B%E7%9A%84%E8%A3%99%E5%AD%90%23) `486.8K 🔥` `NEW`
1. [花坛藏尸案凶手翻供仍判死刑](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%9D%9B%E8%97%8F%E5%B0%B8%E6%A1%88%E5%87%B6%E6%89%8B%E7%BF%BB%E4%BE%9B%E4%BB%8D%E5%88%A4%E6%AD%BB%E5%88%91%23) `481.9K 🔥` `NEW`
1. [等风热吻你全阵容官宣](https://s.weibo.com/weibo?q=%23%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%E5%85%A8%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `475.8K 🔥` `NEW`
1. [花坛藏尸案被告长相曝光](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%9D%9B%E8%97%8F%E5%B0%B8%E6%A1%88%E8%A2%AB%E5%91%8A%E9%95%BF%E7%9B%B8%E6%9B%9D%E5%85%89%23) `392.4K 🔥` `NEW`
1. [2026疯狂好六夜节目单](https://s.weibo.com/weibo?q=%232026%E7%96%AF%E7%8B%82%E5%A5%BD%E5%85%AD%E5%A4%9C%E8%8A%82%E7%9B%AE%E5%8D%95%23) `388.6K 🔥` `NEW`
1. [我是井柏然也冷 我是白敬亭也热](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%98%AF%E4%BA%95%E6%9F%8F%E7%84%B6%E4%B9%9F%E5%86%B7%20%E6%88%91%E6%98%AF%E7%99%BD%E6%95%AC%E4%BA%AD%E4%B9%9F%E7%83%AD%23) `386.8K 🔥` `NEW`
1. [发现已经过上了中年人最好的生活了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%B7%B2%E7%BB%8F%E8%BF%87%E4%B8%8A%E4%BA%86%E4%B8%AD%E5%B9%B4%E4%BA%BA%E6%9C%80%E5%A5%BD%E7%9A%84%E7%94%9F%E6%B4%BB%E4%BA%86%23) `383.6K 🔥` `NEW`
1. [文吉儿 王子璇](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%20%E7%8E%8B%E5%AD%90%E7%92%87%23) `372.4K 🔥` `NEW`
1. [BLG回应樊振东](https://s.weibo.com/weibo?q=%23BLG%E5%9B%9E%E5%BA%94%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `367.2K 🔥` `NEW`
1. [厉娜曾登许飞的号发帖](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E6%9B%BE%E7%99%BB%E8%AE%B8%E9%A3%9E%E7%9A%84%E5%8F%B7%E5%8F%91%E5%B8%96%23) `365.2K 🔥` `NEW`
1. [女子月薪2万被裁才知社保基数按4000算](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9C%88%E8%96%AA2%E4%B8%87%E8%A2%AB%E8%A3%81%E6%89%8D%E7%9F%A5%E7%A4%BE%E4%BF%9D%E5%9F%BA%E6%95%B0%E6%8C%894000%E7%AE%97%23) `362.7K 🔥` `NEW`
1. [文班三分线上篮](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%B8%89%E5%88%86%E7%BA%BF%E4%B8%8A%E7%AF%AE%23) `330.7K 🔥` `NEW`
1. [闫桉嫁金钗收官千字长文](https://s.weibo.com/weibo?q=%23%E9%97%AB%E6%A1%89%E5%AB%81%E9%87%91%E9%92%97%E6%94%B6%E5%AE%98%E5%8D%83%E5%AD%97%E9%95%BF%E6%96%87%23) `267.1K 🔥` `NEW`
1. [嫁金钗这一段是穿帮了吗](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E8%BF%99%E4%B8%80%E6%AE%B5%E6%98%AF%E7%A9%BF%E5%B8%AE%E4%BA%86%E5%90%97%23) `266.2K 🔥` `NEW`
1. [现代人对婚姻要求太高了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E4%BB%A3%E4%BA%BA%E5%AF%B9%E5%A9%9A%E5%A7%BB%E8%A6%81%E6%B1%82%E5%A4%AA%E9%AB%98%E4%BA%86%23) `264.3K 🔥` `NEW`
1. [哆啦A梦引发印日网络骂战](https://s.weibo.com/weibo?q=%23%E5%93%86%E5%95%A6A%E6%A2%A6%E5%BC%95%E5%8F%91%E5%8D%B0%E6%97%A5%E7%BD%91%E7%BB%9C%E9%AA%82%E6%88%98%23) `263.6K 🔥` `NEW`
1. [终于搞懂为啥高碳水反而瘦了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%90%9E%E6%87%82%E4%B8%BA%E5%95%A5%E9%AB%98%E7%A2%B3%E6%B0%B4%E5%8F%8D%E8%80%8C%E7%98%A6%E4%BA%86%23) `261.3K 🔥` `NEW`
1. [爱吃碳水的人天亮了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E7%A2%B3%E6%B0%B4%E7%9A%84%E4%BA%BA%E5%A4%A9%E4%BA%AE%E4%BA%86%23) `260.7K 🔥` `NEW`
1. [华为小折叠电脑 平板](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%B0%8F%E6%8A%98%E5%8F%A0%E7%94%B5%E8%84%91%20%E5%B9%B3%E6%9D%BF%23) `259.3K 🔥` `NEW`
1. [老板娘找大冰借13万被拒](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E5%A8%98%E6%89%BE%E5%A4%A7%E5%86%B0%E5%80%9F13%E4%B8%87%E8%A2%AB%E6%8B%92%23) `247.8K 🔥` `NEW`
1. [纯稚缺席录制后会友期](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%A8%9A%E7%BC%BA%E5%B8%AD%E5%BD%95%E5%88%B6%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%23) `219.4K 🔥` `NEW`
1. [东北成人礼割双眼皮是真的吗](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E6%88%90%E4%BA%BA%E7%A4%BC%E5%89%B2%E5%8F%8C%E7%9C%BC%E7%9A%AE%E6%98%AF%E7%9C%9F%E7%9A%84%E5%90%97%23) `206.3K 🔥` `NEW`
1. [法拉利老了也不全是法拉利](https://s.weibo.com/weibo?q=%23%E6%B3%95%E6%8B%89%E5%88%A9%E8%80%81%E4%BA%86%E4%B9%9F%E4%B8%8D%E5%85%A8%E6%98%AF%E6%B3%95%E6%8B%89%E5%88%A9%23) `203.8K 🔥` `NEW`
1. [房租两千多像每月被偷电瓶车](https://s.weibo.com/weibo?q=%23%E6%88%BF%E7%A7%9F%E4%B8%A4%E5%8D%83%E5%A4%9A%E5%83%8F%E6%AF%8F%E6%9C%88%E8%A2%AB%E5%81%B7%E7%94%B5%E7%93%B6%E8%BD%A6%23) `201.3K 🔥` `NEW`
1. [房主不满拆迁赔偿直播施压](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%B8%8D%E6%BB%A1%E6%8B%86%E8%BF%81%E8%B5%94%E5%81%BF%E7%9B%B4%E6%92%AD%E6%96%BD%E5%8E%8B%23) `196.1K 🔥` `NEW`
1. [才知道大学有这么多信息差](https://s.weibo.com/weibo?q=%23%E6%89%8D%E7%9F%A5%E9%81%93%E5%A4%A7%E5%AD%A6%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E4%BF%A1%E6%81%AF%E5%B7%AE%23) `190.7K 🔥` `NEW`
1. [虞书欣上海演唱会票价](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%8A%E6%B5%B7%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E4%BB%B7%23) `181.9K 🔥` `NEW`
1. [白小纯竞燃之夜官宣](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%AB%9E%E7%87%83%E4%B9%8B%E5%A4%9C%E5%AE%98%E5%AE%A3%23) `176.7K 🔥` `NEW`
1. [RTX50系列显卡价格跳水](https://s.weibo.com/weibo?q=%23RTX50%E7%B3%BB%E5%88%97%E6%98%BE%E5%8D%A1%E4%BB%B7%E6%A0%BC%E8%B7%B3%E6%B0%B4%23) `176.4K 🔥` `NEW`
1. [Bin夸和Zeus的AI短剧](https://s.weibo.com/weibo?q=%23Bin%E5%A4%B8%E5%92%8CZeus%E7%9A%84AI%E7%9F%AD%E5%89%A7%23) `165.7K 🔥` `NEW`
1. [那英马嘉祺宋亚轩张真源好六夜合作](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E9%A9%AC%E5%98%89%E7%A5%BA%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%A5%BD%E5%85%AD%E5%A4%9C%E5%90%88%E4%BD%9C%23) `164.3K 🔥` `NEW`
1. [花坛藏尸案凶手多次赴韩整容](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%9D%9B%E8%97%8F%E5%B0%B8%E6%A1%88%E5%87%B6%E6%89%8B%E5%A4%9A%E6%AC%A1%E8%B5%B4%E9%9F%A9%E6%95%B4%E5%AE%B9%23) `154.6K 🔥` `NEW`
1. [厉娜视角许飞撩完就跑](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E8%A7%86%E8%A7%92%E8%AE%B8%E9%A3%9E%E6%92%A9%E5%AE%8C%E5%B0%B1%E8%B7%91%23) `154.2K 🔥` `NEW`
1. [TEC](https://s.weibo.com/weibo?q=%23TEC%23) `143.9K 🔥` `NEW`
1. [勇士8连胜](https://s.weibo.com/weibo?q=%23%E5%8B%87%E5%A3%AB8%E8%BF%9E%E8%83%9C%23) `142.9K 🔥` `NEW`
1. [李勒优晋妈分开算账](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E6%99%8B%E5%A6%88%E5%88%86%E5%BC%80%E7%AE%97%E8%B4%A6%23) `130.3K 🔥` `NEW`
1. [宋人早发明了更高级的下午茶](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%BA%E6%97%A9%E5%8F%91%E6%98%8E%E4%BA%86%E6%9B%B4%E9%AB%98%E7%BA%A7%E7%9A%84%E4%B8%8B%E5%8D%88%E8%8C%B6%23) `130.0K 🔥` `NEW`
1. [感觉魏娆穿越到了现代](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E9%AD%8F%E5%A8%86%E7%A9%BF%E8%B6%8A%E5%88%B0%E4%BA%86%E7%8E%B0%E4%BB%A3%23) `129.8K 🔥` `NEW`
1. [这届减肥人不用挨饿也不用挨针了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%8A%E5%87%8F%E8%82%A5%E4%BA%BA%E4%B8%8D%E7%94%A8%E6%8C%A8%E9%A5%BF%E4%B9%9F%E4%B8%8D%E7%94%A8%E6%8C%A8%E9%92%88%E4%BA%86%23) `127.1K 🔥` `NEW`
1. [花坛藏尸案一审宣判现场画面曝光](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%9D%9B%E8%97%8F%E5%B0%B8%E6%A1%88%E4%B8%80%E5%AE%A1%E5%AE%A3%E5%88%A4%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `125.0K 🔥` `NEW`
1. [保暖和体面我都要](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%9A%96%E5%92%8C%E4%BD%93%E9%9D%A2%E6%88%91%E9%83%BD%E8%A6%81%23) `124.2K 🔥` `NEW`
1. [刘浩存问刘诗诗冷吗](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E9%97%AE%E5%88%98%E8%AF%97%E8%AF%97%E5%86%B7%E5%90%97%23) `124.2K 🔥` `NEW`
1. [金晨 没澄清不住海边没有妹妹](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%20%E6%B2%A1%E6%BE%84%E6%B8%85%E4%B8%8D%E4%BD%8F%E6%B5%B7%E8%BE%B9%E6%B2%A1%E6%9C%89%E5%A6%B9%E5%A6%B9%23) `378.4K 🔥` `+71%`
1. [张凌赫是真升咖了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%98%AF%E7%9C%9F%E5%8D%87%E5%92%96%E4%BA%86%23) `130.4K 🔥` `-45%`

Updated at 2026-11-10 15:18:37

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
